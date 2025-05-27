function appendValue(value) {
    document.getElementById('display').value += value;
}

function appendFunction(func) {
    document.getElementById('display').value += func + '(';
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    let current = document.getElementById('display').value;
    document.getElementById('display').value = current.slice(0, -1);
}

function calculate() {
    let expression = document.getElementById('display').value;

    try {
        let result = math.evaluate(expression);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
