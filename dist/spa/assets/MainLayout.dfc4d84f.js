import{c as f,a as C,r as y,w as q,o as P,h as v,T as X,b as N,Q as Y,i as A,d as O,n as M,e as U,g as B,l as E,f as K,j as Z,k as j,p as G,m as ee,q as te,s as ne,t as ie,u as V,v as k,x as le,y as oe,_ as ae,z as W,A as re,B as se,C as Q,D as L,E as ue}from"./index.ec770fbd.js";const ce={ratio:[String,Number]};function de(e,g){return f(()=>{const n=Number(e.ratio||(g!==void 0?g.value:void 0));return isNaN(n)!==!0&&n>0?{paddingBottom:`${100/n}%`}:null})}const fe=16/9;var ve=C({name:"QImg",props:{...ce,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:fe},placeholderSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:g,emit:n}){const t=y(e.initialRatio),l=de(e,t);let a;const u=[y(null),y(e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null)],h=y(0),c=y(!1),r=y(!1),z=f(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),b=f(()=>({width:e.width,height:e.height})),_=f(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition`),d=f(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));q(()=>S(),R);function S(){return e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null}function R(o){if(clearTimeout(a),r.value=!1,o===null){c.value=!1,u[0].value=null,u[1].value=null;return}c.value=!0,u[h.value].value=o}function H({target:o}){a!==null&&(clearTimeout(a),t.value=o.naturalHeight===0?.5:o.naturalWidth/o.naturalHeight,p(o,1))}function p(o,x){a===null||x===1e3||(o.complete===!0?i(o):a=setTimeout(()=>{p(o,x+1)},50))}function i(o){a!==null&&(h.value=h.value===1?0:1,u[h.value].value=null,c.value=!1,r.value=!1,n("load",o.currentSrc||o.src))}function w(o){clearTimeout(a),c.value=!1,r.value=!0,u[0].value=null,u[1].value=null,n("error",o)}function s(o,x){return v("div",{class:"q-img__container absolute-full",key:o},x)}function m(o){const x=u[o].value,$={key:"img_"+o,class:_.value,style:d.value,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...x};return h.value===o?($.class+=" q-img__image--waiting",Object.assign($,{onLoad:H,onError:w})):$.class+=" q-img__image--loaded",s("img"+o,v("img",$))}function T(){return c.value!==!0?v("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},N(g[r.value===!0?"error":"default"])):v("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},g.loading!==void 0?g.loading():e.noSpinner===!0?void 0:[v(Y,{color:e.spinnerColor,size:e.spinnerSize})])}return R(S()),P(()=>{clearTimeout(a),a=null}),()=>{const o=[];return l.value!==null&&o.push(v("div",{key:"filler",style:l.value})),r.value!==!0&&(u[0].value!==null&&o.push(m(0)),u[1].value!==null&&o.push(m(1))),o.push(v(X,{name:"q-transition--fade"},T)),v("div",{class:z.value,style:b.value,role:"img","aria-label":e.alt},o)}}}),ge=C({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:g}){const n=f(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>v("div",{class:n.value},N(g.default))}}),he=C({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:g}){const n=f(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>v("div",{class:n.value},N(g.default))}});function me(){const e=y(!A.value);return e.value===!1&&O(()=>{e.value=!0}),e}const J=typeof ResizeObserver!="undefined",I=J===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var F=C({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:g}){let n=null,t,l={width:-1,height:-1};function a(c){c===!0||e.debounce===0||e.debounce==="0"?u():n===null&&(n=setTimeout(u,e.debounce))}function u(){if(clearTimeout(n),n=null,t){const{offsetWidth:c,offsetHeight:r}=t;(c!==l.width||r!==l.height)&&(l={width:c,height:r},g("resize",l))}}const{proxy:h}=B();if(J===!0){let c;return O(()=>{M(()=>{t=h.$el.parentNode,t&&(c=new ResizeObserver(a),c.observe(t),u())})}),P(()=>{clearTimeout(n),c!==void 0&&(c.disconnect!==void 0?c.disconnect():t&&c.unobserve(t))}),U}else{let z=function(){clearTimeout(n),r!==void 0&&(r.removeEventListener!==void 0&&r.removeEventListener("resize",a,E.passive),r=void 0)},b=function(){z(),t&&t.contentDocument&&(r=t.contentDocument.defaultView,r.addEventListener("resize",a,E.passive),u())};const c=me();let r;return O(()=>{M(()=>{t=h.$el,t&&b()})}),P(z),h.trigger=a,()=>{if(c.value===!0)return v("object",{style:I.style,tabindex:-1,type:"text/html",data:I.url,"aria-hidden":"true",onLoad:b})}}}}),ye=C({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:g,emit:n}){const{proxy:{$q:t}}=B(),l=K(j,()=>{console.error("QHeader needs to be child of QLayout")}),a=y(parseInt(e.heightHint,10)),u=y(!0),h=f(()=>e.reveal===!0||l.view.value.indexOf("H")>-1||t.platform.is.ios&&l.isContainer.value===!0),c=f(()=>{if(e.modelValue!==!0)return 0;if(h.value===!0)return u.value===!0?a.value:0;const i=a.value-l.scroll.value.position;return i>0?i:0}),r=f(()=>e.modelValue!==!0||h.value===!0&&u.value!==!0),z=f(()=>e.modelValue===!0&&r.value===!0&&e.reveal===!0),b=f(()=>"q-header q-layout__section--marginal "+(h.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(r.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),_=f(()=>{const i=l.rows.value.top,w={};return i[0]==="l"&&l.left.space===!0&&(w[t.lang.rtl===!0?"right":"left"]=`${l.left.size}px`),i[2]==="r"&&l.right.space===!0&&(w[t.lang.rtl===!0?"left":"right"]=`${l.right.size}px`),w});function d(i,w){l.update("header",i,w)}function S(i,w){i.value!==w&&(i.value=w)}function R({height:i}){S(a,i),d("size",i)}function H(i){z.value===!0&&S(u,!0),n("focusin",i)}q(()=>e.modelValue,i=>{d("space",i),S(u,!0),l.animate()}),q(c,i=>{d("offset",i)}),q(()=>e.reveal,i=>{i===!1&&S(u,e.modelValue)}),q(u,i=>{l.animate(),n("reveal",i)}),q(l.scroll,i=>{e.reveal===!0&&S(u,i.direction==="up"||i.position<=e.revealOffset||i.position-i.inflectionPoint<100)});const p={};return l.instances.header=p,e.modelValue===!0&&d("size",a.value),d("space",e.modelValue),d("offset",c.value),P(()=>{l.instances.header===p&&(l.instances.header=void 0,d("size",0),d("offset",0),d("space",!1))}),()=>{const i=Z(g.default,[]);return e.elevated===!0&&i.push(v("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),i.push(v(F,{debounce:0,onResize:R})),v("header",{class:b.value,style:_.value,onFocusin:H},i)}}}),be=C({name:"QPageContainer",setup(e,{slots:g}){const{proxy:{$q:n}}=B(),t=K(j,()=>{console.error("QPageContainer needs to be child of QLayout")});G(ee,!0);const l=f(()=>{const a={};return t.header.space===!0&&(a.paddingTop=`${t.header.size}px`),t.right.space===!0&&(a[`padding${n.lang.rtl===!0?"Left":"Right"}`]=`${t.right.size}px`),t.footer.space===!0&&(a.paddingBottom=`${t.footer.size}px`),t.left.space===!0&&(a[`padding${n.lang.rtl===!0?"Right":"Left"}`]=`${t.left.size}px`),a});return()=>v("div",{class:"q-page-container",style:l.value},N(g.default))}});const{passive:D}=E,Se=["both","horizontal","vertical"];var we=C({name:"QScrollObserver",props:{axis:{type:String,validator:e=>Se.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:g}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let t=null,l,a;q(()=>e.scrollTarget,()=>{c(),h()});function u(){t!==null&&t();const b=Math.max(0,ne(l)),_=ie(l),d={top:b-n.position.top,left:_-n.position.left};if(e.axis==="vertical"&&d.top===0||e.axis==="horizontal"&&d.left===0)return;const S=Math.abs(d.top)>=Math.abs(d.left)?d.top<0?"up":"down":d.left<0?"left":"right";n.position={top:b,left:_},n.directionChanged=n.direction!==S,n.delta=d,n.directionChanged===!0&&(n.direction=S,n.inflectionPoint=n.position),g("scroll",{...n})}function h(){l=te(a,e.scrollTarget),l.addEventListener("scroll",r,D),r(!0)}function c(){l!==void 0&&(l.removeEventListener("scroll",r,D),l=void 0)}function r(b){if(b===!0||e.debounce===0||e.debounce==="0")u();else if(t===null){const[_,d]=e.debounce?[setTimeout(u,e.debounce),clearTimeout]:[requestAnimationFrame(u),cancelAnimationFrame];t=()=>{d(_),t=null}}}const{proxy:z}=B();return O(()=>{a=z.$el.parentNode,h()}),P(()=>{t!==null&&t(),c()}),Object.assign(z,{trigger:r,getPosition:()=>n}),U}}),ze=C({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:g,emit:n}){const{proxy:{$q:t}}=B(),l=y(null),a=y(t.screen.height),u=y(e.container===!0?0:t.screen.width),h=y({position:0,direction:"down",inflectionPoint:0}),c=y(0),r=y(A.value===!0?0:V()),z=f(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),b=f(()=>e.container===!1?{minHeight:t.screen.height+"px"}:null),_=f(()=>r.value!==0?{[t.lang.rtl===!0?"left":"right"]:`${r.value}px`}:null),d=f(()=>r.value!==0?{[t.lang.rtl===!0?"right":"left"]:0,[t.lang.rtl===!0?"left":"right"]:`-${r.value}px`,width:`calc(100% + ${r.value}px)`}:null);function S(s){if(e.container===!0||document.qScrollPrevented!==!0){const m={position:s.position.top,direction:s.direction,directionChanged:s.directionChanged,inflectionPoint:s.inflectionPoint.top,delta:s.delta.top};h.value=m,e.onScroll!==void 0&&n("scroll",m)}}function R(s){const{height:m,width:T}=s;let o=!1;a.value!==m&&(o=!0,a.value=m,e.onScrollHeight!==void 0&&n("scroll-height",m),p()),u.value!==T&&(o=!0,u.value=T),o===!0&&e.onResize!==void 0&&n("resize",s)}function H({height:s}){c.value!==s&&(c.value=s,p())}function p(){if(e.container===!0){const s=a.value>c.value?V():0;r.value!==s&&(r.value=s)}}let i;const w={instances:{},view:f(()=>e.view),isContainer:f(()=>e.container),rootRef:l,height:a,containerHeight:c,scrollbarWidth:r,totalWidth:f(()=>u.value+r.value),rows:f(()=>{const s=e.view.toLowerCase().split(" ");return{top:s[0].split(""),middle:s[1].split(""),bottom:s[2].split("")}}),header:k({size:0,offset:0,space:!1}),right:k({size:300,offset:0,space:!1}),footer:k({size:0,offset:0,space:!1}),left:k({size:300,offset:0,space:!1}),scroll:h,animate(){i!==void 0?clearTimeout(i):document.body.classList.add("q-body--layout-animate"),i=setTimeout(()=>{document.body.classList.remove("q-body--layout-animate"),i=void 0},155)},update(s,m,T){w[s][m]=T}};if(G(j,w),V()>0){let T=function(){s=null,m.classList.remove("hide-scrollbar")},o=function(){if(s===null){if(m.scrollHeight>t.screen.height)return;m.classList.add("hide-scrollbar")}else clearTimeout(s);s=setTimeout(T,300)},x=function($){s!==null&&$==="remove"&&(clearTimeout(s),T()),window[`${$}EventListener`]("resize",o)},s=null;const m=document.body;q(()=>e.container!==!0?"add":"remove",x),e.container!==!0&&x("add"),le(()=>{x("remove")})}return()=>{const s=oe(g.default,[v(we,{onScroll:S}),v(F,{onResize:R})]),m=v("div",{class:z.value,style:b.value,ref:e.container===!0?void 0:l,tabindex:-1},s);return e.container===!0?v("div",{class:"q-layout-container overflow-hidden",ref:l},[v(F,{onResize:H}),v("div",{class:"absolute-full",style:_.value},[v("div",{class:"scroll",style:d.value},[m])])]):m}}}),_e="/assets/caio_castro.27ac9263.png";const xe={},Te=ue(" Caio Castro Simulator ");function pe(e,g){const n=W("router-link"),t=W("router-view");return re(),se(ze,{view:"hHh lpr fFf"},{default:Q(()=>[L(ye,{class:"bg-primary text-white"},{default:Q(()=>[L(he,null,{default:Q(()=>[L(ge,{class:"text-center"},{default:Q(()=>[L(n,{to:{name:"Home"},class:"text-white",style:{"text-decoration":"none"}},{default:Q(()=>[L(ve,{width:"50px",src:_e}),Te]),_:1})]),_:1})]),_:1})]),_:1}),L(be,null,{default:Q(()=>[L(t)]),_:1})]),_:1})}var Ce=ae(xe,[["render",pe]]);export{Ce as default};
