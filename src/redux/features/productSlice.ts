import { IProduct } from '@/app/admin/dashboard/page';
import { PayloadAction, createSlice } from '@reduxjs/toolkit'


const initialState: IProduct = {
  _id: "",
  imgSrc: "",
  fileKey: "",
  name: "",
  price: "",
  category: "",
};

export const productReducer = createSlice({
  name: 'productSlice',
  initialState,
  reducers: {
    setProduct: (state, action: PayloadAction<IProduct>) => {
      return action.payload;
    }
  },
})

export const { setProduct } = productReducer.actions

export default productReducer.reducer