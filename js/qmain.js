let html = document.querySelector('html')
let btnReset = document.querySelector('.reset')
let allElements = document.querySelectorAll('*')


// returns the most specific style property as int
function getExtStyleInt(element, attr) {
    let style = getComputedStyle(element) 
    let attributeInt = parseInt(style[attr].slice(0, style[attr].length-2))
    return attributeInt
}
