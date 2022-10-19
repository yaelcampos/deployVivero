import './Footer.css';
import tarjetas  from '../../tarjetas.jpeg';


const Footer = () => {
  return (
    <div className='divContenedorFooter'>
      <hr></hr>
      <div className='divFooter'>
        <div>
          <h1><strong>MAJOR PLANTAGO</strong> 2022 DEVELOP BY <strong>CAMPOS.</strong> DIGITAL & E-COMMERCE SOLUTIONS.</h1>
        </div>
        <div>
          <img src={tarjetas} alt="logo" />
        </div>
        
      </div>
    </div>
  )
}

export default Footer