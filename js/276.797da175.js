(self["webpackChunkQUAD"]=self["webpackChunkQUAD"]||[]).push([[276],{9662:function(t,n,e){var r=e(614),o=e(6330),i=TypeError;t.exports=function(t){if(r(t))return t;throw i(o(t)+" is not a function")}},1223:function(t,n,e){var r=e(5112),o=e(30),i=e(3070).f,u=r("unscopables"),a=Array.prototype;void 0==a[u]&&i(a,u,{configurable:!0,value:o(null)}),t.exports=function(t){a[u][t]=!0}},9670:function(t,n,e){var r=e(111),o=String,i=TypeError;t.exports=function(t){if(r(t))return t;throw i(o(t)+" is not an object")}},1318:function(t,n,e){var r=e(5656),o=e(1400),i=e(6244),u=function(t){return function(n,e,u){var a,c=r(n),f=i(c),s=o(u,f);if(t&&e!=e){while(f>s)if(a=c[s++],a!=a)return!0}else for(;f>s;s++)if((t||s in c)&&c[s]===e)return t||s||0;return!t&&-1}};t.exports={includes:u(!0),indexOf:u(!1)}},4326:function(t,n,e){var r=e(1702),o=r({}.toString),i=r("".slice);t.exports=function(t){return i(o(t),8,-1)}},9920:function(t,n,e){var r=e(2597),o=e(3887),i=e(1236),u=e(3070);t.exports=function(t,n,e){for(var a=o(n),c=u.f,f=i.f,s=0;s<a.length;s++){var p=a[s];r(t,p)||e&&r(e,p)||c(t,p,f(n,p))}}},8880:function(t,n,e){var r=e(9781),o=e(3070),i=e(9114);t.exports=r?function(t,n,e){return o.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},9114:function(t){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},8052:function(t,n,e){var r=e(614),o=e(3070),i=e(6339),u=e(3072);t.exports=function(t,n,e,a){a||(a={});var c=a.enumerable,f=void 0!==a.name?a.name:n;return r(e)&&i(e,f,a),a.global?c?t[n]=e:u(n,e):(a.unsafe?t[n]&&(c=!0):delete t[n],c?t[n]=e:o.f(t,n,{value:e,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})),t}},3072:function(t,n,e){var r=e(7854),o=Object.defineProperty;t.exports=function(t,n){try{o(r,t,{value:n,configurable:!0,writable:!0})}catch(e){r[t]=n}return n}},9781:function(t,n,e){var r=e(7293);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(t,n,e){var r=e(7854),o=e(111),i=r.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},8113:function(t,n,e){var r=e(5005);t.exports=r("navigator","userAgent")||""},7392:function(t,n,e){var r,o,i=e(7854),u=e(8113),a=i.process,c=i.Deno,f=a&&a.versions||c&&c.version,s=f&&f.v8;s&&(r=s.split("."),o=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!o&&u&&(r=u.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=u.match(/Chrome\/(\d+)/),r&&(o=+r[1]))),t.exports=o},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(t,n,e){var r=e(7854),o=e(1236).f,i=e(8880),u=e(8052),a=e(3072),c=e(9920),f=e(4705);t.exports=function(t,n){var e,s,p,l,v,g,m=t.target,d=t.global,b=t.stat;if(s=d?r:b?r[m]||a(m,{}):(r[m]||{}).prototype,s)for(p in n){if(v=n[p],t.dontCallGetSet?(g=o(s,p),l=g&&g.value):l=s[p],e=f(d?p:m+(b?".":"#")+p,t.forced),!e&&void 0!==l){if(typeof v==typeof l)continue;c(v,l)}(t.sham||l&&l.sham)&&i(v,"sham",!0),u(s,p,v,t)}}},7293:function(t){t.exports=function(t){try{return!!t()}catch(n){return!0}}},4374:function(t,n,e){var r=e(7293);t.exports=!r((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},6916:function(t,n,e){var r=e(4374),o=Function.prototype.call;t.exports=r?o.bind(o):function(){return o.apply(o,arguments)}},6530:function(t,n,e){var r=e(9781),o=e(2597),i=Function.prototype,u=r&&Object.getOwnPropertyDescriptor,a=o(i,"name"),c=a&&"something"===function(){}.name,f=a&&(!r||r&&u(i,"name").configurable);t.exports={EXISTS:a,PROPER:c,CONFIGURABLE:f}},1702:function(t,n,e){var r=e(4374),o=Function.prototype,i=o.bind,u=o.call,a=r&&i.bind(u,u);t.exports=r?function(t){return t&&a(t)}:function(t){return t&&function(){return u.apply(t,arguments)}}},5005:function(t,n,e){var r=e(7854),o=e(614),i=function(t){return o(t)?t:void 0};t.exports=function(t,n){return arguments.length<2?i(r[t]):r[t]&&r[t][n]}},8173:function(t,n,e){var r=e(9662);t.exports=function(t,n){var e=t[n];return null==e?void 0:r(e)}},7854:function(t,n,e){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof e.g&&e.g)||function(){return this}()||Function("return this")()},2597:function(t,n,e){var r=e(1702),o=e(7908),i=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,n){return i(o(t),n)}},3501:function(t){t.exports={}},490:function(t,n,e){var r=e(5005);t.exports=r("document","documentElement")},4664:function(t,n,e){var r=e(9781),o=e(7293),i=e(317);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,n,e){var r=e(1702),o=e(7293),i=e(4326),u=Object,a=r("".split);t.exports=o((function(){return!u("z").propertyIsEnumerable(0)}))?function(t){return"String"==i(t)?a(t,""):u(t)}:u},2788:function(t,n,e){var r=e(1702),o=e(614),i=e(5465),u=r(Function.toString);o(i.inspectSource)||(i.inspectSource=function(t){return u(t)}),t.exports=i.inspectSource},9909:function(t,n,e){var r,o,i,u=e(8536),a=e(7854),c=e(1702),f=e(111),s=e(8880),p=e(2597),l=e(5465),v=e(6200),g=e(3501),m="Object already initialized",d=a.TypeError,b=a.WeakMap,y=function(t){return i(t)?o(t):r(t,{})},h=function(t){return function(n){var e;if(!f(n)||(e=o(n)).type!==t)throw d("Incompatible receiver, "+t+" required");return e}};if(u||l.state){var x=l.state||(l.state=new b),w=c(x.get),O=c(x.has),S=c(x.set);r=function(t,n){if(O(x,t))throw new d(m);return n.facade=t,S(x,t,n),n},o=function(t){return w(x,t)||{}},i=function(t){return O(x,t)}}else{var j=v("state");g[j]=!0,r=function(t,n){if(p(t,j))throw new d(m);return n.facade=t,s(t,j,n),n},o=function(t){return p(t,j)?t[j]:{}},i=function(t){return p(t,j)}}t.exports={set:r,get:o,has:i,enforce:y,getterFor:h}},614:function(t){t.exports=function(t){return"function"==typeof t}},4705:function(t,n,e){var r=e(7293),o=e(614),i=/#|\.prototype\./,u=function(t,n){var e=c[a(t)];return e==s||e!=f&&(o(n)?r(n):!!n)},a=u.normalize=function(t){return String(t).replace(i,".").toLowerCase()},c=u.data={},f=u.NATIVE="N",s=u.POLYFILL="P";t.exports=u},111:function(t,n,e){var r=e(614);t.exports=function(t){return"object"==typeof t?null!==t:r(t)}},1913:function(t){t.exports=!1},2190:function(t,n,e){var r=e(5005),o=e(614),i=e(7976),u=e(3307),a=Object;t.exports=u?function(t){return"symbol"==typeof t}:function(t){var n=r("Symbol");return o(n)&&i(n.prototype,a(t))}},6244:function(t,n,e){var r=e(7466);t.exports=function(t){return r(t.length)}},6339:function(t,n,e){var r=e(7293),o=e(614),i=e(2597),u=e(9781),a=e(6530).CONFIGURABLE,c=e(2788),f=e(9909),s=f.enforce,p=f.get,l=Object.defineProperty,v=u&&!r((function(){return 8!==l((function(){}),"length",{value:8}).length})),g=String(String).split("String"),m=t.exports=function(t,n,e){"Symbol("===String(n).slice(0,7)&&(n="["+String(n).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),e&&e.getter&&(n="get "+n),e&&e.setter&&(n="set "+n),(!i(t,"name")||a&&t.name!==n)&&l(t,"name",{value:n,configurable:!0}),v&&e&&i(e,"arity")&&t.length!==e.arity&&l(t,"length",{value:e.arity});try{e&&i(e,"constructor")&&e.constructor?u&&l(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(o){}var r=s(t);return i(r,"source")||(r.source=g.join("string"==typeof n?n:"")),t};Function.prototype.toString=m((function(){return o(this)&&p(this).source||c(this)}),"toString")},4758:function(t){var n=Math.ceil,e=Math.floor;t.exports=Math.trunc||function(t){var r=+t;return(r>0?e:n)(r)}},133:function(t,n,e){var r=e(7392),o=e(7293);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},8536:function(t,n,e){var r=e(7854),o=e(614),i=e(2788),u=r.WeakMap;t.exports=o(u)&&/native code/.test(i(u))},30:function(t,n,e){var r,o=e(9670),i=e(6048),u=e(748),a=e(3501),c=e(490),f=e(317),s=e(6200),p=">",l="<",v="prototype",g="script",m=s("IE_PROTO"),d=function(){},b=function(t){return l+g+p+t+l+"/"+g+p},y=function(t){t.write(b("")),t.close();var n=t.parentWindow.Object;return t=null,n},h=function(){var t,n=f("iframe"),e="java"+g+":";return n.style.display="none",c.appendChild(n),n.src=String(e),t=n.contentWindow.document,t.open(),t.write(b("document.F=Object")),t.close(),t.F},x=function(){try{r=new ActiveXObject("htmlfile")}catch(n){}x="undefined"!=typeof document?document.domain&&r?y(r):h():y(r);var t=u.length;while(t--)delete x[v][u[t]];return x()};a[m]=!0,t.exports=Object.create||function(t,n){var e;return null!==t?(d[v]=o(t),e=new d,d[v]=null,e[m]=t):e=x(),void 0===n?e:i.f(e,n)}},6048:function(t,n,e){var r=e(9781),o=e(3353),i=e(3070),u=e(9670),a=e(5656),c=e(1956);n.f=r&&!o?Object.defineProperties:function(t,n){u(t);var e,r=a(n),o=c(n),f=o.length,s=0;while(f>s)i.f(t,e=o[s++],r[e]);return t}},3070:function(t,n,e){var r=e(9781),o=e(4664),i=e(3353),u=e(9670),a=e(4948),c=TypeError,f=Object.defineProperty,s=Object.getOwnPropertyDescriptor,p="enumerable",l="configurable",v="writable";n.f=r?i?function(t,n,e){if(u(t),n=a(n),u(e),"function"===typeof t&&"prototype"===n&&"value"in e&&v in e&&!e[v]){var r=s(t,n);r&&r[v]&&(t[n]=e.value,e={configurable:l in e?e[l]:r[l],enumerable:p in e?e[p]:r[p],writable:!1})}return f(t,n,e)}:f:function(t,n,e){if(u(t),n=a(n),u(e),o)try{return f(t,n,e)}catch(r){}if("get"in e||"set"in e)throw c("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},1236:function(t,n,e){var r=e(9781),o=e(6916),i=e(5296),u=e(9114),a=e(5656),c=e(4948),f=e(2597),s=e(4664),p=Object.getOwnPropertyDescriptor;n.f=r?p:function(t,n){if(t=a(t),n=c(n),s)try{return p(t,n)}catch(e){}if(f(t,n))return u(!o(i.f,t,n),t[n])}},8006:function(t,n,e){var r=e(6324),o=e(748),i=o.concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},5181:function(t,n){n.f=Object.getOwnPropertySymbols},7976:function(t,n,e){var r=e(1702);t.exports=r({}.isPrototypeOf)},6324:function(t,n,e){var r=e(1702),o=e(2597),i=e(5656),u=e(1318).indexOf,a=e(3501),c=r([].push);t.exports=function(t,n){var e,r=i(t),f=0,s=[];for(e in r)!o(a,e)&&o(r,e)&&c(s,e);while(n.length>f)o(r,e=n[f++])&&(~u(s,e)||c(s,e));return s}},1956:function(t,n,e){var r=e(6324),o=e(748);t.exports=Object.keys||function(t){return r(t,o)}},5296:function(t,n){"use strict";var e={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,o=r&&!e.call({1:2},1);n.f=o?function(t){var n=r(this,t);return!!n&&n.enumerable}:e},2140:function(t,n,e){var r=e(6916),o=e(614),i=e(111),u=TypeError;t.exports=function(t,n){var e,a;if("string"===n&&o(e=t.toString)&&!i(a=r(e,t)))return a;if(o(e=t.valueOf)&&!i(a=r(e,t)))return a;if("string"!==n&&o(e=t.toString)&&!i(a=r(e,t)))return a;throw u("Can't convert object to primitive value")}},3887:function(t,n,e){var r=e(5005),o=e(1702),i=e(8006),u=e(5181),a=e(9670),c=o([].concat);t.exports=r("Reflect","ownKeys")||function(t){var n=i.f(a(t)),e=u.f;return e?c(n,e(t)):n}},4488:function(t){var n=TypeError;t.exports=function(t){if(void 0==t)throw n("Can't call method on "+t);return t}},6200:function(t,n,e){var r=e(2309),o=e(9711),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},5465:function(t,n,e){var r=e(7854),o=e(3072),i="__core-js_shared__",u=r[i]||o(i,{});t.exports=u},2309:function(t,n,e){var r=e(1913),o=e(5465);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.23.1",mode:r?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.23.1/LICENSE",source:"https://github.com/zloirock/core-js"})},1400:function(t,n,e){var r=e(9303),o=Math.max,i=Math.min;t.exports=function(t,n){var e=r(t);return e<0?o(e+n,0):i(e,n)}},5656:function(t,n,e){var r=e(8361),o=e(4488);t.exports=function(t){return r(o(t))}},9303:function(t,n,e){var r=e(4758);t.exports=function(t){var n=+t;return n!==n||0===n?0:r(n)}},7466:function(t,n,e){var r=e(9303),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},7908:function(t,n,e){var r=e(4488),o=Object;t.exports=function(t){return o(r(t))}},7593:function(t,n,e){var r=e(6916),o=e(111),i=e(2190),u=e(8173),a=e(2140),c=e(5112),f=TypeError,s=c("toPrimitive");t.exports=function(t,n){if(!o(t)||i(t))return t;var e,c=u(t,s);if(c){if(void 0===n&&(n="default"),e=r(c,t,n),!o(e)||i(e))return e;throw f("Can't convert object to primitive value")}return void 0===n&&(n="number"),a(t,n)}},4948:function(t,n,e){var r=e(7593),o=e(2190);t.exports=function(t){var n=r(t,"string");return o(n)?n:n+""}},6330:function(t){var n=String;t.exports=function(t){try{return n(t)}catch(e){return"Object"}}},9711:function(t,n,e){var r=e(1702),o=0,i=Math.random(),u=r(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+u(++o+i,36)}},3307:function(t,n,e){var r=e(133);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(t,n,e){var r=e(9781),o=e(7293);t.exports=r&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},5112:function(t,n,e){var r=e(7854),o=e(2309),i=e(2597),u=e(9711),a=e(133),c=e(3307),f=o("wks"),s=r.Symbol,p=s&&s["for"],l=c?s:s&&s.withoutSetter||u;t.exports=function(t){if(!i(f,t)||!a&&"string"!=typeof f[t]){var n="Symbol."+t;a&&i(s,t)?f[t]=s[t]:f[t]=c&&p?p(n):l(n)}return f[t]}},6699:function(t,n,e){"use strict";var r=e(2109),o=e(1318).includes,i=e(7293),u=e(1223),a=i((function(){return!Array(1).includes()}));r({target:"Array",proto:!0,forced:a},{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),u("includes")},968:function(t,n,e){"use strict";e.d(n,{Z:function(){return p}});var r=e(6252),o=e(3577);const i={class:"null-box"},u={class:"text"};function a(t,n,e,a,c,f){return(0,r.wg)(),(0,r.iD)("div",i,[(0,r._)("div",u,(0,o.zw)(t.text),1)])}var c=(0,r.aZ)({props:["type"],computed:{text(){let t="";switch(this.type){case"video":t="조회된 영상이 없습니다";break;case"image":t="조회된 이미지가 없습니다";break;default:t="조회된 데이터가 없습니다";break}return t}}}),f=e(3744);const s=(0,f.Z)(c,[["render",a],["__scopeId","data-v-3b91702a"]]);var p=s},6276:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return j}});var r=e(6252);const o=(0,r.Uk)("추천 리스트");function i(t,n,e,i,u,a){const c=(0,r.up)("ion-back-button"),f=(0,r.up)("ion-buttons"),s=(0,r.up)("ion-title"),p=(0,r.up)("ion-toolbar"),l=(0,r.up)("ion-header"),v=(0,r.up)("GameInfoCard"),g=(0,r.up)("NullBoxContainer"),m=(0,r.up)("ion-content"),d=(0,r.up)("ion-page");return(0,r.wg)(),(0,r.j4)(d,{mode:"ios"},{default:(0,r.w5)((()=>[(0,r.Wm)(l,{class:"ion-no-border"},{default:(0,r.w5)((()=>[(0,r.Wm)(p,null,{default:(0,r.w5)((()=>[(0,r.Wm)(f,null,{default:(0,r.w5)((()=>[(0,r.Wm)(c)])),_:1}),(0,r.Wm)(s,null,{default:(0,r.w5)((()=>[o])),_:1})])),_:1})])),_:1}),(0,r.Wm)(m,null,{default:(0,r.w5)((()=>[t.gameList.length>0?((0,r.wg)(!0),(0,r.iD)(r.HY,{key:0},(0,r.Ko)(t.gameList,(t=>((0,r.wg)(),(0,r.j4)(v,{key:t["id"],game:t},null,8,["game"])))),128)):((0,r.wg)(),(0,r.j4)(g,{key:1}))])),_:1})])),_:1})}e(6699);var u=e(2792),a=e(3577);const c={class:"img-box"},f=["src"],s={key:1,src:"assets/icon/icon-quad.png",alt:""},p={class:"info-box"},l={class:"title"},v={class:"text"},g={class:"hash-tag"};function m(t,n,e,o,i,u){const m=(0,r.up)("ion-card");return(0,r.wg)(),(0,r.j4)(m,{onClick:t.getGameInfo},{default:(0,r.w5)((()=>[(0,r._)("div",c,[t.game["url-gameImage"]?((0,r.wg)(),(0,r.iD)("img",{key:0,src:t.game["url-gameImage"],alt:""},null,8,f)):((0,r.wg)(),(0,r.iD)("img",s))]),(0,r._)("div",p,[(0,r._)("div",l,[(0,r._)("span",null,(0,a.zw)(t.game["game-name"]),1),(0,r._)("span",null,(0,a.zw)(t.game["game-type"])+"("+(0,a.zw)(t.game["game-personnel"])+")",1)]),(0,r._)("div",v,(0,a.zw)(t.game["game-comment"]),1),(0,r._)("div",g,(0,a.zw)(t.game["game-hashTag"]),1)])])),_:1},8,["onClick"])}var d=(0,r.aZ)({props:["game"],components:{IonCard:u.PM},methods:{getGameInfo(){this.$router.push({name:"game",params:{gameId:this.game["id"]}})}}}),b=e(3744);const y=(0,b.Z)(d,[["render",m],["__scopeId","data-v-e108b39a"]]);var h=y,x=e(968),w=e(8602),O=(0,r.aZ)({components:{IonPage:u._i,IonContent:u.W2,IonHeader:u.Gu,IonToolbar:u.sr,IonTitle:u.wd,IonButtons:u.Sm,IonBackButton:u.oU,GameInfoCard:h,NullBoxContainer:x.Z},data(){return{gameList:Array}},async created(){const t=String(this.$route.params.gameType).split(","),n=String(this.$route.params.gamePersonnel).split(","),e=String(this.$route.params.gameLevel).split(","),r=await w.K.get({key:"gameList"});r.value&&(this.gameList=JSON.parse(r.value).filter((r=>{let o=!1,i=!1,u=!1;for(let n=0;n<t.length;n++)if(r["game-type"]==t[n]){o=!0;break}const a=r["game-personnel"].replace("인",""),c=Number(n[0].replace("인",""));if(a.includes("-")){const t=a.split("-").map((t=>Number(t)));t[0]<=c&&t[1]>=c&&(i=!0)}else Number(a)==c&&(i=!0);for(let t=0;t<e.length;t++)if(r["game-level"]==e[t]){u=!0;break}return o&&i&&u})))}});const S=(0,b.Z)(O,[["render",i]]);var j=S}}]);
//# sourceMappingURL=276.797da175.js.map