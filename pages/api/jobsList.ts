// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { jobsApiObject } from './data/jobsApp.api';
import { IJobsListResponse } from './data/jobsApp.types';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IJobsListResponse[]>
) {
  if (req.method === "GET") {
    res.status(200).json(jobsApiObject);
  };
  
};