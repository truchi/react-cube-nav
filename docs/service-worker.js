"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/react-cube-nav/index.html","619bd814bba557b1b379964241fc6aa4"],["/react-cube-nav/static/css/main.3c6c61d4.css","eadb43b30f7824a133c41cbe5a723030"],["/react-cube-nav/static/js/main.bcf9ca45.js","9ae034200ae061ec25c529518ceb052b"],["/react-cube-nav/static/media/blastoise.ae52dc68.png","ae52dc688ce4362802a505d38df75716"],["/react-cube-nav/static/media/bulbasaur.12e636c6.png","12e636c62e34ca2ca49ee829a42887db"],["/react-cube-nav/static/media/charizard.cd4ef914.png","cd4ef91465ec6dc4405f990fc1e9d663"],["/react-cube-nav/static/media/charmander.74709e53.png","74709e53cee9644e1ffa276f8529e441"],["/react-cube-nav/static/media/charmeleon.ba8983a9.png","ba8983a9c8e50732c2938579a818d387"],["/react-cube-nav/static/media/ivysaur.d44decc0.png","d44decc0d3fa02bfc2eb411244fe23b7"],["/react-cube-nav/static/media/nidoking.1cfc8a96.png","1cfc8a96ea103bf11879e158405c1f04"],["/react-cube-nav/static/media/nidoqueen.f713318c.png","f713318c59957b0c8fae274c5ed4532a"],["/react-cube-nav/static/media/nidoran♀.a08332f4.png","a08332f4404930d086abdd96bc5891c4"],["/react-cube-nav/static/media/nidoran♂.babb3142.png","babb314201f58f4543b4e0a14e75842c"],["/react-cube-nav/static/media/nidorina.324edadc.png","324edadc02c1e02c91cfb325b4e62b31"],["/react-cube-nav/static/media/nidorino.89be8322.png","89be832226ff1cbf661a229a68f1653a"],["/react-cube-nav/static/media/pichu.f2260144.png","f226014454b0d2ea2a58b63d6b605193"],["/react-cube-nav/static/media/pikachu.fea970fb.png","fea970fb28b2a433cc83bcc09a1cf31f"],["/react-cube-nav/static/media/raichu.898a6f7e.png","898a6f7e8281c71a87c8ad2bb9c66628"],["/react-cube-nav/static/media/squirtle.d3c25186.png","d3c25186ca5d6811032e5efb8143db46"],["/react-cube-nav/static/media/venusaur.bf61de44.png","bf61de4494af5696ca525900ced4ec04"],["/react-cube-nav/static/media/wartortle.f2e9be43.png","f2e9be4308cedb652b4f4f582ec74d5f"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,a,t,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),c=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var n=new Request(t,{credentials:"same-origin"});return fetch(n).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/react-cube-nav/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});