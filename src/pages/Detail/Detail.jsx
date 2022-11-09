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
import { useTranslation } from 'react-i18next';


const { TabPane } = Tabs;



const Detail = (props) => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    
    },[])
    const { t, i18n } = useTranslation();

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
                <div className='sm:pt-32 pt-28 '>

                    <div className='grid grid-cols-12'>
                        <div className='text-white sm:col-span-8 col-span-10 sm:col-start-3 col-start-2'>
                            <div className='grid grid-cols-3'>
                                <div className='max-w-sm col-span-1 col-start-1'>
                                    <img className='rounded-lg lg:h-full lg:w-full' src={phimDetail.hinhAnh} alt="." />
                                </div>

                                <div className='sm:ml-8 ml-3 col-span-2 col-start-2'>
                                    <h1 className='font-semibold text-white text-xs sm:text-lg'>{phimDetail.tenPhim}</h1>
                                    <p>{t('Release date')}: {moment(phimDetail.ngayKhoiChieu).format('DD-MM-YYYY')}</p>
                                    <p className='mt-10 text-xs sm:text-lg'>{phimDetail.moTa}</p>
                                    <div className='flex items-center	'>
                                        <div className='text-xs sm:text-lg'>{t('Evaluate')}: </div>
                                        <div className="text-xs sm:text-lg pacss-wrapper text-black">
                                            <span className="pacss-foreground">
                                                <span className="pacss-number text-xs sm:text-lg">{phimDetail.danhGia}</span>
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
                                    <TabPane style={{ minHeight: 300 }} tab={<div className=' font-semibold text-yellow-500 hover:text-white'>{t('SHOWTIME')}</div>} key="1">
                                        <div className='container '>

                                            <div className='lg:mb-20 px-2 py-10'>
                                                <Tabs tabPosition={'left'}>
                                                    {phimDetail.heThongRapChieu?.map((htr, index) => {

                                                        return <TabPane tab={<div className='text-black font-semibold hover:text-yellow-500 justify-center	items-center'><img className='w-10 sm:w-16' alt={htr.tenHeThongRap}  src={htr.logo}></img>{htr.tenHeThongRap}</div>} key={index}   >
                                                            {htr.cumRapChieu?.map((cumRap, index) => {
                                                                return <div className='m-0' key={index}>
                                                                    <div className='my-4 flex flex-row justify-start	items-center'>
                                                                        <img className='w-0 sm:w-16'  src={htr.logo} alt={htr.tenHeThongRap} />
                                                                        <div className='ml-3 text-base'>
                                                                            <p className='mb-1'>{cumRap.tenCumRap}</p>
                                                                            <p className='text-xs text-black'>{cumRap.diaChi}</p>


                                                                        </div>
                                                                    </div>
                                                                    <div className='grid sm:grid-cols-8 grid-cols-3 sm:gap-10 gap-5 mb-3'>
                                                                        {cumRap.lichChieuPhim?.slice(0, 10).map((lichChieu, index) => {
                                                                            return <NavLink to={`/checkout/${lichChieu.maLichChieu}`} key={index} className=' text-yellow-300 hover:bg-yellow-400 hover:text-black px-2 py-1 rounded-md  font-semibold text-xs sm:text-base'>
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
                                    <TabPane className='text-xs sm:text-lg' tab={t('DETAILS')} key="2">{t('DETAILS')}</TabPane>
                                    <TabPane className='text-xs sm:text-lg' tab={t('EVALUATE')} key="3">{t('EVALUATE')}</TabPane>

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