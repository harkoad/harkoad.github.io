(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"1b6c":function(t,a,e){},"6e66":function(t,a,e){"use strict";e("1b6c")},da56:function(t,a,e){t.exports=e.p+"img/pharmRegi.562c98a9.png"},e3e0:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("q-page",{staticClass:"column"},[1===t.step?s("div",{staticClass:"column",staticStyle:{flex:"1"}},[s("div",{staticClass:"column justify-center items-center",staticStyle:{flex:"1"}},[s("img",{staticStyle:{width:"80%"},attrs:{alt:"Quasar logo",src:e("da56")}})]),s("span",{staticClass:"q-ma-sm self-center text-h6"},[t._v("\n      سامانه یکپارچه مدیریت داروخانه\n    ")]),s("span",{staticClass:"q-ma-md self-center text-subtitle2",staticStyle:{"text-align":"center",height:"150px"}},[t._v("\n      مدیریت تمامی امور برای افزایش کارایی و کارآمدی امور داروخانه و پرسنل. ایجاد زیرساخت لازم برای نسل جدید از داروخانه ها\n    ")])]):t._e(),2===t.step?s("div",{staticClass:"column",staticStyle:{flex:"1",direction:"rtl"}},[s("div",{staticClass:"q-pa-md column"},[s("span",{staticClass:"self-center text-subtitle1"},[t._v("\n        اطلاعات داروخانه خود را تکمیل بفرمایید.\n      ")])]),s("q-scroll-area",{staticClass:"column",staticStyle:{flex:"1"}},[s("div",{staticClass:"column q-gutter-y-sm q-pa-md justify-center",staticStyle:{flex:"1",height:"100%"}},[s("q-input",{attrs:{filled:"",dense:"",placeholder:"نام موسس"},model:{value:t.pharmData.owner,callback:function(a){t.$set(t.pharmData,"owner",a)},expression:"pharmData.owner"}}),s("q-select",{attrs:{filled:"",dense:"","use-input":"",options:t.pharmTypeOpt,placeholder:t.pharmData.type?"":"نوع داروخانه",behavior:"menu"},scopedSlots:t._u([{key:"append",fn:function(){return[""!==t.pharmData.type?s("q-icon",{staticClass:"cursor-pointer",attrs:{name:"close"},on:{click:function(a){a.stopPropagation(),t.pharmData.type=""}}}):t._e()]},proxy:!0}],null,!1,54729209),model:{value:t.pharmData.type,callback:function(a){t.$set(t.pharmData,"type",a)},expression:"pharmData.type"}}),s("q-input",{attrs:{filled:"",dense:"",value:"something",placeholder:t.namePlaceholder},model:{value:t.pharmData.name,callback:function(a){t.$set(t.pharmData,"name",a)},expression:"pharmData.name"}}),s("q-input",{attrs:{filled:"",dense:"",placeholder:"آدرس"},model:{value:t.pharmData.address,callback:function(a){t.$set(t.pharmData,"address",a)},expression:"pharmData.address"}}),s("q-input",{attrs:{filled:"",dense:"",type:"tel",placeholder:"کد پستی"},model:{value:t.pharmData.zipCode,callback:function(a){t.$set(t.pharmData,"zipCode",a)},expression:"pharmData.zipCode"}}),s("q-input",{attrs:{filled:"",dense:"",type:"tel",placeholder:"تلفن"},model:{value:t.pharmData.tel,callback:function(a){t.$set(t.pharmData,"tel",a)},expression:"pharmData.tel"}}),s("span",[t._v("active week days")]),s("div",{staticClass:"row justify-between"},t._l(t.weekdays,(function(a,e){return s("q-btn",{key:a+e,attrs:{round:"",flat:!t.pharmData.day.includes(a.dayNum),outline:t.pharmData.day.includes(a.dayNum),color:t.pharmData.day.includes(a.dayNum)?"secondary":"grey",label:a.label},on:{click:function(e){return t.activeDays(a.dayNum)}}})})),1)],1),s("q-btn",{attrs:{label:"geo location"},on:{click:function(a){return t.getGeo()}}})],1)],1):t._e(),3===t.step?s("div",{staticClass:"column",staticStyle:{flex:"1"}},[s("q-icon",{staticClass:"absolute-center",staticStyle:{"z-index":"10"},attrs:{name:"my_location",color:"secondary",size:"xl"}}),s("l-map",{staticStyle:{flex:"1","z-index":"1"},attrs:{zoom:t.zoom,center:t.center,options:{zoomControl:!1}},on:{"update:center":t.centerUpdate,"update:zoom":t.zoomUpdate}},[s("l-tile-layer",{attrs:{url:t.url,attribution:t.attribution}})],1),s("div",{staticClass:"q-pt-sm q-pr-sm q-pl-sm absolute-top",staticStyle:{"z-index":"10"}},[s("div",{staticClass:"bg-white rounded-borders column items-center justify-center shadow-2",staticStyle:{height:"50px"}},[s("span",{staticStyle:{margin:"0",direction:"rtl"}},[t._v("\n          مکان داروخانه خود را انتخاب کنید.\n        ")])])]),s("div",{staticClass:"row q-pb-md q-pr-md q-pl-md absolute-bottom",staticStyle:{"z-index":"10"}},[1!=t.step?s("q-btn",{staticClass:"q-mr-sm ",attrs:{outline:"",color:"black",icon:"chevron_left",padding:"sm"},on:{click:function(a){t.step--}}}):t._e(),s("q-btn",{staticClass:"bg-secondary",staticStyle:{flex:"1",height:"40px"},attrs:{flat:"",color:"white",label:"تایید مکان داروخانه"},on:{click:function(a){return t.setPhramacyLocation()}}})],1)],1):t._e(),4===t.step?s("div",{staticClass:"column",staticStyle:{flex:"1"}}):t._e(),5===t.step?s("div",{staticClass:"column",staticStyle:{flex:"1"}}):t._e(),3!=t.step?s("div",{staticClass:"row q-ma-md"},[s("q-btn",{staticClass:"q-mr-sm",attrs:{outline:"",color:"secondary",icon:"chevron_left",padding:"sm"},on:{click:function(a){return t.goBack()}}}),s("q-btn",{staticClass:"bg-secondary",staticStyle:{flex:"1",height:"40px"},attrs:{flat:"","text-color":"white",label:"ادامه"},on:{click:function(a){t.step++}}})],1):t._e()])},n=[],c=e("2699"),o=e("a40a"),i=e("e11e"),l=e.n(i);e("6cc5");const r=["شبانه روزی","روزانه"],d=["شنبه","یکشنبه","دوشنبه","سه شنبه","چهارشنبه","پنج شنبه","جمعه"];var p={name:"Map",components:{LMap:c["a"],LTileLayer:o["a"]},data(){return{pharmTypeOpt:r,dayOpt:d,citiesOpt:[],pharmData:{name:"",year:"",type:"",owner:"",state:"",city:"",address:"",gpsLocation:null,zipCode:"",tel:"",day:[]},weekdays:[{label:"s",dayNum:"6"},{label:"m",dayNum:"0"},{label:"t",dayNum:"1"},{label:"w",dayNum:"2"},{label:"t",dayNum:"3"},{label:"f",dayNum:"4"},{label:"s",dayNum:"5"}],currentCenter:null,currentZoom:null,step:1,zoom:13,center:l.a.latLng(35.710165,51.384227),url:"http://{s}.tile.osm.org/{z}/{x}/{y}.png",attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}},methods:{zoomUpdate(t){this.currentZoom=t},centerUpdate(t){this.currentCenter=t},updateCities(){for(var t=0;t<this.stateOpt.length;t++)this.stateOpt[t].name===this.pharmData.state&&(this.citiesOpt=this.stateOpt[t].cities)},updateLatLng(t,a){this.center=l.a.latLng({lat:t,lng:a})},setPhramacyLocation(){this.center=this.currentCenter,this.gpsLocation=this.currentCenter,this.zoom=this.currentZoom,this.step++},goBack(){1===this.step?this.$router.go(-1):this.step--},activeDays(t){this.pharmData.day.includes(t)?this.pharmData.day.splice(this.pharmData.day.indexOf(t),1):this.pharmData.day.push(t)},getGeo(){var t=function(t){alert("Latitude: "+t.coords.latitude+"\nLongitude: "+t.coords.longitude+"\nAltitude: "+t.coords.altitude+"\nAccuracy: "+t.coords.accuracy+"\nAltitude Accuracy: "+t.coords.altitudeAccuracy+"\nHeading: "+t.coords.heading+"\nSpeed: "+t.coords.speed+"\nTimestamp: "+t.timestamp+"\n"),this.updateLatLng(t.coords.latitude,t.coords.longitude)};function a(t){alert("code: "+t.code+"\nmessage: "+t.message+"\n")}cordova.plugins.locationAccuracy.canRequest((function(e){e&&cordova.plugins.locationAccuracy.request((function(e){alert("Successfully requested accuracy: "+e.message),navigator.geolocation.watchPosition(t,a,{timeout:5e3})}),(function(t){alert("Accuracy request failed: error code="+t.code+" error message="+t.message),t.code!==cordova.plugins.locationAccuracy.ERROR_USER_DISAGREED&&window.confirm("Failed to automatically set Location Mode to High Accuracy. Would you like to switch to the Location Settings page and do this manually?")&&cordova.plugins.diagnostic.switchToLocationSettings()}),cordova.plugins.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY)}))}},computed:{namePlaceholder(){return this.pharmData.type&&this.pharmData.owner?`داروخانه ${this.pharmData.type} دکتر ${this.pharmData.owner}`:"نام داروخانه"}}},u=p,m=(e("6e66"),e("2877")),h=e("9989"),y=e("4983"),f=e("27f9"),g=e("ddd8"),b=e("0016"),v=e("9c40"),C=e("b047"),D=e("eebe"),x=e.n(D),q=Object(m["a"])(u,s,n,!1,null,null,null);a["default"]=q.exports;x()(q,"components",{QPage:h["a"],QScrollArea:y["a"],QInput:f["a"],QSelect:g["a"],QIcon:b["a"],QBtn:v["a"],QChip:C["a"]})}}]);