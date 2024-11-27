class Calculator {
    
   // constructor() {}

    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        if (b === 0) {
            return 'Ошибка: деление на ноль';
        }
        return a / b;
    }
}

const calculator = new Calculator();


console.log(calculator.add(5, 10));         
console.log(calculator.subtract(10, 5));    
console.log(calculator.multiply(4, 6));     
console.log(calculator.divide(20, 4));      
console.log(calculator.divide(10, 0));       
console.log(calculator.add(563214, 563));