import { NowRequest, NowResponse } from '@vercel/node';
import { MongoClient, Db, ObjectID } from 'mongodb';
import { decode } from 'jsonwebtoken';
import Cryptr from 'cryptr';
import url from 'url';

let cachedDb: Db = null;

async function connectToDatabse(uri: string) {
  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const dbName = url.parse(uri).pathname.substr(1);
  const db = client.db(dbName);
  cachedDb = db;

  return db;
}

export default async (request: NowRequest, response: NowResponse) => {
  const { authorization } = request.headers;

  const token = authorization.split(' ')[1];

  const userId = decode(token).sub;

  if (!userId) {
    return response.status(401).json({ message: 'Validation fails.' });
  }

  try {
    const db = await connectToDatabse(process.env.MONGO_CONNECTION);
    const hashesCollection = db.collection('hashes');
    const usersCollection = db.collection('users');

    const userExists = await usersCollection.findOne({
      _id: new ObjectID(userId),
    });

    if (!userExists) {
      return response.status(401).json({ message: 'User does not exists.' });
    }

    const hashes = hashesCollection.find({
      user_id: new ObjectID(userId),
    });

    const cryptr = new Cryptr(process.env.HASH_KEY);

    const serializedHashes = hashes.map(hash => {
      const { created_at, website, hash: password, _id } = hash;

      return {
        id: _id,
        website,
        created_at,
        password: cryptr.decrypt(password),
      };
    });

    return response.status(204).json(serializedHashes);
  } catch (err) {
    return response.status(400).json({ message: 'Error, try again.' });
  }
};
