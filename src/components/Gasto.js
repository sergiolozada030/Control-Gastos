import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { convertiValor } from '../helpers';

const Gasto = ({ gasto, eliminarGasto }) => (
    <li className="gastos">
        <button className="btn-gasto" onClick={() => eliminarGasto(gasto.id)}>
            <FontAwesomeIcon icon={faTimes} style={{ fontSize: '2.3rem' }} />
        </button>
        <p>{gasto.nombreGasto}</p>
        <p>
            <span className="gasto"> ${convertiValor(gasto.cantidad)}</span>
        </p>
    </li>
);

export default Gasto;
