import React from 'react'
import glassmorphism from './Detai.module.css'



const Detail = () => {
    return (
        <div className="App" style={{ backgroundImage: ` url(https://picsum.photos/1000)`, display: 'flex' }}>
            
                <div className={`${glassmorphism['box']}`}>
                    <div className='lg:pt-32'>
                    <div className='grid grid-cols-12'>
                        <div className='text-white col-span-4 col-start-4'>
                            <img src="https://picsum.photos/200/350" alt="." />
                        </div>
                    </div>
                </div>
                </div>

            </div>
        
    )
}

export default Detail