
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './componentes/NavBar/NavBar'; 
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import Footer from './componentes/Footer/Footer';
import { CartProvider }  from './context/CartProvider';
import  Cart  from './componentes/Cart/Cart';


function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="categoria/:categoryName" element={<ItemListContainer/>} />
          <Route path="cart" element={<Cart/>} />
          <Route path="/detail/:id" element={<ItemDetailContainer/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
