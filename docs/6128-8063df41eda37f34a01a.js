"use strict";(self.webpackChunkembla_carousel_docs=self.webpackChunkembla_carousel_docs||[]).push([[6128],{6128:function(e,n,t){t.r(n);var a=t(4041),s=t(7154),c=t(2380),o=t(7105),i=t(642),l=t(6448);n.default=e=>{const{slides:n,options:t}=e,[r,d]=(0,s.A)(t,[(0,c.A)()]),{selectedIndex:u,scrollSnaps:f,onDotButtonClick:p}=(0,i.R)(d),{prevBtnDisabled:m,nextBtnDisabled:g,onPrevButtonClick:b,onNextButtonClick:_}=(0,o.Hd)(d);return a.createElement("div",{className:"embla"},a.createElement("div",{className:"embla__viewport",ref:r},a.createElement("div",{className:"embla__container"},n.map((e=>a.createElement("div",{className:"embla__slide embla__class-names",key:e},a.createElement("img",{className:"embla__slide__img",src:(0,l.u)(e),alt:"Your alt text"})))))),a.createElement("div",{className:"embla__controls"},a.createElement("div",{className:"embla__buttons"},a.createElement(o.U1,{onClick:b,disabled:m}),a.createElement(o.WE,{onClick:_,disabled:g})),a.createElement("div",{className:"embla__dots"},f.map(((e,n)=>a.createElement(i.c,{key:n,onClick:()=>p(n),className:"embla__dot".concat(n===u?" embla__dot--selected":"")}))))))}},642:function(e,n,t){t.d(n,{R:function(){return s},c:function(){return c}});var a=t(4041);const s=(e,n)=>{const{0:t,1:s}=(0,a.useState)(0),{0:c,1:o}=(0,a.useState)([]),i=(0,a.useCallback)((t=>{e&&(e.scrollTo(t),n&&n(e))}),[e,n]),l=(0,a.useCallback)((e=>{o(e.scrollSnapList())}),[]),r=(0,a.useCallback)((e=>{s(e.selectedScrollSnap())}),[]);return(0,a.useEffect)((()=>{e&&(l(e),r(e),e.on("reInit",l).on("reInit",r).on("select",r))}),[e,l,r]),{selectedIndex:t,scrollSnaps:c,onDotButtonClick:i}},c=e=>{const{children:n,...t}=e;return a.createElement("button",Object.assign({type:"button"},t),n)}},6448:function(e,n,t){t.d(n,{u:function(){return s}});const a=[t.p+"static/slide-1-47ed6052f4455272d8f76db16447d760.jpg",t.p+"static/slide-2-dc15cfe63eb4aeb8c9c09823179ee64c.jpg",t.p+"static/slide-3-6362505742d23d7cd240880140151a95.jpg",t.p+"static/slide-4-ebad84cfea5ff9481504ded363c22003.jpg",t.p+"static/slide-5-2d88e98502aa565d6269834d7a7be406.jpg"],s=e=>a[e%a.length]},2380:function(e,n,t){t.d(n,{A:function(){return o}});const a={active:!0,breakpoints:{},snapped:"is-snapped",inView:"is-in-view",draggable:"is-draggable",dragging:"is-dragging"};function s(e,n){if(!e||!n)return;const{classList:t}=e;t.contains(n)&&t.remove(n)}function c(e,n){if(!e||!n)return;const{classList:t}=e;t.contains(n)||t.add(n)}function o(e){let n,t,i,l;void 0===e&&(e={});const r=["select"],d=["pointerDown","pointerUp"],u=["slidesInView"];function f(e,t){"pointerDown"===t?c(i,n.dragging):s(i,n.dragging)}function p(e,n){const a=t.containerNode().querySelectorAll("."+n);var o;(o=a,Array.from(o)).forEach((e=>s(e,n))),e.forEach((e=>c(l[e],n)))}function m(){const{slideRegistry:e}=t.internalEngine();p(e[t.selectedScrollSnap()],n.snapped)}function g(){p(t.slidesInView(),n.inView)}return{name:"classNames",options:e,init:function(s,p){t=s;const{mergeOptions:b,optionsAtMedia:_}=p,E=b(a,o.globalOptions),v=b(E,e);n=_(v),i=t.rootNode(),l=t.slideNodes(),!!t.internalEngine().options.watchDrag&&c(i,n.draggable),n.dragging&&d.forEach((e=>t.on(e,f))),n.snapped&&(r.forEach((e=>t.on(e,m))),m()),n.inView&&(u.forEach((e=>t.on(e,g))),g())},destroy:function(){s(i,n.draggable),d.forEach((e=>t.off(e,f))),r.forEach((e=>t.off(e,m))),u.forEach((e=>t.off(e,g))),l.forEach((e=>s(e,n.snapped)))}}}o.globalOptions=void 0}}]);
//# sourceMappingURL=6128-8063df41eda37f34a01a.js.map