const array = [1,2,3,5,10,11,-1,5,12,6,9,88,11,15];

function selectionSort(array)
{
    for (let i = 0; array.length > i; i++) {
        let minValue = array[i];
        let minIndex = i;
        for (let j = i+1; array.length > j; j++) {
            if (minValue > array[j]) {
                minValue = array[j];
                minIndex = j;
            }
        }

        let temp = array[i];
        array[i] = minValue;
        array[minIndex] = temp;
    }

    return array;
}

let result = selectionSort(array);
console.log('Result is', result);
