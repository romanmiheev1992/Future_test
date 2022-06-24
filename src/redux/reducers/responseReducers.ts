import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { responseInterface } from "../../helpers/interfaces";


interface setResponse {
    loader: boolean,
    paginateLoader: boolean,
    total: number;
    dataBase: responseInterface[],
    error: string
}

const initialState: setResponse = {
    loader: false,
    paginateLoader: false,
    total: 0,
    dataBase: [],
    error: ''
}


export const responseReducer = createSlice({
    name: 'response',
    initialState,
    reducers: {
        fetch: (state) => {
            state.loader = true
        },
        fetchPaginate: (state) => {
            state.paginateLoader = true
        },
        fetchSuccess: (state, action: PayloadAction<responseInterface[]>) => {
            state.loader = false
            state.dataBase = action.payload
        },
        fetchError: (state, action: PayloadAction<string>) => {
            state.loader = false
            state.error = action.payload
        },
        fetchPagination: (state, action: PayloadAction<responseInterface[]>) => {
            state.paginateLoader = false
            state.dataBase = [...state.dataBase, ...action.payload] 
        },
        clearDataBase: (state) => {
            state.dataBase = []
        },
        total: (state, action: PayloadAction<number>) => {
            state.total = action.payload
        }

    }
})


export default responseReducer.reducer

export const {fetch, fetchSuccess, fetchError, fetchPagination, fetchPaginate, clearDataBase, total} = responseReducer.actions