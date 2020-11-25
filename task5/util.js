// Rules
//  1.  The input string will always be lower case but maybe empty.
//  2.  If the character in the string is whitespace then pass over it as if it was an empty seat
// Example
// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

/** solution1 */
function mexicanWave(str){ 
    const wave =  [...str]
                .map((c, i) => `${str.slice(0, i)}${c.toUpperCase()}${str.slice(i +  1, str.length)}`)
                .filter(s => /[A-Z]/.test(s))
    return wave;
}

/** Solution 2 */

function charactersIndexes(string) {
    return string.split("").reduce(function(indexes, character, index) {
      if (!/\s/.test(character)) {
        indexes.push(index);
      }
  
      return indexes
    }, []);
  }

  function upperCaseAt(index, string) {
    return string.split("").map(function(character, position) {
      if (position === index) {
        return character.toUpperCase();
      }
  
      return character;
    }).join("");
  }

  
  function wave(input) {
    return charactersIndexes(input).map((index) => upperCaseAt(index, input));
  }
  
module.exports = {
    mexicanWave,
    charactersIndexes,
    upperCaseAt,
    wave
};

