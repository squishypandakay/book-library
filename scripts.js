function searchBooks() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const books = document.querySelectorAll('.book');
    books.forEach(book => {
        const title = book.querySelector('p').textContent.toLowerCase();
        if (title.includes(input)) {
            book.style.display = '';
        } else {
            book.style.display = 'none';
        }
    });
}

function filterBooks() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const genre = document.getElementById('genreFilter').value;
    const author = document.getElementById('authorFilter').value; // Get the author filter value
    const books = document.querySelectorAll('.book');
    books.forEach(book => {
        const title = book.querySelector('p').textContent.toLowerCase();
        const bookGenre = book.getAttribute('data-genre');
        const bookAuthor = book.getAttribute('data-author'); // Get the book author
        if (
            (title.includes(input) || input === '') &&
            (genre === '' || bookGenre === genre) &&
            (author === '' || bookAuthor === author) // Check if the author matches the filter
        ) {
            book.style.display = '';
        } else {
            book.style.display = 'none';
        }
    });
}

function resetFilters() {
    document.getElementById('searchInput').value = '';
    document.getElementById('genreFilter').value = '';
    document.getElementById('authorFilter').value = ''; // Reset the author filter
    filterBooks();
}

function sortBooksAlphabetically() {
    const container = document.querySelector('.container');
    const books = Array.from(container.querySelectorAll('.book'));
    books.sort((a, b) => {
        const titleA = a.querySelector('p').textContent.toLowerCase();
        const titleB = b.querySelector('p').textContent.toLowerCase();
        return titleA.localeCompare(titleB);
    });
    books.forEach(book => container.appendChild(book));
}

// Sort books on page load
document.addEventListener('DOMContentLoaded', sortBooksAlphabetically);
