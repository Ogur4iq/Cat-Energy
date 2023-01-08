var slider = document.querySelector('.example__slider')
var btnBefore = slider.querySelector('.example__slider__button-before');
var btnAfter = slider.querySelector('.example__slider__button-after');
var imgBefore = slider.querySelector('.example__slider__item-before');
var imgAfter = slider.querySelector('.example__slider__item-after');
var sliderInput = slider.querySelector('.slider__input');

if (window.matchMedia("(max-width: 767px)").matches) {
  btnAfter.addEventListener('click', function () {
    if (slider.classList.contains('example__slider-before--show')) {
      slider.classList.remove('example__slider-before--show');
      slider.classList.add('example__slider-after--show');
    }

    slider.classList.add('example__slider-after--show');
  })

  btnBefore.addEventListener('click', function () {
    slider.classList.remove('example__slider-after--show');
    slider.classList.add('example__slider-before--show');
  })
}

if (window.matchMedia("(min-width: 768px)").matches) {
  sliderInput.addEventListener('input', function () {
    imgBefore.style.width = (100 - sliderInput.value) + '%';
    imgAfter.style.width = sliderInput.value + '%';
  });

  btnBefore.addEventListener('click', function () {
    imgBefore.style.width = '100%';
    imgAfter.style.width = '0%';
    sliderInput.value = 0;
  });

  btnAfter.addEventListener('click', function () {
    imgBefore.style.width = '0%';
    imgAfter.style.width = '100%';
    sliderInput.value = 100;
  });
}
