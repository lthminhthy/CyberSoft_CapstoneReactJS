import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router'
import { datVeAction, layChiTietPhongVeAction } from '../../redux/actions/QuanLyDatVeAction'
import { QuanLyNguoiDungReducer } from '../../redux/reducers/QuanLyNguoiDungReducer'
import style from './Checkout.module.css'
import './Checkout.css'
import { CloseOutlined, UserOutlined } from '@ant-design/icons'
import { CHANGE_TAB_ACTIVE, CHUYEN_TAB, DAT_VE } from '../../redux/actions/types/QuanLyDatVeType'
import _ from 'lodash'
import { ThongTinDatVe } from '../../_core/models/ThongTinDatVe'
import { Tabs } from 'antd'
import { layThongTinNguoiDungAction } from '../../redux/actions/QuanLyNguoiDungAction'
import moment from 'moment'

import { useTranslation } from 'react-i18next';





export const Checkout = () => {
  const { t, i18n } = useTranslation();
  const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer)
  const { chiTietPhongVe, danhSachGheDangDat } = useSelector(state => state.QuanLyDatVeReducer)

  const dispatch = useDispatch();
  const param = useParams()

  useEffect(() => {
    const action = layChiTietPhongVeAction(param.id)
    dispatch(action)
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [])

  const { thongTinPhim, danhSachGhe } = chiTietPhongVe;

  const renderSeat = () => {
    return danhSachGhe.map((ghe, index) => {
      let classGheVip = ghe.loaiGhe === 'Vip' ? 'gheVip' : '';
      let classGheDaDat = ghe.daDat === true ? 'gheDaDat' : '';

      let classGheDangDat = '';
      let indexGheDD = danhSachGheDangDat.findIndex(gheDD => gheDD.maGhe === ghe.maGhe);

      let classGheDuocDat = '';
      if (userLogin.taiKhoan === ghe.taiKhoanNguoiDat) {
        classGheDuocDat = 'gheDuocDat'
      }


      if (indexGheDD != -1) {
        classGheDangDat = 'gheDangDat'
      }


      return <Fragment key={index}>
        <button disabled={ghe.daDat} className={`ghe ${classGheVip} ${classGheDaDat} ${classGheDangDat} ${classGheDuocDat}`} onClick={() => {
          dispatch({
            type: DAT_VE,
            gheDuocChon: ghe
          })
        }} >
          {ghe.daDat ? classGheDuocDat != '' ? <UserOutlined className='text-lg' /> : <CloseOutlined /> : ghe.stt}
        </button>
        {(index + 1) % 16 === 0 ? <br /> : ''}
      </Fragment>

    })
  }

  return (
    <div className='min-h-screen'>

      <div className=' container '>

        <div className='grid grid-cols-12 '>
          {/* man hinh chon ghe */}
          <div className='col-span-8 lg:mr-20 '>
            <div className='flex flex-col items-center mt-5'>
              <div className={`${style['trapezium']}`}></div>

            </div>
            <h3 className='text-center text-black'>{t('screen')}</h3>

            <div className='text-center lg:mt-10'>
              {renderSeat()}
            </div>
            <div className='mt-10 flex justify-center'>
              <table className='divide-y divide-slate-600 w-2/3'>
                <thead>
                  <tr>
                    <th>{t('Standard')}</th>
                    <th>{t('VIP seat')}</th>
                    <th>{t('Unavailable')}</th>
                    <th>{t('Selected')}</th>
                    <th>{t('Your seat')}</th>
                  </tr>
                </thead>
                <tbody className=' divide-y divide-slate-600 '>
                  <tr>
                    <td className=' text-center'>
                      <button className='ghe'></button>
                    </td>
                    <td className=' text-center'>
                      <button className='ghe gheVip'></button>
                    </td>
                    <td className=' text-center'>
                      <button className='ghe gheDaDat'>X</button>
                    </td>
                    <td className=' text-center'>
                      <button className='ghe gheDangDat'></button>
                    </td>
                    <td className=' text-center'>
                      <button className='ghe gheDuocDat'><UserOutlined className='text-lg' /></button>
                    </td>
                  </tr>
                </tbody>
              </table>

            </div>




          </div>


          {/* thong tin dat ve */}
          <div className='col-span-4 pr-2'>
            {/* <h3 className='text-center text-yellow-400'>so tien</h3> */}
            {/* <hr /> */}
            <div className='my-5'>
              <h3 className='text-xl'>{thongTinPhim.tenPhim}</h3>
              <p className='text-sm'>{thongTinPhim.tenCumRap}</p>
              <p className='text-base'>{thongTinPhim.ngayChieu} - {thongTinPhim.gioChieu} - {thongTinPhim.tenRap}</p>

            </div>

            <hr />
            <div className='grid grid-cols-3 my-5'>
              <div className='col-span-2'>
                <div className='flex'>
                  <span className='mr-2'>{t('Seat')}: </span>
                  <div>
                    {_.sortBy(danhSachGheDangDat, ['stt']).map((gheDD, index) => {
                      return <span key={index} className="bg-yellow-300 text-lg px-2 py-1 ">{gheDD.stt}
                        {(index + 1) % 5 === 0 ? <br /> : ''}
                      </span>

                    })}
                  </div>

                </div>

              </div>

            </div>
            <hr />
            <div className='my-5'>
              <i className='mr-1'>Email:</i>

              {userLogin.email}
            </div>
            <hr />
            <div className='my-5'>
              <i className='mr-1'>{t('Phone')}:</i>

              {userLogin.soDT}
            </div>
            <hr />
            <div className='grid grid-cols-3 my-5'>
              <div className='col-span-2'>
                <div className='flex'>
                  <span className='mr-2 text-black text-base'>{t('SUB TOTAL')}: </span>
                  <div>
                  </div>

                </div>

              </div>
              <div className='col-span-1 text-right'>
                <span className='text-lg font-semibold text-red-500 '>
                  {danhSachGheDangDat.reduce((tongTien, ghe, index) => {
                    return tongTien += ghe.giaVe;
                  }, 0).toLocaleString()}
                </span>
                <span className='ml-1'>VND</span>
              </div>
            </div>


            <div className='my-5 text-center '>
              <div className=' py-1 px-2 bg-yellow-400 hover:bg-yellow-500 font-semibold rounded-lg cursor-pointer' onClick={() => {
                const thongTinDatVe = new ThongTinDatVe();
                // console.log("thongTinDatVe: ", thongTinDatVe);
                thongTinDatVe.maLichChieu = param.id;
                thongTinDatVe.danhSachVe = danhSachGheDangDat;
                dispatch(datVeAction(thongTinDatVe))
              }}>
                {t('BUY TICKET')}
              </div>

            </div>



          </div>
        </div>

      </div>
    </div>
  )
}


const { TabPane } = Tabs;

function callback(key) {
  console.log("key: ", key);

}
export default function (props) {
  const { t, i18n } = useTranslation();

  const { tabActive } = useSelector(state => state.QuanLyDatVeReducer)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer)

  const operations = <Fragment>
    {!_.isEmpty(userLogin) ? <button onClick={() => {
      navigate("/profile")
    }}>
      <div className='flex justify-center items-center'>
        <div className="overflow-hidden relative w-8 h-8 bg-black rounded-full dark:bg-gray-600">
        <svg className="absolute -left-1 w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>
        
        </div>
        <span className="ml-3 font-medium text-gray-600 dark:text-gray-300">{userLogin.taiKhoan}</span>
      </div>
    </button> : ''}
  </Fragment>

  return <div className=''>

    <button className='flex hover:bg-yellow-300 bg-yellow-200 bg-opacity-50 previous lg:p-1 mt-5 ml-5 rounded-md' onClick={() => {
      navigate(-1)

    }}>
      <div className='mr-1'>&laquo;</div>
      <div>{t('Back')}</div>

    </button>

    <div className='p-5'>
      <Tabs tabBarExtraContent={operations} defaultActiveKey='1' activeKey={tabActive} onChange={(key) => {
        dispatch({
          type: CHANGE_TAB_ACTIVE,
          number: key.toString()
        })
      }}>
        <TabPane tab={t('01 CHOOSE YOUR SEAT & PAY')} key="1"

        >
          <Checkout  {...props} />
        </TabPane>
        <TabPane tab={t('02 PAYMENT HISTORY')} key="2"

        >
          <KetQuaDatVe {...props} />
        </TabPane>


      </Tabs>
    </div>

  </div>

};



function KetQuaDatVe(props) {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch()
  const { thongTinNguoiDung } = useSelector(state => state.QuanLyNguoiDungReducer)
  const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer)

  useEffect(() => {
    const action = layThongTinNguoiDungAction()
    dispatch(action)
    window.scrollTo({ top: 0, behavior: 'smooth' });

  }, [])

  const renderTicketHistory = () => {

    return thongTinNguoiDung.thongTinDatVe?.map((ticket, index) => {

      const seats = _.first(ticket.danhSachGhe);
      return <div className="p-4 lg:w-1/2" key={index}>
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={ticket.hinhAnh} />
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-lg text-gray-900">{ticket.tenPhim}</h2>
            <h3 className="text-gray-500 mb-3">{moment(ticket.ngayDat).format('DD-MM-YYYY')} | {moment(ticket.ngayDat).format('hh:mm A')}</h3>
            <span className="mb-4 text-yellow-500">{seats.maHeThongRap}  </span>
            <span className="mb-4">- {seats.tenHeThongRap} </span>
            <span className="mb-4">- {seats.tenCumRap} </span>

            <p className='grid grid-cols-6'> {ticket.danhSachGhe.map((ghe, index) => {
              return <span className='m-1 col-span-1 p-2 bg-yellow-300 text-center' key={index}>{ghe.tenGhe}</span>
            })}</p>


          </div>
        </div>
      </div>





    })
  }

  return <div>
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">{t('PAYMENT HISTORY')}</h1>
        </div>
        <div className="flex flex-wrap -m-4 ">
          {renderTicketHistory()}



        </div>
      </div>
    </section>

  </div>
}
