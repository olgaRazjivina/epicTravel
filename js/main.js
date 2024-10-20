const mobileBtn = document.querySelector('#btn-mobile-nav');
const mobileBtnImg = document.querySelector('#mobile-nav-img');
const mobileNav = document.querySelector('#mobile-nav');
const header = document.querySelector('#header');

mobileBtn.addEventListener('click', function () {
  mobileBtn.classList.toggle('open');
  mobileNav.classList.toggle('open');
  header.classList.toggle('header-mobile-open');
  document.body.classList.toggle('no-scroll');

  if (mobileBtn.classList.contains('open')) {
    mobileBtnImg.src = './img/icons/close-mobile-nav.svg';
  } else {
    mobileBtnImg.src = './img/icons/open-mobile-nav.svg';
  }
});
