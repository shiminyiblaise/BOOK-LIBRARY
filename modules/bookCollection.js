export class BookCollection{
    #books;
    constructor(title, author){
        this.title = title;
        this.author = author;
        this.id = Date.now().toString();
    }

    loadBooks = () =>{
        const storedBooks = localStorage.getItem('books');
        return storedBooks ? JSON.parse(storedBooks) : [];
    }

    saveBooks = () => {
        localStorage.setItem('books', JSON.stringify(this.#books));
    }

    addBook = (title, author) => {
        const book ={
            title,
            author,
            id: Date.now().toString()
        };
        this.#books = [...this.#books, book];
        this.saveBooks();
        return this.#books;
    }

    
    removeBook = (id) => {
        this.#books = this.#books.filter(book =>book.id !==id);
        this.saveBooks();
        return this.loadBooks;
    }
    getAllBooks = () =>this.#books;
}