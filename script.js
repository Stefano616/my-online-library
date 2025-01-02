// - create book constructor - OK
// - add methods on the prototype - OK
// - create empty library array - OK
// - create function to populate the library with Book objects, based on input arguments, create and add book - OK
// - Create function to display (access) the books - OK
// - prepare the UI layout - OK
// - make btn to delet book - Not removed the book from library - FIXED
// - make toggle for read or not, with change bg color

// --- DOM manipulation and table row creation for a book ---
const tbody = document.querySelector("tbody");

function createBookRow(book, bookIndex) {
  const newRow = document.createElement("tr");
  const title = document.createElement("td");
  const author = document.createElement("td");
  const pages = document.createElement("td");
  const read = document.createElement("td");
  const tdDeleteBtn = document.createElement("td");
  const deleteBtn = document.createElement("button");

  newRow.setAttribute("data-index-book", bookIndex);

  title.textContent = `"${book.title}"`;
  author.textContent = book.author;
  pages.textContent = book.pages;
  read.textContent = book.read ? "yes" : "no";
  deleteBtn.classList.add("deleteBtn");
  deleteBtn.textContent = "Delete book";
  deleteBtn.addEventListener("click", () => {
    myLibrary.splice(bookIndex, 1);
    deleteBtn.parentNode.parentNode.remove();
  });

  tdDeleteBtn.appendChild(deleteBtn);
  newRow.append(title, author, pages, read, tdDeleteBtn);
  return newRow;
}

function insertNewRow(bookRow) {
  tbody.appendChild(bookRow);
  return tbody.length;
}
// ---

// creation of book objects and storing in library array

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.info = function () {
  const bookInfo = `"${this.title}" by ${this.author}, ${this.pages} pages, ${
    this.read ? "read already" : "not read yet"
  }`;
  return bookInfo;
};

const myLibrary = [];

function addBookToLibrary(title, author, pages, read) {
  const bookToAdd = new Book(title, author, pages, read);
  myLibrary.push(bookToAdd);
  return [bookToAdd, myLibrary.length - 1];
}

function displayBooks() {
  for (let book in myLibrary) {
    console.log(myLibrary[book]);
  }
  return myLibrary.length;
}

function displayLibrary() {
  console.log(myLibrary);
}

addBookToLibrary("The lord of The Rings", "J. R. R. Tolkien", 200, false);
addBookToLibrary("The lord of The Rings 2", "J. R. R. Tolkien", 358, false);
addBookToLibrary("The Hobbit", "J. R. R. Tolkien", 546, true);

// Add button and modal handling
const showFormBtn = document.querySelector(".showFormBtn");
const dialog = document.querySelector("dialog");
const cancelBtn = document.querySelector("button[value='cancel']");
const addBtn = document.querySelector("#addBtn");
const inputTitle = document.querySelector("#book-title");
const inputAuthor = document.querySelector("#book-author");
const inputPages = document.querySelector("#book-pages");
const inputRead = document.querySelector("#book-read");

showFormBtn.addEventListener("click", () => dialog.show());
addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let [book, index] = addBookToLibrary(inputTitle.value, inputAuthor.value, inputPages.value, inputRead.checked);
  inputTitle.value = "";
  inputAuthor.value = "";
  inputPages.value = "";
  inputRead.checked = false;
  insertNewRow(createBookRow(book, index));
  dialog.close();
});

// ---

// load book in the table

myLibrary.map((book, index) => {
  let newBookRow = createBookRow(book, index);
  insertNewRow(newBookRow);
});
