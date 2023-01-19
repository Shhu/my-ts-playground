import { createContext } from './lib/trpc/context'
import { appRouter as router } from '../../server/router'
import type { Handle } from '@sveltejs/kit'
import { createTRPCHandle } from 'trpc-sveltekit'

export const handle: Handle = createTRPCHandle({ router, createContext })
