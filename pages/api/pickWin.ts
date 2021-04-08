import type { NextApiRequest, NextApiResponse } from "next";
import { withDatabase, pickList, PickProps, pickWin } from "../../server/db";

export default withDatabase(
  async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "POST") {
      const newPick: PickProps = req.body;
      await pickWin(newPick).then(() => {
        res.status(200).json(newPick);
      });
    }
  }
);
