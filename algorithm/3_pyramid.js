

function buildPyramid(length)
{
    let a = '*';
    let space = ' ';
    for (let i = 1; length >= i; i++)
    {
        console.log(space.repeat(length-i)+a.repeat(2 * i - 1));
    }
}

buildPyramid(8);
