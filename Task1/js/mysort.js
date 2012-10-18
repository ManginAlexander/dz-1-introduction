/*global alert: true*/
/**
 * Sort array, using Bubble's method
 *
 * @param {Array} inputArray - array, which will sort.
 * @return {Array} The sorted array
 */
function bubbleSort(inputArray) {
    "use strict";
    if (!((typeof (inputArray) === 'object') && (inputArray instanceof Array))) {
        throw "You get me not inputArrayay";
    }
    var i = 0, j = 0, temp;
    for (i = 0; i < inputArray.length; i += 1) {
        for (j = 0; j < inputArray.length; j += 1) {
            if (inputArray[i] < inputArray[j]) {
                temp = inputArray[j];
                inputArray[j] = inputArray[i];
                inputArray[i] = temp;
            }
        }
    }
    return inputArray;
}