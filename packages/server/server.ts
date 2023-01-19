import { fastifyTRPCPlugin } from '@trpc/server/adapters/fastify'
import fastify from 'fastify'
import { createContext } from './context'
import { appRouter } from './router'
// @ts-ignore
import cors from "@fastify/cors"

const server = fastify({
    maxParamLength: 5000,
})
server.register(fastifyTRPCPlugin, {
    prefix: '/trpc',
    trpcOptions: { router: appRouter, createContext },
});

(async () => {
    await server.register(cors, {
        origin: true,
        methods: ["GET", "PUT", "POST"],
    })

    try {
        await server.listen({ port: 3022 })
    } catch (err) {
        server.log.error(err)
        // noinspection TypeScriptValidateJSTypes
        process.exit(1)
    }
})()
