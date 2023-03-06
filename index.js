function openNav() {
  document.getElementById('display_menu').style.display = 'block';
  document.getElementById('main').style.filter = 'blur(5px)';
}

function closeNav() {
  document.getElementById('display_menu').style.display = 'none';
  document.getElementById('main').style.filter = 'none';
}