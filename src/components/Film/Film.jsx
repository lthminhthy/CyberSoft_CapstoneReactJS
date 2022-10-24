import React from 'react'

export default function Film(props) {

    const { phim } = props;


    return (
        <div className="mr-2 h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden text-center">
            <div style={{
                background:`url(${phim.hinhAnh}), url(https://picsum.photos/1000/200)`, backgroundPosition:'center', backgroundSize:'100%,100%'
                 }}>

                <img className="lg:h-48 md:h-36 w-full object-cover object-center opacity-0 w-full" style={{height:'200px'}} src={phim.hinhAnh} alt={phim.tenPhim}  />
            </div>
            
            <div className="p-6 pt-2">
                <h1 className="title-font text-lg font-medium text-gray-900 h-14">{phim.tenPhim}</h1>
                <div className='pb-8'>
                    <p className="leading-relaxed mb-3 h-20 ">{phim.moTa.length > 100 ? <span>{phim.moTa.slice(0,100)}...</span> : <span>{phim.moTa}</span> }</p>
                </div>
                
                <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0  ">BUY TICKET
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                    </svg>
                </a>

            </div>
        </div>


    )
}
