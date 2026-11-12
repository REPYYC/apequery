/* HAUSE 3D stage. Built from hause/src/stage with esbuild + three.js. Do not edit by hand. */
(()=>{var Hd=0,Wh=1,zd=2;var Ga=1,Gd=2,Fo=3,ya=0,es=1,li=2,Ai=0,_a=1,Xn=2,Xh=3,Yh=4,B0=5;var Qs=100,kd=101,Vd=102,Wd=103,Xd=104,ka=200,Yd=201,qd=202,Zd=203,qh=204,Zh=205,kl=206,$d=207,Vl=208,Jd=209,Kd=210,Qd=211,jd=212,ep=213,tp=214,a0=0,o0=1,l0=2,xo=3,c0=4,u0=5,h0=6,f0=7,$h=0,np=1,ip=2,Us=0,Wl=1,Xl=2,Yl=3,Ma=4,ql=5,Zl=6,$l=7;var Jh=300,Ea=301,Va=302,H0=303,z0=304,Jl=306,Qn=1e3,ws=1001,d0=1002,Ri=1003,sp=1004;var Kl=1005;var Ni=1006,G0=1007;var Ur=1008;var zi=1009,Kh=1010,Qh=1011,Oo=1012,k0=1013,xr=1014,js=1015,hi=1016,V0=1017,W0=1018,Sa=1020,jh=35902,ef=35899,tf=1021,nf=1022,rs=1023,Cr=1026,Fr=1027,X0=1028,Y0=1029,ba=1030,q0=1031;var Z0=1033,Ql=33776,jl=33777,ec=33778,tc=33779,$0=35840,J0=35841,K0=35842,Q0=35843,j0=36196,eu=37492,tu=37496,nu=37488,iu=37489,nc=37490,su=37491,ru=37808,au=37809,ou=37810,lu=37811,cu=37812,uu=37813,hu=37814,fu=37815,du=37816,pu=37817,mu=37818,gu=37819,xu=37820,vu=37821,yu=36492,_u=36494,Mu=36495,Eu=36283,Su=36284,ic=36285,bu=36286;var hl=2300,p0=2301,i0=2302,Ph=2303,Ih=2400,Dh=2401,Lh=2402;var rp=3200,sf=3201;var sc=0,ap=1,vr="",bn="srgb",fl="srgb-linear",dl="linear",Bn="srgb";var s0=7680;var op=519,lp=512,cp=513,up=514,Tu=515,hp=516,fp=517,wu=518,dp=519,rf=35044;var af="300 es",gr=2e3,vo=2001;function Km(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Qm(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function pl(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function pp(){let i=pl("canvas");return i.style.display="block",i}var ed={},yo=null;function ml(...i){let e="THREE."+i.shift();yo?yo("log",e,...i):console.log(e,...i)}function mp(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Qt(...i){i=mp(i);let e="THREE."+i.shift();if(yo)yo("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function en(...i){i=mp(i);let e="THREE."+i.shift();if(yo)yo("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Ua(...i){let e=i.join(" ");e in ed||(ed[e]=!0,Qt(...i))}function gp(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var xp={[a0]:o0,[l0]:h0,[c0]:f0,[xo]:u0,[o0]:a0,[h0]:l0,[f0]:c0,[u0]:xo},Pr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},us=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var r0=Math.PI/180,gl=180/Math.PI;function $r(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(us[i&255]+us[i>>8&255]+us[i>>16&255]+us[i>>24&255]+"-"+us[e&255]+us[e>>8&255]+"-"+us[e>>16&15|64]+us[e>>24&255]+"-"+us[t&63|128]+us[t>>8&255]+"-"+us[t>>16&255]+us[t>>24&255]+us[n&255]+us[n>>8&255]+us[n>>16&255]+us[n>>24&255]).toLowerCase()}function wn(i,e,t){return Math.max(e,Math.min(t,i))}function jm(i,e){return(i%e+e)%e}function nh(i,e,t){return(1-t)*i+t*e}function wr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Kn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var ff=class ff{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=wn(this.x,e.x,t.x),this.y=wn(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=wn(this.x,e,t),this.y=wn(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(wn(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(wn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ff.prototype.isVector2=!0;var it=ff,Vn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],d=n[s+3],p=r[a+0],u=r[a+1],f=r[a+2],x=r[a+3];if(d!==x||c!==p||l!==u||h!==f){let g=c*p+l*u+h*f+d*x;g<0&&(p=-p,u=-u,f=-f,x=-x,g=-g);let m=1-o;if(g<.9995){let _=Math.acos(g),b=Math.sin(_);m=Math.sin(m*_)/b,o=Math.sin(o*_)/b,c=c*m+p*o,l=l*m+u*o,h=h*m+f*o,d=d*m+x*o}else{c=c*m+p*o,l=l*m+u*o,h=h*m+f*o,d=d*m+x*o;let _=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=_,l*=_,h*=_,d*=_}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],d=r[a],p=r[a+1],u=r[a+2],f=r[a+3];return e[t]=o*f+h*d+c*u-l*p,e[t+1]=c*f+h*p+l*d-o*u,e[t+2]=l*f+h*u+o*p-c*d,e[t+3]=h*f-o*d-c*p-l*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),d=o(r/2),p=c(n/2),u=c(s/2),f=c(r/2);switch(a){case"XYZ":this._x=p*h*d+l*u*f,this._y=l*u*d-p*h*f,this._z=l*h*f+p*u*d,this._w=l*h*d-p*u*f;break;case"YXZ":this._x=p*h*d+l*u*f,this._y=l*u*d-p*h*f,this._z=l*h*f-p*u*d,this._w=l*h*d+p*u*f;break;case"ZXY":this._x=p*h*d-l*u*f,this._y=l*u*d+p*h*f,this._z=l*h*f+p*u*d,this._w=l*h*d-p*u*f;break;case"ZYX":this._x=p*h*d-l*u*f,this._y=l*u*d+p*h*f,this._z=l*h*f-p*u*d,this._w=l*h*d+p*u*f;break;case"YZX":this._x=p*h*d+l*u*f,this._y=l*u*d+p*h*f,this._z=l*h*f-p*u*d,this._w=l*h*d-p*u*f;break;case"XZY":this._x=p*h*d-l*u*f,this._y=l*u*d-p*h*f,this._z=l*h*f+p*u*d,this._w=l*h*d+p*u*f;break;default:Qt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],d=t[10],p=n+o+d;if(p>0){let u=.5/Math.sqrt(p+1);this._w=.25/u,this._x=(h-c)*u,this._y=(r-l)*u,this._z=(a-s)*u}else if(n>o&&n>d){let u=2*Math.sqrt(1+n-o-d);this._w=(h-c)/u,this._x=.25*u,this._y=(s+a)/u,this._z=(r+l)/u}else if(o>d){let u=2*Math.sqrt(1+o-n-d);this._w=(r-l)/u,this._x=(s+a)/u,this._y=.25*u,this._z=(c+h)/u}else{let u=2*Math.sqrt(1+d-n-o);this._w=(a-s)/u,this._x=(r+l)/u,this._y=(c+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wn(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},df=class df{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(td.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(td.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),h=2*(o*t-r*s),d=2*(r*n-a*t);return this.x=t+c*l+a*d-o*h,this.y=n+c*h+o*l-r*d,this.z=s+c*d+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=wn(this.x,e.x,t.x),this.y=wn(this.y,e.y,t.y),this.z=wn(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=wn(this.x,e,t),this.y=wn(this.y,e,t),this.z=wn(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(wn(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ih.copy(this).projectOnVector(e),this.sub(ih)}reflect(e){return this.sub(ih.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(wn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};df.prototype.isVector3=!0;var F=df,ih=new F,td=new Vn,pf=class pf{constructor(e,t,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],p=n[2],u=n[5],f=n[8],x=s[0],g=s[3],m=s[6],_=s[1],b=s[4],y=s[7],M=s[2],T=s[5],R=s[8];return r[0]=a*x+o*_+c*M,r[3]=a*g+o*b+c*T,r[6]=a*m+o*y+c*R,r[1]=l*x+h*_+d*M,r[4]=l*g+h*b+d*T,r[7]=l*m+h*y+d*R,r[2]=p*x+u*_+f*M,r[5]=p*g+u*b+f*T,r[8]=p*m+u*y+f*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=h*a-o*l,p=o*c-h*r,u=l*r-a*c,f=t*d+n*p+s*u;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/f;return e[0]=d*x,e[1]=(s*l-h*n)*x,e[2]=(o*n-s*a)*x,e[3]=p*x,e[4]=(h*t-s*c)*x,e[5]=(s*r-o*t)*x,e[6]=u*x,e[7]=(n*c-l*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return Ua("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(sh.makeScale(e,t)),this}rotate(e){return Ua("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(sh.makeRotation(-e)),this}translate(e,t){return Ua("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(sh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};pf.prototype.isMatrix3=!0;var fn=pf,sh=new fn,nd=new fn().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),id=new fn().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function e1(){let i={enabled:!0,workingColorSpace:fl,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Bn&&(s.r=Jr(s.r),s.g=Jr(s.g),s.b=Jr(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Bn&&(s.r=go(s.r),s.g=go(s.g),s.b=go(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===vr?dl:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ua("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ua("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[fl]:{primaries:e,whitePoint:n,transfer:dl,toXYZ:nd,fromXYZ:id,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:bn},outputColorSpaceConfig:{drawingBufferColorSpace:bn}},[bn]:{primaries:e,whitePoint:n,transfer:Bn,toXYZ:nd,fromXYZ:id,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:bn}}}),i}var Cn=e1();function Jr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function go(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ka,m0=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ka===void 0&&(Ka=pl("canvas")),Ka.width=e.width,Ka.height=e.height;let s=Ka.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Ka}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=pl("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Jr(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Jr(t[n]/255)*255):t[n]=Jr(t[n]);return{data:t,width:e.width,height:e.height}}else return Qt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},t1=0,_o=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:t1++}),this.uuid=$r(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(rh(s[a].image)):r.push(rh(s[a]))}else r=rh(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function rh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?m0.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Qt("Texture: Unable to serialize Texture."),{})}var n1=0,ah=new F,Ms=class i extends Pr{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=ws,s=ws,r=Ni,a=Ur,o=rs,c=zi,l=i.DEFAULT_ANISOTROPY,h=vr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:n1++}),this.uuid=$r(),this.name="",this.source=new _o(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new fn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ah).x}get height(){return this.source.getSize(ah).y}get depth(){return this.source.getSize(ah).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Qt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Qt(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Jh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Qn:e.x=e.x-Math.floor(e.x);break;case ws:e.x=e.x<0?0:1;break;case d0:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Qn:e.y=e.y-Math.floor(e.y);break;case ws:e.y=e.y<0?0:1;break;case d0:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ms.DEFAULT_IMAGE=null;Ms.DEFAULT_MAPPING=Jh;Ms.DEFAULT_ANISOTROPY=1;var mf=class mf{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],d=c[8],p=c[1],u=c[5],f=c[9],x=c[2],g=c[6],m=c[10];if(Math.abs(h-p)<.01&&Math.abs(d-x)<.01&&Math.abs(f-g)<.01){if(Math.abs(h+p)<.1&&Math.abs(d+x)<.1&&Math.abs(f+g)<.1&&Math.abs(l+u+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(l+1)/2,y=(u+1)/2,M=(m+1)/2,T=(h+p)/4,R=(d+x)/4,v=(f+g)/4;return b>y&&b>M?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=T/n,r=R/n):y>M?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=T/s,r=v/s):M<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),n=R/r,s=v/r),this.set(n,s,r,t),this}let _=Math.sqrt((g-f)*(g-f)+(d-x)*(d-x)+(p-h)*(p-h));return Math.abs(_)<.001&&(_=1),this.x=(g-f)/_,this.y=(d-x)/_,this.z=(p-h)/_,this.w=Math.acos((l+u+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=wn(this.x,e.x,t.x),this.y=wn(this.y,e.y,t.y),this.z=wn(this.z,e.z,t.z),this.w=wn(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=wn(this.x,e,t),this.y=wn(this.y,e,t),this.z=wn(this.z,e,t),this.w=wn(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(wn(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};mf.prototype.isVector4=!0;var ai=mf,g0=class extends Pr{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ni,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ai(0,0,e,t),this.scissorTest=!1,this.viewport=new ai(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new Ms(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Ni,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new _o(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},oi=class extends g0{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},xl=class extends Ms{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ri,this.minFilter=Ri,this.wrapR=ws,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var x0=class extends Ms{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ri,this.minFilter=Ri,this.wrapR=ws,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var O0=class O0{constructor(e,t,n,s,r,a,o,c,l,h,d,p,u,f,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,h,d,p,u,f,x,g)}set(e,t,n,s,r,a,o,c,l,h,d,p,u,f,x,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=c,m[2]=l,m[6]=h,m[10]=d,m[14]=p,m[3]=u,m[7]=f,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new O0().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Qa.setFromMatrixColumn(e,0).length(),r=1/Qa.setFromMatrixColumn(e,1).length(),a=1/Qa.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let p=a*h,u=a*d,f=o*h,x=o*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=u+f*l,t[5]=p-x*l,t[9]=-o*c,t[2]=x-p*l,t[6]=f+u*l,t[10]=a*c}else if(e.order==="YXZ"){let p=c*h,u=c*d,f=l*h,x=l*d;t[0]=p+x*o,t[4]=f*o-u,t[8]=a*l,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=u*o-f,t[6]=x+p*o,t[10]=a*c}else if(e.order==="ZXY"){let p=c*h,u=c*d,f=l*h,x=l*d;t[0]=p-x*o,t[4]=-a*d,t[8]=f+u*o,t[1]=u+f*o,t[5]=a*h,t[9]=x-p*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let p=a*h,u=a*d,f=o*h,x=o*d;t[0]=c*h,t[4]=f*l-u,t[8]=p*l+x,t[1]=c*d,t[5]=x*l+p,t[9]=u*l-f,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let p=a*c,u=a*l,f=o*c,x=o*l;t[0]=c*h,t[4]=x-p*d,t[8]=f*d+u,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=u*d+f,t[10]=p-x*d}else if(e.order==="XZY"){let p=a*c,u=a*l,f=o*c,x=o*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=p*d+x,t[5]=a*h,t[9]=u*d-f,t[2]=f*d-u,t[6]=o*h,t[10]=x*d+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(i1,e,s1)}lookAt(e,t,n){let s=this.elements;return Ps.subVectors(e,t),Ps.lengthSq()===0&&(Ps.z=1),Ps.normalize(),oa.crossVectors(n,Ps),oa.lengthSq()===0&&(Math.abs(n.z)===1?Ps.x+=1e-4:Ps.z+=1e-4,Ps.normalize(),oa.crossVectors(n,Ps)),oa.normalize(),Tc.crossVectors(Ps,oa),s[0]=oa.x,s[4]=Tc.x,s[8]=Ps.x,s[1]=oa.y,s[5]=Tc.y,s[9]=Ps.y,s[2]=oa.z,s[6]=Tc.z,s[10]=Ps.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],p=n[9],u=n[13],f=n[2],x=n[6],g=n[10],m=n[14],_=n[3],b=n[7],y=n[11],M=n[15],T=s[0],R=s[4],v=s[8],A=s[12],I=s[1],G=s[5],w=s[9],U=s[13],N=s[2],H=s[6],$=s[10],z=s[14],q=s[3],Z=s[7],W=s[11],J=s[15];return r[0]=a*T+o*I+c*N+l*q,r[4]=a*R+o*G+c*H+l*Z,r[8]=a*v+o*w+c*$+l*W,r[12]=a*A+o*U+c*z+l*J,r[1]=h*T+d*I+p*N+u*q,r[5]=h*R+d*G+p*H+u*Z,r[9]=h*v+d*w+p*$+u*W,r[13]=h*A+d*U+p*z+u*J,r[2]=f*T+x*I+g*N+m*q,r[6]=f*R+x*G+g*H+m*Z,r[10]=f*v+x*w+g*$+m*W,r[14]=f*A+x*U+g*z+m*J,r[3]=_*T+b*I+y*N+M*q,r[7]=_*R+b*G+y*H+M*Z,r[11]=_*v+b*w+y*$+M*W,r[15]=_*A+b*U+y*z+M*J,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],d=e[6],p=e[10],u=e[14],f=e[3],x=e[7],g=e[11],m=e[15],_=c*u-l*p,b=o*u-l*d,y=o*p-c*d,M=a*u-l*h,T=a*p-c*h,R=a*d-o*h;return t*(x*_-g*b+m*y)-n*(f*_-g*M+m*T)+s*(f*b-x*M+m*R)-r*(f*y-x*T+g*R)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],h=e[10];return t*(a*h-o*l)-n*(r*h-o*c)+s*(r*l-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=e[9],p=e[10],u=e[11],f=e[12],x=e[13],g=e[14],m=e[15],_=t*o-n*a,b=t*c-s*a,y=t*l-r*a,M=n*c-s*o,T=n*l-r*o,R=s*l-r*c,v=h*x-d*f,A=h*g-p*f,I=h*m-u*f,G=d*g-p*x,w=d*m-u*x,U=p*m-u*g,N=_*U-b*w+y*G+M*I-T*A+R*v;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let H=1/N;return e[0]=(o*U-c*w+l*G)*H,e[1]=(s*w-n*U-r*G)*H,e[2]=(x*R-g*T+m*M)*H,e[3]=(p*T-d*R-u*M)*H,e[4]=(c*I-a*U-l*A)*H,e[5]=(t*U-s*I+r*A)*H,e[6]=(g*y-f*R-m*b)*H,e[7]=(h*R-p*y+u*b)*H,e[8]=(a*w-o*I+l*v)*H,e[9]=(n*I-t*w-r*v)*H,e[10]=(f*T-x*y+m*_)*H,e[11]=(d*y-h*T-u*_)*H,e[12]=(o*A-a*G-c*v)*H,e[13]=(t*G-n*A+s*v)*H,e[14]=(x*b-f*M-g*_)*H,e[15]=(h*M-d*b+p*_)*H,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,d=o+o,p=r*l,u=r*h,f=r*d,x=a*h,g=a*d,m=o*d,_=c*l,b=c*h,y=c*d,M=n.x,T=n.y,R=n.z;return s[0]=(1-(x+m))*M,s[1]=(u+y)*M,s[2]=(f-b)*M,s[3]=0,s[4]=(u-y)*T,s[5]=(1-(p+m))*T,s[6]=(g+_)*T,s[7]=0,s[8]=(f+b)*R,s[9]=(g-_)*R,s[10]=(1-(p+x))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Qa.set(s[0],s[1],s[2]).length(),o=Qa.set(s[4],s[5],s[6]).length(),c=Qa.set(s[8],s[9],s[10]).length();r<0&&(a=-a),dr.copy(this);let l=1/a,h=1/o,d=1/c;return dr.elements[0]*=l,dr.elements[1]*=l,dr.elements[2]*=l,dr.elements[4]*=h,dr.elements[5]*=h,dr.elements[6]*=h,dr.elements[8]*=d,dr.elements[9]*=d,dr.elements[10]*=d,t.setFromRotationMatrix(dr),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,s,r,a,o=gr,c=!1){let l=this.elements,h=2*r/(t-e),d=2*r/(n-s),p=(t+e)/(t-e),u=(n+s)/(n-s),f,x;if(c)f=r/(a-r),x=a*r/(a-r);else if(o===gr)f=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===vo)f=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=d,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=gr,c=!1){let l=this.elements,h=2/(t-e),d=2/(n-s),p=-(t+e)/(t-e),u=-(n+s)/(n-s),f,x;if(c)f=1/(a-r),x=a/(a-r);else if(o===gr)f=-2/(a-r),x=-(a+r)/(a-r);else if(o===vo)f=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=p,l[1]=0,l[5]=d,l[9]=0,l[13]=u,l[2]=0,l[6]=0,l[10]=f,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};O0.prototype.isMatrix4=!0;var kt=O0,Qa=new F,dr=new kt,i1=new F(0,0,0),s1=new F(1,1,1),oa=new F,Tc=new F,Ps=new F,sd=new kt,rd=new Vn,Ui=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],d=s[2],p=s[6],u=s[10];switch(t){case"XYZ":this._y=Math.asin(wn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-wn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(wn(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-wn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,u),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(wn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-wn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:Qt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return sd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(sd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return rd.setFromEuler(this),this.setFromQuaternion(rd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ui.DEFAULT_ORDER="XYZ";var Mo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},r1=0,ad=new F,ja=new Vn,Wr=new kt,wc=new F,Qo=new F,a1=new F,o1=new Vn,od=new F(1,0,0),ld=new F(0,1,0),cd=new F(0,0,1),ud={type:"added"},l1={type:"removed"},eo={type:"childadded",child:null},oh={type:"childremoved",child:null},yi=class i extends Pr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:r1++}),this.uuid=$r(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new F,t=new Ui,n=new Vn,s=new F(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new kt},normalMatrix:{value:new fn}}),this.matrix=new kt,this.matrixWorld=new kt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ja.setFromAxisAngle(e,t),this.quaternion.multiply(ja),this}rotateOnWorldAxis(e,t){return ja.setFromAxisAngle(e,t),this.quaternion.premultiply(ja),this}rotateX(e){return this.rotateOnAxis(od,e)}rotateY(e){return this.rotateOnAxis(ld,e)}rotateZ(e){return this.rotateOnAxis(cd,e)}translateOnAxis(e,t){return ad.copy(e).applyQuaternion(this.quaternion),this.position.add(ad.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(od,e)}translateY(e){return this.translateOnAxis(ld,e)}translateZ(e){return this.translateOnAxis(cd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?wc.copy(e):wc.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Qo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wr.lookAt(Qo,wc,this.up):Wr.lookAt(wc,Qo,this.up),this.quaternion.setFromRotationMatrix(Wr),s&&(Wr.extractRotation(s.matrixWorld),ja.setFromRotationMatrix(Wr),this.quaternion.premultiply(ja.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(en("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ud),eo.child=e,this.dispatchEvent(eo),eo.child=null):en("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(l1),oh.child=e,this.dispatchEvent(oh),oh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Wr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ud),eo.child=e,this.dispatchEvent(eo),eo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qo,e,a1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qo,o1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),d=a(e.shapes),p=a(e.skeletons),u=a(e.animations),f=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),p.length>0&&(n.skeletons=p),u.length>0&&(n.animations=u),f.length>0&&(n.nodes=f)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};yi.DEFAULT_UP=new F(0,1,0);yi.DEFAULT_MATRIX_AUTO_UPDATE=!0;yi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var yt=class extends yi{constructor(){super(),this.isGroup=!0,this.type="Group"}},c1={type:"move"},Eo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,n),m=this._getHandJoint(l,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],p=h.position.distanceTo(d.position),u=.02,f=.005;l.inputState.pinching&&p>u+f?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&p<=u-f&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(c1)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new yt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},vp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},la={h:0,s:0,l:0},Rc={h:0,s:0,l:0};function lh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Et=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=bn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Cn.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Cn.workingColorSpace){return this.r=e,this.g=t,this.b=n,Cn.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Cn.workingColorSpace){if(e=jm(e,1),t=wn(t,0,1),n=wn(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=lh(a,r,e+1/3),this.g=lh(a,r,e),this.b=lh(a,r,e-1/3)}return Cn.colorSpaceToWorking(this,s),this}setStyle(e,t=bn){function n(r){r!==void 0&&parseFloat(r)<1&&Qt("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Qt("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Qt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=bn){let n=vp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Qt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Jr(e.r),this.g=Jr(e.g),this.b=Jr(e.b),this}copyLinearToSRGB(e){return this.r=go(e.r),this.g=go(e.g),this.b=go(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bn){return Cn.workingToColorSpace(hs.copy(this),e),Math.round(wn(hs.r*255,0,255))*65536+Math.round(wn(hs.g*255,0,255))*256+Math.round(wn(hs.b*255,0,255))}getHexString(e=bn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Cn.workingColorSpace){Cn.workingToColorSpace(hs.copy(this),t);let n=hs.r,s=hs.g,r=hs.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Cn.workingColorSpace){return Cn.workingToColorSpace(hs.copy(this),t),e.r=hs.r,e.g=hs.g,e.b=hs.b,e}getStyle(e=bn){Cn.workingToColorSpace(hs.copy(this),e);let t=hs.r,n=hs.g,s=hs.b;return e!==bn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(la),this.setHSL(la.h+e,la.s+t,la.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(la),e.getHSL(Rc);let n=nh(la.h,Rc.h,t),s=nh(la.s,Rc.s,t),r=nh(la.l,Rc.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},hs=new Et;Et.NAMES=vp;var vl=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Et(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Fa=class extends yi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ui,this.environmentIntensity=1,this.environmentRotation=new Ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},pr=new F,Xr=new F,ch=new F,Yr=new F,to=new F,no=new F,hd=new F,uh=new F,hh=new F,fh=new F,dh=new ai,ph=new ai,mh=new ai,Rr=class i{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),pr.subVectors(e,t),s.cross(pr);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){pr.subVectors(s,t),Xr.subVectors(n,t),ch.subVectors(e,t);let a=pr.dot(pr),o=pr.dot(Xr),c=pr.dot(ch),l=Xr.dot(Xr),h=Xr.dot(ch),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;let p=1/d,u=(l*c-o*h)*p,f=(a*h-o*c)*p;return r.set(1-u-f,f,u)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Yr)===null?!1:Yr.x>=0&&Yr.y>=0&&Yr.x+Yr.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,Yr)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Yr.x),c.addScaledVector(a,Yr.y),c.addScaledVector(o,Yr.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return dh.setScalar(0),ph.setScalar(0),mh.setScalar(0),dh.fromBufferAttribute(e,t),ph.fromBufferAttribute(e,n),mh.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(dh,r.x),a.addScaledVector(ph,r.y),a.addScaledVector(mh,r.z),a}static isFrontFacing(e,t,n,s){return pr.subVectors(n,t),Xr.subVectors(e,t),pr.cross(Xr).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pr.subVectors(this.c,this.b),Xr.subVectors(this.a,this.b),pr.cross(Xr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;to.subVectors(s,n),no.subVectors(r,n),uh.subVectors(e,n);let c=to.dot(uh),l=no.dot(uh);if(c<=0&&l<=0)return t.copy(n);hh.subVectors(e,s);let h=to.dot(hh),d=no.dot(hh);if(h>=0&&d<=h)return t.copy(s);let p=c*d-h*l;if(p<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(to,a);fh.subVectors(e,r);let u=to.dot(fh),f=no.dot(fh);if(f>=0&&u<=f)return t.copy(r);let x=u*l-c*f;if(x<=0&&l>=0&&f<=0)return o=l/(l-f),t.copy(n).addScaledVector(no,o);let g=h*f-u*d;if(g<=0&&d-h>=0&&u-f>=0)return hd.subVectors(r,s),o=(d-h)/(d-h+(u-f)),t.copy(s).addScaledVector(hd,o);let m=1/(g+x+p);return a=x*m,o=p*m,t.copy(n).addScaledVector(to,a).addScaledVector(no,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ir=class{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(mr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(mr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=mr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,mr):mr.fromBufferAttribute(r,a),mr.applyMatrix4(e.matrixWorld),this.expandByPoint(mr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ac.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ac.copy(n.boundingBox)),Ac.applyMatrix4(e.matrixWorld),this.union(Ac)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,mr),mr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(jo),Cc.subVectors(this.max,jo),io.subVectors(e.a,jo),so.subVectors(e.b,jo),ro.subVectors(e.c,jo),ca.subVectors(so,io),ua.subVectors(ro,so),Ia.subVectors(io,ro);let t=[0,-ca.z,ca.y,0,-ua.z,ua.y,0,-Ia.z,Ia.y,ca.z,0,-ca.x,ua.z,0,-ua.x,Ia.z,0,-Ia.x,-ca.y,ca.x,0,-ua.y,ua.x,0,-Ia.y,Ia.x,0];return!gh(t,io,so,ro,Cc)||(t=[1,0,0,0,1,0,0,0,1],!gh(t,io,so,ro,Cc))?!1:(Pc.crossVectors(ca,ua),t=[Pc.x,Pc.y,Pc.z],gh(t,io,so,ro,Cc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},qr=[new F,new F,new F,new F,new F,new F,new F,new F],mr=new F,Ac=new Ir,io=new F,so=new F,ro=new F,ca=new F,ua=new F,Ia=new F,jo=new F,Cc=new F,Pc=new F,Da=new F;function gh(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Da.fromArray(i,r);let o=s.x*Math.abs(Da.x)+s.y*Math.abs(Da.y)+s.z*Math.abs(Da.z),c=e.dot(Da),l=t.dot(Da),h=n.dot(Da);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Li=new F,Ic=new it,u1=0,Jt=class extends Pr{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:u1++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=rf,this.updateRanges=[],this.gpuType=js,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ic.fromBufferAttribute(this,t),Ic.applyMatrix3(e),this.setXY(t,Ic.x,Ic.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Li.fromBufferAttribute(this,t),Li.applyMatrix3(e),this.setXYZ(t,Li.x,Li.y,Li.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Li.fromBufferAttribute(this,t),Li.applyMatrix4(e),this.setXYZ(t,Li.x,Li.y,Li.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Li.fromBufferAttribute(this,t),Li.applyNormalMatrix(e),this.setXYZ(t,Li.x,Li.y,Li.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Li.fromBufferAttribute(this,t),Li.transformDirection(e),this.setXYZ(t,Li.x,Li.y,Li.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=wr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Kn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=wr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Kn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=wr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Kn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=wr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Kn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=wr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Kn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Kn(t,this.array),n=Kn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Kn(t,this.array),n=Kn(n,this.array),s=Kn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Kn(t,this.array),n=Kn(n,this.array),s=Kn(s,this.array),r=Kn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var yl=class extends Jt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var _l=class extends Jt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Zt=class extends Jt{constructor(e,t,n){super(new Float32Array(e),t,n)}},h1=new Ir,el=new F,xh=new F,Dr=class{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):h1.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;el.subVectors(e,this.center);let t=el.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(el,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(el.copy(e.center).add(xh)),this.expandByPoint(el.copy(e.center).sub(xh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},f1=0,qs=new kt,vh=new yi,ao=new F,Is=new Ir,tl=new Ir,Zi=new F,tn=class i extends Pr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:f1++}),this.uuid=$r(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Km(e)?_l:yl)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new fn().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return qs.makeRotationFromQuaternion(e),this.applyMatrix4(qs),this}rotateX(e){return qs.makeRotationX(e),this.applyMatrix4(qs),this}rotateY(e){return qs.makeRotationY(e),this.applyMatrix4(qs),this}rotateZ(e){return qs.makeRotationZ(e),this.applyMatrix4(qs),this}translate(e,t,n){return qs.makeTranslation(e,t,n),this.applyMatrix4(qs),this}scale(e,t,n){return qs.makeScale(e,t,n),this.applyMatrix4(qs),this}lookAt(e){return vh.lookAt(e),vh.updateMatrix(),this.applyMatrix4(vh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ao).negate(),this.translate(ao.x,ao.y,ao.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Zt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Qt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ir);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){en("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Is.setFromBufferAttribute(r),this.morphTargetsRelative?(Zi.addVectors(this.boundingBox.min,Is.min),this.boundingBox.expandByPoint(Zi),Zi.addVectors(this.boundingBox.max,Is.max),this.boundingBox.expandByPoint(Zi)):(this.boundingBox.expandByPoint(Is.min),this.boundingBox.expandByPoint(Is.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&en('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){en("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){let n=this.boundingSphere.center;if(Is.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];tl.setFromBufferAttribute(o),this.morphTargetsRelative?(Zi.addVectors(Is.min,tl.min),Is.expandByPoint(Zi),Zi.addVectors(Is.max,tl.max),Is.expandByPoint(Zi)):(Is.expandByPoint(tl.min),Is.expandByPoint(tl.max))}Is.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Zi.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Zi));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Zi.fromBufferAttribute(o,l),c&&(ao.fromBufferAttribute(e,l),Zi.add(ao)),s=Math.max(s,n.distanceToSquared(Zi))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&en('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){en("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Jt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let v=0;v<n.count;v++)o[v]=new F,c[v]=new F;let l=new F,h=new F,d=new F,p=new it,u=new it,f=new it,x=new F,g=new F;function m(v,A,I){l.fromBufferAttribute(n,v),h.fromBufferAttribute(n,A),d.fromBufferAttribute(n,I),p.fromBufferAttribute(r,v),u.fromBufferAttribute(r,A),f.fromBufferAttribute(r,I),h.sub(l),d.sub(l),u.sub(p),f.sub(p);let G=1/(u.x*f.y-f.x*u.y);isFinite(G)&&(x.copy(h).multiplyScalar(f.y).addScaledVector(d,-u.y).multiplyScalar(G),g.copy(d).multiplyScalar(u.x).addScaledVector(h,-f.x).multiplyScalar(G),o[v].add(x),o[A].add(x),o[I].add(x),c[v].add(g),c[A].add(g),c[I].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let v=0,A=_.length;v<A;++v){let I=_[v],G=I.start,w=I.count;for(let U=G,N=G+w;U<N;U+=3)m(e.getX(U+0),e.getX(U+1),e.getX(U+2))}let b=new F,y=new F,M=new F,T=new F;function R(v){M.fromBufferAttribute(s,v),T.copy(M);let A=o[v];b.copy(A),b.sub(M.multiplyScalar(M.dot(A))).normalize(),y.crossVectors(T,A);let G=y.dot(c[v])<0?-1:1;a.setXYZW(v,b.x,b.y,b.z,G)}for(let v=0,A=_.length;v<A;++v){let I=_[v],G=I.start,w=I.count;for(let U=G,N=G+w;U<N;U+=3)R(e.getX(U+0)),R(e.getX(U+1)),R(e.getX(U+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Jt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,u=n.count;p<u;p++)n.setXYZ(p,0,0,0);let s=new F,r=new F,a=new F,o=new F,c=new F,l=new F,h=new F,d=new F;if(e)for(let p=0,u=e.count;p<u;p+=3){let f=e.getX(p+0),x=e.getX(p+1),g=e.getX(p+2);s.fromBufferAttribute(t,f),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,g),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,f),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,g),o.add(h),c.add(h),l.add(h),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let p=0,u=t.count;p<u;p+=3)s.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),a.fromBufferAttribute(t,p+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Zi.fromBufferAttribute(e,t),Zi.normalize(),e.setXYZ(t,Zi.x,Zi.y,Zi.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,d=o.normalized,p=new l.constructor(c.length*h),u=0,f=0;for(let x=0,g=c.length;x<g;x++){o.isInterleavedBufferAttribute?u=c[x]*o.data.stride+o.offset:u=c[x]*h;for(let m=0;m<h;m++)p[f++]=l[u++]}return new Jt(p,h,d)}if(this.index===null)return Qt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,d=l.length;h<d;h++){let p=l[h],u=e(p,n);c.push(u)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,p=l.length;d<p;d++){let u=l[d];h.push(u.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],d=r[l];for(let p=0,u=d.length;p<u;p++)h.push(d[p].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ml=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=rf,this.updateRanges=[],this.version=0,this.uuid=$r()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$r()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$r()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},_s=new F,So=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)_s.fromBufferAttribute(this,t),_s.applyMatrix4(e),this.setXYZ(t,_s.x,_s.y,_s.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)_s.fromBufferAttribute(this,t),_s.applyNormalMatrix(e),this.setXYZ(t,_s.x,_s.y,_s.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)_s.fromBufferAttribute(this,t),_s.transformDirection(e),this.setXYZ(t,_s.x,_s.y,_s.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=wr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Kn(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Kn(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Kn(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Kn(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Kn(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=wr(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=wr(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=wr(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=wr(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Kn(t,this.array),n=Kn(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Kn(t,this.array),n=Kn(n,this.array),s=Kn(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Kn(t,this.array),n=Kn(n,this.array),s=Kn(s,this.array),r=Kn(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){ml("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Jt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ml("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},yh=new F,d1=new F,p1=new fn,Ds=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=yh.subVectors(n,t).cross(d1.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(yh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||p1.getNormalMatrix(e),s=this.coplanarPoint(yh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},m1=0,Zs=class extends Pr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:m1++}),this.uuid=$r(),this.name="",this.type="Material",this.blending=_a,this.side=ya,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qh,this.blendDst=Zh,this.blendEquation=Qs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Et(0,0,0),this.blendAlpha=0,this.depthFunc=xo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=op,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=s0,this.stencilZFail=s0,this.stencilZPass=s0,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Qt(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Qt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Et().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Ds().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new it().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new it().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Bi=class extends Zs{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Et(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},oo,nl=new F,lo=new F,co=new F,uo=new it,il=new it,yp=new kt,Dc=new F,sl=new F,Lc=new F,fd=new it,_h=new it,dd=new it,Ji=class extends yi{constructor(e=new Bi){if(super(),this.isSprite=!0,this.type="Sprite",oo===void 0){oo=new tn;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ml(t,5);oo.setIndex([0,1,2,0,2,3]),oo.setAttribute("position",new So(n,3,0,!1)),oo.setAttribute("uv",new So(n,2,3,!1))}this.geometry=oo,this.material=e,this.center=new it(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&en('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),lo.setFromMatrixScale(this.matrixWorld),yp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),co.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&lo.multiplyScalar(-co.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Nc(Dc.set(-.5,-.5,0),co,a,lo,s,r),Nc(sl.set(.5,-.5,0),co,a,lo,s,r),Nc(Lc.set(.5,.5,0),co,a,lo,s,r),fd.set(0,0),_h.set(1,0),dd.set(1,1);let o=e.ray.intersectTriangle(Dc,sl,Lc,!1,nl);if(o===null&&(Nc(sl.set(-.5,.5,0),co,a,lo,s,r),_h.set(0,1),o=e.ray.intersectTriangle(Dc,Lc,sl,!1,nl),o===null))return;let c=e.ray.origin.distanceTo(nl);c<e.near||c>e.far||t.push({distance:c,point:nl.clone(),uv:Rr.getInterpolation(nl,Dc,sl,Lc,fd,_h,dd,new it),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Nc(i,e,t,n,s,r){uo.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(il.x=r*uo.x-s*uo.y,il.y=s*uo.x+r*uo.y):il.copy(uo),i.copy(e),i.x+=il.x,i.y+=il.y,i.applyMatrix4(yp)}var Zr=new F,Mh=new F,Uc=new F,Fc=new F,Oa=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Zr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zr.copy(this.origin).addScaledVector(this.direction,t),Zr.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Mh.copy(e).add(t).multiplyScalar(.5),Uc.copy(t).sub(e).normalize(),Fc.copy(this.origin).sub(Mh);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Uc),o=Fc.dot(this.direction),c=-Fc.dot(Uc),l=Fc.lengthSq(),h=Math.abs(1-a*a),d,p,u,f;if(h>0)if(d=a*c-o,p=a*o-c,f=r*h,d>=0)if(p>=-f)if(p<=f){let x=1/h;d*=x,p*=x,u=d*(d+a*p+2*o)+p*(a*d+p+2*c)+l}else p=r,d=Math.max(0,-(a*p+o)),u=-d*d+p*(p+2*c)+l;else p=-r,d=Math.max(0,-(a*p+o)),u=-d*d+p*(p+2*c)+l;else p<=-f?(d=Math.max(0,-(-a*r+o)),p=d>0?-r:Math.min(Math.max(-r,-c),r),u=-d*d+p*(p+2*c)+l):p<=f?(d=0,p=Math.min(Math.max(-r,-c),r),u=p*(p+2*c)+l):(d=Math.max(0,-(a*r+o)),p=d>0?r:Math.min(Math.max(-r,-c),r),u=-d*d+p*(p+2*c)+l);else p=a>0?-r:r,d=Math.max(0,-(a*p+o)),u=-d*d+p*(p+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Mh).addScaledVector(Uc,p),u}intersectSphere(e,t){if(e.radius<0)return null;Zr.subVectors(e.center,this.origin);let n=Zr.dot(this.direction),s=Zr.dot(Zr)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,p=this.origin;return l>=0?(n=(e.min.x-p.x)*l,s=(e.max.x-p.x)*l):(n=(e.max.x-p.x)*l,s=(e.min.x-p.x)*l),h>=0?(r=(e.min.y-p.y)*h,a=(e.max.y-p.y)*h):(r=(e.max.y-p.y)*h,a=(e.min.y-p.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-p.z)*d,c=(e.max.z-p.z)*d):(o=(e.max.z-p.z)*d,c=(e.min.z-p.z)*d),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Zr)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,d=e.x-a.x,p=e.y-a.y,u=e.z-a.z,f=t.x-a.x,x=t.y-a.y,g=t.z-a.z,m=n.x-a.x,_=n.y-a.y,b=n.z-a.z,y=Math.abs(c),M=Math.abs(l),T=Math.abs(h),R,v,A,I,G,w,U,N,H,$,z,q;if(y>=M&&y>=T?(A=c,w=d,H=f,q=m,c>=0?(R=l,v=h,I=p,G=u,U=x,N=g,$=_,z=b):(R=h,v=l,I=u,G=p,U=g,N=x,$=b,z=_)):M>=T?(A=l,w=p,H=x,q=_,l>=0?(R=h,v=c,I=u,G=d,U=g,N=f,$=b,z=m):(R=c,v=h,I=d,G=u,U=f,N=g,$=m,z=b)):(A=h,w=u,H=g,q=b,h>=0?(R=c,v=l,I=d,G=p,U=f,N=x,$=m,z=_):(R=l,v=c,I=p,G=d,U=x,N=f,$=_,z=m)),A===0)return null;let Z=R/A,W=v/A,J=1/A,me=I-Z*w,Ie=G-W*w,qe=U-Z*H,$e=N-W*H,xt=$-Z*q,re=z-W*q,fe=xt*$e-re*qe,Ue=me*re-Ie*xt,we=qe*Ie-$e*me;if(s){if(fe<0||Ue<0||we<0)return null}else if((fe<0||Ue<0||we<0)&&(fe>0||Ue>0||we>0))return null;let Ve=fe+Ue+we;if(Ve===0)return null;let ie=J*(fe*w+Ue*H+we*q);return(Ve>0?ie<0:ie>0)?null:this.at(ie/Ve,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Wn=class extends Zs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.combine=$h,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},pd=new kt,La=new Oa,Oc=new Dr,md=new F,Bc=new F,Hc=new F,zc=new F,Eh=new F,Gc=new F,gd=new F,kc=new F,Fe=class extends yi{constructor(e=new tn,t=new Wn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Gc.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],d=r[c];h!==0&&(Eh.fromBufferAttribute(d,e),a?Gc.addScaledVector(Eh,h):Gc.addScaledVector(Eh.sub(t),h))}t.add(Gc)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Oc.copy(n.boundingSphere),Oc.applyMatrix4(r),La.copy(e.ray).recast(e.near),!(Oc.containsPoint(La.origin)===!1&&(La.intersectSphere(Oc,md)===null||La.origin.distanceToSquared(md)>(e.far-e.near)**2))&&(pd.copy(r).invert(),La.copy(e.ray).applyMatrix4(pd),!(n.boundingBox!==null&&La.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,La)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,p=r.groups,u=r.drawRange;if(o!==null)if(Array.isArray(a))for(let f=0,x=p.length;f<x;f++){let g=p[f],m=a[g.materialIndex],_=Math.max(g.start,u.start),b=Math.min(o.count,Math.min(g.start+g.count,u.start+u.count));for(let y=_,M=b;y<M;y+=3){let T=o.getX(y),R=o.getX(y+1),v=o.getX(y+2);s=Vc(this,m,e,n,l,h,d,T,R,v),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let f=Math.max(0,u.start),x=Math.min(o.count,u.start+u.count);for(let g=f,m=x;g<m;g+=3){let _=o.getX(g),b=o.getX(g+1),y=o.getX(g+2);s=Vc(this,a,e,n,l,h,d,_,b,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let f=0,x=p.length;f<x;f++){let g=p[f],m=a[g.materialIndex],_=Math.max(g.start,u.start),b=Math.min(c.count,Math.min(g.start+g.count,u.start+u.count));for(let y=_,M=b;y<M;y+=3){let T=y,R=y+1,v=y+2;s=Vc(this,m,e,n,l,h,d,T,R,v),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let f=Math.max(0,u.start),x=Math.min(c.count,u.start+u.count);for(let g=f,m=x;g<m;g+=3){let _=g,b=g+1,y=g+2;s=Vc(this,a,e,n,l,h,d,_,b,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function g1(i,e,t,n,s,r,a,o){let c;if(e.side===es?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===ya,o),c===null)return null;kc.copy(o),kc.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(kc);return l<t.near||l>t.far?null:{distance:l,point:kc.clone(),object:i}}function Vc(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,Bc),i.getVertexPosition(c,Hc),i.getVertexPosition(l,zc);let h=g1(i,e,t,n,Bc,Hc,zc,gd);if(h){let d=new F;Rr.getBarycoord(gd,Bc,Hc,zc,d),s&&(h.uv=Rr.getInterpolatedAttribute(s,o,c,l,d,new it)),r&&(h.uv1=Rr.getInterpolatedAttribute(r,o,c,l,d,new it)),a&&(h.normal=Rr.getInterpolatedAttribute(a,o,c,l,d,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let p={a:o,b:c,c:l,normal:new F,materialIndex:0};Rr.getNormal(Bc,Hc,zc,p.normal),h.face=p,h.barycoord=d}return h}var $s=class extends Ms{constructor(e=null,t=1,n=1,s,r,a,o,c,l=Ri,h=Ri,d,p){super(null,a,o,c,l,h,s,r,d,p),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var bo=class extends Jt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ho=new kt,xd=new kt,Wc=[],vd=new Ir,x1=new kt,rl=new Fe,al=new Dr,Mi=class extends Fe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new bo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,x1)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ir),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ho),vd.copy(e.boundingBox).applyMatrix4(ho),this.boundingBox.union(vd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Dr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ho),al.copy(e.boundingSphere).applyMatrix4(ho),this.boundingSphere.union(al)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(rl.geometry=this.geometry,rl.material=this.material,rl.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),al.copy(this.boundingSphere),al.applyMatrix4(n),e.ray.intersectsSphere(al)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ho),xd.multiplyMatrices(n,ho),rl.matrixWorld=xd,rl.raycast(e,Wc);for(let a=0,o=Wc.length;a<o;a++){let c=Wc[a];c.instanceId=r,c.object=this,t.push(c)}Wc.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new bo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new $s(new Float32Array(s*this.count),s,this.count,X0,js));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Na=new Dr,v1=new it(.5,.5),Xc=new F,To=class{constructor(e=new Ds,t=new Ds,n=new Ds,s=new Ds,r=new Ds,a=new Ds){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=gr,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],d=r[5],p=r[6],u=r[7],f=r[8],x=r[9],g=r[10],m=r[11],_=r[12],b=r[13],y=r[14],M=r[15];if(s[0].setComponents(l-a,u-h,m-f,M-_).normalize(),s[1].setComponents(l+a,u+h,m+f,M+_).normalize(),s[2].setComponents(l+o,u+d,m+x,M+b).normalize(),s[3].setComponents(l-o,u-d,m-x,M-b).normalize(),n)s[4].setComponents(c,p,g,y).normalize(),s[5].setComponents(l-c,u-p,m-g,M-y).normalize();else if(s[4].setComponents(l-c,u-p,m-g,M-y).normalize(),t===gr)s[5].setComponents(l+c,u+p,m+g,M+y).normalize();else if(t===vo)s[5].setComponents(c,p,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Na.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Na.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Na)}intersectsSprite(e){Na.center.set(0,0,0);let t=v1.distanceTo(e.center);return Na.radius=.7071067811865476+t,Na.applyMatrix4(e.matrixWorld),this.intersectsSphere(Na)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Xc.x=s.normal.x>0?e.max.x:e.min.x,Xc.y=s.normal.y>0?e.max.y:e.min.y,Xc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Xc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var fa=class extends Zs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},v0=new F,y0=new F,yd=new kt,ol=new Oa,Yc=new Dr,Sh=new F,_d=new F,_0=class extends yi{constructor(e=new tn,t=new fa){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)v0.fromBufferAttribute(t,s-1),y0.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=v0.distanceTo(y0);e.setAttribute("lineDistance",new Zt(n,1))}else Qt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Yc.copy(n.boundingSphere),Yc.applyMatrix4(s),Yc.radius+=r,e.ray.intersectsSphere(Yc)===!1)return;yd.copy(s).invert(),ol.copy(e.ray).applyMatrix4(yd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,p=n.attributes.position;if(h!==null){let u=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let x=u,g=f-1;x<g;x+=l){let m=h.getX(x),_=h.getX(x+1),b=qc(this,e,ol,c,m,_,x);b&&t.push(b)}if(this.isLineLoop){let x=h.getX(f-1),g=h.getX(u),m=qc(this,e,ol,c,x,g,f-1);m&&t.push(m)}}else{let u=Math.max(0,a.start),f=Math.min(p.count,a.start+a.count);for(let x=u,g=f-1;x<g;x+=l){let m=qc(this,e,ol,c,x,x+1,x);m&&t.push(m)}if(this.isLineLoop){let x=qc(this,e,ol,c,f-1,u,f-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function qc(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(v0.fromBufferAttribute(o,s),y0.fromBufferAttribute(o,r),t.distanceSqToSegment(v0,y0,Sh,_d)>n)return;Sh.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Sh);if(!(l<e.near||l>e.far))return{distance:l,point:_d.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Md=new F,Ed=new F,Lr=class extends _0{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Md.fromBufferAttribute(t,s),Ed.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Md.distanceTo(Ed);e.setAttribute("lineDistance",new Zt(n,1))}else Qt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Hi=class extends Zs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Sd=new kt,Nh=new Oa,Zc=new Dr,$c=new F,Ki=class extends yi{constructor(e=new tn,t=new Hi){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zc.copy(n.boundingSphere),Zc.applyMatrix4(s),Zc.radius+=r,e.ray.intersectsSphere(Zc)===!1)return;Sd.copy(s).invert(),Nh.copy(e.ray).applyMatrix4(Sd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,d=n.attributes.position;if(l!==null){let p=Math.max(0,a.start),u=Math.min(l.count,a.start+a.count);for(let f=p,x=u;f<x;f++){let g=l.getX(f);$c.fromBufferAttribute(d,g),bd($c,g,c,s,e,t,this)}}else{let p=Math.max(0,a.start),u=Math.min(d.count,a.start+a.count);for(let f=p,x=u;f<x;f++)$c.fromBufferAttribute(d,f),bd($c,f,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function bd(i,e,t,n,s,r,a){let o=Nh.distanceSqToPoint(i);if(o<t){let c=new F;Nh.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var El=class extends Ms{constructor(e=[],t=Ea,n,s,r,a,o,c,l,h){super(e,t,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},$n=class extends Ms{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Js=class extends Ms{constructor(e,t,n=xr,s,r,a,o=Ri,c=Ri,l,h=Cr,d=1){if(h!==Cr&&h!==Fr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let p={width:e,height:t,depth:d};super(p,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new _o(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},M0=class extends Js{constructor(e,t=xr,n=Ea,s,r,a=Ri,o=Ri,c,l=Cr){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Sl=class extends Ms{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Rn=class i extends tn{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],d=[],p=0,u=0;f("z","y","x",-1,-1,n,t,e,a,r,0),f("z","y","x",1,-1,n,t,-e,a,r,1),f("x","z","y",1,1,e,n,t,s,a,2),f("x","z","y",1,-1,e,n,-t,s,a,3),f("x","y","z",1,-1,e,t,n,s,r,4),f("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Zt(l,3)),this.setAttribute("normal",new Zt(h,3)),this.setAttribute("uv",new Zt(d,2));function f(x,g,m,_,b,y,M,T,R,v,A){let I=y/R,G=M/v,w=y/2,U=M/2,N=T/2,H=R+1,$=v+1,z=0,q=0,Z=new F;for(let W=0;W<$;W++){let J=W*G-U;for(let me=0;me<H;me++){let Ie=me*I-w;Z[x]=Ie*_,Z[g]=J*b,Z[m]=N,l.push(Z.x,Z.y,Z.z),Z[x]=0,Z[g]=0,Z[m]=T>0?1:-1,h.push(Z.x,Z.y,Z.z),d.push(me/R),d.push(1-W/v),z+=1}}for(let W=0;W<v;W++)for(let J=0;J<R;J++){let me=p+J+H*W,Ie=p+J+H*(W+1),qe=p+(J+1)+H*(W+1),$e=p+(J+1)+H*W;c.push(me,Ie,$e),c.push(Ie,qe,$e),q+=6}o.addGroup(u,q,A),u+=q,p+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var wo=class i extends tn{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],c=[],l=new F,h=new it;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,p=3;d<=t;d++,p+=3){let u=n+d/t*s;l.x=e*Math.cos(u),l.y=e*Math.sin(u),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[p]/e+1)/2,h.y=(a[p+1]/e+1)/2,c.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Zt(a,3)),this.setAttribute("normal",new Zt(o,3)),this.setAttribute("uv",new Zt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},vn=class i extends tn{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],p=[],u=[],f=0,x=[],g=n/2,m=0;_(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new Zt(d,3)),this.setAttribute("normal",new Zt(p,3)),this.setAttribute("uv",new Zt(u,2));function _(){let y=new F,M=new F,T=0,R=(t-e)/n;for(let v=0;v<=r;v++){let A=[],I=v/r,G=I*(t-e)+e;for(let w=0;w<=s;w++){let U=w/s,N=U*c+o,H=Math.sin(N),$=Math.cos(N);M.x=G*H,M.y=-I*n+g,M.z=G*$,d.push(M.x,M.y,M.z),y.set(H,R,$).normalize(),p.push(y.x,y.y,y.z),u.push(U,1-I),A.push(f++)}x.push(A)}for(let v=0;v<s;v++)for(let A=0;A<r;A++){let I=x[A][v],G=x[A+1][v],w=x[A+1][v+1],U=x[A][v+1];(e>0||A!==0)&&(h.push(I,G,U),T+=3),(t>0||A!==r-1)&&(h.push(G,w,U),T+=3)}l.addGroup(m,T,0),m+=T}function b(y){let M=f,T=new it,R=new F,v=0,A=y===!0?e:t,I=y===!0?1:-1;for(let w=1;w<=s;w++)d.push(0,g*I,0),p.push(0,I,0),u.push(.5,.5),f++;let G=f;for(let w=0;w<=s;w++){let N=w/s*c+o,H=Math.cos(N),$=Math.sin(N);R.x=A*$,R.y=g*I,R.z=A*H,d.push(R.x,R.y,R.z),p.push(0,I,0),T.x=H*.5+.5,T.y=$*.5*I+.5,u.push(T.x,T.y),f++}for(let w=0;w<s;w++){let U=M+w,N=G+w;y===!0?h.push(N,N+1,U):h.push(N+1,N,U),v+=3}l.addGroup(m,v,y===!0?1:2),m+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Kr=class i extends vn{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},bl=class i extends tn{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new Zt(r,3)),this.setAttribute("normal",new Zt(r.slice(),3)),this.setAttribute("uv",new Zt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(_){let b=new F,y=new F,M=new F;for(let T=0;T<t.length;T+=3)u(t[T+0],b),u(t[T+1],y),u(t[T+2],M),c(b,y,M,_)}function c(_,b,y,M){let T=M+1,R=[];for(let v=0;v<=T;v++){R[v]=[];let A=_.clone().lerp(y,v/T),I=b.clone().lerp(y,v/T),G=T-v;for(let w=0;w<=G;w++)w===0&&v===T?R[v][w]=A:R[v][w]=A.clone().lerp(I,w/G)}for(let v=0;v<T;v++)for(let A=0;A<2*(T-v)-1;A++){let I=Math.floor(A/2);A%2===0?(p(R[v][I+1]),p(R[v+1][I]),p(R[v][I])):(p(R[v][I+1]),p(R[v+1][I+1]),p(R[v+1][I]))}}function l(_){let b=new F;for(let y=0;y<r.length;y+=3)b.x=r[y+0],b.y=r[y+1],b.z=r[y+2],b.normalize().multiplyScalar(_),r[y+0]=b.x,r[y+1]=b.y,r[y+2]=b.z}function h(){let _=new F;for(let b=0;b<r.length;b+=3){_.x=r[b+0],_.y=r[b+1],_.z=r[b+2];let y=g(_)/2/Math.PI+.5,M=m(_)/Math.PI+.5;a.push(y,1-M)}f(),d()}function d(){for(let _=0;_<a.length;_+=6){let b=a[_+0],y=a[_+2],M=a[_+4],T=Math.max(b,y,M),R=Math.min(b,y,M);T>.9&&R<.1&&(b<.2&&(a[_+0]+=1),y<.2&&(a[_+2]+=1),M<.2&&(a[_+4]+=1))}}function p(_){r.push(_.x,_.y,_.z)}function u(_,b){let y=_*3;b.x=e[y+0],b.y=e[y+1],b.z=e[y+2]}function f(){let _=new F,b=new F,y=new F,M=new F,T=new it,R=new it,v=new it;for(let A=0,I=0;A<r.length;A+=9,I+=6){_.set(r[A+0],r[A+1],r[A+2]),b.set(r[A+3],r[A+4],r[A+5]),y.set(r[A+6],r[A+7],r[A+8]),T.set(a[I+0],a[I+1]),R.set(a[I+2],a[I+3]),v.set(a[I+4],a[I+5]),M.copy(_).add(b).add(y).divideScalar(3);let G=g(M);x(T,I+0,_,G),x(R,I+2,b,G),x(v,I+4,y,G)}}function x(_,b,y,M){M<0&&_.x===1&&(a[b]=_.x-1),y.x===0&&y.z===0&&(a[b]=M/2/Math.PI+.5)}function g(_){return Math.atan2(_.z,-_.x)}function m(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var Jc=new F,Kc=new F,bh=new F,Qc=new Rr,Ro=class extends tn{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let s=Math.pow(10,4),r=Math.cos(r0*t),a=e.getIndex(),o=e.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],h=["a","b","c"],d=new Array(3),p={},u=[];for(let f=0;f<c;f+=3){a?(l[0]=a.getX(f),l[1]=a.getX(f+1),l[2]=a.getX(f+2)):(l[0]=f,l[1]=f+1,l[2]=f+2);let{a:x,b:g,c:m}=Qc;if(x.fromBufferAttribute(o,l[0]),g.fromBufferAttribute(o,l[1]),m.fromBufferAttribute(o,l[2]),Qc.getNormal(bh),d[0]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,d[1]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,d[2]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let _=0;_<3;_++){let b=(_+1)%3,y=d[_],M=d[b],T=Qc[h[_]],R=Qc[h[b]],v=`${y}_${M}`,A=`${M}_${y}`;A in p&&p[A]?(bh.dot(p[A].normal)<=r&&(u.push(T.x,T.y,T.z),u.push(R.x,R.y,R.z)),p[A]=null):v in p||(p[v]={index0:l[_],index1:l[b],normal:bh.clone()})}}for(let f in p)if(p[f]){let{index0:x,index1:g}=p[f];Jc.fromBufferAttribute(o,x),Kc.fromBufferAttribute(o,g),u.push(Jc.x,Jc.y,Jc.z),u.push(Kc.x,Kc.y,Kc.z)}this.setAttribute("position",new Zt(u,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Ls=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Qt("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let h=n[s],p=n[s+1]-h,u=(a-h)/p;return(s+u)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new it:new F);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new F,s=[],r=[],a=[],o=new F,c=new kt;for(let u=0;u<=e;u++){let f=u/e;s[u]=this.getTangentAt(f,new F)}r[0]=new F,a[0]=new F;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),p=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),p<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let u=1;u<=e;u++){if(r[u]=r[u-1].clone(),a[u]=a[u-1].clone(),o.crossVectors(s[u-1],s[u]),o.length()>Number.EPSILON){o.normalize();let f=Math.acos(wn(s[u-1].dot(s[u]),-1,1));r[u].applyMatrix4(c.makeRotationAxis(o,f))}a[u].crossVectors(s[u],r[u])}if(t===!0){let u=Math.acos(wn(r[0].dot(r[e]),-1,1));u/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(u=-u);for(let f=1;f<=e;f++)r[f].applyMatrix4(c.makeRotationAxis(s[f],u*f)),a[f].crossVectors(s[f],r[f])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ao=class extends Ls{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new it){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),p=c-this.aX,u=l-this.aY;c=p*h-u*d+this.aX,l=p*d+u*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},E0=class extends Ao{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function of(){let i=0,e=0,t=0,n=0;function s(r,a,o,c){i=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,d){let p=(a-r)/l-(o-r)/(l+h)+(o-a)/h,u=(o-a)/h-(c-a)/(h+d)+(c-o)/d;p*=h,u*=h,s(a,o,p,u)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var Td=new F,wd=new F,Th=new of,wh=new of,Rh=new of,fs=class extends Ls{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new F){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(wd.subVectors(s[0],s[1]).add(s[0]),l=wd);let d=s[o%r],p=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Td.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Td),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,f=Math.pow(l.distanceToSquared(d),u),x=Math.pow(d.distanceToSquared(p),u),g=Math.pow(p.distanceToSquared(h),u);x<1e-4&&(x=1),f<1e-4&&(f=x),g<1e-4&&(g=x),Th.initNonuniformCatmullRom(l.x,d.x,p.x,h.x,f,x,g),wh.initNonuniformCatmullRom(l.y,d.y,p.y,h.y,f,x,g),Rh.initNonuniformCatmullRom(l.z,d.z,p.z,h.z,f,x,g)}else this.curveType==="catmullrom"&&(Th.initCatmullRom(l.x,d.x,p.x,h.x,this.tension),wh.initCatmullRom(l.y,d.y,p.y,h.y,this.tension),Rh.initCatmullRom(l.z,d.z,p.z,h.z,this.tension));return n.set(Th.calc(c),wh.calc(c),Rh.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new F().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Rd(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,c=i*o;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*o+r*i+t}function y1(i,e){let t=1-i;return t*t*e}function _1(i,e){return 2*(1-i)*i*e}function M1(i,e){return i*i*e}function cl(i,e,t,n){return y1(i,e)+_1(i,t)+M1(i,n)}function E1(i,e){let t=1-i;return t*t*t*e}function S1(i,e){let t=1-i;return 3*t*t*i*e}function b1(i,e){return 3*(1-i)*i*i*e}function T1(i,e){return i*i*i*e}function ul(i,e,t,n,s){return E1(i,e)+S1(i,t)+b1(i,n)+T1(i,s)}var Tl=class extends Ls{constructor(e=new it,t=new it,n=new it,s=new it){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new it){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ul(e,s.x,r.x,a.x,o.x),ul(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},S0=class extends Ls{constructor(e=new F,t=new F,n=new F,s=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new F){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ul(e,s.x,r.x,a.x,o.x),ul(e,s.y,r.y,a.y,o.y),ul(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},wl=class extends Ls{constructor(e=new it,t=new it){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new it){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new it){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},da=class extends Ls{constructor(e=new F,t=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new F){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new F){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Rl=class extends Ls{constructor(e=new it,t=new it,n=new it){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new it){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(cl(e,s.x,r.x,a.x),cl(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Al=class extends Ls{constructor(e=new F,t=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new F){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(cl(e,s.x,r.x,a.x),cl(e,s.y,r.y,a.y),cl(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Cl=class extends Ls{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new it){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(Rd(o,c.x,l.x,h.x,d.x),Rd(o,c.y,l.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new it().fromArray(s))}return this}},b0=Object.freeze({__proto__:null,ArcCurve:E0,CatmullRomCurve3:fs,CubicBezierCurve:Tl,CubicBezierCurve3:S0,EllipseCurve:Ao,LineCurve:wl,LineCurve3:da,QuadraticBezierCurve:Rl,QuadraticBezierCurve3:Al,SplineCurve:Cl}),Co=class extends Ls{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new b0[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new b0[s.type]().fromJSON(s))}return this}},Ks=class extends Co{constructor(e){super(),this.type="Path",this.currentPoint=new it,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new wl(this.currentPoint.clone(),new it(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Rl(this.currentPoint.clone(),new it(e,t),new it(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new Tl(this.currentPoint.clone(),new it(e,t),new it(n,s),new it(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Cl(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,a,o,c),this}absellipse(e,t,n,s,r,a,o,c){let l=new Ao(e,t,n,s,r,a,o,c);if(this.curves.length>0){let d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ei=class extends Ks{constructor(e){super(e),this.uuid=$r(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Ks().fromJSON(s))}return this}};function w1(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=_p(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l;if(n&&(r=I1(i,e,r,t)),i.length>80*t){o=i[0],c=i[1];let h=o,d=c;for(let p=t;p<s;p+=t){let u=i[p],f=i[p+1];u<o&&(o=u),f<c&&(c=f),u>h&&(h=u),f>d&&(d=f)}l=Math.max(h-o,d-c),l=l!==0?32767/l:0}return Pl(r,a,t,o,c,l,0),a}function _p(i,e,t,n,s){let r;if(s===k1(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=Ad(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=Ad(a/n|0,i[a],i[a+1],r);return r&&Po(r,r.next)&&(Dl(r),r=r.next),r}function Ba(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Po(t,t.next)||vi(t.prev,t,t.next)===0)){if(Dl(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Pl(i,e,t,n,s,r,a){if(!i)return;!a&&r&&F1(i,n,s,r);let o=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?A1(i,n,s,r):R1(i)){e.push(c.i,i.i,l.i),Dl(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=C1(Ba(i),e),Pl(i,e,t,n,s,r,2)):a===2&&P1(i,e,t,n,s,r):Pl(Ba(i),e,t,n,s,r,1);break}}}function R1(i){let e=i.prev,t=i,n=i.next;if(vi(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,c=t.y,l=n.y,h=Math.min(s,r,a),d=Math.min(o,c,l),p=Math.max(s,r,a),u=Math.max(o,c,l),f=n.next;for(;f!==e;){if(f.x>=h&&f.x<=p&&f.y>=d&&f.y<=u&&ll(s,o,r,c,a,l,f.x,f.y)&&vi(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function A1(i,e,t,n){let s=i.prev,r=i,a=i.next;if(vi(s,r,a)>=0)return!1;let o=s.x,c=r.x,l=a.x,h=s.y,d=r.y,p=a.y,u=Math.min(o,c,l),f=Math.min(h,d,p),x=Math.max(o,c,l),g=Math.max(h,d,p),m=Uh(u,f,e,t,n),_=Uh(x,g,e,t,n),b=i.prevZ,y=i.nextZ;for(;b&&b.z>=m&&y&&y.z<=_;){if(b.x>=u&&b.x<=x&&b.y>=f&&b.y<=g&&b!==s&&b!==a&&ll(o,h,c,d,l,p,b.x,b.y)&&vi(b.prev,b,b.next)>=0||(b=b.prevZ,y.x>=u&&y.x<=x&&y.y>=f&&y.y<=g&&y!==s&&y!==a&&ll(o,h,c,d,l,p,y.x,y.y)&&vi(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;b&&b.z>=m;){if(b.x>=u&&b.x<=x&&b.y>=f&&b.y<=g&&b!==s&&b!==a&&ll(o,h,c,d,l,p,b.x,b.y)&&vi(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;y&&y.z<=_;){if(y.x>=u&&y.x<=x&&y.y>=f&&y.y<=g&&y!==s&&y!==a&&ll(o,h,c,d,l,p,y.x,y.y)&&vi(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function C1(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Po(n,s)&&Ep(n,t,t.next,s)&&Il(n,s)&&Il(s,n)&&(e.push(n.i,t.i,s.i),Dl(t),Dl(t.next),t=i=s),t=t.next}while(t!==i);return Ba(t)}function P1(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&H1(a,o)){let c=Sp(a,o);a=Ba(a,a.next),c=Ba(c,c.next),Pl(a,e,t,n,s,r,0),Pl(c,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function I1(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,c=r<a-1?e[r+1]*n:i.length,l=_p(i,o,c,n,!1);l===l.next&&(l.steiner=!0),s.push(B1(l))}s.sort(D1);for(let r=0;r<s.length;r++)t=L1(s[r],t);return t}function D1(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function L1(i,e){let t=N1(i,e);if(!t)return e;let n=Sp(t,i);return Ba(n,n.next),Ba(t,t.next)}function N1(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(Po(i,t))return t;do{if(Po(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>r&&(r=d,a=t.x<t.next.x?t:t.next,d===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,c=a.x,l=a.y,h=1/0;t=a;do{if(n>=t.x&&t.x>=c&&n!==t.x&&Mp(s<l?n:r,s,c,l,s<l?r:n,s,t.x,t.y)){let d=Math.abs(s-t.y)/(n-t.x);Il(t,i)&&(d<h||d===h&&(t.x>a.x||t.x===a.x&&U1(a,t)))&&(a=t,h=d)}t=t.next}while(t!==o);return a}function U1(i,e){return vi(i.prev,i,e.prev)<0&&vi(e.next,i,i.next)<0}function F1(i,e,t,n){let s=i;do s.z===0&&(s.z=Uh(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,O1(s)}function O1(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let l=0;l<t&&(o++,a=a.nextZ,!!a);l++);let c=t;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function Uh(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function B1(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Mp(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function ll(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&Mp(i,e,t,n,s,r,a,o)}function H1(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!z1(i,e)&&(Il(i,e)&&Il(e,i)&&G1(i,e)&&(vi(i.prev,i,e.prev)||vi(i,e.prev,e))||Po(i,e)&&vi(i.prev,i,i.next)>0&&vi(e.prev,e,e.next)>0)}function vi(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Po(i,e){return i.x===e.x&&i.y===e.y}function Ep(i,e,t,n){let s=e0(vi(i,e,t)),r=e0(vi(i,e,n)),a=e0(vi(t,n,i)),o=e0(vi(t,n,e));return!!(s!==r&&a!==o||s===0&&jc(i,t,e)||r===0&&jc(i,n,e)||a===0&&jc(t,i,n)||o===0&&jc(t,e,n))}function jc(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function e0(i){return i>0?1:i<0?-1:0}function z1(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Ep(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Il(i,e){return vi(i.prev,i,i.next)<0?vi(i,e,i.next)>=0&&vi(i,i.prev,e)>=0:vi(i,e,i.prev)<0||vi(i,i.next,e)<0}function G1(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Sp(i,e){let t=Fh(i.i,i.x,i.y),n=Fh(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Ad(i,e,t,n){let s=Fh(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Dl(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Fh(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function k1(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Oh=class{static triangulate(e,t,n=2){return w1(e,t,n)}},Ar=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Cd(e),Pd(n,e);let a=e.length;t.forEach(Cd);for(let c=0;c<t.length;c++)s.push(a),a+=t[c].length,Pd(n,t[c]);let o=Oh.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function Cd(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Pd(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Rs=class i extends tn{constructor(e=new Ei([new it(.5,.5),new it(-.5,.5),new it(-.5,-.5),new it(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,c=e.length;o<c;o++){let l=e[o];a(l)}this.setAttribute("position",new Zt(s,3)),this.setAttribute("uv",new Zt(r,2)),this.computeVertexNormals();function a(o){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,p=t.bevelEnabled!==void 0?t.bevelEnabled:!0,u=t.bevelThickness!==void 0?t.bevelThickness:.2,f=t.bevelSize!==void 0?t.bevelSize:u-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:V1,b,y=!1,M,T,R,v;if(m){b=m.getSpacedPoints(h),y=!0,p=!1;let le=m.isCatmullRomCurve3?m.closed:!1;M=m.computeFrenetFrames(h,le),T=new F,R=new F,v=new F}p||(g=0,u=0,f=0,x=0);let A=o.extractPoints(l),I=A.shape,G=A.holes;if(!Ar.isClockWise(I)){I=I.reverse();for(let le=0,ye=G.length;le<ye;le++){let ee=G[le];Ar.isClockWise(ee)&&(G[le]=ee.reverse())}}function U(le){let ee=10000000000000001e-36,ge=le[0];for(let Te=1;Te<=le.length;Te++){let Ze=Te%le.length,Ye=le[Ze],ut=Ye.x-ge.x,ft=Ye.y-ge.y,Q=ut*ut+ft*ft,It=Math.max(Math.abs(Ye.x),Math.abs(Ye.y),Math.abs(ge.x),Math.abs(ge.y)),At=ee*It*It;if(Q<=At){le.splice(Ze,1),Te--;continue}ge=Ye}}U(I),G.forEach(U);let N=G.length,H=I;for(let le=0;le<N;le++){let ye=G[le];I=I.concat(ye)}function $(le,ye,ee){return ye||en("ExtrudeGeometry: vec does not exist"),le.clone().addScaledVector(ye,ee)}let z=I.length;function q(le,ye,ee){let ge,Te,Ze,Ye=le.x-ye.x,ut=le.y-ye.y,ft=ee.x-le.x,Q=ee.y-le.y,It=Ye*Ye+ut*ut,At=Ye*Q-ut*ft;if(Math.abs(At)>Number.EPSILON){let B=Math.sqrt(It),S=Math.sqrt(ft*ft+Q*Q),ue=ye.x-ut/B,ce=ye.y+Ye/B,Me=ee.x-Q/S,st=ee.y+ft/S,nt=((Me-ue)*Q-(st-ce)*ft)/(Ye*Q-ut*ft);ge=ue+Ye*nt-le.x,Te=ce+ut*nt-le.y;let Oe=ge*ge+Te*Te;if(Oe<=2)return new it(ge,Te);Ze=Math.sqrt(Oe/2)}else{let B=!1;Ye>Number.EPSILON?ft>Number.EPSILON&&(B=!0):Ye<-Number.EPSILON?ft<-Number.EPSILON&&(B=!0):Math.sign(ut)===Math.sign(Q)&&(B=!0),B?(ge=-ut,Te=Ye,Ze=Math.sqrt(It)):(ge=Ye,Te=ut,Ze=Math.sqrt(It/2))}return new it(ge/Ze,Te/Ze)}let Z=[];for(let le=0,ye=H.length,ee=ye-1,ge=le+1;le<ye;le++,ee++,ge++)ee===ye&&(ee=0),ge===ye&&(ge=0),Z[le]=q(H[le],H[ee],H[ge]);let W=[],J,me=Z.concat();for(let le=0,ye=N;le<ye;le++){let ee=G[le];J=[];for(let ge=0,Te=ee.length,Ze=Te-1,Ye=ge+1;ge<Te;ge++,Ze++,Ye++)Ze===Te&&(Ze=0),Ye===Te&&(Ye=0),J[ge]=q(ee[ge],ee[Ze],ee[Ye]);W.push(J),me=me.concat(J)}let Ie;if(g===0)Ie=Ar.triangulateShape(H,G);else{let le=[],ye=[];for(let ee=0;ee<g;ee++){let ge=ee/g,Te=u*Math.cos(ge*Math.PI/2),Ze=f*Math.sin(ge*Math.PI/2)+x;for(let Ye=0,ut=H.length;Ye<ut;Ye++){let ft=$(H[Ye],Z[Ye],Ze);Ue(ft.x,ft.y,-Te),ge===0&&le.push(ft)}for(let Ye=0,ut=N;Ye<ut;Ye++){let ft=G[Ye];J=W[Ye];let Q=[];for(let It=0,At=ft.length;It<At;It++){let B=$(ft[It],J[It],Ze);Ue(B.x,B.y,-Te),ge===0&&Q.push(B)}ge===0&&ye.push(Q)}}Ie=Ar.triangulateShape(le,ye)}let qe=Ie.length,$e=f+x;for(let le=0;le<z;le++){let ye=p?$(I[le],me[le],$e):I[le];y?(R.copy(M.normals[0]).multiplyScalar(ye.x),T.copy(M.binormals[0]).multiplyScalar(ye.y),v.copy(b[0]).add(R).add(T),Ue(v.x,v.y,v.z)):Ue(ye.x,ye.y,0)}for(let le=1;le<=h;le++)for(let ye=0;ye<z;ye++){let ee=p?$(I[ye],me[ye],$e):I[ye];y?(R.copy(M.normals[le]).multiplyScalar(ee.x),T.copy(M.binormals[le]).multiplyScalar(ee.y),v.copy(b[le]).add(R).add(T),Ue(v.x,v.y,v.z)):Ue(ee.x,ee.y,d/h*le)}for(let le=g-1;le>=0;le--){let ye=le/g,ee=u*Math.cos(ye*Math.PI/2),ge=f*Math.sin(ye*Math.PI/2)+x;for(let Te=0,Ze=H.length;Te<Ze;Te++){let Ye=$(H[Te],Z[Te],ge);Ue(Ye.x,Ye.y,d+ee)}for(let Te=0,Ze=G.length;Te<Ze;Te++){let Ye=G[Te];J=W[Te];for(let ut=0,ft=Ye.length;ut<ft;ut++){let Q=$(Ye[ut],J[ut],ge);y?Ue(Q.x,Q.y+b[h-1].y,b[h-1].x+ee):Ue(Q.x,Q.y,d+ee)}}}xt(),re();function xt(){let le=s.length/3;if(p){let ye=0,ee=z*ye;for(let ge=0;ge<qe;ge++){let Te=Ie[ge];we(Te[2]+ee,Te[1]+ee,Te[0]+ee)}ye=h+g*2,ee=z*ye;for(let ge=0;ge<qe;ge++){let Te=Ie[ge];we(Te[0]+ee,Te[1]+ee,Te[2]+ee)}}else{for(let ye=0;ye<qe;ye++){let ee=Ie[ye];we(ee[2],ee[1],ee[0])}for(let ye=0;ye<qe;ye++){let ee=Ie[ye];we(ee[0]+z*h,ee[1]+z*h,ee[2]+z*h)}}n.addGroup(le,s.length/3-le,0)}function re(){let le=s.length/3,ye=0;fe(H,ye),ye+=H.length;for(let ee=0,ge=G.length;ee<ge;ee++){let Te=G[ee];fe(Te,ye),ye+=Te.length}n.addGroup(le,s.length/3-le,1)}function fe(le,ye){let ee=le.length;for(;--ee>=0;){let ge=ee,Te=ee-1;Te<0&&(Te=le.length-1);for(let Ze=0,Ye=h+g*2;Ze<Ye;Ze++){let ut=z*Ze,ft=z*(Ze+1),Q=ye+ge+ut,It=ye+Te+ut,At=ye+Te+ft,B=ye+ge+ft;Ve(Q,It,At,B)}}}function Ue(le,ye,ee){c.push(le),c.push(ye),c.push(ee)}function we(le,ye,ee){ie(le),ie(ye),ie(ee);let ge=s.length/3,Te=_.generateTopUV(n,s,ge-3,ge-2,ge-1);Qe(Te[0]),Qe(Te[1]),Qe(Te[2])}function Ve(le,ye,ee,ge){ie(le),ie(ye),ie(ge),ie(ye),ie(ee),ie(ge);let Te=s.length/3,Ze=_.generateSideWallUV(n,s,Te-6,Te-3,Te-2,Te-1);Qe(Ze[0]),Qe(Ze[1]),Qe(Ze[3]),Qe(Ze[1]),Qe(Ze[2]),Qe(Ze[3])}function ie(le){s.push(c[le*3+0]),s.push(c[le*3+1]),s.push(c[le*3+2])}function Qe(le){r.push(le.x),r.push(le.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return W1(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new b0[s.type]().fromJSON(s)),new i(n,e.options)}},V1={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],c=e[n*3+1],l=e[s*3],h=e[s*3+1];return[new it(r,a),new it(o,c),new it(l,h)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],d=e[n*3+2],p=e[s*3],u=e[s*3+1],f=e[s*3+2],x=e[r*3],g=e[r*3+1],m=e[r*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new it(a,1-c),new it(l,1-d),new it(p,1-f),new it(x,1-m)]:[new it(o,1-c),new it(h,1-d),new it(u,1-f),new it(g,1-m)]}};function W1(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Nr=class i extends bl{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Ll=class i extends tn{constructor(e=[new it(0,-.5),new it(.5,0),new it(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=wn(s,0,Math.PI*2);let r=[],a=[],o=[],c=[],l=[],h=1/t,d=new F,p=new it,u=new F,f=new F,x=new F,g=0,m=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:g=e[_+1].x-e[_].x,m=e[_+1].y-e[_].y,u.x=m*1,u.y=-g,u.z=m*0,x.copy(u),u.normalize(),c.push(u.x,u.y,u.z);break;case e.length-1:c.push(x.x,x.y,x.z);break;default:g=e[_+1].x-e[_].x,m=e[_+1].y-e[_].y,u.x=m*1,u.y=-g,u.z=m*0,f.copy(u),u.x+=x.x,u.y+=x.y,u.z+=x.z,u.normalize(),c.push(u.x,u.y,u.z),x.copy(f)}for(let _=0;_<=t;_++){let b=n+_*h*s,y=Math.sin(b),M=Math.cos(b);for(let T=0;T<=e.length-1;T++){d.x=e[T].x*y,d.y=e[T].y,d.z=e[T].x*M,a.push(d.x,d.y,d.z),p.x=_/t,p.y=T/(e.length-1),o.push(p.x,p.y);let R=c[3*T+0]*y,v=c[3*T+1],A=c[3*T+0]*M;l.push(R,v,A)}}for(let _=0;_<t;_++)for(let b=0;b<e.length-1;b++){let y=b+_*e.length,M=y,T=y+e.length,R=y+e.length+1,v=y+1;r.push(M,T,v),r.push(R,v,T)}this.setIndex(r),this.setAttribute("position",new Zt(a,3)),this.setAttribute("uv",new Zt(o,2)),this.setAttribute("normal",new Zt(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},Nl=class i extends bl{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},an=class i extends tn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,d=e/o,p=t/c,u=[],f=[],x=[],g=[];for(let m=0;m<h;m++){let _=m*p-a;for(let b=0;b<l;b++){let y=b*d-r;f.push(y,-_,0),x.push(0,0,1),g.push(b/o),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let _=0;_<o;_++){let b=_+l*m,y=_+l*(m+1),M=_+1+l*(m+1),T=_+1+l*m;u.push(b,y,T),u.push(y,M,T)}this.setIndex(u),this.setAttribute("position",new Zt(f,3)),this.setAttribute("normal",new Zt(x,3)),this.setAttribute("uv",new Zt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Ha=class i extends tn{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],c=[],l=[],h=[],d=e,p=(t-e)/s,u=new F,f=new it;for(let x=0;x<=s;x++){for(let g=0;g<=n;g++){let m=r+g/n*a;u.x=d*Math.cos(m),u.y=d*Math.sin(m),c.push(u.x,u.y,u.z),l.push(0,0,1),f.x=(u.x/t+1)/2,f.y=(u.y/t+1)/2,h.push(f.x,f.y)}d+=p}for(let x=0;x<s;x++){let g=x*(n+1);for(let m=0;m<n;m++){let _=m+g,b=_,y=_+n+1,M=_+n+2,T=_+1;o.push(b,y,T),o.push(y,M,T)}}this.setIndex(o),this.setAttribute("position",new Zt(c,3)),this.setAttribute("normal",new Zt(l,3)),this.setAttribute("uv",new Zt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},pa=class i extends tn{constructor(e=new Ei([new it(0,.5),new it(-.5,-.5),new it(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],a=[],o=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(o,c,h),o+=c,c=0;this.setIndex(n),this.setAttribute("position",new Zt(s,3)),this.setAttribute("normal",new Zt(r,3)),this.setAttribute("uv",new Zt(a,2));function l(h){let d=s.length/3,p=h.extractPoints(t),u=p.shape,f=p.holes;Ar.isClockWise(u)===!1&&(u=u.reverse());for(let g=0,m=f.length;g<m;g++){let _=f[g];Ar.isClockWise(_)===!0&&(f[g]=_.reverse())}let x=Ar.triangulateShape(u,f);for(let g=0,m=f.length;g<m;g++){let _=f[g];u=u.concat(_)}for(let g=0,m=u.length;g<m;g++){let _=u[g];s.push(_.x,_.y,0),r.push(0,0,1),a.push(_.x,_.y)}for(let g=0,m=x.length;g<m;g++){let _=x[g],b=_[0]+d,y=_[1]+d,M=_[2]+d;n.push(b,y,M),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return X1(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];n.push(a)}return new i(n,e.curveSegments)}};function X1(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var jn=class i extends tn{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],d=new F,p=new F,u=[],f=[],x=[],g=[];for(let m=0;m<=n;m++){let _=[],b=m/n,y=a+b*o,M=e*Math.cos(y),T=Math.sqrt(e*e-M*M),R=0;m===0&&a===0?R=.5/t:m===n&&c===Math.PI&&(R=-.5/t);for(let v=0;v<=t;v++){let A=v/t,I=s+A*r;d.x=-T*Math.cos(I),d.y=M,d.z=T*Math.sin(I),f.push(d.x,d.y,d.z),p.copy(d).normalize(),x.push(p.x,p.y,p.z),g.push(A+R,1-b),_.push(l++)}h.push(_)}for(let m=0;m<n;m++)for(let _=0;_<t;_++){let b=h[m][_+1],y=h[m][_],M=h[m+1][_],T=h[m+1][_+1];(m!==0||a>0)&&u.push(b,y,T),(m!==n-1||c<Math.PI)&&u.push(y,M,T)}this.setIndex(u),this.setAttribute("position",new Zt(f,3)),this.setAttribute("normal",new Zt(x,3)),this.setAttribute("uv",new Zt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Qi=class i extends tn{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let c=[],l=[],h=[],d=[],p=new F,u=new F,f=new F;for(let x=0;x<=n;x++){let g=a+x/n*o;for(let m=0;m<=s;m++){let _=m/s*r;u.x=(e+t*Math.cos(g))*Math.cos(_),u.y=(e+t*Math.cos(g))*Math.sin(_),u.z=t*Math.sin(g),l.push(u.x,u.y,u.z),p.x=e*Math.cos(_),p.y=e*Math.sin(_),f.subVectors(u,p).normalize(),h.push(f.x,f.y,f.z),d.push(m/s),d.push(x/n)}}for(let x=1;x<=n;x++)for(let g=1;g<=s;g++){let m=(s+1)*x+g-1,_=(s+1)*(x-1)+g-1,b=(s+1)*(x-1)+g,y=(s+1)*x+g;c.push(m,_,y),c.push(_,b,y)}this.setIndex(c),this.setAttribute("position",new Zt(l,3)),this.setAttribute("normal",new Zt(h,3)),this.setAttribute("uv",new Zt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var ds=class i extends tn{constructor(e=new Al(new F(-1,-1,0),new F(-1,1,0),new F(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new F,c=new F,l=new it,h=new F,d=[],p=[],u=[],f=[];x(),this.setIndex(f),this.setAttribute("position",new Zt(d,3)),this.setAttribute("normal",new Zt(p,3)),this.setAttribute("uv",new Zt(u,2));function x(){for(let b=0;b<t;b++)g(b);g(r===!1?t:0),_(),m()}function g(b){h=e.getPointAt(b/t,h);let y=a.normals[b],M=a.binormals[b];for(let T=0;T<=s;T++){let R=T/s*Math.PI*2,v=Math.sin(R),A=-Math.cos(R);c.x=A*y.x+v*M.x,c.y=A*y.y+v*M.y,c.z=A*y.z+v*M.z,c.normalize(),p.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,d.push(o.x,o.y,o.z)}}function m(){for(let b=1;b<=t;b++)for(let y=1;y<=s;y++){let M=(s+1)*(b-1)+(y-1),T=(s+1)*b+(y-1),R=(s+1)*b+y,v=(s+1)*(b-1)+y;f.push(M,T,v),f.push(T,R,v)}}function _(){for(let b=0;b<=t;b++)for(let y=0;y<=s;y++)l.x=b/t,l.y=y/s,u.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new b0[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function Wa(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Id(s))s.isRenderTargetTexture?(Qt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Id(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function ms(i){let e={};for(let t=0;t<i.length;t++){let n=Wa(i[t]);for(let s in n)e[s]=n[s]}return e}function Id(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Y1(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function lf(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Cn.workingColorSpace}var Es={clone:Wa,merge:ms},q1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Z1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Nn=class extends Zs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=q1,this.fragmentShader=Z1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Wa(e.uniforms),this.uniformsGroups=Y1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Et().setHex(s.value);break;case"v2":this.uniforms[n].value=new it().fromArray(s.value);break;case"v3":this.uniforms[n].value=new F().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ai().fromArray(s.value);break;case"m3":this.uniforms[n].value=new fn().fromArray(s.value);break;case"m4":this.uniforms[n].value=new kt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Io=class extends Nn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},cn=class extends Zs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sc,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ji=class extends cn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new it(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return wn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Et(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Et(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Et(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Ul=class extends Zs{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sc,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};var Do=class extends Zs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},T0=class extends Zs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function fo(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Ah(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var ma=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},w0=class extends ma{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ih,endingEnd:Ih}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Dh:r=e,o=2*t-n;break;case Lh:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Dh:a=e,c=2*n-t;break;case Lh:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,d=this._offsetNext,p=this._weightPrev,u=this._weightNext,f=(n-t)/(s-t),x=f*f,g=x*f,m=-p*g+2*p*x-p*f,_=(1+p)*g+(-1.5-2*p)*x+(-.5+p)*f+1,b=(-1-u)*g+(1.5+u)*x+.5*f,y=u*g-u*x;for(let M=0;M!==o;++M)r[M]=m*a[h+M]+_*a[l+M]+b*a[c+M]+y*a[d+M];return r}},R0=class extends ma{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(s-t),d=1-h;for(let p=0;p!==o;++p)r[p]=a[l+p]*d+a[c+p]*h;return r}},A0=class extends ma{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},C0=class extends ma{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let f=(n-t)/(s-t),x=1-f;for(let g=0;g!==o;++g)r[g]=a[l+g]*x+a[c+g]*f;return r}let p=o*2,u=e-1;for(let f=0;f!==o;++f){let x=a[l+f],g=a[c+f],m=u*p+f*2,_=d[m],b=d[m+1],y=e*p+f*2,M=h[y],T=h[y+1],R=J1(n,t,_,M,s);r[f]=bp(R,x,b,T,g)}return r}};function bp(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function $1(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function J1(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=bp(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let c=$1(r,e,t,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var Ns=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=fo(t,this.TimeBufferType),this.values=fo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:fo(e.times,Array),values:fo(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Ah(e.settings)&&(n.settings={inTangents:fo(e.settings.inTangents,Array),outTangents:fo(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new A0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new R0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new w0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new C0(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case hl:t=this.InterpolantFactoryMethodDiscrete;break;case p0:t=this.InterpolantFactoryMethodLinear;break;case i0:t=this.InterpolantFactoryMethodSmooth;break;case Ph:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Qt("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return hl;case this.InterpolantFactoryMethodLinear:return p0;case this.InterpolantFactoryMethodSmooth:return i0;case this.InterpolantFactoryMethodBezier:return Ph}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Ah(this.settings)&&(Dd(this.settings.inTangents,e),Dd(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(en("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(en("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){en("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){en("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&Qm(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){en("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===i0,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(s)c=!0;else{let d=o*n,p=d-n,u=d+n;for(let f=0;f!==n;++f){let x=t[d+f];if(x!==t[p+f]||x!==t[u+f]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let d=o*n,p=a*n;for(let u=0;u!==n;++u)t[p+u]=t[d+u]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Ah(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Dd(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Ns.prototype.ValueTypeName="";Ns.prototype.TimeBufferType=Float32Array;Ns.prototype.ValueBufferType=Float32Array;Ns.prototype.DefaultInterpolation=p0;var ga=class extends Ns{constructor(e,t,n){super(e,t,n)}};ga.prototype.ValueTypeName="bool";ga.prototype.ValueBufferType=Array;ga.prototype.DefaultInterpolation=hl;ga.prototype.InterpolantFactoryMethodLinear=void 0;ga.prototype.InterpolantFactoryMethodSmooth=void 0;var P0=class extends Ns{constructor(e,t,n,s){super(e,t,n,s)}};P0.prototype.ValueTypeName="color";var I0=class extends Ns{constructor(e,t,n,s){super(e,t,n,s)}};I0.prototype.ValueTypeName="number";var D0=class extends ma{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),l=e*o;for(let h=l+o;l!==h;l+=4)Vn.slerpFlat(r,0,a,l-o,a,l,c);return r}},Fl=class extends Ns{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new D0(this.times,this.values,this.getValueSize(),e)}};Fl.prototype.ValueTypeName="quaternion";Fl.prototype.InterpolantFactoryMethodSmooth=void 0;var xa=class extends Ns{constructor(e,t,n){super(e,t,n)}};xa.prototype.ValueTypeName="string";xa.prototype.ValueBufferType=Array;xa.prototype.DefaultInterpolation=hl;xa.prototype.InterpolantFactoryMethodLinear=void 0;xa.prototype.InterpolantFactoryMethodSmooth=void 0;var L0=class extends Ns{constructor(e,t,n,s){super(e,t,n,s)}};L0.prototype.ValueTypeName="vector";var N0=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,p=l.length;d<p;d+=2){let u=l[d],f=l[d+1];if(u.global&&(u.lastIndex=0),u.test(h))return f}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Tp=new N0,U0=class{constructor(e){this.manager=e!==void 0?e:Tp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};U0.DEFAULT_MATERIAL_NAME="__DEFAULT";var za=class extends yi{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Et(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Ol=class extends za{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(yi.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Et(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Ch=new kt,Ld=new F,Nd=new F,Lo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new it(512,512),this.mapType=zi,this.map=null,this.mapPass=null,this.matrix=new kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new To,this._frameExtents=new it(1,1),this._viewportCount=1,this._viewports=[new ai(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Ld.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ld),Nd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Nd),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Ch.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Ch,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===vo||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(Ch)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},t0=new F,n0=new Vn,Tr=new F,Bl=class extends yi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new kt,this.projectionMatrix=new kt,this.projectionMatrixInverse=new kt,this.coordinateSystem=gr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(t0,n0,Tr),Tr.x===1&&Tr.y===1&&Tr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(t0,n0,Tr.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(t0,n0,Tr),Tr.x===1&&Tr.y===1&&Tr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(t0,n0,Tr.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ha=new F,Ud=new it,Fd=new it,$i=class extends Bl{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=gl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(r0*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return gl*2*Math.atan(Math.tan(r0*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ha.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ha.x,ha.y).multiplyScalar(-e/ha.z),ha.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ha.x,ha.y).multiplyScalar(-e/ha.z)}getViewSize(e,t){return this.getViewBounds(e,Ud,Fd),t.subVectors(Fd,Ud)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(r0*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Bh=class extends Lo{constructor(){super(new $i(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=gl*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Hl=class extends za{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(yi.DEFAULT_UP),this.updateMatrix(),this.target=new yi,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Bh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Hh=class extends Lo{constructor(){super(new $i(90,1,.5,500)),this.isPointLightShadow=!0}},ps=class extends za{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Hh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},va=class extends Bl{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},zh=class extends Lo{constructor(){super(new va(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},No=class extends za{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yi.DEFAULT_UP),this.updateMatrix(),this.target=new yi,this.shadow=new zh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var po=-90,mo=1,Uo=class extends yi{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new $i(po,mo,e,t);s.layers=this.layers,this.add(s);let r=new $i(po,mo,e,t);r.layers=this.layers,this.add(r);let a=new $i(po,mo,e,t);a.layers=this.layers,this.add(a);let o=new $i(po,mo,e,t);o.layers=this.layers,this.add(o);let c=new $i(po,mo,e,t);c.layers=this.layers,this.add(c);let l=new $i(po,mo,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===gr)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===vo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,d=e.getRenderTarget(),p=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,p,u),e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}},F0=class extends $i{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},zl=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=K1.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function K1(){this._document.hidden===!1&&this.reset()}var cf="\\[\\]\\.:\\/",Q1=new RegExp("["+cf+"]","g"),uf="[^"+cf+"]",j1="[^"+cf.replace("\\.","")+"]",eg=/((?:WC+[\/:])*)/.source.replace("WC",uf),tg=/(WCOD+)?/.source.replace("WCOD",j1),ng=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",uf),ig=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",uf),sg=new RegExp("^"+eg+tg+ng+ig+"$"),rg=["material","materials","bones","map"],Gh=class{constructor(e,t,n){let s=n||ui.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ui=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Q1,"")}static parseTrackName(e){let t=sg.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);rg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Qt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){en("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){en("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){en("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){en("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){en("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){en("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){en("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;en("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){en("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){en("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ui.Composite=Gh;ui.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ui.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ui.prototype.GetterByBindingType=[ui.prototype._getValue_direct,ui.prototype._getValue_array,ui.prototype._getValue_arrayElement,ui.prototype._getValue_toArray];ui.prototype.SetterByBindingTypeAndVersioning=[[ui.prototype._setValue_direct,ui.prototype._setValue_direct_setNeedsUpdate,ui.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ui.prototype._setValue_array,ui.prototype._setValue_array_setNeedsUpdate,ui.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ui.prototype._setValue_arrayElement,ui.prototype._setValue_arrayElement_setNeedsUpdate,ui.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ui.prototype._setValue_fromArray,ui.prototype._setValue_fromArray_setNeedsUpdate,ui.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var y_=new Float32Array(1);var Od=new kt,Gl=class{constructor(e,t,n=0,s=1/0){this.ray=new Oa(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Mo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):en("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Od.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Od),this}intersectObject(e,t=!0,n=[]){return kh(e,this,n,t),n.sort(Bd),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)kh(e[s],this,n,t);return n.sort(Bd),n}};function Bd(i,e){return i.distance-e.distance}function kh(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)kh(r[a],e,t,!0)}}var gf=class gf{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};gf.prototype.isMatrix2=!0;var Vh=gf;function hf(i,e,t,n){let s=ag(n);switch(t){case tf:return i*e;case X0:return i*e/s.components*s.byteLength;case Y0:return i*e/s.components*s.byteLength;case ba:return i*e*2/s.components*s.byteLength;case q0:return i*e*2/s.components*s.byteLength;case nf:return i*e*3/s.components*s.byteLength;case rs:return i*e*4/s.components*s.byteLength;case Z0:return i*e*4/s.components*s.byteLength;case Ql:case jl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ec:case tc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case J0:case Q0:return Math.max(i,16)*Math.max(e,8)/4;case $0:case K0:return Math.max(i,8)*Math.max(e,8)/2;case j0:case eu:case nu:case iu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case tu:case nc:case su:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ru:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case au:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ou:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case lu:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case cu:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case uu:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case hu:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case fu:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case du:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case pu:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case mu:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case gu:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case xu:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case vu:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case yu:case _u:case Mu:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Eu:case Su:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ic:case bu:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ag(i){switch(i){case zi:case Kh:return{byteLength:1,components:1};case Oo:case Qh:case hi:return{byteLength:2,components:1};case V0:case W0:return{byteLength:2,components:4};case xr:case k0:case js:return{byteLength:4,components:1};case jh:case ef:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Qt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function qp(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function hg(i){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,d=l.byteLength,p=i.createBuffer();i.bindBuffer(c,p),i.bufferData(c,l,h),o.onUploadCallback();let u;if(l instanceof Float32Array)u=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)u=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)u=i.SHORT;else if(l instanceof Uint32Array)u=i.UNSIGNED_INT;else if(l instanceof Int32Array)u=i.INT;else if(l instanceof Int8Array)u=i.BYTE;else if(l instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:p,type:u,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){let h=c.array,d=c.updateRanges;if(i.bindBuffer(l,o),d.length===0)i.bufferSubData(l,0,h);else{d.sort((u,f)=>u.start-f.start);let p=0;for(let u=1;u<d.length;u++){let f=d[p],x=d[u];x.start<=f.start+f.count+1?f.count=Math.max(f.count,x.start+x.count-f.start):(++p,d[p]=x)}d.length=p+1;for(let u=0,f=d.length;u<f;u++){let x=d[u];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var fg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,dg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,pg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,yg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_g=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Mg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Eg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Sg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Tg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,wg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Rg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ag=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Pg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ig=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Dg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Lg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ng=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Ug=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Fg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Og=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Bg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Wg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Xg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Yg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,qg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,$g=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Kg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,e2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,t2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,n2=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,i2=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,s2=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,r2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,a2=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,o2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,l2=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,c2=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,u2=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,h2=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,f2=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,d2=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,p2=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,m2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,g2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,x2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,v2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,y2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,M2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,E2=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,S2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,b2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,T2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,w2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,R2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,A2=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,C2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,P2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,I2=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,D2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,L2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,N2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,U2=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,F2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,O2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,B2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,H2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,z2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,G2=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,k2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,V2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,W2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,X2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Y2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,q2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Z2=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,$2=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,J2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,K2=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Q2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,j2=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ex=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,nx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ix=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ax=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ox=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,lx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ux=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,hx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,fx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,px=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,yx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,_x=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Mx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Ex=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Tx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Rx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ax=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Px=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ix=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Lx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Nx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ux=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ox=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Gx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Wx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Xx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,_n={alphahash_fragment:fg,alphahash_pars_fragment:dg,alphamap_fragment:pg,alphamap_pars_fragment:mg,alphatest_fragment:gg,alphatest_pars_fragment:xg,aomap_fragment:vg,aomap_pars_fragment:yg,batching_pars_vertex:_g,batching_vertex:Mg,begin_vertex:Eg,beginnormal_vertex:Sg,bsdfs:bg,iridescence_fragment:Tg,bumpmap_pars_fragment:wg,clipping_planes_fragment:Rg,clipping_planes_pars_fragment:Ag,clipping_planes_pars_vertex:Cg,clipping_planes_vertex:Pg,color_fragment:Ig,color_pars_fragment:Dg,color_pars_vertex:Lg,color_vertex:Ng,common:Ug,cube_uv_reflection_fragment:Fg,defaultnormal_vertex:Og,displacementmap_pars_vertex:Bg,displacementmap_vertex:Hg,emissivemap_fragment:zg,emissivemap_pars_fragment:Gg,colorspace_fragment:kg,colorspace_pars_fragment:Vg,envmap_fragment:Wg,envmap_common_pars_fragment:Xg,envmap_pars_fragment:Yg,envmap_pars_vertex:qg,envmap_physical_pars_fragment:s2,envmap_vertex:Zg,fog_vertex:$g,fog_pars_vertex:Jg,fog_fragment:Kg,fog_pars_fragment:Qg,gradientmap_pars_fragment:jg,lightmap_pars_fragment:e2,lights_lambert_fragment:t2,lights_lambert_pars_fragment:n2,lights_pars_begin:i2,lights_toon_fragment:r2,lights_toon_pars_fragment:a2,lights_phong_fragment:o2,lights_phong_pars_fragment:l2,lights_physical_fragment:c2,lights_physical_pars_fragment:u2,lights_fragment_begin:h2,lights_fragment_maps:f2,lights_fragment_end:d2,lightprobes_pars_fragment:p2,logdepthbuf_fragment:m2,logdepthbuf_pars_fragment:g2,logdepthbuf_pars_vertex:x2,logdepthbuf_vertex:v2,map_fragment:y2,map_pars_fragment:_2,map_particle_fragment:M2,map_particle_pars_fragment:E2,metalnessmap_fragment:S2,metalnessmap_pars_fragment:b2,morphinstance_vertex:T2,morphcolor_vertex:w2,morphnormal_vertex:R2,morphtarget_pars_vertex:A2,morphtarget_vertex:C2,normal_fragment_begin:P2,normal_fragment_maps:I2,normal_pars_fragment:D2,normal_pars_vertex:L2,normal_vertex:N2,normalmap_pars_fragment:U2,clearcoat_normal_fragment_begin:F2,clearcoat_normal_fragment_maps:O2,clearcoat_pars_fragment:B2,iridescence_pars_fragment:H2,opaque_fragment:z2,packing:G2,premultiplied_alpha_fragment:k2,project_vertex:V2,dithering_fragment:W2,dithering_pars_fragment:X2,roughnessmap_fragment:Y2,roughnessmap_pars_fragment:q2,shadowmap_pars_fragment:Z2,shadowmap_pars_vertex:$2,shadowmap_vertex:J2,shadowmask_pars_fragment:K2,skinbase_vertex:Q2,skinning_pars_vertex:j2,skinning_vertex:ex,skinnormal_vertex:tx,specularmap_fragment:nx,specularmap_pars_fragment:ix,tonemapping_fragment:sx,tonemapping_pars_fragment:rx,transmission_fragment:ax,transmission_pars_fragment:ox,uv_pars_fragment:lx,uv_pars_vertex:cx,uv_vertex:ux,worldpos_vertex:hx,background_vert:fx,background_frag:dx,backgroundCube_vert:px,backgroundCube_frag:mx,cube_vert:gx,cube_frag:xx,depth_vert:vx,depth_frag:yx,distance_vert:_x,distance_frag:Mx,equirect_vert:Ex,equirect_frag:Sx,linedashed_vert:bx,linedashed_frag:Tx,meshbasic_vert:wx,meshbasic_frag:Rx,meshlambert_vert:Ax,meshlambert_frag:Cx,meshmatcap_vert:Px,meshmatcap_frag:Ix,meshnormal_vert:Dx,meshnormal_frag:Lx,meshphong_vert:Nx,meshphong_frag:Ux,meshphysical_vert:Fx,meshphysical_frag:Ox,meshtoon_vert:Bx,meshtoon_frag:Hx,points_vert:zx,points_frag:Gx,shadow_vert:kx,shadow_frag:Vx,sprite_vert:Wx,sprite_frag:Xx},zt={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new fn},alphaMap:{value:null},alphaMapTransform:{value:new fn},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new fn}},envmap:{envMap:{value:null},envMapRotation:{value:new fn},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new fn}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new fn}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new fn},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new fn},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new fn},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new fn}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new fn}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new fn}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new F},probesMax:{value:new F},probesResolution:{value:new F}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new fn},alphaTest:{value:0},uvTransform:{value:new fn}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new fn},alphaMap:{value:null},alphaMapTransform:{value:new fn},alphaTest:{value:0}}},Br={basic:{uniforms:ms([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.fog]),vertexShader:_n.meshbasic_vert,fragmentShader:_n.meshbasic_frag},lambert:{uniforms:ms([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,zt.lights,{emissive:{value:new Et(0)},envMapIntensity:{value:1}}]),vertexShader:_n.meshlambert_vert,fragmentShader:_n.meshlambert_frag},phong:{uniforms:ms([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,zt.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:_n.meshphong_vert,fragmentShader:_n.meshphong_frag},standard:{uniforms:ms([zt.common,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.roughnessmap,zt.metalnessmap,zt.fog,zt.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_n.meshphysical_vert,fragmentShader:_n.meshphysical_frag},toon:{uniforms:ms([zt.common,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.gradientmap,zt.fog,zt.lights,{emissive:{value:new Et(0)}}]),vertexShader:_n.meshtoon_vert,fragmentShader:_n.meshtoon_frag},matcap:{uniforms:ms([zt.common,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,{matcap:{value:null}}]),vertexShader:_n.meshmatcap_vert,fragmentShader:_n.meshmatcap_frag},points:{uniforms:ms([zt.points,zt.fog]),vertexShader:_n.points_vert,fragmentShader:_n.points_frag},dashed:{uniforms:ms([zt.common,zt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_n.linedashed_vert,fragmentShader:_n.linedashed_frag},depth:{uniforms:ms([zt.common,zt.displacementmap]),vertexShader:_n.depth_vert,fragmentShader:_n.depth_frag},normal:{uniforms:ms([zt.common,zt.bumpmap,zt.normalmap,zt.displacementmap,{opacity:{value:1}}]),vertexShader:_n.meshnormal_vert,fragmentShader:_n.meshnormal_frag},sprite:{uniforms:ms([zt.sprite,zt.fog]),vertexShader:_n.sprite_vert,fragmentShader:_n.sprite_frag},background:{uniforms:{uvTransform:{value:new fn},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_n.background_vert,fragmentShader:_n.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new fn}},vertexShader:_n.backgroundCube_vert,fragmentShader:_n.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_n.cube_vert,fragmentShader:_n.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_n.equirect_vert,fragmentShader:_n.equirect_frag},distance:{uniforms:ms([zt.common,zt.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_n.distance_vert,fragmentShader:_n.distance_frag},shadow:{uniforms:ms([zt.lights,zt.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:_n.shadow_vert,fragmentShader:_n.shadow_frag}};Br.physical={uniforms:ms([Br.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new fn},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new fn},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new fn},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new fn},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new fn},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new fn},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new fn},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new fn},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new fn},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new fn},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new fn},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new fn}}]),vertexShader:_n.meshphysical_vert,fragmentShader:_n.meshphysical_frag};var Ru={r:0,b:0,g:0},Yx=new kt,Zp=new fn;Zp.set(-1,0,0,0,1,0,0,0,1);function qx(i,e,t,n,s,r){let a=new Et(0),o=s===!0?0:1,c,l,h=null,d=0,p=null;function u(_){let b=_.isScene===!0?_.background:null;if(b&&b.isTexture){let y=_.backgroundBlurriness>0;b=e.get(b,y)}return b}function f(_){let b=!1,y=u(_);y===null?g(a,o):y&&y.isColor&&(g(y,1),b=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?t.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(_,b){let y=u(b);y&&(y.isCubeTexture||y.mapping===Jl)?(l===void 0&&(l=new Fe(new Rn(1,1,1),new Nn({name:"BackgroundCubeMaterial",uniforms:Wa(Br.backgroundCube.uniforms),vertexShader:Br.backgroundCube.vertexShader,fragmentShader:Br.backgroundCube.fragmentShader,side:es,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(M,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Yx.makeRotationFromEuler(b.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Zp),l.material.toneMapped=Cn.getTransfer(y.colorSpace)!==Bn,(h!==y||d!==y.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,p=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Fe(new an(2,2),new Nn({name:"BackgroundMaterial",uniforms:Wa(Br.background.uniforms),vertexShader:Br.background.vertexShader,fragmentShader:Br.background.fragmentShader,side:ya,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=Cn.getTransfer(y.colorSpace)!==Bn,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,p=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function g(_,b){_.getRGB(Ru,lf(i)),t.buffers.color.setClear(Ru.r,Ru.g,Ru.b,b,r)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,b=1){a.set(_),o=b,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,g(a,o)},render:f,addToRenderList:x,dispose:m}}function Zx(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null),r=s,a=!1;function o(G,w,U,N,H){let $=!1,z=d(G,N,U,w);r!==z&&(r=z,l(r.object)),$=u(G,N,U,H),$&&f(G,N,U,H),H!==null&&e.update(H,i.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,y(G,w,U,N),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function c(){return i.createVertexArray()}function l(G){return i.bindVertexArray(G)}function h(G){return i.deleteVertexArray(G)}function d(G,w,U,N){let H=N.wireframe===!0,$=n[w.id];$===void 0&&($={},n[w.id]=$);let z=G.isInstancedMesh===!0?G.id:0,q=$[z];q===void 0&&(q={},$[z]=q);let Z=q[U.id];Z===void 0&&(Z={},q[U.id]=Z);let W=Z[H];return W===void 0&&(W=p(c()),Z[H]=W),W}function p(G){let w=[],U=[],N=[];for(let H=0;H<t;H++)w[H]=0,U[H]=0,N[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:U,attributeDivisors:N,object:G,attributes:{},index:null}}function u(G,w,U,N){let H=r.attributes,$=w.attributes,z=0,q=U.getAttributes();for(let Z in q)if(q[Z].location>=0){let J=H[Z],me=$[Z];if(me===void 0&&(Z==="instanceMatrix"&&G.instanceMatrix&&(me=G.instanceMatrix),Z==="instanceColor"&&G.instanceColor&&(me=G.instanceColor)),J===void 0||J.attribute!==me||me&&J.data!==me.data)return!0;z++}return r.attributesNum!==z||r.index!==N}function f(G,w,U,N){let H={},$=w.attributes,z=0,q=U.getAttributes();for(let Z in q)if(q[Z].location>=0){let J=$[Z];J===void 0&&(Z==="instanceMatrix"&&G.instanceMatrix&&(J=G.instanceMatrix),Z==="instanceColor"&&G.instanceColor&&(J=G.instanceColor));let me={};me.attribute=J,J&&J.data&&(me.data=J.data),H[Z]=me,z++}r.attributes=H,r.attributesNum=z,r.index=N}function x(){let G=r.newAttributes;for(let w=0,U=G.length;w<U;w++)G[w]=0}function g(G){m(G,0)}function m(G,w){let U=r.newAttributes,N=r.enabledAttributes,H=r.attributeDivisors;U[G]=1,N[G]===0&&(i.enableVertexAttribArray(G),N[G]=1),H[G]!==w&&(i.vertexAttribDivisor(G,w),H[G]=w)}function _(){let G=r.newAttributes,w=r.enabledAttributes;for(let U=0,N=w.length;U<N;U++)w[U]!==G[U]&&(i.disableVertexAttribArray(U),w[U]=0)}function b(G,w,U,N,H,$,z){z===!0?i.vertexAttribIPointer(G,w,U,H,$):i.vertexAttribPointer(G,w,U,N,H,$)}function y(G,w,U,N){x();let H=N.attributes,$=U.getAttributes(),z=w.defaultAttributeValues;for(let q in $){let Z=$[q];if(Z.location>=0){let W=H[q];if(W===void 0&&(q==="instanceMatrix"&&G.instanceMatrix&&(W=G.instanceMatrix),q==="instanceColor"&&G.instanceColor&&(W=G.instanceColor)),W!==void 0){let J=W.normalized,me=W.itemSize,Ie=e.get(W);if(Ie===void 0)continue;let qe=Ie.buffer,$e=Ie.type,xt=Ie.bytesPerElement,re=$e===i.INT||$e===i.UNSIGNED_INT||W.gpuType===k0;if(W.isInterleavedBufferAttribute){let fe=W.data,Ue=fe.stride,we=W.offset;if(fe.isInstancedInterleavedBuffer){for(let Ve=0;Ve<Z.locationSize;Ve++)m(Z.location+Ve,fe.meshPerAttribute);G.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Ve=0;Ve<Z.locationSize;Ve++)g(Z.location+Ve);i.bindBuffer(i.ARRAY_BUFFER,qe);for(let Ve=0;Ve<Z.locationSize;Ve++)b(Z.location+Ve,me/Z.locationSize,$e,J,Ue*xt,(we+me/Z.locationSize*Ve)*xt,re)}else{if(W.isInstancedBufferAttribute){for(let fe=0;fe<Z.locationSize;fe++)m(Z.location+fe,W.meshPerAttribute);G.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let fe=0;fe<Z.locationSize;fe++)g(Z.location+fe);i.bindBuffer(i.ARRAY_BUFFER,qe);for(let fe=0;fe<Z.locationSize;fe++)b(Z.location+fe,me/Z.locationSize,$e,J,me*xt,me/Z.locationSize*fe*xt,re)}}else if(z!==void 0){let J=z[q];if(J!==void 0)switch(J.length){case 2:i.vertexAttrib2fv(Z.location,J);break;case 3:i.vertexAttrib3fv(Z.location,J);break;case 4:i.vertexAttrib4fv(Z.location,J);break;default:i.vertexAttrib1fv(Z.location,J)}}}}_()}function M(){A();for(let G in n){let w=n[G];for(let U in w){let N=w[U];for(let H in N){let $=N[H];for(let z in $)h($[z].object),delete $[z];delete N[H]}}delete n[G]}}function T(G){if(n[G.id]===void 0)return;let w=n[G.id];for(let U in w){let N=w[U];for(let H in N){let $=N[H];for(let z in $)h($[z].object),delete $[z];delete N[H]}}delete n[G.id]}function R(G){for(let w in n){let U=n[w];for(let N in U){let H=U[N];if(H[G.id]===void 0)continue;let $=H[G.id];for(let z in $)h($[z].object),delete $[z];delete H[G.id]}}}function v(G){for(let w in n){let U=n[w],N=G.isInstancedMesh===!0?G.id:0,H=U[N];if(H!==void 0){for(let $ in H){let z=H[$];for(let q in z)h(z[q].object),delete z[q];delete H[$]}delete U[N],Object.keys(U).length===0&&delete n[w]}}}function A(){I(),a=!0,r!==s&&(r=s,l(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:A,resetDefaultState:I,dispose:M,releaseStatesOfGeometry:T,releaseStatesOfObject:v,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:g,disableUnusedAttributes:_}}function $x(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function o(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let p=0;for(let u=0;u<h;u++)p+=l[u];t.update(p,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Jx(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==rs&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let v=R===hi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==zi&&R!==js&&!v&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(Qt("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let d=t.logarithmicDepthBuffer===!0,p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&p===!1&&Qt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:p,maxTextures:u,maxVertexTextures:f,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:_,maxVaryings:b,maxFragmentUniforms:y,maxSamples:M,samples:T}}function Kx(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Ds,o=new fn,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){let u=d.length!==0||p||n!==0||s;return s=p,n=d.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,p){t=h(d,p,0)},this.setState=function(d,p,u){let f=d.clippingPlanes,x=d.clipIntersection,g=d.clipShadows,m=i.get(d);if(!s||f===null||f.length===0||r&&!g)r?h(null):l();else{let _=r?0:n,b=_*4,y=m.clippingState||null;c.value=y,y=h(f,p,b,u);for(let M=0;M!==b;++M)y[M]=t[M];m.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,p,u,f){let x=d!==null?d.length:0,g=null;if(x!==0){if(g=c.value,f!==!0||g===null){let m=u+x*4,_=p.matrixWorldInverse;o.getNormalMatrix(_),(g===null||g.length<m)&&(g=new Float32Array(m));for(let b=0,y=u;b!==x;++b,y+=4)a.copy(d[b]).applyMatrix4(_,o),a.normal.toArray(g,y),g[y+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}var Ho=4,Qx=6,jx=20,ev=256,rc=new va,wp=new Et,xf=null,vf=0,yf=0,_f=!1,tv=new F,Xa=new F,Ta=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=tv}=r;xf=this._renderer.getRenderTarget(),vf=this._renderer.getActiveCubeFace(),yf=this._renderer.getActiveMipmapLevel(),_f=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ap(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(xf,vf,yf),this._renderer.xr.enabled=_f,e.scissorTest=!1,Bo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ea||e.mapping===Va?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),xf=this._renderer.getRenderTarget(),vf=this._renderer.getActiveCubeFace(),yf=this._renderer.getActiveMipmapLevel(),_f=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ni,minFilter:Ni,generateMipmaps:!1,type:hi,format:rs,colorSpace:fl,depthBuffer:!1},s=Rp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rp(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=nv(r)),this._blurMaterial=sv(r,e,t),this._ggxMaterial=iv(r,e,t)}return s}_compileMaterial(e){let t=new Fe(new tn,e);this._renderer.compile(t,rc)}_sceneToCubeUV(e,t,n,s,r){let c=new $i(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,p=d.autoClear,u=d.toneMapping;d.getClearColor(wp),d.toneMapping=Us,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Fe(new Rn,new Wn({name:"PMREM.Background",side:es,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,g=x.material,m=!1,_=e.background;_?_.isColor&&(g.color.copy(_),e.background=null,m=!0):(g.color.copy(wp),m=!0);for(let b=0;b<6;b++){let y=b%3;y===0?(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[b],r.y,r.z)):y===1?(c.up.set(0,0,l[b]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[b],r.z)):(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[b]));let M=this._cubeSize;Bo(s,y*M,b>2?M:0,M,M),d.setRenderTarget(s),m&&d.render(x,c),d.render(e,c)}d.toneMapping=u,d.autoClear=p,e.background=_}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Ea||e.mapping===Va;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ap());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;Bo(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,rc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,l=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(l*l-h*h),p=l*1.25,u=d*p,{_lodMax:f}=this,x=this._sizeLods[n],g=3*x*(n>f-Ho?n-f+Ho:0),m=4*(this._cubeSize-x);c.envMap.value=e.texture,c.roughness.value=u,c.mipInt.value=f-t,Bo(r,g,m,3*x,2*x),s.setRenderTarget(r),s.render(o,rc),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=f-n,Bo(e,g,m,3*x,2*x),s.setRenderTarget(e),s.render(o,rc)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[s];c.material=o;let l=o.uniforms;l.envMap.value=e.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-Ho?s-this._lodMax+Ho:0),p=4*(this._cubeSize-h);Bo(t,d,p,3*h,2*h),a.setRenderTarget(t),a.render(c,rc)}};function nv(i){let e=[],t=[],n=i,s=i-Ho+1+Qx;for(let r=0;r<s;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),c=-o,l=1+o,h=[c,c,l,c,l,l,c,c,l,l,c,l],d=6,p=6,u=3,f=new Float32Array(u*p*d),x=new Float32Array(u*p*d);for(let m=0;m<d;m++){let _=m%3*2/3-1,b=m>2?0:-1,y=[_,b,0,_+2/3,b,0,_+2/3,b+1,0,_,b,0,_+2/3,b+1,0,_,b+1,0];f.set(y,u*p*m);for(let M=0;M<p;M++){let T=h[M*2]*2-1,R=h[M*2+1]*2-1;m===0?Xa.set(1,R,T):m===1?Xa.set(-T,1,-R):m===2?Xa.set(-T,R,1):m===3?Xa.set(-1,R,-T):m===4?Xa.set(-T,-1,R):Xa.set(T,R,-1),Xa.toArray(x,(m*p+M)*u)}}let g=new tn;g.setAttribute("position",new Jt(f,u)),g.setAttribute("outputDirection",new Jt(x,u)),t.push(new Fe(g,null)),n>Ho&&n--}return{lodMeshes:t,sizeLods:e}}function Rp(i,e,t){let n=new oi(i,e,t);return n.texture.mapping=Jl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Bo(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function iv(i,e,t){return new Nn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ev,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Pu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function sv(i,e,t){return new Nn({name:"SphericalGaussianBlur",defines:{SAMPLES:jx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Pu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function Ap(){return new Nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function Cp(){return new Nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function Pu(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Go=class extends oi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new El(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Rn(5,5,5),r=new Nn({name:"CubemapFromEquirect",uniforms:Wa(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:es,blending:Ai});r.uniforms.tEquirect.value=t;let a=new Fe(s,r),o=t.minFilter;return t.minFilter===Ur&&(t.minFilter=Ni),new Uo(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};function rv(i){let e=new WeakMap,t=new WeakMap,n=null;function s(p,u=!1){return p==null?null:u?a(p):r(p)}function r(p){if(p&&p.isTexture){let u=p.mapping;if(u===H0||u===z0)if(e.has(p)){let f=e.get(p).texture;return o(f,p.mapping)}else{let f=p.image;if(f&&f.height>0){let x=new Go(f.height);return x.fromEquirectangularTexture(i,p),e.set(p,x),p.addEventListener("dispose",l),o(x.texture,p.mapping)}else return null}}return p}function a(p){if(p&&p.isTexture){let u=p.mapping,f=u===H0||u===z0,x=u===Ea||u===Va;if(f||x){let g=t.get(p),m=g!==void 0?g.texture.pmremVersion:0;if(p.isRenderTargetTexture&&p.pmremVersion!==m)return n===null&&(n=new Ta(i)),g=f?n.fromEquirectangular(p,g):n.fromCubemap(p,g),g.texture.pmremVersion=p.pmremVersion,t.set(p,g),g.texture;if(g!==void 0)return g.texture;{let _=p.image;return f&&_&&_.height>0||x&&_&&c(_)?(n===null&&(n=new Ta(i)),g=f?n.fromEquirectangular(p):n.fromCubemap(p),g.texture.pmremVersion=p.pmremVersion,t.set(p,g),p.addEventListener("dispose",h),g.texture):null}}}return p}function o(p,u){return u===H0?p.mapping=Ea:u===z0&&(p.mapping=Va),p}function c(p){let u=0,f=6;for(let x=0;x<f;x++)p[x]!==void 0&&u++;return u===f}function l(p){let u=p.target;u.removeEventListener("dispose",l);let f=e.get(u);f!==void 0&&(e.delete(u),f.dispose())}function h(p){let u=p.target;u.removeEventListener("dispose",h);let f=t.get(u);f!==void 0&&(t.delete(u),f.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function av(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Ua("WebGLRenderer: "+n+" extension not supported."),s}}}function ov(i,e,t,n){let s={},r=new WeakMap;function a(d){let p=d.target;p.index!==null&&e.remove(p.index);for(let f in p.attributes)e.remove(p.attributes[f]);p.removeEventListener("dispose",a),delete s[p.id];let u=r.get(p);u&&(e.remove(u),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function o(d,p){return s[p.id]===!0||(p.addEventListener("dispose",a),s[p.id]=!0,t.memory.geometries++),p}function c(d){let p=d.attributes;for(let u in p)e.update(p[u],i.ARRAY_BUFFER)}function l(d){let p=[],u=d.index,f=d.attributes.position,x=0;if(f===void 0)return;if(u!==null){let _=u.array;x=u.version;for(let b=0,y=_.length;b<y;b+=3){let M=_[b+0],T=_[b+1],R=_[b+2];p.push(M,T,T,R,R,M)}}else{let _=f.array;x=f.version;for(let b=0,y=_.length/3-1;b<y;b+=3){let M=b+0,T=b+1,R=b+2;p.push(M,T,T,R,R,M)}}let g=new(f.count>=65535?_l:yl)(p,1);g.version=x;let m=r.get(d);m&&e.remove(m),r.set(d,g)}function h(d){let p=r.get(d);if(p){let u=d.index;u!==null&&p.version<u.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function lv(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,p){i.drawElements(n,p,r,d*a),t.update(p,n,1)}function l(d,p,u){u!==0&&(i.drawElementsInstanced(n,p,r,d*a,u),t.update(p,n,u))}function h(d,p,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,u);let x=0;for(let g=0;g<u;g++)x+=p[g];t.update(x,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function cv(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:en("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function uv(i,e,t){let n=new WeakMap,s=new ai;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,p=n.get(o);if(p===void 0||p.count!==d){let A=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",A)};p!==void 0&&p.texture.dispose();let u=o.morphAttributes.position!==void 0,f=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],b=0;u===!0&&(b=1),f===!0&&(b=2),x===!0&&(b=3);let y=o.attributes.position.count*b,M=1;y>e.maxTextureSize&&(M=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let T=new Float32Array(y*M*4*d),R=new xl(T,y,M,d);R.type=js,R.needsUpdate=!0;let v=b*4;for(let I=0;I<d;I++){let G=g[I],w=m[I],U=_[I],N=y*M*4*I;for(let H=0;H<G.count;H++){let $=H*v;u===!0&&(s.fromBufferAttribute(G,H),T[N+$+0]=s.x,T[N+$+1]=s.y,T[N+$+2]=s.z,T[N+$+3]=0),f===!0&&(s.fromBufferAttribute(w,H),T[N+$+4]=s.x,T[N+$+5]=s.y,T[N+$+6]=s.z,T[N+$+7]=0),x===!0&&(s.fromBufferAttribute(U,H),T[N+$+8]=s.x,T[N+$+9]=s.y,T[N+$+10]=s.z,T[N+$+11]=U.itemSize===4?s.w:1)}}p={count:d,texture:R,size:new it(y,M)},n.set(o,p),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let u=0;for(let x=0;x<l.length;x++)u+=l[x];let f=o.morphTargetsRelative?1:1-u;c.getUniforms().setValue(i,"morphTargetBaseInfluence",f),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:r}}function hv(i,e,t,n,s){let r=new WeakMap;function a(l){let h=s.render.frame,d=l.geometry,p=e.get(l,d);if(r.get(p)!==h&&(e.update(p),r.set(p,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let u=l.skeleton;r.get(u)!==h&&(u.update(),r.set(u,h))}return p}function o(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var fv={[Wl]:"LINEAR_TONE_MAPPING",[Xl]:"REINHARD_TONE_MAPPING",[Yl]:"CINEON_TONE_MAPPING",[Ma]:"ACES_FILMIC_TONE_MAPPING",[Zl]:"AGX_TONE_MAPPING",[$l]:"NEUTRAL_TONE_MAPPING",[ql]:"CUSTOM_TONE_MAPPING"};function dv(i,e,t,n,s,r){let a=new oi(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=new tn;l.setAttribute("position",new Zt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Zt([0,2,0,0,2,0],2));let h=new Io({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Fe(l,h),p=new va(-1,1,1,-1,0,1),u=null,f=null,x=!1,g,m=null,_=[],b=!1;this.setSize=function(y,M){a.setSize(y,M),o!==null&&o.setSize(y,M),c!==null&&c.setSize(y,M);for(let T=0;T<_.length;T++){let R=_[T];R.setSize&&R.setSize(y,M)}},this.setEffects=function(y){_=y,b=_.length>0&&_[0].isRenderPass===!0;let M=a.width,T=a.height;_.length>0&&o===null&&(o=new oi(M,T,{type:hi,depthBuffer:!1,stencilBuffer:!1}),c=new oi(M,T,{type:hi,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<_.length;R++){let v=_[R];v.setSize&&v.setSize(M,T)}},this.begin=function(y,M){if(x||y.toneMapping===Us&&_.length===0)return!1;if(m=M,M!==null){let T=M.width,R=M.height;(a.width!==T||a.height!==R)&&this.setSize(T,R)}return b===!1&&y.setRenderTarget(a),g=y.toneMapping,y.toneMapping=Us,!0},this.hasRenderPass=function(){return b},this.end=function(y,M){y.toneMapping=g,x=!0;let T=a,R=o;for(let v=0;v<_.length;v++){let A=_[v];A.enabled!==!1&&(A.render(y,R,T,M),A.needsSwap!==!1&&(T=R,R=R===o?c:o))}if(u!==y.outputColorSpace||f!==y.toneMapping){u=y.outputColorSpace,f=y.toneMapping,h.defines={},Cn.getTransfer(u)===Bn&&(h.defines.SRGB_TRANSFER="");let v=fv[f];v&&(h.defines[v]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=T.texture,y.setRenderTarget(m),y.render(d,p),m=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),h.dispose()}}var $p=new Ms,Sf=new Js(1,1),Jp=new xl,Kp=new x0,Qp=new El,Pp=[],Ip=[],Dp=new Float32Array(16),Lp=new Float32Array(9),Np=new Float32Array(4);function ko(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Pp[s];if(r===void 0&&(r=new Float32Array(s),Pp[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Gi(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function ki(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Iu(i,e){let t=Ip[e];t===void 0&&(t=new Int32Array(e),Ip[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function pv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function mv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gi(t,e))return;i.uniform2fv(this.addr,e),ki(t,e)}}function gv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Gi(t,e))return;i.uniform3fv(this.addr,e),ki(t,e)}}function xv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gi(t,e))return;i.uniform4fv(this.addr,e),ki(t,e)}}function vv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Gi(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),ki(t,e)}else{if(Gi(t,n))return;Np.set(n),i.uniformMatrix2fv(this.addr,!1,Np),ki(t,n)}}function yv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Gi(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),ki(t,e)}else{if(Gi(t,n))return;Lp.set(n),i.uniformMatrix3fv(this.addr,!1,Lp),ki(t,n)}}function _v(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Gi(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),ki(t,e)}else{if(Gi(t,n))return;Dp.set(n),i.uniformMatrix4fv(this.addr,!1,Dp),ki(t,n)}}function Mv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Ev(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gi(t,e))return;i.uniform2iv(this.addr,e),ki(t,e)}}function Sv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gi(t,e))return;i.uniform3iv(this.addr,e),ki(t,e)}}function bv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gi(t,e))return;i.uniform4iv(this.addr,e),ki(t,e)}}function Tv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function wv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gi(t,e))return;i.uniform2uiv(this.addr,e),ki(t,e)}}function Rv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gi(t,e))return;i.uniform3uiv(this.addr,e),ki(t,e)}}function Av(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gi(t,e))return;i.uniform4uiv(this.addr,e),ki(t,e)}}function Cv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Sf.compareFunction=t.isReversedDepthBuffer()?wu:Tu,r=Sf):r=$p,t.setTexture2D(e||r,s)}function Pv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Kp,s)}function Iv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Qp,s)}function Dv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Jp,s)}function Lv(i){switch(i){case 5126:return pv;case 35664:return mv;case 35665:return gv;case 35666:return xv;case 35674:return vv;case 35675:return yv;case 35676:return _v;case 5124:case 35670:return Mv;case 35667:case 35671:return Ev;case 35668:case 35672:return Sv;case 35669:case 35673:return bv;case 5125:return Tv;case 36294:return wv;case 36295:return Rv;case 36296:return Av;case 35678:case 36198:case 36298:case 36306:case 35682:return Cv;case 35679:case 36299:case 36307:return Pv;case 35680:case 36300:case 36308:case 36293:return Iv;case 36289:case 36303:case 36311:case 36292:return Dv}}function Nv(i,e){i.uniform1fv(this.addr,e)}function Uv(i,e){let t=ko(e,this.size,2);i.uniform2fv(this.addr,t)}function Fv(i,e){let t=ko(e,this.size,3);i.uniform3fv(this.addr,t)}function Ov(i,e){let t=ko(e,this.size,4);i.uniform4fv(this.addr,t)}function Bv(i,e){let t=ko(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Hv(i,e){let t=ko(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function zv(i,e){let t=ko(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Gv(i,e){i.uniform1iv(this.addr,e)}function kv(i,e){i.uniform2iv(this.addr,e)}function Vv(i,e){i.uniform3iv(this.addr,e)}function Wv(i,e){i.uniform4iv(this.addr,e)}function Xv(i,e){i.uniform1uiv(this.addr,e)}function Yv(i,e){i.uniform2uiv(this.addr,e)}function qv(i,e){i.uniform3uiv(this.addr,e)}function Zv(i,e){i.uniform4uiv(this.addr,e)}function $v(i,e,t){let n=this.cache,s=e.length,r=Iu(t,s);Gi(n,r)||(i.uniform1iv(this.addr,r),ki(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Sf:a=$p;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Jv(i,e,t){let n=this.cache,s=e.length,r=Iu(t,s);Gi(n,r)||(i.uniform1iv(this.addr,r),ki(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Kp,r[a])}function Kv(i,e,t){let n=this.cache,s=e.length,r=Iu(t,s);Gi(n,r)||(i.uniform1iv(this.addr,r),ki(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Qp,r[a])}function Qv(i,e,t){let n=this.cache,s=e.length,r=Iu(t,s);Gi(n,r)||(i.uniform1iv(this.addr,r),ki(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Jp,r[a])}function jv(i){switch(i){case 5126:return Nv;case 35664:return Uv;case 35665:return Fv;case 35666:return Ov;case 35674:return Bv;case 35675:return Hv;case 35676:return zv;case 5124:case 35670:return Gv;case 35667:case 35671:return kv;case 35668:case 35672:return Vv;case 35669:case 35673:return Wv;case 5125:return Xv;case 36294:return Yv;case 36295:return qv;case 36296:return Zv;case 35678:case 36198:case 36298:case 36306:case 35682:return $v;case 35679:case 36299:case 36307:return Jv;case 35680:case 36300:case 36308:case 36293:return Kv;case 36289:case 36303:case 36311:case 36292:return Qv}}var bf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Lv(t.type)}},Tf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=jv(t.type)}},wf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Mf=/(\w+)(\])?(\[|\.)?/g;function Up(i,e){i.seq.push(e),i.map[e.id]=e}function ey(i,e,t){let n=i.name,s=n.length;for(Mf.lastIndex=0;;){let r=Mf.exec(n),a=Mf.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Up(t,l===void 0?new bf(o,i,e):new Tf(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new wf(o),Up(t,d)),t=d}}}var zo=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);ey(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Fp(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var ty=37297,ny=0;function iy(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Op=new fn;function sy(i){Cn._getMatrix(Op,Cn.workingColorSpace,i);let e=`mat3( ${Op.elements.map(t=>t.toFixed(4))} )`;switch(Cn.getTransfer(i)){case dl:return[e,"LinearTransferOETF"];case Bn:return[e,"sRGBTransferOETF"];default:return Qt("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Bp(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+iy(i.getShaderSource(e),o)}else return r}function ry(i,e){let t=sy(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var ay={[Wl]:"Linear",[Xl]:"Reinhard",[Yl]:"Cineon",[Ma]:"ACESFilmic",[Zl]:"AgX",[$l]:"Neutral",[ql]:"Custom"};function oy(i,e){let t=ay[e];return t===void 0?(Qt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Au=new F;function ly(){Cn.getLuminanceCoefficients(Au);let i=Au.x.toFixed(4),e=Au.y.toFixed(4),t=Au.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(oc).join(`
`)}function uy(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function hy(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function oc(i){return i!==""}function Hp(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var fy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rf(i){return i.replace(fy,py)}var dy=new Map;function py(i,e){let t=_n[e];if(t===void 0){let n=dy.get(e);if(n!==void 0)t=_n[n],Qt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Rf(t)}var my=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gp(i){return i.replace(my,gy)}function gy(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function kp(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var xy={[Ga]:"SHADOWMAP_TYPE_PCF",[Fo]:"SHADOWMAP_TYPE_VSM"};function vy(i){return xy[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var yy={[Ea]:"ENVMAP_TYPE_CUBE",[Va]:"ENVMAP_TYPE_CUBE",[Jl]:"ENVMAP_TYPE_CUBE_UV"};function _y(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":yy[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var My={[Va]:"ENVMAP_MODE_REFRACTION"};function Ey(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":My[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Sy={[$h]:"ENVMAP_BLENDING_MULTIPLY",[np]:"ENVMAP_BLENDING_MIX",[ip]:"ENVMAP_BLENDING_ADD"};function by(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Sy[i.combine]||"ENVMAP_BLENDING_NONE"}function Ty(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function wy(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=vy(t),l=_y(t),h=Ey(t),d=by(t),p=Ty(t),u=cy(t),f=uy(r),x=s.createProgram(),g,m,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(oc).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(oc).join(`
`),m.length>0&&(m+=`
`)):(g=[kp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(oc).join(`
`),m=[kp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Us?"#define TONE_MAPPING":"",t.toneMapping!==Us?_n.tonemapping_pars_fragment:"",t.toneMapping!==Us?oy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",_n.colorspace_pars_fragment,ry("linearToOutputTexel",t.outputColorSpace),ly(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(oc).join(`
`)),a=Rf(a),a=Hp(a,t),a=zp(a,t),o=Rf(o),o=Hp(o,t),o=zp(o,t),a=Gp(a),o=Gp(o),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===af?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===af?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let b=_+g+a,y=_+m+o,M=Fp(s,s.VERTEX_SHADER,b),T=Fp(s,s.FRAGMENT_SHADER,y);s.attachShader(x,M),s.attachShader(x,T),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function R(G){if(i.debug.checkShaderErrors){let w=s.getProgramInfoLog(x)||"",U=s.getShaderInfoLog(M)||"",N=s.getShaderInfoLog(T)||"",H=w.trim(),$=U.trim(),z=N.trim(),q=!0,Z=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,M,T);else{let W=Bp(s,M,"vertex"),J=Bp(s,T,"fragment");en("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+H+`
`+W+`
`+J)}else H!==""?Qt("WebGLProgram: Program Info Log:",H):($===""||z==="")&&(Z=!1);Z&&(G.diagnostics={runnable:q,programLog:H,vertexShader:{log:$,prefix:g},fragmentShader:{log:z,prefix:m}})}s.deleteShader(M),s.deleteShader(T),v=new zo(s,x),A=hy(s,x)}let v;this.getUniforms=function(){return v===void 0&&R(this),v};let A;this.getAttributes=function(){return A===void 0&&R(this),A};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(x,ty)),I},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ny++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=M,this.fragmentShader=T,this}var Ry=0,Af=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Cf(e),t.set(e,n)),n}},Cf=class{constructor(e){this.id=Ry++,this.code=e,this.usedTimes=0}};function Ay(i){return i===ba||i===nc||i===ic}function Cy(i,e,t,n,s,r){let a=new Mo,o=new Af,c=new Set,l=[],h=new Map,d=n.logarithmicDepthBuffer,p=n.precision,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(v){return c.add(v),v===0?"uv":`uv${v}`}function x(v,A,I,G,w,U){let N=G.fog,H=w.geometry,$=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?G.environment:null,z=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,q=e.get(v.envMap||$,z),Z=q&&q.mapping===Jl?q.image.height:null,W=u[v.type];v.precision!==null&&(p=n.getMaxPrecision(v.precision),p!==v.precision&&Qt("WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));let J=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,me=J!==void 0?J.length:0,Ie=0;H.morphAttributes.position!==void 0&&(Ie=1),H.morphAttributes.normal!==void 0&&(Ie=2),H.morphAttributes.color!==void 0&&(Ie=3);let qe,$e,xt,re;if(W){let mt=Br[W];qe=mt.vertexShader,$e=mt.fragmentShader}else{qe=v.vertexShader,$e=v.fragmentShader;let mt=o.getVertexShaderStage(v),Ft=o.getFragmentShaderStage(v);o.update(v,mt,Ft),xt=mt.id,re=Ft.id}let fe=i.getRenderTarget(),Ue=i.state.buffers.depth.getReversed(),we=w.isInstancedMesh===!0,Ve=w.isBatchedMesh===!0,ie=!!v.map,Qe=!!v.matcap,le=!!q,ye=!!v.aoMap,ee=!!v.lightMap,ge=!!v.bumpMap&&v.wireframe===!1,Te=!!v.normalMap,Ze=!!v.displacementMap,Ye=!!v.emissiveMap,ut=!!v.metalnessMap,ft=!!v.roughnessMap,Q=v.anisotropy>0,It=v.clearcoat>0,At=v.dispersion>0,B=v.retroreflectivity>0,S=v.iridescence>0,ue=v.sheen>0,ce=v.transmission>0,Me=Q&&!!v.anisotropyMap,st=It&&!!v.clearcoatMap,nt=It&&!!v.clearcoatNormalMap,Oe=It&&!!v.clearcoatRoughnessMap,ze=S&&!!v.iridescenceMap,je=S&&!!v.iridescenceThicknessMap,vt=ue&&!!v.sheenColorMap,L=ue&&!!v.sheenRoughnessMap,ae=!!v.specularMap,he=!!v.specularColorMap,Se=!!v.specularIntensityMap,Ae=ce&&!!v.transmissionMap,k=ce&&!!v.thicknessMap,De=!!v.gradientMap,xe=!!v.alphaMap,Be=v.alphaTest>0,Ne=!!v.alphaHash,se=!!v.extensions,at=Us;v.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(at=i.toneMapping);let Je={shaderID:W,shaderType:v.type,shaderName:v.name,vertexShader:qe,fragmentShader:$e,defines:v.defines,customVertexShaderID:xt,customFragmentShaderID:re,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,batching:Ve,batchingColor:Ve&&w._colorsTexture!==null,instancing:we,instancingColor:we&&w.instanceColor!==null,instancingMorph:we&&w.morphTexture!==null,outputColorSpace:fe===null?i.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:Cn.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:ie,matcap:Qe,envMap:le,envMapMode:le&&q.mapping,envMapCubeUVHeight:Z,aoMap:ye,lightMap:ee,bumpMap:ge,normalMap:Te,displacementMap:Ze,emissiveMap:Ye,normalMapObjectSpace:Te&&v.normalMapType===ap,normalMapTangentSpace:Te&&v.normalMapType===sc,packedNormalMap:Te&&v.normalMapType===sc&&Ay(v.normalMap.format),metalnessMap:ut,roughnessMap:ft,anisotropy:Q,anisotropyMap:Me,clearcoat:It,clearcoatMap:st,clearcoatNormalMap:nt,clearcoatRoughnessMap:Oe,dispersion:At,retroreflection:B,iridescence:S,iridescenceMap:ze,iridescenceThicknessMap:je,sheen:ue,sheenColorMap:vt,sheenRoughnessMap:L,specularMap:ae,specularColorMap:he,specularIntensityMap:Se,transmission:ce,transmissionMap:Ae,thicknessMap:k,gradientMap:De,opaque:v.transparent===!1&&v.blending===_a&&v.alphaToCoverage===!1,alphaMap:xe,alphaTest:Be,alphaHash:Ne,combine:v.combine,mapUv:ie&&f(v.map.channel),aoMapUv:ye&&f(v.aoMap.channel),lightMapUv:ee&&f(v.lightMap.channel),bumpMapUv:ge&&f(v.bumpMap.channel),normalMapUv:Te&&f(v.normalMap.channel),displacementMapUv:Ze&&f(v.displacementMap.channel),emissiveMapUv:Ye&&f(v.emissiveMap.channel),metalnessMapUv:ut&&f(v.metalnessMap.channel),roughnessMapUv:ft&&f(v.roughnessMap.channel),anisotropyMapUv:Me&&f(v.anisotropyMap.channel),clearcoatMapUv:st&&f(v.clearcoatMap.channel),clearcoatNormalMapUv:nt&&f(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Oe&&f(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ze&&f(v.iridescenceMap.channel),iridescenceThicknessMapUv:je&&f(v.iridescenceThicknessMap.channel),sheenColorMapUv:vt&&f(v.sheenColorMap.channel),sheenRoughnessMapUv:L&&f(v.sheenRoughnessMap.channel),specularMapUv:ae&&f(v.specularMap.channel),specularColorMapUv:he&&f(v.specularColorMap.channel),specularIntensityMapUv:Se&&f(v.specularIntensityMap.channel),transmissionMapUv:Ae&&f(v.transmissionMap.channel),thicknessMapUv:k&&f(v.thicknessMap.channel),alphaMapUv:xe&&f(v.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Te||Q),vertexNormals:!!H.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:w.isPoints===!0&&!!H.attributes.uv&&(ie||xe),fog:!!N,useFog:v.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||H.attributes.normal===void 0&&Te===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Ue,skinning:w.isSkinnedMesh===!0,hasPositionAttribute:H.attributes.position!==void 0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:Ie,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:U.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:at,decodeVideoTexture:ie&&v.map.isVideoTexture===!0&&Cn.getTransfer(v.map.colorSpace)===Bn,decodeVideoTextureEmissive:Ye&&v.emissiveMap.isVideoTexture===!0&&Cn.getTransfer(v.emissiveMap.colorSpace)===Bn,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===li,flipSided:v.side===es,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:se&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(se&&v.extensions.multiDraw===!0||Ve)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Je.vertexUv1s=c.has(1),Je.vertexUv2s=c.has(2),Je.vertexUv3s=c.has(3),c.clear(),Je}function g(v){let A=[];if(v.shaderID?A.push(v.shaderID):(A.push(v.customVertexShaderID),A.push(v.customFragmentShaderID)),v.defines!==void 0)for(let I in v.defines)A.push(I),A.push(v.defines[I]);return v.isRawShaderMaterial===!1&&(m(A,v),_(A,v),A.push(i.outputColorSpace)),A.push(v.customProgramCacheKey),A.join()}function m(v,A){v.push(A.precision),v.push(A.outputColorSpace),v.push(A.envMapMode),v.push(A.envMapCubeUVHeight),v.push(A.mapUv),v.push(A.alphaMapUv),v.push(A.lightMapUv),v.push(A.aoMapUv),v.push(A.bumpMapUv),v.push(A.normalMapUv),v.push(A.displacementMapUv),v.push(A.emissiveMapUv),v.push(A.metalnessMapUv),v.push(A.roughnessMapUv),v.push(A.anisotropyMapUv),v.push(A.clearcoatMapUv),v.push(A.clearcoatNormalMapUv),v.push(A.clearcoatRoughnessMapUv),v.push(A.iridescenceMapUv),v.push(A.iridescenceThicknessMapUv),v.push(A.sheenColorMapUv),v.push(A.sheenRoughnessMapUv),v.push(A.specularMapUv),v.push(A.specularColorMapUv),v.push(A.specularIntensityMapUv),v.push(A.transmissionMapUv),v.push(A.thicknessMapUv),v.push(A.combine),v.push(A.fogExp2),v.push(A.sizeAttenuation),v.push(A.morphTargetsCount),v.push(A.morphAttributeCount),v.push(A.numSunLights),v.push(A.numDirLights),v.push(A.numPointLights),v.push(A.numSpotLights),v.push(A.numSpotLightMaps),v.push(A.numHemiLights),v.push(A.numRectAreaLights),v.push(A.numSunLightShadows),v.push(A.numDirLightShadows),v.push(A.numPointLightShadows),v.push(A.numSpotLightShadows),v.push(A.numSpotLightShadowsWithMaps),v.push(A.numLightProbes),v.push(A.shadowMapType),v.push(A.toneMapping),v.push(A.numClippingPlanes),v.push(A.numClipIntersection),v.push(A.depthPacking)}function _(v,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.retroreflection&&a.enable(24),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),A.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function b(v){let A=u[v.type],I;if(A){let G=Br[A];I=Es.clone(G.uniforms)}else I=v.uniforms;return I}function y(v,A){let I=h.get(A);return I!==void 0?++I.usedTimes:(I=new wy(i,A,v,s),l.push(I),h.set(A,I)),I}function M(v){if(--v.usedTimes===0){let A=l.indexOf(v);l[A]=l[l.length-1],l.pop(),h.delete(v.cacheKey),v.destroy()}}function T(v){o.remove(v)}function R(){o.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:b,acquireProgram:y,releaseProgram:M,releaseShaderCache:T,programs:l,dispose:R}}function Py(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Iy(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Vp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Wp(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(p){let u=0;return p.isInstancedMesh&&(u+=2),p.isSkinnedMesh&&(u+=1),u}function o(p,u,f,x,g,m){let _=i[e];return _===void 0?(_={id:p.id,object:p,geometry:u,material:f,materialVariant:a(p),groupOrder:x,renderOrder:p.renderOrder,z:g,group:m},i[e]=_):(_.id=p.id,_.object=p,_.geometry=u,_.material=f,_.materialVariant=a(p),_.groupOrder=x,_.renderOrder=p.renderOrder,_.z=g,_.group=m),e++,_}function c(p,u,f,x,g,m,_){_.reversedDepth===!0&&(g=-g);let b=o(p,u,f,x,g,m);f.transmission>0?n.push(b):f.transparent===!0?s.push(b):t.push(b)}function l(p,u,f,x,g,m){let _=o(p,u,f,x,g,m);f.transmission>0?n.unshift(_):f.transparent===!0?s.unshift(_):t.unshift(_)}function h(p,u){t.length>1&&t.sort(p||Iy),n.length>1&&n.sort(u||Vp),s.length>1&&s.sort(u||Vp)}function d(){for(let p=e,u=i.length;p<u;p++){let f=i[p];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:d,sort:h}}function Dy(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Wp,i.set(n,[a])):s>=r.length?(a=new Wp,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Ly(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new F,color:new Et};break;case"SpotLight":t={position:new F,direction:new F,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":t={color:new Et,position:new F,halfWidth:new F,halfHeight:new F};break}return i[e.id]=t,t}}}function Ny(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Uy=0;function Fy(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Oy(i){let e=new Ly,t=Ny(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new F);let s=new F,r=new kt,a=new kt;function o(l){let h=0,d=0,p=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let u=0,f=0,x=0,g=0,m=0,_=0,b=0,y=0,M=0,T=0,R=0,v=0,A=0,I=0;l.sort(Fy);for(let w=0,U=l.length;w<U;w++){let N=l[w],H=N.color,$=N.intensity,z=N.distance,q=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===ba?q=N.shadow.map.texture:q=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)h+=H.r*$,d+=H.g*$,p+=H.b*$;else if(N.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(N.sh.coefficients[Z],$);I++}else if(N.isSunLight){let Z=e.get(N);if(Z.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let W=N.shadow,J=t.get(N);J.shadowIntensity=W.intensity,J.shadowBias=W.bias,J.shadowNormalBias=W.normalBias,J.shadowRadius=W.radius,J.shadowMapSize.copy(W.mapSize).multiply(W.getFrameExtents()),n.sunShadow[f]=J,n.sunShadowMap[f]=q;let me=W.getViewportCount();for(let Ie=0;Ie<me;Ie++)n.sunShadowMatrix[x+Ie]=W.getMatrix(Ie),n.sunShadowCascade[x+Ie]=W._cascadeData[Ie];x+=me,f++}n.sun[u]=Z,u++}else if(N.isDirectionalLight){let Z=e.get(N);if(Z.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let W=N.shadow,J=t.get(N);J.shadowIntensity=W.intensity,J.shadowBias=W.bias,J.shadowNormalBias=W.normalBias,J.shadowRadius=W.radius,J.shadowMapSize=W.mapSize,n.directionalShadow[g]=J,n.directionalShadowMap[g]=q,n.directionalShadowMatrix[g]=N.shadow.matrix,M++}n.directional[g]=Z,g++}else if(N.isSpotLight){let Z=e.get(N);Z.position.setFromMatrixPosition(N.matrixWorld),Z.color.copy(H).multiplyScalar($),Z.distance=z,Z.coneCos=Math.cos(N.angle),Z.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),Z.decay=N.decay,n.spot[_]=Z;let W=N.shadow;if(N.map&&(n.spotLightMap[v]=N.map,v++,W.updateMatrices(N),N.castShadow&&A++),n.spotLightMatrix[_]=W.matrix,N.castShadow){let J=t.get(N);J.shadowIntensity=W.intensity,J.shadowBias=W.bias,J.shadowNormalBias=W.normalBias,J.shadowRadius=W.radius,J.shadowMapSize=W.mapSize,n.spotShadow[_]=J,n.spotShadowMap[_]=q,R++}_++}else if(N.isRectAreaLight){let Z=e.get(N);Z.color.copy(H).multiplyScalar($),Z.halfWidth.set(N.width*.5,0,0),Z.halfHeight.set(0,N.height*.5,0),n.rectArea[b]=Z,b++}else if(N.isPointLight){let Z=e.get(N);if(Z.color.copy(N.color).multiplyScalar(N.intensity),Z.distance=N.distance,Z.decay=N.decay,N.castShadow){let W=N.shadow,J=t.get(N);J.shadowIntensity=W.intensity,J.shadowBias=W.bias,J.shadowNormalBias=W.normalBias,J.shadowRadius=W.radius,J.shadowMapSize=W.mapSize,J.shadowCameraNear=W.camera.near,J.shadowCameraFar=W.camera.far,n.pointShadow[m]=J,n.pointShadowMap[m]=q,n.pointShadowMatrix[m]=N.shadow.matrix,T++}n.point[m]=Z,m++}else if(N.isHemisphereLight){let Z=e.get(N);Z.skyColor.copy(N.color).multiplyScalar($),Z.groundColor.copy(N.groundColor).multiplyScalar($),n.hemi[y]=Z,y++}}b>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=zt.LTC_FLOAT_1,n.rectAreaLTC2=zt.LTC_FLOAT_2):(n.rectAreaLTC1=zt.LTC_HALF_1,n.rectAreaLTC2=zt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=p;let G=n.hash;(G.sunLength!==u||G.directionalLength!==g||G.pointLength!==m||G.spotLength!==_||G.rectAreaLength!==b||G.hemiLength!==y||G.numSunShadows!==f||G.numDirectionalShadows!==M||G.numPointShadows!==T||G.numSpotShadows!==R||G.numSpotMaps!==v||G.numLightProbes!==I)&&(n.sun.length=u,n.directional.length=g,n.spot.length=_,n.rectArea.length=b,n.point.length=m,n.hemi.length=y,n.sunShadow.length=f,n.sunShadowMap.length=f,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=R,n.spotShadowMap.length=R,n.spotLightMatrix.length=R+v-A,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=I,G.sunLength=u,G.directionalLength=g,G.pointLength=m,G.spotLength=_,G.rectAreaLength=b,G.hemiLength=y,G.numSunShadows=f,G.numDirectionalShadows=M,G.numPointShadows=T,G.numSpotShadows=R,G.numSpotMaps=v,G.numLightProbes=I,n.version=Uy++)}function c(l,h){let d=0,p=0,u=0,f=0,x=0,g=0,m=h.matrixWorldInverse;for(let _=0,b=l.length;_<b;_++){let y=l[_];if(y.isSunLight){let M=n.sun[d];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(m),d++}else if(y.isDirectionalLight){let M=n.directional[p];M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),p++}else if(y.isSpotLight){let M=n.spot[f];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),f++}else if(y.isRectAreaLight){let M=n.rectArea[x];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),a.identity(),r.copy(y.matrixWorld),r.premultiply(m),a.extractRotation(r),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),x++}else if(y.isPointLight){let M=n.point[u];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),u++}else if(y.isHemisphereLight){let M=n.hemi[g];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(m),g++}}}return{setup:o,setupView:c,state:n}}function Xp(i){let e=new Oy(i),t=[],n=[],s=[];function r(p){d.camera=p,t.length=0,n.length=0,s.length=0}function a(p){t.push(p)}function o(p){n.push(p)}function c(p){s.push(p)}function l(){e.setup(t)}function h(p){e.setupView(t,p)}let d={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:l,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function By(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Xp(i),e.set(s,[o])):r>=a.length?(o=new Xp(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Hy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Gy=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],ky=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],Yp=new kt,ac=new F,Ef=new F;function Vy(i,e,t){let n=new To,s=new it,r=new it,a=new ai,o=new Do,c=new T0,l={},h=t.maxTextureSize,d={[ya]:es,[es]:ya,[li]:li},p=new Nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:Hy,fragmentShader:zy}),u=p.clone();u.defines.HORIZONTAL_PASS=1;let f=new tn;f.setAttribute("position",new Jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Fe(f,p),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ga;let m=this.type;this.render=function(T,R,v){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===Gd&&(Qt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ga);let A=i.getRenderTarget(),I=i.getActiveCubeFace(),G=i.getActiveMipmapLevel(),w=i.state;w.setBlending(Ai),w.buffers.depth.getReversed()===!0?w.buffers.color.setClear(0,0,0,0):w.buffers.color.setClear(1,1,1,1),w.buffers.depth.setTest(!0),w.setScissorTest(!1);let U=m!==this.type;U&&R.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(H=>H.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,H=T.length;N<H;N++){let $=T[N],z=$.shadow;if(z===void 0){Qt("WebGLShadowMap:",$,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);let q=z.getFrameExtents();s.multiply(q),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/q.x),s.x=r.x*q.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/q.y),s.y=r.y*q.y,z.mapSize.y=r.y));let Z=i.state.buffers.depth.getReversed();if(z.camera._reversedDepth=Z,z.map===null||U===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Fo){if($.isPointLight){Qt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new oi(s.x,s.y,{format:ba,type:hi,minFilter:Ni,magFilter:Ni,generateMipmaps:!1}),z.map.texture.name=$.name+".shadowMap",z.map.depthTexture=new Js(s.x,s.y,js),z.map.depthTexture.name=$.name+".shadowMapDepth",z.map.depthTexture.format=Cr,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Ri,z.map.depthTexture.magFilter=Ri}else $.isPointLight?(z.map=new Go(s.x),z.map.depthTexture=new M0(s.x,xr)):(z.map=new oi(s.x,s.y),z.map.depthTexture=new Js(s.x,s.y,xr)),z.map.depthTexture.name=$.name+".shadowMap",z.map.depthTexture.format=Cr,this.type===Ga?(z.map.depthTexture.compareFunction=Z?wu:Tu,z.map.depthTexture.minFilter=Ni,z.map.depthTexture.magFilter=Ni):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Ri,z.map.depthTexture.magFilter=Ri);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==s.x||z.map.height!==s.y)&&z.map.setSize(s.x,s.y);let W=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();$.isPointLight!==!0&&z.updateMatrices($,v);for(let J=0;J<W;J++){let me=z.getCamera(J);if($.isPointLight){let Ie=z.camera,qe=z.matrix,$e=$.distance||Ie.far;$e!==Ie.far&&(Ie.far=$e,Ie.updateProjectionMatrix()),ac.setFromMatrixPosition($.matrixWorld),Ie.position.copy(ac),Ef.copy(Ie.position),Ef.add(Gy[J]),Ie.up.copy(ky[J]),Ie.lookAt(Ef),Ie.updateMatrixWorld(),qe.makeTranslation(-ac.x,-ac.y,-ac.z),Yp.multiplyMatrices(Ie.projectionMatrix,Ie.matrixWorldInverse),z._frustum.setFromProjectionMatrix(Yp,Ie.coordinateSystem,Ie.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)i.setRenderTarget(z.map,J),i.clear();else{J===0&&(i.setRenderTarget(z.map),i.clear());let Ie=z.getViewport(J);a.set(r.x*Ie.x,r.y*Ie.y,r.x*Ie.z,r.y*Ie.w),w.viewport(a)}n=z.getFrustum(J),y(R,v,me,$,this.type)}z.isPointLightShadow!==!0&&this.type===Fo&&_(z,v),z.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(A,I,G)};function _(T,R){let v=e.update(x);p.defines.VSM_SAMPLES!==T.blurSamples&&(p.defines.VSM_SAMPLES=T.blurSamples,u.defines.VSM_SAMPLES=T.blurSamples,p.needsUpdate=!0,u.needsUpdate=!0),T.mapPass===null?T.mapPass=new oi(s.x,s.y,{format:ba,type:hi}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),p.uniforms.shadow_pass.value=T.map.depthTexture,p.uniforms.resolution.value.set(T.map.width,T.map.height),p.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(R,null,v,p,x,null),u.uniforms.shadow_pass.value=T.mapPass.texture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(R,null,v,u,x,null)}function b(T,R,v,A){let I=null,G=v.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(G!==void 0)I=G;else if(I=v.isPointLight===!0?c:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let w=I.uuid,U=R.uuid,N=l[w];N===void 0&&(N={},l[w]=N);let H=N[U];H===void 0&&(H=I.clone(),N[U]=H,R.addEventListener("dispose",M)),I=H}if(I.visible=R.visible,I.wireframe=R.wireframe,A===Fo?I.side=R.shadowSide!==null?R.shadowSide:R.side:I.side=R.shadowSide!==null?R.shadowSide:d[R.side],I.alphaMap=R.alphaMap,I.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,I.map=R.map,I.clipShadows=R.clipShadows,I.clippingPlanes=R.clippingPlanes,I.clipIntersection=R.clipIntersection,I.displacementMap=R.displacementMap,I.displacementScale=R.displacementScale,I.displacementBias=R.displacementBias,I.wireframeLinewidth=R.wireframeLinewidth,I.linewidth=R.linewidth,v.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let w=i.properties.get(I);w.light=v}return I}function y(T,R,v,A,I){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&I===Fo)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,T.matrixWorld);let U=e.update(T),N=T.material;if(Array.isArray(N)){let H=U.groups;for(let $=0,z=H.length;$<z;$++){let q=H[$],Z=N[q.materialIndex];if(Z&&Z.visible){let W=b(T,Z,A,I);T.onBeforeShadow(i,T,R,v,U,W,q),i.renderBufferDirect(v,null,U,W,T,q),T.onAfterShadow(i,T,R,v,U,W,q)}}}else if(N.visible){let H=b(T,N,A,I);T.onBeforeShadow(i,T,R,v,U,H,null),i.renderBufferDirect(v,null,U,H,T,null),T.onAfterShadow(i,T,R,v,U,H,null)}}let w=T.children;for(let U=0,N=w.length;U<N;U++)y(w[U],R,v,A,I)}function M(T){T.target.removeEventListener("dispose",M);for(let v in l){let A=l[v],I=T.target.uuid;I in A&&(A[I].dispose(),delete A[I])}}}function Wy(i,e){function t(){let k=!1,De=new ai,xe=null,Be=new ai(0,0,0,0);return{setMask:function(Ne){xe!==Ne&&!k&&(i.colorMask(Ne,Ne,Ne,Ne),xe=Ne)},setLocked:function(Ne){k=Ne},setClear:function(Ne,se,at,Je,mt){mt===!0&&(Ne*=Je,se*=Je,at*=Je),De.set(Ne,se,at,Je),Be.equals(De)===!1&&(i.clearColor(Ne,se,at,Je),Be.copy(De))},reset:function(){k=!1,xe=null,Be.set(-1,0,0,0)}}}function n(){let k=!1,De=!1,xe=null,Be=null,Ne=null;return{setReversed:function(se){if(De!==se){let at=e.get("EXT_clip_control");se?at.clipControlEXT(at.LOWER_LEFT_EXT,at.ZERO_TO_ONE_EXT):at.clipControlEXT(at.LOWER_LEFT_EXT,at.NEGATIVE_ONE_TO_ONE_EXT),De=se;let Je=Ne;Ne=null,this.setClear(Je)}},getReversed:function(){return De},setTest:function(se){se?fe(i.DEPTH_TEST):Ue(i.DEPTH_TEST)},setMask:function(se){xe!==se&&!k&&(i.depthMask(se),xe=se)},setFunc:function(se){if(De&&(se=xp[se]),Be!==se){switch(se){case a0:i.depthFunc(i.NEVER);break;case o0:i.depthFunc(i.ALWAYS);break;case l0:i.depthFunc(i.LESS);break;case xo:i.depthFunc(i.LEQUAL);break;case c0:i.depthFunc(i.EQUAL);break;case u0:i.depthFunc(i.GEQUAL);break;case h0:i.depthFunc(i.GREATER);break;case f0:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Be=se}},setLocked:function(se){k=se},setClear:function(se){Ne!==se&&(Ne=se,De&&(se=1-se),i.clearDepth(se))},reset:function(){k=!1,xe=null,Be=null,Ne=null,De=!1}}}function s(){let k=!1,De=null,xe=null,Be=null,Ne=null,se=null,at=null,Je=null,mt=null;return{setTest:function(Ft){k||(Ft?fe(i.STENCIL_TEST):Ue(i.STENCIL_TEST))},setMask:function(Ft){De!==Ft&&!k&&(i.stencilMask(Ft),De=Ft)},setFunc:function(Ft,Yt,hn){(xe!==Ft||Be!==Yt||Ne!==hn)&&(i.stencilFunc(Ft,Yt,hn),xe=Ft,Be=Yt,Ne=hn)},setOp:function(Ft,Yt,hn){(se!==Ft||at!==Yt||Je!==hn)&&(i.stencilOp(Ft,Yt,hn),se=Ft,at=Yt,Je=hn)},setLocked:function(Ft){k=Ft},setClear:function(Ft){mt!==Ft&&(i.clearStencil(Ft),mt=Ft)},reset:function(){k=!1,De=null,xe=null,Be=null,Ne=null,se=null,at=null,Je=null,mt=null}}}let r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap,h={},d={},p={},u=new WeakMap,f=[],x=null,g=!1,m=null,_=null,b=null,y=null,M=null,T=null,R=null,v=new Et(0,0,0),A=0,I=!1,G=null,w=null,U=null,N=null,H=null,$=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,q=0,Z=i.getParameter(i.VERSION);Z.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(Z)[1]),z=q>=1):Z.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),z=q>=2);let W=null,J={},me=i.getParameter(i.SCISSOR_BOX),Ie=i.getParameter(i.VIEWPORT),qe=new ai().fromArray(me),$e=new ai().fromArray(Ie);function xt(k,De,xe,Be){let Ne=new Uint8Array(4),se=i.createTexture();i.bindTexture(k,se),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let at=0;at<xe;at++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(De,0,i.RGBA,1,1,Be,0,i.RGBA,i.UNSIGNED_BYTE,Ne):i.texImage2D(De+at,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ne);return se}let re={};re[i.TEXTURE_2D]=xt(i.TEXTURE_2D,i.TEXTURE_2D,1),re[i.TEXTURE_CUBE_MAP]=xt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[i.TEXTURE_2D_ARRAY]=xt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),re[i.TEXTURE_3D]=xt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),fe(i.DEPTH_TEST),a.setFunc(xo),ge(!1),Te(Wh),fe(i.CULL_FACE),ye(Ai);function fe(k){h[k]!==!0&&(i.enable(k),h[k]=!0)}function Ue(k){h[k]!==!1&&(i.disable(k),h[k]=!1)}function we(k,De){return p[k]!==De?(i.bindFramebuffer(k,De),p[k]=De,k===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=De),k===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=De),!0):!1}function Ve(k,De){let xe=f,Be=!1;if(k){xe=u.get(De),xe===void 0&&(xe=[],u.set(De,xe));let Ne=k.textures;if(xe.length!==Ne.length||xe[0]!==i.COLOR_ATTACHMENT0){for(let se=0,at=Ne.length;se<at;se++)xe[se]=i.COLOR_ATTACHMENT0+se;xe.length=Ne.length,Be=!0}}else xe[0]!==i.BACK&&(xe[0]=i.BACK,Be=!0);Be&&i.drawBuffers(xe)}function ie(k){return x!==k?(i.useProgram(k),x=k,!0):!1}let Qe={[Qs]:i.FUNC_ADD,[kd]:i.FUNC_SUBTRACT,[Vd]:i.FUNC_REVERSE_SUBTRACT};Qe[Wd]=i.MIN,Qe[Xd]=i.MAX;let le={[ka]:i.ZERO,[Yd]:i.ONE,[qd]:i.SRC_COLOR,[qh]:i.SRC_ALPHA,[Kd]:i.SRC_ALPHA_SATURATE,[Vl]:i.DST_COLOR,[kl]:i.DST_ALPHA,[Zd]:i.ONE_MINUS_SRC_COLOR,[Zh]:i.ONE_MINUS_SRC_ALPHA,[Jd]:i.ONE_MINUS_DST_COLOR,[$d]:i.ONE_MINUS_DST_ALPHA,[Qd]:i.CONSTANT_COLOR,[jd]:i.ONE_MINUS_CONSTANT_COLOR,[ep]:i.CONSTANT_ALPHA,[tp]:i.ONE_MINUS_CONSTANT_ALPHA};function ye(k,De,xe,Be,Ne,se,at,Je,mt,Ft){if(k===Ai){g===!0&&(Ue(i.BLEND),g=!1);return}if(g===!1&&(fe(i.BLEND),g=!0),k!==B0){if(k!==m||Ft!==I){if((_!==Qs||M!==Qs)&&(i.blendEquation(i.FUNC_ADD),_=Qs,M=Qs),Ft)switch(k){case _a:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xn:i.blendFunc(i.ONE,i.ONE);break;case Xh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Yh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:en("WebGLState: Invalid blending: ",k);break}else switch(k){case _a:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Xh:en("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Yh:en("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:en("WebGLState: Invalid blending: ",k);break}b=null,y=null,T=null,R=null,v.set(0,0,0),A=0,m=k,I=Ft}return}Ne=Ne||De,se=se||xe,at=at||Be,(De!==_||Ne!==M)&&(i.blendEquationSeparate(Qe[De],Qe[Ne]),_=De,M=Ne),(xe!==b||Be!==y||se!==T||at!==R)&&(i.blendFuncSeparate(le[xe],le[Be],le[se],le[at]),b=xe,y=Be,T=se,R=at),(Je.equals(v)===!1||mt!==A)&&(i.blendColor(Je.r,Je.g,Je.b,mt),v.copy(Je),A=mt),m=k,I=!1}function ee(k,De){k.side===li?Ue(i.CULL_FACE):fe(i.CULL_FACE);let xe=k.side===es;De&&(xe=!xe),ge(xe),k.blending===_a&&k.transparent===!1?ye(Ai):ye(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),a.setFunc(k.depthFunc),a.setTest(k.depthTest),a.setMask(k.depthWrite),r.setMask(k.colorWrite);let Be=k.stencilWrite;o.setTest(Be),Be&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Ye(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?fe(i.SAMPLE_ALPHA_TO_COVERAGE):Ue(i.SAMPLE_ALPHA_TO_COVERAGE)}function ge(k){G!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),G=k)}function Te(k){k!==Hd?(fe(i.CULL_FACE),k!==w&&(k===Wh?i.cullFace(i.BACK):k===zd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ue(i.CULL_FACE),w=k}function Ze(k){k!==U&&(z&&i.lineWidth(k),U=k)}function Ye(k,De,xe){k?(fe(i.POLYGON_OFFSET_FILL),(N!==De||H!==xe)&&(N=De,H=xe,a.getReversed()&&(De=-De),i.polygonOffset(De,xe))):Ue(i.POLYGON_OFFSET_FILL)}function ut(k){k?fe(i.SCISSOR_TEST):Ue(i.SCISSOR_TEST)}function ft(k){k===void 0&&(k=i.TEXTURE0+$-1),W!==k&&(i.activeTexture(k),W=k)}function Q(k,De,xe){xe===void 0&&(W===null?xe=i.TEXTURE0+$-1:xe=W);let Be=J[xe];Be===void 0&&(Be={type:void 0,texture:void 0},J[xe]=Be),(Be.type!==k||Be.texture!==De)&&(W!==xe&&(i.activeTexture(xe),W=xe),i.bindTexture(k,De||re[k]),Be.type=k,Be.texture=De)}function It(){let k=J[W];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function At(){try{i.compressedTexImage2D(...arguments)}catch(k){en("WebGLState:",k)}}function B(){try{i.compressedTexImage3D(...arguments)}catch(k){en("WebGLState:",k)}}function S(){try{i.texSubImage2D(...arguments)}catch(k){en("WebGLState:",k)}}function ue(){try{i.texSubImage3D(...arguments)}catch(k){en("WebGLState:",k)}}function ce(){try{i.compressedTexSubImage2D(...arguments)}catch(k){en("WebGLState:",k)}}function Me(){try{i.compressedTexSubImage3D(...arguments)}catch(k){en("WebGLState:",k)}}function st(){try{i.texStorage2D(...arguments)}catch(k){en("WebGLState:",k)}}function nt(){try{i.texStorage3D(...arguments)}catch(k){en("WebGLState:",k)}}function Oe(){try{i.texImage2D(...arguments)}catch(k){en("WebGLState:",k)}}function ze(){try{i.texImage3D(...arguments)}catch(k){en("WebGLState:",k)}}function je(k){return d[k]!==void 0?d[k]:i.getParameter(k)}function vt(k,De){d[k]!==De&&(i.pixelStorei(k,De),d[k]=De)}function L(k){qe.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),qe.copy(k))}function ae(k){$e.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),$e.copy(k))}function he(k,De){let xe=l.get(De);xe===void 0&&(xe=new WeakMap,l.set(De,xe));let Be=xe.get(k);Be===void 0&&(Be=i.getUniformBlockIndex(De,k.name),xe.set(k,Be))}function Se(k,De){let Be=l.get(De).get(k);c.get(De)!==Be&&(i.uniformBlockBinding(De,Be,k.__bindingPointIndex),c.set(De,Be))}function Ae(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},W=null,J={},p={},u=new WeakMap,f=[],x=null,g=!1,m=null,_=null,b=null,y=null,M=null,T=null,R=null,v=new Et(0,0,0),A=0,I=!1,G=null,w=null,U=null,N=null,H=null,qe.set(0,0,i.canvas.width,i.canvas.height),$e.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:fe,disable:Ue,bindFramebuffer:we,drawBuffers:Ve,useProgram:ie,setBlending:ye,setMaterial:ee,setFlipSided:ge,setCullFace:Te,setLineWidth:Ze,setPolygonOffset:Ye,setScissorTest:ut,activeTexture:ft,bindTexture:Q,unbindTexture:It,compressedTexImage2D:At,compressedTexImage3D:B,texImage2D:Oe,texImage3D:ze,pixelStorei:vt,getParameter:je,updateUBOMapping:he,uniformBlockBinding:Se,texStorage2D:st,texStorage3D:nt,texSubImage2D:S,texSubImage3D:ue,compressedTexSubImage2D:ce,compressedTexSubImage3D:Me,scissor:L,viewport:ae,reset:Ae}}function Xy(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new it,h=new WeakMap,d=new Set,p,u=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(B,S){return f?new OffscreenCanvas(B,S):pl("canvas")}function g(B,S,ue){let ce=1,Me=At(B);if((Me.width>ue||Me.height>ue)&&(ce=ue/Math.max(Me.width,Me.height)),ce<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){let st=Math.floor(ce*Me.width),nt=Math.floor(ce*Me.height);p===void 0&&(p=x(st,nt));let Oe=S?x(st,nt):p;return Oe.width=st,Oe.height=nt,Oe.getContext("2d").drawImage(B,0,0,st,nt),Qt("WebGLRenderer: Texture has been resized from ("+Me.width+"x"+Me.height+") to ("+st+"x"+nt+")."),Oe}else return"data"in B&&Qt("WebGLRenderer: Image in DataTexture is too big ("+Me.width+"x"+Me.height+")."),B;return B}function m(B){return B.generateMipmaps}function _(B){i.generateMipmap(B)}function b(B){return B.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:B.isWebGL3DRenderTarget?i.TEXTURE_3D:B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(B,S,ue,ce,Me,st=!1){if(B!==null){if(i[B]!==void 0)return i[B];Qt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let nt;ce&&(nt=e.get("EXT_texture_norm16"),nt||Qt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Oe=S;if(S===i.RED&&(ue===i.FLOAT&&(Oe=i.R32F),ue===i.HALF_FLOAT&&(Oe=i.R16F),ue===i.UNSIGNED_BYTE&&(Oe=i.R8),ue===i.UNSIGNED_SHORT&&nt&&(Oe=nt.R16_EXT),ue===i.SHORT&&nt&&(Oe=nt.R16_SNORM_EXT)),S===i.RED_INTEGER&&(ue===i.UNSIGNED_BYTE&&(Oe=i.R8UI),ue===i.UNSIGNED_SHORT&&(Oe=i.R16UI),ue===i.UNSIGNED_INT&&(Oe=i.R32UI),ue===i.BYTE&&(Oe=i.R8I),ue===i.SHORT&&(Oe=i.R16I),ue===i.INT&&(Oe=i.R32I)),S===i.RG&&(ue===i.FLOAT&&(Oe=i.RG32F),ue===i.HALF_FLOAT&&(Oe=i.RG16F),ue===i.UNSIGNED_BYTE&&(Oe=i.RG8),ue===i.UNSIGNED_SHORT&&nt&&(Oe=nt.RG16_EXT),ue===i.SHORT&&nt&&(Oe=nt.RG16_SNORM_EXT)),S===i.RG_INTEGER&&(ue===i.UNSIGNED_BYTE&&(Oe=i.RG8UI),ue===i.UNSIGNED_SHORT&&(Oe=i.RG16UI),ue===i.UNSIGNED_INT&&(Oe=i.RG32UI),ue===i.BYTE&&(Oe=i.RG8I),ue===i.SHORT&&(Oe=i.RG16I),ue===i.INT&&(Oe=i.RG32I)),S===i.RGB_INTEGER&&(ue===i.UNSIGNED_BYTE&&(Oe=i.RGB8UI),ue===i.UNSIGNED_SHORT&&(Oe=i.RGB16UI),ue===i.UNSIGNED_INT&&(Oe=i.RGB32UI),ue===i.BYTE&&(Oe=i.RGB8I),ue===i.SHORT&&(Oe=i.RGB16I),ue===i.INT&&(Oe=i.RGB32I)),S===i.RGBA_INTEGER&&(ue===i.UNSIGNED_BYTE&&(Oe=i.RGBA8UI),ue===i.UNSIGNED_SHORT&&(Oe=i.RGBA16UI),ue===i.UNSIGNED_INT&&(Oe=i.RGBA32UI),ue===i.BYTE&&(Oe=i.RGBA8I),ue===i.SHORT&&(Oe=i.RGBA16I),ue===i.INT&&(Oe=i.RGBA32I)),S===i.RGB&&(ue===i.UNSIGNED_SHORT&&nt&&(Oe=nt.RGB16_EXT),ue===i.SHORT&&nt&&(Oe=nt.RGB16_SNORM_EXT),ue===i.UNSIGNED_INT_5_9_9_9_REV&&(Oe=i.RGB9_E5),ue===i.UNSIGNED_INT_10F_11F_11F_REV&&(Oe=i.R11F_G11F_B10F)),S===i.RGBA){let ze=st?dl:Cn.getTransfer(Me);ue===i.FLOAT&&(Oe=i.RGBA32F),ue===i.HALF_FLOAT&&(Oe=i.RGBA16F),ue===i.UNSIGNED_BYTE&&(Oe=ze===Bn?i.SRGB8_ALPHA8:i.RGBA8),ue===i.UNSIGNED_SHORT&&nt&&(Oe=nt.RGBA16_EXT),ue===i.SHORT&&nt&&(Oe=nt.RGBA16_SNORM_EXT),ue===i.UNSIGNED_SHORT_4_4_4_4&&(Oe=i.RGBA4),ue===i.UNSIGNED_SHORT_5_5_5_1&&(Oe=i.RGB5_A1)}return(Oe===i.R16F||Oe===i.R32F||Oe===i.RG16F||Oe===i.RG32F||Oe===i.RGBA16F||Oe===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Oe}function M(B,S){let ue;return B?S===null||S===xr||S===Sa?ue=i.DEPTH24_STENCIL8:S===js?ue=i.DEPTH32F_STENCIL8:S===Oo&&(ue=i.DEPTH24_STENCIL8,Qt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===xr||S===Sa?ue=i.DEPTH_COMPONENT24:S===js?ue=i.DEPTH_COMPONENT32F:S===Oo&&(ue=i.DEPTH_COMPONENT16),ue}function T(B,S){return m(B)===!0||B.isFramebufferTexture&&B.minFilter!==Ri&&B.minFilter!==Ni?Math.log2(Math.max(S.width,S.height))+1:B.mipmaps!==void 0&&B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?S.mipmaps.length:1}function R(B){let S=B.target;S.removeEventListener("dispose",R),A(S),S.isVideoTexture&&h.delete(S),S.isHTMLTexture&&d.delete(S)}function v(B){let S=B.target;S.removeEventListener("dispose",v),G(S)}function A(B){let S=n.get(B);if(S.__webglInit===void 0)return;let ue=B.source,ce=u.get(ue);if(ce){let Me=ce[S.__cacheKey];Me.usedTimes--,Me.usedTimes===0&&I(B),Object.keys(ce).length===0&&u.delete(ue)}n.remove(B)}function I(B){let S=n.get(B);i.deleteTexture(S.__webglTexture);let ue=B.source,ce=u.get(ue);delete ce[S.__cacheKey],a.memory.textures--}function G(B){let S=n.get(B);if(B.depthTexture&&(B.depthTexture.dispose(),n.remove(B.depthTexture)),B.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++){if(Array.isArray(S.__webglFramebuffer[ce]))for(let Me=0;Me<S.__webglFramebuffer[ce].length;Me++)i.deleteFramebuffer(S.__webglFramebuffer[ce][Me]);else i.deleteFramebuffer(S.__webglFramebuffer[ce]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[ce])}else{if(Array.isArray(S.__webglFramebuffer))for(let ce=0;ce<S.__webglFramebuffer.length;ce++)i.deleteFramebuffer(S.__webglFramebuffer[ce]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let ce=0;ce<S.__webglColorRenderbuffer.length;ce++)S.__webglColorRenderbuffer[ce]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[ce]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let ue=B.textures;for(let ce=0,Me=ue.length;ce<Me;ce++){let st=n.get(ue[ce]);st.__webglTexture&&(i.deleteTexture(st.__webglTexture),a.memory.textures--),n.remove(ue[ce])}n.remove(B)}let w=0;function U(){w=0}function N(){return w}function H(B){w=B}function $(){let B=w;return B>=s.maxTextures&&Qt("WebGLTextures: Trying to use "+(B+1)+" texture units while this GPU supports only "+s.maxTextures),w+=1,B}function z(B){let S=[];return S.push(B.wrapS),S.push(B.wrapT),S.push(B.wrapR||0),S.push(B.magFilter),S.push(B.minFilter),S.push(B.anisotropy),S.push(B.internalFormat),S.push(B.format),S.push(B.type),S.push(B.generateMipmaps),S.push(B.premultiplyAlpha),S.push(B.flipY),S.push(B.unpackAlignment),S.push(B.colorSpace),S.join()}function q(B,S){let ue=n.get(B);if(B.isVideoTexture&&Q(B),B.isRenderTargetTexture===!1&&B.isExternalTexture!==!0&&B.version>0&&ue.__version!==B.version){let ce=B.image;if(ce===null)Qt("WebGLRenderer: Texture marked for update but no image data found.");else if(ce.complete===!1)Qt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ue(ue,B,S);return}}else B.isExternalTexture&&(ue.__webglTexture=B.sourceTexture?B.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,ue.__webglTexture,i.TEXTURE0+S)}function Z(B,S){let ue=n.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&ue.__version!==B.version){Ue(ue,B,S);return}else B.isExternalTexture&&(ue.__webglTexture=B.sourceTexture?B.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,ue.__webglTexture,i.TEXTURE0+S)}function W(B,S){let ue=n.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&ue.__version!==B.version){Ue(ue,B,S);return}t.bindTexture(i.TEXTURE_3D,ue.__webglTexture,i.TEXTURE0+S)}function J(B,S){let ue=n.get(B);if(B.isCubeDepthTexture!==!0&&B.version>0&&ue.__version!==B.version){we(ue,B,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,ue.__webglTexture,i.TEXTURE0+S)}let me={[Qn]:i.REPEAT,[ws]:i.CLAMP_TO_EDGE,[d0]:i.MIRRORED_REPEAT},Ie={[Ri]:i.NEAREST,[sp]:i.NEAREST_MIPMAP_NEAREST,[Kl]:i.NEAREST_MIPMAP_LINEAR,[Ni]:i.LINEAR,[G0]:i.LINEAR_MIPMAP_NEAREST,[Ur]:i.LINEAR_MIPMAP_LINEAR},qe={[lp]:i.NEVER,[dp]:i.ALWAYS,[cp]:i.LESS,[Tu]:i.LEQUAL,[up]:i.EQUAL,[wu]:i.GEQUAL,[hp]:i.GREATER,[fp]:i.NOTEQUAL};function $e(B,S){if(S.type===js&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Ni||S.magFilter===G0||S.magFilter===Kl||S.magFilter===Ur||S.minFilter===Ni||S.minFilter===G0||S.minFilter===Kl||S.minFilter===Ur)&&Qt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(B,i.TEXTURE_WRAP_S,me[S.wrapS]),i.texParameteri(B,i.TEXTURE_WRAP_T,me[S.wrapT]),(B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY)&&i.texParameteri(B,i.TEXTURE_WRAP_R,me[S.wrapR]),i.texParameteri(B,i.TEXTURE_MAG_FILTER,Ie[S.magFilter]),i.texParameteri(B,i.TEXTURE_MIN_FILTER,Ie[S.minFilter]),S.compareFunction&&(i.texParameteri(B,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(B,i.TEXTURE_COMPARE_FUNC,qe[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Ri||S.minFilter!==Kl&&S.minFilter!==Ur||S.type===js&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let ue=e.get("EXT_texture_filter_anisotropic");i.texParameterf(B,ue.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function xt(B,S){let ue=!1;B.__webglInit===void 0&&(B.__webglInit=!0,S.addEventListener("dispose",R));let ce=S.source,Me=u.get(ce);Me===void 0&&(Me={},u.set(ce,Me));let st=z(S);if(st!==B.__cacheKey){Me[st]===void 0&&(Me[st]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,ue=!0),Me[st].usedTimes++;let nt=Me[B.__cacheKey];nt!==void 0&&(Me[B.__cacheKey].usedTimes--,nt.usedTimes===0&&I(S)),B.__cacheKey=st,B.__webglTexture=Me[st].texture}return ue}function re(B,S,ue){return Math.floor(Math.floor(B/ue)/S)}function fe(B,S,ue,ce){let st=B.updateRanges;if(st.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,ue,ce,S.data);else{st.sort((vt,L)=>vt.start-L.start);let nt=0;for(let vt=1;vt<st.length;vt++){let L=st[nt],ae=st[vt],he=L.start+L.count,Se=re(ae.start,S.width,4),Ae=re(L.start,S.width,4);ae.start<=he+1&&Se===Ae&&re(ae.start+ae.count-1,S.width,4)===Se?L.count=Math.max(L.count,ae.start+ae.count-L.start):(++nt,st[nt]=ae)}st.length=nt+1;let Oe=t.getParameter(i.UNPACK_ROW_LENGTH),ze=t.getParameter(i.UNPACK_SKIP_PIXELS),je=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let vt=0,L=st.length;vt<L;vt++){let ae=st[vt],he=Math.floor(ae.start/4),Se=Math.ceil(ae.count/4),Ae=he%S.width,k=Math.floor(he/S.width),De=Se,xe=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Ae),t.pixelStorei(i.UNPACK_SKIP_ROWS,k),t.texSubImage2D(i.TEXTURE_2D,0,Ae,k,De,xe,ue,ce,S.data)}B.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Oe),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ze),t.pixelStorei(i.UNPACK_SKIP_ROWS,je)}}function Ue(B,S,ue){let ce=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ce=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ce=i.TEXTURE_3D);let Me=xt(B,S),st=S.source;t.bindTexture(ce,B.__webglTexture,i.TEXTURE0+ue);let nt=n.get(st);if(st.version!==nt.__version||Me===!0){if(t.activeTexture(i.TEXTURE0+ue),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let xe=Cn.getPrimaries(Cn.workingColorSpace),Be=S.colorSpace===vr?null:Cn.getPrimaries(S.colorSpace),Ne=S.colorSpace===vr||xe===Be?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne)}t.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment);let ze=g(S.image,!1,s.maxTextureSize);ze=It(S,ze);let je=r.convert(S.format,S.colorSpace),vt=r.convert(S.type),L=y(S.internalFormat,je,vt,S.normalized,S.colorSpace,S.isVideoTexture);$e(ce,S);let ae,he=S.mipmaps,Se=S.isVideoTexture!==!0,Ae=nt.__version===void 0||Me===!0,k=st.dataReady,De=T(S,ze);if(S.isDepthTexture)L=M(S.format===Fr,S.type),Ae&&(Se?t.texStorage2D(i.TEXTURE_2D,1,L,ze.width,ze.height):t.texImage2D(i.TEXTURE_2D,0,L,ze.width,ze.height,0,je,vt,null));else if(S.isDataTexture)if(he.length>0){Se&&Ae&&t.texStorage2D(i.TEXTURE_2D,De,L,he[0].width,he[0].height);for(let xe=0,Be=he.length;xe<Be;xe++)ae=he[xe],Se?k&&t.texSubImage2D(i.TEXTURE_2D,xe,0,0,ae.width,ae.height,je,vt,ae.data):t.texImage2D(i.TEXTURE_2D,xe,L,ae.width,ae.height,0,je,vt,ae.data);S.generateMipmaps=!1}else Se?(Ae&&t.texStorage2D(i.TEXTURE_2D,De,L,ze.width,ze.height),k&&fe(S,ze,je,vt)):t.texImage2D(i.TEXTURE_2D,0,L,ze.width,ze.height,0,je,vt,ze.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Se&&Ae&&t.texStorage3D(i.TEXTURE_2D_ARRAY,De,L,he[0].width,he[0].height,ze.depth);for(let xe=0,Be=he.length;xe<Be;xe++)if(ae=he[xe],S.format!==rs)if(je!==null)if(Se){if(k)if(S.layerUpdates.size>0){let Ne=hf(ae.width,ae.height,S.format,S.type);for(let se of S.layerUpdates){let at=ae.data.subarray(se*Ne/ae.data.BYTES_PER_ELEMENT,(se+1)*Ne/ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,xe,0,0,se,ae.width,ae.height,1,je,at)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,xe,0,0,0,ae.width,ae.height,ze.depth,je,ae.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,xe,L,ae.width,ae.height,ze.depth,0,ae.data,0,0);else Qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Se?k&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,xe,0,0,0,ae.width,ae.height,ze.depth,je,vt,ae.data):t.texImage3D(i.TEXTURE_2D_ARRAY,xe,L,ae.width,ae.height,ze.depth,0,je,vt,ae.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{Se&&Ae&&t.texStorage2D(i.TEXTURE_2D,De,L,he[0].width,he[0].height);for(let xe=0,Be=he.length;xe<Be;xe++)ae=he[xe],S.format!==rs?je!==null?Se?k&&t.compressedTexSubImage2D(i.TEXTURE_2D,xe,0,0,ae.width,ae.height,je,ae.data):t.compressedTexImage2D(i.TEXTURE_2D,xe,L,ae.width,ae.height,0,ae.data):Qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Se?k&&t.texSubImage2D(i.TEXTURE_2D,xe,0,0,ae.width,ae.height,je,vt,ae.data):t.texImage2D(i.TEXTURE_2D,xe,L,ae.width,ae.height,0,je,vt,ae.data)}else if(S.isDataArrayTexture)if(Se){if(Ae&&t.texStorage3D(i.TEXTURE_2D_ARRAY,De,L,ze.width,ze.height,ze.depth),k)if(S.layerUpdates.size>0){let xe=hf(ze.width,ze.height,S.format,S.type);for(let Be of S.layerUpdates){let Ne=ze.data.subarray(Be*xe/ze.data.BYTES_PER_ELEMENT,(Be+1)*xe/ze.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Be,ze.width,ze.height,1,je,vt,Ne)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ze.width,ze.height,ze.depth,je,vt,ze.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,L,ze.width,ze.height,ze.depth,0,je,vt,ze.data);else if(S.isData3DTexture)Se?(Ae&&t.texStorage3D(i.TEXTURE_3D,De,L,ze.width,ze.height,ze.depth),k&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ze.width,ze.height,ze.depth,je,vt,ze.data)):t.texImage3D(i.TEXTURE_3D,0,L,ze.width,ze.height,ze.depth,0,je,vt,ze.data);else if(S.isFramebufferTexture){if(Ae)if(Se)t.texStorage2D(i.TEXTURE_2D,De,L,ze.width,ze.height);else{let xe=ze.width,Be=ze.height;for(let Ne=0;Ne<De;Ne++)t.texImage2D(i.TEXTURE_2D,Ne,L,xe,Be,0,je,vt,null),xe>>=1,Be>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in i){let xe=i.canvas;if(xe.hasAttribute("layoutsubtree")||xe.setAttribute("layoutsubtree","true"),ze.parentNode!==xe){xe.appendChild(ze),d.add(S),xe.onpaint=Be=>{let Ne=Be.changedElements;for(let se of d)Ne.includes(se.image)&&(se.needsUpdate=!0)},xe.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ze);else{let Ne=i.RGBA,se=i.RGBA,at=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ne,se,at,ze)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(he.length>0){if(Se&&Ae){let xe=At(he[0]);t.texStorage2D(i.TEXTURE_2D,De,L,xe.width,xe.height)}for(let xe=0,Be=he.length;xe<Be;xe++)ae=he[xe],Se?k&&t.texSubImage2D(i.TEXTURE_2D,xe,0,0,je,vt,ae):t.texImage2D(i.TEXTURE_2D,xe,L,je,vt,ae);S.generateMipmaps=!1}else if(Se){if(Ae){let xe=At(ze);t.texStorage2D(i.TEXTURE_2D,De,L,xe.width,xe.height)}k&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,je,vt,ze)}else t.texImage2D(i.TEXTURE_2D,0,L,je,vt,ze);m(S)&&_(ce),nt.__version=st.version,S.onUpdate&&S.onUpdate(S)}B.__version=S.version}function we(B,S,ue){if(S.image.length!==6)return;let ce=xt(B,S),Me=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+ue);let st=n.get(Me);if(Me.version!==st.__version||ce===!0){t.activeTexture(i.TEXTURE0+ue);let nt=Cn.getPrimaries(Cn.workingColorSpace),Oe=S.colorSpace===vr?null:Cn.getPrimaries(S.colorSpace),ze=S.colorSpace===vr||nt===Oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);let je=S.isCompressedTexture||S.image[0].isCompressedTexture,vt=S.image[0]&&S.image[0].isDataTexture,L=[];for(let se=0;se<6;se++)!je&&!vt?L[se]=g(S.image[se],!0,s.maxCubemapSize):L[se]=vt?S.image[se].image:S.image[se],L[se]=It(S,L[se]);let ae=L[0],he=r.convert(S.format,S.colorSpace),Se=r.convert(S.type),Ae=y(S.internalFormat,he,Se,S.normalized,S.colorSpace),k=S.isVideoTexture!==!0,De=st.__version===void 0||ce===!0,xe=Me.dataReady,Be=T(S,ae);$e(i.TEXTURE_CUBE_MAP,S);let Ne;if(je){k&&De&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Be,Ae,ae.width,ae.height);for(let se=0;se<6;se++){Ne=L[se].mipmaps;for(let at=0;at<Ne.length;at++){let Je=Ne[at];S.format!==rs?he!==null?k?xe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,at,0,0,Je.width,Je.height,he,Je.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,at,Ae,Je.width,Je.height,0,Je.data):Qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,at,0,0,Je.width,Je.height,he,Se,Je.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,at,Ae,Je.width,Je.height,0,he,Se,Je.data)}}}else{if(Ne=S.mipmaps,k&&De){Ne.length>0&&Be++;let se=At(L[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Be,Ae,se.width,se.height)}for(let se=0;se<6;se++)if(vt){k?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,L[se].width,L[se].height,he,Se,L[se].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Ae,L[se].width,L[se].height,0,he,Se,L[se].data);for(let at=0;at<Ne.length;at++){let mt=Ne[at].image[se].image;k?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,at+1,0,0,mt.width,mt.height,he,Se,mt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,at+1,Ae,mt.width,mt.height,0,he,Se,mt.data)}}else{k?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,he,Se,L[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Ae,he,Se,L[se]);for(let at=0;at<Ne.length;at++){let Je=Ne[at];k?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,at+1,0,0,he,Se,Je.image[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,at+1,Ae,he,Se,Je.image[se])}}}m(S)&&_(i.TEXTURE_CUBE_MAP),st.__version=Me.version,S.onUpdate&&S.onUpdate(S)}B.__version=S.version}function Ve(B,S,ue,ce,Me,st){let nt=r.convert(ue.format,ue.colorSpace),Oe=r.convert(ue.type),ze=y(ue.internalFormat,nt,Oe,ue.normalized,ue.colorSpace),je=n.get(S),vt=n.get(ue);if(vt.__renderTarget=S,!je.__hasExternalTextures){let L=Math.max(1,S.width>>st),ae=Math.max(1,S.height>>st);Me===i.TEXTURE_3D||Me===i.TEXTURE_2D_ARRAY?t.texImage3D(Me,st,ze,L,ae,S.depth,0,nt,Oe,null):t.texImage2D(Me,st,ze,L,ae,0,nt,Oe,null)}t.bindFramebuffer(i.FRAMEBUFFER,B),ft(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ce,Me,vt.__webglTexture,0,ut(S)):(Me===i.TEXTURE_2D||Me>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Me<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ce,Me,vt.__webglTexture,st),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ie(B,S,ue){if(i.bindRenderbuffer(i.RENDERBUFFER,B),S.depthBuffer){let ce=S.depthTexture,Me=ce&&ce.isDepthTexture?ce.type:null,st=M(S.stencilBuffer,Me),nt=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ft(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ut(S),st,S.width,S.height):ue?i.renderbufferStorageMultisample(i.RENDERBUFFER,ut(S),st,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,st,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,B)}else{let ce=S.textures;for(let Me=0;Me<ce.length;Me++){let st=ce[Me],nt=r.convert(st.format,st.colorSpace),Oe=r.convert(st.type),ze=y(st.internalFormat,nt,Oe,st.normalized,st.colorSpace);ft(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ut(S),ze,S.width,S.height):ue?i.renderbufferStorageMultisample(i.RENDERBUFFER,ut(S),ze,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,ze,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Qe(B,S,ue){let ce=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,B),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Me=n.get(S.depthTexture);if(Me.__renderTarget=S,(!Me.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),ce){if(Me.__webglInit===void 0&&(Me.__webglInit=!0,S.depthTexture.addEventListener("dispose",R)),Me.__webglTexture===void 0){Me.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,Me.__webglTexture),$e(i.TEXTURE_CUBE_MAP,S.depthTexture);let je=r.convert(S.depthTexture.format),vt=r.convert(S.depthTexture.type),L;S.depthTexture.format===Cr?L=i.DEPTH_COMPONENT24:S.depthTexture.format===Fr&&(L=i.DEPTH24_STENCIL8);for(let ae=0;ae<6;ae++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,L,S.width,S.height,0,je,vt,null)}}else q(S.depthTexture,0);let st=Me.__webglTexture,nt=ut(S),Oe=ce?i.TEXTURE_CUBE_MAP_POSITIVE_X+ue:i.TEXTURE_2D,ze=S.depthTexture.format===Fr?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(S.depthTexture.format===Cr)ft(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ze,Oe,st,0,nt):i.framebufferTexture2D(i.FRAMEBUFFER,ze,Oe,st,0);else if(S.depthTexture.format===Fr)ft(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ze,Oe,st,0,nt):i.framebufferTexture2D(i.FRAMEBUFFER,ze,Oe,st,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function le(B){let S=n.get(B),ue=B.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==B.depthTexture){let ce=B.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),ce){let Me=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,ce.removeEventListener("dispose",Me)};ce.addEventListener("dispose",Me),S.__depthDisposeCallback=Me}S.__boundDepthTexture=ce}if(B.depthTexture&&!S.__autoAllocateDepthBuffer)if(ue)for(let ce=0;ce<6;ce++)Qe(S.__webglFramebuffer[ce],B,ce);else{let ce=B.texture.mipmaps;ce&&ce.length>0?Qe(S.__webglFramebuffer[0],B,0):Qe(S.__webglFramebuffer,B,0)}else if(ue){S.__webglDepthbuffer=[];for(let ce=0;ce<6;ce++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[ce]),S.__webglDepthbuffer[ce]===void 0)S.__webglDepthbuffer[ce]=i.createRenderbuffer(),ie(S.__webglDepthbuffer[ce],B,!1);else{let Me=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=S.__webglDepthbuffer[ce];i.bindRenderbuffer(i.RENDERBUFFER,st),i.framebufferRenderbuffer(i.FRAMEBUFFER,Me,i.RENDERBUFFER,st)}}else{let ce=B.texture.mipmaps;if(ce&&ce.length>0?t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),ie(S.__webglDepthbuffer,B,!1);else{let Me=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,st),i.framebufferRenderbuffer(i.FRAMEBUFFER,Me,i.RENDERBUFFER,st)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ye(B,S,ue){let ce=n.get(B);S!==void 0&&Ve(ce.__webglFramebuffer,B,B.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),ue!==void 0&&le(B)}function ee(B){let S=B.texture,ue=n.get(B),ce=n.get(S);B.addEventListener("dispose",v);let Me=B.textures,st=B.isWebGLCubeRenderTarget===!0,nt=Me.length>1;if(nt||(ce.__webglTexture===void 0&&(ce.__webglTexture=i.createTexture()),ce.__version=S.version,a.memory.textures++),st){ue.__webglFramebuffer=[];for(let Oe=0;Oe<6;Oe++)if(S.mipmaps&&S.mipmaps.length>0){ue.__webglFramebuffer[Oe]=[];for(let ze=0;ze<S.mipmaps.length;ze++)ue.__webglFramebuffer[Oe][ze]=i.createFramebuffer()}else ue.__webglFramebuffer[Oe]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){ue.__webglFramebuffer=[];for(let Oe=0;Oe<S.mipmaps.length;Oe++)ue.__webglFramebuffer[Oe]=i.createFramebuffer()}else ue.__webglFramebuffer=i.createFramebuffer();if(nt)for(let Oe=0,ze=Me.length;Oe<ze;Oe++){let je=n.get(Me[Oe]);je.__webglTexture===void 0&&(je.__webglTexture=i.createTexture(),a.memory.textures++)}if(B.samples>0&&ft(B)===!1){ue.__webglMultisampledFramebuffer=i.createFramebuffer(),ue.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglMultisampledFramebuffer);for(let Oe=0;Oe<Me.length;Oe++){let ze=Me[Oe];ue.__webglColorRenderbuffer[Oe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,ue.__webglColorRenderbuffer[Oe]);let je=r.convert(ze.format,ze.colorSpace),vt=r.convert(ze.type),L=y(ze.internalFormat,je,vt,ze.normalized,ze.colorSpace,B.isXRRenderTarget===!0),ae=ut(B);i.renderbufferStorageMultisample(i.RENDERBUFFER,ae,L,B.width,B.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Oe,i.RENDERBUFFER,ue.__webglColorRenderbuffer[Oe])}i.bindRenderbuffer(i.RENDERBUFFER,null),B.depthBuffer&&(ue.__webglDepthRenderbuffer=i.createRenderbuffer(),ie(ue.__webglDepthRenderbuffer,B,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(st){t.bindTexture(i.TEXTURE_CUBE_MAP,ce.__webglTexture),$e(i.TEXTURE_CUBE_MAP,S);for(let Oe=0;Oe<6;Oe++)if(S.mipmaps&&S.mipmaps.length>0)for(let ze=0;ze<S.mipmaps.length;ze++)Ve(ue.__webglFramebuffer[Oe][ze],B,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,ze);else Ve(ue.__webglFramebuffer[Oe],B,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0);m(S)&&_(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(nt){for(let Oe=0,ze=Me.length;Oe<ze;Oe++){let je=Me[Oe],vt=n.get(je),L=i.TEXTURE_2D;(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(L=B.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(L,vt.__webglTexture),$e(L,je),Ve(ue.__webglFramebuffer,B,je,i.COLOR_ATTACHMENT0+Oe,L,0),m(je)&&_(L)}t.unbindTexture()}else{let Oe=i.TEXTURE_2D;if((B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(Oe=B.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Oe,ce.__webglTexture),$e(Oe,S),S.mipmaps&&S.mipmaps.length>0)for(let ze=0;ze<S.mipmaps.length;ze++)Ve(ue.__webglFramebuffer[ze],B,S,i.COLOR_ATTACHMENT0,Oe,ze);else Ve(ue.__webglFramebuffer,B,S,i.COLOR_ATTACHMENT0,Oe,0);m(S)&&_(Oe),t.unbindTexture()}B.depthBuffer&&le(B)}function ge(B){let S=B.textures;for(let ue=0,ce=S.length;ue<ce;ue++){let Me=S[ue];if(m(Me)){let st=b(B),nt=n.get(Me).__webglTexture;t.bindTexture(st,nt),_(st),t.unbindTexture()}}}let Te=[],Ze=[];function Ye(B){if(B.samples>0){if(ft(B)===!1){let S=B.textures,ue=B.width,ce=B.height,Me=i.COLOR_BUFFER_BIT,st=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,nt=n.get(B),Oe=S.length>1;if(Oe)for(let je=0;je<S.length;je++)t.bindFramebuffer(i.FRAMEBUFFER,nt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+je,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,nt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+je,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,nt.__webglMultisampledFramebuffer);let ze=B.texture.mipmaps;ze&&ze.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,nt.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,nt.__webglFramebuffer);for(let je=0;je<S.length;je++){if(B.resolveDepthBuffer&&(B.depthBuffer&&(Me|=i.DEPTH_BUFFER_BIT),B.stencilBuffer&&B.resolveStencilBuffer&&(Me|=i.STENCIL_BUFFER_BIT)),Oe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,nt.__webglColorRenderbuffer[je]);let vt=n.get(S[je]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,vt,0)}i.blitFramebuffer(0,0,ue,ce,0,0,ue,ce,Me,i.NEAREST),c===!0&&(Te.length=0,Ze.length=0,Te.push(i.COLOR_ATTACHMENT0+je),B.depthBuffer&&B.storeMultisampledDepthBuffer===!1&&(Te.push(st),Ze.push(st),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ze)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Te))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Oe)for(let je=0;je<S.length;je++){t.bindFramebuffer(i.FRAMEBUFFER,nt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+je,i.RENDERBUFFER,nt.__webglColorRenderbuffer[je]);let vt=n.get(S[je]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,nt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+je,i.TEXTURE_2D,vt,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,nt.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.storeMultisampledDepthBuffer===!1&&c){let S=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function ut(B){return Math.min(s.maxSamples,B.samples)}function ft(B){let S=n.get(B);return B.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Q(B){let S=a.render.frame;h.get(B)!==S&&(h.set(B,S),B.update())}function It(B,S){let ue=B.colorSpace,ce=B.format,Me=B.type;return B.isCompressedTexture===!0||B.isVideoTexture===!0||ue!==fl&&ue!==vr&&(Cn.getTransfer(ue)===Bn?(ce!==rs||Me!==zi)&&Qt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):en("WebGLTextures: Unsupported texture color space:",ue)),S}function At(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement?(l.width=B.naturalWidth||B.width,l.height=B.naturalHeight||B.height):typeof VideoFrame<"u"&&B instanceof VideoFrame?(l.width=B.displayWidth,l.height=B.displayHeight):(l.width=B.width,l.height=B.height),l}this.allocateTextureUnit=$,this.resetTextureUnits=U,this.getTextureUnits=N,this.setTextureUnits=H,this.setTexture2D=q,this.setTexture2DArray=Z,this.setTexture3D=W,this.setTextureCube=J,this.rebindTextures=ye,this.setupRenderTarget=ee,this.updateRenderTargetMipmap=ge,this.updateMultisampleRenderTarget=Ye,this.setupDepthRenderbuffer=le,this.setupFrameBufferTexture=Ve,this.useMultisampledRTT=ft,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Yy(i,e){function t(n,s=vr){let r,a=Cn.getTransfer(s);if(n===zi)return i.UNSIGNED_BYTE;if(n===V0)return i.UNSIGNED_SHORT_4_4_4_4;if(n===W0)return i.UNSIGNED_SHORT_5_5_5_1;if(n===jh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ef)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Kh)return i.BYTE;if(n===Qh)return i.SHORT;if(n===Oo)return i.UNSIGNED_SHORT;if(n===k0)return i.INT;if(n===xr)return i.UNSIGNED_INT;if(n===js)return i.FLOAT;if(n===hi)return i.HALF_FLOAT;if(n===tf)return i.ALPHA;if(n===nf)return i.RGB;if(n===rs)return i.RGBA;if(n===Cr)return i.DEPTH_COMPONENT;if(n===Fr)return i.DEPTH_STENCIL;if(n===X0)return i.RED;if(n===Y0)return i.RED_INTEGER;if(n===ba)return i.RG;if(n===q0)return i.RG_INTEGER;if(n===Z0)return i.RGBA_INTEGER;if(n===Ql||n===jl||n===ec||n===tc)if(a===Bn)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ql)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===jl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ec)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===tc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ql)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===jl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ec)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===tc)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===$0||n===J0||n===K0||n===Q0)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===$0)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===J0)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===K0)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Q0)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===j0||n===eu||n===tu||n===nu||n===iu||n===nc||n===su)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===j0||n===eu)return a===Bn?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===tu)return a===Bn?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===nu)return r.COMPRESSED_R11_EAC;if(n===iu)return r.COMPRESSED_SIGNED_R11_EAC;if(n===nc)return r.COMPRESSED_RG11_EAC;if(n===su)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ru||n===au||n===ou||n===lu||n===cu||n===uu||n===hu||n===fu||n===du||n===pu||n===mu||n===gu||n===xu||n===vu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ru)return a===Bn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===au)return a===Bn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ou)return a===Bn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===lu)return a===Bn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===cu)return a===Bn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===uu)return a===Bn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===hu)return a===Bn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===fu)return a===Bn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===du)return a===Bn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===pu)return a===Bn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===mu)return a===Bn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===gu)return a===Bn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===xu)return a===Bn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===vu)return a===Bn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===yu||n===_u||n===Mu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===yu)return a===Bn?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===_u)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Mu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Eu||n===Su||n===ic||n===bu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Eu)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Su)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ic)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===bu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Sa?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var qy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Zy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Pf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Sl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Nn({vertexShader:qy,fragmentShader:Zy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Fe(new an(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},If=class extends Pr{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,p=null,u=null,f=null,x=typeof XRWebGLBinding<"u",g=new Pf,m={},_=t.getContextAttributes(),b=null,y=null,M=[],T=[],R=new it,v=null,A=null,I=new $i;I.viewport=new ai;let G=new $i;G.viewport=new ai;let w=[I,G],U=new F0,N=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let fe=M[re];return fe===void 0&&(fe=new Eo,M[re]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(re){let fe=M[re];return fe===void 0&&(fe=new Eo,M[re]=fe),fe.getGripSpace()},this.getHand=function(re){let fe=M[re];return fe===void 0&&(fe=new Eo,M[re]=fe),fe.getHandSpace()};function $(re){let fe=T.indexOf(re.inputSource);if(fe===-1)return;let Ue=M[fe];Ue!==void 0&&(Ue.update(re.inputSource,re.frame,l||a),Ue.dispatchEvent({type:re.type,data:re.inputSource}))}function z(){s.removeEventListener("select",$),s.removeEventListener("selectstart",$),s.removeEventListener("selectend",$),s.removeEventListener("squeeze",$),s.removeEventListener("squeezestart",$),s.removeEventListener("squeezeend",$),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",q);for(let re=0;re<M.length;re++){let fe=T[re];fe!==null&&(T[re]=null,M[re].disconnect(fe))}N=null,H=null,g.reset();for(let re in m)delete m[re];if(e.setRenderTarget(b),u=null,p=null,d=null,s=null,y=null,xt.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(R.width,R.height,!1),A!==null){let re=A.camera;re.fov=A.fov,re.zoom=A.zoom,re.updateProjectionMatrix(),A=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){r=re,n.isPresenting===!0&&Qt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){o=re,n.isPresenting===!0&&Qt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(re){l=re},this.getBaseLayer=function(){return p!==null?p:u},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return f},this.getSession=function(){return s},this.setSession=async function(re){if(s=re,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",$),s.addEventListener("selectstart",$),s.addEventListener("selectend",$),s.addEventListener("squeeze",$),s.addEventListener("squeezestart",$),s.addEventListener("squeezeend",$),s.addEventListener("end",z),s.addEventListener("inputsourceschange",q),_.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(R),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ue=null,we=null,Ve=null;_.depth&&(Ve=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ue=_.stencil?Fr:Cr,we=_.stencil?Sa:xr);let ie={colorFormat:t.RGBA8,depthFormat:Ve,scaleFactor:r};d=this.getBinding(),p=d.createProjectionLayer(ie),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),y=new oi(p.textureWidth,p.textureHeight,{format:rs,type:zi,depthTexture:new Js(p.textureWidth,p.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,Ue),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}else{let Ue={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,t,Ue),s.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),y=new oi(u.framebufferWidth,u.framebufferHeight,{format:rs,type:zi,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),xt.setContext(s),xt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function q(re){for(let fe=0;fe<re.removed.length;fe++){let Ue=re.removed[fe],we=T.indexOf(Ue);we>=0&&(T[we]=null,M[we].disconnect(Ue))}for(let fe=0;fe<re.added.length;fe++){let Ue=re.added[fe],we=T.indexOf(Ue);if(we===-1){for(let ie=0;ie<M.length;ie++)if(ie>=T.length){T.push(Ue),we=ie;break}else if(T[ie]===null){T[ie]=Ue,we=ie;break}if(we===-1)break}let Ve=M[we];Ve&&Ve.connect(Ue)}}let Z=new F,W=new F;function J(re,fe,Ue){Z.setFromMatrixPosition(fe.matrixWorld),W.setFromMatrixPosition(Ue.matrixWorld);let we=Z.distanceTo(W),Ve=fe.projectionMatrix.elements,ie=Ue.projectionMatrix.elements,Qe=Ve[14]/(Ve[10]-1),le=Ve[14]/(Ve[10]+1),ye=(Ve[9]+1)/Ve[5],ee=(Ve[9]-1)/Ve[5],ge=(Ve[8]-1)/Ve[0],Te=(ie[8]+1)/ie[0],Ze=Qe*ge,Ye=Qe*Te,ut=we/(-ge+Te),ft=ut*-ge;if(fe.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(ft),re.translateZ(ut),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),Ve[10]===-1)re.projectionMatrix.copy(fe.projectionMatrix),re.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{let Q=Qe+ut,It=le+ut,At=Ze-ft,B=Ye+(we-ft),S=ye*le/It*Q,ue=ee*le/It*Q;re.projectionMatrix.makePerspective(At,B,S,ue,Q,It),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function me(re,fe){fe===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(fe.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(s===null)return;let fe=re.near,Ue=re.far;g.texture!==null&&(g.depthNear>0&&(fe=g.depthNear),g.depthFar>0&&(Ue=g.depthFar)),U.near=G.near=I.near=fe,U.far=G.far=I.far=Ue,(N!==U.near||H!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),N=U.near,H=U.far),U.layers.mask=re.layers.mask|6,I.layers.mask=U.layers.mask&-5,G.layers.mask=U.layers.mask&-3;let we=re.parent,Ve=U.cameras;me(U,we);for(let ie=0;ie<Ve.length;ie++)me(Ve[ie],we);Ve.length===2?J(U,I,G):U.projectionMatrix.copy(I.projectionMatrix),A===null&&re.isPerspectiveCamera&&(A={camera:re,fov:re.fov,zoom:re.zoom}),Ie(re,U,we)};function Ie(re,fe,Ue){Ue===null?re.matrix.copy(fe.matrixWorld):(re.matrix.copy(Ue.matrixWorld),re.matrix.invert(),re.matrix.multiply(fe.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(fe.projectionMatrix),re.projectionMatrixInverse.copy(fe.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=gl*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(p===null&&u===null))return c},this.setFoveation=function(re){c=re,p!==null&&(p.fixedFoveation=re),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=re)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(U)},this.getCameraTexture=function(re){return m[re]};let qe=null;function $e(re,fe){if(h=fe.getViewerPose(l||a),f=fe,h!==null){let Ue=h.views;u!==null&&(e.setRenderTargetFramebuffer(y,u.framebuffer),e.setRenderTarget(y));let we=!1;Ue.length!==U.cameras.length&&(U.cameras.length=0,we=!0);for(let le=0;le<Ue.length;le++){let ye=Ue[le],ee=null;if(u!==null)ee=u.getViewport(ye);else{let Te=d.getViewSubImage(p,ye);ee=Te.viewport,le===0&&(e.setRenderTargetTextures(y,Te.colorTexture,Te.depthStencilTexture),e.setRenderTarget(y))}let ge=w[le];ge===void 0&&(ge=new $i,ge.layers.enable(le),ge.viewport=new ai,w[le]=ge),ge.matrix.fromArray(ye.transform.matrix),ge.matrix.decompose(ge.position,ge.quaternion,ge.scale),ge.projectionMatrix.fromArray(ye.projectionMatrix),ge.projectionMatrixInverse.copy(ge.projectionMatrix).invert(),ge.viewport.set(ee.x,ee.y,ee.width,ee.height),le===0&&(U.matrix.copy(ge.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),we===!0&&U.cameras.push(ge)}let Ve=s.enabledFeatures;if(Ve&&Ve.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=n.getBinding();let le=d.getDepthInformation(Ue[0]);le&&le.isValid&&le.texture&&g.init(le,s.renderState)}if(Ve&&Ve.includes("camera-access")&&x){e.state.unbindTexture(),d=n.getBinding();for(let le=0;le<Ue.length;le++){let ye=Ue[le].camera;if(ye){let ee=m[ye];ee||(ee=new Sl,m[ye]=ee);let ge=d.getCameraImage(ye);ee.sourceTexture=ge}}}}for(let Ue=0;Ue<M.length;Ue++){let we=T[Ue],Ve=M[Ue];we!==null&&Ve!==void 0&&Ve.update(we,fe,l||a)}qe&&qe(re,fe),fe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:fe}),f=null}let xt=new qp;xt.setAnimationLoop($e),this.setAnimationLoop=function(re){qe=re},this.dispose=function(){}}},$y=new kt,jp=new fn;jp.set(-1,0,0,0,1,0,0,0,1);function Jy(i,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,lf(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,_,b,y){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),d(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),p(g,m),m.isMeshPhysicalMaterial&&u(g,m,y)):m.isMeshMatcapMaterial?(r(g,m),f(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),x(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?c(g,m,_,b):m.isSpriteMaterial?l(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===es&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===es&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let _=e.get(m),b=_.envMap,y=_.envMapRotation;b&&(g.envMap.value=b,g.envMapRotation.value.setFromMatrix4($y.makeRotationFromEuler(y)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(jp),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,_,b){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*_,g.scale.value=b*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function p(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function u(g,m,_){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===es&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function f(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){let _=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Ky(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,M){let T=M.program;n.uniformBlockBinding(y,T)}function l(y,M){let T=s[y.id];T===void 0&&(g(y),T=h(y),s[y.id]=T,y.addEventListener("dispose",_));let R=M.program;n.updateUBOMapping(y,R);let v=e.render.frame;r[y.id]!==v&&(p(y),r[y.id]=v)}function h(y){let M=d();y.__bindingPointIndex=M;let T=i.createBuffer(),R=y.__size,v=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,R,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,T),T}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return en("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(y){let M=s[y.id],T=y.uniforms,R=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let v=0,A=T.length;v<A;v++){let I=T[v];if(Array.isArray(I))for(let G=0,w=I.length;G<w;G++)u(I[G],v,G,R);else u(I,v,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(y,M,T,R){if(x(y,M,T,R)===!0){let v=y.__offset,A=y.value;if(Array.isArray(A)){let I=0;for(let G=0;G<A.length;G++){let w=A[G],U=m(w);f(w,y.__data,I),typeof w!="number"&&typeof w!="boolean"&&!w.isMatrix3&&!ArrayBuffer.isView(w)&&(I+=U.storage/Float32Array.BYTES_PER_ELEMENT)}}else f(A,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,y.__data)}}function f(y,M,T){typeof y=="number"||typeof y=="boolean"?M[0]=y:y.isMatrix3?(M[0]=y.elements[0],M[1]=y.elements[1],M[2]=y.elements[2],M[3]=0,M[4]=y.elements[3],M[5]=y.elements[4],M[6]=y.elements[5],M[7]=0,M[8]=y.elements[6],M[9]=y.elements[7],M[10]=y.elements[8],M[11]=0):ArrayBuffer.isView(y)?M.set(new y.constructor(y.buffer,y.byteOffset,M.length)):y.toArray(M,T)}function x(y,M,T,R){let v=y.value,A=M+"_"+T;if(R[A]===void 0)return typeof v=="number"||typeof v=="boolean"?R[A]=v:ArrayBuffer.isView(v)?R[A]=v.slice():R[A]=v.clone(),!0;{let I=R[A];if(typeof v=="number"||typeof v=="boolean"){if(I!==v)return R[A]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(I.equals(v)===!1)return I.copy(v),!0}}return!1}function g(y){let M=y.uniforms,T=0,R=16;for(let A=0,I=M.length;A<I;A++){let G=Array.isArray(M[A])?M[A]:[M[A]];for(let w=0,U=G.length;w<U;w++){let N=G[w],H=Array.isArray(N.value)?N.value:[N.value];for(let $=0,z=H.length;$<z;$++){let q=H[$],Z=m(q),W=T%R,J=W%Z.boundary,me=W+J;T+=J,me!==0&&R-me<Z.storage&&(T+=R-me),N.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=T,T+=Z.storage}}}let v=T%R;return v>0&&(T+=R-v),y.__size=T,y.__cache={},this}function m(y){let M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?Qt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(M.boundary=16,M.storage=y.byteLength):Qt("WebGLRenderer: Unsupported uniform value type.",y),M}function _(y){let M=y.target;M.removeEventListener("dispose",_);let T=a.indexOf(M.__bindingPointIndex);a.splice(T,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function b(){for(let y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:c,update:l,dispose:b}}var Qy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Or=null;function jy(){return Or===null&&(Or=new $s(Qy,16,16,ba,hi),Or.name="DFG_LUT",Or.minFilter=Ni,Or.magFilter=Ni,Or.wrapS=ws,Or.wrapT=ws,Or.generateMipmaps=!1,Or.needsUpdate=!0),Or}var Cu=class{constructor(e={}){let{canvas:t=pp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:p=!1,outputBufferType:u=zi}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;let x=u,g=new Set([Z0,q0,Y0]),m=new Set([zi,xr,Oo,Sa,V0,W0]),_=new Uint32Array(4),b=new Int32Array(4),y=new F,M=null,T=null,R=[],v=[],A=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Us,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,G=!1,w=null,U=null,N=null,H=null;this._outputColorSpace=bn;let $=0,z=0,q=null,Z=-1,W=null,J=new ai,me=new ai,Ie=null,qe=new Et(0),$e=0,xt=t.width,re=t.height,fe=1,Ue=null,we=null,Ve=new ai(0,0,xt,re),ie=new ai(0,0,xt,re),Qe=!1,le=new To,ye=!1,ee=!1,ge=new kt,Te=new F,Ze=new ai,Ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ut=!1;function ft(){return q===null?fe:1}let Q=n;function It(P,te){return t.getContext(P,te)}let At,B,S,ue,ce,Me,st,nt,Oe,ze,je,vt,L,ae,he,Se,Ae,k,De,xe,Be,Ne,se;try{let P={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",mt,!1),t.addEventListener("webglcontextrestored",Ft,!1),t.addEventListener("webglcontextcreationerror",Yt,!1),Q===null){let te="webgl2";if(Q=It(te,P),Q===null)throw It(te)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}at()}catch(P){throw t.removeEventListener("webglcontextlost",mt,!1),t.removeEventListener("webglcontextrestored",Ft,!1),t.removeEventListener("webglcontextcreationerror",Yt,!1),en("WebGLRenderer: "+P.message),P}function at(){At=new av(Q),At.init(),Be=new Yy(Q,At),B=new Jx(Q,At,e,Be),S=new Wy(Q,At),B.reversedDepthBuffer&&p&&S.buffers.depth.setReversed(!0),U=Q.createFramebuffer(),N=Q.createFramebuffer(),H=Q.createFramebuffer(),ue=new cv(Q),ce=new Py,Me=new Xy(Q,At,S,ce,B,Be,ue),st=new rv(I),nt=new hg(Q),Ne=new Zx(Q,nt),Oe=new ov(Q,nt,ue,Ne),ze=new hv(Q,Oe,nt,Ne,ue),k=new uv(Q,B,Me),he=new Kx(ce),je=new Cy(I,st,At,B,Ne,he),vt=new Jy(I,ce),L=new Dy,ae=new By(At),Ae=new qx(I,st,S,ze,f,c),Se=new Vy(I,ze,B),se=new Ky(Q,ue,B,S),De=new $x(Q,At,ue),xe=new lv(Q,At,ue),ue.programs=je.programs,I.capabilities=B,I.extensions=At,I.properties=ce,I.renderLists=L,I.shadowMap=Se,I.state=S,I.info=ue}x!==zi&&(A=new dv(x,t.width,t.height,o,s,r));let Je=new If(I,Q);this.xr=Je,this.getContext=function(){return Q},this.getContextAttributes=function(){return Q.getContextAttributes()},this.forceContextLoss=function(){let P=At.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=At.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return fe},this.setPixelRatio=function(P){P!==void 0&&(fe=P,this.setSize(xt,re,!1))},this.getSize=function(P){return P.set(xt,re)},this.setSize=function(P,te,Ce=!0){if(Je.isPresenting){Qt("WebGLRenderer: Can't change size while VR device is presenting.");return}xt=P,re=te,t.width=Math.floor(P*fe),t.height=Math.floor(te*fe),Ce===!0&&(t.style.width=P+"px",t.style.height=te+"px"),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,P,te)},this.getDrawingBufferSize=function(P){return P.set(xt*fe,re*fe).floor()},this.setDrawingBufferSize=function(P,te,Ce){xt=P,re=te,fe=Ce,t.width=Math.floor(P*Ce),t.height=Math.floor(te*Ce),this.setViewport(0,0,P,te)},this.setEffects=function(P){if(x===zi){en("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(P){for(let te=0;te<P.length;te++)if(P[te].isOutputPass===!0){Qt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(P||[])},this.getCurrentViewport=function(P){return P.copy(J)},this.getViewport=function(P){return P.copy(Ve)},this.setViewport=function(P,te,Ce,Ee){P.isVector4?Ve.set(P.x,P.y,P.z,P.w):Ve.set(P,te,Ce,Ee),S.viewport(J.copy(Ve).multiplyScalar(fe).round())},this.getScissor=function(P){return P.copy(ie)},this.setScissor=function(P,te,Ce,Ee){P.isVector4?ie.set(P.x,P.y,P.z,P.w):ie.set(P,te,Ce,Ee),S.scissor(me.copy(ie).multiplyScalar(fe).round())},this.getScissorTest=function(){return Qe},this.setScissorTest=function(P){S.setScissorTest(Qe=P)},this.setOpaqueSort=function(P){Ue=P},this.setTransparentSort=function(P){we=P},this.getClearColor=function(P){return P.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor(...arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha(...arguments)},this.clear=function(P=!0,te=!0,Ce=!0){let Ee=0;if(P){let Pe=!1;if(q!==null){let _t=q.texture.format;Pe=g.has(_t)}if(Pe){let _t=q.texture.type,Ct=m.has(_t),j=Ae.getClearColor(),ne=Ae.getClearAlpha(),pe=j.r,Ge=j.g,E=j.b;Ct?(_[0]=pe,_[1]=Ge,_[2]=E,_[3]=ne,Q.clearBufferuiv(Q.COLOR,0,_)):(b[0]=pe,b[1]=Ge,b[2]=E,b[3]=ne,Q.clearBufferiv(Q.COLOR,0,b))}else Ee|=Q.COLOR_BUFFER_BIT}te&&(Ee|=Q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Ce&&(Ee|=Q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Ee!==0&&Q.clear(Ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(P){P.setRenderer(this),w=P},this.dispose=function(){t.removeEventListener("webglcontextlost",mt,!1),t.removeEventListener("webglcontextrestored",Ft,!1),t.removeEventListener("webglcontextcreationerror",Yt,!1),Ae.dispose(),L.dispose(),ae.dispose(),ce.dispose(),st.dispose(),ze.dispose(),Ne.dispose(),se.dispose(),je.dispose(),Je.dispose(),Je.removeEventListener("sessionstart",be),Je.removeEventListener("sessionend",Le),lt.stop()};function mt(P){P.preventDefault(),ml("WebGLRenderer: Context Lost."),G=!0}function Ft(){ml("WebGLRenderer: Context Restored."),G=!1;let P=ue.autoReset,te=Se.enabled,Ce=Se.autoUpdate,Ee=Se.needsUpdate,Pe=Se.type;at(),ue.autoReset=P,Se.enabled=te,Se.autoUpdate=Ce,Se.needsUpdate=Ee,Se.type=Pe}function Yt(P){en("WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function hn(P){let te=P.target;te.removeEventListener("dispose",hn),Pn(te)}function Pn(P){sn(P),ce.remove(P)}function sn(P){let te=ce.get(P).programs;te!==void 0&&(te.forEach(function(Ce){je.releaseProgram(Ce)}),P.isShaderMaterial&&je.releaseShaderCache(P))}this.renderBufferDirect=function(P,te,Ce,Ee,Pe,_t){te===null&&(te=Ye);let Ct=Pe.isMesh&&Pe.matrixWorld.determinantAffine()<0,j=on(P,te,Ce,Ee,Pe);S.setMaterial(Ee,Ct);let ne=Ce.index,pe=1;if(Ee.wireframe===!0){if(ne=Oe.getWireframeAttribute(Ce),ne===void 0)return;pe=2}let Ge=Ce.drawRange,E=Ce.attributes.position,O=Ge.start*pe,K=(Ge.start+Ge.count)*pe;_t!==null&&(O=Math.max(O,_t.start*pe),K=Math.min(K,(_t.start+_t.count)*pe)),ne!==null?(O=Math.max(O,0),K=Math.min(K,ne.count)):E!=null&&(O=Math.max(O,0),K=Math.min(K,E.count));let X=K-O;if(X<0||X===1/0)return;Ne.setup(Pe,Ee,j,Ce,ne);let de,Re=De;if(ne!==null&&(de=nt.get(ne),Re=xe,Re.setIndex(de)),Pe.isMesh)Ee.wireframe===!0?(S.setLineWidth(Ee.wireframeLinewidth*ft()),Re.setMode(Q.LINES)):Re.setMode(Q.TRIANGLES);else if(Pe.isLine){let _e=Ee.linewidth;_e===void 0&&(_e=1),S.setLineWidth(_e*ft()),Pe.isLineSegments?Re.setMode(Q.LINES):Pe.isLineLoop?Re.setMode(Q.LINE_LOOP):Re.setMode(Q.LINE_STRIP)}else Pe.isPoints?Re.setMode(Q.POINTS):Pe.isSprite&&Re.setMode(Q.TRIANGLES);if(Pe.isBatchedMesh)if(At.get("WEBGL_multi_draw"))Re.renderMultiDraw(Pe._multiDrawStarts,Pe._multiDrawCounts,Pe._multiDrawCount);else{let _e=Pe._multiDrawStarts,Y=Pe._multiDrawCounts,Xe=Pe._multiDrawCount,Ke=ne?nt.get(ne).bytesPerElement:1,dt=ce.get(Ee).currentProgram.getUniforms();for(let pt=0;pt<Xe;pt++)dt.setValue(Q,"_gl_DrawID",pt),Re.render(_e[pt]/Ke,Y[pt])}else if(Pe.isInstancedMesh)Re.renderInstances(O,X,Pe.count);else if(Ce.isInstancedBufferGeometry){let _e=Ce._maxInstanceCount!==void 0?Ce._maxInstanceCount:1/0,Y=Math.min(Ce.instanceCount,_e);Re.renderInstances(O,X,Y)}else Re.render(O,X)};function In(P,te,Ce,Ee){w!==null&&P.isNodeMaterial&&w.setObject(Ee,P),ye===!0&&he.setState(P,Ce,!1),P.transparent===!0&&P.side===li&&P.forceSinglePass===!1?(P.side=es,P.needsUpdate=!0,ot(P,te,Ee),P.side=ya,P.needsUpdate=!0,ot(P,te,Ee),P.side=li):ot(P,te,Ee)}this.compile=function(P,te,Ce=null){Ce===null&&(Ce=P),w!==null&&w.renderStart(P,te,Ce),T=ae.get(Ce),T.init(te),v.push(T),Ce.traverseVisible(function(Pe){Pe.isLight&&Pe.layers.test(te.layers)&&(T.pushLight(Pe),Pe.castShadow&&T.pushShadow(Pe))}),P!==Ce&&P.traverseVisible(function(Pe){Pe.isLight&&Pe.layers.test(te.layers)&&(T.pushLight(Pe),Pe.castShadow&&T.pushShadow(Pe))}),T.setupLights(),w!==null&&w.updateLights(T.state.lightsArray),ee=this.localClippingEnabled,ye=he.init(this.clippingPlanes,ee),ye===!0&&he.setGlobalState(this.clippingPlanes,te),w!==null&&Se.render(T.state.shadowsArray,Ce,te);let Ee=new Set;return P.traverse(function(Pe){if(!(Pe.isMesh||Pe.isPoints||Pe.isLine||Pe.isSprite))return;let _t=Pe.material;if(_t)if(Array.isArray(_t))for(let Ct=0;Ct<_t.length;Ct++){let j=_t[Ct];In(j,Ce,te,Pe),Ee.add(j)}else In(_t,Ce,te,Pe),Ee.add(_t)}),T=v.pop(),w!==null&&w.renderEnd(),Ee},this.compileAsync=function(P,te,Ce=null){let Ee=this.compile(P,te,Ce);return new Promise(Pe=>{function _t(){if(Ee.forEach(function(Ct){let ne=ce.get(Ct).currentProgram;(ne===void 0||ne.isReady())&&Ee.delete(Ct)}),Ee.size===0){Pe(P);return}setTimeout(_t,10)}At.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let yn=null;function C(P){yn&&yn(P)}function be(){lt.stop()}function Le(){lt.start()}let lt=new qp;lt.setAnimationLoop(C),typeof self<"u"&&lt.setContext(self),this.setAnimationLoop=function(P){yn=P,Je.setAnimationLoop(P),P===null?lt.stop():lt.start()},Je.addEventListener("sessionstart",be),Je.addEventListener("sessionend",Le),this.render=function(P,te){if(te!==void 0&&te.isCamera!==!0){en("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;w!==null&&w.renderStart(P,te);let Ce=Je.enabled===!0&&Je.isPresenting===!0,Ee=A!==null&&(q===null||Ce)&&A.begin(I,q);if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),te.parent===null&&te.matrixWorldAutoUpdate===!0&&te.updateMatrixWorld(),Je.enabled===!0&&Je.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Je.cameraAutoUpdate===!0&&Je.updateCamera(te),te=Je.getCamera()),P.isScene===!0&&P.onBeforeRender(I,P,te,q),T=ae.get(P,v.length),T.init(te),T.state.textureUnits=Me.getTextureUnits(),v.push(T),ge.multiplyMatrices(te.projectionMatrix,te.matrixWorldInverse),le.setFromProjectionMatrix(ge,gr,te.reversedDepth),ee=this.localClippingEnabled,ye=he.init(this.clippingPlanes,ee),M=L.get(P,R.length),M.init(),R.push(M),Je.enabled===!0&&Je.isPresenting===!0){let Ct=I.xr.getDepthSensingMesh();Ct!==null&&ct(Ct,te,-1/0,I.sortObjects)}ct(P,te,0,I.sortObjects),M.finish(),w!==null&&w.updateLights(T.state.lightsArray),I.sortObjects===!0&&M.sort(Ue,we),ut=Je.enabled===!1||Je.isPresenting===!1||Je.hasDepthSensing()===!1,ut&&Ae.addToRenderList(M,P),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ye===!0&&he.beginShadows();let Pe=T.state.shadowsArray;if(Se.render(Pe,P,te),ye===!0&&he.endShadows(),(Ee&&A.hasRenderPass())===!1){let Ct=M.opaque,j=M.transmissive;if(T.setupLights(),te.isArrayCamera){let ne=te.cameras;if(j.length>0)for(let pe=0,Ge=ne.length;pe<Ge;pe++){let E=ne[pe];Dt(Ct,j,P,E)}ut&&Ae.render(P);for(let pe=0,Ge=ne.length;pe<Ge;pe++){let E=ne[pe];Gt(M,P,E,E.viewport)}}else j.length>0&&Dt(Ct,j,P,te),ut&&Ae.render(P),Gt(M,P,te)}q!==null&&z===0&&(Me.updateMultisampleRenderTarget(q),Me.updateRenderTargetMipmap(q)),Ee&&A.end(I),P.isScene===!0&&P.onAfterRender(I,P,te),Ne.resetDefaultState(),Z=-1,W=null,v.pop(),v.length>0?(T=v[v.length-1],Me.setTextureUnits(T.state.textureUnits),ye===!0&&he.setGlobalState(I.clippingPlanes,T.state.camera)):T=null,R.pop(),R.length>0?M=R[R.length-1]:M=null,w!==null&&w.renderEnd()};function ct(P,te,Ce,Ee){if(P.visible===!1)return;if(P.layers.test(te.layers)){if(P.isGroup)Ce=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(te);else if(P.isLightProbeGrid)T.pushLightProbeGrid(P);else if(P.isLight)T.pushLight(P),P.castShadow&&T.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||P.intersectsFrustum(le)){Ee&&Ze.setFromMatrixPosition(P.matrixWorld).applyMatrix4(ge);let Ct=ze.update(P),j=P.material;j.visible&&M.push(P,Ct,j,Ce,Ze.z,null,te)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||P.intersectsFrustum(le))){let Ct=ze.update(P),j=P.material;if(Ee&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Ze.copy(P.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),Ze.copy(Ct.boundingSphere.center)),Ze.applyMatrix4(P.matrixWorld).applyMatrix4(ge)),Array.isArray(j)){let ne=Ct.groups;for(let pe=0,Ge=ne.length;pe<Ge;pe++){let E=ne[pe],O=j[E.materialIndex];O&&O.visible&&M.push(P,Ct,O,Ce,Ze.z,E,te)}}else j.visible&&M.push(P,Ct,j,Ce,Ze.z,null,te)}}let _t=P.children;for(let Ct=0,j=_t.length;Ct<j;Ct++)ct(_t[Ct],te,Ce,Ee)}function Gt(P,te,Ce,Ee){let{opaque:Pe,transmissive:_t,transparent:Ct}=P;T.setupLightsView(Ce),ye===!0&&he.setGlobalState(I.clippingPlanes,Ce),Ee&&S.viewport(J.copy(Ee)),Pe.length>0&&ve(Pe,te,Ce),_t.length>0&&ve(_t,te,Ce),Ct.length>0&&ve(Ct,te,Ce),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function Dt(P,te,Ce,Ee){if((Ce.isScene===!0?Ce.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[Ee.id]===void 0){let O=At.has("EXT_color_buffer_half_float")||At.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[Ee.id]=new oi(1,1,{generateMipmaps:!0,type:O?hi:zi,minFilter:Ur,samples:Math.max(4,B.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Cn.workingColorSpace})}let _t=T.state.transmissionRenderTarget[Ee.id],Ct=Ee.viewport||J;_t.setSize(Ct.z*I.transmissionResolutionScale,Ct.w*I.transmissionResolutionScale);let j=I.getRenderTarget(),ne=I.getActiveCubeFace(),pe=I.getActiveMipmapLevel();I.setRenderTarget(_t),I.getClearColor(qe),$e=I.getClearAlpha(),$e<1&&I.setClearColor(16777215,.5),I.clear(),ut&&Ae.render(Ce);let Ge=I.toneMapping;I.toneMapping=Us;let E=Ee.viewport;if(Ee.viewport!==void 0&&(Ee.viewport=void 0),T.setupLightsView(Ee),ye===!0&&he.setGlobalState(I.clippingPlanes,Ee),ve(P,Ce,Ee),Me.updateMultisampleRenderTarget(_t),Me.updateRenderTargetMipmap(_t),At.has("WEBGL_multisampled_render_to_texture")===!1){let O=!1;for(let K=0,X=te.length;K<X;K++){let de=te[K],{object:Re,geometry:_e,material:Y,group:Xe}=de;if(Y.side===li&&Re.layers.test(Ee.layers)){let Ke=Y.side;Y.side=es,Y.needsUpdate=!0,We(Re,Ce,Ee,_e,Y,Xe),Y.side=Ke,Y.needsUpdate=!0,O=!0}}O===!0&&(Me.updateMultisampleRenderTarget(_t),Me.updateRenderTargetMipmap(_t))}I.setRenderTarget(j,ne,pe),I.setClearColor(qe,$e),E!==void 0&&(Ee.viewport=E),I.toneMapping=Ge}function ve(P,te,Ce){let Ee=te.isScene===!0?te.overrideMaterial:null;for(let Pe=0,_t=P.length;Pe<_t;Pe++){let Ct=P[Pe],{object:j,geometry:ne,group:pe}=Ct,Ge=Ct.material;Ge.allowOverride===!0&&Ee!==null&&(Ge=Ee),j.layers.test(Ce.layers)&&We(j,te,Ce,ne,Ge,pe)}}function We(P,te,Ce,Ee,Pe,_t){w!==null&&Pe.isNodeMaterial&&w.setObject(P,Pe),P.onBeforeRender(I,te,Ce,Ee,Pe,_t),P.modelViewMatrix.multiplyMatrices(Ce.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),Pe.onBeforeRender(I,te,Ce,Ee,P,_t),Pe.transparent===!0&&Pe.side===li&&Pe.forceSinglePass===!1?(Pe.side=es,Pe.needsUpdate=!0,I.renderBufferDirect(Ce,te,Ee,Pe,P,_t),Pe.side=ya,Pe.needsUpdate=!0,I.renderBufferDirect(Ce,te,Ee,Pe,P,_t),Pe.side=li):I.renderBufferDirect(Ce,te,Ee,Pe,P,_t),P.onAfterRender(I,te,Ce,Ee,Pe,_t)}function ot(P,te,Ce){te.isScene!==!0&&(te=Ye);let Ee=ce.get(P),Pe=T.state.lights,_t=T.state.shadowsArray,Ct=Pe.state.version,j=je.getParameters(P,Pe.state,_t,te,Ce,T.state.lightProbeGridArray),ne=je.getProgramCacheKey(j),pe=Ee.programs;Ee.environment=P.isMeshStandardMaterial||P.isMeshLambertMaterial||P.isMeshPhongMaterial?te.environment:null,Ee.fog=te.fog;let Ge=P.isMeshStandardMaterial||P.isMeshLambertMaterial&&!P.envMap||P.isMeshPhongMaterial&&!P.envMap;Ee.envMap=st.get(P.envMap||Ee.environment,Ge),Ee.envMapRotation=Ee.environment!==null&&P.envMap===null?te.environmentRotation:P.envMapRotation,pe===void 0&&(P.addEventListener("dispose",hn),pe=new Map,Ee.programs=pe);let E=pe.get(ne);if(E!==void 0){if(Ee.currentProgram===E&&Ee.lightsStateVersion===Ct)return Ot(P,j),E}else j.uniforms=je.getUniforms(P),w!==null&&P.isNodeMaterial&&w.build(P,Ce,j),P.onBeforeCompile(j,I),E=je.acquireProgram(j,ne),pe.set(ne,E),Ee.uniforms=j.uniforms;let O=Ee.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(O.clippingPlanes=he.uniform),Ot(P,j),Ee.needsLights=dn(P),Ee.lightsStateVersion=Ct,Ee.needsLights&&(O.ambientLightColor.value=Pe.state.ambient,O.lightProbe.value=Pe.state.probe,O.sunLights.value=Pe.state.sun,O.sunLightShadows.value=Pe.state.sunShadow,O.directionalLights.value=Pe.state.directional,O.directionalLightShadows.value=Pe.state.directionalShadow,O.spotLights.value=Pe.state.spot,O.spotLightShadows.value=Pe.state.spotShadow,O.rectAreaLights.value=Pe.state.rectArea,O.ltc_1.value=Pe.state.rectAreaLTC1,O.ltc_2.value=Pe.state.rectAreaLTC2,O.pointLights.value=Pe.state.point,O.pointLightShadows.value=Pe.state.pointShadow,O.hemisphereLights.value=Pe.state.hemi,O.sunShadowMatrix.value=Pe.state.sunShadowMatrix,O.sunShadowCascade.value=Pe.state.sunShadowCascade,O.directionalShadowMatrix.value=Pe.state.directionalShadowMatrix,O.spotLightMatrix.value=Pe.state.spotLightMatrix,O.spotLightMap.value=Pe.state.spotLightMap,O.pointShadowMatrix.value=Pe.state.pointShadowMatrix),Ee.lightProbeGrid=T.state.lightProbeGridArray.length>0,Ee.currentProgram=E,Ee.uniformsList=null,E}function Lt(P){if(P.uniformsList===null){let te=P.currentProgram.getUniforms();P.uniformsList=zo.seqWithValue(te.seq,P.uniforms)}return P.uniformsList}function Ot(P,te){let Ce=ce.get(P);Ce.outputColorSpace=te.outputColorSpace,Ce.batching=te.batching,Ce.batchingColor=te.batchingColor,Ce.instancing=te.instancing,Ce.instancingColor=te.instancingColor,Ce.instancingMorph=te.instancingMorph,Ce.skinning=te.skinning,Ce.morphTargets=te.morphTargets,Ce.morphNormals=te.morphNormals,Ce.morphColors=te.morphColors,Ce.morphTargetsCount=te.morphTargetsCount,Ce.numClippingPlanes=te.numClippingPlanes,Ce.numIntersection=te.numClipIntersection,Ce.vertexAlphas=te.vertexAlphas,Ce.vertexTangents=te.vertexTangents,Ce.toneMapping=te.toneMapping}function xn(P,te){if(P.length===0)return null;if(P.length===1)return P[0].texture!==null?P[0]:null;y.setFromMatrixPosition(te.matrixWorld);for(let Ce=0,Ee=P.length;Ce<Ee;Ce++){let Pe=P[Ce];if(Pe.texture!==null&&Pe.boundingBox.containsPoint(y))return Pe}return null}function on(P,te,Ce,Ee,Pe){te.isScene!==!0&&(te=Ye),Me.resetTextureUnits();let _t=te.fog,Ct=Ee.isMeshStandardMaterial||Ee.isMeshLambertMaterial||Ee.isMeshPhongMaterial?te.environment:null,j=q===null?I.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:Cn.workingColorSpace,ne=Ee.isMeshStandardMaterial||Ee.isMeshLambertMaterial&&!Ee.envMap||Ee.isMeshPhongMaterial&&!Ee.envMap,pe=st.get(Ee.envMap||Ct,ne),Ge=Ee.vertexColors===!0&&!!Ce.attributes.color&&Ce.attributes.color.itemSize===4,E=!!Ce.attributes.tangent&&(!!Ee.normalMap||Ee.anisotropy>0),O=!!Ce.morphAttributes.position,K=!!Ce.morphAttributes.normal,X=!!Ce.morphAttributes.color,de=Us;Ee.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(de=I.toneMapping);let Re=Ce.morphAttributes.position||Ce.morphAttributes.normal||Ce.morphAttributes.color,_e=Re!==void 0?Re.length:0,Y=ce.get(Ee),Xe=T.state.lights;if(ye===!0&&(ee===!0||P!==W)){let Ht=P===W&&Ee.id===Z;he.setState(Ee,P,Ht)}let Ke=!1;Ee.version===Y.__version?(Y.needsLights&&Y.lightsStateVersion!==Xe.state.version||Y.outputColorSpace!==j||Pe.isBatchedMesh&&Y.batching===!1||!Pe.isBatchedMesh&&Y.batching===!0||Pe.isBatchedMesh&&Y.batchingColor===!0&&Pe._colorsTexture===null||Pe.isBatchedMesh&&Y.batchingColor===!1&&Pe._colorsTexture!==null||Pe.isInstancedMesh&&Y.instancing===!1||!Pe.isInstancedMesh&&Y.instancing===!0||Pe.isSkinnedMesh&&Y.skinning===!1||!Pe.isSkinnedMesh&&Y.skinning===!0||Pe.isInstancedMesh&&Y.instancingColor===!0&&Pe.instanceColor===null||Pe.isInstancedMesh&&Y.instancingColor===!1&&Pe.instanceColor!==null||Pe.isInstancedMesh&&Y.instancingMorph===!0&&Pe.morphTexture===null||Pe.isInstancedMesh&&Y.instancingMorph===!1&&Pe.morphTexture!==null||Y.envMap!==pe||Ee.fog===!0&&Y.fog!==_t||Y.numClippingPlanes!==void 0&&(Y.numClippingPlanes!==he.numPlanes||Y.numIntersection!==he.numIntersection)||Y.vertexAlphas!==Ge||Y.vertexTangents!==E||Y.morphTargets!==O||Y.morphNormals!==K||Y.morphColors!==X||Y.toneMapping!==de||Y.morphTargetsCount!==_e||!!Y.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(Ke=!0):(Ke=!0,Y.__version=Ee.version);let dt=Y.currentProgram;Ke===!0&&(dt=ot(Ee,te,Pe),w&&Ee.isNodeMaterial&&w.onUpdateProgram(Ee,dt,Y));let pt=!1,gt=!1,Pt=!1,St=dt.getUniforms(),rt=Y.uniforms;if(S.useProgram(dt.program)&&(pt=!0,gt=!0,Pt=!0),Ee.id!==Z&&(Z=Ee.id,gt=!0),Y.needsLights){let Ht=xn(T.state.lightProbeGridArray,Pe);Y.lightProbeGrid!==Ht&&(Y.lightProbeGrid=Ht,gt=!0)}if(pt||W!==P){S.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),St.setValue(Q,"projectionMatrix",P.projectionMatrix),St.setValue(Q,"viewMatrix",P.matrixWorldInverse);let Dn=St.map.cameraPosition;Dn!==void 0&&Dn.setValue(Q,Te.setFromMatrixPosition(P.matrixWorld)),B.logarithmicDepthBuffer&&St.setValue(Q,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(Ee.isMeshPhongMaterial||Ee.isMeshToonMaterial||Ee.isMeshLambertMaterial||Ee.isMeshBasicMaterial||Ee.isMeshStandardMaterial||Ee.isShaderMaterial)&&St.setValue(Q,"isOrthographic",P.isOrthographicCamera===!0),W!==P&&(W=P,gt=!0,Pt=!0)}if(Y.needsLights&&(Xe.state.sunShadowMap.length>0&&St.setValue(Q,"sunShadowMap",Xe.state.sunShadowMap,Me),Xe.state.directionalShadowMap.length>0&&St.setValue(Q,"directionalShadowMap",Xe.state.directionalShadowMap,Me),Xe.state.spotShadowMap.length>0&&St.setValue(Q,"spotShadowMap",Xe.state.spotShadowMap,Me),Xe.state.pointShadowMap.length>0&&St.setValue(Q,"pointShadowMap",Xe.state.pointShadowMap,Me)),Pe.isSkinnedMesh){St.setOptional(Q,Pe,"bindMatrix"),St.setOptional(Q,Pe,"bindMatrixInverse");let Ht=Pe.skeleton;Ht&&(Ht.boneTexture===null&&Ht.computeBoneTexture(),St.setValue(Q,"boneTexture",Ht.boneTexture,Me))}Pe.isBatchedMesh&&(St.setOptional(Q,Pe,"batchingTexture"),St.setValue(Q,"batchingTexture",Pe._matricesTexture,Me),St.setOptional(Q,Pe,"batchingIdTexture"),St.setValue(Q,"batchingIdTexture",Pe._indirectTexture,Me),St.setOptional(Q,Pe,"batchingColorTexture"),Pe._colorsTexture!==null&&St.setValue(Q,"batchingColorTexture",Pe._colorsTexture,Me));let wt=Ce.morphAttributes;if((wt.position!==void 0||wt.normal!==void 0||wt.color!==void 0)&&k.update(Pe,Ce,dt),(gt||Y.receiveShadow!==Pe.receiveShadow)&&(Y.receiveShadow=Pe.receiveShadow,St.setValue(Q,"receiveShadow",Pe.receiveShadow)),(Ee.isMeshStandardMaterial||Ee.isMeshLambertMaterial||Ee.isMeshPhongMaterial)&&Ee.envMap===null&&te.environment!==null&&(rt.envMapIntensity.value=te.environmentIntensity),rt.dfgLUT!==void 0&&(rt.dfgLUT.value=jy()),gt){if(St.setValue(Q,"toneMappingExposure",I.toneMappingExposure),Y.needsLights&&Kt(rt,Pt),_t&&Ee.fog===!0&&vt.refreshFogUniforms(rt,_t),vt.refreshMaterialUniforms(rt,Ee,fe,re,T.state.transmissionRenderTarget[P.id]),Y.needsLights&&Y.lightProbeGrid){let Ht=Y.lightProbeGrid;rt.probesSH.value=Ht.texture,rt.probesMin.value.copy(Ht.boundingBox.min),rt.probesMax.value.copy(Ht.boundingBox.max),rt.probesResolution.value.copy(Ht.resolution)}zo.upload(Q,Lt(Y),rt,Me)}if(Ee.isShaderMaterial&&Ee.uniformsNeedUpdate===!0&&(zo.upload(Q,Lt(Y),rt,Me),Ee.uniformsNeedUpdate=!1),Ee.isSpriteMaterial&&St.setValue(Q,"center",Pe.center),St.setValue(Q,"modelViewMatrix",Pe.modelViewMatrix),St.setValue(Q,"normalMatrix",Pe.normalMatrix),St.setValue(Q,"modelMatrix",Pe.matrixWorld),Ee.uniformsGroups!==void 0){let Ht=Ee.uniformsGroups;for(let Dn=0,kn=Ht.length;Dn<kn;Dn++){let qn=Ht[Dn];se.update(qn,dt),se.bind(qn,dt)}}return dt}function Kt(P,te){P.ambientLightColor.needsUpdate=te,P.lightProbe.needsUpdate=te,P.sunLights.needsUpdate=te,P.sunLightShadows.needsUpdate=te,P.directionalLights.needsUpdate=te,P.directionalLightShadows.needsUpdate=te,P.pointLights.needsUpdate=te,P.pointLightShadows.needsUpdate=te,P.spotLights.needsUpdate=te,P.spotLightShadows.needsUpdate=te,P.rectAreaLights.needsUpdate=te,P.hemisphereLights.needsUpdate=te}function dn(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(P,te,Ce){let Ee=ce.get(P);Ee.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,Ee.__autoAllocateDepthBuffer===!1&&(Ee.__useRenderToTexture=!1),ce.get(P.texture).__webglTexture=te,ce.get(P.depthTexture).__webglTexture=Ee.__autoAllocateDepthBuffer?void 0:Ce,Ee.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,te){let Ce=ce.get(P);Ce.__webglFramebuffer=te,Ce.__useDefaultFramebuffer=te===void 0},this.setRenderTarget=function(P,te=0,Ce=0){q=P,$=te,z=Ce;let Ee=null,Pe=!1,_t=!1;if(P){let j=ce.get(P);if(j.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(Q.FRAMEBUFFER,j.__webglFramebuffer),J.copy(P.viewport),me.copy(P.scissor),Ie=P.scissorTest,S.viewport(J),S.scissor(me),S.setScissorTest(Ie),Z=-1;return}else if(j.__webglFramebuffer===void 0)Me.setupRenderTarget(P);else if(j.__hasExternalTextures)Me.rebindTextures(P,ce.get(P.texture).__webglTexture,ce.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){let Ge=P.depthTexture;if(j.__boundDepthTexture!==Ge){if(Ge!==null&&ce.has(Ge)&&(P.width!==Ge.image.width||P.height!==Ge.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Me.setupDepthRenderbuffer(P)}}let ne=P.texture;(ne.isData3DTexture||ne.isDataArrayTexture||ne.isCompressedArrayTexture)&&(_t=!0);let pe=ce.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(pe[te])?Ee=pe[te][Ce]:Ee=pe[te],Pe=!0):P.samples>0&&Me.useMultisampledRTT(P)===!1?Ee=ce.get(P).__webglMultisampledFramebuffer:Array.isArray(pe)?Ee=pe[Ce]:Ee=pe,J.copy(P.viewport),me.copy(P.scissor),Ie=P.scissorTest}else J.copy(Ve).multiplyScalar(fe).floor(),me.copy(ie).multiplyScalar(fe).floor(),Ie=Qe;if(Ce!==0&&(Ee=U),S.bindFramebuffer(Q.FRAMEBUFFER,Ee)&&S.drawBuffers(P,Ee),S.viewport(J),S.scissor(me),S.setScissorTest(Ie),Pe){let j=ce.get(P.texture);Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_CUBE_MAP_POSITIVE_X+te,j.__webglTexture,Ce)}else if(_t){let j=te;for(let ne=0;ne<P.textures.length;ne++){let pe=ce.get(P.textures[ne]);Q.framebufferTextureLayer(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0+ne,pe.__webglTexture,Ce,j)}}else if(P!==null&&Ce!==0){let j=ce.get(P.texture);Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,j.__webglTexture,Ce)}Z=-1};function On(P){let te=ce.get(P);return(te.__readFormat!==P.format||te.__readType!==P.type)&&(te.__readFormat=P.format,te.__readType=P.type,te.__formatReadable=B.textureFormatReadable(P.format),te.__typeReadable=B.textureTypeReadable(P.type)),te}this.readRenderTargetPixels=function(P,te,Ce,Ee,Pe,_t,Ct,j=0){if(!(P&&P.isWebGLRenderTarget)){en("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ne=ce.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ct!==void 0&&(ne=ne[Ct]),ne){S.bindFramebuffer(Q.FRAMEBUFFER,ne);try{let pe=P.textures[j],Ge=pe.format,E=pe.type;P.textures.length>1&&Q.readBuffer(Q.COLOR_ATTACHMENT0+j);let O=On(pe);if(O.__formatReadable===!1){en("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(O.__typeReadable===!1){en("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}te>=0&&te<=P.width-Ee&&Ce>=0&&Ce<=P.height-Pe&&Q.readPixels(te,Ce,Ee,Pe,Be.convert(Ge),Be.convert(E),_t)}finally{let pe=q!==null?ce.get(q).__webglFramebuffer:null;S.bindFramebuffer(Q.FRAMEBUFFER,pe)}}},this.readRenderTargetPixelsAsync=async function(P,te,Ce,Ee,Pe,_t,Ct,j=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ne=ce.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ct!==void 0&&(ne=ne[Ct]),ne)if(te>=0&&te<=P.width-Ee&&Ce>=0&&Ce<=P.height-Pe){S.bindFramebuffer(Q.FRAMEBUFFER,ne);let pe=P.textures[j],Ge=pe.format,E=pe.type;P.textures.length>1&&Q.readBuffer(Q.COLOR_ATTACHMENT0+j);let O=On(pe);if(O.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(O.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let K=Q.createBuffer();Q.bindBuffer(Q.PIXEL_PACK_BUFFER,K),Q.bufferData(Q.PIXEL_PACK_BUFFER,_t.byteLength,Q.STREAM_READ),Q.readPixels(te,Ce,Ee,Pe,Be.convert(Ge),Be.convert(E),0),Q.bindBuffer(Q.PIXEL_PACK_BUFFER,null);let X=q!==null?ce.get(q).__webglFramebuffer:null;S.bindFramebuffer(Q.FRAMEBUFFER,X);let de=Q.fenceSync(Q.SYNC_GPU_COMMANDS_COMPLETE,0);return Q.flush(),await gp(Q,de,4),Q.bindBuffer(Q.PIXEL_PACK_BUFFER,K),Q.getBufferSubData(Q.PIXEL_PACK_BUFFER,0,_t),Q.bindBuffer(Q.PIXEL_PACK_BUFFER,null),Q.deleteBuffer(K),Q.deleteSync(de),_t}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,te=null,Ce=0){let Ee=Math.pow(2,-Ce),Pe=Math.floor(P.image.width*Ee),_t=Math.floor(P.image.height*Ee),Ct=te!==null?te.x:0,j=te!==null?te.y:0;Me.setTexture2D(P,0),Q.copyTexSubImage2D(Q.TEXTURE_2D,Ce,0,0,Ct,j,Pe,_t),S.unbindTexture()},this.copyTextureToTexture=function(P,te,Ce=null,Ee=null,Pe=0,_t=0){let Ct,j,ne,pe,Ge,E,O,K,X,de=P.isCompressedTexture?P.mipmaps[_t]:P.image;if(Ce!==null)Ct=Ce.max.x-Ce.min.x,j=Ce.max.y-Ce.min.y,ne=Ce.isBox3?Ce.max.z-Ce.min.z:1,pe=Ce.min.x,Ge=Ce.min.y,E=Ce.isBox3?Ce.min.z:0;else{let rt=Math.pow(2,-Pe);Ct=Math.floor(de.width*rt),j=Math.floor(de.height*rt),P.isDataArrayTexture?ne=de.depth:P.isData3DTexture?ne=Math.floor(de.depth*rt):ne=1,pe=0,Ge=0,E=0}Ee!==null?(O=Ee.x,K=Ee.y,X=Ee.z):(O=0,K=0,X=0);let Re=Be.convert(te.format),_e=Be.convert(te.type),Y;te.isData3DTexture?(Me.setTexture3D(te,0),Y=Q.TEXTURE_3D):te.isDataArrayTexture||te.isCompressedArrayTexture?(Me.setTexture2DArray(te,0),Y=Q.TEXTURE_2D_ARRAY):(Me.setTexture2D(te,0),Y=Q.TEXTURE_2D),S.activeTexture(Q.TEXTURE0),S.pixelStorei(Q.UNPACK_FLIP_Y_WEBGL,te.flipY),S.pixelStorei(Q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,te.premultiplyAlpha),S.pixelStorei(Q.UNPACK_ALIGNMENT,te.unpackAlignment);let Xe=S.getParameter(Q.UNPACK_ROW_LENGTH),Ke=S.getParameter(Q.UNPACK_IMAGE_HEIGHT),dt=S.getParameter(Q.UNPACK_SKIP_PIXELS),pt=S.getParameter(Q.UNPACK_SKIP_ROWS),gt=S.getParameter(Q.UNPACK_SKIP_IMAGES);S.pixelStorei(Q.UNPACK_ROW_LENGTH,de.width),S.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,de.height),S.pixelStorei(Q.UNPACK_SKIP_PIXELS,pe),S.pixelStorei(Q.UNPACK_SKIP_ROWS,Ge),S.pixelStorei(Q.UNPACK_SKIP_IMAGES,E);let Pt=P.isDataArrayTexture||P.isData3DTexture,St=te.isDataArrayTexture||te.isData3DTexture;if(P.isDepthTexture){let rt=ce.get(P),wt=ce.get(te),Ht=ce.get(rt.__renderTarget),Dn=ce.get(wt.__renderTarget);S.bindFramebuffer(Q.READ_FRAMEBUFFER,Ht.__webglFramebuffer),S.bindFramebuffer(Q.DRAW_FRAMEBUFFER,Dn.__webglFramebuffer);for(let kn=0;kn<ne;kn++)Pt&&(Q.framebufferTextureLayer(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,ce.get(P).__webglTexture,Pe,E+kn),Q.framebufferTextureLayer(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,ce.get(te).__webglTexture,_t,X+kn)),Q.blitFramebuffer(pe,Ge,Ct,j,O,K,Ct,j,Q.DEPTH_BUFFER_BIT,Q.NEAREST);S.bindFramebuffer(Q.READ_FRAMEBUFFER,null),S.bindFramebuffer(Q.DRAW_FRAMEBUFFER,null)}else if(Pe!==0||P.isRenderTargetTexture||ce.has(P)){let rt=ce.get(P),wt=ce.get(te);S.bindFramebuffer(Q.READ_FRAMEBUFFER,N),S.bindFramebuffer(Q.DRAW_FRAMEBUFFER,H);for(let Ht=0;Ht<ne;Ht++)Pt?Q.framebufferTextureLayer(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,rt.__webglTexture,Pe,E+Ht):Q.framebufferTexture2D(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,rt.__webglTexture,Pe),St?Q.framebufferTextureLayer(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,wt.__webglTexture,_t,X+Ht):Q.framebufferTexture2D(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,wt.__webglTexture,_t),Pe!==0?Q.blitFramebuffer(pe,Ge,Ct,j,O,K,Ct,j,Q.COLOR_BUFFER_BIT,Q.NEAREST):St?Q.copyTexSubImage3D(Y,_t,O,K,X+Ht,pe,Ge,Ct,j):Q.copyTexSubImage2D(Y,_t,O,K,pe,Ge,Ct,j);S.bindFramebuffer(Q.READ_FRAMEBUFFER,null),S.bindFramebuffer(Q.DRAW_FRAMEBUFFER,null)}else St?P.isDataTexture||P.isData3DTexture?Q.texSubImage3D(Y,_t,O,K,X,Ct,j,ne,Re,_e,de.data):te.isCompressedArrayTexture?Q.compressedTexSubImage3D(Y,_t,O,K,X,Ct,j,ne,Re,de.data):Q.texSubImage3D(Y,_t,O,K,X,Ct,j,ne,Re,_e,de):P.isDataTexture?Q.texSubImage2D(Q.TEXTURE_2D,_t,O,K,Ct,j,Re,_e,de.data):P.isCompressedTexture?Q.compressedTexSubImage2D(Q.TEXTURE_2D,_t,O,K,de.width,de.height,Re,de.data):Q.texSubImage2D(Q.TEXTURE_2D,_t,O,K,Ct,j,Re,_e,de);S.pixelStorei(Q.UNPACK_ROW_LENGTH,Xe),S.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,Ke),S.pixelStorei(Q.UNPACK_SKIP_PIXELS,dt),S.pixelStorei(Q.UNPACK_SKIP_ROWS,pt),S.pixelStorei(Q.UNPACK_SKIP_IMAGES,gt),_t===0&&te.generateMipmaps&&Q.generateMipmap(Y),S.unbindTexture()},this.initRenderTarget=function(P){ce.get(P).__webglFramebuffer===void 0&&Me.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?Me.setTextureCube(P,0):P.isData3DTexture?Me.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?Me.setTexture2DArray(P,0):Me.setTexture2D(P,0),S.unbindTexture()},this.resetState=function(){$=0,z=0,q=null,S.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Cn._getDrawingBufferColorSpace(e),t.unpackColorSpace=Cn._getUnpackColorSpace()}};var qt=(i,e,t)=>Math.min(t,Math.max(e,i)),ht=(i,e,t)=>i+(e-i)*t,Rt=(i,e,t)=>{let n=qt((t-i)/(e-i),0,1);return n*n*(3-2*n)};function Hn(i){let e=i>>>0;return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Vi(i,e,t=0){let n=Math.imul(i|0,374761393)+Math.imul(e|0,668265263)+Math.imul(t|0,2147483647);return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}function e_(i,e,t=1024,n=1024,s=0){let r=Math.floor(i),a=Math.floor(e),o=i-r,c=e-a,l=o*o*(3-2*o),h=c*c*(3-2*c),d=m=>(m%t+t)%t,p=m=>(m%n+n)%n,u=Vi(d(r),p(a),s),f=Vi(d(r+1),p(a),s),x=Vi(d(r),p(a+1),s),g=Vi(d(r+1),p(a+1),s);return ht(ht(u,f,l),ht(x,g,l),h)}function ei(i,e,t=4,n=1024,s=1024,r=0){let a=.5,o=1,c=0,l=0;for(let h=0;h<t;h++)c+=a*e_(i*o,e*o,n*o,s*o,r+h*17),l+=a,a*=.5,o*=2;return c/l}var em=()=>window.innerWidth<760||/Android|iPhone|iPad|iPod/i.test(navigator.userAgent);function Ya(i,e={}){let t=i.attributes.position,n=i.attributes.normal,s=i.attributes.uv,r=e.ox||0,a=e.oy||0,o=e.oz||0;for(let c=0;c<t.count;c++){let l=n.getX(c),h=n.getY(c),d=n.getZ(c),p=t.getX(c)+r,u=t.getY(c)+a,f=t.getZ(c)+o,x,g;Math.abs(d)>.5?(x=d>0?p:-p,g=u):Math.abs(l)>.5?(x=l>0?-f:f,g=u):(e.swap?(x=f,g=p):(x=p,g=f),h<0&&(g=-g)),s.setXY(c,x,g)}s.needsUpdate=!0}var tm=4,Lf=1,nm=i=>{tm=Math.min(8,i)},im=i=>{Lf=i>=2?1:.5},Du=()=>Lf;function Df(i,e,t){let n=new $s(i,e,e,rs,zi);return n.wrapS=n.wrapT=Qn,n.magFilter=Ni,n.minFilter=Ur,n.generateMipmaps=!0,n.colorSpace=t?bn:vr,n.anisotropy=tm,n.needsUpdate=!0,n}function Qr(i,e,t,n){i=Math.max(128,Math.round(i*Lf));let s=i*i,r=new Uint8Array(s*4),a=new Uint8Array(s*4),o=new Uint8Array(s*4),c=new Float32Array(s);for(let u=0;u<i;u++)for(let f=0;f<i;f++){let x=u*i+f,g=n((f+.5)/i,(u+.5)/i);r[x*4]=qt(g[0],0,1)*255,r[x*4+1]=qt(g[1],0,1)*255,r[x*4+2]=qt(g[2],0,1)*255,r[x*4+3]=255,c[x]=g[3],a[x*4]=255,a[x*4+1]=qt(g[4],0,1)*255,a[x*4+2]=qt(g[5]||0,0,1)*255,a[x*4+3]=255}let l=e/i;for(let u=0;u<i;u++)for(let f=0;f<i;f++){let x=u*i+f,g=(c[u*i+(f+1)%i]-c[u*i+(f-1+i)%i])*t/(2*l),m=(c[(u+1)%i*i+f]-c[(u-1+i)%i*i+f])*t/(2*l),_=Math.hypot(g,m,1);o[x*4]=(-g/_*.5+.5)*255,o[x*4+1]=(-m/_*.5+.5)*255,o[x*4+2]=(1/_*.5+.5)*255,o[x*4+3]=255}let h=Df(r,i,!0),d=Df(o,i,!1),p=Df(a,i,!1);return[h,d,p].forEach(u=>u.repeat.set(1/e,1/e)),{map:h,normalMap:d,rmMap:p,tile:e}}var lc=(i,e)=>[i[0]*e,i[1]*e,i[2]*e];function sm(i=[.2,.22,.25]){return Qr(512,.6,.02,(e,t)=>{let n=t*3,s=Math.floor(n),r=n-s,a=ei(e*5+s*3.1,r*22,3,5,22,s),o,c=1;r>.94?(o=0,c=.45):o=.28+.72*Math.pow(1-r/.94,1.4);let l=(.9+.2*Vi(s,3,5))*(.9+.2*a)*c;return[...lc(i,l),o+(a-.5)*.08,.72+.2*a,0]})}function rm(i=[.13,.145,.16]){return Qr(512,1.2,.025,(e,t)=>{let n=e*4,s=Math.floor(n),r=n-s,a=Math.min(r,1-r)*.3,o=ei(s*5.1+r*3,t*7,3,20,7,s),c=.4+(o-.5)*.1,l=1;a<.026?c=1:a<.05&&(c=0,l=.5);let h=(.92+.16*Vi(s,1,9))*(.9+.2*o)*l;return[...lc(i,h),c,.7+.2*o,0]})}function am(i=[.1,.105,.115]){return Qr(512,.9,.018,(e,t)=>{let n=e*2%1,s=Math.min(n,1-n)*.45,r=s<.028?Math.pow(1-s/.028,.7):0,a=(ei(e*3,t*3,3,3,3,4)-.5)*.1,o=.34+.12*ei(e*8,t*40,2,8,40,2);return[...lc(i,1+(ei(e*2,t*6,2,2,6,11)-.5)*.25+r*.35),.1+r+a,o,.8]})}function Lu(i=[.66,.43,.26],e=[.4,.24,.13]){return Qr(512,.6,.01,(t,n)=>{let s=ei(t*3,n*1.2,3,3,2,21)*3,r=.5+.5*Math.sin((t*10+s)*Math.PI*2/1),a=ei(t*18,n*2.4,3,18,2,33),o=qt(.25+r*.35+a*.5,0,1),c=t*6%1,l=c<.012||c>.988?.45:1;return[ht(e[0],i[0],o)*l,ht(e[1],i[1],o)*l,ht(e[2],i[2],o)*l,.55+a*.3-(l<1?.5:0),.55+.15*a,0]})}function om(i=[.56,.55,.53]){return Qr(512,1.2,.012,(e,t)=>{let n=t*8,s=Math.floor(n),r=n-s,a=Vi(s,7,2)*40,o=ei(e*4+a,r*10,3,4,10,s),c=Vi(Math.floor(e*512),Math.floor(t*512),3)>.985?.6:1,l=r<.04?.7:1,h=(.9+.2*o)*c*l*(.94+.12*Vi(s,4,1));return[...lc(i,h),.5+(o-.5)*.4-(r<.04?.3:0),.92,0]})}function lm(){return Qr(512,1,.045,(i,e)=>{let t=i*5,n=e*4,s=Math.floor(t),r=Math.floor(n),a=9,o=9,c=0;for(let g=-1;g<=1;g++)for(let m=-1;m<=1;m++){let _=s+m,b=r+g,y=(_%5+5)%5,M=(b%4+4)%4,T=_+.15+Vi(y,M,1)*.7,R=b+.15+Vi(y,M,2)*.7,v=Math.hypot((t-T)*1,(n-R)*1.25);v<a?(o=a,a=v,c=y*31+M):v<o&&(o=v)}let l=o-a,h=Rt(.04,.3,l),d=Vi(c,5,3),p=.4+d*.2,u=Vi(c,9,1)*.06,f=.9+.2*ei(i*12,e*12,3,12,12,c),x=h>.02?1:.35;return[(p+u)*f*x,(p+u*.6)*f*x,(p-.02)*f*x,h*(.7+.3*d),.88,0]})}function cm(){return Qr(512,5,.06,(i,e)=>{let t=ei(i*5,e*5,4,5,5,71),n=ei(i*60,e*60,2,60,60,72),s=Vi(Math.floor(i*512),Math.floor(e*512),8)>.988,r=.93+.07*t;return[.9*r,.94*r,1*r,t*.8+n*.2,s?.12:.78+n*.15,0]})}function um(i=[.13,.135,.145]){return Qr(256,3,.01,(e,t)=>{let n=Vi(Math.floor(e*256),Math.floor(t*256),12),s=ei(e*6,t*6,3,6,6,9),r=.8+.5*n*n+.25*s;return[...lc(i,r),n*.5+s*.3,.88-n*.1,0]})}function hm(){return Qr(512,4,.05,(i,e)=>{let t=ei(i*70,e*70,2,70,70,3),n=ei(i*4,e*4,4,4,4,5),s=ei(i*9,e*9,3,9,9,6),r=.75+.5*t;return[ht(.22,.4,s)*r+n*.05,ht(.3,.4,s)*r*(.85+.3*n),ht(.1,.16,s)*r,t,.92,0]})}function fm(i,e){let t=new Uint8Array(i*i*4);for(let s=0;s<i;s++)for(let r=0;r<i;r++){let a=(r+.5)/i,o=(s+.5)/i,c=.45+.55*ei(a*6,o*4,4,1024,1024,41);c=Rt(.2,.95,c),c*=.35+.65*Rt(0,.18,Math.min(a,1-a,o,1-o)+.04*ei(a*30,o*30,2,1024,1024,5)),e&&(c*=e(a,o));let l=(s*i+r)*4;t[l]=255,t[l+1]=qt(c,0,1)*255,t[l+2]=255,t[l+3]=255}let n=new $s(t,i,i,rs,zi);return n.magFilter=n.minFilter=Ni,n.generateMipmaps=!1,n.needsUpdate=!0,n}function dm(i="living"){let e=document.createElement("canvas");e.width=160,e.height=160;let t=e.getContext("2d"),n={living:["#6b4426","#d99a55","#f5c27c"],kitchen:["#7a5a3a","#e6b673","#fff0cf"],bed:["#4a3a52","#c78b7a","#f1c6a0"],bath:["#4f6670","#a9c7cf","#eaf6f4"],hall:["#5a4128","#c58c52","#efba78"]}[i]||["#6b4426","#d99a55","#f5c27c"],s=t.createLinearGradient(0,0,0,160);s.addColorStop(0,n[0]),s.addColorStop(.55,n[1]),s.addColorStop(1,n[2]),t.fillStyle=s,t.fillRect(0,0,160,160);let r=i==="kitchen"?80:40+Math.random()*80,a=t.createRadialGradient(r,52,2,r,52,70);if(a.addColorStop(0,"rgba(255,246,214,.95)"),a.addColorStop(1,"rgba(255,220,150,0)"),t.fillStyle=a,t.fillRect(0,0,160,160),t.fillStyle="rgba(30,18,10,.55)",i==="living"&&(t.fillRect(14,108,92,52),t.fillRect(14,88,92,22),t.fillRect(112,70,6,90)),i==="kitchen"){t.fillRect(0,100,160,60),t.fillStyle="rgba(30,18,10,.4)";for(let l=0;l<4;l++)t.fillRect(8+l*38,20,30,40)}i==="bed"&&(t.fillRect(20,96,120,64),t.fillRect(20,70,14,40)),i==="bath"&&(t.fillStyle="rgba(20,40,48,.35)",t.fillRect(0,112,160,48),t.fillRect(104,40,40,36)),i==="hall"&&(t.fillRect(0,128,160,32),t.fillRect(70,30,36,90));let o=t.createLinearGradient(0,0,40,0);o.addColorStop(0,"rgba(40,24,16,.7)"),o.addColorStop(1,"rgba(40,24,16,0)"),t.fillStyle=o,t.fillRect(0,0,40,160),t.save(),t.translate(160,0),t.scale(-1,1),t.fillStyle=o,t.fillRect(0,0,40,160),t.restore();let c=new $n(e);return c.colorSpace=bn,c}function Vo(i="rgba(255,190,120,0.9)",e="rgba(255,150,80,0)"){let t=document.createElement("canvas");t.width=t.height=128;let n=t.getContext("2d"),s=n.createRadialGradient(64,64,0,64,64,64);s.addColorStop(0,i),s.addColorStop(.35,i.replace(/[\d.]+\)$/,"0.35)")),s.addColorStop(1,e),n.fillStyle=s,n.fillRect(0,0,128,128);let r=new $n(t);return r.colorSpace=bn,r}function pm(){let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d"),t=e.createRadialGradient(64,64,20,64,64,64);t.addColorStop(0,"rgba(244,189,126,0.55)"),t.addColorStop(1,"rgba(244,189,126,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),e.beginPath(),e.arc(64,64,30,0,Math.PI*2),e.fillStyle="#d98a4e",e.fill(),e.lineWidth=3,e.strokeStyle="#f4bd7e",e.stroke(),e.beginPath(),e.moveTo(49,79),e.lineTo(64,49),e.lineTo(79,79),e.lineWidth=6.5,e.strokeStyle="#121311",e.lineJoin="miter",e.stroke(),e.fillStyle="#121311",e.fillRect(60.5,64.5,7,7);let n=new $n(i);return n.colorSpace=bn,n}function jr(i="rgba(255,255,255,0.6)"){let e=document.createElement("canvas");e.width=e.height=64;let t=e.getContext("2d"),n=t.createRadialGradient(32,32,0,32,32,32);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.25,i),n.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=n,t.fillRect(0,0,64,64);let s=new $n(e);return s.colorSpace=bn,s}function mm(){let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d");for(let n=0;n<9;n++){let s=64+(Vi(n,1,3)-.5)*40,r=64+(Vi(n,2,3)-.5)*40,a=22+Vi(n,3,3)*22,o=e.createRadialGradient(s,r,0,s,r,a);o.addColorStop(0,"rgba(255,255,255,0.28)"),o.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=o,e.fillRect(0,0,128,128)}let t=new $n(i);return t.colorSpace=bn,t}function gm(){let i={lap:sm([.3,.33,.37]),bb:rm([.2,.22,.25]),seam:am([.1,.105,.115]),cedar:Lu(),walnut:Lu([.46,.29,.17],[.25,.15,.09]),oak:Lu([.8,.64,.44],[.56,.4,.25]),form:om(),stone:lm(),snow:cm(),asphalt:um(),grass:hm()},e=(a,o={})=>new cn({map:a.map,normalMap:a.normalMap,roughnessMap:a.rmMap,metalnessMap:a.rmMap,roughness:1,metalness:1,...o}),t=(a,o=.8,c=0,l={})=>new cn({color:a,roughness:o,metalness:c,...l}),n=(a,o)=>(a.userData.shell=!0,a.userData.th=o,a),s=(a,o)=>(a.userData.th=o,a),r={lap:n(e(i.lap,{normalScale:new it(1,1)}),[.3,.05,.3]),bb:n(e(i.bb,{normalScale:new it(1,1)}),[.3,.05,.3]),roof:n(e(i.seam,{normalScale:new it(1.2,1.2),envMapIntensity:1.3}),[.4,.12]),cedar:n(e(i.cedar),[.42,0,.25]),walnut:n(e(i.walnut),[.52]),oak:n(e(i.oak),[.55]),form:n(e(i.form),[.33]),stone:n(e(i.stone),[.33]),drywall:n(t(14209475,.95),[.6]),trim:n(t(855568,.42,.55,{envMapIntensity:1.2}),[.32,0,.2]),reveal:n(t(14275785,.85),[.45]),slab:n(t(7828331,1),[.35]),concrete:n(t(7301987,1),[.33]),floor:n(t(10518364,.7),[.55]),door:n(e(i.walnut),[.52]),insul:n(t(13087881,1),[.5]),counter:n(t(2959910,.5,.05),[.55]),snowRoof:n(t(15265527,.85,0,{alphaToCoverage:!0}),[.03]),ice:s(new ji({color:13625845,roughness:.08,metalness:0,transparent:!0,opacity:.85,clearcoat:1,envMapIntensity:1.6}),[.1]),white:s(t(14605267,.5,.05),[.6]),steel:s(t(10133670,.35,.85),[.55]),pvc:s(t(15131612,.4),[.24]),pipe:s(t(6255750,.5,.4),[.45]),copper:s(t(14256718,.28,.9,{envMapIntensity:1.4}),[.68]),solar:s(new ji({color:726832,roughness:.16,metalness:.7,clearcoat:1,clearcoatRoughness:.06,envMapIntensity:1.5}),[.17]),solarFrame:s(t(11186616,.4,.9),[.3]),neighbor:s(e(i.lap,{color:9080210}),[.26,.04,.24]),neighborRoof:s(e(i.seam,{color:6711920}),[.4,.12]),asphalt:s(e(i.asphalt),[.3]),pavement:s(t(9144706,.95),[.3]),sconce:s(new cn({color:1709070,emissive:16756833,emissiveIntensity:3,roughness:.4}),[.9]),lampHead:s(new cn({color:2236962,emissive:16761466,emissiveIntensity:4,roughness:.4}),[.95]),pole:s(t(1776928,.5,.7),[.3]),spruce:s(new cn({vertexColors:!0,roughness:.92,metalness:0}),[.13]),trunk:s(t(2760471,1),[.18]),shrub:s(new cn({vertexColors:!0,roughness:1}),[.14]),fabric:s(t(6970708,.95),[.5]),fabric2:s(t(4016726,.95),[.5]),leather:s(t(8014634,.55),[.5]),ceramic:s(t(15921129,.18,0),[.45]),mirror:s(t(12570840,.05,.9),[.4]),black:s(t(1381653,.5,.3),[.4]),warmLight:s(new cn({color:2236440,emissive:16767392,emissiveIntensity:5,roughness:.6}),[1])};return["lap","bb","roof","drywall","form","stone","trim","cedar","door","walnut","reveal","snowRoof"].forEach(a=>{r[a].userData.wall=!0}),Object.values(r).forEach(a=>{a.userData.th===void 0&&(a.userData.th=[.3])}),{M:r,T:i}}function Nf(i){let e=new cn({color:395533,roughness:.05,metalness:.25,emissive:16777215,emissiveMap:i,emissiveIntensity:0,envMapIntensity:1.6});return e.userData.shell=!0,e.userData.pane=!0,e.userData.wall=!0,e.userData.th=[.86],e}var Nu=[[-90,"#04060d","#0c1124"],[-20,"#05070f","#10162b"],[-14,"#080d20","#1a2140"],[-9,"#0f1838","#33406a"],[-5,"#1a2650","#7a6f94"],[-2,"#27345e","#d98d62"],[1,"#35508a","#eba66f"],[5,"#43689f","#e8bf8f"],[12,"#4a78b0","#dccfb4"],[25,"#4a80ba","#c7dcec"],[50,"#3f78b8","#b4d2e8"],[90,"#3a72b0","#accce6"]],t_=`varying vec3 vDir;
void main(){ vDir = normalize(position); vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_Position = p.xyww; }`,n_=`precision highp float;
uniform vec3 uTop, uHor, uLow, uSunDir, uSunCol, uMoonDir;
uniform float uSunI, uMoonI, uTime, uCloud, uAurora, uThermal, uSnowLine;
varying vec3 vDir;
float h21(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float n2(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
  return mix(mix(h21(i), h21(i+vec2(1,0)), f.x), mix(h21(i+vec2(0,1)), h21(i+vec2(1,1)), f.x), f.y); }
float fbm(vec2 p){ float a = 0.5, s = 0.0; for (int i = 0; i < 5; i++){ s += a * n2(p); p = p*2.03 + vec2(17.1, 9.2); a *= 0.5; } return s; }
void main(){
  vec3 d = normalize(vDir);
  float e = d.y;
  float up = pow(clamp(e * 1.25, 0.0, 1.0), 0.62);
  vec3 col = mix(uHor, uTop, up);
  if (e < 0.0) col = mix(uHor, uLow, smoothstep(0.0, 0.3, -e));
  // sun: wide horizon glow, tight glow, disc
  float sd = dot(d, uSunDir);
  col += uSunCol * pow(max(sd, 0.0), 4.0) * exp(-abs(e) * 5.0) * 0.55 * uSunI;
  col += uSunCol * pow(max(sd, 0.0), 36.0) * 0.55 * uSunI;
  col += uSunCol * smoothstep(0.99955, 0.99985, sd) * 9.0 * uSunI * step(0.0, e + 0.01);
  // moon
  float md = dot(d, uMoonDir);
  col += vec3(0.72, 0.8, 1.0) * (smoothstep(0.99962, 0.99982, md) * 2.2 + pow(max(md, 0.0), 160.0) * 0.22) * uMoonI;
  // clouds
  if (e > 0.0) {
    vec2 p = d.xz / (e + 0.14) * 0.62 + vec2(uTime * 0.006, uTime * 0.0022);
    float c = fbm(p * 1.7);
    float cov = mix(0.64, 0.4, uCloud);
    float m = smoothstep(cov, cov + 0.26, c) * smoothstep(0.0, 0.16, e);
    float lit = clamp(dot(normalize(vec3(d.x, 0.25, d.z)), uSunDir) * 0.5 + 0.5, 0.0, 1.0);
    vec3 cc = mix(uHor * 0.85 + 0.015, uSunCol * 0.85 + uHor * 0.35, lit * clamp(uSunI, 0.0, 1.0));
    cc *= 1.0 - 0.4 * smoothstep(0.5, 0.92, c);
    col = mix(col, cc, m * 0.82);
  }
  // aurora over the northern horizon (+x)
  if (uAurora > 0.001 && e > 0.015) {
    float az = atan(d.z, d.x);
    float band = exp(-pow(az / 1.05, 2.0));
    float ec = 0.2 + 0.08 * sin(az * 3.0 + uTime * 0.16) + 0.035 * sin(az * 7.0 - uTime * 0.23);
    float w = 0.075 + 0.03 * sin(az * 4.0 + uTime * 0.1);
    float ribbon = exp(-pow((e - ec) / w, 2.0)) + 0.35 * exp(-pow((e - ec - 0.1) / (w * 2.2), 2.0));
    float rays = 0.5 + 0.5 * n2(vec2(az * 26.0 + uTime * 0.35, e * 2.5));
    vec3 ac = mix(vec3(0.18, 1.0, 0.52), vec3(0.72, 0.26, 0.95), smoothstep(ec, ec + 0.2, e));
    col += ac * ribbon * rays * band * smoothstep(0.015, 0.09, e) * uAurora * 1.4;
  }
  col = mix(col, vec3(0.03, 0.005, 0.07) + col * 0.15, uThermal);
  gl_FragColor = vec4(col, 1.0);
}`;function xm(i,e){let t={uTop:{value:new Et},uHor:{value:new Et},uLow:{value:new Et},uSunDir:{value:new F(0,1,0)},uSunCol:{value:new Et(1,.8,.6)},uMoonDir:{value:new F(.3,.55,-.78).normalize()},uSunI:{value:0},uMoonI:{value:0},uTime:{value:0},uCloud:{value:.4},uAurora:{value:0},uThermal:{value:0},uSnowLine:{value:0}},n=new Nn({uniforms:t,vertexShader:t_,fragmentShader:n_,side:es,depthWrite:!1,depthTest:!1}),s=new Fe(new jn(500,48,28),n);s.renderOrder=-10,s.frustumCulled=!1,s.userData.noThermal=!0,s.userData.noAO=!0,e.add(s);let r=Hn(7),a=1500,o=new Float32Array(a*3);for(let M=0;M<a;M++){let T=r()*Math.PI*2,R=Math.acos(1-r()*1),v=480;o[M*3]=Math.sin(R)*Math.cos(T)*v,o[M*3+1]=Math.cos(R)*v,o[M*3+2]=Math.sin(R)*Math.sin(T)*v}let c=new tn;c.setAttribute("position",new Jt(o,3));let l=new Hi({color:14674175,size:1.7,sizeAttenuation:!1,transparent:!0,opacity:0,fog:!1,depthWrite:!1}),h=new Ki(c,l);h.frustumCulled=!1,h.renderOrder=-9,h.userData.noAO=!0,e.add(h);function d(M,T,R){let v=document.createElement("canvas");v.width=4096,v.height=256;let A=v.getContext("2d"),I=Hn(M);A.filter="blur(1.4px)";let G=Array.from({length:8},()=>I()*6.28);A.clearRect(0,0,2048,256),A.beginPath(),A.moveTo(0,256);let w=[3,7,15,31,63],U=[.5,.28,.15,.08*R,.045*R];for(let $=0;$<=4096;$+=2){let z=$/4096*Math.PI*2,q=0;for(let Z=0;Z<5;Z++)q+=U[Z]*Math.pow(1-Math.abs(Math.sin(z*w[Z]+G[Z])),1.6);A.lineTo($,256-qt(q/1.06,0,1)*T)}A.lineTo(4096,256),A.closePath();let N=A.createLinearGradient(0,256-T,0,256);N.addColorStop(0,"rgba(255,255,255,1)"),N.addColorStop(.3,"rgba(232,236,248,1)"),N.addColorStop(.62,"rgba(120,132,160,1)"),N.addColorStop(1,"rgba(66,74,96,0)"),A.fillStyle=N,A.fill();let H=new $n(v);return H.colorSpace=bn,H.wrapS=Qn,H.anisotropy=4,H}function p(M){let T=document.createElement("canvas");T.width=2048,T.height=128;let R=T.getContext("2d"),v=Hn(M);R.clearRect(0,0,2048,128),R.fillStyle="rgba(255,255,255,1)";for(let I=0;I<2048;I+=3){let G=34+v()*40+Math.sin(I*.01)*10,w=6+v()*7;R.beginPath(),R.moveTo(I-w,128),R.lineTo(I,128-G),R.lineTo(I+w,128),R.fill()}R.fillRect(0,100,2048,28);let A=new $n(T);return A.colorSpace=bn,A.wrapS=Qn,A}let u=[{tex:d(3,220,1),R:450,h:190,y:40,k:.8,mix:.86},{tex:d(11,170,.8),R:360,h:120,y:16,k:.55,mix:.68},{tex:p(5),R:300,h:34,y:8,k:.22,mix:.2}].map(M=>{let T=new Wn({map:M.tex,transparent:!0,side:es,depthWrite:!1,fog:!1,color:4478327}),R=new Fe(new vn(M.R,M.R,M.h,96,1,!0),T);return R.position.y=M.y,R.renderOrder=-8,R.frustumCulled=!1,R.userData.noThermal=!0,R.userData.noAO=!0,e.add(R),{...M,mat:T,mesh:R}}),f=new Ta(i),x=new Fa,g=new Fe(new jn(50,32,16),n.clone());g.material.uniforms=t,g.material.depthTest=!0,x.add(g);let m=null,_="",b=new Et,y=new Et;return{dome:s,mat:n,U:t,stars:h,horizon:new Et,zenith:new Et,update(M,T){let R=qt(M.elev,-90,90),v=0;for(;v<Nu.length-2&&Nu[v+1][0]<=R;)v++;let[A,I,G]=Nu[v],[w,U,N]=Nu[v+1],H=Rt(0,1,(R-A)/(w-A));t.uTop.value.copy(b.set(I)).lerp(y.set(U),H),t.uHor.value.copy(b.set(G)).lerp(y.set(N),H),M.seasonTint&&(t.uTop.value.lerp(M.seasonTint.top,M.seasonTint.k),t.uHor.value.lerp(M.seasonTint.hor,M.seasonTint.k)),t.uLow.value.copy(t.uHor.value).multiplyScalar(.55+.25*M.daylight).lerp(b.set(M.snowy?7174806:2764834),.18+.2*M.daylight),t.uLow.value.multiplyScalar(1-.82*(M.voidK||0)),t.uSunDir.value.copy(M.sunDir);let $=1-Rt(0,.5,M.sunDir.y);t.uSunCol.value.setRGB(1,ht(.93,.56,$),ht(.84,.32,$)),t.uSunI.value=Rt(-.14,.04,M.sunDir.y)*ht(1,1.4,$),t.uMoonI.value=(1-M.daylight)*.9,t.uTime.value=T,t.uCloud.value=M.cloud??.4,t.uAurora.value=M.aurora||0,t.uThermal.value=M.thermal||0,this.horizon.copy(t.uHor.value),this.zenith.copy(t.uTop.value),l.opacity=qt((1-M.daylight*1.2)*.95,0,1)*(1-(M.thermal||0)),u.forEach(z=>{z.mat.color.copy(t.uHor.value).lerp(t.uTop.value,.12).multiplyScalar(z.k*(.55+.7*M.daylight)).lerp(b.set(16777215),0).multiplyScalar(1),z.mat.color.lerp(t.uHor.value,1-z.mix),z.mat.color.lerp(y.set(2101306),(M.thermal||0)*.9)})},follow(M){s.position.copy(M),h.position.copy(M),u.forEach(T=>{T.mesh.position.x=M.x,T.mesh.position.z=M.z})},refreshEnv(M){let T=[t.uTop.value.getHexString(),t.uHor.value.getHexString(),t.uSunI.value.toFixed(2),t.uAurora.value.toFixed(1),t.uThermal.value.toFixed(1),t.uSunDir.value.x.toFixed(2),t.uSunDir.value.y.toFixed(2)].join("|");if(!M&&T===_)return;_=T;let R=m;m=f.fromScene(x,.015,.1,200,{size:128}),e.environment=m.texture,R&&R.dispose()}}}var Hr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var ts=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},i_=new va(-1,1,1,-1,0,1),Uf=class extends tn{constructor(){super(),this.setAttribute("position",new Zt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Zt([0,2,0,0,2,0],2))}},s_=new Uf,er=class{constructor(e){this._mesh=new Fe(s_,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,i_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Wo=class extends ts{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Nn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Es.clone(e.uniforms),this.material=new Nn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new er(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var cc=class extends ts{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Uu=class extends ts{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Fu=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new it);this._width=n.width,this._height=n.height,t=new oi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:hi}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Wo(Hr),this.copyPass.material.blending=Ai,this.timer=new zl}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}cc!==void 0&&(a instanceof cc?n=!0:a instanceof Uu&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new it);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Ou=class extends ts{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Et}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var vm={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Et(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Xo=class i extends ts{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new it(e.x,e.y):new it(256,256),this.clearColor=new Et(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new oi(r,a,{type:hi,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new oi(r,a,{type:hi,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let p=new oi(r,a,{type:hi,depthBuffer:!1});p.texture.name="UnrealBloomPass.v"+h,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),a=Math.round(a/2)}let o=vm;this.highPassUniforms=Es.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Nn({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let c=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new it(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Es.clone(Hr.uniforms),this.blendMaterial=new Nn({uniforms:this.copyUniforms,vertexShader:Hr.vertexShader,fragmentShader:Hr.fragmentShader,premultipliedAlpha:!0,blending:Xn,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Et,this._oldClearAlpha=1,this._basic=new Wn,this._fsQuad=new er(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new it(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let s=[],r=[];for(let a=1;a<e;a+=2){let o=t[a],c=a+1<e?t[a+1]:0,l=o+c;s.push((a*o+(a+1)*c)/l),r.push(l)}return new Nn({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new it(.5,.5)},direction:{value:new it(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Nn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};Xo.BlurDirectionX=new it(1,0);Xo.BlurDirectionY=new it(0,1);var uc={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Bu=class extends ts{constructor(){super(),this.isOutputPass=!0,this.uniforms=Es.clone(uc.uniforms),this.material=new Io({name:uc.name,uniforms:this.uniforms,vertexShader:uc.vertexShader,fragmentShader:uc.fragmentShader}),this._fsQuad=new er(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Cn.getTransfer(this._outputColorSpace)===Bn&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Wl?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Xl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Yl?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ma?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Zl?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===$l?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===ql&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var hc={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new it},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new kt},cameraProjectionMatrixInverse:{value:new kt},cameraWorldMatrix:{value:new kt},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new F(-1,-1,-1)},sceneBoxMax:{value:new F(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif

		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}

		void main() {
			float depth = getDepth(vUv.xy);

			#ifdef USE_REVERSED_DEPTH_BUFFER
				if (depth <= 0.0) {
					discard;
					return;
				}
			#else
				if (depth >= 1.0) {
					discard;
					return;
				}
			#endif
			
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {

				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w);
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));

				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));

				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},fc={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},Hu={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function ym(i=5){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=r_(e),n=t.length,s=new Uint8Array(n*4);for(let a=0;a<n;++a){let o=t[a],c=2*Math.PI*o/n,l=new F(Math.cos(c),Math.sin(c),0).normalize();s[a*4]=(l.x*.5+.5)*255,s[a*4+1]=(l.y*.5+.5)*255,s[a*4+2]=127,s[a*4+3]=255}let r=new $s(s,e,e);return r.wrapS=Qn,r.wrapT=Qn,r.needsUpdate=!0,r}function r_(i){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let a=1;a<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),n[s*e+r]!==0){r-=2,s++;continue}else n[s*e+r]=a++;r++,s--}return n}var dc={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:Ff(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new it},cameraProjectionMatrixInverse:{value:new kt},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;

		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);

			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;

			denoised += w * neighborColor;
			totalWeight += w;
		}

		void main() {
			float depth = getDepth(vUv.xy);
			vec3 viewNormal = getViewNormal(vUv);
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);

			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}

			if (totalWeight > 0.) {
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function Ff(i,e,t){let n=a_(i,e,t),s="vec3[SAMPLES](";for(let r=0;r<i;r++){let a=n[r];s+=`vec3(${a.x}, ${a.y}, ${a.z})${r<i-1?",":")"}`}return s}function a_(i,e,t){let n=[];for(let s=0;s<i;s++){let r=2*Math.PI*e*s/i,a=Math.pow(s/(i-1),t);n.push(new F(Math.cos(r),Math.sin(r),a))}return n}var zu=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,s,r,a=.5*(Math.sqrt(3)-1),o=(e+t)*a,c=Math.floor(e+o),l=Math.floor(t+o),h=(3-Math.sqrt(3))/6,d=(c+l)*h,p=c-d,u=l-d,f=e-p,x=t-u,g,m;f>x?(g=1,m=0):(g=0,m=1);let _=f-g+h,b=x-m+h,y=f-1+2*h,M=x-1+2*h,T=c&255,R=l&255,v=this.perm[T+this.perm[R]]%12,A=this.perm[T+g+this.perm[R+m]]%12,I=this.perm[T+1+this.perm[R+1]]%12,G=.5-f*f-x*x;G<0?n=0:(G*=G,n=G*G*this._dot(this.grad3[v],f,x));let w=.5-_*_-b*b;w<0?s=0:(w*=w,s=w*w*this._dot(this.grad3[A],_,b));let U=.5-y*y-M*M;return U<0?r=0:(U*=U,r=U*U*this._dot(this.grad3[I],y,M)),70*(n+s+r)}noise3d(e,t,n){let s,r,a,o,l=(e+t+n)*.3333333333333333,h=Math.floor(e+l),d=Math.floor(t+l),p=Math.floor(n+l),u=1/6,f=(h+d+p)*u,x=h-f,g=d-f,m=p-f,_=e-x,b=t-g,y=n-m,M,T,R,v,A,I;_>=b?b>=y?(M=1,T=0,R=0,v=1,A=1,I=0):_>=y?(M=1,T=0,R=0,v=1,A=0,I=1):(M=0,T=0,R=1,v=1,A=0,I=1):b<y?(M=0,T=0,R=1,v=0,A=1,I=1):_<y?(M=0,T=1,R=0,v=0,A=1,I=1):(M=0,T=1,R=0,v=1,A=1,I=0);let G=_-M+u,w=b-T+u,U=y-R+u,N=_-v+2*u,H=b-A+2*u,$=y-I+2*u,z=_-1+3*u,q=b-1+3*u,Z=y-1+3*u,W=h&255,J=d&255,me=p&255,Ie=this.perm[W+this.perm[J+this.perm[me]]]%12,qe=this.perm[W+M+this.perm[J+T+this.perm[me+R]]]%12,$e=this.perm[W+v+this.perm[J+A+this.perm[me+I]]]%12,xt=this.perm[W+1+this.perm[J+1+this.perm[me+1]]]%12,re=.6-_*_-b*b-y*y;re<0?s=0:(re*=re,s=re*re*this._dot3(this.grad3[Ie],_,b,y));let fe=.6-G*G-w*w-U*U;fe<0?r=0:(fe*=fe,r=fe*fe*this._dot3(this.grad3[qe],G,w,U));let Ue=.6-N*N-H*H-$*$;Ue<0?a=0:(Ue*=Ue,a=Ue*Ue*this._dot3(this.grad3[$e],N,H,$));let we=.6-z*z-q*q-Z*Z;return we<0?o=0:(we*=we,o=we*we*this._dot3(this.grad3[xt],z,q,Z)),32*(s+r+a+o)}noise4d(e,t,n,s){let r=this.grad4,a=this.simplex,o=this.perm,c=(Math.sqrt(5)-1)/4,l=(5-Math.sqrt(5))/20,h,d,p,u,f,x=(e+t+n+s)*c,g=Math.floor(e+x),m=Math.floor(t+x),_=Math.floor(n+x),b=Math.floor(s+x),y=(g+m+_+b)*l,M=g-y,T=m-y,R=_-y,v=b-y,A=e-M,I=t-T,G=n-R,w=s-v,U=A>I?32:0,N=A>G?16:0,H=I>G?8:0,$=A>w?4:0,z=I>w?2:0,q=G>w?1:0,Z=U+N+H+$+z+q,W=a[Z][0]>=3?1:0,J=a[Z][1]>=3?1:0,me=a[Z][2]>=3?1:0,Ie=a[Z][3]>=3?1:0,qe=a[Z][0]>=2?1:0,$e=a[Z][1]>=2?1:0,xt=a[Z][2]>=2?1:0,re=a[Z][3]>=2?1:0,fe=a[Z][0]>=1?1:0,Ue=a[Z][1]>=1?1:0,we=a[Z][2]>=1?1:0,Ve=a[Z][3]>=1?1:0,ie=A-W+l,Qe=I-J+l,le=G-me+l,ye=w-Ie+l,ee=A-qe+2*l,ge=I-$e+2*l,Te=G-xt+2*l,Ze=w-re+2*l,Ye=A-fe+3*l,ut=I-Ue+3*l,ft=G-we+3*l,Q=w-Ve+3*l,It=A-1+4*l,At=I-1+4*l,B=G-1+4*l,S=w-1+4*l,ue=g&255,ce=m&255,Me=_&255,st=b&255,nt=o[ue+o[ce+o[Me+o[st]]]]%32,Oe=o[ue+W+o[ce+J+o[Me+me+o[st+Ie]]]]%32,ze=o[ue+qe+o[ce+$e+o[Me+xt+o[st+re]]]]%32,je=o[ue+fe+o[ce+Ue+o[Me+we+o[st+Ve]]]]%32,vt=o[ue+1+o[ce+1+o[Me+1+o[st+1]]]]%32,L=.6-A*A-I*I-G*G-w*w;L<0?h=0:(L*=L,h=L*L*this._dot4(r[nt],A,I,G,w));let ae=.6-ie*ie-Qe*Qe-le*le-ye*ye;ae<0?d=0:(ae*=ae,d=ae*ae*this._dot4(r[Oe],ie,Qe,le,ye));let he=.6-ee*ee-ge*ge-Te*Te-Ze*Ze;he<0?p=0:(he*=he,p=he*he*this._dot4(r[ze],ee,ge,Te,Ze));let Se=.6-Ye*Ye-ut*ut-ft*ft-Q*Q;Se<0?u=0:(Se*=Se,u=Se*Se*this._dot4(r[je],Ye,ut,ft,Q));let Ae=.6-It*It-At*At-B*B-S*S;return Ae<0?f=0:(Ae*=Ae,f=Ae*Ae*this._dot4(r[vt],It,At,B,S)),27*(h+d+p+u+f)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}_dot4(e,t,n,s,r){return e[0]*t+e[1]*n+e[2]*s+e[3]*r}};var pc=class i extends ts{constructor(e,t,n=512,s=512,r,a,o){super(),this.width=n,this.height=s,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=ym(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new oi(this.width,this.height,{type:hi,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Nn({defines:Object.assign({},hc.defines),uniforms:Es.clone(hc.uniforms),vertexShader:hc.vertexShader,fragmentShader:hc.fragmentShader,blending:Ai,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Ul,this.normalMaterial.blending=Ai,this.pdMaterial=new Nn({defines:Object.assign({},dc.defines),uniforms:Es.clone(dc.uniforms),vertexShader:dc.vertexShader,fragmentShader:dc.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Nn({defines:Object.assign({},fc.defines),uniforms:Es.clone(fc.uniforms),vertexShader:fc.vertexShader,fragmentShader:fc.fragmentShader,blending:Ai}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Nn({uniforms:Es.clone(Hr.uniforms),vertexShader:Hr.vertexShader,fragmentShader:Hr.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Vl,blendDst:ka,blendEquation:Qs,blendSrcAlpha:kl,blendDstAlpha:ka,blendEquationAlpha:Qs}),this.blendMaterial=new Nn({uniforms:Es.clone(Hu.uniforms),vertexShader:Hu.vertexShader,fragmentShader:Hu.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:B0,blendSrc:Vl,blendDst:ka,blendEquation:Qs,blendSrcAlpha:kl,blendDstAlpha:ka,blendEquationAlpha:Qs}),this._fsQuad=new er(null),this._originalClearColor=new Et,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new Js,this.depthTexture.format=Fr,this.depthTexture.type=Sa,this.normalRenderTarget=new oi(this.width,this.height,{minFilter:Ri,magFilter:Ri,type:hi,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Ff(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Ai,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Ai,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Ai,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Ai,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Ai,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,n,s,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_renderOverride(e,t,n,s,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,t.push(n))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new zu,n=e*e*4,s=new Uint8Array(n);for(let a=0;a<e;a++)for(let o=0;o<e;o++){let c=a,l=o;s[(a*e+o)*4]=(t.noise(c,l)*.5+.5)*255,s[(a*e+o)*4+1]=(t.noise(c+e,l)*.5+.5)*255,s[(a*e+o)*4+2]=(t.noise(c,l+e)*.5+.5)*255,s[(a*e+o)*4+3]=(t.noise(c+e,l+e)*.5+.5)*255}let r=new $s(s,e,e,rs,zi);return r.wrapS=Qn,r.wrapT=Qn,r.needsUpdate=!0,r}};pc.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var Of=class extends ts{constructor(e){super(),this.needsSwap=!1,this.holder=e}render(e,t,n){this.holder.value=n.depthTexture}},_m="varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",Mm=`uniform sampler2D tDiffuse; uniform sampler2D tDepth; uniform vec2 uPx; uniform float uNear, uFar, uFocus, uAperture, uMaxBlur; varying vec2 vUv;
    float viewDist(vec2 uv){ float d = texture2D(tDepth, uv).x; return (uNear * uFar) / (uFar - (uFar - uNear) * d); }
    float cocAt(float dist){ return clamp(uAperture * abs(dist - uFocus) / max(dist, 0.001), 0.0, 1.0) * uMaxBlur; }`,o_=`${Mm}
    float ign(vec2 p){ return fract(52.9829189 * fract(dot(p, vec2(0.06711056, 0.00583715)))); }
    void main(){
      float cd = viewDist(vUv); float centerSize = cocAt(cd);
      vec3 color = texture2D(tDiffuse, vUv).rgb; float tot = 1.0; float spill = 0.0;
      float rot = ign(gl_FragCoord.xy) * 6.2831853;
      for (int i = 0; i < TAPS; i++) {
        float fi = float(i) + 0.5;
        float radius = uMaxBlur * sqrt(fi / float(TAPS));
        float ang = fi * 2.39996323 + rot;
        vec2 tc = vUv + vec2(cos(ang), sin(ang)) * uPx * radius;
        float sd = viewDist(tc); float ss = cocAt(sd);
        if (sd > cd) ss = clamp(ss, 0.0, centerSize * 2.0);
        float m = smoothstep(radius - 0.5, radius + 0.5, ss);
        color += mix(color / tot, min(texture2D(tDiffuse, tc).rgb, vec3(24.0)), m); tot += 1.0;
        spill += m * step(sd, cd * 0.97);
      }
      gl_FragColor = vec4(color / tot, spill / float(TAPS));
    }`,l_=`${Mm}
    uniform sampler2D tBlur; uniform vec2 uHalfPx;
    void main(){
      vec4 sharp = texture2D(tDiffuse, vUv);
      vec2 o = uHalfPx * 0.5;
      vec4 blur = (texture2D(tBlur, vUv + o) + texture2D(tBlur, vUv - o) + texture2D(tBlur, vUv + vec2(o.x, -o.y)) + texture2D(tBlur, vUv + vec2(-o.x, o.y))) * 0.25;
      float w = max(smoothstep(0.75, 2.5, cocAt(viewDist(vUv))), smoothstep(0.0, 0.2, blur.a));
      gl_FragColor = vec4(mix(sharp.rgb, blur.rgb, w), sharp.a);
    }`,Bf=class extends ts{constructor(e,t){super(),this.depthHolder=e,this.shared={tDepth:{value:null},uPx:{value:new it(1/1440,1/900)},uNear:{value:.3},uFar:{value:1400},uFocus:{value:30},uAperture:{value:0},uMaxBlur:{value:12}},this.half=new oi(720,450,{type:hi,depthBuffer:!1}),this.gather=new Nn({name:"HauseDofGather",defines:{TAPS:t},uniforms:{tDiffuse:{value:null},...this.shared},vertexShader:_m,fragmentShader:o_,depthTest:!1,depthWrite:!1}),this.composite=new Nn({name:"HauseDofComposite",uniforms:{tDiffuse:{value:null},tBlur:{value:this.half.texture},uHalfPx:{value:new it(1/720,1/450)},...this.shared},vertexShader:_m,fragmentShader:l_,depthTest:!1,depthWrite:!1}),this.quad=new er(this.gather)}setSize(e,t){let n=Math.max(1,Math.round(e/2)),s=Math.max(1,Math.round(t/2));this.half.setSize(n,s),this.shared.uPx.value.set(1/e,1/t),this.composite.uniforms.uHalfPx.value.set(1/n,1/s),this.shared.uMaxBlur.value=Math.max(6,t*.014)}render(e,t,n){this.shared.tDepth.value=this.depthHolder.value,this.gather.uniforms.tDiffuse.value=n.texture,this.quad.material=this.gather,e.setRenderTarget(this.half),this.quad.render(e),this.composite.uniforms.tDiffuse.value=n.texture,this.quad.material=this.composite,e.setRenderTarget(this.renderToScreen?null:t),this.quad.render(e)}dispose(){this.half.dispose(),this.gather.dispose(),this.composite.dispose(),this.quad.dispose()}},c_={name:"HauseGrade",uniforms:{tDiffuse:{value:null},uTime:{value:0},uVig:{value:.32},uGrain:{value:.03},uCA:{value:.0011},uSat:{value:1.05},uCon:{value:1.05},uThermal:{value:0},uAspect:{value:1.6},uShadow:{value:new F(.96,.99,1.05)},uHigh:{value:new F(1.04,1,.95)},uCool:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float uTime, uVig, uGrain, uCA, uSat, uCon, uThermal, uAspect; uniform vec3 uShadow, uHigh; uniform float uCool; varying vec2 vUv;
    float hash(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233)) + uTime) * 43758.5453); }
    void main(){
      vec2 c = vUv - 0.5; c.x *= uAspect * 0.62; float r2 = dot(c, c);
      vec2 off = (vUv - 0.5) * r2 * uCA * 6.0;
      vec3 col = vec3(texture2D(tDiffuse, vUv + off).r, texture2D(tDiffuse, vUv).g, texture2D(tDiffuse, vUv - off).b);
      float l = dot(col, vec3(0.2126, 0.7152, 0.0722));
      float cool = clamp((col.b - max(col.r, col.g)) * 5.0 + 0.15, 0.0, 1.0) * uCool;
      col = mix(col, vec3(l) * uShadow * 1.04, cool);
      col = mix(vec3(l), col, uSat);
      col = (col - 0.5) * uCon + 0.5;
      // split tone: cool shadows, warm highlights
      col = mix(col * uShadow, col * uHigh, smoothstep(0.15, 0.85, l));
      col *= 1.0 - uVig * smoothstep(0.08, 0.6, r2);
      col += (hash(vUv * vec2(1920.0, 1080.0)) - 0.5) * uGrain;
      gl_FragColor = vec4(max(col, 0.0), 1.0);
    }`};function Em(i,e,t,n,s,r){let a=n>=2?4:n===1?2:0,o=new oi(s,r,{type:hi,samples:a,depthTexture:new Js(s,r)}),c=new Fu(i,o);c.setPixelRatio(1),c.addPass(new Ou(e,t));let l={value:null};c.addPass(new Of(l));let h=null,d=null;n>=2&&(h=new pc(e,t,s,r,void 0,{radius:.9,distanceExponent:1.4,thickness:1.2,scale:1,samples:12,distanceFallOff:1,screenSpaceRadius:!1},{lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,radiusExponent:1,rings:2,samples:12}),h.blendIntensity=.9,h._overrideVisibility=function(){let f=this._visibilityCache;this.scene.traverse(x=>{(x.isPoints||x.isLine||x.isLine2||x.isSprite||x.userData&&x.userData.noAO)&&x.visible&&(x.visible=!1,f.push(x))})},c.addPass(h));let p=null;n>=1&&(p=new Bf(l,n>=2?48:20),p.enabled=!1,c.addPass(p),p.setSize(c.readBuffer.width,c.readBuffer.height)),n>=1&&(d=new Xo(new it(s,r),.55,.62,1),c.addPass(d)),c.addPass(new Bu);let u=new Wo(c_);return n===0&&(u.uniforms.uCA.value=0,u.uniforms.uGrain.value=.015),c.addPass(u),{composer:c,bloom:d,gtao:h,dof:p,grade:u,tier:n,setDof(f,x,g,m){if(!p)return;p.enabled=f>.01;let _=p.shared;_.uAperture.value=f,_.uFocus.value=x,_.uNear.value=g,_.uFar.value=m},setSize(f,x){c.setSize(f,x),u.uniforms.uAspect.value=f/x},render(f,x){u.uniforms.uTime.value=x%10,c.render(f)},dispose(){c.dispose(),p&&p.dispose(),o.dispose()}}}var mc=new F;function tr(i,e,t,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),c=Math.PI/4;mc.copy(e),mc[n]=0,mc.normalize();let l=.5*a/(a+o),h=1-mc.angleTo(i)/c;return Math.sign(mc[t])===1?h*l:o/(a+o)+l+l*(1-h)}var nr=class i extends Rn{constructor(e=1,t=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let c=new F,l=new F,h=new F(e,t,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,p=this.attributes.normal.array,u=this.attributes.uv.array,f=d.length/6,x=new F,g=.5/a;for(let m=0,_=0;m<d.length;m+=3,_+=2)switch(c.fromArray(d,m),l.copy(c),l.x-=Math.sign(l.x)*g,l.y-=Math.sign(l.y)*g,l.z-=Math.sign(l.z)*g,l.normalize(),d[m+0]=h.x*Math.sign(c.x)+l.x*r,d[m+1]=h.y*Math.sign(c.y)+l.y*r,d[m+2]=h.z*Math.sign(c.z)+l.z*r,p[m+0]=l.x,p[m+1]=l.y,p[m+2]=l.z,Math.floor(m/f)){case 0:x.set(1,0,0),u[_+0]=tr(x,l,"z","y",r,n),u[_+1]=1-tr(x,l,"y","z",r,t);break;case 1:x.set(-1,0,0),u[_+0]=1-tr(x,l,"z","y",r,n),u[_+1]=1-tr(x,l,"y","z",r,t);break;case 2:x.set(0,1,0),u[_+0]=1-tr(x,l,"x","z",r,e),u[_+1]=tr(x,l,"z","x",r,n);break;case 3:x.set(0,-1,0),u[_+0]=1-tr(x,l,"x","z",r,e),u[_+1]=1-tr(x,l,"z","x",r,n);break;case 4:x.set(0,0,1),u[_+0]=1-tr(x,l,"x","y",r,e),u[_+1]=1-tr(x,l,"y","x",r,t);break;case 5:x.set(0,0,-1),u[_+0]=tr(x,l,"x","y",r,e),u[_+1]=1-tr(x,l,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};var ci=10,gn=8,ir=2.9,gc=[{key:"roof",dy:9.2},{key:"upper",dy:6.6},{key:"main",dy:4.1},{key:"basement",dy:2},{key:"below",dy:0}],mn=(i,e,t)=>new F(i,e,t);function Sm({M:i,T:e,markTex:t,glowTex:n}){let s=new yt,r={};gc.forEach(w=>{let U=new yt;U.userData.level=w.key,r[w.key]=U,s.add(U)});let a={},o=[],c=new fa({color:11126756,transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1,fog:!1}),l={icicles:null,snowL:null,snowR:null,chimneyTop:new yi,fans:[]},h=Ya;function d(w,U,N,H,$=0,z=0,q=0,Z,W={}){let J=new Rn(w,U,N);h(J,W.uv||{});let me=new Fe(J,H);if(me.position.set($,z,q),me.castShadow=W.cast!==!1,me.receiveShadow=W.receive!==!1,W.edges){let Ie=new Lr(new Ro(J,30),c);Ie.raycast=()=>{},me.add(Ie)}return Z&&Z.add(me),me}function p(w,U,N,H,$,z=0,q=0,Z=0,W,J={}){let me=new nr(w,U,N,J.seg||2,H),Ie=new Fe(me,$);return Ie.position.set(z,q,Z),Ie.castShadow=J.cast!==!1,Ie.receiveShadow=!0,W&&W.add(Ie),Ie}function u(w,U,N,H,$,z,q,Z=18){let W=new Fe(new vn(w,w,U,Z),N);return W.position.set(H,$,z),W.castShadow=!0,W.receiveShadow=!0,q&&q.add(W),W}function f(w,U,N,H){let $=a[w]||(a[w]={meshes:[],mats:[],marks:[]}),z=q=>{let Z=q.clone();return Z.userData.baseEmissive=Z.emissive.clone(),Z};if(U.forEach(q=>{q.material=Array.isArray(q.material)?q.material.map(z):z(q.material),q.userData.sys=w,$.meshes.push(q),$.mats.push(...[].concat(q.material))}),N){let q=new Ji(new Bi({map:t,transparent:!0,depthTest:!1,depthWrite:!1,opacity:0}));q.position.copy(N),q.scale.set(.95,.95,1),q.renderOrder=10,q.userData.sys=w,q.userData.noAO=!0,r[H].add(q),$.marks.push(q)}}let x=0,g={},m=w=>g[w]||(g[w]=dm(w));function _(w,U,N,H,$,z){let q=U.x1-U.x0,Z=U.y1-U.y0,W=(U.x0+U.x1)/2,J=(U.y0+U.y1)/2,me=new yt;me.position.set(W,J,0),w.add(me);let Ie=Nf(m(H||"living")),qe=new Fe(new an(q,Z),Ie);qe.position.z=.03,qe.receiveShadow=!1,me.add(qe);let $e=.075,xt=.1;p(q,$e,xt,.012,i.trim,0,Z/2-$e/2,.07,me,{seg:1}),p(q,$e,xt,.012,i.trim,0,-Z/2+$e/2,.07,me,{seg:1}),p($e,Z,xt,.012,i.trim,-q/2+$e/2,0,.07,me,{seg:1}),p($e,Z,xt,.012,i.trim,q/2-$e/2,0,.07,me,{seg:1});let re=q>1.35?Math.round(q/.95):1;for(let Ue=1;Ue<re;Ue++)p(.035,Z-.1,.07,.008,i.trim,-q/2+q/re*Ue,0,.065,me,{seg:1,cast:!1});Z>1.2&&p(q-.1,.035,.07,.008,i.trim,0,Z*.12,.065,me,{seg:1,cast:!1}),p(q+.22,.055,.26,.012,i.cedar,0,-Z/2-.03,.14,me,{seg:1}),p(q+.18,.09,.12,.012,i.trim,0,Z/2+.07,.1,me,{seg:1});let fe=new Ji(new Bi({map:n,transparent:!0,depthWrite:!1,blending:Xn,opacity:0}));return fe.position.set(0,0,.4),fe.scale.set(q*2.6,Z*2.6,1),fe.userData.noAO=!0,me.add(fe),o.push({mat:Ie,halo:fe,order:$!=null?$+x*.001:x,always:!!z,w:q,h:Z}),x++,me}function b(w,U,N){let H=U.x1-U.x0,$=U.y1-U.y0,z=(U.x0+U.x1)/2,q=(U.y0+U.y1)/2,Z=new yt;Z.position.set(z,q,0),w.add(Z),d(H,$,.07,i.door,0,0,0,Z,{uv:{ox:z,oy:q}});let W=new Fe(new an(.22,$*.72),Nf(m("hall")));W.position.set(-H/2+.22,.05,.04),Z.add(W),o.push({mat:W.material,halo:null,order:.5,always:!1,w:.22,h:$*.72}),p(.03,.8,.05,.012,i.trim,H/2-.14,-.05,.08,Z,{seg:1}),p(H+.14,.09,.12,.012,i.trim,0,$/2+.07,.07,Z,{seg:1}),p(.07,$,.1,.01,i.trim,-H/2-.035,0,.06,Z,{seg:1}),p(.07,$,.1,.01,i.trim,H/2+.035,0,.06,Z,{seg:1})}function y(w,U,N,H,$,z,q,Z,W={}){let J=new yt,me=new Set([-w/2,w/2]),Ie=new Set([0,U]);H.forEach(re=>{me.add(re.x0),me.add(re.x1),Ie.add(re.y0),Ie.add(re.y1)});let qe=[...me].sort((re,fe)=>re-fe),$e=[...Ie].sort((re,fe)=>re-fe),xt=[i.trim,i.trim,i.trim,i.trim,$,i.drywall];for(let re=0;re<qe.length-1;re++)for(let fe=0;fe<$e.length-1;fe++){let Ue=(qe[re]+qe[re+1])/2,we=($e[fe]+$e[fe+1])/2;H.some(Ve=>Ue>Ve.x0&&Ue<Ve.x1&&we>Ve.y0&&we<Ve.y1)||d(qe[re+1]-qe[re],$e[fe+1]-$e[fe],N,xt,Ue,we,0,J,{edges:!0,uv:{ox:Ue,oy:we+(W.v0||0)}})}return H.forEach(re=>{re.door?b(J,re,N):_(J,re,N,re.room,W.order,re.always)}),J.position.copy(q),J.rotation.y=Z||0,z.add(J),J}(()=>{let w=r.below,U=[],N=i.form;U.push(d(ci+.5,3.4,.25,N,0,-1.4,gn/2+.12,w,{edges:!0,uv:{ox:0,oy:-1.4}})),U.push(d(ci+.5,3.4,.25,N,0,-1.4,-gn/2-.12,w,{edges:!0,uv:{ox:0,oy:-1.4}})),U.push(d(.25,3.4,gn,N,ci/2+.12,-1.4,0,w,{edges:!0,uv:{oy:-1.4}})),U.push(d(.25,3.4,gn,N,-ci/2-.12,-1.4,0,w,{edges:!0,uv:{oy:-1.4}})),d(ci+1.2,.3,.8,i.concrete,0,-3.1,gn/2+.1,w),d(ci+1.2,.3,.8,i.concrete,0,-3.1,-gn/2-.1,w),d(.8,.3,gn,i.concrete,ci/2+.1,-3.1,0,w),d(.8,.3,gn,i.concrete,-ci/2-.1,-3.1,0,w);let H=d(ci,.16,gn,i.slab,0,-2.88,0,w,{edges:!0});f("foundation",[...U,H],mn(ci/2+.6,-1.4,1.6),"below");let $=u(.14,9,i.pipe,.6,-3.25,-gn/2-4.3,w);$.rotation.x=Math.PI/2-.05;let z=u(.14,.6,i.pipe,.6,-3,-gn/2+.2,w),q=u(.12,3.2,i.pvc,.6,-1.6,-gn/2-1.2,w);f("sewer",[$,z,q],mn(.6,-2.4,-gn/2-4.5),"below");let Z=u(.1,.5,i.pvc,-1.2,-2.7,-1.5,w);f("radon",[Z],mn(-1.2,-2.2,-1.5),"below");let W=u(.06,ci+1,i.pvc,0,-3.25,gn/2+.7,w,10);W.rotation.z=Math.PI/2,W.castShadow=!1})(),(()=>{let w=r.basement,U=new ps(16766880,0,15,2);U.position.set(.2,-.7,-.4),w.add(U),w.userData.lights=[U];let N=d(.85,1.7,.85,i.white,-3.3,-2,-2.6,w),H=d(.87,.12,.87,i.copper,-3.3,-1.5,-2.6,w),$=d(6.2,.36,.5,i.steel,-.3,-.12,-2.6,w),z=d(.5,1,.5,i.steel,-3.3,-.7,-2.6,w),q=u(.07,1.2,i.pvc,-3,-.6,-3.1,w);f("hvac",[N,H,$,z,q],mn(-3.3,-.9,-2),"basement");let Z=u(.3,1.4,i.white,-2.1,-2.1,-3,w),W=u(.04,1.2,i.copper,-2,-.9,-3,w);f("water-heaters",[Z,W],mn(-2.1,-1.1,-2.6),"basement");let J=d(.62,.95,.14,i.steel,2.8,-1.2,-3.8,w),me=d(.4,.7,.02,i.copper,2.8,-1.2,-3.72,w),Ie=u(.05,1.5,i.copper,2.8,-.1,-3.8,w);f("electrical",[J,me,Ie],mn(2.8,-.5,-3.3),"basement");let qe=u(.1,3.1,i.pvc,-1.2,-1.2,-1.5,w);f("radon",[qe],null,"basement"),u(.09,3.1,i.pipe,-2.6,-1.3,-3.6,w);for(let $e=-4;$e<=4;$e++)d(.09,.3,gn-.3,i.cedar,$e*1,0-.1,0,w,{cast:!1})})();let M=[{x0:-3.8,x1:-1.2,y0:.7,y1:2.5,room:"living"},{x0:.2,x1:1.3,y0:0,y1:2.2,door:!0},{x0:2.1,x1:4.2,y0:.7,y1:2.5,room:"kitchen"}];(()=>{let w=r.main,U=.3;d(ci,.3,gn,i.floor,0,.15,0,w,{edges:!0}),y(ci,ir,.22,M,i.lap,w,mn(0,U,gn/2),0,{order:1,v0:U}),y(ci,ir,.22,[{x0:-3,x1:1.6,y0:.1,y1:2.45,room:"kitchen"}],i.lap,w,mn(0,U,-gn/2),Math.PI,{order:4,v0:U}),y(gn,ir,.22,[{x0:-2.2,x1:-.2,y0:.8,y1:2.3,room:"hall"}],i.lap,w,mn(ci/2,U,0),Math.PI/2,{order:2,v0:U}),y(gn,ir,.22,[{x0:.3,x1:2.3,y0:.8,y1:2.3,room:"living"}],i.lap,w,mn(-ci/2,U,0),-Math.PI/2,{order:3,v0:U}),d(.15,ir,5,i.drywall,1.2,U+ir/2,-1.2,w);let N=d(3,.95,.65,i.counter,2.9,U+.48,-3.4,w),H=p(.85,1.95,.7,.03,i.steel,4.35,U+.98,-3.4,w),$=d(.75,.05,.6,i.steel,2.4,U+.97,-3.4,w);f("installation",[N,H,$],mn(3,2.3,-3.2),"main");let z=u(.1,3.2,i.pvc,-1.2,1.9,-1.5,w);f("radon",[z],null,"main"),u(.09,3.2,i.pipe,-2.6,1.9,-3.6,w),p(.3,.42,.18,.02,i.white,2.8,1.5,-gn/2-.2,w),u(.035,3.6,i.steel,2.8,3.55,-gn/2-.1,w,10);let q=new ps(16758123,0,11,2);q.position.set(-1.5,2.4,.5),w.add(q);let Z=new ps(16758123,0,9,2);Z.position.set(3,2.4,-1.5),w.add(Z),w.userData.lights=[q,Z];let W=new yt;w.add(W),d(2.9,.32,2.3,i.stone,.55,.16,5.1,W,{uv:{ox:.55,oy:.16}}),d(2.9,.07,2.3,i.cedar,.55,.35,5.1,W,{uv:{}}),d(1.7,.17,.4,i.concrete,.7,.085,6.55,W),d(1.9,.17,.4,i.concrete,.7,.255-.085,6.2,W),[-.75,1.85].forEach(qe=>{p(.22,2.55,.22,.015,i.cedar,qe,1.67,6.12,W),d(.34,.5,.34,i.stone,qe,.6,6.12,W,{uv:{ox:qe,oy:.6}})}),p(3.5,.24,.22,.02,i.cedar,.55,2.84,6.12,W);let J=d(3.4,.14,2.6,[i.trim,i.trim,i.roof,i.cedar,i.trim,i.trim],.55,3,5.25,W,{uv:{swap:!0}});J.rotation.x=.1,[-.15,1.65].forEach(qe=>{let $e=new Fe(new vn(.06,.07,.24,12),i.sconce);$e.position.set(qe,1.9,4.2),$e.userData.noAO=!0,W.add($e);let xt=new Ji(new Bi({map:n,transparent:!0,depthWrite:!1,blending:Xn,opacity:0}));xt.position.set(qe,1.9,4.5),xt.scale.set(1.6,1.6,1),xt.userData.noAO=!0,W.add(xt),l.porchHalos=(l.porchHalos||[]).concat(xt)}),[-.78,1.88].forEach(qe=>{d(.06,.06,2,i.trim,qe,1.2,5.15,W),d(.05,.05,2,i.trim,qe,.55,5.15,W);for(let $e=0;$e<8;$e++)d(.025,.62,.025,i.trim,qe,.9,4.25+$e*.27,W,{cast:!1})});let me=new Fe(new an(.2,.2),new Wn({map:t,transparent:!0,toneMapped:!1}));me.position.set(1.62,1.35,4.13),me.userData.noAO=!0,W.add(me);let Ie=new ps(16761469,0,7,2);Ie.position.set(.75,2.6,gn/2+1.1),w.add(Ie),w.userData.porch=Ie})(),(()=>{let w=r.upper,U=3.45;d(ci,.25,gn,i.floor,0,3.32,0,w,{edges:!0}),y(ci,ir,.22,[{x0:-3.6,x1:-1.8,y0:.9,y1:2.4,room:"bed"},{x0:-.9,x1:1.9,y0:.5,y1:2.5,room:"living"},{x0:2.6,x1:4.1,y0:.9,y1:2.4,room:"bed"}],i.bb,w,mn(0,U,gn/2),0,{order:5,v0:U}),y(ci,ir,.22,[{x0:-3.4,x1:-1.8,y0:.9,y1:2.3,room:"bath"},{x0:1.6,x1:3.2,y0:.9,y1:2.3,room:"bed"}],i.bb,w,mn(0,U,-gn/2),Math.PI,{order:8,v0:U}),y(gn,ir,.22,[{x0:.6,x1:2.4,y0:.9,y1:2.3,room:"bed"}],i.bb,w,mn(ci/2,U,0),Math.PI/2,{order:6,v0:U}),y(gn,ir,.22,[{x0:-2.2,x1:-.6,y0:1.2,y1:2.2,room:"bath"}],i.bb,w,mn(-ci/2,U,0),-Math.PI/2,{order:7,v0:U}),d(.15,ir,gn-.4,i.drywall,-1.6,U+ir/2,0,w);let N=p(1.7,.55,.8,.08,i.ceramic,-3.6,U+.28,-3.35,w),H=p(.7,.85,.5,.04,i.ceramic,-2.4,U+.43,-3.5,w),$=u(.09,3,i.pipe,-2.6,U+1.4,-3.6,w);f("plumbing",[N,H,$],mn(-3.4,4.6,-3),"upper");let z=u(.1,3,i.pvc,-1.2,U+1.4,-1.5,w);f("radon",[z],null,"upper");let q=new ps(16758123,0,11,2);q.position.set(.5,5.6,.5),w.add(q),w.userData.lights=[q]})(),(()=>{let w=r.roof,U=6.35,N=3.6,H=ci/2,$=.6,z=Math.atan2(N,H),q=Math.hypot(H+$,(H+$)*N/H),Z=ee=>{let ge=new Rn(q,.2,gn+1);h(ge,{swap:!0});let Te=new Fe(ge,[i.trim,i.trim,i.roof,i.cedar,i.trim,i.trim]);Te.castShadow=!0,Te.receiveShadow=!0,Te.rotation.z=ee*z;let Ze=U+N-(H+$)/2*(N/H)+.12;return Te.position.set(ee>0?-(H+$)/2+.02:(H+$)/2-.02,Ze,0),w.add(Te),Te},W=Z(1),J=Z(-1);[W,J].forEach(ee=>{let ge=new Lr(new Ro(ee.geometry,30),c);ge.raycast=()=>{},ee.add(ge)}),[W,J].forEach((ee,ge)=>{[-1,1].forEach(Ye=>d(q,.3,.06,i.trim,0,-.05,Ye*(gn/2+.5),ee,{cast:!1}));let Te=ge===0?-1:1;d(.06,.34,gn+1.04,i.trim,Te*(q/2),-.1,0,ee,{cast:!1});let Ze=d(.12,.1,gn+.9,i.trim,Te*(q/2+.06),-.28,0,ee,{cast:!1});Ze.rotation.z=-ee.rotation.z}),d(.3,.22,gn+1.05,i.trim,0,U+N+.2,0,w),f("roofing",[W,J],mn(-2.8,9.1,2.2),"roof");let me=new Ei;me.moveTo(-H,0),me.lineTo(H,0),me.lineTo(0,N),me.lineTo(-H,0);let Ie=new Ks;Ie.moveTo(-.5,1.15),Ie.lineTo(.5,1.15),Ie.lineTo(.5,2.15),Ie.lineTo(-.5,2.15),Ie.lineTo(-.5,1.15),me.holes.push(Ie);let qe=new Rs(me,{depth:.22,bevelEnabled:!1});[gn/2-.22,-gn/2].forEach((ee,ge)=>{let Te=new Fe(qe,[i.bb,i.trim]);Te.position.set(0,U,ee),Te.castShadow=!0,Te.receiveShadow=!0,w.add(Te);let Ze=new yt;Ze.position.set(0,U+1.65,ee+.11),w.add(Ze);let Ye=_(Ze,{x0:-.5,x1:.5,y0:-.5,y1:.5,room:"hall"},.22,"hall",-1,!0);ge===1&&(Ze.rotation.y=Math.PI,Ze.position.z=ee+.11-0);let ut=new Ji(new Bi({map:n,transparent:!0,depthWrite:!1,blending:Xn,opacity:0}));ut.position.set(0,U+1.65,ee+(ge===0?.55:-.3)),ut.scale.set(3.4,3.4,1),ut.userData.noAO=!0,w.add(ut),o.push({mat:null,halo:ut,order:-1,always:!0,w:1,h:1,haloOnly:!0,level:.6})});let $e=new yt;$e.rotation.z=-z,$e.position.copy(J.position);let xt=[];for(let ee=0;ee<2;ee++)for(let ge=0;ge<4;ge++){let Te=d(1.3,.05,.95,i.solar,-.9+ee*1.45,.16,-1.6+ge*1.05,$e,{cast:!1}),Ze=d(1.34,.04,.99,i.solarFrame,-.9+ee*1.45,.14,-1.6+ge*1.05,$e,{cast:!1});xt.push(Te)}w.add($e),f("solar",xt,mn(3.4,9.3,.6),"roof");let re=ee=>{let ge=new an(q-.25,gn+.7,30,30),Te=ge.attributes.position,Ze=Hn(5);for(let ft=0;ft<Te.count;ft++)Te.setZ(ft,.025+Ze()*.05);ge.computeVertexNormals();let Ye=i.snowRoof.clone();Ye.alphaMap=fm(256,ee),Ye.alphaTest=.25,Ye.userData={...i.snowRoof.userData};let ut=new Fe(ge,Ye);return ut.rotation.x=-Math.PI/2,ut.position.y=.105,ut.receiveShadow=!0,ut.castShadow=!0,ut};l.snowL=re(),l.snowL.userData.keep=!0,W.add(l.snowL),l.snowR=re((ee,ge)=>ee>.24&&ee<.7&&ge>.24&&ge<.76?0:1),l.snowR.userData.keep=!0,J.add(l.snowR);let fe=d(.5,.16,gn+.8,i.snowRoof,0,U+N+.38,0,w,{cast:!1});fe.material=i.snowRoof,fe.userData.keep=!0,(()=>{let ee=Hn(9),ge=70,Te=new Kr(.04,1,6);Te.rotateX(Math.PI),Te.translate(0,-.5,0);let Ze=new Mi(Te,i.ice,ge*2),Ye=new kt,ut=new Vn,ft=new F,Q=new F,It=U+N-(H+$)*(N/H)+0;for(let At=0;At<2;At++)for(let B=0;B<ge;B++){let S=-gn/2-.4+B/(ge-1)*(gn+.8),ue=.12+ee()*ee()*.7,ce=.7+ee()*.8;ft.set((At?1:-1)*(H+$+.08),It-.35,S+(ee()-.5)*.06),Q.set(ce,ue,ce),Ye.compose(ft,ut,Q),Ze.setMatrixAt(At*ge+B,Ye)}Ze.userData.baseMatrices=Array.from({length:ge*2},(At,B)=>{let S=new kt;return Ze.getMatrixAt(B,S),S}),Ze.castShadow=!1,Ze.userData.noAO=!0,Ze.visible=!1,w.add(Ze),l.icicles=Ze})();let Ue=new an(ci-.6,gn-.6,40,32),we=Ue.attributes.position,Ve=Hn(3);for(let ee=0;ee<we.count;ee++)we.setZ(ee,Ve()*.12);Ue.computeVertexNormals();let ie=new Fe(Ue,i.insul);ie.rotation.x=-Math.PI/2,ie.position.y=U+.02,ie.receiveShadow=!0,w.add(ie),d(ci,.1,gn,i.floor,0,U-.05,0,w),f("asbestos",[ie],mn(-.4,7.3,-.8),"roof");let Qe=u(.1,4.6,i.pvc,-1.2,U+2.2,-1.5,w);f("radon",[Qe],mn(-1.2,10.9,-1.5),"roof");let le=u(.24,.42,i.steel,-1.2,7.9,-1.5,w,16);f("radon",[le],null,"roof"),u(.09,4,i.pipe,-2.6,U+2,-3.6,w);let ye=d(.95,4.1,.95,i.stone,-3.4,8.4,-1.6,w,{uv:{ox:-3.4,oy:8.4}});d(1.15,.12,1.15,i.concrete,-3.4,10.5,-1.6,w),d(.7,.3,.7,i.steel,-3.4,10.7,-1.6,w),l.chimneyTop.position.set(-3.4,10.9,-1.6),w.add(l.chimneyTop)})();let T={meter:mn(2.8,1.45,-4.3),panel:mn(2.8,-1.2,-3.8),shutoff:mn(-.5,-1.4,3.75),heater:mn(-2.1,-2,-3),sewer:mn(.6,-3.35,-7.5),furnace:mn(-3.3,-2,-2.6),register:mn(3.8,3.52,2.9),fan:mn(-1.2,7.9,-1.5),pit:mn(-1.2,-3,-1.5),exhaust:mn(-1.2,11.6,-1.5),rim:mn(4.9,.3,4.05),sill:mn(-2.5,.7,4.05),attic:mn(0,6.4,4.05),door:mn(.75,1.2,4.05),chimney:mn(-3.4,10.5,-1.6),eave:mn(-5.6,5.9,3.5),potlights:mn(-2.4,3.1,.7),rangeHood:mn(2.4,2.4,-3.55),island:mn(3,1.3,-.6),vanity:mn(-2.4,4.4,-3.55),tub:mn(-3.6,4.1,-3.35),bedWindow:mn(2.4,5.2,-3.9),sump:mn(.66,-2.2,1.6)},R=new kt,v=new F,A=new Vn,I=new F;function G(w,U,N,H,$){let z=H<.55?1:0;G.on=ht(G.on??0,z,qt($*(z?.55:1.2),0,1));let q=G.on*9,Z=(1-w.ghost*.85)*(1-.35*(w.cut||0)),W=1-.65*(w.cut||0),J=1+1.6*(w.cut||0);o.forEach(Ue=>{let we=(Ue.always?1:qt(q-Ue.order,0,1))*Z,Ve=1-H*.8;Ue.mat&&(Ue.mat.emissiveIntensity=(Ue.always?2.6:2)*we*Ve*W),Ue.halo&&(Ue.halo.material.opacity=(Ue.haloOnly?.28:Ue.always?.5:.3)*we*Ve*W)}),["main","upper"].forEach(Ue=>(r[Ue].userData.lights||[]).forEach(we=>{we.intensity=9*qt(q/9,0,1)*(1-H)*Z*J}));let me=Math.max(w.zk||0,Rt(.2,.7,w.explode||0),qt(((w.lift||0)-1.5)/1.5,0,1));(r.basement.userData.lights||[]).forEach(Ue=>{Ue.intensity=30*me*Z*J});let Ie=(1-H)*Z;r.main.userData.porch.intensity=12*Ie,(l.porchHalos||[]).forEach(Ue=>{Ue.material.opacity=.55*Ie*W}),i.sconce.emissiveIntensity=.4+3.2*(1-H);let qe=qt(w.melt,0,1),$e=.18+qe*.8;l.snowL.material.alphaTest=$e,l.snowR.material.alphaTest=qt($e+.1,0,1);let xt=r.roof.children.find(Ue=>Ue.material===i.snowRoof);xt&&(xt.visible=qe<.6);let re=l.icicles,fe=qt(w.icicles,0,1);if(re.visible=fe>.01,re.visible){for(let Ue=0;Ue<re.count;Ue++)R.copy(re.userData.baseMatrices[Ue]),R.decompose(v,A,I),I.y*=fe,I.x*=.5+.5*fe,I.z=I.x,R.compose(v,A,I),re.setMatrixAt(Ue,R);re.instanceMatrix.needsUpdate=!0}return q}return{house:s,layers:r,sys:a,windows:o,ANCHORS:T,edgeMat:c,extra:l,update:G,box:d,rbox:p,cyl:u,system:f,wall:y,windowUnit:_,setUV:h,v:mn}}function Ss(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,c=new tn,l=0;for(let h=0;h<i.length;++h){let d=i[h],p=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let u in d.attributes){if(!n.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+u+'" attribute exists among all geometries, or in none of them.'),null;r[u]===void 0&&(r[u]=[]),r[u].push(d.attributes[u]),p++}if(p!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let u in d.morphAttributes){if(!s.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[u]===void 0&&(a[u]=[]),a[u].push(d.morphAttributes[u])}if(e){let u;if(t)u=d.index.count;else if(d.attributes.position!==void 0)u=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,u,h),l+=u}}if(t){let h=0,d=[];for(let p=0;p<i.length;++p){let u=i[p].index;for(let f=0;f<u.count;++f)d.push(u.getX(f)+h);h+=i[p].attributes.position.count}c.setIndex(d)}for(let h in r){let d=bm(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,d)}for(let h in a){let d=a[h][0].length;if(d!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let p=0;p<d;++p){let u=[];for(let x=0;x<a[h].length;++x)u.push(a[h][x][p]);let f=bm(u);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(f)}}}return c}function bm(i){let e,t,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let a=new e(r),o=new Jt(a,t,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let d=c/t;for(let p=0,u=h.count;p<u;p++)for(let f=0;f<t;f++){let x=h.getComponent(p,f);o.setComponent(p+d,f,x)}}else a.set(h.array,c);c+=h.count*t}return s!==void 0&&(o.gpuType=s),o}function Tm(i,e=1e-4){e=Math.max(e,Number.EPSILON);let t={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count,a=0,o=Object.keys(i.attributes),c={},l={},h=[],d=["getX","getY","getZ","getW"],p=["setX","setY","setZ","setW"];for(let _=0,b=o.length;_<b;_++){let y=o[_],M=i.attributes[y];c[y]=new M.constructor(new M.array.constructor(M.count*M.itemSize),M.itemSize,M.normalized);let T=i.morphAttributes[y];T&&(l[y]||(l[y]=[]),T.forEach((R,v)=>{let A=new R.array.constructor(R.count*R.itemSize);l[y][v]=new R.constructor(A,R.itemSize,R.normalized)}))}let u=e*.5,f=Math.log10(1/e),x=Math.pow(10,f),g=u*x;for(let _=0;_<r;_++){let b=n?n.getX(_):_,y="";for(let M=0,T=o.length;M<T;M++){let R=o[M],v=i.getAttribute(R),A=v.itemSize;for(let I=0;I<A;I++)y+=`${Math.trunc(v[d[I]](b)*x+g)},`}if(y in t)h.push(t[y]);else{for(let M=0,T=o.length;M<T;M++){let R=o[M],v=i.getAttribute(R),A=i.morphAttributes[R],I=v.itemSize,G=c[R],w=l[R];for(let U=0;U<I;U++){let N=d[U],H=p[U];if(G[H](a,v[N](b)),A)for(let $=0,z=A.length;$<z;$++)w[$][H](a,A[$][N](b))}}t[y]=a,h.push(a),a++}}let m=i.clone();for(let _ in i.attributes){let b=c[_];if(m.setAttribute(_,new b.constructor(b.array.slice(0,a*b.itemSize),b.itemSize,b.normalized)),_ in l)for(let y=0;y<l[_].length;y++){let M=l[_][y];m.morphAttributes[_][y]=new M.constructor(M.array.slice(0,a*M.itemSize),M.itemSize,M.normalized)}}return m.setIndex(h),m}var zf=0,wm={value:new ai(0,0,-1,30)};function xc(i,e,t,n=!1){let s=i.onBeforeCompile,r=++zf;return i.onBeforeCompile=(a,o)=>{s&&s(a,o),a.uniforms.uSight=wm,a.fragmentShader=a.fragmentShader.replace("#include <common>",`#include <common>
uniform vec4 uSight;`).replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
      { vec3 fp = -vViewPosition;
        float fd = smoothstep(${e.toFixed(1)}, ${t.toFixed(1)}, length(fp));${n?`
        float fs = dot(fp, uSight.xyz);
        float fc = 1.0 - smoothstep(0.12, 0.26, length(fp - fs * uSight.xyz) / max(fs, 0.5));
        fd = min(fd, 1.0 - 0.94 * fc * smoothstep(0.5, 4.0, uSight.w - fs) * step(0.0, fs));`:""}
        float fh = fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715))));
        if (fd < fh) discard; }`)},i.customProgramCacheKey=()=>"fade"+r,i}function Hf(i,e){let t=i.onBeforeCompile,n=++zf;return i.onBeforeCompile=(s,r)=>{t&&t(s,r),s.uniforms.uSnow=e,s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
attribute float aSnow;
uniform float uSnow;`).replace("#include <color_vertex>",`#include <color_vertex>
vColor.rgb = mix(vColor.rgb, vec3(0.8, 0.86, 0.95), aSnow * uSnow);`)},i.customProgramCacheKey=()=>"snowv"+n,i}function Rm({M:i,T:e,glowTex:t,markTex:n,tier:s,reduce:r}){let a=new yt,o=Hn(21),c=jr("rgba(255,255,255,0.7)"),l=mm(),h=Vo("rgba(255,196,120,0.9)","rgba(255,150,70,0)"),d={uSnow:{value:1},uRoofSnow:{value:1},uTint:{value:new Et(1,1,1)},uGrow:{value:0},uLeafTint:{value:new Et(.3,.5,.15)}},p=e.grass,u=e.snow,f=new cn({map:u.map,normalMap:u.normalMap,roughnessMap:u.rmMap,metalnessMap:u.rmMap,roughness:1,metalness:1,transparent:!0,normalScale:new it(1.1,1.1),envMapIntensity:.9});f.onBeforeCompile=j=>{j.uniforms.uSnow=d.uSnow,j.uniforms.uTint=d.uTint,j.uniforms.uGrass={value:p.map},j.vertexShader=j.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vWxz;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vWxz = (modelMatrix * vec4(position, 1.0)).xz;`),j.fragmentShader=j.fragmentShader.replace("#include <common>",`#include <common>
      uniform float uSnow; uniform vec3 uTint; uniform sampler2D uGrass; varying vec2 vWxz;
      float gh(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float gn(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f); return mix(mix(gh(i), gh(i+vec2(1,0)), f.x), mix(gh(i+vec2(0,1)), gh(i+vec2(1,1)), f.x), f.y); }`).replace("#include <map_fragment>",`
      vec4 snowC = texture2D(map, vMapUv);
      vec3 gr = texture2D(uGrass, vWxz * 0.25).rgb * uTint;
      float nz = gn(vWxz * 0.35) * 0.55 + gn(vWxz * 1.7) * 0.3 + gn(vWxz * 7.0) * 0.15;
      float cover = smoothstep(uSnow - 0.1, uSnow + 0.1, 1.0 - nz + (uSnow - 0.5) * 0.9);
      cover = uSnow >= 0.995 ? 1.0 : (uSnow <= 0.005 ? 0.0 : cover);
      diffuseColor.rgb *= mix(gr / max(snowC.rgb, vec3(0.2)) * 0.9, vec3(1.0), cover);
      diffuseColor *= snowC;`)};let x=200,g=6,m=450,_=Array.from({length:x+1},(j,ne)=>m*Math.sinh(g*(ne/x*2-1))/Math.sinh(g)),b=(j,ne)=>{let pe=Math.hypot(j,ne),Ge=Rt(40,220,pe)*(ei(j*.012+3,ne*.012+8,4,4096,4096,3)-.35)*22,E=(ei(j*.09,ne*.09,3,4096,4096,9)-.5)*.35*Rt(8,22,pe)*(1-Rt(14,17,ne)*(1-Rt(27,30,ne)))*(1-Rt(-22.5,-20.5,ne)*(1-Rt(-15.5,-13.5,ne)))*(1-Rt(5,6.2,j)*(1-Rt(10.2,11.5,j))*Rt(.5,2,ne)*(1-Rt(16.5,18,ne)));return Ge+E},y=new tn;{let j=new Float32Array((x+1)*(x+1)*3),ne=new Float32Array((x+1)*(x+1)*2),pe=[];for(let Ge=0;Ge<=x;Ge++)for(let E=0;E<=x;E++){let O=Ge*(x+1)+E,K=_[E],X=_[Ge];j[O*3]=K,j[O*3+1]=b(K,X),j[O*3+2]=X,ne[O*2]=K,ne[O*2+1]=X}for(let Ge=0;Ge<x;Ge++)for(let E=0;E<x;E++){let O=(_[E]+_[E+1])/2,K=(_[Ge]+_[Ge+1])/2;if(Math.abs(O)<5.1&&Math.abs(K)<4.1)continue;let X=Ge*(x+1)+E,de=X+1,Re=X+x+1,_e=Re+1;pe.push(X,Re,de,de,Re,_e)}y.setAttribute("position",new Jt(j,3)),y.setAttribute("uv",new Jt(ne,2)),y.setIndex(pe),y.computeVertexNormals()}let M=[],T=new Fe(y,f);T.receiveShadow=!0,T.renderOrder=-1,a.add(T);let R=i.asphalt.clone();[R.map,R.normalMap,R.roughnessMap,R.metalnessMap].forEach(j=>{j&&j.repeat.set(220,3)}),R.roughness=.72,R.metalness=0,R.metalnessMap=null,R.envMapIntensity=1.4;let v=new Fe(new an(660,9),R);v.rotation.x=-Math.PI/2,v.position.set(0,.012,22.2),v.receiveShadow=!0,a.add(v);let A=null;{let j=new an(2.2,.14),ne=new Mi(j,new cn({color:14070346,roughness:.8}),90),pe=new kt,Ge=new Vn().setFromEuler(new Ui(-Math.PI/2,0,0)),E=new F,O=new F(1,1,1);for(let K=0;K<90;K++)E.set(-180+K*4,.02,22.2),pe.compose(E,Ge,O),ne.setMatrixAt(K,pe);ne.receiveShadow=!0,a.add(ne),A=ne}M.push(R,i.pavement);let I=new Fe(new Rn(660,.1,1.8),i.pavement);I.position.set(0,.05,15.6),I.receiveShadow=!0,I.castShadow=!0,a.add(I);let G=new Fe(new Rn(1.3,.05,9.4),i.pavement);G.position.set(.7,.03,10.9),G.receiveShadow=!0,a.add(G);let w=new Fe(new Rn(3.6,.06,14.5),i.pavement);w.position.set(7.9,.03,9.3),w.receiveShadow=!0,a.add(w);let U=i.asphalt.clone();[U.map,U.normalMap,U.roughnessMap,U.metalnessMap].forEach(j=>{j&&j.repeat.set(220,1.5)}),U.metalnessMap=null,U.metalness=0,U.roughness=.9,U.color.setScalar(1.25),M.push(U);let N=new Fe(new an(660,4.5),U);N.rotation.x=-Math.PI/2,N.position.set(0,.012,-18.2),N.receiveShadow=!0,a.add(N);let H=(()=>{let j=new jn(1,10,6),ne=new Mi(j,new cn({color:14673906,roughness:.95}),70),pe=new kt,Ge=new Vn,E=new F,O=new F;for(let K=0;K<70;K++){let X=K%2,de=-140+(K>>1)*8+o()*3;E.set(de,.1,X?26.9:17.6+o()*.2),O.set(2.8+o()*1.4,.55+o()*.25,.9+o()*.3),pe.compose(E,Ge,O),ne.setMatrixAt(K,pe)}return ne.castShadow=!0,ne.receiveShadow=!0,a.add(ne),ne})(),$=[],z=xc(i.pole.clone(),3.5,9),q=xc(new cn({color:3817544,roughness:.42,metalness:.65}),3.5,9),Z=new Wn({color:new Et(3.2,2.2,1.1),toneMapped:!1}),W=new fs([new F(0,6.9,0),new F(0,7.45,.25),new F(0,7.6,.9),new F(0,7.5,1.6)]),J=new ds(W,14,.05,8),me=new jn(1,24,12);me.scale(.54,.085,.23),[[-13,16.6],[11,16.6],[34,16.6],[-38,16.6]].forEach(([j,ne])=>{let pe=new yt;pe.position.set(j,0,ne);let Ge=new Fe(new vn(.06,.1,7.2,10),z);Ge.position.y=3.6,Ge.castShadow=!0,pe.add(Ge);let E=new Fe(J,z);E.castShadow=!0,pe.add(E);let O=new Fe(me,q);O.position.set(0,7.5,1.78),O.rotation.x=.04,O.castShadow=!0,pe.add(O);let K=new Fe(new an(.8,.24),Z);K.rotation.x=Math.PI/2,K.position.set(0,7.445,1.78),K.userData.noAO=!0,pe.add(K);let X=new Ji(new Bi({map:t,transparent:!0,depthWrite:!1,blending:Xn,opacity:0}));X.position.set(0,7.3,1.78),X.scale.set(5,5,1),X.userData.noAO=!0,pe.add(X);let de=new Fe(new an(1,1),new Wn({map:h,transparent:!0,depthWrite:!1,blending:Xn,opacity:0}));de.rotation.x=-Math.PI/2,de.position.set(0,.04,2),de.scale.set(15,10,1),de.userData.noAO=!0,pe.add(de),a.add(pe),$.push({halo:X,pool:de,lens:K})});let Ie=new ps(16761466,0,32,2);Ie.position.set(11,7,18.2),a.add(Ie);let qe=new ps(16761466,0,32,2);qe.position.set(-13,7,18.2),a.add(qe);let $e=[];[[-2.5,7.4,5.5,4.2],[.8,8.4,5.5,4.6],[3.15,7.4,5.5,4.2]].forEach(([j,ne,pe,Ge])=>{let E=new Fe(new an(1,1),new Wn({map:h,transparent:!0,depthWrite:!1,blending:Xn,opacity:0}));E.rotation.x=-Math.PI/2,E.position.set(j,.05,ne),E.scale.set(pe,Ge,1),E.userData.noAO=!0,a.add(E),$e.push(E)});let xt=xc(Hf(i.spruce.clone(),d.uSnow),5,12,!0);function re(j){let ne=Hn(j),pe=[],Ge=11;for(let Y=0;Y<Ge;Y++){let Xe=Y/(Ge-1),Ke=ht(1.7,.18,Math.pow(Xe,.85))*(.94+ne()*.12),dt=ht(1.7,.9,Xe),pt=1+Y*.62,gt=new Kr(Ke,dt,20,4,!0);gt.translate(0,pt+dt/2,0);let Pt=gt.attributes.position;for(let St=0;St<Pt.count;St++){let rt=Pt.getX(St),wt=Pt.getY(St),Ht=Pt.getZ(St),Dn=Math.atan2(Ht,rt),kn=Math.hypot(rt,Ht),qn=1+Math.sin(Dn*7+Y*2.3)*.09+Math.sin(Dn*13+Y)*.04+(ne()-.5)*.05,Ln=kn/Ke*(kn/Ke)*.34*(1+.35*Math.sin(Dn*5+Y*1.3));Pt.setXYZ(St,rt*qn,wt-Ln,Ht*qn)}gt.computeVertexNormals(),pe.push(gt)}let E=new vn(.1,.2,1.6,8);E.translate(0,.8,0),pe.push(E);let O=Ss(pe);O.computeVertexNormals();let K=O.attributes.position,X=O.attributes.normal,de=new Float32Array(K.count*3),Re=new Float32Array(K.count),_e=new Et;for(let Y=0;Y<K.count;Y++){let Xe=X.getY(Y),Ke=ei(K.getX(Y)*2.1,K.getZ(Y)*2.1+K.getY(Y)*1.1,3,64,64,2);_e.setRGB(.05+Ke*.05,.12+Ke*.08,.09+Ke*.05),K.getY(Y)<1.15&&_e.setRGB(.1,.07,.05),de[Y*3]=_e.r,de[Y*3+1]=_e.g,de[Y*3+2]=_e.b,Re[Y]=K.getY(Y)<1.15?0:qt(Rt(.05,.6,Xe+(Ke-.5)*.7),0,1)*.78}return O.setAttribute("color",new Jt(de,3)),O.setAttribute("aSnow",new Jt(Re,1)),O}let fe=[[-9.5,3,1.1],[-11.8,-3.5,1.4],[9.8,-5.5,1.25],[-8.2,-8.5,1.05],[15,-9,1.35],[-14,9.5,1.2],[18,9,1.1],[-21,-6,1.5],[24,-3,1.25],[-27,8,1.2],[30,-12,1.4],[-11.5,-13.5,1.3],[6,-26,1.1],[-18,-27,1.45],[22,-27,1.3],[-36,3,1.3],[40,2,1.2]],Ue=[re(1),re(2)],we=Ue[0];Ue.forEach((j,ne)=>{let pe=fe.filter((de,Re)=>Re%2===ne),Ge=new Mi(j,xt,pe.length),E=new kt,O=new Vn,K=new F,X=new F;pe.forEach(([de,Re,_e],Y)=>{O.setFromAxisAngle(new F(0,1,0),o()*6.28),K.set(de,0,Re),X.set(_e,_e*(.9+o()*.25),_e),E.compose(K,O,X),Ge.setMatrixAt(Y,E)}),Ge.castShadow=!0,Ge.receiveShadow=!0,a.add(Ge)});let Ve=[];{let j=Hf(i.shrub.clone(),d.uSnow),ne=new Nr(.7,3),pe=ne.attributes.position,Ge=new Float32Array(pe.count*3),E=new Float32Array(pe.count);for(let O=0;O<pe.count;O++){let K=pe.getX(O),X=pe.getY(O),de=pe.getZ(O),Re=ei(K*2+5,de*2+X*2,3,64,64,4),_e=1+(Re-.5)*.35;pe.setXYZ(O,K*_e,X*_e*.72,de*_e),Ge[O*3]=.06,Ge[O*3+1]=.15+Re*.05,Ge[O*3+2]=.1,E[O]=Rt(.05,.7,X/.7+(Re-.5))*.8}ne.setAttribute("color",new Jt(Ge,3)),ne.setAttribute("aSnow",new Jt(E,1)),ne.computeVertexNormals(),[[-1.7,4.9,1.2],[-2.5,4.7,.9],[2.9,4.9,1],[3.7,4.6,.8],[-5.2,4.6,.8]].forEach(([O,K,X])=>{let de=new Fe(ne,j);de.position.set(O,.35*X,K),de.scale.setScalar(X),de.castShadow=!0,de.receiveShadow=!0,de.userData.keep=!0,a.add(de),Ve.push(de)})}let ie=xc(Hf(new cn({vertexColors:!0,roughness:1}),d.uSnow),5,12,!0),Qe=(()=>{let j=document.createElement("canvas");j.width=j.height=128;let ne=j.getContext("2d"),pe=Hn(77);for(let E=0;E<30;E++){ne.save(),ne.translate(12+pe()*104,12+pe()*104),ne.rotate(pe()*Math.PI);let O=150+Math.floor(pe()*105),K=6+pe()*6,X=13+pe()*9;ne.fillStyle=`rgb(${O},${O},${O})`,ne.beginPath(),ne.ellipse(0,0,K,X,0,0,Math.PI*2),ne.fill(),ne.strokeStyle="rgba(70,70,70,0.65)",ne.lineWidth=1,ne.beginPath(),ne.moveTo(0,-X),ne.lineTo(0,X),ne.stroke(),ne.restore()}let Ge=new $n(j);return Ge.colorSpace=bn,Ge.anisotropy=4,Ge})(),le=xc((()=>{let j=new cn({map:Qe,alphaTest:.5,alphaToCoverage:s>=1,vertexColors:!0,roughness:.8,side:li}),ne=++zf;return j.onBeforeCompile=pe=>{pe.uniforms.uGrow=d.uGrow,pe.uniforms.uLeafTint=d.uLeafTint,pe.vertexShader=pe.vertexShader.replace("#include <common>",`#include <common>
attribute vec3 aCenter;
uniform float uGrow;
uniform vec3 uLeafTint;`).replace("#include <begin_vertex>",`#include <begin_vertex>
transformed = aCenter + (position - aCenter) * uGrow;`).replace("#include <color_vertex>",`#include <color_vertex>
vColor.rgb *= uLeafTint;`),pe.fragmentShader=pe.fragmentShader.replace("#include <normal_fragment_begin>",_n.normal_fragment_begin.replace("normal *= faceDirection;",""))},j.customProgramCacheKey=()=>"leaf"+ne,j})(),5,12,!0);function ye(j){let ne=Hn(j),pe=[],Ge=[],E=new F(0,1,0);function O(dt,pt,gt,Pt){let St=new vn(Pt*.68,Pt,gt,6,1);return St.applyMatrix4(new kt().compose(dt.clone().addScaledVector(pt,gt/2),new Vn().setFromUnitVectors(E,pt),new F(1,1,1))),pe.push(St),dt.clone().addScaledVector(pt,gt)}let K=new F(0,0,1);function X(dt,pt){let gt=[],Pt=[],St=[],rt=[],wt=[],Ht=[],Dn=.72+ne()*.5,kn=(ne()-.5)*.25;for(let Ln=0;Ln<18;Ln++){let ls=ne()*2-1,Ts=ne()*Math.PI*2,pn=Math.sqrt(1-ls*ls),Gr=new F(pn*Math.cos(Ts),ls*.85,pn*Math.sin(Ts)).normalize(),qi=dt.clone().addScaledVector(Gr,pt*(.3+.7*Math.cbrt(ne()))),kr=.8+ne()*.55,Vr=Gr.clone().add(new F(ne()-.5,ne()-.3,ne()-.5).multiplyScalar(.9)).normalize(),aa=new Vn().setFromUnitVectors(K,Vr).premultiply(new Vn().setFromAxisAngle(Vr,ne()*6.28)),ys=Gr.clone().add(new F(0,.3,0)).normalize(),V=gt.length/3;[[-.5,-.5],[.5,-.5],[.5,.5],[-.5,.5]].forEach(([et,Mt])=>{let bt=new F(et*kr,Mt*kr,0).applyQuaternion(aa).add(qi);gt.push(bt.x,bt.y,bt.z),Pt.push(ys.x,ys.y,ys.z),St.push(et+.5,Mt+.5),rt.push(qi.x,qi.y,qi.z);let Nt=Dn*(.85+.3*ne());wt.push(Nt*(1+kn),Nt,Nt*(1-kn*.6))}),Ht.push(V,V+1,V+2,V,V+2,V+3)}let qn=new tn;qn.setAttribute("position",new Zt(gt,3)),qn.setAttribute("normal",new Zt(Pt,3)),qn.setAttribute("uv",new Zt(St,2)),qn.setAttribute("aCenter",new Zt(rt,3)),qn.setAttribute("color",new Zt(wt,3)),qn.setIndex(Ht),Ge.push(qn)}function de(dt,pt,gt,Pt,St){let rt=O(dt,pt,gt,Pt);if(St===0){X(rt,.9+ne()*.7),ne()<.7&&X(rt.clone().add(new F((ne()-.5)*1.2,ne()*.6,(ne()-.5)*1.2)),.7+ne()*.5);return}let wt=St>=3?3:2+(ne()<.4?1:0);for(let Ht=0;Ht<wt;Ht++){let Dn=new F().crossVectors(pt,new F(ne()-.5,.25,ne()-.5)).normalize(),kn=pt.clone().applyAxisAngle(Dn,.45+ne()*.7).add(new F(0,.18,0)).normalize();de(rt,kn,gt*(.68+ne()*.14),Pt*.62,St-1)}St<=2&&X(rt.clone().add(new F((ne()-.5)*.8,.3,(ne()-.5)*.8)),.8+ne()*.5)}de(new F(0,0,0),E,2.6,.24,4);let Re=Ss(pe),_e=Re.attributes.position,Y=Re.attributes.normal,Xe=new Float32Array(_e.count*3),Ke=new Float32Array(_e.count);for(let dt=0;dt<_e.count;dt++){let pt=ei(_e.getX(dt)*3,_e.getY(dt)*3+_e.getZ(dt),2,64,64,6);Xe[dt*3]=.16+pt*.08,Xe[dt*3+1]=.12+pt*.06,Xe[dt*3+2]=.09+pt*.05,Ke[dt]=qt(Y.getY(dt)*1.5,0,1)*.85}return Re.setAttribute("color",new Jt(Xe,3)),Re.setAttribute("aSnow",new Jt(Ke,1)),{wood:Re,leaf:Ss(Ge)}}let ee=[],ge=[[-11.5,-1,.95],[12.2,-3.6,1],[-9.5,-9.5,1.1],[8.5,-9.8,1.15],[-33,-9,1.15],[35,-8,1.05],[-26,11,1],[27,9,1],[-30,18.8,.75],[44,18.8,.75],[-9,-22,1.2],[14,-23,1.1]];[ye(31),ye(47)].forEach((j,ne)=>{let pe=ge.filter((E,O)=>O%2===ne),Ge=(E,O,K)=>{let X=new Mi(E,O,pe.length),de=new kt,Re=new Vn,_e=new F,Y=new F;return pe.forEach(([Xe,Ke,dt],pt)=>{Re.setFromAxisAngle(new F(0,1,0),(Xe*7+Ke*3)%6.28),_e.set(Xe,0,Ke),Y.setScalar(dt*.95),de.compose(_e,Re,Y),X.setMatrixAt(pt,de)}),X.castShadow=K,X.receiveShadow=!0,a.add(X),X};Ge(j.wood,ie,!0),ee.push(Ge(j.leaf,le,!0))});let Te=i.neighborRoof.clone();Te.onBeforeCompile=j=>{j.uniforms.uRoofSnow=d.uRoofSnow,j.fragmentShader=j.fragmentShader.replace("#include <common>",`#include <common>
uniform float uRoofSnow;`).replace("#include <map_fragment>",`#include <map_fragment>
diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.9, 0.93, 0.97), uRoofSnow * 0.92);`)},Te.customProgramCacheKey=()=>"nroof";let Ze=new Wn({color:new Et(1.5,.92,.42),transparent:!0,opacity:0}),Ye=new cn({color:659222,roughness:.08,metalness:.4,envMapIntensity:1.6}),ut=[],ft=[],Q=[];function It(j){let{x:ne,z:pe,w:Ge,d:E,h:O,rh:K,tone:X,rot:de=0,garage:Re,chimney:_e}=j,Y=new yt,Xe=i.neighbor.clone();Xe.color.setHex(X).multiplyScalar(1.9);let Ke=new Rn(Ge,O,E);Ya(Ke,{oy:O/2});let dt=new Fe(Ke,Xe);dt.position.y=O/2,dt.castShadow=!0,dt.receiveShadow=!0,Y.add(dt);let pt=new Ei;pt.moveTo(-Ge/2-.5,0),pt.lineTo(Ge/2+.5,0),pt.lineTo(0,K),pt.lineTo(-Ge/2-.5,0);let gt=new Fe(new Rs(pt,{depth:E+1,bevelEnabled:!1}),Te);if(gt.position.set(0,O,-E/2-.5),gt.castShadow=!0,gt.receiveShadow=!0,Y.add(gt),_e){let wt=new Fe(new Rn(.7,2.4,.7),i.stone);wt.position.set(Ge*.22,O+K*.55,-E*.1),wt.castShadow=!0,Y.add(wt)}let Pt=(wt,Ht,Dn,kn,qn)=>{let Ln=new kt().compose(new F(wt,Ht,Dn),new Vn().setFromAxisAngle(new F(0,1,0),kn),new F(1,1,1)),ls=new kt().compose(new F(wt,Ht,Dn).add(new F(Math.sin(kn),0,Math.cos(kn)).multiplyScalar(-.012)),new Vn().setFromAxisAngle(new F(0,1,0),kn),new F(1,1,1));(qn?ut:ft).push({g:Y,m:Ln}),Q.push({g:Y,m:ls})},St=Math.max(2,Math.round(Ge/2.4));for(let wt=0;wt<2;wt++)for(let Ht=0;Ht<St;Ht++)Re&&wt===0&&Ht===0||Pt(-Ge/2+(Ht+.5)*(Ge/St),1.5+wt*2.6,E/2+.02,0,o()>.32);for(let wt=0;wt<2;wt++)Pt(Ge/2+.02,1.5+wt*2.6,0,Math.PI/2,o()>.5),Pt(-Ge/2-.02,1.5+wt*2.6,0,-Math.PI/2,o()>.5);let rt=new Fe(new Rn(2.2,2.1,.12),i.walnut);if(rt.position.set(Ge/2-1.5,1.05,E/2+.05),Y.add(rt),Re){let wt=new Fe(new Rn(2.8,2.3,.14),i.cedar);wt.position.set(-Ge/2+1.7,1.15,E/2+.06),Y.add(wt);for(let Ht=1;Ht<4;Ht++){let Dn=new Fe(new Rn(2.8,.04,.16),i.trim);Dn.position.set(-Ge/2+1.7,Ht*.575,E/2+.07),Y.add(Dn)}}return Y.position.set(ne,0,pe),Y.rotation.y=de,a.add(Y),At.push([ne,O+K,pe]),Y}let At=[];[{x:-17,z:-1,w:7.4,d:7,h:5.4,rh:2.6,tone:7304314,garage:!0,chimney:!0},{x:17.5,z:.5,w:6.8,d:6.6,h:4.8,rh:2.4,tone:8023912},{x:-33,z:-2,w:7.2,d:7.5,h:5.2,rh:2.5,tone:6251884,chimney:!0},{x:34,z:0,w:7.6,d:7,h:5.6,rh:2.8,tone:6975608,garage:!0},{x:-49,z:0,w:7,d:7,h:5,rh:2.4,tone:7565679},{x:50,z:-1,w:7,d:7,h:5.2,rh:2.4,tone:6712178,chimney:!0},{x:-66,z:1,w:7,d:7,h:5,rh:2.4,tone:7171954,garage:!0},{x:67,z:0,w:7,d:7,h:5,rh:2.4,tone:7369592},{x:-24,z:40,w:7,d:7,h:5.2,rh:2.5,tone:6975092,rot:Math.PI,garage:!0},{x:-8,z:41,w:7.4,d:7,h:5.4,rh:2.6,tone:7828073,rot:Math.PI,chimney:!0},{x:10,z:40,w:7,d:6.8,h:5,rh:2.4,tone:6843764,rot:Math.PI},{x:28,z:41,w:7.2,d:7,h:5.4,rh:2.6,tone:7500921,rot:Math.PI,garage:!0},{x:46,z:40,w:7,d:7,h:5.2,rh:2.4,tone:7106678,rot:Math.PI}].forEach(It),a.updateMatrixWorld(!0);let B=(j,ne,pe)=>{let Ge=new Mi(ne,pe,j.length),E=new kt;return j.forEach(({g:O,m:K},X)=>{E.multiplyMatrices(O.matrixWorld,K),Ge.setMatrixAt(X,E)}),Ge.userData.noAO=!1,a.add(Ge),Ge},S=new an(1,1.15),ue=new an(1.16,1.31),ce=[];B(ut,S,Ze),B(ft,S,Ye),B(Q,ue,i.trim);let Me=new yt;Me.visible=!1,a.add(Me);let st=new vn(.05,.05,1,8,1,!0),nt=[],Oe=new F(0,12.6,0);At.forEach(([j,ne,pe],Ge)=>{let E=new F(j,ne+3.4,pe),O=new Ji(new Bi({map:n,transparent:!0,depthWrite:!1,depthTest:!1,opacity:0}));O.position.copy(E),O.renderOrder=12,O.userData.noAO=!0,Me.add(O);let K=new Fe(st,new Wn({color:new Et(2.2,1.3,.55),transparent:!0,opacity:0,blending:Xn,depthWrite:!1,toneMapped:!1}));K.scale.set(1,3.2,1),K.position.set(j,ne+1.6,pe),K.userData.noAO=!0,K.raycast=()=>{},Me.add(K);let X=E.clone().lerp(Oe,.5);X.y+=5+E.distanceTo(Oe)*.18;let de=new fs([E,E.clone().lerp(X,.5).setY(X.y*.9),X,X.clone().lerp(Oe,.5).setY(X.y*.9),Oe]),Re=40,_e=new Fe(new ds(de,Re,.07,5,!1),new Wn({color:new Et(2.4,1.4,.6),transparent:!0,opacity:0,blending:Xn,depthWrite:!1,toneMapped:!1}));_e.userData.noAO=!0,_e.raycast=()=>{},Me.add(_e);let Y=9,Xe=new tn;Xe.setAttribute("position",new Jt(new Float32Array(Y*3),3));let Ke=new Ki(Xe,new Hi({size:.9,map:c,color:new Et(2.4,1.5,.7),transparent:!0,depthWrite:!1,blending:Xn,toneMapped:!1}));Ke.frustumCulled=!1,Ke.userData.noAO=!0,Ke.raycast=()=>{},Me.add(Ke),nt.push({spr:O,bm:K,tube:_e,segs:Re,curve:de,pts:Ke,n:Y,d:E.distanceTo(Oe),delay:0})}),nt.sort((j,ne)=>j.d-ne.d),nt.forEach((j,ne)=>{j.delay=ne/nt.length});let ze=new Ji(new Bi({map:n,transparent:!0,depthWrite:!1,depthTest:!1,opacity:0}));ze.position.copy(Oe).add(new F(0,1.2,0)),ze.scale.set(4.2,4.2,1),ze.renderOrder=13,ze.userData.noAO=!0,Me.add(ze);let je=new F;function vt(j,ne){Me.visible=j>.003,Me.visible&&(ze.material.opacity=Rt(0,.15,j),ze.scale.setScalar(4.2+Math.sin(ne*3)*.3),nt.forEach(pe=>{let Ge=Rt(pe.delay*.7,pe.delay*.7+.3,j);pe.spr.material.opacity=Ge,pe.spr.scale.setScalar(2.4*(.6+.4*Ge)),pe.bm.material.opacity=.5*Ge,pe.bm.scale.y=3.2+6*Ge,pe.bm.position.y=pe.spr.position.y-pe.bm.scale.y/2-1.6;let E=Math.floor(Rt(.1+pe.delay*.6,.45+pe.delay*.6,j)*pe.segs)*5*6;pe.tube.geometry.setDrawRange(0,E),pe.tube.material.opacity=.34*Ge*(.8+.2*Math.sin(ne*3+pe.delay*9));let O=pe.pts.geometry.attributes.position.array,K=Rt(.1+pe.delay*.6,.45+pe.delay*.6,j);for(let X=0;X<pe.n;X++){let de=(X/pe.n+ne*.16+pe.delay)%1;if(de>K){O[X*3+1]=-999;continue}pe.curve.getPointAt(de,je),O[X*3]=je.x,O[X*3+1]=je.y,O[X*3+2]=je.z}pe.pts.geometry.attributes.position.needsUpdate=!0,pe.pts.material.opacity=Ge}))}let L=new cn({color:4864555,roughness:.95}),ae=new Wn({color:723724}),he=[];(()=>{let j=new yt;j.position.set(-3.4,0,-11.4),a.add(j);let ne=7.4,pe=6.4,Ge=3.1,E=new Rn(ne,Ge,pe);Ya(E,{oy:Ge/2});let O=new Fe(E,i.bb.clone());O.material.color.setScalar(1),O.position.y=Ge/2,O.castShadow=!0,O.receiveShadow=!0,j.add(O);let K=new Ei;K.moveTo(-ne/2-.45,0),K.lineTo(ne/2+.45,0),K.lineTo(0,1.9),K.lineTo(-ne/2-.45,0);let X=new Fe(new Rs(K,{depth:pe+.9,bevelEnabled:!1}),Te);X.position.set(0,Ge,-pe/2-.45),X.castShadow=!0,X.receiveShadow=!0,j.add(X);for(let Re=0;Re<2;Re++){let _e=-1.8+Re*3.6,Y=new Fe(new Rn(3.1,2.4,.12),i.walnut);Y.position.set(_e,1.2,-pe/2-.05),Y.castShadow=!0,j.add(Y);for(let dt=1;dt<4;dt++){let pt=new Fe(new Rn(3.1,.04,.14),i.trim);pt.position.set(_e,dt*.6,-pe/2-.08),j.add(pt)}let Xe=new Fe(new Rn(2.7,.3,.14),i.mirror);Xe.position.set(_e,2.05,-pe/2-.09),j.add(Xe);let Ke=new Fe(new Rn(3.3,2.55,.1),i.trim);Ke.position.set(_e,1.27,-pe/2-0),j.add(Ke)}[-3.3,3.3].forEach(Re=>{let _e=new Fe(new vn(.07,.08,.26,12),i.sconce);_e.position.set(Re,2.55,-pe/2-.2),_e.userData.noAO=!0,j.add(_e);let Y=new Ji(new Bi({map:t,transparent:!0,depthWrite:!1,blending:Xn,opacity:0}));Y.position.set(Re,2.55,-pe/2-.5),Y.scale.set(2.2,2.2,1),Y.userData.noAO=!0,j.add(Y),he.push(Y)});let de=new Fe(new an(1,1),new Wn({map:h,transparent:!0,depthWrite:!1,blending:Xn,opacity:0}));de.rotation.x=-Math.PI/2,de.position.set(0,.05,-pe/2-2.2),de.scale.set(10,5,1),de.userData.noAO=!0,j.add(de),he.pool=de})();let Se=[-75.2,-49.2,-23.2,2.8,28.8,54.8,80.8];Se.forEach(j=>{let ne=new yt;ne.position.set(j,0,-15.5),a.add(ne);let pe=new Fe(new vn(.13,.19,9.8,10),L);pe.position.y=4.9,pe.castShadow=!0,ne.add(pe);let Ge=new Fe(new Rn(.12,.12,2.2),L);if(Ge.position.y=9.2,ne.add(Ge),[-.85,0,.85].forEach(E=>{let O=new Fe(new vn(.04,.05,.2,8),i.ceramic);O.position.set(0,9.36,E),ne.add(O)}),Math.abs(j-2.8)<1){let E=new Fe(new vn(.3,.3,.95,14),i.steel);E.position.set(.5,8.35,.2),E.castShadow=!0,ne.add(E);let O=new Fe(new vn(.2,.3,.12,14),i.steel);O.position.set(.5,8.9,.2),ne.add(O)}});let Ae=[];for(let j=0;j<Se.length-1;j++)[-.85,0,.85].forEach(ne=>{let pe=new F(Se[j],9.4,-15.5+ne),Ge=new F(Se[j+1],9.4,-15.5+ne),E=pe.clone().lerp(Ge,.5);E.y-=.9,Ae.push(new ds(new fs([pe,pe.clone().lerp(E,.5).setY(9.4-.45),E,E.clone().lerp(Ge,.5).setY(9.4-.45),Ge]),24,.022,4))});{let j=new F(2.8,9.4,-15.5),ne=new F(2.8,5.4,-4.3),pe=j.clone().lerp(ne,.5);pe.y-=.7,Ae.push(new ds(new fs([j,pe,ne]),20,.026,4))}let k=new Fe(Ss(Ae),ae);k.castShadow=!1,k.raycast=()=>{},a.add(k);let De=new yt,xe=[],Be={front:null,rear:null},Ne=new yt;(()=>{let j=new ji({color:1784408,metalness:.65,roughness:.3,clearcoat:1,clearcoatRoughness:.08,envMapIntensity:1.5}),ne=new ji({color:395533,metalness:.2,roughness:.04,clearcoat:1,envMapIntensity:1.8}),pe=new cn({color:1052946,roughness:.85}),Ge=new cn({color:12107462,metalness:.9,roughness:.25}),E=new Ei;E.moveTo(-2.3,.28),E.lineTo(-2.38,.6),E.quadraticCurveTo(-2.36,.92,-2.05,.98),E.lineTo(1.35,.98),E.quadraticCurveTo(2.05,.9,2.3,.7),E.lineTo(2.34,.44),E.quadraticCurveTo(2.3,.28,2.1,.28),E.lineTo(-2.3,.28);let O=new Fe(new Rs(E,{depth:1.7,bevelEnabled:!0,bevelThickness:.09,bevelSize:.09,bevelSegments:4,curveSegments:14}),j);O.geometry.translate(0,0,-.85),O.castShadow=!0,De.add(O);let K=new Ei;K.moveTo(-1.95,.96),K.quadraticCurveTo(-1.55,1.42,-.95,1.46),K.lineTo(.5,1.44),K.quadraticCurveTo(.95,1.4,1.38,.96),K.lineTo(-1.95,.96);let X=new Fe(new Rs(K,{depth:1.62,bevelEnabled:!0,bevelThickness:.07,bevelSize:.05,bevelSegments:3,curveSegments:12}),ne);X.geometry.translate(0,0,-.81),X.castShadow=!0,De.add(X);let de=new Fe(new nr(1.9,.07,1.6,2,.03),j);de.position.set(-.2,1.47,0),De.add(de),[[-1.4,.8],[1.4,.8],[-1.4,-.8],[1.4,-.8]].forEach(([St,rt])=>{let wt=new Fe(new vn(.37,.37,.26,24),pe);wt.rotation.x=Math.PI/2,wt.position.set(St,.37,rt*1+Math.sign(rt)*.04),wt.castShadow=!0,De.add(wt);let Ht=new Fe(new vn(.23,.23,.27,20),Ge);Ht.rotation.x=Math.PI/2,Ht.position.copy(wt.position),De.add(Ht)});let Re=new cn({color:1118481,emissive:16777215,emissiveIntensity:.1}),_e=new cn({color:2228224,emissive:16722458,emissiveIntensity:.1}),Y=new Fe(new Rn(.06,.05,1.5),Re);Y.position.set(2.33,.72,0),Y.userData.noAO=!0,De.add(Y);let Xe=new Fe(new Rn(.06,.05,1.5),_e);Xe.position.set(-2.4,.78,0),Xe.userData.noAO=!0,De.add(Xe),Be.front=Re,Be.rear=_e;let Ke=new Fe(new nr(1.8,.07,1.5,2,.03),i.snowRoof);Ke.userData.keep=!0,Ke.position.set(-.2,1.54,0),De.add(Ke),xe.push(Ke);let dt=new Fe(new nr(1,.05,1.45,2,.02),i.snowRoof);dt.userData.keep=!0,dt.position.set(1.6,1,0),dt.rotation.z=-.1,De.add(dt),xe.push(dt),De.position.set(7.9,0,6.3),De.rotation.y=-Math.PI/2,a.add(De);let pt=[new F(5.2,1.2,2.5),new F(5.55,.5,2.85),new F(6.15,.12,3.3),new F(6.7,.4,3.75),new F(7,.82,3.95)],gt=new Fe(new ds(new fs(pt),24,.028,6),new cn({color:855310,roughness:.6}));gt.castShadow=!0,Ne.add(gt);let Pt=new Fe(new jn(.05,10,8),new Wn({color:new Et(.4,3,1.2)}));Pt.position.set(5.16,1.5,2.5),Pt.userData.noAO=!0,Ne.add(Pt),Ne.userData.led=Pt,a.add(Ne)})();let se=r?0:s>=1?2200:900,at=new tn,Je=new Float32Array(se*3),mt=new Float32Array(se*2),Ft=[90,40,90];for(let j=0;j<se;j++)Je[j*3]=(o()-.5)*Ft[0],Je[j*3+1]=o()*Ft[1],Je[j*3+2]=(o()-.5)*Ft[2],mt[j*2]=.7+o()*1.1,mt[j*2+1]=o()*6.28;at.setAttribute("position",new Jt(Je,3));let Yt=new Hi({color:16777215,size:.11,map:c,transparent:!0,opacity:.85,depthWrite:!1,blending:Xn}),hn=new Ki(at,Yt);hn.frustumCulled=!1,hn.userData.noAO=!0,a.add(hn);let Pn=s>=1&&!r?140:0,sn=new tn,In=new Float32Array(Pn*3);for(let j=0;j<Pn;j++)In[j*3]=(o()-.5)*50,In[j*3+1]=o()*22,In[j*3+2]=(o()-.5)*50;sn.setAttribute("position",new Jt(In,3));let yn=new Hi({color:14674175,size:.42,map:c,transparent:!0,opacity:.22,depthWrite:!1,blending:Xn}),C=new Ki(sn,yn);C.frustumCulled=!1,C.userData.noAO=!0,a.add(C);let be=r?0:s>=1?1600:700,Le=new tn,lt=new Float32Array(be*6),ct=new Float32Array(be),Gt=[70,30,70];for(let j=0;j<be;j++){let ne=(o()-.5)*Gt[0],pe=o()*Gt[1],Ge=(o()-.5)*Gt[2];lt.set([ne,pe,Ge,ne-.04,pe+.7,Ge],j*6),ct[j]=14+o()*6}Le.setAttribute("position",new Jt(lt,3));let Dt=new fa({color:11455464,transparent:!0,opacity:0,depthWrite:!1}),ve=new Lr(Le,Dt);ve.frustumCulled=!1,ve.userData.noAO=!0,ve.raycast=()=>{},a.add(ve);let We=r?0:s>=1?420:160,ot=new tn,Lt=new Float32Array(We*3),Ot=new Float32Array(We*2),xn=new Float32Array(We*3),on=[80,22,80],Kt=[[.95,.55,.1],[.85,.3,.08],[.9,.75,.15],[.6,.2,.05]];for(let j=0;j<We;j++){Lt[j*3]=(o()-.5)*on[0],Lt[j*3+1]=o()*on[1],Lt[j*3+2]=(o()-.5)*on[2],Ot[j*2]=.5+o()*.8,Ot[j*2+1]=o()*6.28;let ne=Kt[j%4];xn.set(ne,j*3)}ot.setAttribute("position",new Jt(Lt,3)),ot.setAttribute("color",new Jt(xn,3));let dn=new Ki(ot,new Hi({size:.2,vertexColors:!0,map:c,transparent:!0,opacity:.9,depthWrite:!1}));dn.frustumCulled=!1,dn.userData.noAO=!0,a.add(dn);let On=[];for(let j=0;j<22;j++){let ne=new Ji(new Bi({map:l,transparent:!0,depthWrite:!1,opacity:0,color:12568276}));ne.userData={age:j/22*6,noAO:!0},ne.renderOrder=5,a.add(ne),On.push(ne)}let P=new Fe(we,xt);P.position.set(.9,0,-12.4),P.scale.setScalar(.75),P.castShadow=!0,P.visible=!1,a.add(P);let te=new Set([T,v,I,G,w,N,H,A,P]),Ce=new yt;a.add(Ce),a.children.slice().forEach(j=>{j!==Ce&&!te.has(j)&&Ce.add(j)});let Ee=new F;function Pe(j){Yt.color.set(j?6963104:16777215)}function _t(j,ne,pe,Ge,E,O,K){f.opacity=j.ground,f.depthWrite=j.ground>.95,T.visible=j.ground>.01,M.forEach(_e=>{let Y=j.ground<.99;_e.transparent!==Y&&(_e.transparent=Y,_e.needsUpdate=!0),_e.opacity=j.ground,_e.depthWrite=!Y}),d.uSnow.value=j.snow,d.uRoofSnow.value=j.roofSnow,d.uGrow.value=j.grow,d.uLeafTint.value.copy(j.leafTint),vt(j.beacons||0,ne),P.visible=j.section>.3,H.visible=j.snow>.25,ee.forEach(_e=>{_e.visible=j.grow>.02,_e.castShadow=j.grow>.5}),xe.forEach(_e=>{_e.visible=j.snow>.5}),Ne.visible=j.explode<.05,De.visible=!0;let X=1-Ge;Be.front.emissiveIntensity=.1+2.2*X,Be.rear.emissiveIntensity=.1+3*X,Ne.userData.led.scale.setScalar(.8+.25*Math.sin(ne*3));let de=Rt(.35,.9,j.ground);Ve.forEach(_e=>{_e.visible=j.ground>.5||j.explode>.05}),$.forEach(_e=>{_e.halo.material.opacity=.75*X,_e.pool.material.opacity=.55*X*de}),Ie.intensity=55*X,qe.intensity=40*X,Z.color.setRGB(3.2,2.2,1.1).multiplyScalar(.06+.94*X),he.forEach(_e=>{_e.material.opacity=.5*X}),he.pool.material.opacity=.4*X*de,$e.forEach((_e,Y)=>{_e.material.opacity=.5*X*qt(Ct(K,Y),0,1)*(1-j.ghost)*de}),Ze.opacity=X*.9,hn.position.set(E.x,0,E.z),C.position.set(E.x,0,E.z),ve.position.set(E.x,0,E.z),dn.position.set(E.x,0,E.z);let Re=j.snowfall;if(hn.visible=C.visible=Re>.02&&se>0,hn.visible){let _e=at.attributes.position.array;for(let Xe=0;Xe<se;Xe++)_e[Xe*3+1]-=mt[Xe*2]*pe*1.5,_e[Xe*3]+=Math.sin(ne*.7+mt[Xe*2+1])*pe*.3,_e[Xe*3+2]+=Math.cos(ne*.5+mt[Xe*2+1])*pe*.2,_e[Xe*3+1]<0&&(_e[Xe*3+1]=Ft[1]);at.attributes.position.needsUpdate=!0;let Y=sn.attributes.position.array;for(let Xe=0;Xe<Pn;Xe++)Y[Xe*3+1]-=.8*pe,Y[Xe*3+1]<0&&(Y[Xe*3+1]=22);sn.attributes.position.needsUpdate=!0,Yt.opacity=.8*Re*(1-Ge*.45),yn.opacity=.2*Re*(1-Ge*.5)}if(ve.visible=j.rain>.02&&be>0,ve.visible){let _e=Le.attributes.position.array;for(let Y=0;Y<be;Y++){let Xe=ct[Y]*pe;_e[Y*6+1]-=Xe,_e[Y*6+4]-=Xe,_e[Y*6+4]<0&&(_e[Y*6+1]+=Gt[1],_e[Y*6+4]+=Gt[1])}Le.attributes.position.needsUpdate=!0,Dt.opacity=.32*j.rain}if(dn.visible=j.leaves>.02&&We>0,dn.visible){let _e=ot.attributes.position.array;for(let Y=0;Y<We;Y++)_e[Y*3+1]-=Ot[Y*2]*pe*.9,_e[Y*3]+=(Math.sin(ne*.9+Ot[Y*2+1])*.7+.35)*pe,_e[Y*3+2]+=Math.cos(ne*.6+Ot[Y*2+1])*.4*pe,_e[Y*3+1]<0&&(_e[Y*3+1]=on[1]);ot.attributes.position.needsUpdate=!0,dn.material.opacity=.9*j.leaves}On.forEach(_e=>{_e.userData.age+=pe*.55,_e.userData.age>6&&(_e.userData.age-=6);let Y=_e.userData.age/6;Ee.copy(O),Ee.y+=Y*5.2,Ee.x+=Y*2.2+Math.sin(Y*5+_e.id)*.18,Ee.z+=Math.cos(Y*3+_e.id)*.15,_e.position.copy(Ee),_e.scale.setScalar(.5+Y*2.6),_e.material.opacity=Math.sin(Math.PI*Math.min(1,Y*1.3))*.34*j.smoke*(.5+.5*X)})}let Ct=(j,ne)=>j-ne*.3;return{world:a,ground:T,groundMat:f,U:d,update:_t,lamps:$,setThermal:Pe,evGroup:De,props:Ce,sight:wm}}var fi={wire:16761963,cold:5220095,hot:16739151,drain:10135476,supply:9433288,ret:9083903,radon:14257407},Gf=2.4;function Am({house:i,reduce:e}){let t=(w,U,N)=>new F(w,U,N),n=jr("rgba(255,255,255,0.6)"),s={netE:[],netW:[],netA:[],netR:[]},r={netE:[],netW:[],netA:[],netR:[]},a={};Object.keys(s).forEach(w=>{a[w]=new yt,a[w].visible=!1,a[w].userData.noAO=!0,i.add(a[w])});let o=w=>{let U=new Co;for(let N=1;N<w.length;N++)U.add(new da(w[N-1],w[N]));return U};function c(w,U,N,H,$){let z=o(U.map($e=>t($e[0],$e[1],$e[2]))),q=z.getLength(),Z=Math.max(6,Math.round(q*7)),W=6,J=new Wn({color:N,toneMapped:!1,fog:!1,transparent:!0});J.color.multiplyScalar(1.5);let me=new Fe(new ds(z,Z,H,W,!1),J),Ie=new Wn({color:N,transparent:!0,opacity:.2,blending:Xn,depthWrite:!1,toneMapped:!1,fog:!1});Ie.color.multiplyScalar(Gf);let qe=new Fe(new ds(z,Z,H*3.4,W,!1),Ie);me.renderOrder=7,qe.renderOrder=8,me.userData.noAO=qe.userData.noAO=!0,me.raycast=qe.raycast=()=>{},a[w].add(me,qe),s[w].push({tube:me,glow:qe,segs:Z,radial:W,gmat:Ie}),$&&r[w].push({curve:z,len:q,n:Math.max(3,Math.round(q*$.density)),speed:$.speed,color:$.color||N})}let l=[];for(let w=0;w<=10;w++){let U=w/10;l.push([2.8,ht(9.1,7.7,U)-1*Math.sin(Math.PI*U),ht(-15.5,-4.45,U)])}c("netE",[...l,[2.8,1.45,-4.3],[2.8,-.35,-4.3],[2.8,-.35,-3.86],[2.8,-.72,-3.86]],fi.wire,.045,{density:2.2,speed:6});let h=[2.8,-.72,-3.78],d=[2.8,-.2,-3.78];c("netE",[h,d,[2.2,-.2,-3.78],[2.2,1.35,-3.9],[4.6,1.35,-3.9]],fi.wire,.032,{density:2.5,speed:5}),c("netE",[h,d,[4.94,-.2,-3.78],[4.94,-.2,3.7],[4.94,.6,3.92],[1.45,.6,3.92],[1.45,2.45,3.92],[.05,2.45,3.92],[.05,.6,3.92],[-4.94,.6,3.92],[-4.94,.6,-3.2]],fi.wire,.032,{density:2.5,speed:5}),c("netE",[h,d,[4.94,-.2,-3.78],[4.94,3.85,-3.78],[4.94,3.85,3.92],[-4.94,3.85,3.92],[-4.94,3.85,-2.4]],fi.wire,.032,{density:2.5,speed:5}),c("netE",[h,d,[1.28,-.2,-3.78],[1.28,-.2,-1],[1.28,3.05,-1],[-1.5,3.05,-1],[-1.5,3.05,.5]],fi.wire,.03,{density:2.5,speed:5}),c("netE",[[1.28,3.05,-1],[3,3.05,-1],[3,3.05,-1.6]],fi.wire,.03,{density:2.5,speed:5}),c("netE",[h,d,[4.94,-.2,-3.78],[4.94,-.2,2.5],[4.94,1.3,2.5],[5.1,1.3,2.5]],fi.wire,.034,{density:2.5,speed:5}),c("netW",[[-.5,-2.2,16],[-.5,-2.2,3.75],[-.5,-.32,3.75],[-.5,-.32,-3],[-1.95,-.32,-3],[-1.95,-1.35,-3]],fi.cold,.072,{density:2,speed:2.4}),c("netW",[[-.5,-.32,-3.2],[2.4,-.32,-3.2],[2.4,-.32,-3.7],[2.4,1.05,-3.7]],fi.cold,.051,{density:2,speed:2.4}),c("netW",[[-.5,-.32,-3.45],[-2.3,-.32,-3.45],[-2.3,3.95,-3.45],[-2.3,3.95,-3.62]],fi.cold,.051,{density:2,speed:2.4}),c("netW",[[-2.3,3.6,-3.45],[-3.4,3.6,-3.45]],fi.cold,.051,{density:2,speed:2.4}),c("netW",[[-2.2,-1.35,-3],[-2.2,-.46,-3],[-2.2,-.46,-3.32],[2.55,-.46,-3.32],[2.55,-.46,-3.72],[2.55,1.05,-3.72]],fi.hot,.051,{density:2,speed:2.4}),c("netW",[[-2.2,-.46,-3.32],[-2.47,-.46,-3.32],[-2.47,3.95,-3.32],[-2.47,3.95,-3.6]],fi.hot,.051,{density:2,speed:2.4}),c("netW",[[-2.47,3.6,-3.32],[-3.5,3.6,-3.32]],fi.hot,.051,{density:2,speed:2.4}),c("netW",[[-3.6,3.48,-3.62],[-2.6,3.48,-3.62],[-2.6,-2.95,-3.62],[.6,-2.95,-3.62],[.6,-3.2,-4.3],[.6,-3.45,-9.5]],fi.drain,.087,{density:1.6,speed:2.8}),c("netW",[[2.6,.95,-3.86],[2.6,-2.9,-3.86],[.75,-2.9,-3.86]],fi.drain,.072,{density:1.6,speed:2.8}),c("netW",[[-2.6,3.48,-3.62],[-2.6,10.2,-3.62]],fi.drain,.065,null);let p=[-3.3,-1.15,-2.6],u=[-3.3,-.12,-2.6];c("netA",[p,u,[2.6,-.12,-2.6],[4.4,-.12,-2.6],[4.4,-.12,-1.2],[4.4,.34,-1.2]],fi.supply,.091,{density:1.6,speed:3.2}),c("netA",[u,[-2,-.12,-2.6],[-2,-.12,3.4],[-2,.34,3.4]],fi.supply,.078,{density:1.6,speed:3.2}),c("netA",[[3.1,-.12,-2.6],[3.1,-.12,3.45],[3.1,.34,3.45]],fi.supply,.078,{density:1.6,speed:3.2}),c("netA",[[1.28,-.12,-2.6],[1.28,3.35,-2.6],[3.8,3.35,-2.6],[3.8,3.35,2.9],[3.8,3.52,2.9]],fi.supply,.078,{density:1.6,speed:3.2}),c("netA",[[1.28,3.35,-2.6],[-3.8,3.35,-2.6],[-3.8,3.35,2],[-3.8,3.52,2]],fi.supply,.078,{density:1.6,speed:3.2}),c("netA",[[-1.75,5.6,1],[-1.75,-.32,1],[-3.3,-.32,1],[-3.3,-.32,-2.15],[-3.3,-1.05,-2.15]],fi.ret,.091,{density:1.6,speed:2.4}),c("netR",[[-1.2,-2.92,-1.5],[-1.2,11.6,-1.5]],fi.radon,.075,{density:2.2,speed:2.6});let f={},x=new Et,g=new Et(16777215);Object.keys(r).forEach(w=>{let U=r[w];if(!U.length)return;let N=U.reduce((W,J)=>W+J.n,0),H=new tn;H.setAttribute("position",new Jt(new Float32Array(N*3),3));let $=new Float32Array(N*3),z=0;U.forEach(W=>{x.set(W.color).lerp(g,.45).multiplyScalar(Gf);for(let J=0;J<W.n;J++,z++)$[z*3]=x.r,$[z*3+1]=x.g,$[z*3+2]=x.b}),H.setAttribute("color",new Jt($,3));let q=new Hi({size:w==="netE"?.2:.26,map:n,vertexColors:!0,transparent:!0,depthWrite:!1,blending:Xn,toneMapped:!1,fog:!1}),Z=new Ki(H,q);Z.frustumCulled=!1,Z.renderOrder=9,Z.raycast=()=>{},a[w].add(Z),f[w]=Z});let m=e?0:260,_=new tn,b=new Float32Array(m*3),y=new Float32Array(m),M=t(-1.2,-2.95,-1.5),T=w=>{b[w*3]=(Math.random()-.5)*9.4,b[w*3+1]=-3.05-Math.random()*1.6,b[w*3+2]=(Math.random()-.5)*7.4,y[w]=.4+Math.random()*.8};for(let w=0;w<m;w++)T(w);_.setAttribute("position",new Jt(b,3));let R=new Hi({color:new Et(fi.radon).multiplyScalar(Gf),size:.2,map:jr("rgba(217,140,255,0.6)"),transparent:!0,opacity:0,depthWrite:!1,blending:Xn,toneMapped:!1,fog:!1}),v=new Ki(_,R);v.frustumCulled=!1,v.raycast=()=>{},a.netR.add(v);let A=new F,I={netE:1,netW:1,netA:1,netR:1};function G(w,U,N,H){let $=w.explode<.06;if(Object.keys(s).forEach(z=>{let q=w[z],Z=a[z];if(Z.visible=$&&q>.003,!Z.visible)return;let W=!U||U===z?1:.2,J=I[z]=ht(I[z],W,Math.min(1,H*4));s[z].forEach(Ie=>{let qe=Math.floor(qt(q,0,1)*Ie.segs)*Ie.radial*6;Ie.tube.geometry.setDrawRange(0,qe),Ie.glow.geometry.setDrawRange(0,qe),Ie.tube.material.opacity=J,Ie.gmat.opacity=(.22+.1*Math.sin(N*3+Ie.segs))*J});let me=f[z];if(me){let Ie=me.geometry.attributes.position.array,qe=0;r[z].forEach($e=>{for(let xt=0;xt<$e.n;xt++,qe++){let re=(xt/$e.n+N*$e.speed/$e.len)%1;if(re>q){Ie[qe*3+1]=-999;continue}$e.curve.getPointAt(re,A),Ie[qe*3]=A.x,Ie[qe*3+1]=A.y,Ie[qe*3+2]=A.z}}),me.geometry.attributes.position.needsUpdate=!0,me.material.opacity=qt(q*3,0,1)*J}}),m&&a.netR.visible){R.opacity=qt(w.netR*2,0,.9)*I.netR;for(let z=0;z<m;z++){A.set(M.x-b[z*3],M.y-b[z*3+1],M.z-b[z*3+2]);let q=A.length();if(q<.25){T(z);continue}A.multiplyScalar(H*y[z]*1.1/q),b[z*3]+=A.x+Math.sin(N+z)*H*.15,b[z*3+1]+=A.y,b[z*3+2]+=A.z}_.attributes.position.needsUpdate=!0}}return{groups:a,update:G}}var u_=`varying vec3 vW; varying vec3 vN;
void main(){ vec4 w = modelMatrix * vec4(position, 1.0);
#ifdef USE_INSTANCING
  w = modelMatrix * instanceMatrix * vec4(position, 1.0);
#endif
  vW = w.xyz; vN = normalize(mat3(modelMatrix) * normal); gl_Position = projectionMatrix * viewMatrix * w; }`,h_=`uniform float uBase, uGrad, uBand, uTime; varying vec3 vW; varying vec3 vN;
float hh(vec3 p){ return fract(sin(dot(p, vec3(12.9898, 78.233, 45.164))) * 43758.5453); }
float n3(vec3 p){ vec3 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(hh(i), hh(i + vec3(1,0,0)), f.x), mix(hh(i + vec3(0,1,0)), hh(i + vec3(1,1,0)), f.x), f.y),
             mix(mix(hh(i + vec3(0,0,1)), hh(i + vec3(1,0,1)), f.x), mix(hh(i + vec3(0,1,1)), hh(i + vec3(1,1,1)), f.x), f.y), f.z); }
vec3 iron(float t){ t = clamp(t, 0.0, 1.0);
  vec3 c0 = vec3(0.01, 0.0, 0.05), c1 = vec3(0.16, 0.02, 0.42), c2 = vec3(0.6, 0.04, 0.55), c3 = vec3(0.93, 0.3, 0.12), c4 = vec3(1.0, 0.76, 0.16), c5 = vec3(1.0, 0.98, 0.86);
  if (t < 0.2) return mix(c0, c1, t / 0.2); if (t < 0.42) return mix(c1, c2, (t - 0.2) / 0.22);
  if (t < 0.62) return mix(c2, c3, (t - 0.42) / 0.2); if (t < 0.85) return mix(c3, c4, (t - 0.62) / 0.23); return mix(c4, c5, (t - 0.85) / 0.15); }
vec3 toLinear(vec3 c){ return mix(c / 12.92, pow((c + 0.055) / 1.055, vec3(2.4)), step(0.04045, c)); }
void main(){
  float t = uBase + uGrad * clamp(vW.y / 10.0, 0.0, 1.0);
  t += uBand * (exp(-pow((vW.y - 0.3) * 3.2, 2.0)) + 0.85 * exp(-pow((vW.y - 3.38) * 3.2, 2.0)) + 0.7 * exp(-pow((vW.y - 6.35) * 3.0, 2.0)));
  t += (n3(vW * 1.6 + uTime * 0.05) - 0.5) * 0.08;
  float rim = pow(1.0 - abs(dot(normalize(vN), normalize(cameraPosition - vW))), 2.0) * 0.05;
  gl_FragColor = vec4(toLinear(iron(t + rim)), 1.0); }`;function Cm({scene:i,M:e,skipParents:t,onChange:n}){let s={value:0},r=new Map;function a(p,u=0,f=0){let x=p+"|"+u+"|"+f;return r.has(x)||r.set(x,new Nn({uniforms:{uBase:{value:p},uGrad:{value:u},uBand:{value:f},uTime:s},vertexShader:u_,fragmentShader:h_})),r.get(x)}let o={hvac:.93,"water-heaters":.88,electrical:.6,plumbing:.56,installation:.5,radon:.22,solar:.17,roofing:[.4,.12],foundation:.33,sewer:.3,asbestos:.5};function c(p,u){if(u&&o[u]!==void 0)return a(...[].concat(o[u]));let f=p.userData&&p.userData.th;return f?a(...f):a(.3)}let l=[],h=!1;function d(p){p!==h&&(h=p,i.traverse(u=>{if(u.isSprite&&u.userData.noAO){u.visible=!h&&(u.userData.wasVisible??!0);return}if(!(!(u.isMesh||u.isInstancedMesh)||!u.material)&&!u.userData.noThermal){for(let f=u.parent;f;f=f.parent)if(t.includes(f))return;h?(u.userData.mat0=u.material,u.material=Array.isArray(u.material)?u.material.map(f=>c(f,u.userData.sys)):c(u.material,u.userData.sys)):u.userData.mat0&&(u.material=u.userData.mat0,u.userData.mat0=null)}}),n&&n(h))}return{set:d,time:s,get on(){return h}}}function Pm({M:i,layers:e,glowTex:t}){let n=[],s=(u,f=.7,x=0,g=[.5],m={})=>{let _=new cn({color:u,roughness:f,metalness:x,...m});return _.userData.th=g,_},r=(u,f=[.95])=>{let x=new cn({color:2236440,emissive:u,emissiveIntensity:0,roughness:.5});return x.userData.th=f,n.push(x),x},a={rug:s(5787722,1),rug2:s(3884628,1),cushion:s(13215610,.95),cushion2:s(9413544,.95),tvBlack:s(789775,.25,.3,[.6]),book1:s(9190190,.8),book2:s(3100522,.8),book3:s(14208440,.8),plant:s(4156218,.9,0,[.3]),pot:s(14209734,.6),sheets:s(15328474,.95),duvet:s(7043718,.95),wood:s(10122320,.55),woodDark:s(4929062,.55),steel:s(11186358,.3,.9,[.55]),quartz:s(15328991,.25,0,[.5]),cabinet:s(3812386,.5,0,[.5]),tile:s(13620952,.4,0,[.4]),bin:s(3829659,.6),bin2:s(12936750,.6),cardboard:s(11570526,.9),tv:r(10274047,[.85]),lamp:r(16762746),pendant:r(16765594),screen:r(13625599,[.8]),led:r(6750105,[.7]),pot:s(14868180,.55)},o=(u,f,x,g,m,_,b,y,M,T=0)=>{let R=new Fe(new nr(u,f,x,2,Math.min(g,u/2-.001,f/2-.001,x/2-.001)),m);return R.position.set(_,b+f/2,y),R.rotation.y=T,R.castShadow=!0,R.receiveShadow=!0,R.userData.noPick=!0,M.add(R),R},c=(u,f,x,g,m,_,b,y=18)=>{let M=new Fe(new vn(u,u,f,y),x);return M.position.set(g,m+f/2,_),M.castShadow=!0,M.receiveShadow=!0,M.userData.noPick=!0,b.add(M),M},l=(u,f,x,g,m,_,b=1)=>{let y=new Fe(new jn(u,14,10),f);return y.position.set(x,g,m),y.scale.y=b,y.castShadow=!0,y.userData.noPick=!0,_.add(y),y},h=(u,f,x,g,m,_=a.woodDark)=>{let b=new yt;return b.position.set(u,f,x),b.rotation.y=g,m.add(b),o(.44,.05,.44,.02,_,0,.44,0,b),[[-.19,-.19],[.19,-.19],[-.19,.19],[.19,.19]].forEach(([y,M])=>c(.02,.44,a.steel,y,0,M,b,8)),o(.44,.45,.04,.02,_,0,.5,-.2,b),b},d=(u,f,x,g,m=1.4)=>{c(.14,.03,a.steel,u,f,x,g,14),c(.015,m,a.steel,u,f,x,g,8);let _=new Fe(new vn(.17,.24,.3,18,1,!0),a.lamp);return _.material.side=li,_.position.set(u,f+m+.05,x),_.userData.noAO=!0,_.userData.noPick=!0,g.add(_),_};(()=>{let u=e.main,f=.3;o(3.4,.02,2.5,.01,a.rug,-2.3,f,.7,u);let x=new yt;x.position.set(-.9,f,.7),x.rotation.y=-Math.PI/2,u.add(x),o(2.3,.4,.95,.1,a.fabric??i.fabric,0,.1,0,x),o(2.3,.45,.25,.1,i.fabric,0,.45,-.38,x),o(.25,.3,.9,.08,i.fabric,-1.07,.3,0,x),o(.25,.3,.9,.08,i.fabric,1.07,.3,0,x),o(.5,.4,.14,.06,a.cushion,-.6,.55,-.1,x),o(.5,.4,.14,.06,a.cushion2,.6,.55,-.1,x),[[-.9,.18],[.9,.18]].forEach(([_])=>{[[-1.05,-.4],[1.05,-.4],[-1.05,.4],[1.05,.4]].forEach(([b,y])=>c(.03,.1,a.woodDark,b,0,y,x,8))}),o(1,.05,.6,.03,a.wood,-2.75,f+.34,.7,u),[[-.4,-.22],[.4,-.22],[-.4,.22],[.4,.22]].forEach(([_,b])=>c(.025,.34,a.woodDark,-2.75+_,f,.7+b,u,8)),h(-2,f,2.5,Math.PI,u,i.fabric2??a.cushion2),o(.4,.5,2,.04,a.woodDark,-4.62,f,.7,u),o(.05,.75,1.5,.015,a.tvBlack,-4.74,f+.95,.7,u);let g=new Fe(new an(1.4,.68),a.tv);g.rotation.y=Math.PI/2,g.position.set(-4.7,f+1.32,.7),g.userData.noPick=!0,u.add(g),o(.34,2,2.2,.02,a.woodDark,.9,f,-1.8,u),[.5,1,1.5].forEach((_,b)=>{o(.2,.28,1.9,.01,[a.book1,a.book2,a.book3][b],1,f+_+.05,-1.8,u)}),c(.17,.4,a.pot,-4.2,f,3.2,u,14),l(.38,a.plant,-4.2,f+.85,3.2,u,1.3),l(.28,a.plant,-4.3,f+1.15,3.1,u,1.2),d(-.45,f,3.1,u,1.45),o(3,.72,.36,.02,a.cabinet,2.9,f+1.55,-3.7,u),o(.9,.14,.6,.02,a.steel,2.4,f+1.3,-3.58,u),o(.34,.9,.34,.02,a.steel,2.4,f+1.45,-3.7,u),o(2.2,.06,1,.02,a.quartz,3,f+.9,-.6,u),o(2.1,.9,.9,.03,a.cabinet,3,f,-.6,u),[2.4,3,3.6].forEach(_=>{c(.17,.05,a.woodDark,_,f+.62,.35,u,16),c(.025,.62,a.steel,_,f,.35,u,8)}),[2.3,3,3.7].forEach(_=>{c(.006,.7,a.steel,_,f+2.1,-.6,u,4);let b=new Fe(new jn(.15,16,10,0,Math.PI*2,0,Math.PI/2),a.pendant);b.position.set(_,f+2.1,-.6),b.userData.noAO=!0,b.userData.noPick=!0,u.add(b)}),o(1.8,.05,.92,.02,a.wood,3.2,f+.72,2.4,u),[[-.8,-.4],[.8,-.4],[-.8,.4],[.8,.4]].forEach(([_,b])=>c(.035,.72,a.woodDark,3.2+_,f,2.4+b,u,8)),h(2.5,f,1.55,0,u),h(3.9,f,1.55,0,u),h(2.5,f,3.25,Math.PI,u),h(3.9,f,3.25,Math.PI,u);let m=new Fe(new vn(.28,.28,.22,20,1,!0),a.pendant);m.material.side=li,m.position.set(3.2,f+2.15,2.4),m.userData.noAO=!0,m.userData.noPick=!0,u.add(m),c(.006,.55,a.steel,3.2,f+2.2,2.4,u,4),o(1,.45,.38,.03,a.wood,.6,f,3.55,u)})(),(()=>{let u=e.upper,f=3.45;o(2,.42,2.15,.06,a.sheets,2.4,f,-2.55,u),o(1.96,.18,1.55,.08,a.duvet,2.4,f+.38,-2.2,u),o(2,.9,.1,.03,a.woodDark,2.4,f,-3.72,u),o(.6,.22,.38,.08,a.sheets,1.85,f+.5,-3.3,u),o(.6,.22,.38,.08,a.sheets,2.95,f+.5,-3.3,u),[[1],[3.8]].forEach(([g])=>{o(.5,.5,.4,.03,a.woodDark,g,f,-3.55,u),d(g,f+.5,-3.55,u,.34)}),o(2,.02,1.4,.01,a.rug2,2.4,f,-1,u),o(.6,2.3,2,.02,a.woodDark,4.55,f,-1.2,u),o(1.5,.05,.7,.02,a.wood,.6,f+.72,3.35,u),[[-.7,-.3],[.7,-.3],[-.7,.3],[.7,.3]].forEach(([g,m])=>c(.03,.72,a.steel,.6+g,f,3.35+m,u,8)),o(.7,.42,.04,.01,a.tvBlack,.6,f+.98,3.52,u);let x=new Fe(new an(.64,.36),a.screen);x.position.set(.6,f+1.19,3.495),x.rotation.y=Math.PI,x.userData.noPick=!0,u.add(x),h(.6,f,2.7,Math.PI,u,a.cushion2),o(1.5,.4,2,.06,a.sheets,-3.4,f,2.2,u),o(1.46,.16,1.4,.07,a.cushion2,-3.4,f+.36,2.5,u),o(.9,.9,.5,.03,a.woodDark,-4.55,f,.6,u),o(.9,.02,.06,.01,a.tile,-3.2,f,-2.6,u),o(.42,.34,.6,.12,i.ceramic,-4.4,f,-3.2,u),o(.4,.4,.2,.06,i.ceramic,-4.4,f+.34,-3.5,u),o(.7,.9,.03,.01,i.mirror,-2.4,f+1.2,-3.84,u)})(),(()=>{let u=e.basement,f=-2.8;o(.68,.92,.68,.04,i.white,.5,f,-3.5,u),o(.68,.92,.68,.04,i.white,1.25,f,-3.5,u),c(.2,.03,a.tvBlack,.5,f+.93,-3.15,u,18),c(.2,.03,a.tvBlack,1.25,f+.93,-3.15,u,18),o(.6,.06,.4,.01,a.tvBlack,.88,f+.92,-3.88,u),o(2,.06,.75,.01,a.wood,-4,f+.88,2.6,u),o(1.9,.88,.7,.01,a.cabinet,-4,f,2.6,u),o(.3,.06,.12,.01,a.bin2,-4.4,f+.94,2.55,u),o(.2,.2,.2,.02,a.bin,-3.7,f+.94,2.7,u),o(1.7,2,.42,.01,a.steel,4.25,f,2.9,u,0),[.3,.9,1.5].forEach((g,m)=>{o(.5,.3,.34,.03,[a.bin,a.bin2,a.cardboard][m],3.8,f+g+.05,2.9,u),o(.6,.3,.34,.03,[a.cardboard,a.bin,a.bin2][m],4.5,f+g+.05,2.9,u)}),c(.32,.05,a.tvBlack,.66,f,1.6,u,20),c(.1,.5,a.pvc??i.pvc,.66,f,1.6,u,12);let x=new Fe(new jn(.03,8,6),a.led);x.position.set(.66,f+.58,1.6),x.userData.noAO=!0,x.userData.noPick=!0,u.add(x),o(.5,.4,.4,.02,a.cardboard,-1.4,f,2.9,u,.3),o(.45,.35,.4,.02,a.cardboard,-1.3,f+.4,2.9,u,.1),o(1.6,.02,1.2,.01,a.rug,.4,f,.8,u)})();function p(u,f){let x=qt(.25+.75*u+f*.3,0,1.1);a.tv.emissiveIntensity=1.3*x,a.screen.emissiveIntensity=1.1*x,a.lamp.emissiveIntensity=2.2*x,a.pendant.emissiveIntensity=2.6*x,a.led.emissiveIntensity=3}return{update:p,glows:n}}var ea=.38;function Im({scene:i,M:e,tier:t,reduce:n}){let s=new yt;s.visible=!1,i.add(s);let r=Hn(55),a=jr("rgba(255,255,255,0.65)"),o=(we,Ve,ie)=>new F(we,Ve,ie),c=.45,l=.66,h=(()=>{let we=Math.round(1024*Du()),Ve=Math.round(512*Du()),ie=document.createElement("canvas");ie.width=we,ie.height=Ve;let Qe=ie.getContext("2d"),le=Qe.createImageData(we,Ve),ye=le.data,ee=[[0,[58,41,29]],[.5,[92,64,40]],[.62,[150,106,62]],[2.2,[138,98,58]],[2.4,[150,142,120]],[4.6,[124,118,104]],[4.8,[100,112,120]],[7,[90,98,108]],[9,[74,78,86]]],ge=Ze=>{let Ye=0;for(;Ye<ee.length-2&&ee[Ye+1][0]<=Ze;)Ye++;let[ut,ft]=ee[Ye],[Q,It]=ee[Ye+1],At=qt((Ze-ut)/(Q-ut),0,1);return[ht(ft[0],It[0],At),ht(ft[1],It[1],At),ht(ft[2],It[2],At)]};for(let Ze=0;Ze<Ve;Ze++)for(let Ye=0;Ye<we;Ye++){let ut=Ze/Ve*9+(ei(Ye/90,Ze/40,3,11,8,5)-.5)*.7+Math.sin(Ye*.02+Ze*.01)*.12,ft=ge(qt(ut,0,9)),Q=(ei(Ye/6,Ze/6,2,170,85,9)-.5)*34,It=(Ze*we+Ye)*4;ye[It]=qt(ft[0]+Q,0,255),ye[It+1]=qt(ft[1]+Q,0,255),ye[It+2]=qt(ft[2]+Q*.9,0,255),ye[It+3]=255}Qe.putImageData(le,0,0);for(let Ze=0;Ze<420*Du();Ze++){let Ye=105+r()*75;Qe.fillStyle=`rgba(${Ye|0},${Ye*.96|0},${Ye*.86|0},0.85)`,Qe.beginPath(),Qe.ellipse(r()*we,(2.5+r()*2.1)/9*Ve,1.5+r()*3.5,1.2+r()*2.4,r()*3,0,6.3),Qe.fill()}let Te=new $n(ie);return Te.colorSpace=bn,Te.wrapS=Qn,Te.anisotropy=8,Te})(),d=new cn({map:h,roughness:1,metalness:0});h.repeat.set(6,1);let p=new Fe(new an(240,9),d);p.rotation.y=-Math.PI/2,p.position.set(c+ea,-4.52,0),p.userData.noAO=!0,p.userData.noPick=!0,p.receiveShadow=!1,s.add(p);let u=(()=>{let we=document.createElement("canvas");we.width=4,we.height=256;let Ve=we.getContext("2d"),ie=Ve.createLinearGradient(0,0,0,256);ie.addColorStop(0,"rgb(74,78,86)"),ie.addColorStop(.35,"rgb(24,26,31)"),ie.addColorStop(1,"rgb(6,7,9)"),Ve.fillStyle=ie,Ve.fillRect(0,0,4,256);let Qe=new $n(we);return Qe.colorSpace=bn,Qe})(),f=new Fe(new an(240,60),new Wn({map:u,fog:!1,toneMapped:!1}));f.rotation.y=-Math.PI/2,f.position.set(c+ea,-9.02-30,0),f.userData.noAO=!0,f.userData.noPick=!0,f.raycast=()=>{},s.add(f);let x=new yt;s.add(x);for(let we=0;we<=9;we++){let Ve=new Fe(new Rn(.04,.05,we%3===0?1.4:.8),new Wn({color:16039294,toneMapped:!1}));Ve.position.set(0,-we,31-(we%3===0?.7:.4)),Ve.userData.noAO=!0,Ve.raycast=()=>{},x.add(Ve)}let g=new Fe(new Rn(.06,.07,240),new Wn({color:16039294,toneMapped:!1}));g.position.set(c+ea-.02,.02,0),g.userData.noAO=!0,g.raycast=()=>{},s.add(g);let m=(we,Ve=.45,ie=.2)=>{let Qe=new cn({color:we,roughness:Ve,metalness:ie,emissive:we,emissiveIntensity:.12,side:li});return Qe.userData.th=[.3],Qe},_={water:m(4165606,.4,.3),gas:m(15775786,.45,.2),sewer:m(12169888,.8,0),tile:m(15855334,.6,0),roots:m(8017458,.95,0),sump:m(8362672,.5,.3),crack:new Wn({color:new Et(3,.5,.35),toneMapped:!1})};_.roots.emissiveIntensity=0;let b={water:new yt,gas:new yt,sewer:new yt,found:new yt,radon:new yt};Object.values(b).forEach(we=>s.add(we));let y=(we,Ve,ie,Qe,le=0)=>{let ye=new fs(we.map(ge=>o(...ge)),!1,"catmullrom",.05),ee=new Fe(new ds(ye,le||Math.max(8,we.length*8),Ve,10,!1),ie);return ee.castShadow=!1,ee.userData.noPick=!0,Qe.add(ee),ye},M=(we,Ve,ie,Qe,le)=>{let ye=o(...we),ee=o(...Ve),ge=ye.distanceTo(ee),Te=new Fe(new vn(ie,ie,ge,16,1,!0),Qe);return Te.position.copy(ye).lerp(ee,.5),Te.quaternion.setFromUnitVectors(o(0,1,0),ee.clone().sub(ye).normalize()),Te.userData.noPick=!0,le.add(Te),new da(ye,ee)},T=[];function R(we,Ve,ie,Qe,le,ye=.22){let ee=new tn;ee.setAttribute("position",new Jt(new Float32Array(Ve*3),3));let ge=new Ki(ee,new Hi({size:ye,map:a,color:new Et(Qe).multiplyScalar(2.2),transparent:!0,depthWrite:!1,blending:Xn,toneMapped:!1}));ge.frustumCulled=!1,ge.userData.noAO=!0,ge.raycast=()=>{},le.add(ge),T.push({curve:we,n:Ve,speed:ie,len:we.getLength(),pts:ge,group:le})}M([c-12,-2.4,22.8],[c+60,-2.4,22.8],.24,_.water,b.water),M([c-12,-1.3,24.7],[c+60,-1.3,24.7],.11,_.gas,b.gas);let v=y([[l,-2.4,22.8],[l,-2.3,18],[l,-2.2,6],[l,-2.2,3.75]],.075,_.water,b.water,30);R(v,20,2,7320831,b.water,.2);let A=y([[l+.1,-1.3,24.7],[l+.1,-1.3,8],[l+.1,-.3,5.4],[l+.1,.9,4.25]],.055,_.gas,b.gas,30);R(A,16,2.6,16765514,b.gas,.18);let I=new Fe(new Rn(.3,.4,.2),e.steel);I.position.set(l+.1,1.2,4.25),I.userData.noPick=!0,b.gas.add(I),M([c-12,-3.95,-18.2],[c+60,-3.95,-18.2],.4,_.sewer,b.sewer);let G=y([[l,-3.27,-3.8],[l,-3.35,-9],[l,-3.55,-13],[l,-3.9,-17.9]],.19,_.sewer,b.sewer,30);R(G,18,1.3,13214314,b.sewer,.2);let w=y([[l,-3.3,-5.2],[l,-1,-5.2],[l,.1,-5.2]],.14,_.sewer,b.sewer,10),U=o(l,-3.52,-12.8);[[[.9,-.2,-12.4],[.8,-1.2,-12.2],[l+.04,-2.4,-12.5],[l+.02,-3.2,-12.8],[l,-3.5,-12.9]],[[.9,-.2,-12.4],[.85,-.9,-11.4],[l+.1,-2,-11.5],[l+.04,-3,-12.1],[l,-3.45,-12.6]],[[.9,-.2,-12.4],[.85,-1,-13.5],[l+.12,-2.2,-13.9],[l+.04,-3.1,-13.4],[l,-3.5,-13.1]],[[l+.1,-2.2,-13.8],[l+.05,-2.9,-14.6]],[[l+.12,-2,-11.5],[l+.06,-2.6,-10.5]]].forEach((we,Ve)=>y(we,Ve<3?.1:.05,_.roots,b.sewer,24));let N=new Fe(new Qi(.3,.02,8,28),_.crack);N.position.copy(U),N.rotation.y=Math.PI/2,N.userData.noAO=!0,b.sewer.add(N),[[-4.55],[4.55]].forEach(([we])=>M([c-6,-3.3,we],[c+6.2,-3.3,we],.11,_.tile,b.found)),[[c-6],[c+6.2]].forEach(([we])=>M([we,-3.3,-4.55],[we,-3.3,4.55],.11,_.tile,b.found));let H=y([[l,-3.3,4.55],[l,-3.3,3],[l,-3.1,1.9]],.09,_.tile,b.found,12),$=new Fe(new vn(.34,.34,.75,22,1,!0),_.sump);$.position.set(l,-3.05,1.6),$.userData.noPick=!0,b.found.add($);let z=y([[l,-2.55,1.6],[l,-1.2,1.6],[l,-1.2,6.8],[l,.1,6.8]],.075,_.sump,b.found,24);R(H,10,.8,7320831,b.found,.16),R(z,14,1.8,7320831,b.found,.18),y([[.62,-.15,4.27],[.55,-.55,4.27],[.74,-.95,4.27],[.5,-1.4,4.27],[.7,-1.9,4.27],[.52,-2.5,4.27]],.022,_.crack,b.found,30);let q=new Ji(new Bi({map:Vo("rgba(255,90,70,0.9)","rgba(255,60,40,0)"),transparent:!0,depthWrite:!1,blending:Xn,opacity:.6}));q.position.set(.62,-1.4,4.5),q.scale.set(2.2,3.4,1),q.userData.noAO=!0,b.found.add(q);let Z=n?0:t>=1?520:200,W=new tn,J=new Float32Array(Z*3),me=new Float32Array(Z*2),Ie=we=>{J[we*3]=r()*(ea-.06),J[we*3+1]=-8.6+r()*1.4,J[we*3+2]=(r()-.5)*14-1.5,me[we*2]=.6+r()*.9,me[we*2+1]=r()*6.28};for(let we=0;we<Z;we++)Ie(we),J[we*3+1]=-8.6+r()*5.6;W.setAttribute("position",new Jt(J,3));let qe=new Ki(W,new Hi({size:.42,map:a,color:new Et(14257407).multiplyScalar(2.6),transparent:!0,depthWrite:!1,blending:Xn,toneMapped:!1}));qe.frustumCulled=!1,qe.userData.noAO=!0,qe.raycast=()=>{},b.radon.add(qe);let $e={x:-1.2,z:-1.5},xt={ugWater:o(l,-2.4,21),ugGas:o(l+.1,-1.3,14),ugSewer:o(l,-3.7,-16),ugRoots:U.clone(),ugSewerMain:o(l,-3.95,-18.2),ugTile:o(l,-3.3,4.55),ugSump:o(l,-3.1,1.6),ugCrack:o(l,-1.5,4.3),ugRadon:o(-1.2,-6,-1.5),ugMeter:o(l+.1,1.2,4.25),ugMain:o(l,-2.4,22.8),ugGasMain:o(l,-1.3,24.7)},re=o(0,0,0),fe={cx:-1e3};function Ue(we,Ve,ie,Qe){let le=Rt(0,1,we.section),ye=we.section<.002?-1e3:ht(-60,we.cutX,le);if(fe.cx=ye,s.visible=we.section>.002,!s.visible)return ye;if(p.position.x=ye+ea,f.position.x=ye+ea,g.position.x=ye+ea-.02,x.position.x=ye+ea,xt.ugRadon.x=ye+ea*.5,Object.entries(b).forEach(([ee,ge])=>{let Te=Ve===ee||Ve==="street"&&(ee==="water"||ee==="gas"),Ze=!Ve||Te?1:.2;ge.userData.al=ht(ge.userData.al??Ze,Ze,Math.min(1,Qe*5)),ge.traverse(Ye=>{Ye.material&&Ye.material.isMeshStandardMaterial&&(Ye.material.emissiveIntensity=Te?.6:.12)})}),_.crack.color.setRGB(3,.5,.35).multiplyScalar(.7+.3*Math.sin(ie*5)),T.forEach(ee=>{let ge=ee.group.userData.al??1;if(ee.pts.visible=ge>.02,!ee.pts.visible)return;let Te=ee.pts.geometry.attributes.position.array;for(let Ze=0;Ze<ee.n;Ze++){let Ye=(Ze/ee.n+ie*ee.speed/ee.len)%1;ee.curve.getPointAt(Ye,re),Te[Ze*3]=re.x,Te[Ze*3+1]=re.y,Te[Ze*3+2]=re.z}ee.pts.geometry.attributes.position.needsUpdate=!0,ee.pts.material.opacity=ge}),qe.visible=Z>0&&(b.radon.userData.al??1)>.2,qe.visible){qe.position.x=ye;for(let ee=0;ee<Z;ee++){let ge=J[ee*3+1],Te=Rt(-5.8,-3,ge);J[ee*3+1]+=me[ee*2]*Qe*.8,J[ee*3+2]+=(($e.z-J[ee*3+2])*Te*.5+Math.sin(ie*.8+me[ee*2+1])*.1)*Qe,J[ee*3+1]>-2.95&&Ie(ee)}W.attributes.position.needsUpdate=!0,qe.material.opacity=b.radon.userData.al??1}return ye}return{group:s,update:Ue,ANCHORS:xt,groups:b,state:fe}}function kf(i){i.updateWorldMatrix(!0,!0);let e=new kt().copy(i.matrixWorld).invert(),t=new kt,n=new Map,s=[],r=l=>{for(let h=l;h&&h!==i;h=h.parent)if(h.userData.sys||h.userData.keep||h.userData.level)return!0;return!1},a=l=>Array.isArray(l.material)?l.geometry.groups.map(h=>{let d=l.geometry.clone(),p=l.geometry.index;return d.clearGroups(),p?d.setIndex(Array.from(p.array.slice(h.start,h.start+h.count))):d.deleteAttribute("position"),{m:l.material[h.materialIndex],g:d}}):[{m:l.material,g:l.geometry.clone()}];i.traverse(l=>{if(!l.isMesh||l.isInstancedMesh||l===i||!l.material||!l.visible||r(l)||l.children.length||!l.geometry.index&&Array.isArray(l.material)||(Array.isArray(l.material)?l.material:[l.material]).some(d=>!d||d.userData.pane))return;t.multiplyMatrices(e,l.matrixWorld),a(l).forEach(({m:d,g:p})=>{let u=[d.uuid,+l.castShadow,+l.receiveShadow,+!!l.userData.noAO,+!!l.userData.noPick,l.renderOrder].join("|"),f=n.get(u);f||n.set(u,f={m:d,cast:l.castShadow,recv:l.receiveShadow,noAO:!!l.userData.noAO,noPick:!!l.userData.noPick,ro:l.renderOrder,geos:[],owners:new Set}),p.attributes.uv||p.setAttribute("uv",new Jt(new Float32Array(p.attributes.position.count*2),2)),p.applyMatrix4(t),f.geos.push(p),f.owners.add(l)}),s.push(l)});let o=0;n.forEach(l=>{if(l.geos.length<2){l.geos.forEach(f=>f.dispose());return}let h=Object.keys(l.geos[0].attributes).filter(f=>l.geos.every(x=>x.attributes[f]));l.geos.forEach(f=>{for(let x of Object.keys(f.attributes))h.includes(x)||f.deleteAttribute(x)});let d=l.geos.some(f=>!f.index)?l.geos.map(f=>f.index?f.toNonIndexed():f):l.geos,p=Ss(d);if(!p)return;p.computeBoundingSphere();let u=new Fe(p,l.m);u.castShadow=l.cast,u.receiveShadow=l.recv,u.renderOrder=l.ro,l.noAO&&(u.userData.noAO=!0),l.noPick&&(u.userData.noPick=!0),i.add(u),o++,l.done=!0});let c=new Set;return n.forEach(l=>{l.done||l.owners.forEach(h=>c.add(h))}),s.forEach(l=>{!c.has(l)&&l.parent&&(l.parent.remove(l),l.geometry.dispose())}),o}function Dm(i,e){i.updateWorldMatrix(!0,!0);let t=new kt().copy(i.matrixWorld).invert(),n=new kt,s=[],r=[];if(i.traverse(c=>{c.isLineSegments&&c.material===e&&r.push(c)}),r.forEach(c=>{let l=c.geometry.clone();for(let h of Object.keys(l.attributes))h!=="position"&&l.deleteAttribute(h);l.applyMatrix4(n.multiplyMatrices(t,c.matrixWorld)),s.push(l)}),s.length<2)return 0;let a=Ss(s.map(c=>c.index?c.toNonIndexed():c));if(!a)return 0;let o=new Lr(a,e);return o.raycast=()=>{},o.userData.noAO=!0,i.add(o),r.forEach(c=>{c.parent&&c.parent.remove(c),c.geometry.dispose()}),r.length}function Lm({M:i,tier:e,glowTex:t,dotTex:n}){let s={value:0},r=(y,M=.6,T=0,R={})=>{let v=new cn({color:y,roughness:M,metalness:T,...R});return v.userData.th=[.4],v};function a(){let y=document.createElement("canvas");y.width=y.height=512;let M=y.getContext("2d");M.fillStyle="#b99a6e",M.fillRect(0,0,512,512);let T=7,R=()=>(T=T*16807%2147483647)/2147483647;for(let I=0;I<260;I++){let G=R()*512,w=.03+R()*.07;M.strokeStyle=R()>.5?`rgba(90,62,30,${w})`:`rgba(240,220,180,${w})`,M.lineWidth=.6+R()*2.2,M.beginPath(),M.moveTo(0,G);for(let U=0;U<=512;U+=32)M.lineTo(U,G+Math.sin(U*.012+I)*(2+R()*5));M.stroke()}for(let I=0;I<5;I++){let G=R()*512,w=R()*512,U=4+R()*7,N=M.createRadialGradient(G,w,0,G,w,U*2.4);N.addColorStop(0,"rgba(70,44,20,.55)"),N.addColorStop(1,"rgba(70,44,20,0)"),M.fillStyle=N,M.beginPath(),M.ellipse(G,w,U*2.6,U*1.3,0,0,6.3),M.fill()}let v=new $n(y);v.colorSpace=bn,v.wrapS=v.wrapT=Qn,v.repeat.set(1/1.2,1/1.2),v.anisotropy=8;let A=new cn({map:v,roughness:.82,metalness:0});return A.userData.th=[.45],A}let o=(y,M=1.5,T={})=>r(789776,.5,0,{emissive:y,emissiveIntensity:M,...T}),c={enclosure:r(8093831,.5,.6,{envMapIntensity:.7}),enclosureDark:r(2764082,.62,.5,{envMapIntensity:.6}),galv:r(11186618,.38,.9,{envMapIntensity:1.3}),blackPlastic:r(1184534,.42,.05),greyPlastic:r(4869975,.5,.05),whitePlastic:r(11118238,.55,.02),conduit:r(7304316,.62,.02),bluePlastic:r(3104680,.5,.02),orangePlastic:r(14711338,.5,.02),yellowPlastic:r(15319598,.5,.02),redPlastic:r(12728875,.5,.02),purple:r(8011716,.45,.05,{emissive:5909152,emissiveIntensity:.25}),green:r(3119703,.5,.05),copper:r(14256718,.25,1,{envMapIntensity:1.5}),copperHot:r(13201722,.3,1,{envMapIntensity:1.5,emissive:16742954,emissiveIntensity:.3}),aluminum:r(13225684,.3,1,{envMapIntensity:1.4}),brass:r(13214282,.32,1,{envMapIntensity:1.3}),rubber:r(855568,.85,0),plywood:a(),studs:i.cedar,concrete:i.concrete,slab:i.slab,drywall:i.drywall,steel:i.steel,pvc:i.pvc,castIron:r(2829617,.75,.6),clay:r(10115900,.9,0),hdpe:r(1316378,.35,.1,{envMapIntensity:1.2}),gravel:r(7301730,1,0),soil:r(3812382,1,0),insulPink:r(15311018,1,0),insulYellow:r(14861930,1,0),vermiculite:r(11569738,.95,.15),frost:r(15923199,.35,0,{emissive:12572415,emissiveIntensity:.25}),ice:i.ice,water:new ji({color:2781104,roughness:.06,metalness:0,transparent:!0,opacity:.78,envMapIntensity:1.8,clearcoat:1}),sewage:new ji({color:5916200,roughness:.2,metalness:0,transparent:!0,opacity:.9,envMapIntensity:1.2}),glassClear:new ji({color:14674674,roughness:.03,metalness:0,transparent:!0,opacity:.22,envMapIntensity:2,clearcoat:1}),poly:new ji({color:14542574,roughness:.35,metalness:0,transparent:!0,opacity:.28,envMapIntensity:1.4,side:li,depthWrite:!1}),led:(y=9425830,M=3)=>o(y,M),glow:o};[c.water,c.sewage,c.glassClear,c.poly].forEach(y=>{y.userData.th=[.3]});let l=(y,M,T,R,v,A={})=>(y.position.set(M,T,R),y.castShadow=A.cast!==!1,y.receiveShadow=A.receive!==!1,A.keep&&(y.userData.keep=!0),A.rot&&y.rotation.set(A.rot[0]||0,A.rot[1]||0,A.rot[2]||0),v&&v.add(y),y),h=(y,M,T,R,v=0,A=0,I=0,G,w={})=>{let U=w.r?new nr(y,M,T,2,Math.min(w.r,y/2,M/2,T/2)):new Rn(y,M,T);return w.uv&&Ya(U,w.uv===!0?{}:w.uv),l(new Fe(U,R),v,A,I,G,w)},d=(y,M,T,R=0,v=0,A=0,I,G={})=>{let w=new vn(G.r2??y,y,M,G.seg||16,1,!!G.open);return G.axis==="x"?w.rotateZ(Math.PI/2):G.axis==="z"&&w.rotateX(Math.PI/2),l(new Fe(w,T),R,v,A,I,G)},p=(y,M,T,R,v,A,I={})=>l(new Fe(new jn(y,I.seg||16,I.seg2||12),M),T,R,v,A,I),u=(y,M,T)=>new F(y,M,T);return{time:s,mats:c,std:r,box:h,cyl:d,sphere:p,tube:(y,M,T,R,v={})=>{let A=new fs(y.map(N=>N.isVector3?N:u(N[0],N[1],N[2])),!1,v.type||"catmullrom",v.tension??.3),I=A.getLength(),G=new ds(A,v.seg||Math.max(8,Math.round(I*(v.density||14))),M,v.radial||8,!1),w=G.attributes.uv;for(let N=0;N<w.count;N++)w.setX(N,w.getX(N)*I);let U=l(new Fe(G,T),0,0,0,R,v);return U.userData.curve=A,U.userData.len=I,U},V:u,flow:(y,M={})=>{let T={value:M.level??1},R=new cn({color:M.base??1382170,roughness:M.roughness??.45,metalness:M.metalness??.1,emissive:y,emissiveIntensity:M.intensity??2.2});return R.defines={USE_UV:""},R.userData.level=T,R.userData.th=[.6],R.onBeforeCompile=v=>{v.uniforms.uFlowT=s,v.uniforms.uFlowL=T,v.fragmentShader=v.fragmentShader.replace("#include <common>",`#include <common>
uniform float uFlowT; uniform float uFlowL;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        { float fd = fract(vUv.x * ${(M.dash??3).toFixed(2)} - uFlowT * ${((M.speed??.5)*(M.dash??3)).toFixed(2)});
          float fp = smoothstep(0.0, 0.18, fd) * (1.0 - smoothstep(0.42, 0.6, fd));
          totalEmissiveRadiance *= (${(M.rest??.12).toFixed(2)} + ${(M.gain??1).toFixed(2)} * fp) * uFlowL; }`)},R.customProgramCacheKey=()=>`flow${M.dash??3}_${M.speed??.5}_${M.rest??.12}_${M.gain??1}`,R},atlas:(y,M={})=>{let R=M.width||1024,v=4,A=4,I=0,G={};y.forEach(W=>{v+W.w+4>R&&(v=4,A+=I+4,I=0),G[W.key]={x:v,y:A,w:W.w,h:W.h,c:W},v+=W.w+4,I=Math.max(I,W.h)});let w=2**Math.ceil(Math.log2(A+I+4)),U=document.createElement("canvas");U.width=R,U.height=w;let N=U.getContext("2d"),H=W=>{let J=W.c;if(N.clearRect(W.x,W.y,W.w,W.h),J.bg&&(N.fillStyle=J.bg,N.fillRect(W.x,W.y,W.w,W.h)),J.draw){N.save(),N.translate(W.x,W.y),J.draw(N,W.w,W.h,J),N.restore();return}N.fillStyle=J.color||"#ece6da",N.textAlign=J.align||"center",N.textBaseline="middle";let me=J.align==="left"?W.x+6:W.x+W.w/2;N.font=`${J.weight||600} ${J.size||Math.round(W.h*.62)}px ${J.font||"ui-monospace, Menlo, Consolas, monospace"}`,J.sub?(N.fillText(J.text,me,W.y+W.h*.38),N.font=`500 ${Math.round((J.size||W.h*.62)*.5)}px ui-monospace, Menlo, Consolas, monospace`,N.globalAlpha=.75,N.fillText(J.sub,me,W.y+W.h*.78),N.globalAlpha=1):N.fillText(J.text,me,W.y+W.h/2+1)};Object.values(G).forEach(H);let $=new $n(U);$.colorSpace=bn,$.anisotropy=8;let z=new cn({map:$,emissiveMap:$,emissive:16777215,emissiveIntensity:M.emissive??.35,roughness:.6,transparent:!0,alphaTest:.02,depthWrite:!1});return z.userData.th=[.4],{plane:(W,J,me,Ie=0,qe=0,$e=0,xt={})=>{let re=G[W],fe=J*(re.h/re.w),Ue=new an(J,fe),we=Ue.attributes.uv;for(let ie=0;ie<we.count;ie++)we.setXY(ie,(re.x+we.getX(ie)*re.w)/R,1-(re.y+(1-we.getY(ie))*re.h)/w);let Ve=l(new Fe(Ue,z),Ie,qe,$e,me,{cast:!1,receive:!1,...xt});return Ve.renderOrder=3,Ve},set:(W,J,me,Ie)=>{let qe=G[W];J!==void 0&&(qe.c.text=J),me!==void 0&&(qe.c.sub=me),Ie&&Object.assign(qe.c,Ie),H(qe),$.needsUpdate=!0},mat:z,tex:$}},particles:(y,M={})=>{let T=e>=1?y:Math.ceil(y*.45),R=new tn,v=new Float32Array(T*3);R.setAttribute("position",new Jt(v,3));let A=new Hi({size:M.size??.05,map:n,color:new Et(M.color??16777215).multiplyScalar(M.gain??1.6),transparent:!0,depthWrite:!1,blending:M.normal?_a:Xn,toneMapped:!1,sizeAttenuation:!0,opacity:M.opacity??1}),I=new Ki(R,A);return I.frustumCulled=!1,I.userData.noAO=!0,I.userData.keep=!0,I.raycast=()=>{},I.userData.n=T,I.userData.pos=v,I},sprite:(y,M,T,R,v,A,I=.8)=>{let G=new Ji(new Bi({map:t,color:y,transparent:!0,depthWrite:!1,blending:Xn,opacity:I}));return G.position.set(T,R,v),G.scale.set(M,M,1),G.userData.noAO=!0,G.userData.keep=!0,G.raycast=()=>{},A&&A.add(G),G},bake:y=>{let M=new Map,T=[];y.updateWorldMatrix(!0,!0);let R=new kt().copy(y.matrixWorld).invert(),v=new kt,A=I=>{for(let G=I;G&&G!==y;G=G.parent)if(G.userData.keep)return!0;return!1};return y.traverse(I=>{if(!I.isMesh||I.isInstancedMesh||A(I)||Array.isArray(I.material)||I.children.length)return;let G=I.material.uuid+"|"+ +I.castShadow+ +I.receiveShadow+"|"+I.renderOrder,w=M.get(G);w||M.set(G,w={mat:I.material,cast:I.castShadow,recv:I.receiveShadow,ro:I.renderOrder,geos:[]});let U=I.geometry.index?I.geometry.toNonIndexed():I.geometry.clone();Object.keys(U.attributes).forEach(N=>{N!=="position"&&N!=="normal"&&N!=="uv"&&U.deleteAttribute(N)}),U.attributes.uv||U.setAttribute("uv",new Jt(new Float32Array(U.attributes.position.count*2),2)),U.applyMatrix4(v.multiplyMatrices(R,I.matrixWorld)),w.geos.push(U),T.push(I)}),M.forEach(I=>{let G=Ss(I.geos);if(!G)return;let w=new Fe(G,I.mat);w.castShadow=I.cast,w.receiveShadow=I.recv,w.renderOrder=I.ro,w.userData.keep=!0,y.add(w),I.geos.forEach(U=>U.dispose())}),T.forEach(I=>{I.parent&&I.parent.remove(I),I.geometry.dispose()}),y},place:l}}var zr=new F(2.8,-1.25,-3.945),Xf=.0266,Yo=i=>.3-i*Xf,Vf=[[15,1],[15,1],[20,1],[15,1],[15,1],[20,1],[15,1],[15,1],[40,2,"range","RANGE"],[30,2,"dryer","DRYER"],[40,2,"hp","HEAT PUMP"],[30,2,"base","BASEBOARD"],[15,1],[15,1]],Wf=[[15,1,null,null,"AFCI"],[15,1,null,null,"AFCI"],[20,1,null,null,"GFCI"],[20,1],[15,1],[15,1],[20,1],[15,1],[30,2,"wh","WATER HTR"],[30,2,"ac","A/C"],[50,2,"ev","EV CHARGER"],[60,2,"spa","HOT TUB"],[40,2,"suite","SUITE"]];function Nm({kit:i}){let{box:e,cyl:t,tube:n,mats:s,atlas:r}=i,a=new yt,o=2.8,c=-4.3;t(.034,3.7,s.galv,o,3.6,c,a),t(.06,.16,s.galv,o,5.5,c-.02,a,{r2:.03}),e(.1,.05,.16,s.galv,o,5.44,c-.05,a,{rot:[.5,0,0]}),[2.2,3.4,4.6].forEach(p=>e(.12,.03,.2,s.galv,o,p,c+.1,a,{cast:!1})),e(.3,.44,.12,s.enclosure,o,1.45,c+.02,a,{r:.012}),t(.092,.03,s.galv,o,1.5,c-.05,a,{axis:"z",seg:28}),t(.085,.085,s.glassClear,o,1.5,c-.1,a,{axis:"z",seg:28,cast:!1}),t(.074,.006,s.whitePlastic,o,1.5,c-.075,a,{axis:"z",seg:28,cast:!1});let l=r([{key:"kwh",text:"08431",sub:"kWh \xB7 CL200 \xB7 240 V",w:192,h:96,size:46,color:"#0e1014"}],{width:256,emissive:.15}),h=l.plane("kwh",.1,a,o,1.5,c-.0795);h.rotation.y=Math.PI;let d=t(.05,.002,s.aluminum,o,1.452,c-.09,a,{seg:24,cast:!1,keep:!0});return t(.03,1.02,s.conduit,o,.72,c,a),e(.075,.13,.075,s.conduit,o,.17,c,a,{r:.012}),t(.03,.34,s.conduit,o,.15,c+.17,a,{axis:"z"}),n([[o+.11,1.24,c+.03],[o+.13,.6,c+.06],[o+.14,.05,c-.12],[o+.14,-.25,c-.16]],.006,s.copper,a,{radial:6}),t(.011,.5,s.copper,o+.14,-.05,c-.16,a,{seg:8}),i.bake(a),a.add(d),{group:a,disc:d,labels:l}}function Um({kit:i}){let{box:e,cyl:t,tube:n,mats:s,flow:r,atlas:a,V:o}=i,c=new yt;c.position.copy(zr);let l=new yt;c.add(l);let h=[];[15,20,30,40,50,60].forEach(ie=>h.push({key:"a"+ie,text:String(ie),w:96,h:56,size:40,color:"#f4f1ea"})),h.push({key:"a200",text:"200",w:144,h:72,size:56,color:"#f4f1ea"}),[...Vf,...Wf].filter(ie=>ie[3]).forEach(ie=>h.push({key:"n"+ie[2],text:ie[3],w:224,h:44,size:26,color:"#f4bd7e"})),h.push({key:"AFCI",text:"AFCI",w:112,h:44,size:26,color:"#9fc4ff"},{key:"GFCI",text:"GFCI",w:112,h:44,size:26,color:"#ffe08a"}),h.push({key:"rating",text:"200 A \xB7 120/240 V \xB7 1\xD8 3W",w:420,h:44,size:24,color:"#cfd4da"}),h.push({key:"mon",w:320,h:200,text:"49 A",sub:"of a 100 A service",ratio:.49,draw(ie,Qe,le,ye){ie.fillStyle="#05070b",ie.fillRect(0,0,Qe,le);let ee=ye.ratio>.9?"#ff6b4f":ye.ratio>.7?"#f4bd7e":"#8fd3a6";ie.textAlign="left",ie.textBaseline="middle",ie.fillStyle="#8b93a1",ie.font="600 17px ui-monospace, Menlo, monospace",ie.fillText("DEMAND",20,30),ie.fillStyle=ee,ie.font="700 74px ui-monospace, Menlo, monospace",ie.fillText(ye.text,18,92),ie.fillStyle="#cfd4da",ie.font="500 19px ui-monospace, Menlo, monospace",ie.fillText(ye.sub,20,146),ie.fillStyle="#1c222c",ie.fillRect(20,168,Qe-40,14),ie.fillStyle=ee,ie.fillRect(20,168,(Qe-40)*Math.min(1,ye.ratio),14)}}),h.push({key:"dir",w:300,h:420,draw(ie,Qe,le){ie.fillStyle="#e9e4d6",ie.fillRect(0,0,Qe,le),ie.fillStyle="#1a1c20",ie.font="700 20px ui-monospace, Menlo, monospace",ie.textAlign="left",ie.textBaseline="middle",ie.fillText("CIRCUIT DIRECTORY",14,24),ie.strokeStyle="rgba(20,22,26,.45)",ie.lineWidth=1,ie.font="500 13px ui-monospace, Menlo, monospace",["KITCHEN PLUGS","BEDROOM 1 \xB7 AFCI","BEDROOM 2 \xB7 AFCI","BATH \xB7 GFCI","LIVING","FURNACE","RANGE 40A","DRYER 30A","WATER HTR 30A","A/C 30A","EV CHARGER 50A","HOT TUB 60A","HEAT PUMP 40A","SUITE 40A"].forEach((ee,ge)=>{let Te=54+ge*25;ie.beginPath(),ie.moveTo(12,Te+12),ie.lineTo(Qe-12,Te+12),ie.stroke(),ie.fillText(String(ge+1).padStart(2,"0")+"  "+ee,14,Te)})}});let d=a(h,{width:1024,emissive:.22});e(2,1.9,.03,s.plywood,.2,.1,-.015,l,{uv:{ox:1,oy:1}}),e(2.3,2.4,.1,s.concrete,.2,.05,-.085,l,{cast:!1,uv:!0});let p=.4,u=1,f=.1,x=.004;e(p,u,x,s.enclosureDark,0,0,x/2,l),e(x,u,f,s.enclosure,-p/2,0,f/2,l),e(x,u,f,s.enclosure,p/2,0,f/2,l),e(p,x,f,s.enclosure,0,u/2,f/2,l),e(p,x,f,s.enclosure,0,-u/2,f/2,l),t(.03,.92,s.conduit,0,u/2+.46,.045,l),t(.04,.03,s.enclosure,0,u/2+.012,.045,l),e(.19,.125,.026,s.blackPlastic,.42,.3,.013,l,{r:.006});let g=d.plane("mon",.168,c,.42,.3,.0268,{keep:!0});n([[.325,.3,.012],[.27,.31,.014],[.215,.33,.03]],.004,s.rubber,l,{radial:6}),e(.11,.075,.058,s.blackPlastic,0,.39,.035,l,{r:.004});let m=e(.034,.024,.022,i.std(1908773,.4,.1,{emissive:16039294,emissiveIntensity:0}),0,.39,.072,c,{r:.003,keep:!0});d.plane("a200",.05,l,0,.365,.0646),[-.03,.03].forEach(ie=>e(.022,.022,.03,s.brass,ie,.447,.03,l)),[[-.03,s.rubber],[.03,i.std(9183002,.6)],[.085,s.whitePlastic]].forEach(([ie,Qe],le)=>n([[le===2?.02:ie*.4,.5,.045],[ie*.8,.485,.04],[ie,.46,.032]],.0075,Qe,l,{radial:8,seg:10}));let _=s.copperHot.clone(),b=[-.012,.012].map(ie=>e(.016,.74,.005,_,ie,-.02,.012,c,{keep:!0,cast:!1}));[-.03,.03].forEach((ie,Qe)=>e(.016,.06,.005,_,ie*.7,.36,.012,l,{cast:!1}));let y={},M=s.greyPlastic,T=s.rubber,R=i.std(9183002,.6),v=s.whitePlastic,A=(ie,Qe)=>{let le=0;ie.forEach(([ye,ee,ge,Te,Ze])=>{let Ye=ee===2?(Yo(le)+Yo(le+1))/2:Yo(le),ut=ee===2?Xf*2-.002:Xf-.002,ft=Qe*.076;e(.088,ut,.055,s.blackPlastic,ft,Ye,.0325,l,{r:.0025,cast:!1});let Q=Qe*.047,It=M;ge&&(It=i.std(4869975,.5,.05,{emissive:16753981,emissiveIntensity:0}),y[ge]={handle:It,level:null,pos:o(ft,Ye,.06),amps:ye}),e(.015,ee===2?ut*.72:.0125,.013,It,Q,Ye,.0655,ge?c:l,{r:.002,cast:!1,keep:!!ge}),d.plane("a"+ye,.02,l,Qe*.07,Ye+(ee===2?.009:0),.0603),Te&&d.plane("n"+ge,.05,l,Qe*.087,Ye-.011,.0603),Ze&&(d.plane(Ze,.026,l,Qe*.099,Ye,.0603),e(.007,.007,.004,Ze==="AFCI"?s.bluePlastic:s.yellowPlastic,Qe*.118,Ye,.062,l,{cast:!1}));for(let At=0;At<ee;At++){let B=le+At,S=Yo(B);e(.03,.007,.004,s.copper,Qe*.024+(B%2?.012:-.012)*.3,S,.016,l,{cast:!1});let ue=Qe*(.146+B%4*.0045),ce=.026+B%3*.008;n([[Qe*.121,S,.034],[Qe*.134,S+.002,ce+.004],[ue,S+.02,ce],[ue,.3+B%5*.01,ce],[Qe*(.1+B%6*.012),.492,.03+B%2*.04]],.0023,ee===2&&At===1?R:T,l,{radial:5,seg:14,cast:!1})}le+=ee})};A(Vf,-1),A(Wf,1),[-1,1].forEach(ie=>{e(.012,.52,.008,s.aluminum,ie*.176,-.02,.012,l,{cast:!1});for(let Qe=0;Qe<22;Qe++)t(.0034,.004,s.galv,ie*.176,.22-Qe*.0225,.018,l,{axis:"z",seg:6,cast:!1});for(let Qe=0;Qe<9;Qe++){let le=.2-Qe*.05;n([[ie*.176,le,.02],[ie*.164,le+.03,.05+Qe%3*.008],[ie*.162,.33,.055+Qe%3*.008],[ie*(.06+Qe*.012),.492,.07]],.0023,v,l,{radial:5,seg:12,cast:!1})}}),e(.36,.01,.004,s.aluminum,0,-.3,.008,l,{cast:!1}),e(.18,.012,.008,s.brass,-.05,-.43,.012,l,{cast:!1}),n([[-.1,-.43,.02],[-.13,-.47,.04],[-.13,-.56,.04],[-.2,-.75,.012],[-.7,-.82,.008]],.004,s.copper,l,{radial:6});let I=new yt;I.userData.keep=!0,c.add(I);let G=.0585,w=s.enclosure;e(.07,.98,.003,w,-.159,0,G,I),e(.07,.98,.003,w,.159,0,G,I),e(.056,.66,.003,w,0,-.02,G,I),e(.248,.062,.003,w,0,.459,G,I),e(.064,.094,.003,w,-.092,.381,G,I),e(.064,.094,.003,w,.092,.381,G,I),e(.248,.018,.003,w,0,.323,G,I),e(.248,.292,.003,w,0,-.344,G,I);let U=d.plane("rating",.2,I,0,.462,G+.002),N=new yt;N.userData.keep=!0,N.position.set(-p/2,0,f+.002),c.add(N),e(p,u,.003,s.enclosure,p/2,0,0,N);let H=d.plane("dir",.24,N,p/2,.02,-.003);H.rotation.y=Math.PI,e(.012,.06,.012,s.galv,p-.02,0,.006,N),N.rotation.y=-2.05;let $={15:s.whitePlastic,20:s.yellowPlastic,30:s.orangePlastic,40:s.rubber,50:s.rubber,60:s.rubber},z={15:r(16763274,{base:12170667,intensity:.7,dash:2.2,speed:.9,rest:0,gain:1,roughness:.6}),20:r(16758863,{base:13215008,intensity:.7,dash:2.2,speed:.9,rest:0,gain:1,roughness:.6})},q=.955,Z=0,W=(ie,Qe,le)=>{let ye=Z++,ee=-.17+ye%13*.028,ge=.028+ye%2*.042,Te=ie>=40?.0085:ie===30?.0065:.0052,Ze=[[ee,.5,ge],[ee,.66+ye%3*.03,ge],[ee*1.4,q-.06,ge+.05],[ee*1.6,q,ge+.16+ye%4*.03]],Ye=.3+ye%7*.035,ut=le==="south"?[[-.6,q,Ye],[-2.2,q,Ye],[-5.4,q,Ye+.2]]:le==="north"?[[.6,q,Ye],[1.6,q,Ye],[2.1,q,Ye+1.2],[2.1,q,5.5]]:le==="east"?[[ee*1.2,q,.9],[ee,q,3.2],[ee+.6,q,7.4]]:le==="up"?[[-.42,q+.1,.3],[-.42,q+.9,.34]]:[[.5,q,.2],[.62,q+.02,.02],[.62,q+.02,-.4]],ft=$[ie];Qe&&y[Qe]?(ft=r(16753981,{base:1513757,intensity:2.6,dash:1.6,speed:1.1,rest:0,gain:1,level:0}),y[Qe].level=ft.userData.level):z[ie]&&(ft=z[ie]),n([...Ze,...ut],Te,ft,l,{radial:7,density:9,tension:.35,cast:ye%3===0})},J=["south","north","south","east","north","south","north","south"];Vf.filter(ie=>!ie[2]).forEach((ie,Qe)=>W(ie[0],null,J[Qe%J.length])),Wf.filter(ie=>!ie[2]).forEach((ie,Qe)=>W(ie[0],null,J[(Qe+3)%J.length])),W(40,"range","up"),W(30,"dryer","south"),W(40,"hp","south"),W(30,"base","north"),W(30,"wh","south"),W(30,"ac","out"),W(50,"ev","east"),W(60,"spa","out"),W(40,"suite","north"),e(2.4,.02,.09,s.studs,-.4,q+.012,.5,l,{uv:!0,cast:!1});let me=o(.72,-.2,0);e(.06,.098,.062,s.bluePlastic,me.x,me.y,.031,l,{r:.004});let Ie=new yt;Ie.position.set(me.x+.012,me.y-.004,.118),Ie.rotation.set(.12,-.5,.06),Ie.userData.keep=!0,c.add(Ie),e(.034,.104,.024,s.whitePlastic,0,0,0,Ie,{r:.004}),e(.04,.118,.0016,s.galv,0,0,.0128,Ie),[.028,-.028].forEach(ie=>{e(.004,.011,.002,s.rubber,-.006,ie,.0125,Ie,{cast:!1}),e(.004,.011,.002,s.rubber,.006,ie,.0125,Ie,{cast:!1})}),[.012,-.012].forEach(ie=>{t(.0035,.004,s.brass,.0185,ie,-.004,Ie,{axis:"x",seg:8}),t(.0035,.004,s.aluminum,-.0185,ie,-.004,Ie,{axis:"x",seg:8})}),n([[me.x-.01,.62,.012],[me.x-.012,.2,.014],[me.x-.008,me.y+.05,.02]],.0058,s.greyPlastic,l,{radial:7});let qe=[];[[-1,s.aluminum],[1,s.aluminum]].forEach(([ie,Qe])=>{let le=o(me.x+ie*.03,me.y+.012*ie+.02,.085+(ie>0?.012:0));n([[me.x-.008+ie*.004,me.y+.045,.022],[me.x+ie*.02,me.y+.05,.05],[le.x,le.y+.016,le.z]],.0019,Qe,l,{radial:6,seg:12,cast:!1});let ye=t(.0078,.027,s.purple,le.x,le.y,le.z,c,{seg:12,keep:!0});qe.push(ye),t(.0086,.006,s.purple,le.x,le.y+.0135,le.z,l,{seg:12}),n([[le.x,le.y+.014,le.z],[le.x+ie*.012,le.y+.03,le.z+.012],[me.x+.012+ie*.026,me.y+.006*ie,.1],[me.x+.012+ie*.02,me.y-.004+.012*ie,.112]],.0017,s.copper,l,{radial:6,seg:14,cast:!1})}),i.bake(l);let $e={meter:o(2.8,1.5,-4.42),main:zr.clone().add(o(0,.39,.075)),bus:zr.clone().add(o(0,-.06,.02)),branch:zr.clone().add(o(-.076,Yo(3),.06)),range:zr.clone().add(y.range.pos),ev:zr.clone().add(y.ev.pos),spa:zr.clone().add(y.spa.pos),alu:zr.clone().add(o(me.x+.03,me.y+.03,.09)),afci:zr.clone().add(o(.099,Yo(.5),.06)),load:zr.clone().add(o(.33,.35,.03))},xt={fx:2.8,fz:-3.9,time:19.4,cut:0,ghost:0,ground:1,orbit:.012},re=[{...xt,radius:15,theta:3.42,phi:1.4,ty:2.8,fz:-4.2,dof:0,orbit:.03,time:15.5},{...xt,radius:3.4,theta:3.5,phi:1.72,ty:1.95,fz:-4.35,dof:.8,time:15.5},{...xt,radius:1.5,theta:.3,phi:1.44,ty:-1,dof:1.2},{...xt,radius:1.45,theta:-.28,phi:1.47,ty:-1.24,dof:1.3},{...xt,radius:1.75,theta:.34,phi:1.74,ty:-.98,fz:-3.8,dof:1.1},{...xt,radius:1.15,theta:1,phi:1.5,ty:-1.3,fx:3.45,dof:1},{...xt,radius:1.85,theta:.2,phi:1.6,ty:-.98,fx:3,fz:-3.8,dof:1}],fe=new Set(["range","dryer","ac"]),Ue="",we=0,Ve=["range","ev","spa"];return{name:"panel",group:c,anchors:$e,shots:re,hides:ie=>ie.sys.electrical?ie.sys.electrical.meshes:[],input(ie){if(ie&&(ie.on&&(fe=new Set(ie.on)),ie.amps!==void 0&&ie.service)){let Qe=`${Math.round(ie.amps)} A`,le=`of a ${ie.service} A service`;Qe+le!==Ue&&(Ue=Qe+le,d.set("mon",Qe,le,{ratio:ie.amps/ie.service}))}},light(ie){return ie===0?{pos:[2.2,3.4,-7.4],at:[2.8,1.6,-4.3],power:0}:ie===1?{pos:[2.2,3.4,-7.4],at:[2.8,1.6,-4.3],power:.55,fill:.3}:ie===5?{pos:[2.9,-.45,-2.2],at:[3.52,-1.45,-3.9],power:.8}:{pos:[1.5,-.5,-1.7],at:[2.8,-1.2,-3.9],power:1}},update({step:ie,k:Qe,t:le,dt:ye,snap:ee}){let ge=ee?1:1-Math.exp(-ye*5);we=ht(we,ie===3||ie===4?1:0,ge);let Te=Rt(0,1,we);I.position.set(.52*Te,-.99*Te,.2*Math.sin(Math.PI*Te)+.075*Te),I.rotation.set(-.13*Te,0,-.05*Te),_.emissiveIntensity=.08+.26*Te+(ie===3?.12*Math.sin(le*2.2):0),m.material.emissiveIntensity=ie===2?.4+.2*Math.sin(le*3):.06;let Ze=ie===3?1:ie===6?.35:.12;Object.values(z).forEach(Ye=>{Ye.userData.level.value=ht(Ye.userData.level.value,Ze,ge)}),Object.entries(y).forEach(([Ye,ut])=>{let ft=ie===4?Ve.includes(Ye)?1:0:ie===6&&fe.has(Ye)?1:0;ut.level&&(ut.level.value=ht(ut.level.value,ft,ge)),ut.handle.emissiveIntensity=ht(ut.handle.emissiveIntensity,ft*2.4,ge)}),qe.forEach((Ye,ut)=>{Ye.scale.setScalar(ie===5?1+.08*Math.sin(le*4+ut):1)}),U.visible=Te<.9}}}var yc=Math.atan2(3.6,5),qf=Math.cos(yc),Fm=Math.sin(yc),f_=3.6/5,Gu=9.9324,wa=i=>Gu-Math.abs(i)*f_,Fs=(i,e,t=0,n=new F)=>n.set(i*qf+e*Fm,Gu-i*Fm+e*qf,t),jt=.2,d_=6.805,vc=Array.from({length:13},(i,e)=>-3.6+e*.6),ti={z0:-2.4,z1:-.6,y0:4.35,y1:5.75},qo={x:5.466,y:5.723},xi={x:.75,z:.95,rx:.52,rz:.44},Fn={x:2.55,z:-.9},qa=4.78,Yf=6.8;function yr(i,e,t,n={}){let s=document.createElement("canvas");s.width=i,s.height=e,t(s.getContext("2d"),i,e);let r=new $n(s);return n.color!==!1&&(r.colorSpace=bn),r.wrapS=r.wrapT=n.clamp?ws:Qn,r.anisotropy=8,n.repeat&&r.repeat.set(n.repeat[0],n.repeat[1]),r}function Om({kit:i,H:e,tier:t}){let{box:n,cyl:s,tube:r,mats:a,std:o,atlas:c,V:l}=i,h=new yt;h.name="attic";let d=new yt;h.add(d);let p=t===0,u=Hn(17),f=new F,x=new F,g=(E,O)=>{let K=new yt;return K.position.set(0,Gu,0),K.rotation.set(0,O?Math.PI:0,-yc),E.add(K),K},m=g(d),_=g(d,!0),b=new cn({roughness:.86,map:yr(512,256,(E,O,K)=>{E.fillStyle="#b48d58",E.fillRect(0,0,O,K);let X=Hn(21);for(let de=0;de<1500;de++){let Re=X()*O,_e=X()*K,Y=12+X()*36,Xe=3+X()*8,Ke=X();E.fillStyle=Ke<.4?`rgba(118,80,38,${.22+X()*.3})`:Ke<.85?`rgba(218,182,124,${.22+X()*.3})`:`rgba(78,52,24,${.35+X()*.3})`,E.save(),E.translate(Re,_e),E.rotate((X()-.5)*1.2+(X()>.5?0:Math.PI/2)),E.fillRect(-Y/2,-Xe/2,Y,Xe),E.restore()}E.fillStyle="rgba(48,30,14,.85)",E.fillRect(0,0,O,2),E.fillRect(0,0,2,K)},{repeat:[1/2.4,1/1.2]})});b.userData.th=[.4];let y=o(16777215,.78,0,{map:yr(256,256,(E,O,K)=>{E.fillStyle="#cdae78",E.fillRect(0,0,O,K);let X=Hn(33);for(let de=0;de<70;de++){let Re=X()*K,_e=.06+X()*.12;E.strokeStyle=X()>.4?`rgba(122,84,40,${_e})`:`rgba(246,226,182,${_e})`,E.lineWidth=.6+X()*2.4,E.beginPath(),E.moveTo(0,Re);for(let Y=0;Y<=O;Y+=16)E.lineTo(Y,Re+Math.sin(Y*.024+de)*2.5);E.stroke()}for(let de=0;de<2;de++){let Re=X()*O,_e=X()*K,Y=E.createRadialGradient(Re,_e,0,Re,_e,9);Y.addColorStop(0,"rgba(96,58,24,.7)"),Y.addColorStop(1,"rgba(96,58,24,0)"),E.fillStyle=Y,E.fillRect(Re-12,_e-6,24,12)}},{repeat:[1/1.6,1/.4]})}),M=yr(256,256,(E,O,K)=>{E.fillStyle="#808080",E.fillRect(0,0,O,K);let X=Hn(5);for(let de=0;de<700;de++){let Re=X()*O,_e=X()*K,Y=2+X()*10,Xe=X()<.5?255:0;for(let Ke of[-O,0,O])for(let dt of[-K,0,K]){if(Re+Ke<-Y||Re+Ke>O+Y||_e+dt<-Y||_e+dt>K+Y)continue;let pt=E.createRadialGradient(Re+Ke,_e+dt,0,Re+Ke,_e+dt,Y);pt.addColorStop(0,`rgba(${Xe},${Xe},${Xe},0.22)`),pt.addColorStop(1,`rgba(${Xe},${Xe},${Xe},0)`),E.fillStyle=pt,E.fillRect(Re+Ke-Y,_e+dt-Y,Y*2,Y*2)}}},{color:!1,repeat:[2.5,2.5]}),T=o(13483416,1,0,{bumpMap:M,bumpScale:3}),R=yr(512,512,(E,O,K)=>{E.fillStyle="#000",E.fillRect(0,0,O,K);let X=Hn(8);E.strokeStyle="#fff",E.lineCap="round";for(let de=0;de<900;de++){let Re=X()*O,_e=X()*K,Y=X()*6.28,Xe=6+X()*24;E.globalAlpha=.3+X()*.6,E.lineWidth=.8+X()*1.4;let Ke=Re+Math.cos(Y)*Xe,dt=_e+Math.sin(Y)*Xe;E.beginPath(),E.moveTo(Re,_e),E.lineTo(Ke,dt);for(let pt=1;pt<5;pt++){let gt=pt/5,Pt=Re+(Ke-Re)*gt,St=_e+(dt-_e)*gt,rt=Xe*.32*(1-gt)+2;E.moveTo(Pt,St),E.lineTo(Pt+Math.cos(Y+.7)*rt,St+Math.sin(Y+.7)*rt),E.moveTo(Pt,St),E.lineTo(Pt+Math.cos(Y-.7)*rt,St+Math.sin(Y-.7)*rt)}E.stroke()}E.globalAlpha=.28,E.fillStyle="#fff",E.fillRect(0,0,O,K)},{color:!1,repeat:[4,4]}),v=o(15660543,.45,0,{alphaMap:R,transparent:!0,depthWrite:!1,emissive:11455487,emissiveIntensity:.12,side:li}),A=o(15923199,.35,0,{emissive:12572415,emissiveIntensity:.22}),I=o(13226970,.62,.02),G=o(16777215,.55,.3,{map:yr(128,128,(E,O,K)=>{E.fillStyle="#d7d5cf",E.fillRect(0,0,O,K),E.fillStyle="#3a3c40";for(let X=0;X<4;X++)for(let de=0;de<6;de++)E.fillRect(8+de*20+X%2*10,12+X*32,6,14);E.fillStyle="rgba(0,0,0,.18)",E.fillRect(0,0,O,3)},{repeat:[1/.16,1/.16]})}),w=o(14209734,.55,.12,{envMapIntensity:.4,map:yr(16,64,(E,O,K)=>{let X=E.createLinearGradient(0,0,O,0);X.addColorStop(0,"#5e6268"),X.addColorStop(.35,"#b9bec4"),X.addColorStop(.7,"#9a9fa6"),X.addColorStop(1,"#5e6268"),E.fillStyle=X,E.fillRect(0,0,O,K)},{repeat:[34,1]}),envMapIntensity:1.1}),U=o(11581636,.95,0,{bumpMap:M,bumpScale:1.2}),N=new ji({color:11849691,roughness:.08,metalness:0,transparent:!0,opacity:.72,clearcoat:1,clearcoatRoughness:.04,envMapIntensity:.75,bumpMap:M,bumpScale:.6});N.userData.th=[.1];let H=o(14673902,.38,0,{emissive:9413300,emissiveIntensity:.05}),$=new ji({roughness:.14,metalness:.25,clearcoat:1,clearcoatRoughness:.05,envMapIntensity:1.4,map:yr(512,384,(E,O,K)=>{E.fillStyle="#b9bfc8",E.fillRect(0,0,O,K);let X=10,de=6,Re=5,_e=(O-2*Re)/X,Y=(K-2*Re)/de;for(let Xe=0;Xe<X;Xe++)for(let Ke=0;Ke<de;Ke++){let dt=Re+Xe*_e+1.5,pt=Re+Ke*Y+1.5,gt=_e-3,Pt=Y-3,St=6;E.fillStyle="#0c1830",E.beginPath(),E.moveTo(dt+St,pt),E.lineTo(dt+gt-St,pt),E.lineTo(dt+gt,pt+St),E.lineTo(dt+gt,pt+Pt-St),E.lineTo(dt+gt-St,pt+Pt),E.lineTo(dt+St,pt+Pt),E.lineTo(dt,pt+Pt-St),E.lineTo(dt,pt+St),E.closePath(),E.fill(),E.fillStyle="rgba(150,165,190,.18)";for(let rt=1;rt<12;rt++)E.fillRect(dt,pt+Pt*rt/12,gt,.6);E.fillStyle="rgba(196,204,216,.75)";for(let rt=1;rt<=3;rt++)E.fillRect(dt+gt*rt/4-.7,pt,1.4,Pt)}},{clamp:!0})});$.userData.th=[.17];let z=new cn({color:11187390,roughness:.9,transparent:!0,depthWrite:!1,map:yr(256,256,(E,O,K)=>{let X=E.createLinearGradient(0,0,0,K);X.addColorStop(0,"rgba(214,224,232,0.2)"),X.addColorStop(.45,"rgba(214,224,232,0.42)"),X.addColorStop(1,"rgba(224,232,240,0.74)"),E.fillStyle=X,E.fillRect(0,0,O,K);let de=Hn(4);E.globalCompositeOperation="destination-out";for(let Re=0;Re<26;Re++){let _e=de()*O,Y=de()*K*.6,Xe=30+de()*140;E.lineWidth=1+de()*2.2,E.strokeStyle="rgba(0,0,0,.75)",E.beginPath(),E.moveTo(_e,Y),E.bezierCurveTo(_e+(de()-.5)*8,Y+Xe*.4,_e+(de()-.5)*8,Y+Xe*.7,_e+(de()-.5)*6,Y+Xe),E.stroke()}E.globalCompositeOperation="source-over";for(let Re=0;Re<260;Re++){let _e=de()*O,Y=K*Math.sqrt(de()),Xe=.8+de()*2.4;E.fillStyle=`rgba(250,252,255,${.4+de()*.5})`,E.beginPath(),E.arc(_e,Y,Xe,0,6.3),E.fill()}E.fillStyle="rgba(240,246,252,.8)",[[0,K],[O,K]].forEach(([Re,_e])=>{let Y=E.createRadialGradient(Re,_e,0,Re,_e,70);Y.addColorStop(0,"rgba(244,248,252,.9)"),Y.addColorStop(1,"rgba(244,248,252,0)"),E.fillStyle=Y,E.fillRect(Re-70,_e-70,140,140)})},{clamp:!0})});z.userData.th=[.5];let q=.3,Z=-3.3,W=5.88,J=3.6,me=new cn({roughness:.9,transparent:!0,depthWrite:!1,map:yr(512,324,(E,O,K)=>{let X=Y=>(q-Y)/(q-Z)*O,de=Y=>(W-Y)/(W-J)*K,Re=Hn(9),_e=(Y,Xe,Ke,dt,pt)=>{let gt=E.createLinearGradient(0,Xe,0,Xe+Ke);gt.addColorStop(0,`rgba(186,178,160,${pt*.32})`),gt.addColorStop(1,"rgba(206,196,176,0)"),E.fillStyle=gt,E.beginPath(),E.moveTo(Y-dt/2,Xe);for(let Pt=0;Pt<=8;Pt++)E.lineTo(Y-dt/2+Math.sin(Pt*1.7+Y)*1.5-dt*.2*Pt/8,Xe+Ke*Pt/8);for(let Pt=8;Pt>=0;Pt--)E.lineTo(Y+dt/2+Math.sin(Pt*1.3+Y)*1.5+dt*.15*Pt/8,Xe+Ke*Pt/8);E.closePath(),E.fill()};for(let Y=0;Y<22;Y++)_e(X(.1-Re()*3.2),0,30+Re()*120,4+Re()*16,.25+Re()*.35);[ti.z0-.06,ti.z1+.06].forEach(Y=>{_e(X(Y),de(5.86),90,18,.5),_e(X(Y)+(Re()-.5)*6,de(4.3),150,14,.55)});for(let Y=0;Y<14;Y++)_e(X(ti.z0+.05+Re()*1.7),de(4.3)+Re()*6,30+Re()*120,2+Re()*7,.2+Re()*.35);E.clearRect(X(ti.z1),de(ti.y1),X(ti.z0)-X(ti.z1),de(ti.y0)-de(ti.y1))},{clamp:!0})});me.userData.th=[.3];let Ie=o(16777215,.92,0,{map:yr(128,256,(E,O,K)=>{E.fillStyle="#4b3a29",E.fillRect(0,0,O,K);let X=Hn(12);for(let de=0;de<40;de++){let Re=X()*O;E.strokeStyle=X()>.5?`rgba(20,14,8,${.3+X()*.4})`:`rgba(120,98,70,${.2+X()*.3})`,E.lineWidth=.6+X()*1.8,E.beginPath(),E.moveTo(Re,0);for(let _e=0;_e<=K;_e+=16)E.lineTo(Re+Math.sin(_e*.05+de)*2,_e);E.stroke()}for(let de=0;de<26;de++){let Re=X()*O,_e=X()*K,Y=3+X()*10,Xe=8+X()*30,Ke=E.createRadialGradient(Re,_e,0,Re,_e,Xe);Ke.addColorStop(0,`rgba(14,10,6,${.55+X()*.35})`),Ke.addColorStop(1,"rgba(14,10,6,0)"),E.fillStyle=Ke,E.beginPath(),E.ellipse(Re,_e,Y,Xe,0,0,6.3),E.fill()}for(let de=0;de<7;de++)E.fillStyle=`rgba(206,200,188,${.45+X()*.3})`,E.fillRect(X()*O,X()*K,2+X()*6,4+X()*14)},{repeat:[1/.3,1/.3]})}),qe=a.galv,$e=o(13289149,.5,.12,{envMapIntensity:.35}),xt=new ji({color:2046544,roughness:.04,metalness:0,transparent:!0,opacity:.86,clearcoat:1,envMapIntensity:1.1});xt.userData.th=[.3];let re=i.flow(5220095,{base:924714,intensity:.35,dash:5,speed:.2,rest:.3,gain:1,roughness:.08}),fe=c([{key:"ruler",w:72,h:664,draw(E,O,K){E.fillStyle="#e6d9b0",E.fillRect(0,0,O,K);let X=de=>K-de/600*K;E.fillStyle="rgba(143,211,166,.9)",E.fillRect(0,X(445),O,X(400)-X(445)),E.fillStyle="#1a1c20",E.textAlign="right",E.textBaseline="middle";for(let de=0;de<=600;de+=10){let Re=X(de),_e=de%100===0?22:de%50===0?15:8;E.fillRect(0,Re-.8,_e,1.6)}E.font="700 18px ui-monospace, Menlo, monospace";for(let de=100;de<600;de+=100)de!==400&&E.fillText(String(de),O-3,X(de)+10);E.font="800 17px ui-monospace, Menlo, monospace",E.fillText("400",O-3,X(400)-12),E.fillText("R-50",O-3,X(400)-32),E.font="700 14px ui-monospace, Menlo, monospace",E.fillText("mm",O-3,X(565))}},{key:"bag",w:200,h:112,bg:"#f1efe8",draw(E,O,K){E.fillStyle="#f1efe8",E.fillRect(0,0,O,K),E.strokeStyle="#1a1c20",E.lineWidth=3,E.strokeRect(5,5,O-10,K-10),E.fillStyle="#1a1c20",E.textAlign="left",E.textBaseline="middle",E.font="700 30px ui-monospace, Menlo, monospace",E.fillText("SAMPLE A-1",16,36),E.font="500 17px ui-monospace, Menlo, monospace",E.fillText("ATTIC \xB7 LOOSE FILL",16,70),E.fillText("SEALED \xB7 FOR LAB",16,92)}},{key:"caution",w:300,h:150,draw(E,O,K){E.fillStyle="#e9c22e",E.fillRect(0,0,O,K),E.fillStyle="#16171a",E.fillRect(0,0,O,12),E.fillRect(0,K-12,O,12),E.textAlign="center",E.textBaseline="middle",E.font="800 44px ui-monospace, Menlo, monospace",E.fillText("CAUTION",O/2,46),E.font="700 20px ui-monospace, Menlo, monospace",E.fillText("POSSIBLE ASBESTOS",O/2,88),E.fillText("DO NOT DISTURB",O/2,116)}},{key:"pv",w:300,h:92,draw(E,O,K){E.fillStyle="#b8281c",E.fillRect(0,0,O,K),E.fillStyle="#f4f1ea",E.textAlign="center",E.textBaseline="middle",E.font="800 34px ui-monospace, Menlo, monospace",E.fillText("PV SYSTEM",O/2,32),E.font="600 17px ui-monospace, Menlo, monospace",E.fillText("DC CONDUCTORS \xB7 600 V",O/2,66)}}],{width:1024,emissive:.2});[m,_].forEach(E=>n(6.27,.012,7.55,b,3.165,-.008,0,E,{uv:!0,cast:!1})),n(.05,.012,7.55,a.blackPlastic,0,Gu-.03,0,d,{cast:!1});let Ue=new Ei;Ue.moveTo(-4.95,6.4),Ue.lineTo(4.95,6.4),Ue.lineTo(0,wa(0)-.02),Ue.lineTo(-4.95,6.4);let we=new Ks;we.moveTo(-.5,7.5),we.lineTo(.5,7.5),we.lineTo(.5,8.5),we.lineTo(-.5,8.5),we.lineTo(-.5,7.5),Ue.holes.push(we);let Ve=new pa(Ue);[[-3.775,0],[3.775,Math.PI]].forEach(([E,O])=>{let K=new Fe(Ve,b);K.position.set(0,0,E),K.rotation.y=O,K.receiveShadow=!0,d.add(K),[-4.2,-3.4,-2.6,-1.8,-1.05,1.05,1.8,2.6,3.4,4.2].forEach(X=>{let de=wa(X)-.06;n(.038,de-6.4,.089,y,X,(de+6.4)/2,E+Math.sign(-E)*.046,d,{uv:!0,cast:!1})}),[7.45,8.55].forEach(X=>n(1.12,.038,.089,y,0,X,E+Math.sign(-E)*.046,d,{uv:!0,cast:!1}))});let ie=(E,O,K,X,de,Re=d)=>n(Math.hypot(K-E,X-O),.089,.038,y,(E+K)/2,(O+X)/2,de,Re,{uv:!0,rot:[0,0,Math.atan2(X-O,K-E)]}),Qe=(.014+.089)/qf;vc.forEach(E=>{n(6.76,.089,.038,y,3.38,-.0585,E,m,{uv:!0}),n(6.2,.089,.038,y,3.1,-.0585,E,_,{uv:!0}),n(9.9,.089,.038,y,0,6.4+.0445,E,d,{uv:!0,cast:!1}),[-1,1].forEach(O=>{ie(O*1.667,6.48,O*2.5,wa(2.5)-Qe+.02,E),ie(O*1.667,6.48,O*.08,wa(0)-Qe-.04,E),[[O*2.5,wa(2.5)-Qe+.01]].forEach(([K,X])=>[-1,1].forEach(de=>n(.16,.12,.002,$e,K,X,E+de*.02,d,{cast:!1})))}),[-1,1].forEach(O=>n(.2,.14,.002,$e,0,wa(0)-Qe-.01,E+O*.02,d,{cast:!1}))}),[-1,1].forEach(E=>n(.038,.089,7.5,y,E*2.06,7.32,0,d,{uv:!0,cast:!1}));for(let E=0;E<vc.length-1;E++){let O=vc[E]+.3;n(1.12,.004,.54,I,5.66,-.066,O,m,{cast:!1}),[-1,1].forEach(K=>n(1.12,.052,.004,I,5.66,-.04,O+K*.27,m,{cast:!1})),[-.13,0,.13].forEach(K=>n(1.12,.01,.03,I,5.66,-.07,O+K,m,{cast:!1}));for(let K=0;K<3;K++)[-1,1].forEach(X=>n(.012,.002,.01,a.galv,5.25+K*.4,-.016,O+X*.272,m,{cast:!1}))}n(.33,.008,8.9,G,5.27,5.876,0,d,{uv:!0,cast:!1}),[-4.455,4.455].forEach(E=>n(.33,.36,.02,a.whitePlastic,5.27,6.05,E,d,{cast:!1}));let le=(...E)=>{let O=[];for(let K=0;K<E.length-1;K++){let[X,de]=E[K],Re=E[K+1][0];for(let _e=X;_e<Re-1e-6;_e+=de)O.push(_e)}return O.push(E[E.length-1][0]),O},ye=p?le([-4.95,.4],[-.1,.08],[1.7,.2],[4,.1],[4.95]):le([-4.95,.25],[-.1,.04],[1.65,.12],[4,.06],[4.95]),ee=p?le([-3.75,.25],[.2,.08],[1.7,.3],[3.75]):le([-3.75,.15],[.25,.04],[1.7,.2],[3.75]),ge=(E,O)=>.013*Math.sin(E*7.1+Math.sin(O*3.3)*1.7)+.01*Math.sin(O*8.3+E*2.1)+.006*Math.sin(E*23+O*19)+.004*Math.sin(E*41-O*37),Te=(E,O)=>{let K=Math.min(Yf+ge(E,O),wa(E)-.095),X=(E-xi.x)/xi.rx,de=(O-xi.z)/xi.rz,Re=Math.atan2(de,X),_e=Math.sqrt(X*X+de*de)+.05*Math.sin(Re*5)+.03*Math.sin(Re*13+1)+.02*Math.sin(Re*29+E*40);return _e<1.4&&(K=ht(6.43,K+.05*Math.max(0,1-Math.abs(_e-1.06)/.3)+.02*Math.sin(E*37+O*29),Rt(.7,1,_e))),Math.max(K,6.405)};{let E=ye.length,O=ee.length,K=new Float32Array(E*O*3),X=new Float32Array(E*O*2),de=[];for(let Y=0;Y<O;Y++)for(let Xe=0;Xe<E;Xe++){let Ke=Y*E+Xe;K.set([ye[Xe],Te(ye[Xe],ee[Y]),ee[Y]],Ke*3),X.set([ye[Xe],ee[Y]],Ke*2)}for(let Y=0;Y<O-1;Y++)for(let Xe=0;Xe<E-1;Xe++){let Ke=Y*E+Xe,dt=Ke+1,pt=Ke+E,gt=pt+1;de.push(Ke,pt,dt,dt,pt,gt)}let Re=new tn;Re.setAttribute("position",new Jt(K,3)),Re.setAttribute("uv",new Jt(X,2)),Re.setIndex(de),Re.computeVertexNormals();let _e=new Fe(Re,T);_e.receiveShadow=!0,_e.castShadow=!1,d.add(_e)}let Ze=l(3.62,6.7,-1.32),Ye=new yt;Ye.position.copy(Ze),Ye.rotation.y=-2.2,d.add(Ye),n(.07,.6,.004,a.whitePlastic,0,0,-.003,Ye,{cast:!1}),fe.plane("ruler",.065,Ye,0,0,0),s(.002,.62,a.galv,0,.05,-.008,Ye,{seg:5,cast:!1}),n(.26,.17,.26,$e,Fn.x,6.485,Fn.z,d),s(.06,.12,$e,Fn.x,6.62,Fn.z,d,{seg:16});let ut=r([[Fn.x,6.6,Fn.z],[Fn.x+.04,6.92,Fn.z+.03],[Fn.x+.3,7,Fn.z+.2],[Fn.x+.62,6.93,Fn.z+.38],[Fn.x+.85,6.87,Fn.z+.45]],.07,w,h,{radial:14,density:30,keep:!0}),ft=l(Fn.x+.92,6.88,Fn.z+.48),Q=Fs(qa,-.1,Fn.z),It=r([[Fn.x,6.6,Fn.z],[Fn.x+.06,6.9,Fn.z],[Fn.x+.55,6.99,Fn.z+.02],[Q.x-.22,6.92,Fn.z],[Q.x,Q.y,Fn.z]],.07,w,h,{radial:14,density:30,keep:!0});s(.075,.13,$e,qa,-.06,Fn.z,m,{seg:18}),[[Fn.x,6.66,Fn.z]].forEach(([E,O,K])=>s(.077,.02,$e,E,O,K,d,{seg:18,cast:!1})),n(.46,.006,.44,qe,qa-.02,jt+.003,Fn.z,m),s(.08,.1,qe,qa,jt+.05,Fn.z,m,{seg:18}),n(.3,.13,.28,qe,qa-.01,jt+.15,Fn.z,m,{r:.02}),n(.05,.08,.26,a.blackPlastic,qa+.135,jt+.1,Fn.z,m,{cast:!1}),s(.5,.058,o(8021318,.95,.1),xi.x,6.431,xi.z,d,{seg:32,cast:!1}).scale.set(xi.rx/.5*1.05,1,xi.rz/.5*1.05);{let E=p?450:1e3,O=new Nl(1,0),K=new Mi(O,o(16777215,.7,.35,{envMapIntensity:1.2}),E),X=new kt,de=new Vn,Re=new Ui,_e=new F,Y=new F,Xe=new Et,Ke=[10517060,12096600,8216632,10262154,12756592,9075294];for(let dt=0;dt<E;dt++){let pt=u()*6.283,gt=Math.sqrt(u())*1.02;_e.set(xi.x+Math.cos(pt)*gt*xi.rx,6.462+u()*.008,xi.z+Math.sin(pt)*gt*xi.rz);let Pt=.006+u()*.008;Y.set(Pt*(1+u()*.8),Pt*.5,Pt*(1+u()*.8)),de.setFromEuler(Re.set(u()*.6,u()*6.28,u()*.6)),X.compose(_e,de,Y),K.setMatrixAt(dt,X),K.setColorAt(dt,Xe.setHex(Ke[u()*Ke.length|0]))}K.castShadow=!1,K.receiveShadow=!0,h.add(K)}let B=l(xi.x-.59,0,xi.z+.47);B.y=Te(B.x,B.z)+.016;let S=new yt;S.position.copy(B),S.rotation.set(.05,.5,-.04),d.add(S),n(.14,.022,.18,a.vermiculite,0,0,.01,S,{r:.01,cast:!1}),n(.16,.03,.22,a.poly,0,.002,0,S,{r:.012,cast:!1}),n(.16,.006,.012,a.bluePlastic,0,.012,-.095,S,{cast:!1});let ue=fe.plane("bag",.12,S,0,.018,.03);ue.rotation.x=-Math.PI/2;let ce=l(xi.x+.08,0,xi.z+.6);ce.y=Te(ce.x,ce.z)+.2;let Me=new yt;Me.position.copy(ce),Me.rotation.set(0,-2.3,.05),d.add(Me),n(.174,.09,.002,a.whitePlastic,0,.02,-.0015,Me,{cast:!1}),fe.plane("caution",.17,Me,0,.02,0),s(.0022,.42,a.galv,0,-.14,-.004,Me,{seg:5,cast:!1});let st=[];for(let E=2.4;E<6;E+=p?.45:.3)for(let O=-3.5;O<1.4;O+=p?.24:.16){let K=O+(u()-.5)*.05;vc.some(X=>Math.abs(X-K)<.035)||st.push([E+(u()-.5)*.04,K,.024+u()*.012])}let nt=st.length,Oe=new Mi(new vn(.0016,.0016,1,5),a.galv,nt),ze=new Mi(new Nr(1,0),A,nt),je=new kt,vt=new Vn().setFromEuler(new Ui(0,0,-yc)),L=new F,ae=[];st.forEach(([E,O,K],X)=>{Fs(E,-.014-K/2,O,f),je.compose(f,vt,L.set(1,K,1)),Oe.setMatrixAt(X,je),ae.push(Fs(E,-.014-K-.004,O))}),Oe.castShadow=!1,ze.castShadow=!1,h.add(Oe,ze);let he=st.map(()=>.8+u()*.6),Se=-1,Ae=E=>{if(!(Math.abs(E-Se)<.004)){Se=E;for(let O=0;O<nt;O++){let K=he[O]*(.15+.85*E),X=.0055*K;Fs(st[O][0],-.014-st[O][2]*(.4+.25*E),st[O][1],f),je.compose(f,vt,L.set(X,st[O][2]*.32*(.3+.7*E)+X,X)),ze.setMatrixAt(O,je)}ze.instanceMatrix.needsUpdate=!0}},k=new Fe(new an(4,5),v);k.rotation.x=Math.PI/2,k.position.set(4,-.0165,-1.1),k.renderOrder=2,k.userData.keep=!0;let De=g(h);De.add(k),De.userData.keep=!0;let xe=[2.455,3.905],Be=[-1.6,-.55,.5,1.55],Ne=jt+.135,se=Ne+.036;xe.forEach(E=>Be.forEach(O=>{n(1.3,.03,.95,a.enclosureDark,E,Ne+.015,O,m,{cast:!1}),n(1.29,.004,.94,$,E,se-.004,O,m,{cast:!1}),[-1,1].forEach(K=>{n(1.32,.036,.016,a.aluminum,E,Ne+.018,O+K*.477,m,{cast:!1}),n(.016,.036,.97,a.aluminum,E+K*.652,Ne+.018,O,m,{cast:!1})})}));let at=Be[0]-.49,Je=Be[3]+.49;xe.forEach(E=>[-.36,.36].forEach(O=>{let K=E+O;n(.04,.045,Je-at+.14,a.aluminum,K,Ne-.0225,(at+Je)/2,m,{cast:!1});for(let X=at+.1;X<Je;X+=.52)n(.05,.05,.04,a.aluminum,K,jt+.025,X,m,{r:.006,cast:!1}),n(.012,.045,.04,a.aluminum,K+.02,jt+.07,X,m,{cast:!1}),s(.007,.012,a.galv,K+.03,jt+.025,X,m,{axis:"x",seg:6,cast:!1});[at-.012,Je+.012].forEach(X=>n(.045,.04,.02,a.aluminum,K,Ne+.02,X,m,{cast:!1}));for(let X=0;X<3;X++){let de=(Be[X]+Be[X+1])/2;n(.04,.008,.045,a.aluminum,K,se+.003,de,m,{cast:!1}),s(.006,.006,a.galv,K,se+.009,de,m,{seg:6,cast:!1})}}));let mt={s:4.74,z:at+.25};n(.2,.09,.16,a.greyPlastic,mt.s,jt+.06,mt.z,m,{r:.008}),n(.24,.015,.2,a.aluminum,mt.s,jt+.01,mt.z,m,{cast:!1});let Ft=fe.plane("pv",.13,m,mt.s,jt+.1065,mt.z);Ft.rotation.x=-Math.PI/2,Ft.rotation.z=Math.PI/2,[[.03,-.004],[-.03,.004]].forEach(([E,O])=>r([[xe[1]+.2,Ne-.01,Be[0]+E*3],[xe[1]+.5,Ne-.025+O,Be[0]-.3+E],[mt.s-.15,jt+.07,mt.z+.25+E],[mt.s-.04,jt+.07,mt.z+.06+E]],.004,a.rubber,m,{radial:5,cast:!1})),r([[mt.s+.1,jt+.05,mt.z],[mt.s+.2,jt+.05,mt.z],[mt.s+.26,jt+.04,mt.z]],.012,a.conduit,m,{radial:8,cast:!1}),s(.06,.07,a.blackPlastic,mt.s+.3,jt+.03,mt.z,m,{r2:.025,seg:14,cast:!1});let Yt=new Fe(new an(ti.z1-ti.z0-.14,ti.y1-ti.y0-.14),z);Yt.position.set(5.037,(ti.y0+ti.y1)/2,(ti.z0+ti.z1)/2),Yt.rotation.y=Math.PI/2,Yt.renderOrder=2,Yt.userData.keep=!0,h.add(Yt);let hn=new Fe(new an(q-Z,W-J),me);hn.position.set(5.1135,(W+J)/2,(q+Z)/2),hn.rotation.y=Math.PI/2,hn.renderOrder=2,d.add(hn),n(.272,.062,2.045,Ie,5.141,ti.y0-.03,(ti.z0+ti.z1)/2,d,{uv:!0}),n(.05,.03,.22,Ie,5.25,ti.y0-.068,ti.z1+.05,d,{uv:!0,rot:[.3,.2,-.5],cast:!1});let Pn=g(h);Pn.userData.keep=!0;let sn=(E,O,K,X,de)=>{let Re=new Ei;Re.moveTo(E[0][0],E[0][1]),E.slice(1).forEach(Xe=>Re.lineTo(Xe[0],Xe[1]));let _e=new Rs(Re,{depth:K-O,steps:de?44:1,bevelEnabled:!1,curveSegments:1});if(de){let Xe=_e.attributes.position;for(let pt=0;pt<Xe.count;pt++){let gt=Xe.getX(pt),Pt=Xe.getY(pt),St=Xe.getZ(pt);Pt>jt+.03&&Xe.setY(pt,Pt+de(gt,St)*Rt(jt+.03,jt+.12,Pt)),gt>d_+.03&&Xe.setX(pt,gt+Math.abs(de(gt+3,St*1.7))*1.6)}_e.deleteAttribute("normal"),_e.deleteAttribute("uv"),_e=Tm(_e,1e-4),_e.computeVertexNormals();let Ke=_e.attributes.position,dt=new Float32Array(Ke.count*2);for(let pt=0;pt<Ke.count;pt++)dt[pt*2]=Ke.getZ(pt)*.6,dt[pt*2+1]=Ke.getX(pt)*.6;_e.setAttribute("uv",new Jt(dt,2))}let Y=new Fe(_e,X);return Y.position.z=O,Y.castShadow=!0,Y.receiveShadow=!0,Pn.add(Y),Y},In=jt+.016,yn=(E,O)=>.025*Math.sin(O*2.3+E*3)+.015*Math.sin(O*5.7-E*2)+.008*Math.sin(O*13+E*11);sn([[4.62,In],[4.9,jt+.1],[5.3,jt+.17],[5.8,jt+.19],[5.98,jt+.17],[6.07,jt+.11],[6.12,jt+.05],[6.14,In]],-4.35,4.5,U,yn),sn([[.06,In],[.2,jt+.09],[.6,jt+.12],[1.55,jt+.13],[1.72,jt+.08],[1.78,In]],-4.5,4.5,U,yn),[[-4.5,at-.5],[Je+.5,4.5]].forEach(([E,O])=>sn([[1.5,In],[1.5,jt+.12],[3,jt+.14],[4.95,jt+.16],[4.95,In]],E,O,U,yn)),sn([[6.06,jt+.002],[6.07,jt+.045],[6.4,jt+.05],[6.42,jt+.002]],-4.5,4.5,xt),sn([[6.3,jt],[6.36,jt+.07],[6.46,jt+.12],[6.68,jt+.14],[6.84,jt+.12],[6.92,jt+.03],[6.935,-.08],[6.9,-.17],[6.86,-.13],[6.84,.02],[6.81,.17],[6.79,jt]],-4.5,4.5,N,(E,O)=>.04*Math.sin(O*1.7+1)+.03*Math.sin(O*4.9+E*6)+.018*Math.sin(O*11.3+2+E*9)+.01*Math.sin(O*29+E*13));{let E=new an(1.42,.15),O=E.attributes.uv;for(let X=0;X<O.count;X++)O.setX(X,4.68+O.getX(X)*1.42);let K=new Fe(E,re);K.rotation.x=-Math.PI/2,K.position.set(4.68+.71,jt+.004,-4.425),K.receiveShadow=!0,Pn.add(K)}i.bake(Pn);let C=new yt;C.position.set(qo.x,qo.y,0),C.userData.keep=!0,h.add(C),n(.135,.05,8.9,N,0,.12,0,C,{cast:!1});let be=p?60:130,Le=new Kr(.028,1,7,1,!0);Le.rotateX(Math.PI),Le.translate(0,-.5,0);let lt=new Mi(Le,N,be),ct=[];for(let E=0;E<be;E++){let O=-4.42+E/(be-1)*8.84+(u()-.5)*.05,K=Math.max(0,1-Math.abs(O+1.5)/2.2),X=.06+u()*u()*(.55+.5*K),de=.7+u()*.9;f.set((u()-.5)*.08,.004,O),je.compose(f,vt.identity(),L.set(de,X,de)),lt.setMatrixAt(E,je),ct.push([f.x,X,O])}vt.setFromEuler(new Ui(0,0,-yc)),lt.castShadow=!1,C.add(lt),i.bake(C);let Gt=p?110:220,Dt=new Nr(1,1);{let E=Dt.attributes.position,O=new Map;for(let K=0;K<E.count;K++){let X=E.getX(K).toFixed(3)+E.getY(K).toFixed(3)+E.getZ(K).toFixed(3);O.has(X)||O.set(X,.84+u()*.3);let de=O.get(X);E.setXYZ(K,E.getX(K)*de,E.getY(K)*de,E.getZ(K)*de)}Dt.computeVertexNormals()}let ve=new Mi(Dt,H,Gt);{let E=new Vn,O=new Ui,K=(de,Re)=>{E.setFromEuler(O.set(u()*6.3,u()*6.3,u()*6.3)),je.compose(f,E,L.set(Re*(.9+u()*.25),Re*(.8+u()*.2),Re*(.9+u()*.25))),ve.setMatrixAt(de,je)},X=()=>Math.pow(u(),.6);for(let de=0;de<Gt;de++){let Re=.0075+u()*.01,_e=de/Gt;if(_e<.3){let Y=-4.2+Math.floor(u()*9)*1+(u()-.5)*.8*X();f.set(qo.x+(u()-.5)*.09,qo.y+.1+Re*.8+(u()<.3?Re*1.4:0),Y)}else if(_e<.62){let Y=xe[u()<.5?0:1],Xe=Be[u()*4|0];Fs(Y+.63-u()*.03-(u()<.35?Re*2:0),se+Re*.85,Xe+(u()-.5)*.9,f)}else if(_e<.82)Fs(6.55+u()*.22,jt+Re*.8,-4.3+u()*8.6,f);else{let Y=.5+u()*5.8,Xe=-4.2+u()*8.4,Ke=Y>xe[0]-.65&&Y<xe[1]+.65&&Xe>at&&Xe<Je;Fs(Y,(Ke?se:jt)+Re*.8,Xe,f)}K(de,Re)}}ve.castShadow=!0,ve.receiveShadow=!0,h.add(ve);let We=.4,ot=6.75,Lt=4.4,Ot=o(16777215,.5,0,{alphaTest:.35,map:yr(1024,1024,(E,O,K)=>{let X=Hn(41),de=Y=>(Y-We)/(ot-We)*O,Re=Y=>(Y+Lt)/(2*Lt)*K,_e=(Y,Xe)=>{let Ke=Y>xe[0]-.68&&Y<xe[1]+.68&&Xe>at&&Xe<Je,dt=xe.some(pt=>Y>pt+.65&&Y<pt+.95)&&Xe>at&&Xe<Je;return Ke?.06:dt?1:.3+.7*Rt(5.3,6.4,Y)};for(let Y=0;Y<3e4;Y++){let Xe=We+X()*(ot-We),Ke=-Lt+X()*2*Lt;if(X()>_e(Xe,Ke))continue;let dt=de(Xe),pt=Re(Ke),gt=1.3+X()*X()*2.6;E.fillStyle="rgba(96,108,122,1)",E.beginPath(),E.arc(dt+gt*.35,pt+gt*.3,gt,0,6.3),E.fill(),E.fillStyle=X()>.3?"#dfe6ec":"#c4ced8",E.beginPath(),E.arc(dt,pt,gt*.92,0,6.3),E.fill()}},{clamp:!0})}),xn=new Fe(new an(ot-We,2*Lt),Ot);xn.rotation.x=-Math.PI/2,xn.position.set((We+ot)/2,jt+.004,0),xn.receiveShadow=!0;let on=g(h);on.userData.keep=!0,on.add(xn);let Kt=i.particles(260,{size:.06,color:14674687,opacity:.5,gain:.55}),dn=i.particles(240,{size:.014,color:12574975,gain:1.1});h.add(Kt,dn);let On=Kt.userData.n,P=dn.userData.n,te=Float32Array.from({length:Math.max(On,P)*4},()=>u()),Ce=Array.from({length:P},(E,O)=>O*7919%nt),Ee=ct.map((E,O)=>[E[1],O]).sort((E,O)=>O[0]-E[0]).slice(0,40).map(E=>E[1]);i.bake(d);let Pe={roof:Fs(6.3,jt+.03,-1.2),ice:Fs(6.62,jt+.17,-2),rain:Fs(4.75,-.05,-.35),ins:l(Ze.x,Yf+.02,Ze.z),fan:Fs(qa,-.16,Fn.z),verm:l(xi.x,6.48,xi.z),solar:Fs(mt.s,jt+.12,mt.z),win:l(5.16,4.36,-1)},_t={cut:0,ghost:0,ground:1,season:0,snowfall:0,melt:0,icicles:0,orbit:.012,time:19.4},Ct=[{..._t,radius:10,theta:2.3,phi:.62,fx:3.75,ty:7.55,fz:-.6,dof:0,orbit:.02,time:13,season:.5,snowfall:0,narrow:{radius:8.5}},{..._t,radius:3.6,theta:2.15,phi:1.02,fx:5.4,ty:6.15,fz:-2,dof:.8,time:19.4,snowfall:1,narrow:{radius:3.1}},{..._t,radius:2.3,theta:3.95,phi:1.55,fx:3.45,ty:7,fz:-.3,dof:1,narrow:{radius:1.7,fx:3.75,ty:7.1,fz:-.3}},{..._t,radius:1.75,theta:4.25,phi:1.33,fx:3.75,ty:6.92,fz:-1.15,dof:1,narrow:{radius:1.35,fx:3.8,ty:7,fz:-1.05}},{..._t,radius:2.6,theta:3.95,phi:.88,fx:xi.x-.2,ty:6.55,fz:xi.z+.25,dof:1,narrow:{radius:2.2,fx:xi.x+.05,fz:xi.z+.25}},{..._t,radius:2.7,theta:2.1,phi:1.1,fx:3.85,ty:7.5,fz:-1.5,dof:.9,narrow:{radius:2.4}},{..._t,radius:4.1,theta:1.92,phi:1.54,fx:5.15,ty:4.95,fz:-1.3,dof:.9,snowfall:1,narrow:{radius:3.5}}],j=0,ne=1,pe=Kt.userData.pos,Ge=dn.userData.pos;return{name:"attic",group:h,anchors:Pe,shots:Ct,hides:E=>{let O=E||e,K=[];return O.sys.asbestos&&K.push(...O.sys.asbestos.meshes),O.sys.solar&&O.sys.solar.meshes[0]&&K.push(O.sys.solar.meshes[0].parent),O.extra&&O.extra.snowR&&K.push(O.extra.snowR),K},light(E){return E===0?{pos:[8.6,15.5,-4.2],at:[3.9,7.4,-.8],power:1.35,fill:0}:E===1?{pos:[7.9,9,-4],at:[5.45,6.1,-2],power:.6,fill:.3}:E===2?{pos:[1.4,8.4,-2.4],at:[3.9,7.2,-.6],power:.9,fill:.6}:E===3?{pos:[1.4,8.5,-2.4],at:[4.1,6.85,-.7],power:.9,fill:.6}:E===4?{pos:[.6,8.6,-.6],at:[xi.x,6.45,xi.z],power:.9,fill:.5}:E===5?{pos:[6.6,10.2,-3.6],at:[3.8,7.55,-1.4],power:.8,fill:.35}:{pos:[7.6,6.6,-3.6],at:[5.1,5,-1.4],power:.9,fill:.2}},update({step:E,q:O,t:K,dt:X,snap:de,reduce:Re}){let _e=de?1:1-Math.exp(-X*2.6);j=ht(j,E>=1?1:0,_e);let Y=Rt(0,1,j);Pn.visible=C.visible=Y>.01,Pn.scale.y=Math.max(.001,Y),C.scale.y=Math.max(.001,Y),ve.visible=on.visible=E===0,Yt.visible=E>=1;let Xe=E===2?1-Rt(.4,.8,O):E<2?1:0;ne=ht(ne,Xe,de?1:1-Math.exp(-X*6)),v.opacity=.75*ne,De.visible=ze.visible=ne>.01,Ae(ne),ut.visible=E<=2,It.visible=E>=3;let Ke=Re?3.3:K,dt=0,pt=0;if(E===2){let gt=Rt(.35,.65,O),Pt=Math.round(On*.7);for(let rt=0;rt<Pt;rt++){let wt=(Ke*(.16+te[rt]*.08)+te[rt+On])%1,Ht=wt*wt;pe[dt*3]=ft.x+.06+wt*.9+Math.sin(Ke*.7+rt)*.05*wt,pe[dt*3+1]=Math.min(ft.y+.03+wt*.9,wa(ft.x+.06+wt*.9)-.08)+.02*Math.sin(rt),pe[dt*3+2]=ft.z+(te[rt+2*On]-.5)*Ht*2.2,dt++}let St=Math.round(P*gt);for(let rt=0;rt<St;rt++){let wt=ae[Ce[rt]],Ht=.9+te[rt]*1.1,Dn=(Ke+te[rt+P]*Ht)%Ht/Ht,kn=Math.max(0,Dn-.6)/.4,qn=9.8*(kn*Ht*.4)**2*.5;Ge[pt*3]=wt.x,Ge[pt*3+1]=Math.max(wt.y-.004-qn,Yf-.01),Ge[pt*3+2]=wt.z,pt++}}else if(E===3)for(let gt=0;gt<On;gt++){let Pt=te[gt]*12|0,St=vc[Pt]+.3+(te[gt+On]-.5)*.4,rt=(Ke*(.07+te[gt+2*On]*.04)+te[gt+3*On])%1,wt=6.5-rt*6.45,Ht=wt>5.1?-.04:-.04-.06*Math.sin(te[gt]*9+rt*6)-.04;Fs(wt,wt>6.15?-.04-(wt-6.15)*.6:Ht,St,x),pe[dt*3]=x.x,pe[dt*3+1]=x.y,pe[dt*3+2]=x.z,dt++}if(E===1||E===6){for(let gt=0;gt<Ee.length&&pt<P;gt++){let Pt=ct[Ee[gt]],St=1.2+te[gt]*1.6,rt=(Ke+te[gt+P]*St)%St/St,wt=Math.max(0,rt-.55)/.45,Ht=4.9*(wt*St*.45)**2;Ge[pt*3]=qo.x+Pt[0],Ge[pt*3+1]=qo.y-Pt[1]*Y-.01-Ht,Ge[pt*3+2]=Pt[2],pt++}if(E===6)for(let gt=0;gt<16&&pt<P;gt++){let Pt=gt<6?ti.z0+.04+te[gt]*.1:gt<12?ti.z1-.04-te[gt]*.1:ti.z0+.3+te[gt]*1.2,St=.8+te[gt+5]*1.2,rt=(Ke+te[gt+P]*St)%St/St,wt=Math.max(0,rt-.5)/.5;Ge[pt*3]=5.165,Ge[pt*3+1]=Math.max(ti.y1+.02-4.9*(wt*St*.5)**2,ti.y0+.002),Ge[pt*3+2]=Pt,pt++}}Kt.material.size=E===2?.14:.07,Kt.material.opacity=E===2?.5:.85,dn.material.size=E===2?.014:.03,Kt.geometry.setDrawRange(0,dt),dn.geometry.setDrawRange(0,pt),Kt.visible=dt>0,dn.visible=pt>0,dt&&(Kt.geometry.attributes.position.needsUpdate=!0),pt&&(dn.geometry.attributes.position.needsUpdate=!0)}}}var Mn=.6,Ra=.42,Fi=Ra+.004,Wi=.86,Os=-4.25,$f=-3.4,sa=13.62,Kf=Math.atan2(.26,sa),Bm=Math.cos(Kf),Hm=Math.sin(Kf),sr=-18.2,rr=-3.95,ar=.19,ku=.15,Zo=.75,Yu=.12,Vu=18,An=.075,Wu=.092,Za=.116,zm=.096,p_=11;var Gm=2,ta=[4.62,6.87],na=[6.95,9.05],or=-14.05,lr=-18.95,ia=-4.3,bs=1.3,Xi=1.6,di=.7,_r=-2.9,$a=i=>Yu+i*Zo,Oi=(i,e=0,t=0,n=new F)=>n.set(Mn+e,$f+t*Bm-i*Hm,Os-t*Hm-i*Bm),Xu=new Et;function Bs(i,e){Xu.set(e);let t=i.attributes.position.count,n=new Float32Array(t*3);for(let s=0;s<t;s++)n[s*3]=Xu.r,n[s*3+1]=Xu.g,n[s*3+2]=Xu.b;return i.setAttribute("color",new Jt(n,3)),i}function Jf(i,e,t,n=14){let s=[];i.forEach((o,c)=>{let l=i[(c+1)%i.length];if(Math.abs(o[0]-l[0])+Math.abs(o[1]-l[1])<1e-6)return;let h=new Ll([new it(o[1],o[0]),new it(l[1],l[0])],n,0,Math.PI).toNonIndexed();h.rotateX(-Math.PI/2),s.push(Bs(h,e[c]))});let r=new pa(new Ei(i.map(([o,c])=>new it(-o,c)))).toNonIndexed();r.rotateY(-Math.PI/2);let a=r.clone();return a.scale(1,-1,1),s.push(Bs(r,t),Bs(a,t)),Ss(s)}var Zf=(i,e,t,n,s,r,a)=>Jf([[0,e],[0,t],[i,t],[i,e]],[r,n,r,s],r,a);function km({kit:i,M:e,Ug:t,tier:n,reduce:s}){let{box:r,cyl:a,tube:o,mats:c,atlas:l,V:h}=i,d=new yt;d.name="sewer";let p=new yt;d.add(p);let u=Hn(1958),f=(V,et,Mt={})=>i.std(16777215,V,et,{vertexColors:!0,side:li,...Mt}),x=f(.74,0),g=f(.48,.8,{envMapIntensity:1.1}),m=x,_=(V,et,Mt,bt,Nt,D,oe,ke,He={})=>{let tt=r(V,et,Mt,He.mat||x,Nt,D,oe,ke,He);return Bs(tt.geometry,bt),tt},b=(V,et,Mt,bt,Nt,D,oe,ke={})=>{let He=a(V,et,ke.mat||x,bt,Nt,D,oe,ke);return Bs(He.geometry,Mt),He},y=(V,et,Mt,bt,Nt={})=>{let D=o(V,et,Nt.mat||x,bt,Nt);return Bs(D.geometry,Mt),D},M=(V,et,Mt={})=>i.place(new Fe(V,Mt.mat||x),Mt.x||0,Mt.y||0,Mt.z||0,et,Mt),T=(V,et,Mt,bt={})=>(Bs(V,et),i.place(new Fe(V,bt.mat||x),bt.x||0,bt.y||0,bt.z||0,Mt,bt)),R=i.flow(13214314,{base:2892310,intensity:1.1,dash:1.4,speed:.45,rest:.3,gain:1,roughness:.12}),v=(V,et={})=>i.flow(5220095,{base:V,intensity:1.6,dash:2.2,speed:.7,rest:.05,gain:1,roughness:.4,...et}),A=t&&t.group?t.group.children.find(V=>V.isMesh&&V.geometry.parameters&&V.geometry.parameters.height===9):null,I=A?A.material:c.soil,G=(V,et,Mt,bt,Nt,D)=>{let oe=new an(Math.abs(et-V),bt-Mt);oe.rotateY(-Math.PI/2),oe.translate(Nt,(Mt+bt)/2,(V+et)/2);let ke=oe.attributes.position,He=oe.attributes.uv;for(let tt=0;tt<ke.count;tt++)He.setXY(tt,(ke.getZ(tt)+120)/240,(ke.getY(tt)+9.02)/9);return i.place(new Fe(oe,I),0,0,0,D,{cast:!1})},w=document.createElement("canvas");w.width=w.height=256;{let V=w.getContext("2d");V.fillStyle="#3b3833",V.fillRect(0,0,256,256);for(let et=0;et<520;et++){let Mt=u()*256,bt=u()*256,Nt=3+u()*7,D=70+u()*90;V.fillStyle=`rgb(${D|0},${D*.96|0},${D*.9|0})`,V.beginPath(),V.ellipse(Mt,bt,Nt,Nt*(.6+u()*.4),u()*3,0,6.3),V.fill(),V.fillStyle="rgba(255,255,255,0.12)",V.beginPath(),V.ellipse(Mt-Nt*.25,bt-Nt*.25,Nt*.45,Nt*.3,0,0,6.3),V.fill()}}let U=new $n(w);U.colorSpace=bn,U.wrapS=U.wrapT=Qn,U.repeat.set(2.6,2.6);let N=i.std(16777215,.95,0,{map:U}),H=new Wn({color:16039294,toneMapped:!1}),$=(V,et,Mt,bt)=>{let Nt=new Fe(new Rn(.05,.06,Math.abs(et-V)),H);return Nt.position.set(Mt-.02,.02,(V+et)/2),Nt.userData.noAO=!0,bt.add(Nt),Nt},z=(V,et,Mt=[],bt=p,Nt=Fi)=>{let D=new Ei(V.map(([ke,He])=>new it(ke,He)));Mt.forEach(ke=>D.holes.push(ke.length===3?new Ks().absarc(ke[0],ke[1],ke[2],0,Math.PI*2,!1):new Ks(ke.map(([He,tt])=>new it(He,tt)))));let oe=new pa(D,8);return oe.rotateY(-Math.PI/2),oe.translate(Nt,0,0),typeof et=="object"?i.place(new Fe(oe,et),0,0,0,bt,{cast:!1}):T(oe,et,bt,{cast:!1})},q=[{key:"mon",w:320,h:232,text:"0.0 m",sub:"CLAY 150 mm",flag:"",draw:Z},{key:"pvc",text:"SEWER PVC \xB7 SDR 35 \xB7 150 mm \xB7 2025",w:600,h:34,size:22,color:"#eef3ec"},{key:"pb",text:"PB \xB7 19 mm \xB7 1987",w:300,h:34,size:22,color:"#22262b"},{key:"pl",text:"PROPERTY LINE",w:220,h:54,size:26,color:"#1a1206",bg:"#f08a2c"},{key:"permit",text:"CONNECTION PERMIT",sub:"INSPECTED \xB7 BACKFILL OK",w:260,h:74,size:22,color:"#15130c",bg:"#e9c22e"},{key:"shut",text:"MAIN SHUT-OFF",w:200,h:46,size:22,color:"#fff4ea",bg:"#b8321f"},{key:"pump",text:"SUMP \xB7 1/3 HP",w:180,h:40,size:22,color:"#d9dde2"}];function Z(V,et,Mt,bt){V.fillStyle="#05070a",V.fillRect(0,0,et,Mt);let Nt=et/2,D=Mt/2+14,oe=V.createRadialGradient(Nt,D,4,Nt,D,112);oe.addColorStop(0,"#040201"),oe.addColorStop(.32,"#1d1008"),oe.addColorStop(.78,"#9a6038"),oe.addColorStop(1,"#4a2c18"),V.fillStyle=oe,V.beginPath(),V.arc(Nt,D,108,0,6.3),V.fill(),V.strokeStyle="rgba(14,8,4,.85)",V.lineWidth=6;let ke=bt.flag==="OFFSET JOINT"?9:0;if(V.beginPath(),V.arc(Nt,D+ke,46,0,6.3),V.stroke(),V.fillStyle="rgba(150,112,62,.75)",V.beginPath(),V.ellipse(Nt,D+86,58,12,0,0,6.3),V.fill(),bt.flag==="CRACK"&&(V.strokeStyle="#0a0503",V.lineWidth=3,V.beginPath(),V.moveTo(Nt-18,D-104),V.lineTo(Nt-8,D-80),V.lineTo(Nt-20,D-62),V.lineTo(Nt-9,D-44),V.stroke()),bt.flag==="ROOTS"){V.strokeStyle="#d8c49a",V.lineWidth=2;for(let He=0;He<9;He++)V.beginPath(),V.moveTo(Nt-40+He*10,D-46),V.quadraticCurveTo(Nt-30+He*7,D,Nt-20+He*5,D+20),V.stroke()}V.textAlign="left",V.textBaseline="middle",V.fillStyle="#f4bd7e",V.font="700 28px ui-monospace, Menlo, monospace",V.fillText(bt.text,14,24),V.fillStyle="#cfd4da",V.font="500 15px ui-monospace, Menlo, monospace",V.fillText(bt.sub,14,50),V.fillStyle="#ff6b4f",V.beginPath(),V.arc(et-22,22,7,0,6.3),V.fill(),V.textAlign="right",V.fillStyle="#cfd4da",V.font="600 14px ui-monospace, Menlo, monospace",V.fillText("REC",et-36,23),bt.flag&&(V.textAlign="left",V.fillStyle="#ff6b4f",V.font="700 20px ui-monospace, Menlo, monospace",V.fillText(bt.flag,14,Mt-18))}let W=l(q,{width:1024,emissive:.26}),J=new yt;J.position.set(Mn,$f,Os),J.rotation.x=-Kf,p.add(J);let me={out:9064756,inn:5977123,end:7620398,cut:12880480},Ie=Jf([[0,zm],[0,Za],[.09,Za],[.125,Wu],[Zo+.075,Wu],[Zo+.075,An],[.1,An],[.1,zm]],[me.end,me.out,me.out,me.out,me.end,me.inn,me.inn,4138008],me.cut,18),qe=new Mi(Ie,x,Vu);qe.castShadow=!0,qe.receiveShadow=!0,qe.frustumCulled=!1,qe.userData.keep=!0,J.add(qe);let $e=V=>V===Gm?-.013:V===4?-.016:V===5?-.024:V===6?-.01:0,xt=[],re=new kt,fe=new kt().makeScale(0,0,0);for(let V=0;V<Vu;V++)xt.push(new kt().makeTranslation(0,$e(V),-$a(V))),qe.setMatrixAt(V,xt[V]);let Ue="",we=V=>{let et="";for(let Mt=0;Mt<Vu;Mt++)et+=V(Mt)?"0":"1";if(et!==Ue){Ue=et;for(let Mt=0;Mt<Vu;Mt++)qe.setMatrixAt(Mt,et[Mt]==="1"?xt[Mt]:fe);qe.instanceMatrix.needsUpdate=!0}};y([[.02,An*.99,-1.02],[.034,An*.97,-1.18],[.022,An*.98,-1.32],[.04,An*.96,-1.5]].map(([V,et,Mt])=>{let bt=An*.985/Math.hypot(V,et);return[V*bt,et*bt,Mt]}),.0028,1182214,J,{radial:5,seg:16,cast:!1});let Ve=(V,et,Mt,bt,Nt,D=R,oe=0)=>{let ke=new an(et-V,bt);ke.rotateX(-Math.PI/2),ke.rotateY(Math.PI/2),ke.translate(oe+bt/2,Mt,-(V+et)/2);let He=ke.attributes.position,tt=ke.attributes.uv;for(let Tt=0;Tt<He.count;Tt++)tt.setX(Tt,-He.getZ(Tt));return i.place(new Fe(ke,D),0,0,0,Nt,{cast:!1})},ie=V=>Math.sqrt(An*An-(An-V)*(An-V));Ve(0,sa,-An+.016,ie(.016),J),Ve($a(4)-.05,$a(7)-.1,-An+.014,ie(.03),J).position.y=-.018;let Qe=new yt,le=.78,ye=-3.06,ee=Math.atan2(ye-$f-.02,le-Os);Qe.position.set(Mn,ye,le),Qe.rotation.x=-ee,p.add(Qe);let ge={out:3026996,inn:5190692,cut:9277590},Te=le-Os+.12;M(Zf(Te,An,.086,ge.out,ge.inn,ge.cut,16),Qe),[0,1.5,3,4.5].forEach(V=>M(Jf([[V,.086],[V,.104],[V+.09,.104],[V+.12,.086]],[ge.cut,ge.out,ge.out,ge.out],ge.cut,16),Qe)),Ve(.05,Te,-An+.014,ie(.014),Qe),b(.056,.4,ge.out,-.2,.012,-2.75,Qe,{axis:"x",seg:16});{let V=ye-(le-_r)*Math.tan(ee)+.06;M(Zf(-2.77-V,.052,.062,ge.out,ge.inn,ge.cut,14).rotateX(Math.PI/2),p,{x:Mn,y:V,z:_r})}b(.09,.012,9212827,Mn,-2.795,le+.04,p,{mat:g,seg:24}),y([[Mn,-2.8,le+.04],[Mn,-3.08,le+.06],[Mn,-3.2,le-.04],[Mn,-3.1,le-.14],[Mn,-3.06,le-.02]],.05,ge.out,p,{radial:12,seg:24});let Ze=e.form||e.concrete;z([[-4.5,-3.25],[-3.7,-3.25],[-3.7,-2.95],[-4,-2.95],[-4,.3],[-4.25,.3],[-4.25,-2.95],[-4.5,-2.95]],Ze),z([[4.5,-3.25],[3.7,-3.25],[3.7,-2.95],[4,-2.95],[4,.3],[4.25,.3],[4.25,-2.95],[4.5,-2.95]],Ze,[[4.125,-2.3,.028]]),[[-4,_r-.07],[_r+.07,le-.07],[le+.13,Xi-.25],[Xi+.25,4]].forEach(([V,et])=>z([[V,-2.96],[et,-2.96],[et,-2.8],[V,-2.8]],e.slab||7170659)),[-1,1].forEach(V=>_(Wi-Fi,3,.012,1447963,(Fi+Wi)/2,-1.55,V*4.258,p,{cast:!1})),G(Os,or,-9.02,0,Wi,p),G(lr,-60,-9.02,0,Wi,p),G(-Os,60,-9.02,0,Wi,p),G(Os,-Os,-9.02,-2.96,Wi,p),$(Os,or,Wi,p),$(lr,-60,Wi,p),$(-Os,60,Wi,p);let Ye=new yt;Ye.userData.keep=!0,d.add(Ye),G(or,lr,-9.02,0,Wi,Ye);let ut={out:8815226,inn:4999491,cut:11117980},ft=2.6;[[ar,ut.out],[ku,ut.inn]].forEach(([V,et])=>b(V,ft,et,Fi+ft/2,rr,sr,p,{axis:"x",seg:32,open:!0}));let Q=new Ha(ku,ar,32);Q.rotateY(-Math.PI/2),T(Q,ut.cut,p,{x:Fi,y:rr,z:sr,cast:!1});let It=Math.sqrt(ku*ku-.085*.085);{let V=new an(ft,It*2);V.rotateX(-Math.PI/2),V.translate(Fi+ft/2,rr-.085,sr);let et=V.attributes.uv,Mt=V.attributes.position;for(let bt=0;bt<Mt.count;bt++)et.setX(bt,Mt.getX(bt));i.place(new Fe(V,R),0,0,0,p,{cast:!1})}let At=new yt;At.userData.keep=!0,d.add(At);let B=[Oi(sa-.25),Oi(sa),h(Mn,rr+.25,sr+.2),h(Mn,rr+ar*.72,sr+ar*.68)];y(B,Wu,me.out,At,{radial:16,seg:16}),T(new jn(.15,14,10),7828331,At,{x:Mn,y:rr+ar*.72,z:sr+ar*.68}).scale.set(.8,.7,1);let S=6966835,ue=[13350026,11112036,14272416],ce=$a(p_),Me=(V,et,Mt,bt,Nt,D={})=>{let oe=[V[0]];for(let ln=1;ln<V.length;ln++){let Sn=V[ln-1],Xt=V[ln],Vt=Math.hypot(Xt[0]-Sn[0],Xt[1]-Sn[1],Xt[2]-Sn[2])*(D.wob??.12);for(let mi=1;mi<=3;mi++){let $t=mi/3;oe.push(mi===3?Xt:[ht(Sn[0],Xt[0],$t)+(u()-.5)*Vt*.3,ht(Sn[1],Xt[1],$t)+(u()-.5)*Vt,ht(Sn[2],Xt[2],$t)+(u()-.5)*Vt])}}let ke=y(oe,et,bt,Nt,{radial:D.radial||6,density:D.density||26,tension:.4,cast:D.cast??et>.01}),He=ke.geometry,{tubularSegments:tt,radialSegments:Tt}=He.parameters,Wt=He.attributes.position,Bt=new F;for(let ln=0;ln<=tt;ln++){ke.userData.curve.getPointAt(ln/tt,Bt);let Sn=ht(1,Mt/et,Math.pow(ln/tt,.8));for(let Xt=0;Xt<=Tt;Xt++){let Vt=ln*(Tt+1)+Xt;Wt.setXYZ(Vt,Bt.x+(Wt.getX(Vt)-Bt.x)*Sn,Bt.y+(Wt.getY(Vt)-Bt.y)*Sn,Bt.z+(Wt.getZ(Vt)-Bt.z)*Sn)}}return ke},st=(V,et=0,Mt=Za+.006)=>Oi(ce+et,Mt*Math.sin(V),Mt*Math.cos(V));[[.034,.008,[[.83,-.12,-12.4],[.8,-.6,-12],[.78,-1.3,-11.6],[.76,-2,-11.45],[.74,-2.7,-11.8]]],[.03,.007,[[.83,-.15,-12.48],[.8,-.7,-13],[.77,-1.4,-13.4],[.75,-2.2,-13.5],[.73,-2.9,-13.2]]],[.028,.006,[[.83,-.2,-12.44],[.79,-1,-12.5],[.76,-1.9,-12.66],[.73,-2.7,-12.7],st(.25,-.02,.15).toArray()]]].forEach(([V,et,Mt])=>Me(Mt,V,et,S,p));for(let V=0;V<8;V++){let et=.2+u()*1.4,Mt=-11.9-u()*1.4,bt=[.7+u()*.1,-2.6-u()*.5,Mt],Nt=[bt[0]-.02+u()*.04,ht(bt[1],-3.3,.45),ht(Mt,-12.62,.4)+(u()-.5)*.25],D=st(et+.5,-.12+u()*.08,.17);Me([bt,Nt,D.toArray(),st(et,-.03,Za+.008).toArray(),st(et+.2,.004,.106).toArray()],.0055,.0016,S,p,{radial:5,density:40,cast:!1})}for(let V=0;V<18;V++){let et=u()*1.7,Mt=-.06+u()*.16,bt=.4+u()*.8;Me([st(et,Mt,Za+.004).toArray(),st(et+bt*.5,Mt+.02,Za+.009).toArray(),st(et+bt,Mt-.01,Za+.004).toArray()],.0028,.0012,S,p,{radial:4,density:60,cast:!1})}let nt=new yt;nt.userData.keep=!0,nt.position.set(0,0,-(ce+.075)),J.add(nt);let Oe=n===0?26:44;for(let V=0;V<Oe;V++){let et=.05+u()*3.05,Mt=.12+u()*u()*.6,bt=V<5?.0045:.0016+u()*.0018,Nt=An*.97*Math.sin(et),D=An*.97*Math.cos(et),oe=0,ke=-Nt*.25,He=-.2-D*.2,tt=[];for(let Tt=0;Tt<=9;Tt++){tt.push([Nt,D,oe]),oe-=Mt/9,ke+=(u()-.5)*.7,He+=(u()-.62)*.5,Nt+=ke*Mt*.06,D+=He*Mt*.06;let Wt=Math.hypot(Nt,D);Wt>An*.94&&(Nt*=An*.94/Wt,D*=An*.94/Wt,ke*=-.5,He*=-.5)}Me(tt,bt,bt*.35,ue[V%3],nt,{radial:4,density:50,cast:!1,wob:0})}Ln(nt);let ze=ce-.8,je=ce+.9,vt=48,L=16,ae=new vn(An-.0018,An-.0018,je-ze,L,vt,!0,0,Math.PI);ae.rotateX(-Math.PI/2);let he=new Fe(Bs(ae,9207644),f(.9,0));he.position.set(0,0,-(ze+je)/2),he.userData.keep=!0,he.receiveShadow=!0,J.add(he);let Se=new yt;Se.userData.keep=!0,d.add(Se);let Ae=new yt;Se.add(Ae);let k=1.55,De=-2.5,xe=-2.42;[k-.09,k+.09].forEach(V=>{y([[V,-2.79,xe-.26],[V,De,xe],[V,-2.79,xe+.26]],.011,9212827,Ae,{mat:g,radial:8,tension:0}),b(.013,.56,9212827,V,-2.79,xe,Ae,{axis:"z",mat:g,seg:8})}),b(.014,.2,9212827,k,De,xe,Ae,{axis:"x",mat:g,seg:10});let Be=1,Ne=-2.92,se=.32;_(.17,.075,.26,1776929,Be,-2.762,Ne,Ae,{r:.012}),_(.07,.01,.12,3817029,Be-.03,-2.722,Ne+.04,Ae,{cast:!1});let at=new yt;at.position.set(Be+.075,-2.725,Ne),at.rotation.z=se,Ae.add(at),_(.016,.2,.26,1776929,-.008,.1,0,at,{r:.006});let Je=W.plane("mon",.225,Se,0,0,0,{keep:!0});Je.rotation.order="ZYX",Je.rotation.set(0,-Math.PI/2,se),Je.position.set(Be+.075-.0165*Math.cos(se)-.1*Math.sin(se),-2.725-.0165*Math.sin(se)+.1*Math.cos(se),Ne);let mt=new yt;mt.position.set(k,De,xe),Se.add(mt),b(.25,.014,2500910,.075,0,0,mt,{axis:"x",seg:36}),b(.05,.15,3817029,0,0,0,mt,{axis:"x",seg:16});for(let V=0;V<7;V++){let et=new Qi(.11+V*.019,.0075,6,40);et.rotateY(Math.PI/2),T(et,14857514,mt,{x:-.02+V%2*.016,cast:!1})}[0,2.1,4.2].forEach(V=>_(.012,.36,.03,9212827,.06,0,0,mt,{mat:g,rot:[V,0,0],cast:!1})),Ln(mt);let Ft=V=>ye-(le-V)*Math.tan(ee);y([[k-.04,De-.23,xe-.1],[k-.12,-2.775,xe-.32],[1.2,-2.79,-2.62],[.84,-2.785,-2.68],[Mn+.08,-2.76,_r+.04],[Mn+.01,-2.86,_r],[Mn,Ft(_r)-.06,_r-.04]],.0055,14857514,Ae,{radial:6,density:24,tension:.4,cast:!1}),y([[k-.06,De,xe],[k-.2,-2.79,xe-.1],[Be+.06,-2.79,Ne+.18],[Be+.05,-2.76,Ne+.12]],.005,1052948,Ae,{radial:6,cast:!1}),b(.05,.03,11569722,.76,-2.785,_r+.3,Ae,{mat:g,seg:16}),Ln(Ae);let Yt=new fs([h(Mn,Ft(_r-.1)-An,_r-.1),h(Mn,Ft(-3.6)-An,-3.6),h(Mn,Ft(Os+.1)-An,Os+.1),Oi(.3,0,-An),Oi(1,0,-An),Oi(1.6,0,-An)],!1,"catmullrom",.2),hn=120,Pn=o(Yt.getSpacedPoints(hn),.0055,x,d,{seg:hn,radial:6,keep:!0,cast:!1});Bs(Pn.geometry,14857514);let sn=new F,In=new F,yn=new yt;yn.userData.keep=!0,d.add(yn),_(.06,.034,.16,15319598,0,.002,0,yn,{r:.008}),_(.03,.012,.1,2764081,0,.024,.01,yn,{r:.004}),[-1,1].forEach(V=>[-1,1].forEach(et=>{let Mt=b(.02,.013,1052948,V*.039,-.012,et*.058,yn,{axis:"x",seg:14});Mt.rotation.z=V*.5})),b(.022,.06,10133929,0,.008,-.105,yn,{axis:"z",seg:18}),b(.0095,.006,329224,0,.008,-.136,yn,{axis:"z",seg:14}),b(.008,.03,2764081,0,.004,.092,yn,{axis:"z",seg:10});let C=new Fe(new Qi(.0158,.003,6,20),c.led(16773336,2.4));C.position.set(0,.008,-.1355),yn.add(C),Ln(yn);let be=i.sprite(16769725,.16,0,.008,-.16,yn,.55),Le=new yt;Le.userData.keep=!0,J.add(Le);let lt=new yt;Le.add(lt),b(.012,.05,11055288,0,0,0,lt,{axis:"z",mat:g,seg:12});for(let V=0;V<4;V++){let et=_(.004,An*1.7,.03,13160148,0,0,-.03,lt,{mat:g,cast:!1});et.rotation.z=V*Math.PI/4}b(.009,.04,5593439,0,0,.04,Le,{axis:"z",mat:g,seg:10}),Ln(lt),Ln(Le);let ct=new vn(.0085,.0085,1,8,1,!0);ct.translate(0,.5,0),ct.rotateX(-Math.PI/2);let Gt=new Fe(Bs(ct,4869717),g);Gt.userData.keep=!0,J.add(Gt);let Dt=new yt;Dt.userData.keep=!0,J.add(Dt),b(.014,.04,13214282,0,0,0,Dt,{axis:"z",mat:g,seg:14}),T(new jn(.014,14,8,0,Math.PI*2,0,Math.PI/2).rotateX(-Math.PI/2),13214282,Dt,{z:-.02,mat:g}),b(.011,.025,10133929,0,0,.032,Dt,{axis:"z",mat:g,seg:12}),Ln(Dt);let ve=new vn(.009,.009,1,8,1,!0);ve.translate(0,.5,0),ve.rotateX(-Math.PI/2);let We=new Fe(Bs(ve,1382170),m);We.userData.keep=!0,J.add(We);let ot=200,Lt=i.particles(ot,{color:10473727,size:.017,gain:1.6});J.add(Lt);let Ot=new yt;Ot.userData.keep=!0,J.add(Ot);let xn=60,on=16,Kt=ta[1]-ta[0],dn=i.flow(16751165,{base:6265980,intensity:.75,dash:1.4,speed:.32,rest:.12,gain:1,roughness:.55,metalness:0});dn.side=li;let On=new vn(An-.003,An-.003,Kt,on,xn,!0,0,Math.PI);On.rotateX(-Math.PI/2),On.translate(0,0,-(ta[0]+ta[1])/2);{let V=On.attributes.position,et=On.attributes.uv;for(let Mt=0;Mt<V.count;Mt++)et.setX(Mt,-V.getZ(Mt))}let P=i.place(new Fe(On,dn),0,0,0,Ot,{keep:!0}),te=new jn(An-.003,16,8,0,Math.PI*2,0,Math.PI/2);te.rotateX(-Math.PI/2),te.scale(1,1,.45);let Ce=i.place(new Fe(te,dn),0,0,0,Ot,{keep:!0}),Ee=new vn(.08,.08,1,24,1,!0);Ee.translate(0,.5,0),Ee.rotateX(-Math.PI/2);let Pe=i.place(new Fe(Ee,c.hdpe),0,0,0,Ot,{keep:!0}),_t=new yt;_t.userData.keep=!0,Ot.add(_t),b(.03,.17,10134445,0,0,-.085,_t,{axis:"z",r2:.104,mat:g,seg:20}),b(.086,.07,7107451,0,0,.035,_t,{axis:"z",mat:g,seg:20});for(let V=0;V<3;V++){let et=_(.006,.05,.12,12041926,0,0,-.07,_t,{mat:g});et.geometry.translate(0,.085,0),et.rotation.z=V*Math.PI*2/3+.4}b(.006,na[1]-.05,10133929,0,0,-na[1]/2+.05,_t,{axis:"z",mat:g,seg:6,cast:!1}),Ln(_t);let Ct=44,j=Bs(new Rn(.05,.011,.065),7619114),ne=new Mi(j,x,Ct);ne.userData.keep=!0,ne.frustumCulled=!1,ne.castShadow=!0;let pe=[];{let V=new Vn,et=new Ui,Mt=new F,bt=new F(1,1,1);for(let Nt=0;Nt<Ct;Nt++){let D=na[0]+.1+Nt/Ct*(na[1]-na[0]-.15)+u()*.05,oe=u()*Math.PI*2,ke=.1+u()*.05;Mt.set(ke*Math.sin(oe),ke*Math.cos(oe),-D),et.set(u()*.5,u()*.6,-oe+(u()-.5)*.6),V.setFromEuler(et),bt.set(.6+u()*.6,1,.6+u()*.7),re.compose(Mt,V,bt),ne.setMatrixAt(Nt,re),pe.push(D)}}Ot.add(ne);let Ge=new yt;Ge.userData.keep=!0,d.add(Ge);let E=new yt;Ge.add(E),G(or,lr,ia,0,bs,E),G(or,lr,-9.02,ia,Wi,E);{[[or,-1],[lr,1]].forEach(([et,Mt])=>{let bt=new an(bs-Ra,-ia);bt.rotateY(Mt>0?0:Math.PI),bt.translate((bs+Ra)/2,ia/2,et);let Nt=bt.attributes.position,D=bt.attributes.uv;for(let oe=0;oe<Nt.count;oe++)D.setXY(oe,(Nt.getX(oe)*.3+60)/240,(Nt.getY(oe)+9.02)/9);i.place(new Fe(bt,I),0,0,0,E,{cast:!1})});let V=new an(bs-Ra,or-lr);V.rotateX(-Math.PI/2),V.translate((bs+Ra)/2,ia,(or+lr)/2),T(V,3877918,E,{cast:!1})}_(.01,.1,-15.95-lr,2763566,bs-.006,-.045,(-15.95+lr)/2,E,{cast:!1}),_(.01,.3,-15.95-lr,7828331,bs-.006,-.25,(-15.95+lr)/2,E,{cast:!1}),[-15,-16.9].forEach(V=>{_(.05,2.5,.08,12765390,bs-.048,-1.4,V,E,{mat:g}),[-.6,-2.3].forEach(et=>{b(.03,bs-.07-Ra+.3,12765390,(bs-.07+Ra-.3)/2,et,V,E,{axis:"x",mat:g,seg:12}),b(.042,.2,14201402,bs-.25,et,V,E,{axis:"x",mat:m,seg:14})})}),[.62,1].forEach(V=>y([[V,ia,or-.6],[V,.9,or-.04]],.016,12765390,E,{mat:g,radial:8,tension:0}));for(let V=0;V<15;V++){let et=(V+.5)/15;b(.012,.38,12765390,.81,ht(ia,.9,et),ht(or-.6,or-.04,et),E,{axis:"x",mat:g,seg:8,cast:!1})}T(new jn(1,20,10,0,Math.PI*2,0,Math.PI/2),3812125,E,{x:2.6,y:-.05,z:-15}).scale.set(1.15,.85,1.05),T(new jn(1,20,6,0,Math.PI*2,0,.7),14673647,E,{x:2.6,y:-.06,z:-15,cast:!1}).scale.set(1.17,.87,1.07);let O=new yt;O.position.copy(J.position),O.rotation.copy(J.rotation),E.add(O);let K=$a(13)-.04;{let V=sa-.3,et=Oi(K,0,-.035),Mt=Oi(V,0,-.035);z([[et.z,ia],[Mt.z,ia],[Mt.z,Mt.y],[et.z,et.y]],N,[],E);let bt=new an(bs-Fi,V-K);bt.rotateX(-Math.PI/2),bt.translate((bs+Fi)/2-Mn,-.035,-(K+V)/2);let Nt=bt.attributes.position,D=bt.attributes.uv;for(let oe=0;oe<Nt.count;oe++)D.setXY(oe,Nt.getX(oe),Nt.getZ(oe));i.place(new Fe(bt,N),0,0,0,O,{cast:!1}),_(bs-Fi-.01,.5,.012,3877918,(bs+Fi)/2-Mn,-.3,-K+.006,O,{cast:!1})}let X=3112266;b(.081,sa-K,X,0,0,-(K+sa)/2,O,{axis:"z",mat:m,seg:28}),b(.1,.16,1513499,0,0,-K+.02,O,{axis:"z",seg:24}),[-.05,.05].forEach(V=>b(.102,.018,12765390,0,0,-K+.02+V,O,{axis:"z",mat:g,seg:24,cast:!1})),W.plane("pvc",.62,O,-.0815,.012,-(K+.7),{rot:[0,-Math.PI/2,0]}),y([Oi(sa-.05),Oi(sa+.1),h(Mn,rr+.24,sr+.2),h(Mn,rr+ar*.73,sr+ar*.69)],.081,X,E,{mat:m,radial:20,seg:16});{let V=new vn(ar+.013,ar+.013,.34,24,1,!0,-.25,2.2);V.rotateZ(Math.PI/2),T(V,X,E,{x:Mn,y:rr,z:sr,mat:m})}[-.13,.13].forEach(V=>b(ar+.017,.025,12765390,Mn+V,rr,sr,E,{axis:"x",mat:g,seg:32,open:!0,cast:!1})),W.plane("permit",.17,E,Fi+.03,rr+.24,sr-.26,{rot:[0,-Math.PI/2,0]}),Ln(E),_(.035,.75,.035,10123858,.66,-.12,-15.95,p),b(.008,.6,5981750,.66,-.7,-15.95,p,{seg:6,cast:!1}),_(.004,.12,.05,15764012,.64,.17,-15.95-.03,p,{cast:!1,rot:[0,0,.2]}),W.plane("pl",.13,p,.64,.05,-15.95,{rot:[0,-Math.PI/2,0]});let de=document.createElement("canvas");de.width=256,de.height=128;{let V=de.getContext("2d"),et=V.createLinearGradient(0,0,0,128);et.addColorStop(0,"rgba(220,236,255,0.55)"),et.addColorStop(.86,"rgba(205,226,252,0.34)"),et.addColorStop(.97,"rgba(205,226,252,0.12)"),et.addColorStop(1,"rgba(200,222,250,0)"),V.fillStyle=et,V.fillRect(0,0,128,128);for(let bt=0;bt<260;bt++)V.fillStyle=`rgba(240,248,255,${.2+u()*.5})`,V.fillRect(u()*128,Math.pow(u(),1.6)*110,1+u()*1.5,1+u()*1.5);let Mt=V.createRadialGradient(192,64,2,192,64,62);Mt.addColorStop(0,"rgba(8,6,4,0.72)"),Mt.addColorStop(1,"rgba(8,6,4,0)"),V.fillStyle=Mt,V.fillRect(128,0,128,128)}let Re=new $n(de);Re.colorSpace=bn;let _e=new cn({map:Re,transparent:!0,depthWrite:!1,roughness:.9,emissive:10467544,emissiveIntensity:.05}),Y=(V,et,Mt,bt,Nt,D,oe)=>{let ke=new an(Mt,bt);ke.rotateY(-Math.PI/2);let He=ke.attributes.uv;for(let tt=0;tt<He.count;tt++)He.setX(tt,ht(V,et,He.getX(tt)));return i.place(new Fe(ke,_e),Nt,D,oe,p,{cast:!1,receive:!1})};Y(0,.5,26,2.05,Wi-.004,-1.025,4.25+13),Y(.5,1,.8,.6,Wi-.006,-2.45,4.6);let Xe=-2.32,Ke=V=>Xe-Math.max(0,V-4.3)*.012,dt=x,pt=g;y([[di,Ke(4.44),4.44],[di,Ke(7.5),7.5],[di,Ke(12),12]],.02,8423053,p,{mat:dt,radial:10,tension:0}),y([[di,Ke(4.42),4.42],[di,Xe,4.3],[di,Xe,3.96],[di,Xe+.06,3.9],[di,Xe+.2,3.88],[di,-1.02,3.88],[di,-.3,3.88],[di,-.24,3.8],[di-.5,-.24,3.8]],.019,12088383,p,{mat:pt,radial:10,density:26,tension:.15}),b(.027,.045,13214282,di,Ke(4.43),4.43,p,{axis:"z",mat:g,seg:14}),[4.405,4.455].forEach(V=>b(.025,.008,12088383,di,Ke(V),V,p,{axis:"z",mat:g,seg:12,cast:!1})),b(.023,.06,8028295,di,Ke(4.6),4.6,p,{axis:"z",seg:12}),_(.004,.012,.05,789775,di-.023,Ke(4.6)+.004,4.6,p,{cast:!1}),W.plane("pb",.19,p,di-.0215,Ke(5.3),5.3,{rot:[0,-Math.PI/2,0]}),b(.022,.07,13214282,di,-1.72,3.88,p,{mat:g,seg:14}),_(.012,.016,.1,12728875,di-.03,-1.7,3.88-.04,p,{mat:m,cast:!1}),W.plane("shut",.11,p,di-.045,-1.8,3.82,{rot:[0,-Math.PI/2,0]}),_(.1,.17,.1,2241610,di,-1.42,3.88,p,{r:.012,mat:m}),b(.04,.02,9212827,di-.05,-1.4,3.88,p,{axis:"x",mat:g,seg:18});let gt=4.7,Pt=-3.25;b(.066,Wi-Fi,12433322,(Fi+Wi)/2,Pt,gt,p,{axis:"x",seg:24,open:!0}),b(.05,Wi-Fi,1118740,(Fi+Wi)/2,Pt,gt,p,{axis:"x",seg:24,open:!0});{let V=new Ha(.05,.066,24);V.rotateY(-Math.PI/2),T(V,2763823,p,{x:Fi+.002,y:Pt,z:gt,cast:!1});let et=new Ha(.06,.066,24);et.rotateY(-Math.PI/2),T(et,14209990,p,{x:Fi+.003,y:Pt,z:gt,cast:!1})}z([[4.5,-3.37],[5.08,-3.37],[5.08,-2.87],[4.5,-2.87]],N,[[gt,Pt,.068]],p),_(Wi-Fi,.008,.66,13617854,(Fi+Wi)/2,-2.865,4.82,p,{cast:!1}),y([[Mn,Pt-.03,gt-.04],[Mn,-3.36,4.42],[Mn,-3.37,3.6],[Mn,-3.37,Xi+.2]],.038,1776929,p,{radial:12,tension:.2});let St=new Fe(Zf(.68,.215,.232,1842722,2829875,5264475,22),x);St.geometry.rotateX(Math.PI/2),St.position.set(Mn,-3.48,Xi),p.add(St),St.receiveShadow=!0;{let V=new wo(.232,20,-Math.PI/2,Math.PI);V.rotateX(-Math.PI/2),T(V,2829875,p,{x:Mn,y:-3.475,z:Xi,cast:!1})}b(.082,.22,2764081,Mn,-3.36,Xi,p,{seg:20}),T(new jn(.082,18,6,0,Math.PI*2,0,Math.PI/2),2764081,p,{x:Mn,y:-3.25,z:Xi}),b(.095,.02,1710878,Mn,-3.465,Xi,p,{seg:20}),W.plane("pump",.1,p,Mn-.084,-3.34,Xi,{rot:[0,-Math.PI/2,0]}),b(.004,.3,9212827,Mn+.02,-3.2,Xi+.12,p,{mat:g,seg:6,cast:!1});let rt=v(13815750,{intensity:2.6,speed:1.4,level:0,roughness:.45}),wt=.66;o([[Mn,-3.17,Xi],[Mn,-3,Xi],[wt,-2.85,Xi],[wt,-2.2,Xi],[wt,-.5,Xi],[wt,-.42,Xi+.08],[wt,-.42,3.86],[wt,-.34,3.94],[wt,.12,3.94],[wt,.15,4.02],[wt,.15,4.42],[wt,.06,4.5]],.024,rt,p,{radial:10,density:16,tension:.12}),b(.034,.13,9409691,wt,-1.9,Xi,p,{seg:16}),[-1.84,-1.96].forEach(V=>b(.037,.012,12765390,wt,V,Xi,p,{mat:g,seg:16,cast:!1}));let Ht=new Fe(new wo(.214,24,-Math.PI/2,Math.PI).rotateX(-Math.PI/2),c.water);Ht.position.set(Mn,-3.3,Xi),Ht.userData.keep=!0,d.add(Ht);let Dn=i.sprite(7321855,.42,di-.04,Ke(4.6)+.04,4.6,d,.75),kn=110,qn=i.particles(kn,{color:8175871,size:.04,gain:2.4});d.add(qn),Ln(p);function Ln(V){V.updateWorldMatrix(!0,!0);let et=new kt().copy(V.matrixWorld).invert(),Mt=new kt,bt=new Map,Nt=[],D=oe=>{for(let ke=oe;ke&&ke!==V;ke=ke.parent)if(ke.userData.keep)return!0;return!1};V.traverse(oe=>{if(!oe.isMesh||oe.isInstancedMesh||D(oe)||Array.isArray(oe.material)||oe.children.length)return;let ke=oe.material.uuid+"|"+oe.renderOrder,He=bt.get(ke);He||bt.set(ke,He={mat:oe.material,cast:!1,recv:!1,ro:oe.renderOrder,geos:[]}),He.cast=He.cast||oe.castShadow,He.recv=He.recv||oe.receiveShadow;let tt=oe.geometry.index?oe.geometry.toNonIndexed():oe.geometry.clone();Object.keys(tt.attributes).forEach(Tt=>{Tt!=="position"&&Tt!=="normal"&&Tt!=="uv"&&Tt!=="color"&&tt.deleteAttribute(Tt)}),tt.attributes.uv||tt.setAttribute("uv",new Jt(new Float32Array(tt.attributes.position.count*2),2)),oe.material.vertexColors?tt.attributes.color||Bs(tt,16777215):tt.attributes.color&&tt.deleteAttribute("color"),tt.applyMatrix4(Mt.multiplyMatrices(et,oe.matrixWorld)),He.geos.push(tt),Nt.push(oe)}),bt.forEach(oe=>{let ke=Ss(oe.geos);if(!ke)return;let He=new Fe(ke,oe.mat);He.castShadow=oe.cast,He.receiveShadow=oe.recv,He.renderOrder=oe.ro,He.userData.keep=!0,V.add(He),oe.geos.forEach(tt=>tt.dispose())}),Nt.forEach(oe=>{oe.parent&&oe.parent.remove(oe),oe.geometry.dispose()})}let ls={hub:Oi(5.6,.02,Wu+.02),cam:Oi(1.2),roots:Oi(ce+.12,.03,.03),jet:Oi(8.2),liner:Oi(5.6),burst:Oi(8.3),trench:h(1,-1.4,-15.4),main:h(Mn,rr+ar+.02,sr+.05),water:h(di,Ke(4.6),4.6),tile:h(Mn,Pt,gt)},Ts={fx:Mn+.1,time:19.4,cut:0,ghost:0,section:1,cutX:Ra,ugFocus:null,ground:1,orbit:.01,season:0,lift:0},pn=[{...Ts,radius:28,theta:-.95,phi:1.2,ty:-2.2,fz:-7.8,dof:0,orbit:.02,time:16.6,narrow:{radius:34,fz:-10.5,ty:-1.6}},{...Ts,radius:3.2,theta:-1.57,phi:1.4,ty:-3,fz:-3.55,dof:.6,narrow:{radius:3.3,fz:-3.45}},{...Ts,radius:1.7,theta:-1.42,phi:1.22,ty:-3.45,fz:-12.8,dof:1.1,narrow:{radius:1.9}},{...Ts,radius:1.6,theta:-1.5,phi:1.32,ty:-3.56,fz:-12.5,dof:1.1,narrow:{radius:1.8,fz:-12.62}},{...Ts,radius:5.2,theta:-1.55,phi:1.42,ty:-3.45,fz:-10.9,dof:.8,narrow:{radius:7.2,fz:-11.3}},{...Ts,radius:14,theta:-1.5,phi:1,ty:-1.55,fz:-15.8,dof:.4,time:16.6,narrow:{radius:14,fz:-16.1}},{...Ts,radius:7,theta:-1.5,phi:1.46,ty:-2.5,fz:3.6,dof:.5,narrow:{radius:8.6,fz:3.2}}],Gr="",qi=0,kr=1,Vr=V=>V>.95&&V<1.55?"CRACK":Math.abs(V-$a(Gm)-.06)<.1?"OFFSET JOINT":(V-Yu+Zo*2)%Zo<.12?"JOINT":"",aa=new Float32Array(kn*2);for(let V=0;V<kn;V++)aa[V*2]=u(),aa[V*2+1]=u();let ys=new Float32Array(ot*2);for(let V=0;V<ot;V++)ys[V*2]=V%6/6*Math.PI*2+u()*.3,ys[V*2+1]=u();return{name:"sewer",group:d,anchors:ls,shots:pn,hides:(V,et)=>{let Mt=V.sys.sewer?[...V.sys.sewer.meshes]:[];return et&&et.groups&&["water","gas","sewer","found","radon"].forEach(bt=>et.groups[bt]&&Mt.push(et.groups[bt])),et&&et.group&&et.group.children.forEach(bt=>{let Nt=bt.geometry&&bt.geometry.parameters;bt.isMesh&&Nt&&(Nt.height===9||Nt.depth===240)&&Mt.push(bt)}),Mt},light(V){return V===0?{pos:[-2.6,-1,-8.6],at:[.8,-3.3,-11.5],power:.7,fill:.6}:V===1?{pos:[-1.6,-3.05,-5.2],at:[.7,-3.3,-4],power:.55,fill:.9}:V===2||V===3?{pos:[-1.3,-2.5,-12],at:[.7,-3.5,-12.8],power:.6,fill:.8}:V===4?{pos:[-4.6,-2,-9.4],at:[.75,-3.55,-11.1],power:1,fill:.6}:V===5?{pos:[-3.2,-1.4,-15.6],at:[.8,-3.5,-17.6],power:1.3,fill:.9}:{pos:[-1.8,-3.4,2.6],at:[.75,-3,3.4],power:1.6,fill:1.6}},update({step:V,q:et,t:Mt,dt:bt,snap:Nt}){let D=Nt?1:1-Math.exp(-bt*5),oe=s?0:Mt,ke=ht(na[0]+.05,na[1]-.05,et);we(Vt=>V===4&&Vt>=9&&Vt<=11&&$a(Vt)+Zo*.5<ke||V===5&&Vt>=13),Se.visible=yn.visible=Pn.visible=V===1,Ge.visible=V===5,Ye.visible=At.visible=V!==5,Ot.visible=V===4;let He=V<=3;if(nt.visible=he.visible=He,kr=ht(kr,V===0?1.8:.55,D),R.userData.level.value=kr,V===1){let Vt=ht(0,.62,et);Yt.getPointAt(Vt,sn),Yt.getTangentAt(Vt,In),yn.position.copy(sn),yn.position.y+=.045-.003,yn.rotation.x=Math.atan2(In.y,-In.z),Pn.geometry.setDrawRange(0,Math.round(Vt*hn)*6*6);let mi=Os-sn.z;mt.rotation.x=-Vt*9,ls.cam.copy(sn),ls.cam.y+=.07,be.material.opacity=.45+(s?0:.08*Math.sin(oe*9));let $t=(Vt*Yt.getLength()+.4).toFixed(1),ri=mi<Yu?"":Vr(mi),Zn=$t+ri;Zn!==Gr&&(Gr=Zn,W.set("mon",$t+" m",mi<Yu?"CAST IRON 150 mm":"CLAY 150 mm \xB7 1958",{flag:ri}))}let tt=V===3?qt(et/.42,0,1):0,Tt=V===3?qt((et-.42)/.58,0,1):0;Le.visible=Gt.visible=V===3&&et<.42,Dt.visible=We.visible=Lt.visible=V===3&&et>=.42;let Wt=V===3?Rt(.1,.9,tt):0;nt.scale.set(1,1,V===3&&et>=.42?.12:Math.max(.12,1-.88*Wt));let Bt=ht(ce-.3,ce+.7,Tt);if(V===3){if(Le.visible){let Vt=ht(ce-.3,ce+.4,tt);Le.position.set(0,-.004,-Vt),lt.rotation.z=-oe*14,Gt.position.set(0,-.006,-6),Gt.scale.set(1,1,Math.max(.01,Vt-6.06)),Oi(Vt,0,.02,ls.jet)}if(Dt.visible){Dt.position.set(0,-An+.02,-Bt),We.position.set(0,-An+.012,-6),We.scale.set(1,1,Math.max(.01,Bt-6.03)),Oi(Bt,0,.02,ls.jet);let Vt=Lt.userData.pos,mi=Lt.userData.n;for(let $t=0;$t<mi;$t++){let ri=ys[$t*2],Zn=(ys[$t*2+1]+oe*2.6)%1,rn=Zn*.2,Un=.012+rn*.62,gi=Un*Math.sin(ri),Di=-An+.02+Un*Math.cos(ri),cs=Math.hypot(gi,Di);cs>An*.95&&(gi*=An*.95/cs,Di=Di*An*.95/cs-(rn-.1)*.15),Vt[$t*3]=gi,Vt[$t*3+1]=Math.max(Di,-An*.95),Vt[$t*3+2]=-Bt+.02+rn}Lt.geometry.attributes.position.needsUpdate=!0}et>=.42&&Bt>ce+.1&&(nt.visible=!1)}if(he.visible){let Vt=V===3&&et>=.42?Math.round(qt((je-Bt)/(je-ze),0,1)*vt):vt;he.geometry.setDrawRange(0,Vt*L*6)}if(V===4){let Vt=ht(ta[0]+.15,ta[1],et),mi=Math.round((Vt-ta[0])/(ta[1]-ta[0])*xn);P.geometry.setDrawRange((xn-mi)*on*6,mi*on*6),Ce.position.set(0,0,-Vt),Oi(Vt,0,.02,ls.liner),_t.position.set(0,0,-ke),Oi(ke,0,.11,ls.burst),Pe.position.set(0,0,-(na[0]-.1)),Pe.scale.set(1,1,Math.max(.01,ke-na[0]+.1-.05));let $t=0;for(;$t<Ct&&pe[$t]<ke-.06;)$t++;ne.count=$t}let ln=s?.5:oe%7/7,Sn=ln<.55?ln/.55:1-(ln-.55)/.45,Xt=s||ln>=.55;if(Ht.position.y=ht(-3.38,-3.14,Sn),qi=ht(qi,Xt?1:0,Nt?1:1-Math.exp(-bt*6)),rt.userData.level.value=qi,V===6){let Vt=qn.userData.pos,mi=qn.userData.n;for(let $t=0;$t<mi;$t++){let ri=aa[$t*2],Zn=aa[$t*2+1];if($t%2===0){let rn=(Zn+oe*.11)%1;Vt[$t*3]=Fi+.03+ri*.36,Vt[$t*3+1]=ht(-1,-3.1,rn),Vt[$t*3+2]=4.32+ri*7.3%1*.62}else{let rn=(Zn+oe*1.3)%1,Un=(ri-.5)*1.6;Vt[$t*3]=di-.03-rn*.14,Vt[$t*3+1]=Ke(4.6)+.01+rn*.3-rn*rn*.42,Vt[$t*3+2]=4.6+Un*rn*.22}}qn.geometry.attributes.position.needsUpdate=!0}qn.visible=Dn.visible=V===6,Dn.material.opacity=.6+(s?0:.15*Math.sin(oe*7))}}}var nn=-1.2,En=-1.5,ni=.057,Mr=-2.8,Jn=-2.9,As=-3.05,_c=-4.4,Pi=-2.1,Ii=.25,ii=-1.5,as=-.25,Qf=-3.75,Aa=.24,gs=7.9,$o=10.45,Cs=-3.995,Si=.66,_i=1.6,pi={x:-.5,y:-1.52,z:Cs+.1},Er={x:-.3,z:Cs+.115},Ja=-.59,Jo=new F(nn,Jn-.1,En+.03),Vm=i=>8.054+.1233+.72*(i+2.78),Mc=[[-.36,ii],[-.62,Cs+.04]],Ec=[[-.95,as],[-1.5,1.25]],Wm=[-2.3,.05];function Xm({kit:i,M:e,tier:t,reduce:n}){let{box:s,cyl:r,tube:a,mats:o,atlas:c,V:l}=i,h=new yt,d=new yt,p=new yt,u=new yt;h.add(d,p,u);let f=Hn(41),x=(L,ae,he,Se,Ae)=>{let k=document.createElement("canvas");k.width=L,k.height=ae,he(k.getContext("2d"),L,ae);let De=new $n(k);return De.colorSpace=bn,De.wrapS=De.wrapT=Qn,De.repeat.set(Se,Ae),De.anisotropy=8,De},g=(L,ae,he,Se,Ae,k,De)=>{for(let xe=0;xe<Se;xe++)L.fillStyle=Ae[f()*Ae.length|0],L.beginPath(),L.ellipse(f()*ae,f()*he,k+f()*(De-k),k+f()*(De-k)*.7,f()*3,0,6.3),L.fill()},m=x(256,256,(L,ae,he)=>{L.fillStyle="#7c776f",L.fillRect(0,0,ae,he);for(let Se=0;Se<40;Se++){let Ae=f()*ae,k=f()*he,De=20+f()*50,xe=L.createRadialGradient(Ae,k,0,Ae,k,De),Be=f()>.5;xe.addColorStop(0,Be?"rgba(60,56,50,.18)":"rgba(160,154,144,.14)"),xe.addColorStop(1,"rgba(0,0,0,0)"),L.fillStyle=xe,L.fillRect(Ae-De,k-De,De*2,De*2)}g(L,ae,he,900,["rgba(50,47,43,.35)","rgba(170,164,152,.3)","rgba(96,90,82,.4)"],.4,1.3)},1/1.6,1/1.6),_=x(256,256,(L,ae,he)=>{L.fillStyle="#3a3732",L.fillRect(0,0,ae,he);for(let Se=0;Se<900;Se++){let Ae=f()*ae,k=f()*he,De=2+f()*5,xe=70+f()*60,Be=5+(f()*3|0);L.fillStyle=`rgb(${xe|0},${xe*.97|0},${xe*.9|0})`,L.beginPath();for(let Ne=0;Ne<Be;Ne++){let se=Ne/Be*6.283+f()*.5,at=De*(.6+f()*.5);L[Ne?"lineTo":"moveTo"](Ae+Math.cos(se)*at,k+Math.sin(se)*at*.8)}L.closePath(),L.fill(),L.strokeStyle="rgba(20,18,16,.45)",L.lineWidth=1,L.stroke()}},1/.45,1/.45),b=x(256,256,(L,ae,he)=>{let Se=L.createImageData(ae,he),Ae=Se.data;for(let k=0;k<he;k++)for(let De=0;De<ae;De++){let xe=k/he,Be=(f()-.5)*26,Ne=Math.sin(k*.11+Math.sin(De*.05)*1.6)*6,se=(k*ae+De)*4;Ae[se]=90-30*xe+Be+Ne,Ae[se+1]=68-22*xe+Be*.9+Ne,Ae[se+2]=50-12*xe+Be*.8+Ne*.6,Ae[se+3]=255}L.putImageData(Se,0,0),g(L,ae,he,160,["rgba(150,140,124,.8)","rgba(120,112,100,.8)","rgba(70,60,50,.7)"],.8,3.2)},1/1.7,1/1.7);b.wrapT=ws,b.offset.set(0,1+2.9/1.7);let y=i.std(16777215,.92,0,{map:m}),M=i.std(16777215,1,0,{map:_}),T=i.std(16777215,1,0,{map:b}),R=o.rubber,v=i.std(9341828,.7,0),A=i.std(10920859,.8,0),I=i.std(2060240,.15,0,{emissive:5220095,emissiveIntensity:.55}),G=o.blackPlastic,w=o.rubber,U=(L,ae,he,Se)=>{let Ae=Hn(he),k=[],De=[],xe=16;for(let Be=3;Be<=ae-3;Be+=6)xe=Math.max(7,Math.min(25,xe+(Ae()-.5)*5)),k.push([Be,xe]);for(let Be=0;Be<4;Be++){let Ne=3+(Ae()*(k.length-6)|0),se=k[Ne];De.push([se,[se[0]+8+Ae()*26,se[1]+(Ae()>.5?1:-1)*(5+Ae()*7)]])}return{key:L,w:ae,h:32,draw(Be){let Ne=(se,at)=>{Be.strokeStyle=at,Be.lineWidth=se,Be.lineJoin=Be.lineCap="round",Be.beginPath(),k.forEach((Je,mt)=>Be[mt?"lineTo":"moveTo"](Je[0],Je[1])),Be.stroke()};if(Se){Ne(8,"rgba(74,72,68,1)"),Ne(3,"rgba(98,95,90,.9)");return}Ne(3.4,"rgba(150,144,134,.35)"),Ne(1.6,"rgba(16,14,12,.92)"),Be.lineWidth=.9,Be.strokeStyle="rgba(16,14,12,.8)",De.forEach(([se,at])=>{Be.beginPath(),Be.moveTo(se[0],se[1]),Be.lineTo(at[0],at[1]),Be.stroke()})}}},N=c([{key:"warn",text:"RADON SYSTEM",sub:"DO NOT TURN OFF",w:384,h:112,size:50,color:"#16130c",bg:"#e3bd2f"},{key:"info",w:384,h:150,draw(L,ae,he){L.fillStyle="#e8e3d6",L.fillRect(0,0,ae,he),L.fillStyle="#1a1c20",L.textAlign="left",L.textBaseline="middle",L.font="700 25px ui-monospace, Menlo, monospace",L.fillText("RADON MITIGATION",14,24),L.font="500 19px ui-monospace, Menlo, monospace",["SUB-SLAB DEPRESSURIZATION","INSTALLED 2026-11","BEFORE: 412 Bq/m\xB3","RETEST: 91-DAY TEST"].forEach((Se,Ae)=>L.fillText(Se,14,56+Ae*24))}},{key:"air",text:"AIRFLOW \u25B2",w:224,h:56,size:30,color:"#16130c",bg:"#e8e3d6"},{key:"fan",text:"RADON FAN",sub:"120 V \xB7 60 Hz \xB7 85 W",w:384,h:104,size:44,color:"#2a2c30"},{key:"jbox",text:"RADON FAN",sub:"DISCONNECT",w:224,h:84,size:34,color:"#16130c",bg:"#e3bd2f"},{key:"sump",text:"SEALED SUMP",sub:"RADON \xB7 KEEP CLOSED",w:320,h:96,size:38,color:"#16130c",bg:"#e8e3d6"},{key:"alpha",w:160,h:160,draw(L,ae){L.fillStyle="#e8e3d6",L.beginPath(),L.arc(ae/2,ae/2,ae/2-2,0,6.3),L.fill(),L.fillStyle="#1a1c20",L.textAlign="center",L.textBaseline="middle",L.font="700 17px ui-monospace, Menlo, monospace",L.fillText("ALPHA TRACK",ae/2,46),L.font="600 14px ui-monospace, Menlo, monospace",L.fillText("LONG-TERM \xB7 91 d",ae/2,72),L.font="500 13px ui-monospace, Menlo, monospace",L.fillText("START 11-10",ae/2,96),L.fillText("DO NOT OPEN",ae/2,116)}},{key:"scale",w:64,h:300,draw(L,ae,he){L.fillStyle="#ebe7dd",L.fillRect(0,0,ae,he),L.fillStyle="#1a1c20",L.strokeStyle="#1a1c20",L.textBaseline="middle",L.textAlign="center";for(let Se=-11;Se<=11;Se++){let Ae=he/2-Se*11,k=Se%5===0;L.lineWidth=k?2:1,L.beginPath(),L.moveTo(k?10:18,Ae),L.lineTo(ae-(k?10:18),Ae),L.stroke()}L.font="700 15px ui-monospace, Menlo, monospace",L.fillText("0",ae/2,he/2-9),L.font="600 12px ui-monospace, Menlo, monospace",L.fillText("Pa",ae/2,12),L.fillText("250",ae/2,he/2-64),L.fillText("250",ae/2,he/2+64)}},U("ca",512,7,!1),U("cas",512,7,!0),U("cb",384,9,!1),U("cbs",384,9,!0)],{width:1024,emissive:.22}),H=[];{let L=400;for(let ae=0;ae<46;ae++)L=ht(L,330+f()*200,.45),H.push(L)}let $=c([{key:"mon",w:256,h:192,value:412,after:0,draw(L,ae,he,Se){L.fillStyle="#06080c",L.fillRect(0,0,ae,he);let Ae=Math.round(Se.value),k=Ae>=200?"#ff6b4f":Ae>=100?"#f4bd7e":"#8fd3a6";L.textBaseline="middle",L.textAlign="left",L.fillStyle="#8b93a1",L.font="600 15px ui-monospace, Menlo, monospace",L.fillText("RADON",14,18),L.textAlign="right",L.fillText(Se.after>.5?"RETEST":"91-DAY AVG",ae-14,18),Se.after>.5&&(L.textAlign="right",L.fillStyle="#8b93a1",L.font="500 15px ui-monospace, Menlo, monospace",L.fillText("was 412",ae-14,52)),L.textAlign="left",L.fillStyle=k,L.font="700 64px ui-monospace, Menlo, monospace";let De=String(Ae);L.fillText(De,12,66);let xe=L.measureText(De).width;L.fillStyle="#cfd4da",L.font="500 17px ui-monospace, Menlo, monospace",L.fillText("Bq/m\xB3",20+xe,80);let Be=178,Ne=64/480,se=14,at=(ae-28)/(H.length-1);L.strokeStyle="rgba(139,147,161,.6)",L.lineWidth=1,L.setLineDash([4,4]),L.beginPath(),L.moveTo(se,Be-200*Ne),L.lineTo(ae-14,Be-200*Ne),L.stroke(),L.setLineDash([]),L.fillStyle="#8b93a1",L.font="500 12px ui-monospace, Menlo, monospace",L.fillText("200",se,Be-200*Ne-9),L.strokeStyle=k,L.lineWidth=2.2,L.beginPath(),H.forEach((Je,mt)=>{let Ft=Se.after*Rt(H.length-12,H.length-1,mt),Yt=ht(Je,Se.value+(Je-420)*.08,Ft);L[mt?"lineTo":"moveTo"](se+mt*at,Be-Yt*Ne)}),L.stroke()}}],{width:256,emissive:.8}),z=(L,ae,he,Se,Ae,k,De,xe,Be)=>{let Ne=L.plane(ae,he,Be),se=Ne.geometry.attributes.uv,at=1,Je=0,mt=1,Ft=0;for(let sn=0;sn<se.count;sn++)at=Math.min(at,se.getX(sn)),Je=Math.max(Je,se.getX(sn)),mt=Math.min(mt,se.getY(sn)),Ft=Math.max(Ft,se.getY(sn));let Yt=new an(he,Ne.geometry.parameters.height,16,1),hn=Yt.attributes.position,Pn=Yt.attributes.uv;for(let sn=0;sn<hn.count;sn++){let In=xe+hn.getX(sn)/Se;hn.setXYZ(sn,Ae+Se*Math.sin(In),k+hn.getY(sn),De+Se*Math.cos(In)),Pn.setXY(sn,ht(at,Je,Pn.getX(sn)),ht(mt,Ft,Pn.getY(sn)))}return Yt.computeVertexNormals(),Ne.geometry.dispose(),Ne.geometry=Yt,Ne},q=(L,ae,he,Se,Ae=.0015)=>{let k=he[0]-ae[0],De=he[1]-ae[1],xe=Math.hypot(k,De);return N.plane(L,xe,Se,(ae[0]+he[0])/2,Mr+Ae,(ae[1]+he[1])/2,{rot:[-Math.PI/2,0,Math.atan2(-De,k)]})},Z=(L,ae,he,Se,Ae,k,De,xe,Be={})=>{let Ne=(L+ae)/2,se=(he+Se)/2,at=(Ae+k)/2;return s(ae-L,Se-he,k-Ae,De,Ne,se,at,xe,{uv:{ox:Ne,oy:se,oz:at},...Be})},W=ii-.5;Z(-5,5,Jn,Mr,-4,ii,y,d),Z(-5,5,Jn,Mr,as,4,y,d),Z(-5,Pi,Jn,Mr,ii,as,y,d),Z(Ii,5,Jn,Mr,ii,as,y,d),[[-5,Pi,-4,ii],[Ii,5,-4,ii],[Pi,Ii,-4,W],[-5,5,as,4],[-5,Pi,ii,as],[Ii,5,ii,as]].forEach(([L,ae,he,Se])=>Z(L,ae,As,Jn,he,Se,M,d,{cast:!1})),[[-5.6,Pi,-4.6,ii],[Ii,5.6,-4.6,ii],[Pi,Ii,-4.6,W],[-5.6,5.6,as,4.6],[-5.6,Pi,ii,as],[Ii,5.6,ii,as]].forEach(([L,ae,he,Se])=>Z(L,ae,_c,As,he,Se,T,d,{cast:!1})),Z(Pi,Ii,_c,Qf,ii,as,T,d,{cast:!1}),Z(Pi,Ii,Jn-.004,Jn,ii,ii+.002,R,d,{cast:!1}),Z(Pi-.002,Pi,Jn-.004,Jn,ii,as,R,d,{cast:!1}),Z(Ii,Ii+.002,Jn-.004,Jn,ii,as,R,d,{cast:!1});{let L=t>=1?260:120,ae=new Nr(1,0),he=new Mi(ae,i.std(16777215,1,0),L),Se=new kt,Ae=new Vn,k=new Ui,De=new F,xe=new F,Be=new Et,Ne=0;for(;Ne<L;){let se=f(),at=As+.012+f()*(Jn-As-.024),Je=.007+f()*.013,mt=f();if(mt<.6){let Yt=ht(Pi+.02,Ii-.02,se);if(Math.abs(Yt-nn)<Aa+.03)continue;xe.set(Yt,at,ii+Je*.25)}else mt<.8?xe.set(Pi+Je*.25,at,ht(ii+.02,as-.02,se)):xe.set(Ii-Je*.25,at,ht(ii+.02,as-.02,se));De.set(Je,Je*(.6+f()*.4),Je*(.7+f()*.3)),Ae.setFromEuler(k.set(f()*6,f()*6,f()*6)),he.setMatrixAt(Ne,Se.compose(xe,Ae,De));let Ft=.07+f()*.07;he.setColorAt(Ne,Be.setRGB(Ft,Ft*.97,Ft*.9)),Ne++}he.castShadow=!1,he.receiveShadow=!0,d.add(he)}Z(Pi,Ii,As,Jn,W,ii,M,p,{cast:!1}),Z(Pi,Ii,_c,As,W,ii,T,p,{cast:!1});{let L=Math.asin((Jn-As)/Aa),ae=Math.cos(L)*Aa,he=(Je,mt)=>{let Ft=new Rs(Je,{depth:ii-W,bevelEnabled:!1,curveSegments:20});Ft.translate(0,0,W);let Yt=new Fe(Ft,mt);return Yt.receiveShadow=!0,u.add(Yt),Yt},Se=new Ei;Se.moveTo(Pi,Jn),Se.lineTo(nn-Aa,Jn),Se.absarc(nn,Jn,Aa,Math.PI,Math.PI+L,!1),Se.lineTo(Pi,As),Se.closePath();let Ae=new Ei;Ae.moveTo(Ii,Jn),Ae.lineTo(Ii,As),Ae.lineTo(nn+ae,As),Ae.absarc(nn,Jn,Aa,-L,0,!1),Ae.closePath();let k=new Ei;k.moveTo(Pi,As),k.lineTo(nn-ae,As),k.absarc(nn,Jn,Aa,Math.PI+L,2*Math.PI-L,!1),k.lineTo(Ii,As),k.lineTo(Ii,_c),k.lineTo(Pi,_c),k.closePath(),he(Se,M),he(Ae,M),he(k,T);let De=new jn(Aa,24,10,Math.PI,Math.PI,Math.PI/2,Math.PI/2);De.translate(nn,Jn,En);let xe=De.attributes.position,Be=De.attributes.uv;for(let Je=0;Je<xe.count;Je++)Be.setXY(Je,xe.getX(Je)+xe.getZ(Je)*.7,xe.getY(Je));let Ne=De.index.array;for(let Je=0;Je<Ne.length;Je+=3){let mt=Ne[Je+1];Ne[Je+1]=Ne[Je+2],Ne[Je+2]=mt}let se=De.attributes.normal;for(let Je=0;Je<se.count;Je++)se.setXYZ(Je,-se.getX(Je),-se.getY(Je),-se.getZ(Je));let at=new Fe(De,M);at.receiveShadow=!0,u.add(at)}q("ca",Mc[0],Mc[1],d),q("cb",Ec[0],Ec[1],d),q("cas",Mc[0],Mc[1],u,.003),q("cbs",Ec[0],Ec[1],u,.003),Z(-4.9,4.9,Mr-.002,Mr+.0012,Cs,Cs+.012,w,d,{cast:!1,receive:!1}),s(9.8,.012,.016,v,0,Mr+.004,Cs+.008,u,{r:.005,cast:!1});let J=Mr+.05,me=o.whitePlastic;r(.024,-.12-J,me,Si,(J-.12)/2,_i,d),r(.034,.1,o.rubber,Si,-2.3,_i,d,{seg:16}),[-2.34,-2.26].forEach(L=>r(.036,.012,o.galv,Si,L,_i,d,{seg:16,cast:!1})),a([[Si,-.2,_i],[Si,-.13,_i+.02],[Si,-.12,_i+.1]],.024,me,d,{radial:12,seg:10}),r(.024,4-_i-.1,me,Si,-.12,(_i+.1+3.99)/2,d,{axis:"z"}),a([[Si+.06,J+.03,_i+.05],[Si+.05,-2.4,_i+.03],[Si+.03,-1.6,_i+.03],[Si+.03,-.26,_i+.03]],.004,o.rubber,d,{radial:5,cast:!1}),r(.345,.022,o.blackPlastic,Si+.012,J+.011,_i-.016,p,{seg:40}).rotation.set(.015,0,-.012),r(.055,.003,w,Si,J+.024,_i,p,{seg:20,cast:!1}),s(.035,.004,.05,w,Si+.06,J+.023,_i+.06,p,{cast:!1});{r(.35,.02,o.blackPlastic,Si,J+.01,_i,u,{seg:40});let L=new Fe(new Qi(.346,.006,6,48),v);L.rotation.x=Math.PI/2,i.place(L,Si,J+.004,_i,u,{cast:!1});for(let ae=0;ae<10;ae++){let he=ae/10*Math.PI*2;r(.009,.008,o.galv,Si+Math.cos(he)*.318,J+.024,_i+Math.sin(he)*.318,u,{seg:8,cast:!1})}r(.036,.016,o.rubber,Si,J+.026,_i,u,{seg:16,cast:!1}),r(.011,.012,o.rubber,Si+.06,J+.025,_i+.05,u,{seg:10,cast:!1}),N.plane("sump",.16,u,Si-.1,J+.0215,_i+.15,{rot:[-Math.PI/2,0,.35]})}s(.9,.022,.2,o.plywood,pi.x,pi.y-.011,pi.z,d,{uv:{ox:1,oz:1}}),[-.33,.33].forEach(L=>{let ae=pi.x+L;s(.022,.15,.004,G,ae,pi.y-.097,Cs+.002,d,{cast:!1}),s(.022,.004,.17,G,ae,pi.y-.024,Cs+.087,d,{cast:!1});let he=s(.016,.004,.2,G,ae,pi.y-.085,Cs+.077,d,{cast:!1});he.rotation.x=-.71,[-.05,-.13].forEach(Se=>r(.006,.006,o.galv,ae,pi.y+Se,Cs+.006,d,{axis:"z",seg:8,cast:!1}))}),r(.034,.016,o.greyPlastic,pi.x-.24,pi.y+.008,pi.z+.01,d,{seg:28}),r(.03,.004,o.blackPlastic,pi.x-.24,pi.y+.018,pi.z+.01,d,{seg:28,cast:!1}),N.plane("alpha",.056,d,pi.x-.24,pi.y+.0205,pi.z+.01,{rot:[-Math.PI/2,0,.2]});{let L=new yt;L.position.set(Er.x,pi.y,Er.z),L.rotation.y=-.22,d.add(L),s(.105,.155,.04,o.whitePlastic,0,.0775,0,L,{r:.012}),s(.092,.074,.003,o.blackPlastic,0,.105,.02,L,{cast:!1}),$.plane("mon",.086,L,0,.105,.0218);for(let ae=0;ae<5;ae++)s(.05,.003,.002,o.greyPlastic,0,.022+ae*.008,.0202,L,{cast:!1})}let Ie=Math.sin(Ja),qe=Math.cos(Ja);r(ni,gs-.24-(Jn-.08),A,nn,(gs-.24+Jn-.08)/2,En,u,{seg:28}),r(ni,$o-gs-.22,A,nn,($o+gs+.22)/2,En,u,{seg:28}),r(ni+.014,.012,v,nn,Mr+.005,En,u,{seg:28,cast:!1}),[-1.95,-.62,2,5].forEach(L=>r(ni+.006,.07,A,nn,L,En,u,{seg:28})),s(.91,.14,.038,o.plywood,-1.5,-.18,En-ni-.022,u,{uv:!0});{let L=new Fe(new Qi(ni+.003,.0022,4,24,Math.PI),o.galv);L.rotation.set(-Math.PI/2,0,0),i.place(L,nn,-.16,En,u,{cast:!1}),[-1,1].forEach(ae=>{s(.028,.03,.002,o.galv,nn+ae*(ni+.016),-.16,En-ni-.002,u,{cast:!1}),r(.005,.004,o.galv,nn+ae*(ni+.02),-.16,En-ni+.001,u,{axis:"z",seg:8,cast:!1})})}z(N,"warn",.11,ni+.0012,nn,-1.18,En,Ja,u),z(N,"info",.1,ni+.0012,nn,-2.18,En,Ja,u),z(N,"air",.07,ni+.0012,nn,-.88,En,Ja,u);let $e=[];{let L=new yt;L.position.set(nn+Ie*(ni+.014),-1.58,En+qe*(ni+.014)),L.rotation.y=Ja,u.add(L),s(.064,.2,.006,o.whitePlastic,0,0,0,L,{r:.003}),N.plane("scale",.026,L,0,-.005,.0034),[.075,-.075].forEach(Se=>s(.03,.014,.014,o.whitePlastic,0,Se,-.009,L,{cast:!1}));let ae=o.glassClear;[-.019,.019].forEach(Se=>r(.0042,.16,ae,Se,0,.009,L,{seg:10,cast:!1}));let he=[[-.019,-.08,.009],[-.019,-.088,.009],[-.012,-.096,.009],[0,-.098,.009],[.012,-.096,.009],[.019,-.088,.009],[.019,-.08,.009]];a(he,.0042,ae,L,{radial:8,seg:16,cast:!1}),a(he,.003,I,L,{radial:6,seg:16,cast:!1}),[-.019,.019].forEach(Se=>{let Ae=new vn(.003,.003,1,8);Ae.translate(0,.5,0);let k=new Fe(Ae,I);k.position.set(Se,-.08,.009),k.userData.keep=!0,k.castShadow=!1,L.add(k),$e.push(k)}),r(.0055,.008,o.blackPlastic,.019,.083,.009,L,{seg:10,cast:!1}),a([[-.019,.08,.009],[-.019,.1,.01],[-.024,.118,0],[-.022,.124,-.014]],.003,o.glassClear,L,{radial:6,seg:12,cast:!1}),r(.007,.008,o.rubber,-.022,.124,-.016,L,{axis:"z",seg:10,cast:!1}),[.075,-.075].forEach(Se=>{let Ae=new Fe(new Qi(ni+.0015,.0018,4,32),o.blackPlastic);Ae.rotation.x=Math.PI/2,i.place(Ae,nn,-1.58+Se,En,u,{cast:!1})})}{let L=o.whitePlastic,ae=o.greyPlastic,he=se=>{r(ni+.011,.1,o.rubber,nn,se,En,u,{seg:28}),[se-.03,se+.03].forEach((at,Je)=>{r(ni+.0125,.012,o.galv,nn,at,En,u,{seg:28,cast:!1});let mt=Ja-1.1+Je*.5;s(.016,.012,.012,o.galv,nn+Math.sin(mt)*(ni+.018),at,En+Math.cos(mt)*(ni+.018),u,{rot:[0,mt,0],cast:!1})})};he(gs-.27),he(gs+.27),r(ni+.002,.06,ae,nn,gs-.2,En,u,{seg:28}),r(ni+.002,.06,ae,nn,gs+.2,En,u,{seg:28}),r(.07,.06,L,nn,gs-.11,En,u,{seg:36,r2:.135}),r(.135,.06,L,nn,gs+.11,En,u,{seg:36,r2:.07}),r(.135,.16,L,nn,gs,En,u,{seg:36}),r(.1375,.012,ae,nn,gs+.02,En,u,{seg:36,cast:!1}),z(N,"fan",.16,.1365,nn,gs-.03,En,-.9,u);let Se=Math.atan(.72),Ae=se=>Vm(se)-.2466;[-3,-2.4,-1.8,-1.2,-.6,0].forEach(se=>s(4.84/Math.cos(Se),.14,.038,o.plywood,-2.48,Ae(-2.48)-.07/Math.cos(Se),se,u,{rot:[0,0,Se],uv:!0})),s(.038,.18,4.2,o.plywood,0,Ae(0)-.09,-1.5,u,{uv:!0});let k={x:nn-.35,z:-1.8},De=Ae(k.x)-.14/Math.cos(Se);s(.089,De-6.37,.038,o.plywood,k.x,(De+6.37)/2,k.z,u,{uv:!0}),s(.11,.11,.055,o.greyPlastic,k.x,7.75,k.z+.047,u,{r:.006}),s(.018,.03,.014,o.blackPlastic,k.x,7.77,k.z+.081,u,{cast:!1}),N.plane("jbox",.075,u,k.x,7.72,k.z+.0752);let xe=[nn+Math.sin(Math.PI+.25)*.135,gs-.04,En+Math.cos(Math.PI+.25)*.135];r(.008,.016,o.blackPlastic,xe[0],xe[1],xe[2]-.006,u,{axis:"z",seg:10,cast:!1}),a([[xe[0],xe[1],xe[2]-.012],[xe[0]+.02,xe[1]-.12,xe[2]-.1],[k.x+.02,7.62,k.z+.12],[k.x,7.69,k.z+.06]],.0045,o.blackPlastic,u,{radial:6,cast:!1}),a([[k.x+.03,7.69,k.z+.05],[k.x+.05,7.4,k.z+.03],[k.x+.055,6.6,k.z+.025],[k.x+.2,6.42,k.z+.1]],.006,o.rubber,u,{radial:6,cast:!1}),[-1,1].forEach(se=>{s(.34,.03,.006,o.galv,nn,6.44,En+se*(ni+.004),u,{cast:!1}),[-.15,.15].forEach(at=>r(.006,.03,o.galv,nn+at,6.44,En,u,{axis:"z",seg:8,cast:!1}))});let Be=Vm(nn),Ne=Math.atan(.72);s(.42,.006,.42,o.galv,nn,Be+.003/Math.cos(Ne),En,u,{rot:[0,0,Ne],cast:!1}),r(.13,.15,o.rubber,nn,Be+.09,En,u,{seg:28,r2:ni+.008}),r(ni+.012,.02,o.galv,nn,Be+.2,En,u,{seg:28,cast:!1}),r(ni+.004,.02,o.galv,nn,$o-.005,En,u,{seg:28,cast:!1}),r(ni-.004,.002,w,nn,$o-.004,En,u,{seg:24,cast:!1})}let xt=new Set([A,o.plywood,o.whitePlastic,o.blackPlastic,o.rubber,y]);[d,p,u].forEach(L=>L.traverse(ae=>{ae.isMesh&&!ae.isInstancedMesh&&(ae.castShadow=xt.has(ae.material)&&ae.renderOrder===0,ae.receiveShadow=!0)})),i.bake(d),i.bake(p),i.bake(u);let re=14257407,fe=i.particles(300,{color:re,size:.065,gain:2.2}),Ue=fe.userData.n,we=fe.userData.pos,Ve=new Float32Array(Ue*4),ie=new Float32Array(Ue*3),Qe=(L,ae)=>{we[L*3]=ht(Pi+.03,Ii-.03,f()),we[L*3+1]=ae?ht(Qf,Jn-.03,f()):Qf+f()*.08,we[L*3+2]=ht(ii+.02,as-.05,f()),Ve[L*4]=.05+f()*.08,Ve[L*4+1]=f()*6.28;let he=f(),Se=(f()-.5)*.6;he<.4?(Ve[L*4+2]=Se,Ve[L*4+3]=-1):he<.6?(Ve[L*4+2]=-1,Ve[L*4+3]=Se):he<.75?(Ve[L*4+2]=1,Ve[L*4+3]=Se):(Ve[L*4+2]=Se,Ve[L*4+3]=1)};for(let L=0;L<Ue;L++){Qe(L,!0);let ae=f();ie[L*3]=ht(we[L*3],Jo.x,ae),ie[L*3+1]=ht(we[L*3+1],Jo.y,ae*ae),ie[L*3+2]=ht(we[L*3+2],Jo.z,ae)}let le=we.slice(),ye=i.particles(170,{color:re,size:.055,gain:1.8}),ee=ye.userData.n,ge=ye.userData.pos,Te=new Float32Array(ee*4),Ze=(L,ae,he,Se)=>{he[Se*3]=ht(L[0][0],L[1][0],ae),he[Se*3+2]=ht(L[0][1],L[1][1],ae)},Ye=(L,ae)=>{let he=f();if(he<.3)Ze(Mc,f(),ge,L);else if(he<.48)Ze(Ec,f(),ge,L);else if(he<.8)ge[L*3]=ht(Wm[0],Wm[1],f()),ge[L*3+2]=Cs+.012;else{let Se=f()*6.283,Ae=f()<.4?.06:.35;ge[L*3]=Si+Math.cos(Se)*Ae,ge[L*3+2]=_i+Math.sin(Se)*Ae}if(ge[L*3+1]=Mr+.01,Te[L*4]=.03+f()*.11,Te[L*4+1]=f()*6.28,Te[L*4+2]=4+f()*10,Te[L*4+3]=0,ae){let Se=f()*Te[L*4+2];Te[L*4+3]=Se,ge[L*3+1]+=Te[L*4]*Se*.85}};for(let L=0;L<ee;L++)Ye(L,!0);let ut=i.particles(80,{color:re,size:.08,gain:1.2}),ft=ut.userData.n,Q=ut.userData.pos,It=new Float32Array(ft*4),At=(L,ae)=>{if(Q[L*3]=nn+(f()-.5)*.05,Q[L*3+1]=$o,Q[L*3+2]=En+(f()-.5)*.05,It[L*4]=.45+f()*.35,It[L*4+1]=f()*6.28,It[L*4+2]=2+f()*1.6,It[L*4+3]=0,ae){let he=f()*It[L*4+2];It[L*4+3]=he,B(L,he,0)}},B=(L,ae,he)=>{let Se=It[L*4+3]/It[L*4+2],Ae=It[L*4+1];Q[L*3+1]+=It[L*4]*(1-.6*Se)*ae,Q[L*3]+=(-.22*Se+Math.sin(Ae)*.12*Se)*ae,Q[L*3+2]+=(.08*Se+Math.cos(Ae+he*.3)*.12*Se)*ae};for(let L=0;L<ft;L++)At(L,!0);h.add(fe,ye,ut);let S={soil:l(-.45,-3.42,ii+.02),test:l(Er.x,pi.y+.1,Er.z+.03),pit:l(nn,Jn-.12,En+.04),fan:l(nn-.08,gs,En+.11),stack:l(nn,$o-.15,En),after:l(Er.x,pi.y+.1,Er.z+.03)},ue={time:19.4,cut:0,ghost:0,ground:1,orbit:.012},ce=[{...ue,radius:15,theta:.6,phi:1.36,fx:-.6,ty:-1.5,fz:-.8,cut:1,ground:0,dof:0,orbit:.025},{...ue,radius:1.6,theta:.2,phi:1.36,fx:Er.x-.05,ty:pi.y+.07,fz:Cs+.1,dof:1.1,narrow:{fx:Er.x-.12}},{...ue,radius:2.9,theta:.38,phi:1.2,fx:nn+.25,ty:-3,fz:En,dof:1,narrow:{fx:nn+.05}},{...ue,radius:2.6,theta:.5,phi:1.5,fx:nn,ty:8.05,fz:En,dof:.9,orbit:.012,narrow:{ty:7.85}},{...ue,radius:.78,theta:-.12,phi:1.47,fx:Er.x,ty:pi.y+.1,fz:Er.z+.02,dof:1.3}],Me=0,st=0,nt=412,Oe=412,ze=0,je=0,vt=-1;return{name:"radon",group:h,anchors:S,shots:ce,hides(L){let ae=[...L.sys.radon?L.sys.radon.meshes:[]];return L.sys.foundation&&L.sys.foundation.meshes.forEach(he=>{Math.abs(he.position.y+2.88)<.01&&ae.push(he)}),L.layers.basement.traverse(he=>{he.isMesh&&Math.abs(he.position.x-Si)<.01&&Math.abs(he.position.z-_i)<.01&&ae.push(he)}),ae},light(L){return L===0?{pos:[.6,-.6,.9],at:[-.9,-3.1,-1.1],power:.75,fill:.6}:L===1?{pos:[-.3,-.9,-2.4],at:[pi.x+.1,pi.y,Cs],power:.4,fill:.5}:L===2?{pos:[.2,-1.6,.4],at:[nn+.1,Jn-.2,En],power:.4}:L===3?{pos:[.3,8.85,.3],at:[nn,gs,En],power:.75,fill:.35}:L===4?{pos:[.2,-1.05,-2.9],at:[Er.x,pi.y+.08,Cs],power:.35,fill:.4}:{pos:[-2.3,-.9,.3],at:[-1,-1.7,-2.4],power:.5}},update({step:L,t:ae,dt:he,snap:Se}){let Ae=L>=2?1:0,k=se=>Se?1:1-Math.exp(-he*se);Me=ht(Me,Ae,k(1.6)),st=ht(st,Ae,k(1.2)),p.visible=!Ae,u.visible=!!Ae;let De=.022*st;$e[0].scale.y=.08+De,$e[1].scale.y=.08-De,nt=L===4?ht(nt,45,k(1.3)):ht(nt,412,k(6)),je=ht(je,L===4?1:0,k(1.3));let xe=Math.round(nt),Be=Math.round(je*20)/20;if((xe!==Oe||Be!==ze)&&(Oe=xe,ze=Be,$.set("mon",void 0,void 0,{value:xe,after:Be})),ye.material.opacity=1-Me,ye.visible=Me<.98,ut.material.opacity=Rt(.3,1,st),ut.visible=st>.3,n){let se=Me>.5?1:0;se!==vt&&(vt=se,we.set(se?ie:le),fe.geometry.attributes.position.needsUpdate=!0);return}let Ne=Math.min(he,.05);for(let se=0;se<Ue;se++){let at=we[se*3],Je=we[se*3+1],mt=we[se*3+2],Ft=Ve[se*4],Yt=Ve[se*4+1],hn=Math.sin(ae*.9+Yt)*.02,Pn=Ft,sn=Math.cos(ae*.7+Yt)*.02,In=Rt(As-.03,Jn-.03,Je);hn+=Ve[se*4+2]*.14*In,sn+=Ve[se*4+3]*.14*In,Pn*=1-In;let yn=Jo.x-at,C=Jo.y-Je,be=Jo.z-mt,Le=Math.hypot(yn,C,be)+1e-4,lt=(.12+Ft)*(.7+.35/(Le+.2)),ct=yn/Le*lt+Math.sin(ae*1.3+Yt)*.015,Gt=C/Le*lt,Dt=be/Le*lt;we[se*3]=at+ht(hn,ct,Me)*Ne,we[se*3+1]=Math.min(Je+ht(Pn,Gt,Me)*Ne,Jn-.015),we[se*3+2]=mt+ht(sn,Dt,Me)*Ne,(we[se*3]<Pi-.03||we[se*3]>Ii+.03||we[se*3+2]<ii-.04||we[se*3+2]>as+.03||Me>.5&&Le<.06)&&Qe(se,!1)}if(fe.geometry.attributes.position.needsUpdate=!0,ye.visible){for(let se=0;se<ee;se++){let at=Te[se*4+1];if(Te[se*4+3]+=Ne,Te[se*4+3]>Te[se*4+2]){Ye(se,!1);continue}ge[se*3+1]+=Te[se*4]*Ne*(1-.3*Te[se*4+3]/Te[se*4+2]),ge[se*3]+=Math.sin(ae*.5+at)*.035*Ne,ge[se*3+2]+=Math.cos(ae*.4+at*1.3)*.035*Ne}ye.geometry.attributes.position.needsUpdate=!0}if(ut.visible){for(let se=0;se<ft;se++)It[se*4+3]+=Ne,It[se*4+3]>It[se*4+2]?At(se,!1):B(se,Ne,ae);ut.geometry.attributes.position.needsUpdate=!0}}}}var Ut=-2.8,Yn=-.27,ra=1.8,Yi=4.88,si=-2.93,Ku=2.45,ns=Yi-ra,is=Ku-si,cr=(ra+Yi)/2,Hs=(si+Ku)/2,zs=.6,qu=4.9375,Sc=-2.9875,Sr=.3,xs=1.24,Gs=new F(4.775,-.45,-.7),os=new F(2.75,Ut,-1.45),zn=new F(2.22,1.29,-3.42),Ca=1.585,Zu=Ca-1.29-.012,$u=-3.26- -3.42,bi={x0:-.4,x1:Yi,z0:si,z1:2.62},br=(i,e,t)=>{let n=document.createElement("canvas");return n.width=i,n.height=e,t(n.getContext("2d"),i,e),n},ks=(i,e={})=>{let t=new $n(i);return e.color!==!1&&(t.colorSpace=bn),e.wrap!==!1&&(t.wrapS=t.wrapT=Qn),e.repeat&&t.repeat.set(e.repeat[0],e.repeat[1]),t.anisotropy=8,t},Ju=(i,e,t,n,s,r)=>{i.save(),i.translate(e,t),i.scale(1,s/n);let a=i.createRadialGradient(0,0,0,0,0,n);r.forEach(([o,c])=>a.addColorStop(o,c)),i.fillStyle=a,i.beginPath(),i.arc(0,0,n,0,6.2832),i.fill(),i.restore()};function Ym({kit:i,M:e}){let{box:t,cyl:n,sphere:s,tube:r,mats:a,atlas:o,V:c}=i,l=new yt,h=new yt;l.add(h);let d=(D=l)=>{let oe=new yt;return D.add(oe),oe},p=D=>{let oe=new Map,ke=tt=>{for(let Tt=tt;Tt&&Tt!==D;Tt=Tt.parent)if(Tt.userData.keep)return!0;return!1},He=[];D.traverse(tt=>{tt.isMesh&&!ke(tt)&&He.push(tt)}),He.forEach(tt=>{let Tt=oe.get(tt.material)||{cast:!1,recv:!1};Tt.cast||(Tt.cast=tt.castShadow),Tt.recv||(Tt.recv=tt.receiveShadow),oe.set(tt.material,Tt)}),He.forEach(tt=>{let Tt=oe.get(tt.material);tt.castShadow=Tt.cast,tt.receiveShadow=Tt.recv})},u=D=>(p(D),i.bake(D),D.userData.keep=!0,D),f=(D,oe,ke,He,tt,Tt,Wt,Bt={})=>{let ln=new an(D,oe);if(Bt.u){let Xt=ln.attributes.uv;for(let Vt=0;Vt<Xt.count;Vt++)Xt.setX(Vt,ht(Bt.u[0],Bt.u[1],Xt.getX(Vt)))}Bt.base&&ln.translate(0,oe/2,0),Bt.edge&&ln.translate(-D/2,0,0);let Sn=i.place(new Fe(ln,ke),tt,Tt,Wt,He,{cast:!1,...Bt});return Bt.ry&&(Sn.rotation.y=Bt.ry),Bt.rx&&(Sn.rotation.x=Bt.rx),Sn},x=Hn(72),g=.2286,m=ks(br(512,512,D=>{for(let ke=0;ke<4;ke++)for(let He=0;He<4;He++){let tt=(ke+He)%2===1,Tt=(tt?128:172)+(x()-.5)*14;D.fillStyle=`rgb(${Tt|0},${Tt*.93|0},${Tt*.78|0})`,D.fillRect(ke*128,He*128,128,128);for(let Wt=0;Wt<16;Wt++){let Bt=ke*128+x()*128,ln=He*128+x()*128,Sn=x()*6.28,Xt=10+x()*34;D.strokeStyle=x()>.5?`rgba(255,246,222,${.06+x()*.1})`:`rgba(60,46,30,${.06+x()*.1})`,D.lineWidth=1+x()*2.5,D.beginPath(),D.moveTo(Bt,ln),D.quadraticCurveTo(Bt+Math.cos(Sn+1)*Xt*.5,ln+Math.sin(Sn+1)*Xt*.5,Bt+Math.cos(Sn)*Xt,ln+Math.sin(Sn)*Xt),D.stroke()}}D.strokeStyle="rgba(48,38,26,.55)",D.lineWidth=2;for(let ke=0;ke<=4;ke++)D.beginPath(),D.moveTo(ke*128,0),D.lineTo(ke*128,512),D.moveTo(0,ke*128),D.lineTo(512,ke*128),D.stroke();Ju(D,300,260,220,170,[[0,"rgba(70,56,36,.16)"],[1,"rgba(70,56,36,0)"]])}),{repeat:[ns/(4*g),is/(4*g)]}),_=ks(br(256,256,(D,oe,ke)=>{D.fillStyle="#7a7a7a",D.fillRect(0,0,oe,ke);for(let He=0;He<2600;He++){let tt=x()>.3?150+x()*100:30+x()*50;D.fillStyle=`rgba(${tt|0},${tt|0},${tt|0},${.5+x()*.5})`,D.beginPath(),D.arc(x()*oe,x()*ke,.8+x()*x()*4.2,0,6.2832),D.fill()}}),{color:!1,repeat:[ns/.32,is/.32]}),b=br(32,4,(D,oe)=>{for(let ke=0;ke<oe;ke++){let He=128+120*Math.sin(ke/oe*6.2832);D.fillStyle=`rgb(${He|0},${He|0},${He|0})`,D.fillRect(ke,0,1,4)}}),y=ks(b,{color:!1,repeat:[1/.045,1]}),M=ks(b,{color:!1,repeat:[1/.014,1]}),T=br(256,256,(D,oe)=>{D.fillStyle="#000",D.fillRect(0,0,oe,oe),D.filter="blur(4px)",D.fillStyle="#fff",D.beginPath();for(let ke=0;ke<=96;ke++){let He=ke/96*6.2832,tt=oe*.4*(1+.08*Math.sin(3*He+1)+.05*Math.sin(7*He+2)+.025*Math.sin(17*He));D[ke?"lineTo":"moveTo"](oe/2+Math.cos(He)*tt,oe/2+Math.sin(He)*tt)}D.fill(),D.filter="none"}),R=D=>{let oe=ks(T,{color:!1,wrap:!1});return oe.center.set(D.cu,D.cv),oe.offset.set(.5-D.cu,.5-D.cv),oe},v=br(128,128,(D,oe,ke)=>{let He=D.createImageData(oe,ke),tt=6.2832/oe,Tt=(Wt,Bt)=>Math.sin(tt*(2*Wt+Bt))*.5+Math.sin(tt*(-Wt+3*Bt)+1.3)*.35+Math.sin(tt*(5*Wt-2*Bt)+2.1)*.2+Math.sin(tt*(3*Wt+5*Bt)+.4)*.15;for(let Wt=0;Wt<ke;Wt++)for(let Bt=0;Bt<oe;Bt++){let ln=(Tt(Bt+1,Wt)-Tt(Bt-1,Wt))*2.2,Sn=(Tt(Bt,Wt+1)-Tt(Bt,Wt-1))*2.2,Xt=Math.hypot(ln,Sn,1),Vt=(Wt*oe+Bt)*4;He.data[Vt]=(-ln/Xt*.5+.5)*255,He.data[Vt+1]=(-Sn/Xt*.5+.5)*255,He.data[Vt+2]=(1/Xt*.5+.5)*255,He.data[Vt+3]=255}D.putImageData(He,0,0)}),A=ks(br(1024,128,(D,oe,ke)=>{let He=[];for(let Wt=0;Wt<=oe;Wt+=8)He.push(ke*.13+Math.sin(Wt*.013)*5+Math.sin(Wt*.051+1)*3+(x()-.5)*3);let tt=Wt=>{D.beginPath(),He.forEach((Bt,ln)=>D[ln?"lineTo":"moveTo"](ln*8,Bt+Wt))},Tt=D.createLinearGradient(0,0,0,ke);Tt.addColorStop(0,"rgba(96,70,40,.22)"),Tt.addColorStop(1,"rgba(56,40,22,.66)"),D.fillStyle=Tt,tt(0),D.lineTo(oe,ke),D.lineTo(0,ke),D.fill(),D.strokeStyle="rgba(72,50,26,.8)",D.lineWidth=3,tt(0),D.stroke(),D.strokeStyle="rgba(80,58,30,.35)",D.lineWidth=2,tt(16),D.stroke()}),{wrap:!1}),I=ks(br(2048,256,(D,oe,ke)=>{for(let He=0;He<54;He++){let tt=x()*oe,Tt=ke*(.5+x()*.5),Wt=18+x()*70,Bt=30+x()*120|0;Ju(D,tt,Tt,Wt*1.4,Wt*1.1,[[0,"rgba(38,46,28,.42)"],[1,"rgba(38,46,28,0)"]]);for(let ln=0;ln<Bt;ln++){let Sn=x()*6.2832,Xt=Wt*Math.sqrt(x());D.fillStyle=x()>.3?`rgba(16,20,12,${.55+x()*.4})`:`rgba(86,106,64,${.4+x()*.4})`,D.beginPath(),D.arc(tt+Math.cos(Sn)*Xt,Tt+Math.sin(Sn)*Xt*.8,.8+x()*x()*5,0,6.2832),D.fill()}}}),{wrap:!1}),G=ks(br(256,256,(D,oe,ke)=>{for(let He=0;He<30;He++){let tt=He/29;Ju(D,oe/2+(x()-.5)*50*tt,ke*(.96-tt*.62),oe*(.06+.36*tt),ke*(.07+.2*tt),[[0,`rgba(12,10,8,${.42*(1-.5*tt)})`],[1,"rgba(12,10,8,0)"]])}for(let He=0;He<40;He++){let tt=oe*(.3+x()*.4);D.strokeStyle=`rgba(10,8,6,${.04+x()*.06})`,D.lineWidth=2+x()*6,D.beginPath(),D.moveTo(tt,ke),D.lineTo(tt+(tt-oe/2)*.8,ke*(.2+x()*.3)),D.stroke()}}),{wrap:!1}),w=ks(br(512,512,(D,oe,ke)=>{let He=oe/6;for(let tt=0;tt<6;tt++){let Tt=x()*ke;[[0,Tt],[Tt,ke]].forEach(([Wt,Bt])=>{let ln=150+(x()-.5)*26;D.fillStyle=`rgb(${ln|0},${ln*.9|0},${ln*.76|0})`,D.fillRect(tt*He,Wt,He,Bt-Wt);for(let Sn=0;Sn<22;Sn++){let Xt=tt*He+x()*He;D.strokeStyle=`rgba(${x()>.5?"70,52,32":"220,200,170"},${.05+x()*.08})`,D.lineWidth=.6+x()*1.6,D.beginPath(),D.moveTo(Xt,Wt),D.bezierCurveTo(Xt+4,Wt+(Bt-Wt)*.3,Xt-4,Wt+(Bt-Wt)*.7,Xt+(x()-.5)*6,Bt),D.stroke()}}),D.fillStyle="rgba(40,30,20,.5)",D.fillRect(tt*He,Tt-1,He,2),D.fillRect(tt*He,0,2,ke)}}),{repeat:[ns/1.2,is/1.2]}),U=ks(br(256,128,(D,oe,ke)=>{D.fillStyle="#c2beb2",D.fillRect(0,0,oe,ke),[[0,0],[1,0],[-.5,1],[.5,1],[1.5,1]].forEach(([He,tt])=>{let Tt=He*128+2,Wt=tt*64+2,Bt=120+(x()-.5)*12;D.fillStyle=`rgb(${Bt*.86|0},${Bt|0},${Bt*.96|0})`,D.fillRect(Tt,Wt,124,60),D.fillStyle="rgba(255,255,255,.12)",D.fillRect(Tt+4,Wt+4,116,10)})}),{repeat:[3.57/.3,.61/.15]}),N=new Et(11575946),H=new Et(11450028),$=new Et(11774872),z=new Et(11974832),q=i.std(N.getHex(),.88),Z=i.std(9077104,.95),W=i.std(12170150,.45),J=i.std($.getHex(),.95,0,{bumpMap:_,bumpScale:3}),me=i.std(16777215,.5,0,{map:m}),Ie=i.std(16777215,.55,0,{map:w}),qe=i.std(3812386,.5),$e=i.std(16777215,.25,0,{map:U}),xt=i.std(9343639,.5,.4,{bumpMap:y,bumpScale:1.5}),re=i.std(12103837,.92,0,{bumpMap:M,bumpScale:2.5}),fe=i.std(3104680,.45,.05,{side:li}),Ue=(D,oe={})=>{let ke=new cn({map:D,transparent:!0,depthWrite:!1,roughness:.9,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2,...oe});return ke.userData.th=[.5],ke},we=Ue(A),Ve=Ue(I),ie=Ue(G),Qe=ks(v,{color:!1,repeat:[(bi.x1-bi.x0)/.7,(bi.z1-bi.z0)/.7]}),le=a.water.clone();le.alphaMap=R({cu:(Gs.x-bi.x0)/(bi.x1-bi.x0),cv:(bi.z1-Gs.z)/(bi.z1-bi.z0)}),le.normalMap=Qe,le.normalScale.set(.4,.4),le.opacity=.74,le.color.set(2906748),le.roughness=.1,le.ior=1.33,le.envMapIntensity=2.4;let ye=3.8,ee=a.sewage.clone();ee.alphaMap=R({cu:.5,cv:.5}),ee.normalMap=ks(v,{color:!1,repeat:[ye/.5,ye/.5]}),ee.normalScale.set(.1,.1),ee.color.set(4930079),ee.opacity=.93,ee.roughness=.28,ee.envMapIntensity=1.8;let ge=ee.clone();ge.envMapIntensity=.35,ge.color.set(5915940),ge.alphaMap=null,ge.normalMap=null;let Ze=o([{key:"tag",text:"MAIN SHUT-OFF",w:256,h:64,size:30,color:"#16181c",bg:"#e9c22e"},{key:"reg",text:"0412.7",sub:"m\xB3",w:160,h:72,size:34,color:"#1a1c20",bg:"#d9d4c4"},{key:"cat3",w:240,h:320,draw(D,oe,ke){D.fillStyle="#e3bd2c",D.fillRect(0,0,oe,ke),D.fillStyle="#121316",D.fillRect(0,26,oe,58),D.textAlign="center",D.textBaseline="middle",D.fillStyle="#e3bd2c",D.font="800 40px ui-sans-serif, Arial, sans-serif",D.fillText("CAUTION",oe/2,56),D.fillStyle="#121316",D.font="800 34px ui-sans-serif, Arial, sans-serif",D.fillText("CATEGORY 3",oe/2,132),D.fillText("WATER",oe/2,172),D.font="600 21px ui-sans-serif, Arial, sans-serif",D.fillText("SEWAGE \xB7 NO ENTRY",oe/2,226),D.fillText("WITHOUT PPE",oe/2,256)}},{key:"hepa",text:"HEPA \xB7 99.97 %",w:256,h:44,size:24,color:"#cfd4da"},{key:"zip",text:"CONTAINMENT",sub:"KEEP ZIPPED SHUT",w:288,h:84,size:34,color:"#16181c",bg:"#e9c22e"},{key:"mano",text:"\u22126 Pa",sub:"NEGATIVE AIR",w:176,h:96,size:40,color:"#8fd3a6",bg:"#05070b"},{key:"asb",text:"ASBESTOS SAMPLING",sub:"DO NOT DISTURB",w:384,h:92,size:34,color:"#ff6b4f",bg:"#e6e1d4"},{key:"s1",text:"S-01",sub:"CEILING TEXTURE",w:176,h:72,size:32,color:"#16181c",bg:"#e6e1d4"},{key:"s2",text:"S-02",sub:"9\xD79 FLOOR TILE",w:176,h:72,size:32,color:"#16181c",bg:"#e6e1d4"},{key:"s3",text:"S-03",sub:"PIPE WRAP",w:176,h:72,size:32,color:"#16181c",bg:"#e6e1d4"},{key:"lab",w:300,h:384,draw(D,oe){D.fillStyle="#d8d3c5",D.fillRect(0,0,oe,384),D.textAlign="left",D.textBaseline="middle",D.fillStyle="#16181c",D.font="700 22px ui-monospace, Menlo, monospace",D.fillText("LAB RESULTS \xB7 PLM",16,30),D.font="500 14px ui-monospace, Menlo, monospace",D.fillStyle="#4a4d52",D.fillText("BULK SAMPLES \xB7 3",16,58),D.fillStyle="#16181c",D.fillRect(16,74,oe-32,2),[["S-01 CEILING","NONE DETECTED","#2f7a4c"],["S-02 FLOOR TILE","CHRYSOTILE 3 %","#c2402b"],["S-03 PIPE WRAP","CHRYSOTILE 60 %","#c2402b"]].forEach(([ke,He,tt],Tt)=>{let Wt=108+Tt*78;D.fillStyle="#16181c",D.font="700 18px ui-monospace, Menlo, monospace",D.fillText(ke,16,Wt),D.fillStyle=tt,D.font="700 20px ui-monospace, Menlo, monospace",D.fillText(He,16,Wt+28),D.fillStyle="rgba(20,22,26,.3)",D.fillRect(16,Wt+50,oe-32,1)}),D.fillStyle="#c2402b",D.font="800 20px ui-monospace, Menlo, monospace",D.fillText("ABATE BEFORE DEMO",16,352)}},{key:"rh",text:"RH 46 %",sub:"PUMP ON",w:176,h:88,size:36,color:"#9fc4ff",bg:"#05070b"},{key:"mm",text:"28",sub:"% WOOD",tone:"#ff6b4f",w:200,h:120,draw(D,oe,ke,He){D.fillStyle="#05070b",D.fillRect(0,0,oe,ke),D.textAlign="left",D.textBaseline="middle",D.fillStyle="#8b93a1",D.font="600 15px ui-monospace, Menlo, monospace",D.fillText("MOISTURE",14,20),D.fillStyle=He.tone,D.font="700 58px ui-monospace, Menlo, monospace",D.fillText(He.text,12,66),D.fillStyle="#cfd4da",D.font="500 17px ui-monospace, Menlo, monospace",D.fillText(He.sub,98,76),D.fillStyle="#1c222c",D.fillRect(14,102,oe-28,8),D.fillStyle=He.tone,D.fillRect(14,102,(oe-28)*qt((+He.text-6)/26,.05,1),8)}}],{width:1024,emissive:.25});for(let D=si+.06;D<Ku;D+=.406)t(.089,Yn-Ut-.076,.038,a.studs,qu,(Ut+Yn)/2,D,h,{cast:!1,uv:!0});t(.089,.038,is,a.studs,qu,Ut+.019,Hs,h,{cast:!1,uv:!0}),t(.089,.038,is,a.studs,qu,Yn-.019,Hs,h,{cast:!1,uv:!0});let Ye=Yn-Ut-zs;t(.013,Ye,is,q,Yi+.0065,Ut+zs+Ye/2,Hs,h),t(.115,Yn-Ut,.013,q,qu-.004,(Ut+Yn)/2,Ku+.0065,h);for(let D=ra+.04;D<Yi;D+=.406)t(.038,Yn-Ut-.076,.089,a.studs,D,(Ut+Yn)/2,Sc,h,{cast:!1,uv:!0});t(ns,.038,.089,a.studs,cr,Ut+.019,Sc,h,{cast:!1,uv:!0}),t(ns,.038,.089,a.studs,cr,Yn-.019,Sc,h,{cast:!1,uv:!0}),t(ns,Ye,.013,q,cr,Ut+zs+Ye/2,si-.0065,h),t(ns,Yn-Ut,.013,Z,cr,(Ut+Yn)/2,Sc-.051,h),t(.013,Yn-Ut,.128,q,ra-.0065,(Ut+Yn)/2,Sc,h);let ut=f(ns,is,J,l,cr,Yn,Hs,{rx:Math.PI/2,receive:!0,keep:!0}),ft=2.95,Q=-2.24,It=-.47;t(ft-ra,.013,Q-si,q,(ra+ft)/2,It,(si+Q)/2,h),t(ft-ra,Yn-It,.013,q,(ra+ft)/2,(It+Yn)/2,Q,h),t(.013,Yn-It,Q-si,q,ft,(It+Yn)/2,(si+Q)/2,h),f(ns,is,me,h,cr,Ut+.003,Hs,{rx:-Math.PI/2,receive:!0}),t(.045,.008,is,a.galv,ra+.02,Ut+.004,Hs,h,{cast:!1}),n(.095,.008,a.castIron,os.x,Ut+.004,os.z,h,{seg:24,cast:!1}),n(.074,.006,a.galv,os.x,Ut+.009,os.z,h,{seg:24,cast:!1});for(let D=-2;D<=2;D++)t(.012,.002,.11-Math.abs(D)*.018,a.blackPlastic,os.x+D*.024,Ut+.0125,os.z,h,{cast:!1});let At=d();t(.013,zs,is,q,Yi+.0065,Ut+zs/2,Hs,At),t(ns,zs,.013,q,cr,Ut+zs/2,si-.0065,At),t(.012,.09,is,W,Yi-.006,Ut+.045,Hs,At,{cast:!1}),t(ns,.09,.012,W,cr,Ut+.045,si+.006,At,{cast:!1});let B=d(At);B.position.y=Ut,f(is,.46,we,B,Yi-.0125,0,Hs,{ry:-Math.PI/2,base:!0}),f(ns,.46,we,B,cr,0,si+.0125,{base:!0,u:[0,ns/is]}),u(B),f(is,zs,Ve,At,Yi-.0128,Ut,Hs,{ry:-Math.PI/2,base:!0}),f(ns,zs,Ve,At,cr,Ut,si+.0128,{base:!0,u:[.2,.2+ns/is]}),u(At);let S=d();S.position.y=Ut,t(.013,zs,is,q,Yi+.0065,zs/2,Hs,S),t(.012,.09,is,W,Yi-.006,.045,Hs,S,{cast:!1}),t(ns,zs,.013,q,cr,zs/2,si-.0065,S),t(ns,.09,.012,W,cr,.045,si+.006,S,{cast:!1}),u(S);let ue=f(ns,is,Ie,l,Yi,Ut+.007,Hs,{rx:-Math.PI/2,edge:!0,keep:!0,receive:!0}),ce=-.62,Me=si+.1,st=[[2.3,It,Me],[2.3,ce+.06,Me],[2.33,ce+.008,Me],[2.38,ce,Me],[3.49,ce,Me]],nt=[[3.57,ce,Me],[4.56,ce,Me],[4.61,ce+.008,Me],[4.64,ce+.06,Me],[4.64,Yn,Me]],Oe=d(),ze=d();[st,nt].forEach(D=>{r(D,.043,re,Oe,{type:"centripetal",radial:12,density:24}),r(D,.033,a.rubber,ze,{type:"centripetal",radial:12,density:24})}),[2.9,3.53,4.2].forEach(D=>n(.046,D===3.53?.09:.05,D===3.53?a.galv:re,D,ce,Me,Oe,{axis:"x",seg:16})),u(Oe),u(ze),[2.75,3.85].forEach(D=>{t(.022,Yn-ce-.04,.004,a.galv,D,(Yn+ce)/2+.02,Me-.046,h,{cast:!1}),t(.022,.004,.1,a.galv,D,ce-.046,Me,h,{cast:!1})}),n(.06,.008,W,4.64,Yn-.004,Me,h,{seg:20,cast:!1});let je=4.8,vt=2.1;n(.019,.26,a.bluePlastic,je,Ut+.13,vt,h,{seg:12}),n(.04,.012,a.castIron,je,Ut+.006,vt,h,{seg:16,cast:!1}),t(.1,.12,.11,a.brass,je,Ut+.32,vt,h,{r:.01}),n(.04,.035,a.blackPlastic,je-.065,Ut+.33,vt,h,{axis:"x",seg:20}),Ze.plane("reg",.06,h,je-.0835,Ut+.33,vt,{rot:[0,-Math.PI/2,0]}),n(.015,.12,a.brass,je,Ut+.44,vt,h,{seg:12}),n(.024,.09,a.brass,je,Ut+.53,vt,h,{seg:16}),n(.006,.03,a.galv,je-.035,Ut+.53,vt,h,{axis:"x",seg:8});let L=new yt;L.position.set(je-.052,Ut+.53,vt),L.userData.keep=!0,l.add(L),t(.01,.14,.024,a.redPlastic,0,.06,0,L,{r:.004}),t(.014,.06,.028,a.redPlastic,-.002,.11,0,L,{r:.005}),i.bake(L),Ze.plane("tag",.1,h,je-.03,Ut+.43,vt-.055,{rot:[0,-Math.PI/2+.35,.05]}),r([[je-.035,Ut+.53,vt-.01],[je-.045,Ut+.49,vt-.04],[je-.03,Ut+.455,vt-.055]],.0012,a.galv,h,{radial:4,cast:!1});let ae=.0112;n(ae,-.45-(Ut+.58),a.copper,je,(Ut+.58-.45)/2,vt,h,{seg:10}),s(.016,a.copper,je,-.45,vt,h,{seg:10,seg2:8}),n(ae,vt-si,a.copper,je,-.45,(vt+si)/2,h,{axis:"z",seg:10}),[1.5,.6,-1.3,-2.2].forEach(D=>t(.07,.022,.02,a.galv,je+.045,-.45,D,h,{cast:!1})),[-2.1,-1.2].forEach(D=>t(.07,.02,.022,a.galv,je+.045,D,vt,h,{cast:!1})),n(.0142,.07,a.copper,Gs.x+.025,Gs.y,Gs.z,h,{axis:"z",seg:12}),t(.004,.006,.045,a.blackPlastic,Gs.x+.011,Gs.y,Gs.z,h,{cast:!1});let he=d(),Se=-3.885,Ae=-3.27,k=1.285,De=4.86,xe=2.02,Be=2.78;[[k,xe],[Be,De]].forEach(([D,oe])=>{t(oe-D,.8,Ae-Se-.03,qe,(D+oe)/2,Sr+.5,(Se+Ae)/2-.015,he),t(oe-D,.1,.5,a.blackPlastic,(D+oe)/2,Sr+.05,Se+.25,he,{cast:!1}),t(oe-D+.01,.04,Ae-Se+.02,a.blackPlastic,(D+oe)/2,xs-.02,(Se+Ae)/2+.01,he);let ke=Math.max(1,Math.round((oe-D)/.46)),He=(oe-D)/ke;for(let tt=0;tt<ke;tt++){let Tt=D+He*(tt+.5);t(He-.006,.15,.02,qe,Tt,xs-.13,Ae-.01,he,{r:.004}),t(He-.006,.6,.02,qe,Tt,Sr+.42,Ae-.01,he,{r:.004}),t(.12,.012,.02,a.steel,Tt,xs-.11,Ae+.01,he,{cast:!1}),t(.012,.12,.02,a.steel,Tt+He/2-.05,Sr+.6,Ae+.01,he,{cast:!1})}}),t(3.57,.61,.012,$e,(k+De)/2,(xs+1.85)/2,Se+.006,he),t(De-k,3.195-2.57,.37,q,(k+De)/2,(2.57+3.195)/2,-3.705,he),t(.115,.72,.36,qe,1.343,2.21,-3.7,he);for(let D=0;D<6;D++){let oe=1.65+D*.5;t(.494,.69,.012,qe,oe,2.215,-3.514,he,{r:.004}),t(.012,.1,.02,a.steel,oe+(D%2?-.21:.21),1.94,-3.5,he,{cast:!1})}t(De-4.4,.72,.36,qe,(4.4+De)/2,2.21,-3.7,he),t(Be-xe-.004,xs-Sr-.012,.62,a.steel,2.4,(Sr+xs)/2-.006,-3.575,he),t(.7,.56,.02,a.steel,2.4,Sr+.44,-3.255,he,{r:.006}),t(.5,.24,.006,a.blackPlastic,2.4,Sr+.5,-3.243,he,{cast:!1}),n(.011,.6,a.steel,2.4,Sr+.78,-3.215,he,{axis:"x",seg:10}),[-.09,.09].forEach(D=>t(.014,.014,.04,a.steel,2.4+D*3,Sr+.78,-3.235,he,{cast:!1})),[-.27,-.16,.16,.27].forEach(D=>n(.02,.025,a.blackPlastic,2.4+D,xs-.07,-3.255,he,{axis:"z",seg:14})),t(Be-xe,.012,.6,a.blackPlastic,2.4,xs-.006,-3.575,he,{cast:!1}),[[-.18,-3.42,.095],[.18,-3.42,.08],[-.18,-3.72,.08],[.18,-3.72,.095]].forEach(([D,oe,ke])=>n(ke,.002,a.greyPlastic,2.4+D,xs+.001,oe,he,{seg:24,cast:!1})),t(Be-xe,.06,.03,a.steel,2.4,xs+.03,Se+.03,he),n(.125,.05,a.blackPlastic,zn.x,xs+.027,zn.z,he,{seg:24}),t(.2,.016,.026,a.blackPlastic,zn.x-.07,xs+.045,zn.z+.2,he,{rot:[0,1.1,0]}),n(.08,.15,a.steel,2.58,xs+.078,-3.72,he,{seg:20,r2:.06}),t(.13,.25,.012,a.greyPlastic,2.3,Sr+.68,-3.198,he,{rot:[.05,0,0]}),n(.055,.15,a.greyPlastic,3.4,xs+.075,-3.75,he,{seg:16}),[[-.02,.1],[.015,-.08],[0,0]].forEach(([D,oe])=>n(.006,.3,qe,3.4+D,xs+.2,-3.75+D,he,{seg:6,rot:[oe,0,oe*.6]})),t(De-k+.1,.012,2.9,q,(k+De)/2+.05,3.189,-2.44,he,{cast:!1}),u(he);let Ne=d(),se=f(bi.x1-bi.x0,bi.z1-bi.z0,le,Ne,(bi.x0+bi.x1)/2,Ut+.01,(bi.z0+bi.z1)/2,{rx:-Math.PI/2,keep:!0});se.renderOrder=2,se.userData.noAO=!0;let at=i.particles(280,{color:11065087,size:.13,gain:.9,opacity:.8});Ne.add(at);let Je=at.userData.n,mt=at.userData.pos,Ft=new Float32Array(Je*4);for(let D=0;D<Je;D++){let oe=(x()-.5)*.7,ke=(x()-.3)*.5,He=2.4+x()*2;Ft[D*4]=-Math.cos(ke)*Math.cos(oe)*He,Ft[D*4+1]=Math.sin(ke)*He,Ft[D*4+2]=Math.cos(ke)*Math.sin(oe)*He,Ft[D*4+3]=x()}let Yt=d(),hn=f(ye,ye,ee,Yt,os.x,Ut+.012,os.z,{rx:-Math.PI/2,keep:!0});hn.renderOrder=2,hn.userData.noAO=!0;let Pn=i.place(new Fe(new jn(.13,24,8,0,Math.PI*2,0,Math.PI/2),ge),os.x,Ut+.01,os.z,Yt,{keep:!0,cast:!1}),sn=i.particles(48,{color:11046492,size:.03,gain:1,normal:!0,opacity:.9});Yt.add(sn);let In=sn.userData.n,yn=sn.userData.pos,C=new Float32Array(In*3);for(let D=0;D<In;D++)C[D*3]=x()*6.2832,C[D*3+1]=.02+x()*.2,C[D*3+2]=x();let be=d(Yt);be.position.set(3.95,Ut,-1.55),be.rotation.y=-1.05,[[-.2,.0616],[.2,-.0616]].forEach(([D,oe])=>t(.32,.64,.012,a.yellowPlastic,0,.3,oe,be,{rot:[D,0,0],r:.005})),t(.34,.03,.03,a.yellowPlastic,0,.615,0,be,{r:.008}),Ze.plane("cat3",.26,be,0,.3+.199*.0075,.0616+.98*.0075,{rot:[-.2,0,0]}),u(be);let Le=d(),lt=d(Le);f(1.9,1.6,ie,lt,2.35,1.595,-3.505),f(1.6,.61,ie,lt,2.3,xs,Se+.0125,{base:!0}),f(.92,.16,ie,lt,2.4,1.6,-3.274),f(3,2.6,ie,lt,2.45,3.18,-2.75,{rx:Math.PI/2}),u(lt);let ct=i.particles(90,{color:16760944,size:.11,gain:1.3,opacity:.85}),Gt=i.particles(70,{color:16738850,size:.2,gain:1,opacity:.6}),Dt=ks(br(64,64,D=>{for(let oe=0;oe<7;oe++)Ju(D,32+(x()-.5)*16,32+(x()-.5)*16,14+x()*10,12+x()*10,[[0,"rgba(255,255,255,.1)"],[1,"rgba(255,255,255,0)"]])}),{wrap:!1}),ve=i.particles(170,{color:2762532,size:1.15,gain:1,normal:!0,opacity:.6}),We=i.particles(60,{color:1973274,size:1.3,gain:1,normal:!0,opacity:.4});ve.material.map=Dt,We.material.map=Dt,Le.add(ct,Gt,ve,We);let ot=(D,oe)=>{let ke=new Float32Array(D.userData.n*oe);for(let He=0;He<ke.length;He++)ke[He]=x();return ke},Lt=ot(ct,4),Ot=ot(Gt,4),xn=ot(ve,4),on=ot(We,4),Kt=i.sprite(16747066,1.4,zn.x,zn.y+.16,zn.z+.06,Le,0),dn=[i.sprite(16742954,1,zn.x-.01,zn.y+.15,zn.z+.03,Le,.6),i.sprite(16747066,1,zn.x+.02,Ca+.12,-3.2,Le,.45)],On=new ps(16747066,0,5,2);On.position.set(zn.x,zn.y+.2,zn.z+.22),l.add(On);let P=d(),te=2.28,Ce=.9,Ee=Yn-Ut,Pe=a.poly.clone();Pe.opacity=.15,Pe.color.set(13030107);let _t=Pe.clone();_t.opacity=.45;let Ct=(D,oe,ke)=>.075*Math.sin(Math.PI*D)*Math.pow(Math.sin(Math.PI*oe),.6)+.008*Math.sin((D-.5)*ke*11+oe*3)*Math.sin(Math.PI*oe),j=(D,oe,ke)=>{let He=[],tt=[];for(let Xt=0;Xt<=16;Xt++)He.push(-D/2+D*Xt/16);for(let Xt=0;Xt<=10;Xt++)tt.push(-Ee/2+Ee*Xt/10);ke&&(He.push(ke[0],ke[1]),tt.push(ke[2])),He.sort((Xt,Vt)=>Xt-Vt),tt.sort((Xt,Vt)=>Xt-Vt);let Tt=[],Wt=[],Bt=[],ln=He.length;tt.forEach(Xt=>He.forEach(Vt=>{let mi=Vt/D+.5,$t=Xt/Ee+.5;Tt.push(Vt,Xt,Ct(mi,$t,D)),Wt.push(mi,$t)}));for(let Xt=0;Xt<tt.length-1;Xt++)for(let Vt=0;Vt<ln-1;Vt++){let mi=(He[Vt]+He[Vt+1])/2,$t=(tt[Xt]+tt[Xt+1])/2;if(ke&&mi>ke[0]&&mi<ke[1]&&$t<ke[2])continue;let ri=Vt+ln*(Xt+1),Zn=Vt+ln*Xt,rn=Vt+1+ln*Xt,Un=Vt+1+ln*(Xt+1);Bt.push(ri,Zn,Un,Zn,rn,Un)}let Sn=new tn;return Sn.setAttribute("position",new Zt(Tt,3)),Sn.setAttribute("uv",new Zt(Wt,2)),Sn.setIndex(Bt),Sn.computeVertexNormals(),i.place(new Fe(Sn,Pe),0,0,0,oe,{cast:!1,receive:!1})},ne=Ce-si,pe=Yi-te,Ge=(si+Ce)/2,E=D=>-(D-Ge),O=D=>(E(D)+ne/2)/ne,K=D=>-Ee/2+D,X=-.75,de=.84,Re=2.05,_e=E(X+de/2),Y=E(X-de/2),Xe=d(P);Xe.position.set(te,(Ut+Yn)/2,Ge),Xe.rotation.y=Math.PI/2,j(ne,Xe,[_e,Y,K(Re)]);let Ke=d(P);Ke.position.copy(Xe.position),Ke.rotation.copy(Xe.rotation);let dt=d(P);dt.position.set((te+Yi)/2,(Ut+Yn)/2,Ce),dt.rotation.y=Math.PI,j(pe,dt),[_e,Y].forEach((D,oe)=>{let ke=(D+ne/2)/ne,He=[];for(let tt=0;tt<=10;tt++){let Tt=K(.03+tt/10*(Re-.03));He.push([D,Tt,Ct(ke,(Tt+Ee/2)/Ee,ne)-.006])}r(He,.006,a.blackPlastic,Ke,{radial:5,cast:!1}),t(.016,.04,.01,a.blackPlastic,D+(oe?-.012:.012),K(1.1),Ct(ke,1.1/Ee,ne)-.014,Ke,{cast:!1})});let pt=Ct(.5,Re/Ee,ne)-.03;n(.05,de+.02,_t,(_e+Y)/2,K(Re+.04),pt,Ke,{axis:"x",seg:14,cast:!1}),[-.25,.25].forEach(D=>t(.035,.12,.11,a.bluePlastic,(_e+Y)/2+D,K(Re+.03),pt,Ke,{cast:!1})),u(Xe),Ze.plane("zip",.3,P,te+Ct(O(.15),1.9/Ee,ne)-.014,Ut+1.9,.15,{rot:[0,-Math.PI/2,0]});let gt=.25,Pt=te+Ct(O(gt),1.45/Ee,ne)-.03;t(.03,.15,.11,a.blackPlastic,Pt,Ut+1.45,gt,P,{r:.006}),Ze.plane("mano",.09,P,Pt-.0155,Ut+1.47,gt,{rot:[0,-Math.PI/2,0]}),r([[Pt,Ut+1.38,gt-.03],[Pt+.02,Ut+1.3,gt-.06],[te+.2,Ut+1.2,gt-.05]],.003,a.blackPlastic,P,{radial:5,cast:!1});let St=a.bluePlastic;t(.05,.003,ne,St,te+.01,Ut+.0015,Ge,P,{cast:!1}),t(.05,.003,ne,St,te+.01,Yn-.0015,Ge,P,{cast:!1}),t(pe,.003,.05,St,(te+Yi)/2,Ut+.0015,Ce-.01,P,{cast:!1}),t(pe,.003,.05,St,(te+Yi)/2,Yn-.0015,Ce-.01,P,{cast:!1}),t(.003,Ee,.05,St,Yi-.0015,(Ut+Yn)/2,Ce-.01,P,{cast:!1}),t(.05,Ee,.003,St,te+.01,(Ut+Yn)/2,si+.0015,P,{cast:!1});let rt=c(2.85,Ut,.32);t(.44,.5,.62,a.enclosureDark,rt.x,rt.y+.33,rt.z,P,{r:.02}),t(.45,.04,.63,a.blackPlastic,rt.x,rt.y+.6,rt.z,P,{r:.012}),t(.004,.36,.48,a.blackPlastic,rt.x-.222,rt.y+.33,rt.z,P,{cast:!1});for(let D=0;D<9;D++)t(.008,.008,.46,a.galv,rt.x-.226,rt.y+.17+D*.04,rt.z,P,{cast:!1});Ze.plane("hepa",.2,P,rt.x-.228,rt.y+.545,rt.z,{rot:[0,-Math.PI/2,0]}),t(.012,.012,.004,a.led(9425830,2),rt.x-.226,rt.y+.545,rt.z+.25,P,{cast:!1}),[[-.17,-.25],[.17,-.25],[-.17,.25],[.17,.25]].forEach(([D,oe])=>n(.03,.025,a.blackPlastic,rt.x+D,rt.y+.04,rt.z+oe,P,{axis:"x",seg:12})),r([[rt.x-.16,rt.y+.66,rt.z-.2],[rt.x-.16,rt.y+.72,rt.z-.1],[rt.x-.16,rt.y+.72,rt.z+.1],[rt.x-.16,rt.y+.66,rt.z+.2]],.01,a.blackPlastic,P,{radial:6}),n(.11,.06,a.galv,rt.x,rt.y+.38,rt.z+.33,P,{axis:"z",seg:20}),r([[rt.x,rt.y+.38,rt.z+.36],[rt.x,rt.y+.37,Ce-.05],[rt.x-.05,rt.y+.3,Ce+.25],[rt.x-.3,rt.y+.11,1.6],[2,rt.y+.1,2.2],[.9,rt.y+.1,2.7]],.1,xt,P,{radial:14,density:10}),[[0,.16],[0,-.16]].forEach(([,D])=>t(.3,.05,.004,St,rt.x,rt.y+.37+D,Ce+.004,P,{cast:!1})),[[.16],[-.16]].forEach(([D])=>t(.05,.3,.004,St,rt.x+D,rt.y+.37,Ce+.004,P,{cast:!1})),u(P);let wt=d(),Ht=d(wt);Ht.position.set(4.3,Ut,-1.45),Ht.rotation.y=-1.25;let Dn=1.72,kn=.17;[[-.21,1],[.21,1],[-.21,-1],[.21,-1]].forEach(([D,oe])=>t(.026,Dn/Math.cos(kn),.07,a.yellowPlastic,D,Dn/2,oe*Math.tan(kn)*Dn/2,Ht,{rot:[-oe*kn,0,0]})),[.3,.6,.9,1.2,1.5].forEach(D=>t(.42,.022,.085,a.greyPlastic,0,D,Math.tan(kn)*(Dn-D),Ht,{cast:!1})),[.5,1].forEach(D=>t(.4,.016,.016,a.greyPlastic,0,D,-Math.tan(kn)*(Dn-D),Ht,{cast:!1})),t(.46,.05,.24,a.greyPlastic,0,Dn+.02,0,Ht,{r:.01});let qn=si+.008;["s1","s2","s3"].forEach((D,oe)=>{let ke=3.62+oe*.17,He=-1.62+oe%2*.02,tt=(oe-1)*.06;t(.13,.17,.012,a.glassClear,ke,He,qn,wt,{rot:[0,0,tt],cast:!1}),t(.126,.012,.004,a.greyPlastic,ke,He+.075,qn+.007,wt,{rot:[0,0,tt],cast:!1}),t(.05,.04,.006,[a.whitePlastic,a.greyPlastic,a.whitePlastic][oe],ke+.02,He-.05,qn+.001,wt,{rot:[0,0,tt+.4],cast:!1}),Ze.plane(D,.1,wt,ke,He+.02,qn+.0075,{rot:[0,0,tt]}),t(.05,.016,.002,a.whitePlastic,ke,He+.088,qn+.009,wt,{rot:[0,0,tt],cast:!1})}),Ze.plane("lab",.24,wt,3.85,-1.16,si+.002),[[-.11,.15],[.11,.15],[-.11,-.15],[.11,-.15]].forEach(([D,oe])=>t(.04,.016,.002,a.whitePlastic,3.85+D,-1.16+oe,si+.003,wt,{rot:[0,0,.5*Math.sign(D*oe)],cast:!1})),Ze.plane("asb",.36,wt,3.8,-.8,si+.002),t(.06,.004,.06,a.greyPlastic,3.4,Ut+.004,-1,wt,{cast:!1}),t(.11,.002,.04,a.whitePlastic,3.4,Ut+.006,-.95,wt,{cast:!1}),n(.035,.003,a.greyPlastic,3.9,Yn-.002,-1.75,wt,{seg:16,cast:!1}),t(.1,.002,.04,a.whitePlastic,3.93,Yn-.004,-1.71,wt,{cast:!1}),u(wt);let Ln=d(),ls=[],Ts=(D,oe,ke)=>{let He=d(Ln);He.position.set(D,Ut,oe),He.rotation.y=ke,n(.2,.24,fe,0,.235,0,He,{axis:"z",seg:28,open:!0}),n(.17,.02,a.blackPlastic,0,.235,0,He,{axis:"z",seg:24}),t(.25,.14,.24,fe,.12,.09,0,He,{r:.02}),t(.03,.12,.22,a.blackPlastic,.245,.09,0,He,{cast:!1}),[-1,1].forEach(Tt=>{[.06,.11,.165].forEach(Wt=>i.place(new Fe(new Qi(Wt,.004,4,28),a.galv),0,.235,Tt*.122,He,{cast:!1})),t(.34,.008,.006,a.galv,0,.235,Tt*.122,He,{cast:!1}),t(.008,.34,.006,a.galv,0,.235,Tt*.122,He,{cast:!1})}),t(.04,.03,.2,a.blackPlastic,-.13,.015,0,He),t(.04,.03,.2,a.blackPlastic,.2,.015,0,He),t(.18,.026,.03,a.yellowPlastic,-.04,.47,0,He,{r:.01}),[-.11,.03].forEach(Tt=>t(.02,.06,.02,a.yellowPlastic,Tt,.44,0,He)),r([[-.18,.15,-.05],[-.32,.03,-.1],[-.6,.006,-.3],[-1,.006,-.35]],.006,a.blackPlastic,He,{radial:5,cast:!1});let tt=new yt;tt.position.set(0,.235,0),tt.userData.keep=!0,He.add(tt);for(let Tt=0;Tt<10;Tt++){let Wt=Tt/10*6.2832;t(.008,.06,.2,a.blackPlastic,Math.cos(Wt)*.12,Math.sin(Wt)*.12,0,tt,{rot:[0,0,Wt+.5],cast:!1})}p(tt),i.bake(tt),ls.push(tt)};Ts(4.42,-2.25,-.55),Ts(4.45,-.5,-.5),Ts(4.42,1.25,-.6);let pn=c(3.4,Ut,-.85);t(.42,.66,.4,a.enclosure,pn.x,pn.y+.42,pn.z,Ln,{r:.02}),t(.43,.04,.41,a.blackPlastic,pn.x,pn.y+.09,pn.z,Ln,{r:.01});for(let D=0;D<8;D++)t(.006,.012,.32,a.galv,pn.x-.212,pn.y+.22+D*.045,pn.z,Ln,{cast:!1});t(.004,.36,.34,a.blackPlastic,pn.x-.211,pn.y+.38,pn.z,Ln,{cast:!1}),Ze.plane("rh",.12,Ln,pn.x-.2115,pn.y+.66,pn.z+.05,{rot:[0,-Math.PI/2,0]}),[[-.15,-.16],[.15,-.16],[-.15,.16],[.15,.16]].forEach(([D,oe])=>n(.05,.03,a.blackPlastic,pn.x+D,pn.y+.05,pn.z+oe,Ln,{axis:"z",seg:14})),r([[pn.x+.19,pn.y+.7,pn.z-.16],[pn.x+.22,pn.y+.92,pn.z-.16],[pn.x+.22,pn.y+.92,pn.z+.16],[pn.x+.19,pn.y+.7,pn.z+.16]],.011,a.galv,Ln,{radial:8,tension:.1}),r([[pn.x+.1,pn.y+.12,pn.z-.2],[pn.x-.05,pn.y+.01,pn.z-.4],[os.x+.25,Ut+.012,os.z+.1],[os.x+.02,Ut+.015,os.z+.01]],.008,a.blackPlastic,Ln,{radial:6,cast:!1});let Gr=1,qi=c(pn.x+.123,pn.y+.825,pn.z-.06);t(.16,.024,.085,a.blackPlastic,qi.x,qi.y,qi.z,Ln,{r:.008,rot:[0,0,Gr]});let kr=Ze.plane("mm",.072,Ln,qi.x-.84*.0125-.54*.02,qi.y+.54*.0125-.84*.02,qi.z);kr.rotation.order="ZYX",kr.rotation.set(-Math.PI/2,0,Gr);let Vr=si+.06+.406*5;[-.012,.012].forEach(D=>n(.0022,.035,a.galv,4.878,Ut+.32,Vr+D,Ln,{axis:"x",seg:6,cast:!1})),n(.013,.1,a.blackPlastic,4.81,Ut+.32,Vr,Ln,{axis:"x",seg:12}),r([[4.76,Ut+.32,Vr],[4.6,Ut+.12,Vr+.1],[4,Ut+.01,-.6],[3.62,Ut+.3,-.62],[qi.x-.03,qi.y-.05,qi.z+.05]],.004,a.blackPlastic,Ln,{radial:5,cast:!1}),u(Ln),p(h),i.bake(h);let aa={water:Gs.clone(),sewage:os.clone().add(c(0,.06,0)),fire:c(zn.x,zn.y+.2,zn.z),mould:c(Yi-.02,Ut+.32,-1.75),asb:c(3.85,-1.16,si+.01),rebuild:c(Yi-.02,Ut+.35,-.5)},ys={time:19.4,cut:0,ghost:0,ground:1,orbit:.012},V=[{...ys,radius:13,theta:-.95,phi:.82,fx:2.9,ty:-1.9,fz:-.4,lift:3,dof:0,orbit:.02},{...ys,radius:3.5,theta:-.95,phi:1.18,fx:2.95,ty:-2.45,fz:-1.5,dof:1.1},{...ys,radius:4.6,theta:.42,phi:1.68,fx:2.45,ty:2.15,fz:-3.45,dof:1,narrow:{radius:4.2,phi:1.6,ty:2.25}},{...ys,radius:5,theta:-1.12,phi:1.42,fx:3.6,ty:-1.7,fz:-.8,dof:1},{...ys,radius:3.7,theta:-.62,phi:1.6,fx:4,ty:-1.35,fz:-2.25,dof:1},{...ys,radius:3.9,theta:-1.1,phi:1.38,fx:3.95,ty:-2.2,fz:-.45,dof:1,narrow:{fx:3.75,fz:-.75}}],et=bi.x1-bi.x0,Mt=bi.z1-bi.z0,bt="",Nt=0;return{name:"restore",group:l,anchors:aa,shots:V,hides:D=>[...D.sys.installation?D.sys.installation.meshes:[],...D.layers.basement.children.filter(oe=>oe.isMesh&&oe.material===e.cedar)],light(D){return D===0?{pos:[.2,-1.5,2.2],at:[4.4,-2,-.9],power:.75,fill:.6}:D===1?{pos:[4.2,-.7,-2.4],at:[2.6,-2.8,-1.2],power:.85}:D===2?{pos:[3.9,1.9,-.7],at:[2.4,1.8,-3.7],power:.32,fill:.3}:D===3?{pos:[.7,-.6,.5],at:[4.2,-2.3,-1.2],power:.9}:D===4?{pos:[1.7,-.75,.6],at:[4.3,-1.2,-2.3],power:.85}:{pos:[1.3,-.55,1.4],at:[4.3,-2.4,-.4],power:.9}},update({step:D,q:oe,t:ke,dt:He,snap:tt,reduce:Tt}){let Wt=tt?1:1-Math.exp(-He*4),Bt=Tt?1.7:ke;he.visible=D===2,ut.visible=D!==0,Ne.visible=D===0,Yt.visible=D===1,Le.visible=D===2,P.visible=D===3,wt.visible=D===4,Ln.visible=D===5&&oe<.56,At.visible=D!==5,Oe.visible=D!==5,ze.visible=D===5;let ln=D===0?.03+.97*Rt(.04,.9,oe):D===3?1:0;B.visible=ln>.01,B.scale.y=Math.max(.01,ln),Nt=ht(Nt,D===3?.55+.45*Rt(0,.7,oe):0,Wt),Ve.opacity=Nt,Ve.visible=Nt>.01;let Sn=D===5?1:0,Xt=Sn*Rt(.57,.73,oe),Vt=Sn*Rt(.68,.86,oe),mi=Sn*Rt(.74,.97,oe);if(S.visible=Xt>.005,S.scale.y=Math.max(.001,Xt),q.color.copy(N).lerp(H,Vt),J.color.copy($).lerp(z,Vt),J.bumpScale=3*(1-Vt),ue.visible=mi>.005,ue.scale.x=Math.max(.001,mi),D===0){let $t=Rt(0,.7,oe),ri=Rt(.6,.74,oe);se.position.y=Ut+.009+.03*$t;let Zn=ht(.3,6.2,Math.pow(Rt(0,.85,oe),1.1));le.alphaMap.repeat.set(.4*et/Zn,.4*Mt/Zn),Qe.offset.set(Bt*.035,Bt*.022),L.rotation.x=-ri*Math.PI/2;let rn=1-.96*ri,Un=Math.round(Je*(1-.85*ri)),gi=Gs.y-Ut-.03*$t;at.material.opacity=.85-.35*ri;for(let Di=0;Di<Je;Di++){let cs=Di*3;if(Di>=Un){mt[cs+1]=-60;continue}let hr=Ft[Di*4]*rn,wi=Ft[Di*4+1]*rn,ss=Ft[Di*4+2]*rn,fr=(wi+Math.sqrt(wi*wi+19.6*gi))/9.8,Ys=(Bt/fr+Ft[Di*4+3])%1*fr;mt[cs]=Gs.x-.012+hr*Ys,mt[cs+1]=Gs.y+wi*Ys-4.9*Ys*Ys,mt[cs+2]=Gs.z+ss*Ys}at.geometry.attributes.position.needsUpdate=!0}if(D===1){let $t=ht(.2,1.75,Rt(0,.85,oe));ee.alphaMap.repeat.set(.4*ye/$t,.4*ye/$t),ee.normalMap.offset.set(Bt*.02,-Bt*.03);let ri=Tt?.5:.5+.5*Math.sin(Bt*3.1);Pn.scale.set(1+.12*ri,.14+.1*ri,1+.12*ri);for(let Zn=0;Zn<In;Zn++){let rn=Zn*3,Un=(Bt*.45+C[Zn*3+2])%1,gi=C[Zn*3+1]*(.4+Un)*Math.min(1,$t/.6);yn[rn]=os.x+Math.cos(C[Zn*3])*gi,yn[rn+1]=Ut+.016+.012*Math.sin(Un*Math.PI),yn[rn+2]=os.z+Math.sin(C[Zn*3])*gi}sn.geometry.attributes.position.needsUpdate=!0}if(On.intensity=D===2?(2.6+(Tt?0:.7*Math.sin(Bt*17)+.5*Math.sin(Bt*7.3)))*(.7+.3*Math.min(1,oe*3)):0,D===2){ie.opacity=.18+.82*Rt(0,.85,oe),Kt.material.opacity=.55+(Tt?0:.12*Math.sin(Bt*13)),dn.forEach((rn,Un)=>{let gi=Tt?0:Math.sin(Bt*(11+Un*4))*.5+Math.sin(Bt*(5.3+Un*2.1))*.5;rn.scale.set([.3,.32][Un]+.03*gi,[.42,.5][Un]+.07*gi,1)});let $t=(rn,Un,gi,Di,cs)=>{let hr=rn.userData.pos;for(let wi=0;wi<rn.userData.n;wi++){let ss=wi*3,fr=Un[wi*4]*6.2832,Ys=(Bt*cs*(.7+.6*Un[wi*4+1])+Un[wi*4+3])%1,ju=gi*Math.sqrt(Un[wi*4+2])*(1-.65*Ys),Ko=Ys*Di*(.5+Un[wi*4+1]),Jm=Math.sin(Bt*9+wi)*.014*Ys,eh=zn.x+Math.cos(fr)*ju+Jm,bc,th=zn.z+Math.sin(fr)*ju;if(Ko<Zu)bc=zn.y+Ko;else if(Ko<Zu+$u){let Pa=Ko-Zu;bc=Ca-.012-Pa*.04,th=zn.z+Math.sin(fr)*ju*.5+Pa,eh+=Math.cos(fr)*Pa*.9}else{let Pa=Ko-Zu-$u;bc=Ca-.02+Pa*.95,th=zn.z+$u+.02+Pa*.12,eh+=Math.cos(fr)*$u*.9+Math.sin(Bt*6+wi)*.03*Pa}hr[ss]=eh,hr[ss+1]=bc,hr[ss+2]=th}rn.geometry.attributes.position.needsUpdate=!0};$t(ct,Lt,.08,.42,1.5),$t(Gt,Ot,.11,.62,1.05);let ri=ve.userData.pos;for(let rn=0;rn<ve.userData.n;rn++){let Un=rn*3,gi=(Bt*.11*(.7+.6*xn[rn*4])+xn[rn*4+3])%1,Di=(xn[rn*4+1]-.5)*.1,cs,hr,wi;if(gi<.15){let ss=gi/.15;cs=zn.x+Di,hr=zn.y+.15+ss*(Ca-zn.y-.2),wi=zn.z+Di*.5}else if(gi<.3){let ss=(gi-.15)/.15;cs=zn.x+Di*1.6,hr=Ca-.03,wi=zn.z+ss*.32}else if(gi<.55){let ss=(gi-.3)/.25;cs=zn.x+Di*2+ss*.1,hr=Ca+ss*(3.06-Ca),wi=zn.z+.32+ss*.12+Math.sin(ss*3+rn)*.04}else{let ss=(gi-.55)/.45,fr=(xn[rn*4+2]-.5)*2.6,Ys=ss*(.7+1.6*xn[rn*4]);cs=zn.x+.1+Math.sin(fr)*Ys,hr=3.07-ss*.08,wi=zn.z+.44+Math.cos(fr)*Ys}ri[Un]=cs,ri[Un+1]=hr,ri[Un+2]=wi}ve.geometry.attributes.position.needsUpdate=!0,ve.material.opacity=.6+.4*Math.min(1,oe*2);let Zn=We.userData.pos;for(let rn=0;rn<We.userData.n;rn++){let Un=rn*3,gi=Bt*.05+on[rn*4+3]*6.28;Zn[Un]=1.45+on[rn*4]*3.2+Math.sin(gi)*.15,Zn[Un+1]=2.98+on[rn*4+1]*.16,Zn[Un+2]=-3.7+on[rn*4+2]*2.6+Math.cos(gi*.7)*.15}We.geometry.attributes.position.needsUpdate=!0,We.material.opacity=.15+.6*Rt(.05,.9,oe)}if(D===3){let $t=Tt?1:1+.06*Math.sin(Bt*.9);Xe.scale.z=$t}if(D===5){Tt||ls.forEach((rn,Un)=>{rn.rotation.z-=He*(34+Un*3)});let $t=Math.round(ht(28,11,Rt(.02,.48,oe))),ri=$t>19?"#ff6b4f":$t>15?"#f4bd7e":"#8fd3a6",Zn=$t<=12?"DRY":"% WOOD";$t+Zn!==bt&&(bt=$t+Zn,Ze.set("mm",String($t),Zn,{tone:ri}))}}}}var Tn=-3.3,Gn=-2.6,un=-2.8,jf=-2.51,Vs=-1.39,vs=Gn+.37,Ws=-4.9,ur=-.26,Ti=-2.75,Xs=-.6,m_=[0,1,12,18,22,25],g_=["INSTALL","MAINTAIN","UPGRADE","REPLACE","REMOVE","DEMOLISH"],x_=[[0,"INSTALLED \xB7 PERMIT"],[1,"FILTER \xB7 TUNE-UP"],[3,"FILTER \xB7 TUNE-UP"],[5,"DUCTS CLEANED"],[8,"IGNITER"],[11,"FILTER \xB7 TUNE-UP"],[12,"HEAT PUMP COIL"],[15,"TUNE-UP"],[18,"FILTER \xB7 TUNE-UP"],[20,"BLOWER MOTOR"],[24,"TUNE-UP"]],Qu=12;function qm({kit:i,tier:e}){let{box:t,cyl:n,tube:s,mats:r,atlas:a,V:o,std:c}=i,l=new yt,h=new yt;l.add(h);let d=c(9736070,.42,.3,{envMapIntensity:.8}),p=c(6717583,.42,.3,{envMapIntensity:.8}),u=c(10920599,.93,0),f=c(12886642,.82,0),x=c(9400648,.95,0),g=c(13884388,.88,0),m=c(5330782,.5,.45,{envMapIntensity:.8}),_=c(9316898,.45,.5),b=c(2897971,.6,.05),y=c(13210519,1,0),M=c(1313284,.4,0,{emissive:16747066,emissiveIntensity:1.4}),T=r.led(9425830,2),R=r.castIron,v=r.galv,A=r.pvc,I=r.copper,G=r.yellowPlastic,w="ui-monospace, Menlo, Consolas, monospace",U=C=>(be,Le,lt)=>{be.fillStyle=C?"#5f574b":"#a9a08a",be.fillRect(0,0,Le,lt);for(let ct=0;ct<Le;ct+=8)be.fillStyle=C?"rgba(30,26,20,.55)":"rgba(120,110,90,.45)",be.fillRect(ct,0,3,lt);if(C)for(let ct=0;ct<90;ct++)be.fillStyle=`rgba(40,34,26,${.15+ct%5*.06})`,be.fillRect(ct*37%Le,ct*53%lt,6+ct%4*3,4+ct%3*3);be.fillStyle=C?"#6e5a3c":"#9a7a4c",be.fillRect(0,0,Le,6),be.fillRect(0,lt-6,Le,6),be.fillRect(0,0,6,lt),be.fillRect(Le-6,0,6,lt)},N=[{key:"afue",text:"96% AFUE",sub:"60 000 BTU/h \xB7 NAT GAS",w:256,h:72,size:32,color:"#1b1d21",bg:"#c9c3b2"},{key:"permit",w:128,h:220,draw(C,be,Le){C.fillStyle="#e08a2c",C.beginPath(),C.moveTo(0,22),C.lineTo(22,0),C.lineTo(be-22,0),C.lineTo(be,22),C.lineTo(be,Le),C.lineTo(0,Le),C.fill(),C.fillStyle="#14161a",C.beginPath(),C.arc(be/2,20,8,0,6.3),C.fill(),C.textAlign="center",C.textBaseline="middle",C.fillStyle="#1a1308",C.font=`700 22px ${w}`,C.fillText("GAS",be/2,58),C.fillText("PERMIT",be/2,84),C.font=`500 15px ${w}`,C.fillText("INSPECTED",be/2,122),C.fillText("YEAR 0",be/2,144),C.strokeStyle="#1a1308",C.lineWidth=2,C.strokeRect(14,166,be-28,36),C.font=`700 18px ${w}`,C.fillText("PASS",be/2,185)}},{key:"crate",text:"UPFLOW FURNACE",sub:"THIS SIDE UP \xB7 52 kg",w:320,h:72,size:30,color:"#2a1d0e"},{key:"svc",w:256,h:384,year:0,draw(C,be,Le,lt){C.fillStyle="#d8d1bd",C.fillRect(0,0,be,Le),C.fillStyle="#24262b",C.fillRect(0,0,be,44),C.fillStyle="#e9e3d3",C.textAlign="left",C.textBaseline="middle",C.font=`700 20px ${w}`,C.fillText("SERVICE RECORD",12,23),C.font=`500 15px ${w}`,x_.forEach(([ct,Gt],Dt)=>{let ve=66+Dt*28;C.strokeStyle="rgba(20,22,26,.3)",C.beginPath(),C.moveTo(10,ve+13),C.lineTo(be-10,ve+13),C.stroke(),!(ct>lt.year)&&(C.fillStyle="#2b3a66",C.fillText(("YR "+ct).padEnd(6)+Gt,12,ve))})}},{key:"cal",w:200,h:248,year:0,verb:"INSTALL",draw(C,be,Le,lt){C.fillStyle="#cdc6b3",C.fillRect(0,0,be,Le),C.fillStyle="#a8322a",C.fillRect(0,0,be,54),C.fillStyle="#1a1c20",[40,100,160].forEach(ct=>{C.beginPath(),C.arc(ct,8,6,0,6.3),C.fill()}),C.textAlign="center",C.textBaseline="middle",C.fillStyle="#f1e6d6",C.font=`700 24px ${w}`,C.fillText("YEAR",be/2,33),C.fillStyle="#16181c",C.font=`700 112px ${w}`,C.fillText(String(lt.year),be/2,140),C.fillStyle="#5a3a1c",C.font=`700 22px ${w}`,C.fillText(lt.verb,be/2,222)}},{key:"tstat",w:192,h:192,draw(C,be,Le){C.fillStyle="#05070b",C.beginPath(),C.arc(be/2,Le/2,be/2-2,0,6.3),C.fill(),C.strokeStyle="#8fd3a6",C.lineWidth=6,C.beginPath(),C.arc(be/2,Le/2,be/2-14,2.3,2.3+3.4),C.stroke(),C.textAlign="center",C.textBaseline="middle",C.fillStyle="#eef2f0",C.font=`600 58px ${w}`,C.fillText("21\xB0",be/2+4,Le/2-6),C.fillStyle="#8fd3a6",C.font=`600 15px ${w}`,C.fillText("HEAT PUMP",be/2,Le/2+36),C.fillStyle="#8b93a1",C.font=`500 13px ${w}`,C.fillText("OUT \u221218\xB0",be/2,Le/2+58)}},{key:"coil",text:"HEAT PUMP COIL",sub:"CASED \xB7 3 TON",w:256,h:64,size:26,color:"#e3ddd0"},{key:"odu",text:"COLD CLIMATE",sub:"HEATS TO \u221230 \xB0C",w:256,h:64,size:26,color:"#e3ddd0"},{key:"tank",text:"189 L",sub:"GAS \xB7 40 000 BTU/h",w:192,h:96,size:42,color:"#e9e6de"},{key:"tkl",w:128,h:72,draw(C,be,Le){C.fillStyle="#05070b",C.fillRect(0,0,be,Le),C.textAlign="center",C.textBaseline="middle",C.fillStyle="#7fc4ff",C.font=`700 34px ${w}`,C.fillText("49\xB0C",be/2,Le/2-6),C.fillStyle="#8fd3a6",C.font=`500 12px ${w}`,C.fillText("ON DEMAND",be/2,Le-12)}},{key:"capped",w:112,h:176,draw(C,be,Le){C.fillStyle="#c23a2b",C.fillRect(0,14,be,Le-14),C.beginPath(),C.moveTo(0,14),C.lineTo(be/2,0),C.lineTo(be,14),C.fill(),C.fillStyle="#14161a",C.beginPath(),C.arc(be/2,20,7,0,6.3),C.fill(),C.textAlign="center",C.textBaseline="middle",C.fillStyle="#f6eee4",C.font=`700 21px ${w}`,C.fillText("CAPPED",be/2,64),C.font=`500 13px ${w}`,C.fillText("GAS OFF",be/2,98),C.fillText("DO NOT",be/2,124),C.fillText("OPEN",be/2,142)}},{key:"suite",w:256,h:320,draw(C,be,Le){C.fillStyle="#c9c4b4",C.fillRect(0,0,be,Le),C.fillStyle="#1a1c20",C.textAlign="left",C.textBaseline="middle",C.font=`700 21px ${w}`,C.fillText("SECONDARY SUITE",12,24),C.font=`500 14px ${w}`,C.fillText("BUILDING PERMIT \xB7 YR 25",12,48),C.strokeStyle="#2b3a66",C.lineWidth=3,C.strokeRect(20,70,be-40,170),C.beginPath(),C.moveTo(20,150),C.lineTo(130,150),C.moveTo(130,70),C.lineTo(130,240),C.stroke(),C.lineWidth=1.5,C.beginPath(),C.arc(130,196,34,Math.PI,Math.PI*1.5),C.stroke(),C.fillStyle="#2b3a66",C.font=`600 13px ${w}`,C.fillText("MECH",40,110),C.fillText("BEDROOM",148,110),C.fillText("BATH",40,196),C.fillText("LIVING",148,196),C.fillStyle="#1a1c20",C.font=`500 13px ${w}`,C.fillText("MECH ROOM: TYPE X",12,268),C.fillText("BOTH SIDES \xB7 30 MIN",12,290)}},{key:"disc",text:"HEAT PUMP",w:128,h:32,size:18,color:"#e3ddd0"},{key:"bin",text:"DRYWALL ONLY",w:192,h:40,size:22,color:"#e3ddd0"},{key:"rust",w:384,h:96,draw(C,be,Le){let lt=11,ct=()=>(lt=lt*16807%2147483647)/2147483647;C.clearRect(0,0,be,Le);for(let Gt=0;Gt<be;Gt+=2){let Dt=Le*(.35+.5*ct()*ct())*(.6+.4*Math.sin(Gt*.05)**2),ve=C.createLinearGradient(0,Le,0,Le-Dt);ve.addColorStop(0,"rgba(96,40,14,0.95)"),ve.addColorStop(.5,"rgba(122,56,20,0.75)"),ve.addColorStop(1,"rgba(140,70,30,0)"),C.fillStyle=ve,C.fillRect(Gt,Le-Dt,2+ct()*2,Dt)}}},{key:"pleatOld",w:96,h:128,draw:U(!0)},{key:"pleatNew",w:96,h:128,draw:U(!1)}],H=a(N,{width:1024,emissive:.22}),$=o(0,1,0),z=o(0,0,0),q=C=>{let be=new Map;return C.traverse(Le=>{Le.isMesh&&be.set(Le.material,be.get(Le.material)||!1||Le.castShadow)}),C.traverse(Le=>{Le.isMesh&&!Le.userData.keep&&(Le.castShadow=be.get(Le.material),Le.receiveShadow=!0)}),i.bake(C)},Z=(C,be,Le,lt,ct={})=>{let Gt=C.map(Lt=>o(Lt[0],Lt[1],Lt[2])),Dt=ct.fit??1.35,ve=ct.seg||10,We=ct.cast!==!1,ot=(Lt,Ot,xn)=>{let on=Lt.distanceTo(Ot);if(on<1e-4)return;let Kt=new Fe(new vn(xn,xn,on,ve),Le);Kt.position.copy(Lt).add(Ot).multiplyScalar(.5),Kt.quaternion.setFromUnitVectors($,z.subVectors(Ot,Lt).normalize()),Kt.castShadow=We,Kt.receiveShadow=!0,lt.add(Kt)};for(let Lt=0;Lt<Gt.length-1;Lt++)if(ot(Gt[Lt],Gt[Lt+1],be),Lt>0&&Dt){let Ot=Gt[Lt];[Gt[Lt-1],Gt[Lt+1]].forEach(xn=>{z.subVectors(xn,Ot).normalize(),ot(Ot.clone(),Ot.clone().addScaledVector(z,be*2.2),be*Dt)})}},W={value:Array.from({length:Qu},()=>o(0,0,0))},J={value:Array.from({length:Qu},()=>o(0,0,0))},me=C=>{C.uniforms.uPhP=W,C.uniforms.uPhS=J,C.vertexShader=C.vertexShader.replace("#include <common>",`#include <common>
attribute float aPh; uniform vec3 uPhP[${Qu}]; uniform vec3 uPhS[${Qu}];`).replace("#include <begin_vertex>",`#include <begin_vertex>
{ int pi = int(aPh + 0.5); transformed = uPhP[pi] + (transformed - uPhP[pi]) * uPhS[pi]; }`)},Ie=new Do({depthPacking:sf});Ie.onBeforeCompile=me,Ie.customProgramCacheKey=()=>"cyclePhDepth";let qe=[],$e=(C,be,Le="s")=>{let lt=new yt;lt.name=C,l.add(lt);let ct={g:lt,i:qe.length,pivot:be.clone(),mode:Le,k:0};return W.value[ct.i].copy(be),qe.push(ct),ct},xt=()=>{l.updateWorldMatrix(!0,!0);let C=new kt().copy(l.matrixWorld).invert(),be=new kt,Le=new Map;qe.forEach(lt=>lt.g.traverse(ct=>{if(!ct.isMesh)return;let Gt=ct.material.uuid+"|"+ct.renderOrder,Dt=Le.get(Gt);Dt||Le.set(Gt,Dt={mat:ct.material,cast:!1,ro:ct.renderOrder,geos:[]}),Dt.cast=Dt.cast||ct.castShadow;let ve=ct.geometry.index?ct.geometry.toNonIndexed():ct.geometry.clone();Object.keys(ve.attributes).forEach(We=>{We!=="position"&&We!=="normal"&&We!=="uv"&&ve.deleteAttribute(We)}),ve.attributes.uv||ve.setAttribute("uv",new Jt(new Float32Array(ve.attributes.position.count*2),2)),ve.applyMatrix4(be.multiplyMatrices(C,ct.matrixWorld)),ve.setAttribute("aPh",new Jt(new Float32Array(ve.attributes.position.count).fill(lt.i),1)),Dt.geos.push(ve)})),qe.forEach(lt=>{lt.g.traverse(ct=>{ct.isMesh&&ct.geometry.dispose()}),l.remove(lt.g)}),Le.forEach(lt=>{let ct=Ss(lt.geos);if(lt.geos.forEach(ve=>ve.dispose()),!ct)return;let Gt=lt.mat.clone();Gt.onBeforeCompile=me,Gt.customProgramCacheKey=()=>"cyclePh";let Dt=new Fe(ct,Gt);Dt.castShadow=lt.cast,Dt.receiveShadow=!0,Dt.renderOrder=lt.ro,Dt.frustumCulled=!1,lt.cast&&(Dt.customDepthMaterial=Ie),Dt.userData.keep=!0,Dt.userData.noAO=!0,l.add(Dt)})},re=(C,be,Le)=>{C.k=ht(C.k,be,Le),Math.abs(C.k-be)<.002&&(C.k=be);let lt=C.mode==="pop"?C.k>.5?1:0:Rt(0,1,C.k),ct=J.value[C.i];return C.mode==="y"?ct.set(1,lt,1):C.mode==="xz"?ct.set(lt,1,lt):ct.setScalar(lt),lt<.001&&ct.setScalar(0),lt};n(.085,.012,v,-2.7,un+.004,-1.85,h,{seg:20,cast:!1}),n(.068,.014,R,-2.7,un+.005,-1.85,h,{seg:20,cast:!1});for(let C=-2;C<=2;C++)t(.11-Math.abs(C)*.02,.006,.008,v,-2.7,un+.012,-1.85+C*.022,h,{cast:!1});let fe=-3.95,Ue=.9;t(.089,.038,Ue-fe,f,Ws-.045,un+.019,(fe+Ue)/2,h,{cast:!1}),t(.089,.038,Ue-fe,f,Ws-.045,ur-.019,(fe+Ue)/2,h,{cast:!1});for(let C=fe+.02;C<=Ue;C+=.406)t(.089,ur-un-.076,.038,f,Ws-.045,(un+ur)/2,Math.min(C,Ue-.02),h,{cast:!1});for(let C=0;C<6;C++)C===2||C===4||t(.08,ur-un-.09,.36,y,Ws-.05,(un+ur)/2,-1.48+.019+C*.406+.203,h,{cast:!1});let we=(C,be,Le)=>{t(.0127,ur-un-.01,be-C-.003,u,Ws+.0064,(un+ur)/2,(C+be)/2,Le),t(.012,.08,be-C,A,Ws+.019,un+.04,(C+be)/2,Le,{cast:!1})};we(fe,-2.7,h),we(-2.7,-1.48,h),t(.68,.05,.88,R,Tn,un+.025,Gn,h),t(.56,.24,.74,v,Tn,(un+.05+jf)/2,Gn,h),t(.52,.036,.012,R,Tn,-2.56,vs-.004,h,{cast:!1}),t(.56,.012,.02,v,Tn,-2.535,vs+.008,h,{cast:!1}),t(.3,-.25-(un+.05),.6,v,Tn-.43,(-.25+un+.05)/2,Gn,h),[-2.2,-1.6,-1,-.5].forEach(C=>t(.304,.012,.604,v,Tn-.43,C,Gn,h,{cast:!1})),t(.56,Vs-jf,.74,d,Tn,(jf+Vs)/2,Gn,h,{r:.008}),t(.54,.52,.008,r.enclosure,Tn,-1.67,vs+.004,h,{r:.003}),t(.54,.54,.008,r.enclosure,Tn,-2.225,vs+.004,h,{r:.003});for(let C=0;C<6;C++)t(.3,.011,.006,R,Tn-.05,-1.47-C*.026,vs+.008,h,{cast:!1});for(let C=0;C<4;C++)t(.3,.011,.006,R,Tn-.05,-2.41-C*.022,vs+.008,h,{cast:!1});[-1.43,-1.99].forEach(C=>t(.09,.016,.01,R,Tn+.17,C,vs+.011,h,{cast:!1})),t(.09,.06,.006,R,Tn+.15,-1.72,vs+.009,h,{cast:!1});let Ve=t(.064,.036,.004,M,Tn+.15,-1.72,vs+.012,l,{cast:!1,keep:!0}),ie=t(.012,.012,.004,T,Tn+.2,-2.08,vs+.01,l,{cast:!1,keep:!0});t(.04,.024,.004,R,Tn+.2,-2.08,vs+.0085,h,{cast:!1}),H.plane("afue",.15,h,Tn-.1,-1.78,vs+.0095),H.plane("svc",.13,h,Tn+.2805,-1.95,Gn+.1).rotation.y=Math.PI/2,t(.004,.012,.03,R,Tn+.283,-1.85,Gn+.1,h,{cast:!1}),s([[Tn+.24,-2.45,vs+.01],[Tn+.3,-2.62,vs+.08],[-2.85,un+.02,-2.05],[-2.72,un+.02,-1.88]],.008,A,h,{radial:6,cast:!1}),t(.56,-.25-Vs,.74,v,Tn,(Vs-.25)/2,Gn,h),t(.57,.02,.75,v,Tn,Vs+.01,Gn,h,{cast:!1});let Qe=Tn+.28,le=1.4;t(le-Qe,.25,.5,v,(Qe+le)/2,-.375,Gn,h);for(let C=Qe+1.2;C<le;C+=1.5)t(.02,.258,.508,v,C,-.375,Gn,h,{cast:!1});for(let C=Qe+.6;C<le;C+=1.2)[-1,1].forEach(be=>t(.025,.27,.003,v,C,-.37,Gn+be*.253,h,{cast:!1}));n(.065,.24,v,-1.5,-.375,Gn+.37,h,{axis:"z",seg:16}),n(.065,.42,v,-1.5,-.27,Gn+.49,h,{seg:16}),n(.07,.03,v,-1.5,-.375,Gn+.26,h,{axis:"z",seg:16,cast:!1});let ye=o(-2.3,-.375,Gn+.25);t(.27,.12,.012,A,ye.x,ye.y,ye.z+.006,h,{cast:!1});for(let C=0;C<7;C++)t(.012,.09,.006,R,ye.x-.105+C*.035,ye.y,ye.z+.014,h,{cast:!1});t(.05,.12,.075,r.enclosure,Tn+.305,-.85,Gn+.2,h),t(.006,.1,.06,A,Tn+.333,-.85,Gn+.2,h,{cast:!1}),t(.01,.025,.012,R,Tn+.338,-.85,Gn+.2,h,{cast:!1}),n(.008,.55,v,Tn+.305,-.52,Gn+.2,h,{seg:6,cast:!1}),[-3.45,-3.22].forEach((C,be)=>{Z([[C,-1.62,Gn-.37],[C,-1.62,-3.2],[C,-.1+be*.02,-3.2],[C,-.1+be*.02,-3.85],[C,.14,-3.85],[C,.14,-4.4]],.04,A,h,{fit:1.2,seg:14}),n(.048,.06,A,C,.14,-4.42,h,{axis:"z",seg:14}),t(.025,.2,.003,v,C,-.2,-3.4,h,{cast:!1})}),Z([[Ti,Xs,1.2],[Ti,Xs,-3.5]],.017,R,h,{fit:0}),[.6,-.6,-1.8,-3.1].forEach(C=>t(.02,-.25-Xs,.004,v,Ti,(Xs-.25)/2+.01,C,h,{cast:!1})),n(.024,.06,R,Ti,Xs,-3.5,h,{axis:"z",seg:10}),Z([[Ti,Xs,-2.3],[Ti,-1.72,-2.3],[Tn+.28,-1.72,-2.3]],.017,R,h),Z([[Ti,-1.72,-2.3],[Ti,-1.95,-2.3]],.017,R,h,{fit:0}),n(.025,.04,R,Ti,-1.965,-2.3,h,{seg:10}),n(.024,.06,R,Ti,-1.72,-2.3,h,{seg:10}),n(.024,.06,R,Ti,Xs,-2.3,h,{axis:"z",seg:10}),n(.029,.035,R,Ti,-1.48,-2.3,h,{seg:8}),n(.026,.07,I,Ti,-1.25,-2.3,h,{seg:12}),t(.016,.1,.02,G,Ti+.035,-1.24,-2.3,h,{r:.004}),Z([[Ti,Xs,-2.7],[-1.86,Xs,-2.7],[-1.86,-2,-2.7]],.017,R,h),n(.024,.06,R,Ti,Xs,-2.7,h,{axis:"z",seg:10}),n(.026,.07,I,-1.86,-1.85,-2.7,h,{seg:12});let ee=new yt;ee.position.set(-1.86,-1.85,-2.7),ee.userData.keep=!0,l.add(ee),t(.016,.1,.02,G,.035,.01,0,ee,{r:.004,cast:!1}),[-2.2,-2].forEach(C=>n(.011,.5,I,C,-.5,-3,h,{seg:8})),n(.085,.06,v,-2.1,-.28,-3,h,{seg:16}),t(.006,.006,.02,v,-1.15,-.93,-3.985,h,{cast:!1}),H.plane("cal",.2,h,-1.15,-1.07,-3.988);let ge=$e("crate",o(-2.2,un,-1.05));{let C=ge.g,be=-2.2,Le=-1.05,lt=un;[-.4,0,.4].forEach(ct=>t(.9,.09,.07,f,be,lt+.045,Le+ct,C));for(let ct=0;ct<6;ct++)t(.11,.02,.92,f,be-.4+ct*.16,lt+.1,Le,C);[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([ct,Gt])=>t(.12,.1,.12,A,be+ct*.32,lt+.16,Le+Gt*.33,C,{cast:!1})),t(.62,.1,.8,x,be+.05,lt+.27,Le+.02,C,{rot:[0,.1,0]}),t(1.6,.008,.78,x,-3.75,lt+.004,-.9,C,{rot:[0,.35,0],cast:!1}),t(.78,.008,.76,x,-3.2,lt+.012,-.25,C,{rot:[0,-.2,0],cast:!1}),H.plane("crate",.34,C,-3.7,lt+.0095,-.9).rotation.set(-Math.PI/2,0,.35),s([[be-.5,lt+.11,Le+.2],[be-.7,lt+.01,Le+.4],[be-.95,lt+.005,Le+.3],[be-1.1,lt+.005,Le+.6]],.006,R,C,{radial:4,cast:!1}),s([[Ti,-1.22,-2.28],[Ti+.01,-1.3,-2.25],[Ti+.01,-1.36,-2.26]],.0015,v,C,{radial:4,cast:!1}),H.plane("permit",.07,C,Ti+.01,-1.42,-2.255).rotation.set(.05,.3,.04)}let Te=H.mat.clone();Te.transparent=!1,Te.depthWrite=!0,Te.alphaTest=0;let Ze=C=>{let be=H.plane(C,.1),Le=be.geometry.attributes.uv,lt=1,ct=0,Gt=1,Dt=0;for(let Lt=0;Lt<Le.count;Lt++)lt=Math.min(lt,Le.getX(Lt)),ct=Math.max(ct,Le.getX(Lt)),Gt=Math.min(Gt,Le.getY(Lt)),Dt=Math.max(Dt,Le.getY(Lt));be.geometry.dispose();let ve=new Rn(.5,.025,.64),We=ve.attributes.uv;for(let Lt=0;Lt<We.count;Lt++)We.setXY(Lt,lt+We.getX(Lt)*(ct-lt),Gt+We.getY(Lt)*(Dt-Gt));let ot=new Fe(ve,Te);return ot.castShadow=!0,ot.receiveShadow=!0,ot.userData.keep=!0,l.add(ot),ot},Ye=Ze("pleatOld"),ut=Ze("pleatNew"),ft=o(Tn,-2.56,Gn+.05),Q=o(Tn,-2.56,Gn+.78),It=o(-3.88,un+.322,-2.2),At=$e("hose",ye);{let C=At.g,be=[[ye.x,ye.y,ye.z+.06],[ye.x+.02,ye.y-.12,ye.z+.3],[-2.15,-1.5,-1.75],[-1.95,un+.09,-1.3],[-1.55,un+.08,-.7],[-.4,un+.08,.1],[1.4,un+.08,.7]],Le=s(be,.07,R,C,{radial:10,density:6,tension:.4}),lt=Le.userData.curve,ct=Le.userData.len,Gt=new Qi(.072,.007,4,12),Dt=Math.round(ct/(e>=1?.07:.14));for(let ve=2;ve<Dt;ve++){let We=ve/Dt,ot=new Fe(Gt,R);ot.position.copy(lt.getPointAt(We)),ot.quaternion.setFromUnitVectors(o(0,0,1),lt.getTangentAt(We)),C.add(ot)}t(.3,.16,.08,R,ye.x,ye.y,ye.z+.05,C,{r:.01}),n(.08,.06,v,ye.x,ye.y,ye.z+.11,C,{axis:"z",seg:16})}let B=$e("hp",o(Tn,Vs,Gn),"y"),S=-3,ue=-4.85,ce=.42,Me=new yt;Me.userData.keep=!0,Me.position.set(S-.1,ce+.4,ue-.17),l.add(Me);{let C=B.g;t(.6,.44,.78,d,Tn,Vs+.22,Gn,C,{r:.008}),t(.52,.34,.006,d,Tn,Vs+.22,Gn+.392,C,{r:.003});for(let Le=0;Le<4;Le++)t(.012,.012,.008,v,Tn+(Le%2?.24:-.24),Vs+(Le<2?.07:.37),Gn+.396,C,{cast:!1});H.plane("coil",.2,C,Tn-.08,Vs+.3,Gn+.3965);let be=(Le,lt,ct)=>s([[Tn+.3,Vs+.2+ct,Gn-.28],[-2.92,Vs+.2+ct,Gn-.28],[-2.9+ct,-.6,-2.9],[-2.9+ct,-.13,-2.95],[-2.9+ct,-.12,-3.85],[-2.9+ct,.12,-3.97],[-2.9+ct,.12,-4.35],[-2.85+ct,.32,-4.42],[-2.75+ct,.6,-4.5],[-2.55,.62+ct*2,-4.62]],Le,lt,C,{radial:8,density:10,tension:.2});be(.021,R,0),be(.006,I,.045),t(.02,.22,.003,v,-2.88,-.24,-3.4,C,{cast:!1}),t(.012,.11,.11,R,Ws+.019,-1.3,-2.05,C,{r:.004}),H.plane("tstat",.092,C,Ws+.0256,-1.3,-2.05).rotation.y=Math.PI/2,t(1.2,.08,.7,g,S,.04,ue,C),[-.4,.4].forEach(Le=>{t(.05,ce-.08,.05,v,S+Le,(ce+.08)/2,ue+.12,C),t(.05,ce-.08,.05,v,S+Le,(ce+.08)/2,ue-.12,C),t(.06,.04,.5,v,S+Le,ce-.02,ue,C)}),t(.96,.78,.38,m,S,ce+.39,ue,C,{r:.02}),n(.31,.02,R,S-.1,ce+.4,ue-.19,C,{axis:"z",seg:32,cast:!1}),[.12,.2,.28].forEach(Le=>{let lt=new Fe(new Qi(Le,.005,4,32),v);lt.position.set(S-.1,ce+.4,ue-.205),C.add(lt)}),t(.62,.008,.008,v,S-.1,ce+.4,ue-.206,C,{cast:!1}),t(.008,.62,.008,v,S-.1,ce+.4,ue-.206,C,{cast:!1}),H.plane("odu",.2,C,S+.33,ce+.62,ue-.193).rotation.y=Math.PI,t(1,.07,.42,g,S,ce+.815,ue,C,{r:.03,cast:!1}),t(.7,.05,.3,g,S-.05,ce+.86,ue,C,{r:.022,cast:!1}),t(.22,.1,.9,g,S+.4,.13,ue+.1,C,{r:.04,cast:!1}),t(.14,.2,.08,m,-2.25,.9,-4.29,C,{r:.01}),H.plane("disc",.1,C,-2.25,.93,-4.332).rotation.y=Math.PI,s([[-2.25,.8,-4.3],[-2.3,.6,-4.4],[-2.52,.55,-4.7]],.012,R,C,{radial:6,cast:!1});for(let Le=0;Le<3;Le++){let lt=t(.26,.09,.006,R,0,0,0,null,{cast:!1});lt.geometry.translate(.14,0,0),lt.rotation.set(0,.25,Le*Math.PI*2/3),Me.add(lt)}q(Me)}let st=o(-2.1,un+.12,-2.64),nt=new yt;nt.rotation.order="YXZ",nt.position.copy(st),nt.userData.keep=!0,l.add(nt);let Oe;{let C=new yt,be=-.36;nt.add(C),n(.28,1.38,p,0,-.1+.69,be,C,{seg:28}),n(.284,.04,R,0,-.1,be,C,{seg:28}),n(.27,.03,p,0,1.295,be,C,{seg:28,r2:.2}),t(.14,.08,.01,R,0,.08,-.083,C),t(.1,.12,.07,R,0,.26,-.05,C,{r:.008}),n(.02,.025,I,0,.29,-.012,C,{axis:"z",seg:12,cast:!1}),n(.012,.06,I,.12,.05,-.1,C,{axis:"z",seg:8,cast:!1}),n(.07,.08,v,0,1.35,be,C,{seg:16,r2:.04}),n(.075,.1,v,0,1.43,be,C,{seg:16}),[-.1,.1].forEach(ot=>{n(.012,.08,v,ot,1.33,be,C,{seg:8}),n(.02,.03,I,ot,1.37,be,C,{seg:8})}),n(.018,.06,I,.3,1.1,be,C,{axis:"x",seg:8}),t(.025,.04,.02,I,.31,1.13,be,C,{cast:!1}),Z([[.33,1.1,be],[.34,1.1,be],[.34,.04,be]],.011,I,C,{seg:8}),H.plane("tank",.14,C,0,.78,-.076),q(C),Oe=n(.2825,.3,H.mat,0,.06,be,nt,{seg:28,open:!0,keep:!0,cast:!1});let Le=H.plane("rust",.1),lt=Le.geometry.attributes.uv,ct=1,Gt=0,Dt=1,ve=0;for(let ot=0;ot<lt.count;ot++)ct=Math.min(ct,lt.getX(ot)),Gt=Math.max(Gt,lt.getX(ot)),Dt=Math.min(Dt,lt.getY(ot)),ve=Math.max(ve,lt.getY(ot));Le.geometry.dispose();let We=Oe.geometry.attributes.uv;for(let ot=0;ot<We.count;ot++)We.setXY(ot,ct+We.getX(ot)*(Gt-ct),Dt+We.getY(ot)*(ve-Dt))}let ze=new yt;ze.userData.keep=!0,nt.add(ze);let je=new yt;je.position.set(0,0,.02),je.userData.keep=!0;{let C=new yt;ze.add(C),[-.17,.17].forEach(Le=>Z([[Le,-.1,-.05],[Le,1.28,-.05],[Le,1.4,.03]],.013,_,C,{seg:8,fit:0})),Z([[-.17,1.4,.03],[.17,1.4,.03]],.013,_,C,{seg:8,fit:0}),[.35,.85].forEach(Le=>n(.009,.34,_,0,Le,-.05,C,{axis:"x",seg:6})),t(.38,.01,.24,_,0,-.115,-.17,C),n(.012,.5,_,0,0,.02,C,{axis:"x",seg:8}),[-.17,.17].forEach(Le=>t(.02,.1,.08,_,Le,-.04,-.02,C));let be=new Fe(new Qi(.286,.006,4,40),G);be.rotation.x=Math.PI/2,be.position.set(0,.95,-.36),C.add(be),t(.06,.04,.03,G,0,.95,-.065,C),q(C),[-.25,.25].forEach(Le=>{n(.12,.06,R,Le,0,0,je,{axis:"x",seg:20}),n(.055,.065,_,Le,0,0,je,{axis:"x",seg:12}),t(.068,.02,.16,_,Le,0,0,je,{cast:!1})}),q(je),ze.add(je)}let vt=$e("conn",o(-2.1,-1.5,-2.85),"pop");{let C=vt.g;Z([[-1.86,-2,-2.7],[-1.86,-2.42,-2.7],[-2.05,-2.42,-2.7]],.017,R,C),Z([[-1.86,-2.42,-2.7],[-1.86,-2.56,-2.7]],.017,R,C,{fit:0}),n(.024,.03,R,-1.86,-2.575,-2.7,C,{seg:10}),n(.024,.05,R,-1.86,-2,-2.7,C,{seg:10}),[-2.2,-2].forEach(be=>n(.011,.5,I,be,-1,-3,C,{seg:8})),n(.075,.96,v,-2.1,-.76,-3,C,{seg:16}),[-1,-.55].forEach(be=>n(.079,.02,v,-2.1,be,-3,C,{seg:16,cast:!1}))}let L=$e("caps",o(-2,-1.2,-2.85),"pop");{let C=L.g;[-2.2,-2].forEach(be=>n(.014,.035,I,be,-.765,-3,C,{seg:8})),n(.024,.035,R,-1.86,-1.905,-2.7,C,{seg:10}),s([[-1.86,-1.86,-2.68],[-1.85,-1.92,-2.66],[-1.85,-1.97,-2.665]],.0015,v,C,{radial:4,cast:!1}),H.plane("capped",.055,C,-1.85,-2.02,-2.66).rotation.set(0,.25,-.05),n(.08,.012,v,-2.1,-.315,-3,C,{seg:16,cast:!1})}let ae=$e("puddle",o(-1.95,un+.003,-2.6),"xz");[[0,0,.42,.3],[.25,.18,.28,.2],[-.2,.22,.22,.18]].forEach(([C,be,Le,lt])=>{n(1,.004,r.water,-1.95+C,un+.003,-2.6+be,ae.g,{seg:28,cast:!1}).scale.set(Le,1,lt)});let he=-1.72,Se=-1.1,Ae=-3.89,k=$e("tankless",o(he,Se,Ae));{let C=k.g;t(.36,.56,.2,d,he,Se,Ae,C,{r:.012}),t(.3,.46,.006,d,he,Se,Ae+.1,C,{r:.003}),H.plane("tkl",.08,C,he,Se+.12,Ae+.105),Z([[he+.06,Se+.28,Ae],[he+.06,-.62,Ae],[he+.06,-.62,-4.05]],.05,A,C,{fit:1.15,seg:16}),Z([[Ti,Xs,-3.5],[Ti,Xs,-3.84],[-1.45,Xs,-3.84],[-1.45,-1.52,-3.84],[he+.1,-1.52,-3.84],[he+.1,Se-.28,-3.84]],.014,R,C,{seg:8}),n(.022,.06,I,-1.45,-1.25,-3.84,C,{seg:10}),t(.014,.08,.016,G,-1.42,-1.24,-3.84,C,{r:.003,cast:!1}),[[he-.1,r.bluePlastic,-2.25],[he-.02,r.redPlastic,-2.35]].forEach(([be,Le,lt],ct)=>{Z([[be,Se-.28,-3.84],[be,-1.6-ct*.06,-3.84],[lt,-1.6-ct*.06,-3.84],[lt,-.26,-3.84]],.011,I,C,{seg:8}),n(.017,.04,I,be,-1.47,-3.84,C,{seg:8}),t(.05,.012,.012,Le,be+.02,-1.47,-3.815,C,{cast:!1})}),[-.45,-1.2].forEach(be=>t(.03,.012,.03,I,-2.3,be,-3.85,C,{cast:!1}))}let De=$e("loose",o(Ws,-1.5,-.3),"pop");we(-1.48,-.29,De.g),we(-.29,Ue,De.g);let xe=$e("demo",o(-3,un,-.5),"y");{let C=xe.g,be=-1.05,Le=Ws+.02,lt=-1.45,ct=-2.45,Gt=-1.6;t(ct-Le,.038,.089,f,(Le+ct)/2,un+.019,be,C),t(lt-Gt,.038,.089,f,(Gt+lt)/2,un+.019,be,C),t(lt-Le,.038,.089,f,(Le+lt)/2,ur-.019,be,C);for(let We=Le+.02;We<lt;We+=.406)We>ct-.04&&We<Gt+.04||t(.038,ur-un-.076,.089,f,We,(un+ur)/2,be,C);[ct-.019,Gt+.019].forEach(We=>t(.038,ur-un-.076,.089,f,We,(un+ur)/2,be,C)),[ct+.019,Gt-.019].forEach(We=>t(.038,2.07,.089,f,We,un+1.035,be,C)),t(Gt-ct,.18,.089,f,(ct+Gt)/2,un+2.16,be,C),H.plane("suite",.15,C,ct-.019,-1.2,be+.046),[-.5,.5].forEach(We=>t(1.1,.04,.08,f,-2.7,un+.02,1+We*1.8,C));for(let We=0;We<4;We++)t(1.22,.0127,2.44,u,-2.7+We%2*.02,un+.047+We*.0135,1+We%3*.015,C,{rot:[0,(We-1.5)*.012,0]});let Dt=-4.35,ve=1.5;t(.62,.88,.92,b,Dt,un+.5,ve,C,{r:.02}),t(.66,.04,.96,b,Dt,un+.95,ve,C,{r:.01}),[-.3,.3].forEach(We=>n(.05,.04,R,Dt+.2,un+.05,ve+We,C,{axis:"x",seg:12})),[[0,.1,.4,.4],[-.1,-.15,-.3,.6],[.12,-.25,.2,-.5]].forEach(([We,ot,Lt,Ot])=>t(.4,.0127,.5,u,Dt+We,un+.95,ve+ot,C,{rot:[Lt,Ot,.2]})),t(.3,.09,.6,y,Dt-.05,un+.98,ve-.1,C,{rot:[.3,.2,-.25]}),H.plane("bin",.2,C,Dt+.312,un+.75,ve).rotation.y=Math.PI/2;for(let We=0;We<7;We++)t(.05+We%3*.04,.0127,.04+We%2*.05,u,Ws+.12+We%3*.09,un+.007,-1.3+We*.3,C,{rot:[0,We*.7,0],cast:!1})}q(h),xt();let Be={install:o(Tn,-1.65,vs+.02),maintain:o(Tn+.1,-2.56,vs+.03),upgrade:o(Ws+.03,-1.3,-2.05),hpump:o(Tn+.1,Vs+.22,Gn+.4),replace:o(he,Se+.05,Ae+.11),remove:o(-2.1,-1.9,-2.6),demo:o(Ws-.04,-1.5,-.6)},Ne={time:19.4,cut:0,ghost:0,ground:1,lift:0,orbit:.012},se=[{...Ne,radius:14,theta:.2,phi:.9,fx:-2.6,ty:-1.8,fz:-2.2,lift:3,dof:0,orbit:.02,narrow:{radius:12}},{...Ne,radius:3.5,theta:.5,phi:1.36,fx:-2.8,ty:-1.95,fz:-2.2,dof:1,narrow:{fx:-3.15}},{...Ne,radius:4.4,theta:1,phi:1.56,fx:-3.7,ty:-1.15,fz:-2.25,dof:.9},{...Ne,radius:4.8,theta:-.1,phi:1.36,fx:-1.85,ty:-1.8,fz:-3.2,dof:1},{...Ne,radius:3.8,theta:-.55,phi:1.36,fx:-2,ty:-1.85,fz:-1.3,dof:.8,narrow:{fx:-2.35,fz:-1.1}},{...Ne,radius:4.4,theta:.7,phi:1.3,fx:-3.4,ty:-1.95,fz:-.1,dof:.7,narrow:{fx:-3.9,ty:-1.55,fz:-.6}}],at=-1,Je=0,mt=0,Ft=0,Yt=0,hn=0,Pn=0,sn=o(-2,un+.12,.35),In=st.distanceTo(sn),yn=o(0,0,0);return{name:"cycle",group:l,anchors:Be,shots:se,hides:C=>[...C.sys.hvac?C.sys.hvac.meshes:[],...C.sys["water-heaters"]?C.sys["water-heaters"].meshes:[]],light(C){return C===0?{pos:[-4,2,0],at:[-2.8,-2.4,-2.4],power:1,fill:.3}:C===1?{pos:[-1.7,-.5,-.7],at:[-3.3,-2.3,-2.4],power:1,fill:.35}:C===2?{pos:[-1.6,-.45,-1.1],at:[-3.9,-1.4,-2.2],power:1,fill:.35}:C===3?{pos:[-2.5,-.45,-1],at:[-1.9,-1.9,-3.4],power:1,fill:.35}:C===4?{pos:[-3.6,-.45,.2],at:[-2,-2.2,-1.4],power:1,fill:.35}:{pos:[-1.5,-.5,1.6],at:[-4.2,-1.8,-.6],power:1,fill:.35}},update({step:C,q:be,t:Le,dt:lt,snap:ct,reduce:Gt}){let Dt=ct?1:1-Math.exp(-lt*4);be=qt(be||0,0,1);let ve=C===1?Math.round(1+11*be):m_[C]??25;ve!==at&&(at=ve,H.set("cal",void 0,void 0,{year:ve,verb:g_[C]||""}),H.set("svc",void 0,void 0,{year:ve})),M.emissiveIntensity=Gt?1.4:1.3+.3*Math.sin(Le*13.1)+.2*Math.sin(Le*7.7+1.3),T.emissiveIntensity=Gt?1.8:Math.sin(Le*2.4)>-.2?2:.3;let We=C===1?be:C>1?1:0;Je=ct?We:ht(Je,We,1-Math.exp(-lt*6));let ot=Rt(.06,.28,Je),Lt=Rt(.3,.46,Je),Ot=Rt(.5,.86,Je),xn=Rt(.38,.48,Je);Ye.visible=C<=1,Ye.position.lerpVectors(ft,Q,ot).lerp(It,Lt),Ye.rotation.set(-1.72*Lt,0,.06*Lt),ut.visible=xn>.001,ut.position.lerpVectors(Q,ft,Ot),ut.scale.setScalar(Math.max(.001,xn)),re(ge,C===0?1:0,Dt),re(At,C===1?1:0,Dt);let on=re(B,C>=2?1:0,Dt);Me.visible=on>.98,Gt||(Me.rotation.z=Le*6);let Kt=C>3||C===3&&be>.6;re(vt,Kt?0:1,1),re(L,Kt?1:0,1),re(ae,C===3?.15+.85*Rt(0,.45,be):0,Dt),re(k,C>3||C===3&&be>.45?1:0,Dt),re(De,C<5?1:0,1),re(xe,C===5?1:0,Dt),Pn=ht(Pn,Kt?1:0,Dt),ee.rotation.z=-Pn*Math.PI/2,Oe.visible=C>=3;let dn=C===4?be:C>4?1:0;mt=ht(mt,Rt(0,.25,dn)*.42,Dt);let On=Ft;Ft=ht(Ft,Rt(.25,1,dn),Dt),hn+=(Ft-On)*In,Yt=ht(Yt,C===4?1:0,Dt),nt.visible=C<=4,nt.position.lerpVectors(st,sn,Ft),nt.rotation.set(mt,.08*Ft,0),ze.visible=Yt>.02,ze.scale.setScalar(Math.max(.001,Rt(0,1,Yt))),je.rotation.x=hn/.12,yn.set(0,.95,-.36),nt.updateMatrix(),Be.remove.copy(yn.applyMatrix4(nt.matrix))}}}function Zm({M:i,H:e,Ug:t,Wd:n,tier:s,reduce:r,glowTex:a}){let o=Lm({M:i,tier:s,reduce:r,glowTex:a,dotTex:jr("rgba(255,255,255,0.75)")}),c=new yt;c.name="sets";let l=H=>H.traverse($=>{$.userData.noPick=!0}),h=Nm({kit:o});c.add(h.group),l(h.group);let d={};Object.entries({panel:Um,attic:Om,sewer:km,radon:Xm,restore:Ym,cycle:qm}).forEach(([H,$])=>{typeof $=="function"&&(d[H]=$)});let p={},u=new Hl(16769725,0,18,.5,.8,1);u.castShadow=s>=1,u.shadow.mapSize.set(s>=2?2048:1024,s>=2?2048:1024),u.shadow.bias=-6e-4,u.shadow.normalBias=.006,u.shadow.radius=3,u.shadow.camera.near=.15,u.shadow.camera.far=16;let f=new ps(9414888,0,9,2);c.add(u,u.target,f);let x=new F(2,-.3,-2.5),g=new F(2.8,-1.2,-3.9),m=0,_=1,b=null,y=[],M=s>=2?150:s===1?90:0,T=M?o.particles(M,{size:.0075,color:16770756,gain:1.2,opacity:0}):null,R=new Float32Array(M*4);for(let H=0;H<M*4;H++)R[H]=Math.random();T&&(T.visible=!1,c.add(T));let v=new F,A=new F,I=new F;function G(H,$){let z=m*$*(r?.6:1);if(T.visible=z>.03,!T.visible)return;T.material.opacity=Math.min(.55,.5*z),v.copy(g).sub(x);let q=v.length();v.multiplyScalar(1/Math.max(.001,q)),A.set(0,1,0).cross(v),A.lengthSq()<.001&&A.set(1,0,0),A.normalize(),I.crossVectors(v,A);let Z=T.userData.pos,W=T.userData.n,J=r?0:H;for(let me=0;me<W;me++){let Ie=R[me*4],qe=R[me*4+1],$e=R[me*4+2],xt=R[me*4+3],re=(.3+.75*((Ie+J*(.004+.006*xt))%1))*q,fe=Math.sqrt(qe)*re*.3,Ue=$e*6.283+J*(.05+.1*xt)*(me%2?1:-1),we=Math.cos(Ue)*fe,Ve=Math.sin(Ue)*fe,ie=Math.sin(J*.4+Ie*40)*.01;Z[me*3]=x.x+v.x*re+A.x*we+I.x*Ve,Z[me*3+1]=x.y+v.y*re+A.y*we+I.y*Ve+ie,Z[me*3+2]=x.z+v.z*re+A.z*we+I.z*Ve}T.geometry.attributes.position.needsUpdate=!0}function w(H){if(p[H]||!d[H])return p[H];let $=d[H]({kit:o,M:i,H:e,Ug:t,Wd:n,tier:s,reduce:r});return $.group.visible=!1,l($.group),c.add($.group),p[H]=$,$}function U(H,$,z,q,Z,W=0){o.time.value=z,h.disc.rotation.y=z*1.4;let J=$.zoom&&d[$.zoom]?$.zoom:null;J&&w(J);let me=H.zk>.004?J||b:null;me!==b&&(b&&p[b]&&(p[b].group.visible=!1),y.forEach($e=>{$e.visible=!0}),y=[],b=me,b&&(p[b].group.visible=!0,p[b].hides&&(y=(p[b].hides(e,t,n)||[]).filter($e=>$e&&$e.visible),y.forEach($e=>{$e.visible=!1}))));let Ie=Z?1:1-Math.exp(-q*3.2),qe=0;if(b){let $e=p[b];$e.update({step:$.zs|0,p:$.zp||0,q:$.zq||0,k:H.zk,t:z,dt:q,reduce:r,snap:Z});let xt=$e.light?$e.light($.zs|0,$.zq||0):null;if(xt){let re=m<.02?1:Ie;x.lerp(N.fromArray(xt.pos),re),g.lerp(N.fromArray(xt.at),re),qe=xt.power*H.zk,_=ht(_,xt.fill??1,Ie)}}m=ht(m,qe,Ie),u.position.copy(x),u.target.position.copy(g),u.intensity=10*m,u.visible=m>.01,f.position.copy(g).add(N.set(-1.2,.5,1.6)),f.intensity=1.4*m*_,f.visible=m>.01,T&&G(z,W)}let N=new F;return{root:c,kit:o,update:U,ensure:w,names:Object.keys(d),get shown(){return b},anchors(){return b?p[b].anchors:null},input(H,$){let z=w(H);z&&z.input&&z.input($)},shots(H){let $=w(H);return $?$.shots||[]:null},get:H=>w(H),prebuild(){let H=Object.keys(d).find($=>!p[$]);return H?(w(H),!0):!1},lampPower:()=>m}}function $m(i,e){let t=new Go(128,{type:hi,generateMipmaps:!1}),n=new Uo(.04,40,t),s=new Ta(i),r=null;return{get texture(){return r?r.texture:null},capture(a){let o=e.environment;e.environment=null,n.position.copy(a),n.update(i,e),e.environment=o;let c=s.fromCubemap(t.texture);return r&&r.dispose(),r=c,r.texture},dispose(){t.dispose(),s.dispose(),r&&r.dispose()}}}function v_(){let i=performance.now(),e=[],t=ve=>e.push([ve,Math.round(performance.now()-i)]),n=document.getElementById("stage"),s=document.documentElement,r=()=>window.dispatchEvent(new Event("hause:stage-ready")),a=()=>{s.classList.add("no-webgl"),r()};if(!n)return a();let o=window.matchMedia("(prefers-reduced-motion: reduce)").matches,c=em(),l=navigator.hardwareConcurrency||4,h=typeof window.HAUSE_QUALITY=="number"?window.HAUSE_QUALITY:c?l>=6?1:0:l>=6?2:1;try{let ve=document.createElement("canvas"),We=ve.getContext("webgl2");if(!We)return a();let ot=We.getExtension("WEBGL_lose_context");ot&&ot.loseContext()}catch{return a()}let d;try{if(d=new Cu({canvas:n,antialias:h===0,powerPreference:"high-performance"}),!d.getContext())throw new Error("no gl")}catch{return a()}n.addEventListener("webglcontextlost",ve=>{ve.preventDefault(),qe=!1,s.classList.add("no-webgl")}),d.toneMapping=Ma,d.toneMappingExposure=1,d.shadowMap.enabled=!0,d.info.autoReset=!1,d.shadowMap.type=Ga;let p=new Ds(new F(1,0,0),1e3);d.clippingPlanes=[p],nm(d.capabilities.getMaxAnisotropy()),im(h);let u=new Fa;u.environmentIntensity=.6,u.fog=new vl(1317678,70,360);let f=new $i(30,1,.3,1400),x=.3,g=1,m=0,_=3;t("renderer");let b=xm(d,u);t("sky");let{M:y,T:M}=gm();t("materials+textures");let T=Vo(),R=pm(),v=Sm({M:y,T:M,markTex:R,glowTex:T});u.add(v.house),t("house");let A=Rm({M:y,T:M,glowTex:T,markTex:R,tier:h,reduce:o});u.add(A.world),t("world");let I=Am({house:v.house,reduce:o}),G=Pm({M:y,layers:v.layers,glowTex:T}),w=Im({scene:u,M:y,tier:h,reduce:o});Object.values(v.layers).forEach(ve=>{Dm(ve,v.edgeMat),kf(ve)}),kf(A.props);let U=Zm({M:y,H:v,Ug:w,Wd:A,tier:h,reduce:o,glowTex:T});v.house.add(U.root),t("systems+interior+underground+merge");let N=new Ol(10466518,1709842,.5),H=new No(16769728,3);H.castShadow=!0,H.shadow.mapSize.set(h>=2?2048:1024,h>=2?2048:1024),Object.assign(H.shadow.camera,{left:-26,right:26,top:26,bottom:-26,near:5,far:240}),H.shadow.autoUpdate=!1,H.shadow.bias=-3e-4,H.shadow.normalBias=.04,H.shadow.radius=h>=2?2.5:1.5,H.target.position.set(0,3,0);let $=new No(9085656,.6);$.position.copy(b.U.uMoonDir.value).multiplyScalar(60),u.add(N,H,H.target,$);let z={explode:0,radius:36,theta:.55,phi:1.36,ty:4.2,tx:-6,time:19.4,marks:0,ground:1,orbit:.04,visible:1,ghost:0,cut:0,lift:0,thermal:0,netE:0,netW:0,netA:0,netR:0,lensY:0,fx:0,fz:0,beacons:0,section:0,cutX:.45,season:0,snowfall:1,smoke:1,melt:0,icicles:0,aurora:0,zk:0,dof:0},q=Object.assign({level:null,focusSys:null,netFocus:null,ugFocus:null,interactive:!1,zoom:null,zs:0,zp:0,zq:0},z),Z=["explode","radius","phi","ty","tx","time","marks","ground","visible","ghost","cut","lift","thermal","netE","netW","netA","netR","lensY","fx","fz","beacons","section","cutX","season","snowfall","smoke","melt","icicles","aurora","zk","dof"],W=0,J=1,me=1,Ie=1,qe=!0,$e=0,xt=-9,re={},fe={set(ve){Object.assign(q,ve)},highlight(ve){q.focusSys=ve},selectLevel(ve){q.level=ve},levels:gc.map(ve=>ve.key),onPick:null,onHoverLevel:null,onFrame:null,onThermal:null,roomsLit:0,get quality(){return h}};window.HAUSE_STAGE=fe;let Ue=new Et(14256718),we=null;function Ve(ve){we=ve,Object.keys(v.sys).forEach(We=>v.sys[We].mats.forEach(ot=>{We===ve?(ot.emissive.copy(Ue),ot.emissiveIntensity=.9):(ot.emissive.copy(ot.userData.baseEmissive),ot.emissiveIntensity=1)}))}let ie=new Set;v.house.traverse(ve=>{!ve.isMesh||!ve.material||(Array.isArray(ve.material)?ve.material:[ve.material]).forEach(We=>{We.userData&&(We.userData.shell||We.userData.wall)&&ie.add(We)})});let Qe="",le=!1;v.edgeMat.visible=!1;function ye(ve,We){let ot=ve.toFixed(3)+"|"+We.toFixed(3);if(ot===Qe)return;Qe=ot;let Lt=ve>.01||We>.01;ie.forEach(Ot=>{let xn=Ot.userData.pane,on=Ot.userData.shell?ve*(xn?.75:.9):0,Kt=Ot.userData.wall?We*(xn?.8:.9):0;Lt!==le&&(Ot.transparent=Lt||!!Ot.userData.alwaysTransparent,Ot.needsUpdate=!0),Ot.opacity=1-Math.max(on,Kt),Ot.depthWrite=Math.max(on,Kt)<.4}),le=Lt,v.edgeMat.opacity=Math.max(ve*.28,We*.16),v.edgeMat.visible=v.edgeMat.opacity>.01}let ee=Cm({scene:u,M:y,skipParents:[...Object.values(I.groups),U.root],onChange:ve=>{A.setThermal(ve),d.toneMapping=ve?Us:Ma,fe.onThermal&&fe.onThermal(ve)}}),ge=new F;function Te(ve,We){return ge.copy(We),ve.localToWorld(ge),ge.project(f),{x:(ge.x*.5+.5)*J,y:(-ge.y*.5+.5)*me,behind:ge.z>1}}let Ze=(ve,We,ot)=>new F(ve,We,ot),Ye=gc.map(ve=>({obj:v.layers[ve.key],offset:Ze(ci/2+1.4,{roof:7.8,upper:4.9,main:1.8,basement:-1.2,below:-2.8}[ve.key],gn/2)}));fe.projectLevels=()=>Ye.map(ve=>Te(ve.obj,ve.offset)),fe.projectAnchors=()=>{let ve={};Object.keys(v.ANCHORS).forEach(ot=>{ve[ot]=Te(v.house,v.ANCHORS[ot])}),Object.keys(w.ANCHORS).forEach(ot=>{ve[ot]=Te(v.house,w.ANCHORS[ot])});let We=U.anchors();return We&&Object.keys(We).forEach(ot=>{ve["z."+ot]=Te(v.house,We[ot])}),ve},fe.zoomSets=U.names,fe.setLook=ve=>{Object.assign(yn,ve||{})},fe.zoomShots=ve=>U.shots(ve),fe.zoomInput=(ve,We)=>U.input(ve,We),fe.prebuildZoom=()=>U.prebuild();let ut={x:0,y:0,nx:0,ny:0},ft=null,Q=new Gl,It=[];v.house.traverse(ve=>{!ve.isMesh||ve.isInstancedMesh||!ve.visible||ve.userData.noPick||(ve.geometry.computeBoundingSphere(),ve.geometry.boundingSphere.radius>.3&&It.push(ve))});let At=ve=>{for(;ve&&!ve.userData.level;)ve=ve.parent;return ve?ve.userData.level:null};fe.pickAt=(ve,We)=>{Q.setFromCamera({x:ve/J*2-1,y:-(We/me)*2+1},f);let ot=Q.intersectObjects(It,!1)[0];return ot?{level:At(ot.object),sys:ot.object.userData.sys||null}:null},fe.pickCount=()=>It.length,window.addEventListener("pointermove",ve=>{ut.nx=ve.clientX/J*2-1,ut.ny=ve.clientY/me*2-1,ft&&($e=ft.theta0-(ve.clientX-ft.x)*.006)},{passive:!0}),n.addEventListener("pointerdown",ve=>{q.interactive&&(ft={x:ve.clientX,theta0:$e,t:performance.now()})}),window.addEventListener("pointerup",ve=>{if(!ft)return;let We=Math.abs(ve.clientX-ft.x)<6&&performance.now()-ft.t<400;if(ft=null,We&&q.interactive){Q.setFromCamera({x:ve.clientX/J*2-1,y:-(ve.clientY/me)*2+1},f);let ot=Q.intersectObjects(It,!1)[0];ot&&fe.onPick&&fe.onPick(At(ot.object),ot.object.userData.sys||null)}}),n.addEventListener("pointermove",ve=>{if(!q.interactive||ft)return;Q.setFromCamera({x:ve.clientX/J*2-1,y:-(ve.clientY/me)*2+1},f);let We=Q.intersectObjects(It,!1)[0],ot=We?At(We.object):null;n.style.cursor=ot?"pointer":"grab",fe.onHoverLevel&&fe.onHoverLevel(ot)});let B=null;function S(){B&&B.dispose(),B=h>=1?Em(d,u,f,h,Math.round(J*Ie),Math.round(me*Ie)):null}let ue=window.matchMedia("(pointer: coarse)").matches,ce=0;function Me(){clearTimeout(ce),ce=setTimeout(()=>{let ve=window.innerWidth,We=window.innerHeight;ue&&ve===J&&We<=me&&We>me*.72||st()},90)}function st(){J=window.innerWidth,me=window.innerHeight,Ie=Math.min(window.devicePixelRatio||1,h>=2?2:h===1?1.5:1.25)*g,d.setPixelRatio(Ie),d.setSize(J,me,!1),f.aspect=J/me,f.fov=J<700?44:30,f.updateProjectionMatrix(),B&&B.setSize(Math.round(J*Ie),Math.round(me*Ie))}window.addEventListener("resize",Me),st(),S();let nt=new F;function Oe(ve,We){let ot=.5-.5*Math.cos(We*Math.PI*2),Lt=ht(7.5,5,ot),Ot=ht(18.3,21.9,ot),xn=ht(24,62,ot),on=Math.PI*(ve-Lt)/(Ot-Lt),Kt=xn*Math.sin(on),dn=Kt*Math.PI/180;return nt.set(-Math.sin(on)*Math.cos(dn),Math.sin(dn),Math.cos(on)*Math.cos(dn)).normalize(),Kt}let ze=[[0,[.62,.6,.55]],[.16,[.7,.7,.55]],[.3,[.8,1,.62]],[.5,[.74,.95,.55]],[.68,[1.05,.88,.5]],[.82,[1,.72,.45]],[1,[.62,.6,.55]]];function je(ve,We){let ot=0;for(;ot<ze.length-2&&ze[ot+1][0]<=ve;)ot++;let[Lt,Ot]=ze[ot],[xn,on]=ze[ot+1],Kt=(ve-Lt)/(xn-Lt);We.setRGB(ht(Ot[0],on[0],Kt),ht(Ot[1],on[1],Kt),ht(Ot[2],on[2],Kt))}let vt=new F,L=new F,ae=new F,he=new F,Se=new F,Ae={ug:0,section:0,cutX:.45,ground:1,ghost:0,cut:0,snow:1,roofSnow:1,snowfall:1,rain:0,leaves:0,smoke:1,melt:0,icicles:0,grow:0,leafTint:new Et(.3,.5,.15),explode:0,lift:0,zk:0},k=[[0,[.3,.3,.3]],[.22,[.62,.8,.28]],[.36,[.4,.62,.2]],[.55,[.3,.5,.15]],[.7,[.95,.7,.18]],[.82,[.9,.35,.1]],[1,[.5,.2,.08]]];function De(ve,We){let ot=0;for(;ot<k.length-2&&k[ot+1][0]<=ve;)ot++;let[Lt,Ot]=k[ot],[xn,on]=k[ot+1],Kt=(ve-Lt)/(xn-Lt);We.setRGB(ht(Ot[0],on[0],Kt),ht(Ot[1],on[1],Kt),ht(Ot[2],on[2],Kt))}let xe=new Et(16777215),Be=new Et,Ne=0,se=30,at=h>=1?$m(d,u):null,Je=new F,mt=0,Ft=null,Yt="",hn=0,Pn=0,sn="",In=9,yn={shadow:[.96,.99,1.05],high:[1.04,1,.95],sat:1.05};function C(ve,We,ot,Lt,Ot,xn){if(xn||!(Ot>0))return re[ve]=0,ot;let on=2/Lt,Kt=on*Ot,dn=1/(1+Kt+.48*Kt*Kt+.235*Kt*Kt*Kt),On=We-ot,P=re[ve]||0,te=(P+on*On)*Ot;re[ve]=(P-on*te)*dn;let Ce=ot+(On+te)*dn;return ot-We>0==Ce>ot&&(Ce=ot,re[ve]=0),Ce}function be(ve,We){W+=ve;let ot=We?1:1-Math.exp(-ve*(o?30:4.2)),Lt=o?.04:.3;Z.forEach(X=>{z[X]=C(X,z[X],q[X],Lt,ve,We)}),z.theta=C("theta",z.theta,q.theta+(o?0:Math.sin(W*.08)*q.orbit)+$e,ft?Math.min(Lt,.12):Lt,ve,We),gc.forEach(X=>{let de=v.layers[X.key],Re=X.key==="roof"?18*qt(z.lift,0,1):X.key==="upper"?12*qt(z.lift-1,0,1):X.key==="main"?9*qt(z.lift-2,0,1):0;de.position.y=ht(de.position.y,X.dy*z.explode+Re+(q.level===X.key?.9:0),ot)});let Ot=(z.season%1+1)%1,xn=Math.max(1-Rt(.1,.3,Ot),Rt(.84,1,Ot)),on=Math.max(1-Rt(.06,.22,Ot),Rt(.88,1,Ot));Ae.ug=0,Ae.beacons=z.beacons,Ae.section=z.section,Ae.cutX=z.cutX,Ae.ground=z.ground,Ae.ghost=z.ghost,Ae.cut=z.cut,Ae.lift=z.lift,Ae.zk=z.zk,Ae.snow=xn,Ae.roofSnow=on,Ae.explode=z.explode,Ae.grow=Rt(.2,.34,Ot)*(1-Rt(.78,.93,Ot)),De(Ot,Ae.leafTint),Ae.rain=Rt(.2,.24,Ot)*(1-Rt(.3,.34,Ot))*(o?0:1),Ae.leaves=Rt(.72,.78,Ot)*(1-Rt(.9,.95,Ot))*(o?0:1),Ae.melt=Math.max(z.melt,1-on),Ae.icicles=Math.max(z.icicles,Rt(.03,.1,Ot)*(1-Rt(.17,.26,Ot))+Rt(.9,.97,Ot)*.5),Ae.snowfall=z.snowfall*(o?0:1)*(Ot<.05||Ot>.93?1:0),Ae.smoke=z.smoke*(1-Rt(.12,.3,Ot)+Rt(.8,.95,Ot)),je(Ot,A.U.uTint.value);let Kt=Oe(z.time,Ot),dn=Rt(-5,10,Kt);b.update({elev:Kt,daylight:dn,sunDir:nt,thermal:z.thermal,aurora:z.aurora*(1-dn),cloud:ht(.38,.62,Rt(0,1,Math.abs(Math.sin(Ot*Math.PI*2)))),snowy:xn>.5,voidK:qt(1-z.ground,0,1)},W),b.follow(f.position),u.fog.color.copy(b.horizon);let On=1-Rt(0,28,Kt);H.position.copy(nt).multiplyScalar(110).add(H.target.position),H.color.setRGB(1,ht(.95,.62,On),ht(.88,.4,On)),H.intensity=3.6*Rt(-4,6,Kt)*(1-z.thermal),N.color.copy(b.zenith).lerp(xe,.4),N.groundColor.setRGB(.1,.09,.08).lerp(Be.setRGB(.55,.6,.72),xn*.8*(.25+.75*dn)),N.intensity=(.5+.35*dn+.25*z.cut)*(1-z.thermal),$.intensity=.7*(1-dn)*(1-z.thermal),u.environmentIntensity=.5+.4*dn+.1*z.cut,d.toneMappingExposure=ee.on?1:ht(1.2,.95,dn),at&&Ft&&u.environment===at.texture&&(u.environment=Ft),(We||W-xt>.4)&&(b.refreshEnv(We),xt=W),Ft=u.environment,In+=ve;let P=`${nt.x.toFixed(3)},${nt.y.toFixed(3)},${nt.z.toFixed(3)},${z.explode.toFixed(2)},${z.lift.toFixed(2)},${z.cut.toFixed(2)},${z.ghost.toFixed(1)},${z.section.toFixed(2)},${z.cutX.toFixed(2)},${xn.toFixed(2)},${q.level},${U.shown}`;(We||P!==sn||In>.3||z.zk>.02&&mt<.9)&&(H.shadow.needsUpdate=!0,sn=P,In=0),ye(z.ghost*(1-qt(z.explode*4,0,1)),z.cut),G.update(1-dn,z.cut);let te=v.update(Ae,ot,W,dn,We?100:ve);fe.roomsLit=Math.round(qt(te,0,7)),v.extra.chimneyTop.getWorldPosition(he),A.update(Ae,W,ve,dn,vt,he,qt(te/9,0,1));let Ce=q.focusSys;Object.keys(v.sys).forEach(X=>v.sys[X].marks.forEach(de=>{let Re=Ce?X===Ce?1:z.marks*.35:z.marks;de.material.opacity=ht(de.material.opacity,Re,ot),de.scale.setScalar(.95*(X===Ce?1+Math.sin(W*4)*.12:1)*(1+z.explode*.25))})),Ce!==we&&Ve(Ce),I.update(z,q.netFocus,W,ve);let Ee=w.update(Ae,q.ugFocus,W,ve);p.constant=-Ee,ee.set(q.thermal>.5),ee.time.value=W,U.update(z,q,W,ve,We,mt),ut.x=ht(ut.x,ut.nx,ot*.6),ut.y=ht(ut.y,ut.ny,ot*.6);let Pe=z.theta+ut.x*.08,_t=qt(z.phi+ut.y*.04,.35-.27*z.zk,1.5+1.2*z.zk),Ct=J<700,j=qt(z.radius*.012,.02,.3);Math.abs(j-x)>x*.02&&(x=j,f.near=j,f.updateProjectionMatrix()),vt.set(z.fx,z.ty+(Ct?-1.2*qt(z.radius/30,0,1):0),z.fz),L.set(Math.sin(_t)*Math.sin(Pe),Math.cos(_t),Math.sin(_t)*Math.cos(Pe)).multiplyScalar(z.radius*(Ct?1.25:1)).add(vt),f.position.copy(L),f.lookAt(vt),f.updateMatrixWorld(),ae.setFromMatrixColumn(f.matrixWorld,0),f.position.addScaledVector(ae,Ct?0:z.tx),f.updateMatrixWorld(),Se.copy(vt).applyMatrix4(f.matrixWorldInverse);let ne=Math.max(.001,Se.length());se=ne,A.sight.value.set(Se.x/ne,Se.y/ne,Se.z/ne,ne);let pe=f.position,Ge=pe.y<6.2||pe.y<6.2+(5-Math.abs(pe.x))*.72,E=Math.abs(pe.x)<4.95&&Math.abs(pe.z)<3.95&&pe.y>-2.95&&Ge,O=z.cut<.05&&z.ghost<.05&&z.lift<.05&&z.explode<.05&&z.section<.05&&z.thermal<.05,K=z.zk>.5&&E&&O?1:0;if(mt=We?K:ht(mt,K,1-Math.exp(-ve*7)),A.world.visible=!(mt>.98&&pe.y<.2),N.intensity*=1-.82*mt,$.intensity*=1-mt,at){let X=`${q.zoom}:${q.zs}`;X!==Yt&&(Yt=X,hn=0,Pn=0),hn+=ve,mt>.9&&(We||Pn===0&&hn>.25||Pn===1&&hn>1.4)&&(Je.copy(vt).lerp(pe,.4),at.capture(Je),Pn=We?2:Pn+1);let de=mt>.5&&at.texture;de&&(u.environment=at.texture);let Re=qt(Math.abs(mt-.5)*4-.4,0,1);u.environmentIntensity=(de?1.15:u.environmentIntensity)*Re}else u.environmentIntensity*=1-.7*mt;Math.abs(z.lensY-Ne)>1e-4&&(Ne=z.lensY,Math.abs(Ne)<1e-4?f.clearViewOffset():f.setViewOffset(J,me,0,-Ne*me,J,me)),n.style.opacity=z.visible.toFixed(3)}let Le={n:0,sum:0,last:0},lt=performance.now();function ct(ve){if(B){let We=B.gtao,ot=z.ghost>.05||z.cut>.05||ee.on||z.explode>.05;We&&(We.enabled=!ot),B.bloom&&(B.bloom.strength=ee.on?.9:(.3+.55*(1-qt(nt.y*4,0,1)))*(1-.45*z.zk)),B.grade.uniforms.uSat.value=ee.on?1:yn.sat,B.grade.uniforms.uShadow.value.fromArray(ee.on?[1,1,1]:yn.shadow),B.grade.uniforms.uHigh.value.fromArray(ee.on?[1,1,1]:yn.high),B.grade.uniforms.uCool.value=ee.on?0:yn.cool||0,B.setDof(ee.on?0:z.dof,se,f.near,f.far),B.render(ve,W)}else d.render(u,f)}function Gt(ve){let We=ve-Le.last;if(Le.last=ve,!(We>250||We<=0)&&(Le.n++,Le.n>40&&(Le.sum+=We),Le.n===130)){let ot=Le.sum/90;if(ot>26&&h>1&&typeof window.HAUSE_QUALITY!="number")h--,S(),st(),H.shadow.mapSize.set(1024,1024),H.shadow.map&&H.shadow.map.dispose(),H.shadow.map=null;else if(typeof window.HAUSE_QUALITY!="number"){let Lt=g;ot>21?(Lt=Math.max(.6,g*.85),m=_,_=Math.min(32,_*2)):ot<17.6&&g<1&&(m>0?m--:Lt=Math.min(1,g*1.12)),Math.abs(Lt-g)>.01&&(g=Lt,st())}Le={n:0,sum:0,last:ve}}}function Dt(ve){if(!qe)return;let We=Math.min((ve-lt)/1e3,.05);lt=ve,d.info.reset(),be(We,!1),ct(We),Gt(ve),fe.onFrame&&fe.onFrame(),requestAnimationFrame(Dt)}fe.pause=()=>{qe=!1},fe.resume=()=>{qe||(qe=!0,lt=performance.now(),Le.last=0,requestAnimationFrame(Dt))},fe.settle=()=>{d.info.reset(),be(.016,!0),be(.016,!0),ct(.016),fe.onFrame&&fe.onFrame()},window.HAUSE_DEBUG&&(fe.debug={scene:u,camera:f,renderer:d,S:z,target:q,H:v,Wd:A,sky:b,sun:H,hemi:N,moon:$,Sets:U,get post(){return B}}),fe.info=()=>({tier:h,calls:d.info.render.calls,triangles:d.info.render.triangles,pixelRatio:Ie,indoor:+mt.toFixed(2),worldDrawn:A.world.visible,buildMs:fe.buildMs}),t("pre-first-render"),fe.settle(),t("first-render"),fe.laps=e,requestAnimationFrame(ve=>{lt=ve,requestAnimationFrame(Dt)}),fe.buildMs=Math.round(performance.now()-i),s.classList.add("has-webgl"),r()}v_();})();
