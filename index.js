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

//  Project Data for projects in Work Section

const projects = [
  {
    name: 'Project 1',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    image: 'images/work1.png',
    technologies: ['html', 'css', 'ruby'],
    liveLink: 'https://www.google.com',
    sourceLink: 'https://www.github.com',
    year: '2020',
    type: 'card oddCard',
  },
  {
    name: 'Project 2',
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    image: 'images/work2.png',
    technologies: ['html', 'css', 'javascript'],
    liveLink: 'https://www.google.com',
    sourceLink: 'https://www.github.com',
    year: '2019',
    type: 'card pairCard',
  },
  {
    name: 'Project 3',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    image: 'images/work3.png',
    technologies: ['css', 'javascript', 'ruby'],
    liveLink: 'https://www.google.com',
    sourceLink: 'https://www.github.com',
    year: '2018',
    type: 'card oddCard',
  },
  {
    name: 'Project 4',
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    image: 'images/work3.png',
    technologies: ['html', 'css', 'ruby'],
    liveLink: 'https://www.google.com',
    sourceLink: 'https://www.github.com',
    year: '2016',
    type: 'card pairCard',
  },
];

//  Project Section Card creator

const cardContainer = document.querySelector('#work');

for (let i = 0; i < projects.length; i += 1) {
  const card = `
  <div class="${projects[i].type}">
  <img class="cardsection" src=${projects[i].image} alt="SnapshootPortfolio">
  <div class="cardsection">
      <h4>${projects[i].name}</h4> 
      <ul class="client">
          <li class="worktime"><b>CANOPY</b></li>
          <li class="worktime"><img src="images/Counter.png"></li>
          <li class="worktime worktitle">Back End Dev</li>
          <li class="worktime"><img src="images/Counter.png"></li>
          <li class="worktitle">${projects[i].year}</li>
      </ul>
      <p>${projects[i].description}</p>
      <ul class="client">
          <li class="worktime tag"><b>${projects[i].technologies[0]}</b></li>
          <li class="worktime tag"><b>${projects[i].technologies[1]}</b></li>
          <li class="worktime tag"><b>${projects[i].technologies[2]}</b></li>
      </ul>
      <button class="cardButton open_work" type="button">See Project</button>
  </div>
</div>
  `;
  cardContainer.innerHTML += card;
}

//  Projects popoup

const buttonCall = document.querySelectorAll('.open_work');
const cardWork = document.querySelector('#display_work');

buttonCall.forEach((buton, index) => {
  buton.addEventListener('click', () => {
    const selecButton = projects[index];
    const addHtml = `
    <div class="work_overlay">
    </div>
    <div class="center_card">
      <div class="cardPop">
        <div class="work_pop_title">
          <h4 id="work_pop_name">${selecButton.name}</h4>
          <a class="close_work">&times;</a>
        </div>
        <ul>
          <li class="worktime"><b>CANOPY</b></li>
          <li class="worktime"><img src="images/Counter.png"></li>
          <li class="worktime worktitle">Back End Dev</li>
          <li class="worktime"><img src="images/Counter.png"></li>
          <li class="worktime worktitle year">${selecButton.year}</li>
        </ul>
        <div>
          <img class="imageWork" src=${selecButton.image} alt="SnapshootPortfolio">
        </div>
        <div class="workInfoDesktop">
          <div>
              <p class="workDetail">${selecButton.description}</p>
          </div>
          <div class="techLiveSource">
              <ul class="client techBox">
                <li class="worktime tag tech1">${selecButton.technologies[0]}</li>
                <li class="worktime tag tech2">${selecButton.technologies[1]}</li>
                <li class="worktime tag tech3">${selecButton.technologies[2]}</li>
              </ul>
              <div class="buttonBox">
                <a class="goLive"  href=${selecButton.liveLink}>
                  <button class="goButtons" type="button">See Live <img src="images/live.png" alt="Go live"></button>
                </a>
                <a class="goSource" href=${selecButton.sourceLink}>
                  <button class="goButtons" type="button">See Source <img src="images/source.png" alt="Go Source"></button>
                </a>
              </div>
          </div>
        </div>
      </div>
    </div>
    `;
    cardWork.innerHTML = addHtml;
    document.getElementById('display_work').style.display = 'block';
    document.getElementById('main').style.filter = 'blur(5px)';

    const closeWorks = document.querySelector('.close_work');
    closeWorks.addEventListener('click', () => {
      document.getElementById('display_work').style.display = 'none';
      document.getElementById('main').style.filter = 'none';
    });
  });
});
