/*! For license information please see main.js.LICENSE.txt */
(()=>{var t={652:()=>{var t=new Swiper(".our-record__slider",{loop:!0,slidesPerView:6,centeredSlides:!0,spaceBetween:50,grabCursor:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{320:{slidesPerView:3,slidesPerColumn:3,slidesPerGroup:3,spaceBetween:30,grid:{rows:2}},480:{slidesPerView:4,slidesPerColumn:1,slidesPerGroup:1,centeredSlides:!1,loop:!1,grid:{rows:1}},640:{slidesPerView:6,spaceBetween:50}}}),e=document.querySelector(".our-record__arrows .main-arrows__arrow--left"),n=document.querySelector(".our-record__arrows .main-arrows__arrow--right");e.addEventListener("click",(function(){t.slidePrev()})),n.addEventListener("click",(function(){t.slideNext()}))},598:()=>{function t(t){var e=!0,n=!1,i=null,s={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function r(t){return!!(t&&t!==document&&"HTML"!==t.nodeName&&"BODY"!==t.nodeName&&"classList"in t&&"contains"in t.classList)}function o(t){t.classList.contains("focus-visible")||(t.classList.add("focus-visible"),t.setAttribute("data-focus-visible-added",""))}function a(t){e=!1}function u(){document.addEventListener("mousemove",c),document.addEventListener("mousedown",c),document.addEventListener("mouseup",c),document.addEventListener("pointermove",c),document.addEventListener("pointerdown",c),document.addEventListener("pointerup",c),document.addEventListener("touchmove",c),document.addEventListener("touchstart",c),document.addEventListener("touchend",c)}function c(t){t.target.nodeName&&"html"===t.target.nodeName.toLowerCase()||(e=!1,document.removeEventListener("mousemove",c),document.removeEventListener("mousedown",c),document.removeEventListener("mouseup",c),document.removeEventListener("pointermove",c),document.removeEventListener("pointerdown",c),document.removeEventListener("pointerup",c),document.removeEventListener("touchmove",c),document.removeEventListener("touchstart",c),document.removeEventListener("touchend",c))}document.addEventListener("keydown",(function(n){n.metaKey||n.altKey||n.ctrlKey||(r(t.activeElement)&&o(t.activeElement),e=!0)}),!0),document.addEventListener("mousedown",a,!0),document.addEventListener("pointerdown",a,!0),document.addEventListener("touchstart",a,!0),document.addEventListener("visibilitychange",(function(t){"hidden"===document.visibilityState&&(n&&(e=!0),u())}),!0),u(),t.addEventListener("focus",(function(t){var n,i,a;r(t.target)&&(e||(i=(n=t.target).type,"INPUT"===(a=n.tagName)&&s[i]&&!n.readOnly||"TEXTAREA"===a&&!n.readOnly||n.isContentEditable))&&o(t.target)}),!0),t.addEventListener("blur",(function(t){var e;r(t.target)&&(t.target.classList.contains("focus-visible")||t.target.hasAttribute("data-focus-visible-added"))&&(n=!0,window.clearTimeout(i),i=window.setTimeout((function(){n=!1}),100),(e=t.target).hasAttribute("data-focus-visible-added")&&(e.classList.remove("focus-visible"),e.removeAttribute("data-focus-visible-added")))}),!0),t.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&t.host?t.host.setAttribute("data-js-focus-visible",""):t.nodeType===Node.DOCUMENT_NODE&&(document.documentElement.classList.add("js-focus-visible"),document.documentElement.setAttribute("data-js-focus-visible",""))}if("undefined"!=typeof window&&"undefined"!=typeof document){var e;window.applyFocusVisiblePolyfill=t;try{e=new CustomEvent("focus-visible-polyfill-ready")}catch(t){(e=document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(e)}"undefined"!=typeof document&&t(document)}},e={};function n(i){var s=e[i];if(void 0!==s)return s.exports;var r=e[i]={exports:{}};return t[i](r,r.exports,n),r.exports}(()=>{"use strict";n(598);const t={windowEl:window,documentEl:document,htmlEl:document.documentElement,bodyEl:document.body};var e,i,s,r,o,a,u,c=function(){var e,n=null===(e=document)||void 0===e?void 0:e.querySelectorAll(".fixed-block"),i=(document.body,parseInt(t.bodyEl.dataset.position,10));n.forEach((function(t){t.style.paddingRight="0px"})),t.bodyEl.style.paddingRight="0px",t.bodyEl.style.top="auto",t.bodyEl.classList.remove("dis-scroll"),window.scroll({top:i,left:0}),t.bodyEl.removeAttribute("data-position"),t.htmlEl.style.scrollBehavior="smooth"};function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function d(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function f(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function v(t,e,n){return e&&f(t.prototype,e),n&&f(t,n),t}function h(t){return h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},h(t)}function m(t,e){return m=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},m(t,e)}function p(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function g(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=h(t)););return t}function b(){return b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var i=g(t,e);if(i){var s=Object.getOwnPropertyDescriptor(i,e);return s.get?s.get.call(arguments.length<3?t:n):s.value}},b.apply(this,arguments)}r=null===(e=document)||void 0===e?void 0:e.querySelector("[data-burger]"),o=null===(i=document)||void 0===i?void 0:i.querySelector("[data-menu]"),a=null===(s=document)||void 0===s?void 0:s.querySelectorAll("[data-menu-item]"),null==r||r.addEventListener("click",(function(e){null==r||r.classList.toggle("burger--active"),null==o||o.classList.toggle("menu--active"),null!=o&&o.classList.contains("menu--active")?(null==r||r.setAttribute("aria-expanded","true"),null==r||r.setAttribute("aria-label","Закрыть меню"),function(){var e,n=null===(e=document)||void 0===e?void 0:e.querySelectorAll(".fixed-block"),i=window.scrollY,s="".concat(window.innerWidth-t.bodyEl.offsetWidth,"px");t.htmlEl.style.scrollBehavior="none",n.forEach((function(t){t.style.paddingRight=s})),t.bodyEl.style.paddingRight=s,t.bodyEl.classList.add("dis-scroll"),t.bodyEl.dataset.position=i,t.bodyEl.style.top="-".concat(i,"px")}()):(null==r||r.setAttribute("aria-expanded","false"),null==r||r.setAttribute("aria-label","Открыть меню"),c())})),null==a||a.forEach((function(t){t.addEventListener("click",(function(){r.classList.remove("burger--active"),o.classList.remove("menu--active"),c()}))})),console.log((u=navigator.userAgent||navigator.vendor||window.opera,/android/i.test(u)?(t.htmlEl.classList.add("page--android"),"Android"):/iPad|iPhone|iPod/.test(u)&&!window.MSStream?(t.htmlEl.classList.add("page--ios"),"iOS"):"unknown")),new class{constructor(t,e){this.options=Object.assign({isChanged:()=>{}},e),this.selector=t,this.tabs=document.querySelector(`[data-tabs="${t}"]`),this.tabs?(this.tabList=this.tabs.querySelector(".tabs__nav"),this.tabsBtns=this.tabList.querySelectorAll(".tabs__nav-btn"),this.tabsPanels=this.tabs.querySelectorAll(".tabs__panel"),this.check(),this.init(),this.events()):console.error("Селектор data-tabs не существует!")}check(){document.querySelectorAll(`[data-tabs="${this.selector}"]`).length>1?console.error("Количество элементов с одинаковым data-tabs больше одного!"):this.tabsBtns.length===this.tabsPanels.length||console.error("Количество кнопок и элементов табов не совпадает!")}init(){this.tabList.setAttribute("role","tablist"),this.tabsBtns.forEach(((t,e)=>{t.setAttribute("role","tab"),t.setAttribute("tabindex","-1"),t.setAttribute("id",`${this.selector}${e+1}`),t.classList.remove("tabs__nav-btn--active")})),this.tabsPanels.forEach(((t,e)=>{t.setAttribute("role","tabpanel"),t.setAttribute("tabindex","-1"),t.setAttribute("aria-labelledby",this.tabsBtns[e].id),t.classList.remove("tabs__panel--active")})),this.tabsBtns[0].classList.add("tabs__nav-btn--active"),this.tabsBtns[0].removeAttribute("tabindex"),this.tabsBtns[0].setAttribute("aria-selected","true"),this.tabsPanels[0].classList.add("tabs__panel--active")}events(){this.tabsBtns.forEach(((t,e)=>{t.addEventListener("click",(t=>{let e=this.tabList.querySelector("[aria-selected]");t.currentTarget!==e&&this.switchTabs(t.currentTarget,e)})),t.addEventListener("keydown",(t=>{let n=Array.prototype.indexOf.call(this.tabsBtns,t.currentTarget),i=null;i=37===t.which?n-1:39===t.which?n+1:40===t.which?"down":null,null!==i&&("down"===i?this.tabsPanels[e].focus():this.tabsBtns[i]&&this.switchTabs(this.tabsBtns[i],t.currentTarget))}))}))}switchTabs(t,e=this.tabs.querySelector("[aria-selected]")){t.focus(),t.removeAttribute("tabindex"),t.setAttribute("aria-selected","true"),e.removeAttribute("aria-selected"),e.setAttribute("tabindex","-1");let n=Array.prototype.indexOf.call(this.tabsBtns,t),i=Array.prototype.indexOf.call(this.tabsBtns,e);this.tabsPanels[i].classList.remove("tabs__panel--active"),this.tabsPanels[n].classList.add("tabs__panel--active"),this.tabsBtns[i].classList.remove("tabs__nav-btn--active"),this.tabsBtns[n].classList.add("tabs__nav-btn--active"),this.options.isChanged(this)}}("directions-tabs"),n(652);var y={type:"slider",startAt:0,perView:1,focusAt:0,gap:10,autoplay:!1,hoverpause:!0,keyboard:!0,bound:!1,swipeThreshold:80,dragThreshold:120,perSwipe:"",touchRatio:.5,touchAngle:45,animationDuration:400,rewind:!0,rewindDuration:800,animationTimingFunc:"cubic-bezier(.165, .840, .440, 1)",waitForTransition:!0,throttle:10,direction:"ltr",peek:0,cloningRatio:1,breakpoints:{},classes:{swipeable:"glide--swipeable",dragging:"glide--dragging",direction:{ltr:"glide--ltr",rtl:"glide--rtl"},type:{slider:"glide--slider",carousel:"glide--carousel"},slide:{clone:"glide__slide--clone",active:"glide__slide--active"},arrow:{disabled:"glide__arrow--disabled"},nav:{active:"glide__bullet--active"}}};function w(t){console.error("[Glide warn]: ".concat(t))}function _(t){return parseInt(t)}function E(t){return"string"==typeof t}function L(t){var e=l(t);return"function"===e||"object"===e&&!!t}function k(t){return"function"==typeof t}function A(t){return t.constructor===Array}function x(t,e,n){var i={};for(var s in e)k(e[s])?i[s]=e[s](t,i,n):w("Extension must be a function");for(var r in i)k(i[r].mount)&&i[r].mount();return i}function S(t,e,n){Object.defineProperty(t,e,n)}function O(t,e){var n=Object.assign({},t,e);return e.hasOwnProperty("classes")&&(n.classes=Object.assign({},t.classes,e.classes),e.classes.hasOwnProperty("direction")&&(n.classes.direction=Object.assign({},t.classes.direction,e.classes.direction)),e.classes.hasOwnProperty("type")&&(n.classes.type=Object.assign({},t.classes.type,e.classes.type)),e.classes.hasOwnProperty("slide")&&(n.classes.slide=Object.assign({},t.classes.slide,e.classes.slide)),e.classes.hasOwnProperty("arrow")&&(n.classes.arrow=Object.assign({},t.classes.arrow,e.classes.arrow)),e.classes.hasOwnProperty("nav")&&(n.classes.nav=Object.assign({},t.classes.nav,e.classes.nav))),e.hasOwnProperty("breakpoints")&&(n.breakpoints=Object.assign({},t.breakpoints,e.breakpoints)),n}var T=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};d(this,t),this.events=e,this.hop=e.hasOwnProperty}return v(t,[{key:"on",value:function(t,e){if(!A(t)){this.hop.call(this.events,t)||(this.events[t]=[]);var n=this.events[t].push(e)-1;return{remove:function(){delete this.events[t][n]}}}for(var i=0;i<t.length;i++)this.on(t[i],e)}},{key:"emit",value:function(t,e){if(A(t))for(var n=0;n<t.length;n++)this.emit(t[n],e);else this.hop.call(this.events,t)&&this.events[t].forEach((function(t){t(e||{})}))}}]),t}(),P=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};d(this,t),this._c={},this._t=[],this._e=new T,this.disabled=!1,this.selector=e,this.settings=O(y,n),this.index=this.settings.startAt}return v(t,[{key:"mount",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._e.emit("mount.before"),L(t)?this._c=x(this,t,this._e):w("You need to provide a object on `mount()`"),this._e.emit("mount.after"),this}},{key:"mutate",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return A(t)?this._t=t:w("You need to provide a array on `mutate()`"),this}},{key:"update",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.settings=O(this.settings,t),t.hasOwnProperty("startAt")&&(this.index=t.startAt),this._e.emit("update"),this}},{key:"go",value:function(t){return this._c.Run.make(t),this}},{key:"move",value:function(t){return this._c.Transition.disable(),this._c.Move.make(t),this}},{key:"destroy",value:function(){return this._e.emit("destroy"),this}},{key:"play",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return t&&(this.settings.autoplay=t),this._e.emit("play"),this}},{key:"pause",value:function(){return this._e.emit("pause"),this}},{key:"disable",value:function(){return this.disabled=!0,this}},{key:"enable",value:function(){return this.disabled=!1,this}},{key:"on",value:function(t,e){return this._e.on(t,e),this}},{key:"isType",value:function(t){return this.settings.type===t}},{key:"settings",get:function(){return this._o},set:function(t){L(t)?this._o=t:w("Options must be an `object` instance.")}},{key:"index",get:function(){return this._i},set:function(t){this._i=_(t)}},{key:"type",get:function(){return this.settings.type}},{key:"disabled",get:function(){return this._d},set:function(t){this._d=!!t}}]),t}();function C(){return(new Date).getTime()}function j(t,e,n){var i,s,r,o,a=0;n||(n={});var u=function(){a=!1===n.leading?0:C(),i=null,o=t.apply(s,r),i||(s=r=null)},c=function(){var c=C();a||!1!==n.leading||(a=c);var l=e-(c-a);return s=this,r=arguments,l<=0||l>e?(i&&(clearTimeout(i),i=null),a=c,o=t.apply(s,r),i||(s=r=null)):i||!1===n.trailing||(i=setTimeout(u,l)),o};return c.cancel=function(){clearTimeout(i),a=0,i=s=r=null},c}var B={ltr:["marginLeft","marginRight"],rtl:["marginRight","marginLeft"]};function R(t){if(t&&t.parentNode){for(var e=t.parentNode.firstChild,n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}return[]}function H(t){return!!(t&&t instanceof window.HTMLElement)}function z(t){return Array.prototype.slice.call(t)}var q='[data-glide-el="track"]',D=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};d(this,t),this.listeners=e}return v(t,[{key:"on",value:function(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];E(t)&&(t=[t]);for(var s=0;s<t.length;s++)this.listeners[t[s]]=n,e.addEventListener(t[s],this.listeners[t[s]],i)}},{key:"off",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];E(t)&&(t=[t]);for(var i=0;i<t.length;i++)e.removeEventListener(t[i],this.listeners[t[i]],n)}},{key:"destroy",value:function(){delete this.listeners}}]),t}(),M=["ltr","rtl"],N={">":"<","<":">","=":"="};function W(t,e){return{modify:function(t){return e.Direction.is("rtl")?-t:t}}}function V(t,e){return{modify:function(t){var n=Math.floor(t/e.Sizes.slideWidth);return t+e.Gaps.value*n}}}function G(t,e){return{modify:function(t){return t+e.Clones.grow/2}}}function F(t,e){return{modify:function(n){if(t.settings.focusAt>=0){var i=e.Peek.value;return L(i)?n-i.before:n-i}return n}}}function I(t,e){return{modify:function(n){var i=e.Gaps.value,s=e.Sizes.width,r=t.settings.focusAt,o=e.Sizes.slideWidth;return"center"===r?n-(s/2-o/2):n-o*r-i*r}}}var Y=!1;try{var $=Object.defineProperty({},"passive",{get:function(){Y=!0}});window.addEventListener("testPassive",null,$),window.removeEventListener("testPassive",null,$)}catch(t){}var K=Y,U='[data-glide-el^="controls"]',X="".concat(U,' [data-glide-dir*="<"]'),J="".concat(U,' [data-glide-dir*=">"]');function Q(t){return L(t)?(e=t,Object.keys(e).sort().reduce((function(t,n){return t[n]=e[n],t[n],t}),{})):(w("Breakpoints option must be an object"),{});var e}var Z={Html:function(t,e,n){var i={mount:function(){this.root=t.selector,this.track=this.root.querySelector(q),this.collectSlides()},collectSlides:function(){this.slides=z(this.wrapper.children).filter((function(e){return!e.classList.contains(t.settings.classes.slide.clone)}))}};return S(i,"root",{get:function(){return i._r},set:function(t){E(t)&&(t=document.querySelector(t)),H(t)?i._r=t:w("Root element must be a existing Html node")}}),S(i,"track",{get:function(){return i._t},set:function(t){H(t)?i._t=t:w("Could not find track element. Please use ".concat(q," attribute."))}}),S(i,"wrapper",{get:function(){return i.track.children[0]}}),n.on("update",(function(){i.collectSlides()})),i},Translate:function(t,e,n){var i={set:function(n){var i=function(t,e,n){var i=[V,G,F,I].concat(t._t,[W]);return{mutate:function(n){for(var s=0;s<i.length;s++){var r=i[s];k(r)&&k(r().modify)?n=r(t,e,undefined).modify(n):w("Transformer should be a function that returns an object with `modify()` method")}return n}}}(t,e).mutate(n),s="translate3d(".concat(-1*i,"px, 0px, 0px)");e.Html.wrapper.style.mozTransform=s,e.Html.wrapper.style.webkitTransform=s,e.Html.wrapper.style.transform=s},remove:function(){e.Html.wrapper.style.transform=""},getStartIndex:function(){var n=e.Sizes.length,i=t.index,s=t.settings.perView;return e.Run.isOffset(">")||e.Run.isOffset("|>")?n+(i-s):(i+s)%n},getTravelDistance:function(){var n=e.Sizes.slideWidth*t.settings.perView;return e.Run.isOffset(">")||e.Run.isOffset("|>")?-1*n:n}};return n.on("move",(function(s){if(!t.isType("carousel")||!e.Run.isOffset())return i.set(s.movement);e.Transition.after((function(){n.emit("translate.jump"),i.set(e.Sizes.slideWidth*t.index)}));var r=e.Sizes.slideWidth*e.Translate.getStartIndex();return i.set(r-e.Translate.getTravelDistance())})),n.on("destroy",(function(){i.remove()})),i},Transition:function(t,e,n){var i=!1,s={compose:function(e){var n=t.settings;return i?"".concat(e," 0ms ").concat(n.animationTimingFunc):"".concat(e," ").concat(this.duration,"ms ").concat(n.animationTimingFunc)},set:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"transform";e.Html.wrapper.style.transition=this.compose(t)},remove:function(){e.Html.wrapper.style.transition=""},after:function(t){setTimeout((function(){t()}),this.duration)},enable:function(){i=!1,this.set()},disable:function(){i=!0,this.set()}};return S(s,"duration",{get:function(){var n=t.settings;return t.isType("slider")&&e.Run.offset?n.rewindDuration:n.animationDuration}}),n.on("move",(function(){s.set()})),n.on(["build.before","resize","translate.jump"],(function(){s.disable()})),n.on("run",(function(){s.enable()})),n.on("destroy",(function(){s.remove()})),s},Direction:function(t,e,n){var i={mount:function(){this.value=t.settings.direction},resolve:function(t){var e=t.slice(0,1);return this.is("rtl")?t.split(e).join(N[e]):t},is:function(t){return this.value===t},addClass:function(){e.Html.root.classList.add(t.settings.classes.direction[this.value])},removeClass:function(){e.Html.root.classList.remove(t.settings.classes.direction[this.value])}};return S(i,"value",{get:function(){return i._v},set:function(t){M.indexOf(t)>-1?i._v=t:w("Direction value must be `ltr` or `rtl`")}}),n.on(["destroy","update"],(function(){i.removeClass()})),n.on("update",(function(){i.mount()})),n.on(["build.before","update"],(function(){i.addClass()})),i},Peek:function(t,e,n){var i={mount:function(){this.value=t.settings.peek}};return S(i,"value",{get:function(){return i._v},set:function(t){L(t)?(t.before=_(t.before),t.after=_(t.after)):t=_(t),i._v=t}}),S(i,"reductor",{get:function(){var e=i.value,n=t.settings.perView;return L(e)?e.before/n+e.after/n:2*e/n}}),n.on(["resize","update"],(function(){i.mount()})),i},Sizes:function(t,e,n){var i={setupSlides:function(){for(var t="".concat(this.slideWidth,"px"),n=e.Html.slides,i=0;i<n.length;i++)n[i].style.width=t},setupWrapper:function(){e.Html.wrapper.style.width="".concat(this.wrapperSize,"px")},remove:function(){for(var t=e.Html.slides,n=0;n<t.length;n++)t[n].style.width="";e.Html.wrapper.style.width=""}};return S(i,"length",{get:function(){return e.Html.slides.length}}),S(i,"width",{get:function(){return e.Html.track.offsetWidth}}),S(i,"wrapperSize",{get:function(){return i.slideWidth*i.length+e.Gaps.grow+e.Clones.grow}}),S(i,"slideWidth",{get:function(){return i.width/t.settings.perView-e.Peek.reductor-e.Gaps.reductor}}),n.on(["build.before","resize","update"],(function(){i.setupSlides(),i.setupWrapper()})),n.on("destroy",(function(){i.remove()})),i},Gaps:function(t,e,n){var i={apply:function(t){for(var n=0,i=t.length;n<i;n++){var s=t[n].style,r=e.Direction.value;s[B[r][0]]=0!==n?"".concat(this.value/2,"px"):"",n!==t.length-1?s[B[r][1]]="".concat(this.value/2,"px"):s[B[r][1]]=""}},remove:function(t){for(var e=0,n=t.length;e<n;e++){var i=t[e].style;i.marginLeft="",i.marginRight=""}}};return S(i,"value",{get:function(){return _(t.settings.gap)}}),S(i,"grow",{get:function(){return i.value*e.Sizes.length}}),S(i,"reductor",{get:function(){var e=t.settings.perView;return i.value*(e-1)/e}}),n.on(["build.after","update"],j((function(){i.apply(e.Html.wrapper.children)}),30)),n.on("destroy",(function(){i.remove(e.Html.wrapper.children)})),i},Move:function(t,e,n){var i={mount:function(){this._o=0},make:function(){var t=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.offset=i,n.emit("move",{movement:this.value}),e.Transition.after((function(){n.emit("move.after",{movement:t.value})}))}};return S(i,"offset",{get:function(){return i._o},set:function(t){i._o=function(t){return void 0===t}(t)?0:_(t)}}),S(i,"translate",{get:function(){return e.Sizes.slideWidth*t.index}}),S(i,"value",{get:function(){var t=this.offset,n=this.translate;return e.Direction.is("rtl")?n+t:n-t}}),n.on(["build.before","run"],(function(){i.make()})),i},Clones:function(t,e,n){var i={mount:function(){this.items=[],t.isType("carousel")&&(this.items=this.collect())},collect:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],i=e.Html.slides,s=t.settings,r=s.perView,o=s.classes,a=s.cloningRatio;if(0!==i.length)for(var u=+!!t.settings.peek,c=r+u+Math.round(r/2),l=i.slice(0,c).reverse(),d=i.slice(-1*c),f=0;f<Math.max(a,Math.floor(r/i.length));f++){for(var v=0;v<l.length;v++){var h=l[v].cloneNode(!0);h.classList.add(o.slide.clone),n.push(h)}for(var m=0;m<d.length;m++){var p=d[m].cloneNode(!0);p.classList.add(o.slide.clone),n.unshift(p)}}return n},append:function(){for(var t=this.items,n=e.Html,i=n.wrapper,s=n.slides,r=Math.floor(t.length/2),o=t.slice(0,r).reverse(),a=t.slice(-1*r).reverse(),u="".concat(e.Sizes.slideWidth,"px"),c=0;c<a.length;c++)i.appendChild(a[c]);for(var l=0;l<o.length;l++)i.insertBefore(o[l],s[0]);for(var d=0;d<t.length;d++)t[d].style.width=u},remove:function(){for(var t=this.items,n=0;n<t.length;n++)e.Html.wrapper.removeChild(t[n])}};return S(i,"grow",{get:function(){return(e.Sizes.slideWidth+e.Gaps.value)*i.items.length}}),n.on("update",(function(){i.remove(),i.mount(),i.append()})),n.on("build.before",(function(){t.isType("carousel")&&i.append()})),n.on("destroy",(function(){i.remove()})),i},Resize:function(t,e,n){var i=new D,s={mount:function(){this.bind()},bind:function(){i.on("resize",window,j((function(){n.emit("resize")}),t.settings.throttle))},unbind:function(){i.off("resize",window)}};return n.on("destroy",(function(){s.unbind(),i.destroy()})),s},Build:function(t,e,n){var i={mount:function(){n.emit("build.before"),this.typeClass(),this.activeClass(),n.emit("build.after")},typeClass:function(){e.Html.root.classList.add(t.settings.classes.type[t.settings.type])},activeClass:function(){var n=t.settings.classes,i=e.Html.slides[t.index];i&&(i.classList.add(n.slide.active),R(i).forEach((function(t){t.classList.remove(n.slide.active)})))},removeClasses:function(){var n=t.settings.classes,i=n.type,s=n.slide;e.Html.root.classList.remove(i[t.settings.type]),e.Html.slides.forEach((function(t){t.classList.remove(s.active)}))}};return n.on(["destroy","update"],(function(){i.removeClasses()})),n.on(["resize","update"],(function(){i.mount()})),n.on("move.after",(function(){i.activeClass()})),i},Run:function(t,e,n){var i={mount:function(){this._o=!1},make:function(i){var s=this;t.disabled||(!t.settings.waitForTransition||t.disable(),this.move=i,n.emit("run.before",this.move),this.calculate(),n.emit("run",this.move),e.Transition.after((function(){s.isStart()&&n.emit("run.start",s.move),s.isEnd()&&n.emit("run.end",s.move),s.isOffset()&&(s._o=!1,n.emit("run.offset",s.move)),n.emit("run.after",s.move),t.enable()})))},calculate:function(){var e=this.move,n=this.length,s=e.steps,r=e.direction,o=1;if("="===r)return t.settings.bound&&_(s)>n?void(t.index=n):void(t.index=s);if(">"!==r||">"!==s)if("<"!==r||"<"!==s){if("|"===r&&(o=t.settings.perView||1),">"===r||"|"===r&&">"===s){var a=function(e){var n=t.index;return t.isType("carousel")?n+e:n+(e-n%e)}(o);return a>n&&(this._o=!0),void(t.index=function(e,n){var s=i.length;return e<=s?e:t.isType("carousel")?e-(s+1):t.settings.rewind?i.isBound()&&!i.isEnd()?s:0:i.isBound()?s:Math.floor(s/n)*n}(a,o))}if("<"===r||"|"===r&&"<"===s){var u=function(e){var n=t.index;return t.isType("carousel")?n-e:(Math.ceil(n/e)-1)*e}(o);return u<0&&(this._o=!0),void(t.index=function(e,n){var s=i.length;return e>=0?e:t.isType("carousel")?e+(s+1):t.settings.rewind?i.isBound()&&i.isStart()?s:Math.floor(s/n)*n:0}(u,o))}w("Invalid direction pattern [".concat(r).concat(s,"] has been used"))}else t.index=0;else t.index=n},isStart:function(){return t.index<=0},isEnd:function(){return t.index>=this.length},isOffset:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;return t?!!this._o&&("|>"===t?"|"===this.move.direction&&">"===this.move.steps:"|<"===t?"|"===this.move.direction&&"<"===this.move.steps:this.move.direction===t):this._o},isBound:function(){return t.isType("slider")&&"center"!==t.settings.focusAt&&t.settings.bound}};return S(i,"move",{get:function(){return this._m},set:function(t){var e=t.substr(1);this._m={direction:t.substr(0,1),steps:e?_(e)?_(e):e:0}}}),S(i,"length",{get:function(){var n=t.settings,i=e.Html.slides.length;return this.isBound()?i-1-(_(n.perView)-1)+_(n.focusAt):i-1}}),S(i,"offset",{get:function(){return this._o}}),i}};new(function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&m(t,e)}(s,t);var e,n,i=(e=s,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,i=h(e);if(n){var s=h(this).constructor;t=Reflect.construct(i,arguments,s)}else t=i.apply(this,arguments);return p(this,t)});function s(){return d(this,s),i.apply(this,arguments)}return v(s,[{key:"mount",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return b(h(s.prototype),"mount",this).call(this,Object.assign({},Z,t))}}]),s}(P))(".equipment__slider",{type:"carousel",perView:1,animationTimingFunc:"ease"}).mount({Controls:function(t,e,n){var i=new D,s=!!K&&{passive:!0},r={mount:function(){this._n=e.Html.root.querySelectorAll('[data-glide-el="controls[nav]"]'),this._c=e.Html.root.querySelectorAll(U),this._arrowControls={previous:e.Html.root.querySelectorAll(X),next:e.Html.root.querySelectorAll(J)},this.addBindings()},setActive:function(){for(var t=0;t<this._n.length;t++)this.addClass(this._n[t].children)},removeActive:function(){for(var t=0;t<this._n.length;t++)this.removeClass(this._n[t].children)},addClass:function(e){var n=t.settings,i=e[t.index];i&&i&&(i.classList.add(n.classes.nav.active),R(i).forEach((function(t){t.classList.remove(n.classes.nav.active)})))},removeClass:function(e){var n=e[t.index];n&&n.classList.remove(t.settings.classes.nav.active)},setArrowState:function(){if(!t.settings.rewind){var n=r._arrowControls.next,i=r._arrowControls.previous;this.resetArrowState(n,i),0===t.index&&this.disableArrow(i),t.index===e.Run.length&&this.disableArrow(n)}},resetArrowState:function(){for(var e=t.settings,n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];i.forEach((function(t){z(t).forEach((function(t){t.classList.remove(e.classes.arrow.disabled)}))}))},disableArrow:function(){for(var e=t.settings,n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];i.forEach((function(t){z(t).forEach((function(t){t.classList.add(e.classes.arrow.disabled)}))}))},addBindings:function(){for(var t=0;t<this._c.length;t++)this.bind(this._c[t].children)},removeBindings:function(){for(var t=0;t<this._c.length;t++)this.unbind(this._c[t].children)},bind:function(t){for(var e=0;e<t.length;e++)i.on("click",t[e],this.click),i.on("touchstart",t[e],this.click,s)},unbind:function(t){for(var e=0;e<t.length;e++)i.off(["click","touchstart"],t[e])},click:function(t){K||"touchstart"!==t.type||t.preventDefault();var n=t.currentTarget.getAttribute("data-glide-dir");e.Run.make(e.Direction.resolve(n))}};return S(r,"items",{get:function(){return r._c}}),n.on(["mount.after","move.after"],(function(){r.setActive()})),n.on(["mount.after","run"],(function(){r.setArrowState()})),n.on("destroy",(function(){r.removeBindings(),r.removeActive(),i.destroy()})),r},Breakpoints:function(t,e,n){var i=new D,s=t.settings,r=Q(s.breakpoints),o=Object.assign({},s),a={match:function(t){if(void 0!==window.matchMedia)for(var e in t)if(t.hasOwnProperty(e)&&window.matchMedia("(max-width: ".concat(e,"px)")).matches)return t[e];return o}};return Object.assign(s,a.match(r)),i.on("resize",window,j((function(){t.settings=O(s,a.match(r))}),t.settings.throttle)),n.on("update",(function(){r=Q(r),o=Object.assign({},s)})),n.on("destroy",(function(){i.off("resize",window)})),a}})})()})();