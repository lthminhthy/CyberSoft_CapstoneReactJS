import React, { useEffect, useState } from 'react'
import {
    DatePicker,
    Form,
    Input,
    InputNumber,
    Radio,
    Switch,
} from 'antd';
import { useFormik } from 'formik';
import moment from 'moment/moment';
import * as Yup from "yup";
import { useDispatch, useSelector } from 'react-redux';
import { themPhimUploadHinhAction,layThongTinPhimAction, capNhatPhimUploadAction } from '../../../redux/actions/QuanLyPhimAction';
import { GROUPID } from '../../../util/settings/config';
import { useNavigate, useParams} from 'react-router-dom';



const EditFilm = () => {



    const [componentSize, setComponentSize] = useState('default');
    const [imgSrc, setImgSrc] = useState('');
    const dispatch = useDispatch()
    let { id } = useParams(); 
    const {thongTinPhim} = useSelector(state => state.QuanLyPhimReducer)
    const navigate = useNavigate()
    
   

    useEffect(() => {
        dispatch(layThongTinPhimAction(id))
    }, [])



    // formik
    const formik = useFormik({
        enableReinitialize:true,
        initialValues: {
            maPhim: thongTinPhim.maPhim,
            tenPhim: thongTinPhim?.tenPhim,
            trailer: thongTinPhim?.trailer,
            moTa: thongTinPhim?.moTa,
            ngayKhoiChieu: thongTinPhim.ngayKhoiChieu,
            dangChieu: thongTinPhim.dangChieu,
            sapChieu: thongTinPhim.sapChieu,
            hot: thongTinPhim.hot,
            danhGia: thongTinPhim.danhGia,
            hinhAnh: null,

        },
        validationSchema: Yup.object({
            tenPhim: Yup.string()
                .min(2, "Mininum 2 characters")
                .required("Required!"),
            moTa: Yup.string()
                .min(5, "Mininum 5 characters")
                .required("Required!"),
            trailer: Yup.string()
                .required("Required!"),
            ngayKhoiChieu: Yup.string()
                .required("Required!"),
            danhGia: Yup.string()
                .required("Required!"),
        }),

        onSubmit: (values) => {
            console.log("values: ", values);
            values.maNhom = GROUPID;

            let formData = new FormData()

            for (let key in values) {

                if (key !== 'hinhAnh') {
                    formData.append(key, values[key]);
                } else {
                    if(values.hinhAnh != null){
                        formData.append('File', values.hinhAnh, values.hinhAnh.name)
                    }
                }
            }
            dispatch(capNhatPhimUploadAction(formData,navigate))
      
            // if(capNhatPhimUploadAction.result)
            
            // navigate('/admin/film')

            

        }
    });

    const handleChangeDatePicker = (value) => {
        let ngayKhoiChieu = moment(value)
        formik.setFieldValue('ngayKhoiChieu', ngayKhoiChieu)
    }

    const handleChangeInput = (name) => {

        return (value) => {
            formik.setFieldValue(name, value)

        }
    }

    const handleChangeFile = async(e) => {
        let file = e.target.files[0];
        if (file.type === 'image/png' || file.type === 'image/jpeg' || file.type === 'image/jpg' || file.type === 'image/gif') {
            await formik.setFieldValue('hinhAnh', file)

            // tao doi tuong doc file
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (e) => {
                setImgSrc(e.target.result)
            }
        }
    }






    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };
    return (
        <div className='container'>
            <Form
                onSubmitCapture={formik.handleSubmit}
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal"
                initialValues={{
                    size: componentSize,
                }}
                onValuesChange={onFormLayoutChange}
                size={componentSize}

            >
                <h2 className='text-xl mb-5'>Thêm Phim</h2>
                <Form.Item label="Form Size" name="size">
                    <Radio.Group>
                        <Radio.Button value="small">Small</Radio.Button>
                        <Radio.Button value="default">Default</Radio.Button>
                        <Radio.Button value="large">Large</Radio.Button>
                    </Radio.Group>
                </Form.Item>
                <Form.Item label="Tên Phim">
                    <Input name='tenPhim' onChange={formik.handleChange} value={formik.values.tenPhim}/>
                    {formik.errors.tenPhim && formik.touched.tenPhim && (
                        <p className='text-red-500 mb-0 text-sm'>{formik.errors.tenPhim}</p>
                    )}
                </Form.Item>
                <Form.Item label="Trailer">
                    <Input name='trailer' onChange={formik.handleChange} value={formik.values.trailer}/>
                    {formik.errors.trailer && formik.touched.trailer && (
                        <p className='text-red-500 mb-0 text-sm'>{formik.errors.trailer}</p>
                    )}
                </Form.Item>
                <Form.Item label="Mô tả">
                    <Input name='moTa' onChange={formik.handleChange} value={formik.values.moTa}/>
                    {formik.errors.moTa && formik.touched.moTa && (
                        <p className='text-red-500 mb-0 text-sm'>{formik.errors.moTa}</p>
                    )}
                </Form.Item>
                <Form.Item label="Ngày Khởi Chiếu">
                    <DatePicker name='ngayKhoiChieu' format="DD/MM/YYYY" onChange={handleChangeDatePicker} defaultValue={moment(formik.values.ngayKhoiChieu)}/>
                    {formik.errors.ngayKhoiChieu && formik.touched.ngayKhoiChieu && (
                        <p className='text-red-500 mb-0 text-sm'>{formik.errors.ngayKhoiChieu}</p>
                    )}
                </Form.Item>
                <Form.Item label="Đang Chiếu" valuePropName="checked">
                    <Switch onChange={handleChangeInput('dangChieu')} checked={formik.values.dangChieu}/>
                </Form.Item>
                <Form.Item label="Sắp Chiếu" valuePropName="checked">
                    <Switch onChange={handleChangeInput('sapChieu')} checked={formik.values.sapChieu}/>
                </Form.Item>
                <Form.Item label="Hot" valuePropName="checked">
                    <Switch onChange={handleChangeInput('hot')} checked={formik.values.hot}/>
                </Form.Item>
                <Form.Item label="Rating">
                    <InputNumber min={1} max={10} onChange={handleChangeInput('danhGia')} value={formik.values.danhGia} />
                    {formik.errors.danhGia && formik.touched.danhGia && (
                        <p className='text-red-500 mb-0 text-sm'>{formik.errors.danhGia}</p>
                    )}
                </Form.Item>
                <Form.Item label="Hình Ảnh">
                    <input type='file' onChange={handleChangeFile} accept='image/png, image/jpeg' />
                    <br />
                    <img style={{ width: 100, height: 100 }} src={ imgSrc === '' ? thongTinPhim.hinhAnh : imgSrc} alt="." />

                </Form.Item>
                <div className='text-center'>
                    <Form.Item label='' >
                        <button type="submit" className='bg-blue-600 p-2 text-white rounded-lg hover:bg-blue-900 hover:text-white border hover:border-blue-600' >Cập Nhật Phim</button>
                    </Form.Item>
                </div>

            </Form>
        </div>

    )
}

export default EditFilm