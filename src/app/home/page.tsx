'use client'
import React from 'react'
import MyHome from '../Components/HomeComponents/MyHome'
import { ItemProvider } from '../Context/ItemContext'
import { SettingProvider } from '../Context/GlobalContext'
const page = () => {
  return (
    <div className=''>
      <SettingProvider>
        <ItemProvider>
          <MyHome />
        </ItemProvider>
      </SettingProvider>
    </div>
  )
}

export default page