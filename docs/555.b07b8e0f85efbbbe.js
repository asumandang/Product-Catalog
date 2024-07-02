"use strict";(self.webpackChunkproduct_catalog=self.webpackChunkproduct_catalog||[]).push([[555],{555:(Pn,X,W)=>{W.d(X,{c:()=>Ln});var B=W(4878),_=W(1656);let Y;const Tn=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),q=i=>(void 0===Y&&(Y=void 0===i.style.animationName&&void 0!==i.style.webkitAnimationName?"-webkit-":""),Y),f=(i,o,s)=>{const u=o.startsWith("animation")?q(i):"";i.style.setProperty(u+o,s)},E=(i,o)=>{const s=o.startsWith("animation")?q(i):"";i.style.removeProperty(s+o)},ln=[],V=(i=[],o)=>{if(void 0!==o){const s=Array.isArray(o)?o:[o];return[...i,...s]}return i},Ln=i=>{let o,s,u,l,A,v,m,Z,D,L,T,M,r,c=[],nn=[],tn=[],F=!1,en={},on=[],rn=[],sn={},P=0,G=!1,H=!1,k=!0,O=!1,I=!0,J=!1;const dn=i,an=[],N=[],Q=[],h=[],p=[],fn=[],mn=[],hn=[],pn=[],gn=[],S=[],On="function"==typeof AnimationEffect||void 0!==B.w&&"function"==typeof B.w.AnimationEffect,C="function"==typeof Element&&"function"==typeof Element.prototype.animate&&On,yn=()=>S,En=(n,t)=>{const e=t.findIndex(a=>a.c===n);e>-1&&t.splice(e,1)},cn=(n,t)=>((t?.oneTimeCallback?N:an).push({c:n,o:t}),r),An=()=>{if(C)S.forEach(n=>{n.cancel()}),S.length=0;else{const n=h.slice();(0,_.r)(()=>{n.forEach(t=>{E(t,"animation-name"),E(t,"animation-duration"),E(t,"animation-timing-function"),E(t,"animation-iteration-count"),E(t,"animation-delay"),E(t,"animation-play-state"),E(t,"animation-fill-mode"),E(t,"animation-direction")})})}},Cn=()=>{fn.forEach(n=>{n?.parentNode&&n.parentNode.removeChild(n)}),fn.length=0},U=()=>void 0!==A?A:m?m.getFill():"both",x=()=>void 0!==D?D:void 0!==v?v:m?m.getDirection():"normal",z=()=>G?"linear":void 0!==u?u:m?m.getEasing():"linear",b=()=>H?0:void 0!==L?L:void 0!==s?s:m?m.getDuration():0,w=()=>void 0!==l?l:m?m.getIterations():1,K=()=>void 0!==T?T:void 0!==o?o:m?m.getDelay():0,R=()=>{0!==P&&(P--,0===P&&((()=>{un(),pn.forEach(d=>d()),gn.forEach(d=>d());const n=k?1:0,t=on,e=rn,a=sn;h.forEach(d=>{const y=d.classList;t.forEach($=>y.add($)),e.forEach($=>y.remove($));for(const $ in a)a.hasOwnProperty($)&&f(d,$,a[$])}),L=void 0,D=void 0,T=void 0,an.forEach(d=>d.c(n,r)),N.forEach(d=>d.c(n,r)),N.length=0,I=!0,k&&(O=!0),k=!0})(),m&&m.animationFinish()))},bn=(n=!0)=>{Cn();const t=(i=>(i.forEach(o=>{for(const s in o)if(o.hasOwnProperty(s)){const u=o[s];if("easing"===s)o["animation-timing-function"]=u,delete o[s];else{const l=Tn(s);l!==s&&(o[l]=u,delete o[s])}}}),i))(c);h.forEach(e=>{if(t.length>0){const a=((i=[])=>i.map(o=>{const s=o.offset,u=[];for(const l in o)o.hasOwnProperty(l)&&"offset"!==l&&u.push(`${l}: ${o[l]};`);return`${100*s}% { ${u.join(" ")} }`}).join(" "))(t);M=void 0!==i?i:(i=>{let o=ln.indexOf(i);return o<0&&(o=ln.push(i)-1),`ion-animation-${o}`})(a);const d=((i,o,s)=>{var u;const l=(i=>{const o=void 0!==i.getRootNode?i.getRootNode():i;return o.head||o})(s),A=q(s),v=l.querySelector("#"+i);if(v)return v;const c=(null!==(u=s.ownerDocument)&&void 0!==u?u:document).createElement("style");return c.id=i,c.textContent=`@${A}keyframes ${i} { ${o} } @${A}keyframes ${i}-alt { ${o} }`,l.appendChild(c),c})(M,a,e);fn.push(d),f(e,"animation-duration",`${b()}ms`),f(e,"animation-timing-function",z()),f(e,"animation-delay",`${K()}ms`),f(e,"animation-fill-mode",U()),f(e,"animation-direction",x());const y=w()===1/0?"infinite":w().toString();f(e,"animation-iteration-count",y),f(e,"animation-play-state","paused"),n&&f(e,"animation-name",`${d.id}-alt`),(0,_.r)(()=>{f(e,"animation-name",d.id||null)})}})},Sn=(n=!0)=>{(()=>{mn.forEach(a=>a()),hn.forEach(a=>a());const n=nn,t=tn,e=en;h.forEach(a=>{const d=a.classList;n.forEach(y=>d.add(y)),t.forEach(y=>d.remove(y));for(const y in e)e.hasOwnProperty(y)&&f(a,y,e[y])})})(),c.length>0&&(C?(h.forEach(n=>{const t=n.animate(c,{id:dn,delay:K(),duration:b(),easing:z(),iterations:w(),fill:U(),direction:x()});t.pause(),S.push(t)}),S.length>0&&(S[0].onfinish=()=>{R()})):bn(n)),F=!0},j=n=>{if(n=Math.min(Math.max(n,0),.9999),C)S.forEach(t=>{t.currentTime=t.effect.getComputedTiming().delay+b()*n,t.pause()});else{const t=`-${b()*n}ms`;h.forEach(e=>{c.length>0&&(f(e,"animation-delay",t),f(e,"animation-play-state","paused"))})}},_n=n=>{S.forEach(t=>{t.effect.updateTiming({delay:K(),duration:b(),easing:z(),iterations:w(),fill:U(),direction:x()})}),void 0!==n&&j(n)},vn=(n=!0,t)=>{(0,_.r)(()=>{h.forEach(e=>{f(e,"animation-name",M||null),f(e,"animation-duration",`${b()}ms`),f(e,"animation-timing-function",z()),f(e,"animation-delay",void 0!==t?`-${t*b()}ms`:`${K()}ms`),f(e,"animation-fill-mode",U()||null),f(e,"animation-direction",x()||null);const a=w()===1/0?"infinite":w().toString();f(e,"animation-iteration-count",a),n&&f(e,"animation-name",`${M}-alt`),(0,_.r)(()=>{f(e,"animation-name",M||null)})})})},g=(n=!1,t=!0,e)=>(n&&p.forEach(a=>{a.update(n,t,e)}),C?_n(e):vn(t,e),r),wn=()=>{F&&(C?S.forEach(n=>{n.pause()}):h.forEach(n=>{f(n,"animation-play-state","paused")}),J=!0)},St=()=>{Z=void 0,R()},un=()=>{Z&&clearTimeout(Z)},Fn=n=>new Promise(t=>{n?.sync&&(H=!0,cn(()=>H=!1,{oneTimeCallback:!0})),F||Sn(),O&&(C?(j(0),_n()):vn(),O=!1),I&&(P=p.length+1,I=!1);const e=()=>{En(a,N),t()},a=()=>{En(e,Q),t()};cn(a,{oneTimeCallback:!0}),((n,t)=>{Q.push({c:n,o:{oneTimeCallback:!0}})})(e),p.forEach(d=>{d.play()}),C?(S.forEach(n=>{n.play()}),(0===c.length||0===h.length)&&R()):(()=>{if(un(),(0,_.r)(()=>{h.forEach(n=>{c.length>0&&f(n,"animation-play-state","running")})}),0===c.length||0===h.length)R();else{const n=K()||0,t=b()||0,e=w()||1;isFinite(e)&&(Z=setTimeout(St,n+t*e+100)),((i,o)=>{let s;const u={passive:!0},A=v=>{i===v.target&&(s&&s(),un(),(0,_.r)(()=>{h.forEach(n=>{E(n,"animation-duration"),E(n,"animation-delay"),E(n,"animation-play-state")}),(0,_.r)(R)}))};i&&(i.addEventListener("webkitAnimationEnd",A,u),i.addEventListener("animationend",A,u),s=()=>{i.removeEventListener("webkitAnimationEnd",A,u),i.removeEventListener("animationend",A,u)})})(h[0])}})(),J=!1}),$n=(n,t)=>{const e=c[0];return void 0===e||void 0!==e.offset&&0!==e.offset?c=[{offset:0,[n]:t},...c]:e[n]=t,r};return r={parentAnimation:m,elements:h,childAnimations:p,id:dn,animationFinish:R,from:$n,to:(n,t)=>{const e=c[c.length-1];return void 0===e||void 0!==e.offset&&1!==e.offset?c=[...c,{offset:1,[n]:t}]:e[n]=t,r},fromTo:(n,t,e)=>$n(n,t).to(n,e),parent:n=>(m=n,r),play:Fn,pause:()=>(p.forEach(n=>{n.pause()}),wn(),r),stop:()=>{p.forEach(n=>{n.stop()}),F&&(An(),F=!1),G=!1,H=!1,I=!0,D=void 0,L=void 0,T=void 0,P=0,O=!1,k=!0,J=!1,Q.forEach(n=>n.c(0,r)),Q.length=0},destroy:n=>(p.forEach(t=>{t.destroy(n)}),(n=>{An(),n&&Cn()})(n),h.length=0,p.length=0,c.length=0,an.length=0,N.length=0,F=!1,I=!0,r),keyframes:n=>{const t=c!==n;return c=n,t&&(n=>{C?yn().forEach(t=>{const e=t.effect;if(e.setKeyframes)e.setKeyframes(n);else{const a=new KeyframeEffect(e.target,n,e.getTiming());t.effect=a}}):bn()})(c),r},addAnimation:n=>{if(null!=n)if(Array.isArray(n))for(const t of n)t.parent(r),p.push(t);else n.parent(r),p.push(n);return r},addElement:n=>{if(null!=n)if(1===n.nodeType)h.push(n);else if(n.length>=0)for(let t=0;t<n.length;t++)h.push(n[t]);else console.error("Invalid addElement value");return r},update:g,fill:n=>(A=n,g(!0),r),direction:n=>(v=n,g(!0),r),iterations:n=>(l=n,g(!0),r),duration:n=>(!C&&0===n&&(n=1),s=n,g(!0),r),easing:n=>(u=n,g(!0),r),delay:n=>(o=n,g(!0),r),getWebAnimations:yn,getKeyframes:()=>c,getFill:U,getDirection:x,getDelay:K,getIterations:w,getEasing:z,getDuration:b,afterAddRead:n=>(pn.push(n),r),afterAddWrite:n=>(gn.push(n),r),afterClearStyles:(n=[])=>{for(const t of n)sn[t]="";return r},afterStyles:(n={})=>(sn=n,r),afterRemoveClass:n=>(rn=V(rn,n),r),afterAddClass:n=>(on=V(on,n),r),beforeAddRead:n=>(mn.push(n),r),beforeAddWrite:n=>(hn.push(n),r),beforeClearStyles:(n=[])=>{for(const t of n)en[t]="";return r},beforeStyles:(n={})=>(en=n,r),beforeRemoveClass:n=>(tn=V(tn,n),r),beforeAddClass:n=>(nn=V(nn,n),r),onFinish:cn,isRunning:()=>0!==P&&!J,progressStart:(n=!1,t)=>(p.forEach(e=>{e.progressStart(n,t)}),wn(),G=n,F||Sn(),g(!1,!0,t),r),progressStep:n=>(p.forEach(t=>{t.progressStep(n)}),j(n),r),progressEnd:(n,t,e)=>(G=!1,p.forEach(a=>{a.progressEnd(n,t,e)}),void 0!==e&&(L=e),O=!1,k=!0,0===n?(D="reverse"===x()?"normal":"reverse","reverse"===D&&(k=!1),C?(g(),j(1-t)):(T=(1-t)*b()*-1,g(!1,!1))):1===n&&(C?(g(),j(t)):(T=t*b()*-1,g(!1,!1))),void 0!==n&&!m&&Fn(),r)}}},4878:(Pn,X,W)=>{W.d(X,{d:()=>_,w:()=>B});const B=typeof window<"u"?window:void 0,_=typeof document<"u"?document:void 0}}]);