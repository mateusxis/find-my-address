import { createSlice } from '@reduxjs/toolkit';

export const addressSlice = createSlice({
  name: 'address',
  initialState: {
    address: '',
    city: '',
    district: '',
    state: '',
    zipCode: '',
    zipCodeSearched: '',
    list: []
  },
  reducers: {
    insertAddress: (state, action) => {
      state.address = action.payload.address;
      state.city = action.payload.city;
      state.district = action.payload.district;
      state.state = action.payload.state;
      state.zipCode = action.payload.zipCode;
    },
    insertZipCode: (state, action) => {
      state.zipCodeSearched = action.payload.zipCode;
    },
    insertAddressList: (state, action) => {
      const list = state.list;
      list.push({
        ...action.payload
      });
      state.list = list;
    },
    deleteAddress: (state) => {
      state.address = '';
      state.city = '';
      state.district = '';
      state.state = '';
      state.zipCode = '';
    }
  }
});

export const { insertAddress, insertAddressList, insertZipCode, deleteAddress } = addressSlice.actions;

export const selectAddress = (state) => state.address;
export const selectAddressList = (state) => state.address.list;
export const selectZipCode = (state) => state.address.zipCodeSearched;

export default addressSlice.reducer;
