let isEven = a => {
  if(a == 0)
    return true;
  else if(a == 1)
    return false;
  else
    return isEven(a-2);
}

let revisedIsEven = a => {
  if(a == 0)
    return true;
  else if(a == 1)
    return false;
  else
    if(a > 0)
      return revisedIsEven(a-2);
    else if(a < 0)
      return revisedIsEven(a+2);
}