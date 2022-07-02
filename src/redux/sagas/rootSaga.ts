import axios from 'axios'
import {spawn, select, takeLatest, call, put, takeEvery} from 'redux-saga/effects'
import { dataInterface } from '../../helpers/interfaces'
import { getBook } from '../reducers/bookReducer'
import { fetchError, fetchSuccess, fetchPagination, total } from '../reducers/responseReducers'

export function* sagaGetBookId() {

    const {id} = yield select(state => state.bookReducer)
    try {
        const {data} = yield call(() => axios.get(`https://www.googleapis.com/books/v1/volumes/${id}?Key&key=AIzaSyDvFP6lJxNM73UsQC4cb3iTDMoSzMiB9_4`))
        yield put(getBook(data))
        
    } catch(e) {
        yield put(fetchError("Что-то пошло не так!"))
    }
}

export function* sagaPagination() {

    const {input, numStart, numEnd, category, sorting} = yield select(state => state.inputReducer)
        try {
            const {data}: dataInterface = yield call(() => axios.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${input}+subject:${category}&startIndex=${numStart}&maxResults=${numEnd}&orderBy=${sorting}&key=AIzaSyDvFP6lJxNM73UsQC4cb3iTDMoSzMiB9_4`))
            yield put(fetchPagination(data.items))
            
        } catch(e) {
            yield put(fetchError("Что-то пошло не так!"))
        }
    }

export function* sagaFetchBooksList() {
    const {input, numStart, numEnd, category, sorting} = yield select(state => state.inputReducer)
    try {
        const {data}: dataInterface = yield call(() => axios.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${input}+subject:${category}&startIndex=${numStart}&maxResults=${numEnd}&orderBy=${sorting}&key=AIzaSyDvFP6lJxNM73UsQC4cb3iTDMoSzMiB9_4`))
        yield put(fetchSuccess(data.items))
        yield put(total(data.totalItems))
    } catch(e) {
        yield put(fetchError("Что-то пошло не так!"))
    }
}

export function* sagaWatcher() {
    yield takeLatest('response/fetch', sagaFetchBooksList) 
    yield takeEvery('response/fetchPaginate', sagaPagination)
    yield takeEvery('book/getId', sagaGetBookId)

}


export function* rootSaga() {
    yield spawn(sagaWatcher) 
}
