import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk'
import { CarouselReducer } from './reducers/CarouselReducer';
import { QuanLyPhimReducer } from './reducers/QuanLyPhimReducer';

const rootReducer = combineReducers({
    // state carousel
    CarouselReducer,
    QuanLyPhimReducer,

});


export const store = createStore(rootReducer, applyMiddleware(thunk))