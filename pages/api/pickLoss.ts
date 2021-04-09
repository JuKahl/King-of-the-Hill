import type { NextApiRequest, NextApiResponse } from "next";
import { withDatabase, PickProps, pickLoss } from "../../server/db";

export default withDatabase(
  async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "POST") {
      const newPick: PickProps = req.body;
      await pickLoss(newPick).then(() => {
        res.status(200).json(newPick);
      });
    }
  }
);
