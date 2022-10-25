import React from 'react'
import './Film_Flip.css'

export default function Film_flip(props) {
    const { phim } = props;
    return (
        <div className="center">
            <div className="property-card">

                <a href="#">
                    <div className="property-image" style={{
                background: `url(${phim.hinhAnh}), url(https://picsum.photos/1000/200)`, backgroundPosition: 'center', backgroundSize: '100%,100%'}}>
                        <img className="lg:h-48 md:h-36 w-full object-cover object-center opacity-0" style={{ height: '200px' }} src={phim.hinhAnh} alt={phim.tenPhim} />
                    </div></a>
                <div className="property-description border-0">
                <h1 className="title-font text-lg font-medium text-gray-900 h-14">{phim.tenPhim}</h1>
                <div className='buy-ticket '>
                    <button className='bg-yellow-400 p-2 rounded-lg mb-2'>
                    <a className=" text-black inline-flex items-center md:mb-2 lg:mb-0 hover:text-white ">BUY TICKET
                    </a>
                </button>
                </div>
                    
                </div>

            </div>
        </div>



    )
}
