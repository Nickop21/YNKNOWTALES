import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  PostsData:[],
  PostsCategoryData:[],
  category:"All"
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

  CurrentCategory:(state,action) =>{
    state.category=action.payload
  }

  },
})

export const {AllPost,CategoryPost,CurrentCategory} = postSlice.actions

export default postSlice.reducer