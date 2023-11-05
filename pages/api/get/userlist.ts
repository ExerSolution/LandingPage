import { Prisma, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default function GET() {
  const posts = prisma.tbl_user.findMany();
  return new Response(JSON.stringify(posts), {
    headers: { "content-type": "application/json" },
  })};
