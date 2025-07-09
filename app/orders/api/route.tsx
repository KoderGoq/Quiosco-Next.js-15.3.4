import { prisma } from '@/src/lib/prisma';

export const dynamic = 'force-dynamic'; // This ensures the route is always fresh and not cached

export const GET = async () => {
  const orders = await prisma.order.findMany({
    take: 5,
    where: {
      orderReadyAt: {
        not: null
      }
    },
    orderBy: {
      orderReadyAt: 'desc'
    },
    include: {
      orderProducts: {
        include: {
          product: true
        }
      }
    }
  })

  return Response.json(orders);
}