const bookDisplay = document.querySelector('.book-display');
const addBookButton = document.querySelector('.add-book');
const addBookModal = document.querySelector('.add-book-modal');
const bookModalClose = document.querySelector('.close');
const myLibrary = [];


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};


function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    return myLibrary.push(book);
};


function displayLibraryBooks(books) {
    for (const book in books) {
        const newBook = document.createElement("div");
        newBook.className = "book";

        const deleteButton = document.createElement("button");
        deleteButton.className = "delete";
        deleteButton.innerText = "x";

        const bookTitle = document.createElement("h4");
        const by = document.createElement("p");
        by.className = "by";
        by.innerText = "by";
        const bookAuthor = document.createElement("p");

        bookAuthor.innerText = book.author;
        bookTitle.innerText = book.title;

        newBook.appendChild(deleteButton);
        newBook.appendChild(bookTitle);
        newBook.appendChild(by);
        newBook.appendChild(bookAuthor);

        bookDisplay.appendChild(newBook);
    }
};


addBookButton.addEventListener("click", () => {
    return addBookModal.show();
});

bookModalClose.addEventListener("click", () => {
    return addBookModal.close();
});
