import { createContext, useState } from "react";
import {
    obtenerDiferenciaYear,
    calcularMarca,
    calcularPlan,
    formatearDinero
} from "../helpers";


export const CotizadorContext = createContext();


export const CotizadorProvider = ({ children }) => {

    const [datos, setDatos] = useState({
        marca: "",
        year: "",
        plan: ""

    });

    const [error, setError] = useState("");
    const [resultado, setResultado] = useState(0)


    const handleChageDatos = (e) => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        });
    };

    const cotizarSeguro = () => {

        let resultado = 2000;

        const diferencia = obtenerDiferenciaYear(datos.year);

        resultado -= ((diferencia * 3) * resultado) / 100;

        resultado *= calcularMarca(datos.marca)

        resultado *= calcularPlan(datos.plan)

        resultado.toFixed(2)

        resultado = formatearDinero(resultado)


        setResultado(resultado)
    };


    // ─── Crearlo Asi Para Cambiar El Estado Es Una Manera Que Me Gusta con una funcion intermedia ───────────

    return (
        <CotizadorContext.Provider value={{
            handleChageDatos,
            datos,
            error,
            setError,
            cotizarSeguro,
            obtenerDiferenciaYear
        }}>
            {children}
        </CotizadorContext.Provider>
    );
}; 