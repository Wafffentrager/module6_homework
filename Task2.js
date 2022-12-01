function func(num){
    if ((num < 2) || (num > 1000)) {
        console.log ("Error");
    } 
    else {
        for (let i = 2; i < num; i++){
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }
}

let rNum = Math.floor(Math.random() * 2000);
let p = func(rNum);
console.log(rNum + p);
