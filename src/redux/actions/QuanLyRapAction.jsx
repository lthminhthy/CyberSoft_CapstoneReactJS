import { quanLyRapService } from "../../services/QuanLyRapService";
import { SET_HETHONGRAP } from "./types/QuanLyRapType";

export const layDanhSachHeThongRapAction = () => {
    return async (dispatch) => {
        try{
            const result = await quanLyRapService.layDanhSachHeThongRap()
            console.log("result: ", result.data.content);

            if(result.status === 200){
                dispatch({
                    type:SET_HETHONGRAP,
                    heThongRapChieu: result.data.content
                })
            }

        }catch(error){
            console.log("error: ", error.response?.data);

        }
    }
}