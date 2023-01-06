document.addEventListener("DOMContentLoaded", function () {
	document.querySelector("#layer button").addEventListener("click", function () {
		document.querySelector("#layer").style.display = "none";
	});
});
$(function () {
	//변수
    let timer;
	let list = $(".notice_content"),
		num = 0; //슬라이드기능 구현시 번호를 저장할 변수를 먼저만들자

	const show_num = 3,
		total = list.find("li").length, //li 의 갯수 (슬라이드한개)
		li_height = list.find("li").eq(0).height(),
		copyObj = list.find("li").clone(),
		ctrl = $(".btn_ctrl");
	list.append(copyObj);
    auto();
	function auto() {
		timer = setInterval(autoplay, 2000);
	}

	ctrl.click(function () {
		if (ctrl.find("img").attr("src") === "images/notice_control_stop.png") {
			ctrl.find("img").attr("src", "images/notice_control_play.png");
			clearInterval(timer);
		} else {
			ctrl.find("img").attr("src", "images/notice_control_stop.png");
			auto();
		}
	});

	function autoplay() {
		if (num == total) {
			num = 0;
			list.css("top", "0");
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
		list.stop().animate({ top: -li_height * num }, 500); //요기의num
		return false;
	});
	$(".btn_down").click(function () {
		if (num == 0) {
			num = total; //3
			list.css("top", -li_height * num);
		}
		num--;
		list.stop().animate({ top: -li_height * num }, 500);
		return false;
	});

	clearAuto();
	function clearAuto() {
		$(".btn_up,.btn_ctrl,.btn_down").mouseenter(function () {
			clearInterval(timer);
		});
		$(".btn_up,.btn_ctrl,.btn_down").mouseleave(function () {
			auto();
		});
	}
});
