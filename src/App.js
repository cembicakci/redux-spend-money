import Header from './components/Header'
import Money from './components/Money'
import Products from './components/Products'
import Receipt from './components/Receipt'

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Money />
      <Products />
      <Receipt />
    </div>
  );
}

export default App;
