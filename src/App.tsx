import { useState } from 'react'
import "./App.css"

import logoImg from './assets/logo.png'

function App() {

  return (
    <div className='container'>
      <img 
        src={logoImg} 
        alt="Logo" 
      />

      <h2 className='title'>Categorias</h2>
      <section className='category-area'>
        <button className='category-button'>Motivação</button>
        <button className='category-button'>Bem estar</button>
      </section>

      <button className='button-frase'>Gerar Frase</button>

      <p className='texto-frase'>Alguma Frase vai aparecer aqui!</p>

    </div>
  )
}

export default App
