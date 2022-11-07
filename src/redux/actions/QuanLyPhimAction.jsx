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
export const themPhimUploadHinhAction = (formData) => {
    return async (dispatch) => {
        try  {
            let result = await quanLyPhimService.themPhimUploadHinh(formData);
            alert('Thêm phim thành công!')

            dispatch({

            })

        }catch(error){
            console.log("error: ", error);

        }
    }

}