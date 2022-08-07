var t={save:(t,e)=>{try{const o=JSON.stringify(e);localStorage.setItem(t,o)}catch(t){console.error("Set state error: ",t.message)}},load:t=>{try{const e=localStorage.getItem(t);return null===e?void 0:JSON.parse(e)}catch(t){console.error("Get state error: ",t.message)}},remove:t=>{try{localStorage.removeItem(t)}catch(t){console.error("Get state error!!!: ",t.message)}}};const e={allBtn:document.querySelectorAll(".button-of-changes"),startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]"),toggleBtn:document.querySelector("button[data-toggle]"),hexColorOutput:document.querySelector(".hex-color-output"),body:document.querySelector("body")};console.log(e.allBtn);let o=null,n=!1;function r(){o||(e.toggleBtn.textContent="STOP the big color changes 😢",n=!0,o=setInterval(s,1e3),t.save("startBtnName",e.startBtn.textContent),t.save("stopBtnName",e.stopBtn.textContent))}function a(){clearInterval(o),o=null,n=!1,e.toggleBtn.textContent="RUN the big color changes 😎"}function l(){return(16999999999*Math.random()).toString(16).slice(1,3)}function s(){let t=`#${l()}${l()}${l()}`;e.allBtn.forEach((e=>e.style.backgroundColor=t)),e.hexColorOutput.style.color=t,e.hexColorOutput.textContent=`Цвет настроения ${t} :)`}e.startBtn.addEventListener("click",r),e.stopBtn.addEventListener("click",a),e.toggleBtn.addEventListener("click",(function(){if(!n)return r(),e.startBtn.disabled=!0,e.stopBtn.disabled=!0,e.startBtn.textContent="BUTTON IS BLOCKED !!!",void(e.stopBtn.textContent="BUTTON IS BLOCKED !!!");a(),e.startBtn.disabled=!1,e.stopBtn.disabled=!1,e.startBtn.textContent=t.load("startBtnName"),e.stopBtn.textContent=t.load("stopBtnName"),localStorage.clear()})),e.toggleBtn.textContent="RUN the big color changes 😎";
//# sourceMappingURL=01-color-switcher.1741ca47.js.map
