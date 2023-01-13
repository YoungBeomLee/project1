document.addEventListener("DOMContentLoaded", function () {
  const cursor = document.querySelector(".cursor_image");
  const cStyle = window.getComputedStyle(cursor);
  console.log(cStyle.width.split("px", "1"));

  addEventListener("mousemove", function (e) {
    //매개변수로 윈도우 객체 받기
    /*마우스가 움직일때 포인터의 좌표값 얻기
      얻어낸 좌표를 dom에 할당
      */
    let pointer = e;
    console.log(pointer);
    let pointerlocation = [pointer.clientX, pointer.clientY];
    let pObj = {
      x: pointer.clientX / 2 + "px",
      y: pointer.clientY / 3 + "px",
    };
    let cSize = [cStyle.width.split("px", "1"), cStyle.height.split("px", "1")];
    cursor.style.marginLeft = -7 + "px";
    cursor.style.marginTop = -7 + "px";
    cursor.style.left = pointerlocation[0] + "px";
    cursor.style.top = pointerlocation[1] + "px";

    //console.log(cSize);
  });
});
