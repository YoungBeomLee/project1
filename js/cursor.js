const cursor=$(".cursor_image");
$(window).mousemove(function (e) {
    const pointer = {
      x: e.clientX,
      y: e.clientY,
    };
  
    cursor.css({top:pointer.y,left:pointer.x,"margin-left":-pointer.x/2,"margin-top":-pointer.y/2})

  });