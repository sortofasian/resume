import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;
  if (Array.isArray(id)) {
    res.status(400).end();
    return;
  }
  if (!req.method) {
    res.status(500).end();
    return;
  }

  try {
    switch (req.method) {
      case "POST": {
        await prisma.link.update({ where: { id: id }, data: req.body });
      }

      case "DELETE": {
        try {
          await prisma.link.delete({ where: { id: id } });
          res.status(200).end();
        } catch (e) {
          if (e.code !== "P2025") throw e;
          res.status(404).end();
        }
      }

      case "GET": {
        const link = await prisma.link.findUnique({ where: { id: id } });
        if (!link) res.status(404).end();
        res.status(200).json(link);
      }

      default: {
        res.status(400).end();
      }
    }
  } catch (e) {
    console.error(e);
    res.status(500).end();
  }
}
