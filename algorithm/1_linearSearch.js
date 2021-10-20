const array = [1,2,3,5,10,11,-1,5,12,6,9,88,11,15];

function linearSearch(array, item)
{
    for (let i = 0; array.length >= i; i++) {
        if (array[i] === item)
        {
            return array[i];
        }
    }

    return null;
}

let result = linearSearch(array, -1);
console.log('Result is ', result);
