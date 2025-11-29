// DATA FOR BOOK SERIES
const seriesData = {

    harryPotter: {
        title: "Harry Potter Series",
        books: [
            { name: "Philosopher's Stone", img: "1.jpg", pdf: "books/hp1.pdf" },
            { name: "Chamber of Secrets", img: "2.jpg", pdf: "books/hp2.pdf" },
            { name: "Prisoner of Azkaban", img: "3.jpg", pdf: "books/hp3.pdf" }
        ]
    },

    got: {
        title: "Game of Thrones Series",
        books: [
            { name: "A Game of Thrones", img: "books/got1.jpg", pdf: "books/got1.pdf" },
            { name: "A Clash of Kings", img: "books/got2.jpg", pdf: "books/got2.pdf" },
            { name: "A Storm of Swords", img: "books/got3.jpg", pdf: "books/got3.pdf" },
            { name: "A Feast for Crows", img: "books/got4.jpg", pdf: "books/got4.pdf" },
            { name: "A Dance with Dragons", img: "books/got5.jpg", pdf: "books/got5.pdf" }
        ]
    }

};


function openPopup(seriesName) {
    const data = seriesData[seriesName];
    let booksHTML = "";

    data.books.forEach((book, index) => {
        booksHTML += `
            <div class="popup-book" data-pdf="${book.pdf}">
                <img src="${book.img}" alt="${book.name}">
                <p>${book.name}</p>
            </div>
        `;
    });

    document.getElementById("popupBooks").innerHTML = booksHTML;
    document.getElementById("popupBg").style.display = "flex";

    // Add click event to open PDF on book click
    const popupBooks = document.querySelectorAll('.popup-book');
    popupBooks.forEach(book => {
        book.addEventListener('click', () => {
            const pdfLink = book.getAttribute('data-pdf');
            window.open(pdfLink, '_blank'); // opens PDF in new tab
        });
    });
}

function closePopup() {
    document.getElementById("popupBg").style.display = "none";
}
