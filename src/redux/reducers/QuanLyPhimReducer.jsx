import { SET_LISTFILM } from "../actions/types/QuanLyPhimType"

const stateDefault = {
    arrPhim: [
        // {
        //     "maPhim": 4416,
        //     "tenPhim": "cuộc sống muôn màu",
        //     "biDanh": "cuoc-song-muon-mau",
        //     "trailer": "",
        //     "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/cuoc-song-muon-mau_gp05.jpg",
        //     "moTa": "Bộ phim nói về cuộc sống thường ngày với muôn ngàn sắc thái khác cảm xúc khác nhau của con người",
        //     "maNhom": "GP01",
        //     "ngayKhoiChieu": "2022-10-14T22:37:03.4",
        //     "danhGia": 10,
        //     "hot": false,
        //     "dangChieu": true,
        //     "sapChieu": false
        // },
        
        // {
        //     "maPhim": 4416,
        //     "tenPhim": "cuộc sống muôn màu",
        //     "biDanh": "cuoc-song-muon-mau",
        //     "trailer": "",
        //     "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/cuoc-song-muon-mau_gp05.jpg",
        //     "moTa": "Bộ phim nói về cuộc sống thường ngày với muôn ngàn sắc thái khác cảm xúc khác nhau của con người",
        //     "maNhom": "GP01",
        //     "ngayKhoiChieu": "2022-10-14T22:37:03.4",
        //     "danhGia": 10,
        //     "hot": false,
        //     "dangChieu": true,
        //     "sapChieu": false
        // },
    ]
}

export const QuanLyPhimReducer = (state = stateDefault, action) => {
    switch(action.type){
        case SET_LISTFILM : {
            state.arrPhim = action.arrPhim
            return {...state}
        }

        default: return {...state}
    }

}