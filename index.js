const menuButton = document.querySelector('.menu');
const closeMenu = document.querySelector('.close_menu');
const backPort = document.querySelector('.back_port');
const backAbout = document.querySelector('.back_about');
const backCon = document.querySelector('.back_con');
const openWork1 = document.querySelector('.open_work1');
const closeWork1 = document.querySelector('.close_work');

//  Work popup

const workName = document.querySelector('#work_pop_name');
const prueba = 'Trabajo Uno';

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

/* work popout */

openWork1.addEventListener('click', () => {
  document.getElementById('display_work').style.display = 'block';
  document.getElementById('main').style.filter = 'blur(5px)';
  workName.innerHTML = `${prueba}`;
});

closeWork1.addEventListener('click', () => {
  document.getElementById('display_work').style.display = 'none';
  document.getElementById('main').style.filter = 'none';
});