import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { responseInterface } from "../../helpers/interfaces";

interface book {
    id: string,
    book: responseInterface
}


const initialState: book = {
    id: '',
    book: {} as responseInterface
}

export const bookReducer = createSlice({
    name: 'book',
    initialState,
    reducers: {
        getId: (state, action: PayloadAction<string>) => {
            state.id = action.payload
        },
        getBook: (state, action: PayloadAction<responseInterface>) => {
            state.book = action.payload
        },
    }
})


export default bookReducer.reducer
export const {getId, getBook} = bookReducer.actions