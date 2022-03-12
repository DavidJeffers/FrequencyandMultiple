
/** Checks if two given integers have the same frequency of numbers
 * @param {integer, integer}
 * @returns {boolean}
 */

function sameFrequency(num1, num2) {

    let firstNumFreq = frequencyCounter(num1);

    let secondNumFreq = frequencyCounter(num2);

    for (let number in firstNumFreq) {
        if (firstNumFreq.get(number)) {
            if (firstNumFreq.get(number) != secondNumFreq.get(number)) {
                return false;
            }
        }
    }

    return true;

}

function frequencyCounter(num) {
    numString = num.toString();
    const numberFrequency = new Map();
    for (let currentNum of numString) {
        let numCount = numberFrequency.get(currentNum) || 0;
        numberFrequency.set(currentNum, numCount + 1);
    }
    return numberFrequency;
}