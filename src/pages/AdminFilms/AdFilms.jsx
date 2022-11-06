import { Table } from 'antd';
import React, { Fragment } from 'react';

import { Input, Space } from 'antd';
import { Button, Tooltip } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { layDanhSachPhimAction } from '../../redux/actions/QuanLyPhimAction';
import { NavLink } from 'react-router-dom';
import { EditOutlined,DeleteOutlined } from '@ant-design/icons';
import './AdminFilm.css'




const { Search } = Input;



const AdFilms = () => {
  const {arrPhimDefault} = useSelector(state => state.QuanLyPhimReducer);
  console.log("arrPhimDefault: ", arrPhimDefault);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(layDanhSachPhimAction())
  },[])

  const onSearch = (value) => console.log(value);

  const columns = [
    {
      title: 'Mã Phim',
      dataIndex: 'maPhim',
      value: (text, object) => { return <span>{text}</span>},
      
      // specify the condition of filtering result
      // here is that finding the name started with `value`
      
      sorter: (a, b) => a.maPhim - b.maPhim,
      sortDirections: ['descend','ascend'],
      width: "10%"
    },
    {
      title: 'Hình Ảnh',
      dataIndex: 'hinhAnh',
      render: (text,film, index) => { return <Fragment>
        <img src={film.hinhAnh} alt={film.tenPhim} width={50} height={50} onError={(e) => {e.target.onError = null ; e.target.src= `https://picsum.photos/id/${index}/50/50`}}></img>
      </Fragment>},
      width: "10%"
      
    },
    {
      title: 'Tên Phim',
      dataIndex: 'tenPhim',
      sorter: (a, b) => {
        let tenPhimA = a.tenPhim.toLowerCase().trim();
        let tenPhimB = b.tenPhim.toLowerCase().trim();
        if(tenPhimA<tenPhimB){
          return 1

        }
        return -1
      },
      width: "25%",
      sortDirections: ['descend','ascend'],
      
      onFilter: (value, record) => record.address.indexOf(value) === 0,
    },
    {
      title: 'Mô Tả',
      dataIndex: 'moTa',
      sorter: (a, b) => {
        let moTaA = a.moTa.toLowerCase().trim();
        let moTaB = b.moTa.toLowerCase().trim();
        if(moTaA<moTaB){
          return 1

        }
        return -1
      },
      render: (text, film) => { return <Fragment>
          {film.moTa.length>50 ? film.moTa.substring(0,50) + '...' : film.moTa}
        </Fragment>

      },
      width:'35%',
      sortDirections: ['descend','ascend'],
      
      onFilter: (value, record) => record.address.indexOf(value) === 0,
    },
    {
      title: 'Hành Động',
      dataIndex: 'hanhDong',
      sorter: (a, b) => {
        let moTaA = a.moTa.toLowerCase().trim();
        let moTaB = b.moTa.toLowerCase().trim();
        if(moTaA<moTaB){
          return 1

        }
        return -1
      },
      render: (text, film) => { return <Fragment >
        <div className='text-center'>
          <NavLink to='/' className='hover:bg-yellow-500 bg-white border border-yellow-500 text-yellow-500 hover:text-white px-4 py-1.5  rounded-md mr-3 font-bold text-lg'><EditOutlined></EditOutlined></NavLink>
          <NavLink to='/' className='hover:bg-red-500  border border-red-500 text-red-500 hover:text-white px-4 py-1.5 rounded-md mr-3 font-bold text-lg'><DeleteOutlined /></NavLink>
        </div>
          
        </Fragment>

      },
      width:'20%',
      sortDirections: ['descend','ascend'],
      
      onFilter: (value, record) => record.address.indexOf(value) === 0,
    },
  ];
  const data = arrPhimDefault;
  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

 
  return (
    <div className='container'>
      <h2 className='lg:text-lg text-base mb-5'>Quản Lý Phim</h2>
      <div className='flex justify-between items-center'>
        <Space direction="vertical">
          <Search
            placeholder="input search text"
            allowClear
            onSearch={onSearch}
            style={{
              width: 'auto',
            }}
          />
        </Space>
        <Button type="primary" shape="circle" size="large" >
          +
        </Button>
      </div>

      <Table className='mt-2' columns={columns} dataSource={data} onChange={onChange} ></Table>


    </div>
  )
}



export default AdFilms;




