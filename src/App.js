import React from 'react';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
// import Portfolio from './components/Portfolio';
// import Contact from './components/Contact';
import Links from './components/Links';
// import Resume from './components/Resume';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
      </main>
      <Links></Links>
    </div>
  );
}

export default App;
