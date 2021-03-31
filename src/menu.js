import coffee2 from './assets/coffee2-capuccino.png';
import coffee3 from './assets/coffee3-americano.png';
import coffee4 from './assets/coffee4-espresso.png';
import coffee5 from './assets/coffee5-macchiato.png';
import coffee6 from './assets/coffee6-mocha.png';
import coffee7 from './assets/coffee7-latte.png';

const renderMenu = (homelink, menulink, contactlink) => {
  const content = document.querySelector('#content');

  const header = document.createElement('header');
  const h2Header = document.createElement('h2');
  const ul = document.createElement('ul');
  const li1 = document.createElement('li');
  const btn = document.createElement('button');
  const li2 = document.createElement('li');
  const li3 = document.createElement('li');
  const li4 = document.createElement('li');

  content.appendChild(header);
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

  li3.style.fontSize = '20px';
  li3.style.fontWeight = 'bold';
  btn.style.backgroundColor = '#f5a00f';
  btn.style.color = 'white';

  const menu = document.createElement('div');
  menu.classList = 'menu';
  const menuDesc = document.createElement('div');
  menuDesc.classList = 'menu-desc';
  const h2MenuDesc = document.createElement('h2');
  const menuList = document.createElement('div');
  menuList.classList = 'menu-list';

  content.appendChild(menu);
  menu.appendChild(menuDesc);
  menuDesc.appendChild(h2MenuDesc);
  menu.appendChild(menuList);

  const clean = () => {
    header.remove();
    menu.remove();
  };

  li4.addEventListener('click', () => {
    clean();
    homelink(homelink, menulink, contactlink);
  });

  li2.addEventListener('click', () => {
    clean();
    contactlink(homelink, menulink, contactlink);
  });

  h2MenuDesc.textContent = 'Explore our best Menu';

  const menuitem1 = document.createElement('div');
  menuitem1.classList = 'menuitem';
  const menuitem2 = document.createElement('div');
  menuitem2.classList = 'menuitem';
  const menuitem3 = document.createElement('div');
  menuitem3.classList = 'menuitem';
  const menuitem4 = document.createElement('div');
  menuitem4.classList = 'menuitem';
  const menuitem5 = document.createElement('div');
  menuitem5.classList = 'menuitem';
  const menuitem6 = document.createElement('div');
  menuitem6.classList = 'menuitem';

  menuList.appendChild(menuitem1);
  menuList.appendChild(menuitem2);
  menuList.appendChild(menuitem3);
  menuList.appendChild(menuitem4);
  menuList.appendChild(menuitem5);
  menuList.appendChild(menuitem6);


};

export default (renderMenu);
