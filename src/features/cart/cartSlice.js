import { createSlice } from "@reduxjs/toolkit";
import data from "../../data";

const initialState = {
    cartItems: data,
    amount: 0,
    total: 0,
    isLoading: true,

};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = [];
        },
        removeItems: (state, action) => {
            state.cartItems = state.cartItems.filter(
                (item) => item.id !== action.payload
            );
        },
        increaseAmount: (state, action) => {
            const cartItem = state.cartItems.find((item) => item.id === action.payload);
            cartItem.amount = cartItem.amount + 1;
        },


        decreaseAmount: (state, action) => {
            const cartItem = state.cartItems.find((item) => item.id === action.payload);
            if (cartItem.amount === 1) {
                state.cartItems = state.cartItems.filter(
                    (item) => item.id !== action.payload
                );
            }
            else {
                cartItem.amount = cartItem.amount - 1;
            }

        }, 
        calulateTotals: (state) => {
            let amount = 0;
            let total = 0;
            state.cartItems.forEach((item) => {
                amount += item.amount;
                total += item.amount * item.price;
            }
            );
            state.amount = amount;
            state.total = total;
        },


    }
});

export const { clearCart,removeItems,increaseAmount,decreaseAmount,calulateTotals } = cartSlice.actions;

export default cartSlice.reducer;