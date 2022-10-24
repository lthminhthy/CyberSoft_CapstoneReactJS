import React, { useEffect } from 'react'
import { Carousel } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getCarouselAction } from '../../redux/actions/CarouselAction';
import './HomeCarousel.css'



const HomeCarousel = () => {
    const contentStyle = {
        maxWidth: '100%',
        height: '600px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        // backgroundPosition: 'center',
        // backgroundSize: '100%',
        // backgroundRepeat: 'no-repeat',
        
    };


    const { arrImg } = useSelector(state => state.CarouselReducer)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCarouselAction());
    },[])

    

    const renderCarousel = () => {
        return arrImg.map((item, index) => {
            return  <div key={index}>
                    <div style={{...contentStyle, // backgroundImage: `url(${item.hinhAnh})` }}> 
                    }}>
                        <img src={item.hinhAnh} className='w-full opacity-1' alt={item.hinhAnh} />
                    </div>
                </div>
        })
    }
    

    return (
        <div>
            <Carousel autoplay style={{}}>
               {renderCarousel()}
                

            </Carousel>
        </div>
    )
}

export default HomeCarousel