import { useState } from 'react';
import Error from '../components/Error';
import shortid from 'shortid';

const Formulario = ({ guardarGasto, guardaCrearGasto }) => {
    // Definir el state
    const [nombreGasto, actualizarNombre] = useState('');
    const [cantidad, actualizarCantidad] = useState(0);
    const [error, actualizarError] = useState(false);

    // Funcion para guardar gasto
    const agregarGasto = (e) => {
        e.preventDefault();

        // validar
        if (cantidad < 1 || isNaN(cantidad) || nombreGasto.trim() === '') {
            actualizarError(true);
            return;
        }
        actualizarError(false);
        // construir el gasto
        const gasto = {
            nombreGasto,
            cantidad,
            id: shortid.generate(),
        };

        // pasar el gasto al componente principal
        guardarGasto(gasto);
        guardaCrearGasto(true);

        // resetear el form
        actualizarNombre('');
        actualizarCantidad('');
    };

    return (
        <form onSubmit={agregarGasto}>
            <h2>Agrega tus gastos</h2>

            {error ? (
                <Error mensaje="Ambos campos son obligatorios o presupuesto Incorrecto" />
            ) : null}

            <div className="campo">
                <label>Nombre Gasto:</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    value={nombreGasto}
                    onChange={(e) => actualizarNombre(e.target.value)}
                />
                <label>Cantidad Gasto:</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 300"
                    value={cantidad}
                    onChange={(e) => actualizarCantidad(parseInt(e.target.value, 10))}
                />
                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Agregar Gasto"
                />
            </div>
        </form>
    );
};

export default Formulario;
