import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Film from '../../components/Film/Film'
import HomeCarousel from '../../components/HomeCarousel/HomeCarousel'
import MultipleRows from '../../components/RSlick/MultipleRow'
import { layDanhSachPhimAction } from '../../redux/actions/QuanLyPhimAction'

import HomeMenu from './HomeMenu/HomeMenu'




const Home = () => {
  const { arrPhim } = useSelector(state => state.QuanLyPhimReducer);
  const dispatch = useDispatch()

  useEffect(() => {
    const action = layDanhSachPhimAction()
    dispatch(action)
  }, [])



  return (
    <div>
      <HomeCarousel></HomeCarousel>
      <section className="text-gray-600 body-font">
        <div className=" px-36 py-24 mx-auto">
          <MultipleRows arrPhim={arrPhim}></MultipleRows>

        </div>
      </section>

      <div className='mx-36'>
        <HomeMenu></HomeMenu>
      </div>
    </div>
  )
}

export default Home