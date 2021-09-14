var urlmain = document.URL;
var param = document.URL.split("/")[3].replace("?m=1","").replace("?m=0","");
var dataUrl = [
"https://dev-filmflixss.pantheonsite.io/",
"https://dev-filmfj.pantheonsite.io/",
"https://playfjs.blogspot.com/",
"https://dev-filmk32.pantheonsite.io/",
"https://dev-filmk21.pantheonsite.io/"
];
var randomItem = dataUrl[Math.floor(Math.random()*dataUrl.length)];
window.location = randomItem + param;
