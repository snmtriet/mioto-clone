import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SLICE_BASE_NAME } from './constants'

export type UserState = {
  username?: string
}

const initialState: UserState = {
  username: '',
}

const userSlice = createSlice({
  name: `${SLICE_BASE_NAME}/user`,
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<UserState>) {
      state.username = action.payload?.username
    },
  },
})

export const { setUser } = userSlice.actions
export default userSlice.reducer
