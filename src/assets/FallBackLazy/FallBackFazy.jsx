import { LoadingOutlined } from '@ant-design/icons'
import React from 'react'

const FallBackFazy = () => {
    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: "100%", backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 99 }}>
        <div className='pt-5 text-2xl text-white'><LoadingOutlined /></div>
    </div>
    )
}

export default FallBackFazy