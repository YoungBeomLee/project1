document.addEventListener("DOMContentLoaded", function () {
    
    //변수생성
 const myPop = document.querySelector("#layer"),
 checkbox = document.querySelector("#popup"),
 close = document.querySelector(".close");
//방문여부 체크변수(css)
let visited = false;

function setCookie(name, value, day) {
 let date = new Date();
 date.setDate(date.getDate() + day);

 let setCookie = "";
 setCookie += name + "=" + value + ";";
 setCookie += "Expires=" + date.toUTCString();

 document.cookie = setCookie; //쿠키설정,생성
}

function delCookie(name) {
 let date = new Date();
 date.setDate(date.getDate() - 1);
 let setCookie = "";
 setCookie += name + "=popup01;";
 setCookie += "Expires=" + date.toUTCString();
 document.cookie = setCookie;
}
//쿠키체크
function checkCookie(name) {
 let cookies = document.cookie.split(";");
 //브라우저에 저장된 여러개의 쿠키중에서 name 매개변수와 일치하는 값을 검색
 for (let i in cookies) {
   if (cookies[i].indexOf(name) > -1) {
     visited = true;
   }
 }
 console.log(cookies, visited);
 if (visited) {
   myPop.style.display = "none";
 } else {
   myPop.style.display = "block";
 }
}
checkCookie("ybWeb");
close.addEventListener("click", function () {
   
    if (checkbox.checked) {
   //오늘하루안보기, 쿠키생성
   //쿠키이름,쿠키값,파기일(유지기간)
   setCookie("ybWeb", "popup01", 1);
   myPop.style.display = "none";
 } else {
    document.querySelector("#layer button").addEventListener("click", function () {
        document.querySelector("#layer").style.display = "none";
    });
    //팝업또띄움
   myPop.style.display = "block";
   delCookie("ybWeb");
   
 }
});

	


});