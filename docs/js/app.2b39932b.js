(function(e){function n(n){for(var t,a,o=n[0],s=n[1],A=n[2],O=0,S=[];O<o.length;O++)a=o[O],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&S.push(r[a][0]),r[a]=0;for(t in s)Object.prototype.hasOwnProperty.call(s,t)&&(e[t]=s[t]);p&&p(n);while(S.length)S.shift()();return c.push.apply(c,A||[]),i()}function i(){for(var e,n=0;n<c.length;n++){for(var i=c[n],t=!0,o=1;o<i.length;o++){var s=i[o];0!==r[s]&&(t=!1)}t&&(c.splice(n--,1),e=a(a.s=i[0]))}return e}var t={},r={app:0},c=[];function a(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=e,a.c=t,a.d=function(e,n,i){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:i})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)a.d(i,t,function(n){return e[n]}.bind(null,t));return i},a.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="/jangtze/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=n,o=o.slice();for(var A=0;A<o.length;A++)n(o[A]);var p=s;c.push([0,"chunk-vendors"]),i()})({0:function(e,n,i){e.exports=i("56d7")},"01a7":function(e,n,i){"use strict";var t=i("4aeb"),r=i.n(t);r.a},"0672":function(e,n,i){"use strict";var t=i("9cf4"),r=i.n(t);r.a},"1db5":function(e,n,i){"use strict";var t=i("2b35"),r=i.n(t);r.a},"2b35":function(e,n,i){},"39cc":function(e,n,i){e.exports=i.p+"img/logo-white.37c80434.png"},"4aeb":function(e,n,i){},"4ffd":function(e,n,i){e.exports=i.p+"img/logo.5033c0ac.png"},"56d7":function(e,n,i){"use strict";i.r(n);i("e260"),i("e6cf"),i("cca6"),i("a79d");var t=i("2b0e"),r=function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("div",{attrs:{id:"app"}},[e._m(0),i("router-view"),i("Footer")],1)},c=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"header"},[t("div",{staticClass:"container",staticStyle:{height:"100%"}},[t("div",{staticClass:"header__content"},[t("div",{staticClass:"header__logo"},[t("img",{attrs:{width:"36",height:"36",src:i("4ffd")}}),t("span",{staticClass:"header__logo-label"},[e._v("JANGTZE")])])])])])}],a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"footer"},[t("img",{staticClass:"footer__logo",attrs:{width:"100",src:i("39cc")}}),t("div",{staticClass:"footer__content"},[t("a",{staticClass:"body",attrs:{href:"https://goo.gl/maps/1CqJNVKjV2c78sek9"}},[t("b-icon-geo-alt",{staticClass:"icon"}),e._v(" Calle Alcalde Marcial Franco 3, San Fernando, 35100, Las Palmas ")],1),t("a",{staticClass:"body",attrs:{href:"tel:928770180"}},[t("b-icon-phone",{staticClass:"icon"}),e._v(" (+34) 928 77 01 80 ")],1)])])},o=[],s=i("7386"),A={name:"Footer",components:{BIconGeoAlt:s["Lh"],BIconPhone:s["hk"]}},p=A,O=(i("1db5"),i("2877")),S=Object(O["a"])(p,a,o,!1,null,"192c7f4d",null),E=S.exports,d={name:"App",components:{Footer:E}},R=d,l=(i("b054"),Object(O["a"])(R,r,c,!1,null,"36d69bee",null)),N=l.exports,C=i("8c4f"),m=function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("div",[e._m(0),i("div",{staticClass:"container menu__content"},[i("p",{staticClass:"body"},[e._v(" Aquí encontrará nuestro menú a la carta. También disponemos de un menú del día. ")]),i("p",{staticClass:"body"},[e._v(" Nuestros platos pueden contener alérgenos, por favor consulte al camarero. ")]),i("div",{staticClass:"row"},[i("div",{staticClass:"col"},[i("ul",e._l(e.categories,(function(n){return i("li",{key:n,staticClass:"menu__category"},[i("accordion",{scopedSlots:e._u([{key:"header",fn:function(t){return[i("div",{staticClass:"menu__category-label"},[i("span",{staticClass:"menu__category-label--filler"}),i("h4",[e._v(e._s(n))]),i("span",{staticClass:"menu__category-label--toggle"},[e._v(e._s(t.expanded?"−":"+"))])])]}},{key:"content",fn:function(){return[i("ul",{staticClass:"menu__category-items"},e._l(e.getDishesFromCategory(n),(function(n){return i("li",{key:n.name,staticClass:"menu__dish"},[i("span",[e._v(e._s(e.capitalise(n.name)))]),i("span",{staticClass:"menu__dish-dots"}),i("span",[e._v(e._s(n.price)+"€")])])})),0)]},proxy:!0}],null,!0)})],1)})),0)])])])])},u=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"menu__banner"},[t("img",{staticClass:"menu__banner-img",attrs:{src:i("9fb3")}}),t("div",{staticClass:"menu__banner-overlay"},[t("div",{staticClass:"menu__banner-text"},[t("h1",{staticClass:"banner-heading"},[e._v("MENU")])])])])}],L=(i("a4d3"),i("e01a"),i("4de4"),i("a630"),i("d81d"),i("fb6a"),i("d3b7"),i("6062"),i("3ca3"),i("ddb0"),function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("div",{staticClass:"accordion"},[i("div",{staticClass:"accordion__header",on:{click:function(n){e.expanded=!e.expanded}}},[e._t("header",null,{expanded:e.expanded})],2),i("transition",{on:{"before-enter":e.beforeEnter,enter:e.enter,"after-enter":e.afterEnter,leave:e.leave}},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.expanded,expression:"expanded"}],staticStyle:{overflow:"hidden"}},[e._t("content")],2)])],1)}),T=[],f={name:"Accordion",data:function(){return{expanded:!1}},methods:{beforeEnter:function(e){e.style.height="0",e.style.opacity="0.5"},enter:function(e){e.style.transition="all .3s ease-out",e.style.height=e.scrollHeight>1?"".concat(e.scrollHeight,"px"):"auto",e.style.opacity=1},afterEnter:function(e){e.style.height="".concat(e.scrollHeight,"px"),e.style.opacity=1},leave:function(e){e.style.transition="all .2s ease-out",e.style.height="0",e.style.opacity="0"}}},I=f,P=(i("0672"),Object(O["a"])(I,L,T,!1,null,"773316d9",null)),_=P.exports,h=i("fb1f"),M={name:"Menu",components:{Accordion:_},data:function(){return{menu:h,expanded:!1}},computed:{categories:function(){return Array.from(new Set(h.map((function(e){return e.description}))))}},methods:{capitalise:function(e){return e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()},getDishesFromCategory:function(e){return this.menu.filter((function(n){return n.description===e}))}}},v=M,D=(i("01a7"),Object(O["a"])(v,m,u,!1,null,"77f71622",null)),b=D.exports;t["default"].use(C["a"]);var g=new C["a"]({routes:[{path:"/",name:"Menu",component:b},{path:"*",redirect:"/"}]}),y=i("5f5b"),F=i("b1e0");i("907d");t["default"].config.productionTip=!1,new t["default"]({router:g,render:function(e){return e(N)}}).$mount("#app"),t["default"].use(y["a"]),t["default"].use(F["a"])},"907d":function(e,n,i){},"9cf4":function(e,n,i){},"9fb3":function(e,n,i){e.exports=i.p+"img/img-1.e5f61296.jpg"},b054:function(e,n,i){"use strict";var t=i("bd96"),r=i.n(t);r.a},bd96:function(e,n,i){},fb1f:function(e){e.exports=JSON.parse('[{"name":"ENSALADA CHINA","description":"ENTREMESES","price":"3,50"},{"name":"ENSALADA DE POLLO Y GAMBAS","description":"ENTREMESES","price":"5,00"},{"name":"CÓCTEL DE GAMBAS","description":"ENTREMESES","price":"6,50"},{"name":"ROLLOS IMPERIALES","description":"ENTREMESES","price":"3,00"},{"name":"WAN TUN FRITO","description":"ENTREMESES","price":"4,00"},{"name":"PAN DE GAMBAS","description":"ENTREMESES","price":"1,80"},{"name":"PAN CHINO","description":"ENTREMESES","price":"1,30"},{"name":"SOPA DE TOMATE","description":"SOPAS","price":"2,70"},{"name":"SOPA DE HUEVOS REVUELTOS","description":"SOPAS","price":"2,70"},{"name":"SOPA DE LA CASA","description":"SOPAS","price":"2,70"},{"name":"SOPA DE POLLO Y CHAMPIÑÓN","description":"SOPAS","price":"2,70"},{"name":"SOPA DE FIDEOS CHINOS","description":"SOPAS","price":"2,70"},{"name":"SOPA DE MAÍZ Y POLLO","description":"SOPAS","price":"3,00"},{"name":"SOPA DE ALETA DE TIBURÓN","description":"SOPAS","price":"4,00"},{"name":"SOPA WAN TUN","description":"SOPAS","price":"3,30"},{"name":"SOPA DE VERDURAS","description":"SOPAS","price":"2,70"},{"name":"MEZCLA DE LEGUMBRES","description":"VERDURAS Y HUEVOS","price":"4,80"},{"name":"SETAS CHINAS Y BAMBÚ","description":"VERDURAS Y HUEVOS","price":"5,50"},{"name":"SOJA FRITA","description":"VERDURAS Y HUEVOS","price":"4,80"},{"name":"HUEVOS REVUELTOS CON GAMBAS","description":"VERDURAS Y HUEVOS","price":"6,00"},{"name":"HUEVOS REVUELTOS CON JAMÓN","description":"VERDURAS Y HUEVOS","price":"4,80"},{"name":"ARROZ FRITO CON POLLO","description":"ARROZ","price":"3,80"},{"name":"ARROZ FRITO CON GAMBAS","description":"ARROZ","price":"5,00"},{"name":"ARROZ FRITO CON TRES DELICIAS","description":"ARROZ","price":"3,80"},{"name":"ARROZ FRITO CON TERNERA","description":"ARROZ","price":"3,80"},{"name":"ARROZ FRITO CON CHA-SHIU","description":"ARROZ","price":"4,00"},{"name":"ARROZ FRITO CON HUEVOS","description":"ARROZ","price":"2,80"},{"name":"ARROZ BLANCO","description":"ARROZ","price":"1,30"},{"name":"TALLARINES FRITOS CON POLLO","description":"TALLARINES","price":"4,80"},{"name":"TALLARINES FRITOS CON GAMBAS","description":"TALLARINES","price":"5,70"},{"name":"TALLARINES FRITOS CON TRES DELICIAS","description":"TALLARINES","price":"5,30"},{"name":"TALLARINES FRITOS CON TERNERA","description":"TALLARINES","price":"4,80"},{"name":"TALLARINES FRITOS CON CHA-SHIU","description":"TALLARINES","price":"5,30"},{"name":"TALLARINES FRITOS","description":"TALLARINES","price":"2,80"},{"name":"FIDEOS DE ARROZ TRES DELICIAS","description":"TALLARINES","price":"5,70"},{"name":"PESCADO FRITO CON SALSA AGRIDULCE","description":"MARISCOS","price":"5,50"},{"name":"PESCADO FRITO CON SALSA CHINA","description":"MARISCOS","price":"5,50"},{"name":"LANGOSTINOS EN SALSA CHINA","description":"MARISCOS","price":"13,00"},{"name":"LANGOSTINOS FRITOS - REBOZADOS","description":"MARISCOS","price":"13,00"},{"name":"PINZAS DE CANGREJO CON SOJA NEGRA","description":"MARISCOS","price":"10,50"},{"name":"GAMBAS CON SALSA CHINA","description":"MARISCOS","price":"8,50"},{"name":"GAMBAS CON SALSA AGRIDULCE","description":"MARISCOS","price":"8,50"},{"name":"GAMBAS CON SALSA CURRY","description":"MARISCOS","price":"8,50"},{"name":"GAMBAS CON SALSA PICANTE","description":"MARISCOS","price":"8,50"},{"name":"GAMBAS CON SETAS Y BAMBÚ","description":"MARISCOS","price":"8,80"},{"name":"GAMBAS FRITAS - REBOZADAS","description":"MARISCOS","price":"8,50"},{"name":"CHOP SUEY DE GAMBAS","description":"MARISCOS","price":"8,00"},{"name":"SOJA FRITA CON GAMBAS","description":"MARISCOS","price":"8,00"},{"name":"PINCHITOS DE GAMBAS","description":"MARISCOS","price":"8,80"},{"name":"CARNE AGRIDULCE","description":"CERDO","price":"4,80"},{"name":"COSTILLAS FRITAS CON SALSA BARBACOA","description":"CERDO","price":"5,80"},{"name":"CHA-SHIU (CERDO ASADO) CON SALSA","description":"CERDO","price":"5,80"},{"name":"CHOP SUEY DE CERDO","description":"CERDO","price":"5,30"},{"name":"PINCHITO DE CERDO","description":"CERDO","price":"6,80"},{"name":"PATO FRITO CON SALSA CHINA","description":"PATO","price":"9,00"},{"name":"PATO FRITO CON PIÑA","description":"PATO","price":"9,00"},{"name":"PATO FRITO CON SALSA PICANTE","description":"PATO","price":"9,00"},{"name":"PATO FRITO A LA NARANJA","description":"PATO","price":"9,00"},{"name":"PATO FRITO CON SETAS Y BAMBÚ","description":"PATO","price":"9,30"},{"name":"PATO PEKIN (ENCARGAR 24 HRS ANTES)","description":"PATO","price":"45,00"},{"name":"TERNERA CON SALSA DE OSTRAS","description":"TERNERA","price":"5,00"},{"name":"TENERA CON SALSA CURRY","description":"TERNERA","price":"4,80"},{"name":"TERNERA CON CEBOLLAS","description":"TERNERA","price":"4,80"},{"name":"TERNERA CON PIMIENTOS VERDES","description":"TERNERA","price":"4,80"},{"name":"TERNERA CON SETAS Y BAMBÚ","description":"TERNERA","price":"5,70"},{"name":"TERNERA CON SALSA PICANTE","description":"TERNERA","price":"4,80"},{"name":"TERNERA CON AJO Y VERDURAS","description":"TERNERA","price":"5,00"},{"name":"TERNERA CON PUERRO","description":"TERNERA","price":"5,00"},{"name":"TERNERA CON SOJA NEGRA","description":"TERNERA","price":"5,00"},{"name":"TERNERA CON ALMENDRAS","description":"TERNERA","price":"5,00"},{"name":"CHOP SUEY DE TERNERA","description":"TERNERA","price":"4,80"},{"name":"FANTASÍA MANDARÍN","description":"TERNERA","price":"6,00"},{"name":"POLLO CON SASA CURRY","description":"POLLO","price":"4,80"},{"name":"POLLO CON SALSA PICANTE","description":"POLLO","price":"4,80"},{"name":"POLLO CON ALMENDRAS","description":"POLLO","price":"5,00"},{"name":"POLLO CON CHAMPIÑÓN","description":"POLLO","price":"5,00"},{"name":"POLLO CON SETAS Y BAMBÚ","description":"POLLO","price":"5,70"},{"name":"POLLO CON SOJA NEGRA","description":"POLLO","price":"5,00"},{"name":"POLLO CON PIÑA","description":"POLLO","price":"4,80"},{"name":"POLLO AL LIMÓN","description":"POLLO","price":"5,00"},{"name":"ALITAS DE POLLO FRITAS","description":"POLLO","price":"4,80"},{"name":"CHOP SUEY DE POLLO","description":"POLLO","price":"4,80"},{"name":"PINCHITO DE POLLO","description":"POLLO","price":"6,80"},{"name":"POLLO FRITO EN SALSA DE AJO","description":"POLLO","price":"5,30"},{"name":"POLLO LEÓN (CON SALSA PERRINS)","description":"POLLO","price":"5,30"},{"name":"HELADO VARIADO","description":"POSTRES","price":"2,70"},{"name":"HELADO CON NUECES","description":"POSTRES","price":"3,30"},{"name":"FLAN","description":"POSTRES","price":"2,70"},{"name":"MACEDONIA","description":"POSTRES","price":"2,70"},{"name":"LYCHEES","description":"POSTRES","price":"3,30"},{"name":"PLÁTANOS FRITOS CON MIEL","description":"POSTRES","price":"3,80"},{"name":"MANZANAS FRITAS CON MIEL","description":"POSTRES","price":"3,80"},{"name":"PIÑA FRITA CON MIEL","description":"POSTRES","price":"3,80"},{"name":"COPA DE LA CASA","description":"POSTRES","price":"3,80"}]')}});
//# sourceMappingURL=app.2b39932b.js.map