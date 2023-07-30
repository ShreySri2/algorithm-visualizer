export type Algo = "merge sort" | "insertion sort" | "quick sort" | "bubble sort" | "selection sort" | "heap sort"

export interface ConfigsType {
    algoType: Algo
    arrayLen: number;
    delay: number;
}

export type ConfigsContext = {
    configs: ConfigsType;
    setConfigs?: React.Dispatch<React.SetStateAction<ConfigsType>>;
    sort: (algotype: Algo) => void
  }

export type Bars ={
    bars: number[];
    setBars?:React.Dispatch<React.SetStateAction<number[]>>
  }
  

export interface Animate{
    newList: number[];
    animaList: number[][];
    configs: ConfigsType;
    setBars: React.Dispatch<React.SetStateAction<number[]>>;
}

export type AnimateFunc = (animationProps: Animate) => void;