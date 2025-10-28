const myHeading = document.getElementById("myHeading")
myHeading.innerHTML = "Helllo"

const myLink = document.querySelector("nav ul li")
myLink.setAttribute("class", "currentPage")

let colourButtons = document.querySelectorAll(".colPicker");
console.dir(colourButtons); // Logs a NodeList of all elements with the class 'colPicker'


// for (let i = 0; i < colourButtons.length; i++) {
//    colourButtons[i].style.backgroundColor = "green";
// }


document.getElementById("myTestBtn").addEventListener("click", function(ev){
    console.dir(ev.target)
})

const redBtn = document.querySelector(" .red")
redBtn.addEventListener("click", function(){
     console.info("Red Button Clicked")
     document.body.setAttribute("class", "redBack")
 })

const greenBtn = document.querySelector(" .green")
greenBtn.addEventListener("click", function(){
     console.info("Green Button Clicked")
     document.body.setAttribute("class", "greenBack")
})

const blueBtn = document.querySelector(".blue")
blueBtn.addEventListener("click", function(){
     console.info("Blue Button Clicked")
     document.body.setAttribute("class", "blueBack")
})

const defaultBtn = document.querySelector(".reset")
defaultBtn.addEventListener("click", function(){
     document.body.setAttribute("class")
})