import { createContext, useState } from "react";


export const CotizadorContext = createContext()


export const CotizadorProvider = ({ children }) => {



    const [modal, setModal] = useState(false)


    // ─── Crearlo Asi Para Cambiar El Estado Es Una Manera Que Me Gusta con una funcion intermedia ───────────


    const cambiarModal = () => {
        setModal(!modal)
    }

    // ─── Crearlo Asi Para Cambiar El Estado Es Una Manera Que Me Gusta ───────────
    return (
        <CotizadorContext.Provider value={{
            modal,
            cambiarModal
        }}>
            {children}
        </CotizadorContext.Provider>
    )
} 