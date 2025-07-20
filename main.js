const linkShow = document.querySelector('.nav-links');
const icon = document.querySelector('.icon');
const bars = document.querySelector('.fa-bars');

icon.addEventListener('click', () => { 
  linkShow.classList.toggle('show');
  bars.classList.toggle('fa-xmark');
});

