import { initTRPC } from '@trpc/server';
import { z } from 'zod';
import prisma from '$lib/server/prisma';

const t = initTRPC.create();

const appRouter = t.router({
  findUserByEmail: t.procedure
    .input(
      z.object({
        email: z.string()
      })
    )
    .query(({ input }) =>
      prisma.user.findMany({
        where: {
          email: input.email
        }
      })
    )
});

export type AppRouter = typeof appRouter;
