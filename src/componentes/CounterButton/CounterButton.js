import "./style.css"

const Counter = ({stockProductos, stock , setStock}) => {

    const sumar = () => stock <= stockProductos -1 ? setStock(stock + 1) : alert("Alcanzaste el maximo de stock") 
    const restar = () => stock > 0 ? setStock(stock - 1) : alert("Te quedaste sin stock ") 
        
return (
    <>
        <div className="DivContenedorBotones">
            <div className="ContenedorBotones">
                <button onClick={restar}>-</button>
                <h3>{stock}</h3>
                <button onClick={sumar}>+</button>
            </div>
        </div>
    </>
)
}

export default Counter 