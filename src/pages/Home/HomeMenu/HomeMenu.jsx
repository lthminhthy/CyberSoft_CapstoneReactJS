import React, { Fragment, useState } from 'react'
import { Tabs } from 'antd';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import moment from 'moment/moment';

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
      return <TabPane tab={<img src={heThongRapChieu.logo} className="rounded-full" width={50} ></img>} key={index} >

        <Tabs tabPosition={tabPosition}>
          {heThongRapChieu.lstCumRap?.slice(1,5).map((cumRap, index) => {
            return <TabPane tab={
              <div style={{  display: 'flex' }}>
                <img src={heThongRapChieu.logo} width={40} />
                <div className='text-left ml-2	'>{cumRap.tenCumRap}
                  <p className='text-xs text-yellow-500'>{cumRap.diaChi}</p>
                </div>

              </div>

            } key={index} >

              {/* Load film */}
              {cumRap.danhSachPhim?.splice(1,4).map((phim, index) => {
                return <Fragment key={index}>
                  <hr />
                  <div className='my-2'>
                    <div style={{ display: 'flex' }}>
                      <img style={{ height: '150px', width: '100px' }} src={phim.hinhAnh} alt={phim.tenPhim} onError={(e) => { 
                        e.target.onerror = null; e.target.src = 'https://picsum.photos/75/75'}} />
                      <div className='ml-3'>
                        <h1 className='text-xl font-semibold'>{phim.tenPhim}</h1>
                        <div className='grid grid-cols-5 gap-6 '>
                          {phim.lstLichChieuTheoPhim?.slice(1,4).map((lichChieu, index) => {
                            return <NavLink className="bg-yellow-300 hover:bg-yellow-400 hover:text-black px-2 py-1 rounded-md text-black font-semibold" to='/' key={index}>
                              {moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}
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