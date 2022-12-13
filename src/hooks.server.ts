import type { Handle } from '@sveltejs/kit';
import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { usersRouter } from '$lib/server/router';

export const handle: Handle = async ({ event, resolve }) => {
  const trpcPathBase = process.env.TRPC_PATH_BASE ?? '';

  if (event.url.pathname.startsWith(trpcPathBase)) {
    const response = await fetchRequestHandler({
      endpoint: trpcPathBase,
      req: event.request,
      router: usersRouter,
      createContext() {
        return {
          req: event.request
        };
      }
    });

    return response;
  }

  return await resolve(event);
};
