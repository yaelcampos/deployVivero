import logo from '../../plantago.png';
import tarjetas  from '../../tarjetas.jpeg';
import hojasMojadas from '../../hojas_mojadas.jpeg';
import './NavBar.style.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
    <header>
        <nav>
            <div>
                <img className="imageHojas" src={hojasMojadas} alt="logo" />
            </div>
            <div className="navbar-contenedor">
                <div className="navbar-imagen-contenedor">
                    <img className="App-logo" src={logo} alt="logo" />
                </div>
                <div className="navbar-navegador-link">
                    <Link className="nav-link" to={'/'}> 
                        Inicio
                    </Link>
                    <Link className="nav-link"  to={'/categoria/plantas'}>     
                        Plantas
                    </Link>
                    <Link className="nav-link"  to={'/categoria/arboles'}> 
                        Arboles
                    </Link>
                </div>
                <div className="navbar-navegador-contenedor">
                    <CartWidget/>
                </div>
            </div> 
        </nav>
        <div className='parrafoDescuento'>
            <p>15% DE DESCUENTO EN PLANTAS PAGANDO EN EFECTIVO. 3 CUOTAS SIN INTERES CON TARJETA. ENVIO GRATIS EN COMPRAS SUPERIORES A $7900, DENTRO DE CABA.</p>
            <img src={tarjetas} alt="logo" />
        </div>
    </header>    
    );
};

export default NavBar;