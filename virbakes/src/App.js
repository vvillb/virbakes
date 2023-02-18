import React from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import ContactForm from './components/ContactForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <ProductList />
        <ContactForm />
      </main>
      <footer>
        <p>&copy; 2023 virbakes</p>
      </footer>
    </div>
  );
}

export default App;
