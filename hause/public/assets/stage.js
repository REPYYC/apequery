/* HAUSE 3D stage. Built from hause/src/stage with esbuild + three.js. Do not edit by hand. */
(()=>{var Fd=0,ku=1,Od=2;var ir=1,Bd=2,Zr=3,Fs=0,$n=1,Bn=2,Rn=0,Os=1,nn=2,Vu=3,Wu=4,Xl=5;var Bi=100,Hd=101,zd=102,Gd=103,kd=104,sr=200,Vd=201,Wd=202,Xd=203,Xu=204,Yu=205,$a=206,Yd=207,Ja=208,qd=209,Zd=210,$d=211,Jd=212,Kd=213,Qd=214,hl=0,dl=1,fl=2,Ir=3,pl=4,ml=5,gl=6,xl=7,qu=0,jd=1,ef=2,wi=0,Ka=1,Qa=2,ja=3,Bs=4,eo=5,to=6,no=7;var Zu=300,Hs=301,rr=302,Yl=303,ql=304,io=306,wn=1e3,Li=1001,vl=1002,An=1003,tf=1004;var so=1005;var Ln=1006,Zl=1007;var cs=1008;var Hn=1009,$u=1010,Ju=1011,$r=1012,$l=1013,Ki=1014,Hi=1015,yn=1016,Jl=1017,Kl=1018,zs=1020,Ku=35902,Qu=35899,ju=1021,eh=1022,Qn=1023,ss=1026,us=1027,Ql=1028,jl=1029,Gs=1030,ec=1031;var tc=1033,ro=33776,ao=33777,oo=33778,lo=33779,nc=35840,ic=35841,sc=35842,rc=35843,ac=36196,oc=37492,lc=37496,cc=37488,uc=37489,co=37490,hc=37491,dc=37808,fc=37809,pc=37810,mc=37811,gc=37812,xc=37813,vc=37814,_c=37815,yc=37816,Mc=37817,Sc=37818,Ec=37819,bc=37820,Tc=37821,wc=36492,Ac=36494,Rc=36495,Cc=36283,Pc=36284,uo=36285,Ic=36286;var Ma=2300,_l=2301,ll=2302,Ru=2303,Cu=2400,Pu=2401,Iu=2402;var nf=3200,th=3201;var ho=0,sf=1,Qi="",Kt="srgb",Sa="srgb-linear",Ea="linear",jt="srgb";var cl=7680;var rf=519,af=512,of=513,lf=514,Dc=515,cf=516,uf=517,Lc=518,hf=519,nh=35044;var ih="300 es",Ji=2e3,Dr=2001;function H0(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function z0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function ba(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function df(){let i=ba("canvas");return i.style.display="block",i}var Kh={},Lr=null;function Ta(...i){let e="THREE."+i.shift();Lr?Lr("log",e,...i):console.log(e,...i)}function ff(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function yt(...i){i=ff(i);let e="THREE."+i.shift();if(Lr)Lr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function St(...i){i=ff(i);let e="THREE."+i.shift();if(Lr)Lr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function $s(...i){let e=i.join(" ");e in Kh||(Kh[e]=!0,yt(...i))}function pf(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var mf={[hl]:dl,[fl]:gl,[pl]:xl,[Ir]:ml,[dl]:hl,[gl]:fl,[xl]:pl,[ml]:Ir},rs=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},ti=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var ul=Math.PI/180,wa=180/Math.PI;function ys(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ti[i&255]+ti[i>>8&255]+ti[i>>16&255]+ti[i>>24&255]+"-"+ti[e&255]+ti[e>>8&255]+"-"+ti[e>>16&15|64]+ti[e>>24&255]+"-"+ti[t&63|128]+ti[t>>8&255]+"-"+ti[t>>16&255]+ti[t>>24&255]+ti[n&255]+ti[n>>8&255]+ti[n>>16&255]+ti[n>>24&255]).toLowerCase()}function Xt(i,e,t){return Math.max(e,Math.min(t,i))}function G0(i,e){return(i%e+e)%e}function eu(i,e,t){return(1-t)*i+t*e}function ns(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function on(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var ch=class ch{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Xt(this.x,e.x,t.x),this.y=Xt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Xt(this.x,e,t),this.y=Xt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Xt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ch.prototype.isVector2=!0;var He=ch,mn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],f=n[s+3],p=r[a+0],u=r[a+1],d=r[a+2],_=r[a+3];if(f!==_||c!==p||l!==u||h!==d){let g=c*p+l*u+h*d+f*_;g<0&&(p=-p,u=-u,d=-d,_=-_,g=-g);let m=1-o;if(g<.9995){let E=Math.acos(g),T=Math.sin(E);m=Math.sin(m*E)/T,o=Math.sin(o*E)/T,c=c*m+p*o,l=l*m+u*o,h=h*m+d*o,f=f*m+_*o}else{c=c*m+p*o,l=l*m+u*o,h=h*m+d*o,f=f*m+_*o;let E=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=E,l*=E,h*=E,f*=E}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],f=r[a],p=r[a+1],u=r[a+2],d=r[a+3];return e[t]=o*d+h*f+c*u-l*p,e[t+1]=c*d+h*p+l*f-o*u,e[t+2]=l*d+h*u+o*p-c*f,e[t+3]=h*d-o*f-c*p-l*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),f=o(r/2),p=c(n/2),u=c(s/2),d=c(r/2);switch(a){case"XYZ":this._x=p*h*f+l*u*d,this._y=l*u*f-p*h*d,this._z=l*h*d+p*u*f,this._w=l*h*f-p*u*d;break;case"YXZ":this._x=p*h*f+l*u*d,this._y=l*u*f-p*h*d,this._z=l*h*d-p*u*f,this._w=l*h*f+p*u*d;break;case"ZXY":this._x=p*h*f-l*u*d,this._y=l*u*f+p*h*d,this._z=l*h*d+p*u*f,this._w=l*h*f-p*u*d;break;case"ZYX":this._x=p*h*f-l*u*d,this._y=l*u*f+p*h*d,this._z=l*h*d-p*u*f,this._w=l*h*f+p*u*d;break;case"YZX":this._x=p*h*f+l*u*d,this._y=l*u*f+p*h*d,this._z=l*h*d-p*u*f,this._w=l*h*f-p*u*d;break;case"XZY":this._x=p*h*f-l*u*d,this._y=l*u*f-p*h*d,this._z=l*h*d+p*u*f,this._w=l*h*f+p*u*d;break;default:yt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],f=t[10],p=n+o+f;if(p>0){let u=.5/Math.sqrt(p+1);this._w=.25/u,this._x=(h-c)*u,this._y=(r-l)*u,this._z=(a-s)*u}else if(n>o&&n>f){let u=2*Math.sqrt(1+n-o-f);this._w=(h-c)/u,this._x=.25*u,this._y=(s+a)/u,this._z=(r+l)/u}else if(o>f){let u=2*Math.sqrt(1+o-n-f);this._w=(r-l)/u,this._x=(s+a)/u,this._y=.25*u,this._z=(c+h)/u}else{let u=2*Math.sqrt(1+f-n-o);this._w=(a-s)/u,this._x=(r+l)/u,this._y=(c+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},uh=class uh{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Qh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Qh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),h=2*(o*t-r*s),f=2*(r*n-a*t);return this.x=t+c*l+a*f-o*h,this.y=n+c*h+o*l-r*f,this.z=s+c*f+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Xt(this.x,e.x,t.x),this.y=Xt(this.y,e.y,t.y),this.z=Xt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Xt(this.x,e,t),this.y=Xt(this.y,e,t),this.z=Xt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Xt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return tu.copy(this).projectOnVector(e),this.sub(tu)}reflect(e){return this.sub(tu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};uh.prototype.isVector3=!0;var N=uh,tu=new N,Qh=new mn,hh=class hh{constructor(e,t,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],f=n[7],p=n[2],u=n[5],d=n[8],_=s[0],g=s[3],m=s[6],E=s[1],T=s[4],v=s[7],y=s[2],w=s[5],A=s[8];return r[0]=a*_+o*E+c*y,r[3]=a*g+o*T+c*w,r[6]=a*m+o*v+c*A,r[1]=l*_+h*E+f*y,r[4]=l*g+h*T+f*w,r[7]=l*m+h*v+f*A,r[2]=p*_+u*E+d*y,r[5]=p*g+u*T+d*w,r[8]=p*m+u*v+d*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],f=h*a-o*l,p=o*c-h*r,u=l*r-a*c,d=t*f+n*p+s*u;if(d===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/d;return e[0]=f*_,e[1]=(s*l-h*n)*_,e[2]=(o*n-s*a)*_,e[3]=p*_,e[4]=(h*t-s*c)*_,e[5]=(s*r-o*t)*_,e[6]=u*_,e[7]=(n*c-l*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return $s("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(nu.makeScale(e,t)),this}rotate(e){return $s("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(nu.makeRotation(-e)),this}translate(e,t){return $s("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(nu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};hh.prototype.isMatrix3=!0;var Pt=hh,nu=new Pt,jh=new Pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ed=new Pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function k0(){let i={enabled:!0,workingColorSpace:Sa,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===jt&&(s.r=Ms(s.r),s.g=Ms(s.g),s.b=Ms(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===jt&&(s.r=Pr(s.r),s.g=Pr(s.g),s.b=Pr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Qi?Ea:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return $s("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return $s("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Sa]:{primaries:e,whitePoint:n,transfer:Ea,toXYZ:jh,fromXYZ:ed,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Kt},outputColorSpaceConfig:{drawingBufferColorSpace:Kt}},[Kt]:{primaries:e,whitePoint:n,transfer:jt,toXYZ:jh,fromXYZ:ed,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Kt}}}),i}var Wt=k0();function Ms(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Pr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var dr,yl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{dr===void 0&&(dr=ba("canvas")),dr.width=e.width,dr.height=e.height;let s=dr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=dr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ba("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ms(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ms(t[n]/255)*255):t[n]=Ms(t[n]);return{data:t,width:e.width,height:e.height}}else return yt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},V0=0,Ur=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:V0++}),this.uuid=ys(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(iu(s[a].image)):r.push(iu(s[a]))}else r=iu(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function iu(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?yl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(yt("Texture: Unable to serialize Texture."),{})}var W0=0,su=new N,ci=class i extends rs{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Li,s=Li,r=Ln,a=cs,o=Qn,c=Hn,l=i.DEFAULT_ANISOTROPY,h=Qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:W0++}),this.uuid=ys(),this.name="",this.source=new Ur(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(su).x}get height(){return this.source.getSize(su).y}get depth(){return this.source.getSize(su).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){yt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){yt(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Zu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wn:e.x=e.x-Math.floor(e.x);break;case Li:e.x=e.x<0?0:1;break;case vl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wn:e.y=e.y-Math.floor(e.y);break;case Li:e.y=e.y<0?0:1;break;case vl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};ci.DEFAULT_IMAGE=null;ci.DEFAULT_MAPPING=Zu;ci.DEFAULT_ANISOTROPY=1;var dh=class dh{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],f=c[8],p=c[1],u=c[5],d=c[9],_=c[2],g=c[6],m=c[10];if(Math.abs(h-p)<.01&&Math.abs(f-_)<.01&&Math.abs(d-g)<.01){if(Math.abs(h+p)<.1&&Math.abs(f+_)<.1&&Math.abs(d+g)<.1&&Math.abs(l+u+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let T=(l+1)/2,v=(u+1)/2,y=(m+1)/2,w=(h+p)/4,A=(f+_)/4,x=(d+g)/4;return T>v&&T>y?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=w/n,r=A/n):v>y?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=w/s,r=x/s):y<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(y),n=A/r,s=x/r),this.set(n,s,r,t),this}let E=Math.sqrt((g-d)*(g-d)+(f-_)*(f-_)+(p-h)*(p-h));return Math.abs(E)<.001&&(E=1),this.x=(g-d)/E,this.y=(f-_)/E,this.z=(p-h)/E,this.w=Math.acos((l+u+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Xt(this.x,e.x,t.x),this.y=Xt(this.y,e.y,t.y),this.z=Xt(this.z,e.z,t.z),this.w=Xt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Xt(this.x,e,t),this.y=Xt(this.y,e,t),this.z=Xt(this.z,e,t),this.w=Xt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Xt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};dh.prototype.isVector4=!0;var hn=dh,Ml=class extends rs{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ln,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new hn(0,0,e,t),this.scissorTest=!1,this.viewport=new hn(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new ci(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Ln,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ur(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},dn=class extends Ml{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Aa=class extends ci{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=An,this.minFilter=An,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Sl=class extends ci{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=An,this.minFilter=An,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Wl=class Wl{constructor(e,t,n,s,r,a,o,c,l,h,f,p,u,d,_,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,h,f,p,u,d,_,g)}set(e,t,n,s,r,a,o,c,l,h,f,p,u,d,_,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=c,m[2]=l,m[6]=h,m[10]=f,m[14]=p,m[3]=u,m[7]=d,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Wl().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/fr.setFromMatrixColumn(e,0).length(),r=1/fr.setFromMatrixColumn(e,1).length(),a=1/fr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let p=a*h,u=a*f,d=o*h,_=o*f;t[0]=c*h,t[4]=-c*f,t[8]=l,t[1]=u+d*l,t[5]=p-_*l,t[9]=-o*c,t[2]=_-p*l,t[6]=d+u*l,t[10]=a*c}else if(e.order==="YXZ"){let p=c*h,u=c*f,d=l*h,_=l*f;t[0]=p+_*o,t[4]=d*o-u,t[8]=a*l,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=u*o-d,t[6]=_+p*o,t[10]=a*c}else if(e.order==="ZXY"){let p=c*h,u=c*f,d=l*h,_=l*f;t[0]=p-_*o,t[4]=-a*f,t[8]=d+u*o,t[1]=u+d*o,t[5]=a*h,t[9]=_-p*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let p=a*h,u=a*f,d=o*h,_=o*f;t[0]=c*h,t[4]=d*l-u,t[8]=p*l+_,t[1]=c*f,t[5]=_*l+p,t[9]=u*l-d,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let p=a*c,u=a*l,d=o*c,_=o*l;t[0]=c*h,t[4]=_-p*f,t[8]=d*f+u,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=u*f+d,t[10]=p-_*f}else if(e.order==="XZY"){let p=a*c,u=a*l,d=o*c,_=o*l;t[0]=c*h,t[4]=-f,t[8]=l*h,t[1]=p*f+_,t[5]=a*h,t[9]=u*f-d,t[2]=d*f-u,t[6]=o*h,t[10]=_*f+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(X0,e,Y0)}lookAt(e,t,n){let s=this.elements;return vi.subVectors(e,t),vi.lengthSq()===0&&(vi.z=1),vi.normalize(),Ts.crossVectors(n,vi),Ts.lengthSq()===0&&(Math.abs(n.z)===1?vi.x+=1e-4:vi.z+=1e-4,vi.normalize(),Ts.crossVectors(n,vi)),Ts.normalize(),Po.crossVectors(vi,Ts),s[0]=Ts.x,s[4]=Po.x,s[8]=vi.x,s[1]=Ts.y,s[5]=Po.y,s[9]=vi.y,s[2]=Ts.z,s[6]=Po.z,s[10]=vi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],f=n[5],p=n[9],u=n[13],d=n[2],_=n[6],g=n[10],m=n[14],E=n[3],T=n[7],v=n[11],y=n[15],w=s[0],A=s[4],x=s[8],b=s[12],C=s[1],F=s[5],S=s[9],L=s[13],P=s[2],H=s[6],Y=s[10],k=s[14],V=s[3],z=s[7],G=s[11],q=s[15];return r[0]=a*w+o*C+c*P+l*V,r[4]=a*A+o*F+c*H+l*z,r[8]=a*x+o*S+c*Y+l*G,r[12]=a*b+o*L+c*k+l*q,r[1]=h*w+f*C+p*P+u*V,r[5]=h*A+f*F+p*H+u*z,r[9]=h*x+f*S+p*Y+u*G,r[13]=h*b+f*L+p*k+u*q,r[2]=d*w+_*C+g*P+m*V,r[6]=d*A+_*F+g*H+m*z,r[10]=d*x+_*S+g*Y+m*G,r[14]=d*b+_*L+g*k+m*q,r[3]=E*w+T*C+v*P+y*V,r[7]=E*A+T*F+v*H+y*z,r[11]=E*x+T*S+v*Y+y*G,r[15]=E*b+T*L+v*k+y*q,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],f=e[6],p=e[10],u=e[14],d=e[3],_=e[7],g=e[11],m=e[15],E=c*u-l*p,T=o*u-l*f,v=o*p-c*f,y=a*u-l*h,w=a*p-c*h,A=a*f-o*h;return t*(_*E-g*T+m*v)-n*(d*E-g*y+m*w)+s*(d*T-_*y+m*A)-r*(d*v-_*w+g*A)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],h=e[10];return t*(a*h-o*l)-n*(r*h-o*c)+s*(r*l-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],f=e[9],p=e[10],u=e[11],d=e[12],_=e[13],g=e[14],m=e[15],E=t*o-n*a,T=t*c-s*a,v=t*l-r*a,y=n*c-s*o,w=n*l-r*o,A=s*l-r*c,x=h*_-f*d,b=h*g-p*d,C=h*m-u*d,F=f*g-p*_,S=f*m-u*_,L=p*m-u*g,P=E*L-T*S+v*F+y*C-w*b+A*x;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let H=1/P;return e[0]=(o*L-c*S+l*F)*H,e[1]=(s*S-n*L-r*F)*H,e[2]=(_*A-g*w+m*y)*H,e[3]=(p*w-f*A-u*y)*H,e[4]=(c*C-a*L-l*b)*H,e[5]=(t*L-s*C+r*b)*H,e[6]=(g*v-d*A-m*T)*H,e[7]=(h*A-p*v+u*T)*H,e[8]=(a*S-o*C+l*x)*H,e[9]=(n*C-t*S-r*x)*H,e[10]=(d*w-_*v+m*E)*H,e[11]=(f*v-h*w-u*E)*H,e[12]=(o*b-a*F-c*x)*H,e[13]=(t*F-n*b+s*x)*H,e[14]=(_*T-d*y-g*E)*H,e[15]=(h*y-f*T+p*E)*H,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,f=o+o,p=r*l,u=r*h,d=r*f,_=a*h,g=a*f,m=o*f,E=c*l,T=c*h,v=c*f,y=n.x,w=n.y,A=n.z;return s[0]=(1-(_+m))*y,s[1]=(u+v)*y,s[2]=(d-T)*y,s[3]=0,s[4]=(u-v)*w,s[5]=(1-(p+m))*w,s[6]=(g+E)*w,s[7]=0,s[8]=(d+T)*A,s[9]=(g-E)*A,s[10]=(1-(p+_))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=fr.set(s[0],s[1],s[2]).length(),o=fr.set(s[4],s[5],s[6]).length(),c=fr.set(s[8],s[9],s[10]).length();r<0&&(a=-a),qi.copy(this);let l=1/a,h=1/o,f=1/c;return qi.elements[0]*=l,qi.elements[1]*=l,qi.elements[2]*=l,qi.elements[4]*=h,qi.elements[5]*=h,qi.elements[6]*=h,qi.elements[8]*=f,qi.elements[9]*=f,qi.elements[10]*=f,t.setFromRotationMatrix(qi),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,s,r,a,o=Ji,c=!1){let l=this.elements,h=2*r/(t-e),f=2*r/(n-s),p=(t+e)/(t-e),u=(n+s)/(n-s),d,_;if(c)d=r/(a-r),_=a*r/(a-r);else if(o===Ji)d=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Dr)d=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=f,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Ji,c=!1){let l=this.elements,h=2/(t-e),f=2/(n-s),p=-(t+e)/(t-e),u=-(n+s)/(n-s),d,_;if(c)d=1/(a-r),_=a/(a-r);else if(o===Ji)d=-2/(a-r),_=-(a+r)/(a-r);else if(o===Dr)d=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=p,l[1]=0,l[5]=f,l[9]=0,l[13]=u,l[2]=0,l[6]=0,l[10]=d,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Wl.prototype.isMatrix4=!0;var gt=Wl,fr=new N,qi=new gt,X0=new N(0,0,0),Y0=new N(1,1,1),Ts=new N,Po=new N,vi=new N,td=new gt,nd=new mn,Mi=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],f=s[2],p=s[6],u=s[10];switch(t){case"XYZ":this._y=Math.asin(Xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Xt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,u),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Xt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,u),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Xt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-Xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:yt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return td.makeRotationFromQuaternion(e),this.setFromRotationMatrix(td,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return nd.setFromEuler(this),this.setFromQuaternion(nd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Mi.DEFAULT_ORDER="XYZ";var Nr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},q0=0,id=new N,pr=new mn,ms=new gt,Io=new N,la=new N,Z0=new N,$0=new mn,sd=new N(1,0,0),rd=new N(0,1,0),ad=new N(0,0,1),od={type:"added"},J0={type:"removed"},mr={type:"childadded",child:null},ru={type:"childremoved",child:null},_n=class i extends rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:q0++}),this.uuid=ys(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new N,t=new Mi,n=new mn,s=new N(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new gt},normalMatrix:{value:new Pt}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Nr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return pr.setFromAxisAngle(e,t),this.quaternion.multiply(pr),this}rotateOnWorldAxis(e,t){return pr.setFromAxisAngle(e,t),this.quaternion.premultiply(pr),this}rotateX(e){return this.rotateOnAxis(sd,e)}rotateY(e){return this.rotateOnAxis(rd,e)}rotateZ(e){return this.rotateOnAxis(ad,e)}translateOnAxis(e,t){return id.copy(e).applyQuaternion(this.quaternion),this.position.add(id.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(sd,e)}translateY(e){return this.translateOnAxis(rd,e)}translateZ(e){return this.translateOnAxis(ad,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ms.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Io.copy(e):Io.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),la.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ms.lookAt(la,Io,this.up):ms.lookAt(Io,la,this.up),this.quaternion.setFromRotationMatrix(ms),s&&(ms.extractRotation(s.matrixWorld),pr.setFromRotationMatrix(ms),this.quaternion.premultiply(pr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(St("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(od),mr.child=e,this.dispatchEvent(mr),mr.child=null):St("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(J0),ru.child=e,this.dispatchEvent(ru),ru.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ms.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ms.multiply(e.parent.matrixWorld)),e.applyMatrix4(ms),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(od),mr.child=e,this.dispatchEvent(mr),mr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(la,e,Z0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(la,$0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let f=c[l];r(e.shapes,f)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),f=a(e.shapes),p=a(e.skeletons),u=a(e.animations),d=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),p.length>0&&(n.skeletons=p),u.length>0&&(n.animations=u),d.length>0&&(n.nodes=d)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};_n.DEFAULT_UP=new N(0,1,0);_n.DEFAULT_MATRIX_AUTO_UPDATE=!0;_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ft=class extends _n{constructor(){super(),this.isGroup=!0,this.type="Group"}},K0={type:"move"},Fr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ft,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ft,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ft,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let _ of e.hand.values()){let g=t.getJointPose(_,n),m=this._getHandJoint(l,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],p=h.position.distanceTo(f.position),u=.02,d=.005;l.inputState.pinching&&p>u+d?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&p<=u-d&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(K0)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ft;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},gf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ws={h:0,s:0,l:0},Do={h:0,s:0,l:0};function au(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Qe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Wt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Wt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Wt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Wt.workingColorSpace){if(e=G0(e,1),t=Xt(t,0,1),n=Xt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=au(a,r,e+1/3),this.g=au(a,r,e),this.b=au(a,r,e-1/3)}return Wt.colorSpaceToWorking(this,s),this}setStyle(e,t=Kt){function n(r){r!==void 0&&parseFloat(r)<1&&yt("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:yt("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);yt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Kt){let n=gf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):yt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ms(e.r),this.g=Ms(e.g),this.b=Ms(e.b),this}copyLinearToSRGB(e){return this.r=Pr(e.r),this.g=Pr(e.g),this.b=Pr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kt){return Wt.workingToColorSpace(ni.copy(this),e),Math.round(Xt(ni.r*255,0,255))*65536+Math.round(Xt(ni.g*255,0,255))*256+Math.round(Xt(ni.b*255,0,255))}getHexString(e=Kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Wt.workingColorSpace){Wt.workingToColorSpace(ni.copy(this),t);let n=ni.r,s=ni.g,r=ni.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let f=a-o;switch(l=h<=.5?f/(a+o):f/(2-a-o),a){case n:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-n)/f+2;break;case r:c=(n-s)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Wt.workingColorSpace){return Wt.workingToColorSpace(ni.copy(this),t),e.r=ni.r,e.g=ni.g,e.b=ni.b,e}getStyle(e=Kt){Wt.workingToColorSpace(ni.copy(this),e);let t=ni.r,n=ni.g,s=ni.b;return e!==Kt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ws),this.setHSL(ws.h+e,ws.s+t,ws.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ws),e.getHSL(Do);let n=eu(ws.h,Do.h,t),s=eu(ws.s,Do.s,t),r=eu(ws.l,Do.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ni=new Qe;Qe.NAMES=gf;var Ra=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Qe(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Js=class extends _n{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mi,this.environmentIntensity=1,this.environmentRotation=new Mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Zi=new N,gs=new N,ou=new N,xs=new N,gr=new N,xr=new N,ld=new N,lu=new N,cu=new N,uu=new N,hu=new hn,du=new hn,fu=new hn,is=class i{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Zi.subVectors(e,t),s.cross(Zi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Zi.subVectors(s,t),gs.subVectors(n,t),ou.subVectors(e,t);let a=Zi.dot(Zi),o=Zi.dot(gs),c=Zi.dot(ou),l=gs.dot(gs),h=gs.dot(ou),f=a*l-o*o;if(f===0)return r.set(0,0,0),null;let p=1/f,u=(l*c-o*h)*p,d=(a*h-o*c)*p;return r.set(1-u-d,d,u)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,xs)===null?!1:xs.x>=0&&xs.y>=0&&xs.x+xs.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,xs)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,xs.x),c.addScaledVector(a,xs.y),c.addScaledVector(o,xs.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return hu.setScalar(0),du.setScalar(0),fu.setScalar(0),hu.fromBufferAttribute(e,t),du.fromBufferAttribute(e,n),fu.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(hu,r.x),a.addScaledVector(du,r.y),a.addScaledVector(fu,r.z),a}static isFrontFacing(e,t,n,s){return Zi.subVectors(n,t),gs.subVectors(e,t),Zi.cross(gs).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zi.subVectors(this.c,this.b),gs.subVectors(this.a,this.b),Zi.cross(gs).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;gr.subVectors(s,n),xr.subVectors(r,n),lu.subVectors(e,n);let c=gr.dot(lu),l=xr.dot(lu);if(c<=0&&l<=0)return t.copy(n);cu.subVectors(e,s);let h=gr.dot(cu),f=xr.dot(cu);if(h>=0&&f<=h)return t.copy(s);let p=c*f-h*l;if(p<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(gr,a);uu.subVectors(e,r);let u=gr.dot(uu),d=xr.dot(uu);if(d>=0&&u<=d)return t.copy(r);let _=u*l-c*d;if(_<=0&&l>=0&&d<=0)return o=l/(l-d),t.copy(n).addScaledVector(xr,o);let g=h*d-u*f;if(g<=0&&f-h>=0&&u-d>=0)return ld.subVectors(r,s),o=(f-h)/(f-h+(u-d)),t.copy(s).addScaledVector(ld,o);let m=1/(g+_+p);return a=_*m,o=p*m,t.copy(n).addScaledVector(gr,a).addScaledVector(xr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},as=class{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint($i.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint($i.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=$i.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,$i):$i.fromBufferAttribute(r,a),$i.applyMatrix4(e.matrixWorld),this.expandByPoint($i);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Lo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Lo.copy(n.boundingBox)),Lo.applyMatrix4(e.matrixWorld),this.union(Lo)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,$i),$i.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ca),Uo.subVectors(this.max,ca),vr.subVectors(e.a,ca),_r.subVectors(e.b,ca),yr.subVectors(e.c,ca),As.subVectors(_r,vr),Rs.subVectors(yr,_r),Ws.subVectors(vr,yr);let t=[0,-As.z,As.y,0,-Rs.z,Rs.y,0,-Ws.z,Ws.y,As.z,0,-As.x,Rs.z,0,-Rs.x,Ws.z,0,-Ws.x,-As.y,As.x,0,-Rs.y,Rs.x,0,-Ws.y,Ws.x,0];return!pu(t,vr,_r,yr,Uo)||(t=[1,0,0,0,1,0,0,0,1],!pu(t,vr,_r,yr,Uo))?!1:(No.crossVectors(As,Rs),t=[No.x,No.y,No.z],pu(t,vr,_r,yr,Uo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$i).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($i).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vs),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},vs=[new N,new N,new N,new N,new N,new N,new N,new N],$i=new N,Lo=new as,vr=new N,_r=new N,yr=new N,As=new N,Rs=new N,Ws=new N,ca=new N,Uo=new N,No=new N,Xs=new N;function pu(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Xs.fromArray(i,r);let o=s.x*Math.abs(Xs.x)+s.y*Math.abs(Xs.y)+s.z*Math.abs(Xs.z),c=e.dot(Xs),l=t.dot(Xs),h=n.dot(Xs);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Dn=new N,Fo=new He,Q0=0,Rt=class extends rs{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Q0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=nh,this.updateRanges=[],this.gpuType=Hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Fo.fromBufferAttribute(this,t),Fo.applyMatrix3(e),this.setXY(t,Fo.x,Fo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Dn.fromBufferAttribute(this,t),Dn.applyMatrix3(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Dn.fromBufferAttribute(this,t),Dn.applyMatrix4(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dn.fromBufferAttribute(this,t),Dn.applyNormalMatrix(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dn.fromBufferAttribute(this,t),Dn.transformDirection(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ns(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ns(t,this.array)),t}setX(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ns(t,this.array)),t}setY(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ns(t,this.array)),t}setZ(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ns(t,this.array)),t}setW(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=on(t,this.array),n=on(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=on(t,this.array),n=on(n,this.array),s=on(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=on(t,this.array),n=on(n,this.array),s=on(s,this.array),r=on(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Ca=class extends Rt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Pa=class extends Rt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Nt=class extends Rt{constructor(e,t,n){super(new Float32Array(e),t,n)}},j0=new as,ua=new N,mu=new N,os=class{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):j0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ua.subVectors(e,this.center);let t=ua.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ua,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(mu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ua.copy(e.center).add(mu)),this.expandByPoint(ua.copy(e.center).sub(mu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},ep=0,Di=new gt,gu=new _n,Mr=new N,_i=new as,ha=new as,Wn=new N,Ft=class i extends rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ep++}),this.uuid=ys(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(H0(e)?Pa:Ca)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Pt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Di.makeRotationFromQuaternion(e),this.applyMatrix4(Di),this}rotateX(e){return Di.makeRotationX(e),this.applyMatrix4(Di),this}rotateY(e){return Di.makeRotationY(e),this.applyMatrix4(Di),this}rotateZ(e){return Di.makeRotationZ(e),this.applyMatrix4(Di),this}translate(e,t,n){return Di.makeTranslation(e,t,n),this.applyMatrix4(Di),this}scale(e,t,n){return Di.makeScale(e,t,n),this.applyMatrix4(Di),this}lookAt(e){return gu.lookAt(e),gu.updateMatrix(),this.applyMatrix4(gu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mr).negate(),this.translate(Mr.x,Mr.y,Mr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Nt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&yt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new as);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){St("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];_i.setFromBufferAttribute(r),this.morphTargetsRelative?(Wn.addVectors(this.boundingBox.min,_i.min),this.boundingBox.expandByPoint(Wn),Wn.addVectors(this.boundingBox.max,_i.max),this.boundingBox.expandByPoint(Wn)):(this.boundingBox.expandByPoint(_i.min),this.boundingBox.expandByPoint(_i.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&St('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new os);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){St("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){let n=this.boundingSphere.center;if(_i.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];ha.setFromBufferAttribute(o),this.morphTargetsRelative?(Wn.addVectors(_i.min,ha.min),_i.expandByPoint(Wn),Wn.addVectors(_i.max,ha.max),_i.expandByPoint(Wn)):(_i.expandByPoint(ha.min),_i.expandByPoint(ha.max))}_i.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Wn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Wn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Wn.fromBufferAttribute(o,l),c&&(Mr.fromBufferAttribute(e,l),Wn.add(Mr)),s=Math.max(s,n.distanceToSquared(Wn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&St('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){St("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Rt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let x=0;x<n.count;x++)o[x]=new N,c[x]=new N;let l=new N,h=new N,f=new N,p=new He,u=new He,d=new He,_=new N,g=new N;function m(x,b,C){l.fromBufferAttribute(n,x),h.fromBufferAttribute(n,b),f.fromBufferAttribute(n,C),p.fromBufferAttribute(r,x),u.fromBufferAttribute(r,b),d.fromBufferAttribute(r,C),h.sub(l),f.sub(l),u.sub(p),d.sub(p);let F=1/(u.x*d.y-d.x*u.y);isFinite(F)&&(_.copy(h).multiplyScalar(d.y).addScaledVector(f,-u.y).multiplyScalar(F),g.copy(f).multiplyScalar(u.x).addScaledVector(h,-d.x).multiplyScalar(F),o[x].add(_),o[b].add(_),o[C].add(_),c[x].add(g),c[b].add(g),c[C].add(g))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let x=0,b=E.length;x<b;++x){let C=E[x],F=C.start,S=C.count;for(let L=F,P=F+S;L<P;L+=3)m(e.getX(L+0),e.getX(L+1),e.getX(L+2))}let T=new N,v=new N,y=new N,w=new N;function A(x){y.fromBufferAttribute(s,x),w.copy(y);let b=o[x];T.copy(b),T.sub(y.multiplyScalar(y.dot(b))).normalize(),v.crossVectors(w,b);let F=v.dot(c[x])<0?-1:1;a.setXYZW(x,T.x,T.y,T.z,F)}for(let x=0,b=E.length;x<b;++x){let C=E[x],F=C.start,S=C.count;for(let L=F,P=F+S;L<P;L+=3)A(e.getX(L+0)),A(e.getX(L+1)),A(e.getX(L+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Rt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,u=n.count;p<u;p++)n.setXYZ(p,0,0,0);let s=new N,r=new N,a=new N,o=new N,c=new N,l=new N,h=new N,f=new N;if(e)for(let p=0,u=e.count;p<u;p+=3){let d=e.getX(p+0),_=e.getX(p+1),g=e.getX(p+2);s.fromBufferAttribute(t,d),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,g),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,d),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),o.add(h),c.add(h),l.add(h),n.setXYZ(d,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let p=0,u=t.count;p<u;p+=3)s.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),a.fromBufferAttribute(t,p+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Wn.fromBufferAttribute(e,t),Wn.normalize(),e.setXYZ(t,Wn.x,Wn.y,Wn.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,f=o.normalized,p=new l.constructor(c.length*h),u=0,d=0;for(let _=0,g=c.length;_<g;_++){o.isInterleavedBufferAttribute?u=c[_]*o.data.stride+o.offset:u=c[_]*h;for(let m=0;m<h;m++)p[d++]=l[u++]}return new Rt(p,h,f)}if(this.index===null)return yt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,f=l.length;h<f;h++){let p=l[h],u=e(p,n);c.push(u)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let f=0,p=l.length;f<p;f++){let u=l[f];h.push(u.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],f=r[l];for(let p=0,u=f.length;p<u;p++)h.push(f[p].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ia=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=nh,this.updateRanges=[],this.version=0,this.uuid=ys()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ys()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ys()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},li=new N,Or=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)li.fromBufferAttribute(this,t),li.applyMatrix4(e),this.setXYZ(t,li.x,li.y,li.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)li.fromBufferAttribute(this,t),li.applyNormalMatrix(e),this.setXYZ(t,li.x,li.y,li.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)li.fromBufferAttribute(this,t),li.transformDirection(e),this.setXYZ(t,li.x,li.y,li.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ns(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=on(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=on(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=on(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=on(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=on(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ns(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ns(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ns(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ns(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=on(t,this.array),n=on(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=on(t,this.array),n=on(n,this.array),s=on(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=on(t,this.array),n=on(n,this.array),s=on(s,this.array),r=on(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Ta("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Rt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ta("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},xu=new N,tp=new N,np=new Pt,yi=class{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=xu.subVectors(n,t).cross(tp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(xu),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||np.getNormalMatrix(e),s=this.coplanarPoint(xu).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},ip=0,Ui=class extends rs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ip++}),this.uuid=ys(),this.name="",this.type="Material",this.blending=Os,this.side=Fs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xu,this.blendDst=Yu,this.blendEquation=Bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=Ir,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cl,this.stencilZFail=cl,this.stencilZPass=cl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){yt(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){yt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Qe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new yi().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new He().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new He().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Fn=class extends Ui{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Qe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Sr,da=new N,Er=new N,br=new N,Tr=new He,fa=new He,xf=new gt,Oo=new N,pa=new N,Bo=new N,cd=new He,vu=new He,ud=new He,Yn=class extends _n{constructor(e=new Fn){if(super(),this.isSprite=!0,this.type="Sprite",Sr===void 0){Sr=new Ft;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ia(t,5);Sr.setIndex([0,1,2,0,2,3]),Sr.setAttribute("position",new Or(n,3,0,!1)),Sr.setAttribute("uv",new Or(n,2,3,!1))}this.geometry=Sr,this.material=e,this.center=new He(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&St('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Er.setFromMatrixScale(this.matrixWorld),xf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),br.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Er.multiplyScalar(-br.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Ho(Oo.set(-.5,-.5,0),br,a,Er,s,r),Ho(pa.set(.5,-.5,0),br,a,Er,s,r),Ho(Bo.set(.5,.5,0),br,a,Er,s,r),cd.set(0,0),vu.set(1,0),ud.set(1,1);let o=e.ray.intersectTriangle(Oo,pa,Bo,!1,da);if(o===null&&(Ho(pa.set(-.5,.5,0),br,a,Er,s,r),vu.set(0,1),o=e.ray.intersectTriangle(Oo,Bo,pa,!1,da),o===null))return;let c=e.ray.origin.distanceTo(da);c<e.near||c>e.far||t.push({distance:c,point:da.clone(),uv:is.getInterpolation(da,Oo,pa,Bo,cd,vu,ud,new He),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Ho(i,e,t,n,s,r){Tr.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(fa.x=r*Tr.x-s*Tr.y,fa.y=s*Tr.x+r*Tr.y):fa.copy(Tr),i.copy(e),i.x+=fa.x,i.y+=fa.y,i.applyMatrix4(xf)}var _s=new N,_u=new N,zo=new N,Go=new N,Ks=class{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_s)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=_s.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_s.copy(this.origin).addScaledVector(this.direction,t),_s.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){_u.copy(e).add(t).multiplyScalar(.5),zo.copy(t).sub(e).normalize(),Go.copy(this.origin).sub(_u);let r=e.distanceTo(t)*.5,a=-this.direction.dot(zo),o=Go.dot(this.direction),c=-Go.dot(zo),l=Go.lengthSq(),h=Math.abs(1-a*a),f,p,u,d;if(h>0)if(f=a*c-o,p=a*o-c,d=r*h,f>=0)if(p>=-d)if(p<=d){let _=1/h;f*=_,p*=_,u=f*(f+a*p+2*o)+p*(a*f+p+2*c)+l}else p=r,f=Math.max(0,-(a*p+o)),u=-f*f+p*(p+2*c)+l;else p=-r,f=Math.max(0,-(a*p+o)),u=-f*f+p*(p+2*c)+l;else p<=-d?(f=Math.max(0,-(-a*r+o)),p=f>0?-r:Math.min(Math.max(-r,-c),r),u=-f*f+p*(p+2*c)+l):p<=d?(f=0,p=Math.min(Math.max(-r,-c),r),u=p*(p+2*c)+l):(f=Math.max(0,-(a*r+o)),p=f>0?r:Math.min(Math.max(-r,-c),r),u=-f*f+p*(p+2*c)+l);else p=a>0?-r:r,f=Math.max(0,-(a*p+o)),u=-f*f+p*(p+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(_u).addScaledVector(zo,p),u}intersectSphere(e,t){if(e.radius<0)return null;_s.subVectors(e.center,this.origin);let n=_s.dot(this.direction),s=_s.dot(_s)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,p=this.origin;return l>=0?(n=(e.min.x-p.x)*l,s=(e.max.x-p.x)*l):(n=(e.max.x-p.x)*l,s=(e.min.x-p.x)*l),h>=0?(r=(e.min.y-p.y)*h,a=(e.max.y-p.y)*h):(r=(e.max.y-p.y)*h,a=(e.min.y-p.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-p.z)*f,c=(e.max.z-p.z)*f):(o=(e.max.z-p.z)*f,c=(e.min.z-p.z)*f),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,_s)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,f=e.x-a.x,p=e.y-a.y,u=e.z-a.z,d=t.x-a.x,_=t.y-a.y,g=t.z-a.z,m=n.x-a.x,E=n.y-a.y,T=n.z-a.z,v=Math.abs(c),y=Math.abs(l),w=Math.abs(h),A,x,b,C,F,S,L,P,H,Y,k,V;if(v>=y&&v>=w?(b=c,S=f,H=d,V=m,c>=0?(A=l,x=h,C=p,F=u,L=_,P=g,Y=E,k=T):(A=h,x=l,C=u,F=p,L=g,P=_,Y=T,k=E)):y>=w?(b=l,S=p,H=_,V=E,l>=0?(A=h,x=c,C=u,F=f,L=g,P=d,Y=T,k=m):(A=c,x=h,C=f,F=u,L=d,P=g,Y=m,k=T)):(b=h,S=u,H=g,V=T,h>=0?(A=c,x=l,C=f,F=p,L=d,P=_,Y=m,k=E):(A=l,x=c,C=p,F=f,L=_,P=d,Y=E,k=m)),b===0)return null;let z=A/b,G=x/b,q=1/b,fe=C-z*S,be=F-G*S,Ce=L-z*H,ze=P-G*H,et=Y-z*V,Q=k-G*V,ue=et*ze-Q*Ce,we=fe*Q-be*et,me=Ce*be-ze*fe;if(s){if(ue<0||we<0||me<0)return null}else if((ue<0||we<0||me<0)&&(ue>0||we>0||me>0))return null;let Pe=ue+we+me;if(Pe===0)return null;let Z=q*(ue*S+we*H+me*V);return(Pe>0?Z<0:Z>0)?null:this.at(Z/Pe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},rn=class extends Ui{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.combine=qu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},hd=new gt,Ys=new Ks,ko=new os,dd=new N,Vo=new N,Wo=new N,Xo=new N,yu=new N,Yo=new N,fd=new N,qo=new N,Fe=class extends _n{constructor(e=new Ft,t=new rn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Yo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],f=r[c];h!==0&&(yu.fromBufferAttribute(f,e),a?Yo.addScaledVector(yu,h):Yo.addScaledVector(yu.sub(t),h))}t.add(Yo)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ko.copy(n.boundingSphere),ko.applyMatrix4(r),Ys.copy(e.ray).recast(e.near),!(ko.containsPoint(Ys.origin)===!1&&(Ys.intersectSphere(ko,dd)===null||Ys.origin.distanceToSquared(dd)>(e.far-e.near)**2))&&(hd.copy(r).invert(),Ys.copy(e.ray).applyMatrix4(hd),!(n.boundingBox!==null&&Ys.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ys)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,p=r.groups,u=r.drawRange;if(o!==null)if(Array.isArray(a))for(let d=0,_=p.length;d<_;d++){let g=p[d],m=a[g.materialIndex],E=Math.max(g.start,u.start),T=Math.min(o.count,Math.min(g.start+g.count,u.start+u.count));for(let v=E,y=T;v<y;v+=3){let w=o.getX(v),A=o.getX(v+1),x=o.getX(v+2);s=Zo(this,m,e,n,l,h,f,w,A,x),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let d=Math.max(0,u.start),_=Math.min(o.count,u.start+u.count);for(let g=d,m=_;g<m;g+=3){let E=o.getX(g),T=o.getX(g+1),v=o.getX(g+2);s=Zo(this,a,e,n,l,h,f,E,T,v),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let d=0,_=p.length;d<_;d++){let g=p[d],m=a[g.materialIndex],E=Math.max(g.start,u.start),T=Math.min(c.count,Math.min(g.start+g.count,u.start+u.count));for(let v=E,y=T;v<y;v+=3){let w=v,A=v+1,x=v+2;s=Zo(this,m,e,n,l,h,f,w,A,x),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let d=Math.max(0,u.start),_=Math.min(c.count,u.start+u.count);for(let g=d,m=_;g<m;g+=3){let E=g,T=g+1,v=g+2;s=Zo(this,a,e,n,l,h,f,E,T,v),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function sp(i,e,t,n,s,r,a,o){let c;if(e.side===$n?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===Fs,o),c===null)return null;qo.copy(o),qo.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(qo);return l<t.near||l>t.far?null:{distance:l,point:qo.clone(),object:i}}function Zo(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,Vo),i.getVertexPosition(c,Wo),i.getVertexPosition(l,Xo);let h=sp(i,e,t,n,Vo,Wo,Xo,fd);if(h){let f=new N;is.getBarycoord(fd,Vo,Wo,Xo,f),s&&(h.uv=is.getInterpolatedAttribute(s,o,c,l,f,new He)),r&&(h.uv1=is.getInterpolatedAttribute(r,o,c,l,f,new He)),a&&(h.normal=is.getInterpolatedAttribute(a,o,c,l,f,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let p={a:o,b:c,c:l,normal:new N,materialIndex:0};is.getNormal(Vo,Wo,Xo,p.normal),h.face=p,h.barycoord=f}return h}var Ni=class extends ci{constructor(e=null,t=1,n=1,s,r,a,o,c,l=An,h=An,f,p){super(null,a,o,c,l,h,s,r,f,p),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Br=class extends Rt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},wr=new gt,pd=new gt,$o=[],md=new as,rp=new gt,ma=new Fe,ga=new os,Si=class extends Fe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Br(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,rp)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new as),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,wr),md.copy(e.boundingBox).applyMatrix4(wr),this.boundingBox.union(md)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new os),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,wr),ga.copy(e.boundingSphere).applyMatrix4(wr),this.boundingSphere.union(ga)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(ma.geometry=this.geometry,ma.material=this.material,ma.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ga.copy(this.boundingSphere),ga.applyMatrix4(n),e.ray.intersectsSphere(ga)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,wr),pd.multiplyMatrices(n,wr),ma.matrixWorld=pd,ma.raycast(e,$o);for(let a=0,o=$o.length;a<o;a++){let c=$o[a];c.instanceId=r,c.object=this,t.push(c)}$o.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Br(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ni(new Float32Array(s*this.count),s,this.count,Ql,Hi));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},qs=new os,ap=new He(.5,.5),Jo=new N,Hr=class{constructor(e=new yi,t=new yi,n=new yi,s=new yi,r=new yi,a=new yi){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ji,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],f=r[5],p=r[6],u=r[7],d=r[8],_=r[9],g=r[10],m=r[11],E=r[12],T=r[13],v=r[14],y=r[15];if(s[0].setComponents(l-a,u-h,m-d,y-E).normalize(),s[1].setComponents(l+a,u+h,m+d,y+E).normalize(),s[2].setComponents(l+o,u+f,m+_,y+T).normalize(),s[3].setComponents(l-o,u-f,m-_,y-T).normalize(),n)s[4].setComponents(c,p,g,v).normalize(),s[5].setComponents(l-c,u-p,m-g,y-v).normalize();else if(s[4].setComponents(l-c,u-p,m-g,y-v).normalize(),t===Ji)s[5].setComponents(l+c,u+p,m+g,y+v).normalize();else if(t===Dr)s[5].setComponents(c,p,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qs)}intersectsSprite(e){qs.center.set(0,0,0);let t=ap.distanceTo(e.center);return qs.radius=.7071067811865476+t,qs.applyMatrix4(e.matrixWorld),this.intersectsSphere(qs)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Jo.x=s.normal.x>0?e.max.x:e.min.x,Jo.y=s.normal.y>0?e.max.y:e.min.y,Jo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Jo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ps=class extends Ui{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},El=new N,bl=new N,gd=new gt,xa=new Ks,Ko=new os,Mu=new N,xd=new N,Tl=class extends _n{constructor(e=new Ft,t=new Ps){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)El.fromBufferAttribute(t,s-1),bl.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=El.distanceTo(bl);e.setAttribute("lineDistance",new Nt(n,1))}else yt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ko.copy(n.boundingSphere),Ko.applyMatrix4(s),Ko.radius+=r,e.ray.intersectsSphere(Ko)===!1)return;gd.copy(s).invert(),xa.copy(e.ray).applyMatrix4(gd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,p=n.attributes.position;if(h!==null){let u=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let _=u,g=d-1;_<g;_+=l){let m=h.getX(_),E=h.getX(_+1),T=Qo(this,e,xa,c,m,E,_);T&&t.push(T)}if(this.isLineLoop){let _=h.getX(d-1),g=h.getX(u),m=Qo(this,e,xa,c,_,g,d-1);m&&t.push(m)}}else{let u=Math.max(0,a.start),d=Math.min(p.count,a.start+a.count);for(let _=u,g=d-1;_<g;_+=l){let m=Qo(this,e,xa,c,_,_+1,_);m&&t.push(m)}if(this.isLineLoop){let _=Qo(this,e,xa,c,d-1,u,d-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Qo(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(El.fromBufferAttribute(o,s),bl.fromBufferAttribute(o,r),t.distanceSqToSegment(El,bl,Mu,xd)>n)return;Mu.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Mu);if(!(l<e.near||l>e.far))return{distance:l,point:xd.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var vd=new N,_d=new N,ls=class extends Tl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)vd.fromBufferAttribute(t,s),_d.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+vd.distanceTo(_d);e.setAttribute("lineDistance",new Nt(n,1))}else yt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var On=class extends Ui{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},yd=new gt,Du=new Ks,jo=new os,el=new N,qn=class extends _n{constructor(e=new Ft,t=new On){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),jo.copy(n.boundingSphere),jo.applyMatrix4(s),jo.radius+=r,e.ray.intersectsSphere(jo)===!1)return;yd.copy(s).invert(),Du.copy(e.ray).applyMatrix4(yd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,f=n.attributes.position;if(l!==null){let p=Math.max(0,a.start),u=Math.min(l.count,a.start+a.count);for(let d=p,_=u;d<_;d++){let g=l.getX(d);el.fromBufferAttribute(f,g),Md(el,g,c,s,e,t,this)}}else{let p=Math.max(0,a.start),u=Math.min(f.count,a.start+a.count);for(let d=p,_=u;d<_;d++)el.fromBufferAttribute(f,d),Md(el,d,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Md(i,e,t,n,s,r,a){let o=Du.distanceSqToPoint(i);if(o<t){let c=new N;Du.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Da=class extends ci{constructor(e=[],t=Hs,n,s,r,a,o,c,l,h){super(e,t,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},En=class extends ci{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Fi=class extends ci{constructor(e,t,n=Ki,s,r,a,o=An,c=An,l,h=ss,f=1){if(h!==ss&&h!==us)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let p={width:e,height:t,depth:f};super(p,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ur(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},wl=class extends Fi{constructor(e,t=Ki,n=Hs,s,r,a=An,o=An,c,l=ss){let h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},La=class extends ci{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},qt=class i extends Ft{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],f=[],p=0,u=0;d("z","y","x",-1,-1,n,t,e,a,r,0),d("z","y","x",1,-1,n,t,-e,a,r,1),d("x","z","y",1,1,e,n,t,s,a,2),d("x","z","y",1,-1,e,n,-t,s,a,3),d("x","y","z",1,-1,e,t,n,s,r,4),d("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Nt(l,3)),this.setAttribute("normal",new Nt(h,3)),this.setAttribute("uv",new Nt(f,2));function d(_,g,m,E,T,v,y,w,A,x,b){let C=v/A,F=y/x,S=v/2,L=y/2,P=w/2,H=A+1,Y=x+1,k=0,V=0,z=new N;for(let G=0;G<Y;G++){let q=G*F-L;for(let fe=0;fe<H;fe++){let be=fe*C-S;z[_]=be*E,z[g]=q*T,z[m]=P,l.push(z.x,z.y,z.z),z[_]=0,z[g]=0,z[m]=w>0?1:-1,h.push(z.x,z.y,z.z),f.push(fe/A),f.push(1-G/x),k+=1}}for(let G=0;G<x;G++)for(let q=0;q<A;q++){let fe=p+q+H*G,be=p+q+H*(G+1),Ce=p+(q+1)+H*(G+1),ze=p+(q+1)+H*G;c.push(fe,be,ze),c.push(be,Ce,ze),V+=6}o.addGroup(u,V,b),u+=V,p+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var $t=class i extends Ft{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],p=[],u=[],d=0,_=[],g=n/2,m=0;E(),a===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new Nt(f,3)),this.setAttribute("normal",new Nt(p,3)),this.setAttribute("uv",new Nt(u,2));function E(){let v=new N,y=new N,w=0,A=(t-e)/n;for(let x=0;x<=r;x++){let b=[],C=x/r,F=C*(t-e)+e;for(let S=0;S<=s;S++){let L=S/s,P=L*c+o,H=Math.sin(P),Y=Math.cos(P);y.x=F*H,y.y=-C*n+g,y.z=F*Y,f.push(y.x,y.y,y.z),v.set(H,A,Y).normalize(),p.push(v.x,v.y,v.z),u.push(L,1-C),b.push(d++)}_.push(b)}for(let x=0;x<s;x++)for(let b=0;b<r;b++){let C=_[b][x],F=_[b+1][x],S=_[b+1][x+1],L=_[b][x+1];(e>0||b!==0)&&(h.push(C,F,L),w+=3),(t>0||b!==r-1)&&(h.push(F,S,L),w+=3)}l.addGroup(m,w,0),m+=w}function T(v){let y=d,w=new He,A=new N,x=0,b=v===!0?e:t,C=v===!0?1:-1;for(let S=1;S<=s;S++)f.push(0,g*C,0),p.push(0,C,0),u.push(.5,.5),d++;let F=d;for(let S=0;S<=s;S++){let P=S/s*c+o,H=Math.cos(P),Y=Math.sin(P);A.x=b*Y,A.y=g*C,A.z=b*H,f.push(A.x,A.y,A.z),p.push(0,C,0),w.x=H*.5+.5,w.y=Y*.5*C+.5,u.push(w.x,w.y),d++}for(let S=0;S<s;S++){let L=y+S,P=F+S;v===!0?h.push(P,P+1,L):h.push(P+1,P,L),x+=3}l.addGroup(m,x,v===!0?1:2),m+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Qs=class i extends $t{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Al=class i extends Ft{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new Nt(r,3)),this.setAttribute("normal",new Nt(r.slice(),3)),this.setAttribute("uv",new Nt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(E){let T=new N,v=new N,y=new N;for(let w=0;w<t.length;w+=3)u(t[w+0],T),u(t[w+1],v),u(t[w+2],y),c(T,v,y,E)}function c(E,T,v,y){let w=y+1,A=[];for(let x=0;x<=w;x++){A[x]=[];let b=E.clone().lerp(v,x/w),C=T.clone().lerp(v,x/w),F=w-x;for(let S=0;S<=F;S++)S===0&&x===w?A[x][S]=b:A[x][S]=b.clone().lerp(C,S/F)}for(let x=0;x<w;x++)for(let b=0;b<2*(w-x)-1;b++){let C=Math.floor(b/2);b%2===0?(p(A[x][C+1]),p(A[x+1][C]),p(A[x][C])):(p(A[x][C+1]),p(A[x+1][C+1]),p(A[x+1][C]))}}function l(E){let T=new N;for(let v=0;v<r.length;v+=3)T.x=r[v+0],T.y=r[v+1],T.z=r[v+2],T.normalize().multiplyScalar(E),r[v+0]=T.x,r[v+1]=T.y,r[v+2]=T.z}function h(){let E=new N;for(let T=0;T<r.length;T+=3){E.x=r[T+0],E.y=r[T+1],E.z=r[T+2];let v=g(E)/2/Math.PI+.5,y=m(E)/Math.PI+.5;a.push(v,1-y)}d(),f()}function f(){for(let E=0;E<a.length;E+=6){let T=a[E+0],v=a[E+2],y=a[E+4],w=Math.max(T,v,y),A=Math.min(T,v,y);w>.9&&A<.1&&(T<.2&&(a[E+0]+=1),v<.2&&(a[E+2]+=1),y<.2&&(a[E+4]+=1))}}function p(E){r.push(E.x,E.y,E.z)}function u(E,T){let v=E*3;T.x=e[v+0],T.y=e[v+1],T.z=e[v+2]}function d(){let E=new N,T=new N,v=new N,y=new N,w=new He,A=new He,x=new He;for(let b=0,C=0;b<r.length;b+=9,C+=6){E.set(r[b+0],r[b+1],r[b+2]),T.set(r[b+3],r[b+4],r[b+5]),v.set(r[b+6],r[b+7],r[b+8]),w.set(a[C+0],a[C+1]),A.set(a[C+2],a[C+3]),x.set(a[C+4],a[C+5]),y.copy(E).add(T).add(v).divideScalar(3);let F=g(y);_(w,C+0,E,F),_(A,C+2,T,F),_(x,C+4,v,F)}}function _(E,T,v,y){y<0&&E.x===1&&(a[T]=E.x-1),v.x===0&&v.z===0&&(a[T]=y/2/Math.PI+.5)}function g(E){return Math.atan2(E.z,-E.x)}function m(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var tl=new N,nl=new N,Su=new N,il=new is,zr=class extends Ft{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let s=Math.pow(10,4),r=Math.cos(ul*t),a=e.getIndex(),o=e.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],h=["a","b","c"],f=new Array(3),p={},u=[];for(let d=0;d<c;d+=3){a?(l[0]=a.getX(d),l[1]=a.getX(d+1),l[2]=a.getX(d+2)):(l[0]=d,l[1]=d+1,l[2]=d+2);let{a:_,b:g,c:m}=il;if(_.fromBufferAttribute(o,l[0]),g.fromBufferAttribute(o,l[1]),m.fromBufferAttribute(o,l[2]),il.getNormal(Su),f[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,f[1]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,f[2]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let E=0;E<3;E++){let T=(E+1)%3,v=f[E],y=f[T],w=il[h[E]],A=il[h[T]],x=`${v}_${y}`,b=`${y}_${v}`;b in p&&p[b]?(Su.dot(p[b].normal)<=r&&(u.push(w.x,w.y,w.z),u.push(A.x,A.y,A.z)),p[b]=null):x in p||(p[x]={index0:l[E],index1:l[T],normal:Su.clone()})}}for(let d in p)if(p[d]){let{index0:_,index1:g}=p[d];tl.fromBufferAttribute(o,_),nl.fromBufferAttribute(o,g),u.push(tl.x,tl.y,tl.z),u.push(nl.x,nl.y,nl.z)}this.setAttribute("position",new Nt(u,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Ei=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){yt("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let h=n[s],p=n[s+1]-h,u=(a-h)/p;return(s+u)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new He:new N);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new N,s=[],r=[],a=[],o=new N,c=new gt;for(let u=0;u<=e;u++){let d=u/e;s[u]=this.getTangentAt(d,new N)}r[0]=new N,a[0]=new N;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),p=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),f<=l&&(l=f,n.set(0,1,0)),p<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let u=1;u<=e;u++){if(r[u]=r[u-1].clone(),a[u]=a[u-1].clone(),o.crossVectors(s[u-1],s[u]),o.length()>Number.EPSILON){o.normalize();let d=Math.acos(Xt(s[u-1].dot(s[u]),-1,1));r[u].applyMatrix4(c.makeRotationAxis(o,d))}a[u].crossVectors(s[u],r[u])}if(t===!0){let u=Math.acos(Xt(r[0].dot(r[e]),-1,1));u/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(u=-u);for(let d=1;d<=e;d++)r[d].applyMatrix4(c.makeRotationAxis(s[d],u*d)),a[d].crossVectors(s[d],r[d])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Gr=class extends Ei{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new He){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),p=c-this.aX,u=l-this.aY;c=p*h-u*f+this.aX,l=p*f+u*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Rl=class extends Gr{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function sh(){let i=0,e=0,t=0,n=0;function s(r,a,o,c){i=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,f){let p=(a-r)/l-(o-r)/(l+h)+(o-a)/h,u=(o-a)/h-(c-a)/(h+f)+(c-o)/f;p*=h,u*=h,s(a,o,p,u)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var Sd=new N,Ed=new N,Eu=new sh,bu=new sh,Tu=new sh,di=class extends Ei{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new N){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(Ed.subVectors(s[0],s[1]).add(s[0]),l=Ed);let f=s[o%r],p=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Sd.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Sd),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,d=Math.pow(l.distanceToSquared(f),u),_=Math.pow(f.distanceToSquared(p),u),g=Math.pow(p.distanceToSquared(h),u);_<1e-4&&(_=1),d<1e-4&&(d=_),g<1e-4&&(g=_),Eu.initNonuniformCatmullRom(l.x,f.x,p.x,h.x,d,_,g),bu.initNonuniformCatmullRom(l.y,f.y,p.y,h.y,d,_,g),Tu.initNonuniformCatmullRom(l.z,f.z,p.z,h.z,d,_,g)}else this.curveType==="catmullrom"&&(Eu.initCatmullRom(l.x,f.x,p.x,h.x,this.tension),bu.initCatmullRom(l.y,f.y,p.y,h.y,this.tension),Tu.initCatmullRom(l.z,f.z,p.z,h.z,this.tension));return n.set(Eu.calc(c),bu.calc(c),Tu.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new N().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function bd(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,c=i*o;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*o+r*i+t}function op(i,e){let t=1-i;return t*t*e}function lp(i,e){return 2*(1-i)*i*e}function cp(i,e){return i*i*e}function _a(i,e,t,n){return op(i,e)+lp(i,t)+cp(i,n)}function up(i,e){let t=1-i;return t*t*t*e}function hp(i,e){let t=1-i;return 3*t*t*i*e}function dp(i,e){return 3*(1-i)*i*i*e}function fp(i,e){return i*i*i*e}function ya(i,e,t,n,s){return up(i,e)+hp(i,t)+dp(i,n)+fp(i,s)}var Ua=class extends Ei{constructor(e=new He,t=new He,n=new He,s=new He){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new He){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ya(e,s.x,r.x,a.x,o.x),ya(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Cl=class extends Ei{constructor(e=new N,t=new N,n=new N,s=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new N){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ya(e,s.x,r.x,a.x,o.x),ya(e,s.y,r.y,a.y,o.y),ya(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Na=class extends Ei{constructor(e=new He,t=new He){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new He){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new He){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Is=class extends Ei{constructor(e=new N,t=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new N){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new N){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Fa=class extends Ei{constructor(e=new He,t=new He,n=new He){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new He){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(_a(e,s.x,r.x,a.x),_a(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Oa=class extends Ei{constructor(e=new N,t=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new N){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(_a(e,s.x,r.x,a.x),_a(e,s.y,r.y,a.y),_a(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ba=class extends Ei{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new He){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(bd(o,c.x,l.x,h.x,f.x),bd(o,c.y,l.y,h.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new He().fromArray(s))}return this}},Pl=Object.freeze({__proto__:null,ArcCurve:Rl,CatmullRomCurve3:di,CubicBezierCurve:Ua,CubicBezierCurve3:Cl,EllipseCurve:Gr,LineCurve:Na,LineCurve3:Is,QuadraticBezierCurve:Fa,QuadraticBezierCurve3:Oa,SplineCurve:Ba}),kr=class extends Ei{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Pl[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Pl[s.type]().fromJSON(s))}return this}},js=class extends kr{constructor(e){super(),this.type="Path",this.currentPoint=new He,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Na(this.currentPoint.clone(),new He(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Fa(this.currentPoint.clone(),new He(e,t),new He(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new Ua(this.currentPoint.clone(),new He(e,t),new He(n,s),new He(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Ba(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,a,o,c),this}absellipse(e,t,n,s,r,a,o,c){let l=new Gr(e,t,n,s,r,a,o,c);if(this.curves.length>0){let f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ui=class extends js{constructor(e){super(e),this.uuid=ys(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new js().fromJSON(s))}return this}};function pp(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=vf(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l;if(n&&(r=_p(i,e,r,t)),i.length>80*t){o=i[0],c=i[1];let h=o,f=c;for(let p=t;p<s;p+=t){let u=i[p],d=i[p+1];u<o&&(o=u),d<c&&(c=d),u>h&&(h=u),d>f&&(f=d)}l=Math.max(h-o,f-c),l=l!==0?32767/l:0}return Ha(r,a,t,o,c,l,0),a}function vf(i,e,t,n,s){let r;if(s===Pp(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=Td(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=Td(a/n|0,i[a],i[a+1],r);return r&&Vr(r,r.next)&&(Ga(r),r=r.next),r}function er(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Vr(t,t.next)||vn(t.prev,t,t.next)===0)){if(Ga(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ha(i,e,t,n,s,r,a){if(!i)return;!a&&r&&bp(i,n,s,r);let o=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?gp(i,n,s,r):mp(i)){e.push(c.i,i.i,l.i),Ga(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=xp(er(i),e),Ha(i,e,t,n,s,r,2)):a===2&&vp(i,e,t,n,s,r):Ha(er(i),e,t,n,s,r,1);break}}}function mp(i){let e=i.prev,t=i,n=i.next;if(vn(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,c=t.y,l=n.y,h=Math.min(s,r,a),f=Math.min(o,c,l),p=Math.max(s,r,a),u=Math.max(o,c,l),d=n.next;for(;d!==e;){if(d.x>=h&&d.x<=p&&d.y>=f&&d.y<=u&&va(s,o,r,c,a,l,d.x,d.y)&&vn(d.prev,d,d.next)>=0)return!1;d=d.next}return!0}function gp(i,e,t,n){let s=i.prev,r=i,a=i.next;if(vn(s,r,a)>=0)return!1;let o=s.x,c=r.x,l=a.x,h=s.y,f=r.y,p=a.y,u=Math.min(o,c,l),d=Math.min(h,f,p),_=Math.max(o,c,l),g=Math.max(h,f,p),m=Lu(u,d,e,t,n),E=Lu(_,g,e,t,n),T=i.prevZ,v=i.nextZ;for(;T&&T.z>=m&&v&&v.z<=E;){if(T.x>=u&&T.x<=_&&T.y>=d&&T.y<=g&&T!==s&&T!==a&&va(o,h,c,f,l,p,T.x,T.y)&&vn(T.prev,T,T.next)>=0||(T=T.prevZ,v.x>=u&&v.x<=_&&v.y>=d&&v.y<=g&&v!==s&&v!==a&&va(o,h,c,f,l,p,v.x,v.y)&&vn(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;T&&T.z>=m;){if(T.x>=u&&T.x<=_&&T.y>=d&&T.y<=g&&T!==s&&T!==a&&va(o,h,c,f,l,p,T.x,T.y)&&vn(T.prev,T,T.next)>=0)return!1;T=T.prevZ}for(;v&&v.z<=E;){if(v.x>=u&&v.x<=_&&v.y>=d&&v.y<=g&&v!==s&&v!==a&&va(o,h,c,f,l,p,v.x,v.y)&&vn(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function xp(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Vr(n,s)&&yf(n,t,t.next,s)&&za(n,s)&&za(s,n)&&(e.push(n.i,t.i,s.i),Ga(t),Ga(t.next),t=i=s),t=t.next}while(t!==i);return er(t)}function vp(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Ap(a,o)){let c=Mf(a,o);a=er(a,a.next),c=er(c,c.next),Ha(a,e,t,n,s,r,0),Ha(c,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function _p(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,c=r<a-1?e[r+1]*n:i.length,l=vf(i,o,c,n,!1);l===l.next&&(l.steiner=!0),s.push(wp(l))}s.sort(yp);for(let r=0;r<s.length;r++)t=Mp(s[r],t);return t}function yp(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Mp(i,e){let t=Sp(i,e);if(!t)return e;let n=Mf(t,i);return er(n,n.next),er(t,t.next)}function Sp(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(Vr(i,t))return t;do{if(Vr(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let f=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=n&&f>r&&(r=f,a=t.x<t.next.x?t:t.next,f===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,c=a.x,l=a.y,h=1/0;t=a;do{if(n>=t.x&&t.x>=c&&n!==t.x&&_f(s<l?n:r,s,c,l,s<l?r:n,s,t.x,t.y)){let f=Math.abs(s-t.y)/(n-t.x);za(t,i)&&(f<h||f===h&&(t.x>a.x||t.x===a.x&&Ep(a,t)))&&(a=t,h=f)}t=t.next}while(t!==o);return a}function Ep(i,e){return vn(i.prev,i,e.prev)<0&&vn(e.next,i,i.next)<0}function bp(i,e,t,n){let s=i;do s.z===0&&(s.z=Lu(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Tp(s)}function Tp(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let l=0;l<t&&(o++,a=a.nextZ,!!a);l++);let c=t;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function Lu(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function wp(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function _f(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function va(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&_f(i,e,t,n,s,r,a,o)}function Ap(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Rp(i,e)&&(za(i,e)&&za(e,i)&&Cp(i,e)&&(vn(i.prev,i,e.prev)||vn(i,e.prev,e))||Vr(i,e)&&vn(i.prev,i,i.next)>0&&vn(e.prev,e,e.next)>0)}function vn(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Vr(i,e){return i.x===e.x&&i.y===e.y}function yf(i,e,t,n){let s=rl(vn(i,e,t)),r=rl(vn(i,e,n)),a=rl(vn(t,n,i)),o=rl(vn(t,n,e));return!!(s!==r&&a!==o||s===0&&sl(i,t,e)||r===0&&sl(i,n,e)||a===0&&sl(t,i,n)||o===0&&sl(t,e,n))}function sl(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function rl(i){return i>0?1:i<0?-1:0}function Rp(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&yf(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function za(i,e){return vn(i.prev,i,i.next)<0?vn(i,e,i.next)>=0&&vn(i,i.prev,e)>=0:vn(i,e,i.prev)<0||vn(i,i.next,e)<0}function Cp(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Mf(i,e){let t=Uu(i.i,i.x,i.y),n=Uu(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Td(i,e,t,n){let s=Uu(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ga(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Uu(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Pp(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Nu=class{static triangulate(e,t,n=2){return pp(e,t,n)}},Zs=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];wd(e),Ad(n,e);let a=e.length;t.forEach(wd);for(let c=0;c<t.length;c++)s.push(a),a+=t[c].length,Ad(n,t[c]);let o=Nu.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function wd(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Ad(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Oi=class i extends Ft{constructor(e=new ui([new He(.5,.5),new He(-.5,.5),new He(-.5,-.5),new He(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,c=e.length;o<c;o++){let l=e[o];a(l)}this.setAttribute("position",new Nt(s,3)),this.setAttribute("uv",new Nt(r,2)),this.computeVertexNormals();function a(o){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1,p=t.bevelEnabled!==void 0?t.bevelEnabled:!0,u=t.bevelThickness!==void 0?t.bevelThickness:.2,d=t.bevelSize!==void 0?t.bevelSize:u-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,E=t.UVGenerator!==void 0?t.UVGenerator:Ip,T,v=!1,y,w,A,x;if(m){T=m.getSpacedPoints(h),v=!0,p=!1;let ne=m.isCatmullRomCurve3?m.closed:!1;y=m.computeFrenetFrames(h,ne),w=new N,A=new N,x=new N}p||(g=0,u=0,d=0,_=0);let b=o.extractPoints(l),C=b.shape,F=b.holes;if(!Zs.isClockWise(C)){C=C.reverse();for(let ne=0,re=F.length;ne<re;ne++){let J=F[ne];Zs.isClockWise(J)&&(F[ne]=J.reverse())}}function L(ne){let J=10000000000000001e-36,ie=ne[0];for(let le=1;le<=ne.length;le++){let Oe=le%ne.length,Ne=ne[Oe],qe=Ne.x-ie.x,Je=Ne.y-ie.y,X=qe*qe+Je*Je,at=Math.max(Math.abs(Ne.x),Math.abs(Ne.y),Math.abs(ie.x),Math.abs(ie.y)),lt=J*at*at;if(X<=lt){ne.splice(Oe,1),le--;continue}ie=Ne}}L(C),F.forEach(L);let P=F.length,H=C;for(let ne=0;ne<P;ne++){let re=F[ne];C=C.concat(re)}function Y(ne,re,J){return re||St("ExtrudeGeometry: vec does not exist"),ne.clone().addScaledVector(re,J)}let k=C.length;function V(ne,re,J){let ie,le,Oe,Ne=ne.x-re.x,qe=ne.y-re.y,Je=J.x-ne.x,X=J.y-ne.y,at=Ne*Ne+qe*qe,lt=Ne*X-qe*Je;if(Math.abs(lt)>Number.EPSILON){let O=Math.sqrt(at),M=Math.sqrt(Je*Je+X*X),K=re.x-qe/O,te=re.y+Ne/O,he=J.x-X/M,Ve=J.y+Je/M,Ge=((he-K)*X-(Ve-te)*Je)/(Ne*X-qe*Je);ie=K+Ne*Ge-ne.x,le=te+qe*Ge-ne.y;let Se=ie*ie+le*le;if(Se<=2)return new He(ie,le);Oe=Math.sqrt(Se/2)}else{let O=!1;Ne>Number.EPSILON?Je>Number.EPSILON&&(O=!0):Ne<-Number.EPSILON?Je<-Number.EPSILON&&(O=!0):Math.sign(qe)===Math.sign(X)&&(O=!0),O?(ie=-qe,le=Ne,Oe=Math.sqrt(at)):(ie=Ne,le=qe,Oe=Math.sqrt(at/2))}return new He(ie/Oe,le/Oe)}let z=[];for(let ne=0,re=H.length,J=re-1,ie=ne+1;ne<re;ne++,J++,ie++)J===re&&(J=0),ie===re&&(ie=0),z[ne]=V(H[ne],H[J],H[ie]);let G=[],q,fe=z.concat();for(let ne=0,re=P;ne<re;ne++){let J=F[ne];q=[];for(let ie=0,le=J.length,Oe=le-1,Ne=ie+1;ie<le;ie++,Oe++,Ne++)Oe===le&&(Oe=0),Ne===le&&(Ne=0),q[ie]=V(J[ie],J[Oe],J[Ne]);G.push(q),fe=fe.concat(q)}let be;if(g===0)be=Zs.triangulateShape(H,F);else{let ne=[],re=[];for(let J=0;J<g;J++){let ie=J/g,le=u*Math.cos(ie*Math.PI/2),Oe=d*Math.sin(ie*Math.PI/2)+_;for(let Ne=0,qe=H.length;Ne<qe;Ne++){let Je=Y(H[Ne],z[Ne],Oe);we(Je.x,Je.y,-le),ie===0&&ne.push(Je)}for(let Ne=0,qe=P;Ne<qe;Ne++){let Je=F[Ne];q=G[Ne];let X=[];for(let at=0,lt=Je.length;at<lt;at++){let O=Y(Je[at],q[at],Oe);we(O.x,O.y,-le),ie===0&&X.push(O)}ie===0&&re.push(X)}}be=Zs.triangulateShape(ne,re)}let Ce=be.length,ze=d+_;for(let ne=0;ne<k;ne++){let re=p?Y(C[ne],fe[ne],ze):C[ne];v?(A.copy(y.normals[0]).multiplyScalar(re.x),w.copy(y.binormals[0]).multiplyScalar(re.y),x.copy(T[0]).add(A).add(w),we(x.x,x.y,x.z)):we(re.x,re.y,0)}for(let ne=1;ne<=h;ne++)for(let re=0;re<k;re++){let J=p?Y(C[re],fe[re],ze):C[re];v?(A.copy(y.normals[ne]).multiplyScalar(J.x),w.copy(y.binormals[ne]).multiplyScalar(J.y),x.copy(T[ne]).add(A).add(w),we(x.x,x.y,x.z)):we(J.x,J.y,f/h*ne)}for(let ne=g-1;ne>=0;ne--){let re=ne/g,J=u*Math.cos(re*Math.PI/2),ie=d*Math.sin(re*Math.PI/2)+_;for(let le=0,Oe=H.length;le<Oe;le++){let Ne=Y(H[le],z[le],ie);we(Ne.x,Ne.y,f+J)}for(let le=0,Oe=F.length;le<Oe;le++){let Ne=F[le];q=G[le];for(let qe=0,Je=Ne.length;qe<Je;qe++){let X=Y(Ne[qe],q[qe],ie);v?we(X.x,X.y+T[h-1].y,T[h-1].x+J):we(X.x,X.y,f+J)}}}et(),Q();function et(){let ne=s.length/3;if(p){let re=0,J=k*re;for(let ie=0;ie<Ce;ie++){let le=be[ie];me(le[2]+J,le[1]+J,le[0]+J)}re=h+g*2,J=k*re;for(let ie=0;ie<Ce;ie++){let le=be[ie];me(le[0]+J,le[1]+J,le[2]+J)}}else{for(let re=0;re<Ce;re++){let J=be[re];me(J[2],J[1],J[0])}for(let re=0;re<Ce;re++){let J=be[re];me(J[0]+k*h,J[1]+k*h,J[2]+k*h)}}n.addGroup(ne,s.length/3-ne,0)}function Q(){let ne=s.length/3,re=0;ue(H,re),re+=H.length;for(let J=0,ie=F.length;J<ie;J++){let le=F[J];ue(le,re),re+=le.length}n.addGroup(ne,s.length/3-ne,1)}function ue(ne,re){let J=ne.length;for(;--J>=0;){let ie=J,le=J-1;le<0&&(le=ne.length-1);for(let Oe=0,Ne=h+g*2;Oe<Ne;Oe++){let qe=k*Oe,Je=k*(Oe+1),X=re+ie+qe,at=re+le+qe,lt=re+le+Je,O=re+ie+Je;Pe(X,at,lt,O)}}}function we(ne,re,J){c.push(ne),c.push(re),c.push(J)}function me(ne,re,J){Z(ne),Z(re),Z(J);let ie=s.length/3,le=E.generateTopUV(n,s,ie-3,ie-2,ie-1);Be(le[0]),Be(le[1]),Be(le[2])}function Pe(ne,re,J,ie){Z(ne),Z(re),Z(ie),Z(re),Z(J),Z(ie);let le=s.length/3,Oe=E.generateSideWallUV(n,s,le-6,le-3,le-2,le-1);Be(Oe[0]),Be(Oe[1]),Be(Oe[3]),Be(Oe[1]),Be(Oe[2]),Be(Oe[3])}function Z(ne){s.push(c[ne*3+0]),s.push(c[ne*3+1]),s.push(c[ne*3+2])}function Be(ne){r.push(ne.x),r.push(ne.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Dp(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Pl[s.type]().fromJSON(s)),new i(n,e.options)}},Ip={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],c=e[n*3+1],l=e[s*3],h=e[s*3+1];return[new He(r,a),new He(o,c),new He(l,h)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],f=e[n*3+2],p=e[s*3],u=e[s*3+1],d=e[s*3+2],_=e[r*3],g=e[r*3+1],m=e[r*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new He(a,1-c),new He(l,1-f),new He(p,1-d),new He(_,1-m)]:[new He(o,1-c),new He(h,1-f),new He(u,1-d),new He(g,1-m)]}};function Dp(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var tr=class i extends Al{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var tn=class i extends Ft{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,f=e/o,p=t/c,u=[],d=[],_=[],g=[];for(let m=0;m<h;m++){let E=m*p-a;for(let T=0;T<l;T++){let v=T*f-r;d.push(v,-E,0),_.push(0,0,1),g.push(T/o),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let E=0;E<o;E++){let T=E+l*m,v=E+l*(m+1),y=E+1+l*(m+1),w=E+1+l*m;u.push(T,v,w),u.push(v,y,w)}this.setIndex(u),this.setAttribute("position",new Nt(d,3)),this.setAttribute("normal",new Nt(_,3)),this.setAttribute("uv",new Nt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Zn=class i extends Ft{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],f=new N,p=new N,u=[],d=[],_=[],g=[];for(let m=0;m<=n;m++){let E=[],T=m/n,v=a+T*o,y=e*Math.cos(v),w=Math.sqrt(e*e-y*y),A=0;m===0&&a===0?A=.5/t:m===n&&c===Math.PI&&(A=-.5/t);for(let x=0;x<=t;x++){let b=x/t,C=s+b*r;f.x=-w*Math.cos(C),f.y=y,f.z=w*Math.sin(C),d.push(f.x,f.y,f.z),p.copy(f).normalize(),_.push(p.x,p.y,p.z),g.push(b+A,1-T),E.push(l++)}h.push(E)}for(let m=0;m<n;m++)for(let E=0;E<t;E++){let T=h[m][E+1],v=h[m][E],y=h[m+1][E],w=h[m+1][E+1];(m!==0||a>0)&&u.push(T,v,w),(m!==n-1||c<Math.PI)&&u.push(v,y,w)}this.setIndex(u),this.setAttribute("position",new Nt(d,3)),this.setAttribute("normal",new Nt(_,3)),this.setAttribute("uv",new Nt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var bi=class i extends Ft{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let c=[],l=[],h=[],f=[],p=new N,u=new N,d=new N;for(let _=0;_<=n;_++){let g=a+_/n*o;for(let m=0;m<=s;m++){let E=m/s*r;u.x=(e+t*Math.cos(g))*Math.cos(E),u.y=(e+t*Math.cos(g))*Math.sin(E),u.z=t*Math.sin(g),l.push(u.x,u.y,u.z),p.x=e*Math.cos(E),p.y=e*Math.sin(E),d.subVectors(u,p).normalize(),h.push(d.x,d.y,d.z),f.push(m/s),f.push(_/n)}}for(let _=1;_<=n;_++)for(let g=1;g<=s;g++){let m=(s+1)*_+g-1,E=(s+1)*(_-1)+g-1,T=(s+1)*(_-1)+g,v=(s+1)*_+g;c.push(m,E,v),c.push(E,T,v)}this.setIndex(c),this.setAttribute("position",new Nt(l,3)),this.setAttribute("normal",new Nt(h,3)),this.setAttribute("uv",new Nt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var ii=class i extends Ft{constructor(e=new Oa(new N(-1,-1,0),new N(-1,1,0),new N(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new N,c=new N,l=new He,h=new N,f=[],p=[],u=[],d=[];_(),this.setIndex(d),this.setAttribute("position",new Nt(f,3)),this.setAttribute("normal",new Nt(p,3)),this.setAttribute("uv",new Nt(u,2));function _(){for(let T=0;T<t;T++)g(T);g(r===!1?t:0),E(),m()}function g(T){h=e.getPointAt(T/t,h);let v=a.normals[T],y=a.binormals[T];for(let w=0;w<=s;w++){let A=w/s*Math.PI*2,x=Math.sin(A),b=-Math.cos(A);c.x=b*v.x+x*y.x,c.y=b*v.y+x*y.y,c.z=b*v.z+x*y.z,c.normalize(),p.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,f.push(o.x,o.y,o.z)}}function m(){for(let T=1;T<=t;T++)for(let v=1;v<=s;v++){let y=(s+1)*(T-1)+(v-1),w=(s+1)*T+(v-1),A=(s+1)*T+v,x=(s+1)*(T-1)+v;d.push(y,w,x),d.push(w,A,x)}}function E(){for(let T=0;T<=t;T++)for(let v=0;v<=s;v++)l.x=T/t,l.y=v/s,u.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Pl[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function ar(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Rd(s))s.isRenderTargetTexture?(yt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Rd(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function si(i){let e={};for(let t=0;t<i.length;t++){let n=ar(i[t]);for(let s in n)e[s]=n[s]}return e}function Rd(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Lp(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function rh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Wt.workingColorSpace}var hi={clone:ar,merge:si},Up=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Np=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Jt=class extends Ui{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Up,this.fragmentShader=Np,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ar(e.uniforms),this.uniformsGroups=Lp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Qe().setHex(s.value);break;case"v2":this.uniforms[n].value=new He().fromArray(s.value);break;case"v3":this.uniforms[n].value=new N().fromArray(s.value);break;case"v4":this.uniforms[n].value=new hn().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Pt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new gt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Wr=class extends Jt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Yt=class extends Ui{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ho,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},fi=class extends Yt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new He(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Xt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Qe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Qe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Qe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var ka=class extends Ui{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ho,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};var Xr=class extends Ui{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Il=class extends Ui{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ar(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function wu(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Ds=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Dl=class extends Ds{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Cu,endingEnd:Cu}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Pu:r=e,o=2*t-n;break;case Iu:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Pu:a=e,c=2*n-t;break;case Iu:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,f=this._offsetNext,p=this._weightPrev,u=this._weightNext,d=(n-t)/(s-t),_=d*d,g=_*d,m=-p*g+2*p*_-p*d,E=(1+p)*g+(-1.5-2*p)*_+(-.5+p)*d+1,T=(-1-u)*g+(1.5+u)*_+.5*d,v=u*g-u*_;for(let y=0;y!==o;++y)r[y]=m*a[h+y]+E*a[l+y]+T*a[c+y]+v*a[f+y];return r}},Ll=class extends Ds{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(s-t),f=1-h;for(let p=0;p!==o;++p)r[p]=a[l+p]*f+a[c+p]*h;return r}},Ul=class extends Ds{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Nl=class extends Ds{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this.inTangents,f=this.outTangents;if(!h||!f){let d=(n-t)/(s-t),_=1-d;for(let g=0;g!==o;++g)r[g]=a[l+g]*_+a[c+g]*d;return r}let p=o*2,u=e-1;for(let d=0;d!==o;++d){let _=a[l+d],g=a[c+d],m=u*p+d*2,E=f[m],T=f[m+1],v=e*p+d*2,y=h[v],w=h[v+1],A=Op(n,t,E,y,s);r[d]=Sf(A,_,T,w,g)}return r}};function Sf(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Fp(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Op(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=Sf(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let c=Fp(r,e,t,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var Ti=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ar(t,this.TimeBufferType),this.values=Ar(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ar(e.times,Array),values:Ar(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),wu(e.settings)&&(n.settings={inTangents:Ar(e.settings.inTangents,Array),outTangents:Ar(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ul(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ll(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Dl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Nl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ma:t=this.InterpolantFactoryMethodDiscrete;break;case _l:t=this.InterpolantFactoryMethodLinear;break;case ll:t=this.InterpolantFactoryMethodSmooth;break;case Ru:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return yt("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ma;case this.InterpolantFactoryMethodLinear:return _l;case this.InterpolantFactoryMethodSmooth:return ll;case this.InterpolantFactoryMethodBezier:return Ru}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;wu(this.settings)&&(Cd(this.settings.inTangents,e),Cd(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(St("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(St("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){St("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){St("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&z0(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){St("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ll,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(s)c=!0;else{let f=o*n,p=f-n,u=f+n;for(let d=0;d!==n;++d){let _=t[f+d];if(_!==t[p+d]||_!==t[u+d]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let f=o*n,p=a*n;for(let u=0;u!==n;++u)t[p+u]=t[f+u]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,wu(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Cd(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Ti.prototype.ValueTypeName="";Ti.prototype.TimeBufferType=Float32Array;Ti.prototype.ValueBufferType=Float32Array;Ti.prototype.DefaultInterpolation=_l;var Ls=class extends Ti{constructor(e,t,n){super(e,t,n)}};Ls.prototype.ValueTypeName="bool";Ls.prototype.ValueBufferType=Array;Ls.prototype.DefaultInterpolation=Ma;Ls.prototype.InterpolantFactoryMethodLinear=void 0;Ls.prototype.InterpolantFactoryMethodSmooth=void 0;var Fl=class extends Ti{constructor(e,t,n,s){super(e,t,n,s)}};Fl.prototype.ValueTypeName="color";var Ol=class extends Ti{constructor(e,t,n,s){super(e,t,n,s)}};Ol.prototype.ValueTypeName="number";var Bl=class extends Ds{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),l=e*o;for(let h=l+o;l!==h;l+=4)mn.slerpFlat(r,0,a,l-o,a,l,c);return r}},Va=class extends Ti{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Bl(this.times,this.values,this.getValueSize(),e)}};Va.prototype.ValueTypeName="quaternion";Va.prototype.InterpolantFactoryMethodSmooth=void 0;var Us=class extends Ti{constructor(e,t,n){super(e,t,n)}};Us.prototype.ValueTypeName="string";Us.prototype.ValueBufferType=Array;Us.prototype.DefaultInterpolation=Ma;Us.prototype.InterpolantFactoryMethodLinear=void 0;Us.prototype.InterpolantFactoryMethodSmooth=void 0;var Hl=class extends Ti{constructor(e,t,n,s){super(e,t,n,s)}};Hl.prototype.ValueTypeName="vector";var zl=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,f){return l.push(h,f),this},this.removeHandler=function(h){let f=l.indexOf(h);return f!==-1&&l.splice(f,2),this},this.getHandler=function(h){for(let f=0,p=l.length;f<p;f+=2){let u=l[f],d=l[f+1];if(u.global&&(u.lastIndex=0),u.test(h))return d}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Ef=new zl,Gl=class{constructor(e){this.manager=e!==void 0?e:Ef,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Gl.DEFAULT_MATERIAL_NAME="__DEFAULT";var nr=class extends _n{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Qe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Wa=class extends nr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_n.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Qe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Au=new gt,Pd=new N,Id=new N,Yr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new He(512,512),this.mapType=Hn,this.map=null,this.mapPass=null,this.matrix=new gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hr,this._frameExtents=new He(1,1),this._viewportCount=1,this._viewports=[new hn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Pd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Pd),Id.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Id),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Au.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Au,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===Dr||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(Au)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},al=new N,ol=new mn,ts=new N,Xa=class extends _n{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt,this.coordinateSystem=Ji,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(al,ol,ts),ts.x===1&&ts.y===1&&ts.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(al,ol,ts.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(al,ol,ts),ts.x===1&&ts.y===1&&ts.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(al,ol,ts.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Cs=new N,Dd=new He,Ld=new He,Xn=class extends Xa{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=wa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ul*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return wa*2*Math.atan(Math.tan(ul*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Cs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Cs.x,Cs.y).multiplyScalar(-e/Cs.z),Cs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Cs.x,Cs.y).multiplyScalar(-e/Cs.z)}getViewSize(e,t){return this.getViewBounds(e,Dd,Ld),t.subVectors(Ld,Dd)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ul*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Fu=class extends Yr{constructor(){super(new Xn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=wa*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Ya=class extends nr{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(_n.DEFAULT_UP),this.updateMatrix(),this.target=new _n,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Fu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Ou=class extends Yr{constructor(){super(new Xn(90,1,.5,500)),this.isPointLightShadow=!0}},pi=class extends nr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ou}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Ns=class extends Xa{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Bu=class extends Yr{constructor(){super(new Ns(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},qr=class extends nr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_n.DEFAULT_UP),this.updateMatrix(),this.target=new _n,this.shadow=new Bu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Rr=-90,Cr=1,kl=class extends _n{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Xn(Rr,Cr,e,t);s.layers=this.layers,this.add(s);let r=new Xn(Rr,Cr,e,t);r.layers=this.layers,this.add(r);let a=new Xn(Rr,Cr,e,t);a.layers=this.layers,this.add(a);let o=new Xn(Rr,Cr,e,t);o.layers=this.layers,this.add(o);let c=new Xn(Rr,Cr,e,t);c.layers=this.layers,this.add(c);let l=new Xn(Rr,Cr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===Ji)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Dr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,f=e.getRenderTarget(),p=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),d=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,p,u),e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}},Vl=class extends Xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},qa=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Bp.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Bp(){this._document.hidden===!1&&this.reset()}var ah="\\[\\]\\.:\\/",Hp=new RegExp("["+ah+"]","g"),oh="[^"+ah+"]",zp="[^"+ah.replace("\\.","")+"]",Gp=/((?:WC+[\/:])*)/.source.replace("WC",oh),kp=/(WCOD+)?/.source.replace("WCOD",zp),Vp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",oh),Wp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",oh),Xp=new RegExp("^"+Gp+kp+Vp+Wp+"$"),Yp=["material","materials","bones","map"],Hu=class{constructor(e,t,n){let s=n||pn.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},pn=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Hp,"")}static parseTrackName(e){let t=Xp.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Yp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){yt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){St("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){St("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){St("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){St("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){St("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){St("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){St("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;St("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){St("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){St("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};pn.Composite=Hu;pn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};pn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};pn.prototype.GetterByBindingType=[pn.prototype._getValue_direct,pn.prototype._getValue_array,pn.prototype._getValue_arrayElement,pn.prototype._getValue_toArray];pn.prototype.SetterByBindingTypeAndVersioning=[[pn.prototype._setValue_direct,pn.prototype._setValue_direct_setNeedsUpdate,pn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pn.prototype._setValue_array,pn.prototype._setValue_array_setNeedsUpdate,pn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pn.prototype._setValue_arrayElement,pn.prototype._setValue_arrayElement_setNeedsUpdate,pn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pn.prototype._setValue_fromArray,pn.prototype._setValue_fromArray_setNeedsUpdate,pn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var a_=new Float32Array(1);var Ud=new gt,Za=class{constructor(e,t,n=0,s=1/0){this.ray=new Ks(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Nr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):St("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ud.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ud),this}intersectObject(e,t=!0,n=[]){return zu(e,this,n,t),n.sort(Nd),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)zu(e[s],this,n,t);return n.sort(Nd),n}};function Nd(i,e){return i.distance-e.distance}function zu(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)zu(r[a],e,t,!0)}}var fh=class fh{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};fh.prototype.isMatrix2=!0;var Gu=fh;function lh(i,e,t,n){let s=qp(n);switch(t){case ju:return i*e;case Ql:return i*e/s.components*s.byteLength;case jl:return i*e/s.components*s.byteLength;case Gs:return i*e*2/s.components*s.byteLength;case ec:return i*e*2/s.components*s.byteLength;case eh:return i*e*3/s.components*s.byteLength;case Qn:return i*e*4/s.components*s.byteLength;case tc:return i*e*4/s.components*s.byteLength;case ro:case ao:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case oo:case lo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ic:case rc:return Math.max(i,16)*Math.max(e,8)/4;case nc:case sc:return Math.max(i,8)*Math.max(e,8)/2;case ac:case oc:case cc:case uc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case lc:case co:case hc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case dc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case fc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case pc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case mc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case gc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case xc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case vc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case _c:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case yc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Mc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Sc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ec:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case bc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Tc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case wc:case Ac:case Rc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Cc:case Pc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case uo:case Ic:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function qp(i){switch(i){case Hn:case $u:return{byteLength:1,components:1};case $r:case Ju:case yn:return{byteLength:2,components:1};case Jl:case Kl:return{byteLength:2,components:4};case Ki:case $l:case Hi:return{byteLength:4,components:1};case Ku:case Qu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?yt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Xf(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Qp(i){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,f=l.byteLength,p=i.createBuffer();i.bindBuffer(c,p),i.bufferData(c,l,h),o.onUploadCallback();let u;if(l instanceof Float32Array)u=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)u=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)u=i.SHORT;else if(l instanceof Uint32Array)u=i.UNSIGNED_INT;else if(l instanceof Int32Array)u=i.INT;else if(l instanceof Int8Array)u=i.BYTE;else if(l instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:p,type:u,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,c,l){let h=c.array,f=c.updateRanges;if(i.bindBuffer(l,o),f.length===0)i.bufferSubData(l,0,h);else{f.sort((u,d)=>u.start-d.start);let p=0;for(let u=1;u<f.length;u++){let d=f[p],_=f[u];_.start<=d.start+d.count+1?d.count=Math.max(d.count,_.start+_.count-d.start):(++p,f[p]=_)}f.length=p+1;for(let u=0,d=f.length;u<d;u++){let _=f[u];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var jp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,em=`#ifdef USE_ALPHAHASH
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
#endif`,tm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,im=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rm=`#ifdef USE_AOMAP
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
#endif`,am=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,om=`#ifdef USE_BATCHING
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
#endif`,lm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,um=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,dm=`#ifdef USE_IRIDESCENCE
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
#endif`,fm=`#ifdef USE_BUMPMAP
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
#endif`,pm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,mm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,_m=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ym=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Mm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Sm=`#define PI 3.141592653589793
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
} // validated`,Em=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,bm=`vec3 transformedNormal = objectNormal;
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
#endif`,Tm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Am=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Pm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Im=`#ifdef USE_ENVMAP
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
#endif`,Dm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Lm=`#ifdef USE_ENVMAP
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
#endif`,Um=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Nm=`#ifdef USE_ENVMAP
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
#endif`,Fm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Om=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zm=`#ifdef USE_GRADIENTMAP
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
}`,Gm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,km=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Xm=`#ifdef USE_ENVMAP
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
#endif`,Ym=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$m=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jm=`PhysicalMaterial material;
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
#endif`,Km=`uniform sampler2D dfgLUT;
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
}`,Qm=`
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
#endif`,jm=`#if defined( RE_IndirectDiffuse )
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
#endif`,eg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tg=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,ng=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ig=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ag=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,og=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,cg=`#if defined( USE_POINTS_UV )
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
#endif`,ug=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mg=`#ifdef USE_MORPHTARGETS
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
#endif`,gg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,vg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,_g=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Sg=`#ifdef USE_NORMALMAP
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
#endif`,Eg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Tg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ag=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Rg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Cg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Pg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ig=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Lg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ug=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ng=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Og=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Bg=`float getShadowMask() {
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
}`,Hg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zg=`#ifdef USE_SKINNING
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
#endif`,Gg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kg=`#ifdef USE_SKINNING
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
#endif`,Vg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Yg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,qg=`#ifdef USE_TRANSMISSION
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
#endif`,Zg=`#ifdef USE_TRANSMISSION
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
#endif`,$g=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,jg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,e1=`uniform sampler2D t2D;
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
}`,t1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,n1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,i1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,s1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r1=`#include <common>
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
}`,a1=`#if DEPTH_PACKING == 3200
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
}`,o1=`#define DISTANCE
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
}`,l1=`#define DISTANCE
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
}`,c1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,u1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,h1=`uniform float scale;
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
}`,d1=`uniform vec3 diffuse;
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
}`,f1=`#include <common>
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
}`,p1=`uniform vec3 diffuse;
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
}`,m1=`#define LAMBERT
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
}`,g1=`#define LAMBERT
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
}`,x1=`#define MATCAP
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
}`,v1=`#define MATCAP
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
}`,_1=`#define NORMAL
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
}`,y1=`#define NORMAL
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
}`,M1=`#define PHONG
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
}`,S1=`#define PHONG
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
}`,E1=`#define STANDARD
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
}`,b1=`#define STANDARD
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
}`,T1=`#define TOON
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
}`,w1=`#define TOON
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
}`,A1=`uniform float size;
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
}`,R1=`uniform vec3 diffuse;
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
}`,C1=`#include <common>
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
}`,P1=`uniform vec3 color;
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
}`,I1=`uniform float rotation;
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
}`,D1=`uniform vec3 diffuse;
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
}`,Ot={alphahash_fragment:jp,alphahash_pars_fragment:em,alphamap_fragment:tm,alphamap_pars_fragment:nm,alphatest_fragment:im,alphatest_pars_fragment:sm,aomap_fragment:rm,aomap_pars_fragment:am,batching_pars_vertex:om,batching_vertex:lm,begin_vertex:cm,beginnormal_vertex:um,bsdfs:hm,iridescence_fragment:dm,bumpmap_pars_fragment:fm,clipping_planes_fragment:pm,clipping_planes_pars_fragment:mm,clipping_planes_pars_vertex:gm,clipping_planes_vertex:xm,color_fragment:vm,color_pars_fragment:_m,color_pars_vertex:ym,color_vertex:Mm,common:Sm,cube_uv_reflection_fragment:Em,defaultnormal_vertex:bm,displacementmap_pars_vertex:Tm,displacementmap_vertex:wm,emissivemap_fragment:Am,emissivemap_pars_fragment:Rm,colorspace_fragment:Cm,colorspace_pars_fragment:Pm,envmap_fragment:Im,envmap_common_pars_fragment:Dm,envmap_pars_fragment:Lm,envmap_pars_vertex:Um,envmap_physical_pars_fragment:Xm,envmap_vertex:Nm,fog_vertex:Fm,fog_pars_vertex:Om,fog_fragment:Bm,fog_pars_fragment:Hm,gradientmap_pars_fragment:zm,lightmap_pars_fragment:Gm,lights_lambert_fragment:km,lights_lambert_pars_fragment:Vm,lights_pars_begin:Wm,lights_toon_fragment:Ym,lights_toon_pars_fragment:qm,lights_phong_fragment:Zm,lights_phong_pars_fragment:$m,lights_physical_fragment:Jm,lights_physical_pars_fragment:Km,lights_fragment_begin:Qm,lights_fragment_maps:jm,lights_fragment_end:eg,lightprobes_pars_fragment:tg,logdepthbuf_fragment:ng,logdepthbuf_pars_fragment:ig,logdepthbuf_pars_vertex:sg,logdepthbuf_vertex:rg,map_fragment:ag,map_pars_fragment:og,map_particle_fragment:lg,map_particle_pars_fragment:cg,metalnessmap_fragment:ug,metalnessmap_pars_fragment:hg,morphinstance_vertex:dg,morphcolor_vertex:fg,morphnormal_vertex:pg,morphtarget_pars_vertex:mg,morphtarget_vertex:gg,normal_fragment_begin:xg,normal_fragment_maps:vg,normal_pars_fragment:_g,normal_pars_vertex:yg,normal_vertex:Mg,normalmap_pars_fragment:Sg,clearcoat_normal_fragment_begin:Eg,clearcoat_normal_fragment_maps:bg,clearcoat_pars_fragment:Tg,iridescence_pars_fragment:wg,opaque_fragment:Ag,packing:Rg,premultiplied_alpha_fragment:Cg,project_vertex:Pg,dithering_fragment:Ig,dithering_pars_fragment:Dg,roughnessmap_fragment:Lg,roughnessmap_pars_fragment:Ug,shadowmap_pars_fragment:Ng,shadowmap_pars_vertex:Fg,shadowmap_vertex:Og,shadowmask_pars_fragment:Bg,skinbase_vertex:Hg,skinning_pars_vertex:zg,skinning_vertex:Gg,skinnormal_vertex:kg,specularmap_fragment:Vg,specularmap_pars_fragment:Wg,tonemapping_fragment:Xg,tonemapping_pars_fragment:Yg,transmission_fragment:qg,transmission_pars_fragment:Zg,uv_pars_fragment:$g,uv_pars_vertex:Jg,uv_vertex:Kg,worldpos_vertex:Qg,background_vert:jg,background_frag:e1,backgroundCube_vert:t1,backgroundCube_frag:n1,cube_vert:i1,cube_frag:s1,depth_vert:r1,depth_frag:a1,distance_vert:o1,distance_frag:l1,equirect_vert:c1,equirect_frag:u1,linedashed_vert:h1,linedashed_frag:d1,meshbasic_vert:f1,meshbasic_frag:p1,meshlambert_vert:m1,meshlambert_frag:g1,meshmatcap_vert:x1,meshmatcap_frag:v1,meshnormal_vert:_1,meshnormal_frag:y1,meshphong_vert:M1,meshphong_frag:S1,meshphysical_vert:E1,meshphysical_frag:b1,meshtoon_vert:T1,meshtoon_frag:w1,points_vert:A1,points_frag:R1,shadow_vert:C1,shadow_frag:P1,sprite_vert:I1,sprite_frag:D1},rt={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Pt},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Pt}},envmap:{envMap:{value:null},envMapRotation:{value:new Pt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Pt},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new N},probesMax:{value:new N},probesResolution:{value:new N}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0},uvTransform:{value:new Pt}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Pt},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0}}},ds={basic:{uniforms:si([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.fog]),vertexShader:Ot.meshbasic_vert,fragmentShader:Ot.meshbasic_frag},lambert:{uniforms:si([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new Qe(0)},envMapIntensity:{value:1}}]),vertexShader:Ot.meshlambert_vert,fragmentShader:Ot.meshlambert_frag},phong:{uniforms:si([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ot.meshphong_vert,fragmentShader:Ot.meshphong_frag},standard:{uniforms:si([rt.common,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.roughnessmap,rt.metalnessmap,rt.fog,rt.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag},toon:{uniforms:si([rt.common,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.gradientmap,rt.fog,rt.lights,{emissive:{value:new Qe(0)}}]),vertexShader:Ot.meshtoon_vert,fragmentShader:Ot.meshtoon_frag},matcap:{uniforms:si([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,{matcap:{value:null}}]),vertexShader:Ot.meshmatcap_vert,fragmentShader:Ot.meshmatcap_frag},points:{uniforms:si([rt.points,rt.fog]),vertexShader:Ot.points_vert,fragmentShader:Ot.points_frag},dashed:{uniforms:si([rt.common,rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ot.linedashed_vert,fragmentShader:Ot.linedashed_frag},depth:{uniforms:si([rt.common,rt.displacementmap]),vertexShader:Ot.depth_vert,fragmentShader:Ot.depth_frag},normal:{uniforms:si([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,{opacity:{value:1}}]),vertexShader:Ot.meshnormal_vert,fragmentShader:Ot.meshnormal_frag},sprite:{uniforms:si([rt.sprite,rt.fog]),vertexShader:Ot.sprite_vert,fragmentShader:Ot.sprite_frag},background:{uniforms:{uvTransform:{value:new Pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ot.background_vert,fragmentShader:Ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Pt}},vertexShader:Ot.backgroundCube_vert,fragmentShader:Ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ot.cube_vert,fragmentShader:Ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ot.equirect_vert,fragmentShader:Ot.equirect_frag},distance:{uniforms:si([rt.common,rt.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ot.distance_vert,fragmentShader:Ot.distance_frag},shadow:{uniforms:si([rt.lights,rt.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:Ot.shadow_vert,fragmentShader:Ot.shadow_frag}};ds.physical={uniforms:si([ds.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Pt},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Pt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Pt},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Pt},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Pt},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Pt},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Pt}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag};var Uc={r:0,b:0,g:0},L1=new gt,Yf=new Pt;Yf.set(-1,0,0,0,1,0,0,0,1);function U1(i,e,t,n,s,r){let a=new Qe(0),o=s===!0?0:1,c,l,h=null,f=0,p=null;function u(E){let T=E.isScene===!0?E.background:null;if(T&&T.isTexture){let v=E.backgroundBlurriness>0;T=e.get(T,v)}return T}function d(E){let T=!1,v=u(E);v===null?g(a,o):v&&v.isColor&&(g(v,1),T=!0);let y=i.xr.getEnvironmentBlendMode();y==="additive"?t.buffers.color.setClear(0,0,0,1,r):y==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(E,T){let v=u(T);v&&(v.isCubeTexture||v.mapping===io)?(l===void 0&&(l=new Fe(new qt(1,1,1),new Jt({name:"BackgroundCubeMaterial",uniforms:ar(ds.backgroundCube.uniforms),vertexShader:ds.backgroundCube.vertexShader,fragmentShader:ds.backgroundCube.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(y,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=v,l.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(L1.makeRotationFromEuler(T.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Yf),l.material.toneMapped=Wt.getTransfer(v.colorSpace)!==jt,(h!==v||f!==v.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,f=v.version,p=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Fe(new tn(2,2),new Jt({name:"BackgroundMaterial",uniforms:ar(ds.background.uniforms),vertexShader:ds.background.vertexShader,fragmentShader:ds.background.fragmentShader,side:Fs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=Wt.getTransfer(v.colorSpace)!==jt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,p=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function g(E,T){E.getRGB(Uc,rh(i)),t.buffers.color.setClear(Uc.r,Uc.g,Uc.b,T,r)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,T=1){a.set(E),o=T,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(E){o=E,g(a,o)},render:d,addToRenderList:_,dispose:m}}function N1(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null),r=s,a=!1;function o(F,S,L,P,H){let Y=!1,k=f(F,P,L,S);r!==k&&(r=k,l(r.object)),Y=u(F,P,L,H),Y&&d(F,P,L,H),H!==null&&e.update(H,i.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,v(F,S,L,P),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function c(){return i.createVertexArray()}function l(F){return i.bindVertexArray(F)}function h(F){return i.deleteVertexArray(F)}function f(F,S,L,P){let H=P.wireframe===!0,Y=n[S.id];Y===void 0&&(Y={},n[S.id]=Y);let k=F.isInstancedMesh===!0?F.id:0,V=Y[k];V===void 0&&(V={},Y[k]=V);let z=V[L.id];z===void 0&&(z={},V[L.id]=z);let G=z[H];return G===void 0&&(G=p(c()),z[H]=G),G}function p(F){let S=[],L=[],P=[];for(let H=0;H<t;H++)S[H]=0,L[H]=0,P[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:L,attributeDivisors:P,object:F,attributes:{},index:null}}function u(F,S,L,P){let H=r.attributes,Y=S.attributes,k=0,V=L.getAttributes();for(let z in V)if(V[z].location>=0){let q=H[z],fe=Y[z];if(fe===void 0&&(z==="instanceMatrix"&&F.instanceMatrix&&(fe=F.instanceMatrix),z==="instanceColor"&&F.instanceColor&&(fe=F.instanceColor)),q===void 0||q.attribute!==fe||fe&&q.data!==fe.data)return!0;k++}return r.attributesNum!==k||r.index!==P}function d(F,S,L,P){let H={},Y=S.attributes,k=0,V=L.getAttributes();for(let z in V)if(V[z].location>=0){let q=Y[z];q===void 0&&(z==="instanceMatrix"&&F.instanceMatrix&&(q=F.instanceMatrix),z==="instanceColor"&&F.instanceColor&&(q=F.instanceColor));let fe={};fe.attribute=q,q&&q.data&&(fe.data=q.data),H[z]=fe,k++}r.attributes=H,r.attributesNum=k,r.index=P}function _(){let F=r.newAttributes;for(let S=0,L=F.length;S<L;S++)F[S]=0}function g(F){m(F,0)}function m(F,S){let L=r.newAttributes,P=r.enabledAttributes,H=r.attributeDivisors;L[F]=1,P[F]===0&&(i.enableVertexAttribArray(F),P[F]=1),H[F]!==S&&(i.vertexAttribDivisor(F,S),H[F]=S)}function E(){let F=r.newAttributes,S=r.enabledAttributes;for(let L=0,P=S.length;L<P;L++)S[L]!==F[L]&&(i.disableVertexAttribArray(L),S[L]=0)}function T(F,S,L,P,H,Y,k){k===!0?i.vertexAttribIPointer(F,S,L,H,Y):i.vertexAttribPointer(F,S,L,P,H,Y)}function v(F,S,L,P){_();let H=P.attributes,Y=L.getAttributes(),k=S.defaultAttributeValues;for(let V in Y){let z=Y[V];if(z.location>=0){let G=H[V];if(G===void 0&&(V==="instanceMatrix"&&F.instanceMatrix&&(G=F.instanceMatrix),V==="instanceColor"&&F.instanceColor&&(G=F.instanceColor)),G!==void 0){let q=G.normalized,fe=G.itemSize,be=e.get(G);if(be===void 0)continue;let Ce=be.buffer,ze=be.type,et=be.bytesPerElement,Q=ze===i.INT||ze===i.UNSIGNED_INT||G.gpuType===$l;if(G.isInterleavedBufferAttribute){let ue=G.data,we=ue.stride,me=G.offset;if(ue.isInstancedInterleavedBuffer){for(let Pe=0;Pe<z.locationSize;Pe++)m(z.location+Pe,ue.meshPerAttribute);F.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Pe=0;Pe<z.locationSize;Pe++)g(z.location+Pe);i.bindBuffer(i.ARRAY_BUFFER,Ce);for(let Pe=0;Pe<z.locationSize;Pe++)T(z.location+Pe,fe/z.locationSize,ze,q,we*et,(me+fe/z.locationSize*Pe)*et,Q)}else{if(G.isInstancedBufferAttribute){for(let ue=0;ue<z.locationSize;ue++)m(z.location+ue,G.meshPerAttribute);F.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let ue=0;ue<z.locationSize;ue++)g(z.location+ue);i.bindBuffer(i.ARRAY_BUFFER,Ce);for(let ue=0;ue<z.locationSize;ue++)T(z.location+ue,fe/z.locationSize,ze,q,fe*et,fe/z.locationSize*ue*et,Q)}}else if(k!==void 0){let q=k[V];if(q!==void 0)switch(q.length){case 2:i.vertexAttrib2fv(z.location,q);break;case 3:i.vertexAttrib3fv(z.location,q);break;case 4:i.vertexAttrib4fv(z.location,q);break;default:i.vertexAttrib1fv(z.location,q)}}}}E()}function y(){b();for(let F in n){let S=n[F];for(let L in S){let P=S[L];for(let H in P){let Y=P[H];for(let k in Y)h(Y[k].object),delete Y[k];delete P[H]}}delete n[F]}}function w(F){if(n[F.id]===void 0)return;let S=n[F.id];for(let L in S){let P=S[L];for(let H in P){let Y=P[H];for(let k in Y)h(Y[k].object),delete Y[k];delete P[H]}}delete n[F.id]}function A(F){for(let S in n){let L=n[S];for(let P in L){let H=L[P];if(H[F.id]===void 0)continue;let Y=H[F.id];for(let k in Y)h(Y[k].object),delete Y[k];delete H[F.id]}}}function x(F){for(let S in n){let L=n[S],P=F.isInstancedMesh===!0?F.id:0,H=L[P];if(H!==void 0){for(let Y in H){let k=H[Y];for(let V in k)h(k[V].object),delete k[V];delete H[Y]}delete L[P],Object.keys(L).length===0&&delete n[S]}}}function b(){C(),a=!0,r!==s&&(r=s,l(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:b,resetDefaultState:C,dispose:y,releaseStatesOfGeometry:w,releaseStatesOfObject:x,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:g,disableUnusedAttributes:E}}function F1(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function o(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let p=0;for(let u=0;u<h;u++)p+=l[u];t.update(p,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function O1(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==Qn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let x=A===yn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Hn&&A!==Hi&&!x&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(yt("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let f=t.logarithmicDepthBuffer===!0,p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&p===!1&&yt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:p,maxTextures:u,maxVertexTextures:d,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:E,maxVaryings:T,maxFragmentUniforms:v,maxSamples:y,samples:w}}function B1(i){let e=this,t=null,n=0,s=!1,r=!1,a=new yi,o=new Pt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){let u=f.length!==0||p||n!==0||s;return s=p,n=f.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,p){t=h(f,p,0)},this.setState=function(f,p,u){let d=f.clippingPlanes,_=f.clipIntersection,g=f.clipShadows,m=i.get(f);if(!s||d===null||d.length===0||r&&!g)r?h(null):l();else{let E=r?0:n,T=E*4,v=m.clippingState||null;c.value=v,v=h(d,p,T,u);for(let y=0;y!==T;++y)v[y]=t[y];m.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,p,u,d){let _=f!==null?f.length:0,g=null;if(_!==0){if(g=c.value,d!==!0||g===null){let m=u+_*4,E=p.matrixWorldInverse;o.getNormalMatrix(E),(g===null||g.length<m)&&(g=new Float32Array(m));for(let T=0,v=u;T!==_;++T,v+=4)a.copy(f[T]).applyMatrix4(E,o),a.normal.toArray(g,v),g[v+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}var Kr=4,H1=6,z1=20,G1=256,fo=new Ns,bf=new Qe,ph=null,mh=0,gh=0,xh=!1,k1=new N,or=new N,jr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=k1}=r;ph=this._renderer.getRenderTarget(),mh=this._renderer.getActiveCubeFace(),gh=this._renderer.getActiveMipmapLevel(),xh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Af(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ph,mh,gh),this._renderer.xr.enabled=xh,e.scissorTest=!1,Jr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Hs||e.mapping===rr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ph=this._renderer.getRenderTarget(),mh=this._renderer.getActiveCubeFace(),gh=this._renderer.getActiveMipmapLevel(),xh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ln,minFilter:Ln,generateMipmaps:!1,type:yn,format:Qn,colorSpace:Sa,depthBuffer:!1},s=Tf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Tf(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=V1(r)),this._blurMaterial=X1(r,e,t),this._ggxMaterial=W1(r,e,t)}return s}_compileMaterial(e){let t=new Fe(new Ft,e);this._renderer.compile(t,fo)}_sceneToCubeUV(e,t,n,s,r){let c=new Xn(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,p=f.autoClear,u=f.toneMapping;f.getClearColor(bf),f.toneMapping=wi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Fe(new qt,new rn({name:"PMREM.Background",side:$n,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,g=_.material,m=!1,E=e.background;E?E.isColor&&(g.color.copy(E),e.background=null,m=!0):(g.color.copy(bf),m=!0);for(let T=0;T<6;T++){let v=T%3;v===0?(c.up.set(0,l[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[T],r.y,r.z)):v===1?(c.up.set(0,0,l[T]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[T],r.z)):(c.up.set(0,l[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[T]));let y=this._cubeSize;Jr(s,v*y,T>2?y:0,y,y),f.setRenderTarget(s),m&&f.render(_,c),f.render(e,c)}f.toneMapping=u,f.autoClear=p,e.background=E}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Hs||e.mapping===rr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Af()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wf());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;Jr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,fo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,l=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),f=Math.sqrt(l*l-h*h),p=l*1.25,u=f*p,{_lodMax:d}=this,_=this._sizeLods[n],g=3*_*(n>d-Kr?n-d+Kr:0),m=4*(this._cubeSize-_);c.envMap.value=e.texture,c.roughness.value=u,c.mipInt.value=d-t,Jr(r,g,m,3*_,2*_),s.setRenderTarget(r),s.render(o,fo),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=d-n,Jr(e,g,m,3*_,2*_),s.setRenderTarget(e),s.render(o,fo)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[s];c.material=o;let l=o.uniforms;l.envMap.value=e.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],f=3*h*(s>this._lodMax-Kr?s-this._lodMax+Kr:0),p=4*(this._cubeSize-h);Jr(t,f,p,3*h,2*h),a.setRenderTarget(t),a.render(c,fo)}};function V1(i){let e=[],t=[],n=i,s=i-Kr+1+H1;for(let r=0;r<s;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),c=-o,l=1+o,h=[c,c,l,c,l,l,c,c,l,l,c,l],f=6,p=6,u=3,d=new Float32Array(u*p*f),_=new Float32Array(u*p*f);for(let m=0;m<f;m++){let E=m%3*2/3-1,T=m>2?0:-1,v=[E,T,0,E+2/3,T,0,E+2/3,T+1,0,E,T,0,E+2/3,T+1,0,E,T+1,0];d.set(v,u*p*m);for(let y=0;y<p;y++){let w=h[y*2]*2-1,A=h[y*2+1]*2-1;m===0?or.set(1,A,w):m===1?or.set(-w,1,-A):m===2?or.set(-w,A,1):m===3?or.set(-1,A,-w):m===4?or.set(-w,-1,A):or.set(w,A,-1),or.toArray(_,(m*p+y)*u)}}let g=new Ft;g.setAttribute("position",new Rt(d,u)),g.setAttribute("outputDirection",new Rt(_,u)),t.push(new Fe(g,null)),n>Kr&&n--}return{lodMeshes:t,sizeLods:e}}function Tf(i,e,t){let n=new dn(i,e,t);return n.texture.mapping=io,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Jr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function W1(i,e,t){return new Jt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:G1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Bc(),fragmentShader:`

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
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function X1(i,e,t){return new Jt({name:"SphericalGaussianBlur",defines:{SAMPLES:z1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Bc(),fragmentShader:`

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
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function wf(){return new Jt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bc(),fragmentShader:`

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
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Af(){return new Jt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Bc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Fc=class extends dn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Da(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new qt(5,5,5),r=new Jt({name:"CubemapFromEquirect",uniforms:ar(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$n,blending:Rn});r.uniforms.tEquirect.value=t;let a=new Fe(s,r),o=t.minFilter;return t.minFilter===cs&&(t.minFilter=Ln),new kl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};function Y1(i){let e=new WeakMap,t=new WeakMap,n=null;function s(p,u=!1){return p==null?null:u?a(p):r(p)}function r(p){if(p&&p.isTexture){let u=p.mapping;if(u===Yl||u===ql)if(e.has(p)){let d=e.get(p).texture;return o(d,p.mapping)}else{let d=p.image;if(d&&d.height>0){let _=new Fc(d.height);return _.fromEquirectangularTexture(i,p),e.set(p,_),p.addEventListener("dispose",l),o(_.texture,p.mapping)}else return null}}return p}function a(p){if(p&&p.isTexture){let u=p.mapping,d=u===Yl||u===ql,_=u===Hs||u===rr;if(d||_){let g=t.get(p),m=g!==void 0?g.texture.pmremVersion:0;if(p.isRenderTargetTexture&&p.pmremVersion!==m)return n===null&&(n=new jr(i)),g=d?n.fromEquirectangular(p,g):n.fromCubemap(p,g),g.texture.pmremVersion=p.pmremVersion,t.set(p,g),g.texture;if(g!==void 0)return g.texture;{let E=p.image;return d&&E&&E.height>0||_&&E&&c(E)?(n===null&&(n=new jr(i)),g=d?n.fromEquirectangular(p):n.fromCubemap(p),g.texture.pmremVersion=p.pmremVersion,t.set(p,g),p.addEventListener("dispose",h),g.texture):null}}}return p}function o(p,u){return u===Yl?p.mapping=Hs:u===ql&&(p.mapping=rr),p}function c(p){let u=0,d=6;for(let _=0;_<d;_++)p[_]!==void 0&&u++;return u===d}function l(p){let u=p.target;u.removeEventListener("dispose",l);let d=e.get(u);d!==void 0&&(e.delete(u),d.dispose())}function h(p){let u=p.target;u.removeEventListener("dispose",h);let d=t.get(u);d!==void 0&&(t.delete(u),d.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function q1(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&$s("WebGLRenderer: "+n+" extension not supported."),s}}}function Z1(i,e,t,n){let s={},r=new WeakMap;function a(f){let p=f.target;p.index!==null&&e.remove(p.index);for(let d in p.attributes)e.remove(p.attributes[d]);p.removeEventListener("dispose",a),delete s[p.id];let u=r.get(p);u&&(e.remove(u),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function o(f,p){return s[p.id]===!0||(p.addEventListener("dispose",a),s[p.id]=!0,t.memory.geometries++),p}function c(f){let p=f.attributes;for(let u in p)e.update(p[u],i.ARRAY_BUFFER)}function l(f){let p=[],u=f.index,d=f.attributes.position,_=0;if(d===void 0)return;if(u!==null){let E=u.array;_=u.version;for(let T=0,v=E.length;T<v;T+=3){let y=E[T+0],w=E[T+1],A=E[T+2];p.push(y,w,w,A,A,y)}}else{let E=d.array;_=d.version;for(let T=0,v=E.length/3-1;T<v;T+=3){let y=T+0,w=T+1,A=T+2;p.push(y,w,w,A,A,y)}}let g=new(d.count>=65535?Pa:Ca)(p,1);g.version=_;let m=r.get(f);m&&e.remove(m),r.set(f,g)}function h(f){let p=r.get(f);if(p){let u=f.index;u!==null&&p.version<u.version&&l(f)}else l(f);return r.get(f)}return{get:o,update:c,getWireframeAttribute:h}}function $1(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,p){i.drawElements(n,p,r,f*a),t.update(p,n,1)}function l(f,p,u){u!==0&&(i.drawElementsInstanced(n,p,r,f*a,u),t.update(p,n,u))}function h(f,p,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,u);let _=0;for(let g=0;g<u;g++)_+=p[g];t.update(_,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function J1(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:St("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function K1(i,e,t){let n=new WeakMap,s=new hn;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,p=n.get(o);if(p===void 0||p.count!==f){let b=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",b)};p!==void 0&&p.texture.dispose();let u=o.morphAttributes.position!==void 0,d=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],E=o.morphAttributes.color||[],T=0;u===!0&&(T=1),d===!0&&(T=2),_===!0&&(T=3);let v=o.attributes.position.count*T,y=1;v>e.maxTextureSize&&(y=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let w=new Float32Array(v*y*4*f),A=new Aa(w,v,y,f);A.type=Hi,A.needsUpdate=!0;let x=T*4;for(let C=0;C<f;C++){let F=g[C],S=m[C],L=E[C],P=v*y*4*C;for(let H=0;H<F.count;H++){let Y=H*x;u===!0&&(s.fromBufferAttribute(F,H),w[P+Y+0]=s.x,w[P+Y+1]=s.y,w[P+Y+2]=s.z,w[P+Y+3]=0),d===!0&&(s.fromBufferAttribute(S,H),w[P+Y+4]=s.x,w[P+Y+5]=s.y,w[P+Y+6]=s.z,w[P+Y+7]=0),_===!0&&(s.fromBufferAttribute(L,H),w[P+Y+8]=s.x,w[P+Y+9]=s.y,w[P+Y+10]=s.z,w[P+Y+11]=L.itemSize===4?s.w:1)}}p={count:f,texture:A,size:new He(v,y)},n.set(o,p),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let u=0;for(let _=0;_<l.length;_++)u+=l[_];let d=o.morphTargetsRelative?1:1-u;c.getUniforms().setValue(i,"morphTargetBaseInfluence",d),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:r}}function Q1(i,e,t,n,s){let r=new WeakMap;function a(l){let h=s.render.frame,f=l.geometry,p=e.get(l,f);if(r.get(p)!==h&&(e.update(p),r.set(p,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let u=l.skeleton;r.get(u)!==h&&(u.update(),r.set(u,h))}return p}function o(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var j1={[Ka]:"LINEAR_TONE_MAPPING",[Qa]:"REINHARD_TONE_MAPPING",[ja]:"CINEON_TONE_MAPPING",[Bs]:"ACES_FILMIC_TONE_MAPPING",[to]:"AGX_TONE_MAPPING",[no]:"NEUTRAL_TONE_MAPPING",[eo]:"CUSTOM_TONE_MAPPING"};function ex(i,e,t,n,s,r){let a=new dn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=new Ft;l.setAttribute("position",new Nt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Nt([0,2,0,0,2,0],2));let h=new Wr({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Fe(l,h),p=new Ns(-1,1,1,-1,0,1),u=null,d=null,_=!1,g,m=null,E=[],T=!1;this.setSize=function(v,y){a.setSize(v,y),o!==null&&o.setSize(v,y),c!==null&&c.setSize(v,y);for(let w=0;w<E.length;w++){let A=E[w];A.setSize&&A.setSize(v,y)}},this.setEffects=function(v){E=v,T=E.length>0&&E[0].isRenderPass===!0;let y=a.width,w=a.height;E.length>0&&o===null&&(o=new dn(y,w,{type:yn,depthBuffer:!1,stencilBuffer:!1}),c=new dn(y,w,{type:yn,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<E.length;A++){let x=E[A];x.setSize&&x.setSize(y,w)}},this.begin=function(v,y){if(_||v.toneMapping===wi&&E.length===0)return!1;if(m=y,y!==null){let w=y.width,A=y.height;(a.width!==w||a.height!==A)&&this.setSize(w,A)}return T===!1&&v.setRenderTarget(a),g=v.toneMapping,v.toneMapping=wi,!0},this.hasRenderPass=function(){return T},this.end=function(v,y){v.toneMapping=g,_=!0;let w=a,A=o;for(let x=0;x<E.length;x++){let b=E[x];b.enabled!==!1&&(b.render(v,A,w,y),b.needsSwap!==!1&&(w=A,A=A===o?c:o))}if(u!==v.outputColorSpace||d!==v.toneMapping){u=v.outputColorSpace,d=v.toneMapping,h.defines={},Wt.getTransfer(u)===jt&&(h.defines.SRGB_TRANSFER="");let x=j1[d];x&&(h.defines[x]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=w.texture,v.setRenderTarget(m),v.render(f,p),m=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),h.dispose()}}var qf=new ci,yh=new Fi(1,1),Zf=new Aa,$f=new Sl,Jf=new Da,Rf=[],Cf=[],Pf=new Float32Array(16),If=new Float32Array(9),Df=new Float32Array(4);function ea(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Rf[s];if(r===void 0&&(r=new Float32Array(s),Rf[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function zn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Gn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Hc(i,e){let t=Cf[e];t===void 0&&(t=new Int32Array(e),Cf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function tx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function nx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zn(t,e))return;i.uniform2fv(this.addr,e),Gn(t,e)}}function ix(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(zn(t,e))return;i.uniform3fv(this.addr,e),Gn(t,e)}}function sx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zn(t,e))return;i.uniform4fv(this.addr,e),Gn(t,e)}}function rx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(zn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Gn(t,e)}else{if(zn(t,n))return;Df.set(n),i.uniformMatrix2fv(this.addr,!1,Df),Gn(t,n)}}function ax(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(zn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Gn(t,e)}else{if(zn(t,n))return;If.set(n),i.uniformMatrix3fv(this.addr,!1,If),Gn(t,n)}}function ox(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(zn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Gn(t,e)}else{if(zn(t,n))return;Pf.set(n),i.uniformMatrix4fv(this.addr,!1,Pf),Gn(t,n)}}function lx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function cx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zn(t,e))return;i.uniform2iv(this.addr,e),Gn(t,e)}}function ux(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zn(t,e))return;i.uniform3iv(this.addr,e),Gn(t,e)}}function hx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zn(t,e))return;i.uniform4iv(this.addr,e),Gn(t,e)}}function dx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function fx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zn(t,e))return;i.uniform2uiv(this.addr,e),Gn(t,e)}}function px(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zn(t,e))return;i.uniform3uiv(this.addr,e),Gn(t,e)}}function mx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zn(t,e))return;i.uniform4uiv(this.addr,e),Gn(t,e)}}function gx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(yh.compareFunction=t.isReversedDepthBuffer()?Lc:Dc,r=yh):r=qf,t.setTexture2D(e||r,s)}function xx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||$f,s)}function vx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Jf,s)}function _x(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Zf,s)}function yx(i){switch(i){case 5126:return tx;case 35664:return nx;case 35665:return ix;case 35666:return sx;case 35674:return rx;case 35675:return ax;case 35676:return ox;case 5124:case 35670:return lx;case 35667:case 35671:return cx;case 35668:case 35672:return ux;case 35669:case 35673:return hx;case 5125:return dx;case 36294:return fx;case 36295:return px;case 36296:return mx;case 35678:case 36198:case 36298:case 36306:case 35682:return gx;case 35679:case 36299:case 36307:return xx;case 35680:case 36300:case 36308:case 36293:return vx;case 36289:case 36303:case 36311:case 36292:return _x}}function Mx(i,e){i.uniform1fv(this.addr,e)}function Sx(i,e){let t=ea(e,this.size,2);i.uniform2fv(this.addr,t)}function Ex(i,e){let t=ea(e,this.size,3);i.uniform3fv(this.addr,t)}function bx(i,e){let t=ea(e,this.size,4);i.uniform4fv(this.addr,t)}function Tx(i,e){let t=ea(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function wx(i,e){let t=ea(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Ax(i,e){let t=ea(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Rx(i,e){i.uniform1iv(this.addr,e)}function Cx(i,e){i.uniform2iv(this.addr,e)}function Px(i,e){i.uniform3iv(this.addr,e)}function Ix(i,e){i.uniform4iv(this.addr,e)}function Dx(i,e){i.uniform1uiv(this.addr,e)}function Lx(i,e){i.uniform2uiv(this.addr,e)}function Ux(i,e){i.uniform3uiv(this.addr,e)}function Nx(i,e){i.uniform4uiv(this.addr,e)}function Fx(i,e,t){let n=this.cache,s=e.length,r=Hc(t,s);zn(n,r)||(i.uniform1iv(this.addr,r),Gn(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=yh:a=qf;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Ox(i,e,t){let n=this.cache,s=e.length,r=Hc(t,s);zn(n,r)||(i.uniform1iv(this.addr,r),Gn(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||$f,r[a])}function Bx(i,e,t){let n=this.cache,s=e.length,r=Hc(t,s);zn(n,r)||(i.uniform1iv(this.addr,r),Gn(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Jf,r[a])}function Hx(i,e,t){let n=this.cache,s=e.length,r=Hc(t,s);zn(n,r)||(i.uniform1iv(this.addr,r),Gn(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Zf,r[a])}function zx(i){switch(i){case 5126:return Mx;case 35664:return Sx;case 35665:return Ex;case 35666:return bx;case 35674:return Tx;case 35675:return wx;case 35676:return Ax;case 5124:case 35670:return Rx;case 35667:case 35671:return Cx;case 35668:case 35672:return Px;case 35669:case 35673:return Ix;case 5125:return Dx;case 36294:return Lx;case 36295:return Ux;case 36296:return Nx;case 35678:case 36198:case 36298:case 36306:case 35682:return Fx;case 35679:case 36299:case 36307:return Ox;case 35680:case 36300:case 36308:case 36293:return Bx;case 36289:case 36303:case 36311:case 36292:return Hx}}var Mh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=yx(t.type)}},Sh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=zx(t.type)}},Eh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},vh=/(\w+)(\])?(\[|\.)?/g;function Lf(i,e){i.seq.push(e),i.map[e.id]=e}function Gx(i,e,t){let n=i.name,s=n.length;for(vh.lastIndex=0;;){let r=vh.exec(n),a=vh.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Lf(t,l===void 0?new Mh(o,i,e):new Sh(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new Eh(o),Lf(t,f)),t=f}}}var Qr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);Gx(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Uf(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var kx=37297,Vx=0;function Wx(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Nf=new Pt;function Xx(i){Wt._getMatrix(Nf,Wt.workingColorSpace,i);let e=`mat3( ${Nf.elements.map(t=>t.toFixed(4))} )`;switch(Wt.getTransfer(i)){case Ea:return[e,"LinearTransferOETF"];case jt:return[e,"sRGBTransferOETF"];default:return yt("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Ff(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Wx(i.getShaderSource(e),o)}else return r}function Yx(i,e){let t=Xx(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var qx={[Ka]:"Linear",[Qa]:"Reinhard",[ja]:"Cineon",[Bs]:"ACESFilmic",[to]:"AgX",[no]:"Neutral",[eo]:"Custom"};function Zx(i,e){let t=qx[e];return t===void 0?(yt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Nc=new N;function $x(){Wt.getLuminanceCoefficients(Nc);let i=Nc.x.toFixed(4),e=Nc.y.toFixed(4),t=Nc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Jx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(mo).join(`
`)}function Kx(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Qx(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function mo(i){return i!==""}function Of(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Bf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var jx=/^[ \t]*#include +<([\w\d./]+)>/gm;function bh(i){return i.replace(jx,tv)}var ev=new Map;function tv(i,e){let t=Ot[e];if(t===void 0){let n=ev.get(e);if(n!==void 0)t=Ot[n],yt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return bh(t)}var nv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hf(i){return i.replace(nv,iv)}function iv(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function zf(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var sv={[ir]:"SHADOWMAP_TYPE_PCF",[Zr]:"SHADOWMAP_TYPE_VSM"};function rv(i){return sv[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var av={[Hs]:"ENVMAP_TYPE_CUBE",[rr]:"ENVMAP_TYPE_CUBE",[io]:"ENVMAP_TYPE_CUBE_UV"};function ov(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":av[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var lv={[rr]:"ENVMAP_MODE_REFRACTION"};function cv(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":lv[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var uv={[qu]:"ENVMAP_BLENDING_MULTIPLY",[jd]:"ENVMAP_BLENDING_MIX",[ef]:"ENVMAP_BLENDING_ADD"};function hv(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":uv[i.combine]||"ENVMAP_BLENDING_NONE"}function dv(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function fv(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=rv(t),l=ov(t),h=cv(t),f=hv(t),p=dv(t),u=Jx(t),d=Kx(r),_=s.createProgram(),g,m,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(mo).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(mo).join(`
`),m.length>0&&(m+=`
`)):(g=[zf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(mo).join(`
`),m=[zf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wi?"#define TONE_MAPPING":"",t.toneMapping!==wi?Ot.tonemapping_pars_fragment:"",t.toneMapping!==wi?Zx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ot.colorspace_pars_fragment,Yx("linearToOutputTexel",t.outputColorSpace),$x(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(mo).join(`
`)),a=bh(a),a=Of(a,t),a=Bf(a,t),o=bh(o),o=Of(o,t),o=Bf(o,t),a=Hf(a),o=Hf(o),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,g=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===ih?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ih?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let T=E+g+a,v=E+m+o,y=Uf(s,s.VERTEX_SHADER,T),w=Uf(s,s.FRAGMENT_SHADER,v);s.attachShader(_,y),s.attachShader(_,w),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(F){if(i.debug.checkShaderErrors){let S=s.getProgramInfoLog(_)||"",L=s.getShaderInfoLog(y)||"",P=s.getShaderInfoLog(w)||"",H=S.trim(),Y=L.trim(),k=P.trim(),V=!0,z=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,y,w);else{let G=Ff(s,y,"vertex"),q=Ff(s,w,"fragment");St("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+H+`
`+G+`
`+q)}else H!==""?yt("WebGLProgram: Program Info Log:",H):(Y===""||k==="")&&(z=!1);z&&(F.diagnostics={runnable:V,programLog:H,vertexShader:{log:Y,prefix:g},fragmentShader:{log:k,prefix:m}})}s.deleteShader(y),s.deleteShader(w),x=new Qr(s,_),b=Qx(s,_)}let x;this.getUniforms=function(){return x===void 0&&A(this),x};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(_,kx)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Vx++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=y,this.fragmentShader=w,this}var pv=0,Th=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new wh(e),t.set(e,n)),n}},wh=class{constructor(e){this.id=pv++,this.code=e,this.usedTimes=0}};function mv(i){return i===Gs||i===co||i===uo}function gv(i,e,t,n,s,r){let a=new Nr,o=new Th,c=new Set,l=[],h=new Map,f=n.logarithmicDepthBuffer,p=n.precision,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(x){return c.add(x),x===0?"uv":`uv${x}`}function _(x,b,C,F,S,L){let P=F.fog,H=S.geometry,Y=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?F.environment:null,k=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,V=e.get(x.envMap||Y,k),z=V&&V.mapping===io?V.image.height:null,G=u[x.type];x.precision!==null&&(p=n.getMaxPrecision(x.precision),p!==x.precision&&yt("WebGLProgram.getParameters:",x.precision,"not supported, using",p,"instead."));let q=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,fe=q!==void 0?q.length:0,be=0;H.morphAttributes.position!==void 0&&(be=1),H.morphAttributes.normal!==void 0&&(be=2),H.morphAttributes.color!==void 0&&(be=3);let Ce,ze,et,Q;if(G){let Ke=ds[G];Ce=Ke.vertexShader,ze=Ke.fragmentShader}else{Ce=x.vertexShader,ze=x.fragmentShader;let Ke=o.getVertexShaderStage(x),nt=o.getFragmentShaderStage(x);o.update(x,Ke,nt),et=Ke.id,Q=nt.id}let ue=i.getRenderTarget(),we=i.state.buffers.depth.getReversed(),me=S.isInstancedMesh===!0,Pe=S.isBatchedMesh===!0,Z=!!x.map,Be=!!x.matcap,ne=!!V,re=!!x.aoMap,J=!!x.lightMap,ie=!!x.bumpMap&&x.wireframe===!1,le=!!x.normalMap,Oe=!!x.displacementMap,Ne=!!x.emissiveMap,qe=!!x.metalnessMap,Je=!!x.roughnessMap,X=x.anisotropy>0,at=x.clearcoat>0,lt=x.dispersion>0,O=x.retroreflectivity>0,M=x.iridescence>0,K=x.sheen>0,te=x.transmission>0,he=X&&!!x.anisotropyMap,Ve=at&&!!x.clearcoatMap,Ge=at&&!!x.clearcoatNormalMap,Se=at&&!!x.clearcoatRoughnessMap,ve=M&&!!x.iridescenceMap,$e=M&&!!x.iridescenceThicknessMap,ct=K&&!!x.sheenColorMap,D=K&&!!x.sheenRoughnessMap,$=!!x.specularMap,ce=!!x.specularColorMap,_e=!!x.specularIntensityMap,Ue=te&&!!x.transmissionMap,B=te&&!!x.thicknessMap,Me=!!x.gradientMap,ae=!!x.alphaMap,Ie=x.alphaTest>0,Ae=!!x.alphaHash,U=!!x.extensions,ye=wi;x.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(ye=i.toneMapping);let oe={shaderID:G,shaderType:x.type,shaderName:x.name,vertexShader:Ce,fragmentShader:ze,defines:x.defines,customVertexShaderID:et,customFragmentShaderID:Q,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:p,batching:Pe,batchingColor:Pe&&S._colorsTexture!==null,instancing:me,instancingColor:me&&S.instanceColor!==null,instancingMorph:me&&S.morphTexture!==null,outputColorSpace:ue===null?i.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:Wt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Z,matcap:Be,envMap:ne,envMapMode:ne&&V.mapping,envMapCubeUVHeight:z,aoMap:re,lightMap:J,bumpMap:ie,normalMap:le,displacementMap:Oe,emissiveMap:Ne,normalMapObjectSpace:le&&x.normalMapType===sf,normalMapTangentSpace:le&&x.normalMapType===ho,packedNormalMap:le&&x.normalMapType===ho&&mv(x.normalMap.format),metalnessMap:qe,roughnessMap:Je,anisotropy:X,anisotropyMap:he,clearcoat:at,clearcoatMap:Ve,clearcoatNormalMap:Ge,clearcoatRoughnessMap:Se,dispersion:lt,retroreflection:O,iridescence:M,iridescenceMap:ve,iridescenceThicknessMap:$e,sheen:K,sheenColorMap:ct,sheenRoughnessMap:D,specularMap:$,specularColorMap:ce,specularIntensityMap:_e,transmission:te,transmissionMap:Ue,thicknessMap:B,gradientMap:Me,opaque:x.transparent===!1&&x.blending===Os&&x.alphaToCoverage===!1,alphaMap:ae,alphaTest:Ie,alphaHash:Ae,combine:x.combine,mapUv:Z&&d(x.map.channel),aoMapUv:re&&d(x.aoMap.channel),lightMapUv:J&&d(x.lightMap.channel),bumpMapUv:ie&&d(x.bumpMap.channel),normalMapUv:le&&d(x.normalMap.channel),displacementMapUv:Oe&&d(x.displacementMap.channel),emissiveMapUv:Ne&&d(x.emissiveMap.channel),metalnessMapUv:qe&&d(x.metalnessMap.channel),roughnessMapUv:Je&&d(x.roughnessMap.channel),anisotropyMapUv:he&&d(x.anisotropyMap.channel),clearcoatMapUv:Ve&&d(x.clearcoatMap.channel),clearcoatNormalMapUv:Ge&&d(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&d(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&d(x.iridescenceMap.channel),iridescenceThicknessMapUv:$e&&d(x.iridescenceThicknessMap.channel),sheenColorMapUv:ct&&d(x.sheenColorMap.channel),sheenRoughnessMapUv:D&&d(x.sheenRoughnessMap.channel),specularMapUv:$&&d(x.specularMap.channel),specularColorMapUv:ce&&d(x.specularColorMap.channel),specularIntensityMapUv:_e&&d(x.specularIntensityMap.channel),transmissionMapUv:Ue&&d(x.transmissionMap.channel),thicknessMapUv:B&&d(x.thicknessMap.channel),alphaMapUv:ae&&d(x.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(le||X),vertexNormals:!!H.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:S.isPoints===!0&&!!H.attributes.uv&&(Z||ae),fog:!!P,useFog:x.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||H.attributes.normal===void 0&&le===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:we,skinning:S.isSkinnedMesh===!0,hasPositionAttribute:H.attributes.position!==void 0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:be,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:L.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:ye,decodeVideoTexture:Z&&x.map.isVideoTexture===!0&&Wt.getTransfer(x.map.colorSpace)===jt,decodeVideoTextureEmissive:Ne&&x.emissiveMap.isVideoTexture===!0&&Wt.getTransfer(x.emissiveMap.colorSpace)===jt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Bn,flipSided:x.side===$n,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:U&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(U&&x.extensions.multiDraw===!0||Pe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return oe.vertexUv1s=c.has(1),oe.vertexUv2s=c.has(2),oe.vertexUv3s=c.has(3),c.clear(),oe}function g(x){let b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(let C in x.defines)b.push(C),b.push(x.defines[C]);return x.isRawShaderMaterial===!1&&(m(b,x),E(b,x),b.push(i.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function m(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapCubeUVHeight),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.morphAttributeCount),x.push(b.numSunLights),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numSunLightShadows),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function E(x,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function T(x){let b=u[x.type],C;if(b){let F=ds[b];C=hi.clone(F.uniforms)}else C=x.uniforms;return C}function v(x,b){let C=h.get(b);return C!==void 0?++C.usedTimes:(C=new fv(i,b,x,s),l.push(C),h.set(b,C)),C}function y(x){if(--x.usedTimes===0){let b=l.indexOf(x);l[b]=l[l.length-1],l.pop(),h.delete(x.cacheKey),x.destroy()}}function w(x){o.remove(x)}function A(){o.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:T,acquireProgram:v,releaseProgram:y,releaseShaderCache:w,programs:l,dispose:A}}function xv(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function vv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Gf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function kf(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(p){let u=0;return p.isInstancedMesh&&(u+=2),p.isSkinnedMesh&&(u+=1),u}function o(p,u,d,_,g,m){let E=i[e];return E===void 0?(E={id:p.id,object:p,geometry:u,material:d,materialVariant:a(p),groupOrder:_,renderOrder:p.renderOrder,z:g,group:m},i[e]=E):(E.id=p.id,E.object=p,E.geometry=u,E.material=d,E.materialVariant=a(p),E.groupOrder=_,E.renderOrder=p.renderOrder,E.z=g,E.group=m),e++,E}function c(p,u,d,_,g,m,E){E.reversedDepth===!0&&(g=-g);let T=o(p,u,d,_,g,m);d.transmission>0?n.push(T):d.transparent===!0?s.push(T):t.push(T)}function l(p,u,d,_,g,m){let E=o(p,u,d,_,g,m);d.transmission>0?n.unshift(E):d.transparent===!0?s.unshift(E):t.unshift(E)}function h(p,u){t.length>1&&t.sort(p||vv),n.length>1&&n.sort(u||Gf),s.length>1&&s.sort(u||Gf)}function f(){for(let p=e,u=i.length;p<u;p++){let d=i[p];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:f,sort:h}}function _v(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new kf,i.set(n,[a])):s>=r.length?(a=new kf,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function yv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new N,color:new Qe};break;case"SpotLight":t={position:new N,direction:new N,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":t={color:new Qe,position:new N,halfWidth:new N,halfHeight:new N};break}return i[e.id]=t,t}}}function Mv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Sv=0;function Ev(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function bv(i){let e=new yv,t=Mv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new N);let s=new N,r=new gt,a=new gt;function o(l){let h=0,f=0,p=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let u=0,d=0,_=0,g=0,m=0,E=0,T=0,v=0,y=0,w=0,A=0,x=0,b=0,C=0;l.sort(Ev);for(let S=0,L=l.length;S<L;S++){let P=l[S],H=P.color,Y=P.intensity,k=P.distance,V=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Gs?V=P.shadow.map.texture:V=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=H.r*Y,f+=H.g*Y,p+=H.b*Y;else if(P.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(P.sh.coefficients[z],Y);C++}else if(P.isSunLight){let z=e.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let G=P.shadow,q=t.get(P);q.shadowIntensity=G.intensity,q.shadowBias=G.bias,q.shadowNormalBias=G.normalBias,q.shadowRadius=G.radius,q.shadowMapSize.copy(G.mapSize).multiply(G.getFrameExtents()),n.sunShadow[d]=q,n.sunShadowMap[d]=V;let fe=G.getViewportCount();for(let be=0;be<fe;be++)n.sunShadowMatrix[_+be]=G.getMatrix(be),n.sunShadowCascade[_+be]=G._cascadeData[be];_+=fe,d++}n.sun[u]=z,u++}else if(P.isDirectionalLight){let z=e.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let G=P.shadow,q=t.get(P);q.shadowIntensity=G.intensity,q.shadowBias=G.bias,q.shadowNormalBias=G.normalBias,q.shadowRadius=G.radius,q.shadowMapSize=G.mapSize,n.directionalShadow[g]=q,n.directionalShadowMap[g]=V,n.directionalShadowMatrix[g]=P.shadow.matrix,y++}n.directional[g]=z,g++}else if(P.isSpotLight){let z=e.get(P);z.position.setFromMatrixPosition(P.matrixWorld),z.color.copy(H).multiplyScalar(Y),z.distance=k,z.coneCos=Math.cos(P.angle),z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),z.decay=P.decay,n.spot[E]=z;let G=P.shadow;if(P.map&&(n.spotLightMap[x]=P.map,x++,G.updateMatrices(P),P.castShadow&&b++),n.spotLightMatrix[E]=G.matrix,P.castShadow){let q=t.get(P);q.shadowIntensity=G.intensity,q.shadowBias=G.bias,q.shadowNormalBias=G.normalBias,q.shadowRadius=G.radius,q.shadowMapSize=G.mapSize,n.spotShadow[E]=q,n.spotShadowMap[E]=V,A++}E++}else if(P.isRectAreaLight){let z=e.get(P);z.color.copy(H).multiplyScalar(Y),z.halfWidth.set(P.width*.5,0,0),z.halfHeight.set(0,P.height*.5,0),n.rectArea[T]=z,T++}else if(P.isPointLight){let z=e.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),z.distance=P.distance,z.decay=P.decay,P.castShadow){let G=P.shadow,q=t.get(P);q.shadowIntensity=G.intensity,q.shadowBias=G.bias,q.shadowNormalBias=G.normalBias,q.shadowRadius=G.radius,q.shadowMapSize=G.mapSize,q.shadowCameraNear=G.camera.near,q.shadowCameraFar=G.camera.far,n.pointShadow[m]=q,n.pointShadowMap[m]=V,n.pointShadowMatrix[m]=P.shadow.matrix,w++}n.point[m]=z,m++}else if(P.isHemisphereLight){let z=e.get(P);z.skyColor.copy(P.color).multiplyScalar(Y),z.groundColor.copy(P.groundColor).multiplyScalar(Y),n.hemi[v]=z,v++}}T>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=rt.LTC_FLOAT_1,n.rectAreaLTC2=rt.LTC_FLOAT_2):(n.rectAreaLTC1=rt.LTC_HALF_1,n.rectAreaLTC2=rt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=p;let F=n.hash;(F.sunLength!==u||F.directionalLength!==g||F.pointLength!==m||F.spotLength!==E||F.rectAreaLength!==T||F.hemiLength!==v||F.numSunShadows!==d||F.numDirectionalShadows!==y||F.numPointShadows!==w||F.numSpotShadows!==A||F.numSpotMaps!==x||F.numLightProbes!==C)&&(n.sun.length=u,n.directional.length=g,n.spot.length=E,n.rectArea.length=T,n.point.length=m,n.hemi.length=v,n.sunShadow.length=d,n.sunShadowMap.length=d,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.directionalShadowMatrix.length=y,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+x-b,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=C,F.sunLength=u,F.directionalLength=g,F.pointLength=m,F.spotLength=E,F.rectAreaLength=T,F.hemiLength=v,F.numSunShadows=d,F.numDirectionalShadows=y,F.numPointShadows=w,F.numSpotShadows=A,F.numSpotMaps=x,F.numLightProbes=C,n.version=Sv++)}function c(l,h){let f=0,p=0,u=0,d=0,_=0,g=0,m=h.matrixWorldInverse;for(let E=0,T=l.length;E<T;E++){let v=l[E];if(v.isSunLight){let y=n.sun[f];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(m),f++}else if(v.isDirectionalLight){let y=n.directional[p];y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),p++}else if(v.isSpotLight){let y=n.spot[d];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),d++}else if(v.isRectAreaLight){let y=n.rectArea[_];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),a.identity(),r.copy(v.matrixWorld),r.premultiply(m),a.extractRotation(r),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),_++}else if(v.isPointLight){let y=n.point[u];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),u++}else if(v.isHemisphereLight){let y=n.hemi[g];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(m),g++}}}return{setup:o,setupView:c,state:n}}function Vf(i){let e=new bv(i),t=[],n=[],s=[];function r(p){f.camera=p,t.length=0,n.length=0,s.length=0}function a(p){t.push(p)}function o(p){n.push(p)}function c(p){s.push(p)}function l(){e.setup(t)}function h(p){e.setupView(t,p)}let f={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:l,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function Tv(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Vf(i),e.set(s,[o])):r>=a.length?(o=new Vf(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var wv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Av=`uniform sampler2D shadow_pass;
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
}`,Rv=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],Cv=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],Wf=new gt,po=new N,_h=new N;function Pv(i,e,t){let n=new Hr,s=new He,r=new He,a=new hn,o=new Xr,c=new Il,l={},h=t.maxTextureSize,f={[Fs]:$n,[$n]:Fs,[Bn]:Bn},p=new Jt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:wv,fragmentShader:Av}),u=p.clone();u.defines.HORIZONTAL_PASS=1;let d=new Ft;d.setAttribute("position",new Rt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Fe(d,p),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ir;let m=this.type;this.render=function(w,A,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;this.type===Bd&&(yt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ir);let b=i.getRenderTarget(),C=i.getActiveCubeFace(),F=i.getActiveMipmapLevel(),S=i.state;S.setBlending(Rn),S.buffers.depth.getReversed()===!0?S.buffers.color.setClear(0,0,0,0):S.buffers.color.setClear(1,1,1,1),S.buffers.depth.setTest(!0),S.setScissorTest(!1);let L=m!==this.type;L&&A.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(H=>H.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,H=w.length;P<H;P++){let Y=w[P],k=Y.shadow;if(k===void 0){yt("WebGLShadowMap:",Y,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);let V=k.getFrameExtents();s.multiply(V),r.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/V.x),s.x=r.x*V.x,k.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/V.y),s.y=r.y*V.y,k.mapSize.y=r.y));let z=i.state.buffers.depth.getReversed();if(k.camera._reversedDepth=z,k.map===null||L===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Zr){if(Y.isPointLight){yt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new dn(s.x,s.y,{format:Gs,type:yn,minFilter:Ln,magFilter:Ln,generateMipmaps:!1}),k.map.texture.name=Y.name+".shadowMap",k.map.depthTexture=new Fi(s.x,s.y,Hi),k.map.depthTexture.name=Y.name+".shadowMapDepth",k.map.depthTexture.format=ss,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=An,k.map.depthTexture.magFilter=An}else Y.isPointLight?(k.map=new Fc(s.x),k.map.depthTexture=new wl(s.x,Ki)):(k.map=new dn(s.x,s.y),k.map.depthTexture=new Fi(s.x,s.y,Ki)),k.map.depthTexture.name=Y.name+".shadowMap",k.map.depthTexture.format=ss,this.type===ir?(k.map.depthTexture.compareFunction=z?Lc:Dc,k.map.depthTexture.minFilter=Ln,k.map.depthTexture.magFilter=Ln):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=An,k.map.depthTexture.magFilter=An);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==s.x||k.map.height!==s.y)&&k.map.setSize(s.x,s.y);let G=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();Y.isPointLight!==!0&&k.updateMatrices(Y,x);for(let q=0;q<G;q++){let fe=k.getCamera(q);if(Y.isPointLight){let be=k.camera,Ce=k.matrix,ze=Y.distance||be.far;ze!==be.far&&(be.far=ze,be.updateProjectionMatrix()),po.setFromMatrixPosition(Y.matrixWorld),be.position.copy(po),_h.copy(be.position),_h.add(Rv[q]),be.up.copy(Cv[q]),be.lookAt(_h),be.updateMatrixWorld(),Ce.makeTranslation(-po.x,-po.y,-po.z),Wf.multiplyMatrices(be.projectionMatrix,be.matrixWorldInverse),k._frustum.setFromProjectionMatrix(Wf,be.coordinateSystem,be.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)i.setRenderTarget(k.map,q),i.clear();else{q===0&&(i.setRenderTarget(k.map),i.clear());let be=k.getViewport(q);a.set(r.x*be.x,r.y*be.y,r.x*be.z,r.y*be.w),S.viewport(a)}n=k.getFrustum(q),v(A,x,fe,Y,this.type)}k.isPointLightShadow!==!0&&this.type===Zr&&E(k,x),k.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(b,C,F)};function E(w,A){let x=e.update(_);p.defines.VSM_SAMPLES!==w.blurSamples&&(p.defines.VSM_SAMPLES=w.blurSamples,u.defines.VSM_SAMPLES=w.blurSamples,p.needsUpdate=!0,u.needsUpdate=!0),w.mapPass===null?w.mapPass=new dn(s.x,s.y,{format:Gs,type:yn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),p.uniforms.shadow_pass.value=w.map.depthTexture,p.uniforms.resolution.value.set(w.map.width,w.map.height),p.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(A,null,x,p,_,null),u.uniforms.shadow_pass.value=w.mapPass.texture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(A,null,x,u,_,null)}function T(w,A,x,b){let C=null,F=x.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(F!==void 0)C=F;else if(C=x.isPointLight===!0?c:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let S=C.uuid,L=A.uuid,P=l[S];P===void 0&&(P={},l[S]=P);let H=P[L];H===void 0&&(H=C.clone(),P[L]=H,A.addEventListener("dispose",y)),C=H}if(C.visible=A.visible,C.wireframe=A.wireframe,b===Zr?C.side=A.shadowSide!==null?A.shadowSide:A.side:C.side=A.shadowSide!==null?A.shadowSide:f[A.side],C.alphaMap=A.alphaMap,C.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,C.map=A.map,C.clipShadows=A.clipShadows,C.clippingPlanes=A.clippingPlanes,C.clipIntersection=A.clipIntersection,C.displacementMap=A.displacementMap,C.displacementScale=A.displacementScale,C.displacementBias=A.displacementBias,C.wireframeLinewidth=A.wireframeLinewidth,C.linewidth=A.linewidth,x.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let S=i.properties.get(C);S.light=x}return C}function v(w,A,x,b,C){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&C===Zr)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,w.matrixWorld);let L=e.update(w),P=w.material;if(Array.isArray(P)){let H=L.groups;for(let Y=0,k=H.length;Y<k;Y++){let V=H[Y],z=P[V.materialIndex];if(z&&z.visible){let G=T(w,z,b,C);w.onBeforeShadow(i,w,A,x,L,G,V),i.renderBufferDirect(x,null,L,G,w,V),w.onAfterShadow(i,w,A,x,L,G,V)}}}else if(P.visible){let H=T(w,P,b,C);w.onBeforeShadow(i,w,A,x,L,H,null),i.renderBufferDirect(x,null,L,H,w,null),w.onAfterShadow(i,w,A,x,L,H,null)}}let S=w.children;for(let L=0,P=S.length;L<P;L++)v(S[L],A,x,b,C)}function y(w){w.target.removeEventListener("dispose",y);for(let x in l){let b=l[x],C=w.target.uuid;C in b&&(b[C].dispose(),delete b[C])}}}function Iv(i,e){function t(){let B=!1,Me=new hn,ae=null,Ie=new hn(0,0,0,0);return{setMask:function(Ae){ae!==Ae&&!B&&(i.colorMask(Ae,Ae,Ae,Ae),ae=Ae)},setLocked:function(Ae){B=Ae},setClear:function(Ae,U,ye,oe,Ke){Ke===!0&&(Ae*=oe,U*=oe,ye*=oe),Me.set(Ae,U,ye,oe),Ie.equals(Me)===!1&&(i.clearColor(Ae,U,ye,oe),Ie.copy(Me))},reset:function(){B=!1,ae=null,Ie.set(-1,0,0,0)}}}function n(){let B=!1,Me=!1,ae=null,Ie=null,Ae=null;return{setReversed:function(U){if(Me!==U){let ye=e.get("EXT_clip_control");U?ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.ZERO_TO_ONE_EXT):ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.NEGATIVE_ONE_TO_ONE_EXT),Me=U;let oe=Ae;Ae=null,this.setClear(oe)}},getReversed:function(){return Me},setTest:function(U){U?ue(i.DEPTH_TEST):we(i.DEPTH_TEST)},setMask:function(U){ae!==U&&!B&&(i.depthMask(U),ae=U)},setFunc:function(U){if(Me&&(U=mf[U]),Ie!==U){switch(U){case hl:i.depthFunc(i.NEVER);break;case dl:i.depthFunc(i.ALWAYS);break;case fl:i.depthFunc(i.LESS);break;case Ir:i.depthFunc(i.LEQUAL);break;case pl:i.depthFunc(i.EQUAL);break;case ml:i.depthFunc(i.GEQUAL);break;case gl:i.depthFunc(i.GREATER);break;case xl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ie=U}},setLocked:function(U){B=U},setClear:function(U){Ae!==U&&(Ae=U,Me&&(U=1-U),i.clearDepth(U))},reset:function(){B=!1,ae=null,Ie=null,Ae=null,Me=!1}}}function s(){let B=!1,Me=null,ae=null,Ie=null,Ae=null,U=null,ye=null,oe=null,Ke=null;return{setTest:function(nt){B||(nt?ue(i.STENCIL_TEST):we(i.STENCIL_TEST))},setMask:function(nt){Me!==nt&&!B&&(i.stencilMask(nt),Me=nt)},setFunc:function(nt,bt,At){(ae!==nt||Ie!==bt||Ae!==At)&&(i.stencilFunc(nt,bt,At),ae=nt,Ie=bt,Ae=At)},setOp:function(nt,bt,At){(U!==nt||ye!==bt||oe!==At)&&(i.stencilOp(nt,bt,At),U=nt,ye=bt,oe=At)},setLocked:function(nt){B=nt},setClear:function(nt){Ke!==nt&&(i.clearStencil(nt),Ke=nt)},reset:function(){B=!1,Me=null,ae=null,Ie=null,Ae=null,U=null,ye=null,oe=null,Ke=null}}}let r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap,h={},f={},p={},u=new WeakMap,d=[],_=null,g=!1,m=null,E=null,T=null,v=null,y=null,w=null,A=null,x=new Qe(0,0,0),b=0,C=!1,F=null,S=null,L=null,P=null,H=null,Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,V=0,z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(z)[1]),k=V>=1):z.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),k=V>=2);let G=null,q={},fe=i.getParameter(i.SCISSOR_BOX),be=i.getParameter(i.VIEWPORT),Ce=new hn().fromArray(fe),ze=new hn().fromArray(be);function et(B,Me,ae,Ie){let Ae=new Uint8Array(4),U=i.createTexture();i.bindTexture(B,U),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ye=0;ye<ae;ye++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(Me,0,i.RGBA,1,1,Ie,0,i.RGBA,i.UNSIGNED_BYTE,Ae):i.texImage2D(Me+ye,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ae);return U}let Q={};Q[i.TEXTURE_2D]=et(i.TEXTURE_2D,i.TEXTURE_2D,1),Q[i.TEXTURE_CUBE_MAP]=et(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[i.TEXTURE_2D_ARRAY]=et(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Q[i.TEXTURE_3D]=et(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ue(i.DEPTH_TEST),a.setFunc(Ir),ie(!1),le(ku),ue(i.CULL_FACE),re(Rn);function ue(B){h[B]!==!0&&(i.enable(B),h[B]=!0)}function we(B){h[B]!==!1&&(i.disable(B),h[B]=!1)}function me(B,Me){return p[B]!==Me?(i.bindFramebuffer(B,Me),p[B]=Me,B===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=Me),B===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=Me),!0):!1}function Pe(B,Me){let ae=d,Ie=!1;if(B){ae=u.get(Me),ae===void 0&&(ae=[],u.set(Me,ae));let Ae=B.textures;if(ae.length!==Ae.length||ae[0]!==i.COLOR_ATTACHMENT0){for(let U=0,ye=Ae.length;U<ye;U++)ae[U]=i.COLOR_ATTACHMENT0+U;ae.length=Ae.length,Ie=!0}}else ae[0]!==i.BACK&&(ae[0]=i.BACK,Ie=!0);Ie&&i.drawBuffers(ae)}function Z(B){return _!==B?(i.useProgram(B),_=B,!0):!1}let Be={[Bi]:i.FUNC_ADD,[Hd]:i.FUNC_SUBTRACT,[zd]:i.FUNC_REVERSE_SUBTRACT};Be[Gd]=i.MIN,Be[kd]=i.MAX;let ne={[sr]:i.ZERO,[Vd]:i.ONE,[Wd]:i.SRC_COLOR,[Xu]:i.SRC_ALPHA,[Zd]:i.SRC_ALPHA_SATURATE,[Ja]:i.DST_COLOR,[$a]:i.DST_ALPHA,[Xd]:i.ONE_MINUS_SRC_COLOR,[Yu]:i.ONE_MINUS_SRC_ALPHA,[qd]:i.ONE_MINUS_DST_COLOR,[Yd]:i.ONE_MINUS_DST_ALPHA,[$d]:i.CONSTANT_COLOR,[Jd]:i.ONE_MINUS_CONSTANT_COLOR,[Kd]:i.CONSTANT_ALPHA,[Qd]:i.ONE_MINUS_CONSTANT_ALPHA};function re(B,Me,ae,Ie,Ae,U,ye,oe,Ke,nt){if(B===Rn){g===!0&&(we(i.BLEND),g=!1);return}if(g===!1&&(ue(i.BLEND),g=!0),B!==Xl){if(B!==m||nt!==C){if((E!==Bi||y!==Bi)&&(i.blendEquation(i.FUNC_ADD),E=Bi,y=Bi),nt)switch(B){case Os:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case nn:i.blendFunc(i.ONE,i.ONE);break;case Vu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Wu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:St("WebGLState: Invalid blending: ",B);break}else switch(B){case Os:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case nn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Vu:St("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Wu:St("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:St("WebGLState: Invalid blending: ",B);break}T=null,v=null,w=null,A=null,x.set(0,0,0),b=0,m=B,C=nt}return}Ae=Ae||Me,U=U||ae,ye=ye||Ie,(Me!==E||Ae!==y)&&(i.blendEquationSeparate(Be[Me],Be[Ae]),E=Me,y=Ae),(ae!==T||Ie!==v||U!==w||ye!==A)&&(i.blendFuncSeparate(ne[ae],ne[Ie],ne[U],ne[ye]),T=ae,v=Ie,w=U,A=ye),(oe.equals(x)===!1||Ke!==b)&&(i.blendColor(oe.r,oe.g,oe.b,Ke),x.copy(oe),b=Ke),m=B,C=!1}function J(B,Me){B.side===Bn?we(i.CULL_FACE):ue(i.CULL_FACE);let ae=B.side===$n;Me&&(ae=!ae),ie(ae),B.blending===Os&&B.transparent===!1?re(Rn):re(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),r.setMask(B.colorWrite);let Ie=B.stencilWrite;o.setTest(Ie),Ie&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Ne(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?ue(i.SAMPLE_ALPHA_TO_COVERAGE):we(i.SAMPLE_ALPHA_TO_COVERAGE)}function ie(B){F!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),F=B)}function le(B){B!==Fd?(ue(i.CULL_FACE),B!==S&&(B===ku?i.cullFace(i.BACK):B===Od?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):we(i.CULL_FACE),S=B}function Oe(B){B!==L&&(k&&i.lineWidth(B),L=B)}function Ne(B,Me,ae){B?(ue(i.POLYGON_OFFSET_FILL),(P!==Me||H!==ae)&&(P=Me,H=ae,a.getReversed()&&(Me=-Me),i.polygonOffset(Me,ae))):we(i.POLYGON_OFFSET_FILL)}function qe(B){B?ue(i.SCISSOR_TEST):we(i.SCISSOR_TEST)}function Je(B){B===void 0&&(B=i.TEXTURE0+Y-1),G!==B&&(i.activeTexture(B),G=B)}function X(B,Me,ae){ae===void 0&&(G===null?ae=i.TEXTURE0+Y-1:ae=G);let Ie=q[ae];Ie===void 0&&(Ie={type:void 0,texture:void 0},q[ae]=Ie),(Ie.type!==B||Ie.texture!==Me)&&(G!==ae&&(i.activeTexture(ae),G=ae),i.bindTexture(B,Me||Q[B]),Ie.type=B,Ie.texture=Me)}function at(){let B=q[G];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function lt(){try{i.compressedTexImage2D(...arguments)}catch(B){St("WebGLState:",B)}}function O(){try{i.compressedTexImage3D(...arguments)}catch(B){St("WebGLState:",B)}}function M(){try{i.texSubImage2D(...arguments)}catch(B){St("WebGLState:",B)}}function K(){try{i.texSubImage3D(...arguments)}catch(B){St("WebGLState:",B)}}function te(){try{i.compressedTexSubImage2D(...arguments)}catch(B){St("WebGLState:",B)}}function he(){try{i.compressedTexSubImage3D(...arguments)}catch(B){St("WebGLState:",B)}}function Ve(){try{i.texStorage2D(...arguments)}catch(B){St("WebGLState:",B)}}function Ge(){try{i.texStorage3D(...arguments)}catch(B){St("WebGLState:",B)}}function Se(){try{i.texImage2D(...arguments)}catch(B){St("WebGLState:",B)}}function ve(){try{i.texImage3D(...arguments)}catch(B){St("WebGLState:",B)}}function $e(B){return f[B]!==void 0?f[B]:i.getParameter(B)}function ct(B,Me){f[B]!==Me&&(i.pixelStorei(B,Me),f[B]=Me)}function D(B){Ce.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),Ce.copy(B))}function $(B){ze.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),ze.copy(B))}function ce(B,Me){let ae=l.get(Me);ae===void 0&&(ae=new WeakMap,l.set(Me,ae));let Ie=ae.get(B);Ie===void 0&&(Ie=i.getUniformBlockIndex(Me,B.name),ae.set(B,Ie))}function _e(B,Me){let Ie=l.get(Me).get(B);c.get(Me)!==Ie&&(i.uniformBlockBinding(Me,Ie,B.__bindingPointIndex),c.set(Me,Ie))}function Ue(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},f={},G=null,q={},p={},u=new WeakMap,d=[],_=null,g=!1,m=null,E=null,T=null,v=null,y=null,w=null,A=null,x=new Qe(0,0,0),b=0,C=!1,F=null,S=null,L=null,P=null,H=null,Ce.set(0,0,i.canvas.width,i.canvas.height),ze.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ue,disable:we,bindFramebuffer:me,drawBuffers:Pe,useProgram:Z,setBlending:re,setMaterial:J,setFlipSided:ie,setCullFace:le,setLineWidth:Oe,setPolygonOffset:Ne,setScissorTest:qe,activeTexture:Je,bindTexture:X,unbindTexture:at,compressedTexImage2D:lt,compressedTexImage3D:O,texImage2D:Se,texImage3D:ve,pixelStorei:ct,getParameter:$e,updateUBOMapping:ce,uniformBlockBinding:_e,texStorage2D:Ve,texStorage3D:Ge,texSubImage2D:M,texSubImage3D:K,compressedTexSubImage2D:te,compressedTexSubImage3D:he,scissor:D,viewport:$,reset:Ue}}function Dv(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new He,h=new WeakMap,f=new Set,p,u=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(O,M){return d?new OffscreenCanvas(O,M):ba("canvas")}function g(O,M,K){let te=1,he=lt(O);if((he.width>K||he.height>K)&&(te=K/Math.max(he.width,he.height)),te<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){let Ve=Math.floor(te*he.width),Ge=Math.floor(te*he.height);p===void 0&&(p=_(Ve,Ge));let Se=M?_(Ve,Ge):p;return Se.width=Ve,Se.height=Ge,Se.getContext("2d").drawImage(O,0,0,Ve,Ge),yt("WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+Ve+"x"+Ge+")."),Se}else return"data"in O&&yt("WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),O;return O}function m(O){return O.generateMipmaps}function E(O){i.generateMipmap(O)}function T(O){return O.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?i.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(O,M,K,te,he,Ve=!1){if(O!==null){if(i[O]!==void 0)return i[O];yt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let Ge;te&&(Ge=e.get("EXT_texture_norm16"),Ge||yt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Se=M;if(M===i.RED&&(K===i.FLOAT&&(Se=i.R32F),K===i.HALF_FLOAT&&(Se=i.R16F),K===i.UNSIGNED_BYTE&&(Se=i.R8),K===i.UNSIGNED_SHORT&&Ge&&(Se=Ge.R16_EXT),K===i.SHORT&&Ge&&(Se=Ge.R16_SNORM_EXT)),M===i.RED_INTEGER&&(K===i.UNSIGNED_BYTE&&(Se=i.R8UI),K===i.UNSIGNED_SHORT&&(Se=i.R16UI),K===i.UNSIGNED_INT&&(Se=i.R32UI),K===i.BYTE&&(Se=i.R8I),K===i.SHORT&&(Se=i.R16I),K===i.INT&&(Se=i.R32I)),M===i.RG&&(K===i.FLOAT&&(Se=i.RG32F),K===i.HALF_FLOAT&&(Se=i.RG16F),K===i.UNSIGNED_BYTE&&(Se=i.RG8),K===i.UNSIGNED_SHORT&&Ge&&(Se=Ge.RG16_EXT),K===i.SHORT&&Ge&&(Se=Ge.RG16_SNORM_EXT)),M===i.RG_INTEGER&&(K===i.UNSIGNED_BYTE&&(Se=i.RG8UI),K===i.UNSIGNED_SHORT&&(Se=i.RG16UI),K===i.UNSIGNED_INT&&(Se=i.RG32UI),K===i.BYTE&&(Se=i.RG8I),K===i.SHORT&&(Se=i.RG16I),K===i.INT&&(Se=i.RG32I)),M===i.RGB_INTEGER&&(K===i.UNSIGNED_BYTE&&(Se=i.RGB8UI),K===i.UNSIGNED_SHORT&&(Se=i.RGB16UI),K===i.UNSIGNED_INT&&(Se=i.RGB32UI),K===i.BYTE&&(Se=i.RGB8I),K===i.SHORT&&(Se=i.RGB16I),K===i.INT&&(Se=i.RGB32I)),M===i.RGBA_INTEGER&&(K===i.UNSIGNED_BYTE&&(Se=i.RGBA8UI),K===i.UNSIGNED_SHORT&&(Se=i.RGBA16UI),K===i.UNSIGNED_INT&&(Se=i.RGBA32UI),K===i.BYTE&&(Se=i.RGBA8I),K===i.SHORT&&(Se=i.RGBA16I),K===i.INT&&(Se=i.RGBA32I)),M===i.RGB&&(K===i.UNSIGNED_SHORT&&Ge&&(Se=Ge.RGB16_EXT),K===i.SHORT&&Ge&&(Se=Ge.RGB16_SNORM_EXT),K===i.UNSIGNED_INT_5_9_9_9_REV&&(Se=i.RGB9_E5),K===i.UNSIGNED_INT_10F_11F_11F_REV&&(Se=i.R11F_G11F_B10F)),M===i.RGBA){let ve=Ve?Ea:Wt.getTransfer(he);K===i.FLOAT&&(Se=i.RGBA32F),K===i.HALF_FLOAT&&(Se=i.RGBA16F),K===i.UNSIGNED_BYTE&&(Se=ve===jt?i.SRGB8_ALPHA8:i.RGBA8),K===i.UNSIGNED_SHORT&&Ge&&(Se=Ge.RGBA16_EXT),K===i.SHORT&&Ge&&(Se=Ge.RGBA16_SNORM_EXT),K===i.UNSIGNED_SHORT_4_4_4_4&&(Se=i.RGBA4),K===i.UNSIGNED_SHORT_5_5_5_1&&(Se=i.RGB5_A1)}return(Se===i.R16F||Se===i.R32F||Se===i.RG16F||Se===i.RG32F||Se===i.RGBA16F||Se===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Se}function y(O,M){let K;return O?M===null||M===Ki||M===zs?K=i.DEPTH24_STENCIL8:M===Hi?K=i.DEPTH32F_STENCIL8:M===$r&&(K=i.DEPTH24_STENCIL8,yt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ki||M===zs?K=i.DEPTH_COMPONENT24:M===Hi?K=i.DEPTH_COMPONENT32F:M===$r&&(K=i.DEPTH_COMPONENT16),K}function w(O,M){return m(O)===!0||O.isFramebufferTexture&&O.minFilter!==An&&O.minFilter!==Ln?Math.log2(Math.max(M.width,M.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?M.mipmaps.length:1}function A(O){let M=O.target;M.removeEventListener("dispose",A),b(M),M.isVideoTexture&&h.delete(M),M.isHTMLTexture&&f.delete(M)}function x(O){let M=O.target;M.removeEventListener("dispose",x),F(M)}function b(O){let M=n.get(O);if(M.__webglInit===void 0)return;let K=O.source,te=u.get(K);if(te){let he=te[M.__cacheKey];he.usedTimes--,he.usedTimes===0&&C(O),Object.keys(te).length===0&&u.delete(K)}n.remove(O)}function C(O){let M=n.get(O);i.deleteTexture(M.__webglTexture);let K=O.source,te=u.get(K);delete te[M.__cacheKey],a.memory.textures--}function F(O){let M=n.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),n.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(M.__webglFramebuffer[te]))for(let he=0;he<M.__webglFramebuffer[te].length;he++)i.deleteFramebuffer(M.__webglFramebuffer[te][he]);else i.deleteFramebuffer(M.__webglFramebuffer[te]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[te])}else{if(Array.isArray(M.__webglFramebuffer))for(let te=0;te<M.__webglFramebuffer.length;te++)i.deleteFramebuffer(M.__webglFramebuffer[te]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let te=0;te<M.__webglColorRenderbuffer.length;te++)M.__webglColorRenderbuffer[te]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[te]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let K=O.textures;for(let te=0,he=K.length;te<he;te++){let Ve=n.get(K[te]);Ve.__webglTexture&&(i.deleteTexture(Ve.__webglTexture),a.memory.textures--),n.remove(K[te])}n.remove(O)}let S=0;function L(){S=0}function P(){return S}function H(O){S=O}function Y(){let O=S;return O>=s.maxTextures&&yt("WebGLTextures: Trying to use "+(O+1)+" texture units while this GPU supports only "+s.maxTextures),S+=1,O}function k(O){let M=[];return M.push(O.wrapS),M.push(O.wrapT),M.push(O.wrapR||0),M.push(O.magFilter),M.push(O.minFilter),M.push(O.anisotropy),M.push(O.internalFormat),M.push(O.format),M.push(O.type),M.push(O.generateMipmaps),M.push(O.premultiplyAlpha),M.push(O.flipY),M.push(O.unpackAlignment),M.push(O.colorSpace),M.join()}function V(O,M){let K=n.get(O);if(O.isVideoTexture&&X(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&K.__version!==O.version){let te=O.image;if(te===null)yt("WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)yt("WebGLRenderer: Texture marked for update but image is incomplete");else{we(K,O,M);return}}else O.isExternalTexture&&(K.__webglTexture=O.sourceTexture?O.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,K.__webglTexture,i.TEXTURE0+M)}function z(O,M){let K=n.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&K.__version!==O.version){we(K,O,M);return}else O.isExternalTexture&&(K.__webglTexture=O.sourceTexture?O.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,K.__webglTexture,i.TEXTURE0+M)}function G(O,M){let K=n.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&K.__version!==O.version){we(K,O,M);return}t.bindTexture(i.TEXTURE_3D,K.__webglTexture,i.TEXTURE0+M)}function q(O,M){let K=n.get(O);if(O.isCubeDepthTexture!==!0&&O.version>0&&K.__version!==O.version){me(K,O,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture,i.TEXTURE0+M)}let fe={[wn]:i.REPEAT,[Li]:i.CLAMP_TO_EDGE,[vl]:i.MIRRORED_REPEAT},be={[An]:i.NEAREST,[tf]:i.NEAREST_MIPMAP_NEAREST,[so]:i.NEAREST_MIPMAP_LINEAR,[Ln]:i.LINEAR,[Zl]:i.LINEAR_MIPMAP_NEAREST,[cs]:i.LINEAR_MIPMAP_LINEAR},Ce={[af]:i.NEVER,[hf]:i.ALWAYS,[of]:i.LESS,[Dc]:i.LEQUAL,[lf]:i.EQUAL,[Lc]:i.GEQUAL,[cf]:i.GREATER,[uf]:i.NOTEQUAL};function ze(O,M){if(M.type===Hi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Ln||M.magFilter===Zl||M.magFilter===so||M.magFilter===cs||M.minFilter===Ln||M.minFilter===Zl||M.minFilter===so||M.minFilter===cs)&&yt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(O,i.TEXTURE_WRAP_S,fe[M.wrapS]),i.texParameteri(O,i.TEXTURE_WRAP_T,fe[M.wrapT]),(O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY)&&i.texParameteri(O,i.TEXTURE_WRAP_R,fe[M.wrapR]),i.texParameteri(O,i.TEXTURE_MAG_FILTER,be[M.magFilter]),i.texParameteri(O,i.TEXTURE_MIN_FILTER,be[M.minFilter]),M.compareFunction&&(i.texParameteri(O,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(O,i.TEXTURE_COMPARE_FUNC,Ce[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===An||M.minFilter!==so&&M.minFilter!==cs||M.type===Hi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let K=e.get("EXT_texture_filter_anisotropic");i.texParameterf(O,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function et(O,M){let K=!1;O.__webglInit===void 0&&(O.__webglInit=!0,M.addEventListener("dispose",A));let te=M.source,he=u.get(te);he===void 0&&(he={},u.set(te,he));let Ve=k(M);if(Ve!==O.__cacheKey){he[Ve]===void 0&&(he[Ve]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,K=!0),he[Ve].usedTimes++;let Ge=he[O.__cacheKey];Ge!==void 0&&(he[O.__cacheKey].usedTimes--,Ge.usedTimes===0&&C(M)),O.__cacheKey=Ve,O.__webglTexture=he[Ve].texture}return K}function Q(O,M,K){return Math.floor(Math.floor(O/K)/M)}function ue(O,M,K,te){let Ve=O.updateRanges;if(Ve.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,K,te,M.data);else{Ve.sort((ct,D)=>ct.start-D.start);let Ge=0;for(let ct=1;ct<Ve.length;ct++){let D=Ve[Ge],$=Ve[ct],ce=D.start+D.count,_e=Q($.start,M.width,4),Ue=Q(D.start,M.width,4);$.start<=ce+1&&_e===Ue&&Q($.start+$.count-1,M.width,4)===_e?D.count=Math.max(D.count,$.start+$.count-D.start):(++Ge,Ve[Ge]=$)}Ve.length=Ge+1;let Se=t.getParameter(i.UNPACK_ROW_LENGTH),ve=t.getParameter(i.UNPACK_SKIP_PIXELS),$e=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let ct=0,D=Ve.length;ct<D;ct++){let $=Ve[ct],ce=Math.floor($.start/4),_e=Math.ceil($.count/4),Ue=ce%M.width,B=Math.floor(ce/M.width),Me=_e,ae=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Ue),t.pixelStorei(i.UNPACK_SKIP_ROWS,B),t.texSubImage2D(i.TEXTURE_2D,0,Ue,B,Me,ae,K,te,M.data)}O.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Se),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ve),t.pixelStorei(i.UNPACK_SKIP_ROWS,$e)}}function we(O,M,K){let te=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(te=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(te=i.TEXTURE_3D);let he=et(O,M),Ve=M.source;t.bindTexture(te,O.__webglTexture,i.TEXTURE0+K);let Ge=n.get(Ve);if(Ve.version!==Ge.__version||he===!0){if(t.activeTexture(i.TEXTURE0+K),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){let ae=Wt.getPrimaries(Wt.workingColorSpace),Ie=M.colorSpace===Qi?null:Wt.getPrimaries(M.colorSpace),Ae=M.colorSpace===Qi||ae===Ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae)}t.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment);let ve=g(M.image,!1,s.maxTextureSize);ve=at(M,ve);let $e=r.convert(M.format,M.colorSpace),ct=r.convert(M.type),D=v(M.internalFormat,$e,ct,M.normalized,M.colorSpace,M.isVideoTexture);ze(te,M);let $,ce=M.mipmaps,_e=M.isVideoTexture!==!0,Ue=Ge.__version===void 0||he===!0,B=Ve.dataReady,Me=w(M,ve);if(M.isDepthTexture)D=y(M.format===us,M.type),Ue&&(_e?t.texStorage2D(i.TEXTURE_2D,1,D,ve.width,ve.height):t.texImage2D(i.TEXTURE_2D,0,D,ve.width,ve.height,0,$e,ct,null));else if(M.isDataTexture)if(ce.length>0){_e&&Ue&&t.texStorage2D(i.TEXTURE_2D,Me,D,ce[0].width,ce[0].height);for(let ae=0,Ie=ce.length;ae<Ie;ae++)$=ce[ae],_e?B&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,$.width,$.height,$e,ct,$.data):t.texImage2D(i.TEXTURE_2D,ae,D,$.width,$.height,0,$e,ct,$.data);M.generateMipmaps=!1}else _e?(Ue&&t.texStorage2D(i.TEXTURE_2D,Me,D,ve.width,ve.height),B&&ue(M,ve,$e,ct)):t.texImage2D(i.TEXTURE_2D,0,D,ve.width,ve.height,0,$e,ct,ve.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){_e&&Ue&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Me,D,ce[0].width,ce[0].height,ve.depth);for(let ae=0,Ie=ce.length;ae<Ie;ae++)if($=ce[ae],M.format!==Qn)if($e!==null)if(_e){if(B)if(M.layerUpdates.size>0){let Ae=lh($.width,$.height,M.format,M.type);for(let U of M.layerUpdates){let ye=$.data.subarray(U*Ae/$.data.BYTES_PER_ELEMENT,(U+1)*Ae/$.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,U,$.width,$.height,1,$e,ye)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,$.width,$.height,ve.depth,$e,$.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ae,D,$.width,$.height,ve.depth,0,$.data,0,0);else yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else _e?B&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,$.width,$.height,ve.depth,$e,ct,$.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ae,D,$.width,$.height,ve.depth,0,$e,ct,$.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{_e&&Ue&&t.texStorage2D(i.TEXTURE_2D,Me,D,ce[0].width,ce[0].height);for(let ae=0,Ie=ce.length;ae<Ie;ae++)$=ce[ae],M.format!==Qn?$e!==null?_e?B&&t.compressedTexSubImage2D(i.TEXTURE_2D,ae,0,0,$.width,$.height,$e,$.data):t.compressedTexImage2D(i.TEXTURE_2D,ae,D,$.width,$.height,0,$.data):yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_e?B&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,$.width,$.height,$e,ct,$.data):t.texImage2D(i.TEXTURE_2D,ae,D,$.width,$.height,0,$e,ct,$.data)}else if(M.isDataArrayTexture)if(_e){if(Ue&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Me,D,ve.width,ve.height,ve.depth),B)if(M.layerUpdates.size>0){let ae=lh(ve.width,ve.height,M.format,M.type);for(let Ie of M.layerUpdates){let Ae=ve.data.subarray(Ie*ae/ve.data.BYTES_PER_ELEMENT,(Ie+1)*ae/ve.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ie,ve.width,ve.height,1,$e,ct,Ae)}M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ve.width,ve.height,ve.depth,$e,ct,ve.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,D,ve.width,ve.height,ve.depth,0,$e,ct,ve.data);else if(M.isData3DTexture)_e?(Ue&&t.texStorage3D(i.TEXTURE_3D,Me,D,ve.width,ve.height,ve.depth),B&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ve.width,ve.height,ve.depth,$e,ct,ve.data)):t.texImage3D(i.TEXTURE_3D,0,D,ve.width,ve.height,ve.depth,0,$e,ct,ve.data);else if(M.isFramebufferTexture){if(Ue)if(_e)t.texStorage2D(i.TEXTURE_2D,Me,D,ve.width,ve.height);else{let ae=ve.width,Ie=ve.height;for(let Ae=0;Ae<Me;Ae++)t.texImage2D(i.TEXTURE_2D,Ae,D,ae,Ie,0,$e,ct,null),ae>>=1,Ie>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in i){let ae=i.canvas;if(ae.hasAttribute("layoutsubtree")||ae.setAttribute("layoutsubtree","true"),ve.parentNode!==ae){ae.appendChild(ve),f.add(M),ae.onpaint=Ie=>{let Ae=Ie.changedElements;for(let U of f)Ae.includes(U.image)&&(U.needsUpdate=!0)},ae.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ve);else{let Ae=i.RGBA,U=i.RGBA,ye=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ae,U,ye,ve)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ce.length>0){if(_e&&Ue){let ae=lt(ce[0]);t.texStorage2D(i.TEXTURE_2D,Me,D,ae.width,ae.height)}for(let ae=0,Ie=ce.length;ae<Ie;ae++)$=ce[ae],_e?B&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,$e,ct,$):t.texImage2D(i.TEXTURE_2D,ae,D,$e,ct,$);M.generateMipmaps=!1}else if(_e){if(Ue){let ae=lt(ve);t.texStorage2D(i.TEXTURE_2D,Me,D,ae.width,ae.height)}B&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,$e,ct,ve)}else t.texImage2D(i.TEXTURE_2D,0,D,$e,ct,ve);m(M)&&E(te),Ge.__version=Ve.version,M.onUpdate&&M.onUpdate(M)}O.__version=M.version}function me(O,M,K){if(M.image.length!==6)return;let te=et(O,M),he=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+K);let Ve=n.get(he);if(he.version!==Ve.__version||te===!0){t.activeTexture(i.TEXTURE0+K);let Ge=Wt.getPrimaries(Wt.workingColorSpace),Se=M.colorSpace===Qi?null:Wt.getPrimaries(M.colorSpace),ve=M.colorSpace===Qi||Ge===Se?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let $e=M.isCompressedTexture||M.image[0].isCompressedTexture,ct=M.image[0]&&M.image[0].isDataTexture,D=[];for(let U=0;U<6;U++)!$e&&!ct?D[U]=g(M.image[U],!0,s.maxCubemapSize):D[U]=ct?M.image[U].image:M.image[U],D[U]=at(M,D[U]);let $=D[0],ce=r.convert(M.format,M.colorSpace),_e=r.convert(M.type),Ue=v(M.internalFormat,ce,_e,M.normalized,M.colorSpace),B=M.isVideoTexture!==!0,Me=Ve.__version===void 0||te===!0,ae=he.dataReady,Ie=w(M,$);ze(i.TEXTURE_CUBE_MAP,M);let Ae;if($e){B&&Me&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ie,Ue,$.width,$.height);for(let U=0;U<6;U++){Ae=D[U].mipmaps;for(let ye=0;ye<Ae.length;ye++){let oe=Ae[ye];M.format!==Qn?ce!==null?B?ae&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+U,ye,0,0,oe.width,oe.height,ce,oe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+U,ye,Ue,oe.width,oe.height,0,oe.data):yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+U,ye,0,0,oe.width,oe.height,ce,_e,oe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+U,ye,Ue,oe.width,oe.height,0,ce,_e,oe.data)}}}else{if(Ae=M.mipmaps,B&&Me){Ae.length>0&&Ie++;let U=lt(D[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ie,Ue,U.width,U.height)}for(let U=0;U<6;U++)if(ct){B?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,0,0,D[U].width,D[U].height,ce,_e,D[U].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,Ue,D[U].width,D[U].height,0,ce,_e,D[U].data);for(let ye=0;ye<Ae.length;ye++){let Ke=Ae[ye].image[U].image;B?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+U,ye+1,0,0,Ke.width,Ke.height,ce,_e,Ke.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+U,ye+1,Ue,Ke.width,Ke.height,0,ce,_e,Ke.data)}}else{B?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,0,0,ce,_e,D[U]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,Ue,ce,_e,D[U]);for(let ye=0;ye<Ae.length;ye++){let oe=Ae[ye];B?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+U,ye+1,0,0,ce,_e,oe.image[U]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+U,ye+1,Ue,ce,_e,oe.image[U])}}}m(M)&&E(i.TEXTURE_CUBE_MAP),Ve.__version=he.version,M.onUpdate&&M.onUpdate(M)}O.__version=M.version}function Pe(O,M,K,te,he,Ve){let Ge=r.convert(K.format,K.colorSpace),Se=r.convert(K.type),ve=v(K.internalFormat,Ge,Se,K.normalized,K.colorSpace),$e=n.get(M),ct=n.get(K);if(ct.__renderTarget=M,!$e.__hasExternalTextures){let D=Math.max(1,M.width>>Ve),$=Math.max(1,M.height>>Ve);he===i.TEXTURE_3D||he===i.TEXTURE_2D_ARRAY?t.texImage3D(he,Ve,ve,D,$,M.depth,0,Ge,Se,null):t.texImage2D(he,Ve,ve,D,$,0,Ge,Se,null)}t.bindFramebuffer(i.FRAMEBUFFER,O),Je(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,he,ct.__webglTexture,0,qe(M)):(he===i.TEXTURE_2D||he>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,te,he,ct.__webglTexture,Ve),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Z(O,M,K){if(i.bindRenderbuffer(i.RENDERBUFFER,O),M.depthBuffer){let te=M.depthTexture,he=te&&te.isDepthTexture?te.type:null,Ve=y(M.stencilBuffer,he),Ge=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Je(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qe(M),Ve,M.width,M.height):K?i.renderbufferStorageMultisample(i.RENDERBUFFER,qe(M),Ve,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Ve,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ge,i.RENDERBUFFER,O)}else{let te=M.textures;for(let he=0;he<te.length;he++){let Ve=te[he],Ge=r.convert(Ve.format,Ve.colorSpace),Se=r.convert(Ve.type),ve=v(Ve.internalFormat,Ge,Se,Ve.normalized,Ve.colorSpace);Je(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qe(M),ve,M.width,M.height):K?i.renderbufferStorageMultisample(i.RENDERBUFFER,qe(M),ve,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,ve,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Be(O,M,K){let te=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,O),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let he=n.get(M.depthTexture);if(he.__renderTarget=M,(!he.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),te){if(he.__webglInit===void 0&&(he.__webglInit=!0,M.depthTexture.addEventListener("dispose",A)),he.__webglTexture===void 0){he.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,he.__webglTexture),ze(i.TEXTURE_CUBE_MAP,M.depthTexture);let $e=r.convert(M.depthTexture.format),ct=r.convert(M.depthTexture.type),D;M.depthTexture.format===ss?D=i.DEPTH_COMPONENT24:M.depthTexture.format===us&&(D=i.DEPTH24_STENCIL8);for(let $=0;$<6;$++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,D,M.width,M.height,0,$e,ct,null)}}else V(M.depthTexture,0);let Ve=he.__webglTexture,Ge=qe(M),Se=te?i.TEXTURE_CUBE_MAP_POSITIVE_X+K:i.TEXTURE_2D,ve=M.depthTexture.format===us?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(M.depthTexture.format===ss)Je(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ve,Se,Ve,0,Ge):i.framebufferTexture2D(i.FRAMEBUFFER,ve,Se,Ve,0);else if(M.depthTexture.format===us)Je(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ve,Se,Ve,0,Ge):i.framebufferTexture2D(i.FRAMEBUFFER,ve,Se,Ve,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ne(O){let M=n.get(O),K=O.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==O.depthTexture){let te=O.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),te){let he=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,te.removeEventListener("dispose",he)};te.addEventListener("dispose",he),M.__depthDisposeCallback=he}M.__boundDepthTexture=te}if(O.depthTexture&&!M.__autoAllocateDepthBuffer)if(K)for(let te=0;te<6;te++)Be(M.__webglFramebuffer[te],O,te);else{let te=O.texture.mipmaps;te&&te.length>0?Be(M.__webglFramebuffer[0],O,0):Be(M.__webglFramebuffer,O,0)}else if(K){M.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[te]),M.__webglDepthbuffer[te]===void 0)M.__webglDepthbuffer[te]=i.createRenderbuffer(),Z(M.__webglDepthbuffer[te],O,!1);else{let he=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ve=M.__webglDepthbuffer[te];i.bindRenderbuffer(i.RENDERBUFFER,Ve),i.framebufferRenderbuffer(i.FRAMEBUFFER,he,i.RENDERBUFFER,Ve)}}else{let te=O.texture.mipmaps;if(te&&te.length>0?t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),Z(M.__webglDepthbuffer,O,!1);else{let he=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ve=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Ve),i.framebufferRenderbuffer(i.FRAMEBUFFER,he,i.RENDERBUFFER,Ve)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function re(O,M,K){let te=n.get(O);M!==void 0&&Pe(te.__webglFramebuffer,O,O.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),K!==void 0&&ne(O)}function J(O){let M=O.texture,K=n.get(O),te=n.get(M);O.addEventListener("dispose",x);let he=O.textures,Ve=O.isWebGLCubeRenderTarget===!0,Ge=he.length>1;if(Ge||(te.__webglTexture===void 0&&(te.__webglTexture=i.createTexture()),te.__version=M.version,a.memory.textures++),Ve){K.__webglFramebuffer=[];for(let Se=0;Se<6;Se++)if(M.mipmaps&&M.mipmaps.length>0){K.__webglFramebuffer[Se]=[];for(let ve=0;ve<M.mipmaps.length;ve++)K.__webglFramebuffer[Se][ve]=i.createFramebuffer()}else K.__webglFramebuffer[Se]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){K.__webglFramebuffer=[];for(let Se=0;Se<M.mipmaps.length;Se++)K.__webglFramebuffer[Se]=i.createFramebuffer()}else K.__webglFramebuffer=i.createFramebuffer();if(Ge)for(let Se=0,ve=he.length;Se<ve;Se++){let $e=n.get(he[Se]);$e.__webglTexture===void 0&&($e.__webglTexture=i.createTexture(),a.memory.textures++)}if(O.samples>0&&Je(O)===!1){K.__webglMultisampledFramebuffer=i.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let Se=0;Se<he.length;Se++){let ve=he[Se];K.__webglColorRenderbuffer[Se]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,K.__webglColorRenderbuffer[Se]);let $e=r.convert(ve.format,ve.colorSpace),ct=r.convert(ve.type),D=v(ve.internalFormat,$e,ct,ve.normalized,ve.colorSpace,O.isXRRenderTarget===!0),$=qe(O);i.renderbufferStorageMultisample(i.RENDERBUFFER,$,D,O.width,O.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,K.__webglColorRenderbuffer[Se])}i.bindRenderbuffer(i.RENDERBUFFER,null),O.depthBuffer&&(K.__webglDepthRenderbuffer=i.createRenderbuffer(),Z(K.__webglDepthRenderbuffer,O,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Ve){t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture),ze(i.TEXTURE_CUBE_MAP,M);for(let Se=0;Se<6;Se++)if(M.mipmaps&&M.mipmaps.length>0)for(let ve=0;ve<M.mipmaps.length;ve++)Pe(K.__webglFramebuffer[Se][ve],O,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,ve);else Pe(K.__webglFramebuffer[Se],O,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0);m(M)&&E(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ge){for(let Se=0,ve=he.length;Se<ve;Se++){let $e=he[Se],ct=n.get($e),D=i.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(D=O.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(D,ct.__webglTexture),ze(D,$e),Pe(K.__webglFramebuffer,O,$e,i.COLOR_ATTACHMENT0+Se,D,0),m($e)&&E(D)}t.unbindTexture()}else{let Se=i.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Se=O.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Se,te.__webglTexture),ze(Se,M),M.mipmaps&&M.mipmaps.length>0)for(let ve=0;ve<M.mipmaps.length;ve++)Pe(K.__webglFramebuffer[ve],O,M,i.COLOR_ATTACHMENT0,Se,ve);else Pe(K.__webglFramebuffer,O,M,i.COLOR_ATTACHMENT0,Se,0);m(M)&&E(Se),t.unbindTexture()}O.depthBuffer&&ne(O)}function ie(O){let M=O.textures;for(let K=0,te=M.length;K<te;K++){let he=M[K];if(m(he)){let Ve=T(O),Ge=n.get(he).__webglTexture;t.bindTexture(Ve,Ge),E(Ve),t.unbindTexture()}}}let le=[],Oe=[];function Ne(O){if(O.samples>0){if(Je(O)===!1){let M=O.textures,K=O.width,te=O.height,he=i.COLOR_BUFFER_BIT,Ve=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ge=n.get(O),Se=M.length>1;if(Se)for(let $e=0;$e<M.length;$e++)t.bindFramebuffer(i.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$e,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+$e,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer);let ve=O.texture.mipmaps;ve&&ve.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer);for(let $e=0;$e<M.length;$e++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(he|=i.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(he|=i.STENCIL_BUFFER_BIT)),Se){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ge.__webglColorRenderbuffer[$e]);let ct=n.get(M[$e]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ct,0)}i.blitFramebuffer(0,0,K,te,0,0,K,te,he,i.NEAREST),c===!0&&(le.length=0,Oe.length=0,le.push(i.COLOR_ATTACHMENT0+$e),O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&(le.push(Ve),Oe.push(Ve),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Oe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,le))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Se)for(let $e=0;$e<M.length;$e++){t.bindFramebuffer(i.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$e,i.RENDERBUFFER,Ge.__webglColorRenderbuffer[$e]);let ct=n.get(M[$e]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+$e,i.TEXTURE_2D,ct,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&c){let M=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function qe(O){return Math.min(s.maxSamples,O.samples)}function Je(O){let M=n.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function X(O){let M=a.render.frame;h.get(O)!==M&&(h.set(O,M),O.update())}function at(O,M){let K=O.colorSpace,te=O.format,he=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||K!==Sa&&K!==Qi&&(Wt.getTransfer(K)===jt?(te!==Qn||he!==Hn)&&yt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):St("WebGLTextures: Unsupported texture color space:",K)),M}function lt(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(l.width=O.naturalWidth||O.width,l.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(l.width=O.displayWidth,l.height=O.displayHeight):(l.width=O.width,l.height=O.height),l}this.allocateTextureUnit=Y,this.resetTextureUnits=L,this.getTextureUnits=P,this.setTextureUnits=H,this.setTexture2D=V,this.setTexture2DArray=z,this.setTexture3D=G,this.setTextureCube=q,this.rebindTextures=re,this.setupRenderTarget=J,this.updateRenderTargetMipmap=ie,this.updateMultisampleRenderTarget=Ne,this.setupDepthRenderbuffer=ne,this.setupFrameBufferTexture=Pe,this.useMultisampledRTT=Je,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Lv(i,e){function t(n,s=Qi){let r,a=Wt.getTransfer(s);if(n===Hn)return i.UNSIGNED_BYTE;if(n===Jl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Kl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ku)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Qu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===$u)return i.BYTE;if(n===Ju)return i.SHORT;if(n===$r)return i.UNSIGNED_SHORT;if(n===$l)return i.INT;if(n===Ki)return i.UNSIGNED_INT;if(n===Hi)return i.FLOAT;if(n===yn)return i.HALF_FLOAT;if(n===ju)return i.ALPHA;if(n===eh)return i.RGB;if(n===Qn)return i.RGBA;if(n===ss)return i.DEPTH_COMPONENT;if(n===us)return i.DEPTH_STENCIL;if(n===Ql)return i.RED;if(n===jl)return i.RED_INTEGER;if(n===Gs)return i.RG;if(n===ec)return i.RG_INTEGER;if(n===tc)return i.RGBA_INTEGER;if(n===ro||n===ao||n===oo||n===lo)if(a===jt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ro)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===oo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ro)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ao)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===oo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===lo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===nc||n===ic||n===sc||n===rc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===nc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ic)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===sc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===rc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ac||n===oc||n===lc||n===cc||n===uc||n===co||n===hc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ac||n===oc)return a===jt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===lc)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===cc)return r.COMPRESSED_R11_EAC;if(n===uc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===co)return r.COMPRESSED_RG11_EAC;if(n===hc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===dc||n===fc||n===pc||n===mc||n===gc||n===xc||n===vc||n===_c||n===yc||n===Mc||n===Sc||n===Ec||n===bc||n===Tc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===dc)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===fc)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===pc)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===mc)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===gc)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===xc)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===vc)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===_c)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===yc)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Mc)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Sc)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ec)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===bc)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Tc)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===wc||n===Ac||n===Rc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===wc)return a===jt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ac)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Rc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Cc||n===Pc||n===uo||n===Ic)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Cc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Pc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===uo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ic)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===zs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Uv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Nv=`
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

}`,Ah=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new La(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Jt({vertexShader:Uv,fragmentShader:Nv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Fe(new tn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Rh=class extends rs{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,f=null,p=null,u=null,d=null,_=typeof XRWebGLBinding<"u",g=new Ah,m={},E=t.getContextAttributes(),T=null,v=null,y=[],w=[],A=new He,x=null,b=null,C=new Xn;C.viewport=new hn;let F=new Xn;F.viewport=new hn;let S=[C,F],L=new Vl,P=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ue=y[Q];return ue===void 0&&(ue=new Fr,y[Q]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(Q){let ue=y[Q];return ue===void 0&&(ue=new Fr,y[Q]=ue),ue.getGripSpace()},this.getHand=function(Q){let ue=y[Q];return ue===void 0&&(ue=new Fr,y[Q]=ue),ue.getHandSpace()};function Y(Q){let ue=w.indexOf(Q.inputSource);if(ue===-1)return;let we=y[ue];we!==void 0&&(we.update(Q.inputSource,Q.frame,l||a),we.dispatchEvent({type:Q.type,data:Q.inputSource}))}function k(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",V);for(let Q=0;Q<y.length;Q++){let ue=w[Q];ue!==null&&(w[Q]=null,y[Q].disconnect(ue))}P=null,H=null,g.reset();for(let Q in m)delete m[Q];if(e.setRenderTarget(T),u=null,p=null,f=null,s=null,v=null,et.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(A.width,A.height,!1),b!==null){let Q=b.camera;Q.fov=b.fov,Q.zoom=b.zoom,Q.updateProjectionMatrix(),b=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&yt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,n.isPresenting===!0&&yt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Q){l=Q},this.getBaseLayer=function(){return p!==null?p:u},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return d},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(T=e.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",k),s.addEventListener("inputsourceschange",V),E.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let we=null,me=null,Pe=null;E.depth&&(Pe=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,we=E.stencil?us:ss,me=E.stencil?zs:Ki);let Z={colorFormat:t.RGBA8,depthFormat:Pe,scaleFactor:r};f=this.getBinding(),p=f.createProjectionLayer(Z),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),v=new dn(p.textureWidth,p.textureHeight,{format:Qn,type:Hn,depthTexture:new Fi(p.textureWidth,p.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,we),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}else{let we={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,t,we),s.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),v=new dn(u.framebufferWidth,u.framebufferHeight,{format:Qn,type:Hn,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),et.setContext(s),et.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function V(Q){for(let ue=0;ue<Q.removed.length;ue++){let we=Q.removed[ue],me=w.indexOf(we);me>=0&&(w[me]=null,y[me].disconnect(we))}for(let ue=0;ue<Q.added.length;ue++){let we=Q.added[ue],me=w.indexOf(we);if(me===-1){for(let Z=0;Z<y.length;Z++)if(Z>=w.length){w.push(we),me=Z;break}else if(w[Z]===null){w[Z]=we,me=Z;break}if(me===-1)break}let Pe=y[me];Pe&&Pe.connect(we)}}let z=new N,G=new N;function q(Q,ue,we){z.setFromMatrixPosition(ue.matrixWorld),G.setFromMatrixPosition(we.matrixWorld);let me=z.distanceTo(G),Pe=ue.projectionMatrix.elements,Z=we.projectionMatrix.elements,Be=Pe[14]/(Pe[10]-1),ne=Pe[14]/(Pe[10]+1),re=(Pe[9]+1)/Pe[5],J=(Pe[9]-1)/Pe[5],ie=(Pe[8]-1)/Pe[0],le=(Z[8]+1)/Z[0],Oe=Be*ie,Ne=Be*le,qe=me/(-ie+le),Je=qe*-ie;if(ue.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Je),Q.translateZ(qe),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Pe[10]===-1)Q.projectionMatrix.copy(ue.projectionMatrix),Q.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{let X=Be+qe,at=ne+qe,lt=Oe-Je,O=Ne+(me-Je),M=re*ne/at*X,K=J*ne/at*X;Q.projectionMatrix.makePerspective(lt,O,M,K,X,at),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function fe(Q,ue){ue===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ue.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let ue=Q.near,we=Q.far;g.texture!==null&&(g.depthNear>0&&(ue=g.depthNear),g.depthFar>0&&(we=g.depthFar)),L.near=F.near=C.near=ue,L.far=F.far=C.far=we,(P!==L.near||H!==L.far)&&(s.updateRenderState({depthNear:L.near,depthFar:L.far}),P=L.near,H=L.far),L.layers.mask=Q.layers.mask|6,C.layers.mask=L.layers.mask&-5,F.layers.mask=L.layers.mask&-3;let me=Q.parent,Pe=L.cameras;fe(L,me);for(let Z=0;Z<Pe.length;Z++)fe(Pe[Z],me);Pe.length===2?q(L,C,F):L.projectionMatrix.copy(C.projectionMatrix),b===null&&Q.isPerspectiveCamera&&(b={camera:Q,fov:Q.fov,zoom:Q.zoom}),be(Q,L,me)};function be(Q,ue,we){we===null?Q.matrix.copy(ue.matrixWorld):(Q.matrix.copy(we.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ue.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ue.projectionMatrix),Q.projectionMatrixInverse.copy(ue.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=wa*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(p===null&&u===null))return c},this.setFoveation=function(Q){c=Q,p!==null&&(p.fixedFoveation=Q),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=Q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(L)},this.getCameraTexture=function(Q){return m[Q]};let Ce=null;function ze(Q,ue){if(h=ue.getViewerPose(l||a),d=ue,h!==null){let we=h.views;u!==null&&(e.setRenderTargetFramebuffer(v,u.framebuffer),e.setRenderTarget(v));let me=!1;we.length!==L.cameras.length&&(L.cameras.length=0,me=!0);for(let ne=0;ne<we.length;ne++){let re=we[ne],J=null;if(u!==null)J=u.getViewport(re);else{let le=f.getViewSubImage(p,re);J=le.viewport,ne===0&&(e.setRenderTargetTextures(v,le.colorTexture,le.depthStencilTexture),e.setRenderTarget(v))}let ie=S[ne];ie===void 0&&(ie=new Xn,ie.layers.enable(ne),ie.viewport=new hn,S[ne]=ie),ie.matrix.fromArray(re.transform.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.projectionMatrix.fromArray(re.projectionMatrix),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert(),ie.viewport.set(J.x,J.y,J.width,J.height),ne===0&&(L.matrix.copy(ie.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),me===!0&&L.cameras.push(ie)}let Pe=s.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){f=n.getBinding();let ne=f.getDepthInformation(we[0]);ne&&ne.isValid&&ne.texture&&g.init(ne,s.renderState)}if(Pe&&Pe.includes("camera-access")&&_){e.state.unbindTexture(),f=n.getBinding();for(let ne=0;ne<we.length;ne++){let re=we[ne].camera;if(re){let J=m[re];J||(J=new La,m[re]=J);let ie=f.getCameraImage(re);J.sourceTexture=ie}}}}for(let we=0;we<y.length;we++){let me=w[we],Pe=y[we];me!==null&&Pe!==void 0&&Pe.update(me,ue,l||a)}Ce&&Ce(Q,ue),ue.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ue}),d=null}let et=new Xf;et.setAnimationLoop(ze),this.setAnimationLoop=function(Q){Ce=Q},this.dispose=function(){}}},Fv=new gt,Kf=new Pt;Kf.set(-1,0,0,0,1,0,0,0,1);function Ov(i,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,rh(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,E,T,v){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),f(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),p(g,m),m.isMeshPhysicalMaterial&&u(g,m,v)):m.isMeshMatcapMaterial?(r(g,m),d(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),_(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?c(g,m,E,T):m.isSpriteMaterial?l(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===$n&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===$n&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let E=e.get(m),T=E.envMap,v=E.envMapRotation;T&&(g.envMap.value=T,g.envMapRotation.value.setFromMatrix4(Fv.makeRotationFromEuler(v)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Kf),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,E,T){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*E,g.scale.value=T*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function f(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function p(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function u(g,m,E){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===$n&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=E.texture,g.transmissionSamplerSize.value.set(E.width,E.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function d(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){let E=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(E.matrixWorld),g.nearDistance.value=E.shadow.camera.near,g.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Bv(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,y){let w=y.program;n.uniformBlockBinding(v,w)}function l(v,y){let w=s[v.id];w===void 0&&(g(v),w=h(v),s[v.id]=w,v.addEventListener("dispose",E));let A=y.program;n.updateUBOMapping(v,A);let x=e.render.frame;r[v.id]!==x&&(p(v),r[v.id]=x)}function h(v){let y=f();v.__bindingPointIndex=y;let w=i.createBuffer(),A=v.__size,x=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,A,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,w),w}function f(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return St("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(v){let y=s[v.id],w=v.uniforms,A=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let x=0,b=w.length;x<b;x++){let C=w[x];if(Array.isArray(C))for(let F=0,S=C.length;F<S;F++)u(C[F],x,F,A);else u(C,x,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(v,y,w,A){if(_(v,y,w,A)===!0){let x=v.__offset,b=v.value;if(Array.isArray(b)){let C=0;for(let F=0;F<b.length;F++){let S=b[F],L=m(S);d(S,v.__data,C),typeof S!="number"&&typeof S!="boolean"&&!S.isMatrix3&&!ArrayBuffer.isView(S)&&(C+=L.storage/Float32Array.BYTES_PER_ELEMENT)}}else d(b,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,v.__data)}}function d(v,y,w){typeof v=="number"||typeof v=="boolean"?y[0]=v:v.isMatrix3?(y[0]=v.elements[0],y[1]=v.elements[1],y[2]=v.elements[2],y[3]=0,y[4]=v.elements[3],y[5]=v.elements[4],y[6]=v.elements[5],y[7]=0,y[8]=v.elements[6],y[9]=v.elements[7],y[10]=v.elements[8],y[11]=0):ArrayBuffer.isView(v)?y.set(new v.constructor(v.buffer,v.byteOffset,y.length)):v.toArray(y,w)}function _(v,y,w,A){let x=v.value,b=y+"_"+w;if(A[b]===void 0)return typeof x=="number"||typeof x=="boolean"?A[b]=x:ArrayBuffer.isView(x)?A[b]=x.slice():A[b]=x.clone(),!0;{let C=A[b];if(typeof x=="number"||typeof x=="boolean"){if(C!==x)return A[b]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(C.equals(x)===!1)return C.copy(x),!0}}return!1}function g(v){let y=v.uniforms,w=0,A=16;for(let b=0,C=y.length;b<C;b++){let F=Array.isArray(y[b])?y[b]:[y[b]];for(let S=0,L=F.length;S<L;S++){let P=F[S],H=Array.isArray(P.value)?P.value:[P.value];for(let Y=0,k=H.length;Y<k;Y++){let V=H[Y],z=m(V),G=w%A,q=G%z.boundary,fe=G+q;w+=q,fe!==0&&A-fe<z.storage&&(w+=A-fe),P.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=w,w+=z.storage}}}let x=w%A;return x>0&&(w+=A-x),v.__size=w,v.__cache={},this}function m(v){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?yt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(y.boundary=16,y.storage=v.byteLength):yt("WebGLRenderer: Unsupported uniform value type.",v),y}function E(v){let y=v.target;y.removeEventListener("dispose",E);let w=a.indexOf(y.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function T(){for(let v in s)i.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:c,update:l,dispose:T}}var Hv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),hs=null;function zv(){return hs===null&&(hs=new Ni(Hv,16,16,Gs,yn),hs.name="DFG_LUT",hs.minFilter=Ln,hs.magFilter=Ln,hs.wrapS=Li,hs.wrapT=Li,hs.generateMipmaps=!1,hs.needsUpdate=!0),hs}var Oc=class{constructor(e={}){let{canvas:t=df(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:p=!1,outputBufferType:u=Hn}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;let _=u,g=new Set([tc,ec,jl]),m=new Set([Hn,Ki,$r,zs,Jl,Kl]),E=new Uint32Array(4),T=new Int32Array(4),v=new N,y=null,w=null,A=[],x=[],b=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,F=!1,S=null,L=null,P=null,H=null;this._outputColorSpace=Kt;let Y=0,k=0,V=null,z=-1,G=null,q=new hn,fe=new hn,be=null,Ce=new Qe(0),ze=0,et=t.width,Q=t.height,ue=1,we=null,me=null,Pe=new hn(0,0,et,Q),Z=new hn(0,0,et,Q),Be=!1,ne=new Hr,re=!1,J=!1,ie=new gt,le=new N,Oe=new hn,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},qe=!1;function Je(){return V===null?ue:1}let X=n;function at(I,ee){return t.getContext(I,ee)}let lt,O,M,K,te,he,Ve,Ge,Se,ve,$e,ct,D,$,ce,_e,Ue,B,Me,ae,Ie,Ae,U;try{let I={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Ke,!1),t.addEventListener("webglcontextrestored",nt,!1),t.addEventListener("webglcontextcreationerror",bt,!1),X===null){let ee="webgl2";if(X=at(ee,I),X===null)throw at(ee)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ye()}catch(I){throw t.removeEventListener("webglcontextlost",Ke,!1),t.removeEventListener("webglcontextrestored",nt,!1),t.removeEventListener("webglcontextcreationerror",bt,!1),St("WebGLRenderer: "+I.message),I}function ye(){lt=new q1(X),lt.init(),Ie=new Lv(X,lt),O=new O1(X,lt,e,Ie),M=new Iv(X,lt),O.reversedDepthBuffer&&p&&M.buffers.depth.setReversed(!0),L=X.createFramebuffer(),P=X.createFramebuffer(),H=X.createFramebuffer(),K=new J1(X),te=new xv,he=new Dv(X,lt,M,te,O,Ie,K),Ve=new Y1(C),Ge=new Qp(X),Ae=new N1(X,Ge),Se=new Z1(X,Ge,K,Ae),ve=new Q1(X,Se,Ge,Ae,K),B=new K1(X,O,he),ce=new B1(te),$e=new gv(C,Ve,lt,O,Ae,ce),ct=new Ov(C,te),D=new _v,$=new Tv(lt),Ue=new U1(C,Ve,M,ve,d,c),_e=new Pv(C,ve,O),U=new Bv(X,K,O,M),Me=new F1(X,lt,K),ae=new $1(X,lt,K),K.programs=$e.programs,C.capabilities=O,C.extensions=lt,C.properties=te,C.renderLists=D,C.shadowMap=_e,C.state=M,C.info=K}_!==Hn&&(b=new ex(_,t.width,t.height,o,s,r));let oe=new Rh(C,X);this.xr=oe,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){let I=lt.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){let I=lt.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return ue},this.setPixelRatio=function(I){I!==void 0&&(ue=I,this.setSize(et,Q,!1))},this.getSize=function(I){return I.set(et,Q)},this.setSize=function(I,ee,Te=!0){if(oe.isPresenting){yt("WebGLRenderer: Can't change size while VR device is presenting.");return}et=I,Q=ee,t.width=Math.floor(I*ue),t.height=Math.floor(ee*ue),Te===!0&&(t.style.width=I+"px",t.style.height=ee+"px"),b!==null&&b.setSize(t.width,t.height),this.setViewport(0,0,I,ee)},this.getDrawingBufferSize=function(I){return I.set(et*ue,Q*ue).floor()},this.setDrawingBufferSize=function(I,ee,Te){et=I,Q=ee,ue=Te,t.width=Math.floor(I*Te),t.height=Math.floor(ee*Te),this.setViewport(0,0,I,ee)},this.setEffects=function(I){if(_===Hn){St("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(I){for(let ee=0;ee<I.length;ee++)if(I[ee].isOutputPass===!0){yt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(I||[])},this.getCurrentViewport=function(I){return I.copy(q)},this.getViewport=function(I){return I.copy(Pe)},this.setViewport=function(I,ee,Te,pe){I.isVector4?Pe.set(I.x,I.y,I.z,I.w):Pe.set(I,ee,Te,pe),M.viewport(q.copy(Pe).multiplyScalar(ue).round())},this.getScissor=function(I){return I.copy(Z)},this.setScissor=function(I,ee,Te,pe){I.isVector4?Z.set(I.x,I.y,I.z,I.w):Z.set(I,ee,Te,pe),M.scissor(fe.copy(Z).multiplyScalar(ue).round())},this.getScissorTest=function(){return Be},this.setScissorTest=function(I){M.setScissorTest(Be=I)},this.setOpaqueSort=function(I){we=I},this.setTransparentSort=function(I){me=I},this.getClearColor=function(I){return I.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor(...arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha(...arguments)},this.clear=function(I=!0,ee=!0,Te=!0){let pe=0;if(I){let ge=!1;if(V!==null){let st=V.texture.format;ge=g.has(st)}if(ge){let st=V.texture.type,ut=m.has(st),W=Ue.getClearColor(),j=Ue.getClearAlpha(),se=W.r,Le=W.g,De=W.b;ut?(E[0]=se,E[1]=Le,E[2]=De,E[3]=j,X.clearBufferuiv(X.COLOR,0,E)):(T[0]=se,T[1]=Le,T[2]=De,T[3]=j,X.clearBufferiv(X.COLOR,0,T))}else pe|=X.COLOR_BUFFER_BIT}ee&&(pe|=X.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Te&&(pe|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),pe!==0&&X.clear(pe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(I){I.setRenderer(this),S=I},this.dispose=function(){t.removeEventListener("webglcontextlost",Ke,!1),t.removeEventListener("webglcontextrestored",nt,!1),t.removeEventListener("webglcontextcreationerror",bt,!1),Ue.dispose(),D.dispose(),$.dispose(),te.dispose(),Ve.dispose(),ve.dispose(),Ae.dispose(),U.dispose(),$e.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",de),oe.removeEventListener("sessionend",Re),We.stop()};function Ke(I){I.preventDefault(),Ta("WebGLRenderer: Context Lost."),F=!0}function nt(){Ta("WebGLRenderer: Context Restored."),F=!1;let I=K.autoReset,ee=_e.enabled,Te=_e.autoUpdate,pe=_e.needsUpdate,ge=_e.type;ye(),K.autoReset=I,_e.enabled=ee,_e.autoUpdate=Te,_e.needsUpdate=pe,_e.type=ge}function bt(I){St("WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function At(I){let ee=I.target;ee.removeEventListener("dispose",At),Bt(ee)}function Bt(I){Zt(I),te.remove(I)}function Zt(I){let ee=te.get(I).programs;ee!==void 0&&(ee.forEach(function(Te){$e.releaseProgram(Te)}),I.isShaderMaterial&&$e.releaseShaderCache(I))}this.renderBufferDirect=function(I,ee,Te,pe,ge,st){ee===null&&(ee=Ne);let ut=ge.isMesh&&ge.matrixWorld.determinantAffine()<0,W=Yi(I,ee,Te,pe,ge);M.setMaterial(pe,ut);let j=Te.index,se=1;if(pe.wireframe===!0){if(j=Se.getWireframeAttribute(Te),j===void 0)return;se=2}let Le=Te.drawRange,De=Te.attributes.position,Ee=Le.start*se,Ye=(Le.start+Le.count)*se;st!==null&&(Ee=Math.max(Ee,st.start*se),Ye=Math.min(Ye,(st.start+st.count)*se)),j!==null?(Ee=Math.max(Ee,0),Ye=Math.min(Ye,j.count)):De!=null&&(Ee=Math.max(Ee,0),Ye=Math.min(Ye,De.count));let Ze=Ye-Ee;if(Ze<0||Ze===1/0)return;Ae.setup(ge,pe,W,Te,j);let tt,ot=Me;if(j!==null&&(tt=Ge.get(j),ot=ae,ot.setIndex(tt)),ge.isMesh)pe.wireframe===!0?(M.setLineWidth(pe.wireframeLinewidth*Je()),ot.setMode(X.LINES)):ot.setMode(X.TRIANGLES);else if(ge.isLine){let ke=pe.linewidth;ke===void 0&&(ke=1),M.setLineWidth(ke*Je()),ge.isLineSegments?ot.setMode(X.LINES):ge.isLineLoop?ot.setMode(X.LINE_LOOP):ot.setMode(X.LINE_STRIP)}else ge.isPoints?ot.setMode(X.POINTS):ge.isSprite&&ot.setMode(X.TRIANGLES);if(ge.isBatchedMesh)if(lt.get("WEBGL_multi_draw"))ot.renderMultiDraw(ge._multiDrawStarts,ge._multiDrawCounts,ge._multiDrawCount);else{let ke=ge._multiDrawStarts,xe=ge._multiDrawCounts,vt=ge._multiDrawCount,mt=j?Ge.get(j).bytesPerElement:1,Tt=te.get(pe).currentProgram.getUniforms();for(let kt=0;kt<vt;kt++)Tt.setValue(X,"_gl_DrawID",kt),ot.render(ke[kt]/mt,xe[kt])}else if(ge.isInstancedMesh)ot.renderInstances(Ee,Ze,ge.count);else if(Te.isInstancedBufferGeometry){let ke=Te._maxInstanceCount!==void 0?Te._maxInstanceCount:1/0,xe=Math.min(Te.instanceCount,ke);ot.renderInstances(Ee,Ze,xe)}else ot.render(Ee,Ze)};function Un(I,ee,Te,pe){S!==null&&I.isNodeMaterial&&S.setObject(pe,I),re===!0&&ce.setState(I,Te,!1),I.transparent===!0&&I.side===Bn&&I.forceSinglePass===!1?(I.side=$n,I.needsUpdate=!0,Lt(I,ee,pe),I.side=Fs,I.needsUpdate=!0,Lt(I,ee,pe),I.side=Bn):Lt(I,ee,pe)}this.compile=function(I,ee,Te=null){Te===null&&(Te=I),S!==null&&S.renderStart(I,ee,Te),w=$.get(Te),w.init(ee),x.push(w),Te.traverseVisible(function(ge){ge.isLight&&ge.layers.test(ee.layers)&&(w.pushLight(ge),ge.castShadow&&w.pushShadow(ge))}),I!==Te&&I.traverseVisible(function(ge){ge.isLight&&ge.layers.test(ee.layers)&&(w.pushLight(ge),ge.castShadow&&w.pushShadow(ge))}),w.setupLights(),S!==null&&S.updateLights(w.state.lightsArray),J=this.localClippingEnabled,re=ce.init(this.clippingPlanes,J),re===!0&&ce.setGlobalState(this.clippingPlanes,ee),S!==null&&_e.render(w.state.shadowsArray,Te,ee);let pe=new Set;return I.traverse(function(ge){if(!(ge.isMesh||ge.isPoints||ge.isLine||ge.isSprite))return;let st=ge.material;if(st)if(Array.isArray(st))for(let ut=0;ut<st.length;ut++){let W=st[ut];Un(W,Te,ee,ge),pe.add(W)}else Un(st,Te,ee,ge),pe.add(st)}),w=x.pop(),S!==null&&S.renderEnd(),pe},this.compileAsync=function(I,ee,Te=null){let pe=this.compile(I,ee,Te);return new Promise(ge=>{function st(){if(pe.forEach(function(ut){let j=te.get(ut).currentProgram;(j===void 0||j.isReady())&&pe.delete(ut)}),pe.size===0){ge(I);return}setTimeout(st,10)}lt.get("KHR_parallel_shader_compile")!==null?st():setTimeout(st,10)})};let Vn=null;function R(I){Vn&&Vn(I)}function de(){We.stop()}function Re(){We.start()}let We=new Xf;We.setAnimationLoop(R),typeof self<"u"&&We.setContext(self),this.setAnimationLoop=function(I){Vn=I,oe.setAnimationLoop(I),I===null?We.stop():We.start()},oe.addEventListener("sessionstart",de),oe.addEventListener("sessionend",Re),this.render=function(I,ee){if(ee!==void 0&&ee.isCamera!==!0){St("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;S!==null&&S.renderStart(I,ee);let Te=oe.enabled===!0&&oe.isPresenting===!0,pe=b!==null&&(V===null||Te)&&b.begin(C,V);if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),ee.parent===null&&ee.matrixWorldAutoUpdate===!0&&ee.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(ee),ee=oe.getCamera()),I.isScene===!0&&I.onBeforeRender(C,I,ee,V),w=$.get(I,x.length),w.init(ee),w.state.textureUnits=he.getTextureUnits(),x.push(w),ie.multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse),ne.setFromProjectionMatrix(ie,Ji,ee.reversedDepth),J=this.localClippingEnabled,re=ce.init(this.clippingPlanes,J),y=D.get(I,A.length),y.init(),A.push(y),oe.enabled===!0&&oe.isPresenting===!0){let ut=C.xr.getDepthSensingMesh();ut!==null&&Xe(ut,ee,-1/0,C.sortObjects)}Xe(I,ee,0,C.sortObjects),y.finish(),S!==null&&S.updateLights(w.state.lightsArray),C.sortObjects===!0&&y.sort(we,me),qe=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,qe&&Ue.addToRenderList(y,I),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),re===!0&&ce.beginShadows();let ge=w.state.shadowsArray;if(_e.render(ge,I,ee),re===!0&&ce.endShadows(),(pe&&b.hasRenderPass())===!1){let ut=y.opaque,W=y.transmissive;if(w.setupLights(),ee.isArrayCamera){let j=ee.cameras;if(W.length>0)for(let se=0,Le=j.length;se<Le;se++){let De=j[se];it(ut,W,I,De)}qe&&Ue.render(I);for(let se=0,Le=j.length;se<Le;se++){let De=j[se];xt(y,I,De,De.viewport)}}else W.length>0&&it(ut,W,I,ee),qe&&Ue.render(I),xt(y,I,ee)}V!==null&&k===0&&(he.updateMultisampleRenderTarget(V),he.updateRenderTargetMipmap(V)),pe&&b.end(C),I.isScene===!0&&I.onAfterRender(C,I,ee),Ae.resetDefaultState(),z=-1,G=null,x.pop(),x.length>0?(w=x[x.length-1],he.setTextureUnits(w.state.textureUnits),re===!0&&ce.setGlobalState(C.clippingPlanes,w.state.camera)):w=null,A.pop(),A.length>0?y=A[A.length-1]:y=null,S!==null&&S.renderEnd()};function Xe(I,ee,Te,pe){if(I.visible===!1)return;if(I.layers.test(ee.layers)){if(I.isGroup)Te=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(ee);else if(I.isLightProbeGrid)w.pushLightProbeGrid(I);else if(I.isLight)w.pushLight(I),I.castShadow&&w.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||I.intersectsFrustum(ne)){pe&&Oe.setFromMatrixPosition(I.matrixWorld).applyMatrix4(ie);let ut=ve.update(I),W=I.material;W.visible&&y.push(I,ut,W,Te,Oe.z,null,ee)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||I.intersectsFrustum(ne))){let ut=ve.update(I),W=I.material;if(pe&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),Oe.copy(I.boundingSphere.center)):(ut.boundingSphere===null&&ut.computeBoundingSphere(),Oe.copy(ut.boundingSphere.center)),Oe.applyMatrix4(I.matrixWorld).applyMatrix4(ie)),Array.isArray(W)){let j=ut.groups;for(let se=0,Le=j.length;se<Le;se++){let De=j[se],Ee=W[De.materialIndex];Ee&&Ee.visible&&y.push(I,ut,Ee,Te,Oe.z,De,ee)}}else W.visible&&y.push(I,ut,W,Te,Oe.z,null,ee)}}let st=I.children;for(let ut=0,W=st.length;ut<W;ut++)Xe(st[ut],ee,Te,pe)}function xt(I,ee,Te,pe){let{opaque:ge,transmissive:st,transparent:ut}=I;w.setupLightsView(Te),re===!0&&ce.setGlobalState(C.clippingPlanes,Te),pe&&M.viewport(q.copy(pe)),ge.length>0&&pt(ge,ee,Te),st.length>0&&pt(st,ee,Te),ut.length>0&&pt(ut,ee,Te),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function it(I,ee,Te,pe){if((Te.isScene===!0?Te.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[pe.id]===void 0){let Ee=lt.has("EXT_color_buffer_half_float")||lt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[pe.id]=new dn(1,1,{generateMipmaps:!0,type:Ee?yn:Hn,minFilter:cs,samples:Math.max(4,O.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Wt.workingColorSpace})}let st=w.state.transmissionRenderTarget[pe.id],ut=pe.viewport||q;st.setSize(ut.z*C.transmissionResolutionScale,ut.w*C.transmissionResolutionScale);let W=C.getRenderTarget(),j=C.getActiveCubeFace(),se=C.getActiveMipmapLevel();C.setRenderTarget(st),C.getClearColor(Ce),ze=C.getClearAlpha(),ze<1&&C.setClearColor(16777215,.5),C.clear(),qe&&Ue.render(Te);let Le=C.toneMapping;C.toneMapping=wi;let De=pe.viewport;if(pe.viewport!==void 0&&(pe.viewport=void 0),w.setupLightsView(pe),re===!0&&ce.setGlobalState(C.clippingPlanes,pe),pt(I,Te,pe),he.updateMultisampleRenderTarget(st),he.updateRenderTargetMipmap(st),lt.has("WEBGL_multisampled_render_to_texture")===!1){let Ee=!1;for(let Ye=0,Ze=ee.length;Ye<Ze;Ye++){let tt=ee[Ye],{object:ot,geometry:ke,material:xe,group:vt}=tt;if(xe.side===Bn&&ot.layers.test(pe.layers)){let mt=xe.side;xe.side=$n,xe.needsUpdate=!0,ht(ot,Te,pe,ke,xe,vt),xe.side=mt,xe.needsUpdate=!0,Ee=!0}}Ee===!0&&(he.updateMultisampleRenderTarget(st),he.updateRenderTargetMipmap(st))}C.setRenderTarget(W,j,se),C.setClearColor(Ce,ze),De!==void 0&&(pe.viewport=De),C.toneMapping=Le}function pt(I,ee,Te){let pe=ee.isScene===!0?ee.overrideMaterial:null;for(let ge=0,st=I.length;ge<st;ge++){let ut=I[ge],{object:W,geometry:j,group:se}=ut,Le=ut.material;Le.allowOverride===!0&&pe!==null&&(Le=pe),W.layers.test(Te.layers)&&ht(W,ee,Te,j,Le,se)}}function ht(I,ee,Te,pe,ge,st){S!==null&&ge.isNodeMaterial&&S.setObject(I,ge),I.onBeforeRender(C,ee,Te,pe,ge,st),I.modelViewMatrix.multiplyMatrices(Te.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),ge.onBeforeRender(C,ee,Te,pe,I,st),ge.transparent===!0&&ge.side===Bn&&ge.forceSinglePass===!1?(ge.side=$n,ge.needsUpdate=!0,C.renderBufferDirect(Te,ee,pe,ge,I,st),ge.side=Fs,ge.needsUpdate=!0,C.renderBufferDirect(Te,ee,pe,ge,I,st),ge.side=Bn):C.renderBufferDirect(Te,ee,pe,ge,I,st),I.onAfterRender(C,ee,Te,pe,ge,st)}function Lt(I,ee,Te){ee.isScene!==!0&&(ee=Ne);let pe=te.get(I),ge=w.state.lights,st=w.state.shadowsArray,ut=ge.state.version,W=$e.getParameters(I,ge.state,st,ee,Te,w.state.lightProbeGridArray),j=$e.getProgramCacheKey(W),se=pe.programs;pe.environment=I.isMeshStandardMaterial||I.isMeshLambertMaterial||I.isMeshPhongMaterial?ee.environment:null,pe.fog=ee.fog;let Le=I.isMeshStandardMaterial||I.isMeshLambertMaterial&&!I.envMap||I.isMeshPhongMaterial&&!I.envMap;pe.envMap=Ve.get(I.envMap||pe.environment,Le),pe.envMapRotation=pe.environment!==null&&I.envMap===null?ee.environmentRotation:I.envMapRotation,se===void 0&&(I.addEventListener("dispose",At),se=new Map,pe.programs=se);let De=se.get(j);if(De!==void 0){if(pe.currentProgram===De&&pe.lightsStateVersion===ut)return In(I,W),De}else W.uniforms=$e.getUniforms(I),S!==null&&I.isNodeMaterial&&S.build(I,Te,W),I.onBeforeCompile(W,C),De=$e.acquireProgram(W,j),se.set(j,De),pe.uniforms=W.uniforms;let Ee=pe.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Ee.clippingPlanes=ce.uniform),In(I,W),pe.needsLights=Ii(I),pe.lightsStateVersion=ut,pe.needsLights&&(Ee.ambientLightColor.value=ge.state.ambient,Ee.lightProbe.value=ge.state.probe,Ee.sunLights.value=ge.state.sun,Ee.sunLightShadows.value=ge.state.sunShadow,Ee.directionalLights.value=ge.state.directional,Ee.directionalLightShadows.value=ge.state.directionalShadow,Ee.spotLights.value=ge.state.spot,Ee.spotLightShadows.value=ge.state.spotShadow,Ee.rectAreaLights.value=ge.state.rectArea,Ee.ltc_1.value=ge.state.rectAreaLTC1,Ee.ltc_2.value=ge.state.rectAreaLTC2,Ee.pointLights.value=ge.state.point,Ee.pointLightShadows.value=ge.state.pointShadow,Ee.hemisphereLights.value=ge.state.hemi,Ee.sunShadowMatrix.value=ge.state.sunShadowMatrix,Ee.sunShadowCascade.value=ge.state.sunShadowCascade,Ee.directionalShadowMatrix.value=ge.state.directionalShadowMatrix,Ee.spotLightMatrix.value=ge.state.spotLightMatrix,Ee.spotLightMap.value=ge.state.spotLightMap,Ee.pointShadowMatrix.value=ge.state.pointShadowMatrix),pe.lightProbeGrid=w.state.lightProbeGridArray.length>0,pe.currentProgram=De,pe.uniformsList=null,De}function Ut(I){if(I.uniformsList===null){let ee=I.currentProgram.getUniforms();I.uniformsList=Qr.seqWithValue(ee.seq,I.uniforms)}return I.uniformsList}function In(I,ee){let Te=te.get(I);Te.outputColorSpace=ee.outputColorSpace,Te.batching=ee.batching,Te.batchingColor=ee.batchingColor,Te.instancing=ee.instancing,Te.instancingColor=ee.instancingColor,Te.instancingMorph=ee.instancingMorph,Te.skinning=ee.skinning,Te.morphTargets=ee.morphTargets,Te.morphNormals=ee.morphNormals,Te.morphColors=ee.morphColors,Te.morphTargetsCount=ee.morphTargetsCount,Te.numClippingPlanes=ee.numClippingPlanes,Te.numIntersection=ee.numClipIntersection,Te.vertexAlphas=ee.vertexAlphas,Te.vertexTangents=ee.vertexTangents,Te.toneMapping=ee.toneMapping}function Pi(I,ee){if(I.length===0)return null;if(I.length===1)return I[0].texture!==null?I[0]:null;v.setFromMatrixPosition(ee.matrixWorld);for(let Te=0,pe=I.length;Te<pe;Te++){let ge=I[Te];if(ge.texture!==null&&ge.boundingBox.containsPoint(v))return ge}return null}function Yi(I,ee,Te,pe,ge){ee.isScene!==!0&&(ee=Ne),he.resetTextureUnits();let st=ee.fog,ut=pe.isMeshStandardMaterial||pe.isMeshLambertMaterial||pe.isMeshPhongMaterial?ee.environment:null,W=V===null?C.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Wt.workingColorSpace,j=pe.isMeshStandardMaterial||pe.isMeshLambertMaterial&&!pe.envMap||pe.isMeshPhongMaterial&&!pe.envMap,se=Ve.get(pe.envMap||ut,j),Le=pe.vertexColors===!0&&!!Te.attributes.color&&Te.attributes.color.itemSize===4,De=!!Te.attributes.tangent&&(!!pe.normalMap||pe.anisotropy>0),Ee=!!Te.morphAttributes.position,Ye=!!Te.morphAttributes.normal,Ze=!!Te.morphAttributes.color,tt=wi;pe.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(tt=C.toneMapping);let ot=Te.morphAttributes.position||Te.morphAttributes.normal||Te.morphAttributes.color,ke=ot!==void 0?ot.length:0,xe=te.get(pe),vt=w.state.lights;if(re===!0&&(J===!0||I!==G)){let _t=I===G&&pe.id===z;ce.setState(pe,I,_t)}let mt=!1;pe.version===xe.__version?(xe.needsLights&&xe.lightsStateVersion!==vt.state.version||xe.outputColorSpace!==W||ge.isBatchedMesh&&xe.batching===!1||!ge.isBatchedMesh&&xe.batching===!0||ge.isBatchedMesh&&xe.batchingColor===!0&&ge._colorsTexture===null||ge.isBatchedMesh&&xe.batchingColor===!1&&ge._colorsTexture!==null||ge.isInstancedMesh&&xe.instancing===!1||!ge.isInstancedMesh&&xe.instancing===!0||ge.isSkinnedMesh&&xe.skinning===!1||!ge.isSkinnedMesh&&xe.skinning===!0||ge.isInstancedMesh&&xe.instancingColor===!0&&ge.instanceColor===null||ge.isInstancedMesh&&xe.instancingColor===!1&&ge.instanceColor!==null||ge.isInstancedMesh&&xe.instancingMorph===!0&&ge.morphTexture===null||ge.isInstancedMesh&&xe.instancingMorph===!1&&ge.morphTexture!==null||xe.envMap!==se||pe.fog===!0&&xe.fog!==st||xe.numClippingPlanes!==void 0&&(xe.numClippingPlanes!==ce.numPlanes||xe.numIntersection!==ce.numIntersection)||xe.vertexAlphas!==Le||xe.vertexTangents!==De||xe.morphTargets!==Ee||xe.morphNormals!==Ye||xe.morphColors!==Ze||xe.toneMapping!==tt||xe.morphTargetsCount!==ke||!!xe.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(mt=!0):(mt=!0,xe.__version=pe.version);let Tt=xe.currentProgram;mt===!0&&(Tt=Lt(pe,ee,ge),S&&pe.isNodeMaterial&&S.onUpdateProgram(pe,Tt,xe));let kt=!1,Qt=!1,sn=!1,Mt=Tt.getUniforms(),Vt=xe.uniforms;if(M.useProgram(Tt.program)&&(kt=!0,Qt=!0,sn=!0),pe.id!==z&&(z=pe.id,Qt=!0),xe.needsLights){let _t=Pi(w.state.lightProbeGridArray,ge);xe.lightProbeGrid!==_t&&(xe.lightProbeGrid=_t,Qt=!0)}if(kt||G!==I){M.buffers.depth.getReversed()&&I.reversedDepth!==!0&&(I._reversedDepth=!0,I.updateProjectionMatrix()),Mt.setValue(X,"projectionMatrix",I.projectionMatrix),Mt.setValue(X,"viewMatrix",I.matrixWorldInverse);let Sn=Mt.map.cameraPosition;Sn!==void 0&&Sn.setValue(X,le.setFromMatrixPosition(I.matrixWorld)),O.logarithmicDepthBuffer&&Mt.setValue(X,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(pe.isMeshPhongMaterial||pe.isMeshToonMaterial||pe.isMeshLambertMaterial||pe.isMeshBasicMaterial||pe.isMeshStandardMaterial||pe.isShaderMaterial)&&Mt.setValue(X,"isOrthographic",I.isOrthographicCamera===!0),G!==I&&(G=I,Qt=!0,sn=!0)}if(xe.needsLights&&(vt.state.sunShadowMap.length>0&&Mt.setValue(X,"sunShadowMap",vt.state.sunShadowMap,he),vt.state.directionalShadowMap.length>0&&Mt.setValue(X,"directionalShadowMap",vt.state.directionalShadowMap,he),vt.state.spotShadowMap.length>0&&Mt.setValue(X,"spotShadowMap",vt.state.spotShadowMap,he),vt.state.pointShadowMap.length>0&&Mt.setValue(X,"pointShadowMap",vt.state.pointShadowMap,he)),ge.isSkinnedMesh){Mt.setOptional(X,ge,"bindMatrix"),Mt.setOptional(X,ge,"bindMatrixInverse");let _t=ge.skeleton;_t&&(_t.boneTexture===null&&_t.computeBoneTexture(),Mt.setValue(X,"boneTexture",_t.boneTexture,he))}ge.isBatchedMesh&&(Mt.setOptional(X,ge,"batchingTexture"),Mt.setValue(X,"batchingTexture",ge._matricesTexture,he),Mt.setOptional(X,ge,"batchingIdTexture"),Mt.setValue(X,"batchingIdTexture",ge._indirectTexture,he),Mt.setOptional(X,ge,"batchingColorTexture"),ge._colorsTexture!==null&&Mt.setValue(X,"batchingColorTexture",ge._colorsTexture,he));let Ht=Te.morphAttributes;if((Ht.position!==void 0||Ht.normal!==void 0||Ht.color!==void 0)&&B.update(ge,Te,Tt),(Qt||xe.receiveShadow!==ge.receiveShadow)&&(xe.receiveShadow=ge.receiveShadow,Mt.setValue(X,"receiveShadow",ge.receiveShadow)),(pe.isMeshStandardMaterial||pe.isMeshLambertMaterial||pe.isMeshPhongMaterial)&&pe.envMap===null&&ee.environment!==null&&(Vt.envMapIntensity.value=ee.environmentIntensity),Vt.dfgLUT!==void 0&&(Vt.dfgLUT.value=zv()),Qt){if(Mt.setValue(X,"toneMappingExposure",C.toneMappingExposure),xe.needsLights&&xi(Vt,sn),st&&pe.fog===!0&&ct.refreshFogUniforms(Vt,st),ct.refreshMaterialUniforms(Vt,pe,ue,Q,w.state.transmissionRenderTarget[I.id]),xe.needsLights&&xe.lightProbeGrid){let _t=xe.lightProbeGrid;Vt.probesSH.value=_t.texture,Vt.probesMin.value.copy(_t.boundingBox.min),Vt.probesMax.value.copy(_t.boundingBox.max),Vt.probesResolution.value.copy(_t.resolution)}Qr.upload(X,Ut(xe),Vt,he)}if(pe.isShaderMaterial&&pe.uniformsNeedUpdate===!0&&(Qr.upload(X,Ut(xe),Vt,he),pe.uniformsNeedUpdate=!1),pe.isSpriteMaterial&&Mt.setValue(X,"center",ge.center),Mt.setValue(X,"modelViewMatrix",ge.modelViewMatrix),Mt.setValue(X,"normalMatrix",ge.normalMatrix),Mt.setValue(X,"modelMatrix",ge.matrixWorld),pe.uniformsGroups!==void 0){let _t=pe.uniformsGroups;for(let Sn=0,Nn=_t.length;Sn<Nn;Sn++){let oi=_t[Sn];U.update(oi,Tt),U.bind(oi,Tt)}}return Tt}function xi(I,ee){I.ambientLightColor.needsUpdate=ee,I.lightProbe.needsUpdate=ee,I.sunLights.needsUpdate=ee,I.sunLightShadows.needsUpdate=ee,I.directionalLights.needsUpdate=ee,I.directionalLightShadows.needsUpdate=ee,I.pointLights.needsUpdate=ee,I.pointLightShadows.needsUpdate=ee,I.spotLights.needsUpdate=ee,I.spotLightShadows.needsUpdate=ee,I.rectAreaLights.needsUpdate=ee,I.hemisphereLights.needsUpdate=ee}function Ii(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(I,ee,Te){let pe=te.get(I);pe.__autoAllocateDepthBuffer=I.resolveDepthBuffer===!1,pe.__autoAllocateDepthBuffer===!1&&(pe.__useRenderToTexture=!1),te.get(I.texture).__webglTexture=ee,te.get(I.depthTexture).__webglTexture=pe.__autoAllocateDepthBuffer?void 0:Te,pe.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(I,ee){let Te=te.get(I);Te.__webglFramebuffer=ee,Te.__useDefaultFramebuffer=ee===void 0},this.setRenderTarget=function(I,ee=0,Te=0){V=I,Y=ee,k=Te;let pe=null,ge=!1,st=!1;if(I){let W=te.get(I);if(W.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(X.FRAMEBUFFER,W.__webglFramebuffer),q.copy(I.viewport),fe.copy(I.scissor),be=I.scissorTest,M.viewport(q),M.scissor(fe),M.setScissorTest(be),z=-1;return}else if(W.__webglFramebuffer===void 0)he.setupRenderTarget(I);else if(W.__hasExternalTextures)he.rebindTextures(I,te.get(I.texture).__webglTexture,te.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){let Le=I.depthTexture;if(W.__boundDepthTexture!==Le){if(Le!==null&&te.has(Le)&&(I.width!==Le.image.width||I.height!==Le.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");he.setupDepthRenderbuffer(I)}}let j=I.texture;(j.isData3DTexture||j.isDataArrayTexture||j.isCompressedArrayTexture)&&(st=!0);let se=te.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(se[ee])?pe=se[ee][Te]:pe=se[ee],ge=!0):I.samples>0&&he.useMultisampledRTT(I)===!1?pe=te.get(I).__webglMultisampledFramebuffer:Array.isArray(se)?pe=se[Te]:pe=se,q.copy(I.viewport),fe.copy(I.scissor),be=I.scissorTest}else q.copy(Pe).multiplyScalar(ue).floor(),fe.copy(Z).multiplyScalar(ue).floor(),be=Be;if(Te!==0&&(pe=L),M.bindFramebuffer(X.FRAMEBUFFER,pe)&&M.drawBuffers(I,pe),M.viewport(q),M.scissor(fe),M.setScissorTest(be),ge){let W=te.get(I.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+ee,W.__webglTexture,Te)}else if(st){let W=ee;for(let j=0;j<I.textures.length;j++){let se=te.get(I.textures[j]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+j,se.__webglTexture,Te,W)}}else if(I!==null&&Te!==0){let W=te.get(I.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,W.__webglTexture,Te)}z=-1};function Vs(I){let ee=te.get(I);return(ee.__readFormat!==I.format||ee.__readType!==I.type)&&(ee.__readFormat=I.format,ee.__readType=I.type,ee.__formatReadable=O.textureFormatReadable(I.format),ee.__typeReadable=O.textureTypeReadable(I.type)),ee}this.readRenderTargetPixels=function(I,ee,Te,pe,ge,st,ut,W=0){if(!(I&&I.isWebGLRenderTarget)){St("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let j=te.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&ut!==void 0&&(j=j[ut]),j){M.bindFramebuffer(X.FRAMEBUFFER,j);try{let se=I.textures[W],Le=se.format,De=se.type;I.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+W);let Ee=Vs(se);if(Ee.__formatReadable===!1){St("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ee.__typeReadable===!1){St("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ee>=0&&ee<=I.width-pe&&Te>=0&&Te<=I.height-ge&&X.readPixels(ee,Te,pe,ge,Ie.convert(Le),Ie.convert(De),st)}finally{let se=V!==null?te.get(V).__webglFramebuffer:null;M.bindFramebuffer(X.FRAMEBUFFER,se)}}},this.readRenderTargetPixelsAsync=async function(I,ee,Te,pe,ge,st,ut,W=0){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let j=te.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&ut!==void 0&&(j=j[ut]),j)if(ee>=0&&ee<=I.width-pe&&Te>=0&&Te<=I.height-ge){M.bindFramebuffer(X.FRAMEBUFFER,j);let se=I.textures[W],Le=se.format,De=se.type;I.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+W);let Ee=Vs(se);if(Ee.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ee.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ye=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,Ye),X.bufferData(X.PIXEL_PACK_BUFFER,st.byteLength,X.STREAM_READ),X.readPixels(ee,Te,pe,ge,Ie.convert(Le),Ie.convert(De),0),X.bindBuffer(X.PIXEL_PACK_BUFFER,null);let Ze=V!==null?te.get(V).__webglFramebuffer:null;M.bindFramebuffer(X.FRAMEBUFFER,Ze);let tt=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await pf(X,tt,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,Ye),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,st),X.bindBuffer(X.PIXEL_PACK_BUFFER,null),X.deleteBuffer(Ye),X.deleteSync(tt),st}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(I,ee=null,Te=0){let pe=Math.pow(2,-Te),ge=Math.floor(I.image.width*pe),st=Math.floor(I.image.height*pe),ut=ee!==null?ee.x:0,W=ee!==null?ee.y:0;he.setTexture2D(I,0),X.copyTexSubImage2D(X.TEXTURE_2D,Te,0,0,ut,W,ge,st),M.unbindTexture()},this.copyTextureToTexture=function(I,ee,Te=null,pe=null,ge=0,st=0){let ut,W,j,se,Le,De,Ee,Ye,Ze,tt=I.isCompressedTexture?I.mipmaps[st]:I.image;if(Te!==null)ut=Te.max.x-Te.min.x,W=Te.max.y-Te.min.y,j=Te.isBox3?Te.max.z-Te.min.z:1,se=Te.min.x,Le=Te.min.y,De=Te.isBox3?Te.min.z:0;else{let Vt=Math.pow(2,-ge);ut=Math.floor(tt.width*Vt),W=Math.floor(tt.height*Vt),I.isDataArrayTexture?j=tt.depth:I.isData3DTexture?j=Math.floor(tt.depth*Vt):j=1,se=0,Le=0,De=0}pe!==null?(Ee=pe.x,Ye=pe.y,Ze=pe.z):(Ee=0,Ye=0,Ze=0);let ot=Ie.convert(ee.format),ke=Ie.convert(ee.type),xe;ee.isData3DTexture?(he.setTexture3D(ee,0),xe=X.TEXTURE_3D):ee.isDataArrayTexture||ee.isCompressedArrayTexture?(he.setTexture2DArray(ee,0),xe=X.TEXTURE_2D_ARRAY):(he.setTexture2D(ee,0),xe=X.TEXTURE_2D),M.activeTexture(X.TEXTURE0),M.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,ee.flipY),M.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),M.pixelStorei(X.UNPACK_ALIGNMENT,ee.unpackAlignment);let vt=M.getParameter(X.UNPACK_ROW_LENGTH),mt=M.getParameter(X.UNPACK_IMAGE_HEIGHT),Tt=M.getParameter(X.UNPACK_SKIP_PIXELS),kt=M.getParameter(X.UNPACK_SKIP_ROWS),Qt=M.getParameter(X.UNPACK_SKIP_IMAGES);M.pixelStorei(X.UNPACK_ROW_LENGTH,tt.width),M.pixelStorei(X.UNPACK_IMAGE_HEIGHT,tt.height),M.pixelStorei(X.UNPACK_SKIP_PIXELS,se),M.pixelStorei(X.UNPACK_SKIP_ROWS,Le),M.pixelStorei(X.UNPACK_SKIP_IMAGES,De);let sn=I.isDataArrayTexture||I.isData3DTexture,Mt=ee.isDataArrayTexture||ee.isData3DTexture;if(I.isDepthTexture){let Vt=te.get(I),Ht=te.get(ee),_t=te.get(Vt.__renderTarget),Sn=te.get(Ht.__renderTarget);M.bindFramebuffer(X.READ_FRAMEBUFFER,_t.__webglFramebuffer),M.bindFramebuffer(X.DRAW_FRAMEBUFFER,Sn.__webglFramebuffer);for(let Nn=0;Nn<j;Nn++)sn&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,te.get(I).__webglTexture,ge,De+Nn),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,te.get(ee).__webglTexture,st,Ze+Nn)),X.blitFramebuffer(se,Le,ut,W,Ee,Ye,ut,W,X.DEPTH_BUFFER_BIT,X.NEAREST);M.bindFramebuffer(X.READ_FRAMEBUFFER,null),M.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(ge!==0||I.isRenderTargetTexture||te.has(I)){let Vt=te.get(I),Ht=te.get(ee);M.bindFramebuffer(X.READ_FRAMEBUFFER,P),M.bindFramebuffer(X.DRAW_FRAMEBUFFER,H);for(let _t=0;_t<j;_t++)sn?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Vt.__webglTexture,ge,De+_t):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Vt.__webglTexture,ge),Mt?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Ht.__webglTexture,st,Ze+_t):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Ht.__webglTexture,st),ge!==0?X.blitFramebuffer(se,Le,ut,W,Ee,Ye,ut,W,X.COLOR_BUFFER_BIT,X.NEAREST):Mt?X.copyTexSubImage3D(xe,st,Ee,Ye,Ze+_t,se,Le,ut,W):X.copyTexSubImage2D(xe,st,Ee,Ye,se,Le,ut,W);M.bindFramebuffer(X.READ_FRAMEBUFFER,null),M.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Mt?I.isDataTexture||I.isData3DTexture?X.texSubImage3D(xe,st,Ee,Ye,Ze,ut,W,j,ot,ke,tt.data):ee.isCompressedArrayTexture?X.compressedTexSubImage3D(xe,st,Ee,Ye,Ze,ut,W,j,ot,tt.data):X.texSubImage3D(xe,st,Ee,Ye,Ze,ut,W,j,ot,ke,tt):I.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,st,Ee,Ye,ut,W,ot,ke,tt.data):I.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,st,Ee,Ye,tt.width,tt.height,ot,tt.data):X.texSubImage2D(X.TEXTURE_2D,st,Ee,Ye,ut,W,ot,ke,tt);M.pixelStorei(X.UNPACK_ROW_LENGTH,vt),M.pixelStorei(X.UNPACK_IMAGE_HEIGHT,mt),M.pixelStorei(X.UNPACK_SKIP_PIXELS,Tt),M.pixelStorei(X.UNPACK_SKIP_ROWS,kt),M.pixelStorei(X.UNPACK_SKIP_IMAGES,Qt),st===0&&ee.generateMipmaps&&X.generateMipmap(xe),M.unbindTexture()},this.initRenderTarget=function(I){te.get(I).__webglFramebuffer===void 0&&he.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?he.setTextureCube(I,0):I.isData3DTexture?he.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?he.setTexture2DArray(I,0):he.setTexture2D(I,0),M.unbindTexture()},this.resetState=function(){Y=0,k=0,V=null,M.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Wt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Wt._getUnpackColorSpace()}};var Et=(i,e,t)=>Math.min(t,Math.max(e,i)),je=(i,e,t)=>i+(e-i)*t,dt=(i,e,t)=>{let n=Et((t-i)/(e-i),0,1);return n*n*(3-2*n)};function Jn(i){let e=i>>>0;return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function kn(i,e,t=0){let n=Math.imul(i|0,374761393)+Math.imul(e|0,668265263)+Math.imul(t|0,2147483647);return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}function Gv(i,e,t=1024,n=1024,s=0){let r=Math.floor(i),a=Math.floor(e),o=i-r,c=e-a,l=o*o*(3-2*o),h=c*c*(3-2*c),f=m=>(m%t+t)%t,p=m=>(m%n+n)%n,u=kn(f(r),p(a),s),d=kn(f(r+1),p(a),s),_=kn(f(r),p(a+1),s),g=kn(f(r+1),p(a+1),s);return je(je(u,d,l),je(_,g,l),h)}function ln(i,e,t=4,n=1024,s=1024,r=0){let a=.5,o=1,c=0,l=0;for(let h=0;h<t;h++)c+=a*Gv(i*o,e*o,n*o,s*o,r+h*17),l+=a,a*=.5,o*=2;return c/l}var Qf=()=>window.innerWidth<760||/Android|iPhone|iPad|iPod/i.test(navigator.userAgent);function lr(i,e={}){let t=i.attributes.position,n=i.attributes.normal,s=i.attributes.uv,r=e.ox||0,a=e.oy||0,o=e.oz||0;for(let c=0;c<t.count;c++){let l=n.getX(c),h=n.getY(c),f=n.getZ(c),p=t.getX(c)+r,u=t.getY(c)+a,d=t.getZ(c)+o,_,g;Math.abs(f)>.5?(_=f>0?p:-p,g=u):Math.abs(l)>.5?(_=l>0?-d:d,g=u):(e.swap?(_=d,g=p):(_=p,g=d),h<0&&(g=-g)),s.setXY(c,_,g)}s.needsUpdate=!0}var jf=4,Ph=1,e0=i=>{jf=Math.min(8,i)},t0=i=>{Ph=i>=2?1:.5},zc=()=>Ph;function Ch(i,e,t){let n=new Ni(i,e,e,Qn,Hn);return n.wrapS=n.wrapT=wn,n.magFilter=Ln,n.minFilter=cs,n.generateMipmaps=!0,n.colorSpace=t?Kt:Qi,n.anisotropy=jf,n.needsUpdate=!0,n}function Ss(i,e,t,n){i=Math.max(128,Math.round(i*Ph));let s=i*i,r=new Uint8Array(s*4),a=new Uint8Array(s*4),o=new Uint8Array(s*4),c=new Float32Array(s);for(let u=0;u<i;u++)for(let d=0;d<i;d++){let _=u*i+d,g=n((d+.5)/i,(u+.5)/i);r[_*4]=Et(g[0],0,1)*255,r[_*4+1]=Et(g[1],0,1)*255,r[_*4+2]=Et(g[2],0,1)*255,r[_*4+3]=255,c[_]=g[3],a[_*4]=255,a[_*4+1]=Et(g[4],0,1)*255,a[_*4+2]=Et(g[5]||0,0,1)*255,a[_*4+3]=255}let l=e/i;for(let u=0;u<i;u++)for(let d=0;d<i;d++){let _=u*i+d,g=(c[u*i+(d+1)%i]-c[u*i+(d-1+i)%i])*t/(2*l),m=(c[(u+1)%i*i+d]-c[(u-1+i)%i*i+d])*t/(2*l),E=Math.hypot(g,m,1);o[_*4]=(-g/E*.5+.5)*255,o[_*4+1]=(-m/E*.5+.5)*255,o[_*4+2]=(1/E*.5+.5)*255,o[_*4+3]=255}let h=Ch(r,i,!0),f=Ch(o,i,!1),p=Ch(a,i,!1);return[h,f,p].forEach(u=>u.repeat.set(1/e,1/e)),{map:h,normalMap:f,rmMap:p,tile:e}}var go=(i,e)=>[i[0]*e,i[1]*e,i[2]*e];function n0(i=[.2,.22,.25]){return Ss(512,.6,.02,(e,t)=>{let n=t*3,s=Math.floor(n),r=n-s,a=ln(e*5+s*3.1,r*22,3,5,22,s),o,c=1;r>.94?(o=0,c=.45):o=.28+.72*Math.pow(1-r/.94,1.4);let l=(.9+.2*kn(s,3,5))*(.9+.2*a)*c;return[...go(i,l),o+(a-.5)*.08,.72+.2*a,0]})}function i0(i=[.13,.145,.16]){return Ss(512,1.2,.025,(e,t)=>{let n=e*4,s=Math.floor(n),r=n-s,a=Math.min(r,1-r)*.3,o=ln(s*5.1+r*3,t*7,3,20,7,s),c=.4+(o-.5)*.1,l=1;a<.026?c=1:a<.05&&(c=0,l=.5);let h=(.92+.16*kn(s,1,9))*(.9+.2*o)*l;return[...go(i,h),c,.7+.2*o,0]})}function s0(i=[.1,.105,.115]){return Ss(512,.9,.018,(e,t)=>{let n=e*2%1,s=Math.min(n,1-n)*.45,r=s<.028?Math.pow(1-s/.028,.7):0,a=(ln(e*3,t*3,3,3,3,4)-.5)*.1,o=.34+.12*ln(e*8,t*40,2,8,40,2);return[...go(i,1+(ln(e*2,t*6,2,2,6,11)-.5)*.25+r*.35),.1+r+a,o,.8]})}function Gc(i=[.66,.43,.26],e=[.4,.24,.13]){return Ss(512,.6,.01,(t,n)=>{let s=ln(t*3,n*1.2,3,3,2,21)*3,r=.5+.5*Math.sin((t*10+s)*Math.PI*2/1),a=ln(t*18,n*2.4,3,18,2,33),o=Et(.25+r*.35+a*.5,0,1),c=t*6%1,l=c<.012||c>.988?.45:1;return[je(e[0],i[0],o)*l,je(e[1],i[1],o)*l,je(e[2],i[2],o)*l,.55+a*.3-(l<1?.5:0),.55+.15*a,0]})}function r0(i=[.56,.55,.53]){return Ss(512,1.2,.012,(e,t)=>{let n=t*8,s=Math.floor(n),r=n-s,a=kn(s,7,2)*40,o=ln(e*4+a,r*10,3,4,10,s),c=kn(Math.floor(e*512),Math.floor(t*512),3)>.985?.6:1,l=r<.04?.7:1,h=(.9+.2*o)*c*l*(.94+.12*kn(s,4,1));return[...go(i,h),.5+(o-.5)*.4-(r<.04?.3:0),.92,0]})}function a0(){return Ss(512,1,.045,(i,e)=>{let t=i*5,n=e*4,s=Math.floor(t),r=Math.floor(n),a=9,o=9,c=0;for(let g=-1;g<=1;g++)for(let m=-1;m<=1;m++){let E=s+m,T=r+g,v=(E%5+5)%5,y=(T%4+4)%4,w=E+.15+kn(v,y,1)*.7,A=T+.15+kn(v,y,2)*.7,x=Math.hypot((t-w)*1,(n-A)*1.25);x<a?(o=a,a=x,c=v*31+y):x<o&&(o=x)}let l=o-a,h=dt(.04,.3,l),f=kn(c,5,3),p=.4+f*.2,u=kn(c,9,1)*.06,d=.9+.2*ln(i*12,e*12,3,12,12,c),_=h>.02?1:.35;return[(p+u)*d*_,(p+u*.6)*d*_,(p-.02)*d*_,h*(.7+.3*f),.88,0]})}function o0(){return Ss(512,5,.06,(i,e)=>{let t=ln(i*5,e*5,4,5,5,71),n=ln(i*60,e*60,2,60,60,72),s=kn(Math.floor(i*512),Math.floor(e*512),8)>.988,r=.93+.07*t;return[.9*r,.94*r,1*r,t*.8+n*.2,s?.12:.78+n*.15,0]})}function l0(i=[.13,.135,.145]){return Ss(256,3,.01,(e,t)=>{let n=kn(Math.floor(e*256),Math.floor(t*256),12),s=ln(e*6,t*6,3,6,6,9),r=.8+.5*n*n+.25*s;return[...go(i,r),n*.5+s*.3,.88-n*.1,0]})}function c0(){return Ss(512,4,.05,(i,e)=>{let t=ln(i*70,e*70,2,70,70,3),n=ln(i*4,e*4,4,4,4,5),s=ln(i*9,e*9,3,9,9,6),r=.75+.5*t;return[je(.22,.4,s)*r+n*.05,je(.3,.4,s)*r*(.85+.3*n),je(.1,.16,s)*r,t,.92,0]})}function u0(i,e){let t=new Uint8Array(i*i*4);for(let s=0;s<i;s++)for(let r=0;r<i;r++){let a=(r+.5)/i,o=(s+.5)/i,c=.45+.55*ln(a*6,o*4,4,1024,1024,41);c=dt(.2,.95,c),c*=.35+.65*dt(0,.18,Math.min(a,1-a,o,1-o)+.04*ln(a*30,o*30,2,1024,1024,5)),e&&(c*=e(a,o));let l=(s*i+r)*4;t[l]=255,t[l+1]=Et(c,0,1)*255,t[l+2]=255,t[l+3]=255}let n=new Ni(t,i,i,Qn,Hn);return n.magFilter=n.minFilter=Ln,n.generateMipmaps=!1,n.needsUpdate=!0,n}function h0(i="living"){let e=document.createElement("canvas");e.width=160,e.height=160;let t=e.getContext("2d"),n={living:["#6b4426","#d99a55","#f5c27c"],kitchen:["#7a5a3a","#e6b673","#fff0cf"],bed:["#4a3a52","#c78b7a","#f1c6a0"],bath:["#4f6670","#a9c7cf","#eaf6f4"],hall:["#5a4128","#c58c52","#efba78"]}[i]||["#6b4426","#d99a55","#f5c27c"],s=t.createLinearGradient(0,0,0,160);s.addColorStop(0,n[0]),s.addColorStop(.55,n[1]),s.addColorStop(1,n[2]),t.fillStyle=s,t.fillRect(0,0,160,160);let r=i==="kitchen"?80:40+Math.random()*80,a=t.createRadialGradient(r,52,2,r,52,70);if(a.addColorStop(0,"rgba(255,246,214,.95)"),a.addColorStop(1,"rgba(255,220,150,0)"),t.fillStyle=a,t.fillRect(0,0,160,160),t.fillStyle="rgba(30,18,10,.55)",i==="living"&&(t.fillRect(14,108,92,52),t.fillRect(14,88,92,22),t.fillRect(112,70,6,90)),i==="kitchen"){t.fillRect(0,100,160,60),t.fillStyle="rgba(30,18,10,.4)";for(let l=0;l<4;l++)t.fillRect(8+l*38,20,30,40)}i==="bed"&&(t.fillRect(20,96,120,64),t.fillRect(20,70,14,40)),i==="bath"&&(t.fillStyle="rgba(20,40,48,.35)",t.fillRect(0,112,160,48),t.fillRect(104,40,40,36)),i==="hall"&&(t.fillRect(0,128,160,32),t.fillRect(70,30,36,90));let o=t.createLinearGradient(0,0,40,0);o.addColorStop(0,"rgba(40,24,16,.7)"),o.addColorStop(1,"rgba(40,24,16,0)"),t.fillStyle=o,t.fillRect(0,0,40,160),t.save(),t.translate(160,0),t.scale(-1,1),t.fillStyle=o,t.fillRect(0,0,40,160),t.restore();let c=new En(e);return c.colorSpace=Kt,c}function ta(i="rgba(255,190,120,0.9)",e="rgba(255,150,80,0)"){let t=document.createElement("canvas");t.width=t.height=128;let n=t.getContext("2d"),s=n.createRadialGradient(64,64,0,64,64,64);s.addColorStop(0,i),s.addColorStop(.35,i.replace(/[\d.]+\)$/,"0.35)")),s.addColorStop(1,e),n.fillStyle=s,n.fillRect(0,0,128,128);let r=new En(t);return r.colorSpace=Kt,r}function d0(){let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d"),t=e.createRadialGradient(64,64,20,64,64,64);t.addColorStop(0,"rgba(244,189,126,0.55)"),t.addColorStop(1,"rgba(244,189,126,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),e.beginPath(),e.arc(64,64,30,0,Math.PI*2),e.fillStyle="#d98a4e",e.fill(),e.lineWidth=3,e.strokeStyle="#f4bd7e",e.stroke(),e.beginPath(),e.moveTo(49,79),e.lineTo(64,49),e.lineTo(79,79),e.lineWidth=6.5,e.strokeStyle="#121311",e.lineJoin="miter",e.stroke(),e.fillStyle="#121311",e.fillRect(60.5,64.5,7,7);let n=new En(i);return n.colorSpace=Kt,n}function Es(i="rgba(255,255,255,0.6)"){let e=document.createElement("canvas");e.width=e.height=64;let t=e.getContext("2d"),n=t.createRadialGradient(32,32,0,32,32,32);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.25,i),n.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=n,t.fillRect(0,0,64,64);let s=new En(e);return s.colorSpace=Kt,s}function f0(){let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d");for(let n=0;n<9;n++){let s=64+(kn(n,1,3)-.5)*40,r=64+(kn(n,2,3)-.5)*40,a=22+kn(n,3,3)*22,o=e.createRadialGradient(s,r,0,s,r,a);o.addColorStop(0,"rgba(255,255,255,0.28)"),o.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=o,e.fillRect(0,0,128,128)}let t=new En(i);return t.colorSpace=Kt,t}function p0(){let i={lap:n0([.3,.33,.37]),bb:i0([.2,.22,.25]),seam:s0([.1,.105,.115]),cedar:Gc(),walnut:Gc([.46,.29,.17],[.25,.15,.09]),oak:Gc([.8,.64,.44],[.56,.4,.25]),form:r0(),stone:a0(),snow:o0(),asphalt:l0(),grass:c0()},e=(a,o={})=>new Yt({map:a.map,normalMap:a.normalMap,roughnessMap:a.rmMap,metalnessMap:a.rmMap,roughness:1,metalness:1,...o}),t=(a,o=.8,c=0,l={})=>new Yt({color:a,roughness:o,metalness:c,...l}),n=(a,o)=>(a.userData.shell=!0,a.userData.th=o,a),s=(a,o)=>(a.userData.th=o,a),r={lap:n(e(i.lap,{normalScale:new He(1,1)}),[.3,.05,.3]),bb:n(e(i.bb,{normalScale:new He(1,1)}),[.3,.05,.3]),roof:n(e(i.seam,{normalScale:new He(1.2,1.2),envMapIntensity:1.3}),[.4,.12]),cedar:n(e(i.cedar),[.42,0,.25]),walnut:n(e(i.walnut),[.52]),oak:n(e(i.oak),[.55]),form:n(e(i.form),[.33]),stone:n(e(i.stone),[.33]),drywall:n(t(14209475,.95),[.6]),trim:n(t(855568,.42,.55,{envMapIntensity:1.2}),[.32,0,.2]),reveal:n(t(14275785,.85),[.45]),slab:n(t(7828331,1),[.35]),concrete:n(t(7301987,1),[.33]),floor:n(t(10518364,.7),[.55]),door:n(e(i.walnut),[.52]),insul:n(t(13087881,1),[.5]),counter:n(t(2959910,.5,.05),[.55]),snowRoof:n(t(15265527,.85,0,{alphaToCoverage:!0}),[.03]),ice:s(new fi({color:13625845,roughness:.08,metalness:0,transparent:!0,opacity:.85,clearcoat:1,envMapIntensity:1.6}),[.1]),white:s(t(14605267,.5,.05),[.6]),steel:s(t(10133670,.35,.85),[.55]),pvc:s(t(15131612,.4),[.24]),pipe:s(t(6255750,.5,.4),[.45]),copper:s(t(14256718,.28,.9,{envMapIntensity:1.4}),[.68]),solar:s(new fi({color:726832,roughness:.16,metalness:.7,clearcoat:1,clearcoatRoughness:.06,envMapIntensity:1.5}),[.17]),solarFrame:s(t(11186616,.4,.9),[.3]),neighbor:s(e(i.lap,{color:9080210}),[.26,.04,.24]),neighborRoof:s(e(i.seam,{color:6711920}),[.4,.12]),asphalt:s(e(i.asphalt),[.3]),pavement:s(t(9144706,.95),[.3]),sconce:s(new Yt({color:1709070,emissive:16756833,emissiveIntensity:3,roughness:.4}),[.9]),lampHead:s(new Yt({color:2236962,emissive:16761466,emissiveIntensity:4,roughness:.4}),[.95]),pole:s(t(1776928,.5,.7),[.3]),spruce:s(new Yt({vertexColors:!0,roughness:.92,metalness:0}),[.13]),trunk:s(t(2760471,1),[.18]),shrub:s(new Yt({vertexColors:!0,roughness:1}),[.14]),fabric:s(t(6970708,.95),[.5]),fabric2:s(t(4016726,.95),[.5]),leather:s(t(8014634,.55),[.5]),ceramic:s(t(15921129,.18,0),[.45]),mirror:s(t(12570840,.05,.9),[.4]),black:s(t(1381653,.5,.3),[.4]),warmLight:s(new Yt({color:2236440,emissive:16767392,emissiveIntensity:5,roughness:.6}),[1])};return["lap","bb","roof","drywall","form","stone","trim","cedar","door","walnut","reveal","snowRoof"].forEach(a=>{r[a].userData.wall=!0}),Object.values(r).forEach(a=>{a.userData.th===void 0&&(a.userData.th=[.3])}),{M:r,T:i}}function Ih(i){let e=new Yt({color:395533,roughness:.05,metalness:.25,emissive:16777215,emissiveMap:i,emissiveIntensity:0,envMapIntensity:1.6});return e.userData.shell=!0,e.userData.pane=!0,e.userData.wall=!0,e.userData.th=[.86],e}var kc=[[-90,"#04060d","#0c1124"],[-20,"#05070f","#10162b"],[-14,"#080d20","#1a2140"],[-9,"#0f1838","#33406a"],[-5,"#1a2650","#7a6f94"],[-2,"#27345e","#d98d62"],[1,"#35508a","#eba66f"],[5,"#43689f","#e8bf8f"],[12,"#4a78b0","#dccfb4"],[25,"#4a80ba","#c7dcec"],[50,"#3f78b8","#b4d2e8"],[90,"#3a72b0","#accce6"]],kv=`varying vec3 vDir;
void main(){ vDir = normalize(position); vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_Position = p.xyww; }`,Vv=`precision highp float;
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
}`;function m0(i,e){let t={uTop:{value:new Qe},uHor:{value:new Qe},uLow:{value:new Qe},uSunDir:{value:new N(0,1,0)},uSunCol:{value:new Qe(1,.8,.6)},uMoonDir:{value:new N(.3,.55,-.78).normalize()},uSunI:{value:0},uMoonI:{value:0},uTime:{value:0},uCloud:{value:.4},uAurora:{value:0},uThermal:{value:0},uSnowLine:{value:0}},n=new Jt({uniforms:t,vertexShader:kv,fragmentShader:Vv,side:$n,depthWrite:!1,depthTest:!1}),s=new Fe(new Zn(500,48,28),n);s.renderOrder=-10,s.frustumCulled=!1,s.userData.noThermal=!0,s.userData.noAO=!0,e.add(s);let r=Jn(7),a=1500,o=new Float32Array(a*3);for(let y=0;y<a;y++){let w=r()*Math.PI*2,A=Math.acos(1-r()*1),x=480;o[y*3]=Math.sin(A)*Math.cos(w)*x,o[y*3+1]=Math.cos(A)*x,o[y*3+2]=Math.sin(A)*Math.sin(w)*x}let c=new Ft;c.setAttribute("position",new Rt(o,3));let l=new On({color:14674175,size:1.7,sizeAttenuation:!1,transparent:!0,opacity:0,fog:!1,depthWrite:!1}),h=new qn(c,l);h.frustumCulled=!1,h.renderOrder=-9,h.userData.noAO=!0,e.add(h);function f(y,w,A){let x=document.createElement("canvas");x.width=4096,x.height=256;let b=x.getContext("2d"),C=Jn(y);b.filter="blur(1.4px)";let F=Array.from({length:8},()=>C()*6.28);b.clearRect(0,0,2048,256),b.beginPath(),b.moveTo(0,256);let S=[3,7,15,31,63],L=[.5,.28,.15,.08*A,.045*A];for(let Y=0;Y<=4096;Y+=2){let k=Y/4096*Math.PI*2,V=0;for(let z=0;z<5;z++)V+=L[z]*Math.pow(1-Math.abs(Math.sin(k*S[z]+F[z])),1.6);b.lineTo(Y,256-Et(V/1.06,0,1)*w)}b.lineTo(4096,256),b.closePath();let P=b.createLinearGradient(0,256-w,0,256);P.addColorStop(0,"rgba(255,255,255,1)"),P.addColorStop(.3,"rgba(232,236,248,1)"),P.addColorStop(.62,"rgba(120,132,160,1)"),P.addColorStop(1,"rgba(66,74,96,0)"),b.fillStyle=P,b.fill();let H=new En(x);return H.colorSpace=Kt,H.wrapS=wn,H.anisotropy=4,H}function p(y){let w=document.createElement("canvas");w.width=2048,w.height=128;let A=w.getContext("2d"),x=Jn(y);A.clearRect(0,0,2048,128),A.fillStyle="rgba(255,255,255,1)";for(let C=0;C<2048;C+=3){let F=34+x()*40+Math.sin(C*.01)*10,S=6+x()*7;A.beginPath(),A.moveTo(C-S,128),A.lineTo(C,128-F),A.lineTo(C+S,128),A.fill()}A.fillRect(0,100,2048,28);let b=new En(w);return b.colorSpace=Kt,b.wrapS=wn,b}let u=[{tex:f(3,220,1),R:450,h:190,y:40,k:.8,mix:.86},{tex:f(11,170,.8),R:360,h:120,y:16,k:.55,mix:.68},{tex:p(5),R:300,h:34,y:8,k:.22,mix:.2}].map(y=>{let w=new rn({map:y.tex,transparent:!0,side:$n,depthWrite:!1,fog:!1,color:4478327}),A=new Fe(new $t(y.R,y.R,y.h,96,1,!0),w);return A.position.y=y.y,A.renderOrder=-8,A.frustumCulled=!1,A.userData.noThermal=!0,A.userData.noAO=!0,e.add(A),{...y,mat:w,mesh:A}}),d=new jr(i),_=new Js,g=new Fe(new Zn(50,32,16),n.clone());g.material.uniforms=t,g.material.depthTest=!0,_.add(g);let m=null,E="",T=new Qe,v=new Qe;return{dome:s,mat:n,U:t,stars:h,horizon:new Qe,zenith:new Qe,update(y,w){let A=Et(y.elev,-90,90),x=0;for(;x<kc.length-2&&kc[x+1][0]<=A;)x++;let[b,C,F]=kc[x],[S,L,P]=kc[x+1],H=dt(0,1,(A-b)/(S-b));t.uTop.value.copy(T.set(C)).lerp(v.set(L),H),t.uHor.value.copy(T.set(F)).lerp(v.set(P),H),y.seasonTint&&(t.uTop.value.lerp(y.seasonTint.top,y.seasonTint.k),t.uHor.value.lerp(y.seasonTint.hor,y.seasonTint.k)),t.uLow.value.copy(t.uHor.value).multiplyScalar(.55+.25*y.daylight).lerp(T.set(y.snowy?7174806:2764834),.18+.2*y.daylight),t.uLow.value.multiplyScalar(1-.82*(y.voidK||0)),t.uSunDir.value.copy(y.sunDir);let Y=1-dt(0,.5,y.sunDir.y);t.uSunCol.value.setRGB(1,je(.93,.56,Y),je(.84,.32,Y)),t.uSunI.value=dt(-.14,.04,y.sunDir.y)*je(1,1.4,Y),t.uMoonI.value=(1-y.daylight)*.9,t.uTime.value=w,t.uCloud.value=y.cloud??.4,t.uAurora.value=y.aurora||0,t.uThermal.value=y.thermal||0,this.horizon.copy(t.uHor.value),this.zenith.copy(t.uTop.value),l.opacity=Et((1-y.daylight*1.2)*.95,0,1)*(1-(y.thermal||0)),u.forEach(k=>{k.mat.color.copy(t.uHor.value).lerp(t.uTop.value,.12).multiplyScalar(k.k*(.55+.7*y.daylight)).lerp(T.set(16777215),0).multiplyScalar(1),k.mat.color.lerp(t.uHor.value,1-k.mix),k.mat.color.lerp(v.set(2101306),(y.thermal||0)*.9)})},follow(y){s.position.copy(y),h.position.copy(y),u.forEach(w=>{w.mesh.position.x=y.x,w.mesh.position.z=y.z})},refreshEnv(y){let w=[t.uTop.value.getHexString(),t.uHor.value.getHexString(),t.uSunI.value.toFixed(2),t.uAurora.value.toFixed(1),t.uThermal.value.toFixed(1),t.uSunDir.value.x.toFixed(2),t.uSunDir.value.y.toFixed(2)].join("|");if(!y&&w===E)return;E=w;let A=m;m=d.fromScene(_,.015,.1,200,{size:128}),e.environment=m.texture,A&&A.dispose()}}}var fs={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Kn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Wv=new Ns(-1,1,1,-1,0,1),Dh=class extends Ft{constructor(){super(),this.setAttribute("position",new Nt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Nt([0,2,0,0,2,0],2))}},Xv=new Dh,zi=class{constructor(e){this._mesh=new Fe(Xv,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Wv)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var na=class extends Kn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Jt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=hi.clone(e.uniforms),this.material=new Jt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new zi(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var xo=class extends Kn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Vc=class extends Kn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Wc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new He);this._width=n.width,this._height=n.height,t=new dn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:yn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new na(fs),this.copyPass.material.blending=Rn,this.timer=new qa}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}xo!==void 0&&(a instanceof xo?n=!0:a instanceof Vc&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new He);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Xc=class extends Kn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Qe}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var g0={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Qe(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var ia=class i extends Kn{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new He(e.x,e.y):new He(256,256),this.clearColor=new Qe(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new dn(r,a,{type:yn,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let f=new dn(r,a,{type:yn,depthBuffer:!1});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let p=new dn(r,a,{type:yn,depthBuffer:!1});p.texture.name="UnrealBloomPass.v"+h,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),a=Math.round(a/2)}let o=g0;this.highPassUniforms=hi.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Jt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let c=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new He(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=hi.clone(fs.uniforms),this.blendMaterial=new Jt({uniforms:this.copyUniforms,vertexShader:fs.vertexShader,fragmentShader:fs.fragmentShader,premultipliedAlpha:!0,blending:nn,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Qe,this._oldClearAlpha=1,this._basic=new rn,this._fsQuad=new zi(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new He(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let s=[],r=[];for(let a=1;a<e;a+=2){let o=t[a],c=a+1<e?t[a+1]:0,l=o+c;s.push((a*o+(a+1)*c)/l),r.push(l)}return new Jt({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new He(.5,.5)},direction:{value:new He(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new Jt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};ia.BlurDirectionX=new He(1,0);ia.BlurDirectionY=new He(0,1);var vo={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Yc=class extends Kn{constructor(){super(),this.isOutputPass=!0,this.uniforms=hi.clone(vo.uniforms),this.material=new Wr({name:vo.name,uniforms:this.uniforms,vertexShader:vo.vertexShader,fragmentShader:vo.fragmentShader}),this._fsQuad=new zi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Wt.getTransfer(this._outputColorSpace)===jt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Ka?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Qa?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ja?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Bs?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===to?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===no?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===eo&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var _o={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new He},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new gt},cameraProjectionMatrixInverse:{value:new gt},cameraWorldMatrix:{value:new gt},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new N(-1,-1,-1)},sceneBoxMax:{value:new N(1,1,1)}},vertexShader:`

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
		}`},yo={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},qc={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function x0(i=5){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=Yv(e),n=t.length,s=new Uint8Array(n*4);for(let a=0;a<n;++a){let o=t[a],c=2*Math.PI*o/n,l=new N(Math.cos(c),Math.sin(c),0).normalize();s[a*4]=(l.x*.5+.5)*255,s[a*4+1]=(l.y*.5+.5)*255,s[a*4+2]=127,s[a*4+3]=255}let r=new Ni(s,e,e);return r.wrapS=wn,r.wrapT=wn,r.needsUpdate=!0,r}function Yv(i){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let a=1;a<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),n[s*e+r]!==0){r-=2,s++;continue}else n[s*e+r]=a++;r++,s--}return n}var Mo={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:Lh(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new He},cameraProjectionMatrixInverse:{value:new gt},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function Lh(i,e,t){let n=qv(i,e,t),s="vec3[SAMPLES](";for(let r=0;r<i;r++){let a=n[r];s+=`vec3(${a.x}, ${a.y}, ${a.z})${r<i-1?",":")"}`}return s}function qv(i,e,t){let n=[];for(let s=0;s<i;s++){let r=2*Math.PI*e*s/i,a=Math.pow(s/(i-1),t);n.push(new N(Math.cos(r),Math.sin(r),a))}return n}var Zc=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,s,r,a=.5*(Math.sqrt(3)-1),o=(e+t)*a,c=Math.floor(e+o),l=Math.floor(t+o),h=(3-Math.sqrt(3))/6,f=(c+l)*h,p=c-f,u=l-f,d=e-p,_=t-u,g,m;d>_?(g=1,m=0):(g=0,m=1);let E=d-g+h,T=_-m+h,v=d-1+2*h,y=_-1+2*h,w=c&255,A=l&255,x=this.perm[w+this.perm[A]]%12,b=this.perm[w+g+this.perm[A+m]]%12,C=this.perm[w+1+this.perm[A+1]]%12,F=.5-d*d-_*_;F<0?n=0:(F*=F,n=F*F*this._dot(this.grad3[x],d,_));let S=.5-E*E-T*T;S<0?s=0:(S*=S,s=S*S*this._dot(this.grad3[b],E,T));let L=.5-v*v-y*y;return L<0?r=0:(L*=L,r=L*L*this._dot(this.grad3[C],v,y)),70*(n+s+r)}noise3d(e,t,n){let s,r,a,o,l=(e+t+n)*.3333333333333333,h=Math.floor(e+l),f=Math.floor(t+l),p=Math.floor(n+l),u=1/6,d=(h+f+p)*u,_=h-d,g=f-d,m=p-d,E=e-_,T=t-g,v=n-m,y,w,A,x,b,C;E>=T?T>=v?(y=1,w=0,A=0,x=1,b=1,C=0):E>=v?(y=1,w=0,A=0,x=1,b=0,C=1):(y=0,w=0,A=1,x=1,b=0,C=1):T<v?(y=0,w=0,A=1,x=0,b=1,C=1):E<v?(y=0,w=1,A=0,x=0,b=1,C=1):(y=0,w=1,A=0,x=1,b=1,C=0);let F=E-y+u,S=T-w+u,L=v-A+u,P=E-x+2*u,H=T-b+2*u,Y=v-C+2*u,k=E-1+3*u,V=T-1+3*u,z=v-1+3*u,G=h&255,q=f&255,fe=p&255,be=this.perm[G+this.perm[q+this.perm[fe]]]%12,Ce=this.perm[G+y+this.perm[q+w+this.perm[fe+A]]]%12,ze=this.perm[G+x+this.perm[q+b+this.perm[fe+C]]]%12,et=this.perm[G+1+this.perm[q+1+this.perm[fe+1]]]%12,Q=.6-E*E-T*T-v*v;Q<0?s=0:(Q*=Q,s=Q*Q*this._dot3(this.grad3[be],E,T,v));let ue=.6-F*F-S*S-L*L;ue<0?r=0:(ue*=ue,r=ue*ue*this._dot3(this.grad3[Ce],F,S,L));let we=.6-P*P-H*H-Y*Y;we<0?a=0:(we*=we,a=we*we*this._dot3(this.grad3[ze],P,H,Y));let me=.6-k*k-V*V-z*z;return me<0?o=0:(me*=me,o=me*me*this._dot3(this.grad3[et],k,V,z)),32*(s+r+a+o)}noise4d(e,t,n,s){let r=this.grad4,a=this.simplex,o=this.perm,c=(Math.sqrt(5)-1)/4,l=(5-Math.sqrt(5))/20,h,f,p,u,d,_=(e+t+n+s)*c,g=Math.floor(e+_),m=Math.floor(t+_),E=Math.floor(n+_),T=Math.floor(s+_),v=(g+m+E+T)*l,y=g-v,w=m-v,A=E-v,x=T-v,b=e-y,C=t-w,F=n-A,S=s-x,L=b>C?32:0,P=b>F?16:0,H=C>F?8:0,Y=b>S?4:0,k=C>S?2:0,V=F>S?1:0,z=L+P+H+Y+k+V,G=a[z][0]>=3?1:0,q=a[z][1]>=3?1:0,fe=a[z][2]>=3?1:0,be=a[z][3]>=3?1:0,Ce=a[z][0]>=2?1:0,ze=a[z][1]>=2?1:0,et=a[z][2]>=2?1:0,Q=a[z][3]>=2?1:0,ue=a[z][0]>=1?1:0,we=a[z][1]>=1?1:0,me=a[z][2]>=1?1:0,Pe=a[z][3]>=1?1:0,Z=b-G+l,Be=C-q+l,ne=F-fe+l,re=S-be+l,J=b-Ce+2*l,ie=C-ze+2*l,le=F-et+2*l,Oe=S-Q+2*l,Ne=b-ue+3*l,qe=C-we+3*l,Je=F-me+3*l,X=S-Pe+3*l,at=b-1+4*l,lt=C-1+4*l,O=F-1+4*l,M=S-1+4*l,K=g&255,te=m&255,he=E&255,Ve=T&255,Ge=o[K+o[te+o[he+o[Ve]]]]%32,Se=o[K+G+o[te+q+o[he+fe+o[Ve+be]]]]%32,ve=o[K+Ce+o[te+ze+o[he+et+o[Ve+Q]]]]%32,$e=o[K+ue+o[te+we+o[he+me+o[Ve+Pe]]]]%32,ct=o[K+1+o[te+1+o[he+1+o[Ve+1]]]]%32,D=.6-b*b-C*C-F*F-S*S;D<0?h=0:(D*=D,h=D*D*this._dot4(r[Ge],b,C,F,S));let $=.6-Z*Z-Be*Be-ne*ne-re*re;$<0?f=0:($*=$,f=$*$*this._dot4(r[Se],Z,Be,ne,re));let ce=.6-J*J-ie*ie-le*le-Oe*Oe;ce<0?p=0:(ce*=ce,p=ce*ce*this._dot4(r[ve],J,ie,le,Oe));let _e=.6-Ne*Ne-qe*qe-Je*Je-X*X;_e<0?u=0:(_e*=_e,u=_e*_e*this._dot4(r[$e],Ne,qe,Je,X));let Ue=.6-at*at-lt*lt-O*O-M*M;return Ue<0?d=0:(Ue*=Ue,d=Ue*Ue*this._dot4(r[ct],at,lt,O,M)),27*(h+f+p+u+d)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}_dot4(e,t,n,s,r){return e[0]*t+e[1]*n+e[2]*s+e[3]*r}};var So=class i extends Kn{constructor(e,t,n=512,s=512,r,a,o){super(),this.width=n,this.height=s,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=x0(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new dn(this.width,this.height,{type:yn,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Jt({defines:Object.assign({},_o.defines),uniforms:hi.clone(_o.uniforms),vertexShader:_o.vertexShader,fragmentShader:_o.fragmentShader,blending:Rn,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new ka,this.normalMaterial.blending=Rn,this.pdMaterial=new Jt({defines:Object.assign({},Mo.defines),uniforms:hi.clone(Mo.uniforms),vertexShader:Mo.vertexShader,fragmentShader:Mo.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Jt({defines:Object.assign({},yo.defines),uniforms:hi.clone(yo.uniforms),vertexShader:yo.vertexShader,fragmentShader:yo.fragmentShader,blending:Rn}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Jt({uniforms:hi.clone(fs.uniforms),vertexShader:fs.vertexShader,fragmentShader:fs.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Ja,blendDst:sr,blendEquation:Bi,blendSrcAlpha:$a,blendDstAlpha:sr,blendEquationAlpha:Bi}),this.blendMaterial=new Jt({uniforms:hi.clone(qc.uniforms),vertexShader:qc.vertexShader,fragmentShader:qc.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Xl,blendSrc:Ja,blendDst:sr,blendEquation:Bi,blendSrcAlpha:$a,blendDstAlpha:sr,blendEquationAlpha:Bi}),this._fsQuad=new zi(null),this._originalClearColor=new Qe,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new Fi,this.depthTexture.format=us,this.depthTexture.type=zs,this.normalRenderTarget=new dn(this.width,this.height,{minFilter:An,magFilter:An,type:yn,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Lh(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Rn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Rn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Rn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Rn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Rn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,n,s,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_renderOverride(e,t,n,s,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,t.push(n))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new Zc,n=e*e*4,s=new Uint8Array(n);for(let a=0;a<e;a++)for(let o=0;o<e;o++){let c=a,l=o;s[(a*e+o)*4]=(t.noise(c,l)*.5+.5)*255,s[(a*e+o)*4+1]=(t.noise(c+e,l)*.5+.5)*255,s[(a*e+o)*4+2]=(t.noise(c,l+e)*.5+.5)*255,s[(a*e+o)*4+3]=(t.noise(c+e,l+e)*.5+.5)*255}let r=new Ni(s,e,e,Qn,Hn);return r.wrapS=wn,r.wrapT=wn,r.needsUpdate=!0,r}};So.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var Uh=class extends Kn{constructor(e){super(),this.needsSwap=!1,this.holder=e}render(e,t,n){this.holder.value=n.depthTexture}},v0="varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",_0=`uniform sampler2D tDiffuse; uniform sampler2D tDepth; uniform vec2 uPx; uniform float uNear, uFar, uFocus, uAperture, uMaxBlur; varying vec2 vUv;
    float viewDist(vec2 uv){ float d = texture2D(tDepth, uv).x; return (uNear * uFar) / (uFar - (uFar - uNear) * d); }
    float cocAt(float dist){ return clamp(uAperture * abs(dist - uFocus) / max(dist, 0.001), 0.0, 1.0) * uMaxBlur; }`,Zv=`${_0}
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
    }`,$v=`${_0}
    uniform sampler2D tBlur; uniform vec2 uHalfPx;
    void main(){
      vec4 sharp = texture2D(tDiffuse, vUv);
      vec2 o = uHalfPx * 0.5;
      vec4 blur = (texture2D(tBlur, vUv + o) + texture2D(tBlur, vUv - o) + texture2D(tBlur, vUv + vec2(o.x, -o.y)) + texture2D(tBlur, vUv + vec2(-o.x, o.y))) * 0.25;
      float w = max(smoothstep(0.75, 2.5, cocAt(viewDist(vUv))), smoothstep(0.0, 0.2, blur.a));
      gl_FragColor = vec4(mix(sharp.rgb, blur.rgb, w), sharp.a);
    }`,Nh=class extends Kn{constructor(e,t){super(),this.depthHolder=e,this.shared={tDepth:{value:null},uPx:{value:new He(1/1440,1/900)},uNear:{value:.3},uFar:{value:1400},uFocus:{value:30},uAperture:{value:0},uMaxBlur:{value:12}},this.half=new dn(720,450,{type:yn,depthBuffer:!1}),this.gather=new Jt({name:"HauseDofGather",defines:{TAPS:t},uniforms:{tDiffuse:{value:null},...this.shared},vertexShader:v0,fragmentShader:Zv,depthTest:!1,depthWrite:!1}),this.composite=new Jt({name:"HauseDofComposite",uniforms:{tDiffuse:{value:null},tBlur:{value:this.half.texture},uHalfPx:{value:new He(1/720,1/450)},...this.shared},vertexShader:v0,fragmentShader:$v,depthTest:!1,depthWrite:!1}),this.quad=new zi(this.gather)}setSize(e,t){let n=Math.max(1,Math.round(e/2)),s=Math.max(1,Math.round(t/2));this.half.setSize(n,s),this.shared.uPx.value.set(1/e,1/t),this.composite.uniforms.uHalfPx.value.set(1/n,1/s),this.shared.uMaxBlur.value=Math.max(6,t*.014)}render(e,t,n){this.shared.tDepth.value=this.depthHolder.value,this.gather.uniforms.tDiffuse.value=n.texture,this.quad.material=this.gather,e.setRenderTarget(this.half),this.quad.render(e),this.composite.uniforms.tDiffuse.value=n.texture,this.quad.material=this.composite,e.setRenderTarget(this.renderToScreen?null:t),this.quad.render(e)}dispose(){this.half.dispose(),this.gather.dispose(),this.composite.dispose(),this.quad.dispose()}},Jv={name:"HauseGrade",uniforms:{tDiffuse:{value:null},uTime:{value:0},uVig:{value:.32},uGrain:{value:.03},uCA:{value:.0011},uSat:{value:1.05},uCon:{value:1.05},uThermal:{value:0},uAspect:{value:1.6}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float uTime, uVig, uGrain, uCA, uSat, uCon, uThermal, uAspect; varying vec2 vUv;
    float hash(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233)) + uTime) * 43758.5453); }
    void main(){
      vec2 c = vUv - 0.5; c.x *= uAspect * 0.62; float r2 = dot(c, c);
      vec2 off = (vUv - 0.5) * r2 * uCA * 6.0;
      vec3 col = vec3(texture2D(tDiffuse, vUv + off).r, texture2D(tDiffuse, vUv).g, texture2D(tDiffuse, vUv - off).b);
      float l = dot(col, vec3(0.2126, 0.7152, 0.0722));
      col = mix(vec3(l), col, uSat);
      col = (col - 0.5) * uCon + 0.5;
      // split tone: cool shadows, warm highlights
      col = mix(col * vec3(0.96, 0.99, 1.05), col * vec3(1.04, 1.0, 0.95), smoothstep(0.15, 0.85, l));
      col *= 1.0 - uVig * smoothstep(0.08, 0.6, r2);
      col += (hash(vUv * vec2(1920.0, 1080.0)) - 0.5) * uGrain;
      gl_FragColor = vec4(max(col, 0.0), 1.0);
    }`};function y0(i,e,t,n,s,r){let a=n>=2?4:n===1?2:0,o=new dn(s,r,{type:yn,samples:a,depthTexture:new Fi(s,r)}),c=new Wc(i,o);c.setPixelRatio(1),c.addPass(new Xc(e,t));let l={value:null};c.addPass(new Uh(l));let h=null,f=null;n>=2&&(h=new So(e,t,s,r,void 0,{radius:.9,distanceExponent:1.4,thickness:1.2,scale:1,samples:12,distanceFallOff:1,screenSpaceRadius:!1},{lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,radiusExponent:1,rings:2,samples:12}),h.blendIntensity=.9,h._overrideVisibility=function(){let d=this._visibilityCache;this.scene.traverse(_=>{(_.isPoints||_.isLine||_.isLine2||_.isSprite||_.userData&&_.userData.noAO)&&_.visible&&(_.visible=!1,d.push(_))})},c.addPass(h));let p=null;n>=1&&(p=new Nh(l,n>=2?48:20),p.enabled=!1,c.addPass(p),p.setSize(c.readBuffer.width,c.readBuffer.height)),n>=1&&(f=new ia(new He(s,r),.55,.62,1),c.addPass(f)),c.addPass(new Yc);let u=new na(Jv);return n===0&&(u.uniforms.uCA.value=0,u.uniforms.uGrain.value=.015),c.addPass(u),{composer:c,bloom:f,gtao:h,dof:p,grade:u,tier:n,setDof(d,_,g,m){if(!p)return;p.enabled=d>.01;let E=p.shared;E.uAperture.value=d,E.uFocus.value=_,E.uNear.value=g,E.uFar.value=m},setSize(d,_){c.setSize(d,_),u.uniforms.uAspect.value=d/_},render(d,_){u.uniforms.uTime.value=_%10,c.render(d)},dispose(){c.dispose(),p&&p.dispose(),o.dispose()}}}var Eo=new N;function Gi(i,e,t,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),c=Math.PI/4;Eo.copy(e),Eo[n]=0,Eo.normalize();let l=.5*a/(a+o),h=1-Eo.angleTo(i)/c;return Math.sign(Eo[t])===1?h*l:o/(a+o)+l+l*(1-h)}var ki=class i extends qt{constructor(e=1,t=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let c=new N,l=new N,h=new N(e,t,n).divideScalar(2).subScalar(r),f=this.attributes.position.array,p=this.attributes.normal.array,u=this.attributes.uv.array,d=f.length/6,_=new N,g=.5/a;for(let m=0,E=0;m<f.length;m+=3,E+=2)switch(c.fromArray(f,m),l.copy(c),l.x-=Math.sign(l.x)*g,l.y-=Math.sign(l.y)*g,l.z-=Math.sign(l.z)*g,l.normalize(),f[m+0]=h.x*Math.sign(c.x)+l.x*r,f[m+1]=h.y*Math.sign(c.y)+l.y*r,f[m+2]=h.z*Math.sign(c.z)+l.z*r,p[m+0]=l.x,p[m+1]=l.y,p[m+2]=l.z,Math.floor(m/d)){case 0:_.set(1,0,0),u[E+0]=Gi(_,l,"z","y",r,n),u[E+1]=1-Gi(_,l,"y","z",r,t);break;case 1:_.set(-1,0,0),u[E+0]=1-Gi(_,l,"z","y",r,n),u[E+1]=1-Gi(_,l,"y","z",r,t);break;case 2:_.set(0,1,0),u[E+0]=1-Gi(_,l,"x","z",r,e),u[E+1]=Gi(_,l,"z","x",r,n);break;case 3:_.set(0,-1,0),u[E+0]=1-Gi(_,l,"x","z",r,e),u[E+1]=1-Gi(_,l,"z","x",r,n);break;case 4:_.set(0,0,1),u[E+0]=1-Gi(_,l,"x","y",r,e),u[E+1]=1-Gi(_,l,"y","x",r,t);break;case 5:_.set(0,0,-1),u[E+0]=Gi(_,l,"x","y",r,e),u[E+1]=1-Gi(_,l,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};var fn=10,Dt=8,Vi=2.9,bo=[{key:"roof",dy:9.2},{key:"upper",dy:6.6},{key:"main",dy:4.1},{key:"basement",dy:2},{key:"below",dy:0}],It=(i,e,t)=>new N(i,e,t);function M0({M:i,T:e,markTex:t,glowTex:n}){let s=new ft,r={};bo.forEach(S=>{let L=new ft;L.userData.level=S.key,r[S.key]=L,s.add(L)});let a={},o=[],c=new Ps({color:11126756,transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1,fog:!1}),l={icicles:null,snowL:null,snowR:null,chimneyTop:new _n,fans:[]},h=lr;function f(S,L,P,H,Y=0,k=0,V=0,z,G={}){let q=new qt(S,L,P);h(q,G.uv||{});let fe=new Fe(q,H);if(fe.position.set(Y,k,V),fe.castShadow=G.cast!==!1,fe.receiveShadow=G.receive!==!1,G.edges){let be=new ls(new zr(q,30),c);be.raycast=()=>{},fe.add(be)}return z&&z.add(fe),fe}function p(S,L,P,H,Y,k=0,V=0,z=0,G,q={}){let fe=new ki(S,L,P,q.seg||2,H),be=new Fe(fe,Y);return be.position.set(k,V,z),be.castShadow=q.cast!==!1,be.receiveShadow=!0,G&&G.add(be),be}function u(S,L,P,H,Y,k,V,z=18){let G=new Fe(new $t(S,S,L,z),P);return G.position.set(H,Y,k),G.castShadow=!0,G.receiveShadow=!0,V&&V.add(G),G}function d(S,L,P,H){let Y=a[S]||(a[S]={meshes:[],mats:[],marks:[]}),k=V=>{let z=V.clone();return z.userData.baseEmissive=z.emissive.clone(),z};if(L.forEach(V=>{V.material=Array.isArray(V.material)?V.material.map(k):k(V.material),V.userData.sys=S,Y.meshes.push(V),Y.mats.push(...[].concat(V.material))}),P){let V=new Yn(new Fn({map:t,transparent:!0,depthTest:!1,depthWrite:!1,opacity:0}));V.position.copy(P),V.scale.set(.95,.95,1),V.renderOrder=10,V.userData.sys=S,V.userData.noAO=!0,r[H].add(V),Y.marks.push(V)}}let _=0,g={},m=S=>g[S]||(g[S]=h0(S));function E(S,L,P,H,Y,k){let V=L.x1-L.x0,z=L.y1-L.y0,G=(L.x0+L.x1)/2,q=(L.y0+L.y1)/2,fe=new ft;fe.position.set(G,q,0),S.add(fe);let be=Ih(m(H||"living")),Ce=new Fe(new tn(V,z),be);Ce.position.z=.03,Ce.receiveShadow=!1,fe.add(Ce);let ze=.075,et=.1;p(V,ze,et,.012,i.trim,0,z/2-ze/2,.07,fe,{seg:1}),p(V,ze,et,.012,i.trim,0,-z/2+ze/2,.07,fe,{seg:1}),p(ze,z,et,.012,i.trim,-V/2+ze/2,0,.07,fe,{seg:1}),p(ze,z,et,.012,i.trim,V/2-ze/2,0,.07,fe,{seg:1});let Q=V>1.35?Math.round(V/.95):1;for(let we=1;we<Q;we++)p(.035,z-.1,.07,.008,i.trim,-V/2+V/Q*we,0,.065,fe,{seg:1,cast:!1});z>1.2&&p(V-.1,.035,.07,.008,i.trim,0,z*.12,.065,fe,{seg:1,cast:!1}),p(V+.22,.055,.26,.012,i.cedar,0,-z/2-.03,.14,fe,{seg:1}),p(V+.18,.09,.12,.012,i.trim,0,z/2+.07,.1,fe,{seg:1});let ue=new Yn(new Fn({map:n,transparent:!0,depthWrite:!1,blending:nn,opacity:0}));return ue.position.set(0,0,.4),ue.scale.set(V*2.6,z*2.6,1),ue.userData.noAO=!0,fe.add(ue),o.push({mat:be,halo:ue,order:Y!=null?Y+_*.001:_,always:!!k,w:V,h:z}),_++,fe}function T(S,L,P){let H=L.x1-L.x0,Y=L.y1-L.y0,k=(L.x0+L.x1)/2,V=(L.y0+L.y1)/2,z=new ft;z.position.set(k,V,0),S.add(z),f(H,Y,.07,i.door,0,0,0,z,{uv:{ox:k,oy:V}});let G=new Fe(new tn(.22,Y*.72),Ih(m("hall")));G.position.set(-H/2+.22,.05,.04),z.add(G),o.push({mat:G.material,halo:null,order:.5,always:!1,w:.22,h:Y*.72}),p(.03,.8,.05,.012,i.trim,H/2-.14,-.05,.08,z,{seg:1}),p(H+.14,.09,.12,.012,i.trim,0,Y/2+.07,.07,z,{seg:1}),p(.07,Y,.1,.01,i.trim,-H/2-.035,0,.06,z,{seg:1}),p(.07,Y,.1,.01,i.trim,H/2+.035,0,.06,z,{seg:1})}function v(S,L,P,H,Y,k,V,z,G={}){let q=new ft,fe=new Set([-S/2,S/2]),be=new Set([0,L]);H.forEach(Q=>{fe.add(Q.x0),fe.add(Q.x1),be.add(Q.y0),be.add(Q.y1)});let Ce=[...fe].sort((Q,ue)=>Q-ue),ze=[...be].sort((Q,ue)=>Q-ue),et=[i.trim,i.trim,i.trim,i.trim,Y,i.drywall];for(let Q=0;Q<Ce.length-1;Q++)for(let ue=0;ue<ze.length-1;ue++){let we=(Ce[Q]+Ce[Q+1])/2,me=(ze[ue]+ze[ue+1])/2;H.some(Pe=>we>Pe.x0&&we<Pe.x1&&me>Pe.y0&&me<Pe.y1)||f(Ce[Q+1]-Ce[Q],ze[ue+1]-ze[ue],P,et,we,me,0,q,{edges:!0,uv:{ox:we,oy:me+(G.v0||0)}})}return H.forEach(Q=>{Q.door?T(q,Q,P):E(q,Q,P,Q.room,G.order,Q.always)}),q.position.copy(V),q.rotation.y=z||0,k.add(q),q}(()=>{let S=r.below,L=[],P=i.form;L.push(f(fn+.5,3.4,.25,P,0,-1.4,Dt/2+.12,S,{edges:!0,uv:{ox:0,oy:-1.4}})),L.push(f(fn+.5,3.4,.25,P,0,-1.4,-Dt/2-.12,S,{edges:!0,uv:{ox:0,oy:-1.4}})),L.push(f(.25,3.4,Dt,P,fn/2+.12,-1.4,0,S,{edges:!0,uv:{oy:-1.4}})),L.push(f(.25,3.4,Dt,P,-fn/2-.12,-1.4,0,S,{edges:!0,uv:{oy:-1.4}})),f(fn+1.2,.3,.8,i.concrete,0,-3.1,Dt/2+.1,S),f(fn+1.2,.3,.8,i.concrete,0,-3.1,-Dt/2-.1,S),f(.8,.3,Dt,i.concrete,fn/2+.1,-3.1,0,S),f(.8,.3,Dt,i.concrete,-fn/2-.1,-3.1,0,S);let H=f(fn,.16,Dt,i.slab,0,-2.88,0,S,{edges:!0});d("foundation",[...L,H],It(fn/2+.6,-1.4,1.6),"below");let Y=u(.14,9,i.pipe,.6,-3.25,-Dt/2-4.3,S);Y.rotation.x=Math.PI/2-.05;let k=u(.14,.6,i.pipe,.6,-3,-Dt/2+.2,S),V=u(.12,3.2,i.pvc,.6,-1.6,-Dt/2-1.2,S);d("sewer",[Y,k,V],It(.6,-2.4,-Dt/2-4.5),"below");let z=u(.1,.5,i.pvc,-1.2,-2.7,-1.5,S);d("radon",[z],It(-1.2,-2.2,-1.5),"below");let G=u(.06,fn+1,i.pvc,0,-3.25,Dt/2+.7,S,10);G.rotation.z=Math.PI/2,G.castShadow=!1})(),(()=>{let S=r.basement,L=new pi(16766880,0,15,2);L.position.set(.2,-.7,-.4),S.add(L),S.userData.lights=[L];let P=f(.85,1.7,.85,i.white,-3.3,-2,-2.6,S),H=f(.87,.12,.87,i.copper,-3.3,-1.5,-2.6,S),Y=f(6.2,.36,.5,i.steel,-.3,-.12,-2.6,S),k=f(.5,1,.5,i.steel,-3.3,-.7,-2.6,S),V=u(.07,1.2,i.pvc,-3,-.6,-3.1,S);d("hvac",[P,H,Y,k,V],It(-3.3,-.9,-2),"basement");let z=u(.3,1.4,i.white,-2.1,-2.1,-3,S),G=u(.04,1.2,i.copper,-2,-.9,-3,S);d("water-heaters",[z,G],It(-2.1,-1.1,-2.6),"basement");let q=f(.62,.95,.14,i.steel,2.8,-1.2,-3.8,S),fe=f(.4,.7,.02,i.copper,2.8,-1.2,-3.72,S),be=u(.05,1.5,i.copper,2.8,-.1,-3.8,S);d("electrical",[q,fe,be],It(2.8,-.5,-3.3),"basement");let Ce=u(.1,3.1,i.pvc,-1.2,-1.2,-1.5,S);d("radon",[Ce],null,"basement"),u(.09,3.1,i.pipe,-2.6,-1.3,-3.6,S);for(let ze=-4;ze<=4;ze++)f(.09,.3,Dt-.3,i.cedar,ze*1,0-.1,0,S,{cast:!1})})();let y=[{x0:-3.8,x1:-1.2,y0:.7,y1:2.5,room:"living"},{x0:.2,x1:1.3,y0:0,y1:2.2,door:!0},{x0:2.1,x1:4.2,y0:.7,y1:2.5,room:"kitchen"}];(()=>{let S=r.main,L=.3;f(fn,.3,Dt,i.floor,0,.15,0,S,{edges:!0}),v(fn,Vi,.22,y,i.lap,S,It(0,L,Dt/2),0,{order:1,v0:L}),v(fn,Vi,.22,[{x0:-3,x1:1.6,y0:.1,y1:2.45,room:"kitchen"}],i.lap,S,It(0,L,-Dt/2),Math.PI,{order:4,v0:L}),v(Dt,Vi,.22,[{x0:-2.2,x1:-.2,y0:.8,y1:2.3,room:"hall"}],i.lap,S,It(fn/2,L,0),Math.PI/2,{order:2,v0:L}),v(Dt,Vi,.22,[{x0:.3,x1:2.3,y0:.8,y1:2.3,room:"living"}],i.lap,S,It(-fn/2,L,0),-Math.PI/2,{order:3,v0:L}),f(.15,Vi,5,i.drywall,1.2,L+Vi/2,-1.2,S);let P=f(3,.95,.65,i.counter,2.9,L+.48,-3.4,S),H=p(.85,1.95,.7,.03,i.steel,4.35,L+.98,-3.4,S),Y=f(.75,.05,.6,i.steel,2.4,L+.97,-3.4,S);d("installation",[P,H,Y],It(3,2.3,-3.2),"main");let k=u(.1,3.2,i.pvc,-1.2,1.9,-1.5,S);d("radon",[k],null,"main"),u(.09,3.2,i.pipe,-2.6,1.9,-3.6,S),p(.3,.42,.18,.02,i.white,2.8,1.5,-Dt/2-.2,S),u(.035,3.6,i.steel,2.8,3.55,-Dt/2-.1,S,10);let V=new pi(16758123,0,11,2);V.position.set(-1.5,2.4,.5),S.add(V);let z=new pi(16758123,0,9,2);z.position.set(3,2.4,-1.5),S.add(z),S.userData.lights=[V,z];let G=new ft;S.add(G),f(2.9,.32,2.3,i.stone,.55,.16,5.1,G,{uv:{ox:.55,oy:.16}}),f(2.9,.07,2.3,i.cedar,.55,.35,5.1,G,{uv:{}}),f(1.7,.17,.4,i.concrete,.7,.085,6.55,G),f(1.9,.17,.4,i.concrete,.7,.255-.085,6.2,G),[-.75,1.85].forEach(Ce=>{p(.22,2.55,.22,.015,i.cedar,Ce,1.67,6.12,G),f(.34,.5,.34,i.stone,Ce,.6,6.12,G,{uv:{ox:Ce,oy:.6}})}),p(3.5,.24,.22,.02,i.cedar,.55,2.84,6.12,G);let q=f(3.4,.14,2.6,[i.trim,i.trim,i.roof,i.cedar,i.trim,i.trim],.55,3,5.25,G,{uv:{swap:!0}});q.rotation.x=.1,[-.15,1.65].forEach(Ce=>{let ze=new Fe(new $t(.06,.07,.24,12),i.sconce);ze.position.set(Ce,1.9,4.2),ze.userData.noAO=!0,G.add(ze);let et=new Yn(new Fn({map:n,transparent:!0,depthWrite:!1,blending:nn,opacity:0}));et.position.set(Ce,1.9,4.5),et.scale.set(1.6,1.6,1),et.userData.noAO=!0,G.add(et),l.porchHalos=(l.porchHalos||[]).concat(et)}),[-.78,1.88].forEach(Ce=>{f(.06,.06,2,i.trim,Ce,1.2,5.15,G),f(.05,.05,2,i.trim,Ce,.55,5.15,G);for(let ze=0;ze<8;ze++)f(.025,.62,.025,i.trim,Ce,.9,4.25+ze*.27,G,{cast:!1})});let fe=new Fe(new tn(.2,.2),new rn({map:t,transparent:!0,toneMapped:!1}));fe.position.set(1.62,1.35,4.13),fe.userData.noAO=!0,G.add(fe);let be=new pi(16761469,0,7,2);be.position.set(.75,2.6,Dt/2+1.1),S.add(be),S.userData.porch=be})(),(()=>{let S=r.upper,L=3.45;f(fn,.25,Dt,i.floor,0,3.32,0,S,{edges:!0}),v(fn,Vi,.22,[{x0:-3.6,x1:-1.8,y0:.9,y1:2.4,room:"bed"},{x0:-.9,x1:1.9,y0:.5,y1:2.5,room:"living"},{x0:2.6,x1:4.1,y0:.9,y1:2.4,room:"bed"}],i.bb,S,It(0,L,Dt/2),0,{order:5,v0:L}),v(fn,Vi,.22,[{x0:-3.4,x1:-1.8,y0:.9,y1:2.3,room:"bath"},{x0:1.6,x1:3.2,y0:.9,y1:2.3,room:"bed"}],i.bb,S,It(0,L,-Dt/2),Math.PI,{order:8,v0:L}),v(Dt,Vi,.22,[{x0:.6,x1:2.4,y0:.9,y1:2.3,room:"bed"}],i.bb,S,It(fn/2,L,0),Math.PI/2,{order:6,v0:L}),v(Dt,Vi,.22,[{x0:-2.2,x1:-.6,y0:1.2,y1:2.2,room:"bath"}],i.bb,S,It(-fn/2,L,0),-Math.PI/2,{order:7,v0:L}),f(.15,Vi,Dt-.4,i.drywall,-1.6,L+Vi/2,0,S);let P=p(1.7,.55,.8,.08,i.ceramic,-3.6,L+.28,-3.35,S),H=p(.7,.85,.5,.04,i.ceramic,-2.4,L+.43,-3.5,S),Y=u(.09,3,i.pipe,-2.6,L+1.4,-3.6,S);d("plumbing",[P,H,Y],It(-3.4,4.6,-3),"upper");let k=u(.1,3,i.pvc,-1.2,L+1.4,-1.5,S);d("radon",[k],null,"upper");let V=new pi(16758123,0,11,2);V.position.set(.5,5.6,.5),S.add(V),S.userData.lights=[V]})(),(()=>{let S=r.roof,L=6.35,P=3.6,H=fn/2,Y=.6,k=Math.atan2(P,H),V=Math.hypot(H+Y,(H+Y)*P/H),z=J=>{let ie=new qt(V,.2,Dt+1);h(ie,{swap:!0});let le=new Fe(ie,[i.trim,i.trim,i.roof,i.cedar,i.trim,i.trim]);le.castShadow=!0,le.receiveShadow=!0,le.rotation.z=J*k;let Oe=L+P-(H+Y)/2*(P/H)+.12;return le.position.set(J>0?-(H+Y)/2+.02:(H+Y)/2-.02,Oe,0),S.add(le),le},G=z(1),q=z(-1);[G,q].forEach(J=>{let ie=new ls(new zr(J.geometry,30),c);ie.raycast=()=>{},J.add(ie)}),[G,q].forEach((J,ie)=>{[-1,1].forEach(Ne=>f(V,.3,.06,i.trim,0,-.05,Ne*(Dt/2+.5),J,{cast:!1}));let le=ie===0?-1:1;f(.06,.34,Dt+1.04,i.trim,le*(V/2),-.1,0,J,{cast:!1});let Oe=f(.12,.1,Dt+.9,i.trim,le*(V/2+.06),-.28,0,J,{cast:!1});Oe.rotation.z=-J.rotation.z}),f(.3,.22,Dt+1.05,i.trim,0,L+P+.2,0,S),d("roofing",[G,q],It(-2.8,9.1,2.2),"roof");let fe=new ui;fe.moveTo(-H,0),fe.lineTo(H,0),fe.lineTo(0,P),fe.lineTo(-H,0);let be=new js;be.moveTo(-.5,1.15),be.lineTo(.5,1.15),be.lineTo(.5,2.15),be.lineTo(-.5,2.15),be.lineTo(-.5,1.15),fe.holes.push(be);let Ce=new Oi(fe,{depth:.22,bevelEnabled:!1});[Dt/2-.22,-Dt/2].forEach((J,ie)=>{let le=new Fe(Ce,[i.bb,i.trim]);le.position.set(0,L,J),le.castShadow=!0,le.receiveShadow=!0,S.add(le);let Oe=new ft;Oe.position.set(0,L+1.65,J+.11),S.add(Oe);let Ne=E(Oe,{x0:-.5,x1:.5,y0:-.5,y1:.5,room:"hall"},.22,"hall",-1,!0);ie===1&&(Oe.rotation.y=Math.PI,Oe.position.z=J+.11-0);let qe=new Yn(new Fn({map:n,transparent:!0,depthWrite:!1,blending:nn,opacity:0}));qe.position.set(0,L+1.65,J+(ie===0?.55:-.3)),qe.scale.set(3.4,3.4,1),qe.userData.noAO=!0,S.add(qe),o.push({mat:null,halo:qe,order:-1,always:!0,w:1,h:1,haloOnly:!0,level:.6})});let ze=new ft;ze.rotation.z=-k,ze.position.copy(q.position);let et=[];for(let J=0;J<2;J++)for(let ie=0;ie<4;ie++){let le=f(1.3,.05,.95,i.solar,-.9+J*1.45,.16,-1.6+ie*1.05,ze,{cast:!1}),Oe=f(1.34,.04,.99,i.solarFrame,-.9+J*1.45,.14,-1.6+ie*1.05,ze,{cast:!1});et.push(le)}S.add(ze),d("solar",et,It(3.4,9.3,.6),"roof");let Q=J=>{let ie=new tn(V-.25,Dt+.7,30,30),le=ie.attributes.position,Oe=Jn(5);for(let Je=0;Je<le.count;Je++)le.setZ(Je,.025+Oe()*.05);ie.computeVertexNormals();let Ne=i.snowRoof.clone();Ne.alphaMap=u0(256,J),Ne.alphaTest=.25,Ne.userData={...i.snowRoof.userData};let qe=new Fe(ie,Ne);return qe.rotation.x=-Math.PI/2,qe.position.y=.105,qe.receiveShadow=!0,qe.castShadow=!0,qe};l.snowL=Q(),l.snowL.userData.keep=!0,G.add(l.snowL),l.snowR=Q((J,ie)=>J>.24&&J<.7&&ie>.24&&ie<.76?0:1),l.snowR.userData.keep=!0,q.add(l.snowR);let ue=f(.5,.16,Dt+.8,i.snowRoof,0,L+P+.38,0,S,{cast:!1});ue.material=i.snowRoof,ue.userData.keep=!0,(()=>{let J=Jn(9),ie=70,le=new Qs(.04,1,6);le.rotateX(Math.PI),le.translate(0,-.5,0);let Oe=new Si(le,i.ice,ie*2),Ne=new gt,qe=new mn,Je=new N,X=new N,at=L+P-(H+Y)*(P/H)+0;for(let lt=0;lt<2;lt++)for(let O=0;O<ie;O++){let M=-Dt/2-.4+O/(ie-1)*(Dt+.8),K=.12+J()*J()*.7,te=.7+J()*.8;Je.set((lt?1:-1)*(H+Y+.08),at-.35,M+(J()-.5)*.06),X.set(te,K,te),Ne.compose(Je,qe,X),Oe.setMatrixAt(lt*ie+O,Ne)}Oe.userData.baseMatrices=Array.from({length:ie*2},(lt,O)=>{let M=new gt;return Oe.getMatrixAt(O,M),M}),Oe.castShadow=!1,Oe.userData.noAO=!0,Oe.visible=!1,S.add(Oe),l.icicles=Oe})();let we=new tn(fn-.6,Dt-.6,40,32),me=we.attributes.position,Pe=Jn(3);for(let J=0;J<me.count;J++)me.setZ(J,Pe()*.12);we.computeVertexNormals();let Z=new Fe(we,i.insul);Z.rotation.x=-Math.PI/2,Z.position.y=L+.02,Z.receiveShadow=!0,S.add(Z),f(fn,.1,Dt,i.floor,0,L-.05,0,S),d("asbestos",[Z],It(-.4,7.3,-.8),"roof");let Be=u(.1,4.6,i.pvc,-1.2,L+2.2,-1.5,S);d("radon",[Be],It(-1.2,10.9,-1.5),"roof");let ne=u(.24,.42,i.steel,-1.2,7.9,-1.5,S,16);d("radon",[ne],null,"roof"),u(.09,4,i.pipe,-2.6,L+2,-3.6,S);let re=f(.95,4.1,.95,i.stone,-3.4,8.4,-1.6,S,{uv:{ox:-3.4,oy:8.4}});f(1.15,.12,1.15,i.concrete,-3.4,10.5,-1.6,S),f(.7,.3,.7,i.steel,-3.4,10.7,-1.6,S),l.chimneyTop.position.set(-3.4,10.9,-1.6),S.add(l.chimneyTop)})();let w={meter:It(2.8,1.45,-4.3),panel:It(2.8,-1.2,-3.8),shutoff:It(-.5,-1.4,3.75),heater:It(-2.1,-2,-3),sewer:It(.6,-3.35,-7.5),furnace:It(-3.3,-2,-2.6),register:It(3.8,3.52,2.9),fan:It(-1.2,7.9,-1.5),pit:It(-1.2,-3,-1.5),exhaust:It(-1.2,11.6,-1.5),rim:It(4.9,.3,4.05),sill:It(-2.5,.7,4.05),attic:It(0,6.4,4.05),door:It(.75,1.2,4.05),chimney:It(-3.4,10.5,-1.6),eave:It(-5.6,5.9,3.5),potlights:It(-2.4,3.1,.7),rangeHood:It(2.4,2.4,-3.55),island:It(3,1.3,-.6),vanity:It(-2.4,4.4,-3.55),tub:It(-3.6,4.1,-3.35),bedWindow:It(2.4,5.2,-3.9),sump:It(.66,-2.2,1.6)},A=new gt,x=new N,b=new mn,C=new N;function F(S,L,P,H,Y){let k=H<.55?1:0;F.on=je(F.on??0,k,Et(Y*(k?.55:1.2),0,1));let V=F.on*9,z=(1-S.ghost*.85)*(1-.35*(S.cut||0)),G=1-.65*(S.cut||0),q=1+1.6*(S.cut||0);o.forEach(we=>{let me=(we.always?1:Et(V-we.order,0,1))*z,Pe=1-H*.8;we.mat&&(we.mat.emissiveIntensity=(we.always?2.6:2)*me*Pe*G),we.halo&&(we.halo.material.opacity=(we.haloOnly?.28:we.always?.5:.3)*me*Pe*G)}),["main","upper"].forEach(we=>(r[we].userData.lights||[]).forEach(me=>{me.intensity=9*Et(V/9,0,1)*(1-H)*z*q}));let fe=Math.max(S.zk||0,dt(.2,.7,S.explode||0),Et(((S.lift||0)-1.5)/1.5,0,1));(r.basement.userData.lights||[]).forEach(we=>{we.intensity=30*fe*z*q});let be=(1-H)*z;r.main.userData.porch.intensity=12*be,(l.porchHalos||[]).forEach(we=>{we.material.opacity=.55*be*G}),i.sconce.emissiveIntensity=.4+3.2*(1-H);let Ce=Et(S.melt,0,1),ze=.18+Ce*.8;l.snowL.material.alphaTest=ze,l.snowR.material.alphaTest=Et(ze+.1,0,1);let et=r.roof.children.find(we=>we.material===i.snowRoof);et&&(et.visible=Ce<.6);let Q=l.icicles,ue=Et(S.icicles,0,1);if(Q.visible=ue>.01,Q.visible){for(let we=0;we<Q.count;we++)A.copy(Q.userData.baseMatrices[we]),A.decompose(x,b,C),C.y*=ue,C.x*=.5+.5*ue,C.z=C.x,A.compose(x,b,C),Q.setMatrixAt(we,A);Q.instanceMatrix.needsUpdate=!0}return V}return{house:s,layers:r,sys:a,windows:o,ANCHORS:w,edgeMat:c,extra:l,update:F,box:f,rbox:p,cyl:u,system:d,wall:v,windowUnit:E,setUV:h,v:It}}function Wi(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,c=new Ft,l=0;for(let h=0;h<i.length;++h){let f=i[h],p=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let u in f.attributes){if(!n.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+u+'" attribute exists among all geometries, or in none of them.'),null;r[u]===void 0&&(r[u]=[]),r[u].push(f.attributes[u]),p++}if(p!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let u in f.morphAttributes){if(!s.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[u]===void 0&&(a[u]=[]),a[u].push(f.morphAttributes[u])}if(e){let u;if(t)u=f.index.count;else if(f.attributes.position!==void 0)u=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,u,h),l+=u}}if(t){let h=0,f=[];for(let p=0;p<i.length;++p){let u=i[p].index;for(let d=0;d<u.count;++d)f.push(u.getX(d)+h);h+=i[p].attributes.position.count}c.setIndex(f)}for(let h in r){let f=S0(r[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,f)}for(let h in a){let f=a[h][0].length;if(f!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let p=0;p<f;++p){let u=[];for(let _=0;_<a[h].length;++_)u.push(a[h][_][p]);let d=S0(u);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(d)}}}return c}function S0(i){let e,t,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let a=new e(r),o=new Rt(a,t,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let f=c/t;for(let p=0,u=h.count;p<u;p++)for(let d=0;d<t;d++){let _=h.getComponent(p,d);o.setComponent(p+f,d,_)}}else a.set(h.array,c);c+=h.count*t}return s!==void 0&&(o.gpuType=s),o}var Oh=0,E0={value:new hn(0,0,-1,30)};function To(i,e,t,n=!1){let s=i.onBeforeCompile,r=++Oh;return i.onBeforeCompile=(a,o)=>{s&&s(a,o),a.uniforms.uSight=E0,a.fragmentShader=a.fragmentShader.replace("#include <common>",`#include <common>
uniform vec4 uSight;`).replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
      { vec3 fp = -vViewPosition;
        float fd = smoothstep(${e.toFixed(1)}, ${t.toFixed(1)}, length(fp));${n?`
        float fs = dot(fp, uSight.xyz);
        float fc = 1.0 - smoothstep(0.12, 0.26, length(fp - fs * uSight.xyz) / max(fs, 0.5));
        fd = min(fd, 1.0 - 0.94 * fc * smoothstep(0.5, 4.0, uSight.w - fs) * step(0.0, fs));`:""}
        float fh = fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715))));
        if (fd < fh) discard; }`)},i.customProgramCacheKey=()=>"fade"+r,i}function Fh(i,e){let t=i.onBeforeCompile,n=++Oh;return i.onBeforeCompile=(s,r)=>{t&&t(s,r),s.uniforms.uSnow=e,s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
attribute float aSnow;
uniform float uSnow;`).replace("#include <color_vertex>",`#include <color_vertex>
vColor.rgb = mix(vColor.rgb, vec3(0.8, 0.86, 0.95), aSnow * uSnow);`)},i.customProgramCacheKey=()=>"snowv"+n,i}function b0({M:i,T:e,glowTex:t,markTex:n,tier:s,reduce:r}){let a=new ft,o=Jn(21),c=Es("rgba(255,255,255,0.7)"),l=f0(),h=ta("rgba(255,196,120,0.9)","rgba(255,150,70,0)"),f={uSnow:{value:1},uRoofSnow:{value:1},uTint:{value:new Qe(1,1,1)},uGrow:{value:0},uLeafTint:{value:new Qe(.3,.5,.15)}},p=e.grass,u=e.snow,d=new Yt({map:u.map,normalMap:u.normalMap,roughnessMap:u.rmMap,metalnessMap:u.rmMap,roughness:1,metalness:1,transparent:!0,normalScale:new He(1.1,1.1),envMapIntensity:.9});d.onBeforeCompile=W=>{W.uniforms.uSnow=f.uSnow,W.uniforms.uTint=f.uTint,W.uniforms.uGrass={value:p.map},W.vertexShader=W.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vWxz;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vWxz = (modelMatrix * vec4(position, 1.0)).xz;`),W.fragmentShader=W.fragmentShader.replace("#include <common>",`#include <common>
      uniform float uSnow; uniform vec3 uTint; uniform sampler2D uGrass; varying vec2 vWxz;
      float gh(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float gn(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f); return mix(mix(gh(i), gh(i+vec2(1,0)), f.x), mix(gh(i+vec2(0,1)), gh(i+vec2(1,1)), f.x), f.y); }`).replace("#include <map_fragment>",`
      vec4 snowC = texture2D(map, vMapUv);
      vec3 gr = texture2D(uGrass, vWxz * 0.25).rgb * uTint;
      float nz = gn(vWxz * 0.35) * 0.55 + gn(vWxz * 1.7) * 0.3 + gn(vWxz * 7.0) * 0.15;
      float cover = smoothstep(uSnow - 0.1, uSnow + 0.1, 1.0 - nz + (uSnow - 0.5) * 0.9);
      cover = uSnow >= 0.995 ? 1.0 : (uSnow <= 0.005 ? 0.0 : cover);
      diffuseColor.rgb *= mix(gr / max(snowC.rgb, vec3(0.2)) * 0.9, vec3(1.0), cover);
      diffuseColor *= snowC;`)};let _=200,g=6,m=450,E=Array.from({length:_+1},(W,j)=>m*Math.sinh(g*(j/_*2-1))/Math.sinh(g)),T=(W,j)=>{let se=Math.hypot(W,j),Le=dt(40,220,se)*(ln(W*.012+3,j*.012+8,4,4096,4096,3)-.35)*22,De=(ln(W*.09,j*.09,3,4096,4096,9)-.5)*.35*dt(8,22,se)*(1-dt(14,17,j)*(1-dt(27,30,j)))*(1-dt(-22.5,-20.5,j)*(1-dt(-15.5,-13.5,j)))*(1-dt(5,6.2,W)*(1-dt(10.2,11.5,W))*dt(.5,2,j)*(1-dt(16.5,18,j)));return Le+De},v=new Ft;{let W=new Float32Array((_+1)*(_+1)*3),j=new Float32Array((_+1)*(_+1)*2),se=[];for(let Le=0;Le<=_;Le++)for(let De=0;De<=_;De++){let Ee=Le*(_+1)+De,Ye=E[De],Ze=E[Le];W[Ee*3]=Ye,W[Ee*3+1]=T(Ye,Ze),W[Ee*3+2]=Ze,j[Ee*2]=Ye,j[Ee*2+1]=Ze}for(let Le=0;Le<_;Le++)for(let De=0;De<_;De++){let Ee=(E[De]+E[De+1])/2,Ye=(E[Le]+E[Le+1])/2;if(Math.abs(Ee)<5.1&&Math.abs(Ye)<4.1)continue;let Ze=Le*(_+1)+De,tt=Ze+1,ot=Ze+_+1,ke=ot+1;se.push(Ze,ot,tt,tt,ot,ke)}v.setAttribute("position",new Rt(W,3)),v.setAttribute("uv",new Rt(j,2)),v.setIndex(se),v.computeVertexNormals()}let y=[],w=new Fe(v,d);w.receiveShadow=!0,w.renderOrder=-1,a.add(w);let A=i.asphalt.clone();[A.map,A.normalMap,A.roughnessMap,A.metalnessMap].forEach(W=>{W&&W.repeat.set(220,3)}),A.roughness=.72,A.metalness=0,A.metalnessMap=null,A.envMapIntensity=1.4;let x=new Fe(new tn(660,9),A);x.rotation.x=-Math.PI/2,x.position.set(0,.012,22.2),x.receiveShadow=!0,a.add(x);let b=null;{let W=new tn(2.2,.14),j=new Si(W,new Yt({color:14070346,roughness:.8}),90),se=new gt,Le=new mn().setFromEuler(new Mi(-Math.PI/2,0,0)),De=new N,Ee=new N(1,1,1);for(let Ye=0;Ye<90;Ye++)De.set(-180+Ye*4,.02,22.2),se.compose(De,Le,Ee),j.setMatrixAt(Ye,se);j.receiveShadow=!0,a.add(j),b=j}y.push(A,i.pavement);let C=new Fe(new qt(660,.1,1.8),i.pavement);C.position.set(0,.05,15.6),C.receiveShadow=!0,C.castShadow=!0,a.add(C);let F=new Fe(new qt(1.3,.05,9.4),i.pavement);F.position.set(.7,.03,10.9),F.receiveShadow=!0,a.add(F);let S=new Fe(new qt(3.6,.06,14.5),i.pavement);S.position.set(7.9,.03,9.3),S.receiveShadow=!0,a.add(S);let L=i.asphalt.clone();[L.map,L.normalMap,L.roughnessMap,L.metalnessMap].forEach(W=>{W&&W.repeat.set(220,1.5)}),L.metalnessMap=null,L.metalness=0,L.roughness=.9,L.color.setScalar(1.25),y.push(L);let P=new Fe(new tn(660,4.5),L);P.rotation.x=-Math.PI/2,P.position.set(0,.012,-18.2),P.receiveShadow=!0,a.add(P);let H=(()=>{let W=new Zn(1,10,6),j=new Si(W,new Yt({color:14673906,roughness:.95}),70),se=new gt,Le=new mn,De=new N,Ee=new N;for(let Ye=0;Ye<70;Ye++){let Ze=Ye%2,tt=-140+(Ye>>1)*8+o()*3;De.set(tt,.1,Ze?26.9:17.6+o()*.2),Ee.set(2.8+o()*1.4,.55+o()*.25,.9+o()*.3),se.compose(De,Le,Ee),j.setMatrixAt(Ye,se)}return j.castShadow=!0,j.receiveShadow=!0,a.add(j),j})(),Y=[],k=To(i.pole.clone(),3.5,9),V=To(new Yt({color:3817544,roughness:.42,metalness:.65}),3.5,9),z=new rn({color:new Qe(3.2,2.2,1.1),toneMapped:!1}),G=new di([new N(0,6.9,0),new N(0,7.45,.25),new N(0,7.6,.9),new N(0,7.5,1.6)]),q=new ii(G,14,.05,8),fe=new Zn(1,24,12);fe.scale(.54,.085,.23),[[-13,16.6],[11,16.6],[34,16.6],[-38,16.6]].forEach(([W,j])=>{let se=new ft;se.position.set(W,0,j);let Le=new Fe(new $t(.06,.1,7.2,10),k);Le.position.y=3.6,Le.castShadow=!0,se.add(Le);let De=new Fe(q,k);De.castShadow=!0,se.add(De);let Ee=new Fe(fe,V);Ee.position.set(0,7.5,1.78),Ee.rotation.x=.04,Ee.castShadow=!0,se.add(Ee);let Ye=new Fe(new tn(.8,.24),z);Ye.rotation.x=Math.PI/2,Ye.position.set(0,7.445,1.78),Ye.userData.noAO=!0,se.add(Ye);let Ze=new Yn(new Fn({map:t,transparent:!0,depthWrite:!1,blending:nn,opacity:0}));Ze.position.set(0,7.3,1.78),Ze.scale.set(5,5,1),Ze.userData.noAO=!0,se.add(Ze);let tt=new Fe(new tn(1,1),new rn({map:h,transparent:!0,depthWrite:!1,blending:nn,opacity:0}));tt.rotation.x=-Math.PI/2,tt.position.set(0,.04,2),tt.scale.set(15,10,1),tt.userData.noAO=!0,se.add(tt),a.add(se),Y.push({halo:Ze,pool:tt,lens:Ye})});let be=new pi(16761466,0,32,2);be.position.set(11,7,18.2),a.add(be);let Ce=new pi(16761466,0,32,2);Ce.position.set(-13,7,18.2),a.add(Ce);let ze=[];[[-2.5,7.4,5.5,4.2],[.8,8.4,5.5,4.6],[3.15,7.4,5.5,4.2]].forEach(([W,j,se,Le])=>{let De=new Fe(new tn(1,1),new rn({map:h,transparent:!0,depthWrite:!1,blending:nn,opacity:0}));De.rotation.x=-Math.PI/2,De.position.set(W,.05,j),De.scale.set(se,Le,1),De.userData.noAO=!0,a.add(De),ze.push(De)});let et=To(Fh(i.spruce.clone(),f.uSnow),5,12,!0);function Q(W){let j=Jn(W),se=[],Le=11;for(let xe=0;xe<Le;xe++){let vt=xe/(Le-1),mt=je(1.7,.18,Math.pow(vt,.85))*(.94+j()*.12),Tt=je(1.7,.9,vt),kt=1+xe*.62,Qt=new Qs(mt,Tt,20,4,!0);Qt.translate(0,kt+Tt/2,0);let sn=Qt.attributes.position;for(let Mt=0;Mt<sn.count;Mt++){let Vt=sn.getX(Mt),Ht=sn.getY(Mt),_t=sn.getZ(Mt),Sn=Math.atan2(_t,Vt),Nn=Math.hypot(Vt,_t),oi=1+Math.sin(Sn*7+xe*2.3)*.09+Math.sin(Sn*13+xe)*.04+(j()-.5)*.05,ur=Nn/mt*(Nn/mt)*.34*(1+.35*Math.sin(Sn*5+xe*1.3));sn.setXYZ(Mt,Vt*oi,Ht-ur,_t*oi)}Qt.computeVertexNormals(),se.push(Qt)}let De=new $t(.1,.2,1.6,8);De.translate(0,.8,0),se.push(De);let Ee=Wi(se);Ee.computeVertexNormals();let Ye=Ee.attributes.position,Ze=Ee.attributes.normal,tt=new Float32Array(Ye.count*3),ot=new Float32Array(Ye.count),ke=new Qe;for(let xe=0;xe<Ye.count;xe++){let vt=Ze.getY(xe),mt=ln(Ye.getX(xe)*2.1,Ye.getZ(xe)*2.1+Ye.getY(xe)*1.1,3,64,64,2);ke.setRGB(.05+mt*.05,.12+mt*.08,.09+mt*.05),Ye.getY(xe)<1.15&&ke.setRGB(.1,.07,.05),tt[xe*3]=ke.r,tt[xe*3+1]=ke.g,tt[xe*3+2]=ke.b,ot[xe]=Ye.getY(xe)<1.15?0:Et(dt(.05,.6,vt+(mt-.5)*.7),0,1)*.78}return Ee.setAttribute("color",new Rt(tt,3)),Ee.setAttribute("aSnow",new Rt(ot,1)),Ee}let ue=[[-9.5,3,1.1],[-11.8,-3.5,1.4],[9.8,-5.5,1.25],[-8.2,-8.5,1.05],[15,-9,1.35],[-14,9.5,1.2],[18,9,1.1],[-21,-6,1.5],[24,-3,1.25],[-27,8,1.2],[30,-12,1.4],[-11.5,-13.5,1.3],[6,-26,1.1],[-18,-27,1.45],[22,-27,1.3],[-36,3,1.3],[40,2,1.2]],we=[Q(1),Q(2)],me=we[0];we.forEach((W,j)=>{let se=ue.filter((tt,ot)=>ot%2===j),Le=new Si(W,et,se.length),De=new gt,Ee=new mn,Ye=new N,Ze=new N;se.forEach(([tt,ot,ke],xe)=>{Ee.setFromAxisAngle(new N(0,1,0),o()*6.28),Ye.set(tt,0,ot),Ze.set(ke,ke*(.9+o()*.25),ke),De.compose(Ye,Ee,Ze),Le.setMatrixAt(xe,De)}),Le.castShadow=!0,Le.receiveShadow=!0,a.add(Le)});let Pe=[];{let W=Fh(i.shrub.clone(),f.uSnow),j=new tr(.7,3),se=j.attributes.position,Le=new Float32Array(se.count*3),De=new Float32Array(se.count);for(let Ee=0;Ee<se.count;Ee++){let Ye=se.getX(Ee),Ze=se.getY(Ee),tt=se.getZ(Ee),ot=ln(Ye*2+5,tt*2+Ze*2,3,64,64,4),ke=1+(ot-.5)*.35;se.setXYZ(Ee,Ye*ke,Ze*ke*.72,tt*ke),Le[Ee*3]=.06,Le[Ee*3+1]=.15+ot*.05,Le[Ee*3+2]=.1,De[Ee]=dt(.05,.7,Ze/.7+(ot-.5))*.8}j.setAttribute("color",new Rt(Le,3)),j.setAttribute("aSnow",new Rt(De,1)),j.computeVertexNormals(),[[-1.7,4.9,1.2],[-2.5,4.7,.9],[2.9,4.9,1],[3.7,4.6,.8],[-5.2,4.6,.8]].forEach(([Ee,Ye,Ze])=>{let tt=new Fe(j,W);tt.position.set(Ee,.35*Ze,Ye),tt.scale.setScalar(Ze),tt.castShadow=!0,tt.receiveShadow=!0,tt.userData.keep=!0,a.add(tt),Pe.push(tt)})}let Z=To(Fh(new Yt({vertexColors:!0,roughness:1}),f.uSnow),5,12,!0),Be=(()=>{let W=document.createElement("canvas");W.width=W.height=128;let j=W.getContext("2d"),se=Jn(77);for(let De=0;De<30;De++){j.save(),j.translate(12+se()*104,12+se()*104),j.rotate(se()*Math.PI);let Ee=150+Math.floor(se()*105),Ye=6+se()*6,Ze=13+se()*9;j.fillStyle=`rgb(${Ee},${Ee},${Ee})`,j.beginPath(),j.ellipse(0,0,Ye,Ze,0,0,Math.PI*2),j.fill(),j.strokeStyle="rgba(70,70,70,0.65)",j.lineWidth=1,j.beginPath(),j.moveTo(0,-Ze),j.lineTo(0,Ze),j.stroke(),j.restore()}let Le=new En(W);return Le.colorSpace=Kt,Le.anisotropy=4,Le})(),ne=To((()=>{let W=new Yt({map:Be,alphaTest:.5,alphaToCoverage:s>=1,vertexColors:!0,roughness:.8,side:Bn}),j=++Oh;return W.onBeforeCompile=se=>{se.uniforms.uGrow=f.uGrow,se.uniforms.uLeafTint=f.uLeafTint,se.vertexShader=se.vertexShader.replace("#include <common>",`#include <common>
attribute vec3 aCenter;
uniform float uGrow;
uniform vec3 uLeafTint;`).replace("#include <begin_vertex>",`#include <begin_vertex>
transformed = aCenter + (position - aCenter) * uGrow;`).replace("#include <color_vertex>",`#include <color_vertex>
vColor.rgb *= uLeafTint;`),se.fragmentShader=se.fragmentShader.replace("#include <normal_fragment_begin>",Ot.normal_fragment_begin.replace("normal *= faceDirection;",""))},W.customProgramCacheKey=()=>"leaf"+j,W})(),5,12,!0);function re(W){let j=Jn(W),se=[],Le=[],De=new N(0,1,0);function Ee(Tt,kt,Qt,sn){let Mt=new $t(sn*.68,sn,Qt,6,1);return Mt.applyMatrix4(new gt().compose(Tt.clone().addScaledVector(kt,Qt/2),new mn().setFromUnitVectors(De,kt),new N(1,1,1))),se.push(Mt),Tt.clone().addScaledVector(kt,Qt)}let Ye=new N(0,0,1);function Ze(Tt,kt){let Qt=[],sn=[],Mt=[],Vt=[],Ht=[],_t=[],Sn=.72+j()*.5,Nn=(j()-.5)*.25;for(let ur=0;ur<18;ur++){let oa=j()*2-1,Xh=j()*Math.PI*2,Yh=Math.sqrt(1-oa*oa),Jc=new N(Yh*Math.cos(Xh),oa*.85,Yh*Math.sin(Xh)).normalize(),Co=Tt.clone().addScaledVector(Jc,kt*(.3+.7*Math.cbrt(j()))),qh=.8+j()*.55,Zh=Jc.clone().add(new N(j()-.5,j()-.3,j()-.5).multiplyScalar(.9)).normalize(),B0=new mn().setFromUnitVectors(Ye,Zh).premultiply(new mn().setFromAxisAngle(Zh,j()*6.28)),Kc=Jc.clone().add(new N(0,.3,0)).normalize(),hr=Qt.length/3;[[-.5,-.5],[.5,-.5],[.5,.5],[-.5,.5]].forEach(([$h,Jh])=>{let Qc=new N($h*qh,Jh*qh,0).applyQuaternion(B0).add(Co);Qt.push(Qc.x,Qc.y,Qc.z),sn.push(Kc.x,Kc.y,Kc.z),Mt.push($h+.5,Jh+.5),Vt.push(Co.x,Co.y,Co.z);let jc=Sn*(.85+.3*j());Ht.push(jc*(1+Nn),jc,jc*(1-Nn*.6))}),_t.push(hr,hr+1,hr+2,hr,hr+2,hr+3)}let oi=new Ft;oi.setAttribute("position",new Nt(Qt,3)),oi.setAttribute("normal",new Nt(sn,3)),oi.setAttribute("uv",new Nt(Mt,2)),oi.setAttribute("aCenter",new Nt(Vt,3)),oi.setAttribute("color",new Nt(Ht,3)),oi.setIndex(_t),Le.push(oi)}function tt(Tt,kt,Qt,sn,Mt){let Vt=Ee(Tt,kt,Qt,sn);if(Mt===0){Ze(Vt,.9+j()*.7),j()<.7&&Ze(Vt.clone().add(new N((j()-.5)*1.2,j()*.6,(j()-.5)*1.2)),.7+j()*.5);return}let Ht=Mt>=3?3:2+(j()<.4?1:0);for(let _t=0;_t<Ht;_t++){let Sn=new N().crossVectors(kt,new N(j()-.5,.25,j()-.5)).normalize(),Nn=kt.clone().applyAxisAngle(Sn,.45+j()*.7).add(new N(0,.18,0)).normalize();tt(Vt,Nn,Qt*(.68+j()*.14),sn*.62,Mt-1)}Mt<=2&&Ze(Vt.clone().add(new N((j()-.5)*.8,.3,(j()-.5)*.8)),.8+j()*.5)}tt(new N(0,0,0),De,2.6,.24,4);let ot=Wi(se),ke=ot.attributes.position,xe=ot.attributes.normal,vt=new Float32Array(ke.count*3),mt=new Float32Array(ke.count);for(let Tt=0;Tt<ke.count;Tt++){let kt=ln(ke.getX(Tt)*3,ke.getY(Tt)*3+ke.getZ(Tt),2,64,64,6);vt[Tt*3]=.16+kt*.08,vt[Tt*3+1]=.12+kt*.06,vt[Tt*3+2]=.09+kt*.05,mt[Tt]=Et(xe.getY(Tt)*1.5,0,1)*.85}return ot.setAttribute("color",new Rt(vt,3)),ot.setAttribute("aSnow",new Rt(mt,1)),{wood:ot,leaf:Wi(Le)}}let J=[],ie=[[-11.5,-1,.95],[12.2,-3.6,1],[-9.5,-9.5,1.1],[8.5,-9.8,1.15],[-33,-9,1.15],[35,-8,1.05],[-26,11,1],[27,9,1],[-30,18.8,.75],[44,18.8,.75],[-9,-22,1.2],[14,-23,1.1]];[re(31),re(47)].forEach((W,j)=>{let se=ie.filter((De,Ee)=>Ee%2===j),Le=(De,Ee,Ye)=>{let Ze=new Si(De,Ee,se.length),tt=new gt,ot=new mn,ke=new N,xe=new N;return se.forEach(([vt,mt,Tt],kt)=>{ot.setFromAxisAngle(new N(0,1,0),(vt*7+mt*3)%6.28),ke.set(vt,0,mt),xe.setScalar(Tt*.95),tt.compose(ke,ot,xe),Ze.setMatrixAt(kt,tt)}),Ze.castShadow=Ye,Ze.receiveShadow=!0,a.add(Ze),Ze};Le(W.wood,Z,!0),J.push(Le(W.leaf,ne,!0))});let le=i.neighborRoof.clone();le.onBeforeCompile=W=>{W.uniforms.uRoofSnow=f.uRoofSnow,W.fragmentShader=W.fragmentShader.replace("#include <common>",`#include <common>
uniform float uRoofSnow;`).replace("#include <map_fragment>",`#include <map_fragment>
diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.9, 0.93, 0.97), uRoofSnow * 0.92);`)},le.customProgramCacheKey=()=>"nroof";let Oe=new rn({color:new Qe(1.5,.92,.42),transparent:!0,opacity:0}),Ne=new Yt({color:659222,roughness:.08,metalness:.4,envMapIntensity:1.6}),qe=[],Je=[],X=[];function at(W){let{x:j,z:se,w:Le,d:De,h:Ee,rh:Ye,tone:Ze,rot:tt=0,garage:ot,chimney:ke}=W,xe=new ft,vt=i.neighbor.clone();vt.color.setHex(Ze).multiplyScalar(1.9);let mt=new qt(Le,Ee,De);lr(mt,{oy:Ee/2});let Tt=new Fe(mt,vt);Tt.position.y=Ee/2,Tt.castShadow=!0,Tt.receiveShadow=!0,xe.add(Tt);let kt=new ui;kt.moveTo(-Le/2-.5,0),kt.lineTo(Le/2+.5,0),kt.lineTo(0,Ye),kt.lineTo(-Le/2-.5,0);let Qt=new Fe(new Oi(kt,{depth:De+1,bevelEnabled:!1}),le);if(Qt.position.set(0,Ee,-De/2-.5),Qt.castShadow=!0,Qt.receiveShadow=!0,xe.add(Qt),ke){let Ht=new Fe(new qt(.7,2.4,.7),i.stone);Ht.position.set(Le*.22,Ee+Ye*.55,-De*.1),Ht.castShadow=!0,xe.add(Ht)}let sn=(Ht,_t,Sn,Nn,oi)=>{let ur=new gt().compose(new N(Ht,_t,Sn),new mn().setFromAxisAngle(new N(0,1,0),Nn),new N(1,1,1)),oa=new gt().compose(new N(Ht,_t,Sn).add(new N(Math.sin(Nn),0,Math.cos(Nn)).multiplyScalar(-.012)),new mn().setFromAxisAngle(new N(0,1,0),Nn),new N(1,1,1));(oi?qe:Je).push({g:xe,m:ur}),X.push({g:xe,m:oa})},Mt=Math.max(2,Math.round(Le/2.4));for(let Ht=0;Ht<2;Ht++)for(let _t=0;_t<Mt;_t++)ot&&Ht===0&&_t===0||sn(-Le/2+(_t+.5)*(Le/Mt),1.5+Ht*2.6,De/2+.02,0,o()>.32);for(let Ht=0;Ht<2;Ht++)sn(Le/2+.02,1.5+Ht*2.6,0,Math.PI/2,o()>.5),sn(-Le/2-.02,1.5+Ht*2.6,0,-Math.PI/2,o()>.5);let Vt=new Fe(new qt(2.2,2.1,.12),i.walnut);if(Vt.position.set(Le/2-1.5,1.05,De/2+.05),xe.add(Vt),ot){let Ht=new Fe(new qt(2.8,2.3,.14),i.cedar);Ht.position.set(-Le/2+1.7,1.15,De/2+.06),xe.add(Ht);for(let _t=1;_t<4;_t++){let Sn=new Fe(new qt(2.8,.04,.16),i.trim);Sn.position.set(-Le/2+1.7,_t*.575,De/2+.07),xe.add(Sn)}}return xe.position.set(j,0,se),xe.rotation.y=tt,a.add(xe),lt.push([j,Ee+Ye,se]),xe}let lt=[];[{x:-17,z:-1,w:7.4,d:7,h:5.4,rh:2.6,tone:7304314,garage:!0,chimney:!0},{x:17.5,z:.5,w:6.8,d:6.6,h:4.8,rh:2.4,tone:8023912},{x:-33,z:-2,w:7.2,d:7.5,h:5.2,rh:2.5,tone:6251884,chimney:!0},{x:34,z:0,w:7.6,d:7,h:5.6,rh:2.8,tone:6975608,garage:!0},{x:-49,z:0,w:7,d:7,h:5,rh:2.4,tone:7565679},{x:50,z:-1,w:7,d:7,h:5.2,rh:2.4,tone:6712178,chimney:!0},{x:-66,z:1,w:7,d:7,h:5,rh:2.4,tone:7171954,garage:!0},{x:67,z:0,w:7,d:7,h:5,rh:2.4,tone:7369592},{x:-24,z:40,w:7,d:7,h:5.2,rh:2.5,tone:6975092,rot:Math.PI,garage:!0},{x:-8,z:41,w:7.4,d:7,h:5.4,rh:2.6,tone:7828073,rot:Math.PI,chimney:!0},{x:10,z:40,w:7,d:6.8,h:5,rh:2.4,tone:6843764,rot:Math.PI},{x:28,z:41,w:7.2,d:7,h:5.4,rh:2.6,tone:7500921,rot:Math.PI,garage:!0},{x:46,z:40,w:7,d:7,h:5.2,rh:2.4,tone:7106678,rot:Math.PI}].forEach(at),a.updateMatrixWorld(!0);let O=(W,j,se)=>{let Le=new Si(j,se,W.length),De=new gt;return W.forEach(({g:Ee,m:Ye},Ze)=>{De.multiplyMatrices(Ee.matrixWorld,Ye),Le.setMatrixAt(Ze,De)}),Le.userData.noAO=!1,a.add(Le),Le},M=new tn(1,1.15),K=new tn(1.16,1.31),te=[];O(qe,M,Oe),O(Je,M,Ne),O(X,K,i.trim);let he=new ft;he.visible=!1,a.add(he);let Ve=new $t(.05,.05,1,8,1,!0),Ge=[],Se=new N(0,12.6,0);lt.forEach(([W,j,se],Le)=>{let De=new N(W,j+3.4,se),Ee=new Yn(new Fn({map:n,transparent:!0,depthWrite:!1,depthTest:!1,opacity:0}));Ee.position.copy(De),Ee.renderOrder=12,Ee.userData.noAO=!0,he.add(Ee);let Ye=new Fe(Ve,new rn({color:new Qe(2.2,1.3,.55),transparent:!0,opacity:0,blending:nn,depthWrite:!1,toneMapped:!1}));Ye.scale.set(1,3.2,1),Ye.position.set(W,j+1.6,se),Ye.userData.noAO=!0,Ye.raycast=()=>{},he.add(Ye);let Ze=De.clone().lerp(Se,.5);Ze.y+=5+De.distanceTo(Se)*.18;let tt=new di([De,De.clone().lerp(Ze,.5).setY(Ze.y*.9),Ze,Ze.clone().lerp(Se,.5).setY(Ze.y*.9),Se]),ot=40,ke=new Fe(new ii(tt,ot,.07,5,!1),new rn({color:new Qe(2.4,1.4,.6),transparent:!0,opacity:0,blending:nn,depthWrite:!1,toneMapped:!1}));ke.userData.noAO=!0,ke.raycast=()=>{},he.add(ke);let xe=9,vt=new Ft;vt.setAttribute("position",new Rt(new Float32Array(xe*3),3));let mt=new qn(vt,new On({size:.9,map:c,color:new Qe(2.4,1.5,.7),transparent:!0,depthWrite:!1,blending:nn,toneMapped:!1}));mt.frustumCulled=!1,mt.userData.noAO=!0,mt.raycast=()=>{},he.add(mt),Ge.push({spr:Ee,bm:Ye,tube:ke,segs:ot,curve:tt,pts:mt,n:xe,d:De.distanceTo(Se),delay:0})}),Ge.sort((W,j)=>W.d-j.d),Ge.forEach((W,j)=>{W.delay=j/Ge.length});let ve=new Yn(new Fn({map:n,transparent:!0,depthWrite:!1,depthTest:!1,opacity:0}));ve.position.copy(Se).add(new N(0,1.2,0)),ve.scale.set(4.2,4.2,1),ve.renderOrder=13,ve.userData.noAO=!0,he.add(ve);let $e=new N;function ct(W,j){he.visible=W>.003,he.visible&&(ve.material.opacity=dt(0,.15,W),ve.scale.setScalar(4.2+Math.sin(j*3)*.3),Ge.forEach(se=>{let Le=dt(se.delay*.7,se.delay*.7+.3,W);se.spr.material.opacity=Le,se.spr.scale.setScalar(2.4*(.6+.4*Le)),se.bm.material.opacity=.5*Le,se.bm.scale.y=3.2+6*Le,se.bm.position.y=se.spr.position.y-se.bm.scale.y/2-1.6;let De=Math.floor(dt(.1+se.delay*.6,.45+se.delay*.6,W)*se.segs)*5*6;se.tube.geometry.setDrawRange(0,De),se.tube.material.opacity=.34*Le*(.8+.2*Math.sin(j*3+se.delay*9));let Ee=se.pts.geometry.attributes.position.array,Ye=dt(.1+se.delay*.6,.45+se.delay*.6,W);for(let Ze=0;Ze<se.n;Ze++){let tt=(Ze/se.n+j*.16+se.delay)%1;if(tt>Ye){Ee[Ze*3+1]=-999;continue}se.curve.getPointAt(tt,$e),Ee[Ze*3]=$e.x,Ee[Ze*3+1]=$e.y,Ee[Ze*3+2]=$e.z}se.pts.geometry.attributes.position.needsUpdate=!0,se.pts.material.opacity=Le}))}let D=new Yt({color:4864555,roughness:.95}),$=new rn({color:723724}),ce=[];(()=>{let W=new ft;W.position.set(-3.4,0,-11.4),a.add(W);let j=7.4,se=6.4,Le=3.1,De=new qt(j,Le,se);lr(De,{oy:Le/2});let Ee=new Fe(De,i.bb.clone());Ee.material.color.setScalar(1),Ee.position.y=Le/2,Ee.castShadow=!0,Ee.receiveShadow=!0,W.add(Ee);let Ye=new ui;Ye.moveTo(-j/2-.45,0),Ye.lineTo(j/2+.45,0),Ye.lineTo(0,1.9),Ye.lineTo(-j/2-.45,0);let Ze=new Fe(new Oi(Ye,{depth:se+.9,bevelEnabled:!1}),le);Ze.position.set(0,Le,-se/2-.45),Ze.castShadow=!0,Ze.receiveShadow=!0,W.add(Ze);for(let ot=0;ot<2;ot++){let ke=-1.8+ot*3.6,xe=new Fe(new qt(3.1,2.4,.12),i.walnut);xe.position.set(ke,1.2,-se/2-.05),xe.castShadow=!0,W.add(xe);for(let Tt=1;Tt<4;Tt++){let kt=new Fe(new qt(3.1,.04,.14),i.trim);kt.position.set(ke,Tt*.6,-se/2-.08),W.add(kt)}let vt=new Fe(new qt(2.7,.3,.14),i.mirror);vt.position.set(ke,2.05,-se/2-.09),W.add(vt);let mt=new Fe(new qt(3.3,2.55,.1),i.trim);mt.position.set(ke,1.27,-se/2-0),W.add(mt)}[-3.3,3.3].forEach(ot=>{let ke=new Fe(new $t(.07,.08,.26,12),i.sconce);ke.position.set(ot,2.55,-se/2-.2),ke.userData.noAO=!0,W.add(ke);let xe=new Yn(new Fn({map:t,transparent:!0,depthWrite:!1,blending:nn,opacity:0}));xe.position.set(ot,2.55,-se/2-.5),xe.scale.set(2.2,2.2,1),xe.userData.noAO=!0,W.add(xe),ce.push(xe)});let tt=new Fe(new tn(1,1),new rn({map:h,transparent:!0,depthWrite:!1,blending:nn,opacity:0}));tt.rotation.x=-Math.PI/2,tt.position.set(0,.05,-se/2-2.2),tt.scale.set(10,5,1),tt.userData.noAO=!0,W.add(tt),ce.pool=tt})();let _e=[-75.2,-49.2,-23.2,2.8,28.8,54.8,80.8];_e.forEach(W=>{let j=new ft;j.position.set(W,0,-15.5),a.add(j);let se=new Fe(new $t(.13,.19,9.8,10),D);se.position.y=4.9,se.castShadow=!0,j.add(se);let Le=new Fe(new qt(.12,.12,2.2),D);if(Le.position.y=9.2,j.add(Le),[-.85,0,.85].forEach(De=>{let Ee=new Fe(new $t(.04,.05,.2,8),i.ceramic);Ee.position.set(0,9.36,De),j.add(Ee)}),Math.abs(W-2.8)<1){let De=new Fe(new $t(.3,.3,.95,14),i.steel);De.position.set(.5,8.35,.2),De.castShadow=!0,j.add(De);let Ee=new Fe(new $t(.2,.3,.12,14),i.steel);Ee.position.set(.5,8.9,.2),j.add(Ee)}});let Ue=[];for(let W=0;W<_e.length-1;W++)[-.85,0,.85].forEach(j=>{let se=new N(_e[W],9.4,-15.5+j),Le=new N(_e[W+1],9.4,-15.5+j),De=se.clone().lerp(Le,.5);De.y-=.9,Ue.push(new ii(new di([se,se.clone().lerp(De,.5).setY(9.4-.45),De,De.clone().lerp(Le,.5).setY(9.4-.45),Le]),24,.022,4))});{let W=new N(2.8,9.4,-15.5),j=new N(2.8,5.4,-4.3),se=W.clone().lerp(j,.5);se.y-=.7,Ue.push(new ii(new di([W,se,j]),20,.026,4))}let B=new Fe(Wi(Ue),$);B.castShadow=!1,B.raycast=()=>{},a.add(B);let Me=new ft,ae=[],Ie={front:null,rear:null},Ae=new ft;(()=>{let W=new fi({color:1784408,metalness:.65,roughness:.3,clearcoat:1,clearcoatRoughness:.08,envMapIntensity:1.5}),j=new fi({color:395533,metalness:.2,roughness:.04,clearcoat:1,envMapIntensity:1.8}),se=new Yt({color:1052946,roughness:.85}),Le=new Yt({color:12107462,metalness:.9,roughness:.25}),De=new ui;De.moveTo(-2.3,.28),De.lineTo(-2.38,.6),De.quadraticCurveTo(-2.36,.92,-2.05,.98),De.lineTo(1.35,.98),De.quadraticCurveTo(2.05,.9,2.3,.7),De.lineTo(2.34,.44),De.quadraticCurveTo(2.3,.28,2.1,.28),De.lineTo(-2.3,.28);let Ee=new Fe(new Oi(De,{depth:1.7,bevelEnabled:!0,bevelThickness:.09,bevelSize:.09,bevelSegments:4,curveSegments:14}),W);Ee.geometry.translate(0,0,-.85),Ee.castShadow=!0,Me.add(Ee);let Ye=new ui;Ye.moveTo(-1.95,.96),Ye.quadraticCurveTo(-1.55,1.42,-.95,1.46),Ye.lineTo(.5,1.44),Ye.quadraticCurveTo(.95,1.4,1.38,.96),Ye.lineTo(-1.95,.96);let Ze=new Fe(new Oi(Ye,{depth:1.62,bevelEnabled:!0,bevelThickness:.07,bevelSize:.05,bevelSegments:3,curveSegments:12}),j);Ze.geometry.translate(0,0,-.81),Ze.castShadow=!0,Me.add(Ze);let tt=new Fe(new ki(1.9,.07,1.6,2,.03),W);tt.position.set(-.2,1.47,0),Me.add(tt),[[-1.4,.8],[1.4,.8],[-1.4,-.8],[1.4,-.8]].forEach(([Mt,Vt])=>{let Ht=new Fe(new $t(.37,.37,.26,24),se);Ht.rotation.x=Math.PI/2,Ht.position.set(Mt,.37,Vt*1+Math.sign(Vt)*.04),Ht.castShadow=!0,Me.add(Ht);let _t=new Fe(new $t(.23,.23,.27,20),Le);_t.rotation.x=Math.PI/2,_t.position.copy(Ht.position),Me.add(_t)});let ot=new Yt({color:1118481,emissive:16777215,emissiveIntensity:.1}),ke=new Yt({color:2228224,emissive:16722458,emissiveIntensity:.1}),xe=new Fe(new qt(.06,.05,1.5),ot);xe.position.set(2.33,.72,0),xe.userData.noAO=!0,Me.add(xe);let vt=new Fe(new qt(.06,.05,1.5),ke);vt.position.set(-2.4,.78,0),vt.userData.noAO=!0,Me.add(vt),Ie.front=ot,Ie.rear=ke;let mt=new Fe(new ki(1.8,.07,1.5,2,.03),i.snowRoof);mt.userData.keep=!0,mt.position.set(-.2,1.54,0),Me.add(mt),ae.push(mt);let Tt=new Fe(new ki(1,.05,1.45,2,.02),i.snowRoof);Tt.userData.keep=!0,Tt.position.set(1.6,1,0),Tt.rotation.z=-.1,Me.add(Tt),ae.push(Tt),Me.position.set(7.9,0,6.3),Me.rotation.y=-Math.PI/2,a.add(Me);let kt=[new N(5.2,1.2,2.5),new N(5.55,.5,2.85),new N(6.15,.12,3.3),new N(6.7,.4,3.75),new N(7,.82,3.95)],Qt=new Fe(new ii(new di(kt),24,.028,6),new Yt({color:855310,roughness:.6}));Qt.castShadow=!0,Ae.add(Qt);let sn=new Fe(new Zn(.05,10,8),new rn({color:new Qe(.4,3,1.2)}));sn.position.set(5.16,1.5,2.5),sn.userData.noAO=!0,Ae.add(sn),Ae.userData.led=sn,a.add(Ae)})();let U=r?0:s>=1?2200:900,ye=new Ft,oe=new Float32Array(U*3),Ke=new Float32Array(U*2),nt=[90,40,90];for(let W=0;W<U;W++)oe[W*3]=(o()-.5)*nt[0],oe[W*3+1]=o()*nt[1],oe[W*3+2]=(o()-.5)*nt[2],Ke[W*2]=.7+o()*1.1,Ke[W*2+1]=o()*6.28;ye.setAttribute("position",new Rt(oe,3));let bt=new On({color:16777215,size:.11,map:c,transparent:!0,opacity:.85,depthWrite:!1,blending:nn}),At=new qn(ye,bt);At.frustumCulled=!1,At.userData.noAO=!0,a.add(At);let Bt=s>=1&&!r?140:0,Zt=new Ft,Un=new Float32Array(Bt*3);for(let W=0;W<Bt;W++)Un[W*3]=(o()-.5)*50,Un[W*3+1]=o()*22,Un[W*3+2]=(o()-.5)*50;Zt.setAttribute("position",new Rt(Un,3));let Vn=new On({color:14674175,size:.42,map:c,transparent:!0,opacity:.22,depthWrite:!1,blending:nn}),R=new qn(Zt,Vn);R.frustumCulled=!1,R.userData.noAO=!0,a.add(R);let de=r?0:s>=1?1600:700,Re=new Ft,We=new Float32Array(de*6),Xe=new Float32Array(de),xt=[70,30,70];for(let W=0;W<de;W++){let j=(o()-.5)*xt[0],se=o()*xt[1],Le=(o()-.5)*xt[2];We.set([j,se,Le,j-.04,se+.7,Le],W*6),Xe[W]=14+o()*6}Re.setAttribute("position",new Rt(We,3));let it=new Ps({color:11455464,transparent:!0,opacity:0,depthWrite:!1}),pt=new ls(Re,it);pt.frustumCulled=!1,pt.userData.noAO=!0,pt.raycast=()=>{},a.add(pt);let ht=r?0:s>=1?420:160,Lt=new Ft,Ut=new Float32Array(ht*3),In=new Float32Array(ht*2),Pi=new Float32Array(ht*3),Yi=[80,22,80],xi=[[.95,.55,.1],[.85,.3,.08],[.9,.75,.15],[.6,.2,.05]];for(let W=0;W<ht;W++){Ut[W*3]=(o()-.5)*Yi[0],Ut[W*3+1]=o()*Yi[1],Ut[W*3+2]=(o()-.5)*Yi[2],In[W*2]=.5+o()*.8,In[W*2+1]=o()*6.28;let j=xi[W%4];Pi.set(j,W*3)}Lt.setAttribute("position",new Rt(Ut,3)),Lt.setAttribute("color",new Rt(Pi,3));let Ii=new qn(Lt,new On({size:.2,vertexColors:!0,map:c,transparent:!0,opacity:.9,depthWrite:!1}));Ii.frustumCulled=!1,Ii.userData.noAO=!0,a.add(Ii);let Vs=[];for(let W=0;W<22;W++){let j=new Yn(new Fn({map:l,transparent:!0,depthWrite:!1,opacity:0,color:12568276}));j.userData={age:W/22*6,noAO:!0},j.renderOrder=5,a.add(j),Vs.push(j)}let I=new Fe(me,et);I.position.set(.9,0,-12.4),I.scale.setScalar(.75),I.castShadow=!0,I.visible=!1,a.add(I);let ee=new Set([w,x,C,F,S,P,H,b,I]),Te=new ft;a.add(Te),a.children.slice().forEach(W=>{W!==Te&&!ee.has(W)&&Te.add(W)});let pe=new N;function ge(W){bt.color.set(W?6963104:16777215)}function st(W,j,se,Le,De,Ee,Ye){d.opacity=W.ground,d.depthWrite=W.ground>.95,w.visible=W.ground>.01,y.forEach(ke=>{let xe=W.ground<.99;ke.transparent!==xe&&(ke.transparent=xe,ke.needsUpdate=!0),ke.opacity=W.ground,ke.depthWrite=!xe}),f.uSnow.value=W.snow,f.uRoofSnow.value=W.roofSnow,f.uGrow.value=W.grow,f.uLeafTint.value.copy(W.leafTint),ct(W.beacons||0,j),I.visible=W.section>.3,H.visible=W.snow>.25,J.forEach(ke=>{ke.visible=W.grow>.02,ke.castShadow=W.grow>.5}),ae.forEach(ke=>{ke.visible=W.snow>.5}),Ae.visible=W.explode<.05,Me.visible=!0;let Ze=1-Le;Ie.front.emissiveIntensity=.1+2.2*Ze,Ie.rear.emissiveIntensity=.1+3*Ze,Ae.userData.led.scale.setScalar(.8+.25*Math.sin(j*3));let tt=dt(.35,.9,W.ground);Pe.forEach(ke=>{ke.visible=W.ground>.5||W.explode>.05}),Y.forEach(ke=>{ke.halo.material.opacity=.75*Ze,ke.pool.material.opacity=.55*Ze*tt}),be.intensity=55*Ze,Ce.intensity=40*Ze,z.color.setRGB(3.2,2.2,1.1).multiplyScalar(.06+.94*Ze),ce.forEach(ke=>{ke.material.opacity=.5*Ze}),ce.pool.material.opacity=.4*Ze*tt,ze.forEach((ke,xe)=>{ke.material.opacity=.5*Ze*Et(ut(Ye,xe),0,1)*(1-W.ghost)*tt}),Oe.opacity=Ze*.9,At.position.set(De.x,0,De.z),R.position.set(De.x,0,De.z),pt.position.set(De.x,0,De.z),Ii.position.set(De.x,0,De.z);let ot=W.snowfall;if(At.visible=R.visible=ot>.02&&U>0,At.visible){let ke=ye.attributes.position.array;for(let vt=0;vt<U;vt++)ke[vt*3+1]-=Ke[vt*2]*se*1.5,ke[vt*3]+=Math.sin(j*.7+Ke[vt*2+1])*se*.3,ke[vt*3+2]+=Math.cos(j*.5+Ke[vt*2+1])*se*.2,ke[vt*3+1]<0&&(ke[vt*3+1]=nt[1]);ye.attributes.position.needsUpdate=!0;let xe=Zt.attributes.position.array;for(let vt=0;vt<Bt;vt++)xe[vt*3+1]-=.8*se,xe[vt*3+1]<0&&(xe[vt*3+1]=22);Zt.attributes.position.needsUpdate=!0,bt.opacity=.8*ot*(1-Le*.45),Vn.opacity=.2*ot*(1-Le*.5)}if(pt.visible=W.rain>.02&&de>0,pt.visible){let ke=Re.attributes.position.array;for(let xe=0;xe<de;xe++){let vt=Xe[xe]*se;ke[xe*6+1]-=vt,ke[xe*6+4]-=vt,ke[xe*6+4]<0&&(ke[xe*6+1]+=xt[1],ke[xe*6+4]+=xt[1])}Re.attributes.position.needsUpdate=!0,it.opacity=.32*W.rain}if(Ii.visible=W.leaves>.02&&ht>0,Ii.visible){let ke=Lt.attributes.position.array;for(let xe=0;xe<ht;xe++)ke[xe*3+1]-=In[xe*2]*se*.9,ke[xe*3]+=(Math.sin(j*.9+In[xe*2+1])*.7+.35)*se,ke[xe*3+2]+=Math.cos(j*.6+In[xe*2+1])*.4*se,ke[xe*3+1]<0&&(ke[xe*3+1]=Yi[1]);Lt.attributes.position.needsUpdate=!0,Ii.material.opacity=.9*W.leaves}Vs.forEach(ke=>{ke.userData.age+=se*.55,ke.userData.age>6&&(ke.userData.age-=6);let xe=ke.userData.age/6;pe.copy(Ee),pe.y+=xe*5.2,pe.x+=xe*2.2+Math.sin(xe*5+ke.id)*.18,pe.z+=Math.cos(xe*3+ke.id)*.15,ke.position.copy(pe),ke.scale.setScalar(.5+xe*2.6),ke.material.opacity=Math.sin(Math.PI*Math.min(1,xe*1.3))*.34*W.smoke*(.5+.5*Ze)})}let ut=(W,j)=>W-j*.3;return{world:a,ground:w,groundMat:d,U:f,update:st,lamps:Y,setThermal:ge,evGroup:Me,props:Te,sight:E0}}var gn={wire:16761963,cold:5220095,hot:16739151,drain:10135476,supply:9433288,ret:9083903,radon:14257407},Bh=2.4;function T0({house:i,reduce:e}){let t=(S,L,P)=>new N(S,L,P),n=Es("rgba(255,255,255,0.6)"),s={netE:[],netW:[],netA:[],netR:[]},r={netE:[],netW:[],netA:[],netR:[]},a={};Object.keys(s).forEach(S=>{a[S]=new ft,a[S].visible=!1,a[S].userData.noAO=!0,i.add(a[S])});let o=S=>{let L=new kr;for(let P=1;P<S.length;P++)L.add(new Is(S[P-1],S[P]));return L};function c(S,L,P,H,Y){let k=o(L.map(ze=>t(ze[0],ze[1],ze[2]))),V=k.getLength(),z=Math.max(6,Math.round(V*7)),G=6,q=new rn({color:P,toneMapped:!1,fog:!1,transparent:!0});q.color.multiplyScalar(1.5);let fe=new Fe(new ii(k,z,H,G,!1),q),be=new rn({color:P,transparent:!0,opacity:.2,blending:nn,depthWrite:!1,toneMapped:!1,fog:!1});be.color.multiplyScalar(Bh);let Ce=new Fe(new ii(k,z,H*3.4,G,!1),be);fe.renderOrder=7,Ce.renderOrder=8,fe.userData.noAO=Ce.userData.noAO=!0,fe.raycast=Ce.raycast=()=>{},a[S].add(fe,Ce),s[S].push({tube:fe,glow:Ce,segs:z,radial:G,gmat:be}),Y&&r[S].push({curve:k,len:V,n:Math.max(3,Math.round(V*Y.density)),speed:Y.speed,color:Y.color||P})}let l=[];for(let S=0;S<=10;S++){let L=S/10;l.push([2.8,je(9.1,7.7,L)-1*Math.sin(Math.PI*L),je(-15.5,-4.45,L)])}c("netE",[...l,[2.8,1.45,-4.3],[2.8,-.35,-4.3],[2.8,-.35,-3.86],[2.8,-.72,-3.86]],gn.wire,.045,{density:2.2,speed:6});let h=[2.8,-.72,-3.78],f=[2.8,-.2,-3.78];c("netE",[h,f,[2.2,-.2,-3.78],[2.2,1.35,-3.9],[4.6,1.35,-3.9]],gn.wire,.032,{density:2.5,speed:5}),c("netE",[h,f,[4.94,-.2,-3.78],[4.94,-.2,3.7],[4.94,.6,3.92],[1.45,.6,3.92],[1.45,2.45,3.92],[.05,2.45,3.92],[.05,.6,3.92],[-4.94,.6,3.92],[-4.94,.6,-3.2]],gn.wire,.032,{density:2.5,speed:5}),c("netE",[h,f,[4.94,-.2,-3.78],[4.94,3.85,-3.78],[4.94,3.85,3.92],[-4.94,3.85,3.92],[-4.94,3.85,-2.4]],gn.wire,.032,{density:2.5,speed:5}),c("netE",[h,f,[1.28,-.2,-3.78],[1.28,-.2,-1],[1.28,3.05,-1],[-1.5,3.05,-1],[-1.5,3.05,.5]],gn.wire,.03,{density:2.5,speed:5}),c("netE",[[1.28,3.05,-1],[3,3.05,-1],[3,3.05,-1.6]],gn.wire,.03,{density:2.5,speed:5}),c("netE",[h,f,[4.94,-.2,-3.78],[4.94,-.2,2.5],[4.94,1.3,2.5],[5.1,1.3,2.5]],gn.wire,.034,{density:2.5,speed:5}),c("netW",[[-.5,-2.2,16],[-.5,-2.2,3.75],[-.5,-.32,3.75],[-.5,-.32,-3],[-1.95,-.32,-3],[-1.95,-1.35,-3]],gn.cold,.072,{density:2,speed:2.4}),c("netW",[[-.5,-.32,-3.2],[2.4,-.32,-3.2],[2.4,-.32,-3.7],[2.4,1.05,-3.7]],gn.cold,.051,{density:2,speed:2.4}),c("netW",[[-.5,-.32,-3.45],[-2.3,-.32,-3.45],[-2.3,3.95,-3.45],[-2.3,3.95,-3.62]],gn.cold,.051,{density:2,speed:2.4}),c("netW",[[-2.3,3.6,-3.45],[-3.4,3.6,-3.45]],gn.cold,.051,{density:2,speed:2.4}),c("netW",[[-2.2,-1.35,-3],[-2.2,-.46,-3],[-2.2,-.46,-3.32],[2.55,-.46,-3.32],[2.55,-.46,-3.72],[2.55,1.05,-3.72]],gn.hot,.051,{density:2,speed:2.4}),c("netW",[[-2.2,-.46,-3.32],[-2.47,-.46,-3.32],[-2.47,3.95,-3.32],[-2.47,3.95,-3.6]],gn.hot,.051,{density:2,speed:2.4}),c("netW",[[-2.47,3.6,-3.32],[-3.5,3.6,-3.32]],gn.hot,.051,{density:2,speed:2.4}),c("netW",[[-3.6,3.48,-3.62],[-2.6,3.48,-3.62],[-2.6,-2.95,-3.62],[.6,-2.95,-3.62],[.6,-3.2,-4.3],[.6,-3.45,-9.5]],gn.drain,.087,{density:1.6,speed:2.8}),c("netW",[[2.6,.95,-3.86],[2.6,-2.9,-3.86],[.75,-2.9,-3.86]],gn.drain,.072,{density:1.6,speed:2.8}),c("netW",[[-2.6,3.48,-3.62],[-2.6,10.2,-3.62]],gn.drain,.065,null);let p=[-3.3,-1.15,-2.6],u=[-3.3,-.12,-2.6];c("netA",[p,u,[2.6,-.12,-2.6],[4.4,-.12,-2.6],[4.4,-.12,-1.2],[4.4,.34,-1.2]],gn.supply,.091,{density:1.6,speed:3.2}),c("netA",[u,[-2,-.12,-2.6],[-2,-.12,3.4],[-2,.34,3.4]],gn.supply,.078,{density:1.6,speed:3.2}),c("netA",[[3.1,-.12,-2.6],[3.1,-.12,3.45],[3.1,.34,3.45]],gn.supply,.078,{density:1.6,speed:3.2}),c("netA",[[1.28,-.12,-2.6],[1.28,3.35,-2.6],[3.8,3.35,-2.6],[3.8,3.35,2.9],[3.8,3.52,2.9]],gn.supply,.078,{density:1.6,speed:3.2}),c("netA",[[1.28,3.35,-2.6],[-3.8,3.35,-2.6],[-3.8,3.35,2],[-3.8,3.52,2]],gn.supply,.078,{density:1.6,speed:3.2}),c("netA",[[-1.75,5.6,1],[-1.75,-.32,1],[-3.3,-.32,1],[-3.3,-.32,-2.15],[-3.3,-1.05,-2.15]],gn.ret,.091,{density:1.6,speed:2.4}),c("netR",[[-1.2,-2.92,-1.5],[-1.2,11.6,-1.5]],gn.radon,.075,{density:2.2,speed:2.6});let d={},_=new Qe,g=new Qe(16777215);Object.keys(r).forEach(S=>{let L=r[S];if(!L.length)return;let P=L.reduce((G,q)=>G+q.n,0),H=new Ft;H.setAttribute("position",new Rt(new Float32Array(P*3),3));let Y=new Float32Array(P*3),k=0;L.forEach(G=>{_.set(G.color).lerp(g,.45).multiplyScalar(Bh);for(let q=0;q<G.n;q++,k++)Y[k*3]=_.r,Y[k*3+1]=_.g,Y[k*3+2]=_.b}),H.setAttribute("color",new Rt(Y,3));let V=new On({size:S==="netE"?.2:.26,map:n,vertexColors:!0,transparent:!0,depthWrite:!1,blending:nn,toneMapped:!1,fog:!1}),z=new qn(H,V);z.frustumCulled=!1,z.renderOrder=9,z.raycast=()=>{},a[S].add(z),d[S]=z});let m=e?0:260,E=new Ft,T=new Float32Array(m*3),v=new Float32Array(m),y=t(-1.2,-2.95,-1.5),w=S=>{T[S*3]=(Math.random()-.5)*9.4,T[S*3+1]=-3.05-Math.random()*1.6,T[S*3+2]=(Math.random()-.5)*7.4,v[S]=.4+Math.random()*.8};for(let S=0;S<m;S++)w(S);E.setAttribute("position",new Rt(T,3));let A=new On({color:new Qe(gn.radon).multiplyScalar(Bh),size:.2,map:Es("rgba(217,140,255,0.6)"),transparent:!0,opacity:0,depthWrite:!1,blending:nn,toneMapped:!1,fog:!1}),x=new qn(E,A);x.frustumCulled=!1,x.raycast=()=>{},a.netR.add(x);let b=new N,C={netE:1,netW:1,netA:1,netR:1};function F(S,L,P,H){let Y=S.explode<.06;if(Object.keys(s).forEach(k=>{let V=S[k],z=a[k];if(z.visible=Y&&V>.003,!z.visible)return;let G=!L||L===k?1:.2,q=C[k]=je(C[k],G,Math.min(1,H*4));s[k].forEach(be=>{let Ce=Math.floor(Et(V,0,1)*be.segs)*be.radial*6;be.tube.geometry.setDrawRange(0,Ce),be.glow.geometry.setDrawRange(0,Ce),be.tube.material.opacity=q,be.gmat.opacity=(.22+.1*Math.sin(P*3+be.segs))*q});let fe=d[k];if(fe){let be=fe.geometry.attributes.position.array,Ce=0;r[k].forEach(ze=>{for(let et=0;et<ze.n;et++,Ce++){let Q=(et/ze.n+P*ze.speed/ze.len)%1;if(Q>V){be[Ce*3+1]=-999;continue}ze.curve.getPointAt(Q,b),be[Ce*3]=b.x,be[Ce*3+1]=b.y,be[Ce*3+2]=b.z}}),fe.geometry.attributes.position.needsUpdate=!0,fe.material.opacity=Et(V*3,0,1)*q}}),m&&a.netR.visible){A.opacity=Et(S.netR*2,0,.9)*C.netR;for(let k=0;k<m;k++){b.set(y.x-T[k*3],y.y-T[k*3+1],y.z-T[k*3+2]);let V=b.length();if(V<.25){w(k);continue}b.multiplyScalar(H*v[k]*1.1/V),T[k*3]+=b.x+Math.sin(P+k)*H*.15,T[k*3+1]+=b.y,T[k*3+2]+=b.z}E.attributes.position.needsUpdate=!0}}return{groups:a,update:F}}var Kv=`varying vec3 vW; varying vec3 vN;
void main(){ vec4 w = modelMatrix * vec4(position, 1.0);
#ifdef USE_INSTANCING
  w = modelMatrix * instanceMatrix * vec4(position, 1.0);
#endif
  vW = w.xyz; vN = normalize(mat3(modelMatrix) * normal); gl_Position = projectionMatrix * viewMatrix * w; }`,Qv=`uniform float uBase, uGrad, uBand, uTime; varying vec3 vW; varying vec3 vN;
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
  gl_FragColor = vec4(toLinear(iron(t + rim)), 1.0); }`;function w0({scene:i,M:e,skipParents:t,onChange:n}){let s={value:0},r=new Map;function a(p,u=0,d=0){let _=p+"|"+u+"|"+d;return r.has(_)||r.set(_,new Jt({uniforms:{uBase:{value:p},uGrad:{value:u},uBand:{value:d},uTime:s},vertexShader:Kv,fragmentShader:Qv})),r.get(_)}let o={hvac:.93,"water-heaters":.88,electrical:.6,plumbing:.56,installation:.5,radon:.22,solar:.17,roofing:[.4,.12],foundation:.33,sewer:.3,asbestos:.5};function c(p,u){if(u&&o[u]!==void 0)return a(...[].concat(o[u]));let d=p.userData&&p.userData.th;return d?a(...d):a(.3)}let l=[],h=!1;function f(p){p!==h&&(h=p,i.traverse(u=>{if(u.isSprite&&u.userData.noAO){u.visible=!h&&(u.userData.wasVisible??!0);return}if(!(!(u.isMesh||u.isInstancedMesh)||!u.material)&&!u.userData.noThermal){for(let d=u.parent;d;d=d.parent)if(t.includes(d))return;h?(u.userData.mat0=u.material,u.material=Array.isArray(u.material)?u.material.map(d=>c(d,u.userData.sys)):c(u.material,u.userData.sys)):u.userData.mat0&&(u.material=u.userData.mat0,u.userData.mat0=null)}}),n&&n(h))}return{set:f,time:s,get on(){return h}}}function A0({M:i,layers:e,glowTex:t}){let n=[],s=(u,d=.7,_=0,g=[.5],m={})=>{let E=new Yt({color:u,roughness:d,metalness:_,...m});return E.userData.th=g,E},r=(u,d=[.95])=>{let _=new Yt({color:2236440,emissive:u,emissiveIntensity:0,roughness:.5});return _.userData.th=d,n.push(_),_},a={rug:s(5787722,1),rug2:s(3884628,1),cushion:s(13215610,.95),cushion2:s(9413544,.95),tvBlack:s(789775,.25,.3,[.6]),book1:s(9190190,.8),book2:s(3100522,.8),book3:s(14208440,.8),plant:s(4156218,.9,0,[.3]),pot:s(14209734,.6),sheets:s(15328474,.95),duvet:s(7043718,.95),wood:s(10122320,.55),woodDark:s(4929062,.55),steel:s(11186358,.3,.9,[.55]),quartz:s(15328991,.25,0,[.5]),cabinet:s(3812386,.5,0,[.5]),tile:s(13620952,.4,0,[.4]),bin:s(3829659,.6),bin2:s(12936750,.6),cardboard:s(11570526,.9),tv:r(10274047,[.85]),lamp:r(16762746),pendant:r(16765594),screen:r(13625599,[.8]),led:r(6750105,[.7]),pot:s(14868180,.55)},o=(u,d,_,g,m,E,T,v,y,w=0)=>{let A=new Fe(new ki(u,d,_,2,Math.min(g,u/2-.001,d/2-.001,_/2-.001)),m);return A.position.set(E,T+d/2,v),A.rotation.y=w,A.castShadow=!0,A.receiveShadow=!0,A.userData.noPick=!0,y.add(A),A},c=(u,d,_,g,m,E,T,v=18)=>{let y=new Fe(new $t(u,u,d,v),_);return y.position.set(g,m+d/2,E),y.castShadow=!0,y.receiveShadow=!0,y.userData.noPick=!0,T.add(y),y},l=(u,d,_,g,m,E,T=1)=>{let v=new Fe(new Zn(u,14,10),d);return v.position.set(_,g,m),v.scale.y=T,v.castShadow=!0,v.userData.noPick=!0,E.add(v),v},h=(u,d,_,g,m,E=a.woodDark)=>{let T=new ft;return T.position.set(u,d,_),T.rotation.y=g,m.add(T),o(.44,.05,.44,.02,E,0,.44,0,T),[[-.19,-.19],[.19,-.19],[-.19,.19],[.19,.19]].forEach(([v,y])=>c(.02,.44,a.steel,v,0,y,T,8)),o(.44,.45,.04,.02,E,0,.5,-.2,T),T},f=(u,d,_,g,m=1.4)=>{c(.14,.03,a.steel,u,d,_,g,14),c(.015,m,a.steel,u,d,_,g,8);let E=new Fe(new $t(.17,.24,.3,18,1,!0),a.lamp);return E.material.side=Bn,E.position.set(u,d+m+.05,_),E.userData.noAO=!0,E.userData.noPick=!0,g.add(E),E};(()=>{let u=e.main,d=.3;o(3.4,.02,2.5,.01,a.rug,-2.3,d,.7,u);let _=new ft;_.position.set(-.9,d,.7),_.rotation.y=-Math.PI/2,u.add(_),o(2.3,.4,.95,.1,a.fabric??i.fabric,0,.1,0,_),o(2.3,.45,.25,.1,i.fabric,0,.45,-.38,_),o(.25,.3,.9,.08,i.fabric,-1.07,.3,0,_),o(.25,.3,.9,.08,i.fabric,1.07,.3,0,_),o(.5,.4,.14,.06,a.cushion,-.6,.55,-.1,_),o(.5,.4,.14,.06,a.cushion2,.6,.55,-.1,_),[[-.9,.18],[.9,.18]].forEach(([E])=>{[[-1.05,-.4],[1.05,-.4],[-1.05,.4],[1.05,.4]].forEach(([T,v])=>c(.03,.1,a.woodDark,T,0,v,_,8))}),o(1,.05,.6,.03,a.wood,-2.75,d+.34,.7,u),[[-.4,-.22],[.4,-.22],[-.4,.22],[.4,.22]].forEach(([E,T])=>c(.025,.34,a.woodDark,-2.75+E,d,.7+T,u,8)),h(-2,d,2.5,Math.PI,u,i.fabric2??a.cushion2),o(.4,.5,2,.04,a.woodDark,-4.62,d,.7,u),o(.05,.75,1.5,.015,a.tvBlack,-4.74,d+.95,.7,u);let g=new Fe(new tn(1.4,.68),a.tv);g.rotation.y=Math.PI/2,g.position.set(-4.7,d+1.32,.7),g.userData.noPick=!0,u.add(g),o(.34,2,2.2,.02,a.woodDark,.9,d,-1.8,u),[.5,1,1.5].forEach((E,T)=>{o(.2,.28,1.9,.01,[a.book1,a.book2,a.book3][T],1,d+E+.05,-1.8,u)}),c(.17,.4,a.pot,-4.2,d,3.2,u,14),l(.38,a.plant,-4.2,d+.85,3.2,u,1.3),l(.28,a.plant,-4.3,d+1.15,3.1,u,1.2),f(-.45,d,3.1,u,1.45),o(3,.72,.36,.02,a.cabinet,2.9,d+1.55,-3.7,u),o(.9,.14,.6,.02,a.steel,2.4,d+1.3,-3.58,u),o(.34,.9,.34,.02,a.steel,2.4,d+1.45,-3.7,u),o(2.2,.06,1,.02,a.quartz,3,d+.9,-.6,u),o(2.1,.9,.9,.03,a.cabinet,3,d,-.6,u),[2.4,3,3.6].forEach(E=>{c(.17,.05,a.woodDark,E,d+.62,.35,u,16),c(.025,.62,a.steel,E,d,.35,u,8)}),[2.3,3,3.7].forEach(E=>{c(.006,.7,a.steel,E,d+2.1,-.6,u,4);let T=new Fe(new Zn(.15,16,10,0,Math.PI*2,0,Math.PI/2),a.pendant);T.position.set(E,d+2.1,-.6),T.userData.noAO=!0,T.userData.noPick=!0,u.add(T)}),o(1.8,.05,.92,.02,a.wood,3.2,d+.72,2.4,u),[[-.8,-.4],[.8,-.4],[-.8,.4],[.8,.4]].forEach(([E,T])=>c(.035,.72,a.woodDark,3.2+E,d,2.4+T,u,8)),h(2.5,d,1.55,0,u),h(3.9,d,1.55,0,u),h(2.5,d,3.25,Math.PI,u),h(3.9,d,3.25,Math.PI,u);let m=new Fe(new $t(.28,.28,.22,20,1,!0),a.pendant);m.material.side=Bn,m.position.set(3.2,d+2.15,2.4),m.userData.noAO=!0,m.userData.noPick=!0,u.add(m),c(.006,.55,a.steel,3.2,d+2.2,2.4,u,4),o(1,.45,.38,.03,a.wood,.6,d,3.55,u)})(),(()=>{let u=e.upper,d=3.45;o(2,.42,2.15,.06,a.sheets,2.4,d,-2.55,u),o(1.96,.18,1.55,.08,a.duvet,2.4,d+.38,-2.2,u),o(2,.9,.1,.03,a.woodDark,2.4,d,-3.72,u),o(.6,.22,.38,.08,a.sheets,1.85,d+.5,-3.3,u),o(.6,.22,.38,.08,a.sheets,2.95,d+.5,-3.3,u),[[1],[3.8]].forEach(([g])=>{o(.5,.5,.4,.03,a.woodDark,g,d,-3.55,u),f(g,d+.5,-3.55,u,.34)}),o(2,.02,1.4,.01,a.rug2,2.4,d,-1,u),o(.6,2.3,2,.02,a.woodDark,4.55,d,-1.2,u),o(1.5,.05,.7,.02,a.wood,.6,d+.72,3.35,u),[[-.7,-.3],[.7,-.3],[-.7,.3],[.7,.3]].forEach(([g,m])=>c(.03,.72,a.steel,.6+g,d,3.35+m,u,8)),o(.7,.42,.04,.01,a.tvBlack,.6,d+.98,3.52,u);let _=new Fe(new tn(.64,.36),a.screen);_.position.set(.6,d+1.19,3.495),_.rotation.y=Math.PI,_.userData.noPick=!0,u.add(_),h(.6,d,2.7,Math.PI,u,a.cushion2),o(1.5,.4,2,.06,a.sheets,-3.4,d,2.2,u),o(1.46,.16,1.4,.07,a.cushion2,-3.4,d+.36,2.5,u),o(.9,.9,.5,.03,a.woodDark,-4.55,d,.6,u),o(.9,.02,.06,.01,a.tile,-3.2,d,-2.6,u),o(.42,.34,.6,.12,i.ceramic,-4.4,d,-3.2,u),o(.4,.4,.2,.06,i.ceramic,-4.4,d+.34,-3.5,u),o(.7,.9,.03,.01,i.mirror,-2.4,d+1.2,-3.84,u)})(),(()=>{let u=e.basement,d=-2.8;o(.68,.92,.68,.04,i.white,.5,d,-3.5,u),o(.68,.92,.68,.04,i.white,1.25,d,-3.5,u),c(.2,.03,a.tvBlack,.5,d+.93,-3.15,u,18),c(.2,.03,a.tvBlack,1.25,d+.93,-3.15,u,18),o(.6,.06,.4,.01,a.tvBlack,.88,d+.92,-3.88,u),o(2,.06,.75,.01,a.wood,-4,d+.88,2.6,u),o(1.9,.88,.7,.01,a.cabinet,-4,d,2.6,u),o(.3,.06,.12,.01,a.bin2,-4.4,d+.94,2.55,u),o(.2,.2,.2,.02,a.bin,-3.7,d+.94,2.7,u),o(1.7,2,.42,.01,a.steel,4.25,d,2.9,u,0),[.3,.9,1.5].forEach((g,m)=>{o(.5,.3,.34,.03,[a.bin,a.bin2,a.cardboard][m],3.8,d+g+.05,2.9,u),o(.6,.3,.34,.03,[a.cardboard,a.bin,a.bin2][m],4.5,d+g+.05,2.9,u)}),c(.32,.05,a.tvBlack,.66,d,1.6,u,20),c(.1,.5,a.pvc??i.pvc,.66,d,1.6,u,12);let _=new Fe(new Zn(.03,8,6),a.led);_.position.set(.66,d+.58,1.6),_.userData.noAO=!0,_.userData.noPick=!0,u.add(_),o(.5,.4,.4,.02,a.cardboard,-1.4,d,2.9,u,.3),o(.45,.35,.4,.02,a.cardboard,-1.3,d+.4,2.9,u,.1),o(1.6,.02,1.2,.01,a.rug,.4,d,.8,u)})();function p(u,d){let _=Et(.25+.75*u+d*.3,0,1.1);a.tv.emissiveIntensity=1.3*_,a.screen.emissiveIntensity=1.1*_,a.lamp.emissiveIntensity=2.2*_,a.pendant.emissiveIntensity=2.6*_,a.led.emissiveIntensity=3}return{update:p,glows:n}}var bs=.38;function R0({scene:i,M:e,tier:t,reduce:n}){let s=new ft;s.visible=!1,i.add(s);let r=Jn(55),a=Es("rgba(255,255,255,0.65)"),o=(me,Pe,Z)=>new N(me,Pe,Z),c=.45,l=.66,h=(()=>{let me=Math.round(1024*zc()),Pe=Math.round(512*zc()),Z=document.createElement("canvas");Z.width=me,Z.height=Pe;let Be=Z.getContext("2d"),ne=Be.createImageData(me,Pe),re=ne.data,J=[[0,[58,41,29]],[.5,[92,64,40]],[.62,[150,106,62]],[2.2,[138,98,58]],[2.4,[150,142,120]],[4.6,[124,118,104]],[4.8,[100,112,120]],[7,[90,98,108]],[9,[74,78,86]]],ie=Oe=>{let Ne=0;for(;Ne<J.length-2&&J[Ne+1][0]<=Oe;)Ne++;let[qe,Je]=J[Ne],[X,at]=J[Ne+1],lt=Et((Oe-qe)/(X-qe),0,1);return[je(Je[0],at[0],lt),je(Je[1],at[1],lt),je(Je[2],at[2],lt)]};for(let Oe=0;Oe<Pe;Oe++)for(let Ne=0;Ne<me;Ne++){let qe=Oe/Pe*9+(ln(Ne/90,Oe/40,3,11,8,5)-.5)*.7+Math.sin(Ne*.02+Oe*.01)*.12,Je=ie(Et(qe,0,9)),X=(ln(Ne/6,Oe/6,2,170,85,9)-.5)*34,at=(Oe*me+Ne)*4;re[at]=Et(Je[0]+X,0,255),re[at+1]=Et(Je[1]+X,0,255),re[at+2]=Et(Je[2]+X*.9,0,255),re[at+3]=255}Be.putImageData(ne,0,0);for(let Oe=0;Oe<420*zc();Oe++){let Ne=105+r()*75;Be.fillStyle=`rgba(${Ne|0},${Ne*.96|0},${Ne*.86|0},0.85)`,Be.beginPath(),Be.ellipse(r()*me,(2.5+r()*2.1)/9*Pe,1.5+r()*3.5,1.2+r()*2.4,r()*3,0,6.3),Be.fill()}let le=new En(Z);return le.colorSpace=Kt,le.wrapS=wn,le.anisotropy=8,le})(),f=new Yt({map:h,roughness:1,metalness:0});h.repeat.set(6,1);let p=new Fe(new tn(240,9),f);p.rotation.y=-Math.PI/2,p.position.set(c+bs,-4.52,0),p.userData.noAO=!0,p.userData.noPick=!0,p.receiveShadow=!1,s.add(p);let u=(()=>{let me=document.createElement("canvas");me.width=4,me.height=256;let Pe=me.getContext("2d"),Z=Pe.createLinearGradient(0,0,0,256);Z.addColorStop(0,"rgb(74,78,86)"),Z.addColorStop(.35,"rgb(24,26,31)"),Z.addColorStop(1,"rgb(6,7,9)"),Pe.fillStyle=Z,Pe.fillRect(0,0,4,256);let Be=new En(me);return Be.colorSpace=Kt,Be})(),d=new Fe(new tn(240,60),new rn({map:u,fog:!1,toneMapped:!1}));d.rotation.y=-Math.PI/2,d.position.set(c+bs,-9.02-30,0),d.userData.noAO=!0,d.userData.noPick=!0,d.raycast=()=>{},s.add(d);let _=new ft;s.add(_);for(let me=0;me<=9;me++){let Pe=new Fe(new qt(.04,.05,me%3===0?1.4:.8),new rn({color:16039294,toneMapped:!1}));Pe.position.set(0,-me,31-(me%3===0?.7:.4)),Pe.userData.noAO=!0,Pe.raycast=()=>{},_.add(Pe)}let g=new Fe(new qt(.06,.07,240),new rn({color:16039294,toneMapped:!1}));g.position.set(c+bs-.02,.02,0),g.userData.noAO=!0,g.raycast=()=>{},s.add(g);let m=(me,Pe=.45,Z=.2)=>{let Be=new Yt({color:me,roughness:Pe,metalness:Z,emissive:me,emissiveIntensity:.12,side:Bn});return Be.userData.th=[.3],Be},E={water:m(4165606,.4,.3),gas:m(15775786,.45,.2),sewer:m(12169888,.8,0),tile:m(15855334,.6,0),roots:m(8017458,.95,0),sump:m(8362672,.5,.3),crack:new rn({color:new Qe(3,.5,.35),toneMapped:!1})};E.roots.emissiveIntensity=0;let T={water:new ft,gas:new ft,sewer:new ft,found:new ft,radon:new ft};Object.values(T).forEach(me=>s.add(me));let v=(me,Pe,Z,Be,ne=0)=>{let re=new di(me.map(ie=>o(...ie)),!1,"catmullrom",.05),J=new Fe(new ii(re,ne||Math.max(8,me.length*8),Pe,10,!1),Z);return J.castShadow=!1,J.userData.noPick=!0,Be.add(J),re},y=(me,Pe,Z,Be,ne)=>{let re=o(...me),J=o(...Pe),ie=re.distanceTo(J),le=new Fe(new $t(Z,Z,ie,16,1,!0),Be);return le.position.copy(re).lerp(J,.5),le.quaternion.setFromUnitVectors(o(0,1,0),J.clone().sub(re).normalize()),le.userData.noPick=!0,ne.add(le),new Is(re,J)},w=[];function A(me,Pe,Z,Be,ne,re=.22){let J=new Ft;J.setAttribute("position",new Rt(new Float32Array(Pe*3),3));let ie=new qn(J,new On({size:re,map:a,color:new Qe(Be).multiplyScalar(2.2),transparent:!0,depthWrite:!1,blending:nn,toneMapped:!1}));ie.frustumCulled=!1,ie.userData.noAO=!0,ie.raycast=()=>{},ne.add(ie),w.push({curve:me,n:Pe,speed:Z,len:me.getLength(),pts:ie,group:ne})}y([c-12,-2.4,22.8],[c+60,-2.4,22.8],.24,E.water,T.water),y([c-12,-1.3,24.7],[c+60,-1.3,24.7],.11,E.gas,T.gas);let x=v([[l,-2.4,22.8],[l,-2.3,18],[l,-2.2,6],[l,-2.2,3.75]],.075,E.water,T.water,30);A(x,20,2,7320831,T.water,.2);let b=v([[l+.1,-1.3,24.7],[l+.1,-1.3,8],[l+.1,-.3,5.4],[l+.1,.9,4.25]],.055,E.gas,T.gas,30);A(b,16,2.6,16765514,T.gas,.18);let C=new Fe(new qt(.3,.4,.2),e.steel);C.position.set(l+.1,1.2,4.25),C.userData.noPick=!0,T.gas.add(C),y([c-12,-3.95,-18.2],[c+60,-3.95,-18.2],.4,E.sewer,T.sewer);let F=v([[l,-3.27,-3.8],[l,-3.35,-9],[l,-3.55,-13],[l,-3.9,-17.9]],.19,E.sewer,T.sewer,30);A(F,18,1.3,13214314,T.sewer,.2);let S=v([[l,-3.3,-5.2],[l,-1,-5.2],[l,.1,-5.2]],.14,E.sewer,T.sewer,10),L=o(l,-3.52,-12.8);[[[.9,-.2,-12.4],[.8,-1.2,-12.2],[l+.04,-2.4,-12.5],[l+.02,-3.2,-12.8],[l,-3.5,-12.9]],[[.9,-.2,-12.4],[.85,-.9,-11.4],[l+.1,-2,-11.5],[l+.04,-3,-12.1],[l,-3.45,-12.6]],[[.9,-.2,-12.4],[.85,-1,-13.5],[l+.12,-2.2,-13.9],[l+.04,-3.1,-13.4],[l,-3.5,-13.1]],[[l+.1,-2.2,-13.8],[l+.05,-2.9,-14.6]],[[l+.12,-2,-11.5],[l+.06,-2.6,-10.5]]].forEach((me,Pe)=>v(me,Pe<3?.1:.05,E.roots,T.sewer,24));let P=new Fe(new bi(.3,.02,8,28),E.crack);P.position.copy(L),P.rotation.y=Math.PI/2,P.userData.noAO=!0,T.sewer.add(P),[[-4.55],[4.55]].forEach(([me])=>y([c-6,-3.3,me],[c+6.2,-3.3,me],.11,E.tile,T.found)),[[c-6],[c+6.2]].forEach(([me])=>y([me,-3.3,-4.55],[me,-3.3,4.55],.11,E.tile,T.found));let H=v([[l,-3.3,4.55],[l,-3.3,3],[l,-3.1,1.9]],.09,E.tile,T.found,12),Y=new Fe(new $t(.34,.34,.75,22,1,!0),E.sump);Y.position.set(l,-3.05,1.6),Y.userData.noPick=!0,T.found.add(Y);let k=v([[l,-2.55,1.6],[l,-1.2,1.6],[l,-1.2,6.8],[l,.1,6.8]],.075,E.sump,T.found,24);A(H,10,.8,7320831,T.found,.16),A(k,14,1.8,7320831,T.found,.18),v([[.62,-.15,4.27],[.55,-.55,4.27],[.74,-.95,4.27],[.5,-1.4,4.27],[.7,-1.9,4.27],[.52,-2.5,4.27]],.022,E.crack,T.found,30);let V=new Yn(new Fn({map:ta("rgba(255,90,70,0.9)","rgba(255,60,40,0)"),transparent:!0,depthWrite:!1,blending:nn,opacity:.6}));V.position.set(.62,-1.4,4.5),V.scale.set(2.2,3.4,1),V.userData.noAO=!0,T.found.add(V);let z=n?0:t>=1?520:200,G=new Ft,q=new Float32Array(z*3),fe=new Float32Array(z*2),be=me=>{q[me*3]=r()*(bs-.06),q[me*3+1]=-8.6+r()*1.4,q[me*3+2]=(r()-.5)*14-1.5,fe[me*2]=.6+r()*.9,fe[me*2+1]=r()*6.28};for(let me=0;me<z;me++)be(me),q[me*3+1]=-8.6+r()*5.6;G.setAttribute("position",new Rt(q,3));let Ce=new qn(G,new On({size:.42,map:a,color:new Qe(14257407).multiplyScalar(2.6),transparent:!0,depthWrite:!1,blending:nn,toneMapped:!1}));Ce.frustumCulled=!1,Ce.userData.noAO=!0,Ce.raycast=()=>{},T.radon.add(Ce);let ze={x:-1.2,z:-1.5},et={ugWater:o(l,-2.4,21),ugGas:o(l+.1,-1.3,14),ugSewer:o(l,-3.7,-16),ugRoots:L.clone(),ugSewerMain:o(l,-3.95,-18.2),ugTile:o(l,-3.3,4.55),ugSump:o(l,-3.1,1.6),ugCrack:o(l,-1.5,4.3),ugRadon:o(-1.2,-6,-1.5),ugMeter:o(l+.1,1.2,4.25),ugMain:o(l,-2.4,22.8),ugGasMain:o(l,-1.3,24.7)},Q=o(0,0,0),ue={cx:-1e3};function we(me,Pe,Z,Be){let ne=dt(0,1,me.section),re=me.section<.002?-1e3:je(-60,me.cutX,ne);if(ue.cx=re,s.visible=me.section>.002,!s.visible)return re;if(p.position.x=re+bs,d.position.x=re+bs,g.position.x=re+bs-.02,_.position.x=re+bs,et.ugRadon.x=re+bs*.5,Object.entries(T).forEach(([J,ie])=>{let le=Pe===J||Pe==="street"&&(J==="water"||J==="gas"),Oe=!Pe||le?1:.2;ie.userData.al=je(ie.userData.al??Oe,Oe,Math.min(1,Be*5)),ie.traverse(Ne=>{Ne.material&&Ne.material.isMeshStandardMaterial&&(Ne.material.emissiveIntensity=le?.6:.12)})}),E.crack.color.setRGB(3,.5,.35).multiplyScalar(.7+.3*Math.sin(Z*5)),w.forEach(J=>{let ie=J.group.userData.al??1;if(J.pts.visible=ie>.02,!J.pts.visible)return;let le=J.pts.geometry.attributes.position.array;for(let Oe=0;Oe<J.n;Oe++){let Ne=(Oe/J.n+Z*J.speed/J.len)%1;J.curve.getPointAt(Ne,Q),le[Oe*3]=Q.x,le[Oe*3+1]=Q.y,le[Oe*3+2]=Q.z}J.pts.geometry.attributes.position.needsUpdate=!0,J.pts.material.opacity=ie}),Ce.visible=z>0&&(T.radon.userData.al??1)>.2,Ce.visible){Ce.position.x=re;for(let J=0;J<z;J++){let ie=q[J*3+1],le=dt(-5.8,-3,ie);q[J*3+1]+=fe[J*2]*Be*.8,q[J*3+2]+=((ze.z-q[J*3+2])*le*.5+Math.sin(Z*.8+fe[J*2+1])*.1)*Be,q[J*3+1]>-2.95&&be(J)}G.attributes.position.needsUpdate=!0,Ce.material.opacity=T.radon.userData.al??1}return re}return{group:s,update:we,ANCHORS:et,groups:T,state:ue}}function Hh(i){i.updateWorldMatrix(!0,!0);let e=new gt().copy(i.matrixWorld).invert(),t=new gt,n=new Map,s=[],r=l=>{for(let h=l;h&&h!==i;h=h.parent)if(h.userData.sys||h.userData.keep||h.userData.level)return!0;return!1},a=l=>Array.isArray(l.material)?l.geometry.groups.map(h=>{let f=l.geometry.clone(),p=l.geometry.index;return f.clearGroups(),p?f.setIndex(Array.from(p.array.slice(h.start,h.start+h.count))):f.deleteAttribute("position"),{m:l.material[h.materialIndex],g:f}}):[{m:l.material,g:l.geometry.clone()}];i.traverse(l=>{if(!l.isMesh||l.isInstancedMesh||l===i||!l.material||!l.visible||r(l)||l.children.length||!l.geometry.index&&Array.isArray(l.material)||(Array.isArray(l.material)?l.material:[l.material]).some(f=>!f||f.userData.pane))return;t.multiplyMatrices(e,l.matrixWorld),a(l).forEach(({m:f,g:p})=>{let u=[f.uuid,+l.castShadow,+l.receiveShadow,+!!l.userData.noAO,+!!l.userData.noPick,l.renderOrder].join("|"),d=n.get(u);d||n.set(u,d={m:f,cast:l.castShadow,recv:l.receiveShadow,noAO:!!l.userData.noAO,noPick:!!l.userData.noPick,ro:l.renderOrder,geos:[],owners:new Set}),p.attributes.uv||p.setAttribute("uv",new Rt(new Float32Array(p.attributes.position.count*2),2)),p.applyMatrix4(t),d.geos.push(p),d.owners.add(l)}),s.push(l)});let o=0;n.forEach(l=>{if(l.geos.length<2){l.geos.forEach(d=>d.dispose());return}let h=Object.keys(l.geos[0].attributes).filter(d=>l.geos.every(_=>_.attributes[d]));l.geos.forEach(d=>{for(let _ of Object.keys(d.attributes))h.includes(_)||d.deleteAttribute(_)});let f=l.geos.some(d=>!d.index)?l.geos.map(d=>d.index?d.toNonIndexed():d):l.geos,p=Wi(f);if(!p)return;p.computeBoundingSphere();let u=new Fe(p,l.m);u.castShadow=l.cast,u.receiveShadow=l.recv,u.renderOrder=l.ro,l.noAO&&(u.userData.noAO=!0),l.noPick&&(u.userData.noPick=!0),i.add(u),o++,l.done=!0});let c=new Set;return n.forEach(l=>{l.done||l.owners.forEach(h=>c.add(h))}),s.forEach(l=>{!c.has(l)&&l.parent&&(l.parent.remove(l),l.geometry.dispose())}),o}function C0(i,e){i.updateWorldMatrix(!0,!0);let t=new gt().copy(i.matrixWorld).invert(),n=new gt,s=[],r=[];if(i.traverse(c=>{c.isLineSegments&&c.material===e&&r.push(c)}),r.forEach(c=>{let l=c.geometry.clone();for(let h of Object.keys(l.attributes))h!=="position"&&l.deleteAttribute(h);l.applyMatrix4(n.multiplyMatrices(t,c.matrixWorld)),s.push(l)}),s.length<2)return 0;let a=Wi(s.map(c=>c.index?c.toNonIndexed():c));if(!a)return 0;let o=new ls(a,e);return o.raycast=()=>{},o.userData.noAO=!0,i.add(o),r.forEach(c=>{c.parent&&c.parent.remove(c),c.geometry.dispose()}),r.length}function P0({M:i,tier:e,glowTex:t,dotTex:n}){let s={value:0},r=(v,y=.6,w=0,A={})=>{let x=new Yt({color:v,roughness:y,metalness:w,...A});return x.userData.th=[.4],x};function a(){let v=document.createElement("canvas");v.width=v.height=512;let y=v.getContext("2d");y.fillStyle="#b99a6e",y.fillRect(0,0,512,512);let w=7,A=()=>(w=w*16807%2147483647)/2147483647;for(let C=0;C<260;C++){let F=A()*512,S=.03+A()*.07;y.strokeStyle=A()>.5?`rgba(90,62,30,${S})`:`rgba(240,220,180,${S})`,y.lineWidth=.6+A()*2.2,y.beginPath(),y.moveTo(0,F);for(let L=0;L<=512;L+=32)y.lineTo(L,F+Math.sin(L*.012+C)*(2+A()*5));y.stroke()}for(let C=0;C<5;C++){let F=A()*512,S=A()*512,L=4+A()*7,P=y.createRadialGradient(F,S,0,F,S,L*2.4);P.addColorStop(0,"rgba(70,44,20,.55)"),P.addColorStop(1,"rgba(70,44,20,0)"),y.fillStyle=P,y.beginPath(),y.ellipse(F,S,L*2.6,L*1.3,0,0,6.3),y.fill()}let x=new En(v);x.colorSpace=Kt,x.wrapS=x.wrapT=wn,x.repeat.set(1/1.2,1/1.2),x.anisotropy=8;let b=new Yt({map:x,roughness:.82,metalness:0});return b.userData.th=[.45],b}let o=(v,y=1.5,w={})=>r(789776,.5,0,{emissive:v,emissiveIntensity:y,...w}),c={enclosure:r(8093831,.5,.6,{envMapIntensity:.7}),enclosureDark:r(2764082,.62,.5,{envMapIntensity:.6}),galv:r(11186618,.38,.9,{envMapIntensity:1.3}),blackPlastic:r(1184534,.42,.05),greyPlastic:r(4869975,.5,.05),whitePlastic:r(11118238,.55,.02),conduit:r(7304316,.62,.02),bluePlastic:r(3104680,.5,.02),orangePlastic:r(14711338,.5,.02),yellowPlastic:r(15319598,.5,.02),redPlastic:r(12728875,.5,.02),purple:r(8011716,.45,.05,{emissive:5909152,emissiveIntensity:.25}),green:r(3119703,.5,.05),copper:r(14256718,.25,1,{envMapIntensity:1.5}),copperHot:r(13201722,.3,1,{envMapIntensity:1.5,emissive:16742954,emissiveIntensity:.3}),aluminum:r(13225684,.3,1,{envMapIntensity:1.4}),brass:r(13214282,.32,1,{envMapIntensity:1.3}),rubber:r(855568,.85,0),plywood:a(),studs:i.cedar,concrete:i.concrete,slab:i.slab,drywall:i.drywall,steel:i.steel,pvc:i.pvc,castIron:r(2829617,.75,.6),clay:r(10115900,.9,0),hdpe:r(1316378,.35,.1,{envMapIntensity:1.2}),gravel:r(7301730,1,0),soil:r(3812382,1,0),insulPink:r(15311018,1,0),insulYellow:r(14861930,1,0),vermiculite:r(11569738,.95,.15),frost:r(15923199,.35,0,{emissive:12572415,emissiveIntensity:.25}),ice:i.ice,water:new fi({color:2781104,roughness:.06,metalness:0,transparent:!0,opacity:.78,envMapIntensity:1.8,clearcoat:1}),sewage:new fi({color:5916200,roughness:.2,metalness:0,transparent:!0,opacity:.9,envMapIntensity:1.2}),glassClear:new fi({color:14674674,roughness:.03,metalness:0,transparent:!0,opacity:.22,envMapIntensity:2,clearcoat:1}),poly:new fi({color:14542574,roughness:.35,metalness:0,transparent:!0,opacity:.28,envMapIntensity:1.4,side:Bn,depthWrite:!1}),led:(v=9425830,y=3)=>o(v,y),glow:o};[c.water,c.sewage,c.glassClear,c.poly].forEach(v=>{v.userData.th=[.3]});let l=(v,y,w,A,x,b={})=>(v.position.set(y,w,A),v.castShadow=b.cast!==!1,v.receiveShadow=b.receive!==!1,b.keep&&(v.userData.keep=!0),b.rot&&v.rotation.set(b.rot[0]||0,b.rot[1]||0,b.rot[2]||0),x&&x.add(v),v),h=(v,y,w,A,x=0,b=0,C=0,F,S={})=>{let L=S.r?new ki(v,y,w,2,Math.min(S.r,v/2,y/2,w/2)):new qt(v,y,w);return S.uv&&lr(L,S.uv===!0?{}:S.uv),l(new Fe(L,A),x,b,C,F,S)},f=(v,y,w,A=0,x=0,b=0,C,F={})=>{let S=new $t(F.r2??v,v,y,F.seg||16,1,!!F.open);return F.axis==="x"?S.rotateZ(Math.PI/2):F.axis==="z"&&S.rotateX(Math.PI/2),l(new Fe(S,w),A,x,b,C,F)},p=(v,y,w,A,x,b,C={})=>l(new Fe(new Zn(v,C.seg||16,C.seg2||12),y),w,A,x,b,C),u=(v,y,w)=>new N(v,y,w);return{time:s,mats:c,std:r,box:h,cyl:f,sphere:p,tube:(v,y,w,A,x={})=>{let b=new di(v.map(P=>P.isVector3?P:u(P[0],P[1],P[2])),!1,x.type||"catmullrom",x.tension??.3),C=b.getLength(),F=new ii(b,x.seg||Math.max(8,Math.round(C*(x.density||14))),y,x.radial||8,!1),S=F.attributes.uv;for(let P=0;P<S.count;P++)S.setX(P,S.getX(P)*C);let L=l(new Fe(F,w),0,0,0,A,x);return L.userData.curve=b,L.userData.len=C,L},V:u,flow:(v,y={})=>{let w={value:y.level??1},A=new Yt({color:y.base??1382170,roughness:y.roughness??.45,metalness:y.metalness??.1,emissive:v,emissiveIntensity:y.intensity??2.2});return A.defines={USE_UV:""},A.userData.level=w,A.userData.th=[.6],A.onBeforeCompile=x=>{x.uniforms.uFlowT=s,x.uniforms.uFlowL=w,x.fragmentShader=x.fragmentShader.replace("#include <common>",`#include <common>
uniform float uFlowT; uniform float uFlowL;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        { float fd = fract(vUv.x * ${(y.dash??3).toFixed(2)} - uFlowT * ${((y.speed??.5)*(y.dash??3)).toFixed(2)});
          float fp = smoothstep(0.0, 0.18, fd) * (1.0 - smoothstep(0.42, 0.6, fd));
          totalEmissiveRadiance *= (${(y.rest??.12).toFixed(2)} + ${(y.gain??1).toFixed(2)} * fp) * uFlowL; }`)},A.customProgramCacheKey=()=>`flow${y.dash??3}_${y.speed??.5}_${y.rest??.12}_${y.gain??1}`,A},atlas:(v,y={})=>{let A=y.width||1024,x=4,b=4,C=0,F={};v.forEach(G=>{x+G.w+4>A&&(x=4,b+=C+4,C=0),F[G.key]={x,y:b,w:G.w,h:G.h,c:G},x+=G.w+4,C=Math.max(C,G.h)});let S=2**Math.ceil(Math.log2(b+C+4)),L=document.createElement("canvas");L.width=A,L.height=S;let P=L.getContext("2d"),H=G=>{let q=G.c;if(P.clearRect(G.x,G.y,G.w,G.h),q.bg&&(P.fillStyle=q.bg,P.fillRect(G.x,G.y,G.w,G.h)),q.draw){P.save(),P.translate(G.x,G.y),q.draw(P,G.w,G.h,q),P.restore();return}P.fillStyle=q.color||"#ece6da",P.textAlign=q.align||"center",P.textBaseline="middle";let fe=q.align==="left"?G.x+6:G.x+G.w/2;P.font=`${q.weight||600} ${q.size||Math.round(G.h*.62)}px ${q.font||"ui-monospace, Menlo, Consolas, monospace"}`,q.sub?(P.fillText(q.text,fe,G.y+G.h*.38),P.font=`500 ${Math.round((q.size||G.h*.62)*.5)}px ui-monospace, Menlo, Consolas, monospace`,P.globalAlpha=.75,P.fillText(q.sub,fe,G.y+G.h*.78),P.globalAlpha=1):P.fillText(q.text,fe,G.y+G.h/2+1)};Object.values(F).forEach(H);let Y=new En(L);Y.colorSpace=Kt,Y.anisotropy=8;let k=new Yt({map:Y,emissiveMap:Y,emissive:16777215,emissiveIntensity:y.emissive??.35,roughness:.6,transparent:!0,alphaTest:.02,depthWrite:!1});return k.userData.th=[.4],{plane:(G,q,fe,be=0,Ce=0,ze=0,et={})=>{let Q=F[G],ue=q*(Q.h/Q.w),we=new tn(q,ue),me=we.attributes.uv;for(let Z=0;Z<me.count;Z++)me.setXY(Z,(Q.x+me.getX(Z)*Q.w)/A,1-(Q.y+(1-me.getY(Z))*Q.h)/S);let Pe=l(new Fe(we,k),be,Ce,ze,fe,{cast:!1,receive:!1,...et});return Pe.renderOrder=3,Pe},set:(G,q,fe,be)=>{let Ce=F[G];q!==void 0&&(Ce.c.text=q),fe!==void 0&&(Ce.c.sub=fe),be&&Object.assign(Ce.c,be),H(Ce),Y.needsUpdate=!0},mat:k,tex:Y}},particles:(v,y={})=>{let w=e>=1?v:Math.ceil(v*.45),A=new Ft,x=new Float32Array(w*3);A.setAttribute("position",new Rt(x,3));let b=new On({size:y.size??.05,map:n,color:new Qe(y.color??16777215).multiplyScalar(y.gain??1.6),transparent:!0,depthWrite:!1,blending:y.normal?Os:nn,toneMapped:!1,sizeAttenuation:!0,opacity:y.opacity??1}),C=new qn(A,b);return C.frustumCulled=!1,C.userData.noAO=!0,C.userData.keep=!0,C.raycast=()=>{},C.userData.n=w,C.userData.pos=x,C},sprite:(v,y,w,A,x,b,C=.8)=>{let F=new Yn(new Fn({map:t,color:v,transparent:!0,depthWrite:!1,blending:nn,opacity:C}));return F.position.set(w,A,x),F.scale.set(y,y,1),F.userData.noAO=!0,F.userData.keep=!0,F.raycast=()=>{},b&&b.add(F),F},bake:v=>{let y=new Map,w=[];v.updateWorldMatrix(!0,!0);let A=new gt().copy(v.matrixWorld).invert(),x=new gt,b=C=>{for(let F=C;F&&F!==v;F=F.parent)if(F.userData.keep)return!0;return!1};return v.traverse(C=>{if(!C.isMesh||C.isInstancedMesh||b(C)||Array.isArray(C.material)||C.children.length)return;let F=C.material.uuid+"|"+ +C.castShadow+ +C.receiveShadow+"|"+C.renderOrder,S=y.get(F);S||y.set(F,S={mat:C.material,cast:C.castShadow,recv:C.receiveShadow,ro:C.renderOrder,geos:[]});let L=C.geometry.index?C.geometry.toNonIndexed():C.geometry.clone();Object.keys(L.attributes).forEach(P=>{P!=="position"&&P!=="normal"&&P!=="uv"&&L.deleteAttribute(P)}),L.attributes.uv||L.setAttribute("uv",new Rt(new Float32Array(L.attributes.position.count*2),2)),L.applyMatrix4(x.multiplyMatrices(A,C.matrixWorld)),S.geos.push(L),w.push(C)}),y.forEach(C=>{let F=Wi(C.geos);if(!F)return;let S=new Fe(F,C.mat);S.castShadow=C.cast,S.receiveShadow=C.recv,S.renderOrder=C.ro,S.userData.keep=!0,v.add(S),C.geos.forEach(L=>L.dispose())}),w.forEach(C=>{C.parent&&C.parent.remove(C),C.geometry.dispose()}),v},place:l}}var ps=new N(2.8,-1.25,-3.945),kh=.0266,sa=i=>.3-i*kh,zh=[[15,1],[15,1],[20,1],[15,1],[15,1],[20,1],[15,1],[15,1],[40,2,"range","RANGE"],[30,2,"dryer","DRYER"],[40,2,"hp","HEAT PUMP"],[30,2,"base","BASEBOARD"],[15,1],[15,1]],Gh=[[15,1,null,null,"AFCI"],[15,1,null,null,"AFCI"],[20,1,null,null,"GFCI"],[20,1],[15,1],[15,1],[20,1],[15,1],[30,2,"wh","WATER HTR"],[30,2,"ac","A/C"],[50,2,"ev","EV CHARGER"],[60,2,"spa","HOT TUB"],[40,2,"suite","SUITE"]];function I0({kit:i}){let{box:e,cyl:t,tube:n,mats:s,atlas:r}=i,a=new ft,o=2.8,c=-4.3;t(.034,3.7,s.galv,o,3.6,c,a),t(.06,.16,s.galv,o,5.5,c-.02,a,{r2:.03}),e(.1,.05,.16,s.galv,o,5.44,c-.05,a,{rot:[.5,0,0]}),[2.2,3.4,4.6].forEach(p=>e(.12,.03,.2,s.galv,o,p,c+.1,a,{cast:!1})),e(.3,.44,.12,s.enclosure,o,1.45,c+.02,a,{r:.012}),t(.092,.03,s.galv,o,1.5,c-.05,a,{axis:"z",seg:28}),t(.085,.085,s.glassClear,o,1.5,c-.1,a,{axis:"z",seg:28,cast:!1}),t(.074,.006,s.whitePlastic,o,1.5,c-.075,a,{axis:"z",seg:28,cast:!1});let l=r([{key:"kwh",text:"08431",sub:"kWh \xB7 CL200 \xB7 240 V",w:192,h:96,size:46,color:"#0e1014"}],{width:256,emissive:.15}),h=l.plane("kwh",.1,a,o,1.5,c-.0795);h.rotation.y=Math.PI;let f=t(.05,.002,s.aluminum,o,1.452,c-.09,a,{seg:24,cast:!1,keep:!0});return t(.03,1.02,s.conduit,o,.72,c,a),e(.075,.13,.075,s.conduit,o,.17,c,a,{r:.012}),t(.03,.34,s.conduit,o,.15,c+.17,a,{axis:"z"}),n([[o+.11,1.24,c+.03],[o+.13,.6,c+.06],[o+.14,.05,c-.12],[o+.14,-.25,c-.16]],.006,s.copper,a,{radial:6}),t(.011,.5,s.copper,o+.14,-.05,c-.16,a,{seg:8}),i.bake(a),a.add(f),{group:a,disc:f,labels:l}}function D0({kit:i}){let{box:e,cyl:t,tube:n,mats:s,flow:r,atlas:a,V:o}=i,c=new ft;c.position.copy(ps);let l=new ft;c.add(l);let h=[];[15,20,30,40,50,60].forEach(Z=>h.push({key:"a"+Z,text:String(Z),w:96,h:56,size:40,color:"#f4f1ea"})),h.push({key:"a200",text:"200",w:144,h:72,size:56,color:"#f4f1ea"}),[...zh,...Gh].filter(Z=>Z[3]).forEach(Z=>h.push({key:"n"+Z[2],text:Z[3],w:224,h:44,size:26,color:"#f4bd7e"})),h.push({key:"AFCI",text:"AFCI",w:112,h:44,size:26,color:"#9fc4ff"},{key:"GFCI",text:"GFCI",w:112,h:44,size:26,color:"#ffe08a"}),h.push({key:"rating",text:"200 A \xB7 120/240 V \xB7 1\xD8 3W",w:420,h:44,size:24,color:"#cfd4da"}),h.push({key:"mon",w:320,h:200,text:"49 A",sub:"of a 100 A service",ratio:.49,draw(Z,Be,ne,re){Z.fillStyle="#05070b",Z.fillRect(0,0,Be,ne);let J=re.ratio>.9?"#ff6b4f":re.ratio>.7?"#f4bd7e":"#8fd3a6";Z.textAlign="left",Z.textBaseline="middle",Z.fillStyle="#8b93a1",Z.font="600 17px ui-monospace, Menlo, monospace",Z.fillText("DEMAND",20,30),Z.fillStyle=J,Z.font="700 74px ui-monospace, Menlo, monospace",Z.fillText(re.text,18,92),Z.fillStyle="#cfd4da",Z.font="500 19px ui-monospace, Menlo, monospace",Z.fillText(re.sub,20,146),Z.fillStyle="#1c222c",Z.fillRect(20,168,Be-40,14),Z.fillStyle=J,Z.fillRect(20,168,(Be-40)*Math.min(1,re.ratio),14)}}),h.push({key:"dir",w:300,h:420,draw(Z,Be,ne){Z.fillStyle="#e9e4d6",Z.fillRect(0,0,Be,ne),Z.fillStyle="#1a1c20",Z.font="700 20px ui-monospace, Menlo, monospace",Z.textAlign="left",Z.textBaseline="middle",Z.fillText("CIRCUIT DIRECTORY",14,24),Z.strokeStyle="rgba(20,22,26,.45)",Z.lineWidth=1,Z.font="500 13px ui-monospace, Menlo, monospace",["KITCHEN PLUGS","BEDROOM 1 \xB7 AFCI","BEDROOM 2 \xB7 AFCI","BATH \xB7 GFCI","LIVING","FURNACE","RANGE 40A","DRYER 30A","WATER HTR 30A","A/C 30A","EV CHARGER 50A","HOT TUB 60A","HEAT PUMP 40A","SUITE 40A"].forEach((J,ie)=>{let le=54+ie*25;Z.beginPath(),Z.moveTo(12,le+12),Z.lineTo(Be-12,le+12),Z.stroke(),Z.fillText(String(ie+1).padStart(2,"0")+"  "+J,14,le)})}});let f=a(h,{width:1024,emissive:.22});e(2,1.9,.03,s.plywood,.2,.1,-.015,l,{uv:{ox:1,oy:1}}),e(2.3,2.4,.1,s.concrete,.2,.05,-.085,l,{cast:!1,uv:!0});let p=.4,u=1,d=.1,_=.004;e(p,u,_,s.enclosureDark,0,0,_/2,l),e(_,u,d,s.enclosure,-p/2,0,d/2,l),e(_,u,d,s.enclosure,p/2,0,d/2,l),e(p,_,d,s.enclosure,0,u/2,d/2,l),e(p,_,d,s.enclosure,0,-u/2,d/2,l),t(.03,.92,s.conduit,0,u/2+.46,.045,l),t(.04,.03,s.enclosure,0,u/2+.012,.045,l),e(.19,.125,.026,s.blackPlastic,.42,.3,.013,l,{r:.006});let g=f.plane("mon",.168,c,.42,.3,.0268,{keep:!0});n([[.325,.3,.012],[.27,.31,.014],[.215,.33,.03]],.004,s.rubber,l,{radial:6}),e(.11,.075,.058,s.blackPlastic,0,.39,.035,l,{r:.004});let m=e(.034,.024,.022,i.std(1908773,.4,.1,{emissive:16039294,emissiveIntensity:0}),0,.39,.072,c,{r:.003,keep:!0});f.plane("a200",.05,l,0,.365,.0646),[-.03,.03].forEach(Z=>e(.022,.022,.03,s.brass,Z,.447,.03,l)),[[-.03,s.rubber],[.03,i.std(9183002,.6)],[.085,s.whitePlastic]].forEach(([Z,Be],ne)=>n([[ne===2?.02:Z*.4,.5,.045],[Z*.8,.485,.04],[Z,.46,.032]],.0075,Be,l,{radial:8,seg:10}));let E=s.copperHot.clone(),T=[-.012,.012].map(Z=>e(.016,.74,.005,E,Z,-.02,.012,c,{keep:!0,cast:!1}));[-.03,.03].forEach((Z,Be)=>e(.016,.06,.005,E,Z*.7,.36,.012,l,{cast:!1}));let v={},y=s.greyPlastic,w=s.rubber,A=i.std(9183002,.6),x=s.whitePlastic,b=(Z,Be)=>{let ne=0;Z.forEach(([re,J,ie,le,Oe])=>{let Ne=J===2?(sa(ne)+sa(ne+1))/2:sa(ne),qe=J===2?kh*2-.002:kh-.002,Je=Be*.076;e(.088,qe,.055,s.blackPlastic,Je,Ne,.0325,l,{r:.0025,cast:!1});let X=Be*.047,at=y;ie&&(at=i.std(4869975,.5,.05,{emissive:16753981,emissiveIntensity:0}),v[ie]={handle:at,level:null,pos:o(Je,Ne,.06),amps:re}),e(.015,J===2?qe*.72:.0125,.013,at,X,Ne,.0655,ie?c:l,{r:.002,cast:!1,keep:!!ie}),f.plane("a"+re,.02,l,Be*.07,Ne+(J===2?.009:0),.0603),le&&f.plane("n"+ie,.05,l,Be*.087,Ne-.011,.0603),Oe&&(f.plane(Oe,.026,l,Be*.099,Ne,.0603),e(.007,.007,.004,Oe==="AFCI"?s.bluePlastic:s.yellowPlastic,Be*.118,Ne,.062,l,{cast:!1}));for(let lt=0;lt<J;lt++){let O=ne+lt,M=sa(O);e(.03,.007,.004,s.copper,Be*.024+(O%2?.012:-.012)*.3,M,.016,l,{cast:!1});let K=Be*(.146+O%4*.0045),te=.026+O%3*.008;n([[Be*.121,M,.034],[Be*.134,M+.002,te+.004],[K,M+.02,te],[K,.3+O%5*.01,te],[Be*(.1+O%6*.012),.492,.03+O%2*.04]],.0023,J===2&&lt===1?A:w,l,{radial:5,seg:14,cast:!1})}ne+=J})};b(zh,-1),b(Gh,1),[-1,1].forEach(Z=>{e(.012,.52,.008,s.aluminum,Z*.176,-.02,.012,l,{cast:!1});for(let Be=0;Be<22;Be++)t(.0034,.004,s.galv,Z*.176,.22-Be*.0225,.018,l,{axis:"z",seg:6,cast:!1});for(let Be=0;Be<9;Be++){let ne=.2-Be*.05;n([[Z*.176,ne,.02],[Z*.164,ne+.03,.05+Be%3*.008],[Z*.162,.33,.055+Be%3*.008],[Z*(.06+Be*.012),.492,.07]],.0023,x,l,{radial:5,seg:12,cast:!1})}}),e(.36,.01,.004,s.aluminum,0,-.3,.008,l,{cast:!1}),e(.18,.012,.008,s.brass,-.05,-.43,.012,l,{cast:!1}),n([[-.1,-.43,.02],[-.13,-.47,.04],[-.13,-.56,.04],[-.2,-.75,.012],[-.7,-.82,.008]],.004,s.copper,l,{radial:6});let C=new ft;C.userData.keep=!0,c.add(C);let F=.0585,S=s.enclosure;e(.07,.98,.003,S,-.159,0,F,C),e(.07,.98,.003,S,.159,0,F,C),e(.056,.66,.003,S,0,-.02,F,C),e(.248,.062,.003,S,0,.459,F,C),e(.064,.094,.003,S,-.092,.381,F,C),e(.064,.094,.003,S,.092,.381,F,C),e(.248,.018,.003,S,0,.323,F,C),e(.248,.292,.003,S,0,-.344,F,C);let L=f.plane("rating",.2,C,0,.462,F+.002),P=new ft;P.userData.keep=!0,P.position.set(-p/2,0,d+.002),c.add(P),e(p,u,.003,s.enclosure,p/2,0,0,P);let H=f.plane("dir",.24,P,p/2,.02,-.003);H.rotation.y=Math.PI,e(.012,.06,.012,s.galv,p-.02,0,.006,P),P.rotation.y=-2.05;let Y={15:s.whitePlastic,20:s.yellowPlastic,30:s.orangePlastic,40:s.rubber,50:s.rubber,60:s.rubber},k={15:r(16763274,{base:12170667,intensity:.7,dash:2.2,speed:.9,rest:0,gain:1,roughness:.6}),20:r(16758863,{base:13215008,intensity:.7,dash:2.2,speed:.9,rest:0,gain:1,roughness:.6})},V=.955,z=0,G=(Z,Be,ne)=>{let re=z++,J=-.17+re%13*.028,ie=.028+re%2*.042,le=Z>=40?.0085:Z===30?.0065:.0052,Oe=[[J,.5,ie],[J,.66+re%3*.03,ie],[J*1.4,V-.06,ie+.05],[J*1.6,V,ie+.16+re%4*.03]],Ne=.3+re%7*.035,qe=ne==="south"?[[-.6,V,Ne],[-2.2,V,Ne],[-5.4,V,Ne+.2]]:ne==="north"?[[.6,V,Ne],[1.6,V,Ne],[2.1,V,Ne+1.2],[2.1,V,5.5]]:ne==="east"?[[J*1.2,V,.9],[J,V,3.2],[J+.6,V,7.4]]:ne==="up"?[[-.42,V+.1,.3],[-.42,V+.9,.34]]:[[.5,V,.2],[.62,V+.02,.02],[.62,V+.02,-.4]],Je=Y[Z];Be&&v[Be]?(Je=r(16753981,{base:1513757,intensity:2.6,dash:1.6,speed:1.1,rest:0,gain:1,level:0}),v[Be].level=Je.userData.level):k[Z]&&(Je=k[Z]),n([...Oe,...qe],le,Je,l,{radial:7,density:9,tension:.35,cast:re%3===0})},q=["south","north","south","east","north","south","north","south"];zh.filter(Z=>!Z[2]).forEach((Z,Be)=>G(Z[0],null,q[Be%q.length])),Gh.filter(Z=>!Z[2]).forEach((Z,Be)=>G(Z[0],null,q[(Be+3)%q.length])),G(40,"range","up"),G(30,"dryer","south"),G(40,"hp","south"),G(30,"base","north"),G(30,"wh","south"),G(30,"ac","out"),G(50,"ev","east"),G(60,"spa","out"),G(40,"suite","north"),e(2.4,.02,.09,s.studs,-.4,V+.012,.5,l,{uv:!0,cast:!1});let fe=o(.72,-.2,0);e(.06,.098,.062,s.bluePlastic,fe.x,fe.y,.031,l,{r:.004});let be=new ft;be.position.set(fe.x+.012,fe.y-.004,.118),be.rotation.set(.12,-.5,.06),be.userData.keep=!0,c.add(be),e(.034,.104,.024,s.whitePlastic,0,0,0,be,{r:.004}),e(.04,.118,.0016,s.galv,0,0,.0128,be),[.028,-.028].forEach(Z=>{e(.004,.011,.002,s.rubber,-.006,Z,.0125,be,{cast:!1}),e(.004,.011,.002,s.rubber,.006,Z,.0125,be,{cast:!1})}),[.012,-.012].forEach(Z=>{t(.0035,.004,s.brass,.0185,Z,-.004,be,{axis:"x",seg:8}),t(.0035,.004,s.aluminum,-.0185,Z,-.004,be,{axis:"x",seg:8})}),n([[fe.x-.01,.62,.012],[fe.x-.012,.2,.014],[fe.x-.008,fe.y+.05,.02]],.0058,s.greyPlastic,l,{radial:7});let Ce=[];[[-1,s.aluminum],[1,s.aluminum]].forEach(([Z,Be])=>{let ne=o(fe.x+Z*.03,fe.y+.012*Z+.02,.085+(Z>0?.012:0));n([[fe.x-.008+Z*.004,fe.y+.045,.022],[fe.x+Z*.02,fe.y+.05,.05],[ne.x,ne.y+.016,ne.z]],.0019,Be,l,{radial:6,seg:12,cast:!1});let re=t(.0078,.027,s.purple,ne.x,ne.y,ne.z,c,{seg:12,keep:!0});Ce.push(re),t(.0086,.006,s.purple,ne.x,ne.y+.0135,ne.z,l,{seg:12}),n([[ne.x,ne.y+.014,ne.z],[ne.x+Z*.012,ne.y+.03,ne.z+.012],[fe.x+.012+Z*.026,fe.y+.006*Z,.1],[fe.x+.012+Z*.02,fe.y-.004+.012*Z,.112]],.0017,s.copper,l,{radial:6,seg:14,cast:!1})}),i.bake(l);let ze={meter:o(2.8,1.5,-4.42),main:ps.clone().add(o(0,.39,.075)),bus:ps.clone().add(o(0,-.06,.02)),branch:ps.clone().add(o(-.076,sa(3),.06)),range:ps.clone().add(v.range.pos),ev:ps.clone().add(v.ev.pos),spa:ps.clone().add(v.spa.pos),alu:ps.clone().add(o(fe.x+.03,fe.y+.03,.09)),afci:ps.clone().add(o(.099,sa(.5),.06)),load:ps.clone().add(o(.33,.35,.03))},et={fx:2.8,fz:-3.9,time:19.4,cut:0,ghost:0,ground:1,orbit:.012},Q=[{...et,radius:15,theta:3.42,phi:1.4,ty:2.8,fz:-4.2,dof:0,orbit:.03,time:15.5},{...et,radius:3.4,theta:3.5,phi:1.72,ty:1.95,fz:-4.35,dof:.8,time:15.5},{...et,radius:1.5,theta:.3,phi:1.44,ty:-1,dof:1.2},{...et,radius:1.45,theta:-.28,phi:1.47,ty:-1.24,dof:1.3},{...et,radius:1.75,theta:.34,phi:1.74,ty:-.98,fz:-3.8,dof:1.1},{...et,radius:1.15,theta:1,phi:1.5,ty:-1.3,fx:3.45,dof:1},{...et,radius:1.85,theta:.2,phi:1.6,ty:-.98,fx:3,fz:-3.8,dof:1}],ue=new Set(["range","dryer","ac"]),we="",me=0,Pe=["range","ev","spa"];return{name:"panel",group:c,anchors:ze,shots:Q,hides:Z=>Z.sys.electrical?Z.sys.electrical.meshes:[],input(Z){if(Z&&(Z.on&&(ue=new Set(Z.on)),Z.amps!==void 0&&Z.service)){let Be=`${Math.round(Z.amps)} A`,ne=`of a ${Z.service} A service`;Be+ne!==we&&(we=Be+ne,f.set("mon",Be,ne,{ratio:Z.amps/Z.service}))}},light(Z){return Z===0?{pos:[2.2,3.4,-7.4],at:[2.8,1.6,-4.3],power:0}:Z===1?{pos:[2.2,3.4,-7.4],at:[2.8,1.6,-4.3],power:.55,fill:.3}:Z===5?{pos:[2.9,-.45,-2.2],at:[3.52,-1.45,-3.9],power:.8}:{pos:[1.5,-.5,-1.7],at:[2.8,-1.2,-3.9],power:1}},update({step:Z,k:Be,t:ne,dt:re,snap:J}){let ie=J?1:1-Math.exp(-re*5);me=je(me,Z===3||Z===4?1:0,ie);let le=dt(0,1,me);C.position.set(.52*le,-.99*le,.2*Math.sin(Math.PI*le)+.075*le),C.rotation.set(-.13*le,0,-.05*le),E.emissiveIntensity=.08+.26*le+(Z===3?.12*Math.sin(ne*2.2):0),m.material.emissiveIntensity=Z===2?.4+.2*Math.sin(ne*3):.06;let Oe=Z===3?1:Z===6?.35:.12;Object.values(k).forEach(Ne=>{Ne.userData.level.value=je(Ne.userData.level.value,Oe,ie)}),Object.entries(v).forEach(([Ne,qe])=>{let Je=Z===4?Pe.includes(Ne)?1:0:Z===6&&ue.has(Ne)?1:0;qe.level&&(qe.level.value=je(qe.level.value,Je,ie)),qe.handle.emissiveIntensity=je(qe.handle.emissiveIntensity,Je*2.4,ie)}),Ce.forEach((Ne,qe)=>{Ne.scale.setScalar(Z===5?1+.08*Math.sin(ne*4+qe):1)}),L.visible=le<.9}}}var wt=-1.2,zt=-1.5,cn=.057,ji=-2.8,an=-2.9,mi=-3.05,wo=-4.4,Cn=-2.1,Pn=.25,un=-1.5,ei=-.25,Vh=-3.75,ks=.24,ri=7.9,ra=10.45,gi=-3.995,bn=.66,Mn=1.6,xn={x:-.5,y:-1.52,z:gi+.1},es={x:-.3,z:gi+.115},cr=-.59,aa=new N(wt,an-.1,zt+.03),L0=i=>8.054+.1233+.72*(i+2.78),Ao=[[-.36,un],[-.62,gi+.04]],Ro=[[-.95,ei],[-1.5,1.25]],U0=[-2.3,.05];function N0({kit:i,M:e,tier:t,reduce:n}){let{box:s,cyl:r,tube:a,mats:o,atlas:c,V:l}=i,h=new ft,f=new ft,p=new ft,u=new ft;h.add(f,p,u);let d=Jn(41),_=(D,$,ce,_e,Ue)=>{let B=document.createElement("canvas");B.width=D,B.height=$,ce(B.getContext("2d"),D,$);let Me=new En(B);return Me.colorSpace=Kt,Me.wrapS=Me.wrapT=wn,Me.repeat.set(_e,Ue),Me.anisotropy=8,Me},g=(D,$,ce,_e,Ue,B,Me)=>{for(let ae=0;ae<_e;ae++)D.fillStyle=Ue[d()*Ue.length|0],D.beginPath(),D.ellipse(d()*$,d()*ce,B+d()*(Me-B),B+d()*(Me-B)*.7,d()*3,0,6.3),D.fill()},m=_(256,256,(D,$,ce)=>{D.fillStyle="#7c776f",D.fillRect(0,0,$,ce);for(let _e=0;_e<40;_e++){let Ue=d()*$,B=d()*ce,Me=20+d()*50,ae=D.createRadialGradient(Ue,B,0,Ue,B,Me),Ie=d()>.5;ae.addColorStop(0,Ie?"rgba(60,56,50,.18)":"rgba(160,154,144,.14)"),ae.addColorStop(1,"rgba(0,0,0,0)"),D.fillStyle=ae,D.fillRect(Ue-Me,B-Me,Me*2,Me*2)}g(D,$,ce,900,["rgba(50,47,43,.35)","rgba(170,164,152,.3)","rgba(96,90,82,.4)"],.4,1.3)},1/1.6,1/1.6),E=_(256,256,(D,$,ce)=>{D.fillStyle="#3a3732",D.fillRect(0,0,$,ce);for(let _e=0;_e<900;_e++){let Ue=d()*$,B=d()*ce,Me=2+d()*5,ae=70+d()*60,Ie=5+(d()*3|0);D.fillStyle=`rgb(${ae|0},${ae*.97|0},${ae*.9|0})`,D.beginPath();for(let Ae=0;Ae<Ie;Ae++){let U=Ae/Ie*6.283+d()*.5,ye=Me*(.6+d()*.5);D[Ae?"lineTo":"moveTo"](Ue+Math.cos(U)*ye,B+Math.sin(U)*ye*.8)}D.closePath(),D.fill(),D.strokeStyle="rgba(20,18,16,.45)",D.lineWidth=1,D.stroke()}},1/.45,1/.45),T=_(256,256,(D,$,ce)=>{let _e=D.createImageData($,ce),Ue=_e.data;for(let B=0;B<ce;B++)for(let Me=0;Me<$;Me++){let ae=B/ce,Ie=(d()-.5)*26,Ae=Math.sin(B*.11+Math.sin(Me*.05)*1.6)*6,U=(B*$+Me)*4;Ue[U]=90-30*ae+Ie+Ae,Ue[U+1]=68-22*ae+Ie*.9+Ae,Ue[U+2]=50-12*ae+Ie*.8+Ae*.6,Ue[U+3]=255}D.putImageData(_e,0,0),g(D,$,ce,160,["rgba(150,140,124,.8)","rgba(120,112,100,.8)","rgba(70,60,50,.7)"],.8,3.2)},1/1.7,1/1.7);T.wrapT=Li,T.offset.set(0,1+2.9/1.7);let v=i.std(16777215,.92,0,{map:m}),y=i.std(16777215,1,0,{map:E}),w=i.std(16777215,1,0,{map:T}),A=o.rubber,x=i.std(9341828,.7,0),b=i.std(10920859,.8,0),C=i.std(2060240,.15,0,{emissive:5220095,emissiveIntensity:.55}),F=o.blackPlastic,S=o.rubber,L=(D,$,ce,_e)=>{let Ue=Jn(ce),B=[],Me=[],ae=16;for(let Ie=3;Ie<=$-3;Ie+=6)ae=Math.max(7,Math.min(25,ae+(Ue()-.5)*5)),B.push([Ie,ae]);for(let Ie=0;Ie<4;Ie++){let Ae=3+(Ue()*(B.length-6)|0),U=B[Ae];Me.push([U,[U[0]+8+Ue()*26,U[1]+(Ue()>.5?1:-1)*(5+Ue()*7)]])}return{key:D,w:$,h:32,draw(Ie){let Ae=(U,ye)=>{Ie.strokeStyle=ye,Ie.lineWidth=U,Ie.lineJoin=Ie.lineCap="round",Ie.beginPath(),B.forEach((oe,Ke)=>Ie[Ke?"lineTo":"moveTo"](oe[0],oe[1])),Ie.stroke()};if(_e){Ae(8,"rgba(74,72,68,1)"),Ae(3,"rgba(98,95,90,.9)");return}Ae(3.4,"rgba(150,144,134,.35)"),Ae(1.6,"rgba(16,14,12,.92)"),Ie.lineWidth=.9,Ie.strokeStyle="rgba(16,14,12,.8)",Me.forEach(([U,ye])=>{Ie.beginPath(),Ie.moveTo(U[0],U[1]),Ie.lineTo(ye[0],ye[1]),Ie.stroke()})}}},P=c([{key:"warn",text:"RADON SYSTEM",sub:"DO NOT TURN OFF",w:384,h:112,size:50,color:"#16130c",bg:"#e3bd2f"},{key:"info",w:384,h:150,draw(D,$,ce){D.fillStyle="#e8e3d6",D.fillRect(0,0,$,ce),D.fillStyle="#1a1c20",D.textAlign="left",D.textBaseline="middle",D.font="700 25px ui-monospace, Menlo, monospace",D.fillText("RADON MITIGATION",14,24),D.font="500 19px ui-monospace, Menlo, monospace",["SUB-SLAB DEPRESSURIZATION","INSTALLED 2026-11","BEFORE: 412 Bq/m\xB3","RETEST: 91-DAY TEST"].forEach((_e,Ue)=>D.fillText(_e,14,56+Ue*24))}},{key:"air",text:"AIRFLOW \u25B2",w:224,h:56,size:30,color:"#16130c",bg:"#e8e3d6"},{key:"fan",text:"RADON FAN",sub:"120 V \xB7 60 Hz \xB7 85 W",w:384,h:104,size:44,color:"#2a2c30"},{key:"jbox",text:"RADON FAN",sub:"DISCONNECT",w:224,h:84,size:34,color:"#16130c",bg:"#e3bd2f"},{key:"sump",text:"SEALED SUMP",sub:"RADON \xB7 KEEP CLOSED",w:320,h:96,size:38,color:"#16130c",bg:"#e8e3d6"},{key:"alpha",w:160,h:160,draw(D,$){D.fillStyle="#e8e3d6",D.beginPath(),D.arc($/2,$/2,$/2-2,0,6.3),D.fill(),D.fillStyle="#1a1c20",D.textAlign="center",D.textBaseline="middle",D.font="700 17px ui-monospace, Menlo, monospace",D.fillText("ALPHA TRACK",$/2,46),D.font="600 14px ui-monospace, Menlo, monospace",D.fillText("LONG-TERM \xB7 91 d",$/2,72),D.font="500 13px ui-monospace, Menlo, monospace",D.fillText("START 11-10",$/2,96),D.fillText("DO NOT OPEN",$/2,116)}},{key:"scale",w:64,h:300,draw(D,$,ce){D.fillStyle="#ebe7dd",D.fillRect(0,0,$,ce),D.fillStyle="#1a1c20",D.strokeStyle="#1a1c20",D.textBaseline="middle",D.textAlign="center";for(let _e=-11;_e<=11;_e++){let Ue=ce/2-_e*11,B=_e%5===0;D.lineWidth=B?2:1,D.beginPath(),D.moveTo(B?10:18,Ue),D.lineTo($-(B?10:18),Ue),D.stroke()}D.font="700 15px ui-monospace, Menlo, monospace",D.fillText("0",$/2,ce/2-9),D.font="600 12px ui-monospace, Menlo, monospace",D.fillText("Pa",$/2,12),D.fillText("250",$/2,ce/2-64),D.fillText("250",$/2,ce/2+64)}},L("ca",512,7,!1),L("cas",512,7,!0),L("cb",384,9,!1),L("cbs",384,9,!0)],{width:1024,emissive:.22}),H=[];{let D=400;for(let $=0;$<46;$++)D=je(D,330+d()*200,.45),H.push(D)}let Y=c([{key:"mon",w:256,h:192,value:412,after:0,draw(D,$,ce,_e){D.fillStyle="#06080c",D.fillRect(0,0,$,ce);let Ue=Math.round(_e.value),B=Ue>=200?"#ff6b4f":Ue>=100?"#f4bd7e":"#8fd3a6";D.textBaseline="middle",D.textAlign="left",D.fillStyle="#8b93a1",D.font="600 15px ui-monospace, Menlo, monospace",D.fillText("RADON",14,18),D.textAlign="right",D.fillText(_e.after>.5?"RETEST":"91-DAY AVG",$-14,18),_e.after>.5&&(D.textAlign="right",D.fillStyle="#8b93a1",D.font="500 15px ui-monospace, Menlo, monospace",D.fillText("was 412",$-14,52)),D.textAlign="left",D.fillStyle=B,D.font="700 64px ui-monospace, Menlo, monospace";let Me=String(Ue);D.fillText(Me,12,66);let ae=D.measureText(Me).width;D.fillStyle="#cfd4da",D.font="500 17px ui-monospace, Menlo, monospace",D.fillText("Bq/m\xB3",20+ae,80);let Ie=178,Ae=64/480,U=14,ye=($-28)/(H.length-1);D.strokeStyle="rgba(139,147,161,.6)",D.lineWidth=1,D.setLineDash([4,4]),D.beginPath(),D.moveTo(U,Ie-200*Ae),D.lineTo($-14,Ie-200*Ae),D.stroke(),D.setLineDash([]),D.fillStyle="#8b93a1",D.font="500 12px ui-monospace, Menlo, monospace",D.fillText("200",U,Ie-200*Ae-9),D.strokeStyle=B,D.lineWidth=2.2,D.beginPath(),H.forEach((oe,Ke)=>{let nt=_e.after*dt(H.length-12,H.length-1,Ke),bt=je(oe,_e.value+(oe-420)*.08,nt);D[Ke?"lineTo":"moveTo"](U+Ke*ye,Ie-bt*Ae)}),D.stroke()}}],{width:256,emissive:.8}),k=(D,$,ce,_e,Ue,B,Me,ae,Ie)=>{let Ae=D.plane($,ce,Ie),U=Ae.geometry.attributes.uv,ye=1,oe=0,Ke=1,nt=0;for(let Zt=0;Zt<U.count;Zt++)ye=Math.min(ye,U.getX(Zt)),oe=Math.max(oe,U.getX(Zt)),Ke=Math.min(Ke,U.getY(Zt)),nt=Math.max(nt,U.getY(Zt));let bt=new tn(ce,Ae.geometry.parameters.height,16,1),At=bt.attributes.position,Bt=bt.attributes.uv;for(let Zt=0;Zt<At.count;Zt++){let Un=ae+At.getX(Zt)/_e;At.setXYZ(Zt,Ue+_e*Math.sin(Un),B+At.getY(Zt),Me+_e*Math.cos(Un)),Bt.setXY(Zt,je(ye,oe,Bt.getX(Zt)),je(Ke,nt,Bt.getY(Zt)))}return bt.computeVertexNormals(),Ae.geometry.dispose(),Ae.geometry=bt,Ae},V=(D,$,ce,_e,Ue=.0015)=>{let B=ce[0]-$[0],Me=ce[1]-$[1],ae=Math.hypot(B,Me);return P.plane(D,ae,_e,($[0]+ce[0])/2,ji+Ue,($[1]+ce[1])/2,{rot:[-Math.PI/2,0,Math.atan2(-Me,B)]})},z=(D,$,ce,_e,Ue,B,Me,ae,Ie={})=>{let Ae=(D+$)/2,U=(ce+_e)/2,ye=(Ue+B)/2;return s($-D,_e-ce,B-Ue,Me,Ae,U,ye,ae,{uv:{ox:Ae,oy:U,oz:ye},...Ie})},G=un-.5;z(-5,5,an,ji,-4,un,v,f),z(-5,5,an,ji,ei,4,v,f),z(-5,Cn,an,ji,un,ei,v,f),z(Pn,5,an,ji,un,ei,v,f),[[-5,Cn,-4,un],[Pn,5,-4,un],[Cn,Pn,-4,G],[-5,5,ei,4],[-5,Cn,un,ei],[Pn,5,un,ei]].forEach(([D,$,ce,_e])=>z(D,$,mi,an,ce,_e,y,f,{cast:!1})),[[-5.6,Cn,-4.6,un],[Pn,5.6,-4.6,un],[Cn,Pn,-4.6,G],[-5.6,5.6,ei,4.6],[-5.6,Cn,un,ei],[Pn,5.6,un,ei]].forEach(([D,$,ce,_e])=>z(D,$,wo,mi,ce,_e,w,f,{cast:!1})),z(Cn,Pn,wo,Vh,un,ei,w,f,{cast:!1}),z(Cn,Pn,an-.004,an,un,un+.002,A,f,{cast:!1}),z(Cn-.002,Cn,an-.004,an,un,ei,A,f,{cast:!1}),z(Pn,Pn+.002,an-.004,an,un,ei,A,f,{cast:!1});{let D=t>=1?260:120,$=new tr(1,0),ce=new Si($,i.std(16777215,1,0),D),_e=new gt,Ue=new mn,B=new Mi,Me=new N,ae=new N,Ie=new Qe,Ae=0;for(;Ae<D;){let U=d(),ye=mi+.012+d()*(an-mi-.024),oe=.007+d()*.013,Ke=d();if(Ke<.6){let bt=je(Cn+.02,Pn-.02,U);if(Math.abs(bt-wt)<ks+.03)continue;ae.set(bt,ye,un+oe*.25)}else Ke<.8?ae.set(Cn+oe*.25,ye,je(un+.02,ei-.02,U)):ae.set(Pn-oe*.25,ye,je(un+.02,ei-.02,U));Me.set(oe,oe*(.6+d()*.4),oe*(.7+d()*.3)),Ue.setFromEuler(B.set(d()*6,d()*6,d()*6)),ce.setMatrixAt(Ae,_e.compose(ae,Ue,Me));let nt=.07+d()*.07;ce.setColorAt(Ae,Ie.setRGB(nt,nt*.97,nt*.9)),Ae++}ce.castShadow=!1,ce.receiveShadow=!0,f.add(ce)}z(Cn,Pn,mi,an,G,un,y,p,{cast:!1}),z(Cn,Pn,wo,mi,G,un,w,p,{cast:!1});{let D=Math.asin((an-mi)/ks),$=Math.cos(D)*ks,ce=(oe,Ke)=>{let nt=new Oi(oe,{depth:un-G,bevelEnabled:!1,curveSegments:20});nt.translate(0,0,G);let bt=new Fe(nt,Ke);return bt.receiveShadow=!0,u.add(bt),bt},_e=new ui;_e.moveTo(Cn,an),_e.lineTo(wt-ks,an),_e.absarc(wt,an,ks,Math.PI,Math.PI+D,!1),_e.lineTo(Cn,mi),_e.closePath();let Ue=new ui;Ue.moveTo(Pn,an),Ue.lineTo(Pn,mi),Ue.lineTo(wt+$,mi),Ue.absarc(wt,an,ks,-D,0,!1),Ue.closePath();let B=new ui;B.moveTo(Cn,mi),B.lineTo(wt-$,mi),B.absarc(wt,an,ks,Math.PI+D,2*Math.PI-D,!1),B.lineTo(Pn,mi),B.lineTo(Pn,wo),B.lineTo(Cn,wo),B.closePath(),ce(_e,y),ce(Ue,y),ce(B,w);let Me=new Zn(ks,24,10,Math.PI,Math.PI,Math.PI/2,Math.PI/2);Me.translate(wt,an,zt);let ae=Me.attributes.position,Ie=Me.attributes.uv;for(let oe=0;oe<ae.count;oe++)Ie.setXY(oe,ae.getX(oe)+ae.getZ(oe)*.7,ae.getY(oe));let Ae=Me.index.array;for(let oe=0;oe<Ae.length;oe+=3){let Ke=Ae[oe+1];Ae[oe+1]=Ae[oe+2],Ae[oe+2]=Ke}let U=Me.attributes.normal;for(let oe=0;oe<U.count;oe++)U.setXYZ(oe,-U.getX(oe),-U.getY(oe),-U.getZ(oe));let ye=new Fe(Me,y);ye.receiveShadow=!0,u.add(ye)}V("ca",Ao[0],Ao[1],f),V("cb",Ro[0],Ro[1],f),V("cas",Ao[0],Ao[1],u,.003),V("cbs",Ro[0],Ro[1],u,.003),z(-4.9,4.9,ji-.002,ji+.0012,gi,gi+.012,S,f,{cast:!1,receive:!1}),s(9.8,.012,.016,x,0,ji+.004,gi+.008,u,{r:.005,cast:!1});let q=ji+.05,fe=o.whitePlastic;r(.024,-.12-q,fe,bn,(q-.12)/2,Mn,f),r(.034,.1,o.rubber,bn,-2.3,Mn,f,{seg:16}),[-2.34,-2.26].forEach(D=>r(.036,.012,o.galv,bn,D,Mn,f,{seg:16,cast:!1})),a([[bn,-.2,Mn],[bn,-.13,Mn+.02],[bn,-.12,Mn+.1]],.024,fe,f,{radial:12,seg:10}),r(.024,4-Mn-.1,fe,bn,-.12,(Mn+.1+3.99)/2,f,{axis:"z"}),a([[bn+.06,q+.03,Mn+.05],[bn+.05,-2.4,Mn+.03],[bn+.03,-1.6,Mn+.03],[bn+.03,-.26,Mn+.03]],.004,o.rubber,f,{radial:5,cast:!1}),r(.345,.022,o.blackPlastic,bn+.012,q+.011,Mn-.016,p,{seg:40}).rotation.set(.015,0,-.012),r(.055,.003,S,bn,q+.024,Mn,p,{seg:20,cast:!1}),s(.035,.004,.05,S,bn+.06,q+.023,Mn+.06,p,{cast:!1});{r(.35,.02,o.blackPlastic,bn,q+.01,Mn,u,{seg:40});let D=new Fe(new bi(.346,.006,6,48),x);D.rotation.x=Math.PI/2,i.place(D,bn,q+.004,Mn,u,{cast:!1});for(let $=0;$<10;$++){let ce=$/10*Math.PI*2;r(.009,.008,o.galv,bn+Math.cos(ce)*.318,q+.024,Mn+Math.sin(ce)*.318,u,{seg:8,cast:!1})}r(.036,.016,o.rubber,bn,q+.026,Mn,u,{seg:16,cast:!1}),r(.011,.012,o.rubber,bn+.06,q+.025,Mn+.05,u,{seg:10,cast:!1}),P.plane("sump",.16,u,bn-.1,q+.0215,Mn+.15,{rot:[-Math.PI/2,0,.35]})}s(.9,.022,.2,o.plywood,xn.x,xn.y-.011,xn.z,f,{uv:{ox:1,oz:1}}),[-.33,.33].forEach(D=>{let $=xn.x+D;s(.022,.15,.004,F,$,xn.y-.097,gi+.002,f,{cast:!1}),s(.022,.004,.17,F,$,xn.y-.024,gi+.087,f,{cast:!1});let ce=s(.016,.004,.2,F,$,xn.y-.085,gi+.077,f,{cast:!1});ce.rotation.x=-.71,[-.05,-.13].forEach(_e=>r(.006,.006,o.galv,$,xn.y+_e,gi+.006,f,{axis:"z",seg:8,cast:!1}))}),r(.034,.016,o.greyPlastic,xn.x-.24,xn.y+.008,xn.z+.01,f,{seg:28}),r(.03,.004,o.blackPlastic,xn.x-.24,xn.y+.018,xn.z+.01,f,{seg:28,cast:!1}),P.plane("alpha",.056,f,xn.x-.24,xn.y+.0205,xn.z+.01,{rot:[-Math.PI/2,0,.2]});{let D=new ft;D.position.set(es.x,xn.y,es.z),D.rotation.y=-.22,f.add(D),s(.105,.155,.04,o.whitePlastic,0,.0775,0,D,{r:.012}),s(.092,.074,.003,o.blackPlastic,0,.105,.02,D,{cast:!1}),Y.plane("mon",.086,D,0,.105,.0218);for(let $=0;$<5;$++)s(.05,.003,.002,o.greyPlastic,0,.022+$*.008,.0202,D,{cast:!1})}let be=Math.sin(cr),Ce=Math.cos(cr);r(cn,ri-.24-(an-.08),b,wt,(ri-.24+an-.08)/2,zt,u,{seg:28}),r(cn,ra-ri-.22,b,wt,(ra+ri+.22)/2,zt,u,{seg:28}),r(cn+.014,.012,x,wt,ji+.005,zt,u,{seg:28,cast:!1}),[-1.95,-.62,2,5].forEach(D=>r(cn+.006,.07,b,wt,D,zt,u,{seg:28})),s(.91,.14,.038,o.plywood,-1.5,-.18,zt-cn-.022,u,{uv:!0});{let D=new Fe(new bi(cn+.003,.0022,4,24,Math.PI),o.galv);D.rotation.set(-Math.PI/2,0,0),i.place(D,wt,-.16,zt,u,{cast:!1}),[-1,1].forEach($=>{s(.028,.03,.002,o.galv,wt+$*(cn+.016),-.16,zt-cn-.002,u,{cast:!1}),r(.005,.004,o.galv,wt+$*(cn+.02),-.16,zt-cn+.001,u,{axis:"z",seg:8,cast:!1})})}k(P,"warn",.11,cn+.0012,wt,-1.18,zt,cr,u),k(P,"info",.1,cn+.0012,wt,-2.18,zt,cr,u),k(P,"air",.07,cn+.0012,wt,-.88,zt,cr,u);let ze=[];{let D=new ft;D.position.set(wt+be*(cn+.014),-1.58,zt+Ce*(cn+.014)),D.rotation.y=cr,u.add(D),s(.064,.2,.006,o.whitePlastic,0,0,0,D,{r:.003}),P.plane("scale",.026,D,0,-.005,.0034),[.075,-.075].forEach(_e=>s(.03,.014,.014,o.whitePlastic,0,_e,-.009,D,{cast:!1}));let $=o.glassClear;[-.019,.019].forEach(_e=>r(.0042,.16,$,_e,0,.009,D,{seg:10,cast:!1}));let ce=[[-.019,-.08,.009],[-.019,-.088,.009],[-.012,-.096,.009],[0,-.098,.009],[.012,-.096,.009],[.019,-.088,.009],[.019,-.08,.009]];a(ce,.0042,$,D,{radial:8,seg:16,cast:!1}),a(ce,.003,C,D,{radial:6,seg:16,cast:!1}),[-.019,.019].forEach(_e=>{let Ue=new $t(.003,.003,1,8);Ue.translate(0,.5,0);let B=new Fe(Ue,C);B.position.set(_e,-.08,.009),B.userData.keep=!0,B.castShadow=!1,D.add(B),ze.push(B)}),r(.0055,.008,o.blackPlastic,.019,.083,.009,D,{seg:10,cast:!1}),a([[-.019,.08,.009],[-.019,.1,.01],[-.024,.118,0],[-.022,.124,-.014]],.003,o.glassClear,D,{radial:6,seg:12,cast:!1}),r(.007,.008,o.rubber,-.022,.124,-.016,D,{axis:"z",seg:10,cast:!1}),[.075,-.075].forEach(_e=>{let Ue=new Fe(new bi(cn+.0015,.0018,4,32),o.blackPlastic);Ue.rotation.x=Math.PI/2,i.place(Ue,wt,-1.58+_e,zt,u,{cast:!1})})}{let D=o.whitePlastic,$=o.greyPlastic,ce=U=>{r(cn+.011,.1,o.rubber,wt,U,zt,u,{seg:28}),[U-.03,U+.03].forEach((ye,oe)=>{r(cn+.0125,.012,o.galv,wt,ye,zt,u,{seg:28,cast:!1});let Ke=cr-1.1+oe*.5;s(.016,.012,.012,o.galv,wt+Math.sin(Ke)*(cn+.018),ye,zt+Math.cos(Ke)*(cn+.018),u,{rot:[0,Ke,0],cast:!1})})};ce(ri-.27),ce(ri+.27),r(cn+.002,.06,$,wt,ri-.2,zt,u,{seg:28}),r(cn+.002,.06,$,wt,ri+.2,zt,u,{seg:28}),r(.07,.06,D,wt,ri-.11,zt,u,{seg:36,r2:.135}),r(.135,.06,D,wt,ri+.11,zt,u,{seg:36,r2:.07}),r(.135,.16,D,wt,ri,zt,u,{seg:36}),r(.1375,.012,$,wt,ri+.02,zt,u,{seg:36,cast:!1}),k(P,"fan",.16,.1365,wt,ri-.03,zt,-.9,u);let _e=Math.atan(.72),Ue=U=>L0(U)-.2466;[-3,-2.4,-1.8,-1.2,-.6,0].forEach(U=>s(4.84/Math.cos(_e),.14,.038,o.plywood,-2.48,Ue(-2.48)-.07/Math.cos(_e),U,u,{rot:[0,0,_e],uv:!0})),s(.038,.18,4.2,o.plywood,0,Ue(0)-.09,-1.5,u,{uv:!0});let B={x:wt-.35,z:-1.8},Me=Ue(B.x)-.14/Math.cos(_e);s(.089,Me-6.37,.038,o.plywood,B.x,(Me+6.37)/2,B.z,u,{uv:!0}),s(.11,.11,.055,o.greyPlastic,B.x,7.75,B.z+.047,u,{r:.006}),s(.018,.03,.014,o.blackPlastic,B.x,7.77,B.z+.081,u,{cast:!1}),P.plane("jbox",.075,u,B.x,7.72,B.z+.0752);let ae=[wt+Math.sin(Math.PI+.25)*.135,ri-.04,zt+Math.cos(Math.PI+.25)*.135];r(.008,.016,o.blackPlastic,ae[0],ae[1],ae[2]-.006,u,{axis:"z",seg:10,cast:!1}),a([[ae[0],ae[1],ae[2]-.012],[ae[0]+.02,ae[1]-.12,ae[2]-.1],[B.x+.02,7.62,B.z+.12],[B.x,7.69,B.z+.06]],.0045,o.blackPlastic,u,{radial:6,cast:!1}),a([[B.x+.03,7.69,B.z+.05],[B.x+.05,7.4,B.z+.03],[B.x+.055,6.6,B.z+.025],[B.x+.2,6.42,B.z+.1]],.006,o.rubber,u,{radial:6,cast:!1}),[-1,1].forEach(U=>{s(.34,.03,.006,o.galv,wt,6.44,zt+U*(cn+.004),u,{cast:!1}),[-.15,.15].forEach(ye=>r(.006,.03,o.galv,wt+ye,6.44,zt,u,{axis:"z",seg:8,cast:!1}))});let Ie=L0(wt),Ae=Math.atan(.72);s(.42,.006,.42,o.galv,wt,Ie+.003/Math.cos(Ae),zt,u,{rot:[0,0,Ae],cast:!1}),r(.13,.15,o.rubber,wt,Ie+.09,zt,u,{seg:28,r2:cn+.008}),r(cn+.012,.02,o.galv,wt,Ie+.2,zt,u,{seg:28,cast:!1}),r(cn+.004,.02,o.galv,wt,ra-.005,zt,u,{seg:28,cast:!1}),r(cn-.004,.002,S,wt,ra-.004,zt,u,{seg:24,cast:!1})}let et=new Set([b,o.plywood,o.whitePlastic,o.blackPlastic,o.rubber,v]);[f,p,u].forEach(D=>D.traverse($=>{$.isMesh&&!$.isInstancedMesh&&($.castShadow=et.has($.material)&&$.renderOrder===0,$.receiveShadow=!0)})),i.bake(f),i.bake(p),i.bake(u);let Q=14257407,ue=i.particles(300,{color:Q,size:.065,gain:2.2}),we=ue.userData.n,me=ue.userData.pos,Pe=new Float32Array(we*4),Z=new Float32Array(we*3),Be=(D,$)=>{me[D*3]=je(Cn+.03,Pn-.03,d()),me[D*3+1]=$?je(Vh,an-.03,d()):Vh+d()*.08,me[D*3+2]=je(un+.02,ei-.05,d()),Pe[D*4]=.05+d()*.08,Pe[D*4+1]=d()*6.28;let ce=d(),_e=(d()-.5)*.6;ce<.4?(Pe[D*4+2]=_e,Pe[D*4+3]=-1):ce<.6?(Pe[D*4+2]=-1,Pe[D*4+3]=_e):ce<.75?(Pe[D*4+2]=1,Pe[D*4+3]=_e):(Pe[D*4+2]=_e,Pe[D*4+3]=1)};for(let D=0;D<we;D++){Be(D,!0);let $=d();Z[D*3]=je(me[D*3],aa.x,$),Z[D*3+1]=je(me[D*3+1],aa.y,$*$),Z[D*3+2]=je(me[D*3+2],aa.z,$)}let ne=me.slice(),re=i.particles(170,{color:Q,size:.055,gain:1.8}),J=re.userData.n,ie=re.userData.pos,le=new Float32Array(J*4),Oe=(D,$,ce,_e)=>{ce[_e*3]=je(D[0][0],D[1][0],$),ce[_e*3+2]=je(D[0][1],D[1][1],$)},Ne=(D,$)=>{let ce=d();if(ce<.3)Oe(Ao,d(),ie,D);else if(ce<.48)Oe(Ro,d(),ie,D);else if(ce<.8)ie[D*3]=je(U0[0],U0[1],d()),ie[D*3+2]=gi+.012;else{let _e=d()*6.283,Ue=d()<.4?.06:.35;ie[D*3]=bn+Math.cos(_e)*Ue,ie[D*3+2]=Mn+Math.sin(_e)*Ue}if(ie[D*3+1]=ji+.01,le[D*4]=.03+d()*.11,le[D*4+1]=d()*6.28,le[D*4+2]=4+d()*10,le[D*4+3]=0,$){let _e=d()*le[D*4+2];le[D*4+3]=_e,ie[D*3+1]+=le[D*4]*_e*.85}};for(let D=0;D<J;D++)Ne(D,!0);let qe=i.particles(80,{color:Q,size:.08,gain:1.2}),Je=qe.userData.n,X=qe.userData.pos,at=new Float32Array(Je*4),lt=(D,$)=>{if(X[D*3]=wt+(d()-.5)*.05,X[D*3+1]=ra,X[D*3+2]=zt+(d()-.5)*.05,at[D*4]=.45+d()*.35,at[D*4+1]=d()*6.28,at[D*4+2]=2+d()*1.6,at[D*4+3]=0,$){let ce=d()*at[D*4+2];at[D*4+3]=ce,O(D,ce,0)}},O=(D,$,ce)=>{let _e=at[D*4+3]/at[D*4+2],Ue=at[D*4+1];X[D*3+1]+=at[D*4]*(1-.6*_e)*$,X[D*3]+=(-.22*_e+Math.sin(Ue)*.12*_e)*$,X[D*3+2]+=(.08*_e+Math.cos(Ue+ce*.3)*.12*_e)*$};for(let D=0;D<Je;D++)lt(D,!0);h.add(ue,re,qe);let M={soil:l(-.45,-3.42,un+.02),test:l(es.x,xn.y+.1,es.z+.03),pit:l(wt,an-.12,zt+.04),fan:l(wt-.08,ri,zt+.11),stack:l(wt,ra-.15,zt),after:l(es.x,xn.y+.1,es.z+.03)},K={time:19.4,cut:0,ghost:0,ground:1,orbit:.012},te=[{...K,radius:15,theta:.6,phi:1.36,fx:-.6,ty:-1.5,fz:-.8,cut:1,ground:0,dof:0,orbit:.025},{...K,radius:1.6,theta:.2,phi:1.36,fx:es.x-.05,ty:xn.y+.07,fz:gi+.1,dof:1.1,narrow:{fx:es.x-.12}},{...K,radius:2.9,theta:.38,phi:1.2,fx:wt+.25,ty:-3,fz:zt,dof:1,narrow:{fx:wt+.05}},{...K,radius:2.6,theta:.5,phi:1.5,fx:wt,ty:8.05,fz:zt,dof:.9,orbit:.012,narrow:{ty:7.85}},{...K,radius:.78,theta:-.12,phi:1.47,fx:es.x,ty:xn.y+.1,fz:es.z+.02,dof:1.3}],he=0,Ve=0,Ge=412,Se=412,ve=0,$e=0,ct=-1;return{name:"radon",group:h,anchors:M,shots:te,hides(D){let $=[...D.sys.radon?D.sys.radon.meshes:[]];return D.sys.foundation&&D.sys.foundation.meshes.forEach(ce=>{Math.abs(ce.position.y+2.88)<.01&&$.push(ce)}),D.layers.basement.traverse(ce=>{ce.isMesh&&Math.abs(ce.position.x-bn)<.01&&Math.abs(ce.position.z-Mn)<.01&&$.push(ce)}),$},light(D){return D===0?{pos:[.6,-.6,.9],at:[-.9,-3.1,-1.1],power:.75,fill:.6}:D===1?{pos:[-.3,-.9,-2.4],at:[xn.x+.1,xn.y,gi],power:.4,fill:.5}:D===2?{pos:[.2,-1.6,.4],at:[wt+.1,an-.2,zt],power:.4}:D===3?{pos:[.3,8.85,.3],at:[wt,ri,zt],power:.75,fill:.35}:D===4?{pos:[.2,-1.05,-2.9],at:[es.x,xn.y+.08,gi],power:.35,fill:.4}:{pos:[-2.3,-.9,.3],at:[-1,-1.7,-2.4],power:.5}},update({step:D,t:$,dt:ce,snap:_e}){let Ue=D>=2?1:0,B=U=>_e?1:1-Math.exp(-ce*U);he=je(he,Ue,B(1.6)),Ve=je(Ve,Ue,B(1.2)),p.visible=!Ue,u.visible=!!Ue;let Me=.022*Ve;ze[0].scale.y=.08+Me,ze[1].scale.y=.08-Me,Ge=D===4?je(Ge,45,B(1.3)):je(Ge,412,B(6)),$e=je($e,D===4?1:0,B(1.3));let ae=Math.round(Ge),Ie=Math.round($e*20)/20;if((ae!==Se||Ie!==ve)&&(Se=ae,ve=Ie,Y.set("mon",void 0,void 0,{value:ae,after:Ie})),re.material.opacity=1-he,re.visible=he<.98,qe.material.opacity=dt(.3,1,Ve),qe.visible=Ve>.3,n){let U=he>.5?1:0;U!==ct&&(ct=U,me.set(U?Z:ne),ue.geometry.attributes.position.needsUpdate=!0);return}let Ae=Math.min(ce,.05);for(let U=0;U<we;U++){let ye=me[U*3],oe=me[U*3+1],Ke=me[U*3+2],nt=Pe[U*4],bt=Pe[U*4+1],At=Math.sin($*.9+bt)*.02,Bt=nt,Zt=Math.cos($*.7+bt)*.02,Un=dt(mi-.03,an-.03,oe);At+=Pe[U*4+2]*.14*Un,Zt+=Pe[U*4+3]*.14*Un,Bt*=1-Un;let Vn=aa.x-ye,R=aa.y-oe,de=aa.z-Ke,Re=Math.hypot(Vn,R,de)+1e-4,We=(.12+nt)*(.7+.35/(Re+.2)),Xe=Vn/Re*We+Math.sin($*1.3+bt)*.015,xt=R/Re*We,it=de/Re*We;me[U*3]=ye+je(At,Xe,he)*Ae,me[U*3+1]=Math.min(oe+je(Bt,xt,he)*Ae,an-.015),me[U*3+2]=Ke+je(Zt,it,he)*Ae,(me[U*3]<Cn-.03||me[U*3]>Pn+.03||me[U*3+2]<un-.04||me[U*3+2]>ei+.03||he>.5&&Re<.06)&&Be(U,!1)}if(ue.geometry.attributes.position.needsUpdate=!0,re.visible){for(let U=0;U<J;U++){let ye=le[U*4+1];if(le[U*4+3]+=Ae,le[U*4+3]>le[U*4+2]){Ne(U,!1);continue}ie[U*3+1]+=le[U*4]*Ae*(1-.3*le[U*4+3]/le[U*4+2]),ie[U*3]+=Math.sin($*.5+ye)*.035*Ae,ie[U*3+2]+=Math.cos($*.4+ye*1.3)*.035*Ae}re.geometry.attributes.position.needsUpdate=!0}if(qe.visible){for(let U=0;U<Je;U++)at[U*4+3]+=Ae,at[U*4+3]>at[U*4+2]?lt(U,!1):O(U,Ae,$);qe.geometry.attributes.position.needsUpdate=!0}}}}var Gt=-3.3,en=-2.6,Ct=-2.8,Wh=-2.51,Ai=-1.39,ai=en+.37,Ri=-4.9,Xi=-.26,Tn=-2.75,Ci=-.6,jv=[0,1,12,18,22,25],e_=["INSTALL","MAINTAIN","UPGRADE","REPLACE","REMOVE","DEMOLISH"],t_=[[0,"INSTALLED \xB7 PERMIT"],[1,"FILTER \xB7 TUNE-UP"],[3,"FILTER \xB7 TUNE-UP"],[5,"DUCTS CLEANED"],[8,"IGNITER"],[11,"FILTER \xB7 TUNE-UP"],[12,"HEAT PUMP COIL"],[15,"TUNE-UP"],[18,"FILTER \xB7 TUNE-UP"],[20,"BLOWER MOTOR"],[24,"TUNE-UP"]],$c=12;function F0({kit:i,tier:e}){let{box:t,cyl:n,tube:s,mats:r,atlas:a,V:o,std:c}=i,l=new ft,h=new ft;l.add(h);let f=c(9736070,.42,.3,{envMapIntensity:.8}),p=c(6717583,.42,.3,{envMapIntensity:.8}),u=c(10920599,.93,0),d=c(12886642,.82,0),_=c(9400648,.95,0),g=c(13884388,.88,0),m=c(5330782,.5,.45,{envMapIntensity:.8}),E=c(9316898,.45,.5),T=c(2897971,.6,.05),v=c(13210519,1,0),y=c(1313284,.4,0,{emissive:16747066,emissiveIntensity:1.4}),w=r.led(9425830,2),A=r.castIron,x=r.galv,b=r.pvc,C=r.copper,F=r.yellowPlastic,S="ui-monospace, Menlo, Consolas, monospace",L=R=>(de,Re,We)=>{de.fillStyle=R?"#5f574b":"#a9a08a",de.fillRect(0,0,Re,We);for(let Xe=0;Xe<Re;Xe+=8)de.fillStyle=R?"rgba(30,26,20,.55)":"rgba(120,110,90,.45)",de.fillRect(Xe,0,3,We);if(R)for(let Xe=0;Xe<90;Xe++)de.fillStyle=`rgba(40,34,26,${.15+Xe%5*.06})`,de.fillRect(Xe*37%Re,Xe*53%We,6+Xe%4*3,4+Xe%3*3);de.fillStyle=R?"#6e5a3c":"#9a7a4c",de.fillRect(0,0,Re,6),de.fillRect(0,We-6,Re,6),de.fillRect(0,0,6,We),de.fillRect(Re-6,0,6,We)},P=[{key:"afue",text:"96% AFUE",sub:"60 000 BTU/h \xB7 NAT GAS",w:256,h:72,size:32,color:"#1b1d21",bg:"#c9c3b2"},{key:"permit",w:128,h:220,draw(R,de,Re){R.fillStyle="#e08a2c",R.beginPath(),R.moveTo(0,22),R.lineTo(22,0),R.lineTo(de-22,0),R.lineTo(de,22),R.lineTo(de,Re),R.lineTo(0,Re),R.fill(),R.fillStyle="#14161a",R.beginPath(),R.arc(de/2,20,8,0,6.3),R.fill(),R.textAlign="center",R.textBaseline="middle",R.fillStyle="#1a1308",R.font=`700 22px ${S}`,R.fillText("GAS",de/2,58),R.fillText("PERMIT",de/2,84),R.font=`500 15px ${S}`,R.fillText("INSPECTED",de/2,122),R.fillText("YEAR 0",de/2,144),R.strokeStyle="#1a1308",R.lineWidth=2,R.strokeRect(14,166,de-28,36),R.font=`700 18px ${S}`,R.fillText("PASS",de/2,185)}},{key:"crate",text:"UPFLOW FURNACE",sub:"THIS SIDE UP \xB7 52 kg",w:320,h:72,size:30,color:"#2a1d0e"},{key:"svc",w:256,h:384,year:0,draw(R,de,Re,We){R.fillStyle="#d8d1bd",R.fillRect(0,0,de,Re),R.fillStyle="#24262b",R.fillRect(0,0,de,44),R.fillStyle="#e9e3d3",R.textAlign="left",R.textBaseline="middle",R.font=`700 20px ${S}`,R.fillText("SERVICE RECORD",12,23),R.font=`500 15px ${S}`,t_.forEach(([Xe,xt],it)=>{let pt=66+it*28;R.strokeStyle="rgba(20,22,26,.3)",R.beginPath(),R.moveTo(10,pt+13),R.lineTo(de-10,pt+13),R.stroke(),!(Xe>We.year)&&(R.fillStyle="#2b3a66",R.fillText(("YR "+Xe).padEnd(6)+xt,12,pt))})}},{key:"cal",w:200,h:248,year:0,verb:"INSTALL",draw(R,de,Re,We){R.fillStyle="#cdc6b3",R.fillRect(0,0,de,Re),R.fillStyle="#a8322a",R.fillRect(0,0,de,54),R.fillStyle="#1a1c20",[40,100,160].forEach(Xe=>{R.beginPath(),R.arc(Xe,8,6,0,6.3),R.fill()}),R.textAlign="center",R.textBaseline="middle",R.fillStyle="#f1e6d6",R.font=`700 24px ${S}`,R.fillText("YEAR",de/2,33),R.fillStyle="#16181c",R.font=`700 112px ${S}`,R.fillText(String(We.year),de/2,140),R.fillStyle="#5a3a1c",R.font=`700 22px ${S}`,R.fillText(We.verb,de/2,222)}},{key:"tstat",w:192,h:192,draw(R,de,Re){R.fillStyle="#05070b",R.beginPath(),R.arc(de/2,Re/2,de/2-2,0,6.3),R.fill(),R.strokeStyle="#8fd3a6",R.lineWidth=6,R.beginPath(),R.arc(de/2,Re/2,de/2-14,2.3,2.3+3.4),R.stroke(),R.textAlign="center",R.textBaseline="middle",R.fillStyle="#eef2f0",R.font=`600 58px ${S}`,R.fillText("21\xB0",de/2+4,Re/2-6),R.fillStyle="#8fd3a6",R.font=`600 15px ${S}`,R.fillText("HEAT PUMP",de/2,Re/2+36),R.fillStyle="#8b93a1",R.font=`500 13px ${S}`,R.fillText("OUT \u221218\xB0",de/2,Re/2+58)}},{key:"coil",text:"HEAT PUMP COIL",sub:"CASED \xB7 3 TON",w:256,h:64,size:26,color:"#e3ddd0"},{key:"odu",text:"COLD CLIMATE",sub:"HEATS TO \u221230 \xB0C",w:256,h:64,size:26,color:"#e3ddd0"},{key:"tank",text:"189 L",sub:"GAS \xB7 40 000 BTU/h",w:192,h:96,size:42,color:"#e9e6de"},{key:"tkl",w:128,h:72,draw(R,de,Re){R.fillStyle="#05070b",R.fillRect(0,0,de,Re),R.textAlign="center",R.textBaseline="middle",R.fillStyle="#7fc4ff",R.font=`700 34px ${S}`,R.fillText("49\xB0C",de/2,Re/2-6),R.fillStyle="#8fd3a6",R.font=`500 12px ${S}`,R.fillText("ON DEMAND",de/2,Re-12)}},{key:"capped",w:112,h:176,draw(R,de,Re){R.fillStyle="#c23a2b",R.fillRect(0,14,de,Re-14),R.beginPath(),R.moveTo(0,14),R.lineTo(de/2,0),R.lineTo(de,14),R.fill(),R.fillStyle="#14161a",R.beginPath(),R.arc(de/2,20,7,0,6.3),R.fill(),R.textAlign="center",R.textBaseline="middle",R.fillStyle="#f6eee4",R.font=`700 21px ${S}`,R.fillText("CAPPED",de/2,64),R.font=`500 13px ${S}`,R.fillText("GAS OFF",de/2,98),R.fillText("DO NOT",de/2,124),R.fillText("OPEN",de/2,142)}},{key:"suite",w:256,h:320,draw(R,de,Re){R.fillStyle="#c9c4b4",R.fillRect(0,0,de,Re),R.fillStyle="#1a1c20",R.textAlign="left",R.textBaseline="middle",R.font=`700 21px ${S}`,R.fillText("SECONDARY SUITE",12,24),R.font=`500 14px ${S}`,R.fillText("BUILDING PERMIT \xB7 YR 25",12,48),R.strokeStyle="#2b3a66",R.lineWidth=3,R.strokeRect(20,70,de-40,170),R.beginPath(),R.moveTo(20,150),R.lineTo(130,150),R.moveTo(130,70),R.lineTo(130,240),R.stroke(),R.lineWidth=1.5,R.beginPath(),R.arc(130,196,34,Math.PI,Math.PI*1.5),R.stroke(),R.fillStyle="#2b3a66",R.font=`600 13px ${S}`,R.fillText("MECH",40,110),R.fillText("BEDROOM",148,110),R.fillText("BATH",40,196),R.fillText("LIVING",148,196),R.fillStyle="#1a1c20",R.font=`500 13px ${S}`,R.fillText("MECH ROOM: TYPE X",12,268),R.fillText("BOTH SIDES \xB7 30 MIN",12,290)}},{key:"disc",text:"HEAT PUMP",w:128,h:32,size:18,color:"#e3ddd0"},{key:"bin",text:"DRYWALL ONLY",w:192,h:40,size:22,color:"#e3ddd0"},{key:"rust",w:384,h:96,draw(R,de,Re){let We=11,Xe=()=>(We=We*16807%2147483647)/2147483647;R.clearRect(0,0,de,Re);for(let xt=0;xt<de;xt+=2){let it=Re*(.35+.5*Xe()*Xe())*(.6+.4*Math.sin(xt*.05)**2),pt=R.createLinearGradient(0,Re,0,Re-it);pt.addColorStop(0,"rgba(96,40,14,0.95)"),pt.addColorStop(.5,"rgba(122,56,20,0.75)"),pt.addColorStop(1,"rgba(140,70,30,0)"),R.fillStyle=pt,R.fillRect(xt,Re-it,2+Xe()*2,it)}}},{key:"pleatOld",w:96,h:128,draw:L(!0)},{key:"pleatNew",w:96,h:128,draw:L(!1)}],H=a(P,{width:1024,emissive:.22}),Y=o(0,1,0),k=o(0,0,0),V=R=>{let de=new Map;return R.traverse(Re=>{Re.isMesh&&de.set(Re.material,de.get(Re.material)||!1||Re.castShadow)}),R.traverse(Re=>{Re.isMesh&&!Re.userData.keep&&(Re.castShadow=de.get(Re.material),Re.receiveShadow=!0)}),i.bake(R)},z=(R,de,Re,We,Xe={})=>{let xt=R.map(Ut=>o(Ut[0],Ut[1],Ut[2])),it=Xe.fit??1.35,pt=Xe.seg||10,ht=Xe.cast!==!1,Lt=(Ut,In,Pi)=>{let Yi=Ut.distanceTo(In);if(Yi<1e-4)return;let xi=new Fe(new $t(Pi,Pi,Yi,pt),Re);xi.position.copy(Ut).add(In).multiplyScalar(.5),xi.quaternion.setFromUnitVectors(Y,k.subVectors(In,Ut).normalize()),xi.castShadow=ht,xi.receiveShadow=!0,We.add(xi)};for(let Ut=0;Ut<xt.length-1;Ut++)if(Lt(xt[Ut],xt[Ut+1],de),Ut>0&&it){let In=xt[Ut];[xt[Ut-1],xt[Ut+1]].forEach(Pi=>{k.subVectors(Pi,In).normalize(),Lt(In.clone(),In.clone().addScaledVector(k,de*2.2),de*it)})}},G={value:Array.from({length:$c},()=>o(0,0,0))},q={value:Array.from({length:$c},()=>o(0,0,0))},fe=R=>{R.uniforms.uPhP=G,R.uniforms.uPhS=q,R.vertexShader=R.vertexShader.replace("#include <common>",`#include <common>
attribute float aPh; uniform vec3 uPhP[${$c}]; uniform vec3 uPhS[${$c}];`).replace("#include <begin_vertex>",`#include <begin_vertex>
{ int pi = int(aPh + 0.5); transformed = uPhP[pi] + (transformed - uPhP[pi]) * uPhS[pi]; }`)},be=new Xr({depthPacking:th});be.onBeforeCompile=fe,be.customProgramCacheKey=()=>"cyclePhDepth";let Ce=[],ze=(R,de,Re="s")=>{let We=new ft;We.name=R,l.add(We);let Xe={g:We,i:Ce.length,pivot:de.clone(),mode:Re,k:0};return G.value[Xe.i].copy(de),Ce.push(Xe),Xe},et=()=>{l.updateWorldMatrix(!0,!0);let R=new gt().copy(l.matrixWorld).invert(),de=new gt,Re=new Map;Ce.forEach(We=>We.g.traverse(Xe=>{if(!Xe.isMesh)return;let xt=Xe.material.uuid+"|"+Xe.renderOrder,it=Re.get(xt);it||Re.set(xt,it={mat:Xe.material,cast:!1,ro:Xe.renderOrder,geos:[]}),it.cast=it.cast||Xe.castShadow;let pt=Xe.geometry.index?Xe.geometry.toNonIndexed():Xe.geometry.clone();Object.keys(pt.attributes).forEach(ht=>{ht!=="position"&&ht!=="normal"&&ht!=="uv"&&pt.deleteAttribute(ht)}),pt.attributes.uv||pt.setAttribute("uv",new Rt(new Float32Array(pt.attributes.position.count*2),2)),pt.applyMatrix4(de.multiplyMatrices(R,Xe.matrixWorld)),pt.setAttribute("aPh",new Rt(new Float32Array(pt.attributes.position.count).fill(We.i),1)),it.geos.push(pt)})),Ce.forEach(We=>{We.g.traverse(Xe=>{Xe.isMesh&&Xe.geometry.dispose()}),l.remove(We.g)}),Re.forEach(We=>{let Xe=Wi(We.geos);if(We.geos.forEach(pt=>pt.dispose()),!Xe)return;let xt=We.mat.clone();xt.onBeforeCompile=fe,xt.customProgramCacheKey=()=>"cyclePh";let it=new Fe(Xe,xt);it.castShadow=We.cast,it.receiveShadow=!0,it.renderOrder=We.ro,it.frustumCulled=!1,We.cast&&(it.customDepthMaterial=be),it.userData.keep=!0,it.userData.noAO=!0,l.add(it)})},Q=(R,de,Re)=>{R.k=je(R.k,de,Re),Math.abs(R.k-de)<.002&&(R.k=de);let We=R.mode==="pop"?R.k>.5?1:0:dt(0,1,R.k),Xe=q.value[R.i];return R.mode==="y"?Xe.set(1,We,1):R.mode==="xz"?Xe.set(We,1,We):Xe.setScalar(We),We<.001&&Xe.setScalar(0),We};n(.085,.012,x,-2.7,Ct+.004,-1.85,h,{seg:20,cast:!1}),n(.068,.014,A,-2.7,Ct+.005,-1.85,h,{seg:20,cast:!1});for(let R=-2;R<=2;R++)t(.11-Math.abs(R)*.02,.006,.008,x,-2.7,Ct+.012,-1.85+R*.022,h,{cast:!1});let ue=-3.95,we=.9;t(.089,.038,we-ue,d,Ri-.045,Ct+.019,(ue+we)/2,h,{cast:!1}),t(.089,.038,we-ue,d,Ri-.045,Xi-.019,(ue+we)/2,h,{cast:!1});for(let R=ue+.02;R<=we;R+=.406)t(.089,Xi-Ct-.076,.038,d,Ri-.045,(Ct+Xi)/2,Math.min(R,we-.02),h,{cast:!1});for(let R=0;R<6;R++)R===2||R===4||t(.08,Xi-Ct-.09,.36,v,Ri-.05,(Ct+Xi)/2,-1.48+.019+R*.406+.203,h,{cast:!1});let me=(R,de,Re)=>{t(.0127,Xi-Ct-.01,de-R-.003,u,Ri+.0064,(Ct+Xi)/2,(R+de)/2,Re),t(.012,.08,de-R,b,Ri+.019,Ct+.04,(R+de)/2,Re,{cast:!1})};me(ue,-2.7,h),me(-2.7,-1.48,h),t(.68,.05,.88,A,Gt,Ct+.025,en,h),t(.56,.24,.74,x,Gt,(Ct+.05+Wh)/2,en,h),t(.52,.036,.012,A,Gt,-2.56,ai-.004,h,{cast:!1}),t(.56,.012,.02,x,Gt,-2.535,ai+.008,h,{cast:!1}),t(.3,-.25-(Ct+.05),.6,x,Gt-.43,(-.25+Ct+.05)/2,en,h),[-2.2,-1.6,-1,-.5].forEach(R=>t(.304,.012,.604,x,Gt-.43,R,en,h,{cast:!1})),t(.56,Ai-Wh,.74,f,Gt,(Wh+Ai)/2,en,h,{r:.008}),t(.54,.52,.008,r.enclosure,Gt,-1.67,ai+.004,h,{r:.003}),t(.54,.54,.008,r.enclosure,Gt,-2.225,ai+.004,h,{r:.003});for(let R=0;R<6;R++)t(.3,.011,.006,A,Gt-.05,-1.47-R*.026,ai+.008,h,{cast:!1});for(let R=0;R<4;R++)t(.3,.011,.006,A,Gt-.05,-2.41-R*.022,ai+.008,h,{cast:!1});[-1.43,-1.99].forEach(R=>t(.09,.016,.01,A,Gt+.17,R,ai+.011,h,{cast:!1})),t(.09,.06,.006,A,Gt+.15,-1.72,ai+.009,h,{cast:!1});let Pe=t(.064,.036,.004,y,Gt+.15,-1.72,ai+.012,l,{cast:!1,keep:!0}),Z=t(.012,.012,.004,w,Gt+.2,-2.08,ai+.01,l,{cast:!1,keep:!0});t(.04,.024,.004,A,Gt+.2,-2.08,ai+.0085,h,{cast:!1}),H.plane("afue",.15,h,Gt-.1,-1.78,ai+.0095),H.plane("svc",.13,h,Gt+.2805,-1.95,en+.1).rotation.y=Math.PI/2,t(.004,.012,.03,A,Gt+.283,-1.85,en+.1,h,{cast:!1}),s([[Gt+.24,-2.45,ai+.01],[Gt+.3,-2.62,ai+.08],[-2.85,Ct+.02,-2.05],[-2.72,Ct+.02,-1.88]],.008,b,h,{radial:6,cast:!1}),t(.56,-.25-Ai,.74,x,Gt,(Ai-.25)/2,en,h),t(.57,.02,.75,x,Gt,Ai+.01,en,h,{cast:!1});let Be=Gt+.28,ne=1.4;t(ne-Be,.25,.5,x,(Be+ne)/2,-.375,en,h);for(let R=Be+1.2;R<ne;R+=1.5)t(.02,.258,.508,x,R,-.375,en,h,{cast:!1});for(let R=Be+.6;R<ne;R+=1.2)[-1,1].forEach(de=>t(.025,.27,.003,x,R,-.37,en+de*.253,h,{cast:!1}));n(.065,.24,x,-1.5,-.375,en+.37,h,{axis:"z",seg:16}),n(.065,.42,x,-1.5,-.27,en+.49,h,{seg:16}),n(.07,.03,x,-1.5,-.375,en+.26,h,{axis:"z",seg:16,cast:!1});let re=o(-2.3,-.375,en+.25);t(.27,.12,.012,b,re.x,re.y,re.z+.006,h,{cast:!1});for(let R=0;R<7;R++)t(.012,.09,.006,A,re.x-.105+R*.035,re.y,re.z+.014,h,{cast:!1});t(.05,.12,.075,r.enclosure,Gt+.305,-.85,en+.2,h),t(.006,.1,.06,b,Gt+.333,-.85,en+.2,h,{cast:!1}),t(.01,.025,.012,A,Gt+.338,-.85,en+.2,h,{cast:!1}),n(.008,.55,x,Gt+.305,-.52,en+.2,h,{seg:6,cast:!1}),[-3.45,-3.22].forEach((R,de)=>{z([[R,-1.62,en-.37],[R,-1.62,-3.2],[R,-.1+de*.02,-3.2],[R,-.1+de*.02,-3.85],[R,.14,-3.85],[R,.14,-4.4]],.04,b,h,{fit:1.2,seg:14}),n(.048,.06,b,R,.14,-4.42,h,{axis:"z",seg:14}),t(.025,.2,.003,x,R,-.2,-3.4,h,{cast:!1})}),z([[Tn,Ci,1.2],[Tn,Ci,-3.5]],.017,A,h,{fit:0}),[.6,-.6,-1.8,-3.1].forEach(R=>t(.02,-.25-Ci,.004,x,Tn,(Ci-.25)/2+.01,R,h,{cast:!1})),n(.024,.06,A,Tn,Ci,-3.5,h,{axis:"z",seg:10}),z([[Tn,Ci,-2.3],[Tn,-1.72,-2.3],[Gt+.28,-1.72,-2.3]],.017,A,h),z([[Tn,-1.72,-2.3],[Tn,-1.95,-2.3]],.017,A,h,{fit:0}),n(.025,.04,A,Tn,-1.965,-2.3,h,{seg:10}),n(.024,.06,A,Tn,-1.72,-2.3,h,{seg:10}),n(.024,.06,A,Tn,Ci,-2.3,h,{axis:"z",seg:10}),n(.029,.035,A,Tn,-1.48,-2.3,h,{seg:8}),n(.026,.07,C,Tn,-1.25,-2.3,h,{seg:12}),t(.016,.1,.02,F,Tn+.035,-1.24,-2.3,h,{r:.004}),z([[Tn,Ci,-2.7],[-1.86,Ci,-2.7],[-1.86,-2,-2.7]],.017,A,h),n(.024,.06,A,Tn,Ci,-2.7,h,{axis:"z",seg:10}),n(.026,.07,C,-1.86,-1.85,-2.7,h,{seg:12});let J=new ft;J.position.set(-1.86,-1.85,-2.7),J.userData.keep=!0,l.add(J),t(.016,.1,.02,F,.035,.01,0,J,{r:.004,cast:!1}),[-2.2,-2].forEach(R=>n(.011,.5,C,R,-.5,-3,h,{seg:8})),n(.085,.06,x,-2.1,-.28,-3,h,{seg:16}),t(.006,.006,.02,x,-1.15,-.93,-3.985,h,{cast:!1}),H.plane("cal",.2,h,-1.15,-1.07,-3.988);let ie=ze("crate",o(-2.2,Ct,-1.05));{let R=ie.g,de=-2.2,Re=-1.05,We=Ct;[-.4,0,.4].forEach(Xe=>t(.9,.09,.07,d,de,We+.045,Re+Xe,R));for(let Xe=0;Xe<6;Xe++)t(.11,.02,.92,d,de-.4+Xe*.16,We+.1,Re,R);[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([Xe,xt])=>t(.12,.1,.12,b,de+Xe*.32,We+.16,Re+xt*.33,R,{cast:!1})),t(.62,.1,.8,_,de+.05,We+.27,Re+.02,R,{rot:[0,.1,0]}),t(1.6,.008,.78,_,-3.75,We+.004,-.9,R,{rot:[0,.35,0],cast:!1}),t(.78,.008,.76,_,-3.2,We+.012,-.25,R,{rot:[0,-.2,0],cast:!1}),H.plane("crate",.34,R,-3.7,We+.0095,-.9).rotation.set(-Math.PI/2,0,.35),s([[de-.5,We+.11,Re+.2],[de-.7,We+.01,Re+.4],[de-.95,We+.005,Re+.3],[de-1.1,We+.005,Re+.6]],.006,A,R,{radial:4,cast:!1}),s([[Tn,-1.22,-2.28],[Tn+.01,-1.3,-2.25],[Tn+.01,-1.36,-2.26]],.0015,x,R,{radial:4,cast:!1}),H.plane("permit",.07,R,Tn+.01,-1.42,-2.255).rotation.set(.05,.3,.04)}let le=H.mat.clone();le.transparent=!1,le.depthWrite=!0,le.alphaTest=0;let Oe=R=>{let de=H.plane(R,.1),Re=de.geometry.attributes.uv,We=1,Xe=0,xt=1,it=0;for(let Ut=0;Ut<Re.count;Ut++)We=Math.min(We,Re.getX(Ut)),Xe=Math.max(Xe,Re.getX(Ut)),xt=Math.min(xt,Re.getY(Ut)),it=Math.max(it,Re.getY(Ut));de.geometry.dispose();let pt=new qt(.5,.025,.64),ht=pt.attributes.uv;for(let Ut=0;Ut<ht.count;Ut++)ht.setXY(Ut,We+ht.getX(Ut)*(Xe-We),xt+ht.getY(Ut)*(it-xt));let Lt=new Fe(pt,le);return Lt.castShadow=!0,Lt.receiveShadow=!0,Lt.userData.keep=!0,l.add(Lt),Lt},Ne=Oe("pleatOld"),qe=Oe("pleatNew"),Je=o(Gt,-2.56,en+.05),X=o(Gt,-2.56,en+.78),at=o(-3.88,Ct+.322,-2.2),lt=ze("hose",re);{let R=lt.g,de=[[re.x,re.y,re.z+.06],[re.x+.02,re.y-.12,re.z+.3],[-2.15,-1.5,-1.75],[-1.95,Ct+.09,-1.3],[-1.55,Ct+.08,-.7],[-.4,Ct+.08,.1],[1.4,Ct+.08,.7]],Re=s(de,.07,A,R,{radial:10,density:6,tension:.4}),We=Re.userData.curve,Xe=Re.userData.len,xt=new bi(.072,.007,4,12),it=Math.round(Xe/(e>=1?.07:.14));for(let pt=2;pt<it;pt++){let ht=pt/it,Lt=new Fe(xt,A);Lt.position.copy(We.getPointAt(ht)),Lt.quaternion.setFromUnitVectors(o(0,0,1),We.getTangentAt(ht)),R.add(Lt)}t(.3,.16,.08,A,re.x,re.y,re.z+.05,R,{r:.01}),n(.08,.06,x,re.x,re.y,re.z+.11,R,{axis:"z",seg:16})}let O=ze("hp",o(Gt,Ai,en),"y"),M=-3,K=-4.85,te=.42,he=new ft;he.userData.keep=!0,he.position.set(M-.1,te+.4,K-.17),l.add(he);{let R=O.g;t(.6,.44,.78,f,Gt,Ai+.22,en,R,{r:.008}),t(.52,.34,.006,f,Gt,Ai+.22,en+.392,R,{r:.003});for(let Re=0;Re<4;Re++)t(.012,.012,.008,x,Gt+(Re%2?.24:-.24),Ai+(Re<2?.07:.37),en+.396,R,{cast:!1});H.plane("coil",.2,R,Gt-.08,Ai+.3,en+.3965);let de=(Re,We,Xe)=>s([[Gt+.3,Ai+.2+Xe,en-.28],[-2.92,Ai+.2+Xe,en-.28],[-2.9+Xe,-.6,-2.9],[-2.9+Xe,-.13,-2.95],[-2.9+Xe,-.12,-3.85],[-2.9+Xe,.12,-3.97],[-2.9+Xe,.12,-4.35],[-2.85+Xe,.32,-4.42],[-2.75+Xe,.6,-4.5],[-2.55,.62+Xe*2,-4.62]],Re,We,R,{radial:8,density:10,tension:.2});de(.021,A,0),de(.006,C,.045),t(.02,.22,.003,x,-2.88,-.24,-3.4,R,{cast:!1}),t(.012,.11,.11,A,Ri+.019,-1.3,-2.05,R,{r:.004}),H.plane("tstat",.092,R,Ri+.0256,-1.3,-2.05).rotation.y=Math.PI/2,t(1.2,.08,.7,g,M,.04,K,R),[-.4,.4].forEach(Re=>{t(.05,te-.08,.05,x,M+Re,(te+.08)/2,K+.12,R),t(.05,te-.08,.05,x,M+Re,(te+.08)/2,K-.12,R),t(.06,.04,.5,x,M+Re,te-.02,K,R)}),t(.96,.78,.38,m,M,te+.39,K,R,{r:.02}),n(.31,.02,A,M-.1,te+.4,K-.19,R,{axis:"z",seg:32,cast:!1}),[.12,.2,.28].forEach(Re=>{let We=new Fe(new bi(Re,.005,4,32),x);We.position.set(M-.1,te+.4,K-.205),R.add(We)}),t(.62,.008,.008,x,M-.1,te+.4,K-.206,R,{cast:!1}),t(.008,.62,.008,x,M-.1,te+.4,K-.206,R,{cast:!1}),H.plane("odu",.2,R,M+.33,te+.62,K-.193).rotation.y=Math.PI,t(1,.07,.42,g,M,te+.815,K,R,{r:.03,cast:!1}),t(.7,.05,.3,g,M-.05,te+.86,K,R,{r:.022,cast:!1}),t(.22,.1,.9,g,M+.4,.13,K+.1,R,{r:.04,cast:!1}),t(.14,.2,.08,m,-2.25,.9,-4.29,R,{r:.01}),H.plane("disc",.1,R,-2.25,.93,-4.332).rotation.y=Math.PI,s([[-2.25,.8,-4.3],[-2.3,.6,-4.4],[-2.52,.55,-4.7]],.012,A,R,{radial:6,cast:!1});for(let Re=0;Re<3;Re++){let We=t(.26,.09,.006,A,0,0,0,null,{cast:!1});We.geometry.translate(.14,0,0),We.rotation.set(0,.25,Re*Math.PI*2/3),he.add(We)}V(he)}let Ve=o(-2.1,Ct+.12,-2.64),Ge=new ft;Ge.rotation.order="YXZ",Ge.position.copy(Ve),Ge.userData.keep=!0,l.add(Ge);let Se;{let R=new ft,de=-.36;Ge.add(R),n(.28,1.38,p,0,-.1+.69,de,R,{seg:28}),n(.284,.04,A,0,-.1,de,R,{seg:28}),n(.27,.03,p,0,1.295,de,R,{seg:28,r2:.2}),t(.14,.08,.01,A,0,.08,-.083,R),t(.1,.12,.07,A,0,.26,-.05,R,{r:.008}),n(.02,.025,C,0,.29,-.012,R,{axis:"z",seg:12,cast:!1}),n(.012,.06,C,.12,.05,-.1,R,{axis:"z",seg:8,cast:!1}),n(.07,.08,x,0,1.35,de,R,{seg:16,r2:.04}),n(.075,.1,x,0,1.43,de,R,{seg:16}),[-.1,.1].forEach(Lt=>{n(.012,.08,x,Lt,1.33,de,R,{seg:8}),n(.02,.03,C,Lt,1.37,de,R,{seg:8})}),n(.018,.06,C,.3,1.1,de,R,{axis:"x",seg:8}),t(.025,.04,.02,C,.31,1.13,de,R,{cast:!1}),z([[.33,1.1,de],[.34,1.1,de],[.34,.04,de]],.011,C,R,{seg:8}),H.plane("tank",.14,R,0,.78,-.076),V(R),Se=n(.2825,.3,H.mat,0,.06,de,Ge,{seg:28,open:!0,keep:!0,cast:!1});let Re=H.plane("rust",.1),We=Re.geometry.attributes.uv,Xe=1,xt=0,it=1,pt=0;for(let Lt=0;Lt<We.count;Lt++)Xe=Math.min(Xe,We.getX(Lt)),xt=Math.max(xt,We.getX(Lt)),it=Math.min(it,We.getY(Lt)),pt=Math.max(pt,We.getY(Lt));Re.geometry.dispose();let ht=Se.geometry.attributes.uv;for(let Lt=0;Lt<ht.count;Lt++)ht.setXY(Lt,Xe+ht.getX(Lt)*(xt-Xe),it+ht.getY(Lt)*(pt-it))}let ve=new ft;ve.userData.keep=!0,Ge.add(ve);let $e=new ft;$e.position.set(0,0,.02),$e.userData.keep=!0;{let R=new ft;ve.add(R),[-.17,.17].forEach(Re=>z([[Re,-.1,-.05],[Re,1.28,-.05],[Re,1.4,.03]],.013,E,R,{seg:8,fit:0})),z([[-.17,1.4,.03],[.17,1.4,.03]],.013,E,R,{seg:8,fit:0}),[.35,.85].forEach(Re=>n(.009,.34,E,0,Re,-.05,R,{axis:"x",seg:6})),t(.38,.01,.24,E,0,-.115,-.17,R),n(.012,.5,E,0,0,.02,R,{axis:"x",seg:8}),[-.17,.17].forEach(Re=>t(.02,.1,.08,E,Re,-.04,-.02,R));let de=new Fe(new bi(.286,.006,4,40),F);de.rotation.x=Math.PI/2,de.position.set(0,.95,-.36),R.add(de),t(.06,.04,.03,F,0,.95,-.065,R),V(R),[-.25,.25].forEach(Re=>{n(.12,.06,A,Re,0,0,$e,{axis:"x",seg:20}),n(.055,.065,E,Re,0,0,$e,{axis:"x",seg:12}),t(.068,.02,.16,E,Re,0,0,$e,{cast:!1})}),V($e),ve.add($e)}let ct=ze("conn",o(-2.1,-1.5,-2.85),"pop");{let R=ct.g;z([[-1.86,-2,-2.7],[-1.86,-2.42,-2.7],[-2.05,-2.42,-2.7]],.017,A,R),z([[-1.86,-2.42,-2.7],[-1.86,-2.56,-2.7]],.017,A,R,{fit:0}),n(.024,.03,A,-1.86,-2.575,-2.7,R,{seg:10}),n(.024,.05,A,-1.86,-2,-2.7,R,{seg:10}),[-2.2,-2].forEach(de=>n(.011,.5,C,de,-1,-3,R,{seg:8})),n(.075,.96,x,-2.1,-.76,-3,R,{seg:16}),[-1,-.55].forEach(de=>n(.079,.02,x,-2.1,de,-3,R,{seg:16,cast:!1}))}let D=ze("caps",o(-2,-1.2,-2.85),"pop");{let R=D.g;[-2.2,-2].forEach(de=>n(.014,.035,C,de,-.765,-3,R,{seg:8})),n(.024,.035,A,-1.86,-1.905,-2.7,R,{seg:10}),s([[-1.86,-1.86,-2.68],[-1.85,-1.92,-2.66],[-1.85,-1.97,-2.665]],.0015,x,R,{radial:4,cast:!1}),H.plane("capped",.055,R,-1.85,-2.02,-2.66).rotation.set(0,.25,-.05),n(.08,.012,x,-2.1,-.315,-3,R,{seg:16,cast:!1})}let $=ze("puddle",o(-1.95,Ct+.003,-2.6),"xz");[[0,0,.42,.3],[.25,.18,.28,.2],[-.2,.22,.22,.18]].forEach(([R,de,Re,We])=>{n(1,.004,r.water,-1.95+R,Ct+.003,-2.6+de,$.g,{seg:28,cast:!1}).scale.set(Re,1,We)});let ce=-1.72,_e=-1.1,Ue=-3.89,B=ze("tankless",o(ce,_e,Ue));{let R=B.g;t(.36,.56,.2,f,ce,_e,Ue,R,{r:.012}),t(.3,.46,.006,f,ce,_e,Ue+.1,R,{r:.003}),H.plane("tkl",.08,R,ce,_e+.12,Ue+.105),z([[ce+.06,_e+.28,Ue],[ce+.06,-.62,Ue],[ce+.06,-.62,-4.05]],.05,b,R,{fit:1.15,seg:16}),z([[Tn,Ci,-3.5],[Tn,Ci,-3.84],[-1.45,Ci,-3.84],[-1.45,-1.52,-3.84],[ce+.1,-1.52,-3.84],[ce+.1,_e-.28,-3.84]],.014,A,R,{seg:8}),n(.022,.06,C,-1.45,-1.25,-3.84,R,{seg:10}),t(.014,.08,.016,F,-1.42,-1.24,-3.84,R,{r:.003,cast:!1}),[[ce-.1,r.bluePlastic,-2.25],[ce-.02,r.redPlastic,-2.35]].forEach(([de,Re,We],Xe)=>{z([[de,_e-.28,-3.84],[de,-1.6-Xe*.06,-3.84],[We,-1.6-Xe*.06,-3.84],[We,-.26,-3.84]],.011,C,R,{seg:8}),n(.017,.04,C,de,-1.47,-3.84,R,{seg:8}),t(.05,.012,.012,Re,de+.02,-1.47,-3.815,R,{cast:!1})}),[-.45,-1.2].forEach(de=>t(.03,.012,.03,C,-2.3,de,-3.85,R,{cast:!1}))}let Me=ze("loose",o(Ri,-1.5,-.3),"pop");me(-1.48,-.29,Me.g),me(-.29,we,Me.g);let ae=ze("demo",o(-3,Ct,-.5),"y");{let R=ae.g,de=-1.05,Re=Ri+.02,We=-1.45,Xe=-2.45,xt=-1.6;t(Xe-Re,.038,.089,d,(Re+Xe)/2,Ct+.019,de,R),t(We-xt,.038,.089,d,(xt+We)/2,Ct+.019,de,R),t(We-Re,.038,.089,d,(Re+We)/2,Xi-.019,de,R);for(let ht=Re+.02;ht<We;ht+=.406)ht>Xe-.04&&ht<xt+.04||t(.038,Xi-Ct-.076,.089,d,ht,(Ct+Xi)/2,de,R);[Xe-.019,xt+.019].forEach(ht=>t(.038,Xi-Ct-.076,.089,d,ht,(Ct+Xi)/2,de,R)),[Xe+.019,xt-.019].forEach(ht=>t(.038,2.07,.089,d,ht,Ct+1.035,de,R)),t(xt-Xe,.18,.089,d,(Xe+xt)/2,Ct+2.16,de,R),H.plane("suite",.15,R,Xe-.019,-1.2,de+.046),[-.5,.5].forEach(ht=>t(1.1,.04,.08,d,-2.7,Ct+.02,1+ht*1.8,R));for(let ht=0;ht<4;ht++)t(1.22,.0127,2.44,u,-2.7+ht%2*.02,Ct+.047+ht*.0135,1+ht%3*.015,R,{rot:[0,(ht-1.5)*.012,0]});let it=-4.35,pt=1.5;t(.62,.88,.92,T,it,Ct+.5,pt,R,{r:.02}),t(.66,.04,.96,T,it,Ct+.95,pt,R,{r:.01}),[-.3,.3].forEach(ht=>n(.05,.04,A,it+.2,Ct+.05,pt+ht,R,{axis:"x",seg:12})),[[0,.1,.4,.4],[-.1,-.15,-.3,.6],[.12,-.25,.2,-.5]].forEach(([ht,Lt,Ut,In])=>t(.4,.0127,.5,u,it+ht,Ct+.95,pt+Lt,R,{rot:[Ut,In,.2]})),t(.3,.09,.6,v,it-.05,Ct+.98,pt-.1,R,{rot:[.3,.2,-.25]}),H.plane("bin",.2,R,it+.312,Ct+.75,pt).rotation.y=Math.PI/2;for(let ht=0;ht<7;ht++)t(.05+ht%3*.04,.0127,.04+ht%2*.05,u,Ri+.12+ht%3*.09,Ct+.007,-1.3+ht*.3,R,{rot:[0,ht*.7,0],cast:!1})}V(h),et();let Ie={install:o(Gt,-1.65,ai+.02),maintain:o(Gt+.1,-2.56,ai+.03),upgrade:o(Ri+.03,-1.3,-2.05),hpump:o(Gt+.1,Ai+.22,en+.4),replace:o(ce,_e+.05,Ue+.11),remove:o(-2.1,-1.9,-2.6),demo:o(Ri-.04,-1.5,-.6)},Ae={time:19.4,cut:0,ghost:0,ground:1,lift:0,orbit:.012},U=[{...Ae,radius:14,theta:.2,phi:.9,fx:-2.6,ty:-1.8,fz:-2.2,lift:3,dof:0,orbit:.02,narrow:{radius:12}},{...Ae,radius:3.5,theta:.5,phi:1.36,fx:-2.8,ty:-1.95,fz:-2.2,dof:1,narrow:{fx:-3.15}},{...Ae,radius:4.4,theta:1,phi:1.56,fx:-3.7,ty:-1.15,fz:-2.25,dof:.9},{...Ae,radius:4.8,theta:-.1,phi:1.36,fx:-1.85,ty:-1.8,fz:-3.2,dof:1},{...Ae,radius:3.8,theta:-.55,phi:1.36,fx:-2,ty:-1.85,fz:-1.3,dof:.8,narrow:{fx:-2.35,fz:-1.1}},{...Ae,radius:4.4,theta:.7,phi:1.3,fx:-3.4,ty:-1.95,fz:-.1,dof:.7,narrow:{fx:-3.9,ty:-1.55,fz:-.6}}],ye=-1,oe=0,Ke=0,nt=0,bt=0,At=0,Bt=0,Zt=o(-2,Ct+.12,.35),Un=Ve.distanceTo(Zt),Vn=o(0,0,0);return{name:"cycle",group:l,anchors:Ie,shots:U,hides:R=>[...R.sys.hvac?R.sys.hvac.meshes:[],...R.sys["water-heaters"]?R.sys["water-heaters"].meshes:[]],light(R){return R===0?{pos:[-4,2,0],at:[-2.8,-2.4,-2.4],power:1,fill:.3}:R===1?{pos:[-1.7,-.5,-.7],at:[-3.3,-2.3,-2.4],power:1,fill:.35}:R===2?{pos:[-1.6,-.45,-1.1],at:[-3.9,-1.4,-2.2],power:1,fill:.35}:R===3?{pos:[-2.5,-.45,-1],at:[-1.9,-1.9,-3.4],power:1,fill:.35}:R===4?{pos:[-3.6,-.45,.2],at:[-2,-2.2,-1.4],power:1,fill:.35}:{pos:[-1.5,-.5,1.6],at:[-4.2,-1.8,-.6],power:1,fill:.35}},update({step:R,q:de,t:Re,dt:We,snap:Xe,reduce:xt}){let it=Xe?1:1-Math.exp(-We*4);de=Et(de||0,0,1);let pt=R===1?Math.round(1+11*de):jv[R]??25;pt!==ye&&(ye=pt,H.set("cal",void 0,void 0,{year:pt,verb:e_[R]||""}),H.set("svc",void 0,void 0,{year:pt})),y.emissiveIntensity=xt?1.4:1.3+.3*Math.sin(Re*13.1)+.2*Math.sin(Re*7.7+1.3),w.emissiveIntensity=xt?1.8:Math.sin(Re*2.4)>-.2?2:.3;let ht=R===1?de:R>1?1:0;oe=Xe?ht:je(oe,ht,1-Math.exp(-We*6));let Lt=dt(.06,.28,oe),Ut=dt(.3,.46,oe),In=dt(.5,.86,oe),Pi=dt(.38,.48,oe);Ne.visible=R<=1,Ne.position.lerpVectors(Je,X,Lt).lerp(at,Ut),Ne.rotation.set(-1.72*Ut,0,.06*Ut),qe.visible=Pi>.001,qe.position.lerpVectors(X,Je,In),qe.scale.setScalar(Math.max(.001,Pi)),Q(ie,R===0?1:0,it),Q(lt,R===1?1:0,it);let Yi=Q(O,R>=2?1:0,it);he.visible=Yi>.98,xt||(he.rotation.z=Re*6);let xi=R>3||R===3&&de>.6;Q(ct,xi?0:1,1),Q(D,xi?1:0,1),Q($,R===3?.15+.85*dt(0,.45,de):0,it),Q(B,R>3||R===3&&de>.45?1:0,it),Q(Me,R<5?1:0,1),Q(ae,R===5?1:0,it),Bt=je(Bt,xi?1:0,it),J.rotation.z=-Bt*Math.PI/2,Se.visible=R>=3;let Ii=R===4?de:R>4?1:0;Ke=je(Ke,dt(0,.25,Ii)*.42,it);let Vs=nt;nt=je(nt,dt(.25,1,Ii),it),At+=(nt-Vs)*Un,bt=je(bt,R===4?1:0,it),Ge.visible=R<=4,Ge.position.lerpVectors(Ve,Zt,nt),Ge.rotation.set(Ke,.08*nt,0),ve.visible=bt>.02,ve.scale.setScalar(Math.max(.001,dt(0,1,bt))),$e.rotation.x=At/.12,Vn.set(0,.95,-.36),Ge.updateMatrix(),Ie.remove.copy(Vn.applyMatrix4(Ge.matrix))}}}function O0({M:i,H:e,Ug:t,Wd:n,tier:s,reduce:r,glowTex:a}){let o=P0({M:i,tier:s,reduce:r,glowTex:a,dotTex:Es("rgba(255,255,255,0.75)")}),c=new ft;c.name="sets";let l=x=>x.traverse(b=>{b.userData.noPick=!0}),h=I0({kit:o});c.add(h.group),l(h.group);let f={};Object.entries({panel:D0,attic:null,sewer:null,radon:N0,restore:null,cycle:F0}).forEach(([x,b])=>{typeof b=="function"&&(f[x]=b)});let p={},u=new Ya(16769725,0,18,.5,.8,1);u.castShadow=s>=1,u.shadow.mapSize.set(s>=2?2048:1024,s>=2?2048:1024),u.shadow.bias=-6e-4,u.shadow.normalBias=.006,u.shadow.radius=3,u.shadow.camera.near=.15,u.shadow.camera.far=16;let d=new pi(9414888,0,9,2);c.add(u,u.target,d);let _=new N(2,-.3,-2.5),g=new N(2.8,-1.2,-3.9),m=0,E=1,T=null,v=[];function y(x){if(p[x]||!f[x])return p[x];let b=f[x]({kit:o,M:i,H:e,Ug:t,Wd:n,tier:s,reduce:r});return b.group.visible=!1,l(b.group),c.add(b.group),p[x]=b,b}function w(x,b,C,F,S){o.time.value=C,h.disc.rotation.y=C*1.4;let L=b.zoom&&f[b.zoom]?b.zoom:null;L&&y(L);let P=x.zk>.004?L||T:null;P!==T&&(T&&p[T]&&(p[T].group.visible=!1),v.forEach(k=>{k.visible=!0}),v=[],T=P,T&&(p[T].group.visible=!0,p[T].hides&&(v=(p[T].hides(e,t,n)||[]).filter(k=>k&&k.visible),v.forEach(k=>{k.visible=!1}))));let H=S?1:1-Math.exp(-F*3.2),Y=0;if(T){let k=p[T];k.update({step:b.zs|0,p:b.zp||0,q:b.zq||0,k:x.zk,t:C,dt:F,reduce:r,snap:S});let V=k.light?k.light(b.zs|0,b.zq||0):null;if(V){let z=m<.02?1:H;_.lerp(A.fromArray(V.pos),z),g.lerp(A.fromArray(V.at),z),Y=V.power*x.zk,E=je(E,V.fill??1,H)}}m=je(m,Y,H),u.position.copy(_),u.target.position.copy(g),u.intensity=10*m,u.visible=m>.01,d.position.copy(g).add(A.set(-1.2,.5,1.6)),d.intensity=1.4*m*E,d.visible=m>.01}let A=new N;return{root:c,kit:o,update:w,ensure:y,names:Object.keys(f),get shown(){return T},anchors(){return T?p[T].anchors:null},input(x,b){let C=y(x);C&&C.input&&C.input(b)},shots(x){let b=y(x);return b?b.shots||[]:null},get:x=>y(x),prebuild(){let x=Object.keys(f).find(b=>!p[b]);return x?(y(x),!0):!1},lampPower:()=>m}}function r_(){let i=performance.now(),e=[],t=U=>e.push([U,Math.round(performance.now()-i)]),n=document.getElementById("stage"),s=document.documentElement,r=()=>window.dispatchEvent(new Event("hause:stage-ready")),a=()=>{s.classList.add("no-webgl"),r()};if(!n)return a();let o=window.matchMedia("(prefers-reduced-motion: reduce)").matches,c=Qf(),l=navigator.hardwareConcurrency||4,h=typeof window.HAUSE_QUALITY=="number"?window.HAUSE_QUALITY:c?l>=6?1:0:l>=6?2:1;try{let U=document.createElement("canvas"),ye=U.getContext("webgl2");if(!ye)return a();let oe=ye.getExtension("WEBGL_lose_context");oe&&oe.loseContext()}catch{return a()}let f;try{if(f=new Oc({canvas:n,antialias:h===0,powerPreference:"high-performance"}),!f.getContext())throw new Error("no gl")}catch{return a()}n.addEventListener("webglcontextlost",U=>{U.preventDefault(),q=!1,s.classList.add("no-webgl")}),f.toneMapping=Bs,f.toneMappingExposure=1,f.shadowMap.enabled=!0,f.shadowMap.type=ir;let p=new yi(new N(1,0,0),1e3);f.clippingPlanes=[p],e0(f.capabilities.getMaxAnisotropy()),t0(h);let u=new Js;u.environmentIntensity=.6,u.fog=new Ra(1317678,70,360);let d=new Xn(30,1,.3,1400),_=.3;t("renderer");let g=m0(f,u);t("sky");let{M:m,T:E}=p0();t("materials+textures");let T=ta(),v=d0(),y=M0({M:m,T:E,markTex:v,glowTex:T});u.add(y.house),t("house");let w=b0({M:m,T:E,glowTex:T,markTex:v,tier:h,reduce:o});u.add(w.world),t("world");let A=T0({house:y.house,reduce:o}),x=A0({M:m,layers:y.layers,glowTex:T}),b=R0({scene:u,M:m,tier:h,reduce:o});Object.values(y.layers).forEach(U=>{C0(U,y.edgeMat),Hh(U)}),Hh(w.props);let C=O0({M:m,H:y,Ug:b,Wd:w,tier:h,reduce:o,glowTex:T});y.house.add(C.root),t("systems+interior+underground+merge");let F=new Wa(10466518,1709842,.5),S=new qr(16769728,3);S.castShadow=!0,S.shadow.mapSize.set(h>=2?2048:1024,h>=2?2048:1024),Object.assign(S.shadow.camera,{left:-26,right:26,top:26,bottom:-26,near:5,far:240}),S.shadow.bias=-3e-4,S.shadow.normalBias=.04,S.shadow.radius=h>=2?2.5:1.5,S.target.position.set(0,3,0);let L=new qr(9085656,.6);L.position.copy(g.U.uMoonDir.value).multiplyScalar(60),u.add(F,S,S.target,L);let P={explode:0,radius:36,theta:.55,phi:1.36,ty:4.2,tx:-6,time:19.4,marks:0,ground:1,orbit:.04,visible:1,ghost:0,cut:0,lift:0,thermal:0,netE:0,netW:0,netA:0,netR:0,lensY:0,fx:0,fz:0,beacons:0,section:0,cutX:.45,season:0,snowfall:1,smoke:1,melt:0,icicles:0,aurora:0,zk:0,dof:0},H=Object.assign({level:null,focusSys:null,netFocus:null,ugFocus:null,interactive:!1,zoom:null,zs:0,zp:0,zq:0},P),Y=["explode","radius","phi","ty","tx","time","marks","ground","visible","ghost","cut","lift","thermal","netE","netW","netA","netR","lensY","fx","fz","beacons","section","cutX","season","snowfall","smoke","melt","icicles","aurora","zk","dof"],k=0,V=1,z=1,G=1,q=!0,fe=0,be=-9,Ce={set(U){Object.assign(H,U)},highlight(U){H.focusSys=U},selectLevel(U){H.level=U},levels:bo.map(U=>U.key),onPick:null,onHoverLevel:null,onFrame:null,onThermal:null,roomsLit:0,get quality(){return h}};window.HAUSE_STAGE=Ce;let ze=new Qe(14256718),et=null;function Q(U){et=U,Object.keys(y.sys).forEach(ye=>y.sys[ye].mats.forEach(oe=>{ye===U?(oe.emissive.copy(ze),oe.emissiveIntensity=.9):(oe.emissive.copy(oe.userData.baseEmissive),oe.emissiveIntensity=1)}))}let ue=new Set;y.house.traverse(U=>{!U.isMesh||!U.material||(Array.isArray(U.material)?U.material:[U.material]).forEach(ye=>{ye.userData&&(ye.userData.shell||ye.userData.wall)&&ue.add(ye)})});let we="",me=!1;y.edgeMat.visible=!1;function Pe(U,ye){let oe=U.toFixed(3)+"|"+ye.toFixed(3);if(oe===we)return;we=oe;let Ke=U>.01||ye>.01;ue.forEach(nt=>{let bt=nt.userData.pane,At=nt.userData.shell?U*(bt?.75:.9):0,Bt=nt.userData.wall?ye*(bt?.8:.9):0;Ke!==me&&(nt.transparent=Ke||!!nt.userData.alwaysTransparent,nt.needsUpdate=!0),nt.opacity=1-Math.max(At,Bt),nt.depthWrite=Math.max(At,Bt)<.4}),me=Ke,y.edgeMat.opacity=Math.max(U*.28,ye*.16),y.edgeMat.visible=y.edgeMat.opacity>.01}let Z=w0({scene:u,M:m,skipParents:[...Object.values(A.groups),C.root],onChange:U=>{w.setThermal(U),f.toneMapping=U?wi:Bs,Ce.onThermal&&Ce.onThermal(U)}}),Be=new N;function ne(U,ye){return Be.copy(ye),U.localToWorld(Be),Be.project(d),{x:(Be.x*.5+.5)*V,y:(-Be.y*.5+.5)*z,behind:Be.z>1}}let re=(U,ye,oe)=>new N(U,ye,oe),J=bo.map(U=>({obj:y.layers[U.key],offset:re(fn/2+1.4,{roof:7.8,upper:4.9,main:1.8,basement:-1.2,below:-2.8}[U.key],Dt/2)}));Ce.projectLevels=()=>J.map(U=>ne(U.obj,U.offset)),Ce.projectAnchors=()=>{let U={};Object.keys(y.ANCHORS).forEach(oe=>{U[oe]=ne(y.house,y.ANCHORS[oe])}),Object.keys(b.ANCHORS).forEach(oe=>{U[oe]=ne(y.house,b.ANCHORS[oe])});let ye=C.anchors();return ye&&Object.keys(ye).forEach(oe=>{U["z."+oe]=ne(y.house,ye[oe])}),U},Ce.zoomSets=C.names,Ce.zoomShots=U=>C.shots(U),Ce.zoomInput=(U,ye)=>C.input(U,ye),Ce.prebuildZoom=()=>C.prebuild();let ie={x:0,y:0,nx:0,ny:0},le=null,Oe=new Za,Ne=[];y.house.traverse(U=>{!U.isMesh||U.isInstancedMesh||!U.visible||U.userData.noPick||(U.geometry.computeBoundingSphere(),U.geometry.boundingSphere.radius>.3&&Ne.push(U))});let qe=U=>{for(;U&&!U.userData.level;)U=U.parent;return U?U.userData.level:null};Ce.pickAt=(U,ye)=>{Oe.setFromCamera({x:U/V*2-1,y:-(ye/z)*2+1},d);let oe=Oe.intersectObjects(Ne,!1)[0];return oe?{level:qe(oe.object),sys:oe.object.userData.sys||null}:null},Ce.pickCount=()=>Ne.length,window.addEventListener("pointermove",U=>{ie.nx=U.clientX/V*2-1,ie.ny=U.clientY/z*2-1,le&&(fe=le.theta0-(U.clientX-le.x)*.006)},{passive:!0}),n.addEventListener("pointerdown",U=>{H.interactive&&(le={x:U.clientX,theta0:fe,t:performance.now()})}),window.addEventListener("pointerup",U=>{if(!le)return;let ye=Math.abs(U.clientX-le.x)<6&&performance.now()-le.t<400;if(le=null,ye&&H.interactive){Oe.setFromCamera({x:U.clientX/V*2-1,y:-(U.clientY/z)*2+1},d);let oe=Oe.intersectObjects(Ne,!1)[0];oe&&Ce.onPick&&Ce.onPick(qe(oe.object),oe.object.userData.sys||null)}}),n.addEventListener("pointermove",U=>{if(!H.interactive||le)return;Oe.setFromCamera({x:U.clientX/V*2-1,y:-(U.clientY/z)*2+1},d);let ye=Oe.intersectObjects(Ne,!1)[0],oe=ye?qe(ye.object):null;n.style.cursor=oe?"pointer":"grab",Ce.onHoverLevel&&Ce.onHoverLevel(oe)});let Je=null;function X(){Je&&Je.dispose(),Je=h>=1?y0(f,u,d,h,Math.round(V*G),Math.round(z*G)):null}function at(){V=window.innerWidth,z=window.innerHeight,G=Math.min(window.devicePixelRatio||1,h>=2?1.75:h===1?1.5:1.25),f.setPixelRatio(G),f.setSize(V,z,!1),d.aspect=V/z,d.fov=V<700?44:30,d.updateProjectionMatrix(),Je&&Je.setSize(Math.round(V*G),Math.round(z*G))}window.addEventListener("resize",at),at(),X();let lt=new N;function O(U,ye){let oe=.5-.5*Math.cos(ye*Math.PI*2),Ke=je(7.5,5,oe),nt=je(18.3,21.9,oe),bt=je(24,62,oe),At=Math.PI*(U-Ke)/(nt-Ke),Bt=bt*Math.sin(At),Zt=Bt*Math.PI/180;return lt.set(-Math.sin(At)*Math.cos(Zt),Math.sin(Zt),Math.cos(At)*Math.cos(Zt)).normalize(),Bt}let M=[[0,[.62,.6,.55]],[.16,[.7,.7,.55]],[.3,[.8,1,.62]],[.5,[.74,.95,.55]],[.68,[1.05,.88,.5]],[.82,[1,.72,.45]],[1,[.62,.6,.55]]];function K(U,ye){let oe=0;for(;oe<M.length-2&&M[oe+1][0]<=U;)oe++;let[Ke,nt]=M[oe],[bt,At]=M[oe+1],Bt=(U-Ke)/(bt-Ke);ye.setRGB(je(nt[0],At[0],Bt),je(nt[1],At[1],Bt),je(nt[2],At[2],Bt))}let te=new N,he=new N,Ve=new N,Ge=new N,Se=new N,ve={ug:0,section:0,cutX:.45,ground:1,ghost:0,cut:0,snow:1,roofSnow:1,snowfall:1,rain:0,leaves:0,smoke:1,melt:0,icicles:0,grow:0,leafTint:new Qe(.3,.5,.15),explode:0,lift:0,zk:0},$e=[[0,[.3,.3,.3]],[.22,[.62,.8,.28]],[.36,[.4,.62,.2]],[.55,[.3,.5,.15]],[.7,[.95,.7,.18]],[.82,[.9,.35,.1]],[1,[.5,.2,.08]]];function ct(U,ye){let oe=0;for(;oe<$e.length-2&&$e[oe+1][0]<=U;)oe++;let[Ke,nt]=$e[oe],[bt,At]=$e[oe+1],Bt=(U-Ke)/(bt-Ke);ye.setRGB(je(nt[0],At[0],Bt),je(nt[1],At[1],Bt),je(nt[2],At[2],Bt))}let D=new Qe(16777215),$=new Qe,ce=0,_e=30;function Ue(U,ye){k+=U;let oe=ye?1:1-Math.exp(-U*(o?30:4.2));Y.forEach(it=>{P[it]=je(P[it],H[it],oe)}),P.theta=je(P.theta,H.theta+(o?0:Math.sin(k*.08)*H.orbit)+fe,oe),bo.forEach(it=>{let pt=y.layers[it.key],ht=it.key==="roof"?18*Et(P.lift,0,1):it.key==="upper"?12*Et(P.lift-1,0,1):it.key==="main"?9*Et(P.lift-2,0,1):0;pt.position.y=je(pt.position.y,it.dy*P.explode+ht+(H.level===it.key?.9:0),oe)});let Ke=(P.season%1+1)%1,nt=Math.max(1-dt(.1,.3,Ke),dt(.84,1,Ke)),bt=Math.max(1-dt(.06,.22,Ke),dt(.88,1,Ke));ve.ug=0,ve.beacons=P.beacons,ve.section=P.section,ve.cutX=P.cutX,ve.ground=P.ground,ve.ghost=P.ghost,ve.cut=P.cut,ve.lift=P.lift,ve.zk=P.zk,ve.snow=nt,ve.roofSnow=bt,ve.explode=P.explode,ve.grow=dt(.2,.34,Ke)*(1-dt(.78,.93,Ke)),ct(Ke,ve.leafTint),ve.rain=dt(.2,.24,Ke)*(1-dt(.3,.34,Ke))*(o?0:1),ve.leaves=dt(.72,.78,Ke)*(1-dt(.9,.95,Ke))*(o?0:1),ve.melt=Math.max(P.melt,1-bt),ve.icicles=Math.max(P.icicles,dt(.03,.1,Ke)*(1-dt(.17,.26,Ke))+dt(.9,.97,Ke)*.5),ve.snowfall=P.snowfall*(o?0:1)*(Ke<.05||Ke>.93?1:0),ve.smoke=P.smoke*(1-dt(.12,.3,Ke)+dt(.8,.95,Ke)),K(Ke,w.U.uTint.value);let At=O(P.time,Ke),Bt=dt(-5,10,At);g.update({elev:At,daylight:Bt,sunDir:lt,thermal:P.thermal,aurora:P.aurora*(1-Bt),cloud:je(.38,.62,dt(0,1,Math.abs(Math.sin(Ke*Math.PI*2)))),snowy:nt>.5,voidK:Et(1-P.ground,0,1)},k),g.follow(d.position),u.fog.color.copy(g.horizon);let Zt=1-dt(0,28,At);S.position.copy(lt).multiplyScalar(110).add(S.target.position),S.color.setRGB(1,je(.95,.62,Zt),je(.88,.4,Zt)),S.intensity=3.6*dt(-4,6,At)*(1-P.thermal),F.color.copy(g.zenith).lerp(D,.4),F.groundColor.setRGB(.1,.09,.08).lerp($.setRGB(.55,.6,.72),nt*.8*(.25+.75*Bt)),F.intensity=(.5+.35*Bt+.25*P.cut)*(1-P.thermal),L.intensity=.7*(1-Bt)*(1-P.thermal),u.environmentIntensity=.5+.4*Bt+.1*P.cut,f.toneMappingExposure=Z.on?1:je(1.2,.95,Bt),(ye||k-be>.4)&&(g.refreshEnv(ye),be=k),Pe(P.ghost*(1-Et(P.explode*4,0,1)),P.cut),x.update(1-Bt,P.cut);let Un=y.update(ve,oe,k,Bt,ye?100:U);Ce.roomsLit=Math.round(Et(Un,0,7)),y.extra.chimneyTop.getWorldPosition(Ge),w.update(ve,k,U,Bt,te,Ge,Et(Un/9,0,1));let Vn=H.focusSys;Object.keys(y.sys).forEach(it=>y.sys[it].marks.forEach(pt=>{let ht=Vn?it===Vn?1:P.marks*.35:P.marks;pt.material.opacity=je(pt.material.opacity,ht,oe),pt.scale.setScalar(.95*(it===Vn?1+Math.sin(k*4)*.12:1)*(1+P.explode*.25))})),Vn!==et&&Q(Vn),A.update(P,H.netFocus,k,U);let R=b.update(ve,H.ugFocus,k,U);p.constant=-R,Z.set(H.thermal>.5),Z.time.value=k,C.update(P,H,k,U,ye),ie.x=je(ie.x,ie.nx,oe*.6),ie.y=je(ie.y,ie.ny,oe*.6);let de=P.theta+ie.x*.08,Re=Et(P.phi+ie.y*.04,.35-.27*P.zk,1.5+1.2*P.zk),We=V<700,Xe=Et(P.radius*.012,.02,.3);Math.abs(Xe-_)>_*.02&&(_=Xe,d.near=Xe,d.updateProjectionMatrix()),te.set(P.fx,P.ty+(We?-1.2*Et(P.radius/30,0,1):0),P.fz),he.set(Math.sin(Re)*Math.sin(de),Math.cos(Re),Math.sin(Re)*Math.cos(de)).multiplyScalar(P.radius*(We?1.25:1)).add(te),d.position.copy(he),d.lookAt(te),d.updateMatrixWorld(),Ve.setFromMatrixColumn(d.matrixWorld,0),d.position.addScaledVector(Ve,We?0:P.tx),d.updateMatrixWorld(),Se.copy(te).applyMatrix4(d.matrixWorldInverse);let xt=Math.max(.001,Se.length());_e=xt,w.sight.value.set(Se.x/xt,Se.y/xt,Se.z/xt,xt),Math.abs(P.lensY-ce)>1e-4&&(ce=P.lensY,Math.abs(ce)<1e-4?d.clearViewOffset():d.setViewOffset(V,z,0,-ce*z,V,z)),n.style.opacity=P.visible.toFixed(3)}let B={n:0,sum:0,last:0},Me=performance.now();function ae(U){if(Je){let ye=Je.gtao,oe=P.ghost>.05||P.cut>.05||Z.on||P.explode>.05;ye&&(ye.enabled=!oe),Je.bloom&&(Je.bloom.strength=Z.on?.9:(.3+.55*(1-Et(lt.y*4,0,1)))*(1-.45*P.zk)),Je.grade.uniforms.uSat.value=Z.on?1:1.05,Je.setDof(Z.on?0:P.dof,_e,d.near,d.far),Je.render(U,k)}else f.render(u,d)}function Ie(U){let ye=U-B.last;if(B.last=U,!(ye>250||ye<=0)&&(B.n++,B.n>40&&(B.sum+=ye),B.n===130)){let oe=B.sum/90;oe>26&&h>1&&typeof window.HAUSE_QUALITY!="number"?(h--,X(),at(),S.shadow.mapSize.set(1024,1024),S.shadow.map&&S.shadow.map.dispose(),S.shadow.map=null):oe>34&&h===1&&G>1.01&&typeof window.HAUSE_QUALITY!="number"&&(G=1,f.setPixelRatio(1),f.setSize(V,z,!1),Je&&Je.setSize(V,z)),B={n:0,sum:0,last:U}}}function Ae(U){if(!q)return;let ye=Math.min((U-Me)/1e3,.05);Me=U,Ue(ye,!1),ae(ye),Ie(U),Ce.onFrame&&Ce.onFrame(),requestAnimationFrame(Ae)}Ce.pause=()=>{q=!1},Ce.resume=()=>{q||(q=!0,Me=performance.now(),B.last=0,requestAnimationFrame(Ae))},Ce.settle=()=>{Ue(.016,!0),Ue(.016,!0),ae(.016),Ce.onFrame&&Ce.onFrame()},window.HAUSE_DEBUG&&(Ce.debug={scene:u,camera:d,renderer:f,S:P,target:H,H:y,Wd:w,sky:g,sun:S,hemi:F,moon:L,Sets:C,get post(){return Je}}),Ce.info=()=>({tier:h,calls:f.info.render.calls,triangles:f.info.render.triangles,pixelRatio:G,buildMs:Ce.buildMs}),t("pre-first-render"),Ce.settle(),t("first-render"),Ce.laps=e,requestAnimationFrame(U=>{Me=U,requestAnimationFrame(Ae)}),Ce.buildMs=Math.round(performance.now()-i),s.classList.add("has-webgl"),r()}r_();})();
