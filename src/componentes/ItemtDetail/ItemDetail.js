import "./ItemDetail.css";
import Counter from "../CounterButton/CounterButton";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from 'react-router-dom';


const ItemDetail = ( { item }) => {
    const { addToCart } = useContext(CartContext);
    const [stock, setStock] = useState(1)

   function onAdd(item) {
        addToCart(item, stock)
   }
   const rutaInicial = '../img/';

    return ( 
        <div className="ContenedoritemDetail">
            <div className="itemDetailImg">
                <img src={rutaInicial + item.image}/>
            </div>
            <div className="itemDetail">
                <h1>{item.title}</h1>
                <h1>{item.description}</h1>
                <h1>${item.price}</h1>
                <Counter stockProductos={item.stock}  stock={stock}  setStock={setStock}/>
                <div className="contenedorBotones">
                    <button className="AgregarCarrito"  onClick={() => onAdd(item)}>
                    <strong>Añadir al carrito</strong>
                    <Link to={'/cart/'} ><button  className="btnCarrito"  >Ir al carrito</button></Link>
                    </button>
                </div>
                <Link className="volver" to={"/"}>Volver</Link>
            </div>
        </div>
    );
};

export default ItemDetail





