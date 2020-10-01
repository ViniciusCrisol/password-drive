import { NowRequest, NowResponse } from '@vercel/node';
import { MongoClient, Db } from 'mongodb';
import { hash } from 'bcryptjs';
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
  const { code, name, password, confirm_password } = request.body;

  if (confirm_password !== password) {
    return response
      .status(400)
      .json({ message: 'Passwords does not matches.' });
  }

  try {
    const db = await connectToDatabse(process.env.MONGO_CONNECTION);
    const collection = db.collection('users');

    const userExists = await collection.findOne({ code });

    if (userExists) {
      return response.status(400).json({ message: 'Code already in use.' });
    }

    const hashedPassword = await hash(password.trim(), 12);

    await collection.insertOne({
      code: code.trim().toLowerCase(),
      name: name.trim().toLowerCase(),
      password: hashedPassword.trim(),
      created_at: new Date(),
    });

    return response.status(204).json({ ok: true });
  } catch (err) {
    return response.status(400).json({ message: 'Error, try again.' });
  }
};
