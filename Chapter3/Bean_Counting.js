/*
You can get the Nth character, or letter, from a string by writing "string"[N]. The returned value will be a string containing only one character (for example, "b"). The first character has position 0, which causes the last one to be found at position string.length - 1. In other words, a two-character string has length 2, and its characters have positions 0 and 1.

Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the string.

Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.
*/

let countBs = string => {
  let count = (numBs, inString) => {
    if(inString == string.length)
      return numBs;
    else if(string[inString] == "B")
      return count(numBs+1, inString+1);
    else
      return count(numBs, inString+1);
  }
  return count(0,0);
}

let countChar = (string, char) => {
  let count = (numChars, inString) => {
    if(inString == string.length)
      return numChars;
    else if(string[inString] == char)
      return count(numChars+1, inString+1);
    else
      return count(numChars, inString+1);
  }
  return count(0,0);
}

let countBs = (string) => countChar(string, "B")