import { router } from '@server/trpc'
import { userRouter } from '@server/routers/users'

export const appRouter = router({
  user: userRouter
})

export type AppRouter = typeof appRouter
