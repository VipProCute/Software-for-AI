'use client'
import SearchBox from '@/components/SearchBox'
import React from 'react'

const Header = () => {
    return (
        <div className='grid grid-cols-3 px-5 py-4 border-b'>
            <div></div>
            <div></div>
            <SearchBox></SearchBox>
        </div>
    )
}

export default Header