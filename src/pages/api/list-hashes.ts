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
      return response.status(404).json({ message: 'User does not exists.' });
    }

    const hashes = await hashesCollection
      .find({ user_id: new ObjectID(userId) })
      .toArray();

    const serializedHashes = hashes.map(siteHash => {
      const { created_at, website, _id, hash } = siteHash;

      const decipher = crypto.createDecipher(
        process.env.HASH_STYLE,
        process.env.HASH_KEY
      );

      decipher.update(hash, 'hex');

      return {
        website,
        id: _id,
        created_at,
        password: decipher.final('utf8'),
      };
    });

    return response.json(serializedHashes);
  } catch (err) {
    return response.status(400).json({ message: 'Error, try again.' });
  }
};
