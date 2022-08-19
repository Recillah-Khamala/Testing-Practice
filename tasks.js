 const stringLength = string => {
    return string.length
}

const reverseString = string => {
    return string.split("").reverse().join("")
}


const capitalize = string => {
    if (string.length === 0) return (string);
    let char = string[0].toUpperCase();
    return char + string.slice(1);
}

module.exports = {
    stringLength,
    reverseString,
    capitalize
}