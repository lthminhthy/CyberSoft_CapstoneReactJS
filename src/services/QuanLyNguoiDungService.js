import { GROUPID } from "../util/settings/config";
import { baseService } from "./baseService";



export class QuanLyNguoiDungService extends baseService{
    constructor(){
        super();
    }

    dangNhap = (thongTinDangNhap) => {
        // taiKhoan, matKhau
        return this.post(`api/QuanLyNguoiDung/DangNhap`, thongTinDangNhap);
       
    }
    layThongTinTaiKhoan= () => {
        return this.post(`api/QuanLyNguoiDung/ThongTinTaiKhoan`);
    }
    dangKy= (thongTinDangKy) => {
        return this.post(`/api/QuanLyNguoiDung/DangKy`, thongTinDangKy);
    }
    layDanhSachNguoiDung= (tuKhoa= '') => {
        if(tuKhoa.trim() != ''){
            return this.get(`/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01&tuKhoa=${tuKhoa}`);         
        }
        return this.get(`/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUPID}`);
    }
    themNguoiDung= (thongTinNguoiDung) => {
        return this.post(`/api/QuanLyNguoiDung/ThemNguoiDung`, thongTinNguoiDung);
    }
    layDanhSachLoaiNguoiDung= () => {
        return this.get(`/api/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung`);
    }
    layThongTinNguoiDung= (tk) => {
        return this.post(`/api/QuanLyNguoiDung/LayThongTinNguoiDung?taiKhoan=${tk}`);
    }
    capNhatThongTinNguoiDung= (thongTinNguoiDung) => {
        return this.post(`/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`, thongTinNguoiDung);
    }
    xoaNguoiDung= (TaiKhoan) => {
        return this.delete(`/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${TaiKhoan}`);
    }


   
}

export const quanLyNguoiDungService = new QuanLyNguoiDungService();