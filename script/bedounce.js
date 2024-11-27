const debounce=(func, delay)=> {
    let timeout; // Переменная для хранения таймера

    return function(...args) {
        clearTimeout(timeout); // Сбрасываем предыдущий таймер
        timeout = setTimeout(() => {
            func.apply(this, args); // Вызываем функцию с переданными аргументами
        }, delay);
    }
}

// Пример использования
const debouncedFunction = debounce(() => {
    console.log('Вызвана функция с задержкой');
}, 2000);
debouncedFunction();
debouncedFunction(); 

