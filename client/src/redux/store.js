import { configureStore } from '@reduxjs/toolkit'
import { beersApiSlice } from './services/beers'
import { draftsApiSlice } from './services/drafts'
import { userApiSlice } from './services/user'

export const store = configureStore({
  reducer: {
    [userApiSlice.reducerPath]: userApiSlice.reducer,
    [beersApiSlice.reducerPath]: beersApiSlice.reducer,
    [draftsApiSlice.reducerPath]: draftsApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([userApiSlice.middleware, beersApiSlice.middleware, draftsApiSlice.middleware]),
})
