"use strict";(self.webpackChunkembla_carousel_docs=self.webpackChunkembla_carousel_docs||[]).push([[3602],{3602:function(e,n,t){t.r(n),t.d(n,{default:function(){return d}});var o=t(4041);const a=e=>{const{children:n,...t}=e;return o.createElement("button",Object.assign({type:"button"},t),n)},l=e=>{const{children:n,...t}=e;return o.createElement("button",Object.assign({className:"embla__button embla__button--prev",type:"button"},t),o.createElement("svg",{className:"embla__button__svg",viewBox:"0 0 532 532"},o.createElement("path",{fill:"currentColor",d:"M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"}),o.createElement("path",{fill:"currentColor",d:"M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"}),o.createElement("path",{fill:"currentColor",d:"M520.646 355.66c13.805 13.793 13.805 36.208 0 50.001-13.804 13.785-36.238 13.785-50.034 0L266 201.22 61.391 405.66c-13.805 13.785-36.239 13.785-50.044 0-13.796-13.793-13.796-36.208 0-50.002 22.947-22.928 206.507-206.395 229.454-229.332a35.065 35.065 0 0 1 25.126-10.326c9.2 0 18.26 3.393 25.2 10.326 45.901 45.865 206.564 206.404 229.52 229.332Z"})),n)},c=e=>{const{children:n,...t}=e;return o.createElement("button",Object.assign({className:"embla__button embla__button--next",type:"button"},t),o.createElement("svg",{className:"embla__button__svg",viewBox:"0 0 532 532"},o.createElement("path",{fill:"currentColor",d:"M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"}),o.createElement("path",{fill:"currentColor",d:"M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"}),o.createElement("path",{fill:"currentColor",d:"M11.354 176.34c-13.805-13.793-13.805-36.208 0-50.001 13.804-13.785 36.238-13.785 50.034 0L266 330.78l204.61-204.442c13.805-13.785 36.239-13.785 50.044 0 13.796 13.793 13.796 36.208 0 50.002a5994246.277 5994246.277 0 0 0-229.454 229.332 35.065 35.065 0 0 1-25.126 10.326c-9.2 0-18.26-3.393-25.2-10.326C194.973 359.808 34.31 199.269 11.354 176.34Z"})),n)},s=e=>{const{selectedSnap:n,snapCount:t}=e;return o.createElement("div",{className:"embla__selected-snap-display"},n+1," / ",t)};var r=t(3710),i=t(2380),u=t(7154);var d=e=>{const{slides:n,options:t}=e,[d,p]=(0,u.A)(t,[(0,r.A)(),(0,i.A)()]),m=(0,o.useCallback)((e=>{var n;const t=null==e||null===(n=e.plugins())||void 0===n?void 0:n.autoplay;if(!t)return;(!1===t.options.stopOnInteraction?t.reset:t.stop)()}),[]),{selectedIndex:f,scrollSnaps:b,onDotButtonClick:g}=((e,n)=>{const{0:t,1:a}=(0,o.useState)(0),{0:l,1:c}=(0,o.useState)([]),s=(0,o.useCallback)((t=>{e&&(e.scrollTo(t),n&&n(e))}),[e,n]),r=(0,o.useCallback)((e=>{c(e.scrollSnapList())}),[]),i=(0,o.useCallback)((e=>{a(e.selectedScrollSnap())}),[]);return(0,o.useEffect)((()=>{e&&(r(e),i(e),e.on("reInit",r).on("reInit",i).on("select",i))}),[e,r,i]),{selectedIndex:t,scrollSnaps:l,onDotButtonClick:s}})(p,m),{prevBtnDisabled:v,nextBtnDisabled:E,onPrevButtonClick:_,onNextButtonClick:C}=((e,n)=>{const{0:t,1:a}=(0,o.useState)(!0),{0:l,1:c}=(0,o.useState)(!0),s=(0,o.useCallback)((()=>{e&&(e.scrollPrev(),n&&n(e))}),[e,n]),r=(0,o.useCallback)((()=>{e&&(e.scrollNext(),n&&n(e))}),[e,n]),i=(0,o.useCallback)((e=>{a(!e.canScrollPrev()),c(!e.canScrollNext())}),[]);return(0,o.useEffect)((()=>{e&&(i(e),e.on("reInit",i).on("select",i))}),[e,i]),{prevBtnDisabled:t,nextBtnDisabled:l,onPrevButtonClick:s,onNextButtonClick:r}})(p,m),{selectedSnap:S,snapCount:N}=(e=>{const{0:n,1:t}=(0,o.useState)(0),{0:a,1:l}=(0,o.useState)(0),c=(0,o.useCallback)((e=>{l(e.scrollSnapList().length),t(e.selectedScrollSnap())}),[]);return(0,o.useEffect)((()=>{e&&(c(e),e.on("select",c),e.on("reInit",c))}),[e,c]),{selectedSnap:n,snapCount:a}})(p);return o.createElement("section",{className:"embla",dir:"rtl"},o.createElement("div",{className:"embla__viewport",ref:d},o.createElement("div",{className:"embla__container"},n.map((e=>o.createElement("div",{className:"embla__slide",key:e},o.createElement("div",{className:"embla__slide__number"},e+1)))))),o.createElement("div",{className:"embla__controls"},o.createElement("div",{className:"embla__buttons"},o.createElement(l,{onClick:_,disabled:v}),o.createElement(c,{onClick:C,disabled:E})),o.createElement("div",{className:"embla__dots"},b.map(((e,n)=>o.createElement(a,{key:n,onClick:()=>g(n),className:"embla__dot".concat(n===f?" embla__dot--selected":"")})))),o.createElement(s,{selectedSnap:S,snapCount:N})))}},3710:function(e,n,t){t.d(n,{A:function(){return a}});const o={active:!0,breakpoints:{},delay:4e3,jump:!1,playOnInit:!0,stopOnFocusIn:!0,stopOnInteraction:!0,stopOnMouseEnter:!1,stopOnLastSnap:!1,rootNode:null};function a(e){let n,t,l;void 0===e&&(e={});let c=!1,s=!0,r=!1,i=0;function u(){if(l)return;if(!s)return;c||t.emit("autoplay:play");const{ownerWindow:e}=t.internalEngine();e.clearInterval(i),i=e.setInterval(b,n.delay),c=!0}function d(){if(l)return;c&&t.emit("autoplay:stop");const{ownerWindow:e}=t.internalEngine();e.clearInterval(i),i=0,c=!1}function p(){if(m())return s=c,d();s&&u()}function m(){const{ownerDocument:e}=t.internalEngine();return"hidden"===e.visibilityState}function f(e){void 0!==e&&(r=e),s=!0,u()}function b(){const{index:e}=t.internalEngine(),o=e.clone().add(1).get(),a=t.scrollSnapList().length-1;n.stopOnLastSnap&&o===a&&d(),t.canScrollNext()?t.scrollNext(r):t.scrollTo(0,r)}return{name:"autoplay",options:e,init:function(c,i){t=c;const{mergeOptions:f,optionsAtMedia:b}=i,g=f(o,a.globalOptions),v=f(g,e);if(n=b(v),t.scrollSnapList().length<=1)return;r=n.jump,l=!1;const{eventStore:E,ownerDocument:_}=t.internalEngine(),C=t.rootNode(),S=n.rootNode&&n.rootNode(C)||C,N=t.containerNode();t.on("pointerDown",d),n.stopOnInteraction||t.on("pointerUp",u),n.stopOnMouseEnter&&(E.add(S,"mouseenter",(()=>{s=!1,d()})),n.stopOnInteraction||E.add(S,"mouseleave",(()=>{s=!0,u()}))),n.stopOnFocusIn&&(E.add(N,"focusin",d),n.stopOnInteraction||E.add(N,"focusout",u)),E.add(_,"visibilitychange",p),n.playOnInit&&!m()&&u()},destroy:function(){t.off("pointerDown",d).off("pointerUp",u),d(),l=!0,c=!1},play:f,stop:function(){c&&d()},reset:function(){c&&f()},isPlaying:function(){return c}}}a.globalOptions=void 0},2380:function(e,n,t){t.d(n,{A:function(){return c}});const o={active:!0,breakpoints:{},snapped:"is-snapped",inView:"is-in-view",draggable:"is-draggable",dragging:"is-dragging"};function a(e,n){if(!e||!n)return;const{classList:t}=e;t.contains(n)&&t.remove(n)}function l(e,n){if(!e||!n)return;const{classList:t}=e;t.contains(n)||t.add(n)}function c(e){let n,t,s,r;void 0===e&&(e={});const i=["select"],u=["pointerDown","pointerUp"],d=["slidesInView"];function p(e,t){"pointerDown"===t?l(s,n.dragging):a(s,n.dragging)}function m(e,n){const o=t.containerNode().querySelectorAll("."+n);var c;(c=o,Array.from(c)).forEach((e=>a(e,n))),e.forEach((e=>l(r[e],n)))}function f(){const{slideRegistry:e}=t.internalEngine();m(e[t.selectedScrollSnap()],n.snapped)}function b(){m(t.slidesInView(),n.inView)}return{name:"classNames",options:e,init:function(a,m){t=a;const{mergeOptions:g,optionsAtMedia:v}=m,E=g(o,c.globalOptions),_=g(E,e);n=v(_),s=t.rootNode(),r=t.slideNodes(),!!t.internalEngine().options.watchDrag&&l(s,n.draggable),n.dragging&&u.forEach((e=>t.on(e,p))),n.snapped&&(i.forEach((e=>t.on(e,f))),f()),n.inView&&(d.forEach((e=>t.on(e,b))),b())},destroy:function(){a(s,n.draggable),u.forEach((e=>t.off(e,p))),i.forEach((e=>t.off(e,f))),d.forEach((e=>t.off(e,b))),r.forEach((e=>a(e,n.snapped)))}}}c.globalOptions=void 0}}]);
//# sourceMappingURL=3602-1df978a2563465b2ac92.js.map