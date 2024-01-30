import { createContext, useState } from "react";


export const CotizadorContext = createContext()


export const CotizadorProvider = ({ children }) => {

    const [datos, setDatos] = useState({
        marca: "",
        year: "",
        plan: ""

    })

    const [error, setError] = useState("")


    const handleChageDatos = (e) => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }

    const cotizarSeguro = () => {

        console.log("cotizando..")
    }


    // ─── Crearlo Asi Para Cambiar El Estado Es Una Manera Que Me Gusta con una funcion intermedia ───────────

    return (
        <CotizadorContext.Provider value={{
            handleChageDatos,
            datos,
            error,
            setError,
            cotizarSeguro
        }}>
            {children}
        </CotizadorContext.Provider>
    )
} 