document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.header__btn-menu');
  const menuList = document.querySelector('.header__nav');
  menuBtn.addEventListener('click', menuToggle);

  function menuToggle(e) {
    const menuOpen = menuBtn.classList.contains('active');
    console.log(e);
    if (menuOpen) {
      menuBtn.classList.remove('active');
      menuList.classList.remove('active');
    } else {
      menuBtn.classList.add('active');
      menuList.classList.add('active');
    }
  }
});
