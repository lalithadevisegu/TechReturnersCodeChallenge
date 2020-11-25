// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
function pigLatin(str){
    // You code here!
    const arr = str.split(" ");
    //console.log(`str ${arr}`);
    const result = arr.map(word => {
        //console.log(`${word.substr(1)}`)
        return `${word.substr(1)}${word.substr(0, 1)}ay`
      })
    return result;
}

module.exports = {
    pigLatin
};