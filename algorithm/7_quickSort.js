const array = [1,2,3,5,10,11,-1,5,12,6,9,88,11,15];

function quickSort(array)
{
    if (array.length <= 1) {
        return array;
    }

    let middleIndex = Math.floor(array.length / 2);
    let greater = [];
    let less = [];

    for (let i = 0; array.length > i; i++) {
        if (i === middleIndex) {
            continue;
        }

        if (array[i] < array[middleIndex]) {
            greater.push(array[i]);
        } else {
            less.push(array[i]);
        }
    }

    return [...quickSort(greater), array[middleIndex], ...quickSort(less)];
}

let result = quickSort(array);
console.log('Result is', result);
