import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addItemToCart: (cart, action) => {
            // immer js
            cart.push(action.payload);
        },
        increaseQty: (cart, action) => {
            return cart.map((item) => {
                if (item.id === action.payload.id) {
                    return { ...item, quantity: item.quantity + 1 };
                } else {
                    return item;
                }
            });
        },
        decreaseQty: (cart, action) => {
            return cart.map((item) => {
                if (item.id === action.payload.id) {
                    return { ...item, quantity: item.quantity - 1 };
                } else {
                    return item;
                }
            });
        },
        removeItemFromCart: (cart, action) => {
            return cart.filter((item) => item.id !== action.payload.id);
        },
    },
});

export const { increaseQty, decreaseQty, addItemToCart, removeItemFromCart } =
    cartSlice.actions;
export default cartSlice.reducer;
