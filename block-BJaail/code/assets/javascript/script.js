class BookList {
    constructor(root, list = []) {
        this.root = root;
        this.bookList = list;
        this.currentIndex = 0;
    }
    add(title, author, isbn) {
        let book = new Book(title, author, isbn);
        this.bookList.push(book);
        localStorage.setItem("bookList", JSON.stringify(this.bookList));
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
        console.log(isbn, "isbn");
        let index = this.bookList.findIndex((book) => book.isbn === isbn);
        console.log(index);
        this.bookList.splice(index, 1);
        this.createUI();
        return this.bookList.length;
    } 
    createUI() {
        this.root.innerHTML = "";
        this.bookList.forEach((book) => {
            let ui = book.createUI();
            ui.querySelector("span").addEventListener("click", this.handleDelete.bind(this, book.isbn));
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
        li.classList.add("item-li");
        let title = document.createElement("div");
        title.classList.add("flex-40");
        title.classList.add("title");
        let author = document.createElement("div");
        author.classList.add("flex-25");
        author.classList.add("author");
        let isbn = document.createElement("div");
        isbn.classList.add("flex-25");
        isbn.classList.add("isbn");
        let close = document.createElement("span");
        close.classList.add("close");
        close.classList.add("flex-10");

        title.innerText = this.title;
        author.innerText = this.author;
        isbn.innerText = this.isbn;
        close.innerText = "❌";
        
        li.append(title, author, isbn, close);
        return li;
    }

}

let form = document.querySelector("form");

let btn = form.querySelector("button");

let root = document.querySelector(".list");

let list = JSON.parse(localStorage.getItem("bookList"));

list = list.map((book) => {
    return new Book(book.title, book.author, book.isbn);
});

let myBookList = new BookList(root, list);
myBookList.createUI();

btn.addEventListener('click', (event) => {
    event.preventDefault();
    let title = form.querySelector("#title").value;
    let author = form.querySelector("#author").value;
    let isbn = form.querySelector("#isbn").value;
    myBookList.add(title, author, isbn);

    form.querySelector("#title").value = "";    
    form.querySelector("#author").value = "";
    form.querySelector("#isbn").value = "";
    console.log(title, author, isbn);

});


