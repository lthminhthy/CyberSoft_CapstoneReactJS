import React, { useEffect } from 'react'
import glassmorphism from './Detai.module.css'
import '../../assets/styles/circle.scss'
import { Tabs } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { SET_FILM_DETAIL } from '../../redux/actions/types/QuanLyRapType';
import { layThongTinLichChieuPhimAction } from '../../redux/actions/QuanLyRapAction';
import moment from 'moment/moment';
import { NavLink } from 'react-router-dom';


const { TabPane } = Tabs;



const Detail = (props) => {

    const phimDetail = useSelector(state => state.QuanLyRapReducer.phimDetail);
    console.log("phimDetail: ", phimDetail);
    console.log("phimDetail: ", phimDetail);
    const params = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(layThongTinLichChieuPhimAction(params.id))


    }, [])



    return (
        <div className="App" style={{ backgroundImage: ` url(https://www.bhdstar.vn/wp-content/themes/bhd/assets/images/movie-details-bg.jpg)`, display: 'flex' }}>

            <div className={`${glassmorphism['box']}`}>
                <div className='lg:pt-32 sm:pt-32 pt-28 '>

                    <div className='grid grid-cols-12'>
                        <div className='text-white col-span-8 col-start-3'>
                            <div className='grid grid-cols-3'>
                                <div className='max-w-sm col-span-1 col-start-1'>
                                    <img className='rounded-lg lg:h-full lg:w-full' src={phimDetail.hinhAnh} alt="." />
                                </div>

                                <div className='ml-8 col-span-2 col-start-2'>
                                    <h1 className='font-semibold text-white lg:text-4xl md:text-2xl sm:text-base text-sm'>{phimDetail.tenPhim}</h1>
                                    <p>Release date: {moment(phimDetail.ngayKhoiChieu).format('DD-MM-YYYY')}</p>
                                    <p className='mt-10'>{phimDetail.moTa}</p>
                                    <div className='flex items-center	'>
                                        <div>Evaluate: </div>
                                        <div className="pacss-wrapper text-black">
                                            <span className="pacss-foreground">
                                                <span className="pacss-number">{phimDetail.danhGia}</span>
                                            </span>
                                            <span className="pacss" />
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>

                    <div className='mt-28'>
                        <div className='container'>
                            <div className='bg-gray-300 bg-opacity-70  rounded-2xl'>
                                <Tabs className='text-white' defaultActiveKey='1' centered>
                                    <TabPane style={{ minHeight: 300 }} tab={<div className=' font-semibold text-yellow-500 hover:text-white'>SHOWTIME</div>} key="1">
                                        <div className='container '>

                                            <div className='lg:mb-20 px-2 py-10'>
                                                <Tabs tabPosition={'left'}>
                                                    {phimDetail.heThongRapChieu?.map((htr, index) => {

                                                        return <TabPane tab={<div className='text-black font-semibold hover:text-yellow-500 justify-center	items-center'><img alt={htr.tenHeThongRap} width={50} height={50} src={htr.logo}></img>{htr.tenHeThongRap}</div>} key={index}   >
                                                            {htr.cumRapChieu?.map((cumRap, index) => {
                                                                return <div className='m-0' key={index}>
                                                                    <div className='my-4 flex flex-row justify-start	items-center'>
                                                                        <img width={50} src={htr.logo} alt={htr.tenHeThongRap} />
                                                                        <div className='ml-3 text-base'>
                                                                            <p className='mb-1'>{cumRap.tenCumRap}</p>
                                                                            <p className='text-xs text-yellow-300'>{cumRap.diaChi}</p>


                                                                        </div>
                                                                    </div>
                                                                    <div className='grid grid-cols-8 gap-10 mb-3'>
                                                                        {cumRap.lichChieuPhim?.slice(0, 10).map((lichChieu, index) => {
                                                                            return <NavLink to='/' key={index} className=' bg-yellow-300 hover:bg-yellow-400 hover:text-black px-2 py-1 rounded-md text-black font-semibold'>
                                                                                {moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}
                                                                            </NavLink>
                                                                        })}

                                                                    </div>
                                                                    <hr />

                                                                </div>
                                                            })}

                                                        </TabPane>
                                                    })}


                                                </Tabs>
                                            </div>
                                        </div>
                                    </TabPane>
                                    <TabPane tab="DETAILS" key="2">DETAILS</TabPane>
                                    <TabPane tab="EVALUATE" key="3">EVALUATE</TabPane>

                                </Tabs>
                            </div>

                        </div>




                    </div>



                </div>
            </div>

        </div>

    )
}

export default Detail