(function(e){function t(t){for(var i,c,n=t[0],a=t[1],l=t[2],d=0,p=[];d<n.length;d++)c=n[d],Object.prototype.hasOwnProperty.call(s,c)&&s[c]&&p.push(s[c][0]),s[c]=0;for(i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i]);u&&u(t);while(p.length)p.shift()();return r.push.apply(r,l||[]),o()}function o(){for(var e,t=0;t<r.length;t++){for(var o=r[t],i=!0,c=1;c<o.length;c++){var a=o[c];0!==s[a]&&(i=!1)}i&&(r.splice(t--,1),e=n(n.s=o[0]))}return e}var i={},s={app:0},r=[];function c(e){return n.p+"js/"+({about:"about"}[e]||e)+"."+{about:"2e36d27a"}[e]+".js"}function n(t){if(i[t])return i[t].exports;var o=i[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.e=function(e){var t=[],o=s[e];if(0!==o)if(o)t.push(o[2]);else{var i=new Promise((function(t,i){o=s[e]=[t,i]}));t.push(o[2]=i);var r,a=document.createElement("script");a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.src=c(e);var l=new Error;r=function(t){a.onerror=a.onload=null,clearTimeout(d);var o=s[e];if(0!==o){if(o){var i=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+i+": "+r+")",l.name="ChunkLoadError",l.type=i,l.request=r,o[1](l)}s[e]=void 0}};var d=setTimeout((function(){r({type:"timeout",target:a})}),12e4);a.onerror=a.onload=r,document.head.appendChild(a)}return Promise.all(t)},n.m=e,n.c=i,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n.oe=function(e){throw console.error(e),e};var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var d=0;d<a.length;d++)t(a[d]);var u=l;r.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},4487:function(e,t,o){"use strict";o("f7fd")},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var i=o("7a23"),s={class:"bg-gray-200  min-h-screen min-w-full"},r={class:"container bg-gray-200 mx-auto px-10"},c={id:"",class:"py-12"};function n(e,t,o,n,a,l){var d=Object(i["v"])("Navbar"),u=Object(i["v"])("router-view");return Object(i["p"])(),Object(i["d"])("div",s,[Object(i["g"])("div",r,[Object(i["g"])("div",c,[Object(i["g"])(d)]),Object(i["g"])(u)])])}var a=Object(i["z"])("data-v-239d89d8");Object(i["s"])("data-v-239d89d8");var l={class:"flex justify-between"},d=Object(i["g"])("div",{class:"flex"},[Object(i["g"])("img",{src:"/promise-as-logo.jpg",alt:"Logo",class:"rounded-full",width:"45",height:"45"})],-1),u={class:"flex pt-3 "},p={class:"flex flex-row"},b={class:"pr-8"},g=Object(i["f"])("Home"),f={class:"pr-8 "},m=Object(i["f"])("About"),v={class:"pr-8"},j=Object(i["f"])("Services"),h={class:""},O=Object(i["f"])("Contact"),L={class:"flex pt-2"},C={class:"pr-8"},x=Object(i["g"])("i",null,[Object(i["g"])("svg",{width:"24",height:"24",viewBox:"0 0 24 24",class:"text-red-500"},[Object(i["g"])("path",{d:"M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"})])],-1),w={class:"pr-8"},y=Object(i["g"])("i",null,[Object(i["g"])("svg",{width:"24",height:"24",viewBox:"0 0 24 24"},[Object(i["g"])("path",{d:"M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"})])],-1),M={class:"pr-8"},V=Object(i["g"])("i",null,[Object(i["g"])("svg",{width:"24",height:"24",viewBox:"0 0 24 24"},[Object(i["g"])("path",{d:"M8.21 12L6.88 12.89V11.11L8.21 12M11.47 9.82V7.34L7.31 10.12L9.16 11.36L11.47 9.82M16.7 10.12L12.53 7.34V9.82L14.84 11.36L16.7 10.12M7.31 13.88L11.47 16.66V14.18L9.16 12.64L7.31 13.88M12.53 14.18V16.66L16.7 13.88L14.84 12.64L12.53 14.18M12 10.74L10.12 12L12 13.26L13.88 12L12 10.74M22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12M18.18 10.12C18.18 10.09 18.18 10.07 18.18 10.05L18.17 10L18.17 10L18.16 9.95C18.15 9.94 18.15 9.93 18.14 9.91L18.13 9.89L18.11 9.85L18.1 9.83L18.08 9.8L18.06 9.77L18.03 9.74L18 9.72L18 9.7L17.96 9.68L17.95 9.67L12.3 5.91C12.12 5.79 11.89 5.79 11.71 5.91L6.05 9.67L6.05 9.68L6 9.7C6 9.71 6 9.72 6 9.72L5.97 9.74L5.94 9.77L5.93 9.8L5.9 9.83L5.89 9.85L5.87 9.89L5.86 9.91L5.84 9.95L5.84 10L5.83 10L5.82 10.05C5.82 10.07 5.82 10.09 5.82 10.12V13.88C5.82 13.91 5.82 13.93 5.82 13.95L5.83 14L5.84 14L5.84 14.05C5.85 14.06 5.85 14.07 5.86 14.09L5.87 14.11L5.89 14.15L5.9 14.17L5.92 14.2L5.94 14.23C5.95 14.24 5.96 14.25 5.97 14.26L6 14.28L6 14.3L6.04 14.32L6.05 14.33L11.71 18.1C11.79 18.16 11.9 18.18 12 18.18C12.1 18.18 12.21 18.15 12.3 18.1L17.95 14.33L17.96 14.32L18 14.3L18 14.28L18.03 14.26L18.06 14.23L18.08 14.2L18.1 14.17L18.11 14.15L18.13 14.11L18.14 14.09L18.16 14.05L18.16 14L18.17 14L18.18 13.95C18.18 13.93 18.18 13.91 18.18 13.88V10.12M17.12 12.89V11.11L15.79 12L17.12 12.89Z"})])],-1),H={class:""},k=Object(i["g"])("i",null,[Object(i["g"])("svg",{width:"24",height:"24",viewBox:"0 0 24 24"},[Object(i["g"])("path",{d:"M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"})])],-1);Object(i["q"])();var q=a((function(e,t,o,s,r,c){var n=Object(i["v"])("router-link");return Object(i["p"])(),Object(i["d"])("div",l,[d,Object(i["g"])("div",u,[Object(i["g"])("ul",p,[Object(i["g"])("li",b,[Object(i["g"])(n,{to:"/",class:"","active-class":"font-bold border-b text-indigo-900 border-indigo-900"},{default:a((function(){return[g]})),_:1})]),Object(i["g"])("li",f,[Object(i["g"])(n,{to:"/about",class:""},{default:a((function(){return[m]})),_:1})]),Object(i["g"])("li",v,[Object(i["g"])(n,{to:"/services"},{default:a((function(){return[j]})),_:1})]),Object(i["g"])("li",h,[Object(i["g"])(n,{to:"/contact"},{default:a((function(){return[O]})),_:1})])])]),Object(i["g"])("ul",L,[Object(i["g"])("li",C,[Object(i["g"])("a",{href:r.social.facebook,target:"_blank",class:"",title:"Facebook"},[x],8,["href"])]),Object(i["g"])("li",w,[Object(i["g"])("a",{href:r.social.twitter,target:"_blank",class:"",title:"Twitter"},[y],8,["href"])]),Object(i["g"])("li",M,[Object(i["g"])("a",{href:r.social.codepen,target:"_blank",class:"",title:"Codepen"},[V],8,["href"])]),Object(i["g"])("li",H,[Object(i["g"])("a",{href:r.social.github,target:"_blank",class:"",title:"GitHub"},[k],8,["href"])])])])})),_={name:"Navbar",data:function(){return{social:{facebook:"https://facebook.com/promise-atokple",twitter:"https://twitter.com/promise-sudo",instagram:"https://instagram.com/promise-sudo",codepen:"https://codepen.io/papsthehacker",github:"https://github.com/promise-a"}}}};o("4487");_.render=q,_.__scopeId="data-v-239d89d8";var P=_,A={components:{Navbar:P}};o("6f34");A.render=n;var B=A,S=o("9483");Object(S["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});o("d3b7"),o("3ca3"),o("ddb0");var I=o("6c02"),Z=Object(i["e"])('<div class="flex flex-row"><div class="flex flex-col"><div class="pt-24 space-x-3 max-w-md"><h1 class="text-8xl text-left font-bold text-black"> Hey, I&#39;m a <span class="text-indigo-900">software</span> developer. </h1></div><p class="max-w-md pt-6 text-left"> Hi, I&#39;m Promise a freelance web designer/developer from Ghana. I help brands turn their ideas into high quality products. </p><div class="text-left py-4"><input type="email" name="" id="" class="py-4 bg-white px-4  focus-within:border-indigo-900 focus:border-indigo-900 rounded-lg" placeholder="Email Address"><input type="button" value="Subscribe" class="py-4 px-4 text-white hover:cursor-pointer bg-indigo-500 rounded-xl -ml-5"></div><div class="text-sm text-left opacity-70"><p class="">🎉 Join my newsletter and get free strategy!</p></div></div><div class="text-right overflow-hidden flex-grow   justify-end"><div class="\n          bg-blue-100\n          h-auto\n          py-12\n        \n          rounded-tl-full rounded-bl-full rounded-br-full\n        "><img src="/promise-as-hero.png" alt="Promise Hero" class="max-h-96 max-w-96 bg-cover object-contain transform scale-150" width="100%"></div></div></div><div class="py-6"><div class="text-center text-gray-400 uppercase">My Skills</div><div class="text-6xl font-medium"> My Expertise </div></div>',2),E=Object(i["g"])("div",{class:"grid grid-cols-2 gap-5"},[Object(i["g"])("section",{class:"p-6 bg-white shadow-sm rounded-lg"},[Object(i["g"])("div",{class:"flex pb-6 flex-row"},[Object(i["g"])("div",{class:"mr-6 rounded-lg bg-blue-200 h-16 flex justify-center w-16"},[Object(i["g"])("img",{src:"/strategies.svg",alt:"Strategies icon",class:""})]),Object(i["g"])("div",{class:"font-bold text-xl my-auto"},"Strategy & Direction")]),Object(i["g"])("div",{class:"text-left"},[Object(i["g"])("p",null,[Object(i["g"])("span",{class:"font-bold"},"Understand First."),Object(i["f"])(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae saepe consequuntur repellendus dignissimos perspiciatis aperiam reiciendis voluptates, quos provident? Repudiandae porro quam aperiam earum nulla quos cum adipisci. Illo, soluta! ")])])]),Object(i["g"])("section",{class:"p-6 bg-white shadow-sm rounded-lg"},[Object(i["g"])("div",{class:"flex pb-6 flex-row"},[Object(i["g"])("div",{class:"mr-6 rounded-lg bg-blue-200 h-16 flex justify-center w-16"},[Object(i["g"])("i",{class:"my-auto scale-150 transform"},[Object(i["g"])("svg",{width:"24",height:"24",viewBox:"0 0 24 24"},[Object(i["g"])("path",{d:"M15,14L21,17V7L15,10V14M9,14L3,17V7L9,10V14M10,10H14V14H10V10Z"})])])]),Object(i["g"])("div",{class:"font-bold text-xl my-auto"},"Branding & Logo")]),Object(i["g"])("div",{class:"text-left"},[Object(i["g"])("p",null,[Object(i["g"])("span",{class:"font-bold"},"Position the Brand."),Object(i["f"])(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae saepe consequuntur repellendus dignissimos perspiciatis aperiam reiciendis voluptates, quos provident? Repudiandae porro quam aperiam earum nulla quos cum adipisci. Illo, soluta! ")])])]),Object(i["g"])("section",{class:"p-6 bg-white shadow-sm rounded-lg"},[Object(i["g"])("div",{class:"flex pb-6 flex-row"},[Object(i["g"])("div",{class:"mr-6 rounded-lg bg-blue-200 h-16 flex justify-center w-16"},[Object(i["g"])("i",{class:"my-auto transform scale-150"},[Object(i["g"])("svg",{width:"24",height:"24",viewBox:"0 0 24 24"},[Object(i["g"])("path",{d:"M4,2C2.89,2 2,2.89 2,4V14H4V4H14V2H4M8,6C6.89,6 6,6.89 6,8V18H8V8H18V6H8M12,10C10.89,10 10,10.89 10,12V20C10,21.11 10.89,22 12,22H20C21.11,22 22,21.11 22,20V12C22,10.89 21.11,10 20,10H12Z"})])])]),Object(i["g"])("div",{class:"font-bold text-xl my-auto"},"Motion & Animation")]),Object(i["g"])("div",{class:"text-left"},[Object(i["g"])("p",null,[Object(i["g"])("span",{class:"font-bold"},"Communicate to all."),Object(i["f"])(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae saepe consequuntur repellendus dignissimos perspiciatis aperiam reiciendis voluptates, quos provident? Repudiandae porro quam aperiam earum nulla quos cum adipisci. Illo, soluta! ")])])]),Object(i["g"])("section",{class:"p-6 bg-white shadow-sm rounded-lg"},[Object(i["g"])("div",{class:"flex pb-6 flex-row"},[Object(i["g"])("div",{class:"mr-6 rounded-lg bg-indigo-200 h-16 flex justify-center w-16"},[Object(i["g"])("i",{class:"text-center my-auto transform scale-150"},[Object(i["g"])("svg",{width:"24",height:"24",fill:"indigo",viewBox:"0 0 24 24"},[Object(i["g"])("path",{d:"M13,19V16H21V19H13M8.5,13L2.47,7H6.71L11.67,11.95C12.25,12.54 12.25,13.5 11.67,14.07L6.74,19H2.5L8.5,13Z"})])])]),Object(i["g"])("div",{class:"font-bold text-xl my-auto"},"Development")]),Object(i["g"])("div",{class:"text-left"},[Object(i["g"])("p",null,[Object(i["g"])("span",{class:"font-bold"},"Bringing work to life."),Object(i["f"])(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae saepe consequuntur repellendus dignissimos perspiciatis aperiam reiciendis voluptates, quos provident? Repudiandae porro quam aperiam earum nulla quos cum adipisci. Illo, soluta! ")])])])],-1);function N(e,t,o,s,r,c){return Object(i["p"])(),Object(i["d"])(i["a"],null,[Z,E],64)}var T={name:"Home",components:{}};T.render=N;var F=T,R=[{path:"/",name:"Home",component:F},{path:"/about",name:"About",component:function(){return o.e("about").then(o.bind(null,"f820"))}}],J=Object(I["a"])({history:Object(I["b"])("/"),routes:R}),D=J;o("7d05");Object(i["c"])(B).use(D).mount("#app")},"6f34":function(e,t,o){"use strict";o("ec07")},"7d05":function(e,t,o){},ec07:function(e,t,o){},f7fd:function(e,t,o){}});
//# sourceMappingURL=app.aaca1365.js.map