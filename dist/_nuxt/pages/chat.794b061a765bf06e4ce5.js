webpackJsonp([6],{"/XOj":function(e,t,s){"use strict";var i=s("BO1k"),a=s.n(i),n=s("vdRI"),r=s("mtWM"),o=s.n(r),c=s("q8+K"),u=s("eRDl"),l=s("GmEM"),h=Object(u.a)(Object(n.default)().state.keyData);t.a={components:{"vue-awesomplete":l.a},data:function(){return{route:"",inputValue:"",santaClient:this.$store.state.santaClient,blurred:!1,isHuman:!0,santaShuffle:this.$store.state.santaShuffle,amazonLink:this.$store.state.amazonLink,config:{headers:{Authorization:"bearer 6cf48f0dd9d347a88a67e0f66a9302a5"}},messages:this.$store.state.messages,helpQuestions:[],autoComps:{list:[]},setting:{list:[],minChars:2,maxItems:7,filter:function(e,t){var s=["Wer oder was ist SiR MaRY?","Welche Kunden betreut SiR MaRY?","Kann ich bei SiR MaRY arbeiten?","Wie kontaktiere ich SiR MaRY?"];return t.length<1?s.indexOf(e.label)>-1:h.performSentenceLogic(e,t)},item:function(e,t){var s=t.trim().split(" "),i="("+s.join("|")+")";e=e.replace(RegExp(i,"gi"),"<mark>$&</mark>");var a=document.createElement("li");return a.innerHTML=e,a}},messagesScrolltop:0}},computed:{cleanMsg:function(){return c.a.clean(this.inputValue)}},methods:{handleAwesomOpen:function(){this.blurred=!0},handleAwesomClose:function(){this.blurred=!1},trackEvent:function(e){var t=window.ga;"function"==typeof t&&t("send",{hitType:"event",eventCategory:"keyword-input",eventAction:"user-entered-keyword",eventLabel:e})},getHelp:function(){this.$refs.awesomeInput.awesomplete.isHelpClicked=!0,this.$refs.awesomeInput.awesomplete.minChars=0,this.$refs.awesomeInput.awesomplete.input.focus(),this.$refs.awesomeInput.awesomplete.evaluate()},dehumanize:function(){this.isHuman=!1},humanize:function(){this.isHuman=!0},updateValue:function(e){this.inputValue=e,this.$refs.awesomeInput.awesomplete.isHelpClicked=!1},updateClickedValue:function(e){this.inputValue=e},blurInputMobile:function(){window.innerWidth<500&&this.$refs.awesomeInput.$el.blur()},track_load:function(e,t){var s=escape(screen.width).substring(0,6),i=escape(screen.height).substring(0,6),a=escape(document.referrer).substring(0,1100),n=escape(t).substring(0,200);n=n.replace(/u00a0/g,""),n=n.replace(/u2122/g,""),n=n.replace(/u[0-9][0-9][0-9][0-9]/g,"");var r=escape(e).substring(0,200),o=escape(navigator.appName).substring(0,100),c=window.navigator.userLanguage||window.navigator.language,u=escape(navigator.userAgent+".lfcd"+screen.colorDepth+".lflng"+c).substring(0,1e3),l=escape(document.domain).substring(0,200),h="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)}),f="https://secure.leadforensics.com/Track/Capture.aspx?trk_user=89514&trk_sw="+s+"&trk_sh="+i+"&trk_ref="+a+"&trk_tit="+n+"&trk_loc="+r+"&trk_agn="+o+"&trk_agv="+u+"&trk_dom="+l+"&trk_guid="+h+"&trk_cookie=NA";(new Image).src=f},sendMsg:function(){var e=this.messages,t=this.$router,s=this.inputValue,i=this.cleanMsg,a=this;a.scrollToEnd(),e.push({who:"me",text:i}),a.trackEvent(s),a.track_load("chat-query",s),o.a.post("https://api.api.ai/v1/query?v=20150910",{query:s,lang:"en",sessionId:"69696969"},this.config).then(function(s){a.scrollToEnd();var i=s.data.result.fulfillment.speech;if(setTimeout(function(){e.pop(),e.push({who:"bot new",text:i})},1e3),"input.unknown"!==s.data.result.action){if(s.data.result.parameters.santaClient){var n=s.data.result.parameters.santaClient,r=s.data.result.parameters.clientName,o=s.data.result.parameters.wishlist;return a.$store.state.santaClient=n,a.$store.state.clientName=r,a.$store.state.amazonLink=o,void t.push("santa")}t.push(s.data.result.action)}setTimeout(function(){document.querySelector("ul").lastChild.classList.remove("new")},3e3)}).catch(function(t){console.log(t),e.pop(),e.push({who:"bot error",text:"oops. I didn't quite get that..."})}),e.push({who:"bottemp waiting",text:'<div class="typing-container"><span class="circle"></span><span class="circle"></span><span class="circle"></span></div>'}),this.scrollToEnd(),this.blurInputMobile()},checkMsg:function(){console.log("input: "+this.inputValue),!0===this.isHuman&&this.inputValue&&this.sendMsg(),this.humanize()},handleMsgClick:function(e){e.target.dataset.link&&this.$router.push(e.target.dataset.link)},selectOne:function(e){this.dehumanize(),this.updateClickedValue(e),this.sendMsg(),this.$refs.awesomeInput.awesomplete.isHelpClicked=!1,this.$refs.awesomeInput.awesomplete.minChars=2},scrollToEnd:function(){var e=this.$refs.messages.scrollHeight;this.$refs.messageBox.scrollTop=e+100},handleClick:function(e,t){var s=e.target.dataset.link;this.$router.push(s)}},head:function(){return{style:[{cssText:":root { background: #157C78}",type:"text/css"}]}},mounted:function(){this.$store.state.logoColor="black";var e=!0,t=!1,s=void 0;try{for(var i,n=a()(this.$store.state.keyData);!(e=(i=n.next()).done);e=!0){var r=i.value;this.setting.list.push(r.q),1===r.o&&this.helpQuestions.push(r.q)}}catch(e){t=!0,s=e}finally{try{!e&&n.return&&n.return()}finally{if(t)throw s}}var o=this;setTimeout(function(){o.scrollToEnd()},500)},updated:function(){var e=this.$refs.messageBox.clientHeight;this.$refs.messages.clientHeight>=e&&(this.$refs.messages.style.height="100%"),this.scrollToEnd()}}},"8qEm":function(e,t){e.exports=/\b(4r5e|5h1t|5hit|a55|anal|anus|ar5e|arrse|arse|ass|ass-fucker|asses|assfucker|assfukka|asshole|assholes|asswhole|a_s_s|b!tch|b00bs|b17ch|b1tch|ballbag|balls|ballsack|bastard|beastial|beastiality|bellend|bestial|bestiality|bi\+ch|biatch|bitch|bitcher|bitchers|bitches|bitchin|bitching|bloody|blow job|blowjob|blowjobs|boiolas|bollock|bollok|boner|boob|boobs|booobs|boooobs|booooobs|booooooobs|breasts|buceta|bugger|bum|bunny fucker|butt|butthole|buttmuch|buttplug|c0ck|c0cksucker|carpet muncher|cawk|chink|cipa|cl1t|clit|clitoris|clits|cnut|cock|cock-sucker|cockface|cockhead|cockmunch|cockmuncher|cocks|cocksuck|cocksucked|cocksucker|cocksucking|cocksucks|cocksuka|cocksukka|cok|cokmuncher|coksucka|coon|cox|crap|cum|cummer|cumming|cums|cumshot|cunilingus|cunillingus|cunnilingus|cunt|cuntlick|cuntlicker|cuntlicking|cunts|cyalis|cyberfuc|cyberfuck|cyberfucked|cyberfucker|cyberfuckers|cyberfucking|d1ck|damn|dick|dickhead|dildo|dildos|dink|dinks|dirsa|dlck|dog-fucker|doggin|dogging|donkeyribber|doosh|duche|dyke|ejaculate|ejaculated|ejaculates|ejaculating|ejaculatings|ejaculation|ejakulate|f u c k|f u c k e r|f4nny|fag|fagging|faggitt|faggot|faggs|fagot|fagots|fags|fanny|fannyflaps|fannyfucker|fanyy|fatass|fcuk|fcuker|fcuking|feck|fecker|felching|fellate|fellatio|fingerfuck|fingerfucked|fingerfucker|fingerfuckers|fingerfucking|fingerfucks|fistfuck|fistfucked|fistfucker|fistfuckers|fistfucking|fistfuckings|fistfucks|flange|fook|fooker|fuck|fucka|fucked|fucker|fuckers|fuckhead|fuckheads|fuckin|fucking|fuckings|fuckingshitmotherfucker|fuckme|fucks|fuckwhit|fuckwit|fudge packer|fudgepacker|fuk|fuker|fukker|fukkin|fuks|fukwhit|fukwit|fux|fux0r|f_u_c_k|gangbang|gangbanged|gangbangs|gaylord|gaysex|goatse|God|god-dam|god-damned|goddamn|goddamned|hardcoresex|hell|heshe|hoar|hoare|hoer|homo|hore|horniest|horny|hotsex|jack-off|jackoff|jap|jerk-off|jism|jiz|jizm|jizz|kawk|knob|knobead|knobed|knobend|knobhead|knobjocky|knobjokey|kock|kondum|kondums|kum|kummer|kumming|kums|kunilingus|l3i\+ch|l3itch|labia|lust|lusting|m0f0|m0fo|m45terbate|ma5terb8|ma5terbate|masochist|master-bate|masterb8|masterbat*|masterbat3|masterbate|masterbation|masterbations|masturbate|mo-fo|mof0|mofo|mothafuck|mothafucka|mothafuckas|mothafuckaz|mothafucked|mothafucker|mothafuckers|mothafuckin|mothafucking|mothafuckings|mothafucks|mother fucker|motherfuck|motherfucked|motherfucker|motherfuckers|motherfuckin|motherfucking|motherfuckings|motherfuckka|motherfucks|muff|mutha|muthafecker|muthafuckker|muther|mutherfucker|n1gga|n1gger|nazi|nigg3r|nigg4h|nigga|niggah|niggas|niggaz|nigger|niggers|nob|nob jokey|nobhead|nobjocky|nobjokey|numbnuts|nutsack|orgasim|orgasims|orgasm|orgasms|p0rn|pawn|pecker|penis|penisfucker|phonesex|phuck|phuk|phuked|phuking|phukked|phukking|phuks|phuq|pigfucker|pimpis|piss|pissed|pisser|pissers|pisses|pissflaps|pissin|pissing|pissoff|poop|porn|porno|pornography|pornos|prick|pricks|pron|pube|pusse|pussi|pussies|pussy|pussys|rectum|retard|rimjaw|rimming|s hit|s.o.b.|sadist|schlong|screwing|scroat|scrote|scrotum|semen|sex|sh!\+|sh!t|sh1t|shag|shagger|shaggin|shagging|shemale|shi\+|shit|shitdick|shite|shited|shitey|shitfuck|shitfull|shithead|shiting|shitings|shits|shitted|shitter|shitters|shitting|shittings|shitty|skank|slut|sluts|smegma|smut|snatch|son-of-a-bitch|spac|spunk|s_h_i_t|t1tt1e5|t1tties|teets|teez|testical|testicle|tit|titfuck|tits|titt|tittie5|tittiefucker|titties|tittyfuck|tittywank|titwank|tosser|turd|tw4t|twat|twathead|twatty|twunt|twunter|v14gra|v1gra|vagina|viagra|vulva|w00se|wang|wank|wanker|wanky|whoar|whore|willies|willy|xrated|xxx)\b/gi},BCbh:function(e,t,s){"use strict";var i=s("S6+x"),a=s.n(i);t.a={props:{ajax:{type:Object,default:function(){return{callback:function(){},method:"GET",url:null}}},setting:{type:Object,default:function(e,t){return{label:e.q,value:e.id}}},value:String},data:function(){return{awesomplete:null,internalValue:null}},methods:{close:function(){this.awesomplete.close()},destroy:function(){this.awesomplete.destroy()},evaluate:function(){this.awesomplete.evaluate()},goto:function(e){this.awesomplete.goto(e)},list:function(e){this.awesomplete.list=e},next:function(){this.awesomplete.next()},open:function(){this.awesomplete.open()},previous:function(){this.awesomplete.previous()},select:function(){this.awesomplete.select()},test:function(){this.$emit("selectcomplete")},enterPressed:function(){-1===this.awesomplete.index&&(this.$emit("enterPressed"),this.internalValue="",this.close())}},mounted:function(){var e=this,t=this,s=this.$el;if(this.ajax.url){void 0===this.ajax.method&&(this.ajax.method="GET");var i=new XMLHttpRequest;i.open(this.ajax.method,this.ajax.url,!0),i.onload=function(){var e=JSON.parse(i.responseText),n=t.ajax.callback(e);t.setting.list=n,t.awesomplete=new a.a(s,t.setting)},i.send()}else this.awesomplete=new a.a(s,this.setting);s.addEventListener("awesomplete-select",function(){e.$emit("select")}),s.addEventListener("awesomplete-selectcomplete",function(){t.internalValue=s.value,e.$emit("selectcomplete",s.value,!1),e.internalValue=""}),s.addEventListener("awesomplete-open",function(){e.$emit("open")}),s.addEventListener("awesomplete-close",function(){e.$emit("close")}),s.addEventListener("awesomplete-highlight",function(){e.$emit("highlight")})},watch:{internalValue:function(){this.$emit("input",this.internalValue)}},created:function(){this.internalValue=this.value}}},EWfh:function(e,t){e.exports=["4r5e","5h1t","5hit","a55","anal","anus","ar5e","arrse","arse","ass","ass-fucker","asses","assfucker","assfukka","asshole","assholes","asswhole","a_s_s","b!tch","b00bs","b17ch","b1tch","ballbag","balls","ballsack","bastard","beastial","beastiality","bellend","bestial","bestiality","bi+ch","biatch","bitch","bitcher","bitchers","bitches","bitchin","bitching","bloody","blow job","blowjob","blowjobs","boiolas","bollock","bollok","boner","boob","boobs","booobs","boooobs","booooobs","booooooobs","breasts","buceta","bugger","bum","bunny fucker","butt","butthole","buttmuch","buttplug","c0ck","c0cksucker","carpet muncher","cawk","chink","cipa","cl1t","clit","clitoris","clits","cnut","cock","cock-sucker","cockface","cockhead","cockmunch","cockmuncher","cocks","cocksuck","cocksucked","cocksucker","cocksucking","cocksucks","cocksuka","cocksukka","cok","cokmuncher","coksucka","coon","cox","crap","cum","cummer","cumming","cums","cumshot","cunilingus","cunillingus","cunnilingus","cunt","cuntlick","cuntlicker","cuntlicking","cunts","cyalis","cyberfuc","cyberfuck","cyberfucked","cyberfucker","cyberfuckers","cyberfucking","d1ck","damn","dick","dickhead","dildo","dildos","dink","dinks","dirsa","dlck","dog-fucker","doggin","dogging","donkeyribber","doosh","duche","dyke","ejaculate","ejaculated","ejaculates","ejaculating","ejaculatings","ejaculation","ejakulate","f u c k","f u c k e r","f4nny","fag","fagging","faggitt","faggot","faggs","fagot","fagots","fags","fanny","fannyflaps","fannyfucker","fanyy","fatass","fcuk","fcuker","fcuking","feck","fecker","felching","fellate","fellatio","fingerfuck","fingerfucked","fingerfucker","fingerfuckers","fingerfucking","fingerfucks","fistfuck","fistfucked","fistfucker","fistfuckers","fistfucking","fistfuckings","fistfucks","flange","fook","fooker","fuck","fucka","fucked","fucker","fuckers","fuckhead","fuckheads","fuckin","fucking","fuckings","fuckingshitmotherfucker","fuckme","fucks","fuckwhit","fuckwit","fudge packer","fudgepacker","fuk","fuker","fukker","fukkin","fuks","fukwhit","fukwit","fux","fux0r","f_u_c_k","gangbang","gangbanged","gangbangs","gaylord","gaysex","goatse","God","god-dam","god-damned","goddamn","goddamned","hardcoresex","hell","heshe","hoar","hoare","hoer","homo","hore","horniest","horny","hotsex","jack-off","jackoff","jap","jerk-off","jism","jiz","jizm","jizz","kawk","knob","knobead","knobed","knobend","knobhead","knobjocky","knobjokey","kock","kondum","kondums","kum","kummer","kumming","kums","kunilingus","l3i+ch","l3itch","labia","lust","lusting","m0f0","m0fo","m45terbate","ma5terb8","ma5terbate","masochist","master-bate","masterb8","masterbat*","masterbat3","masterbate","masterbation","masterbations","masturbate","mo-fo","mof0","mofo","mothafuck","mothafucka","mothafuckas","mothafuckaz","mothafucked","mothafucker","mothafuckers","mothafuckin","mothafucking","mothafuckings","mothafucks","mother fucker","motherfuck","motherfucked","motherfucker","motherfuckers","motherfuckin","motherfucking","motherfuckings","motherfuckka","motherfucks","muff","mutha","muthafecker","muthafuckker","muther","mutherfucker","n1gga","n1gger","nazi","nigg3r","nigg4h","nigga","niggah","niggas","niggaz","nigger","niggers","nob","nob jokey","nobhead","nobjocky","nobjokey","numbnuts","nutsack","orgasim","orgasims","orgasm","orgasms","p0rn","pawn","pecker","penis","penisfucker","phonesex","phuck","phuk","phuked","phuking","phukked","phukking","phuks","phuq","pigfucker","pimpis","piss","pissed","pisser","pissers","pisses","pissflaps","pissin","pissing","pissoff","poop","porn","porno","pornography","pornos","prick","pricks","pron","pube","pusse","pussi","pussies","pussy","pussys","rectum","retard","rimjaw","rimming","s hit","s.o.b.","sadist","schlong","screwing","scroat","scrote","scrotum","semen","sex","sh!+","sh!t","sh1t","shag","shagger","shaggin","shagging","shemale","shi+","shit","shitdick","shite","shited","shitey","shitfuck","shitfull","shithead","shiting","shitings","shits","shitted","shitter","shitters","shitting","shittings","shitty","skank","slut","sluts","smegma","smut","snatch","son-of-a-bitch","spac","spunk","s_h_i_t","t1tt1e5","t1tties","teets","teez","testical","testicle","tit","titfuck","tits","titt","tittie5","tittiefucker","titties","tittyfuck","tittywank","titwank","tosser","turd","tw4t","twat","twathead","twatty","twunt","twunter","v14gra","v1gra","vagina","viagra","vulva","w00se","wang","wank","wanker","wanky","whoar","whore","willies","willy","xrated","xxx"]},FGYp:function(e,t,s){"use strict";function i(e){s("Gxos")}Object.defineProperty(t,"__esModule",{value:!0});var a=s("/XOj"),n=s("YqMf"),r=s("VU/8"),o=i,c=r(a.a,n.a,!1,o,"data-v-223b642b",null);t.default=c.exports},GmEM:function(e,t,s){"use strict";var i=s("BCbh"),a=s("hZAW"),n=s("VU/8"),r=n(i.a,a.a,!1,null,null,null);t.a=r.exports},Gxos:function(e,t,s){var i=s("fWpo");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);s("rjj0")("541f7dfb",i,!0)},"L/IX":function(e,t,s){var i=s("fUR1").words,a=s("nZpe").array,n=function(){function e(e){e=e||{},this.list=e.emptyList&&[]||Array.prototype.concat.apply(i,[a,e.list||[]]),this.exclude=e.exclude||[],this.placeHolder=e.placeHolder||"*",this.regex=e.regex||/[^a-zA-z0-9|\$|\@]|\^/g,this.replaceRegex=e.replaceRegex||/\w/g}return e.prototype.isProfane=function(e){return e.split(" ").map(function(e){return e.toLowerCase().replace(this.regex,"")},this).filter(this.isProfaneLike,this).shift()||!1},e.prototype.isProfaneLike=function(e){return!~this.exclude.indexOf(e)&&(!!~this.list.indexOf(e)||this.list.map(function(e){return new RegExp(e.replace(/(\W)/g,"\\$1"),"gi")},this).reduce(function(t,s){return!!s.test(e)||t},!1))},e.prototype.replaceWord=function(e){return e.replace(this.regex,"").replace(this.replaceRegex,this.placeHolder)},e.prototype.clean=function(e){return e.split(/\b/).map(function(e){return this.isProfane(e)?this.replaceWord(e):e}.bind(this)).join("")},e.prototype.addWords=function(e){e=e instanceof Array?e:[e],this.list=this.list.concat(e),e.forEach(function(e){~this.exclude.indexOf(e)&&this.exclude.splice(this.exclude.indexOf(e),1)},this)},e.prototype.removeWords=function(){var e=Array.prototype.slice.call(arguments);this.exclude.push.apply(this.exclude,e)},e}();e.exports=n},"S6+x":function(e,t){!function(){function t(e){var t=Array.isArray(e)?{label:e[0],value:e[1]}:"object"==typeof e&&"label"in e&&"value"in e?e:{label:e,value:e};this.label=t.label||t.value,this.value=t.value}function s(e,t,s){for(var i in t){var a=t[i],n=e.input.getAttribute("data-"+i.toLowerCase());"number"==typeof a?e[i]=parseInt(n):!1===a?e[i]=null!==n:a instanceof Function?e[i]=null:e[i]=n,e[i]||0===e[i]||(e[i]=i in s?s[i]:a)}}function i(e,t){return"string"==typeof e?(t||document).querySelector(e):e||null}function a(e,t){return o.call((t||document).querySelectorAll(e))}function n(){a("input.awesomplete").forEach(function(e){new r(e)})}var r=function(e,t){var a=this;this.isOpened=!1,this.input=i(e),this.input.setAttribute("autocomplete","off"),this.input.setAttribute("aria-autocomplete","list"),t=t||{},s(this,{minChars:2,maxItems:10,autoFirst:!1,data:r.DATA,filter:r.FILTER_CONTAINS,sort:!1!==t.sort&&r.SORT_BYLENGTH,item:r.ITEM,replace:r.REPLACE},t),this.index=-1,this.container=i.create("div",{className:"awesomplete",around:e}),this.ul=i.create("ul",{hidden:"hidden",inside:this.container}),this.status=i.create("span",{className:"visually-hidden",role:"status","aria-live":"assertive","aria-relevant":"additions",inside:this.container}),this._events={input:{input:this.evaluate.bind(this),blur:this.close.bind(this,{reason:"blur"}),keydown:function(e){var t=e.keyCode;a.opened&&(13===t&&a.selected?(e.preventDefault(),a.select()):27===t?a.close({reason:"esc"}):38!==t&&40!==t||(e.preventDefault(),a[38===t?"previous":"next"]()))}},form:{submit:this.close.bind(this,{reason:"submit"})},ul:{mousedown:function(e){var t=e.target;if(t!==this){for(;t&&!/li/i.test(t.nodeName);)t=t.parentNode;t&&0===e.button&&(e.preventDefault(),a.select(t,e.target))}}}},i.bind(this.input,this._events.input),i.bind(this.input.form,this._events.form),i.bind(this.ul,this._events.ul),this.input.hasAttribute("list")?(this.list="#"+this.input.getAttribute("list"),this.input.removeAttribute("list")):this.list=this.input.getAttribute("data-list")||t.list||[],r.all.push(this)};r.prototype={set list(e){if(Array.isArray(e))this._list=e;else if("string"==typeof e&&e.indexOf(",")>-1)this._list=e.split(/\s*,\s*/);else if((e=i(e))&&e.children){var t=[];o.apply(e.children).forEach(function(e){if(!e.disabled){var s=e.textContent.trim(),i=e.value||s,a=e.label||s;""!==i&&t.push({label:a,value:i})}}),this._list=t}document.activeElement===this.input&&this.evaluate()},get selected(){return this.index>-1},get opened(){return this.isOpened},close:function(e){this.opened&&(this.ul.setAttribute("hidden",""),this.isOpened=!1,this.index=-1,i.fire(this.input,"awesomplete-close",e||{}))},open:function(){this.ul.removeAttribute("hidden"),this.isOpened=!0,this.autoFirst&&-1===this.index&&this.goto(0),i.fire(this.input,"awesomplete-open")},destroy:function(){i.unbind(this.input,this._events.input),i.unbind(this.input.form,this._events.form);var e=this.container.parentNode;e.insertBefore(this.input,this.container),e.removeChild(this.container),this.input.removeAttribute("autocomplete"),this.input.removeAttribute("aria-autocomplete");var t=r.all.indexOf(this);-1!==t&&r.all.splice(t,1)},next:function(){var e=this.ul.children.length;this.goto(this.index<e-1?this.index+1:e?0:-1)},previous:function(){var e=this.ul.children.length,t=this.index-1;this.goto(this.selected&&-1!==t?t:e-1)},goto:function(e){var t=this.ul.children;this.selected&&t[this.index].setAttribute("aria-selected","false"),this.index=e,e>-1&&t.length>0&&(t[e].setAttribute("aria-selected","true"),this.status.textContent=t[e].textContent,this.ul.scrollTop=t[e].offsetTop-this.ul.clientHeight+t[e].clientHeight,i.fire(this.input,"awesomplete-highlight",{text:this.suggestions[this.index]}))},select:function(e,t){if(e?this.index=i.siblingIndex(e):e=this.ul.children[this.index],e){var s=this.suggestions[this.index];i.fire(this.input,"awesomplete-select",{text:s,origin:t||e})&&(this.replace(s),this.close({reason:"select"}),i.fire(this.input,"awesomplete-selectcomplete",{text:s}))}},evaluate:function(){var e=this,s=this.input.value;s.length>=this.minChars&&this._list.length>0?(this.index=-1,this.ul.innerHTML="",this.suggestions=this._list.map(function(i){return new t(e.data(i,s))}).filter(function(t){return e.filter(t,s)}),!1!==this.sort&&(this.suggestions=this.suggestions.sort(this.sort)),this.suggestions=this.suggestions.slice(0,this.maxItems),this.suggestions.forEach(function(t){e.ul.appendChild(e.item(t,s))}),0===this.ul.children.length?this.close({reason:"nomatches"}):this.open()):this.close({reason:"nomatches"})}},r.all=[],r.FILTER_CONTAINS=function(e,t){return RegExp(i.regExpEscape(t.trim()),"i").test(e)},r.FILTER_STARTSWITH=function(e,t){return RegExp("^"+i.regExpEscape(t.trim()),"i").test(e)},r.SORT_BYLENGTH=function(e,t){return e.length!==t.length?e.length-t.length:e<t?-1:1},r.ITEM=function(e,t){return i.create("li",{innerHTML:""===t.trim()?e:e.replace(RegExp(i.regExpEscape(t.trim()),"gi"),"<mark>$&</mark>"),"aria-selected":"false"})},r.REPLACE=function(e){this.input.value=e.value},r.DATA=function(e){return e},Object.defineProperty(t.prototype=Object.create(String.prototype),"length",{get:function(){return this.label.length}}),t.prototype.toString=t.prototype.valueOf=function(){return""+this.label};var o=Array.prototype.slice;i.create=function(e,t){var s=document.createElement(e);for(var a in t){var n=t[a];if("inside"===a)i(n).appendChild(s);else if("around"===a){var r=i(n);r.parentNode.insertBefore(s,r),s.appendChild(r)}else a in s?s[a]=n:s.setAttribute(a,n)}return s},i.bind=function(e,t){if(e)for(var s in t){var i=t[s];s.split(/\s+/).forEach(function(t){e.addEventListener(t,i)})}},i.unbind=function(e,t){if(e)for(var s in t){var i=t[s];s.split(/\s+/).forEach(function(t){e.removeEventListener(t,i)})}},i.fire=function(e,t,s){var i=document.createEvent("HTMLEvents");i.initEvent(t,!0,!0);for(var a in s)i[a]=s[a];return e.dispatchEvent(i)},i.regExpEscape=function(e){return e.replace(/[-\\^$*+?.()|[\]{}]/g,"\\$&")},i.siblingIndex=function(e){for(var t=0;e=e.previousElementSibling;t++);return t},"undefined"!=typeof Document&&("loading"!==document.readyState?n():document.addEventListener("DOMContentLoaded",n)),r.$=i,r.$$=a,"undefined"!=typeof self&&(self.Awesomplete=r),"object"==typeof e&&e.exports&&(e.exports=r)}()},YqMf:function(e,t,s){"use strict";var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"wrapper"},[s("div",{staticClass:"chatstuff"},[s("div",{ref:"messageBox",staticClass:"message-wrapper",class:{blur:e.blurred}},[s("ul",{ref:"messages",staticClass:"messages"},e._l(e.messages,function(t){return s("li",{class:t.who,domProps:{innerHTML:e._s(t.text)},on:{click:function(t){e.handleMsgClick(t)}}})}))]),s("div",{staticClass:"input-wrapper"},[s("div",{staticClass:"input-bar"},[s("vue-awesomplete",{ref:"awesomeInput",staticClass:"input",attrs:{setting:e.setting,placeholder:"Frag mich",internalValue:e.inputValue},on:{select:e.dehumanize,open:e.handleAwesomOpen,close:e.handleAwesomClose,selectcomplete:function(t){e.selectOne(t)},input:function(t){e.updateValue(t)},enterPressed:e.checkMsg}}),s("button",{attrs:{id:"help-button"},on:{click:e.getHelp}},[e._v("?")])],1)])]),s("div",{staticClass:"main-links"},[s("nuxt-link",{attrs:{to:"/about"}},[e._v("About")]),s("nuxt-link",{attrs:{to:"/cases"}},[e._v("Cases")]),s("nuxt-link",{attrs:{to:"/team"}},[e._v("Team")])],1)])},a=[],n={render:i,staticRenderFns:a};t.a=n},eRDl:function(e,t,s){"use strict";function i(e){function t(e,t){return 0===e.lastIndexOf(t,0)}function s(e){return null==e?"":e.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi,"").toLowerCase()}function i(e,s){for(var i=0;i<l.length;i++){var a=l[i];if(a.length<=6&&a.length>s.length&&t(a,s))return u[a].indexOf(e.label)>-1}return!1}function a(e,s){for(var i=0;i<l.length;i++){var a=l[i];if(a.length>=6&&t(a,s))return u[a].indexOf(e.label)>-1}return!1}function n(e,s){for(var i=0;i<l.length;i++){var a=l[i];if(t(a,s))return u[a].indexOf(e.label)>-1}return!1}function r(e,t){return null!=u[t]&&u[t].indexOf(e.label)>-1}function o(e,t){return t=s(t),!!r(e,t)||(!!n(e,t)||(!!(t.length>2&&t.length<6&&i(e,t))||!!(t.length>3&&a(e,t))))}function c(e,t){for(var s=t.split(" "),i=0;i<s.length;i++){if(o(e,s[i]))return!0}return!1}var u={},l=[];return e.forEach(function(e){e.f.forEach(function(t){""!=t&&(u[t]=Array.isArray(u[t])?u[t]:[],u[t].push(e.q),l.push(t))})}),{performSentenceLogic:c}}t.a=i},fUR1:function(e,t){e.exports={words:["ahole","anus","ash0le","ash0les","asholes","ass","Ass Monkey","Assface","assh0le","assh0lez","asshole","assholes","assholz","asswipe","azzhole","bassterds","bastard","bastards","bastardz","basterds","basterdz","Biatch","bitch","bitches","Blow Job","boffing","butthole","buttwipe","c0ck","c0cks","c0k","Carpet Muncher","cawk","cawks","Clit","cnts","cntz","cock","cockhead","cock-head","cocks","CockSucker","cock-sucker","crap","cum","cunt","cunts","cuntz","dick","dild0","dild0s","dildo","dildos","dilld0","dilld0s","dominatricks","dominatrics","dominatrix","dyke","enema","f u c k","f u c k e r","fag","fag1t","faget","fagg1t","faggit","faggot","fagit","fags","fagz","faig","faigs","fart","flipping the bird","fuck","fucker","fuckin","fucking","fucks","Fudge Packer","fuk","Fukah","Fuken","fuker","Fukin","Fukk","Fukkah","Fukken","Fukker","Fukkin","g00k","gay","gayboy","gaygirl","gays","gayz","God-damned","h00r","h0ar","h0re","hells","hoar","hoor","hoore","jackoff","jap","japs","jerk-off","jisim","jiss","jizm","jizz","knob","knobs","knobz","kunt","kunts","kuntz","Lesbian","Lezzian","Lipshits","Lipshitz","masochist","masokist","massterbait","masstrbait","masstrbate","masterbaiter","masterbate","masterbates","Motha Fucker","Motha Fuker","Motha Fukkah","Motha Fukker","Mother Fucker","Mother Fukah","Mother Fuker","Mother Fukkah","Mother Fukker","mother-fucker","Mutha Fucker","Mutha Fukah","Mutha Fuker","Mutha Fukkah","Mutha Fukker","n1gr","nastt","nigger;","nigur;","niiger;","niigr;","orafis","orgasim;","orgasm","orgasum","oriface","orifice","orifiss","packi","packie","packy","paki","pakie","paky","pecker","peeenus","peeenusss","peenus","peinus","pen1s","penas","penis","penis-breath","penus","penuus","Phuc","Phuck","Phuk","Phuker","Phukker","polac","polack","polak","Poonani","pr1c","pr1ck","pr1k","pusse","pussee","pussy","puuke","puuker","queer","queers","queerz","qweers","qweerz","qweir","recktum","rectum","retard","sadist","scank","schlong","screwing","semen","sex","sexy","Sh!t","sh1t","sh1ter","sh1ts","sh1tter","sh1tz","shit","shits","shitter","Shitty","Shity","shitz","Shyt","Shyte","Shytty","Shyty","skanck","skank","skankee","skankey","skanks","Skanky","slag","slut","sluts","Slutty","slutz","son-of-a-bitch","tit","turd","va1jina","vag1na","vagiina","vagina","vaj1na","vajina","vullva","vulva","w0p","wh00r","wh0re","whore","xrated","xxx","b!+ch","bitch","blowjob","clit","arschloch","fuck","shit","ass","asshole","b!tch","b17ch","b1tch","bastard","bi+ch","boiolas","buceta","c0ck","cawk","chink","cipa","clits","cock","cum","cunt","dildo","dirsa","ejakulate","fatass","fcuk","fuk","fux0r","hoer","hore","jism","kawk","l3itch","l3i+ch","lesbian","masturbate","masterbat*","masterbat3","motherfucker","s.o.b.","mofo","nazi","nigga","nigger","nutsack","phuck","pimpis","pusse","pussy","scrotum","sh!t","shemale","shi+","sh!+","slut","smut","teets","tits","boobs","b00bs","teez","testical","testicle","titt","w00se","jackoff","wank","whoar","whore","*damn","*dyke","*fuck*","*shit*","@$$","amcik","andskota","arse*","assrammer","ayir","bi7ch","bitch*","bollock*","breasts","butt-pirate","cabron","cazzo","chraa","chuj","Cock*","cunt*","d4mn","daygo","dego","dick*","dike*","dupa","dziwka","ejackulate","Ekrem*","Ekto","enculer","faen","fag*","fanculo","fanny","feces","feg","Felcher","ficken","fitt*","Flikker","foreskin","Fotze","Fu(*","fuk*","futkretzn","gay","gook","guiena","h0r","h4x0r","hell","helvete","hoer*","honkey","Huevon","hui","injun","jizz","kanker*","kike","klootzak","kraut","knulle","kuk","kuksuger","Kurac","kurwa","kusi*","kyrpa*","lesbo","mamhoon","masturbat*","merd*","mibun","monkleigh","mouliewop","muie","mulkku","muschi","nazis","nepesaurio","nigger*","orospu","paska*","perse","picka","pierdol*","pillu*","pimmel","piss*","pizda","poontsee","poop","porn","p0rn","pr0n","preteen","pula","pule","puta","puto","qahbeh","queef*","rautenberg","schaffer","scheiss*","schlampe","schmuck","screw","sh!t*","sharmuta","sharmute","shipal","shiz","skribz","skurwysyn","sphencter","spic","spierdalaj","splooge","suka","b00b*","testicle*","titt*","twat","vittu","wank*","wetback*","wichser","wop*","yed","zabourah"]}},fWpo:function(e,t,s){t=e.exports=s("FZ+f")(!1),t.push([e.i,"[data-v-223b642b],[data-v-223b642b]:after,[data-v-223b642b]:before{box-sizing:border-box}[data-v-223b642b]::-webkit-scrollbar{display:none}h1[data-v-223b642b]{text-indent:13vw;padding:0 12px;margin-top:50%}h3[data-v-223b642b]{padding:0 12px;font-weight:500;line-height:1.2;margin-top:100vh}.main-links[data-v-223b642b]{position:fixed;bottom:24px;left:24px;right:24px;text-align:center}.main-links a[data-v-223b642b]{margin:0 12px;color:#000;font-weight:500;text-transform:uppercase;letter-spacing:.05rem;text-decoration:none}.message-wrapper[data-v-223b642b]{position:absolute;left:0;right:0;top:0;bottom:120px;display:block;padding:0;padding-top:24px;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-flow:column wrap;-webkit-box-pack:end;justify-content:flex-end;overflow:auto;height:calc(100% - 136px);transition:-webkit-filter .2s ease;transition:filter .2s ease;transition:filter .2s ease,-webkit-filter .2s ease}.message-wrapper.blur[data-v-223b642b]{-webkit-filter:blur(5px);filter:blur(5px)}.message-wrapper ul.messages[data-v-223b642b]{margin:0 auto;padding:0;padding-bottom:12px;width:100%;max-width:54rem;height:auto}.message-wrapper li[data-v-223b642b]{height:auto;list-style:none;padding:0 12px;margin-bottom:12px;-webkit-transform-origin:0 100%;transform-origin:0 100%;font-size:1rem;margin-bottom:24px;padding-right:90px;padding-left:24px}.message-wrapper li.new[data-v-223b642b]{-webkit-transform-origin:center bottom;transform-origin:center bottom;-webkit-animation:bounceInUp-data-v-223b642b .5s;animation:bounceInUp-data-v-223b642b .5s}.message-wrapper li.greeting[data-v-223b642b]{text-indent:2.25rem}.message-wrapper li.me[data-v-223b642b]{text-align:right;-webkit-transform-origin:100% 100%;transform-origin:100% 100%;padding-right:24px;padding-left:90px;color:#d8d941;text-indent:0}.message-wrapper li a[data-v-223b642b]{color:lime}@media (min-width:46.25em){.message-wrapper li[data-v-223b642b]{padding-right:300px;font-size:1.3125rem;line-height:1.8125rem;margin-bottom:48px}.message-wrapper li.me[data-v-223b642b]{padding-left:300px}}a[data-v-223b642b]{color:#d8d941}.input-wrapper[data-v-223b642b]{left:12px;right:12px;position:fixed;bottom:62px;padding:0}.input-bar[data-v-223b642b]{background:#000;padding:6px;height:48px;border-radius:24px;display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;-webkit-box-align:stretch;align-items:stretch;width:100%;max-width:400px;margin:0 auto}.input-bar .input[data-v-223b642b]{border:none;border-radius:23px;-webkit-box-flex:1;flex:1 1 auto;padding:0 12px;height:36px;width:100%}.input-bar button[data-v-223b642b]{width:36px;height:36px;border-radius:18px;border:none;outline:none;margin-left:6px;background-color:#157c78;color:#000;font-weight:700;text-align:center;padding:0}@-webkit-keyframes popIn-data-v-223b642b{0%{-webkit-transform:translateY(50px);transform:translateY(50px);opacity:0}75%{-webkit-transform:translateY(-10px);transform:translateY(-10px)}to{-webkit-transform:none;transform:none}}@keyframes popIn-data-v-223b642b{0%{-webkit-transform:translateY(50px);transform:translateY(50px);opacity:0}75%{-webkit-transform:translateY(-10px);transform:translateY(-10px)}to{-webkit-transform:none;transform:none}}@-webkit-keyframes bounceInUp-data-v-223b642b{0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:translate3d(0,100px,0);transform:translate3d(0,100px,0)}60%{opacity:1;-webkit-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0)}75%{-webkit-transform:translate3d(0,10px,0);transform:translate3d(0,10px,0)}90%{-webkit-transform:translate3d(0,-5px,0);transform:translate3d(0,-5px,0)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes bounceInUp-data-v-223b642b{0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:translate3d(0,100px,0);transform:translate3d(0,100px,0)}60%{opacity:1;-webkit-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0)}75%{-webkit-transform:translate3d(0,10px,0);transform:translate3d(0,10px,0)}90%{-webkit-transform:translate3d(0,-5px,0);transform:translate3d(0,-5px,0)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}",""])},hZAW:function(e,t,s){"use strict";var i=function(){var e=this,t=e.$createElement;return(e._self._c||t)("input",{directives:[{name:"model",rawName:"v-model",value:e.internalValue,expression:"internalValue"}],attrs:{type:"text"},domProps:{value:e.internalValue},on:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;t.preventDefault(),e.enterPressed(t)},input:function(t){t.target.composing||(e.internalValue=t.target.value)}}})},a=[],n={render:i,staticRenderFns:a};t.a=n},nZpe:function(e,t,s){e.exports={object:s("nmPd"),array:s("EWfh"),regex:s("8qEm")}},nmPd:function(e,t){e.exports={"4r5e":1,"5h1t":1,"5hit":1,a55:1,anal:1,anus:1,ar5e:1,arrse:1,arse:1,ass:1,"ass-fucker":1,asses:1,assfucker:1,assfukka:1,asshole:1,assholes:1,asswhole:1,a_s_s:1,"b!tch":1,b00bs:1,b17ch:1,b1tch:1,ballbag:1,balls:1,ballsack:1,bastard:1,beastial:1,beastiality:1,bellend:1,bestial:1,bestiality:1,"bi+ch":1,biatch:1,bitch:1,bitcher:1,bitchers:1,bitches:1,bitchin:1,bitching:1,bloody:1,"blow job":1,blowjob:1,blowjobs:1,boiolas:1,bollock:1,bollok:1,boner:1,boob:1,boobs:1,booobs:1,boooobs:1,booooobs:1,booooooobs:1,breasts:1,buceta:1,bugger:1,bum:1,"bunny fucker":1,butt:1,butthole:1,buttmuch:1,buttplug:1,c0ck:1,c0cksucker:1,"carpet muncher":1,cawk:1,chink:1,cipa:1,cl1t:1,clit:1,clitoris:1,clits:1,cnut:1,cock:1,"cock-sucker":1,cockface:1,cockhead:1,cockmunch:1,cockmuncher:1,cocks:1,cocksuck:1,cocksucked:1,cocksucker:1,cocksucking:1,cocksucks:1,cocksuka:1,cocksukka:1,cok:1,cokmuncher:1,coksucka:1,coon:1,cox:1,crap:1,cum:1,cummer:1,cumming:1,cums:1,cumshot:1,cunilingus:1,cunillingus:1,cunnilingus:1,cunt:1,cuntlick:1,cuntlicker:1,cuntlicking:1,cunts:1,cyalis:1,cyberfuc:1,cyberfuck:1,cyberfucked:1,cyberfucker:1,cyberfuckers:1,cyberfucking:1,d1ck:1,damn:1,dick:1,dickhead:1,dildo:1,dildos:1,dink:1,dinks:1,dirsa:1,dlck:1,"dog-fucker":1,doggin:1,dogging:1,donkeyribber:1,doosh:1,duche:1,dyke:1,ejaculate:1,ejaculated:1,ejaculates:1,ejaculating:1,ejaculatings:1,ejaculation:1,ejakulate:1,"f u c k":1,"f u c k e r":1,f4nny:1,fag:1,fagging:1,faggitt:1,faggot:1,faggs:1,fagot:1,fagots:1,fags:1,fanny:1,fannyflaps:1,fannyfucker:1,fanyy:1,fatass:1,fcuk:1,fcuker:1,fcuking:1,feck:1,fecker:1,felching:1,fellate:1,fellatio:1,fingerfuck:1,fingerfucked:1,fingerfucker:1,fingerfuckers:1,fingerfucking:1,fingerfucks:1,fistfuck:1,fistfucked:1,fistfucker:1,fistfuckers:1,fistfucking:1,fistfuckings:1,fistfucks:1,flange:1,fook:1,fooker:1,fuck:1,fucka:1,fucked:1,fucker:1,fuckers:1,fuckhead:1,fuckheads:1,fuckin:1,fucking:1,fuckings:1,fuckingshitmotherfucker:1,fuckme:1,fucks:1,fuckwhit:1,fuckwit:1,"fudge packer":1,fudgepacker:1,fuk:1,fuker:1,fukker:1,fukkin:1,fuks:1,fukwhit:1,fukwit:1,fux:1,fux0r:1,f_u_c_k:1,gangbang:1,gangbanged:1,gangbangs:1,gaylord:1,gaysex:1,goatse:1,God:1,"god-dam":1,"god-damned":1,goddamn:1,goddamned:1,hardcoresex:1,hell:1,heshe:1,hoar:1,hoare:1,hoer:1,homo:1,hore:1,horniest:1,horny:1,hotsex:1,"jack-off":1,jackoff:1,jap:1,"jerk-off":1,jism:1,jiz:1,jizm:1,jizz:1,kawk:1,knob:1,knobead:1,knobed:1,knobend:1,knobhead:1,knobjocky:1,knobjokey:1,kock:1,kondum:1,kondums:1,kum:1,kummer:1,kumming:1,kums:1,kunilingus:1,"l3i+ch":1,l3itch:1,labia:1,lust:1,lusting:1,m0f0:1,m0fo:1,m45terbate:1,ma5terb8:1,ma5terbate:1,masochist:1,"master-bate":1,masterb8:1,"masterbat*":1,masterbat3:1,masterbate:1,masterbation:1,masterbations:1,masturbate:1,"mo-fo":1,mof0:1,mofo:1,mothafuck:1,mothafucka:1,mothafuckas:1,mothafuckaz:1,mothafucked:1,mothafucker:1,mothafuckers:1,mothafuckin:1,mothafucking:1,mothafuckings:1,mothafucks:1,"mother fucker":1,motherfuck:1,motherfucked:1,motherfucker:1,motherfuckers:1,motherfuckin:1,motherfucking:1,motherfuckings:1,motherfuckka:1,motherfucks:1,muff:1,mutha:1,muthafecker:1,muthafuckker:1,muther:1,mutherfucker:1,n1gga:1,n1gger:1,nazi:1,nigg3r:1,nigg4h:1,nigga:1,niggah:1,niggas:1,niggaz:1,nigger:1,niggers:1,nob:1,"nob jokey":1,nobhead:1,nobjocky:1,nobjokey:1,numbnuts:1,nutsack:1,orgasim:1,orgasims:1,orgasm:1,orgasms:1,p0rn:1,pawn:1,pecker:1,penis:1,penisfucker:1,phonesex:1,phuck:1,phuk:1,phuked:1,phuking:1,phukked:1,phukking:1,phuks:1,phuq:1,pigfucker:1,pimpis:1,piss:1,pissed:1,pisser:1,pissers:1,pisses:1,pissflaps:1,pissin:1,pissing:1,pissoff:1,poop:1,porn:1,porno:1,pornography:1,pornos:1,prick:1,pricks:1,pron:1,pube:1,pusse:1,pussi:1,pussies:1,pussy:1,pussys:1,rectum:1,retard:1,rimjaw:1,rimming:1,"s hit":1,"s.o.b.":1,sadist:1,schlong:1,screwing:1,scroat:1,scrote:1,scrotum:1,semen:1,sex:1,"sh!+":1,"sh!t":1,sh1t:1,shag:1,shagger:1,shaggin:1,shagging:1,shemale:1,"shi+":1,shit:1,shitdick:1,shite:1,shited:1,shitey:1,shitfuck:1,shitfull:1,shithead:1,shiting:1,shitings:1,shits:1,shitted:1,shitter:1,shitters:1,shitting:1,shittings:1,shitty:1,skank:1,slut:1,sluts:1,smegma:1,smut:1,snatch:1,"son-of-a-bitch":1,spac:1,spunk:1,s_h_i_t:1,t1tt1e5:1,t1tties:1,teets:1,teez:1,testical:1,testicle:1,tit:1,titfuck:1,tits:1,titt:1,tittie5:1,tittiefucker:1,titties:1,tittyfuck:1,tittywank:1,titwank:1,tosser:1,turd:1,tw4t:1,twat:1,twathead:1,twatty:1,twunt:1,twunter:1,v14gra:1,v1gra:1,vagina:1,viagra:1,vulva:1,w00se:1,wang:1,wank:1,wanker:1,wanky:1,whoar:1,whore:1,willies:1,willy:1,xrated:1,xxx:1}},"q8+K":function(e,t,s){"use strict";s.d(t,"a",function(){return a});var i=s("L/IX"),a=new i({list:["F472","C493","T699","Q915","X064","W570","Y234"]})}});
//# sourceMappingURL=chat.794b061a765bf06e4ce5.js.map