'use client'
import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(  
  req: NextApiRequest,
  res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const users = await prisma.tbl_user.findMany();
      res.status(200).json(users);
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
} 
