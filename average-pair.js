/** given an array of sorted numbers and a target average, returns if there is a combination of two values that average to target
 * INPUT: array, number
 * OUTPUT: boolean
 */

function averagePair(numbers, avg) {

    // two pointers that sum and divide by two
    // update pointer position by result moving up or down

    let left = 0;
    let right = numbers.length - 1;

    if (numbers.length == 0) {
        return false;
    }

    while (left < right) {

        const avgCalc = (numbers[left] + numbers[right]) / 2;

        if (avgCalc === avg) {
            return true;
        } else if (avgCalc > avg) {
            right--;
        } else {
            left++;
        }
    }

    return false;

}
