import type { NextApiRequest, NextApiResponse } from "next";
import {
  withDatabase,
  pickList,
  createPickDoc,
  updatePickDoc,
  PickProps,
} from "../../server/db";

export default withDatabase(
  async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "GET") {
      const list = await pickList();
      res.status(200).json(list);
    }
    if (req.method === "POST") {
      const newPick: PickProps = req.body;

      const list = await pickList();
      const pickExists = list.some((pick) => pick.clientId == newPick.clientId);
      if (pickExists)
        await updatePickDoc(newPick).then(() => {
          res.status(200).json(newPick);
        });
      else {
        await createPickDoc(req.body).then(() => {
          res.status(200).json(req.body);
        });
      }
    }
  }
);
