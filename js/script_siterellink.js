$(function () {
    //변수
    let 
      list = $(".slide_logobox ul"),
      num = 0; //슬라이드기능 구현시 번호를 저장할 변수를 먼저만들자
    
      const 
      show_num = 3,
      total = list.find("li").length, //li 의 갯수 (슬라이드한개)
      li_width = list.find("li").eq(0).width(),
      copyObj = list.find("li").clone(),
      ctrl = $(".slide_btn ul li.stop");
      list.append(copyObj);
      
      const timer = setInterval(autoplay, 2000);//const 변수선언은 적용범위가 좁다.
      
      ctrl.click(function(){
        if(ctrl.attr("class")==="stop"){ 
          ctrl.addClass("on");
        }
        else if(ctrl.attr("class")==="on"){
          ctrl.removeClass("on");
          ctrl.addClass("stop1");
        }
        
      })
      
      

    function autoplay() {
      if (num == total) {
        num = 0;
        list.css("margin-left", 0);
      }
      num++;
      list.stop().animate({ "margin-left": -li_width * num }, 1000);
    }

    $(".next").click(function () {
      if (num == total) {
        num = 0; //0
        list.css("margin-left", 0);
      }
      num++; //요기의 num 0
      list.stop().animate({ "margin-left": -li_width * num }, 1000); //요기의num
      return false;
    });
    $(".prev").click(function () {
      if (num == 0) {
        num = total; //3
        list.css("margin-left", -li_width * num);
      }
      num--;
      list.stop().animate({ "margin-left": -li_width * num }, 500);
      return false;
    });

   
  });