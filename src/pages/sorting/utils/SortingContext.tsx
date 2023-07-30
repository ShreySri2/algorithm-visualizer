import React, { createContext, useState, useEffect } from "react";

import { Algo, ConfigsType, ConfigsContext, Bars } from "./SortingContext.types";


import resetArray from "../algorithm/algorithm";
import { insertionSortAnimation } from "../algorithm/insertionSort";
import { selectionSortAnimation } from "../algorithm/selectionSort";
import { bubbleSortAnimation } from "../algorithm/bubbleSort";
import { mergeSortAnimation } from "../algorithm/mergeSort";
import { quickSortAnimation } from "../algorithm/quickSort";
import { heapSortAnimation } from "../algorithm/heapSort";

interface Props {
  children: React.ReactNode;
}


const defaultVals: ConfigsType = {
  algoType: "merge sort",
  arrayLen: 25,
  delay: 15,
};


export const ConfigContext = createContext<ConfigsContext>({
  configs: defaultVals,
  sort: () => {}
});




export const BarsContext = createContext<Bars>({
  bars: []

})

const SortingContext: React.FC<Props> = ({ children }) => {
  const [configs, setConfigs] = useState<ConfigsType>(defaultVals);
  const [bars, setBars] = useState<number[]>([])

  useEffect(()=>{    
    const ranBars = resetArray(configs.arrayLen);
    setBars(ranBars)
    console.log(bars)
  }, [configs.arrayLen])
  
  const sort = (algotype:Algo) =>{
    if (algotype === "insertion sort"){
      console.log("working insertion sort")
      insertionSortAnimation({bars, configs, setBars})
    }
    if (algotype === "merge sort"){
      console.log('mergesort working')
      mergeSortAnimation({bars, configs, setBars})
    }
    if (algotype === "selection sort"){
      selectionSortAnimation({bars, configs, setBars})
    }
    if (algotype === "bubble sort"){
      bubbleSortAnimation({bars, configs, setBars})
    }
    if (algotype === "quick sort"){
      quickSortAnimation({bars, configs, setBars})
    }
    if (algotype === "heap sort"){
      heapSortAnimation({bars, configs, setBars})
    }    
  }

  return (
    <BarsContext.Provider value={{bars, setBars}}>
    <ConfigContext.Provider value={{ sort, configs, setConfigs }}>
      {children}
    </ConfigContext.Provider>
    </BarsContext.Provider>
  );
};

export default SortingContext;
