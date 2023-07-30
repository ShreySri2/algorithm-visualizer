import { ConfigsType } from "../utils/SortingContext.types";

interface Animate {
  bars: number[];
  configs: ConfigsType;
  setBars: React.Dispatch<React.SetStateAction<number[]>>;
}

type AnimateFunc = (animationProps: Animate) => void;




const selectionSort = (items:number[]) : [number[], number[][]]=>{
    const n = items.length;
    const animList:number[][] = []


    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < n; j++) {
        if (items[j] < items[minIndex]) {
          minIndex = j;
        }
      }
  
      if (minIndex !== i) {
        [items[i], items[minIndex]] = [items[minIndex], items[i]]
        animList.push([i, minIndex])
        
      }
    }
  
    
  
    return [items, animList]

}


export const selectionSortAnimation:AnimateFunc = ({bars, configs, setBars}) => {
    const [newList, animaList] = selectionSort(bars);
    
    animaList.forEach(([first, second], idx) => {
      const div = document.getElementById(`${first}`);
      const div2 = document.getElementById(`${second}`);
      if (!div || !div2) return;
      setTimeout(() => {
        div.style.backgroundColor = "#475569";
        div2.style.backgroundColor = "#475569";
        const divHeight = div.style.height;
        div.style.height = div2.style.height;
        div2.style.height = divHeight;
        setTimeout(() => {
          div.style.backgroundColor = "#1E293B";
          div2.style.backgroundColor = "#1E293B";
          if (idx === animaList.length - 1) {
            setBars(newList)
            
          }
        }, configs.delay * 2);
      }, configs.delay * idx * 2);
    });
  };