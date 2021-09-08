var urlmain = document.URL;
var param = document.URL.split("/")[3].replace("?m=1","").replace("?m=0","");
var dataUrl = [
"https://dev-cusfilms1.pantheonsite.io/",	
"https://dev-neomoviefj.pantheonsite.io/",	
"https://filmnewfj.blogspot.com/",	
"https://dev-filmk32hd.pantheonsite.io/",
"https://dev-neoflimfj.pantheonsite.io/",	
"https://dev-neofilmfj.pantheonsite.io/"
];
var randomItem = dataUrl[Math.floor(Math.random()*dataUrl.length)];
window.location = randomItem + param;
