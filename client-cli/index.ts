import { createTRPCProxyClient, httpBatchLink } from '@trpc/client'
import { AppRouter } from '@server/app'
import './polyfill'

const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:3000/trpc'
    })
  ]
})


async function main() {
  const user = await trpc.user.getUser.query('1')
  console.log(user)
}

main().catch(console.error)
