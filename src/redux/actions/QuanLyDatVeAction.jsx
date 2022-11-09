import { quanLyDatVeService } from "../../services/QuanLyDatVeService";
import { ThongTinDatVe } from "../../_core/models/ThongTinDatVe";
import { displayLoadingAction, hideLoadingAction } from "./LoadingAction";
import { CHUYEN_TAB, DAT_VE_HOAN_TAT, SET_PHONG_VE } from "./types/QuanLyDatVeType";

export const layChiTietPhongVeAction = (maLichChieu) => {
    return async (dispatch) => {
        try {
            const result = await quanLyDatVeService.layChiTietPhongVe(maLichChieu);
            console.log("result: ", result.data.content.danhSachGhe);
            if (result.status === 200) {
                dispatch({
                    type: SET_PHONG_VE,
                    chiTietPhongVe: result.data.content
                })
            }

        } catch (error) {
            console.log("error: ", error.response?.data);

        }
    }
}


export const datVeAction = (thongTinDatVe = new ThongTinDatVe()) => {
    return async (dispatch) => {

        try {
            // bật loading
            dispatch(displayLoadingAction)
            const result = await quanLyDatVeService.datVe(thongTinDatVe);
            console.log("result: ", result.data.content);

            await dispatch(layChiTietPhongVeAction(thongTinDatVe.maLichChieu))
            await dispatch({ type: DAT_VE_HOAN_TAT })


            // tắt loading
            await dispatch(hideLoadingAction)
            alert('Đặt vé thành công!')

            await dispatch({ type: CHUYEN_TAB })


        } catch (error) {
            console.log("error: ", error.response?.data);

        }
    }
}