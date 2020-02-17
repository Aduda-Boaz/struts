// --- Directions
// Give an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunck([1, 2, 3, 4], 2) --> [[1, 2], [3, 4]]
// chunck([1, 2, 3, 4, 5], 2) --> [[1, 2], [3, 4], [5]]
// chunck([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[1, 2, 3], [4, 5, 6], [7, 8]]
// chunck([1, 2, 3, 4, 5], 4) --> [[1, 2, 3, 4], [5]]
// chunck([1, 2, 3, 4, 5], 10) --> [[1, 2, 3, 4, 5]]

function chunk(array, size) {
    const chunked = [];
    let index = 0;

    while (index < array.length) {
        chunked.push(array.slice(index, size + index));
        index += size;
    }
    return chunked;
}

var data = [1, 2, 3, 4, 5, 6, 7, 8]
data.slice(0, 3)
data.slice(3, 6)
data.slice(6, 9)
console.log(data);

// Another method.

/* function chunk(array, size) {
    const chunked = [];

    for (let element of array) {
        const last = chunked[chuncked.length - 1];

        if (!last || last.length === size) {
            chunked.push([element])
        } else {
            last.push(element)
        }
    }
    return chunked;
} */