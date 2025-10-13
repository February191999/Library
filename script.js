const myLibrary = [{}]; // Array for storing books
const bookTitle = document.querySelector("#book-title"); // Book title
const bookAuthor = document.querySelector("#book-author"); // Book author
const bookPages = document.querySelector("#book-pages");   // Book pages
const bookStatus = document.querySelector("#book-status");  // Book status
const submitButton = document.querySelector(".submit-btn"); // Submit button
const cardOutput = document.querySelector(".card-display"); 

function Book(title, author, pages, read) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) { //Function to add books to library

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    const enteredBook = new Book(title, author, pages, read);
    
    enteredBook.id = crypto.randomUUID(); // Gives each book a unique id
    myLibrary.push(enteredBook); // Push book to library
}

function createCard() {
    
    const newBook = myLibrary.at(-1); // indexes last book in library to get the latest book added

    const card = document.createElement("div"); // Create card div
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
    cardOutput.appendChild(card); // Display card in output div
}

submitButton.addEventListener("click", (event) => { // Click event for submit button
    console.log(addBookToLibrary(bookTitle.value, bookAuthor.value, bookPages.value, bookStatus.value));
    console.log(myLibrary);

    createCard();
})

