/**
 * index.js
 * 
 * Author: Stefan Schultz
 */

// Variables
const weightInput = document.getElementById('inputBmiWeight');
const heightInput = document.getElementById('inputBmiHeight');
const calculateBmiButton = document.getElementById('btnCalculateBmi');
const cardBmiResult = document.getElementById('cardBmiResult');
const bmiResultNumber = document.getElementById('resultOfBmiNumber');
const bmiResultText = document.getElementById('resultOfBmiText');
const alertControl = document.getElementById('bmiAlertMessage');
const alertMessageText = document.getElementById('bmiAlertMessageText');
const clearAllButton = document.getElementById('btnClearAll');

// Show message depending of the BMI result
const createBmiMessage = (bmi) => {
  if (bmi !== undefined && bmi !== null) {
    if (bmi < 18.5) {
      bmiResultText.innerHTML = "Your BMI is below 18.5. You're underweight!";
    } else if (bmi >= 18.5 && bmi < 25) {
      bmiResultText.innerHTML = "Your BMI is between 18.5 and 25. You're at a healthy weight!";
    } else if (bmi >= 25 && bmi < 30) {
      bmiResultText.innerHTML = "Your BMI is between 25 and 30. You're overweight!";
    } else {
      bmiResultText.innerHTML = "Your BMI is between 25 and 30. You're obese!";
    }
  }

  if (weightInput.value.length > 0 && heightInput.value.length > 0) {
  
  }
};

// Calculate BMI result
const calculateBmi = () => {

  // If user has filled in weight and height, then calculate the BMI.
  if (weightInput.value !== undefined && weightInput.value !== null && heightInput.value !== undefined && heightInput.value !== null) {
    if (weightInput.value.length > 0 && heightInput.value.length > 0) {
      let height = weightInput.value / 100;
      let bmi = weightInput.value / (Math.pow(height, 2));
      let bmiRounded = bmi.toFixed(1);

      bmiResultNumber.innerHTML = bmiRounded;
      createBmiMessage(bmiRounded);

      // Show BMI card with result, if all correct typed in from user
      cardBmiResult.classList.remove('hide-element');
    } else {
      /* const alertMessage = alertControl.create({
        header: 'Error',
        message: 'Please fill in all fields (weight, height)!',
        buttons: ['Ok']
      }).then(alertElement => {
        alertElement.present();
      }); */
      alertControl.classList.remove('hide-element');
      alertMessageText.innerText = 'Please fill in all fields (weight, height)!';
    }
  }
};

const clearAllElements = () => {
  weightInput.value = '';
  heightInput.value = '';
  bmiResultNumber.innerHTML = '';
  bmiResultText.innerHTML = '';
  alertMessageText.innerText = '';
  cardBmiResult.classList.add('hide-element');
  alertControl.classList.add('hide-element');
};

// User clicks on the calculate BMI button
calculateBmiButton.addEventListener('click', calculateBmi);

// User clicks the clear all button
clearAllButton.addEventListener('click', clearAllElements);