document.addEventListener("DOMContentLoaded", function () {
	document.querySelector("#layer button").addEventListener("click", function () {
		document.querySelector("#layer").style.display = "none";
	});
});

$(function () {
  //section2 slide

  const visual = $(".section2_slide> li");
  const button = $(".section2_navi_btn_box>li");
  let current = 0; // 현재
  let btnidx = 0; //클릭한 페이저 버튼의 인덱스
  let id; //setIntervalId
  const speed = 3000;
  //console.log(visual,button);

  //버튼클릭함수
  button.click(function () {
    btnidx = $(this).index();
    button.removeClass("on");
    $(this).addClass("on");
    button.find("strong").removeClass("on");
    $(this).find("strong").addClass("on");
    visual.removeClass("on");
    visual.addClass("on");
    button.find("div").removeClass("on")
    $(this).find("div").addClass("on")
    
    
   
    move();
    //선택된것만 적용하기
    //1.다 지우고 걔(this 클릭되어져있는놈)만 적용.
  });
  //시간마다실행

  //이동시키는 함수
  function move() {
    if (current == btnidx) return;
    //console.log("무브" + next);
    let cu = visual.eq(current);
    let ne = visual.eq(btnidx);
    cu.css("left", "0").stop().animate({ left: "-100%" });
    ne.css("left", "100%").stop().animate({ left: "0%" });
    current = btnidx;
  }
  timer();
  function timer() {
    id = setInterval(function () {
      let next = current + 1;
      if (next == visual.length) {
        //인덱스번호가 3이면 next를 0으로 해라.
        next = 0;
      }
      button.eq(next).trigger("click");
      // console.log(current++);
    }, speed);
  }
  //clearInterval
  clearAuto();
  function clearAuto() {
    $(".section2_slide,.section2_navi_btn_box").mouseenter(function () {
      clearInterval(id);
    });
    $(".section2_slide,.section2_navi_btn_box").mouseleave(function () {
      timer();
    });
  }

  //footer
  $(".family_site").click(function () {
    $(".family_collection").slideToggle();
  });
});
