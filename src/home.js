import coffeeimg from './assets/coffees.png';

function renderHome (homelink, menulink, contactlink) {
  const content = document.querySelector('#content');

  const wraptop = document.createElement('div');
  wraptop.classList.add('wraptop');

  const header = document.createElement('header');
  const h2Header = document.createElement('h2');
  const ul = document.createElement('ul');
  const li1 = document.createElement('li');
  const btn = document.createElement('button');
  const li2 = document.createElement('li');
  const li3 = document.createElement('li');
  const li4 = document.createElement('li');


  content.appendChild(wraptop);
  wraptop.appendChild(header);
  header.appendChild(h2Header);
  header.appendChild(ul);
  ul.appendChild(li1);
  ul.appendChild(li2);
  ul.appendChild(li3);
  ul.appendChild(li4);
  li1.appendChild(btn);


  h2Header.innerHTML = `<span class="iconify" data-inline="false" data-icon="noto-hot-beverage" style="font-size: 30px;"></span>
                  Coffee Way`;
  btn.textContent = 'Book now';
  li2.textContent = 'Contact us';
  li3.textContent = 'Menu';
  li4.textContent = 'Home';

  li4.style.fontSize = '20px';
  li4.style.fontWeight = 'bold';

  const main = document.createElement('main');
  const left = document.createElement('div');
  left.classList.add('left');
  const h2Main = document.createElement('h2');
  const spanMain = document.createElement('span');
  const btnMain = document.createElement('button');
  const right = document.createElement('div');
  right.classList.add('right');
  const coffee = document.createElement('img');

  wraptop.appendChild(main);
  main.appendChild(left);
  left.appendChild(h2Main);
  left.appendChild(spanMain);
  left.appendChild(btnMain);
  main.appendChild(right);
  right.appendChild(coffee);

  h2Main.innerHTML = `Your Favorite Coffee <br>
              Delivered Hot & <br>
              Fresh`;
  spanMain.textContent = 'Delicious and fast service';
  btnMain.textContent = 'Order now';
  coffee.src = coffeeimg;

  const box = document.createElement('div');
  const boxDesc1 = document.createElement('div');
  const boxDesc2 = document.createElement('div');
  const boxDesc3 = document.createElement('div');

  box.classList.add('box');
  content.appendChild(box);

  const clean = () => {
    wraptop.remove();
    box.remove();
  };

  li3.addEventListener('click', () => {
    clean();
    menulink(homelink, menulink, contactlink);
  });

  li2.addEventListener('click', () => {
    clean();
    contactlink(homelink, menulink, contactlink);
  });

  boxDesc1.classList.add('box-desc');
  box.appendChild(boxDesc1);
  boxDesc2.classList.add('box-desc');
  box.appendChild(boxDesc2);
  boxDesc3.classList.add('box-desc');
  box.appendChild(boxDesc3);

};

export default (renderHome);
