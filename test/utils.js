export function isYes(someString) {
    if (someString[0].toLowerCase() === 'y' && someString[1].toLowerCase() === 'e') {
        return true;
    } else {
        return false;
    }
}

export function isNo(someString) {
    if (someString[0].toLowerCase() === 'n') {
        return true;
    } 
}

// export function isYes(someString) {
    
//     return someString[0].toLowerCase() === 'y';
// }