//menu
let tombolMenu = $(".tombol-menu");
let menu = $("nav .menu ul");

// function klikMenu(){
//     tombolMenu.click(function(){
//         menu.toggle();
//     });
//     menu.click(function(){
//         menu.toggle();
//     });
// }

// $(document).ready(function(){
//     var width= $(window).width();
//     if (width < 990){
//         klikMenu();
//     }
// })

// function myFunction() {
//   var x = document.getElementById("myLinks");
//   if (x.style.display === "block") {
//     x.style.display = "none";
//   } else {
//     x.style.display = "block";
//   }
// }
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
// //check lebar
$(window).resize(function(){
    var width = $(window).width();
    if (width >890){
        menu.css("display","block");
    } else {
        menu.css("display","none");
    }
    klikMenu();
});

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navigation-gulir").style.top = "0";
  } else {
    document.getElementById("navigation-gulir").style.top = "-85px";
  }
  prevScrollpos = currentScrollPos;
}
//efek scroll



// Connect to API
// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://documenter.getpostman.com/view/5385898/UVyn3yy5', true)

request.onload = function () {
  // Begin accessing JSON data here
}

// Send request
request.send()