const array = [1,2,3,5,10,11,-1,5,12,6,9,88,11,15];

function selectionSort(array)
{
    for(let i = 0; array.length >= i; i++)
    {
        for (let j = i; array.length >= j; j++) {
            let compareElement = array[j];
            if (array[j] < array[i]) {
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }

    return array;
}

let result = selectionSort(array);
console.log('Result is', result);
