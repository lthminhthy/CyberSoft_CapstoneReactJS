import { Navigate, useNavigate } from "react-router";
import { quanLyPhimService } from "../../services/QuanLyPhimService";
import { SET_LISTFILM, SET_THONGTIN_PHIM } from "./types/QuanLyPhimType";


export const layDanhSachPhimAction = (tenPhim='') => {
    return async (dispatch) => {
        try {
            const result = await quanLyPhimService.layDanhSachPhim(tenPhim)



            dispatch({
                type: SET_LISTFILM,
                arrPhim: result.data.content
            })
        }
        catch (error) {
            console.log('error', error.response?.data)
        }
    };
}
export const themPhimUploadHinhAction = (formData) => {
    return async (dispatch) => {
        try {
            let result = await quanLyPhimService.themPhimUploadHinh(formData);
            alert('Thêm phim thành công!')



        } catch (error) {
            console.log("error: ", error.response?.data);

        }
    }

}

export const capNhatPhimUploadAction = (formData,navigate) => {
   
    return async (dispatch) => {
        try {
  
            let result = await quanLyPhimService.capNhatPhimUpload(formData);
            console.log("result: ", result);
            alert('Cập nhật phim thành công!')
            dispatch(layDanhSachPhimAction());
            navigate('/admin/film')

        } catch (error) {
            console.log("error: ", error.response?.data);

        }
    }

}

export const layThongTinPhimAction = (maPhim) => {
    return async (dispatch) => {
        try {
            const result = await quanLyPhimService.layThongTinPhim(maPhim);
            console.log("result: ", result.data.content);
            dispatch({
                type: SET_THONGTIN_PHIM,
                thongTinPhim: result.data.content

            })


        } catch (error) {
            console.log("error: ", error.response?.data);

        }
    }
}

export const xoaPhimAction = (maPhim) => {
    return async (dispatch) => {
        try {
            const result = await quanLyPhimService.xoaPhim(maPhim);
            console.log("result: ", result.data.content);
            alert('Xóa phim thành công')

            dispatch(layDanhSachPhimAction())


        } catch (error) {
            console.log("error: ", error.response?.data);

        }
    }
}

