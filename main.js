window.onload = function () {
  lax.setup(); // init

  const updateLax = () => {
    lax.update(window.scrollY);
    window.requestAnimationFrame(updateLax);
  };

  window.requestAnimationFrame(updateLax);
};

window.onresize = function () {
  console.log(screen.width);
};

let progress = document.getElementById("progress-bar");
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function () {
  let progressHeight = (window.pageYOffset / totalHeight) * 100;
  progress.style.height = progressHeight + "%";
};

var mySwiper = new Swiper(".swiper-container", {
  // Optional parameters
  direction: "horizontal",
  fadeEffect: {
    crossFade: true,
  },
  effect: "fade",
  speed: 1000,
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  centeredSlides: true,
  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

var list = ["sound/avatar-love.mp3", "sound/nang-tho.mp3"];
var title_list = ["Avatar's Love", "Nàng Thơ"];

function autoplay(i, list) {
  var sound = new Howl({
    src: [list[i]],
    preload: true,
    onend: function () {
      if (i + 1 == list.length) {
        autoplay(0, list);
      } else {
        autoplay(i + 1, list);
      }
    },
  });
  sound.play();
  var song_tit = document.getElementById("songTitle");
  var num = i + 1;
  song_tit.textContent = "Now playing: " + title_list[i] + " " + num + "/2";
}

autoplay(0, list);
