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
  const { id } = request.body;

  if (!id) {
    return response.status(401).json({ message: 'Validation fails.' });
  }

  try {
    const db = await connectToDatabse(process.env.MONGO_CONNECTION);
    const hashesCollection = db.collection('hashes');

    const foundedHash = await hashesCollection.findOne({
      _id: new ObjectID(id),
    });

    if (!foundedHash) {
      return response.status(401).json({ message: 'Website not founded.' });
    }

    await hashesCollection.findOneAndDelete(foundedHash);

    return response.status(204).json({ ok: true });
  } catch (err) {
    return response.status(400).json({ message: 'Error, try again.' });
  }
};
