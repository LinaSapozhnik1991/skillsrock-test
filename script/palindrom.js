function isPalindrome(str) {
    // Удаляем все знаки препинания, пробелы и приводим к нижнему регистру
    const cleanedStr = str.replace(/[^а-яА-ЯёЁa-zA-Z0-9]/g, '').toLowerCase();
    // Проверяем, является ли очищенная строка равной своей реверсированной версии
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;

}
console.log(isPalindrome("А роза упала на лапу Азора"));
console.log(isPalindrome('шалаш'));
console.log(isPalindrome('проверка'));
console.log(isPalindrome('abbaabba'));
console.log(isPalindrome('hello'));
console.log(isPalindrome('17856'));
console.log(isPalindrome('121'));

function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}
fizzBuzz();


function chunkArray(array, size) {
    // Создаем новый массив для хранения разобранных групп
    const result = [];

    // Перебираем первоначальный массив, добавляя элементы в группы
    for (let i = 0; i < array.length; i += size) {
        // Используем метод slice для создания подмассива текущей группы
        const chunk = array.slice(i, i + size);
        result.push(chunk);
    }

    return result;
}

// Примеры
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 2));
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3));
console.log(chunkArray([1, 2, 3, 5, 6, 9, 8, 7, 25, 25], 4));



