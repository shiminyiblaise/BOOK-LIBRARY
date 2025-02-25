export const displayBooks = (books) => {
    const bookList = document.getElementById('books-list');
    bookList.innerHTML ='';

    books.forEach(({title, author, id}) =>{
        const bookElement = document.createElement('div');
        bookElement.className = 'book-item';

        const bookContent = document.createElement('div');
        bookContent.className = 'book-item';
        bookContent.innerHTML = <span>"${title}" by ${author}</span>;

        const removeButton = document.createElement('button');
        removeButton.className = 'remove-btn';
        removeButton.textContent = 'Remove';
        removeButton.dataset.id = id;

        bookElement.appendChild(bookContent);
        bookElement.appendChild(removeButton);
        bookList.appendChild(bookElement);
    });
};