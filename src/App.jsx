import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import About from './components/About'
import Projetos from './components/Projetos'
import Apresenta from './components/Apresenta'
import Contato from './components/contato'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Apresenta />
      <About />

      <Projetos />
      <Contato />
      <footer className=" text-white mt- 40px; font-size: 14px;  bg-[#1C2830]">
        © 2025 Guilherme Merces. Todos os direitos reservados.
      </footer>

    </>
  )
}

export default App
