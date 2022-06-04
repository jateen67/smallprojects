const numbers = document.querySelectorAll('.num')
const equal = document.querySelector('.equals')
const del = document.querySelector('.del')
const clearBtn = document.querySelector('.ac')
const numbersUsed = document.querySelector('.numbers-used')
const ops = document.querySelectorAll('.operation')
const result = document.querySelector('.result')


function clear() {
    result.innerHTML = ''
    numbersUsed.innerHTML = ''
}

function deleteNumber() {
    result.innerHTML = result.innerHTML.slice(0, -1)
}

function appendNumber(number) {
    if (number === '.' && result.innerHTML.includes('.')) return
    result.innerHTML += number
}

function chooseOperation(operation) {
    if (['+', '-', '*', '÷'].some(e => result.innerHTML.includes(e))) return
    if (!result.innerHTML.match(/[0-9]/gi)) return
    result.innerHTML += ` ${operation} `
}

function compute() {
    let n1 = ''
    let n2 = ''
    let o = ''
    for (let i = 0; i < result.innerHTML.length; i++) {
        if (['+', '-', '*', '÷'].some(e => result.innerHTML[i].includes(e))) {
            o = result.innerHTML[i]
            n2 += result.innerHTML.slice(i + 1)
            break
        }
        else n1 += result.innerHTML[i]
    }
    n1 = Number(n1)
    n2 = Number(n2)
    if (!n2) return
    switch(o) {
        case '+':
            result.innerHTML = n1 + n2
            break
        case '-':
            result.innerHTML = n1 - n2
            break
        case '*':
            result.innerHTML = n1 * n2
            break
        case '÷':
            result.innerHTML = n1 / n2
            break
    }
    numbersUsed.innerHTML = `${n1} ${o} ${n2}`
}

function commas(number) {
    return number
}

numbers.forEach(e => {
    e.addEventListener('click', () => {
        appendNumber(e.innerHTML)
    })
})

ops.forEach(e => {
    e.addEventListener('click', () => {
        chooseOperation(e.innerHTML)
    })
})

clearBtn.addEventListener('click', () => {
    clear()
})

del.addEventListener('click', () => {
    deleteNumber()
})

equal.addEventListener('click', () => {
    compute()
})