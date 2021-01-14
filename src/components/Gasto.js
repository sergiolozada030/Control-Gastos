const Gasto = ({ gasto }) => (
    <li className="gastos">
        <p>
            {gasto.nombreGasto}
            <span className="gasto"> ${gasto.cantidad}</span>
        </p>
    </li>
);

export default Gasto;
