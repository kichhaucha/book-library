
console.log("ham tere")

class Book {
    constructor(sname, author, type) {
        this.name = sname;
        this.author = author;
        this.type = type;
    }
}
class Display {
    add(book) {
        console.log("Adding to UI");
        let tableBody = document.getElementById('tableBody');
        let uiString = `<tr>
                            <td>${book.name}</td>
                            <td>${book.author}</td>
                            <td>${book.type}</td>
                        </tr>`;
        tableBody.innerHTML += uiString;
    }
    clear() {
        let libraryform = document.getElementById('libraryform');
        libraryform.reset();

    }
    validate(book) {
        if (book.name.length < 2 || book.author.length < 2) {
            return false
        }
        else {
            return true;
        }
    }
    show(type, displayMessage) {
        let message = document.getElementById('msg');
        message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                                <strong>Messge:</strong> ${displayMessage}
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">×</span>
                                </button>
                            </div>`;
        setInterval(() => {
            message.innerHTML = '';
        }, 5000);

    }
}

let libraryform = document.getElementById('libraryform');
libraryform.addEventListener('submit', function libraryformsubmit(e) {
    console.log("submited form");
    let sname = document.getElementById("bookname").value;
    let author = document.getElementById("author").value;
    let type;
    let fiction = document.getElementById("fiction");
    let programing = document.getElementById("programming");
    let coocking = document.getElementById("coocking");
    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programing.value;
    }
    else if (coocking.checked) {
        type = coocking.value;
    }

    let book = new Book(sname, author, type)
    console.log(book)

    let display = new Display();
    if (display.validate(book)) {
        display.add(book);
        display.show('success', 'Your book has been successfully added');
        display.clear();
    }
    else {
        display.show('danger', 'Sorry you cannot add this book');
    }
    e.preventDefault();

})