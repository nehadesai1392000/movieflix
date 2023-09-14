import { configureStore } from '@reduxjs/toolkit'
import netflixSlice from '../redux/netflixSlice'

export default configureStore({
  reducer: {
    netflixOriginals: netflixSlice,
  },
})