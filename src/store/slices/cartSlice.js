import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cart: [],
    product: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const isExist = state.cart.find(cart => cart.id === action.payload.id)

            if (isExist) {
                isExist.count += 1
            } else {
                state.cart.push({ ...action.payload, count: 1 })
            }
        },

        removeCart: (state, action) => {
            state.cart = state.cart.filter(cart => cart.id !== action.payload)
        },

        increaseCount: (state, action) => {
            const item = state.cart.find(cart => cart.id === action.payload)
            if (item) {
                item.count += 1
            }
        },


        decreaseCart: (state, action) => {
            const item = state.cart.find(cart => cart.id === action.payload)
            if (item && item.count > 1) {
                item.count -= 1
            }
        },
    }
})

export const { addToCart, removeCart, increaseCount, decreaseCart } = cartSlice.actions

export default cartSlice.reducer