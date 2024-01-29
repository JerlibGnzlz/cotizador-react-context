import { createContext } from "react";


export const CotizadorContext = createContext()


export const CotizadorProvider = ({ children }) => {

    return (
        <CotizadorContext.Provider value={{}}>
            {children}
        </CotizadorContext.Provider>
    )
} 