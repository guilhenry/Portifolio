function Header(){

    return(
        <div className="h-[65px]   bg-[#1C2830] flex flex-col items-center md:justify-between md:flex-row p-[10px] ">
            <h2>Guilherme Merces</h2>
            <ul className=" w-[400px] md:w-[600px] h-[40px] flex items-center justify-around">
                <li><a className="link" href="#sobre">Sobre mim</a></li>
                <li><a className="link" href="#projetos">Projetos</a></li>
                <li><a className="link" href="#contato">Fale comigo</a></li>
            </ul>
        </div>
    )
}
export default Header