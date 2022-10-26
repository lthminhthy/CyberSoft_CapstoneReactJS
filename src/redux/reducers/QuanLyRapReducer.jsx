import { SET_HETHONGRAP } from "../actions/types/QuanLyRapType"

const stateDefault = {
    heThongRapChieu:[]
}


export const QuanLyRapReducer = (state = stateDefault, action) => {
    switch(action.type){
        case SET_HETHONGRAP: {
            state.heThongRapChieu = action.heThongRapChieu;
            return {...state}
        }


        default: return {...state}
    }
}