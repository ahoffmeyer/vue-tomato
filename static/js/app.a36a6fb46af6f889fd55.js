webpackJsonp([1],{C2aq:function(t,e){},LbEZ:function(t,e){},NHnr:function(t,e,n){"use strict";function r(t){n("C2aq")}function i(t){n("VHl+")}function a(t){n("Usz0")}function s(t){n("enRW")}function o(t){n("LbEZ")}Object.defineProperty(e,"__esModule",{value:!0});var u=n("7+uW"),c={name:"ButtonConfig"},l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"buttonConfig"},[n("router-link",{attrs:{to:{name:"Config"}}},[n("i",{staticClass:"fa fa-cog",attrs:{"aria-hidden":"true"}})])],1)},m=[],f={render:l,staticRenderFns:m},d=f,p=n("VU/8"),g=r,v=p(c,d,!1,g,null,null),T=v.exports,_={name:"app",components:{ButtonConfig:T}},C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("nav",[n("router-link",{attrs:{to:"/"}},[n("i",{staticClass:"fa fa-home",attrs:{"aria-hidden":"true"}})]),t._v(" "),n("button-config")],1),t._v(" "),n("div",{staticClass:"app"},[n("router-view")],1)])},E=[],R={render:C,staticRenderFns:E},b=R,h=n("VU/8"),S=i,U=h(_,b,!1,S,null,null),M=U.exports,O=n("/ocq"),V=n("NYxO"),x={name:"Start",data:function(){return{msg:"Start"}},methods:Object(V.b)(["startTimer","countDownTimer"])},I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"start"},[n("a",{staticClass:"pause-play",on:{click:t.startTimer}},[n("i",{staticClass:"fa fa-play",attrs:{"aria-hidden":"true"}})])])},w=[],y={render:I,staticRenderFns:w},F=y,$=n("VU/8"),j=$(x,F,!1,null,null,null),W=j.exports,N={name:"Stop",data:function(){return{msg:"Stop"}},methods:Object(V.b)(["stopTimer"])},P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"stop"},[n("a",{staticClass:"pause-play",on:{click:t.stopTimer}},[n("i",{staticClass:"fa fa-pause",attrs:{"aria-hidden":"true"}})])])},k=[],L={render:P,staticRenderFns:k},A=L,H=n("VU/8"),q=H(N,A,!1,null,null,null),D=q.exports,z={name:"Reset",data:function(){return{msg:"Reset"}},methods:Object(V.b)(["resetTimer"])},B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"start"},[n("a",{staticClass:"pause-play",on:{click:t.resetTimer}},[n("i",{staticClass:"fa fa-repeat",attrs:{"aria-hidden":"true"}})])])},Z=[],J={render:B,staticRenderFns:Z},Y=J,G=n("VU/8"),K=G(z,Y,!1,null,null,null),Q=K.exports,X={name:"Timer",computed:Object(V.c)({time:"getTime",running:"getRunning",progress:"getProgress",progressW:"getPercentageW"}),components:{Start:W,Stop:D,Reset:Q}},tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"timer"},[n("div",{staticClass:"progress-bar"},[n("div",{staticClass:"progress"},[n("div",{staticClass:"progress-bar bg-danger",style:t.progressW,attrs:{role:"progressbar","aria-valuenow":t.progress,"aria-valuemin":"0","aria-valuemax":"100"}})])]),t._v(" "),n("div",{staticClass:"time"},[t._v("\n        "+t._s(t.time)+"\n    ")]),t._v(" "),n("div",{staticClass:"pause-play-btn"},[t.running?t._e():n("start"),t._v(" "),t.running?n("stop"):t._e(),t._v(" "),n("reset")],1)])},et=[],nt={render:tt,staticRenderFns:et},rt=nt,it=n("VU/8"),at=a,st=it(X,rt,!1,at,null,null),ot=st.exports,ut={components:{Timer:ot}},ct=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("timer")],1)},lt=[],mt={render:ct,staticRenderFns:lt},ft=mt,dt=n("VU/8"),pt=s,gt=dt(ut,ft,!1,pt,"data-v-ea9b6bf6",null),vt=gt.exports,Tt={name:"SetTime",computed:Object(V.c)({times:"getTimes",currentTime:"getTime"}),data:function(){return{time:0,msg:"Config Template"}},methods:Object(V.b)(["setTime"])},_t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"setTime"},[n("h1",[t._v("Time set to "+t._s(t.currentTime)+" minutes")]),t._v(" "),n("label",{attrs:{for:"time"}},[t._v("Select your timer duration\n        "),n("select",{directives:[{name:"model",rawName:"v-model.bind",value:t.time,expression:"time",modifiers:{bind:!0}}],staticClass:"custom-select",attrs:{id:"time"},on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.time=e.target.multiple?n:n[0]},function(e){t.setTime(t.time)}]}},[n("option",{attrs:{value:""}},[t._v("---")]),t._v(" "),t._l(t.times,function(e){return n("option",{domProps:{value:e}},[t._v(t._s(e)+" Minutes")])})],2)])])},Ct=[],Et={render:_t,staticRenderFns:Ct},Rt=Et,bt=n("VU/8"),ht=o,St=bt(Tt,Rt,!1,ht,"data-v-ee3c56ac",null),Ut=St.exports,Mt={name:"SetLanguage",data:function(){return{msg:"Set Language Template"}}},Ot=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"setLanguage"},[t._v("\n    "+t._s(t.msg)+"\n")])},Vt=[],xt={render:Ot,staticRenderFns:Vt},It=xt,wt=n("VU/8"),yt=wt(Mt,It,!1,null,null,null),Ft=yt.exports,$t={name:"Config",components:{SetTime:Ut,SetLanguage:Ft}},jt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"config"},[n("set-time")],1)},Wt=[],Nt={render:jt,staticRenderFns:Wt},Pt=Nt,kt=n("VU/8"),Lt=kt($t,Pt,!1,null,null,null),At=Lt.exports;u.a.use(O.a);var Ht,qt=new O.a({routes:[{path:"/",name:"Home",component:vt},{path:"/config",name:"Config",component:At}]}),Dt=n("mUbh"),zt=n("UjVw"),Bt=n("bOdI"),Zt=n.n(Bt),Jt={time:25},Yt=[5,10,15,20,25],Gt={running:0,total:Jt.time,time:Jt.time,cnfTimes:Yt},Kt=function(){return Math.floor(Gt.time/Gt.total*100)},Qt={getTime:function(t){return t.time},getRunning:function(t){return t.running},getTimes:function(t){return t.cnfTimes},getProgress:function(t){return Kt()},getPercentageW:function(t){return"width: "+Kt()+"%"}},Xt=function t(e){var n=e.commit;return setTimeout(function(){if(0!==Gt.running){if(n("COUNTDOWN_TIMER"),1===Gt.running&&Gt.time>=0)return t({commit:n});n("RESET_TIMER")}},6e4)},te={setTime:function(t,e){var n=t.commit;n("RESET_TIMER"),n("SET_TIME",e)},startTimer:function(t){var e=t.commit;e("START_TIMER"),Xt({commit:e})},stopTimer:function(t){(0,t.commit)("STOP_TIMER")},resetTimer:function(t){(0,t.commit)("RESET_TIMER")}},ee=(Ht={},Zt()(Ht,"SET_TIME",function(t,e){t.total=t.time=e}),Zt()(Ht,"RESET_TIMER",function(t){t.running=0,t.time=t.total}),Zt()(Ht,"START_TIMER",function(t){t.running=1}),Zt()(Ht,"STOP_TIMER",function(t){t.running=0}),Zt()(Ht,"COUNTDOWN_TIMER",function(t){return t.time--}),Ht),ne={state:Gt,getters:Qt,actions:te,mutations:ee};u.a.use(V.a);var re=new V.a.Store({actions:Dt,getters:zt,modules:{timer:ne}});u.a.config.productionTip=!1,new u.a({el:"#app",store:re,router:qt,template:"<App/>",components:{App:M}})},UjVw:function(t,e){},Usz0:function(t,e){},"VHl+":function(t,e){},enRW:function(t,e){},mUbh:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.a36a6fb46af6f889fd55.js.map