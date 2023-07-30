
import { ConfigsType } from "../utils/SortingContext.types";

interface Animate {
  bars: number[];
  configs: ConfigsType;
  setBars: React.Dispatch<React.SetStateAction<number[]>>;
}

type AnimateFunc = (animationProps: Animate) => void;


// Insertion sort
const insertionSort = (list: number[]): [number[], number[][]] => {
    const listCopy = [...list];
    const animList: number[][] = [];
    for (let i = 1; i < listCopy.length; i++) {
      let j = i;
      while (j > 0 && listCopy[j] < listCopy[j - 1]) {
        animList.push([j-1, j])
        let tmp = listCopy[j];
        listCopy[j] = listCopy[j - 1];
        listCopy[j - 1] = tmp;
        j--;
      }
    }
    return [listCopy, animList];
  };


export const insertionSortAnimation:AnimateFunc = ({bars, configs, setBars}) => {
  const [newList, animaList] = insertionSort(bars);
  
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