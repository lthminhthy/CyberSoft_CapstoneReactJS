import { values } from "lodash"
import { ACCESS_TOKEN, TOKEN, USER_LOGIN } from "../../util/settings/config";
import { SET_DANGNHAP, SET_THONGTIN_USER } from "../actions/types/QuanLyNguoiDungType"


let user = {};
if(localStorage.getItem(USER_LOGIN)){
    user = JSON.parse(localStorage.getItem(USER_LOGIN))
}
const stateDefault = {
    userLogin: user,
    thongTinNguoiDung: {}


}





export const QuanLyNguoiDungReducer = (state = stateDefault,action) =>  {
    switch (action.type){
        case SET_DANGNHAP: {
            const {thongTinDangNhap} = action;
            localStorage.setItem(USER_LOGIN, JSON.stringify(thongTinDangNhap));
            localStorage.setItem(ACCESS_TOKEN, thongTinDangNhap.accessToken)

            return {...state, userLogin: thongTinDangNhap}
        }
        case SET_THONGTIN_USER: {
            state.thongTinNguoiDung = action.thongTinNguoiDung;
            return {...state}

        }

       
        default: return {...state}
    }
}