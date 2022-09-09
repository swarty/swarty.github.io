var P=(r,i,t)=>{if(!i.has(r))throw TypeError("Cannot "+t)};var h=(r,i,t)=>(P(r,i,"read from private field"),t?t.call(r):i.get(r)),l=(r,i,t)=>{if(i.has(r))throw TypeError("Cannot add the same private member more than once");i instanceof WeakSet?i.add(r):i.set(r,t)},w=(r,i,t,o)=>(P(r,i,"write to private field"),o?o.call(r,t):i.set(r,t),t);var m=(r,i,t)=>(P(r,i,"access private method"),t);(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const e of s)if(e.type==="childList")for(const n of e.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function t(s){const e={};return s.integrity&&(e.integrity=s.integrity),s.referrerpolicy&&(e.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?e.credentials="include":s.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function o(s){if(s.ep)return;s.ep=!0;const e=t(s);fetch(s.href,e)}})();const H="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAPJSURBVEiJnZNLiFxFFIa/U/fRz3T3dObhkCGJ0byjiUSJuAgjkrhQcKMJEckiGwm4EIQsRFdZ6iIbQRBEEBECulQnLjLqQjIQ4isaQsg4k4cmxqFf0z333rp1XPQMauweOv7LqnP+7/ynKGEVvTxz4CmBMyJ8fufRynON0zP7AaYOz509PnPgA0VfwvOOv7t36r1+Hv5qAEGPASZO42eYvnQNZAjg8PSe2cRF230TIi49Avw/wKKtP+g0xanSarbGNVUAmvXGdi8wSAoiZuPqQ/bQ06cnquCfFcw28V3oZT3iulW3aAXA5H3NDAUkHStYSRW9CPbJqUPXFwYCABz8eOM+4/GZKlVUsS3Lhi2bAJi7fBW/6IMIIlJXODh1aHaml4/pBzhz5NdzqcgRVXCJozo6TJjNEGYzVEeHcYlDFRy80M+8b4JXL0xWIhu8qeqqC7fuPN+sNYrrNq3HDwIAbJJw4+o8ayqlVnVs9BMR/sz4yclTj0zXBkpwas90HcdtkKPVsZHi+OZ1RNKmmSzQTBaIpM345nVUx0aKoEcdmlT2TDYGTrCiY9/uf7th/3jN15hNoUfF65bXUmUuTokkpBQOv/X+vm9O3NOKVnRx9rH7ri92bkzmfRPcVZk4x6XFJV1byG2beOD7y/cM0CsPj6pnvlYbbdWkg8mWQJY3qoqLGuCFJLFtGcnuy+y8+HMvn74fTcV96Dr1ra5+DdShQQ5T3gBicPU5NF4EBH/NeDG2yVfAyMAJ7A/DL7rWnY/6we9WrQWZUumd8uONV+6+6/0PbHq0ixdMeQJveCsmN/T3VJkS3vAWTGU9iME3oHF8uJdV7xUVR34zYR4Ji0iQ65pWNkCmBKpdmAgS5JEgT8hNJJtvwO+DAcTPtyXIA6AugaSDhMV/pFA0aoIXIn4WvzwKSnvgBBo1q5Ip4KImrjYPmiJBHlNZfuTaPBo3QQymPAHqk8ZLhZ7D9jpMzpd/1Ki+q9ddL7U6IF4QDU0m2YESANEK35TGkaCALt7GLdW7p5kipjiO2g6ucRN1DvHE9jLqCTD56qca5vZKuAYJu8klvB/aC6AOU1gLCBIWkKCAb+cJ8qVzcOs/Xj1XpFd3jan4s0AOl6A2WgYtl6uiSRu8AGsdSdQhCPIPZXb88tNAgC5k9xsubp1Ma7+CS5GggBnaiIiQ1ubRqEHqDIkpElZGv8zuuHKwl09/gOLZ78rntVPf/e8OAVXiBNpL4GeCpaGRpCw7ie8JsKLkwsjrdql1wtq45GwqqmBTwRiThrn8F8Unms+u1v8XyhOV+PwMmBgAAAAASUVORK5CYII=",V="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApgAAAKYB3X3/OAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAMxSURBVEiJnVVNaFRXFP7Ovff9TPoyMglCMopKVinUH0QR3BiHSKeBdiFiXRW0G7EL0UJVEEVBBQvFUlA3IriyLSpEk4wLRd256KK02GXF1CZ16sRMYsb35t17XMQ3zLw30ZeczX3nu/d83zn33cMhZsZSbKRyfGu9/vpHX9c2GGaSpGpCyKpgWVZCjDsq++TT7pNH1FLIh8vfFeeCV3dCE8oI06h70PCkUHnPWbG+0+m6BwBLEDgl3gSzN0MTSiIBWziwpAtbunBVB1zlQZB4I4W8kVrg1s6V3dLWu7+4PnHpzrFbD7z9gxkvtwa2zLQ9z8CJzZkD46kFysufV3unew/d3tNLxJjKLV+9kRjfAvgyxmEAfP/PRz0/RAC97ydXi8WubKlUAYDbe/KXQdgldfjJ0C8vJgHgyW+nVk33d+0k8DoG/mPmsa3ewUfNHAmByo4d+4IwPFPXugcACGAlxMzLTBXTzpz6eHbl7x2WFRCwDkAOgA+gREKcs0ZGHseTbBF4WShcmQvDfe2qqcsQf+cmsanaB0cpCKL4EUNEe63R0WvNoIg+yoXC2XbkgghZx4EHB662EBiDBa5VMPNVf2jos2QF27erf5lntTFOnDznulBC4L0mJSibBU9NAcAfdqm0PspCAECZ6HScHAA82/4wOQDR1wfR3w/K5wFgrV8sft7YAwAGtiWSIkJGpezDjg4AAOVy8yvRllYBY9YkYiwrHTkAzMzMr74/vzL3R1sKAAzQGY9p80oWNDM+DhGGMJOTEdTT4AEASfQiHkSLEEC9DvPsGRAEUfDTVgEh/koIpKdPGnODT7xT/DkhsJgKkjbc4ImaZmJgoBYa40YbWcdJ/4paM/vTHh1dG7mNR+4odbH5XKD14skBwJhzLXrNbf98YOCVMWZZ5HdlMrBSNFqT/WqPje1uBlqiifmrZn/a96HTz+wJm3l/HGwRyD98OOwq9VPka2NQqdXgp7guJvoa72ZHLOlkhv8XCvdqYVhoxiQRHKUgiRpNyMwwzKyUutB59+7hdsILTrSpwcFvQq2PBlqvAFFdCjEDZgYRGWM6mdmSUlYsovPd9++fX6iyt8KqOd64bqh3AAAAAElFTkSuQmCC",D=""+new URL("../bounce-80abfe50.flac",import.meta.url).href,M=""+new URL("../well-done-8ef5cdf2.ogg",import.meta.url).href,S=(r,i)=>Math.random()*(i-r)+r;class U{constructor(i){const t=document.querySelector(".js_canvas"),{width:o,height:s}=t.getBoundingClientRect();this.width=t.width=o+(i-o%i),this.height=t.height=s+(i-s%i),this.ctx=t.getContext("2d")}}class R{constructor(i,t,o,s){this.ctx=i,this.ctxWidth=t,this.ctxHeight=o,this.width=s,this.height=s}}const Y=""+new URL("../images/snake-sprite-f324a521.png",import.meta.url).href,a=42,f={HEAD:{x1:0,y1:0,x2:a,y2:a},CASUAL_TAIL:{x1:a*2,y1:a*2,x2:a,y2:a},LEFT_BOTTOM_CORNER_TAIL:{x1:a,y1:a,x2:a,y2:a},RIGHT_BOTTOM_CORNER_TAIL:{x1:a*2,y1:a,x2:a,y2:a},END_TAIL:{x1:a,y1:a*2,x2:a,y2:a}};var c,d,y,C,L,F;class G extends R{constructor(t,o,s,e){super(t,o,s,e);l(this,y);l(this,L);l(this,c,0);l(this,d,0);this.movementPower=e,this.bodyLength=1;let n=Math.round((o-this.width)*.5),g=Math.round((s-this.height)*.5);this.directionIsChangedForNextFrame=!1,this.positionX=n-n%e,this.positionY=g-g%e,this.bodyPositionList=[],this.snakeSprite=new Image,this.snakeSprite.src=Y}draw(){m(this,y,C).call(this),m(this,L,F).call(this)}grow(){this.bodyLength++}degradate(){this.bodyLength=1}setDirection(t){if(!(!["ArrowLeft","KeyA","ArrowRight","KeyD","ArrowUp","KeyW","ArrowDown","KeyS"].includes(t)||this.directionIsChangedForNextFrame))switch(this.directionIsChangedForNextFrame=!0,t){case"ArrowLeft":case"KeyA":if(w(this,d,0),h(this,c)===this.movementPower)break;w(this,c,-this.movementPower);break;case"ArrowRight":case"KeyD":if(w(this,d,0),h(this,c)===-this.movementPower)break;w(this,c,this.movementPower);break;case"ArrowUp":case"KeyW":if(w(this,c,0),h(this,d)===this.movementPower)break;w(this,d,-this.movementPower);break;case"ArrowDown":case"KeyS":if(w(this,c,0),h(this,d)===-this.movementPower)break;w(this,d,this.movementPower);break}}}c=new WeakMap,d=new WeakMap,y=new WeakSet,C=function(){this.directionIsChangedForNextFrame=!1;const t=this.positionX+h(this,c),o=this.positionY+h(this,d);t>=this.ctxWidth?this.positionX=0:t<0?this.positionX=this.ctxWidth:this.positionX=t,o>=this.ctxHeight?this.positionY=0:o<0?this.positionY=this.ctxHeight:this.positionY=o},L=new WeakSet,F=function(){this.bodyPositionList.push({x:this.positionX,y:this.positionY,xDirectionBackward:h(this,c)<0,xDirectionForward:h(this,c)>0,yDirectionBackward:h(this,d)<0,yDirectionForward:h(this,d)>0}),this.bodyPositionList.length>this.bodyLength&&(this.bodyPositionList=this.bodyPositionList.slice(-this.bodyLength)),this.bodyPositionList.forEach((t,o)=>{let e=o===this.bodyPositionList.length-1?f.HEAD:f.CASUAL_TAIL;const n=this.bodyPositionList[o+1];n&&(t.yDirectionForward&&n.xDirectionBackward||t.xDirectionForward&&n.yDirectionForward||t.yDirectionBackward&&n.xDirectionForward||t.xDirectionBackward&&n.yDirectionBackward?e=f.RIGHT_BOTTOM_CORNER_TAIL:(t.xDirectionForward&&n.yDirectionBackward||t.yDirectionBackward&&n.xDirectionBackward||t.xDirectionBackward&&n.yDirectionForward||t.yDirectionForward&&n.xDirectionForward)&&(e=f.LEFT_BOTTOM_CORNER_TAIL));let g=t.xDirectionBackward?180:t.xDirectionForward?-180:t.yDirectionBackward?360:0;this.ctx.save(),this.ctx.translate(t.x,t.y),this.ctx.rotate(g*Math.PI/360),this.ctx.drawImage(this.snakeSprite,e.x1,e.y1,e.x2,e.y2,t.xDirectionForward||t.yDirectionBackward?0-a*.5:0,t.xDirectionBackward||t.yDirectionBackward?0-a*.5:0,this.width,this.height),this.ctx.restore()})};class K extends R{constructor(i,t,o,s,e,n,g,u){super(i,s,e,n),this.image=g,this.imageSize=u,this.positionX=t,this.positionY=o}draw(){this.ctx.drawImage(this.image,0,0,this.imageSize,this.imageSize,this.positionX,this.positionY,this.width,this.height)}}var A,p,x,I,B,E,b;class X{constructor(){l(this,E);l(this,A,20);l(this,p,14);l(this,x,3);l(this,I,2);l(this,B,24);const{ctx:i,width:t,height:o}=new U(h(this,A));this.ctx=i,this.ctxWidth=t,this.ctxHeight=o,this.score=0,this.foodList=[],this.interactiveImageList=[],this.interactiveAudioList=[],this.collisionAudio=new Audio,this.collisionAudio.src=D,m(this,E,b).call(this)}addInteractiveElementImage(){[H,V].forEach(i=>{const t=new Image;t.src=i,this.interactiveImageList.push(t)})}addInteractiveElementAudio(){[D,M].forEach(i=>{const t=new Audio;t.src=i,this.interactiveAudioList.push(t)})}addSnake(){this.hero=new G(this.ctx,this.ctxWidth,this.ctxHeight,h(this,A))}addFood(){if(!(this.foodList.length>h(this,x)))for(let i=0;i<h(this,p);++i){const t=Math.round(S(h(this,A),this.ctxWidth-h(this,A))),o=Math.round(S(h(this,A),this.ctxHeight-h(this,A))),s=t-t%h(this,A),e=o-o%h(this,A),n=this.hero.bodyPositionList.find(u=>u.x===s&&u.y===e),g=this.foodList.find(u=>u.positionX===s&&u.positionY===e);if(n||g)return;this.foodList.push(new K(this.ctx,s,e,this.ctxWidth,this.ctxHeight,h(this,A),Math.round(Math.random()*1+1)%2===0?this.interactiveImageList[0]:this.interactiveImageList[1],h(this,B)))}}drawFood(){this.addFood(),this.foodList.length&&this.foodList.forEach(i=>i.draw())}collisionLogic(){const i=this.foodList.findIndex(({positionX:e,positionY:n})=>this.hero.bodyPositionList.at(-1).x===e&&this.hero.bodyPositionList.at(-1).y===n);i!==-1&&(this.foodList.splice(i,1),this.hero.grow(),this.updateScore(!0),this.interactiveAudioList[0].play());const t=this.hero.bodyPositionList.slice(0,this.hero.bodyPositionList.length-1),o=this.hero.bodyPositionList.at(-1);t.some(({x:e,y:n})=>e===o.x&&n===o.y)&&(this.hero.degradate(),this.updateScore(!1),this.interactiveAudioList[1].play())}updateScore(i){i?this.score+=h(this,I):this.score=0,document.querySelector(".js_score").textContent=this.score}draw(){this.ctx.clearRect(0,0,this.ctxWidth,this.ctxHeight),this.drawFood(),this.hero&&this.hero.draw(),this.collisionLogic()}}A=new WeakMap,p=new WeakMap,x=new WeakMap,I=new WeakMap,B=new WeakMap,E=new WeakSet,b=function(){this.addInteractiveElementImage(),this.addInteractiveElementAudio(),this.addSnake()};const v=8;let T=0,k=v;const N=new X;function O(){T++,T%k===0&&N.draw(),requestAnimationFrame(O)}O();window.addEventListener("keydown",r=>{if(r.code==="Space"){k=2;return}N.hero.setDirection(r.code)});window.addEventListener("keyup",r=>{r.code==="Space"&&(k=v)});
