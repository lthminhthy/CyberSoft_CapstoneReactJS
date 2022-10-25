import { SET_LISTFILM, SET_SHOWING } from "../actions/types/QuanLyPhimType"

const stateDefault = {
    arrPhim: [
        
    ],
    dangChieu: true,
    sapChieu: true,
}

export const QuanLyPhimReducer = (state = stateDefault, action) => {
    switch(action.type){
        case SET_LISTFILM : {
            console.log("action.arrPhim: ", action.arrPhim);
            state.arrPhim = action.arrPhim
            return {...state}
        }
        default: return {...state}
    }

}