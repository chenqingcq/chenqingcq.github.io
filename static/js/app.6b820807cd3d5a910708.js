webpackJsonp([1],{"6S9R":function(t,e){},KzqT:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});n("6S9R");var r=n("bWVd"),a=n.n(r),s=n("MVMM"),i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tab-container"},t._l(t.items,function(e,r){return n("div",{key:r,class:{active:r==t.currentIndex},on:{click:function(e){t.changeIndex(r)}}},[t._v("\n        "+t._s(e.info)+"\n    ")])}))},staticRenderFns:[]};var u={name:"App",components:{tab:n("vSla")({name:"tab",data:function(){return{items:[{info:"首页"},{info:"关于"},{info:"故事"},{info:"哈妮"}],currentIndex:0}},computed:{},methods:{changeIndex:function(t){switch(this.currentIndex=t,t){case 0:this.$router.push("/index");break;case 1:this.$router.push("/about");break;case 2:this.$router.push("/story");break;case 3:this.$router.push("/honey");break;default:this.$router.push("/index")}}}},i,!1,function(t){n("KzqT")},"data-v-6526f0d5",null).exports}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("keep-alive",[e("router-view")],1),this._v(" "),e("tab",{staticClass:"_tab"})],1)},staticRenderFns:[]};var o=n("vSla")(u,c,!1,function(t){n("u1DJ")},null,null).exports,l=n("zO6J"),d={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"index-container"},[this._v("\n   首页\n")])},staticRenderFns:[]};var f=n("vSla")({data:function(){return{}}},d,!1,function(t){n("bpAi")},"data-v-12343feb",null).exports,p={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"recommed"},[this._v("\n   关于\n")])},staticRenderFns:[]},h=n("vSla")({data:function(){return{}}},p,!1,null,null,null).exports,v={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"recommed"},[this._v("\n   故事\n")])},staticRenderFns:[]},m=n("vSla")({data:function(){return{}}},v,!1,null,null,null).exports,_={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"recommed"},[this._v("\n   哈尼\n")])},staticRenderFns:[]},b=n("vSla")({data:function(){return{}}},_,!1,null,null,null).exports;s.default.use(l.a);var x=new l.a({routes:[{path:"/",name:"index",component:f},{path:"/index",redirect:"/"},{path:"/about",name:"about",component:h},{path:"/story",name:"story",component:m},{path:"/honey",name:"honey",component:b}]});n("D0oh");s.default.use(a.a),s.default.config.productionTip=!1,new s.default({el:"#app",router:x,components:{App:o},template:"<App/>"})},bpAi:function(t,e){},u1DJ:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.6b820807cd3d5a910708.js.map