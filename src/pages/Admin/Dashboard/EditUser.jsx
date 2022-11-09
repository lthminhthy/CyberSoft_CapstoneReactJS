
import React, { useEffect, useState } from 'react'
import {
    Button,
    Cascader,
    Form,
    Input,
    InputNumber,
    Radio,
    Select,
    Switch,
    TreeSelect,
} from 'antd';
import { useFormik } from 'formik';
// import moment from 'moment/moment';
import * as Yup from "yup";
import { useDispatch, useSelector } from 'react-redux';
// import { themPhimUploadHinhAction } from '../../../redux/actions/QuanLyPhimAction';
import { GROUPID } from '../../../util/settings/config';
import { useNavigate, useParams } from 'react-router';
import { layThongTinNguoiDungAction, themNguoiDungAction } from '../../../redux/actions/QuanLyNguoiDungAction';
import { quanLyNguoiDungService } from '../../../services/QuanLyNguoiDungService';
import { SET_MALOAI_USER } from '../../../redux/actions/types/QuanLyNguoiDungType';



const EditUser = () => {
    const [componentSize, setComponentSize] = useState('default');
    const dispatch = useDispatch()
    const navigate = useNavigate()
    let { tk } = useParams();
    console.log("tk: ", tk);
    
    const { thongTinNguoiDungAdmin } = useSelector(state => state.QuanLyNguoiDungReducer)
    console.log("thongTinNguoiDungAdmin: ", thongTinNguoiDungAdmin);

    const { maLoaiND } = useSelector(state => state.QuanLyNguoiDungReducer)

    
    useEffect( () => {
        dispatch(layThongTinNguoiDungAction(tk, navigate))
        quanLyNguoiDungService.layDanhSachLoaiNguoiDung().then((result) => {
            console.log("result: ", result);
            dispatch({
                type: SET_MALOAI_USER,
                maLoaiND: result.data.content
                })
          }).catch((error) => {
            console.log("error: ", error.response?.data);
      
          })

        
    }, [])



    // formik
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            taiKhoan: thongTinNguoiDungAdmin.taiKhoan,
            matKhau: thongTinNguoiDungAdmin.matKhau,
            email: thongTinNguoiDungAdmin.email,
            soDt: thongTinNguoiDungAdmin.soDT,
            maNhom: GROUPID,
            maLoaiNguoiDung: thongTinNguoiDungAdmin.maLoaiNguoiDung,
            hoTen: thongTinNguoiDungAdmin.hoTen,

        },
        validationSchema: Yup.object({
            taiKhoan: Yup.string()
                .min(3, "Mininum 3 characters")
                .required("Required!"),
            matKhau: Yup.string()
                .min(4, "Mininum 4 characters")
                .required("Required!"),
            email: Yup.string()
                .required("Required!"),
            soDt: Yup.string()
                .required("Required!"),
            hoTen: Yup.string()
                .required("Required!"),
        }),

        onSubmit: (values) => {
            console.log("valuesubmit: ", values);
             quanLyNguoiDungService.capNhatThongTinNguoiDung(values).then((result) => {
                // alert('Cập nhật thành công!')
            navigate('/admin/user')

              }).catch((error) => {
                console.log("error: ", error.response?.data);
          
              })
           
            

        }
    });





    const handleChangeLoaiND = (values) => {
        formik.setFieldValue('maLoaiNguoiDung', values)
        console.log("valuesmaLoaiNguoiDung: ", values);
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
                <h2 className='text-xl mb-5'>Cập Nhật Người Dùng</h2>
                <Form.Item label="Form Size" name="size">
                    <Radio.Group>
                        <Radio.Button value="small">Small</Radio.Button>
                        <Radio.Button value="default">Default</Radio.Button>
                        <Radio.Button value="large">Large</Radio.Button>
                    </Radio.Group>
                </Form.Item>
                <Form.Item label="Họ Tên">
                    <Input name='hoTen' onChange={formik.handleChange} value={formik.values.hoTen} />
                    {formik.errors.hoTen && formik.touched.hoTen && (
                        <p className='text-red-500 mb-0 text-sm'>{formik.errors.hoTen}</p>
                    )}
                </Form.Item>
                <Form.Item label="Tài Khoản">
                    <Input name='taiKhoan' onChange={formik.handleChange} value={formik.values.taiKhoan} />
                    {formik.errors.taiKhoan && formik.touched.taiKhoan && (
                        <p className='text-red-500 mb-0 text-sm'>{formik.errors.taiKhoan}</p>
                    )}
                </Form.Item>
                <Form.Item label="Mật Khẩu">
                    <Input name='matKhau' onChange={formik.handleChange} value={formik.values.matKhau} />
                    {formik.errors.matKhau && formik.touched.matKhau && (
                        <p className='text-red-500 mb-0 text-sm'>{formik.errors.trailer}</p>
                    )}
                </Form.Item>
                <Form.Item label="Email">
                    <Input name='email' onChange={formik.handleChange} value={formik.values.email} />
                    {formik.errors.email && formik.touched.email && (
                        <p className='text-red-500 mb-0 text-sm'>{formik.errors.email}</p>
                    )}
                </Form.Item>
                <Form.Item label="Số điện thoại">
                    <Input name='soDt' onChange={formik.handleChange} value={formik.values.soDt} />
                    {formik.errors.soDt && formik.touched.soDt && (
                        <p className='text-red-500 mb-0 text-sm'>{formik.errors.soDt}</p>
                    )}
                </Form.Item>
                <Form.Item label="Loại Người Dùng:" name='maLoaiNguoiDung'>
                    <Select name='maLoaiNguoiDung'
                        placeholder="Chọn loại người dùng"
                        options={maLoaiND?.map((mlnd, index) => ({ label: mlnd.tenLoai, value: mlnd.maLoaiNguoiDung }))}

                        onChange={handleChangeLoaiND}
                        value={formik.values.maLoaiNguoiDung}

                    />


                </Form.Item>

                <div className='text-center'>
                    <Form.Item label='' >
                        <Button htmlType="submit" className='bg-blue-600 p-2 text-white rounded-lg hover:bg-blue-900 hover:text-white border hover:border-blue-600'>Cập nhật</Button>
                    </Form.Item>
                </div>

            </Form>
        </div>

    )
}

export default EditUser
