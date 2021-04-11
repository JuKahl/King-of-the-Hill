import type { NextApiRequest, NextApiResponse } from "next";
import { withDatabase, userPick } from "../../server/db";

export default withDatabase(
  async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "GET") {
      const list = await userPick();
      res.status(200).json(list);
    }
  }
);
