const myLibrary = [];
const bookTitle = document.querySelector("#book-title")
const bookAuthor = document.querySelector("#book-author")
const bookPages = document.querySelector("#book-pages")
const bookStatus = document.querySelector("#book-status")
const submitButton = document.querySelector(".submit-btn")
const cardOutput = document.querySelector(".card-div")

function Book(title, author, pages, read) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    const enteredBook = new Book(title, author, pages, read);
    
    enteredBook.id = crypto.randomUUID();
    myLibrary.push(enteredBook);

}

addBookToLibrary("harry", "jk", 29, "read")
addBookToLibrary("joker", "jk", 29, "read")
console.log(myLibrary);

