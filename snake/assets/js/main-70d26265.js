var b=(s,t,i)=>{if(!t.has(s))throw TypeError("Cannot "+i)};var r=(s,t,i)=>(b(s,t,"read from private field"),i?i.call(s):t.get(s)),c=(s,t,i)=>{if(t.has(s))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(s):t.set(s,i)},a=(s,t,i,o)=>(b(s,t,"write to private field"),o?o.call(s,i):t.set(s,i),i);var g=(s,t,i)=>(b(s,t,"access private method"),i);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const h of e)if(h.type==="childList")for(const n of h.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const h={};return e.integrity&&(h.integrity=e.integrity),e.referrerpolicy&&(h.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?h.credentials="include":e.crossorigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function o(e){if(e.ep)return;e.ep=!0;const h=i(e);fetch(e.href,h)}})();class H{constructor(t){const i=document.querySelector(".js_canvas"),{width:o,height:e}=i.getBoundingClientRect();this.width=i.width=o+(t-o%t),this.height=i.height=e+(t-e%t),this.ctx=i.getContext("2d")}}class R{constructor(t,i,o,e){this.ctx=t,this.ctxWidth=i,this.ctxHeight=o,this.width=e,this.height=e}}const X=""+new URL("../images/head-e9a3d7ac.png",import.meta.url).href;var E,m,d,l,w,_,y,T;class Y extends R{constructor(i,o,e,h){super(i,o,e,h);c(this,w);c(this,y);c(this,E,"#ff0000");c(this,m,"#ff5500");c(this,d,0);c(this,l,0);this.movementPower=h,this.bodyLength=1;let n=Math.round((o-this.width)*.5),S=Math.round((e-this.height)*.5);this.positionX=n-n%h,this.positionY=S-S%h,this.bodyPositionList=[],this.headImage=new Image(h,h),this.headImage.src=X}draw(){g(this,w,_).call(this),g(this,y,T).call(this)}grow(){this.bodyLength++}degradate(){this.bodyLength=1}setDirection(i){if(!!["ArrowLeft","KeyA","ArrowRight","KeyD","ArrowUp","KeyW","ArrowDown","KeyS"].includes(i))switch(i){case"ArrowLeft":case"KeyA":if(a(this,l,0),r(this,d)===this.movementPower)break;a(this,d,-this.movementPower);break;case"ArrowRight":case"KeyD":if(a(this,l,0),r(this,d)===-this.movementPower)break;a(this,d,this.movementPower);break;case"ArrowUp":case"KeyW":if(a(this,d,0),r(this,l)===this.movementPower)break;a(this,l,-this.movementPower);break;case"ArrowDown":case"KeyS":if(a(this,d,0),r(this,l)===-this.movementPower)break;a(this,l,this.movementPower);break}}}E=new WeakMap,m=new WeakMap,d=new WeakMap,l=new WeakMap,w=new WeakSet,_=function(){const i=this.positionX+r(this,d),o=this.positionY+r(this,l);i>=this.ctxWidth?this.positionX=0:i<0?this.positionX=this.ctxWidth:this.positionX=i,o>=this.ctxHeight?this.positionY=0:o<0?this.positionY=this.ctxHeight:this.positionY=o},y=new WeakSet,T=function(){this.bodyPositionList.push({x:this.positionX,y:this.positionY}),this.bodyPositionList.length>this.bodyLength&&(this.bodyPositionList=this.bodyPositionList.slice(-this.bodyLength)),this.bodyPositionList.forEach((i,o)=>{const e=o===this.bodyPositionList.length-1;this.ctx.save(),e?this.ctx.drawImage(this.headImage,i.x,i.y,this.width,this.height):(this.ctx.fillStyle=r(this,m),this.ctx.fillRect(i.x,i.y,this.width,this.height)),this.ctx.restore()})};const M=(s,t)=>Math.random()*(t-s)+s;class N extends R{constructor(t,i,o,e){super(t,i,o,e);let h=Math.round(M(this.width,i-this.width)),n=Math.round(M(this.height,o-this.height));this.positionX=h-h%e,this.positionY=n-n%e}draw(){this.ctx.fillRect(this.positionX,this.positionY,this.width,this.height)}}var p,I,f,L,u,P;class W{constructor(t,i){c(this,u);c(this,p,12);c(this,I,2);c(this,f,0);c(this,L,2);this.SIZE_MILTIPLIER=i;const{ctx:o,width:e,height:h}=new t(this.SIZE_MILTIPLIER);this.ctx=o,this.ctxWidth=e,this.ctxHeight=h,this.interactiveElementMap=[],this.globalInteractiveList=[]}addPlayableHero(t){this.hero=new t(this.ctx,this.ctxWidth,this.ctxHeight,this.SIZE_MILTIPLIER)}addSimpleInteractiveItem(t){this.interactiveElementMap.push(t)}collision(){this.collisionWithInteractiveElement()}collisionWithInteractiveElement(){const t=this.globalInteractiveList.findIndex(({positionX:h,positionY:n})=>this.hero.bodyPositionList.at(-1).x===h&&this.hero.bodyPositionList.at(-1).y===n);t!==-1&&(this.globalInteractiveList.splice(t,1),this.hero.grow(),g(this,u,P).call(this,!0),console.log("here?",1));const i=this.hero.bodyPositionList.slice(0,this.hero.bodyPositionList.length-1),o=this.hero.bodyPositionList.at(-1);i.some(({x:h,y:n})=>h===o.x&&n===o.y)&&(this.hero.degradate(),g(this,u,P).call(this,!1))}interactive(){if(this.globalInteractiveList.length<r(this,I))for(let t=0;t<r(this,p);++t)this.globalInteractiveList.push(new this.interactiveElementMap[0](this.ctx,this.ctxWidth,this.ctxHeight,this.SIZE_MILTIPLIER));this.globalInteractiveList.forEach(t=>{t.draw()})}draw(){this.ctx.clearRect(0,0,this.ctxWidth,this.ctxHeight),this.interactive(),this.hero&&this.hero.draw(),this.collision()}}p=new WeakMap,I=new WeakMap,f=new WeakMap,L=new WeakMap,u=new WeakSet,P=function(t){t?a(this,f,r(this,f)+r(this,L)):a(this,f,0),document.querySelector(".js_score").textContent=r(this,f)};const K=80,k=14;let A=0,v=k;const x=new W(H,K);x.addPlayableHero(Y);x.addSimpleInteractiveItem(N);function C(){A++,A%v===0&&x.draw(),requestAnimationFrame(C)}C();window.addEventListener("keydown",s=>{if(s.code==="Space"){v=2;return}x.hero.setDirection(s.code)});window.addEventListener("keyup",s=>{s.code==="Space"&&(v=k)});
