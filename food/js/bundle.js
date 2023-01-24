!function(){"use strict";function e(e){const t=document.querySelector(e);t.classList.add("hide"),t.classList.remove("show"),document.body.style.overflow=""}function t(e,t){const n=document.querySelector(e);n.classList.add("show"),n.classList.remove("hide"),document.body.style.overflow="hidden",console.log(t),t&&clearInterval(t)}window.addEventListener("DOMContentLoaded",(()=>{const n=setTimeout((()=>t(".modal",n)),5e4);(function(e,t,n,o){let s=document.querySelectorAll(e),r=document.querySelectorAll(t),a=document.querySelector(n);function c(){r.forEach((e=>{e.classList.add("hide"),e.classList.remove("show","fade")})),s.forEach((e=>{e.classList.remove(o)}))}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;r[e].classList.add("show","fade"),r[e].classList.remove("hide"),s[e].classList.add(o)}c(),i(),a.addEventListener("click",(t=>{const n=t.target;n&&n.classList.contains(e.slice(1))&&s.forEach(((e,t)=>{n==e&&(c(),i(t))}))}))})(".tabheader__item",".tabcontent",".tabheader__items","tabheader__item_active"),function(n,o,s){const r=document.querySelectorAll(n),a=document.querySelector(o);r.forEach((e=>{e.addEventListener("click",(()=>t(o,s)))})),a.addEventListener("click",(t=>{t.target!==a&&""!=t.target.getAttribute("data-close")||e(o)})),document.addEventListener("keydown",(t=>{"Escape"===t.code&&a.classList.contains("show")&&e(o)})),window.addEventListener("scroll",(function e(){window.pageYOffset+document.documentElement.clientHeight>=document.documentElement.scrollHeight-1&&(t(o,s),window.removeEventListener("scroll",e))}))}("[data-modal]",".modal",n),function(e,t){function n(e){return e>=0&&e<10?`0${e}`:e}!function(e,t){const o=document.querySelector(e),s=o.querySelector("#days"),r=o.querySelector("#hours"),a=o.querySelector("#minutes"),c=o.querySelector("#seconds"),i=setInterval(l,1e3);function l(){const e=function(e){const t=Date.parse(e)-Date.parse(new Date);return{total:t,days:Math.floor(t/864e5),hours:Math.floor(t/36e5%24),minutes:Math.floor(t/6e4%60),seconds:Math.floor(t/1e3%60)}}(t);s.innerHTML=n(e.days),r.innerHTML=n(e.hours),a.innerHTML=n(e.minutes),c.innerHTML=n(e.seconds),e.total<=0&&clearInterval(i)}l()}(e,t)}(".timer","2022-12-28"),function(){const e=document.querySelector(".calculating__result span");let t,n,o,s,r;function a(e,t){document.querySelectorAll(e).forEach((e=>{e.classList.remove(t),e.getAttribute("id")===localStorage.getItem("sex")&&e.classList.add(t),e.getAttribute("data-ratio")===localStorage.getItem("ratio")&&e.classList.add(t)}))}function c(){e.textContent=t&&n&&o&&s&&r?"female"===t?Math.round((447.6+9.2*o+3.1*n-4.3*s)*r):Math.round((88.36+13.4*o+4.8*n-5.7*s)*r):"____"}function i(e,n){const o=document.querySelectorAll(e);o.forEach((e=>{e.addEventListener("click",(e=>{e.target.getAttribute("data-ratio")?(r=+e.target.getAttribute("data-ratio"),localStorage.setItem("ratio",+e.target.getAttribute("data-ratio"))):(t=e.target.getAttribute("id"),localStorage.setItem("sex",e.target.getAttribute("id"))),o.forEach((e=>{e.classList.remove(n)})),e.target.classList.add(n),c()}))}))}function l(e){const t=document.querySelector(e);t.addEventListener("input",(()=>{switch(t.value.match(/\D/g)?t.style.border="1px solid red":t.style.border="none",t.getAttribute("id")){case"height":n=+t.value;break;case"weight":o=+t.value;break;case"age":s=+t.value}c()}))}localStorage.getItem("sex")?t=localStorage.getItem("sex"):(t="female",localStorage.setItem("sex","female")),localStorage.getItem("ratio")?r=localStorage.getItem("ratio"):(r=1.375,localStorage.setItem("ratio",1.375)),a("#gender div","calculating__choose-item_active"),a(".calculating__choose_big div","calculating__choose-item_active"),c(),i("#gender div","calculating__choose-item_active"),i(".calculating__choose_big div","calculating__choose-item_active"),l("#height"),l("#weight"),l("#age")}(),function(){class e{constructor(e,t,n,o,s,r){this.src=e,this.alt=t,this.title=n,this.descr=o,this.price=s;for(var a=arguments.length,c=new Array(a>6?a-6:0),i=6;i<a;i++)c[i-6]=arguments[i];this.classes=c,this.perent=document.querySelector(r),this.transfer=27,this.changeToUAH()}changeToUAH(){this.price=this.price*this.transfer}render(){const e=document.createElement("div");0===this.classes.length?(this.element="menu__item",e.classList.add(this.element)):this.classes.forEach((t=>e.classList.add(t))),e.innerHTML=`\n                    <img src=${this.src} alt=${this.alt}>\n                    <h3 class="menu__item-subtitle">${this.title}</h3>\n                        <div class="menu__item-descr">${this.descr}</div>\n                        <div class="menu__item-divider"></div>\n                        <div class="menu__item-price">\n                            <div class="menu__item-cost">Цена:</div>\n                            <div class="menu__item-total"><span>${this.price}</span> грн/день</div>\n                        </div>\n            `,this.perent.append(e)}}(async function(e){let t=await fetch(e);if(!t.ok)throw new Error(`Could not fetch ${e}, status: ${t.status}`);return await t.json()})("http://localhost:3000/menu").then((t=>{t.forEach((t=>{let{img:n,altimg:o,title:s,descr:r,price:a}=t;new e(n,o,s,r,a,".menu .container").render()}))}))}(),function(n,o){function s(n){const s=document.querySelector(".modal__dialog");s.classList.add("hide"),t(".modal",o);const r=document.createElement("div");r.classList.add("modal__dialog"),r.innerHTML=`\n            <div class="modal__content">\n                <div class="modal__close" data-close>×</div>\n                <div class="modal__title">${n}</div>\n            </div>\n        `,document.querySelector(".modal").append(r),setTimeout((()=>{r.remove(),s.classList.add("show"),s.classList.remove("hide"),e(".modal")}),4e3)}document.querySelectorAll(n).forEach((e=>{var t;(t=e).addEventListener("submit",(e=>{e.preventDefault();const n=document.createElement("img");n.src="img/form/spinner.svg",n.style.cssText="\n                display: block;\n                margin: 0 auto;\n            ",t.insertAdjacentElement("afterend",n);const o=new FormData(t);(async(e,t)=>{const n=await fetch("http://localhost:3000/requests",{method:"POST",headers:{"Content-type":"application/json"},body:t});return await n.json()})(0,JSON.stringify(Object.fromEntries(o.entries()))).then((e=>{console.log(e),s("Спасибо! Скоро мы с вами свяжемся"),n.remove()})).catch((()=>{s("Что-то пошло не так...")})).finally((()=>{t.reset()}))}))}))}("form",n),function(e){let{container:t,slide:n,nextArrow:o,prevArrow:s,totalCounter:r,currentCounter:a,wrapper:c,field:i}=e;const l=document.querySelectorAll(n),d=document.querySelector(t),u=document.querySelector(s),m=document.querySelector(o),h=document.querySelector(r),f=document.querySelector(a),g=document.querySelector(c),v=document.querySelector(i),_=window.getComputedStyle(g).width;let y=1,p=0;l.length<10?(h.textContent=`0${l.length}`,f.textContent=`0${y}`):(h.textContent=l.length,f.textContent=y),v.style.width=100*l.length+"%",v.style.display="flex",v.style.transition="0.5s all",g.style.overflow="hidden",l.forEach((e=>{e.style.width=_})),d.style.position="relative";const L=document.createElement("ol"),w=[];L.classList.add("carousel-indicators"),d.append(L);for(let e=0;e<l.length;e++){const t=document.createElement("li");t.setAttribute("data-slide-to",e+1),t.classList.add("dot"),0==e&&(t.style.opacity=1),L.append(t),w.push(t)}function S(){l.length<10?f.textContent=`0${y}`:f.textContent=y}function E(){w.forEach((e=>e.style.opacity=".5")),w[y-1].style.opacity=1}function q(e){return+e.replace(/\D/g,"")}m.addEventListener("click",(()=>{p==q(_)*(l.length-1)?p=0:p+=q(_),v.style.transform=`translateX(-${p}px)`,y==l.length?y=1:y++,S(),E()})),u.addEventListener("click",(()=>{0==p?p=q(_)*(l.length-1):p-=q(_),v.style.transform=`translateX(-${p}px)`,1==y?y=l.length:y--,S(),E()})),w.forEach((e=>{e.addEventListener("click",(e=>{const t=e.target.getAttribute("data-slide-to");y=t,p=q(_)*(t-1),v.style.transform=`translateX(-${p}px)`,S(),E()}))}))}({container:".offer__slider",nextArrow:".offer__slider-next",slide:".offer__slide",prevArrow:".offer__slider-prev",totalCounter:"#total",currentCounter:"#current",wrapper:".offer__slider-wrapper",field:".offer__slider-inner"})}))}();
//# sourceMappingURL=bundle.js.map