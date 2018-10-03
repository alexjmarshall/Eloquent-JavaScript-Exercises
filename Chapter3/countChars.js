let countBs = string => {
  let count = (numBs,inString) => {
    if(inString == string.length)
      return numBs;
    else if(string[inString] == "B")
      return count(numBs+1,inString+1);
    else
      return count(numBs,inString+1);
  }
  return count(0,0);
}

//genericize countBs as countChar,
//  then define countBs as a closure of countChar

let countChar = (string, char) => {
  let count = (numChars,inString) => {
    if(inString == string.length)
      return numChars;
    else if(string[inString] == char)
      return count(numChars+1,inString+1);
    else
      return count(numChars,inString+1);
  }
  return count(0,0);
}

let countBs = (string) => countChar(string,"B")