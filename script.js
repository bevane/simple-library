const bookDisplay = document.querySelector('.book-display');
const addBookButton = document.querySelector('.add-book');
const addBookModal = document.querySelector('.add-book-modal');
const submitBook = document.querySelector('.submit');
const bookModalClose = document.querySelector('.close');
const backdrop = document.querySelector('.backdrop');
const deleteBookButtons = document.querySelectorAll('.delete');
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
    bookDisplay.replaceChildren([]);
    for (const book of books) {
        const newBook = document.createElement("div");
        newBook.className = "book";

        const deleteButton = document.createElement("button");
        deleteButton.className = "delete";
        deleteButton.innerText = "x";
        deleteButton.setAttribute("data-id", book.id);
        deleteButton.addEventListener("click", (e) => {
            e.target.parentNode.remove();
            myLibrary.splice(book.id, 1);
        });

        const bookTitle = document.createElement("h4");
        bookTitle.innerText = book.title;

        const by = document.createElement("p");
        by.className = "by";
        by.innerText = "by";

        const bookAuthor = document.createElement("p");
        bookAuthor.innerText = book.author;


        const bookPages = document.createElement("p");
        bookPages.innerText = `${book.pages} pages`
        bookPages.className = "pages";

        const readStatus = book.read ? "yes" : "no";
        const bookReadContainer = document.createElement("div");
        bookReadContainer.className = `read ${readStatus}`
        const bookRead = document.createElement("p");
        bookRead.innerText = `Read: ${readStatus}`
        bookReadContainer.appendChild(bookRead);
        bookReadContainer.addEventListener("click", (e) => {
            myLibrary[book.id].read = !myLibrary[book.id].read;
            displayLibraryBooks(myLibrary);
        });


        newBook.appendChild(deleteButton);
        newBook.appendChild(bookTitle);
        newBook.appendChild(by);
        newBook.appendChild(bookAuthor);
        newBook.appendChild(bookPages);
        newBook.appendChild(bookReadContainer);

        newBook.setAttribute("data-id", book.id)

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
    const read = document.getElementById('read').checked;
    addBookToLibrary(title, author, pages, read);
    displayLibraryBooks(myLibrary);
    backdrop.style.display = 'none';
    return addBookModal.close();
});

