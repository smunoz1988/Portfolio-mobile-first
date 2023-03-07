const menuButton = document.querySelector('.menu');
const closeMenu = document.querySelector('.close_menu');
const backPort = document.querySelector('.back_port');
const backAbout = document.querySelector('.back_about');
const backCon = document.querySelector('.back_con');

menuButton.addEventListener('click', () => {
  document.getElementById('display_menu').style.display = 'block';
  document.getElementById('main').style.filter = 'blur(5px)';
});

closeMenu.addEventListener('click', () => {
  document.getElementById('display_menu').style.display = 'none';
  document.getElementById('main').style.filter = 'none';
});

backPort.addEventListener('click', () => {
  document.getElementById('display_menu').style.display = 'none';
  document.getElementById('main').style.filter = 'none';
});

backAbout.addEventListener('click', () => {
  document.getElementById('display_menu').style.display = 'none';
  document.getElementById('main').style.filter = 'none';
});

backCon.addEventListener('click', () => {
  document.getElementById('display_menu').style.display = 'none';
  document.getElementById('main').style.filter = 'none';
});