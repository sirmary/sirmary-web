webpackJsonp([6],{I5Wj:function(t,e,a){"use strict";function s(t){a("Kov/")}var r=a("cyTv"),i=a("xMqy"),n=a("VU/8"),o=s,d=n(r.a,i.a,!1,o,"data-v-5bdbb43a",null);e.a=d.exports},IiNr:function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,"[data-v-65176e11],[data-v-65176e11]:after,[data-v-65176e11]:before{box-sizing:border-box}.grid-wrapper[data-v-65176e11]{margin:0 auto;padding:12px;padding-bottom:100px;width:100%}h1[data-v-65176e11]{width:100%;max-width:75rem;text-indent:2.25rem;margin:0;margin-bottom:24px}.team-grid[data-v-65176e11]{display:-webkit-box;display:flex;width:100%;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-flow:row wrap;max-width:75rem;margin:0 auto;font-weight:700}.details[data-v-65176e11]{width:100%;max-width:100vw;padding:24px;padding-top:0}.person-view[data-v-65176e11]{width:100%}",""])},"Kov/":function(t,e,a){var s=a("rOIi");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("rjj0")("5e445856",s,!0)},NStl:function(t,e,a){"use strict";var s=a("S2aS"),r=a("I5Wj");e.a={props:["team"],data:function(){return{teamLink:"/chat"}},components:{"close-modal":s.a,"person-preview":r.a},head:function(){return{style:[{cssText:":root { background: #926392 }",type:"text/css"}]}},beforeMount:function(){document.body.classList="team teamView",this.$store.state.isArrow=!1},mounted:function(){(!!navigator.userAgent.match(/Trident/g)||!!navigator.userAgent.match(/MSIE/g)||!!navigator.userAgent.match(/Edge/g))&&document.body.setAttribute("class","team teamView")}}},S2aS:function(t,e,a){"use strict";var s=a("VzL9"),r=a("h3Q9"),i=a("VU/8"),n=i(s.a,r.a,!1,null,null,null);e.a=n.exports},SZNE:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"grid-wrapper"},[a("h1",[t._v("Team")]),a("div",{staticClass:"team-grid",attrs:{id:"team-grid"}},t._l(t.team,function(t){return a("person-preview",{key:t.id,attrs:{person:t}})}))])},r=[],i={render:s,staticRenderFns:r};e.a=i},VzL9:function(t,e,a){"use strict";e.a={props:{link:{default:"/chat",type:String}},data:function(){return{isSticky:!1,isArrow:!1}},mounted:function(){var t=this.$refs.closeButton,e=this.$data,a=this.$store;document.body.onscroll=function(){t.$el.parentElement.getBoundingClientRect().top<25?(e.isSticky=!0,a.state.isLogoBlurred=!0):(e.isSticky=!1,a.state.isLogoBlurred=!1)}},updated:function(){this.isArrow=this.$store.state.isArrow}}},Z17O:function(t,e,a){"use strict";function s(t){a("yUu5")}Object.defineProperty(e,"__esModule",{value:!0});var r=a("NStl"),i=a("SZNE"),n=a("VU/8"),o=s,d=n(r.a,i.a,!1,o,"data-v-65176e11",null);e.default=d.exports},cyTv:function(t,e,a){"use strict";e.a={props:["person"]}},h3Q9:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nuxt-link",{ref:"closeButton",staticClass:"close-modal",class:{sticky:t.isSticky},attrs:{to:t.link}},[a("button",{directives:[{name:"show",rawName:"v-show",value:t.$store.state.isArrow,expression:"$store.state.isArrow"}],staticClass:"arrow"},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 35"}},[a("line",{staticClass:"st0",attrs:{x1:"1",y1:"17.5",x2:"35",y2:"17.5"}}),a("line",{staticClass:"st0",attrs:{x1:"1",y1:"17.5",x2:"13",y2:"5.5"}}),a("line",{staticClass:"st0",attrs:{x1:"1",y1:"17.8",x2:"13",y2:"29.8"}})])]),a("button",{directives:[{name:"show",rawName:"v-show",value:!t.$store.state.isArrow,expression:"!$store.state.isArrow"}],staticClass:"close"},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 35"}},[a("style",{attrs:{type:"text/css"}}),a("line",{attrs:{transform:"rotate(45 18 17.5)",x1:"1",y1:"17.5",x2:"35",y2:"17.5"}}),a("line",{attrs:{transform:"rotate(-45 18 17.5)",x1:"1",y1:"17.5",x2:"35",y2:"17.5"}})])])])},r=[],i={render:s,staticRenderFns:r};e.a=i},rOIi:function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,"[data-v-5bdbb43a],[data-v-5bdbb43a]:after,[data-v-5bdbb43a]:before{box-sizing:border-box}.person-wrapper[data-v-5bdbb43a]{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-flow:row nowrap;-webkit-box-pack:justify;justify-content:space-between;-webkit-box-align:stretch;align-items:stretch;-webkit-box-flex:0;flex:0 1 100%}@media (min-width:46.25em){.person-wrapper[data-v-5bdbb43a]{-webkit-box-flex:0;flex:0 1 50%}}@media (min-width:61.25em){.person-wrapper[data-v-5bdbb43a]{-webkit-box-flex:0;flex:0 1 33.33%}}.person-wrapper .person-content[data-v-5bdbb43a]{padding:6px;width:100%;height:100%}.person-wrapper .person[data-v-5bdbb43a]{height:100%;background:hsla(0,0%,100%,.3);display:-webkit-box;display:flex;-webkit-box-flex:1;flex:1 1 auto;padding:12px;-webkit-box-align:center;align-items:center;transition:background .2 ease}.person-wrapper .person[data-v-5bdbb43a]:hover{background:hsla(0,0%,100%,.2)}@media (min-width:46.25em){.person-wrapper .person[data-v-5bdbb43a]{padding:24px}}.person-wrapper img[data-v-5bdbb43a]{width:36px;height:36px;margin-right:24px}@media (min-width:46.25em){.person-wrapper img[data-v-5bdbb43a]{width:48px;height:48px}}.person-name[data-v-5bdbb43a]{font-size:1.5rem;line-height:1.2;margin:0;margin-bottom:6px}@media (min-width:46.25em){.person-name[data-v-5bdbb43a]{margin-bottom:12px}}.person-title[data-v-5bdbb43a]{font-size:.8rem;margin:0}img[data-v-5bdbb43a]{width:40%}h4[data-v-5bdbb43a]{font-weight:700;font-size:1.5rem;color:#fff;margin:0}a[data-v-5bdbb43a]{color:#fff;text-decoration:none}p a[data-v-5bdbb43a]{text-indent:2.25rem}",""])},xMqy:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"person-wrapper"},[a("div",{staticClass:"person-content"},[a("nuxt-link",{staticClass:"person",attrs:{to:{name:"team-slug",params:{slug:t.person.fields.slug}}}},[a("img",{staticClass:"thumbnail",attrs:{src:t.person.fields.image.fields.file.url+"?fit=scale&w=50&h=50"}}),a("div",{staticClass:"text-wrapper"},[a("p",{staticClass:"person-name"},[t._v(t._s(t.person.fields.name))]),a("p",{staticClass:"person-title"},[t._v(t._s(t.person.fields.title))])])])],1)])},r=[],i={render:s,staticRenderFns:r};e.a=i},yUu5:function(t,e,a){var s=a("IiNr");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("rjj0")("3e2fe85a",s,!0)}});
//# sourceMappingURL=index.8c918cae87399afa3816.js.map