import { quanLyNguoiDungService } from "../../services/QuanLyNguoiDungService";
import { SET_DANGNHAP, SET_THONGTIN_USER } from "./types/QuanLyNguoiDungType";



export const dangNhapAction = (thongTinDangNhap ,navigate) => {
    return async (dispatch) => {
        try {
            const result = await quanLyNguoiDungService.dangNhap(thongTinDangNhap)

            if (result.data.statusCode === 200) {
                dispatch({
                    type: SET_DANGNHAP,
                    thongTinDangNhap: result.data.content
                })
                

            }navigate(-1)


            console.log("result: ", result);
        } catch (error) {
            console.log(error.response?.data);
        }
    }

}
export const layThongTinNguoiDungAction = () => {
    return async (dispatch) => {
        try {
            const result = await quanLyNguoiDungService.layThongTinNguoiDung()
            console.log("result tong tin nguoi dung: ", result);

            if (result.data.statusCode === 200) {
                dispatch({
                    type: SET_THONGTIN_USER,
                    thongTinNguoiDung: result.data.content
                    
                })
            }
            console.log("result: ", result);
        } catch (error) {
            console.log(error.response?.data);
        }
    }

}



