import { initTRPC } from '@trpc/server'
import { Prisma } from '@prisma/client'
import { z } from 'zod'
import { prisma } from './prisma'

const defaultUserSelect = Prisma.validator<Prisma.PlayerSelect>()({
    id: true,
    name: true,
})

export const tRPC = initTRPC.create()
export const appRouter = tRPC.router({
    getUserById: tRPC.procedure
        .input(
            z.string(),
        )
        .query(async ({ input }) => {
            const player = await prisma.player.findUnique({
                where: { id: input },
                select: defaultUserSelect,
            })

            return {
                msg: `Hello ${ player?.name }`,
            }
        }),
})
// export type definition of API
export type AppRouter = typeof appRouter;
