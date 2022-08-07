import { createSlice } from "@reduxjs/toolkit";
import data from '../data/data'

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        items: data,
        money: 100000000000,
        status: 'idle',
        diffMoney: 0,
        total: 0
    },
    reducers: {
        buyProduct: (state, action) => {
            const addedItem = state.items.find((item) => item.id === action.payload.id);

            if (addedItem) {
                state.diffMoney = Number(action.payload.amount) * Number(action.payload.price);
                state.money -= state.diffMoney;
                state.total += state.diffMoney;
                addedItem.amount += action.payload.amount;
            } else {
                state.items = [...state.items, action.payload]
            }
        },
        sellProduct: (state, action) => {
            let addedItem = state.items.find((item) => item.id === action.payload.id);
            if (addedItem) {
                state.diffMoney = Number(action.payload.amount) * Number(action.payload.price);
                state.money += state.diffMoney;
                addedItem.amount -= action.payload.amount;
            } else {
                state.items = [...state.items, action.payload];
            }
        }
    }
})

export const {buyProduct, sellProduct} = productsSlice.actions

export default productsSlice.reducer