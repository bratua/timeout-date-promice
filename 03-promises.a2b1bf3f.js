!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},r=n.parcelRequire398e;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var r={id:e,exports:{}};return o[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},n.parcelRequire398e=r);var i=r("iU1Pc"),a={form:document.querySelector(".form")};function u(e,n){var o=Math.random()>.3;return new Promise((function(t,r){setTimeout((function(){o?t({position:e,delay:n}):r({position:e,delay:n})}),n)}))}a.form.addEventListener("submit",(function(n){n.preventDefault();var o=n.currentTarget,t=o.delay,r=o.step,a=o.amount;(function(n){for(var o=n.delay,t=n.step,r=n.amount,a=1;a<=r;a+=1)u(a,o).then((function(n){var o=n.position,t=n.delay;e(i).Notify.success("✅ Fulfilled promise ".concat(o," in ").concat(t,"ms"))})).catch((function(n){var o=n.position,t=n.delay;e(i).Notify.failure("❌ Rejected promise ".concat(o," in ").concat(t,"ms"))})),o+=t,console.log(o)})({delay:Number(t.value),step:Number(r.value),amount:Number(a.value)}),n.currentTarget.reset()}))}();
//# sourceMappingURL=03-promises.a2b1bf3f.js.map
