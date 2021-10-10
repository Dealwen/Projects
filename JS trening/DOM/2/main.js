let a = document.querySelector("a");
let oldhref = a.getAttribute("href");

// меняю атрибут!
a.setAttribute("href", "https:/ya.ru");
a.textContent = "yandex";

console.log(a.attributes);

let box1 = document.querySelector("#box1");
let box2 = document.querySelector("#box2");

box1.classList.add("red");
box2.classList.remove("blue");

let hasClass = box2.classList.contains("blue");
console.log(hasClass);

if (hasClass) {
  box2.classList.remove("blue");
} else {
  box1.classList.add("blue");
}
