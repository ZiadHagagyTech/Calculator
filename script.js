let displayValue = '';
let previousResults = [];

function appendToDisplay(value) {
    if (displayValue === '0' && value !== '.') {
        displayValue = '';
    }
    displayValue += value;
    updateDisplay();
}

function clearDisplay() {
    displayValue = '';
    updateDisplay();
}

function calculateResult() {
    try {
        const result = eval(displayValue);
        displayValue = result.toString();
        previousResults.push({ expression: displayValue });
        updatePreviousResults();
        updateDisplay();
    } catch (error) {
        displayValue = 'Error';
        updateDisplay();
    }
}

function clearAllResults() {
    previousResults = [];
    updatePreviousResults();
}

function updateDisplay() {
    document.getElementById('display').innerText = displayValue;
}

function updatePreviousResults() {
    const previousResultsContainer = document.getElementById('previous-results');
    previousResultsContainer.innerHTML = '';
    previousResults.forEach((result, index) => {
        const div = document.createElement('div');
        div.textContent = `${index + 1}. ${result.expression}`;
        previousResultsContainer.appendChild(div);
    });
}
