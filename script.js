// accesing all the required elemets.
const table = document.getElementById(`table`);
const book = document.getElementById(`bookname`);
const author = document.getElementById(`author`);
const pages = document.getElementById(`pages`);
const addbtn = document.getElementById(`addbook`);

let bookshelf = []

class newbook {
    constructor(bookname, author, pages){
        this.bookname = bookname,
        this.author = author,
        this.pages = pages 
    }
}

addbtn.onclick = () => {
    let mybook = new newbook(`${book.value}`,`${author.value}`,`${Number(pages.value)}`)
    bookshelf.push(mybook);
    table.innerHTML += 
    `<tr>
        <td>
        ${bookshelf.length}
        </td>
        <td>
        ${book.value}
        </td>
        <td>
        ${author.value}
        </td>
        <td>
        ${Number(pages.value)}
        </td>
    </tr>`
}