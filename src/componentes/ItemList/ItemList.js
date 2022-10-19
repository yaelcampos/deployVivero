import Item from "../Item/Item";
import './ItemList.css';
import { Link } from 'react-router-dom'

const ItemList = ({ lista }) => {
    const rutaInicial = '../image';
    return (
        <div className="divContenedorCardProductos">
            {
                lista.map((product) => ( 
                    <Link key={product.id}
                    to={'/detail/'+product.id} style={{ textDecoration: 'none'}}
                    >
                        <Item 
                        image={product.image} 
                        title={product.title}
                        price={product.price} 
                        key={product.id}
                        />
                    </Link> 
            ))}
        </div>
    );
};

export default ItemList;