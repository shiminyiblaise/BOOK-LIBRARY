class LibraryApp {
  constructor(listElementId, titleInputId, authorInputId) {
    this.listElement = document.getElementById(listElementId);
    this.titleInput = document.getElementById(titleInputId);
    this.authorInput = document.getElementById(authorInputId);
    this.books = [];

    this.loadFromLocalStorage();

    this.setupEventListeners();

    // Update date and time
    LibraryApp.updateDateTime();
    setInterval(() => LibraryApp.updateDateTime(), 1000);
  }

  setupEventListeners() {
    document.getElementById('addTaskButton').onclick = () => this.addBook();
    document.getElementById('booksLink').onclick = () => this.showBooks();
    document.getElementById('addBookLink').onclick = () => LibraryApp.showAddBook();
    document.getElementById('contactLink').onclick = () => LibraryApp.showContact();
  }

  addBook() {
    const title = this.titleInput.value.trim();
    const author = this.authorInput.value.trim();

    if (title === '' || author === '') {
      return;
    }

    const newBook = { title, author };
    this.books.push(newBook);
    this.displayBooks();
    this.saveToLocalStorage();
    this.titleInput.value = '';
    this.authorInput.value = '';
  }

  displayBooks() {
    this.listElement.innerHTML = '';
    this.books.forEach((book, index) => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `${book.title} by ${book.author}`;

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Remove';
      deleteButton.onclick = () => {
        this.removeBook(index);
      };

      listItem.appendChild(deleteButton);
      this.listElement.appendChild(listItem);

      // Conditional styling
      listItem.style.backgroundColor = index % 2 === 0 ? '#c1c1c1' : 'white';
      listItem.style.width = '100%';
    });
  }

  removeBook(index) {
    this.books.splice(index, 1);
    this.displayBooks();
    this.saveToLocalStorage();
  }

  // Save to local storage
  saveToLocalStorage() {
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  loadFromLocalStorage() {
    const storedBooks = localStorage.getItem('books');
    if (storedBooks) {
      this.books = JSON.parse(storedBooks);
      this.displayBooks();
    }
  }

  showBooks() {
    LibraryApp.hideAllSections();
    document.getElementById('books').classList.remove('hidden');
    this.displayBooks();
  }

  // Display books
  static showAddBook() {
    LibraryApp.hideAllSections();
    document.getElementById('addBook').classList.remove('hidden');
  }

  static showContact() {
    LibraryApp.hideAllSections();
    document.getElementById('contact').classList.remove('hidden');
  }

  static hideAllSections() {
    document.querySelectorAll('section:not(.hidden)').forEach((section) => {
      section.classList.add('hidden');
    });
  }

  static updateDateTime() {
    const dateTimeElement = document.getElementById('dateTime');
    const now = new Date();
    dateTimeElement.textContent = now.toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    });
  }
}

// RUN the application
document.addEventListener('DOMContentLoaded', () => {
  const initLibraryApp = () => new LibraryApp('List', 'add', 'mora');
  initLibraryApp();
});
