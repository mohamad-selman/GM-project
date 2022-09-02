import { createReactQueryHooks } from '@trpc/react'
import type { AppRouter } from '../server/routers/_app'
import type { inferProcedureInput, inferProcedureOutput } from '@trpc/server';

export const trpc = createReactQueryHooks<AppRouter>()

export function getBaseUrl() {
  if (typeof window !== 'undefined') {
    return ''
  }

  // reference for vercel.com
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`
  }
  
  // // reference for render.com
  // if (process.env.RENDER_INTERNAL_HOSTNAME) {
  //   return `http://${process.env.RENDER_INTERNAL_HOSTNAME}:${process.env.PORT}`
  // }
  
  // assume localhost
  return `http://localhost:${process.env.PORT ?? 3000}`
}
