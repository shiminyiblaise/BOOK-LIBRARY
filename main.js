
 import{bookCollection} from './modules/bookCollection.js';
 import{initializeNavigation } from './modules/navigation.js';
 import{displayBooks } from './modules/ui.js';

// Initialize the book collection
const  BookCollection = new BookCollection();
initializeNavigation();

// Display initial books
displayBooks(myBookCollection.getAllBooks());

// Handle form submission
const bookform = document.getElementById('book-form');
document.getElementById('books').appendChild(bookform);

bookform.addEventListener('submit', (e) => {
    e.preventDefault();

    const titleInput = document.getElementById('title');
    const authorInput = document.getElementById('author');

    const title = titleInput.value.trim();
    const author = authorInput.value.trim();

    if (title && author) {
        const updatedBooks = myBookCollection.addBook(title, author);
        displayBooks(updatedBooks);
        titleInput.value = '';
        authorInput.value = '';
    }
});

// Handle book removal
document.getElementById('books-list').addEventListener('click', (e) => {
    if (e.target.classList.contains('remove-btn')) {
        const bookId = e.target.dataset.id;
        const updatedBooks = myBookCollection.removeBook(bookId);
        displayBooks(updatedBooks);
    }
});










// import{bookCollection} from './modules/bookCollection.js';
// import{initializeNavigation } from './modules/navigation.js';
// import{displayBooks } from './modules/ui.js';

// // Initailize the book collection
// const bookCollection= new bookCollection();
// initializeNavigation();

// // Display initial books
// displayBooks(bookCollection.getAllBooks());

// // Handle from submission
//  document.getElementById('books').appendChild(bookform);

// const bookform = document.getElementById('book-form');
// bookform.addEventListener('submit', (e) =>{
//     e.preventDefault();

//     const titleInput = document.getElementById('title');
//     const authorInput = document.getElementById('author');

//     const title = titleInput.value.trim();
//     const author = authorInput.value.trim();

//     if(title && author){
//         const updatedBooks = bookCollection.addBook(title, author);
//         displayBooks(updatedBooks);
//         titleInput.value ='';
//         authorInput.value ='';
//     }
// });
// // Handle book removal
// document.getElementById('books-list').addEventListener('click', (e) =>{
//     if (e.target.classList.contains('remove-btn')) {
//         const bookId = e.target.dataset.id;
//         const updatedBooks = bookCollection.removeBook(bookId);
//         displayBooks(updatedBooks);
//     }
// });



















// class BookCollection {
//   constructor() {
//     this.books = this.loadBooks();
//     this.displayBooks();
//     this.initializeNavigation();
//   }

//   initializeNavigation() {
//     const navLinks = document.querySelectorAll('.nav-link');
//     navLinks.forEach((link) => {
//       link.addEventListener('click', () => {
//         // Remove 'active' class from all links
//         navLinks.forEach((l) => l.classList.remove('active'));
//         // Add 'active' class to clicked link
//         link.classList.add('active');

//         // Get the section id from the data-section attribute
//         const sectionId = link.dataset.section;
//         this.switchSection(sectionId);
//       });
//     });
//   }

//   switchSection(sectionId) {
//     const sections = document.querySelectorAll('.section');
//     sections.forEach((section) => {
//       section.classList.remove('active');
//       this.displayBooks();
//     });
//     document.getElementById(sectionId).classList.add('active');
//   }

//   loadBooks() {
//     const storedBooks = localStorage.getItem('books');
//     return this.storedBooks ? JSON.parse(storedBooks) : [];
//   }

//   saveBooks() {
//     localStorage.setItem('books', JSON.stringify(this.books));
//   }

//   addBook(title, author) {
//     const book = {
//       title,
//       author,
//       id: Date.now().toString(),
//     };
//     this.books.push(book);
//     this.saveBooks();
//     this.displayBooks();
//   }

//   removeBook(id) {
//     this.books = this.books.filter((book) => book.id !== id);
//     this.saveBooks();
//     this.displayBooks();
//   }

//   displayBooks() {
//     const booksList = document.getElementById('books-list');
//     booksList.innerHTML = '';

//     this.books.forEach((book) => {
//       const bookElement = document.createElement('div');
//       bookElement.className = 'book-item';
//       bookElement.innerHTML = `   
//                 <div>
//                     <span>"${book.title}" by ${book.author}</span>
//                 </div>
//                 <button class="remove-btn" onclick="bookCollection.removeBook('${book.id}')">
//                     Remove
//                 </button>
//             `;
//       booksList.appendChild(bookElement);
//     });
//   }
// }

// // Initialize the book collection
// const bookCollection = new BookCollection();

// // Handle form submission
// function handleAddBook() {
//   const titleInput = document.getElementById('title');
//   const authorInput = document.getElementById('author');

//   const title = titleInput.value.trim();
//   const author = authorInput.value.trim();

//   if (title && author) {
//     bookCollection.addBook(title, author);
//     titleInput.value = '';
//     authorInput.value = '';
//   }
// }
// const addButton = document.getElementById('submit');
// addButton.addEventListener('click', handleAddBook);



