import React, { Component } from "react";
import Slider from "react-slick";
import Film from "../Film/Film";
import styleSlick from './MultipleRowSlick.module.css'

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} ${styleSlick['slick-prev']}`}
        style={{ ...style, display: "block"}}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
      className={`${className} ${styleSlick['slick-prev']}`}
        style={{ ...style, display: "block", left: '-50px'  }}
        onClick={onClick}
      />
    );
  }





export default class MultipleRows extends Component {

    renderPhims = () => {
        return this.props.arrPhim.map((item, index) => {
            return <div className={`${styleSlick['width-item']}`} key={index}>
                <Film phim={item}></Film>
            </div>
        })
    }


    render() {
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
        return (
            <div>
                <h2>Multiple Rows</h2>
                <Slider {...settings}>
                    {this.renderPhims()}
                    {this.renderPhims()}
                    {this.renderPhims()}
                    {this.renderPhims()}
                    {this.renderPhims()}
                    {this.renderPhims()}
                    {this.renderPhims()}
                    {this.renderPhims()}
                    {this.renderPhims()}
                    {this.renderPhims()}
                    

                </Slider>
            </div>
        );
    }
}