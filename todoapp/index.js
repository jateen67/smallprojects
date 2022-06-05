const item = document.querySelector('.item')
const submitBtn = document.querySelector('.submit')
const clearBtn = document.querySelector('.clear')
let removeBtn = document.querySelectorAll('.remove')
let doneBtn = document.querySelectorAll('.done')
let containers = document.querySelectorAll('.element-container')
let el = document.querySelectorAll('.element')
const list = document.querySelector('.list')


submitBtn.addEventListener('click', submit)
clearBtn.addEventListener('click', clear)

function submit() {
    let newDiv = document.createElement('div')
    newDiv.className = 'element-container'
    let newEl = document.createElement('li')
    newEl.className = 'element'
    newEl.textContent = item.value
    let b1 = document.createElement('button')
    b1.className = 'remove'
    b1.textContent = 'Remove'
    let b2 = document.createElement('button')
    b2.className = 'done'
    b2.textContent = 'Done'
    newDiv.appendChild(newEl)
    newDiv.appendChild(b1)
    newDiv.appendChild(b2)
    if (item.value.length > 0) list.appendChild(newDiv)
    removeBtn = document.querySelectorAll('.remove')
    doneBtn = document.querySelectorAll('.done')
    el = document.querySelectorAll('.element')
    containers = document.querySelectorAll('.element-container')
}

function clear() {
    list.innerHTML = ''
}

function remove() {
    
}

function done() {
    
}