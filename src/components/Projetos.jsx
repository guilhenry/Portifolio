import ProjetosCard from "./ProjetosCard"
  
            
const project = [{ 
    id: 1,
    name: 'Live Chat',
    image: '/live.png',
    tecn: 'JAVA - SPRINGBOOT',
    linkc:'https://github.com/guilhenry/live-chat',

  },
   {
    id: 2,
    name: 'Gerador de Currículo',
    image: '/curriculo_demo.gif',
    tecn: 'Kotlin - Adroid Studio',
    linkc:'https://github.com/guilhenry/Criar-curriculo/tree/main',
    
  },
  {
    id: 3,
    name: 'Site de Casamento',
    image: '/casam.png',
    tecn: 'HTML - CSS - JAVASCRIPT',
    links: 'https://site-casamento-alpha.vercel.app/',
    linkc:'https://github.com/guilhenry/Site-Casamento',
  },
  {
    id: 4,
    name: 'Gerador de cpf',
    image: '/cpf.png',
    tecn: 'REACT - CSS - JAVASCRIPT',
    links: 'https://gerador-de-cpf-one.vercel.app/',
    linkc:'https://github.com/guilhenry/Gerador-de-cpf',
  },
  {
    id: 5,
    name: 'Pedra, Papel, tesoura',
    image: '/papeltesoura.png',
    tecn: 'HTML - CSS - JAVASCRIPT',
    links: 'https://pedra-x-papel-x-tesoura.vercel.app/',
    linkc:'https://github.com/guilhenry/Pedra-x-Papel-x-tesoura',
  },
 
  {
    id: 6,
    name: 'API de Produtos – CRUD em Java ',
    image: '/api.jpg',
    tecn: 'JAVA - SPRINGBOOT',
    linkc:'https://github.com/guilhenry/Api-products',
  },
 
]

function Projetos() {
  return (
    <div id="projetos" className="m-[50px]  ">
      <h1 className="text-center">Projetos</h1>
    <div className=" grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-10 m-[40px]  ">
      {project.map(project => (
        <ProjetosCard key={project.id} project ={project} />
      ))}
    </div>
    </div>
  )
}
        
export default Projetos