import { useCallback, useRef } from "react"
import { useCotizador } from "../hooks/useCotizador"
import { MARCAS, PLANES, YEARS } from "../constants/index"


function Resultado() {

    const { resultado, datos } = useCotizador()

    const { marca, plan, year } = datos

    const [nombreMarcas] = useCallback(MARCAS.filter(m => m.id === (+marca)), [resultado])

    const [planesMarcas] = useCallback(PLANES.filter(m => m.id === (+plan)), [resultado])

    const yearRef = useRef(year);


    if (resultado === 0) return ""

    return (
        <div className="bg-gray-100 text-center font-bold shadow mt-5 p-5">
            <h2 className="text-gray-700 font-black text-3xl">Resumen</h2>
            <p className="my-2">
                <span className="font-bold">Marca: {nombreMarcas.nombre}</span>
            </p>

            <p className="my-2">
                <span className="font-bold">Plan: {planesMarcas.nombre}</span>
            </p>

            <p className="my-2">
                <span className="font-bold">Año del auto: {yearRef.current}</span>
            </p>

            <p className="my-2 text-2xl">
                <span className="font-bold">Total Cotizacion:  {resultado}</span>
            </p>
        </div>
    )
}

export default Resultado