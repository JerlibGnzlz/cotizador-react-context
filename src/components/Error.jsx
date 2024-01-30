import { useCotizador } from "../hooks/useCotizador"


const Error = () => {

    const { error } = useCotizador()
    console.log(error)

    return (
        <div className="text-white font-bold bg-red-900 text-center  text-3xl py-3 border-red-900">
            <p>{error}</p>
        </div>
    )
}

export default Error