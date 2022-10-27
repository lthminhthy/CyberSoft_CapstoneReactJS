import { SET_FILM_DETAIL, SET_HETHONGRAP } from "../actions/types/QuanLyRapType"

const stateDefault = {
    heThongRapChieu:[],
    phimDetail : {}
}


export const QuanLyRapReducer = (state = stateDefault, action) => {
    switch(action.type){
        case SET_HETHONGRAP: {
            state.heThongRapChieu = action.heThongRapChieu;
            return {...state}
        }
        case SET_FILM_DETAIL: {
            state.phimDetail = action.phimDetail
            return {...state}
        }


        default: return {...state}
    }
}