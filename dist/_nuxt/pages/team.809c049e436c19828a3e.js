webpackJsonp([8],{"1S3m":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("nuxt-child",{key:t.$route.params.id,attrs:{team:t.team}}),a("close-modal",{attrs:{link:t.teamLink}})],1)},i=[],s={render:r,staticRenderFns:i};e.a=s},"DZs/":function(t,e,a){var r=a("rYC2");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a("rjj0")("19e121d2",r,!0)},Ezhj:function(t,e,a){"use strict";e.a={props:["person"]}},FsCi:function(t,e,a){"use strict";function r(t){a("DZs/")}Object.defineProperty(e,"__esModule",{value:!0});var i=a("L9J3"),s=a("1S3m"),n=a("VU/8"),o=r,d=n(i.a,s.a,!1,o,"data-v-4923a9ec",null);e.default=d.exports},I5Wj:function(t,e,a){"use strict";function r(t){a("Kov/")}var i=a("Ezhj"),s=a("xMqy"),n=a("VU/8"),o=r,d=n(i.a,s.a,!1,o,"data-v-5bdbb43a",null);e.a=d.exports},"Kov/":function(t,e,a){var r=a("rOIi");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a("rjj0")("5e445856",r,!0)},L9J3:function(t,e,a){"use strict";var r=a("fQ5t"),i=(a.n(r),a("S2aS")),s=a("I5Wj"),n=Object(r.createClient)();e.a={asyncData:function(t){t.env,t.params;return n.getEntries({content_type:"person"}).then(function(t){var e=[],a=!0,r=!1,i=void 0;try{for(var s,n=t.items[Symbol.iterator]();!(a=(s=n.next()).done);a=!0){var o=s.value;e.push(o)}}catch(t){r=!0,i=t}finally{try{!a&&n.return&&n.return()}finally{if(r)throw i}}for(var d=e.slice(),l=d.length-1;l>0;l--){var c=Math.floor(Math.random()*(l+1)),b=d[l];d[l]=d[c],d[c]=b}return{team:d}})},data:function(){return{teamLink:"/chat"}},components:{"close-modal":i.a,"person-preview":s.a},head:function(){return{style:[{cssText:":root { background: #926392 }",type:"text/css"}]}},beforeMount:function(){document.body.classList="team teamView",this.$store.state.isArrow=!1},watch:{$route:function(){this.$store.state.isArrow=!1}}}},S2aS:function(t,e,a){"use strict";var r=a("a9Iy"),i=a("h3Q9"),s=a("VU/8"),n=s(r.a,i.a,!1,null,null,null);e.a=n.exports},a9Iy:function(t,e,a){"use strict";e.a={props:{link:{default:"/chat",type:String}},data:function(){return{isSticky:!1,isArrow:!1}},mounted:function(){var t=this.$refs.closeButton,e=this.$data,a=this.$store;document.body.onscroll=function(){t.$el.parentElement.getBoundingClientRect().top<25?(e.isSticky=!0,a.state.isLogoBlurred=!0):(e.isSticky=!1,a.state.isLogoBlurred=!1)}},updated:function(){this.isArrow=this.$store.state.isArrow}}},h3Q9:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nuxt-link",{ref:"closeButton",staticClass:"close-modal",class:{sticky:t.isSticky},attrs:{to:t.link}},[a("button",{directives:[{name:"show",rawName:"v-show",value:t.$store.state.isArrow,expression:"$store.state.isArrow"}],staticClass:"arrow"},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 35"}},[a("line",{staticClass:"st0",attrs:{x1:"1",y1:"17.5",x2:"35",y2:"17.5"}}),a("line",{staticClass:"st0",attrs:{x1:"1",y1:"17.5",x2:"13",y2:"5.5"}}),a("line",{staticClass:"st0",attrs:{x1:"1",y1:"17.8",x2:"13",y2:"29.8"}})])]),a("button",{directives:[{name:"show",rawName:"v-show",value:!t.$store.state.isArrow,expression:"!$store.state.isArrow"}],staticClass:"close"},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 35"}},[a("style",{attrs:{type:"text/css"}}),a("line",{attrs:{transform:"rotate(45 18 17.5)",x1:"1",y1:"17.5",x2:"35",y2:"17.5"}}),a("line",{attrs:{transform:"rotate(-45 18 17.5)",x1:"1",y1:"17.5",x2:"35",y2:"17.5"}})])])])},i=[],s={render:r,staticRenderFns:i};e.a=s},rOIi:function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,"[data-v-5bdbb43a],[data-v-5bdbb43a]:after,[data-v-5bdbb43a]:before{box-sizing:border-box}.person-wrapper[data-v-5bdbb43a]{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-flow:row nowrap;-webkit-box-pack:justify;justify-content:space-between;-webkit-box-align:stretch;align-items:stretch;-webkit-box-flex:0;flex:0 1 100%}@media (min-width:46.25em){.person-wrapper[data-v-5bdbb43a]{-webkit-box-flex:0;flex:0 1 50%}}@media (min-width:61.25em){.person-wrapper[data-v-5bdbb43a]{-webkit-box-flex:0;flex:0 1 33.33%}}.person-wrapper .person-content[data-v-5bdbb43a]{padding:6px;width:100%;height:100%}.person-wrapper .person[data-v-5bdbb43a]{height:100%;background:hsla(0,0%,100%,.3);display:-webkit-box;display:flex;-webkit-box-flex:1;flex:1 1 auto;padding:12px;-webkit-box-align:center;align-items:center;transition:background .2 ease}.person-wrapper .person[data-v-5bdbb43a]:hover{background:hsla(0,0%,100%,.2)}@media (min-width:46.25em){.person-wrapper .person[data-v-5bdbb43a]{padding:24px}}.person-wrapper img[data-v-5bdbb43a]{width:36px;height:36px;margin-right:24px}@media (min-width:46.25em){.person-wrapper img[data-v-5bdbb43a]{width:48px;height:48px}}.person-name[data-v-5bdbb43a]{font-size:1.5rem;line-height:1.2;margin:0;margin-bottom:6px}@media (min-width:46.25em){.person-name[data-v-5bdbb43a]{margin-bottom:12px}}.person-title[data-v-5bdbb43a]{font-size:.8rem;margin:0}img[data-v-5bdbb43a]{width:40%}h4[data-v-5bdbb43a]{font-weight:700;font-size:1.5rem;color:#fff;margin:0}a[data-v-5bdbb43a]{color:#fff;text-decoration:none}p a[data-v-5bdbb43a]{text-indent:2.25rem}",""])},rYC2:function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,"[data-v-4923a9ec],[data-v-4923a9ec]:after,[data-v-4923a9ec]:before{box-sizing:border-box}.container[data-v-4923a9ec]{-webkit-box-orient:horizontal;flex-flow:row nowrap;padding:100px 0 0;transition:margin-left .5s cubic-bezier(0,0,.2,1)}.container[data-v-4923a9ec],.grid[data-v-4923a9ec]{display:-webkit-box;display:flex;-webkit-box-direction:normal}.grid[data-v-4923a9ec]{width:100vw;-webkit-box-orient:vertical;flex-flow:column nowrap;-webkit-box-pack:start;justify-content:flex-start;-webkit-box-align:center;align-items:center;padding:12px}.grid h1[data-v-4923a9ec]{width:100%;max-width:75rem;text-indent:2.25rem;margin:0;margin-bottom:24px}.team-grid[data-v-4923a9ec]{display:-webkit-box;display:flex;width:100%;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-flow:row wrap;max-width:75rem;margin:0 auto;font-weight:700}.details[data-v-4923a9ec]{width:100%;max-width:100vw;padding:24px;padding-top:0}.person-view[data-v-4923a9ec]{width:100%}",""])},xMqy:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"person-wrapper"},[a("div",{staticClass:"person-content"},[a("nuxt-link",{staticClass:"person",attrs:{to:{name:"team-slug",params:{slug:t.person.fields.slug}}}},[a("img",{staticClass:"thumbnail",attrs:{src:t.person.fields.image.fields.file.url+"?fit=scale&w=50&h=50"}}),a("div",{staticClass:"text-wrapper"},[a("p",{staticClass:"person-name"},[t._v(t._s(t.person.fields.name))]),a("p",{staticClass:"person-title"},[t._v(t._s(t.person.fields.title))])])])],1)])},i=[],s={render:r,staticRenderFns:i};e.a=s}});
//# sourceMappingURL=team.809c049e436c19828a3e.js.map