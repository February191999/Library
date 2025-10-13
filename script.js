const myLibrary = [
    {
        title: "harry",
        author: "Jk",
        pages: 29,
        read: "read"
    }
];
const bookTitle = document.querySelector("#book-title");
const bookAuthor = document.querySelector("#book-author");
const bookPages = document.querySelector("#book-pages");
const bookStatus = document.querySelector("#book-status");
const submitButton = document.querySelector(".submit-btn");
const cardOutput = document.querySelector(".card-display");

const card = document.createElement("div");

card.setAttribute("style", "background-color: #FFFFFF; color: black; text-align: center; height: 150px; margin: 10px; border: 3px solid black")

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

function createCard() {
    
    console.log("this print")
    const newBook = myLibrary.at(-1);
    
    const card = document.createElement("div");
    card.setAttribute("style", "background-color: #FFFFFF; color: black; text-align: center; height: 150px; margin: 10px; border: 3px solid black")
    
    const title = document.createElement("h2");
    title.textContent = `${newBook.title}`;
    card.appendChild(title);
    const author = document.createElement("p");
    author.textContent = `Author: ${newBook.author}`;
    card.appendChild(author);
    const pages = document.createElement("p");
    pages.textContent = `Pages: ${newBook.pages}`;
    card.appendChild(pages);
    const read = document.createElement("p");
    read.textContent = `Read: ${newBook.read}`;
    card.appendChild(read);
    cardOutput.appendChild(card);
}

function createCards() {

    if (myLibrary.length <= 2) {

        console.log("this print")

        createCard();
    } else {
        myLibrary.forEach((book) => {
        
        console.log("print this")

        const card = document.createElement("div");

        card.setAttribute("style", "background-color: #FFFFFF; color: black; text-align: center; height: 150px; margin: 10px; border: 3px solid black")

            
        const title = document.createElement("h2");
        title.textContent = `${book.title}`;
        card.appendChild(title);

        const author = document.createElement("p");
        author.textContent = `Author: ${book.author}`;
        card.appendChild(author);

        const pages = document.createElement("p");
        pages.textContent = `Pages: ${book.pages}`;
        card.appendChild(pages);

        const read = document.createElement("p");
        read.textContent = `Read: ${book.read}`;
        card.appendChild(read);

        cardOutput.appendChild(card);
    }
)}}

createCards();

submitButton.addEventListener("click", (event) => {
    console.log(addBookToLibrary(bookTitle.value, bookAuthor.value, bookPages.value, bookStatus.value));
    console.log(myLibrary);

    createCard();
})

