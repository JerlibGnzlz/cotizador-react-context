import { Fragment } from "react";
import { MARCAS, YEARS, PLANES } from "../constants";
import { useCotizador } from "../hooks/useCotizador";
import Error from "./Error";


const Formulario = () => {

    const {
        handleChageDatos,
        datos,
        error,
        setError,
        cotizarSeguro
    } = useCotizador();

    const { marca, year, plan } = datos;

    const handleSubmit = (e) => {

        e.preventDefault();

        if (marca === "" || year === "" || plan === "") {
            setError("Todos los Campos Son Requerido");
            return;
        }
        setError('');

        cotizarSeguro();
    };

    return (
        <>
            {error && <Error />}

            <form onSubmit={handleSubmit}>
                <div className="my-5">
                    <label className="block mb-3 font-bold text-gray-400 uppercase">Marca</label>

                    <select name="marca"
                        className="w-full p-3 bg-white border border-gray-200"
                        onChange={e => handleChageDatos(e)}
                        value={marca}
                    >
                        <option value="">--Selecciona Marca--</option>

                        {MARCAS.map(marca => (
                            <option
                                key={marca.id}
                                value={marca.id}
                            >
                                {marca.nombre}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="my-5">
                    <label className="block mb-3 font-bold text-gray-400 uppercase">Año</label>

                    <select name="year"
                        onChange={e => handleChageDatos(e)}
                        value={year}
                        className="w-full p-3 bg-white border border-gray-200"
                    >
                        <option value="">--Selecciona el año--</option>

                        {YEARS.map(year => (
                            <option
                                key={year}
                                value={year}
                            >
                                {year}
                            </option>
                        ))}
                    </select>
                </div>


                <div className="my-5">
                    <label className="block mb-3 font-bold text-gray-400 uppercase">Planes</label>

                    <div className="flex gap-3 items-center">
                        {PLANES.map(plan => (
                            <Fragment key={plan.id}>
                                <label>{plan.nombre}</label>
                                <input type="radio"
                                    name="plan"
                                    value={plan.id}
                                    onChange={e => handleChageDatos(e)}
                                />
                            </Fragment>
                        ))}
                    </div>
                    <input
                        type="submit"
                        name="cotizar"
                        value="cotizar"

                        className="bg-green-300 hover:bg-green-500 w-full transition-colors text-white cursor-pointer p-3 uppercase font-bold mt-3" />
                </div>
            </form >
        </>
    );
};

export default Formulario;