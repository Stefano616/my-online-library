// - create book constructor - OK
// - add methods on the prototype - OK
// - create empty library array - OK
// - create function to populate the library with Book objects, based on input arguments, create and add book - OK
// - Create function to display (access) the books - OK
// - prepare the UI layout
// - make btn to delet book
// - make toggle for read or not, with change bg color
// - connect with the DOM

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
  return bookToAdd;
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

addBookToLibrary("The lord of The Rings", "R. J. Tolkien", 200, false);
addBookToLibrary("The lord of The Rings 2", "R. J. Tolkien", 358, false);
addBookToLibrary("The Hobbit", "R. J. Tolkien", 546, true);
displayLibrary();
displayBooks();
