const item = document.querySelector('.item')
const submitBtn = document.querySelector('.submit')
const clearBtn = document.querySelector('.clear')
let list = document.querySelector('.list')

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
    newDiv.appendChild(newEl)
    newDiv.appendChild(b1)
    if (item.value.length > 0) list.appendChild(newDiv)
    item.value = ''
    b1.setAttribute('onclick', 'rem(this)')
}

function clear() {
    list.innerHTML = ''
}

function rem(o) {
    var p = o.parentNode
    p.parentNode.removeChild(p)
}