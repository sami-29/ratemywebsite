// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import prisma from "@/lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const data = await prisma.post.findMany();
      return res.json(data);
    } catch (error) {
      return res.status(500).json({ error });
    }
  }
}
