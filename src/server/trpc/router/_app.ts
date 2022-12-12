import { router } from '../trpc'
import { youtubeRouter } from './youtubeRouter'

export const appRouter = router({
  youtube: youtubeRouter,
})

// export type definition of API
export type AppRouter = typeof appRouter
