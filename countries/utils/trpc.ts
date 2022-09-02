import { createReactQueryHooks } from '@trpc/react'
import type { AppRouter } from '../server/routers/_app'
import type { inferProcedureInput, inferProcedureOutput } from '@trpc/server';

export const trpc = createReactQueryHooks<AppRouter>()