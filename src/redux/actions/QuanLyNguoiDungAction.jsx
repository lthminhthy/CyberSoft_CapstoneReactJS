import { quanLyNguoiDungService } from "../../services/QuanLyNguoiDungService";
import { SET_DANGNHAP } from "./types/QuanLyNguoiDungType";



export const dangNhapAction = (thongTinDangNhap ,navigate) => {
    return async (dispatch) => {
        try {
            const result = await quanLyNguoiDungService.dangNhap(thongTinDangNhap)

            if (result.data.statusCode === 200) {
                dispatch({
                    type: SET_DANGNHAP,
                    thongTinDangNhap: result.data.content
                })
                navigate(-1)

               
            }


            console.log("result: ", result);
        } catch (error) {
            console.log(error.response?.data);
        }
    }

}



