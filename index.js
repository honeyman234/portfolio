// declare the list of backgrounds
let bg = ["background.jpg","header2.jpg","header3.jpg"]

let value = document.querySelector(".background")
console.log(value)

let i = 0
setInterval(() => {
    if (i > 2) {
        i = 0
    }
    value.style.background = `url('images/${bg[i]}')`
    value.style.backgroundPosition = 'center'
    value.style.backgroundSize = 'cover'
    value.style.backgroundRepeat = 'no-repeat'
    i++
}, 10000);