let calculation = localStorage.getItem('calculation') || '';

displayCalculation ();

function unpdatedCalculation (value) {
    calculation += value;
    displayCalculation ();
    
    localStorage.setItem('calculation', calculation)
}

function displayCalculation () {
    document.querySelector('.js-calculation-display').innerHTML = calculation;
}