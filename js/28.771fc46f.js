(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[28],{aaf5:function(e,n,t){"use strict";t.r(n);var i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("q-page",{staticClass:"flex flex-center"},[t("div",{staticClass:"column items-center"},[t("q-btn",{attrs:{label:"regiter"},on:{click:function(n){return e.registerCredential()}}})],1),t("div",{staticClass:"column items-center"},[t("q-btn",{attrs:{label:"login"},on:{click:function(n){return e.loginCredential()}}})],1)])},r=[],s=t("ded3"),a=t.n(s),l=t("2f62"),c=t("184b"),o={name:"PageIndex",mixins:[c["a"]],methods:a()(a()({},Object(l["b"])("auth",["ifConnected","registerUser","loginUser","verifyEmail","registerWebAuthn"])),{},{registerCredential(){this.onRegisterCred()},loginCredential(){this.onLoginCred()},checkConnection(){this.ifConnected()}})},d=o,u=t("2877"),g=t("9989"),f=t("9c40"),b=t("eebe"),C=t.n(b),m=Object(u["a"])(d,i,r,!1,null,null,null);n["default"]=m.exports;C()(m,"components",{QPage:g["a"],QBtn:f["a"]})}}]);