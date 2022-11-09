import { values } from "lodash"
import { ACCESS_TOKEN, TOKEN, USER_LOGIN } from "../../util/settings/config";
import { SET_DANGNHAP, SET_LIST_USER, SET_MALOAI_USER, SET_THONGTIN_NGUOIDUNG, SET_THONGTIN_USER } from "../actions/types/QuanLyNguoiDungType"


let user = {};
if(localStorage.getItem(USER_LOGIN)){
    user = JSON.parse(localStorage.getItem(USER_LOGIN))
}
const stateDefault = {
    userLogin: user,
    thongTinNguoiDung: {},
    danhSachNguoiDung: [
     
    ],
    danhSachNguoiDungDefault: [],
    maLoaiND: [],
    thongTinNguoiDungAdmin: {}
}





export const QuanLyNguoiDungReducer = (state = stateDefault,action) =>  {
    switch (action.type){
        case SET_DANGNHAP: {
            const {thongTinDangNhap} = action;
            localStorage.setItem(USER_LOGIN, JSON.stringify(thongTinDangNhap));
            localStorage.setItem(ACCESS_TOKEN, thongTinDangNhap.accessToken)
            console.log("thongTinDangNhap: ", thongTinDangNhap);

            return {...state, userLogin: thongTinDangNhap}
        }
        case SET_THONGTIN_USER: {
            state.thongTinNguoiDung = action.thongTinNguoiDung;
            return {...state}

        }
        case SET_LIST_USER: {
            state.danhSachNguoiDung = action.danhSachNguoiDung;
            state.danhSachNguoiDungDefault = state.danhSachNguoiDung
            return {...state}

        }
        case SET_MALOAI_USER: {
            state.maLoaiND = action.maLoaiND;
            return {...state}

        }
        case SET_THONGTIN_NGUOIDUNG: {
            state.thongTinNguoiDungAdmin = action.thongTinNguoiDungAdmin;
            return {...state}

        }

       
        default: return {...state}
    }
}