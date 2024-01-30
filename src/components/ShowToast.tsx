import React, { useContext } from 'react'
import { TaostContext } from '../context/ToastContext'

function ShowToast() {
    const {handleOpenToast, handleCloseToast} = useContext(TaostContext) 
  return (
    <div className='flex items-center justify-center gap-5 flex-col'>
    <button onClick={()=>handleOpenToast({isOpen:true, message:'Success toast', type:'success'})} className='w-52 border-2 border-green-600 p-4 rounded-md shadow-sm'>open success toast </button>
    <button onClick={()=>handleOpenToast({isOpen:true, message:'Error toast', type:'error'})} className='w-52 border-2 border-red-600 p-4 rounded-md shadow-sm'>open error toast </button>
    <button onClick={()=>handleOpenToast({isOpen:true, message:'Info toast', type:'info'})} className='w-52 border-2 border-blue-600 p-4 rounded-md shadow-sm'>open info toast </button>
    <button onClick={()=>handleCloseToast()} className='w-52 border-2 border-slate-600 p-4 rounded-md shadow-sm'>close toast </button>
    </div>
  )
}

export default ShowToast