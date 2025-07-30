// store/slices/drawerSlice.ts
import { DrawerState } from '@/types'
import { createSlice } from '@reduxjs/toolkit'

const initialState: DrawerState = {
  isOpen: false,
  product: null,
}

const drawerSlice = createSlice({
  name: 'drawer',
  initialState,

  reducers: {
    openDrawer: (state, action) => {
      state.isOpen = true
      state.product = action.payload
    }, // return true instead of mutating state
    closeDrawer: (state) => {
      state.isOpen = false
      state.product = null
    },
  },
})

export const { openDrawer, closeDrawer } = drawerSlice.actions
export default drawerSlice.reducer
