(()=>{"use strict";var e={8158:(e,t,o)=>{o(5363),o(71);var a=o(8880),r=o(9592),s=o(3673);function n(e,t,o,a,r,n){const i=(0,s.up)("router-view");return(0,s.wg)(),(0,s.j4)(i,{class:"bckgrd"})}const i=(0,s.aZ)({name:"App"});var l=o(4260);const c=(0,l.Z)(i,[["render",n]]),p=c;var d=o(2308),u=o(7083),m=o(9582);const h=[{path:"/",component:()=>Promise.all([o.e(736),o.e(588)]).then(o.bind(o,6588)),redirect:{name:"dash"},children:[{path:"",name:"dash",component:()=>Promise.all([o.e(736),o.e(53)]).then(o.bind(o,6053)),meta:{title:"Dashboard",showMenuBtn:!0}},{path:"/mail",component:()=>Promise.all([o.e(736),o.e(610)]).then(o.bind(o,3610)),meta:{title:"Mail",showMenuBtn:!0}},{path:"/task",component:()=>Promise.all([o.e(736),o.e(257)]).then(o.bind(o,4257)),meta:{title:"",showMenuBtn:!0}},{path:"/settings",component:()=>o.e(45).then(o.bind(o,4045)),meta:{title:"Settings",showMenuBtn:!0}},{path:"/phRegi",component:()=>Promise.all([o.e(736),o.e(890)]).then(o.bind(o,2148))},{path:"/phsell",component:()=>Promise.all([o.e(736),o.e(375)]).then(o.bind(o,5375)),meta:{title:"Sell",showMenuBtn:!0}},{path:"/phStock",component:()=>Promise.all([o.e(736),o.e(856)]).then(o.bind(o,2856)),meta:{title:"Inventory",showMenuBtn:!0}}]},{path:"/splash",component:()=>Promise.all([o.e(736),o.e(564)]).then(o.bind(o,9564)),meta:{title:""}},{path:"/:catchAll(.*)*",component:()=>Promise.all([o.e(736),o.e(193)]).then(o.bind(o,2193))}],f=h,g=(0,u.BC)((function({store:e}){const t=m.r5,o=(0,m.p7)({scrollBehavior:()=>({left:0,top:0}),routes:f,history:t("")});return o.beforeEach(((e,t,o)=>{let a=localStorage.getItem("ariamin-cred");"/splash"!==e.path?a?o():o("/splash"):o()})),o}));async function b(e,t){const a="function"===typeof d["default"]?await(0,d["default"])({}):d["default"],{storeKey:s}=await Promise.resolve().then(o.bind(o,2308)),n="function"===typeof g?await g({store:a}):g;a.$router=n;const i=e(p);return i.use(r.Z,t),{app:i,store:a,storeKey:s,router:n}}var v=o(4434),y=o(6611);const w={config:{},plugins:{Notify:v.Z,Dialog:y.Z}},S="";async function P({app:e,router:t,store:o,storeKey:a},r){let s=!1;const n=e=>{try{return t.resolve(e).href}catch(o){}return Object(e)===e?null:e},i=e=>{if(s=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=n(e);null!==t&&(window.location.href=t,window.location.reload())},l=window.location.href.replace(window.location.origin,"");for(let p=0;!1===s&&p<r.length;p++)try{await r[p]({app:e,router:t,store:o,ssrContext:null,redirect:i,urlPath:l,publicPath:S})}catch(c){return c&&c.url?void i(c.url):void console.error("[Quasar] boot error:",c)}!0!==s&&(e.use(t),e.use(o,a),e.mount("#q-app"))}b(a.ri,w).then((e=>Promise.all([Promise.resolve().then(o.bind(o,4112)),Promise.resolve().then(o.bind(o,5474))]).then((t=>{const o=t.map((e=>e.default)).filter((e=>"function"===typeof e));P(e,o)}))))},5474:(e,t,o)=>{o.r(t),o.d(t,{default:()=>i,axios:()=>s.a,api:()=>n});var a=o(7083),r=o(52),s=o.n(r);s().defaults.baseURL="http://192.168.1.102:4000";const n=s().create({baseURL:"http://192.168.1.102:4000"}),i=(0,a.xr)((({app:e})=>{e.config.globalProperties.$axios=s(),e.config.globalProperties.$api=n}))},4112:(e,t,o)=>{o.r(t),o.d(t,{default:()=>l,i18n:()=>i});var a=o(7083),r=o(5948);const s={failed:"Action failed",success:"Action was successful"},n={"en-US":s},i=(0,r.o)({locale:"en-US",messages:n}),l=(0,a.xr)((({app:e})=>{e.use(i)}))},2308:(e,t,o)=>{o.r(t),o.d(t,{default:()=>j});var a=o(7083),r=o(3617),s=(o(71),o(8603)),n=o(4434);n.Z.setDefaults({position:"top",timeout:2500,icon:"info"});const i={step:0,prevStep:0,slide:0,signState:""},l={status:0,showSearch:!1,searchTerm:"",showDlg:!1,dialogLoaded:!1,filter:{if:!1,item:"",val:""},sort:{if:!1}},c={page:Object.assign({},i),app:{breakpoint:940,notifList:[],searchTerm:"",subGroups:["pharmacy--sell--shopping_cart--/pht/sell","pharmacy--record--history--/pht/sellhist","pharmacy--inventory--inventory_2--/pht/inventory","clinic--appointment--medical_services--/clinic"],inputStyle:"",inputDense:!1,itemsSelected:[]},mainLayout:Object.assign({},l),cal:{}},p={UPDATE(e,t){for(let o in t)(0,s.set)(e,o,t[o])},RESET(e,t){for(var o in t)(0,s.set)(e,o.item,o.def)},SETSTEP(e,t){e.page.prevStep=e.page.step,e.page.step=t.step,e.mainLayout=Object.assign({},l)},NOTIFY(e){for(let t of e.app.notifList){let e=t.split("/");n.Z.create({type:"p"===e[0]?"positive":"negative",message:e[1]})}e.notifList=[]}},d={update({commit:e},t){e("UPDATE",t)},setStep({commit:e},t){e("SETSTEP",t)},notify({commit:e},t){e("UPDATE",t),e("NOTIFY")}},u={},m={namespaced:!0,state:c,mutations:p,actions:d,getters:u};var h=o(5474);const f={status:"",showSignForm:!1,serverUserData:[],token:localStorage.getItem("user-token"),forgotStep:1},g={update(e,t){(0,s.set)(e,t.item,t.val)},reset(e,t){for(var o in t)e[o.obj]=Object.assign({},o.def)},auth_request(e){e.status="loading"},auth_success(e,t){e.status=t.status?"success":"",e.token=t.token?t.token:""},auth_error(e){localStorage.removeItem("user-token")},logOut(e){e.status="",e.token="",e.serverUserData="",e.forgotStep=1,localStorage.removeItem("user-token"),localStorage.removeItem("email-token"),localStorage.removeItem("pass-token"),router.push({path:"/splash"})},showForm(e,t){e.showSignForm=t.state},setUserData(e,t){e.serverUserData=t},setForgotStep(e,t){e.forgotStep=t}},b={update({commit:e},t){e("update",t)},getUserData({commit:e}){try{(0,h.axios)({url:"/auth/userData",method:"post"}).then((t=>{const{data:o}=t;e("setUserData",o)}))}catch(t){console.log(t)}},registerUser({commit:e,dispatch:t},o){return new Promise(((a,r)=>{e("auth_request"),(0,h.axios)({url:"/auth/signup",method:"POST",data:o}).then((e=>{const{data:o}=e;localStorage.setItem("email-token",o.emailToken),t("app/notify",{"page.step":3,"app.notifList":["p/Registeration Successfull"]},{root:!0}),a(e)})).catch((e=>{t("app/notify",{"page.step":3,"app.notifList":["w/Registeration Successfull"]},{root:!0}),r(e)}))}))},loginUser({commit:e,dispatch:t},o){return new Promise(((a,r)=>{e("auth_request"),(0,h.axios)({url:"/auth/signin",data:o,method:"POST"}).then((r=>{if(200===r.status){const{data:e}=r;e.emailToken?(localStorage.setItem("email-token",e.emailToken),t("app/notify",{"page.step":3},{root:!0})):e.token&&(localStorage.setItem("user-token",e.token),localStorage.setItem("user-data",e.data),(0,h.axios)({url:"/auth/userData",method:"post"}).then((e=>{e.data;this.$router.push({path:"/"})}))),o&&("error"===e.status?t("app/notify",{"app.notifList":[`w/${e.msg}`]},{root:!0}):(t("app/notify",{"app.notifList":["p/"+(o.resend?"Verification Email Sent!":"login Successfull")]},{root:!0}),this.$router.push({path:"/"})))}else 401===r.status&&e("showForm",{state:!0});a(r)})).catch((e=>{console.log(e),o&&t("app/notify",{"app.notifList":[`w/${e.response.data.msg}`]},{root:!0}),r(e)}))}))},verifyEmail({commit:e,dispatch:t},o){return new Promise(((a,r)=>{e("auth_request"),(0,h.axios)({url:"/auth/verifyEmail",data:o,method:"POST"}).then((o=>{const{token:r}=o.data;localStorage.removeItem("emailToken"),localStorage.setItem("user-token",r),t("app/notify",{"app.notifList":["p/Email Address Verified"]},{root:!0}),this.$router.push({path:"/"}),e("auth_success",{token:r}),a(o)})).catch((t=>{e("auth_error"),r(t)}))}))},logoutUser({commit:e,dispatch:t}){return new Promise(((o,a)=>{e("auth_request",{status:"signLoad"}),(0,h.axios)({url:"/auth/logout",method:"POST",withCredentials:!0}).then((a=>{e("logOut"),t("app/notify",{"app.notifList":["p/logout Successfull!"]},{root:!0}),this.$router.push("/splash"),o(a)})).catch((o=>{t("app/notify",{"app.notifList":["w/Logout failed"]},{root:!0}),e("auth_error"),a(o)}))}))},forgotPass({commit:e,dispatch:t},o){try{(0,h.axios)({url:"/auth/forgotPass",method:"POST",data:o}).then((a=>{console.log(a),a.data.passToken&&o.email&&(localStorage.setItem("pass-token",a.data.passToken),e("setForgotStep",2)),o.vcode&&200===a.status&&e("setForgotStep",3),o.pass&&o.repass&&200===a.status&&(e("logOut"),t("app/notify",{"app.notifList":[`p/${a.data.msg}`]},{root:!0}))}))}catch(a){t("app/notify",{"app.notifList":[`p/${a.response.data.msg}`]},{root:!0})}},ifConnected({dispatch:e}){try{(0,h.axios)({url:"/auth/isConnected",method:"POST",withCredentials:!0}).then((t=>{e("app/notify",{"app.notifList":["p/connected!"]},{root:!0})}))}catch(t){e("app/notify",{"app.notifList":["p/Not connected!!"]},{root:!0})}}},v={},y={namespaced:!0,state:f,mutations:g,actions:b,getters:v};var w=o(52),S=o.n(w);let P;"object"==typeof window?window.indexedDB:webkitIndexedDB;const T={async get(e,t,o,a=1){return new Promise(((r,s)=>{if(P)return r(P);console.log("OPENING DB",P);let n=window.indexedDB.open(e,a);n.onerror=e=>{console.log("Error opening db",e),s("Error")},n.onsuccess=e=>{P=e.target.result,r(P)},n.onupgradeneeded=e=>{console.log("onupgradeneeded");let a=e.target.result;a.createObjectStore(t,{keyPath:o})}}))},async read(e,t,o){let a=await this.get(e,t,o);return new Promise((e=>{let o=a.transaction([t],"readonly");o.oncomplete=()=>{e(s)};let r=o.objectStore(t),s=[];r.openCursor().onsuccess=e=>{let t=e.target.result;t&&(s.push(t.value),t.continue())}}))},async write(e,t,o,a){let r=await this.get(e,t,o);return new Promise((e=>{let o=r.transaction([t],"readwrite");o.oncomplete=()=>{e()};let s=o.objectStore(t);for(let t of a)s.put(t)}))}};const k={registerStep:0,masterList:{19:{id:"1280",drug_code:179,generic_id:2005,persian_name:"میگراکیم 100 mg سوماتریپتان بصورت سوکسینات",generic:"SUMATRIPTAN AS SUCCINATE",brand:"MIGRAKIM",dose:"100 mg",dosage:"TABLET",brand_owner:"دارو سازی حکیم"}},genericCodes:{},dosageForm:{},adminRoute:{},adminRoutine:{},custIndex:{},searchTerms:{162:"2005 - SUMATRIPTAN AS SUCCINATE - MIGRAKIM - میگراکیم 100 mg سوماتریپتان بصورت سوکسینات - "},searchBased:["generic_id","generic","brand"],filterBased:["generic","dose","dosage"],inventory:{2005:["179|12/22|3000","179|11/22|300"]},recent:{2005:{179:12}},medCart:[]},A={UPDATE(e,t){for(let o in t)(0,s.set)(e,o,t[o])}},E={update({commit:e},t){console.log(t),e("UPDATE",t)},loginTamin({commit:e},t){},registerPharmacy({commit:e,store:t,dispatch:o},a){new Promise(((e,r)=>{S()({method:"POST",url:"/phmgt/registerPharmacy",data:a}).then((a=>{a.status,o("UPDATE",{registerStep:t.registerStep+1}),e(a)})).catch((e=>{o("app/notify",{"app.notifList":["w/Registeration Failed, Try Again"]}),r(e)}))}))},getAriaminMainMedList({commit:e,state:t}){return new Promise((async(o,a)=>{if(t.masterList.length>=1);else{const t=await T.read("med_info","med_list","drug_code");t.length?(e("UPDATE",{masterList:t}),o()):S()({url:"/phmgt/getAriaminMedList",method:"POST"}).then((e=>e.data)).then((t=>{let a=t;e("UPDATE",{masterList:a}),T.write("med_info","med_list","drug_code",a),o()})).catch((e=>a(e)))}}))},createSearchTerms({commit:e,state:t}){let o={};for(const[a]of Object.entries(t.inventory)){let e="";for(let o of t.searchBased)word+=t.masterList[a][o]+"|";o[a]=e}e("UPDATE",{searchTerms:o})}},L={medList:e=>e},O={namespaced:!0,state:k,mutations:A,actions:E,getters:L},_={dashboard:{},wallet:{},cal:{},mail:{},job:{}},D={},I={},C={},U={namespaced:!0,state:_,mutations:I,actions:D,getters:C},j=(0,a.h)((function(){const e=(0,r.MT)({modules:{app:m,auth:y,hCare:O,user:U},strict:!1});return e}))}},t={};function o(a){var r=t[a];if(void 0!==r)return r.exports;var s=t[a]={id:a,loaded:!1,exports:{}};return e[a].call(s.exports,s,s.exports,o),s.loaded=!0,s.exports}o.m=e,(()=>{var e=[];o.O=(t,a,r,s)=>{if(!a){var n=1/0;for(p=0;p<e.length;p++){for(var[a,r,s]=e[p],i=!0,l=0;l<a.length;l++)(!1&s||n>=s)&&Object.keys(o.O).every((e=>o.O[e](a[l])))?a.splice(l--,1):(i=!1,s<n&&(n=s));if(i){e.splice(p--,1);var c=r();void 0!==c&&(t=c)}}return t}s=s||0;for(var p=e.length;p>0&&e[p-1][2]>s;p--)e[p]=e[p-1];e[p]=[a,r,s]}})(),(()=>{o.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return o.d(t,{a:t}),t}})(),(()=>{o.d=(e,t)=>{for(var a in t)o.o(t,a)&&!o.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}})(),(()=>{o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,a)=>(o.f[a](e,t),t)),[]))})(),(()=>{o.u=e=>"js/"+e+"."+{45:"cb60935e",53:"873dbd31",59:"62ab7145",100:"c3f25997",148:"1fbb84a6",174:"0474f028",193:"88002f51",219:"f0e959d1",257:"edbc2fbd",282:"c38a4b5f",375:"13840c99",395:"af094a76",495:"b2ab3617",551:"6a7c51c2",564:"9b20302c",588:"4d752e98",610:"5488664f",621:"8ec4fabd",651:"6c3326d7",661:"0fc83c02",678:"55e074ec",770:"53fbaa1e",806:"a5b0a879",844:"524d1fb2",850:"9761dd6c",856:"fbedd290",890:"e947515e",893:"479b4bc0",922:"da6c5fd1"}[e]+".js"})(),(()=>{o.miniCssF=e=>"css/"+({143:"app",736:"vendor"}[e]||e)+"."+{53:"1de89f75",143:"79618f69",257:"d08b475c",551:"f9c277b7",564:"6bd3bf36",588:"a17d988b",661:"a01ba60f",678:"a01ba60f",736:"7dfb6191",856:"d6bb4b6c",893:"22e5a67a",922:"a81198ac"}[e]+".css"})(),(()=>{o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="ariamin:";o.l=(a,r,s,n)=>{if(e[a])e[a].push(r);else{var i,l;if(void 0!==s)for(var c=document.getElementsByTagName("script"),p=0;p<c.length;p++){var d=c[p];if(d.getAttribute("src")==a||d.getAttribute("data-webpack")==t+s){i=d;break}}i||(l=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,o.nc&&i.setAttribute("nonce",o.nc),i.setAttribute("data-webpack",t+s),i.src=a),e[a]=[r];var u=(t,o)=>{i.onerror=i.onload=null,clearTimeout(m);var r=e[a];if(delete e[a],i.parentNode&&i.parentNode.removeChild(i),r&&r.forEach((e=>e(o))),t)return t(o)},m=setTimeout(u.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=u.bind(null,i.onerror),i.onload=u.bind(null,i.onload),l&&document.head.appendChild(i)}}})(),(()=>{o.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{o.nmd=e=>(e.paths=[],e.children||(e.children=[]),e)})(),(()=>{o.p=""})(),(()=>{var e=(e,t,o,a)=>{var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var s=s=>{if(r.onerror=r.onload=null,"load"===s.type)o();else{var n=s&&("load"===s.type?"missing":s.type),i=s&&s.target&&s.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=n,l.request=i,r.parentNode.removeChild(r),a(l)}};return r.onerror=r.onload=s,r.href=t,document.head.appendChild(r),r},t=(e,t)=>{for(var o=document.getElementsByTagName("link"),a=0;a<o.length;a++){var r=o[a],s=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(s===e||s===t))return r}var n=document.getElementsByTagName("style");for(a=0;a<n.length;a++){r=n[a],s=r.getAttribute("data-href");if(s===e||s===t)return r}},a=a=>new Promise(((r,s)=>{var n=o.miniCssF(a),i=o.p+n;if(t(n,i))return r();e(a,i,r,s)})),r={143:0};o.f.miniCss=(e,t)=>{var o={53:1,257:1,551:1,564:1,588:1,661:1,678:1,856:1,893:1,922:1};r[e]?t.push(r[e]):0!==r[e]&&o[e]&&t.push(r[e]=a(e).then((()=>{r[e]=0}),(t=>{throw delete r[e],t})))}})(),(()=>{var e={143:0};o.f.j=(t,a)=>{var r=o.o(e,t)?e[t]:void 0;if(0!==r)if(r)a.push(r[2]);else{var s=new Promise(((o,a)=>r=e[t]=[o,a]));a.push(r[2]=s);var n=o.p+o.u(t),i=new Error,l=a=>{if(o.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var s=a&&("load"===a.type?"missing":a.type),n=a&&a.target&&a.target.src;i.message="Loading chunk "+t+" failed.\n("+s+": "+n+")",i.name="ChunkLoadError",i.type=s,i.request=n,r[1](i)}};o.l(n,l,"chunk-"+t,t)}},o.O.j=t=>0===e[t];var t=(t,a)=>{var r,s,[n,i,l]=a,c=0;if(n.some((t=>0!==e[t]))){for(r in i)o.o(i,r)&&(o.m[r]=i[r]);if(l)var p=l(o)}for(t&&t(a);c<n.length;c++)s=n[c],o.o(e,s)&&e[s]&&e[s][0](),e[n[c]]=0;return o.O(p)},a=self["webpackChunkariamin"]=self["webpackChunkariamin"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var a=o.O(void 0,[736],(()=>o(8158)));a=o.O(a)})();