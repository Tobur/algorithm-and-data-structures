const array = [1,2,3,4,5,6,7,8,9,10];

function binarySearch(array, item)
{
    let middleIndex = Math.floor(array.length/2);

    if (array[middleIndex] === item) {
        return item;
    }

    if (middleIndex === 0) {
        return null;
    }

    if (array[middleIndex] > item) {
        let rightSide = array.slice(0, middleIndex);

        return binarySearch(rightSide, item);
    } else {
        let leftSide = array.slice(middleIndex, array.length);

        return binarySearch(leftSide, item);
    }
}

let result = binarySearch(array, 2);
console.log('Result is ', result);
