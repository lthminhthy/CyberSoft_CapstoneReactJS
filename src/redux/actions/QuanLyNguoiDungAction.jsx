import { quanLyNguoiDungService } from "../../services/QuanLyNguoiDungService";
import { displayLoadingAction, hideLoadingAction } from "./LoadingAction";
import { SET_DANGNHAP, SET_LIST_USER, SET_THONGTIN_NGUOIDUNG, SET_THONGTIN_USER } from "./types/QuanLyNguoiDungType";



export const dangNhapAction = (thongTinDangNhap, navigate) => {
    return async (dispatch) => {
        try {
            const result = await quanLyNguoiDungService.dangNhap(thongTinDangNhap)

            if (result.data.statusCode === 200) {
                dispatch({
                    type: SET_DANGNHAP,
                    thongTinDangNhap: result.data.content
                })


            } navigate('/home')


            console.log("result: ", result);
        } catch (error) {
            console.log(error.response?.data);
        }
    }

}
export const layThongTinTaiKhoanAction = () => {
    return async (dispatch) => {
        try {
            
            dispatch(displayLoadingAction)
            
            const result = await quanLyNguoiDungService.layThongTinTaiKhoan()
            console.log("result thong tin nguoi dung: ", result);
            
            if (result.data.statusCode === 200) {
                dispatch({
                    type: SET_THONGTIN_USER,
                    thongTinNguoiDung: result.data.content

                })
            }

            await dispatch(hideLoadingAction)

            console.log("result: ", result);
        } catch (error) {
            console.log(error.response?.data);
            alert('Đã xảy ra lỗi')
        }
    }

}
export const layDanhSachNguoiDungAction = (tuKhoa = '') => {
    return async (dispatch) => {
        try {
            const result = await quanLyNguoiDungService.layDanhSachNguoiDung(tuKhoa)
            console.log("result danh sach nguoi dung: ", result);

            if (result.data.statusCode === 200) {
                dispatch({
                    type: SET_LIST_USER,
                    danhSachNguoiDung: result.data.content

                })
            }
            console.log("result: ", result);
        } catch (error) {
            console.log(error.response?.data);
        }
    }

}

export const themNguoiDungAction = (formData, navigate) => {
    return async (dispatch) => {
        try {
            let result = await quanLyNguoiDungService.themNguoiDung(formData);
            console.log("result: ", result);
            alert('Thêm người dùng thành công!')
            dispatch(layDanhSachNguoiDungAction())
            navigate('/admin/user')


        } catch (error) {
            console.log("error: ", error.response?.data);

        }
    }

}
export const layThongTinNguoiDungAction = (taiKhoan, navigate) => {
    return async (dispatch) => {
        try {
            let result = await quanLyNguoiDungService.layThongTinNguoiDung(taiKhoan);
            console.log("result: ", result);
            dispatch({
                type: SET_THONGTIN_NGUOIDUNG,
                thongTinNguoiDungAdmin: result.data.content

            })




        } catch (error) {
            console.log("error: ", error.response?.data);

        }
    }

}
export const xoaNguoiDungAction = (TaiKhoan) => {
    return async (dispatch) => {
        try {
            const result = await quanLyNguoiDungService.xoaNguoiDung(TaiKhoan);
            console.log("result: ", result.data.content);
            alert('Xóa người dùng thành công')

            dispatch(layDanhSachNguoiDungAction())


        } catch (error) {
            console.log("error: ", error.response?.data);

        }
    }

}



