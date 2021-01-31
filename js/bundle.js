/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/modules/burger.js":
/*!******************************!*\
  !*** ./js/modules/burger.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const burger = document.querySelector(".burger"),
      nav = document.querySelector(".header__links");

burger.addEventListener("click", (e) => {
  if (nav.classList.contains("nav-active")) {
    closeBurger();
  } else {
    showBurger();
  }
});

function showBurger() {
  nav.classList.add("nav-active");
  burger.classList.add("toggle");
}

function closeBurger() {
  nav.classList.remove("nav-active");
  burger.classList.remove("toggle");
}



document.addEventListener("keydown", (e) => {
  if (e.code === "Escape" && nav.classList.contains("nav-active")) {
    closeBurger();
  }
});

/* harmony default export */ __webpack_exports__["default"] = (showBurger);


/***/ }),

/***/ "./js/modules/calc.js":
/*!****************************!*\
  !*** ./js/modules/calc.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function calc () {
   // calc

   const result = document.querySelector(".calculating__result span");
   let sex, height, weight, age, ratio;

   
   if (localStorage.getItem("sex")) {
     sex = localStorage.getItem("sex");
   } else {
     sex = "female";
     localStorage.setItem("sex", "female");
   }
 
   if (localStorage.getItem("ratio")) {
     ratio = localStorage.getItem("ratio");
   } else {
     ratio = 1.375;
     localStorage.setItem("ratio", 1.375);
   }
 
   function initLocalSettings(selector, activeClass) {
     const elements = document.querySelectorAll(selector);
 
     elements.forEach((elem) => {
       elem.classList.remove(activeClass);
       if (elem.getAttribute("id") === localStorage.getItem("sex")) {
         elem.classList.add(activeClass);
       }
       if (elem.getAttribute("data-ratio") === localStorage.getItem("ratio")) {
         elem.classList.add(activeClass);
       }
     });
   }
   initLocalSettings("#gender div", "calculating__choose-item_active");
   initLocalSettings(
     ".calculating__choose_big div",
     "calculating__choose-item_active"
   );
 
   function calcTotal() {
     if (!sex || !height || !weight || !age || !ratio) {
       result.textContent = "";
       return;
     }
     if (sex === "female") {
       result.textContent = Math.round(
         (447.6 + 9.2 * weight + 3.1 * height - 4.3 * age) * ratio
       );
     } else {
       result.textContent = Math.round(
         (88.36 + 13.4 * weight + 4.8 * height - 5.7 * age) * ratio
       );
     }
   }
   calcTotal();
 
   function getStaticInformation(selector, activeClass) {
     const elements = document.querySelectorAll(selector);
 
     elements.forEach((elem) => {
       elem.addEventListener("click", (e) => {
         if (e.target.getAttribute("data-ratio")) {
           ratio = +e.target.getAttribute("data-ratio");
           localStorage.setItem("ratio", +e.target.getAttribute("data-ratio"));
         } else {
           sex = e.target.getAttribute("id");
           localStorage.setItem("sex", e.target.getAttribute("id"));
         }
 
         elements.forEach((elem) => {
           elem.classList.remove(activeClass);
         });
         e.target.classList.add(activeClass);
         calcTotal();
       });
     });
   }
   getStaticInformation("#gender div", "calculating__choose-item_active");
   getStaticInformation(
     ".calculating__choose_big div",
     "calculating__choose-item_active"
   );
 
   function getDynamicInformation(selector) {
     const input = document.querySelector(selector);
 
     input.addEventListener("input", () => {
       if (input.value.match(/\D/g)) {
         input.style.border = "1px solid red";
         input.style.boxShadow = "-2px 2px 10px red";
       } else {
         input.style.border = "none";
         input.style.boxShadow = "";
       }
 
       switch (input.getAttribute("id")) {
         case "height":
           height = +input.value;
           localStorage.setItem("height", +input.value);
           break;
         case "weight":
           weight = +input.value;
           localStorage.setItem("weight", +input.value);
 
           break;
         case "age":
           age = +input.value;
           localStorage.setItem("age", +input.value);
 
           break;
       }
       calcTotal();
     });
   }
   getDynamicInformation("#height");
   getDynamicInformation("#weight");
   getDynamicInformation("#age");
}
/* harmony default export */ __webpack_exports__["default"] = (calc);

/***/ }),

/***/ "./js/modules/cards.js":
/*!*****************************!*\
  !*** ./js/modules/cards.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");



function cards() {
  
  // Используем классы для создание карточек меню

  class MenuCard {
    constructor(src, alt, title, descr, price, parentSelector, ...classes) {
      this.src = src;
      this.alt = alt;
      this.title = title;
      this.descr = descr;
      this.price = price;
      this.classes = classes;
      this.parent = document.querySelector(parentSelector);
      this.transfer = 3,73 ;
      this.changeToPL();
    }

    changeToPL() {
      this.price = this.price * this.transfer;
    }

    render() {
      const element = document.createElement("div");

      if (this.classes.length === 0) {
        this.classes = "menu__item";
        element.classList.add(this.classes);
      } else {
        this.classes.forEach((className) => element.classList.add(className));
      }

      element.innerHTML = `
              <img src=${this.src} alt=${this.alt}>
              <h3 class="menu__item-subtitle">${this.title}</h3>
              <div class="menu__item-descr">${this.descr}</div>
              <div class="menu__item-divider"></div>
              <div class="menu__item-price">
                  <div class="menu__item-cost">Price:</div>
                  <div class="menu__item-total">
                  <span>${this.price}</span>
                  PL / day
                   </div>
              </div> 
          `;
      this.parent.append(element);
    }
  }
  

  Object(_services_services__WEBPACK_IMPORTED_MODULE_0__["getResource"])("  http://localhost:3000/menu").then((data) => {
    data.forEach(({ img, altimg, title, descr, price }) => {
      new MenuCard(
        img,
        altimg,
        title,
        descr,
        price,
        ".menu .menu__container"
      ).render();
    });
  });

}

/* harmony default export */ __webpack_exports__["default"] = (cards);

/***/ }),

/***/ "./js/modules/forms.js":
/*!*****************************!*\
  !*** ./js/modules/forms.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./js/modules/modal.js");
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");



function forms(formSelector, modalTimerId) {
   // Forms 

   const forms = document.querySelectorAll("formSelector");
   const message = {
     loading: "img/form/spinner.svg",
     success: "Спасибо! Скоро мы с вами свяжемся",
     failure: "Что-то пошло не так...",
   };
 
   forms.forEach((item) => {
     bindPostData(item);
   });
 
 
   function bindPostData(form) {
     form.addEventListener("submit", (e) => {
       e.preventDefault();
 
       let statusMessage = document.createElement("img");
       statusMessage.src = message.loading;
       statusMessage.style.cssText = `
               display: block;
               margin: 0 auto;
           `;
       form.insertAdjacentElement("afterend", statusMessage);
 
       const formData = new FormData(form);
 
       const json = JSON.stringify(Object.fromEntries(formData.entries()));
 
       Object(_services_services__WEBPACK_IMPORTED_MODULE_1__["postData"])("http://localhost:3000/requests", json)
         .then((data) => {
           console.log(data);
           showThanksModal(message.success);
           statusMessage.remove();
         })
         .catch(() => {
           showThanksModal(message.failure);
         })
         .finally(() => {
           form.reset();
         });
     });
   }
 
   function showThanksModal(message) {
     const prevModalDialog = document.querySelector(".modal__dialog");
 
     prevModalDialog.classList.add("hide");
     Object(_modal__WEBPACK_IMPORTED_MODULE_0__["openModal"])(".modal", modalTimerId);
 
     const thanksModal = document.createElement("div");
     thanksModal.classList.add("modal__dialog");
     thanksModal.innerHTML = `
           <div class="modal__content">
               <div class="modal__close" data-close>×</div>
               <div class="modal__title">${message}</div>
           </div>
       `;
     document.querySelector(".modal").append(thanksModal);
     setTimeout(() => {
       thanksModal.remove();
       prevModalDialog.classList.add("show");
       prevModalDialog.classList.remove("hide");
       Object(_modal__WEBPACK_IMPORTED_MODULE_0__["closeModal"])(".modal");
     }, 4000);
   }
 
   fetch("http://localhost:3000/menu")
     .then((data) => data.json())
     .then((res) => console.log(res));
 
}

/* harmony default export */ __webpack_exports__["default"] = (forms);

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/*! exports provided: default, closeModal, openModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeModal", function() { return closeModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openModal", function() { return openModal; });
function closeModal(modalSelector) {
  const modal = document.querySelector(modalSelector);

  modal.classList.add("hide");
  modal.classList.remove("show");
  document.body.style.overflow = "";
}

function openModal(modalSelector, modalTimerId) {
  const modal = document.querySelector(modalSelector);

  modal.classList.add("show");
  modal.classList.remove("hide");
  document.body.style.overflow = "hidden";
  if (modalTimerId) {
    clearInterval(modalTimerId);
  }
}

function modal(triggerSelector, modalSelector, modalTimerId ) {
  const modalTrigger = document.querySelectorAll(triggerSelector),
    modal = document.querySelector(modalSelector);

  modalTrigger.forEach((btn) => {
    btn.addEventListener("click", () => openModal(modalSelector, modalTimerId ));
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal || e.target.getAttribute("data-close") == "") {
      closeModal(modalSelector);
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape" && modal.classList.contains("show")) {
      closeModal(modalSelector);
    }
  });


  function showModalByScroll() {
    if (
      window.pageYOffset + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight
    ) {
      openModal(modalSelector, modalTimerId);
      window.removeEventListener("scroll", showModalByScroll);
    }
  }
  window.addEventListener("scroll", showModalByScroll);
}
/* harmony default export */ __webpack_exports__["default"] = (modal);




/***/ }),

/***/ "./js/modules/parallax.js":
/*!********************************!*\
  !*** ./js/modules/parallax.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const parallaxItem1 = document.querySelectorAll(".parallax1");
const parallaxItem2 = document.querySelectorAll(".parallax2");
const parallaxItem3 = document.querySelectorAll(".parallax3");
const parallaxItem4 = document.querySelectorAll(".parallax4");
document.addEventListener("mousemove", parallax);
document.addEventListener("touchmove", parallax);

function parallax(event) {
  parallaxItem1.forEach((item) => {
    item.style.transform = `translate(${event.clientX / 100}px, ${
      event.clientY / 50
    }px)`;
  });
  parallaxItem2.forEach((item) => {
    item.style.transform = `translate(${event.clientX / 50}px, ${
      event.clientY / 100
    }px)`;
  });

  parallaxItem3.forEach((item) => {
    item.style.transform = `translate(${event.clientX / 30}px, ${
      event.clientY / 70
    }px)`;
  });
  parallaxItem4.forEach((item) => {
    item.style.transform = `translate(${event.clientX / 80}px, ${
      event.clientY / 20
    }px)`;
  });
}

/* harmony default export */ __webpack_exports__["default"] = (parallax);


/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function slider({ container, content, nextArrow, prevArrow }) {
  // slider

  const carousel = document.querySelector(container),
    images = document.querySelectorAll(content),
    arrowPrev = document.querySelector(prevArrow),
    arrowNext = document.querySelector(nextArrow),
    indicators = document.createElement("ol"),
    dots = [];

  let currentStart = 0;

  indicators.classList.add("carousel-indicators");

  carousel.style.position = "relative";
  carousel.append(indicators);

  for (let i = 0; i < images.length; i++) {
    const dot = document.createElement("li");
    dot.setAttribute("data-slide-to", i + 1);
    dot.classList.add("dot");
    if (i == 0) {
      dot.style.opacity = 1;
    }
    indicators.append(dot);
    dots.push(dot);
  }

  function dotsOpacity() {
    dots.forEach((dot) => (dot.style.opacity = "0.5"));
    dots[currentStart].style.opacity = 1;
  }

  function prev() {
    if (currentStart - 1 == -1) {
      currentStart = images.length - 1;
    } else {
      currentStart--;
    }
    slider();
  }

  function next() {
    if (currentStart + 1 == images.length) {
      currentStart = 0;
    } else {
      currentStart++;
    }
    slider();
  }

  arrowPrev.addEventListener("click", () => {
    prev();
    dotsOpacity();
  });

  arrowNext.addEventListener("click", () => {
    next();
    dotsOpacity();
  });

  function slider() {
    for (let i = 0; i < images.length; i++) {
      images[i].classList.add("hide");
    }
    images[currentStart].classList.remove("hide");

    if (images.length > 10) {
      document.querySelector(
        "#total"
      ).innerHTML = `<span id="total">${images.length}</span>`;
      document.querySelector("#current").innerHTML = `<span id="current">${
        currentStart + 1
      }</span>`;
    } else {
      document.querySelector(
        "#total"
      ).innerHTML = `<span id="total"> 0${images.length}</span>`;
      document.querySelector("#current").innerHTML = `<span id="current"> 0${
        currentStart + 1
      }</span>`;
    }
  }
  slider();

  dots.forEach((dot) => {
    dot.addEventListener("click", (e) => {
      const slideTo = e.target.getAttribute("data-slide-to");

      currentStart = slideTo;

      images.forEach((im) => im.classList.add("hide"));
      images[currentStart - 1].classList.remove("hide");

      if (images.length > 10) {
        document.querySelector(
          "#current"
        ).innerHTML = `<span id="current">${currentStart}</span>`;
      } else {
        document.querySelector(
          "#current"
        ).innerHTML = `<span id="current"> 0${currentStart}</span>`;
      }

      dots.forEach((dot) => (dot.style.opacity = "0.5"));
      dots[currentStart - 1].style.opacity = 1;
    });
  });
}

/* harmony default export */ __webpack_exports__["default"] = (slider);


/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function tabs( tabsSelector, tabsContentSelector, tabsParentSelector,  activeClass) {
  // Tabs

  let tabs = document.querySelectorAll(tabsSelector),
    tabsContent = document.querySelectorAll( tabsContentSelector),
    tabsParent = document.querySelector(tabsParentSelector);

  function hideTabContent() {
    tabsContent.forEach((item) => {
      item.classList.add("hide");
      item.classList.remove("show");
    });

    tabs.forEach((item) => {
      item.classList.remove(activeClass);
    });
  }

  function showTabContent(i = 0) {
    tabsContent[i].classList.add("show");
    tabsContent[i].classList.remove("hide");
    tabs[i].classList.add(activeClass);
  }

  hideTabContent();
  showTabContent();

  tabsParent.addEventListener("click", function (event) {
    const target = event.target;
    if (target && target.classList.contains(tabsSelector.slice(1))) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (tabs);

/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function timer(id, deadLine) { 
  function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date()),
      days = Math.floor(t / (1000 * 60 * 60 * 24)),
      seconds = Math.floor((t / 1000) % 60),
      minutes = Math.floor((t / 1000 / 60) % 60),
      hours = Math.floor((t / (1000 * 60 * 60)) % 24);

    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }

  function getZero(num) {
    if (num >= 0 && num < 10) {
      return "0" + num;
    } else {
      return num;
    }
  }

  function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
      days = timer.querySelector("#days"),
      hours = timer.querySelector("#hours"),
      minutes = timer.querySelector("#minutes"),
      seconds = timer.querySelector("#seconds"),
      timeInterval = setInterval(updateClock, 1000);

    updateClock();

    function updateClock() {
      const t = getTimeRemaining(endtime);

      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds);

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  setClock(id, deadLine);
}
/* harmony default export */ __webpack_exports__["default"] = (timer);


/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabs */ "./js/modules/tabs.js");
/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/calc */ "./js/modules/calc.js");
/* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/cards */ "./js/modules/cards.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/forms */ "./js/modules/forms.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/modal */ "./js/modules/modal.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/timer */ "./js/modules/timer.js");
/* harmony import */ var _modules_parallax__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/parallax */ "./js/modules/parallax.js");
/* harmony import */ var _modules_burger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/burger */ "./js/modules/burger.js");











window.addEventListener("DOMContentLoaded", function () {
  const modalTimerId = setTimeout(
    () => Object(_modules_modal__WEBPACK_IMPORTED_MODULE_4__["openModal"])(".modal", modalTimerId),
    3000000
  );

  

  Object(_modules_tabs__WEBPACK_IMPORTED_MODULE_0__["default"])(
    ".tabheader__item",
    ".tabcontent",
    ".tabheader__items",
    "tabheader__item_active"
  );
  Object(_modules_calc__WEBPACK_IMPORTED_MODULE_1__["default"])();
  Object(_modules_cards__WEBPACK_IMPORTED_MODULE_2__["default"])();
  Object(_modules_forms__WEBPACK_IMPORTED_MODULE_3__["default"])("form", modalTimerId);
  Object(_modules_modal__WEBPACK_IMPORTED_MODULE_4__["default"])("[data-modal]", ".modal", modalTimerId);
  Object(_modules_slider__WEBPACK_IMPORTED_MODULE_5__["default"])({
    container: ".offer__slider",
    nextArrow: ".next",
    prevArrow: ".prev",
    content: ".offer__slide",
  });
  Object(_modules_timer__WEBPACK_IMPORTED_MODULE_6__["default"])(".timer", "2021-06-11");
});


/***/ }),

/***/ "./js/services/services.js":
/*!*********************************!*\
  !*** ./js/services/services.js ***!
  \*********************************/
/*! exports provided: postData, getResource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postData", function() { return postData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResource", function() { return getResource; });
const postData = async (url, data) => {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: data,
  });
  return await res.json();
};

const getResource = async (url) => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`could not fetch ${url}, status: ${res.status}`);
  }

  return await res.json();
};





/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map