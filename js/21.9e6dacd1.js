(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[21],{"862c":function(t,e,i){"use strict";i.r(e);var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"column gt-xs",staticStyle:{"border-radius":"5px"}},[i("div",[t._l(t.priceTmp,(function(e,r){return i("div",{key:e.title+r,staticClass:"row items-center"},[i("span",[t._v("\n        "+t._s(e.title)+"\n      ")]),e.percent?i("span",{staticClass:"price-percent"},[t._v("\n        "+t._s(e.percent+" %")+"\n      ")]):t._e(),i("span",[t._v(":")]),i("q-space"),i("span",{staticStyle:{"font-size":"18px"}},[t._v("\n        "+t._s(e.amount.toLocaleString())+" "+t._s(t.priceSign["irRiyal"])+"\n      ")])],1)})),i("q-separator"),i("div",{staticClass:"row items-center q-pl-md q-pr-md text-capitalize"},[i("span",[t._v("\n        "+t._s(t.$t("phmgtSell.payAmount"))+":\n      ")]),i("q-space"),i("span",{staticClass:"text-h6 text-bold"},[t._v("\n        "+t._s(t.totalPriceComputed.toLocaleString())+" "+t._s(t.priceSign["irRiyal"])+"\n      ")])],1)],2)])},n=[],a={data(){return{priceSign:{irRiyal:this.$t("general.riyal"),irToman:this.$t("general.toman"),usDollar:"$"},priceTmp:[{title:"هزینه کل",amount:1e5},{title:"بیمه",amount:1e5},{title:"حق فنی",amount:1e5},{title:"مالیات",amount:1e5,percent:10}]}},mounted(){this.$emit("update:price",this.totalPriceComputed)},props:["drugOrder","medList","price"],computed:{prodCostComp:function(){return this.drugOrder.med[0].totalPrice},totalPriceComputed(){const t=this.drugOrder,e=this.medList,i=[];for(var r=0;r<t.length;r++)1===e.filter((e=>e.medId===t[r].medId)).length&&i.push(e.filter((e=>e.medId===t[r].medId))[0].unitPrice*t[r].amount);return i.reduce(((t,e)=>t+e),0)}},watch:{totalPriceComputed:{handler:function(){this.$emit("update:price",this.totalPriceComputed)}}}},s=a,c=i("2877"),o=i("2c91"),p=i("eb85"),l=i("eebe"),d=i.n(l),u=Object(c["a"])(s,r,n,!1,null,null,null);e["default"]=u.exports;d()(u,"components",{QSpace:o["a"],QSeparator:p["a"]})}}]);