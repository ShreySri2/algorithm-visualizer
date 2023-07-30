import { ConfigsType } from "../utils/SortingContext.types";

interface Animate {
  bars: number[];
  configs: ConfigsType;
  setBars: React.Dispatch<React.SetStateAction<number[]>>;
}

type AnimateFunc = (animationProps: Animate) => void;


const bubbleSort = (items:number[]): [number[], number[][]] =>{
    const n = items.length
    const animList:number[][] = []
    for(let i=0;i<n;i++){
        for(let j=0; j<n-i;j++){
            if (items[j]>items[j+1]){
                const tmp = items[j]
                items[j] =items[j+1]
                items[j+1] =tmp
                animList.push([j, j+1])
            }

        }
    }
    return [items, animList]

}


export const bubbleSortAnimation:AnimateFunc = ({bars, configs, setBars}) => {
  const [newList, animaList] =bubbleSort(bars);
  
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