webpackJsonp([5],{"1RNk":function(t,e,a){var i=a("Qm4r");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("5b4812dc",i,!0)},"9VMb":function(t,e,a){"use strict";e.a={props:["post"]}},BZTh:function(t,e,a){"use strict";function i(t){a("1RNk")}var s=a("NFBs"),r=a("VU/8"),n=i,o=r(null,s.a,!1,n,null,null);e.a=o.exports},BmBX:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"article-wrapper"},[a("div",{staticClass:"article"},[a("nuxt-link",{staticClass:"title",attrs:{to:{name:"cases-slug",params:{slug:t.post.fields.slug}}}},[a("div",{staticClass:"title-wrapper"},[a("h4",[t._v(t._s(t.post.fields.title))]),a("p",{staticClass:"description"},[t._v(t._s(t.post.fields.description))])]),a("img",{staticClass:"thumbnail",attrs:{src:t.post.fields.overviewThumbnail.fields.file.url+"?fit=scale&w=750&h=450&fm=jpg&q=60&fl=progressive"}})])],1)])},s=[],r={render:i,staticRenderFns:s};e.a=r},Fb5d:function(t,e,a){"use strict";function i(t){a("MOgX")}var s=a("9VMb"),r=a("BmBX"),n=a("VU/8"),o=i,c=n(s.a,r.a,!1,o,"data-v-27b93d9c",null);e.a=c.exports},MOgX:function(t,e,a){var i=a("U6Ms");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("30e41b0a",i,!0)},NFBs:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"top-nav",attrs:{role:"navigation"}},[a("ul",{staticClass:"menu"},t._l(this.$router.options.routes,function(e){return/\/.*?\/.*/.test(e.path)?t._e():a("li",[a("nuxt-link",{attrs:{to:{name:e.name}}},[t._v(t._s(e.name.charAt(0).toUpperCase()+e.name.slice(1)))])],1)}))])},s=[],r={render:i,staticRenderFns:s};e.a=r},Qm4r:function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,".person-name:link,.person-name:visited{width:50%;display:inline-block;font-size:2em;text-decoration:none;color:#373f49}.top-nav{width:50%;text-align:right}.menu,.menu li,.top-nav{display:inline-block}.menu li{margin-left:1em}.menu a:link,.menu a:visited{color:#373f49;text-decoration:none}",""])},S2aS:function(t,e,a){"use strict";var i=a("a9Iy"),s=a("h3Q9"),r=a("VU/8"),n=r(i.a,s.a,!1,null,null,null);e.a=n.exports},U6Ms:function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,"[data-v-27b93d9c],[data-v-27b93d9c]:after,[data-v-27b93d9c]:before{box-sizing:border-box}.article-wrapper[data-v-27b93d9c]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-flow:column wrap;-webkit-box-pack:justify;justify-content:space-between;-webkit-box-align:space-between;align-items:space-between;align-content:space-between}@media (min-width:46.25em){.article-wrapper .article[data-v-27b93d9c]{padding:.8rem}}.article-wrapper .title-wrapper[data-v-27b93d9c]{padding:12px}.article-wrapper .title-wrapper p[data-v-27b93d9c]{font-weight:700}.article-wrapper h4[data-v-27b93d9c]{text-indent:36px;font-weight:700;font-size:2.25rem;color:#fff;margin:0;margin-bottom:12px;line-height:1}.article-wrapper p[data-v-27b93d9c]{margin:0;margin-bottom:12px}@media (min-width:46.25em){.article-wrapper .description[data-v-27b93d9c]{min-height:2.25rem}}.article-wrapper a[data-v-27b93d9c]{color:#fff;text-decoration:none}.article-wrapper img[data-v-27b93d9c]{width:100%;margin:0 auto;align-self:flex-end}",""])},"Xuu/":function(t,e,a){"use strict";var i=a("fQ5t"),s=(a.n(i),a("BZTh")),r=a("Fb5d"),n=a("S2aS"),o=Object(i.createClient)();e.a={asyncData:function(t){var e=t.env;t.params;return o.getEntries({content_type:e.CTF_BLOG_POST_TYPE_ID,order:"-sys.updatedAt"}).then(function(t){var e=[],a=!0,i=!1,s=void 0;try{for(var r,n=t.items[Symbol.iterator]();!(a=(r=n.next()).done);a=!0){var o=r.value;void 0!==o.fields.overviewThumbnail&&void 0!==o.fields.overviewThumbnail.fields&&e.push(o)}}catch(t){i=!0,s=t}finally{try{!a&&n.return&&n.return()}finally{if(i)throw s}}return{posts:e}})},methods:{changeView:function(){this.$emit("changeView","ChatWidget")}},components:{ArticlePreview:r.a,Navigation:s.a,"close-modal":n.a},head:function(){return{style:[{cssText:":root { background: #595959 }",type:"text/css"}]}},beforeMount:function(){this.$store.state.isArrow=!1},mounted:function(){!navigator.userAgent.match(/Trident/g)&&!navigator.userAgent.match(/MSIE/g)&&!navigator.userAgent.match(/Edge/g)?document.body.classList="cases":document.body.setAttribute("class","cases")}}},ZlDX:function(t,e,a){var i=a("y9VV");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("6327b841",i,!0)},a9Iy:function(t,e,a){"use strict";e.a={props:{link:{default:"/chat",type:String}},data:function(){return{isSticky:!1,isArrow:!1}},mounted:function(){var t=this.$refs.closeButton,e=this.$data,a=this.$store;document.body.onscroll=function(){t.$el.parentElement.getBoundingClientRect().top<25?(e.isSticky=!0,a.state.isLogoBlurred=!0):(e.isSticky=!1,a.state.isLogoBlurred=!1)}},updated:function(){this.isArrow=this.$store.state.isArrow}}},h3Q9:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nuxt-link",{ref:"closeButton",staticClass:"close-modal",class:{sticky:t.isSticky},attrs:{to:t.link}},[a("button",{directives:[{name:"show",rawName:"v-show",value:t.$store.state.isArrow,expression:"$store.state.isArrow"}],staticClass:"arrow"},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 35"}},[a("line",{staticClass:"st0",attrs:{x1:"1",y1:"17.5",x2:"35",y2:"17.5"}}),a("line",{staticClass:"st0",attrs:{x1:"1",y1:"17.5",x2:"13",y2:"5.5"}}),a("line",{staticClass:"st0",attrs:{x1:"1",y1:"17.8",x2:"13",y2:"29.8"}})])]),a("button",{directives:[{name:"show",rawName:"v-show",value:!t.$store.state.isArrow,expression:"!$store.state.isArrow"}],staticClass:"close"},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 35"}},[a("style",{attrs:{type:"text/css"}}),a("line",{attrs:{transform:"rotate(45 18 17.5)",x1:"1",y1:"17.5",x2:"35",y2:"17.5"}}),a("line",{attrs:{transform:"rotate(-45 18 17.5)",x1:"1",y1:"17.5",x2:"35",y2:"17.5"}})])])])},s=[],r={render:i,staticRenderFns:s};e.a=r},ot0g:function(t,e,a){"use strict";function i(t){a("ZlDX")}Object.defineProperty(e,"__esModule",{value:!0});var s=a("Xuu/"),r=a("xnsK"),n=a("VU/8"),o=i,c=n(s.a,r.a,!1,o,"data-v-4a048bdd",null);e.default=c.exports},xnsK:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"cases-grid"},t._l(t.posts,function(t){return a("div",{key:t.id,staticClass:"case-wrapper"},[a("article-preview",{attrs:{post:t}})],1)})),a("close-modal")],1)},s=[],r={render:i,staticRenderFns:s};e.a=r},y9VV:function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,"[data-v-4a048bdd],[data-v-4a048bdd]:after,[data-v-4a048bdd]:before{box-sizing:border-box}.cases-grid[data-v-4a048bdd]{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-flow:row wrap;max-width:64rem;margin:0 auto}.case-wrapper[data-v-4a048bdd]{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;-webkit-box-align:stretch;align-items:stretch;-webkit-box-flex:1;flex:1 1 100%;margin-bottom:12px}@media (min-width:46.25em){.case-wrapper[data-v-4a048bdd]{-webkit-box-flex:0;flex:0 1 50%}}.case-wrapper .case[data-v-4a048bdd]{background:hsla(0,0%,100%,.1);display:-webkit-box;display:flex;-webkit-box-flex:1;flex:1 1 auto;padding:12px;-webkit-box-align:center;align-items:center;transition:background .2 ease}.case-wrapper .case[data-v-4a048bdd]:hover{background:hsla(0,0%,100%,.2)}.case-wrapper .article-wrapper[data-v-4a048bdd]{width:100%;padding:0}.case-wrapper img[data-v-4a048bdd]{width:100%}",""])}});
//# sourceMappingURL=index.0f44f9513a08767153be.js.map