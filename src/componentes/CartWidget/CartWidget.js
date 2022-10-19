import './style.css';
import carrito from '../../carrito.png';
import { CartContext } from "../../context/CartContext";
import { useContext } from 'react';

const CartWidget = () => {
    const { cart } = useContext(CartContext)
    return (
        <>
            <img className="carritoDeCompra" src={carrito} alt="logo" />
            <span>{cart.length}</span>
        </>
        )
    }

export default CartWidget