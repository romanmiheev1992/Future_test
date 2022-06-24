import { configureStore } from "@reduxjs/toolkit";
import {combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import bookReducer from "../reducers/bookReducer";
import  responseReducer  from "../reducers/responseReducers";
import  inputReducer  from "../reducers/settingReducers";
import { rootSaga } from "../sagas/rootSaga";

const rootReducer = combineReducers({
     inputReducer,
     responseReducer,
     bookReducer
})

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
     reducer: rootReducer,
     middleware: [sagaMiddleware]
})

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof rootReducer>
