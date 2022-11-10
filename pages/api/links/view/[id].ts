import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!req.method || req.method !== "POST") {
    res.status(400).end();
  }
  const { id } = req.query;
  if (Array.isArray(id)) {
    res.status(400).end();
    return;
  }

  try {
    const { views } = await prisma.link.findUniqueOrThrow({
      where: { id: id },
    });

    const updatedLink = await prisma.link.update({
      where: { id: id },
      data: { views: views + 1 },
    });

    res.status(200).json(updatedLink);
  } catch {
    res.status(404).end();
    console.log(`Resume link id ${id} not found`);
  }
}
