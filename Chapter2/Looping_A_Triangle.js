/*
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
It may be useful to know that you can find the length of a string by writing .length after it.
*/

for(i=1; i<=7; i++){
  var poundString = '';
  for(j=1; j<=i; j++){
    poundString += '#';
  }
  console.log(poundString);
}