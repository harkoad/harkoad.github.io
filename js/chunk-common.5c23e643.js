(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{"184b":function(e,t,s){"use strict";s.d(t,"a",(function(){return d}));var a=s("ded3"),n=s.n(a),o=(s("ddb0"),s("c19f"),s("ace4"),s("5cc6"),s("20bf"),s("2f62")),i=s("fb4d"),r=s.n(i),l=s("bc3a"),c=s.n(l);const d={methods:{getGeoLoc(){var e=function(e){return e};function t(e){alert("code: "+e.code+"\nmessage: "+e.message+"\n")}this.$q.cordova?cordova.plugins.locationAccuracy.canRequest((function(s){s&&cordova.plugins.locationAccuracy.request((function(s){alert("Successfully requested accuracy: "+s.message),navigator.geolocation.watchPosition(e,t,{timeout:5e3})}),(function(e){alert("Accuracy request failed: error code="+e.code+" error message="+e.message),e.code!==cordova.plugins.locationAccuracy.ERROR_USER_DISAGREED&&window.confirm("Failed to automatically set Location Mode to High Accuracy. Would you like to switch to the Location Settings page and do this manually?")&&cordova.plugins.diagnostic.switchToLocationSettings()}),cordova.plugins.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY)})):"geolocation"in navigator&&"watchPosition"in navigator.geolocation?navigator.geolocation.getCurrentPosition(e,t,{timeout:5e3}):alert("Geolocation is not supported.")},publicKeyCredentialToJSON(e){if(e instanceof Array){const t=[];for(const s of e)t.push(this.publicKeyCredentialToJSON(s));return t}if(e instanceof ArrayBuffer)return e;if(e instanceof Object){const t={};for(const s in e)t[s]=this.publicKeyCredentialToJSON(e[s]);return t}return e},generateRandomBuffer(e){e=e||32;const t=new Uint8Array(e);return window.crypto.getRandomValues(t),t},preformatMakeCredReq(e){return e.challenge=Uint8Array.from(e.challenge,(e=>e.charCodeAt(0))),e.user.id=Uint8Array.from(e.user.id,(e=>e.charCodeAt(0))),console.log(e),e},preformatGetAssertReq(e){e.challenge=r.a.decode(e.challenge);for(const t of e.allowCredentials)t.id=r.a.decode(t.id);return e},getMakeCredentialsChallenge(e){return c()({url:"/auth/credRegister",method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},data:e}).then((e=>{if(200!==e.status)throw new Error(`getMakeCredentialsChallenge Server responed with error. The message is: ${e.message}`);return e}))},sendWebAuthnResponse(e){return c()({url:"/auth/credResponse",method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},data:e}).then((e=>{if(200!==e.status)throw new Error(`Server responed with error. The message is: ${e.message}`);return console.log(e),e}))},getGetAssertionChallenge(e){return fetch("/auth/credLogin",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},data:JSON.stringify(e)}).then((e=>e.json())).then((e=>{if(console.log(e),"ok"!==e.status)throw new Error(`Server responed with error. The message is: ${e.message}`);return e}))},onRegisterCred(){const e="ariamin",t="armin";e&&t?this.getMakeCredentialsChallenge({username:e,name:t}).then((e=>{console.log(e);const t=this.preformatMakeCredReq(e.data);return navigator.credentials.create({publicKey:t})})).then((e=>{console.log(e);const t=this.publicKeyCredentialToJSON(e);return this.sendWebAuthnResponse(t)})).then((e=>{console.log(e)})).catch((e=>alert("onRegisterCred function"+e))):alert("Name or username is missing!")},onCredLogin(){const e=this.username.value;e?this.getGetAssertionChallenge({username:e}).then((e=>{console.log(e);const t=this.preformatGetAssertReq(e);return navigator.credentials.get({publicKey:t})})).then((e=>{console.log();const t=this.publicKeyCredentialToJSON(e);return this.sendWebAuthnResponse(t)})).then((e=>{"ok"===e.status?this.loadMainContainer():alert(`Server responed with error. The message is: ${e.message}`)})).catch((e=>alert(e))):alert("Username is missing!")}},computed:n()(n()({},Object(o["c"])("appState",["appState"])),{},{custBreakWidth(){return this.$q.screen.width<=this.appState.breakpoint}})}},"1f96":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"row bg-white rounded-borders q-mb-xs"},[e.custBreakWidth?s("q-item",{directives:[{name:"ripple",rawName:"v-ripple"},{name:"touch-hold",rawName:"v-touch-hold.mouse",value:e.showFooterListEdit,expression:"showFooterListEdit",modifiers:{mouse:!0}}],staticStyle:{flex:"1"}},[s("q-item-section",{directives:[{name:"show",rawName:"v-show",value:e.appState.mobileListEdit||!e.custBreakWidth,expression:"appState.mobileListEdit || !custBreakWidth"}],attrs:{side:"",top:""}},[s("q-checkbox",{staticClass:"q-ml-none",attrs:{size:"sm"},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1),e.avatar?s("q-item-section",{attrs:{avatar:""}},[s("q-avatar",{attrs:{color:"secondary","text-color":"white"}},[e.icon?s("q-icon",{attrs:{icon:e.icon?"r_"+e.icon:""}}):s("span",[e._v(e._s(e.title.split("")[0].toUpperCase()))])],1)],1):e._e(),s("q-item-section",[s("div",[s("q-item-label",{staticClass:"row items-center"},[e.indicator?s("div",{class:"bg-"+e.indicator,staticStyle:{width:"10px",height:"10px","border-radius":"50%"}},[e._v(" ")]):e._e(),s("span",{staticClass:"text-capitalize"},[e._v(e._s(e.title))])]),e.caption?s("q-item-label",{attrs:{caption:"",lines:e.captionLines?e.captionLines:1}},[e._v(e._s(e.caption)+"\n        ")]):e._e()],1)]),s("q-item-section",{attrs:{side:"",top:""}},[s("div",[e.sideCaptionTop?s("q-item-label",[e._v(e._s(e.sideCaptionTop))]):e._e(),e.sideCaption?s("q-item-label",[e._v(e._s(e.sideCaption))]):e._e()],1)]),e.itemSideBtn?s("q-item-section",{attrs:{side:""}},[e._t("sideBtn")],2):e._e()],1):s("div",{staticClass:"row q-pa-sm",staticStyle:{flex:"1"}},[s("q-checkbox",{staticClass:"q-pr-sm",attrs:{size:"sm"},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),e.custBreakWidth?e._e():s("div",{staticClass:"row items-center justify-between",staticStyle:{flex:"1"}},e._l(e.headers,(function(t,a){return s("div",{key:t+a,staticClass:"column",staticStyle:{padding:"auto"},style:0===a?{flex:3}:{flex:1,alignItems:"center"}},["amount"!==t.label?s("div",[s("span",{staticClass:"text-capitalize"},[e._v("\n            "+e._s(e.list[t.name])+"\n          ")])]):e._e(),e.item.amount?s("div",[e._v("\n          "+e._s(e.item.amount)+"\n        ")]):e._e()])})),0)],1)],1)},n=[],o=s("ded3"),i=s.n(o),r=s("2f62"),l=s("184b"),c={props:["item","list","avatar","icon","indicator","title","caption","captionLines","sideCaptionTop","sideCaption","itemSideBtn","headers","medicineList"],data(){return{selected:!1,inicatorColor:["green","warning","orange"]}},mixins:[l["a"]],methods:i()({},Object(r["b"])("appState",["showFooterListEdit"])),computed:i()({},Object(r["c"])("appState",["appState"]))},d=c,u=s("2877"),m=s("8f8e"),p=s("66e5"),h=s("4074"),g=s("cb32"),f=s("0016"),b=s("0170"),y=s("714f"),O=s("f449"),C=s("eebe"),v=s.n(C),S=Object(u["a"])(d,a,n,!1,null,"2f5eb9b2",null);t["default"]=S.exports;v()(S,"components",{QCheckbox:m["a"],QItem:p["a"],QItemSection:h["a"],QAvatar:g["a"],QIcon:f["a"],QItemLabel:b["a"]}),v()(S,"directives",{Ripple:y["a"],TouchHold:O["a"]})},7464:function(e,t,s){"use strict";s.d(t,"a",(function(){return k}));var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("q-dialog",{ref:"dialog",staticClass:"font-nunito"},[s("div",{staticClass:"column no-wrap",class:e.$q.dark.isActive?"bg-grey-10":"bg-grey-2",staticStyle:{width:"100%"}},[s("q-card-section",{staticClass:"row"},[s("div",{staticClass:"text-h6 text-capitalize"},[e._v(e._s(e.$t("general.search")))]),s("q-space"),s("q-btn",{attrs:{icon:"close",flat:"",round:"",dense:""},on:{click:e.onCancelClick}})],1),s("q-card-section",{staticClass:"column q-gutter-y-sm no-wrap q-py-none",staticStyle:{flex:"1",overflow:"auto"}},[s("div",{staticClass:"row",staticStyle:{height:"30px"}},[s("q-scroll-area",{staticClass:"column no-wrap flex-center",staticStyle:{flex:"1"},attrs:{"bar-style":{background:"transparent"},"thumb-style":{background:"transparent"},horizontal:""}},[s("div",{staticClass:"row no-wrap q-gutter-x-sm"},e._l(e.searchByOpt,(function(t,a){return s("q-btn",{key:t+a,staticClass:"text-bold",attrs:{size:"sm",padding:"6px 10px",unelevated:t===e.searchBy,outline:t!=e.searchBy,color:t===e.searchBy?"secondary":"grey",label:t},on:{click:function(s){e.searchBy=t}}})})),1)])],1),s("q-select",{attrs:{"use-input":"","hide-selected":"","fill-input":"",standout:"bg-secondary text-white",behavior:"menu","input-debounce":"0",label:e.$t("phmgtSell.drugName"),options:e.options},on:{filter:e.filterFn,"filter-abort":e.abortFilterFn,input:function(t){e.selectInputEmit(),e.clearDosage(),e.autoComplete(e.dosageOpt)}},scopedSlots:e._u([{key:"no-option",fn:function(){return[s("q-item",[s("q-item-section",{staticClass:"text-grey"},[e._v("\n              No results\n            ")])],1)]},proxy:!0},e.models.name?{key:"append",fn:function(){return[s("q-icon",{staticClass:"cursor-pointer",attrs:{name:"cancel"},on:{click:function(t){return t.stopPropagation(),e.clearName()}}})]},proxy:!0}:null],null,!0),model:{value:e.models.name,callback:function(t){e.$set(e.models,"name",t)},expression:"models.name"}}),s("q-select",{attrs:{standout:"bg-secondary text-white",behavior:"menu",disable:!e.models.name,options:e.dosageOpt,label:e.$t("phmgtSell.dosage")},on:{input:function(t){e.tempObj.dosage=e.filterBySearch(e.models.dosage,e.tempObj.name,"dosage"),e.clearDose()}},scopedSlots:e._u([e.models.dosage?{key:"append",fn:function(){return[s("q-icon",{staticClass:"cursor-pointer",attrs:{name:"cancel"},on:{click:function(t){return t.stopPropagation(),e.clearDosage()}}})]},proxy:!0}:null],null,!0),model:{value:e.models.dosage,callback:function(t){e.$set(e.models,"dosage",t)},expression:"models.dosage"}}),s("q-select",{attrs:{standout:"bg-secondary text-white",behavior:"menu",disable:!e.models.dosage,options:e.doseOpt,label:e.$t("phmgtSell.dose")},on:{input:function(t){e.tempObj.dose=e.filterBySearch(e.models.dose,e.tempObj.dosage,"dose"),e.clearManuf()}},scopedSlots:e._u([e.models.dose?{key:"append",fn:function(){return[s("q-icon",{staticClass:"cursor-pointer",attrs:{name:"cancel"},on:{click:function(t){return t.stopPropagation(),e.clearDose()}}})]},proxy:!0}:null],null,!0),model:{value:e.models.dose,callback:function(t){e.$set(e.models,"dose",t)},expression:"models.dose"}}),s("q-select",{attrs:{standout:"bg-secondary text-white",behavior:"menu",disable:!e.models.dose,options:e.manufOpt,label:e.$t("general.company")},on:{input:function(t){e.tempObj.manuf=e.filterBySearch(e.models.manuf,e.tempObj.dose,"company"),e.models.amount=null}},scopedSlots:e._u([e.models.manuf?{key:"append",fn:function(){return[s("q-icon",{staticClass:"cursor-pointer",attrs:{name:"cancel"},on:{click:function(t){return t.stopPropagation(),e.clearManuf()}}})]},proxy:!0}:null],null,!0),model:{value:e.models.manuf,callback:function(t){e.$set(e.models,"manuf",t)},expression:"models.manuf"}}),s("q-input",{staticStyle:{flex:"1"},attrs:{standout:"bg-secondary text-white",disable:!e.models.manuf,type:"tel",placeholder:e.$t("general.amount"),rules:[function(t){return t<=e.outOfStock||"OUT OF STOCK"}]},model:{value:e.models.amount,callback:function(t){e.$set(e.models,"amount",t)},expression:"models.amount"}})],1),s("q-card-section",{staticClass:"row"},[s("q-btn",{staticStyle:{flex:"1"},attrs:{outline:e.addBtnState.state,disable:e.addBtnState.state,color:e.addBtnState.color,label:e.addBtnState.label},on:{click:function(t){e.submitItem(),e.onCancelClick()}}})],1)],1)])},n=[],o=s("ded3"),i=s.n(o),r=(s("ddb0"),s("2f62")),l={data(){return{models:{name:null,dosage:null,dose:null,manuf:null,amount:null},searchDrugName:"",searchBy:"Generic",searchByOpt:["Generic","Brand","Harasi","Aria","IRC"],options:"",searchKey:"generic",tempObj:{name:[],dosage:[],dose:[],manuf:[{}]}}},created(){this.options=this.stringOptions},methods:i()(i()({show(){this.$refs.dialog.show()},hide(){this.$refs.dialog.hide()},onDialogHide(){this.$emit("hide")},onOKClick(){this.$emit("ok"),this.hide()},onCancelClick(){this.hide()}},Object(r["b"])("drugOrder",["addDrugItem"])),{},{filterFn(e,t,s){var a;this.searchDrugName=e,"b-"===e.substring(0,2)?(a=e.substring(2),this.searchKey="brand"):(a=e,this.searchKey="generic"),setTimeout((()=>{t((()=>{if(""===a)this.options=this.stringOptions;else{const e=a.toLowerCase();this.options=this.stringOptions.filter((t=>t.toLowerCase().indexOf(e)>-1))}}),(e=>{""!==a&&e.options.length>0&&(e.setOptionIndex(-1),e.moveOptionSelection(1,!0))}))}),300)},abortFilterFn(){},filterBySearch(e,t,s){const a=e.toLowerCase();return t.filter((e=>e[s].toLowerCase().indexOf(a)>-1))},arrKeyVals(e,t){return e.map((e=>e[t]))},uniq(e){return Array.from(new Set(e))},submitItem(){this.addDrugItem({medId:this.tempObj.manuf[0].medId,amount:parseInt(this.models.amount)})},selectInputEmit(e){""===e?console.log(typeof e):this.tempObj.name=this.filterBySearch(this.models.name,this.medicineList,this.searchKey)},clearName(){this.models.name=null,this.models.dosage=null,this.models.dose=null,this.models.manuf=null,this.models.amount=null,this.tempObj.name=[],this.tempObj.dosage=[],this.tempObj.dose=[],this.tempObj.manuf=[{}]},clearDosage(){this.models.dosage=null,this.models.dose=null,this.models.manuf=null,this.models.amount=null,this.tempObj.dosage=[],this.tempObj.dose=[],this.tempObj.manuf=[{}]},clearDose(){this.models.dose=null,this.models.manuf=null,this.models.amount=null,this.tempObj.dose=[],this.tempObj.manuf=[{}]},clearManuf(){this.models.manuf=null,this.models.amount=null,this.tempObj.manuf=[{}]},autoComplete(e,t){1===e.length&&(this.models.dosage=this.tempObj.name[0].dosage,this.models.dose=this.tempObj.name[0].dose,this.models.manuf=this.tempObj.name[0].company,this.tempObj.dosage=this.tempObj.name,this.tempObj.dose=this.tempObj.name,this.tempObj.manuf=this.tempObj.name)}}),computed:i()(i()(i()(i()({},Object(r["c"])("inventory",["inventory"])),Object(r["c"])("medList",["medicineList"])),Object(r["c"])("drugOrder",["drugOrder"])),{},{dosageOpt(){return this.uniq(this.arrKeyVals(this.tempObj.name,"dosage"))},doseOpt(){return this.uniq(this.arrKeyVals(this.tempObj.dosage,"dose"))},manufOpt(){return this.uniq(this.arrKeyVals(this.tempObj.dose,"company"))},outOfStock(){const e=this.inventory[this.tempObj.manuf[0].medId];return void 0!==e&&e.inventory},addBtnState(){var e=this.drugOrder.med.map((e=>e.medId));return this.models.name&&this.models.dosage&&this.models.dose&&this.models.manuf?e.indexOf(this.tempObj.manuf[0].medId)>-1?{state:!0,color:"warning",label:this.$t("phmgtSell.itemAlreadyExist")}:this.models.amount&&"0"!==this.models.amount?{state:!1,color:"secondary",label:this.$t("general.add")}:{state:!0,color:"grey",label:this.$t("general.add")}:{state:!0,color:"grey",label:this.$t("general.add")}},stringOptions(){return"b-"===this.searchDrugName.substring(0,2)?Array.from(new Set(this.medicineList.map((e=>e.brand)))):Array.from(new Set(this.medicineList.map((e=>e.generic))))}})},c=l,d=(s("c54a"),s("2877")),u=s("24e8"),m=s("a370"),p=s("2c91"),h=s("9c40"),g=s("4983"),f=s("ddd8"),b=s("66e5"),y=s("4074"),O=s("0016"),C=s("27f9"),v=s("8572"),S=s("eebe"),w=s.n(S),q=Object(d["a"])(c,a,n,!1,null,null,null),x=q.exports;w()(q,"components",{QDialog:u["a"],QCardSection:m["a"],QSpace:p["a"],QBtn:h["a"],QScrollArea:g["a"],QSelect:f["a"],QItem:b["a"],QItemSection:y["a"],QIcon:O["a"],QInput:C["a"],QField:v["a"]});const k={data(){return{qrScanOption:{preferFrontCamera:!1,showFlipCameraButton:!0,showTorchButton:!0,torchOn:!1,saveHistory:!0,prompt:"Place a barcode inside the scan area",resultDisplayDuration:500,orientation:'landscape"',disableAnimations:!0,disableSuccessBeep:!0}}},methods:{addDrug(){this.$q.dialog({component:x,parent:this,persistent:!0}).onOk((()=>{console.log("OK")})).onCancel((()=>{console.log("Cancel")})).onDismiss((()=>{console.log("Called on OK or Cancel")}))}}}},c54a:function(e,t,s){"use strict";s("d4ee")},d4ee:function(e,t,s){}}]);