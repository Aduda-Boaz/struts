// Check to see if two provided strings are anagrams of each other.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces,or pactuations.
// Consider capital letters to be same as lower case.
// --- Examples
// anagram('rail safety', 'fairy tales') --> True
// anagram('RAIL! SAFETY!', 'fairy tales') --> True

/* function isAnagram(stringA, stringB) {

    function createCharMap(text) {
        let charMap = {}

        for (let char of text) {
            if (charMap.hasOwnProperty(char)) {
                charMap[char]++
            } else {
                charMap[char] = 1
            }
        }

        return charMap
    }

    if (stringA.length === stringB.length) {
        let stringAMap = createCharMap(stringA)
        let stringBMap = createCharMap(stringB)
        for (let char in stringAMap) {
            if (stringAMap[char] !== stringBMap[char]) {
                return false
            }
        }
        return true
    } else {
        return false
    }
}
console.log(isAnagram('RAIL! SAFETY!', 'fairy tales')); */

function anagram(stringA, stringB) {
    const aCharMap = buildCarMap(stringA);
    const bCharMap = buildCarMap(stringB);

    if (Object.keys(aCharMap).length != Object.keys(bCharMap).length) {
        return false;
    }

    for (let char in aCharMap) {
        if (aCharMap[char] !== bCharMap[char]) {
            return false;
        }
    }
    return true
}

function buildCarMap(str) {
    const charMap = {};

    for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
        charMap[char] = charMap[char] + 1 || 1;
    }
    return charMap;
}
console.log(anagram('rail safety', 'fairy tales'));