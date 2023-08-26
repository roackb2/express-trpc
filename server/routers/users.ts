import { router, publicProcedure } from '@server/trpc'
import { z } from 'zod'

export const userRouter = router({
  getUser: publicProcedure.input(z.string()).query(opts => {
    console.log(`query with ${opts}`)
    return { id: opts.input, name: 'Jay Liang' }
  })
})
