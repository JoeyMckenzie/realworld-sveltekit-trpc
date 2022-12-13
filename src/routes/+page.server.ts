import type { PageServerLoad } from './$types';
import { trpc } from '$lib/client/router';

export const load: PageServerLoad = async () => {
  const user = await trpc.findUserByEmail.query({
    email: 'user1@test.com'
  });

  return {
    user
  };
};
