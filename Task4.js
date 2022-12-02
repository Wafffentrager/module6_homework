const sum = function(a,b){
  let act = a;
  let inter = setInterval(function(){
    console.log(act);
    if(act == b){
      clearInterval(inter);
    }
    act++;
  }, 1000);
}
sum(5,15);
