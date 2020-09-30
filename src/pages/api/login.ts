import { NowRequest, NowResponse } from '@vercel/node';
import { MongoClient, Db } from 'mongodb';
import { sign } from 'jsonwebtoken';
import { compare } from 'bcryptjs';
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
  const { code, password } = request.body;

  try {
    const db = await connectToDatabse(process.env.MONGO_CONNECTION);
    const collection = db.collection('users');

    const user = await collection.findOne({ code: code.toLowerCase().trim() });

    if (!user) {
      return response
        .status(401)
        .json({ message: 'Code/Password combination failed.' });
    }

    const passwordMatches = await compare(password.trim(), user.password);

    if (!passwordMatches) {
      return response
        .status(401)
        .json({ message: 'Code/Password combination failed. ' });
    }

    const token = sign({}, process.env.JWT_KEY, {
      subject: String(user._id),
      expiresIn: process.env.JWT_EXPIRATION_TIME,
    });

    return response.status(200).json({ name: user.name, token });
  } catch (err) {
    return response.status(400).json({ message: 'Error, try again.' });
  }
};
