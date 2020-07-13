function ageCalc(dob, mob, yob) {
    const TODAY = new Date();
    const DAY = TODAY.getDate();
    const MONTH = TODAY.getMonth();
    const YEAR = TODAY.getFullYear();

    let age = YEAR - yob;

    age = (MONTH >= (mob - 1) && DAY >= (dob)) ? age : age - 1;

    document.getElementById("ageCalcOutput").innerHTML = age + " years old";
}
