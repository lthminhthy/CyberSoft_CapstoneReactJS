import { SET_HIDE_LOADING, SET_LOADING } from "../actions/types/LoadingType"

const stateDefault = {
    isLoading: false
}

export const LoadingReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case SET_LOADING: {
            state.isLoading = true;
            return {...state}

        } case SET_HIDE_LOADING: {
            state.isLoading = false;
            return {...state}
        }

        default: return { ...state }
    }

}