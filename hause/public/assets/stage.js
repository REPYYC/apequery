/* HAUSE 3D stage. Built from hause/src/stage with esbuild + three.js. Do not edit by hand. */
(()=>{var ed=0,cu=1,td=2;var ws=1,nd=2,mr=3,as=0,Mn=1,dn=2,tn=0,os=1,Nt=2,uu=3,hu=4,dl=5;var jn=100,id=101,sd=102,rd=103,ad=104,Ts=200,od=201,ld=202,cd=203,du=204,fu=205,xa=206,ud=207,va=208,hd=209,dd=210,fd=211,pd=212,md=213,gd=214,Io=0,Do=1,Lo=2,js=3,Uo=4,No=5,Fo=6,Oo=7,pu=0,xd=1,vd=2,Yn=0,_a=1,ya=2,Ma=3,ls=4,Sa=5,Ea=6,ba=7;var mu=300,cs=301,As=302,fl=303,pl=304,wa=306,cn=1e3,Si=1001,Bo=1002,en=1003,_d=1004;var Ta=1005;var rn=1006,ml=1007;var Ci=1008;var fn=1009,gu=1010,xu=1011,gr=1012,gl=1013,pi=1014,ei=1015,Qt=1016,xl=1017,vl=1018,us=1020,vu=35902,_u=35899,yu=1021,Mu=1022,En=1023,Ei=1026,Pi=1027,_l=1028,yl=1029,hs=1030,Ml=1031;var Sl=1033,Aa=33776,Ra=33777,Ca=33778,Pa=33779,El=35840,bl=35841,wl=35842,Tl=35843,Al=36196,Rl=37492,Cl=37496,Pl=37488,Il=37489,Ia=37490,Dl=37491,Ll=37808,Ul=37809,Nl=37810,Fl=37811,Ol=37812,Bl=37813,Hl=37814,zl=37815,Gl=37816,Vl=37817,kl=37818,Wl=37819,Xl=37820,ql=37821,Yl=36492,Zl=36494,Jl=36495,$l=36283,Kl=36284,Da=36285,Ql=36286;var Gr=2300,Ho=2301,Ro=2302,Jc=2303,$c=2400,Kc=2401,Qc=2402;var yd=3200;var La=0,Md=1,mi="",Ut="srgb",Vr="srgb-linear",kr="linear",Lt="srgb";var Co=7680;var Sd=519,Ed=512,bd=513,wd=514,jl=515,Td=516,Ad=517,ec=518,Rd=519,Su=35044;var Eu="300 es",ui=2e3,er=2001;function jf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ep(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Wr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Cd(){let i=Wr("canvas");return i.style.display="block",i}var mh={},tr=null;function Xr(...i){let e="THREE."+i.shift();tr?tr("log",e,...i):console.log(e,...i)}function Pd(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ut(...i){i=Pd(i);let e="THREE."+i.shift();if(tr)tr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function dt(...i){i=Pd(i);let e="THREE."+i.shift();if(tr)tr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function vs(...i){let e=i.join(" ");e in mh||(mh[e]=!0,ut(...i))}function Id(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Dd={[Io]:Do,[Lo]:Fo,[Uo]:Oo,[js]:No,[Do]:Io,[Fo]:Lo,[Oo]:Uo,[No]:js},bi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Po=Math.PI/180,qr=180/Math.PI;function ki(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(bn[i&255]+bn[i>>8&255]+bn[i>>16&255]+bn[i>>24&255]+"-"+bn[e&255]+bn[e>>8&255]+"-"+bn[e>>16&15|64]+bn[e>>24&255]+"-"+bn[t&63|128]+bn[t>>8&255]+"-"+bn[t>>16&255]+bn[t>>24&255]+bn[n&255]+bn[n>>8&255]+bn[n>>16&255]+bn[n>>24&255]).toLowerCase()}function At(i,e,t){return Math.max(e,Math.min(t,i))}function tp(i,e){return(i%e+e)%e}function Mc(i,e,t){return(1-t)*i+t*e}function yi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Gt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Cu=class Cu{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=At(this.x,e.x,t.x),this.y=At(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=At(this.x,e,t),this.y=At(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(At(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(At(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Cu.prototype.isVector2=!0;var Ae=Cu,$t=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],p=n[s+3],d=r[a+0],u=r[a+1],f=r[a+2],_=r[a+3];if(p!==_||c!==d||l!==u||h!==f){let g=c*d+l*u+h*f+p*_;g<0&&(d=-d,u=-u,f=-f,_=-_,g=-g);let m=1-o;if(g<.9995){let E=Math.acos(g),w=Math.sin(E);m=Math.sin(m*E)/w,o=Math.sin(o*E)/w,c=c*m+d*o,l=l*m+u*o,h=h*m+f*o,p=p*m+_*o}else{c=c*m+d*o,l=l*m+u*o,h=h*m+f*o,p=p*m+_*o;let E=1/Math.sqrt(c*c+l*l+h*h+p*p);c*=E,l*=E,h*=E,p*=E}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],p=r[a],d=r[a+1],u=r[a+2],f=r[a+3];return e[t]=o*f+h*p+c*u-l*d,e[t+1]=c*f+h*d+l*p-o*u,e[t+2]=l*f+h*u+o*d-c*p,e[t+3]=h*f-o*p-c*d-l*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),p=o(r/2),d=c(n/2),u=c(s/2),f=c(r/2);switch(a){case"XYZ":this._x=d*h*p+l*u*f,this._y=l*u*p-d*h*f,this._z=l*h*f+d*u*p,this._w=l*h*p-d*u*f;break;case"YXZ":this._x=d*h*p+l*u*f,this._y=l*u*p-d*h*f,this._z=l*h*f-d*u*p,this._w=l*h*p+d*u*f;break;case"ZXY":this._x=d*h*p-l*u*f,this._y=l*u*p+d*h*f,this._z=l*h*f+d*u*p,this._w=l*h*p-d*u*f;break;case"ZYX":this._x=d*h*p-l*u*f,this._y=l*u*p+d*h*f,this._z=l*h*f-d*u*p,this._w=l*h*p+d*u*f;break;case"YZX":this._x=d*h*p+l*u*f,this._y=l*u*p+d*h*f,this._z=l*h*f-d*u*p,this._w=l*h*p-d*u*f;break;case"XZY":this._x=d*h*p-l*u*f,this._y=l*u*p-d*h*f,this._z=l*h*f+d*u*p,this._w=l*h*p+d*u*f;break;default:ut("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],p=t[10],d=n+o+p;if(d>0){let u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(h-c)*u,this._y=(r-l)*u,this._z=(a-s)*u}else if(n>o&&n>p){let u=2*Math.sqrt(1+n-o-p);this._w=(h-c)/u,this._x=.25*u,this._y=(s+a)/u,this._z=(r+l)/u}else if(o>p){let u=2*Math.sqrt(1+o-n-p);this._w=(r-l)/u,this._x=(s+a)/u,this._y=.25*u,this._z=(c+h)/u}else{let u=2*Math.sqrt(1+p-n-o);this._w=(a-s)/u,this._x=(r+l)/u,this._y=(c+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(At(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Pu=class Pu{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(gh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(gh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),h=2*(o*t-r*s),p=2*(r*n-a*t);return this.x=t+c*l+a*p-o*h,this.y=n+c*h+o*l-r*p,this.z=s+c*p+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=At(this.x,e.x,t.x),this.y=At(this.y,e.y,t.y),this.z=At(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=At(this.x,e,t),this.y=At(this.y,e,t),this.z=At(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(At(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Sc.copy(this).projectOnVector(e),this.sub(Sc)}reflect(e){return this.sub(Sc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(At(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Pu.prototype.isVector3=!0;var D=Pu,Sc=new D,gh=new $t,Iu=class Iu{constructor(e,t,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],p=n[7],d=n[2],u=n[5],f=n[8],_=s[0],g=s[3],m=s[6],E=s[1],w=s[4],v=s[7],y=s[2],T=s[5],P=s[8];return r[0]=a*_+o*E+c*y,r[3]=a*g+o*w+c*T,r[6]=a*m+o*v+c*P,r[1]=l*_+h*E+p*y,r[4]=l*g+h*w+p*T,r[7]=l*m+h*v+p*P,r[2]=d*_+u*E+f*y,r[5]=d*g+u*w+f*T,r[8]=d*m+u*v+f*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],p=h*a-o*l,d=o*c-h*r,u=l*r-a*c,f=t*p+n*d+s*u;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/f;return e[0]=p*_,e[1]=(s*l-h*n)*_,e[2]=(o*n-s*a)*_,e[3]=d*_,e[4]=(h*t-s*c)*_,e[5]=(s*r-o*t)*_,e[6]=u*_,e[7]=(n*c-l*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return vs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ec.makeScale(e,t)),this}rotate(e){return vs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ec.makeRotation(-e)),this}translate(e,t){return vs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ec.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Iu.prototype.isMatrix3=!0;var xt=Iu,Ec=new xt,xh=new xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vh=new xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function np(){let i={enabled:!0,workingColorSpace:Vr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Lt&&(s.r=Wi(s.r),s.g=Wi(s.g),s.b=Wi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Lt&&(s.r=Qs(s.r),s.g=Qs(s.g),s.b=Qs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===mi?kr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return vs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return vs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Vr]:{primaries:e,whitePoint:n,transfer:kr,toXYZ:xh,fromXYZ:vh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ut},outputColorSpaceConfig:{drawingBufferColorSpace:Ut}},[Ut]:{primaries:e,whitePoint:n,transfer:Lt,toXYZ:xh,fromXYZ:vh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ut}}}),i}var Tt=np();function Wi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Qs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Us,zo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Us===void 0&&(Us=Wr("canvas")),Us.width=e.width,Us.height=e.height;let s=Us.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Us}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Wr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Wi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Wi(t[n]/255)*255):t[n]=Wi(t[n]);return{data:t,width:e.width,height:e.height}}else return ut("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},ip=0,nr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ip++}),this.uuid=ki(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(bc(s[a].image)):r.push(bc(s[a]))}else r=bc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function bc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?zo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ut("Texture: Unable to serialize Texture."),{})}var sp=0,wc=new D,In=class i extends bi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Si,s=Si,r=rn,a=Ci,o=En,c=fn,l=i.DEFAULT_ANISOTROPY,h=mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sp++}),this.uuid=ki(),this.name="",this.source=new nr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(wc).x}get height(){return this.source.getSize(wc).y}get depth(){return this.source.getSize(wc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){ut(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){ut(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==mu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case cn:e.x=e.x-Math.floor(e.x);break;case Si:e.x=e.x<0?0:1;break;case Bo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case cn:e.y=e.y-Math.floor(e.y);break;case Si:e.y=e.y<0?0:1;break;case Bo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=mu;In.DEFAULT_ANISOTROPY=1;var Du=class Du{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],p=c[8],d=c[1],u=c[5],f=c[9],_=c[2],g=c[6],m=c[10];if(Math.abs(h-d)<.01&&Math.abs(p-_)<.01&&Math.abs(f-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(p+_)<.1&&Math.abs(f+g)<.1&&Math.abs(l+u+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(l+1)/2,v=(u+1)/2,y=(m+1)/2,T=(h+d)/4,P=(p+_)/4,x=(f+g)/4;return w>v&&w>y?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=T/n,r=P/n):v>y?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=T/s,r=x/s):y<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(y),n=P/r,s=x/r),this.set(n,s,r,t),this}let E=Math.sqrt((g-f)*(g-f)+(p-_)*(p-_)+(d-h)*(d-h));return Math.abs(E)<.001&&(E=1),this.x=(g-f)/E,this.y=(p-_)/E,this.z=(d-h)/E,this.w=Math.acos((l+u+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=At(this.x,e.x,t.x),this.y=At(this.y,e.y,t.y),this.z=At(this.z,e.z,t.z),this.w=At(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=At(this.x,e,t),this.y=At(this.y,e,t),this.z=At(this.z,e,t),this.w=At(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(At(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Du.prototype.isVector4=!0;var Wt=Du,Go=class extends bi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Wt(0,0,e,t),this.scissorTest=!1,this.viewport=new Wt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new In(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:rn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new nr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xt=class extends Go{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Yr=class extends In{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Vo=class extends In{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var hl=class hl{constructor(e,t,n,s,r,a,o,c,l,h,p,d,u,f,_,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,h,p,d,u,f,_,g)}set(e,t,n,s,r,a,o,c,l,h,p,d,u,f,_,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=c,m[2]=l,m[6]=h,m[10]=p,m[14]=d,m[3]=u,m[7]=f,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new hl().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Ns.setFromMatrixColumn(e,0).length(),r=1/Ns.setFromMatrixColumn(e,1).length(),a=1/Ns.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),p=Math.sin(r);if(e.order==="XYZ"){let d=a*h,u=a*p,f=o*h,_=o*p;t[0]=c*h,t[4]=-c*p,t[8]=l,t[1]=u+f*l,t[5]=d-_*l,t[9]=-o*c,t[2]=_-d*l,t[6]=f+u*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*h,u=c*p,f=l*h,_=l*p;t[0]=d+_*o,t[4]=f*o-u,t[8]=a*l,t[1]=a*p,t[5]=a*h,t[9]=-o,t[2]=u*o-f,t[6]=_+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*h,u=c*p,f=l*h,_=l*p;t[0]=d-_*o,t[4]=-a*p,t[8]=f+u*o,t[1]=u+f*o,t[5]=a*h,t[9]=_-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*h,u=a*p,f=o*h,_=o*p;t[0]=c*h,t[4]=f*l-u,t[8]=d*l+_,t[1]=c*p,t[5]=_*l+d,t[9]=u*l-f,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,u=a*l,f=o*c,_=o*l;t[0]=c*h,t[4]=_-d*p,t[8]=f*p+u,t[1]=p,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=u*p+f,t[10]=d-_*p}else if(e.order==="XZY"){let d=a*c,u=a*l,f=o*c,_=o*l;t[0]=c*h,t[4]=-p,t[8]=l*h,t[1]=d*p+_,t[5]=a*h,t[9]=u*p-f,t[2]=f*p-u,t[6]=o*h,t[10]=_*p+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(rp,e,ap)}lookAt(e,t,n){let s=this.elements;return Vn.subVectors(e,t),Vn.lengthSq()===0&&(Vn.z=1),Vn.normalize(),Ji.crossVectors(n,Vn),Ji.lengthSq()===0&&(Math.abs(n.z)===1?Vn.x+=1e-4:Vn.z+=1e-4,Vn.normalize(),Ji.crossVectors(n,Vn)),Ji.normalize(),Ja.crossVectors(Vn,Ji),s[0]=Ji.x,s[4]=Ja.x,s[8]=Vn.x,s[1]=Ji.y,s[5]=Ja.y,s[9]=Vn.y,s[2]=Ji.z,s[6]=Ja.z,s[10]=Vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],p=n[5],d=n[9],u=n[13],f=n[2],_=n[6],g=n[10],m=n[14],E=n[3],w=n[7],v=n[11],y=n[15],T=s[0],P=s[4],x=s[8],b=s[12],R=s[1],U=s[5],S=s[9],I=s[13],A=s[2],N=s[6],V=s[10],B=s[14],z=s[3],O=s[7],F=s[11],X=s[15];return r[0]=a*T+o*R+c*A+l*z,r[4]=a*P+o*U+c*N+l*O,r[8]=a*x+o*S+c*V+l*F,r[12]=a*b+o*I+c*B+l*X,r[1]=h*T+p*R+d*A+u*z,r[5]=h*P+p*U+d*N+u*O,r[9]=h*x+p*S+d*V+u*F,r[13]=h*b+p*I+d*B+u*X,r[2]=f*T+_*R+g*A+m*z,r[6]=f*P+_*U+g*N+m*O,r[10]=f*x+_*S+g*V+m*F,r[14]=f*b+_*I+g*B+m*X,r[3]=E*T+w*R+v*A+y*z,r[7]=E*P+w*U+v*N+y*O,r[11]=E*x+w*S+v*V+y*F,r[15]=E*b+w*I+v*B+y*X,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],p=e[6],d=e[10],u=e[14],f=e[3],_=e[7],g=e[11],m=e[15],E=c*u-l*d,w=o*u-l*p,v=o*d-c*p,y=a*u-l*h,T=a*d-c*h,P=a*p-o*h;return t*(_*E-g*w+m*v)-n*(f*E-g*y+m*T)+s*(f*w-_*y+m*P)-r*(f*v-_*T+g*P)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],h=e[10];return t*(a*h-o*l)-n*(r*h-o*c)+s*(r*l-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],p=e[9],d=e[10],u=e[11],f=e[12],_=e[13],g=e[14],m=e[15],E=t*o-n*a,w=t*c-s*a,v=t*l-r*a,y=n*c-s*o,T=n*l-r*o,P=s*l-r*c,x=h*_-p*f,b=h*g-d*f,R=h*m-u*f,U=p*g-d*_,S=p*m-u*_,I=d*m-u*g,A=E*I-w*S+v*U+y*R-T*b+P*x;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let N=1/A;return e[0]=(o*I-c*S+l*U)*N,e[1]=(s*S-n*I-r*U)*N,e[2]=(_*P-g*T+m*y)*N,e[3]=(d*T-p*P-u*y)*N,e[4]=(c*R-a*I-l*b)*N,e[5]=(t*I-s*R+r*b)*N,e[6]=(g*v-f*P-m*w)*N,e[7]=(h*P-d*v+u*w)*N,e[8]=(a*S-o*R+l*x)*N,e[9]=(n*R-t*S-r*x)*N,e[10]=(f*T-_*v+m*E)*N,e[11]=(p*v-h*T-u*E)*N,e[12]=(o*b-a*U-c*x)*N,e[13]=(t*U-n*b+s*x)*N,e[14]=(_*w-f*y-g*E)*N,e[15]=(h*y-p*w+d*E)*N,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,p=o+o,d=r*l,u=r*h,f=r*p,_=a*h,g=a*p,m=o*p,E=c*l,w=c*h,v=c*p,y=n.x,T=n.y,P=n.z;return s[0]=(1-(_+m))*y,s[1]=(u+v)*y,s[2]=(f-w)*y,s[3]=0,s[4]=(u-v)*T,s[5]=(1-(d+m))*T,s[6]=(g+E)*T,s[7]=0,s[8]=(f+w)*P,s[9]=(g-E)*P,s[10]=(1-(d+_))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Ns.set(s[0],s[1],s[2]).length(),o=Ns.set(s[4],s[5],s[6]).length(),c=Ns.set(s[8],s[9],s[10]).length();r<0&&(a=-a),oi.copy(this);let l=1/a,h=1/o,p=1/c;return oi.elements[0]*=l,oi.elements[1]*=l,oi.elements[2]*=l,oi.elements[4]*=h,oi.elements[5]*=h,oi.elements[6]*=h,oi.elements[8]*=p,oi.elements[9]*=p,oi.elements[10]*=p,t.setFromRotationMatrix(oi),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,s,r,a,o=ui,c=!1){let l=this.elements,h=2*r/(t-e),p=2*r/(n-s),d=(t+e)/(t-e),u=(n+s)/(n-s),f,_;if(c)f=r/(a-r),_=a*r/(a-r);else if(o===ui)f=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===er)f=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=p,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=ui,c=!1){let l=this.elements,h=2/(t-e),p=2/(n-s),d=-(t+e)/(t-e),u=-(n+s)/(n-s),f,_;if(c)f=1/(a-r),_=a/(a-r);else if(o===ui)f=-2/(a-r),_=-(a+r)/(a-r);else if(o===er)f=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=p,l[9]=0,l[13]=u,l[2]=0,l[6]=0,l[10]=f,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};hl.prototype.isMatrix4=!0;var st=hl,Ns=new D,oi=new st,rp=new D(0,0,0),ap=new D(1,1,1),Ji=new D,Ja=new D,Vn=new D,_h=new st,yh=new $t,hi=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],p=s[2],d=s[6],u=s[10];switch(t){case"XYZ":this._y=Math.asin(At(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-At(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(At(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-p,u),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-At(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(d,u),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(At(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-At(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:ut("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return _h.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_h,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return yh.setFromEuler(this),this.setFromQuaternion(yh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};hi.DEFAULT_ORDER="XYZ";var ir=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},op=0,Mh=new D,Fs=new $t,Bi=new st,$a=new D,Rr=new D,lp=new D,cp=new $t,Sh=new D(1,0,0),Eh=new D(0,1,0),bh=new D(0,0,1),wh={type:"added"},up={type:"removed"},Os={type:"childadded",child:null},Tc={type:"childremoved",child:null},Kt=class i extends bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:op++}),this.uuid=ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new D,t=new hi,n=new $t,s=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new st},normalMatrix:{value:new xt}}),this.matrix=new st,this.matrixWorld=new st,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ir,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Fs.setFromAxisAngle(e,t),this.quaternion.multiply(Fs),this}rotateOnWorldAxis(e,t){return Fs.setFromAxisAngle(e,t),this.quaternion.premultiply(Fs),this}rotateX(e){return this.rotateOnAxis(Sh,e)}rotateY(e){return this.rotateOnAxis(Eh,e)}rotateZ(e){return this.rotateOnAxis(bh,e)}translateOnAxis(e,t){return Mh.copy(e).applyQuaternion(this.quaternion),this.position.add(Mh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Sh,e)}translateY(e){return this.translateOnAxis(Eh,e)}translateZ(e){return this.translateOnAxis(bh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?$a.copy(e):$a.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bi.lookAt(Rr,$a,this.up):Bi.lookAt($a,Rr,this.up),this.quaternion.setFromRotationMatrix(Bi),s&&(Bi.extractRotation(s.matrixWorld),Fs.setFromRotationMatrix(Bi),this.quaternion.premultiply(Fs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(dt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(wh),Os.child=e,this.dispatchEvent(Os),Os.child=null):dt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(up),Tc.child=e,this.dispatchEvent(Tc),Tc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(wh),Os.child=e,this.dispatchEvent(Os),Os.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,e,lp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,cp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let p=c[l];r(e.shapes,p)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),p=a(e.shapes),d=a(e.skeletons),u=a(e.animations),f=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),p.length>0&&(n.shapes=p),d.length>0&&(n.skeletons=d),u.length>0&&(n.animations=u),f.length>0&&(n.nodes=f)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Kt.DEFAULT_UP=new D(0,1,0);Kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var mt=class extends Kt{constructor(){super(),this.isGroup=!0,this.type="Group"}},hp={type:"move"},sr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let _ of e.hand.values()){let g=t.getJointPose(_,n),m=this._getHandJoint(l,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=l.joints["index-finger-tip"],p=l.joints["thumb-tip"],d=h.position.distanceTo(p.position),u=.02,f=.005;l.inputState.pinching&&d>u+f?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=u-f&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(hp)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new mt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Ld={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$i={h:0,s:0,l:0},Ka={h:0,s:0,l:0};function Ac(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var ze=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Tt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Tt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Tt.workingColorSpace){if(e=tp(e,1),t=At(t,0,1),n=At(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Ac(a,r,e+1/3),this.g=Ac(a,r,e),this.b=Ac(a,r,e-1/3)}return Tt.colorSpaceToWorking(this,s),this}setStyle(e,t=Ut){function n(r){r!==void 0&&parseFloat(r)<1&&ut("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:ut("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);ut("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ut){let n=Ld[e.toLowerCase()];return n!==void 0?this.setHex(n,t):ut("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wi(e.r),this.g=Wi(e.g),this.b=Wi(e.b),this}copyLinearToSRGB(e){return this.r=Qs(e.r),this.g=Qs(e.g),this.b=Qs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ut){return Tt.workingToColorSpace(wn.copy(this),e),Math.round(At(wn.r*255,0,255))*65536+Math.round(At(wn.g*255,0,255))*256+Math.round(At(wn.b*255,0,255))}getHexString(e=Ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Tt.workingColorSpace){Tt.workingToColorSpace(wn.copy(this),t);let n=wn.r,s=wn.g,r=wn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let p=a-o;switch(l=h<=.5?p/(a+o):p/(2-a-o),a){case n:c=(s-r)/p+(s<r?6:0);break;case s:c=(r-n)/p+2;break;case r:c=(n-s)/p+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Tt.workingColorSpace){return Tt.workingToColorSpace(wn.copy(this),t),e.r=wn.r,e.g=wn.g,e.b=wn.b,e}getStyle(e=Ut){Tt.workingToColorSpace(wn.copy(this),e);let t=wn.r,n=wn.g,s=wn.b;return e!==Ut?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL($i),this.setHSL($i.h+e,$i.s+t,$i.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL($i),e.getHSL(Ka);let n=Mc($i.h,Ka.h,t),s=Mc($i.s,Ka.s,t),r=Mc($i.l,Ka.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},wn=new ze;ze.NAMES=Ld;var Zr=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ze(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},_s=class extends Kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hi,this.environmentIntensity=1,this.environmentRotation=new hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},li=new D,Hi=new D,Rc=new D,zi=new D,Bs=new D,Hs=new D,Th=new D,Cc=new D,Pc=new D,Ic=new D,Dc=new Wt,Lc=new Wt,Uc=new Wt,Mi=class i{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),li.subVectors(e,t),s.cross(li);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){li.subVectors(s,t),Hi.subVectors(n,t),Rc.subVectors(e,t);let a=li.dot(li),o=li.dot(Hi),c=li.dot(Rc),l=Hi.dot(Hi),h=Hi.dot(Rc),p=a*l-o*o;if(p===0)return r.set(0,0,0),null;let d=1/p,u=(l*c-o*h)*d,f=(a*h-o*c)*d;return r.set(1-u-f,f,u)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,zi)===null?!1:zi.x>=0&&zi.y>=0&&zi.x+zi.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,zi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,zi.x),c.addScaledVector(a,zi.y),c.addScaledVector(o,zi.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return Dc.setScalar(0),Lc.setScalar(0),Uc.setScalar(0),Dc.fromBufferAttribute(e,t),Lc.fromBufferAttribute(e,n),Uc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Dc,r.x),a.addScaledVector(Lc,r.y),a.addScaledVector(Uc,r.z),a}static isFrontFacing(e,t,n,s){return li.subVectors(n,t),Hi.subVectors(e,t),li.cross(Hi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return li.subVectors(this.c,this.b),Hi.subVectors(this.a,this.b),li.cross(Hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Bs.subVectors(s,n),Hs.subVectors(r,n),Cc.subVectors(e,n);let c=Bs.dot(Cc),l=Hs.dot(Cc);if(c<=0&&l<=0)return t.copy(n);Pc.subVectors(e,s);let h=Bs.dot(Pc),p=Hs.dot(Pc);if(h>=0&&p<=h)return t.copy(s);let d=c*p-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(Bs,a);Ic.subVectors(e,r);let u=Bs.dot(Ic),f=Hs.dot(Ic);if(f>=0&&u<=f)return t.copy(r);let _=u*l-c*f;if(_<=0&&l>=0&&f<=0)return o=l/(l-f),t.copy(n).addScaledVector(Hs,o);let g=h*f-u*p;if(g<=0&&p-h>=0&&u-f>=0)return Th.subVectors(r,s),o=(p-h)/(p-h+(u-f)),t.copy(s).addScaledVector(Th,o);let m=1/(g+_+d);return a=_*m,o=d*m,t.copy(n).addScaledVector(Bs,a).addScaledVector(Hs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},wi=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ci.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ci.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ci.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ci):ci.fromBufferAttribute(r,a),ci.applyMatrix4(e.matrixWorld),this.expandByPoint(ci);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Qa.copy(n.boundingBox)),Qa.applyMatrix4(e.matrixWorld),this.union(Qa)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ci),ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Cr),ja.subVectors(this.max,Cr),zs.subVectors(e.a,Cr),Gs.subVectors(e.b,Cr),Vs.subVectors(e.c,Cr),Ki.subVectors(Gs,zs),Qi.subVectors(Vs,Gs),fs.subVectors(zs,Vs);let t=[0,-Ki.z,Ki.y,0,-Qi.z,Qi.y,0,-fs.z,fs.y,Ki.z,0,-Ki.x,Qi.z,0,-Qi.x,fs.z,0,-fs.x,-Ki.y,Ki.x,0,-Qi.y,Qi.x,0,-fs.y,fs.x,0];return!Nc(t,zs,Gs,Vs,ja)||(t=[1,0,0,0,1,0,0,0,1],!Nc(t,zs,Gs,Vs,ja))?!1:(eo.crossVectors(Ki,Qi),t=[eo.x,eo.y,eo.z],Nc(t,zs,Gs,Vs,ja))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Gi=[new D,new D,new D,new D,new D,new D,new D,new D],ci=new D,Qa=new wi,zs=new D,Gs=new D,Vs=new D,Ki=new D,Qi=new D,fs=new D,Cr=new D,ja=new D,eo=new D,ps=new D;function Nc(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ps.fromArray(i,r);let o=s.x*Math.abs(ps.x)+s.y*Math.abs(ps.y)+s.z*Math.abs(ps.z),c=e.dot(ps),l=t.dot(ps),h=n.dot(ps);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var sn=new D,to=new Ae,dp=0,gt=class extends bi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:dp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Su,this.updateRanges=[],this.gpuType=ei,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)to.fromBufferAttribute(this,t),to.applyMatrix3(e),this.setXY(t,to.x,to.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix3(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix4(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyNormalMatrix(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.transformDirection(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=yi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Gt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=yi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=yi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=yi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=yi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),n=Gt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),n=Gt(n,this.array),s=Gt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),n=Gt(n,this.array),s=Gt(s,this.array),r=Gt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Jr=class extends gt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var $r=class extends gt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var yt=class extends gt{constructor(e,t,n){super(new Float32Array(e),t,n)}},fp=new wi,Pr=new D,Fc=new D,Ti=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):fp.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Pr.subVectors(e,this.center);let t=Pr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Pr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Pr.copy(e.center).add(Fc)),this.expandByPoint(Pr.copy(e.center).sub(Fc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},pp=0,Jn=new st,Oc=new Kt,ks=new D,kn=new wi,Ir=new wi,xn=new D,Mt=class i extends bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pp++}),this.uuid=ki(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jf(e)?$r:Jr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new xt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Jn.makeRotationFromQuaternion(e),this.applyMatrix4(Jn),this}rotateX(e){return Jn.makeRotationX(e),this.applyMatrix4(Jn),this}rotateY(e){return Jn.makeRotationY(e),this.applyMatrix4(Jn),this}rotateZ(e){return Jn.makeRotationZ(e),this.applyMatrix4(Jn),this}translate(e,t,n){return Jn.makeTranslation(e,t,n),this.applyMatrix4(Jn),this}scale(e,t,n){return Jn.makeScale(e,t,n),this.applyMatrix4(Jn),this}lookAt(e){return Oc.lookAt(e),Oc.updateMatrix(),this.applyMatrix4(Oc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ks).negate(),this.translate(ks.x,ks.y,ks.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new yt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&ut("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){dt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];kn.setFromBufferAttribute(r),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,kn.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,kn.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(kn.min),this.boundingBox.expandByPoint(kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&dt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ti);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){dt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){let n=this.boundingSphere.center;if(kn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Ir.setFromBufferAttribute(o),this.morphTargetsRelative?(xn.addVectors(kn.min,Ir.min),kn.expandByPoint(xn),xn.addVectors(kn.max,Ir.max),kn.expandByPoint(xn)):(kn.expandByPoint(Ir.min),kn.expandByPoint(Ir.max))}kn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)xn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(xn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)xn.fromBufferAttribute(o,l),c&&(ks.fromBufferAttribute(e,l),xn.add(ks)),s=Math.max(s,n.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&dt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){dt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new gt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let x=0;x<n.count;x++)o[x]=new D,c[x]=new D;let l=new D,h=new D,p=new D,d=new Ae,u=new Ae,f=new Ae,_=new D,g=new D;function m(x,b,R){l.fromBufferAttribute(n,x),h.fromBufferAttribute(n,b),p.fromBufferAttribute(n,R),d.fromBufferAttribute(r,x),u.fromBufferAttribute(r,b),f.fromBufferAttribute(r,R),h.sub(l),p.sub(l),u.sub(d),f.sub(d);let U=1/(u.x*f.y-f.x*u.y);isFinite(U)&&(_.copy(h).multiplyScalar(f.y).addScaledVector(p,-u.y).multiplyScalar(U),g.copy(p).multiplyScalar(u.x).addScaledVector(h,-f.x).multiplyScalar(U),o[x].add(_),o[b].add(_),o[R].add(_),c[x].add(g),c[b].add(g),c[R].add(g))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let x=0,b=E.length;x<b;++x){let R=E[x],U=R.start,S=R.count;for(let I=U,A=U+S;I<A;I+=3)m(e.getX(I+0),e.getX(I+1),e.getX(I+2))}let w=new D,v=new D,y=new D,T=new D;function P(x){y.fromBufferAttribute(s,x),T.copy(y);let b=o[x];w.copy(b),w.sub(y.multiplyScalar(y.dot(b))).normalize(),v.crossVectors(T,b);let U=v.dot(c[x])<0?-1:1;a.setXYZW(x,w.x,w.y,w.z,U)}for(let x=0,b=E.length;x<b;++x){let R=E[x],U=R.start,S=R.count;for(let I=U,A=U+S;I<A;I+=3)P(e.getX(I+0)),P(e.getX(I+1)),P(e.getX(I+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new gt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,u=n.count;d<u;d++)n.setXYZ(d,0,0,0);let s=new D,r=new D,a=new D,o=new D,c=new D,l=new D,h=new D,p=new D;if(e)for(let d=0,u=e.count;d<u;d+=3){let f=e.getX(d+0),_=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,f),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,g),h.subVectors(a,r),p.subVectors(s,r),h.cross(p),o.fromBufferAttribute(n,f),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),o.add(h),c.add(h),l.add(h),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,u=t.count;d<u;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),p.subVectors(s,r),h.cross(p),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)xn.fromBufferAttribute(e,t),xn.normalize(),e.setXYZ(t,xn.x,xn.y,xn.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,p=o.normalized,d=new l.constructor(c.length*h),u=0,f=0;for(let _=0,g=c.length;_<g;_++){o.isInterleavedBufferAttribute?u=c[_]*o.data.stride+o.offset:u=c[_]*h;for(let m=0;m<h;m++)d[f++]=l[u++]}return new gt(d,h,p)}if(this.index===null)return ut("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,p=l.length;h<p;h++){let d=l[h],u=e(d,n);c.push(u)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let p=0,d=l.length;p<d;p++){let u=l[p];h.push(u.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],p=r[l];for(let d=0,u=p.length;d<u;d++)h.push(p[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let p=a[l];this.addGroup(p.start,p.count,p.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Kr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Su,this.updateRanges=[],this.version=0,this.uuid=ki()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ki()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ki()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},Pn=new D,rr=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Pn.fromBufferAttribute(this,t),Pn.applyMatrix4(e),this.setXYZ(t,Pn.x,Pn.y,Pn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Pn.fromBufferAttribute(this,t),Pn.applyNormalMatrix(e),this.setXYZ(t,Pn.x,Pn.y,Pn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Pn.fromBufferAttribute(this,t),Pn.transformDirection(e),this.setXYZ(t,Pn.x,Pn.y,Pn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=yi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Gt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Gt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=yi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=yi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=yi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=yi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Gt(t,this.array),n=Gt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Gt(t,this.array),n=Gt(n,this.array),s=Gt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Gt(t,this.array),n=Gt(n,this.array),s=Gt(s,this.array),r=Gt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Xr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new gt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Xr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Bc=new D,mp=new D,gp=new xt,Wn=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Bc.subVectors(n,t).cross(mp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Bc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||gp.getNormalMatrix(e),s=this.coplanarPoint(Bc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},xp=0,$n=class extends bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xp++}),this.uuid=ki(),this.name="",this.type="Material",this.blending=os,this.side=as,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=du,this.blendDst=fu,this.blendEquation=jn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Co,this.stencilZFail=Co,this.stencilZPass=Co,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){ut(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){ut(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ze().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Wn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ae().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ae().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},un=class extends $n{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ws,Dr=new D,Xs=new D,qs=new D,Ys=new Ae,Lr=new Ae,Ud=new st,no=new D,Ur=new D,io=new D,Ah=new Ae,Hc=new Ae,Rh=new Ae,_n=class extends Kt{constructor(e=new un){if(super(),this.isSprite=!0,this.type="Sprite",Ws===void 0){Ws=new Mt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Kr(t,5);Ws.setIndex([0,1,2,0,2,3]),Ws.setAttribute("position",new rr(n,3,0,!1)),Ws.setAttribute("uv",new rr(n,2,3,!1))}this.geometry=Ws,this.material=e,this.center=new Ae(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&dt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Xs.setFromMatrixScale(this.matrixWorld),Ud.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),qs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Xs.multiplyScalar(-qs.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;so(no.set(-.5,-.5,0),qs,a,Xs,s,r),so(Ur.set(.5,-.5,0),qs,a,Xs,s,r),so(io.set(.5,.5,0),qs,a,Xs,s,r),Ah.set(0,0),Hc.set(1,0),Rh.set(1,1);let o=e.ray.intersectTriangle(no,Ur,io,!1,Dr);if(o===null&&(so(Ur.set(-.5,.5,0),qs,a,Xs,s,r),Hc.set(0,1),o=e.ray.intersectTriangle(no,io,Ur,!1,Dr),o===null))return;let c=e.ray.origin.distanceTo(Dr);c<e.near||c>e.far||t.push({distance:c,point:Dr.clone(),uv:Mi.getInterpolation(Dr,no,Ur,io,Ah,Hc,Rh,new Ae),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function so(i,e,t,n,s,r){Ys.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Lr.x=r*Ys.x-s*Ys.y,Lr.y=s*Ys.x+r*Ys.y):Lr.copy(Ys),i.copy(e),i.x+=Lr.x,i.y+=Lr.y,i.applyMatrix4(Ud)}var Vi=new D,zc=new D,ro=new D,ao=new D,ys=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Vi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Vi.copy(this.origin).addScaledVector(this.direction,t),Vi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){zc.copy(e).add(t).multiplyScalar(.5),ro.copy(t).sub(e).normalize(),ao.copy(this.origin).sub(zc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(ro),o=ao.dot(this.direction),c=-ao.dot(ro),l=ao.lengthSq(),h=Math.abs(1-a*a),p,d,u,f;if(h>0)if(p=a*c-o,d=a*o-c,f=r*h,p>=0)if(d>=-f)if(d<=f){let _=1/h;p*=_,d*=_,u=p*(p+a*d+2*o)+d*(a*p+d+2*c)+l}else d=r,p=Math.max(0,-(a*d+o)),u=-p*p+d*(d+2*c)+l;else d=-r,p=Math.max(0,-(a*d+o)),u=-p*p+d*(d+2*c)+l;else d<=-f?(p=Math.max(0,-(-a*r+o)),d=p>0?-r:Math.min(Math.max(-r,-c),r),u=-p*p+d*(d+2*c)+l):d<=f?(p=0,d=Math.min(Math.max(-r,-c),r),u=d*(d+2*c)+l):(p=Math.max(0,-(a*r+o)),d=p>0?r:Math.min(Math.max(-r,-c),r),u=-p*p+d*(d+2*c)+l);else d=a>0?-r:r,p=Math.max(0,-(a*d+o)),u=-p*p+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(zc).addScaledVector(ro,d),u}intersectSphere(e,t){if(e.radius<0)return null;Vi.subVectors(e.center,this.origin);let n=Vi.dot(this.direction),s=Vi.dot(Vi)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),p>=0?(o=(e.min.z-d.z)*p,c=(e.max.z-d.z)*p):(o=(e.max.z-d.z)*p,c=(e.min.z-d.z)*p),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Vi)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,p=e.x-a.x,d=e.y-a.y,u=e.z-a.z,f=t.x-a.x,_=t.y-a.y,g=t.z-a.z,m=n.x-a.x,E=n.y-a.y,w=n.z-a.z,v=Math.abs(c),y=Math.abs(l),T=Math.abs(h),P,x,b,R,U,S,I,A,N,V,B,z;if(v>=y&&v>=T?(b=c,S=p,N=f,z=m,c>=0?(P=l,x=h,R=d,U=u,I=_,A=g,V=E,B=w):(P=h,x=l,R=u,U=d,I=g,A=_,V=w,B=E)):y>=T?(b=l,S=d,N=_,z=E,l>=0?(P=h,x=c,R=u,U=p,I=g,A=f,V=w,B=m):(P=c,x=h,R=p,U=u,I=f,A=g,V=m,B=w)):(b=h,S=u,N=g,z=w,h>=0?(P=c,x=l,R=p,U=d,I=f,A=_,V=m,B=E):(P=l,x=c,R=d,U=p,I=_,A=f,V=E,B=m)),b===0)return null;let O=P/b,F=x/b,X=1/b,re=R-O*S,pe=U-F*S,_e=I-O*N,De=A-F*N,Xe=V-O*z,$=B-F*z,ae=Xe*De-$*_e,ve=re*$-pe*Xe,me=_e*pe-De*re;if(s){if(ae<0||ve<0||me<0)return null}else if((ae<0||ve<0||me<0)&&(ae>0||ve>0||me>0))return null;let Se=ae+ve+me;if(Se===0)return null;let W=X*(ae*S+ve*N+me*z);return(Se>0?W<0:W>0)?null:this.at(W/Se,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ht=class extends $n{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.combine=pu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Ch=new st,ms=new ys,oo=new Ti,Ph=new D,lo=new D,co=new D,uo=new D,Gc=new D,ho=new D,Ih=new D,fo=new D,Re=class extends Kt{constructor(e=new Mt,t=new Ht){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){ho.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],p=r[c];h!==0&&(Gc.fromBufferAttribute(p,e),a?ho.addScaledVector(Gc,h):ho.addScaledVector(Gc.sub(t),h))}t.add(ho)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),oo.copy(n.boundingSphere),oo.applyMatrix4(r),ms.copy(e.ray).recast(e.near),!(oo.containsPoint(ms.origin)===!1&&(ms.intersectSphere(oo,Ph)===null||ms.origin.distanceToSquared(Ph)>(e.far-e.near)**2))&&(Ch.copy(r).invert(),ms.copy(e.ray).applyMatrix4(Ch),!(n.boundingBox!==null&&ms.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ms)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,p=r.attributes.normal,d=r.groups,u=r.drawRange;if(o!==null)if(Array.isArray(a))for(let f=0,_=d.length;f<_;f++){let g=d[f],m=a[g.materialIndex],E=Math.max(g.start,u.start),w=Math.min(o.count,Math.min(g.start+g.count,u.start+u.count));for(let v=E,y=w;v<y;v+=3){let T=o.getX(v),P=o.getX(v+1),x=o.getX(v+2);s=po(this,m,e,n,l,h,p,T,P,x),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let f=Math.max(0,u.start),_=Math.min(o.count,u.start+u.count);for(let g=f,m=_;g<m;g+=3){let E=o.getX(g),w=o.getX(g+1),v=o.getX(g+2);s=po(this,a,e,n,l,h,p,E,w,v),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let f=0,_=d.length;f<_;f++){let g=d[f],m=a[g.materialIndex],E=Math.max(g.start,u.start),w=Math.min(c.count,Math.min(g.start+g.count,u.start+u.count));for(let v=E,y=w;v<y;v+=3){let T=v,P=v+1,x=v+2;s=po(this,m,e,n,l,h,p,T,P,x),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let f=Math.max(0,u.start),_=Math.min(c.count,u.start+u.count);for(let g=f,m=_;g<m;g+=3){let E=g,w=g+1,v=g+2;s=po(this,a,e,n,l,h,p,E,w,v),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function vp(i,e,t,n,s,r,a,o){let c;if(e.side===Mn?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===as,o),c===null)return null;fo.copy(o),fo.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(fo);return l<t.near||l>t.far?null:{distance:l,point:fo.clone(),object:i}}function po(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,lo),i.getVertexPosition(c,co),i.getVertexPosition(l,uo);let h=vp(i,e,t,n,lo,co,uo,Ih);if(h){let p=new D;Mi.getBarycoord(Ih,lo,co,uo,p),s&&(h.uv=Mi.getInterpolatedAttribute(s,o,c,l,p,new Ae)),r&&(h.uv1=Mi.getInterpolatedAttribute(r,o,c,l,p,new Ae)),a&&(h.normal=Mi.getInterpolatedAttribute(a,o,c,l,p,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new D,materialIndex:0};Mi.getNormal(lo,co,uo,d.normal),h.face=d,h.barycoord=p}return h}var Kn=class extends In{constructor(e=null,t=1,n=1,s,r,a,o,c,l=en,h=en,p,d){super(null,a,o,c,l,h,s,r,p,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ar=class extends gt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Zs=new st,Dh=new st,mo=[],Lh=new wi,_p=new st,Nr=new Re,Fr=new Ti,di=class extends Re{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ar(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,_p)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new wi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Zs),Lh.copy(e.boundingBox).applyMatrix4(Zs),this.boundingBox.union(Lh)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ti),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Zs),Fr.copy(e.boundingSphere).applyMatrix4(Zs),this.boundingSphere.union(Fr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Nr.geometry=this.geometry,Nr.material=this.material,Nr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fr.copy(this.boundingSphere),Fr.applyMatrix4(n),e.ray.intersectsSphere(Fr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Zs),Dh.multiplyMatrices(n,Zs),Nr.matrixWorld=Dh,Nr.raycast(e,mo);for(let a=0,o=mo.length;a<o;a++){let c=mo[a];c.instanceId=r,c.object=this,t.push(c)}mo.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ar(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Kn(new Float32Array(s*this.count),s,this.count,_l,ei));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},gs=new Ti,yp=new Ae(.5,.5),go=new D,or=class{constructor(e=new Wn,t=new Wn,n=new Wn,s=new Wn,r=new Wn,a=new Wn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ui,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],p=r[5],d=r[6],u=r[7],f=r[8],_=r[9],g=r[10],m=r[11],E=r[12],w=r[13],v=r[14],y=r[15];if(s[0].setComponents(l-a,u-h,m-f,y-E).normalize(),s[1].setComponents(l+a,u+h,m+f,y+E).normalize(),s[2].setComponents(l+o,u+p,m+_,y+w).normalize(),s[3].setComponents(l-o,u-p,m-_,y-w).normalize(),n)s[4].setComponents(c,d,g,v).normalize(),s[5].setComponents(l-c,u-d,m-g,y-v).normalize();else if(s[4].setComponents(l-c,u-d,m-g,y-v).normalize(),t===ui)s[5].setComponents(l+c,u+d,m+g,y+v).normalize();else if(t===er)s[5].setComponents(c,d,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),gs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gs)}intersectsSprite(e){gs.center.set(0,0,0);let t=yp.distanceTo(e.center);return gs.radius=.7071067811865476+t,gs.applyMatrix4(e.matrixWorld),this.intersectsSphere(gs)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(go.x=s.normal.x>0?e.max.x:e.min.x,go.y=s.normal.y>0?e.max.y:e.min.y,go.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(go)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var es=class extends $n{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ko=new D,Wo=new D,Uh=new st,Or=new ys,xo=new Ti,Vc=new D,Nh=new D,Xo=class extends Kt{constructor(e=new Mt,t=new es){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)ko.fromBufferAttribute(t,s-1),Wo.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=ko.distanceTo(Wo);e.setAttribute("lineDistance",new yt(n,1))}else ut("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xo.copy(n.boundingSphere),xo.applyMatrix4(s),xo.radius+=r,e.ray.intersectsSphere(xo)===!1)return;Uh.copy(s).invert(),Or.copy(e.ray).applyMatrix4(Uh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let u=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let _=u,g=f-1;_<g;_+=l){let m=h.getX(_),E=h.getX(_+1),w=vo(this,e,Or,c,m,E,_);w&&t.push(w)}if(this.isLineLoop){let _=h.getX(f-1),g=h.getX(u),m=vo(this,e,Or,c,_,g,f-1);m&&t.push(m)}}else{let u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let _=u,g=f-1;_<g;_+=l){let m=vo(this,e,Or,c,_,_+1,_);m&&t.push(m)}if(this.isLineLoop){let _=vo(this,e,Or,c,f-1,u,f-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function vo(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(ko.fromBufferAttribute(o,s),Wo.fromBufferAttribute(o,r),t.distanceSqToSegment(ko,Wo,Vc,Nh)>n)return;Vc.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Vc);if(!(l<e.near||l>e.far))return{distance:l,point:Nh.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Fh=new D,Oh=new D,Ai=class extends Xo{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Fh.fromBufferAttribute(t,s),Oh.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Fh.distanceTo(Oh);e.setAttribute("lineDistance",new yt(n,1))}else ut("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var hn=class extends $n{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Bh=new st,jc=new ys,_o=new Ti,yo=new D,yn=class extends Kt{constructor(e=new Mt,t=new hn){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_o.copy(n.boundingSphere),_o.applyMatrix4(s),_o.radius+=r,e.ray.intersectsSphere(_o)===!1)return;Bh.copy(s).invert(),jc.copy(e.ray).applyMatrix4(Bh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,p=n.attributes.position;if(l!==null){let d=Math.max(0,a.start),u=Math.min(l.count,a.start+a.count);for(let f=d,_=u;f<_;f++){let g=l.getX(f);yo.fromBufferAttribute(p,g),Hh(yo,g,c,s,e,t,this)}}else{let d=Math.max(0,a.start),u=Math.min(p.count,a.start+a.count);for(let f=d,_=u;f<_;f++)yo.fromBufferAttribute(p,f),Hh(yo,f,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Hh(i,e,t,n,s,r,a){let o=jc.distanceSqToPoint(i);if(o<t){let c=new D;jc.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Qr=class extends In{constructor(e=[],t=cs,n,s,r,a,o,c,l,h){super(e,t,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},an=class extends In{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Qn=class extends In{constructor(e,t,n=pi,s,r,a,o=en,c=en,l,h=Ei,p=1){if(h!==Ei&&h!==Pi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:p};super(d,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new nr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},qo=class extends Qn{constructor(e,t=pi,n=cs,s,r,a=en,o=en,c,l=Ei){let h={width:e,height:e,depth:1},p=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,c,l),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},jr=class extends In{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Pt=class i extends Mt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],p=[],d=0,u=0;f("z","y","x",-1,-1,n,t,e,a,r,0),f("z","y","x",1,-1,n,t,-e,a,r,1),f("x","z","y",1,1,e,n,t,s,a,2),f("x","z","y",1,-1,e,n,-t,s,a,3),f("x","y","z",1,-1,e,t,n,s,r,4),f("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new yt(l,3)),this.setAttribute("normal",new yt(h,3)),this.setAttribute("uv",new yt(p,2));function f(_,g,m,E,w,v,y,T,P,x,b){let R=v/P,U=y/x,S=v/2,I=y/2,A=T/2,N=P+1,V=x+1,B=0,z=0,O=new D;for(let F=0;F<V;F++){let X=F*U-I;for(let re=0;re<N;re++){let pe=re*R-S;O[_]=pe*E,O[g]=X*w,O[m]=A,l.push(O.x,O.y,O.z),O[_]=0,O[g]=0,O[m]=T>0?1:-1,h.push(O.x,O.y,O.z),p.push(re/P),p.push(1-F/x),B+=1}}for(let F=0;F<x;F++)for(let X=0;X<P;X++){let re=d+X+N*F,pe=d+X+N*(F+1),_e=d+(X+1)+N*(F+1),De=d+(X+1)+N*F;c.push(re,pe,De),c.push(pe,_e,De),z+=6}o.addGroup(u,z,b),u+=z,d+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Bt=class i extends Mt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],p=[],d=[],u=[],f=0,_=[],g=n/2,m=0;E(),a===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new yt(p,3)),this.setAttribute("normal",new yt(d,3)),this.setAttribute("uv",new yt(u,2));function E(){let v=new D,y=new D,T=0,P=(t-e)/n;for(let x=0;x<=r;x++){let b=[],R=x/r,U=R*(t-e)+e;for(let S=0;S<=s;S++){let I=S/s,A=I*c+o,N=Math.sin(A),V=Math.cos(A);y.x=U*N,y.y=-R*n+g,y.z=U*V,p.push(y.x,y.y,y.z),v.set(N,P,V).normalize(),d.push(v.x,v.y,v.z),u.push(I,1-R),b.push(f++)}_.push(b)}for(let x=0;x<s;x++)for(let b=0;b<r;b++){let R=_[b][x],U=_[b+1][x],S=_[b+1][x+1],I=_[b][x+1];(e>0||b!==0)&&(h.push(R,U,I),T+=3),(t>0||b!==r-1)&&(h.push(U,S,I),T+=3)}l.addGroup(m,T,0),m+=T}function w(v){let y=f,T=new Ae,P=new D,x=0,b=v===!0?e:t,R=v===!0?1:-1;for(let S=1;S<=s;S++)p.push(0,g*R,0),d.push(0,R,0),u.push(.5,.5),f++;let U=f;for(let S=0;S<=s;S++){let A=S/s*c+o,N=Math.cos(A),V=Math.sin(A);P.x=b*V,P.y=g*R,P.z=b*N,p.push(P.x,P.y,P.z),d.push(0,R,0),T.x=N*.5+.5,T.y=V*.5*R+.5,u.push(T.x,T.y),f++}for(let S=0;S<s;S++){let I=y+S,A=U+S;v===!0?h.push(A,A+1,I):h.push(A+1,A,I),x+=3}l.addGroup(m,x,v===!0?1:2),m+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ms=class i extends Bt{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Yo=class i extends Mt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new yt(r,3)),this.setAttribute("normal",new yt(r.slice(),3)),this.setAttribute("uv",new yt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(E){let w=new D,v=new D,y=new D;for(let T=0;T<t.length;T+=3)u(t[T+0],w),u(t[T+1],v),u(t[T+2],y),c(w,v,y,E)}function c(E,w,v,y){let T=y+1,P=[];for(let x=0;x<=T;x++){P[x]=[];let b=E.clone().lerp(v,x/T),R=w.clone().lerp(v,x/T),U=T-x;for(let S=0;S<=U;S++)S===0&&x===T?P[x][S]=b:P[x][S]=b.clone().lerp(R,S/U)}for(let x=0;x<T;x++)for(let b=0;b<2*(T-x)-1;b++){let R=Math.floor(b/2);b%2===0?(d(P[x][R+1]),d(P[x+1][R]),d(P[x][R])):(d(P[x][R+1]),d(P[x+1][R+1]),d(P[x+1][R]))}}function l(E){let w=new D;for(let v=0;v<r.length;v+=3)w.x=r[v+0],w.y=r[v+1],w.z=r[v+2],w.normalize().multiplyScalar(E),r[v+0]=w.x,r[v+1]=w.y,r[v+2]=w.z}function h(){let E=new D;for(let w=0;w<r.length;w+=3){E.x=r[w+0],E.y=r[w+1],E.z=r[w+2];let v=g(E)/2/Math.PI+.5,y=m(E)/Math.PI+.5;a.push(v,1-y)}f(),p()}function p(){for(let E=0;E<a.length;E+=6){let w=a[E+0],v=a[E+2],y=a[E+4],T=Math.max(w,v,y),P=Math.min(w,v,y);T>.9&&P<.1&&(w<.2&&(a[E+0]+=1),v<.2&&(a[E+2]+=1),y<.2&&(a[E+4]+=1))}}function d(E){r.push(E.x,E.y,E.z)}function u(E,w){let v=E*3;w.x=e[v+0],w.y=e[v+1],w.z=e[v+2]}function f(){let E=new D,w=new D,v=new D,y=new D,T=new Ae,P=new Ae,x=new Ae;for(let b=0,R=0;b<r.length;b+=9,R+=6){E.set(r[b+0],r[b+1],r[b+2]),w.set(r[b+3],r[b+4],r[b+5]),v.set(r[b+6],r[b+7],r[b+8]),T.set(a[R+0],a[R+1]),P.set(a[R+2],a[R+3]),x.set(a[R+4],a[R+5]),y.copy(E).add(w).add(v).divideScalar(3);let U=g(y);_(T,R+0,E,U),_(P,R+2,w,U),_(x,R+4,v,U)}}function _(E,w,v,y){y<0&&E.x===1&&(a[w]=E.x-1),v.x===0&&v.z===0&&(a[w]=y/2/Math.PI+.5)}function g(E){return Math.atan2(E.z,-E.x)}function m(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var Mo=new D,So=new D,kc=new D,Eo=new Mi,lr=class extends Mt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let s=Math.pow(10,4),r=Math.cos(Po*t),a=e.getIndex(),o=e.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],h=["a","b","c"],p=new Array(3),d={},u=[];for(let f=0;f<c;f+=3){a?(l[0]=a.getX(f),l[1]=a.getX(f+1),l[2]=a.getX(f+2)):(l[0]=f,l[1]=f+1,l[2]=f+2);let{a:_,b:g,c:m}=Eo;if(_.fromBufferAttribute(o,l[0]),g.fromBufferAttribute(o,l[1]),m.fromBufferAttribute(o,l[2]),Eo.getNormal(kc),p[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,p[1]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,p[2]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,!(p[0]===p[1]||p[1]===p[2]||p[2]===p[0]))for(let E=0;E<3;E++){let w=(E+1)%3,v=p[E],y=p[w],T=Eo[h[E]],P=Eo[h[w]],x=`${v}_${y}`,b=`${y}_${v}`;b in d&&d[b]?(kc.dot(d[b].normal)<=r&&(u.push(T.x,T.y,T.z),u.push(P.x,P.y,P.z)),d[b]=null):x in d||(d[x]={index0:l[E],index1:l[w],normal:kc.clone()})}}for(let f in d)if(d[f]){let{index0:_,index1:g}=d[f];Mo.fromBufferAttribute(o,_),So.fromBufferAttribute(o,g),u.push(Mo.x,Mo.y,Mo.z),u.push(So.x,So.y,So.z)}this.setAttribute("position",new yt(u,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Xn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ut("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,u=(a-h)/d;return(s+u)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new Ae:new D);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new D,s=[],r=[],a=[],o=new D,c=new st;for(let u=0;u<=e;u++){let f=u/e;s[u]=this.getTangentAt(f,new D)}r[0]=new D,a[0]=new D;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),p=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),p<=l&&(l=p,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let u=1;u<=e;u++){if(r[u]=r[u-1].clone(),a[u]=a[u-1].clone(),o.crossVectors(s[u-1],s[u]),o.length()>Number.EPSILON){o.normalize();let f=Math.acos(At(s[u-1].dot(s[u]),-1,1));r[u].applyMatrix4(c.makeRotationAxis(o,f))}a[u].crossVectors(s[u],r[u])}if(t===!0){let u=Math.acos(At(r[0].dot(r[e]),-1,1));u/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(u=-u);for(let f=1;f<=e;f++)r[f].applyMatrix4(c.makeRotationAxis(s[f],u*f)),a[f].crossVectors(s[f],r[f])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},cr=class extends Xn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new Ae){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),p=Math.sin(this.aRotation),d=c-this.aX,u=l-this.aY;c=d*h-u*p+this.aX,l=d*p+u*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Zo=class extends cr{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function bu(){let i=0,e=0,t=0,n=0;function s(r,a,o,c){i=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,p){let d=(a-r)/l-(o-r)/(l+h)+(o-a)/h,u=(o-a)/h-(c-a)/(h+p)+(c-o)/p;d*=h,u*=h,s(a,o,d,u)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var zh=new D,Gh=new D,Wc=new bu,Xc=new bu,qc=new bu,On=class extends Xn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new D){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(Gh.subVectors(s[0],s[1]).add(s[0]),l=Gh);let p=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(zh.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=zh),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,f=Math.pow(l.distanceToSquared(p),u),_=Math.pow(p.distanceToSquared(d),u),g=Math.pow(d.distanceToSquared(h),u);_<1e-4&&(_=1),f<1e-4&&(f=_),g<1e-4&&(g=_),Wc.initNonuniformCatmullRom(l.x,p.x,d.x,h.x,f,_,g),Xc.initNonuniformCatmullRom(l.y,p.y,d.y,h.y,f,_,g),qc.initNonuniformCatmullRom(l.z,p.z,d.z,h.z,f,_,g)}else this.curveType==="catmullrom"&&(Wc.initCatmullRom(l.x,p.x,d.x,h.x,this.tension),Xc.initCatmullRom(l.y,p.y,d.y,h.y,this.tension),qc.initCatmullRom(l.z,p.z,d.z,h.z,this.tension));return n.set(Wc.calc(c),Xc.calc(c),qc.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new D().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Vh(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,c=i*o;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*o+r*i+t}function Mp(i,e){let t=1-i;return t*t*e}function Sp(i,e){return 2*(1-i)*i*e}function Ep(i,e){return i*i*e}function Hr(i,e,t,n){return Mp(i,e)+Sp(i,t)+Ep(i,n)}function bp(i,e){let t=1-i;return t*t*t*e}function wp(i,e){let t=1-i;return 3*t*t*i*e}function Tp(i,e){return 3*(1-i)*i*i*e}function Ap(i,e){return i*i*i*e}function zr(i,e,t,n,s){return bp(i,e)+wp(i,t)+Tp(i,n)+Ap(i,s)}var ea=class extends Xn{constructor(e=new Ae,t=new Ae,n=new Ae,s=new Ae){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Ae){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(zr(e,s.x,r.x,a.x,o.x),zr(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Jo=class extends Xn{constructor(e=new D,t=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new D){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(zr(e,s.x,r.x,a.x,o.x),zr(e,s.y,r.y,a.y,o.y),zr(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ta=class extends Xn{constructor(e=new Ae,t=new Ae){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ae){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ae){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ts=class extends Xn{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},na=class extends Xn{constructor(e=new Ae,t=new Ae,n=new Ae){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ae){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Hr(e,s.x,r.x,a.x),Hr(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ia=class extends Xn{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Hr(e,s.x,r.x,a.x),Hr(e,s.y,r.y,a.y),Hr(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},sa=class extends Xn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ae){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],p=s[a>s.length-3?s.length-1:a+2];return n.set(Vh(o,c.x,l.x,h.x,p.x),Vh(o,c.y,l.y,h.y,p.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Ae().fromArray(s))}return this}},$o=Object.freeze({__proto__:null,ArcCurve:Zo,CatmullRomCurve3:On,CubicBezierCurve:ea,CubicBezierCurve3:Jo,EllipseCurve:cr,LineCurve:ta,LineCurve3:ts,QuadraticBezierCurve:na,QuadraticBezierCurve3:ia,SplineCurve:sa}),ur=class extends Xn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new $o[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new $o[s.type]().fromJSON(s))}return this}},Ss=class extends ur{constructor(e){super(),this.type="Path",this.currentPoint=new Ae,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ta(this.currentPoint.clone(),new Ae(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new na(this.currentPoint.clone(),new Ae(e,t),new Ae(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new ea(this.currentPoint.clone(),new Ae(e,t),new Ae(n,s),new Ae(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new sa(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,a,o,c),this}absellipse(e,t,n,s,r,a,o,c){let l=new cr(e,t,n,s,r,a,o,c);if(this.curves.length>0){let p=l.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},fi=class extends Ss{constructor(e){super(e),this.uuid=ki(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Ss().fromJSON(s))}return this}};function Rp(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Nd(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l;if(n&&(r=Lp(i,e,r,t)),i.length>80*t){o=i[0],c=i[1];let h=o,p=c;for(let d=t;d<s;d+=t){let u=i[d],f=i[d+1];u<o&&(o=u),f<c&&(c=f),u>h&&(h=u),f>p&&(p=f)}l=Math.max(h-o,p-c),l=l!==0?32767/l:0}return ra(r,a,t,o,c,l,0),a}function Nd(i,e,t,n,s){let r;if(s===Wp(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=kh(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=kh(a/n|0,i[a],i[a+1],r);return r&&hr(r,r.next)&&(oa(r),r=r.next),r}function Es(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(hr(t,t.next)||Jt(t.prev,t,t.next)===0)){if(oa(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ra(i,e,t,n,s,r,a){if(!i)return;!a&&r&&Bp(i,n,s,r);let o=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?Pp(i,n,s,r):Cp(i)){e.push(c.i,i.i,l.i),oa(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=Ip(Es(i),e),ra(i,e,t,n,s,r,2)):a===2&&Dp(i,e,t,n,s,r):ra(Es(i),e,t,n,s,r,1);break}}}function Cp(i){let e=i.prev,t=i,n=i.next;if(Jt(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,c=t.y,l=n.y,h=Math.min(s,r,a),p=Math.min(o,c,l),d=Math.max(s,r,a),u=Math.max(o,c,l),f=n.next;for(;f!==e;){if(f.x>=h&&f.x<=d&&f.y>=p&&f.y<=u&&Br(s,o,r,c,a,l,f.x,f.y)&&Jt(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function Pp(i,e,t,n){let s=i.prev,r=i,a=i.next;if(Jt(s,r,a)>=0)return!1;let o=s.x,c=r.x,l=a.x,h=s.y,p=r.y,d=a.y,u=Math.min(o,c,l),f=Math.min(h,p,d),_=Math.max(o,c,l),g=Math.max(h,p,d),m=eu(u,f,e,t,n),E=eu(_,g,e,t,n),w=i.prevZ,v=i.nextZ;for(;w&&w.z>=m&&v&&v.z<=E;){if(w.x>=u&&w.x<=_&&w.y>=f&&w.y<=g&&w!==s&&w!==a&&Br(o,h,c,p,l,d,w.x,w.y)&&Jt(w.prev,w,w.next)>=0||(w=w.prevZ,v.x>=u&&v.x<=_&&v.y>=f&&v.y<=g&&v!==s&&v!==a&&Br(o,h,c,p,l,d,v.x,v.y)&&Jt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;w&&w.z>=m;){if(w.x>=u&&w.x<=_&&w.y>=f&&w.y<=g&&w!==s&&w!==a&&Br(o,h,c,p,l,d,w.x,w.y)&&Jt(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;v&&v.z<=E;){if(v.x>=u&&v.x<=_&&v.y>=f&&v.y<=g&&v!==s&&v!==a&&Br(o,h,c,p,l,d,v.x,v.y)&&Jt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Ip(i,e){let t=i;do{let n=t.prev,s=t.next.next;!hr(n,s)&&Od(n,t,t.next,s)&&aa(n,s)&&aa(s,n)&&(e.push(n.i,t.i,s.i),oa(t),oa(t.next),t=i=s),t=t.next}while(t!==i);return Es(t)}function Dp(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Gp(a,o)){let c=Bd(a,o);a=Es(a,a.next),c=Es(c,c.next),ra(a,e,t,n,s,r,0),ra(c,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Lp(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,c=r<a-1?e[r+1]*n:i.length,l=Nd(i,o,c,n,!1);l===l.next&&(l.steiner=!0),s.push(zp(l))}s.sort(Up);for(let r=0;r<s.length;r++)t=Np(s[r],t);return t}function Up(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Np(i,e){let t=Fp(i,e);if(!t)return e;let n=Bd(t,i);return Es(n,n.next),Es(t,t.next)}function Fp(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(hr(i,t))return t;do{if(hr(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let p=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(p<=n&&p>r&&(r=p,a=t.x<t.next.x?t:t.next,p===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,c=a.x,l=a.y,h=1/0;t=a;do{if(n>=t.x&&t.x>=c&&n!==t.x&&Fd(s<l?n:r,s,c,l,s<l?r:n,s,t.x,t.y)){let p=Math.abs(s-t.y)/(n-t.x);aa(t,i)&&(p<h||p===h&&(t.x>a.x||t.x===a.x&&Op(a,t)))&&(a=t,h=p)}t=t.next}while(t!==o);return a}function Op(i,e){return Jt(i.prev,i,e.prev)<0&&Jt(e.next,i,i.next)<0}function Bp(i,e,t,n){let s=i;do s.z===0&&(s.z=eu(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Hp(s)}function Hp(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let l=0;l<t&&(o++,a=a.nextZ,!!a);l++);let c=t;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function eu(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function zp(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Fd(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Br(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&Fd(i,e,t,n,s,r,a,o)}function Gp(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Vp(i,e)&&(aa(i,e)&&aa(e,i)&&kp(i,e)&&(Jt(i.prev,i,e.prev)||Jt(i,e.prev,e))||hr(i,e)&&Jt(i.prev,i,i.next)>0&&Jt(e.prev,e,e.next)>0)}function Jt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function hr(i,e){return i.x===e.x&&i.y===e.y}function Od(i,e,t,n){let s=wo(Jt(i,e,t)),r=wo(Jt(i,e,n)),a=wo(Jt(t,n,i)),o=wo(Jt(t,n,e));return!!(s!==r&&a!==o||s===0&&bo(i,t,e)||r===0&&bo(i,n,e)||a===0&&bo(t,i,n)||o===0&&bo(t,e,n))}function bo(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function wo(i){return i>0?1:i<0?-1:0}function Vp(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Od(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function aa(i,e){return Jt(i.prev,i,i.next)<0?Jt(i,e,i.next)>=0&&Jt(i,i.prev,e)>=0:Jt(i,e,i.prev)<0||Jt(i,i.next,e)<0}function kp(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Bd(i,e){let t=tu(i.i,i.x,i.y),n=tu(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function kh(i,e,t,n){let s=tu(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function oa(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function tu(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Wp(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var nu=class{static triangulate(e,t,n=2){return Rp(e,t,n)}},xs=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Wh(e),Xh(n,e);let a=e.length;t.forEach(Wh);for(let c=0;c<t.length;c++)s.push(a),a+=t[c].length,Xh(n,t[c]);let o=nu.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function Wh(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Xh(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Ri=class i extends Mt{constructor(e=new fi([new Ae(.5,.5),new Ae(-.5,.5),new Ae(-.5,-.5),new Ae(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,c=e.length;o<c;o++){let l=e[o];a(l)}this.setAttribute("position",new yt(s,3)),this.setAttribute("uv",new yt(r,2)),this.computeVertexNormals();function a(o){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,p=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,u=t.bevelThickness!==void 0?t.bevelThickness:.2,f=t.bevelSize!==void 0?t.bevelSize:u-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,E=t.UVGenerator!==void 0?t.UVGenerator:Xp,w,v=!1,y,T,P,x;if(m){w=m.getSpacedPoints(h),v=!0,d=!1;let j=m.isCatmullRomCurve3?m.closed:!1;y=m.computeFrenetFrames(h,j),T=new D,P=new D,x=new D}d||(g=0,u=0,f=0,_=0);let b=o.extractPoints(l),R=b.shape,U=b.holes;if(!xs.isClockWise(R)){R=R.reverse();for(let j=0,le=U.length;j<le;j++){let Z=U[j];xs.isClockWise(Z)&&(U[j]=Z.reverse())}}function I(j){let Z=10000000000000001e-36,ee=j[0];for(let oe=1;oe<=j.length;oe++){let be=oe%j.length,Ee=j[be],Oe=Ee.x-ee.x,Ne=Ee.y-ee.y,G=Oe*Oe+Ne*Ne,ot=Math.max(Math.abs(Ee.x),Math.abs(Ee.y),Math.abs(ee.x),Math.abs(ee.y)),et=Z*ot*ot;if(G<=et){j.splice(be,1),oe--;continue}ee=Ee}}I(R),U.forEach(I);let A=U.length,N=R;for(let j=0;j<A;j++){let le=U[j];R=R.concat(le)}function V(j,le,Z){return le||dt("ExtrudeGeometry: vec does not exist"),j.clone().addScaledVector(le,Z)}let B=R.length;function z(j,le,Z){let ee,oe,be,Ee=j.x-le.x,Oe=j.y-le.y,Ne=Z.x-j.x,G=Z.y-j.y,ot=Ee*Ee+Oe*Oe,et=Ee*G-Oe*Ne;if(Math.abs(et)>Number.EPSILON){let L=Math.sqrt(ot),M=Math.sqrt(Ne*Ne+G*G),K=le.x-Oe/L,te=le.y+Ee/L,ce=Z.x-G/M,Le=Z.y+Ne/M,Fe=((ce-K)*G-(Le-te)*Ne)/(Ee*G-Oe*Ne);ee=K+Ee*Fe-j.x,oe=te+Oe*Fe-j.y;let fe=ee*ee+oe*oe;if(fe<=2)return new Ae(ee,oe);be=Math.sqrt(fe/2)}else{let L=!1;Ee>Number.EPSILON?Ne>Number.EPSILON&&(L=!0):Ee<-Number.EPSILON?Ne<-Number.EPSILON&&(L=!0):Math.sign(Oe)===Math.sign(G)&&(L=!0),L?(ee=-Oe,oe=Ee,be=Math.sqrt(ot)):(ee=Ee,oe=Oe,be=Math.sqrt(ot/2))}return new Ae(ee/be,oe/be)}let O=[];for(let j=0,le=N.length,Z=le-1,ee=j+1;j<le;j++,Z++,ee++)Z===le&&(Z=0),ee===le&&(ee=0),O[j]=z(N[j],N[Z],N[ee]);let F=[],X,re=O.concat();for(let j=0,le=A;j<le;j++){let Z=U[j];X=[];for(let ee=0,oe=Z.length,be=oe-1,Ee=ee+1;ee<oe;ee++,be++,Ee++)be===oe&&(be=0),Ee===oe&&(Ee=0),X[ee]=z(Z[ee],Z[be],Z[Ee]);F.push(X),re=re.concat(X)}let pe;if(g===0)pe=xs.triangulateShape(N,U);else{let j=[],le=[];for(let Z=0;Z<g;Z++){let ee=Z/g,oe=u*Math.cos(ee*Math.PI/2),be=f*Math.sin(ee*Math.PI/2)+_;for(let Ee=0,Oe=N.length;Ee<Oe;Ee++){let Ne=V(N[Ee],O[Ee],be);ve(Ne.x,Ne.y,-oe),ee===0&&j.push(Ne)}for(let Ee=0,Oe=A;Ee<Oe;Ee++){let Ne=U[Ee];X=F[Ee];let G=[];for(let ot=0,et=Ne.length;ot<et;ot++){let L=V(Ne[ot],X[ot],be);ve(L.x,L.y,-oe),ee===0&&G.push(L)}ee===0&&le.push(G)}}pe=xs.triangulateShape(j,le)}let _e=pe.length,De=f+_;for(let j=0;j<B;j++){let le=d?V(R[j],re[j],De):R[j];v?(P.copy(y.normals[0]).multiplyScalar(le.x),T.copy(y.binormals[0]).multiplyScalar(le.y),x.copy(w[0]).add(P).add(T),ve(x.x,x.y,x.z)):ve(le.x,le.y,0)}for(let j=1;j<=h;j++)for(let le=0;le<B;le++){let Z=d?V(R[le],re[le],De):R[le];v?(P.copy(y.normals[j]).multiplyScalar(Z.x),T.copy(y.binormals[j]).multiplyScalar(Z.y),x.copy(w[j]).add(P).add(T),ve(x.x,x.y,x.z)):ve(Z.x,Z.y,p/h*j)}for(let j=g-1;j>=0;j--){let le=j/g,Z=u*Math.cos(le*Math.PI/2),ee=f*Math.sin(le*Math.PI/2)+_;for(let oe=0,be=N.length;oe<be;oe++){let Ee=V(N[oe],O[oe],ee);ve(Ee.x,Ee.y,p+Z)}for(let oe=0,be=U.length;oe<be;oe++){let Ee=U[oe];X=F[oe];for(let Oe=0,Ne=Ee.length;Oe<Ne;Oe++){let G=V(Ee[Oe],X[Oe],ee);v?ve(G.x,G.y+w[h-1].y,w[h-1].x+Z):ve(G.x,G.y,p+Z)}}}Xe(),$();function Xe(){let j=s.length/3;if(d){let le=0,Z=B*le;for(let ee=0;ee<_e;ee++){let oe=pe[ee];me(oe[2]+Z,oe[1]+Z,oe[0]+Z)}le=h+g*2,Z=B*le;for(let ee=0;ee<_e;ee++){let oe=pe[ee];me(oe[0]+Z,oe[1]+Z,oe[2]+Z)}}else{for(let le=0;le<_e;le++){let Z=pe[le];me(Z[2],Z[1],Z[0])}for(let le=0;le<_e;le++){let Z=pe[le];me(Z[0]+B*h,Z[1]+B*h,Z[2]+B*h)}}n.addGroup(j,s.length/3-j,0)}function $(){let j=s.length/3,le=0;ae(N,le),le+=N.length;for(let Z=0,ee=U.length;Z<ee;Z++){let oe=U[Z];ae(oe,le),le+=oe.length}n.addGroup(j,s.length/3-j,1)}function ae(j,le){let Z=j.length;for(;--Z>=0;){let ee=Z,oe=Z-1;oe<0&&(oe=j.length-1);for(let be=0,Ee=h+g*2;be<Ee;be++){let Oe=B*be,Ne=B*(be+1),G=le+ee+Oe,ot=le+oe+Oe,et=le+oe+Ne,L=le+ee+Ne;Se(G,ot,et,L)}}}function ve(j,le,Z){c.push(j),c.push(le),c.push(Z)}function me(j,le,Z){W(j),W(le),W(Z);let ee=s.length/3,oe=E.generateTopUV(n,s,ee-3,ee-2,ee-1);we(oe[0]),we(oe[1]),we(oe[2])}function Se(j,le,Z,ee){W(j),W(le),W(ee),W(le),W(Z),W(ee);let oe=s.length/3,be=E.generateSideWallUV(n,s,oe-6,oe-3,oe-2,oe-1);we(be[0]),we(be[1]),we(be[3]),we(be[1]),we(be[2]),we(be[3])}function W(j){s.push(c[j*3+0]),s.push(c[j*3+1]),s.push(c[j*3+2])}function we(j){r.push(j.x),r.push(j.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return qp(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new $o[s.type]().fromJSON(s)),new i(n,e.options)}},Xp={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],c=e[n*3+1],l=e[s*3],h=e[s*3+1];return[new Ae(r,a),new Ae(o,c),new Ae(l,h)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],p=e[n*3+2],d=e[s*3],u=e[s*3+1],f=e[s*3+2],_=e[r*3],g=e[r*3+1],m=e[r*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new Ae(a,1-c),new Ae(l,1-p),new Ae(d,1-f),new Ae(_,1-m)]:[new Ae(o,1-c),new Ae(h,1-p),new Ae(u,1-f),new Ae(g,1-m)]}};function qp(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var la=class i extends Yo{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var zt=class i extends Mt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,p=e/o,d=t/c,u=[],f=[],_=[],g=[];for(let m=0;m<h;m++){let E=m*d-a;for(let w=0;w<l;w++){let v=w*p-r;f.push(v,-E,0),_.push(0,0,1),g.push(w/o),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let E=0;E<o;E++){let w=E+l*m,v=E+l*(m+1),y=E+1+l*(m+1),T=E+1+l*m;u.push(w,v,T),u.push(v,y,T)}this.setIndex(u),this.setAttribute("position",new yt(f,3)),this.setAttribute("normal",new yt(_,3)),this.setAttribute("uv",new yt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Tn=class i extends Mt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],p=new D,d=new D,u=[],f=[],_=[],g=[];for(let m=0;m<=n;m++){let E=[],w=m/n,v=a+w*o,y=e*Math.cos(v),T=Math.sqrt(e*e-y*y),P=0;m===0&&a===0?P=.5/t:m===n&&c===Math.PI&&(P=-.5/t);for(let x=0;x<=t;x++){let b=x/t,R=s+b*r;p.x=-T*Math.cos(R),p.y=y,p.z=T*Math.sin(R),f.push(p.x,p.y,p.z),d.copy(p).normalize(),_.push(d.x,d.y,d.z),g.push(b+P,1-w),E.push(l++)}h.push(E)}for(let m=0;m<n;m++)for(let E=0;E<t;E++){let w=h[m][E+1],v=h[m][E],y=h[m+1][E],T=h[m+1][E+1];(m!==0||a>0)&&u.push(w,v,T),(m!==n-1||c<Math.PI)&&u.push(v,y,T)}this.setIndex(u),this.setAttribute("position",new yt(f,3)),this.setAttribute("normal",new yt(_,3)),this.setAttribute("uv",new yt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var ca=class i extends Mt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let c=[],l=[],h=[],p=[],d=new D,u=new D,f=new D;for(let _=0;_<=n;_++){let g=a+_/n*o;for(let m=0;m<=s;m++){let E=m/s*r;u.x=(e+t*Math.cos(g))*Math.cos(E),u.y=(e+t*Math.cos(g))*Math.sin(E),u.z=t*Math.sin(g),l.push(u.x,u.y,u.z),d.x=e*Math.cos(E),d.y=e*Math.sin(E),f.subVectors(u,d).normalize(),h.push(f.x,f.y,f.z),p.push(m/s),p.push(_/n)}}for(let _=1;_<=n;_++)for(let g=1;g<=s;g++){let m=(s+1)*_+g-1,E=(s+1)*(_-1)+g-1,w=(s+1)*(_-1)+g,v=(s+1)*_+g;c.push(m,E,v),c.push(E,w,v)}this.setIndex(c),this.setAttribute("position",new yt(l,3)),this.setAttribute("normal",new yt(h,3)),this.setAttribute("uv",new yt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var An=class i extends Mt{constructor(e=new ia(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new D,c=new D,l=new Ae,h=new D,p=[],d=[],u=[],f=[];_(),this.setIndex(f),this.setAttribute("position",new yt(p,3)),this.setAttribute("normal",new yt(d,3)),this.setAttribute("uv",new yt(u,2));function _(){for(let w=0;w<t;w++)g(w);g(r===!1?t:0),E(),m()}function g(w){h=e.getPointAt(w/t,h);let v=a.normals[w],y=a.binormals[w];for(let T=0;T<=s;T++){let P=T/s*Math.PI*2,x=Math.sin(P),b=-Math.cos(P);c.x=b*v.x+x*y.x,c.y=b*v.y+x*y.y,c.z=b*v.z+x*y.z,c.normalize(),d.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,p.push(o.x,o.y,o.z)}}function m(){for(let w=1;w<=t;w++)for(let v=1;v<=s;v++){let y=(s+1)*(w-1)+(v-1),T=(s+1)*w+(v-1),P=(s+1)*w+v,x=(s+1)*(w-1)+v;f.push(y,T,x),f.push(T,P,x)}}function E(){for(let w=0;w<=t;w++)for(let v=0;v<=s;v++)l.x=w/t,l.y=v/s,u.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new $o[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function Rs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(qh(s))s.isRenderTargetTexture?(ut("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(qh(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Rn(i){let e={};for(let t=0;t<i.length;t++){let n=Rs(i[t]);for(let s in n)e[s]=n[s]}return e}function qh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Yp(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function wu(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Tt.workingColorSpace}var Dn={clone:Rs,merge:Rn},Zp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,It=class extends $n{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zp,this.fragmentShader=Jp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Rs(e.uniforms),this.uniformsGroups=Yp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new ze().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ae().fromArray(s.value);break;case"v3":this.uniforms[n].value=new D().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Wt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new xt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new st().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},dr=class extends It{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Rt=class extends $n{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=La,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Bn=class extends Rt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ae(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return At(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ze(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ze(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ze(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var ua=class extends $n{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=La,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};var Ko=class extends $n{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Qo=class extends $n{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Js(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Yc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var ns=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},jo=class extends ns{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:$c,endingEnd:$c}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Kc:r=e,o=2*t-n;break;case Qc:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Kc:a=e,c=2*n-t;break;case Qc:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,p=this._offsetNext,d=this._weightPrev,u=this._weightNext,f=(n-t)/(s-t),_=f*f,g=_*f,m=-d*g+2*d*_-d*f,E=(1+d)*g+(-1.5-2*d)*_+(-.5+d)*f+1,w=(-1-u)*g+(1.5+u)*_+.5*f,v=u*g-u*_;for(let y=0;y!==o;++y)r[y]=m*a[h+y]+E*a[l+y]+w*a[c+y]+v*a[p+y];return r}},el=class extends ns{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(s-t),p=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*p+a[c+d]*h;return r}},tl=class extends ns{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},nl=class extends ns{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this.inTangents,p=this.outTangents;if(!h||!p){let f=(n-t)/(s-t),_=1-f;for(let g=0;g!==o;++g)r[g]=a[l+g]*_+a[c+g]*f;return r}let d=o*2,u=e-1;for(let f=0;f!==o;++f){let _=a[l+f],g=a[c+f],m=u*d+f*2,E=p[m],w=p[m+1],v=e*d+f*2,y=h[v],T=h[v+1],P=Kp(n,t,E,y,s);r[f]=Hd(P,_,w,T,g)}return r}};function Hd(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function $p(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Kp(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=Hd(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let c=$p(r,e,t,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var qn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Js(t,this.TimeBufferType),this.values=Js(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Js(e.times,Array),values:Js(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Yc(e.settings)&&(n.settings={inTangents:Js(e.settings.inTangents,Array),outTangents:Js(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new tl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new el(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new jo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new nl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Gr:t=this.InterpolantFactoryMethodDiscrete;break;case Ho:t=this.InterpolantFactoryMethodLinear;break;case Ro:t=this.InterpolantFactoryMethodSmooth;break;case Jc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ut("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Gr;case this.InterpolantFactoryMethodLinear:return Ho;case this.InterpolantFactoryMethodSmooth:return Ro;case this.InterpolantFactoryMethodBezier:return Jc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Yc(this.settings)&&(Yh(this.settings.inTangents,e),Yh(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(dt("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(dt("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){dt("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){dt("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&ep(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){dt("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ro,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(s)c=!0;else{let p=o*n,d=p-n,u=p+n;for(let f=0;f!==n;++f){let _=t[p+f];if(_!==t[d+f]||_!==t[u+f]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let p=o*n,d=a*n;for(let u=0;u!==n;++u)t[d+u]=t[p+u]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Yc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Yh(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}qn.prototype.ValueTypeName="";qn.prototype.TimeBufferType=Float32Array;qn.prototype.ValueBufferType=Float32Array;qn.prototype.DefaultInterpolation=Ho;var is=class extends qn{constructor(e,t,n){super(e,t,n)}};is.prototype.ValueTypeName="bool";is.prototype.ValueBufferType=Array;is.prototype.DefaultInterpolation=Gr;is.prototype.InterpolantFactoryMethodLinear=void 0;is.prototype.InterpolantFactoryMethodSmooth=void 0;var il=class extends qn{constructor(e,t,n,s){super(e,t,n,s)}};il.prototype.ValueTypeName="color";var sl=class extends qn{constructor(e,t,n,s){super(e,t,n,s)}};sl.prototype.ValueTypeName="number";var rl=class extends ns{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),l=e*o;for(let h=l+o;l!==h;l+=4)$t.slerpFlat(r,0,a,l-o,a,l,c);return r}},ha=class extends qn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new rl(this.times,this.values,this.getValueSize(),e)}};ha.prototype.ValueTypeName="quaternion";ha.prototype.InterpolantFactoryMethodSmooth=void 0;var ss=class extends qn{constructor(e,t,n){super(e,t,n)}};ss.prototype.ValueTypeName="string";ss.prototype.ValueBufferType=Array;ss.prototype.DefaultInterpolation=Gr;ss.prototype.InterpolantFactoryMethodLinear=void 0;ss.prototype.InterpolantFactoryMethodSmooth=void 0;var al=class extends qn{constructor(e,t,n,s){super(e,t,n,s)}};al.prototype.ValueTypeName="vector";var ol=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,p){return l.push(h,p),this},this.removeHandler=function(h){let p=l.indexOf(h);return p!==-1&&l.splice(p,2),this},this.getHandler=function(h){for(let p=0,d=l.length;p<d;p+=2){let u=l[p],f=l[p+1];if(u.global&&(u.lastIndex=0),u.test(h))return f}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},zd=new ol,ll=class{constructor(e){this.manager=e!==void 0?e:zd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};ll.DEFAULT_MATERIAL_NAME="__DEFAULT";var bs=class extends Kt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},da=class extends bs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ze(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Zc=new st,Zh=new D,Jh=new D,fr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ae(512,512),this.mapType=fn,this.map=null,this.mapPass=null,this.matrix=new st,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new or,this._frameExtents=new Ae(1,1),this._viewportCount=1,this._viewports=[new Wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Zh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Zh),Jh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Jh),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Zc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Zc,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===er||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(Zc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},To=new D,Ao=new $t,_i=new D,fa=class extends Kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new st,this.projectionMatrix=new st,this.projectionMatrixInverse=new st,this.coordinateSystem=ui,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(To,Ao,_i),_i.x===1&&_i.y===1&&_i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(To,Ao,_i.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(To,Ao,_i),_i.x===1&&_i.y===1&&_i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(To,Ao,_i.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ji=new D,$h=new Ae,Kh=new Ae,vn=class extends fa{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=qr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Po*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qr*2*Math.atan(Math.tan(Po*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ji.x,ji.y).multiplyScalar(-e/ji.z),ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ji.x,ji.y).multiplyScalar(-e/ji.z)}getViewSize(e,t){return this.getViewBounds(e,$h,Kh),t.subVectors(Kh,$h)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Po*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},iu=class extends fr{constructor(){super(new vn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=qr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},pa=class extends bs{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.target=new Kt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new iu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},su=class extends fr{constructor(){super(new vn(90,1,.5,500)),this.isPointLightShadow=!0}},Hn=class extends bs{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new su}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},rs=class extends fa{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ru=class extends fr{constructor(){super(new rs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},pr=class extends bs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.target=new Kt,this.shadow=new ru}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var $s=-90,Ks=1,cl=class extends Kt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new vn($s,Ks,e,t);s.layers=this.layers,this.add(s);let r=new vn($s,Ks,e,t);r.layers=this.layers,this.add(r);let a=new vn($s,Ks,e,t);a.layers=this.layers,this.add(a);let o=new vn($s,Ks,e,t);o.layers=this.layers,this.add(o);let c=new vn($s,Ks,e,t);c.layers=this.layers,this.add(c);let l=new vn($s,Ks,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===ui)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===er)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,p=e.getRenderTarget(),d=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(p,d,u),e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}},ul=class extends vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},ma=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Qp.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Qp(){this._document.hidden===!1&&this.reset()}var Tu="\\[\\]\\.:\\/",jp=new RegExp("["+Tu+"]","g"),Au="[^"+Tu+"]",e0="[^"+Tu.replace("\\.","")+"]",t0=/((?:WC+[\/:])*)/.source.replace("WC",Au),n0=/(WCOD+)?/.source.replace("WCOD",e0),i0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Au),s0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Au),r0=new RegExp("^"+t0+n0+i0+s0+"$"),a0=["material","materials","bones","map"],au=class{constructor(e,t,n){let s=n||Yt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Yt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(jp,"")}static parseTrackName(e){let t=r0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);a0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ut("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){dt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){dt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){dt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){dt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){dt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){dt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){dt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;dt("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){dt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){dt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Yt.Composite=au;Yt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Yt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Yt.prototype.GetterByBindingType=[Yt.prototype._getValue_direct,Yt.prototype._getValue_array,Yt.prototype._getValue_arrayElement,Yt.prototype._getValue_toArray];Yt.prototype.SetterByBindingTypeAndVersioning=[[Yt.prototype._setValue_direct,Yt.prototype._setValue_direct_setNeedsUpdate,Yt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Yt.prototype._setValue_array,Yt.prototype._setValue_array_setNeedsUpdate,Yt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Yt.prototype._setValue_arrayElement,Yt.prototype._setValue_arrayElement_setNeedsUpdate,Yt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Yt.prototype._setValue_fromArray,Yt.prototype._setValue_fromArray_setNeedsUpdate,Yt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var __=new Float32Array(1);var Qh=new st,ga=class{constructor(e,t,n=0,s=1/0){this.ray=new ys(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new ir,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):dt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Qh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Qh),this}intersectObject(e,t=!0,n=[]){return ou(e,this,n,t),n.sort(jh),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)ou(e[s],this,n,t);return n.sort(jh),n}};function jh(i,e){return i.distance-e.distance}function ou(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)ou(r[a],e,t,!0)}}var Lu=class Lu{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Lu.prototype.isMatrix2=!0;var lu=Lu;function Ru(i,e,t,n){let s=o0(n);switch(t){case yu:return i*e;case _l:return i*e/s.components*s.byteLength;case yl:return i*e/s.components*s.byteLength;case hs:return i*e*2/s.components*s.byteLength;case Ml:return i*e*2/s.components*s.byteLength;case Mu:return i*e*3/s.components*s.byteLength;case En:return i*e*4/s.components*s.byteLength;case Sl:return i*e*4/s.components*s.byteLength;case Aa:case Ra:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ca:case Pa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case bl:case Tl:return Math.max(i,16)*Math.max(e,8)/4;case El:case wl:return Math.max(i,8)*Math.max(e,8)/2;case Al:case Rl:case Pl:case Il:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Cl:case Ia:case Dl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ll:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ul:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Nl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Fl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ol:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Bl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Hl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case zl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Gl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Vl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case kl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Wl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Xl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ql:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Yl:case Zl:case Jl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case $l:case Kl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Da:case Ql:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function o0(i){switch(i){case fn:case gu:return{byteLength:1,components:1};case gr:case xu:case Qt:return{byteLength:2,components:1};case xl:case vl:return{byteLength:2,components:4};case pi:case gl:case ei:return{byteLength:4,components:1};case vu:case _u:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?ut("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function cf(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function d0(i){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,p=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),o.onUploadCallback();let u;if(l instanceof Float32Array)u=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)u=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)u=i.SHORT;else if(l instanceof Uint32Array)u=i.UNSIGNED_INT;else if(l instanceof Int32Array)u=i.INT;else if(l instanceof Int8Array)u=i.BYTE;else if(l instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:u,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,c,l){let h=c.array,p=c.updateRanges;if(i.bindBuffer(l,o),p.length===0)i.bufferSubData(l,0,h);else{p.sort((u,f)=>u.start-f.start);let d=0;for(let u=1;u<p.length;u++){let f=p[d],_=p[u];_.start<=f.start+f.count+1?f.count=Math.max(f.count,_.start+_.count-f.start):(++d,p[d]=_)}p.length=d+1;for(let u=0,f=p.length;u<f;u++){let _=p[u];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var f0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,p0=`#ifdef USE_ALPHAHASH
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
#endif`,m0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,g0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,x0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,v0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_0=`#ifdef USE_AOMAP
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
#endif`,y0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,M0=`#ifdef USE_BATCHING
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
#endif`,S0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,E0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,b0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,w0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,T0=`#ifdef USE_IRIDESCENCE
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
#endif`,A0=`#ifdef USE_BUMPMAP
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
#endif`,R0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,C0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,P0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,I0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,D0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,L0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,U0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,N0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,F0=`#define PI 3.141592653589793
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
} // validated`,O0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,B0=`vec3 transformedNormal = objectNormal;
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
#endif`,H0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,z0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,G0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,V0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,k0="gl_FragColor = linearToOutputTexel( gl_FragColor );",W0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,X0=`#ifdef USE_ENVMAP
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
#endif`,q0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Y0=`#ifdef USE_ENVMAP
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
#endif`,Z0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,J0=`#ifdef USE_ENVMAP
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
#endif`,$0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,K0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Q0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,j0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,em=`#ifdef USE_GRADIENTMAP
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
}`,tm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,im=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,rm=`#ifdef USE_ENVMAP
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
#endif`,am=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,om=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,um=`PhysicalMaterial material;
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
#endif`,hm=`uniform sampler2D dfgLUT;
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
}`,dm=`
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
#endif`,fm=`#if defined( RE_IndirectDiffuse )
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
#endif`,pm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mm=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,gm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_m=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ym=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Mm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Em=`#if defined( USE_POINTS_UV )
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
#endif`,bm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Tm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Am=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cm=`#ifdef USE_MORPHTARGETS
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
#endif`,Pm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Im=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Dm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Lm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Um=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Fm=`#ifdef USE_NORMALMAP
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
#endif`,Om=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Bm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Hm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,km=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ym=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$m=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Km=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Qm=`float getShadowMask() {
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
}`,jm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,eg=`#ifdef USE_SKINNING
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
#endif`,tg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ng=`#ifdef USE_SKINNING
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
#endif`,ig=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ag=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,og=`#ifdef USE_TRANSMISSION
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
#endif`,lg=`#ifdef USE_TRANSMISSION
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
#endif`,cg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ug=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,fg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pg=`uniform sampler2D t2D;
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
}`,mg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,xg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_g=`#include <common>
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
}`,yg=`#if DEPTH_PACKING == 3200
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
}`,Mg=`#define DISTANCE
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
}`,Sg=`#define DISTANCE
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
}`,Eg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wg=`uniform float scale;
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
}`,Tg=`uniform vec3 diffuse;
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
}`,Ag=`#include <common>
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
}`,Rg=`uniform vec3 diffuse;
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
}`,Cg=`#define LAMBERT
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
}`,Pg=`#define LAMBERT
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
}`,Ig=`#define MATCAP
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
}`,Dg=`#define MATCAP
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
}`,Lg=`#define NORMAL
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
}`,Ug=`#define NORMAL
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
}`,Ng=`#define PHONG
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
}`,Fg=`#define PHONG
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
}`,Og=`#define STANDARD
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
}`,Bg=`#define STANDARD
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
}`,Hg=`#define TOON
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
}`,zg=`#define TOON
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
}`,Gg=`uniform float size;
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
}`,Vg=`uniform vec3 diffuse;
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
}`,kg=`#include <common>
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
}`,Wg=`uniform vec3 color;
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
}`,Xg=`uniform float rotation;
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
}`,qg=`uniform vec3 diffuse;
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
}`,St={alphahash_fragment:f0,alphahash_pars_fragment:p0,alphamap_fragment:m0,alphamap_pars_fragment:g0,alphatest_fragment:x0,alphatest_pars_fragment:v0,aomap_fragment:_0,aomap_pars_fragment:y0,batching_pars_vertex:M0,batching_vertex:S0,begin_vertex:E0,beginnormal_vertex:b0,bsdfs:w0,iridescence_fragment:T0,bumpmap_pars_fragment:A0,clipping_planes_fragment:R0,clipping_planes_pars_fragment:C0,clipping_planes_pars_vertex:P0,clipping_planes_vertex:I0,color_fragment:D0,color_pars_fragment:L0,color_pars_vertex:U0,color_vertex:N0,common:F0,cube_uv_reflection_fragment:O0,defaultnormal_vertex:B0,displacementmap_pars_vertex:H0,displacementmap_vertex:z0,emissivemap_fragment:G0,emissivemap_pars_fragment:V0,colorspace_fragment:k0,colorspace_pars_fragment:W0,envmap_fragment:X0,envmap_common_pars_fragment:q0,envmap_pars_fragment:Y0,envmap_pars_vertex:Z0,envmap_physical_pars_fragment:rm,envmap_vertex:J0,fog_vertex:$0,fog_pars_vertex:K0,fog_fragment:Q0,fog_pars_fragment:j0,gradientmap_pars_fragment:em,lightmap_pars_fragment:tm,lights_lambert_fragment:nm,lights_lambert_pars_fragment:im,lights_pars_begin:sm,lights_toon_fragment:am,lights_toon_pars_fragment:om,lights_phong_fragment:lm,lights_phong_pars_fragment:cm,lights_physical_fragment:um,lights_physical_pars_fragment:hm,lights_fragment_begin:dm,lights_fragment_maps:fm,lights_fragment_end:pm,lightprobes_pars_fragment:mm,logdepthbuf_fragment:gm,logdepthbuf_pars_fragment:xm,logdepthbuf_pars_vertex:vm,logdepthbuf_vertex:_m,map_fragment:ym,map_pars_fragment:Mm,map_particle_fragment:Sm,map_particle_pars_fragment:Em,metalnessmap_fragment:bm,metalnessmap_pars_fragment:wm,morphinstance_vertex:Tm,morphcolor_vertex:Am,morphnormal_vertex:Rm,morphtarget_pars_vertex:Cm,morphtarget_vertex:Pm,normal_fragment_begin:Im,normal_fragment_maps:Dm,normal_pars_fragment:Lm,normal_pars_vertex:Um,normal_vertex:Nm,normalmap_pars_fragment:Fm,clearcoat_normal_fragment_begin:Om,clearcoat_normal_fragment_maps:Bm,clearcoat_pars_fragment:Hm,iridescence_pars_fragment:zm,opaque_fragment:Gm,packing:Vm,premultiplied_alpha_fragment:km,project_vertex:Wm,dithering_fragment:Xm,dithering_pars_fragment:qm,roughnessmap_fragment:Ym,roughnessmap_pars_fragment:Zm,shadowmap_pars_fragment:Jm,shadowmap_pars_vertex:$m,shadowmap_vertex:Km,shadowmask_pars_fragment:Qm,skinbase_vertex:jm,skinning_pars_vertex:eg,skinning_vertex:tg,skinnormal_vertex:ng,specularmap_fragment:ig,specularmap_pars_fragment:sg,tonemapping_fragment:rg,tonemapping_pars_fragment:ag,transmission_fragment:og,transmission_pars_fragment:lg,uv_pars_fragment:cg,uv_pars_vertex:ug,uv_vertex:hg,worldpos_vertex:dg,background_vert:fg,background_frag:pg,backgroundCube_vert:mg,backgroundCube_frag:gg,cube_vert:xg,cube_frag:vg,depth_vert:_g,depth_frag:yg,distance_vert:Mg,distance_frag:Sg,equirect_vert:Eg,equirect_frag:bg,linedashed_vert:wg,linedashed_frag:Tg,meshbasic_vert:Ag,meshbasic_frag:Rg,meshlambert_vert:Cg,meshlambert_frag:Pg,meshmatcap_vert:Ig,meshmatcap_frag:Dg,meshnormal_vert:Lg,meshnormal_frag:Ug,meshphong_vert:Ng,meshphong_frag:Fg,meshphysical_vert:Og,meshphysical_frag:Bg,meshtoon_vert:Hg,meshtoon_frag:zg,points_vert:Gg,points_frag:Vg,shadow_vert:kg,shadow_frag:Wg,sprite_vert:Xg,sprite_frag:qg},Ye={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xt}},envmap:{envMap:{value:null},envMapRotation:{value:new xt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xt},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new D},probesMax:{value:new D},probesResolution:{value:new D}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0},uvTransform:{value:new xt}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}}},Di={basic:{uniforms:Rn([Ye.common,Ye.specularmap,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.fog]),vertexShader:St.meshbasic_vert,fragmentShader:St.meshbasic_frag},lambert:{uniforms:Rn([Ye.common,Ye.specularmap,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.fog,Ye.lights,{emissive:{value:new ze(0)},envMapIntensity:{value:1}}]),vertexShader:St.meshlambert_vert,fragmentShader:St.meshlambert_frag},phong:{uniforms:Rn([Ye.common,Ye.specularmap,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.fog,Ye.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:St.meshphong_vert,fragmentShader:St.meshphong_frag},standard:{uniforms:Rn([Ye.common,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.roughnessmap,Ye.metalnessmap,Ye.fog,Ye.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag},toon:{uniforms:Rn([Ye.common,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.gradientmap,Ye.fog,Ye.lights,{emissive:{value:new ze(0)}}]),vertexShader:St.meshtoon_vert,fragmentShader:St.meshtoon_frag},matcap:{uniforms:Rn([Ye.common,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.fog,{matcap:{value:null}}]),vertexShader:St.meshmatcap_vert,fragmentShader:St.meshmatcap_frag},points:{uniforms:Rn([Ye.points,Ye.fog]),vertexShader:St.points_vert,fragmentShader:St.points_frag},dashed:{uniforms:Rn([Ye.common,Ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:St.linedashed_vert,fragmentShader:St.linedashed_frag},depth:{uniforms:Rn([Ye.common,Ye.displacementmap]),vertexShader:St.depth_vert,fragmentShader:St.depth_frag},normal:{uniforms:Rn([Ye.common,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,{opacity:{value:1}}]),vertexShader:St.meshnormal_vert,fragmentShader:St.meshnormal_frag},sprite:{uniforms:Rn([Ye.sprite,Ye.fog]),vertexShader:St.sprite_vert,fragmentShader:St.sprite_frag},background:{uniforms:{uvTransform:{value:new xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:St.background_vert,fragmentShader:St.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new xt}},vertexShader:St.backgroundCube_vert,fragmentShader:St.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:St.cube_vert,fragmentShader:St.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:St.equirect_vert,fragmentShader:St.equirect_frag},distance:{uniforms:Rn([Ye.common,Ye.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:St.distance_vert,fragmentShader:St.distance_frag},shadow:{uniforms:Rn([Ye.lights,Ye.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:St.shadow_vert,fragmentShader:St.shadow_frag}};Di.physical={uniforms:Rn([Di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xt},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xt},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xt},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xt},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xt},anisotropyVector:{value:new Ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new xt}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag};var tc={r:0,b:0,g:0},Yg=new st,uf=new xt;uf.set(-1,0,0,0,1,0,0,0,1);function Zg(i,e,t,n,s,r){let a=new ze(0),o=s===!0?0:1,c,l,h=null,p=0,d=null;function u(E){let w=E.isScene===!0?E.background:null;if(w&&w.isTexture){let v=E.backgroundBlurriness>0;w=e.get(w,v)}return w}function f(E){let w=!1,v=u(E);v===null?g(a,o):v&&v.isColor&&(g(v,1),w=!0);let y=i.xr.getEnvironmentBlendMode();y==="additive"?t.buffers.color.setClear(0,0,0,1,r):y==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(E,w){let v=u(w);v&&(v.isCubeTexture||v.mapping===wa)?(l===void 0&&(l=new Re(new Pt(1,1,1),new It({name:"BackgroundCubeMaterial",uniforms:Rs(Di.backgroundCube.uniforms),vertexShader:Di.backgroundCube.vertexShader,fragmentShader:Di.backgroundCube.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(y,T,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=v,l.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Yg.makeRotationFromEuler(w.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(uf),l.material.toneMapped=Tt.getTransfer(v.colorSpace)!==Lt,(h!==v||p!==v.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,p=v.version,d=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Re(new zt(2,2),new It({name:"BackgroundMaterial",uniforms:Rs(Di.background.uniforms),vertexShader:Di.background.vertexShader,fragmentShader:Di.background.fragmentShader,side:as,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=Tt.getTransfer(v.colorSpace)!==Lt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||p!==v.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,p=v.version,d=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function g(E,w){E.getRGB(tc,wu(i)),t.buffers.color.setClear(tc.r,tc.g,tc.b,w,r)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,w=1){a.set(E),o=w,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(E){o=E,g(a,o)},render:f,addToRenderList:_,dispose:m}}function Jg(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(U,S,I,A,N){let V=!1,B=p(U,A,I,S);r!==B&&(r=B,l(r.object)),V=u(U,A,I,N),V&&f(U,A,I,N),N!==null&&e.update(N,i.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,v(U,S,I,A),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function c(){return i.createVertexArray()}function l(U){return i.bindVertexArray(U)}function h(U){return i.deleteVertexArray(U)}function p(U,S,I,A){let N=A.wireframe===!0,V=n[S.id];V===void 0&&(V={},n[S.id]=V);let B=U.isInstancedMesh===!0?U.id:0,z=V[B];z===void 0&&(z={},V[B]=z);let O=z[I.id];O===void 0&&(O={},z[I.id]=O);let F=O[N];return F===void 0&&(F=d(c()),O[N]=F),F}function d(U){let S=[],I=[],A=[];for(let N=0;N<t;N++)S[N]=0,I[N]=0,A[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:I,attributeDivisors:A,object:U,attributes:{},index:null}}function u(U,S,I,A){let N=r.attributes,V=S.attributes,B=0,z=I.getAttributes();for(let O in z)if(z[O].location>=0){let X=N[O],re=V[O];if(re===void 0&&(O==="instanceMatrix"&&U.instanceMatrix&&(re=U.instanceMatrix),O==="instanceColor"&&U.instanceColor&&(re=U.instanceColor)),X===void 0||X.attribute!==re||re&&X.data!==re.data)return!0;B++}return r.attributesNum!==B||r.index!==A}function f(U,S,I,A){let N={},V=S.attributes,B=0,z=I.getAttributes();for(let O in z)if(z[O].location>=0){let X=V[O];X===void 0&&(O==="instanceMatrix"&&U.instanceMatrix&&(X=U.instanceMatrix),O==="instanceColor"&&U.instanceColor&&(X=U.instanceColor));let re={};re.attribute=X,X&&X.data&&(re.data=X.data),N[O]=re,B++}r.attributes=N,r.attributesNum=B,r.index=A}function _(){let U=r.newAttributes;for(let S=0,I=U.length;S<I;S++)U[S]=0}function g(U){m(U,0)}function m(U,S){let I=r.newAttributes,A=r.enabledAttributes,N=r.attributeDivisors;I[U]=1,A[U]===0&&(i.enableVertexAttribArray(U),A[U]=1),N[U]!==S&&(i.vertexAttribDivisor(U,S),N[U]=S)}function E(){let U=r.newAttributes,S=r.enabledAttributes;for(let I=0,A=S.length;I<A;I++)S[I]!==U[I]&&(i.disableVertexAttribArray(I),S[I]=0)}function w(U,S,I,A,N,V,B){B===!0?i.vertexAttribIPointer(U,S,I,N,V):i.vertexAttribPointer(U,S,I,A,N,V)}function v(U,S,I,A){_();let N=A.attributes,V=I.getAttributes(),B=S.defaultAttributeValues;for(let z in V){let O=V[z];if(O.location>=0){let F=N[z];if(F===void 0&&(z==="instanceMatrix"&&U.instanceMatrix&&(F=U.instanceMatrix),z==="instanceColor"&&U.instanceColor&&(F=U.instanceColor)),F!==void 0){let X=F.normalized,re=F.itemSize,pe=e.get(F);if(pe===void 0)continue;let _e=pe.buffer,De=pe.type,Xe=pe.bytesPerElement,$=De===i.INT||De===i.UNSIGNED_INT||F.gpuType===gl;if(F.isInterleavedBufferAttribute){let ae=F.data,ve=ae.stride,me=F.offset;if(ae.isInstancedInterleavedBuffer){for(let Se=0;Se<O.locationSize;Se++)m(O.location+Se,ae.meshPerAttribute);U.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Se=0;Se<O.locationSize;Se++)g(O.location+Se);i.bindBuffer(i.ARRAY_BUFFER,_e);for(let Se=0;Se<O.locationSize;Se++)w(O.location+Se,re/O.locationSize,De,X,ve*Xe,(me+re/O.locationSize*Se)*Xe,$)}else{if(F.isInstancedBufferAttribute){for(let ae=0;ae<O.locationSize;ae++)m(O.location+ae,F.meshPerAttribute);U.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let ae=0;ae<O.locationSize;ae++)g(O.location+ae);i.bindBuffer(i.ARRAY_BUFFER,_e);for(let ae=0;ae<O.locationSize;ae++)w(O.location+ae,re/O.locationSize,De,X,re*Xe,re/O.locationSize*ae*Xe,$)}}else if(B!==void 0){let X=B[z];if(X!==void 0)switch(X.length){case 2:i.vertexAttrib2fv(O.location,X);break;case 3:i.vertexAttrib3fv(O.location,X);break;case 4:i.vertexAttrib4fv(O.location,X);break;default:i.vertexAttrib1fv(O.location,X)}}}}E()}function y(){b();for(let U in n){let S=n[U];for(let I in S){let A=S[I];for(let N in A){let V=A[N];for(let B in V)h(V[B].object),delete V[B];delete A[N]}}delete n[U]}}function T(U){if(n[U.id]===void 0)return;let S=n[U.id];for(let I in S){let A=S[I];for(let N in A){let V=A[N];for(let B in V)h(V[B].object),delete V[B];delete A[N]}}delete n[U.id]}function P(U){for(let S in n){let I=n[S];for(let A in I){let N=I[A];if(N[U.id]===void 0)continue;let V=N[U.id];for(let B in V)h(V[B].object),delete V[B];delete N[U.id]}}}function x(U){for(let S in n){let I=n[S],A=U.isInstancedMesh===!0?U.id:0,N=I[A];if(N!==void 0){for(let V in N){let B=N[V];for(let z in B)h(B[z].object),delete B[z];delete N[V]}delete I[A],Object.keys(I).length===0&&delete n[S]}}}function b(){R(),a=!0,r!==s&&(r=s,l(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:b,resetDefaultState:R,dispose:y,releaseStatesOfGeometry:T,releaseStatesOfObject:x,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:g,disableUnusedAttributes:E}}function $g(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function o(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let d=0;for(let u=0;u<h;u++)d+=l[u];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Kg(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let P=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(P){return!(P!==En&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){let x=P===Qt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==fn&&P!==ei&&!x&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(ut("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let p=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&ut("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:p,reversedDepthBuffer:d,maxTextures:u,maxVertexTextures:f,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:E,maxVaryings:w,maxFragmentUniforms:v,maxSamples:y,samples:T}}function Qg(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Wn,o=new xt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,d){let u=p.length!==0||d||n!==0||s;return s=d,n=p.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,d){t=h(p,d,0)},this.setState=function(p,d,u){let f=p.clippingPlanes,_=p.clipIntersection,g=p.clipShadows,m=i.get(p);if(!s||f===null||f.length===0||r&&!g)r?h(null):l();else{let E=r?0:n,w=E*4,v=m.clippingState||null;c.value=v,v=h(f,d,w,u);for(let y=0;y!==w;++y)v[y]=t[y];m.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(p,d,u,f){let _=p!==null?p.length:0,g=null;if(_!==0){if(g=c.value,f!==!0||g===null){let m=u+_*4,E=d.matrixWorldInverse;o.getNormalMatrix(E),(g===null||g.length<m)&&(g=new Float32Array(m));for(let w=0,v=u;w!==_;++w,v+=4)a.copy(p[w]).applyMatrix4(E,o),a.normal.toArray(g,v),g[v+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}var vr=4,jg=6,ex=20,tx=256,Ua=new rs,Gd=new ze,Uu=null,Nu=0,Fu=0,Ou=!1,nx=new D,Cs=new D,yr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=nx}=r;Uu=this._renderer.getRenderTarget(),Nu=this._renderer.getActiveCubeFace(),Fu=this._renderer.getActiveMipmapLevel(),Ou=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Uu,Nu,Fu),this._renderer.xr.enabled=Ou,e.scissorTest=!1,xr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===cs||e.mapping===As?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Uu=this._renderer.getRenderTarget(),Nu=this._renderer.getActiveCubeFace(),Fu=this._renderer.getActiveMipmapLevel(),Ou=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:Qt,format:En,colorSpace:Vr,depthBuffer:!1},s=Vd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vd(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=ix(r)),this._blurMaterial=rx(r,e,t),this._ggxMaterial=sx(r,e,t)}return s}_compileMaterial(e){let t=new Re(new Mt,e);this._renderer.compile(t,Ua)}_sceneToCubeUV(e,t,n,s,r){let c=new vn(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,d=p.autoClear,u=p.toneMapping;p.getClearColor(Gd),p.toneMapping=Yn,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(s),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Re(new Pt,new Ht({name:"PMREM.Background",side:Mn,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,g=_.material,m=!1,E=e.background;E?E.isColor&&(g.color.copy(E),e.background=null,m=!0):(g.color.copy(Gd),m=!0);for(let w=0;w<6;w++){let v=w%3;v===0?(c.up.set(0,l[w],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[w],r.y,r.z)):v===1?(c.up.set(0,0,l[w]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[w],r.z)):(c.up.set(0,l[w],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[w]));let y=this._cubeSize;xr(s,v*y,w>2?y:0,y,y),p.setRenderTarget(s),m&&p.render(_,c),p.render(e,c)}p.toneMapping=u,p.autoClear=d,e.background=E}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===cs||e.mapping===As;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kd());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;xr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Ua)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,l=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),p=Math.sqrt(l*l-h*h),d=l*1.25,u=p*d,{_lodMax:f}=this,_=this._sizeLods[n],g=3*_*(n>f-vr?n-f+vr:0),m=4*(this._cubeSize-_);c.envMap.value=e.texture,c.roughness.value=u,c.mipInt.value=f-t,xr(r,g,m,3*_,2*_),s.setRenderTarget(r),s.render(o,Ua),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=f-n,xr(e,g,m,3*_,2*_),s.setRenderTarget(e),s.render(o,Ua)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[s];c.material=o;let l=o.uniforms;l.envMap.value=e.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],p=3*h*(s>this._lodMax-vr?s-this._lodMax+vr:0),d=4*(this._cubeSize-h);xr(t,p,d,3*h,2*h),a.setRenderTarget(t),a.render(c,Ua)}};function ix(i){let e=[],t=[],n=i,s=i-vr+1+jg;for(let r=0;r<s;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),c=-o,l=1+o,h=[c,c,l,c,l,l,c,c,l,l,c,l],p=6,d=6,u=3,f=new Float32Array(u*d*p),_=new Float32Array(u*d*p);for(let m=0;m<p;m++){let E=m%3*2/3-1,w=m>2?0:-1,v=[E,w,0,E+2/3,w,0,E+2/3,w+1,0,E,w,0,E+2/3,w+1,0,E,w+1,0];f.set(v,u*d*m);for(let y=0;y<d;y++){let T=h[y*2]*2-1,P=h[y*2+1]*2-1;m===0?Cs.set(1,P,T):m===1?Cs.set(-T,1,-P):m===2?Cs.set(-T,P,1):m===3?Cs.set(-1,P,-T):m===4?Cs.set(-T,-1,P):Cs.set(T,P,-1),Cs.toArray(_,(m*d+y)*u)}}let g=new Mt;g.setAttribute("position",new gt(f,u)),g.setAttribute("outputDirection",new gt(_,u)),t.push(new Re(g,null)),n>vr&&n--}return{lodMeshes:t,sizeLods:e}}function Vd(i,e,t){let n=new Xt(i,e,t);return n.texture.mapping=wa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function xr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function sx(i,e,t){return new It({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:tx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:rc(),fragmentShader:`

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
		`,blending:tn,depthTest:!1,depthWrite:!1})}function rx(i,e,t){return new It({name:"SphericalGaussianBlur",defines:{SAMPLES:ex,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:rc(),fragmentShader:`

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
		`,blending:tn,depthTest:!1,depthWrite:!1})}function kd(){return new It({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rc(),fragmentShader:`

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
		`,blending:tn,depthTest:!1,depthWrite:!1})}function Wd(){return new It({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:tn,depthTest:!1,depthWrite:!1})}function rc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var ic=class extends Xt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Qr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Pt(5,5,5),r=new It({name:"CubemapFromEquirect",uniforms:Rs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Mn,blending:tn});r.uniforms.tEquirect.value=t;let a=new Re(s,r),o=t.minFilter;return t.minFilter===Ci&&(t.minFilter=rn),new cl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};function ax(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,u=!1){return d==null?null:u?a(d):r(d)}function r(d){if(d&&d.isTexture){let u=d.mapping;if(u===fl||u===pl)if(e.has(d)){let f=e.get(d).texture;return o(f,d.mapping)}else{let f=d.image;if(f&&f.height>0){let _=new ic(f.height);return _.fromEquirectangularTexture(i,d),e.set(d,_),d.addEventListener("dispose",l),o(_.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){let u=d.mapping,f=u===fl||u===pl,_=u===cs||u===As;if(f||_){let g=t.get(d),m=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return n===null&&(n=new yr(i)),g=f?n.fromEquirectangular(d,g):n.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{let E=d.image;return f&&E&&E.height>0||_&&E&&c(E)?(n===null&&(n=new yr(i)),g=f?n.fromEquirectangular(d):n.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",h),g.texture):null}}}return d}function o(d,u){return u===fl?d.mapping=cs:u===pl&&(d.mapping=As),d}function c(d){let u=0,f=6;for(let _=0;_<f;_++)d[_]!==void 0&&u++;return u===f}function l(d){let u=d.target;u.removeEventListener("dispose",l);let f=e.get(u);f!==void 0&&(e.delete(u),f.dispose())}function h(d){let u=d.target;u.removeEventListener("dispose",h);let f=t.get(u);f!==void 0&&(t.delete(u),f.dispose())}function p(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:p}}function ox(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&vs("WebGLRenderer: "+n+" extension not supported."),s}}}function lx(i,e,t,n){let s={},r=new WeakMap;function a(p){let d=p.target;d.index!==null&&e.remove(d.index);for(let f in d.attributes)e.remove(d.attributes[f]);d.removeEventListener("dispose",a),delete s[d.id];let u=r.get(d);u&&(e.remove(u),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(p,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function c(p){let d=p.attributes;for(let u in d)e.update(d[u],i.ARRAY_BUFFER)}function l(p){let d=[],u=p.index,f=p.attributes.position,_=0;if(f===void 0)return;if(u!==null){let E=u.array;_=u.version;for(let w=0,v=E.length;w<v;w+=3){let y=E[w+0],T=E[w+1],P=E[w+2];d.push(y,T,T,P,P,y)}}else{let E=f.array;_=f.version;for(let w=0,v=E.length/3-1;w<v;w+=3){let y=w+0,T=w+1,P=w+2;d.push(y,T,T,P,P,y)}}let g=new(f.count>=65535?$r:Jr)(d,1);g.version=_;let m=r.get(p);m&&e.remove(m),r.set(p,g)}function h(p){let d=r.get(p);if(d){let u=p.index;u!==null&&d.version<u.version&&l(p)}else l(p);return r.get(p)}return{get:o,update:c,getWireframeAttribute:h}}function cx(i,e,t){let n;function s(p){n=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function c(p,d){i.drawElements(n,d,r,p*a),t.update(d,n,1)}function l(p,d,u){u!==0&&(i.drawElementsInstanced(n,d,r,p*a,u),t.update(d,n,u))}function h(p,d,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,p,0,u);let _=0;for(let g=0;g<u;g++)_+=d[g];t.update(_,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function ux(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:dt("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function hx(i,e,t){let n=new WeakMap,s=new Wt;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==p){let b=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();let u=o.morphAttributes.position!==void 0,f=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],E=o.morphAttributes.color||[],w=0;u===!0&&(w=1),f===!0&&(w=2),_===!0&&(w=3);let v=o.attributes.position.count*w,y=1;v>e.maxTextureSize&&(y=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let T=new Float32Array(v*y*4*p),P=new Yr(T,v,y,p);P.type=ei,P.needsUpdate=!0;let x=w*4;for(let R=0;R<p;R++){let U=g[R],S=m[R],I=E[R],A=v*y*4*R;for(let N=0;N<U.count;N++){let V=N*x;u===!0&&(s.fromBufferAttribute(U,N),T[A+V+0]=s.x,T[A+V+1]=s.y,T[A+V+2]=s.z,T[A+V+3]=0),f===!0&&(s.fromBufferAttribute(S,N),T[A+V+4]=s.x,T[A+V+5]=s.y,T[A+V+6]=s.z,T[A+V+7]=0),_===!0&&(s.fromBufferAttribute(I,N),T[A+V+8]=s.x,T[A+V+9]=s.y,T[A+V+10]=s.z,T[A+V+11]=I.itemSize===4?s.w:1)}}d={count:p,texture:P,size:new Ae(v,y)},n.set(o,d),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let u=0;for(let _=0;_<l.length;_++)u+=l[_];let f=o.morphTargetsRelative?1:1-u;c.getUniforms().setValue(i,"morphTargetBaseInfluence",f),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function dx(i,e,t,n,s){let r=new WeakMap;function a(l){let h=s.render.frame,p=l.geometry,d=e.get(l,p);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let u=l.skeleton;r.get(u)!==h&&(u.update(),r.set(u,h))}return d}function o(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var fx={[_a]:"LINEAR_TONE_MAPPING",[ya]:"REINHARD_TONE_MAPPING",[Ma]:"CINEON_TONE_MAPPING",[ls]:"ACES_FILMIC_TONE_MAPPING",[Ea]:"AGX_TONE_MAPPING",[ba]:"NEUTRAL_TONE_MAPPING",[Sa]:"CUSTOM_TONE_MAPPING"};function px(i,e,t,n,s,r){let a=new Xt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=new Mt;l.setAttribute("position",new yt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new yt([0,2,0,0,2,0],2));let h=new dr({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new Re(l,h),d=new rs(-1,1,1,-1,0,1),u=null,f=null,_=!1,g,m=null,E=[],w=!1;this.setSize=function(v,y){a.setSize(v,y),o!==null&&o.setSize(v,y),c!==null&&c.setSize(v,y);for(let T=0;T<E.length;T++){let P=E[T];P.setSize&&P.setSize(v,y)}},this.setEffects=function(v){E=v,w=E.length>0&&E[0].isRenderPass===!0;let y=a.width,T=a.height;E.length>0&&o===null&&(o=new Xt(y,T,{type:Qt,depthBuffer:!1,stencilBuffer:!1}),c=new Xt(y,T,{type:Qt,depthBuffer:!1,stencilBuffer:!1}));for(let P=0;P<E.length;P++){let x=E[P];x.setSize&&x.setSize(y,T)}},this.begin=function(v,y){if(_||v.toneMapping===Yn&&E.length===0)return!1;if(m=y,y!==null){let T=y.width,P=y.height;(a.width!==T||a.height!==P)&&this.setSize(T,P)}return w===!1&&v.setRenderTarget(a),g=v.toneMapping,v.toneMapping=Yn,!0},this.hasRenderPass=function(){return w},this.end=function(v,y){v.toneMapping=g,_=!0;let T=a,P=o;for(let x=0;x<E.length;x++){let b=E[x];b.enabled!==!1&&(b.render(v,P,T,y),b.needsSwap!==!1&&(T=P,P=P===o?c:o))}if(u!==v.outputColorSpace||f!==v.toneMapping){u=v.outputColorSpace,f=v.toneMapping,h.defines={},Tt.getTransfer(u)===Lt&&(h.defines.SRGB_TRANSFER="");let x=fx[f];x&&(h.defines[x]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=T.texture,v.setRenderTarget(m),v.render(p,d),m=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),h.dispose()}}var hf=new In,zu=new Qn(1,1),df=new Yr,ff=new Vo,pf=new Qr,Xd=[],qd=[],Yd=new Float32Array(16),Zd=new Float32Array(9),Jd=new Float32Array(4);function Mr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Xd[s];if(r===void 0&&(r=new Float32Array(s),Xd[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function pn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function mn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ac(i,e){let t=qd[e];t===void 0&&(t=new Int32Array(e),qd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function mx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function gx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;i.uniform2fv(this.addr,e),mn(t,e)}}function xx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(pn(t,e))return;i.uniform3fv(this.addr,e),mn(t,e)}}function vx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;i.uniform4fv(this.addr,e),mn(t,e)}}function _x(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(pn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,n))return;Jd.set(n),i.uniformMatrix2fv(this.addr,!1,Jd),mn(t,n)}}function yx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(pn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,n))return;Zd.set(n),i.uniformMatrix3fv(this.addr,!1,Zd),mn(t,n)}}function Mx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(pn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,n))return;Yd.set(n),i.uniformMatrix4fv(this.addr,!1,Yd),mn(t,n)}}function Sx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Ex(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;i.uniform2iv(this.addr,e),mn(t,e)}}function bx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pn(t,e))return;i.uniform3iv(this.addr,e),mn(t,e)}}function wx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;i.uniform4iv(this.addr,e),mn(t,e)}}function Tx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Ax(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;i.uniform2uiv(this.addr,e),mn(t,e)}}function Rx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pn(t,e))return;i.uniform3uiv(this.addr,e),mn(t,e)}}function Cx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;i.uniform4uiv(this.addr,e),mn(t,e)}}function Px(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(zu.compareFunction=t.isReversedDepthBuffer()?ec:jl,r=zu):r=hf,t.setTexture2D(e||r,s)}function Ix(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||ff,s)}function Dx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||pf,s)}function Lx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||df,s)}function Ux(i){switch(i){case 5126:return mx;case 35664:return gx;case 35665:return xx;case 35666:return vx;case 35674:return _x;case 35675:return yx;case 35676:return Mx;case 5124:case 35670:return Sx;case 35667:case 35671:return Ex;case 35668:case 35672:return bx;case 35669:case 35673:return wx;case 5125:return Tx;case 36294:return Ax;case 36295:return Rx;case 36296:return Cx;case 35678:case 36198:case 36298:case 36306:case 35682:return Px;case 35679:case 36299:case 36307:return Ix;case 35680:case 36300:case 36308:case 36293:return Dx;case 36289:case 36303:case 36311:case 36292:return Lx}}function Nx(i,e){i.uniform1fv(this.addr,e)}function Fx(i,e){let t=Mr(e,this.size,2);i.uniform2fv(this.addr,t)}function Ox(i,e){let t=Mr(e,this.size,3);i.uniform3fv(this.addr,t)}function Bx(i,e){let t=Mr(e,this.size,4);i.uniform4fv(this.addr,t)}function Hx(i,e){let t=Mr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function zx(i,e){let t=Mr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Gx(i,e){let t=Mr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Vx(i,e){i.uniform1iv(this.addr,e)}function kx(i,e){i.uniform2iv(this.addr,e)}function Wx(i,e){i.uniform3iv(this.addr,e)}function Xx(i,e){i.uniform4iv(this.addr,e)}function qx(i,e){i.uniform1uiv(this.addr,e)}function Yx(i,e){i.uniform2uiv(this.addr,e)}function Zx(i,e){i.uniform3uiv(this.addr,e)}function Jx(i,e){i.uniform4uiv(this.addr,e)}function $x(i,e,t){let n=this.cache,s=e.length,r=ac(t,s);pn(n,r)||(i.uniform1iv(this.addr,r),mn(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=zu:a=hf;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Kx(i,e,t){let n=this.cache,s=e.length,r=ac(t,s);pn(n,r)||(i.uniform1iv(this.addr,r),mn(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||ff,r[a])}function Qx(i,e,t){let n=this.cache,s=e.length,r=ac(t,s);pn(n,r)||(i.uniform1iv(this.addr,r),mn(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||pf,r[a])}function jx(i,e,t){let n=this.cache,s=e.length,r=ac(t,s);pn(n,r)||(i.uniform1iv(this.addr,r),mn(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||df,r[a])}function ev(i){switch(i){case 5126:return Nx;case 35664:return Fx;case 35665:return Ox;case 35666:return Bx;case 35674:return Hx;case 35675:return zx;case 35676:return Gx;case 5124:case 35670:return Vx;case 35667:case 35671:return kx;case 35668:case 35672:return Wx;case 35669:case 35673:return Xx;case 5125:return qx;case 36294:return Yx;case 36295:return Zx;case 36296:return Jx;case 35678:case 36198:case 36298:case 36306:case 35682:return $x;case 35679:case 36299:case 36307:return Kx;case 35680:case 36300:case 36308:case 36293:return Qx;case 36289:case 36303:case 36311:case 36292:return jx}}var Gu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ux(t.type)}},Vu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ev(t.type)}},ku=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Bu=/(\w+)(\])?(\[|\.)?/g;function $d(i,e){i.seq.push(e),i.map[e.id]=e}function tv(i,e,t){let n=i.name,s=n.length;for(Bu.lastIndex=0;;){let r=Bu.exec(n),a=Bu.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){$d(t,l===void 0?new Gu(o,i,e):new Vu(o,i,e));break}else{let p=t.map[o];p===void 0&&(p=new ku(o),$d(t,p)),t=p}}}var _r=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);tv(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Kd(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var nv=37297,iv=0;function sv(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Qd=new xt;function rv(i){Tt._getMatrix(Qd,Tt.workingColorSpace,i);let e=`mat3( ${Qd.elements.map(t=>t.toFixed(4))} )`;switch(Tt.getTransfer(i)){case kr:return[e,"LinearTransferOETF"];case Lt:return[e,"sRGBTransferOETF"];default:return ut("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function jd(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+sv(i.getShaderSource(e),o)}else return r}function av(i,e){let t=rv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var ov={[_a]:"Linear",[ya]:"Reinhard",[Ma]:"Cineon",[ls]:"ACESFilmic",[Ea]:"AgX",[ba]:"Neutral",[Sa]:"Custom"};function lv(i,e){let t=ov[e];return t===void 0?(ut("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var nc=new D;function cv(){Tt.getLuminanceCoefficients(nc);let i=nc.x.toFixed(4),e=nc.y.toFixed(4),t=nc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function uv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fa).join(`
`)}function hv(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function dv(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Fa(i){return i!==""}function ef(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function tf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var fv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wu(i){return i.replace(fv,mv)}var pv=new Map;function mv(i,e){let t=St[e];if(t===void 0){let n=pv.get(e);if(n!==void 0)t=St[n],ut('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Wu(t)}var gv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nf(i){return i.replace(gv,xv)}function xv(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function sf(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var vv={[ws]:"SHADOWMAP_TYPE_PCF",[mr]:"SHADOWMAP_TYPE_VSM"};function _v(i){return vv[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var yv={[cs]:"ENVMAP_TYPE_CUBE",[As]:"ENVMAP_TYPE_CUBE",[wa]:"ENVMAP_TYPE_CUBE_UV"};function Mv(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":yv[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Sv={[As]:"ENVMAP_MODE_REFRACTION"};function Ev(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Sv[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var bv={[pu]:"ENVMAP_BLENDING_MULTIPLY",[xd]:"ENVMAP_BLENDING_MIX",[vd]:"ENVMAP_BLENDING_ADD"};function wv(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":bv[i.combine]||"ENVMAP_BLENDING_NONE"}function Tv(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Av(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=_v(t),l=Mv(t),h=Ev(t),p=wv(t),d=Tv(t),u=uv(t),f=hv(r),_=s.createProgram(),g,m,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Fa).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Fa).join(`
`),m.length>0&&(m+=`
`)):(g=[sf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fa).join(`
`),m=[sf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Yn?"#define TONE_MAPPING":"",t.toneMapping!==Yn?St.tonemapping_pars_fragment:"",t.toneMapping!==Yn?lv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",St.colorspace_pars_fragment,av("linearToOutputTexel",t.outputColorSpace),cv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Fa).join(`
`)),a=Wu(a),a=ef(a,t),a=tf(a,t),o=Wu(o),o=ef(o,t),o=tf(o,t),a=nf(a),o=nf(o),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,g=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===Eu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Eu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let w=E+g+a,v=E+m+o,y=Kd(s,s.VERTEX_SHADER,w),T=Kd(s,s.FRAGMENT_SHADER,v);s.attachShader(_,y),s.attachShader(_,T),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function P(U){if(i.debug.checkShaderErrors){let S=s.getProgramInfoLog(_)||"",I=s.getShaderInfoLog(y)||"",A=s.getShaderInfoLog(T)||"",N=S.trim(),V=I.trim(),B=A.trim(),z=!0,O=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,y,T);else{let F=jd(s,y,"vertex"),X=jd(s,T,"fragment");dt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+N+`
`+F+`
`+X)}else N!==""?ut("WebGLProgram: Program Info Log:",N):(V===""||B==="")&&(O=!1);O&&(U.diagnostics={runnable:z,programLog:N,vertexShader:{log:V,prefix:g},fragmentShader:{log:B,prefix:m}})}s.deleteShader(y),s.deleteShader(T),x=new _r(s,_),b=dv(s,_)}let x;this.getUniforms=function(){return x===void 0&&P(this),x};let b;this.getAttributes=function(){return b===void 0&&P(this),b};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(_,nv)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=iv++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=y,this.fragmentShader=T,this}var Rv=0,Xu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new qu(e),t.set(e,n)),n}},qu=class{constructor(e){this.id=Rv++,this.code=e,this.usedTimes=0}};function Cv(i){return i===hs||i===Ia||i===Da}function Pv(i,e,t,n,s,r){let a=new ir,o=new Xu,c=new Set,l=[],h=new Map,p=n.logarithmicDepthBuffer,d=n.precision,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return c.add(x),x===0?"uv":`uv${x}`}function _(x,b,R,U,S,I){let A=U.fog,N=S.geometry,V=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?U.environment:null,B=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,z=e.get(x.envMap||V,B),O=z&&z.mapping===wa?z.image.height:null,F=u[x.type];x.precision!==null&&(d=n.getMaxPrecision(x.precision),d!==x.precision&&ut("WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));let X=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,re=X!==void 0?X.length:0,pe=0;N.morphAttributes.position!==void 0&&(pe=1),N.morphAttributes.normal!==void 0&&(pe=2),N.morphAttributes.color!==void 0&&(pe=3);let _e,De,Xe,$;if(F){let Ke=Di[F];_e=Ke.vertexShader,De=Ke.fragmentShader}else{_e=x.vertexShader,De=x.fragmentShader;let Ke=o.getVertexShaderStage(x),it=o.getFragmentShaderStage(x);o.update(x,Ke,it),Xe=Ke.id,$=it.id}let ae=i.getRenderTarget(),ve=i.state.buffers.depth.getReversed(),me=S.isInstancedMesh===!0,Se=S.isBatchedMesh===!0,W=!!x.map,we=!!x.matcap,j=!!z,le=!!x.aoMap,Z=!!x.lightMap,ee=!!x.bumpMap&&x.wireframe===!1,oe=!!x.normalMap,be=!!x.displacementMap,Ee=!!x.emissiveMap,Oe=!!x.metalnessMap,Ne=!!x.roughnessMap,G=x.anisotropy>0,ot=x.clearcoat>0,et=x.dispersion>0,L=x.retroreflectivity>0,M=x.iridescence>0,K=x.sheen>0,te=x.transmission>0,ce=G&&!!x.anisotropyMap,Le=ot&&!!x.clearcoatMap,Fe=ot&&!!x.clearcoatNormalMap,fe=ot&&!!x.clearcoatRoughnessMap,ue=M&&!!x.iridescenceMap,Be=M&&!!x.iridescenceThicknessMap,tt=K&&!!x.sheenColorMap,Ge=K&&!!x.sheenRoughnessMap,He=!!x.specularMap,Ze=!!x.specularColorMap,Qe=!!x.specularIntensityMap,at=te&&!!x.transmissionMap,q=te&&!!x.thicknessMap,Ue=!!x.gradientMap,Me=!!x.alphaMap,Ve=x.alphaTest>0,We=!!x.alphaHash,k=!!x.extensions,Te=Yn;x.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(Te=i.toneMapping);let ye={shaderID:F,shaderType:x.type,shaderName:x.name,vertexShader:_e,fragmentShader:De,defines:x.defines,customVertexShaderID:Xe,customFragmentShaderID:$,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:Se,batchingColor:Se&&S._colorsTexture!==null,instancing:me,instancingColor:me&&S.instanceColor!==null,instancingMorph:me&&S.morphTexture!==null,outputColorSpace:ae===null?i.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:Tt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:W,matcap:we,envMap:j,envMapMode:j&&z.mapping,envMapCubeUVHeight:O,aoMap:le,lightMap:Z,bumpMap:ee,normalMap:oe,displacementMap:be,emissiveMap:Ee,normalMapObjectSpace:oe&&x.normalMapType===Md,normalMapTangentSpace:oe&&x.normalMapType===La,packedNormalMap:oe&&x.normalMapType===La&&Cv(x.normalMap.format),metalnessMap:Oe,roughnessMap:Ne,anisotropy:G,anisotropyMap:ce,clearcoat:ot,clearcoatMap:Le,clearcoatNormalMap:Fe,clearcoatRoughnessMap:fe,dispersion:et,retroreflection:L,iridescence:M,iridescenceMap:ue,iridescenceThicknessMap:Be,sheen:K,sheenColorMap:tt,sheenRoughnessMap:Ge,specularMap:He,specularColorMap:Ze,specularIntensityMap:Qe,transmission:te,transmissionMap:at,thicknessMap:q,gradientMap:Ue,opaque:x.transparent===!1&&x.blending===os&&x.alphaToCoverage===!1,alphaMap:Me,alphaTest:Ve,alphaHash:We,combine:x.combine,mapUv:W&&f(x.map.channel),aoMapUv:le&&f(x.aoMap.channel),lightMapUv:Z&&f(x.lightMap.channel),bumpMapUv:ee&&f(x.bumpMap.channel),normalMapUv:oe&&f(x.normalMap.channel),displacementMapUv:be&&f(x.displacementMap.channel),emissiveMapUv:Ee&&f(x.emissiveMap.channel),metalnessMapUv:Oe&&f(x.metalnessMap.channel),roughnessMapUv:Ne&&f(x.roughnessMap.channel),anisotropyMapUv:ce&&f(x.anisotropyMap.channel),clearcoatMapUv:Le&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:Fe&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&f(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:Be&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:tt&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&f(x.sheenRoughnessMap.channel),specularMapUv:He&&f(x.specularMap.channel),specularColorMapUv:Ze&&f(x.specularColorMap.channel),specularIntensityMapUv:Qe&&f(x.specularIntensityMap.channel),transmissionMapUv:at&&f(x.transmissionMap.channel),thicknessMapUv:q&&f(x.thicknessMap.channel),alphaMapUv:Me&&f(x.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(oe||G),vertexNormals:!!N.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:S.isPoints===!0&&!!N.attributes.uv&&(W||Me),fog:!!A,useFog:x.fog===!0,fogExp2:!!A&&A.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||N.attributes.normal===void 0&&oe===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:ve,skinning:S.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:pe,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:I.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Te,decodeVideoTexture:W&&x.map.isVideoTexture===!0&&Tt.getTransfer(x.map.colorSpace)===Lt,decodeVideoTextureEmissive:Ee&&x.emissiveMap.isVideoTexture===!0&&Tt.getTransfer(x.emissiveMap.colorSpace)===Lt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===dn,flipSided:x.side===Mn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:k&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(k&&x.extensions.multiDraw===!0||Se)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ye.vertexUv1s=c.has(1),ye.vertexUv2s=c.has(2),ye.vertexUv3s=c.has(3),c.clear(),ye}function g(x){let b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(let R in x.defines)b.push(R),b.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(m(b,x),E(b,x),b.push(i.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function m(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapCubeUVHeight),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.morphAttributeCount),x.push(b.numSunLights),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numSunLightShadows),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function E(x,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function w(x){let b=u[x.type],R;if(b){let U=Di[b];R=Dn.clone(U.uniforms)}else R=x.uniforms;return R}function v(x,b){let R=h.get(b);return R!==void 0?++R.usedTimes:(R=new Av(i,b,x,s),l.push(R),h.set(b,R)),R}function y(x){if(--x.usedTimes===0){let b=l.indexOf(x);l[b]=l[l.length-1],l.pop(),h.delete(x.cacheKey),x.destroy()}}function T(x){o.remove(x)}function P(){o.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:w,acquireProgram:v,releaseProgram:y,releaseShaderCache:T,programs:l,dispose:P}}function Iv(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Dv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function rf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function af(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d){let u=0;return d.isInstancedMesh&&(u+=2),d.isSkinnedMesh&&(u+=1),u}function o(d,u,f,_,g,m){let E=i[e];return E===void 0?(E={id:d.id,object:d,geometry:u,material:f,materialVariant:a(d),groupOrder:_,renderOrder:d.renderOrder,z:g,group:m},i[e]=E):(E.id=d.id,E.object=d,E.geometry=u,E.material=f,E.materialVariant=a(d),E.groupOrder=_,E.renderOrder=d.renderOrder,E.z=g,E.group=m),e++,E}function c(d,u,f,_,g,m,E){E.reversedDepth===!0&&(g=-g);let w=o(d,u,f,_,g,m);f.transmission>0?n.push(w):f.transparent===!0?s.push(w):t.push(w)}function l(d,u,f,_,g,m){let E=o(d,u,f,_,g,m);f.transmission>0?n.unshift(E):f.transparent===!0?s.unshift(E):t.unshift(E)}function h(d,u){t.length>1&&t.sort(d||Dv),n.length>1&&n.sort(u||rf),s.length>1&&s.sort(u||rf)}function p(){for(let d=e,u=i.length;d<u;d++){let f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:p,sort:h}}function Lv(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new af,i.set(n,[a])):s>=r.length?(a=new af,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Uv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new D,color:new ze};break;case"SpotLight":t={position:new D,direction:new D,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function Nv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Fv=0;function Ov(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Bv(i){let e=new Uv,t=Nv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);let s=new D,r=new st,a=new st;function o(l){let h=0,p=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let u=0,f=0,_=0,g=0,m=0,E=0,w=0,v=0,y=0,T=0,P=0,x=0,b=0,R=0;l.sort(Ov);for(let S=0,I=l.length;S<I;S++){let A=l[S],N=A.color,V=A.intensity,B=A.distance,z=null;if(A.shadow&&A.shadow.map&&(A.shadow.map.texture.format===hs?z=A.shadow.map.texture:z=A.shadow.map.depthTexture||A.shadow.map.texture),A.isAmbientLight)h+=N.r*V,p+=N.g*V,d+=N.b*V;else if(A.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(A.sh.coefficients[O],V);R++}else if(A.isSunLight){let O=e.get(A);if(O.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let F=A.shadow,X=t.get(A);X.shadowIntensity=F.intensity,X.shadowBias=F.bias,X.shadowNormalBias=F.normalBias,X.shadowRadius=F.radius,X.shadowMapSize.copy(F.mapSize).multiply(F.getFrameExtents()),n.sunShadow[f]=X,n.sunShadowMap[f]=z;let re=F.getViewportCount();for(let pe=0;pe<re;pe++)n.sunShadowMatrix[_+pe]=F.getMatrix(pe),n.sunShadowCascade[_+pe]=F._cascadeData[pe];_+=re,f++}n.sun[u]=O,u++}else if(A.isDirectionalLight){let O=e.get(A);if(O.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let F=A.shadow,X=t.get(A);X.shadowIntensity=F.intensity,X.shadowBias=F.bias,X.shadowNormalBias=F.normalBias,X.shadowRadius=F.radius,X.shadowMapSize=F.mapSize,n.directionalShadow[g]=X,n.directionalShadowMap[g]=z,n.directionalShadowMatrix[g]=A.shadow.matrix,y++}n.directional[g]=O,g++}else if(A.isSpotLight){let O=e.get(A);O.position.setFromMatrixPosition(A.matrixWorld),O.color.copy(N).multiplyScalar(V),O.distance=B,O.coneCos=Math.cos(A.angle),O.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),O.decay=A.decay,n.spot[E]=O;let F=A.shadow;if(A.map&&(n.spotLightMap[x]=A.map,x++,F.updateMatrices(A),A.castShadow&&b++),n.spotLightMatrix[E]=F.matrix,A.castShadow){let X=t.get(A);X.shadowIntensity=F.intensity,X.shadowBias=F.bias,X.shadowNormalBias=F.normalBias,X.shadowRadius=F.radius,X.shadowMapSize=F.mapSize,n.spotShadow[E]=X,n.spotShadowMap[E]=z,P++}E++}else if(A.isRectAreaLight){let O=e.get(A);O.color.copy(N).multiplyScalar(V),O.halfWidth.set(A.width*.5,0,0),O.halfHeight.set(0,A.height*.5,0),n.rectArea[w]=O,w++}else if(A.isPointLight){let O=e.get(A);if(O.color.copy(A.color).multiplyScalar(A.intensity),O.distance=A.distance,O.decay=A.decay,A.castShadow){let F=A.shadow,X=t.get(A);X.shadowIntensity=F.intensity,X.shadowBias=F.bias,X.shadowNormalBias=F.normalBias,X.shadowRadius=F.radius,X.shadowMapSize=F.mapSize,X.shadowCameraNear=F.camera.near,X.shadowCameraFar=F.camera.far,n.pointShadow[m]=X,n.pointShadowMap[m]=z,n.pointShadowMatrix[m]=A.shadow.matrix,T++}n.point[m]=O,m++}else if(A.isHemisphereLight){let O=e.get(A);O.skyColor.copy(A.color).multiplyScalar(V),O.groundColor.copy(A.groundColor).multiplyScalar(V),n.hemi[v]=O,v++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ye.LTC_FLOAT_1,n.rectAreaLTC2=Ye.LTC_FLOAT_2):(n.rectAreaLTC1=Ye.LTC_HALF_1,n.rectAreaLTC2=Ye.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=p,n.ambient[2]=d;let U=n.hash;(U.sunLength!==u||U.directionalLength!==g||U.pointLength!==m||U.spotLength!==E||U.rectAreaLength!==w||U.hemiLength!==v||U.numSunShadows!==f||U.numDirectionalShadows!==y||U.numPointShadows!==T||U.numSpotShadows!==P||U.numSpotMaps!==x||U.numLightProbes!==R)&&(n.sun.length=u,n.directional.length=g,n.spot.length=E,n.rectArea.length=w,n.point.length=m,n.hemi.length=v,n.sunShadow.length=f,n.sunShadowMap.length=f,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.directionalShadowMatrix.length=y,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=P,n.spotShadowMap.length=P,n.spotLightMatrix.length=P+x-b,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=R,U.sunLength=u,U.directionalLength=g,U.pointLength=m,U.spotLength=E,U.rectAreaLength=w,U.hemiLength=v,U.numSunShadows=f,U.numDirectionalShadows=y,U.numPointShadows=T,U.numSpotShadows=P,U.numSpotMaps=x,U.numLightProbes=R,n.version=Fv++)}function c(l,h){let p=0,d=0,u=0,f=0,_=0,g=0,m=h.matrixWorldInverse;for(let E=0,w=l.length;E<w;E++){let v=l[E];if(v.isSunLight){let y=n.sun[p];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(m),p++}else if(v.isDirectionalLight){let y=n.directional[d];y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),d++}else if(v.isSpotLight){let y=n.spot[f];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),f++}else if(v.isRectAreaLight){let y=n.rectArea[_];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),a.identity(),r.copy(v.matrixWorld),r.premultiply(m),a.extractRotation(r),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),_++}else if(v.isPointLight){let y=n.point[u];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),u++}else if(v.isHemisphereLight){let y=n.hemi[g];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(m),g++}}}return{setup:o,setupView:c,state:n}}function of(i){let e=new Bv(i),t=[],n=[],s=[];function r(d){p.camera=d,t.length=0,n.length=0,s.length=0}function a(d){t.push(d)}function o(d){n.push(d)}function c(d){s.push(d)}function l(){e.setup(t)}function h(d){e.setupView(t,d)}let p={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:p,setupLights:l,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function Hv(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new of(i),e.set(s,[o])):r>=a.length?(o=new of(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var zv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Gv=`uniform sampler2D shadow_pass;
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
}`,Vv=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],kv=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],lf=new st,Na=new D,Hu=new D;function Wv(i,e,t){let n=new or,s=new Ae,r=new Ae,a=new Wt,o=new Ko,c=new Qo,l={},h=t.maxTextureSize,p={[as]:Mn,[Mn]:as,[dn]:dn},d=new It({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:zv,fragmentShader:Gv}),u=d.clone();u.defines.HORIZONTAL_PASS=1;let f=new Mt;f.setAttribute("position",new gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Re(f,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ws;let m=this.type;this.render=function(T,P,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===nd&&(ut("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ws);let b=i.getRenderTarget(),R=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),S=i.state;S.setBlending(tn),S.buffers.depth.getReversed()===!0?S.buffers.color.setClear(0,0,0,0):S.buffers.color.setClear(1,1,1,1),S.buffers.depth.setTest(!0),S.setScissorTest(!1);let I=m!==this.type;I&&P.traverse(function(A){A.material&&(Array.isArray(A.material)?A.material.forEach(N=>N.needsUpdate=!0):A.material.needsUpdate=!0)});for(let A=0,N=T.length;A<N;A++){let V=T[A],B=V.shadow;if(B===void 0){ut("WebGLShadowMap:",V,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);let z=B.getFrameExtents();s.multiply(z),r.copy(B.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/z.x),s.x=r.x*z.x,B.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/z.y),s.y=r.y*z.y,B.mapSize.y=r.y));let O=i.state.buffers.depth.getReversed();if(B.camera._reversedDepth=O,B.map===null||I===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===mr){if(V.isPointLight){ut("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Xt(s.x,s.y,{format:hs,type:Qt,minFilter:rn,magFilter:rn,generateMipmaps:!1}),B.map.texture.name=V.name+".shadowMap",B.map.depthTexture=new Qn(s.x,s.y,ei),B.map.depthTexture.name=V.name+".shadowMapDepth",B.map.depthTexture.format=Ei,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=en,B.map.depthTexture.magFilter=en}else V.isPointLight?(B.map=new ic(s.x),B.map.depthTexture=new qo(s.x,pi)):(B.map=new Xt(s.x,s.y),B.map.depthTexture=new Qn(s.x,s.y,pi)),B.map.depthTexture.name=V.name+".shadowMap",B.map.depthTexture.format=Ei,this.type===ws?(B.map.depthTexture.compareFunction=O?ec:jl,B.map.depthTexture.minFilter=rn,B.map.depthTexture.magFilter=rn):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=en,B.map.depthTexture.magFilter=en);B.camera.updateProjectionMatrix()}B.map.isWebGLCubeRenderTarget!==!0&&(B.map.width!==s.x||B.map.height!==s.y)&&B.map.setSize(s.x,s.y);let F=B.map.isWebGLCubeRenderTarget?6:B.getViewportCount();V.isPointLight!==!0&&B.updateMatrices(V,x);for(let X=0;X<F;X++){let re=B.getCamera(X);if(V.isPointLight){let pe=B.camera,_e=B.matrix,De=V.distance||pe.far;De!==pe.far&&(pe.far=De,pe.updateProjectionMatrix()),Na.setFromMatrixPosition(V.matrixWorld),pe.position.copy(Na),Hu.copy(pe.position),Hu.add(Vv[X]),pe.up.copy(kv[X]),pe.lookAt(Hu),pe.updateMatrixWorld(),_e.makeTranslation(-Na.x,-Na.y,-Na.z),lf.multiplyMatrices(pe.projectionMatrix,pe.matrixWorldInverse),B._frustum.setFromProjectionMatrix(lf,pe.coordinateSystem,pe.reversedDepth)}if(B.map.isWebGLCubeRenderTarget)i.setRenderTarget(B.map,X),i.clear();else{X===0&&(i.setRenderTarget(B.map),i.clear());let pe=B.getViewport(X);a.set(r.x*pe.x,r.y*pe.y,r.x*pe.z,r.y*pe.w),S.viewport(a)}n=B.getFrustum(X),v(P,x,re,V,this.type)}B.isPointLightShadow!==!0&&this.type===mr&&E(B,x),B.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(b,R,U)};function E(T,P){let x=e.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,u.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,u.needsUpdate=!0),T.mapPass===null?T.mapPass=new Xt(s.x,s.y,{format:hs,type:Qt}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(P,null,x,d,_,null),u.uniforms.shadow_pass.value=T.mapPass.texture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(P,null,x,u,_,null)}function w(T,P,x,b){let R=null,U=x.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(U!==void 0)R=U;else if(R=x.isPointLight===!0?c:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let S=R.uuid,I=P.uuid,A=l[S];A===void 0&&(A={},l[S]=A);let N=A[I];N===void 0&&(N=R.clone(),A[I]=N,P.addEventListener("dispose",y)),R=N}if(R.visible=P.visible,R.wireframe=P.wireframe,b===mr?R.side=P.shadowSide!==null?P.shadowSide:P.side:R.side=P.shadowSide!==null?P.shadowSide:p[P.side],R.alphaMap=P.alphaMap,R.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,R.map=P.map,R.clipShadows=P.clipShadows,R.clippingPlanes=P.clippingPlanes,R.clipIntersection=P.clipIntersection,R.displacementMap=P.displacementMap,R.displacementScale=P.displacementScale,R.displacementBias=P.displacementBias,R.wireframeLinewidth=P.wireframeLinewidth,R.linewidth=P.linewidth,x.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let S=i.properties.get(R);S.light=x}return R}function v(T,P,x,b,R){if(T.visible===!1)return;if(T.layers.test(P.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&R===mr)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,T.matrixWorld);let I=e.update(T),A=T.material;if(Array.isArray(A)){let N=I.groups;for(let V=0,B=N.length;V<B;V++){let z=N[V],O=A[z.materialIndex];if(O&&O.visible){let F=w(T,O,b,R);T.onBeforeShadow(i,T,P,x,I,F,z),i.renderBufferDirect(x,null,I,F,T,z),T.onAfterShadow(i,T,P,x,I,F,z)}}}else if(A.visible){let N=w(T,A,b,R);T.onBeforeShadow(i,T,P,x,I,N,null),i.renderBufferDirect(x,null,I,N,T,null),T.onAfterShadow(i,T,P,x,I,N,null)}}let S=T.children;for(let I=0,A=S.length;I<A;I++)v(S[I],P,x,b,R)}function y(T){T.target.removeEventListener("dispose",y);for(let x in l){let b=l[x],R=T.target.uuid;R in b&&(b[R].dispose(),delete b[R])}}}function Xv(i,e){function t(){let q=!1,Ue=new Wt,Me=null,Ve=new Wt(0,0,0,0);return{setMask:function(We){Me!==We&&!q&&(i.colorMask(We,We,We,We),Me=We)},setLocked:function(We){q=We},setClear:function(We,k,Te,ye,Ke){Ke===!0&&(We*=ye,k*=ye,Te*=ye),Ue.set(We,k,Te,ye),Ve.equals(Ue)===!1&&(i.clearColor(We,k,Te,ye),Ve.copy(Ue))},reset:function(){q=!1,Me=null,Ve.set(-1,0,0,0)}}}function n(){let q=!1,Ue=!1,Me=null,Ve=null,We=null;return{setReversed:function(k){if(Ue!==k){let Te=e.get("EXT_clip_control");k?Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.ZERO_TO_ONE_EXT):Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.NEGATIVE_ONE_TO_ONE_EXT),Ue=k;let ye=We;We=null,this.setClear(ye)}},getReversed:function(){return Ue},setTest:function(k){k?ae(i.DEPTH_TEST):ve(i.DEPTH_TEST)},setMask:function(k){Me!==k&&!q&&(i.depthMask(k),Me=k)},setFunc:function(k){if(Ue&&(k=Dd[k]),Ve!==k){switch(k){case Io:i.depthFunc(i.NEVER);break;case Do:i.depthFunc(i.ALWAYS);break;case Lo:i.depthFunc(i.LESS);break;case js:i.depthFunc(i.LEQUAL);break;case Uo:i.depthFunc(i.EQUAL);break;case No:i.depthFunc(i.GEQUAL);break;case Fo:i.depthFunc(i.GREATER);break;case Oo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ve=k}},setLocked:function(k){q=k},setClear:function(k){We!==k&&(We=k,Ue&&(k=1-k),i.clearDepth(k))},reset:function(){q=!1,Me=null,Ve=null,We=null,Ue=!1}}}function s(){let q=!1,Ue=null,Me=null,Ve=null,We=null,k=null,Te=null,ye=null,Ke=null;return{setTest:function(it){q||(it?ae(i.STENCIL_TEST):ve(i.STENCIL_TEST))},setMask:function(it){Ue!==it&&!q&&(i.stencilMask(it),Ue=it)},setFunc:function(it,Vt,Ct){(Me!==it||Ve!==Vt||We!==Ct)&&(i.stencilFunc(it,Vt,Ct),Me=it,Ve=Vt,We=Ct)},setOp:function(it,Vt,Ct){(k!==it||Te!==Vt||ye!==Ct)&&(i.stencilOp(it,Vt,Ct),k=it,Te=Vt,ye=Ct)},setLocked:function(it){q=it},setClear:function(it){Ke!==it&&(i.clearStencil(it),Ke=it)},reset:function(){q=!1,Ue=null,Me=null,Ve=null,We=null,k=null,Te=null,ye=null,Ke=null}}}let r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap,h={},p={},d={},u=new WeakMap,f=[],_=null,g=!1,m=null,E=null,w=null,v=null,y=null,T=null,P=null,x=new ze(0,0,0),b=0,R=!1,U=null,S=null,I=null,A=null,N=null,V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,z=0,O=i.getParameter(i.VERSION);O.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(O)[1]),B=z>=1):O.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),B=z>=2);let F=null,X={},re=i.getParameter(i.SCISSOR_BOX),pe=i.getParameter(i.VIEWPORT),_e=new Wt().fromArray(re),De=new Wt().fromArray(pe);function Xe(q,Ue,Me,Ve){let We=new Uint8Array(4),k=i.createTexture();i.bindTexture(q,k),i.texParameteri(q,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(q,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Te=0;Te<Me;Te++)q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?i.texImage3D(Ue,0,i.RGBA,1,1,Ve,0,i.RGBA,i.UNSIGNED_BYTE,We):i.texImage2D(Ue+Te,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,We);return k}let $={};$[i.TEXTURE_2D]=Xe(i.TEXTURE_2D,i.TEXTURE_2D,1),$[i.TEXTURE_CUBE_MAP]=Xe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[i.TEXTURE_2D_ARRAY]=Xe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),$[i.TEXTURE_3D]=Xe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ae(i.DEPTH_TEST),a.setFunc(js),ee(!1),oe(cu),ae(i.CULL_FACE),le(tn);function ae(q){h[q]!==!0&&(i.enable(q),h[q]=!0)}function ve(q){h[q]!==!1&&(i.disable(q),h[q]=!1)}function me(q,Ue){return d[q]!==Ue?(i.bindFramebuffer(q,Ue),d[q]=Ue,q===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=Ue),q===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=Ue),!0):!1}function Se(q,Ue){let Me=f,Ve=!1;if(q){Me=u.get(Ue),Me===void 0&&(Me=[],u.set(Ue,Me));let We=q.textures;if(Me.length!==We.length||Me[0]!==i.COLOR_ATTACHMENT0){for(let k=0,Te=We.length;k<Te;k++)Me[k]=i.COLOR_ATTACHMENT0+k;Me.length=We.length,Ve=!0}}else Me[0]!==i.BACK&&(Me[0]=i.BACK,Ve=!0);Ve&&i.drawBuffers(Me)}function W(q){return _!==q?(i.useProgram(q),_=q,!0):!1}let we={[jn]:i.FUNC_ADD,[id]:i.FUNC_SUBTRACT,[sd]:i.FUNC_REVERSE_SUBTRACT};we[rd]=i.MIN,we[ad]=i.MAX;let j={[Ts]:i.ZERO,[od]:i.ONE,[ld]:i.SRC_COLOR,[du]:i.SRC_ALPHA,[dd]:i.SRC_ALPHA_SATURATE,[va]:i.DST_COLOR,[xa]:i.DST_ALPHA,[cd]:i.ONE_MINUS_SRC_COLOR,[fu]:i.ONE_MINUS_SRC_ALPHA,[hd]:i.ONE_MINUS_DST_COLOR,[ud]:i.ONE_MINUS_DST_ALPHA,[fd]:i.CONSTANT_COLOR,[pd]:i.ONE_MINUS_CONSTANT_COLOR,[md]:i.CONSTANT_ALPHA,[gd]:i.ONE_MINUS_CONSTANT_ALPHA};function le(q,Ue,Me,Ve,We,k,Te,ye,Ke,it){if(q===tn){g===!0&&(ve(i.BLEND),g=!1);return}if(g===!1&&(ae(i.BLEND),g=!0),q!==dl){if(q!==m||it!==R){if((E!==jn||y!==jn)&&(i.blendEquation(i.FUNC_ADD),E=jn,y=jn),it)switch(q){case os:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Nt:i.blendFunc(i.ONE,i.ONE);break;case uu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case hu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:dt("WebGLState: Invalid blending: ",q);break}else switch(q){case os:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Nt:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case uu:dt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case hu:dt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:dt("WebGLState: Invalid blending: ",q);break}w=null,v=null,T=null,P=null,x.set(0,0,0),b=0,m=q,R=it}return}We=We||Ue,k=k||Me,Te=Te||Ve,(Ue!==E||We!==y)&&(i.blendEquationSeparate(we[Ue],we[We]),E=Ue,y=We),(Me!==w||Ve!==v||k!==T||Te!==P)&&(i.blendFuncSeparate(j[Me],j[Ve],j[k],j[Te]),w=Me,v=Ve,T=k,P=Te),(ye.equals(x)===!1||Ke!==b)&&(i.blendColor(ye.r,ye.g,ye.b,Ke),x.copy(ye),b=Ke),m=q,R=!1}function Z(q,Ue){q.side===dn?ve(i.CULL_FACE):ae(i.CULL_FACE);let Me=q.side===Mn;Ue&&(Me=!Me),ee(Me),q.blending===os&&q.transparent===!1?le(tn):le(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),a.setFunc(q.depthFunc),a.setTest(q.depthTest),a.setMask(q.depthWrite),r.setMask(q.colorWrite);let Ve=q.stencilWrite;o.setTest(Ve),Ve&&(o.setMask(q.stencilWriteMask),o.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),o.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),Ee(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?ae(i.SAMPLE_ALPHA_TO_COVERAGE):ve(i.SAMPLE_ALPHA_TO_COVERAGE)}function ee(q){U!==q&&(q?i.frontFace(i.CW):i.frontFace(i.CCW),U=q)}function oe(q){q!==ed?(ae(i.CULL_FACE),q!==S&&(q===cu?i.cullFace(i.BACK):q===td?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ve(i.CULL_FACE),S=q}function be(q){q!==I&&(B&&i.lineWidth(q),I=q)}function Ee(q,Ue,Me){q?(ae(i.POLYGON_OFFSET_FILL),(A!==Ue||N!==Me)&&(A=Ue,N=Me,a.getReversed()&&(Ue=-Ue),i.polygonOffset(Ue,Me))):ve(i.POLYGON_OFFSET_FILL)}function Oe(q){q?ae(i.SCISSOR_TEST):ve(i.SCISSOR_TEST)}function Ne(q){q===void 0&&(q=i.TEXTURE0+V-1),F!==q&&(i.activeTexture(q),F=q)}function G(q,Ue,Me){Me===void 0&&(F===null?Me=i.TEXTURE0+V-1:Me=F);let Ve=X[Me];Ve===void 0&&(Ve={type:void 0,texture:void 0},X[Me]=Ve),(Ve.type!==q||Ve.texture!==Ue)&&(F!==Me&&(i.activeTexture(Me),F=Me),i.bindTexture(q,Ue||$[q]),Ve.type=q,Ve.texture=Ue)}function ot(){let q=X[F];q!==void 0&&q.type!==void 0&&(i.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function et(){try{i.compressedTexImage2D(...arguments)}catch(q){dt("WebGLState:",q)}}function L(){try{i.compressedTexImage3D(...arguments)}catch(q){dt("WebGLState:",q)}}function M(){try{i.texSubImage2D(...arguments)}catch(q){dt("WebGLState:",q)}}function K(){try{i.texSubImage3D(...arguments)}catch(q){dt("WebGLState:",q)}}function te(){try{i.compressedTexSubImage2D(...arguments)}catch(q){dt("WebGLState:",q)}}function ce(){try{i.compressedTexSubImage3D(...arguments)}catch(q){dt("WebGLState:",q)}}function Le(){try{i.texStorage2D(...arguments)}catch(q){dt("WebGLState:",q)}}function Fe(){try{i.texStorage3D(...arguments)}catch(q){dt("WebGLState:",q)}}function fe(){try{i.texImage2D(...arguments)}catch(q){dt("WebGLState:",q)}}function ue(){try{i.texImage3D(...arguments)}catch(q){dt("WebGLState:",q)}}function Be(q){return p[q]!==void 0?p[q]:i.getParameter(q)}function tt(q,Ue){p[q]!==Ue&&(i.pixelStorei(q,Ue),p[q]=Ue)}function Ge(q){_e.equals(q)===!1&&(i.scissor(q.x,q.y,q.z,q.w),_e.copy(q))}function He(q){De.equals(q)===!1&&(i.viewport(q.x,q.y,q.z,q.w),De.copy(q))}function Ze(q,Ue){let Me=l.get(Ue);Me===void 0&&(Me=new WeakMap,l.set(Ue,Me));let Ve=Me.get(q);Ve===void 0&&(Ve=i.getUniformBlockIndex(Ue,q.name),Me.set(q,Ve))}function Qe(q,Ue){let Ve=l.get(Ue).get(q);c.get(Ue)!==Ve&&(i.uniformBlockBinding(Ue,Ve,q.__bindingPointIndex),c.set(Ue,Ve))}function at(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},p={},F=null,X={},d={},u=new WeakMap,f=[],_=null,g=!1,m=null,E=null,w=null,v=null,y=null,T=null,P=null,x=new ze(0,0,0),b=0,R=!1,U=null,S=null,I=null,A=null,N=null,_e.set(0,0,i.canvas.width,i.canvas.height),De.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ae,disable:ve,bindFramebuffer:me,drawBuffers:Se,useProgram:W,setBlending:le,setMaterial:Z,setFlipSided:ee,setCullFace:oe,setLineWidth:be,setPolygonOffset:Ee,setScissorTest:Oe,activeTexture:Ne,bindTexture:G,unbindTexture:ot,compressedTexImage2D:et,compressedTexImage3D:L,texImage2D:fe,texImage3D:ue,pixelStorei:tt,getParameter:Be,updateUBOMapping:Ze,uniformBlockBinding:Qe,texStorage2D:Le,texStorage3D:Fe,texSubImage2D:M,texSubImage3D:K,compressedTexSubImage2D:te,compressedTexSubImage3D:ce,scissor:Ge,viewport:He,reset:at}}function qv(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ae,h=new WeakMap,p=new Set,d,u=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(L,M){return f?new OffscreenCanvas(L,M):Wr("canvas")}function g(L,M,K){let te=1,ce=et(L);if((ce.width>K||ce.height>K)&&(te=K/Math.max(ce.width,ce.height)),te<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){let Le=Math.floor(te*ce.width),Fe=Math.floor(te*ce.height);d===void 0&&(d=_(Le,Fe));let fe=M?_(Le,Fe):d;return fe.width=Le,fe.height=Fe,fe.getContext("2d").drawImage(L,0,0,Le,Fe),ut("WebGLRenderer: Texture has been resized from ("+ce.width+"x"+ce.height+") to ("+Le+"x"+Fe+")."),fe}else return"data"in L&&ut("WebGLRenderer: Image in DataTexture is too big ("+ce.width+"x"+ce.height+")."),L;return L}function m(L){return L.generateMipmaps}function E(L){i.generateMipmap(L)}function w(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(L,M,K,te,ce,Le=!1){if(L!==null){if(i[L]!==void 0)return i[L];ut("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Fe;te&&(Fe=e.get("EXT_texture_norm16"),Fe||ut("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let fe=M;if(M===i.RED&&(K===i.FLOAT&&(fe=i.R32F),K===i.HALF_FLOAT&&(fe=i.R16F),K===i.UNSIGNED_BYTE&&(fe=i.R8),K===i.UNSIGNED_SHORT&&Fe&&(fe=Fe.R16_EXT),K===i.SHORT&&Fe&&(fe=Fe.R16_SNORM_EXT)),M===i.RED_INTEGER&&(K===i.UNSIGNED_BYTE&&(fe=i.R8UI),K===i.UNSIGNED_SHORT&&(fe=i.R16UI),K===i.UNSIGNED_INT&&(fe=i.R32UI),K===i.BYTE&&(fe=i.R8I),K===i.SHORT&&(fe=i.R16I),K===i.INT&&(fe=i.R32I)),M===i.RG&&(K===i.FLOAT&&(fe=i.RG32F),K===i.HALF_FLOAT&&(fe=i.RG16F),K===i.UNSIGNED_BYTE&&(fe=i.RG8),K===i.UNSIGNED_SHORT&&Fe&&(fe=Fe.RG16_EXT),K===i.SHORT&&Fe&&(fe=Fe.RG16_SNORM_EXT)),M===i.RG_INTEGER&&(K===i.UNSIGNED_BYTE&&(fe=i.RG8UI),K===i.UNSIGNED_SHORT&&(fe=i.RG16UI),K===i.UNSIGNED_INT&&(fe=i.RG32UI),K===i.BYTE&&(fe=i.RG8I),K===i.SHORT&&(fe=i.RG16I),K===i.INT&&(fe=i.RG32I)),M===i.RGB_INTEGER&&(K===i.UNSIGNED_BYTE&&(fe=i.RGB8UI),K===i.UNSIGNED_SHORT&&(fe=i.RGB16UI),K===i.UNSIGNED_INT&&(fe=i.RGB32UI),K===i.BYTE&&(fe=i.RGB8I),K===i.SHORT&&(fe=i.RGB16I),K===i.INT&&(fe=i.RGB32I)),M===i.RGBA_INTEGER&&(K===i.UNSIGNED_BYTE&&(fe=i.RGBA8UI),K===i.UNSIGNED_SHORT&&(fe=i.RGBA16UI),K===i.UNSIGNED_INT&&(fe=i.RGBA32UI),K===i.BYTE&&(fe=i.RGBA8I),K===i.SHORT&&(fe=i.RGBA16I),K===i.INT&&(fe=i.RGBA32I)),M===i.RGB&&(K===i.UNSIGNED_SHORT&&Fe&&(fe=Fe.RGB16_EXT),K===i.SHORT&&Fe&&(fe=Fe.RGB16_SNORM_EXT),K===i.UNSIGNED_INT_5_9_9_9_REV&&(fe=i.RGB9_E5),K===i.UNSIGNED_INT_10F_11F_11F_REV&&(fe=i.R11F_G11F_B10F)),M===i.RGBA){let ue=Le?kr:Tt.getTransfer(ce);K===i.FLOAT&&(fe=i.RGBA32F),K===i.HALF_FLOAT&&(fe=i.RGBA16F),K===i.UNSIGNED_BYTE&&(fe=ue===Lt?i.SRGB8_ALPHA8:i.RGBA8),K===i.UNSIGNED_SHORT&&Fe&&(fe=Fe.RGBA16_EXT),K===i.SHORT&&Fe&&(fe=Fe.RGBA16_SNORM_EXT),K===i.UNSIGNED_SHORT_4_4_4_4&&(fe=i.RGBA4),K===i.UNSIGNED_SHORT_5_5_5_1&&(fe=i.RGB5_A1)}return(fe===i.R16F||fe===i.R32F||fe===i.RG16F||fe===i.RG32F||fe===i.RGBA16F||fe===i.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function y(L,M){let K;return L?M===null||M===pi||M===us?K=i.DEPTH24_STENCIL8:M===ei?K=i.DEPTH32F_STENCIL8:M===gr&&(K=i.DEPTH24_STENCIL8,ut("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===pi||M===us?K=i.DEPTH_COMPONENT24:M===ei?K=i.DEPTH_COMPONENT32F:M===gr&&(K=i.DEPTH_COMPONENT16),K}function T(L,M){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==en&&L.minFilter!==rn?Math.log2(Math.max(M.width,M.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?M.mipmaps.length:1}function P(L){let M=L.target;M.removeEventListener("dispose",P),b(M),M.isVideoTexture&&h.delete(M),M.isHTMLTexture&&p.delete(M)}function x(L){let M=L.target;M.removeEventListener("dispose",x),U(M)}function b(L){let M=n.get(L);if(M.__webglInit===void 0)return;let K=L.source,te=u.get(K);if(te){let ce=te[M.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&R(L),Object.keys(te).length===0&&u.delete(K)}n.remove(L)}function R(L){let M=n.get(L);i.deleteTexture(M.__webglTexture);let K=L.source,te=u.get(K);delete te[M.__cacheKey],a.memory.textures--}function U(L){let M=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(M.__webglFramebuffer[te]))for(let ce=0;ce<M.__webglFramebuffer[te].length;ce++)i.deleteFramebuffer(M.__webglFramebuffer[te][ce]);else i.deleteFramebuffer(M.__webglFramebuffer[te]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[te])}else{if(Array.isArray(M.__webglFramebuffer))for(let te=0;te<M.__webglFramebuffer.length;te++)i.deleteFramebuffer(M.__webglFramebuffer[te]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let te=0;te<M.__webglColorRenderbuffer.length;te++)M.__webglColorRenderbuffer[te]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[te]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let K=L.textures;for(let te=0,ce=K.length;te<ce;te++){let Le=n.get(K[te]);Le.__webglTexture&&(i.deleteTexture(Le.__webglTexture),a.memory.textures--),n.remove(K[te])}n.remove(L)}let S=0;function I(){S=0}function A(){return S}function N(L){S=L}function V(){let L=S;return L>=s.maxTextures&&ut("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+s.maxTextures),S+=1,L}function B(L){let M=[];return M.push(L.wrapS),M.push(L.wrapT),M.push(L.wrapR||0),M.push(L.magFilter),M.push(L.minFilter),M.push(L.anisotropy),M.push(L.internalFormat),M.push(L.format),M.push(L.type),M.push(L.generateMipmaps),M.push(L.premultiplyAlpha),M.push(L.flipY),M.push(L.unpackAlignment),M.push(L.colorSpace),M.join()}function z(L,M){let K=n.get(L);if(L.isVideoTexture&&G(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&K.__version!==L.version){let te=L.image;if(te===null)ut("WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)ut("WebGLRenderer: Texture marked for update but image is incomplete");else{ve(K,L,M);return}}else L.isExternalTexture&&(K.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,K.__webglTexture,i.TEXTURE0+M)}function O(L,M){let K=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&K.__version!==L.version){ve(K,L,M);return}else L.isExternalTexture&&(K.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,K.__webglTexture,i.TEXTURE0+M)}function F(L,M){let K=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&K.__version!==L.version){ve(K,L,M);return}t.bindTexture(i.TEXTURE_3D,K.__webglTexture,i.TEXTURE0+M)}function X(L,M){let K=n.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&K.__version!==L.version){me(K,L,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture,i.TEXTURE0+M)}let re={[cn]:i.REPEAT,[Si]:i.CLAMP_TO_EDGE,[Bo]:i.MIRRORED_REPEAT},pe={[en]:i.NEAREST,[_d]:i.NEAREST_MIPMAP_NEAREST,[Ta]:i.NEAREST_MIPMAP_LINEAR,[rn]:i.LINEAR,[ml]:i.LINEAR_MIPMAP_NEAREST,[Ci]:i.LINEAR_MIPMAP_LINEAR},_e={[Ed]:i.NEVER,[Rd]:i.ALWAYS,[bd]:i.LESS,[jl]:i.LEQUAL,[wd]:i.EQUAL,[ec]:i.GEQUAL,[Td]:i.GREATER,[Ad]:i.NOTEQUAL};function De(L,M){if(M.type===ei&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===rn||M.magFilter===ml||M.magFilter===Ta||M.magFilter===Ci||M.minFilter===rn||M.minFilter===ml||M.minFilter===Ta||M.minFilter===Ci)&&ut("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,re[M.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,re[M.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,re[M.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,pe[M.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,pe[M.minFilter]),M.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,_e[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===en||M.minFilter!==Ta&&M.minFilter!==Ci||M.type===ei&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let K=e.get("EXT_texture_filter_anisotropic");i.texParameterf(L,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Xe(L,M){let K=!1;L.__webglInit===void 0&&(L.__webglInit=!0,M.addEventListener("dispose",P));let te=M.source,ce=u.get(te);ce===void 0&&(ce={},u.set(te,ce));let Le=B(M);if(Le!==L.__cacheKey){ce[Le]===void 0&&(ce[Le]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,K=!0),ce[Le].usedTimes++;let Fe=ce[L.__cacheKey];Fe!==void 0&&(ce[L.__cacheKey].usedTimes--,Fe.usedTimes===0&&R(M)),L.__cacheKey=Le,L.__webglTexture=ce[Le].texture}return K}function $(L,M,K){return Math.floor(Math.floor(L/K)/M)}function ae(L,M,K,te){let Le=L.updateRanges;if(Le.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,K,te,M.data);else{Le.sort((tt,Ge)=>tt.start-Ge.start);let Fe=0;for(let tt=1;tt<Le.length;tt++){let Ge=Le[Fe],He=Le[tt],Ze=Ge.start+Ge.count,Qe=$(He.start,M.width,4),at=$(Ge.start,M.width,4);He.start<=Ze+1&&Qe===at&&$(He.start+He.count-1,M.width,4)===Qe?Ge.count=Math.max(Ge.count,He.start+He.count-Ge.start):(++Fe,Le[Fe]=He)}Le.length=Fe+1;let fe=t.getParameter(i.UNPACK_ROW_LENGTH),ue=t.getParameter(i.UNPACK_SKIP_PIXELS),Be=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let tt=0,Ge=Le.length;tt<Ge;tt++){let He=Le[tt],Ze=Math.floor(He.start/4),Qe=Math.ceil(He.count/4),at=Ze%M.width,q=Math.floor(Ze/M.width),Ue=Qe,Me=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,at),t.pixelStorei(i.UNPACK_SKIP_ROWS,q),t.texSubImage2D(i.TEXTURE_2D,0,at,q,Ue,Me,K,te,M.data)}L.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,fe),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ue),t.pixelStorei(i.UNPACK_SKIP_ROWS,Be)}}function ve(L,M,K){let te=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(te=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(te=i.TEXTURE_3D);let ce=Xe(L,M),Le=M.source;t.bindTexture(te,L.__webglTexture,i.TEXTURE0+K);let Fe=n.get(Le);if(Le.version!==Fe.__version||ce===!0){if(t.activeTexture(i.TEXTURE0+K),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){let Me=Tt.getPrimaries(Tt.workingColorSpace),Ve=M.colorSpace===mi?null:Tt.getPrimaries(M.colorSpace),We=M.colorSpace===mi||Me===Ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,We)}t.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment);let ue=g(M.image,!1,s.maxTextureSize);ue=ot(M,ue);let Be=r.convert(M.format,M.colorSpace),tt=r.convert(M.type),Ge=v(M.internalFormat,Be,tt,M.normalized,M.colorSpace,M.isVideoTexture);De(te,M);let He,Ze=M.mipmaps,Qe=M.isVideoTexture!==!0,at=Fe.__version===void 0||ce===!0,q=Le.dataReady,Ue=T(M,ue);if(M.isDepthTexture)Ge=y(M.format===Pi,M.type),at&&(Qe?t.texStorage2D(i.TEXTURE_2D,1,Ge,ue.width,ue.height):t.texImage2D(i.TEXTURE_2D,0,Ge,ue.width,ue.height,0,Be,tt,null));else if(M.isDataTexture)if(Ze.length>0){Qe&&at&&t.texStorage2D(i.TEXTURE_2D,Ue,Ge,Ze[0].width,Ze[0].height);for(let Me=0,Ve=Ze.length;Me<Ve;Me++)He=Ze[Me],Qe?q&&t.texSubImage2D(i.TEXTURE_2D,Me,0,0,He.width,He.height,Be,tt,He.data):t.texImage2D(i.TEXTURE_2D,Me,Ge,He.width,He.height,0,Be,tt,He.data);M.generateMipmaps=!1}else Qe?(at&&t.texStorage2D(i.TEXTURE_2D,Ue,Ge,ue.width,ue.height),q&&ae(M,ue,Be,tt)):t.texImage2D(i.TEXTURE_2D,0,Ge,ue.width,ue.height,0,Be,tt,ue.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Qe&&at&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ue,Ge,Ze[0].width,Ze[0].height,ue.depth);for(let Me=0,Ve=Ze.length;Me<Ve;Me++)if(He=Ze[Me],M.format!==En)if(Be!==null)if(Qe){if(q)if(M.layerUpdates.size>0){let We=Ru(He.width,He.height,M.format,M.type);for(let k of M.layerUpdates){let Te=He.data.subarray(k*We/He.data.BYTES_PER_ELEMENT,(k+1)*We/He.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Me,0,0,k,He.width,He.height,1,Be,Te)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Me,0,0,0,He.width,He.height,ue.depth,Be,He.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Me,Ge,He.width,He.height,ue.depth,0,He.data,0,0);else ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Qe?q&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Me,0,0,0,He.width,He.height,ue.depth,Be,tt,He.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Me,Ge,He.width,He.height,ue.depth,0,Be,tt,He.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{Qe&&at&&t.texStorage2D(i.TEXTURE_2D,Ue,Ge,Ze[0].width,Ze[0].height);for(let Me=0,Ve=Ze.length;Me<Ve;Me++)He=Ze[Me],M.format!==En?Be!==null?Qe?q&&t.compressedTexSubImage2D(i.TEXTURE_2D,Me,0,0,He.width,He.height,Be,He.data):t.compressedTexImage2D(i.TEXTURE_2D,Me,Ge,He.width,He.height,0,He.data):ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qe?q&&t.texSubImage2D(i.TEXTURE_2D,Me,0,0,He.width,He.height,Be,tt,He.data):t.texImage2D(i.TEXTURE_2D,Me,Ge,He.width,He.height,0,Be,tt,He.data)}else if(M.isDataArrayTexture)if(Qe){if(at&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ue,Ge,ue.width,ue.height,ue.depth),q)if(M.layerUpdates.size>0){let Me=Ru(ue.width,ue.height,M.format,M.type);for(let Ve of M.layerUpdates){let We=ue.data.subarray(Ve*Me/ue.data.BYTES_PER_ELEMENT,(Ve+1)*Me/ue.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ve,ue.width,ue.height,1,Be,tt,We)}M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,Be,tt,ue.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ge,ue.width,ue.height,ue.depth,0,Be,tt,ue.data);else if(M.isData3DTexture)Qe?(at&&t.texStorage3D(i.TEXTURE_3D,Ue,Ge,ue.width,ue.height,ue.depth),q&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,Be,tt,ue.data)):t.texImage3D(i.TEXTURE_3D,0,Ge,ue.width,ue.height,ue.depth,0,Be,tt,ue.data);else if(M.isFramebufferTexture){if(at)if(Qe)t.texStorage2D(i.TEXTURE_2D,Ue,Ge,ue.width,ue.height);else{let Me=ue.width,Ve=ue.height;for(let We=0;We<Ue;We++)t.texImage2D(i.TEXTURE_2D,We,Ge,Me,Ve,0,Be,tt,null),Me>>=1,Ve>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in i){let Me=i.canvas;if(Me.hasAttribute("layoutsubtree")||Me.setAttribute("layoutsubtree","true"),ue.parentNode!==Me){Me.appendChild(ue),p.add(M),Me.onpaint=Ve=>{let We=Ve.changedElements;for(let k of p)We.includes(k.image)&&(k.needsUpdate=!0)},Me.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ue);else{let We=i.RGBA,k=i.RGBA,Te=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,We,k,Te,ue)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ze.length>0){if(Qe&&at){let Me=et(Ze[0]);t.texStorage2D(i.TEXTURE_2D,Ue,Ge,Me.width,Me.height)}for(let Me=0,Ve=Ze.length;Me<Ve;Me++)He=Ze[Me],Qe?q&&t.texSubImage2D(i.TEXTURE_2D,Me,0,0,Be,tt,He):t.texImage2D(i.TEXTURE_2D,Me,Ge,Be,tt,He);M.generateMipmaps=!1}else if(Qe){if(at){let Me=et(ue);t.texStorage2D(i.TEXTURE_2D,Ue,Ge,Me.width,Me.height)}q&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Be,tt,ue)}else t.texImage2D(i.TEXTURE_2D,0,Ge,Be,tt,ue);m(M)&&E(te),Fe.__version=Le.version,M.onUpdate&&M.onUpdate(M)}L.__version=M.version}function me(L,M,K){if(M.image.length!==6)return;let te=Xe(L,M),ce=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+K);let Le=n.get(ce);if(ce.version!==Le.__version||te===!0){t.activeTexture(i.TEXTURE0+K);let Fe=Tt.getPrimaries(Tt.workingColorSpace),fe=M.colorSpace===mi?null:Tt.getPrimaries(M.colorSpace),ue=M.colorSpace===mi||Fe===fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);let Be=M.isCompressedTexture||M.image[0].isCompressedTexture,tt=M.image[0]&&M.image[0].isDataTexture,Ge=[];for(let k=0;k<6;k++)!Be&&!tt?Ge[k]=g(M.image[k],!0,s.maxCubemapSize):Ge[k]=tt?M.image[k].image:M.image[k],Ge[k]=ot(M,Ge[k]);let He=Ge[0],Ze=r.convert(M.format,M.colorSpace),Qe=r.convert(M.type),at=v(M.internalFormat,Ze,Qe,M.normalized,M.colorSpace),q=M.isVideoTexture!==!0,Ue=Le.__version===void 0||te===!0,Me=ce.dataReady,Ve=T(M,He);De(i.TEXTURE_CUBE_MAP,M);let We;if(Be){q&&Ue&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ve,at,He.width,He.height);for(let k=0;k<6;k++){We=Ge[k].mipmaps;for(let Te=0;Te<We.length;Te++){let ye=We[Te];M.format!==En?Ze!==null?q?Me&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,Te,0,0,ye.width,ye.height,Ze,ye.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,Te,at,ye.width,ye.height,0,ye.data):ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,Te,0,0,ye.width,ye.height,Ze,Qe,ye.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,Te,at,ye.width,ye.height,0,Ze,Qe,ye.data)}}}else{if(We=M.mipmaps,q&&Ue){We.length>0&&Ve++;let k=et(Ge[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ve,at,k.width,k.height)}for(let k=0;k<6;k++)if(tt){q?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,0,0,Ge[k].width,Ge[k].height,Ze,Qe,Ge[k].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,at,Ge[k].width,Ge[k].height,0,Ze,Qe,Ge[k].data);for(let Te=0;Te<We.length;Te++){let Ke=We[Te].image[k].image;q?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,Te+1,0,0,Ke.width,Ke.height,Ze,Qe,Ke.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,Te+1,at,Ke.width,Ke.height,0,Ze,Qe,Ke.data)}}else{q?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,0,0,Ze,Qe,Ge[k]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,at,Ze,Qe,Ge[k]);for(let Te=0;Te<We.length;Te++){let ye=We[Te];q?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,Te+1,0,0,Ze,Qe,ye.image[k]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,Te+1,at,Ze,Qe,ye.image[k])}}}m(M)&&E(i.TEXTURE_CUBE_MAP),Le.__version=ce.version,M.onUpdate&&M.onUpdate(M)}L.__version=M.version}function Se(L,M,K,te,ce,Le){let Fe=r.convert(K.format,K.colorSpace),fe=r.convert(K.type),ue=v(K.internalFormat,Fe,fe,K.normalized,K.colorSpace),Be=n.get(M),tt=n.get(K);if(tt.__renderTarget=M,!Be.__hasExternalTextures){let Ge=Math.max(1,M.width>>Le),He=Math.max(1,M.height>>Le);ce===i.TEXTURE_3D||ce===i.TEXTURE_2D_ARRAY?t.texImage3D(ce,Le,ue,Ge,He,M.depth,0,Fe,fe,null):t.texImage2D(ce,Le,ue,Ge,He,0,Fe,fe,null)}t.bindFramebuffer(i.FRAMEBUFFER,L),Ne(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,ce,tt.__webglTexture,0,Oe(M)):(ce===i.TEXTURE_2D||ce>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,te,ce,tt.__webglTexture,Le),t.bindFramebuffer(i.FRAMEBUFFER,null)}function W(L,M,K){if(i.bindRenderbuffer(i.RENDERBUFFER,L),M.depthBuffer){let te=M.depthTexture,ce=te&&te.isDepthTexture?te.type:null,Le=y(M.stencilBuffer,ce),Fe=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ne(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Oe(M),Le,M.width,M.height):K?i.renderbufferStorageMultisample(i.RENDERBUFFER,Oe(M),Le,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Le,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Fe,i.RENDERBUFFER,L)}else{let te=M.textures;for(let ce=0;ce<te.length;ce++){let Le=te[ce],Fe=r.convert(Le.format,Le.colorSpace),fe=r.convert(Le.type),ue=v(Le.internalFormat,Fe,fe,Le.normalized,Le.colorSpace);Ne(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Oe(M),ue,M.width,M.height):K?i.renderbufferStorageMultisample(i.RENDERBUFFER,Oe(M),ue,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,ue,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function we(L,M,K){let te=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,L),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ce=n.get(M.depthTexture);if(ce.__renderTarget=M,(!ce.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),te){if(ce.__webglInit===void 0&&(ce.__webglInit=!0,M.depthTexture.addEventListener("dispose",P)),ce.__webglTexture===void 0){ce.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,ce.__webglTexture),De(i.TEXTURE_CUBE_MAP,M.depthTexture);let Be=r.convert(M.depthTexture.format),tt=r.convert(M.depthTexture.type),Ge;M.depthTexture.format===Ei?Ge=i.DEPTH_COMPONENT24:M.depthTexture.format===Pi&&(Ge=i.DEPTH24_STENCIL8);for(let He=0;He<6;He++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+He,0,Ge,M.width,M.height,0,Be,tt,null)}}else z(M.depthTexture,0);let Le=ce.__webglTexture,Fe=Oe(M),fe=te?i.TEXTURE_CUBE_MAP_POSITIVE_X+K:i.TEXTURE_2D,ue=M.depthTexture.format===Pi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(M.depthTexture.format===Ei)Ne(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ue,fe,Le,0,Fe):i.framebufferTexture2D(i.FRAMEBUFFER,ue,fe,Le,0);else if(M.depthTexture.format===Pi)Ne(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ue,fe,Le,0,Fe):i.framebufferTexture2D(i.FRAMEBUFFER,ue,fe,Le,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function j(L){let M=n.get(L),K=L.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==L.depthTexture){let te=L.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),te){let ce=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,te.removeEventListener("dispose",ce)};te.addEventListener("dispose",ce),M.__depthDisposeCallback=ce}M.__boundDepthTexture=te}if(L.depthTexture&&!M.__autoAllocateDepthBuffer)if(K)for(let te=0;te<6;te++)we(M.__webglFramebuffer[te],L,te);else{let te=L.texture.mipmaps;te&&te.length>0?we(M.__webglFramebuffer[0],L,0):we(M.__webglFramebuffer,L,0)}else if(K){M.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[te]),M.__webglDepthbuffer[te]===void 0)M.__webglDepthbuffer[te]=i.createRenderbuffer(),W(M.__webglDepthbuffer[te],L,!1);else{let ce=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Le=M.__webglDepthbuffer[te];i.bindRenderbuffer(i.RENDERBUFFER,Le),i.framebufferRenderbuffer(i.FRAMEBUFFER,ce,i.RENDERBUFFER,Le)}}else{let te=L.texture.mipmaps;if(te&&te.length>0?t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),W(M.__webglDepthbuffer,L,!1);else{let ce=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Le=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Le),i.framebufferRenderbuffer(i.FRAMEBUFFER,ce,i.RENDERBUFFER,Le)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function le(L,M,K){let te=n.get(L);M!==void 0&&Se(te.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),K!==void 0&&j(L)}function Z(L){let M=L.texture,K=n.get(L),te=n.get(M);L.addEventListener("dispose",x);let ce=L.textures,Le=L.isWebGLCubeRenderTarget===!0,Fe=ce.length>1;if(Fe||(te.__webglTexture===void 0&&(te.__webglTexture=i.createTexture()),te.__version=M.version,a.memory.textures++),Le){K.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(M.mipmaps&&M.mipmaps.length>0){K.__webglFramebuffer[fe]=[];for(let ue=0;ue<M.mipmaps.length;ue++)K.__webglFramebuffer[fe][ue]=i.createFramebuffer()}else K.__webglFramebuffer[fe]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){K.__webglFramebuffer=[];for(let fe=0;fe<M.mipmaps.length;fe++)K.__webglFramebuffer[fe]=i.createFramebuffer()}else K.__webglFramebuffer=i.createFramebuffer();if(Fe)for(let fe=0,ue=ce.length;fe<ue;fe++){let Be=n.get(ce[fe]);Be.__webglTexture===void 0&&(Be.__webglTexture=i.createTexture(),a.memory.textures++)}if(L.samples>0&&Ne(L)===!1){K.__webglMultisampledFramebuffer=i.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let fe=0;fe<ce.length;fe++){let ue=ce[fe];K.__webglColorRenderbuffer[fe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,K.__webglColorRenderbuffer[fe]);let Be=r.convert(ue.format,ue.colorSpace),tt=r.convert(ue.type),Ge=v(ue.internalFormat,Be,tt,ue.normalized,ue.colorSpace,L.isXRRenderTarget===!0),He=Oe(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,He,Ge,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,K.__webglColorRenderbuffer[fe])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(K.__webglDepthRenderbuffer=i.createRenderbuffer(),W(K.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Le){t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture),De(i.TEXTURE_CUBE_MAP,M);for(let fe=0;fe<6;fe++)if(M.mipmaps&&M.mipmaps.length>0)for(let ue=0;ue<M.mipmaps.length;ue++)Se(K.__webglFramebuffer[fe][ue],L,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ue);else Se(K.__webglFramebuffer[fe],L,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(M)&&E(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Fe){for(let fe=0,ue=ce.length;fe<ue;fe++){let Be=ce[fe],tt=n.get(Be),Ge=i.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ge=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ge,tt.__webglTexture),De(Ge,Be),Se(K.__webglFramebuffer,L,Be,i.COLOR_ATTACHMENT0+fe,Ge,0),m(Be)&&E(Ge)}t.unbindTexture()}else{let fe=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(fe=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(fe,te.__webglTexture),De(fe,M),M.mipmaps&&M.mipmaps.length>0)for(let ue=0;ue<M.mipmaps.length;ue++)Se(K.__webglFramebuffer[ue],L,M,i.COLOR_ATTACHMENT0,fe,ue);else Se(K.__webglFramebuffer,L,M,i.COLOR_ATTACHMENT0,fe,0);m(M)&&E(fe),t.unbindTexture()}L.depthBuffer&&j(L)}function ee(L){let M=L.textures;for(let K=0,te=M.length;K<te;K++){let ce=M[K];if(m(ce)){let Le=w(L),Fe=n.get(ce).__webglTexture;t.bindTexture(Le,Fe),E(Le),t.unbindTexture()}}}let oe=[],be=[];function Ee(L){if(L.samples>0){if(Ne(L)===!1){let M=L.textures,K=L.width,te=L.height,ce=i.COLOR_BUFFER_BIT,Le=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Fe=n.get(L),fe=M.length>1;if(fe)for(let Be=0;Be<M.length;Be++)t.bindFramebuffer(i.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Be,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Be,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer);let ue=L.texture.mipmaps;ue&&ue.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer);for(let Be=0;Be<M.length;Be++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ce|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ce|=i.STENCIL_BUFFER_BIT)),fe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Fe.__webglColorRenderbuffer[Be]);let tt=n.get(M[Be]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,tt,0)}i.blitFramebuffer(0,0,K,te,0,0,K,te,ce,i.NEAREST),c===!0&&(oe.length=0,be.length=0,oe.push(i.COLOR_ATTACHMENT0+Be),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&(oe.push(Le),be.push(Le),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,be)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,oe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),fe)for(let Be=0;Be<M.length;Be++){t.bindFramebuffer(i.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Be,i.RENDERBUFFER,Fe.__webglColorRenderbuffer[Be]);let tt=n.get(M[Be]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Be,i.TEXTURE_2D,tt,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&c){let M=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function Oe(L){return Math.min(s.maxSamples,L.samples)}function Ne(L){let M=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function G(L){let M=a.render.frame;h.get(L)!==M&&(h.set(L,M),L.update())}function ot(L,M){let K=L.colorSpace,te=L.format,ce=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||K!==Vr&&K!==mi&&(Tt.getTransfer(K)===Lt?(te!==En||ce!==fn)&&ut("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):dt("WebGLTextures: Unsupported texture color space:",K)),M}function et(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(l.width=L.naturalWidth||L.width,l.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(l.width=L.displayWidth,l.height=L.displayHeight):(l.width=L.width,l.height=L.height),l}this.allocateTextureUnit=V,this.resetTextureUnits=I,this.getTextureUnits=A,this.setTextureUnits=N,this.setTexture2D=z,this.setTexture2DArray=O,this.setTexture3D=F,this.setTextureCube=X,this.rebindTextures=le,this.setupRenderTarget=Z,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=j,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=Ne,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Yv(i,e){function t(n,s=mi){let r,a=Tt.getTransfer(s);if(n===fn)return i.UNSIGNED_BYTE;if(n===xl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===vl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===vu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===_u)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===gu)return i.BYTE;if(n===xu)return i.SHORT;if(n===gr)return i.UNSIGNED_SHORT;if(n===gl)return i.INT;if(n===pi)return i.UNSIGNED_INT;if(n===ei)return i.FLOAT;if(n===Qt)return i.HALF_FLOAT;if(n===yu)return i.ALPHA;if(n===Mu)return i.RGB;if(n===En)return i.RGBA;if(n===Ei)return i.DEPTH_COMPONENT;if(n===Pi)return i.DEPTH_STENCIL;if(n===_l)return i.RED;if(n===yl)return i.RED_INTEGER;if(n===hs)return i.RG;if(n===Ml)return i.RG_INTEGER;if(n===Sl)return i.RGBA_INTEGER;if(n===Aa||n===Ra||n===Ca||n===Pa)if(a===Lt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Aa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Aa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ra)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ca)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Pa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===El||n===bl||n===wl||n===Tl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===El)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===bl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===wl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Tl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Al||n===Rl||n===Cl||n===Pl||n===Il||n===Ia||n===Dl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Al||n===Rl)return a===Lt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Cl)return a===Lt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Pl)return r.COMPRESSED_R11_EAC;if(n===Il)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ia)return r.COMPRESSED_RG11_EAC;if(n===Dl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ll||n===Ul||n===Nl||n===Fl||n===Ol||n===Bl||n===Hl||n===zl||n===Gl||n===Vl||n===kl||n===Wl||n===Xl||n===ql)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ll)return a===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ul)return a===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Nl)return a===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Fl)return a===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ol)return a===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Bl)return a===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Hl)return a===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===zl)return a===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Gl)return a===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Vl)return a===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===kl)return a===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Wl)return a===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Xl)return a===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ql)return a===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Yl||n===Zl||n===Jl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Yl)return a===Lt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Zl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Jl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===$l||n===Kl||n===Da||n===Ql)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===$l)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Kl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Da)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ql)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===us?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Zv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Jv=`
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

}`,Yu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new jr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new It({vertexShader:Zv,fragmentShader:Jv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Re(new zt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Zu=class extends bi{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,p=null,d=null,u=null,f=null,_=typeof XRWebGLBinding<"u",g=new Yu,m={},E=t.getContextAttributes(),w=null,v=null,y=[],T=[],P=new Ae,x=null,b=null,R=new vn;R.viewport=new Wt;let U=new vn;U.viewport=new Wt;let S=[R,U],I=new ul,A=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ae=y[$];return ae===void 0&&(ae=new sr,y[$]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function($){let ae=y[$];return ae===void 0&&(ae=new sr,y[$]=ae),ae.getGripSpace()},this.getHand=function($){let ae=y[$];return ae===void 0&&(ae=new sr,y[$]=ae),ae.getHandSpace()};function V($){let ae=T.indexOf($.inputSource);if(ae===-1)return;let ve=y[ae];ve!==void 0&&(ve.update($.inputSource,$.frame,l||a),ve.dispatchEvent({type:$.type,data:$.inputSource}))}function B(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",z);for(let $=0;$<y.length;$++){let ae=T[$];ae!==null&&(T[$]=null,y[$].disconnect(ae))}A=null,N=null,g.reset();for(let $ in m)delete m[$];if(e.setRenderTarget(w),u=null,d=null,p=null,s=null,v=null,Xe.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(P.width,P.height,!1),b!==null){let $=b.camera;$.fov=b.fov,$.zoom=b.zoom,$.updateProjectionMatrix(),b=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&ut("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&ut("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return p===null&&_&&(p=new XRWebGLBinding(s,t)),p},this.getFrame=function(){return f},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",B),s.addEventListener("inputsourceschange",z),E.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(P),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,me=null,Se=null;E.depth&&(Se=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=E.stencil?Pi:Ei,me=E.stencil?us:pi);let W={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:r};p=this.getBinding(),d=p.createProjectionLayer(W),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new Xt(d.textureWidth,d.textureHeight,{format:En,type:fn,depthTexture:new Qn(d.textureWidth,d.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let ve={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,t,ve),s.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),v=new Xt(u.framebufferWidth,u.framebufferHeight,{format:En,type:fn,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Xe.setContext(s),Xe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function z($){for(let ae=0;ae<$.removed.length;ae++){let ve=$.removed[ae],me=T.indexOf(ve);me>=0&&(T[me]=null,y[me].disconnect(ve))}for(let ae=0;ae<$.added.length;ae++){let ve=$.added[ae],me=T.indexOf(ve);if(me===-1){for(let W=0;W<y.length;W++)if(W>=T.length){T.push(ve),me=W;break}else if(T[W]===null){T[W]=ve,me=W;break}if(me===-1)break}let Se=y[me];Se&&Se.connect(ve)}}let O=new D,F=new D;function X($,ae,ve){O.setFromMatrixPosition(ae.matrixWorld),F.setFromMatrixPosition(ve.matrixWorld);let me=O.distanceTo(F),Se=ae.projectionMatrix.elements,W=ve.projectionMatrix.elements,we=Se[14]/(Se[10]-1),j=Se[14]/(Se[10]+1),le=(Se[9]+1)/Se[5],Z=(Se[9]-1)/Se[5],ee=(Se[8]-1)/Se[0],oe=(W[8]+1)/W[0],be=we*ee,Ee=we*oe,Oe=me/(-ee+oe),Ne=Oe*-ee;if(ae.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Ne),$.translateZ(Oe),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Se[10]===-1)$.projectionMatrix.copy(ae.projectionMatrix),$.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{let G=we+Oe,ot=j+Oe,et=be-Ne,L=Ee+(me-Ne),M=le*j/ot*G,K=Z*j/ot*G;$.projectionMatrix.makePerspective(et,L,M,K,G,ot),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function re($,ae){ae===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ae.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let ae=$.near,ve=$.far;g.texture!==null&&(g.depthNear>0&&(ae=g.depthNear),g.depthFar>0&&(ve=g.depthFar)),I.near=U.near=R.near=ae,I.far=U.far=R.far=ve,(A!==I.near||N!==I.far)&&(s.updateRenderState({depthNear:I.near,depthFar:I.far}),A=I.near,N=I.far),I.layers.mask=$.layers.mask|6,R.layers.mask=I.layers.mask&-5,U.layers.mask=I.layers.mask&-3;let me=$.parent,Se=I.cameras;re(I,me);for(let W=0;W<Se.length;W++)re(Se[W],me);Se.length===2?X(I,R,U):I.projectionMatrix.copy(R.projectionMatrix),b===null&&$.isPerspectiveCamera&&(b={camera:$,fov:$.fov,zoom:$.zoom}),pe($,I,me)};function pe($,ae,ve){ve===null?$.matrix.copy(ae.matrixWorld):($.matrix.copy(ve.matrixWorld),$.matrix.invert(),$.matrix.multiply(ae.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ae.projectionMatrix),$.projectionMatrixInverse.copy(ae.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=qr*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(d===null&&u===null))return c},this.setFoveation=function($){c=$,d!==null&&(d.fixedFoveation=$),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=$)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(I)},this.getCameraTexture=function($){return m[$]};let _e=null;function De($,ae){if(h=ae.getViewerPose(l||a),f=ae,h!==null){let ve=h.views;u!==null&&(e.setRenderTargetFramebuffer(v,u.framebuffer),e.setRenderTarget(v));let me=!1;ve.length!==I.cameras.length&&(I.cameras.length=0,me=!0);for(let j=0;j<ve.length;j++){let le=ve[j],Z=null;if(u!==null)Z=u.getViewport(le);else{let oe=p.getViewSubImage(d,le);Z=oe.viewport,j===0&&(e.setRenderTargetTextures(v,oe.colorTexture,oe.depthStencilTexture),e.setRenderTarget(v))}let ee=S[j];ee===void 0&&(ee=new vn,ee.layers.enable(j),ee.viewport=new Wt,S[j]=ee),ee.matrix.fromArray(le.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(le.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(Z.x,Z.y,Z.width,Z.height),j===0&&(I.matrix.copy(ee.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),me===!0&&I.cameras.push(ee)}let Se=s.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){p=n.getBinding();let j=p.getDepthInformation(ve[0]);j&&j.isValid&&j.texture&&g.init(j,s.renderState)}if(Se&&Se.includes("camera-access")&&_){e.state.unbindTexture(),p=n.getBinding();for(let j=0;j<ve.length;j++){let le=ve[j].camera;if(le){let Z=m[le];Z||(Z=new jr,m[le]=Z);let ee=p.getCameraImage(le);Z.sourceTexture=ee}}}}for(let ve=0;ve<y.length;ve++){let me=T[ve],Se=y[ve];me!==null&&Se!==void 0&&Se.update(me,ae,l||a)}_e&&_e($,ae),ae.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ae}),f=null}let Xe=new cf;Xe.setAnimationLoop(De),this.setAnimationLoop=function($){_e=$},this.dispose=function(){}}},$v=new st,mf=new xt;mf.set(-1,0,0,0,1,0,0,0,1);function Kv(i,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,wu(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,E,w,v){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),p(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),d(g,m),m.isMeshPhysicalMaterial&&u(g,m,v)):m.isMeshMatcapMaterial?(r(g,m),f(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),_(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?c(g,m,E,w):m.isSpriteMaterial?l(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Mn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Mn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let E=e.get(m),w=E.envMap,v=E.envMapRotation;w&&(g.envMap.value=w,g.envMapRotation.value.setFromMatrix4($v.makeRotationFromEuler(v)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(mf),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,E,w){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*E,g.scale.value=w*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function p(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function u(g,m,E){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Mn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=E.texture,g.transmissionSamplerSize.value.set(E.width,E.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function f(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){let E=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(E.matrixWorld),g.nearDistance.value=E.shadow.camera.near,g.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Qv(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,y){let T=y.program;n.uniformBlockBinding(v,T)}function l(v,y){let T=s[v.id];T===void 0&&(g(v),T=h(v),s[v.id]=T,v.addEventListener("dispose",E));let P=y.program;n.updateUBOMapping(v,P);let x=e.render.frame;r[v.id]!==x&&(d(v),r[v.id]=x)}function h(v){let y=p();v.__bindingPointIndex=y;let T=i.createBuffer(),P=v.__size,x=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,P,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,T),T}function p(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return dt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let y=s[v.id],T=v.uniforms,P=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let x=0,b=T.length;x<b;x++){let R=T[x];if(Array.isArray(R))for(let U=0,S=R.length;U<S;U++)u(R[U],x,U,P);else u(R,x,0,P)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(v,y,T,P){if(_(v,y,T,P)===!0){let x=v.__offset,b=v.value;if(Array.isArray(b)){let R=0;for(let U=0;U<b.length;U++){let S=b[U],I=m(S);f(S,v.__data,R),typeof S!="number"&&typeof S!="boolean"&&!S.isMatrix3&&!ArrayBuffer.isView(S)&&(R+=I.storage/Float32Array.BYTES_PER_ELEMENT)}}else f(b,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,v.__data)}}function f(v,y,T){typeof v=="number"||typeof v=="boolean"?y[0]=v:v.isMatrix3?(y[0]=v.elements[0],y[1]=v.elements[1],y[2]=v.elements[2],y[3]=0,y[4]=v.elements[3],y[5]=v.elements[4],y[6]=v.elements[5],y[7]=0,y[8]=v.elements[6],y[9]=v.elements[7],y[10]=v.elements[8],y[11]=0):ArrayBuffer.isView(v)?y.set(new v.constructor(v.buffer,v.byteOffset,y.length)):v.toArray(y,T)}function _(v,y,T,P){let x=v.value,b=y+"_"+T;if(P[b]===void 0)return typeof x=="number"||typeof x=="boolean"?P[b]=x:ArrayBuffer.isView(x)?P[b]=x.slice():P[b]=x.clone(),!0;{let R=P[b];if(typeof x=="number"||typeof x=="boolean"){if(R!==x)return P[b]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(R.equals(x)===!1)return R.copy(x),!0}}return!1}function g(v){let y=v.uniforms,T=0,P=16;for(let b=0,R=y.length;b<R;b++){let U=Array.isArray(y[b])?y[b]:[y[b]];for(let S=0,I=U.length;S<I;S++){let A=U[S],N=Array.isArray(A.value)?A.value:[A.value];for(let V=0,B=N.length;V<B;V++){let z=N[V],O=m(z),F=T%P,X=F%O.boundary,re=F+X;T+=X,re!==0&&P-re<O.storage&&(T+=P-re),A.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=T,T+=O.storage}}}let x=T%P;return x>0&&(T+=P-x),v.__size=T,v.__cache={},this}function m(v){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?ut("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(y.boundary=16,y.storage=v.byteLength):ut("WebGLRenderer: Unsupported uniform value type.",v),y}function E(v){let y=v.target;y.removeEventListener("dispose",E);let T=a.indexOf(y.__bindingPointIndex);a.splice(T,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function w(){for(let v in s)i.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:c,update:l,dispose:w}}var jv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ii=null;function e_(){return Ii===null&&(Ii=new Kn(jv,16,16,hs,Qt),Ii.name="DFG_LUT",Ii.minFilter=rn,Ii.magFilter=rn,Ii.wrapS=Si,Ii.wrapT=Si,Ii.generateMipmaps=!1,Ii.needsUpdate=!0),Ii}var sc=class{constructor(e={}){let{canvas:t=Cd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:d=!1,outputBufferType:u=fn}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;let _=u,g=new Set([Sl,Ml,yl]),m=new Set([fn,pi,gr,us,xl,vl]),E=new Uint32Array(4),w=new Int32Array(4),v=new D,y=null,T=null,P=[],x=[],b=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Yn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,U=!1,S=null,I=null,A=null,N=null;this._outputColorSpace=Ut;let V=0,B=0,z=null,O=-1,F=null,X=new Wt,re=new Wt,pe=null,_e=new ze(0),De=0,Xe=t.width,$=t.height,ae=1,ve=null,me=null,Se=new Wt(0,0,Xe,$),W=new Wt(0,0,Xe,$),we=!1,j=new or,le=!1,Z=!1,ee=new st,oe=new D,be=new Wt,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Oe=!1;function Ne(){return z===null?ae:1}let G=n;function ot(C,J){return t.getContext(C,J)}let et,L,M,K,te,ce,Le,Fe,fe,ue,Be,tt,Ge,He,Ze,Qe,at,q,Ue,Me,Ve,We,k;try{let C={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Ke,!1),t.addEventListener("webglcontextrestored",it,!1),t.addEventListener("webglcontextcreationerror",Vt,!1),G===null){let J="webgl2";if(G=ot(J,C),G===null)throw ot(J)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Te()}catch(C){throw t.removeEventListener("webglcontextlost",Ke,!1),t.removeEventListener("webglcontextrestored",it,!1),t.removeEventListener("webglcontextcreationerror",Vt,!1),dt("WebGLRenderer: "+C.message),C}function Te(){et=new ox(G),et.init(),Ve=new Yv(G,et),L=new Kg(G,et,e,Ve),M=new Xv(G,et),L.reversedDepthBuffer&&d&&M.buffers.depth.setReversed(!0),I=G.createFramebuffer(),A=G.createFramebuffer(),N=G.createFramebuffer(),K=new ux(G),te=new Iv,ce=new qv(G,et,M,te,L,Ve,K),Le=new ax(R),Fe=new d0(G),We=new Jg(G,Fe),fe=new lx(G,Fe,K,We),ue=new dx(G,fe,Fe,We,K),q=new hx(G,L,ce),Ze=new Qg(te),Be=new Pv(R,Le,et,L,We,Ze),tt=new Kv(R,te),Ge=new Lv,He=new Hv(et),at=new Zg(R,Le,M,ue,f,c),Qe=new Wv(R,ue,L),k=new Qv(G,K,L,M),Ue=new $g(G,et,K),Me=new cx(G,et,K),K.programs=Be.programs,R.capabilities=L,R.extensions=et,R.properties=te,R.renderLists=Ge,R.shadowMap=Qe,R.state=M,R.info=K}_!==fn&&(b=new px(_,t.width,t.height,o,s,r));let ye=new Zu(R,G);this.xr=ye,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){let C=et.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=et.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return ae},this.setPixelRatio=function(C){C!==void 0&&(ae=C,this.setSize(Xe,$,!1))},this.getSize=function(C){return C.set(Xe,$)},this.setSize=function(C,J,de=!0){if(ye.isPresenting){ut("WebGLRenderer: Can't change size while VR device is presenting.");return}Xe=C,$=J,t.width=Math.floor(C*ae),t.height=Math.floor(J*ae),de===!0&&(t.style.width=C+"px",t.style.height=J+"px"),b!==null&&b.setSize(t.width,t.height),this.setViewport(0,0,C,J)},this.getDrawingBufferSize=function(C){return C.set(Xe*ae,$*ae).floor()},this.setDrawingBufferSize=function(C,J,de){Xe=C,$=J,ae=de,t.width=Math.floor(C*de),t.height=Math.floor(J*de),this.setViewport(0,0,C,J)},this.setEffects=function(C){if(_===fn){dt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let J=0;J<C.length;J++)if(C[J].isOutputPass===!0){ut("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(X)},this.getViewport=function(C){return C.copy(Se)},this.setViewport=function(C,J,de,ne){C.isVector4?Se.set(C.x,C.y,C.z,C.w):Se.set(C,J,de,ne),M.viewport(X.copy(Se).multiplyScalar(ae).round())},this.getScissor=function(C){return C.copy(W)},this.setScissor=function(C,J,de,ne){C.isVector4?W.set(C.x,C.y,C.z,C.w):W.set(C,J,de,ne),M.scissor(re.copy(W).multiplyScalar(ae).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(C){M.setScissorTest(we=C)},this.setOpaqueSort=function(C){ve=C},this.setTransparentSort=function(C){me=C},this.getClearColor=function(C){return C.copy(at.getClearColor())},this.setClearColor=function(){at.setClearColor(...arguments)},this.getClearAlpha=function(){return at.getClearAlpha()},this.setClearAlpha=function(){at.setClearAlpha(...arguments)},this.clear=function(C=!0,J=!0,de=!0){let ne=0;if(C){let ie=!1;if(z!==null){let qe=z.texture.format;ie=g.has(qe)}if(ie){let qe=z.texture.type,$e=m.has(qe),H=at.getClearColor(),Y=at.getClearAlpha(),Q=H.r,xe=H.g,ge=H.b;$e?(E[0]=Q,E[1]=xe,E[2]=ge,E[3]=Y,G.clearBufferuiv(G.COLOR,0,E)):(w[0]=Q,w[1]=xe,w[2]=ge,w[3]=Y,G.clearBufferiv(G.COLOR,0,w))}else ne|=G.COLOR_BUFFER_BIT}J&&(ne|=G.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),de&&(ne|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ne!==0&&G.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),S=C},this.dispose=function(){t.removeEventListener("webglcontextlost",Ke,!1),t.removeEventListener("webglcontextrestored",it,!1),t.removeEventListener("webglcontextcreationerror",Vt,!1),at.dispose(),Ge.dispose(),He.dispose(),te.dispose(),Le.dispose(),ue.dispose(),We.dispose(),k.dispose(),Be.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",ri),ye.removeEventListener("sessionend",ai),Nn.stop()};function Ke(C){C.preventDefault(),Xr("WebGLRenderer: Context Lost."),U=!0}function it(){Xr("WebGLRenderer: Context Restored."),U=!1;let C=K.autoReset,J=Qe.enabled,de=Qe.autoUpdate,ne=Qe.needsUpdate,ie=Qe.type;Te(),K.autoReset=C,Qe.enabled=J,Qe.autoUpdate=de,Qe.needsUpdate=ne,Qe.type=ie}function Vt(C){dt("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Ct(C){let J=C.target;J.removeEventListener("dispose",Ct),Ft(J)}function Ft(C){zn(C),te.remove(C)}function zn(C){let J=te.get(C).programs;J!==void 0&&(J.forEach(function(de){Be.releaseProgram(de)}),C.isShaderMaterial&&Be.releaseShaderCache(C))}this.renderBufferDirect=function(C,J,de,ne,ie,qe){J===null&&(J=Ee);let $e=ie.isMesh&&ie.matrixWorld.determinantAffine()<0,H=Is(C,J,de,ne,ie);M.setMaterial(ne,$e);let Y=de.index,Q=1;if(ne.wireframe===!0){if(Y=fe.getWireframeAttribute(de),Y===void 0)return;Q=2}let xe=de.drawRange,ge=de.attributes.position,he=xe.start*Q,Pe=(xe.start+xe.count)*Q;qe!==null&&(he=Math.max(he,qe.start*Q),Pe=Math.min(Pe,(qe.start+qe.count)*Q)),Y!==null?(he=Math.max(he,0),Pe=Math.min(Pe,Y.count)):ge!=null&&(he=Math.max(he,0),Pe=Math.min(Pe,ge.count));let Ie=Pe-he;if(Ie<0||Ie===1/0)return;We.setup(ie,ne,H,de,Y);let ke,Je=Ue;if(Y!==null&&(ke=Fe.get(Y),Je=Me,Je.setIndex(ke)),ie.isMesh)ne.wireframe===!0?(M.setLineWidth(ne.wireframeLinewidth*Ne()),Je.setMode(G.LINES)):Je.setMode(G.TRIANGLES);else if(ie.isLine){let Ce=ne.linewidth;Ce===void 0&&(Ce=1),M.setLineWidth(Ce*Ne()),ie.isLineSegments?Je.setMode(G.LINES):ie.isLineLoop?Je.setMode(G.LINE_LOOP):Je.setMode(G.LINE_STRIP)}else ie.isPoints?Je.setMode(G.POINTS):ie.isSprite&&Je.setMode(G.TRIANGLES);if(ie.isBatchedMesh)if(et.get("WEBGL_multi_draw"))Je.renderMultiDraw(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount);else{let Ce=ie._multiDrawStarts,se=ie._multiDrawCounts,nt=ie._multiDrawCount,je=Y?Fe.get(Y).bytesPerElement:1,ft=te.get(ne).currentProgram.getUniforms();for(let bt=0;bt<nt;bt++)ft.setValue(G,"_gl_DrawID",bt),Je.render(Ce[bt]/je,se[bt])}else if(ie.isInstancedMesh)Je.renderInstances(he,Ie,ie.count);else if(de.isInstancedBufferGeometry){let Ce=de._maxInstanceCount!==void 0?de._maxInstanceCount:1/0,se=Math.min(de.instanceCount,Ce);Je.renderInstances(he,Ie,se)}else Je.render(he,Ie)};function gi(C,J,de,ne){S!==null&&C.isNodeMaterial&&S.setObject(ne,C),le===!0&&Ze.setState(C,de,!1),C.transparent===!0&&C.side===dn&&C.forceSinglePass===!1?(C.side=Mn,C.needsUpdate=!0,vi(C,J,ne),C.side=as,C.needsUpdate=!0,vi(C,J,ne),C.side=dn):vi(C,J,ne)}this.compile=function(C,J,de=null){de===null&&(de=C),S!==null&&S.renderStart(C,J,de),T=He.get(de),T.init(J),x.push(T),de.traverseVisible(function(ie){ie.isLight&&ie.layers.test(J.layers)&&(T.pushLight(ie),ie.castShadow&&T.pushShadow(ie))}),C!==de&&C.traverseVisible(function(ie){ie.isLight&&ie.layers.test(J.layers)&&(T.pushLight(ie),ie.castShadow&&T.pushShadow(ie))}),T.setupLights(),S!==null&&S.updateLights(T.state.lightsArray),Z=this.localClippingEnabled,le=Ze.init(this.clippingPlanes,Z),le===!0&&Ze.setGlobalState(this.clippingPlanes,J),S!==null&&Qe.render(T.state.shadowsArray,de,J);let ne=new Set;return C.traverse(function(ie){if(!(ie.isMesh||ie.isPoints||ie.isLine||ie.isSprite))return;let qe=ie.material;if(qe)if(Array.isArray(qe))for(let $e=0;$e<qe.length;$e++){let H=qe[$e];gi(H,de,J,ie),ne.add(H)}else gi(qe,de,J,ie),ne.add(qe)}),T=x.pop(),S!==null&&S.renderEnd(),ne},this.compileAsync=function(C,J,de=null){let ne=this.compile(C,J,de);return new Promise(ie=>{function qe(){if(ne.forEach(function($e){let Y=te.get($e).currentProgram;(Y===void 0||Y.isReady())&&ne.delete($e)}),ne.size===0){ie(C);return}setTimeout(qe,10)}et.get("KHR_parallel_shader_compile")!==null?qe():setTimeout(qe,10)})};let Zn=null;function Fi(C){Zn&&Zn(C)}function ri(){Nn.stop()}function ai(){Nn.start()}let Nn=new cf;Nn.setAnimationLoop(Fi),typeof self<"u"&&Nn.setContext(self),this.setAnimationLoop=function(C){Zn=C,ye.setAnimationLoop(C),C===null?Nn.stop():Nn.start()},ye.addEventListener("sessionstart",ri),ye.addEventListener("sessionend",ai),this.render=function(C,J){if(J!==void 0&&J.isCamera!==!0){dt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;S!==null&&S.renderStart(C,J);let de=ye.enabled===!0&&ye.isPresenting===!0,ne=b!==null&&(z===null||de)&&b.begin(R,z);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(J),J=ye.getCamera()),C.isScene===!0&&C.onBeforeRender(R,C,J,z),T=He.get(C,x.length),T.init(J),T.state.textureUnits=ce.getTextureUnits(),x.push(T),ee.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),j.setFromProjectionMatrix(ee,ui,J.reversedDepth),Z=this.localClippingEnabled,le=Ze.init(this.clippingPlanes,Z),y=Ge.get(C,P.length),y.init(),P.push(y),ye.enabled===!0&&ye.isPresenting===!0){let $e=R.xr.getDepthSensingMesh();$e!==null&&xi($e,J,-1/0,R.sortObjects)}xi(C,J,0,R.sortObjects),y.finish(),S!==null&&S.updateLights(T.state.lightsArray),R.sortObjects===!0&&y.sort(ve,me),Oe=ye.enabled===!1||ye.isPresenting===!1||ye.hasDepthSensing()===!1,Oe&&at.addToRenderList(y,C),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),le===!0&&Ze.beginShadows();let ie=T.state.shadowsArray;if(Qe.render(ie,C,J),le===!0&&Ze.endShadows(),(ne&&b.hasRenderPass())===!1){let $e=y.opaque,H=y.transmissive;if(T.setupLights(),J.isArrayCamera){let Y=J.cameras;if(H.length>0)for(let Q=0,xe=Y.length;Q<xe;Q++){let ge=Y[Q];nn($e,H,C,ge)}Oe&&at.render(C);for(let Q=0,xe=Y.length;Q<xe;Q++){let ge=Y[Q];Fn(y,C,ge,ge.viewport)}}else H.length>0&&nn($e,H,C,J),Oe&&at.render(C),Fn(y,C,J)}z!==null&&B===0&&(ce.updateMultisampleRenderTarget(z),ce.updateRenderTargetMipmap(z)),ne&&b.end(R),C.isScene===!0&&C.onAfterRender(R,C,J),We.resetDefaultState(),O=-1,F=null,x.pop(),x.length>0?(T=x[x.length-1],ce.setTextureUnits(T.state.textureUnits),le===!0&&Ze.setGlobalState(R.clippingPlanes,T.state.camera)):T=null,P.pop(),P.length>0?y=P[P.length-1]:y=null,S!==null&&S.renderEnd()};function xi(C,J,de,ne){if(C.visible===!1)return;if(C.layers.test(J.layers)){if(C.isGroup)de=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(J);else if(C.isLightProbeGrid)T.pushLightProbeGrid(C);else if(C.isLight)T.pushLight(C),C.castShadow&&T.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||C.intersectsFrustum(j)){ne&&be.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ee);let $e=ue.update(C),H=C.material;H.visible&&y.push(C,$e,H,de,be.z,null,J)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||C.intersectsFrustum(j))){let $e=ue.update(C),H=C.material;if(ne&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),be.copy(C.boundingSphere.center)):($e.boundingSphere===null&&$e.computeBoundingSphere(),be.copy($e.boundingSphere.center)),be.applyMatrix4(C.matrixWorld).applyMatrix4(ee)),Array.isArray(H)){let Y=$e.groups;for(let Q=0,xe=Y.length;Q<xe;Q++){let ge=Y[Q],he=H[ge.materialIndex];he&&he.visible&&y.push(C,$e,he,de,be.z,ge,J)}}else H.visible&&y.push(C,$e,H,de,be.z,null,J)}}let qe=C.children;for(let $e=0,H=qe.length;$e<H;$e++)xi(qe[$e],J,de,ne)}function Fn(C,J,de,ne){let{opaque:ie,transmissive:qe,transparent:$e}=C;T.setupLightsView(de),le===!0&&Ze.setGlobalState(R.clippingPlanes,de),ne&&M.viewport(X.copy(ne)),ie.length>0&&on(ie,J,de),qe.length>0&&on(qe,J,de),$e.length>0&&on($e,J,de),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function nn(C,J,de,ne){if((de.isScene===!0?de.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[ne.id]===void 0){let he=et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[ne.id]=new Xt(1,1,{generateMipmaps:!0,type:he?Qt:fn,minFilter:Ci,samples:Math.max(4,L.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Tt.workingColorSpace})}let qe=T.state.transmissionRenderTarget[ne.id],$e=ne.viewport||X;qe.setSize($e.z*R.transmissionResolutionScale,$e.w*R.transmissionResolutionScale);let H=R.getRenderTarget(),Y=R.getActiveCubeFace(),Q=R.getActiveMipmapLevel();R.setRenderTarget(qe),R.getClearColor(_e),De=R.getClearAlpha(),De<1&&R.setClearColor(16777215,.5),R.clear(),Oe&&at.render(de);let xe=R.toneMapping;R.toneMapping=Yn;let ge=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),T.setupLightsView(ne),le===!0&&Ze.setGlobalState(R.clippingPlanes,ne),on(C,de,ne),ce.updateMultisampleRenderTarget(qe),ce.updateRenderTargetMipmap(qe),et.has("WEBGL_multisampled_render_to_texture")===!1){let he=!1;for(let Pe=0,Ie=J.length;Pe<Ie;Pe++){let ke=J[Pe],{object:Je,geometry:Ce,material:se,group:nt}=ke;if(se.side===dn&&Je.layers.test(ne.layers)){let je=se.side;se.side=Mn,se.needsUpdate=!0,Gn(Je,de,ne,Ce,se,nt),se.side=je,se.needsUpdate=!0,he=!0}}he===!0&&(ce.updateMultisampleRenderTarget(qe),ce.updateRenderTargetMipmap(qe))}R.setRenderTarget(H,Y,Q),R.setClearColor(_e,De),ge!==void 0&&(ne.viewport=ge),R.toneMapping=xe}function on(C,J,de){let ne=J.isScene===!0?J.overrideMaterial:null;for(let ie=0,qe=C.length;ie<qe;ie++){let $e=C[ie],{object:H,geometry:Y,group:Q}=$e,xe=$e.material;xe.allowOverride===!0&&ne!==null&&(xe=ne),H.layers.test(de.layers)&&Gn(H,J,de,Y,xe,Q)}}function Gn(C,J,de,ne,ie,qe){S!==null&&ie.isNodeMaterial&&S.setObject(C,ie),C.onBeforeRender(R,J,de,ne,ie,qe),C.modelViewMatrix.multiplyMatrices(de.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),ie.onBeforeRender(R,J,de,ne,C,qe),ie.transparent===!0&&ie.side===dn&&ie.forceSinglePass===!1?(ie.side=Mn,ie.needsUpdate=!0,R.renderBufferDirect(de,J,ne,ie,C,qe),ie.side=as,ie.needsUpdate=!0,R.renderBufferDirect(de,J,ne,ie,C,qe),ie.side=dn):R.renderBufferDirect(de,J,ne,ie,C,qe),C.onAfterRender(R,J,de,ne,ie,qe)}function vi(C,J,de){J.isScene!==!0&&(J=Ee);let ne=te.get(C),ie=T.state.lights,qe=T.state.shadowsArray,$e=ie.state.version,H=Be.getParameters(C,ie.state,qe,J,de,T.state.lightProbeGridArray),Y=Be.getProgramCacheKey(H),Q=ne.programs;ne.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?J.environment:null,ne.fog=J.fog;let xe=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;ne.envMap=Le.get(C.envMap||ne.environment,xe),ne.envMapRotation=ne.environment!==null&&C.envMap===null?J.environmentRotation:C.envMapRotation,Q===void 0&&(C.addEventListener("dispose",Ct),Q=new Map,ne.programs=Q);let ge=Q.get(Y);if(ge!==void 0){if(ne.currentProgram===ge&&ne.lightsStateVersion===$e)return Zi(C,H),ge}else H.uniforms=Be.getUniforms(C),S!==null&&C.isNodeMaterial&&S.build(C,de,H),C.onBeforeCompile(H,R),ge=Be.acquireProgram(H,Y),Q.set(Y,ge),ne.uniforms=H.uniforms;let he=ne.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(he.clippingPlanes=Ze.uniform),Zi(C,H),ne.needsLights=Oi(C),ne.lightsStateVersion=$e,ne.needsLights&&(he.ambientLightColor.value=ie.state.ambient,he.lightProbe.value=ie.state.probe,he.sunLights.value=ie.state.sun,he.sunLightShadows.value=ie.state.sunShadow,he.directionalLights.value=ie.state.directional,he.directionalLightShadows.value=ie.state.directionalShadow,he.spotLights.value=ie.state.spot,he.spotLightShadows.value=ie.state.spotShadow,he.rectAreaLights.value=ie.state.rectArea,he.ltc_1.value=ie.state.rectAreaLTC1,he.ltc_2.value=ie.state.rectAreaLTC2,he.pointLights.value=ie.state.point,he.pointLightShadows.value=ie.state.pointShadow,he.hemisphereLights.value=ie.state.hemi,he.sunShadowMatrix.value=ie.state.sunShadowMatrix,he.sunShadowCascade.value=ie.state.sunShadowCascade,he.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,he.spotLightMatrix.value=ie.state.spotLightMatrix,he.spotLightMap.value=ie.state.spotLightMap,he.pointShadowMatrix.value=ie.state.pointShadowMatrix),ne.lightProbeGrid=T.state.lightProbeGridArray.length>0,ne.currentProgram=ge,ne.uniformsList=null,ge}function ds(C){if(C.uniformsList===null){let J=C.currentProgram.getUniforms();C.uniformsList=_r.seqWithValue(J.seq,C.uniforms)}return C.uniformsList}function Zi(C,J){let de=te.get(C);de.outputColorSpace=J.outputColorSpace,de.batching=J.batching,de.batchingColor=J.batchingColor,de.instancing=J.instancing,de.instancingColor=J.instancingColor,de.instancingMorph=J.instancingMorph,de.skinning=J.skinning,de.morphTargets=J.morphTargets,de.morphNormals=J.morphNormals,de.morphColors=J.morphColors,de.morphTargetsCount=J.morphTargetsCount,de.numClippingPlanes=J.numClippingPlanes,de.numIntersection=J.numClipIntersection,de.vertexAlphas=J.vertexAlphas,de.vertexTangents=J.vertexTangents,de.toneMapping=J.toneMapping}function Ya(C,J){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;v.setFromMatrixPosition(J.matrixWorld);for(let de=0,ne=C.length;de<ne;de++){let ie=C[de];if(ie.texture!==null&&ie.boundingBox.containsPoint(v))return ie}return null}function Is(C,J,de,ne,ie){J.isScene!==!0&&(J=Ee),ce.resetTextureUnits();let qe=J.fog,$e=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial?J.environment:null,H=z===null?R.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:Tt.workingColorSpace,Y=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial&&!ne.envMap||ne.isMeshPhongMaterial&&!ne.envMap,Q=Le.get(ne.envMap||$e,Y),xe=ne.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,ge=!!de.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),he=!!de.morphAttributes.position,Pe=!!de.morphAttributes.normal,Ie=!!de.morphAttributes.color,ke=Yn;ne.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(ke=R.toneMapping);let Je=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,Ce=Je!==void 0?Je.length:0,se=te.get(ne),nt=T.state.lights;if(le===!0&&(Z===!0||C!==F)){let ct=C===F&&ne.id===O;Ze.setState(ne,C,ct)}let je=!1;ne.version===se.__version?(se.needsLights&&se.lightsStateVersion!==nt.state.version||se.outputColorSpace!==H||ie.isBatchedMesh&&se.batching===!1||!ie.isBatchedMesh&&se.batching===!0||ie.isBatchedMesh&&se.batchingColor===!0&&ie._colorsTexture===null||ie.isBatchedMesh&&se.batchingColor===!1&&ie._colorsTexture!==null||ie.isInstancedMesh&&se.instancing===!1||!ie.isInstancedMesh&&se.instancing===!0||ie.isSkinnedMesh&&se.skinning===!1||!ie.isSkinnedMesh&&se.skinning===!0||ie.isInstancedMesh&&se.instancingColor===!0&&ie.instanceColor===null||ie.isInstancedMesh&&se.instancingColor===!1&&ie.instanceColor!==null||ie.isInstancedMesh&&se.instancingMorph===!0&&ie.morphTexture===null||ie.isInstancedMesh&&se.instancingMorph===!1&&ie.morphTexture!==null||se.envMap!==Q||ne.fog===!0&&se.fog!==qe||se.numClippingPlanes!==void 0&&(se.numClippingPlanes!==Ze.numPlanes||se.numIntersection!==Ze.numIntersection)||se.vertexAlphas!==xe||se.vertexTangents!==ge||se.morphTargets!==he||se.morphNormals!==Pe||se.morphColors!==Ie||se.toneMapping!==ke||se.morphTargetsCount!==Ce||!!se.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(je=!0):(je=!0,se.__version=ne.version);let ft=se.currentProgram;je===!0&&(ft=vi(ne,J,ie),S&&ne.isNodeMaterial&&S.onUpdateProgram(ne,ft,se));let bt=!1,Dt=!1,Ot=!1,ht=ft.getUniforms(),wt=se.uniforms;if(M.useProgram(ft.program)&&(bt=!0,Dt=!0,Ot=!0),ne.id!==O&&(O=ne.id,Dt=!0),se.needsLights){let ct=Ya(T.state.lightProbeGridArray,ie);se.lightProbeGrid!==ct&&(se.lightProbeGrid=ct,Dt=!0)}if(bt||F!==C){M.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),ht.setValue(G,"projectionMatrix",C.projectionMatrix),ht.setValue(G,"viewMatrix",C.matrixWorldInverse);let jt=ht.map.cameraPosition;jt!==void 0&&jt.setValue(G,oe.setFromMatrixPosition(C.matrixWorld)),L.logarithmicDepthBuffer&&ht.setValue(G,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&ht.setValue(G,"isOrthographic",C.isOrthographicCamera===!0),F!==C&&(F=C,Dt=!0,Ot=!0)}if(se.needsLights&&(nt.state.sunShadowMap.length>0&&ht.setValue(G,"sunShadowMap",nt.state.sunShadowMap,ce),nt.state.directionalShadowMap.length>0&&ht.setValue(G,"directionalShadowMap",nt.state.directionalShadowMap,ce),nt.state.spotShadowMap.length>0&&ht.setValue(G,"spotShadowMap",nt.state.spotShadowMap,ce),nt.state.pointShadowMap.length>0&&ht.setValue(G,"pointShadowMap",nt.state.pointShadowMap,ce)),ie.isSkinnedMesh){ht.setOptional(G,ie,"bindMatrix"),ht.setOptional(G,ie,"bindMatrixInverse");let ct=ie.skeleton;ct&&(ct.boneTexture===null&&ct.computeBoneTexture(),ht.setValue(G,"boneTexture",ct.boneTexture,ce))}ie.isBatchedMesh&&(ht.setOptional(G,ie,"batchingTexture"),ht.setValue(G,"batchingTexture",ie._matricesTexture,ce),ht.setOptional(G,ie,"batchingIdTexture"),ht.setValue(G,"batchingIdTexture",ie._indirectTexture,ce),ht.setOptional(G,ie,"batchingColorTexture"),ie._colorsTexture!==null&&ht.setValue(G,"batchingColorTexture",ie._colorsTexture,ce));let Et=de.morphAttributes;if((Et.position!==void 0||Et.normal!==void 0||Et.color!==void 0)&&q.update(ie,de,ft),(Dt||se.receiveShadow!==ie.receiveShadow)&&(se.receiveShadow=ie.receiveShadow,ht.setValue(G,"receiveShadow",ie.receiveShadow)),(ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial)&&ne.envMap===null&&J.environment!==null&&(wt.envMapIntensity.value=J.environmentIntensity),wt.dfgLUT!==void 0&&(wt.dfgLUT.value=e_()),Dt){if(ht.setValue(G,"toneMappingExposure",R.toneMappingExposure),se.needsLights&&gc(wt,Ot),qe&&ne.fog===!0&&tt.refreshFogUniforms(wt,qe),tt.refreshMaterialUniforms(wt,ne,ae,$,T.state.transmissionRenderTarget[C.id]),se.needsLights&&se.lightProbeGrid){let ct=se.lightProbeGrid;wt.probesSH.value=ct.texture,wt.probesMin.value.copy(ct.boundingBox.min),wt.probesMax.value.copy(ct.boundingBox.max),wt.probesResolution.value.copy(ct.resolution)}_r.upload(G,ds(se),wt,ce)}if(ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(_r.upload(G,ds(se),wt,ce),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&ht.setValue(G,"center",ie.center),ht.setValue(G,"modelViewMatrix",ie.modelViewMatrix),ht.setValue(G,"normalMatrix",ie.normalMatrix),ht.setValue(G,"modelMatrix",ie.matrixWorld),ne.uniformsGroups!==void 0){let ct=ne.uniformsGroups;for(let jt=0,ln=ct.length;jt<ln;jt++){let Cn=ct[jt];k.update(Cn,ft),k.bind(Cn,ft)}}return ft}function gc(C,J){C.ambientLightColor.needsUpdate=J,C.lightProbe.needsUpdate=J,C.sunLights.needsUpdate=J,C.sunLightShadows.needsUpdate=J,C.directionalLights.needsUpdate=J,C.directionalLightShadows.needsUpdate=J,C.pointLights.needsUpdate=J,C.pointLightShadows.needsUpdate=J,C.spotLights.needsUpdate=J,C.spotLightShadows.needsUpdate=J,C.rectAreaLights.needsUpdate=J,C.hemisphereLights.needsUpdate=J}function Oi(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(C,J,de){let ne=te.get(C);ne.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),te.get(C.texture).__webglTexture=J,te.get(C.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:de,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,J){let de=te.get(C);de.__webglFramebuffer=J,de.__useDefaultFramebuffer=J===void 0},this.setRenderTarget=function(C,J=0,de=0){z=C,V=J,B=de;let ne=null,ie=!1,qe=!1;if(C){let H=te.get(C);if(H.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(G.FRAMEBUFFER,H.__webglFramebuffer),X.copy(C.viewport),re.copy(C.scissor),pe=C.scissorTest,M.viewport(X),M.scissor(re),M.setScissorTest(pe),O=-1;return}else if(H.__webglFramebuffer===void 0)ce.setupRenderTarget(C);else if(H.__hasExternalTextures)ce.rebindTextures(C,te.get(C.texture).__webglTexture,te.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let xe=C.depthTexture;if(H.__boundDepthTexture!==xe){if(xe!==null&&te.has(xe)&&(C.width!==xe.image.width||C.height!==xe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ce.setupDepthRenderbuffer(C)}}let Y=C.texture;(Y.isData3DTexture||Y.isDataArrayTexture||Y.isCompressedArrayTexture)&&(qe=!0);let Q=te.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Q[J])?ne=Q[J][de]:ne=Q[J],ie=!0):C.samples>0&&ce.useMultisampledRTT(C)===!1?ne=te.get(C).__webglMultisampledFramebuffer:Array.isArray(Q)?ne=Q[de]:ne=Q,X.copy(C.viewport),re.copy(C.scissor),pe=C.scissorTest}else X.copy(Se).multiplyScalar(ae).floor(),re.copy(W).multiplyScalar(ae).floor(),pe=we;if(de!==0&&(ne=I),M.bindFramebuffer(G.FRAMEBUFFER,ne)&&M.drawBuffers(C,ne),M.viewport(X),M.scissor(re),M.setScissorTest(pe),ie){let H=te.get(C.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+J,H.__webglTexture,de)}else if(qe){let H=J;for(let Y=0;Y<C.textures.length;Y++){let Q=te.get(C.textures[Y]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Y,Q.__webglTexture,de,H)}}else if(C!==null&&de!==0){let H=te.get(C.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,H.__webglTexture,de)}O=-1};function Tr(C){let J=te.get(C);return(J.__readFormat!==C.format||J.__readType!==C.type)&&(J.__readFormat=C.format,J.__readType=C.type,J.__formatReadable=L.textureFormatReadable(C.format),J.__typeReadable=L.textureTypeReadable(C.type)),J}this.readRenderTargetPixels=function(C,J,de,ne,ie,qe,$e,H=0){if(!(C&&C.isWebGLRenderTarget)){dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Y=te.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&$e!==void 0&&(Y=Y[$e]),Y){M.bindFramebuffer(G.FRAMEBUFFER,Y);try{let Q=C.textures[H],xe=Q.format,ge=Q.type;C.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+H);let he=Tr(Q);if(he.__formatReadable===!1){dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(he.__typeReadable===!1){dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=C.width-ne&&de>=0&&de<=C.height-ie&&G.readPixels(J,de,ne,ie,Ve.convert(xe),Ve.convert(ge),qe)}finally{let Q=z!==null?te.get(z).__webglFramebuffer:null;M.bindFramebuffer(G.FRAMEBUFFER,Q)}}},this.readRenderTargetPixelsAsync=async function(C,J,de,ne,ie,qe,$e,H=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Y=te.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&$e!==void 0&&(Y=Y[$e]),Y)if(J>=0&&J<=C.width-ne&&de>=0&&de<=C.height-ie){M.bindFramebuffer(G.FRAMEBUFFER,Y);let Q=C.textures[H],xe=Q.format,ge=Q.type;C.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+H);let he=Tr(Q);if(he.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(he.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Pe=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,Pe),G.bufferData(G.PIXEL_PACK_BUFFER,qe.byteLength,G.STREAM_READ),G.readPixels(J,de,ne,ie,Ve.convert(xe),Ve.convert(ge),0),G.bindBuffer(G.PIXEL_PACK_BUFFER,null);let Ie=z!==null?te.get(z).__webglFramebuffer:null;M.bindFramebuffer(G.FRAMEBUFFER,Ie);let ke=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await Id(G,ke,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,Pe),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,qe),G.bindBuffer(G.PIXEL_PACK_BUFFER,null),G.deleteBuffer(Pe),G.deleteSync(ke),qe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,J=null,de=0){let ne=Math.pow(2,-de),ie=Math.floor(C.image.width*ne),qe=Math.floor(C.image.height*ne),$e=J!==null?J.x:0,H=J!==null?J.y:0;ce.setTexture2D(C,0),G.copyTexSubImage2D(G.TEXTURE_2D,de,0,0,$e,H,ie,qe),M.unbindTexture()},this.copyTextureToTexture=function(C,J,de=null,ne=null,ie=0,qe=0){let $e,H,Y,Q,xe,ge,he,Pe,Ie,ke=C.isCompressedTexture?C.mipmaps[qe]:C.image;if(de!==null)$e=de.max.x-de.min.x,H=de.max.y-de.min.y,Y=de.isBox3?de.max.z-de.min.z:1,Q=de.min.x,xe=de.min.y,ge=de.isBox3?de.min.z:0;else{let wt=Math.pow(2,-ie);$e=Math.floor(ke.width*wt),H=Math.floor(ke.height*wt),C.isDataArrayTexture?Y=ke.depth:C.isData3DTexture?Y=Math.floor(ke.depth*wt):Y=1,Q=0,xe=0,ge=0}ne!==null?(he=ne.x,Pe=ne.y,Ie=ne.z):(he=0,Pe=0,Ie=0);let Je=Ve.convert(J.format),Ce=Ve.convert(J.type),se;J.isData3DTexture?(ce.setTexture3D(J,0),se=G.TEXTURE_3D):J.isDataArrayTexture||J.isCompressedArrayTexture?(ce.setTexture2DArray(J,0),se=G.TEXTURE_2D_ARRAY):(ce.setTexture2D(J,0),se=G.TEXTURE_2D),M.activeTexture(G.TEXTURE0),M.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,J.flipY),M.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),M.pixelStorei(G.UNPACK_ALIGNMENT,J.unpackAlignment);let nt=M.getParameter(G.UNPACK_ROW_LENGTH),je=M.getParameter(G.UNPACK_IMAGE_HEIGHT),ft=M.getParameter(G.UNPACK_SKIP_PIXELS),bt=M.getParameter(G.UNPACK_SKIP_ROWS),Dt=M.getParameter(G.UNPACK_SKIP_IMAGES);M.pixelStorei(G.UNPACK_ROW_LENGTH,ke.width),M.pixelStorei(G.UNPACK_IMAGE_HEIGHT,ke.height),M.pixelStorei(G.UNPACK_SKIP_PIXELS,Q),M.pixelStorei(G.UNPACK_SKIP_ROWS,xe),M.pixelStorei(G.UNPACK_SKIP_IMAGES,ge);let Ot=C.isDataArrayTexture||C.isData3DTexture,ht=J.isDataArrayTexture||J.isData3DTexture;if(C.isDepthTexture){let wt=te.get(C),Et=te.get(J),ct=te.get(wt.__renderTarget),jt=te.get(Et.__renderTarget);M.bindFramebuffer(G.READ_FRAMEBUFFER,ct.__webglFramebuffer),M.bindFramebuffer(G.DRAW_FRAMEBUFFER,jt.__webglFramebuffer);for(let ln=0;ln<Y;ln++)Ot&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,te.get(C).__webglTexture,ie,ge+ln),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,te.get(J).__webglTexture,qe,Ie+ln)),G.blitFramebuffer(Q,xe,$e,H,he,Pe,$e,H,G.DEPTH_BUFFER_BIT,G.NEAREST);M.bindFramebuffer(G.READ_FRAMEBUFFER,null),M.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(ie!==0||C.isRenderTargetTexture||te.has(C)){let wt=te.get(C),Et=te.get(J);M.bindFramebuffer(G.READ_FRAMEBUFFER,A),M.bindFramebuffer(G.DRAW_FRAMEBUFFER,N);for(let ct=0;ct<Y;ct++)Ot?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,wt.__webglTexture,ie,ge+ct):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,wt.__webglTexture,ie),ht?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Et.__webglTexture,qe,Ie+ct):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Et.__webglTexture,qe),ie!==0?G.blitFramebuffer(Q,xe,$e,H,he,Pe,$e,H,G.COLOR_BUFFER_BIT,G.NEAREST):ht?G.copyTexSubImage3D(se,qe,he,Pe,Ie+ct,Q,xe,$e,H):G.copyTexSubImage2D(se,qe,he,Pe,Q,xe,$e,H);M.bindFramebuffer(G.READ_FRAMEBUFFER,null),M.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else ht?C.isDataTexture||C.isData3DTexture?G.texSubImage3D(se,qe,he,Pe,Ie,$e,H,Y,Je,Ce,ke.data):J.isCompressedArrayTexture?G.compressedTexSubImage3D(se,qe,he,Pe,Ie,$e,H,Y,Je,ke.data):G.texSubImage3D(se,qe,he,Pe,Ie,$e,H,Y,Je,Ce,ke):C.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,qe,he,Pe,$e,H,Je,Ce,ke.data):C.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,qe,he,Pe,ke.width,ke.height,Je,ke.data):G.texSubImage2D(G.TEXTURE_2D,qe,he,Pe,$e,H,Je,Ce,ke);M.pixelStorei(G.UNPACK_ROW_LENGTH,nt),M.pixelStorei(G.UNPACK_IMAGE_HEIGHT,je),M.pixelStorei(G.UNPACK_SKIP_PIXELS,ft),M.pixelStorei(G.UNPACK_SKIP_ROWS,bt),M.pixelStorei(G.UNPACK_SKIP_IMAGES,Dt),qe===0&&J.generateMipmaps&&G.generateMipmap(se),M.unbindTexture()},this.initRenderTarget=function(C){te.get(C).__webglFramebuffer===void 0&&ce.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?ce.setTextureCube(C,0):C.isData3DTexture?ce.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?ce.setTexture2DArray(C,0):ce.setTexture2D(C,0),M.unbindTexture()},this.resetState=function(){V=0,B=0,z=null,M.reset(),We.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Tt._getUnpackColorSpace()}};var pt=(i,e,t)=>Math.min(t,Math.max(e,i)),rt=(i,e,t)=>i+(e-i)*t,lt=(i,e,t)=>{let n=pt((t-i)/(e-i),0,1);return n*n*(3-2*n)};function Un(i){let e=i>>>0;return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function gn(i,e,t=0){let n=Math.imul(i|0,374761393)+Math.imul(e|0,668265263)+Math.imul(t|0,2147483647);return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}function t_(i,e,t=1024,n=1024,s=0){let r=Math.floor(i),a=Math.floor(e),o=i-r,c=e-a,l=o*o*(3-2*o),h=c*c*(3-2*c),p=m=>(m%t+t)%t,d=m=>(m%n+n)%n,u=gn(p(r),d(a),s),f=gn(p(r+1),d(a),s),_=gn(p(r),d(a+1),s),g=gn(p(r+1),d(a+1),s);return rt(rt(u,f,l),rt(_,g,l),h)}function kt(i,e,t=4,n=1024,s=1024,r=0){let a=.5,o=1,c=0,l=0;for(let h=0;h<t;h++)c+=a*t_(i*o,e*o,n*o,s*o,r+h*17),l+=a,a*=.5,o*=2;return c/l}var gf=()=>window.innerWidth<760||/Android|iPhone|iPad|iPod/i.test(navigator.userAgent);function Ps(i,e={}){let t=i.attributes.position,n=i.attributes.normal,s=i.attributes.uv,r=e.ox||0,a=e.oy||0,o=e.oz||0;for(let c=0;c<t.count;c++){let l=n.getX(c),h=n.getY(c),p=n.getZ(c),d=t.getX(c)+r,u=t.getY(c)+a,f=t.getZ(c)+o,_,g;Math.abs(p)>.5?(_=p>0?d:-d,g=u):Math.abs(l)>.5?(_=l>0?-f:f,g=u):(e.swap?(_=f,g=d):(_=d,g=f),h<0&&(g=-g)),s.setXY(c,_,g)}s.needsUpdate=!0}var xf=4,$u=1,vf=i=>{xf=Math.min(8,i)},_f=i=>{$u=i>=2?1:.5},oc=()=>$u;function Ju(i,e,t){let n=new Kn(i,e,e,En,fn);return n.wrapS=n.wrapT=cn,n.magFilter=rn,n.minFilter=Ci,n.generateMipmaps=!0,n.colorSpace=t?Ut:mi,n.anisotropy=xf,n.needsUpdate=!0,n}function Xi(i,e,t,n){i=Math.max(128,Math.round(i*$u));let s=i*i,r=new Uint8Array(s*4),a=new Uint8Array(s*4),o=new Uint8Array(s*4),c=new Float32Array(s);for(let u=0;u<i;u++)for(let f=0;f<i;f++){let _=u*i+f,g=n((f+.5)/i,(u+.5)/i);r[_*4]=pt(g[0],0,1)*255,r[_*4+1]=pt(g[1],0,1)*255,r[_*4+2]=pt(g[2],0,1)*255,r[_*4+3]=255,c[_]=g[3],a[_*4]=255,a[_*4+1]=pt(g[4],0,1)*255,a[_*4+2]=pt(g[5]||0,0,1)*255,a[_*4+3]=255}let l=e/i;for(let u=0;u<i;u++)for(let f=0;f<i;f++){let _=u*i+f,g=(c[u*i+(f+1)%i]-c[u*i+(f-1+i)%i])*t/(2*l),m=(c[(u+1)%i*i+f]-c[(u-1+i)%i*i+f])*t/(2*l),E=Math.hypot(g,m,1);o[_*4]=(-g/E*.5+.5)*255,o[_*4+1]=(-m/E*.5+.5)*255,o[_*4+2]=(1/E*.5+.5)*255,o[_*4+3]=255}let h=Ju(r,i,!0),p=Ju(o,i,!1),d=Ju(a,i,!1);return[h,p,d].forEach(u=>u.repeat.set(1/e,1/e)),{map:h,normalMap:p,rmMap:d,tile:e}}var Oa=(i,e)=>[i[0]*e,i[1]*e,i[2]*e];function yf(i=[.2,.22,.25]){return Xi(512,.6,.02,(e,t)=>{let n=t*3,s=Math.floor(n),r=n-s,a=kt(e*5+s*3.1,r*22,3,5,22,s),o,c=1;r>.94?(o=0,c=.45):o=.28+.72*Math.pow(1-r/.94,1.4);let l=(.9+.2*gn(s,3,5))*(.9+.2*a)*c;return[...Oa(i,l),o+(a-.5)*.08,.72+.2*a,0]})}function Mf(i=[.13,.145,.16]){return Xi(512,1.2,.025,(e,t)=>{let n=e*4,s=Math.floor(n),r=n-s,a=Math.min(r,1-r)*.3,o=kt(s*5.1+r*3,t*7,3,20,7,s),c=.4+(o-.5)*.1,l=1;a<.026?c=1:a<.05&&(c=0,l=.5);let h=(.92+.16*gn(s,1,9))*(.9+.2*o)*l;return[...Oa(i,h),c,.7+.2*o,0]})}function Sf(i=[.1,.105,.115]){return Xi(512,.9,.018,(e,t)=>{let n=e*2%1,s=Math.min(n,1-n)*.45,r=s<.028?Math.pow(1-s/.028,.7):0,a=(kt(e*3,t*3,3,3,3,4)-.5)*.1,o=.34+.12*kt(e*8,t*40,2,8,40,2);return[...Oa(i,1+(kt(e*2,t*6,2,2,6,11)-.5)*.25+r*.35),.1+r+a,o,.8]})}function lc(i=[.66,.43,.26],e=[.4,.24,.13]){return Xi(512,.6,.01,(t,n)=>{let s=kt(t*3,n*1.2,3,3,2,21)*3,r=.5+.5*Math.sin((t*10+s)*Math.PI*2/1),a=kt(t*18,n*2.4,3,18,2,33),o=pt(.25+r*.35+a*.5,0,1),c=t*6%1,l=c<.012||c>.988?.45:1;return[rt(e[0],i[0],o)*l,rt(e[1],i[1],o)*l,rt(e[2],i[2],o)*l,.55+a*.3-(l<1?.5:0),.55+.15*a,0]})}function Ef(i=[.56,.55,.53]){return Xi(512,1.2,.012,(e,t)=>{let n=t*8,s=Math.floor(n),r=n-s,a=gn(s,7,2)*40,o=kt(e*4+a,r*10,3,4,10,s),c=gn(Math.floor(e*512),Math.floor(t*512),3)>.985?.6:1,l=r<.04?.7:1,h=(.9+.2*o)*c*l*(.94+.12*gn(s,4,1));return[...Oa(i,h),.5+(o-.5)*.4-(r<.04?.3:0),.92,0]})}function bf(){return Xi(512,1,.045,(i,e)=>{let t=i*5,n=e*4,s=Math.floor(t),r=Math.floor(n),a=9,o=9,c=0;for(let g=-1;g<=1;g++)for(let m=-1;m<=1;m++){let E=s+m,w=r+g,v=(E%5+5)%5,y=(w%4+4)%4,T=E+.15+gn(v,y,1)*.7,P=w+.15+gn(v,y,2)*.7,x=Math.hypot((t-T)*1,(n-P)*1.25);x<a?(o=a,a=x,c=v*31+y):x<o&&(o=x)}let l=o-a,h=lt(.04,.3,l),p=gn(c,5,3),d=.4+p*.2,u=gn(c,9,1)*.06,f=.9+.2*kt(i*12,e*12,3,12,12,c),_=h>.02?1:.35;return[(d+u)*f*_,(d+u*.6)*f*_,(d-.02)*f*_,h*(.7+.3*p),.88,0]})}function wf(){return Xi(512,5,.06,(i,e)=>{let t=kt(i*5,e*5,4,5,5,71),n=kt(i*60,e*60,2,60,60,72),s=gn(Math.floor(i*512),Math.floor(e*512),8)>.988,r=.93+.07*t;return[.9*r,.94*r,1*r,t*.8+n*.2,s?.12:.78+n*.15,0]})}function Tf(i=[.13,.135,.145]){return Xi(256,3,.01,(e,t)=>{let n=gn(Math.floor(e*256),Math.floor(t*256),12),s=kt(e*6,t*6,3,6,6,9),r=.8+.5*n*n+.25*s;return[...Oa(i,r),n*.5+s*.3,.88-n*.1,0]})}function Af(){return Xi(512,4,.05,(i,e)=>{let t=kt(i*70,e*70,2,70,70,3),n=kt(i*4,e*4,4,4,4,5),s=kt(i*9,e*9,3,9,9,6),r=.75+.5*t;return[rt(.22,.4,s)*r+n*.05,rt(.3,.4,s)*r*(.85+.3*n),rt(.1,.16,s)*r,t,.92,0]})}function Rf(i,e){let t=new Uint8Array(i*i*4);for(let s=0;s<i;s++)for(let r=0;r<i;r++){let a=(r+.5)/i,o=(s+.5)/i,c=.45+.55*kt(a*6,o*4,4,1024,1024,41);c=lt(.2,.95,c),c*=.35+.65*lt(0,.18,Math.min(a,1-a,o,1-o)+.04*kt(a*30,o*30,2,1024,1024,5)),e&&(c*=e(a,o));let l=(s*i+r)*4;t[l]=255,t[l+1]=pt(c,0,1)*255,t[l+2]=255,t[l+3]=255}let n=new Kn(t,i,i,En,fn);return n.magFilter=n.minFilter=rn,n.generateMipmaps=!1,n.needsUpdate=!0,n}function Cf(i="living"){let e=document.createElement("canvas");e.width=160,e.height=160;let t=e.getContext("2d"),n={living:["#6b4426","#d99a55","#f5c27c"],kitchen:["#7a5a3a","#e6b673","#fff0cf"],bed:["#4a3a52","#c78b7a","#f1c6a0"],bath:["#4f6670","#a9c7cf","#eaf6f4"],hall:["#5a4128","#c58c52","#efba78"]}[i]||["#6b4426","#d99a55","#f5c27c"],s=t.createLinearGradient(0,0,0,160);s.addColorStop(0,n[0]),s.addColorStop(.55,n[1]),s.addColorStop(1,n[2]),t.fillStyle=s,t.fillRect(0,0,160,160);let r=i==="kitchen"?80:40+Math.random()*80,a=t.createRadialGradient(r,52,2,r,52,70);if(a.addColorStop(0,"rgba(255,246,214,.95)"),a.addColorStop(1,"rgba(255,220,150,0)"),t.fillStyle=a,t.fillRect(0,0,160,160),t.fillStyle="rgba(30,18,10,.55)",i==="living"&&(t.fillRect(14,108,92,52),t.fillRect(14,88,92,22),t.fillRect(112,70,6,90)),i==="kitchen"){t.fillRect(0,100,160,60),t.fillStyle="rgba(30,18,10,.4)";for(let l=0;l<4;l++)t.fillRect(8+l*38,20,30,40)}i==="bed"&&(t.fillRect(20,96,120,64),t.fillRect(20,70,14,40)),i==="bath"&&(t.fillStyle="rgba(20,40,48,.35)",t.fillRect(0,112,160,48),t.fillRect(104,40,40,36)),i==="hall"&&(t.fillRect(0,128,160,32),t.fillRect(70,30,36,90));let o=t.createLinearGradient(0,0,40,0);o.addColorStop(0,"rgba(40,24,16,.7)"),o.addColorStop(1,"rgba(40,24,16,0)"),t.fillStyle=o,t.fillRect(0,0,40,160),t.save(),t.translate(160,0),t.scale(-1,1),t.fillStyle=o,t.fillRect(0,0,40,160),t.restore();let c=new an(e);return c.colorSpace=Ut,c}function Sr(i="rgba(255,190,120,0.9)",e="rgba(255,150,80,0)"){let t=document.createElement("canvas");t.width=t.height=128;let n=t.getContext("2d"),s=n.createRadialGradient(64,64,0,64,64,64);s.addColorStop(0,i),s.addColorStop(.35,i.replace(/[\d.]+\)$/,"0.35)")),s.addColorStop(1,e),n.fillStyle=s,n.fillRect(0,0,128,128);let r=new an(t);return r.colorSpace=Ut,r}function Pf(){let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d"),t=e.createRadialGradient(64,64,20,64,64,64);t.addColorStop(0,"rgba(244,189,126,0.55)"),t.addColorStop(1,"rgba(244,189,126,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),e.beginPath(),e.arc(64,64,30,0,Math.PI*2),e.fillStyle="#d98a4e",e.fill(),e.lineWidth=3,e.strokeStyle="#f4bd7e",e.stroke(),e.beginPath(),e.moveTo(49,79),e.lineTo(64,49),e.lineTo(79,79),e.lineWidth=6.5,e.strokeStyle="#121311",e.lineJoin="miter",e.stroke(),e.fillStyle="#121311",e.fillRect(60.5,64.5,7,7);let n=new an(i);return n.colorSpace=Ut,n}function qi(i="rgba(255,255,255,0.6)"){let e=document.createElement("canvas");e.width=e.height=64;let t=e.getContext("2d"),n=t.createRadialGradient(32,32,0,32,32,32);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.25,i),n.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=n,t.fillRect(0,0,64,64);let s=new an(e);return s.colorSpace=Ut,s}function If(){let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d");for(let n=0;n<9;n++){let s=64+(gn(n,1,3)-.5)*40,r=64+(gn(n,2,3)-.5)*40,a=22+gn(n,3,3)*22,o=e.createRadialGradient(s,r,0,s,r,a);o.addColorStop(0,"rgba(255,255,255,0.28)"),o.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=o,e.fillRect(0,0,128,128)}let t=new an(i);return t.colorSpace=Ut,t}function Df(){let i={lap:yf([.3,.33,.37]),bb:Mf([.2,.22,.25]),seam:Sf([.1,.105,.115]),cedar:lc(),walnut:lc([.46,.29,.17],[.25,.15,.09]),oak:lc([.8,.64,.44],[.56,.4,.25]),form:Ef(),stone:bf(),snow:wf(),asphalt:Tf(),grass:Af()},e=(a,o={})=>new Rt({map:a.map,normalMap:a.normalMap,roughnessMap:a.rmMap,metalnessMap:a.rmMap,roughness:1,metalness:1,...o}),t=(a,o=.8,c=0,l={})=>new Rt({color:a,roughness:o,metalness:c,...l}),n=(a,o)=>(a.userData.shell=!0,a.userData.th=o,a),s=(a,o)=>(a.userData.th=o,a),r={lap:n(e(i.lap,{normalScale:new Ae(1,1)}),[.3,.05,.3]),bb:n(e(i.bb,{normalScale:new Ae(1,1)}),[.3,.05,.3]),roof:n(e(i.seam,{normalScale:new Ae(1.2,1.2),envMapIntensity:1.3}),[.4,.12]),cedar:n(e(i.cedar),[.42,0,.25]),walnut:n(e(i.walnut),[.52]),oak:n(e(i.oak),[.55]),form:n(e(i.form),[.33]),stone:n(e(i.stone),[.33]),drywall:n(t(14209475,.95),[.6]),trim:n(t(855568,.42,.55,{envMapIntensity:1.2}),[.32,0,.2]),reveal:n(t(14275785,.85),[.45]),slab:n(t(7828331,1),[.35]),concrete:n(t(7301987,1),[.33]),floor:n(t(10518364,.7),[.55]),door:n(e(i.walnut),[.52]),insul:n(t(13087881,1),[.5]),counter:n(t(2959910,.5,.05),[.55]),snowRoof:n(t(15265527,.85,0,{alphaToCoverage:!0}),[.03]),ice:s(new Bn({color:13625845,roughness:.08,metalness:0,transparent:!0,opacity:.85,clearcoat:1,envMapIntensity:1.6}),[.1]),white:s(t(14605267,.5,.05),[.6]),steel:s(t(10133670,.35,.85),[.55]),pvc:s(t(15131612,.4),[.24]),pipe:s(t(6255750,.5,.4),[.45]),copper:s(t(14256718,.28,.9,{envMapIntensity:1.4}),[.68]),solar:s(new Bn({color:726832,roughness:.16,metalness:.7,clearcoat:1,clearcoatRoughness:.06,envMapIntensity:1.5}),[.17]),solarFrame:s(t(11186616,.4,.9),[.3]),neighbor:s(e(i.lap,{color:9080210}),[.26,.04,.24]),neighborRoof:s(e(i.seam,{color:6711920}),[.4,.12]),asphalt:s(e(i.asphalt),[.3]),pavement:s(t(9144706,.95),[.3]),sconce:s(new Rt({color:1709070,emissive:16756833,emissiveIntensity:3,roughness:.4}),[.9]),lampHead:s(new Rt({color:2236962,emissive:16761466,emissiveIntensity:4,roughness:.4}),[.95]),pole:s(t(1776928,.5,.7),[.3]),spruce:s(new Rt({vertexColors:!0,roughness:.92,metalness:0}),[.13]),trunk:s(t(2760471,1),[.18]),shrub:s(new Rt({vertexColors:!0,roughness:1}),[.14]),fabric:s(t(6970708,.95),[.5]),fabric2:s(t(4016726,.95),[.5]),leather:s(t(8014634,.55),[.5]),ceramic:s(t(15921129,.18,0),[.45]),mirror:s(t(12570840,.05,.9),[.4]),black:s(t(1381653,.5,.3),[.4]),warmLight:s(new Rt({color:2236440,emissive:16767392,emissiveIntensity:5,roughness:.6}),[1])};return["lap","bb","roof","drywall","form","stone","trim","cedar","door","walnut","reveal","snowRoof"].forEach(a=>{r[a].userData.wall=!0}),Object.values(r).forEach(a=>{a.userData.th===void 0&&(a.userData.th=[.3])}),{M:r,T:i}}function Ku(i){let e=new Rt({color:395533,roughness:.05,metalness:.25,emissive:16777215,emissiveMap:i,emissiveIntensity:0,envMapIntensity:1.6});return e.userData.shell=!0,e.userData.pane=!0,e.userData.wall=!0,e.userData.th=[.86],e}var cc=[[-90,"#04060d","#0c1124"],[-20,"#05070f","#10162b"],[-14,"#080d20","#1a2140"],[-9,"#0f1838","#33406a"],[-5,"#1a2650","#7a6f94"],[-2,"#27345e","#d98d62"],[1,"#35508a","#eba66f"],[5,"#43689f","#e8bf8f"],[12,"#4a78b0","#dccfb4"],[25,"#4a80ba","#c7dcec"],[50,"#3f78b8","#b4d2e8"],[90,"#3a72b0","#accce6"]],n_=`varying vec3 vDir;
void main(){ vDir = normalize(position); vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_Position = p.xyww; }`,i_=`precision highp float;
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
}`;function Lf(i,e){let t={uTop:{value:new ze},uHor:{value:new ze},uLow:{value:new ze},uSunDir:{value:new D(0,1,0)},uSunCol:{value:new ze(1,.8,.6)},uMoonDir:{value:new D(.3,.55,-.78).normalize()},uSunI:{value:0},uMoonI:{value:0},uTime:{value:0},uCloud:{value:.4},uAurora:{value:0},uThermal:{value:0},uSnowLine:{value:0}},n=new It({uniforms:t,vertexShader:n_,fragmentShader:i_,side:Mn,depthWrite:!1,depthTest:!1}),s=new Re(new Tn(500,48,28),n);s.renderOrder=-10,s.frustumCulled=!1,s.userData.noThermal=!0,s.userData.noAO=!0,e.add(s);let r=Un(7),a=1500,o=new Float32Array(a*3);for(let y=0;y<a;y++){let T=r()*Math.PI*2,P=Math.acos(1-r()*1),x=480;o[y*3]=Math.sin(P)*Math.cos(T)*x,o[y*3+1]=Math.cos(P)*x,o[y*3+2]=Math.sin(P)*Math.sin(T)*x}let c=new Mt;c.setAttribute("position",new gt(o,3));let l=new hn({color:14674175,size:1.7,sizeAttenuation:!1,transparent:!0,opacity:0,fog:!1,depthWrite:!1}),h=new yn(c,l);h.frustumCulled=!1,h.renderOrder=-9,h.userData.noAO=!0,e.add(h);function p(y,T,P){let x=document.createElement("canvas");x.width=4096,x.height=256;let b=x.getContext("2d"),R=Un(y);b.filter="blur(1.4px)";let U=Array.from({length:8},()=>R()*6.28);b.clearRect(0,0,2048,256),b.beginPath(),b.moveTo(0,256);let S=[3,7,15,31,63],I=[.5,.28,.15,.08*P,.045*P];for(let V=0;V<=4096;V+=2){let B=V/4096*Math.PI*2,z=0;for(let O=0;O<5;O++)z+=I[O]*Math.pow(1-Math.abs(Math.sin(B*S[O]+U[O])),1.6);b.lineTo(V,256-pt(z/1.06,0,1)*T)}b.lineTo(4096,256),b.closePath();let A=b.createLinearGradient(0,256-T,0,256);A.addColorStop(0,"rgba(255,255,255,1)"),A.addColorStop(.3,"rgba(232,236,248,1)"),A.addColorStop(.62,"rgba(120,132,160,1)"),A.addColorStop(1,"rgba(66,74,96,0)"),b.fillStyle=A,b.fill();let N=new an(x);return N.colorSpace=Ut,N.wrapS=cn,N.anisotropy=4,N}function d(y){let T=document.createElement("canvas");T.width=2048,T.height=128;let P=T.getContext("2d"),x=Un(y);P.clearRect(0,0,2048,128),P.fillStyle="rgba(255,255,255,1)";for(let R=0;R<2048;R+=3){let U=34+x()*40+Math.sin(R*.01)*10,S=6+x()*7;P.beginPath(),P.moveTo(R-S,128),P.lineTo(R,128-U),P.lineTo(R+S,128),P.fill()}P.fillRect(0,100,2048,28);let b=new an(T);return b.colorSpace=Ut,b.wrapS=cn,b}let u=[{tex:p(3,220,1),R:450,h:190,y:40,k:.8,mix:.86},{tex:p(11,170,.8),R:360,h:120,y:16,k:.55,mix:.68},{tex:d(5),R:300,h:34,y:8,k:.22,mix:.2}].map(y=>{let T=new Ht({map:y.tex,transparent:!0,side:Mn,depthWrite:!1,fog:!1,color:4478327}),P=new Re(new Bt(y.R,y.R,y.h,96,1,!0),T);return P.position.y=y.y,P.renderOrder=-8,P.frustumCulled=!1,P.userData.noThermal=!0,P.userData.noAO=!0,e.add(P),{...y,mat:T,mesh:P}}),f=new yr(i),_=new _s,g=new Re(new Tn(50,32,16),n.clone());g.material.uniforms=t,g.material.depthTest=!0,_.add(g);let m=null,E="",w=new ze,v=new ze;return{dome:s,mat:n,U:t,stars:h,horizon:new ze,zenith:new ze,update(y,T){let P=pt(y.elev,-90,90),x=0;for(;x<cc.length-2&&cc[x+1][0]<=P;)x++;let[b,R,U]=cc[x],[S,I,A]=cc[x+1],N=lt(0,1,(P-b)/(S-b));t.uTop.value.copy(w.set(R)).lerp(v.set(I),N),t.uHor.value.copy(w.set(U)).lerp(v.set(A),N),y.seasonTint&&(t.uTop.value.lerp(y.seasonTint.top,y.seasonTint.k),t.uHor.value.lerp(y.seasonTint.hor,y.seasonTint.k)),t.uLow.value.copy(t.uHor.value).multiplyScalar(.55+.25*y.daylight).lerp(w.set(y.snowy?7174806:2764834),.18+.2*y.daylight),t.uLow.value.multiplyScalar(1-.82*(y.voidK||0)),t.uSunDir.value.copy(y.sunDir);let V=1-lt(0,.5,y.sunDir.y);t.uSunCol.value.setRGB(1,rt(.93,.56,V),rt(.84,.32,V)),t.uSunI.value=lt(-.14,.04,y.sunDir.y)*rt(1,1.4,V),t.uMoonI.value=(1-y.daylight)*.9,t.uTime.value=T,t.uCloud.value=y.cloud??.4,t.uAurora.value=y.aurora||0,t.uThermal.value=y.thermal||0,this.horizon.copy(t.uHor.value),this.zenith.copy(t.uTop.value),l.opacity=pt((1-y.daylight*1.2)*.95,0,1)*(1-(y.thermal||0)),u.forEach(B=>{B.mat.color.copy(t.uHor.value).lerp(t.uTop.value,.12).multiplyScalar(B.k*(.55+.7*y.daylight)).lerp(w.set(16777215),0).multiplyScalar(1),B.mat.color.lerp(t.uHor.value,1-B.mix),B.mat.color.lerp(v.set(2101306),(y.thermal||0)*.9)})},follow(y){s.position.copy(y),h.position.copy(y),u.forEach(T=>{T.mesh.position.x=y.x,T.mesh.position.z=y.z})},refreshEnv(y){let T=[t.uTop.value.getHexString(),t.uHor.value.getHexString(),t.uSunI.value.toFixed(2),t.uAurora.value.toFixed(1),t.uThermal.value.toFixed(1),t.uSunDir.value.x.toFixed(2),t.uSunDir.value.y.toFixed(2)].join("|");if(!y&&T===E)return;E=T;let P=m;m=f.fromScene(_,.015,.1,200,{size:128}),e.environment=m.texture,P&&P.dispose()}}}var Li={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Sn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},s_=new rs(-1,1,1,-1,0,1),Qu=class extends Mt{constructor(){super(),this.setAttribute("position",new yt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new yt([0,2,0,0,2,0],2))}},r_=new Qu,ti=class{constructor(e){this._mesh=new Re(r_,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,s_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Er=class extends Sn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof It?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Dn.clone(e.uniforms),this.material=new It({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new ti(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Ba=class extends Sn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},uc=class extends Sn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var hc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Ae);this._width=n.width,this._height=n.height,t=new Xt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Qt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Er(Li),this.copyPass.material.blending=tn,this.timer=new ma}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Ba!==void 0&&(a instanceof Ba?n=!0:a instanceof uc&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Ae);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var dc=class extends Sn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new ze}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var Uf={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ze(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var br=class i extends Sn{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Ae(e.x,e.y):new Ae(256,256),this.clearColor=new ze(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Xt(r,a,{type:Qt,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let p=new Xt(r,a,{type:Qt,depthBuffer:!1});p.texture.name="UnrealBloomPass.h"+h,p.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(p);let d=new Xt(r,a,{type:Qt,depthBuffer:!1});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}let o=Uf;this.highPassUniforms=Dn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new It({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let c=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Ae(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Dn.clone(Li.uniforms),this.blendMaterial=new It({uniforms:this.copyUniforms,vertexShader:Li.vertexShader,fragmentShader:Li.fragmentShader,premultipliedAlpha:!0,blending:Nt,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ze,this._oldClearAlpha=1,this._basic=new Ht,this._fsQuad=new ti(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Ae(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let s=[],r=[];for(let a=1;a<e;a+=2){let o=t[a],c=a+1<e?t[a+1]:0,l=o+c;s.push((a*o+(a+1)*c)/l),r.push(l)}return new It({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new Ae(.5,.5)},direction:{value:new Ae(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new It({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};br.BlurDirectionX=new Ae(1,0);br.BlurDirectionY=new Ae(0,1);var Ha={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var fc=class extends Sn{constructor(){super(),this.isOutputPass=!0,this.uniforms=Dn.clone(Ha.uniforms),this.material=new dr({name:Ha.name,uniforms:this.uniforms,vertexShader:Ha.vertexShader,fragmentShader:Ha.fragmentShader}),this._fsQuad=new ti(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Tt.getTransfer(this._outputColorSpace)===Lt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===_a?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===ya?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Ma?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ls?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ea?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ba?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Sa&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var za={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Ae},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new st},cameraProjectionMatrixInverse:{value:new st},cameraWorldMatrix:{value:new st},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new D(-1,-1,-1)},sceneBoxMax:{value:new D(1,1,1)}},vertexShader:`

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
		}`},Ga={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},pc={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function Nf(i=5){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=a_(e),n=t.length,s=new Uint8Array(n*4);for(let a=0;a<n;++a){let o=t[a],c=2*Math.PI*o/n,l=new D(Math.cos(c),Math.sin(c),0).normalize();s[a*4]=(l.x*.5+.5)*255,s[a*4+1]=(l.y*.5+.5)*255,s[a*4+2]=127,s[a*4+3]=255}let r=new Kn(s,e,e);return r.wrapS=cn,r.wrapT=cn,r.needsUpdate=!0,r}function a_(i){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let a=1;a<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),n[s*e+r]!==0){r-=2,s++;continue}else n[s*e+r]=a++;r++,s--}return n}var Va={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:ju(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Ae},cameraProjectionMatrixInverse:{value:new st},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function ju(i,e,t){let n=o_(i,e,t),s="vec3[SAMPLES](";for(let r=0;r<i;r++){let a=n[r];s+=`vec3(${a.x}, ${a.y}, ${a.z})${r<i-1?",":")"}`}return s}function o_(i,e,t){let n=[];for(let s=0;s<i;s++){let r=2*Math.PI*e*s/i,a=Math.pow(s/(i-1),t);n.push(new D(Math.cos(r),Math.sin(r),a))}return n}var mc=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,s,r,a=.5*(Math.sqrt(3)-1),o=(e+t)*a,c=Math.floor(e+o),l=Math.floor(t+o),h=(3-Math.sqrt(3))/6,p=(c+l)*h,d=c-p,u=l-p,f=e-d,_=t-u,g,m;f>_?(g=1,m=0):(g=0,m=1);let E=f-g+h,w=_-m+h,v=f-1+2*h,y=_-1+2*h,T=c&255,P=l&255,x=this.perm[T+this.perm[P]]%12,b=this.perm[T+g+this.perm[P+m]]%12,R=this.perm[T+1+this.perm[P+1]]%12,U=.5-f*f-_*_;U<0?n=0:(U*=U,n=U*U*this._dot(this.grad3[x],f,_));let S=.5-E*E-w*w;S<0?s=0:(S*=S,s=S*S*this._dot(this.grad3[b],E,w));let I=.5-v*v-y*y;return I<0?r=0:(I*=I,r=I*I*this._dot(this.grad3[R],v,y)),70*(n+s+r)}noise3d(e,t,n){let s,r,a,o,l=(e+t+n)*.3333333333333333,h=Math.floor(e+l),p=Math.floor(t+l),d=Math.floor(n+l),u=1/6,f=(h+p+d)*u,_=h-f,g=p-f,m=d-f,E=e-_,w=t-g,v=n-m,y,T,P,x,b,R;E>=w?w>=v?(y=1,T=0,P=0,x=1,b=1,R=0):E>=v?(y=1,T=0,P=0,x=1,b=0,R=1):(y=0,T=0,P=1,x=1,b=0,R=1):w<v?(y=0,T=0,P=1,x=0,b=1,R=1):E<v?(y=0,T=1,P=0,x=0,b=1,R=1):(y=0,T=1,P=0,x=1,b=1,R=0);let U=E-y+u,S=w-T+u,I=v-P+u,A=E-x+2*u,N=w-b+2*u,V=v-R+2*u,B=E-1+3*u,z=w-1+3*u,O=v-1+3*u,F=h&255,X=p&255,re=d&255,pe=this.perm[F+this.perm[X+this.perm[re]]]%12,_e=this.perm[F+y+this.perm[X+T+this.perm[re+P]]]%12,De=this.perm[F+x+this.perm[X+b+this.perm[re+R]]]%12,Xe=this.perm[F+1+this.perm[X+1+this.perm[re+1]]]%12,$=.6-E*E-w*w-v*v;$<0?s=0:($*=$,s=$*$*this._dot3(this.grad3[pe],E,w,v));let ae=.6-U*U-S*S-I*I;ae<0?r=0:(ae*=ae,r=ae*ae*this._dot3(this.grad3[_e],U,S,I));let ve=.6-A*A-N*N-V*V;ve<0?a=0:(ve*=ve,a=ve*ve*this._dot3(this.grad3[De],A,N,V));let me=.6-B*B-z*z-O*O;return me<0?o=0:(me*=me,o=me*me*this._dot3(this.grad3[Xe],B,z,O)),32*(s+r+a+o)}noise4d(e,t,n,s){let r=this.grad4,a=this.simplex,o=this.perm,c=(Math.sqrt(5)-1)/4,l=(5-Math.sqrt(5))/20,h,p,d,u,f,_=(e+t+n+s)*c,g=Math.floor(e+_),m=Math.floor(t+_),E=Math.floor(n+_),w=Math.floor(s+_),v=(g+m+E+w)*l,y=g-v,T=m-v,P=E-v,x=w-v,b=e-y,R=t-T,U=n-P,S=s-x,I=b>R?32:0,A=b>U?16:0,N=R>U?8:0,V=b>S?4:0,B=R>S?2:0,z=U>S?1:0,O=I+A+N+V+B+z,F=a[O][0]>=3?1:0,X=a[O][1]>=3?1:0,re=a[O][2]>=3?1:0,pe=a[O][3]>=3?1:0,_e=a[O][0]>=2?1:0,De=a[O][1]>=2?1:0,Xe=a[O][2]>=2?1:0,$=a[O][3]>=2?1:0,ae=a[O][0]>=1?1:0,ve=a[O][1]>=1?1:0,me=a[O][2]>=1?1:0,Se=a[O][3]>=1?1:0,W=b-F+l,we=R-X+l,j=U-re+l,le=S-pe+l,Z=b-_e+2*l,ee=R-De+2*l,oe=U-Xe+2*l,be=S-$+2*l,Ee=b-ae+3*l,Oe=R-ve+3*l,Ne=U-me+3*l,G=S-Se+3*l,ot=b-1+4*l,et=R-1+4*l,L=U-1+4*l,M=S-1+4*l,K=g&255,te=m&255,ce=E&255,Le=w&255,Fe=o[K+o[te+o[ce+o[Le]]]]%32,fe=o[K+F+o[te+X+o[ce+re+o[Le+pe]]]]%32,ue=o[K+_e+o[te+De+o[ce+Xe+o[Le+$]]]]%32,Be=o[K+ae+o[te+ve+o[ce+me+o[Le+Se]]]]%32,tt=o[K+1+o[te+1+o[ce+1+o[Le+1]]]]%32,Ge=.6-b*b-R*R-U*U-S*S;Ge<0?h=0:(Ge*=Ge,h=Ge*Ge*this._dot4(r[Fe],b,R,U,S));let He=.6-W*W-we*we-j*j-le*le;He<0?p=0:(He*=He,p=He*He*this._dot4(r[fe],W,we,j,le));let Ze=.6-Z*Z-ee*ee-oe*oe-be*be;Ze<0?d=0:(Ze*=Ze,d=Ze*Ze*this._dot4(r[ue],Z,ee,oe,be));let Qe=.6-Ee*Ee-Oe*Oe-Ne*Ne-G*G;Qe<0?u=0:(Qe*=Qe,u=Qe*Qe*this._dot4(r[Be],Ee,Oe,Ne,G));let at=.6-ot*ot-et*et-L*L-M*M;return at<0?f=0:(at*=at,f=at*at*this._dot4(r[tt],ot,et,L,M)),27*(h+p+d+u+f)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}_dot4(e,t,n,s,r){return e[0]*t+e[1]*n+e[2]*s+e[3]*r}};var ka=class i extends Sn{constructor(e,t,n=512,s=512,r,a,o){super(),this.width=n,this.height=s,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Nf(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new Xt(this.width,this.height,{type:Qt,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new It({defines:Object.assign({},za.defines),uniforms:Dn.clone(za.uniforms),vertexShader:za.vertexShader,fragmentShader:za.fragmentShader,blending:tn,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new ua,this.normalMaterial.blending=tn,this.pdMaterial=new It({defines:Object.assign({},Va.defines),uniforms:Dn.clone(Va.uniforms),vertexShader:Va.vertexShader,fragmentShader:Va.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new It({defines:Object.assign({},Ga.defines),uniforms:Dn.clone(Ga.uniforms),vertexShader:Ga.vertexShader,fragmentShader:Ga.fragmentShader,blending:tn}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new It({uniforms:Dn.clone(Li.uniforms),vertexShader:Li.vertexShader,fragmentShader:Li.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:va,blendDst:Ts,blendEquation:jn,blendSrcAlpha:xa,blendDstAlpha:Ts,blendEquationAlpha:jn}),this.blendMaterial=new It({uniforms:Dn.clone(pc.uniforms),vertexShader:pc.vertexShader,fragmentShader:pc.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:dl,blendSrc:va,blendDst:Ts,blendEquation:jn,blendSrcAlpha:xa,blendDstAlpha:Ts,blendEquationAlpha:jn}),this._fsQuad=new ti(null),this._originalClearColor=new ze,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new Qn,this.depthTexture.format=Pi,this.depthTexture.type=us,this.normalRenderTarget=new Xt(this.width,this.height,{minFilter:en,magFilter:en,type:Qt,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=ju(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=tn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=tn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=tn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=tn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=tn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,n,s,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_renderOverride(e,t,n,s,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,t.push(n))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new mc,n=e*e*4,s=new Uint8Array(n);for(let a=0;a<e;a++)for(let o=0;o<e;o++){let c=a,l=o;s[(a*e+o)*4]=(t.noise(c,l)*.5+.5)*255,s[(a*e+o)*4+1]=(t.noise(c+e,l)*.5+.5)*255,s[(a*e+o)*4+2]=(t.noise(c,l+e)*.5+.5)*255,s[(a*e+o)*4+3]=(t.noise(c+e,l+e)*.5+.5)*255}let r=new Kn(s,e,e,En,fn);return r.wrapS=cn,r.wrapT=cn,r.needsUpdate=!0,r}};ka.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var eh=class extends Sn{constructor(e){super(),this.needsSwap=!1,this.holder=e}render(e,t,n){this.holder.value=n.depthTexture}},Ff="varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",Of=`uniform sampler2D tDiffuse; uniform sampler2D tDepth; uniform vec2 uPx; uniform float uNear, uFar, uFocus, uAperture, uMaxBlur; varying vec2 vUv;
    float viewDist(vec2 uv){ float d = texture2D(tDepth, uv).x; return (uNear * uFar) / (uFar - (uFar - uNear) * d); }
    float cocAt(float dist){ return clamp(uAperture * abs(dist - uFocus) / max(dist, 0.001), 0.0, 1.0) * uMaxBlur; }`,l_=`${Of}
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
    }`,c_=`${Of}
    uniform sampler2D tBlur; uniform vec2 uHalfPx;
    void main(){
      vec4 sharp = texture2D(tDiffuse, vUv);
      vec2 o = uHalfPx * 0.5;
      vec4 blur = (texture2D(tBlur, vUv + o) + texture2D(tBlur, vUv - o) + texture2D(tBlur, vUv + vec2(o.x, -o.y)) + texture2D(tBlur, vUv + vec2(-o.x, o.y))) * 0.25;
      float w = max(smoothstep(0.75, 2.5, cocAt(viewDist(vUv))), smoothstep(0.0, 0.2, blur.a));
      gl_FragColor = vec4(mix(sharp.rgb, blur.rgb, w), sharp.a);
    }`,th=class extends Sn{constructor(e,t){super(),this.depthHolder=e,this.shared={tDepth:{value:null},uPx:{value:new Ae(1/1440,1/900)},uNear:{value:.3},uFar:{value:1400},uFocus:{value:30},uAperture:{value:0},uMaxBlur:{value:12}},this.half=new Xt(720,450,{type:Qt,depthBuffer:!1}),this.gather=new It({name:"HauseDofGather",defines:{TAPS:t},uniforms:{tDiffuse:{value:null},...this.shared},vertexShader:Ff,fragmentShader:l_,depthTest:!1,depthWrite:!1}),this.composite=new It({name:"HauseDofComposite",uniforms:{tDiffuse:{value:null},tBlur:{value:this.half.texture},uHalfPx:{value:new Ae(1/720,1/450)},...this.shared},vertexShader:Ff,fragmentShader:c_,depthTest:!1,depthWrite:!1}),this.quad=new ti(this.gather)}setSize(e,t){let n=Math.max(1,Math.round(e/2)),s=Math.max(1,Math.round(t/2));this.half.setSize(n,s),this.shared.uPx.value.set(1/e,1/t),this.composite.uniforms.uHalfPx.value.set(1/n,1/s),this.shared.uMaxBlur.value=Math.max(6,t*.014)}render(e,t,n){this.shared.tDepth.value=this.depthHolder.value,this.gather.uniforms.tDiffuse.value=n.texture,this.quad.material=this.gather,e.setRenderTarget(this.half),this.quad.render(e),this.composite.uniforms.tDiffuse.value=n.texture,this.quad.material=this.composite,e.setRenderTarget(this.renderToScreen?null:t),this.quad.render(e)}dispose(){this.half.dispose(),this.gather.dispose(),this.composite.dispose(),this.quad.dispose()}},u_={name:"HauseGrade",uniforms:{tDiffuse:{value:null},uTime:{value:0},uVig:{value:.32},uGrain:{value:.03},uCA:{value:.0011},uSat:{value:1.05},uCon:{value:1.05},uThermal:{value:0},uAspect:{value:1.6}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float uTime, uVig, uGrain, uCA, uSat, uCon, uThermal, uAspect; varying vec2 vUv;
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
    }`};function Bf(i,e,t,n,s,r){let a=n>=2?4:n===1?2:0,o=new Xt(s,r,{type:Qt,samples:a,depthTexture:new Qn(s,r)}),c=new hc(i,o);c.setPixelRatio(1),c.addPass(new dc(e,t));let l={value:null};c.addPass(new eh(l));let h=null,p=null;n>=2&&(h=new ka(e,t,s,r,void 0,{radius:.9,distanceExponent:1.4,thickness:1.2,scale:1,samples:12,distanceFallOff:1,screenSpaceRadius:!1},{lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,radiusExponent:1,rings:2,samples:12}),h.blendIntensity=.9,h._overrideVisibility=function(){let f=this._visibilityCache;this.scene.traverse(_=>{(_.isPoints||_.isLine||_.isLine2||_.isSprite||_.userData&&_.userData.noAO)&&_.visible&&(_.visible=!1,f.push(_))})},c.addPass(h));let d=null;n>=1&&(d=new th(l,n>=2?48:20),d.enabled=!1,c.addPass(d),d.setSize(c.readBuffer.width,c.readBuffer.height)),n>=1&&(p=new br(new Ae(s,r),.55,.62,1),c.addPass(p)),c.addPass(new fc);let u=new Er(u_);return n===0&&(u.uniforms.uCA.value=0,u.uniforms.uGrain.value=.015),c.addPass(u),{composer:c,bloom:p,gtao:h,dof:d,grade:u,tier:n,setDof(f,_,g,m){if(!d)return;d.enabled=f>.01;let E=d.shared;E.uAperture.value=f,E.uFocus.value=_,E.uNear.value=g,E.uFar.value=m},setSize(f,_){c.setSize(f,_),u.uniforms.uAspect.value=f/_},render(f,_){u.uniforms.uTime.value=_%10,c.render(f)},dispose(){c.dispose(),d&&d.dispose(),o.dispose()}}}var Wa=new D;function ni(i,e,t,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),c=Math.PI/4;Wa.copy(e),Wa[n]=0,Wa.normalize();let l=.5*a/(a+o),h=1-Wa.angleTo(i)/c;return Math.sign(Wa[t])===1?h*l:o/(a+o)+l+l*(1-h)}var ii=class i extends Pt{constructor(e=1,t=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let c=new D,l=new D,h=new D(e,t,n).divideScalar(2).subScalar(r),p=this.attributes.position.array,d=this.attributes.normal.array,u=this.attributes.uv.array,f=p.length/6,_=new D,g=.5/a;for(let m=0,E=0;m<p.length;m+=3,E+=2)switch(c.fromArray(p,m),l.copy(c),l.x-=Math.sign(l.x)*g,l.y-=Math.sign(l.y)*g,l.z-=Math.sign(l.z)*g,l.normalize(),p[m+0]=h.x*Math.sign(c.x)+l.x*r,p[m+1]=h.y*Math.sign(c.y)+l.y*r,p[m+2]=h.z*Math.sign(c.z)+l.z*r,d[m+0]=l.x,d[m+1]=l.y,d[m+2]=l.z,Math.floor(m/f)){case 0:_.set(1,0,0),u[E+0]=ni(_,l,"z","y",r,n),u[E+1]=1-ni(_,l,"y","z",r,t);break;case 1:_.set(-1,0,0),u[E+0]=1-ni(_,l,"z","y",r,n),u[E+1]=1-ni(_,l,"y","z",r,t);break;case 2:_.set(0,1,0),u[E+0]=1-ni(_,l,"x","z",r,e),u[E+1]=ni(_,l,"z","x",r,n);break;case 3:_.set(0,-1,0),u[E+0]=1-ni(_,l,"x","z",r,e),u[E+1]=1-ni(_,l,"z","x",r,n);break;case 4:_.set(0,0,1),u[E+0]=1-ni(_,l,"x","y",r,e),u[E+1]=1-ni(_,l,"y","x",r,t);break;case 5:_.set(0,0,-1),u[E+0]=ni(_,l,"x","y",r,e),u[E+1]=1-ni(_,l,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};var qt=10,_t=8,si=2.9,Xa=[{key:"roof",dy:9.2},{key:"upper",dy:6.6},{key:"main",dy:4.1},{key:"basement",dy:2},{key:"below",dy:0}],vt=(i,e,t)=>new D(i,e,t);function Hf({M:i,T:e,markTex:t,glowTex:n}){let s=new mt,r={};Xa.forEach(S=>{let I=new mt;I.userData.level=S.key,r[S.key]=I,s.add(I)});let a={},o=[],c=new es({color:11126756,transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1,fog:!1}),l={icicles:null,snowL:null,snowR:null,chimneyTop:new Kt,fans:[]},h=Ps;function p(S,I,A,N,V=0,B=0,z=0,O,F={}){let X=new Pt(S,I,A);h(X,F.uv||{});let re=new Re(X,N);if(re.position.set(V,B,z),re.castShadow=F.cast!==!1,re.receiveShadow=F.receive!==!1,F.edges){let pe=new Ai(new lr(X,30),c);pe.raycast=()=>{},re.add(pe)}return O&&O.add(re),re}function d(S,I,A,N,V,B=0,z=0,O=0,F,X={}){let re=new ii(S,I,A,X.seg||2,N),pe=new Re(re,V);return pe.position.set(B,z,O),pe.castShadow=X.cast!==!1,pe.receiveShadow=!0,F&&F.add(pe),pe}function u(S,I,A,N,V,B,z,O=18){let F=new Re(new Bt(S,S,I,O),A);return F.position.set(N,V,B),F.castShadow=!0,F.receiveShadow=!0,z&&z.add(F),F}function f(S,I,A,N){let V=a[S]||(a[S]={meshes:[],mats:[],marks:[]}),B=z=>{let O=z.clone();return O.userData.baseEmissive=O.emissive.clone(),O};if(I.forEach(z=>{z.material=Array.isArray(z.material)?z.material.map(B):B(z.material),z.userData.sys=S,V.meshes.push(z),V.mats.push(...[].concat(z.material))}),A){let z=new _n(new un({map:t,transparent:!0,depthTest:!1,depthWrite:!1,opacity:0}));z.position.copy(A),z.scale.set(.95,.95,1),z.renderOrder=10,z.userData.sys=S,z.userData.noAO=!0,r[N].add(z),V.marks.push(z)}}let _=0,g={},m=S=>g[S]||(g[S]=Cf(S));function E(S,I,A,N,V,B){let z=I.x1-I.x0,O=I.y1-I.y0,F=(I.x0+I.x1)/2,X=(I.y0+I.y1)/2,re=new mt;re.position.set(F,X,0),S.add(re);let pe=Ku(m(N||"living")),_e=new Re(new zt(z,O),pe);_e.position.z=.03,_e.receiveShadow=!1,re.add(_e);let De=.075,Xe=.1;d(z,De,Xe,.012,i.trim,0,O/2-De/2,.07,re,{seg:1}),d(z,De,Xe,.012,i.trim,0,-O/2+De/2,.07,re,{seg:1}),d(De,O,Xe,.012,i.trim,-z/2+De/2,0,.07,re,{seg:1}),d(De,O,Xe,.012,i.trim,z/2-De/2,0,.07,re,{seg:1});let $=z>1.35?Math.round(z/.95):1;for(let ve=1;ve<$;ve++)d(.035,O-.1,.07,.008,i.trim,-z/2+z/$*ve,0,.065,re,{seg:1,cast:!1});O>1.2&&d(z-.1,.035,.07,.008,i.trim,0,O*.12,.065,re,{seg:1,cast:!1}),d(z+.22,.055,.26,.012,i.cedar,0,-O/2-.03,.14,re,{seg:1}),d(z+.18,.09,.12,.012,i.trim,0,O/2+.07,.1,re,{seg:1});let ae=new _n(new un({map:n,transparent:!0,depthWrite:!1,blending:Nt,opacity:0}));return ae.position.set(0,0,.4),ae.scale.set(z*2.6,O*2.6,1),ae.userData.noAO=!0,re.add(ae),o.push({mat:pe,halo:ae,order:V!=null?V+_*.001:_,always:!!B,w:z,h:O}),_++,re}function w(S,I,A){let N=I.x1-I.x0,V=I.y1-I.y0,B=(I.x0+I.x1)/2,z=(I.y0+I.y1)/2,O=new mt;O.position.set(B,z,0),S.add(O),p(N,V,.07,i.door,0,0,0,O,{uv:{ox:B,oy:z}});let F=new Re(new zt(.22,V*.72),Ku(m("hall")));F.position.set(-N/2+.22,.05,.04),O.add(F),o.push({mat:F.material,halo:null,order:.5,always:!1,w:.22,h:V*.72}),d(.03,.8,.05,.012,i.trim,N/2-.14,-.05,.08,O,{seg:1}),d(N+.14,.09,.12,.012,i.trim,0,V/2+.07,.07,O,{seg:1}),d(.07,V,.1,.01,i.trim,-N/2-.035,0,.06,O,{seg:1}),d(.07,V,.1,.01,i.trim,N/2+.035,0,.06,O,{seg:1})}function v(S,I,A,N,V,B,z,O,F={}){let X=new mt,re=new Set([-S/2,S/2]),pe=new Set([0,I]);N.forEach($=>{re.add($.x0),re.add($.x1),pe.add($.y0),pe.add($.y1)});let _e=[...re].sort(($,ae)=>$-ae),De=[...pe].sort(($,ae)=>$-ae),Xe=[i.trim,i.trim,i.trim,i.trim,V,i.drywall];for(let $=0;$<_e.length-1;$++)for(let ae=0;ae<De.length-1;ae++){let ve=(_e[$]+_e[$+1])/2,me=(De[ae]+De[ae+1])/2;N.some(Se=>ve>Se.x0&&ve<Se.x1&&me>Se.y0&&me<Se.y1)||p(_e[$+1]-_e[$],De[ae+1]-De[ae],A,Xe,ve,me,0,X,{edges:!0,uv:{ox:ve,oy:me+(F.v0||0)}})}return N.forEach($=>{$.door?w(X,$,A):E(X,$,A,$.room,F.order,$.always)}),X.position.copy(z),X.rotation.y=O||0,B.add(X),X}(()=>{let S=r.below,I=[],A=i.form;I.push(p(qt+.5,3.4,.25,A,0,-1.4,_t/2+.12,S,{edges:!0,uv:{ox:0,oy:-1.4}})),I.push(p(qt+.5,3.4,.25,A,0,-1.4,-_t/2-.12,S,{edges:!0,uv:{ox:0,oy:-1.4}})),I.push(p(.25,3.4,_t,A,qt/2+.12,-1.4,0,S,{edges:!0,uv:{oy:-1.4}})),I.push(p(.25,3.4,_t,A,-qt/2-.12,-1.4,0,S,{edges:!0,uv:{oy:-1.4}})),p(qt+1.2,.3,.8,i.concrete,0,-3.1,_t/2+.1,S),p(qt+1.2,.3,.8,i.concrete,0,-3.1,-_t/2-.1,S),p(.8,.3,_t,i.concrete,qt/2+.1,-3.1,0,S),p(.8,.3,_t,i.concrete,-qt/2-.1,-3.1,0,S);let N=p(qt,.16,_t,i.slab,0,-2.88,0,S,{edges:!0});f("foundation",[...I,N],vt(qt/2+.6,-1.4,1.6),"below");let V=u(.14,9,i.pipe,.6,-3.25,-_t/2-4.3,S);V.rotation.x=Math.PI/2-.05;let B=u(.14,.6,i.pipe,.6,-3,-_t/2+.2,S),z=u(.12,3.2,i.pvc,.6,-1.6,-_t/2-1.2,S);f("sewer",[V,B,z],vt(.6,-2.4,-_t/2-4.5),"below");let O=u(.1,.5,i.pvc,-1.2,-2.7,-1.5,S);f("radon",[O],vt(-1.2,-2.2,-1.5),"below");let F=u(.06,qt+1,i.pvc,0,-3.25,_t/2+.7,S,10);F.rotation.z=Math.PI/2,F.castShadow=!1})(),(()=>{let S=r.basement,I=new Hn(16766880,0,15,2);I.position.set(.2,-.7,-.4),S.add(I),S.userData.lights=[I];let A=p(.85,1.7,.85,i.white,-3.3,-2,-2.6,S),N=p(.87,.12,.87,i.copper,-3.3,-1.5,-2.6,S),V=p(6.2,.36,.5,i.steel,-.3,-.12,-2.6,S),B=p(.5,1,.5,i.steel,-3.3,-.7,-2.6,S),z=u(.07,1.2,i.pvc,-3,-.6,-3.1,S);f("hvac",[A,N,V,B,z],vt(-3.3,-.9,-2),"basement");let O=u(.3,1.4,i.white,-2.1,-2.1,-3,S),F=u(.04,1.2,i.copper,-2,-.9,-3,S);f("water-heaters",[O,F],vt(-2.1,-1.1,-2.6),"basement");let X=p(.62,.95,.14,i.steel,2.8,-1.2,-3.8,S),re=p(.4,.7,.02,i.copper,2.8,-1.2,-3.72,S),pe=u(.05,1.5,i.copper,2.8,-.1,-3.8,S);f("electrical",[X,re,pe],vt(2.8,-.5,-3.3),"basement");let _e=u(.1,3.1,i.pvc,-1.2,-1.2,-1.5,S);f("radon",[_e],null,"basement"),u(.09,3.1,i.pipe,-2.6,-1.3,-3.6,S);for(let De=-4;De<=4;De++)p(.09,.3,_t-.3,i.cedar,De*1,0-.1,0,S,{cast:!1})})();let y=[{x0:-3.8,x1:-1.2,y0:.7,y1:2.5,room:"living"},{x0:.2,x1:1.3,y0:0,y1:2.2,door:!0},{x0:2.1,x1:4.2,y0:.7,y1:2.5,room:"kitchen"}];(()=>{let S=r.main,I=.3;p(qt,.3,_t,i.floor,0,.15,0,S,{edges:!0}),v(qt,si,.22,y,i.lap,S,vt(0,I,_t/2),0,{order:1,v0:I}),v(qt,si,.22,[{x0:-3,x1:1.6,y0:.1,y1:2.45,room:"kitchen"}],i.lap,S,vt(0,I,-_t/2),Math.PI,{order:4,v0:I}),v(_t,si,.22,[{x0:-2.2,x1:-.2,y0:.8,y1:2.3,room:"hall"}],i.lap,S,vt(qt/2,I,0),Math.PI/2,{order:2,v0:I}),v(_t,si,.22,[{x0:.3,x1:2.3,y0:.8,y1:2.3,room:"living"}],i.lap,S,vt(-qt/2,I,0),-Math.PI/2,{order:3,v0:I}),p(.15,si,5,i.drywall,1.2,I+si/2,-1.2,S);let A=p(3,.95,.65,i.counter,2.9,I+.48,-3.4,S),N=d(.85,1.95,.7,.03,i.steel,4.35,I+.98,-3.4,S),V=p(.75,.05,.6,i.steel,2.4,I+.97,-3.4,S);f("installation",[A,N,V],vt(3,2.3,-3.2),"main");let B=u(.1,3.2,i.pvc,-1.2,1.9,-1.5,S);f("radon",[B],null,"main"),u(.09,3.2,i.pipe,-2.6,1.9,-3.6,S),d(.3,.42,.18,.02,i.white,2.8,1.5,-_t/2-.2,S),u(.035,3.6,i.steel,2.8,3.55,-_t/2-.1,S,10);let z=new Hn(16758123,0,11,2);z.position.set(-1.5,2.4,.5),S.add(z);let O=new Hn(16758123,0,9,2);O.position.set(3,2.4,-1.5),S.add(O),S.userData.lights=[z,O];let F=new mt;S.add(F),p(2.9,.32,2.3,i.stone,.55,.16,5.1,F,{uv:{ox:.55,oy:.16}}),p(2.9,.07,2.3,i.cedar,.55,.35,5.1,F,{uv:{}}),p(1.7,.17,.4,i.concrete,.7,.085,6.55,F),p(1.9,.17,.4,i.concrete,.7,.255-.085,6.2,F),[-.75,1.85].forEach(_e=>{d(.22,2.55,.22,.015,i.cedar,_e,1.67,6.12,F),p(.34,.5,.34,i.stone,_e,.6,6.12,F,{uv:{ox:_e,oy:.6}})}),d(3.5,.24,.22,.02,i.cedar,.55,2.84,6.12,F);let X=p(3.4,.14,2.6,[i.trim,i.trim,i.roof,i.cedar,i.trim,i.trim],.55,3,5.25,F,{uv:{swap:!0}});X.rotation.x=.1,[-.15,1.65].forEach(_e=>{let De=new Re(new Bt(.06,.07,.24,12),i.sconce);De.position.set(_e,1.9,4.2),De.userData.noAO=!0,F.add(De);let Xe=new _n(new un({map:n,transparent:!0,depthWrite:!1,blending:Nt,opacity:0}));Xe.position.set(_e,1.9,4.5),Xe.scale.set(1.6,1.6,1),Xe.userData.noAO=!0,F.add(Xe),l.porchHalos=(l.porchHalos||[]).concat(Xe)}),[-.78,1.88].forEach(_e=>{p(.06,.06,2,i.trim,_e,1.2,5.15,F),p(.05,.05,2,i.trim,_e,.55,5.15,F);for(let De=0;De<8;De++)p(.025,.62,.025,i.trim,_e,.9,4.25+De*.27,F,{cast:!1})});let re=new Re(new zt(.2,.2),new Ht({map:t,transparent:!0,toneMapped:!1}));re.position.set(1.62,1.35,4.13),re.userData.noAO=!0,F.add(re);let pe=new Hn(16761469,0,7,2);pe.position.set(.75,2.6,_t/2+1.1),S.add(pe),S.userData.porch=pe})(),(()=>{let S=r.upper,I=3.45;p(qt,.25,_t,i.floor,0,3.32,0,S,{edges:!0}),v(qt,si,.22,[{x0:-3.6,x1:-1.8,y0:.9,y1:2.4,room:"bed"},{x0:-.9,x1:1.9,y0:.5,y1:2.5,room:"living"},{x0:2.6,x1:4.1,y0:.9,y1:2.4,room:"bed"}],i.bb,S,vt(0,I,_t/2),0,{order:5,v0:I}),v(qt,si,.22,[{x0:-3.4,x1:-1.8,y0:.9,y1:2.3,room:"bath"},{x0:1.6,x1:3.2,y0:.9,y1:2.3,room:"bed"}],i.bb,S,vt(0,I,-_t/2),Math.PI,{order:8,v0:I}),v(_t,si,.22,[{x0:.6,x1:2.4,y0:.9,y1:2.3,room:"bed"}],i.bb,S,vt(qt/2,I,0),Math.PI/2,{order:6,v0:I}),v(_t,si,.22,[{x0:-2.2,x1:-.6,y0:1.2,y1:2.2,room:"bath"}],i.bb,S,vt(-qt/2,I,0),-Math.PI/2,{order:7,v0:I}),p(.15,si,_t-.4,i.drywall,-1.6,I+si/2,0,S);let A=d(1.7,.55,.8,.08,i.ceramic,-3.6,I+.28,-3.35,S),N=d(.7,.85,.5,.04,i.ceramic,-2.4,I+.43,-3.5,S),V=u(.09,3,i.pipe,-2.6,I+1.4,-3.6,S);f("plumbing",[A,N,V],vt(-3.4,4.6,-3),"upper");let B=u(.1,3,i.pvc,-1.2,I+1.4,-1.5,S);f("radon",[B],null,"upper");let z=new Hn(16758123,0,11,2);z.position.set(.5,5.6,.5),S.add(z),S.userData.lights=[z]})(),(()=>{let S=r.roof,I=6.35,A=3.6,N=qt/2,V=.6,B=Math.atan2(A,N),z=Math.hypot(N+V,(N+V)*A/N),O=Z=>{let ee=new Pt(z,.2,_t+1);h(ee,{swap:!0});let oe=new Re(ee,[i.trim,i.trim,i.roof,i.cedar,i.trim,i.trim]);oe.castShadow=!0,oe.receiveShadow=!0,oe.rotation.z=Z*B;let be=I+A-(N+V)/2*(A/N)+.12;return oe.position.set(Z>0?-(N+V)/2+.02:(N+V)/2-.02,be,0),S.add(oe),oe},F=O(1),X=O(-1);[F,X].forEach(Z=>{let ee=new Ai(new lr(Z.geometry,30),c);ee.raycast=()=>{},Z.add(ee)}),[F,X].forEach((Z,ee)=>{[-1,1].forEach(Ee=>p(z,.3,.06,i.trim,0,-.05,Ee*(_t/2+.5),Z,{cast:!1}));let oe=ee===0?-1:1;p(.06,.34,_t+1.04,i.trim,oe*(z/2),-.1,0,Z,{cast:!1});let be=p(.12,.1,_t+.9,i.trim,oe*(z/2+.06),-.28,0,Z,{cast:!1});be.rotation.z=-Z.rotation.z}),p(.3,.22,_t+1.05,i.trim,0,I+A+.2,0,S),f("roofing",[F,X],vt(-2.8,9.1,2.2),"roof");let re=new fi;re.moveTo(-N,0),re.lineTo(N,0),re.lineTo(0,A),re.lineTo(-N,0);let pe=new Ss;pe.moveTo(-.5,1.15),pe.lineTo(.5,1.15),pe.lineTo(.5,2.15),pe.lineTo(-.5,2.15),pe.lineTo(-.5,1.15),re.holes.push(pe);let _e=new Ri(re,{depth:.22,bevelEnabled:!1});[_t/2-.22,-_t/2].forEach((Z,ee)=>{let oe=new Re(_e,[i.bb,i.trim]);oe.position.set(0,I,Z),oe.castShadow=!0,oe.receiveShadow=!0,S.add(oe);let be=new mt;be.position.set(0,I+1.65,Z+.11),S.add(be);let Ee=E(be,{x0:-.5,x1:.5,y0:-.5,y1:.5,room:"hall"},.22,"hall",-1,!0);ee===1&&(be.rotation.y=Math.PI,be.position.z=Z+.11-0);let Oe=new _n(new un({map:n,transparent:!0,depthWrite:!1,blending:Nt,opacity:0}));Oe.position.set(0,I+1.65,Z+(ee===0?.55:-.3)),Oe.scale.set(3.4,3.4,1),Oe.userData.noAO=!0,S.add(Oe),o.push({mat:null,halo:Oe,order:-1,always:!0,w:1,h:1,haloOnly:!0,level:.6})});let De=new mt;De.rotation.z=-B,De.position.copy(X.position);let Xe=[];for(let Z=0;Z<2;Z++)for(let ee=0;ee<4;ee++){let oe=p(1.3,.05,.95,i.solar,-.9+Z*1.45,.16,-1.6+ee*1.05,De,{cast:!1}),be=p(1.34,.04,.99,i.solarFrame,-.9+Z*1.45,.14,-1.6+ee*1.05,De,{cast:!1});Xe.push(oe)}S.add(De),f("solar",Xe,vt(3.4,9.3,.6),"roof");let $=Z=>{let ee=new zt(z-.25,_t+.7,30,30),oe=ee.attributes.position,be=Un(5);for(let Ne=0;Ne<oe.count;Ne++)oe.setZ(Ne,.025+be()*.05);ee.computeVertexNormals();let Ee=i.snowRoof.clone();Ee.alphaMap=Rf(256,Z),Ee.alphaTest=.25,Ee.userData={...i.snowRoof.userData};let Oe=new Re(ee,Ee);return Oe.rotation.x=-Math.PI/2,Oe.position.y=.105,Oe.receiveShadow=!0,Oe.castShadow=!0,Oe};l.snowL=$(),l.snowL.userData.keep=!0,F.add(l.snowL),l.snowR=$((Z,ee)=>Z>.24&&Z<.7&&ee>.24&&ee<.76?0:1),l.snowR.userData.keep=!0,X.add(l.snowR);let ae=p(.5,.16,_t+.8,i.snowRoof,0,I+A+.38,0,S,{cast:!1});ae.material=i.snowRoof,ae.userData.keep=!0,(()=>{let Z=Un(9),ee=70,oe=new Ms(.04,1,6);oe.rotateX(Math.PI),oe.translate(0,-.5,0);let be=new di(oe,i.ice,ee*2),Ee=new st,Oe=new $t,Ne=new D,G=new D,ot=I+A-(N+V)*(A/N)+0;for(let et=0;et<2;et++)for(let L=0;L<ee;L++){let M=-_t/2-.4+L/(ee-1)*(_t+.8),K=.12+Z()*Z()*.7,te=.7+Z()*.8;Ne.set((et?1:-1)*(N+V+.08),ot-.35,M+(Z()-.5)*.06),G.set(te,K,te),Ee.compose(Ne,Oe,G),be.setMatrixAt(et*ee+L,Ee)}be.userData.baseMatrices=Array.from({length:ee*2},(et,L)=>{let M=new st;return be.getMatrixAt(L,M),M}),be.castShadow=!1,be.userData.noAO=!0,be.visible=!1,S.add(be),l.icicles=be})();let ve=new zt(qt-.6,_t-.6,40,32),me=ve.attributes.position,Se=Un(3);for(let Z=0;Z<me.count;Z++)me.setZ(Z,Se()*.12);ve.computeVertexNormals();let W=new Re(ve,i.insul);W.rotation.x=-Math.PI/2,W.position.y=I+.02,W.receiveShadow=!0,S.add(W),p(qt,.1,_t,i.floor,0,I-.05,0,S),f("asbestos",[W],vt(-.4,7.3,-.8),"roof");let we=u(.1,4.6,i.pvc,-1.2,I+2.2,-1.5,S);f("radon",[we],vt(-1.2,10.9,-1.5),"roof");let j=u(.24,.42,i.steel,-1.2,7.9,-1.5,S,16);f("radon",[j],null,"roof"),u(.09,4,i.pipe,-2.6,I+2,-3.6,S);let le=p(.95,4.1,.95,i.stone,-3.4,8.4,-1.6,S,{uv:{ox:-3.4,oy:8.4}});p(1.15,.12,1.15,i.concrete,-3.4,10.5,-1.6,S),p(.7,.3,.7,i.steel,-3.4,10.7,-1.6,S),l.chimneyTop.position.set(-3.4,10.9,-1.6),S.add(l.chimneyTop)})();let T={meter:vt(2.8,1.45,-4.3),panel:vt(2.8,-1.2,-3.8),shutoff:vt(-.5,-1.4,3.75),heater:vt(-2.1,-2,-3),sewer:vt(.6,-3.35,-7.5),furnace:vt(-3.3,-2,-2.6),register:vt(3.8,3.52,2.9),fan:vt(-1.2,7.9,-1.5),pit:vt(-1.2,-3,-1.5),exhaust:vt(-1.2,11.6,-1.5),rim:vt(4.9,.3,4.05),sill:vt(-2.5,.7,4.05),attic:vt(0,6.4,4.05),door:vt(.75,1.2,4.05),chimney:vt(-3.4,10.5,-1.6),eave:vt(-5.6,5.9,3.5),potlights:vt(-2.4,3.1,.7),rangeHood:vt(2.4,2.4,-3.55),island:vt(3,1.3,-.6),vanity:vt(-2.4,4.4,-3.55),tub:vt(-3.6,4.1,-3.35),bedWindow:vt(2.4,5.2,-3.9),sump:vt(.66,-2.2,1.6)},P=new st,x=new D,b=new $t,R=new D;function U(S,I,A,N,V){let B=N<.55?1:0;U.on=rt(U.on??0,B,pt(V*(B?.55:1.2),0,1));let z=U.on*9,O=(1-S.ghost*.85)*(1-.35*(S.cut||0)),F=1-.65*(S.cut||0),X=1+1.6*(S.cut||0);o.forEach(ve=>{let me=(ve.always?1:pt(z-ve.order,0,1))*O,Se=1-N*.8;ve.mat&&(ve.mat.emissiveIntensity=(ve.always?2.6:2)*me*Se*F),ve.halo&&(ve.halo.material.opacity=(ve.haloOnly?.28:ve.always?.5:.3)*me*Se*F)}),["main","upper"].forEach(ve=>(r[ve].userData.lights||[]).forEach(me=>{me.intensity=9*pt(z/9,0,1)*(1-N)*O*X}));let re=Math.max(S.zk||0,lt(.2,.7,S.explode||0),pt(((S.lift||0)-1.5)/1.5,0,1));(r.basement.userData.lights||[]).forEach(ve=>{ve.intensity=30*re*O*X});let pe=(1-N)*O;r.main.userData.porch.intensity=12*pe,(l.porchHalos||[]).forEach(ve=>{ve.material.opacity=.55*pe*F}),i.sconce.emissiveIntensity=.4+3.2*(1-N);let _e=pt(S.melt,0,1),De=.18+_e*.8;l.snowL.material.alphaTest=De,l.snowR.material.alphaTest=pt(De+.1,0,1);let Xe=r.roof.children.find(ve=>ve.material===i.snowRoof);Xe&&(Xe.visible=_e<.6);let $=l.icicles,ae=pt(S.icicles,0,1);if($.visible=ae>.01,$.visible){for(let ve=0;ve<$.count;ve++)P.copy($.userData.baseMatrices[ve]),P.decompose(x,b,R),R.y*=ae,R.x*=.5+.5*ae,R.z=R.x,P.compose(x,b,R),$.setMatrixAt(ve,P);$.instanceMatrix.needsUpdate=!0}return z}return{house:s,layers:r,sys:a,windows:o,ANCHORS:T,edgeMat:c,extra:l,update:U,box:p,rbox:d,cyl:u,system:f,wall:v,windowUnit:E,setUV:h,v:vt}}function Ui(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,c=new Mt,l=0;for(let h=0;h<i.length;++h){let p=i[h],d=0;if(t!==(p.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let u in p.attributes){if(!n.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+u+'" attribute exists among all geometries, or in none of them.'),null;r[u]===void 0&&(r[u]=[]),r[u].push(p.attributes[u]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==p.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let u in p.morphAttributes){if(!s.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[u]===void 0&&(a[u]=[]),a[u].push(p.morphAttributes[u])}if(e){let u;if(t)u=p.index.count;else if(p.attributes.position!==void 0)u=p.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,u,h),l+=u}}if(t){let h=0,p=[];for(let d=0;d<i.length;++d){let u=i[d].index;for(let f=0;f<u.count;++f)p.push(u.getX(f)+h);h+=i[d].attributes.position.count}c.setIndex(p)}for(let h in r){let p=zf(r[h]);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,p)}for(let h in a){let p=a[h][0].length;if(p!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<p;++d){let u=[];for(let _=0;_<a[h].length;++_)u.push(a[h][_][d]);let f=zf(u);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(f)}}}return c}function zf(i){let e,t,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let a=new e(r),o=new gt(a,t,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let p=c/t;for(let d=0,u=h.count;d<u;d++)for(let f=0;f<t;f++){let _=h.getComponent(d,f);o.setComponent(d+p,f,_)}}else a.set(h.array,c);c+=h.count*t}return s!==void 0&&(o.gpuType=s),o}var ih=0,Gf={value:new Wt(0,0,-1,30)};function qa(i,e,t,n=!1){let s=i.onBeforeCompile,r=++ih;return i.onBeforeCompile=(a,o)=>{s&&s(a,o),a.uniforms.uSight=Gf,a.fragmentShader=a.fragmentShader.replace("#include <common>",`#include <common>
uniform vec4 uSight;`).replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
      { vec3 fp = -vViewPosition;
        float fd = smoothstep(${e.toFixed(1)}, ${t.toFixed(1)}, length(fp));${n?`
        float fs = dot(fp, uSight.xyz);
        float fc = 1.0 - smoothstep(0.12, 0.26, length(fp - fs * uSight.xyz) / max(fs, 0.5));
        fd = min(fd, 1.0 - 0.94 * fc * smoothstep(0.5, 4.0, uSight.w - fs) * step(0.0, fs));`:""}
        float fh = fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715))));
        if (fd < fh) discard; }`)},i.customProgramCacheKey=()=>"fade"+r,i}function nh(i,e){let t=i.onBeforeCompile,n=++ih;return i.onBeforeCompile=(s,r)=>{t&&t(s,r),s.uniforms.uSnow=e,s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
attribute float aSnow;
uniform float uSnow;`).replace("#include <color_vertex>",`#include <color_vertex>
vColor.rgb = mix(vColor.rgb, vec3(0.8, 0.86, 0.95), aSnow * uSnow);`)},i.customProgramCacheKey=()=>"snowv"+n,i}function Vf({M:i,T:e,glowTex:t,markTex:n,tier:s,reduce:r}){let a=new mt,o=Un(21),c=qi("rgba(255,255,255,0.7)"),l=If(),h=Sr("rgba(255,196,120,0.9)","rgba(255,150,70,0)"),p={uSnow:{value:1},uRoofSnow:{value:1},uTint:{value:new ze(1,1,1)},uGrow:{value:0},uLeafTint:{value:new ze(.3,.5,.15)}},d=e.grass,u=e.snow,f=new Rt({map:u.map,normalMap:u.normalMap,roughnessMap:u.rmMap,metalnessMap:u.rmMap,roughness:1,metalness:1,transparent:!0,normalScale:new Ae(1.1,1.1),envMapIntensity:.9});f.onBeforeCompile=H=>{H.uniforms.uSnow=p.uSnow,H.uniforms.uTint=p.uTint,H.uniforms.uGrass={value:d.map},H.vertexShader=H.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vWxz;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vWxz = (modelMatrix * vec4(position, 1.0)).xz;`),H.fragmentShader=H.fragmentShader.replace("#include <common>",`#include <common>
      uniform float uSnow; uniform vec3 uTint; uniform sampler2D uGrass; varying vec2 vWxz;
      float gh(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float gn(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f); return mix(mix(gh(i), gh(i+vec2(1,0)), f.x), mix(gh(i+vec2(0,1)), gh(i+vec2(1,1)), f.x), f.y); }`).replace("#include <map_fragment>",`
      vec4 snowC = texture2D(map, vMapUv);
      vec3 gr = texture2D(uGrass, vWxz * 0.25).rgb * uTint;
      float nz = gn(vWxz * 0.35) * 0.55 + gn(vWxz * 1.7) * 0.3 + gn(vWxz * 7.0) * 0.15;
      float cover = smoothstep(uSnow - 0.1, uSnow + 0.1, 1.0 - nz + (uSnow - 0.5) * 0.9);
      cover = uSnow >= 0.995 ? 1.0 : (uSnow <= 0.005 ? 0.0 : cover);
      diffuseColor.rgb *= mix(gr / max(snowC.rgb, vec3(0.2)) * 0.9, vec3(1.0), cover);
      diffuseColor *= snowC;`)};let _=200,g=6,m=450,E=Array.from({length:_+1},(H,Y)=>m*Math.sinh(g*(Y/_*2-1))/Math.sinh(g)),w=(H,Y)=>{let Q=Math.hypot(H,Y),xe=lt(40,220,Q)*(kt(H*.012+3,Y*.012+8,4,4096,4096,3)-.35)*22,ge=(kt(H*.09,Y*.09,3,4096,4096,9)-.5)*.35*lt(8,22,Q)*(1-lt(14,17,Y)*(1-lt(27,30,Y)))*(1-lt(-22.5,-20.5,Y)*(1-lt(-15.5,-13.5,Y)))*(1-lt(5,6.2,H)*(1-lt(10.2,11.5,H))*lt(.5,2,Y)*(1-lt(16.5,18,Y)));return xe+ge},v=new Mt;{let H=new Float32Array((_+1)*(_+1)*3),Y=new Float32Array((_+1)*(_+1)*2),Q=[];for(let xe=0;xe<=_;xe++)for(let ge=0;ge<=_;ge++){let he=xe*(_+1)+ge,Pe=E[ge],Ie=E[xe];H[he*3]=Pe,H[he*3+1]=w(Pe,Ie),H[he*3+2]=Ie,Y[he*2]=Pe,Y[he*2+1]=Ie}for(let xe=0;xe<_;xe++)for(let ge=0;ge<_;ge++){let he=(E[ge]+E[ge+1])/2,Pe=(E[xe]+E[xe+1])/2;if(Math.abs(he)<5.1&&Math.abs(Pe)<4.1)continue;let Ie=xe*(_+1)+ge,ke=Ie+1,Je=Ie+_+1,Ce=Je+1;Q.push(Ie,Je,ke,ke,Je,Ce)}v.setAttribute("position",new gt(H,3)),v.setAttribute("uv",new gt(Y,2)),v.setIndex(Q),v.computeVertexNormals()}let y=[],T=new Re(v,f);T.receiveShadow=!0,T.renderOrder=-1,a.add(T);let P=i.asphalt.clone();[P.map,P.normalMap,P.roughnessMap,P.metalnessMap].forEach(H=>{H&&H.repeat.set(220,3)}),P.roughness=.72,P.metalness=0,P.metalnessMap=null,P.envMapIntensity=1.4;let x=new Re(new zt(660,9),P);x.rotation.x=-Math.PI/2,x.position.set(0,.012,22.2),x.receiveShadow=!0,a.add(x);let b=null;{let H=new zt(2.2,.14),Y=new di(H,new Rt({color:14070346,roughness:.8}),90),Q=new st,xe=new $t().setFromEuler(new hi(-Math.PI/2,0,0)),ge=new D,he=new D(1,1,1);for(let Pe=0;Pe<90;Pe++)ge.set(-180+Pe*4,.02,22.2),Q.compose(ge,xe,he),Y.setMatrixAt(Pe,Q);Y.receiveShadow=!0,a.add(Y),b=Y}y.push(P,i.pavement);let R=new Re(new Pt(660,.1,1.8),i.pavement);R.position.set(0,.05,15.6),R.receiveShadow=!0,R.castShadow=!0,a.add(R);let U=new Re(new Pt(1.3,.05,9.4),i.pavement);U.position.set(.7,.03,10.9),U.receiveShadow=!0,a.add(U);let S=new Re(new Pt(3.6,.06,14.5),i.pavement);S.position.set(7.9,.03,9.3),S.receiveShadow=!0,a.add(S);let I=i.asphalt.clone();[I.map,I.normalMap,I.roughnessMap,I.metalnessMap].forEach(H=>{H&&H.repeat.set(220,1.5)}),I.metalnessMap=null,I.metalness=0,I.roughness=.9,I.color.setScalar(1.25),y.push(I);let A=new Re(new zt(660,4.5),I);A.rotation.x=-Math.PI/2,A.position.set(0,.012,-18.2),A.receiveShadow=!0,a.add(A);let N=(()=>{let H=new Tn(1,10,6),Y=new di(H,new Rt({color:14673906,roughness:.95}),70),Q=new st,xe=new $t,ge=new D,he=new D;for(let Pe=0;Pe<70;Pe++){let Ie=Pe%2,ke=-140+(Pe>>1)*8+o()*3;ge.set(ke,.1,Ie?26.9:17.6+o()*.2),he.set(2.8+o()*1.4,.55+o()*.25,.9+o()*.3),Q.compose(ge,xe,he),Y.setMatrixAt(Pe,Q)}return Y.castShadow=!0,Y.receiveShadow=!0,a.add(Y),Y})(),V=[],B=qa(i.pole.clone(),3.5,9),z=qa(new Rt({color:3817544,roughness:.42,metalness:.65}),3.5,9),O=new Ht({color:new ze(3.2,2.2,1.1),toneMapped:!1}),F=new On([new D(0,6.9,0),new D(0,7.45,.25),new D(0,7.6,.9),new D(0,7.5,1.6)]),X=new An(F,14,.05,8),re=new Tn(1,24,12);re.scale(.54,.085,.23),[[-13,16.6],[11,16.6],[34,16.6],[-38,16.6]].forEach(([H,Y])=>{let Q=new mt;Q.position.set(H,0,Y);let xe=new Re(new Bt(.06,.1,7.2,10),B);xe.position.y=3.6,xe.castShadow=!0,Q.add(xe);let ge=new Re(X,B);ge.castShadow=!0,Q.add(ge);let he=new Re(re,z);he.position.set(0,7.5,1.78),he.rotation.x=.04,he.castShadow=!0,Q.add(he);let Pe=new Re(new zt(.8,.24),O);Pe.rotation.x=Math.PI/2,Pe.position.set(0,7.445,1.78),Pe.userData.noAO=!0,Q.add(Pe);let Ie=new _n(new un({map:t,transparent:!0,depthWrite:!1,blending:Nt,opacity:0}));Ie.position.set(0,7.3,1.78),Ie.scale.set(5,5,1),Ie.userData.noAO=!0,Q.add(Ie);let ke=new Re(new zt(1,1),new Ht({map:h,transparent:!0,depthWrite:!1,blending:Nt,opacity:0}));ke.rotation.x=-Math.PI/2,ke.position.set(0,.04,2),ke.scale.set(15,10,1),ke.userData.noAO=!0,Q.add(ke),a.add(Q),V.push({halo:Ie,pool:ke,lens:Pe})});let pe=new Hn(16761466,0,32,2);pe.position.set(11,7,18.2),a.add(pe);let _e=new Hn(16761466,0,32,2);_e.position.set(-13,7,18.2),a.add(_e);let De=[];[[-2.5,7.4,5.5,4.2],[.8,8.4,5.5,4.6],[3.15,7.4,5.5,4.2]].forEach(([H,Y,Q,xe])=>{let ge=new Re(new zt(1,1),new Ht({map:h,transparent:!0,depthWrite:!1,blending:Nt,opacity:0}));ge.rotation.x=-Math.PI/2,ge.position.set(H,.05,Y),ge.scale.set(Q,xe,1),ge.userData.noAO=!0,a.add(ge),De.push(ge)});let Xe=qa(nh(i.spruce.clone(),p.uSnow),5,12,!0);function $(H){let Y=Un(H),Q=[],xe=11;for(let se=0;se<xe;se++){let nt=se/(xe-1),je=rt(1.7,.18,Math.pow(nt,.85))*(.94+Y()*.12),ft=rt(1.7,.9,nt),bt=1+se*.62,Dt=new Ms(je,ft,20,4,!0);Dt.translate(0,bt+ft/2,0);let Ot=Dt.attributes.position;for(let ht=0;ht<Ot.count;ht++){let wt=Ot.getX(ht),Et=Ot.getY(ht),ct=Ot.getZ(ht),jt=Math.atan2(ct,wt),ln=Math.hypot(wt,ct),Cn=1+Math.sin(jt*7+se*2.3)*.09+Math.sin(jt*13+se)*.04+(Y()-.5)*.05,Ds=ln/je*(ln/je)*.34*(1+.35*Math.sin(jt*5+se*1.3));Ot.setXYZ(ht,wt*Cn,Et-Ds,ct*Cn)}Dt.computeVertexNormals(),Q.push(Dt)}let ge=new Bt(.1,.2,1.6,8);ge.translate(0,.8,0),Q.push(ge);let he=Ui(Q);he.computeVertexNormals();let Pe=he.attributes.position,Ie=he.attributes.normal,ke=new Float32Array(Pe.count*3),Je=new Float32Array(Pe.count),Ce=new ze;for(let se=0;se<Pe.count;se++){let nt=Ie.getY(se),je=kt(Pe.getX(se)*2.1,Pe.getZ(se)*2.1+Pe.getY(se)*1.1,3,64,64,2);Ce.setRGB(.05+je*.05,.12+je*.08,.09+je*.05),Pe.getY(se)<1.15&&Ce.setRGB(.1,.07,.05),ke[se*3]=Ce.r,ke[se*3+1]=Ce.g,ke[se*3+2]=Ce.b,Je[se]=Pe.getY(se)<1.15?0:pt(lt(.05,.6,nt+(je-.5)*.7),0,1)*.78}return he.setAttribute("color",new gt(ke,3)),he.setAttribute("aSnow",new gt(Je,1)),he}let ae=[[-9.5,3,1.1],[-11.8,-3.5,1.4],[9.8,-5.5,1.25],[-8.2,-8.5,1.05],[15,-9,1.35],[-14,9.5,1.2],[18,9,1.1],[-21,-6,1.5],[24,-3,1.25],[-27,8,1.2],[30,-12,1.4],[-11.5,-13.5,1.3],[6,-26,1.1],[-18,-27,1.45],[22,-27,1.3],[-36,3,1.3],[40,2,1.2]],ve=[$(1),$(2)],me=ve[0];ve.forEach((H,Y)=>{let Q=ae.filter((ke,Je)=>Je%2===Y),xe=new di(H,Xe,Q.length),ge=new st,he=new $t,Pe=new D,Ie=new D;Q.forEach(([ke,Je,Ce],se)=>{he.setFromAxisAngle(new D(0,1,0),o()*6.28),Pe.set(ke,0,Je),Ie.set(Ce,Ce*(.9+o()*.25),Ce),ge.compose(Pe,he,Ie),xe.setMatrixAt(se,ge)}),xe.castShadow=!0,xe.receiveShadow=!0,a.add(xe)});let Se=[];{let H=nh(i.shrub.clone(),p.uSnow),Y=new la(.7,3),Q=Y.attributes.position,xe=new Float32Array(Q.count*3),ge=new Float32Array(Q.count);for(let he=0;he<Q.count;he++){let Pe=Q.getX(he),Ie=Q.getY(he),ke=Q.getZ(he),Je=kt(Pe*2+5,ke*2+Ie*2,3,64,64,4),Ce=1+(Je-.5)*.35;Q.setXYZ(he,Pe*Ce,Ie*Ce*.72,ke*Ce),xe[he*3]=.06,xe[he*3+1]=.15+Je*.05,xe[he*3+2]=.1,ge[he]=lt(.05,.7,Ie/.7+(Je-.5))*.8}Y.setAttribute("color",new gt(xe,3)),Y.setAttribute("aSnow",new gt(ge,1)),Y.computeVertexNormals(),[[-1.7,4.9,1.2],[-2.5,4.7,.9],[2.9,4.9,1],[3.7,4.6,.8],[-5.2,4.6,.8]].forEach(([he,Pe,Ie])=>{let ke=new Re(Y,H);ke.position.set(he,.35*Ie,Pe),ke.scale.setScalar(Ie),ke.castShadow=!0,ke.receiveShadow=!0,ke.userData.keep=!0,a.add(ke),Se.push(ke)})}let W=qa(nh(new Rt({vertexColors:!0,roughness:1}),p.uSnow),5,12,!0),we=(()=>{let H=document.createElement("canvas");H.width=H.height=128;let Y=H.getContext("2d"),Q=Un(77);for(let ge=0;ge<30;ge++){Y.save(),Y.translate(12+Q()*104,12+Q()*104),Y.rotate(Q()*Math.PI);let he=150+Math.floor(Q()*105),Pe=6+Q()*6,Ie=13+Q()*9;Y.fillStyle=`rgb(${he},${he},${he})`,Y.beginPath(),Y.ellipse(0,0,Pe,Ie,0,0,Math.PI*2),Y.fill(),Y.strokeStyle="rgba(70,70,70,0.65)",Y.lineWidth=1,Y.beginPath(),Y.moveTo(0,-Ie),Y.lineTo(0,Ie),Y.stroke(),Y.restore()}let xe=new an(H);return xe.colorSpace=Ut,xe.anisotropy=4,xe})(),j=qa((()=>{let H=new Rt({map:we,alphaTest:.5,alphaToCoverage:s>=1,vertexColors:!0,roughness:.8,side:dn}),Y=++ih;return H.onBeforeCompile=Q=>{Q.uniforms.uGrow=p.uGrow,Q.uniforms.uLeafTint=p.uLeafTint,Q.vertexShader=Q.vertexShader.replace("#include <common>",`#include <common>
attribute vec3 aCenter;
uniform float uGrow;
uniform vec3 uLeafTint;`).replace("#include <begin_vertex>",`#include <begin_vertex>
transformed = aCenter + (position - aCenter) * uGrow;`).replace("#include <color_vertex>",`#include <color_vertex>
vColor.rgb *= uLeafTint;`),Q.fragmentShader=Q.fragmentShader.replace("#include <normal_fragment_begin>",St.normal_fragment_begin.replace("normal *= faceDirection;",""))},H.customProgramCacheKey=()=>"leaf"+Y,H})(),5,12,!0);function le(H){let Y=Un(H),Q=[],xe=[],ge=new D(0,1,0);function he(ft,bt,Dt,Ot){let ht=new Bt(Ot*.68,Ot,Dt,6,1);return ht.applyMatrix4(new st().compose(ft.clone().addScaledVector(bt,Dt/2),new $t().setFromUnitVectors(ge,bt),new D(1,1,1))),Q.push(ht),ft.clone().addScaledVector(bt,Dt)}let Pe=new D(0,0,1);function Ie(ft,bt){let Dt=[],Ot=[],ht=[],wt=[],Et=[],ct=[],jt=.72+Y()*.5,ln=(Y()-.5)*.25;for(let Ds=0;Ds<18;Ds++){let Ar=Y()*2-1,ch=Y()*Math.PI*2,uh=Math.sqrt(1-Ar*Ar),xc=new D(uh*Math.cos(ch),Ar*.85,uh*Math.sin(ch)).normalize(),Za=ft.clone().addScaledVector(xc,bt*(.3+.7*Math.cbrt(Y()))),hh=.8+Y()*.55,dh=xc.clone().add(new D(Y()-.5,Y()-.3,Y()-.5).multiplyScalar(.9)).normalize(),Qf=new $t().setFromUnitVectors(Pe,dh).premultiply(new $t().setFromAxisAngle(dh,Y()*6.28)),vc=xc.clone().add(new D(0,.3,0)).normalize(),Ls=Dt.length/3;[[-.5,-.5],[.5,-.5],[.5,.5],[-.5,.5]].forEach(([fh,ph])=>{let _c=new D(fh*hh,ph*hh,0).applyQuaternion(Qf).add(Za);Dt.push(_c.x,_c.y,_c.z),Ot.push(vc.x,vc.y,vc.z),ht.push(fh+.5,ph+.5),wt.push(Za.x,Za.y,Za.z);let yc=jt*(.85+.3*Y());Et.push(yc*(1+ln),yc,yc*(1-ln*.6))}),ct.push(Ls,Ls+1,Ls+2,Ls,Ls+2,Ls+3)}let Cn=new Mt;Cn.setAttribute("position",new yt(Dt,3)),Cn.setAttribute("normal",new yt(Ot,3)),Cn.setAttribute("uv",new yt(ht,2)),Cn.setAttribute("aCenter",new yt(wt,3)),Cn.setAttribute("color",new yt(Et,3)),Cn.setIndex(ct),xe.push(Cn)}function ke(ft,bt,Dt,Ot,ht){let wt=he(ft,bt,Dt,Ot);if(ht===0){Ie(wt,.9+Y()*.7),Y()<.7&&Ie(wt.clone().add(new D((Y()-.5)*1.2,Y()*.6,(Y()-.5)*1.2)),.7+Y()*.5);return}let Et=ht>=3?3:2+(Y()<.4?1:0);for(let ct=0;ct<Et;ct++){let jt=new D().crossVectors(bt,new D(Y()-.5,.25,Y()-.5)).normalize(),ln=bt.clone().applyAxisAngle(jt,.45+Y()*.7).add(new D(0,.18,0)).normalize();ke(wt,ln,Dt*(.68+Y()*.14),Ot*.62,ht-1)}ht<=2&&Ie(wt.clone().add(new D((Y()-.5)*.8,.3,(Y()-.5)*.8)),.8+Y()*.5)}ke(new D(0,0,0),ge,2.6,.24,4);let Je=Ui(Q),Ce=Je.attributes.position,se=Je.attributes.normal,nt=new Float32Array(Ce.count*3),je=new Float32Array(Ce.count);for(let ft=0;ft<Ce.count;ft++){let bt=kt(Ce.getX(ft)*3,Ce.getY(ft)*3+Ce.getZ(ft),2,64,64,6);nt[ft*3]=.16+bt*.08,nt[ft*3+1]=.12+bt*.06,nt[ft*3+2]=.09+bt*.05,je[ft]=pt(se.getY(ft)*1.5,0,1)*.85}return Je.setAttribute("color",new gt(nt,3)),Je.setAttribute("aSnow",new gt(je,1)),{wood:Je,leaf:Ui(xe)}}let Z=[],ee=[[-11.5,-1,.95],[12.2,-3.6,1],[-9.5,-9.5,1.1],[8.5,-9.8,1.15],[-33,-9,1.15],[35,-8,1.05],[-26,11,1],[27,9,1],[-30,18.8,.75],[44,18.8,.75],[-9,-22,1.2],[14,-23,1.1]];[le(31),le(47)].forEach((H,Y)=>{let Q=ee.filter((ge,he)=>he%2===Y),xe=(ge,he,Pe)=>{let Ie=new di(ge,he,Q.length),ke=new st,Je=new $t,Ce=new D,se=new D;return Q.forEach(([nt,je,ft],bt)=>{Je.setFromAxisAngle(new D(0,1,0),(nt*7+je*3)%6.28),Ce.set(nt,0,je),se.setScalar(ft*.95),ke.compose(Ce,Je,se),Ie.setMatrixAt(bt,ke)}),Ie.castShadow=Pe,Ie.receiveShadow=!0,a.add(Ie),Ie};xe(H.wood,W,!0),Z.push(xe(H.leaf,j,!0))});let oe=i.neighborRoof.clone();oe.onBeforeCompile=H=>{H.uniforms.uRoofSnow=p.uRoofSnow,H.fragmentShader=H.fragmentShader.replace("#include <common>",`#include <common>
uniform float uRoofSnow;`).replace("#include <map_fragment>",`#include <map_fragment>
diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.9, 0.93, 0.97), uRoofSnow * 0.92);`)},oe.customProgramCacheKey=()=>"nroof";let be=new Ht({color:new ze(1.5,.92,.42),transparent:!0,opacity:0}),Ee=new Rt({color:659222,roughness:.08,metalness:.4,envMapIntensity:1.6}),Oe=[],Ne=[],G=[];function ot(H){let{x:Y,z:Q,w:xe,d:ge,h:he,rh:Pe,tone:Ie,rot:ke=0,garage:Je,chimney:Ce}=H,se=new mt,nt=i.neighbor.clone();nt.color.setHex(Ie).multiplyScalar(1.9);let je=new Pt(xe,he,ge);Ps(je,{oy:he/2});let ft=new Re(je,nt);ft.position.y=he/2,ft.castShadow=!0,ft.receiveShadow=!0,se.add(ft);let bt=new fi;bt.moveTo(-xe/2-.5,0),bt.lineTo(xe/2+.5,0),bt.lineTo(0,Pe),bt.lineTo(-xe/2-.5,0);let Dt=new Re(new Ri(bt,{depth:ge+1,bevelEnabled:!1}),oe);if(Dt.position.set(0,he,-ge/2-.5),Dt.castShadow=!0,Dt.receiveShadow=!0,se.add(Dt),Ce){let Et=new Re(new Pt(.7,2.4,.7),i.stone);Et.position.set(xe*.22,he+Pe*.55,-ge*.1),Et.castShadow=!0,se.add(Et)}let Ot=(Et,ct,jt,ln,Cn)=>{let Ds=new st().compose(new D(Et,ct,jt),new $t().setFromAxisAngle(new D(0,1,0),ln),new D(1,1,1)),Ar=new st().compose(new D(Et,ct,jt).add(new D(Math.sin(ln),0,Math.cos(ln)).multiplyScalar(-.012)),new $t().setFromAxisAngle(new D(0,1,0),ln),new D(1,1,1));(Cn?Oe:Ne).push({g:se,m:Ds}),G.push({g:se,m:Ar})},ht=Math.max(2,Math.round(xe/2.4));for(let Et=0;Et<2;Et++)for(let ct=0;ct<ht;ct++)Je&&Et===0&&ct===0||Ot(-xe/2+(ct+.5)*(xe/ht),1.5+Et*2.6,ge/2+.02,0,o()>.32);for(let Et=0;Et<2;Et++)Ot(xe/2+.02,1.5+Et*2.6,0,Math.PI/2,o()>.5),Ot(-xe/2-.02,1.5+Et*2.6,0,-Math.PI/2,o()>.5);let wt=new Re(new Pt(2.2,2.1,.12),i.walnut);if(wt.position.set(xe/2-1.5,1.05,ge/2+.05),se.add(wt),Je){let Et=new Re(new Pt(2.8,2.3,.14),i.cedar);Et.position.set(-xe/2+1.7,1.15,ge/2+.06),se.add(Et);for(let ct=1;ct<4;ct++){let jt=new Re(new Pt(2.8,.04,.16),i.trim);jt.position.set(-xe/2+1.7,ct*.575,ge/2+.07),se.add(jt)}}return se.position.set(Y,0,Q),se.rotation.y=ke,a.add(se),et.push([Y,he+Pe,Q]),se}let et=[];[{x:-17,z:-1,w:7.4,d:7,h:5.4,rh:2.6,tone:7304314,garage:!0,chimney:!0},{x:17.5,z:.5,w:6.8,d:6.6,h:4.8,rh:2.4,tone:8023912},{x:-33,z:-2,w:7.2,d:7.5,h:5.2,rh:2.5,tone:6251884,chimney:!0},{x:34,z:0,w:7.6,d:7,h:5.6,rh:2.8,tone:6975608,garage:!0},{x:-49,z:0,w:7,d:7,h:5,rh:2.4,tone:7565679},{x:50,z:-1,w:7,d:7,h:5.2,rh:2.4,tone:6712178,chimney:!0},{x:-66,z:1,w:7,d:7,h:5,rh:2.4,tone:7171954,garage:!0},{x:67,z:0,w:7,d:7,h:5,rh:2.4,tone:7369592},{x:-24,z:40,w:7,d:7,h:5.2,rh:2.5,tone:6975092,rot:Math.PI,garage:!0},{x:-8,z:41,w:7.4,d:7,h:5.4,rh:2.6,tone:7828073,rot:Math.PI,chimney:!0},{x:10,z:40,w:7,d:6.8,h:5,rh:2.4,tone:6843764,rot:Math.PI},{x:28,z:41,w:7.2,d:7,h:5.4,rh:2.6,tone:7500921,rot:Math.PI,garage:!0},{x:46,z:40,w:7,d:7,h:5.2,rh:2.4,tone:7106678,rot:Math.PI}].forEach(ot),a.updateMatrixWorld(!0);let L=(H,Y,Q)=>{let xe=new di(Y,Q,H.length),ge=new st;return H.forEach(({g:he,m:Pe},Ie)=>{ge.multiplyMatrices(he.matrixWorld,Pe),xe.setMatrixAt(Ie,ge)}),xe.userData.noAO=!1,a.add(xe),xe},M=new zt(1,1.15),K=new zt(1.16,1.31),te=[];L(Oe,M,be),L(Ne,M,Ee),L(G,K,i.trim);let ce=new mt;ce.visible=!1,a.add(ce);let Le=new Bt(.05,.05,1,8,1,!0),Fe=[],fe=new D(0,12.6,0);et.forEach(([H,Y,Q],xe)=>{let ge=new D(H,Y+3.4,Q),he=new _n(new un({map:n,transparent:!0,depthWrite:!1,depthTest:!1,opacity:0}));he.position.copy(ge),he.renderOrder=12,he.userData.noAO=!0,ce.add(he);let Pe=new Re(Le,new Ht({color:new ze(2.2,1.3,.55),transparent:!0,opacity:0,blending:Nt,depthWrite:!1,toneMapped:!1}));Pe.scale.set(1,3.2,1),Pe.position.set(H,Y+1.6,Q),Pe.userData.noAO=!0,Pe.raycast=()=>{},ce.add(Pe);let Ie=ge.clone().lerp(fe,.5);Ie.y+=5+ge.distanceTo(fe)*.18;let ke=new On([ge,ge.clone().lerp(Ie,.5).setY(Ie.y*.9),Ie,Ie.clone().lerp(fe,.5).setY(Ie.y*.9),fe]),Je=40,Ce=new Re(new An(ke,Je,.07,5,!1),new Ht({color:new ze(2.4,1.4,.6),transparent:!0,opacity:0,blending:Nt,depthWrite:!1,toneMapped:!1}));Ce.userData.noAO=!0,Ce.raycast=()=>{},ce.add(Ce);let se=9,nt=new Mt;nt.setAttribute("position",new gt(new Float32Array(se*3),3));let je=new yn(nt,new hn({size:.9,map:c,color:new ze(2.4,1.5,.7),transparent:!0,depthWrite:!1,blending:Nt,toneMapped:!1}));je.frustumCulled=!1,je.userData.noAO=!0,je.raycast=()=>{},ce.add(je),Fe.push({spr:he,bm:Pe,tube:Ce,segs:Je,curve:ke,pts:je,n:se,d:ge.distanceTo(fe),delay:0})}),Fe.sort((H,Y)=>H.d-Y.d),Fe.forEach((H,Y)=>{H.delay=Y/Fe.length});let ue=new _n(new un({map:n,transparent:!0,depthWrite:!1,depthTest:!1,opacity:0}));ue.position.copy(fe).add(new D(0,1.2,0)),ue.scale.set(4.2,4.2,1),ue.renderOrder=13,ue.userData.noAO=!0,ce.add(ue);let Be=new D;function tt(H,Y){ce.visible=H>.003,ce.visible&&(ue.material.opacity=lt(0,.15,H),ue.scale.setScalar(4.2+Math.sin(Y*3)*.3),Fe.forEach(Q=>{let xe=lt(Q.delay*.7,Q.delay*.7+.3,H);Q.spr.material.opacity=xe,Q.spr.scale.setScalar(2.4*(.6+.4*xe)),Q.bm.material.opacity=.5*xe,Q.bm.scale.y=3.2+6*xe,Q.bm.position.y=Q.spr.position.y-Q.bm.scale.y/2-1.6;let ge=Math.floor(lt(.1+Q.delay*.6,.45+Q.delay*.6,H)*Q.segs)*5*6;Q.tube.geometry.setDrawRange(0,ge),Q.tube.material.opacity=.34*xe*(.8+.2*Math.sin(Y*3+Q.delay*9));let he=Q.pts.geometry.attributes.position.array,Pe=lt(.1+Q.delay*.6,.45+Q.delay*.6,H);for(let Ie=0;Ie<Q.n;Ie++){let ke=(Ie/Q.n+Y*.16+Q.delay)%1;if(ke>Pe){he[Ie*3+1]=-999;continue}Q.curve.getPointAt(ke,Be),he[Ie*3]=Be.x,he[Ie*3+1]=Be.y,he[Ie*3+2]=Be.z}Q.pts.geometry.attributes.position.needsUpdate=!0,Q.pts.material.opacity=xe}))}let Ge=new Rt({color:4864555,roughness:.95}),He=new Ht({color:723724}),Ze=[];(()=>{let H=new mt;H.position.set(-3.4,0,-11.4),a.add(H);let Y=7.4,Q=6.4,xe=3.1,ge=new Pt(Y,xe,Q);Ps(ge,{oy:xe/2});let he=new Re(ge,i.bb.clone());he.material.color.setScalar(1),he.position.y=xe/2,he.castShadow=!0,he.receiveShadow=!0,H.add(he);let Pe=new fi;Pe.moveTo(-Y/2-.45,0),Pe.lineTo(Y/2+.45,0),Pe.lineTo(0,1.9),Pe.lineTo(-Y/2-.45,0);let Ie=new Re(new Ri(Pe,{depth:Q+.9,bevelEnabled:!1}),oe);Ie.position.set(0,xe,-Q/2-.45),Ie.castShadow=!0,Ie.receiveShadow=!0,H.add(Ie);for(let Je=0;Je<2;Je++){let Ce=-1.8+Je*3.6,se=new Re(new Pt(3.1,2.4,.12),i.walnut);se.position.set(Ce,1.2,-Q/2-.05),se.castShadow=!0,H.add(se);for(let ft=1;ft<4;ft++){let bt=new Re(new Pt(3.1,.04,.14),i.trim);bt.position.set(Ce,ft*.6,-Q/2-.08),H.add(bt)}let nt=new Re(new Pt(2.7,.3,.14),i.mirror);nt.position.set(Ce,2.05,-Q/2-.09),H.add(nt);let je=new Re(new Pt(3.3,2.55,.1),i.trim);je.position.set(Ce,1.27,-Q/2-0),H.add(je)}[-3.3,3.3].forEach(Je=>{let Ce=new Re(new Bt(.07,.08,.26,12),i.sconce);Ce.position.set(Je,2.55,-Q/2-.2),Ce.userData.noAO=!0,H.add(Ce);let se=new _n(new un({map:t,transparent:!0,depthWrite:!1,blending:Nt,opacity:0}));se.position.set(Je,2.55,-Q/2-.5),se.scale.set(2.2,2.2,1),se.userData.noAO=!0,H.add(se),Ze.push(se)});let ke=new Re(new zt(1,1),new Ht({map:h,transparent:!0,depthWrite:!1,blending:Nt,opacity:0}));ke.rotation.x=-Math.PI/2,ke.position.set(0,.05,-Q/2-2.2),ke.scale.set(10,5,1),ke.userData.noAO=!0,H.add(ke),Ze.pool=ke})();let Qe=[-75.2,-49.2,-23.2,2.8,28.8,54.8,80.8];Qe.forEach(H=>{let Y=new mt;Y.position.set(H,0,-15.5),a.add(Y);let Q=new Re(new Bt(.13,.19,9.8,10),Ge);Q.position.y=4.9,Q.castShadow=!0,Y.add(Q);let xe=new Re(new Pt(.12,.12,2.2),Ge);if(xe.position.y=9.2,Y.add(xe),[-.85,0,.85].forEach(ge=>{let he=new Re(new Bt(.04,.05,.2,8),i.ceramic);he.position.set(0,9.36,ge),Y.add(he)}),Math.abs(H-2.8)<1){let ge=new Re(new Bt(.3,.3,.95,14),i.steel);ge.position.set(.5,8.35,.2),ge.castShadow=!0,Y.add(ge);let he=new Re(new Bt(.2,.3,.12,14),i.steel);he.position.set(.5,8.9,.2),Y.add(he)}});let at=[];for(let H=0;H<Qe.length-1;H++)[-.85,0,.85].forEach(Y=>{let Q=new D(Qe[H],9.4,-15.5+Y),xe=new D(Qe[H+1],9.4,-15.5+Y),ge=Q.clone().lerp(xe,.5);ge.y-=.9,at.push(new An(new On([Q,Q.clone().lerp(ge,.5).setY(9.4-.45),ge,ge.clone().lerp(xe,.5).setY(9.4-.45),xe]),24,.022,4))});{let H=new D(2.8,9.4,-15.5),Y=new D(2.8,5.4,-4.3),Q=H.clone().lerp(Y,.5);Q.y-=.7,at.push(new An(new On([H,Q,Y]),20,.026,4))}let q=new Re(Ui(at),He);q.castShadow=!1,q.raycast=()=>{},a.add(q);let Ue=new mt,Me=[],Ve={front:null,rear:null},We=new mt;(()=>{let H=new Bn({color:1784408,metalness:.65,roughness:.3,clearcoat:1,clearcoatRoughness:.08,envMapIntensity:1.5}),Y=new Bn({color:395533,metalness:.2,roughness:.04,clearcoat:1,envMapIntensity:1.8}),Q=new Rt({color:1052946,roughness:.85}),xe=new Rt({color:12107462,metalness:.9,roughness:.25}),ge=new fi;ge.moveTo(-2.3,.28),ge.lineTo(-2.38,.6),ge.quadraticCurveTo(-2.36,.92,-2.05,.98),ge.lineTo(1.35,.98),ge.quadraticCurveTo(2.05,.9,2.3,.7),ge.lineTo(2.34,.44),ge.quadraticCurveTo(2.3,.28,2.1,.28),ge.lineTo(-2.3,.28);let he=new Re(new Ri(ge,{depth:1.7,bevelEnabled:!0,bevelThickness:.09,bevelSize:.09,bevelSegments:4,curveSegments:14}),H);he.geometry.translate(0,0,-.85),he.castShadow=!0,Ue.add(he);let Pe=new fi;Pe.moveTo(-1.95,.96),Pe.quadraticCurveTo(-1.55,1.42,-.95,1.46),Pe.lineTo(.5,1.44),Pe.quadraticCurveTo(.95,1.4,1.38,.96),Pe.lineTo(-1.95,.96);let Ie=new Re(new Ri(Pe,{depth:1.62,bevelEnabled:!0,bevelThickness:.07,bevelSize:.05,bevelSegments:3,curveSegments:12}),Y);Ie.geometry.translate(0,0,-.81),Ie.castShadow=!0,Ue.add(Ie);let ke=new Re(new ii(1.9,.07,1.6,2,.03),H);ke.position.set(-.2,1.47,0),Ue.add(ke),[[-1.4,.8],[1.4,.8],[-1.4,-.8],[1.4,-.8]].forEach(([ht,wt])=>{let Et=new Re(new Bt(.37,.37,.26,24),Q);Et.rotation.x=Math.PI/2,Et.position.set(ht,.37,wt*1+Math.sign(wt)*.04),Et.castShadow=!0,Ue.add(Et);let ct=new Re(new Bt(.23,.23,.27,20),xe);ct.rotation.x=Math.PI/2,ct.position.copy(Et.position),Ue.add(ct)});let Je=new Rt({color:1118481,emissive:16777215,emissiveIntensity:.1}),Ce=new Rt({color:2228224,emissive:16722458,emissiveIntensity:.1}),se=new Re(new Pt(.06,.05,1.5),Je);se.position.set(2.33,.72,0),se.userData.noAO=!0,Ue.add(se);let nt=new Re(new Pt(.06,.05,1.5),Ce);nt.position.set(-2.4,.78,0),nt.userData.noAO=!0,Ue.add(nt),Ve.front=Je,Ve.rear=Ce;let je=new Re(new ii(1.8,.07,1.5,2,.03),i.snowRoof);je.userData.keep=!0,je.position.set(-.2,1.54,0),Ue.add(je),Me.push(je);let ft=new Re(new ii(1,.05,1.45,2,.02),i.snowRoof);ft.userData.keep=!0,ft.position.set(1.6,1,0),ft.rotation.z=-.1,Ue.add(ft),Me.push(ft),Ue.position.set(7.9,0,6.3),Ue.rotation.y=-Math.PI/2,a.add(Ue);let bt=[new D(5.2,1.2,2.5),new D(5.55,.5,2.85),new D(6.15,.12,3.3),new D(6.7,.4,3.75),new D(7,.82,3.95)],Dt=new Re(new An(new On(bt),24,.028,6),new Rt({color:855310,roughness:.6}));Dt.castShadow=!0,We.add(Dt);let Ot=new Re(new Tn(.05,10,8),new Ht({color:new ze(.4,3,1.2)}));Ot.position.set(5.16,1.5,2.5),Ot.userData.noAO=!0,We.add(Ot),We.userData.led=Ot,a.add(We)})();let k=r?0:s>=1?2200:900,Te=new Mt,ye=new Float32Array(k*3),Ke=new Float32Array(k*2),it=[90,40,90];for(let H=0;H<k;H++)ye[H*3]=(o()-.5)*it[0],ye[H*3+1]=o()*it[1],ye[H*3+2]=(o()-.5)*it[2],Ke[H*2]=.7+o()*1.1,Ke[H*2+1]=o()*6.28;Te.setAttribute("position",new gt(ye,3));let Vt=new hn({color:16777215,size:.11,map:c,transparent:!0,opacity:.85,depthWrite:!1,blending:Nt}),Ct=new yn(Te,Vt);Ct.frustumCulled=!1,Ct.userData.noAO=!0,a.add(Ct);let Ft=s>=1&&!r?140:0,zn=new Mt,gi=new Float32Array(Ft*3);for(let H=0;H<Ft;H++)gi[H*3]=(o()-.5)*50,gi[H*3+1]=o()*22,gi[H*3+2]=(o()-.5)*50;zn.setAttribute("position",new gt(gi,3));let Zn=new hn({color:14674175,size:.42,map:c,transparent:!0,opacity:.22,depthWrite:!1,blending:Nt}),Fi=new yn(zn,Zn);Fi.frustumCulled=!1,Fi.userData.noAO=!0,a.add(Fi);let ri=r?0:s>=1?1600:700,ai=new Mt,Nn=new Float32Array(ri*6),xi=new Float32Array(ri),Fn=[70,30,70];for(let H=0;H<ri;H++){let Y=(o()-.5)*Fn[0],Q=o()*Fn[1],xe=(o()-.5)*Fn[2];Nn.set([Y,Q,xe,Y-.04,Q+.7,xe],H*6),xi[H]=14+o()*6}ai.setAttribute("position",new gt(Nn,3));let nn=new es({color:11455464,transparent:!0,opacity:0,depthWrite:!1}),on=new Ai(ai,nn);on.frustumCulled=!1,on.userData.noAO=!0,on.raycast=()=>{},a.add(on);let Gn=r?0:s>=1?420:160,vi=new Mt,ds=new Float32Array(Gn*3),Zi=new Float32Array(Gn*2),Ya=new Float32Array(Gn*3),Is=[80,22,80],gc=[[.95,.55,.1],[.85,.3,.08],[.9,.75,.15],[.6,.2,.05]];for(let H=0;H<Gn;H++){ds[H*3]=(o()-.5)*Is[0],ds[H*3+1]=o()*Is[1],ds[H*3+2]=(o()-.5)*Is[2],Zi[H*2]=.5+o()*.8,Zi[H*2+1]=o()*6.28;let Y=gc[H%4];Ya.set(Y,H*3)}vi.setAttribute("position",new gt(ds,3)),vi.setAttribute("color",new gt(Ya,3));let Oi=new yn(vi,new hn({size:.2,vertexColors:!0,map:c,transparent:!0,opacity:.9,depthWrite:!1}));Oi.frustumCulled=!1,Oi.userData.noAO=!0,a.add(Oi);let Tr=[];for(let H=0;H<22;H++){let Y=new _n(new un({map:l,transparent:!0,depthWrite:!1,opacity:0,color:12568276}));Y.userData={age:H/22*6,noAO:!0},Y.renderOrder=5,a.add(Y),Tr.push(Y)}let C=new Re(me,Xe);C.position.set(.9,0,-12.4),C.scale.setScalar(.75),C.castShadow=!0,C.visible=!1,a.add(C);let J=new Set([T,x,R,U,S,A,N,b,C]),de=new mt;a.add(de),a.children.slice().forEach(H=>{H!==de&&!J.has(H)&&de.add(H)});let ne=new D;function ie(H){Vt.color.set(H?6963104:16777215)}function qe(H,Y,Q,xe,ge,he,Pe){f.opacity=H.ground,f.depthWrite=H.ground>.95,T.visible=H.ground>.01,y.forEach(Ce=>{let se=H.ground<.99;Ce.transparent!==se&&(Ce.transparent=se,Ce.needsUpdate=!0),Ce.opacity=H.ground,Ce.depthWrite=!se}),p.uSnow.value=H.snow,p.uRoofSnow.value=H.roofSnow,p.uGrow.value=H.grow,p.uLeafTint.value.copy(H.leafTint),tt(H.beacons||0,Y),C.visible=H.section>.3,N.visible=H.snow>.25,Z.forEach(Ce=>{Ce.visible=H.grow>.02,Ce.castShadow=H.grow>.5}),Me.forEach(Ce=>{Ce.visible=H.snow>.5}),We.visible=H.explode<.05,Ue.visible=!0;let Ie=1-xe;Ve.front.emissiveIntensity=.1+2.2*Ie,Ve.rear.emissiveIntensity=.1+3*Ie,We.userData.led.scale.setScalar(.8+.25*Math.sin(Y*3));let ke=lt(.35,.9,H.ground);Se.forEach(Ce=>{Ce.visible=H.ground>.5||H.explode>.05}),V.forEach(Ce=>{Ce.halo.material.opacity=.75*Ie,Ce.pool.material.opacity=.55*Ie*ke}),pe.intensity=55*Ie,_e.intensity=40*Ie,O.color.setRGB(3.2,2.2,1.1).multiplyScalar(.06+.94*Ie),Ze.forEach(Ce=>{Ce.material.opacity=.5*Ie}),Ze.pool.material.opacity=.4*Ie*ke,De.forEach((Ce,se)=>{Ce.material.opacity=.5*Ie*pt($e(Pe,se),0,1)*(1-H.ghost)*ke}),be.opacity=Ie*.9,Ct.position.set(ge.x,0,ge.z),Fi.position.set(ge.x,0,ge.z),on.position.set(ge.x,0,ge.z),Oi.position.set(ge.x,0,ge.z);let Je=H.snowfall;if(Ct.visible=Fi.visible=Je>.02&&k>0,Ct.visible){let Ce=Te.attributes.position.array;for(let nt=0;nt<k;nt++)Ce[nt*3+1]-=Ke[nt*2]*Q*1.5,Ce[nt*3]+=Math.sin(Y*.7+Ke[nt*2+1])*Q*.3,Ce[nt*3+2]+=Math.cos(Y*.5+Ke[nt*2+1])*Q*.2,Ce[nt*3+1]<0&&(Ce[nt*3+1]=it[1]);Te.attributes.position.needsUpdate=!0;let se=zn.attributes.position.array;for(let nt=0;nt<Ft;nt++)se[nt*3+1]-=.8*Q,se[nt*3+1]<0&&(se[nt*3+1]=22);zn.attributes.position.needsUpdate=!0,Vt.opacity=.8*Je*(1-xe*.45),Zn.opacity=.2*Je*(1-xe*.5)}if(on.visible=H.rain>.02&&ri>0,on.visible){let Ce=ai.attributes.position.array;for(let se=0;se<ri;se++){let nt=xi[se]*Q;Ce[se*6+1]-=nt,Ce[se*6+4]-=nt,Ce[se*6+4]<0&&(Ce[se*6+1]+=Fn[1],Ce[se*6+4]+=Fn[1])}ai.attributes.position.needsUpdate=!0,nn.opacity=.32*H.rain}if(Oi.visible=H.leaves>.02&&Gn>0,Oi.visible){let Ce=vi.attributes.position.array;for(let se=0;se<Gn;se++)Ce[se*3+1]-=Zi[se*2]*Q*.9,Ce[se*3]+=(Math.sin(Y*.9+Zi[se*2+1])*.7+.35)*Q,Ce[se*3+2]+=Math.cos(Y*.6+Zi[se*2+1])*.4*Q,Ce[se*3+1]<0&&(Ce[se*3+1]=Is[1]);vi.attributes.position.needsUpdate=!0,Oi.material.opacity=.9*H.leaves}Tr.forEach(Ce=>{Ce.userData.age+=Q*.55,Ce.userData.age>6&&(Ce.userData.age-=6);let se=Ce.userData.age/6;ne.copy(he),ne.y+=se*5.2,ne.x+=se*2.2+Math.sin(se*5+Ce.id)*.18,ne.z+=Math.cos(se*3+Ce.id)*.15,Ce.position.copy(ne),Ce.scale.setScalar(.5+se*2.6),Ce.material.opacity=Math.sin(Math.PI*Math.min(1,se*1.3))*.34*H.smoke*(.5+.5*Ie)})}let $e=(H,Y)=>H-Y*.3;return{world:a,ground:T,groundMat:f,U:p,update:qe,lamps:V,setThermal:ie,evGroup:Ue,props:de,sight:Gf}}var Zt={wire:16761963,cold:5220095,hot:16739151,drain:10135476,supply:9433288,ret:9083903,radon:14257407},sh=2.4;function kf({house:i,reduce:e}){let t=(S,I,A)=>new D(S,I,A),n=qi("rgba(255,255,255,0.6)"),s={netE:[],netW:[],netA:[],netR:[]},r={netE:[],netW:[],netA:[],netR:[]},a={};Object.keys(s).forEach(S=>{a[S]=new mt,a[S].visible=!1,a[S].userData.noAO=!0,i.add(a[S])});let o=S=>{let I=new ur;for(let A=1;A<S.length;A++)I.add(new ts(S[A-1],S[A]));return I};function c(S,I,A,N,V){let B=o(I.map(De=>t(De[0],De[1],De[2]))),z=B.getLength(),O=Math.max(6,Math.round(z*7)),F=6,X=new Ht({color:A,toneMapped:!1,fog:!1,transparent:!0});X.color.multiplyScalar(1.5);let re=new Re(new An(B,O,N,F,!1),X),pe=new Ht({color:A,transparent:!0,opacity:.2,blending:Nt,depthWrite:!1,toneMapped:!1,fog:!1});pe.color.multiplyScalar(sh);let _e=new Re(new An(B,O,N*3.4,F,!1),pe);re.renderOrder=7,_e.renderOrder=8,re.userData.noAO=_e.userData.noAO=!0,re.raycast=_e.raycast=()=>{},a[S].add(re,_e),s[S].push({tube:re,glow:_e,segs:O,radial:F,gmat:pe}),V&&r[S].push({curve:B,len:z,n:Math.max(3,Math.round(z*V.density)),speed:V.speed,color:V.color||A})}let l=[];for(let S=0;S<=10;S++){let I=S/10;l.push([2.8,rt(9.1,7.7,I)-1*Math.sin(Math.PI*I),rt(-15.5,-4.45,I)])}c("netE",[...l,[2.8,1.45,-4.3],[2.8,-.35,-4.3],[2.8,-.35,-3.86],[2.8,-.72,-3.86]],Zt.wire,.045,{density:2.2,speed:6});let h=[2.8,-.72,-3.78],p=[2.8,-.2,-3.78];c("netE",[h,p,[2.2,-.2,-3.78],[2.2,1.35,-3.9],[4.6,1.35,-3.9]],Zt.wire,.032,{density:2.5,speed:5}),c("netE",[h,p,[4.94,-.2,-3.78],[4.94,-.2,3.7],[4.94,.6,3.92],[1.45,.6,3.92],[1.45,2.45,3.92],[.05,2.45,3.92],[.05,.6,3.92],[-4.94,.6,3.92],[-4.94,.6,-3.2]],Zt.wire,.032,{density:2.5,speed:5}),c("netE",[h,p,[4.94,-.2,-3.78],[4.94,3.85,-3.78],[4.94,3.85,3.92],[-4.94,3.85,3.92],[-4.94,3.85,-2.4]],Zt.wire,.032,{density:2.5,speed:5}),c("netE",[h,p,[1.28,-.2,-3.78],[1.28,-.2,-1],[1.28,3.05,-1],[-1.5,3.05,-1],[-1.5,3.05,.5]],Zt.wire,.03,{density:2.5,speed:5}),c("netE",[[1.28,3.05,-1],[3,3.05,-1],[3,3.05,-1.6]],Zt.wire,.03,{density:2.5,speed:5}),c("netE",[h,p,[4.94,-.2,-3.78],[4.94,-.2,2.5],[4.94,1.3,2.5],[5.1,1.3,2.5]],Zt.wire,.034,{density:2.5,speed:5}),c("netW",[[-.5,-2.2,16],[-.5,-2.2,3.75],[-.5,-.32,3.75],[-.5,-.32,-3],[-1.95,-.32,-3],[-1.95,-1.35,-3]],Zt.cold,.072,{density:2,speed:2.4}),c("netW",[[-.5,-.32,-3.2],[2.4,-.32,-3.2],[2.4,-.32,-3.7],[2.4,1.05,-3.7]],Zt.cold,.051,{density:2,speed:2.4}),c("netW",[[-.5,-.32,-3.45],[-2.3,-.32,-3.45],[-2.3,3.95,-3.45],[-2.3,3.95,-3.62]],Zt.cold,.051,{density:2,speed:2.4}),c("netW",[[-2.3,3.6,-3.45],[-3.4,3.6,-3.45]],Zt.cold,.051,{density:2,speed:2.4}),c("netW",[[-2.2,-1.35,-3],[-2.2,-.46,-3],[-2.2,-.46,-3.32],[2.55,-.46,-3.32],[2.55,-.46,-3.72],[2.55,1.05,-3.72]],Zt.hot,.051,{density:2,speed:2.4}),c("netW",[[-2.2,-.46,-3.32],[-2.47,-.46,-3.32],[-2.47,3.95,-3.32],[-2.47,3.95,-3.6]],Zt.hot,.051,{density:2,speed:2.4}),c("netW",[[-2.47,3.6,-3.32],[-3.5,3.6,-3.32]],Zt.hot,.051,{density:2,speed:2.4}),c("netW",[[-3.6,3.48,-3.62],[-2.6,3.48,-3.62],[-2.6,-2.95,-3.62],[.6,-2.95,-3.62],[.6,-3.2,-4.3],[.6,-3.45,-9.5]],Zt.drain,.087,{density:1.6,speed:2.8}),c("netW",[[2.6,.95,-3.86],[2.6,-2.9,-3.86],[.75,-2.9,-3.86]],Zt.drain,.072,{density:1.6,speed:2.8}),c("netW",[[-2.6,3.48,-3.62],[-2.6,10.2,-3.62]],Zt.drain,.065,null);let d=[-3.3,-1.15,-2.6],u=[-3.3,-.12,-2.6];c("netA",[d,u,[2.6,-.12,-2.6],[4.4,-.12,-2.6],[4.4,-.12,-1.2],[4.4,.34,-1.2]],Zt.supply,.091,{density:1.6,speed:3.2}),c("netA",[u,[-2,-.12,-2.6],[-2,-.12,3.4],[-2,.34,3.4]],Zt.supply,.078,{density:1.6,speed:3.2}),c("netA",[[3.1,-.12,-2.6],[3.1,-.12,3.45],[3.1,.34,3.45]],Zt.supply,.078,{density:1.6,speed:3.2}),c("netA",[[1.28,-.12,-2.6],[1.28,3.35,-2.6],[3.8,3.35,-2.6],[3.8,3.35,2.9],[3.8,3.52,2.9]],Zt.supply,.078,{density:1.6,speed:3.2}),c("netA",[[1.28,3.35,-2.6],[-3.8,3.35,-2.6],[-3.8,3.35,2],[-3.8,3.52,2]],Zt.supply,.078,{density:1.6,speed:3.2}),c("netA",[[-1.75,5.6,1],[-1.75,-.32,1],[-3.3,-.32,1],[-3.3,-.32,-2.15],[-3.3,-1.05,-2.15]],Zt.ret,.091,{density:1.6,speed:2.4}),c("netR",[[-1.2,-2.92,-1.5],[-1.2,11.6,-1.5]],Zt.radon,.075,{density:2.2,speed:2.6});let f={},_=new ze,g=new ze(16777215);Object.keys(r).forEach(S=>{let I=r[S];if(!I.length)return;let A=I.reduce((F,X)=>F+X.n,0),N=new Mt;N.setAttribute("position",new gt(new Float32Array(A*3),3));let V=new Float32Array(A*3),B=0;I.forEach(F=>{_.set(F.color).lerp(g,.45).multiplyScalar(sh);for(let X=0;X<F.n;X++,B++)V[B*3]=_.r,V[B*3+1]=_.g,V[B*3+2]=_.b}),N.setAttribute("color",new gt(V,3));let z=new hn({size:S==="netE"?.2:.26,map:n,vertexColors:!0,transparent:!0,depthWrite:!1,blending:Nt,toneMapped:!1,fog:!1}),O=new yn(N,z);O.frustumCulled=!1,O.renderOrder=9,O.raycast=()=>{},a[S].add(O),f[S]=O});let m=e?0:260,E=new Mt,w=new Float32Array(m*3),v=new Float32Array(m),y=t(-1.2,-2.95,-1.5),T=S=>{w[S*3]=(Math.random()-.5)*9.4,w[S*3+1]=-3.05-Math.random()*1.6,w[S*3+2]=(Math.random()-.5)*7.4,v[S]=.4+Math.random()*.8};for(let S=0;S<m;S++)T(S);E.setAttribute("position",new gt(w,3));let P=new hn({color:new ze(Zt.radon).multiplyScalar(sh),size:.2,map:qi("rgba(217,140,255,0.6)"),transparent:!0,opacity:0,depthWrite:!1,blending:Nt,toneMapped:!1,fog:!1}),x=new yn(E,P);x.frustumCulled=!1,x.raycast=()=>{},a.netR.add(x);let b=new D,R={netE:1,netW:1,netA:1,netR:1};function U(S,I,A,N){let V=S.explode<.06;if(Object.keys(s).forEach(B=>{let z=S[B],O=a[B];if(O.visible=V&&z>.003,!O.visible)return;let F=!I||I===B?1:.2,X=R[B]=rt(R[B],F,Math.min(1,N*4));s[B].forEach(pe=>{let _e=Math.floor(pt(z,0,1)*pe.segs)*pe.radial*6;pe.tube.geometry.setDrawRange(0,_e),pe.glow.geometry.setDrawRange(0,_e),pe.tube.material.opacity=X,pe.gmat.opacity=(.22+.1*Math.sin(A*3+pe.segs))*X});let re=f[B];if(re){let pe=re.geometry.attributes.position.array,_e=0;r[B].forEach(De=>{for(let Xe=0;Xe<De.n;Xe++,_e++){let $=(Xe/De.n+A*De.speed/De.len)%1;if($>z){pe[_e*3+1]=-999;continue}De.curve.getPointAt($,b),pe[_e*3]=b.x,pe[_e*3+1]=b.y,pe[_e*3+2]=b.z}}),re.geometry.attributes.position.needsUpdate=!0,re.material.opacity=pt(z*3,0,1)*X}}),m&&a.netR.visible){P.opacity=pt(S.netR*2,0,.9)*R.netR;for(let B=0;B<m;B++){b.set(y.x-w[B*3],y.y-w[B*3+1],y.z-w[B*3+2]);let z=b.length();if(z<.25){T(B);continue}b.multiplyScalar(N*v[B]*1.1/z),w[B*3]+=b.x+Math.sin(A+B)*N*.15,w[B*3+1]+=b.y,w[B*3+2]+=b.z}E.attributes.position.needsUpdate=!0}}return{groups:a,update:U}}var h_=`varying vec3 vW; varying vec3 vN;
void main(){ vec4 w = modelMatrix * vec4(position, 1.0);
#ifdef USE_INSTANCING
  w = modelMatrix * instanceMatrix * vec4(position, 1.0);
#endif
  vW = w.xyz; vN = normalize(mat3(modelMatrix) * normal); gl_Position = projectionMatrix * viewMatrix * w; }`,d_=`uniform float uBase, uGrad, uBand, uTime; varying vec3 vW; varying vec3 vN;
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
  gl_FragColor = vec4(toLinear(iron(t + rim)), 1.0); }`;function Wf({scene:i,M:e,skipParents:t,onChange:n}){let s={value:0},r=new Map;function a(d,u=0,f=0){let _=d+"|"+u+"|"+f;return r.has(_)||r.set(_,new It({uniforms:{uBase:{value:d},uGrad:{value:u},uBand:{value:f},uTime:s},vertexShader:h_,fragmentShader:d_})),r.get(_)}let o={hvac:.93,"water-heaters":.88,electrical:.6,plumbing:.56,installation:.5,radon:.22,solar:.17,roofing:[.4,.12],foundation:.33,sewer:.3,asbestos:.5};function c(d,u){if(u&&o[u]!==void 0)return a(...[].concat(o[u]));let f=d.userData&&d.userData.th;return f?a(...f):a(.3)}let l=[],h=!1;function p(d){d!==h&&(h=d,i.traverse(u=>{if(u.isSprite&&u.userData.noAO){u.visible=!h&&(u.userData.wasVisible??!0);return}if(!(!(u.isMesh||u.isInstancedMesh)||!u.material)&&!u.userData.noThermal){for(let f=u.parent;f;f=f.parent)if(t.includes(f))return;h?(u.userData.mat0=u.material,u.material=Array.isArray(u.material)?u.material.map(f=>c(f,u.userData.sys)):c(u.material,u.userData.sys)):u.userData.mat0&&(u.material=u.userData.mat0,u.userData.mat0=null)}}),n&&n(h))}return{set:p,time:s,get on(){return h}}}function Xf({M:i,layers:e,glowTex:t}){let n=[],s=(u,f=.7,_=0,g=[.5],m={})=>{let E=new Rt({color:u,roughness:f,metalness:_,...m});return E.userData.th=g,E},r=(u,f=[.95])=>{let _=new Rt({color:2236440,emissive:u,emissiveIntensity:0,roughness:.5});return _.userData.th=f,n.push(_),_},a={rug:s(5787722,1),rug2:s(3884628,1),cushion:s(13215610,.95),cushion2:s(9413544,.95),tvBlack:s(789775,.25,.3,[.6]),book1:s(9190190,.8),book2:s(3100522,.8),book3:s(14208440,.8),plant:s(4156218,.9,0,[.3]),pot:s(14209734,.6),sheets:s(15328474,.95),duvet:s(7043718,.95),wood:s(10122320,.55),woodDark:s(4929062,.55),steel:s(11186358,.3,.9,[.55]),quartz:s(15328991,.25,0,[.5]),cabinet:s(3812386,.5,0,[.5]),tile:s(13620952,.4,0,[.4]),bin:s(3829659,.6),bin2:s(12936750,.6),cardboard:s(11570526,.9),tv:r(10274047,[.85]),lamp:r(16762746),pendant:r(16765594),screen:r(13625599,[.8]),led:r(6750105,[.7]),pot:s(14868180,.55)},o=(u,f,_,g,m,E,w,v,y,T=0)=>{let P=new Re(new ii(u,f,_,2,Math.min(g,u/2-.001,f/2-.001,_/2-.001)),m);return P.position.set(E,w+f/2,v),P.rotation.y=T,P.castShadow=!0,P.receiveShadow=!0,P.userData.noPick=!0,y.add(P),P},c=(u,f,_,g,m,E,w,v=18)=>{let y=new Re(new Bt(u,u,f,v),_);return y.position.set(g,m+f/2,E),y.castShadow=!0,y.receiveShadow=!0,y.userData.noPick=!0,w.add(y),y},l=(u,f,_,g,m,E,w=1)=>{let v=new Re(new Tn(u,14,10),f);return v.position.set(_,g,m),v.scale.y=w,v.castShadow=!0,v.userData.noPick=!0,E.add(v),v},h=(u,f,_,g,m,E=a.woodDark)=>{let w=new mt;return w.position.set(u,f,_),w.rotation.y=g,m.add(w),o(.44,.05,.44,.02,E,0,.44,0,w),[[-.19,-.19],[.19,-.19],[-.19,.19],[.19,.19]].forEach(([v,y])=>c(.02,.44,a.steel,v,0,y,w,8)),o(.44,.45,.04,.02,E,0,.5,-.2,w),w},p=(u,f,_,g,m=1.4)=>{c(.14,.03,a.steel,u,f,_,g,14),c(.015,m,a.steel,u,f,_,g,8);let E=new Re(new Bt(.17,.24,.3,18,1,!0),a.lamp);return E.material.side=dn,E.position.set(u,f+m+.05,_),E.userData.noAO=!0,E.userData.noPick=!0,g.add(E),E};(()=>{let u=e.main,f=.3;o(3.4,.02,2.5,.01,a.rug,-2.3,f,.7,u);let _=new mt;_.position.set(-.9,f,.7),_.rotation.y=-Math.PI/2,u.add(_),o(2.3,.4,.95,.1,a.fabric??i.fabric,0,.1,0,_),o(2.3,.45,.25,.1,i.fabric,0,.45,-.38,_),o(.25,.3,.9,.08,i.fabric,-1.07,.3,0,_),o(.25,.3,.9,.08,i.fabric,1.07,.3,0,_),o(.5,.4,.14,.06,a.cushion,-.6,.55,-.1,_),o(.5,.4,.14,.06,a.cushion2,.6,.55,-.1,_),[[-.9,.18],[.9,.18]].forEach(([E])=>{[[-1.05,-.4],[1.05,-.4],[-1.05,.4],[1.05,.4]].forEach(([w,v])=>c(.03,.1,a.woodDark,w,0,v,_,8))}),o(1,.05,.6,.03,a.wood,-2.75,f+.34,.7,u),[[-.4,-.22],[.4,-.22],[-.4,.22],[.4,.22]].forEach(([E,w])=>c(.025,.34,a.woodDark,-2.75+E,f,.7+w,u,8)),h(-2,f,2.5,Math.PI,u,i.fabric2??a.cushion2),o(.4,.5,2,.04,a.woodDark,-4.62,f,.7,u),o(.05,.75,1.5,.015,a.tvBlack,-4.74,f+.95,.7,u);let g=new Re(new zt(1.4,.68),a.tv);g.rotation.y=Math.PI/2,g.position.set(-4.7,f+1.32,.7),g.userData.noPick=!0,u.add(g),o(.34,2,2.2,.02,a.woodDark,.9,f,-1.8,u),[.5,1,1.5].forEach((E,w)=>{o(.2,.28,1.9,.01,[a.book1,a.book2,a.book3][w],1,f+E+.05,-1.8,u)}),c(.17,.4,a.pot,-4.2,f,3.2,u,14),l(.38,a.plant,-4.2,f+.85,3.2,u,1.3),l(.28,a.plant,-4.3,f+1.15,3.1,u,1.2),p(-.45,f,3.1,u,1.45),o(3,.72,.36,.02,a.cabinet,2.9,f+1.55,-3.7,u),o(.9,.14,.6,.02,a.steel,2.4,f+1.3,-3.58,u),o(.34,.9,.34,.02,a.steel,2.4,f+1.45,-3.7,u),o(2.2,.06,1,.02,a.quartz,3,f+.9,-.6,u),o(2.1,.9,.9,.03,a.cabinet,3,f,-.6,u),[2.4,3,3.6].forEach(E=>{c(.17,.05,a.woodDark,E,f+.62,.35,u,16),c(.025,.62,a.steel,E,f,.35,u,8)}),[2.3,3,3.7].forEach(E=>{c(.006,.7,a.steel,E,f+2.1,-.6,u,4);let w=new Re(new Tn(.15,16,10,0,Math.PI*2,0,Math.PI/2),a.pendant);w.position.set(E,f+2.1,-.6),w.userData.noAO=!0,w.userData.noPick=!0,u.add(w)}),o(1.8,.05,.92,.02,a.wood,3.2,f+.72,2.4,u),[[-.8,-.4],[.8,-.4],[-.8,.4],[.8,.4]].forEach(([E,w])=>c(.035,.72,a.woodDark,3.2+E,f,2.4+w,u,8)),h(2.5,f,1.55,0,u),h(3.9,f,1.55,0,u),h(2.5,f,3.25,Math.PI,u),h(3.9,f,3.25,Math.PI,u);let m=new Re(new Bt(.28,.28,.22,20,1,!0),a.pendant);m.material.side=dn,m.position.set(3.2,f+2.15,2.4),m.userData.noAO=!0,m.userData.noPick=!0,u.add(m),c(.006,.55,a.steel,3.2,f+2.2,2.4,u,4),o(1,.45,.38,.03,a.wood,.6,f,3.55,u)})(),(()=>{let u=e.upper,f=3.45;o(2,.42,2.15,.06,a.sheets,2.4,f,-2.55,u),o(1.96,.18,1.55,.08,a.duvet,2.4,f+.38,-2.2,u),o(2,.9,.1,.03,a.woodDark,2.4,f,-3.72,u),o(.6,.22,.38,.08,a.sheets,1.85,f+.5,-3.3,u),o(.6,.22,.38,.08,a.sheets,2.95,f+.5,-3.3,u),[[1],[3.8]].forEach(([g])=>{o(.5,.5,.4,.03,a.woodDark,g,f,-3.55,u),p(g,f+.5,-3.55,u,.34)}),o(2,.02,1.4,.01,a.rug2,2.4,f,-1,u),o(.6,2.3,2,.02,a.woodDark,4.55,f,-1.2,u),o(1.5,.05,.7,.02,a.wood,.6,f+.72,3.35,u),[[-.7,-.3],[.7,-.3],[-.7,.3],[.7,.3]].forEach(([g,m])=>c(.03,.72,a.steel,.6+g,f,3.35+m,u,8)),o(.7,.42,.04,.01,a.tvBlack,.6,f+.98,3.52,u);let _=new Re(new zt(.64,.36),a.screen);_.position.set(.6,f+1.19,3.495),_.rotation.y=Math.PI,_.userData.noPick=!0,u.add(_),h(.6,f,2.7,Math.PI,u,a.cushion2),o(1.5,.4,2,.06,a.sheets,-3.4,f,2.2,u),o(1.46,.16,1.4,.07,a.cushion2,-3.4,f+.36,2.5,u),o(.9,.9,.5,.03,a.woodDark,-4.55,f,.6,u),o(.9,.02,.06,.01,a.tile,-3.2,f,-2.6,u),o(.42,.34,.6,.12,i.ceramic,-4.4,f,-3.2,u),o(.4,.4,.2,.06,i.ceramic,-4.4,f+.34,-3.5,u),o(.7,.9,.03,.01,i.mirror,-2.4,f+1.2,-3.84,u)})(),(()=>{let u=e.basement,f=-2.8;o(.68,.92,.68,.04,i.white,.5,f,-3.5,u),o(.68,.92,.68,.04,i.white,1.25,f,-3.5,u),c(.2,.03,a.tvBlack,.5,f+.93,-3.15,u,18),c(.2,.03,a.tvBlack,1.25,f+.93,-3.15,u,18),o(.6,.06,.4,.01,a.tvBlack,.88,f+.92,-3.88,u),o(2,.06,.75,.01,a.wood,-4,f+.88,2.6,u),o(1.9,.88,.7,.01,a.cabinet,-4,f,2.6,u),o(.3,.06,.12,.01,a.bin2,-4.4,f+.94,2.55,u),o(.2,.2,.2,.02,a.bin,-3.7,f+.94,2.7,u),o(1.7,2,.42,.01,a.steel,4.25,f,2.9,u,0),[.3,.9,1.5].forEach((g,m)=>{o(.5,.3,.34,.03,[a.bin,a.bin2,a.cardboard][m],3.8,f+g+.05,2.9,u),o(.6,.3,.34,.03,[a.cardboard,a.bin,a.bin2][m],4.5,f+g+.05,2.9,u)}),c(.32,.05,a.tvBlack,.66,f,1.6,u,20),c(.1,.5,a.pvc??i.pvc,.66,f,1.6,u,12);let _=new Re(new Tn(.03,8,6),a.led);_.position.set(.66,f+.58,1.6),_.userData.noAO=!0,_.userData.noPick=!0,u.add(_),o(.5,.4,.4,.02,a.cardboard,-1.4,f,2.9,u,.3),o(.45,.35,.4,.02,a.cardboard,-1.3,f+.4,2.9,u,.1),o(1.6,.02,1.2,.01,a.rug,.4,f,.8,u)})();function d(u,f){let _=pt(.25+.75*u+f*.3,0,1.1);a.tv.emissiveIntensity=1.3*_,a.screen.emissiveIntensity=1.1*_,a.lamp.emissiveIntensity=2.2*_,a.pendant.emissiveIntensity=2.6*_,a.led.emissiveIntensity=3}return{update:d,glows:n}}var Yi=.38;function qf({scene:i,M:e,tier:t,reduce:n}){let s=new mt;s.visible=!1,i.add(s);let r=Un(55),a=qi("rgba(255,255,255,0.65)"),o=(me,Se,W)=>new D(me,Se,W),c=.45,l=.66,h=(()=>{let me=Math.round(1024*oc()),Se=Math.round(512*oc()),W=document.createElement("canvas");W.width=me,W.height=Se;let we=W.getContext("2d"),j=we.createImageData(me,Se),le=j.data,Z=[[0,[58,41,29]],[.5,[92,64,40]],[.62,[150,106,62]],[2.2,[138,98,58]],[2.4,[150,142,120]],[4.6,[124,118,104]],[4.8,[100,112,120]],[7,[90,98,108]],[9,[74,78,86]]],ee=be=>{let Ee=0;for(;Ee<Z.length-2&&Z[Ee+1][0]<=be;)Ee++;let[Oe,Ne]=Z[Ee],[G,ot]=Z[Ee+1],et=pt((be-Oe)/(G-Oe),0,1);return[rt(Ne[0],ot[0],et),rt(Ne[1],ot[1],et),rt(Ne[2],ot[2],et)]};for(let be=0;be<Se;be++)for(let Ee=0;Ee<me;Ee++){let Oe=be/Se*9+(kt(Ee/90,be/40,3,11,8,5)-.5)*.7+Math.sin(Ee*.02+be*.01)*.12,Ne=ee(pt(Oe,0,9)),G=(kt(Ee/6,be/6,2,170,85,9)-.5)*34,ot=(be*me+Ee)*4;le[ot]=pt(Ne[0]+G,0,255),le[ot+1]=pt(Ne[1]+G,0,255),le[ot+2]=pt(Ne[2]+G*.9,0,255),le[ot+3]=255}we.putImageData(j,0,0);for(let be=0;be<420*oc();be++){let Ee=105+r()*75;we.fillStyle=`rgba(${Ee|0},${Ee*.96|0},${Ee*.86|0},0.85)`,we.beginPath(),we.ellipse(r()*me,(2.5+r()*2.1)/9*Se,1.5+r()*3.5,1.2+r()*2.4,r()*3,0,6.3),we.fill()}let oe=new an(W);return oe.colorSpace=Ut,oe.wrapS=cn,oe.anisotropy=8,oe})(),p=new Rt({map:h,roughness:1,metalness:0});h.repeat.set(6,1);let d=new Re(new zt(240,9),p);d.rotation.y=-Math.PI/2,d.position.set(c+Yi,-4.52,0),d.userData.noAO=!0,d.userData.noPick=!0,d.receiveShadow=!1,s.add(d);let u=(()=>{let me=document.createElement("canvas");me.width=4,me.height=256;let Se=me.getContext("2d"),W=Se.createLinearGradient(0,0,0,256);W.addColorStop(0,"rgb(74,78,86)"),W.addColorStop(.35,"rgb(24,26,31)"),W.addColorStop(1,"rgb(6,7,9)"),Se.fillStyle=W,Se.fillRect(0,0,4,256);let we=new an(me);return we.colorSpace=Ut,we})(),f=new Re(new zt(240,60),new Ht({map:u,fog:!1,toneMapped:!1}));f.rotation.y=-Math.PI/2,f.position.set(c+Yi,-9.02-30,0),f.userData.noAO=!0,f.userData.noPick=!0,f.raycast=()=>{},s.add(f);let _=new mt;s.add(_);for(let me=0;me<=9;me++){let Se=new Re(new Pt(.04,.05,me%3===0?1.4:.8),new Ht({color:16039294,toneMapped:!1}));Se.position.set(0,-me,31-(me%3===0?.7:.4)),Se.userData.noAO=!0,Se.raycast=()=>{},_.add(Se)}let g=new Re(new Pt(.06,.07,240),new Ht({color:16039294,toneMapped:!1}));g.position.set(c+Yi-.02,.02,0),g.userData.noAO=!0,g.raycast=()=>{},s.add(g);let m=(me,Se=.45,W=.2)=>{let we=new Rt({color:me,roughness:Se,metalness:W,emissive:me,emissiveIntensity:.12,side:dn});return we.userData.th=[.3],we},E={water:m(4165606,.4,.3),gas:m(15775786,.45,.2),sewer:m(12169888,.8,0),tile:m(15855334,.6,0),roots:m(8017458,.95,0),sump:m(8362672,.5,.3),crack:new Ht({color:new ze(3,.5,.35),toneMapped:!1})};E.roots.emissiveIntensity=0;let w={water:new mt,gas:new mt,sewer:new mt,found:new mt,radon:new mt};Object.values(w).forEach(me=>s.add(me));let v=(me,Se,W,we,j=0)=>{let le=new On(me.map(ee=>o(...ee)),!1,"catmullrom",.05),Z=new Re(new An(le,j||Math.max(8,me.length*8),Se,10,!1),W);return Z.castShadow=!1,Z.userData.noPick=!0,we.add(Z),le},y=(me,Se,W,we,j)=>{let le=o(...me),Z=o(...Se),ee=le.distanceTo(Z),oe=new Re(new Bt(W,W,ee,16,1,!0),we);return oe.position.copy(le).lerp(Z,.5),oe.quaternion.setFromUnitVectors(o(0,1,0),Z.clone().sub(le).normalize()),oe.userData.noPick=!0,j.add(oe),new ts(le,Z)},T=[];function P(me,Se,W,we,j,le=.22){let Z=new Mt;Z.setAttribute("position",new gt(new Float32Array(Se*3),3));let ee=new yn(Z,new hn({size:le,map:a,color:new ze(we).multiplyScalar(2.2),transparent:!0,depthWrite:!1,blending:Nt,toneMapped:!1}));ee.frustumCulled=!1,ee.userData.noAO=!0,ee.raycast=()=>{},j.add(ee),T.push({curve:me,n:Se,speed:W,len:me.getLength(),pts:ee,group:j})}y([c-12,-2.4,22.8],[c+60,-2.4,22.8],.24,E.water,w.water),y([c-12,-1.3,24.7],[c+60,-1.3,24.7],.11,E.gas,w.gas);let x=v([[l,-2.4,22.8],[l,-2.3,18],[l,-2.2,6],[l,-2.2,3.75]],.075,E.water,w.water,30);P(x,20,2,7320831,w.water,.2);let b=v([[l+.1,-1.3,24.7],[l+.1,-1.3,8],[l+.1,-.3,5.4],[l+.1,.9,4.25]],.055,E.gas,w.gas,30);P(b,16,2.6,16765514,w.gas,.18);let R=new Re(new Pt(.3,.4,.2),e.steel);R.position.set(l+.1,1.2,4.25),R.userData.noPick=!0,w.gas.add(R),y([c-12,-3.95,-18.2],[c+60,-3.95,-18.2],.4,E.sewer,w.sewer);let U=v([[l,-3.27,-3.8],[l,-3.35,-9],[l,-3.55,-13],[l,-3.9,-17.9]],.19,E.sewer,w.sewer,30);P(U,18,1.3,13214314,w.sewer,.2);let S=v([[l,-3.3,-5.2],[l,-1,-5.2],[l,.1,-5.2]],.14,E.sewer,w.sewer,10),I=o(l,-3.52,-12.8);[[[.9,-.2,-12.4],[.8,-1.2,-12.2],[l+.04,-2.4,-12.5],[l+.02,-3.2,-12.8],[l,-3.5,-12.9]],[[.9,-.2,-12.4],[.85,-.9,-11.4],[l+.1,-2,-11.5],[l+.04,-3,-12.1],[l,-3.45,-12.6]],[[.9,-.2,-12.4],[.85,-1,-13.5],[l+.12,-2.2,-13.9],[l+.04,-3.1,-13.4],[l,-3.5,-13.1]],[[l+.1,-2.2,-13.8],[l+.05,-2.9,-14.6]],[[l+.12,-2,-11.5],[l+.06,-2.6,-10.5]]].forEach((me,Se)=>v(me,Se<3?.1:.05,E.roots,w.sewer,24));let A=new Re(new ca(.3,.02,8,28),E.crack);A.position.copy(I),A.rotation.y=Math.PI/2,A.userData.noAO=!0,w.sewer.add(A),[[-4.55],[4.55]].forEach(([me])=>y([c-6,-3.3,me],[c+6.2,-3.3,me],.11,E.tile,w.found)),[[c-6],[c+6.2]].forEach(([me])=>y([me,-3.3,-4.55],[me,-3.3,4.55],.11,E.tile,w.found));let N=v([[l,-3.3,4.55],[l,-3.3,3],[l,-3.1,1.9]],.09,E.tile,w.found,12),V=new Re(new Bt(.34,.34,.75,22,1,!0),E.sump);V.position.set(l,-3.05,1.6),V.userData.noPick=!0,w.found.add(V);let B=v([[l,-2.55,1.6],[l,-1.2,1.6],[l,-1.2,6.8],[l,.1,6.8]],.075,E.sump,w.found,24);P(N,10,.8,7320831,w.found,.16),P(B,14,1.8,7320831,w.found,.18),v([[.62,-.15,4.27],[.55,-.55,4.27],[.74,-.95,4.27],[.5,-1.4,4.27],[.7,-1.9,4.27],[.52,-2.5,4.27]],.022,E.crack,w.found,30);let z=new _n(new un({map:Sr("rgba(255,90,70,0.9)","rgba(255,60,40,0)"),transparent:!0,depthWrite:!1,blending:Nt,opacity:.6}));z.position.set(.62,-1.4,4.5),z.scale.set(2.2,3.4,1),z.userData.noAO=!0,w.found.add(z);let O=n?0:t>=1?520:200,F=new Mt,X=new Float32Array(O*3),re=new Float32Array(O*2),pe=me=>{X[me*3]=r()*(Yi-.06),X[me*3+1]=-8.6+r()*1.4,X[me*3+2]=(r()-.5)*14-1.5,re[me*2]=.6+r()*.9,re[me*2+1]=r()*6.28};for(let me=0;me<O;me++)pe(me),X[me*3+1]=-8.6+r()*5.6;F.setAttribute("position",new gt(X,3));let _e=new yn(F,new hn({size:.42,map:a,color:new ze(14257407).multiplyScalar(2.6),transparent:!0,depthWrite:!1,blending:Nt,toneMapped:!1}));_e.frustumCulled=!1,_e.userData.noAO=!0,_e.raycast=()=>{},w.radon.add(_e);let De={x:-1.2,z:-1.5},Xe={ugWater:o(l,-2.4,21),ugGas:o(l+.1,-1.3,14),ugSewer:o(l,-3.7,-16),ugRoots:I.clone(),ugSewerMain:o(l,-3.95,-18.2),ugTile:o(l,-3.3,4.55),ugSump:o(l,-3.1,1.6),ugCrack:o(l,-1.5,4.3),ugRadon:o(-1.2,-6,-1.5),ugMeter:o(l+.1,1.2,4.25),ugMain:o(l,-2.4,22.8),ugGasMain:o(l,-1.3,24.7)},$=o(0,0,0),ae={cx:-1e3};function ve(me,Se,W,we){let j=lt(0,1,me.section),le=me.section<.002?-1e3:rt(-60,me.cutX,j);if(ae.cx=le,s.visible=me.section>.002,!s.visible)return le;if(d.position.x=le+Yi,f.position.x=le+Yi,g.position.x=le+Yi-.02,_.position.x=le+Yi,Xe.ugRadon.x=le+Yi*.5,Object.entries(w).forEach(([Z,ee])=>{let oe=Se===Z||Se==="street"&&(Z==="water"||Z==="gas"),be=!Se||oe?1:.2;ee.userData.al=rt(ee.userData.al??be,be,Math.min(1,we*5)),ee.traverse(Ee=>{Ee.material&&Ee.material.isMeshStandardMaterial&&(Ee.material.emissiveIntensity=oe?.6:.12)})}),E.crack.color.setRGB(3,.5,.35).multiplyScalar(.7+.3*Math.sin(W*5)),T.forEach(Z=>{let ee=Z.group.userData.al??1;if(Z.pts.visible=ee>.02,!Z.pts.visible)return;let oe=Z.pts.geometry.attributes.position.array;for(let be=0;be<Z.n;be++){let Ee=(be/Z.n+W*Z.speed/Z.len)%1;Z.curve.getPointAt(Ee,$),oe[be*3]=$.x,oe[be*3+1]=$.y,oe[be*3+2]=$.z}Z.pts.geometry.attributes.position.needsUpdate=!0,Z.pts.material.opacity=ee}),_e.visible=O>0&&(w.radon.userData.al??1)>.2,_e.visible){_e.position.x=le;for(let Z=0;Z<O;Z++){let ee=X[Z*3+1],oe=lt(-5.8,-3,ee);X[Z*3+1]+=re[Z*2]*we*.8,X[Z*3+2]+=((De.z-X[Z*3+2])*oe*.5+Math.sin(W*.8+re[Z*2+1])*.1)*we,X[Z*3+1]>-2.95&&pe(Z)}F.attributes.position.needsUpdate=!0,_e.material.opacity=w.radon.userData.al??1}return le}return{group:s,update:ve,ANCHORS:Xe,groups:w,state:ae}}function rh(i){i.updateWorldMatrix(!0,!0);let e=new st().copy(i.matrixWorld).invert(),t=new st,n=new Map,s=[],r=l=>{for(let h=l;h&&h!==i;h=h.parent)if(h.userData.sys||h.userData.keep||h.userData.level)return!0;return!1},a=l=>Array.isArray(l.material)?l.geometry.groups.map(h=>{let p=l.geometry.clone(),d=l.geometry.index;return p.clearGroups(),d?p.setIndex(Array.from(d.array.slice(h.start,h.start+h.count))):p.deleteAttribute("position"),{m:l.material[h.materialIndex],g:p}}):[{m:l.material,g:l.geometry.clone()}];i.traverse(l=>{if(!l.isMesh||l.isInstancedMesh||l===i||!l.material||!l.visible||r(l)||l.children.length||!l.geometry.index&&Array.isArray(l.material)||(Array.isArray(l.material)?l.material:[l.material]).some(p=>!p||p.userData.pane))return;t.multiplyMatrices(e,l.matrixWorld),a(l).forEach(({m:p,g:d})=>{let u=[p.uuid,+l.castShadow,+l.receiveShadow,+!!l.userData.noAO,+!!l.userData.noPick,l.renderOrder].join("|"),f=n.get(u);f||n.set(u,f={m:p,cast:l.castShadow,recv:l.receiveShadow,noAO:!!l.userData.noAO,noPick:!!l.userData.noPick,ro:l.renderOrder,geos:[],owners:new Set}),d.attributes.uv||d.setAttribute("uv",new gt(new Float32Array(d.attributes.position.count*2),2)),d.applyMatrix4(t),f.geos.push(d),f.owners.add(l)}),s.push(l)});let o=0;n.forEach(l=>{if(l.geos.length<2){l.geos.forEach(f=>f.dispose());return}let h=Object.keys(l.geos[0].attributes).filter(f=>l.geos.every(_=>_.attributes[f]));l.geos.forEach(f=>{for(let _ of Object.keys(f.attributes))h.includes(_)||f.deleteAttribute(_)});let p=l.geos.some(f=>!f.index)?l.geos.map(f=>f.index?f.toNonIndexed():f):l.geos,d=Ui(p);if(!d)return;d.computeBoundingSphere();let u=new Re(d,l.m);u.castShadow=l.cast,u.receiveShadow=l.recv,u.renderOrder=l.ro,l.noAO&&(u.userData.noAO=!0),l.noPick&&(u.userData.noPick=!0),i.add(u),o++,l.done=!0});let c=new Set;return n.forEach(l=>{l.done||l.owners.forEach(h=>c.add(h))}),s.forEach(l=>{!c.has(l)&&l.parent&&(l.parent.remove(l),l.geometry.dispose())}),o}function Yf(i,e){i.updateWorldMatrix(!0,!0);let t=new st().copy(i.matrixWorld).invert(),n=new st,s=[],r=[];if(i.traverse(c=>{c.isLineSegments&&c.material===e&&r.push(c)}),r.forEach(c=>{let l=c.geometry.clone();for(let h of Object.keys(l.attributes))h!=="position"&&l.deleteAttribute(h);l.applyMatrix4(n.multiplyMatrices(t,c.matrixWorld)),s.push(l)}),s.length<2)return 0;let a=Ui(s.map(c=>c.index?c.toNonIndexed():c));if(!a)return 0;let o=new Ai(a,e);return o.raycast=()=>{},o.userData.noAO=!0,i.add(o),r.forEach(c=>{c.parent&&c.parent.remove(c),c.geometry.dispose()}),r.length}function Zf({M:i,tier:e,glowTex:t,dotTex:n}){let s={value:0},r=(v,y=.6,T=0,P={})=>{let x=new Rt({color:v,roughness:y,metalness:T,...P});return x.userData.th=[.4],x};function a(){let v=document.createElement("canvas");v.width=v.height=512;let y=v.getContext("2d");y.fillStyle="#b99a6e",y.fillRect(0,0,512,512);let T=7,P=()=>(T=T*16807%2147483647)/2147483647;for(let R=0;R<260;R++){let U=P()*512,S=.03+P()*.07;y.strokeStyle=P()>.5?`rgba(90,62,30,${S})`:`rgba(240,220,180,${S})`,y.lineWidth=.6+P()*2.2,y.beginPath(),y.moveTo(0,U);for(let I=0;I<=512;I+=32)y.lineTo(I,U+Math.sin(I*.012+R)*(2+P()*5));y.stroke()}for(let R=0;R<5;R++){let U=P()*512,S=P()*512,I=4+P()*7,A=y.createRadialGradient(U,S,0,U,S,I*2.4);A.addColorStop(0,"rgba(70,44,20,.55)"),A.addColorStop(1,"rgba(70,44,20,0)"),y.fillStyle=A,y.beginPath(),y.ellipse(U,S,I*2.6,I*1.3,0,0,6.3),y.fill()}let x=new an(v);x.colorSpace=Ut,x.wrapS=x.wrapT=cn,x.repeat.set(1/1.2,1/1.2),x.anisotropy=8;let b=new Rt({map:x,roughness:.82,metalness:0});return b.userData.th=[.45],b}let o=(v,y=1.5,T={})=>r(789776,.5,0,{emissive:v,emissiveIntensity:y,...T}),c={enclosure:r(8093831,.5,.6,{envMapIntensity:.7}),enclosureDark:r(2764082,.62,.5,{envMapIntensity:.6}),galv:r(11186618,.38,.9,{envMapIntensity:1.3}),blackPlastic:r(1184534,.42,.05),greyPlastic:r(4869975,.5,.05),whitePlastic:r(11118238,.55,.02),conduit:r(7304316,.62,.02),bluePlastic:r(3104680,.5,.02),orangePlastic:r(14711338,.5,.02),yellowPlastic:r(15319598,.5,.02),redPlastic:r(12728875,.5,.02),purple:r(8011716,.45,.05,{emissive:5909152,emissiveIntensity:.25}),green:r(3119703,.5,.05),copper:r(14256718,.25,1,{envMapIntensity:1.5}),copperHot:r(13201722,.3,1,{envMapIntensity:1.5,emissive:16742954,emissiveIntensity:.3}),aluminum:r(13225684,.3,1,{envMapIntensity:1.4}),brass:r(13214282,.32,1,{envMapIntensity:1.3}),rubber:r(855568,.85,0),plywood:a(),studs:i.cedar,concrete:i.concrete,slab:i.slab,drywall:i.drywall,steel:i.steel,pvc:i.pvc,castIron:r(2829617,.75,.6),clay:r(10115900,.9,0),hdpe:r(1316378,.35,.1,{envMapIntensity:1.2}),gravel:r(7301730,1,0),soil:r(3812382,1,0),insulPink:r(15311018,1,0),insulYellow:r(14861930,1,0),vermiculite:r(11569738,.95,.15),frost:r(15923199,.35,0,{emissive:12572415,emissiveIntensity:.25}),ice:i.ice,water:new Bn({color:2781104,roughness:.06,metalness:0,transparent:!0,opacity:.78,envMapIntensity:1.8,clearcoat:1}),sewage:new Bn({color:5916200,roughness:.2,metalness:0,transparent:!0,opacity:.9,envMapIntensity:1.2}),glassClear:new Bn({color:14674674,roughness:.03,metalness:0,transparent:!0,opacity:.22,envMapIntensity:2,clearcoat:1}),poly:new Bn({color:14542574,roughness:.35,metalness:0,transparent:!0,opacity:.28,envMapIntensity:1.4,side:dn,depthWrite:!1}),led:(v=9425830,y=3)=>o(v,y),glow:o};[c.water,c.sewage,c.glassClear,c.poly].forEach(v=>{v.userData.th=[.3]});let l=(v,y,T,P,x,b={})=>(v.position.set(y,T,P),v.castShadow=b.cast!==!1,v.receiveShadow=b.receive!==!1,b.keep&&(v.userData.keep=!0),b.rot&&v.rotation.set(b.rot[0]||0,b.rot[1]||0,b.rot[2]||0),x&&x.add(v),v),h=(v,y,T,P,x=0,b=0,R=0,U,S={})=>{let I=S.r?new ii(v,y,T,2,Math.min(S.r,v/2,y/2,T/2)):new Pt(v,y,T);return S.uv&&Ps(I,S.uv===!0?{}:S.uv),l(new Re(I,P),x,b,R,U,S)},p=(v,y,T,P=0,x=0,b=0,R,U={})=>{let S=new Bt(U.r2??v,v,y,U.seg||16,1,!!U.open);return U.axis==="x"?S.rotateZ(Math.PI/2):U.axis==="z"&&S.rotateX(Math.PI/2),l(new Re(S,T),P,x,b,R,U)},d=(v,y,T,P,x,b,R={})=>l(new Re(new Tn(v,R.seg||16,R.seg2||12),y),T,P,x,b,R),u=(v,y,T)=>new D(v,y,T);return{time:s,mats:c,std:r,box:h,cyl:p,sphere:d,tube:(v,y,T,P,x={})=>{let b=new On(v.map(A=>A.isVector3?A:u(A[0],A[1],A[2])),!1,x.type||"catmullrom",x.tension??.3),R=b.getLength(),U=new An(b,x.seg||Math.max(8,Math.round(R*(x.density||14))),y,x.radial||8,!1),S=U.attributes.uv;for(let A=0;A<S.count;A++)S.setX(A,S.getX(A)*R);let I=l(new Re(U,T),0,0,0,P,x);return I.userData.curve=b,I.userData.len=R,I},V:u,flow:(v,y={})=>{let T={value:y.level??1},P=new Rt({color:y.base??1382170,roughness:y.roughness??.45,metalness:y.metalness??.1,emissive:v,emissiveIntensity:y.intensity??2.2});return P.defines={USE_UV:""},P.userData.level=T,P.userData.th=[.6],P.onBeforeCompile=x=>{x.uniforms.uFlowT=s,x.uniforms.uFlowL=T,x.fragmentShader=x.fragmentShader.replace("#include <common>",`#include <common>
uniform float uFlowT; uniform float uFlowL;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        { float fd = fract(vUv.x * ${(y.dash??3).toFixed(2)} - uFlowT * ${((y.speed??.5)*(y.dash??3)).toFixed(2)});
          float fp = smoothstep(0.0, 0.18, fd) * (1.0 - smoothstep(0.42, 0.6, fd));
          totalEmissiveRadiance *= (${(y.rest??.12).toFixed(2)} + ${(y.gain??1).toFixed(2)} * fp) * uFlowL; }`)},P.customProgramCacheKey=()=>`flow${y.dash??3}_${y.speed??.5}_${y.rest??.12}_${y.gain??1}`,P},atlas:(v,y={})=>{let P=y.width||1024,x=4,b=4,R=0,U={};v.forEach(F=>{x+F.w+4>P&&(x=4,b+=R+4,R=0),U[F.key]={x,y:b,w:F.w,h:F.h,c:F},x+=F.w+4,R=Math.max(R,F.h)});let S=2**Math.ceil(Math.log2(b+R+4)),I=document.createElement("canvas");I.width=P,I.height=S;let A=I.getContext("2d"),N=F=>{let X=F.c;if(A.clearRect(F.x,F.y,F.w,F.h),X.bg&&(A.fillStyle=X.bg,A.fillRect(F.x,F.y,F.w,F.h)),X.draw){A.save(),A.translate(F.x,F.y),X.draw(A,F.w,F.h,X),A.restore();return}A.fillStyle=X.color||"#ece6da",A.textAlign=X.align||"center",A.textBaseline="middle";let re=X.align==="left"?F.x+6:F.x+F.w/2;A.font=`${X.weight||600} ${X.size||Math.round(F.h*.62)}px ${X.font||"ui-monospace, Menlo, Consolas, monospace"}`,X.sub?(A.fillText(X.text,re,F.y+F.h*.38),A.font=`500 ${Math.round((X.size||F.h*.62)*.5)}px ui-monospace, Menlo, Consolas, monospace`,A.globalAlpha=.75,A.fillText(X.sub,re,F.y+F.h*.78),A.globalAlpha=1):A.fillText(X.text,re,F.y+F.h/2+1)};Object.values(U).forEach(N);let V=new an(I);V.colorSpace=Ut,V.anisotropy=8;let B=new Rt({map:V,emissiveMap:V,emissive:16777215,emissiveIntensity:y.emissive??.35,roughness:.6,transparent:!0,alphaTest:.02,depthWrite:!1});return B.userData.th=[.4],{plane:(F,X,re,pe=0,_e=0,De=0,Xe={})=>{let $=U[F],ae=X*($.h/$.w),ve=new zt(X,ae),me=ve.attributes.uv;for(let W=0;W<me.count;W++)me.setXY(W,($.x+me.getX(W)*$.w)/P,1-($.y+(1-me.getY(W))*$.h)/S);let Se=l(new Re(ve,B),pe,_e,De,re,{cast:!1,receive:!1,...Xe});return Se.renderOrder=3,Se},set:(F,X,re,pe)=>{let _e=U[F];X!==void 0&&(_e.c.text=X),re!==void 0&&(_e.c.sub=re),pe&&Object.assign(_e.c,pe),N(_e),V.needsUpdate=!0},mat:B,tex:V}},particles:(v,y={})=>{let T=e>=1?v:Math.ceil(v*.45),P=new Mt,x=new Float32Array(T*3);P.setAttribute("position",new gt(x,3));let b=new hn({size:y.size??.05,map:n,color:new ze(y.color??16777215).multiplyScalar(y.gain??1.6),transparent:!0,depthWrite:!1,blending:y.normal?os:Nt,toneMapped:!1,sizeAttenuation:!0,opacity:y.opacity??1}),R=new yn(P,b);return R.frustumCulled=!1,R.userData.noAO=!0,R.userData.keep=!0,R.raycast=()=>{},R.userData.n=T,R.userData.pos=x,R},sprite:(v,y,T,P,x,b,R=.8)=>{let U=new _n(new un({map:t,color:v,transparent:!0,depthWrite:!1,blending:Nt,opacity:R}));return U.position.set(T,P,x),U.scale.set(y,y,1),U.userData.noAO=!0,U.userData.keep=!0,U.raycast=()=>{},b&&b.add(U),U},bake:v=>{let y=new Map,T=[];v.updateWorldMatrix(!0,!0);let P=new st().copy(v.matrixWorld).invert(),x=new st,b=R=>{for(let U=R;U&&U!==v;U=U.parent)if(U.userData.keep)return!0;return!1};return v.traverse(R=>{if(!R.isMesh||R.isInstancedMesh||b(R)||Array.isArray(R.material)||R.children.length)return;let U=R.material.uuid+"|"+ +R.castShadow+ +R.receiveShadow+"|"+R.renderOrder,S=y.get(U);S||y.set(U,S={mat:R.material,cast:R.castShadow,recv:R.receiveShadow,ro:R.renderOrder,geos:[]});let I=R.geometry.index?R.geometry.toNonIndexed():R.geometry.clone();Object.keys(I.attributes).forEach(A=>{A!=="position"&&A!=="normal"&&A!=="uv"&&I.deleteAttribute(A)}),I.attributes.uv||I.setAttribute("uv",new gt(new Float32Array(I.attributes.position.count*2),2)),I.applyMatrix4(x.multiplyMatrices(P,R.matrixWorld)),S.geos.push(I),T.push(R)}),y.forEach(R=>{let U=Ui(R.geos);if(!U)return;let S=new Re(U,R.mat);S.castShadow=R.cast,S.receiveShadow=R.recv,S.renderOrder=R.ro,S.userData.keep=!0,v.add(S),R.geos.forEach(I=>I.dispose())}),T.forEach(R=>{R.parent&&R.parent.remove(R),R.geometry.dispose()}),v},place:l}}var Ni=new D(2.8,-1.25,-3.945),lh=.0266,wr=i=>.3-i*lh,ah=[[15,1],[15,1],[20,1],[15,1],[15,1],[20,1],[15,1],[15,1],[40,2,"range","RANGE"],[30,2,"dryer","DRYER"],[40,2,"hp","HEAT PUMP"],[30,2,"base","BASEBOARD"],[15,1],[15,1]],oh=[[15,1,null,null,"AFCI"],[15,1,null,null,"AFCI"],[20,1,null,null,"GFCI"],[20,1],[15,1],[15,1],[20,1],[15,1],[30,2,"wh","WATER HTR"],[30,2,"ac","A/C"],[50,2,"ev","EV CHARGER"],[60,2,"spa","HOT TUB"],[40,2,"suite","SUITE"]];function Jf({kit:i}){let{box:e,cyl:t,tube:n,mats:s,atlas:r}=i,a=new mt,o=2.8,c=-4.3;t(.034,3.7,s.galv,o,3.6,c,a),t(.06,.16,s.galv,o,5.5,c-.02,a,{r2:.03}),e(.1,.05,.16,s.galv,o,5.44,c-.05,a,{rot:[.5,0,0]}),[2.2,3.4,4.6].forEach(d=>e(.12,.03,.2,s.galv,o,d,c+.1,a,{cast:!1})),e(.3,.44,.12,s.enclosure,o,1.45,c+.02,a,{r:.012}),t(.092,.03,s.galv,o,1.5,c-.05,a,{axis:"z",seg:28}),t(.085,.085,s.glassClear,o,1.5,c-.1,a,{axis:"z",seg:28,cast:!1}),t(.074,.006,s.whitePlastic,o,1.5,c-.075,a,{axis:"z",seg:28,cast:!1});let l=r([{key:"kwh",text:"08431",sub:"kWh \xB7 CL200 \xB7 240 V",w:192,h:96,size:46,color:"#0e1014"}],{width:256,emissive:.15}),h=l.plane("kwh",.1,a,o,1.5,c-.0795);h.rotation.y=Math.PI;let p=t(.05,.002,s.aluminum,o,1.452,c-.09,a,{seg:24,cast:!1,keep:!0});return t(.03,1.02,s.conduit,o,.72,c,a),e(.075,.13,.075,s.conduit,o,.17,c,a,{r:.012}),t(.03,.34,s.conduit,o,.15,c+.17,a,{axis:"z"}),n([[o+.11,1.24,c+.03],[o+.13,.6,c+.06],[o+.14,.05,c-.12],[o+.14,-.25,c-.16]],.006,s.copper,a,{radial:6}),t(.011,.5,s.copper,o+.14,-.05,c-.16,a,{seg:8}),i.bake(a),a.add(p),{group:a,disc:p,labels:l}}function $f({kit:i}){let{box:e,cyl:t,tube:n,mats:s,flow:r,atlas:a,V:o}=i,c=new mt;c.position.copy(Ni);let l=new mt;c.add(l);let h=[];[15,20,30,40,50,60].forEach(W=>h.push({key:"a"+W,text:String(W),w:96,h:56,size:40,color:"#f4f1ea"})),h.push({key:"a200",text:"200",w:144,h:72,size:56,color:"#f4f1ea"}),[...ah,...oh].filter(W=>W[3]).forEach(W=>h.push({key:"n"+W[2],text:W[3],w:224,h:44,size:26,color:"#f4bd7e"})),h.push({key:"AFCI",text:"AFCI",w:112,h:44,size:26,color:"#9fc4ff"},{key:"GFCI",text:"GFCI",w:112,h:44,size:26,color:"#ffe08a"}),h.push({key:"rating",text:"200 A \xB7 120/240 V \xB7 1\xD8 3W",w:420,h:44,size:24,color:"#cfd4da"}),h.push({key:"mon",w:320,h:200,text:"49 A",sub:"of a 100 A service",ratio:.49,draw(W,we,j,le){W.fillStyle="#05070b",W.fillRect(0,0,we,j);let Z=le.ratio>.9?"#ff6b4f":le.ratio>.7?"#f4bd7e":"#8fd3a6";W.textAlign="left",W.textBaseline="middle",W.fillStyle="#8b93a1",W.font="600 17px ui-monospace, Menlo, monospace",W.fillText("DEMAND",20,30),W.fillStyle=Z,W.font="700 74px ui-monospace, Menlo, monospace",W.fillText(le.text,18,92),W.fillStyle="#cfd4da",W.font="500 19px ui-monospace, Menlo, monospace",W.fillText(le.sub,20,146),W.fillStyle="#1c222c",W.fillRect(20,168,we-40,14),W.fillStyle=Z,W.fillRect(20,168,(we-40)*Math.min(1,le.ratio),14)}}),h.push({key:"dir",w:300,h:420,draw(W,we,j){W.fillStyle="#e9e4d6",W.fillRect(0,0,we,j),W.fillStyle="#1a1c20",W.font="700 20px ui-monospace, Menlo, monospace",W.textAlign="left",W.textBaseline="middle",W.fillText("CIRCUIT DIRECTORY",14,24),W.strokeStyle="rgba(20,22,26,.45)",W.lineWidth=1,W.font="500 13px ui-monospace, Menlo, monospace",["KITCHEN PLUGS","BEDROOM 1 \xB7 AFCI","BEDROOM 2 \xB7 AFCI","BATH \xB7 GFCI","LIVING","FURNACE","RANGE 40A","DRYER 30A","WATER HTR 30A","A/C 30A","EV CHARGER 50A","HOT TUB 60A","HEAT PUMP 40A","SUITE 40A"].forEach((Z,ee)=>{let oe=54+ee*25;W.beginPath(),W.moveTo(12,oe+12),W.lineTo(we-12,oe+12),W.stroke(),W.fillText(String(ee+1).padStart(2,"0")+"  "+Z,14,oe)})}});let p=a(h,{width:1024,emissive:.22});e(2,1.9,.03,s.plywood,.2,.1,-.015,l,{uv:{ox:1,oy:1}}),e(2.3,2.4,.1,s.concrete,.2,.05,-.085,l,{cast:!1,uv:!0});let d=.4,u=1,f=.1,_=.004;e(d,u,_,s.enclosureDark,0,0,_/2,l),e(_,u,f,s.enclosure,-d/2,0,f/2,l),e(_,u,f,s.enclosure,d/2,0,f/2,l),e(d,_,f,s.enclosure,0,u/2,f/2,l),e(d,_,f,s.enclosure,0,-u/2,f/2,l),t(.03,.92,s.conduit,0,u/2+.46,.045,l),t(.04,.03,s.enclosure,0,u/2+.012,.045,l),e(.19,.125,.026,s.blackPlastic,.42,.3,.013,l,{r:.006});let g=p.plane("mon",.168,c,.42,.3,.0268,{keep:!0});n([[.325,.3,.012],[.27,.31,.014],[.215,.33,.03]],.004,s.rubber,l,{radial:6}),e(.11,.075,.058,s.blackPlastic,0,.39,.035,l,{r:.004});let m=e(.034,.024,.022,i.std(1908773,.4,.1,{emissive:16039294,emissiveIntensity:0}),0,.39,.072,c,{r:.003,keep:!0});p.plane("a200",.05,l,0,.365,.0646),[-.03,.03].forEach(W=>e(.022,.022,.03,s.brass,W,.447,.03,l)),[[-.03,s.rubber],[.03,i.std(9183002,.6)],[.085,s.whitePlastic]].forEach(([W,we],j)=>n([[j===2?.02:W*.4,.5,.045],[W*.8,.485,.04],[W,.46,.032]],.0075,we,l,{radial:8,seg:10}));let E=s.copperHot.clone(),w=[-.012,.012].map(W=>e(.016,.74,.005,E,W,-.02,.012,c,{keep:!0,cast:!1}));[-.03,.03].forEach((W,we)=>e(.016,.06,.005,E,W*.7,.36,.012,l,{cast:!1}));let v={},y=s.greyPlastic,T=s.rubber,P=i.std(9183002,.6),x=s.whitePlastic,b=(W,we)=>{let j=0;W.forEach(([le,Z,ee,oe,be])=>{let Ee=Z===2?(wr(j)+wr(j+1))/2:wr(j),Oe=Z===2?lh*2-.002:lh-.002,Ne=we*.076;e(.088,Oe,.055,s.blackPlastic,Ne,Ee,.0325,l,{r:.0025,cast:!1});let G=we*.047,ot=y;ee&&(ot=i.std(4869975,.5,.05,{emissive:16753981,emissiveIntensity:0}),v[ee]={handle:ot,level:null,pos:o(Ne,Ee,.06),amps:le}),e(.015,Z===2?Oe*.72:.0125,.013,ot,G,Ee,.0655,ee?c:l,{r:.002,cast:!1,keep:!!ee}),p.plane("a"+le,.02,l,we*.07,Ee+(Z===2?.009:0),.0603),oe&&p.plane("n"+ee,.05,l,we*.087,Ee-.011,.0603),be&&(p.plane(be,.026,l,we*.099,Ee,.0603),e(.007,.007,.004,be==="AFCI"?s.bluePlastic:s.yellowPlastic,we*.118,Ee,.062,l,{cast:!1}));for(let et=0;et<Z;et++){let L=j+et,M=wr(L);e(.03,.007,.004,s.copper,we*.024+(L%2?.012:-.012)*.3,M,.016,l,{cast:!1});let K=we*(.146+L%4*.0045),te=.026+L%3*.008;n([[we*.121,M,.034],[we*.134,M+.002,te+.004],[K,M+.02,te],[K,.3+L%5*.01,te],[we*(.1+L%6*.012),.492,.03+L%2*.04]],.0023,Z===2&&et===1?P:T,l,{radial:5,seg:14,cast:!1})}j+=Z})};b(ah,-1),b(oh,1),[-1,1].forEach(W=>{e(.012,.52,.008,s.aluminum,W*.176,-.02,.012,l,{cast:!1});for(let we=0;we<22;we++)t(.0034,.004,s.galv,W*.176,.22-we*.0225,.018,l,{axis:"z",seg:6,cast:!1});for(let we=0;we<9;we++){let j=.2-we*.05;n([[W*.176,j,.02],[W*.164,j+.03,.05+we%3*.008],[W*.162,.33,.055+we%3*.008],[W*(.06+we*.012),.492,.07]],.0023,x,l,{radial:5,seg:12,cast:!1})}}),e(.36,.01,.004,s.aluminum,0,-.3,.008,l,{cast:!1}),e(.18,.012,.008,s.brass,-.05,-.43,.012,l,{cast:!1}),n([[-.1,-.43,.02],[-.13,-.47,.04],[-.13,-.56,.04],[-.2,-.75,.012],[-.7,-.82,.008]],.004,s.copper,l,{radial:6});let R=new mt;R.userData.keep=!0,c.add(R);let U=.0585,S=s.enclosure;e(.07,.98,.003,S,-.159,0,U,R),e(.07,.98,.003,S,.159,0,U,R),e(.056,.66,.003,S,0,-.02,U,R),e(.248,.062,.003,S,0,.459,U,R),e(.064,.094,.003,S,-.092,.381,U,R),e(.064,.094,.003,S,.092,.381,U,R),e(.248,.018,.003,S,0,.323,U,R),e(.248,.292,.003,S,0,-.344,U,R);let I=p.plane("rating",.2,R,0,.462,U+.002),A=new mt;A.userData.keep=!0,A.position.set(-d/2,0,f+.002),c.add(A),e(d,u,.003,s.enclosure,d/2,0,0,A);let N=p.plane("dir",.24,A,d/2,.02,-.003);N.rotation.y=Math.PI,e(.012,.06,.012,s.galv,d-.02,0,.006,A),A.rotation.y=-2.05;let V={15:s.whitePlastic,20:s.yellowPlastic,30:s.orangePlastic,40:s.rubber,50:s.rubber,60:s.rubber},B={15:r(16763274,{base:12170667,intensity:.7,dash:2.2,speed:.9,rest:0,gain:1,roughness:.6}),20:r(16758863,{base:13215008,intensity:.7,dash:2.2,speed:.9,rest:0,gain:1,roughness:.6})},z=.955,O=0,F=(W,we,j)=>{let le=O++,Z=-.17+le%13*.028,ee=.028+le%2*.042,oe=W>=40?.0085:W===30?.0065:.0052,be=[[Z,.5,ee],[Z,.66+le%3*.03,ee],[Z*1.4,z-.06,ee+.05],[Z*1.6,z,ee+.16+le%4*.03]],Ee=.3+le%7*.035,Oe=j==="south"?[[-.6,z,Ee],[-2.2,z,Ee],[-5.4,z,Ee+.2]]:j==="north"?[[.6,z,Ee],[1.6,z,Ee],[2.1,z,Ee+1.2],[2.1,z,5.5]]:j==="east"?[[Z*1.2,z,.9],[Z,z,3.2],[Z+.6,z,7.4]]:j==="up"?[[-.42,z+.1,.3],[-.42,z+.9,.34]]:[[.5,z,.2],[.62,z+.02,.02],[.62,z+.02,-.4]],Ne=V[W];we&&v[we]?(Ne=r(16753981,{base:1513757,intensity:2.6,dash:1.6,speed:1.1,rest:0,gain:1,level:0}),v[we].level=Ne.userData.level):B[W]&&(Ne=B[W]),n([...be,...Oe],oe,Ne,l,{radial:7,density:9,tension:.35,cast:le%3===0})},X=["south","north","south","east","north","south","north","south"];ah.filter(W=>!W[2]).forEach((W,we)=>F(W[0],null,X[we%X.length])),oh.filter(W=>!W[2]).forEach((W,we)=>F(W[0],null,X[(we+3)%X.length])),F(40,"range","up"),F(30,"dryer","south"),F(40,"hp","south"),F(30,"base","north"),F(30,"wh","south"),F(30,"ac","out"),F(50,"ev","east"),F(60,"spa","out"),F(40,"suite","north"),e(2.4,.02,.09,s.studs,-.4,z+.012,.5,l,{uv:!0,cast:!1});let re=o(.72,-.2,0);e(.06,.098,.062,s.bluePlastic,re.x,re.y,.031,l,{r:.004});let pe=new mt;pe.position.set(re.x+.012,re.y-.004,.118),pe.rotation.set(.12,-.5,.06),pe.userData.keep=!0,c.add(pe),e(.034,.104,.024,s.whitePlastic,0,0,0,pe,{r:.004}),e(.04,.118,.0016,s.galv,0,0,.0128,pe),[.028,-.028].forEach(W=>{e(.004,.011,.002,s.rubber,-.006,W,.0125,pe,{cast:!1}),e(.004,.011,.002,s.rubber,.006,W,.0125,pe,{cast:!1})}),[.012,-.012].forEach(W=>{t(.0035,.004,s.brass,.0185,W,-.004,pe,{axis:"x",seg:8}),t(.0035,.004,s.aluminum,-.0185,W,-.004,pe,{axis:"x",seg:8})}),n([[re.x-.01,.62,.012],[re.x-.012,.2,.014],[re.x-.008,re.y+.05,.02]],.0058,s.greyPlastic,l,{radial:7});let _e=[];[[-1,s.aluminum],[1,s.aluminum]].forEach(([W,we])=>{let j=o(re.x+W*.03,re.y+.012*W+.02,.085+(W>0?.012:0));n([[re.x-.008+W*.004,re.y+.045,.022],[re.x+W*.02,re.y+.05,.05],[j.x,j.y+.016,j.z]],.0019,we,l,{radial:6,seg:12,cast:!1});let le=t(.0078,.027,s.purple,j.x,j.y,j.z,c,{seg:12,keep:!0});_e.push(le),t(.0086,.006,s.purple,j.x,j.y+.0135,j.z,l,{seg:12}),n([[j.x,j.y+.014,j.z],[j.x+W*.012,j.y+.03,j.z+.012],[re.x+.012+W*.026,re.y+.006*W,.1],[re.x+.012+W*.02,re.y-.004+.012*W,.112]],.0017,s.copper,l,{radial:6,seg:14,cast:!1})}),i.bake(l);let De={meter:o(2.8,1.5,-4.42),main:Ni.clone().add(o(0,.39,.075)),bus:Ni.clone().add(o(0,-.06,.02)),branch:Ni.clone().add(o(-.076,wr(3),.06)),range:Ni.clone().add(v.range.pos),ev:Ni.clone().add(v.ev.pos),spa:Ni.clone().add(v.spa.pos),alu:Ni.clone().add(o(re.x+.03,re.y+.03,.09)),afci:Ni.clone().add(o(.099,wr(.5),.06)),load:Ni.clone().add(o(.42,.3,.03))},Xe={fx:2.8,fz:-3.9,time:19.4,cut:0,ghost:0,ground:1,orbit:.012},$=[{...Xe,radius:15,theta:3.42,phi:1.4,ty:2.8,fz:-4.2,dof:0,orbit:.03,time:15.5},{...Xe,radius:3.4,theta:3.5,phi:1.72,ty:1.95,fz:-4.35,dof:.8,time:15.5},{...Xe,radius:1.5,theta:.3,phi:1.44,ty:-1,dof:1.2},{...Xe,radius:1.45,theta:-.28,phi:1.47,ty:-1.24,dof:1.3},{...Xe,radius:1.75,theta:.34,phi:1.74,ty:-.98,fz:-3.8,dof:1.1},{...Xe,radius:1.15,theta:1,phi:1.5,ty:-1.3,fx:3.45,dof:1},{...Xe,radius:1.85,theta:.2,phi:1.6,ty:-.98,fx:2.86,fz:-3.8,dof:1}],ae=new Set(["range","dryer","ac"]),ve="",me=0,Se=["range","ev","spa"];return{name:"panel",group:c,anchors:De,shots:$,hides:W=>W.sys.electrical?W.sys.electrical.meshes:[],input(W){if(W&&(W.on&&(ae=new Set(W.on)),W.amps!==void 0&&W.service)){let we=`${Math.round(W.amps)} A`,j=`of a ${W.service} A service`;we+j!==ve&&(ve=we+j,p.set("mon",we,j,{ratio:W.amps/W.service}))}},light(W){return W===0?{pos:[2.2,3.4,-7.4],at:[2.8,1.6,-4.3],power:0}:W===1?{pos:[2.2,3.4,-7.4],at:[2.8,1.6,-4.3],power:.55,fill:.3}:W===5?{pos:[2.9,-.45,-2.2],at:[3.52,-1.45,-3.9],power:.8}:{pos:[1.5,-.5,-1.7],at:[2.8,-1.2,-3.9],power:1}},update({step:W,k:we,t:j,dt:le,snap:Z}){let ee=Z?1:1-Math.exp(-le*5);me=rt(me,W===3||W===4?1:0,ee);let oe=lt(0,1,me);R.position.set(.52*oe,-.99*oe,.2*Math.sin(Math.PI*oe)+.075*oe),R.rotation.set(-.13*oe,0,-.05*oe),E.emissiveIntensity=.08+.26*oe+(W===3?.12*Math.sin(j*2.2):0),m.material.emissiveIntensity=W===2?.4+.2*Math.sin(j*3):.06;let be=W===3?1:W===6?.35:.12;Object.values(B).forEach(Ee=>{Ee.userData.level.value=rt(Ee.userData.level.value,be,ee)}),Object.entries(v).forEach(([Ee,Oe])=>{let Ne=W===4?Se.includes(Ee)?1:0:W===6&&ae.has(Ee)?1:0;Oe.level&&(Oe.level.value=rt(Oe.level.value,Ne,ee)),Oe.handle.emissiveIntensity=rt(Oe.handle.emissiveIntensity,Ne*2.4,ee)}),_e.forEach((Ee,Oe)=>{Ee.scale.setScalar(W===5?1+.08*Math.sin(j*4+Oe):1)}),I.visible=oe<.9}}}function Kf({M:i,H:e,Ug:t,Wd:n,tier:s,reduce:r,glowTex:a}){let o=Zf({M:i,tier:s,reduce:r,glowTex:a,dotTex:qi("rgba(255,255,255,0.75)")}),c=new mt;c.name="sets";let l=x=>x.traverse(b=>{b.userData.noPick=!0}),h=Jf({kit:o});c.add(h.group),l(h.group);let p={};Object.entries({panel:$f,attic:null,sewer:null,radon:null,restore:null,cycle:null}).forEach(([x,b])=>{typeof b=="function"&&(p[x]=b)});let d={},u=new pa(16769725,0,18,.5,.8,1);u.castShadow=s>=1,u.shadow.mapSize.set(s>=2?2048:1024,s>=2?2048:1024),u.shadow.bias=-6e-4,u.shadow.normalBias=.006,u.shadow.radius=3,u.shadow.camera.near=.15,u.shadow.camera.far=16;let f=new Hn(9414888,0,9,2);c.add(u,u.target,f);let _=new D(2,-.3,-2.5),g=new D(2.8,-1.2,-3.9),m=0,E=1,w=null,v=[];function y(x){if(d[x]||!p[x])return d[x];let b=p[x]({kit:o,M:i,H:e,Ug:t,Wd:n,tier:s,reduce:r});return b.group.visible=!1,l(b.group),c.add(b.group),d[x]=b,b}function T(x,b,R,U,S){o.time.value=R,h.disc.rotation.y=R*1.4;let I=b.zoom&&p[b.zoom]?b.zoom:null;I&&y(I);let A=x.zk>.004?I||w:null;A!==w&&(w&&d[w]&&(d[w].group.visible=!1),v.forEach(B=>{B.visible=!0}),v=[],w=A,w&&(d[w].group.visible=!0,d[w].hides&&(v=(d[w].hides(e,t,n)||[]).filter(B=>B&&B.visible),v.forEach(B=>{B.visible=!1}))));let N=S?1:1-Math.exp(-U*3.2),V=0;if(w){let B=d[w];B.update({step:b.zs|0,p:b.zp||0,q:b.zq||0,k:x.zk,t:R,dt:U,reduce:r,snap:S});let z=B.light?B.light(b.zs|0,b.zq||0):null;if(z){let O=m<.02?1:N;_.lerp(P.fromArray(z.pos),O),g.lerp(P.fromArray(z.at),O),V=z.power*x.zk,E=rt(E,z.fill??1,N)}}m=rt(m,V,N),u.position.copy(_),u.target.position.copy(g),u.intensity=10*m,u.visible=m>.01,f.position.copy(g).add(P.set(-1.2,.5,1.6)),f.intensity=1.4*m*E,f.visible=m>.01}let P=new D;return{root:c,kit:o,update:T,ensure:y,names:Object.keys(p),get shown(){return w},anchors(){return w?d[w].anchors:null},input(x,b){let R=y(x);R&&R.input&&R.input(b)},shots(x){let b=y(x);return b?b.shots||[]:null},get:x=>y(x),prebuild(){let x=Object.keys(p).find(b=>!d[b]);return x?(y(x),!0):!1},lampPower:()=>m}}function v_(){let i=performance.now(),e=[],t=k=>e.push([k,Math.round(performance.now()-i)]),n=document.getElementById("stage"),s=document.documentElement,r=()=>window.dispatchEvent(new Event("hause:stage-ready")),a=()=>{s.classList.add("no-webgl"),r()};if(!n)return a();let o=window.matchMedia("(prefers-reduced-motion: reduce)").matches,c=gf(),l=navigator.hardwareConcurrency||4,h=typeof window.HAUSE_QUALITY=="number"?window.HAUSE_QUALITY:c?l>=6?1:0:l>=6?2:1;try{let k=document.createElement("canvas"),Te=k.getContext("webgl2");if(!Te)return a();let ye=Te.getExtension("WEBGL_lose_context");ye&&ye.loseContext()}catch{return a()}let p;try{if(p=new sc({canvas:n,antialias:h===0,powerPreference:"high-performance"}),!p.getContext())throw new Error("no gl")}catch{return a()}n.addEventListener("webglcontextlost",k=>{k.preventDefault(),X=!1,s.classList.add("no-webgl")}),p.toneMapping=ls,p.toneMappingExposure=1,p.shadowMap.enabled=!0,p.shadowMap.type=ws;let d=new Wn(new D(1,0,0),1e3);p.clippingPlanes=[d],vf(p.capabilities.getMaxAnisotropy()),_f(h);let u=new _s;u.environmentIntensity=.6,u.fog=new Zr(1317678,70,360);let f=new vn(30,1,.3,1400),_=.3;t("renderer");let g=Lf(p,u);t("sky");let{M:m,T:E}=Df();t("materials+textures");let w=Sr(),v=Pf(),y=Hf({M:m,T:E,markTex:v,glowTex:w});u.add(y.house),t("house");let T=Vf({M:m,T:E,glowTex:w,markTex:v,tier:h,reduce:o});u.add(T.world),t("world");let P=kf({house:y.house,reduce:o}),x=Xf({M:m,layers:y.layers,glowTex:w}),b=qf({scene:u,M:m,tier:h,reduce:o});Object.values(y.layers).forEach(k=>{Yf(k,y.edgeMat),rh(k)}),rh(T.props);let R=Kf({M:m,H:y,Ug:b,Wd:T,tier:h,reduce:o,glowTex:w});y.house.add(R.root),t("systems+interior+underground+merge");let U=new da(10466518,1709842,.5),S=new pr(16769728,3);S.castShadow=!0,S.shadow.mapSize.set(h>=2?2048:1024,h>=2?2048:1024),Object.assign(S.shadow.camera,{left:-26,right:26,top:26,bottom:-26,near:5,far:240}),S.shadow.bias=-3e-4,S.shadow.normalBias=.04,S.shadow.radius=h>=2?2.5:1.5,S.target.position.set(0,3,0);let I=new pr(9085656,.6);I.position.copy(g.U.uMoonDir.value).multiplyScalar(60),u.add(U,S,S.target,I);let A={explode:0,radius:36,theta:.55,phi:1.36,ty:4.2,tx:-6,time:19.4,marks:0,ground:1,orbit:.04,visible:1,ghost:0,cut:0,lift:0,thermal:0,netE:0,netW:0,netA:0,netR:0,lensY:0,fx:0,fz:0,beacons:0,section:0,cutX:.45,season:0,snowfall:1,smoke:1,melt:0,icicles:0,aurora:0,zk:0,dof:0},N=Object.assign({level:null,focusSys:null,netFocus:null,ugFocus:null,interactive:!1,zoom:null,zs:0,zp:0,zq:0},A),V=["explode","radius","phi","ty","tx","time","marks","ground","visible","ghost","cut","lift","thermal","netE","netW","netA","netR","lensY","fx","fz","beacons","section","cutX","season","snowfall","smoke","melt","icicles","aurora","zk","dof"],B=0,z=1,O=1,F=1,X=!0,re=0,pe=-9,_e={set(k){Object.assign(N,k)},highlight(k){N.focusSys=k},selectLevel(k){N.level=k},levels:Xa.map(k=>k.key),onPick:null,onHoverLevel:null,onFrame:null,onThermal:null,roomsLit:0,get quality(){return h}};window.HAUSE_STAGE=_e;let De=new ze(14256718),Xe=null;function $(k){Xe=k,Object.keys(y.sys).forEach(Te=>y.sys[Te].mats.forEach(ye=>{Te===k?(ye.emissive.copy(De),ye.emissiveIntensity=.9):(ye.emissive.copy(ye.userData.baseEmissive),ye.emissiveIntensity=1)}))}let ae=new Set;y.house.traverse(k=>{!k.isMesh||!k.material||(Array.isArray(k.material)?k.material:[k.material]).forEach(Te=>{Te.userData&&(Te.userData.shell||Te.userData.wall)&&ae.add(Te)})});let ve="",me=!1;y.edgeMat.visible=!1;function Se(k,Te){let ye=k.toFixed(3)+"|"+Te.toFixed(3);if(ye===ve)return;ve=ye;let Ke=k>.01||Te>.01;ae.forEach(it=>{let Vt=it.userData.pane,Ct=it.userData.shell?k*(Vt?.75:.9):0,Ft=it.userData.wall?Te*(Vt?.8:.9):0;Ke!==me&&(it.transparent=Ke||!!it.userData.alwaysTransparent,it.needsUpdate=!0),it.opacity=1-Math.max(Ct,Ft),it.depthWrite=Math.max(Ct,Ft)<.4}),me=Ke,y.edgeMat.opacity=Math.max(k*.28,Te*.16),y.edgeMat.visible=y.edgeMat.opacity>.01}let W=Wf({scene:u,M:m,skipParents:[...Object.values(P.groups),R.root],onChange:k=>{T.setThermal(k),p.toneMapping=k?Yn:ls,_e.onThermal&&_e.onThermal(k)}}),we=new D;function j(k,Te){return we.copy(Te),k.localToWorld(we),we.project(f),{x:(we.x*.5+.5)*z,y:(-we.y*.5+.5)*O,behind:we.z>1}}let le=(k,Te,ye)=>new D(k,Te,ye),Z=Xa.map(k=>({obj:y.layers[k.key],offset:le(qt/2+1.4,{roof:7.8,upper:4.9,main:1.8,basement:-1.2,below:-2.8}[k.key],_t/2)}));_e.projectLevels=()=>Z.map(k=>j(k.obj,k.offset)),_e.projectAnchors=()=>{let k={};Object.keys(y.ANCHORS).forEach(ye=>{k[ye]=j(y.house,y.ANCHORS[ye])}),Object.keys(b.ANCHORS).forEach(ye=>{k[ye]=j(y.house,b.ANCHORS[ye])});let Te=R.anchors();return Te&&Object.keys(Te).forEach(ye=>{k["z."+ye]=j(y.house,Te[ye])}),k},_e.zoomSets=R.names,_e.zoomShots=k=>R.shots(k),_e.zoomInput=(k,Te)=>R.input(k,Te),_e.prebuildZoom=()=>R.prebuild();let ee={x:0,y:0,nx:0,ny:0},oe=null,be=new ga,Ee=[];y.house.traverse(k=>{!k.isMesh||k.isInstancedMesh||!k.visible||k.userData.noPick||(k.geometry.computeBoundingSphere(),k.geometry.boundingSphere.radius>.3&&Ee.push(k))});let Oe=k=>{for(;k&&!k.userData.level;)k=k.parent;return k?k.userData.level:null};_e.pickAt=(k,Te)=>{be.setFromCamera({x:k/z*2-1,y:-(Te/O)*2+1},f);let ye=be.intersectObjects(Ee,!1)[0];return ye?{level:Oe(ye.object),sys:ye.object.userData.sys||null}:null},_e.pickCount=()=>Ee.length,window.addEventListener("pointermove",k=>{ee.nx=k.clientX/z*2-1,ee.ny=k.clientY/O*2-1,oe&&(re=oe.theta0-(k.clientX-oe.x)*.006)},{passive:!0}),n.addEventListener("pointerdown",k=>{N.interactive&&(oe={x:k.clientX,theta0:re,t:performance.now()})}),window.addEventListener("pointerup",k=>{if(!oe)return;let Te=Math.abs(k.clientX-oe.x)<6&&performance.now()-oe.t<400;if(oe=null,Te&&N.interactive){be.setFromCamera({x:k.clientX/z*2-1,y:-(k.clientY/O)*2+1},f);let ye=be.intersectObjects(Ee,!1)[0];ye&&_e.onPick&&_e.onPick(Oe(ye.object),ye.object.userData.sys||null)}}),n.addEventListener("pointermove",k=>{if(!N.interactive||oe)return;be.setFromCamera({x:k.clientX/z*2-1,y:-(k.clientY/O)*2+1},f);let Te=be.intersectObjects(Ee,!1)[0],ye=Te?Oe(Te.object):null;n.style.cursor=ye?"pointer":"grab",_e.onHoverLevel&&_e.onHoverLevel(ye)});let Ne=null;function G(){Ne&&Ne.dispose(),Ne=h>=1?Bf(p,u,f,h,Math.round(z*F),Math.round(O*F)):null}function ot(){z=window.innerWidth,O=window.innerHeight,F=Math.min(window.devicePixelRatio||1,h>=2?1.75:h===1?1.5:1.25),p.setPixelRatio(F),p.setSize(z,O,!1),f.aspect=z/O,f.fov=z<700?44:30,f.updateProjectionMatrix(),Ne&&Ne.setSize(Math.round(z*F),Math.round(O*F))}window.addEventListener("resize",ot),ot(),G();let et=new D;function L(k,Te){let ye=.5-.5*Math.cos(Te*Math.PI*2),Ke=rt(7.5,5,ye),it=rt(18.3,21.9,ye),Vt=rt(24,62,ye),Ct=Math.PI*(k-Ke)/(it-Ke),Ft=Vt*Math.sin(Ct),zn=Ft*Math.PI/180;return et.set(-Math.sin(Ct)*Math.cos(zn),Math.sin(zn),Math.cos(Ct)*Math.cos(zn)).normalize(),Ft}let M=[[0,[.62,.6,.55]],[.16,[.7,.7,.55]],[.3,[.8,1,.62]],[.5,[.74,.95,.55]],[.68,[1.05,.88,.5]],[.82,[1,.72,.45]],[1,[.62,.6,.55]]];function K(k,Te){let ye=0;for(;ye<M.length-2&&M[ye+1][0]<=k;)ye++;let[Ke,it]=M[ye],[Vt,Ct]=M[ye+1],Ft=(k-Ke)/(Vt-Ke);Te.setRGB(rt(it[0],Ct[0],Ft),rt(it[1],Ct[1],Ft),rt(it[2],Ct[2],Ft))}let te=new D,ce=new D,Le=new D,Fe=new D,fe=new D,ue={ug:0,section:0,cutX:.45,ground:1,ghost:0,cut:0,snow:1,roofSnow:1,snowfall:1,rain:0,leaves:0,smoke:1,melt:0,icicles:0,grow:0,leafTint:new ze(.3,.5,.15),explode:0,lift:0,zk:0},Be=[[0,[.3,.3,.3]],[.22,[.62,.8,.28]],[.36,[.4,.62,.2]],[.55,[.3,.5,.15]],[.7,[.95,.7,.18]],[.82,[.9,.35,.1]],[1,[.5,.2,.08]]];function tt(k,Te){let ye=0;for(;ye<Be.length-2&&Be[ye+1][0]<=k;)ye++;let[Ke,it]=Be[ye],[Vt,Ct]=Be[ye+1],Ft=(k-Ke)/(Vt-Ke);Te.setRGB(rt(it[0],Ct[0],Ft),rt(it[1],Ct[1],Ft),rt(it[2],Ct[2],Ft))}let Ge=new ze(16777215),He=new ze,Ze=0,Qe=30;function at(k,Te){B+=k;let ye=Te?1:1-Math.exp(-k*(o?30:4.2));V.forEach(nn=>{A[nn]=rt(A[nn],N[nn],ye)}),A.theta=rt(A.theta,N.theta+(o?0:Math.sin(B*.08)*N.orbit)+re,ye),Xa.forEach(nn=>{let on=y.layers[nn.key],Gn=nn.key==="roof"?18*pt(A.lift,0,1):nn.key==="upper"?12*pt(A.lift-1,0,1):nn.key==="main"?9*pt(A.lift-2,0,1):0;on.position.y=rt(on.position.y,nn.dy*A.explode+Gn+(N.level===nn.key?.9:0),ye)});let Ke=(A.season%1+1)%1,it=Math.max(1-lt(.1,.3,Ke),lt(.84,1,Ke)),Vt=Math.max(1-lt(.06,.22,Ke),lt(.88,1,Ke));ue.ug=0,ue.beacons=A.beacons,ue.section=A.section,ue.cutX=A.cutX,ue.ground=A.ground,ue.ghost=A.ghost,ue.cut=A.cut,ue.lift=A.lift,ue.zk=A.zk,ue.snow=it,ue.roofSnow=Vt,ue.explode=A.explode,ue.grow=lt(.2,.34,Ke)*(1-lt(.78,.93,Ke)),tt(Ke,ue.leafTint),ue.rain=lt(.2,.24,Ke)*(1-lt(.3,.34,Ke))*(o?0:1),ue.leaves=lt(.72,.78,Ke)*(1-lt(.9,.95,Ke))*(o?0:1),ue.melt=Math.max(A.melt,1-Vt),ue.icicles=Math.max(A.icicles,lt(.03,.1,Ke)*(1-lt(.17,.26,Ke))+lt(.9,.97,Ke)*.5),ue.snowfall=A.snowfall*(o?0:1)*(Ke<.05||Ke>.93?1:0),ue.smoke=A.smoke*(1-lt(.12,.3,Ke)+lt(.8,.95,Ke)),K(Ke,T.U.uTint.value);let Ct=L(A.time,Ke),Ft=lt(-5,10,Ct);g.update({elev:Ct,daylight:Ft,sunDir:et,thermal:A.thermal,aurora:A.aurora*(1-Ft),cloud:rt(.38,.62,lt(0,1,Math.abs(Math.sin(Ke*Math.PI*2)))),snowy:it>.5,voidK:pt(1-A.ground,0,1)},B),g.follow(f.position),u.fog.color.copy(g.horizon);let zn=1-lt(0,28,Ct);S.position.copy(et).multiplyScalar(110).add(S.target.position),S.color.setRGB(1,rt(.95,.62,zn),rt(.88,.4,zn)),S.intensity=3.6*lt(-4,6,Ct)*(1-A.thermal),U.color.copy(g.zenith).lerp(Ge,.4),U.groundColor.setRGB(.1,.09,.08).lerp(He.setRGB(.55,.6,.72),it*.8*(.25+.75*Ft)),U.intensity=(.5+.35*Ft+.25*A.cut)*(1-A.thermal),I.intensity=.7*(1-Ft)*(1-A.thermal),u.environmentIntensity=.5+.4*Ft+.1*A.cut,p.toneMappingExposure=W.on?1:rt(1.2,.95,Ft),(Te||B-pe>.4)&&(g.refreshEnv(Te),pe=B),Se(A.ghost*(1-pt(A.explode*4,0,1)),A.cut),x.update(1-Ft,A.cut);let gi=y.update(ue,ye,B,Ft,Te?100:k);_e.roomsLit=Math.round(pt(gi,0,7)),y.extra.chimneyTop.getWorldPosition(Fe),T.update(ue,B,k,Ft,te,Fe,pt(gi/9,0,1));let Zn=N.focusSys;Object.keys(y.sys).forEach(nn=>y.sys[nn].marks.forEach(on=>{let Gn=Zn?nn===Zn?1:A.marks*.35:A.marks;on.material.opacity=rt(on.material.opacity,Gn,ye),on.scale.setScalar(.95*(nn===Zn?1+Math.sin(B*4)*.12:1)*(1+A.explode*.25))})),Zn!==Xe&&$(Zn),P.update(A,N.netFocus,B,k);let Fi=b.update(ue,N.ugFocus,B,k);d.constant=-Fi,W.set(N.thermal>.5),W.time.value=B,R.update(A,N,B,k,Te),ee.x=rt(ee.x,ee.nx,ye*.6),ee.y=rt(ee.y,ee.ny,ye*.6);let ri=A.theta+ee.x*.08,ai=pt(A.phi+ee.y*.04,.35-.27*A.zk,1.5+1.2*A.zk),Nn=z<700,xi=pt(A.radius*.012,.02,.3);Math.abs(xi-_)>_*.02&&(_=xi,f.near=xi,f.updateProjectionMatrix()),te.set(A.fx,A.ty+(Nn?-1.2*pt(A.radius/30,0,1):0),A.fz),ce.set(Math.sin(ai)*Math.sin(ri),Math.cos(ai),Math.sin(ai)*Math.cos(ri)).multiplyScalar(A.radius*(Nn?1.25:1)).add(te),f.position.copy(ce),f.lookAt(te),f.updateMatrixWorld(),Le.setFromMatrixColumn(f.matrixWorld,0),f.position.addScaledVector(Le,Nn?0:A.tx),f.updateMatrixWorld(),fe.copy(te).applyMatrix4(f.matrixWorldInverse);let Fn=Math.max(.001,fe.length());Qe=Fn,T.sight.value.set(fe.x/Fn,fe.y/Fn,fe.z/Fn,Fn),Math.abs(A.lensY-Ze)>1e-4&&(Ze=A.lensY,Math.abs(Ze)<1e-4?f.clearViewOffset():f.setViewOffset(z,O,0,-Ze*O,z,O)),n.style.opacity=A.visible.toFixed(3)}let q={n:0,sum:0,last:0},Ue=performance.now();function Me(k){if(Ne){let Te=Ne.gtao,ye=A.ghost>.05||A.cut>.05||W.on||A.explode>.05;Te&&(Te.enabled=!ye),Ne.bloom&&(Ne.bloom.strength=W.on?.9:(.3+.55*(1-pt(et.y*4,0,1)))*(1-.45*A.zk)),Ne.grade.uniforms.uSat.value=W.on?1:1.05,Ne.setDof(W.on?0:A.dof,Qe,f.near,f.far),Ne.render(k,B)}else p.render(u,f)}function Ve(k){let Te=k-q.last;if(q.last=k,!(Te>250||Te<=0)&&(q.n++,q.n>40&&(q.sum+=Te),q.n===130)){let ye=q.sum/90;ye>26&&h>1&&typeof window.HAUSE_QUALITY!="number"?(h--,G(),ot(),S.shadow.mapSize.set(1024,1024),S.shadow.map&&S.shadow.map.dispose(),S.shadow.map=null):ye>34&&h===1&&F>1.01&&typeof window.HAUSE_QUALITY!="number"&&(F=1,p.setPixelRatio(1),p.setSize(z,O,!1),Ne&&Ne.setSize(z,O)),q={n:0,sum:0,last:k}}}function We(k){if(!X)return;let Te=Math.min((k-Ue)/1e3,.05);Ue=k,at(Te,!1),Me(Te),Ve(k),_e.onFrame&&_e.onFrame(),requestAnimationFrame(We)}_e.pause=()=>{X=!1},_e.resume=()=>{X||(X=!0,Ue=performance.now(),q.last=0,requestAnimationFrame(We))},_e.settle=()=>{at(.016,!0),at(.016,!0),Me(.016),_e.onFrame&&_e.onFrame()},window.HAUSE_DEBUG&&(_e.debug={scene:u,camera:f,renderer:p,S:A,target:N,H:y,Wd:T,sky:g,sun:S,hemi:U,moon:I,Sets:R,get post(){return Ne}}),_e.info=()=>({tier:h,calls:p.info.render.calls,triangles:p.info.render.triangles,pixelRatio:F,buildMs:_e.buildMs}),t("pre-first-render"),_e.settle(),t("first-render"),_e.laps=e,requestAnimationFrame(k=>{Ue=k,requestAnimationFrame(We)}),_e.buildMs=Math.round(performance.now()-i),s.classList.add("has-webgl"),r()}v_();})();
