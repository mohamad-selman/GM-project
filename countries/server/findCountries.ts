import { prisma } from './prisma'
import { PrismaClient } from '@prisma/client'

interface FindCountries {
  limit: number
  cursor?: number | null | undefined
  where: NonNullable<Parameters<PrismaClient['country']['findMany']>['0']>['where']
}

export const findCountries = async ({ limit, cursor, where }: FindCountries) => {
  const items = await prisma.country.findMany({
    take: limit + 1, // get an extra item at the end which we'll use as next cursor
    cursor: cursor ? { id: cursor } : undefined,
    where: where,
    orderBy: {
      name: 'asc',
    },
  })
  let nextCursor: typeof cursor | undefined = undefined

  if (items.length > limit) {
    const nextItem = items.pop()
    nextCursor = nextItem!.id
  }

  return {
    items,
    nextCursor,
  }
}
