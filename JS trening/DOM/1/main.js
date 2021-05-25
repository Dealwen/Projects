// let div = document.getElementById('playground')
// console.log(div)

// let p = document.getElementsByClassName('text')
// console.log(p)

// let h1 = document.getElementsByTagName('h1')
// console.log(h1)

// Новые методы

//class .class_name
//id #id
//tag tag_name 

//innerHTML содержимое елемента
// textContent содержимое текста

let div = document.querySelector('#playground')
div.innerHTML = '<h2 style="color:red"> Frome JS </h2>'
console.log(div.textContent)

let p = document.querySelectorAll('.text')
console.log(p)

let ul = document.querySelector('div#playground ul')
console.log(ul)


let input = document.querySelector('input')
console.log(input.value)