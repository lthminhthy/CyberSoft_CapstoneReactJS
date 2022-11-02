import React, { Component } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { SET_COMING, SET_LISTFILM, SET_SHOWING } from "../../redux/actions/types/QuanLyPhimType";
// import Film from "../Film/Film";
import Film_flip from "../Film/Film_flip";
import styleSlick from './MultipleRowSlick.module.css'

import { useTranslation } from 'react-i18next';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick['slick-prev']}`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick['slick-prev']}`}
      style={{ ...style, display: "block", left: '-50px' }}
      onClick={onClick}
    />
  );
}




const MultipleRow = (props) => { 
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch()
  const {dangChieu, sapChieu} = useSelector(state => state.QuanLyPhimReducer)

  const renderPhims = () => {
    return props.arrPhim.map((item, index) => {
      return <div className={`${styleSlick['width-item']}`} key={index}>
        {/* <Film phim={item}></Film> */}
        <Film_flip phim={item}></Film_flip>
      </div>
    })
  }

  let activeShowing = dangChieu === true ? 'active_Film':'non-active_Film' ;
  
  let activeComing = sapChieu === true ? 'active_Film' : 'non-active_Film';
  

    const settings = {
      className: "center variable-width",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 4,
      speed: 500,
      rows: 1,
      slidesPerRow: 2,
      variableWidth: true,
      nextArrow: <SampleNextArrow></SampleNextArrow>,
      prevArrow: <SamplePrevArrow></SamplePrevArrow>,
      responsive: [
        {
            breakpoint: 1247,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 1190,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 885,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 1
            }
        },
        {
            breakpoint: 470,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ],

    };
    return (
      <div>
        <div className="flex divide-x-2 rounded divide-gray-700">
          <button type="button" className={`${styleSlick[activeShowing]} px-3 py-1 font-semibold `} onClick={() => {
            const action = {type: SET_SHOWING}
            dispatch(action)
          }}>{t('Now Showing')}</button>
          <button type="button" className={`${styleSlick[activeComing]} px-3 py-1 font-semibold text-black`} onClick={() => {
            const action = {type: SET_COMING}
            dispatch(action)
          }}>{t('Coming Soon')}</button>
        </div>
        <Slider {...settings } >
          {renderPhims()}
        </Slider>
      </div>
    );
  }


export default MultipleRow




