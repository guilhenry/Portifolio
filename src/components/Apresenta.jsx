function Apresenta(){
    return(
        <>
        <div className="flex  items-center flex-col md:flex-row md:justify-center ">
        
            <div className="w-[500px] h-[500px]  mt-[30px] ">
        
                <img src='/minhafoto.jpeg' className="w-[300px] relative z-10 mx-auto max-w-sm fade-edges roundend-full"  />
            </div> 
            <div >
            <h2>Guilherme Mercês</h2>
            <p>Desenvolvedor Front-end / Tecnico em informática </p>
            <a href="../src/assets/arquivos/currículo 1.pdf" download><button className="mt-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 cursor-pointer" >Currículo</button></a>
            </div>
        </div>
        <div className=" h-[50px]  bg-[#6B7280] flex items-center justify-between p-[20px] mt-[30px]  ">
            <h3>HTML</h3>
            <h3>CSS</h3>
            <h3>JAVASCRIPT</h3>
            <h3>JAVA</h3>
            <h3>REACT</h3>
            <h3>KOTLIN</h3>
        </div>
      </>
    )



}
export default Apresenta