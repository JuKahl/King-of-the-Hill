import { MongoClient } from "mongodb";
import type { NextApiRequest, NextApiResponse } from "next";

export type PickProps = {
  clientId: string;
  matchId: number;
  team: "HOME_TEAM" | "AWAY_TEAM";
};

let client = null;
let db = null;

const url = process.env.MONGODB_URL;

type Handler = (req: NextApiRequest, res: NextApiResponse) => void;
export const withDatabase = (handler: Handler) => async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  await connectDB(url, "db-name");
  return await handler(req, res);
};

export async function connectDB(url, dbName) {
  if (db) {
    return;
  }
  client = await MongoClient.connect(url, { useUnifiedTopology: true });
  db = client.db(dbName);
}

export async function getCollection(collectioName) {
  return await db.collection(collectioName);
}

export async function pickList(collectioName) {
  return await db.collection(collectioName).find().toArray();
}

export async function createPickDoc(pick: PickProps) {
  const pickCollection = await getCollection("picks");
  return await pickCollection.insertOne(pick);
}

export function closeDB() {
  client.close();
}
