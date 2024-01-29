import { createContext } from "react";


export const CotizadorContext = createContext()


export const CotizadorProvider = ({ children }) => {

    const hola = "Hola react"




    return (
        <CotizadorContext.Provider value={{
            hola,

        }}>
            {children}
        </CotizadorContext.Provider>
    )
} 