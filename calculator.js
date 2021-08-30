

function wyczysc() {
    document.getElementById("result").value = "";
   }
   

   function wyswietl(value) {
    document.getElementById("result").value += value;
   }
   let result = 0;
   let currentOperator = undefined;


function calc(operator) {
    let calculatorInput = document.getElementById('result');
    if (currentOperator !== undefined) {
        if (currentOperator === '+'){
            result += +(calculatorInput.value);  
        }
        if (currentOperator === '-'){
            result -= +(calculatorInput.value);  
        }
        if (currentOperator === '*'){
            result *= +(calculatorInput.value);  
        }
        if (currentOperator === '/'){
            result /= +(calculatorInput.value);  
        }
        if (currentOperator === 'x^y'){
            result = result**calculatorInput.value;  
        }
        if (currentOperator === 'x^2'){
            result = result**2;  
        }
        if (currentOperator === 'sq2'){
            result = Math.sqrt(result);  
        }

        calculatorInput.value = result;
        currentOperator = undefined;
    } else{
        result = +(calculatorInput.value);
        calculatorInput.value = '';
        currentOperator = operator;
        console.log(operator);
    }
}