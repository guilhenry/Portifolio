function ProjetosCard({ project }) {
  return (
    <div className="bg-[#1C2830] p-4 rounded-lg shadow-md flex flex-col items-center shadow-[0_10px_25px_rgba(0,0,0,0.2),0_5px_10px_rgba(0,0,0,0.1)]">
      <h2 className="text-lg font-semibold m-2" >{project.name}</h2>
      <img src={project.image} alt={project.name} className=" h-[200px] object-cover mb-4 rounded mt-4" />
      
      <h3 className="text-lg font-semibold m-2">{project.tecn}</h3>
      <div className="w-[300px] flex justify-around flex-1">
        <a href={project.links}className="m-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer"  >
          ver
        </a>
        <a href={project.linkc}className="m-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer" >
          codigo
        </a>
      </div>
    </div>
  )
}
export default ProjetosCard