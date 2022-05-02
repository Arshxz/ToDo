function addItem(event) {
    event.preventDefault();

    let text = document.getElementById('todo-input');

    db.collection('todo-items').add({
        text: text.value,
        status: "active"
    })
    text.value = ""
}

function getItems() {
    db.collection("todo-items").onSnapshot((snapshot) => {
        let items = []
        snapshot.docs.forEach((doc) => {
            items.push({
                id: doc.id,
                ...doc.data()
            })
        })
        generateItems(items)
    })
}

function generateItems(items) {

    let itemsHTML = "";
    items.forEach((item) => {
        itemsHTML += `
            <div class="todo-item">
                <div class="check">
                    <div data-id="${item.id}" class="check-mark">
                        <img src="./assets/icon-check.svg" alt="">
                    </div>
                </div>
                <div class="todo-text">
                    ${item.text}
                </div>
            </div>
        `
    })
    document.querySelector(".todo-items").innerHTML = itemsHTML;
}

function el() {
    let todoCheckMarks = document.querySelector(".todo-item .check-mark")

    todoCheckMarks.forEach((checkMark) => {
        checkMark.addEventListener("click", function () {
            markCompleted(checkMark.dataset.id);
        })
    })
}

function markCompleted(id) {
    let item = db.collection("todo-item").doc(id)

    item.get().then(function (doc) {
        if (doc.exists) {

        }
    })
}

getItems()