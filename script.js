function appendValue(value) {
    document.getElementById('display').value += value;
}

function appendFunction(func) {
    if (func === 'sqrt') {
        document.getElementById('display').value += 'sqrt(';
    } else {
        document.getElementById('display').value += func + '(';
    }
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
        // Reemplazar operadores personalizados
        expression = expression.replace(/√/g, 'Math.sqrt');
        expression = expression.replace(/sin\(/g, 'Math.sin(');
        expression = expression.replace(/cos\(/g, 'Math.cos(');
        expression = expression.replace(/tan\(/g, 'Math.tan(');
        expression = expression.replace(/log\(/g, 'Math.log10(');
        expression = expression.replace(/sqrt\(/g, 'Math.sqrt(');
        expression = expression.replace(/\^/g, '**');

        let result = eval(expression);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
