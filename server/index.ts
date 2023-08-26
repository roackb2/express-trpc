import 'module-alias/register'
import express, { Express, Request, Response } from 'express'
import * as trpcExpress from '@trpc/server/adapters/express'
import { appRouter } from '@server/app'
import { createContext, } from '@server/trpc'
import dotenv from 'dotenv'
dotenv.config()

const app: Express = express()
const port = process.env.PORT

app.get('/', (req: Request, res: Response) => {
  res.send('Hello world!')
})

app.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext
  })
)

app.listen(port, () => {
  console.log(`app is listening on port ${port}`)
})
