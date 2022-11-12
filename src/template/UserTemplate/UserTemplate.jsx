import React from 'react'
import { Outlet } from 'react-router-dom'

export default function UserTemplate() {
    return (
        <div className='d-flex'>
            <div className='w-50'>
                <img style={{ objectFit: 'cover' }} className='w-100 h-100' src='https://picsum.photos/2000' alt='...' />
            </div>
            <div className='w-50'>
                <div className='h-100 w-50 d-flex justify-content-center align-items-center m-auto' style={{ minHeight: '100vh' }}>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
