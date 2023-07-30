import { ConfigsType } from "../utils/SortingContext.types";

interface Animate {
  bars: number[];
  configs: ConfigsType;
  setBars: React.Dispatch<React.SetStateAction<number[]>>;
}

type AnimateFunc = (animationProps: Animate) => void;

const getHeapSortAnims = (items: number[]): [number[], number[][]] => {
  const pq = new MaxHeap(items);
  pq.heapSort();
  return [pq.heap, pq.animArr];
};

class MaxHeap {
  N = 0;
  heap: number[] = [];
  animArr: number[][] = [];

  constructor(arr?: number[]) {
    if (!arr) return;
    const newArr = [...arr];
    this.N = newArr.length;
    this.heap = newArr;
    for (let i = Math.floor(this.N / 2); i >= 0; i--) {
      this.sink(i);
    }
  }

  sink(i: number) {
    while (i * 2 < this.N && this.N > 1) {
      let j = i * 2;
      if (i === 0) j = 1;
      if (j + 1 < this.N && this.heap[j] < this.heap[j + 1]) j++;
      if (this.heap[j] < this.heap[i]) break;
      this.exch(i, j);
      i = j;
    }
  }

  exch(a: number, b: number) {
    this.animArr.push([a, b]);
    const tmp = this.heap[a];
    this.heap[a] = this.heap[b];
    this.heap[b] = tmp;
  }

  heapSort(): void {
    while (this.N > 1) {
      this.exch(--this.N, 0);
      this.sink(0);
    }
  }
}

export const heapSortAnimation: AnimateFunc = ({
  bars,
  configs,
  setBars,
}) => {
  const [newList, animaList] = getHeapSortAnims(bars);

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
          setBars(newList);
        }
      }, configs.delay * 2);
    }, configs.delay * idx * 2);
  });
};
