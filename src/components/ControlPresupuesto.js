import { Fragment } from 'react';
import { revisarPresupuseto, convertiValor } from '../helpers';

const ControlPresupuesto = ({ presupuesto, restante }) => {
    return (
        <Fragment>
            <div className="alert alert-primary">
                Presupuesto: $ {convertiValor(presupuesto)}
            </div>
            <div className={revisarPresupuseto(presupuesto, restante)}>
                Restante: $ {convertiValor(restante)}
            </div>
        </Fragment>
    );
};

export default ControlPresupuesto;
