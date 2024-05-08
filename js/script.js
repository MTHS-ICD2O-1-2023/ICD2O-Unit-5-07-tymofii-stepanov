// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Tymofii
// Created on: Sep 2020
// This file contains the JS functions for index.html

function sumNumbers() {
  const number = parseInt(document.getElementById('numberInput').value);

  let result = 0;

  for (let i = 1; i <= number; i++) {
    result += i;
  }

  document.getElementById("summationResult").innerHTML = "<p>Sum of numbers from 1 to " + number + " = " + result + "</p>";
}
