import React, { useEffect, useState } from 'react'
import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
} from 'antd';
import { quanLyRapService } from '../../../services/QuanLyRapService';
import { useFormik } from 'formik';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import * as Yup from "yup";
import { quanLyDatVeService } from '../../../services/QuanLyDatVeService';


const ShowTime = () => {
  const { id, tenphim } = useParams()
  console.log("id: ", id);
  const formik = useFormik({
    initialValues: {
      maPhim: id,
      ngayChieuGioChieu: '',
      maRap: '',
      giaVe: '',
      tenHeThongRap: '',
      cumRap: ''
    },
    validationSchema: Yup.object({
      // tenHeThongRap: Yup.string()
      //   .required("Required!"),
      // cumRap: Yup.string()
      //   .required("Required!"),
      ngayChieuGioChieu: Yup.string()
        .required("Required!"),
      giaVe: Yup.string()
        .required("Required!"),

    }),
    onSubmit: async (values) => {
      console.log("valuesubmit: ", values);
      try {
        let result = await quanLyDatVeService.taoLichChieu(values)
        alert(result.data.content)
      } catch (error) {
        console.log("error: ", error.response?.data);

      }



    }
  })

  const [state, setState] = useState({

    heThongRapChieu: [],
    cumRapChieu: []
  })
  console.log("state: ", state.heThongRapChieu);

  useEffect(async () => {
    try {
      let result = await quanLyRapService.layThongTinHeThongRap();
      setState({
        ...state,
        heThongRapChieu: result.data.content
      })
    } catch (error) {
      console.log("error: ", error);

    }
  }, [])


  const [componentSize, setComponentSize] = useState('default');
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const handleChangeHeThongRap = async (values) => {
    console.log("handleChangeHeThongRap: ", values);

    try {
      let result = await quanLyRapService.layThongTinCumRap(values)
      setState({
        ...state,
        cumRapChieu: result.data.content
      })

    } catch (error) {
      console.log("error: ", error);

    }


  }
  const handleChangeCumRap = (values) => {
    formik.setFieldValue('maRap', values)
  }


  const onChangeDate = (values) => {
    formik.setFieldValue('ngayChieuGioChieu', moment(values).format('DD/MM/YYYY hh:mm:ss'))
    console.log("valuesonOk: ", moment(values).format('DD/MM/YYYY hh:mm:ss'));
  };
  const onOk = (values) => {

    formik.setFieldValue('ngayChieuGioChieu', moment(values).format('DD/MM/YYYY hh:mm:ss'))
    console.log("valuesonOk: ", moment(values).format('DD/MM/YYYY hh:mm:ss'));
  };



  const onChangeInputNumber = (values) => {
    console.log('onOk: ', values);
    formik.setFieldValue('giaVe', values)
  };



  const convertSelectHTR = () => {
    return state.heThongRapChieu?.map((htr, index) => {
      return { label: htr.tenHeThongRap, value: htr.maHeThongRap }
    })

  }
  let film = {}
  if (localStorage.getItem('filmParam')) {
    film = JSON.parse(localStorage.getItem('filmParam'));

  }


  return (
    <Form
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
      onSubmitCapture={formik.handleSubmit}

      onValuesChange={onFormLayoutChange}
      size={componentSize}
    >
      <h2 className='text-xl mb-5'>Tạo Lịch Chiếu </h2>
      <div className='text-center mb-5'>
        <span className='text-2xl  text-yellow-500 mr-2'>{tenphim}</span>
        <span>Mã Phim: {film.maPhim}</span>
      </div>


      <Form.Item label="Form Size" name="size">
        <Radio.Group>
          <Radio.Button value="small">Small</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="large">Large</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Hệ Thống Rạp:" name='tenHeThongRap'>
        <Select name='tenHeThongRap'
          options={convertSelectHTR()}
          onChange={handleChangeHeThongRap} placeholder="Chọn hệ thống rạp"
        />
        {formik.errors.tenHeThongRap && formik.touched.tenHeThongRap && (
          <p className='text-red-500 mb-0 text-sm'>{formik.errors.tenHeThongRap}</p>
        )}

      </Form.Item>
      <Form.Item label="Cụm Rạp:" name='cumRap'>
        <Select name='cumRap'
          options={state.cumRapChieu?.map((cumRap, index) => ({ label: cumRap.tenCumRap, value: cumRap.maCumRap }))}
          onChange={handleChangeCumRap} placeholder="Chọn cụm rạp"
        />
        {formik.errors.cumRap && formik.touched.cumRap && (
          <p className='text-red-500 mb-0 text-sm'>{formik.errors.cumRap}</p>
        )}
      </Form.Item>
      <Form.Item label="Ngày Chiếu Giờ Chiếu">
        <DatePicker format='DD/MM/YYYY hh:mm:ss' showTime onChange={onChangeDate} onOk={onOk} />
        {formik.errors.ngayChieuGioChieu && formik.touched.ngayChieuGioChieu && (
          <p className='text-red-500 mb-0 text-sm'>{formik.errors.ngayChieuGioChieu}</p>
        )}

      </Form.Item>
      <Form.Item label="Giá Vé">
        <InputNumber min={75000} max={150000} step={500} onChange={onChangeInputNumber} />
        {formik.errors.giaVe && formik.touched.giaVe && (
          <p className='text-red-500 mb-0 text-sm'>{formik.errors.giaVe}</p>
        )}
      </Form.Item>

      <div className='text-center'>
        <Form.Item label='' >
          <Button htmlType='submit' className='bg-blue-600 p-2 text-white rounded-lg hover:bg-blue-900 hover:text-white border hover:border-blue-600' >Tạo Lịch Chiếu</Button>
        </Form.Item>
      </div>
    </Form>
  )
}

export default ShowTime