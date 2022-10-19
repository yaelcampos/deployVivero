import { useContext } from "react";
import './Cart.css';
import pedidoCompletado from "../../pedidoCompletado.JPG";
import carritoVacio from "./carritoVacio.jpg";
import { CartContext } from "../../context/CartContext";
import {Link} from 'react-router-dom';
import moment from 'moment';
import { getFirestore, collection , addDoc} from "firebase/firestore";


const Cart = () => {
        const { cart, removeItem } = useContext(CartContext);
        const rutaInicial = '../img/';

        const createOrder = () => {
            const db = getFirestore();
            const order = {
                buyer: {
                    name:'Yael',
                    phone: '673567',
                    email: 'blabla@test.com'
                },
                items: cart, 
                total: cart.reduce((valorPasado, valorActual) => valorPasado + valorActual.price 
                    * valorActual.cantidad , 0),
                date: moment().format('DD/MM/YYYY, h:mm:ss a'),
            };
            const query = collection(db, 'orders');
            addDoc(query, order)  
            .then(({id}) => {
                alert(`Compra exitosa `)
            })
            .catch(() => alert('No pudiste generar tu compra, intentalo más tarde'))
        }

    return (
        <div className="DivcontenedorCarrito">
            <img className="" src={pedidoCompletado}  />
            <div className="contenedorCarrito">
                {cart.length  === 0 ? (
                    <>
                        <img className="" src={carritoVacio} alt="carrito de compras vacio" />
                        <h5>Tu carrito está vacío </h5> 
                        <p><strong>Antes de finalizar tu compra debes agregar al menos un producto a tu carro</strong></p>
                        <Link className="volverAcomprar" to={'/'}> Volver a la tienda </Link> 
                    </> 
                    ) : (<>
                    {cart.map((item) => (  
                    <div key={item.id}>
                        <img className="imagenCarrito" src={rutaInicial + item.image} alt={item.title}/>
                        <h3>{item.title}</h3>
                        <p>Precio : ${item.price}</p>
                        <p>Cantidad :{item.cantidad}</p>
                        <p>Total a pagar: $ {item.price * item.cantidad}</p>
                        <div className="botonesCarritos">
                            <button className="removeItem" onClick={() => removeItem(item.id)}> Eliminar productos</button>
                        </div>
                    </div>
                    ))}
                        <div className="pisoCarrito">
                            <button  className="btnCrearOrden" onClick={createOrder}>Finalizar tu compra</button>
                            <Link className="volverAcomprar" to={'/'}> Volver  </Link> 
                        </div>    
                    </>
                )}
            </div>
    </div>);
};

export default Cart