import type { AppRouter } from '../../../../server/router';
import { createTRPCClient, type TRPCClientInit } from 'trpc-sveltekit';

let browserClient: ReturnType<typeof createTRPCClient<AppRouter>>;

export function trpc(init?: TRPCClientInit) {
    if (typeof window === 'undefined') return createTRPCClient<AppRouter>({ init });
    if (!browserClient) browserClient = createTRPCClient<AppRouter>();
    return browserClient;
}
