!function(){var t={save:function(t,e){try{var o=JSON.stringify(e);localStorage.setItem(t,o)}catch(t){console.error("Set state error: ",t.message)}},load:function(t){try{var e=localStorage.getItem(t);return null===e?void 0:JSON.parse(e)}catch(t){console.error("Get state error: ",t.message)}},remove:function(t){try{localStorage.removeItem(t)}catch(t){console.error("Get state error!!!: ",t.message)}}},e={allBtn:document.querySelectorAll(".button-of-changes"),startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]"),toggleBtn:document.querySelector("button[data-toggle]"),hexColorOutput:document.querySelector(".hex-color-output"),body:document.querySelector("body")};console.log(e.allBtn);var o="RUN the big color changes 😎",n="startBtnName",r="stopBtnName",a="BUTTON IS BLOCKED !!!",l=null,c=!1;function s(){l||(e.toggleBtn.textContent="STOP the big color changes 😢",c=!0,l=setInterval(g,1e3),t.save(n,e.startBtn.textContent),t.save(r,e.stopBtn.textContent))}function u(){clearInterval(l),l=null,c=!1,e.toggleBtn.textContent=o}function d(){return(16999999999*Math.random()).toString(16).slice(1,3)}function g(){var t="#".concat(d()).concat(d()).concat(d());e.allBtn.forEach((function(e){return e.style.backgroundColor=t})),e.hexColorOutput.style.color=t,e.hexColorOutput.textContent="Цвет настроения ".concat(t," :)")}e.startBtn.addEventListener("click",s),e.stopBtn.addEventListener("click",u),e.toggleBtn.addEventListener("click",(function(){if(!c)return s(),e.startBtn.disabled=!0,e.stopBtn.disabled=!0,e.startBtn.textContent=a,void(e.stopBtn.textContent=a);u(),e.startBtn.disabled=!1,e.stopBtn.disabled=!1,e.startBtn.textContent=t.load(n),e.stopBtn.textContent=t.load(r),localStorage.clear()})),e.toggleBtn.textContent=o}();
//# sourceMappingURL=01-color-switcher.bbe0efb8.js.map
