/*************  BookList ***********/
class BookList {
    constructor(list, currentIndex) {
        this.list = list;
        this.currentIndex = currentIndex;
    }
    add(list) {
        this.list = this.list.concat(list);
    }
    getCurrentBook() {      
        return this.list[this.currentIndex];
    }
    getNextBook() {
        return this.list[this.currentIndex + 1];
    }
    getPrevBook() {
        return this.list[this.currentIndex - 1];
    }
    changeCurrentBook(index) {
        this.currentIndex = index;
    }
}

/*************  Book ***********/
class Book {
    constructor(title, category, author, isRead = false, finishedDate) {
        this.title = title;
        this.category = category;
        this.author = author;
        this.isRead = isRead;
        this.finishedDate = finishedDate;
    }

    markBookAsRead() {
        this.isRead = true;
        this.finishedDate = new Date();
    }

}

/* Creating Books */
let book1 = new Book("Book One", "Fiction", "John Raphael");
let book2 = new Book("Book Two", "Drama", "Rachael Dixon");
let book3 = new Book("Book Three", "Romance", "Ravi Rajshekar");
let book4 = new Book("Book Four", "Technology", "Priya Verma");
let book5 = new Book("Book Five", "Politics", "Anand Sharma");

let list1 = [book1, book2, book3];
let list2 = [book4, book5];

let booklist1 = new BookList(list1, 0);

book1.markBookAsRead();
book3.markBookAsRead();

booklist1.add(list2);

booklist1.changeCurrentBook(3);
console.log(booklist1.getCurrentBook());
console.log(booklist1.getPrevBook());
console.log(booklist1.getNextBook());
