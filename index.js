
function theBeatlesPlay(arrayofM,arrayofI){
  var arrayNew=[]
  for (let i=0;i<arrayofM.length;i++){
    arrayNew.push(`${arrayofM[i]} plays ${arrayofI[i]}`)

  }
return arrayNew;
}

function johnLennonFacts(arrayFacts){
var i=0
while (i<arrayFacts.length){
  arrayFacts[i]+= ('!!!');
  i++;
}
return arrayFacts;
}

function iLoveTheBeatles(num){
  var love=[];
  var num=0;
  do {
    love.push("I love the Beatles!");
  num++;
}
while (num <= number && num<15);
return love;
}
