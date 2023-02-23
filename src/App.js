import logo from './logo.svg';
import './App.css';

import './hojas_estilos/Testimonio.css';
import { Testimonio } from './componenetes/Testimonio.jsx'

function App() {
  return (
    <div className="App">
      <div className='App__contenedor__principal'>
        <h1 className='App__contenedor__principal__titulo'>
        React Testimonio
        </h1>
        <Testimonio />
      </div>
      
    </div>
  );
}

export default App;
