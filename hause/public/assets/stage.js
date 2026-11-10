/* HAUSE 3D stage. Built from hause/src/stage with esbuild + three.js. Do not edit by hand. */
(()=>{var kf=0,$h=1,Vf=2;var Qr=1,Wf=2,Za=3,Ir=0,vi=1,Xn=2,Jn=0,Dr=1,_n=2,Jh=3,Kh=4,$c=5;var xs=100,Xf=101,Yf=102,qf=103,Zf=104,jr=200,$f=201,Jf=202,Kf=203,Qh=204,jh=205,Ko=206,Qf=207,Qo=208,jf=209,e0=210,t0=211,n0=212,i0=213,s0=214,mc=0,gc=1,xc=2,Ca=3,vc=4,yc=5,_c=6,Mc=7,ed=0,r0=1,a0=2,ss=0,jo=1,el=2,tl=3,Lr=4,nl=5,il=6,sl=7;var td=300,Nr=301,ea=302,Jc=303,Kc=304,rl=306,Gn=1e3,ds=1001,Ec=1002,$n=1003,o0=1004;var al=1005;var ei=1006,Qc=1007;var Ks=1008;var li=1009,nd=1010,id=1011,$a=1012,jc=1013,Ns=1014,vs=1015,Vn=1016,eu=1017,tu=1018,Ur=1020,sd=35902,rd=35899,ad=1021,od=1022,Ei=1023,Xs=1026,Qs=1027,nu=1028,iu=1029,Fr=1030,su=1031;var ru=1033,ol=33776,ll=33777,cl=33778,ul=33779,au=35840,ou=35841,lu=35842,cu=35843,uu=36196,hu=37492,du=37496,fu=37488,pu=37489,hl=37490,mu=37491,gu=37808,xu=37809,vu=37810,yu=37811,_u=37812,Mu=37813,Eu=37814,Su=37815,bu=37816,Tu=37817,wu=37818,Au=37819,Ru=37820,Cu=37821,Pu=36492,Iu=36494,Du=36495,Lu=36283,Nu=36284,dl=36285,Uu=36286;var Eo=2300,Sc=2301,dc=2302,Uh=2303,Fh=2400,Oh=2401,Bh=2402;var l0=3200,ld=3201;var fl=0,c0=1,Us="",fn="srgb",So="srgb-linear",bo="linear",gn="srgb";var fc=7680;var u0=519,h0=512,d0=513,f0=514,Fu=515,p0=516,m0=517,Ou=518,g0=519,cd=35044;var ud="300 es",Ls=2e3,Pa=2001;function Zp(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function $p(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function To(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function x0(){let i=To("canvas");return i.style.display="block",i}var nf={},Ia=null;function wo(...i){let e="THREE."+i.shift();Ia?Ia("log",e,...i):console.log(e,...i)}function v0(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ut(...i){i=v0(i);let e="THREE."+i.shift();if(Ia)Ia("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ft(...i){i=v0(i);let e="THREE."+i.shift();if(Ia)Ia("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Wr(...i){let e=i.join(" ");e in nf||(nf[e]=!0,Ut(...i))}function y0(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var _0={[mc]:gc,[xc]:_c,[vc]:Mc,[Ca]:yc,[gc]:mc,[_c]:xc,[Mc]:vc,[yc]:Ca},Ys=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},wi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var pc=Math.PI/180,Ao=180/Math.PI;function cr(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(wi[i&255]+wi[i>>8&255]+wi[i>>16&255]+wi[i>>24&255]+"-"+wi[e&255]+wi[e>>8&255]+"-"+wi[e>>16&15|64]+wi[e>>24&255]+"-"+wi[t&63|128]+wi[t>>8&255]+"-"+wi[t>>16&255]+wi[t>>24&255]+wi[n&255]+wi[n>>8&255]+wi[n>>16&255]+wi[n>>24&255]).toLowerCase()}function on(i,e,t){return Math.max(e,Math.min(t,i))}function Jp(i,e){return(i%e+e)%e}function oh(i,e,t){return(1-t)*i+t*e}function ks(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Sn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var gd=class gd{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=on(this.x,e.x,t.x),this.y=on(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=on(this.x,e,t),this.y=on(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(on(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(on(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};gd.prototype.isVector2=!0;var He=gd,bn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],p=n[s+3],d=r[a+0],u=r[a+1],f=r[a+2],v=r[a+3];if(p!==v||c!==d||l!==u||h!==f){let m=c*d+l*u+h*f+p*v;m<0&&(d=-d,u=-u,f=-f,v=-v,m=-m);let g=1-o;if(m<.9995){let M=Math.acos(m),S=Math.sin(M);g=Math.sin(g*M)/S,o=Math.sin(o*M)/S,c=c*g+d*o,l=l*g+u*o,h=h*g+f*o,p=p*g+v*o}else{c=c*g+d*o,l=l*g+u*o,h=h*g+f*o,p=p*g+v*o;let M=1/Math.sqrt(c*c+l*l+h*h+p*p);c*=M,l*=M,h*=M,p*=M}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],p=r[a],d=r[a+1],u=r[a+2],f=r[a+3];return e[t]=o*f+h*p+c*u-l*d,e[t+1]=c*f+h*d+l*p-o*u,e[t+2]=l*f+h*u+o*d-c*p,e[t+3]=h*f-o*p-c*d-l*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),p=o(r/2),d=c(n/2),u=c(s/2),f=c(r/2);switch(a){case"XYZ":this._x=d*h*p+l*u*f,this._y=l*u*p-d*h*f,this._z=l*h*f+d*u*p,this._w=l*h*p-d*u*f;break;case"YXZ":this._x=d*h*p+l*u*f,this._y=l*u*p-d*h*f,this._z=l*h*f-d*u*p,this._w=l*h*p+d*u*f;break;case"ZXY":this._x=d*h*p-l*u*f,this._y=l*u*p+d*h*f,this._z=l*h*f+d*u*p,this._w=l*h*p-d*u*f;break;case"ZYX":this._x=d*h*p-l*u*f,this._y=l*u*p+d*h*f,this._z=l*h*f-d*u*p,this._w=l*h*p+d*u*f;break;case"YZX":this._x=d*h*p+l*u*f,this._y=l*u*p+d*h*f,this._z=l*h*f-d*u*p,this._w=l*h*p-d*u*f;break;case"XZY":this._x=d*h*p-l*u*f,this._y=l*u*p-d*h*f,this._z=l*h*f+d*u*p,this._w=l*h*p+d*u*f;break;default:Ut("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],p=t[10],d=n+o+p;if(d>0){let u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(h-c)*u,this._y=(r-l)*u,this._z=(a-s)*u}else if(n>o&&n>p){let u=2*Math.sqrt(1+n-o-p);this._w=(h-c)/u,this._x=.25*u,this._y=(s+a)/u,this._z=(r+l)/u}else if(o>p){let u=2*Math.sqrt(1+o-n-p);this._w=(r-l)/u,this._x=(s+a)/u,this._y=.25*u,this._z=(c+h)/u}else{let u=2*Math.sqrt(1+p-n-o);this._w=(a-s)/u,this._x=(r+l)/u,this._y=(c+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(on(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},xd=class xd{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(sf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(sf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),h=2*(o*t-r*s),p=2*(r*n-a*t);return this.x=t+c*l+a*p-o*h,this.y=n+c*h+o*l-r*p,this.z=s+c*p+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=on(this.x,e.x,t.x),this.y=on(this.y,e.y,t.y),this.z=on(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=on(this.x,e,t),this.y=on(this.y,e,t),this.z=on(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(on(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return lh.copy(this).projectOnVector(e),this.sub(lh)}reflect(e){return this.sub(lh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(on(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};xd.prototype.isVector3=!0;var N=xd,lh=new N,sf=new bn,vd=class vd{constructor(e,t,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],p=n[7],d=n[2],u=n[5],f=n[8],v=s[0],m=s[3],g=s[6],M=s[1],S=s[4],y=s[7],_=s[2],T=s[5],A=s[8];return r[0]=a*v+o*M+c*_,r[3]=a*m+o*S+c*T,r[6]=a*g+o*y+c*A,r[1]=l*v+h*M+p*_,r[4]=l*m+h*S+p*T,r[7]=l*g+h*y+p*A,r[2]=d*v+u*M+f*_,r[5]=d*m+u*S+f*T,r[8]=d*g+u*y+f*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],p=h*a-o*l,d=o*c-h*r,u=l*r-a*c,f=t*p+n*d+s*u;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/f;return e[0]=p*v,e[1]=(s*l-h*n)*v,e[2]=(o*n-s*a)*v,e[3]=d*v,e[4]=(h*t-s*c)*v,e[5]=(s*r-o*t)*v,e[6]=u*v,e[7]=(n*c-l*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return Wr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ch.makeScale(e,t)),this}rotate(e){return Wr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ch.makeRotation(-e)),this}translate(e,t){return Wr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ch.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};vd.prototype.isMatrix3=!0;var Xt=vd,ch=new Xt,rf=new Xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),af=new Xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Kp(){let i={enabled:!0,workingColorSpace:So,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===gn&&(s.r=ur(s.r),s.g=ur(s.g),s.b=ur(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===gn&&(s.r=Ra(s.r),s.g=Ra(s.g),s.b=Ra(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Us?bo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Wr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Wr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[So]:{primaries:e,whitePoint:n,transfer:bo,toXYZ:rf,fromXYZ:af,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:fn},outputColorSpaceConfig:{drawingBufferColorSpace:fn}},[fn]:{primaries:e,whitePoint:n,transfer:gn,toXYZ:rf,fromXYZ:af,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:fn}}}),i}var dn=Kp();function ur(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ra(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ua,bc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ua===void 0&&(ua=To("canvas")),ua.width=e.width,ua.height=e.height;let s=ua.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=ua}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=To("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ur(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ur(t[n]/255)*255):t[n]=ur(t[n]);return{data:t,width:e.width,height:e.height}}else return Ut("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Qp=0,Da=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Qp++}),this.uuid=cr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(uh(s[a].image)):r.push(uh(s[a]))}else r=uh(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function uh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?bc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ut("Texture: Unable to serialize Texture."),{})}var jp=0,hh=new N,Gi=class i extends Ys{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=ds,s=ds,r=ei,a=Ks,o=Ei,c=li,l=i.DEFAULT_ANISOTROPY,h=Us){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jp++}),this.uuid=cr(),this.name="",this.source=new Da(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(hh).x}get height(){return this.source.getSize(hh).y}get depth(){return this.source.getSize(hh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ut(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ut(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==td)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gn:e.x=e.x-Math.floor(e.x);break;case ds:e.x=e.x<0?0:1;break;case Ec:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gn:e.y=e.y-Math.floor(e.y);break;case ds:e.y=e.y<0?0:1;break;case Ec:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Gi.DEFAULT_IMAGE=null;Gi.DEFAULT_MAPPING=td;Gi.DEFAULT_ANISOTROPY=1;var yd=class yd{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],p=c[8],d=c[1],u=c[5],f=c[9],v=c[2],m=c[6],g=c[10];if(Math.abs(h-d)<.01&&Math.abs(p-v)<.01&&Math.abs(f-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(p+v)<.1&&Math.abs(f+m)<.1&&Math.abs(l+u+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(l+1)/2,y=(u+1)/2,_=(g+1)/2,T=(h+d)/4,A=(p+v)/4,x=(f+m)/4;return S>y&&S>_?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=T/n,r=A/n):y>_?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=T/s,r=x/s):_<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(_),n=A/r,s=x/r),this.set(n,s,r,t),this}let M=Math.sqrt((m-f)*(m-f)+(p-v)*(p-v)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(m-f)/M,this.y=(p-v)/M,this.z=(d-h)/M,this.w=Math.acos((l+u+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=on(this.x,e.x,t.x),this.y=on(this.y,e.y,t.y),this.z=on(this.z,e.z,t.z),this.w=on(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=on(this.x,e,t),this.y=on(this.y,e,t),this.z=on(this.z,e,t),this.w=on(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(on(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};yd.prototype.isVector4=!0;var Rn=yd,Tc=class extends Ys{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ei,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Rn(0,0,e,t),this.scissorTest=!1,this.viewport=new Rn(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new Gi(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:ei,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Da(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Cn=class extends Tc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ro=class extends Gi{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=$n,this.minFilter=$n,this.wrapR=ds,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var wc=class extends Gi{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=$n,this.minFilter=$n,this.wrapR=ds,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Zc=class Zc{constructor(e,t,n,s,r,a,o,c,l,h,p,d,u,f,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,h,p,d,u,f,v,m)}set(e,t,n,s,r,a,o,c,l,h,p,d,u,f,v,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=r,g[5]=a,g[9]=o,g[13]=c,g[2]=l,g[6]=h,g[10]=p,g[14]=d,g[3]=u,g[7]=f,g[11]=v,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Zc().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/ha.setFromMatrixColumn(e,0).length(),r=1/ha.setFromMatrixColumn(e,1).length(),a=1/ha.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),p=Math.sin(r);if(e.order==="XYZ"){let d=a*h,u=a*p,f=o*h,v=o*p;t[0]=c*h,t[4]=-c*p,t[8]=l,t[1]=u+f*l,t[5]=d-v*l,t[9]=-o*c,t[2]=v-d*l,t[6]=f+u*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*h,u=c*p,f=l*h,v=l*p;t[0]=d+v*o,t[4]=f*o-u,t[8]=a*l,t[1]=a*p,t[5]=a*h,t[9]=-o,t[2]=u*o-f,t[6]=v+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*h,u=c*p,f=l*h,v=l*p;t[0]=d-v*o,t[4]=-a*p,t[8]=f+u*o,t[1]=u+f*o,t[5]=a*h,t[9]=v-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*h,u=a*p,f=o*h,v=o*p;t[0]=c*h,t[4]=f*l-u,t[8]=d*l+v,t[1]=c*p,t[5]=v*l+d,t[9]=u*l-f,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,u=a*l,f=o*c,v=o*l;t[0]=c*h,t[4]=v-d*p,t[8]=f*p+u,t[1]=p,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=u*p+f,t[10]=d-v*p}else if(e.order==="XZY"){let d=a*c,u=a*l,f=o*c,v=o*l;t[0]=c*h,t[4]=-p,t[8]=l*h,t[1]=d*p+v,t[5]=a*h,t[9]=u*p-f,t[2]=f*p-u,t[6]=o*h,t[10]=v*p+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(em,e,tm)}lookAt(e,t,n){let s=this.elements;return ji.subVectors(e,t),ji.lengthSq()===0&&(ji.z=1),ji.normalize(),_r.crossVectors(n,ji),_r.lengthSq()===0&&(Math.abs(n.z)===1?ji.x+=1e-4:ji.z+=1e-4,ji.normalize(),_r.crossVectors(n,ji)),_r.normalize(),Nl.crossVectors(ji,_r),s[0]=_r.x,s[4]=Nl.x,s[8]=ji.x,s[1]=_r.y,s[5]=Nl.y,s[9]=ji.y,s[2]=_r.z,s[6]=Nl.z,s[10]=ji.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],p=n[5],d=n[9],u=n[13],f=n[2],v=n[6],m=n[10],g=n[14],M=n[3],S=n[7],y=n[11],_=n[15],T=s[0],A=s[4],x=s[8],w=s[12],C=s[1],F=s[5],b=s[9],L=s[13],P=s[2],H=s[6],Z=s[10],V=s[14],W=s[3],G=s[7],k=s[11],Y=s[15];return r[0]=a*T+o*C+c*P+l*W,r[4]=a*A+o*F+c*H+l*G,r[8]=a*x+o*b+c*Z+l*k,r[12]=a*w+o*L+c*V+l*Y,r[1]=h*T+p*C+d*P+u*W,r[5]=h*A+p*F+d*H+u*G,r[9]=h*x+p*b+d*Z+u*k,r[13]=h*w+p*L+d*V+u*Y,r[2]=f*T+v*C+m*P+g*W,r[6]=f*A+v*F+m*H+g*G,r[10]=f*x+v*b+m*Z+g*k,r[14]=f*w+v*L+m*V+g*Y,r[3]=M*T+S*C+y*P+_*W,r[7]=M*A+S*F+y*H+_*G,r[11]=M*x+S*b+y*Z+_*k,r[15]=M*w+S*L+y*V+_*Y,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],p=e[6],d=e[10],u=e[14],f=e[3],v=e[7],m=e[11],g=e[15],M=c*u-l*d,S=o*u-l*p,y=o*d-c*p,_=a*u-l*h,T=a*d-c*h,A=a*p-o*h;return t*(v*M-m*S+g*y)-n*(f*M-m*_+g*T)+s*(f*S-v*_+g*A)-r*(f*y-v*T+m*A)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],h=e[10];return t*(a*h-o*l)-n*(r*h-o*c)+s*(r*l-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],p=e[9],d=e[10],u=e[11],f=e[12],v=e[13],m=e[14],g=e[15],M=t*o-n*a,S=t*c-s*a,y=t*l-r*a,_=n*c-s*o,T=n*l-r*o,A=s*l-r*c,x=h*v-p*f,w=h*m-d*f,C=h*g-u*f,F=p*m-d*v,b=p*g-u*v,L=d*g-u*m,P=M*L-S*b+y*F+_*C-T*w+A*x;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let H=1/P;return e[0]=(o*L-c*b+l*F)*H,e[1]=(s*b-n*L-r*F)*H,e[2]=(v*A-m*T+g*_)*H,e[3]=(d*T-p*A-u*_)*H,e[4]=(c*C-a*L-l*w)*H,e[5]=(t*L-s*C+r*w)*H,e[6]=(m*y-f*A-g*S)*H,e[7]=(h*A-d*y+u*S)*H,e[8]=(a*b-o*C+l*x)*H,e[9]=(n*C-t*b-r*x)*H,e[10]=(f*T-v*y+g*M)*H,e[11]=(p*y-h*T-u*M)*H,e[12]=(o*w-a*F-c*x)*H,e[13]=(t*F-n*w+s*x)*H,e[14]=(v*S-f*_-m*M)*H,e[15]=(h*_-p*S+d*M)*H,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,p=o+o,d=r*l,u=r*h,f=r*p,v=a*h,m=a*p,g=o*p,M=c*l,S=c*h,y=c*p,_=n.x,T=n.y,A=n.z;return s[0]=(1-(v+g))*_,s[1]=(u+y)*_,s[2]=(f-S)*_,s[3]=0,s[4]=(u-y)*T,s[5]=(1-(d+g))*T,s[6]=(m+M)*T,s[7]=0,s[8]=(f+S)*A,s[9]=(m-M)*A,s[10]=(1-(d+v))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=ha.set(s[0],s[1],s[2]).length(),o=ha.set(s[4],s[5],s[6]).length(),c=ha.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Ps.copy(this);let l=1/a,h=1/o,p=1/c;return Ps.elements[0]*=l,Ps.elements[1]*=l,Ps.elements[2]*=l,Ps.elements[4]*=h,Ps.elements[5]*=h,Ps.elements[6]*=h,Ps.elements[8]*=p,Ps.elements[9]*=p,Ps.elements[10]*=p,t.setFromRotationMatrix(Ps),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,s,r,a,o=Ls,c=!1){let l=this.elements,h=2*r/(t-e),p=2*r/(n-s),d=(t+e)/(t-e),u=(n+s)/(n-s),f,v;if(c)f=r/(a-r),v=a*r/(a-r);else if(o===Ls)f=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===Pa)f=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=p,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Ls,c=!1){let l=this.elements,h=2/(t-e),p=2/(n-s),d=-(t+e)/(t-e),u=-(n+s)/(n-s),f,v;if(c)f=1/(a-r),v=a/(a-r);else if(o===Ls)f=-2/(a-r),v=-(a+r)/(a-r);else if(o===Pa)f=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=p,l[9]=0,l[13]=u,l[2]=0,l[6]=0,l[10]=f,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Zc.prototype.isMatrix4=!0;var Mt=Zc,ha=new N,Ps=new Mt,em=new N(0,0,0),tm=new N(1,1,1),_r=new N,Nl=new N,ji=new N,of=new Mt,lf=new bn,ki=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],p=s[2],d=s[6],u=s[10];switch(t){case"XYZ":this._y=Math.asin(on(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-on(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(on(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-p,u),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-on(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(d,u),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(on(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-on(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:Ut("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return of.makeRotationFromQuaternion(e),this.setFromRotationMatrix(of,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return lf.setFromEuler(this),this.setFromQuaternion(lf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ki.DEFAULT_ORDER="XYZ";var La=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},nm=0,cf=new N,da=new bn,sr=new Mt,Ul=new N,lo=new N,im=new N,sm=new bn,uf=new N(1,0,0),hf=new N(0,1,0),df=new N(0,0,1),ff={type:"added"},rm={type:"removed"},fa={type:"childadded",child:null},dh={type:"childremoved",child:null},kn=class i extends Ys{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nm++}),this.uuid=cr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new N,t=new ki,n=new bn,s=new N(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Mt},normalMatrix:{value:new Xt}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new La,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return da.setFromAxisAngle(e,t),this.quaternion.multiply(da),this}rotateOnWorldAxis(e,t){return da.setFromAxisAngle(e,t),this.quaternion.premultiply(da),this}rotateX(e){return this.rotateOnAxis(uf,e)}rotateY(e){return this.rotateOnAxis(hf,e)}rotateZ(e){return this.rotateOnAxis(df,e)}translateOnAxis(e,t){return cf.copy(e).applyQuaternion(this.quaternion),this.position.add(cf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(uf,e)}translateY(e){return this.translateOnAxis(hf,e)}translateZ(e){return this.translateOnAxis(df,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(sr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ul.copy(e):Ul.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),lo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?sr.lookAt(lo,Ul,this.up):sr.lookAt(Ul,lo,this.up),this.quaternion.setFromRotationMatrix(sr),s&&(sr.extractRotation(s.matrixWorld),da.setFromRotationMatrix(sr),this.quaternion.premultiply(da.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ft("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ff),fa.child=e,this.dispatchEvent(fa),fa.child=null):Ft("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(rm),dh.child=e,this.dispatchEvent(dh),dh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),sr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),sr.multiply(e.parent.matrixWorld)),e.applyMatrix4(sr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ff),fa.child=e,this.dispatchEvent(fa),fa.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lo,e,im),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lo,sm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let p=c[l];r(e.shapes,p)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),p=a(e.shapes),d=a(e.skeletons),u=a(e.animations),f=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),p.length>0&&(n.shapes=p),d.length>0&&(n.skeletons=d),u.length>0&&(n.animations=u),f.length>0&&(n.nodes=f)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};kn.DEFAULT_UP=new N(0,1,0);kn.DEFAULT_MATRIX_AUTO_UPDATE=!0;kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var at=class extends kn{constructor(){super(),this.isGroup=!0,this.type="Group"}},am={type:"move"},Na=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new at,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new at,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new at,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,n),g=this._getHandJoint(l,v);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=l.joints["index-finger-tip"],p=l.joints["thumb-tip"],d=h.position.distanceTo(p.position),u=.02,f=.005;l.inputState.pinching&&d>u+f?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=u-f&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(am)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new at;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},M0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mr={h:0,s:0,l:0},Fl={h:0,s:0,l:0};function fh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var it=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dn.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=dn.workingColorSpace){return this.r=e,this.g=t,this.b=n,dn.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=dn.workingColorSpace){if(e=Jp(e,1),t=on(t,0,1),n=on(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=fh(a,r,e+1/3),this.g=fh(a,r,e),this.b=fh(a,r,e-1/3)}return dn.colorSpaceToWorking(this,s),this}setStyle(e,t=fn){function n(r){r!==void 0&&parseFloat(r)<1&&Ut("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ut("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ut("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=fn){let n=M0[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ut("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ur(e.r),this.g=ur(e.g),this.b=ur(e.b),this}copyLinearToSRGB(e){return this.r=Ra(e.r),this.g=Ra(e.g),this.b=Ra(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fn){return dn.workingToColorSpace(Ai.copy(this),e),Math.round(on(Ai.r*255,0,255))*65536+Math.round(on(Ai.g*255,0,255))*256+Math.round(on(Ai.b*255,0,255))}getHexString(e=fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dn.workingColorSpace){dn.workingToColorSpace(Ai.copy(this),t);let n=Ai.r,s=Ai.g,r=Ai.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let p=a-o;switch(l=h<=.5?p/(a+o):p/(2-a-o),a){case n:c=(s-r)/p+(s<r?6:0);break;case s:c=(r-n)/p+2;break;case r:c=(n-s)/p+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=dn.workingColorSpace){return dn.workingToColorSpace(Ai.copy(this),t),e.r=Ai.r,e.g=Ai.g,e.b=Ai.b,e}getStyle(e=fn){dn.workingToColorSpace(Ai.copy(this),e);let t=Ai.r,n=Ai.g,s=Ai.b;return e!==fn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Mr),this.setHSL(Mr.h+e,Mr.s+t,Mr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Mr),e.getHSL(Fl);let n=oh(Mr.h,Fl.h,t),s=oh(Mr.s,Fl.s,t),r=oh(Mr.l,Fl.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ai=new it;it.NAMES=M0;var Co=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new it(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Xr=class extends kn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ki,this.environmentIntensity=1,this.environmentRotation=new ki,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Is=new N,rr=new N,ph=new N,ar=new N,pa=new N,ma=new N,pf=new N,mh=new N,gh=new N,xh=new N,vh=new Rn,yh=new Rn,_h=new Rn,Vs=class i{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Is.subVectors(e,t),s.cross(Is);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Is.subVectors(s,t),rr.subVectors(n,t),ph.subVectors(e,t);let a=Is.dot(Is),o=Is.dot(rr),c=Is.dot(ph),l=rr.dot(rr),h=rr.dot(ph),p=a*l-o*o;if(p===0)return r.set(0,0,0),null;let d=1/p,u=(l*c-o*h)*d,f=(a*h-o*c)*d;return r.set(1-u-f,f,u)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ar)===null?!1:ar.x>=0&&ar.y>=0&&ar.x+ar.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,ar)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ar.x),c.addScaledVector(a,ar.y),c.addScaledVector(o,ar.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return vh.setScalar(0),yh.setScalar(0),_h.setScalar(0),vh.fromBufferAttribute(e,t),yh.fromBufferAttribute(e,n),_h.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(vh,r.x),a.addScaledVector(yh,r.y),a.addScaledVector(_h,r.z),a}static isFrontFacing(e,t,n,s){return Is.subVectors(n,t),rr.subVectors(e,t),Is.cross(rr).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Is.subVectors(this.c,this.b),rr.subVectors(this.a,this.b),Is.cross(rr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;pa.subVectors(s,n),ma.subVectors(r,n),mh.subVectors(e,n);let c=pa.dot(mh),l=ma.dot(mh);if(c<=0&&l<=0)return t.copy(n);gh.subVectors(e,s);let h=pa.dot(gh),p=ma.dot(gh);if(h>=0&&p<=h)return t.copy(s);let d=c*p-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(pa,a);xh.subVectors(e,r);let u=pa.dot(xh),f=ma.dot(xh);if(f>=0&&u<=f)return t.copy(r);let v=u*l-c*f;if(v<=0&&l>=0&&f<=0)return o=l/(l-f),t.copy(n).addScaledVector(ma,o);let m=h*f-u*p;if(m<=0&&p-h>=0&&u-f>=0)return pf.subVectors(r,s),o=(p-h)/(p-h+(u-f)),t.copy(s).addScaledVector(pf,o);let g=1/(m+v+d);return a=v*g,o=d*g,t.copy(n).addScaledVector(pa,a).addScaledVector(ma,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},qs=class{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ds.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ds.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Ds.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Ds):Ds.fromBufferAttribute(r,a),Ds.applyMatrix4(e.matrixWorld),this.expandByPoint(Ds);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ol.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ol.copy(n.boundingBox)),Ol.applyMatrix4(e.matrixWorld),this.union(Ol)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ds),Ds.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(co),Bl.subVectors(this.max,co),ga.subVectors(e.a,co),xa.subVectors(e.b,co),va.subVectors(e.c,co),Er.subVectors(xa,ga),Sr.subVectors(va,xa),zr.subVectors(ga,va);let t=[0,-Er.z,Er.y,0,-Sr.z,Sr.y,0,-zr.z,zr.y,Er.z,0,-Er.x,Sr.z,0,-Sr.x,zr.z,0,-zr.x,-Er.y,Er.x,0,-Sr.y,Sr.x,0,-zr.y,zr.x,0];return!Mh(t,ga,xa,va,Bl)||(t=[1,0,0,0,1,0,0,0,1],!Mh(t,ga,xa,va,Bl))?!1:(Hl.crossVectors(Er,Sr),t=[Hl.x,Hl.y,Hl.z],Mh(t,ga,xa,va,Bl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ds).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ds).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(or[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),or[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),or[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),or[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),or[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),or[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),or[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),or[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(or),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},or=[new N,new N,new N,new N,new N,new N,new N,new N],Ds=new N,Ol=new qs,ga=new N,xa=new N,va=new N,Er=new N,Sr=new N,zr=new N,co=new N,Bl=new N,Hl=new N,Gr=new N;function Mh(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Gr.fromArray(i,r);let o=s.x*Math.abs(Gr.x)+s.y*Math.abs(Gr.y)+s.z*Math.abs(Gr.z),c=e.dot(Gr),l=t.dot(Gr),h=n.dot(Gr);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var jn=new N,zl=new He,om=0,Ot=class extends Ys{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:om++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=cd,this.updateRanges=[],this.gpuType=vs,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)zl.fromBufferAttribute(this,t),zl.applyMatrix3(e),this.setXY(t,zl.x,zl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)jn.fromBufferAttribute(this,t),jn.applyMatrix3(e),this.setXYZ(t,jn.x,jn.y,jn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)jn.fromBufferAttribute(this,t),jn.applyMatrix4(e),this.setXYZ(t,jn.x,jn.y,jn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)jn.fromBufferAttribute(this,t),jn.applyNormalMatrix(e),this.setXYZ(t,jn.x,jn.y,jn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)jn.fromBufferAttribute(this,t),jn.transformDirection(e),this.setXYZ(t,jn.x,jn.y,jn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ks(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Sn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ks(t,this.array)),t}setX(e,t){return this.normalized&&(t=Sn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ks(t,this.array)),t}setY(e,t){return this.normalized&&(t=Sn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ks(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Sn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ks(t,this.array)),t}setW(e,t){return this.normalized&&(t=Sn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Sn(t,this.array),n=Sn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Sn(t,this.array),n=Sn(n,this.array),s=Sn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Sn(t,this.array),n=Sn(n,this.array),s=Sn(s,this.array),r=Sn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Po=class extends Ot{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Io=class extends Ot{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Dt=class extends Ot{constructor(e,t,n){super(new Float32Array(e),t,n)}},lm=new qs,uo=new N,Eh=new N,Zs=class{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):lm.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;uo.subVectors(e,this.center);let t=uo.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(uo,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Eh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(uo.copy(e.center).add(Eh)),this.expandByPoint(uo.copy(e.center).sub(Eh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},cm=0,hs=new Mt,Sh=new kn,ya=new N,es=new qs,ho=new qs,pi=new N,kt=class i extends Ys{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cm++}),this.uuid=cr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Zp(e)?Io:Po)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Xt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return hs.makeRotationFromQuaternion(e),this.applyMatrix4(hs),this}rotateX(e){return hs.makeRotationX(e),this.applyMatrix4(hs),this}rotateY(e){return hs.makeRotationY(e),this.applyMatrix4(hs),this}rotateZ(e){return hs.makeRotationZ(e),this.applyMatrix4(hs),this}translate(e,t,n){return hs.makeTranslation(e,t,n),this.applyMatrix4(hs),this}scale(e,t,n){return hs.makeScale(e,t,n),this.applyMatrix4(hs),this}lookAt(e){return Sh.lookAt(e),Sh.updateMatrix(),this.applyMatrix4(Sh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ya).negate(),this.translate(ya.x,ya.y,ya.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Dt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ut("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qs);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ft("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];es.setFromBufferAttribute(r),this.morphTargetsRelative?(pi.addVectors(this.boundingBox.min,es.min),this.boundingBox.expandByPoint(pi),pi.addVectors(this.boundingBox.max,es.max),this.boundingBox.expandByPoint(pi)):(this.boundingBox.expandByPoint(es.min),this.boundingBox.expandByPoint(es.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ft('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zs);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ft("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){let n=this.boundingSphere.center;if(es.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];ho.setFromBufferAttribute(o),this.morphTargetsRelative?(pi.addVectors(es.min,ho.min),es.expandByPoint(pi),pi.addVectors(es.max,ho.max),es.expandByPoint(pi)):(es.expandByPoint(ho.min),es.expandByPoint(ho.max))}es.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)pi.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(pi));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)pi.fromBufferAttribute(o,l),c&&(ya.fromBufferAttribute(e,l),pi.add(ya)),s=Math.max(s,n.distanceToSquared(pi))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ft('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ft("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Ot(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let x=0;x<n.count;x++)o[x]=new N,c[x]=new N;let l=new N,h=new N,p=new N,d=new He,u=new He,f=new He,v=new N,m=new N;function g(x,w,C){l.fromBufferAttribute(n,x),h.fromBufferAttribute(n,w),p.fromBufferAttribute(n,C),d.fromBufferAttribute(r,x),u.fromBufferAttribute(r,w),f.fromBufferAttribute(r,C),h.sub(l),p.sub(l),u.sub(d),f.sub(d);let F=1/(u.x*f.y-f.x*u.y);isFinite(F)&&(v.copy(h).multiplyScalar(f.y).addScaledVector(p,-u.y).multiplyScalar(F),m.copy(p).multiplyScalar(u.x).addScaledVector(h,-f.x).multiplyScalar(F),o[x].add(v),o[w].add(v),o[C].add(v),c[x].add(m),c[w].add(m),c[C].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let x=0,w=M.length;x<w;++x){let C=M[x],F=C.start,b=C.count;for(let L=F,P=F+b;L<P;L+=3)g(e.getX(L+0),e.getX(L+1),e.getX(L+2))}let S=new N,y=new N,_=new N,T=new N;function A(x){_.fromBufferAttribute(s,x),T.copy(_);let w=o[x];S.copy(w),S.sub(_.multiplyScalar(_.dot(w))).normalize(),y.crossVectors(T,w);let F=y.dot(c[x])<0?-1:1;a.setXYZW(x,S.x,S.y,S.z,F)}for(let x=0,w=M.length;x<w;++x){let C=M[x],F=C.start,b=C.count;for(let L=F,P=F+b;L<P;L+=3)A(e.getX(L+0)),A(e.getX(L+1)),A(e.getX(L+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Ot(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,u=n.count;d<u;d++)n.setXYZ(d,0,0,0);let s=new N,r=new N,a=new N,o=new N,c=new N,l=new N,h=new N,p=new N;if(e)for(let d=0,u=e.count;d<u;d+=3){let f=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,f),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),h.subVectors(a,r),p.subVectors(s,r),h.cross(p),o.fromBufferAttribute(n,f),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,u=t.count;d<u;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),p.subVectors(s,r),h.cross(p),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)pi.fromBufferAttribute(e,t),pi.normalize(),e.setXYZ(t,pi.x,pi.y,pi.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,p=o.normalized,d=new l.constructor(c.length*h),u=0,f=0;for(let v=0,m=c.length;v<m;v++){o.isInterleavedBufferAttribute?u=c[v]*o.data.stride+o.offset:u=c[v]*h;for(let g=0;g<h;g++)d[f++]=l[u++]}return new Ot(d,h,p)}if(this.index===null)return Ut("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,p=l.length;h<p;h++){let d=l[h],u=e(d,n);c.push(u)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let p=0,d=l.length;p<d;p++){let u=l[p];h.push(u.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],p=r[l];for(let d=0,u=p.length;d<u;d++)h.push(p[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let p=a[l];this.addGroup(p.start,p.count,p.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Do=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=cd,this.updateRanges=[],this.version=0,this.uuid=cr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=cr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=cr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},zi=new N,Ua=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)zi.fromBufferAttribute(this,t),zi.applyMatrix4(e),this.setXYZ(t,zi.x,zi.y,zi.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)zi.fromBufferAttribute(this,t),zi.applyNormalMatrix(e),this.setXYZ(t,zi.x,zi.y,zi.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)zi.fromBufferAttribute(this,t),zi.transformDirection(e),this.setXYZ(t,zi.x,zi.y,zi.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ks(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Sn(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Sn(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Sn(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Sn(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Sn(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ks(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ks(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ks(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ks(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Sn(t,this.array),n=Sn(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Sn(t,this.array),n=Sn(n,this.array),s=Sn(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Sn(t,this.array),n=Sn(n,this.array),s=Sn(s,this.array),r=Sn(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){wo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Ot(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){wo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},bh=new N,um=new N,hm=new Xt,ts=class{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=bh.subVectors(n,t).cross(um.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(bh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||hm.getNormalMatrix(e),s=this.coplanarPoint(bh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},dm=0,fs=class extends Ys{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dm++}),this.uuid=cr(),this.name="",this.type="Material",this.blending=Dr,this.side=Ir,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qh,this.blendDst=jh,this.blendEquation=xs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=Ca,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=u0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fc,this.stencilZFail=fc,this.stencilZPass=fc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ut(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ut(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new it().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new ts().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new He().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new He().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},ri=class extends fs{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new it(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},_a,fo=new N,Ma=new N,Ea=new N,Sa=new He,po=new He,E0=new Mt,Gl=new N,mo=new N,kl=new N,mf=new He,Th=new He,gf=new He,gi=class extends kn{constructor(e=new ri){if(super(),this.isSprite=!0,this.type="Sprite",_a===void 0){_a=new kt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Do(t,5);_a.setIndex([0,1,2,0,2,3]),_a.setAttribute("position",new Ua(n,3,0,!1)),_a.setAttribute("uv",new Ua(n,2,3,!1))}this.geometry=_a,this.material=e,this.center=new He(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Ft('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ma.setFromMatrixScale(this.matrixWorld),E0.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ea.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ma.multiplyScalar(-Ea.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Vl(Gl.set(-.5,-.5,0),Ea,a,Ma,s,r),Vl(mo.set(.5,-.5,0),Ea,a,Ma,s,r),Vl(kl.set(.5,.5,0),Ea,a,Ma,s,r),mf.set(0,0),Th.set(1,0),gf.set(1,1);let o=e.ray.intersectTriangle(Gl,mo,kl,!1,fo);if(o===null&&(Vl(mo.set(-.5,.5,0),Ea,a,Ma,s,r),Th.set(0,1),o=e.ray.intersectTriangle(Gl,kl,mo,!1,fo),o===null))return;let c=e.ray.origin.distanceTo(fo);c<e.near||c>e.far||t.push({distance:c,point:fo.clone(),uv:Vs.getInterpolation(fo,Gl,mo,kl,mf,Th,gf,new He),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Vl(i,e,t,n,s,r){Sa.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(po.x=r*Sa.x-s*Sa.y,po.y=s*Sa.x+r*Sa.y):po.copy(Sa),i.copy(e),i.x+=po.x,i.y+=po.y,i.applyMatrix4(E0)}var lr=new N,wh=new N,Wl=new N,Xl=new N,Yr=class{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,lr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=lr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(lr.copy(this.origin).addScaledVector(this.direction,t),lr.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){wh.copy(e).add(t).multiplyScalar(.5),Wl.copy(t).sub(e).normalize(),Xl.copy(this.origin).sub(wh);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Wl),o=Xl.dot(this.direction),c=-Xl.dot(Wl),l=Xl.lengthSq(),h=Math.abs(1-a*a),p,d,u,f;if(h>0)if(p=a*c-o,d=a*o-c,f=r*h,p>=0)if(d>=-f)if(d<=f){let v=1/h;p*=v,d*=v,u=p*(p+a*d+2*o)+d*(a*p+d+2*c)+l}else d=r,p=Math.max(0,-(a*d+o)),u=-p*p+d*(d+2*c)+l;else d=-r,p=Math.max(0,-(a*d+o)),u=-p*p+d*(d+2*c)+l;else d<=-f?(p=Math.max(0,-(-a*r+o)),d=p>0?-r:Math.min(Math.max(-r,-c),r),u=-p*p+d*(d+2*c)+l):d<=f?(p=0,d=Math.min(Math.max(-r,-c),r),u=d*(d+2*c)+l):(p=Math.max(0,-(a*r+o)),d=p>0?r:Math.min(Math.max(-r,-c),r),u=-p*p+d*(d+2*c)+l);else d=a>0?-r:r,p=Math.max(0,-(a*d+o)),u=-p*p+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(wh).addScaledVector(Wl,d),u}intersectSphere(e,t){if(e.radius<0)return null;lr.subVectors(e.center,this.origin);let n=lr.dot(this.direction),s=lr.dot(lr)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),p>=0?(o=(e.min.z-d.z)*p,c=(e.max.z-d.z)*p):(o=(e.max.z-d.z)*p,c=(e.min.z-d.z)*p),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,lr)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,p=e.x-a.x,d=e.y-a.y,u=e.z-a.z,f=t.x-a.x,v=t.y-a.y,m=t.z-a.z,g=n.x-a.x,M=n.y-a.y,S=n.z-a.z,y=Math.abs(c),_=Math.abs(l),T=Math.abs(h),A,x,w,C,F,b,L,P,H,Z,V,W;if(y>=_&&y>=T?(w=c,b=p,H=f,W=g,c>=0?(A=l,x=h,C=d,F=u,L=v,P=m,Z=M,V=S):(A=h,x=l,C=u,F=d,L=m,P=v,Z=S,V=M)):_>=T?(w=l,b=d,H=v,W=M,l>=0?(A=h,x=c,C=u,F=p,L=m,P=f,Z=S,V=g):(A=c,x=h,C=p,F=u,L=f,P=m,Z=g,V=S)):(w=h,b=u,H=m,W=S,h>=0?(A=c,x=l,C=p,F=d,L=f,P=v,Z=g,V=M):(A=l,x=c,C=d,F=p,L=v,P=f,Z=M,V=g)),w===0)return null;let G=A/w,k=x/w,Y=1/w,he=C-G*b,we=F-k*b,Ie=L-G*H,Xe=P-k*H,rt=Z-G*W,Q=V-k*W,de=rt*Xe-Q*Ie,Ce=he*Q-we*rt,xe=Ie*we-Xe*he;if(s){if(de<0||Ce<0||xe<0)return null}else if((de<0||Ce<0||xe<0)&&(de>0||Ce>0||xe>0))return null;let Ue=de+Ce+xe;if(Ue===0)return null;let $=Y*(de*b+Ce*H+xe*W);return(Ue>0?$<0:$>0)?null:this.at($/Ue,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},yn=class extends fs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ki,this.combine=ed,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},xf=new Mt,kr=new Yr,Yl=new Zs,vf=new N,ql=new N,Zl=new N,$l=new N,Ah=new N,Jl=new N,yf=new N,Kl=new N,De=class extends kn{constructor(e=new kt,t=new yn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Jl.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],p=r[c];h!==0&&(Ah.fromBufferAttribute(p,e),a?Jl.addScaledVector(Ah,h):Jl.addScaledVector(Ah.sub(t),h))}t.add(Jl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Yl.copy(n.boundingSphere),Yl.applyMatrix4(r),kr.copy(e.ray).recast(e.near),!(Yl.containsPoint(kr.origin)===!1&&(kr.intersectSphere(Yl,vf)===null||kr.origin.distanceToSquared(vf)>(e.far-e.near)**2))&&(xf.copy(r).invert(),kr.copy(e.ray).applyMatrix4(xf),!(n.boundingBox!==null&&kr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,kr)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,p=r.attributes.normal,d=r.groups,u=r.drawRange;if(o!==null)if(Array.isArray(a))for(let f=0,v=d.length;f<v;f++){let m=d[f],g=a[m.materialIndex],M=Math.max(m.start,u.start),S=Math.min(o.count,Math.min(m.start+m.count,u.start+u.count));for(let y=M,_=S;y<_;y+=3){let T=o.getX(y),A=o.getX(y+1),x=o.getX(y+2);s=Ql(this,g,e,n,l,h,p,T,A,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let f=Math.max(0,u.start),v=Math.min(o.count,u.start+u.count);for(let m=f,g=v;m<g;m+=3){let M=o.getX(m),S=o.getX(m+1),y=o.getX(m+2);s=Ql(this,a,e,n,l,h,p,M,S,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let f=0,v=d.length;f<v;f++){let m=d[f],g=a[m.materialIndex],M=Math.max(m.start,u.start),S=Math.min(c.count,Math.min(m.start+m.count,u.start+u.count));for(let y=M,_=S;y<_;y+=3){let T=y,A=y+1,x=y+2;s=Ql(this,g,e,n,l,h,p,T,A,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let f=Math.max(0,u.start),v=Math.min(c.count,u.start+u.count);for(let m=f,g=v;m<g;m+=3){let M=m,S=m+1,y=m+2;s=Ql(this,a,e,n,l,h,p,M,S,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function fm(i,e,t,n,s,r,a,o){let c;if(e.side===vi?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===Ir,o),c===null)return null;Kl.copy(o),Kl.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Kl);return l<t.near||l>t.far?null:{distance:l,point:Kl.clone(),object:i}}function Ql(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,ql),i.getVertexPosition(c,Zl),i.getVertexPosition(l,$l);let h=fm(i,e,t,n,ql,Zl,$l,yf);if(h){let p=new N;Vs.getBarycoord(yf,ql,Zl,$l,p),s&&(h.uv=Vs.getInterpolatedAttribute(s,o,c,l,p,new He)),r&&(h.uv1=Vs.getInterpolatedAttribute(r,o,c,l,p,new He)),a&&(h.normal=Vs.getInterpolatedAttribute(a,o,c,l,p,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new N,materialIndex:0};Vs.getNormal(ql,Zl,$l,d.normal),h.face=d,h.barycoord=p}return h}var ps=class extends Gi{constructor(e=null,t=1,n=1,s,r,a,o,c,l=$n,h=$n,p,d){super(null,a,o,c,l,h,s,r,p,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Fa=class extends Ot{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ba=new Mt,_f=new Mt,jl=[],Mf=new qs,pm=new Mt,go=new De,xo=new Zs,Ri=class extends De{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Fa(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,pm)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new qs),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ba),Mf.copy(e.boundingBox).applyMatrix4(ba),this.boundingBox.union(Mf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Zs),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ba),xo.copy(e.boundingSphere).applyMatrix4(ba),this.boundingSphere.union(xo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(go.geometry=this.geometry,go.material=this.material,go.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xo.copy(this.boundingSphere),xo.applyMatrix4(n),e.ray.intersectsSphere(xo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ba),_f.multiplyMatrices(n,ba),go.matrixWorld=_f,go.raycast(e,jl);for(let a=0,o=jl.length;a<o;a++){let c=jl[a];c.instanceId=r,c.object=this,t.push(c)}jl.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Fa(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ps(new Float32Array(s*this.count),s,this.count,nu,vs));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Vr=new Zs,mm=new He(.5,.5),ec=new N,Oa=class{constructor(e=new ts,t=new ts,n=new ts,s=new ts,r=new ts,a=new ts){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ls,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],p=r[5],d=r[6],u=r[7],f=r[8],v=r[9],m=r[10],g=r[11],M=r[12],S=r[13],y=r[14],_=r[15];if(s[0].setComponents(l-a,u-h,g-f,_-M).normalize(),s[1].setComponents(l+a,u+h,g+f,_+M).normalize(),s[2].setComponents(l+o,u+p,g+v,_+S).normalize(),s[3].setComponents(l-o,u-p,g-v,_-S).normalize(),n)s[4].setComponents(c,d,m,y).normalize(),s[5].setComponents(l-c,u-d,g-m,_-y).normalize();else if(s[4].setComponents(l-c,u-d,g-m,_-y).normalize(),t===Ls)s[5].setComponents(l+c,u+d,g+m,_+y).normalize();else if(t===Pa)s[5].setComponents(c,d,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Vr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vr)}intersectsSprite(e){Vr.center.set(0,0,0);let t=mm.distanceTo(e.center);return Vr.radius=.7071067811865476+t,Vr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vr)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(ec.x=s.normal.x>0?e.max.x:e.min.x,ec.y=s.normal.y>0?e.max.y:e.min.y,ec.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ec)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Tr=class extends fs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new it(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ac=new N,Rc=new N,Ef=new Mt,vo=new Yr,tc=new Zs,Rh=new N,Sf=new N,Cc=class extends kn{constructor(e=new kt,t=new Tr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Ac.fromBufferAttribute(t,s-1),Rc.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Ac.distanceTo(Rc);e.setAttribute("lineDistance",new Dt(n,1))}else Ut("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),tc.copy(n.boundingSphere),tc.applyMatrix4(s),tc.radius+=r,e.ray.intersectsSphere(tc)===!1)return;Ef.copy(s).invert(),vo.copy(e.ray).applyMatrix4(Ef);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let u=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let v=u,m=f-1;v<m;v+=l){let g=h.getX(v),M=h.getX(v+1),S=nc(this,e,vo,c,g,M,v);S&&t.push(S)}if(this.isLineLoop){let v=h.getX(f-1),m=h.getX(u),g=nc(this,e,vo,c,v,m,f-1);g&&t.push(g)}}else{let u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let v=u,m=f-1;v<m;v+=l){let g=nc(this,e,vo,c,v,v+1,v);g&&t.push(g)}if(this.isLineLoop){let v=nc(this,e,vo,c,f-1,u,f-1);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function nc(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(Ac.fromBufferAttribute(o,s),Rc.fromBufferAttribute(o,r),t.distanceSqToSegment(Ac,Rc,Rh,Sf)>n)return;Rh.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Rh);if(!(l<e.near||l>e.far))return{distance:l,point:Sf.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var bf=new N,Tf=new N,$s=class extends Cc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)bf.fromBufferAttribute(t,s),Tf.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+bf.distanceTo(Tf);e.setAttribute("lineDistance",new Dt(n,1))}else Ut("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var ai=class extends fs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new it(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},wf=new Mt,Hh=new Yr,ic=new Zs,sc=new N,xi=class extends kn{constructor(e=new kt,t=new ai){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ic.copy(n.boundingSphere),ic.applyMatrix4(s),ic.radius+=r,e.ray.intersectsSphere(ic)===!1)return;wf.copy(s).invert(),Hh.copy(e.ray).applyMatrix4(wf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,p=n.attributes.position;if(l!==null){let d=Math.max(0,a.start),u=Math.min(l.count,a.start+a.count);for(let f=d,v=u;f<v;f++){let m=l.getX(f);sc.fromBufferAttribute(p,m),Af(sc,m,c,s,e,t,this)}}else{let d=Math.max(0,a.start),u=Math.min(p.count,a.start+a.count);for(let f=d,v=u;f<v;f++)sc.fromBufferAttribute(p,f),Af(sc,f,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Af(i,e,t,n,s,r,a){let o=Hh.distanceSqToPoint(i);if(o<t){let c=new N;Hh.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Lo=class extends Gi{constructor(e=[],t=Nr,n,s,r,a,o,c,l,h){super(e,t,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Dn=class extends Gi{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ms=class extends Gi{constructor(e,t,n=Ns,s,r,a,o=$n,c=$n,l,h=Xs,p=1){if(h!==Xs&&h!==Qs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:p};super(d,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Da(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Pc=class extends ms{constructor(e,t=Ns,n=Nr,s,r,a=$n,o=$n,c,l=Xs){let h={width:e,height:e,depth:1},p=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,c,l),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},No=class extends Gi{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ln=class i extends kt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],p=[],d=0,u=0;f("z","y","x",-1,-1,n,t,e,a,r,0),f("z","y","x",1,-1,n,t,-e,a,r,1),f("x","z","y",1,1,e,n,t,s,a,2),f("x","z","y",1,-1,e,n,-t,s,a,3),f("x","y","z",1,-1,e,t,n,s,r,4),f("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Dt(l,3)),this.setAttribute("normal",new Dt(h,3)),this.setAttribute("uv",new Dt(p,2));function f(v,m,g,M,S,y,_,T,A,x,w){let C=y/A,F=_/x,b=y/2,L=_/2,P=T/2,H=A+1,Z=x+1,V=0,W=0,G=new N;for(let k=0;k<Z;k++){let Y=k*F-L;for(let he=0;he<H;he++){let we=he*C-b;G[v]=we*M,G[m]=Y*S,G[g]=P,l.push(G.x,G.y,G.z),G[v]=0,G[m]=0,G[g]=T>0?1:-1,h.push(G.x,G.y,G.z),p.push(he/A),p.push(1-k/x),V+=1}}for(let k=0;k<x;k++)for(let Y=0;Y<A;Y++){let he=d+Y+H*k,we=d+Y+H*(k+1),Ie=d+(Y+1)+H*(k+1),Xe=d+(Y+1)+H*k;c.push(he,we,Xe),c.push(we,Ie,Xe),W+=6}o.addGroup(u,W,w),u+=W,d+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Ba=class i extends kt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],c=[],l=new N,h=new He;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let p=0,d=3;p<=t;p++,d+=3){let u=n+p/t*s;l.x=e*Math.cos(u),l.y=e*Math.sin(u),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,c.push(h.x,h.y)}for(let p=1;p<=t;p++)r.push(p,p+1,0);this.setIndex(r),this.setAttribute("position",new Dt(a,3)),this.setAttribute("normal",new Dt(o,3)),this.setAttribute("uv",new Dt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},jt=class i extends kt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],p=[],d=[],u=[],f=0,v=[],m=n/2,g=0;M(),a===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new Dt(p,3)),this.setAttribute("normal",new Dt(d,3)),this.setAttribute("uv",new Dt(u,2));function M(){let y=new N,_=new N,T=0,A=(t-e)/n;for(let x=0;x<=r;x++){let w=[],C=x/r,F=C*(t-e)+e;for(let b=0;b<=s;b++){let L=b/s,P=L*c+o,H=Math.sin(P),Z=Math.cos(P);_.x=F*H,_.y=-C*n+m,_.z=F*Z,p.push(_.x,_.y,_.z),y.set(H,A,Z).normalize(),d.push(y.x,y.y,y.z),u.push(L,1-C),w.push(f++)}v.push(w)}for(let x=0;x<s;x++)for(let w=0;w<r;w++){let C=v[w][x],F=v[w+1][x],b=v[w+1][x+1],L=v[w][x+1];(e>0||w!==0)&&(h.push(C,F,L),T+=3),(t>0||w!==r-1)&&(h.push(F,b,L),T+=3)}l.addGroup(g,T,0),g+=T}function S(y){let _=f,T=new He,A=new N,x=0,w=y===!0?e:t,C=y===!0?1:-1;for(let b=1;b<=s;b++)p.push(0,m*C,0),d.push(0,C,0),u.push(.5,.5),f++;let F=f;for(let b=0;b<=s;b++){let P=b/s*c+o,H=Math.cos(P),Z=Math.sin(P);A.x=w*Z,A.y=m*C,A.z=w*H,p.push(A.x,A.y,A.z),d.push(0,C,0),T.x=H*.5+.5,T.y=Z*.5*C+.5,u.push(T.x,T.y),f++}for(let b=0;b<s;b++){let L=_+b,P=F+b;y===!0?h.push(P,P+1,L):h.push(P+1,P,L),x+=3}l.addGroup(g,x,y===!0?1:2),g+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},qr=class i extends jt{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ic=class i extends kt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new Dt(r,3)),this.setAttribute("normal",new Dt(r.slice(),3)),this.setAttribute("uv",new Dt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){let S=new N,y=new N,_=new N;for(let T=0;T<t.length;T+=3)u(t[T+0],S),u(t[T+1],y),u(t[T+2],_),c(S,y,_,M)}function c(M,S,y,_){let T=_+1,A=[];for(let x=0;x<=T;x++){A[x]=[];let w=M.clone().lerp(y,x/T),C=S.clone().lerp(y,x/T),F=T-x;for(let b=0;b<=F;b++)b===0&&x===T?A[x][b]=w:A[x][b]=w.clone().lerp(C,b/F)}for(let x=0;x<T;x++)for(let w=0;w<2*(T-x)-1;w++){let C=Math.floor(w/2);w%2===0?(d(A[x][C+1]),d(A[x+1][C]),d(A[x][C])):(d(A[x][C+1]),d(A[x+1][C+1]),d(A[x+1][C]))}}function l(M){let S=new N;for(let y=0;y<r.length;y+=3)S.x=r[y+0],S.y=r[y+1],S.z=r[y+2],S.normalize().multiplyScalar(M),r[y+0]=S.x,r[y+1]=S.y,r[y+2]=S.z}function h(){let M=new N;for(let S=0;S<r.length;S+=3){M.x=r[S+0],M.y=r[S+1],M.z=r[S+2];let y=m(M)/2/Math.PI+.5,_=g(M)/Math.PI+.5;a.push(y,1-_)}f(),p()}function p(){for(let M=0;M<a.length;M+=6){let S=a[M+0],y=a[M+2],_=a[M+4],T=Math.max(S,y,_),A=Math.min(S,y,_);T>.9&&A<.1&&(S<.2&&(a[M+0]+=1),y<.2&&(a[M+2]+=1),_<.2&&(a[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function u(M,S){let y=M*3;S.x=e[y+0],S.y=e[y+1],S.z=e[y+2]}function f(){let M=new N,S=new N,y=new N,_=new N,T=new He,A=new He,x=new He;for(let w=0,C=0;w<r.length;w+=9,C+=6){M.set(r[w+0],r[w+1],r[w+2]),S.set(r[w+3],r[w+4],r[w+5]),y.set(r[w+6],r[w+7],r[w+8]),T.set(a[C+0],a[C+1]),A.set(a[C+2],a[C+3]),x.set(a[C+4],a[C+5]),_.copy(M).add(S).add(y).divideScalar(3);let F=m(_);v(T,C+0,M,F),v(A,C+2,S,F),v(x,C+4,y,F)}}function v(M,S,y,_){_<0&&M.x===1&&(a[S]=M.x-1),y.x===0&&y.z===0&&(a[S]=_/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function g(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var rc=new N,ac=new N,Ch=new N,oc=new Vs,Ha=class extends kt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let s=Math.pow(10,4),r=Math.cos(pc*t),a=e.getIndex(),o=e.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],h=["a","b","c"],p=new Array(3),d={},u=[];for(let f=0;f<c;f+=3){a?(l[0]=a.getX(f),l[1]=a.getX(f+1),l[2]=a.getX(f+2)):(l[0]=f,l[1]=f+1,l[2]=f+2);let{a:v,b:m,c:g}=oc;if(v.fromBufferAttribute(o,l[0]),m.fromBufferAttribute(o,l[1]),g.fromBufferAttribute(o,l[2]),oc.getNormal(Ch),p[0]=`${Math.round(v.x*s)},${Math.round(v.y*s)},${Math.round(v.z*s)}`,p[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,p[2]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,!(p[0]===p[1]||p[1]===p[2]||p[2]===p[0]))for(let M=0;M<3;M++){let S=(M+1)%3,y=p[M],_=p[S],T=oc[h[M]],A=oc[h[S]],x=`${y}_${_}`,w=`${_}_${y}`;w in d&&d[w]?(Ch.dot(d[w].normal)<=r&&(u.push(T.x,T.y,T.z),u.push(A.x,A.y,A.z)),d[w]=null):x in d||(d[x]={index0:l[M],index1:l[S],normal:Ch.clone()})}}for(let f in d)if(d[f]){let{index0:v,index1:m}=d[f];rc.fromBufferAttribute(o,v),ac.fromBufferAttribute(o,m),u.push(rc.x,rc.y,rc.z),u.push(ac.x,ac.y,ac.z)}this.setAttribute("position",new Dt(u,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},ns=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ut("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,u=(a-h)/d;return(s+u)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new He:new N);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new N,s=[],r=[],a=[],o=new N,c=new Mt;for(let u=0;u<=e;u++){let f=u/e;s[u]=this.getTangentAt(f,new N)}r[0]=new N,a[0]=new N;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),p=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),p<=l&&(l=p,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let u=1;u<=e;u++){if(r[u]=r[u-1].clone(),a[u]=a[u-1].clone(),o.crossVectors(s[u-1],s[u]),o.length()>Number.EPSILON){o.normalize();let f=Math.acos(on(s[u-1].dot(s[u]),-1,1));r[u].applyMatrix4(c.makeRotationAxis(o,f))}a[u].crossVectors(s[u],r[u])}if(t===!0){let u=Math.acos(on(r[0].dot(r[e]),-1,1));u/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(u=-u);for(let f=1;f<=e;f++)r[f].applyMatrix4(c.makeRotationAxis(s[f],u*f)),a[f].crossVectors(s[f],r[f])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},za=class extends ns{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new He){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),p=Math.sin(this.aRotation),d=c-this.aX,u=l-this.aY;c=d*h-u*p+this.aX,l=d*p+u*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Dc=class extends za{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function hd(){let i=0,e=0,t=0,n=0;function s(r,a,o,c){i=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,p){let d=(a-r)/l-(o-r)/(l+h)+(o-a)/h,u=(o-a)/h-(c-a)/(h+p)+(c-o)/p;d*=h,u*=h,s(a,o,d,u)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var Rf=new N,Cf=new N,Ph=new hd,Ih=new hd,Dh=new hd,Ci=class extends ns{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new N){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(Cf.subVectors(s[0],s[1]).add(s[0]),l=Cf);let p=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Rf.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Rf),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,f=Math.pow(l.distanceToSquared(p),u),v=Math.pow(p.distanceToSquared(d),u),m=Math.pow(d.distanceToSquared(h),u);v<1e-4&&(v=1),f<1e-4&&(f=v),m<1e-4&&(m=v),Ph.initNonuniformCatmullRom(l.x,p.x,d.x,h.x,f,v,m),Ih.initNonuniformCatmullRom(l.y,p.y,d.y,h.y,f,v,m),Dh.initNonuniformCatmullRom(l.z,p.z,d.z,h.z,f,v,m)}else this.curveType==="catmullrom"&&(Ph.initCatmullRom(l.x,p.x,d.x,h.x,this.tension),Ih.initCatmullRom(l.y,p.y,d.y,h.y,this.tension),Dh.initCatmullRom(l.z,p.z,d.z,h.z,this.tension));return n.set(Ph.calc(c),Ih.calc(c),Dh.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new N().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Pf(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,c=i*o;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*o+r*i+t}function gm(i,e){let t=1-i;return t*t*e}function xm(i,e){return 2*(1-i)*i*e}function vm(i,e){return i*i*e}function _o(i,e,t,n){return gm(i,e)+xm(i,t)+vm(i,n)}function ym(i,e){let t=1-i;return t*t*t*e}function _m(i,e){let t=1-i;return 3*t*t*i*e}function Mm(i,e){return 3*(1-i)*i*i*e}function Em(i,e){return i*i*i*e}function Mo(i,e,t,n,s){return ym(i,e)+_m(i,t)+Mm(i,n)+Em(i,s)}var Uo=class extends ns{constructor(e=new He,t=new He,n=new He,s=new He){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new He){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Mo(e,s.x,r.x,a.x,o.x),Mo(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Lc=class extends ns{constructor(e=new N,t=new N,n=new N,s=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new N){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Mo(e,s.x,r.x,a.x,o.x),Mo(e,s.y,r.y,a.y,o.y),Mo(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Fo=class extends ns{constructor(e=new He,t=new He){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new He){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new He){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},wr=class extends ns{constructor(e=new N,t=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new N){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new N){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Oo=class extends ns{constructor(e=new He,t=new He,n=new He){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new He){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(_o(e,s.x,r.x,a.x),_o(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Bo=class extends ns{constructor(e=new N,t=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new N){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(_o(e,s.x,r.x,a.x),_o(e,s.y,r.y,a.y),_o(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ho=class extends ns{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new He){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],p=s[a>s.length-3?s.length-1:a+2];return n.set(Pf(o,c.x,l.x,h.x,p.x),Pf(o,c.y,l.y,h.y,p.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new He().fromArray(s))}return this}},Nc=Object.freeze({__proto__:null,ArcCurve:Dc,CatmullRomCurve3:Ci,CubicBezierCurve:Uo,CubicBezierCurve3:Lc,EllipseCurve:za,LineCurve:Fo,LineCurve3:wr,QuadraticBezierCurve:Oo,QuadraticBezierCurve3:Bo,SplineCurve:Ho}),Ga=class extends ns{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Nc[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Nc[s.type]().fromJSON(s))}return this}},Js=class extends Ga{constructor(e){super(),this.type="Path",this.currentPoint=new He,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Fo(this.currentPoint.clone(),new He(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Oo(this.currentPoint.clone(),new He(e,t),new He(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new Uo(this.currentPoint.clone(),new He(e,t),new He(n,s),new He(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Ho(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,a,o,c),this}absellipse(e,t,n,s,r,a,o,c){let l=new za(e,t,n,s,r,a,o,c);if(this.curves.length>0){let p=l.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},oi=class extends Js{constructor(e){super(e),this.uuid=cr(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Js().fromJSON(s))}return this}};function Sm(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=S0(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l;if(n&&(r=Rm(i,e,r,t)),i.length>80*t){o=i[0],c=i[1];let h=o,p=c;for(let d=t;d<s;d+=t){let u=i[d],f=i[d+1];u<o&&(o=u),f<c&&(c=f),u>h&&(h=u),f>p&&(p=f)}l=Math.max(h-o,p-c),l=l!==0?32767/l:0}return zo(r,a,t,o,c,l,0),a}function S0(i,e,t,n,s){let r;if(s===Hm(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=If(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=If(a/n|0,i[a],i[a+1],r);return r&&ka(r,r.next)&&(ko(r),r=r.next),r}function Zr(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(ka(t,t.next)||zn(t.prev,t,t.next)===0)){if(ko(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function zo(i,e,t,n,s,r,a){if(!i)return;!a&&r&&Lm(i,n,s,r);let o=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?Tm(i,n,s,r):bm(i)){e.push(c.i,i.i,l.i),ko(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=wm(Zr(i),e),zo(i,e,t,n,s,r,2)):a===2&&Am(i,e,t,n,s,r):zo(Zr(i),e,t,n,s,r,1);break}}}function bm(i){let e=i.prev,t=i,n=i.next;if(zn(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,c=t.y,l=n.y,h=Math.min(s,r,a),p=Math.min(o,c,l),d=Math.max(s,r,a),u=Math.max(o,c,l),f=n.next;for(;f!==e;){if(f.x>=h&&f.x<=d&&f.y>=p&&f.y<=u&&yo(s,o,r,c,a,l,f.x,f.y)&&zn(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function Tm(i,e,t,n){let s=i.prev,r=i,a=i.next;if(zn(s,r,a)>=0)return!1;let o=s.x,c=r.x,l=a.x,h=s.y,p=r.y,d=a.y,u=Math.min(o,c,l),f=Math.min(h,p,d),v=Math.max(o,c,l),m=Math.max(h,p,d),g=zh(u,f,e,t,n),M=zh(v,m,e,t,n),S=i.prevZ,y=i.nextZ;for(;S&&S.z>=g&&y&&y.z<=M;){if(S.x>=u&&S.x<=v&&S.y>=f&&S.y<=m&&S!==s&&S!==a&&yo(o,h,c,p,l,d,S.x,S.y)&&zn(S.prev,S,S.next)>=0||(S=S.prevZ,y.x>=u&&y.x<=v&&y.y>=f&&y.y<=m&&y!==s&&y!==a&&yo(o,h,c,p,l,d,y.x,y.y)&&zn(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;S&&S.z>=g;){if(S.x>=u&&S.x<=v&&S.y>=f&&S.y<=m&&S!==s&&S!==a&&yo(o,h,c,p,l,d,S.x,S.y)&&zn(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;y&&y.z<=M;){if(y.x>=u&&y.x<=v&&y.y>=f&&y.y<=m&&y!==s&&y!==a&&yo(o,h,c,p,l,d,y.x,y.y)&&zn(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function wm(i,e){let t=i;do{let n=t.prev,s=t.next.next;!ka(n,s)&&T0(n,t,t.next,s)&&Go(n,s)&&Go(s,n)&&(e.push(n.i,t.i,s.i),ko(t),ko(t.next),t=i=s),t=t.next}while(t!==i);return Zr(t)}function Am(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Fm(a,o)){let c=w0(a,o);a=Zr(a,a.next),c=Zr(c,c.next),zo(a,e,t,n,s,r,0),zo(c,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Rm(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,c=r<a-1?e[r+1]*n:i.length,l=S0(i,o,c,n,!1);l===l.next&&(l.steiner=!0),s.push(Um(l))}s.sort(Cm);for(let r=0;r<s.length;r++)t=Pm(s[r],t);return t}function Cm(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Pm(i,e){let t=Im(i,e);if(!t)return e;let n=w0(t,i);return Zr(n,n.next),Zr(t,t.next)}function Im(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(ka(i,t))return t;do{if(ka(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let p=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(p<=n&&p>r&&(r=p,a=t.x<t.next.x?t:t.next,p===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,c=a.x,l=a.y,h=1/0;t=a;do{if(n>=t.x&&t.x>=c&&n!==t.x&&b0(s<l?n:r,s,c,l,s<l?r:n,s,t.x,t.y)){let p=Math.abs(s-t.y)/(n-t.x);Go(t,i)&&(p<h||p===h&&(t.x>a.x||t.x===a.x&&Dm(a,t)))&&(a=t,h=p)}t=t.next}while(t!==o);return a}function Dm(i,e){return zn(i.prev,i,e.prev)<0&&zn(e.next,i,i.next)<0}function Lm(i,e,t,n){let s=i;do s.z===0&&(s.z=zh(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Nm(s)}function Nm(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let l=0;l<t&&(o++,a=a.nextZ,!!a);l++);let c=t;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function zh(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Um(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function b0(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function yo(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&b0(i,e,t,n,s,r,a,o)}function Fm(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Om(i,e)&&(Go(i,e)&&Go(e,i)&&Bm(i,e)&&(zn(i.prev,i,e.prev)||zn(i,e.prev,e))||ka(i,e)&&zn(i.prev,i,i.next)>0&&zn(e.prev,e,e.next)>0)}function zn(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function ka(i,e){return i.x===e.x&&i.y===e.y}function T0(i,e,t,n){let s=cc(zn(i,e,t)),r=cc(zn(i,e,n)),a=cc(zn(t,n,i)),o=cc(zn(t,n,e));return!!(s!==r&&a!==o||s===0&&lc(i,t,e)||r===0&&lc(i,n,e)||a===0&&lc(t,i,n)||o===0&&lc(t,e,n))}function lc(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function cc(i){return i>0?1:i<0?-1:0}function Om(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&T0(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Go(i,e){return zn(i.prev,i,i.next)<0?zn(i,e,i.next)>=0&&zn(i,i.prev,e)>=0:zn(i,e,i.prev)<0||zn(i,i.next,e)<0}function Bm(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function w0(i,e){let t=Gh(i.i,i.x,i.y),n=Gh(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function If(i,e,t,n){let s=Gh(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ko(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Gh(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Hm(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var kh=class{static triangulate(e,t,n=2){return Sm(e,t,n)}},Ws=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Df(e),Lf(n,e);let a=e.length;t.forEach(Df);for(let c=0;c<t.length;c++)s.push(a),a+=t[c].length,Lf(n,t[c]);let o=kh.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function Df(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Lf(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var gs=class i extends kt{constructor(e=new oi([new He(.5,.5),new He(-.5,.5),new He(-.5,-.5),new He(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,c=e.length;o<c;o++){let l=e[o];a(l)}this.setAttribute("position",new Dt(s,3)),this.setAttribute("uv",new Dt(r,2)),this.computeVertexNormals();function a(o){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,p=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,u=t.bevelThickness!==void 0?t.bevelThickness:.2,f=t.bevelSize!==void 0?t.bevelSize:u-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:zm,S,y=!1,_,T,A,x;if(g){S=g.getSpacedPoints(h),y=!0,d=!1;let te=g.isCatmullRomCurve3?g.closed:!1;_=g.computeFrenetFrames(h,te),T=new N,A=new N,x=new N}d||(m=0,u=0,f=0,v=0);let w=o.extractPoints(l),C=w.shape,F=w.holes;if(!Ws.isClockWise(C)){C=C.reverse();for(let te=0,oe=F.length;te<oe;te++){let K=F[te];Ws.isClockWise(K)&&(F[te]=K.reverse())}}function L(te){let K=10000000000000001e-36,ne=te[0];for(let ue=1;ue<=te.length;ue++){let Ge=ue%te.length,Oe=te[Ge],Je=Oe.x-ne.x,je=Oe.y-ne.y,q=Je*Je+je*je,gt=Math.max(Math.abs(Oe.x),Math.abs(Oe.y),Math.abs(ne.x),Math.abs(ne.y)),dt=K*gt*gt;if(q<=dt){te.splice(Ge,1),ue--;continue}ne=Oe}}L(C),F.forEach(L);let P=F.length,H=C;for(let te=0;te<P;te++){let oe=F[te];C=C.concat(oe)}function Z(te,oe,K){return oe||Ft("ExtrudeGeometry: vec does not exist"),te.clone().addScaledVector(oe,K)}let V=C.length;function W(te,oe,K){let ne,ue,Ge,Oe=te.x-oe.x,Je=te.y-oe.y,je=K.x-te.x,q=K.y-te.y,gt=Oe*Oe+Je*Je,dt=Oe*q-Je*je;if(Math.abs(dt)>Number.EPSILON){let O=Math.sqrt(gt),E=Math.sqrt(je*je+q*q),j=oe.x-Je/O,se=oe.y+Oe/O,fe=K.x-q/E,Ve=K.y+je/E,ke=((fe-j)*q-(Ve-se)*je)/(Oe*q-Je*je);ne=j+Oe*ke-te.x,ue=se+Je*ke-te.y;let Te=ne*ne+ue*ue;if(Te<=2)return new He(ne,ue);Ge=Math.sqrt(Te/2)}else{let O=!1;Oe>Number.EPSILON?je>Number.EPSILON&&(O=!0):Oe<-Number.EPSILON?je<-Number.EPSILON&&(O=!0):Math.sign(Je)===Math.sign(q)&&(O=!0),O?(ne=-Je,ue=Oe,Ge=Math.sqrt(gt)):(ne=Oe,ue=Je,Ge=Math.sqrt(gt/2))}return new He(ne/Ge,ue/Ge)}let G=[];for(let te=0,oe=H.length,K=oe-1,ne=te+1;te<oe;te++,K++,ne++)K===oe&&(K=0),ne===oe&&(ne=0),G[te]=W(H[te],H[K],H[ne]);let k=[],Y,he=G.concat();for(let te=0,oe=P;te<oe;te++){let K=F[te];Y=[];for(let ne=0,ue=K.length,Ge=ue-1,Oe=ne+1;ne<ue;ne++,Ge++,Oe++)Ge===ue&&(Ge=0),Oe===ue&&(Oe=0),Y[ne]=W(K[ne],K[Ge],K[Oe]);k.push(Y),he=he.concat(Y)}let we;if(m===0)we=Ws.triangulateShape(H,F);else{let te=[],oe=[];for(let K=0;K<m;K++){let ne=K/m,ue=u*Math.cos(ne*Math.PI/2),Ge=f*Math.sin(ne*Math.PI/2)+v;for(let Oe=0,Je=H.length;Oe<Je;Oe++){let je=Z(H[Oe],G[Oe],Ge);Ce(je.x,je.y,-ue),ne===0&&te.push(je)}for(let Oe=0,Je=P;Oe<Je;Oe++){let je=F[Oe];Y=k[Oe];let q=[];for(let gt=0,dt=je.length;gt<dt;gt++){let O=Z(je[gt],Y[gt],Ge);Ce(O.x,O.y,-ue),ne===0&&q.push(O)}ne===0&&oe.push(q)}}we=Ws.triangulateShape(te,oe)}let Ie=we.length,Xe=f+v;for(let te=0;te<V;te++){let oe=d?Z(C[te],he[te],Xe):C[te];y?(A.copy(_.normals[0]).multiplyScalar(oe.x),T.copy(_.binormals[0]).multiplyScalar(oe.y),x.copy(S[0]).add(A).add(T),Ce(x.x,x.y,x.z)):Ce(oe.x,oe.y,0)}for(let te=1;te<=h;te++)for(let oe=0;oe<V;oe++){let K=d?Z(C[oe],he[oe],Xe):C[oe];y?(A.copy(_.normals[te]).multiplyScalar(K.x),T.copy(_.binormals[te]).multiplyScalar(K.y),x.copy(S[te]).add(A).add(T),Ce(x.x,x.y,x.z)):Ce(K.x,K.y,p/h*te)}for(let te=m-1;te>=0;te--){let oe=te/m,K=u*Math.cos(oe*Math.PI/2),ne=f*Math.sin(oe*Math.PI/2)+v;for(let ue=0,Ge=H.length;ue<Ge;ue++){let Oe=Z(H[ue],G[ue],ne);Ce(Oe.x,Oe.y,p+K)}for(let ue=0,Ge=F.length;ue<Ge;ue++){let Oe=F[ue];Y=k[ue];for(let Je=0,je=Oe.length;Je<je;Je++){let q=Z(Oe[Je],Y[Je],ne);y?Ce(q.x,q.y+S[h-1].y,S[h-1].x+K):Ce(q.x,q.y,p+K)}}}rt(),Q();function rt(){let te=s.length/3;if(d){let oe=0,K=V*oe;for(let ne=0;ne<Ie;ne++){let ue=we[ne];xe(ue[2]+K,ue[1]+K,ue[0]+K)}oe=h+m*2,K=V*oe;for(let ne=0;ne<Ie;ne++){let ue=we[ne];xe(ue[0]+K,ue[1]+K,ue[2]+K)}}else{for(let oe=0;oe<Ie;oe++){let K=we[oe];xe(K[2],K[1],K[0])}for(let oe=0;oe<Ie;oe++){let K=we[oe];xe(K[0]+V*h,K[1]+V*h,K[2]+V*h)}}n.addGroup(te,s.length/3-te,0)}function Q(){let te=s.length/3,oe=0;de(H,oe),oe+=H.length;for(let K=0,ne=F.length;K<ne;K++){let ue=F[K];de(ue,oe),oe+=ue.length}n.addGroup(te,s.length/3-te,1)}function de(te,oe){let K=te.length;for(;--K>=0;){let ne=K,ue=K-1;ue<0&&(ue=te.length-1);for(let Ge=0,Oe=h+m*2;Ge<Oe;Ge++){let Je=V*Ge,je=V*(Ge+1),q=oe+ne+Je,gt=oe+ue+Je,dt=oe+ue+je,O=oe+ne+je;Ue(q,gt,dt,O)}}}function Ce(te,oe,K){c.push(te),c.push(oe),c.push(K)}function xe(te,oe,K){$(te),$(oe),$(K);let ne=s.length/3,ue=M.generateTopUV(n,s,ne-3,ne-2,ne-1);Be(ue[0]),Be(ue[1]),Be(ue[2])}function Ue(te,oe,K,ne){$(te),$(oe),$(ne),$(oe),$(K),$(ne);let ue=s.length/3,Ge=M.generateSideWallUV(n,s,ue-6,ue-3,ue-2,ue-1);Be(Ge[0]),Be(Ge[1]),Be(Ge[3]),Be(Ge[1]),Be(Ge[2]),Be(Ge[3])}function $(te){s.push(c[te*3+0]),s.push(c[te*3+1]),s.push(c[te*3+2])}function Be(te){r.push(te.x),r.push(te.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Gm(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Nc[s.type]().fromJSON(s)),new i(n,e.options)}},zm={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],c=e[n*3+1],l=e[s*3],h=e[s*3+1];return[new He(r,a),new He(o,c),new He(l,h)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],p=e[n*3+2],d=e[s*3],u=e[s*3+1],f=e[s*3+2],v=e[r*3],m=e[r*3+1],g=e[r*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new He(a,1-c),new He(l,1-p),new He(d,1-f),new He(v,1-g)]:[new He(o,1-c),new He(h,1-p),new He(u,1-f),new He(m,1-g)]}};function Gm(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var $r=class i extends Ic{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Vo=class i extends kt{constructor(e=[new He(0,-.5),new He(.5,0),new He(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=on(s,0,Math.PI*2);let r=[],a=[],o=[],c=[],l=[],h=1/t,p=new N,d=new He,u=new N,f=new N,v=new N,m=0,g=0;for(let M=0;M<=e.length-1;M++)switch(M){case 0:m=e[M+1].x-e[M].x,g=e[M+1].y-e[M].y,u.x=g*1,u.y=-m,u.z=g*0,v.copy(u),u.normalize(),c.push(u.x,u.y,u.z);break;case e.length-1:c.push(v.x,v.y,v.z);break;default:m=e[M+1].x-e[M].x,g=e[M+1].y-e[M].y,u.x=g*1,u.y=-m,u.z=g*0,f.copy(u),u.x+=v.x,u.y+=v.y,u.z+=v.z,u.normalize(),c.push(u.x,u.y,u.z),v.copy(f)}for(let M=0;M<=t;M++){let S=n+M*h*s,y=Math.sin(S),_=Math.cos(S);for(let T=0;T<=e.length-1;T++){p.x=e[T].x*y,p.y=e[T].y,p.z=e[T].x*_,a.push(p.x,p.y,p.z),d.x=M/t,d.y=T/(e.length-1),o.push(d.x,d.y);let A=c[3*T+0]*y,x=c[3*T+1],w=c[3*T+0]*_;l.push(A,x,w)}}for(let M=0;M<t;M++)for(let S=0;S<e.length-1;S++){let y=S+M*e.length,_=y,T=y+e.length,A=y+e.length+1,x=y+1;r.push(_,T,x),r.push(A,x,T)}this.setIndex(r),this.setAttribute("position",new Dt(a,3)),this.setAttribute("uv",new Dt(o,2)),this.setAttribute("normal",new Dt(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var cn=class i extends kt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,p=e/o,d=t/c,u=[],f=[],v=[],m=[];for(let g=0;g<h;g++){let M=g*d-a;for(let S=0;S<l;S++){let y=S*p-r;f.push(y,-M,0),v.push(0,0,1),m.push(S/o),m.push(1-g/c)}}for(let g=0;g<c;g++)for(let M=0;M<o;M++){let S=M+l*g,y=M+l*(g+1),_=M+1+l*(g+1),T=M+1+l*g;u.push(S,y,T),u.push(y,_,T)}this.setIndex(u),this.setAttribute("position",new Dt(f,3)),this.setAttribute("normal",new Dt(v,3)),this.setAttribute("uv",new Dt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Jr=class i extends kt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],c=[],l=[],h=[],p=e,d=(t-e)/s,u=new N,f=new He;for(let v=0;v<=s;v++){for(let m=0;m<=n;m++){let g=r+m/n*a;u.x=p*Math.cos(g),u.y=p*Math.sin(g),c.push(u.x,u.y,u.z),l.push(0,0,1),f.x=(u.x/t+1)/2,f.y=(u.y/t+1)/2,h.push(f.x,f.y)}p+=d}for(let v=0;v<s;v++){let m=v*(n+1);for(let g=0;g<n;g++){let M=g+m,S=M,y=M+n+1,_=M+n+2,T=M+1;o.push(S,y,T),o.push(y,_,T)}}this.setIndex(o),this.setAttribute("position",new Dt(c,3)),this.setAttribute("normal",new Dt(l,3)),this.setAttribute("uv",new Dt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Va=class i extends kt{constructor(e=new oi([new He(0,.5),new He(-.5,-.5),new He(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],a=[],o=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(o,c,h),o+=c,c=0;this.setIndex(n),this.setAttribute("position",new Dt(s,3)),this.setAttribute("normal",new Dt(r,3)),this.setAttribute("uv",new Dt(a,2));function l(h){let p=s.length/3,d=h.extractPoints(t),u=d.shape,f=d.holes;Ws.isClockWise(u)===!1&&(u=u.reverse());for(let m=0,g=f.length;m<g;m++){let M=f[m];Ws.isClockWise(M)===!0&&(f[m]=M.reverse())}let v=Ws.triangulateShape(u,f);for(let m=0,g=f.length;m<g;m++){let M=f[m];u=u.concat(M)}for(let m=0,g=u.length;m<g;m++){let M=u[m];s.push(M.x,M.y,0),r.push(0,0,1),a.push(M.x,M.y)}for(let m=0,g=v.length;m<g;m++){let M=v[m],S=M[0]+p,y=M[1]+p,_=M[2]+p;n.push(S,y,_),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return km(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];n.push(a)}return new i(n,e.curveSegments)}};function km(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var Ln=class i extends kt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],p=new N,d=new N,u=[],f=[],v=[],m=[];for(let g=0;g<=n;g++){let M=[],S=g/n,y=a+S*o,_=e*Math.cos(y),T=Math.sqrt(e*e-_*_),A=0;g===0&&a===0?A=.5/t:g===n&&c===Math.PI&&(A=-.5/t);for(let x=0;x<=t;x++){let w=x/t,C=s+w*r;p.x=-T*Math.cos(C),p.y=_,p.z=T*Math.sin(C),f.push(p.x,p.y,p.z),d.copy(p).normalize(),v.push(d.x,d.y,d.z),m.push(w+A,1-S),M.push(l++)}h.push(M)}for(let g=0;g<n;g++)for(let M=0;M<t;M++){let S=h[g][M+1],y=h[g][M],_=h[g+1][M],T=h[g+1][M+1];(g!==0||a>0)&&u.push(S,y,T),(g!==n-1||c<Math.PI)&&u.push(y,_,T)}this.setIndex(u),this.setAttribute("position",new Dt(f,3)),this.setAttribute("normal",new Dt(v,3)),this.setAttribute("uv",new Dt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Pi=class i extends kt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let c=[],l=[],h=[],p=[],d=new N,u=new N,f=new N;for(let v=0;v<=n;v++){let m=a+v/n*o;for(let g=0;g<=s;g++){let M=g/s*r;u.x=(e+t*Math.cos(m))*Math.cos(M),u.y=(e+t*Math.cos(m))*Math.sin(M),u.z=t*Math.sin(m),l.push(u.x,u.y,u.z),d.x=e*Math.cos(M),d.y=e*Math.sin(M),f.subVectors(u,d).normalize(),h.push(f.x,f.y,f.z),p.push(g/s),p.push(v/n)}}for(let v=1;v<=n;v++)for(let m=1;m<=s;m++){let g=(s+1)*v+m-1,M=(s+1)*(v-1)+m-1,S=(s+1)*(v-1)+m,y=(s+1)*v+m;c.push(g,M,y),c.push(M,S,y)}this.setIndex(c),this.setAttribute("position",new Dt(l,3)),this.setAttribute("normal",new Dt(h,3)),this.setAttribute("uv",new Dt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var Ii=class i extends kt{constructor(e=new Bo(new N(-1,-1,0),new N(-1,1,0),new N(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new N,c=new N,l=new He,h=new N,p=[],d=[],u=[],f=[];v(),this.setIndex(f),this.setAttribute("position",new Dt(p,3)),this.setAttribute("normal",new Dt(d,3)),this.setAttribute("uv",new Dt(u,2));function v(){for(let S=0;S<t;S++)m(S);m(r===!1?t:0),M(),g()}function m(S){h=e.getPointAt(S/t,h);let y=a.normals[S],_=a.binormals[S];for(let T=0;T<=s;T++){let A=T/s*Math.PI*2,x=Math.sin(A),w=-Math.cos(A);c.x=w*y.x+x*_.x,c.y=w*y.y+x*_.y,c.z=w*y.z+x*_.z,c.normalize(),d.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,p.push(o.x,o.y,o.z)}}function g(){for(let S=1;S<=t;S++)for(let y=1;y<=s;y++){let _=(s+1)*(S-1)+(y-1),T=(s+1)*S+(y-1),A=(s+1)*S+y,x=(s+1)*(S-1)+y;f.push(_,T,x),f.push(T,A,x)}}function M(){for(let S=0;S<=t;S++)for(let y=0;y<=s;y++)l.x=S/t,l.y=y/s,u.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Nc[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function ta(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Nf(s))s.isRenderTargetTexture?(Ut("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Nf(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Di(i){let e={};for(let t=0;t<i.length;t++){let n=ta(i[t]);for(let s in n)e[s]=n[s]}return e}function Nf(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Vm(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function dd(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dn.workingColorSpace}var Vi={clone:ta,merge:Di},Wm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,mn=class extends fs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wm,this.fragmentShader=Xm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ta(e.uniforms),this.uniformsGroups=Vm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new it().setHex(s.value);break;case"v2":this.uniforms[n].value=new He().fromArray(s.value);break;case"v3":this.uniforms[n].value=new N().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Rn().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Xt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Mt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Wa=class extends mn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},rn=class extends fs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new it(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new it(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fl,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ki,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Yi=class extends rn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new He(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return on(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new it(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new it(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new it(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Wo=class extends fs{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fl,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};var Xa=class extends fs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=l0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Uc=class extends fs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ta(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Lh(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Ar=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Fc=class extends Ar{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Fh,endingEnd:Fh}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Oh:r=e,o=2*t-n;break;case Bh:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Oh:a=e,c=2*n-t;break;case Bh:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,p=this._offsetNext,d=this._weightPrev,u=this._weightNext,f=(n-t)/(s-t),v=f*f,m=v*f,g=-d*m+2*d*v-d*f,M=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*f+1,S=(-1-u)*m+(1.5+u)*v+.5*f,y=u*m-u*v;for(let _=0;_!==o;++_)r[_]=g*a[h+_]+M*a[l+_]+S*a[c+_]+y*a[p+_];return r}},Oc=class extends Ar{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(s-t),p=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*p+a[c+d]*h;return r}},Bc=class extends Ar{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Hc=class extends Ar{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this.inTangents,p=this.outTangents;if(!h||!p){let f=(n-t)/(s-t),v=1-f;for(let m=0;m!==o;++m)r[m]=a[l+m]*v+a[c+m]*f;return r}let d=o*2,u=e-1;for(let f=0;f!==o;++f){let v=a[l+f],m=a[c+f],g=u*d+f*2,M=p[g],S=p[g+1],y=e*d+f*2,_=h[y],T=h[y+1],A=qm(n,t,M,_,s);r[f]=A0(A,v,S,T,m)}return r}};function A0(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Ym(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function qm(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=A0(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let c=Ym(r,e,t,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var is=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ta(t,this.TimeBufferType),this.values=Ta(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ta(e.times,Array),values:Ta(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Lh(e.settings)&&(n.settings={inTangents:Ta(e.settings.inTangents,Array),outTangents:Ta(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Bc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Oc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Fc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Hc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Eo:t=this.InterpolantFactoryMethodDiscrete;break;case Sc:t=this.InterpolantFactoryMethodLinear;break;case dc:t=this.InterpolantFactoryMethodSmooth;break;case Uh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ut("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Eo;case this.InterpolantFactoryMethodLinear:return Sc;case this.InterpolantFactoryMethodSmooth:return dc;case this.InterpolantFactoryMethodBezier:return Uh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Lh(this.settings)&&(Uf(this.settings.inTangents,e),Uf(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ft("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ft("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){Ft("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){Ft("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&$p(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){Ft("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===dc,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(s)c=!0;else{let p=o*n,d=p-n,u=p+n;for(let f=0;f!==n;++f){let v=t[p+f];if(v!==t[d+f]||v!==t[u+f]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let p=o*n,d=a*n;for(let u=0;u!==n;++u)t[d+u]=t[p+u]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Lh(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Uf(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}is.prototype.ValueTypeName="";is.prototype.TimeBufferType=Float32Array;is.prototype.ValueBufferType=Float32Array;is.prototype.DefaultInterpolation=Sc;var Rr=class extends is{constructor(e,t,n){super(e,t,n)}};Rr.prototype.ValueTypeName="bool";Rr.prototype.ValueBufferType=Array;Rr.prototype.DefaultInterpolation=Eo;Rr.prototype.InterpolantFactoryMethodLinear=void 0;Rr.prototype.InterpolantFactoryMethodSmooth=void 0;var zc=class extends is{constructor(e,t,n,s){super(e,t,n,s)}};zc.prototype.ValueTypeName="color";var Gc=class extends is{constructor(e,t,n,s){super(e,t,n,s)}};Gc.prototype.ValueTypeName="number";var kc=class extends Ar{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),l=e*o;for(let h=l+o;l!==h;l+=4)bn.slerpFlat(r,0,a,l-o,a,l,c);return r}},Xo=class extends is{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new kc(this.times,this.values,this.getValueSize(),e)}};Xo.prototype.ValueTypeName="quaternion";Xo.prototype.InterpolantFactoryMethodSmooth=void 0;var Cr=class extends is{constructor(e,t,n){super(e,t,n)}};Cr.prototype.ValueTypeName="string";Cr.prototype.ValueBufferType=Array;Cr.prototype.DefaultInterpolation=Eo;Cr.prototype.InterpolantFactoryMethodLinear=void 0;Cr.prototype.InterpolantFactoryMethodSmooth=void 0;var Vc=class extends is{constructor(e,t,n,s){super(e,t,n,s)}};Vc.prototype.ValueTypeName="vector";var Wc=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,p){return l.push(h,p),this},this.removeHandler=function(h){let p=l.indexOf(h);return p!==-1&&l.splice(p,2),this},this.getHandler=function(h){for(let p=0,d=l.length;p<d;p+=2){let u=l[p],f=l[p+1];if(u.global&&(u.lastIndex=0),u.test(h))return f}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},R0=new Wc,Xc=class{constructor(e){this.manager=e!==void 0?e:R0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Xc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Kr=class extends kn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new it(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Yo=class extends Kr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(kn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new it(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Nh=new Mt,Ff=new N,Of=new N,Ya=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new He(512,512),this.mapType=li,this.map=null,this.mapPass=null,this.matrix=new Mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Oa,this._frameExtents=new He(1,1),this._viewportCount=1,this._viewports=[new Rn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Ff.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ff),Of.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Of),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Nh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Nh,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===Pa||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(Nh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},uc=new N,hc=new bn,Gs=new N,qo=class extends kn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt,this.coordinateSystem=Ls,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(uc,hc,Gs),Gs.x===1&&Gs.y===1&&Gs.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(uc,hc,Gs.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(uc,hc,Gs),Gs.x===1&&Gs.y===1&&Gs.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(uc,hc,Gs.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},br=new N,Bf=new He,Hf=new He,mi=class extends qo{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ao*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(pc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ao*2*Math.atan(Math.tan(pc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){br.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(br.x,br.y).multiplyScalar(-e/br.z),br.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(br.x,br.y).multiplyScalar(-e/br.z)}getViewSize(e,t){return this.getViewBounds(e,Bf,Hf),t.subVectors(Hf,Bf)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(pc*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Vh=class extends Ya{constructor(){super(new mi(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Ao*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Zo=class extends Kr{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(kn.DEFAULT_UP),this.updateMatrix(),this.target=new kn,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Vh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Wh=class extends Ya{constructor(){super(new mi(90,1,.5,500)),this.isPointLightShadow=!0}},qi=class extends Kr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Wh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Pr=class extends qo{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Xh=class extends Ya{constructor(){super(new Pr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},qa=class extends Kr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(kn.DEFAULT_UP),this.updateMatrix(),this.target=new kn,this.shadow=new Xh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var wa=-90,Aa=1,Yc=class extends kn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new mi(wa,Aa,e,t);s.layers=this.layers,this.add(s);let r=new mi(wa,Aa,e,t);r.layers=this.layers,this.add(r);let a=new mi(wa,Aa,e,t);a.layers=this.layers,this.add(a);let o=new mi(wa,Aa,e,t);o.layers=this.layers,this.add(o);let c=new mi(wa,Aa,e,t);c.layers=this.layers,this.add(c);let l=new mi(wa,Aa,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===Ls)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Pa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,p=e.getRenderTarget(),d=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(p,d,u),e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}},qc=class extends mi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},$o=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Zm.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Zm(){this._document.hidden===!1&&this.reset()}var fd="\\[\\]\\.:\\/",$m=new RegExp("["+fd+"]","g"),pd="[^"+fd+"]",Jm="[^"+fd.replace("\\.","")+"]",Km=/((?:WC+[\/:])*)/.source.replace("WC",pd),Qm=/(WCOD+)?/.source.replace("WCOD",Jm),jm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",pd),eg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",pd),tg=new RegExp("^"+Km+Qm+jm+eg+"$"),ng=["material","materials","bones","map"],Yh=class{constructor(e,t,n){let s=n||In.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},In=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace($m,"")}static parseTrackName(e){let t=tg.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);ng.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ut("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){Ft("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ft("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ft("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ft("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ft("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ft("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){Ft("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;Ft("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ft("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ft("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};In.Composite=Yh;In.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};In.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};In.prototype.GetterByBindingType=[In.prototype._getValue_direct,In.prototype._getValue_array,In.prototype._getValue_arrayElement,In.prototype._getValue_toArray];In.prototype.SetterByBindingTypeAndVersioning=[[In.prototype._setValue_direct,In.prototype._setValue_direct_setNeedsUpdate,In.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[In.prototype._setValue_array,In.prototype._setValue_array_setNeedsUpdate,In.prototype._setValue_array_setMatrixWorldNeedsUpdate],[In.prototype._setValue_arrayElement,In.prototype._setValue_arrayElement_setNeedsUpdate,In.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[In.prototype._setValue_fromArray,In.prototype._setValue_fromArray_setNeedsUpdate,In.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var gy=new Float32Array(1);var zf=new Mt,Jo=class{constructor(e,t,n=0,s=1/0){this.ray=new Yr(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new La,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ft("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return zf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(zf),this}intersectObject(e,t=!0,n=[]){return qh(e,this,n,t),n.sort(Gf),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)qh(e[s],this,n,t);return n.sort(Gf),n}};function Gf(i,e){return i.distance-e.distance}function qh(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)qh(r[a],e,t,!0)}}var _d=class _d{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};_d.prototype.isMatrix2=!0;var Zh=_d;function md(i,e,t,n){let s=ig(n);switch(t){case ad:return i*e;case nu:return i*e/s.components*s.byteLength;case iu:return i*e/s.components*s.byteLength;case Fr:return i*e*2/s.components*s.byteLength;case su:return i*e*2/s.components*s.byteLength;case od:return i*e*3/s.components*s.byteLength;case Ei:return i*e*4/s.components*s.byteLength;case ru:return i*e*4/s.components*s.byteLength;case ol:case ll:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case cl:case ul:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ou:case cu:return Math.max(i,16)*Math.max(e,8)/4;case au:case lu:return Math.max(i,8)*Math.max(e,8)/2;case uu:case hu:case fu:case pu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case du:case hl:case mu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case gu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case xu:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case vu:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case yu:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case _u:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Mu:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Eu:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Su:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case bu:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Tu:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case wu:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Au:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ru:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Cu:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Pu:case Iu:case Du:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Lu:case Nu:return Math.ceil(i/4)*Math.ceil(e/4)*8;case dl:case Uu:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ig(i){switch(i){case li:case nd:return{byteLength:1,components:1};case $a:case id:case Vn:return{byteLength:2,components:1};case eu:case tu:return{byteLength:2,components:4};case Ns:case jc:case vs:return{byteLength:4,components:1};case sd:case rd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ut("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function J0(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function lg(i){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,p=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),o.onUploadCallback();let u;if(l instanceof Float32Array)u=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)u=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)u=i.SHORT;else if(l instanceof Uint32Array)u=i.UNSIGNED_INT;else if(l instanceof Int32Array)u=i.INT;else if(l instanceof Int8Array)u=i.BYTE;else if(l instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:u,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,c,l){let h=c.array,p=c.updateRanges;if(i.bindBuffer(l,o),p.length===0)i.bufferSubData(l,0,h);else{p.sort((u,f)=>u.start-f.start);let d=0;for(let u=1;u<p.length;u++){let f=p[d],v=p[u];v.start<=f.start+f.count+1?f.count=Math.max(f.count,v.start+v.count-f.start):(++d,p[d]=v)}p.length=d+1;for(let u=0,f=p.length;u<f;u++){let v=p[u];i.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var cg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ug=`#ifdef USE_ALPHAHASH
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
#endif`,hg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mg=`#ifdef USE_AOMAP
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
#endif`,gg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xg=`#ifdef USE_BATCHING
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
#endif`,vg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_g=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Eg=`#ifdef USE_IRIDESCENCE
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
#endif`,Sg=`#ifdef USE_BUMPMAP
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
#endif`,bg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Tg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ag=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Rg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Cg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Pg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ig=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Dg=`#define PI 3.141592653589793
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
} // validated`,Lg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ng=`vec3 transformedNormal = objectNormal;
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
#endif`,Ug=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Og=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hg="gl_FragColor = linearToOutputTexel( gl_FragColor );",zg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gg=`#ifdef USE_ENVMAP
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
#endif`,kg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Vg=`#ifdef USE_ENVMAP
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
#endif`,Wg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xg=`#ifdef USE_ENVMAP
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
#endif`,Yg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$g=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jg=`#ifdef USE_GRADIENTMAP
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
}`,Kg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,e1=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,t1=`#ifdef USE_ENVMAP
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
#endif`,n1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,i1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,s1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,r1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,a1=`PhysicalMaterial material;
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
#endif`,o1=`uniform sampler2D dfgLUT;
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
}`,l1=`
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
#endif`,c1=`#if defined( RE_IndirectDiffuse )
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
#endif`,u1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,h1=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,d1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,f1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,p1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,m1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,g1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,x1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,v1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,y1=`#if defined( USE_POINTS_UV )
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
#endif`,_1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,M1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,E1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,S1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,b1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,T1=`#ifdef USE_MORPHTARGETS
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
#endif`,w1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,A1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,R1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,C1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,P1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,I1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,D1=`#ifdef USE_NORMALMAP
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
#endif`,L1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,N1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,U1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,F1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,O1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,B1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,H1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,z1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,G1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,k1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,V1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,W1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,X1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Y1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,q1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Z1=`float getShadowMask() {
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
}`,$1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,J1=`#ifdef USE_SKINNING
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
#endif`,K1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Q1=`#ifdef USE_SKINNING
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
#endif`,j1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ex=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ix=`#ifdef USE_TRANSMISSION
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
#endif`,sx=`#ifdef USE_TRANSMISSION
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
#endif`,rx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ax=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ox=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,cx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ux=`uniform sampler2D t2D;
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
}`,hx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,fx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,px=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mx=`#include <common>
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
}`,gx=`#if DEPTH_PACKING == 3200
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
}`,xx=`#define DISTANCE
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
}`,vx=`#define DISTANCE
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
}`,yx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_x=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mx=`uniform float scale;
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
}`,Ex=`uniform vec3 diffuse;
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
}`,Sx=`#include <common>
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
}`,bx=`uniform vec3 diffuse;
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
}`,Tx=`#define LAMBERT
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
}`,wx=`#define LAMBERT
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
}`,Ax=`#define MATCAP
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
}`,Rx=`#define MATCAP
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
}`,Cx=`#define NORMAL
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
}`,Px=`#define NORMAL
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
}`,Ix=`#define PHONG
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
}`,Dx=`#define PHONG
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
}`,Lx=`#define STANDARD
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
}`,Nx=`#define STANDARD
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
}`,Ux=`#define TOON
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
}`,Fx=`#define TOON
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
}`,Ox=`uniform float size;
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
}`,Bx=`uniform vec3 diffuse;
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
}`,Hx=`#include <common>
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
}`,zx=`uniform vec3 color;
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
}`,Gx=`uniform float rotation;
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
}`,kx=`uniform vec3 diffuse;
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
}`,Jt={alphahash_fragment:cg,alphahash_pars_fragment:ug,alphamap_fragment:hg,alphamap_pars_fragment:dg,alphatest_fragment:fg,alphatest_pars_fragment:pg,aomap_fragment:mg,aomap_pars_fragment:gg,batching_pars_vertex:xg,batching_vertex:vg,begin_vertex:yg,beginnormal_vertex:_g,bsdfs:Mg,iridescence_fragment:Eg,bumpmap_pars_fragment:Sg,clipping_planes_fragment:bg,clipping_planes_pars_fragment:Tg,clipping_planes_pars_vertex:wg,clipping_planes_vertex:Ag,color_fragment:Rg,color_pars_fragment:Cg,color_pars_vertex:Pg,color_vertex:Ig,common:Dg,cube_uv_reflection_fragment:Lg,defaultnormal_vertex:Ng,displacementmap_pars_vertex:Ug,displacementmap_vertex:Fg,emissivemap_fragment:Og,emissivemap_pars_fragment:Bg,colorspace_fragment:Hg,colorspace_pars_fragment:zg,envmap_fragment:Gg,envmap_common_pars_fragment:kg,envmap_pars_fragment:Vg,envmap_pars_vertex:Wg,envmap_physical_pars_fragment:t1,envmap_vertex:Xg,fog_vertex:Yg,fog_pars_vertex:qg,fog_fragment:Zg,fog_pars_fragment:$g,gradientmap_pars_fragment:Jg,lightmap_pars_fragment:Kg,lights_lambert_fragment:Qg,lights_lambert_pars_fragment:jg,lights_pars_begin:e1,lights_toon_fragment:n1,lights_toon_pars_fragment:i1,lights_phong_fragment:s1,lights_phong_pars_fragment:r1,lights_physical_fragment:a1,lights_physical_pars_fragment:o1,lights_fragment_begin:l1,lights_fragment_maps:c1,lights_fragment_end:u1,lightprobes_pars_fragment:h1,logdepthbuf_fragment:d1,logdepthbuf_pars_fragment:f1,logdepthbuf_pars_vertex:p1,logdepthbuf_vertex:m1,map_fragment:g1,map_pars_fragment:x1,map_particle_fragment:v1,map_particle_pars_fragment:y1,metalnessmap_fragment:_1,metalnessmap_pars_fragment:M1,morphinstance_vertex:E1,morphcolor_vertex:S1,morphnormal_vertex:b1,morphtarget_pars_vertex:T1,morphtarget_vertex:w1,normal_fragment_begin:A1,normal_fragment_maps:R1,normal_pars_fragment:C1,normal_pars_vertex:P1,normal_vertex:I1,normalmap_pars_fragment:D1,clearcoat_normal_fragment_begin:L1,clearcoat_normal_fragment_maps:N1,clearcoat_pars_fragment:U1,iridescence_pars_fragment:F1,opaque_fragment:O1,packing:B1,premultiplied_alpha_fragment:H1,project_vertex:z1,dithering_fragment:G1,dithering_pars_fragment:k1,roughnessmap_fragment:V1,roughnessmap_pars_fragment:W1,shadowmap_pars_fragment:X1,shadowmap_pars_vertex:Y1,shadowmap_vertex:q1,shadowmask_pars_fragment:Z1,skinbase_vertex:$1,skinning_pars_vertex:J1,skinning_vertex:K1,skinnormal_vertex:Q1,specularmap_fragment:j1,specularmap_pars_fragment:ex,tonemapping_fragment:tx,tonemapping_pars_fragment:nx,transmission_fragment:ix,transmission_pars_fragment:sx,uv_pars_fragment:rx,uv_pars_vertex:ax,uv_vertex:ox,worldpos_vertex:lx,background_vert:cx,background_frag:ux,backgroundCube_vert:hx,backgroundCube_frag:dx,cube_vert:fx,cube_frag:px,depth_vert:mx,depth_frag:gx,distance_vert:xx,distance_frag:vx,equirect_vert:yx,equirect_frag:_x,linedashed_vert:Mx,linedashed_frag:Ex,meshbasic_vert:Sx,meshbasic_frag:bx,meshlambert_vert:Tx,meshlambert_frag:wx,meshmatcap_vert:Ax,meshmatcap_frag:Rx,meshnormal_vert:Cx,meshnormal_frag:Px,meshphong_vert:Ix,meshphong_frag:Dx,meshphysical_vert:Lx,meshphysical_frag:Nx,meshtoon_vert:Ux,meshtoon_frag:Fx,points_vert:Ox,points_frag:Bx,shadow_vert:Hx,shadow_frag:zx,sprite_vert:Gx,sprite_frag:kx},pt={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},envMapRotation:{value:new Xt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new N},probesMax:{value:new N},probesResolution:{value:new N}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},er={basic:{uniforms:Di([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:Di([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new it(0)},envMapIntensity:{value:1}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:Di([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:Di([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:Di([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new it(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:Di([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:Di([pt.points,pt.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:Di([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:Di([pt.common,pt.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:Di([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:Di([pt.sprite,pt.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xt}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distance:{uniforms:Di([pt.common,pt.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distance_vert,fragmentShader:Jt.distance_frag},shadow:{uniforms:Di([pt.lights,pt.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};er.physical={uniforms:Di([er.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};var Bu={r:0,b:0,g:0},Vx=new Mt,K0=new Xt;K0.set(-1,0,0,0,1,0,0,0,1);function Wx(i,e,t,n,s,r){let a=new it(0),o=s===!0?0:1,c,l,h=null,p=0,d=null;function u(M){let S=M.isScene===!0?M.background:null;if(S&&S.isTexture){let y=M.backgroundBlurriness>0;S=e.get(S,y)}return S}function f(M){let S=!1,y=u(M);y===null?m(a,o):y&&y.isColor&&(m(y,1),S=!0);let _=i.xr.getEnvironmentBlendMode();_==="additive"?t.buffers.color.setClear(0,0,0,1,r):_==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||S)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(M,S){let y=u(S);y&&(y.isCubeTexture||y.mapping===rl)?(l===void 0&&(l=new De(new ln(1,1,1),new mn({name:"BackgroundCubeMaterial",uniforms:ta(er.backgroundCube.uniforms),vertexShader:er.backgroundCube.vertexShader,fragmentShader:er.backgroundCube.fragmentShader,side:vi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(_,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Vx.makeRotationFromEuler(S.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(K0),l.material.toneMapped=dn.getTransfer(y.colorSpace)!==gn,(h!==y||p!==y.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,p=y.version,d=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new De(new cn(2,2),new mn({name:"BackgroundMaterial",uniforms:ta(er.background.uniforms),vertexShader:er.background.vertexShader,fragmentShader:er.background.fragmentShader,side:Ir,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=dn.getTransfer(y.colorSpace)!==gn,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||p!==y.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,p=y.version,d=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,S){M.getRGB(Bu,dd(i)),t.buffers.color.setClear(Bu.r,Bu.g,Bu.b,S,r)}function g(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,S=1){a.set(M),o=S,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,m(a,o)},render:f,addToRenderList:v,dispose:g}}function Xx(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(F,b,L,P,H){let Z=!1,V=p(F,P,L,b);r!==V&&(r=V,l(r.object)),Z=u(F,P,L,H),Z&&f(F,P,L,H),H!==null&&e.update(H,i.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,y(F,b,L,P),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function c(){return i.createVertexArray()}function l(F){return i.bindVertexArray(F)}function h(F){return i.deleteVertexArray(F)}function p(F,b,L,P){let H=P.wireframe===!0,Z=n[b.id];Z===void 0&&(Z={},n[b.id]=Z);let V=F.isInstancedMesh===!0?F.id:0,W=Z[V];W===void 0&&(W={},Z[V]=W);let G=W[L.id];G===void 0&&(G={},W[L.id]=G);let k=G[H];return k===void 0&&(k=d(c()),G[H]=k),k}function d(F){let b=[],L=[],P=[];for(let H=0;H<t;H++)b[H]=0,L[H]=0,P[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:L,attributeDivisors:P,object:F,attributes:{},index:null}}function u(F,b,L,P){let H=r.attributes,Z=b.attributes,V=0,W=L.getAttributes();for(let G in W)if(W[G].location>=0){let Y=H[G],he=Z[G];if(he===void 0&&(G==="instanceMatrix"&&F.instanceMatrix&&(he=F.instanceMatrix),G==="instanceColor"&&F.instanceColor&&(he=F.instanceColor)),Y===void 0||Y.attribute!==he||he&&Y.data!==he.data)return!0;V++}return r.attributesNum!==V||r.index!==P}function f(F,b,L,P){let H={},Z=b.attributes,V=0,W=L.getAttributes();for(let G in W)if(W[G].location>=0){let Y=Z[G];Y===void 0&&(G==="instanceMatrix"&&F.instanceMatrix&&(Y=F.instanceMatrix),G==="instanceColor"&&F.instanceColor&&(Y=F.instanceColor));let he={};he.attribute=Y,Y&&Y.data&&(he.data=Y.data),H[G]=he,V++}r.attributes=H,r.attributesNum=V,r.index=P}function v(){let F=r.newAttributes;for(let b=0,L=F.length;b<L;b++)F[b]=0}function m(F){g(F,0)}function g(F,b){let L=r.newAttributes,P=r.enabledAttributes,H=r.attributeDivisors;L[F]=1,P[F]===0&&(i.enableVertexAttribArray(F),P[F]=1),H[F]!==b&&(i.vertexAttribDivisor(F,b),H[F]=b)}function M(){let F=r.newAttributes,b=r.enabledAttributes;for(let L=0,P=b.length;L<P;L++)b[L]!==F[L]&&(i.disableVertexAttribArray(L),b[L]=0)}function S(F,b,L,P,H,Z,V){V===!0?i.vertexAttribIPointer(F,b,L,H,Z):i.vertexAttribPointer(F,b,L,P,H,Z)}function y(F,b,L,P){v();let H=P.attributes,Z=L.getAttributes(),V=b.defaultAttributeValues;for(let W in Z){let G=Z[W];if(G.location>=0){let k=H[W];if(k===void 0&&(W==="instanceMatrix"&&F.instanceMatrix&&(k=F.instanceMatrix),W==="instanceColor"&&F.instanceColor&&(k=F.instanceColor)),k!==void 0){let Y=k.normalized,he=k.itemSize,we=e.get(k);if(we===void 0)continue;let Ie=we.buffer,Xe=we.type,rt=we.bytesPerElement,Q=Xe===i.INT||Xe===i.UNSIGNED_INT||k.gpuType===jc;if(k.isInterleavedBufferAttribute){let de=k.data,Ce=de.stride,xe=k.offset;if(de.isInstancedInterleavedBuffer){for(let Ue=0;Ue<G.locationSize;Ue++)g(G.location+Ue,de.meshPerAttribute);F.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Ue=0;Ue<G.locationSize;Ue++)m(G.location+Ue);i.bindBuffer(i.ARRAY_BUFFER,Ie);for(let Ue=0;Ue<G.locationSize;Ue++)S(G.location+Ue,he/G.locationSize,Xe,Y,Ce*rt,(xe+he/G.locationSize*Ue)*rt,Q)}else{if(k.isInstancedBufferAttribute){for(let de=0;de<G.locationSize;de++)g(G.location+de,k.meshPerAttribute);F.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let de=0;de<G.locationSize;de++)m(G.location+de);i.bindBuffer(i.ARRAY_BUFFER,Ie);for(let de=0;de<G.locationSize;de++)S(G.location+de,he/G.locationSize,Xe,Y,he*rt,he/G.locationSize*de*rt,Q)}}else if(V!==void 0){let Y=V[W];if(Y!==void 0)switch(Y.length){case 2:i.vertexAttrib2fv(G.location,Y);break;case 3:i.vertexAttrib3fv(G.location,Y);break;case 4:i.vertexAttrib4fv(G.location,Y);break;default:i.vertexAttrib1fv(G.location,Y)}}}}M()}function _(){w();for(let F in n){let b=n[F];for(let L in b){let P=b[L];for(let H in P){let Z=P[H];for(let V in Z)h(Z[V].object),delete Z[V];delete P[H]}}delete n[F]}}function T(F){if(n[F.id]===void 0)return;let b=n[F.id];for(let L in b){let P=b[L];for(let H in P){let Z=P[H];for(let V in Z)h(Z[V].object),delete Z[V];delete P[H]}}delete n[F.id]}function A(F){for(let b in n){let L=n[b];for(let P in L){let H=L[P];if(H[F.id]===void 0)continue;let Z=H[F.id];for(let V in Z)h(Z[V].object),delete Z[V];delete H[F.id]}}}function x(F){for(let b in n){let L=n[b],P=F.isInstancedMesh===!0?F.id:0,H=L[P];if(H!==void 0){for(let Z in H){let V=H[Z];for(let W in V)h(V[W].object),delete V[W];delete H[Z]}delete L[P],Object.keys(L).length===0&&delete n[b]}}}function w(){C(),a=!0,r!==s&&(r=s,l(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:w,resetDefaultState:C,dispose:_,releaseStatesOfGeometry:T,releaseStatesOfObject:x,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:m,disableUnusedAttributes:M}}function Yx(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function o(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let d=0;for(let u=0;u<h;u++)d+=l[u];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function qx(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==Ei&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let x=A===Vn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==li&&A!==vs&&!x&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(Ut("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let p=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&Ut("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),_=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:p,reversedDepthBuffer:d,maxTextures:u,maxVertexTextures:f,maxTextureSize:v,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:M,maxVaryings:S,maxFragmentUniforms:y,maxSamples:_,samples:T}}function Zx(i){let e=this,t=null,n=0,s=!1,r=!1,a=new ts,o=new Xt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,d){let u=p.length!==0||d||n!==0||s;return s=d,n=p.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,d){t=h(p,d,0)},this.setState=function(p,d,u){let f=p.clippingPlanes,v=p.clipIntersection,m=p.clipShadows,g=i.get(p);if(!s||f===null||f.length===0||r&&!m)r?h(null):l();else{let M=r?0:n,S=M*4,y=g.clippingState||null;c.value=y,y=h(f,d,S,u);for(let _=0;_!==S;++_)y[_]=t[_];g.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(p,d,u,f){let v=p!==null?p.length:0,m=null;if(v!==0){if(m=c.value,f!==!0||m===null){let g=u+v*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<g)&&(m=new Float32Array(g));for(let S=0,y=u;S!==v;++S,y+=4)a.copy(p[S]).applyMatrix4(M,o),a.normal.toArray(m,y),m[y+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}var Ka=4,$x=6,Jx=20,Kx=256,pl=new Pr,C0=new it,Md=null,Ed=0,Sd=0,bd=!1,Qx=new N,na=new N,ja=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=Qx}=r;Md=this._renderer.getRenderTarget(),Ed=this._renderer.getActiveCubeFace(),Sd=this._renderer.getActiveMipmapLevel(),bd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=D0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=I0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Md,Ed,Sd),this._renderer.xr.enabled=bd,e.scissorTest=!1,Ja(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Nr||e.mapping===ea?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Md=this._renderer.getRenderTarget(),Ed=this._renderer.getActiveCubeFace(),Sd=this._renderer.getActiveMipmapLevel(),bd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ei,minFilter:ei,generateMipmaps:!1,type:Vn,format:Ei,colorSpace:So,depthBuffer:!1},s=P0(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=P0(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=jx(r)),this._blurMaterial=tv(r,e,t),this._ggxMaterial=ev(r,e,t)}return s}_compileMaterial(e){let t=new De(new kt,e);this._renderer.compile(t,pl)}_sceneToCubeUV(e,t,n,s,r){let c=new mi(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,d=p.autoClear,u=p.toneMapping;p.getClearColor(C0),p.toneMapping=ss,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(s),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new De(new ln,new yn({name:"PMREM.Background",side:vi,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,m=v.material,g=!1,M=e.background;M?M.isColor&&(m.color.copy(M),e.background=null,g=!0):(m.color.copy(C0),g=!0);for(let S=0;S<6;S++){let y=S%3;y===0?(c.up.set(0,l[S],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[S],r.y,r.z)):y===1?(c.up.set(0,0,l[S]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[S],r.z)):(c.up.set(0,l[S],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[S]));let _=this._cubeSize;Ja(s,y*_,S>2?_:0,_,_),p.setRenderTarget(s),g&&p.render(v,c),p.render(e,c)}p.toneMapping=u,p.autoClear=d,e.background=M}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Nr||e.mapping===ea;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=D0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=I0());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;Ja(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,pl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,l=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),p=Math.sqrt(l*l-h*h),d=l*1.25,u=p*d,{_lodMax:f}=this,v=this._sizeLods[n],m=3*v*(n>f-Ka?n-f+Ka:0),g=4*(this._cubeSize-v);c.envMap.value=e.texture,c.roughness.value=u,c.mipInt.value=f-t,Ja(r,m,g,3*v,2*v),s.setRenderTarget(r),s.render(o,pl),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=f-n,Ja(e,m,g,3*v,2*v),s.setRenderTarget(e),s.render(o,pl)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[s];c.material=o;let l=o.uniforms;l.envMap.value=e.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],p=3*h*(s>this._lodMax-Ka?s-this._lodMax+Ka:0),d=4*(this._cubeSize-h);Ja(t,p,d,3*h,2*h),a.setRenderTarget(t),a.render(c,pl)}};function jx(i){let e=[],t=[],n=i,s=i-Ka+1+$x;for(let r=0;r<s;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),c=-o,l=1+o,h=[c,c,l,c,l,l,c,c,l,l,c,l],p=6,d=6,u=3,f=new Float32Array(u*d*p),v=new Float32Array(u*d*p);for(let g=0;g<p;g++){let M=g%3*2/3-1,S=g>2?0:-1,y=[M,S,0,M+2/3,S,0,M+2/3,S+1,0,M,S,0,M+2/3,S+1,0,M,S+1,0];f.set(y,u*d*g);for(let _=0;_<d;_++){let T=h[_*2]*2-1,A=h[_*2+1]*2-1;g===0?na.set(1,A,T):g===1?na.set(-T,1,-A):g===2?na.set(-T,A,1):g===3?na.set(-1,A,-T):g===4?na.set(-T,-1,A):na.set(T,A,-1),na.toArray(v,(g*d+_)*u)}}let m=new kt;m.setAttribute("position",new Ot(f,u)),m.setAttribute("outputDirection",new Ot(v,u)),t.push(new De(m,null)),n>Ka&&n--}return{lodMeshes:t,sizeLods:e}}function P0(i,e,t){let n=new Cn(i,e,t);return n.texture.mapping=rl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ja(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function ev(i,e,t){return new mn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Kx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ku(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function tv(i,e,t){return new mn({name:"SphericalGaussianBlur",defines:{SAMPLES:Jx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ku(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function I0(){return new mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ku(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function D0(){return new mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ku(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function ku(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var zu=class extends Cn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Lo(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ln(5,5,5),r=new mn({name:"CubemapFromEquirect",uniforms:ta(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:vi,blending:Jn});r.uniforms.tEquirect.value=t;let a=new De(s,r),o=t.minFilter;return t.minFilter===Ks&&(t.minFilter=ei),new Yc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};function nv(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,u=!1){return d==null?null:u?a(d):r(d)}function r(d){if(d&&d.isTexture){let u=d.mapping;if(u===Jc||u===Kc)if(e.has(d)){let f=e.get(d).texture;return o(f,d.mapping)}else{let f=d.image;if(f&&f.height>0){let v=new zu(f.height);return v.fromEquirectangularTexture(i,d),e.set(d,v),d.addEventListener("dispose",l),o(v.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){let u=d.mapping,f=u===Jc||u===Kc,v=u===Nr||u===ea;if(f||v){let m=t.get(d),g=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return n===null&&(n=new ja(i)),m=f?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{let M=d.image;return f&&M&&M.height>0||v&&M&&c(M)?(n===null&&(n=new ja(i)),m=f?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function o(d,u){return u===Jc?d.mapping=Nr:u===Kc&&(d.mapping=ea),d}function c(d){let u=0,f=6;for(let v=0;v<f;v++)d[v]!==void 0&&u++;return u===f}function l(d){let u=d.target;u.removeEventListener("dispose",l);let f=e.get(u);f!==void 0&&(e.delete(u),f.dispose())}function h(d){let u=d.target;u.removeEventListener("dispose",h);let f=t.get(u);f!==void 0&&(t.delete(u),f.dispose())}function p(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:p}}function iv(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Wr("WebGLRenderer: "+n+" extension not supported."),s}}}function sv(i,e,t,n){let s={},r=new WeakMap;function a(p){let d=p.target;d.index!==null&&e.remove(d.index);for(let f in d.attributes)e.remove(d.attributes[f]);d.removeEventListener("dispose",a),delete s[d.id];let u=r.get(d);u&&(e.remove(u),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(p,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function c(p){let d=p.attributes;for(let u in d)e.update(d[u],i.ARRAY_BUFFER)}function l(p){let d=[],u=p.index,f=p.attributes.position,v=0;if(f===void 0)return;if(u!==null){let M=u.array;v=u.version;for(let S=0,y=M.length;S<y;S+=3){let _=M[S+0],T=M[S+1],A=M[S+2];d.push(_,T,T,A,A,_)}}else{let M=f.array;v=f.version;for(let S=0,y=M.length/3-1;S<y;S+=3){let _=S+0,T=S+1,A=S+2;d.push(_,T,T,A,A,_)}}let m=new(f.count>=65535?Io:Po)(d,1);m.version=v;let g=r.get(p);g&&e.remove(g),r.set(p,m)}function h(p){let d=r.get(p);if(d){let u=p.index;u!==null&&d.version<u.version&&l(p)}else l(p);return r.get(p)}return{get:o,update:c,getWireframeAttribute:h}}function rv(i,e,t){let n;function s(p){n=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function c(p,d){i.drawElements(n,d,r,p*a),t.update(d,n,1)}function l(p,d,u){u!==0&&(i.drawElementsInstanced(n,d,r,p*a,u),t.update(d,n,u))}function h(p,d,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,p,0,u);let v=0;for(let m=0;m<u;m++)v+=d[m];t.update(v,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function av(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Ft("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function ov(i,e,t){let n=new WeakMap,s=new Rn;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==p){let w=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();let u=o.morphAttributes.position!==void 0,f=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],S=0;u===!0&&(S=1),f===!0&&(S=2),v===!0&&(S=3);let y=o.attributes.position.count*S,_=1;y>e.maxTextureSize&&(_=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let T=new Float32Array(y*_*4*p),A=new Ro(T,y,_,p);A.type=vs,A.needsUpdate=!0;let x=S*4;for(let C=0;C<p;C++){let F=m[C],b=g[C],L=M[C],P=y*_*4*C;for(let H=0;H<F.count;H++){let Z=H*x;u===!0&&(s.fromBufferAttribute(F,H),T[P+Z+0]=s.x,T[P+Z+1]=s.y,T[P+Z+2]=s.z,T[P+Z+3]=0),f===!0&&(s.fromBufferAttribute(b,H),T[P+Z+4]=s.x,T[P+Z+5]=s.y,T[P+Z+6]=s.z,T[P+Z+7]=0),v===!0&&(s.fromBufferAttribute(L,H),T[P+Z+8]=s.x,T[P+Z+9]=s.y,T[P+Z+10]=s.z,T[P+Z+11]=L.itemSize===4?s.w:1)}}d={count:p,texture:A,size:new He(y,_)},n.set(o,d),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let u=0;for(let v=0;v<l.length;v++)u+=l[v];let f=o.morphTargetsRelative?1:1-u;c.getUniforms().setValue(i,"morphTargetBaseInfluence",f),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function lv(i,e,t,n,s){let r=new WeakMap;function a(l){let h=s.render.frame,p=l.geometry,d=e.get(l,p);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let u=l.skeleton;r.get(u)!==h&&(u.update(),r.set(u,h))}return d}function o(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var cv={[jo]:"LINEAR_TONE_MAPPING",[el]:"REINHARD_TONE_MAPPING",[tl]:"CINEON_TONE_MAPPING",[Lr]:"ACES_FILMIC_TONE_MAPPING",[il]:"AGX_TONE_MAPPING",[sl]:"NEUTRAL_TONE_MAPPING",[nl]:"CUSTOM_TONE_MAPPING"};function uv(i,e,t,n,s,r){let a=new Cn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=new kt;l.setAttribute("position",new Dt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Dt([0,2,0,0,2,0],2));let h=new Wa({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new De(l,h),d=new Pr(-1,1,1,-1,0,1),u=null,f=null,v=!1,m,g=null,M=[],S=!1;this.setSize=function(y,_){a.setSize(y,_),o!==null&&o.setSize(y,_),c!==null&&c.setSize(y,_);for(let T=0;T<M.length;T++){let A=M[T];A.setSize&&A.setSize(y,_)}},this.setEffects=function(y){M=y,S=M.length>0&&M[0].isRenderPass===!0;let _=a.width,T=a.height;M.length>0&&o===null&&(o=new Cn(_,T,{type:Vn,depthBuffer:!1,stencilBuffer:!1}),c=new Cn(_,T,{type:Vn,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<M.length;A++){let x=M[A];x.setSize&&x.setSize(_,T)}},this.begin=function(y,_){if(v||y.toneMapping===ss&&M.length===0)return!1;if(g=_,_!==null){let T=_.width,A=_.height;(a.width!==T||a.height!==A)&&this.setSize(T,A)}return S===!1&&y.setRenderTarget(a),m=y.toneMapping,y.toneMapping=ss,!0},this.hasRenderPass=function(){return S},this.end=function(y,_){y.toneMapping=m,v=!0;let T=a,A=o;for(let x=0;x<M.length;x++){let w=M[x];w.enabled!==!1&&(w.render(y,A,T,_),w.needsSwap!==!1&&(T=A,A=A===o?c:o))}if(u!==y.outputColorSpace||f!==y.toneMapping){u=y.outputColorSpace,f=y.toneMapping,h.defines={},dn.getTransfer(u)===gn&&(h.defines.SRGB_TRANSFER="");let x=cv[f];x&&(h.defines[x]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=T.texture,y.setRenderTarget(g),y.render(p,d),g=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),h.dispose()}}var Q0=new Gi,Ad=new ms(1,1),j0=new Ro,ep=new wc,tp=new Lo,L0=[],N0=[],U0=new Float32Array(16),F0=new Float32Array(9),O0=new Float32Array(4);function eo(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=L0[s];if(r===void 0&&(r=new Float32Array(s),L0[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function ci(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function ui(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Vu(i,e){let t=N0[e];t===void 0&&(t=new Int32Array(e),N0[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function hv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function dv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ci(t,e))return;i.uniform2fv(this.addr,e),ui(t,e)}}function fv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ci(t,e))return;i.uniform3fv(this.addr,e),ui(t,e)}}function pv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ci(t,e))return;i.uniform4fv(this.addr,e),ui(t,e)}}function mv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(ci(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),ui(t,e)}else{if(ci(t,n))return;O0.set(n),i.uniformMatrix2fv(this.addr,!1,O0),ui(t,n)}}function gv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(ci(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),ui(t,e)}else{if(ci(t,n))return;F0.set(n),i.uniformMatrix3fv(this.addr,!1,F0),ui(t,n)}}function xv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(ci(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),ui(t,e)}else{if(ci(t,n))return;U0.set(n),i.uniformMatrix4fv(this.addr,!1,U0),ui(t,n)}}function vv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function yv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ci(t,e))return;i.uniform2iv(this.addr,e),ui(t,e)}}function _v(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ci(t,e))return;i.uniform3iv(this.addr,e),ui(t,e)}}function Mv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ci(t,e))return;i.uniform4iv(this.addr,e),ui(t,e)}}function Ev(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Sv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ci(t,e))return;i.uniform2uiv(this.addr,e),ui(t,e)}}function bv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ci(t,e))return;i.uniform3uiv(this.addr,e),ui(t,e)}}function Tv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ci(t,e))return;i.uniform4uiv(this.addr,e),ui(t,e)}}function wv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ad.compareFunction=t.isReversedDepthBuffer()?Ou:Fu,r=Ad):r=Q0,t.setTexture2D(e||r,s)}function Av(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||ep,s)}function Rv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||tp,s)}function Cv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||j0,s)}function Pv(i){switch(i){case 5126:return hv;case 35664:return dv;case 35665:return fv;case 35666:return pv;case 35674:return mv;case 35675:return gv;case 35676:return xv;case 5124:case 35670:return vv;case 35667:case 35671:return yv;case 35668:case 35672:return _v;case 35669:case 35673:return Mv;case 5125:return Ev;case 36294:return Sv;case 36295:return bv;case 36296:return Tv;case 35678:case 36198:case 36298:case 36306:case 35682:return wv;case 35679:case 36299:case 36307:return Av;case 35680:case 36300:case 36308:case 36293:return Rv;case 36289:case 36303:case 36311:case 36292:return Cv}}function Iv(i,e){i.uniform1fv(this.addr,e)}function Dv(i,e){let t=eo(e,this.size,2);i.uniform2fv(this.addr,t)}function Lv(i,e){let t=eo(e,this.size,3);i.uniform3fv(this.addr,t)}function Nv(i,e){let t=eo(e,this.size,4);i.uniform4fv(this.addr,t)}function Uv(i,e){let t=eo(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Fv(i,e){let t=eo(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Ov(i,e){let t=eo(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Bv(i,e){i.uniform1iv(this.addr,e)}function Hv(i,e){i.uniform2iv(this.addr,e)}function zv(i,e){i.uniform3iv(this.addr,e)}function Gv(i,e){i.uniform4iv(this.addr,e)}function kv(i,e){i.uniform1uiv(this.addr,e)}function Vv(i,e){i.uniform2uiv(this.addr,e)}function Wv(i,e){i.uniform3uiv(this.addr,e)}function Xv(i,e){i.uniform4uiv(this.addr,e)}function Yv(i,e,t){let n=this.cache,s=e.length,r=Vu(t,s);ci(n,r)||(i.uniform1iv(this.addr,r),ui(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Ad:a=Q0;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function qv(i,e,t){let n=this.cache,s=e.length,r=Vu(t,s);ci(n,r)||(i.uniform1iv(this.addr,r),ui(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||ep,r[a])}function Zv(i,e,t){let n=this.cache,s=e.length,r=Vu(t,s);ci(n,r)||(i.uniform1iv(this.addr,r),ui(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||tp,r[a])}function $v(i,e,t){let n=this.cache,s=e.length,r=Vu(t,s);ci(n,r)||(i.uniform1iv(this.addr,r),ui(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||j0,r[a])}function Jv(i){switch(i){case 5126:return Iv;case 35664:return Dv;case 35665:return Lv;case 35666:return Nv;case 35674:return Uv;case 35675:return Fv;case 35676:return Ov;case 5124:case 35670:return Bv;case 35667:case 35671:return Hv;case 35668:case 35672:return zv;case 35669:case 35673:return Gv;case 5125:return kv;case 36294:return Vv;case 36295:return Wv;case 36296:return Xv;case 35678:case 36198:case 36298:case 36306:case 35682:return Yv;case 35679:case 36299:case 36307:return qv;case 35680:case 36300:case 36308:case 36293:return Zv;case 36289:case 36303:case 36311:case 36292:return $v}}var Rd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Pv(t.type)}},Cd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Jv(t.type)}},Pd=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Td=/(\w+)(\])?(\[|\.)?/g;function B0(i,e){i.seq.push(e),i.map[e.id]=e}function Kv(i,e,t){let n=i.name,s=n.length;for(Td.lastIndex=0;;){let r=Td.exec(n),a=Td.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){B0(t,l===void 0?new Rd(o,i,e):new Cd(o,i,e));break}else{let p=t.map[o];p===void 0&&(p=new Pd(o),B0(t,p)),t=p}}}var Qa=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);Kv(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function H0(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Qv=37297,jv=0;function e2(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var z0=new Xt;function t2(i){dn._getMatrix(z0,dn.workingColorSpace,i);let e=`mat3( ${z0.elements.map(t=>t.toFixed(4))} )`;switch(dn.getTransfer(i)){case bo:return[e,"LinearTransferOETF"];case gn:return[e,"sRGBTransferOETF"];default:return Ut("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function G0(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+e2(i.getShaderSource(e),o)}else return r}function n2(i,e){let t=t2(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var i2={[jo]:"Linear",[el]:"Reinhard",[tl]:"Cineon",[Lr]:"ACESFilmic",[il]:"AgX",[sl]:"Neutral",[nl]:"Custom"};function s2(i,e){let t=i2[e];return t===void 0?(Ut("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Hu=new N;function r2(){dn.getLuminanceCoefficients(Hu);let i=Hu.x.toFixed(4),e=Hu.y.toFixed(4),t=Hu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function a2(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gl).join(`
`)}function o2(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function l2(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function gl(i){return i!==""}function k0(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function V0(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var c2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Id(i){return i.replace(c2,h2)}var u2=new Map;function h2(i,e){let t=Jt[e];if(t===void 0){let n=u2.get(e);if(n!==void 0)t=Jt[n],Ut('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Id(t)}var d2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function W0(i){return i.replace(d2,f2)}function f2(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function X0(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var p2={[Qr]:"SHADOWMAP_TYPE_PCF",[Za]:"SHADOWMAP_TYPE_VSM"};function m2(i){return p2[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var g2={[Nr]:"ENVMAP_TYPE_CUBE",[ea]:"ENVMAP_TYPE_CUBE",[rl]:"ENVMAP_TYPE_CUBE_UV"};function x2(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":g2[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var v2={[ea]:"ENVMAP_MODE_REFRACTION"};function y2(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":v2[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var _2={[ed]:"ENVMAP_BLENDING_MULTIPLY",[r0]:"ENVMAP_BLENDING_MIX",[a0]:"ENVMAP_BLENDING_ADD"};function M2(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":_2[i.combine]||"ENVMAP_BLENDING_NONE"}function E2(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function S2(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=m2(t),l=x2(t),h=y2(t),p=M2(t),d=E2(t),u=a2(t),f=o2(r),v=s.createProgram(),m,g,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(gl).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(gl).join(`
`),g.length>0&&(g+=`
`)):(m=[X0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gl).join(`
`),g=[X0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ss?"#define TONE_MAPPING":"",t.toneMapping!==ss?Jt.tonemapping_pars_fragment:"",t.toneMapping!==ss?s2("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,n2("linearToOutputTexel",t.outputColorSpace),r2(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(gl).join(`
`)),a=Id(a),a=k0(a,t),a=V0(a,t),o=Id(o),o=k0(o,t),o=V0(o,t),a=W0(a),o=W0(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===ud?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ud?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let S=M+m+a,y=M+g+o,_=H0(s,s.VERTEX_SHADER,S),T=H0(s,s.FRAGMENT_SHADER,y);s.attachShader(v,_),s.attachShader(v,T),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function A(F){if(i.debug.checkShaderErrors){let b=s.getProgramInfoLog(v)||"",L=s.getShaderInfoLog(_)||"",P=s.getShaderInfoLog(T)||"",H=b.trim(),Z=L.trim(),V=P.trim(),W=!0,G=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,_,T);else{let k=G0(s,_,"vertex"),Y=G0(s,T,"fragment");Ft("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+H+`
`+k+`
`+Y)}else H!==""?Ut("WebGLProgram: Program Info Log:",H):(Z===""||V==="")&&(G=!1);G&&(F.diagnostics={runnable:W,programLog:H,vertexShader:{log:Z,prefix:m},fragmentShader:{log:V,prefix:g}})}s.deleteShader(_),s.deleteShader(T),x=new Qa(s,v),w=l2(s,v)}let x;this.getUniforms=function(){return x===void 0&&A(this),x};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(v,Qv)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=jv++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=_,this.fragmentShader=T,this}var b2=0,Dd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ld(e),t.set(e,n)),n}},Ld=class{constructor(e){this.id=b2++,this.code=e,this.usedTimes=0}};function T2(i){return i===Fr||i===hl||i===dl}function w2(i,e,t,n,s,r){let a=new La,o=new Dd,c=new Set,l=[],h=new Map,p=n.logarithmicDepthBuffer,d=n.precision,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return c.add(x),x===0?"uv":`uv${x}`}function v(x,w,C,F,b,L){let P=F.fog,H=b.geometry,Z=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?F.environment:null,V=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,W=e.get(x.envMap||Z,V),G=W&&W.mapping===rl?W.image.height:null,k=u[x.type];x.precision!==null&&(d=n.getMaxPrecision(x.precision),d!==x.precision&&Ut("WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));let Y=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,he=Y!==void 0?Y.length:0,we=0;H.morphAttributes.position!==void 0&&(we=1),H.morphAttributes.normal!==void 0&&(we=2),H.morphAttributes.color!==void 0&&(we=3);let Ie,Xe,rt,Q;if(k){let et=er[k];Ie=et.vertexShader,Xe=et.fragmentShader}else{Ie=x.vertexShader,Xe=x.fragmentShader;let et=o.getVertexShaderStage(x),ot=o.getFragmentShaderStage(x);o.update(x,et,ot),rt=et.id,Q=ot.id}let de=i.getRenderTarget(),Ce=i.state.buffers.depth.getReversed(),xe=b.isInstancedMesh===!0,Ue=b.isBatchedMesh===!0,$=!!x.map,Be=!!x.matcap,te=!!W,oe=!!x.aoMap,K=!!x.lightMap,ne=!!x.bumpMap&&x.wireframe===!1,ue=!!x.normalMap,Ge=!!x.displacementMap,Oe=!!x.emissiveMap,Je=!!x.metalnessMap,je=!!x.roughnessMap,q=x.anisotropy>0,gt=x.clearcoat>0,dt=x.dispersion>0,O=x.retroreflectivity>0,E=x.iridescence>0,j=x.sheen>0,se=x.transmission>0,fe=q&&!!x.anisotropyMap,Ve=gt&&!!x.clearcoatMap,ke=gt&&!!x.clearcoatNormalMap,Te=gt&&!!x.clearcoatRoughnessMap,ve=E&&!!x.iridescenceMap,Ke=E&&!!x.iridescenceThicknessMap,xt=j&&!!x.sheenColorMap,D=j&&!!x.sheenRoughnessMap,J=!!x.specularMap,le=!!x.specularColorMap,ge=!!x.specularIntensityMap,Le=se&&!!x.transmissionMap,B=se&&!!x.thicknessMap,Se=!!x.gradientMap,re=!!x.alphaMap,Ne=x.alphaTest>0,Re=!!x.alphaHash,U=!!x.extensions,be=ss;x.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(be=i.toneMapping);let ce={shaderID:k,shaderType:x.type,shaderName:x.name,vertexShader:Ie,fragmentShader:Xe,defines:x.defines,customVertexShaderID:rt,customFragmentShaderID:Q,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:Ue,batchingColor:Ue&&b._colorsTexture!==null,instancing:xe,instancingColor:xe&&b.instanceColor!==null,instancingMorph:xe&&b.morphTexture!==null,outputColorSpace:de===null?i.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:dn.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:$,matcap:Be,envMap:te,envMapMode:te&&W.mapping,envMapCubeUVHeight:G,aoMap:oe,lightMap:K,bumpMap:ne,normalMap:ue,displacementMap:Ge,emissiveMap:Oe,normalMapObjectSpace:ue&&x.normalMapType===c0,normalMapTangentSpace:ue&&x.normalMapType===fl,packedNormalMap:ue&&x.normalMapType===fl&&T2(x.normalMap.format),metalnessMap:Je,roughnessMap:je,anisotropy:q,anisotropyMap:fe,clearcoat:gt,clearcoatMap:Ve,clearcoatNormalMap:ke,clearcoatRoughnessMap:Te,dispersion:dt,retroreflection:O,iridescence:E,iridescenceMap:ve,iridescenceThicknessMap:Ke,sheen:j,sheenColorMap:xt,sheenRoughnessMap:D,specularMap:J,specularColorMap:le,specularIntensityMap:ge,transmission:se,transmissionMap:Le,thicknessMap:B,gradientMap:Se,opaque:x.transparent===!1&&x.blending===Dr&&x.alphaToCoverage===!1,alphaMap:re,alphaTest:Ne,alphaHash:Re,combine:x.combine,mapUv:$&&f(x.map.channel),aoMapUv:oe&&f(x.aoMap.channel),lightMapUv:K&&f(x.lightMap.channel),bumpMapUv:ne&&f(x.bumpMap.channel),normalMapUv:ue&&f(x.normalMap.channel),displacementMapUv:Ge&&f(x.displacementMap.channel),emissiveMapUv:Oe&&f(x.emissiveMap.channel),metalnessMapUv:Je&&f(x.metalnessMap.channel),roughnessMapUv:je&&f(x.roughnessMap.channel),anisotropyMapUv:fe&&f(x.anisotropyMap.channel),clearcoatMapUv:Ve&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:ke&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&f(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:Ke&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:xt&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:D&&f(x.sheenRoughnessMap.channel),specularMapUv:J&&f(x.specularMap.channel),specularColorMapUv:le&&f(x.specularColorMap.channel),specularIntensityMapUv:ge&&f(x.specularIntensityMap.channel),transmissionMapUv:Le&&f(x.transmissionMap.channel),thicknessMapUv:B&&f(x.thicknessMap.channel),alphaMapUv:re&&f(x.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(ue||q),vertexNormals:!!H.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:b.isPoints===!0&&!!H.attributes.uv&&($||re),fog:!!P,useFog:x.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||H.attributes.normal===void 0&&ue===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:Ce,skinning:b.isSkinnedMesh===!0,hasPositionAttribute:H.attributes.position!==void 0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:we,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:L.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:be,decodeVideoTexture:$&&x.map.isVideoTexture===!0&&dn.getTransfer(x.map.colorSpace)===gn,decodeVideoTextureEmissive:Oe&&x.emissiveMap.isVideoTexture===!0&&dn.getTransfer(x.emissiveMap.colorSpace)===gn,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Xn,flipSided:x.side===vi,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:U&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(U&&x.extensions.multiDraw===!0||Ue)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ce.vertexUv1s=c.has(1),ce.vertexUv2s=c.has(2),ce.vertexUv3s=c.has(3),c.clear(),ce}function m(x){let w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(let C in x.defines)w.push(C),w.push(x.defines[C]);return x.isRawShaderMaterial===!1&&(g(w,x),M(w,x),w.push(i.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function g(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numSunLights),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numSunLightShadows),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function M(x,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function S(x){let w=u[x.type],C;if(w){let F=er[w];C=Vi.clone(F.uniforms)}else C=x.uniforms;return C}function y(x,w){let C=h.get(w);return C!==void 0?++C.usedTimes:(C=new S2(i,w,x,s),l.push(C),h.set(w,C)),C}function _(x){if(--x.usedTimes===0){let w=l.indexOf(x);l[w]=l[l.length-1],l.pop(),h.delete(x.cacheKey),x.destroy()}}function T(x){o.remove(x)}function A(){o.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:S,acquireProgram:y,releaseProgram:_,releaseShaderCache:T,programs:l,dispose:A}}function A2(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function R2(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Y0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function q0(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d){let u=0;return d.isInstancedMesh&&(u+=2),d.isSkinnedMesh&&(u+=1),u}function o(d,u,f,v,m,g){let M=i[e];return M===void 0?(M={id:d.id,object:d,geometry:u,material:f,materialVariant:a(d),groupOrder:v,renderOrder:d.renderOrder,z:m,group:g},i[e]=M):(M.id=d.id,M.object=d,M.geometry=u,M.material=f,M.materialVariant=a(d),M.groupOrder=v,M.renderOrder=d.renderOrder,M.z=m,M.group=g),e++,M}function c(d,u,f,v,m,g,M){M.reversedDepth===!0&&(m=-m);let S=o(d,u,f,v,m,g);f.transmission>0?n.push(S):f.transparent===!0?s.push(S):t.push(S)}function l(d,u,f,v,m,g){let M=o(d,u,f,v,m,g);f.transmission>0?n.unshift(M):f.transparent===!0?s.unshift(M):t.unshift(M)}function h(d,u){t.length>1&&t.sort(d||R2),n.length>1&&n.sort(u||Y0),s.length>1&&s.sort(u||Y0)}function p(){for(let d=e,u=i.length;d<u;d++){let f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:p,sort:h}}function C2(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new q0,i.set(n,[a])):s>=r.length?(a=new q0,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function P2(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new N,color:new it};break;case"SpotLight":t={position:new N,direction:new N,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new it,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new it,groundColor:new it};break;case"RectAreaLight":t={color:new it,position:new N,halfWidth:new N,halfHeight:new N};break}return i[e.id]=t,t}}}function I2(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var D2=0;function L2(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function N2(i){let e=new P2,t=I2(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new N);let s=new N,r=new Mt,a=new Mt;function o(l){let h=0,p=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let u=0,f=0,v=0,m=0,g=0,M=0,S=0,y=0,_=0,T=0,A=0,x=0,w=0,C=0;l.sort(L2);for(let b=0,L=l.length;b<L;b++){let P=l[b],H=P.color,Z=P.intensity,V=P.distance,W=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Fr?W=P.shadow.map.texture:W=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=H.r*Z,p+=H.g*Z,d+=H.b*Z;else if(P.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(P.sh.coefficients[G],Z);C++}else if(P.isSunLight){let G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let k=P.shadow,Y=t.get(P);Y.shadowIntensity=k.intensity,Y.shadowBias=k.bias,Y.shadowNormalBias=k.normalBias,Y.shadowRadius=k.radius,Y.shadowMapSize.copy(k.mapSize).multiply(k.getFrameExtents()),n.sunShadow[f]=Y,n.sunShadowMap[f]=W;let he=k.getViewportCount();for(let we=0;we<he;we++)n.sunShadowMatrix[v+we]=k.getMatrix(we),n.sunShadowCascade[v+we]=k._cascadeData[we];v+=he,f++}n.sun[u]=G,u++}else if(P.isDirectionalLight){let G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let k=P.shadow,Y=t.get(P);Y.shadowIntensity=k.intensity,Y.shadowBias=k.bias,Y.shadowNormalBias=k.normalBias,Y.shadowRadius=k.radius,Y.shadowMapSize=k.mapSize,n.directionalShadow[m]=Y,n.directionalShadowMap[m]=W,n.directionalShadowMatrix[m]=P.shadow.matrix,_++}n.directional[m]=G,m++}else if(P.isSpotLight){let G=e.get(P);G.position.setFromMatrixPosition(P.matrixWorld),G.color.copy(H).multiplyScalar(Z),G.distance=V,G.coneCos=Math.cos(P.angle),G.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),G.decay=P.decay,n.spot[M]=G;let k=P.shadow;if(P.map&&(n.spotLightMap[x]=P.map,x++,k.updateMatrices(P),P.castShadow&&w++),n.spotLightMatrix[M]=k.matrix,P.castShadow){let Y=t.get(P);Y.shadowIntensity=k.intensity,Y.shadowBias=k.bias,Y.shadowNormalBias=k.normalBias,Y.shadowRadius=k.radius,Y.shadowMapSize=k.mapSize,n.spotShadow[M]=Y,n.spotShadowMap[M]=W,A++}M++}else if(P.isRectAreaLight){let G=e.get(P);G.color.copy(H).multiplyScalar(Z),G.halfWidth.set(P.width*.5,0,0),G.halfHeight.set(0,P.height*.5,0),n.rectArea[S]=G,S++}else if(P.isPointLight){let G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),G.distance=P.distance,G.decay=P.decay,P.castShadow){let k=P.shadow,Y=t.get(P);Y.shadowIntensity=k.intensity,Y.shadowBias=k.bias,Y.shadowNormalBias=k.normalBias,Y.shadowRadius=k.radius,Y.shadowMapSize=k.mapSize,Y.shadowCameraNear=k.camera.near,Y.shadowCameraFar=k.camera.far,n.pointShadow[g]=Y,n.pointShadowMap[g]=W,n.pointShadowMatrix[g]=P.shadow.matrix,T++}n.point[g]=G,g++}else if(P.isHemisphereLight){let G=e.get(P);G.skyColor.copy(P.color).multiplyScalar(Z),G.groundColor.copy(P.groundColor).multiplyScalar(Z),n.hemi[y]=G,y++}}S>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pt.LTC_FLOAT_1,n.rectAreaLTC2=pt.LTC_FLOAT_2):(n.rectAreaLTC1=pt.LTC_HALF_1,n.rectAreaLTC2=pt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=p,n.ambient[2]=d;let F=n.hash;(F.sunLength!==u||F.directionalLength!==m||F.pointLength!==g||F.spotLength!==M||F.rectAreaLength!==S||F.hemiLength!==y||F.numSunShadows!==f||F.numDirectionalShadows!==_||F.numPointShadows!==T||F.numSpotShadows!==A||F.numSpotMaps!==x||F.numLightProbes!==C)&&(n.sun.length=u,n.directional.length=m,n.spot.length=M,n.rectArea.length=S,n.point.length=g,n.hemi.length=y,n.sunShadow.length=f,n.sunShadowMap.length=f,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.directionalShadowMatrix.length=_,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+x-w,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=C,F.sunLength=u,F.directionalLength=m,F.pointLength=g,F.spotLength=M,F.rectAreaLength=S,F.hemiLength=y,F.numSunShadows=f,F.numDirectionalShadows=_,F.numPointShadows=T,F.numSpotShadows=A,F.numSpotMaps=x,F.numLightProbes=C,n.version=D2++)}function c(l,h){let p=0,d=0,u=0,f=0,v=0,m=0,g=h.matrixWorldInverse;for(let M=0,S=l.length;M<S;M++){let y=l[M];if(y.isSunLight){let _=n.sun[p];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(g),p++}else if(y.isDirectionalLight){let _=n.directional[d];_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),d++}else if(y.isSpotLight){let _=n.spot[f];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),f++}else if(y.isRectAreaLight){let _=n.rectArea[v];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(g),a.identity(),r.copy(y.matrixWorld),r.premultiply(g),a.extractRotation(r),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),v++}else if(y.isPointLight){let _=n.point[u];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(g),u++}else if(y.isHemisphereLight){let _=n.hemi[m];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(g),m++}}}return{setup:o,setupView:c,state:n}}function Z0(i){let e=new N2(i),t=[],n=[],s=[];function r(d){p.camera=d,t.length=0,n.length=0,s.length=0}function a(d){t.push(d)}function o(d){n.push(d)}function c(d){s.push(d)}function l(){e.setup(t)}function h(d){e.setupView(t,d)}let p={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:p,setupLights:l,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function U2(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Z0(i),e.set(s,[o])):r>=a.length?(o=new Z0(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var F2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,O2=`uniform sampler2D shadow_pass;
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
}`,B2=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],H2=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],$0=new Mt,ml=new N,wd=new N;function z2(i,e,t){let n=new Oa,s=new He,r=new He,a=new Rn,o=new Xa,c=new Uc,l={},h=t.maxTextureSize,p={[Ir]:vi,[vi]:Ir,[Xn]:Xn},d=new mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:F2,fragmentShader:O2}),u=d.clone();u.defines.HORIZONTAL_PASS=1;let f=new kt;f.setAttribute("position",new Ot(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new De(f,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qr;let g=this.type;this.render=function(T,A,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===Wf&&(Ut("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Qr);let w=i.getRenderTarget(),C=i.getActiveCubeFace(),F=i.getActiveMipmapLevel(),b=i.state;b.setBlending(Jn),b.buffers.depth.getReversed()===!0?b.buffers.color.setClear(0,0,0,0):b.buffers.color.setClear(1,1,1,1),b.buffers.depth.setTest(!0),b.setScissorTest(!1);let L=g!==this.type;L&&A.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(H=>H.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,H=T.length;P<H;P++){let Z=T[P],V=Z.shadow;if(V===void 0){Ut("WebGLShadowMap:",Z,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let W=V.getFrameExtents();s.multiply(W),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/W.x),s.x=r.x*W.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/W.y),s.y=r.y*W.y,V.mapSize.y=r.y));let G=i.state.buffers.depth.getReversed();if(V.camera._reversedDepth=G,V.map===null||L===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Za){if(Z.isPointLight){Ut("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new Cn(s.x,s.y,{format:Fr,type:Vn,minFilter:ei,magFilter:ei,generateMipmaps:!1}),V.map.texture.name=Z.name+".shadowMap",V.map.depthTexture=new ms(s.x,s.y,vs),V.map.depthTexture.name=Z.name+".shadowMapDepth",V.map.depthTexture.format=Xs,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=$n,V.map.depthTexture.magFilter=$n}else Z.isPointLight?(V.map=new zu(s.x),V.map.depthTexture=new Pc(s.x,Ns)):(V.map=new Cn(s.x,s.y),V.map.depthTexture=new ms(s.x,s.y,Ns)),V.map.depthTexture.name=Z.name+".shadowMap",V.map.depthTexture.format=Xs,this.type===Qr?(V.map.depthTexture.compareFunction=G?Ou:Fu,V.map.depthTexture.minFilter=ei,V.map.depthTexture.magFilter=ei):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=$n,V.map.depthTexture.magFilter=$n);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==s.x||V.map.height!==s.y)&&V.map.setSize(s.x,s.y);let k=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();Z.isPointLight!==!0&&V.updateMatrices(Z,x);for(let Y=0;Y<k;Y++){let he=V.getCamera(Y);if(Z.isPointLight){let we=V.camera,Ie=V.matrix,Xe=Z.distance||we.far;Xe!==we.far&&(we.far=Xe,we.updateProjectionMatrix()),ml.setFromMatrixPosition(Z.matrixWorld),we.position.copy(ml),wd.copy(we.position),wd.add(B2[Y]),we.up.copy(H2[Y]),we.lookAt(wd),we.updateMatrixWorld(),Ie.makeTranslation(-ml.x,-ml.y,-ml.z),$0.multiplyMatrices(we.projectionMatrix,we.matrixWorldInverse),V._frustum.setFromProjectionMatrix($0,we.coordinateSystem,we.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)i.setRenderTarget(V.map,Y),i.clear();else{Y===0&&(i.setRenderTarget(V.map),i.clear());let we=V.getViewport(Y);a.set(r.x*we.x,r.y*we.y,r.x*we.z,r.y*we.w),b.viewport(a)}n=V.getFrustum(Y),y(A,x,he,Z,this.type)}V.isPointLightShadow!==!0&&this.type===Za&&M(V,x),V.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(w,C,F)};function M(T,A){let x=e.update(v);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,u.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,u.needsUpdate=!0),T.mapPass===null?T.mapPass=new Cn(s.x,s.y,{format:Fr,type:Vn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(A,null,x,d,v,null),u.uniforms.shadow_pass.value=T.mapPass.texture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(A,null,x,u,v,null)}function S(T,A,x,w){let C=null,F=x.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(F!==void 0)C=F;else if(C=x.isPointLight===!0?c:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let b=C.uuid,L=A.uuid,P=l[b];P===void 0&&(P={},l[b]=P);let H=P[L];H===void 0&&(H=C.clone(),P[L]=H,A.addEventListener("dispose",_)),C=H}if(C.visible=A.visible,C.wireframe=A.wireframe,w===Za?C.side=A.shadowSide!==null?A.shadowSide:A.side:C.side=A.shadowSide!==null?A.shadowSide:p[A.side],C.alphaMap=A.alphaMap,C.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,C.map=A.map,C.clipShadows=A.clipShadows,C.clippingPlanes=A.clippingPlanes,C.clipIntersection=A.clipIntersection,C.displacementMap=A.displacementMap,C.displacementScale=A.displacementScale,C.displacementBias=A.displacementBias,C.wireframeLinewidth=A.wireframeLinewidth,C.linewidth=A.linewidth,x.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let b=i.properties.get(C);b.light=x}return C}function y(T,A,x,w,C){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&C===Za)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,T.matrixWorld);let L=e.update(T),P=T.material;if(Array.isArray(P)){let H=L.groups;for(let Z=0,V=H.length;Z<V;Z++){let W=H[Z],G=P[W.materialIndex];if(G&&G.visible){let k=S(T,G,w,C);T.onBeforeShadow(i,T,A,x,L,k,W),i.renderBufferDirect(x,null,L,k,T,W),T.onAfterShadow(i,T,A,x,L,k,W)}}}else if(P.visible){let H=S(T,P,w,C);T.onBeforeShadow(i,T,A,x,L,H,null),i.renderBufferDirect(x,null,L,H,T,null),T.onAfterShadow(i,T,A,x,L,H,null)}}let b=T.children;for(let L=0,P=b.length;L<P;L++)y(b[L],A,x,w,C)}function _(T){T.target.removeEventListener("dispose",_);for(let x in l){let w=l[x],C=T.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}function G2(i,e){function t(){let B=!1,Se=new Rn,re=null,Ne=new Rn(0,0,0,0);return{setMask:function(Re){re!==Re&&!B&&(i.colorMask(Re,Re,Re,Re),re=Re)},setLocked:function(Re){B=Re},setClear:function(Re,U,be,ce,et){et===!0&&(Re*=ce,U*=ce,be*=ce),Se.set(Re,U,be,ce),Ne.equals(Se)===!1&&(i.clearColor(Re,U,be,ce),Ne.copy(Se))},reset:function(){B=!1,re=null,Ne.set(-1,0,0,0)}}}function n(){let B=!1,Se=!1,re=null,Ne=null,Re=null;return{setReversed:function(U){if(Se!==U){let be=e.get("EXT_clip_control");U?be.clipControlEXT(be.LOWER_LEFT_EXT,be.ZERO_TO_ONE_EXT):be.clipControlEXT(be.LOWER_LEFT_EXT,be.NEGATIVE_ONE_TO_ONE_EXT),Se=U;let ce=Re;Re=null,this.setClear(ce)}},getReversed:function(){return Se},setTest:function(U){U?de(i.DEPTH_TEST):Ce(i.DEPTH_TEST)},setMask:function(U){re!==U&&!B&&(i.depthMask(U),re=U)},setFunc:function(U){if(Se&&(U=_0[U]),Ne!==U){switch(U){case mc:i.depthFunc(i.NEVER);break;case gc:i.depthFunc(i.ALWAYS);break;case xc:i.depthFunc(i.LESS);break;case Ca:i.depthFunc(i.LEQUAL);break;case vc:i.depthFunc(i.EQUAL);break;case yc:i.depthFunc(i.GEQUAL);break;case _c:i.depthFunc(i.GREATER);break;case Mc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ne=U}},setLocked:function(U){B=U},setClear:function(U){Re!==U&&(Re=U,Se&&(U=1-U),i.clearDepth(U))},reset:function(){B=!1,re=null,Ne=null,Re=null,Se=!1}}}function s(){let B=!1,Se=null,re=null,Ne=null,Re=null,U=null,be=null,ce=null,et=null;return{setTest:function(ot){B||(ot?de(i.STENCIL_TEST):Ce(i.STENCIL_TEST))},setMask:function(ot){Se!==ot&&!B&&(i.stencilMask(ot),Se=ot)},setFunc:function(ot,Ct,Lt){(re!==ot||Ne!==Ct||Re!==Lt)&&(i.stencilFunc(ot,Ct,Lt),re=ot,Ne=Ct,Re=Lt)},setOp:function(ot,Ct,Lt){(U!==ot||be!==Ct||ce!==Lt)&&(i.stencilOp(ot,Ct,Lt),U=ot,be=Ct,ce=Lt)},setLocked:function(ot){B=ot},setClear:function(ot){et!==ot&&(i.clearStencil(ot),et=ot)},reset:function(){B=!1,Se=null,re=null,Ne=null,Re=null,U=null,be=null,ce=null,et=null}}}let r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap,h={},p={},d={},u=new WeakMap,f=[],v=null,m=!1,g=null,M=null,S=null,y=null,_=null,T=null,A=null,x=new it(0,0,0),w=0,C=!1,F=null,b=null,L=null,P=null,H=null,Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,W=0,G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(G)[1]),V=W>=1):G.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),V=W>=2);let k=null,Y={},he=i.getParameter(i.SCISSOR_BOX),we=i.getParameter(i.VIEWPORT),Ie=new Rn().fromArray(he),Xe=new Rn().fromArray(we);function rt(B,Se,re,Ne){let Re=new Uint8Array(4),U=i.createTexture();i.bindTexture(B,U),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let be=0;be<re;be++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(Se,0,i.RGBA,1,1,Ne,0,i.RGBA,i.UNSIGNED_BYTE,Re):i.texImage2D(Se+be,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Re);return U}let Q={};Q[i.TEXTURE_2D]=rt(i.TEXTURE_2D,i.TEXTURE_2D,1),Q[i.TEXTURE_CUBE_MAP]=rt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[i.TEXTURE_2D_ARRAY]=rt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Q[i.TEXTURE_3D]=rt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),de(i.DEPTH_TEST),a.setFunc(Ca),ne(!1),ue($h),de(i.CULL_FACE),oe(Jn);function de(B){h[B]!==!0&&(i.enable(B),h[B]=!0)}function Ce(B){h[B]!==!1&&(i.disable(B),h[B]=!1)}function xe(B,Se){return d[B]!==Se?(i.bindFramebuffer(B,Se),d[B]=Se,B===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=Se),B===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=Se),!0):!1}function Ue(B,Se){let re=f,Ne=!1;if(B){re=u.get(Se),re===void 0&&(re=[],u.set(Se,re));let Re=B.textures;if(re.length!==Re.length||re[0]!==i.COLOR_ATTACHMENT0){for(let U=0,be=Re.length;U<be;U++)re[U]=i.COLOR_ATTACHMENT0+U;re.length=Re.length,Ne=!0}}else re[0]!==i.BACK&&(re[0]=i.BACK,Ne=!0);Ne&&i.drawBuffers(re)}function $(B){return v!==B?(i.useProgram(B),v=B,!0):!1}let Be={[xs]:i.FUNC_ADD,[Xf]:i.FUNC_SUBTRACT,[Yf]:i.FUNC_REVERSE_SUBTRACT};Be[qf]=i.MIN,Be[Zf]=i.MAX;let te={[jr]:i.ZERO,[$f]:i.ONE,[Jf]:i.SRC_COLOR,[Qh]:i.SRC_ALPHA,[e0]:i.SRC_ALPHA_SATURATE,[Qo]:i.DST_COLOR,[Ko]:i.DST_ALPHA,[Kf]:i.ONE_MINUS_SRC_COLOR,[jh]:i.ONE_MINUS_SRC_ALPHA,[jf]:i.ONE_MINUS_DST_COLOR,[Qf]:i.ONE_MINUS_DST_ALPHA,[t0]:i.CONSTANT_COLOR,[n0]:i.ONE_MINUS_CONSTANT_COLOR,[i0]:i.CONSTANT_ALPHA,[s0]:i.ONE_MINUS_CONSTANT_ALPHA};function oe(B,Se,re,Ne,Re,U,be,ce,et,ot){if(B===Jn){m===!0&&(Ce(i.BLEND),m=!1);return}if(m===!1&&(de(i.BLEND),m=!0),B!==$c){if(B!==g||ot!==C){if((M!==xs||_!==xs)&&(i.blendEquation(i.FUNC_ADD),M=xs,_=xs),ot)switch(B){case Dr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _n:i.blendFunc(i.ONE,i.ONE);break;case Jh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Kh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ft("WebGLState: Invalid blending: ",B);break}else switch(B){case Dr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _n:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Jh:Ft("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Kh:Ft("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ft("WebGLState: Invalid blending: ",B);break}S=null,y=null,T=null,A=null,x.set(0,0,0),w=0,g=B,C=ot}return}Re=Re||Se,U=U||re,be=be||Ne,(Se!==M||Re!==_)&&(i.blendEquationSeparate(Be[Se],Be[Re]),M=Se,_=Re),(re!==S||Ne!==y||U!==T||be!==A)&&(i.blendFuncSeparate(te[re],te[Ne],te[U],te[be]),S=re,y=Ne,T=U,A=be),(ce.equals(x)===!1||et!==w)&&(i.blendColor(ce.r,ce.g,ce.b,et),x.copy(ce),w=et),g=B,C=!1}function K(B,Se){B.side===Xn?Ce(i.CULL_FACE):de(i.CULL_FACE);let re=B.side===vi;Se&&(re=!re),ne(re),B.blending===Dr&&B.transparent===!1?oe(Jn):oe(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),r.setMask(B.colorWrite);let Ne=B.stencilWrite;o.setTest(Ne),Ne&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Oe(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?de(i.SAMPLE_ALPHA_TO_COVERAGE):Ce(i.SAMPLE_ALPHA_TO_COVERAGE)}function ne(B){F!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),F=B)}function ue(B){B!==kf?(de(i.CULL_FACE),B!==b&&(B===$h?i.cullFace(i.BACK):B===Vf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ce(i.CULL_FACE),b=B}function Ge(B){B!==L&&(V&&i.lineWidth(B),L=B)}function Oe(B,Se,re){B?(de(i.POLYGON_OFFSET_FILL),(P!==Se||H!==re)&&(P=Se,H=re,a.getReversed()&&(Se=-Se),i.polygonOffset(Se,re))):Ce(i.POLYGON_OFFSET_FILL)}function Je(B){B?de(i.SCISSOR_TEST):Ce(i.SCISSOR_TEST)}function je(B){B===void 0&&(B=i.TEXTURE0+Z-1),k!==B&&(i.activeTexture(B),k=B)}function q(B,Se,re){re===void 0&&(k===null?re=i.TEXTURE0+Z-1:re=k);let Ne=Y[re];Ne===void 0&&(Ne={type:void 0,texture:void 0},Y[re]=Ne),(Ne.type!==B||Ne.texture!==Se)&&(k!==re&&(i.activeTexture(re),k=re),i.bindTexture(B,Se||Q[B]),Ne.type=B,Ne.texture=Se)}function gt(){let B=Y[k];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function dt(){try{i.compressedTexImage2D(...arguments)}catch(B){Ft("WebGLState:",B)}}function O(){try{i.compressedTexImage3D(...arguments)}catch(B){Ft("WebGLState:",B)}}function E(){try{i.texSubImage2D(...arguments)}catch(B){Ft("WebGLState:",B)}}function j(){try{i.texSubImage3D(...arguments)}catch(B){Ft("WebGLState:",B)}}function se(){try{i.compressedTexSubImage2D(...arguments)}catch(B){Ft("WebGLState:",B)}}function fe(){try{i.compressedTexSubImage3D(...arguments)}catch(B){Ft("WebGLState:",B)}}function Ve(){try{i.texStorage2D(...arguments)}catch(B){Ft("WebGLState:",B)}}function ke(){try{i.texStorage3D(...arguments)}catch(B){Ft("WebGLState:",B)}}function Te(){try{i.texImage2D(...arguments)}catch(B){Ft("WebGLState:",B)}}function ve(){try{i.texImage3D(...arguments)}catch(B){Ft("WebGLState:",B)}}function Ke(B){return p[B]!==void 0?p[B]:i.getParameter(B)}function xt(B,Se){p[B]!==Se&&(i.pixelStorei(B,Se),p[B]=Se)}function D(B){Ie.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),Ie.copy(B))}function J(B){Xe.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),Xe.copy(B))}function le(B,Se){let re=l.get(Se);re===void 0&&(re=new WeakMap,l.set(Se,re));let Ne=re.get(B);Ne===void 0&&(Ne=i.getUniformBlockIndex(Se,B.name),re.set(B,Ne))}function ge(B,Se){let Ne=l.get(Se).get(B);c.get(Se)!==Ne&&(i.uniformBlockBinding(Se,Ne,B.__bindingPointIndex),c.set(Se,Ne))}function Le(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},p={},k=null,Y={},d={},u=new WeakMap,f=[],v=null,m=!1,g=null,M=null,S=null,y=null,_=null,T=null,A=null,x=new it(0,0,0),w=0,C=!1,F=null,b=null,L=null,P=null,H=null,Ie.set(0,0,i.canvas.width,i.canvas.height),Xe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:de,disable:Ce,bindFramebuffer:xe,drawBuffers:Ue,useProgram:$,setBlending:oe,setMaterial:K,setFlipSided:ne,setCullFace:ue,setLineWidth:Ge,setPolygonOffset:Oe,setScissorTest:Je,activeTexture:je,bindTexture:q,unbindTexture:gt,compressedTexImage2D:dt,compressedTexImage3D:O,texImage2D:Te,texImage3D:ve,pixelStorei:xt,getParameter:Ke,updateUBOMapping:le,uniformBlockBinding:ge,texStorage2D:Ve,texStorage3D:ke,texSubImage2D:E,texSubImage3D:j,compressedTexSubImage2D:se,compressedTexSubImage3D:fe,scissor:D,viewport:J,reset:Le}}function k2(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new He,h=new WeakMap,p=new Set,d,u=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(O,E){return f?new OffscreenCanvas(O,E):To("canvas")}function m(O,E,j){let se=1,fe=dt(O);if((fe.width>j||fe.height>j)&&(se=j/Math.max(fe.width,fe.height)),se<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){let Ve=Math.floor(se*fe.width),ke=Math.floor(se*fe.height);d===void 0&&(d=v(Ve,ke));let Te=E?v(Ve,ke):d;return Te.width=Ve,Te.height=ke,Te.getContext("2d").drawImage(O,0,0,Ve,ke),Ut("WebGLRenderer: Texture has been resized from ("+fe.width+"x"+fe.height+") to ("+Ve+"x"+ke+")."),Te}else return"data"in O&&Ut("WebGLRenderer: Image in DataTexture is too big ("+fe.width+"x"+fe.height+")."),O;return O}function g(O){return O.generateMipmaps}function M(O){i.generateMipmap(O)}function S(O){return O.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?i.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(O,E,j,se,fe,Ve=!1){if(O!==null){if(i[O]!==void 0)return i[O];Ut("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let ke;se&&(ke=e.get("EXT_texture_norm16"),ke||Ut("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Te=E;if(E===i.RED&&(j===i.FLOAT&&(Te=i.R32F),j===i.HALF_FLOAT&&(Te=i.R16F),j===i.UNSIGNED_BYTE&&(Te=i.R8),j===i.UNSIGNED_SHORT&&ke&&(Te=ke.R16_EXT),j===i.SHORT&&ke&&(Te=ke.R16_SNORM_EXT)),E===i.RED_INTEGER&&(j===i.UNSIGNED_BYTE&&(Te=i.R8UI),j===i.UNSIGNED_SHORT&&(Te=i.R16UI),j===i.UNSIGNED_INT&&(Te=i.R32UI),j===i.BYTE&&(Te=i.R8I),j===i.SHORT&&(Te=i.R16I),j===i.INT&&(Te=i.R32I)),E===i.RG&&(j===i.FLOAT&&(Te=i.RG32F),j===i.HALF_FLOAT&&(Te=i.RG16F),j===i.UNSIGNED_BYTE&&(Te=i.RG8),j===i.UNSIGNED_SHORT&&ke&&(Te=ke.RG16_EXT),j===i.SHORT&&ke&&(Te=ke.RG16_SNORM_EXT)),E===i.RG_INTEGER&&(j===i.UNSIGNED_BYTE&&(Te=i.RG8UI),j===i.UNSIGNED_SHORT&&(Te=i.RG16UI),j===i.UNSIGNED_INT&&(Te=i.RG32UI),j===i.BYTE&&(Te=i.RG8I),j===i.SHORT&&(Te=i.RG16I),j===i.INT&&(Te=i.RG32I)),E===i.RGB_INTEGER&&(j===i.UNSIGNED_BYTE&&(Te=i.RGB8UI),j===i.UNSIGNED_SHORT&&(Te=i.RGB16UI),j===i.UNSIGNED_INT&&(Te=i.RGB32UI),j===i.BYTE&&(Te=i.RGB8I),j===i.SHORT&&(Te=i.RGB16I),j===i.INT&&(Te=i.RGB32I)),E===i.RGBA_INTEGER&&(j===i.UNSIGNED_BYTE&&(Te=i.RGBA8UI),j===i.UNSIGNED_SHORT&&(Te=i.RGBA16UI),j===i.UNSIGNED_INT&&(Te=i.RGBA32UI),j===i.BYTE&&(Te=i.RGBA8I),j===i.SHORT&&(Te=i.RGBA16I),j===i.INT&&(Te=i.RGBA32I)),E===i.RGB&&(j===i.UNSIGNED_SHORT&&ke&&(Te=ke.RGB16_EXT),j===i.SHORT&&ke&&(Te=ke.RGB16_SNORM_EXT),j===i.UNSIGNED_INT_5_9_9_9_REV&&(Te=i.RGB9_E5),j===i.UNSIGNED_INT_10F_11F_11F_REV&&(Te=i.R11F_G11F_B10F)),E===i.RGBA){let ve=Ve?bo:dn.getTransfer(fe);j===i.FLOAT&&(Te=i.RGBA32F),j===i.HALF_FLOAT&&(Te=i.RGBA16F),j===i.UNSIGNED_BYTE&&(Te=ve===gn?i.SRGB8_ALPHA8:i.RGBA8),j===i.UNSIGNED_SHORT&&ke&&(Te=ke.RGBA16_EXT),j===i.SHORT&&ke&&(Te=ke.RGBA16_SNORM_EXT),j===i.UNSIGNED_SHORT_4_4_4_4&&(Te=i.RGBA4),j===i.UNSIGNED_SHORT_5_5_5_1&&(Te=i.RGB5_A1)}return(Te===i.R16F||Te===i.R32F||Te===i.RG16F||Te===i.RG32F||Te===i.RGBA16F||Te===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Te}function _(O,E){let j;return O?E===null||E===Ns||E===Ur?j=i.DEPTH24_STENCIL8:E===vs?j=i.DEPTH32F_STENCIL8:E===$a&&(j=i.DEPTH24_STENCIL8,Ut("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ns||E===Ur?j=i.DEPTH_COMPONENT24:E===vs?j=i.DEPTH_COMPONENT32F:E===$a&&(j=i.DEPTH_COMPONENT16),j}function T(O,E){return g(O)===!0||O.isFramebufferTexture&&O.minFilter!==$n&&O.minFilter!==ei?Math.log2(Math.max(E.width,E.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?E.mipmaps.length:1}function A(O){let E=O.target;E.removeEventListener("dispose",A),w(E),E.isVideoTexture&&h.delete(E),E.isHTMLTexture&&p.delete(E)}function x(O){let E=O.target;E.removeEventListener("dispose",x),F(E)}function w(O){let E=n.get(O);if(E.__webglInit===void 0)return;let j=O.source,se=u.get(j);if(se){let fe=se[E.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&C(O),Object.keys(se).length===0&&u.delete(j)}n.remove(O)}function C(O){let E=n.get(O);i.deleteTexture(E.__webglTexture);let j=O.source,se=u.get(j);delete se[E.__cacheKey],a.memory.textures--}function F(O){let E=n.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),n.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(E.__webglFramebuffer[se]))for(let fe=0;fe<E.__webglFramebuffer[se].length;fe++)i.deleteFramebuffer(E.__webglFramebuffer[se][fe]);else i.deleteFramebuffer(E.__webglFramebuffer[se]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[se])}else{if(Array.isArray(E.__webglFramebuffer))for(let se=0;se<E.__webglFramebuffer.length;se++)i.deleteFramebuffer(E.__webglFramebuffer[se]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let se=0;se<E.__webglColorRenderbuffer.length;se++)E.__webglColorRenderbuffer[se]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[se]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let j=O.textures;for(let se=0,fe=j.length;se<fe;se++){let Ve=n.get(j[se]);Ve.__webglTexture&&(i.deleteTexture(Ve.__webglTexture),a.memory.textures--),n.remove(j[se])}n.remove(O)}let b=0;function L(){b=0}function P(){return b}function H(O){b=O}function Z(){let O=b;return O>=s.maxTextures&&Ut("WebGLTextures: Trying to use "+(O+1)+" texture units while this GPU supports only "+s.maxTextures),b+=1,O}function V(O){let E=[];return E.push(O.wrapS),E.push(O.wrapT),E.push(O.wrapR||0),E.push(O.magFilter),E.push(O.minFilter),E.push(O.anisotropy),E.push(O.internalFormat),E.push(O.format),E.push(O.type),E.push(O.generateMipmaps),E.push(O.premultiplyAlpha),E.push(O.flipY),E.push(O.unpackAlignment),E.push(O.colorSpace),E.join()}function W(O,E){let j=n.get(O);if(O.isVideoTexture&&q(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&j.__version!==O.version){let se=O.image;if(se===null)Ut("WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)Ut("WebGLRenderer: Texture marked for update but image is incomplete");else{Ce(j,O,E);return}}else O.isExternalTexture&&(j.__webglTexture=O.sourceTexture?O.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,j.__webglTexture,i.TEXTURE0+E)}function G(O,E){let j=n.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&j.__version!==O.version){Ce(j,O,E);return}else O.isExternalTexture&&(j.__webglTexture=O.sourceTexture?O.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,j.__webglTexture,i.TEXTURE0+E)}function k(O,E){let j=n.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&j.__version!==O.version){Ce(j,O,E);return}t.bindTexture(i.TEXTURE_3D,j.__webglTexture,i.TEXTURE0+E)}function Y(O,E){let j=n.get(O);if(O.isCubeDepthTexture!==!0&&O.version>0&&j.__version!==O.version){xe(j,O,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture,i.TEXTURE0+E)}let he={[Gn]:i.REPEAT,[ds]:i.CLAMP_TO_EDGE,[Ec]:i.MIRRORED_REPEAT},we={[$n]:i.NEAREST,[o0]:i.NEAREST_MIPMAP_NEAREST,[al]:i.NEAREST_MIPMAP_LINEAR,[ei]:i.LINEAR,[Qc]:i.LINEAR_MIPMAP_NEAREST,[Ks]:i.LINEAR_MIPMAP_LINEAR},Ie={[h0]:i.NEVER,[g0]:i.ALWAYS,[d0]:i.LESS,[Fu]:i.LEQUAL,[f0]:i.EQUAL,[Ou]:i.GEQUAL,[p0]:i.GREATER,[m0]:i.NOTEQUAL};function Xe(O,E){if(E.type===vs&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===ei||E.magFilter===Qc||E.magFilter===al||E.magFilter===Ks||E.minFilter===ei||E.minFilter===Qc||E.minFilter===al||E.minFilter===Ks)&&Ut("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(O,i.TEXTURE_WRAP_S,he[E.wrapS]),i.texParameteri(O,i.TEXTURE_WRAP_T,he[E.wrapT]),(O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY)&&i.texParameteri(O,i.TEXTURE_WRAP_R,he[E.wrapR]),i.texParameteri(O,i.TEXTURE_MAG_FILTER,we[E.magFilter]),i.texParameteri(O,i.TEXTURE_MIN_FILTER,we[E.minFilter]),E.compareFunction&&(i.texParameteri(O,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(O,i.TEXTURE_COMPARE_FUNC,Ie[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===$n||E.minFilter!==al&&E.minFilter!==Ks||E.type===vs&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let j=e.get("EXT_texture_filter_anisotropic");i.texParameterf(O,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function rt(O,E){let j=!1;O.__webglInit===void 0&&(O.__webglInit=!0,E.addEventListener("dispose",A));let se=E.source,fe=u.get(se);fe===void 0&&(fe={},u.set(se,fe));let Ve=V(E);if(Ve!==O.__cacheKey){fe[Ve]===void 0&&(fe[Ve]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,j=!0),fe[Ve].usedTimes++;let ke=fe[O.__cacheKey];ke!==void 0&&(fe[O.__cacheKey].usedTimes--,ke.usedTimes===0&&C(E)),O.__cacheKey=Ve,O.__webglTexture=fe[Ve].texture}return j}function Q(O,E,j){return Math.floor(Math.floor(O/j)/E)}function de(O,E,j,se){let Ve=O.updateRanges;if(Ve.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,E.width,E.height,j,se,E.data);else{Ve.sort((xt,D)=>xt.start-D.start);let ke=0;for(let xt=1;xt<Ve.length;xt++){let D=Ve[ke],J=Ve[xt],le=D.start+D.count,ge=Q(J.start,E.width,4),Le=Q(D.start,E.width,4);J.start<=le+1&&ge===Le&&Q(J.start+J.count-1,E.width,4)===ge?D.count=Math.max(D.count,J.start+J.count-D.start):(++ke,Ve[ke]=J)}Ve.length=ke+1;let Te=t.getParameter(i.UNPACK_ROW_LENGTH),ve=t.getParameter(i.UNPACK_SKIP_PIXELS),Ke=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,E.width);for(let xt=0,D=Ve.length;xt<D;xt++){let J=Ve[xt],le=Math.floor(J.start/4),ge=Math.ceil(J.count/4),Le=le%E.width,B=Math.floor(le/E.width),Se=ge,re=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Le),t.pixelStorei(i.UNPACK_SKIP_ROWS,B),t.texSubImage2D(i.TEXTURE_2D,0,Le,B,Se,re,j,se,E.data)}O.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Te),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ve),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ke)}}function Ce(O,E,j){let se=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(se=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(se=i.TEXTURE_3D);let fe=rt(O,E),Ve=E.source;t.bindTexture(se,O.__webglTexture,i.TEXTURE0+j);let ke=n.get(Ve);if(Ve.version!==ke.__version||fe===!0){if(t.activeTexture(i.TEXTURE0+j),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){let re=dn.getPrimaries(dn.workingColorSpace),Ne=E.colorSpace===Us?null:dn.getPrimaries(E.colorSpace),Re=E.colorSpace===Us||re===Ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re)}t.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment);let ve=m(E.image,!1,s.maxTextureSize);ve=gt(E,ve);let Ke=r.convert(E.format,E.colorSpace),xt=r.convert(E.type),D=y(E.internalFormat,Ke,xt,E.normalized,E.colorSpace,E.isVideoTexture);Xe(se,E);let J,le=E.mipmaps,ge=E.isVideoTexture!==!0,Le=ke.__version===void 0||fe===!0,B=Ve.dataReady,Se=T(E,ve);if(E.isDepthTexture)D=_(E.format===Qs,E.type),Le&&(ge?t.texStorage2D(i.TEXTURE_2D,1,D,ve.width,ve.height):t.texImage2D(i.TEXTURE_2D,0,D,ve.width,ve.height,0,Ke,xt,null));else if(E.isDataTexture)if(le.length>0){ge&&Le&&t.texStorage2D(i.TEXTURE_2D,Se,D,le[0].width,le[0].height);for(let re=0,Ne=le.length;re<Ne;re++)J=le[re],ge?B&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,J.width,J.height,Ke,xt,J.data):t.texImage2D(i.TEXTURE_2D,re,D,J.width,J.height,0,Ke,xt,J.data);E.generateMipmaps=!1}else ge?(Le&&t.texStorage2D(i.TEXTURE_2D,Se,D,ve.width,ve.height),B&&de(E,ve,Ke,xt)):t.texImage2D(i.TEXTURE_2D,0,D,ve.width,ve.height,0,Ke,xt,ve.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ge&&Le&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Se,D,le[0].width,le[0].height,ve.depth);for(let re=0,Ne=le.length;re<Ne;re++)if(J=le[re],E.format!==Ei)if(Ke!==null)if(ge){if(B)if(E.layerUpdates.size>0){let Re=md(J.width,J.height,E.format,E.type);for(let U of E.layerUpdates){let be=J.data.subarray(U*Re/J.data.BYTES_PER_ELEMENT,(U+1)*Re/J.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,U,J.width,J.height,1,Ke,be)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,J.width,J.height,ve.depth,Ke,J.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,re,D,J.width,J.height,ve.depth,0,J.data,0,0);else Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ge?B&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,J.width,J.height,ve.depth,Ke,xt,J.data):t.texImage3D(i.TEXTURE_2D_ARRAY,re,D,J.width,J.height,ve.depth,0,Ke,xt,J.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{ge&&Le&&t.texStorage2D(i.TEXTURE_2D,Se,D,le[0].width,le[0].height);for(let re=0,Ne=le.length;re<Ne;re++)J=le[re],E.format!==Ei?Ke!==null?ge?B&&t.compressedTexSubImage2D(i.TEXTURE_2D,re,0,0,J.width,J.height,Ke,J.data):t.compressedTexImage2D(i.TEXTURE_2D,re,D,J.width,J.height,0,J.data):Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ge?B&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,J.width,J.height,Ke,xt,J.data):t.texImage2D(i.TEXTURE_2D,re,D,J.width,J.height,0,Ke,xt,J.data)}else if(E.isDataArrayTexture)if(ge){if(Le&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Se,D,ve.width,ve.height,ve.depth),B)if(E.layerUpdates.size>0){let re=md(ve.width,ve.height,E.format,E.type);for(let Ne of E.layerUpdates){let Re=ve.data.subarray(Ne*re/ve.data.BYTES_PER_ELEMENT,(Ne+1)*re/ve.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ne,ve.width,ve.height,1,Ke,xt,Re)}E.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ve.width,ve.height,ve.depth,Ke,xt,ve.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,D,ve.width,ve.height,ve.depth,0,Ke,xt,ve.data);else if(E.isData3DTexture)ge?(Le&&t.texStorage3D(i.TEXTURE_3D,Se,D,ve.width,ve.height,ve.depth),B&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ve.width,ve.height,ve.depth,Ke,xt,ve.data)):t.texImage3D(i.TEXTURE_3D,0,D,ve.width,ve.height,ve.depth,0,Ke,xt,ve.data);else if(E.isFramebufferTexture){if(Le)if(ge)t.texStorage2D(i.TEXTURE_2D,Se,D,ve.width,ve.height);else{let re=ve.width,Ne=ve.height;for(let Re=0;Re<Se;Re++)t.texImage2D(i.TEXTURE_2D,Re,D,re,Ne,0,Ke,xt,null),re>>=1,Ne>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in i){let re=i.canvas;if(re.hasAttribute("layoutsubtree")||re.setAttribute("layoutsubtree","true"),ve.parentNode!==re){re.appendChild(ve),p.add(E),re.onpaint=Ne=>{let Re=Ne.changedElements;for(let U of p)Re.includes(U.image)&&(U.needsUpdate=!0)},re.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ve);else{let Re=i.RGBA,U=i.RGBA,be=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Re,U,be,ve)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(le.length>0){if(ge&&Le){let re=dt(le[0]);t.texStorage2D(i.TEXTURE_2D,Se,D,re.width,re.height)}for(let re=0,Ne=le.length;re<Ne;re++)J=le[re],ge?B&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,Ke,xt,J):t.texImage2D(i.TEXTURE_2D,re,D,Ke,xt,J);E.generateMipmaps=!1}else if(ge){if(Le){let re=dt(ve);t.texStorage2D(i.TEXTURE_2D,Se,D,re.width,re.height)}B&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ke,xt,ve)}else t.texImage2D(i.TEXTURE_2D,0,D,Ke,xt,ve);g(E)&&M(se),ke.__version=Ve.version,E.onUpdate&&E.onUpdate(E)}O.__version=E.version}function xe(O,E,j){if(E.image.length!==6)return;let se=rt(O,E),fe=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+j);let Ve=n.get(fe);if(fe.version!==Ve.__version||se===!0){t.activeTexture(i.TEXTURE0+j);let ke=dn.getPrimaries(dn.workingColorSpace),Te=E.colorSpace===Us?null:dn.getPrimaries(E.colorSpace),ve=E.colorSpace===Us||ke===Te?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let Ke=E.isCompressedTexture||E.image[0].isCompressedTexture,xt=E.image[0]&&E.image[0].isDataTexture,D=[];for(let U=0;U<6;U++)!Ke&&!xt?D[U]=m(E.image[U],!0,s.maxCubemapSize):D[U]=xt?E.image[U].image:E.image[U],D[U]=gt(E,D[U]);let J=D[0],le=r.convert(E.format,E.colorSpace),ge=r.convert(E.type),Le=y(E.internalFormat,le,ge,E.normalized,E.colorSpace),B=E.isVideoTexture!==!0,Se=Ve.__version===void 0||se===!0,re=fe.dataReady,Ne=T(E,J);Xe(i.TEXTURE_CUBE_MAP,E);let Re;if(Ke){B&&Se&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ne,Le,J.width,J.height);for(let U=0;U<6;U++){Re=D[U].mipmaps;for(let be=0;be<Re.length;be++){let ce=Re[be];E.format!==Ei?le!==null?B?re&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+U,be,0,0,ce.width,ce.height,le,ce.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+U,be,Le,ce.width,ce.height,0,ce.data):Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+U,be,0,0,ce.width,ce.height,le,ge,ce.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+U,be,Le,ce.width,ce.height,0,le,ge,ce.data)}}}else{if(Re=E.mipmaps,B&&Se){Re.length>0&&Ne++;let U=dt(D[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ne,Le,U.width,U.height)}for(let U=0;U<6;U++)if(xt){B?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,0,0,D[U].width,D[U].height,le,ge,D[U].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,Le,D[U].width,D[U].height,0,le,ge,D[U].data);for(let be=0;be<Re.length;be++){let et=Re[be].image[U].image;B?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+U,be+1,0,0,et.width,et.height,le,ge,et.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+U,be+1,Le,et.width,et.height,0,le,ge,et.data)}}else{B?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,0,0,le,ge,D[U]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,Le,le,ge,D[U]);for(let be=0;be<Re.length;be++){let ce=Re[be];B?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+U,be+1,0,0,le,ge,ce.image[U]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+U,be+1,Le,le,ge,ce.image[U])}}}g(E)&&M(i.TEXTURE_CUBE_MAP),Ve.__version=fe.version,E.onUpdate&&E.onUpdate(E)}O.__version=E.version}function Ue(O,E,j,se,fe,Ve){let ke=r.convert(j.format,j.colorSpace),Te=r.convert(j.type),ve=y(j.internalFormat,ke,Te,j.normalized,j.colorSpace),Ke=n.get(E),xt=n.get(j);if(xt.__renderTarget=E,!Ke.__hasExternalTextures){let D=Math.max(1,E.width>>Ve),J=Math.max(1,E.height>>Ve);fe===i.TEXTURE_3D||fe===i.TEXTURE_2D_ARRAY?t.texImage3D(fe,Ve,ve,D,J,E.depth,0,ke,Te,null):t.texImage2D(fe,Ve,ve,D,J,0,ke,Te,null)}t.bindFramebuffer(i.FRAMEBUFFER,O),je(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,se,fe,xt.__webglTexture,0,Je(E)):(fe===i.TEXTURE_2D||fe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&fe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,se,fe,xt.__webglTexture,Ve),t.bindFramebuffer(i.FRAMEBUFFER,null)}function $(O,E,j){if(i.bindRenderbuffer(i.RENDERBUFFER,O),E.depthBuffer){let se=E.depthTexture,fe=se&&se.isDepthTexture?se.type:null,Ve=_(E.stencilBuffer,fe),ke=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;je(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Je(E),Ve,E.width,E.height):j?i.renderbufferStorageMultisample(i.RENDERBUFFER,Je(E),Ve,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Ve,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ke,i.RENDERBUFFER,O)}else{let se=E.textures;for(let fe=0;fe<se.length;fe++){let Ve=se[fe],ke=r.convert(Ve.format,Ve.colorSpace),Te=r.convert(Ve.type),ve=y(Ve.internalFormat,ke,Te,Ve.normalized,Ve.colorSpace);je(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Je(E),ve,E.width,E.height):j?i.renderbufferStorageMultisample(i.RENDERBUFFER,Je(E),ve,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,ve,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Be(O,E,j){let se=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,O),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let fe=n.get(E.depthTexture);if(fe.__renderTarget=E,(!fe.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),se){if(fe.__webglInit===void 0&&(fe.__webglInit=!0,E.depthTexture.addEventListener("dispose",A)),fe.__webglTexture===void 0){fe.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,fe.__webglTexture),Xe(i.TEXTURE_CUBE_MAP,E.depthTexture);let Ke=r.convert(E.depthTexture.format),xt=r.convert(E.depthTexture.type),D;E.depthTexture.format===Xs?D=i.DEPTH_COMPONENT24:E.depthTexture.format===Qs&&(D=i.DEPTH24_STENCIL8);for(let J=0;J<6;J++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,D,E.width,E.height,0,Ke,xt,null)}}else W(E.depthTexture,0);let Ve=fe.__webglTexture,ke=Je(E),Te=se?i.TEXTURE_CUBE_MAP_POSITIVE_X+j:i.TEXTURE_2D,ve=E.depthTexture.format===Qs?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(E.depthTexture.format===Xs)je(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ve,Te,Ve,0,ke):i.framebufferTexture2D(i.FRAMEBUFFER,ve,Te,Ve,0);else if(E.depthTexture.format===Qs)je(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ve,Te,Ve,0,ke):i.framebufferTexture2D(i.FRAMEBUFFER,ve,Te,Ve,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function te(O){let E=n.get(O),j=O.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==O.depthTexture){let se=O.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),se){let fe=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,se.removeEventListener("dispose",fe)};se.addEventListener("dispose",fe),E.__depthDisposeCallback=fe}E.__boundDepthTexture=se}if(O.depthTexture&&!E.__autoAllocateDepthBuffer)if(j)for(let se=0;se<6;se++)Be(E.__webglFramebuffer[se],O,se);else{let se=O.texture.mipmaps;se&&se.length>0?Be(E.__webglFramebuffer[0],O,0):Be(E.__webglFramebuffer,O,0)}else if(j){E.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[se]),E.__webglDepthbuffer[se]===void 0)E.__webglDepthbuffer[se]=i.createRenderbuffer(),$(E.__webglDepthbuffer[se],O,!1);else{let fe=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ve=E.__webglDepthbuffer[se];i.bindRenderbuffer(i.RENDERBUFFER,Ve),i.framebufferRenderbuffer(i.FRAMEBUFFER,fe,i.RENDERBUFFER,Ve)}}else{let se=O.texture.mipmaps;if(se&&se.length>0?t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),$(E.__webglDepthbuffer,O,!1);else{let fe=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ve=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Ve),i.framebufferRenderbuffer(i.FRAMEBUFFER,fe,i.RENDERBUFFER,Ve)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function oe(O,E,j){let se=n.get(O);E!==void 0&&Ue(se.__webglFramebuffer,O,O.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),j!==void 0&&te(O)}function K(O){let E=O.texture,j=n.get(O),se=n.get(E);O.addEventListener("dispose",x);let fe=O.textures,Ve=O.isWebGLCubeRenderTarget===!0,ke=fe.length>1;if(ke||(se.__webglTexture===void 0&&(se.__webglTexture=i.createTexture()),se.__version=E.version,a.memory.textures++),Ve){j.__webglFramebuffer=[];for(let Te=0;Te<6;Te++)if(E.mipmaps&&E.mipmaps.length>0){j.__webglFramebuffer[Te]=[];for(let ve=0;ve<E.mipmaps.length;ve++)j.__webglFramebuffer[Te][ve]=i.createFramebuffer()}else j.__webglFramebuffer[Te]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){j.__webglFramebuffer=[];for(let Te=0;Te<E.mipmaps.length;Te++)j.__webglFramebuffer[Te]=i.createFramebuffer()}else j.__webglFramebuffer=i.createFramebuffer();if(ke)for(let Te=0,ve=fe.length;Te<ve;Te++){let Ke=n.get(fe[Te]);Ke.__webglTexture===void 0&&(Ke.__webglTexture=i.createTexture(),a.memory.textures++)}if(O.samples>0&&je(O)===!1){j.__webglMultisampledFramebuffer=i.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let Te=0;Te<fe.length;Te++){let ve=fe[Te];j.__webglColorRenderbuffer[Te]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,j.__webglColorRenderbuffer[Te]);let Ke=r.convert(ve.format,ve.colorSpace),xt=r.convert(ve.type),D=y(ve.internalFormat,Ke,xt,ve.normalized,ve.colorSpace,O.isXRRenderTarget===!0),J=Je(O);i.renderbufferStorageMultisample(i.RENDERBUFFER,J,D,O.width,O.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.RENDERBUFFER,j.__webglColorRenderbuffer[Te])}i.bindRenderbuffer(i.RENDERBUFFER,null),O.depthBuffer&&(j.__webglDepthRenderbuffer=i.createRenderbuffer(),$(j.__webglDepthRenderbuffer,O,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Ve){t.bindTexture(i.TEXTURE_CUBE_MAP,se.__webglTexture),Xe(i.TEXTURE_CUBE_MAP,E);for(let Te=0;Te<6;Te++)if(E.mipmaps&&E.mipmaps.length>0)for(let ve=0;ve<E.mipmaps.length;ve++)Ue(j.__webglFramebuffer[Te][ve],O,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,ve);else Ue(j.__webglFramebuffer[Te],O,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0);g(E)&&M(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ke){for(let Te=0,ve=fe.length;Te<ve;Te++){let Ke=fe[Te],xt=n.get(Ke),D=i.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(D=O.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(D,xt.__webglTexture),Xe(D,Ke),Ue(j.__webglFramebuffer,O,Ke,i.COLOR_ATTACHMENT0+Te,D,0),g(Ke)&&M(D)}t.unbindTexture()}else{let Te=i.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Te=O.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Te,se.__webglTexture),Xe(Te,E),E.mipmaps&&E.mipmaps.length>0)for(let ve=0;ve<E.mipmaps.length;ve++)Ue(j.__webglFramebuffer[ve],O,E,i.COLOR_ATTACHMENT0,Te,ve);else Ue(j.__webglFramebuffer,O,E,i.COLOR_ATTACHMENT0,Te,0);g(E)&&M(Te),t.unbindTexture()}O.depthBuffer&&te(O)}function ne(O){let E=O.textures;for(let j=0,se=E.length;j<se;j++){let fe=E[j];if(g(fe)){let Ve=S(O),ke=n.get(fe).__webglTexture;t.bindTexture(Ve,ke),M(Ve),t.unbindTexture()}}}let ue=[],Ge=[];function Oe(O){if(O.samples>0){if(je(O)===!1){let E=O.textures,j=O.width,se=O.height,fe=i.COLOR_BUFFER_BIT,Ve=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ke=n.get(O),Te=E.length>1;if(Te)for(let Ke=0;Ke<E.length;Ke++)t.bindFramebuffer(i.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ke,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ke.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ke,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ke.__webglMultisampledFramebuffer);let ve=O.texture.mipmaps;ve&&ve.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ke.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ke.__webglFramebuffer);for(let Ke=0;Ke<E.length;Ke++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(fe|=i.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(fe|=i.STENCIL_BUFFER_BIT)),Te){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ke.__webglColorRenderbuffer[Ke]);let xt=n.get(E[Ke]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,xt,0)}i.blitFramebuffer(0,0,j,se,0,0,j,se,fe,i.NEAREST),c===!0&&(ue.length=0,Ge.length=0,ue.push(i.COLOR_ATTACHMENT0+Ke),O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&(ue.push(Ve),Ge.push(Ve),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ge)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ue))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Te)for(let Ke=0;Ke<E.length;Ke++){t.bindFramebuffer(i.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ke,i.RENDERBUFFER,ke.__webglColorRenderbuffer[Ke]);let xt=n.get(E[Ke]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ke.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ke,i.TEXTURE_2D,xt,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ke.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&c){let E=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function Je(O){return Math.min(s.maxSamples,O.samples)}function je(O){let E=n.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function q(O){let E=a.render.frame;h.get(O)!==E&&(h.set(O,E),O.update())}function gt(O,E){let j=O.colorSpace,se=O.format,fe=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||j!==So&&j!==Us&&(dn.getTransfer(j)===gn?(se!==Ei||fe!==li)&&Ut("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ft("WebGLTextures: Unsupported texture color space:",j)),E}function dt(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(l.width=O.naturalWidth||O.width,l.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(l.width=O.displayWidth,l.height=O.displayHeight):(l.width=O.width,l.height=O.height),l}this.allocateTextureUnit=Z,this.resetTextureUnits=L,this.getTextureUnits=P,this.setTextureUnits=H,this.setTexture2D=W,this.setTexture2DArray=G,this.setTexture3D=k,this.setTextureCube=Y,this.rebindTextures=oe,this.setupRenderTarget=K,this.updateRenderTargetMipmap=ne,this.updateMultisampleRenderTarget=Oe,this.setupDepthRenderbuffer=te,this.setupFrameBufferTexture=Ue,this.useMultisampledRTT=je,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function V2(i,e){function t(n,s=Us){let r,a=dn.getTransfer(s);if(n===li)return i.UNSIGNED_BYTE;if(n===eu)return i.UNSIGNED_SHORT_4_4_4_4;if(n===tu)return i.UNSIGNED_SHORT_5_5_5_1;if(n===sd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===rd)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===nd)return i.BYTE;if(n===id)return i.SHORT;if(n===$a)return i.UNSIGNED_SHORT;if(n===jc)return i.INT;if(n===Ns)return i.UNSIGNED_INT;if(n===vs)return i.FLOAT;if(n===Vn)return i.HALF_FLOAT;if(n===ad)return i.ALPHA;if(n===od)return i.RGB;if(n===Ei)return i.RGBA;if(n===Xs)return i.DEPTH_COMPONENT;if(n===Qs)return i.DEPTH_STENCIL;if(n===nu)return i.RED;if(n===iu)return i.RED_INTEGER;if(n===Fr)return i.RG;if(n===su)return i.RG_INTEGER;if(n===ru)return i.RGBA_INTEGER;if(n===ol||n===ll||n===cl||n===ul)if(a===gn)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ol)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ll)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===cl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ul)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ol)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ll)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===cl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ul)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===au||n===ou||n===lu||n===cu)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===au)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ou)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===lu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===cu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===uu||n===hu||n===du||n===fu||n===pu||n===hl||n===mu)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===uu||n===hu)return a===gn?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===du)return a===gn?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===fu)return r.COMPRESSED_R11_EAC;if(n===pu)return r.COMPRESSED_SIGNED_R11_EAC;if(n===hl)return r.COMPRESSED_RG11_EAC;if(n===mu)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===gu||n===xu||n===vu||n===yu||n===_u||n===Mu||n===Eu||n===Su||n===bu||n===Tu||n===wu||n===Au||n===Ru||n===Cu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===gu)return a===gn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===xu)return a===gn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===vu)return a===gn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===yu)return a===gn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===_u)return a===gn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Mu)return a===gn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Eu)return a===gn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Su)return a===gn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===bu)return a===gn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Tu)return a===gn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===wu)return a===gn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Au)return a===gn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ru)return a===gn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Cu)return a===gn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Pu||n===Iu||n===Du)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Pu)return a===gn?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Iu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Du)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Lu||n===Nu||n===dl||n===Uu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Lu)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Nu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===dl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Uu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ur?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var W2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,X2=`
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

}`,Nd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new No(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new mn({vertexShader:W2,fragmentShader:X2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new De(new cn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ud=class extends Ys{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,p=null,d=null,u=null,f=null,v=typeof XRWebGLBinding<"u",m=new Nd,g={},M=t.getContextAttributes(),S=null,y=null,_=[],T=[],A=new He,x=null,w=null,C=new mi;C.viewport=new Rn;let F=new mi;F.viewport=new Rn;let b=[C,F],L=new qc,P=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let de=_[Q];return de===void 0&&(de=new Na,_[Q]=de),de.getTargetRaySpace()},this.getControllerGrip=function(Q){let de=_[Q];return de===void 0&&(de=new Na,_[Q]=de),de.getGripSpace()},this.getHand=function(Q){let de=_[Q];return de===void 0&&(de=new Na,_[Q]=de),de.getHandSpace()};function Z(Q){let de=T.indexOf(Q.inputSource);if(de===-1)return;let Ce=_[de];Ce!==void 0&&(Ce.update(Q.inputSource,Q.frame,l||a),Ce.dispatchEvent({type:Q.type,data:Q.inputSource}))}function V(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",W);for(let Q=0;Q<_.length;Q++){let de=T[Q];de!==null&&(T[Q]=null,_[Q].disconnect(de))}P=null,H=null,m.reset();for(let Q in g)delete g[Q];if(e.setRenderTarget(S),u=null,d=null,p=null,s=null,y=null,rt.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(A.width,A.height,!1),w!==null){let Q=w.camera;Q.fov=w.fov,Q.zoom=w.zoom,Q.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&Ut("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,n.isPresenting===!0&&Ut("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Q){l=Q},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return p===null&&v&&(p=new XRWebGLBinding(s,t)),p},this.getFrame=function(){return f},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(S=e.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",V),s.addEventListener("inputsourceschange",W),M.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(A),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ce=null,xe=null,Ue=null;M.depth&&(Ue=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ce=M.stencil?Qs:Xs,xe=M.stencil?Ur:Ns);let $={colorFormat:t.RGBA8,depthFormat:Ue,scaleFactor:r};p=this.getBinding(),d=p.createProjectionLayer($),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Cn(d.textureWidth,d.textureHeight,{format:Ei,type:li,depthTexture:new ms(d.textureWidth,d.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,Ce),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Ce={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,t,Ce),s.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),y=new Cn(u.framebufferWidth,u.framebufferHeight,{format:Ei,type:li,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),rt.setContext(s),rt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function W(Q){for(let de=0;de<Q.removed.length;de++){let Ce=Q.removed[de],xe=T.indexOf(Ce);xe>=0&&(T[xe]=null,_[xe].disconnect(Ce))}for(let de=0;de<Q.added.length;de++){let Ce=Q.added[de],xe=T.indexOf(Ce);if(xe===-1){for(let $=0;$<_.length;$++)if($>=T.length){T.push(Ce),xe=$;break}else if(T[$]===null){T[$]=Ce,xe=$;break}if(xe===-1)break}let Ue=_[xe];Ue&&Ue.connect(Ce)}}let G=new N,k=new N;function Y(Q,de,Ce){G.setFromMatrixPosition(de.matrixWorld),k.setFromMatrixPosition(Ce.matrixWorld);let xe=G.distanceTo(k),Ue=de.projectionMatrix.elements,$=Ce.projectionMatrix.elements,Be=Ue[14]/(Ue[10]-1),te=Ue[14]/(Ue[10]+1),oe=(Ue[9]+1)/Ue[5],K=(Ue[9]-1)/Ue[5],ne=(Ue[8]-1)/Ue[0],ue=($[8]+1)/$[0],Ge=Be*ne,Oe=Be*ue,Je=xe/(-ne+ue),je=Je*-ne;if(de.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(je),Q.translateZ(Je),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Ue[10]===-1)Q.projectionMatrix.copy(de.projectionMatrix),Q.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{let q=Be+Je,gt=te+Je,dt=Ge-je,O=Oe+(xe-je),E=oe*te/gt*q,j=K*te/gt*q;Q.projectionMatrix.makePerspective(dt,O,E,j,q,gt),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function he(Q,de){de===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(de.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let de=Q.near,Ce=Q.far;m.texture!==null&&(m.depthNear>0&&(de=m.depthNear),m.depthFar>0&&(Ce=m.depthFar)),L.near=F.near=C.near=de,L.far=F.far=C.far=Ce,(P!==L.near||H!==L.far)&&(s.updateRenderState({depthNear:L.near,depthFar:L.far}),P=L.near,H=L.far),L.layers.mask=Q.layers.mask|6,C.layers.mask=L.layers.mask&-5,F.layers.mask=L.layers.mask&-3;let xe=Q.parent,Ue=L.cameras;he(L,xe);for(let $=0;$<Ue.length;$++)he(Ue[$],xe);Ue.length===2?Y(L,C,F):L.projectionMatrix.copy(C.projectionMatrix),w===null&&Q.isPerspectiveCamera&&(w={camera:Q,fov:Q.fov,zoom:Q.zoom}),we(Q,L,xe)};function we(Q,de,Ce){Ce===null?Q.matrix.copy(de.matrixWorld):(Q.matrix.copy(Ce.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(de.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(de.projectionMatrix),Q.projectionMatrixInverse.copy(de.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Ao*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(d===null&&u===null))return c},this.setFoveation=function(Q){c=Q,d!==null&&(d.fixedFoveation=Q),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=Q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(L)},this.getCameraTexture=function(Q){return g[Q]};let Ie=null;function Xe(Q,de){if(h=de.getViewerPose(l||a),f=de,h!==null){let Ce=h.views;u!==null&&(e.setRenderTargetFramebuffer(y,u.framebuffer),e.setRenderTarget(y));let xe=!1;Ce.length!==L.cameras.length&&(L.cameras.length=0,xe=!0);for(let te=0;te<Ce.length;te++){let oe=Ce[te],K=null;if(u!==null)K=u.getViewport(oe);else{let ue=p.getViewSubImage(d,oe);K=ue.viewport,te===0&&(e.setRenderTargetTextures(y,ue.colorTexture,ue.depthStencilTexture),e.setRenderTarget(y))}let ne=b[te];ne===void 0&&(ne=new mi,ne.layers.enable(te),ne.viewport=new Rn,b[te]=ne),ne.matrix.fromArray(oe.transform.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.projectionMatrix.fromArray(oe.projectionMatrix),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert(),ne.viewport.set(K.x,K.y,K.width,K.height),te===0&&(L.matrix.copy(ne.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),xe===!0&&L.cameras.push(ne)}let Ue=s.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){p=n.getBinding();let te=p.getDepthInformation(Ce[0]);te&&te.isValid&&te.texture&&m.init(te,s.renderState)}if(Ue&&Ue.includes("camera-access")&&v){e.state.unbindTexture(),p=n.getBinding();for(let te=0;te<Ce.length;te++){let oe=Ce[te].camera;if(oe){let K=g[oe];K||(K=new No,g[oe]=K);let ne=p.getCameraImage(oe);K.sourceTexture=ne}}}}for(let Ce=0;Ce<_.length;Ce++){let xe=T[Ce],Ue=_[Ce];xe!==null&&Ue!==void 0&&Ue.update(xe,de,l||a)}Ie&&Ie(Q,de),de.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:de}),f=null}let rt=new J0;rt.setAnimationLoop(Xe),this.setAnimationLoop=function(Q){Ie=Q},this.dispose=function(){}}},Y2=new Mt,np=new Xt;np.set(-1,0,0,0,1,0,0,0,1);function q2(i,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,dd(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,M,S,y){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),p(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),d(m,g),g.isMeshPhysicalMaterial&&u(m,g,y)):g.isMeshMatcapMaterial?(r(m,g),f(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),v(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(a(m,g),g.isLineDashedMaterial&&o(m,g)):g.isPointsMaterial?c(m,g,M,S):g.isSpriteMaterial?l(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===vi&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===vi&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let M=e.get(g),S=M.envMap,y=M.envMapRotation;S&&(m.envMap.value=S,m.envMapRotation.value.setFromMatrix4(Y2.makeRotationFromEuler(y)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(np),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function a(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function o(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function c(m,g,M,S){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*M,m.scale.value=S*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function l(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function p(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function d(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function u(m,g,M){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===vi&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function f(m,g){g.matcap&&(m.matcap.value=g.matcap)}function v(m,g){let M=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Z2(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,_){let T=_.program;n.uniformBlockBinding(y,T)}function l(y,_){let T=s[y.id];T===void 0&&(m(y),T=h(y),s[y.id]=T,y.addEventListener("dispose",M));let A=_.program;n.updateUBOMapping(y,A);let x=e.render.frame;r[y.id]!==x&&(d(y),r[y.id]=x)}function h(y){let _=p();y.__bindingPointIndex=_;let T=i.createBuffer(),A=y.__size,x=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,A,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,T),T}function p(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Ft("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let _=s[y.id],T=y.uniforms,A=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let x=0,w=T.length;x<w;x++){let C=T[x];if(Array.isArray(C))for(let F=0,b=C.length;F<b;F++)u(C[F],x,F,A);else u(C,x,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(y,_,T,A){if(v(y,_,T,A)===!0){let x=y.__offset,w=y.value;if(Array.isArray(w)){let C=0;for(let F=0;F<w.length;F++){let b=w[F],L=g(b);f(b,y.__data,C),typeof b!="number"&&typeof b!="boolean"&&!b.isMatrix3&&!ArrayBuffer.isView(b)&&(C+=L.storage/Float32Array.BYTES_PER_ELEMENT)}}else f(w,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,y.__data)}}function f(y,_,T){typeof y=="number"||typeof y=="boolean"?_[0]=y:y.isMatrix3?(_[0]=y.elements[0],_[1]=y.elements[1],_[2]=y.elements[2],_[3]=0,_[4]=y.elements[3],_[5]=y.elements[4],_[6]=y.elements[5],_[7]=0,_[8]=y.elements[6],_[9]=y.elements[7],_[10]=y.elements[8],_[11]=0):ArrayBuffer.isView(y)?_.set(new y.constructor(y.buffer,y.byteOffset,_.length)):y.toArray(_,T)}function v(y,_,T,A){let x=y.value,w=_+"_"+T;if(A[w]===void 0)return typeof x=="number"||typeof x=="boolean"?A[w]=x:ArrayBuffer.isView(x)?A[w]=x.slice():A[w]=x.clone(),!0;{let C=A[w];if(typeof x=="number"||typeof x=="boolean"){if(C!==x)return A[w]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(C.equals(x)===!1)return C.copy(x),!0}}return!1}function m(y){let _=y.uniforms,T=0,A=16;for(let w=0,C=_.length;w<C;w++){let F=Array.isArray(_[w])?_[w]:[_[w]];for(let b=0,L=F.length;b<L;b++){let P=F[b],H=Array.isArray(P.value)?P.value:[P.value];for(let Z=0,V=H.length;Z<V;Z++){let W=H[Z],G=g(W),k=T%A,Y=k%G.boundary,he=k+Y;T+=Y,he!==0&&A-he<G.storage&&(T+=A-he),P.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=T,T+=G.storage}}}let x=T%A;return x>0&&(T+=A-x),y.__size=T,y.__cache={},this}function g(y){let _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?Ut("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(_.boundary=16,_.storage=y.byteLength):Ut("WebGLRenderer: Unsupported uniform value type.",y),_}function M(y){let _=y.target;_.removeEventListener("dispose",M);let T=a.indexOf(_.__bindingPointIndex);a.splice(T,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function S(){for(let y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:c,update:l,dispose:S}}var $2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),js=null;function J2(){return js===null&&(js=new ps($2,16,16,Fr,Vn),js.name="DFG_LUT",js.minFilter=ei,js.magFilter=ei,js.wrapS=ds,js.wrapT=ds,js.generateMipmaps=!1,js.needsUpdate=!0),js}var Gu=class{constructor(e={}){let{canvas:t=x0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:d=!1,outputBufferType:u=li}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;let v=u,m=new Set([ru,su,iu]),g=new Set([li,Ns,$a,Ur,eu,tu]),M=new Uint32Array(4),S=new Int32Array(4),y=new N,_=null,T=null,A=[],x=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ss,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,F=!1,b=null,L=null,P=null,H=null;this._outputColorSpace=fn;let Z=0,V=0,W=null,G=-1,k=null,Y=new Rn,he=new Rn,we=null,Ie=new it(0),Xe=0,rt=t.width,Q=t.height,de=1,Ce=null,xe=null,Ue=new Rn(0,0,rt,Q),$=new Rn(0,0,rt,Q),Be=!1,te=new Oa,oe=!1,K=!1,ne=new Mt,ue=new N,Ge=new Rn,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Je=!1;function je(){return W===null?de:1}let q=n;function gt(I,ie){return t.getContext(I,ie)}let dt,O,E,j,se,fe,Ve,ke,Te,ve,Ke,xt,D,J,le,ge,Le,B,Se,re,Ne,Re,U;try{let I={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",et,!1),t.addEventListener("webglcontextrestored",ot,!1),t.addEventListener("webglcontextcreationerror",Ct,!1),q===null){let ie="webgl2";if(q=gt(ie,I),q===null)throw gt(ie)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}be()}catch(I){throw t.removeEventListener("webglcontextlost",et,!1),t.removeEventListener("webglcontextrestored",ot,!1),t.removeEventListener("webglcontextcreationerror",Ct,!1),Ft("WebGLRenderer: "+I.message),I}function be(){dt=new iv(q),dt.init(),Ne=new V2(q,dt),O=new qx(q,dt,e,Ne),E=new G2(q,dt),O.reversedDepthBuffer&&d&&E.buffers.depth.setReversed(!0),L=q.createFramebuffer(),P=q.createFramebuffer(),H=q.createFramebuffer(),j=new av(q),se=new A2,fe=new k2(q,dt,E,se,O,Ne,j),Ve=new nv(C),ke=new lg(q),Re=new Xx(q,ke),Te=new sv(q,ke,j,Re),ve=new lv(q,Te,ke,Re,j),B=new ov(q,O,fe),le=new Zx(se),Ke=new w2(C,Ve,dt,O,Re,le),xt=new q2(C,se),D=new C2,J=new U2(dt),Le=new Wx(C,Ve,E,ve,f,c),ge=new z2(C,ve,O),U=new Z2(q,j,O,E),Se=new Yx(q,dt,j),re=new rv(q,dt,j),j.programs=Ke.programs,C.capabilities=O,C.extensions=dt,C.properties=se,C.renderLists=D,C.shadowMap=ge,C.state=E,C.info=j}v!==li&&(w=new uv(v,t.width,t.height,o,s,r));let ce=new Ud(C,q);this.xr=ce,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){let I=dt.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){let I=dt.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return de},this.setPixelRatio=function(I){I!==void 0&&(de=I,this.setSize(rt,Q,!1))},this.getSize=function(I){return I.set(rt,Q)},this.setSize=function(I,ie,Ae=!0){if(ce.isPresenting){Ut("WebGLRenderer: Can't change size while VR device is presenting.");return}rt=I,Q=ie,t.width=Math.floor(I*de),t.height=Math.floor(ie*de),Ae===!0&&(t.style.width=I+"px",t.style.height=ie+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,I,ie)},this.getDrawingBufferSize=function(I){return I.set(rt*de,Q*de).floor()},this.setDrawingBufferSize=function(I,ie,Ae){rt=I,Q=ie,de=Ae,t.width=Math.floor(I*Ae),t.height=Math.floor(ie*Ae),this.setViewport(0,0,I,ie)},this.setEffects=function(I){if(v===li){Ft("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(I){for(let ie=0;ie<I.length;ie++)if(I[ie].isOutputPass===!0){Ut("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(I||[])},this.getCurrentViewport=function(I){return I.copy(Y)},this.getViewport=function(I){return I.copy(Ue)},this.setViewport=function(I,ie,Ae,me){I.isVector4?Ue.set(I.x,I.y,I.z,I.w):Ue.set(I,ie,Ae,me),E.viewport(Y.copy(Ue).multiplyScalar(de).round())},this.getScissor=function(I){return I.copy($)},this.setScissor=function(I,ie,Ae,me){I.isVector4?$.set(I.x,I.y,I.z,I.w):$.set(I,ie,Ae,me),E.scissor(he.copy($).multiplyScalar(de).round())},this.getScissorTest=function(){return Be},this.setScissorTest=function(I){E.setScissorTest(Be=I)},this.setOpaqueSort=function(I){Ce=I},this.setTransparentSort=function(I){xe=I},this.getClearColor=function(I){return I.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor(...arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha(...arguments)},this.clear=function(I=!0,ie=!0,Ae=!0){let me=0;if(I){let ye=!1;if(W!==null){let ut=W.texture.format;ye=m.has(ut)}if(ye){let ut=W.texture.type,yt=g.has(ut),X=Le.getClearColor(),ee=Le.getClearAlpha(),ae=X.r,Fe=X.g,Me=X.b;yt?(M[0]=ae,M[1]=Fe,M[2]=Me,M[3]=ee,q.clearBufferuiv(q.COLOR,0,M)):(S[0]=ae,S[1]=Fe,S[2]=Me,S[3]=ee,q.clearBufferiv(q.COLOR,0,S))}else me|=q.COLOR_BUFFER_BIT}ie&&(me|=q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Ae&&(me|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),me!==0&&q.clear(me)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(I){I.setRenderer(this),b=I},this.dispose=function(){t.removeEventListener("webglcontextlost",et,!1),t.removeEventListener("webglcontextrestored",ot,!1),t.removeEventListener("webglcontextcreationerror",Ct,!1),Le.dispose(),D.dispose(),J.dispose(),se.dispose(),Ve.dispose(),ve.dispose(),Re.dispose(),U.dispose(),Ke.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",pe),ce.removeEventListener("sessionend",Pe),Ye.stop()};function et(I){I.preventDefault(),wo("WebGLRenderer: Context Lost."),F=!0}function ot(){wo("WebGLRenderer: Context Restored."),F=!1;let I=j.autoReset,ie=ge.enabled,Ae=ge.autoUpdate,me=ge.needsUpdate,ye=ge.type;be(),j.autoReset=I,ge.enabled=ie,ge.autoUpdate=Ae,ge.needsUpdate=me,ge.type=ye}function Ct(I){Ft("WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function Lt(I){let ie=I.target;ie.removeEventListener("dispose",Lt),Wt(ie)}function Wt(I){tn(I),se.remove(I)}function tn(I){let ie=se.get(I).programs;ie!==void 0&&(ie.forEach(function(Ae){Ke.releaseProgram(Ae)}),I.isShaderMaterial&&Ke.releaseShaderCache(I))}this.renderBufferDirect=function(I,ie,Ae,me,ye,ut){ie===null&&(ie=Oe);let yt=ye.isMesh&&ye.matrixWorld.determinantAffine()<0,X=Fi(I,ie,Ae,me,ye);E.setMaterial(me,yt);let ee=Ae.index,ae=1;if(me.wireframe===!0){if(ee=Te.getWireframeAttribute(Ae),ee===void 0)return;ae=2}let Fe=Ae.drawRange,Me=Ae.attributes.position,Ee=Fe.start*ae,We=(Fe.start+Fe.count)*ae;ut!==null&&(Ee=Math.max(Ee,ut.start*ae),We=Math.min(We,(ut.start+ut.count)*ae)),ee!==null?(Ee=Math.max(Ee,0),We=Math.min(We,ee.count)):Me!=null&&(Ee=Math.max(Ee,0),We=Math.min(We,Me.count));let Qe=We-Ee;if(Qe<0||Qe===1/0)return;Re.setup(ye,me,X,Ae,ee);let st,mt=Se;if(ee!==null&&(st=ke.get(ee),mt=re,mt.setIndex(st)),ye.isMesh)me.wireframe===!0?(E.setLineWidth(me.wireframeLinewidth*je()),mt.setMode(q.LINES)):mt.setMode(q.TRIANGLES);else if(ye.isLine){let Ze=me.linewidth;Ze===void 0&&(Ze=1),E.setLineWidth(Ze*je()),ye.isLineSegments?mt.setMode(q.LINES):ye.isLineLoop?mt.setMode(q.LINE_LOOP):mt.setMode(q.LINE_STRIP)}else ye.isPoints?mt.setMode(q.POINTS):ye.isSprite&&mt.setMode(q.TRIANGLES);if(ye.isBatchedMesh)if(dt.get("WEBGL_multi_draw"))mt.renderMultiDraw(ye._multiDrawStarts,ye._multiDrawCounts,ye._multiDrawCount);else{let Ze=ye._multiDrawStarts,_e=ye._multiDrawCounts,bt=ye._multiDrawCount,ht=ee?ke.get(ee).bytesPerElement:1,Nt=se.get(me).currentProgram.getUniforms();for(let Kt=0;Kt<bt;Kt++)Nt.setValue(q,"_gl_DrawID",Kt),mt.render(Ze[Kt]/ht,_e[Kt])}else if(ye.isInstancedMesh)mt.renderInstances(Ee,Qe,ye.count);else if(Ae.isInstancedBufferGeometry){let Ze=Ae._maxInstanceCount!==void 0?Ae._maxInstanceCount:1/0,_e=Math.min(Ae.instanceCount,Ze);mt.renderInstances(Ee,Qe,_e)}else mt.render(Ee,Qe)};function Bn(I,ie,Ae,me){b!==null&&I.isNodeMaterial&&b.setObject(me,I),oe===!0&&le.setState(I,Ae,!1),I.transparent===!0&&I.side===Xn&&I.forceSinglePass===!1?(I.side=vi,I.needsUpdate=!0,zt(I,ie,me),I.side=Ir,I.needsUpdate=!0,zt(I,ie,me),I.side=Xn):zt(I,ie,me)}this.compile=function(I,ie,Ae=null){Ae===null&&(Ae=I),b!==null&&b.renderStart(I,ie,Ae),T=J.get(Ae),T.init(ie),x.push(T),Ae.traverseVisible(function(ye){ye.isLight&&ye.layers.test(ie.layers)&&(T.pushLight(ye),ye.castShadow&&T.pushShadow(ye))}),I!==Ae&&I.traverseVisible(function(ye){ye.isLight&&ye.layers.test(ie.layers)&&(T.pushLight(ye),ye.castShadow&&T.pushShadow(ye))}),T.setupLights(),b!==null&&b.updateLights(T.state.lightsArray),K=this.localClippingEnabled,oe=le.init(this.clippingPlanes,K),oe===!0&&le.setGlobalState(this.clippingPlanes,ie),b!==null&&ge.render(T.state.shadowsArray,Ae,ie);let me=new Set;return I.traverse(function(ye){if(!(ye.isMesh||ye.isPoints||ye.isLine||ye.isSprite))return;let ut=ye.material;if(ut)if(Array.isArray(ut))for(let yt=0;yt<ut.length;yt++){let X=ut[yt];Bn(X,Ae,ie,ye),me.add(X)}else Bn(ut,Ae,ie,ye),me.add(ut)}),T=x.pop(),b!==null&&b.renderEnd(),me},this.compileAsync=function(I,ie,Ae=null){let me=this.compile(I,ie,Ae);return new Promise(ye=>{function ut(){if(me.forEach(function(yt){let ee=se.get(yt).currentProgram;(ee===void 0||ee.isReady())&&me.delete(yt)}),me.size===0){ye(I);return}setTimeout(ut,10)}dt.get("KHR_parallel_shader_compile")!==null?ut():setTimeout(ut,10)})};let pn=null;function R(I){pn&&pn(I)}function pe(){Ye.stop()}function Pe(){Ye.start()}let Ye=new J0;Ye.setAnimationLoop(R),typeof self<"u"&&Ye.setContext(self),this.setAnimationLoop=function(I){pn=I,ce.setAnimationLoop(I),I===null?Ye.stop():Ye.start()},ce.addEventListener("sessionstart",pe),ce.addEventListener("sessionend",Pe),this.render=function(I,ie){if(ie!==void 0&&ie.isCamera!==!0){Ft("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;b!==null&&b.renderStart(I,ie);let Ae=ce.enabled===!0&&ce.isPresenting===!0,me=w!==null&&(W===null||Ae)&&w.begin(C,W);if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),ie.parent===null&&ie.matrixWorldAutoUpdate===!0&&ie.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(ie),ie=ce.getCamera()),I.isScene===!0&&I.onBeforeRender(C,I,ie,W),T=J.get(I,x.length),T.init(ie),T.state.textureUnits=fe.getTextureUnits(),x.push(T),ne.multiplyMatrices(ie.projectionMatrix,ie.matrixWorldInverse),te.setFromProjectionMatrix(ne,Ls,ie.reversedDepth),K=this.localClippingEnabled,oe=le.init(this.clippingPlanes,K),_=D.get(I,A.length),_.init(),A.push(_),ce.enabled===!0&&ce.isPresenting===!0){let yt=C.xr.getDepthSensingMesh();yt!==null&&qe(yt,ie,-1/0,C.sortObjects)}qe(I,ie,0,C.sortObjects),_.finish(),b!==null&&b.updateLights(T.state.lightsArray),C.sortObjects===!0&&_.sort(Ce,xe),Je=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,Je&&Le.addToRenderList(_,I),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),oe===!0&&le.beginShadows();let ye=T.state.shadowsArray;if(ge.render(ye,I,ie),oe===!0&&le.endShadows(),(me&&w.hasRenderPass())===!1){let yt=_.opaque,X=_.transmissive;if(T.setupLights(),ie.isArrayCamera){let ee=ie.cameras;if(X.length>0)for(let ae=0,Fe=ee.length;ae<Fe;ae++){let Me=ee[ae];lt(yt,X,I,Me)}Je&&Le.render(I);for(let ae=0,Fe=ee.length;ae<Fe;ae++){let Me=ee[ae];St(_,I,Me,Me.viewport)}}else X.length>0&&lt(yt,X,I,ie),Je&&Le.render(I),St(_,I,ie)}W!==null&&V===0&&(fe.updateMultisampleRenderTarget(W),fe.updateRenderTargetMipmap(W)),me&&w.end(C),I.isScene===!0&&I.onAfterRender(C,I,ie),Re.resetDefaultState(),G=-1,k=null,x.pop(),x.length>0?(T=x[x.length-1],fe.setTextureUnits(T.state.textureUnits),oe===!0&&le.setGlobalState(C.clippingPlanes,T.state.camera)):T=null,A.pop(),A.length>0?_=A[A.length-1]:_=null,b!==null&&b.renderEnd()};function qe(I,ie,Ae,me){if(I.visible===!1)return;if(I.layers.test(ie.layers)){if(I.isGroup)Ae=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(ie);else if(I.isLightProbeGrid)T.pushLightProbeGrid(I);else if(I.isLight)T.pushLight(I),I.castShadow&&T.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||I.intersectsFrustum(te)){me&&Ge.setFromMatrixPosition(I.matrixWorld).applyMatrix4(ne);let yt=ve.update(I),X=I.material;X.visible&&_.push(I,yt,X,Ae,Ge.z,null,ie)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||I.intersectsFrustum(te))){let yt=ve.update(I),X=I.material;if(me&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),Ge.copy(I.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),Ge.copy(yt.boundingSphere.center)),Ge.applyMatrix4(I.matrixWorld).applyMatrix4(ne)),Array.isArray(X)){let ee=yt.groups;for(let ae=0,Fe=ee.length;ae<Fe;ae++){let Me=ee[ae],Ee=X[Me.materialIndex];Ee&&Ee.visible&&_.push(I,yt,Ee,Ae,Ge.z,Me,ie)}}else X.visible&&_.push(I,yt,X,Ae,Ge.z,null,ie)}}let ut=I.children;for(let yt=0,X=ut.length;yt<X;yt++)qe(ut[yt],ie,Ae,me)}function St(I,ie,Ae,me){let{opaque:ye,transmissive:ut,transparent:yt}=I;T.setupLightsView(Ae),oe===!0&&le.setGlobalState(C.clippingPlanes,Ae),me&&E.viewport(Y.copy(me)),ye.length>0&&_t(ye,ie,Ae),ut.length>0&&_t(ut,ie,Ae),yt.length>0&&_t(yt,ie,Ae),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function lt(I,ie,Ae,me){if((Ae.isScene===!0?Ae.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[me.id]===void 0){let Ee=dt.has("EXT_color_buffer_half_float")||dt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[me.id]=new Cn(1,1,{generateMipmaps:!0,type:Ee?Vn:li,minFilter:Ks,samples:Math.max(4,O.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:dn.workingColorSpace})}let ut=T.state.transmissionRenderTarget[me.id],yt=me.viewport||Y;ut.setSize(yt.z*C.transmissionResolutionScale,yt.w*C.transmissionResolutionScale);let X=C.getRenderTarget(),ee=C.getActiveCubeFace(),ae=C.getActiveMipmapLevel();C.setRenderTarget(ut),C.getClearColor(Ie),Xe=C.getClearAlpha(),Xe<1&&C.setClearColor(16777215,.5),C.clear(),Je&&Le.render(Ae);let Fe=C.toneMapping;C.toneMapping=ss;let Me=me.viewport;if(me.viewport!==void 0&&(me.viewport=void 0),T.setupLightsView(me),oe===!0&&le.setGlobalState(C.clippingPlanes,me),_t(I,Ae,me),fe.updateMultisampleRenderTarget(ut),fe.updateRenderTargetMipmap(ut),dt.has("WEBGL_multisampled_render_to_texture")===!1){let Ee=!1;for(let We=0,Qe=ie.length;We<Qe;We++){let st=ie[We],{object:mt,geometry:Ze,material:_e,group:bt}=st;if(_e.side===Xn&&mt.layers.test(me.layers)){let ht=_e.side;_e.side=vi,_e.needsUpdate=!0,vt(mt,Ae,me,Ze,_e,bt),_e.side=ht,_e.needsUpdate=!0,Ee=!0}}Ee===!0&&(fe.updateMultisampleRenderTarget(ut),fe.updateRenderTargetMipmap(ut))}C.setRenderTarget(X,ee,ae),C.setClearColor(Ie,Xe),Me!==void 0&&(me.viewport=Me),C.toneMapping=Fe}function _t(I,ie,Ae){let me=ie.isScene===!0?ie.overrideMaterial:null;for(let ye=0,ut=I.length;ye<ut;ye++){let yt=I[ye],{object:X,geometry:ee,group:ae}=yt,Fe=yt.material;Fe.allowOverride===!0&&me!==null&&(Fe=me),X.layers.test(Ae.layers)&&vt(X,ie,Ae,ee,Fe,ae)}}function vt(I,ie,Ae,me,ye,ut){b!==null&&ye.isNodeMaterial&&b.setObject(I,ye),I.onBeforeRender(C,ie,Ae,me,ye,ut),I.modelViewMatrix.multiplyMatrices(Ae.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),ye.onBeforeRender(C,ie,Ae,me,I,ut),ye.transparent===!0&&ye.side===Xn&&ye.forceSinglePass===!1?(ye.side=vi,ye.needsUpdate=!0,C.renderBufferDirect(Ae,ie,me,ye,I,ut),ye.side=Ir,ye.needsUpdate=!0,C.renderBufferDirect(Ae,ie,me,ye,I,ut),ye.side=Xn):C.renderBufferDirect(Ae,ie,me,ye,I,ut),I.onAfterRender(C,ie,Ae,me,ye,ut)}function zt(I,ie,Ae){ie.isScene!==!0&&(ie=Oe);let me=se.get(I),ye=T.state.lights,ut=T.state.shadowsArray,yt=ye.state.version,X=Ke.getParameters(I,ye.state,ut,ie,Ae,T.state.lightProbeGridArray),ee=Ke.getProgramCacheKey(X),ae=me.programs;me.environment=I.isMeshStandardMaterial||I.isMeshLambertMaterial||I.isMeshPhongMaterial?ie.environment:null,me.fog=ie.fog;let Fe=I.isMeshStandardMaterial||I.isMeshLambertMaterial&&!I.envMap||I.isMeshPhongMaterial&&!I.envMap;me.envMap=Ve.get(I.envMap||me.environment,Fe),me.envMapRotation=me.environment!==null&&I.envMap===null?ie.environmentRotation:I.envMapRotation,ae===void 0&&(I.addEventListener("dispose",Lt),ae=new Map,me.programs=ae);let Me=ae.get(ee);if(Me!==void 0){if(me.currentProgram===Me&&me.lightsStateVersion===yt)return Mn(I,X),Me}else X.uniforms=Ke.getUniforms(I),b!==null&&I.isNodeMaterial&&b.build(I,Ae,X),I.onBeforeCompile(X,C),Me=Ke.acquireProgram(X,ee),ae.set(ee,Me),me.uniforms=X.uniforms;let Ee=me.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Ee.clippingPlanes=le.uniform),Mn(I,X),me.needsLights=Ti(I),me.lightsStateVersion=yt,me.needsLights&&(Ee.ambientLightColor.value=ye.state.ambient,Ee.lightProbe.value=ye.state.probe,Ee.sunLights.value=ye.state.sun,Ee.sunLightShadows.value=ye.state.sunShadow,Ee.directionalLights.value=ye.state.directional,Ee.directionalLightShadows.value=ye.state.directionalShadow,Ee.spotLights.value=ye.state.spot,Ee.spotLightShadows.value=ye.state.spotShadow,Ee.rectAreaLights.value=ye.state.rectArea,Ee.ltc_1.value=ye.state.rectAreaLTC1,Ee.ltc_2.value=ye.state.rectAreaLTC2,Ee.pointLights.value=ye.state.point,Ee.pointLightShadows.value=ye.state.pointShadow,Ee.hemisphereLights.value=ye.state.hemi,Ee.sunShadowMatrix.value=ye.state.sunShadowMatrix,Ee.sunShadowCascade.value=ye.state.sunShadowCascade,Ee.directionalShadowMatrix.value=ye.state.directionalShadowMatrix,Ee.spotLightMatrix.value=ye.state.spotLightMatrix,Ee.spotLightMap.value=ye.state.spotLightMap,Ee.pointShadowMatrix.value=ye.state.pointShadowMatrix),me.lightProbeGrid=T.state.lightProbeGridArray.length>0,me.currentProgram=Me,me.uniformsList=null,Me}function Ht(I){if(I.uniformsList===null){let ie=I.currentProgram.getUniforms();I.uniformsList=Qa.seqWithValue(ie.seq,I.uniforms)}return I.uniformsList}function Mn(I,ie){let Ae=se.get(I);Ae.outputColorSpace=ie.outputColorSpace,Ae.batching=ie.batching,Ae.batchingColor=ie.batchingColor,Ae.instancing=ie.instancing,Ae.instancingColor=ie.instancingColor,Ae.instancingMorph=ie.instancingMorph,Ae.skinning=ie.skinning,Ae.morphTargets=ie.morphTargets,Ae.morphNormals=ie.morphNormals,Ae.morphColors=ie.morphColors,Ae.morphTargetsCount=ie.morphTargetsCount,Ae.numClippingPlanes=ie.numClippingPlanes,Ae.numIntersection=ie.numClipIntersection,Ae.vertexAlphas=ie.vertexAlphas,Ae.vertexTangents=ie.vertexTangents,Ae.toneMapping=ie.toneMapping}function bi(I,ie){if(I.length===0)return null;if(I.length===1)return I[0].texture!==null?I[0]:null;y.setFromMatrixPosition(ie.matrixWorld);for(let Ae=0,me=I.length;Ae<me;Ae++){let ye=I[Ae];if(ye.texture!==null&&ye.boundingBox.containsPoint(y))return ye}return null}function Fi(I,ie,Ae,me,ye){ie.isScene!==!0&&(ie=Oe),fe.resetTextureUnits();let ut=ie.fog,yt=me.isMeshStandardMaterial||me.isMeshLambertMaterial||me.isMeshPhongMaterial?ie.environment:null,X=W===null?C.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:dn.workingColorSpace,ee=me.isMeshStandardMaterial||me.isMeshLambertMaterial&&!me.envMap||me.isMeshPhongMaterial&&!me.envMap,ae=Ve.get(me.envMap||yt,ee),Fe=me.vertexColors===!0&&!!Ae.attributes.color&&Ae.attributes.color.itemSize===4,Me=!!Ae.attributes.tangent&&(!!me.normalMap||me.anisotropy>0),Ee=!!Ae.morphAttributes.position,We=!!Ae.morphAttributes.normal,Qe=!!Ae.morphAttributes.color,st=ss;me.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(st=C.toneMapping);let mt=Ae.morphAttributes.position||Ae.morphAttributes.normal||Ae.morphAttributes.color,Ze=mt!==void 0?mt.length:0,_e=se.get(me),bt=T.state.lights;if(oe===!0&&(K===!0||I!==k)){let Tt=I===k&&me.id===G;le.setState(me,I,Tt)}let ht=!1;me.version===_e.__version?(_e.needsLights&&_e.lightsStateVersion!==bt.state.version||_e.outputColorSpace!==X||ye.isBatchedMesh&&_e.batching===!1||!ye.isBatchedMesh&&_e.batching===!0||ye.isBatchedMesh&&_e.batchingColor===!0&&ye._colorsTexture===null||ye.isBatchedMesh&&_e.batchingColor===!1&&ye._colorsTexture!==null||ye.isInstancedMesh&&_e.instancing===!1||!ye.isInstancedMesh&&_e.instancing===!0||ye.isSkinnedMesh&&_e.skinning===!1||!ye.isSkinnedMesh&&_e.skinning===!0||ye.isInstancedMesh&&_e.instancingColor===!0&&ye.instanceColor===null||ye.isInstancedMesh&&_e.instancingColor===!1&&ye.instanceColor!==null||ye.isInstancedMesh&&_e.instancingMorph===!0&&ye.morphTexture===null||ye.isInstancedMesh&&_e.instancingMorph===!1&&ye.morphTexture!==null||_e.envMap!==ae||me.fog===!0&&_e.fog!==ut||_e.numClippingPlanes!==void 0&&(_e.numClippingPlanes!==le.numPlanes||_e.numIntersection!==le.numIntersection)||_e.vertexAlphas!==Fe||_e.vertexTangents!==Me||_e.morphTargets!==Ee||_e.morphNormals!==We||_e.morphColors!==Qe||_e.toneMapping!==st||_e.morphTargetsCount!==Ze||!!_e.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(ht=!0):(ht=!0,_e.__version=me.version);let Nt=_e.currentProgram;ht===!0&&(Nt=zt(me,ie,ye),b&&me.isNodeMaterial&&b.onUpdateProgram(me,Nt,_e));let Kt=!1,nn=!1,hn=!1,At=Nt.getUniforms(),$t=_e.uniforms;if(E.useProgram(Nt.program)&&(Kt=!0,nn=!0,hn=!0),me.id!==G&&(G=me.id,nn=!0),_e.needsLights){let Tt=bi(T.state.lightProbeGridArray,ye);_e.lightProbeGrid!==Tt&&(_e.lightProbeGrid=Tt,nn=!0)}if(Kt||k!==I){E.buffers.depth.getReversed()&&I.reversedDepth!==!0&&(I._reversedDepth=!0,I.updateProjectionMatrix()),At.setValue(q,"projectionMatrix",I.projectionMatrix),At.setValue(q,"viewMatrix",I.matrixWorldInverse);let Fn=At.map.cameraPosition;Fn!==void 0&&Fn.setValue(q,ue.setFromMatrixPosition(I.matrixWorld)),O.logarithmicDepthBuffer&&At.setValue(q,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(me.isMeshPhongMaterial||me.isMeshToonMaterial||me.isMeshLambertMaterial||me.isMeshBasicMaterial||me.isMeshStandardMaterial||me.isShaderMaterial)&&At.setValue(q,"isOrthographic",I.isOrthographicCamera===!0),k!==I&&(k=I,nn=!0,hn=!0)}if(_e.needsLights&&(bt.state.sunShadowMap.length>0&&At.setValue(q,"sunShadowMap",bt.state.sunShadowMap,fe),bt.state.directionalShadowMap.length>0&&At.setValue(q,"directionalShadowMap",bt.state.directionalShadowMap,fe),bt.state.spotShadowMap.length>0&&At.setValue(q,"spotShadowMap",bt.state.spotShadowMap,fe),bt.state.pointShadowMap.length>0&&At.setValue(q,"pointShadowMap",bt.state.pointShadowMap,fe)),ye.isSkinnedMesh){At.setOptional(q,ye,"bindMatrix"),At.setOptional(q,ye,"bindMatrixInverse");let Tt=ye.skeleton;Tt&&(Tt.boneTexture===null&&Tt.computeBoneTexture(),At.setValue(q,"boneTexture",Tt.boneTexture,fe))}ye.isBatchedMesh&&(At.setOptional(q,ye,"batchingTexture"),At.setValue(q,"batchingTexture",ye._matricesTexture,fe),At.setOptional(q,ye,"batchingIdTexture"),At.setValue(q,"batchingIdTexture",ye._indirectTexture,fe),At.setOptional(q,ye,"batchingColorTexture"),ye._colorsTexture!==null&&At.setValue(q,"batchingColorTexture",ye._colorsTexture,fe));let It=Ae.morphAttributes;if((It.position!==void 0||It.normal!==void 0||It.color!==void 0)&&B.update(ye,Ae,Nt),(nn||_e.receiveShadow!==ye.receiveShadow)&&(_e.receiveShadow=ye.receiveShadow,At.setValue(q,"receiveShadow",ye.receiveShadow)),(me.isMeshStandardMaterial||me.isMeshLambertMaterial||me.isMeshPhongMaterial)&&me.envMap===null&&ie.environment!==null&&($t.envMapIntensity.value=ie.environmentIntensity),$t.dfgLUT!==void 0&&($t.dfgLUT.value=J2()),nn){if(At.setValue(q,"toneMappingExposure",C.toneMappingExposure),_e.needsLights&&Oi($t,hn),ut&&me.fog===!0&&xt.refreshFogUniforms($t,ut),xt.refreshMaterialUniforms($t,me,de,Q,T.state.transmissionRenderTarget[I.id]),_e.needsLights&&_e.lightProbeGrid){let Tt=_e.lightProbeGrid;$t.probesSH.value=Tt.texture,$t.probesMin.value.copy(Tt.boundingBox.min),$t.probesMax.value.copy(Tt.boundingBox.max),$t.probesResolution.value.copy(Tt.resolution)}Qa.upload(q,Ht(_e),$t,fe)}if(me.isShaderMaterial&&me.uniformsNeedUpdate===!0&&(Qa.upload(q,Ht(_e),$t,fe),me.uniformsNeedUpdate=!1),me.isSpriteMaterial&&At.setValue(q,"center",ye.center),At.setValue(q,"modelViewMatrix",ye.modelViewMatrix),At.setValue(q,"normalMatrix",ye.normalMatrix),At.setValue(q,"modelMatrix",ye.matrixWorld),me.uniformsGroups!==void 0){let Tt=me.uniformsGroups;for(let Fn=0,Hn=Tt.length;Fn<Hn;Fn++){let Zn=Tt[Fn];U.update(Zn,Nt),U.bind(Zn,Nt)}}return Nt}function Oi(I,ie){I.ambientLightColor.needsUpdate=ie,I.lightProbe.needsUpdate=ie,I.sunLights.needsUpdate=ie,I.sunLightShadows.needsUpdate=ie,I.directionalLights.needsUpdate=ie,I.directionalLightShadows.needsUpdate=ie,I.pointLights.needsUpdate=ie,I.pointLightShadows.needsUpdate=ie,I.spotLights.needsUpdate=ie,I.spotLightShadows.needsUpdate=ie,I.rectAreaLights.needsUpdate=ie,I.hemisphereLights.needsUpdate=ie}function Ti(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(I,ie,Ae){let me=se.get(I);me.__autoAllocateDepthBuffer=I.resolveDepthBuffer===!1,me.__autoAllocateDepthBuffer===!1&&(me.__useRenderToTexture=!1),se.get(I.texture).__webglTexture=ie,se.get(I.depthTexture).__webglTexture=me.__autoAllocateDepthBuffer?void 0:Ae,me.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(I,ie){let Ae=se.get(I);Ae.__webglFramebuffer=ie,Ae.__useDefaultFramebuffer=ie===void 0},this.setRenderTarget=function(I,ie=0,Ae=0){W=I,Z=ie,V=Ae;let me=null,ye=!1,ut=!1;if(I){let X=se.get(I);if(X.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(q.FRAMEBUFFER,X.__webglFramebuffer),Y.copy(I.viewport),he.copy(I.scissor),we=I.scissorTest,E.viewport(Y),E.scissor(he),E.setScissorTest(we),G=-1;return}else if(X.__webglFramebuffer===void 0)fe.setupRenderTarget(I);else if(X.__hasExternalTextures)fe.rebindTextures(I,se.get(I.texture).__webglTexture,se.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){let Fe=I.depthTexture;if(X.__boundDepthTexture!==Fe){if(Fe!==null&&se.has(Fe)&&(I.width!==Fe.image.width||I.height!==Fe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");fe.setupDepthRenderbuffer(I)}}let ee=I.texture;(ee.isData3DTexture||ee.isDataArrayTexture||ee.isCompressedArrayTexture)&&(ut=!0);let ae=se.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(ae[ie])?me=ae[ie][Ae]:me=ae[ie],ye=!0):I.samples>0&&fe.useMultisampledRTT(I)===!1?me=se.get(I).__webglMultisampledFramebuffer:Array.isArray(ae)?me=ae[Ae]:me=ae,Y.copy(I.viewport),he.copy(I.scissor),we=I.scissorTest}else Y.copy(Ue).multiplyScalar(de).floor(),he.copy($).multiplyScalar(de).floor(),we=Be;if(Ae!==0&&(me=L),E.bindFramebuffer(q.FRAMEBUFFER,me)&&E.drawBuffers(I,me),E.viewport(Y),E.scissor(he),E.setScissorTest(we),ye){let X=se.get(I.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+ie,X.__webglTexture,Ae)}else if(ut){let X=ie;for(let ee=0;ee<I.textures.length;ee++){let ae=se.get(I.textures[ee]);q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0+ee,ae.__webglTexture,Ae,X)}}else if(I!==null&&Ae!==0){let X=se.get(I.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,X.__webglTexture,Ae)}G=-1};function Ji(I){let ie=se.get(I);return(ie.__readFormat!==I.format||ie.__readType!==I.type)&&(ie.__readFormat=I.format,ie.__readType=I.type,ie.__formatReadable=O.textureFormatReadable(I.format),ie.__typeReadable=O.textureTypeReadable(I.type)),ie}this.readRenderTargetPixels=function(I,ie,Ae,me,ye,ut,yt,X=0){if(!(I&&I.isWebGLRenderTarget)){Ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ee=se.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&yt!==void 0&&(ee=ee[yt]),ee){E.bindFramebuffer(q.FRAMEBUFFER,ee);try{let ae=I.textures[X],Fe=ae.format,Me=ae.type;I.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+X);let Ee=Ji(ae);if(Ee.__formatReadable===!1){Ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ee.__typeReadable===!1){Ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ie>=0&&ie<=I.width-me&&Ae>=0&&Ae<=I.height-ye&&q.readPixels(ie,Ae,me,ye,Ne.convert(Fe),Ne.convert(Me),ut)}finally{let ae=W!==null?se.get(W).__webglFramebuffer:null;E.bindFramebuffer(q.FRAMEBUFFER,ae)}}},this.readRenderTargetPixelsAsync=async function(I,ie,Ae,me,ye,ut,yt,X=0){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ee=se.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&yt!==void 0&&(ee=ee[yt]),ee)if(ie>=0&&ie<=I.width-me&&Ae>=0&&Ae<=I.height-ye){E.bindFramebuffer(q.FRAMEBUFFER,ee);let ae=I.textures[X],Fe=ae.format,Me=ae.type;I.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+X);let Ee=Ji(ae);if(Ee.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ee.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let We=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,We),q.bufferData(q.PIXEL_PACK_BUFFER,ut.byteLength,q.STREAM_READ),q.readPixels(ie,Ae,me,ye,Ne.convert(Fe),Ne.convert(Me),0),q.bindBuffer(q.PIXEL_PACK_BUFFER,null);let Qe=W!==null?se.get(W).__webglFramebuffer:null;E.bindFramebuffer(q.FRAMEBUFFER,Qe);let st=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await y0(q,st,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,We),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,ut),q.bindBuffer(q.PIXEL_PACK_BUFFER,null),q.deleteBuffer(We),q.deleteSync(st),ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(I,ie=null,Ae=0){let me=Math.pow(2,-Ae),ye=Math.floor(I.image.width*me),ut=Math.floor(I.image.height*me),yt=ie!==null?ie.x:0,X=ie!==null?ie.y:0;fe.setTexture2D(I,0),q.copyTexSubImage2D(q.TEXTURE_2D,Ae,0,0,yt,X,ye,ut),E.unbindTexture()},this.copyTextureToTexture=function(I,ie,Ae=null,me=null,ye=0,ut=0){let yt,X,ee,ae,Fe,Me,Ee,We,Qe,st=I.isCompressedTexture?I.mipmaps[ut]:I.image;if(Ae!==null)yt=Ae.max.x-Ae.min.x,X=Ae.max.y-Ae.min.y,ee=Ae.isBox3?Ae.max.z-Ae.min.z:1,ae=Ae.min.x,Fe=Ae.min.y,Me=Ae.isBox3?Ae.min.z:0;else{let $t=Math.pow(2,-ye);yt=Math.floor(st.width*$t),X=Math.floor(st.height*$t),I.isDataArrayTexture?ee=st.depth:I.isData3DTexture?ee=Math.floor(st.depth*$t):ee=1,ae=0,Fe=0,Me=0}me!==null?(Ee=me.x,We=me.y,Qe=me.z):(Ee=0,We=0,Qe=0);let mt=Ne.convert(ie.format),Ze=Ne.convert(ie.type),_e;ie.isData3DTexture?(fe.setTexture3D(ie,0),_e=q.TEXTURE_3D):ie.isDataArrayTexture||ie.isCompressedArrayTexture?(fe.setTexture2DArray(ie,0),_e=q.TEXTURE_2D_ARRAY):(fe.setTexture2D(ie,0),_e=q.TEXTURE_2D),E.activeTexture(q.TEXTURE0),E.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,ie.flipY),E.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ie.premultiplyAlpha),E.pixelStorei(q.UNPACK_ALIGNMENT,ie.unpackAlignment);let bt=E.getParameter(q.UNPACK_ROW_LENGTH),ht=E.getParameter(q.UNPACK_IMAGE_HEIGHT),Nt=E.getParameter(q.UNPACK_SKIP_PIXELS),Kt=E.getParameter(q.UNPACK_SKIP_ROWS),nn=E.getParameter(q.UNPACK_SKIP_IMAGES);E.pixelStorei(q.UNPACK_ROW_LENGTH,st.width),E.pixelStorei(q.UNPACK_IMAGE_HEIGHT,st.height),E.pixelStorei(q.UNPACK_SKIP_PIXELS,ae),E.pixelStorei(q.UNPACK_SKIP_ROWS,Fe),E.pixelStorei(q.UNPACK_SKIP_IMAGES,Me);let hn=I.isDataArrayTexture||I.isData3DTexture,At=ie.isDataArrayTexture||ie.isData3DTexture;if(I.isDepthTexture){let $t=se.get(I),It=se.get(ie),Tt=se.get($t.__renderTarget),Fn=se.get(It.__renderTarget);E.bindFramebuffer(q.READ_FRAMEBUFFER,Tt.__webglFramebuffer),E.bindFramebuffer(q.DRAW_FRAMEBUFFER,Fn.__webglFramebuffer);for(let Hn=0;Hn<ee;Hn++)hn&&(q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,se.get(I).__webglTexture,ye,Me+Hn),q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,se.get(ie).__webglTexture,ut,Qe+Hn)),q.blitFramebuffer(ae,Fe,yt,X,Ee,We,yt,X,q.DEPTH_BUFFER_BIT,q.NEAREST);E.bindFramebuffer(q.READ_FRAMEBUFFER,null),E.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else if(ye!==0||I.isRenderTargetTexture||se.has(I)){let $t=se.get(I),It=se.get(ie);E.bindFramebuffer(q.READ_FRAMEBUFFER,P),E.bindFramebuffer(q.DRAW_FRAMEBUFFER,H);for(let Tt=0;Tt<ee;Tt++)hn?q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,$t.__webglTexture,ye,Me+Tt):q.framebufferTexture2D(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,$t.__webglTexture,ye),At?q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,It.__webglTexture,ut,Qe+Tt):q.framebufferTexture2D(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,It.__webglTexture,ut),ye!==0?q.blitFramebuffer(ae,Fe,yt,X,Ee,We,yt,X,q.COLOR_BUFFER_BIT,q.NEAREST):At?q.copyTexSubImage3D(_e,ut,Ee,We,Qe+Tt,ae,Fe,yt,X):q.copyTexSubImage2D(_e,ut,Ee,We,ae,Fe,yt,X);E.bindFramebuffer(q.READ_FRAMEBUFFER,null),E.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else At?I.isDataTexture||I.isData3DTexture?q.texSubImage3D(_e,ut,Ee,We,Qe,yt,X,ee,mt,Ze,st.data):ie.isCompressedArrayTexture?q.compressedTexSubImage3D(_e,ut,Ee,We,Qe,yt,X,ee,mt,st.data):q.texSubImage3D(_e,ut,Ee,We,Qe,yt,X,ee,mt,Ze,st):I.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,ut,Ee,We,yt,X,mt,Ze,st.data):I.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,ut,Ee,We,st.width,st.height,mt,st.data):q.texSubImage2D(q.TEXTURE_2D,ut,Ee,We,yt,X,mt,Ze,st);E.pixelStorei(q.UNPACK_ROW_LENGTH,bt),E.pixelStorei(q.UNPACK_IMAGE_HEIGHT,ht),E.pixelStorei(q.UNPACK_SKIP_PIXELS,Nt),E.pixelStorei(q.UNPACK_SKIP_ROWS,Kt),E.pixelStorei(q.UNPACK_SKIP_IMAGES,nn),ut===0&&ie.generateMipmaps&&q.generateMipmap(_e),E.unbindTexture()},this.initRenderTarget=function(I){se.get(I).__webglFramebuffer===void 0&&fe.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?fe.setTextureCube(I,0):I.isData3DTexture?fe.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?fe.setTexture2DArray(I,0):fe.setTexture2D(I,0),E.unbindTexture()},this.resetState=function(){Z=0,V=0,W=null,E.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ls}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=dn._getDrawingBufferColorSpace(e),t.unpackColorSpace=dn._getUnpackColorSpace()}};var Pt=(i,e,t)=>Math.min(t,Math.max(e,i)),$e=(i,e,t)=>i+(e-i)*t,Et=(i,e,t)=>{let n=Pt((t-i)/(e-i),0,1);return n*n*(3-2*n)};function ti(i){let e=i>>>0;return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function hi(i,e,t=0){let n=Math.imul(i|0,374761393)+Math.imul(e|0,668265263)+Math.imul(t|0,2147483647);return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}function K2(i,e,t=1024,n=1024,s=0){let r=Math.floor(i),a=Math.floor(e),o=i-r,c=e-a,l=o*o*(3-2*o),h=c*c*(3-2*c),p=g=>(g%t+t)%t,d=g=>(g%n+n)%n,u=hi(p(r),d(a),s),f=hi(p(r+1),d(a),s),v=hi(p(r),d(a+1),s),m=hi(p(r+1),d(a+1),s);return $e($e(u,f,l),$e(v,m,l),h)}function Tn(i,e,t=4,n=1024,s=1024,r=0){let a=.5,o=1,c=0,l=0;for(let h=0;h<t;h++)c+=a*K2(i*o,e*o,n*o,s*o,r+h*17),l+=a,a*=.5,o*=2;return c/l}var ip=()=>window.innerWidth<760||/Android|iPhone|iPad|iPod/i.test(navigator.userAgent);function ia(i,e={}){let t=i.attributes.position,n=i.attributes.normal,s=i.attributes.uv,r=e.ox||0,a=e.oy||0,o=e.oz||0;for(let c=0;c<t.count;c++){let l=n.getX(c),h=n.getY(c),p=n.getZ(c),d=t.getX(c)+r,u=t.getY(c)+a,f=t.getZ(c)+o,v,m;Math.abs(p)>.5?(v=p>0?d:-d,m=u):Math.abs(l)>.5?(v=l>0?-f:f,m=u):(e.swap?(v=f,m=d):(v=d,m=f),h<0&&(m=-m)),s.setXY(c,v,m)}s.needsUpdate=!0}var sp=4,Od=1,rp=i=>{sp=Math.min(8,i)},ap=i=>{Od=i>=2?1:.5},Wu=()=>Od;function Fd(i,e,t){let n=new ps(i,e,e,Ei,li);return n.wrapS=n.wrapT=Gn,n.magFilter=ei,n.minFilter=Ks,n.generateMipmaps=!0,n.colorSpace=t?fn:Us,n.anisotropy=sp,n.needsUpdate=!0,n}function hr(i,e,t,n){i=Math.max(128,Math.round(i*Od));let s=i*i,r=new Uint8Array(s*4),a=new Uint8Array(s*4),o=new Uint8Array(s*4),c=new Float32Array(s);for(let u=0;u<i;u++)for(let f=0;f<i;f++){let v=u*i+f,m=n((f+.5)/i,(u+.5)/i);r[v*4]=Pt(m[0],0,1)*255,r[v*4+1]=Pt(m[1],0,1)*255,r[v*4+2]=Pt(m[2],0,1)*255,r[v*4+3]=255,c[v]=m[3],a[v*4]=255,a[v*4+1]=Pt(m[4],0,1)*255,a[v*4+2]=Pt(m[5]||0,0,1)*255,a[v*4+3]=255}let l=e/i;for(let u=0;u<i;u++)for(let f=0;f<i;f++){let v=u*i+f,m=(c[u*i+(f+1)%i]-c[u*i+(f-1+i)%i])*t/(2*l),g=(c[(u+1)%i*i+f]-c[(u-1+i)%i*i+f])*t/(2*l),M=Math.hypot(m,g,1);o[v*4]=(-m/M*.5+.5)*255,o[v*4+1]=(-g/M*.5+.5)*255,o[v*4+2]=(1/M*.5+.5)*255,o[v*4+3]=255}let h=Fd(r,i,!0),p=Fd(o,i,!1),d=Fd(a,i,!1);return[h,p,d].forEach(u=>u.repeat.set(1/e,1/e)),{map:h,normalMap:p,rmMap:d,tile:e}}var xl=(i,e)=>[i[0]*e,i[1]*e,i[2]*e];function op(i=[.2,.22,.25]){return hr(512,.6,.02,(e,t)=>{let n=t*3,s=Math.floor(n),r=n-s,a=Tn(e*5+s*3.1,r*22,3,5,22,s),o,c=1;r>.94?(o=0,c=.45):o=.28+.72*Math.pow(1-r/.94,1.4);let l=(.9+.2*hi(s,3,5))*(.9+.2*a)*c;return[...xl(i,l),o+(a-.5)*.08,.72+.2*a,0]})}function lp(i=[.13,.145,.16]){return hr(512,1.2,.025,(e,t)=>{let n=e*4,s=Math.floor(n),r=n-s,a=Math.min(r,1-r)*.3,o=Tn(s*5.1+r*3,t*7,3,20,7,s),c=.4+(o-.5)*.1,l=1;a<.026?c=1:a<.05&&(c=0,l=.5);let h=(.92+.16*hi(s,1,9))*(.9+.2*o)*l;return[...xl(i,h),c,.7+.2*o,0]})}function cp(i=[.1,.105,.115]){return hr(512,.9,.018,(e,t)=>{let n=e*2%1,s=Math.min(n,1-n)*.45,r=s<.028?Math.pow(1-s/.028,.7):0,a=(Tn(e*3,t*3,3,3,3,4)-.5)*.1,o=.34+.12*Tn(e*8,t*40,2,8,40,2);return[...xl(i,1+(Tn(e*2,t*6,2,2,6,11)-.5)*.25+r*.35),.1+r+a,o,.8]})}function Xu(i=[.66,.43,.26],e=[.4,.24,.13]){return hr(512,.6,.01,(t,n)=>{let s=Tn(t*3,n*1.2,3,3,2,21)*3,r=.5+.5*Math.sin((t*10+s)*Math.PI*2/1),a=Tn(t*18,n*2.4,3,18,2,33),o=Pt(.25+r*.35+a*.5,0,1),c=t*6%1,l=c<.012||c>.988?.45:1;return[$e(e[0],i[0],o)*l,$e(e[1],i[1],o)*l,$e(e[2],i[2],o)*l,.55+a*.3-(l<1?.5:0),.55+.15*a,0]})}function up(i=[.56,.55,.53]){return hr(512,1.2,.012,(e,t)=>{let n=t*8,s=Math.floor(n),r=n-s,a=hi(s,7,2)*40,o=Tn(e*4+a,r*10,3,4,10,s),c=hi(Math.floor(e*512),Math.floor(t*512),3)>.985?.6:1,l=r<.04?.7:1,h=(.9+.2*o)*c*l*(.94+.12*hi(s,4,1));return[...xl(i,h),.5+(o-.5)*.4-(r<.04?.3:0),.92,0]})}function hp(){return hr(512,1,.045,(i,e)=>{let t=i*5,n=e*4,s=Math.floor(t),r=Math.floor(n),a=9,o=9,c=0;for(let m=-1;m<=1;m++)for(let g=-1;g<=1;g++){let M=s+g,S=r+m,y=(M%5+5)%5,_=(S%4+4)%4,T=M+.15+hi(y,_,1)*.7,A=S+.15+hi(y,_,2)*.7,x=Math.hypot((t-T)*1,(n-A)*1.25);x<a?(o=a,a=x,c=y*31+_):x<o&&(o=x)}let l=o-a,h=Et(.04,.3,l),p=hi(c,5,3),d=.4+p*.2,u=hi(c,9,1)*.06,f=.9+.2*Tn(i*12,e*12,3,12,12,c),v=h>.02?1:.35;return[(d+u)*f*v,(d+u*.6)*f*v,(d-.02)*f*v,h*(.7+.3*p),.88,0]})}function dp(){return hr(512,5,.06,(i,e)=>{let t=Tn(i*5,e*5,4,5,5,71),n=Tn(i*60,e*60,2,60,60,72),s=hi(Math.floor(i*512),Math.floor(e*512),8)>.988,r=.93+.07*t;return[.9*r,.94*r,1*r,t*.8+n*.2,s?.12:.78+n*.15,0]})}function fp(i=[.13,.135,.145]){return hr(256,3,.01,(e,t)=>{let n=hi(Math.floor(e*256),Math.floor(t*256),12),s=Tn(e*6,t*6,3,6,6,9),r=.8+.5*n*n+.25*s;return[...xl(i,r),n*.5+s*.3,.88-n*.1,0]})}function pp(){return hr(512,4,.05,(i,e)=>{let t=Tn(i*70,e*70,2,70,70,3),n=Tn(i*4,e*4,4,4,4,5),s=Tn(i*9,e*9,3,9,9,6),r=.75+.5*t;return[$e(.22,.4,s)*r+n*.05,$e(.3,.4,s)*r*(.85+.3*n),$e(.1,.16,s)*r,t,.92,0]})}function mp(i,e){let t=new Uint8Array(i*i*4);for(let s=0;s<i;s++)for(let r=0;r<i;r++){let a=(r+.5)/i,o=(s+.5)/i,c=.45+.55*Tn(a*6,o*4,4,1024,1024,41);c=Et(.2,.95,c),c*=.35+.65*Et(0,.18,Math.min(a,1-a,o,1-o)+.04*Tn(a*30,o*30,2,1024,1024,5)),e&&(c*=e(a,o));let l=(s*i+r)*4;t[l]=255,t[l+1]=Pt(c,0,1)*255,t[l+2]=255,t[l+3]=255}let n=new ps(t,i,i,Ei,li);return n.magFilter=n.minFilter=ei,n.generateMipmaps=!1,n.needsUpdate=!0,n}function gp(i="living"){let e=document.createElement("canvas");e.width=160,e.height=160;let t=e.getContext("2d"),n={living:["#6b4426","#d99a55","#f5c27c"],kitchen:["#7a5a3a","#e6b673","#fff0cf"],bed:["#4a3a52","#c78b7a","#f1c6a0"],bath:["#4f6670","#a9c7cf","#eaf6f4"],hall:["#5a4128","#c58c52","#efba78"]}[i]||["#6b4426","#d99a55","#f5c27c"],s=t.createLinearGradient(0,0,0,160);s.addColorStop(0,n[0]),s.addColorStop(.55,n[1]),s.addColorStop(1,n[2]),t.fillStyle=s,t.fillRect(0,0,160,160);let r=i==="kitchen"?80:40+Math.random()*80,a=t.createRadialGradient(r,52,2,r,52,70);if(a.addColorStop(0,"rgba(255,246,214,.95)"),a.addColorStop(1,"rgba(255,220,150,0)"),t.fillStyle=a,t.fillRect(0,0,160,160),t.fillStyle="rgba(30,18,10,.55)",i==="living"&&(t.fillRect(14,108,92,52),t.fillRect(14,88,92,22),t.fillRect(112,70,6,90)),i==="kitchen"){t.fillRect(0,100,160,60),t.fillStyle="rgba(30,18,10,.4)";for(let l=0;l<4;l++)t.fillRect(8+l*38,20,30,40)}i==="bed"&&(t.fillRect(20,96,120,64),t.fillRect(20,70,14,40)),i==="bath"&&(t.fillStyle="rgba(20,40,48,.35)",t.fillRect(0,112,160,48),t.fillRect(104,40,40,36)),i==="hall"&&(t.fillRect(0,128,160,32),t.fillRect(70,30,36,90));let o=t.createLinearGradient(0,0,40,0);o.addColorStop(0,"rgba(40,24,16,.7)"),o.addColorStop(1,"rgba(40,24,16,0)"),t.fillStyle=o,t.fillRect(0,0,40,160),t.save(),t.translate(160,0),t.scale(-1,1),t.fillStyle=o,t.fillRect(0,0,40,160),t.restore();let c=new Dn(e);return c.colorSpace=fn,c}function to(i="rgba(255,190,120,0.9)",e="rgba(255,150,80,0)"){let t=document.createElement("canvas");t.width=t.height=128;let n=t.getContext("2d"),s=n.createRadialGradient(64,64,0,64,64,64);s.addColorStop(0,i),s.addColorStop(.35,i.replace(/[\d.]+\)$/,"0.35)")),s.addColorStop(1,e),n.fillStyle=s,n.fillRect(0,0,128,128);let r=new Dn(t);return r.colorSpace=fn,r}function xp(){let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d"),t=e.createRadialGradient(64,64,20,64,64,64);t.addColorStop(0,"rgba(244,189,126,0.55)"),t.addColorStop(1,"rgba(244,189,126,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),e.beginPath(),e.arc(64,64,30,0,Math.PI*2),e.fillStyle="#d98a4e",e.fill(),e.lineWidth=3,e.strokeStyle="#f4bd7e",e.stroke(),e.beginPath(),e.moveTo(49,79),e.lineTo(64,49),e.lineTo(79,79),e.lineWidth=6.5,e.strokeStyle="#121311",e.lineJoin="miter",e.stroke(),e.fillStyle="#121311",e.fillRect(60.5,64.5,7,7);let n=new Dn(i);return n.colorSpace=fn,n}function dr(i="rgba(255,255,255,0.6)"){let e=document.createElement("canvas");e.width=e.height=64;let t=e.getContext("2d"),n=t.createRadialGradient(32,32,0,32,32,32);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.25,i),n.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=n,t.fillRect(0,0,64,64);let s=new Dn(e);return s.colorSpace=fn,s}function vp(){let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d");for(let n=0;n<9;n++){let s=64+(hi(n,1,3)-.5)*40,r=64+(hi(n,2,3)-.5)*40,a=22+hi(n,3,3)*22,o=e.createRadialGradient(s,r,0,s,r,a);o.addColorStop(0,"rgba(255,255,255,0.28)"),o.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=o,e.fillRect(0,0,128,128)}let t=new Dn(i);return t.colorSpace=fn,t}function yp(){let i={lap:op([.3,.33,.37]),bb:lp([.2,.22,.25]),seam:cp([.1,.105,.115]),cedar:Xu(),walnut:Xu([.46,.29,.17],[.25,.15,.09]),oak:Xu([.8,.64,.44],[.56,.4,.25]),form:up(),stone:hp(),snow:dp(),asphalt:fp(),grass:pp()},e=(a,o={})=>new rn({map:a.map,normalMap:a.normalMap,roughnessMap:a.rmMap,metalnessMap:a.rmMap,roughness:1,metalness:1,...o}),t=(a,o=.8,c=0,l={})=>new rn({color:a,roughness:o,metalness:c,...l}),n=(a,o)=>(a.userData.shell=!0,a.userData.th=o,a),s=(a,o)=>(a.userData.th=o,a),r={lap:n(e(i.lap,{normalScale:new He(1,1)}),[.3,.05,.3]),bb:n(e(i.bb,{normalScale:new He(1,1)}),[.3,.05,.3]),roof:n(e(i.seam,{normalScale:new He(1.2,1.2),envMapIntensity:1.3}),[.4,.12]),cedar:n(e(i.cedar),[.42,0,.25]),walnut:n(e(i.walnut),[.52]),oak:n(e(i.oak),[.55]),form:n(e(i.form),[.33]),stone:n(e(i.stone),[.33]),drywall:n(t(14209475,.95),[.6]),trim:n(t(855568,.42,.55,{envMapIntensity:1.2}),[.32,0,.2]),reveal:n(t(14275785,.85),[.45]),slab:n(t(7828331,1),[.35]),concrete:n(t(7301987,1),[.33]),floor:n(t(10518364,.7),[.55]),door:n(e(i.walnut),[.52]),insul:n(t(13087881,1),[.5]),counter:n(t(2959910,.5,.05),[.55]),snowRoof:n(t(15265527,.85,0,{alphaToCoverage:!0}),[.03]),ice:s(new Yi({color:13625845,roughness:.08,metalness:0,transparent:!0,opacity:.85,clearcoat:1,envMapIntensity:1.6}),[.1]),white:s(t(14605267,.5,.05),[.6]),steel:s(t(10133670,.35,.85),[.55]),pvc:s(t(15131612,.4),[.24]),pipe:s(t(6255750,.5,.4),[.45]),copper:s(t(14256718,.28,.9,{envMapIntensity:1.4}),[.68]),solar:s(new Yi({color:726832,roughness:.16,metalness:.7,clearcoat:1,clearcoatRoughness:.06,envMapIntensity:1.5}),[.17]),solarFrame:s(t(11186616,.4,.9),[.3]),neighbor:s(e(i.lap,{color:9080210}),[.26,.04,.24]),neighborRoof:s(e(i.seam,{color:6711920}),[.4,.12]),asphalt:s(e(i.asphalt),[.3]),pavement:s(t(9144706,.95),[.3]),sconce:s(new rn({color:1709070,emissive:16756833,emissiveIntensity:3,roughness:.4}),[.9]),lampHead:s(new rn({color:2236962,emissive:16761466,emissiveIntensity:4,roughness:.4}),[.95]),pole:s(t(1776928,.5,.7),[.3]),spruce:s(new rn({vertexColors:!0,roughness:.92,metalness:0}),[.13]),trunk:s(t(2760471,1),[.18]),shrub:s(new rn({vertexColors:!0,roughness:1}),[.14]),fabric:s(t(6970708,.95),[.5]),fabric2:s(t(4016726,.95),[.5]),leather:s(t(8014634,.55),[.5]),ceramic:s(t(15921129,.18,0),[.45]),mirror:s(t(12570840,.05,.9),[.4]),black:s(t(1381653,.5,.3),[.4]),warmLight:s(new rn({color:2236440,emissive:16767392,emissiveIntensity:5,roughness:.6}),[1])};return["lap","bb","roof","drywall","form","stone","trim","cedar","door","walnut","reveal","snowRoof"].forEach(a=>{r[a].userData.wall=!0}),Object.values(r).forEach(a=>{a.userData.th===void 0&&(a.userData.th=[.3])}),{M:r,T:i}}function Bd(i){let e=new rn({color:395533,roughness:.05,metalness:.25,emissive:16777215,emissiveMap:i,emissiveIntensity:0,envMapIntensity:1.6});return e.userData.shell=!0,e.userData.pane=!0,e.userData.wall=!0,e.userData.th=[.86],e}var Yu=[[-90,"#04060d","#0c1124"],[-20,"#05070f","#10162b"],[-14,"#080d20","#1a2140"],[-9,"#0f1838","#33406a"],[-5,"#1a2650","#7a6f94"],[-2,"#27345e","#d98d62"],[1,"#35508a","#eba66f"],[5,"#43689f","#e8bf8f"],[12,"#4a78b0","#dccfb4"],[25,"#4a80ba","#c7dcec"],[50,"#3f78b8","#b4d2e8"],[90,"#3a72b0","#accce6"]],Q2=`varying vec3 vDir;
void main(){ vDir = normalize(position); vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_Position = p.xyww; }`,j2=`precision highp float;
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
}`;function _p(i,e){let t={uTop:{value:new it},uHor:{value:new it},uLow:{value:new it},uSunDir:{value:new N(0,1,0)},uSunCol:{value:new it(1,.8,.6)},uMoonDir:{value:new N(.3,.55,-.78).normalize()},uSunI:{value:0},uMoonI:{value:0},uTime:{value:0},uCloud:{value:.4},uAurora:{value:0},uThermal:{value:0},uSnowLine:{value:0}},n=new mn({uniforms:t,vertexShader:Q2,fragmentShader:j2,side:vi,depthWrite:!1,depthTest:!1}),s=new De(new Ln(500,48,28),n);s.renderOrder=-10,s.frustumCulled=!1,s.userData.noThermal=!0,s.userData.noAO=!0,e.add(s);let r=ti(7),a=1500,o=new Float32Array(a*3);for(let _=0;_<a;_++){let T=r()*Math.PI*2,A=Math.acos(1-r()*1),x=480;o[_*3]=Math.sin(A)*Math.cos(T)*x,o[_*3+1]=Math.cos(A)*x,o[_*3+2]=Math.sin(A)*Math.sin(T)*x}let c=new kt;c.setAttribute("position",new Ot(o,3));let l=new ai({color:14674175,size:1.7,sizeAttenuation:!1,transparent:!0,opacity:0,fog:!1,depthWrite:!1}),h=new xi(c,l);h.frustumCulled=!1,h.renderOrder=-9,h.userData.noAO=!0,e.add(h);function p(_,T,A){let x=document.createElement("canvas");x.width=4096,x.height=256;let w=x.getContext("2d"),C=ti(_);w.filter="blur(1.4px)";let F=Array.from({length:8},()=>C()*6.28);w.clearRect(0,0,2048,256),w.beginPath(),w.moveTo(0,256);let b=[3,7,15,31,63],L=[.5,.28,.15,.08*A,.045*A];for(let Z=0;Z<=4096;Z+=2){let V=Z/4096*Math.PI*2,W=0;for(let G=0;G<5;G++)W+=L[G]*Math.pow(1-Math.abs(Math.sin(V*b[G]+F[G])),1.6);w.lineTo(Z,256-Pt(W/1.06,0,1)*T)}w.lineTo(4096,256),w.closePath();let P=w.createLinearGradient(0,256-T,0,256);P.addColorStop(0,"rgba(255,255,255,1)"),P.addColorStop(.3,"rgba(232,236,248,1)"),P.addColorStop(.62,"rgba(120,132,160,1)"),P.addColorStop(1,"rgba(66,74,96,0)"),w.fillStyle=P,w.fill();let H=new Dn(x);return H.colorSpace=fn,H.wrapS=Gn,H.anisotropy=4,H}function d(_){let T=document.createElement("canvas");T.width=2048,T.height=128;let A=T.getContext("2d"),x=ti(_);A.clearRect(0,0,2048,128),A.fillStyle="rgba(255,255,255,1)";for(let C=0;C<2048;C+=3){let F=34+x()*40+Math.sin(C*.01)*10,b=6+x()*7;A.beginPath(),A.moveTo(C-b,128),A.lineTo(C,128-F),A.lineTo(C+b,128),A.fill()}A.fillRect(0,100,2048,28);let w=new Dn(T);return w.colorSpace=fn,w.wrapS=Gn,w}let u=[{tex:p(3,220,1),R:450,h:190,y:40,k:.8,mix:.86},{tex:p(11,170,.8),R:360,h:120,y:16,k:.55,mix:.68},{tex:d(5),R:300,h:34,y:8,k:.22,mix:.2}].map(_=>{let T=new yn({map:_.tex,transparent:!0,side:vi,depthWrite:!1,fog:!1,color:4478327}),A=new De(new jt(_.R,_.R,_.h,96,1,!0),T);return A.position.y=_.y,A.renderOrder=-8,A.frustumCulled=!1,A.userData.noThermal=!0,A.userData.noAO=!0,e.add(A),{..._,mat:T,mesh:A}}),f=new ja(i),v=new Xr,m=new De(new Ln(50,32,16),n.clone());m.material.uniforms=t,m.material.depthTest=!0,v.add(m);let g=null,M="",S=new it,y=new it;return{dome:s,mat:n,U:t,stars:h,horizon:new it,zenith:new it,update(_,T){let A=Pt(_.elev,-90,90),x=0;for(;x<Yu.length-2&&Yu[x+1][0]<=A;)x++;let[w,C,F]=Yu[x],[b,L,P]=Yu[x+1],H=Et(0,1,(A-w)/(b-w));t.uTop.value.copy(S.set(C)).lerp(y.set(L),H),t.uHor.value.copy(S.set(F)).lerp(y.set(P),H),_.seasonTint&&(t.uTop.value.lerp(_.seasonTint.top,_.seasonTint.k),t.uHor.value.lerp(_.seasonTint.hor,_.seasonTint.k)),t.uLow.value.copy(t.uHor.value).multiplyScalar(.55+.25*_.daylight).lerp(S.set(_.snowy?7174806:2764834),.18+.2*_.daylight),t.uLow.value.multiplyScalar(1-.82*(_.voidK||0)),t.uSunDir.value.copy(_.sunDir);let Z=1-Et(0,.5,_.sunDir.y);t.uSunCol.value.setRGB(1,$e(.93,.56,Z),$e(.84,.32,Z)),t.uSunI.value=Et(-.14,.04,_.sunDir.y)*$e(1,1.4,Z),t.uMoonI.value=(1-_.daylight)*.9,t.uTime.value=T,t.uCloud.value=_.cloud??.4,t.uAurora.value=_.aurora||0,t.uThermal.value=_.thermal||0,this.horizon.copy(t.uHor.value),this.zenith.copy(t.uTop.value),l.opacity=Pt((1-_.daylight*1.2)*.95,0,1)*(1-(_.thermal||0)),u.forEach(V=>{V.mat.color.copy(t.uHor.value).lerp(t.uTop.value,.12).multiplyScalar(V.k*(.55+.7*_.daylight)).lerp(S.set(16777215),0).multiplyScalar(1),V.mat.color.lerp(t.uHor.value,1-V.mix),V.mat.color.lerp(y.set(2101306),(_.thermal||0)*.9)})},follow(_){s.position.copy(_),h.position.copy(_),u.forEach(T=>{T.mesh.position.x=_.x,T.mesh.position.z=_.z})},refreshEnv(_){let T=[t.uTop.value.getHexString(),t.uHor.value.getHexString(),t.uSunI.value.toFixed(2),t.uAurora.value.toFixed(1),t.uThermal.value.toFixed(1),t.uSunDir.value.x.toFixed(2),t.uSunDir.value.y.toFixed(2)].join("|");if(!_&&T===M)return;M=T;let A=g;g=f.fromScene(v,.015,.1,200,{size:128}),e.environment=g.texture,A&&A.dispose()}}}var tr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var _i=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},ey=new Pr(-1,1,1,-1,0,1),Hd=class extends kt{constructor(){super(),this.setAttribute("position",new Dt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Dt([0,2,0,0,2,0],2))}},ty=new Hd,ys=class{constructor(e){this._mesh=new De(ty,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,ey)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var no=class extends _i{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof mn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Vi.clone(e.uniforms),this.material=new mn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new ys(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var vl=class extends _i{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},qu=class extends _i{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Zu=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new He);this._width=n.width,this._height=n.height,t=new Cn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Vn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new no(tr),this.copyPass.material.blending=Jn,this.timer=new $o}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}vl!==void 0&&(a instanceof vl?n=!0:a instanceof qu&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new He);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var $u=class extends _i{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new it}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var Mp={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new it(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var io=class i extends _i{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new He(e.x,e.y):new He(256,256),this.clearColor=new it(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Cn(r,a,{type:Vn,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let p=new Cn(r,a,{type:Vn,depthBuffer:!1});p.texture.name="UnrealBloomPass.h"+h,p.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(p);let d=new Cn(r,a,{type:Vn,depthBuffer:!1});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}let o=Mp;this.highPassUniforms=Vi.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new mn({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let c=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new He(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Vi.clone(tr.uniforms),this.blendMaterial=new mn({uniforms:this.copyUniforms,vertexShader:tr.vertexShader,fragmentShader:tr.fragmentShader,premultipliedAlpha:!0,blending:_n,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new it,this._oldClearAlpha=1,this._basic=new yn,this._fsQuad=new ys(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new He(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let s=[],r=[];for(let a=1;a<e;a+=2){let o=t[a],c=a+1<e?t[a+1]:0,l=o+c;s.push((a*o+(a+1)*c)/l),r.push(l)}return new mn({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new He(.5,.5)},direction:{value:new He(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new mn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};io.BlurDirectionX=new He(1,0);io.BlurDirectionY=new He(0,1);var yl={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Ju=class extends _i{constructor(){super(),this.isOutputPass=!0,this.uniforms=Vi.clone(yl.uniforms),this.material=new Wa({name:yl.name,uniforms:this.uniforms,vertexShader:yl.vertexShader,fragmentShader:yl.fragmentShader}),this._fsQuad=new ys(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},dn.getTransfer(this._outputColorSpace)===gn&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===jo?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===el?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===tl?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Lr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===il?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===sl?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===nl&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var _l={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new He},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Mt},cameraProjectionMatrixInverse:{value:new Mt},cameraWorldMatrix:{value:new Mt},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new N(-1,-1,-1)},sceneBoxMax:{value:new N(1,1,1)}},vertexShader:`

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
		}`},Ml={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},Ku={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function Ep(i=5){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=ny(e),n=t.length,s=new Uint8Array(n*4);for(let a=0;a<n;++a){let o=t[a],c=2*Math.PI*o/n,l=new N(Math.cos(c),Math.sin(c),0).normalize();s[a*4]=(l.x*.5+.5)*255,s[a*4+1]=(l.y*.5+.5)*255,s[a*4+2]=127,s[a*4+3]=255}let r=new ps(s,e,e);return r.wrapS=Gn,r.wrapT=Gn,r.needsUpdate=!0,r}function ny(i){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let a=1;a<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),n[s*e+r]!==0){r-=2,s++;continue}else n[s*e+r]=a++;r++,s--}return n}var El={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:zd(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new He},cameraProjectionMatrixInverse:{value:new Mt},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function zd(i,e,t){let n=iy(i,e,t),s="vec3[SAMPLES](";for(let r=0;r<i;r++){let a=n[r];s+=`vec3(${a.x}, ${a.y}, ${a.z})${r<i-1?",":")"}`}return s}function iy(i,e,t){let n=[];for(let s=0;s<i;s++){let r=2*Math.PI*e*s/i,a=Math.pow(s/(i-1),t);n.push(new N(Math.cos(r),Math.sin(r),a))}return n}var Qu=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,s,r,a=.5*(Math.sqrt(3)-1),o=(e+t)*a,c=Math.floor(e+o),l=Math.floor(t+o),h=(3-Math.sqrt(3))/6,p=(c+l)*h,d=c-p,u=l-p,f=e-d,v=t-u,m,g;f>v?(m=1,g=0):(m=0,g=1);let M=f-m+h,S=v-g+h,y=f-1+2*h,_=v-1+2*h,T=c&255,A=l&255,x=this.perm[T+this.perm[A]]%12,w=this.perm[T+m+this.perm[A+g]]%12,C=this.perm[T+1+this.perm[A+1]]%12,F=.5-f*f-v*v;F<0?n=0:(F*=F,n=F*F*this._dot(this.grad3[x],f,v));let b=.5-M*M-S*S;b<0?s=0:(b*=b,s=b*b*this._dot(this.grad3[w],M,S));let L=.5-y*y-_*_;return L<0?r=0:(L*=L,r=L*L*this._dot(this.grad3[C],y,_)),70*(n+s+r)}noise3d(e,t,n){let s,r,a,o,l=(e+t+n)*.3333333333333333,h=Math.floor(e+l),p=Math.floor(t+l),d=Math.floor(n+l),u=1/6,f=(h+p+d)*u,v=h-f,m=p-f,g=d-f,M=e-v,S=t-m,y=n-g,_,T,A,x,w,C;M>=S?S>=y?(_=1,T=0,A=0,x=1,w=1,C=0):M>=y?(_=1,T=0,A=0,x=1,w=0,C=1):(_=0,T=0,A=1,x=1,w=0,C=1):S<y?(_=0,T=0,A=1,x=0,w=1,C=1):M<y?(_=0,T=1,A=0,x=0,w=1,C=1):(_=0,T=1,A=0,x=1,w=1,C=0);let F=M-_+u,b=S-T+u,L=y-A+u,P=M-x+2*u,H=S-w+2*u,Z=y-C+2*u,V=M-1+3*u,W=S-1+3*u,G=y-1+3*u,k=h&255,Y=p&255,he=d&255,we=this.perm[k+this.perm[Y+this.perm[he]]]%12,Ie=this.perm[k+_+this.perm[Y+T+this.perm[he+A]]]%12,Xe=this.perm[k+x+this.perm[Y+w+this.perm[he+C]]]%12,rt=this.perm[k+1+this.perm[Y+1+this.perm[he+1]]]%12,Q=.6-M*M-S*S-y*y;Q<0?s=0:(Q*=Q,s=Q*Q*this._dot3(this.grad3[we],M,S,y));let de=.6-F*F-b*b-L*L;de<0?r=0:(de*=de,r=de*de*this._dot3(this.grad3[Ie],F,b,L));let Ce=.6-P*P-H*H-Z*Z;Ce<0?a=0:(Ce*=Ce,a=Ce*Ce*this._dot3(this.grad3[Xe],P,H,Z));let xe=.6-V*V-W*W-G*G;return xe<0?o=0:(xe*=xe,o=xe*xe*this._dot3(this.grad3[rt],V,W,G)),32*(s+r+a+o)}noise4d(e,t,n,s){let r=this.grad4,a=this.simplex,o=this.perm,c=(Math.sqrt(5)-1)/4,l=(5-Math.sqrt(5))/20,h,p,d,u,f,v=(e+t+n+s)*c,m=Math.floor(e+v),g=Math.floor(t+v),M=Math.floor(n+v),S=Math.floor(s+v),y=(m+g+M+S)*l,_=m-y,T=g-y,A=M-y,x=S-y,w=e-_,C=t-T,F=n-A,b=s-x,L=w>C?32:0,P=w>F?16:0,H=C>F?8:0,Z=w>b?4:0,V=C>b?2:0,W=F>b?1:0,G=L+P+H+Z+V+W,k=a[G][0]>=3?1:0,Y=a[G][1]>=3?1:0,he=a[G][2]>=3?1:0,we=a[G][3]>=3?1:0,Ie=a[G][0]>=2?1:0,Xe=a[G][1]>=2?1:0,rt=a[G][2]>=2?1:0,Q=a[G][3]>=2?1:0,de=a[G][0]>=1?1:0,Ce=a[G][1]>=1?1:0,xe=a[G][2]>=1?1:0,Ue=a[G][3]>=1?1:0,$=w-k+l,Be=C-Y+l,te=F-he+l,oe=b-we+l,K=w-Ie+2*l,ne=C-Xe+2*l,ue=F-rt+2*l,Ge=b-Q+2*l,Oe=w-de+3*l,Je=C-Ce+3*l,je=F-xe+3*l,q=b-Ue+3*l,gt=w-1+4*l,dt=C-1+4*l,O=F-1+4*l,E=b-1+4*l,j=m&255,se=g&255,fe=M&255,Ve=S&255,ke=o[j+o[se+o[fe+o[Ve]]]]%32,Te=o[j+k+o[se+Y+o[fe+he+o[Ve+we]]]]%32,ve=o[j+Ie+o[se+Xe+o[fe+rt+o[Ve+Q]]]]%32,Ke=o[j+de+o[se+Ce+o[fe+xe+o[Ve+Ue]]]]%32,xt=o[j+1+o[se+1+o[fe+1+o[Ve+1]]]]%32,D=.6-w*w-C*C-F*F-b*b;D<0?h=0:(D*=D,h=D*D*this._dot4(r[ke],w,C,F,b));let J=.6-$*$-Be*Be-te*te-oe*oe;J<0?p=0:(J*=J,p=J*J*this._dot4(r[Te],$,Be,te,oe));let le=.6-K*K-ne*ne-ue*ue-Ge*Ge;le<0?d=0:(le*=le,d=le*le*this._dot4(r[ve],K,ne,ue,Ge));let ge=.6-Oe*Oe-Je*Je-je*je-q*q;ge<0?u=0:(ge*=ge,u=ge*ge*this._dot4(r[Ke],Oe,Je,je,q));let Le=.6-gt*gt-dt*dt-O*O-E*E;return Le<0?f=0:(Le*=Le,f=Le*Le*this._dot4(r[xt],gt,dt,O,E)),27*(h+p+d+u+f)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}_dot4(e,t,n,s,r){return e[0]*t+e[1]*n+e[2]*s+e[3]*r}};var Sl=class i extends _i{constructor(e,t,n=512,s=512,r,a,o){super(),this.width=n,this.height=s,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Ep(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new Cn(this.width,this.height,{type:Vn,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new mn({defines:Object.assign({},_l.defines),uniforms:Vi.clone(_l.uniforms),vertexShader:_l.vertexShader,fragmentShader:_l.fragmentShader,blending:Jn,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Wo,this.normalMaterial.blending=Jn,this.pdMaterial=new mn({defines:Object.assign({},El.defines),uniforms:Vi.clone(El.uniforms),vertexShader:El.vertexShader,fragmentShader:El.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new mn({defines:Object.assign({},Ml.defines),uniforms:Vi.clone(Ml.uniforms),vertexShader:Ml.vertexShader,fragmentShader:Ml.fragmentShader,blending:Jn}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new mn({uniforms:Vi.clone(tr.uniforms),vertexShader:tr.vertexShader,fragmentShader:tr.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Qo,blendDst:jr,blendEquation:xs,blendSrcAlpha:Ko,blendDstAlpha:jr,blendEquationAlpha:xs}),this.blendMaterial=new mn({uniforms:Vi.clone(Ku.uniforms),vertexShader:Ku.vertexShader,fragmentShader:Ku.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:$c,blendSrc:Qo,blendDst:jr,blendEquation:xs,blendSrcAlpha:Ko,blendDstAlpha:jr,blendEquationAlpha:xs}),this._fsQuad=new ys(null),this._originalClearColor=new it,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new ms,this.depthTexture.format=Qs,this.depthTexture.type=Ur,this.normalRenderTarget=new Cn(this.width,this.height,{minFilter:$n,magFilter:$n,type:Vn,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=zd(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Jn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Jn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Jn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Jn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Jn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,n,s,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_renderOverride(e,t,n,s,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,t.push(n))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new Qu,n=e*e*4,s=new Uint8Array(n);for(let a=0;a<e;a++)for(let o=0;o<e;o++){let c=a,l=o;s[(a*e+o)*4]=(t.noise(c,l)*.5+.5)*255,s[(a*e+o)*4+1]=(t.noise(c+e,l)*.5+.5)*255,s[(a*e+o)*4+2]=(t.noise(c,l+e)*.5+.5)*255,s[(a*e+o)*4+3]=(t.noise(c+e,l+e)*.5+.5)*255}let r=new ps(s,e,e,Ei,li);return r.wrapS=Gn,r.wrapT=Gn,r.needsUpdate=!0,r}};Sl.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var Gd=class extends _i{constructor(e){super(),this.needsSwap=!1,this.holder=e}render(e,t,n){this.holder.value=n.depthTexture}},Sp="varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",bp=`uniform sampler2D tDiffuse; uniform sampler2D tDepth; uniform vec2 uPx; uniform float uNear, uFar, uFocus, uAperture, uMaxBlur; varying vec2 vUv;
    float viewDist(vec2 uv){ float d = texture2D(tDepth, uv).x; return (uNear * uFar) / (uFar - (uFar - uNear) * d); }
    float cocAt(float dist){ return clamp(uAperture * abs(dist - uFocus) / max(dist, 0.001), 0.0, 1.0) * uMaxBlur; }`,sy=`${bp}
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
    }`,ry=`${bp}
    uniform sampler2D tBlur; uniform vec2 uHalfPx;
    void main(){
      vec4 sharp = texture2D(tDiffuse, vUv);
      vec2 o = uHalfPx * 0.5;
      vec4 blur = (texture2D(tBlur, vUv + o) + texture2D(tBlur, vUv - o) + texture2D(tBlur, vUv + vec2(o.x, -o.y)) + texture2D(tBlur, vUv + vec2(-o.x, o.y))) * 0.25;
      float w = max(smoothstep(0.75, 2.5, cocAt(viewDist(vUv))), smoothstep(0.0, 0.2, blur.a));
      gl_FragColor = vec4(mix(sharp.rgb, blur.rgb, w), sharp.a);
    }`,kd=class extends _i{constructor(e,t){super(),this.depthHolder=e,this.shared={tDepth:{value:null},uPx:{value:new He(1/1440,1/900)},uNear:{value:.3},uFar:{value:1400},uFocus:{value:30},uAperture:{value:0},uMaxBlur:{value:12}},this.half=new Cn(720,450,{type:Vn,depthBuffer:!1}),this.gather=new mn({name:"HauseDofGather",defines:{TAPS:t},uniforms:{tDiffuse:{value:null},...this.shared},vertexShader:Sp,fragmentShader:sy,depthTest:!1,depthWrite:!1}),this.composite=new mn({name:"HauseDofComposite",uniforms:{tDiffuse:{value:null},tBlur:{value:this.half.texture},uHalfPx:{value:new He(1/720,1/450)},...this.shared},vertexShader:Sp,fragmentShader:ry,depthTest:!1,depthWrite:!1}),this.quad=new ys(this.gather)}setSize(e,t){let n=Math.max(1,Math.round(e/2)),s=Math.max(1,Math.round(t/2));this.half.setSize(n,s),this.shared.uPx.value.set(1/e,1/t),this.composite.uniforms.uHalfPx.value.set(1/n,1/s),this.shared.uMaxBlur.value=Math.max(6,t*.014)}render(e,t,n){this.shared.tDepth.value=this.depthHolder.value,this.gather.uniforms.tDiffuse.value=n.texture,this.quad.material=this.gather,e.setRenderTarget(this.half),this.quad.render(e),this.composite.uniforms.tDiffuse.value=n.texture,this.quad.material=this.composite,e.setRenderTarget(this.renderToScreen?null:t),this.quad.render(e)}dispose(){this.half.dispose(),this.gather.dispose(),this.composite.dispose(),this.quad.dispose()}},ay={name:"HauseGrade",uniforms:{tDiffuse:{value:null},uTime:{value:0},uVig:{value:.32},uGrain:{value:.03},uCA:{value:.0011},uSat:{value:1.05},uCon:{value:1.05},uThermal:{value:0},uAspect:{value:1.6}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float uTime, uVig, uGrain, uCA, uSat, uCon, uThermal, uAspect; varying vec2 vUv;
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
    }`};function Tp(i,e,t,n,s,r){let a=n>=2?4:n===1?2:0,o=new Cn(s,r,{type:Vn,samples:a,depthTexture:new ms(s,r)}),c=new Zu(i,o);c.setPixelRatio(1),c.addPass(new $u(e,t));let l={value:null};c.addPass(new Gd(l));let h=null,p=null;n>=2&&(h=new Sl(e,t,s,r,void 0,{radius:.9,distanceExponent:1.4,thickness:1.2,scale:1,samples:12,distanceFallOff:1,screenSpaceRadius:!1},{lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,radiusExponent:1,rings:2,samples:12}),h.blendIntensity=.9,h._overrideVisibility=function(){let f=this._visibilityCache;this.scene.traverse(v=>{(v.isPoints||v.isLine||v.isLine2||v.isSprite||v.userData&&v.userData.noAO)&&v.visible&&(v.visible=!1,f.push(v))})},c.addPass(h));let d=null;n>=1&&(d=new kd(l,n>=2?48:20),d.enabled=!1,c.addPass(d),d.setSize(c.readBuffer.width,c.readBuffer.height)),n>=1&&(p=new io(new He(s,r),.55,.62,1),c.addPass(p)),c.addPass(new Ju);let u=new no(ay);return n===0&&(u.uniforms.uCA.value=0,u.uniforms.uGrain.value=.015),c.addPass(u),{composer:c,bloom:p,gtao:h,dof:d,grade:u,tier:n,setDof(f,v,m,g){if(!d)return;d.enabled=f>.01;let M=d.shared;M.uAperture.value=f,M.uFocus.value=v,M.uNear.value=m,M.uFar.value=g},setSize(f,v){c.setSize(f,v),u.uniforms.uAspect.value=f/v},render(f,v){u.uniforms.uTime.value=v%10,c.render(f)},dispose(){c.dispose(),d&&d.dispose(),o.dispose()}}}var bl=new N;function _s(i,e,t,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),c=Math.PI/4;bl.copy(e),bl[n]=0,bl.normalize();let l=.5*a/(a+o),h=1-bl.angleTo(i)/c;return Math.sign(bl[t])===1?h*l:o/(a+o)+l+l*(1-h)}var Ms=class i extends ln{constructor(e=1,t=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let c=new N,l=new N,h=new N(e,t,n).divideScalar(2).subScalar(r),p=this.attributes.position.array,d=this.attributes.normal.array,u=this.attributes.uv.array,f=p.length/6,v=new N,m=.5/a;for(let g=0,M=0;g<p.length;g+=3,M+=2)switch(c.fromArray(p,g),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),p[g+0]=h.x*Math.sign(c.x)+l.x*r,p[g+1]=h.y*Math.sign(c.y)+l.y*r,p[g+2]=h.z*Math.sign(c.z)+l.z*r,d[g+0]=l.x,d[g+1]=l.y,d[g+2]=l.z,Math.floor(g/f)){case 0:v.set(1,0,0),u[M+0]=_s(v,l,"z","y",r,n),u[M+1]=1-_s(v,l,"y","z",r,t);break;case 1:v.set(-1,0,0),u[M+0]=1-_s(v,l,"z","y",r,n),u[M+1]=1-_s(v,l,"y","z",r,t);break;case 2:v.set(0,1,0),u[M+0]=1-_s(v,l,"x","z",r,e),u[M+1]=_s(v,l,"z","x",r,n);break;case 3:v.set(0,-1,0),u[M+0]=1-_s(v,l,"x","z",r,e),u[M+1]=1-_s(v,l,"z","x",r,n);break;case 4:v.set(0,0,1),u[M+0]=1-_s(v,l,"x","y",r,e),u[M+1]=1-_s(v,l,"y","x",r,t);break;case 5:v.set(0,0,-1),u[M+0]=_s(v,l,"x","y",r,e),u[M+1]=1-_s(v,l,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};var Pn=10,qt=8,Es=2.9,Tl=[{key:"roof",dy:9.2},{key:"upper",dy:6.6},{key:"main",dy:4.1},{key:"basement",dy:2},{key:"below",dy:0}],Yt=(i,e,t)=>new N(i,e,t);function wp({M:i,T:e,markTex:t,glowTex:n}){let s=new at,r={};Tl.forEach(b=>{let L=new at;L.userData.level=b.key,r[b.key]=L,s.add(L)});let a={},o=[],c=new Tr({color:11126756,transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1,fog:!1}),l={icicles:null,snowL:null,snowR:null,chimneyTop:new kn,fans:[]},h=ia;function p(b,L,P,H,Z=0,V=0,W=0,G,k={}){let Y=new ln(b,L,P);h(Y,k.uv||{});let he=new De(Y,H);if(he.position.set(Z,V,W),he.castShadow=k.cast!==!1,he.receiveShadow=k.receive!==!1,k.edges){let we=new $s(new Ha(Y,30),c);we.raycast=()=>{},he.add(we)}return G&&G.add(he),he}function d(b,L,P,H,Z,V=0,W=0,G=0,k,Y={}){let he=new Ms(b,L,P,Y.seg||2,H),we=new De(he,Z);return we.position.set(V,W,G),we.castShadow=Y.cast!==!1,we.receiveShadow=!0,k&&k.add(we),we}function u(b,L,P,H,Z,V,W,G=18){let k=new De(new jt(b,b,L,G),P);return k.position.set(H,Z,V),k.castShadow=!0,k.receiveShadow=!0,W&&W.add(k),k}function f(b,L,P,H){let Z=a[b]||(a[b]={meshes:[],mats:[],marks:[]}),V=W=>{let G=W.clone();return G.userData.baseEmissive=G.emissive.clone(),G};if(L.forEach(W=>{W.material=Array.isArray(W.material)?W.material.map(V):V(W.material),W.userData.sys=b,Z.meshes.push(W),Z.mats.push(...[].concat(W.material))}),P){let W=new gi(new ri({map:t,transparent:!0,depthTest:!1,depthWrite:!1,opacity:0}));W.position.copy(P),W.scale.set(.95,.95,1),W.renderOrder=10,W.userData.sys=b,W.userData.noAO=!0,r[H].add(W),Z.marks.push(W)}}let v=0,m={},g=b=>m[b]||(m[b]=gp(b));function M(b,L,P,H,Z,V){let W=L.x1-L.x0,G=L.y1-L.y0,k=(L.x0+L.x1)/2,Y=(L.y0+L.y1)/2,he=new at;he.position.set(k,Y,0),b.add(he);let we=Bd(g(H||"living")),Ie=new De(new cn(W,G),we);Ie.position.z=.03,Ie.receiveShadow=!1,he.add(Ie);let Xe=.075,rt=.1;d(W,Xe,rt,.012,i.trim,0,G/2-Xe/2,.07,he,{seg:1}),d(W,Xe,rt,.012,i.trim,0,-G/2+Xe/2,.07,he,{seg:1}),d(Xe,G,rt,.012,i.trim,-W/2+Xe/2,0,.07,he,{seg:1}),d(Xe,G,rt,.012,i.trim,W/2-Xe/2,0,.07,he,{seg:1});let Q=W>1.35?Math.round(W/.95):1;for(let Ce=1;Ce<Q;Ce++)d(.035,G-.1,.07,.008,i.trim,-W/2+W/Q*Ce,0,.065,he,{seg:1,cast:!1});G>1.2&&d(W-.1,.035,.07,.008,i.trim,0,G*.12,.065,he,{seg:1,cast:!1}),d(W+.22,.055,.26,.012,i.cedar,0,-G/2-.03,.14,he,{seg:1}),d(W+.18,.09,.12,.012,i.trim,0,G/2+.07,.1,he,{seg:1});let de=new gi(new ri({map:n,transparent:!0,depthWrite:!1,blending:_n,opacity:0}));return de.position.set(0,0,.4),de.scale.set(W*2.6,G*2.6,1),de.userData.noAO=!0,he.add(de),o.push({mat:we,halo:de,order:Z!=null?Z+v*.001:v,always:!!V,w:W,h:G}),v++,he}function S(b,L,P){let H=L.x1-L.x0,Z=L.y1-L.y0,V=(L.x0+L.x1)/2,W=(L.y0+L.y1)/2,G=new at;G.position.set(V,W,0),b.add(G),p(H,Z,.07,i.door,0,0,0,G,{uv:{ox:V,oy:W}});let k=new De(new cn(.22,Z*.72),Bd(g("hall")));k.position.set(-H/2+.22,.05,.04),G.add(k),o.push({mat:k.material,halo:null,order:.5,always:!1,w:.22,h:Z*.72}),d(.03,.8,.05,.012,i.trim,H/2-.14,-.05,.08,G,{seg:1}),d(H+.14,.09,.12,.012,i.trim,0,Z/2+.07,.07,G,{seg:1}),d(.07,Z,.1,.01,i.trim,-H/2-.035,0,.06,G,{seg:1}),d(.07,Z,.1,.01,i.trim,H/2+.035,0,.06,G,{seg:1})}function y(b,L,P,H,Z,V,W,G,k={}){let Y=new at,he=new Set([-b/2,b/2]),we=new Set([0,L]);H.forEach(Q=>{he.add(Q.x0),he.add(Q.x1),we.add(Q.y0),we.add(Q.y1)});let Ie=[...he].sort((Q,de)=>Q-de),Xe=[...we].sort((Q,de)=>Q-de),rt=[i.trim,i.trim,i.trim,i.trim,Z,i.drywall];for(let Q=0;Q<Ie.length-1;Q++)for(let de=0;de<Xe.length-1;de++){let Ce=(Ie[Q]+Ie[Q+1])/2,xe=(Xe[de]+Xe[de+1])/2;H.some(Ue=>Ce>Ue.x0&&Ce<Ue.x1&&xe>Ue.y0&&xe<Ue.y1)||p(Ie[Q+1]-Ie[Q],Xe[de+1]-Xe[de],P,rt,Ce,xe,0,Y,{edges:!0,uv:{ox:Ce,oy:xe+(k.v0||0)}})}return H.forEach(Q=>{Q.door?S(Y,Q,P):M(Y,Q,P,Q.room,k.order,Q.always)}),Y.position.copy(W),Y.rotation.y=G||0,V.add(Y),Y}(()=>{let b=r.below,L=[],P=i.form;L.push(p(Pn+.5,3.4,.25,P,0,-1.4,qt/2+.12,b,{edges:!0,uv:{ox:0,oy:-1.4}})),L.push(p(Pn+.5,3.4,.25,P,0,-1.4,-qt/2-.12,b,{edges:!0,uv:{ox:0,oy:-1.4}})),L.push(p(.25,3.4,qt,P,Pn/2+.12,-1.4,0,b,{edges:!0,uv:{oy:-1.4}})),L.push(p(.25,3.4,qt,P,-Pn/2-.12,-1.4,0,b,{edges:!0,uv:{oy:-1.4}})),p(Pn+1.2,.3,.8,i.concrete,0,-3.1,qt/2+.1,b),p(Pn+1.2,.3,.8,i.concrete,0,-3.1,-qt/2-.1,b),p(.8,.3,qt,i.concrete,Pn/2+.1,-3.1,0,b),p(.8,.3,qt,i.concrete,-Pn/2-.1,-3.1,0,b);let H=p(Pn,.16,qt,i.slab,0,-2.88,0,b,{edges:!0});f("foundation",[...L,H],Yt(Pn/2+.6,-1.4,1.6),"below");let Z=u(.14,9,i.pipe,.6,-3.25,-qt/2-4.3,b);Z.rotation.x=Math.PI/2-.05;let V=u(.14,.6,i.pipe,.6,-3,-qt/2+.2,b),W=u(.12,3.2,i.pvc,.6,-1.6,-qt/2-1.2,b);f("sewer",[Z,V,W],Yt(.6,-2.4,-qt/2-4.5),"below");let G=u(.1,.5,i.pvc,-1.2,-2.7,-1.5,b);f("radon",[G],Yt(-1.2,-2.2,-1.5),"below");let k=u(.06,Pn+1,i.pvc,0,-3.25,qt/2+.7,b,10);k.rotation.z=Math.PI/2,k.castShadow=!1})(),(()=>{let b=r.basement,L=new qi(16766880,0,15,2);L.position.set(.2,-.7,-.4),b.add(L),b.userData.lights=[L];let P=p(.85,1.7,.85,i.white,-3.3,-2,-2.6,b),H=p(.87,.12,.87,i.copper,-3.3,-1.5,-2.6,b),Z=p(6.2,.36,.5,i.steel,-.3,-.12,-2.6,b),V=p(.5,1,.5,i.steel,-3.3,-.7,-2.6,b),W=u(.07,1.2,i.pvc,-3,-.6,-3.1,b);f("hvac",[P,H,Z,V,W],Yt(-3.3,-.9,-2),"basement");let G=u(.3,1.4,i.white,-2.1,-2.1,-3,b),k=u(.04,1.2,i.copper,-2,-.9,-3,b);f("water-heaters",[G,k],Yt(-2.1,-1.1,-2.6),"basement");let Y=p(.62,.95,.14,i.steel,2.8,-1.2,-3.8,b),he=p(.4,.7,.02,i.copper,2.8,-1.2,-3.72,b),we=u(.05,1.5,i.copper,2.8,-.1,-3.8,b);f("electrical",[Y,he,we],Yt(2.8,-.5,-3.3),"basement");let Ie=u(.1,3.1,i.pvc,-1.2,-1.2,-1.5,b);f("radon",[Ie],null,"basement"),u(.09,3.1,i.pipe,-2.6,-1.3,-3.6,b);for(let Xe=-4;Xe<=4;Xe++)p(.09,.3,qt-.3,i.cedar,Xe*1,0-.1,0,b,{cast:!1})})();let _=[{x0:-3.8,x1:-1.2,y0:.7,y1:2.5,room:"living"},{x0:.2,x1:1.3,y0:0,y1:2.2,door:!0},{x0:2.1,x1:4.2,y0:.7,y1:2.5,room:"kitchen"}];(()=>{let b=r.main,L=.3;p(Pn,.3,qt,i.floor,0,.15,0,b,{edges:!0}),y(Pn,Es,.22,_,i.lap,b,Yt(0,L,qt/2),0,{order:1,v0:L}),y(Pn,Es,.22,[{x0:-3,x1:1.6,y0:.1,y1:2.45,room:"kitchen"}],i.lap,b,Yt(0,L,-qt/2),Math.PI,{order:4,v0:L}),y(qt,Es,.22,[{x0:-2.2,x1:-.2,y0:.8,y1:2.3,room:"hall"}],i.lap,b,Yt(Pn/2,L,0),Math.PI/2,{order:2,v0:L}),y(qt,Es,.22,[{x0:.3,x1:2.3,y0:.8,y1:2.3,room:"living"}],i.lap,b,Yt(-Pn/2,L,0),-Math.PI/2,{order:3,v0:L}),p(.15,Es,5,i.drywall,1.2,L+Es/2,-1.2,b);let P=p(3,.95,.65,i.counter,2.9,L+.48,-3.4,b),H=d(.85,1.95,.7,.03,i.steel,4.35,L+.98,-3.4,b),Z=p(.75,.05,.6,i.steel,2.4,L+.97,-3.4,b);f("installation",[P,H,Z],Yt(3,2.3,-3.2),"main");let V=u(.1,3.2,i.pvc,-1.2,1.9,-1.5,b);f("radon",[V],null,"main"),u(.09,3.2,i.pipe,-2.6,1.9,-3.6,b),d(.3,.42,.18,.02,i.white,2.8,1.5,-qt/2-.2,b),u(.035,3.6,i.steel,2.8,3.55,-qt/2-.1,b,10);let W=new qi(16758123,0,11,2);W.position.set(-1.5,2.4,.5),b.add(W);let G=new qi(16758123,0,9,2);G.position.set(3,2.4,-1.5),b.add(G),b.userData.lights=[W,G];let k=new at;b.add(k),p(2.9,.32,2.3,i.stone,.55,.16,5.1,k,{uv:{ox:.55,oy:.16}}),p(2.9,.07,2.3,i.cedar,.55,.35,5.1,k,{uv:{}}),p(1.7,.17,.4,i.concrete,.7,.085,6.55,k),p(1.9,.17,.4,i.concrete,.7,.255-.085,6.2,k),[-.75,1.85].forEach(Ie=>{d(.22,2.55,.22,.015,i.cedar,Ie,1.67,6.12,k),p(.34,.5,.34,i.stone,Ie,.6,6.12,k,{uv:{ox:Ie,oy:.6}})}),d(3.5,.24,.22,.02,i.cedar,.55,2.84,6.12,k);let Y=p(3.4,.14,2.6,[i.trim,i.trim,i.roof,i.cedar,i.trim,i.trim],.55,3,5.25,k,{uv:{swap:!0}});Y.rotation.x=.1,[-.15,1.65].forEach(Ie=>{let Xe=new De(new jt(.06,.07,.24,12),i.sconce);Xe.position.set(Ie,1.9,4.2),Xe.userData.noAO=!0,k.add(Xe);let rt=new gi(new ri({map:n,transparent:!0,depthWrite:!1,blending:_n,opacity:0}));rt.position.set(Ie,1.9,4.5),rt.scale.set(1.6,1.6,1),rt.userData.noAO=!0,k.add(rt),l.porchHalos=(l.porchHalos||[]).concat(rt)}),[-.78,1.88].forEach(Ie=>{p(.06,.06,2,i.trim,Ie,1.2,5.15,k),p(.05,.05,2,i.trim,Ie,.55,5.15,k);for(let Xe=0;Xe<8;Xe++)p(.025,.62,.025,i.trim,Ie,.9,4.25+Xe*.27,k,{cast:!1})});let he=new De(new cn(.2,.2),new yn({map:t,transparent:!0,toneMapped:!1}));he.position.set(1.62,1.35,4.13),he.userData.noAO=!0,k.add(he);let we=new qi(16761469,0,7,2);we.position.set(.75,2.6,qt/2+1.1),b.add(we),b.userData.porch=we})(),(()=>{let b=r.upper,L=3.45;p(Pn,.25,qt,i.floor,0,3.32,0,b,{edges:!0}),y(Pn,Es,.22,[{x0:-3.6,x1:-1.8,y0:.9,y1:2.4,room:"bed"},{x0:-.9,x1:1.9,y0:.5,y1:2.5,room:"living"},{x0:2.6,x1:4.1,y0:.9,y1:2.4,room:"bed"}],i.bb,b,Yt(0,L,qt/2),0,{order:5,v0:L}),y(Pn,Es,.22,[{x0:-3.4,x1:-1.8,y0:.9,y1:2.3,room:"bath"},{x0:1.6,x1:3.2,y0:.9,y1:2.3,room:"bed"}],i.bb,b,Yt(0,L,-qt/2),Math.PI,{order:8,v0:L}),y(qt,Es,.22,[{x0:.6,x1:2.4,y0:.9,y1:2.3,room:"bed"}],i.bb,b,Yt(Pn/2,L,0),Math.PI/2,{order:6,v0:L}),y(qt,Es,.22,[{x0:-2.2,x1:-.6,y0:1.2,y1:2.2,room:"bath"}],i.bb,b,Yt(-Pn/2,L,0),-Math.PI/2,{order:7,v0:L}),p(.15,Es,qt-.4,i.drywall,-1.6,L+Es/2,0,b);let P=d(1.7,.55,.8,.08,i.ceramic,-3.6,L+.28,-3.35,b),H=d(.7,.85,.5,.04,i.ceramic,-2.4,L+.43,-3.5,b),Z=u(.09,3,i.pipe,-2.6,L+1.4,-3.6,b);f("plumbing",[P,H,Z],Yt(-3.4,4.6,-3),"upper");let V=u(.1,3,i.pvc,-1.2,L+1.4,-1.5,b);f("radon",[V],null,"upper");let W=new qi(16758123,0,11,2);W.position.set(.5,5.6,.5),b.add(W),b.userData.lights=[W]})(),(()=>{let b=r.roof,L=6.35,P=3.6,H=Pn/2,Z=.6,V=Math.atan2(P,H),W=Math.hypot(H+Z,(H+Z)*P/H),G=K=>{let ne=new ln(W,.2,qt+1);h(ne,{swap:!0});let ue=new De(ne,[i.trim,i.trim,i.roof,i.cedar,i.trim,i.trim]);ue.castShadow=!0,ue.receiveShadow=!0,ue.rotation.z=K*V;let Ge=L+P-(H+Z)/2*(P/H)+.12;return ue.position.set(K>0?-(H+Z)/2+.02:(H+Z)/2-.02,Ge,0),b.add(ue),ue},k=G(1),Y=G(-1);[k,Y].forEach(K=>{let ne=new $s(new Ha(K.geometry,30),c);ne.raycast=()=>{},K.add(ne)}),[k,Y].forEach((K,ne)=>{[-1,1].forEach(Oe=>p(W,.3,.06,i.trim,0,-.05,Oe*(qt/2+.5),K,{cast:!1}));let ue=ne===0?-1:1;p(.06,.34,qt+1.04,i.trim,ue*(W/2),-.1,0,K,{cast:!1});let Ge=p(.12,.1,qt+.9,i.trim,ue*(W/2+.06),-.28,0,K,{cast:!1});Ge.rotation.z=-K.rotation.z}),p(.3,.22,qt+1.05,i.trim,0,L+P+.2,0,b),f("roofing",[k,Y],Yt(-2.8,9.1,2.2),"roof");let he=new oi;he.moveTo(-H,0),he.lineTo(H,0),he.lineTo(0,P),he.lineTo(-H,0);let we=new Js;we.moveTo(-.5,1.15),we.lineTo(.5,1.15),we.lineTo(.5,2.15),we.lineTo(-.5,2.15),we.lineTo(-.5,1.15),he.holes.push(we);let Ie=new gs(he,{depth:.22,bevelEnabled:!1});[qt/2-.22,-qt/2].forEach((K,ne)=>{let ue=new De(Ie,[i.bb,i.trim]);ue.position.set(0,L,K),ue.castShadow=!0,ue.receiveShadow=!0,b.add(ue);let Ge=new at;Ge.position.set(0,L+1.65,K+.11),b.add(Ge);let Oe=M(Ge,{x0:-.5,x1:.5,y0:-.5,y1:.5,room:"hall"},.22,"hall",-1,!0);ne===1&&(Ge.rotation.y=Math.PI,Ge.position.z=K+.11-0);let Je=new gi(new ri({map:n,transparent:!0,depthWrite:!1,blending:_n,opacity:0}));Je.position.set(0,L+1.65,K+(ne===0?.55:-.3)),Je.scale.set(3.4,3.4,1),Je.userData.noAO=!0,b.add(Je),o.push({mat:null,halo:Je,order:-1,always:!0,w:1,h:1,haloOnly:!0,level:.6})});let Xe=new at;Xe.rotation.z=-V,Xe.position.copy(Y.position);let rt=[];for(let K=0;K<2;K++)for(let ne=0;ne<4;ne++){let ue=p(1.3,.05,.95,i.solar,-.9+K*1.45,.16,-1.6+ne*1.05,Xe,{cast:!1}),Ge=p(1.34,.04,.99,i.solarFrame,-.9+K*1.45,.14,-1.6+ne*1.05,Xe,{cast:!1});rt.push(ue)}b.add(Xe),f("solar",rt,Yt(3.4,9.3,.6),"roof");let Q=K=>{let ne=new cn(W-.25,qt+.7,30,30),ue=ne.attributes.position,Ge=ti(5);for(let je=0;je<ue.count;je++)ue.setZ(je,.025+Ge()*.05);ne.computeVertexNormals();let Oe=i.snowRoof.clone();Oe.alphaMap=mp(256,K),Oe.alphaTest=.25,Oe.userData={...i.snowRoof.userData};let Je=new De(ne,Oe);return Je.rotation.x=-Math.PI/2,Je.position.y=.105,Je.receiveShadow=!0,Je.castShadow=!0,Je};l.snowL=Q(),l.snowL.userData.keep=!0,k.add(l.snowL),l.snowR=Q((K,ne)=>K>.24&&K<.7&&ne>.24&&ne<.76?0:1),l.snowR.userData.keep=!0,Y.add(l.snowR);let de=p(.5,.16,qt+.8,i.snowRoof,0,L+P+.38,0,b,{cast:!1});de.material=i.snowRoof,de.userData.keep=!0,(()=>{let K=ti(9),ne=70,ue=new qr(.04,1,6);ue.rotateX(Math.PI),ue.translate(0,-.5,0);let Ge=new Ri(ue,i.ice,ne*2),Oe=new Mt,Je=new bn,je=new N,q=new N,gt=L+P-(H+Z)*(P/H)+0;for(let dt=0;dt<2;dt++)for(let O=0;O<ne;O++){let E=-qt/2-.4+O/(ne-1)*(qt+.8),j=.12+K()*K()*.7,se=.7+K()*.8;je.set((dt?1:-1)*(H+Z+.08),gt-.35,E+(K()-.5)*.06),q.set(se,j,se),Oe.compose(je,Je,q),Ge.setMatrixAt(dt*ne+O,Oe)}Ge.userData.baseMatrices=Array.from({length:ne*2},(dt,O)=>{let E=new Mt;return Ge.getMatrixAt(O,E),E}),Ge.castShadow=!1,Ge.userData.noAO=!0,Ge.visible=!1,b.add(Ge),l.icicles=Ge})();let Ce=new cn(Pn-.6,qt-.6,40,32),xe=Ce.attributes.position,Ue=ti(3);for(let K=0;K<xe.count;K++)xe.setZ(K,Ue()*.12);Ce.computeVertexNormals();let $=new De(Ce,i.insul);$.rotation.x=-Math.PI/2,$.position.y=L+.02,$.receiveShadow=!0,b.add($),p(Pn,.1,qt,i.floor,0,L-.05,0,b),f("asbestos",[$],Yt(-.4,7.3,-.8),"roof");let Be=u(.1,4.6,i.pvc,-1.2,L+2.2,-1.5,b);f("radon",[Be],Yt(-1.2,10.9,-1.5),"roof");let te=u(.24,.42,i.steel,-1.2,7.9,-1.5,b,16);f("radon",[te],null,"roof"),u(.09,4,i.pipe,-2.6,L+2,-3.6,b);let oe=p(.95,4.1,.95,i.stone,-3.4,8.4,-1.6,b,{uv:{ox:-3.4,oy:8.4}});p(1.15,.12,1.15,i.concrete,-3.4,10.5,-1.6,b),p(.7,.3,.7,i.steel,-3.4,10.7,-1.6,b),l.chimneyTop.position.set(-3.4,10.9,-1.6),b.add(l.chimneyTop)})();let T={meter:Yt(2.8,1.45,-4.3),panel:Yt(2.8,-1.2,-3.8),shutoff:Yt(-.5,-1.4,3.75),heater:Yt(-2.1,-2,-3),sewer:Yt(.6,-3.35,-7.5),furnace:Yt(-3.3,-2,-2.6),register:Yt(3.8,3.52,2.9),fan:Yt(-1.2,7.9,-1.5),pit:Yt(-1.2,-3,-1.5),exhaust:Yt(-1.2,11.6,-1.5),rim:Yt(4.9,.3,4.05),sill:Yt(-2.5,.7,4.05),attic:Yt(0,6.4,4.05),door:Yt(.75,1.2,4.05),chimney:Yt(-3.4,10.5,-1.6),eave:Yt(-5.6,5.9,3.5),potlights:Yt(-2.4,3.1,.7),rangeHood:Yt(2.4,2.4,-3.55),island:Yt(3,1.3,-.6),vanity:Yt(-2.4,4.4,-3.55),tub:Yt(-3.6,4.1,-3.35),bedWindow:Yt(2.4,5.2,-3.9),sump:Yt(.66,-2.2,1.6)},A=new Mt,x=new N,w=new bn,C=new N;function F(b,L,P,H,Z){let V=H<.55?1:0;F.on=$e(F.on??0,V,Pt(Z*(V?.55:1.2),0,1));let W=F.on*9,G=(1-b.ghost*.85)*(1-.35*(b.cut||0)),k=1-.65*(b.cut||0),Y=1+1.6*(b.cut||0);o.forEach(Ce=>{let xe=(Ce.always?1:Pt(W-Ce.order,0,1))*G,Ue=1-H*.8;Ce.mat&&(Ce.mat.emissiveIntensity=(Ce.always?2.6:2)*xe*Ue*k),Ce.halo&&(Ce.halo.material.opacity=(Ce.haloOnly?.28:Ce.always?.5:.3)*xe*Ue*k)}),["main","upper"].forEach(Ce=>(r[Ce].userData.lights||[]).forEach(xe=>{xe.intensity=9*Pt(W/9,0,1)*(1-H)*G*Y}));let he=Math.max(b.zk||0,Et(.2,.7,b.explode||0),Pt(((b.lift||0)-1.5)/1.5,0,1));(r.basement.userData.lights||[]).forEach(Ce=>{Ce.intensity=30*he*G*Y});let we=(1-H)*G;r.main.userData.porch.intensity=12*we,(l.porchHalos||[]).forEach(Ce=>{Ce.material.opacity=.55*we*k}),i.sconce.emissiveIntensity=.4+3.2*(1-H);let Ie=Pt(b.melt,0,1),Xe=.18+Ie*.8;l.snowL.material.alphaTest=Xe,l.snowR.material.alphaTest=Pt(Xe+.1,0,1);let rt=r.roof.children.find(Ce=>Ce.material===i.snowRoof);rt&&(rt.visible=Ie<.6);let Q=l.icicles,de=Pt(b.icicles,0,1);if(Q.visible=de>.01,Q.visible){for(let Ce=0;Ce<Q.count;Ce++)A.copy(Q.userData.baseMatrices[Ce]),A.decompose(x,w,C),C.y*=de,C.x*=.5+.5*de,C.z=C.x,A.compose(x,w,C),Q.setMatrixAt(Ce,A);Q.instanceMatrix.needsUpdate=!0}return W}return{house:s,layers:r,sys:a,windows:o,ANCHORS:T,edgeMat:c,extra:l,update:F,box:p,rbox:d,cyl:u,system:f,wall:y,windowUnit:M,setUV:h,v:Yt}}function Wi(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,c=new kt,l=0;for(let h=0;h<i.length;++h){let p=i[h],d=0;if(t!==(p.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let u in p.attributes){if(!n.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+u+'" attribute exists among all geometries, or in none of them.'),null;r[u]===void 0&&(r[u]=[]),r[u].push(p.attributes[u]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==p.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let u in p.morphAttributes){if(!s.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[u]===void 0&&(a[u]=[]),a[u].push(p.morphAttributes[u])}if(e){let u;if(t)u=p.index.count;else if(p.attributes.position!==void 0)u=p.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,u,h),l+=u}}if(t){let h=0,p=[];for(let d=0;d<i.length;++d){let u=i[d].index;for(let f=0;f<u.count;++f)p.push(u.getX(f)+h);h+=i[d].attributes.position.count}c.setIndex(p)}for(let h in r){let p=Ap(r[h]);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,p)}for(let h in a){let p=a[h][0].length;if(p!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<p;++d){let u=[];for(let v=0;v<a[h].length;++v)u.push(a[h][v][d]);let f=Ap(u);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(f)}}}return c}function Ap(i){let e,t,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let a=new e(r),o=new Ot(a,t,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let p=c/t;for(let d=0,u=h.count;d<u;d++)for(let f=0;f<t;f++){let v=h.getComponent(d,f);o.setComponent(d+p,f,v)}}else a.set(h.array,c);c+=h.count*t}return s!==void 0&&(o.gpuType=s),o}var Wd=0,Rp={value:new Rn(0,0,-1,30)};function wl(i,e,t,n=!1){let s=i.onBeforeCompile,r=++Wd;return i.onBeforeCompile=(a,o)=>{s&&s(a,o),a.uniforms.uSight=Rp,a.fragmentShader=a.fragmentShader.replace("#include <common>",`#include <common>
uniform vec4 uSight;`).replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
      { vec3 fp = -vViewPosition;
        float fd = smoothstep(${e.toFixed(1)}, ${t.toFixed(1)}, length(fp));${n?`
        float fs = dot(fp, uSight.xyz);
        float fc = 1.0 - smoothstep(0.12, 0.26, length(fp - fs * uSight.xyz) / max(fs, 0.5));
        fd = min(fd, 1.0 - 0.94 * fc * smoothstep(0.5, 4.0, uSight.w - fs) * step(0.0, fs));`:""}
        float fh = fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715))));
        if (fd < fh) discard; }`)},i.customProgramCacheKey=()=>"fade"+r,i}function Vd(i,e){let t=i.onBeforeCompile,n=++Wd;return i.onBeforeCompile=(s,r)=>{t&&t(s,r),s.uniforms.uSnow=e,s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
attribute float aSnow;
uniform float uSnow;`).replace("#include <color_vertex>",`#include <color_vertex>
vColor.rgb = mix(vColor.rgb, vec3(0.8, 0.86, 0.95), aSnow * uSnow);`)},i.customProgramCacheKey=()=>"snowv"+n,i}function Cp({M:i,T:e,glowTex:t,markTex:n,tier:s,reduce:r}){let a=new at,o=ti(21),c=dr("rgba(255,255,255,0.7)"),l=vp(),h=to("rgba(255,196,120,0.9)","rgba(255,150,70,0)"),p={uSnow:{value:1},uRoofSnow:{value:1},uTint:{value:new it(1,1,1)},uGrow:{value:0},uLeafTint:{value:new it(.3,.5,.15)}},d=e.grass,u=e.snow,f=new rn({map:u.map,normalMap:u.normalMap,roughnessMap:u.rmMap,metalnessMap:u.rmMap,roughness:1,metalness:1,transparent:!0,normalScale:new He(1.1,1.1),envMapIntensity:.9});f.onBeforeCompile=X=>{X.uniforms.uSnow=p.uSnow,X.uniforms.uTint=p.uTint,X.uniforms.uGrass={value:d.map},X.vertexShader=X.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vWxz;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vWxz = (modelMatrix * vec4(position, 1.0)).xz;`),X.fragmentShader=X.fragmentShader.replace("#include <common>",`#include <common>
      uniform float uSnow; uniform vec3 uTint; uniform sampler2D uGrass; varying vec2 vWxz;
      float gh(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float gn(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f); return mix(mix(gh(i), gh(i+vec2(1,0)), f.x), mix(gh(i+vec2(0,1)), gh(i+vec2(1,1)), f.x), f.y); }`).replace("#include <map_fragment>",`
      vec4 snowC = texture2D(map, vMapUv);
      vec3 gr = texture2D(uGrass, vWxz * 0.25).rgb * uTint;
      float nz = gn(vWxz * 0.35) * 0.55 + gn(vWxz * 1.7) * 0.3 + gn(vWxz * 7.0) * 0.15;
      float cover = smoothstep(uSnow - 0.1, uSnow + 0.1, 1.0 - nz + (uSnow - 0.5) * 0.9);
      cover = uSnow >= 0.995 ? 1.0 : (uSnow <= 0.005 ? 0.0 : cover);
      diffuseColor.rgb *= mix(gr / max(snowC.rgb, vec3(0.2)) * 0.9, vec3(1.0), cover);
      diffuseColor *= snowC;`)};let v=200,m=6,g=450,M=Array.from({length:v+1},(X,ee)=>g*Math.sinh(m*(ee/v*2-1))/Math.sinh(m)),S=(X,ee)=>{let ae=Math.hypot(X,ee),Fe=Et(40,220,ae)*(Tn(X*.012+3,ee*.012+8,4,4096,4096,3)-.35)*22,Me=(Tn(X*.09,ee*.09,3,4096,4096,9)-.5)*.35*Et(8,22,ae)*(1-Et(14,17,ee)*(1-Et(27,30,ee)))*(1-Et(-22.5,-20.5,ee)*(1-Et(-15.5,-13.5,ee)))*(1-Et(5,6.2,X)*(1-Et(10.2,11.5,X))*Et(.5,2,ee)*(1-Et(16.5,18,ee)));return Fe+Me},y=new kt;{let X=new Float32Array((v+1)*(v+1)*3),ee=new Float32Array((v+1)*(v+1)*2),ae=[];for(let Fe=0;Fe<=v;Fe++)for(let Me=0;Me<=v;Me++){let Ee=Fe*(v+1)+Me,We=M[Me],Qe=M[Fe];X[Ee*3]=We,X[Ee*3+1]=S(We,Qe),X[Ee*3+2]=Qe,ee[Ee*2]=We,ee[Ee*2+1]=Qe}for(let Fe=0;Fe<v;Fe++)for(let Me=0;Me<v;Me++){let Ee=(M[Me]+M[Me+1])/2,We=(M[Fe]+M[Fe+1])/2;if(Math.abs(Ee)<5.1&&Math.abs(We)<4.1)continue;let Qe=Fe*(v+1)+Me,st=Qe+1,mt=Qe+v+1,Ze=mt+1;ae.push(Qe,mt,st,st,mt,Ze)}y.setAttribute("position",new Ot(X,3)),y.setAttribute("uv",new Ot(ee,2)),y.setIndex(ae),y.computeVertexNormals()}let _=[],T=new De(y,f);T.receiveShadow=!0,T.renderOrder=-1,a.add(T);let A=i.asphalt.clone();[A.map,A.normalMap,A.roughnessMap,A.metalnessMap].forEach(X=>{X&&X.repeat.set(220,3)}),A.roughness=.72,A.metalness=0,A.metalnessMap=null,A.envMapIntensity=1.4;let x=new De(new cn(660,9),A);x.rotation.x=-Math.PI/2,x.position.set(0,.012,22.2),x.receiveShadow=!0,a.add(x);let w=null;{let X=new cn(2.2,.14),ee=new Ri(X,new rn({color:14070346,roughness:.8}),90),ae=new Mt,Fe=new bn().setFromEuler(new ki(-Math.PI/2,0,0)),Me=new N,Ee=new N(1,1,1);for(let We=0;We<90;We++)Me.set(-180+We*4,.02,22.2),ae.compose(Me,Fe,Ee),ee.setMatrixAt(We,ae);ee.receiveShadow=!0,a.add(ee),w=ee}_.push(A,i.pavement);let C=new De(new ln(660,.1,1.8),i.pavement);C.position.set(0,.05,15.6),C.receiveShadow=!0,C.castShadow=!0,a.add(C);let F=new De(new ln(1.3,.05,9.4),i.pavement);F.position.set(.7,.03,10.9),F.receiveShadow=!0,a.add(F);let b=new De(new ln(3.6,.06,14.5),i.pavement);b.position.set(7.9,.03,9.3),b.receiveShadow=!0,a.add(b);let L=i.asphalt.clone();[L.map,L.normalMap,L.roughnessMap,L.metalnessMap].forEach(X=>{X&&X.repeat.set(220,1.5)}),L.metalnessMap=null,L.metalness=0,L.roughness=.9,L.color.setScalar(1.25),_.push(L);let P=new De(new cn(660,4.5),L);P.rotation.x=-Math.PI/2,P.position.set(0,.012,-18.2),P.receiveShadow=!0,a.add(P);let H=(()=>{let X=new Ln(1,10,6),ee=new Ri(X,new rn({color:14673906,roughness:.95}),70),ae=new Mt,Fe=new bn,Me=new N,Ee=new N;for(let We=0;We<70;We++){let Qe=We%2,st=-140+(We>>1)*8+o()*3;Me.set(st,.1,Qe?26.9:17.6+o()*.2),Ee.set(2.8+o()*1.4,.55+o()*.25,.9+o()*.3),ae.compose(Me,Fe,Ee),ee.setMatrixAt(We,ae)}return ee.castShadow=!0,ee.receiveShadow=!0,a.add(ee),ee})(),Z=[],V=wl(i.pole.clone(),3.5,9),W=wl(new rn({color:3817544,roughness:.42,metalness:.65}),3.5,9),G=new yn({color:new it(3.2,2.2,1.1),toneMapped:!1}),k=new Ci([new N(0,6.9,0),new N(0,7.45,.25),new N(0,7.6,.9),new N(0,7.5,1.6)]),Y=new Ii(k,14,.05,8),he=new Ln(1,24,12);he.scale(.54,.085,.23),[[-13,16.6],[11,16.6],[34,16.6],[-38,16.6]].forEach(([X,ee])=>{let ae=new at;ae.position.set(X,0,ee);let Fe=new De(new jt(.06,.1,7.2,10),V);Fe.position.y=3.6,Fe.castShadow=!0,ae.add(Fe);let Me=new De(Y,V);Me.castShadow=!0,ae.add(Me);let Ee=new De(he,W);Ee.position.set(0,7.5,1.78),Ee.rotation.x=.04,Ee.castShadow=!0,ae.add(Ee);let We=new De(new cn(.8,.24),G);We.rotation.x=Math.PI/2,We.position.set(0,7.445,1.78),We.userData.noAO=!0,ae.add(We);let Qe=new gi(new ri({map:t,transparent:!0,depthWrite:!1,blending:_n,opacity:0}));Qe.position.set(0,7.3,1.78),Qe.scale.set(5,5,1),Qe.userData.noAO=!0,ae.add(Qe);let st=new De(new cn(1,1),new yn({map:h,transparent:!0,depthWrite:!1,blending:_n,opacity:0}));st.rotation.x=-Math.PI/2,st.position.set(0,.04,2),st.scale.set(15,10,1),st.userData.noAO=!0,ae.add(st),a.add(ae),Z.push({halo:Qe,pool:st,lens:We})});let we=new qi(16761466,0,32,2);we.position.set(11,7,18.2),a.add(we);let Ie=new qi(16761466,0,32,2);Ie.position.set(-13,7,18.2),a.add(Ie);let Xe=[];[[-2.5,7.4,5.5,4.2],[.8,8.4,5.5,4.6],[3.15,7.4,5.5,4.2]].forEach(([X,ee,ae,Fe])=>{let Me=new De(new cn(1,1),new yn({map:h,transparent:!0,depthWrite:!1,blending:_n,opacity:0}));Me.rotation.x=-Math.PI/2,Me.position.set(X,.05,ee),Me.scale.set(ae,Fe,1),Me.userData.noAO=!0,a.add(Me),Xe.push(Me)});let rt=wl(Vd(i.spruce.clone(),p.uSnow),5,12,!0);function Q(X){let ee=ti(X),ae=[],Fe=11;for(let _e=0;_e<Fe;_e++){let bt=_e/(Fe-1),ht=$e(1.7,.18,Math.pow(bt,.85))*(.94+ee()*.12),Nt=$e(1.7,.9,bt),Kt=1+_e*.62,nn=new qr(ht,Nt,20,4,!0);nn.translate(0,Kt+Nt/2,0);let hn=nn.attributes.position;for(let At=0;At<hn.count;At++){let $t=hn.getX(At),It=hn.getY(At),Tt=hn.getZ(At),Fn=Math.atan2(Tt,$t),Hn=Math.hypot($t,Tt),Zn=1+Math.sin(Fn*7+_e*2.3)*.09+Math.sin(Fn*13+_e)*.04+(ee()-.5)*.05,Mi=Hn/ht*(Hn/ht)*.34*(1+.35*Math.sin(Fn*5+_e*1.3));hn.setXYZ(At,$t*Zn,It-Mi,Tt*Zn)}nn.computeVertexNormals(),ae.push(nn)}let Me=new jt(.1,.2,1.6,8);Me.translate(0,.8,0),ae.push(Me);let Ee=Wi(ae);Ee.computeVertexNormals();let We=Ee.attributes.position,Qe=Ee.attributes.normal,st=new Float32Array(We.count*3),mt=new Float32Array(We.count),Ze=new it;for(let _e=0;_e<We.count;_e++){let bt=Qe.getY(_e),ht=Tn(We.getX(_e)*2.1,We.getZ(_e)*2.1+We.getY(_e)*1.1,3,64,64,2);Ze.setRGB(.05+ht*.05,.12+ht*.08,.09+ht*.05),We.getY(_e)<1.15&&Ze.setRGB(.1,.07,.05),st[_e*3]=Ze.r,st[_e*3+1]=Ze.g,st[_e*3+2]=Ze.b,mt[_e]=We.getY(_e)<1.15?0:Pt(Et(.05,.6,bt+(ht-.5)*.7),0,1)*.78}return Ee.setAttribute("color",new Ot(st,3)),Ee.setAttribute("aSnow",new Ot(mt,1)),Ee}let de=[[-9.5,3,1.1],[-11.8,-3.5,1.4],[9.8,-5.5,1.25],[-8.2,-8.5,1.05],[15,-9,1.35],[-14,9.5,1.2],[18,9,1.1],[-21,-6,1.5],[24,-3,1.25],[-27,8,1.2],[30,-12,1.4],[-11.5,-13.5,1.3],[6,-26,1.1],[-18,-27,1.45],[22,-27,1.3],[-36,3,1.3],[40,2,1.2]],Ce=[Q(1),Q(2)],xe=Ce[0];Ce.forEach((X,ee)=>{let ae=de.filter((st,mt)=>mt%2===ee),Fe=new Ri(X,rt,ae.length),Me=new Mt,Ee=new bn,We=new N,Qe=new N;ae.forEach(([st,mt,Ze],_e)=>{Ee.setFromAxisAngle(new N(0,1,0),o()*6.28),We.set(st,0,mt),Qe.set(Ze,Ze*(.9+o()*.25),Ze),Me.compose(We,Ee,Qe),Fe.setMatrixAt(_e,Me)}),Fe.castShadow=!0,Fe.receiveShadow=!0,a.add(Fe)});let Ue=[];{let X=Vd(i.shrub.clone(),p.uSnow),ee=new $r(.7,3),ae=ee.attributes.position,Fe=new Float32Array(ae.count*3),Me=new Float32Array(ae.count);for(let Ee=0;Ee<ae.count;Ee++){let We=ae.getX(Ee),Qe=ae.getY(Ee),st=ae.getZ(Ee),mt=Tn(We*2+5,st*2+Qe*2,3,64,64,4),Ze=1+(mt-.5)*.35;ae.setXYZ(Ee,We*Ze,Qe*Ze*.72,st*Ze),Fe[Ee*3]=.06,Fe[Ee*3+1]=.15+mt*.05,Fe[Ee*3+2]=.1,Me[Ee]=Et(.05,.7,Qe/.7+(mt-.5))*.8}ee.setAttribute("color",new Ot(Fe,3)),ee.setAttribute("aSnow",new Ot(Me,1)),ee.computeVertexNormals(),[[-1.7,4.9,1.2],[-2.5,4.7,.9],[2.9,4.9,1],[3.7,4.6,.8],[-5.2,4.6,.8]].forEach(([Ee,We,Qe])=>{let st=new De(ee,X);st.position.set(Ee,.35*Qe,We),st.scale.setScalar(Qe),st.castShadow=!0,st.receiveShadow=!0,st.userData.keep=!0,a.add(st),Ue.push(st)})}let $=wl(Vd(new rn({vertexColors:!0,roughness:1}),p.uSnow),5,12,!0),Be=(()=>{let X=document.createElement("canvas");X.width=X.height=128;let ee=X.getContext("2d"),ae=ti(77);for(let Me=0;Me<30;Me++){ee.save(),ee.translate(12+ae()*104,12+ae()*104),ee.rotate(ae()*Math.PI);let Ee=150+Math.floor(ae()*105),We=6+ae()*6,Qe=13+ae()*9;ee.fillStyle=`rgb(${Ee},${Ee},${Ee})`,ee.beginPath(),ee.ellipse(0,0,We,Qe,0,0,Math.PI*2),ee.fill(),ee.strokeStyle="rgba(70,70,70,0.65)",ee.lineWidth=1,ee.beginPath(),ee.moveTo(0,-Qe),ee.lineTo(0,Qe),ee.stroke(),ee.restore()}let Fe=new Dn(X);return Fe.colorSpace=fn,Fe.anisotropy=4,Fe})(),te=wl((()=>{let X=new rn({map:Be,alphaTest:.5,alphaToCoverage:s>=1,vertexColors:!0,roughness:.8,side:Xn}),ee=++Wd;return X.onBeforeCompile=ae=>{ae.uniforms.uGrow=p.uGrow,ae.uniforms.uLeafTint=p.uLeafTint,ae.vertexShader=ae.vertexShader.replace("#include <common>",`#include <common>
attribute vec3 aCenter;
uniform float uGrow;
uniform vec3 uLeafTint;`).replace("#include <begin_vertex>",`#include <begin_vertex>
transformed = aCenter + (position - aCenter) * uGrow;`).replace("#include <color_vertex>",`#include <color_vertex>
vColor.rgb *= uLeafTint;`),ae.fragmentShader=ae.fragmentShader.replace("#include <normal_fragment_begin>",Jt.normal_fragment_begin.replace("normal *= faceDirection;",""))},X.customProgramCacheKey=()=>"leaf"+ee,X})(),5,12,!0);function oe(X){let ee=ti(X),ae=[],Fe=[],Me=new N(0,1,0);function Ee(Nt,Kt,nn,hn){let At=new jt(hn*.68,hn,nn,6,1);return At.applyMatrix4(new Mt().compose(Nt.clone().addScaledVector(Kt,nn/2),new bn().setFromUnitVectors(Me,Kt),new N(1,1,1))),ae.push(At),Nt.clone().addScaledVector(Kt,nn)}let We=new N(0,0,1);function Qe(Nt,Kt){let nn=[],hn=[],At=[],$t=[],It=[],Tt=[],Fn=.72+ee()*.5,Hn=(ee()-.5)*.25;for(let Mi=0;Mi<18;Mi++){let Ki=ee()*2-1,Hs=ee()*Math.PI*2,Pl=Math.sqrt(1-Ki*Ki),oa=new N(Pl*Math.cos(Hs),Ki*.85,Pl*Math.sin(Hs)).normalize(),vr=Nt.clone().addScaledVector(oa,Kt*(.3+.7*Math.cbrt(ee()))),la=.8+ee()*.55,Il=oa.clone().add(new N(ee()-.5,ee()-.3,ee()-.5).multiplyScalar(.9)).normalize(),ca=new bn().setFromUnitVectors(We,Il).premultiply(new bn().setFromAxisAngle(Il,ee()*6.28)),yr=oa.clone().add(new N(0,.3,0)).normalize(),z=nn.length/3;[[-.5,-.5],[.5,-.5],[.5,.5],[-.5,.5]].forEach(([ze,tt])=>{let nt=new N(ze*la,tt*la,0).applyQuaternion(ca).add(vr);nn.push(nt.x,nt.y,nt.z),hn.push(yr.x,yr.y,yr.z),At.push(ze+.5,tt+.5),$t.push(vr.x,vr.y,vr.z);let ft=Fn*(.85+.3*ee());It.push(ft*(1+Hn),ft,ft*(1-Hn*.6))}),Tt.push(z,z+1,z+2,z,z+2,z+3)}let Zn=new kt;Zn.setAttribute("position",new Dt(nn,3)),Zn.setAttribute("normal",new Dt(hn,3)),Zn.setAttribute("uv",new Dt(At,2)),Zn.setAttribute("aCenter",new Dt($t,3)),Zn.setAttribute("color",new Dt(It,3)),Zn.setIndex(Tt),Fe.push(Zn)}function st(Nt,Kt,nn,hn,At){let $t=Ee(Nt,Kt,nn,hn);if(At===0){Qe($t,.9+ee()*.7),ee()<.7&&Qe($t.clone().add(new N((ee()-.5)*1.2,ee()*.6,(ee()-.5)*1.2)),.7+ee()*.5);return}let It=At>=3?3:2+(ee()<.4?1:0);for(let Tt=0;Tt<It;Tt++){let Fn=new N().crossVectors(Kt,new N(ee()-.5,.25,ee()-.5)).normalize(),Hn=Kt.clone().applyAxisAngle(Fn,.45+ee()*.7).add(new N(0,.18,0)).normalize();st($t,Hn,nn*(.68+ee()*.14),hn*.62,At-1)}At<=2&&Qe($t.clone().add(new N((ee()-.5)*.8,.3,(ee()-.5)*.8)),.8+ee()*.5)}st(new N(0,0,0),Me,2.6,.24,4);let mt=Wi(ae),Ze=mt.attributes.position,_e=mt.attributes.normal,bt=new Float32Array(Ze.count*3),ht=new Float32Array(Ze.count);for(let Nt=0;Nt<Ze.count;Nt++){let Kt=Tn(Ze.getX(Nt)*3,Ze.getY(Nt)*3+Ze.getZ(Nt),2,64,64,6);bt[Nt*3]=.16+Kt*.08,bt[Nt*3+1]=.12+Kt*.06,bt[Nt*3+2]=.09+Kt*.05,ht[Nt]=Pt(_e.getY(Nt)*1.5,0,1)*.85}return mt.setAttribute("color",new Ot(bt,3)),mt.setAttribute("aSnow",new Ot(ht,1)),{wood:mt,leaf:Wi(Fe)}}let K=[],ne=[[-11.5,-1,.95],[12.2,-3.6,1],[-9.5,-9.5,1.1],[8.5,-9.8,1.15],[-33,-9,1.15],[35,-8,1.05],[-26,11,1],[27,9,1],[-30,18.8,.75],[44,18.8,.75],[-9,-22,1.2],[14,-23,1.1]];[oe(31),oe(47)].forEach((X,ee)=>{let ae=ne.filter((Me,Ee)=>Ee%2===ee),Fe=(Me,Ee,We)=>{let Qe=new Ri(Me,Ee,ae.length),st=new Mt,mt=new bn,Ze=new N,_e=new N;return ae.forEach(([bt,ht,Nt],Kt)=>{mt.setFromAxisAngle(new N(0,1,0),(bt*7+ht*3)%6.28),Ze.set(bt,0,ht),_e.setScalar(Nt*.95),st.compose(Ze,mt,_e),Qe.setMatrixAt(Kt,st)}),Qe.castShadow=We,Qe.receiveShadow=!0,a.add(Qe),Qe};Fe(X.wood,$,!0),K.push(Fe(X.leaf,te,!0))});let ue=i.neighborRoof.clone();ue.onBeforeCompile=X=>{X.uniforms.uRoofSnow=p.uRoofSnow,X.fragmentShader=X.fragmentShader.replace("#include <common>",`#include <common>
uniform float uRoofSnow;`).replace("#include <map_fragment>",`#include <map_fragment>
diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.9, 0.93, 0.97), uRoofSnow * 0.92);`)},ue.customProgramCacheKey=()=>"nroof";let Ge=new yn({color:new it(1.5,.92,.42),transparent:!0,opacity:0}),Oe=new rn({color:659222,roughness:.08,metalness:.4,envMapIntensity:1.6}),Je=[],je=[],q=[];function gt(X){let{x:ee,z:ae,w:Fe,d:Me,h:Ee,rh:We,tone:Qe,rot:st=0,garage:mt,chimney:Ze}=X,_e=new at,bt=i.neighbor.clone();bt.color.setHex(Qe).multiplyScalar(1.9);let ht=new ln(Fe,Ee,Me);ia(ht,{oy:Ee/2});let Nt=new De(ht,bt);Nt.position.y=Ee/2,Nt.castShadow=!0,Nt.receiveShadow=!0,_e.add(Nt);let Kt=new oi;Kt.moveTo(-Fe/2-.5,0),Kt.lineTo(Fe/2+.5,0),Kt.lineTo(0,We),Kt.lineTo(-Fe/2-.5,0);let nn=new De(new gs(Kt,{depth:Me+1,bevelEnabled:!1}),ue);if(nn.position.set(0,Ee,-Me/2-.5),nn.castShadow=!0,nn.receiveShadow=!0,_e.add(nn),Ze){let It=new De(new ln(.7,2.4,.7),i.stone);It.position.set(Fe*.22,Ee+We*.55,-Me*.1),It.castShadow=!0,_e.add(It)}let hn=(It,Tt,Fn,Hn,Zn)=>{let Mi=new Mt().compose(new N(It,Tt,Fn),new bn().setFromAxisAngle(new N(0,1,0),Hn),new N(1,1,1)),Ki=new Mt().compose(new N(It,Tt,Fn).add(new N(Math.sin(Hn),0,Math.cos(Hn)).multiplyScalar(-.012)),new bn().setFromAxisAngle(new N(0,1,0),Hn),new N(1,1,1));(Zn?Je:je).push({g:_e,m:Mi}),q.push({g:_e,m:Ki})},At=Math.max(2,Math.round(Fe/2.4));for(let It=0;It<2;It++)for(let Tt=0;Tt<At;Tt++)mt&&It===0&&Tt===0||hn(-Fe/2+(Tt+.5)*(Fe/At),1.5+It*2.6,Me/2+.02,0,o()>.32);for(let It=0;It<2;It++)hn(Fe/2+.02,1.5+It*2.6,0,Math.PI/2,o()>.5),hn(-Fe/2-.02,1.5+It*2.6,0,-Math.PI/2,o()>.5);let $t=new De(new ln(2.2,2.1,.12),i.walnut);if($t.position.set(Fe/2-1.5,1.05,Me/2+.05),_e.add($t),mt){let It=new De(new ln(2.8,2.3,.14),i.cedar);It.position.set(-Fe/2+1.7,1.15,Me/2+.06),_e.add(It);for(let Tt=1;Tt<4;Tt++){let Fn=new De(new ln(2.8,.04,.16),i.trim);Fn.position.set(-Fe/2+1.7,Tt*.575,Me/2+.07),_e.add(Fn)}}return _e.position.set(ee,0,ae),_e.rotation.y=st,a.add(_e),dt.push([ee,Ee+We,ae]),_e}let dt=[];[{x:-17,z:-1,w:7.4,d:7,h:5.4,rh:2.6,tone:7304314,garage:!0,chimney:!0},{x:17.5,z:.5,w:6.8,d:6.6,h:4.8,rh:2.4,tone:8023912},{x:-33,z:-2,w:7.2,d:7.5,h:5.2,rh:2.5,tone:6251884,chimney:!0},{x:34,z:0,w:7.6,d:7,h:5.6,rh:2.8,tone:6975608,garage:!0},{x:-49,z:0,w:7,d:7,h:5,rh:2.4,tone:7565679},{x:50,z:-1,w:7,d:7,h:5.2,rh:2.4,tone:6712178,chimney:!0},{x:-66,z:1,w:7,d:7,h:5,rh:2.4,tone:7171954,garage:!0},{x:67,z:0,w:7,d:7,h:5,rh:2.4,tone:7369592},{x:-24,z:40,w:7,d:7,h:5.2,rh:2.5,tone:6975092,rot:Math.PI,garage:!0},{x:-8,z:41,w:7.4,d:7,h:5.4,rh:2.6,tone:7828073,rot:Math.PI,chimney:!0},{x:10,z:40,w:7,d:6.8,h:5,rh:2.4,tone:6843764,rot:Math.PI},{x:28,z:41,w:7.2,d:7,h:5.4,rh:2.6,tone:7500921,rot:Math.PI,garage:!0},{x:46,z:40,w:7,d:7,h:5.2,rh:2.4,tone:7106678,rot:Math.PI}].forEach(gt),a.updateMatrixWorld(!0);let O=(X,ee,ae)=>{let Fe=new Ri(ee,ae,X.length),Me=new Mt;return X.forEach(({g:Ee,m:We},Qe)=>{Me.multiplyMatrices(Ee.matrixWorld,We),Fe.setMatrixAt(Qe,Me)}),Fe.userData.noAO=!1,a.add(Fe),Fe},E=new cn(1,1.15),j=new cn(1.16,1.31),se=[];O(Je,E,Ge),O(je,E,Oe),O(q,j,i.trim);let fe=new at;fe.visible=!1,a.add(fe);let Ve=new jt(.05,.05,1,8,1,!0),ke=[],Te=new N(0,12.6,0);dt.forEach(([X,ee,ae],Fe)=>{let Me=new N(X,ee+3.4,ae),Ee=new gi(new ri({map:n,transparent:!0,depthWrite:!1,depthTest:!1,opacity:0}));Ee.position.copy(Me),Ee.renderOrder=12,Ee.userData.noAO=!0,fe.add(Ee);let We=new De(Ve,new yn({color:new it(2.2,1.3,.55),transparent:!0,opacity:0,blending:_n,depthWrite:!1,toneMapped:!1}));We.scale.set(1,3.2,1),We.position.set(X,ee+1.6,ae),We.userData.noAO=!0,We.raycast=()=>{},fe.add(We);let Qe=Me.clone().lerp(Te,.5);Qe.y+=5+Me.distanceTo(Te)*.18;let st=new Ci([Me,Me.clone().lerp(Qe,.5).setY(Qe.y*.9),Qe,Qe.clone().lerp(Te,.5).setY(Qe.y*.9),Te]),mt=40,Ze=new De(new Ii(st,mt,.07,5,!1),new yn({color:new it(2.4,1.4,.6),transparent:!0,opacity:0,blending:_n,depthWrite:!1,toneMapped:!1}));Ze.userData.noAO=!0,Ze.raycast=()=>{},fe.add(Ze);let _e=9,bt=new kt;bt.setAttribute("position",new Ot(new Float32Array(_e*3),3));let ht=new xi(bt,new ai({size:.9,map:c,color:new it(2.4,1.5,.7),transparent:!0,depthWrite:!1,blending:_n,toneMapped:!1}));ht.frustumCulled=!1,ht.userData.noAO=!0,ht.raycast=()=>{},fe.add(ht),ke.push({spr:Ee,bm:We,tube:Ze,segs:mt,curve:st,pts:ht,n:_e,d:Me.distanceTo(Te),delay:0})}),ke.sort((X,ee)=>X.d-ee.d),ke.forEach((X,ee)=>{X.delay=ee/ke.length});let ve=new gi(new ri({map:n,transparent:!0,depthWrite:!1,depthTest:!1,opacity:0}));ve.position.copy(Te).add(new N(0,1.2,0)),ve.scale.set(4.2,4.2,1),ve.renderOrder=13,ve.userData.noAO=!0,fe.add(ve);let Ke=new N;function xt(X,ee){fe.visible=X>.003,fe.visible&&(ve.material.opacity=Et(0,.15,X),ve.scale.setScalar(4.2+Math.sin(ee*3)*.3),ke.forEach(ae=>{let Fe=Et(ae.delay*.7,ae.delay*.7+.3,X);ae.spr.material.opacity=Fe,ae.spr.scale.setScalar(2.4*(.6+.4*Fe)),ae.bm.material.opacity=.5*Fe,ae.bm.scale.y=3.2+6*Fe,ae.bm.position.y=ae.spr.position.y-ae.bm.scale.y/2-1.6;let Me=Math.floor(Et(.1+ae.delay*.6,.45+ae.delay*.6,X)*ae.segs)*5*6;ae.tube.geometry.setDrawRange(0,Me),ae.tube.material.opacity=.34*Fe*(.8+.2*Math.sin(ee*3+ae.delay*9));let Ee=ae.pts.geometry.attributes.position.array,We=Et(.1+ae.delay*.6,.45+ae.delay*.6,X);for(let Qe=0;Qe<ae.n;Qe++){let st=(Qe/ae.n+ee*.16+ae.delay)%1;if(st>We){Ee[Qe*3+1]=-999;continue}ae.curve.getPointAt(st,Ke),Ee[Qe*3]=Ke.x,Ee[Qe*3+1]=Ke.y,Ee[Qe*3+2]=Ke.z}ae.pts.geometry.attributes.position.needsUpdate=!0,ae.pts.material.opacity=Fe}))}let D=new rn({color:4864555,roughness:.95}),J=new yn({color:723724}),le=[];(()=>{let X=new at;X.position.set(-3.4,0,-11.4),a.add(X);let ee=7.4,ae=6.4,Fe=3.1,Me=new ln(ee,Fe,ae);ia(Me,{oy:Fe/2});let Ee=new De(Me,i.bb.clone());Ee.material.color.setScalar(1),Ee.position.y=Fe/2,Ee.castShadow=!0,Ee.receiveShadow=!0,X.add(Ee);let We=new oi;We.moveTo(-ee/2-.45,0),We.lineTo(ee/2+.45,0),We.lineTo(0,1.9),We.lineTo(-ee/2-.45,0);let Qe=new De(new gs(We,{depth:ae+.9,bevelEnabled:!1}),ue);Qe.position.set(0,Fe,-ae/2-.45),Qe.castShadow=!0,Qe.receiveShadow=!0,X.add(Qe);for(let mt=0;mt<2;mt++){let Ze=-1.8+mt*3.6,_e=new De(new ln(3.1,2.4,.12),i.walnut);_e.position.set(Ze,1.2,-ae/2-.05),_e.castShadow=!0,X.add(_e);for(let Nt=1;Nt<4;Nt++){let Kt=new De(new ln(3.1,.04,.14),i.trim);Kt.position.set(Ze,Nt*.6,-ae/2-.08),X.add(Kt)}let bt=new De(new ln(2.7,.3,.14),i.mirror);bt.position.set(Ze,2.05,-ae/2-.09),X.add(bt);let ht=new De(new ln(3.3,2.55,.1),i.trim);ht.position.set(Ze,1.27,-ae/2-0),X.add(ht)}[-3.3,3.3].forEach(mt=>{let Ze=new De(new jt(.07,.08,.26,12),i.sconce);Ze.position.set(mt,2.55,-ae/2-.2),Ze.userData.noAO=!0,X.add(Ze);let _e=new gi(new ri({map:t,transparent:!0,depthWrite:!1,blending:_n,opacity:0}));_e.position.set(mt,2.55,-ae/2-.5),_e.scale.set(2.2,2.2,1),_e.userData.noAO=!0,X.add(_e),le.push(_e)});let st=new De(new cn(1,1),new yn({map:h,transparent:!0,depthWrite:!1,blending:_n,opacity:0}));st.rotation.x=-Math.PI/2,st.position.set(0,.05,-ae/2-2.2),st.scale.set(10,5,1),st.userData.noAO=!0,X.add(st),le.pool=st})();let ge=[-75.2,-49.2,-23.2,2.8,28.8,54.8,80.8];ge.forEach(X=>{let ee=new at;ee.position.set(X,0,-15.5),a.add(ee);let ae=new De(new jt(.13,.19,9.8,10),D);ae.position.y=4.9,ae.castShadow=!0,ee.add(ae);let Fe=new De(new ln(.12,.12,2.2),D);if(Fe.position.y=9.2,ee.add(Fe),[-.85,0,.85].forEach(Me=>{let Ee=new De(new jt(.04,.05,.2,8),i.ceramic);Ee.position.set(0,9.36,Me),ee.add(Ee)}),Math.abs(X-2.8)<1){let Me=new De(new jt(.3,.3,.95,14),i.steel);Me.position.set(.5,8.35,.2),Me.castShadow=!0,ee.add(Me);let Ee=new De(new jt(.2,.3,.12,14),i.steel);Ee.position.set(.5,8.9,.2),ee.add(Ee)}});let Le=[];for(let X=0;X<ge.length-1;X++)[-.85,0,.85].forEach(ee=>{let ae=new N(ge[X],9.4,-15.5+ee),Fe=new N(ge[X+1],9.4,-15.5+ee),Me=ae.clone().lerp(Fe,.5);Me.y-=.9,Le.push(new Ii(new Ci([ae,ae.clone().lerp(Me,.5).setY(9.4-.45),Me,Me.clone().lerp(Fe,.5).setY(9.4-.45),Fe]),24,.022,4))});{let X=new N(2.8,9.4,-15.5),ee=new N(2.8,5.4,-4.3),ae=X.clone().lerp(ee,.5);ae.y-=.7,Le.push(new Ii(new Ci([X,ae,ee]),20,.026,4))}let B=new De(Wi(Le),J);B.castShadow=!1,B.raycast=()=>{},a.add(B);let Se=new at,re=[],Ne={front:null,rear:null},Re=new at;(()=>{let X=new Yi({color:1784408,metalness:.65,roughness:.3,clearcoat:1,clearcoatRoughness:.08,envMapIntensity:1.5}),ee=new Yi({color:395533,metalness:.2,roughness:.04,clearcoat:1,envMapIntensity:1.8}),ae=new rn({color:1052946,roughness:.85}),Fe=new rn({color:12107462,metalness:.9,roughness:.25}),Me=new oi;Me.moveTo(-2.3,.28),Me.lineTo(-2.38,.6),Me.quadraticCurveTo(-2.36,.92,-2.05,.98),Me.lineTo(1.35,.98),Me.quadraticCurveTo(2.05,.9,2.3,.7),Me.lineTo(2.34,.44),Me.quadraticCurveTo(2.3,.28,2.1,.28),Me.lineTo(-2.3,.28);let Ee=new De(new gs(Me,{depth:1.7,bevelEnabled:!0,bevelThickness:.09,bevelSize:.09,bevelSegments:4,curveSegments:14}),X);Ee.geometry.translate(0,0,-.85),Ee.castShadow=!0,Se.add(Ee);let We=new oi;We.moveTo(-1.95,.96),We.quadraticCurveTo(-1.55,1.42,-.95,1.46),We.lineTo(.5,1.44),We.quadraticCurveTo(.95,1.4,1.38,.96),We.lineTo(-1.95,.96);let Qe=new De(new gs(We,{depth:1.62,bevelEnabled:!0,bevelThickness:.07,bevelSize:.05,bevelSegments:3,curveSegments:12}),ee);Qe.geometry.translate(0,0,-.81),Qe.castShadow=!0,Se.add(Qe);let st=new De(new Ms(1.9,.07,1.6,2,.03),X);st.position.set(-.2,1.47,0),Se.add(st),[[-1.4,.8],[1.4,.8],[-1.4,-.8],[1.4,-.8]].forEach(([At,$t])=>{let It=new De(new jt(.37,.37,.26,24),ae);It.rotation.x=Math.PI/2,It.position.set(At,.37,$t*1+Math.sign($t)*.04),It.castShadow=!0,Se.add(It);let Tt=new De(new jt(.23,.23,.27,20),Fe);Tt.rotation.x=Math.PI/2,Tt.position.copy(It.position),Se.add(Tt)});let mt=new rn({color:1118481,emissive:16777215,emissiveIntensity:.1}),Ze=new rn({color:2228224,emissive:16722458,emissiveIntensity:.1}),_e=new De(new ln(.06,.05,1.5),mt);_e.position.set(2.33,.72,0),_e.userData.noAO=!0,Se.add(_e);let bt=new De(new ln(.06,.05,1.5),Ze);bt.position.set(-2.4,.78,0),bt.userData.noAO=!0,Se.add(bt),Ne.front=mt,Ne.rear=Ze;let ht=new De(new Ms(1.8,.07,1.5,2,.03),i.snowRoof);ht.userData.keep=!0,ht.position.set(-.2,1.54,0),Se.add(ht),re.push(ht);let Nt=new De(new Ms(1,.05,1.45,2,.02),i.snowRoof);Nt.userData.keep=!0,Nt.position.set(1.6,1,0),Nt.rotation.z=-.1,Se.add(Nt),re.push(Nt),Se.position.set(7.9,0,6.3),Se.rotation.y=-Math.PI/2,a.add(Se);let Kt=[new N(5.2,1.2,2.5),new N(5.55,.5,2.85),new N(6.15,.12,3.3),new N(6.7,.4,3.75),new N(7,.82,3.95)],nn=new De(new Ii(new Ci(Kt),24,.028,6),new rn({color:855310,roughness:.6}));nn.castShadow=!0,Re.add(nn);let hn=new De(new Ln(.05,10,8),new yn({color:new it(.4,3,1.2)}));hn.position.set(5.16,1.5,2.5),hn.userData.noAO=!0,Re.add(hn),Re.userData.led=hn,a.add(Re)})();let U=r?0:s>=1?2200:900,be=new kt,ce=new Float32Array(U*3),et=new Float32Array(U*2),ot=[90,40,90];for(let X=0;X<U;X++)ce[X*3]=(o()-.5)*ot[0],ce[X*3+1]=o()*ot[1],ce[X*3+2]=(o()-.5)*ot[2],et[X*2]=.7+o()*1.1,et[X*2+1]=o()*6.28;be.setAttribute("position",new Ot(ce,3));let Ct=new ai({color:16777215,size:.11,map:c,transparent:!0,opacity:.85,depthWrite:!1,blending:_n}),Lt=new xi(be,Ct);Lt.frustumCulled=!1,Lt.userData.noAO=!0,a.add(Lt);let Wt=s>=1&&!r?140:0,tn=new kt,Bn=new Float32Array(Wt*3);for(let X=0;X<Wt;X++)Bn[X*3]=(o()-.5)*50,Bn[X*3+1]=o()*22,Bn[X*3+2]=(o()-.5)*50;tn.setAttribute("position",new Ot(Bn,3));let pn=new ai({color:14674175,size:.42,map:c,transparent:!0,opacity:.22,depthWrite:!1,blending:_n}),R=new xi(tn,pn);R.frustumCulled=!1,R.userData.noAO=!0,a.add(R);let pe=r?0:s>=1?1600:700,Pe=new kt,Ye=new Float32Array(pe*6),qe=new Float32Array(pe),St=[70,30,70];for(let X=0;X<pe;X++){let ee=(o()-.5)*St[0],ae=o()*St[1],Fe=(o()-.5)*St[2];Ye.set([ee,ae,Fe,ee-.04,ae+.7,Fe],X*6),qe[X]=14+o()*6}Pe.setAttribute("position",new Ot(Ye,3));let lt=new Tr({color:11455464,transparent:!0,opacity:0,depthWrite:!1}),_t=new $s(Pe,lt);_t.frustumCulled=!1,_t.userData.noAO=!0,_t.raycast=()=>{},a.add(_t);let vt=r?0:s>=1?420:160,zt=new kt,Ht=new Float32Array(vt*3),Mn=new Float32Array(vt*2),bi=new Float32Array(vt*3),Fi=[80,22,80],Oi=[[.95,.55,.1],[.85,.3,.08],[.9,.75,.15],[.6,.2,.05]];for(let X=0;X<vt;X++){Ht[X*3]=(o()-.5)*Fi[0],Ht[X*3+1]=o()*Fi[1],Ht[X*3+2]=(o()-.5)*Fi[2],Mn[X*2]=.5+o()*.8,Mn[X*2+1]=o()*6.28;let ee=Oi[X%4];bi.set(ee,X*3)}zt.setAttribute("position",new Ot(Ht,3)),zt.setAttribute("color",new Ot(bi,3));let Ti=new xi(zt,new ai({size:.2,vertexColors:!0,map:c,transparent:!0,opacity:.9,depthWrite:!1}));Ti.frustumCulled=!1,Ti.userData.noAO=!0,a.add(Ti);let Ji=[];for(let X=0;X<22;X++){let ee=new gi(new ri({map:l,transparent:!0,depthWrite:!1,opacity:0,color:12568276}));ee.userData={age:X/22*6,noAO:!0},ee.renderOrder=5,a.add(ee),Ji.push(ee)}let I=new De(xe,rt);I.position.set(.9,0,-12.4),I.scale.setScalar(.75),I.castShadow=!0,I.visible=!1,a.add(I);let ie=new Set([T,x,C,F,b,P,H,w,I]),Ae=new at;a.add(Ae),a.children.slice().forEach(X=>{X!==Ae&&!ie.has(X)&&Ae.add(X)});let me=new N;function ye(X){Ct.color.set(X?6963104:16777215)}function ut(X,ee,ae,Fe,Me,Ee,We){f.opacity=X.ground,f.depthWrite=X.ground>.95,T.visible=X.ground>.01,_.forEach(Ze=>{let _e=X.ground<.99;Ze.transparent!==_e&&(Ze.transparent=_e,Ze.needsUpdate=!0),Ze.opacity=X.ground,Ze.depthWrite=!_e}),p.uSnow.value=X.snow,p.uRoofSnow.value=X.roofSnow,p.uGrow.value=X.grow,p.uLeafTint.value.copy(X.leafTint),xt(X.beacons||0,ee),I.visible=X.section>.3,H.visible=X.snow>.25,K.forEach(Ze=>{Ze.visible=X.grow>.02,Ze.castShadow=X.grow>.5}),re.forEach(Ze=>{Ze.visible=X.snow>.5}),Re.visible=X.explode<.05,Se.visible=!0;let Qe=1-Fe;Ne.front.emissiveIntensity=.1+2.2*Qe,Ne.rear.emissiveIntensity=.1+3*Qe,Re.userData.led.scale.setScalar(.8+.25*Math.sin(ee*3));let st=Et(.35,.9,X.ground);Ue.forEach(Ze=>{Ze.visible=X.ground>.5||X.explode>.05}),Z.forEach(Ze=>{Ze.halo.material.opacity=.75*Qe,Ze.pool.material.opacity=.55*Qe*st}),we.intensity=55*Qe,Ie.intensity=40*Qe,G.color.setRGB(3.2,2.2,1.1).multiplyScalar(.06+.94*Qe),le.forEach(Ze=>{Ze.material.opacity=.5*Qe}),le.pool.material.opacity=.4*Qe*st,Xe.forEach((Ze,_e)=>{Ze.material.opacity=.5*Qe*Pt(yt(We,_e),0,1)*(1-X.ghost)*st}),Ge.opacity=Qe*.9,Lt.position.set(Me.x,0,Me.z),R.position.set(Me.x,0,Me.z),_t.position.set(Me.x,0,Me.z),Ti.position.set(Me.x,0,Me.z);let mt=X.snowfall;if(Lt.visible=R.visible=mt>.02&&U>0,Lt.visible){let Ze=be.attributes.position.array;for(let bt=0;bt<U;bt++)Ze[bt*3+1]-=et[bt*2]*ae*1.5,Ze[bt*3]+=Math.sin(ee*.7+et[bt*2+1])*ae*.3,Ze[bt*3+2]+=Math.cos(ee*.5+et[bt*2+1])*ae*.2,Ze[bt*3+1]<0&&(Ze[bt*3+1]=ot[1]);be.attributes.position.needsUpdate=!0;let _e=tn.attributes.position.array;for(let bt=0;bt<Wt;bt++)_e[bt*3+1]-=.8*ae,_e[bt*3+1]<0&&(_e[bt*3+1]=22);tn.attributes.position.needsUpdate=!0,Ct.opacity=.8*mt*(1-Fe*.45),pn.opacity=.2*mt*(1-Fe*.5)}if(_t.visible=X.rain>.02&&pe>0,_t.visible){let Ze=Pe.attributes.position.array;for(let _e=0;_e<pe;_e++){let bt=qe[_e]*ae;Ze[_e*6+1]-=bt,Ze[_e*6+4]-=bt,Ze[_e*6+4]<0&&(Ze[_e*6+1]+=St[1],Ze[_e*6+4]+=St[1])}Pe.attributes.position.needsUpdate=!0,lt.opacity=.32*X.rain}if(Ti.visible=X.leaves>.02&&vt>0,Ti.visible){let Ze=zt.attributes.position.array;for(let _e=0;_e<vt;_e++)Ze[_e*3+1]-=Mn[_e*2]*ae*.9,Ze[_e*3]+=(Math.sin(ee*.9+Mn[_e*2+1])*.7+.35)*ae,Ze[_e*3+2]+=Math.cos(ee*.6+Mn[_e*2+1])*.4*ae,Ze[_e*3+1]<0&&(Ze[_e*3+1]=Fi[1]);zt.attributes.position.needsUpdate=!0,Ti.material.opacity=.9*X.leaves}Ji.forEach(Ze=>{Ze.userData.age+=ae*.55,Ze.userData.age>6&&(Ze.userData.age-=6);let _e=Ze.userData.age/6;me.copy(Ee),me.y+=_e*5.2,me.x+=_e*2.2+Math.sin(_e*5+Ze.id)*.18,me.z+=Math.cos(_e*3+Ze.id)*.15,Ze.position.copy(me),Ze.scale.setScalar(.5+_e*2.6),Ze.material.opacity=Math.sin(Math.PI*Math.min(1,_e*1.3))*.34*X.smoke*(.5+.5*Qe)})}let yt=(X,ee)=>X-ee*.3;return{world:a,ground:T,groundMat:f,U:p,update:ut,lamps:Z,setThermal:ye,evGroup:Se,props:Ae,sight:Rp}}var Nn={wire:16761963,cold:5220095,hot:16739151,drain:10135476,supply:9433288,ret:9083903,radon:14257407},Xd=2.4;function Pp({house:i,reduce:e}){let t=(b,L,P)=>new N(b,L,P),n=dr("rgba(255,255,255,0.6)"),s={netE:[],netW:[],netA:[],netR:[]},r={netE:[],netW:[],netA:[],netR:[]},a={};Object.keys(s).forEach(b=>{a[b]=new at,a[b].visible=!1,a[b].userData.noAO=!0,i.add(a[b])});let o=b=>{let L=new Ga;for(let P=1;P<b.length;P++)L.add(new wr(b[P-1],b[P]));return L};function c(b,L,P,H,Z){let V=o(L.map(Xe=>t(Xe[0],Xe[1],Xe[2]))),W=V.getLength(),G=Math.max(6,Math.round(W*7)),k=6,Y=new yn({color:P,toneMapped:!1,fog:!1,transparent:!0});Y.color.multiplyScalar(1.5);let he=new De(new Ii(V,G,H,k,!1),Y),we=new yn({color:P,transparent:!0,opacity:.2,blending:_n,depthWrite:!1,toneMapped:!1,fog:!1});we.color.multiplyScalar(Xd);let Ie=new De(new Ii(V,G,H*3.4,k,!1),we);he.renderOrder=7,Ie.renderOrder=8,he.userData.noAO=Ie.userData.noAO=!0,he.raycast=Ie.raycast=()=>{},a[b].add(he,Ie),s[b].push({tube:he,glow:Ie,segs:G,radial:k,gmat:we}),Z&&r[b].push({curve:V,len:W,n:Math.max(3,Math.round(W*Z.density)),speed:Z.speed,color:Z.color||P})}let l=[];for(let b=0;b<=10;b++){let L=b/10;l.push([2.8,$e(9.1,7.7,L)-1*Math.sin(Math.PI*L),$e(-15.5,-4.45,L)])}c("netE",[...l,[2.8,1.45,-4.3],[2.8,-.35,-4.3],[2.8,-.35,-3.86],[2.8,-.72,-3.86]],Nn.wire,.045,{density:2.2,speed:6});let h=[2.8,-.72,-3.78],p=[2.8,-.2,-3.78];c("netE",[h,p,[2.2,-.2,-3.78],[2.2,1.35,-3.9],[4.6,1.35,-3.9]],Nn.wire,.032,{density:2.5,speed:5}),c("netE",[h,p,[4.94,-.2,-3.78],[4.94,-.2,3.7],[4.94,.6,3.92],[1.45,.6,3.92],[1.45,2.45,3.92],[.05,2.45,3.92],[.05,.6,3.92],[-4.94,.6,3.92],[-4.94,.6,-3.2]],Nn.wire,.032,{density:2.5,speed:5}),c("netE",[h,p,[4.94,-.2,-3.78],[4.94,3.85,-3.78],[4.94,3.85,3.92],[-4.94,3.85,3.92],[-4.94,3.85,-2.4]],Nn.wire,.032,{density:2.5,speed:5}),c("netE",[h,p,[1.28,-.2,-3.78],[1.28,-.2,-1],[1.28,3.05,-1],[-1.5,3.05,-1],[-1.5,3.05,.5]],Nn.wire,.03,{density:2.5,speed:5}),c("netE",[[1.28,3.05,-1],[3,3.05,-1],[3,3.05,-1.6]],Nn.wire,.03,{density:2.5,speed:5}),c("netE",[h,p,[4.94,-.2,-3.78],[4.94,-.2,2.5],[4.94,1.3,2.5],[5.1,1.3,2.5]],Nn.wire,.034,{density:2.5,speed:5}),c("netW",[[-.5,-2.2,16],[-.5,-2.2,3.75],[-.5,-.32,3.75],[-.5,-.32,-3],[-1.95,-.32,-3],[-1.95,-1.35,-3]],Nn.cold,.072,{density:2,speed:2.4}),c("netW",[[-.5,-.32,-3.2],[2.4,-.32,-3.2],[2.4,-.32,-3.7],[2.4,1.05,-3.7]],Nn.cold,.051,{density:2,speed:2.4}),c("netW",[[-.5,-.32,-3.45],[-2.3,-.32,-3.45],[-2.3,3.95,-3.45],[-2.3,3.95,-3.62]],Nn.cold,.051,{density:2,speed:2.4}),c("netW",[[-2.3,3.6,-3.45],[-3.4,3.6,-3.45]],Nn.cold,.051,{density:2,speed:2.4}),c("netW",[[-2.2,-1.35,-3],[-2.2,-.46,-3],[-2.2,-.46,-3.32],[2.55,-.46,-3.32],[2.55,-.46,-3.72],[2.55,1.05,-3.72]],Nn.hot,.051,{density:2,speed:2.4}),c("netW",[[-2.2,-.46,-3.32],[-2.47,-.46,-3.32],[-2.47,3.95,-3.32],[-2.47,3.95,-3.6]],Nn.hot,.051,{density:2,speed:2.4}),c("netW",[[-2.47,3.6,-3.32],[-3.5,3.6,-3.32]],Nn.hot,.051,{density:2,speed:2.4}),c("netW",[[-3.6,3.48,-3.62],[-2.6,3.48,-3.62],[-2.6,-2.95,-3.62],[.6,-2.95,-3.62],[.6,-3.2,-4.3],[.6,-3.45,-9.5]],Nn.drain,.087,{density:1.6,speed:2.8}),c("netW",[[2.6,.95,-3.86],[2.6,-2.9,-3.86],[.75,-2.9,-3.86]],Nn.drain,.072,{density:1.6,speed:2.8}),c("netW",[[-2.6,3.48,-3.62],[-2.6,10.2,-3.62]],Nn.drain,.065,null);let d=[-3.3,-1.15,-2.6],u=[-3.3,-.12,-2.6];c("netA",[d,u,[2.6,-.12,-2.6],[4.4,-.12,-2.6],[4.4,-.12,-1.2],[4.4,.34,-1.2]],Nn.supply,.091,{density:1.6,speed:3.2}),c("netA",[u,[-2,-.12,-2.6],[-2,-.12,3.4],[-2,.34,3.4]],Nn.supply,.078,{density:1.6,speed:3.2}),c("netA",[[3.1,-.12,-2.6],[3.1,-.12,3.45],[3.1,.34,3.45]],Nn.supply,.078,{density:1.6,speed:3.2}),c("netA",[[1.28,-.12,-2.6],[1.28,3.35,-2.6],[3.8,3.35,-2.6],[3.8,3.35,2.9],[3.8,3.52,2.9]],Nn.supply,.078,{density:1.6,speed:3.2}),c("netA",[[1.28,3.35,-2.6],[-3.8,3.35,-2.6],[-3.8,3.35,2],[-3.8,3.52,2]],Nn.supply,.078,{density:1.6,speed:3.2}),c("netA",[[-1.75,5.6,1],[-1.75,-.32,1],[-3.3,-.32,1],[-3.3,-.32,-2.15],[-3.3,-1.05,-2.15]],Nn.ret,.091,{density:1.6,speed:2.4}),c("netR",[[-1.2,-2.92,-1.5],[-1.2,11.6,-1.5]],Nn.radon,.075,{density:2.2,speed:2.6});let f={},v=new it,m=new it(16777215);Object.keys(r).forEach(b=>{let L=r[b];if(!L.length)return;let P=L.reduce((k,Y)=>k+Y.n,0),H=new kt;H.setAttribute("position",new Ot(new Float32Array(P*3),3));let Z=new Float32Array(P*3),V=0;L.forEach(k=>{v.set(k.color).lerp(m,.45).multiplyScalar(Xd);for(let Y=0;Y<k.n;Y++,V++)Z[V*3]=v.r,Z[V*3+1]=v.g,Z[V*3+2]=v.b}),H.setAttribute("color",new Ot(Z,3));let W=new ai({size:b==="netE"?.2:.26,map:n,vertexColors:!0,transparent:!0,depthWrite:!1,blending:_n,toneMapped:!1,fog:!1}),G=new xi(H,W);G.frustumCulled=!1,G.renderOrder=9,G.raycast=()=>{},a[b].add(G),f[b]=G});let g=e?0:260,M=new kt,S=new Float32Array(g*3),y=new Float32Array(g),_=t(-1.2,-2.95,-1.5),T=b=>{S[b*3]=(Math.random()-.5)*9.4,S[b*3+1]=-3.05-Math.random()*1.6,S[b*3+2]=(Math.random()-.5)*7.4,y[b]=.4+Math.random()*.8};for(let b=0;b<g;b++)T(b);M.setAttribute("position",new Ot(S,3));let A=new ai({color:new it(Nn.radon).multiplyScalar(Xd),size:.2,map:dr("rgba(217,140,255,0.6)"),transparent:!0,opacity:0,depthWrite:!1,blending:_n,toneMapped:!1,fog:!1}),x=new xi(M,A);x.frustumCulled=!1,x.raycast=()=>{},a.netR.add(x);let w=new N,C={netE:1,netW:1,netA:1,netR:1};function F(b,L,P,H){let Z=b.explode<.06;if(Object.keys(s).forEach(V=>{let W=b[V],G=a[V];if(G.visible=Z&&W>.003,!G.visible)return;let k=!L||L===V?1:.2,Y=C[V]=$e(C[V],k,Math.min(1,H*4));s[V].forEach(we=>{let Ie=Math.floor(Pt(W,0,1)*we.segs)*we.radial*6;we.tube.geometry.setDrawRange(0,Ie),we.glow.geometry.setDrawRange(0,Ie),we.tube.material.opacity=Y,we.gmat.opacity=(.22+.1*Math.sin(P*3+we.segs))*Y});let he=f[V];if(he){let we=he.geometry.attributes.position.array,Ie=0;r[V].forEach(Xe=>{for(let rt=0;rt<Xe.n;rt++,Ie++){let Q=(rt/Xe.n+P*Xe.speed/Xe.len)%1;if(Q>W){we[Ie*3+1]=-999;continue}Xe.curve.getPointAt(Q,w),we[Ie*3]=w.x,we[Ie*3+1]=w.y,we[Ie*3+2]=w.z}}),he.geometry.attributes.position.needsUpdate=!0,he.material.opacity=Pt(W*3,0,1)*Y}}),g&&a.netR.visible){A.opacity=Pt(b.netR*2,0,.9)*C.netR;for(let V=0;V<g;V++){w.set(_.x-S[V*3],_.y-S[V*3+1],_.z-S[V*3+2]);let W=w.length();if(W<.25){T(V);continue}w.multiplyScalar(H*y[V]*1.1/W),S[V*3]+=w.x+Math.sin(P+V)*H*.15,S[V*3+1]+=w.y,S[V*3+2]+=w.z}M.attributes.position.needsUpdate=!0}}return{groups:a,update:F}}var oy=`varying vec3 vW; varying vec3 vN;
void main(){ vec4 w = modelMatrix * vec4(position, 1.0);
#ifdef USE_INSTANCING
  w = modelMatrix * instanceMatrix * vec4(position, 1.0);
#endif
  vW = w.xyz; vN = normalize(mat3(modelMatrix) * normal); gl_Position = projectionMatrix * viewMatrix * w; }`,ly=`uniform float uBase, uGrad, uBand, uTime; varying vec3 vW; varying vec3 vN;
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
  gl_FragColor = vec4(toLinear(iron(t + rim)), 1.0); }`;function Ip({scene:i,M:e,skipParents:t,onChange:n}){let s={value:0},r=new Map;function a(d,u=0,f=0){let v=d+"|"+u+"|"+f;return r.has(v)||r.set(v,new mn({uniforms:{uBase:{value:d},uGrad:{value:u},uBand:{value:f},uTime:s},vertexShader:oy,fragmentShader:ly})),r.get(v)}let o={hvac:.93,"water-heaters":.88,electrical:.6,plumbing:.56,installation:.5,radon:.22,solar:.17,roofing:[.4,.12],foundation:.33,sewer:.3,asbestos:.5};function c(d,u){if(u&&o[u]!==void 0)return a(...[].concat(o[u]));let f=d.userData&&d.userData.th;return f?a(...f):a(.3)}let l=[],h=!1;function p(d){d!==h&&(h=d,i.traverse(u=>{if(u.isSprite&&u.userData.noAO){u.visible=!h&&(u.userData.wasVisible??!0);return}if(!(!(u.isMesh||u.isInstancedMesh)||!u.material)&&!u.userData.noThermal){for(let f=u.parent;f;f=f.parent)if(t.includes(f))return;h?(u.userData.mat0=u.material,u.material=Array.isArray(u.material)?u.material.map(f=>c(f,u.userData.sys)):c(u.material,u.userData.sys)):u.userData.mat0&&(u.material=u.userData.mat0,u.userData.mat0=null)}}),n&&n(h))}return{set:p,time:s,get on(){return h}}}function Dp({M:i,layers:e,glowTex:t}){let n=[],s=(u,f=.7,v=0,m=[.5],g={})=>{let M=new rn({color:u,roughness:f,metalness:v,...g});return M.userData.th=m,M},r=(u,f=[.95])=>{let v=new rn({color:2236440,emissive:u,emissiveIntensity:0,roughness:.5});return v.userData.th=f,n.push(v),v},a={rug:s(5787722,1),rug2:s(3884628,1),cushion:s(13215610,.95),cushion2:s(9413544,.95),tvBlack:s(789775,.25,.3,[.6]),book1:s(9190190,.8),book2:s(3100522,.8),book3:s(14208440,.8),plant:s(4156218,.9,0,[.3]),pot:s(14209734,.6),sheets:s(15328474,.95),duvet:s(7043718,.95),wood:s(10122320,.55),woodDark:s(4929062,.55),steel:s(11186358,.3,.9,[.55]),quartz:s(15328991,.25,0,[.5]),cabinet:s(3812386,.5,0,[.5]),tile:s(13620952,.4,0,[.4]),bin:s(3829659,.6),bin2:s(12936750,.6),cardboard:s(11570526,.9),tv:r(10274047,[.85]),lamp:r(16762746),pendant:r(16765594),screen:r(13625599,[.8]),led:r(6750105,[.7]),pot:s(14868180,.55)},o=(u,f,v,m,g,M,S,y,_,T=0)=>{let A=new De(new Ms(u,f,v,2,Math.min(m,u/2-.001,f/2-.001,v/2-.001)),g);return A.position.set(M,S+f/2,y),A.rotation.y=T,A.castShadow=!0,A.receiveShadow=!0,A.userData.noPick=!0,_.add(A),A},c=(u,f,v,m,g,M,S,y=18)=>{let _=new De(new jt(u,u,f,y),v);return _.position.set(m,g+f/2,M),_.castShadow=!0,_.receiveShadow=!0,_.userData.noPick=!0,S.add(_),_},l=(u,f,v,m,g,M,S=1)=>{let y=new De(new Ln(u,14,10),f);return y.position.set(v,m,g),y.scale.y=S,y.castShadow=!0,y.userData.noPick=!0,M.add(y),y},h=(u,f,v,m,g,M=a.woodDark)=>{let S=new at;return S.position.set(u,f,v),S.rotation.y=m,g.add(S),o(.44,.05,.44,.02,M,0,.44,0,S),[[-.19,-.19],[.19,-.19],[-.19,.19],[.19,.19]].forEach(([y,_])=>c(.02,.44,a.steel,y,0,_,S,8)),o(.44,.45,.04,.02,M,0,.5,-.2,S),S},p=(u,f,v,m,g=1.4)=>{c(.14,.03,a.steel,u,f,v,m,14),c(.015,g,a.steel,u,f,v,m,8);let M=new De(new jt(.17,.24,.3,18,1,!0),a.lamp);return M.material.side=Xn,M.position.set(u,f+g+.05,v),M.userData.noAO=!0,M.userData.noPick=!0,m.add(M),M};(()=>{let u=e.main,f=.3;o(3.4,.02,2.5,.01,a.rug,-2.3,f,.7,u);let v=new at;v.position.set(-.9,f,.7),v.rotation.y=-Math.PI/2,u.add(v),o(2.3,.4,.95,.1,a.fabric??i.fabric,0,.1,0,v),o(2.3,.45,.25,.1,i.fabric,0,.45,-.38,v),o(.25,.3,.9,.08,i.fabric,-1.07,.3,0,v),o(.25,.3,.9,.08,i.fabric,1.07,.3,0,v),o(.5,.4,.14,.06,a.cushion,-.6,.55,-.1,v),o(.5,.4,.14,.06,a.cushion2,.6,.55,-.1,v),[[-.9,.18],[.9,.18]].forEach(([M])=>{[[-1.05,-.4],[1.05,-.4],[-1.05,.4],[1.05,.4]].forEach(([S,y])=>c(.03,.1,a.woodDark,S,0,y,v,8))}),o(1,.05,.6,.03,a.wood,-2.75,f+.34,.7,u),[[-.4,-.22],[.4,-.22],[-.4,.22],[.4,.22]].forEach(([M,S])=>c(.025,.34,a.woodDark,-2.75+M,f,.7+S,u,8)),h(-2,f,2.5,Math.PI,u,i.fabric2??a.cushion2),o(.4,.5,2,.04,a.woodDark,-4.62,f,.7,u),o(.05,.75,1.5,.015,a.tvBlack,-4.74,f+.95,.7,u);let m=new De(new cn(1.4,.68),a.tv);m.rotation.y=Math.PI/2,m.position.set(-4.7,f+1.32,.7),m.userData.noPick=!0,u.add(m),o(.34,2,2.2,.02,a.woodDark,.9,f,-1.8,u),[.5,1,1.5].forEach((M,S)=>{o(.2,.28,1.9,.01,[a.book1,a.book2,a.book3][S],1,f+M+.05,-1.8,u)}),c(.17,.4,a.pot,-4.2,f,3.2,u,14),l(.38,a.plant,-4.2,f+.85,3.2,u,1.3),l(.28,a.plant,-4.3,f+1.15,3.1,u,1.2),p(-.45,f,3.1,u,1.45),o(3,.72,.36,.02,a.cabinet,2.9,f+1.55,-3.7,u),o(.9,.14,.6,.02,a.steel,2.4,f+1.3,-3.58,u),o(.34,.9,.34,.02,a.steel,2.4,f+1.45,-3.7,u),o(2.2,.06,1,.02,a.quartz,3,f+.9,-.6,u),o(2.1,.9,.9,.03,a.cabinet,3,f,-.6,u),[2.4,3,3.6].forEach(M=>{c(.17,.05,a.woodDark,M,f+.62,.35,u,16),c(.025,.62,a.steel,M,f,.35,u,8)}),[2.3,3,3.7].forEach(M=>{c(.006,.7,a.steel,M,f+2.1,-.6,u,4);let S=new De(new Ln(.15,16,10,0,Math.PI*2,0,Math.PI/2),a.pendant);S.position.set(M,f+2.1,-.6),S.userData.noAO=!0,S.userData.noPick=!0,u.add(S)}),o(1.8,.05,.92,.02,a.wood,3.2,f+.72,2.4,u),[[-.8,-.4],[.8,-.4],[-.8,.4],[.8,.4]].forEach(([M,S])=>c(.035,.72,a.woodDark,3.2+M,f,2.4+S,u,8)),h(2.5,f,1.55,0,u),h(3.9,f,1.55,0,u),h(2.5,f,3.25,Math.PI,u),h(3.9,f,3.25,Math.PI,u);let g=new De(new jt(.28,.28,.22,20,1,!0),a.pendant);g.material.side=Xn,g.position.set(3.2,f+2.15,2.4),g.userData.noAO=!0,g.userData.noPick=!0,u.add(g),c(.006,.55,a.steel,3.2,f+2.2,2.4,u,4),o(1,.45,.38,.03,a.wood,.6,f,3.55,u)})(),(()=>{let u=e.upper,f=3.45;o(2,.42,2.15,.06,a.sheets,2.4,f,-2.55,u),o(1.96,.18,1.55,.08,a.duvet,2.4,f+.38,-2.2,u),o(2,.9,.1,.03,a.woodDark,2.4,f,-3.72,u),o(.6,.22,.38,.08,a.sheets,1.85,f+.5,-3.3,u),o(.6,.22,.38,.08,a.sheets,2.95,f+.5,-3.3,u),[[1],[3.8]].forEach(([m])=>{o(.5,.5,.4,.03,a.woodDark,m,f,-3.55,u),p(m,f+.5,-3.55,u,.34)}),o(2,.02,1.4,.01,a.rug2,2.4,f,-1,u),o(.6,2.3,2,.02,a.woodDark,4.55,f,-1.2,u),o(1.5,.05,.7,.02,a.wood,.6,f+.72,3.35,u),[[-.7,-.3],[.7,-.3],[-.7,.3],[.7,.3]].forEach(([m,g])=>c(.03,.72,a.steel,.6+m,f,3.35+g,u,8)),o(.7,.42,.04,.01,a.tvBlack,.6,f+.98,3.52,u);let v=new De(new cn(.64,.36),a.screen);v.position.set(.6,f+1.19,3.495),v.rotation.y=Math.PI,v.userData.noPick=!0,u.add(v),h(.6,f,2.7,Math.PI,u,a.cushion2),o(1.5,.4,2,.06,a.sheets,-3.4,f,2.2,u),o(1.46,.16,1.4,.07,a.cushion2,-3.4,f+.36,2.5,u),o(.9,.9,.5,.03,a.woodDark,-4.55,f,.6,u),o(.9,.02,.06,.01,a.tile,-3.2,f,-2.6,u),o(.42,.34,.6,.12,i.ceramic,-4.4,f,-3.2,u),o(.4,.4,.2,.06,i.ceramic,-4.4,f+.34,-3.5,u),o(.7,.9,.03,.01,i.mirror,-2.4,f+1.2,-3.84,u)})(),(()=>{let u=e.basement,f=-2.8;o(.68,.92,.68,.04,i.white,.5,f,-3.5,u),o(.68,.92,.68,.04,i.white,1.25,f,-3.5,u),c(.2,.03,a.tvBlack,.5,f+.93,-3.15,u,18),c(.2,.03,a.tvBlack,1.25,f+.93,-3.15,u,18),o(.6,.06,.4,.01,a.tvBlack,.88,f+.92,-3.88,u),o(2,.06,.75,.01,a.wood,-4,f+.88,2.6,u),o(1.9,.88,.7,.01,a.cabinet,-4,f,2.6,u),o(.3,.06,.12,.01,a.bin2,-4.4,f+.94,2.55,u),o(.2,.2,.2,.02,a.bin,-3.7,f+.94,2.7,u),o(1.7,2,.42,.01,a.steel,4.25,f,2.9,u,0),[.3,.9,1.5].forEach((m,g)=>{o(.5,.3,.34,.03,[a.bin,a.bin2,a.cardboard][g],3.8,f+m+.05,2.9,u),o(.6,.3,.34,.03,[a.cardboard,a.bin,a.bin2][g],4.5,f+m+.05,2.9,u)}),c(.32,.05,a.tvBlack,.66,f,1.6,u,20),c(.1,.5,a.pvc??i.pvc,.66,f,1.6,u,12);let v=new De(new Ln(.03,8,6),a.led);v.position.set(.66,f+.58,1.6),v.userData.noAO=!0,v.userData.noPick=!0,u.add(v),o(.5,.4,.4,.02,a.cardboard,-1.4,f,2.9,u,.3),o(.45,.35,.4,.02,a.cardboard,-1.3,f+.4,2.9,u,.1),o(1.6,.02,1.2,.01,a.rug,.4,f,.8,u)})();function d(u,f){let v=Pt(.25+.75*u+f*.3,0,1.1);a.tv.emissiveIntensity=1.3*v,a.screen.emissiveIntensity=1.1*v,a.lamp.emissiveIntensity=2.2*v,a.pendant.emissiveIntensity=2.6*v,a.led.emissiveIntensity=3}return{update:d,glows:n}}var fr=.38;function Lp({scene:i,M:e,tier:t,reduce:n}){let s=new at;s.visible=!1,i.add(s);let r=ti(55),a=dr("rgba(255,255,255,0.65)"),o=(xe,Ue,$)=>new N(xe,Ue,$),c=.45,l=.66,h=(()=>{let xe=Math.round(1024*Wu()),Ue=Math.round(512*Wu()),$=document.createElement("canvas");$.width=xe,$.height=Ue;let Be=$.getContext("2d"),te=Be.createImageData(xe,Ue),oe=te.data,K=[[0,[58,41,29]],[.5,[92,64,40]],[.62,[150,106,62]],[2.2,[138,98,58]],[2.4,[150,142,120]],[4.6,[124,118,104]],[4.8,[100,112,120]],[7,[90,98,108]],[9,[74,78,86]]],ne=Ge=>{let Oe=0;for(;Oe<K.length-2&&K[Oe+1][0]<=Ge;)Oe++;let[Je,je]=K[Oe],[q,gt]=K[Oe+1],dt=Pt((Ge-Je)/(q-Je),0,1);return[$e(je[0],gt[0],dt),$e(je[1],gt[1],dt),$e(je[2],gt[2],dt)]};for(let Ge=0;Ge<Ue;Ge++)for(let Oe=0;Oe<xe;Oe++){let Je=Ge/Ue*9+(Tn(Oe/90,Ge/40,3,11,8,5)-.5)*.7+Math.sin(Oe*.02+Ge*.01)*.12,je=ne(Pt(Je,0,9)),q=(Tn(Oe/6,Ge/6,2,170,85,9)-.5)*34,gt=(Ge*xe+Oe)*4;oe[gt]=Pt(je[0]+q,0,255),oe[gt+1]=Pt(je[1]+q,0,255),oe[gt+2]=Pt(je[2]+q*.9,0,255),oe[gt+3]=255}Be.putImageData(te,0,0);for(let Ge=0;Ge<420*Wu();Ge++){let Oe=105+r()*75;Be.fillStyle=`rgba(${Oe|0},${Oe*.96|0},${Oe*.86|0},0.85)`,Be.beginPath(),Be.ellipse(r()*xe,(2.5+r()*2.1)/9*Ue,1.5+r()*3.5,1.2+r()*2.4,r()*3,0,6.3),Be.fill()}let ue=new Dn($);return ue.colorSpace=fn,ue.wrapS=Gn,ue.anisotropy=8,ue})(),p=new rn({map:h,roughness:1,metalness:0});h.repeat.set(6,1);let d=new De(new cn(240,9),p);d.rotation.y=-Math.PI/2,d.position.set(c+fr,-4.52,0),d.userData.noAO=!0,d.userData.noPick=!0,d.receiveShadow=!1,s.add(d);let u=(()=>{let xe=document.createElement("canvas");xe.width=4,xe.height=256;let Ue=xe.getContext("2d"),$=Ue.createLinearGradient(0,0,0,256);$.addColorStop(0,"rgb(74,78,86)"),$.addColorStop(.35,"rgb(24,26,31)"),$.addColorStop(1,"rgb(6,7,9)"),Ue.fillStyle=$,Ue.fillRect(0,0,4,256);let Be=new Dn(xe);return Be.colorSpace=fn,Be})(),f=new De(new cn(240,60),new yn({map:u,fog:!1,toneMapped:!1}));f.rotation.y=-Math.PI/2,f.position.set(c+fr,-9.02-30,0),f.userData.noAO=!0,f.userData.noPick=!0,f.raycast=()=>{},s.add(f);let v=new at;s.add(v);for(let xe=0;xe<=9;xe++){let Ue=new De(new ln(.04,.05,xe%3===0?1.4:.8),new yn({color:16039294,toneMapped:!1}));Ue.position.set(0,-xe,31-(xe%3===0?.7:.4)),Ue.userData.noAO=!0,Ue.raycast=()=>{},v.add(Ue)}let m=new De(new ln(.06,.07,240),new yn({color:16039294,toneMapped:!1}));m.position.set(c+fr-.02,.02,0),m.userData.noAO=!0,m.raycast=()=>{},s.add(m);let g=(xe,Ue=.45,$=.2)=>{let Be=new rn({color:xe,roughness:Ue,metalness:$,emissive:xe,emissiveIntensity:.12,side:Xn});return Be.userData.th=[.3],Be},M={water:g(4165606,.4,.3),gas:g(15775786,.45,.2),sewer:g(12169888,.8,0),tile:g(15855334,.6,0),roots:g(8017458,.95,0),sump:g(8362672,.5,.3),crack:new yn({color:new it(3,.5,.35),toneMapped:!1})};M.roots.emissiveIntensity=0;let S={water:new at,gas:new at,sewer:new at,found:new at,radon:new at};Object.values(S).forEach(xe=>s.add(xe));let y=(xe,Ue,$,Be,te=0)=>{let oe=new Ci(xe.map(ne=>o(...ne)),!1,"catmullrom",.05),K=new De(new Ii(oe,te||Math.max(8,xe.length*8),Ue,10,!1),$);return K.castShadow=!1,K.userData.noPick=!0,Be.add(K),oe},_=(xe,Ue,$,Be,te)=>{let oe=o(...xe),K=o(...Ue),ne=oe.distanceTo(K),ue=new De(new jt($,$,ne,16,1,!0),Be);return ue.position.copy(oe).lerp(K,.5),ue.quaternion.setFromUnitVectors(o(0,1,0),K.clone().sub(oe).normalize()),ue.userData.noPick=!0,te.add(ue),new wr(oe,K)},T=[];function A(xe,Ue,$,Be,te,oe=.22){let K=new kt;K.setAttribute("position",new Ot(new Float32Array(Ue*3),3));let ne=new xi(K,new ai({size:oe,map:a,color:new it(Be).multiplyScalar(2.2),transparent:!0,depthWrite:!1,blending:_n,toneMapped:!1}));ne.frustumCulled=!1,ne.userData.noAO=!0,ne.raycast=()=>{},te.add(ne),T.push({curve:xe,n:Ue,speed:$,len:xe.getLength(),pts:ne,group:te})}_([c-12,-2.4,22.8],[c+60,-2.4,22.8],.24,M.water,S.water),_([c-12,-1.3,24.7],[c+60,-1.3,24.7],.11,M.gas,S.gas);let x=y([[l,-2.4,22.8],[l,-2.3,18],[l,-2.2,6],[l,-2.2,3.75]],.075,M.water,S.water,30);A(x,20,2,7320831,S.water,.2);let w=y([[l+.1,-1.3,24.7],[l+.1,-1.3,8],[l+.1,-.3,5.4],[l+.1,.9,4.25]],.055,M.gas,S.gas,30);A(w,16,2.6,16765514,S.gas,.18);let C=new De(new ln(.3,.4,.2),e.steel);C.position.set(l+.1,1.2,4.25),C.userData.noPick=!0,S.gas.add(C),_([c-12,-3.95,-18.2],[c+60,-3.95,-18.2],.4,M.sewer,S.sewer);let F=y([[l,-3.27,-3.8],[l,-3.35,-9],[l,-3.55,-13],[l,-3.9,-17.9]],.19,M.sewer,S.sewer,30);A(F,18,1.3,13214314,S.sewer,.2);let b=y([[l,-3.3,-5.2],[l,-1,-5.2],[l,.1,-5.2]],.14,M.sewer,S.sewer,10),L=o(l,-3.52,-12.8);[[[.9,-.2,-12.4],[.8,-1.2,-12.2],[l+.04,-2.4,-12.5],[l+.02,-3.2,-12.8],[l,-3.5,-12.9]],[[.9,-.2,-12.4],[.85,-.9,-11.4],[l+.1,-2,-11.5],[l+.04,-3,-12.1],[l,-3.45,-12.6]],[[.9,-.2,-12.4],[.85,-1,-13.5],[l+.12,-2.2,-13.9],[l+.04,-3.1,-13.4],[l,-3.5,-13.1]],[[l+.1,-2.2,-13.8],[l+.05,-2.9,-14.6]],[[l+.12,-2,-11.5],[l+.06,-2.6,-10.5]]].forEach((xe,Ue)=>y(xe,Ue<3?.1:.05,M.roots,S.sewer,24));let P=new De(new Pi(.3,.02,8,28),M.crack);P.position.copy(L),P.rotation.y=Math.PI/2,P.userData.noAO=!0,S.sewer.add(P),[[-4.55],[4.55]].forEach(([xe])=>_([c-6,-3.3,xe],[c+6.2,-3.3,xe],.11,M.tile,S.found)),[[c-6],[c+6.2]].forEach(([xe])=>_([xe,-3.3,-4.55],[xe,-3.3,4.55],.11,M.tile,S.found));let H=y([[l,-3.3,4.55],[l,-3.3,3],[l,-3.1,1.9]],.09,M.tile,S.found,12),Z=new De(new jt(.34,.34,.75,22,1,!0),M.sump);Z.position.set(l,-3.05,1.6),Z.userData.noPick=!0,S.found.add(Z);let V=y([[l,-2.55,1.6],[l,-1.2,1.6],[l,-1.2,6.8],[l,.1,6.8]],.075,M.sump,S.found,24);A(H,10,.8,7320831,S.found,.16),A(V,14,1.8,7320831,S.found,.18),y([[.62,-.15,4.27],[.55,-.55,4.27],[.74,-.95,4.27],[.5,-1.4,4.27],[.7,-1.9,4.27],[.52,-2.5,4.27]],.022,M.crack,S.found,30);let W=new gi(new ri({map:to("rgba(255,90,70,0.9)","rgba(255,60,40,0)"),transparent:!0,depthWrite:!1,blending:_n,opacity:.6}));W.position.set(.62,-1.4,4.5),W.scale.set(2.2,3.4,1),W.userData.noAO=!0,S.found.add(W);let G=n?0:t>=1?520:200,k=new kt,Y=new Float32Array(G*3),he=new Float32Array(G*2),we=xe=>{Y[xe*3]=r()*(fr-.06),Y[xe*3+1]=-8.6+r()*1.4,Y[xe*3+2]=(r()-.5)*14-1.5,he[xe*2]=.6+r()*.9,he[xe*2+1]=r()*6.28};for(let xe=0;xe<G;xe++)we(xe),Y[xe*3+1]=-8.6+r()*5.6;k.setAttribute("position",new Ot(Y,3));let Ie=new xi(k,new ai({size:.42,map:a,color:new it(14257407).multiplyScalar(2.6),transparent:!0,depthWrite:!1,blending:_n,toneMapped:!1}));Ie.frustumCulled=!1,Ie.userData.noAO=!0,Ie.raycast=()=>{},S.radon.add(Ie);let Xe={x:-1.2,z:-1.5},rt={ugWater:o(l,-2.4,21),ugGas:o(l+.1,-1.3,14),ugSewer:o(l,-3.7,-16),ugRoots:L.clone(),ugSewerMain:o(l,-3.95,-18.2),ugTile:o(l,-3.3,4.55),ugSump:o(l,-3.1,1.6),ugCrack:o(l,-1.5,4.3),ugRadon:o(-1.2,-6,-1.5),ugMeter:o(l+.1,1.2,4.25),ugMain:o(l,-2.4,22.8),ugGasMain:o(l,-1.3,24.7)},Q=o(0,0,0),de={cx:-1e3};function Ce(xe,Ue,$,Be){let te=Et(0,1,xe.section),oe=xe.section<.002?-1e3:$e(-60,xe.cutX,te);if(de.cx=oe,s.visible=xe.section>.002,!s.visible)return oe;if(d.position.x=oe+fr,f.position.x=oe+fr,m.position.x=oe+fr-.02,v.position.x=oe+fr,rt.ugRadon.x=oe+fr*.5,Object.entries(S).forEach(([K,ne])=>{let ue=Ue===K||Ue==="street"&&(K==="water"||K==="gas"),Ge=!Ue||ue?1:.2;ne.userData.al=$e(ne.userData.al??Ge,Ge,Math.min(1,Be*5)),ne.traverse(Oe=>{Oe.material&&Oe.material.isMeshStandardMaterial&&(Oe.material.emissiveIntensity=ue?.6:.12)})}),M.crack.color.setRGB(3,.5,.35).multiplyScalar(.7+.3*Math.sin($*5)),T.forEach(K=>{let ne=K.group.userData.al??1;if(K.pts.visible=ne>.02,!K.pts.visible)return;let ue=K.pts.geometry.attributes.position.array;for(let Ge=0;Ge<K.n;Ge++){let Oe=(Ge/K.n+$*K.speed/K.len)%1;K.curve.getPointAt(Oe,Q),ue[Ge*3]=Q.x,ue[Ge*3+1]=Q.y,ue[Ge*3+2]=Q.z}K.pts.geometry.attributes.position.needsUpdate=!0,K.pts.material.opacity=ne}),Ie.visible=G>0&&(S.radon.userData.al??1)>.2,Ie.visible){Ie.position.x=oe;for(let K=0;K<G;K++){let ne=Y[K*3+1],ue=Et(-5.8,-3,ne);Y[K*3+1]+=he[K*2]*Be*.8,Y[K*3+2]+=((Xe.z-Y[K*3+2])*ue*.5+Math.sin($*.8+he[K*2+1])*.1)*Be,Y[K*3+1]>-2.95&&we(K)}k.attributes.position.needsUpdate=!0,Ie.material.opacity=S.radon.userData.al??1}return oe}return{group:s,update:Ce,ANCHORS:rt,groups:S,state:de}}function Yd(i){i.updateWorldMatrix(!0,!0);let e=new Mt().copy(i.matrixWorld).invert(),t=new Mt,n=new Map,s=[],r=l=>{for(let h=l;h&&h!==i;h=h.parent)if(h.userData.sys||h.userData.keep||h.userData.level)return!0;return!1},a=l=>Array.isArray(l.material)?l.geometry.groups.map(h=>{let p=l.geometry.clone(),d=l.geometry.index;return p.clearGroups(),d?p.setIndex(Array.from(d.array.slice(h.start,h.start+h.count))):p.deleteAttribute("position"),{m:l.material[h.materialIndex],g:p}}):[{m:l.material,g:l.geometry.clone()}];i.traverse(l=>{if(!l.isMesh||l.isInstancedMesh||l===i||!l.material||!l.visible||r(l)||l.children.length||!l.geometry.index&&Array.isArray(l.material)||(Array.isArray(l.material)?l.material:[l.material]).some(p=>!p||p.userData.pane))return;t.multiplyMatrices(e,l.matrixWorld),a(l).forEach(({m:p,g:d})=>{let u=[p.uuid,+l.castShadow,+l.receiveShadow,+!!l.userData.noAO,+!!l.userData.noPick,l.renderOrder].join("|"),f=n.get(u);f||n.set(u,f={m:p,cast:l.castShadow,recv:l.receiveShadow,noAO:!!l.userData.noAO,noPick:!!l.userData.noPick,ro:l.renderOrder,geos:[],owners:new Set}),d.attributes.uv||d.setAttribute("uv",new Ot(new Float32Array(d.attributes.position.count*2),2)),d.applyMatrix4(t),f.geos.push(d),f.owners.add(l)}),s.push(l)});let o=0;n.forEach(l=>{if(l.geos.length<2){l.geos.forEach(f=>f.dispose());return}let h=Object.keys(l.geos[0].attributes).filter(f=>l.geos.every(v=>v.attributes[f]));l.geos.forEach(f=>{for(let v of Object.keys(f.attributes))h.includes(v)||f.deleteAttribute(v)});let p=l.geos.some(f=>!f.index)?l.geos.map(f=>f.index?f.toNonIndexed():f):l.geos,d=Wi(p);if(!d)return;d.computeBoundingSphere();let u=new De(d,l.m);u.castShadow=l.cast,u.receiveShadow=l.recv,u.renderOrder=l.ro,l.noAO&&(u.userData.noAO=!0),l.noPick&&(u.userData.noPick=!0),i.add(u),o++,l.done=!0});let c=new Set;return n.forEach(l=>{l.done||l.owners.forEach(h=>c.add(h))}),s.forEach(l=>{!c.has(l)&&l.parent&&(l.parent.remove(l),l.geometry.dispose())}),o}function Np(i,e){i.updateWorldMatrix(!0,!0);let t=new Mt().copy(i.matrixWorld).invert(),n=new Mt,s=[],r=[];if(i.traverse(c=>{c.isLineSegments&&c.material===e&&r.push(c)}),r.forEach(c=>{let l=c.geometry.clone();for(let h of Object.keys(l.attributes))h!=="position"&&l.deleteAttribute(h);l.applyMatrix4(n.multiplyMatrices(t,c.matrixWorld)),s.push(l)}),s.length<2)return 0;let a=Wi(s.map(c=>c.index?c.toNonIndexed():c));if(!a)return 0;let o=new $s(a,e);return o.raycast=()=>{},o.userData.noAO=!0,i.add(o),r.forEach(c=>{c.parent&&c.parent.remove(c),c.geometry.dispose()}),r.length}function Up({M:i,tier:e,glowTex:t,dotTex:n}){let s={value:0},r=(y,_=.6,T=0,A={})=>{let x=new rn({color:y,roughness:_,metalness:T,...A});return x.userData.th=[.4],x};function a(){let y=document.createElement("canvas");y.width=y.height=512;let _=y.getContext("2d");_.fillStyle="#b99a6e",_.fillRect(0,0,512,512);let T=7,A=()=>(T=T*16807%2147483647)/2147483647;for(let C=0;C<260;C++){let F=A()*512,b=.03+A()*.07;_.strokeStyle=A()>.5?`rgba(90,62,30,${b})`:`rgba(240,220,180,${b})`,_.lineWidth=.6+A()*2.2,_.beginPath(),_.moveTo(0,F);for(let L=0;L<=512;L+=32)_.lineTo(L,F+Math.sin(L*.012+C)*(2+A()*5));_.stroke()}for(let C=0;C<5;C++){let F=A()*512,b=A()*512,L=4+A()*7,P=_.createRadialGradient(F,b,0,F,b,L*2.4);P.addColorStop(0,"rgba(70,44,20,.55)"),P.addColorStop(1,"rgba(70,44,20,0)"),_.fillStyle=P,_.beginPath(),_.ellipse(F,b,L*2.6,L*1.3,0,0,6.3),_.fill()}let x=new Dn(y);x.colorSpace=fn,x.wrapS=x.wrapT=Gn,x.repeat.set(1/1.2,1/1.2),x.anisotropy=8;let w=new rn({map:x,roughness:.82,metalness:0});return w.userData.th=[.45],w}let o=(y,_=1.5,T={})=>r(789776,.5,0,{emissive:y,emissiveIntensity:_,...T}),c={enclosure:r(8093831,.5,.6,{envMapIntensity:.7}),enclosureDark:r(2764082,.62,.5,{envMapIntensity:.6}),galv:r(11186618,.38,.9,{envMapIntensity:1.3}),blackPlastic:r(1184534,.42,.05),greyPlastic:r(4869975,.5,.05),whitePlastic:r(11118238,.55,.02),conduit:r(7304316,.62,.02),bluePlastic:r(3104680,.5,.02),orangePlastic:r(14711338,.5,.02),yellowPlastic:r(15319598,.5,.02),redPlastic:r(12728875,.5,.02),purple:r(8011716,.45,.05,{emissive:5909152,emissiveIntensity:.25}),green:r(3119703,.5,.05),copper:r(14256718,.25,1,{envMapIntensity:1.5}),copperHot:r(13201722,.3,1,{envMapIntensity:1.5,emissive:16742954,emissiveIntensity:.3}),aluminum:r(13225684,.3,1,{envMapIntensity:1.4}),brass:r(13214282,.32,1,{envMapIntensity:1.3}),rubber:r(855568,.85,0),plywood:a(),studs:i.cedar,concrete:i.concrete,slab:i.slab,drywall:i.drywall,steel:i.steel,pvc:i.pvc,castIron:r(2829617,.75,.6),clay:r(10115900,.9,0),hdpe:r(1316378,.35,.1,{envMapIntensity:1.2}),gravel:r(7301730,1,0),soil:r(3812382,1,0),insulPink:r(15311018,1,0),insulYellow:r(14861930,1,0),vermiculite:r(11569738,.95,.15),frost:r(15923199,.35,0,{emissive:12572415,emissiveIntensity:.25}),ice:i.ice,water:new Yi({color:2781104,roughness:.06,metalness:0,transparent:!0,opacity:.78,envMapIntensity:1.8,clearcoat:1}),sewage:new Yi({color:5916200,roughness:.2,metalness:0,transparent:!0,opacity:.9,envMapIntensity:1.2}),glassClear:new Yi({color:14674674,roughness:.03,metalness:0,transparent:!0,opacity:.22,envMapIntensity:2,clearcoat:1}),poly:new Yi({color:14542574,roughness:.35,metalness:0,transparent:!0,opacity:.28,envMapIntensity:1.4,side:Xn,depthWrite:!1}),led:(y=9425830,_=3)=>o(y,_),glow:o};[c.water,c.sewage,c.glassClear,c.poly].forEach(y=>{y.userData.th=[.3]});let l=(y,_,T,A,x,w={})=>(y.position.set(_,T,A),y.castShadow=w.cast!==!1,y.receiveShadow=w.receive!==!1,w.keep&&(y.userData.keep=!0),w.rot&&y.rotation.set(w.rot[0]||0,w.rot[1]||0,w.rot[2]||0),x&&x.add(y),y),h=(y,_,T,A,x=0,w=0,C=0,F,b={})=>{let L=b.r?new Ms(y,_,T,2,Math.min(b.r,y/2,_/2,T/2)):new ln(y,_,T);return b.uv&&ia(L,b.uv===!0?{}:b.uv),l(new De(L,A),x,w,C,F,b)},p=(y,_,T,A=0,x=0,w=0,C,F={})=>{let b=new jt(F.r2??y,y,_,F.seg||16,1,!!F.open);return F.axis==="x"?b.rotateZ(Math.PI/2):F.axis==="z"&&b.rotateX(Math.PI/2),l(new De(b,T),A,x,w,C,F)},d=(y,_,T,A,x,w,C={})=>l(new De(new Ln(y,C.seg||16,C.seg2||12),_),T,A,x,w,C),u=(y,_,T)=>new N(y,_,T);return{time:s,mats:c,std:r,box:h,cyl:p,sphere:d,tube:(y,_,T,A,x={})=>{let w=new Ci(y.map(P=>P.isVector3?P:u(P[0],P[1],P[2])),!1,x.type||"catmullrom",x.tension??.3),C=w.getLength(),F=new Ii(w,x.seg||Math.max(8,Math.round(C*(x.density||14))),_,x.radial||8,!1),b=F.attributes.uv;for(let P=0;P<b.count;P++)b.setX(P,b.getX(P)*C);let L=l(new De(F,T),0,0,0,A,x);return L.userData.curve=w,L.userData.len=C,L},V:u,flow:(y,_={})=>{let T={value:_.level??1},A=new rn({color:_.base??1382170,roughness:_.roughness??.45,metalness:_.metalness??.1,emissive:y,emissiveIntensity:_.intensity??2.2});return A.defines={USE_UV:""},A.userData.level=T,A.userData.th=[.6],A.onBeforeCompile=x=>{x.uniforms.uFlowT=s,x.uniforms.uFlowL=T,x.fragmentShader=x.fragmentShader.replace("#include <common>",`#include <common>
uniform float uFlowT; uniform float uFlowL;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        { float fd = fract(vUv.x * ${(_.dash??3).toFixed(2)} - uFlowT * ${((_.speed??.5)*(_.dash??3)).toFixed(2)});
          float fp = smoothstep(0.0, 0.18, fd) * (1.0 - smoothstep(0.42, 0.6, fd));
          totalEmissiveRadiance *= (${(_.rest??.12).toFixed(2)} + ${(_.gain??1).toFixed(2)} * fp) * uFlowL; }`)},A.customProgramCacheKey=()=>`flow${_.dash??3}_${_.speed??.5}_${_.rest??.12}_${_.gain??1}`,A},atlas:(y,_={})=>{let A=_.width||1024,x=4,w=4,C=0,F={};y.forEach(k=>{x+k.w+4>A&&(x=4,w+=C+4,C=0),F[k.key]={x,y:w,w:k.w,h:k.h,c:k},x+=k.w+4,C=Math.max(C,k.h)});let b=2**Math.ceil(Math.log2(w+C+4)),L=document.createElement("canvas");L.width=A,L.height=b;let P=L.getContext("2d"),H=k=>{let Y=k.c;if(P.clearRect(k.x,k.y,k.w,k.h),Y.bg&&(P.fillStyle=Y.bg,P.fillRect(k.x,k.y,k.w,k.h)),Y.draw){P.save(),P.translate(k.x,k.y),Y.draw(P,k.w,k.h,Y),P.restore();return}P.fillStyle=Y.color||"#ece6da",P.textAlign=Y.align||"center",P.textBaseline="middle";let he=Y.align==="left"?k.x+6:k.x+k.w/2;P.font=`${Y.weight||600} ${Y.size||Math.round(k.h*.62)}px ${Y.font||"ui-monospace, Menlo, Consolas, monospace"}`,Y.sub?(P.fillText(Y.text,he,k.y+k.h*.38),P.font=`500 ${Math.round((Y.size||k.h*.62)*.5)}px ui-monospace, Menlo, Consolas, monospace`,P.globalAlpha=.75,P.fillText(Y.sub,he,k.y+k.h*.78),P.globalAlpha=1):P.fillText(Y.text,he,k.y+k.h/2+1)};Object.values(F).forEach(H);let Z=new Dn(L);Z.colorSpace=fn,Z.anisotropy=8;let V=new rn({map:Z,emissiveMap:Z,emissive:16777215,emissiveIntensity:_.emissive??.35,roughness:.6,transparent:!0,alphaTest:.02,depthWrite:!1});return V.userData.th=[.4],{plane:(k,Y,he,we=0,Ie=0,Xe=0,rt={})=>{let Q=F[k],de=Y*(Q.h/Q.w),Ce=new cn(Y,de),xe=Ce.attributes.uv;for(let $=0;$<xe.count;$++)xe.setXY($,(Q.x+xe.getX($)*Q.w)/A,1-(Q.y+(1-xe.getY($))*Q.h)/b);let Ue=l(new De(Ce,V),we,Ie,Xe,he,{cast:!1,receive:!1,...rt});return Ue.renderOrder=3,Ue},set:(k,Y,he,we)=>{let Ie=F[k];Y!==void 0&&(Ie.c.text=Y),he!==void 0&&(Ie.c.sub=he),we&&Object.assign(Ie.c,we),H(Ie),Z.needsUpdate=!0},mat:V,tex:Z}},particles:(y,_={})=>{let T=e>=1?y:Math.ceil(y*.45),A=new kt,x=new Float32Array(T*3);A.setAttribute("position",new Ot(x,3));let w=new ai({size:_.size??.05,map:n,color:new it(_.color??16777215).multiplyScalar(_.gain??1.6),transparent:!0,depthWrite:!1,blending:_.normal?Dr:_n,toneMapped:!1,sizeAttenuation:!0,opacity:_.opacity??1}),C=new xi(A,w);return C.frustumCulled=!1,C.userData.noAO=!0,C.userData.keep=!0,C.raycast=()=>{},C.userData.n=T,C.userData.pos=x,C},sprite:(y,_,T,A,x,w,C=.8)=>{let F=new gi(new ri({map:t,color:y,transparent:!0,depthWrite:!1,blending:_n,opacity:C}));return F.position.set(T,A,x),F.scale.set(_,_,1),F.userData.noAO=!0,F.userData.keep=!0,F.raycast=()=>{},w&&w.add(F),F},bake:y=>{let _=new Map,T=[];y.updateWorldMatrix(!0,!0);let A=new Mt().copy(y.matrixWorld).invert(),x=new Mt,w=C=>{for(let F=C;F&&F!==y;F=F.parent)if(F.userData.keep)return!0;return!1};return y.traverse(C=>{if(!C.isMesh||C.isInstancedMesh||w(C)||Array.isArray(C.material)||C.children.length)return;let F=C.material.uuid+"|"+ +C.castShadow+ +C.receiveShadow+"|"+C.renderOrder,b=_.get(F);b||_.set(F,b={mat:C.material,cast:C.castShadow,recv:C.receiveShadow,ro:C.renderOrder,geos:[]});let L=C.geometry.index?C.geometry.toNonIndexed():C.geometry.clone();Object.keys(L.attributes).forEach(P=>{P!=="position"&&P!=="normal"&&P!=="uv"&&L.deleteAttribute(P)}),L.attributes.uv||L.setAttribute("uv",new Ot(new Float32Array(L.attributes.position.count*2),2)),L.applyMatrix4(x.multiplyMatrices(A,C.matrixWorld)),b.geos.push(L),T.push(C)}),_.forEach(C=>{let F=Wi(C.geos);if(!F)return;let b=new De(F,C.mat);b.castShadow=C.cast,b.receiveShadow=C.recv,b.renderOrder=C.ro,b.userData.keep=!0,y.add(b),C.geos.forEach(L=>L.dispose())}),T.forEach(C=>{C.parent&&C.parent.remove(C),C.geometry.dispose()}),y},place:l}}var nr=new N(2.8,-1.25,-3.945),$d=.0266,so=i=>.3-i*$d,qd=[[15,1],[15,1],[20,1],[15,1],[15,1],[20,1],[15,1],[15,1],[40,2,"range","RANGE"],[30,2,"dryer","DRYER"],[40,2,"hp","HEAT PUMP"],[30,2,"base","BASEBOARD"],[15,1],[15,1]],Zd=[[15,1,null,null,"AFCI"],[15,1,null,null,"AFCI"],[20,1,null,null,"GFCI"],[20,1],[15,1],[15,1],[20,1],[15,1],[30,2,"wh","WATER HTR"],[30,2,"ac","A/C"],[50,2,"ev","EV CHARGER"],[60,2,"spa","HOT TUB"],[40,2,"suite","SUITE"]];function Fp({kit:i}){let{box:e,cyl:t,tube:n,mats:s,atlas:r}=i,a=new at,o=2.8,c=-4.3;t(.034,3.7,s.galv,o,3.6,c,a),t(.06,.16,s.galv,o,5.5,c-.02,a,{r2:.03}),e(.1,.05,.16,s.galv,o,5.44,c-.05,a,{rot:[.5,0,0]}),[2.2,3.4,4.6].forEach(d=>e(.12,.03,.2,s.galv,o,d,c+.1,a,{cast:!1})),e(.3,.44,.12,s.enclosure,o,1.45,c+.02,a,{r:.012}),t(.092,.03,s.galv,o,1.5,c-.05,a,{axis:"z",seg:28}),t(.085,.085,s.glassClear,o,1.5,c-.1,a,{axis:"z",seg:28,cast:!1}),t(.074,.006,s.whitePlastic,o,1.5,c-.075,a,{axis:"z",seg:28,cast:!1});let l=r([{key:"kwh",text:"08431",sub:"kWh \xB7 CL200 \xB7 240 V",w:192,h:96,size:46,color:"#0e1014"}],{width:256,emissive:.15}),h=l.plane("kwh",.1,a,o,1.5,c-.0795);h.rotation.y=Math.PI;let p=t(.05,.002,s.aluminum,o,1.452,c-.09,a,{seg:24,cast:!1,keep:!0});return t(.03,1.02,s.conduit,o,.72,c,a),e(.075,.13,.075,s.conduit,o,.17,c,a,{r:.012}),t(.03,.34,s.conduit,o,.15,c+.17,a,{axis:"z"}),n([[o+.11,1.24,c+.03],[o+.13,.6,c+.06],[o+.14,.05,c-.12],[o+.14,-.25,c-.16]],.006,s.copper,a,{radial:6}),t(.011,.5,s.copper,o+.14,-.05,c-.16,a,{seg:8}),i.bake(a),a.add(p),{group:a,disc:p,labels:l}}function Op({kit:i}){let{box:e,cyl:t,tube:n,mats:s,flow:r,atlas:a,V:o}=i,c=new at;c.position.copy(nr);let l=new at;c.add(l);let h=[];[15,20,30,40,50,60].forEach($=>h.push({key:"a"+$,text:String($),w:96,h:56,size:40,color:"#f4f1ea"})),h.push({key:"a200",text:"200",w:144,h:72,size:56,color:"#f4f1ea"}),[...qd,...Zd].filter($=>$[3]).forEach($=>h.push({key:"n"+$[2],text:$[3],w:224,h:44,size:26,color:"#f4bd7e"})),h.push({key:"AFCI",text:"AFCI",w:112,h:44,size:26,color:"#9fc4ff"},{key:"GFCI",text:"GFCI",w:112,h:44,size:26,color:"#ffe08a"}),h.push({key:"rating",text:"200 A \xB7 120/240 V \xB7 1\xD8 3W",w:420,h:44,size:24,color:"#cfd4da"}),h.push({key:"mon",w:320,h:200,text:"49 A",sub:"of a 100 A service",ratio:.49,draw($,Be,te,oe){$.fillStyle="#05070b",$.fillRect(0,0,Be,te);let K=oe.ratio>.9?"#ff6b4f":oe.ratio>.7?"#f4bd7e":"#8fd3a6";$.textAlign="left",$.textBaseline="middle",$.fillStyle="#8b93a1",$.font="600 17px ui-monospace, Menlo, monospace",$.fillText("DEMAND",20,30),$.fillStyle=K,$.font="700 74px ui-monospace, Menlo, monospace",$.fillText(oe.text,18,92),$.fillStyle="#cfd4da",$.font="500 19px ui-monospace, Menlo, monospace",$.fillText(oe.sub,20,146),$.fillStyle="#1c222c",$.fillRect(20,168,Be-40,14),$.fillStyle=K,$.fillRect(20,168,(Be-40)*Math.min(1,oe.ratio),14)}}),h.push({key:"dir",w:300,h:420,draw($,Be,te){$.fillStyle="#e9e4d6",$.fillRect(0,0,Be,te),$.fillStyle="#1a1c20",$.font="700 20px ui-monospace, Menlo, monospace",$.textAlign="left",$.textBaseline="middle",$.fillText("CIRCUIT DIRECTORY",14,24),$.strokeStyle="rgba(20,22,26,.45)",$.lineWidth=1,$.font="500 13px ui-monospace, Menlo, monospace",["KITCHEN PLUGS","BEDROOM 1 \xB7 AFCI","BEDROOM 2 \xB7 AFCI","BATH \xB7 GFCI","LIVING","FURNACE","RANGE 40A","DRYER 30A","WATER HTR 30A","A/C 30A","EV CHARGER 50A","HOT TUB 60A","HEAT PUMP 40A","SUITE 40A"].forEach((K,ne)=>{let ue=54+ne*25;$.beginPath(),$.moveTo(12,ue+12),$.lineTo(Be-12,ue+12),$.stroke(),$.fillText(String(ne+1).padStart(2,"0")+"  "+K,14,ue)})}});let p=a(h,{width:1024,emissive:.22});e(2,1.9,.03,s.plywood,.2,.1,-.015,l,{uv:{ox:1,oy:1}}),e(2.3,2.4,.1,s.concrete,.2,.05,-.085,l,{cast:!1,uv:!0});let d=.4,u=1,f=.1,v=.004;e(d,u,v,s.enclosureDark,0,0,v/2,l),e(v,u,f,s.enclosure,-d/2,0,f/2,l),e(v,u,f,s.enclosure,d/2,0,f/2,l),e(d,v,f,s.enclosure,0,u/2,f/2,l),e(d,v,f,s.enclosure,0,-u/2,f/2,l),t(.03,.92,s.conduit,0,u/2+.46,.045,l),t(.04,.03,s.enclosure,0,u/2+.012,.045,l),e(.19,.125,.026,s.blackPlastic,.42,.3,.013,l,{r:.006});let m=p.plane("mon",.168,c,.42,.3,.0268,{keep:!0});n([[.325,.3,.012],[.27,.31,.014],[.215,.33,.03]],.004,s.rubber,l,{radial:6}),e(.11,.075,.058,s.blackPlastic,0,.39,.035,l,{r:.004});let g=e(.034,.024,.022,i.std(1908773,.4,.1,{emissive:16039294,emissiveIntensity:0}),0,.39,.072,c,{r:.003,keep:!0});p.plane("a200",.05,l,0,.365,.0646),[-.03,.03].forEach($=>e(.022,.022,.03,s.brass,$,.447,.03,l)),[[-.03,s.rubber],[.03,i.std(9183002,.6)],[.085,s.whitePlastic]].forEach(([$,Be],te)=>n([[te===2?.02:$*.4,.5,.045],[$*.8,.485,.04],[$,.46,.032]],.0075,Be,l,{radial:8,seg:10}));let M=s.copperHot.clone(),S=[-.012,.012].map($=>e(.016,.74,.005,M,$,-.02,.012,c,{keep:!0,cast:!1}));[-.03,.03].forEach(($,Be)=>e(.016,.06,.005,M,$*.7,.36,.012,l,{cast:!1}));let y={},_=s.greyPlastic,T=s.rubber,A=i.std(9183002,.6),x=s.whitePlastic,w=($,Be)=>{let te=0;$.forEach(([oe,K,ne,ue,Ge])=>{let Oe=K===2?(so(te)+so(te+1))/2:so(te),Je=K===2?$d*2-.002:$d-.002,je=Be*.076;e(.088,Je,.055,s.blackPlastic,je,Oe,.0325,l,{r:.0025,cast:!1});let q=Be*.047,gt=_;ne&&(gt=i.std(4869975,.5,.05,{emissive:16753981,emissiveIntensity:0}),y[ne]={handle:gt,level:null,pos:o(je,Oe,.06),amps:oe}),e(.015,K===2?Je*.72:.0125,.013,gt,q,Oe,.0655,ne?c:l,{r:.002,cast:!1,keep:!!ne}),p.plane("a"+oe,.02,l,Be*.07,Oe+(K===2?.009:0),.0603),ue&&p.plane("n"+ne,.05,l,Be*.087,Oe-.011,.0603),Ge&&(p.plane(Ge,.026,l,Be*.099,Oe,.0603),e(.007,.007,.004,Ge==="AFCI"?s.bluePlastic:s.yellowPlastic,Be*.118,Oe,.062,l,{cast:!1}));for(let dt=0;dt<K;dt++){let O=te+dt,E=so(O);e(.03,.007,.004,s.copper,Be*.024+(O%2?.012:-.012)*.3,E,.016,l,{cast:!1});let j=Be*(.146+O%4*.0045),se=.026+O%3*.008;n([[Be*.121,E,.034],[Be*.134,E+.002,se+.004],[j,E+.02,se],[j,.3+O%5*.01,se],[Be*(.1+O%6*.012),.492,.03+O%2*.04]],.0023,K===2&&dt===1?A:T,l,{radial:5,seg:14,cast:!1})}te+=K})};w(qd,-1),w(Zd,1),[-1,1].forEach($=>{e(.012,.52,.008,s.aluminum,$*.176,-.02,.012,l,{cast:!1});for(let Be=0;Be<22;Be++)t(.0034,.004,s.galv,$*.176,.22-Be*.0225,.018,l,{axis:"z",seg:6,cast:!1});for(let Be=0;Be<9;Be++){let te=.2-Be*.05;n([[$*.176,te,.02],[$*.164,te+.03,.05+Be%3*.008],[$*.162,.33,.055+Be%3*.008],[$*(.06+Be*.012),.492,.07]],.0023,x,l,{radial:5,seg:12,cast:!1})}}),e(.36,.01,.004,s.aluminum,0,-.3,.008,l,{cast:!1}),e(.18,.012,.008,s.brass,-.05,-.43,.012,l,{cast:!1}),n([[-.1,-.43,.02],[-.13,-.47,.04],[-.13,-.56,.04],[-.2,-.75,.012],[-.7,-.82,.008]],.004,s.copper,l,{radial:6});let C=new at;C.userData.keep=!0,c.add(C);let F=.0585,b=s.enclosure;e(.07,.98,.003,b,-.159,0,F,C),e(.07,.98,.003,b,.159,0,F,C),e(.056,.66,.003,b,0,-.02,F,C),e(.248,.062,.003,b,0,.459,F,C),e(.064,.094,.003,b,-.092,.381,F,C),e(.064,.094,.003,b,.092,.381,F,C),e(.248,.018,.003,b,0,.323,F,C),e(.248,.292,.003,b,0,-.344,F,C);let L=p.plane("rating",.2,C,0,.462,F+.002),P=new at;P.userData.keep=!0,P.position.set(-d/2,0,f+.002),c.add(P),e(d,u,.003,s.enclosure,d/2,0,0,P);let H=p.plane("dir",.24,P,d/2,.02,-.003);H.rotation.y=Math.PI,e(.012,.06,.012,s.galv,d-.02,0,.006,P),P.rotation.y=-2.05;let Z={15:s.whitePlastic,20:s.yellowPlastic,30:s.orangePlastic,40:s.rubber,50:s.rubber,60:s.rubber},V={15:r(16763274,{base:12170667,intensity:.7,dash:2.2,speed:.9,rest:0,gain:1,roughness:.6}),20:r(16758863,{base:13215008,intensity:.7,dash:2.2,speed:.9,rest:0,gain:1,roughness:.6})},W=.955,G=0,k=($,Be,te)=>{let oe=G++,K=-.17+oe%13*.028,ne=.028+oe%2*.042,ue=$>=40?.0085:$===30?.0065:.0052,Ge=[[K,.5,ne],[K,.66+oe%3*.03,ne],[K*1.4,W-.06,ne+.05],[K*1.6,W,ne+.16+oe%4*.03]],Oe=.3+oe%7*.035,Je=te==="south"?[[-.6,W,Oe],[-2.2,W,Oe],[-5.4,W,Oe+.2]]:te==="north"?[[.6,W,Oe],[1.6,W,Oe],[2.1,W,Oe+1.2],[2.1,W,5.5]]:te==="east"?[[K*1.2,W,.9],[K,W,3.2],[K+.6,W,7.4]]:te==="up"?[[-.42,W+.1,.3],[-.42,W+.9,.34]]:[[.5,W,.2],[.62,W+.02,.02],[.62,W+.02,-.4]],je=Z[$];Be&&y[Be]?(je=r(16753981,{base:1513757,intensity:2.6,dash:1.6,speed:1.1,rest:0,gain:1,level:0}),y[Be].level=je.userData.level):V[$]&&(je=V[$]),n([...Ge,...Je],ue,je,l,{radial:7,density:9,tension:.35,cast:oe%3===0})},Y=["south","north","south","east","north","south","north","south"];qd.filter($=>!$[2]).forEach(($,Be)=>k($[0],null,Y[Be%Y.length])),Zd.filter($=>!$[2]).forEach(($,Be)=>k($[0],null,Y[(Be+3)%Y.length])),k(40,"range","up"),k(30,"dryer","south"),k(40,"hp","south"),k(30,"base","north"),k(30,"wh","south"),k(30,"ac","out"),k(50,"ev","east"),k(60,"spa","out"),k(40,"suite","north"),e(2.4,.02,.09,s.studs,-.4,W+.012,.5,l,{uv:!0,cast:!1});let he=o(.72,-.2,0);e(.06,.098,.062,s.bluePlastic,he.x,he.y,.031,l,{r:.004});let we=new at;we.position.set(he.x+.012,he.y-.004,.118),we.rotation.set(.12,-.5,.06),we.userData.keep=!0,c.add(we),e(.034,.104,.024,s.whitePlastic,0,0,0,we,{r:.004}),e(.04,.118,.0016,s.galv,0,0,.0128,we),[.028,-.028].forEach($=>{e(.004,.011,.002,s.rubber,-.006,$,.0125,we,{cast:!1}),e(.004,.011,.002,s.rubber,.006,$,.0125,we,{cast:!1})}),[.012,-.012].forEach($=>{t(.0035,.004,s.brass,.0185,$,-.004,we,{axis:"x",seg:8}),t(.0035,.004,s.aluminum,-.0185,$,-.004,we,{axis:"x",seg:8})}),n([[he.x-.01,.62,.012],[he.x-.012,.2,.014],[he.x-.008,he.y+.05,.02]],.0058,s.greyPlastic,l,{radial:7});let Ie=[];[[-1,s.aluminum],[1,s.aluminum]].forEach(([$,Be])=>{let te=o(he.x+$*.03,he.y+.012*$+.02,.085+($>0?.012:0));n([[he.x-.008+$*.004,he.y+.045,.022],[he.x+$*.02,he.y+.05,.05],[te.x,te.y+.016,te.z]],.0019,Be,l,{radial:6,seg:12,cast:!1});let oe=t(.0078,.027,s.purple,te.x,te.y,te.z,c,{seg:12,keep:!0});Ie.push(oe),t(.0086,.006,s.purple,te.x,te.y+.0135,te.z,l,{seg:12}),n([[te.x,te.y+.014,te.z],[te.x+$*.012,te.y+.03,te.z+.012],[he.x+.012+$*.026,he.y+.006*$,.1],[he.x+.012+$*.02,he.y-.004+.012*$,.112]],.0017,s.copper,l,{radial:6,seg:14,cast:!1})}),i.bake(l);let Xe={meter:o(2.8,1.5,-4.42),main:nr.clone().add(o(0,.39,.075)),bus:nr.clone().add(o(0,-.06,.02)),branch:nr.clone().add(o(-.076,so(3),.06)),range:nr.clone().add(y.range.pos),ev:nr.clone().add(y.ev.pos),spa:nr.clone().add(y.spa.pos),alu:nr.clone().add(o(he.x+.03,he.y+.03,.09)),afci:nr.clone().add(o(.099,so(.5),.06)),load:nr.clone().add(o(.33,.35,.03))},rt={fx:2.8,fz:-3.9,time:19.4,cut:0,ghost:0,ground:1,orbit:.012},Q=[{...rt,radius:15,theta:3.42,phi:1.4,ty:2.8,fz:-4.2,dof:0,orbit:.03,time:15.5},{...rt,radius:3.4,theta:3.5,phi:1.72,ty:1.95,fz:-4.35,dof:.8,time:15.5},{...rt,radius:1.5,theta:.3,phi:1.44,ty:-1,dof:1.2},{...rt,radius:1.45,theta:-.28,phi:1.47,ty:-1.24,dof:1.3},{...rt,radius:1.75,theta:.34,phi:1.74,ty:-.98,fz:-3.8,dof:1.1},{...rt,radius:1.15,theta:1,phi:1.5,ty:-1.3,fx:3.45,dof:1},{...rt,radius:1.85,theta:.2,phi:1.6,ty:-.98,fx:3,fz:-3.8,dof:1}],de=new Set(["range","dryer","ac"]),Ce="",xe=0,Ue=["range","ev","spa"];return{name:"panel",group:c,anchors:Xe,shots:Q,hides:$=>$.sys.electrical?$.sys.electrical.meshes:[],input($){if($&&($.on&&(de=new Set($.on)),$.amps!==void 0&&$.service)){let Be=`${Math.round($.amps)} A`,te=`of a ${$.service} A service`;Be+te!==Ce&&(Ce=Be+te,p.set("mon",Be,te,{ratio:$.amps/$.service}))}},light($){return $===0?{pos:[2.2,3.4,-7.4],at:[2.8,1.6,-4.3],power:0}:$===1?{pos:[2.2,3.4,-7.4],at:[2.8,1.6,-4.3],power:.55,fill:.3}:$===5?{pos:[2.9,-.45,-2.2],at:[3.52,-1.45,-3.9],power:.8}:{pos:[1.5,-.5,-1.7],at:[2.8,-1.2,-3.9],power:1}},update({step:$,k:Be,t:te,dt:oe,snap:K}){let ne=K?1:1-Math.exp(-oe*5);xe=$e(xe,$===3||$===4?1:0,ne);let ue=Et(0,1,xe);C.position.set(.52*ue,-.99*ue,.2*Math.sin(Math.PI*ue)+.075*ue),C.rotation.set(-.13*ue,0,-.05*ue),M.emissiveIntensity=.08+.26*ue+($===3?.12*Math.sin(te*2.2):0),g.material.emissiveIntensity=$===2?.4+.2*Math.sin(te*3):.06;let Ge=$===3?1:$===6?.35:.12;Object.values(V).forEach(Oe=>{Oe.userData.level.value=$e(Oe.userData.level.value,Ge,ne)}),Object.entries(y).forEach(([Oe,Je])=>{let je=$===4?Ue.includes(Oe)?1:0:$===6&&de.has(Oe)?1:0;Je.level&&(Je.level.value=$e(Je.level.value,je,ne)),Je.handle.emissiveIntensity=$e(Je.handle.emissiveIntensity,je*2.4,ne)}),Ie.forEach((Oe,Je)=>{Oe.scale.setScalar($===5?1+.08*Math.sin(te*4+Je):1)}),L.visible=ue<.9}}}var Zt=.6,Or=.42,ni=Or+.004,di=.86,rs=-4.25,Kd=-3.4,xr=13.62,jd=Math.atan2(.26,xr),Bp=Math.cos(jd),Hp=Math.sin(jd),Ss=-18.2,bs=-3.95,Ts=.19,ju=.15,ro=.75,ih=.12,eh=18,un=.075,th=.092,sa=.116,zp=.096,cy=11;var Gp=2,pr=[4.62,6.87],mr=[6.95,9.05],ws=-14.05,As=-18.95,gr=-4.3,Li=1.3,ii=1.6,On=.7,Fs=-2.9,ra=i=>ih+i*ro,si=(i,e=0,t=0,n=new N)=>n.set(Zt+e,Kd+t*Bp-i*Hp,rs-t*Hp-i*Bp),nh=new it;function as(i,e){nh.set(e);let t=i.attributes.position.count,n=new Float32Array(t*3);for(let s=0;s<t;s++)n[s*3]=nh.r,n[s*3+1]=nh.g,n[s*3+2]=nh.b;return i.setAttribute("color",new Ot(n,3)),i}function Qd(i,e,t,n=14){let s=[];i.forEach((o,c)=>{let l=i[(c+1)%i.length];if(Math.abs(o[0]-l[0])+Math.abs(o[1]-l[1])<1e-6)return;let h=new Vo([new He(o[1],o[0]),new He(l[1],l[0])],n,0,Math.PI).toNonIndexed();h.rotateX(-Math.PI/2),s.push(as(h,e[c]))});let r=new Va(new oi(i.map(([o,c])=>new He(-o,c)))).toNonIndexed();r.rotateY(-Math.PI/2);let a=r.clone();return a.scale(1,-1,1),s.push(as(r,t),as(a,t)),Wi(s)}var Jd=(i,e,t,n,s,r,a)=>Qd([[0,e],[0,t],[i,t],[i,e]],[r,n,r,s],r,a);function kp({kit:i,M:e,Ug:t,tier:n,reduce:s}){let{box:r,cyl:a,tube:o,mats:c,atlas:l,V:h}=i,p=new at;p.name="sewer";let d=new at;p.add(d);let u=ti(1958),f=(z,ze,tt={})=>i.std(16777215,z,ze,{vertexColors:!0,side:Xn,...tt}),v=f(.74,0),m=f(.48,.8,{envMapIntensity:1.1}),g=v,M=(z,ze,tt,nt,ft,Rt,ct,wt,Gt={})=>{let Qt=r(z,ze,tt,Gt.mat||v,ft,Rt,ct,wt,Gt);return as(Qt.geometry,nt),Qt},S=(z,ze,tt,nt,ft,Rt,ct,wt={})=>{let Gt=a(z,ze,wt.mat||v,nt,ft,Rt,ct,wt);return as(Gt.geometry,tt),Gt},y=(z,ze,tt,nt,ft={})=>{let Rt=o(z,ze,ft.mat||v,nt,ft);return as(Rt.geometry,tt),Rt},_=(z,ze,tt={})=>i.place(new De(z,tt.mat||v),tt.x||0,tt.y||0,tt.z||0,ze,tt),T=(z,ze,tt,nt={})=>(as(z,ze),i.place(new De(z,nt.mat||v),nt.x||0,nt.y||0,nt.z||0,tt,nt)),A=i.flow(13214314,{base:2892310,intensity:1.1,dash:1.4,speed:.45,rest:.3,gain:1,roughness:.12}),x=(z,ze={})=>i.flow(5220095,{base:z,intensity:1.6,dash:2.2,speed:.7,rest:.05,gain:1,roughness:.4,...ze}),w=t&&t.group?t.group.children.find(z=>z.isMesh&&z.geometry.parameters&&z.geometry.parameters.height===9):null,C=w?w.material:c.soil,F=(z,ze,tt,nt,ft,Rt)=>{let ct=new cn(Math.abs(ze-z),nt-tt);ct.rotateY(-Math.PI/2),ct.translate(ft,(tt+nt)/2,(z+ze)/2);let wt=ct.attributes.position,Gt=ct.attributes.uv;for(let Qt=0;Qt<wt.count;Qt++)Gt.setXY(Qt,(wt.getZ(Qt)+120)/240,(wt.getY(Qt)+9.02)/9);return i.place(new De(ct,C),0,0,0,Rt,{cast:!1})},b=document.createElement("canvas");b.width=b.height=256;{let z=b.getContext("2d");z.fillStyle="#3b3833",z.fillRect(0,0,256,256);for(let ze=0;ze<520;ze++){let tt=u()*256,nt=u()*256,ft=3+u()*7,Rt=70+u()*90;z.fillStyle=`rgb(${Rt|0},${Rt*.96|0},${Rt*.9|0})`,z.beginPath(),z.ellipse(tt,nt,ft,ft*(.6+u()*.4),u()*3,0,6.3),z.fill(),z.fillStyle="rgba(255,255,255,0.12)",z.beginPath(),z.ellipse(tt-ft*.25,nt-ft*.25,ft*.45,ft*.3,0,0,6.3),z.fill()}}let L=new Dn(b);L.colorSpace=fn,L.wrapS=L.wrapT=Gn,L.repeat.set(2.6,2.6);let P=i.std(16777215,.95,0,{map:L}),H=new yn({color:16039294,toneMapped:!1}),Z=(z,ze,tt,nt)=>{let ft=new De(new ln(.05,.06,Math.abs(ze-z)),H);return ft.position.set(tt-.02,.02,(z+ze)/2),ft.userData.noAO=!0,nt.add(ft),ft},V=(z,ze,tt=[],nt=d,ft=ni)=>{let Rt=new oi(z.map(([wt,Gt])=>new He(wt,Gt)));tt.forEach(wt=>Rt.holes.push(wt.length===3?new Js().absarc(wt[0],wt[1],wt[2],0,Math.PI*2,!1):new Js(wt.map(([Gt,Qt])=>new He(Gt,Qt)))));let ct=new Va(Rt,8);return ct.rotateY(-Math.PI/2),ct.translate(ft,0,0),typeof ze=="object"?i.place(new De(ct,ze),0,0,0,nt,{cast:!1}):T(ct,ze,nt,{cast:!1})},W=[{key:"mon",w:320,h:232,text:"0.0 m",sub:"CLAY 150 mm",flag:"",draw:G},{key:"pvc",text:"SEWER PVC \xB7 SDR 35 \xB7 150 mm \xB7 2025",w:600,h:34,size:22,color:"#eef3ec"},{key:"pb",text:"PB \xB7 19 mm \xB7 1987",w:300,h:34,size:22,color:"#22262b"},{key:"pl",text:"PROPERTY LINE",w:220,h:54,size:26,color:"#1a1206",bg:"#f08a2c"},{key:"permit",text:"CONNECTION PERMIT",sub:"INSPECTED \xB7 BACKFILL OK",w:260,h:74,size:22,color:"#15130c",bg:"#e9c22e"},{key:"shut",text:"MAIN SHUT-OFF",w:200,h:46,size:22,color:"#fff4ea",bg:"#b8321f"},{key:"pump",text:"SUMP \xB7 1/3 HP",w:180,h:40,size:22,color:"#d9dde2"}];function G(z,ze,tt,nt){z.fillStyle="#05070a",z.fillRect(0,0,ze,tt);let ft=ze/2,Rt=tt/2+14,ct=z.createRadialGradient(ft,Rt,4,ft,Rt,112);ct.addColorStop(0,"#040201"),ct.addColorStop(.32,"#1d1008"),ct.addColorStop(.78,"#9a6038"),ct.addColorStop(1,"#4a2c18"),z.fillStyle=ct,z.beginPath(),z.arc(ft,Rt,108,0,6.3),z.fill(),z.strokeStyle="rgba(14,8,4,.85)",z.lineWidth=6;let wt=nt.flag==="OFFSET JOINT"?9:0;if(z.beginPath(),z.arc(ft,Rt+wt,46,0,6.3),z.stroke(),z.fillStyle="rgba(150,112,62,.75)",z.beginPath(),z.ellipse(ft,Rt+86,58,12,0,0,6.3),z.fill(),nt.flag==="CRACK"&&(z.strokeStyle="#0a0503",z.lineWidth=3,z.beginPath(),z.moveTo(ft-18,Rt-104),z.lineTo(ft-8,Rt-80),z.lineTo(ft-20,Rt-62),z.lineTo(ft-9,Rt-44),z.stroke()),nt.flag==="ROOTS"){z.strokeStyle="#d8c49a",z.lineWidth=2;for(let Gt=0;Gt<9;Gt++)z.beginPath(),z.moveTo(ft-40+Gt*10,Rt-46),z.quadraticCurveTo(ft-30+Gt*7,Rt,ft-20+Gt*5,Rt+20),z.stroke()}z.textAlign="left",z.textBaseline="middle",z.fillStyle="#f4bd7e",z.font="700 28px ui-monospace, Menlo, monospace",z.fillText(nt.text,14,24),z.fillStyle="#cfd4da",z.font="500 15px ui-monospace, Menlo, monospace",z.fillText(nt.sub,14,50),z.fillStyle="#ff6b4f",z.beginPath(),z.arc(ze-22,22,7,0,6.3),z.fill(),z.textAlign="right",z.fillStyle="#cfd4da",z.font="600 14px ui-monospace, Menlo, monospace",z.fillText("REC",ze-36,23),nt.flag&&(z.textAlign="left",z.fillStyle="#ff6b4f",z.font="700 20px ui-monospace, Menlo, monospace",z.fillText(nt.flag,14,tt-18))}let k=l(W,{width:1024,emissive:.26}),Y=new at;Y.position.set(Zt,Kd,rs),Y.rotation.x=-jd,d.add(Y);let he={out:9064756,inn:5977123,end:7620398,cut:12880480},we=Qd([[0,zp],[0,sa],[.09,sa],[.125,th],[ro+.075,th],[ro+.075,un],[.1,un],[.1,zp]],[he.end,he.out,he.out,he.out,he.end,he.inn,he.inn,4138008],he.cut,18),Ie=new Ri(we,v,eh);Ie.castShadow=!0,Ie.receiveShadow=!0,Ie.frustumCulled=!1,Ie.userData.keep=!0,Y.add(Ie);let Xe=z=>z===Gp?-.013:z===4?-.016:z===5?-.024:z===6?-.01:0,rt=[],Q=new Mt,de=new Mt().makeScale(0,0,0);for(let z=0;z<eh;z++)rt.push(new Mt().makeTranslation(0,Xe(z),-ra(z))),Ie.setMatrixAt(z,rt[z]);let Ce="",xe=z=>{let ze="";for(let tt=0;tt<eh;tt++)ze+=z(tt)?"0":"1";if(ze!==Ce){Ce=ze;for(let tt=0;tt<eh;tt++)Ie.setMatrixAt(tt,ze[tt]==="1"?rt[tt]:de);Ie.instanceMatrix.needsUpdate=!0}};y([[.02,un*.99,-1.02],[.034,un*.97,-1.18],[.022,un*.98,-1.32],[.04,un*.96,-1.5]].map(([z,ze,tt])=>{let nt=un*.985/Math.hypot(z,ze);return[z*nt,ze*nt,tt]}),.0028,1182214,Y,{radial:5,seg:16,cast:!1});let Ue=(z,ze,tt,nt,ft,Rt=A,ct=0)=>{let wt=new cn(ze-z,nt);wt.rotateX(-Math.PI/2),wt.rotateY(Math.PI/2),wt.translate(ct+nt/2,tt,-(z+ze)/2);let Gt=wt.attributes.position,Qt=wt.attributes.uv;for(let fi=0;fi<Gt.count;fi++)Qt.setX(fi,-Gt.getZ(fi));return i.place(new De(wt,Rt),0,0,0,ft,{cast:!1})},$=z=>Math.sqrt(un*un-(un-z)*(un-z));Ue(0,xr,-un+.016,$(.016),Y),Ue(ra(4)-.05,ra(7)-.1,-un+.014,$(.03),Y).position.y=-.018;let Be=new at,te=.78,oe=-3.06,K=Math.atan2(oe-Kd-.02,te-rs);Be.position.set(Zt,oe,te),Be.rotation.x=-K,d.add(Be);let ne={out:3026996,inn:5190692,cut:9277590},ue=te-rs+.12;_(Jd(ue,un,.086,ne.out,ne.inn,ne.cut,16),Be),[0,1.5,3,4.5].forEach(z=>_(Qd([[z,.086],[z,.104],[z+.09,.104],[z+.12,.086]],[ne.cut,ne.out,ne.out,ne.out],ne.cut,16),Be)),Ue(.05,ue,-un+.014,$(.014),Be),S(.056,.4,ne.out,-.2,.012,-2.75,Be,{axis:"x",seg:16});{let z=oe-(te-Fs)*Math.tan(K)+.06;_(Jd(-2.77-z,.052,.062,ne.out,ne.inn,ne.cut,14).rotateX(Math.PI/2),d,{x:Zt,y:z,z:Fs})}S(.09,.012,9212827,Zt,-2.795,te+.04,d,{mat:m,seg:24}),y([[Zt,-2.8,te+.04],[Zt,-3.08,te+.06],[Zt,-3.2,te-.04],[Zt,-3.1,te-.14],[Zt,-3.06,te-.02]],.05,ne.out,d,{radial:12,seg:24});let Ge=e.form||e.concrete;V([[-4.5,-3.25],[-3.7,-3.25],[-3.7,-2.95],[-4,-2.95],[-4,.3],[-4.25,.3],[-4.25,-2.95],[-4.5,-2.95]],Ge),V([[4.5,-3.25],[3.7,-3.25],[3.7,-2.95],[4,-2.95],[4,.3],[4.25,.3],[4.25,-2.95],[4.5,-2.95]],Ge,[[4.125,-2.3,.028]]),[[-4,Fs-.07],[Fs+.07,te-.07],[te+.13,ii-.25],[ii+.25,4]].forEach(([z,ze])=>V([[z,-2.96],[ze,-2.96],[ze,-2.8],[z,-2.8]],e.slab||7170659)),[-1,1].forEach(z=>M(di-ni,3,.012,1447963,(ni+di)/2,-1.55,z*4.258,d,{cast:!1})),F(rs,ws,-9.02,0,di,d),F(As,-60,-9.02,0,di,d),F(-rs,60,-9.02,0,di,d),F(rs,-rs,-9.02,-2.96,di,d),Z(rs,ws,di,d),Z(As,-60,di,d),Z(-rs,60,di,d);let Oe=new at;Oe.userData.keep=!0,p.add(Oe),F(ws,As,-9.02,0,di,Oe);let Je={out:8815226,inn:4999491,cut:11117980},je=2.6;[[Ts,Je.out],[ju,Je.inn]].forEach(([z,ze])=>S(z,je,ze,ni+je/2,bs,Ss,d,{axis:"x",seg:32,open:!0}));let q=new Jr(ju,Ts,32);q.rotateY(-Math.PI/2),T(q,Je.cut,d,{x:ni,y:bs,z:Ss,cast:!1});let gt=Math.sqrt(ju*ju-.085*.085);{let z=new cn(je,gt*2);z.rotateX(-Math.PI/2),z.translate(ni+je/2,bs-.085,Ss);let ze=z.attributes.uv,tt=z.attributes.position;for(let nt=0;nt<tt.count;nt++)ze.setX(nt,tt.getX(nt));i.place(new De(z,A),0,0,0,d,{cast:!1})}let dt=new at;dt.userData.keep=!0,p.add(dt);let O=[si(xr-.25),si(xr),h(Zt,bs+.25,Ss+.2),h(Zt,bs+Ts*.72,Ss+Ts*.68)];y(O,th,he.out,dt,{radial:16,seg:16}),T(new Ln(.15,14,10),7828331,dt,{x:Zt,y:bs+Ts*.72,z:Ss+Ts*.68}).scale.set(.8,.7,1);let E=6966835,j=[13350026,11112036,14272416],se=ra(cy),fe=(z,ze,tt,nt,ft,Rt={})=>{let ct=[z[0]];for(let Bi=1;Bi<z.length;Bi++){let us=z[Bi-1],Qi=z[Bi],sn=Math.hypot(Qi[0]-us[0],Qi[1]-us[1],Qi[2]-us[2])*(Rt.wob??.12);for(let Hi=1;Hi<=3;Hi++){let vn=Hi/3;ct.push(Hi===3?Qi:[$e(us[0],Qi[0],vn)+(u()-.5)*sn*.3,$e(us[1],Qi[1],vn)+(u()-.5)*sn,$e(us[2],Qi[2],vn)+(u()-.5)*sn])}}let wt=y(ct,ze,nt,ft,{radial:Rt.radial||6,density:Rt.density||26,tension:.4,cast:Rt.cast??ze>.01}),Gt=wt.geometry,{tubularSegments:Qt,radialSegments:fi}=Gt.parameters,zs=Gt.attributes.position,Xi=new N;for(let Bi=0;Bi<=Qt;Bi++){wt.userData.curve.getPointAt(Bi/Qt,Xi);let us=$e(1,tt/ze,Math.pow(Bi/Qt,.8));for(let Qi=0;Qi<=fi;Qi++){let sn=Bi*(fi+1)+Qi;zs.setXYZ(sn,Xi.x+(zs.getX(sn)-Xi.x)*us,Xi.y+(zs.getY(sn)-Xi.y)*us,Xi.z+(zs.getZ(sn)-Xi.z)*us)}}return wt},Ve=(z,ze=0,tt=sa+.006)=>si(se+ze,tt*Math.sin(z),tt*Math.cos(z));[[.034,.008,[[.83,-.12,-12.4],[.8,-.6,-12],[.78,-1.3,-11.6],[.76,-2,-11.45],[.74,-2.7,-11.8]]],[.03,.007,[[.83,-.15,-12.48],[.8,-.7,-13],[.77,-1.4,-13.4],[.75,-2.2,-13.5],[.73,-2.9,-13.2]]],[.028,.006,[[.83,-.2,-12.44],[.79,-1,-12.5],[.76,-1.9,-12.66],[.73,-2.7,-12.7],Ve(.25,-.02,.15).toArray()]]].forEach(([z,ze,tt])=>fe(tt,z,ze,E,d));for(let z=0;z<8;z++){let ze=.2+u()*1.4,tt=-11.9-u()*1.4,nt=[.7+u()*.1,-2.6-u()*.5,tt],ft=[nt[0]-.02+u()*.04,$e(nt[1],-3.3,.45),$e(tt,-12.62,.4)+(u()-.5)*.25],Rt=Ve(ze+.5,-.12+u()*.08,.17);fe([nt,ft,Rt.toArray(),Ve(ze,-.03,sa+.008).toArray(),Ve(ze+.2,.004,.106).toArray()],.0055,.0016,E,d,{radial:5,density:40,cast:!1})}for(let z=0;z<18;z++){let ze=u()*1.7,tt=-.06+u()*.16,nt=.4+u()*.8;fe([Ve(ze,tt,sa+.004).toArray(),Ve(ze+nt*.5,tt+.02,sa+.009).toArray(),Ve(ze+nt,tt-.01,sa+.004).toArray()],.0028,.0012,E,d,{radial:4,density:60,cast:!1})}let ke=new at;ke.userData.keep=!0,ke.position.set(0,0,-(se+.075)),Y.add(ke);let Te=n===0?26:44;for(let z=0;z<Te;z++){let ze=.05+u()*3.05,tt=.12+u()*u()*.6,nt=z<5?.0045:.0016+u()*.0018,ft=un*.97*Math.sin(ze),Rt=un*.97*Math.cos(ze),ct=0,wt=-ft*.25,Gt=-.2-Rt*.2,Qt=[];for(let fi=0;fi<=9;fi++){Qt.push([ft,Rt,ct]),ct-=tt/9,wt+=(u()-.5)*.7,Gt+=(u()-.62)*.5,ft+=wt*tt*.06,Rt+=Gt*tt*.06;let zs=Math.hypot(ft,Rt);zs>un*.94&&(ft*=un*.94/zs,Rt*=un*.94/zs,wt*=-.5,Gt*=-.5)}fe(Qt,nt,nt*.35,j[z%3],ke,{radial:4,density:50,cast:!1,wob:0})}Mi(ke);let ve=se-.8,Ke=se+.9,xt=48,D=16,J=new jt(un-.0018,un-.0018,Ke-ve,D,xt,!0,0,Math.PI);J.rotateX(-Math.PI/2);let le=new De(as(J,9207644),f(.9,0));le.position.set(0,0,-(ve+Ke)/2),le.userData.keep=!0,le.receiveShadow=!0,Y.add(le);let ge=new at;ge.userData.keep=!0,p.add(ge);let Le=new at;ge.add(Le);let B=1.55,Se=-2.5,re=-2.42;[B-.09,B+.09].forEach(z=>{y([[z,-2.79,re-.26],[z,Se,re],[z,-2.79,re+.26]],.011,9212827,Le,{mat:m,radial:8,tension:0}),S(.013,.56,9212827,z,-2.79,re,Le,{axis:"z",mat:m,seg:8})}),S(.014,.2,9212827,B,Se,re,Le,{axis:"x",mat:m,seg:10});let Ne=1,Re=-2.92,U=.32;M(.17,.075,.26,1776929,Ne,-2.762,Re,Le,{r:.012}),M(.07,.01,.12,3817029,Ne-.03,-2.722,Re+.04,Le,{cast:!1});let be=new at;be.position.set(Ne+.075,-2.725,Re),be.rotation.z=U,Le.add(be),M(.016,.2,.26,1776929,-.008,.1,0,be,{r:.006});let ce=k.plane("mon",.225,ge,0,0,0,{keep:!0});ce.rotation.order="ZYX",ce.rotation.set(0,-Math.PI/2,U),ce.position.set(Ne+.075-.0165*Math.cos(U)-.1*Math.sin(U),-2.725-.0165*Math.sin(U)+.1*Math.cos(U),Re);let et=new at;et.position.set(B,Se,re),ge.add(et),S(.25,.014,2500910,.075,0,0,et,{axis:"x",seg:36}),S(.05,.15,3817029,0,0,0,et,{axis:"x",seg:16});for(let z=0;z<7;z++){let ze=new Pi(.11+z*.019,.0075,6,40);ze.rotateY(Math.PI/2),T(ze,14857514,et,{x:-.02+z%2*.016,cast:!1})}[0,2.1,4.2].forEach(z=>M(.012,.36,.03,9212827,.06,0,0,et,{mat:m,rot:[z,0,0],cast:!1})),Mi(et);let ot=z=>oe-(te-z)*Math.tan(K);y([[B-.04,Se-.23,re-.1],[B-.12,-2.775,re-.32],[1.2,-2.79,-2.62],[.84,-2.785,-2.68],[Zt+.08,-2.76,Fs+.04],[Zt+.01,-2.86,Fs],[Zt,ot(Fs)-.06,Fs-.04]],.0055,14857514,Le,{radial:6,density:24,tension:.4,cast:!1}),y([[B-.06,Se,re],[B-.2,-2.79,re-.1],[Ne+.06,-2.79,Re+.18],[Ne+.05,-2.76,Re+.12]],.005,1052948,Le,{radial:6,cast:!1}),S(.05,.03,11569722,.76,-2.785,Fs+.3,Le,{mat:m,seg:16}),Mi(Le);let Ct=new Ci([h(Zt,ot(Fs-.1)-un,Fs-.1),h(Zt,ot(-3.6)-un,-3.6),h(Zt,ot(rs+.1)-un,rs+.1),si(.3,0,-un),si(1,0,-un),si(1.6,0,-un)],!1,"catmullrom",.2),Lt=120,Wt=o(Ct.getSpacedPoints(Lt),.0055,v,p,{seg:Lt,radial:6,keep:!0,cast:!1});as(Wt.geometry,14857514);let tn=new N,Bn=new N,pn=new at;pn.userData.keep=!0,p.add(pn),M(.06,.034,.16,15319598,0,.002,0,pn,{r:.008}),M(.03,.012,.1,2764081,0,.024,.01,pn,{r:.004}),[-1,1].forEach(z=>[-1,1].forEach(ze=>{let tt=S(.02,.013,1052948,z*.039,-.012,ze*.058,pn,{axis:"x",seg:14});tt.rotation.z=z*.5})),S(.022,.06,10133929,0,.008,-.105,pn,{axis:"z",seg:18}),S(.0095,.006,329224,0,.008,-.136,pn,{axis:"z",seg:14}),S(.008,.03,2764081,0,.004,.092,pn,{axis:"z",seg:10});let R=new De(new Pi(.0158,.003,6,20),c.led(16773336,2.4));R.position.set(0,.008,-.1355),pn.add(R),Mi(pn);let pe=i.sprite(16769725,.16,0,.008,-.16,pn,.55),Pe=new at;Pe.userData.keep=!0,Y.add(Pe);let Ye=new at;Pe.add(Ye),S(.012,.05,11055288,0,0,0,Ye,{axis:"z",mat:m,seg:12});for(let z=0;z<4;z++){let ze=M(.004,un*1.7,.03,13160148,0,0,-.03,Ye,{mat:m,cast:!1});ze.rotation.z=z*Math.PI/4}S(.009,.04,5593439,0,0,.04,Pe,{axis:"z",mat:m,seg:10}),Mi(Ye),Mi(Pe);let qe=new jt(.0085,.0085,1,8,1,!0);qe.translate(0,.5,0),qe.rotateX(-Math.PI/2);let St=new De(as(qe,4869717),m);St.userData.keep=!0,Y.add(St);let lt=new at;lt.userData.keep=!0,Y.add(lt),S(.014,.04,13214282,0,0,0,lt,{axis:"z",mat:m,seg:14}),T(new Ln(.014,14,8,0,Math.PI*2,0,Math.PI/2).rotateX(-Math.PI/2),13214282,lt,{z:-.02,mat:m}),S(.011,.025,10133929,0,0,.032,lt,{axis:"z",mat:m,seg:12}),Mi(lt);let _t=new jt(.009,.009,1,8,1,!0);_t.translate(0,.5,0),_t.rotateX(-Math.PI/2);let vt=new De(as(_t,1382170),g);vt.userData.keep=!0,Y.add(vt);let zt=200,Ht=i.particles(zt,{color:10473727,size:.017,gain:1.6});Y.add(Ht);let Mn=new at;Mn.userData.keep=!0,Y.add(Mn);let bi=60,Fi=16,Oi=pr[1]-pr[0],Ti=i.flow(16751165,{base:6265980,intensity:.75,dash:1.4,speed:.32,rest:.12,gain:1,roughness:.55,metalness:0});Ti.side=Xn;let Ji=new jt(un-.003,un-.003,Oi,Fi,bi,!0,0,Math.PI);Ji.rotateX(-Math.PI/2),Ji.translate(0,0,-(pr[0]+pr[1])/2);{let z=Ji.attributes.position,ze=Ji.attributes.uv;for(let tt=0;tt<z.count;tt++)ze.setX(tt,-z.getZ(tt))}let I=i.place(new De(Ji,Ti),0,0,0,Mn,{keep:!0}),ie=new Ln(un-.003,16,8,0,Math.PI*2,0,Math.PI/2);ie.rotateX(-Math.PI/2),ie.scale(1,1,.45);let Ae=i.place(new De(ie,Ti),0,0,0,Mn,{keep:!0}),me=new jt(.08,.08,1,24,1,!0);me.translate(0,.5,0),me.rotateX(-Math.PI/2);let ye=i.place(new De(me,c.hdpe),0,0,0,Mn,{keep:!0}),ut=new at;ut.userData.keep=!0,Mn.add(ut),S(.03,.17,10134445,0,0,-.085,ut,{axis:"z",r2:.104,mat:m,seg:20}),S(.086,.07,7107451,0,0,.035,ut,{axis:"z",mat:m,seg:20});for(let z=0;z<3;z++){let ze=M(.006,.05,.12,12041926,0,0,-.07,ut,{mat:m});ze.geometry.translate(0,.085,0),ze.rotation.z=z*Math.PI*2/3+.4}S(.006,mr[1]-.05,10133929,0,0,-mr[1]/2+.05,ut,{axis:"z",mat:m,seg:6,cast:!1}),Mi(ut);let yt=44,X=as(new ln(.05,.011,.065),7619114),ee=new Ri(X,v,yt);ee.userData.keep=!0,ee.frustumCulled=!1,ee.castShadow=!0;let ae=[];{let z=new bn,ze=new ki,tt=new N,nt=new N(1,1,1);for(let ft=0;ft<yt;ft++){let Rt=mr[0]+.1+ft/yt*(mr[1]-mr[0]-.15)+u()*.05,ct=u()*Math.PI*2,wt=.1+u()*.05;tt.set(wt*Math.sin(ct),wt*Math.cos(ct),-Rt),ze.set(u()*.5,u()*.6,-ct+(u()-.5)*.6),z.setFromEuler(ze),nt.set(.6+u()*.6,1,.6+u()*.7),Q.compose(tt,z,nt),ee.setMatrixAt(ft,Q),ae.push(Rt)}}Mn.add(ee);let Fe=new at;Fe.userData.keep=!0,p.add(Fe);let Me=new at;Fe.add(Me),F(ws,As,gr,0,Li,Me),F(ws,As,-9.02,gr,di,Me);{[[ws,-1],[As,1]].forEach(([ze,tt])=>{let nt=new cn(Li-Or,-gr);nt.rotateY(tt>0?0:Math.PI),nt.translate((Li+Or)/2,gr/2,ze);let ft=nt.attributes.position,Rt=nt.attributes.uv;for(let ct=0;ct<ft.count;ct++)Rt.setXY(ct,(ft.getX(ct)*.3+60)/240,(ft.getY(ct)+9.02)/9);i.place(new De(nt,C),0,0,0,Me,{cast:!1})});let z=new cn(Li-Or,ws-As);z.rotateX(-Math.PI/2),z.translate((Li+Or)/2,gr,(ws+As)/2),T(z,3877918,Me,{cast:!1})}M(.01,.1,-15.95-As,2763566,Li-.006,-.045,(-15.95+As)/2,Me,{cast:!1}),M(.01,.3,-15.95-As,7828331,Li-.006,-.25,(-15.95+As)/2,Me,{cast:!1}),[-15.1,-16.4,-17.6].forEach(z=>{M(.02,2.4,1,8020294,Li-.012,-1.45,z,Me,{mat:v,cast:!1}),M(.05,2.5,.08,12765390,Li-.048,-1.4,z,Me,{mat:m}),[-.6,-2.3].forEach(ze=>{S(.03,Li-.07-Or+.3,12765390,(Li-.07+Or-.3)/2,ze,z,Me,{axis:"x",mat:m,seg:12}),S(.042,.2,14201402,Li-.25,ze,z,Me,{axis:"x",mat:g,seg:14})})}),[.62,1].forEach(z=>y([[z,gr,ws-.6],[z,.9,ws-.04]],.016,12765390,Me,{mat:m,radial:8,tension:0}));for(let z=0;z<15;z++){let ze=(z+.5)/15;S(.012,.38,12765390,.81,$e(gr,.9,ze),$e(ws-.6,ws-.04,ze),Me,{axis:"x",mat:m,seg:8,cast:!1})}T(new Ln(1,20,10,0,Math.PI*2,0,Math.PI/2),3812125,Me,{x:2.6,y:-.05,z:-15}).scale.set(1.15,.85,1.05),T(new Ln(1,20,6,0,Math.PI*2,0,.7),14673647,Me,{x:2.6,y:-.06,z:-15,cast:!1}).scale.set(1.17,.87,1.07);let Ee=new at;Ee.position.copy(Y.position),Ee.rotation.copy(Y.rotation),Me.add(Ee);let We=ra(13)-.04;{let z=xr-.3,ze=si(We,0,-.035),tt=si(z,0,-.035);V([[ze.z,gr],[tt.z,gr],[tt.z,tt.y],[ze.z,ze.y]],P,[],Me);let nt=new cn(Li-ni,z-We);nt.rotateX(-Math.PI/2),nt.translate((Li+ni)/2-Zt,-.035,-(We+z)/2);let ft=nt.attributes.position,Rt=nt.attributes.uv;for(let ct=0;ct<ft.count;ct++)Rt.setXY(ct,ft.getX(ct),ft.getZ(ct));i.place(new De(nt,P),0,0,0,Ee,{cast:!1}),M(Li-ni-.01,.5,.012,3877918,(Li+ni)/2-Zt,-.3,-We+.006,Ee,{cast:!1})}let Qe=3112266;S(.081,xr-We,Qe,0,0,-(We+xr)/2,Ee,{axis:"z",mat:g,seg:28}),S(.1,.16,1513499,0,0,-We+.02,Ee,{axis:"z",seg:24}),[-.05,.05].forEach(z=>S(.102,.018,12765390,0,0,-We+.02+z,Ee,{axis:"z",mat:m,seg:24,cast:!1})),k.plane("pvc",.62,Ee,-.0815,.012,-(We+.7),{rot:[0,-Math.PI/2,0]}),y([si(xr-.05),si(xr+.1),h(Zt,bs+.24,Ss+.2),h(Zt,bs+Ts*.73,Ss+Ts*.69)],.081,Qe,Me,{mat:g,radial:20,seg:16});{let z=new jt(Ts+.013,Ts+.013,.34,24,1,!0,-.25,2.2);z.rotateZ(Math.PI/2),T(z,Qe,Me,{x:Zt,y:bs,z:Ss,mat:g})}[-.13,.13].forEach(z=>S(Ts+.017,.025,12765390,Zt+z,bs,Ss,Me,{axis:"x",mat:m,seg:32,open:!0,cast:!1})),k.plane("permit",.17,Me,ni+.03,bs+.24,Ss-.26,{rot:[0,-Math.PI/2,0]}),Mi(Me),M(.035,.75,.035,10123858,.66,-.12,-15.95,d),S(.008,.6,5981750,.66,-.7,-15.95,d,{seg:6,cast:!1}),M(.004,.12,.05,15764012,.64,.17,-15.95-.03,d,{cast:!1,rot:[0,0,.2]}),k.plane("pl",.13,d,.64,.05,-15.95,{rot:[0,-Math.PI/2,0]});let st=document.createElement("canvas");st.width=256,st.height=128;{let z=st.getContext("2d"),ze=z.createLinearGradient(0,0,0,128);ze.addColorStop(0,"rgba(220,236,255,0.55)"),ze.addColorStop(.86,"rgba(205,226,252,0.34)"),ze.addColorStop(.97,"rgba(205,226,252,0.12)"),ze.addColorStop(1,"rgba(200,222,250,0)"),z.fillStyle=ze,z.fillRect(0,0,128,128);for(let nt=0;nt<260;nt++)z.fillStyle=`rgba(240,248,255,${.2+u()*.5})`,z.fillRect(u()*128,Math.pow(u(),1.6)*110,1+u()*1.5,1+u()*1.5);let tt=z.createRadialGradient(192,64,2,192,64,62);tt.addColorStop(0,"rgba(8,6,4,0.72)"),tt.addColorStop(1,"rgba(8,6,4,0)"),z.fillStyle=tt,z.fillRect(128,0,128,128)}let mt=new Dn(st);mt.colorSpace=fn;let Ze=new rn({map:mt,transparent:!0,depthWrite:!1,roughness:.9,emissive:10467544,emissiveIntensity:.05}),_e=(z,ze,tt,nt,ft,Rt,ct)=>{let wt=new cn(tt,nt);wt.rotateY(-Math.PI/2);let Gt=wt.attributes.uv;for(let Qt=0;Qt<Gt.count;Qt++)Gt.setX(Qt,$e(z,ze,Gt.getX(Qt)));return i.place(new De(wt,Ze),ft,Rt,ct,d,{cast:!1,receive:!1})};_e(0,.5,26,2.05,di-.004,-1.025,4.25+13),_e(.5,1,.8,.6,di-.006,-2.45,4.8);let bt=-2.32,ht=z=>bt-Math.max(0,z-4.45)*.012,Nt=v,Kt=m;y([[On,ht(4.62),4.62],[On,ht(7.5),7.5],[On,ht(12),12]],.0135,8423053,d,{mat:Nt,radial:10,tension:0}),y([[On,ht(4.6),4.6],[On,bt,4.45],[On,bt,3.96],[On,bt+.06,3.9],[On,bt+.2,3.88],[On,-1.02,3.88],[On,-.3,3.88],[On,-.24,3.8],[On-.5,-.24,3.8]],.0125,12088383,d,{mat:Kt,radial:10,density:26,tension:.15}),S(.019,.04,13214282,On,ht(4.61),4.61,d,{axis:"z",mat:m,seg:14}),[4.585,4.635].forEach(z=>S(.0175,.008,12088383,On,ht(z),z,d,{axis:"z",mat:m,seg:12,cast:!1})),S(.016,.06,8028295,On,ht(4.8),4.8,d,{axis:"z",seg:12}),M(.004,.012,.05,789775,On-.016,ht(4.8)+.004,4.8,d,{cast:!1}),k.plane("pb",.19,d,On-.0145,ht(5.3),5.3,{rot:[0,-Math.PI/2,0]}),S(.022,.07,13214282,On,-1.72,3.88,d,{mat:m,seg:14}),M(.012,.016,.1,12728875,On-.03,-1.7,3.88-.04,d,{mat:g,cast:!1}),k.plane("shut",.11,d,On-.045,-1.8,3.82,{rot:[0,-Math.PI/2,0]}),M(.1,.17,.1,2241610,On,-1.42,3.88,d,{r:.012,mat:g}),S(.04,.02,9212827,On-.05,-1.4,3.88,d,{axis:"x",mat:m,seg:18});let nn=4.7,hn=-3.25;S(.066,di-ni,12433322,(ni+di)/2,hn,nn,d,{axis:"x",seg:24,open:!0}),S(.05,di-ni,1118740,(ni+di)/2,hn,nn,d,{axis:"x",seg:24,open:!0});{let z=new Jr(.05,.066,24);z.rotateY(-Math.PI/2),T(z,2763823,d,{x:ni+.002,y:hn,z:nn,cast:!1});let ze=new Jr(.06,.066,24);ze.rotateY(-Math.PI/2),T(ze,14209990,d,{x:ni+.003,y:hn,z:nn,cast:!1})}V([[4.5,-3.37],[5.08,-3.37],[5.08,-2.87],[4.5,-2.87]],P,[[nn,hn,.068]],d),M(di-ni,.008,.66,13617854,(ni+di)/2,-2.865,4.82,d,{cast:!1}),y([[Zt,hn-.03,nn-.04],[Zt,-3.36,4.42],[Zt,-3.37,3.6],[Zt,-3.37,ii+.2]],.038,1776929,d,{radial:12,tension:.2});let At=new De(Jd(.68,.215,.232,1842722,2829875,5264475,22),v);At.geometry.rotateX(Math.PI/2),At.position.set(Zt,-3.48,ii),d.add(At),At.receiveShadow=!0;{let z=new Ba(.232,20,-Math.PI/2,Math.PI);z.rotateX(-Math.PI/2),T(z,2829875,d,{x:Zt,y:-3.475,z:ii,cast:!1})}S(.082,.22,2764081,Zt,-3.36,ii,d,{seg:20}),T(new Ln(.082,18,6,0,Math.PI*2,0,Math.PI/2),2764081,d,{x:Zt,y:-3.25,z:ii}),S(.095,.02,1710878,Zt,-3.465,ii,d,{seg:20}),k.plane("pump",.1,d,Zt-.084,-3.34,ii,{rot:[0,-Math.PI/2,0]}),S(.004,.3,9212827,Zt+.02,-3.2,ii+.12,d,{mat:m,seg:6,cast:!1});let $t=x(13815750,{intensity:1.5,speed:1.4,level:0,roughness:.45}),It=.66;o([[Zt,-3.17,ii],[Zt,-3,ii],[It,-2.85,ii],[It,-2.2,ii],[It,-.5,ii],[It,-.42,ii+.08],[It,-.42,3.86],[It,-.34,3.94],[It,.12,3.94],[It,.15,4.02],[It,.15,4.42],[It,.06,4.5]],.024,$t,d,{radial:10,density:16,tension:.12}),S(.034,.13,9409691,It,-1.9,ii,d,{seg:16}),[-1.84,-1.96].forEach(z=>S(.037,.012,12765390,It,z,ii,d,{mat:m,seg:16,cast:!1}));let Tt=new De(new Ba(.214,24,-Math.PI/2,Math.PI).rotateX(-Math.PI/2),c.water);Tt.position.set(Zt,-3.3,ii),Tt.userData.keep=!0,p.add(Tt);let Fn=S(.024,.05,3817029,Zt+.02,-3.2,ii+.12,p,{seg:12,keep:!0}),Hn=64,Zn=i.particles(Hn,{color:5220095,size:.022,gain:1.3});p.add(Zn),Mi(d);function Mi(z){z.updateWorldMatrix(!0,!0);let ze=new Mt().copy(z.matrixWorld).invert(),tt=new Mt,nt=new Map,ft=[],Rt=ct=>{for(let wt=ct;wt&&wt!==z;wt=wt.parent)if(wt.userData.keep)return!0;return!1};z.traverse(ct=>{if(!ct.isMesh||ct.isInstancedMesh||Rt(ct)||Array.isArray(ct.material)||ct.children.length)return;let wt=ct.material.uuid+"|"+ct.renderOrder,Gt=nt.get(wt);Gt||nt.set(wt,Gt={mat:ct.material,cast:!1,recv:!1,ro:ct.renderOrder,geos:[]}),Gt.cast=Gt.cast||ct.castShadow,Gt.recv=Gt.recv||ct.receiveShadow;let Qt=ct.geometry.index?ct.geometry.toNonIndexed():ct.geometry.clone();Object.keys(Qt.attributes).forEach(fi=>{fi!=="position"&&fi!=="normal"&&fi!=="uv"&&fi!=="color"&&Qt.deleteAttribute(fi)}),Qt.attributes.uv||Qt.setAttribute("uv",new Ot(new Float32Array(Qt.attributes.position.count*2),2)),ct.material.vertexColors?Qt.attributes.color||as(Qt,16777215):Qt.attributes.color&&Qt.deleteAttribute("color"),Qt.applyMatrix4(tt.multiplyMatrices(ze,ct.matrixWorld)),Gt.geos.push(Qt),ft.push(ct)}),nt.forEach(ct=>{let wt=Wi(ct.geos);if(!wt)return;let Gt=new De(wt,ct.mat);Gt.castShadow=ct.cast,Gt.receiveShadow=ct.recv,Gt.renderOrder=ct.ro,Gt.userData.keep=!0,z.add(Gt),ct.geos.forEach(Qt=>Qt.dispose())}),ft.forEach(ct=>{ct.parent&&ct.parent.remove(ct),ct.geometry.dispose()})}let Ki={hub:si(5.6,.02,th+.02),cam:si(1.2),roots:si(se+.12,.03,.03),jet:si(8.2),liner:si(5.6),burst:si(8.3),trench:h(1,-1.4,-15.4),main:h(Zt,bs+Ts+.02,Ss+.05),water:h(On,ht(4.8),4.8),tile:h(Zt,hn,nn)},Hs={fx:Zt+.1,time:19.4,cut:0,ghost:0,section:1,cutX:Or,ugFocus:null,ground:1,orbit:.01,season:0,lift:0},Pl=[{...Hs,radius:28,theta:-.95,phi:1.2,ty:-2.2,fz:-7.8,dof:0,orbit:.02,time:16.6,narrow:{radius:34,fz:-10.5,ty:-1.6}},{...Hs,radius:3.2,theta:-1.57,phi:1.4,ty:-3,fz:-3.55,dof:.6,narrow:{radius:3.3,fz:-3.45}},{...Hs,radius:1.7,theta:-1.42,phi:1.22,ty:-3.45,fz:-12.8,dof:1.1,narrow:{radius:1.9}},{...Hs,radius:1.6,theta:-1.5,phi:1.32,ty:-3.56,fz:-12.5,dof:1.1,narrow:{radius:1.8,fz:-12.62}},{...Hs,radius:5.2,theta:-1.55,phi:1.42,ty:-3.45,fz:-10.9,dof:.8,narrow:{radius:7.2,fz:-11.3}},{...Hs,radius:8.6,theta:-1.62,phi:1.14,ty:-2.1,fz:-16.8,dof:.6,time:16.6,narrow:{radius:9,fz:-16.5}},{...Hs,radius:7.2,theta:-1.5,phi:1.46,ty:-2.6,fz:3.7,dof:.7,narrow:{radius:8.6,fz:3.3}}],oa="",vr=0,la=1,Il=z=>z>.95&&z<1.55?"CRACK":Math.abs(z-ra(Gp)-.06)<.1?"OFFSET JOINT":(z-ih+ro*2)%ro<.12?"JOINT":"",ca=new Float32Array(Hn*2);for(let z=0;z<Hn;z++)ca[z*2]=u(),ca[z*2+1]=u();let yr=new Float32Array(zt*2);for(let z=0;z<zt;z++)yr[z*2]=z%6/6*Math.PI*2+u()*.3,yr[z*2+1]=u();return{name:"sewer",group:p,anchors:Ki,shots:Pl,hides:(z,ze)=>{let tt=z.sys.sewer?[...z.sys.sewer.meshes]:[];return ze&&ze.groups&&["water","gas","sewer","found","radon"].forEach(nt=>ze.groups[nt]&&tt.push(ze.groups[nt])),ze&&ze.group&&ze.group.children.forEach(nt=>{let ft=nt.geometry&&nt.geometry.parameters;nt.isMesh&&ft&&(ft.height===9||ft.depth===240)&&tt.push(nt)}),tt},light(z){return z===0?{pos:[-2.6,-1,-8.6],at:[.8,-3.3,-11.5],power:.7,fill:.6}:z===1?{pos:[-1.6,-3.05,-5.2],at:[.7,-3.3,-4],power:.55,fill:.9}:z===2||z===3?{pos:[-1.3,-2.5,-12],at:[.7,-3.5,-12.8],power:.6,fill:.8}:z===4?{pos:[-4.6,-2,-9.4],at:[.75,-3.55,-11.1],power:1,fill:.6}:z===5?{pos:[-2.6,-1.2,-15],at:[1,-2.8,-16.6],power:1.1,fill:.7}:{pos:[-2.4,-2.1,6.6],at:[.75,-2.9,4.4],power:.9,fill:1}},update({step:z,q:ze,t:tt,dt:nt,snap:ft}){let Rt=ft?1:1-Math.exp(-nt*5),ct=s?0:tt,wt=$e(mr[0]+.05,mr[1]-.05,ze);xe(sn=>z===4&&sn>=9&&sn<=11&&ra(sn)+ro*.5<wt||z===5&&sn>=13),ge.visible=pn.visible=Wt.visible=z===1,Fe.visible=z===5,Oe.visible=dt.visible=z!==5,Mn.visible=z===4;let Gt=z<=3;if(ke.visible=le.visible=Gt,la=$e(la,z===0?1.8:.55,Rt),A.userData.level.value=la,z===1){let sn=$e(0,.62,ze);Ct.getPointAt(sn,tn),Ct.getTangentAt(sn,Bn),pn.position.copy(tn),pn.position.y+=.045-.003,pn.rotation.x=Math.atan2(Bn.y,-Bn.z),Wt.geometry.setDrawRange(0,Math.round(sn*Lt)*6*6);let Hi=rs-tn.z;et.rotation.x=-sn*9,Ki.cam.copy(tn),Ki.cam.y+=.07,pe.material.opacity=.45+(s?0:.08*Math.sin(ct*9));let vn=(sn*Ct.getLength()+.4).toFixed(1),ir=Hi<ih?"":Il(Hi),Hr=vn+ir;Hr!==oa&&(oa=Hr,k.set("mon",vn+" m",Hi<ih?"CAST IRON 150 mm":"CLAY 150 mm \xB7 1958",{flag:ir}))}let Qt=z===3?Pt(ze/.42,0,1):0,fi=z===3?Pt((ze-.42)/.58,0,1):0;Pe.visible=St.visible=z===3&&ze<.42,lt.visible=vt.visible=Ht.visible=z===3&&ze>=.42;let zs=z===3?Et(.1,.9,Qt):0;ke.scale.set(1,1,z===3&&ze>=.42?.12:Math.max(.12,1-.88*zs));let Xi=$e(se-.3,se+.7,fi);if(z===3){if(Pe.visible){let sn=$e(se-.3,se+.4,Qt);Pe.position.set(0,-.004,-sn),Ye.rotation.z=-ct*14,St.position.set(0,-.006,-6),St.scale.set(1,1,Math.max(.01,sn-6.06)),si(sn,0,.02,Ki.jet)}if(lt.visible){lt.position.set(0,-un+.02,-Xi),vt.position.set(0,-un+.012,-6),vt.scale.set(1,1,Math.max(.01,Xi-6.03)),si(Xi,0,.02,Ki.jet);let sn=Ht.userData.pos,Hi=Ht.userData.n;for(let vn=0;vn<Hi;vn++){let ir=yr[vn*2],Hr=(yr[vn*2+1]+ct*2.6)%1,Cs=Hr*.2,Dl=.012+Cs*.62,rh=Dl*Math.sin(ir),Ll=-un+.02+Dl*Math.cos(ir),ah=Math.hypot(rh,Ll);ah>un*.95&&(rh*=un*.95/ah,Ll=Ll*un*.95/ah-(Cs-.1)*.15),sn[vn*3]=rh,sn[vn*3+1]=Math.max(Ll,-un*.95),sn[vn*3+2]=-Xi+.02+Cs}Ht.geometry.attributes.position.needsUpdate=!0}ze>=.42&&Xi>se+.1&&(ke.visible=!1)}if(le.visible){let sn=z===3&&ze>=.42?Math.round(Pt((Ke-Xi)/(Ke-ve),0,1)*xt):xt;le.geometry.setDrawRange(0,sn*D*6)}if(z===4){let sn=$e(pr[0]+.15,pr[1],ze),Hi=Math.round((sn-pr[0])/(pr[1]-pr[0])*bi);I.geometry.setDrawRange((bi-Hi)*Fi*6,Hi*Fi*6),Ae.position.set(0,0,-sn),si(sn,0,.02,Ki.liner),ut.position.set(0,0,-wt),si(wt,0,.11,Ki.burst),ye.position.set(0,0,-(mr[0]-.1)),ye.scale.set(1,1,Math.max(.01,wt-mr[0]+.1-.05));let vn=0;for(;vn<yt&&ae[vn]<wt-.06;)vn++;ee.count=vn}let Bi=s?.5:ct%9/9,us=Bi<.82?Bi/.82:1-(Bi-.82)/.18,Qi=!s&&Bi>=.82;if(Tt.position.y=$e(-3.38,-3.14,us),Fn.position.y=Math.max(-3.24,Tt.position.y+.012),vr=$e(vr,Qi?1:0,ft?1:1-Math.exp(-nt*6)),$t.userData.level.value=vr,z===6){let sn=Zn.userData.pos,Hi=Zn.userData.n;for(let vn=0;vn<Hi;vn++){let ir=ca[vn*2],Hr=ca[vn*2+1];if(vn%3!==2){let Cs=(Hr+ct*.11)%1;sn[vn*3]=ni+.03+ir*.36,sn[vn*3+1]=$e(-1,-3.1,Cs),sn[vn*3+2]=4.32+ir*7.3%1*.62}else{let Cs=(Hr+ct*1.3)%1,Dl=(ir-.5)*1.6;sn[vn*3]=On-.02-Cs*.05,sn[vn*3+1]=ht(4.8)+.01+Cs*.16-Cs*Cs*.22,sn[vn*3+2]=4.8+Dl*Cs*.14}}Zn.geometry.attributes.position.needsUpdate=!0}Zn.visible=z===6}}}var Bt=-1.2,en=-1.5,wn=.057,Os=-2.8,En=-2.9,Zi=-3.05,Al=-4.4,Kn=-2.1,Qn=.25,An=-1.5,Si=-.25,ef=-3.75,Br=.24,Ni=7.9,ao=10.45,$i=-3.995,Yn=.66,Wn=1.6,Un={x:-.5,y:-1.52,z:$i+.1},Bs={x:-.3,z:$i+.115},aa=-.59,oo=new N(Bt,En-.1,en+.03),Vp=i=>8.054+.1233+.72*(i+2.78),Rl=[[-.36,An],[-.62,$i+.04]],Cl=[[-.95,Si],[-1.5,1.25]],Wp=[-2.3,.05];function Xp({kit:i,M:e,tier:t,reduce:n}){let{box:s,cyl:r,tube:a,mats:o,atlas:c,V:l}=i,h=new at,p=new at,d=new at,u=new at;h.add(p,d,u);let f=ti(41),v=(D,J,le,ge,Le)=>{let B=document.createElement("canvas");B.width=D,B.height=J,le(B.getContext("2d"),D,J);let Se=new Dn(B);return Se.colorSpace=fn,Se.wrapS=Se.wrapT=Gn,Se.repeat.set(ge,Le),Se.anisotropy=8,Se},m=(D,J,le,ge,Le,B,Se)=>{for(let re=0;re<ge;re++)D.fillStyle=Le[f()*Le.length|0],D.beginPath(),D.ellipse(f()*J,f()*le,B+f()*(Se-B),B+f()*(Se-B)*.7,f()*3,0,6.3),D.fill()},g=v(256,256,(D,J,le)=>{D.fillStyle="#7c776f",D.fillRect(0,0,J,le);for(let ge=0;ge<40;ge++){let Le=f()*J,B=f()*le,Se=20+f()*50,re=D.createRadialGradient(Le,B,0,Le,B,Se),Ne=f()>.5;re.addColorStop(0,Ne?"rgba(60,56,50,.18)":"rgba(160,154,144,.14)"),re.addColorStop(1,"rgba(0,0,0,0)"),D.fillStyle=re,D.fillRect(Le-Se,B-Se,Se*2,Se*2)}m(D,J,le,900,["rgba(50,47,43,.35)","rgba(170,164,152,.3)","rgba(96,90,82,.4)"],.4,1.3)},1/1.6,1/1.6),M=v(256,256,(D,J,le)=>{D.fillStyle="#3a3732",D.fillRect(0,0,J,le);for(let ge=0;ge<900;ge++){let Le=f()*J,B=f()*le,Se=2+f()*5,re=70+f()*60,Ne=5+(f()*3|0);D.fillStyle=`rgb(${re|0},${re*.97|0},${re*.9|0})`,D.beginPath();for(let Re=0;Re<Ne;Re++){let U=Re/Ne*6.283+f()*.5,be=Se*(.6+f()*.5);D[Re?"lineTo":"moveTo"](Le+Math.cos(U)*be,B+Math.sin(U)*be*.8)}D.closePath(),D.fill(),D.strokeStyle="rgba(20,18,16,.45)",D.lineWidth=1,D.stroke()}},1/.45,1/.45),S=v(256,256,(D,J,le)=>{let ge=D.createImageData(J,le),Le=ge.data;for(let B=0;B<le;B++)for(let Se=0;Se<J;Se++){let re=B/le,Ne=(f()-.5)*26,Re=Math.sin(B*.11+Math.sin(Se*.05)*1.6)*6,U=(B*J+Se)*4;Le[U]=90-30*re+Ne+Re,Le[U+1]=68-22*re+Ne*.9+Re,Le[U+2]=50-12*re+Ne*.8+Re*.6,Le[U+3]=255}D.putImageData(ge,0,0),m(D,J,le,160,["rgba(150,140,124,.8)","rgba(120,112,100,.8)","rgba(70,60,50,.7)"],.8,3.2)},1/1.7,1/1.7);S.wrapT=ds,S.offset.set(0,1+2.9/1.7);let y=i.std(16777215,.92,0,{map:g}),_=i.std(16777215,1,0,{map:M}),T=i.std(16777215,1,0,{map:S}),A=o.rubber,x=i.std(9341828,.7,0),w=i.std(10920859,.8,0),C=i.std(2060240,.15,0,{emissive:5220095,emissiveIntensity:.55}),F=o.blackPlastic,b=o.rubber,L=(D,J,le,ge)=>{let Le=ti(le),B=[],Se=[],re=16;for(let Ne=3;Ne<=J-3;Ne+=6)re=Math.max(7,Math.min(25,re+(Le()-.5)*5)),B.push([Ne,re]);for(let Ne=0;Ne<4;Ne++){let Re=3+(Le()*(B.length-6)|0),U=B[Re];Se.push([U,[U[0]+8+Le()*26,U[1]+(Le()>.5?1:-1)*(5+Le()*7)]])}return{key:D,w:J,h:32,draw(Ne){let Re=(U,be)=>{Ne.strokeStyle=be,Ne.lineWidth=U,Ne.lineJoin=Ne.lineCap="round",Ne.beginPath(),B.forEach((ce,et)=>Ne[et?"lineTo":"moveTo"](ce[0],ce[1])),Ne.stroke()};if(ge){Re(8,"rgba(74,72,68,1)"),Re(3,"rgba(98,95,90,.9)");return}Re(3.4,"rgba(150,144,134,.35)"),Re(1.6,"rgba(16,14,12,.92)"),Ne.lineWidth=.9,Ne.strokeStyle="rgba(16,14,12,.8)",Se.forEach(([U,be])=>{Ne.beginPath(),Ne.moveTo(U[0],U[1]),Ne.lineTo(be[0],be[1]),Ne.stroke()})}}},P=c([{key:"warn",text:"RADON SYSTEM",sub:"DO NOT TURN OFF",w:384,h:112,size:50,color:"#16130c",bg:"#e3bd2f"},{key:"info",w:384,h:150,draw(D,J,le){D.fillStyle="#e8e3d6",D.fillRect(0,0,J,le),D.fillStyle="#1a1c20",D.textAlign="left",D.textBaseline="middle",D.font="700 25px ui-monospace, Menlo, monospace",D.fillText("RADON MITIGATION",14,24),D.font="500 19px ui-monospace, Menlo, monospace",["SUB-SLAB DEPRESSURIZATION","INSTALLED 2026-11","BEFORE: 412 Bq/m\xB3","RETEST: 91-DAY TEST"].forEach((ge,Le)=>D.fillText(ge,14,56+Le*24))}},{key:"air",text:"AIRFLOW \u25B2",w:224,h:56,size:30,color:"#16130c",bg:"#e8e3d6"},{key:"fan",text:"RADON FAN",sub:"120 V \xB7 60 Hz \xB7 85 W",w:384,h:104,size:44,color:"#2a2c30"},{key:"jbox",text:"RADON FAN",sub:"DISCONNECT",w:224,h:84,size:34,color:"#16130c",bg:"#e3bd2f"},{key:"sump",text:"SEALED SUMP",sub:"RADON \xB7 KEEP CLOSED",w:320,h:96,size:38,color:"#16130c",bg:"#e8e3d6"},{key:"alpha",w:160,h:160,draw(D,J){D.fillStyle="#e8e3d6",D.beginPath(),D.arc(J/2,J/2,J/2-2,0,6.3),D.fill(),D.fillStyle="#1a1c20",D.textAlign="center",D.textBaseline="middle",D.font="700 17px ui-monospace, Menlo, monospace",D.fillText("ALPHA TRACK",J/2,46),D.font="600 14px ui-monospace, Menlo, monospace",D.fillText("LONG-TERM \xB7 91 d",J/2,72),D.font="500 13px ui-monospace, Menlo, monospace",D.fillText("START 11-10",J/2,96),D.fillText("DO NOT OPEN",J/2,116)}},{key:"scale",w:64,h:300,draw(D,J,le){D.fillStyle="#ebe7dd",D.fillRect(0,0,J,le),D.fillStyle="#1a1c20",D.strokeStyle="#1a1c20",D.textBaseline="middle",D.textAlign="center";for(let ge=-11;ge<=11;ge++){let Le=le/2-ge*11,B=ge%5===0;D.lineWidth=B?2:1,D.beginPath(),D.moveTo(B?10:18,Le),D.lineTo(J-(B?10:18),Le),D.stroke()}D.font="700 15px ui-monospace, Menlo, monospace",D.fillText("0",J/2,le/2-9),D.font="600 12px ui-monospace, Menlo, monospace",D.fillText("Pa",J/2,12),D.fillText("250",J/2,le/2-64),D.fillText("250",J/2,le/2+64)}},L("ca",512,7,!1),L("cas",512,7,!0),L("cb",384,9,!1),L("cbs",384,9,!0)],{width:1024,emissive:.22}),H=[];{let D=400;for(let J=0;J<46;J++)D=$e(D,330+f()*200,.45),H.push(D)}let Z=c([{key:"mon",w:256,h:192,value:412,after:0,draw(D,J,le,ge){D.fillStyle="#06080c",D.fillRect(0,0,J,le);let Le=Math.round(ge.value),B=Le>=200?"#ff6b4f":Le>=100?"#f4bd7e":"#8fd3a6";D.textBaseline="middle",D.textAlign="left",D.fillStyle="#8b93a1",D.font="600 15px ui-monospace, Menlo, monospace",D.fillText("RADON",14,18),D.textAlign="right",D.fillText(ge.after>.5?"RETEST":"91-DAY AVG",J-14,18),ge.after>.5&&(D.textAlign="right",D.fillStyle="#8b93a1",D.font="500 15px ui-monospace, Menlo, monospace",D.fillText("was 412",J-14,52)),D.textAlign="left",D.fillStyle=B,D.font="700 64px ui-monospace, Menlo, monospace";let Se=String(Le);D.fillText(Se,12,66);let re=D.measureText(Se).width;D.fillStyle="#cfd4da",D.font="500 17px ui-monospace, Menlo, monospace",D.fillText("Bq/m\xB3",20+re,80);let Ne=178,Re=64/480,U=14,be=(J-28)/(H.length-1);D.strokeStyle="rgba(139,147,161,.6)",D.lineWidth=1,D.setLineDash([4,4]),D.beginPath(),D.moveTo(U,Ne-200*Re),D.lineTo(J-14,Ne-200*Re),D.stroke(),D.setLineDash([]),D.fillStyle="#8b93a1",D.font="500 12px ui-monospace, Menlo, monospace",D.fillText("200",U,Ne-200*Re-9),D.strokeStyle=B,D.lineWidth=2.2,D.beginPath(),H.forEach((ce,et)=>{let ot=ge.after*Et(H.length-12,H.length-1,et),Ct=$e(ce,ge.value+(ce-420)*.08,ot);D[et?"lineTo":"moveTo"](U+et*be,Ne-Ct*Re)}),D.stroke()}}],{width:256,emissive:.8}),V=(D,J,le,ge,Le,B,Se,re,Ne)=>{let Re=D.plane(J,le,Ne),U=Re.geometry.attributes.uv,be=1,ce=0,et=1,ot=0;for(let tn=0;tn<U.count;tn++)be=Math.min(be,U.getX(tn)),ce=Math.max(ce,U.getX(tn)),et=Math.min(et,U.getY(tn)),ot=Math.max(ot,U.getY(tn));let Ct=new cn(le,Re.geometry.parameters.height,16,1),Lt=Ct.attributes.position,Wt=Ct.attributes.uv;for(let tn=0;tn<Lt.count;tn++){let Bn=re+Lt.getX(tn)/ge;Lt.setXYZ(tn,Le+ge*Math.sin(Bn),B+Lt.getY(tn),Se+ge*Math.cos(Bn)),Wt.setXY(tn,$e(be,ce,Wt.getX(tn)),$e(et,ot,Wt.getY(tn)))}return Ct.computeVertexNormals(),Re.geometry.dispose(),Re.geometry=Ct,Re},W=(D,J,le,ge,Le=.0015)=>{let B=le[0]-J[0],Se=le[1]-J[1],re=Math.hypot(B,Se);return P.plane(D,re,ge,(J[0]+le[0])/2,Os+Le,(J[1]+le[1])/2,{rot:[-Math.PI/2,0,Math.atan2(-Se,B)]})},G=(D,J,le,ge,Le,B,Se,re,Ne={})=>{let Re=(D+J)/2,U=(le+ge)/2,be=(Le+B)/2;return s(J-D,ge-le,B-Le,Se,Re,U,be,re,{uv:{ox:Re,oy:U,oz:be},...Ne})},k=An-.5;G(-5,5,En,Os,-4,An,y,p),G(-5,5,En,Os,Si,4,y,p),G(-5,Kn,En,Os,An,Si,y,p),G(Qn,5,En,Os,An,Si,y,p),[[-5,Kn,-4,An],[Qn,5,-4,An],[Kn,Qn,-4,k],[-5,5,Si,4],[-5,Kn,An,Si],[Qn,5,An,Si]].forEach(([D,J,le,ge])=>G(D,J,Zi,En,le,ge,_,p,{cast:!1})),[[-5.6,Kn,-4.6,An],[Qn,5.6,-4.6,An],[Kn,Qn,-4.6,k],[-5.6,5.6,Si,4.6],[-5.6,Kn,An,Si],[Qn,5.6,An,Si]].forEach(([D,J,le,ge])=>G(D,J,Al,Zi,le,ge,T,p,{cast:!1})),G(Kn,Qn,Al,ef,An,Si,T,p,{cast:!1}),G(Kn,Qn,En-.004,En,An,An+.002,A,p,{cast:!1}),G(Kn-.002,Kn,En-.004,En,An,Si,A,p,{cast:!1}),G(Qn,Qn+.002,En-.004,En,An,Si,A,p,{cast:!1});{let D=t>=1?260:120,J=new $r(1,0),le=new Ri(J,i.std(16777215,1,0),D),ge=new Mt,Le=new bn,B=new ki,Se=new N,re=new N,Ne=new it,Re=0;for(;Re<D;){let U=f(),be=Zi+.012+f()*(En-Zi-.024),ce=.007+f()*.013,et=f();if(et<.6){let Ct=$e(Kn+.02,Qn-.02,U);if(Math.abs(Ct-Bt)<Br+.03)continue;re.set(Ct,be,An+ce*.25)}else et<.8?re.set(Kn+ce*.25,be,$e(An+.02,Si-.02,U)):re.set(Qn-ce*.25,be,$e(An+.02,Si-.02,U));Se.set(ce,ce*(.6+f()*.4),ce*(.7+f()*.3)),Le.setFromEuler(B.set(f()*6,f()*6,f()*6)),le.setMatrixAt(Re,ge.compose(re,Le,Se));let ot=.07+f()*.07;le.setColorAt(Re,Ne.setRGB(ot,ot*.97,ot*.9)),Re++}le.castShadow=!1,le.receiveShadow=!0,p.add(le)}G(Kn,Qn,Zi,En,k,An,_,d,{cast:!1}),G(Kn,Qn,Al,Zi,k,An,T,d,{cast:!1});{let D=Math.asin((En-Zi)/Br),J=Math.cos(D)*Br,le=(ce,et)=>{let ot=new gs(ce,{depth:An-k,bevelEnabled:!1,curveSegments:20});ot.translate(0,0,k);let Ct=new De(ot,et);return Ct.receiveShadow=!0,u.add(Ct),Ct},ge=new oi;ge.moveTo(Kn,En),ge.lineTo(Bt-Br,En),ge.absarc(Bt,En,Br,Math.PI,Math.PI+D,!1),ge.lineTo(Kn,Zi),ge.closePath();let Le=new oi;Le.moveTo(Qn,En),Le.lineTo(Qn,Zi),Le.lineTo(Bt+J,Zi),Le.absarc(Bt,En,Br,-D,0,!1),Le.closePath();let B=new oi;B.moveTo(Kn,Zi),B.lineTo(Bt-J,Zi),B.absarc(Bt,En,Br,Math.PI+D,2*Math.PI-D,!1),B.lineTo(Qn,Zi),B.lineTo(Qn,Al),B.lineTo(Kn,Al),B.closePath(),le(ge,_),le(Le,_),le(B,T);let Se=new Ln(Br,24,10,Math.PI,Math.PI,Math.PI/2,Math.PI/2);Se.translate(Bt,En,en);let re=Se.attributes.position,Ne=Se.attributes.uv;for(let ce=0;ce<re.count;ce++)Ne.setXY(ce,re.getX(ce)+re.getZ(ce)*.7,re.getY(ce));let Re=Se.index.array;for(let ce=0;ce<Re.length;ce+=3){let et=Re[ce+1];Re[ce+1]=Re[ce+2],Re[ce+2]=et}let U=Se.attributes.normal;for(let ce=0;ce<U.count;ce++)U.setXYZ(ce,-U.getX(ce),-U.getY(ce),-U.getZ(ce));let be=new De(Se,_);be.receiveShadow=!0,u.add(be)}W("ca",Rl[0],Rl[1],p),W("cb",Cl[0],Cl[1],p),W("cas",Rl[0],Rl[1],u,.003),W("cbs",Cl[0],Cl[1],u,.003),G(-4.9,4.9,Os-.002,Os+.0012,$i,$i+.012,b,p,{cast:!1,receive:!1}),s(9.8,.012,.016,x,0,Os+.004,$i+.008,u,{r:.005,cast:!1});let Y=Os+.05,he=o.whitePlastic;r(.024,-.12-Y,he,Yn,(Y-.12)/2,Wn,p),r(.034,.1,o.rubber,Yn,-2.3,Wn,p,{seg:16}),[-2.34,-2.26].forEach(D=>r(.036,.012,o.galv,Yn,D,Wn,p,{seg:16,cast:!1})),a([[Yn,-.2,Wn],[Yn,-.13,Wn+.02],[Yn,-.12,Wn+.1]],.024,he,p,{radial:12,seg:10}),r(.024,4-Wn-.1,he,Yn,-.12,(Wn+.1+3.99)/2,p,{axis:"z"}),a([[Yn+.06,Y+.03,Wn+.05],[Yn+.05,-2.4,Wn+.03],[Yn+.03,-1.6,Wn+.03],[Yn+.03,-.26,Wn+.03]],.004,o.rubber,p,{radial:5,cast:!1}),r(.345,.022,o.blackPlastic,Yn+.012,Y+.011,Wn-.016,d,{seg:40}).rotation.set(.015,0,-.012),r(.055,.003,b,Yn,Y+.024,Wn,d,{seg:20,cast:!1}),s(.035,.004,.05,b,Yn+.06,Y+.023,Wn+.06,d,{cast:!1});{r(.35,.02,o.blackPlastic,Yn,Y+.01,Wn,u,{seg:40});let D=new De(new Pi(.346,.006,6,48),x);D.rotation.x=Math.PI/2,i.place(D,Yn,Y+.004,Wn,u,{cast:!1});for(let J=0;J<10;J++){let le=J/10*Math.PI*2;r(.009,.008,o.galv,Yn+Math.cos(le)*.318,Y+.024,Wn+Math.sin(le)*.318,u,{seg:8,cast:!1})}r(.036,.016,o.rubber,Yn,Y+.026,Wn,u,{seg:16,cast:!1}),r(.011,.012,o.rubber,Yn+.06,Y+.025,Wn+.05,u,{seg:10,cast:!1}),P.plane("sump",.16,u,Yn-.1,Y+.0215,Wn+.15,{rot:[-Math.PI/2,0,.35]})}s(.9,.022,.2,o.plywood,Un.x,Un.y-.011,Un.z,p,{uv:{ox:1,oz:1}}),[-.33,.33].forEach(D=>{let J=Un.x+D;s(.022,.15,.004,F,J,Un.y-.097,$i+.002,p,{cast:!1}),s(.022,.004,.17,F,J,Un.y-.024,$i+.087,p,{cast:!1});let le=s(.016,.004,.2,F,J,Un.y-.085,$i+.077,p,{cast:!1});le.rotation.x=-.71,[-.05,-.13].forEach(ge=>r(.006,.006,o.galv,J,Un.y+ge,$i+.006,p,{axis:"z",seg:8,cast:!1}))}),r(.034,.016,o.greyPlastic,Un.x-.24,Un.y+.008,Un.z+.01,p,{seg:28}),r(.03,.004,o.blackPlastic,Un.x-.24,Un.y+.018,Un.z+.01,p,{seg:28,cast:!1}),P.plane("alpha",.056,p,Un.x-.24,Un.y+.0205,Un.z+.01,{rot:[-Math.PI/2,0,.2]});{let D=new at;D.position.set(Bs.x,Un.y,Bs.z),D.rotation.y=-.22,p.add(D),s(.105,.155,.04,o.whitePlastic,0,.0775,0,D,{r:.012}),s(.092,.074,.003,o.blackPlastic,0,.105,.02,D,{cast:!1}),Z.plane("mon",.086,D,0,.105,.0218);for(let J=0;J<5;J++)s(.05,.003,.002,o.greyPlastic,0,.022+J*.008,.0202,D,{cast:!1})}let we=Math.sin(aa),Ie=Math.cos(aa);r(wn,Ni-.24-(En-.08),w,Bt,(Ni-.24+En-.08)/2,en,u,{seg:28}),r(wn,ao-Ni-.22,w,Bt,(ao+Ni+.22)/2,en,u,{seg:28}),r(wn+.014,.012,x,Bt,Os+.005,en,u,{seg:28,cast:!1}),[-1.95,-.62,2,5].forEach(D=>r(wn+.006,.07,w,Bt,D,en,u,{seg:28})),s(.91,.14,.038,o.plywood,-1.5,-.18,en-wn-.022,u,{uv:!0});{let D=new De(new Pi(wn+.003,.0022,4,24,Math.PI),o.galv);D.rotation.set(-Math.PI/2,0,0),i.place(D,Bt,-.16,en,u,{cast:!1}),[-1,1].forEach(J=>{s(.028,.03,.002,o.galv,Bt+J*(wn+.016),-.16,en-wn-.002,u,{cast:!1}),r(.005,.004,o.galv,Bt+J*(wn+.02),-.16,en-wn+.001,u,{axis:"z",seg:8,cast:!1})})}V(P,"warn",.11,wn+.0012,Bt,-1.18,en,aa,u),V(P,"info",.1,wn+.0012,Bt,-2.18,en,aa,u),V(P,"air",.07,wn+.0012,Bt,-.88,en,aa,u);let Xe=[];{let D=new at;D.position.set(Bt+we*(wn+.014),-1.58,en+Ie*(wn+.014)),D.rotation.y=aa,u.add(D),s(.064,.2,.006,o.whitePlastic,0,0,0,D,{r:.003}),P.plane("scale",.026,D,0,-.005,.0034),[.075,-.075].forEach(ge=>s(.03,.014,.014,o.whitePlastic,0,ge,-.009,D,{cast:!1}));let J=o.glassClear;[-.019,.019].forEach(ge=>r(.0042,.16,J,ge,0,.009,D,{seg:10,cast:!1}));let le=[[-.019,-.08,.009],[-.019,-.088,.009],[-.012,-.096,.009],[0,-.098,.009],[.012,-.096,.009],[.019,-.088,.009],[.019,-.08,.009]];a(le,.0042,J,D,{radial:8,seg:16,cast:!1}),a(le,.003,C,D,{radial:6,seg:16,cast:!1}),[-.019,.019].forEach(ge=>{let Le=new jt(.003,.003,1,8);Le.translate(0,.5,0);let B=new De(Le,C);B.position.set(ge,-.08,.009),B.userData.keep=!0,B.castShadow=!1,D.add(B),Xe.push(B)}),r(.0055,.008,o.blackPlastic,.019,.083,.009,D,{seg:10,cast:!1}),a([[-.019,.08,.009],[-.019,.1,.01],[-.024,.118,0],[-.022,.124,-.014]],.003,o.glassClear,D,{radial:6,seg:12,cast:!1}),r(.007,.008,o.rubber,-.022,.124,-.016,D,{axis:"z",seg:10,cast:!1}),[.075,-.075].forEach(ge=>{let Le=new De(new Pi(wn+.0015,.0018,4,32),o.blackPlastic);Le.rotation.x=Math.PI/2,i.place(Le,Bt,-1.58+ge,en,u,{cast:!1})})}{let D=o.whitePlastic,J=o.greyPlastic,le=U=>{r(wn+.011,.1,o.rubber,Bt,U,en,u,{seg:28}),[U-.03,U+.03].forEach((be,ce)=>{r(wn+.0125,.012,o.galv,Bt,be,en,u,{seg:28,cast:!1});let et=aa-1.1+ce*.5;s(.016,.012,.012,o.galv,Bt+Math.sin(et)*(wn+.018),be,en+Math.cos(et)*(wn+.018),u,{rot:[0,et,0],cast:!1})})};le(Ni-.27),le(Ni+.27),r(wn+.002,.06,J,Bt,Ni-.2,en,u,{seg:28}),r(wn+.002,.06,J,Bt,Ni+.2,en,u,{seg:28}),r(.07,.06,D,Bt,Ni-.11,en,u,{seg:36,r2:.135}),r(.135,.06,D,Bt,Ni+.11,en,u,{seg:36,r2:.07}),r(.135,.16,D,Bt,Ni,en,u,{seg:36}),r(.1375,.012,J,Bt,Ni+.02,en,u,{seg:36,cast:!1}),V(P,"fan",.16,.1365,Bt,Ni-.03,en,-.9,u);let ge=Math.atan(.72),Le=U=>Vp(U)-.2466;[-3,-2.4,-1.8,-1.2,-.6,0].forEach(U=>s(4.84/Math.cos(ge),.14,.038,o.plywood,-2.48,Le(-2.48)-.07/Math.cos(ge),U,u,{rot:[0,0,ge],uv:!0})),s(.038,.18,4.2,o.plywood,0,Le(0)-.09,-1.5,u,{uv:!0});let B={x:Bt-.35,z:-1.8},Se=Le(B.x)-.14/Math.cos(ge);s(.089,Se-6.37,.038,o.plywood,B.x,(Se+6.37)/2,B.z,u,{uv:!0}),s(.11,.11,.055,o.greyPlastic,B.x,7.75,B.z+.047,u,{r:.006}),s(.018,.03,.014,o.blackPlastic,B.x,7.77,B.z+.081,u,{cast:!1}),P.plane("jbox",.075,u,B.x,7.72,B.z+.0752);let re=[Bt+Math.sin(Math.PI+.25)*.135,Ni-.04,en+Math.cos(Math.PI+.25)*.135];r(.008,.016,o.blackPlastic,re[0],re[1],re[2]-.006,u,{axis:"z",seg:10,cast:!1}),a([[re[0],re[1],re[2]-.012],[re[0]+.02,re[1]-.12,re[2]-.1],[B.x+.02,7.62,B.z+.12],[B.x,7.69,B.z+.06]],.0045,o.blackPlastic,u,{radial:6,cast:!1}),a([[B.x+.03,7.69,B.z+.05],[B.x+.05,7.4,B.z+.03],[B.x+.055,6.6,B.z+.025],[B.x+.2,6.42,B.z+.1]],.006,o.rubber,u,{radial:6,cast:!1}),[-1,1].forEach(U=>{s(.34,.03,.006,o.galv,Bt,6.44,en+U*(wn+.004),u,{cast:!1}),[-.15,.15].forEach(be=>r(.006,.03,o.galv,Bt+be,6.44,en,u,{axis:"z",seg:8,cast:!1}))});let Ne=Vp(Bt),Re=Math.atan(.72);s(.42,.006,.42,o.galv,Bt,Ne+.003/Math.cos(Re),en,u,{rot:[0,0,Re],cast:!1}),r(.13,.15,o.rubber,Bt,Ne+.09,en,u,{seg:28,r2:wn+.008}),r(wn+.012,.02,o.galv,Bt,Ne+.2,en,u,{seg:28,cast:!1}),r(wn+.004,.02,o.galv,Bt,ao-.005,en,u,{seg:28,cast:!1}),r(wn-.004,.002,b,Bt,ao-.004,en,u,{seg:24,cast:!1})}let rt=new Set([w,o.plywood,o.whitePlastic,o.blackPlastic,o.rubber,y]);[p,d,u].forEach(D=>D.traverse(J=>{J.isMesh&&!J.isInstancedMesh&&(J.castShadow=rt.has(J.material)&&J.renderOrder===0,J.receiveShadow=!0)})),i.bake(p),i.bake(d),i.bake(u);let Q=14257407,de=i.particles(300,{color:Q,size:.065,gain:2.2}),Ce=de.userData.n,xe=de.userData.pos,Ue=new Float32Array(Ce*4),$=new Float32Array(Ce*3),Be=(D,J)=>{xe[D*3]=$e(Kn+.03,Qn-.03,f()),xe[D*3+1]=J?$e(ef,En-.03,f()):ef+f()*.08,xe[D*3+2]=$e(An+.02,Si-.05,f()),Ue[D*4]=.05+f()*.08,Ue[D*4+1]=f()*6.28;let le=f(),ge=(f()-.5)*.6;le<.4?(Ue[D*4+2]=ge,Ue[D*4+3]=-1):le<.6?(Ue[D*4+2]=-1,Ue[D*4+3]=ge):le<.75?(Ue[D*4+2]=1,Ue[D*4+3]=ge):(Ue[D*4+2]=ge,Ue[D*4+3]=1)};for(let D=0;D<Ce;D++){Be(D,!0);let J=f();$[D*3]=$e(xe[D*3],oo.x,J),$[D*3+1]=$e(xe[D*3+1],oo.y,J*J),$[D*3+2]=$e(xe[D*3+2],oo.z,J)}let te=xe.slice(),oe=i.particles(170,{color:Q,size:.055,gain:1.8}),K=oe.userData.n,ne=oe.userData.pos,ue=new Float32Array(K*4),Ge=(D,J,le,ge)=>{le[ge*3]=$e(D[0][0],D[1][0],J),le[ge*3+2]=$e(D[0][1],D[1][1],J)},Oe=(D,J)=>{let le=f();if(le<.3)Ge(Rl,f(),ne,D);else if(le<.48)Ge(Cl,f(),ne,D);else if(le<.8)ne[D*3]=$e(Wp[0],Wp[1],f()),ne[D*3+2]=$i+.012;else{let ge=f()*6.283,Le=f()<.4?.06:.35;ne[D*3]=Yn+Math.cos(ge)*Le,ne[D*3+2]=Wn+Math.sin(ge)*Le}if(ne[D*3+1]=Os+.01,ue[D*4]=.03+f()*.11,ue[D*4+1]=f()*6.28,ue[D*4+2]=4+f()*10,ue[D*4+3]=0,J){let ge=f()*ue[D*4+2];ue[D*4+3]=ge,ne[D*3+1]+=ue[D*4]*ge*.85}};for(let D=0;D<K;D++)Oe(D,!0);let Je=i.particles(80,{color:Q,size:.08,gain:1.2}),je=Je.userData.n,q=Je.userData.pos,gt=new Float32Array(je*4),dt=(D,J)=>{if(q[D*3]=Bt+(f()-.5)*.05,q[D*3+1]=ao,q[D*3+2]=en+(f()-.5)*.05,gt[D*4]=.45+f()*.35,gt[D*4+1]=f()*6.28,gt[D*4+2]=2+f()*1.6,gt[D*4+3]=0,J){let le=f()*gt[D*4+2];gt[D*4+3]=le,O(D,le,0)}},O=(D,J,le)=>{let ge=gt[D*4+3]/gt[D*4+2],Le=gt[D*4+1];q[D*3+1]+=gt[D*4]*(1-.6*ge)*J,q[D*3]+=(-.22*ge+Math.sin(Le)*.12*ge)*J,q[D*3+2]+=(.08*ge+Math.cos(Le+le*.3)*.12*ge)*J};for(let D=0;D<je;D++)dt(D,!0);h.add(de,oe,Je);let E={soil:l(-.45,-3.42,An+.02),test:l(Bs.x,Un.y+.1,Bs.z+.03),pit:l(Bt,En-.12,en+.04),fan:l(Bt-.08,Ni,en+.11),stack:l(Bt,ao-.15,en),after:l(Bs.x,Un.y+.1,Bs.z+.03)},j={time:19.4,cut:0,ghost:0,ground:1,orbit:.012},se=[{...j,radius:15,theta:.6,phi:1.36,fx:-.6,ty:-1.5,fz:-.8,cut:1,ground:0,dof:0,orbit:.025},{...j,radius:1.6,theta:.2,phi:1.36,fx:Bs.x-.05,ty:Un.y+.07,fz:$i+.1,dof:1.1,narrow:{fx:Bs.x-.12}},{...j,radius:2.9,theta:.38,phi:1.2,fx:Bt+.25,ty:-3,fz:en,dof:1,narrow:{fx:Bt+.05}},{...j,radius:2.6,theta:.5,phi:1.5,fx:Bt,ty:8.05,fz:en,dof:.9,orbit:.012,narrow:{ty:7.85}},{...j,radius:.78,theta:-.12,phi:1.47,fx:Bs.x,ty:Un.y+.1,fz:Bs.z+.02,dof:1.3}],fe=0,Ve=0,ke=412,Te=412,ve=0,Ke=0,xt=-1;return{name:"radon",group:h,anchors:E,shots:se,hides(D){let J=[...D.sys.radon?D.sys.radon.meshes:[]];return D.sys.foundation&&D.sys.foundation.meshes.forEach(le=>{Math.abs(le.position.y+2.88)<.01&&J.push(le)}),D.layers.basement.traverse(le=>{le.isMesh&&Math.abs(le.position.x-Yn)<.01&&Math.abs(le.position.z-Wn)<.01&&J.push(le)}),J},light(D){return D===0?{pos:[.6,-.6,.9],at:[-.9,-3.1,-1.1],power:.75,fill:.6}:D===1?{pos:[-.3,-.9,-2.4],at:[Un.x+.1,Un.y,$i],power:.4,fill:.5}:D===2?{pos:[.2,-1.6,.4],at:[Bt+.1,En-.2,en],power:.4}:D===3?{pos:[.3,8.85,.3],at:[Bt,Ni,en],power:.75,fill:.35}:D===4?{pos:[.2,-1.05,-2.9],at:[Bs.x,Un.y+.08,$i],power:.35,fill:.4}:{pos:[-2.3,-.9,.3],at:[-1,-1.7,-2.4],power:.5}},update({step:D,t:J,dt:le,snap:ge}){let Le=D>=2?1:0,B=U=>ge?1:1-Math.exp(-le*U);fe=$e(fe,Le,B(1.6)),Ve=$e(Ve,Le,B(1.2)),d.visible=!Le,u.visible=!!Le;let Se=.022*Ve;Xe[0].scale.y=.08+Se,Xe[1].scale.y=.08-Se,ke=D===4?$e(ke,45,B(1.3)):$e(ke,412,B(6)),Ke=$e(Ke,D===4?1:0,B(1.3));let re=Math.round(ke),Ne=Math.round(Ke*20)/20;if((re!==Te||Ne!==ve)&&(Te=re,ve=Ne,Z.set("mon",void 0,void 0,{value:re,after:Ne})),oe.material.opacity=1-fe,oe.visible=fe<.98,Je.material.opacity=Et(.3,1,Ve),Je.visible=Ve>.3,n){let U=fe>.5?1:0;U!==xt&&(xt=U,xe.set(U?$:te),de.geometry.attributes.position.needsUpdate=!0);return}let Re=Math.min(le,.05);for(let U=0;U<Ce;U++){let be=xe[U*3],ce=xe[U*3+1],et=xe[U*3+2],ot=Ue[U*4],Ct=Ue[U*4+1],Lt=Math.sin(J*.9+Ct)*.02,Wt=ot,tn=Math.cos(J*.7+Ct)*.02,Bn=Et(Zi-.03,En-.03,ce);Lt+=Ue[U*4+2]*.14*Bn,tn+=Ue[U*4+3]*.14*Bn,Wt*=1-Bn;let pn=oo.x-be,R=oo.y-ce,pe=oo.z-et,Pe=Math.hypot(pn,R,pe)+1e-4,Ye=(.12+ot)*(.7+.35/(Pe+.2)),qe=pn/Pe*Ye+Math.sin(J*1.3+Ct)*.015,St=R/Pe*Ye,lt=pe/Pe*Ye;xe[U*3]=be+$e(Lt,qe,fe)*Re,xe[U*3+1]=Math.min(ce+$e(Wt,St,fe)*Re,En-.015),xe[U*3+2]=et+$e(tn,lt,fe)*Re,(xe[U*3]<Kn-.03||xe[U*3]>Qn+.03||xe[U*3+2]<An-.04||xe[U*3+2]>Si+.03||fe>.5&&Pe<.06)&&Be(U,!1)}if(de.geometry.attributes.position.needsUpdate=!0,oe.visible){for(let U=0;U<K;U++){let be=ue[U*4+1];if(ue[U*4+3]+=Re,ue[U*4+3]>ue[U*4+2]){Oe(U,!1);continue}ne[U*3+1]+=ue[U*4]*Re*(1-.3*ue[U*4+3]/ue[U*4+2]),ne[U*3]+=Math.sin(J*.5+be)*.035*Re,ne[U*3+2]+=Math.cos(J*.4+be*1.3)*.035*Re}oe.geometry.attributes.position.needsUpdate=!0}if(Je.visible){for(let U=0;U<je;U++)gt[U*4+3]+=Re,gt[U*4+3]>gt[U*4+2]?dt(U,!1):O(U,Re,J);Je.geometry.attributes.position.needsUpdate=!0}}}}var an=-3.3,xn=-2.6,Vt=-2.8,tf=-2.51,os=-1.39,Ui=xn+.37,ls=-4.9,Rs=-.26,qn=-2.75,cs=-.6,uy=[0,1,12,18,22,25],hy=["INSTALL","MAINTAIN","UPGRADE","REPLACE","REMOVE","DEMOLISH"],dy=[[0,"INSTALLED \xB7 PERMIT"],[1,"FILTER \xB7 TUNE-UP"],[3,"FILTER \xB7 TUNE-UP"],[5,"DUCTS CLEANED"],[8,"IGNITER"],[11,"FILTER \xB7 TUNE-UP"],[12,"HEAT PUMP COIL"],[15,"TUNE-UP"],[18,"FILTER \xB7 TUNE-UP"],[20,"BLOWER MOTOR"],[24,"TUNE-UP"]],sh=12;function Yp({kit:i,tier:e}){let{box:t,cyl:n,tube:s,mats:r,atlas:a,V:o,std:c}=i,l=new at,h=new at;l.add(h);let p=c(9736070,.42,.3,{envMapIntensity:.8}),d=c(6717583,.42,.3,{envMapIntensity:.8}),u=c(10920599,.93,0),f=c(12886642,.82,0),v=c(9400648,.95,0),m=c(13884388,.88,0),g=c(5330782,.5,.45,{envMapIntensity:.8}),M=c(9316898,.45,.5),S=c(2897971,.6,.05),y=c(13210519,1,0),_=c(1313284,.4,0,{emissive:16747066,emissiveIntensity:1.4}),T=r.led(9425830,2),A=r.castIron,x=r.galv,w=r.pvc,C=r.copper,F=r.yellowPlastic,b="ui-monospace, Menlo, Consolas, monospace",L=R=>(pe,Pe,Ye)=>{pe.fillStyle=R?"#5f574b":"#a9a08a",pe.fillRect(0,0,Pe,Ye);for(let qe=0;qe<Pe;qe+=8)pe.fillStyle=R?"rgba(30,26,20,.55)":"rgba(120,110,90,.45)",pe.fillRect(qe,0,3,Ye);if(R)for(let qe=0;qe<90;qe++)pe.fillStyle=`rgba(40,34,26,${.15+qe%5*.06})`,pe.fillRect(qe*37%Pe,qe*53%Ye,6+qe%4*3,4+qe%3*3);pe.fillStyle=R?"#6e5a3c":"#9a7a4c",pe.fillRect(0,0,Pe,6),pe.fillRect(0,Ye-6,Pe,6),pe.fillRect(0,0,6,Ye),pe.fillRect(Pe-6,0,6,Ye)},P=[{key:"afue",text:"96% AFUE",sub:"60 000 BTU/h \xB7 NAT GAS",w:256,h:72,size:32,color:"#1b1d21",bg:"#c9c3b2"},{key:"permit",w:128,h:220,draw(R,pe,Pe){R.fillStyle="#e08a2c",R.beginPath(),R.moveTo(0,22),R.lineTo(22,0),R.lineTo(pe-22,0),R.lineTo(pe,22),R.lineTo(pe,Pe),R.lineTo(0,Pe),R.fill(),R.fillStyle="#14161a",R.beginPath(),R.arc(pe/2,20,8,0,6.3),R.fill(),R.textAlign="center",R.textBaseline="middle",R.fillStyle="#1a1308",R.font=`700 22px ${b}`,R.fillText("GAS",pe/2,58),R.fillText("PERMIT",pe/2,84),R.font=`500 15px ${b}`,R.fillText("INSPECTED",pe/2,122),R.fillText("YEAR 0",pe/2,144),R.strokeStyle="#1a1308",R.lineWidth=2,R.strokeRect(14,166,pe-28,36),R.font=`700 18px ${b}`,R.fillText("PASS",pe/2,185)}},{key:"crate",text:"UPFLOW FURNACE",sub:"THIS SIDE UP \xB7 52 kg",w:320,h:72,size:30,color:"#2a1d0e"},{key:"svc",w:256,h:384,year:0,draw(R,pe,Pe,Ye){R.fillStyle="#d8d1bd",R.fillRect(0,0,pe,Pe),R.fillStyle="#24262b",R.fillRect(0,0,pe,44),R.fillStyle="#e9e3d3",R.textAlign="left",R.textBaseline="middle",R.font=`700 20px ${b}`,R.fillText("SERVICE RECORD",12,23),R.font=`500 15px ${b}`,dy.forEach(([qe,St],lt)=>{let _t=66+lt*28;R.strokeStyle="rgba(20,22,26,.3)",R.beginPath(),R.moveTo(10,_t+13),R.lineTo(pe-10,_t+13),R.stroke(),!(qe>Ye.year)&&(R.fillStyle="#2b3a66",R.fillText(("YR "+qe).padEnd(6)+St,12,_t))})}},{key:"cal",w:200,h:248,year:0,verb:"INSTALL",draw(R,pe,Pe,Ye){R.fillStyle="#cdc6b3",R.fillRect(0,0,pe,Pe),R.fillStyle="#a8322a",R.fillRect(0,0,pe,54),R.fillStyle="#1a1c20",[40,100,160].forEach(qe=>{R.beginPath(),R.arc(qe,8,6,0,6.3),R.fill()}),R.textAlign="center",R.textBaseline="middle",R.fillStyle="#f1e6d6",R.font=`700 24px ${b}`,R.fillText("YEAR",pe/2,33),R.fillStyle="#16181c",R.font=`700 112px ${b}`,R.fillText(String(Ye.year),pe/2,140),R.fillStyle="#5a3a1c",R.font=`700 22px ${b}`,R.fillText(Ye.verb,pe/2,222)}},{key:"tstat",w:192,h:192,draw(R,pe,Pe){R.fillStyle="#05070b",R.beginPath(),R.arc(pe/2,Pe/2,pe/2-2,0,6.3),R.fill(),R.strokeStyle="#8fd3a6",R.lineWidth=6,R.beginPath(),R.arc(pe/2,Pe/2,pe/2-14,2.3,2.3+3.4),R.stroke(),R.textAlign="center",R.textBaseline="middle",R.fillStyle="#eef2f0",R.font=`600 58px ${b}`,R.fillText("21\xB0",pe/2+4,Pe/2-6),R.fillStyle="#8fd3a6",R.font=`600 15px ${b}`,R.fillText("HEAT PUMP",pe/2,Pe/2+36),R.fillStyle="#8b93a1",R.font=`500 13px ${b}`,R.fillText("OUT \u221218\xB0",pe/2,Pe/2+58)}},{key:"coil",text:"HEAT PUMP COIL",sub:"CASED \xB7 3 TON",w:256,h:64,size:26,color:"#e3ddd0"},{key:"odu",text:"COLD CLIMATE",sub:"HEATS TO \u221230 \xB0C",w:256,h:64,size:26,color:"#e3ddd0"},{key:"tank",text:"189 L",sub:"GAS \xB7 40 000 BTU/h",w:192,h:96,size:42,color:"#e9e6de"},{key:"tkl",w:128,h:72,draw(R,pe,Pe){R.fillStyle="#05070b",R.fillRect(0,0,pe,Pe),R.textAlign="center",R.textBaseline="middle",R.fillStyle="#7fc4ff",R.font=`700 34px ${b}`,R.fillText("49\xB0C",pe/2,Pe/2-6),R.fillStyle="#8fd3a6",R.font=`500 12px ${b}`,R.fillText("ON DEMAND",pe/2,Pe-12)}},{key:"capped",w:112,h:176,draw(R,pe,Pe){R.fillStyle="#c23a2b",R.fillRect(0,14,pe,Pe-14),R.beginPath(),R.moveTo(0,14),R.lineTo(pe/2,0),R.lineTo(pe,14),R.fill(),R.fillStyle="#14161a",R.beginPath(),R.arc(pe/2,20,7,0,6.3),R.fill(),R.textAlign="center",R.textBaseline="middle",R.fillStyle="#f6eee4",R.font=`700 21px ${b}`,R.fillText("CAPPED",pe/2,64),R.font=`500 13px ${b}`,R.fillText("GAS OFF",pe/2,98),R.fillText("DO NOT",pe/2,124),R.fillText("OPEN",pe/2,142)}},{key:"suite",w:256,h:320,draw(R,pe,Pe){R.fillStyle="#c9c4b4",R.fillRect(0,0,pe,Pe),R.fillStyle="#1a1c20",R.textAlign="left",R.textBaseline="middle",R.font=`700 21px ${b}`,R.fillText("SECONDARY SUITE",12,24),R.font=`500 14px ${b}`,R.fillText("BUILDING PERMIT \xB7 YR 25",12,48),R.strokeStyle="#2b3a66",R.lineWidth=3,R.strokeRect(20,70,pe-40,170),R.beginPath(),R.moveTo(20,150),R.lineTo(130,150),R.moveTo(130,70),R.lineTo(130,240),R.stroke(),R.lineWidth=1.5,R.beginPath(),R.arc(130,196,34,Math.PI,Math.PI*1.5),R.stroke(),R.fillStyle="#2b3a66",R.font=`600 13px ${b}`,R.fillText("MECH",40,110),R.fillText("BEDROOM",148,110),R.fillText("BATH",40,196),R.fillText("LIVING",148,196),R.fillStyle="#1a1c20",R.font=`500 13px ${b}`,R.fillText("MECH ROOM: TYPE X",12,268),R.fillText("BOTH SIDES \xB7 30 MIN",12,290)}},{key:"disc",text:"HEAT PUMP",w:128,h:32,size:18,color:"#e3ddd0"},{key:"bin",text:"DRYWALL ONLY",w:192,h:40,size:22,color:"#e3ddd0"},{key:"rust",w:384,h:96,draw(R,pe,Pe){let Ye=11,qe=()=>(Ye=Ye*16807%2147483647)/2147483647;R.clearRect(0,0,pe,Pe);for(let St=0;St<pe;St+=2){let lt=Pe*(.35+.5*qe()*qe())*(.6+.4*Math.sin(St*.05)**2),_t=R.createLinearGradient(0,Pe,0,Pe-lt);_t.addColorStop(0,"rgba(96,40,14,0.95)"),_t.addColorStop(.5,"rgba(122,56,20,0.75)"),_t.addColorStop(1,"rgba(140,70,30,0)"),R.fillStyle=_t,R.fillRect(St,Pe-lt,2+qe()*2,lt)}}},{key:"pleatOld",w:96,h:128,draw:L(!0)},{key:"pleatNew",w:96,h:128,draw:L(!1)}],H=a(P,{width:1024,emissive:.22}),Z=o(0,1,0),V=o(0,0,0),W=R=>{let pe=new Map;return R.traverse(Pe=>{Pe.isMesh&&pe.set(Pe.material,pe.get(Pe.material)||!1||Pe.castShadow)}),R.traverse(Pe=>{Pe.isMesh&&!Pe.userData.keep&&(Pe.castShadow=pe.get(Pe.material),Pe.receiveShadow=!0)}),i.bake(R)},G=(R,pe,Pe,Ye,qe={})=>{let St=R.map(Ht=>o(Ht[0],Ht[1],Ht[2])),lt=qe.fit??1.35,_t=qe.seg||10,vt=qe.cast!==!1,zt=(Ht,Mn,bi)=>{let Fi=Ht.distanceTo(Mn);if(Fi<1e-4)return;let Oi=new De(new jt(bi,bi,Fi,_t),Pe);Oi.position.copy(Ht).add(Mn).multiplyScalar(.5),Oi.quaternion.setFromUnitVectors(Z,V.subVectors(Mn,Ht).normalize()),Oi.castShadow=vt,Oi.receiveShadow=!0,Ye.add(Oi)};for(let Ht=0;Ht<St.length-1;Ht++)if(zt(St[Ht],St[Ht+1],pe),Ht>0&&lt){let Mn=St[Ht];[St[Ht-1],St[Ht+1]].forEach(bi=>{V.subVectors(bi,Mn).normalize(),zt(Mn.clone(),Mn.clone().addScaledVector(V,pe*2.2),pe*lt)})}},k={value:Array.from({length:sh},()=>o(0,0,0))},Y={value:Array.from({length:sh},()=>o(0,0,0))},he=R=>{R.uniforms.uPhP=k,R.uniforms.uPhS=Y,R.vertexShader=R.vertexShader.replace("#include <common>",`#include <common>
attribute float aPh; uniform vec3 uPhP[${sh}]; uniform vec3 uPhS[${sh}];`).replace("#include <begin_vertex>",`#include <begin_vertex>
{ int pi = int(aPh + 0.5); transformed = uPhP[pi] + (transformed - uPhP[pi]) * uPhS[pi]; }`)},we=new Xa({depthPacking:ld});we.onBeforeCompile=he,we.customProgramCacheKey=()=>"cyclePhDepth";let Ie=[],Xe=(R,pe,Pe="s")=>{let Ye=new at;Ye.name=R,l.add(Ye);let qe={g:Ye,i:Ie.length,pivot:pe.clone(),mode:Pe,k:0};return k.value[qe.i].copy(pe),Ie.push(qe),qe},rt=()=>{l.updateWorldMatrix(!0,!0);let R=new Mt().copy(l.matrixWorld).invert(),pe=new Mt,Pe=new Map;Ie.forEach(Ye=>Ye.g.traverse(qe=>{if(!qe.isMesh)return;let St=qe.material.uuid+"|"+qe.renderOrder,lt=Pe.get(St);lt||Pe.set(St,lt={mat:qe.material,cast:!1,ro:qe.renderOrder,geos:[]}),lt.cast=lt.cast||qe.castShadow;let _t=qe.geometry.index?qe.geometry.toNonIndexed():qe.geometry.clone();Object.keys(_t.attributes).forEach(vt=>{vt!=="position"&&vt!=="normal"&&vt!=="uv"&&_t.deleteAttribute(vt)}),_t.attributes.uv||_t.setAttribute("uv",new Ot(new Float32Array(_t.attributes.position.count*2),2)),_t.applyMatrix4(pe.multiplyMatrices(R,qe.matrixWorld)),_t.setAttribute("aPh",new Ot(new Float32Array(_t.attributes.position.count).fill(Ye.i),1)),lt.geos.push(_t)})),Ie.forEach(Ye=>{Ye.g.traverse(qe=>{qe.isMesh&&qe.geometry.dispose()}),l.remove(Ye.g)}),Pe.forEach(Ye=>{let qe=Wi(Ye.geos);if(Ye.geos.forEach(_t=>_t.dispose()),!qe)return;let St=Ye.mat.clone();St.onBeforeCompile=he,St.customProgramCacheKey=()=>"cyclePh";let lt=new De(qe,St);lt.castShadow=Ye.cast,lt.receiveShadow=!0,lt.renderOrder=Ye.ro,lt.frustumCulled=!1,Ye.cast&&(lt.customDepthMaterial=we),lt.userData.keep=!0,lt.userData.noAO=!0,l.add(lt)})},Q=(R,pe,Pe)=>{R.k=$e(R.k,pe,Pe),Math.abs(R.k-pe)<.002&&(R.k=pe);let Ye=R.mode==="pop"?R.k>.5?1:0:Et(0,1,R.k),qe=Y.value[R.i];return R.mode==="y"?qe.set(1,Ye,1):R.mode==="xz"?qe.set(Ye,1,Ye):qe.setScalar(Ye),Ye<.001&&qe.setScalar(0),Ye};n(.085,.012,x,-2.7,Vt+.004,-1.85,h,{seg:20,cast:!1}),n(.068,.014,A,-2.7,Vt+.005,-1.85,h,{seg:20,cast:!1});for(let R=-2;R<=2;R++)t(.11-Math.abs(R)*.02,.006,.008,x,-2.7,Vt+.012,-1.85+R*.022,h,{cast:!1});let de=-3.95,Ce=.9;t(.089,.038,Ce-de,f,ls-.045,Vt+.019,(de+Ce)/2,h,{cast:!1}),t(.089,.038,Ce-de,f,ls-.045,Rs-.019,(de+Ce)/2,h,{cast:!1});for(let R=de+.02;R<=Ce;R+=.406)t(.089,Rs-Vt-.076,.038,f,ls-.045,(Vt+Rs)/2,Math.min(R,Ce-.02),h,{cast:!1});for(let R=0;R<6;R++)R===2||R===4||t(.08,Rs-Vt-.09,.36,y,ls-.05,(Vt+Rs)/2,-1.48+.019+R*.406+.203,h,{cast:!1});let xe=(R,pe,Pe)=>{t(.0127,Rs-Vt-.01,pe-R-.003,u,ls+.0064,(Vt+Rs)/2,(R+pe)/2,Pe),t(.012,.08,pe-R,w,ls+.019,Vt+.04,(R+pe)/2,Pe,{cast:!1})};xe(de,-2.7,h),xe(-2.7,-1.48,h),t(.68,.05,.88,A,an,Vt+.025,xn,h),t(.56,.24,.74,x,an,(Vt+.05+tf)/2,xn,h),t(.52,.036,.012,A,an,-2.56,Ui-.004,h,{cast:!1}),t(.56,.012,.02,x,an,-2.535,Ui+.008,h,{cast:!1}),t(.3,-.25-(Vt+.05),.6,x,an-.43,(-.25+Vt+.05)/2,xn,h),[-2.2,-1.6,-1,-.5].forEach(R=>t(.304,.012,.604,x,an-.43,R,xn,h,{cast:!1})),t(.56,os-tf,.74,p,an,(tf+os)/2,xn,h,{r:.008}),t(.54,.52,.008,r.enclosure,an,-1.67,Ui+.004,h,{r:.003}),t(.54,.54,.008,r.enclosure,an,-2.225,Ui+.004,h,{r:.003});for(let R=0;R<6;R++)t(.3,.011,.006,A,an-.05,-1.47-R*.026,Ui+.008,h,{cast:!1});for(let R=0;R<4;R++)t(.3,.011,.006,A,an-.05,-2.41-R*.022,Ui+.008,h,{cast:!1});[-1.43,-1.99].forEach(R=>t(.09,.016,.01,A,an+.17,R,Ui+.011,h,{cast:!1})),t(.09,.06,.006,A,an+.15,-1.72,Ui+.009,h,{cast:!1});let Ue=t(.064,.036,.004,_,an+.15,-1.72,Ui+.012,l,{cast:!1,keep:!0}),$=t(.012,.012,.004,T,an+.2,-2.08,Ui+.01,l,{cast:!1,keep:!0});t(.04,.024,.004,A,an+.2,-2.08,Ui+.0085,h,{cast:!1}),H.plane("afue",.15,h,an-.1,-1.78,Ui+.0095),H.plane("svc",.13,h,an+.2805,-1.95,xn+.1).rotation.y=Math.PI/2,t(.004,.012,.03,A,an+.283,-1.85,xn+.1,h,{cast:!1}),s([[an+.24,-2.45,Ui+.01],[an+.3,-2.62,Ui+.08],[-2.85,Vt+.02,-2.05],[-2.72,Vt+.02,-1.88]],.008,w,h,{radial:6,cast:!1}),t(.56,-.25-os,.74,x,an,(os-.25)/2,xn,h),t(.57,.02,.75,x,an,os+.01,xn,h,{cast:!1});let Be=an+.28,te=1.4;t(te-Be,.25,.5,x,(Be+te)/2,-.375,xn,h);for(let R=Be+1.2;R<te;R+=1.5)t(.02,.258,.508,x,R,-.375,xn,h,{cast:!1});for(let R=Be+.6;R<te;R+=1.2)[-1,1].forEach(pe=>t(.025,.27,.003,x,R,-.37,xn+pe*.253,h,{cast:!1}));n(.065,.24,x,-1.5,-.375,xn+.37,h,{axis:"z",seg:16}),n(.065,.42,x,-1.5,-.27,xn+.49,h,{seg:16}),n(.07,.03,x,-1.5,-.375,xn+.26,h,{axis:"z",seg:16,cast:!1});let oe=o(-2.3,-.375,xn+.25);t(.27,.12,.012,w,oe.x,oe.y,oe.z+.006,h,{cast:!1});for(let R=0;R<7;R++)t(.012,.09,.006,A,oe.x-.105+R*.035,oe.y,oe.z+.014,h,{cast:!1});t(.05,.12,.075,r.enclosure,an+.305,-.85,xn+.2,h),t(.006,.1,.06,w,an+.333,-.85,xn+.2,h,{cast:!1}),t(.01,.025,.012,A,an+.338,-.85,xn+.2,h,{cast:!1}),n(.008,.55,x,an+.305,-.52,xn+.2,h,{seg:6,cast:!1}),[-3.45,-3.22].forEach((R,pe)=>{G([[R,-1.62,xn-.37],[R,-1.62,-3.2],[R,-.1+pe*.02,-3.2],[R,-.1+pe*.02,-3.85],[R,.14,-3.85],[R,.14,-4.4]],.04,w,h,{fit:1.2,seg:14}),n(.048,.06,w,R,.14,-4.42,h,{axis:"z",seg:14}),t(.025,.2,.003,x,R,-.2,-3.4,h,{cast:!1})}),G([[qn,cs,1.2],[qn,cs,-3.5]],.017,A,h,{fit:0}),[.6,-.6,-1.8,-3.1].forEach(R=>t(.02,-.25-cs,.004,x,qn,(cs-.25)/2+.01,R,h,{cast:!1})),n(.024,.06,A,qn,cs,-3.5,h,{axis:"z",seg:10}),G([[qn,cs,-2.3],[qn,-1.72,-2.3],[an+.28,-1.72,-2.3]],.017,A,h),G([[qn,-1.72,-2.3],[qn,-1.95,-2.3]],.017,A,h,{fit:0}),n(.025,.04,A,qn,-1.965,-2.3,h,{seg:10}),n(.024,.06,A,qn,-1.72,-2.3,h,{seg:10}),n(.024,.06,A,qn,cs,-2.3,h,{axis:"z",seg:10}),n(.029,.035,A,qn,-1.48,-2.3,h,{seg:8}),n(.026,.07,C,qn,-1.25,-2.3,h,{seg:12}),t(.016,.1,.02,F,qn+.035,-1.24,-2.3,h,{r:.004}),G([[qn,cs,-2.7],[-1.86,cs,-2.7],[-1.86,-2,-2.7]],.017,A,h),n(.024,.06,A,qn,cs,-2.7,h,{axis:"z",seg:10}),n(.026,.07,C,-1.86,-1.85,-2.7,h,{seg:12});let K=new at;K.position.set(-1.86,-1.85,-2.7),K.userData.keep=!0,l.add(K),t(.016,.1,.02,F,.035,.01,0,K,{r:.004,cast:!1}),[-2.2,-2].forEach(R=>n(.011,.5,C,R,-.5,-3,h,{seg:8})),n(.085,.06,x,-2.1,-.28,-3,h,{seg:16}),t(.006,.006,.02,x,-1.15,-.93,-3.985,h,{cast:!1}),H.plane("cal",.2,h,-1.15,-1.07,-3.988);let ne=Xe("crate",o(-2.2,Vt,-1.05));{let R=ne.g,pe=-2.2,Pe=-1.05,Ye=Vt;[-.4,0,.4].forEach(qe=>t(.9,.09,.07,f,pe,Ye+.045,Pe+qe,R));for(let qe=0;qe<6;qe++)t(.11,.02,.92,f,pe-.4+qe*.16,Ye+.1,Pe,R);[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([qe,St])=>t(.12,.1,.12,w,pe+qe*.32,Ye+.16,Pe+St*.33,R,{cast:!1})),t(.62,.1,.8,v,pe+.05,Ye+.27,Pe+.02,R,{rot:[0,.1,0]}),t(1.6,.008,.78,v,-3.75,Ye+.004,-.9,R,{rot:[0,.35,0],cast:!1}),t(.78,.008,.76,v,-3.2,Ye+.012,-.25,R,{rot:[0,-.2,0],cast:!1}),H.plane("crate",.34,R,-3.7,Ye+.0095,-.9).rotation.set(-Math.PI/2,0,.35),s([[pe-.5,Ye+.11,Pe+.2],[pe-.7,Ye+.01,Pe+.4],[pe-.95,Ye+.005,Pe+.3],[pe-1.1,Ye+.005,Pe+.6]],.006,A,R,{radial:4,cast:!1}),s([[qn,-1.22,-2.28],[qn+.01,-1.3,-2.25],[qn+.01,-1.36,-2.26]],.0015,x,R,{radial:4,cast:!1}),H.plane("permit",.07,R,qn+.01,-1.42,-2.255).rotation.set(.05,.3,.04)}let ue=H.mat.clone();ue.transparent=!1,ue.depthWrite=!0,ue.alphaTest=0;let Ge=R=>{let pe=H.plane(R,.1),Pe=pe.geometry.attributes.uv,Ye=1,qe=0,St=1,lt=0;for(let Ht=0;Ht<Pe.count;Ht++)Ye=Math.min(Ye,Pe.getX(Ht)),qe=Math.max(qe,Pe.getX(Ht)),St=Math.min(St,Pe.getY(Ht)),lt=Math.max(lt,Pe.getY(Ht));pe.geometry.dispose();let _t=new ln(.5,.025,.64),vt=_t.attributes.uv;for(let Ht=0;Ht<vt.count;Ht++)vt.setXY(Ht,Ye+vt.getX(Ht)*(qe-Ye),St+vt.getY(Ht)*(lt-St));let zt=new De(_t,ue);return zt.castShadow=!0,zt.receiveShadow=!0,zt.userData.keep=!0,l.add(zt),zt},Oe=Ge("pleatOld"),Je=Ge("pleatNew"),je=o(an,-2.56,xn+.05),q=o(an,-2.56,xn+.78),gt=o(-3.88,Vt+.322,-2.2),dt=Xe("hose",oe);{let R=dt.g,pe=[[oe.x,oe.y,oe.z+.06],[oe.x+.02,oe.y-.12,oe.z+.3],[-2.15,-1.5,-1.75],[-1.95,Vt+.09,-1.3],[-1.55,Vt+.08,-.7],[-.4,Vt+.08,.1],[1.4,Vt+.08,.7]],Pe=s(pe,.07,A,R,{radial:10,density:6,tension:.4}),Ye=Pe.userData.curve,qe=Pe.userData.len,St=new Pi(.072,.007,4,12),lt=Math.round(qe/(e>=1?.07:.14));for(let _t=2;_t<lt;_t++){let vt=_t/lt,zt=new De(St,A);zt.position.copy(Ye.getPointAt(vt)),zt.quaternion.setFromUnitVectors(o(0,0,1),Ye.getTangentAt(vt)),R.add(zt)}t(.3,.16,.08,A,oe.x,oe.y,oe.z+.05,R,{r:.01}),n(.08,.06,x,oe.x,oe.y,oe.z+.11,R,{axis:"z",seg:16})}let O=Xe("hp",o(an,os,xn),"y"),E=-3,j=-4.85,se=.42,fe=new at;fe.userData.keep=!0,fe.position.set(E-.1,se+.4,j-.17),l.add(fe);{let R=O.g;t(.6,.44,.78,p,an,os+.22,xn,R,{r:.008}),t(.52,.34,.006,p,an,os+.22,xn+.392,R,{r:.003});for(let Pe=0;Pe<4;Pe++)t(.012,.012,.008,x,an+(Pe%2?.24:-.24),os+(Pe<2?.07:.37),xn+.396,R,{cast:!1});H.plane("coil",.2,R,an-.08,os+.3,xn+.3965);let pe=(Pe,Ye,qe)=>s([[an+.3,os+.2+qe,xn-.28],[-2.92,os+.2+qe,xn-.28],[-2.9+qe,-.6,-2.9],[-2.9+qe,-.13,-2.95],[-2.9+qe,-.12,-3.85],[-2.9+qe,.12,-3.97],[-2.9+qe,.12,-4.35],[-2.85+qe,.32,-4.42],[-2.75+qe,.6,-4.5],[-2.55,.62+qe*2,-4.62]],Pe,Ye,R,{radial:8,density:10,tension:.2});pe(.021,A,0),pe(.006,C,.045),t(.02,.22,.003,x,-2.88,-.24,-3.4,R,{cast:!1}),t(.012,.11,.11,A,ls+.019,-1.3,-2.05,R,{r:.004}),H.plane("tstat",.092,R,ls+.0256,-1.3,-2.05).rotation.y=Math.PI/2,t(1.2,.08,.7,m,E,.04,j,R),[-.4,.4].forEach(Pe=>{t(.05,se-.08,.05,x,E+Pe,(se+.08)/2,j+.12,R),t(.05,se-.08,.05,x,E+Pe,(se+.08)/2,j-.12,R),t(.06,.04,.5,x,E+Pe,se-.02,j,R)}),t(.96,.78,.38,g,E,se+.39,j,R,{r:.02}),n(.31,.02,A,E-.1,se+.4,j-.19,R,{axis:"z",seg:32,cast:!1}),[.12,.2,.28].forEach(Pe=>{let Ye=new De(new Pi(Pe,.005,4,32),x);Ye.position.set(E-.1,se+.4,j-.205),R.add(Ye)}),t(.62,.008,.008,x,E-.1,se+.4,j-.206,R,{cast:!1}),t(.008,.62,.008,x,E-.1,se+.4,j-.206,R,{cast:!1}),H.plane("odu",.2,R,E+.33,se+.62,j-.193).rotation.y=Math.PI,t(1,.07,.42,m,E,se+.815,j,R,{r:.03,cast:!1}),t(.7,.05,.3,m,E-.05,se+.86,j,R,{r:.022,cast:!1}),t(.22,.1,.9,m,E+.4,.13,j+.1,R,{r:.04,cast:!1}),t(.14,.2,.08,g,-2.25,.9,-4.29,R,{r:.01}),H.plane("disc",.1,R,-2.25,.93,-4.332).rotation.y=Math.PI,s([[-2.25,.8,-4.3],[-2.3,.6,-4.4],[-2.52,.55,-4.7]],.012,A,R,{radial:6,cast:!1});for(let Pe=0;Pe<3;Pe++){let Ye=t(.26,.09,.006,A,0,0,0,null,{cast:!1});Ye.geometry.translate(.14,0,0),Ye.rotation.set(0,.25,Pe*Math.PI*2/3),fe.add(Ye)}W(fe)}let Ve=o(-2.1,Vt+.12,-2.64),ke=new at;ke.rotation.order="YXZ",ke.position.copy(Ve),ke.userData.keep=!0,l.add(ke);let Te;{let R=new at,pe=-.36;ke.add(R),n(.28,1.38,d,0,-.1+.69,pe,R,{seg:28}),n(.284,.04,A,0,-.1,pe,R,{seg:28}),n(.27,.03,d,0,1.295,pe,R,{seg:28,r2:.2}),t(.14,.08,.01,A,0,.08,-.083,R),t(.1,.12,.07,A,0,.26,-.05,R,{r:.008}),n(.02,.025,C,0,.29,-.012,R,{axis:"z",seg:12,cast:!1}),n(.012,.06,C,.12,.05,-.1,R,{axis:"z",seg:8,cast:!1}),n(.07,.08,x,0,1.35,pe,R,{seg:16,r2:.04}),n(.075,.1,x,0,1.43,pe,R,{seg:16}),[-.1,.1].forEach(zt=>{n(.012,.08,x,zt,1.33,pe,R,{seg:8}),n(.02,.03,C,zt,1.37,pe,R,{seg:8})}),n(.018,.06,C,.3,1.1,pe,R,{axis:"x",seg:8}),t(.025,.04,.02,C,.31,1.13,pe,R,{cast:!1}),G([[.33,1.1,pe],[.34,1.1,pe],[.34,.04,pe]],.011,C,R,{seg:8}),H.plane("tank",.14,R,0,.78,-.076),W(R),Te=n(.2825,.3,H.mat,0,.06,pe,ke,{seg:28,open:!0,keep:!0,cast:!1});let Pe=H.plane("rust",.1),Ye=Pe.geometry.attributes.uv,qe=1,St=0,lt=1,_t=0;for(let zt=0;zt<Ye.count;zt++)qe=Math.min(qe,Ye.getX(zt)),St=Math.max(St,Ye.getX(zt)),lt=Math.min(lt,Ye.getY(zt)),_t=Math.max(_t,Ye.getY(zt));Pe.geometry.dispose();let vt=Te.geometry.attributes.uv;for(let zt=0;zt<vt.count;zt++)vt.setXY(zt,qe+vt.getX(zt)*(St-qe),lt+vt.getY(zt)*(_t-lt))}let ve=new at;ve.userData.keep=!0,ke.add(ve);let Ke=new at;Ke.position.set(0,0,.02),Ke.userData.keep=!0;{let R=new at;ve.add(R),[-.17,.17].forEach(Pe=>G([[Pe,-.1,-.05],[Pe,1.28,-.05],[Pe,1.4,.03]],.013,M,R,{seg:8,fit:0})),G([[-.17,1.4,.03],[.17,1.4,.03]],.013,M,R,{seg:8,fit:0}),[.35,.85].forEach(Pe=>n(.009,.34,M,0,Pe,-.05,R,{axis:"x",seg:6})),t(.38,.01,.24,M,0,-.115,-.17,R),n(.012,.5,M,0,0,.02,R,{axis:"x",seg:8}),[-.17,.17].forEach(Pe=>t(.02,.1,.08,M,Pe,-.04,-.02,R));let pe=new De(new Pi(.286,.006,4,40),F);pe.rotation.x=Math.PI/2,pe.position.set(0,.95,-.36),R.add(pe),t(.06,.04,.03,F,0,.95,-.065,R),W(R),[-.25,.25].forEach(Pe=>{n(.12,.06,A,Pe,0,0,Ke,{axis:"x",seg:20}),n(.055,.065,M,Pe,0,0,Ke,{axis:"x",seg:12}),t(.068,.02,.16,M,Pe,0,0,Ke,{cast:!1})}),W(Ke),ve.add(Ke)}let xt=Xe("conn",o(-2.1,-1.5,-2.85),"pop");{let R=xt.g;G([[-1.86,-2,-2.7],[-1.86,-2.42,-2.7],[-2.05,-2.42,-2.7]],.017,A,R),G([[-1.86,-2.42,-2.7],[-1.86,-2.56,-2.7]],.017,A,R,{fit:0}),n(.024,.03,A,-1.86,-2.575,-2.7,R,{seg:10}),n(.024,.05,A,-1.86,-2,-2.7,R,{seg:10}),[-2.2,-2].forEach(pe=>n(.011,.5,C,pe,-1,-3,R,{seg:8})),n(.075,.96,x,-2.1,-.76,-3,R,{seg:16}),[-1,-.55].forEach(pe=>n(.079,.02,x,-2.1,pe,-3,R,{seg:16,cast:!1}))}let D=Xe("caps",o(-2,-1.2,-2.85),"pop");{let R=D.g;[-2.2,-2].forEach(pe=>n(.014,.035,C,pe,-.765,-3,R,{seg:8})),n(.024,.035,A,-1.86,-1.905,-2.7,R,{seg:10}),s([[-1.86,-1.86,-2.68],[-1.85,-1.92,-2.66],[-1.85,-1.97,-2.665]],.0015,x,R,{radial:4,cast:!1}),H.plane("capped",.055,R,-1.85,-2.02,-2.66).rotation.set(0,.25,-.05),n(.08,.012,x,-2.1,-.315,-3,R,{seg:16,cast:!1})}let J=Xe("puddle",o(-1.95,Vt+.003,-2.6),"xz");[[0,0,.42,.3],[.25,.18,.28,.2],[-.2,.22,.22,.18]].forEach(([R,pe,Pe,Ye])=>{n(1,.004,r.water,-1.95+R,Vt+.003,-2.6+pe,J.g,{seg:28,cast:!1}).scale.set(Pe,1,Ye)});let le=-1.72,ge=-1.1,Le=-3.89,B=Xe("tankless",o(le,ge,Le));{let R=B.g;t(.36,.56,.2,p,le,ge,Le,R,{r:.012}),t(.3,.46,.006,p,le,ge,Le+.1,R,{r:.003}),H.plane("tkl",.08,R,le,ge+.12,Le+.105),G([[le+.06,ge+.28,Le],[le+.06,-.62,Le],[le+.06,-.62,-4.05]],.05,w,R,{fit:1.15,seg:16}),G([[qn,cs,-3.5],[qn,cs,-3.84],[-1.45,cs,-3.84],[-1.45,-1.52,-3.84],[le+.1,-1.52,-3.84],[le+.1,ge-.28,-3.84]],.014,A,R,{seg:8}),n(.022,.06,C,-1.45,-1.25,-3.84,R,{seg:10}),t(.014,.08,.016,F,-1.42,-1.24,-3.84,R,{r:.003,cast:!1}),[[le-.1,r.bluePlastic,-2.25],[le-.02,r.redPlastic,-2.35]].forEach(([pe,Pe,Ye],qe)=>{G([[pe,ge-.28,-3.84],[pe,-1.6-qe*.06,-3.84],[Ye,-1.6-qe*.06,-3.84],[Ye,-.26,-3.84]],.011,C,R,{seg:8}),n(.017,.04,C,pe,-1.47,-3.84,R,{seg:8}),t(.05,.012,.012,Pe,pe+.02,-1.47,-3.815,R,{cast:!1})}),[-.45,-1.2].forEach(pe=>t(.03,.012,.03,C,-2.3,pe,-3.85,R,{cast:!1}))}let Se=Xe("loose",o(ls,-1.5,-.3),"pop");xe(-1.48,-.29,Se.g),xe(-.29,Ce,Se.g);let re=Xe("demo",o(-3,Vt,-.5),"y");{let R=re.g,pe=-1.05,Pe=ls+.02,Ye=-1.45,qe=-2.45,St=-1.6;t(qe-Pe,.038,.089,f,(Pe+qe)/2,Vt+.019,pe,R),t(Ye-St,.038,.089,f,(St+Ye)/2,Vt+.019,pe,R),t(Ye-Pe,.038,.089,f,(Pe+Ye)/2,Rs-.019,pe,R);for(let vt=Pe+.02;vt<Ye;vt+=.406)vt>qe-.04&&vt<St+.04||t(.038,Rs-Vt-.076,.089,f,vt,(Vt+Rs)/2,pe,R);[qe-.019,St+.019].forEach(vt=>t(.038,Rs-Vt-.076,.089,f,vt,(Vt+Rs)/2,pe,R)),[qe+.019,St-.019].forEach(vt=>t(.038,2.07,.089,f,vt,Vt+1.035,pe,R)),t(St-qe,.18,.089,f,(qe+St)/2,Vt+2.16,pe,R),H.plane("suite",.15,R,qe-.019,-1.2,pe+.046),[-.5,.5].forEach(vt=>t(1.1,.04,.08,f,-2.7,Vt+.02,1+vt*1.8,R));for(let vt=0;vt<4;vt++)t(1.22,.0127,2.44,u,-2.7+vt%2*.02,Vt+.047+vt*.0135,1+vt%3*.015,R,{rot:[0,(vt-1.5)*.012,0]});let lt=-4.35,_t=1.5;t(.62,.88,.92,S,lt,Vt+.5,_t,R,{r:.02}),t(.66,.04,.96,S,lt,Vt+.95,_t,R,{r:.01}),[-.3,.3].forEach(vt=>n(.05,.04,A,lt+.2,Vt+.05,_t+vt,R,{axis:"x",seg:12})),[[0,.1,.4,.4],[-.1,-.15,-.3,.6],[.12,-.25,.2,-.5]].forEach(([vt,zt,Ht,Mn])=>t(.4,.0127,.5,u,lt+vt,Vt+.95,_t+zt,R,{rot:[Ht,Mn,.2]})),t(.3,.09,.6,y,lt-.05,Vt+.98,_t-.1,R,{rot:[.3,.2,-.25]}),H.plane("bin",.2,R,lt+.312,Vt+.75,_t).rotation.y=Math.PI/2;for(let vt=0;vt<7;vt++)t(.05+vt%3*.04,.0127,.04+vt%2*.05,u,ls+.12+vt%3*.09,Vt+.007,-1.3+vt*.3,R,{rot:[0,vt*.7,0],cast:!1})}W(h),rt();let Ne={install:o(an,-1.65,Ui+.02),maintain:o(an+.1,-2.56,Ui+.03),upgrade:o(ls+.03,-1.3,-2.05),hpump:o(an+.1,os+.22,xn+.4),replace:o(le,ge+.05,Le+.11),remove:o(-2.1,-1.9,-2.6),demo:o(ls-.04,-1.5,-.6)},Re={time:19.4,cut:0,ghost:0,ground:1,lift:0,orbit:.012},U=[{...Re,radius:14,theta:.2,phi:.9,fx:-2.6,ty:-1.8,fz:-2.2,lift:3,dof:0,orbit:.02,narrow:{radius:12}},{...Re,radius:3.5,theta:.5,phi:1.36,fx:-2.8,ty:-1.95,fz:-2.2,dof:1,narrow:{fx:-3.15}},{...Re,radius:4.4,theta:1,phi:1.56,fx:-3.7,ty:-1.15,fz:-2.25,dof:.9},{...Re,radius:4.8,theta:-.1,phi:1.36,fx:-1.85,ty:-1.8,fz:-3.2,dof:1},{...Re,radius:3.8,theta:-.55,phi:1.36,fx:-2,ty:-1.85,fz:-1.3,dof:.8,narrow:{fx:-2.35,fz:-1.1}},{...Re,radius:4.4,theta:.7,phi:1.3,fx:-3.4,ty:-1.95,fz:-.1,dof:.7,narrow:{fx:-3.9,ty:-1.55,fz:-.6}}],be=-1,ce=0,et=0,ot=0,Ct=0,Lt=0,Wt=0,tn=o(-2,Vt+.12,.35),Bn=Ve.distanceTo(tn),pn=o(0,0,0);return{name:"cycle",group:l,anchors:Ne,shots:U,hides:R=>[...R.sys.hvac?R.sys.hvac.meshes:[],...R.sys["water-heaters"]?R.sys["water-heaters"].meshes:[]],light(R){return R===0?{pos:[-4,2,0],at:[-2.8,-2.4,-2.4],power:1,fill:.3}:R===1?{pos:[-1.7,-.5,-.7],at:[-3.3,-2.3,-2.4],power:1,fill:.35}:R===2?{pos:[-1.6,-.45,-1.1],at:[-3.9,-1.4,-2.2],power:1,fill:.35}:R===3?{pos:[-2.5,-.45,-1],at:[-1.9,-1.9,-3.4],power:1,fill:.35}:R===4?{pos:[-3.6,-.45,.2],at:[-2,-2.2,-1.4],power:1,fill:.35}:{pos:[-1.5,-.5,1.6],at:[-4.2,-1.8,-.6],power:1,fill:.35}},update({step:R,q:pe,t:Pe,dt:Ye,snap:qe,reduce:St}){let lt=qe?1:1-Math.exp(-Ye*4);pe=Pt(pe||0,0,1);let _t=R===1?Math.round(1+11*pe):uy[R]??25;_t!==be&&(be=_t,H.set("cal",void 0,void 0,{year:_t,verb:hy[R]||""}),H.set("svc",void 0,void 0,{year:_t})),_.emissiveIntensity=St?1.4:1.3+.3*Math.sin(Pe*13.1)+.2*Math.sin(Pe*7.7+1.3),T.emissiveIntensity=St?1.8:Math.sin(Pe*2.4)>-.2?2:.3;let vt=R===1?pe:R>1?1:0;ce=qe?vt:$e(ce,vt,1-Math.exp(-Ye*6));let zt=Et(.06,.28,ce),Ht=Et(.3,.46,ce),Mn=Et(.5,.86,ce),bi=Et(.38,.48,ce);Oe.visible=R<=1,Oe.position.lerpVectors(je,q,zt).lerp(gt,Ht),Oe.rotation.set(-1.72*Ht,0,.06*Ht),Je.visible=bi>.001,Je.position.lerpVectors(q,je,Mn),Je.scale.setScalar(Math.max(.001,bi)),Q(ne,R===0?1:0,lt),Q(dt,R===1?1:0,lt);let Fi=Q(O,R>=2?1:0,lt);fe.visible=Fi>.98,St||(fe.rotation.z=Pe*6);let Oi=R>3||R===3&&pe>.6;Q(xt,Oi?0:1,1),Q(D,Oi?1:0,1),Q(J,R===3?.15+.85*Et(0,.45,pe):0,lt),Q(B,R>3||R===3&&pe>.45?1:0,lt),Q(Se,R<5?1:0,1),Q(re,R===5?1:0,lt),Wt=$e(Wt,Oi?1:0,lt),K.rotation.z=-Wt*Math.PI/2,Te.visible=R>=3;let Ti=R===4?pe:R>4?1:0;et=$e(et,Et(0,.25,Ti)*.42,lt);let Ji=ot;ot=$e(ot,Et(.25,1,Ti),lt),Lt+=(ot-Ji)*Bn,Ct=$e(Ct,R===4?1:0,lt),ke.visible=R<=4,ke.position.lerpVectors(Ve,tn,ot),ke.rotation.set(et,.08*ot,0),ve.visible=Ct>.02,ve.scale.setScalar(Math.max(.001,Et(0,1,Ct))),Ke.rotation.x=Lt/.12,pn.set(0,.95,-.36),ke.updateMatrix(),Ne.remove.copy(pn.applyMatrix4(ke.matrix))}}}function qp({M:i,H:e,Ug:t,Wd:n,tier:s,reduce:r,glowTex:a}){let o=Up({M:i,tier:s,reduce:r,glowTex:a,dotTex:dr("rgba(255,255,255,0.75)")}),c=new at;c.name="sets";let l=x=>x.traverse(w=>{w.userData.noPick=!0}),h=Fp({kit:o});c.add(h.group),l(h.group);let p={};Object.entries({panel:Op,attic:null,sewer:kp,radon:Xp,restore:null,cycle:Yp}).forEach(([x,w])=>{typeof w=="function"&&(p[x]=w)});let d={},u=new Zo(16769725,0,18,.5,.8,1);u.castShadow=s>=1,u.shadow.mapSize.set(s>=2?2048:1024,s>=2?2048:1024),u.shadow.bias=-6e-4,u.shadow.normalBias=.006,u.shadow.radius=3,u.shadow.camera.near=.15,u.shadow.camera.far=16;let f=new qi(9414888,0,9,2);c.add(u,u.target,f);let v=new N(2,-.3,-2.5),m=new N(2.8,-1.2,-3.9),g=0,M=1,S=null,y=[];function _(x){if(d[x]||!p[x])return d[x];let w=p[x]({kit:o,M:i,H:e,Ug:t,Wd:n,tier:s,reduce:r});return w.group.visible=!1,l(w.group),c.add(w.group),d[x]=w,w}function T(x,w,C,F,b){o.time.value=C,h.disc.rotation.y=C*1.4;let L=w.zoom&&p[w.zoom]?w.zoom:null;L&&_(L);let P=x.zk>.004?L||S:null;P!==S&&(S&&d[S]&&(d[S].group.visible=!1),y.forEach(V=>{V.visible=!0}),y=[],S=P,S&&(d[S].group.visible=!0,d[S].hides&&(y=(d[S].hides(e,t,n)||[]).filter(V=>V&&V.visible),y.forEach(V=>{V.visible=!1}))));let H=b?1:1-Math.exp(-F*3.2),Z=0;if(S){let V=d[S];V.update({step:w.zs|0,p:w.zp||0,q:w.zq||0,k:x.zk,t:C,dt:F,reduce:r,snap:b});let W=V.light?V.light(w.zs|0,w.zq||0):null;if(W){let G=g<.02?1:H;v.lerp(A.fromArray(W.pos),G),m.lerp(A.fromArray(W.at),G),Z=W.power*x.zk,M=$e(M,W.fill??1,H)}}g=$e(g,Z,H),u.position.copy(v),u.target.position.copy(m),u.intensity=10*g,u.visible=g>.01,f.position.copy(m).add(A.set(-1.2,.5,1.6)),f.intensity=1.4*g*M,f.visible=g>.01}let A=new N;return{root:c,kit:o,update:T,ensure:_,names:Object.keys(p),get shown(){return S},anchors(){return S?d[S].anchors:null},input(x,w){let C=_(x);C&&C.input&&C.input(w)},shots(x){let w=_(x);return w?w.shots||[]:null},get:x=>_(x),prebuild(){let x=Object.keys(p).find(w=>!d[w]);return x?(_(x),!0):!1},lampPower:()=>g}}function my(){let i=performance.now(),e=[],t=U=>e.push([U,Math.round(performance.now()-i)]),n=document.getElementById("stage"),s=document.documentElement,r=()=>window.dispatchEvent(new Event("hause:stage-ready")),a=()=>{s.classList.add("no-webgl"),r()};if(!n)return a();let o=window.matchMedia("(prefers-reduced-motion: reduce)").matches,c=ip(),l=navigator.hardwareConcurrency||4,h=typeof window.HAUSE_QUALITY=="number"?window.HAUSE_QUALITY:c?l>=6?1:0:l>=6?2:1;try{let U=document.createElement("canvas"),be=U.getContext("webgl2");if(!be)return a();let ce=be.getExtension("WEBGL_lose_context");ce&&ce.loseContext()}catch{return a()}let p;try{if(p=new Gu({canvas:n,antialias:h===0,powerPreference:"high-performance"}),!p.getContext())throw new Error("no gl")}catch{return a()}n.addEventListener("webglcontextlost",U=>{U.preventDefault(),Y=!1,s.classList.add("no-webgl")}),p.toneMapping=Lr,p.toneMappingExposure=1,p.shadowMap.enabled=!0,p.shadowMap.type=Qr;let d=new ts(new N(1,0,0),1e3);p.clippingPlanes=[d],rp(p.capabilities.getMaxAnisotropy()),ap(h);let u=new Xr;u.environmentIntensity=.6,u.fog=new Co(1317678,70,360);let f=new mi(30,1,.3,1400),v=.3;t("renderer");let m=_p(p,u);t("sky");let{M:g,T:M}=yp();t("materials+textures");let S=to(),y=xp(),_=wp({M:g,T:M,markTex:y,glowTex:S});u.add(_.house),t("house");let T=Cp({M:g,T:M,glowTex:S,markTex:y,tier:h,reduce:o});u.add(T.world),t("world");let A=Pp({house:_.house,reduce:o}),x=Dp({M:g,layers:_.layers,glowTex:S}),w=Lp({scene:u,M:g,tier:h,reduce:o});Object.values(_.layers).forEach(U=>{Np(U,_.edgeMat),Yd(U)}),Yd(T.props);let C=qp({M:g,H:_,Ug:w,Wd:T,tier:h,reduce:o,glowTex:S});_.house.add(C.root),t("systems+interior+underground+merge");let F=new Yo(10466518,1709842,.5),b=new qa(16769728,3);b.castShadow=!0,b.shadow.mapSize.set(h>=2?2048:1024,h>=2?2048:1024),Object.assign(b.shadow.camera,{left:-26,right:26,top:26,bottom:-26,near:5,far:240}),b.shadow.bias=-3e-4,b.shadow.normalBias=.04,b.shadow.radius=h>=2?2.5:1.5,b.target.position.set(0,3,0);let L=new qa(9085656,.6);L.position.copy(m.U.uMoonDir.value).multiplyScalar(60),u.add(F,b,b.target,L);let P={explode:0,radius:36,theta:.55,phi:1.36,ty:4.2,tx:-6,time:19.4,marks:0,ground:1,orbit:.04,visible:1,ghost:0,cut:0,lift:0,thermal:0,netE:0,netW:0,netA:0,netR:0,lensY:0,fx:0,fz:0,beacons:0,section:0,cutX:.45,season:0,snowfall:1,smoke:1,melt:0,icicles:0,aurora:0,zk:0,dof:0},H=Object.assign({level:null,focusSys:null,netFocus:null,ugFocus:null,interactive:!1,zoom:null,zs:0,zp:0,zq:0},P),Z=["explode","radius","phi","ty","tx","time","marks","ground","visible","ghost","cut","lift","thermal","netE","netW","netA","netR","lensY","fx","fz","beacons","section","cutX","season","snowfall","smoke","melt","icicles","aurora","zk","dof"],V=0,W=1,G=1,k=1,Y=!0,he=0,we=-9,Ie={set(U){Object.assign(H,U)},highlight(U){H.focusSys=U},selectLevel(U){H.level=U},levels:Tl.map(U=>U.key),onPick:null,onHoverLevel:null,onFrame:null,onThermal:null,roomsLit:0,get quality(){return h}};window.HAUSE_STAGE=Ie;let Xe=new it(14256718),rt=null;function Q(U){rt=U,Object.keys(_.sys).forEach(be=>_.sys[be].mats.forEach(ce=>{be===U?(ce.emissive.copy(Xe),ce.emissiveIntensity=.9):(ce.emissive.copy(ce.userData.baseEmissive),ce.emissiveIntensity=1)}))}let de=new Set;_.house.traverse(U=>{!U.isMesh||!U.material||(Array.isArray(U.material)?U.material:[U.material]).forEach(be=>{be.userData&&(be.userData.shell||be.userData.wall)&&de.add(be)})});let Ce="",xe=!1;_.edgeMat.visible=!1;function Ue(U,be){let ce=U.toFixed(3)+"|"+be.toFixed(3);if(ce===Ce)return;Ce=ce;let et=U>.01||be>.01;de.forEach(ot=>{let Ct=ot.userData.pane,Lt=ot.userData.shell?U*(Ct?.75:.9):0,Wt=ot.userData.wall?be*(Ct?.8:.9):0;et!==xe&&(ot.transparent=et||!!ot.userData.alwaysTransparent,ot.needsUpdate=!0),ot.opacity=1-Math.max(Lt,Wt),ot.depthWrite=Math.max(Lt,Wt)<.4}),xe=et,_.edgeMat.opacity=Math.max(U*.28,be*.16),_.edgeMat.visible=_.edgeMat.opacity>.01}let $=Ip({scene:u,M:g,skipParents:[...Object.values(A.groups),C.root],onChange:U=>{T.setThermal(U),p.toneMapping=U?ss:Lr,Ie.onThermal&&Ie.onThermal(U)}}),Be=new N;function te(U,be){return Be.copy(be),U.localToWorld(Be),Be.project(f),{x:(Be.x*.5+.5)*W,y:(-Be.y*.5+.5)*G,behind:Be.z>1}}let oe=(U,be,ce)=>new N(U,be,ce),K=Tl.map(U=>({obj:_.layers[U.key],offset:oe(Pn/2+1.4,{roof:7.8,upper:4.9,main:1.8,basement:-1.2,below:-2.8}[U.key],qt/2)}));Ie.projectLevels=()=>K.map(U=>te(U.obj,U.offset)),Ie.projectAnchors=()=>{let U={};Object.keys(_.ANCHORS).forEach(ce=>{U[ce]=te(_.house,_.ANCHORS[ce])}),Object.keys(w.ANCHORS).forEach(ce=>{U[ce]=te(_.house,w.ANCHORS[ce])});let be=C.anchors();return be&&Object.keys(be).forEach(ce=>{U["z."+ce]=te(_.house,be[ce])}),U},Ie.zoomSets=C.names,Ie.zoomShots=U=>C.shots(U),Ie.zoomInput=(U,be)=>C.input(U,be),Ie.prebuildZoom=()=>C.prebuild();let ne={x:0,y:0,nx:0,ny:0},ue=null,Ge=new Jo,Oe=[];_.house.traverse(U=>{!U.isMesh||U.isInstancedMesh||!U.visible||U.userData.noPick||(U.geometry.computeBoundingSphere(),U.geometry.boundingSphere.radius>.3&&Oe.push(U))});let Je=U=>{for(;U&&!U.userData.level;)U=U.parent;return U?U.userData.level:null};Ie.pickAt=(U,be)=>{Ge.setFromCamera({x:U/W*2-1,y:-(be/G)*2+1},f);let ce=Ge.intersectObjects(Oe,!1)[0];return ce?{level:Je(ce.object),sys:ce.object.userData.sys||null}:null},Ie.pickCount=()=>Oe.length,window.addEventListener("pointermove",U=>{ne.nx=U.clientX/W*2-1,ne.ny=U.clientY/G*2-1,ue&&(he=ue.theta0-(U.clientX-ue.x)*.006)},{passive:!0}),n.addEventListener("pointerdown",U=>{H.interactive&&(ue={x:U.clientX,theta0:he,t:performance.now()})}),window.addEventListener("pointerup",U=>{if(!ue)return;let be=Math.abs(U.clientX-ue.x)<6&&performance.now()-ue.t<400;if(ue=null,be&&H.interactive){Ge.setFromCamera({x:U.clientX/W*2-1,y:-(U.clientY/G)*2+1},f);let ce=Ge.intersectObjects(Oe,!1)[0];ce&&Ie.onPick&&Ie.onPick(Je(ce.object),ce.object.userData.sys||null)}}),n.addEventListener("pointermove",U=>{if(!H.interactive||ue)return;Ge.setFromCamera({x:U.clientX/W*2-1,y:-(U.clientY/G)*2+1},f);let be=Ge.intersectObjects(Oe,!1)[0],ce=be?Je(be.object):null;n.style.cursor=ce?"pointer":"grab",Ie.onHoverLevel&&Ie.onHoverLevel(ce)});let je=null;function q(){je&&je.dispose(),je=h>=1?Tp(p,u,f,h,Math.round(W*k),Math.round(G*k)):null}function gt(){W=window.innerWidth,G=window.innerHeight,k=Math.min(window.devicePixelRatio||1,h>=2?1.75:h===1?1.5:1.25),p.setPixelRatio(k),p.setSize(W,G,!1),f.aspect=W/G,f.fov=W<700?44:30,f.updateProjectionMatrix(),je&&je.setSize(Math.round(W*k),Math.round(G*k))}window.addEventListener("resize",gt),gt(),q();let dt=new N;function O(U,be){let ce=.5-.5*Math.cos(be*Math.PI*2),et=$e(7.5,5,ce),ot=$e(18.3,21.9,ce),Ct=$e(24,62,ce),Lt=Math.PI*(U-et)/(ot-et),Wt=Ct*Math.sin(Lt),tn=Wt*Math.PI/180;return dt.set(-Math.sin(Lt)*Math.cos(tn),Math.sin(tn),Math.cos(Lt)*Math.cos(tn)).normalize(),Wt}let E=[[0,[.62,.6,.55]],[.16,[.7,.7,.55]],[.3,[.8,1,.62]],[.5,[.74,.95,.55]],[.68,[1.05,.88,.5]],[.82,[1,.72,.45]],[1,[.62,.6,.55]]];function j(U,be){let ce=0;for(;ce<E.length-2&&E[ce+1][0]<=U;)ce++;let[et,ot]=E[ce],[Ct,Lt]=E[ce+1],Wt=(U-et)/(Ct-et);be.setRGB($e(ot[0],Lt[0],Wt),$e(ot[1],Lt[1],Wt),$e(ot[2],Lt[2],Wt))}let se=new N,fe=new N,Ve=new N,ke=new N,Te=new N,ve={ug:0,section:0,cutX:.45,ground:1,ghost:0,cut:0,snow:1,roofSnow:1,snowfall:1,rain:0,leaves:0,smoke:1,melt:0,icicles:0,grow:0,leafTint:new it(.3,.5,.15),explode:0,lift:0,zk:0},Ke=[[0,[.3,.3,.3]],[.22,[.62,.8,.28]],[.36,[.4,.62,.2]],[.55,[.3,.5,.15]],[.7,[.95,.7,.18]],[.82,[.9,.35,.1]],[1,[.5,.2,.08]]];function xt(U,be){let ce=0;for(;ce<Ke.length-2&&Ke[ce+1][0]<=U;)ce++;let[et,ot]=Ke[ce],[Ct,Lt]=Ke[ce+1],Wt=(U-et)/(Ct-et);be.setRGB($e(ot[0],Lt[0],Wt),$e(ot[1],Lt[1],Wt),$e(ot[2],Lt[2],Wt))}let D=new it(16777215),J=new it,le=0,ge=30;function Le(U,be){V+=U;let ce=be?1:1-Math.exp(-U*(o?30:4.2));Z.forEach(lt=>{P[lt]=$e(P[lt],H[lt],ce)}),P.theta=$e(P.theta,H.theta+(o?0:Math.sin(V*.08)*H.orbit)+he,ce),Tl.forEach(lt=>{let _t=_.layers[lt.key],vt=lt.key==="roof"?18*Pt(P.lift,0,1):lt.key==="upper"?12*Pt(P.lift-1,0,1):lt.key==="main"?9*Pt(P.lift-2,0,1):0;_t.position.y=$e(_t.position.y,lt.dy*P.explode+vt+(H.level===lt.key?.9:0),ce)});let et=(P.season%1+1)%1,ot=Math.max(1-Et(.1,.3,et),Et(.84,1,et)),Ct=Math.max(1-Et(.06,.22,et),Et(.88,1,et));ve.ug=0,ve.beacons=P.beacons,ve.section=P.section,ve.cutX=P.cutX,ve.ground=P.ground,ve.ghost=P.ghost,ve.cut=P.cut,ve.lift=P.lift,ve.zk=P.zk,ve.snow=ot,ve.roofSnow=Ct,ve.explode=P.explode,ve.grow=Et(.2,.34,et)*(1-Et(.78,.93,et)),xt(et,ve.leafTint),ve.rain=Et(.2,.24,et)*(1-Et(.3,.34,et))*(o?0:1),ve.leaves=Et(.72,.78,et)*(1-Et(.9,.95,et))*(o?0:1),ve.melt=Math.max(P.melt,1-Ct),ve.icicles=Math.max(P.icicles,Et(.03,.1,et)*(1-Et(.17,.26,et))+Et(.9,.97,et)*.5),ve.snowfall=P.snowfall*(o?0:1)*(et<.05||et>.93?1:0),ve.smoke=P.smoke*(1-Et(.12,.3,et)+Et(.8,.95,et)),j(et,T.U.uTint.value);let Lt=O(P.time,et),Wt=Et(-5,10,Lt);m.update({elev:Lt,daylight:Wt,sunDir:dt,thermal:P.thermal,aurora:P.aurora*(1-Wt),cloud:$e(.38,.62,Et(0,1,Math.abs(Math.sin(et*Math.PI*2)))),snowy:ot>.5,voidK:Pt(1-P.ground,0,1)},V),m.follow(f.position),u.fog.color.copy(m.horizon);let tn=1-Et(0,28,Lt);b.position.copy(dt).multiplyScalar(110).add(b.target.position),b.color.setRGB(1,$e(.95,.62,tn),$e(.88,.4,tn)),b.intensity=3.6*Et(-4,6,Lt)*(1-P.thermal),F.color.copy(m.zenith).lerp(D,.4),F.groundColor.setRGB(.1,.09,.08).lerp(J.setRGB(.55,.6,.72),ot*.8*(.25+.75*Wt)),F.intensity=(.5+.35*Wt+.25*P.cut)*(1-P.thermal),L.intensity=.7*(1-Wt)*(1-P.thermal),u.environmentIntensity=.5+.4*Wt+.1*P.cut,p.toneMappingExposure=$.on?1:$e(1.2,.95,Wt),(be||V-we>.4)&&(m.refreshEnv(be),we=V),Ue(P.ghost*(1-Pt(P.explode*4,0,1)),P.cut),x.update(1-Wt,P.cut);let Bn=_.update(ve,ce,V,Wt,be?100:U);Ie.roomsLit=Math.round(Pt(Bn,0,7)),_.extra.chimneyTop.getWorldPosition(ke),T.update(ve,V,U,Wt,se,ke,Pt(Bn/9,0,1));let pn=H.focusSys;Object.keys(_.sys).forEach(lt=>_.sys[lt].marks.forEach(_t=>{let vt=pn?lt===pn?1:P.marks*.35:P.marks;_t.material.opacity=$e(_t.material.opacity,vt,ce),_t.scale.setScalar(.95*(lt===pn?1+Math.sin(V*4)*.12:1)*(1+P.explode*.25))})),pn!==rt&&Q(pn),A.update(P,H.netFocus,V,U);let R=w.update(ve,H.ugFocus,V,U);d.constant=-R,$.set(H.thermal>.5),$.time.value=V,C.update(P,H,V,U,be),ne.x=$e(ne.x,ne.nx,ce*.6),ne.y=$e(ne.y,ne.ny,ce*.6);let pe=P.theta+ne.x*.08,Pe=Pt(P.phi+ne.y*.04,.35-.27*P.zk,1.5+1.2*P.zk),Ye=W<700,qe=Pt(P.radius*.012,.02,.3);Math.abs(qe-v)>v*.02&&(v=qe,f.near=qe,f.updateProjectionMatrix()),se.set(P.fx,P.ty+(Ye?-1.2*Pt(P.radius/30,0,1):0),P.fz),fe.set(Math.sin(Pe)*Math.sin(pe),Math.cos(Pe),Math.sin(Pe)*Math.cos(pe)).multiplyScalar(P.radius*(Ye?1.25:1)).add(se),f.position.copy(fe),f.lookAt(se),f.updateMatrixWorld(),Ve.setFromMatrixColumn(f.matrixWorld,0),f.position.addScaledVector(Ve,Ye?0:P.tx),f.updateMatrixWorld(),Te.copy(se).applyMatrix4(f.matrixWorldInverse);let St=Math.max(.001,Te.length());ge=St,T.sight.value.set(Te.x/St,Te.y/St,Te.z/St,St),Math.abs(P.lensY-le)>1e-4&&(le=P.lensY,Math.abs(le)<1e-4?f.clearViewOffset():f.setViewOffset(W,G,0,-le*G,W,G)),n.style.opacity=P.visible.toFixed(3)}let B={n:0,sum:0,last:0},Se=performance.now();function re(U){if(je){let be=je.gtao,ce=P.ghost>.05||P.cut>.05||$.on||P.explode>.05;be&&(be.enabled=!ce),je.bloom&&(je.bloom.strength=$.on?.9:(.3+.55*(1-Pt(dt.y*4,0,1)))*(1-.45*P.zk)),je.grade.uniforms.uSat.value=$.on?1:1.05,je.setDof($.on?0:P.dof,ge,f.near,f.far),je.render(U,V)}else p.render(u,f)}function Ne(U){let be=U-B.last;if(B.last=U,!(be>250||be<=0)&&(B.n++,B.n>40&&(B.sum+=be),B.n===130)){let ce=B.sum/90;ce>26&&h>1&&typeof window.HAUSE_QUALITY!="number"?(h--,q(),gt(),b.shadow.mapSize.set(1024,1024),b.shadow.map&&b.shadow.map.dispose(),b.shadow.map=null):ce>34&&h===1&&k>1.01&&typeof window.HAUSE_QUALITY!="number"&&(k=1,p.setPixelRatio(1),p.setSize(W,G,!1),je&&je.setSize(W,G)),B={n:0,sum:0,last:U}}}function Re(U){if(!Y)return;let be=Math.min((U-Se)/1e3,.05);Se=U,Le(be,!1),re(be),Ne(U),Ie.onFrame&&Ie.onFrame(),requestAnimationFrame(Re)}Ie.pause=()=>{Y=!1},Ie.resume=()=>{Y||(Y=!0,Se=performance.now(),B.last=0,requestAnimationFrame(Re))},Ie.settle=()=>{Le(.016,!0),Le(.016,!0),re(.016),Ie.onFrame&&Ie.onFrame()},window.HAUSE_DEBUG&&(Ie.debug={scene:u,camera:f,renderer:p,S:P,target:H,H:_,Wd:T,sky:m,sun:b,hemi:F,moon:L,Sets:C,get post(){return je}}),Ie.info=()=>({tier:h,calls:p.info.render.calls,triangles:p.info.render.triangles,pixelRatio:k,buildMs:Ie.buildMs}),t("pre-first-render"),Ie.settle(),t("first-render"),Ie.laps=e,requestAnimationFrame(U=>{Se=U,requestAnimationFrame(Re)}),Ie.buildMs=Math.round(performance.now()-i),s.classList.add("has-webgl"),r()}my();})();
