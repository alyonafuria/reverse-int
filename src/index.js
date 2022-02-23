module.exports = function reverse (n) {
    let reversedArrayNumber = Math.abs(n).toString().split('').reverse();
    return ~~reversedArrayNumber.join('');
}
