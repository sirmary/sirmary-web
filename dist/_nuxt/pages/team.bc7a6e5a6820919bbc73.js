webpackJsonp([7],{"4X+L":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nuxt-link",{ref:"closeButton",staticClass:"close-modal",class:{sticky:t.isSticky},attrs:{to:t.link}},[a("button",{directives:[{name:"show",rawName:"v-show",value:t.$store.state.isArrow,expression:"$store.state.isArrow"}],staticClass:"arrow"},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 35"}},[a("line",{staticClass:"st0",attrs:{x1:"1",y1:"17.5",x2:"35",y2:"17.5"}}),a("line",{staticClass:"st0",attrs:{x1:"1",y1:"17.5",x2:"13",y2:"5.5"}}),a("line",{staticClass:"st0",attrs:{x1:"1",y1:"17.8",x2:"13",y2:"29.8"}})])]),a("button",{directives:[{name:"show",rawName:"v-show",value:!t.$store.state.isArrow,expression:"!$store.state.isArrow"}],staticClass:"close"},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 35"}},[a("style",{attrs:{type:"text/css"}}),a("line",{attrs:{transform:"rotate(45 18 17.5)",x1:"1",y1:"17.5",x2:"35",y2:"17.5"}}),a("line",{attrs:{transform:"rotate(-45 18 17.5)",x1:"1",y1:"17.5",x2:"35",y2:"17.5"}})])])])},i=[],s={render:r,staticRenderFns:i};e.a=s},FsCi:function(t,e,a){"use strict";function r(t){a("g0YK")}Object.defineProperty(e,"__esModule",{value:!0});var i=a("QNYo"),s=a("wHcC"),n=a("VU/8"),o=r,c=n(i.a,s.a,o,"data-v-ae046672",null);e.default=c.exports},I5Wj:function(t,e,a){"use strict";function r(t){a("q8nE")}var i=a("cyTv"),s=a("R/Ic"),n=a("VU/8"),o=r,c=n(i.a,s.a,o,"data-v-53f2af8c",null);e.a=c.exports},QNYo:function(t,e,a){"use strict";var r=a("BO1k"),i=a.n(r),s=a("fQ5t"),n=(a.n(s),a("S2aS")),o=a("I5Wj"),c=Object(s.createClient)();e.a={asyncData:function(t){t.env,t.params;return c.getEntries({content_type:"person"}).then(function(t){var e=[],a=!0,r=!1,s=void 0;try{for(var n,o=i()(t.items);!(a=(n=o.next()).done);a=!0){var c=n.value;e.push(c)}}catch(t){r=!0,s=t}finally{try{!a&&o.return&&o.return()}finally{if(r)throw s}}for(var l=e.slice(),d=l.length-1;d>0;d--){var f=Math.floor(Math.random()*(d+1)),p=l[d];l[d]=l[f],l[f]=p}return{team:l}})},data:function(){return{teamLink:"/chat"}},components:{"close-modal":n.a,"person-preview":o.a},head:function(){return{style:[{cssText:":root { background: #926392 }",type:"text/css"}]}},beforeMount:function(){document.body.classList="team teamView",this.$store.state.isArrow=!1},watch:{$route:function(){this.$store.state.isArrow=!1}}}},"R/Ic":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"person-wrapper"},[a("div",{staticClass:"person-content"},[a("nuxt-link",{staticClass:"person",attrs:{to:{name:"team-slug",params:{slug:t.person.fields.slug}}}},[a("img",{staticClass:"thumbnail",attrs:{src:t.person.fields.image.fields.file.url+"?fit=scale&w=50&h=50"}}),a("div",{staticClass:"text-wrapper"},[a("p",{staticClass:"person-name"},[t._v(t._s(t.person.fields.name))]),a("p",{staticClass:"person-title"},[t._v(t._s(t.person.fields.title))])])])],1)])},i=[],s={render:r,staticRenderFns:i};e.a=s},S2aS:function(t,e,a){"use strict";var r=a("VzL9"),i=a("4X+L"),s=a("VU/8"),n=s(r.a,i.a,null,null,null);e.a=n.exports},VzL9:function(t,e,a){"use strict";e.a={props:{link:{default:"/chat",type:String}},data:function(){return{isSticky:!1,isArrow:!1}},mounted:function(){var t=this.$refs.closeButton,e=this.$data,a=this.$store;document.body.onscroll=function(){t.$el.parentElement.getBoundingClientRect().top<25?(e.isSticky=!0,a.state.isLogoBlurred=!0):(e.isSticky=!1,a.state.isLogoBlurred=!1)}},updated:function(){this.isArrow=this.$store.state.isArrow}}},cyTv:function(t,e,a){"use strict";e.a={props:["person"]}},g0YK:function(t,e,a){var r=a("hgFS");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a("rjj0")("51ccb390",r,!0)},hgFS:function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,"[data-v-ae046672],[data-v-ae046672]:after,[data-v-ae046672]:before{box-sizing:border-box}.container[data-v-ae046672]{-webkit-box-orient:horizontal;flex-flow:row nowrap;padding:100px 0 0;transition:margin-left .5s cubic-bezier(0,0,.2,1)}.container[data-v-ae046672],.grid[data-v-ae046672]{display:-webkit-box;display:flex;-webkit-box-direction:normal}.grid[data-v-ae046672]{width:100vw;-webkit-box-orient:vertical;flex-flow:column nowrap;-webkit-box-pack:start;justify-content:flex-start;-webkit-box-align:center;align-items:center;padding:12px}.grid h1[data-v-ae046672]{width:100%;max-width:75rem;text-indent:2.25rem;margin:0;margin-bottom:24px}.team-grid[data-v-ae046672]{display:-webkit-box;display:flex;width:100%;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-flow:row wrap;max-width:75rem;margin:0 auto;font-weight:700}.details[data-v-ae046672]{width:100%;max-width:100vw;padding:24px;padding-top:0}.person-view[data-v-ae046672]{width:100%}",""])},q8nE:function(t,e,a){var r=a("zZAV");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a("rjj0")("3e0e0da6",r,!0)},wHcC:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("nuxt-child",{key:t.$route.params.id,attrs:{team:t.team}}),a("close-modal",{attrs:{link:t.teamLink}})],1)},i=[],s={render:r,staticRenderFns:i};e.a=s},zZAV:function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,"[data-v-53f2af8c],[data-v-53f2af8c]:after,[data-v-53f2af8c]:before{box-sizing:border-box}.person-wrapper[data-v-53f2af8c]{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-flow:row nowrap;-webkit-box-pack:justify;justify-content:space-between;-webkit-box-align:stretch;align-items:stretch;-webkit-box-flex:0;flex:0 1 100%}@media (min-width:46.25em){.person-wrapper[data-v-53f2af8c]{-webkit-box-flex:0;flex:0 1 50%}}@media (min-width:61.25em){.person-wrapper[data-v-53f2af8c]{-webkit-box-flex:0;flex:0 1 33.33%}}.person-wrapper .person-content[data-v-53f2af8c]{padding:6px;width:100%;height:100%}.person-wrapper .person[data-v-53f2af8c]{height:100%;background:hsla(0,0%,100%,.3);display:-webkit-box;display:flex;-webkit-box-flex:1;flex:1 1 auto;padding:12px;-webkit-box-align:center;align-items:center;transition:background .2 ease}.person-wrapper .person[data-v-53f2af8c]:hover{background:hsla(0,0%,100%,.2)}@media (min-width:46.25em){.person-wrapper .person[data-v-53f2af8c]{padding:24px}}.person-wrapper img[data-v-53f2af8c]{width:36px;height:36px;margin-right:24px}@media (min-width:46.25em){.person-wrapper img[data-v-53f2af8c]{width:48px;height:48px}}.person-name[data-v-53f2af8c]{font-size:1.5rem;line-height:1.2;margin:0;margin-bottom:6px}@media (min-width:46.25em){.person-name[data-v-53f2af8c]{margin-bottom:12px}}.person-title[data-v-53f2af8c]{font-size:.8rem;margin:0}img[data-v-53f2af8c]{width:40%}h4[data-v-53f2af8c]{font-weight:700;font-size:1.5rem;color:#fff;margin:0}a[data-v-53f2af8c]{color:#fff;text-decoration:none}p a[data-v-53f2af8c]{text-indent:2.25rem}",""])}});
//# sourceMappingURL=team.bc7a6e5a6820919bbc73.js.map