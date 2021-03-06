import { Fragment, useState } from 'react';
import Error from './Error';

const Pregunta = ({ guardarPresupuesto, guardarRestante, actualizarPregunta }) => {
    // Definir el state

    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);

    // Función que lee el presupuesto
    const definirPresupuesto = (e) => {
        guardarCantidad(parseInt(e.target.value, 10));
    };

    // Submit para definir el presupuesto
    const agregarPresupuesto = (e) => {
        e.preventDefault();

        //validar
        if (cantidad < 1 || isNaN(cantidad)) {
            guardarError(true);
            return;
        }

        //si pasa la validación
        guardarError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        actualizarPregunta(false);
    };

    return (
        <Fragment>
            <h2>¿Ingresa tu presupuesto?</h2>
            {error ? <Error mensaje="El Presupuesto es Incorrecto" /> : null}
            <form onSubmit={agregarPresupuesto}>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ingresa tu presupuesto"
                    onChange={definirPresupuesto}
                />
                <button type="submit" className="button-primary u-full-width">
                    Definir Presupuesto
                </button>
            </form>
        </Fragment>
    );
};

export default Pregunta;
