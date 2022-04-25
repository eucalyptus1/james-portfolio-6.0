import React, { useState } from 'react';
import './App.css';
import './index.css';
import About from './components/About';
import Nav from './components/Nav';
import Project from './components/Project';
import Contact from './components/Contact';
import Links from './components/Links';
import Resume from './components/Resume';

function App() {
  
  const [categories] = useState([
    {About},
    {Project},
    {Contact},
    {Resume}
  ]);

  return (

    <div>
      <Nav></Nav>
      <main>
        <About></About>
        <Project></Project>
        <Contact></Contact>
        <Resume></Resume>
      </main>
      <Links></Links>
    </div>
  );
}

export default App;
