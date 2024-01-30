import React from 'react'

function Taost({message='taost', type='info', open=false}:{message?:string, type?:'success' | 'error' | 'info', open?:boolean}) {
  return (
    <div className={`absolute top-2 right-2 overflow-hidden border-2 rounded-md p-3 shadow-sm w-64 max-w-sm ${open ? 'opacity-100' : 'opacity-0'} ${type === 'success' ? 'border-green-500/50' : type === 'error' ? 'border-red-500/50': 'border-blue-500/50'}`}>
        {message}
        <div className={`w-[100%] h-1 absolute bottom-0 left-0 right-0 transform  transition-transform duration-[2000ms] ease-in-out ${open ? 'translate-x-0' : '-translate-x-full'} ${type === 'success' ? 'bg-green-500 ' : type === 'error' ? 'bg-red-500': 'bg-blue-500'}`} />
        </div>
  )
}

export default Taost