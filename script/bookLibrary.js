class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.status = 'доступна'; // по умолчанию книга доступна
    }
}

class Library {
    constructor() {
        this.books = []; 
    }

    addBook(book) {
        this.books.push(book); 
    }

    borrowBook(isbn) {
        const book = this.books.find(b => b.isbn === isbn); // ищем книгу по ISBN
        if (book && book.status === 'доступна') {
            book.status = 'взята'; // меняем статус на взятую
            return 'Книга успешно взята.';
        }
        return 'Книга недоступна или не найдена.';
    }

    returnBook(isbn) {
        const book = this.books.find(b => b.isbn === isbn); // ищем книгу по ISBN
        if (book && book.status === 'взята') {
            book.status = 'доступна'; // меняем статус на доступную
            return 'Книга успешно возвращена.';
        }
        return 'Книга не найдена или не была взята.';
    }

    listAvailableBooks() {
        return this.books.filter(b => b.status === 'доступна'); // список доступных книг
    }
}


const library = new Library();
const book1 = new Book('Война и мир', 'Лев Толстой', '1234567890');
const book2 = new Book('Лолита', 'Владимир Набоков', '0987654321');
library.addBook(book1);
library.addBook(book2);
console.log(library.listAvailableBooks()); 
console.log(library.borrowBook('1234567890')); 
console.log(library.listAvailableBooks()); 
console.log(library.returnBook('1234567890')); 
console.log(library.listAvailableBooks()); 