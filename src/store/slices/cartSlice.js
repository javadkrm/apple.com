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

        removeCart : (state, action) => {
            state.cart = state.cart.filter(cart => cart.id !== action.payload)
        }
    }
})

export const {addToCart, removeCart} = cartSlice.actions

export default cartSlice.reducer