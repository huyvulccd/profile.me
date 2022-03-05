const darkModeToggle = document.querySelector(".btn_mode");
const dark_btn = document.querySelector(".fa-moon");
const light_btn = document.querySelector(".fa-sun");
const more_info_btn = document.querySelector(".more-info_btn");
const back_btn = document.querySelector(".fa-arrow-left");

const profile_container = document.querySelector(".profile_container");
const main_ele = document.querySelectorAll(".first"); // first là những cái t muốn nó ẩn đi khi cái thẻ phóng to ra
const second_ele = document.querySelector(".second");
const profile_mobile = document.querySelector(".profile_mobile");



function blockInspect() {
  window.addEventListener("keyup", function(e) {
    if (e.keyCode == 44) {
      return false;
    }
  });
  document.onkeydown = function (e) {
    console.log(e.keyCode)
    if (event.keyCode == 123) {
      return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
      return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
      return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
      return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
      return false;
    }
    if (e.shiftKey && e.keyCode == 'U'.charCodeAt(0)) {
      return false;
    }
  }
}
blockInspect();

darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark_mode")
  dark_btn.classList.toggle("hide");
  light_btn.classList.toggle("hide");
});

function expand() {
  profile_container.classList.add("active"); profile_mobile.classList.add("active");
  main_ele.forEach(element => {
    element.classList.add("hide");
  });
  setTimeout(() => {
    profile_mobile.classList.remove("hide");
    second_ele.classList.remove("hide");
  }, 1000);
}

function small() {
  profile_container.classList.remove("active");
  profile_mobile.classList.add("hide");
  main_ele.forEach(element => {
    element.classList.remove("hide");
  });
  second_ele.classList.add("hide");
}

more_info_btn.addEventListener("click", () => {
  expand();
})

back_btn.addEventListener("click", () => {
  small();
})

document.addEventListener("keydown", (e) => {
  if (e.keyCode == 27) {
    small();
  }
})


// Gif
const gif = document.querySelector(".gif");

document.addEventListener("click", (e)=> {
  gif.classList.remove("hide"); 
  setTimeout(() => {
    gif.classList.add("hide");
  }, 250); // Muốn nó xuất hiện bao lâu trong 1 chu kì như vậy thôi
})

document.addEventListener("mousemove", function (e) {
  gif.style.left = e.pageX - 48.7 + "px";
  gif.style.top = e.pageY - 18.8 + "px";
});
//6,68