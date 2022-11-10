import { customAlphabet } from "nanoid";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma";

const nanoid = customAlphabet(
  "abcdefghjklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890",
  10
);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case 'POST': {
      const link = await prisma.link.create({
        data: { id: nanoid(), name: req.body.name },
      });
      res.status(201).json(link);
    }
    default: {
      res.status(400).end();
    }
  }
}
