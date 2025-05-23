/**
 * Problem: Sleep
 * Diffculty: Esay
 * Link: https://leetcode.com/problems/sleep/
 * @param {number} millis
 * @return {Promise}
 */

async function sleep(millis) {
    return new Promise(resolve => setTimeout(resolve, millis));
}
