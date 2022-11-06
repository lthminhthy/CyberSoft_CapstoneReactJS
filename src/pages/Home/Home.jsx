import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FallBackFazy from '../../assets/FallBackLazy/FallBackFazy'
import HomeCarousel from '../../components/HomeCarousel/HomeCarousel'
import MultipleRow from '../../components/RSlick/MultipleRow'
import { layDanhSachPhimAction } from '../../redux/actions/QuanLyPhimAction'
import { layDanhSachHeThongRapAction } from '../../redux/actions/QuanLyRapAction'

import HomeMenu from './HomeMenu/HomeMenu'




const Home = () => {
  const { arrPhim } = useSelector(state => state.QuanLyPhimReducer);
  const {heThongRap} = useSelector(state => state.QuanLyRapReducer)
  console.log("arrPhim: ", arrPhim);
  const dispatch = useDispatch()

  useEffect(() => {
    const action = layDanhSachPhimAction()
    dispatch(action)
    dispatch(layDanhSachHeThongRapAction())
    
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  })



  return (
    <div>
      <HomeCarousel></HomeCarousel>
      <section className="text-gray-600 body-font">
        <div className=" px-10 py-10 md:px-20 md:py-10 lg:px-36 lg:py-10 mx-auto">
         {arrPhim.length > 0 && <MultipleRow arrPhim={arrPhim}></MultipleRow>}
        </div>
      </section>
      <div className='lg:mx-36 lg:my-16 mx-5 my-5'>
        <HomeMenu heThongRap={heThongRap}></HomeMenu>
        

      </div>
    </div>
  )
}

export default Home