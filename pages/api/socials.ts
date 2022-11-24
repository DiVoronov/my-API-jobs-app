// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { socials } from './data/socials';

export interface IDataAPI {
  id: number
  icon: string
  path: string
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IDataAPI[]>
) {
  if (req.method === "GET") {
    res.status(200).json(socials);
  };
  
};
