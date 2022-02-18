
// using a function to convert a number to hurs and minutes
function convertNum(num){
  let hour = Math.floor(num/60);
  let minute = num % 60;
  //handeling singulars condition
  let h = " hour";
  let m = " minute";
  //if statements for plural condition
  if(hour > 1 ){
    h = h + "s";
  }

  if (minute > 1){
    m = m + "s";
  }

  console.log(hour + h +", "+ minute + m);

}

convertNum(75);
