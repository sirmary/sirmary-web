webpackJsonp([11],{"120S":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"about-content"},[s("h1",{staticClass:"page-title"},[t._v(t._s(t.post.fields.claim))]),s("div",{staticClass:"copy",domProps:{innerHTML:t._s(t.marked(t.post.fields.body))}}),s("div",{staticClass:"features"},t._l(t.post.fields.featuresWidget,function(e,a){return s("div",{staticClass:"feature"},[s("div",{staticClass:"floating-number"},[t._v("0"+t._s(a+1))]),s("h3",{key:a,domProps:{innerHTML:t._s(e.feature)}}),s("ul",t._l(e.features,function(e){return s("li",[t._v(t._s(e))])}))])})),s("div",{staticClass:"footer",domProps:{innerHTML:t._s(t.marked(t.post.fields.footer))}}),s("p",{staticClass:"copyright"},[t._v("© "+t._s(t.year)+" Sir Mary AG, Switzerland")])]),s("close-modal")],1)},r=[],i={render:a,staticRenderFns:r};e.a=i},S2aS:function(t,e,s){"use strict";var a=s("mXwl"),r=s("n+rB"),i=s("K60R"),n=i(a.a,r.a,!1,null,null,null);e.a=n.exports},hSk2:function(t,e,s){"use strict";function a(t){s("otBp")}Object.defineProperty(e,"__esModule",{value:!0});var r=s("ojI4"),i=s("120S"),n=s("K60R"),o=a,l=n(r.a,i.a,!1,o,null,null);e.default=l.exports},mXwl:function(t,e,s){"use strict";e.a={props:{link:{default:"/chat",type:String}},data:function(){return{isSticky:!1,isArrow:!1}},mounted:function(){var t=this.$refs.closeButton,e=this.$data,s=this.$store;document.body.onscroll=function(){t.$el.parentElement.getBoundingClientRect().top<25?(e.isSticky=!0,s.state.isLogoBlurred=!0):(e.isSticky=!1,s.state.isLogoBlurred=!1)}},updated:function(){this.isArrow=this.$store.state.isArrow}}},"n+rB":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nuxt-link",{ref:"closeButton",staticClass:"close-modal",class:{sticky:t.isSticky},attrs:{to:t.link}},[s("button",{directives:[{name:"show",rawName:"v-show",value:t.$store.state.isArrow,expression:"$store.state.isArrow"}],staticClass:"arrow"},[s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 35"}},[s("line",{staticClass:"st0",attrs:{x1:"1",y1:"17.5",x2:"35",y2:"17.5"}}),s("line",{staticClass:"st0",attrs:{x1:"1",y1:"17.5",x2:"13",y2:"5.5"}}),s("line",{staticClass:"st0",attrs:{x1:"1",y1:"17.8",x2:"13",y2:"29.8"}})])]),s("button",{directives:[{name:"show",rawName:"v-show",value:!t.$store.state.isArrow,expression:"!$store.state.isArrow"}],staticClass:"close"},[s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 35"}},[s("style",{attrs:{type:"text/css"}}),s("line",{attrs:{transform:"rotate(45 18 17.5)",x1:"1",y1:"17.5",x2:"35",y2:"17.5"}}),s("line",{attrs:{transform:"rotate(-45 18 17.5)",x1:"1",y1:"17.5",x2:"35",y2:"17.5"}})])])])},r=[],i={render:a,staticRenderFns:r};e.a=i},"oDP/":function(t,e,s){e=t.exports=s("FZ+f")(!1),e.push([t.i,"*,:after,:before{box-sizing:border-box}.about-content{max-width:40rem;margin:0 auto;padding-top:60px}.about-content img{margin:0 auto;width:100%;padding:2.25rem}.copy,.copyright,.features,.footer{font-size:1rem;line-height:1.375rem;font-weight:700}@media (min-width:46.25em){.copy,.copyright,.features,.footer{font-size:1.3125rem;line-height:1.8125rem}}.copy p:first-child{text-indent:2.25rem}.copyright{text-indent:0;margin-bottom:3.75rem;margin-top:7.5rem}.features{color:#000;text-align:center;text-indent:0;font-family:LeviReBrushed;text-transform:uppercase;max-width:30rem;margin:0 auto;margin-top:3.75rem;margin-bottom:3.75rem}.features .floating-number{color:#fff;font-family:Roboto,-apple-system,BlinkMacSystemFont,Segoe UI,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;font-weight:700;font-size:2.25rem;position:absolute;top:-20px;z-index:-1;left:20%}.features .feature{position:relative;cursor:pointer}.features .feature:nth-child(2) .floating-number{left:75%;top:30px}.features .feature:nth-child(3) .floating-number{left:30%;top:100px}.features .feature:active ul,.features .feature:hover ul{height:auto}.features .feature:active li,.features .feature:hover li{-webkit-transform:scaleY(1);transform:scaleY(1);opacity:1}.features h3{font-weight:400;font-size:3rem;line-height:1.2;margin-bottom:1.5rem}.features ul{padding:0;margin:0;list-style:none}@media (min-width:61.25em){.features ul{height:0}}.features ul li{transition:all .5s ease;font-weight:400}@media (min-width:61.25em){.features ul li{opacity:0;-webkit-transform:scaleY(0);transform:scaleY(0)}}.footer{text-align:left}.footer p{text-indent:0}h1{text-indent:2.25rem;padding:0 12px;margin-bottom:1.5rem;font-size:2.25rem}@media (min-width:46.25em){h1{font-size:4rem}}.about-enter-active,.about-leave-active{transition:all .6s ease-in-out;margin-top:0;opacity:1}.about-enter,.about-leave-active{margin-top:100vh;opacity:0}",""])},ojI4:function(t,e,s){"use strict";var a=s("EFqf"),r=(s.n(a),s("fQ5t")),i=(s.n(r),s("S2aS")),n=Object(r.createClient)(),o=(new Date).getFullYear();e.a={transition:"about",components:{"close-modal":i.a,marked:a.marked},asyncData:function(t){var e=t.env;t.params;return n.getEntries({content_type:"specialPage","sys.id":e.CTF_ABOUT_TYPE_ID}).then(function(t){return{post:t.items[0]}})},data:function(){return{leave:!1,year:o}},head:function(){return{title:"About Sir Mary",style:[{cssText:":root { background: #787709 }",type:"text/css"}],meta:[{hid:"description",name:"description",content:"My custom description"}]}},mounted:function(){!navigator.userAgent.match(/Trident/g)&&!navigator.userAgent.match(/MSIE/g)&&!navigator.userAgent.match(/Edge/g)?document.body.classList="about":document.body.setAttribute("class","about")}}},otBp:function(t,e,s){var a=s("oDP/");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);s("rjj0")("27ed2f9f",a,!0)}});
//# sourceMappingURL=about.1901cb260cf2a58503d3.js.map