import "./item.css"

const rutaInicial = '../img/';

const Item = ({ title, price, image }) => {
    return (
    <div>
        <div className="divCardProductos">
            <h2>{title}</h2>
            <img width={'200px'} src={rutaInicial + image} alt={title}/>
            <h3>Precio:{price}</h3>
        </div>
        
    </div>
    );
};

export default Item;