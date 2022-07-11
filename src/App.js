import logo from './logo.svg';
import './App.css';
import product_section from './products.js';
function App() {
  return (<div className='navBar'>
    <div className='logo'></div>
    <div className='buttons'>Home</div>
    <div className='buttons'>{product_section}</div>
    <div className='buttons'>Cart</div>
    <div className='buttons'>Profile</div>
   </div>);

}

export default App;
