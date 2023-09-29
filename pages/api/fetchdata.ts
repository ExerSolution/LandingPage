// pages/api/fetchData.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL||"";
const supabaseApiKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY||"";
const supabase = createClient(supabaseUrl, supabaseApiKey);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // You can use supabaseUrl and supabaseApiKey here
    // Fetch data from the Supabase table
    const { data, error } = await supabase
      .from('tbl_user')
      .select('*');

    if (error) {
      throw error;
    }

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching data' });
  }
}
