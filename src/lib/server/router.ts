import { initTRPC } from '@trpc/server';
import { z } from 'zod';
import prisma from '$lib/server/prisma';
import superjson from 'superjson';

export const t = initTRPC.create({
  transformer: superjson
});

export const usersRouter = t.router({
  findUserByEmail: t.procedure
    .input(
      z.object({
        email: z.string()
      })
    )
    .query(({ input }) =>
      prisma.user.findFirst({
        where: {
          email: input.email
        }
      })
    )
});

export type UsersRouter = typeof usersRouter;
