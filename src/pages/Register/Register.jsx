import {
  AutoComplete,
  Button,
  Cascader,
  Checkbox,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
} from 'antd';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router';
import { quanLyNguoiDungService } from '../../services/QuanLyNguoiDungService';
import { GROUPID } from '../../util/settings/config';


const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
const Register = () => {
  const navigate = useNavigate()
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  


  const formik = useFormik({

    initialValues: {
      taiKhoan: '',
      matKhau: '',
      email: '',
      soDT: '',
      maNhom: GROUPID,
      hoTen: '',

    },
    onSubmit:async (values) => {
      try {
        let result = await quanLyNguoiDungService.dangKy(values)
        console.log("result: ", result);
        alert("Bạn đã đăng ký thành công")
        navigate('/login')
      } catch (error) {
        console.log("errorcall: ", error.response?.data);

      }
      console.log("value: ", values);
      // alert(JSON.stringify(value, null,2));
    },
  });
  
 
  const onChangeInputNumber = (values) => {
    console.log('soDT: ', values);
    formik.setFieldValue('soDT', values)
  };

  return (
    <Form style={{ padding: 60 }}
      {...formItemLayout}
      onSubmitCapture={formik.handleSubmit} 
      form={form}
      onFinish={onFinish}
      scrollToFirstError
    >
      <Form.Item
        label="Name Account"

        rules={[
          {
            required: true,
            message: 'Please input your nickname!',
            whitespace: true,
          },
        ]}
      >
        <Input name='taiKhoan'  onChange={formik.handleChange} />
      </Form.Item>
      <Form.Item
        label="Full name"
        rules={[
          {
            required: true,
            message: 'Please input your full name!',
            whitespace: true,
          },
        ]}
      >
        <Input name='hoTen'  onChange={formik.handleChange} />
      </Form.Item>

      <Form.Item
        
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input name='email'  onChange={formik.handleChange}/>
      </Form.Item>
      <Form.Item
        
        label="Telephone"
        rules={[
          
          {
            required: true,
            message: 'Please input your Phone!',
          },
        ]}
      >
        <Input name='soDT'  onChange={formik.handleChange}/>
      </Form.Item>
      



      <Form.Item
        name="matKhau"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password name='matKhau' onChange={formik.handleChange}/>
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('matKhau') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>



      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
          I have read the <a href="">agreement</a>
        </Checkbox>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};
export default Register;