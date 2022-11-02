import React from 'react'
import { NavLink } from 'react-router-dom';
import './Film_Flip.css'
import { useTranslation } from 'react-i18next';

export default function Film_flip(props) {
    const { t, i18n } = useTranslation();
    const { phim } = props;
    return (
        <div className="center">
            <div className="property-card">

                <a href="#">
                    <div className="property-image img-card" style={{
                background: `url(${phim.hinhAnh}), url(https://picsum.photos/1000/200)`}}>
                        <img className="lg:h-48 md:h-36 lg:w-full object-cover object-center opacity-0" style={{ height: '200px' }} src={phim.hinhAnh} alt={phim.tenPhim} />
                    </div></a>
                <div className="property-description border-0">
                <h1 className="title-font text-lg font-medium text-gray-900 h-14">{phim.tenPhim}</h1>
                <div className='buy-ticket '>
                    <button className='bg-yellow-400 p-2 rounded-lg mb-2'>
                    <NavLink to={`/detail/${phim.maPhim}`} className=" font-semibold text-black inline-flex items-center md:mb-2 lg:mb-0 hover:text-white ">{t('BUY TICKET')}
                    </NavLink>
                </button>
                </div>
                    
                </div>

            </div>
        </div>



    )
}
