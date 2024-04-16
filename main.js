// JAVASCRIPT EVENT LISTENERS

//  var heading = document.getElementById("test")
//  console.log(heading);
//  var listitem = document.getElementById("list2");

//  console.log(listItem) ;

Greet

// declare the function 
function Greet() {
    let name = prompt("Enter your name");
    alert(` Nice to meet you, ${name}` );
}
// Greet();
// Greet();
// Greet();
document.getElementById("btn1").addEventListener("click" , Greet);
// Ex. innerHTML

// event listener
document.getElementById("btn2").addEventListener("click" , changeToDragon);

// event function
function changeToDragon() {
 document.getElementById("test").innerHTML = "all about Dragons" ;
 document.getElementById("intro-p").innerHTML =
 "Dragons would make the best pets. let me to tell you why ..."
// change list item 1 to say "smaug"

document.getElementById("list1").innerHTML = " smaug" ;
}

// Ex. changing  css from js

// event listener 
document.getElementById("btn3").addEventListener("click", changestyle )

// event function 
function changestyle () {
    document.getElementById("list").style.fontfamily = "papyrus"
    document.getElementById("the-body").style.backgroundColor ="lightgreen" ;
}
// event function {
document.getElementById("btn4").addEventListener("click" , random ) ;
function random () {
    alert(Math.random()) 
}
// event function
document.getElementById("btn5").addEventListener("click" , diffDragon)

function diffDragon() {
    document.getElementById("list1").innerHTML = "Draco" ;
    document.getElementById("list2").innerHTML = "Shenron"; 
    document.getElementById("list3").innerHTML = "Dragonite" ; 
    document.getElementById("list4").innerHTML = "Falkor"; 

}
// event function
document.getElementById("btn6").addEventListener("click", colorchange) ;

function colorchange() {
    document.getElementById("the-body").style.color = "#32612D";
    document.getElementById("the-body").style.border = "2px solid green" ;
}