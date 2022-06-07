let name = document.querySelector('.name-field')
let date = document.querySelector('.date-field')
let amount = document.querySelector('.amount-field')
let table = document.querySelector('.items')
const addBtn = document.querySelector('.add-btn')

addBtn.addEventListener('click', add)

function add() {
    let newRow = document.createElement('tr')
    let newNameCol = document.createElement('td')
    let newDateCol = document.createElement('td')
    let newAmountCol = document.createElement('td')
    let newBtnCol = document.createElement('td')
    let newBtn = document.createElement('button')
    newBtn.className = 'remove'
    newBtn.innerHTML = 'X'
    newBtn.setAttribute('onclick', 'rem(this)')
    newBtnCol.appendChild(newBtn)
    newNameCol.textContent = name.value
    newDateCol.textContent = date.value
    newAmountCol.textContent = '$' + amount.value
    if (name.value && date.value && amount.value) {
        newRow.appendChild(newNameCol)
        newRow.appendChild(newDateCol)
        newRow.appendChild(newAmountCol)
        newRow.appendChild(newBtnCol)
        table.appendChild(newRow)
        name.value = ''
        date.value = ''
        amount.value = ''
    }
}

function rem(o) {
    var p = o.parentNode.parentNode
    p.parentNode.removeChild(p)
}
