import { initTRPC } from '@trpc/server'
import { z } from 'zod'

export const tRPC = initTRPC.create()
export const appRouter = tRPC.router({
    getUserById: tRPC.procedure.input(z.number()).query(({ input }) => {
        return console.log(input)
    }),
})
// export type definition of API
export type AppRouter = typeof appRouter;
