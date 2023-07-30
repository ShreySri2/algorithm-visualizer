import AlgorithmDropdown from "./AlgorithmDropdown"


const NavbarPathfinder = () => {
  return (
    <div>
         <nav className="bg-gray-800 text-white flex justify-between items-center p-4">
      <div className="relative">
        <button className="button">Algorithm</button>
        </div>
      <AlgorithmDropdown/>
      <div className="relative">
        <button className="button">Heuristic</button>
        <div className="dropdown-content absolute hidden bg-white p-2 rounded shadow-md mt-2">
          <a href="#" className="block hover:bg-gray-100 p-2">Manhattan Distance</a>
          <a href="#" className="block hover:bg-gray-100 p-2">Euclidean Distance</a>
          
        </div>
      </div>
      <button className="button">Start</button>
      <button className="button">Clear</button>
    </nav>    
    </div>
  )
}

export default NavbarPathfinder
