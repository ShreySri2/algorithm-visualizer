import { useContext } from 'react';
import { BarsContext } from "./utils/SortingContext";
import NavbarSorting from "./components/NavbarSorting";

export default function Sorting() {
  const { bars } = useContext(BarsContext);

  return (
    <div className="h-screen flex flex-col">
      
      <NavbarSorting />

      <div className="flex-grow flex items-end overflow-hidden">
        {bars.map((value, id) => {
          return (
            <div className='flex-1 bg-slate-800 inline-block' key={id} style={{ height: `${value}px` }} id={`${id}`}>
            </div>
          );
        })}
      </div>
    </div>
  );
}
