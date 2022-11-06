import React, { Fragment, useState } from 'react'
import { Tabs } from 'antd';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import moment from 'moment/moment';
import './HomeMenu.css'

const { TabPane } = Tabs;

export default function HomeMenu(props) {
  const [state, setState] = useState({
    tabPosition: 'left',
  })

  const { heThongRapChieu } = useSelector(state => state.QuanLyRapReducer)


  const changeTabPosition = e => {
    setState({ tabPosition: e.target.value });
  };

  const { tabPosition } = state;
  // const renderHeThongRap = () => {

  //   return state.heThongRap?.map((heThongRap,index) => {
  //     return <TabPane tab={<img src={heThongRap.logo} className="rounded-full" width="50" key={index}></img>}></TabPane>
  //   })
  // }

  const renderHeThongRap = () => {
    return heThongRapChieu.map((heThongRapChieu, index) => {
      return <TabPane tab={<img src={heThongRapChieu.logo} className="rounded-full lg:w-12 sm:w-9 w-6"  ></img>} key={index} >

        <Tabs tabPosition={tabPosition}>
          {heThongRapChieu.lstCumRap?.slice(1,5).map((cumRap, index) => {
            return <TabPane tab={
              <div style={{  display: 'flex' }}>
                <img src={heThongRapChieu.logo} className='lg:w-14 sm:w-0 w-0' />
                <div className='text-left lg:ml-2 text-black 	'>
                  <span className='md:text-base sm:text-xs text-xs'>{cumRap.tenCumRap}</span>
                  <p className='lg:text-sm sm:text-xs  text-xs text-yellow-500 md:block hidden'>{cumRap.diaChi}</p>
                </div>

              </div>

            } key={index} >

              {/* Load film */}
              {cumRap.danhSachPhim?.splice(1,4).map((phim, index) => {
                return <Fragment key={index} className='sm:block hidden'>
                   <hr className='respon-hr' />
                  <div className='my-2 respon '>
                    <div style={{ display: 'flex' }}>
                     
                      <img className='md:w-28 md:h-32 w-8 h-12 sm:block hidden rounded-md'  src={phim.hinhAnh} alt={phim.tenPhim} onError={(e) => { 
                        e.target.onerror = null; e.target.src = 'https://picsum.photos/75/75'}} />
                      <div className='ml-3 md:block '>
                        <h1 className='lg:text-xl sm:text-base text-sm font-semibold'>{phim.tenPhim}</h1>
                        <div className='grid md:grid-cols-3 grid-cols-1  md:gap-6 gap-2 '>
                          {phim.lstLichChieuTheoPhim?.slice(1,4).map((lichChieu, index) => {
                            return <NavLink className="text-yellow-500 hover:text-black  md:px-2 md:py-1 rounded-md  font-semibold  " to={`/checkout/${lichChieu.maLichChieu}`} key={index}>
                              <span className='lg:text-lg sm:text-sm text-sm'>
                                {moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}
                              </span>
                              
                            </NavLink>
                          })}
                        </div>
                        
                      </div>
                      
                      




                    </div>
                    
                  </div>
                </Fragment>

              })}


            </TabPane>

          })}

        </Tabs>
      </TabPane>
    })
  }



  return (
    <>
      <Tabs tabPosition={tabPosition}>
        {renderHeThongRap()}

      </Tabs>
    </>
  )
}