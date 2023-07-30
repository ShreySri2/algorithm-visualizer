import {useContext} from 'react'
import { ConfigContext, BarsContext } from "../utils/SortingContext"
import { Algo } from '../utils/SortingContext.types'
import resetArray from "../algorithm/algorithm"


export default function NavbarSorting() {

    const onArrayLenChange:React.ChangeEventHandler<HTMLInputElement> = (e) =>{
        if (!setConfigs) return 
        setConfigs((c)=>({...c, arrayLen: +e.target.value*5}))
    }

    const onDelayChange:React.ChangeEventHandler<HTMLInputElement> = (e) =>{
        if (!setConfigs) return
        setConfigs((c)=>({...c, delay: +e.target.value}))
    }

    const onNewArray: React.MouseEventHandler<HTMLButtonElement> = () => {
        const ranBars = resetArray(configs.arrayLen);
        setBars?.(ranBars);

    }

    
    
    const onAlgoChange = (
        
        type:Algo
    )=>
    {
        if (!setConfigs) return
        setConfigs((c)=>({...c, algoType:type}))
    }

    const {sort, configs, setConfigs} = useContext(ConfigContext)
    const {setBars} = useContext(BarsContext)
    
  return (
    
      <nav className='w-screen bg-slate-900 grid grid-flow-row grid-cols-10'>
         <div className='flex items-center w-full justify-center col-span-8'>
            <button className={`text-slate-50 m-2 hover:opacity-50 ${configs.algoType === 'merge sort' ? 'bg-blue-500' : 'bg-slate-600 hover:bg-slate-700 active:bg-slate-800'} rounded px-4 py-2`} onClick={() => onAlgoChange("merge sort")}>Merge sort</button>
            <button className={`text-slate-50 m-2 hover:opacity-50 ${configs.algoType === "insertion sort" ? 'bg-blue-500' : 'bg-slate-600 hover:bg-slate-700 active:bg-slate-800'} rounded px-4 py-2`} onClick={() => onAlgoChange("insertion sort")}> Insertion sort</button>
            <button className={`text-slate-50 m-2 hover:opacity-50 ${configs.algoType === 'heap sort' ? 'bg-blue-500' : 'bg-slate-600 hover:bg-slate-700 active:bg-slate-800'} rounded px-4 py-2`} onClick={() => onAlgoChange("heap sort")} > Heap sort</button>
            <button className={`text-slate-50 m-2 hover:opacity-50 ${configs.algoType === 'quick sort' ? 'bg-blue-500' : 'bg-slate-600 hover:bg-slate-700 active:bg-slate-800'} rounded px-4 py-2`} onClick={() => onAlgoChange("quick sort")} > Quicksort</button>
            <button className={`text-slate-50 m-2 hover:opacity-50 ${configs.algoType === 'bubble sort' ? 'bg-blue-500' : 'bg-slate-600 hover:bg-slate-700 active:bg-slate-800'} rounded px-4 py-2`} onClick={() => onAlgoChange("bubble sort")} >Bubble sort</button> 
            <button className={`text-slate-50 m-2 hover:opacity-50 ${configs.algoType === 'selection sort' ? 'bg-blue-500' : 'bg-slate-600 hover:bg-slate-700 active:bg-slate-800'} rounded px-4 py-2`} onClick={() => onAlgoChange("selection sort")} >Selection sort</button> 
        </div>
        <div className='col-span-'>
            <button className={'text-slate-50 m-2 hover:opacity-50'} onClick={onNewArray}>New Array</button>
            <button className={'text-slate-50 m-2 hover:opacity-50'} onClick={()=>{sort(configs.algoType)}}>Sort! </button>
        </div>
        <div className='col-span-5 flex flex-col items-center w-full pb-3'>
            <label htmlFor="items_amount" className='text-slate-50'>Array length: {configs.arrayLen}</label>
            <input type="range" name='items_amount' id='items_amount' className='' min={1} defaultValue={25} onChange={onArrayLenChange}/>
        </div>
        <div className='col-span-5 flex flex-col items-center w-full pb-3'>
            <label htmlFor="delay" className='text-slate-50'>Delay:{configs.delay}ms</label>
            <input type="range" name='delay' id='delay' min={3} defaultValue={15} onChange={onDelayChange}/>
        </div>

      </nav>
    
  )
}
