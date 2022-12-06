import { fastifyTRPCPlugin } from '@trpc/server/adapters/fastify'
import fastify from 'fastify'
import { createContext } from './context'
import { appRouter } from './router'

const server = fastify({
    maxParamLength: 5000,
})
server.register(fastifyTRPCPlugin, {
    prefix: '/trpc',
    trpcOptions: { router: appRouter, createContext },
});
(async () => {
    try {
        await server.listen({ port: 3022 })
    } catch (err) {
        server.log.error(err)
        // noinspection TypeScriptValidateJSTypes
        process.exit(1)
    }
})()
