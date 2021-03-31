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

  menuitem1.innerHTML = `<div class="item-img">
              <img src="${coffee2}" alt="">
            </div>
            <div class="item-desc">
              <div class="menu-price">
                <h2>Capuccino</h2>
                <h2>2.99$</h2>
              </div>
              <span>
              Whether you choose a cup or a mug, you just can't beat the taste of The Coffee Way's cappuccino. A shot of espresso with textured milk poured immediately, resulting in the milk crema separating in the cup.
              This creamy traditional coffee is then garnished with a light dusting of chocolate
              </span>
              <div class="item-cal">
                <div class="menu-calification">
                  <span class="iconify" data-inline="false" data-icon="bi:star-fill" style="color: #F5A00F; font-size: 20px;"></span>
                  <span class="iconify" data-inline="false" data-icon="bi:star-fill" style="color: #F5A00F; font-size: 20px;"></span>
                  <span class="iconify" data-inline="false" data-icon="bi:star-fill" style="color: #F5A00F; font-size: 20px;"></span>
                  <span class="iconify" data-inline="false" data-icon="bi:star-fill" style="color: #F5A00F; font-size: 20px;"></span>
                  <span class="iconify" data-inline="false" data-icon="bi:star-fill" style="color: #F5A00F; font-size: 20px;"></span>
                </div>
                <div class="add-item"> + </div>
              </div>
            </div>`;

  menuitem2.innerHTML = `<div class="item-img">
            <img src = "${coffee3}" alt = "">
          </div>
          <div class="item-desc">
          <div class="menu-price">
          <h2>Americano</h2>
          <h2>2.49$</h2>
          </div>
            <span>
            A classic long black coffee with The Coffee Way's Signature Blend. As you'd expect, it's topped with the smoothest espresso crema around.
            </span>
            <div class="item-cal">
              <div class="menu-calification">
                <span class="iconify" data-inline="false" data-icon="bi:star-fill" style="color: #F5A00F; font-size: 20px;"></span>
                <span class="iconify" data-inline="false" data-icon="bi:star-fill" style="color: #F5A00F; font-size: 20px;"></span>
                <span class="iconify" data-inline="false" data-icon="bi:star-fill" style="color: #F5A00F; font-size: 20px;"></span>
                <span class="iconify" data-inline="false" data-icon="bi:star-fill" style="color: #F5A00F; font-size: 20px;"></span>
                <span class="iconify" data-inline="false" data-icon="bi:star-half" style="color: #F5A00F; font-size: 20px;"></span>
              </div>
              <div class="add-item"> + </div>
            </div>
          </div>`;

  menuitem3.innerHTML = `<div class="item-img">
            <img src = "${coffee4}" alt = "">
          </div>
          <div class="item-desc">
            <div class="menu-price">
              <h2>Espresso</h2>
              <h2>2.49$</h2>
            </div>
            <span>
             Our signature dark roast blend combines dark chocolate with a hard body and rich smoky accents.
            </span>
            <div class="item-cal">
              <div class="menu-calification">
                <span class="iconify" data-inline="false" data-icon="bi:star-fill" style="color: #F5A00F; font-size: 20px;"></span>
                <span class="iconify" data-inline="false" data-icon="bi:star-fill" style="color: #F5A00F; font-size: 20px;"></span>
                <span class="iconify" data-inline="false" data-icon="bi:star-fill" style="color: #F5A00F; font-size: 20px;"></span>
                <span class="iconify" data-inline="false" data-icon="bi:star-fill" style="color: #F5A00F; font-size: 20px;"></span>
                <span class="iconify" data-inline="false" data-icon="bi:star-fill" style="color: #F5A00F; font-size: 20px;"></span>
              </div>
              <div class="add-item"> + </div>
            </div>
          </div>`;

  menuitem4.innerHTML = `<div class="item-img">
            <img src = "${coffee5}" alt = "">
          </div>
          <div class="item-desc">
            <div class="menu-price">
              <h2>Macchiato</h2>
              <h2>2.99$</h2>
            </div>
            <span>
            A classic short black espresso with a dollop of milk crema to make the smoothest short black even smoother. You can also ask for a long macchiato
            </span>
            <div class="item-cal">
              <div class="menu-calification">
                <span class="iconify" data-inline="false" data-icon="bi:star-fill" style="color: #F5A00F; font-size: 20px;"></span>
                <span class="iconify" data-inline="false" data-icon="bi:star-fill" style="color: #F5A00F; font-size: 20px;"></span>
                <span class="iconify" data-inline="false" data-icon="bi:star-fill" style="color: #F5A00F; font-size: 20px;"></span>
                <span class="iconify" data-inline="false" data-icon="bi:star-fill" style="color: #F5A00F; font-size: 20px;"></span>
                <span class="iconify" data-inline="false" data-icon="bi:star-half" style="color: #F5A00F; font-size: 20px;"></span>
              </div>
              <div class="add-item"> + </div>
            </div>
          </div>`;

  menuitem5.innerHTML = `<div class="item-img">
            <img src = "${coffee6}" alt = "">
          </div>
          <div class="item-desc">
            <div class="menu-price">
              <h2>Mocha</h2>
              <h2>3.49$</h2>
            </div>
            <span>
            The mocha is a superb mix of espresso and chocolate with added creamy texture milk and garnished with chocolate powder.
            </span>
            <div class="item-cal">
              <div class="menu-calification">
                <span class="iconify" data-inline="false" data-icon="bi:star-fill" style="color: #F5A00F; font-size: 20px;"></span>
                <span class="iconify" data-inline="false" data-icon="bi:star-fill" style="color: #F5A00F; font-size: 20px;"></span>
                <span class="iconify" data-inline="false" data-icon="bi:star-fill" style="color: #F5A00F; font-size: 20px;"></span>
                <span class="iconify" data-inline="false" data-icon="bi:star-fill" style="color: #F5A00F; font-size: 20px;"></span>
                <span class="iconify" data-inline="false" data-icon="bi:star-fill" style="color: #F5A00F; font-size: 20px;"></span>
              </div>
              <div class="add-item"> + </div>
            </div>
          </div>`;

  menuitem6.innerHTML = `<div class="item-img">
            <img src = "${coffee7}" alt = "">
          </div>
          <div class="item-desc">
            <div class="menu-price">
              <h2>Latte</h2>
              <h2>3.99$</h2>
            </div>
            <span>
            Traditional espresso with textured milk ('latte' means milk) and a delicate layer of milk crema on top. The flavour is slightly milder than a flat white as a greater volume of textured milk is added.
            </span>
            <div class="item-cal">
              <div class="menu-calification">
                <span class="iconify" data-inline="false" data-icon="bi:star-fill" style="color: #F5A00F; font-size: 20px;"></span>
                <span class="iconify" data-inline="false" data-icon="bi:star-fill" style="color: #F5A00F; font-size: 20px;"></span>
                <span class="iconify" data-inline="false" data-icon="bi:star-fill" style="color: #F5A00F; font-size: 20px;"></span>
                <span class="iconify" data-inline="false" data-icon="bi:star-fill" style="color: #F5A00F; font-size: 20px;"></span>
                <span class="iconify" data-inline="false" data-icon="bi:star-half" style="color: #F5A00F; font-size: 20px;"></span>
              </div>
              <div class="add-item"> + </div>
            </div>
          </div>`;
};

export default (renderMenu);
