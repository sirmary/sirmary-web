webpackJsonp([9],{"2o18":function(t,e,a){var i=a("xwJc");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("c410a3dc",i,!0)},"4DnB":function(t,e,a){"use strict";var i=a("fQ5t"),s=(a.n(i),a("Fb5d")),r=a("S2aS"),n=Object(i.createClient)();e.a={asyncData:function(t){var e=t.env,a=t.params;return n.getEntries({content_type:e.CTF_BLOG_POST_TYPE_ID,"fields.client.sys.contentType.sys.id":e.CTF_CLIENT_TYPE_ID,"fields.client.fields.slug[all]":a.client}).then(function(t){return console.log(t),{filt:t.items,client:t.items[0].fields.client.fields.title}})},components:{ArticlePreview:s.a,"close-modal":r.a},head:function(){return{title:"SiR MaRY - "+this.client,style:[{cssText:":root { background: #CB754A }",type:"text/css"}],meta:[{hid:"description",name:"description",content:"Details, client: "+this.client}]}},beforeMount:function(){document.body.classList="client detailView"}}},"4X+L":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nuxt-link",{ref:"closeButton",staticClass:"close-modal",class:{sticky:t.isSticky},attrs:{to:t.link}},[a("button",{directives:[{name:"show",rawName:"v-show",value:t.$store.state.isArrow,expression:"$store.state.isArrow"}],staticClass:"arrow"},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 35"}},[a("line",{staticClass:"st0",attrs:{x1:"1",y1:"17.5",x2:"35",y2:"17.5"}}),a("line",{staticClass:"st0",attrs:{x1:"1",y1:"17.5",x2:"13",y2:"5.5"}}),a("line",{staticClass:"st0",attrs:{x1:"1",y1:"17.8",x2:"13",y2:"29.8"}})])]),a("button",{directives:[{name:"show",rawName:"v-show",value:!t.$store.state.isArrow,expression:"!$store.state.isArrow"}],staticClass:"close"},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 35"}},[a("style",{attrs:{type:"text/css"}}),a("line",{attrs:{transform:"rotate(45 18 17.5)",x1:"1",y1:"17.5",x2:"35",y2:"17.5"}}),a("line",{attrs:{transform:"rotate(-45 18 17.5)",x1:"1",y1:"17.5",x2:"35",y2:"17.5"}})])])])},s=[],r={render:i,staticRenderFns:s};e.a=r},Fb5d:function(t,e,a){"use strict";function i(t){a("SBaH")}var s=a("jdQJ"),r=a("Ke3H"),n=a("VU/8"),o=i,l=n(s.a,r.a,o,"data-v-3e9db9f7",null);e.a=l.exports},Ke3H:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"article-wrapper"},[a("div",{staticClass:"article"},[a("nuxt-link",{staticClass:"title",attrs:{to:{name:"cases-slug",params:{slug:t.post.fields.slug}}}},[a("div",{staticClass:"title-wrapper"},[a("h4",[t._v(t._s(t.post.fields.title))]),a("p",{staticClass:"description"},[t._v(t._s(t.post.fields.description))])]),a("img",{staticClass:"thumbnail",attrs:{src:t.post.fields.overviewThumbnail.fields.file.url+"?fit=scale&w=750&h=450&fm=jpg&q=60&fl=progressive"}})])],1)])},s=[],r={render:i,staticRenderFns:s};e.a=r},NIbX:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("section",{staticClass:"body-container"},[a("div",{staticClass:"cases-grid"}),t._l(t.filt,function(t){return a("div",{key:t.id,staticClass:"case-wrapper"},[a("article-preview",{attrs:{post:t}})],1)})],2),a("close-modal",{attrs:{link:"/clients"}})],1)},s=[],r={render:i,staticRenderFns:s};e.a=r},S2aS:function(t,e,a){"use strict";var i=a("VzL9"),s=a("4X+L"),r=a("VU/8"),n=r(i.a,s.a,null,null,null);e.a=n.exports},SBaH:function(t,e,a){var i=a("Vkez");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("41c49498",i,!0)},Vkez:function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,"[data-v-3e9db9f7],[data-v-3e9db9f7]:after,[data-v-3e9db9f7]:before{box-sizing:border-box}.article-wrapper[data-v-3e9db9f7]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-flow:column wrap;-webkit-box-pack:justify;justify-content:space-between;-webkit-box-align:space-between;align-items:space-between;align-content:space-between}@media (min-width:46.25em){.article-wrapper .article[data-v-3e9db9f7]{padding:.8rem}}.article-wrapper .title-wrapper[data-v-3e9db9f7]{padding:12px}.article-wrapper .title-wrapper p[data-v-3e9db9f7]{font-weight:700}.article-wrapper h4[data-v-3e9db9f7]{text-indent:36px;font-weight:700;font-size:2.25rem;color:#fff;margin:0;margin-bottom:12px;line-height:1}.article-wrapper p[data-v-3e9db9f7]{margin:0;margin-bottom:12px}@media (min-width:46.25em){.article-wrapper .description[data-v-3e9db9f7]{min-height:2.25rem}}.article-wrapper a[data-v-3e9db9f7]{color:#fff;text-decoration:none}.article-wrapper img[data-v-3e9db9f7]{width:100%;margin:0 auto;align-self:flex-end}",""])},VzL9:function(t,e,a){"use strict";e.a={props:{link:{default:"/chat",type:String}},data:function(){return{isSticky:!1,isArrow:!1}},mounted:function(){var t=this.$refs.closeButton,e=this.$data,a=this.$store;document.body.onscroll=function(){t.$el.parentElement.getBoundingClientRect().top<25?(e.isSticky=!0,a.state.isLogoBlurred=!0):(e.isSticky=!1,a.state.isLogoBlurred=!1)}},updated:function(){this.isArrow=this.$store.state.isArrow}}},jdQJ:function(t,e,a){"use strict";e.a={props:["post"]}},uWUF:function(t,e,a){"use strict";function i(t){a("2o18")}Object.defineProperty(e,"__esModule",{value:!0});var s=a("4DnB"),r=a("NIbX"),n=a("VU/8"),o=i,l=n(s.a,r.a,o,"data-v-3b521f69",null);e.default=l.exports},xwJc:function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,"[data-v-3b521f69],[data-v-3b521f69]:after,[data-v-3b521f69]:before{box-sizing:border-box}.container[data-v-3b521f69]{padding-top:100px;max-width:60rem;margin:0 auto}.cases-grid[data-v-3b521f69]{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-flow:row wrap}.case-wrapper[data-v-3b521f69]{padding:0;display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;-webkit-box-align:stretch;align-items:stretch;-webkit-box-flex:1;flex:1 1 100%;margin-bottom:12px}@media (min-width:46.25em){.case-wrapper[data-v-3b521f69]{-webkit-box-flex:1;flex:1 1 50%;padding:12px}}.case-wrapper .case[data-v-3b521f69]{background:hsla(0,0%,100%,.1);display:-webkit-box;display:flex;-webkit-box-flex:1;flex:1 1 auto;padding:12px;-webkit-box-align:center;align-items:center;transition:background .2 ease}.case-wrapper .case[data-v-3b521f69]:hover{background:hsla(0,0%,100%,.2)}",""])}});
//# sourceMappingURL=_client.29f87d0ceb047dc1edeb.js.map