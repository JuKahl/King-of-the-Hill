import type { NextApiRequest, NextApiResponse } from "next";
import { withDatabase, userList, createUserDoc } from "../../server/db";

export default withDatabase(
  async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "GET") {
      const list = await userList("users");
      res.status(200).json(list);
    }
    if (req.method === "POST") {
      await createUserDoc(req.body).then(() => {
        res.status(200).json(req.body);
      });
    }
  }
);
