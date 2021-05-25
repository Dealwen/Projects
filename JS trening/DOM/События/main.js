// залажу в элемент
let btn = document.querySelector('button')
let h1 = document.querySelector('h1')
let input = document.querySelector('input')



function  btnHandler(){
  h1.textContent = input.value
}

// добавляю событие елементу
btn.addEventListener('click', btnHandler)
