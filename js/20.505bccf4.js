(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[20],{"862c":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row q-pa-sm bg-white items-center justify-between rounded-borders",staticStyle:{border:"1px solid grey"}},[t._l(t.priceTmp,(function(e,i){return s("div",{key:e+i,staticClass:"gt-sm q-pr-sm"},[s("span",{staticClass:"text-weight-thin text-uppercase"},[t._v(t._s(e.title)+" : ")]),s("span",{staticClass:"text-weight-bold"},[t._v(t._s(e.amount.toLocaleString()))]),s("span",{staticClass:"text-weight-thin text-caption"},[t._v(" Toman")])])})),s("div",{staticClass:"q-pr-sm"},[s("span",{staticClass:"text-weight-thin text-uppercase"},[t._v(t._s(t.$t("phmgtSell.payAmount"))+" : ")]),s("span",{staticClass:"text-weight-bold"},[t._v(t._s(t.totalPriceComputed.toLocaleString()))]),s("span",{staticClass:"text-weight-thin text-caption"},[t._v(" Toman")])]),s("q-btn",{attrs:{unelevated:"",color:"secondary",label:"confirm"}})],2)},a=[],n={data(){return{priceTmp:[{title:"Total",amount:1e5},{title:"Insurance",amount:1e5},{title:"Services",amount:1e5},{title:"Tax",amount:1e5,percent:10}]}},mounted(){this.$emit("update:price",this.totalPriceComputed)},props:["drugOrder","medList","price"],computed:{prodCostComp:function(){return this.drugOrder.med[0].totalPrice},totalPriceComputed(){const t=this.drugOrder,e=this.medList,s=[];for(var i=0;i<t.length;i++)1===e.filter((e=>e.medId===t[i].medId)).length&&s.push(e.filter((e=>e.medId===t[i].medId))[0].unitPrice*t[i].amount);return s.reduce(((t,e)=>t+e),0)}},watch:{totalPriceComputed:{handler:function(){this.$emit("update:price",this.totalPriceComputed)}}}},r=n,o=s("2877"),c=s("9c40"),l=s("eebe"),p=s.n(l),d=Object(o["a"])(r,i,a,!1,null,null,null);e["default"]=d.exports;p()(d,"components",{QBtn:c["a"]})}}]);