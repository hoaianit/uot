if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,o)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let c={};const d=e=>n(e,r),l={module:{uri:r},exports:c,require:d};i[r]=Promise.all(s.map((e=>l[e]||d(e)))).then((e=>(o(...e),c)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-c4b0cdb4.css",revision:null},{url:"assets/index-e8351f32.js",revision:null},{url:"assets/Preview-4d5ce433.js",revision:null},{url:"assets/workbox-window.prod.es5-5ffdab76.js",revision:null},{url:"index.html",revision:"6e359cc2bea58f73a3c52e28cad4b590"},{url:"favicon.ico",revision:"d017f42ac2ebc09b545217608edc1217"},{url:"icons/icon-192x192.png",revision:"c36182ea804da096add77f3595985fd2"},{url:"icons/icon-256x256.png",revision:"722e46224186e4ca7be3b292655f84a5"},{url:"icons/icon-384x384.png",revision:"dc1a552818cc5a75229921465406a817"},{url:"icons/icon-512x512.png",revision:"1f95c0f3d2d69d58827c4ec506d17bc1"},{url:"manifest.webmanifest",revision:"df2287df3a916fedb3b26686402d60aa"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
