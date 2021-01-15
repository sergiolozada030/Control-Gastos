import Gasto from './Gasto';

const Listado = ({ gastos, eliminarGasto }) => (
    <div className="gastos-realizados">
        <h2>Listado</h2>
        {gastos.map((gasto) => (
            <Gasto key={gasto.id} gasto={gasto} eliminarGasto={eliminarGasto} />
        ))}
    </div>
);

export default Listado;
