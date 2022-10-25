import React, { Component, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import Slider from "react-slick";
import { SET_COMING, SET_LISTFILM, SET_SHOWING } from "../../redux/actions/types/QuanLyPhimType";
// import Film from "../Film/Film";
import Film_flip from "../Film/Film_flip";
import styleSlick from './MultipleRowSlick.module.css'

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
  console.log("props.arrPhim: ", props.arrPhim);

  const [phim, setPhim] = useState(props.arrPhim)
  function changeListPhim(params) {
    let arrPhim = [];
    if (params === SET_LISTFILM) {
      arrPhim = props.arrPhim
    } else if (params === SET_SHOWING) {
      arrPhim = props.arrPhim.filter(film => film.dangChieu === true)
    } else {
      arrPhim = props.arrPhim.filter(film => film.sapChieu === true)
    }
    setPhim(arrPhim);


  }
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
  };
  const renderPhims = useMemo(() => phim.map((item, index) => 
  <div className={`${styleSlick['width-item']}`} key={index}>
       <Film_flip phim={item}></Film_flip>
     </div>
   ), [phim,props.arrPhim])
  return (
    <div>
      <div className="flex divide-x-2 rounded divide-gray-700">
        <button type="button" className=" px-3 py-1 font-semibold text-yellow-400" onClick={() => {
          changeListPhim(SET_LISTFILM)
        }}>All</button>
        <button type="button" className="active:bg-yellow-400 px-3 py-1 font-semibold text-black" onClick={() => {
          changeListPhim(SET_SHOWING)
        }}>Now Showing</button>
        <button type="button" className="active:bg-yellow-400 px-3 py-1 font-semibold text-black " onClick={() => {
          changeListPhim(SET_COMING)
        }}>Coming Soon</button>
      </div>
      <Slider {...settings}>
        {renderPhims}
      </Slider>
    </div>
  );
}


export default MultipleRow




