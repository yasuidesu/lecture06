function pickFortuneShip(){
  var e;
  e = Math.randdom();
  if(e < 0.5){
    return "大吉";
  }else{
    if(e < 0.7){
      return "中吉";
    }else{
      if(e< 0.9){
        return "吉";
      }else{
        if(e< 0.97){
          return "凶";
        }else{
          return "大凶";
        }
      }
    }
  }
}
