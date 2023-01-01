document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector("#layer button")
    .addEventListener("click", function () {
      document.querySelector("#layer").style.display = "none";
    });
});
$(function () {
  //변수
  let list = $(".notice_content"),
    num = 0; //슬라이드기능 구현시 번호를 저장할 변수를 먼저만들자

  const show_num = 3,
    total = list.find("li").length, //li 의 갯수 (슬라이드한개)
    li_height = list.find("li").eq(0).height(),
    copyObj = list.find("li").clone(),
    ctrl = $(".btn_ctrl");
  list.append(copyObj);

  const timer = setInterval(autoplay, 2000); //const 변수선언은 적용범위가 좁다.

  ctrl.click(function () {
    if (ctrl.find("img").attr("src") === "images/notice_control_stop.png") {
      /*선택자.text()함수는 클래스나 id에 들어있는 텍스트 문자열을 가져온다.*/
      ctrl.find("img").attr("src", "images/notice_control_play.png");
      clearInterval(timer);
    } else {
      ctrl.find("img").attr("src", "images/notice_control_stop.png");
      setInterval(autoplay, 2000);
    }
  });

  function autoplay() {
    if (num == total) {
      num = 0;
      list.css("top", 0);
    }
    num++;
    list.stop().animate({ top: -li_height * num }, 1000);
  }

  $(".btn_up").click(function () {
    if (num == total) {
      num = 0; //0
      list.css("top", 0);
    }
    num++; //요기의 num 0
    list.stop().animate({ top: -li_height * num }, 1000); //요기의num
    return false;
  });
  $(".btn_down").click(function () {
    if (num == 0) {
      num = total; //3
      list.css("top", -li_height * num);
    }
    num--;
    list.stop().animate({ top: -li_height * num }, 1000);
    return false;
  });
});
