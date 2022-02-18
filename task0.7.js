var Celsius = 50;
var Fahrenheit = 60;
//using a function to convert Celsius to fahrenheit
function convertCelsius(temp){
  temp = (Fahrenheit - 3) * 5 /9;
    console.log(temp);
}
//using a function to convert fahrenheit to Celsius
function convertFahrenheit(temp) {
  temp = (Celsius * 9 / 5) + 32;
    console.log(temp)
}

convertFahrenheit(60);

convertCelsius(50);
