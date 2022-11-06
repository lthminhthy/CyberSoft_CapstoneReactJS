import { quanLyPhimService } from "../../services/QuanLyPhimService";
import { SET_LISTFILM } from "./types/QuanLyPhimType";


export const layDanhSachPhimAction = () => {
    return async (dispatch) => {
        try {
            const result = await quanLyPhimService.layDanhSachPhim()
            
           

            dispatch({
                type: SET_LISTFILM,
                arrPhim: result.data.content
            })
        } 
         catch (error) {
            console.log('error', error)
        }
    };
}