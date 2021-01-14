import { Fragment } from 'react';
import { revisarPresupuseto } from '../helpers';

const ControlPresupuesto = ({ presupuesto, restante }) => {
    return (
        <Fragment>
            <div className="alert alert-primary">Presupuesto: $ {presupuesto}</div>
            <div className={revisarPresupuseto(presupuesto, restante)}>
                Restante: $ {restante}
            </div>
        </Fragment>
    );
};

export default ControlPresupuesto;
