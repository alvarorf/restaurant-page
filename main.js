/******/ (() => { // webpackBootstrap
/******/ 	
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
