"use strict";function r(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,e){if(!t)return;if("string"==typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(t,e)}(t))){var e=0,n=function(){};return{s:n,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o,i=!0,a=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return i=t.done,t},e:function(t){a=!0,o=t},f:function(){try{i||null==r.return||r.return()}finally{if(a)throw o}}}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var n=document.querySelector(".menu__btn"),o=document.querySelectorAll(".js-dropdown-btn");function i(){n.classList.toggle("menu__btn_active")}function a(){var t,e=event.currentTarget,n=e.nextElementSibling;e.classList.contains("is-select")?c():(c(),e.classList.add("is-select"),(t=n).style.height=t.scrollHeight+"px",t.previousElementSibling.querySelector(".js-dropdown-arrow").classList.add("is-rotate"))}function c(){var t,e=r(o);try{for(e.s();!(t=e.n()).done;){var n=t.value;n.classList.remove("is-select"),n.nextElementSibling.style.height="0",n.querySelector(".js-dropdown-arrow").classList.remove("is-rotate")}}catch(t){e.e(t)}finally{e.f()}}document.addEventListener("DOMContentLoaded",function(){if(n.addEventListener("click",i),document.documentElement.clientWidth<=576){var t,e=r(o);try{for(e.s();!(t=e.n()).done;){t.value.addEventListener("click",a)}}catch(t){e.e(t)}finally{e.f()}}});