import { NowRequest, NowResponse } from '@vercel/node';
import { MongoClient, Db, ObjectID } from 'mongodb';
import { decode } from 'jsonwebtoken';
import crypto from 'crypto';
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
  const { website, password } = request.body;
  const { authorization } = request.headers;

  const token = authorization.split(' ')[1];

  const userId = decode(token).sub;

  if (!website || !password || !userId) {
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

    const foundedHash = await hashesCollection.findOne({
      user_id: userExists._id,
      website: website.trim().toLowerCase(),
    });

    if (foundedHash) {
      return response.status(401).json({ message: 'Website already hashed.' });
    }

    const cipher = crypto.createCipher('aes256', 'chaves');
    cipher.update(password.trim());

    await hashesCollection.insertOne({
      hash: cipher.final('hex'),
      website: website.trim().toLowerCase(),
      user_id: userExists._id,
      created_at: new Date(),
    });

    return response.status(204).json({ ok: true });
  } catch (err) {
    console.log(err);
    return response.status(400).json({ message: 'Error, try again.' });
  }
};
