let divs = document.querySelectorAll("div");
let link = document.querySelector("a");

for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener("click", function (event) {
    event.stopPropagation();
    console.log(this.getAttribute("id"));
  });
}

link.addEventListener("click", handelLinkClick);

function handelLinkClick(event) {
  event.preventDefault();

  let div = divs[0];

  div.style.display = div.style.display === "none" ? "flex" : "none";

  if (div.style.display === "none") {
    link.textContent = "Off";
  } else {
    link.textContent = "On";
  }
}


let p = document.querySelectorAll('p')

// for (let i=0; i<p.length; i++){
//   p[i].addEventListener('click', function(event){
//     event.target.style.color = 'blue'
//   })
// }

let wrapper = document.getElementById('wrapper').addEventListener('click', function(event) {
  let name = event.target.tagName.toLowerCase()

  if(name === 'p'){
    event.target.style.color = 'red'
  }

  if(event.target.classList.contains('color')){
    event.target.style.color = 'blue'
  }
})

