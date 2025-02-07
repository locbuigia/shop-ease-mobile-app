import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  registeredUsers: [
    {
      userName: 'John Doe',
      userEmail: 'jdoe@gmail.com',
      userPassword: 'jdoe9',
    },
  ],
  isLoggedIn: false,
  userName: '',
  userEmail: '',
  itemsInUserCart: [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserLoginStatus: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    updateUserName: (state, action) => {
      state.userName = action.payload;
    },
    updateUserEmail: (state, action) => {
      state.userEmail = action.payload;
    },
    addNewRegisterUser: (state, action) => {
      state.registeredUsers = [...state.registeredUsers, action.payload];
    },
    addItemToUserCart: (state, action) => {
      state.itemsInUserCart.push(action.payload);
    },
    updateItemQuantityInUserCart: (state, action) => {
      state.itemsInUserCart = state.itemsInUserCart.map(item => {
        if (item.id === action.payload.id) {
          return {...item, quantity: action.payload.quantity};
        } else {
          return item;
        }
      });
    },
    removeItemFromUserCart: (state, action) => {
      state.itemsInUserCart = state.itemsInUserCart.filter(
        item => item.id !== action.payload.id,
      );
    },
  },
});

export const {
  setUserLoginStatus,
  updateUserName,
  updateUserEmail,
  addNewRegisterUser,
  addItemToUserCart,
  updateItemQuantityInUserCart,
  removeItemFromUserCart,
} = userSlice.actions;

export default userSlice.reducer;
