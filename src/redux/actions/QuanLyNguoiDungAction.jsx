import { quanLyNguoiDungService } from "../../services/QuanLyNguoiDungService";
import { SET_DANGNHAP } from "./types/QuanLyNguoiDungType";

export const dangNhapAction = (thongTinDangNhap) => {
    return async (dispatch) => {
        try {
            const result = await quanLyNguoiDungService.dangNhap(thongTinDangNhap)

            if (result.data.statusCode === 200) {
                dispatch({
                    type: SET_DANGNHAP,
                    thongTinDangNhap: result.data.content
                })
            }

            console.log("result: ", result);
        } catch (error) {
            console.log(error.response.data);
        }
    }

}