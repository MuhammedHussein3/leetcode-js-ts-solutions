/**
 * Problem: Counter
 * Diffculty: Esay
 * Link: https://leetcode.com/problems/count-good-triplets/
 * @param arr 
 * @param a 
 * @param b 
 * @param c 
 * @returns 
 */
function countGoodTriplets(arr: number[], a: number, b: number, c: number): number {
    let gTriples: number = 0;

    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            for(let k = j + 1; k < arr.length; k++) {
                if(Math.abs(arr[i] - arr[j]) <= a && Math.abs(arr[j] - arr[k]) <= b && Math.abs(arr[i] - arr[k]) <= c) {
                    gTriples ++;
                }
            }
        }
    }

    return gTriples;
};