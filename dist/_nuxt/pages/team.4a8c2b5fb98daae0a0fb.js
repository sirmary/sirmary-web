webpackJsonp([6],{I5Wj:function(t,e,a){"use strict";function i(t){a("gktT")}var n={props:["person"]},r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"person-wrapper"},[a("nuxt-link",{staticClass:"person",attrs:{to:{name:"team-slug",params:{slug:t.person.fields.slug}}}},[a("img",{staticClass:"thumbnail",attrs:{src:t.person.fields.image.fields.file.url+"?fit=scale&w=100&h=100"}}),a("div",{staticClass:"text-wrapper"},[a("p",{staticClass:"person-name"},[t._v(t._s(t.person.fields.name))]),a("p",{staticClass:"person-title"},[t._v(t._s(t.person.fields.title))])])])],1)},s=[],o={render:r,staticRenderFns:s},d=o,l=a("VU/8"),c=i,p=l(n,d,c,"data-v-53f2af8c",null);e.a=p.exports},LwRa:function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,"[data-v-53f2af8c],[data-v-53f2af8c]:after,[data-v-53f2af8c]:before{box-sizing:border-box}.person-wrapper[data-v-53f2af8c]{padding:6px;display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-flow:row nowrap;-webkit-box-pack:justify;justify-content:space-between;-webkit-box-align:stretch;align-items:stretch;-webkit-box-flex:0;flex:0 1 100%}@media (min-width:46.25em){.person-wrapper[data-v-53f2af8c]{-webkit-box-flex:0;flex:0 1 50%}}@media (min-width:61.25em){.person-wrapper[data-v-53f2af8c]{-webkit-box-flex:0;flex:0 1 33.33%}}.person-wrapper .person[data-v-53f2af8c]{background:hsla(0,0%,100%,.3);display:-webkit-box;display:flex;-webkit-box-flex:1;flex:1 1 auto;padding:12px;-webkit-box-align:center;align-items:center;transition:background .2 ease}.person-wrapper .person[data-v-53f2af8c]:hover{background:hsla(0,0%,100%,.2)}@media (min-width:46.25em){.person-wrapper .person[data-v-53f2af8c]{padding:24px}}.person-wrapper img[data-v-53f2af8c]{width:36px;height:36px;margin-right:24px}@media (min-width:46.25em){.person-wrapper img[data-v-53f2af8c]{width:48px;height:48px}}.person-name[data-v-53f2af8c]{font-size:1.5rem;line-height:1.2;margin:0;margin-bottom:6px}@media (min-width:46.25em){.person-name[data-v-53f2af8c]{margin-bottom:12px}}.person-title[data-v-53f2af8c]{font-size:.8rem;margin:0}img[data-v-53f2af8c]{width:40%}h4[data-v-53f2af8c]{font-weight:700;font-size:1.5rem;color:#fff;margin:0}a[data-v-53f2af8c]{color:#fff;text-decoration:none}p a[data-v-53f2af8c]{text-indent:2.25rem}",""])},S2aS:function(t,e,a){"use strict";var i={props:{link:{default:"/chat",type:String}},data:function(){return{isSticky:!1,isArrow:!1}},mounted:function(){var t=this.$refs.closeButton,e=this.$data,a=this.$store;document.body.onscroll=function(){t.$el.parentElement.getBoundingClientRect().top<25?(e.isSticky=!0,a.state.isLogoBlurred=!0):(e.isSticky=!1,a.state.isLogoBlurred=!1)}}},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nuxt-link",{ref:"closeButton",staticClass:"close-modal",class:{sticky:t.isSticky,arrow:t.isArrow},attrs:{to:t.link}},[a("button",[a("svg",{attrs:{id:"close-btn",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 35"}},[a("line",{staticClass:"cls-1",attrs:{id:"x2",x1:"1",y1:"17.5",x2:"35",y2:"17.5"}}),a("line",{staticClass:"cls-1",attrs:{id:"wing1",x1:"1",y1:"17.5",x2:"18",y2:"17.5"}}),a("line",{staticClass:"cls-1",attrs:{id:"wing2","data-name":"wing1",x1:"1",y1:"17.5",x2:"18",y2:"17.5"}}),a("line",{staticClass:"cls-1",attrs:{id:"x1",x1:"1",y1:"17.5",x2:"35",y2:"17.5"}})])])])},r=[],s={render:n,staticRenderFns:r},o=s,d=a("VU/8"),l=d(i,o,null,null,null);e.a=l.exports},Z17O:function(t,e,a){"use strict";function i(t){a("od+M")}Object.defineProperty(e,"__esModule",{value:!0});var n=a("S2aS"),r=a("I5Wj"),s={props:["team"],data:function(){return{teamLink:"/chat"}},components:{"close-modal":n.a,"person-preview":r.a},head:function(){return{style:[{cssText:":root { background: #926392 }",type:"text/css"}]}},beforeMount:function(){document.body.classList="team teamView"}},o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"grid-wrapper"},[a("h1",[t._v("Team")]),a("div",{staticClass:"team-grid"},t._l(t.team,function(t){return a("person-preview",{key:t.id,attrs:{person:t}})}))])},d=[],l={render:o,staticRenderFns:d},c=l,p=a("VU/8"),f=i,m=p(s,c,f,"data-v-3d8d3bec",null);e.default=m.exports},gktT:function(t,e,a){var i=a("LwRa");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("0f29b5c2",i,!0)},"od+M":function(t,e,a){var i=a("vYup");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("393af8de",i,!0)},vYup:function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,"[data-v-3d8d3bec],[data-v-3d8d3bec]:after,[data-v-3d8d3bec]:before{box-sizing:border-box}.grid-wrapper[data-v-3d8d3bec]{margin:0 auto;padding:12px;padding-bottom:100px}h1[data-v-3d8d3bec]{width:100%;max-width:75rem;text-indent:2.25rem;margin:0;margin-bottom:24px}.team-grid[data-v-3d8d3bec]{display:-webkit-box;display:flex;width:100%;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-flow:row wrap;max-width:75rem;margin:0 auto;font-weight:700}.details[data-v-3d8d3bec]{width:100%;max-width:100vw;padding:24px;padding-top:0}.close-modal button[data-v-3d8d3bec]{font-size:2.2rem;font-weight:100;line-height:.5}.person-view[data-v-3d8d3bec]{width:100%}",""])}});
//# sourceMappingURL=team.4a8c2b5fb98daae0a0fb.js.map