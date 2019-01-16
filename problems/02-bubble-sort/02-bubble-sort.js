/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */
function bubbleSort(numArray) {
    let changes= false;
do {
    changes =false;
    for (let i = 0; i < numArray.length; i++) {
        if(numArray[i]>numArray[i+1]){
            let x = numArray[i];
            numArray[i]=numArray[i+1];
            numArray[i+1]=x;
            changes= true;
        }
    }    
} while (changes);
}
let arr = [4,3,2,1,3];
bubbleSort(arr);
console.log(arr);