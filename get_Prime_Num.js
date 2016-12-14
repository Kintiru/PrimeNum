function getPrime_Num(startNum,endNum) {
  var e;
  var prime_Num = [];
  var not_prime_Num = [];
  for(;startNum =< endNum;startNum++){
    for(var i = 2,i < startNum;i++){
      e = startNum / i;
      if(startNum < 1){
        break;
      }
      else if(startNum === 2){
        console.log('2')
      }
      else if(e === 0){
        not_prime_Num.push(startNum);
      }
      else{
        prime_Num.push(startNum);
      }
    }
  }
  console.log('솟수:\n');

  prime_Num.forEach((item,index) =>{
    if(index < endNum - 1){
      console.log(item + ',');
    }
    else{
      console.log(item);
      break;
    }
  }));

  console.log('합성수:\n');
  not_prime_Num.forEach((item,index) =>{
    if(index < endNum - 1){
      console.log(item + ',');
    }
    else{
      console.log(item);
      break;
    }
  }));
}
