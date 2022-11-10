import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!req.method) {
    res.status(400);
    return;
  }

  try {
    switch (req.method) {
      case "GET": {
        const links = await prisma.link.findMany();
        return res.json(links);
      }

      default: {
        res.status(400);
      }
    }
  } catch {
    res.status(500).end();
  }
}
