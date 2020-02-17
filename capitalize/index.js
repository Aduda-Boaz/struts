// Write a function that accepts a string. The function should capitalize the
// first letter of each word in the string then return the capitalized string
// --- Examples
// capitalize('a short sentence')--> ' A Short Sentence'
// capitalize('a lazy fox')--> ' A Lazy Fox'


// --- Option One

/* function capitalize(str) {
    str = str.split(' ')
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1)
    }
    return str.join(' ');
}
console.log(capitalize("look at me")) */


/* 'a short sentence' ['a', 'short', 'sentence']
    str[0]-- > 'a'
    str[0][0]-- > 'A' + 'A'.substr(1) -- > ''
    str[1]-- > 'short'
    str[1][0]-- > 'S' + 'Short'.substr(1) -- > 'hort'
    str[2]-- > 'sentence'
    str[2][0]-- > 'S' + 'Sentence'.substr(1) -- > 'entence'

    ['A', 'Short', 'Sentence'].join(' ')
    'A Short Sentence' */


// --- Option Two

function capitalize(str) {
    const words = []

    for (let word of str.split(' ')) {
        words.push(word[0].toUpperCase() + word.slice(1))
    }
    return words.join(' ')
}

console.log(capitalize('a short sentence'));