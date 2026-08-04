/**
 * @param {number} n
 * @returns {number}
 */

class Solution {
    factorial(n) {
        // code here
        
        let fact = 1;
        for(let i = 1; i <= n ; i++){
            fact = fact*i;
        }
        return fact;
    }
}
