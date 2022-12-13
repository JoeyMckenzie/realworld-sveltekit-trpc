import type { UsersRouter } from '$lib/server/router';
import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import superjson from 'superjson';

export const trpc = createTRPCProxyClient<UsersRouter>({
  transformer: superjson,
  links: [
    httpBatchLink({
      // url is dependent on the environment
      // in dev, we use localhost
      // in prod, we use the public domain
      url: process.env.TRPC_PATH ?? ''
    })
  ]
});
