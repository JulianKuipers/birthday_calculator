"use strict";
function ageCalc(dob, mob, yob) {
    var d = new Date();
    var day = d.getDate();
    var month = d.getMonth();
    var year = d.getFullYear();

    var age;

    if (month >= (mob - 1) && day >= (dob - 1)) {
        age = year - yob;
    }
    else {
        age = year - yob - 1;
    }

    document.getElementById("ageCalcOutput").innerHTML = age + " years old";
}