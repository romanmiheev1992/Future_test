import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface setting {
    input: string;
    category: string,
    sorting: string,
    numStart: number,
    numEnd: number

}

const initialState: setting = {
    input: '',
    category: '',
    sorting: 'relevance',
    numStart: 0,
    numEnd: 30
}


export const inputReducer = createSlice({
    name: 'setting',
    initialState,
    reducers: {
        toInput: (state, action:PayloadAction<string>) => {
            state.input = action.payload
        },
        toCategory: (state, action:PayloadAction<string>) => {
            state.category = action.payload
        },
        toSorting: (state, action: PayloadAction<string>) =>{
            state.sorting = action.payload
        },
        toPaginate: (state) => {
            state.numStart += 30
        },
        
    }
})

export default inputReducer.reducer
export const {toCategory, toInput, toPaginate, toSorting} = inputReducer.actions