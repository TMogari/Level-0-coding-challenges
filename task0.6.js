//using a function to find the maximum number
function maximum(num1, num2, num3){
  if(num3 > num1 && num3 > num2){
    console.log(num3);
  }else if(num1> num2 && num1>num3){
    console.log(num1);
  }else
      console.log(num2);
}

maximum( 20,14,36);
