import { configureStore } from '@reduxjs/toolkit'
import authSlice from './authSlice'
import postSlice from './postSlice'

export const store = configureStore({
  reducer: {
    authSlice:authSlice,
    postSlice:postSlice
  },
})
export default store