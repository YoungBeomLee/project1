document.addEventListener("DOMContentLoaded", function () {
	document.querySelector("#layer button").addEventListener("click", function () {
		document.querySelector("#layer").style.display = "none";
	});
	});

$(function () {
  //변수
  let timer;
  let list = $(".slide_logobox ul"),
    num = 0; //슬라이드기능 구현시 번호를 저장할 변수를 먼저만들자

  const show_num = 3,
    total = list.find("li").length, //li 의 갯수 (슬라이드한개)
    li_width = list.find("li").eq(0).width(),
    copyObj = list.find("li").clone(),
    ctrl = $(".stop");
  list.append(copyObj);

   //const 변수선언은 적용범위가 좁다.
   
  ctrl.click(function () {
    
    if (ctrl.hasClass("stop1")) {
      ctrl.removeClass("stop1");
      $(this).addClass("on");
      clearInterval(timer);
      return false;
    } else {
      ctrl.removeClass("on");
      $(this).addClass("stop1");
      autoplay();
      
      return false;
    }
  });
  autoplay();
  function autoplay() {
    timer = setInterval(function(){
    if (num == total-3) {
      num = 0;
      list.css("margin-left", 0);
    }
    num++;
    list.stop().animate({ "margin-left": -li_width * num }, 1000);
  },2000)
  }

  $(".next").click(function () {
    if (num == total-3) {
      num = 0; //0
      list.css("margin-left", 0);
    }
    num++; //요기의 num 0
    list.stop().animate({ "margin-left": -li_width * num }, 500); //요기의num
    return false;
  });
  $(".prev").click(function () {
    if (num == 0) {
      num = total-3; //3
      list.css("margin-left", -li_width * num);
    }
    num--;
    list.stop().animate({ "margin-left": -li_width * num }, 500);
    return false;
  });
  clearAuto();
	function clearAuto() {
		$(".prev,.next").mouseenter(function () {
			clearInterval(timer);
		});
		$(".prev,.next").mouseleave(function () {
			if(ctrl.hasClass("on")) return;
      autoplay();
		});
	}
});
