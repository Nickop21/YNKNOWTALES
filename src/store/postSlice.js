import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  PostsData:[],
  PostsCategoryData:[]
}

export const postSlice = createSlice({
  name: 'postSlice',
  initialState,
  reducers: {
    AllPost: (state,action) => {
        state.PostsData=action.payload;
    },
    CategoryPost: (state,action) => {
      state.PostsCategoryData=action.payload
  },

  },
})

export const {AllPost,CategoryPost} = postSlice.actions

export default postSlice.reducer