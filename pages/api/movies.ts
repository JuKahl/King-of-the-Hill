import type { NextApiRequest, NextApiResponse } from "next";
import { withDatabase, movieList } from "../../server/db";

export default withDatabase(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const list = await movieList("movies");
    res.status(200).json(list);
  }
);
