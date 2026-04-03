$(document).ready(function () {

  // ----- Mobile Nav Toggle -----
  $('.nav__toggle').on('click', function () {
    $(this).toggleClass('active');
    $('.nav__links').toggleClass('open');
  });

  // Close nav when a link is clicked (mobile)
  $('.nav__link').on('click', function () {
    $('.nav__toggle').removeClass('active');
    $('.nav__links').removeClass('open');
  });



  // ----- Gallery Lightbox -----
  $('.gallery-card__img').on('click', function () {
    var src = $(this).attr('src');
    if (src) {
      $('.lightbox__img').attr('src', src);
      $('.lightbox').addClass('active');
    }
  });

  $('.lightbox, .lightbox__close').on('click', function () {
    $('.lightbox').removeClass('active');
  });

  // Close lightbox with Escape key
  $(document).on('keydown', function (e) {
    if (e.key === 'Escape') {
      $('.lightbox').removeClass('active');
    }
  });

  // ----- Splash Screen (Homepage only) -----
  var splash = document.getElementById('splash');
  var splashBtn = document.getElementById('splashEnter');

  if (splash && splashBtn) {
    splashBtn.addEventListener('click', function () {
      // Fade out splash
      splash.classList.add('fade-out');

      // Start music immediately
      var music = document.getElementById('bgMusic');
      if (music) {
        music.volume = 0.1;
        music.play().catch(function () {
          console.log('Autoplay blocked');
          var btn = document.getElementById('musicToggle');
          if (btn) {
            btn.classList.remove('playing');
            btn.innerHTML = '&#9835; Music';
          }
        });
      }

      // Remove splash from DOM after fade animation
      setTimeout(function () {
        splash.style.display = 'none';
      }, 800);
    });
  }

  // ----- Background Music -----
var music = document.getElementById('bgMusic');
var btn = document.getElementById('musicToggle');

if (music && btn) {
  music.volume = 0.1;

  btn.addEventListener('click', function () {
    if (music.paused) {
      music.play();
      btn.classList.add('playing');
      btn.innerHTML = '&#9835; Pause';
    } else {
      music.pause();
      btn.classList.remove('playing');
      btn.innerHTML = '&#9835; Music';
    }
  });
}

});
