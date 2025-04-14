/**
 * Problem: Counter
 * Diffculty: Esay
 * Link: https://leetcode.com/problems/counter/
 * @param {*} n 
 * @returns 
 */
var createCounter = function (n) {

    let a = 100;
    return function () {
        return n ++;
    }
}

