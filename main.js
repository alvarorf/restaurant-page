/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/coffee.png":
/*!*******************************!*\
  !*** ./src/assets/coffee.png ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "018fc73838dd3d985b38a048a0bbefde.png");

/***/ }),

/***/ "./src/assets/coffee2-capuccino.png":
/*!******************************************!*\
  !*** ./src/assets/coffee2-capuccino.png ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "918c058ffe0452fc60fa9e3fd3be84d8.png");

/***/ }),

/***/ "./src/assets/coffee3-americano.png":
/*!******************************************!*\
  !*** ./src/assets/coffee3-americano.png ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "422caaed8e73eccacb754500a9549f16.png");

/***/ }),

/***/ "./src/assets/coffee4-espresso.png":
/*!*****************************************!*\
  !*** ./src/assets/coffee4-espresso.png ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "72474580d96bd970166bb437b109a6e1.png");

/***/ }),

/***/ "./src/assets/coffee5-macchiato.png":
/*!******************************************!*\
  !*** ./src/assets/coffee5-macchiato.png ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "78f766d370546d80288d69da49067303.png");

/***/ }),

/***/ "./src/assets/coffee6-mocha.png":
/*!**************************************!*\
  !*** ./src/assets/coffee6-mocha.png ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "7738aa49618144be0b87392bd7a1c002.png");

/***/ }),

/***/ "./src/assets/coffee7-latte.png":
/*!**************************************!*\
  !*** ./src/assets/coffee7-latte.png ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "36ce27f84cfc7cf2cfd12069700c7084.png");

/***/ }),

/***/ "./src/assets/coffees.png":
/*!********************************!*\
  !*** ./src/assets/coffees.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "d6706cd690c17ca66f67a3d7e13af581.png");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_coffee_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/coffee.png */ "./src/assets/coffee.png");


const renderContact = (homelink, menulink, contactlink) => {
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

  const wrap = document.createElement('div');

  const clean = () => {
    wrap.remove();
  };

  li3.addEventListener('click', () => {
    clean();
    menulink(homelink, menulink, contactlink);
  });

  li4.addEventListener('click', () => {
    clean();
    homelink(homelink, menulink, contactlink);
  });

  li2.style.fontSize = '20px';
  li2.style.fontWeight = 'bold';
  btn.style.backgroundColor = '#f5a00f';
  btn.style.color = 'white';

  const contact = document.createElement('div');
  const leftContact = document.createElement('div');
  const formContact = document.createElement('div');

  content.appendChild(wrap);
  wrap.appendChild(header);
  wrap.appendChild(contact);
  contact.appendChild(leftContact);
  contact.appendChild(formContact);

  wrap.classList = 'wrap';
  contact.classList = 'contact';
  leftContact.classList = 'left-contact';
  formContact.classList = 'form-contact';

  const imgForm = document.createElement('img');
  const h2Form = document.createElement('h2');
  const formName = document.createElement('div');
  const formEmail = document.createElement('div');
  const formText = document.createElement('div');
  const buttonForm = document.createElement('button');

  leftContact.appendChild(imgForm);
  formContact.appendChild(h2Form);
  formContact.appendChild(formName);
  formContact.appendChild(formEmail);
  formContact.appendChild(formText);
  formContact.appendChild(buttonForm);

  formName.classList = 'form-name';
  formEmail.classList = 'form-email';
  formText.classList = 'form-text';

  h2Form.textContent = 'Type your message here:';
  buttonForm.textContent = 'Send Now';
  imgForm.src = _assets_coffee_png__WEBPACK_IMPORTED_MODULE_0__.default;

  formName.innerHTML = `<span>Name: </span>
          <input type="text">`;
  formEmail.innerHTML = ` <span>E-mail: </span>
          <input type="text">`;
  formText.innerHTML = `<span>Message: </span>
          <input type="text">`;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderContact);


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_coffees_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/coffees.png */ "./src/assets/coffees.png");


const renderHome = (homelink, menulink, contactlink) => {
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
  coffee.src = _assets_coffees_png__WEBPACK_IMPORTED_MODULE_0__.default;

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

  boxDesc1.innerHTML = `<span class="iconify" data-inline="false" data-icon="bi:clock-fill" style="color: #F5A00F; font-size: 40px;"></span>
  <h2>Today 8:00 - 20:00</h2>
  <span>Working hours</span>`;
  boxDesc2.innerHTML = `<span class="iconify" data-inline="false" data-icon="vaadin:location-arrow-circle" style="color: #F5A00F; font-size: 40px;"></span>
  <h2>Random street 300</h2>
  <span>Get directions</span>`;
  boxDesc3.innerHTML = `<span class="iconify" data-inline="false" data-icon="el:phone-alt" style="color: #F5A00F; font-size: 40px;"></span>
  <h2>+57 (316) 251 55 26</h2>
  <span>Call Online</span>`;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderHome);


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_coffee2_capuccino_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/coffee2-capuccino.png */ "./src/assets/coffee2-capuccino.png");
/* harmony import */ var _assets_coffee3_americano_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/coffee3-americano.png */ "./src/assets/coffee3-americano.png");
/* harmony import */ var _assets_coffee4_espresso_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/coffee4-espresso.png */ "./src/assets/coffee4-espresso.png");
/* harmony import */ var _assets_coffee5_macchiato_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/coffee5-macchiato.png */ "./src/assets/coffee5-macchiato.png");
/* harmony import */ var _assets_coffee6_mocha_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/coffee6-mocha.png */ "./src/assets/coffee6-mocha.png");
/* harmony import */ var _assets_coffee7_latte_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/coffee7-latte.png */ "./src/assets/coffee7-latte.png");







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
              <img src="${_assets_coffee2_capuccino_png__WEBPACK_IMPORTED_MODULE_0__.default}" alt="">
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
            <img src = "${_assets_coffee3_americano_png__WEBPACK_IMPORTED_MODULE_1__.default}" alt = "">
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
            <img src = "${_assets_coffee4_espresso_png__WEBPACK_IMPORTED_MODULE_2__.default}" alt = "">
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
            <img src = "${_assets_coffee5_macchiato_png__WEBPACK_IMPORTED_MODULE_3__.default}" alt = "">
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
            <img src = "${_assets_coffee6_mocha_png__WEBPACK_IMPORTED_MODULE_4__.default}" alt = "">
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
            <img src = "${_assets_coffee7_latte_png__WEBPACK_IMPORTED_MODULE_5__.default}" alt = "">
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderMenu);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");





(0,_home__WEBPACK_IMPORTED_MODULE_0__.default)(_home__WEBPACK_IMPORTED_MODULE_0__.default, _menu__WEBPACK_IMPORTED_MODULE_1__.default, _contact__WEBPACK_IMPORTED_MODULE_2__.default);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYXNzZXRzL2NvZmZlZS5wbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fzc2V0cy9jb2ZmZWUyLWNhcHVjY2luby5wbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fzc2V0cy9jb2ZmZWUzLWFtZXJpY2Fuby5wbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fzc2V0cy9jb2ZmZWU0LWVzcHJlc3NvLnBuZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYXNzZXRzL2NvZmZlZTUtbWFjY2hpYXRvLnBuZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYXNzZXRzL2NvZmZlZTYtbW9jaGEucG5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hc3NldHMvY29mZmVlNy1sYXR0ZS5wbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fzc2V0cy9jb2ZmZWVzLnBuZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUVBQWUscUJBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7OztBQ0EvRSxpRUFBZSxxQkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7Ozs7O0FDQS9FLGlFQUFlLHFCQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7Ozs7QUNBL0UsaUVBQWUscUJBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7OztBQ0EvRSxpRUFBZSxxQkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7Ozs7O0FDQS9FLGlFQUFlLHFCQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7Ozs7QUNBL0UsaUVBQWUscUJBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7OztBQ0EvRSxpRUFBZSxxQkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7Ozs7OztBQ0FuQzs7QUFFNUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUhBQXVIO0FBQ3ZIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCLHVEQUFTOztBQUV6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QTtXQUNBLGtDOzs7Ozs7Ozs7Ozs7Ozs7QUNkZ0M7QUFDQTtBQUNNOztBQUV0Qyw4Q0FBVSxDQUFDLDBDQUFVLEVBQUUsMENBQVUsRUFBRSw2Q0FBYSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjAxOGZjNzM4MzhkZDNkOTg1YjM4YTA0OGEwYmJlZmRlLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI5MThjMDU4ZmZlMDQ1MmZjNjBmYTllM2ZkM2JlODRkOC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNDIyY2FhZWQ4ZTczZWNjYWNiNzU0NTAwYTk1NDlmMTYucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjcyNDc0NTgwZDk2YmQ5NzAxNjZiYjQzN2IxMDlhNmUxLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI3OGY3NjZkMzcwNTQ2ZDgwMjg4ZDY5ZGE0OTA2NzMwMy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNzczOGFhNDk2MTgxNDRiZTBiODczOTJiZDdhMWMwMDIucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjM2Y2UyN2Y4NGNmYzdjZjJjZmQxMjA2OTcwMGM3MDg0LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJkNjcwNmNkNjkwYzE3Y2E2NmY2N2EzZDdlMTNhZjU4MS5wbmdcIjsiLCJpbXBvcnQgY29mZmVlaW1nIGZyb20gJy4vYXNzZXRzL2NvZmZlZS5wbmcnO1xuXG5jb25zdCByZW5kZXJDb250YWN0ID0gKGhvbWVsaW5rLCBtZW51bGluaywgY29udGFjdGxpbmspID0+IHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gIGNvbnN0IGgySGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICBjb25zdCBsaTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY29uc3QgbGkyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgY29uc3QgbGkzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgY29uc3QgbGk0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChoMkhlYWRlcik7XG4gIGhlYWRlci5hcHBlbmRDaGlsZCh1bCk7XG4gIHVsLmFwcGVuZENoaWxkKGxpMSk7XG4gIHVsLmFwcGVuZENoaWxkKGxpMik7XG4gIHVsLmFwcGVuZENoaWxkKGxpMyk7XG4gIHVsLmFwcGVuZENoaWxkKGxpNCk7XG4gIGxpMS5hcHBlbmRDaGlsZChidG4pO1xuXG4gIGgySGVhZGVyLmlubmVySFRNTCA9IGA8c3BhbiBjbGFzcz1cImljb25pZnlcIiBkYXRhLWlubGluZT1cImZhbHNlXCIgZGF0YS1pY29uPVwibm90by1ob3QtYmV2ZXJhZ2VcIiBzdHlsZT1cImZvbnQtc2l6ZTogMzBweDtcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICBDb2ZmZWUgV2F5YDtcbiAgYnRuLnRleHRDb250ZW50ID0gJ0Jvb2sgbm93JztcbiAgbGkyLnRleHRDb250ZW50ID0gJ0NvbnRhY3QgdXMnO1xuICBsaTMudGV4dENvbnRlbnQgPSAnTWVudSc7XG4gIGxpNC50ZXh0Q29udGVudCA9ICdIb21lJztcblxuICBjb25zdCB3cmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgY29uc3QgY2xlYW4gPSAoKSA9PiB7XG4gICAgd3JhcC5yZW1vdmUoKTtcbiAgfTtcblxuICBsaTMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY2xlYW4oKTtcbiAgICBtZW51bGluayhob21lbGluaywgbWVudWxpbmssIGNvbnRhY3RsaW5rKTtcbiAgfSk7XG5cbiAgbGk0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNsZWFuKCk7XG4gICAgaG9tZWxpbmsoaG9tZWxpbmssIG1lbnVsaW5rLCBjb250YWN0bGluayk7XG4gIH0pO1xuXG4gIGxpMi5zdHlsZS5mb250U2l6ZSA9ICcyMHB4JztcbiAgbGkyLnN0eWxlLmZvbnRXZWlnaHQgPSAnYm9sZCc7XG4gIGJ0bi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2Y1YTAwZic7XG4gIGJ0bi5zdHlsZS5jb2xvciA9ICd3aGl0ZSc7XG5cbiAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBsZWZ0Q29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBmb3JtQ29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQod3JhcCk7XG4gIHdyYXAuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgd3JhcC5hcHBlbmRDaGlsZChjb250YWN0KTtcbiAgY29udGFjdC5hcHBlbmRDaGlsZChsZWZ0Q29udGFjdCk7XG4gIGNvbnRhY3QuYXBwZW5kQ2hpbGQoZm9ybUNvbnRhY3QpO1xuXG4gIHdyYXAuY2xhc3NMaXN0ID0gJ3dyYXAnO1xuICBjb250YWN0LmNsYXNzTGlzdCA9ICdjb250YWN0JztcbiAgbGVmdENvbnRhY3QuY2xhc3NMaXN0ID0gJ2xlZnQtY29udGFjdCc7XG4gIGZvcm1Db250YWN0LmNsYXNzTGlzdCA9ICdmb3JtLWNvbnRhY3QnO1xuXG4gIGNvbnN0IGltZ0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgY29uc3QgaDJGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgY29uc3QgZm9ybU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgZm9ybUVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGZvcm1UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGJ1dHRvbkZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICBsZWZ0Q29udGFjdC5hcHBlbmRDaGlsZChpbWdGb3JtKTtcbiAgZm9ybUNvbnRhY3QuYXBwZW5kQ2hpbGQoaDJGb3JtKTtcbiAgZm9ybUNvbnRhY3QuYXBwZW5kQ2hpbGQoZm9ybU5hbWUpO1xuICBmb3JtQ29udGFjdC5hcHBlbmRDaGlsZChmb3JtRW1haWwpO1xuICBmb3JtQ29udGFjdC5hcHBlbmRDaGlsZChmb3JtVGV4dCk7XG4gIGZvcm1Db250YWN0LmFwcGVuZENoaWxkKGJ1dHRvbkZvcm0pO1xuXG4gIGZvcm1OYW1lLmNsYXNzTGlzdCA9ICdmb3JtLW5hbWUnO1xuICBmb3JtRW1haWwuY2xhc3NMaXN0ID0gJ2Zvcm0tZW1haWwnO1xuICBmb3JtVGV4dC5jbGFzc0xpc3QgPSAnZm9ybS10ZXh0JztcblxuICBoMkZvcm0udGV4dENvbnRlbnQgPSAnVHlwZSB5b3VyIG1lc3NhZ2UgaGVyZTonO1xuICBidXR0b25Gb3JtLnRleHRDb250ZW50ID0gJ1NlbmQgTm93JztcbiAgaW1nRm9ybS5zcmMgPSBjb2ZmZWVpbWc7XG5cbiAgZm9ybU5hbWUuaW5uZXJIVE1MID0gYDxzcGFuPk5hbWU6IDwvc3Bhbj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIj5gO1xuICBmb3JtRW1haWwuaW5uZXJIVE1MID0gYCA8c3Bhbj5FLW1haWw6IDwvc3Bhbj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIj5gO1xuICBmb3JtVGV4dC5pbm5lckhUTUwgPSBgPHNwYW4+TWVzc2FnZTogPC9zcGFuPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiPmA7XG59O1xuXG5leHBvcnQgZGVmYXVsdCAocmVuZGVyQ29udGFjdCk7XG4iLCJpbXBvcnQgY29mZmVlaW1nIGZyb20gJy4vYXNzZXRzL2NvZmZlZXMucG5nJztcblxuY29uc3QgcmVuZGVySG9tZSA9IChob21lbGluaywgbWVudWxpbmssIGNvbnRhY3RsaW5rKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG4gIGNvbnN0IHdyYXB0b3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgd3JhcHRvcC5jbGFzc0xpc3QuYWRkKCd3cmFwdG9wJyk7XG5cbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gIGNvbnN0IGgySGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICBjb25zdCBsaTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY29uc3QgbGkyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgY29uc3QgbGkzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgY29uc3QgbGk0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKHdyYXB0b3ApO1xuICB3cmFwdG9wLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChoMkhlYWRlcik7XG4gIGhlYWRlci5hcHBlbmRDaGlsZCh1bCk7XG4gIHVsLmFwcGVuZENoaWxkKGxpMSk7XG4gIHVsLmFwcGVuZENoaWxkKGxpMik7XG4gIHVsLmFwcGVuZENoaWxkKGxpMyk7XG4gIHVsLmFwcGVuZENoaWxkKGxpNCk7XG4gIGxpMS5hcHBlbmRDaGlsZChidG4pO1xuXG4gIGgySGVhZGVyLmlubmVySFRNTCA9IGA8c3BhbiBjbGFzcz1cImljb25pZnlcIiBkYXRhLWlubGluZT1cImZhbHNlXCIgZGF0YS1pY29uPVwibm90by1ob3QtYmV2ZXJhZ2VcIiBzdHlsZT1cImZvbnQtc2l6ZTogMzBweDtcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICBDb2ZmZWUgV2F5YDtcbiAgYnRuLnRleHRDb250ZW50ID0gJ0Jvb2sgbm93JztcbiAgbGkyLnRleHRDb250ZW50ID0gJ0NvbnRhY3QgdXMnO1xuICBsaTMudGV4dENvbnRlbnQgPSAnTWVudSc7XG4gIGxpNC50ZXh0Q29udGVudCA9ICdIb21lJztcblxuICBsaTQuc3R5bGUuZm9udFNpemUgPSAnMjBweCc7XG4gIGxpNC5zdHlsZS5mb250V2VpZ2h0ID0gJ2JvbGQnO1xuXG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gIGNvbnN0IGxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbGVmdC5jbGFzc0xpc3QuYWRkKCdsZWZ0Jyk7XG4gIGNvbnN0IGgyTWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGNvbnN0IHNwYW5NYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBjb25zdCBidG5NYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNvbnN0IHJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHJpZ2h0LmNsYXNzTGlzdC5hZGQoJ3JpZ2h0Jyk7XG4gIGNvbnN0IGNvZmZlZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXG4gIHdyYXB0b3AuYXBwZW5kQ2hpbGQobWFpbik7XG4gIG1haW4uYXBwZW5kQ2hpbGQobGVmdCk7XG4gIGxlZnQuYXBwZW5kQ2hpbGQoaDJNYWluKTtcbiAgbGVmdC5hcHBlbmRDaGlsZChzcGFuTWFpbik7XG4gIGxlZnQuYXBwZW5kQ2hpbGQoYnRuTWFpbik7XG4gIG1haW4uYXBwZW5kQ2hpbGQocmlnaHQpO1xuICByaWdodC5hcHBlbmRDaGlsZChjb2ZmZWUpO1xuXG4gIGgyTWFpbi5pbm5lckhUTUwgPSBgWW91ciBGYXZvcml0ZSBDb2ZmZWUgPGJyPlxuICAgICAgICAgICAgICBEZWxpdmVyZWQgSG90ICYgPGJyPlxuICAgICAgICAgICAgICBGcmVzaGA7XG4gIHNwYW5NYWluLnRleHRDb250ZW50ID0gJ0RlbGljaW91cyBhbmQgZmFzdCBzZXJ2aWNlJztcbiAgYnRuTWFpbi50ZXh0Q29udGVudCA9ICdPcmRlciBub3cnO1xuICBjb2ZmZWUuc3JjID0gY29mZmVlaW1nO1xuXG4gIGNvbnN0IGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBib3hEZXNjMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBib3hEZXNjMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBib3hEZXNjMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIGJveC5jbGFzc0xpc3QuYWRkKCdib3gnKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChib3gpO1xuXG4gIGNvbnN0IGNsZWFuID0gKCkgPT4ge1xuICAgIHdyYXB0b3AucmVtb3ZlKCk7XG4gICAgYm94LnJlbW92ZSgpO1xuICB9O1xuXG4gIGxpMy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjbGVhbigpO1xuICAgIG1lbnVsaW5rKGhvbWVsaW5rLCBtZW51bGluaywgY29udGFjdGxpbmspO1xuICB9KTtcblxuICBsaTIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY2xlYW4oKTtcbiAgICBjb250YWN0bGluayhob21lbGluaywgbWVudWxpbmssIGNvbnRhY3RsaW5rKTtcbiAgfSk7XG5cbiAgYm94RGVzYzEuY2xhc3NMaXN0LmFkZCgnYm94LWRlc2MnKTtcbiAgYm94LmFwcGVuZENoaWxkKGJveERlc2MxKTtcbiAgYm94RGVzYzIuY2xhc3NMaXN0LmFkZCgnYm94LWRlc2MnKTtcbiAgYm94LmFwcGVuZENoaWxkKGJveERlc2MyKTtcbiAgYm94RGVzYzMuY2xhc3NMaXN0LmFkZCgnYm94LWRlc2MnKTtcbiAgYm94LmFwcGVuZENoaWxkKGJveERlc2MzKTtcblxuICBib3hEZXNjMS5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9XCJpY29uaWZ5XCIgZGF0YS1pbmxpbmU9XCJmYWxzZVwiIGRhdGEtaWNvbj1cImJpOmNsb2NrLWZpbGxcIiBzdHlsZT1cImNvbG9yOiAjRjVBMDBGOyBmb250LXNpemU6IDQwcHg7XCI+PC9zcGFuPlxuICA8aDI+VG9kYXkgODowMCAtIDIwOjAwPC9oMj5cbiAgPHNwYW4+V29ya2luZyBob3Vyczwvc3Bhbj5gO1xuICBib3hEZXNjMi5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9XCJpY29uaWZ5XCIgZGF0YS1pbmxpbmU9XCJmYWxzZVwiIGRhdGEtaWNvbj1cInZhYWRpbjpsb2NhdGlvbi1hcnJvdy1jaXJjbGVcIiBzdHlsZT1cImNvbG9yOiAjRjVBMDBGOyBmb250LXNpemU6IDQwcHg7XCI+PC9zcGFuPlxuICA8aDI+UmFuZG9tIHN0cmVldCAzMDA8L2gyPlxuICA8c3Bhbj5HZXQgZGlyZWN0aW9uczwvc3Bhbj5gO1xuICBib3hEZXNjMy5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9XCJpY29uaWZ5XCIgZGF0YS1pbmxpbmU9XCJmYWxzZVwiIGRhdGEtaWNvbj1cImVsOnBob25lLWFsdFwiIHN0eWxlPVwiY29sb3I6ICNGNUEwMEY7IGZvbnQtc2l6ZTogNDBweDtcIj48L3NwYW4+XG4gIDxoMj4rNTcgKDMxNikgMjUxIDU1IDI2PC9oMj5cbiAgPHNwYW4+Q2FsbCBPbmxpbmU8L3NwYW4+YDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IChyZW5kZXJIb21lKTtcbiIsImltcG9ydCBjb2ZmZWUyIGZyb20gJy4vYXNzZXRzL2NvZmZlZTItY2FwdWNjaW5vLnBuZyc7XG5pbXBvcnQgY29mZmVlMyBmcm9tICcuL2Fzc2V0cy9jb2ZmZWUzLWFtZXJpY2Fuby5wbmcnO1xuaW1wb3J0IGNvZmZlZTQgZnJvbSAnLi9hc3NldHMvY29mZmVlNC1lc3ByZXNzby5wbmcnO1xuaW1wb3J0IGNvZmZlZTUgZnJvbSAnLi9hc3NldHMvY29mZmVlNS1tYWNjaGlhdG8ucG5nJztcbmltcG9ydCBjb2ZmZWU2IGZyb20gJy4vYXNzZXRzL2NvZmZlZTYtbW9jaGEucG5nJztcbmltcG9ydCBjb2ZmZWU3IGZyb20gJy4vYXNzZXRzL2NvZmZlZTctbGF0dGUucG5nJztcblxuY29uc3QgcmVuZGVyTWVudSA9IChob21lbGluaywgbWVudWxpbmssIGNvbnRhY3RsaW5rKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICBjb25zdCBoMkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgY29uc3QgbGkxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNvbnN0IGxpMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnN0IGxpMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnN0IGxpNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoaDJIZWFkZXIpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQodWwpO1xuICB1bC5hcHBlbmRDaGlsZChsaTEpO1xuICB1bC5hcHBlbmRDaGlsZChsaTIpO1xuICB1bC5hcHBlbmRDaGlsZChsaTMpO1xuICB1bC5hcHBlbmRDaGlsZChsaTQpO1xuICBsaTEuYXBwZW5kQ2hpbGQoYnRuKTtcblxuICBoMkhlYWRlci5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9XCJpY29uaWZ5XCIgZGF0YS1pbmxpbmU9XCJmYWxzZVwiIGRhdGEtaWNvbj1cIm5vdG8taG90LWJldmVyYWdlXCIgc3R5bGU9XCJmb250LXNpemU6IDMwcHg7XCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIENvZmZlZSBXYXlgO1xuICBidG4udGV4dENvbnRlbnQgPSAnQm9vayBub3cnO1xuICBsaTIudGV4dENvbnRlbnQgPSAnQ29udGFjdCB1cyc7XG4gIGxpMy50ZXh0Q29udGVudCA9ICdNZW51JztcbiAgbGk0LnRleHRDb250ZW50ID0gJ0hvbWUnO1xuXG4gIGxpMy5zdHlsZS5mb250U2l6ZSA9ICcyMHB4JztcbiAgbGkzLnN0eWxlLmZvbnRXZWlnaHQgPSAnYm9sZCc7XG4gIGJ0bi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2Y1YTAwZic7XG4gIGJ0bi5zdHlsZS5jb2xvciA9ICd3aGl0ZSc7XG5cbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtZW51LmNsYXNzTGlzdCA9ICdtZW51JztcbiAgY29uc3QgbWVudURlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWVudURlc2MuY2xhc3NMaXN0ID0gJ21lbnUtZGVzYyc7XG4gIGNvbnN0IGgyTWVudURlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBjb25zdCBtZW51TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtZW51TGlzdC5jbGFzc0xpc3QgPSAnbWVudS1saXN0JztcblxuICBjb250ZW50LmFwcGVuZENoaWxkKG1lbnUpO1xuICBtZW51LmFwcGVuZENoaWxkKG1lbnVEZXNjKTtcbiAgbWVudURlc2MuYXBwZW5kQ2hpbGQoaDJNZW51RGVzYyk7XG4gIG1lbnUuYXBwZW5kQ2hpbGQobWVudUxpc3QpO1xuXG4gIGNvbnN0IGNsZWFuID0gKCkgPT4ge1xuICAgIGhlYWRlci5yZW1vdmUoKTtcbiAgICBtZW51LnJlbW92ZSgpO1xuICB9O1xuXG4gIGxpNC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjbGVhbigpO1xuICAgIGhvbWVsaW5rKGhvbWVsaW5rLCBtZW51bGluaywgY29udGFjdGxpbmspO1xuICB9KTtcblxuICBsaTIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY2xlYW4oKTtcbiAgICBjb250YWN0bGluayhob21lbGluaywgbWVudWxpbmssIGNvbnRhY3RsaW5rKTtcbiAgfSk7XG5cbiAgaDJNZW51RGVzYy50ZXh0Q29udGVudCA9ICdFeHBsb3JlIG91ciBiZXN0IE1lbnUnO1xuXG4gIGNvbnN0IG1lbnVpdGVtMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtZW51aXRlbTEuY2xhc3NMaXN0ID0gJ21lbnVpdGVtJztcbiAgY29uc3QgbWVudWl0ZW0yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1lbnVpdGVtMi5jbGFzc0xpc3QgPSAnbWVudWl0ZW0nO1xuICBjb25zdCBtZW51aXRlbTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWVudWl0ZW0zLmNsYXNzTGlzdCA9ICdtZW51aXRlbSc7XG4gIGNvbnN0IG1lbnVpdGVtNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtZW51aXRlbTQuY2xhc3NMaXN0ID0gJ21lbnVpdGVtJztcbiAgY29uc3QgbWVudWl0ZW01ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1lbnVpdGVtNS5jbGFzc0xpc3QgPSAnbWVudWl0ZW0nO1xuICBjb25zdCBtZW51aXRlbTYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWVudWl0ZW02LmNsYXNzTGlzdCA9ICdtZW51aXRlbSc7XG5cbiAgbWVudUxpc3QuYXBwZW5kQ2hpbGQobWVudWl0ZW0xKTtcbiAgbWVudUxpc3QuYXBwZW5kQ2hpbGQobWVudWl0ZW0yKTtcbiAgbWVudUxpc3QuYXBwZW5kQ2hpbGQobWVudWl0ZW0zKTtcbiAgbWVudUxpc3QuYXBwZW5kQ2hpbGQobWVudWl0ZW00KTtcbiAgbWVudUxpc3QuYXBwZW5kQ2hpbGQobWVudWl0ZW01KTtcbiAgbWVudUxpc3QuYXBwZW5kQ2hpbGQobWVudWl0ZW02KTtcblxuICBtZW51aXRlbTEuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJpdGVtLWltZ1wiPlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7Y29mZmVlMn1cIiBhbHQ9XCJcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW0tZGVzY1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVudS1wcmljZVwiPlxuICAgICAgICAgICAgICAgIDxoMj5DYXB1Y2Npbm88L2gyPlxuICAgICAgICAgICAgICAgIDxoMj4yLjk5JDwvaDI+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgV2hldGhlciB5b3UgY2hvb3NlIGEgY3VwIG9yIGEgbXVnLCB5b3UganVzdCBjYW4ndCBiZWF0IHRoZSB0YXN0ZSBvZiBUaGUgQ29mZmVlIFdheSdzIGNhcHB1Y2Npbm8uIEEgc2hvdCBvZiBlc3ByZXNzbyB3aXRoIHRleHR1cmVkIG1pbGsgcG91cmVkIGltbWVkaWF0ZWx5LCByZXN1bHRpbmcgaW4gdGhlIG1pbGsgY3JlbWEgc2VwYXJhdGluZyBpbiB0aGUgY3VwLlxuICAgICAgICAgICAgICBUaGlzIGNyZWFteSB0cmFkaXRpb25hbCBjb2ZmZWUgaXMgdGhlbiBnYXJuaXNoZWQgd2l0aCBhIGxpZ2h0IGR1c3Rpbmcgb2YgY2hvY29sYXRlXG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW0tY2FsXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtY2FsaWZpY2F0aW9uXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb25pZnlcIiBkYXRhLWlubGluZT1cImZhbHNlXCIgZGF0YS1pY29uPVwiYmk6c3Rhci1maWxsXCIgc3R5bGU9XCJjb2xvcjogI0Y1QTAwRjsgZm9udC1zaXplOiAyMHB4O1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbmlmeVwiIGRhdGEtaW5saW5lPVwiZmFsc2VcIiBkYXRhLWljb249XCJiaTpzdGFyLWZpbGxcIiBzdHlsZT1cImNvbG9yOiAjRjVBMDBGOyBmb250LXNpemU6IDIwcHg7XCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uaWZ5XCIgZGF0YS1pbmxpbmU9XCJmYWxzZVwiIGRhdGEtaWNvbj1cImJpOnN0YXItZmlsbFwiIHN0eWxlPVwiY29sb3I6ICNGNUEwMEY7IGZvbnQtc2l6ZTogMjBweDtcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb25pZnlcIiBkYXRhLWlubGluZT1cImZhbHNlXCIgZGF0YS1pY29uPVwiYmk6c3Rhci1maWxsXCIgc3R5bGU9XCJjb2xvcjogI0Y1QTAwRjsgZm9udC1zaXplOiAyMHB4O1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbmlmeVwiIGRhdGEtaW5saW5lPVwiZmFsc2VcIiBkYXRhLWljb249XCJiaTpzdGFyLWZpbGxcIiBzdHlsZT1cImNvbG9yOiAjRjVBMDBGOyBmb250LXNpemU6IDIwcHg7XCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhZGQtaXRlbVwiPiArIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PmA7XG5cbiAgbWVudWl0ZW0yLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwiaXRlbS1pbWdcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjID0gXCIke2NvZmZlZTN9XCIgYWx0ID0gXCJcIj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbS1kZXNjXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtcHJpY2VcIj5cbiAgICAgICAgICA8aDI+QW1lcmljYW5vPC9oMj5cbiAgICAgICAgICA8aDI+Mi40OSQ8L2gyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICBBIGNsYXNzaWMgbG9uZyBibGFjayBjb2ZmZWUgd2l0aCBUaGUgQ29mZmVlIFdheSdzIFNpZ25hdHVyZSBCbGVuZC4gQXMgeW91J2QgZXhwZWN0LCBpdCdzIHRvcHBlZCB3aXRoIHRoZSBzbW9vdGhlc3QgZXNwcmVzc28gY3JlbWEgYXJvdW5kLlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW0tY2FsXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LWNhbGlmaWNhdGlvblwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbmlmeVwiIGRhdGEtaW5saW5lPVwiZmFsc2VcIiBkYXRhLWljb249XCJiaTpzdGFyLWZpbGxcIiBzdHlsZT1cImNvbG9yOiAjRjVBMDBGOyBmb250LXNpemU6IDIwcHg7XCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbmlmeVwiIGRhdGEtaW5saW5lPVwiZmFsc2VcIiBkYXRhLWljb249XCJiaTpzdGFyLWZpbGxcIiBzdHlsZT1cImNvbG9yOiAjRjVBMDBGOyBmb250LXNpemU6IDIwcHg7XCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbmlmeVwiIGRhdGEtaW5saW5lPVwiZmFsc2VcIiBkYXRhLWljb249XCJiaTpzdGFyLWZpbGxcIiBzdHlsZT1cImNvbG9yOiAjRjVBMDBGOyBmb250LXNpemU6IDIwcHg7XCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbmlmeVwiIGRhdGEtaW5saW5lPVwiZmFsc2VcIiBkYXRhLWljb249XCJiaTpzdGFyLWZpbGxcIiBzdHlsZT1cImNvbG9yOiAjRjVBMDBGOyBmb250LXNpemU6IDIwcHg7XCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbmlmeVwiIGRhdGEtaW5saW5lPVwiZmFsc2VcIiBkYXRhLWljb249XCJiaTpzdGFyLWhhbGZcIiBzdHlsZT1cImNvbG9yOiAjRjVBMDBGOyBmb250LXNpemU6IDIwcHg7XCI+PC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFkZC1pdGVtXCI+ICsgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5gO1xuXG4gIG1lbnVpdGVtMy5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cIml0ZW0taW1nXCI+XG4gICAgICAgICAgICA8aW1nIHNyYyA9IFwiJHtjb2ZmZWU0fVwiIGFsdCA9IFwiXCI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW0tZGVzY1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtcHJpY2VcIj5cbiAgICAgICAgICAgICAgPGgyPkVzcHJlc3NvPC9oMj5cbiAgICAgICAgICAgICAgPGgyPjIuNDkkPC9oMj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgT3VyIHNpZ25hdHVyZSBkYXJrIHJvYXN0IGJsZW5kIGNvbWJpbmVzIGRhcmsgY2hvY29sYXRlIHdpdGggYSBoYXJkIGJvZHkgYW5kIHJpY2ggc21va3kgYWNjZW50cy5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtLWNhbFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVudS1jYWxpZmljYXRpb25cIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb25pZnlcIiBkYXRhLWlubGluZT1cImZhbHNlXCIgZGF0YS1pY29uPVwiYmk6c3Rhci1maWxsXCIgc3R5bGU9XCJjb2xvcjogI0Y1QTAwRjsgZm9udC1zaXplOiAyMHB4O1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb25pZnlcIiBkYXRhLWlubGluZT1cImZhbHNlXCIgZGF0YS1pY29uPVwiYmk6c3Rhci1maWxsXCIgc3R5bGU9XCJjb2xvcjogI0Y1QTAwRjsgZm9udC1zaXplOiAyMHB4O1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb25pZnlcIiBkYXRhLWlubGluZT1cImZhbHNlXCIgZGF0YS1pY29uPVwiYmk6c3Rhci1maWxsXCIgc3R5bGU9XCJjb2xvcjogI0Y1QTAwRjsgZm9udC1zaXplOiAyMHB4O1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb25pZnlcIiBkYXRhLWlubGluZT1cImZhbHNlXCIgZGF0YS1pY29uPVwiYmk6c3Rhci1maWxsXCIgc3R5bGU9XCJjb2xvcjogI0Y1QTAwRjsgZm9udC1zaXplOiAyMHB4O1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb25pZnlcIiBkYXRhLWlubGluZT1cImZhbHNlXCIgZGF0YS1pY29uPVwiYmk6c3Rhci1maWxsXCIgc3R5bGU9XCJjb2xvcjogI0Y1QTAwRjsgZm9udC1zaXplOiAyMHB4O1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhZGQtaXRlbVwiPiArIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+YDtcblxuICBtZW51aXRlbTQuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJpdGVtLWltZ1wiPlxuICAgICAgICAgICAgPGltZyBzcmMgPSBcIiR7Y29mZmVlNX1cIiBhbHQgPSBcIlwiPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtLWRlc2NcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LXByaWNlXCI+XG4gICAgICAgICAgICAgIDxoMj5NYWNjaGlhdG88L2gyPlxuICAgICAgICAgICAgICA8aDI+Mi45OSQ8L2gyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgIEEgY2xhc3NpYyBzaG9ydCBibGFjayBlc3ByZXNzbyB3aXRoIGEgZG9sbG9wIG9mIG1pbGsgY3JlbWEgdG8gbWFrZSB0aGUgc21vb3RoZXN0IHNob3J0IGJsYWNrIGV2ZW4gc21vb3RoZXIuIFlvdSBjYW4gYWxzbyBhc2sgZm9yIGEgbG9uZyBtYWNjaGlhdG9cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtLWNhbFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVudS1jYWxpZmljYXRpb25cIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb25pZnlcIiBkYXRhLWlubGluZT1cImZhbHNlXCIgZGF0YS1pY29uPVwiYmk6c3Rhci1maWxsXCIgc3R5bGU9XCJjb2xvcjogI0Y1QTAwRjsgZm9udC1zaXplOiAyMHB4O1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb25pZnlcIiBkYXRhLWlubGluZT1cImZhbHNlXCIgZGF0YS1pY29uPVwiYmk6c3Rhci1maWxsXCIgc3R5bGU9XCJjb2xvcjogI0Y1QTAwRjsgZm9udC1zaXplOiAyMHB4O1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb25pZnlcIiBkYXRhLWlubGluZT1cImZhbHNlXCIgZGF0YS1pY29uPVwiYmk6c3Rhci1maWxsXCIgc3R5bGU9XCJjb2xvcjogI0Y1QTAwRjsgZm9udC1zaXplOiAyMHB4O1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb25pZnlcIiBkYXRhLWlubGluZT1cImZhbHNlXCIgZGF0YS1pY29uPVwiYmk6c3Rhci1maWxsXCIgc3R5bGU9XCJjb2xvcjogI0Y1QTAwRjsgZm9udC1zaXplOiAyMHB4O1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb25pZnlcIiBkYXRhLWlubGluZT1cImZhbHNlXCIgZGF0YS1pY29uPVwiYmk6c3Rhci1oYWxmXCIgc3R5bGU9XCJjb2xvcjogI0Y1QTAwRjsgZm9udC1zaXplOiAyMHB4O1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhZGQtaXRlbVwiPiArIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+YDtcblxuICBtZW51aXRlbTUuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJpdGVtLWltZ1wiPlxuICAgICAgICAgICAgPGltZyBzcmMgPSBcIiR7Y29mZmVlNn1cIiBhbHQgPSBcIlwiPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtLWRlc2NcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LXByaWNlXCI+XG4gICAgICAgICAgICAgIDxoMj5Nb2NoYTwvaDI+XG4gICAgICAgICAgICAgIDxoMj4zLjQ5JDwvaDI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgVGhlIG1vY2hhIGlzIGEgc3VwZXJiIG1peCBvZiBlc3ByZXNzbyBhbmQgY2hvY29sYXRlIHdpdGggYWRkZWQgY3JlYW15IHRleHR1cmUgbWlsayBhbmQgZ2FybmlzaGVkIHdpdGggY2hvY29sYXRlIHBvd2Rlci5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtLWNhbFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVudS1jYWxpZmljYXRpb25cIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb25pZnlcIiBkYXRhLWlubGluZT1cImZhbHNlXCIgZGF0YS1pY29uPVwiYmk6c3Rhci1maWxsXCIgc3R5bGU9XCJjb2xvcjogI0Y1QTAwRjsgZm9udC1zaXplOiAyMHB4O1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb25pZnlcIiBkYXRhLWlubGluZT1cImZhbHNlXCIgZGF0YS1pY29uPVwiYmk6c3Rhci1maWxsXCIgc3R5bGU9XCJjb2xvcjogI0Y1QTAwRjsgZm9udC1zaXplOiAyMHB4O1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb25pZnlcIiBkYXRhLWlubGluZT1cImZhbHNlXCIgZGF0YS1pY29uPVwiYmk6c3Rhci1maWxsXCIgc3R5bGU9XCJjb2xvcjogI0Y1QTAwRjsgZm9udC1zaXplOiAyMHB4O1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb25pZnlcIiBkYXRhLWlubGluZT1cImZhbHNlXCIgZGF0YS1pY29uPVwiYmk6c3Rhci1maWxsXCIgc3R5bGU9XCJjb2xvcjogI0Y1QTAwRjsgZm9udC1zaXplOiAyMHB4O1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb25pZnlcIiBkYXRhLWlubGluZT1cImZhbHNlXCIgZGF0YS1pY29uPVwiYmk6c3Rhci1maWxsXCIgc3R5bGU9XCJjb2xvcjogI0Y1QTAwRjsgZm9udC1zaXplOiAyMHB4O1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhZGQtaXRlbVwiPiArIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+YDtcblxuICBtZW51aXRlbTYuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJpdGVtLWltZ1wiPlxuICAgICAgICAgICAgPGltZyBzcmMgPSBcIiR7Y29mZmVlN31cIiBhbHQgPSBcIlwiPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtLWRlc2NcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LXByaWNlXCI+XG4gICAgICAgICAgICAgIDxoMj5MYXR0ZTwvaDI+XG4gICAgICAgICAgICAgIDxoMj4zLjk5JDwvaDI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgVHJhZGl0aW9uYWwgZXNwcmVzc28gd2l0aCB0ZXh0dXJlZCBtaWxrICgnbGF0dGUnIG1lYW5zIG1pbGspIGFuZCBhIGRlbGljYXRlIGxheWVyIG9mIG1pbGsgY3JlbWEgb24gdG9wLiBUaGUgZmxhdm91ciBpcyBzbGlnaHRseSBtaWxkZXIgdGhhbiBhIGZsYXQgd2hpdGUgYXMgYSBncmVhdGVyIHZvbHVtZSBvZiB0ZXh0dXJlZCBtaWxrIGlzIGFkZGVkLlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW0tY2FsXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LWNhbGlmaWNhdGlvblwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbmlmeVwiIGRhdGEtaW5saW5lPVwiZmFsc2VcIiBkYXRhLWljb249XCJiaTpzdGFyLWZpbGxcIiBzdHlsZT1cImNvbG9yOiAjRjVBMDBGOyBmb250LXNpemU6IDIwcHg7XCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbmlmeVwiIGRhdGEtaW5saW5lPVwiZmFsc2VcIiBkYXRhLWljb249XCJiaTpzdGFyLWZpbGxcIiBzdHlsZT1cImNvbG9yOiAjRjVBMDBGOyBmb250LXNpemU6IDIwcHg7XCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbmlmeVwiIGRhdGEtaW5saW5lPVwiZmFsc2VcIiBkYXRhLWljb249XCJiaTpzdGFyLWZpbGxcIiBzdHlsZT1cImNvbG9yOiAjRjVBMDBGOyBmb250LXNpemU6IDIwcHg7XCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbmlmeVwiIGRhdGEtaW5saW5lPVwiZmFsc2VcIiBkYXRhLWljb249XCJiaTpzdGFyLWZpbGxcIiBzdHlsZT1cImNvbG9yOiAjRjVBMDBGOyBmb250LXNpemU6IDIwcHg7XCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbmlmeVwiIGRhdGEtaW5saW5lPVwiZmFsc2VcIiBkYXRhLWljb249XCJiaTpzdGFyLWhhbGZcIiBzdHlsZT1cImNvbG9yOiAjRjVBMDBGOyBmb250LXNpemU6IDIwcHg7XCI+PC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFkZC1pdGVtXCI+ICsgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5gO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgKHJlbmRlck1lbnUpO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiXG5pbXBvcnQgcmVuZGVySG9tZSBmcm9tICcuL2hvbWUnO1xuaW1wb3J0IHJlbmRlck1lbnUgZnJvbSAnLi9tZW51JztcbmltcG9ydCByZW5kZXJDb250YWN0IGZyb20gJy4vY29udGFjdCc7XG5cbnJlbmRlckhvbWUocmVuZGVySG9tZSwgcmVuZGVyTWVudSwgcmVuZGVyQ29udGFjdCk7XG4iXSwic291cmNlUm9vdCI6IiJ9