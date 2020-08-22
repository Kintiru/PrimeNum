function getPrime_Num(startNum,endNum) {
  var checkP;
  try{
    if(startNum > endNum){ throw 'err1'}

    if(isNaN(startNum) === true) {throw 'err2'}

    if(isNaN(endNum) === true) {throw 'err3'}

    if(startNum < 2){throw 'err4'}
  }
  catch(e){
    if(e == 'err1') {return console.log('에러: 끝나는 숫자가 시작숫자보다 클 수 없습니다..');}

    if(e == 'err2') {return console.log('에러: 시작숫자가 숫자가 아닙니다!');}

    if(e == 'err3') {return console.log('에러: 끝나는 숫자가 숫자가 아닙니다!');}

    if(e == 'err4') {startNum = 2;}
  }
  
  for(;startNum <= endNum;startNum++){
  var primeplus = 2;
    for(var i = 2;i < startNum;i++){
      checkP = startNum % i;
      if(startNum < 2){
        break;
      }
      else if(startNum === 2){
        console.log('2')
        break;
      }
      else if(checkP === 0){
        break;
      }
      else if (checkP > 0) {
        primeplus++;
        break;
      }
    }
    if(primeplus == startNum) {
      console.log(startNum);
    }
  }
}
