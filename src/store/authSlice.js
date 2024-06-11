import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loginStatus: false,
  userData:{}
}

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    login: (state,action) => {
        state.loginStatus=true;
        state.userData=action.payload;
    },
    logout: (state,action) => {
      state.loginStatus=false;
      state.userData=null
  },

  },
})

export const {login,logout} = authSlice.actions

export default authSlice.reducer