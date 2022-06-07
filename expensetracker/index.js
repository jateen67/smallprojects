const remBtn = document.querySelector('.remove')

function SomeDeleteRowFunction(o) {
    var p = o.parentNode
    p.parentNode.removeChild(p)
}

