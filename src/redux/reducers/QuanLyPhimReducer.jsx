import { SET_COMING, SET_LISTFILM, SET_SHOWING } from "../actions/types/QuanLyPhimType"

const stateDefault = {
    arrPhim: [
        
    ],
    arrPhimDefault: [],
    dangChieu: true ,
    sapChieu: true,
    
}

export const QuanLyPhimReducer = (state = stateDefault, action) => {
    switch(action.type){
        case SET_LISTFILM : {
            state.arrPhim = action.arrPhim
            state.arrPhimDefault = state.arrPhim
            return {...state}
        }
        case SET_SHOWING : {
            state.dangChieu = !state.dangChieu
           
            state.arrPhim = state.arrPhimDefault.filter(film => film.dangChieu === state.dangChieu);
            return {...state}
        }
        case SET_COMING : {
           state.sapChieu = !state.sapChieu
            state.arrPhim = state.arrPhimDefault.filter(film => film.sapChieu === state.sapChieu);
            
            return {...state}
        }
        default: return {...state}
    }

}