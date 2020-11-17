var inputWeight = document.getElementById("inputWeight");
var inputHeight = document.getElementById("inputHeight");
var btn = document.querySelector("button");
var resultComment= document.getElementById("resultComment");

function calcBMI(){
const writtenHeight= parseFloat(inputHeight.value);
const writtenWeight = parseInt(inputWeight.value);
const bmi = writtenWeight / (writtenHeight * writtenHeight);
const toFixNum = bmi.toFixed(2);

if (toFixNum >= 25){
    resultComment.innerHTML= "your BMI is " + toFixNum + " you are overweight";
} else if (toFixNum < 18) {
    resultComment.innerHTML="Your BMI is " + toFixNum + " you are underweight";
} else {
    resultComment.innerHTML="Your BMI is " + toFixNum + " your BMI is normal";
}

}

btn.addEventListener('click',calcBMI);
