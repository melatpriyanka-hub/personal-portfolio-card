
// Welcome Message
window.onload = function() {
    alert("Welcome to Priyanka's Personal Portfolio!");
};

// Contact Button Function
function contactMe() {
    alert("Thank you for visiting my portfolio!");
}

// Current Year
const year = new Date().getFullYear();

document.querySelector("footer p").innerHTML =
    "© " + year + " Priyanka Melat | My Portfolio";
