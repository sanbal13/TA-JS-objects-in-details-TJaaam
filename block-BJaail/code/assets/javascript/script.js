class BookList {
    constructor(root, list = []) {
        this.root = root;
        this.bookList = list;
        this.currentIndex = 0;
    }
    add(title, author, isbn) {
        let book = new Book(title, author, isbn);
        this.bookList.push(book);
        this.createUI();
        return this.bookList.length;
    }
    getCurrentBook() {
        let index = this.currentIndex;
        return this.bookList[index];
    }
    getPreviousBook() {
        let index = this.currentIndex - 1;
        return this.bookList[index];
    }
    getNextBook() {
        let index = this.currentIndex + 1;
        return this.bookList[index];
    }
    changeCurrentBook(index) {
        this.currentIndex = index;
        return this.currentIndex;
    }
    handleDelete(isbn) {
        let index = this.bookList.findIndex((book) => book.isbn = isbn);
        this.bookList.splice(index, 1);
        return this.bookList.length;
    } 
    createUI() {
        this.root.innerHTML = "";
        this.bookList.forEach((book) => {
            let ui = book.createUI();
            ui.querySelector("span").addEventListener("click", this.handleDelete.bind(this, this.isbn));
            this.root.append(ui);
        });
    }
}

class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isRead = false;
        this.finishedDate = null;
    }
    markBookAsRead() {
        this.isRead = true;
        this.finishedDate = new Date();
    }

    createUI() {
        let li = document.createElement("li");
        li.classList.add("flex");
        let title = document.createElement("div");
        title.classList.add("flex-40");
        let author = document.createElement("div");
        author.classList.add("flex-25");
        let isbn = document.createElement("div");
        isbn.classList.add("flex-25");
        let close = document.createElement("span");
        close.classList.add("flex-10");

        title.innerText = this.title;
        author.innerText = this.author;
        isbn.innerText = this.isbn;
        close.innerText = "❌";
        
        li.append(title, author, isbn, close);
        return li;
    }

}

let btn = document.querySelector("button");

let root = document.querySelector(".list");
let myBookList = new BookList(root);

btn.addEventListener("click", (event) => {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let isbn = document.querySelector("#isbn").value;
    myBookList.add(title, author, isbn);

});


