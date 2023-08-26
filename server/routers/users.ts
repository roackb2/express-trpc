import { router, publicProcedure } from '@server/trpc'
import { z } from 'zod'

export const userRouter = router({
  getUser: publicProcedure.input(z.string()).query(opts => {
    return { id: opts.input, name: 'Jay Liang' }
  })
})
