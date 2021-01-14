import { useEffect, useState } from 'react';
import Formulario from './components/Formulario';
import Pregunta from './components/Pregunta';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';

function App() {
    // Definir el state
    const [presupuesto, guardarPresupuesto] = useState(0);
    const [restante, guardarRestante] = useState(0);
    const [mostrarPregunta, actualizarPregunta] = useState(true);
    const [gastos, guardarGastos] = useState([]);
    const [gasto, guardarGasto] = useState({});
    const [crearGasto, guardaCrearGasto] = useState(false);

    // useEffect que actuliza el restante

    useEffect(() => {
        // Agrega el nuevo presupuesto
        if (crearGasto) {
            guardarGastos([...gastos, gasto]);
        }

        // resta el presupuesto
        const presupuestoRestante = restante - gasto.cantidad;
        guardarRestante(presupuestoRestante);

        // resetear a false
        guardaCrearGasto(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [gasto]);

    return (
        <div className="container">
            <header>
                <h1>Control De Gastos</h1>
                <div className="contenido-principal contenido">
                    {mostrarPregunta ? (
                        <Pregunta
                            guardarPresupuesto={guardarPresupuesto}
                            guardarRestante={guardarRestante}
                            actualizarPregunta={actualizarPregunta}
                        />
                    ) : (
                        <div className="row">
                            <div className="one-half column">
                                <Formulario
                                    guardarGasto={guardarGasto}
                                    guardaCrearGasto={guardaCrearGasto}
                                />
                            </div>

                            <div className="one-half column">
                                <Listado gastos={gastos} />
                                <ControlPresupuesto
                                    presupuesto={presupuesto}
                                    restante={restante}
                                />
                            </div>
                        </div>
                    )}
                </div>
            </header>
        </div>
    );
}

export default App;
