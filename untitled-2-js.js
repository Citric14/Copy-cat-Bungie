// for (let i = 0; i < 10; i++) {
//     console.log('Hello World');

// }


// let i = 0

// while (i < 10) {
//     i++
//     const hiFromClass = () => {console.log('Hello Class')}
//     hiFromClass()
// }
let items = []
function addItem(name, price) {
    let item = { name: name, price: price }
    items.push(item)
}

function getTotal() {
    let total = 0
    for (let i = 0; i < items.lenght; i++) {
        total += items[i].price;
    }
    return total
}

addItem('fancy pants', 11.99)
addItem('pants', 5.99)
addItem('t-shirt', 20)

console.log(getTotal())