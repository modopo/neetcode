/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let result = [];

    let generate = (l, r, conc) => {
        console.log(`generate: ${l} ${r} ${conc}`);
        if (conc.length === 2 * n) {
            result.push(conc);
            return;
        }

        if (l < n) {
            generate(l + 1, r, conc + "(");
        }

        if (r < l) {
            generate(l, r + 1, conc + ")")
        }
    }

    generate(0, 0, '');

    return result;

};

console.log(generateParenthesis(2
    ));