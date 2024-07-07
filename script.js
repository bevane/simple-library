const bookDisplay = document.querySelector('.book-display');
const addBookButton = document.querySelector('.add-book');
const addBookModal = document.querySelector('.add-book-modal');
const submitBook = document.querySelector('.submit');
const bookModalClose = document.querySelector('.close');
const backdrop = document.querySelector('.backdrop');
const myLibrary = [];


function Book(id, title, author, pages, read) {
    this.id = id
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};


function addBookToLibrary(title, author, pages, read) {
    const id = myLibrary.length
    const book = new Book(id, title, author, pages, read);
    return myLibrary.push(book);
};


function displayLibraryBooks(books) {
    for (const book of books) {
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
    backdrop.style.display = 'block';
    return addBookModal.show();
});


bookModalClose.addEventListener("click", () => {
    backdrop.style.display = 'none';
    return addBookModal.close();
});


submitBook.addEventListener("click", (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').value;
    addBookToLibrary(title, author, pages, read);
    displayLibraryBooks(myLibrary);
    backdrop.style.display = 'none';
    return addBookModal.close();
});
