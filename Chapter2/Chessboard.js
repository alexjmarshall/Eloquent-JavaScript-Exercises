let chessboard='';
let size=8;
for(r=1;r<=size;r++){
  for(c=1;c<=size;c++){//size=size+2?
    if(r%2!=0 && c%2==0 || r%2==0 && c%2!=0)
      chessboard+='#';
    else
      chessboard+=' ';
  }
  chessboard+='\n';
}
console.log(chessboard);