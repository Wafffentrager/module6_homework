var a = 10
var b = 12
function func(act){
  act(); 
  return function(){
      console.log(a + b);
  }
}

function argFunc(){
  console.log('Answer:');
}

const result = func(argFunc);
result();
