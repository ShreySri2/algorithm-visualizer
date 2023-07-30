import { ConfigsType } from "../utils/SortingContext.types";

interface Animate {
  bars: number[];
  configs: ConfigsType;
  setBars: React.Dispatch<React.SetStateAction<number[]>>;
}

type AnimateFunc = (animationProps: Animate) => void;




const getQuickSortAnims = (items: number[]): [number[], number[][]] => {
    const listCopy = [...items];
    const animList: number[][] = [];
    partition(listCopy, animList, 0, listCopy.length - 1);
    return [listCopy, animList];
  };
  
  const partition = (
    listCopy: number[],
    animList: number[][],
    left: number,
    right: number
  ) => {
    if (left >= right) return;
    let lt = left;
    let i = left;
    let gt = right;
    const v = listCopy[left];
  
    while (i <= gt) {
      if (listCopy[i] < v) exch(listCopy, animList, i++, lt++);
      else if (listCopy[i] > v) exch(listCopy, animList, i, gt--);
      else i++;
    }
  
    partition(listCopy, animList, left, lt - 1);
    partition(listCopy, animList, gt + 1, right);
  };
  
  const exch = (
    listCopy: number[],
    animlistCopy: number[][],
    a: number,
    b: number
  ) => {
    animlistCopy.push([a, b]);
    const tmp = listCopy[a];
    listCopy[a] = listCopy[b];
    listCopy[b] = tmp;
  };

  export const quickSortAnimation:AnimateFunc = ({bars, configs, setBars}) => {
    const [newList, animaList] = getQuickSortAnims(bars);
    
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