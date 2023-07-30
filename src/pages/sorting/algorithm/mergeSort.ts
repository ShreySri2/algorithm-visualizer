import { ConfigsType } from "../utils/SortingContext.types";

interface Animate {
  bars: number[];
  configs: ConfigsType;
  setBars: React.Dispatch<React.SetStateAction<number[]>>;
}

type AnimateFunc = (animationProps: Animate) => void;

const merge = (
  bars: number[],
  aux: number[],
  animArr: number[][],
  left: number,
  mid: number,
  right: number
) => {
  for (let k = left; k <= right; k++) {
    aux[k] = bars[k];
  }
  let i = left;
  let j = mid + 1;
  for (let k = left; k <= right; k++) {
    if (i > mid) {
      animArr.push([aux[j], k]);
      bars[k] = aux[j++];
    } else if (j > right) {
      animArr.push([aux[i], k]);
      bars[k] = aux[i++];
    } else if (aux[i] <= aux[j]) {
      animArr.push([aux[i], k]);
      bars[k] = aux[i++];
    } else {
      animArr.push([aux[j], k]);
      bars[k] = aux[j++];
    }
  }
};

const divide = (
  bars: number[],
  aux: number[],
  animArr: number[][],
  left: number,
  right: number
) => {
  if (left >= right) return;

  const mid = left + Math.floor((right - left) / 2);
  divide(bars, aux, animArr, left, mid);
  divide(bars, aux, animArr, mid + 1, right);
  merge(bars, aux, animArr, left, mid, right);
};

export const mergeSortAnimation: AnimateFunc = ({ bars, configs, setBars }) => {
  const aux = new Array(bars.length);
  const animArr: number[][] = [];
  divide(bars, aux, animArr, 0, bars.length - 1);

  animArr.forEach(([newHeight, index], idx) => {
    const div = document.getElementById(`${index}`);
    if (!div) return;
    setTimeout(() => {
      div.style.backgroundColor = "#475569";
      div.style.height = `${newHeight / 7}%`;
      setTimeout(() => {
        div.style.backgroundColor = "#1E293B";
        if (idx === animArr.length - 1) {
          setBars(bars);
        }
      }, configs.delay * 2);
    }, configs.delay * idx * 2);
  });
};
