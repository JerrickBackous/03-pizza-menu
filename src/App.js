import logo from './logo.svg';
import './App.css';
import Header from "./components/Header.js";
import Menu from './components/Menu';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
