import type { NextApiRequest, NextApiResponse } from "next";
import { withDatabase, pickList, createPickDoc } from "../../server/db";

export default withDatabase(
  async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "GET") {
      const list = await pickList("picks");
      res.status(200).json(list);
    }
    if (req.method === "POST") {
      await createPickDoc(req.body).then(() => {
        res.status(200).json(req.body);
      });
    }
  }
);
