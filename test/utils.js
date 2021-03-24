export function isYes(someString) {
    return (someString[0].toLowerCase() === 'y' && someString[1].toLowerCase() === 'e');
}

export function isNo(someString) {
    return (someString[0].toLowerCase() === 'n');
}

