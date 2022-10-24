import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk'
import { CarouselReducer } from './reducers/CarouselReducer';

const rootReducer = combineReducers({
    // state carousel
    CarouselReducer

});


export const store = createStore(rootReducer, applyMiddleware(thunk))