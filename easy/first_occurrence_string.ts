/**
 * Problem: 28. Find the Index of the First Occurrence in a String
 * Diffculty: Esay
 * Link: https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/submissions/1608260379/
 * @param haystack 
 * @param needle 
 * @returns 
 */
function strStr(haystack: string, needle: string): number {
    for(let i = 0; i < haystack.length; i++) {
        let s: string = haystack.substring(i);
        if(s.startsWith(needle)) {
            return i;
        }
    }

    return -1;
};