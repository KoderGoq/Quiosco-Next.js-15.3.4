import { prisma } from '@/src/lib/prisma';

export const dynamic = 'force-dynamic'; // This ensures the route is always fresh and not cached

export const GET = async () => {
  const orders = await prisma.order.findMany({
    where: {
      status: false
    },
    include: {
      orderProducts: {
        include: {
          product: true
        }
      }
    }
  })
  return Response.json(orders)
}