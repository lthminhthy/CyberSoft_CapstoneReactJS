import { quanLyDatVeService } from "../../services/QuanLyDatVeService";
import { ThongTinDatVe } from "../../_core/models/ThongTinDatVe";
import { SET_PHONG_VE } from "./types/QuanLyDatVeType";

export const layChiTietPhongVeAction = (maLichChieu) => {
    return async (dispatch) => {
        try{
            const result = await quanLyDatVeService.layChiTietPhongVe(maLichChieu);
            console.log("result: ", result.data.content.danhSachGhe);
            if(result.status === 200){
                dispatch({
                    type: SET_PHONG_VE,
                    chiTietPhongVe: result.data.content
                })
            }

        }catch(error){
            console.log("error: ", error.response?.data);

        }
    }
}


export const datVeAction = (thongTinDatVe= new ThongTinDatVe()) => {
    return async (dispatch) => {
        try{
            const result = await quanLyDatVeService.datVe(thongTinDatVe);
            console.log("result: ", result.data.content);


        }catch(error){
            console.log("error: ", error.response?.data);

        }
    }
}