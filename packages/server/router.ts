import { initTRPC } from '@trpc/server'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'
import { prisma } from './prisma'

const playerSelect: Prisma.PlayerSelect = {
    id: true,
    name: true,
}

const t = initTRPC.create()
export const appRouter = t.router({
    getUserById: t.procedure
        .input(z.object({
            id: z.string(),
        }))
        .query(async ({ input }) => {
            const player = await prisma.player.findUnique({
                where: { id: input.id },
                select: playerSelect,
            })

            return { player }
        }),
})
// export type definition of API
export type AppRouter = typeof appRouter;
