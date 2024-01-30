import { ReactNode, createContext, useCallback, useState } from "react";

type ToastType={
    isOpen: boolean,
    message: string,
    type:'success' | 'error' | 'info'
}
type ToastContextType = {
    openTaost:ToastType,
    handleOpenToast:(value:ToastType) => void,
    handleCloseToast:() => void
}
export const TaostContext =createContext<ToastContextType>(null!) 

export const TaostProvider = ({children}:{children: ReactNode})=>{
    const [openTaost, setOpenTaost] = useState<ToastType>({
        isOpen:false,
        message:'',
        type:'info',
    })

    const handleOpenToast =useCallback((value:ToastType)=>{
        setOpenTaost(value)
        setTimeout(()=>handleCloseToast(), 2000)
    },[])

    const handleCloseToast =useCallback(()=>{
        setOpenTaost({
            isOpen:false,
            message:'',
            type:'info',
        })
    },[])

    const obj1 = {name: 'ali'}
    const obj2 = {name: 'ali'}

    console.log(obj1 === obj2);

    return (
        <TaostContext.Provider value={{openTaost,handleCloseToast,handleOpenToast}} >{children}</TaostContext.Provider>
    )
}