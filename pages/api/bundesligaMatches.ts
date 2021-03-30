import type { NextApiRequest, NextApiResponse } from "next";
import { getBundesligaMatches } from "../../utils/api";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const response = await getBundesligaMatches();
  res.status(200).json(response);
};
