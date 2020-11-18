

document.getElementById("header__burger").onclick = function() {open()};

function open() {
    document.getElementById("header__burger").classList.toggle("active");
    document.getElementById("header__menu").classList.toggle("show");


}

// document.getElementById("items").onclick = function() {close()};

// function close() {
// 	document.getElementById("header__burger").classList.toggle("active");
//     document.getElementById("header__menu").classList.remove("show");


// }