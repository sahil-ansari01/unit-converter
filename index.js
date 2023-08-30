/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

function getInputNum() {
    let inputNum = document.getElementById("input-num").value;
    let meterToFeet = (inputNum * 3.281).toFixed(3);
    let feetToMeter = (inputNum * 0.3048).toFixed(3);
    let literToGallon = (inputNum * 0.264).toFixed(3);
    let gallonToLiter = (inputNum * 3.7854).toFixed(3);
    let kiloToPound = (inputNum * 2.204).toFixed(3);
    let poundToKilo = (inputNum * 0.4535924).toFixed(3);
    
    document.getElementById("length-val").innerHTML = `${inputNum} meters = ${meterToFeet} feet | ${inputNum} feet = ${feetToMeter} meters`;
    document.getElementById("volume-val").innerHTML = `${inputNum} liters = ${literToGallon} gallons | ${inputNum} gallons = ${gallonToLiter} liters`;
    document.getElementById("mass-val").innerHTML = `${inputNum} kilos = ${kiloToPound} pounds | ${inputNum} pounds = ${poundToKilo} kilos`;

}
