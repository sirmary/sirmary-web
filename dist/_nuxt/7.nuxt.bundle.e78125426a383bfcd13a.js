webpackJsonp([7],{165:function(t,a,e){"use strict";function i(t){e(372)}Object.defineProperty(a,"__esModule",{value:!0});var n=e(374),o=e(375),s=e(17),r=i,A=s(n.a,o.a,r,"data-v-584a41ba",null);a.default=A.exports},181:function(t,a,e){"use strict";var i=e(182),n=e(183),o=e(17),s=o(i.a,n.a,null,null,null);a.a=s.exports},182:function(t,a,e){"use strict";a.a={props:{link:{default:"/chat",type:String}},data:function(){return{isSticky:!1,isArrow:!1}},mounted:function(){var t=this.$refs.closeButton,a=this.$data,e=this.$store;document.body.onscroll=function(){t.$el.parentElement.getBoundingClientRect().top<25?(a.isSticky=!0,e.state.isLogoBlurred=!0):(a.isSticky=!1,e.state.isLogoBlurred=!1)}}}},183:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("nuxt-link",{ref:"closeButton",staticClass:"close-modal",class:{sticky:t.isSticky,arrow:t.isArrow},attrs:{to:t.link}},[e("button",[e("svg",{attrs:{id:"close-btn",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 35"}},[e("line",{staticClass:"cls-1",attrs:{id:"x2",x1:"1",y1:"17.5",x2:"35",y2:"17.5"}}),e("line",{staticClass:"cls-1",attrs:{id:"wing1",x1:"1",y1:"17.5",x2:"18",y2:"17.5"}}),e("line",{staticClass:"cls-1",attrs:{id:"wing2","data-name":"wing1",x1:"1",y1:"17.5",x2:"18",y2:"17.5"}}),e("line",{staticClass:"cls-1",attrs:{id:"x1",x1:"1",y1:"17.5",x2:"35",y2:"17.5"}})])])])},n=[],o={render:i,staticRenderFns:n};a.a=o},296:function(t,a,e){"use strict";function i(t){e(297)}var n=e(299),o=e(300),s=e(17),r=i,A=s(n.a,o.a,r,"data-v-52ba4ba4",null);a.a=A.exports},297:function(t,a,e){var i=e(298);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e(19)("9d1354f8",i,!0)},298:function(t,a,e){a=t.exports=e(18)(!0),a.push([t.i,"[data-v-52ba4ba4],[data-v-52ba4ba4]:after,[data-v-52ba4ba4]:before{-webkit-box-sizing:border-box;box-sizing:border-box}.article[data-v-52ba4ba4]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-flow:column wrap;flex-flow:column wrap;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:space-between;-ms-flex-align:space-between;align-items:space-between;-ms-flex-line-pack:justify;align-content:space-between}.article .title-wrapper[data-v-52ba4ba4]{padding:12px}.article .title-wrapper p[data-v-52ba4ba4]{font-weight:700}.article h4[data-v-52ba4ba4]{text-indent:36px;font-weight:700;font-size:2.25rem;color:#fff;margin:0;margin-bottom:12px;line-height:1}.article p[data-v-52ba4ba4]{margin:0;margin-bottom:12px}@media (min-width:46.25em){.article .description[data-v-52ba4ba4]{min-height:2.25rem}}.article a[data-v-52ba4ba4]{color:#fff;text-decoration:none}.article img[data-v-52ba4ba4]{width:100%;margin:0 auto;-ms-flex-item-align:end;align-self:flex-end}","",{version:3,sources:["/Users/nunu/Sites/experiments/quickshot/components/article-preview.vue"],names:[],mappings:"AACA,mEAAsE,8BAA8B,qBAAqB,CACxH,AACD,0BAA0B,oBAAoB,oBAAoB,aAAa,4BAA4B,6BAA6B,0BAA0B,sBAAsB,yBAAyB,sBAAsB,8BAA8B,gCAAgC,6BAA6B,0BAA0B,2BAA2B,2BAA2B,CACjZ,AACD,yCAAyC,YAAY,CACpD,AACD,2CAA2C,eAAe,CACzD,AACD,6BAA6B,iBAAiB,gBAAgB,kBAAkB,WAAY,SAAS,mBAAmB,aAAa,CACpI,AACD,4BAA4B,SAAS,kBAAkB,CACtD,AACD,2BACA,uCAAuC,kBAAkB,CACxD,CACA,AACD,4BAA4B,WAAY,oBAAoB,CAC3D,AACD,8BAA8B,WAAW,cAAc,wBAAwB,mBAAmB,CACjG",file:"article-preview.vue",sourcesContent:["\n*[data-v-52ba4ba4],*[data-v-52ba4ba4]:before,*[data-v-52ba4ba4]:after{-webkit-box-sizing:border-box;box-sizing:border-box\n}\n.article[data-v-52ba4ba4]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-flow:column wrap;flex-flow:column wrap;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:space-between;-ms-flex-align:space-between;align-items:space-between;-ms-flex-line-pack:justify;align-content:space-between\n}\n.article .title-wrapper[data-v-52ba4ba4]{padding:12px\n}\n.article .title-wrapper p[data-v-52ba4ba4]{font-weight:700\n}\n.article h4[data-v-52ba4ba4]{text-indent:36px;font-weight:700;font-size:2.25rem;color:white;margin:0;margin-bottom:12px;line-height:1\n}\n.article p[data-v-52ba4ba4]{margin:0;margin-bottom:12px\n}\n@media (min-width: 46.25em){\n.article .description[data-v-52ba4ba4]{min-height:2.25rem\n}\n}\n.article a[data-v-52ba4ba4]{color:white;text-decoration:none\n}\n.article img[data-v-52ba4ba4]{width:100%;margin:0 auto;-ms-flex-item-align:end;align-self:flex-end\n}\n"],sourceRoot:""}])},299:function(t,a,e){"use strict";a.a={props:["post"]}},300:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"article"},[e("nuxt-link",{staticClass:"title",attrs:{to:{name:"cases-slug",params:{slug:t.post.fields.slug}}}},[e("div",{staticClass:"title-wrapper"},[e("h4",[t._v(t._s(t.post.fields.title))]),e("p",{staticClass:"description"},[t._v(t._s(t.post.fields.description))])]),e("img",{staticClass:"thumbnail",attrs:{src:t.post.fields.overviewThumbnail.fields.file.url+"?fit=scale&w=750&h=510"}})])],1)},n=[],o={render:i,staticRenderFns:n};a.a=o},372:function(t,a,e){var i=e(373);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e(19)("356e96be",i,!0)},373:function(t,a,e){a=t.exports=e(18)(!0),a.push([t.i,"[data-v-584a41ba],[data-v-584a41ba]:after,[data-v-584a41ba]:before{-webkit-box-sizing:border-box;box-sizing:border-box}.jobs-content[data-v-584a41ba]{max-width:40rem;margin:0 auto;padding-top:60px}.jobs-content img[data-v-584a41ba]{margin:0 auto;width:100%;padding:2.25rem}.copy[data-v-584a41ba]{font-size:1rem;line-height:1.375rem;font-weight:700}@media (min-width:46.25em){.copy[data-v-584a41ba]{font-size:1.3125rem;line-height:1.8125rem}}h1[data-v-584a41ba]{text-indent:2.25rem;padding:0 12px;margin-bottom:1.5rem;font-size:2.25rem}@media (min-width:46.25em){h1[data-v-584a41ba]{font-size:4rem}}.container[data-v-584a41ba]{padding:24px;padding-top:48px}.jobs-grid[data-v-584a41ba]{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-flow:column wrap;flex-flow:column wrap;max-width:56.25rem;margin:0 auto;font-weight:700;margin:2.25rem 0}.title-wrapper[data-v-584a41ba]{width:100%;max-width:56.25rem;margin:0 auto}@media (min-width:46.25em){.title-wrapper[data-v-584a41ba]{padding-right:12.5rem}}.job-item[data-v-584a41ba]{margin-bottom:6px;color:rgba(0,0,0,.7);font-family:LeviReBrushed;font-weight:400;font-size:2.25rem;line-height:1.2;margin-bottom:.75rem;text-align:center}.job-item p[data-v-584a41ba]{margin:1.5rem 0}.job-item[data-v-584a41ba]:hover{color:#000}","",{version:3,sources:["/Users/nunu/Sites/experiments/quickshot/pages/jobs/index.vue"],names:[],mappings:"AACA,mEAAsE,8BAA8B,qBAAqB,CACxH,AACD,+BAA+B,gBAAgB,cAAc,gBAAgB,CAC5E,AACD,mCAAmC,cAAc,WAAW,eAAe,CAC1E,AACD,uBAAuB,eAAe,qBAAqB,eAAe,CACzE,AACD,2BACA,uBAAuB,oBAAoB,qBAAqB,CAC/D,CACA,AACD,oBAAoB,oBAAoB,eAAe,qBAAqB,iBAAiB,CAC5F,AACD,2BACA,oBAAoB,cAAc,CACjC,CACA,AACD,4BAA4B,aAAa,gBAAgB,CACxD,AACD,4BAA4B,oBAAoB,oBAAoB,aAAa,WAAW,4BAA4B,6BAA6B,0BAA0B,sBAAsB,mBAAmB,cAAc,gBAAgB,gBAAgB,CACrQ,AACD,gCAAgC,WAAW,mBAAmB,aAAa,CAC1E,AACD,2BACA,gCAAgC,qBAAqB,CACpD,CACA,AACD,2BAA2B,kBAAkB,qBAAsB,0BAA4B,gBAAmB,kBAAkB,gBAAgB,qBAAqB,iBAAiB,CACzL,AACD,6BAA6B,eAAe,CAC3C,AACD,iCAAiC,UAAW,CAC3C",file:"index.vue",sourcesContent:["\n*[data-v-584a41ba],*[data-v-584a41ba]:before,*[data-v-584a41ba]:after{-webkit-box-sizing:border-box;box-sizing:border-box\n}\n.jobs-content[data-v-584a41ba]{max-width:40rem;margin:0 auto;padding-top:60px\n}\n.jobs-content img[data-v-584a41ba]{margin:0 auto;width:100%;padding:2.25rem\n}\n.copy[data-v-584a41ba]{font-size:1rem;line-height:1.375rem;font-weight:700\n}\n@media (min-width: 46.25em){\n.copy[data-v-584a41ba]{font-size:1.3125rem;line-height:1.8125rem\n}\n}\nh1[data-v-584a41ba]{text-indent:2.25rem;padding:0 12px;margin-bottom:1.5rem;font-size:2.25rem\n}\n@media (min-width: 46.25em){\nh1[data-v-584a41ba]{font-size:4rem\n}\n}\n.container[data-v-584a41ba]{padding:24px;padding-top:48px\n}\n.jobs-grid[data-v-584a41ba]{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-flow:column wrap;flex-flow:column wrap;max-width:56.25rem;margin:0 auto;font-weight:700;margin:2.25rem 0\n}\n.title-wrapper[data-v-584a41ba]{width:100%;max-width:56.25rem;margin:0 auto\n}\n@media (min-width: 46.25em){\n.title-wrapper[data-v-584a41ba]{padding-right:12.5rem\n}\n}\n.job-item[data-v-584a41ba]{margin-bottom:6px;color:rgba(0,0,0,0.7);font-family:'LeviReBrushed';font-weight:normal;font-size:2.25rem;line-height:1.2;margin-bottom:.75rem;text-align:center\n}\n.job-item p[data-v-584a41ba]{margin:1.5rem 0\n}\n.job-item[data-v-584a41ba]:hover{color:black\n}\n"],sourceRoot:""}])},374:function(t,a,e){"use strict";var i=e(72),n=(e.n(i),e(296)),o=e(181),s=Object(i.createClient)();a.a={asyncData:function(t){t.env,t.params;return s.getEntries({content_type:"job",order:"-sys.createdAt"}).then(function(t){return{jobs:t.items}})},methods:{changeView:function(){this.$emit("changeView","ChatWidget")}},components:{ArticlePreview:n.a,"close-modal":o.a},head:function(){return{style:[{cssText:":root { background: #926392 }",type:"text/css"}]}},beforeMount:function(){document.body.classList="jobs"}}},375:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("div",{staticClass:"jobs-content"},[e("h1",[t._v("Jobs")]),e("p",{staticClass:"copy"},[t._v("Wir suchen Sirs und Marys, die den digitalen Wandel mitgestalten wollen, statt nur darüber zu reden.")]),e("div",{staticClass:"jobs-grid"},t._l(t.jobs,function(a){return e("nuxt-link",{key:a.id,attrs:{to:{name:"jobs-slug",params:{slug:a.fields.slug}},job:a}},[e("div",{staticClass:"job-item"},[e("p",[t._v(t._s(a.fields.title))])])])})),t._m(0)]),e("close-modal")],1)},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("p",{staticClass:"copy"},[t._v("Nichts Passendes gefunden, aber wir sollten dich trotzdem kennenlernen? Dann schicke uns bitte deine\n"),e("a",{attrs:{href:"mailto:jobs@sirmary.com"}},[t._v("Initiativbewerbung")]),t._v(". Wir sind immer auf der Suche nach aussergewöhnlichen Talenten.")])}],o={render:i,staticRenderFns:n};a.a=o}});
//# sourceMappingURL=7.nuxt.bundle.e78125426a383bfcd13a.js.map