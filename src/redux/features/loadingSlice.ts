

const initialState: boolean = false;
import { PayloadAction, createSlice } from '@reduxjs/toolkit'




export const loadingReducer = createSlice({
  name: 'loadingSlice',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      return action.payload;
    }

  },
})

export const { setLoading } = loadingReducer.actions

export default loadingReducer.reducer