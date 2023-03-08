const menuButton = document.querySelector('.menu');
const closeMenu = document.querySelector('.close_menu');
const backPort = document.querySelector('.back_port');
const backAbout = document.querySelector('.back_about');
const backCon = document.querySelector('.back_con');
const openWork1 = document.querySelector('.open_work1');
const openWork2 = document.querySelector('.open_work2');
const openWork3 = document.querySelector('.open_work3');
const openWork4 = document.querySelector('.open_work4');
const closeWorks = document.querySelector('.close_work');

//  Work popup

const workName = document.querySelector('#work_pop_name');
const workDescription = document.querySelector('.workDetail');
const featuredImage = document.querySelector('.imageWork');
const tech1 = document.querySelector('.tech1');
const tech2 = document.querySelector('.tech2');
const tech3 = document.querySelector('.tech3');
const goLive = document.querySelector('.goLive');
const goSource = document.querySelector('.goSource');
const year = document.querySelector('.year');

//  Project Data for projects popup

const projects = [
  {
    name: 'Project 1',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    image: 'images/work1.png',
    technologies: ['html', 'css', 'javascript', 'ruby'],
    liveLink: 'https://www.google.com',
    sourceLink: 'https://www.github.com',
    year: '2020',
  },
  {
    name: 'Project 2',
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    image: 'images/work2.png',
    technologies: ['html', 'css', 'javascript', 'ruby'],
    liveLink: 'https://www.google.com',
    sourceLink: 'https://www.github.com',
    year: '2019',
  },
  {
    name: 'Project 3',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    image: 'images/work3.png',
    technologies: ['html', 'css', 'javascript', 'ruby'],
    liveLink: 'https://www.google.com',
    sourceLink: 'https://www.github.com',
    year: '2018',
  },
  {
    name: 'Project 4',
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    image: 'images/work3.png',
    technologies: ['html', 'css', 'javascript', 'ruby'],
    liveLink: 'https://www.google.com',
    sourceLink: 'https://www.github.com',
    year: '2016',
  },
];

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

//  work popout

openWork1.addEventListener('click', () => {
  document.getElementById('display_work').style.display = 'block';
  document.getElementById('main').style.filter = 'blur(5px)';
  workName.innerHTML = `${projects[0].name}`;
  workDescription.innerHTML = `${projects[0].description}`;
  featuredImage.setAttribute('src', projects[0].image);
  tech1.innerHTML = `${projects[0].technologies[0]}`;
  tech2.innerHTML = `${projects[0].technologies[1]}`;
  tech3.innerHTML = `${projects[0].technologies[2]}`;
  goLive.setAttribute('href', projects[0].liveLink);
  goSource.setAttribute('href', projects[0].sourceLink);
  year.innerHTML = `${projects[0].year}`;
});

openWork2.addEventListener('click', () => {
  document.getElementById('display_work').style.display = 'block';
  document.getElementById('main').style.filter = 'blur(5px)';
  workName.innerHTML = `${projects[1].name}`;
  workDescription.innerHTML = `${projects[1].description}`;
  featuredImage.setAttribute('src', projects[1].image);
  tech1.innerHTML = `${projects[1].technologies[3]}`;
  tech2.innerHTML = `${projects[1].technologies[2]}`;
  tech3.innerHTML = `${projects[1].technologies[1]}`;
  goLive.setAttribute('href', projects[1].liveLink);
  goSource.setAttribute('href', projects[1].sourceLink);
  year.innerHTML = `${projects[1].year}`;
});

openWork3.addEventListener('click', () => {
  document.getElementById('display_work').style.display = 'block';
  document.getElementById('main').style.filter = 'blur(5px)';
  workName.innerHTML = `${projects[2].name}`;
  workDescription.innerHTML = `${projects[2].description}`;
  featuredImage.setAttribute('src', projects[2].image);
  tech1.innerHTML = `${projects[2].technologies[2]}`;
  tech2.innerHTML = `${projects[2].technologies[0]}`;
  tech3.innerHTML = `${projects[2].technologies[1]}`;
  goLive.setAttribute('href', projects[2].liveLink);
  goSource.setAttribute('href', projects[2].sourceLink);
  year.innerHTML = `${projects[2].year}`;
});

openWork4.addEventListener('click', () => {
  document.getElementById('display_work').style.display = 'block';
  document.getElementById('main').style.filter = 'blur(5px)';
  workName.innerHTML = `${projects[3].name}`;
  workDescription.innerHTML = `${projects[3].description}`;
  featuredImage.setAttribute('src', projects[3].image);
  tech1.innerHTML = `${projects[3].technologies[1]}`;
  tech2.innerHTML = `${projects[3].technologies[2]}`;
  tech3.innerHTML = `${projects[3].technologies[3]}`;
  goLive.setAttribute('href', projects[3].liveLink);
  goSource.setAttribute('href', projects[3].sourceLink);
  year.innerHTML = `${projects[3].year}`;
});

closeWorks.addEventListener('click', () => {
  document.getElementById('display_work').style.display = 'none';
  document.getElementById('main').style.filter = 'none';
});
