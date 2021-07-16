import logo from '../assets/hulk.png';
import './header.css';

function App() {
  return (
    <header className="header">
      <img src={logo} alt="logo" />
      <nav>
        <a href="/">Nosso site</a>
        <a href="/">Ofertas</a>
      </nav>
      
    </header>
  );
}

export default App;
