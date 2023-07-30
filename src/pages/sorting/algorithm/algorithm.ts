//This file stores all the algorithm that are used in different sorting algorithm implementation

//this function takes 2 arguments min and max and generate a random number between min and max
function randomIntFromInterval(min:number,max:number)
{
    return Math.floor( Math.random()*  ( max - min + 1 ) + min );
}

//this function fills an empty array with 100 elements and the element are any random number between min and max

export default function resetArray(arrayLen:number){
    const array = []
    for(let i=0; i<arrayLen; i++){
        array.push(randomIntFromInterval(5, .65*window.screen.height))
    }
    return array
}


