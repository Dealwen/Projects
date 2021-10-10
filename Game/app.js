const board = document.querySelector('#board')
const SQUARES_NUMBER = 666
const colors = ['#7CE700','#FFBF00','#FF0022','#FF00AA','#9900FF','#002BFF','#00FFF2','#E6FF00','#FF7B00']

for(let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover',() =>setColor(square))



    square.addEventListener('mouseleave',() =>removeColor(square))


    board.append(square)


}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color},0 0 30px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = 'rgb(59, 59, 59)'
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor(){
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]

}