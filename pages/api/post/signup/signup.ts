'use client'
import { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@supabase/supabase-js";
import * as dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
dotenv.config();

const supabaseUrl = process.env.supabase_url || "";
const anon_url = process.env.supabase_anon_key || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const supabase = createClient(supabaseUrl, anon_url);
  const prisma = new PrismaClient();

  console.log("submitted")
  if (req.method !== "POST") {
    res.status(400).json({
      code: 400,
      message: "Only POST method is allowed.",
    });
  }
  const {
    username,
    email,
    password,
    confirmPassword,
    mobilenumber,
    role,
    is_exist,
  } = req.body;

  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      data: { 
        user_name: username,
      },
    },
  });
  console.log(error);
  
  if (error) {
    res.status(400).json({ code: 400, message: error.message });
  } else if (data) {
    const user = await prisma.tbl_user.create({
      data: {
        username: username,
        email: email,
        password: password,
        mobilenumber: mobilenumber,
        role: role,
        is_exist: is_exist,
      },
    });
    if (user) {
      res.status(200).json({
        code: 200,
        message: "New account created successfully.Please login.",
      });
    } else {
      res.status(400).json({
        code: 400,
        message: "Something went wrong.Please try again.",
      });
    }
  } else {
    res.status(400).json({
      code: 400,
      message: "Something went wrong.Please try again.",
    });
  }
}