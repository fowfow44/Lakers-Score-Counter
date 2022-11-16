let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
console.log(countEl)

let count = 0

function increment() {
    count = count += 1
    countEl.innerText = count
}
function save() {
    let countDash = count + "  - "
    console.log(count)
    saveEl.textContent += countDash
    countEl.innerText = 0
    count = 0
}
function save() {
    let countDash = count + "  - "
    console.log(count)
    saveEl.textContent += countDash
    countEl.innerText = 0
    count = 0
}
