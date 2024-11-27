function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj; // возвращаем примитивные значения и null без изменений
    }

    const clone = Array.isArray(obj) ? [] : {}; // создание массива или объекта

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            clone[key] = deepClone(obj[key]); // рекурсивное клонирование
        }
    }

    return clone; // возвращаем глубокую копию объекта
}

// Пример использования
const original = {
    name: 'John',
    address: {
        city: 'New York',
        country: 'USA'
    }
};
const copy = deepClone(original);
copy.address.city = 'Los Angeles';
console.log(original.address.city); // New York (оригинальный объект не должен измениться)
console.log(copy.address.city); // Los Angeles