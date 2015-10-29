function drawLot(){
  var e;
  e = Math.random();
  if(e < 0.3){
    return "あたり";
  } else{
    return "はずれ"
  }
}
