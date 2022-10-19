import React from 'react'
import { Carousel } from 'antd';

const contentStyle = {
    height: '300px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

const HomeCarousel = () => {
    return (
        <div>
            <Carousel autoplay style={{}}>
                <div>
                    <div style={contentStyle}>
                        <img src="https://picsum.photos/1000" className='w-full' alt=".." />
                    </div>
                </div>
                <div>
                    <div style={contentStyle}>
                    <img src="https://picsum.photos/1000" className='w-full' alt=".." />
                    </div>
                </div>
                <div>
                    <div style={contentStyle}>
                    <img src="https://picsum.photos/1000" className='w-full' alt=".." />
                    </div>
                </div>
                <div>
                    <div style={contentStyle}>
                    <img src="https://picsum.photos/1000" className='w-full' alt=".." />
                    </div>
                </div>
            </Carousel>
        </div>
    )
}

export default HomeCarousel