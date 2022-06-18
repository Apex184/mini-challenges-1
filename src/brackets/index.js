/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */

  function isValid(str) {
    let obj = {
        "(": ")",
        "[": "]",
        "{": "}",
      },
      stack = [];
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "(" || str[i] === "{" || str[i] === "[") {
        stack.push(str[i]);
      } else if (str[i] !== obj[stack.pop()]) {
        return 'invalid';
      }
    }
    return stack.length > 0 ? 'invalid' : 'valid';
  }

  console.log(isValid("()[]{}"));

module.exports = isValid;
