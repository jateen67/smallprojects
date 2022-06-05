const item = document.querySelector('.item')
const submitBtn = document.querySelector('.submit')
const clearBtn = document.querySelector('.clear')
let removeBtn = document.querySelectorAll('.remove')
let containers = document.querySelectorAll('.element-container')
let el = document.querySelectorAll('.element')
let list = document.querySelector('.list')


submitBtn.addEventListener('click', submit)
clearBtn.addEventListener('click', clear)
for (let i = 0; i < removeBtn.length; i++) {
    removeBtn[i].addEventListener('click', function(e) {
        let clicked = e.target
        let divToBeRemoved = clicked.parentElement
        list.removeChild(divToBeRemoved)
    })
}


function submit() {
    let newDiv = document.createElement('div')
    newDiv.className = 'element-container'
    let newEl = document.createElement('li')
    newEl.className = 'element'
    newEl.textContent = item.value
    let b1 = document.createElement('button')
    b1.className = 'remove'
    b1.textContent = 'Remove'
    newDiv.appendChild(newEl)
    newDiv.appendChild(b1)
    if (item.value.length > 0) list.appendChild(newDiv)
    removeBtn = document.querySelectorAll('.remove')
    el = document.querySelectorAll('.element')
    containers = document.querySelectorAll('.element-container')
    list = document.querySelector('.list')
    item.value = ''
}

function clear() {
    list.innerHTML = ''
}

