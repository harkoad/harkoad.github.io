(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{"184b":function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var i=a("ded3"),s=a.n(i),n=(a("ddb0"),a("2f62")),r=a("6ed8"),o=a.n(r),l=a("bc3a"),c=a.n(l);const d={data(){return{bioAuthAvail:!0}},methods:{mergeObject(e){var t={},a=Object.keys(e[0]);if(e.length>=1&&(t=e[0]),e.length>1)for(var i=1;i<e.length;i++)for(var s of a)t[s]!==e[i][s]&&("object"===typeof t[s]?t[s].includes(e[i][s])||t[s].push(e[i][s]):null!==e[i][s]&&(t[s]=[t[s],e[i][s]]));return t},getGeoLoc(){var e=function(e){return e};function t(e){alert("code: "+e.code+"\nmessage: "+e.message+"\n")}this.$q.cordova?cordova.plugins.locationAccuracy.canRequest((function(a){a&&cordova.plugins.locationAccuracy.request((function(a){alert("Successfully requested accuracy: "+a.message),navigator.geolocation.watchPosition(e,t,{timeout:5e3})}),(function(e){alert("Accuracy request failed: error code="+e.code+" error message="+e.message),e.code!==cordova.plugins.locationAccuracy.ERROR_USER_DISAGREED&&window.confirm("Failed to automatically set Location Mode to High Accuracy. Would you like to switch to the Location Settings page and do this manually?")&&cordova.plugins.diagnostic.switchToLocationSettings()}),cordova.plugins.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY)})):"geolocation"in navigator&&"watchPosition"in navigator.geolocation?navigator.geolocation.getCurrentPosition(e,t,{timeout:5e3}):alert("Geolocation is not supported.")},async onRegisterCred(){const e={attestation:"none",authenticatorSelection:{authenticatorAttachment:"platform",userVerification:"required",requireResidentKey:!1}};try{const a=await c()({url:"/auth/registerRequest",method:"POST",data:e}).then((e=>e.data));if(localStorage.setItem("tempChallenge",a.challenge),console.log(a),a.user.id=o.a.decode(a.user.id),a.challenge=o.a.decode(a.challenge),a.excludeCredentials)for(var t of a.excludeCredentials)t.id=o.a.decode(t.id);const i=await navigator.credentials.create({publicKey:a}),s={};if(s.id=i.id,s.rawId=o.a.encode(i.rawId),s.type=i.type,i.response){const e=o.a.encode(i.response.clientDataJSON),t=o.a.encode(i.response.attestationObject);s.response={clientDataJSON:e,attestationObject:t}}localStorage.setItem("credId",s.id);const n=await c()({url:"/auth/registerResponse",method:"POST",data:{credential:s,challenge:localStorage.getItem("tempChallenge")}}).then((e=>(localStorage.removeItem("tempChallenge"),e)));return n}catch(a){console.error(a)}},async onLoginCred(){const e={},t=await c()({url:"/auth/signinRequest",data:e});if(0===t.allowCredentials.length)return console.info("No registered credentials found."),Promise.resolve(null);for(var a of(t.challenge=o.a.decode(t.challenge),t.allowCredentials))a.id=o.a.decode(a.id);const i=await navigator.credentials.get({publicKey:t}),s={};if(s.id=i.id,s.type=i.type,s.rawId=o.a.encode(i.rawId),i.response){const e=o.a.encode(i.response.clientDataJSON),t=o.a.encode(i.response.authenticatorData),a=o.a.encode(i.response.signature),n=o.a.encode(i.response.userHandle);s.response={clientDataJSON:e,authenticatorData:t,signature:a,userHandle:n}}return await c()({url:"/auth/signinResponse",data:s})},async ifAuthenticatorAvail(){const e=await window.PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable();this.bioAuthAvail=e}},computed:s()(s()({},Object(n["c"])("appState",["appState"])),{},{ifMobileScreen(){return this.$q.screen.width<=this.appState.breakpoint}}),mounted(){this.ifAuthenticatorAvail()}}},"32a8":function(e,t,a){},"6ed8":function(e,t,a){a("ace4"),a("5cc6"),a("219c");const i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";for(var s=new Uint8Array(256),n=0;n<i.length;n++)s[i.charCodeAt(n)]=n;e.exports={encode:function(e){var t,a=new Uint8Array(e),s=a.length,n="";for(t=0;t<s;t+=3)n+=i[a[t]>>2],n+=i[(3&a[t])<<4|a[t+1]>>4],n+=i[(15&a[t+1])<<2|a[t+2]>>6],n+=i[63&a[t+2]];return s%3===2?n=n.substring(0,n.length-1):s%3===1&&(n=n.substring(0,n.length-2)),n},decode:function(e){var t,a,i,n,r,o=.75*e.length,l=e.length,c=0;const d=new Uint8Array(o);for(t=0;t<l;t+=4)a=s[e.charCodeAt(t)],i=s[e.charCodeAt(t+1)],n=s[e.charCodeAt(t+2)],r=s[e.charCodeAt(t+3)],d[c++]=a<<2|i>>4,d[c++]=(15&i)<<4|n>>2,d[c++]=(3&n)<<6|63&r;return d.buffer}}},"6ffe":function(e,t,a){"use strict";a("32a8")},7464:function(e,t,a){"use strict";a.d(t,"a",(function(){return S}));var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-dialog",{ref:"dialog",on:{hide:function(t){return e.onDialogHide()}}},[a("q-card",{staticClass:"column",staticStyle:{width:"700px","max-width":"90vw"}},[a("q-card-section",[a("div",{staticClass:"text-h6"},[e._v("Add Medicine")])]),a("q-card-section",{staticClass:"q-pt-none"},[a("form",{staticClass:"q-gutter-y-sm"},[a("q-select",{attrs:{outlined:"",clearable:"","use-input":"","hide-selected":"","fill-input":"",autofocus:"","input-debounce":"0",behavior:"menu",label:"Drug name",options:e.options},on:{filter:e.filterFn,"filter-abort":e.abortFilterFn},scopedSlots:e._u([{key:"no-option",fn:function(){return[a("q-item",[a("q-item-section",{staticClass:"text-grey"},[e._v("\n                No results\n              ")])],1)]},proxy:!0},{key:"option",fn:function(t){return[a("q-item",e._g(e._b({staticClass:"row items-center"},"q-item",t.itemProps,!1),t.itemEvents),[t.opt.recent>0?a("q-icon",{staticClass:"q-pr-sm",attrs:{size:"sm",name:"r_history"}}):e._e(),a("q-item-section",[a("q-item-label",[e._v(e._s(t.opt.name))])],1)],1)]}}]),model:{value:e.drugItem,callback:function(t){e.drugItem=t},expression:"drugItem"}}),a("q-input",{ref:"amount",attrs:{outlined:"",type:"tel",mask:"#######",label:"Amount",suffix:e.drugItem?"/ "+e.drugItem.avail:"",error:e.outOfStockErr},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addMed()}},model:{value:e.drugQty,callback:function(t){e.drugQty=t},expression:"drugQty"}})],1),a("div",{staticClass:"row q-gutter-x-sm",staticStyle:{flex:"1"}},[a("q-btn",{staticStyle:{flex:"1"},attrs:{"no-caps":"",unelevated:"",loading:"loading"===e.state,color:"secondary",label:"add"},on:{click:function(t){return e.addMed()}}}),a("q-btn",{attrs:{"no-caps":"",outline:"",label:"cancel"},on:{click:function(t){return e.onCancelClick()}}})],1)])],1)],1)},s=[],n=a("ded3"),r=a.n(n),o=a("2f62"),l={data(){return{drugItem:null,drugQty:null,options:[]}},mounted(){},methods:r()(r()({},Object(o["b"])("phmgt",["addMedToCart"])),{},{show(){this.$refs.dialog.show()},hide(){this.$refs.dialog.hide()},onDialogHide(){this.$emit("hide")},onOKClick(){this.$emit("ok"),this.hide()},onCancelClick(){this.hide()},filterFn(e,t,a){var i=this.ariaminMedList.map((e=>{var t=this.drugAddSearchHist.filter((t=>t.drug_code===e.drug_code));return{avail:100,phPrice:1e3,recent:t.length>0?t[0].recent:0,drug_code:e.drug_code,title:`${e.brand} ${e.dose}`,caption:`${e.generic} - ${e.brand_owner}`,name:`${("00000"+e.generic_id).slice(-5)} - [${e.brand}] ${e.generic} ${e.dose} - ${e.brand_owner}`,label:`${e.brand} ${e.dose}`}}));setTimeout((()=>{t((()=>{if(""===e)this.options=i;else{const t=e.toLowerCase();this.options=i.filter((e=>e.name.toLowerCase().indexOf(t)>-1))}}),(t=>{""!==e&&t.options.length>0&&(t.setOptionIndex(-1),t.moveOptionSelection(1,!0))}))}),300)},abortFilterFn(){},addMed(){this.drugItem.avail-this.drugQty>=0&&null!==this.drugQty&&(this.drugItem.qty=this.drugQty,delete this.drugItem.name,this.addMedToCart(r()({},this.drugItem)),this.hide())}}),computed:r()(r()({},Object(o["c"])("phmgt",["ariaminMedList","drugAddSearchHist","state"])),{},{outOfStockErr(){return!!this.drugItem&&this.drugItem.avail-this.drugQty<=-1}})},c=l,d=a("2877"),u=a("24e8"),p=a("f09f"),m=a("a370"),h=a("ddd8"),f=a("66e5"),g=a("4074"),b=a("0016"),v=a("0170"),y=a("27f9"),C=a("9c40"),x=a("eebe"),q=a.n(x),_=Object(d["a"])(c,i,s,!1,null,null,null),w=_.exports;q()(_,"components",{QDialog:u["a"],QCard:p["a"],QCardSection:m["a"],QSelect:h["a"],QItem:f["a"],QItemSection:g["a"],QIcon:b["a"],QItemLabel:v["a"],QInput:y["a"],QBtn:C["a"]});const S={data(){return{qrScanOption:{preferFrontCamera:!1,showFlipCameraButton:!0,showTorchButton:!0,torchOn:!1,saveHistory:!0,prompt:"Place a barcode inside the scan area",resultDisplayDuration:500,orientation:'landscape"',disableAnimations:!0,disableSuccessBeep:!0}}},methods:{addDrug(){this.$q.dialog({component:w,parent:this,persistent:!0}).onOk((()=>{})).onCancel((()=>{})).onDismiss((()=>{}))}}}},"862c":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row",class:e.ifMobileScreen?"full-width":""},[a("div",{staticClass:"row bg-white q-pa-sm shadow-5 rounded-borders",class:e.ifMobileScreen?"q-gutter-y-sm":"",staticStyle:{flex:"1"}},[a("div",{staticClass:"row items-center justify-between",staticStyle:{flex:"1"}},[e._l(e.priceTmp,(function(t,i){return a("div",{key:t+i,staticClass:"row gt-sm q-pr-sm"},[a("span",{staticClass:"text-body2 text-uppercase"},[e._v(e._s(t.title)+" : ")]),a("div",{staticClass:"row"},[a("span",{staticClass:"text-weight-bold"},[e._v(e._s(t.amount.toLocaleString()))]),a("span",{staticClass:"text-caption"},[e._v(" Toman")])])])})),a("div",{staticClass:"row",staticStyle:{flex:"1"}},[a("div",{staticStyle:{flex:"1"}},[a("span",{staticClass:"text-uppercase"},[e._v(e._s(e.$t("payAmount"))+" :")])]),a("div",{staticClass:"row"},[a("span",{staticClass:"text-weight-bold"},[e._v(" "+e._s(e.totalPriceComputed.toLocaleString()))]),a("span",{staticClass:"text-caption"},[e._v(" Toman")])])])],2),a("q-btn",{class:e.ifMobileScreen?"full-width":"",attrs:{unelevated:"","no-caps":"",color:"secondary",label:"Confirm"},on:{click:function(t){return e.$emit("confirm")}}})],1)])},s=[],n=a("ded3"),r=a.n(n),o=(a("ddb0"),a("184b")),l=a("2f62"),c={data(){return{priceTmp:[{title:"Total",amount:1e5},{title:"Insurance",amount:1e5},{title:"Services",amount:1e5},{title:"Tax",amount:1e5,percent:10}]}},mounted(){this.$emit("update:price",this.totalPriceComputed)},mixins:[o["a"]],computed:r()(r()({},Object(l["c"])("phmgt",["medCart"])),{},{totalPriceComputed(){var e=0;for(var t of this.medCart)e+=t.phPrice;return e}})},d=c,u=a("2877"),p=a("9c40"),m=a("eebe"),h=a.n(m),f=Object(u["a"])(d,i,s,!1,null,null,null);t["default"]=f.exports;h()(f,"components",{QBtn:p["a"]})},"8c64":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row rounded-borders q-mb-xs q-mx-xs"},[e.ifMobileScreen?a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"},{name:"touch-hold",rawName:"v-touch-hold.mouse",value:e.selected,expression:"selected",modifiers:{mouse:!0}}],staticClass:"rounded-borders q-px-sm",class:e.footerEditMode&&e.ifSelected?"bg-blue-2":"",staticStyle:{flex:"1"},attrs:{clickable:""}},[a("q-item-section",{attrs:{top:"",avatar:""}},[a("q-avatar",{attrs:{color:e.footerEditMode&&e.ifSelected?"blue":"secondary","text-color":"white"}},[e.icon&&!e.footerEditMode?a("q-icon",{attrs:{name:e.icon?"r_"+e.icon:""}}):e._e(),e.footerEditMode&&e.ifSelected?a("q-icon",{attrs:{name:"check"}}):a("span",[e._v(e._s(e.title.split("")[0].toUpperCase()))])],1)],1),a("q-item-section",[a("q-item-label",{staticClass:"row items-start"},[a("span",{staticClass:"text-capitalize",staticStyle:{flex:"1"}},[e._v(e._s(e.title))]),e.sideCaptionTop?a("span",[e._v(e._s(e.sideCaptionTop))]):e._e()]),e.caption?a("q-item-label",{attrs:{caption:"",lines:"2"}},[e._v("\n          "+e._s(e.caption)+"\n          "),e.sideCaption?a("span",[e._v(e._s(e.sideCaption))]):e._e()]):e._e()],1)],1):e._e()],1)},s=[],n=a("ded3"),r=a.n(n),o=a("2f62"),l=a("184b"),c={props:["item","idVal","avatar","icon","indicator","title","caption","captionLines","sideCaptionTop","sideCaption","itemSideBtn","headers","medicineList"],data(){return{inicatorColor:["green","warning","orange"]}},computed:r()(r()({},Object(o["d"])("appState",["footerEditMode","listItemSelected"])),{},{ifSelected(){return this.listItemSelected.indexOf(this.idVal)>=0}}),mixins:[l["a"]],methods:{selected(){this.$emit("selected")}}},d=c,u=a("2877"),p=a("8f8e"),m=a("66e5"),h=a("4074"),f=a("cb32"),g=a("0016"),b=a("0170"),v=a("714f"),y=a("f449"),C=a("eebe"),x=a.n(C),q=Object(u["a"])(d,i,s,!1,null,"42d34f60",null);t["default"]=q.exports;x()(q,"components",{QCheckbox:p["a"],QItem:m["a"],QItemSection:h["a"],QAvatar:f["a"],QIcon:g["a"],QItemLabel:b["a"]}),x()(q,"directives",{Ripple:v["a"],TouchHold:y["a"]})},d31b:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-card",{staticClass:"column",class:e.$q.dark.isActive?"bg-blue-grey-10 text-white":"bg-grey-2 text-black",staticStyle:{flex:"1"}},[a("div",{staticClass:"row",staticStyle:{height:"50px"}},[a("q-btn",{staticClass:"q-pa-xs",attrs:{flat:"",round:"",icon:"r_arrow_"+(e.$q.lang.rtl?"forward":"back")+"_ios"},on:{click:function(t){return e.hide()}}})],1),a("div",{staticClass:"column",staticStyle:{flex:"1"}},[a("q-scroll-area",{staticClass:"column",staticStyle:{flex:"1"}},[a("div",{staticClass:"column q-mx-md"},[a("div",{staticClass:"q-pb-sm text-uppercase",staticStyle:{"font-size":"1.1em"}},[e._t("group")],2),a("div",{staticClass:"text-h5 q-mb-sm text-bold"},[e._t("title")],2),a("div",{staticClass:"q-mb-md"},[e._t("tag"),a("q-chip",{staticClass:"q-pa-xs q-ma-none",staticStyle:{"font-size":"13px"},attrs:{square:"",color:"grey-4","text-color":"grey-10"}},[e._v("Angular")])],2),a("div",{staticClass:"q-mb-lg"},[e._t("postInfo")],2),a("div",[e._t("description")],2)])])],1),a("div",{staticClass:"row q-ma-sm items-center"},[e._t("actionBtn")],2)])},s=[],n={props:{index:{type:Number}},methods:{hide(){console.log("hide dialog"),this.$emit("closeDialog")}}},r=n,o=a("2877"),l=a("f09f"),c=a("9c40"),d=a("4983"),u=a("b047"),p=a("eb85"),m=a("2c91"),h=a("eebe"),f=a.n(h),g=Object(o["a"])(r,i,s,!1,null,null,null);t["default"]=g.exports;f()(g,"components",{QCard:l["a"],QBtn:c["a"],QScrollArea:d["a"],QChip:u["a"],QSeparator:p["a"],QSpace:m["a"]})},da56:function(e,t,a){e.exports=a.p+"img/pharmRegi.562c98a9.png"},da6d:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("q-dialog",{ref:"dialog",attrs:{maximized:""}},[i("div",{staticClass:"column full-width"},[i("q-carousel",{ref:"carousel",staticClass:"rounded-borders",staticStyle:{flex:"1"},attrs:{animated:"",padding:"","navigation-icon":"ion-add","transition-prev":"slide-right","transition-next":"slide-left","control-color":"primary"},scopedSlots:e._u([{key:"control",fn:function(){return[i("q-carousel-control",{staticClass:"row justify-center",attrs:{position:"bottom"}},[5!==e.slide?i("q-btn",{attrs:{unelevated:"","text-color":"grey",label:"back"},on:{click:function(t){1!==e.slide?e.$refs.carousel.previous():e.hide()}}}):e._e(),5!==e.slide?i("q-space"):e._e(),i("q-btn",{attrs:{unelevated:"",color:"secondary",label:e.nextbtnLabels[e.slide]},on:{click:function(t){return e.nextFunction()}}})],1)]},proxy:!0}]),model:{value:e.slide,callback:function(t){e.slide=t},expression:"slide"}},[i("q-carousel-slide",{staticClass:"column flex-center q-pb-xl",attrs:{name:1}},[i("q-img",{attrs:{src:a("da56")}}),i("span",{staticClass:"text-h6 q-mb-md q-mt-xl"},[e._v("Pharmacy Management System")]),i("span",{staticClass:"text-center"},[e._v("manage your business remotely and efficiently, using ariamin's all-in-one management system")])],1),i("q-carousel-slide",{staticClass:"column q-pb-xl",staticStyle:{flex:"1"},attrs:{name:2}},[i("form",{attrs:{action:""}},[i("q-input",{ref:"phHix",attrs:{label:"HIX",type:"tel",rules:[function(e){return!!e||"Field is required"}]},model:{value:e.pharmData.hix,callback:function(t){e.$set(e.pharmData,"hix",t)},expression:"pharmData.hix"}}),i("q-input",{ref:"phLicence",attrs:{type:"tel",label:"Licence",rules:[function(e){return!!e||"Field is required"}]},model:{value:e.pharmData.licence,callback:function(t){e.$set(e.pharmData,"licence",t)},expression:"pharmData.licence"}}),i("q-select",{ref:"phType",attrs:{options:["daily","boarding"],behavior:"menu",label:"type",rules:[function(e){return!!e||"Field is required"}]},model:{value:e.pharmData.type,callback:function(t){e.$set(e.pharmData,"type",t)},expression:"pharmData.type"}}),i("q-input",{ref:"phName",attrs:{label:"Full name",rules:[function(e){return!!e||"Field is required"}]},model:{value:e.pharmData.name,callback:function(t){e.$set(e.pharmData,"name",t)},expression:"pharmData.name"}}),i("q-input",{ref:"phAddress",attrs:{autogrow:"",label:"Address",rules:[function(e){return!!e&&e.length>=30||""}]},model:{value:e.pharmData.address,callback:function(t){e.$set(e.pharmData,"address",t)},expression:"pharmData.address"}}),i("q-input",{ref:"phTel",attrs:{type:"tel",label:"Telephone",rules:[function(e){return!!e&&e.length<=11||""}]},model:{value:e.pharmData.tel,callback:function(t){e.$set(e.pharmData,"tel",t)},expression:"pharmData.tel"}})],1)]),i("q-carousel-slide",{staticClass:"column q-pa-none relative-poistion",attrs:{name:3}},[i("div",{staticClass:"q-pa-md absolute-top",staticStyle:{height:"50px","z-index":"1000"}},[i("span",{staticClass:"text-bold"},[e._v("Choose your pharmacy location")])]),i("a-map",{staticStyle:{"z-index":"0"},attrs:{center:e.center,zoom:e.zoom},on:{"update:center":function(t){e.center=t},"update:zoom":function(t){e.zoom=t}}})],1),i("q-carousel-slide",{staticClass:"column no-wrap flex-center",attrs:{name:4}},[i("div",{staticClass:"row items-center"},[i("q-icon",{attrs:{size:"lg",name:"o_local_pharmacy"}}),i("span",[e._v(e._s(e.pharmData.name))]),i("span",[e._v(e._s(e.pharmData.type))])],1),i("div",{staticClass:"row items-center"},[i("q-icon",{attrs:{size:"lg",name:"o_place"}}),i("span",[e._v(e._s(e.pharmData.address))]),i("span",[e._v(e._s(e.center))])],1),i("div",{staticClass:"row items-center"},[i("q-icon",{attrs:{size:"lg",name:"o_call"}}),i("span",[e._v(e._s(e.pharmData.tel))])],1)]),i("q-carousel-slide",{staticClass:"column no-wrap flex-center",attrs:{name:5}},[i("div",{staticClass:"column items-center"},[i("span",[e._v("your 30 day trial is now valid")]),i("span",[e._v("enjoy the services, leave us feedback")])])])],1)],1)])},s=[],n=a("ded3"),r=a.n(n),o=(a("ddb0"),a("2f62")),l={components:{aMap:()=>Promise.all([a.e(0),a.e(3)]).then(a.bind(null,"d203"))},data(){return{slide:1,nextbtnLabels:["","start","save","select","confirm","lets start"],pharmData:{hix:"",licence:"",name:"",type:"",owner:"",address:"",zipCode:"",tel:""},center:[32.509762,53.085938],zoom:4.5}},computed:r()({},Object(o["d"])("phmgt",["carusel"])),methods:r()(r()({},Object(o["b"])("phmgt",["registerPharmacy"])),{},{show(){this.$refs.dialog.show()},hide(){this.$refs.dialog.hide()},onDialogHide(){this.$emit("hide")},onOKClick(){this.$emit("ok"),this.hide()},onCancelClick(){this.hide()},nextFunction(){if(2===this.slide){if(this.$refs.phHix.validate(),this.$refs.phLicence.validate(),this.$refs.phType.validate(),this.$refs.phName.validate(),this.$refs.phAddress.validate(),this.$refs.phTel.validate(),this.$refs.phHix.hasError)return"";if(this.$refs.phLicence.hasError)return"";if(this.$refs.phType.hasError)return"";if(this.$refs.phName.hasError)return"";if(this.$refs.phAddress.hasError)return"";if(this.$refs.phTel.hasError)return"";this.$refs.carousel.next()}else 4===this.slide?this.registerPharmacy({hix:this.pharmData.hix,licence:this.pharmData.licence,name:this.pharmData.name,type:this.pharmData.type,owner:this.pharmData.name,address:this.pharmData.address,tel:this.pharmData.tel,location:this.center}):5===this.slide?this.hide():this.$refs.carousel.next()}}),watch:{carusel:{immediate:!0,handler(){this.slide=this.carusel}}}},c=l,d=(a("6ffe"),a("2877")),u=a("24e8"),p=a("880c"),m=a("62cd"),h=a("068f"),f=a("27f9"),g=a("0016"),b=a("ddd8"),v=a("32a7"),y=a("9c40"),C=a("2c91"),x=a("6a67"),q=a("8572"),_=a("eebe"),w=a.n(_),S=Object(d["a"])(c,i,s,!1,null,null,null);t["default"]=S.exports;w()(S,"components",{QDialog:u["a"],QCarousel:p["a"],QCarouselSlide:m["a"],QImg:h["a"],QInput:f["a"],QIcon:g["a"],QSelect:b["a"],QCarouselControl:v["a"],QBtn:y["a"],QSpace:C["a"],QBtnToggle:x["a"],QField:q["a"]})}}]);