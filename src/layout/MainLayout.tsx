import React, { ReactNode, useContext } from 'react'
import Taost from '../components/toast'
import { TaostContext } from '../context/ToastContext'

function MainLayout({children}:{children:ReactNode}) {
    const {openTaost} = useContext(TaostContext)
  return (
    <div className='relative min-w-screen min-h-screen'>
        <main>{children}</main>
        <Taost message={openTaost.message} type={openTaost.type} open={openTaost.isOpen}/>
        </div>
  )
}

export default MainLayout