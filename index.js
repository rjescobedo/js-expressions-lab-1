//! Start by creating the variables for the data recorded
const celsiusTemps = [25, 18, 15, 28, 20, 23, 30, 22, 24, 21, 27, 19, 26, 17, 29];
const fahrenheitTemps = [32, 70, 80, 72, 68, 75, 82, 65, 77, 78, 73, 79, 71, 74, 76];

//* Then work on the conversion of the temperature from Celsius to Fahrenheit (or viceversa)
const convertedFromCelsiusToFahrenheit = celsiusTemps.map((x) => (x * 9/5) + 32);   
//! Start the calculation of the total temperatures
//* Then apply the conversion to calculate the total in the other unit of measurement
//* Call the variables: tot_temperature_in_fahrenheit and tot_temperature_in_celsius
const tot_temperature_in_celsius = convertedFromCelsiusToFahrenheit.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log("Total Temperature in Celcius: " + tot_temperature_in_celsius);

const tot_temperature_in_fahrenheit = fahrenheitTemps.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log("Total Temperature in Fahrenheit: " + tot_temperature_in_fahrenheit);

//! Start the calculation of the average temperatures
//* Call the variables: avg_temperature_in_fahrenheit and avg_temperature_in_celsius
const avg_temperature_in_celsius = tot_temperature_in_celsius / celsiusTemps.length;
console.log("Average Temperature in Cesius: " + avg_temperature_in_celsius);

const avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / fahrenheitTemps.length;
console.log("Average Temperature in Fahrenheit: " + avg_temperature_in_fahrenheit);
//! Console.log the results for your own inspection if you'd like

//! After creating the four variables mentioned above, uncomment the following lines
//* This way you can export them to the test file, this is essential for the tests to work

module.exports = {
    // tot_temperature_in_fahrenheit,
    // tot_temperature_in_celsius,
    // avg_temperature_in_fahrenheit,
    // avg_temperature_in_celsius
};