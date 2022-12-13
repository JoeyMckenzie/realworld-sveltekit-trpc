import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import type { PageServerLoad } from './$types';
import type { AppRouter } from '$lib/server/router';

const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:3000/trpc'
    })
  ]
});

export const load: PageServerLoad = async () => {
  const user = await trpc.findUserByEmail.query({
    email: 'user1@test.com'
  });

  return {
    user
  };
};
