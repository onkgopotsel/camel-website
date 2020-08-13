!function(){"use strict";var e=/^sect(\d)$/,t=document.querySelector(".nav-container"),n=document.querySelector(".nav-toggle");if(n&&n.addEventListener("click",function(e){if(n.classList.contains("is-active"))return d(e);var i=document.documentElement;i.classList.add("is-clipped--nav"),n.classList.add("is-active"),t.classList.add("is-active"),i.addEventListener("click",d),u(e)}),t){t.addEventListener("click",u);var i=t.querySelector("[data-panel=menu]");if(i){var a=t.querySelector(".nav"),c=i.querySelector(".is-current-page"),r=c;c?(o(c),v(i,c.querySelector(".nav-link"))):i.scrollTop=0,m(i,".nav-item-toggle").forEach(function(e){var t=e.parentElement;e.addEventListener("click",l.bind(t));var n=function(e,t){var n=e.nextElementSibling;if(!n)return;return t?n[n.matches?"matches":"msMatchesSelector"](t)&&n:n}(e,".nav-text");n&&(n.style.cursor="pointer",n.addEventListener("click",l.bind(t)))}),a.querySelector(".nav-panel-explore").addEventListener("click",function(){var e=a.querySelector(".is-active[data-panel]"),t=null===e||"menu"===e.dataset.panel?"explore":"menu";a.querySelector(`[data-panel=${t}]`).classList.toggle("is-active"),null!==e&&e.classList.toggle("is-active")}),i.addEventListener("mousedown",function(e){e.detail>1&&e.preventDefault()}),i.querySelector('.nav-link[href^="#"]')&&(window.location.hash&&s(),window.addEventListener("hashchange",s))}}function s(){var t,n,a=window.location.hash;if(a&&(a.indexOf("%")&&(a=decodeURIComponent(a)),!(t=i.querySelector('.nav-link[href="'+a+'"]')))){var s=document.getElementById(a.slice(1));if(s)for(var l=s,d=document.querySelector("article.doc");(l=l.parentNode)&&l!==d;){var u=l.id;if(!u&&(u=l.className.match(e))&&(u=(l.firstElementChild||{}).id),u&&(t=i.querySelector('.nav-link[href="#'+u+'"]')))break}}if(t)n=t.parentNode;else{if(!r)return;t=(n=r).querySelector(".nav-link")}n!==c&&(m(i,".nav-item.is-active").forEach(function(e){e.classList.remove("is-active","is-current-path","is-current-page")}),n.classList.add("is-current-page"),c=n,o(n),v(i,t))}function o(e){for(var t,n=e.parentNode;!(t=n.classList).contains("nav-menu");)"LI"===n.tagName&&t.contains("nav-item")&&t.add("is-active","is-current-path"),n=n.parentNode;e.classList.add("is-active")}function l(){this.classList.toggle("is-active")}function d(e){var i=document.documentElement;i.classList.remove("is-clipped--nav"),n.classList.remove("is-active"),t.classList.remove("is-active"),i.removeEventListener("click",d),u(e)}function u(e){e.stopPropagation()}function v(e,t){var n=e.getBoundingClientRect(),i=n.height,c=window.getComputedStyle(a);"sticky"===c.position&&(i-=n.top-parseFloat(c.top)),e.scrollTop=Math.max(0,.5*(t.getBoundingClientRect().height-i)+t.offsetTop)}function m(e,t){return[].slice.call(e.querySelectorAll(t))}}();
!function(){"use strict";var e=document.querySelector("aside.toc.sidebar");if(e){if(document.querySelector("body.-toc"))return e.parentNode.removeChild(e);var t=parseInt(e.dataset.levels||2);if(!(t<0)){for(var n,o,i,r,a=document.querySelector("article.doc"),d=[],c=0;c<=t;c++)d.push(c?".sect"+c+">h"+(c+1)+"[id]":"h1[id].sect0");if(!(o=d.join(","),i=a,n=[].slice.call((i||document).querySelectorAll(o))).length)return e.parentNode.removeChild(e);var s={},l=n.reduce(function(e,t){var n=document.createElement("a");n.textContent=t.textContent,s[n.href="#"+t.id]=n;var o=document.createElement("li");return o.dataset.level=parseInt(t.nodeName.slice(1))-1,o.appendChild(n),e.appendChild(o),e},document.createElement("ul")),u=e.querySelector(".toc-menu");u||((u=document.createElement("div")).className="toc-menu");var f=document.createElement("h3");f.textContent=e.dataset.title||"Contents",u.appendChild(f),u.appendChild(l);var m=!document.getElementById("toc")&&a.querySelector("h1.page ~ :not(.is-before-toc)");if(m){var v=document.createElement("aside");v.className="toc embedded",v.appendChild(u.cloneNode(!0)),m.parentNode.insertBefore(v,m)}window.addEventListener("load",function(){p(),window.addEventListener("scroll",p)})}}function p(){var e,t=window.pageYOffset,o=1.15*h(document.documentElement,"fontSize"),i=a.offsetTop;if(t&&window.innerHeight+t+2>=document.documentElement.scrollHeight){r=Array.isArray(r)?r:Array(r||0);var d=[],c=n.length-1;return n.forEach(function(e,t){var n="#"+e.id;t===c||e.getBoundingClientRect().top+h(e,"paddingTop")>i?(d.push(n),r.indexOf(n)<0&&s[n].classList.add("is-active")):~r.indexOf(n)&&s[r.shift()].classList.remove("is-active")}),l.scrollTop=l.scrollHeight-l.offsetHeight,void(r=d.length>1?d:d[0])}if(Array.isArray(r)&&(r.forEach(function(e){s[e].classList.remove("is-active")}),r=void 0),n.some(function(t){if(t.getBoundingClientRect().top+h(t,"paddingTop")-o>i)return!0;e="#"+t.id}),e){if(e===r)return;r&&s[r].classList.remove("is-active");var u=s[e];u.classList.add("is-active"),l.scrollHeight>l.offsetHeight&&(l.scrollTop=Math.max(0,u.offsetTop+u.offsetHeight-l.offsetHeight)),r=e}else r&&(s[r].classList.remove("is-active"),r=void 0)}function h(e,t){return parseFloat(window.getComputedStyle(e)[t])}}();
!function(){"use strict";var e=document.querySelector("article.doc"),t=document.querySelector(".toolbar");function n(e){return e&&(~e.indexOf("%")?decodeURIComponent(e):e).slice(1)}function o(n){n&&(window.location.hash="#"+this.id,n.preventDefault()),window.scrollTo(0,function t(n,o){return e.contains(n)?t(n.offsetParent,n.offsetTop+o):o}(this,0)-t.getBoundingClientRect().bottom)}window.addEventListener("load",function e(t){var i,c;(i=n(window.location.hash))&&(c=document.getElementById(i))&&(o.bind(c)(),setTimeout(o.bind(c),0)),window.removeEventListener("load",e)}),Array.prototype.slice.call(document.querySelectorAll('a[href^="#"]')).forEach(function(e){var t,i;(t=n(e.hash))&&(i=document.getElementById(t))&&e.addEventListener("click",o.bind(i))})}();
!function(){"use strict";var e=document.querySelector(".page-versions .version-menu-toggle");if(e){var t=document.querySelector(".page-versions");e.addEventListener("click",function(e){t.classList.toggle("is-active"),e.stopPropagation()}),document.documentElement.addEventListener("click",function(){t.classList.remove("is-active")})}}();
document.addEventListener("DOMContentLoaded",function(){var t=Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"),0);0!==t.length&&(t.forEach(function(t){t.addEventListener("click",function(e){e.stopPropagation(),t.classList.toggle("is-active"),document.getElementById(t.dataset.target).classList.toggle("is-active"),document.documentElement.classList.toggle("is-clipped--navbar")})}),document.documentElement.dataset.scroll=0,document.addEventListener("scroll",()=>{document.documentElement.dataset.scroll=window.scrollY}))});
document.addEventListener("DOMContentLoaded",function(){var e=function(e){return".*"+e+".*"},n=document.querySelector(".nav-panel-menu input.search");if(n){var t=document.querySelectorAll(".nav-item-toggle"),l=document.querySelectorAll(".nav-link");n.addEventListener("keyup",function(){t.forEach(function(e){e.style.display=""===n.value?"block":"none"});for(var o=n.value.split(""),r=new RegExp(o.map(e).join(""),"i"),a=0;a<l.length;a++){var i=l[a].textContent,s="";if(r.test(i))if(l[a].style.display="",0===o.length)s=i;else{for(var u=0,c=0,d=0;d<o.length;d++)c=i.toLowerCase().indexOf(o[d].toLowerCase(),c),s=s+i.substring(u,c)+"<b>"+i[c]+"</b>",u=++c;c<i.length&&(s+=i.substring(c))}else l[a].style.display="none",s=i;l[a].innerHTML=s}})}});