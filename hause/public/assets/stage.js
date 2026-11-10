/* HAUSE 3D stage. Built from hause/src/stage with esbuild + three.js. Do not edit by hand. */
(()=>{var Xu=0,rh=1,qu=2;var ys=1,Yu=2,hr=3,ns=0,un=1,_n=2,en=0,ur=1,Bt=2,ah=3,oh=4,cl=5;var qn=100,Zu=101,Ju=102,$u=103,Ku=104,Ms=200,Qu=201,ju=202,ed=203,lh=204,ch=205,da=206,td=207,fa=208,nd=209,id=210,sd=211,rd=212,ad=213,od=214,Ao=0,Ro=1,Co=2,Zs=3,Po=4,Io=5,Do=6,Lo=7,hh=0,ld=1,cd=2,Hn=0,pa=1,ma=2,ga=3,is=4,xa=5,_a=6,va=7;var uh=300,ss=301,Ss=302,hl=303,ul=304,ya=306,pn=1e3,mi=1001,Uo=1002,Qt=1003,hd=1004;var Ma=1005;var sn=1006,dl=1007;var Ei=1008;var an=1009,dh=1010,fh=1011,dr=1012,fl=1013,ai=1014,Yn=1015,Kt=1016,pl=1017,ml=1018,rs=1020,ph=35902,mh=35899,gh=1021,xh=1022,vn=1023,gi=1026,bi=1027,gl=1028,xl=1029,as=1030,_l=1031;var vl=1033,Sa=33776,Ea=33777,ba=33778,Ta=33779,yl=35840,Ml=35841,Sl=35842,El=35843,bl=36196,Tl=37492,wl=37496,Al=37488,Rl=37489,wa=37490,Cl=37491,Pl=37808,Il=37809,Dl=37810,Ll=37811,Ul=37812,Nl=37813,Fl=37814,Ol=37815,Bl=37816,Hl=37817,zl=37818,Vl=37819,Gl=37820,kl=37821,Wl=36492,Xl=36494,ql=36495,Yl=36283,Zl=36284,Aa=36285,Jl=36286;var Or=2300,No=2301,bo=2302,qc=2303,Yc=2400,Zc=2401,Jc=2402;var ud=3200;var Ra=0,dd=1,oi="",Ft="srgb",Br="srgb-linear",Hr="linear",Pt="srgb";var To=7680;var fd=519,pd=512,md=513,gd=514,$l=515,xd=516,_d=517,Kl=518,vd=519,_h=35044;var vh="300 es",ni=2e3,Js=2001;function Bf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Hf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function zr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function yd(){let i=zr("canvas");return i.style.display="block",i}var au={},$s=null;function Vr(...i){let e="THREE."+i.shift();$s?$s("log",e,...i):console.log(e,...i)}function Md(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ot(...i){i=Md(i);let e="THREE."+i.shift();if($s)$s("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function ct(...i){i=Md(i);let e="THREE."+i.shift();if($s)$s("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function ps(...i){let e=i.join(" ");e in au||(au[e]=!0,ot(...i))}function Sd(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Ed={[Ao]:Ro,[Co]:Do,[Po]:Lo,[Zs]:Io,[Ro]:Ao,[Do]:Co,[Lo]:Po,[Io]:Zs},xi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var wo=Math.PI/180,Fo=180/Math.PI;function Oi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(yn[i&255]+yn[i>>8&255]+yn[i>>16&255]+yn[i>>24&255]+"-"+yn[e&255]+yn[e>>8&255]+"-"+yn[e>>16&15|64]+yn[e>>24&255]+"-"+yn[t&63|128]+yn[t>>8&255]+"-"+yn[t>>16&255]+yn[t>>24&255]+yn[n&255]+yn[n>>8&255]+yn[n>>16&255]+yn[n>>24&255]).toLowerCase()}function At(i,e,t){return Math.max(e,Math.min(t,i))}function zf(i,e){return(i%e+e)%e}function _c(i,e,t){return(1-t)*i+t*e}function fi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Nt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Th=class Th{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=At(this.x,e.x,t.x),this.y=At(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=At(this.x,e,t),this.y=At(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(At(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(At(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Th.prototype.isVector2=!0;var Se=Th,Yt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],u=n[s+2],f=n[s+3],d=r[a+0],h=r[a+1],p=r[a+2],x=r[a+3];if(f!==x||c!==d||l!==h||u!==p){let g=c*d+l*h+u*p+f*x;g<0&&(d=-d,h=-h,p=-p,x=-x,g=-g);let m=1-o;if(g<.9995){let S=Math.acos(g),b=Math.sin(S);m=Math.sin(m*S)/b,o=Math.sin(o*S)/b,c=c*m+d*o,l=l*m+h*o,u=u*m+p*o,f=f*m+x*o}else{c=c*m+d*o,l=l*m+h*o,u=u*m+p*o,f=f*m+x*o;let S=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=S,l*=S,u*=S,f*=S}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],u=n[s+3],f=r[a],d=r[a+1],h=r[a+2],p=r[a+3];return e[t]=o*p+u*f+c*h-l*d,e[t+1]=c*p+u*d+l*f-o*h,e[t+2]=l*p+u*h+o*d-c*f,e[t+3]=u*p-o*f-c*d-l*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(s/2),f=o(r/2),d=c(n/2),h=c(s/2),p=c(r/2);switch(a){case"XYZ":this._x=d*u*f+l*h*p,this._y=l*h*f-d*u*p,this._z=l*u*p+d*h*f,this._w=l*u*f-d*h*p;break;case"YXZ":this._x=d*u*f+l*h*p,this._y=l*h*f-d*u*p,this._z=l*u*p-d*h*f,this._w=l*u*f+d*h*p;break;case"ZXY":this._x=d*u*f-l*h*p,this._y=l*h*f+d*u*p,this._z=l*u*p+d*h*f,this._w=l*u*f-d*h*p;break;case"ZYX":this._x=d*u*f-l*h*p,this._y=l*h*f+d*u*p,this._z=l*u*p-d*h*f,this._w=l*u*f+d*h*p;break;case"YZX":this._x=d*u*f+l*h*p,this._y=l*h*f+d*u*p,this._z=l*u*p-d*h*f,this._w=l*u*f-d*h*p;break;case"XZY":this._x=d*u*f-l*h*p,this._y=l*h*f-d*u*p,this._z=l*u*p+d*h*f,this._w=l*u*f+d*h*p;break;default:ot("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],f=t[10],d=n+o+f;if(d>0){let h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-c)*h,this._y=(r-l)*h,this._z=(a-s)*h}else if(n>o&&n>f){let h=2*Math.sqrt(1+n-o-f);this._w=(u-c)/h,this._x=.25*h,this._y=(s+a)/h,this._z=(r+l)/h}else if(o>f){let h=2*Math.sqrt(1+o-n-f);this._w=(r-l)/h,this._x=(s+a)/h,this._y=.25*h,this._z=(c+u)/h}else{let h=2*Math.sqrt(1+f-n-o);this._w=(a-s)/h,this._x=(r+l)/h,this._y=(c+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(At(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-s*o,this._w=a*u-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},wh=class wh{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ou.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ou.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),u=2*(o*t-r*s),f=2*(r*n-a*t);return this.x=t+c*l+a*f-o*u,this.y=n+c*u+o*l-r*f,this.z=s+c*f+r*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=At(this.x,e.x,t.x),this.y=At(this.y,e.y,t.y),this.z=At(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=At(this.x,e,t),this.y=At(this.y,e,t),this.z=At(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(At(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return vc.copy(this).projectOnVector(e),this.sub(vc)}reflect(e){return this.sub(vc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(At(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};wh.prototype.isVector3=!0;var C=wh,vc=new C,ou=new Yt,Ah=class Ah{constructor(e,t,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],f=n[7],d=n[2],h=n[5],p=n[8],x=s[0],g=s[3],m=s[6],S=s[1],b=s[4],_=s[7],E=s[2],w=s[5],R=s[8];return r[0]=a*x+o*S+c*E,r[3]=a*g+o*b+c*w,r[6]=a*m+o*_+c*R,r[1]=l*x+u*S+f*E,r[4]=l*g+u*b+f*w,r[7]=l*m+u*_+f*R,r[2]=d*x+h*S+p*E,r[5]=d*g+h*b+p*w,r[8]=d*m+h*_+p*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*r*u+n*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],f=u*a-o*l,d=o*c-u*r,h=l*r-a*c,p=t*f+n*d+s*h;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=f*x,e[1]=(s*l-u*n)*x,e[2]=(o*n-s*a)*x,e[3]=d*x,e[4]=(u*t-s*c)*x,e[5]=(s*r-o*t)*x,e[6]=h*x,e[7]=(n*c-l*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return ps("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(yc.makeScale(e,t)),this}rotate(e){return ps("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(yc.makeRotation(-e)),this}translate(e,t){return ps("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(yc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Ah.prototype.isMatrix3=!0;var mt=Ah,yc=new mt,lu=new mt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cu=new mt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Vf(){let i={enabled:!0,workingColorSpace:Br,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Pt&&(s.r=Bi(s.r),s.g=Bi(s.g),s.b=Bi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Pt&&(s.r=Ys(s.r),s.g=Ys(s.g),s.b=Ys(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===oi?Hr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ps("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ps("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Br]:{primaries:e,whitePoint:n,transfer:Hr,toXYZ:lu,fromXYZ:cu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ft},outputColorSpaceConfig:{drawingBufferColorSpace:Ft}},[Ft]:{primaries:e,whitePoint:n,transfer:Pt,toXYZ:lu,fromXYZ:cu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ft}}}),i}var wt=Vf();function Bi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ys(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Cs,Oo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Cs===void 0&&(Cs=zr("canvas")),Cs.width=e.width,Cs.height=e.height;let s=Cs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Cs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=zr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Bi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Bi(t[n]/255)*255):t[n]=Bi(t[n]);return{data:t,width:e.width,height:e.height}}else return ot("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Gf=0,Ks=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Gf++}),this.uuid=Oi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Mc(s[a].image)):r.push(Mc(s[a]))}else r=Mc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Mc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Oo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ot("Texture: Unable to serialize Texture."),{})}var kf=0,Sc=new C,An=class i extends xi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=mi,s=mi,r=sn,a=Ei,o=vn,c=an,l=i.DEFAULT_ANISOTROPY,u=oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kf++}),this.uuid=Oi(),this.name="",this.source=new Ks(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Se(0,0),this.repeat=new Se(1,1),this.center=new Se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Sc).x}get height(){return this.source.getSize(Sc).y}get depth(){return this.source.getSize(Sc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){ot(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){ot(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==uh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case pn:e.x=e.x-Math.floor(e.x);break;case mi:e.x=e.x<0?0:1;break;case Uo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case pn:e.y=e.y-Math.floor(e.y);break;case mi:e.y=e.y<0?0:1;break;case Uo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};An.DEFAULT_IMAGE=null;An.DEFAULT_MAPPING=uh;An.DEFAULT_ANISOTROPY=1;var Rh=class Rh{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],u=c[4],f=c[8],d=c[1],h=c[5],p=c[9],x=c[2],g=c[6],m=c[10];if(Math.abs(u-d)<.01&&Math.abs(f-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+x)<.1&&Math.abs(p+g)<.1&&Math.abs(l+h+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(l+1)/2,_=(h+1)/2,E=(m+1)/2,w=(u+d)/4,R=(f+x)/4,v=(p+g)/4;return b>_&&b>E?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=w/n,r=R/n):_>E?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=w/s,r=v/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=R/r,s=v/r),this.set(n,s,r,t),this}let S=Math.sqrt((g-p)*(g-p)+(f-x)*(f-x)+(d-u)*(d-u));return Math.abs(S)<.001&&(S=1),this.x=(g-p)/S,this.y=(f-x)/S,this.z=(d-u)/S,this.w=Math.acos((l+h+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=At(this.x,e.x,t.x),this.y=At(this.y,e.y,t.y),this.z=At(this.z,e.z,t.z),this.w=At(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=At(this.x,e,t),this.y=At(this.y,e,t),this.z=At(this.z,e,t),this.w=At(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(At(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Rh.prototype.isVector4=!0;var Vt=Rh,Bo=class extends xi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Vt(0,0,e,t),this.scissorTest=!1,this.viewport=new Vt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new An(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:sn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ks(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Wt=class extends Bo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Gr=class extends An{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ho=class extends An{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var ll=class ll{constructor(e,t,n,s,r,a,o,c,l,u,f,d,h,p,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,u,f,d,h,p,x,g)}set(e,t,n,s,r,a,o,c,l,u,f,d,h,p,x,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=c,m[2]=l,m[6]=u,m[10]=f,m[14]=d,m[3]=h,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ll().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Ps.setFromMatrixColumn(e,0).length(),r=1/Ps.setFromMatrixColumn(e,1).length(),a=1/Ps.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let d=a*u,h=a*f,p=o*u,x=o*f;t[0]=c*u,t[4]=-c*f,t[8]=l,t[1]=h+p*l,t[5]=d-x*l,t[9]=-o*c,t[2]=x-d*l,t[6]=p+h*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*u,h=c*f,p=l*u,x=l*f;t[0]=d+x*o,t[4]=p*o-h,t[8]=a*l,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=h*o-p,t[6]=x+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*u,h=c*f,p=l*u,x=l*f;t[0]=d-x*o,t[4]=-a*f,t[8]=p+h*o,t[1]=h+p*o,t[5]=a*u,t[9]=x-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*u,h=a*f,p=o*u,x=o*f;t[0]=c*u,t[4]=p*l-h,t[8]=d*l+x,t[1]=c*f,t[5]=x*l+d,t[9]=h*l-p,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,h=a*l,p=o*c,x=o*l;t[0]=c*u,t[4]=x-d*f,t[8]=p*f+h,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=h*f+p,t[10]=d-x*f}else if(e.order==="XZY"){let d=a*c,h=a*l,p=o*c,x=o*l;t[0]=c*u,t[4]=-f,t[8]=l*u,t[1]=d*f+x,t[5]=a*u,t[9]=h*f-p,t[2]=p*f-h,t[6]=o*u,t[10]=x*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Wf,e,Xf)}lookAt(e,t,n){let s=this.elements;return Un.subVectors(e,t),Un.lengthSq()===0&&(Un.z=1),Un.normalize(),Xi.crossVectors(n,Un),Xi.lengthSq()===0&&(Math.abs(n.z)===1?Un.x+=1e-4:Un.z+=1e-4,Un.normalize(),Xi.crossVectors(n,Un)),Xi.normalize(),Xa.crossVectors(Un,Xi),s[0]=Xi.x,s[4]=Xa.x,s[8]=Un.x,s[1]=Xi.y,s[5]=Xa.y,s[9]=Un.y,s[2]=Xi.z,s[6]=Xa.z,s[10]=Un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],f=n[5],d=n[9],h=n[13],p=n[2],x=n[6],g=n[10],m=n[14],S=n[3],b=n[7],_=n[11],E=n[15],w=s[0],R=s[4],v=s[8],A=s[12],P=s[1],F=s[5],M=s[9],I=s[13],L=s[2],U=s[6],V=s[10],B=s[14],G=s[3],O=s[7],q=s[11],K=s[15];return r[0]=a*w+o*P+c*L+l*G,r[4]=a*R+o*F+c*U+l*O,r[8]=a*v+o*M+c*V+l*q,r[12]=a*A+o*I+c*B+l*K,r[1]=u*w+f*P+d*L+h*G,r[5]=u*R+f*F+d*U+h*O,r[9]=u*v+f*M+d*V+h*q,r[13]=u*A+f*I+d*B+h*K,r[2]=p*w+x*P+g*L+m*G,r[6]=p*R+x*F+g*U+m*O,r[10]=p*v+x*M+g*V+m*q,r[14]=p*A+x*I+g*B+m*K,r[3]=S*w+b*P+_*L+E*G,r[7]=S*R+b*F+_*U+E*O,r[11]=S*v+b*M+_*V+E*q,r[15]=S*A+b*I+_*B+E*K,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],f=e[6],d=e[10],h=e[14],p=e[3],x=e[7],g=e[11],m=e[15],S=c*h-l*d,b=o*h-l*f,_=o*d-c*f,E=a*h-l*u,w=a*d-c*u,R=a*f-o*u;return t*(x*S-g*b+m*_)-n*(p*S-g*E+m*w)+s*(p*b-x*E+m*R)-r*(p*_-x*w+g*R)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],u=e[10];return t*(a*u-o*l)-n*(r*u-o*c)+s*(r*l-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],f=e[9],d=e[10],h=e[11],p=e[12],x=e[13],g=e[14],m=e[15],S=t*o-n*a,b=t*c-s*a,_=t*l-r*a,E=n*c-s*o,w=n*l-r*o,R=s*l-r*c,v=u*x-f*p,A=u*g-d*p,P=u*m-h*p,F=f*g-d*x,M=f*m-h*x,I=d*m-h*g,L=S*I-b*M+_*F+E*P-w*A+R*v;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/L;return e[0]=(o*I-c*M+l*F)*U,e[1]=(s*M-n*I-r*F)*U,e[2]=(x*R-g*w+m*E)*U,e[3]=(d*w-f*R-h*E)*U,e[4]=(c*P-a*I-l*A)*U,e[5]=(t*I-s*P+r*A)*U,e[6]=(g*_-p*R-m*b)*U,e[7]=(u*R-d*_+h*b)*U,e[8]=(a*M-o*P+l*v)*U,e[9]=(n*P-t*M-r*v)*U,e[10]=(p*w-x*_+m*S)*U,e[11]=(f*_-u*w-h*S)*U,e[12]=(o*A-a*F-c*v)*U,e[13]=(t*F-n*A+s*v)*U,e[14]=(x*b-p*E-g*S)*U,e[15]=(u*E-f*b+d*S)*U,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+n,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,u=a+a,f=o+o,d=r*l,h=r*u,p=r*f,x=a*u,g=a*f,m=o*f,S=c*l,b=c*u,_=c*f,E=n.x,w=n.y,R=n.z;return s[0]=(1-(x+m))*E,s[1]=(h+_)*E,s[2]=(p-b)*E,s[3]=0,s[4]=(h-_)*w,s[5]=(1-(d+m))*w,s[6]=(g+S)*w,s[7]=0,s[8]=(p+b)*R,s[9]=(g-S)*R,s[10]=(1-(d+x))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Ps.set(s[0],s[1],s[2]).length(),o=Ps.set(s[4],s[5],s[6]).length(),c=Ps.set(s[8],s[9],s[10]).length();r<0&&(a=-a),jn.copy(this);let l=1/a,u=1/o,f=1/c;return jn.elements[0]*=l,jn.elements[1]*=l,jn.elements[2]*=l,jn.elements[4]*=u,jn.elements[5]*=u,jn.elements[6]*=u,jn.elements[8]*=f,jn.elements[9]*=f,jn.elements[10]*=f,t.setFromRotationMatrix(jn),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,s,r,a,o=ni,c=!1){let l=this.elements,u=2*r/(t-e),f=2*r/(n-s),d=(t+e)/(t-e),h=(n+s)/(n-s),p,x;if(c)p=r/(a-r),x=a*r/(a-r);else if(o===ni)p=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Js)p=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=ni,c=!1){let l=this.elements,u=2/(t-e),f=2/(n-s),d=-(t+e)/(t-e),h=-(n+s)/(n-s),p,x;if(c)p=1/(a-r),x=a/(a-r);else if(o===ni)p=-2/(a-r),x=-(a+r)/(a-r);else if(o===Js)p=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=f,l[9]=0,l[13]=h,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};ll.prototype.isMatrix4=!0;var st=ll,Ps=new C,jn=new st,Wf=new C(0,0,0),Xf=new C(1,1,1),Xi=new C,Xa=new C,Un=new C,hu=new st,uu=new Yt,ii=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],f=s[2],d=s[6],h=s[10];switch(t){case"XYZ":this._y=Math.asin(At(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-At(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(At(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-At(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(At(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-At(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,h),this._y=0);break;default:ot("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return hu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return uu.setFromEuler(this),this.setFromQuaternion(uu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ii.DEFAULT_ORDER="XYZ";var Qs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},qf=0,du=new C,Is=new Yt,Di=new st,qa=new C,br=new C,Yf=new C,Zf=new Yt,fu=new C(1,0,0),pu=new C(0,1,0),mu=new C(0,0,1),gu={type:"added"},Jf={type:"removed"},Ds={type:"childadded",child:null},Ec={type:"childremoved",child:null},jt=class i extends xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qf++}),this.uuid=Oi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new C,t=new ii,n=new Yt,s=new C(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new st},normalMatrix:{value:new mt}}),this.matrix=new st,this.matrixWorld=new st,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Is.setFromAxisAngle(e,t),this.quaternion.multiply(Is),this}rotateOnWorldAxis(e,t){return Is.setFromAxisAngle(e,t),this.quaternion.premultiply(Is),this}rotateX(e){return this.rotateOnAxis(fu,e)}rotateY(e){return this.rotateOnAxis(pu,e)}rotateZ(e){return this.rotateOnAxis(mu,e)}translateOnAxis(e,t){return du.copy(e).applyQuaternion(this.quaternion),this.position.add(du.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(fu,e)}translateY(e){return this.translateOnAxis(pu,e)}translateZ(e){return this.translateOnAxis(mu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Di.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?qa.copy(e):qa.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),br.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Di.lookAt(br,qa,this.up):Di.lookAt(qa,br,this.up),this.quaternion.setFromRotationMatrix(Di),s&&(Di.extractRotation(s.matrixWorld),Is.setFromRotationMatrix(Di),this.quaternion.premultiply(Is.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ct("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(gu),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null):ct("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Jf),Ec.child=e,this.dispatchEvent(Ec),Ec.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Di.multiply(e.parent.matrixWorld)),e.applyMatrix4(Di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(gu),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(br,e,Yf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(br,Zf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let f=c[l];r(e.shapes,f)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),f=a(e.shapes),d=a(e.skeletons),h=a(e.animations),p=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),h.length>0&&(n.animations=h),p.length>0&&(n.nodes=p)}return n.object=s,n;function a(o){let c=[];for(let l in o){let u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};jt.DEFAULT_UP=new C(0,1,0);jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Tt=class extends jt{constructor(){super(),this.isGroup=!0,this.type="Group"}},$f={type:"move"},js=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,n),m=this._getHandJoint(l,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,p=.005;l.inputState.pinching&&d>h+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=h-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent($f)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Tt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},bd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qi={h:0,s:0,l:0},Ya={h:0,s:0,l:0};function bc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Be=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=wt.workingColorSpace){return this.r=e,this.g=t,this.b=n,wt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=wt.workingColorSpace){if(e=zf(e,1),t=At(t,0,1),n=At(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=bc(a,r,e+1/3),this.g=bc(a,r,e),this.b=bc(a,r,e-1/3)}return wt.colorSpaceToWorking(this,s),this}setStyle(e,t=Ft){function n(r){r!==void 0&&parseFloat(r)<1&&ot("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:ot("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);ot("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ft){let n=bd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):ot("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bi(e.r),this.g=Bi(e.g),this.b=Bi(e.b),this}copyLinearToSRGB(e){return this.r=Ys(e.r),this.g=Ys(e.g),this.b=Ys(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ft){return wt.workingToColorSpace(Mn.copy(this),e),Math.round(At(Mn.r*255,0,255))*65536+Math.round(At(Mn.g*255,0,255))*256+Math.round(At(Mn.b*255,0,255))}getHexString(e=Ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=wt.workingColorSpace){wt.workingToColorSpace(Mn.copy(this),t);let n=Mn.r,s=Mn.g,r=Mn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,u=(o+a)/2;if(o===a)c=0,l=0;else{let f=a-o;switch(l=u<=.5?f/(a+o):f/(2-a-o),a){case n:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-n)/f+2;break;case r:c=(n-s)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=wt.workingColorSpace){return wt.workingToColorSpace(Mn.copy(this),t),e.r=Mn.r,e.g=Mn.g,e.b=Mn.b,e}getStyle(e=Ft){wt.workingToColorSpace(Mn.copy(this),e);let t=Mn.r,n=Mn.g,s=Mn.b;return e!==Ft?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(qi),this.setHSL(qi.h+e,qi.s+t,qi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(qi),e.getHSL(Ya);let n=_c(qi.h,Ya.h,t),s=_c(qi.s,Ya.s,t),r=_c(qi.l,Ya.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Mn=new Be;Be.NAMES=bd;var kr=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Be(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ms=class extends jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ii,this.environmentIntensity=1,this.environmentRotation=new ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},ei=new C,Li=new C,Tc=new C,Ui=new C,Ls=new C,Us=new C,xu=new C,wc=new C,Ac=new C,Rc=new C,Cc=new Vt,Pc=new Vt,Ic=new Vt,pi=class i{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),ei.subVectors(e,t),s.cross(ei);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){ei.subVectors(s,t),Li.subVectors(n,t),Tc.subVectors(e,t);let a=ei.dot(ei),o=ei.dot(Li),c=ei.dot(Tc),l=Li.dot(Li),u=Li.dot(Tc),f=a*l-o*o;if(f===0)return r.set(0,0,0),null;let d=1/f,h=(l*c-o*u)*d,p=(a*u-o*c)*d;return r.set(1-h-p,p,h)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ui)===null?!1:Ui.x>=0&&Ui.y>=0&&Ui.x+Ui.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,Ui)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ui.x),c.addScaledVector(a,Ui.y),c.addScaledVector(o,Ui.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return Cc.setScalar(0),Pc.setScalar(0),Ic.setScalar(0),Cc.fromBufferAttribute(e,t),Pc.fromBufferAttribute(e,n),Ic.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Cc,r.x),a.addScaledVector(Pc,r.y),a.addScaledVector(Ic,r.z),a}static isFrontFacing(e,t,n,s){return ei.subVectors(n,t),Li.subVectors(e,t),ei.cross(Li).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ei.subVectors(this.c,this.b),Li.subVectors(this.a,this.b),ei.cross(Li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Ls.subVectors(s,n),Us.subVectors(r,n),wc.subVectors(e,n);let c=Ls.dot(wc),l=Us.dot(wc);if(c<=0&&l<=0)return t.copy(n);Ac.subVectors(e,s);let u=Ls.dot(Ac),f=Us.dot(Ac);if(u>=0&&f<=u)return t.copy(s);let d=c*f-u*l;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(Ls,a);Rc.subVectors(e,r);let h=Ls.dot(Rc),p=Us.dot(Rc);if(p>=0&&h<=p)return t.copy(r);let x=h*l-c*p;if(x<=0&&l>=0&&p<=0)return o=l/(l-p),t.copy(n).addScaledVector(Us,o);let g=u*p-h*f;if(g<=0&&f-u>=0&&h-p>=0)return xu.subVectors(r,s),o=(f-u)/(f-u+(h-p)),t.copy(s).addScaledVector(xu,o);let m=1/(g+x+d);return a=x*m,o=d*m,t.copy(n).addScaledVector(Ls,a).addScaledVector(Us,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},_i=class{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ti.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ti.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ti.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ti):ti.fromBufferAttribute(r,a),ti.applyMatrix4(e.matrixWorld),this.expandByPoint(ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Za.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Za.copy(n.boundingBox)),Za.applyMatrix4(e.matrixWorld),this.union(Za)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ti),ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Tr),Ja.subVectors(this.max,Tr),Ns.subVectors(e.a,Tr),Fs.subVectors(e.b,Tr),Os.subVectors(e.c,Tr),Yi.subVectors(Fs,Ns),Zi.subVectors(Os,Fs),cs.subVectors(Ns,Os);let t=[0,-Yi.z,Yi.y,0,-Zi.z,Zi.y,0,-cs.z,cs.y,Yi.z,0,-Yi.x,Zi.z,0,-Zi.x,cs.z,0,-cs.x,-Yi.y,Yi.x,0,-Zi.y,Zi.x,0,-cs.y,cs.x,0];return!Dc(t,Ns,Fs,Os,Ja)||(t=[1,0,0,0,1,0,0,0,1],!Dc(t,Ns,Fs,Os,Ja))?!1:($a.crossVectors(Yi,Zi),t=[$a.x,$a.y,$a.z],Dc(t,Ns,Fs,Os,Ja))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ni=[new C,new C,new C,new C,new C,new C,new C,new C],ti=new C,Za=new _i,Ns=new C,Fs=new C,Os=new C,Yi=new C,Zi=new C,cs=new C,Tr=new C,Ja=new C,$a=new C,hs=new C;function Dc(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){hs.fromArray(i,r);let o=s.x*Math.abs(hs.x)+s.y*Math.abs(hs.y)+s.z*Math.abs(hs.z),c=e.dot(hs),l=t.dot(hs),u=n.dot(hs);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}var nn=new C,Ka=new Se,Kf=0,_t=class extends xi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Kf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=_h,this.updateRanges=[],this.gpuType=Yn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ka.fromBufferAttribute(this,t),Ka.applyMatrix3(e),this.setXY(t,Ka.x,Ka.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix3(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix4(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyNormalMatrix(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.transformDirection(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=fi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Nt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=fi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=fi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=fi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=fi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array),s=Nt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array),s=Nt(s,this.array),r=Nt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Wr=class extends _t{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Xr=class extends _t{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var vt=class extends _t{constructor(e,t,n){super(new Float32Array(e),t,n)}},Qf=new _i,wr=new C,Lc=new C,vi=class{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Qf.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;wr.subVectors(e,this.center);let t=wr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(wr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Lc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(wr.copy(e.center).add(Lc)),this.expandByPoint(wr.copy(e.center).sub(Lc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},jf=0,Vn=new st,Uc=new jt,Bs=new C,Nn=new _i,Ar=new _i,hn=new C,St=class i extends xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jf++}),this.uuid=Oi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Bf(e)?Xr:Wr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new mt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Vn.makeRotationFromQuaternion(e),this.applyMatrix4(Vn),this}rotateX(e){return Vn.makeRotationX(e),this.applyMatrix4(Vn),this}rotateY(e){return Vn.makeRotationY(e),this.applyMatrix4(Vn),this}rotateZ(e){return Vn.makeRotationZ(e),this.applyMatrix4(Vn),this}translate(e,t,n){return Vn.makeTranslation(e,t,n),this.applyMatrix4(Vn),this}scale(e,t,n){return Vn.makeScale(e,t,n),this.applyMatrix4(Vn),this}lookAt(e){return Uc.lookAt(e),Uc.updateMatrix(),this.applyMatrix4(Uc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bs).negate(),this.translate(Bs.x,Bs.y,Bs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new vt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&ot("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _i);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ct("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Nn.setFromBufferAttribute(r),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ct('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ct("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){let n=this.boundingSphere.center;if(Nn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Ar.setFromBufferAttribute(o),this.morphTargetsRelative?(hn.addVectors(Nn.min,Ar.min),Nn.expandByPoint(hn),hn.addVectors(Nn.max,Ar.max),Nn.expandByPoint(hn)):(Nn.expandByPoint(Ar.min),Nn.expandByPoint(Ar.max))}Nn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)hn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(hn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)hn.fromBufferAttribute(o,l),c&&(Bs.fromBufferAttribute(e,l),hn.add(Bs)),s=Math.max(s,n.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ct('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ct("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new _t(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let v=0;v<n.count;v++)o[v]=new C,c[v]=new C;let l=new C,u=new C,f=new C,d=new Se,h=new Se,p=new Se,x=new C,g=new C;function m(v,A,P){l.fromBufferAttribute(n,v),u.fromBufferAttribute(n,A),f.fromBufferAttribute(n,P),d.fromBufferAttribute(r,v),h.fromBufferAttribute(r,A),p.fromBufferAttribute(r,P),u.sub(l),f.sub(l),h.sub(d),p.sub(d);let F=1/(h.x*p.y-p.x*h.y);isFinite(F)&&(x.copy(u).multiplyScalar(p.y).addScaledVector(f,-h.y).multiplyScalar(F),g.copy(f).multiplyScalar(h.x).addScaledVector(u,-p.x).multiplyScalar(F),o[v].add(x),o[A].add(x),o[P].add(x),c[v].add(g),c[A].add(g),c[P].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let v=0,A=S.length;v<A;++v){let P=S[v],F=P.start,M=P.count;for(let I=F,L=F+M;I<L;I+=3)m(e.getX(I+0),e.getX(I+1),e.getX(I+2))}let b=new C,_=new C,E=new C,w=new C;function R(v){E.fromBufferAttribute(s,v),w.copy(E);let A=o[v];b.copy(A),b.sub(E.multiplyScalar(E.dot(A))).normalize(),_.crossVectors(w,A);let F=_.dot(c[v])<0?-1:1;a.setXYZW(v,b.x,b.y,b.z,F)}for(let v=0,A=S.length;v<A;++v){let P=S[v],F=P.start,M=P.count;for(let I=F,L=F+M;I<L;I+=3)R(e.getX(I+0)),R(e.getX(I+1)),R(e.getX(I+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new _t(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,h=n.count;d<h;d++)n.setXYZ(d,0,0,0);let s=new C,r=new C,a=new C,o=new C,c=new C,l=new C,u=new C,f=new C;if(e)for(let d=0,h=e.count;d<h;d+=3){let p=e.getX(d+0),x=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,g),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),o.fromBufferAttribute(n,p),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,g),o.add(u),c.add(u),l.add(u),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,h=t.count;d<h;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)hn.fromBufferAttribute(e,t),hn.normalize(),e.setXYZ(t,hn.x,hn.y,hn.z)}toNonIndexed(){function e(o,c){let l=o.array,u=o.itemSize,f=o.normalized,d=new l.constructor(c.length*u),h=0,p=0;for(let x=0,g=c.length;x<g;x++){o.isInterleavedBufferAttribute?h=c[x]*o.data.stride+o.offset:h=c[x]*u;for(let m=0;m<u;m++)d[p++]=l[h++]}return new _t(d,u,f)}if(this.index===null)return ot("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let u=0,f=l.length;u<f;u++){let d=l[u],h=e(d,n);c.push(h)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let f=0,d=l.length;f<d;f++){let h=l[f];u.push(h.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(t))}let r=e.morphAttributes;for(let l in r){let u=[],f=r[l];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,u=a.length;l<u;l++){let f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},qr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=_h,this.updateRanges=[],this.version=0,this.uuid=Oi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Oi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Oi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},wn=new C,er=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)wn.fromBufferAttribute(this,t),wn.applyMatrix4(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)wn.fromBufferAttribute(this,t),wn.applyNormalMatrix(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)wn.fromBufferAttribute(this,t),wn.transformDirection(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=fi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Nt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Nt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=fi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=fi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=fi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=fi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array),s=Nt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array),s=Nt(s,this.array),r=Nt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Vr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new _t(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Vr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Nc=new C,ep=new C,tp=new mt,Fn=class{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Nc.subVectors(n,t).cross(ep.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Nc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||tp.getNormalMatrix(e),s=this.coplanarPoint(Nc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},np=0,Gn=class extends xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:np++}),this.uuid=Oi(),this.name="",this.type="Material",this.blending=ur,this.side=ns,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=lh,this.blendDst=ch,this.blendEquation=qn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=Zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=To,this.stencilZFail=To,this.stencilZPass=To,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){ot(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){ot(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Be().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Fn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Se().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Se().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},mn=class extends Gn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Hs,Rr=new C,zs=new C,Vs=new C,Gs=new Se,Cr=new Se,Td=new st,Qa=new C,Pr=new C,ja=new C,_u=new Se,Fc=new Se,vu=new Se,Sn=class extends jt{constructor(e=new mn){if(super(),this.isSprite=!0,this.type="Sprite",Hs===void 0){Hs=new St;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new qr(t,5);Hs.setIndex([0,1,2,0,2,3]),Hs.setAttribute("position",new er(n,3,0,!1)),Hs.setAttribute("uv",new er(n,2,3,!1))}this.geometry=Hs,this.material=e,this.center=new Se(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&ct('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),zs.setFromMatrixScale(this.matrixWorld),Td.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Vs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&zs.multiplyScalar(-Vs.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;eo(Qa.set(-.5,-.5,0),Vs,a,zs,s,r),eo(Pr.set(.5,-.5,0),Vs,a,zs,s,r),eo(ja.set(.5,.5,0),Vs,a,zs,s,r),_u.set(0,0),Fc.set(1,0),vu.set(1,1);let o=e.ray.intersectTriangle(Qa,Pr,ja,!1,Rr);if(o===null&&(eo(Pr.set(-.5,.5,0),Vs,a,zs,s,r),Fc.set(0,1),o=e.ray.intersectTriangle(Qa,ja,Pr,!1,Rr),o===null))return;let c=e.ray.origin.distanceTo(Rr);c<e.near||c>e.far||t.push({distance:c,point:Rr.clone(),uv:pi.getInterpolation(Rr,Qa,Pr,ja,_u,Fc,vu,new Se),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function eo(i,e,t,n,s,r){Gs.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Cr.x=r*Gs.x-s*Gs.y,Cr.y=s*Gs.x+r*Gs.y):Cr.copy(Gs),i.copy(e),i.x+=Cr.x,i.y+=Cr.y,i.applyMatrix4(Td)}var Fi=new C,Oc=new C,to=new C,no=new C,gs=class{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Fi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Fi.copy(this.origin).addScaledVector(this.direction,t),Fi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Oc.copy(e).add(t).multiplyScalar(.5),to.copy(t).sub(e).normalize(),no.copy(this.origin).sub(Oc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(to),o=no.dot(this.direction),c=-no.dot(to),l=no.lengthSq(),u=Math.abs(1-a*a),f,d,h,p;if(u>0)if(f=a*c-o,d=a*o-c,p=r*u,f>=0)if(d>=-p)if(d<=p){let x=1/u;f*=x,d*=x,h=f*(f+a*d+2*o)+d*(a*f+d+2*c)+l}else d=r,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*c)+l;else d=-r,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*c)+l;else d<=-p?(f=Math.max(0,-(-a*r+o)),d=f>0?-r:Math.min(Math.max(-r,-c),r),h=-f*f+d*(d+2*c)+l):d<=p?(f=0,d=Math.min(Math.max(-r,-c),r),h=d*(d+2*c)+l):(f=Math.max(0,-(a*r+o)),d=f>0?r:Math.min(Math.max(-r,-c),r),h=-f*f+d*(d+2*c)+l);else d=a>0?-r:r,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Oc).addScaledVector(to,d),h}intersectSphere(e,t){if(e.radius<0)return null;Fi.subVectors(e.center,this.origin);let n=Fi.dot(this.direction),s=Fi.dot(Fi)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-d.z)*f,c=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,c=(e.min.z-d.z)*f),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Fi)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,u=o.z,f=e.x-a.x,d=e.y-a.y,h=e.z-a.z,p=t.x-a.x,x=t.y-a.y,g=t.z-a.z,m=n.x-a.x,S=n.y-a.y,b=n.z-a.z,_=Math.abs(c),E=Math.abs(l),w=Math.abs(u),R,v,A,P,F,M,I,L,U,V,B,G;if(_>=E&&_>=w?(A=c,M=f,U=p,G=m,c>=0?(R=l,v=u,P=d,F=h,I=x,L=g,V=S,B=b):(R=u,v=l,P=h,F=d,I=g,L=x,V=b,B=S)):E>=w?(A=l,M=d,U=x,G=S,l>=0?(R=u,v=c,P=h,F=f,I=g,L=p,V=b,B=m):(R=c,v=u,P=f,F=h,I=p,L=g,V=m,B=b)):(A=u,M=h,U=g,G=b,u>=0?(R=c,v=l,P=f,F=d,I=p,L=x,V=m,B=S):(R=l,v=c,P=d,F=f,I=x,L=p,V=S,B=m)),A===0)return null;let O=R/A,q=v/A,K=1/A,ie=P-O*M,ve=F-q*M,De=I-O*U,Le=L-q*U,Ye=V-O*G,Y=B-q*G,ne=Ye*Le-Y*De,ye=ie*Y-ve*Ye,pe=De*ve-Le*ie;if(s){if(ne<0||ye<0||pe<0)return null}else if((ne<0||ye<0||pe<0)&&(ne>0||ye>0||pe>0))return null;let Me=ne+ye+pe;if(Me===0)return null;let Ue=K*(ne*M+ye*U+pe*G);return(Me>0?Ue<0:Ue>0)?null:this.at(Ue/Me,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ut=class extends Gn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.combine=hh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},yu=new st,us=new gs,io=new vi,Mu=new C,so=new C,ro=new C,ao=new C,Bc=new C,oo=new C,Su=new C,lo=new C,Re=class extends jt{constructor(e=new St,t=new Ut){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){oo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=o[c],f=r[c];u!==0&&(Bc.fromBufferAttribute(f,e),a?oo.addScaledVector(Bc,u):oo.addScaledVector(Bc.sub(t),u))}t.add(oo)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),io.copy(n.boundingSphere),io.applyMatrix4(r),us.copy(e.ray).recast(e.near),!(io.containsPoint(us.origin)===!1&&(us.intersectSphere(io,Mu)===null||us.origin.distanceToSquared(Mu)>(e.far-e.near)**2))&&(yu.copy(r).invert(),us.copy(e.ray).applyMatrix4(yu),!(n.boundingBox!==null&&us.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,us)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,d=r.groups,h=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,x=d.length;p<x;p++){let g=d[p],m=a[g.materialIndex],S=Math.max(g.start,h.start),b=Math.min(o.count,Math.min(g.start+g.count,h.start+h.count));for(let _=S,E=b;_<E;_+=3){let w=o.getX(_),R=o.getX(_+1),v=o.getX(_+2);s=co(this,m,e,n,l,u,f,w,R,v),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,h.start),x=Math.min(o.count,h.start+h.count);for(let g=p,m=x;g<m;g+=3){let S=o.getX(g),b=o.getX(g+1),_=o.getX(g+2);s=co(this,a,e,n,l,u,f,S,b,_),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let p=0,x=d.length;p<x;p++){let g=d[p],m=a[g.materialIndex],S=Math.max(g.start,h.start),b=Math.min(c.count,Math.min(g.start+g.count,h.start+h.count));for(let _=S,E=b;_<E;_+=3){let w=_,R=_+1,v=_+2;s=co(this,m,e,n,l,u,f,w,R,v),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,h.start),x=Math.min(c.count,h.start+h.count);for(let g=p,m=x;g<m;g+=3){let S=g,b=g+1,_=g+2;s=co(this,a,e,n,l,u,f,S,b,_),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function ip(i,e,t,n,s,r,a,o){let c;if(e.side===un?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===ns,o),c===null)return null;lo.copy(o),lo.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(lo);return l<t.near||l>t.far?null:{distance:l,point:lo.clone(),object:i}}function co(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,so),i.getVertexPosition(c,ro),i.getVertexPosition(l,ao);let u=ip(i,e,t,n,so,ro,ao,Su);if(u){let f=new C;pi.getBarycoord(Su,so,ro,ao,f),s&&(u.uv=pi.getInterpolatedAttribute(s,o,c,l,f,new Se)),r&&(u.uv1=pi.getInterpolatedAttribute(r,o,c,l,f,new Se)),a&&(u.normal=pi.getInterpolatedAttribute(a,o,c,l,f,new C),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new C,materialIndex:0};pi.getNormal(so,ro,ao,d.normal),u.face=d,u.barycoord=f}return u}var kn=class extends An{constructor(e=null,t=1,n=1,s,r,a,o,c,l=Qt,u=Qt,f,d){super(null,a,o,c,l,u,s,r,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var tr=class extends _t{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ks=new st,Eu=new st,ho=[],bu=new _i,sp=new st,Ir=new Re,Dr=new vi,si=class extends Re{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new tr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,sp)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new _i),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ks),bu.copy(e.boundingBox).applyMatrix4(ks),this.boundingBox.union(bu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new vi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ks),Dr.copy(e.boundingSphere).applyMatrix4(ks),this.boundingSphere.union(Dr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Ir.geometry=this.geometry,Ir.material=this.material,Ir.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Dr.copy(this.boundingSphere),Dr.applyMatrix4(n),e.ray.intersectsSphere(Dr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ks),Eu.multiplyMatrices(n,ks),Ir.matrixWorld=Eu,Ir.raycast(e,ho);for(let a=0,o=ho.length;a<o;a++){let c=ho[a];c.instanceId=r,c.object=this,t.push(c)}ho.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new tr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new kn(new Float32Array(s*this.count),s,this.count,gl,Yn));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ds=new vi,rp=new Se(.5,.5),uo=new C,nr=class{constructor(e=new Fn,t=new Fn,n=new Fn,s=new Fn,r=new Fn,a=new Fn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ni,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],u=r[4],f=r[5],d=r[6],h=r[7],p=r[8],x=r[9],g=r[10],m=r[11],S=r[12],b=r[13],_=r[14],E=r[15];if(s[0].setComponents(l-a,h-u,m-p,E-S).normalize(),s[1].setComponents(l+a,h+u,m+p,E+S).normalize(),s[2].setComponents(l+o,h+f,m+x,E+b).normalize(),s[3].setComponents(l-o,h-f,m-x,E-b).normalize(),n)s[4].setComponents(c,d,g,_).normalize(),s[5].setComponents(l-c,h-d,m-g,E-_).normalize();else if(s[4].setComponents(l-c,h-d,m-g,E-_).normalize(),t===ni)s[5].setComponents(l+c,h+d,m+g,E+_).normalize();else if(t===Js)s[5].setComponents(c,d,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ds.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ds.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ds)}intersectsSprite(e){ds.center.set(0,0,0);let t=rp.distanceTo(e.center);return ds.radius=.7071067811865476+t,ds.applyMatrix4(e.matrixWorld),this.intersectsSphere(ds)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(uo.x=s.normal.x>0?e.max.x:e.min.x,uo.y=s.normal.y>0?e.max.y:e.min.y,uo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(uo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var $i=class extends Gn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},zo=new C,Vo=new C,Tu=new st,Lr=new gs,fo=new vi,Hc=new C,wu=new C,Go=class extends jt{constructor(e=new St,t=new $i){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)zo.fromBufferAttribute(t,s-1),Vo.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=zo.distanceTo(Vo);e.setAttribute("lineDistance",new vt(n,1))}else ot("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fo.copy(n.boundingSphere),fo.applyMatrix4(s),fo.radius+=r,e.ray.intersectsSphere(fo)===!1)return;Tu.copy(s).invert(),Lr.copy(e.ray).applyMatrix4(Tu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){let h=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let x=h,g=p-1;x<g;x+=l){let m=u.getX(x),S=u.getX(x+1),b=po(this,e,Lr,c,m,S,x);b&&t.push(b)}if(this.isLineLoop){let x=u.getX(p-1),g=u.getX(h),m=po(this,e,Lr,c,x,g,p-1);m&&t.push(m)}}else{let h=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let x=h,g=p-1;x<g;x+=l){let m=po(this,e,Lr,c,x,x+1,x);m&&t.push(m)}if(this.isLineLoop){let x=po(this,e,Lr,c,p-1,h,p-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function po(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(zo.fromBufferAttribute(o,s),Vo.fromBufferAttribute(o,r),t.distanceSqToSegment(zo,Vo,Hc,wu)>n)return;Hc.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Hc);if(!(l<e.near||l>e.far))return{distance:l,point:wu.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Au=new C,Ru=new C,yi=class extends Go{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Au.fromBufferAttribute(t,s),Ru.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Au.distanceTo(Ru);e.setAttribute("lineDistance",new vt(n,1))}else ot("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var gn=class extends Gn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Cu=new st,$c=new gs,mo=new vi,go=new C,En=class extends jt{constructor(e=new St,t=new gn){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),mo.copy(n.boundingSphere),mo.applyMatrix4(s),mo.radius+=r,e.ray.intersectsSphere(mo)===!1)return;Cu.copy(s).invert(),$c.copy(e.ray).applyMatrix4(Cu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,f=n.attributes.position;if(l!==null){let d=Math.max(0,a.start),h=Math.min(l.count,a.start+a.count);for(let p=d,x=h;p<x;p++){let g=l.getX(p);go.fromBufferAttribute(f,g),Pu(go,g,c,s,e,t,this)}}else{let d=Math.max(0,a.start),h=Math.min(f.count,a.start+a.count);for(let p=d,x=h;p<x;p++)go.fromBufferAttribute(f,p),Pu(go,p,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Pu(i,e,t,n,s,r,a){let o=$c.distanceSqToPoint(i);if(o<t){let c=new C;$c.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Yr=class extends An{constructor(e=[],t=ss,n,s,r,a,o,c,l,u){super(e,t,n,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},xn=class extends An{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Mi=class extends An{constructor(e,t,n=ai,s,r,a,o=Qt,c=Qt,l,u=gi,f=1){if(u!==gi&&u!==bi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:f};super(d,s,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ks(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ko=class extends Mi{constructor(e,t=ai,n=ss,s,r,a=Qt,o=Qt,c,l=gi){let u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,n,s,r,a,o,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Zr=class extends An{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},It=class i extends St{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],u=[],f=[],d=0,h=0;p("z","y","x",-1,-1,n,t,e,a,r,0),p("z","y","x",1,-1,n,t,-e,a,r,1),p("x","z","y",1,1,e,n,t,s,a,2),p("x","z","y",1,-1,e,n,-t,s,a,3),p("x","y","z",1,-1,e,t,n,s,r,4),p("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new vt(l,3)),this.setAttribute("normal",new vt(u,3)),this.setAttribute("uv",new vt(f,2));function p(x,g,m,S,b,_,E,w,R,v,A){let P=_/R,F=E/v,M=_/2,I=E/2,L=w/2,U=R+1,V=v+1,B=0,G=0,O=new C;for(let q=0;q<V;q++){let K=q*F-I;for(let ie=0;ie<U;ie++){let ve=ie*P-M;O[x]=ve*S,O[g]=K*b,O[m]=L,l.push(O.x,O.y,O.z),O[x]=0,O[g]=0,O[m]=w>0?1:-1,u.push(O.x,O.y,O.z),f.push(ie/R),f.push(1-q/v),B+=1}}for(let q=0;q<v;q++)for(let K=0;K<R;K++){let ie=d+K+U*q,ve=d+K+U*(q+1),De=d+(K+1)+U*(q+1),Le=d+(K+1)+U*q;c.push(ie,ve,Le),c.push(ve,De,Le),G+=6}o.addGroup(h,G,A),h+=G,d+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Ot=class i extends St{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let u=[],f=[],d=[],h=[],p=0,x=[],g=n/2,m=0;S(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new vt(f,3)),this.setAttribute("normal",new vt(d,3)),this.setAttribute("uv",new vt(h,2));function S(){let _=new C,E=new C,w=0,R=(t-e)/n;for(let v=0;v<=r;v++){let A=[],P=v/r,F=P*(t-e)+e;for(let M=0;M<=s;M++){let I=M/s,L=I*c+o,U=Math.sin(L),V=Math.cos(L);E.x=F*U,E.y=-P*n+g,E.z=F*V,f.push(E.x,E.y,E.z),_.set(U,R,V).normalize(),d.push(_.x,_.y,_.z),h.push(I,1-P),A.push(p++)}x.push(A)}for(let v=0;v<s;v++)for(let A=0;A<r;A++){let P=x[A][v],F=x[A+1][v],M=x[A+1][v+1],I=x[A][v+1];(e>0||A!==0)&&(u.push(P,F,I),w+=3),(t>0||A!==r-1)&&(u.push(F,M,I),w+=3)}l.addGroup(m,w,0),m+=w}function b(_){let E=p,w=new Se,R=new C,v=0,A=_===!0?e:t,P=_===!0?1:-1;for(let M=1;M<=s;M++)f.push(0,g*P,0),d.push(0,P,0),h.push(.5,.5),p++;let F=p;for(let M=0;M<=s;M++){let L=M/s*c+o,U=Math.cos(L),V=Math.sin(L);R.x=A*V,R.y=g*P,R.z=A*U,f.push(R.x,R.y,R.z),d.push(0,P,0),w.x=U*.5+.5,w.y=V*.5*P+.5,h.push(w.x,w.y),p++}for(let M=0;M<s;M++){let I=E+M,L=F+M;_===!0?u.push(L,L+1,I):u.push(L+1,L,I),v+=3}l.addGroup(m,v,_===!0?1:2),m+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},xs=class i extends Ot{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Wo=class i extends St{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),l(n),u(),this.setAttribute("position",new vt(r,3)),this.setAttribute("normal",new vt(r.slice(),3)),this.setAttribute("uv",new vt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(S){let b=new C,_=new C,E=new C;for(let w=0;w<t.length;w+=3)h(t[w+0],b),h(t[w+1],_),h(t[w+2],E),c(b,_,E,S)}function c(S,b,_,E){let w=E+1,R=[];for(let v=0;v<=w;v++){R[v]=[];let A=S.clone().lerp(_,v/w),P=b.clone().lerp(_,v/w),F=w-v;for(let M=0;M<=F;M++)M===0&&v===w?R[v][M]=A:R[v][M]=A.clone().lerp(P,M/F)}for(let v=0;v<w;v++)for(let A=0;A<2*(w-v)-1;A++){let P=Math.floor(A/2);A%2===0?(d(R[v][P+1]),d(R[v+1][P]),d(R[v][P])):(d(R[v][P+1]),d(R[v+1][P+1]),d(R[v+1][P]))}}function l(S){let b=new C;for(let _=0;_<r.length;_+=3)b.x=r[_+0],b.y=r[_+1],b.z=r[_+2],b.normalize().multiplyScalar(S),r[_+0]=b.x,r[_+1]=b.y,r[_+2]=b.z}function u(){let S=new C;for(let b=0;b<r.length;b+=3){S.x=r[b+0],S.y=r[b+1],S.z=r[b+2];let _=g(S)/2/Math.PI+.5,E=m(S)/Math.PI+.5;a.push(_,1-E)}p(),f()}function f(){for(let S=0;S<a.length;S+=6){let b=a[S+0],_=a[S+2],E=a[S+4],w=Math.max(b,_,E),R=Math.min(b,_,E);w>.9&&R<.1&&(b<.2&&(a[S+0]+=1),_<.2&&(a[S+2]+=1),E<.2&&(a[S+4]+=1))}}function d(S){r.push(S.x,S.y,S.z)}function h(S,b){let _=S*3;b.x=e[_+0],b.y=e[_+1],b.z=e[_+2]}function p(){let S=new C,b=new C,_=new C,E=new C,w=new Se,R=new Se,v=new Se;for(let A=0,P=0;A<r.length;A+=9,P+=6){S.set(r[A+0],r[A+1],r[A+2]),b.set(r[A+3],r[A+4],r[A+5]),_.set(r[A+6],r[A+7],r[A+8]),w.set(a[P+0],a[P+1]),R.set(a[P+2],a[P+3]),v.set(a[P+4],a[P+5]),E.copy(S).add(b).add(_).divideScalar(3);let F=g(E);x(w,P+0,S,F),x(R,P+2,b,F),x(v,P+4,_,F)}}function x(S,b,_,E){E<0&&S.x===1&&(a[b]=S.x-1),_.x===0&&_.z===0&&(a[b]=E/2/Math.PI+.5)}function g(S){return Math.atan2(S.z,-S.x)}function m(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var xo=new C,_o=new C,zc=new C,vo=new pi,ir=class extends St{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let s=Math.pow(10,4),r=Math.cos(wo*t),a=e.getIndex(),o=e.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],u=["a","b","c"],f=new Array(3),d={},h=[];for(let p=0;p<c;p+=3){a?(l[0]=a.getX(p),l[1]=a.getX(p+1),l[2]=a.getX(p+2)):(l[0]=p,l[1]=p+1,l[2]=p+2);let{a:x,b:g,c:m}=vo;if(x.fromBufferAttribute(o,l[0]),g.fromBufferAttribute(o,l[1]),m.fromBufferAttribute(o,l[2]),vo.getNormal(zc),f[0]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,f[1]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,f[2]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let S=0;S<3;S++){let b=(S+1)%3,_=f[S],E=f[b],w=vo[u[S]],R=vo[u[b]],v=`${_}_${E}`,A=`${E}_${_}`;A in d&&d[A]?(zc.dot(d[A].normal)<=r&&(h.push(w.x,w.y,w.z),h.push(R.x,R.y,R.z)),d[A]=null):v in d||(d[v]={index0:l[S],index1:l[b],normal:zc.clone()})}}for(let p in d)if(d[p]){let{index0:x,index1:g}=d[p];xo.fromBufferAttribute(o,x),_o.fromBufferAttribute(o,g),h.push(xo.x,xo.y,xo.z),h.push(_o.x,_o.y,_o.z)}this.setAttribute("position",new vt(h,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},On=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ot("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let u=n[s],d=n[s+1]-u,h=(a-u)/d;return(s+h)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new Se:new C);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new C,s=[],r=[],a=[],o=new C,c=new st;for(let h=0;h<=e;h++){let p=h/e;s[h]=this.getTangentAt(p,new C)}r[0]=new C,a[0]=new C;let l=Number.MAX_VALUE,u=Math.abs(s[0].x),f=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),f<=l&&(l=f,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let h=1;h<=e;h++){if(r[h]=r[h-1].clone(),a[h]=a[h-1].clone(),o.crossVectors(s[h-1],s[h]),o.length()>Number.EPSILON){o.normalize();let p=Math.acos(At(s[h-1].dot(s[h]),-1,1));r[h].applyMatrix4(c.makeRotationAxis(o,p))}a[h].crossVectors(s[h],r[h])}if(t===!0){let h=Math.acos(At(r[0].dot(r[e]),-1,1));h/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(h=-h);for(let p=1;p<=e;p++)r[p].applyMatrix4(c.makeRotationAxis(s[p],h*p)),a[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},sr=class extends On{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new Se){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=c-this.aX,h=l-this.aY;c=d*u-h*f+this.aX,l=d*f+h*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Xo=class extends sr{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function yh(){let i=0,e=0,t=0,n=0;function s(r,a,o,c){i=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,u,f){let d=(a-r)/l-(o-r)/(l+u)+(o-a)/u,h=(o-a)/u-(c-a)/(u+f)+(c-o)/f;d*=u,h*=u,s(a,o,d,h)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var Iu=new C,Du=new C,Vc=new yh,Gc=new yh,kc=new yh,Wn=class extends On{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new C){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,u;this.closed||o>0?l=s[(o-1)%r]:(Du.subVectors(s[0],s[1]).add(s[0]),l=Du);let f=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(Iu.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Iu),this.curveType==="centripetal"||this.curveType==="chordal"){let h=this.curveType==="chordal"?.5:.25,p=Math.pow(l.distanceToSquared(f),h),x=Math.pow(f.distanceToSquared(d),h),g=Math.pow(d.distanceToSquared(u),h);x<1e-4&&(x=1),p<1e-4&&(p=x),g<1e-4&&(g=x),Vc.initNonuniformCatmullRom(l.x,f.x,d.x,u.x,p,x,g),Gc.initNonuniformCatmullRom(l.y,f.y,d.y,u.y,p,x,g),kc.initNonuniformCatmullRom(l.z,f.z,d.z,u.z,p,x,g)}else this.curveType==="catmullrom"&&(Vc.initCatmullRom(l.x,f.x,d.x,u.x,this.tension),Gc.initCatmullRom(l.y,f.y,d.y,u.y,this.tension),kc.initCatmullRom(l.z,f.z,d.z,u.z,this.tension));return n.set(Vc.calc(c),Gc.calc(c),kc.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new C().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Lu(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,c=i*o;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*o+r*i+t}function ap(i,e){let t=1-i;return t*t*e}function op(i,e){return 2*(1-i)*i*e}function lp(i,e){return i*i*e}function Nr(i,e,t,n){return ap(i,e)+op(i,t)+lp(i,n)}function cp(i,e){let t=1-i;return t*t*t*e}function hp(i,e){let t=1-i;return 3*t*t*i*e}function up(i,e){return 3*(1-i)*i*i*e}function dp(i,e){return i*i*i*e}function Fr(i,e,t,n,s){return cp(i,e)+hp(i,t)+up(i,n)+dp(i,s)}var Jr=class extends On{constructor(e=new Se,t=new Se,n=new Se,s=new Se){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Se){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Fr(e,s.x,r.x,a.x,o.x),Fr(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},qo=class extends On{constructor(e=new C,t=new C,n=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new C){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Fr(e,s.x,r.x,a.x,o.x),Fr(e,s.y,r.y,a.y,o.y),Fr(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},$r=class extends On{constructor(e=new Se,t=new Se){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Se){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Se){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ki=class extends On{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Kr=class extends On{constructor(e=new Se,t=new Se,n=new Se){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Se){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Nr(e,s.x,r.x,a.x),Nr(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Qr=class extends On{constructor(e=new C,t=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new C){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Nr(e,s.x,r.x,a.x),Nr(e,s.y,r.y,a.y),Nr(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},jr=class extends On{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Se){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],u=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(Lu(o,c.x,l.x,u.x,f.x),Lu(o,c.y,l.y,u.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Se().fromArray(s))}return this}},Yo=Object.freeze({__proto__:null,ArcCurve:Xo,CatmullRomCurve3:Wn,CubicBezierCurve:Jr,CubicBezierCurve3:qo,EllipseCurve:sr,LineCurve:$r,LineCurve3:Ki,QuadraticBezierCurve:Kr,QuadraticBezierCurve3:Qr,SplineCurve:jr}),rr=class extends On{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Yo[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){let u=c[l];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Yo[s.type]().fromJSON(s))}return this}},_s=class extends rr{constructor(e){super(),this.type="Path",this.currentPoint=new Se,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new $r(this.currentPoint.clone(),new Se(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Kr(this.currentPoint.clone(),new Se(e,t),new Se(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new Jr(this.currentPoint.clone(),new Se(e,t),new Se(n,s),new Se(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new jr(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,c){let l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,n,s,r,a,o,c),this}absellipse(e,t,n,s,r,a,o,c){let l=new sr(e,t,n,s,r,a,o,c);if(this.curves.length>0){let f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);let u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ri=class extends _s{constructor(e){super(e),this.uuid=Oi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new _s().fromJSON(s))}return this}};function fp(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=wd(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l;if(n&&(r=_p(i,e,r,t)),i.length>80*t){o=i[0],c=i[1];let u=o,f=c;for(let d=t;d<s;d+=t){let h=i[d],p=i[d+1];h<o&&(o=h),p<c&&(c=p),h>u&&(u=h),p>f&&(f=p)}l=Math.max(u-o,f-c),l=l!==0?32767/l:0}return ea(r,a,t,o,c,l,0),a}function wd(i,e,t,n,s){let r;if(s===Cp(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=Uu(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=Uu(a/n|0,i[a],i[a+1],r);return r&&ar(r,r.next)&&(na(r),r=r.next),r}function vs(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(ar(t,t.next)||qt(t.prev,t,t.next)===0)){if(na(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ea(i,e,t,n,s,r,a){if(!i)return;!a&&r&&Ep(i,n,s,r);let o=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?mp(i,n,s,r):pp(i)){e.push(c.i,i.i,l.i),na(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=gp(vs(i),e),ea(i,e,t,n,s,r,2)):a===2&&xp(i,e,t,n,s,r):ea(vs(i),e,t,n,s,r,1);break}}}function pp(i){let e=i.prev,t=i,n=i.next;if(qt(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,c=t.y,l=n.y,u=Math.min(s,r,a),f=Math.min(o,c,l),d=Math.max(s,r,a),h=Math.max(o,c,l),p=n.next;for(;p!==e;){if(p.x>=u&&p.x<=d&&p.y>=f&&p.y<=h&&Ur(s,o,r,c,a,l,p.x,p.y)&&qt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function mp(i,e,t,n){let s=i.prev,r=i,a=i.next;if(qt(s,r,a)>=0)return!1;let o=s.x,c=r.x,l=a.x,u=s.y,f=r.y,d=a.y,h=Math.min(o,c,l),p=Math.min(u,f,d),x=Math.max(o,c,l),g=Math.max(u,f,d),m=Kc(h,p,e,t,n),S=Kc(x,g,e,t,n),b=i.prevZ,_=i.nextZ;for(;b&&b.z>=m&&_&&_.z<=S;){if(b.x>=h&&b.x<=x&&b.y>=p&&b.y<=g&&b!==s&&b!==a&&Ur(o,u,c,f,l,d,b.x,b.y)&&qt(b.prev,b,b.next)>=0||(b=b.prevZ,_.x>=h&&_.x<=x&&_.y>=p&&_.y<=g&&_!==s&&_!==a&&Ur(o,u,c,f,l,d,_.x,_.y)&&qt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;b&&b.z>=m;){if(b.x>=h&&b.x<=x&&b.y>=p&&b.y<=g&&b!==s&&b!==a&&Ur(o,u,c,f,l,d,b.x,b.y)&&qt(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;_&&_.z<=S;){if(_.x>=h&&_.x<=x&&_.y>=p&&_.y<=g&&_!==s&&_!==a&&Ur(o,u,c,f,l,d,_.x,_.y)&&qt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function gp(i,e){let t=i;do{let n=t.prev,s=t.next.next;!ar(n,s)&&Rd(n,t,t.next,s)&&ta(n,s)&&ta(s,n)&&(e.push(n.i,t.i,s.i),na(t),na(t.next),t=i=s),t=t.next}while(t!==i);return vs(t)}function xp(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&wp(a,o)){let c=Cd(a,o);a=vs(a,a.next),c=vs(c,c.next),ea(a,e,t,n,s,r,0),ea(c,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function _p(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,c=r<a-1?e[r+1]*n:i.length,l=wd(i,o,c,n,!1);l===l.next&&(l.steiner=!0),s.push(Tp(l))}s.sort(vp);for(let r=0;r<s.length;r++)t=yp(s[r],t);return t}function vp(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function yp(i,e){let t=Mp(i,e);if(!t)return e;let n=Cd(t,i);return vs(n,n.next),vs(t,t.next)}function Mp(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(ar(i,t))return t;do{if(ar(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let f=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=n&&f>r&&(r=f,a=t.x<t.next.x?t:t.next,f===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,c=a.x,l=a.y,u=1/0;t=a;do{if(n>=t.x&&t.x>=c&&n!==t.x&&Ad(s<l?n:r,s,c,l,s<l?r:n,s,t.x,t.y)){let f=Math.abs(s-t.y)/(n-t.x);ta(t,i)&&(f<u||f===u&&(t.x>a.x||t.x===a.x&&Sp(a,t)))&&(a=t,u=f)}t=t.next}while(t!==o);return a}function Sp(i,e){return qt(i.prev,i,e.prev)<0&&qt(e.next,i,i.next)<0}function Ep(i,e,t,n){let s=i;do s.z===0&&(s.z=Kc(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,bp(s)}function bp(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let l=0;l<t&&(o++,a=a.nextZ,!!a);l++);let c=t;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function Kc(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Tp(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Ad(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Ur(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&Ad(i,e,t,n,s,r,a,o)}function wp(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Ap(i,e)&&(ta(i,e)&&ta(e,i)&&Rp(i,e)&&(qt(i.prev,i,e.prev)||qt(i,e.prev,e))||ar(i,e)&&qt(i.prev,i,i.next)>0&&qt(e.prev,e,e.next)>0)}function qt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function ar(i,e){return i.x===e.x&&i.y===e.y}function Rd(i,e,t,n){let s=Mo(qt(i,e,t)),r=Mo(qt(i,e,n)),a=Mo(qt(t,n,i)),o=Mo(qt(t,n,e));return!!(s!==r&&a!==o||s===0&&yo(i,t,e)||r===0&&yo(i,n,e)||a===0&&yo(t,i,n)||o===0&&yo(t,e,n))}function yo(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Mo(i){return i>0?1:i<0?-1:0}function Ap(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Rd(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function ta(i,e){return qt(i.prev,i,i.next)<0?qt(i,e,i.next)>=0&&qt(i,i.prev,e)>=0:qt(i,e,i.prev)<0||qt(i,i.next,e)<0}function Rp(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Cd(i,e){let t=Qc(i.i,i.x,i.y),n=Qc(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Uu(i,e,t,n){let s=Qc(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function na(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Qc(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Cp(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var jc=class{static triangulate(e,t,n=2){return fp(e,t,n)}},fs=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Nu(e),Fu(n,e);let a=e.length;t.forEach(Nu);for(let c=0;c<t.length;c++)s.push(a),a+=t[c].length,Fu(n,t[c]);let o=jc.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function Nu(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Fu(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Si=class i extends St{constructor(e=new ri([new Se(.5,.5),new Se(-.5,.5),new Se(-.5,-.5),new Se(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,c=e.length;o<c;o++){let l=e[o];a(l)}this.setAttribute("position",new vt(s,3)),this.setAttribute("uv",new vt(r,2)),this.computeVertexNormals();function a(o){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,h=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:h-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,S=t.UVGenerator!==void 0?t.UVGenerator:Pp,b,_=!1,E,w,R,v;if(m){b=m.getSpacedPoints(u),_=!0,d=!1;let fe=m.isCatmullRomCurve3?m.closed:!1;E=m.computeFrenetFrames(u,fe),w=new C,R=new C,v=new C}d||(g=0,h=0,p=0,x=0);let A=o.extractPoints(l),P=A.shape,F=A.holes;if(!fs.isClockWise(P)){P=P.reverse();for(let fe=0,he=F.length;fe<he;fe++){let Z=F[fe];fs.isClockWise(Z)&&(F[fe]=Z.reverse())}}function I(fe){let Z=10000000000000001e-36,se=fe[0];for(let ue=1;ue<=fe.length;ue++){let Te=ue%fe.length,we=fe[Te],Ge=we.x-se.x,Ze=we.y-se.y,H=Ge*Ge+Ze*Ze,dt=Math.max(Math.abs(we.x),Math.abs(we.y),Math.abs(se.x),Math.abs(se.y)),nt=Z*dt*dt;if(H<=nt){fe.splice(Te,1),ue--;continue}se=we}}I(P),F.forEach(I);let L=F.length,U=P;for(let fe=0;fe<L;fe++){let he=F[fe];P=P.concat(he)}function V(fe,he,Z){return he||ct("ExtrudeGeometry: vec does not exist"),fe.clone().addScaledVector(he,Z)}let B=P.length;function G(fe,he,Z){let se,ue,Te,we=fe.x-he.x,Ge=fe.y-he.y,Ze=Z.x-fe.x,H=Z.y-fe.y,dt=we*we+Ge*Ge,nt=we*H-Ge*Ze;if(Math.abs(nt)>Number.EPSILON){let D=Math.sqrt(dt),y=Math.sqrt(Ze*Ze+H*H),J=he.x-Ge/D,Q=he.y+we/D,re=Z.x-H/y,Pe=Z.y+Ze/y,Ee=((re-J)*H-(Pe-Q)*Ze)/(we*H-Ge*Ze);se=J+we*Ee-fe.x,ue=Q+Ge*Ee-fe.y;let ce=se*se+ue*ue;if(ce<=2)return new Se(se,ue);Te=Math.sqrt(ce/2)}else{let D=!1;we>Number.EPSILON?Ze>Number.EPSILON&&(D=!0):we<-Number.EPSILON?Ze<-Number.EPSILON&&(D=!0):Math.sign(Ge)===Math.sign(H)&&(D=!0),D?(se=-Ge,ue=we,Te=Math.sqrt(dt)):(se=we,ue=Ge,Te=Math.sqrt(dt/2))}return new Se(se/Te,ue/Te)}let O=[];for(let fe=0,he=U.length,Z=he-1,se=fe+1;fe<he;fe++,Z++,se++)Z===he&&(Z=0),se===he&&(se=0),O[fe]=G(U[fe],U[Z],U[se]);let q=[],K,ie=O.concat();for(let fe=0,he=L;fe<he;fe++){let Z=F[fe];K=[];for(let se=0,ue=Z.length,Te=ue-1,we=se+1;se<ue;se++,Te++,we++)Te===ue&&(Te=0),we===ue&&(we=0),K[se]=G(Z[se],Z[Te],Z[we]);q.push(K),ie=ie.concat(K)}let ve;if(g===0)ve=fs.triangulateShape(U,F);else{let fe=[],he=[];for(let Z=0;Z<g;Z++){let se=Z/g,ue=h*Math.cos(se*Math.PI/2),Te=p*Math.sin(se*Math.PI/2)+x;for(let we=0,Ge=U.length;we<Ge;we++){let Ze=V(U[we],O[we],Te);ye(Ze.x,Ze.y,-ue),se===0&&fe.push(Ze)}for(let we=0,Ge=L;we<Ge;we++){let Ze=F[we];K=q[we];let H=[];for(let dt=0,nt=Ze.length;dt<nt;dt++){let D=V(Ze[dt],K[dt],Te);ye(D.x,D.y,-ue),se===0&&H.push(D)}se===0&&he.push(H)}}ve=fs.triangulateShape(fe,he)}let De=ve.length,Le=p+x;for(let fe=0;fe<B;fe++){let he=d?V(P[fe],ie[fe],Le):P[fe];_?(R.copy(E.normals[0]).multiplyScalar(he.x),w.copy(E.binormals[0]).multiplyScalar(he.y),v.copy(b[0]).add(R).add(w),ye(v.x,v.y,v.z)):ye(he.x,he.y,0)}for(let fe=1;fe<=u;fe++)for(let he=0;he<B;he++){let Z=d?V(P[he],ie[he],Le):P[he];_?(R.copy(E.normals[fe]).multiplyScalar(Z.x),w.copy(E.binormals[fe]).multiplyScalar(Z.y),v.copy(b[fe]).add(R).add(w),ye(v.x,v.y,v.z)):ye(Z.x,Z.y,f/u*fe)}for(let fe=g-1;fe>=0;fe--){let he=fe/g,Z=h*Math.cos(he*Math.PI/2),se=p*Math.sin(he*Math.PI/2)+x;for(let ue=0,Te=U.length;ue<Te;ue++){let we=V(U[ue],O[ue],se);ye(we.x,we.y,f+Z)}for(let ue=0,Te=F.length;ue<Te;ue++){let we=F[ue];K=q[ue];for(let Ge=0,Ze=we.length;Ge<Ze;Ge++){let H=V(we[Ge],K[Ge],se);_?ye(H.x,H.y+b[u-1].y,b[u-1].x+Z):ye(H.x,H.y,f+Z)}}}Ye(),Y();function Ye(){let fe=s.length/3;if(d){let he=0,Z=B*he;for(let se=0;se<De;se++){let ue=ve[se];pe(ue[2]+Z,ue[1]+Z,ue[0]+Z)}he=u+g*2,Z=B*he;for(let se=0;se<De;se++){let ue=ve[se];pe(ue[0]+Z,ue[1]+Z,ue[2]+Z)}}else{for(let he=0;he<De;he++){let Z=ve[he];pe(Z[2],Z[1],Z[0])}for(let he=0;he<De;he++){let Z=ve[he];pe(Z[0]+B*u,Z[1]+B*u,Z[2]+B*u)}}n.addGroup(fe,s.length/3-fe,0)}function Y(){let fe=s.length/3,he=0;ne(U,he),he+=U.length;for(let Z=0,se=F.length;Z<se;Z++){let ue=F[Z];ne(ue,he),he+=ue.length}n.addGroup(fe,s.length/3-fe,1)}function ne(fe,he){let Z=fe.length;for(;--Z>=0;){let se=Z,ue=Z-1;ue<0&&(ue=fe.length-1);for(let Te=0,we=u+g*2;Te<we;Te++){let Ge=B*Te,Ze=B*(Te+1),H=he+se+Ge,dt=he+ue+Ge,nt=he+ue+Ze,D=he+se+Ze;Me(H,dt,nt,D)}}}function ye(fe,he,Z){c.push(fe),c.push(he),c.push(Z)}function pe(fe,he,Z){Ue(fe),Ue(he),Ue(Z);let se=s.length/3,ue=S.generateTopUV(n,s,se-3,se-2,se-1);je(ue[0]),je(ue[1]),je(ue[2])}function Me(fe,he,Z,se){Ue(fe),Ue(he),Ue(se),Ue(he),Ue(Z),Ue(se);let ue=s.length/3,Te=S.generateSideWallUV(n,s,ue-6,ue-3,ue-2,ue-1);je(Te[0]),je(Te[1]),je(Te[3]),je(Te[1]),je(Te[2]),je(Te[3])}function Ue(fe){s.push(c[fe*3+0]),s.push(c[fe*3+1]),s.push(c[fe*3+2])}function je(fe){r.push(fe.x),r.push(fe.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Ip(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Yo[s.type]().fromJSON(s)),new i(n,e.options)}},Pp={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],c=e[n*3+1],l=e[s*3],u=e[s*3+1];return[new Se(r,a),new Se(o,c),new Se(l,u)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[n*3],u=e[n*3+1],f=e[n*3+2],d=e[s*3],h=e[s*3+1],p=e[s*3+2],x=e[r*3],g=e[r*3+1],m=e[r*3+2];return Math.abs(o-u)<Math.abs(a-l)?[new Se(a,1-c),new Se(l,1-f),new Se(d,1-p),new Se(x,1-m)]:[new Se(o,1-c),new Se(u,1-f),new Se(h,1-p),new Se(g,1-m)]}};function Ip(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var ia=class i extends Wo{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Ht=class i extends St{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,u=c+1,f=e/o,d=t/c,h=[],p=[],x=[],g=[];for(let m=0;m<u;m++){let S=m*d-a;for(let b=0;b<l;b++){let _=b*f-r;p.push(_,-S,0),x.push(0,0,1),g.push(b/o),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let S=0;S<o;S++){let b=S+l*m,_=S+l*(m+1),E=S+1+l*(m+1),w=S+1+l*m;h.push(b,_,w),h.push(_,E,w)}this.setIndex(h),this.setAttribute("position",new vt(p,3)),this.setAttribute("normal",new vt(x,3)),this.setAttribute("uv",new vt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var In=class i extends St{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,u=[],f=new C,d=new C,h=[],p=[],x=[],g=[];for(let m=0;m<=n;m++){let S=[],b=m/n,_=a+b*o,E=e*Math.cos(_),w=Math.sqrt(e*e-E*E),R=0;m===0&&a===0?R=.5/t:m===n&&c===Math.PI&&(R=-.5/t);for(let v=0;v<=t;v++){let A=v/t,P=s+A*r;f.x=-w*Math.cos(P),f.y=E,f.z=w*Math.sin(P),p.push(f.x,f.y,f.z),d.copy(f).normalize(),x.push(d.x,d.y,d.z),g.push(A+R,1-b),S.push(l++)}u.push(S)}for(let m=0;m<n;m++)for(let S=0;S<t;S++){let b=u[m][S+1],_=u[m][S],E=u[m+1][S],w=u[m+1][S+1];(m!==0||a>0)&&h.push(b,_,w),(m!==n-1||c<Math.PI)&&h.push(_,E,w)}this.setIndex(h),this.setAttribute("position",new vt(p,3)),this.setAttribute("normal",new vt(x,3)),this.setAttribute("uv",new vt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var sa=class i extends St{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let c=[],l=[],u=[],f=[],d=new C,h=new C,p=new C;for(let x=0;x<=n;x++){let g=a+x/n*o;for(let m=0;m<=s;m++){let S=m/s*r;h.x=(e+t*Math.cos(g))*Math.cos(S),h.y=(e+t*Math.cos(g))*Math.sin(S),h.z=t*Math.sin(g),l.push(h.x,h.y,h.z),d.x=e*Math.cos(S),d.y=e*Math.sin(S),p.subVectors(h,d).normalize(),u.push(p.x,p.y,p.z),f.push(m/s),f.push(x/n)}}for(let x=1;x<=n;x++)for(let g=1;g<=s;g++){let m=(s+1)*x+g-1,S=(s+1)*(x-1)+g-1,b=(s+1)*(x-1)+g,_=(s+1)*x+g;c.push(m,S,_),c.push(S,b,_)}this.setIndex(c),this.setAttribute("position",new vt(l,3)),this.setAttribute("normal",new vt(u,3)),this.setAttribute("uv",new vt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var Dn=class i extends St{constructor(e=new Qr(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new C,c=new C,l=new Se,u=new C,f=[],d=[],h=[],p=[];x(),this.setIndex(p),this.setAttribute("position",new vt(f,3)),this.setAttribute("normal",new vt(d,3)),this.setAttribute("uv",new vt(h,2));function x(){for(let b=0;b<t;b++)g(b);g(r===!1?t:0),S(),m()}function g(b){u=e.getPointAt(b/t,u);let _=a.normals[b],E=a.binormals[b];for(let w=0;w<=s;w++){let R=w/s*Math.PI*2,v=Math.sin(R),A=-Math.cos(R);c.x=A*_.x+v*E.x,c.y=A*_.y+v*E.y,c.z=A*_.z+v*E.z,c.normalize(),d.push(c.x,c.y,c.z),o.x=u.x+n*c.x,o.y=u.y+n*c.y,o.z=u.z+n*c.z,f.push(o.x,o.y,o.z)}}function m(){for(let b=1;b<=t;b++)for(let _=1;_<=s;_++){let E=(s+1)*(b-1)+(_-1),w=(s+1)*b+(_-1),R=(s+1)*b+_,v=(s+1)*(b-1)+_;p.push(E,w,v),p.push(w,R,v)}}function S(){for(let b=0;b<=t;b++)for(let _=0;_<=s;_++)l.x=b/t,l.y=_/s,h.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Yo[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function Es(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Ou(s))s.isRenderTargetTexture?(ot("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Ou(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function bn(i){let e={};for(let t=0;t<i.length;t++){let n=Es(i[t]);for(let s in n)e[s]=n[s]}return e}function Ou(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Dp(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Mh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:wt.workingColorSpace}var Rn={clone:Es,merge:bn},Lp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Up=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Dt=class extends Gn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lp,this.fragmentShader=Up,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Es(e.uniforms),this.uniformsGroups=Dp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Be().setHex(s.value);break;case"v2":this.uniforms[n].value=new Se().fromArray(s.value);break;case"v3":this.uniforms[n].value=new C().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Vt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new mt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new st().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},or=class extends Dt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Rt=class extends Gn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ra,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Hi=class extends Rt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Se(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return At(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Be(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Be(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Be(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var ra=class extends Gn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ra,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};var Zo=class extends Gn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ud,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Jo=class extends Gn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ws(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Wc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Qi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},$o=class extends Qi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Yc,endingEnd:Yc}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Zc:r=e,o=2*t-n;break;case Jc:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Zc:a=e,c=2*n-t;break;case Jc:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,h=this._weightNext,p=(n-t)/(s-t),x=p*p,g=x*p,m=-d*g+2*d*x-d*p,S=(1+d)*g+(-1.5-2*d)*x+(-.5+d)*p+1,b=(-1-h)*g+(1.5+h)*x+.5*p,_=h*g-h*x;for(let E=0;E!==o;++E)r[E]=m*a[u+E]+S*a[l+E]+b*a[c+E]+_*a[f+E];return r}},Ko=class extends Qi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=(n-t)/(s-t),f=1-u;for(let d=0;d!==o;++d)r[d]=a[l+d]*f+a[c+d]*u;return r}},Qo=class extends Qi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},jo=class extends Qi{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this.inTangents,f=this.outTangents;if(!u||!f){let p=(n-t)/(s-t),x=1-p;for(let g=0;g!==o;++g)r[g]=a[l+g]*x+a[c+g]*p;return r}let d=o*2,h=e-1;for(let p=0;p!==o;++p){let x=a[l+p],g=a[c+p],m=h*d+p*2,S=f[m],b=f[m+1],_=e*d+p*2,E=u[_],w=u[_+1],R=Fp(n,t,S,E,s);r[p]=Pd(R,x,b,w,g)}return r}};function Pd(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Np(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Fp(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=Pd(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let c=Np(r,e,t,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var Bn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ws(t,this.TimeBufferType),this.values=Ws(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ws(e.times,Array),values:Ws(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Wc(e.settings)&&(n.settings={inTangents:Ws(e.settings.inTangents,Array),outTangents:Ws(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Qo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ko(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new $o(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new jo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Or:t=this.InterpolantFactoryMethodDiscrete;break;case No:t=this.InterpolantFactoryMethodLinear;break;case bo:t=this.InterpolantFactoryMethodSmooth;break;case qc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ot("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Or;case this.InterpolantFactoryMethodLinear:return No;case this.InterpolantFactoryMethodSmooth:return bo;case this.InterpolantFactoryMethodBezier:return qc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Wc(this.settings)&&(Bu(this.settings.inTangents,e),Bu(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(ct("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(ct("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){ct("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){ct("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&Hf(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){ct("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===bo,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],u=e[o+1];if(l!==u&&(o!==1||l!==e[0]))if(s)c=!0;else{let f=o*n,d=f-n,h=f+n;for(let p=0;p!==n;++p){let x=t[f+p];if(x!==t[d+p]||x!==t[h+p]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let f=o*n,d=a*n;for(let h=0;h!==n;++h)t[d+h]=t[f+h]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Wc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Bu(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Bn.prototype.ValueTypeName="";Bn.prototype.TimeBufferType=Float32Array;Bn.prototype.ValueBufferType=Float32Array;Bn.prototype.DefaultInterpolation=No;var ji=class extends Bn{constructor(e,t,n){super(e,t,n)}};ji.prototype.ValueTypeName="bool";ji.prototype.ValueBufferType=Array;ji.prototype.DefaultInterpolation=Or;ji.prototype.InterpolantFactoryMethodLinear=void 0;ji.prototype.InterpolantFactoryMethodSmooth=void 0;var el=class extends Bn{constructor(e,t,n,s){super(e,t,n,s)}};el.prototype.ValueTypeName="color";var tl=class extends Bn{constructor(e,t,n,s){super(e,t,n,s)}};tl.prototype.ValueTypeName="number";var nl=class extends Qi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),l=e*o;for(let u=l+o;l!==u;l+=4)Yt.slerpFlat(r,0,a,l-o,a,l,c);return r}},aa=class extends Bn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new nl(this.times,this.values,this.getValueSize(),e)}};aa.prototype.ValueTypeName="quaternion";aa.prototype.InterpolantFactoryMethodSmooth=void 0;var es=class extends Bn{constructor(e,t,n){super(e,t,n)}};es.prototype.ValueTypeName="string";es.prototype.ValueBufferType=Array;es.prototype.DefaultInterpolation=Or;es.prototype.InterpolantFactoryMethodLinear=void 0;es.prototype.InterpolantFactoryMethodSmooth=void 0;var il=class extends Bn{constructor(e,t,n,s){super(e,t,n,s)}};il.prototype.ValueTypeName="vector";var sl=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,f){return l.push(u,f),this},this.removeHandler=function(u){let f=l.indexOf(u);return f!==-1&&l.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=l.length;f<d;f+=2){let h=l[f],p=l[f+1];if(h.global&&(h.lastIndex=0),h.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Id=new sl,rl=class{constructor(e){this.manager=e!==void 0?e:Id,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};rl.DEFAULT_MATERIAL_NAME="__DEFAULT";var lr=class extends jt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},oa=class extends lr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Be(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Xc=new st,Hu=new C,zu=new C,la=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Se(512,512),this.mapType=an,this.map=null,this.mapPass=null,this.matrix=new st,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new nr,this._frameExtents=new Se(1,1),this._viewportCount=1,this._viewports=[new Vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Hu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Hu),zu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(zu),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Xc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Xc,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===Js||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(Xc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},So=new C,Eo=new Yt,di=new C,ca=class extends jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new st,this.projectionMatrix=new st,this.projectionMatrixInverse=new st,this.coordinateSystem=ni,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(So,Eo,di),di.x===1&&di.y===1&&di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(So,Eo,di.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(So,Eo,di),di.x===1&&di.y===1&&di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(So,Eo,di.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ji=new C,Vu=new Se,Gu=new Se,fn=class extends ca{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Fo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(wo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fo*2*Math.atan(Math.tan(wo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ji.x,Ji.y).multiplyScalar(-e/Ji.z),Ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ji.x,Ji.y).multiplyScalar(-e/Ji.z)}getViewSize(e,t){return this.getViewBounds(e,Vu,Gu),t.subVectors(Gu,Vu)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(wo*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var eh=class extends la{constructor(){super(new fn(90,1,.5,500)),this.isPointLightShadow=!0}},Xn=class extends lr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new eh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},ts=class extends ca{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},th=class extends la{constructor(){super(new ts(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},cr=class extends lr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.target=new jt,this.shadow=new th}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Xs=-90,qs=1,al=class extends jt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new fn(Xs,qs,e,t);s.layers=this.layers,this.add(s);let r=new fn(Xs,qs,e,t);r.layers=this.layers,this.add(r);let a=new fn(Xs,qs,e,t);a.layers=this.layers,this.add(a);let o=new fn(Xs,qs,e,t);o.layers=this.layers,this.add(o);let c=new fn(Xs,qs,e,t);c.layers=this.layers,this.add(c);let l=new fn(Xs,qs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===ni)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Js)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,d,h),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},ol=class extends fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},ha=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Op.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Op(){this._document.hidden===!1&&this.reset()}var Sh="\\[\\]\\.:\\/",Bp=new RegExp("["+Sh+"]","g"),Eh="[^"+Sh+"]",Hp="[^"+Sh.replace("\\.","")+"]",zp=/((?:WC+[\/:])*)/.source.replace("WC",Eh),Vp=/(WCOD+)?/.source.replace("WCOD",Hp),Gp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Eh),kp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Eh),Wp=new RegExp("^"+zp+Vp+Gp+kp+"$"),Xp=["material","materials","bones","map"],nh=class{constructor(e,t,n){let s=n||kt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},kt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Bp,"")}static parseTrackName(e){let t=Wp.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Xp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ot("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){ct("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ct("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ct("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ct("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ct("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){ct("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){ct("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;ct("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){ct("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ct("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};kt.Composite=nh;kt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};kt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};kt.prototype.GetterByBindingType=[kt.prototype._getValue_direct,kt.prototype._getValue_array,kt.prototype._getValue_arrayElement,kt.prototype._getValue_toArray];kt.prototype.SetterByBindingTypeAndVersioning=[[kt.prototype._setValue_direct,kt.prototype._setValue_direct_setNeedsUpdate,kt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[kt.prototype._setValue_array,kt.prototype._setValue_array_setNeedsUpdate,kt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[kt.prototype._setValue_arrayElement,kt.prototype._setValue_arrayElement_setNeedsUpdate,kt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[kt.prototype._setValue_fromArray,kt.prototype._setValue_fromArray_setNeedsUpdate,kt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var K_=new Float32Array(1);var ku=new st,ua=class{constructor(e,t,n=0,s=1/0){this.ray=new gs(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Qs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):ct("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ku.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ku),this}intersectObject(e,t=!0,n=[]){return ih(e,this,n,t),n.sort(Wu),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)ih(e[s],this,n,t);return n.sort(Wu),n}};function Wu(i,e){return i.distance-e.distance}function ih(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)ih(r[a],e,t,!0)}}var Ch=class Ch{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Ch.prototype.isMatrix2=!0;var sh=Ch;function bh(i,e,t,n){let s=qp(n);switch(t){case gh:return i*e;case gl:return i*e/s.components*s.byteLength;case xl:return i*e/s.components*s.byteLength;case as:return i*e*2/s.components*s.byteLength;case _l:return i*e*2/s.components*s.byteLength;case xh:return i*e*3/s.components*s.byteLength;case vn:return i*e*4/s.components*s.byteLength;case vl:return i*e*4/s.components*s.byteLength;case Sa:case Ea:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ba:case Ta:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ml:case El:return Math.max(i,16)*Math.max(e,8)/4;case yl:case Sl:return Math.max(i,8)*Math.max(e,8)/2;case bl:case Tl:case Al:case Rl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case wl:case wa:case Cl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Pl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Il:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Dl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ll:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ul:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Nl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Fl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ol:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Bl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Hl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case zl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Vl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Gl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case kl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Wl:case Xl:case ql:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Yl:case Zl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Aa:case Jl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function qp(i){switch(i){case an:case dh:return{byteLength:1,components:1};case dr:case fh:case Kt:return{byteLength:2,components:1};case pl:case ml:return{byteLength:2,components:4};case ai:case fl:case Yn:return{byteLength:4,components:1};case ph:case mh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?ot("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function jd(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Kp(i){let e=new WeakMap;function t(o,c){let l=o.array,u=o.usage,f=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),o.onUploadCallback();let h;if(l instanceof Float32Array)h=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)h=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?h=i.HALF_FLOAT:h=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)h=i.SHORT;else if(l instanceof Uint32Array)h=i.UNSIGNED_INT;else if(l instanceof Int32Array)h=i.INT;else if(l instanceof Int8Array)h=i.BYTE;else if(l instanceof Uint8Array)h=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)h=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:h,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,c,l){let u=c.array,f=c.updateRanges;if(i.bindBuffer(l,o),f.length===0)i.bufferSubData(l,0,u);else{f.sort((h,p)=>h.start-p.start);let d=0;for(let h=1;h<f.length;h++){let p=f[d],x=f[h];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++d,f[d]=x)}f.length=d+1;for(let h=0,p=f.length;h<p;h++){let x=f[h];i.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Qp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jp=`#ifdef USE_ALPHAHASH
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
#endif`,em=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,im=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sm=`#ifdef USE_AOMAP
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
#endif`,rm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,am=`#ifdef USE_BATCHING
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
#endif`,om=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cm=`vec3 objectNormal = vec3( normal );
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
} // validated`,um=`#ifdef USE_IRIDESCENCE
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
#endif`,dm=`#ifdef USE_BUMPMAP
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
#endif`,fm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,pm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,_m=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,vm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ym=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Mm=`#define PI 3.141592653589793
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
} // validated`,Sm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Em=`vec3 transformedNormal = objectNormal;
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
#endif`,bm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Am=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Pm=`#ifdef USE_ENVMAP
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
#endif`,Im=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Dm=`#ifdef USE_ENVMAP
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
#endif`,Lm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Um=`#ifdef USE_ENVMAP
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
#endif`,Nm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Om=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hm=`#ifdef USE_GRADIENTMAP
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
}`,zm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,km=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Wm=`#ifdef USE_ENVMAP
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
#endif`,Xm=`ToonMaterial material;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ym=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zm=`varying vec3 vViewPosition;
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
#endif`,$m=`uniform sampler2D dfgLUT;
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
}`,Km=`
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
#endif`,Qm=`#if defined( RE_IndirectDiffuse )
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
#endif`,jm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,e0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,t0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,n0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,i0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,s0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,r0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,a0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,o0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,l0=`#if defined( USE_POINTS_UV )
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
#endif`,c0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,h0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,u0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,d0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,f0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,p0=`#ifdef USE_MORPHTARGETS
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
#endif`,m0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,g0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,x0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,_0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,v0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,y0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,M0=`#ifdef USE_NORMALMAP
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
#endif`,S0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,E0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,b0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,T0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,w0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,A0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,R0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,C0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,P0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,I0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,D0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,L0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,U0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,N0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,F0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,O0=`float getShadowMask() {
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
}`,B0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,H0=`#ifdef USE_SKINNING
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
#endif`,z0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,V0=`#ifdef USE_SKINNING
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
#endif`,G0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,k0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,W0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,X0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,q0=`#ifdef USE_TRANSMISSION
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
#endif`,Y0=`#ifdef USE_TRANSMISSION
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
#endif`,Z0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,J0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,K0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Q0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,j0=`uniform sampler2D t2D;
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
}`,eg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ng=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ig=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sg=`#include <common>
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
}`,rg=`#if DEPTH_PACKING == 3200
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
}`,ag=`#define DISTANCE
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
}`,og=`#define DISTANCE
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
}`,lg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hg=`uniform float scale;
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
}`,ug=`uniform vec3 diffuse;
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
}`,dg=`#include <common>
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
}`,fg=`uniform vec3 diffuse;
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
}`,pg=`#define LAMBERT
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
}`,mg=`#define LAMBERT
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
}`,gg=`#define MATCAP
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
}`,xg=`#define MATCAP
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
}`,_g=`#define NORMAL
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
}`,vg=`#define NORMAL
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
}`,yg=`#define PHONG
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
}`,Mg=`#define PHONG
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
}`,Sg=`#define STANDARD
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
}`,Eg=`#define STANDARD
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
}`,bg=`#define TOON
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
}`,Tg=`#define TOON
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
}`,wg=`uniform float size;
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
}`,Ag=`uniform vec3 diffuse;
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
}`,Rg=`#include <common>
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
}`,Cg=`uniform vec3 color;
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
}`,Pg=`uniform float rotation;
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
}`,Ig=`uniform vec3 diffuse;
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
}`,yt={alphahash_fragment:Qp,alphahash_pars_fragment:jp,alphamap_fragment:em,alphamap_pars_fragment:tm,alphatest_fragment:nm,alphatest_pars_fragment:im,aomap_fragment:sm,aomap_pars_fragment:rm,batching_pars_vertex:am,batching_vertex:om,begin_vertex:lm,beginnormal_vertex:cm,bsdfs:hm,iridescence_fragment:um,bumpmap_pars_fragment:dm,clipping_planes_fragment:fm,clipping_planes_pars_fragment:pm,clipping_planes_pars_vertex:mm,clipping_planes_vertex:gm,color_fragment:xm,color_pars_fragment:_m,color_pars_vertex:vm,color_vertex:ym,common:Mm,cube_uv_reflection_fragment:Sm,defaultnormal_vertex:Em,displacementmap_pars_vertex:bm,displacementmap_vertex:Tm,emissivemap_fragment:wm,emissivemap_pars_fragment:Am,colorspace_fragment:Rm,colorspace_pars_fragment:Cm,envmap_fragment:Pm,envmap_common_pars_fragment:Im,envmap_pars_fragment:Dm,envmap_pars_vertex:Lm,envmap_physical_pars_fragment:Wm,envmap_vertex:Um,fog_vertex:Nm,fog_pars_vertex:Fm,fog_fragment:Om,fog_pars_fragment:Bm,gradientmap_pars_fragment:Hm,lightmap_pars_fragment:zm,lights_lambert_fragment:Vm,lights_lambert_pars_fragment:Gm,lights_pars_begin:km,lights_toon_fragment:Xm,lights_toon_pars_fragment:qm,lights_phong_fragment:Ym,lights_phong_pars_fragment:Zm,lights_physical_fragment:Jm,lights_physical_pars_fragment:$m,lights_fragment_begin:Km,lights_fragment_maps:Qm,lights_fragment_end:jm,lightprobes_pars_fragment:e0,logdepthbuf_fragment:t0,logdepthbuf_pars_fragment:n0,logdepthbuf_pars_vertex:i0,logdepthbuf_vertex:s0,map_fragment:r0,map_pars_fragment:a0,map_particle_fragment:o0,map_particle_pars_fragment:l0,metalnessmap_fragment:c0,metalnessmap_pars_fragment:h0,morphinstance_vertex:u0,morphcolor_vertex:d0,morphnormal_vertex:f0,morphtarget_pars_vertex:p0,morphtarget_vertex:m0,normal_fragment_begin:g0,normal_fragment_maps:x0,normal_pars_fragment:_0,normal_pars_vertex:v0,normal_vertex:y0,normalmap_pars_fragment:M0,clearcoat_normal_fragment_begin:S0,clearcoat_normal_fragment_maps:E0,clearcoat_pars_fragment:b0,iridescence_pars_fragment:T0,opaque_fragment:w0,packing:A0,premultiplied_alpha_fragment:R0,project_vertex:C0,dithering_fragment:P0,dithering_pars_fragment:I0,roughnessmap_fragment:D0,roughnessmap_pars_fragment:L0,shadowmap_pars_fragment:U0,shadowmap_pars_vertex:N0,shadowmap_vertex:F0,shadowmask_pars_fragment:O0,skinbase_vertex:B0,skinning_pars_vertex:H0,skinning_vertex:z0,skinnormal_vertex:V0,specularmap_fragment:G0,specularmap_pars_fragment:k0,tonemapping_fragment:W0,tonemapping_pars_fragment:X0,transmission_fragment:q0,transmission_pars_fragment:Y0,uv_pars_fragment:Z0,uv_pars_vertex:J0,uv_vertex:$0,worldpos_vertex:K0,background_vert:Q0,background_frag:j0,backgroundCube_vert:eg,backgroundCube_frag:tg,cube_vert:ng,cube_frag:ig,depth_vert:sg,depth_frag:rg,distance_vert:ag,distance_frag:og,equirect_vert:lg,equirect_frag:cg,linedashed_vert:hg,linedashed_frag:ug,meshbasic_vert:dg,meshbasic_frag:fg,meshlambert_vert:pg,meshlambert_frag:mg,meshmatcap_vert:gg,meshmatcap_frag:xg,meshnormal_vert:_g,meshnormal_frag:vg,meshphong_vert:yg,meshphong_frag:Mg,meshphysical_vert:Sg,meshphysical_frag:Eg,meshtoon_vert:bg,meshtoon_frag:Tg,points_vert:wg,points_frag:Ag,shadow_vert:Rg,shadow_frag:Cg,sprite_vert:Pg,sprite_frag:Ig},Xe={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new mt}},envmap:{envMap:{value:null},envMapRotation:{value:new mt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new mt},normalScale:{value:new Se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new C},probesMax:{value:new C},probesResolution:{value:new C}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0},uvTransform:{value:new mt}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new Se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}}},wi={basic:{uniforms:bn([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.fog]),vertexShader:yt.meshbasic_vert,fragmentShader:yt.meshbasic_frag},lambert:{uniforms:bn([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,Xe.lights,{emissive:{value:new Be(0)},envMapIntensity:{value:1}}]),vertexShader:yt.meshlambert_vert,fragmentShader:yt.meshlambert_frag},phong:{uniforms:bn([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,Xe.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:yt.meshphong_vert,fragmentShader:yt.meshphong_frag},standard:{uniforms:bn([Xe.common,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.roughnessmap,Xe.metalnessmap,Xe.fog,Xe.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:yt.meshphysical_vert,fragmentShader:yt.meshphysical_frag},toon:{uniforms:bn([Xe.common,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.gradientmap,Xe.fog,Xe.lights,{emissive:{value:new Be(0)}}]),vertexShader:yt.meshtoon_vert,fragmentShader:yt.meshtoon_frag},matcap:{uniforms:bn([Xe.common,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,{matcap:{value:null}}]),vertexShader:yt.meshmatcap_vert,fragmentShader:yt.meshmatcap_frag},points:{uniforms:bn([Xe.points,Xe.fog]),vertexShader:yt.points_vert,fragmentShader:yt.points_frag},dashed:{uniforms:bn([Xe.common,Xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:yt.linedashed_vert,fragmentShader:yt.linedashed_frag},depth:{uniforms:bn([Xe.common,Xe.displacementmap]),vertexShader:yt.depth_vert,fragmentShader:yt.depth_frag},normal:{uniforms:bn([Xe.common,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,{opacity:{value:1}}]),vertexShader:yt.meshnormal_vert,fragmentShader:yt.meshnormal_frag},sprite:{uniforms:bn([Xe.sprite,Xe.fog]),vertexShader:yt.sprite_vert,fragmentShader:yt.sprite_frag},background:{uniforms:{uvTransform:{value:new mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:yt.background_vert,fragmentShader:yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new mt}},vertexShader:yt.backgroundCube_vert,fragmentShader:yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:yt.cube_vert,fragmentShader:yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:yt.equirect_vert,fragmentShader:yt.equirect_frag},distance:{uniforms:bn([Xe.common,Xe.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:yt.distance_vert,fragmentShader:yt.distance_frag},shadow:{uniforms:bn([Xe.lights,Xe.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:yt.shadow_vert,fragmentShader:yt.shadow_frag}};wi.physical={uniforms:bn([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new mt},clearcoatNormalScale:{value:new Se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new mt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new mt},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new mt},transmissionSamplerSize:{value:new Se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new mt},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new mt},anisotropyVector:{value:new Se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new mt}}]),vertexShader:yt.meshphysical_vert,fragmentShader:yt.meshphysical_frag};var Ql={r:0,b:0,g:0},Dg=new st,ef=new mt;ef.set(-1,0,0,0,1,0,0,0,1);function Lg(i,e,t,n,s,r){let a=new Be(0),o=s===!0?0:1,c,l,u=null,f=0,d=null;function h(S){let b=S.isScene===!0?S.background:null;if(b&&b.isTexture){let _=S.backgroundBlurriness>0;b=e.get(b,_)}return b}function p(S){let b=!1,_=h(S);_===null?g(a,o):_&&_.isColor&&(g(_,1),b=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(S,b){let _=h(b);_&&(_.isCubeTexture||_.mapping===ya)?(l===void 0&&(l=new Re(new It(1,1,1),new Dt({name:"BackgroundCubeMaterial",uniforms:Es(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(E,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=_,l.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Dg.makeRotationFromEuler(b.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(ef),l.material.toneMapped=wt.getTransfer(_.colorSpace)!==Pt,(u!==_||f!==_.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=_,f=_.version,d=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Re(new Ht(2,2),new Dt({name:"BackgroundMaterial",uniforms:Es(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:ns,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=wt.getTransfer(_.colorSpace)!==Pt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||f!==_.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=_,f=_.version,d=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function g(S,b){S.getRGB(Ql,Mh(i)),t.buffers.color.setClear(Ql.r,Ql.g,Ql.b,b,r)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,b=1){a.set(S),o=b,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,g(a,o)},render:p,addToRenderList:x,dispose:m}}function Ug(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(F,M,I,L,U){let V=!1,B=f(F,L,I,M);r!==B&&(r=B,l(r.object)),V=h(F,L,I,U),V&&p(F,L,I,U),U!==null&&e.update(U,i.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,_(F,M,I,L),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function c(){return i.createVertexArray()}function l(F){return i.bindVertexArray(F)}function u(F){return i.deleteVertexArray(F)}function f(F,M,I,L){let U=L.wireframe===!0,V=n[M.id];V===void 0&&(V={},n[M.id]=V);let B=F.isInstancedMesh===!0?F.id:0,G=V[B];G===void 0&&(G={},V[B]=G);let O=G[I.id];O===void 0&&(O={},G[I.id]=O);let q=O[U];return q===void 0&&(q=d(c()),O[U]=q),q}function d(F){let M=[],I=[],L=[];for(let U=0;U<t;U++)M[U]=0,I[U]=0,L[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:M,enabledAttributes:I,attributeDivisors:L,object:F,attributes:{},index:null}}function h(F,M,I,L){let U=r.attributes,V=M.attributes,B=0,G=I.getAttributes();for(let O in G)if(G[O].location>=0){let K=U[O],ie=V[O];if(ie===void 0&&(O==="instanceMatrix"&&F.instanceMatrix&&(ie=F.instanceMatrix),O==="instanceColor"&&F.instanceColor&&(ie=F.instanceColor)),K===void 0||K.attribute!==ie||ie&&K.data!==ie.data)return!0;B++}return r.attributesNum!==B||r.index!==L}function p(F,M,I,L){let U={},V=M.attributes,B=0,G=I.getAttributes();for(let O in G)if(G[O].location>=0){let K=V[O];K===void 0&&(O==="instanceMatrix"&&F.instanceMatrix&&(K=F.instanceMatrix),O==="instanceColor"&&F.instanceColor&&(K=F.instanceColor));let ie={};ie.attribute=K,K&&K.data&&(ie.data=K.data),U[O]=ie,B++}r.attributes=U,r.attributesNum=B,r.index=L}function x(){let F=r.newAttributes;for(let M=0,I=F.length;M<I;M++)F[M]=0}function g(F){m(F,0)}function m(F,M){let I=r.newAttributes,L=r.enabledAttributes,U=r.attributeDivisors;I[F]=1,L[F]===0&&(i.enableVertexAttribArray(F),L[F]=1),U[F]!==M&&(i.vertexAttribDivisor(F,M),U[F]=M)}function S(){let F=r.newAttributes,M=r.enabledAttributes;for(let I=0,L=M.length;I<L;I++)M[I]!==F[I]&&(i.disableVertexAttribArray(I),M[I]=0)}function b(F,M,I,L,U,V,B){B===!0?i.vertexAttribIPointer(F,M,I,U,V):i.vertexAttribPointer(F,M,I,L,U,V)}function _(F,M,I,L){x();let U=L.attributes,V=I.getAttributes(),B=M.defaultAttributeValues;for(let G in V){let O=V[G];if(O.location>=0){let q=U[G];if(q===void 0&&(G==="instanceMatrix"&&F.instanceMatrix&&(q=F.instanceMatrix),G==="instanceColor"&&F.instanceColor&&(q=F.instanceColor)),q!==void 0){let K=q.normalized,ie=q.itemSize,ve=e.get(q);if(ve===void 0)continue;let De=ve.buffer,Le=ve.type,Ye=ve.bytesPerElement,Y=Le===i.INT||Le===i.UNSIGNED_INT||q.gpuType===fl;if(q.isInterleavedBufferAttribute){let ne=q.data,ye=ne.stride,pe=q.offset;if(ne.isInstancedInterleavedBuffer){for(let Me=0;Me<O.locationSize;Me++)m(O.location+Me,ne.meshPerAttribute);F.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Me=0;Me<O.locationSize;Me++)g(O.location+Me);i.bindBuffer(i.ARRAY_BUFFER,De);for(let Me=0;Me<O.locationSize;Me++)b(O.location+Me,ie/O.locationSize,Le,K,ye*Ye,(pe+ie/O.locationSize*Me)*Ye,Y)}else{if(q.isInstancedBufferAttribute){for(let ne=0;ne<O.locationSize;ne++)m(O.location+ne,q.meshPerAttribute);F.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let ne=0;ne<O.locationSize;ne++)g(O.location+ne);i.bindBuffer(i.ARRAY_BUFFER,De);for(let ne=0;ne<O.locationSize;ne++)b(O.location+ne,ie/O.locationSize,Le,K,ie*Ye,ie/O.locationSize*ne*Ye,Y)}}else if(B!==void 0){let K=B[G];if(K!==void 0)switch(K.length){case 2:i.vertexAttrib2fv(O.location,K);break;case 3:i.vertexAttrib3fv(O.location,K);break;case 4:i.vertexAttrib4fv(O.location,K);break;default:i.vertexAttrib1fv(O.location,K)}}}}S()}function E(){A();for(let F in n){let M=n[F];for(let I in M){let L=M[I];for(let U in L){let V=L[U];for(let B in V)u(V[B].object),delete V[B];delete L[U]}}delete n[F]}}function w(F){if(n[F.id]===void 0)return;let M=n[F.id];for(let I in M){let L=M[I];for(let U in L){let V=L[U];for(let B in V)u(V[B].object),delete V[B];delete L[U]}}delete n[F.id]}function R(F){for(let M in n){let I=n[M];for(let L in I){let U=I[L];if(U[F.id]===void 0)continue;let V=U[F.id];for(let B in V)u(V[B].object),delete V[B];delete U[F.id]}}}function v(F){for(let M in n){let I=n[M],L=F.isInstancedMesh===!0?F.id:0,U=I[L];if(U!==void 0){for(let V in U){let B=U[V];for(let G in B)u(B[G].object),delete B[G];delete U[V]}delete I[L],Object.keys(I).length===0&&delete n[M]}}}function A(){P(),a=!0,r!==s&&(r=s,l(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:A,resetDefaultState:P,dispose:E,releaseStatesOfGeometry:w,releaseStatesOfObject:v,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:g,disableUnusedAttributes:S}}function Ng(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,u){u!==0&&(i.drawArraysInstanced(n,c,l,u),t.update(l,n,u))}function o(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,u);let d=0;for(let h=0;h<u;h++)d+=l[h];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Fg(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==vn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let v=R===Kt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==an&&R!==Yn&&!v&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(ot("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let f=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&ot("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:h,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:S,maxVaryings:b,maxFragmentUniforms:_,maxSamples:E,samples:w}}function Og(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Fn,o=new mt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let h=f.length!==0||d||n!==0||s;return s=d,n=f.length,h},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,h){let p=f.clippingPlanes,x=f.clipIntersection,g=f.clipShadows,m=i.get(f);if(!s||p===null||p.length===0||r&&!g)r?u(null):l();else{let S=r?0:n,b=S*4,_=m.clippingState||null;c.value=_,_=u(p,d,b,h);for(let E=0;E!==b;++E)_[E]=t[E];m.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,d,h,p){let x=f!==null?f.length:0,g=null;if(x!==0){if(g=c.value,p!==!0||g===null){let m=h+x*4,S=d.matrixWorldInverse;o.getNormalMatrix(S),(g===null||g.length<m)&&(g=new Float32Array(m));for(let b=0,_=h;b!==x;++b,_+=4)a.copy(f[b]).applyMatrix4(S,o),a.normal.toArray(g,_),g[_+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}var pr=4,Bg=6,Hg=20,zg=256,Ca=new ts,Dd=new Be,Ph=null,Ih=0,Dh=0,Lh=!1,Vg=new C,bs=new C,gr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=Vg}=r;Ph=this._renderer.getRenderTarget(),Ih=this._renderer.getActiveCubeFace(),Dh=this._renderer.getActiveMipmapLevel(),Lh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ud(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ph,Ih,Dh),this._renderer.xr.enabled=Lh,e.scissorTest=!1,fr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ss||e.mapping===Ss?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ph=this._renderer.getRenderTarget(),Ih=this._renderer.getActiveCubeFace(),Dh=this._renderer.getActiveMipmapLevel(),Lh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:Kt,format:vn,colorSpace:Br,depthBuffer:!1},s=Ld(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ld(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Gg(r)),this._blurMaterial=Wg(r,e,t),this._ggxMaterial=kg(r,e,t)}return s}_compileMaterial(e){let t=new Re(new St,e);this._renderer.compile(t,Ca)}_sceneToCubeUV(e,t,n,s,r){let c=new fn(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(Dd),f.toneMapping=Hn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Re(new It,new Ut({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,g=x.material,m=!1,S=e.background;S?S.isColor&&(g.color.copy(S),e.background=null,m=!0):(g.color.copy(Dd),m=!0);for(let b=0;b<6;b++){let _=b%3;_===0?(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[b],r.y,r.z)):_===1?(c.up.set(0,0,l[b]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[b],r.z)):(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[b]));let E=this._cubeSize;fr(s,_*E,b>2?E:0,E,E),f.setRenderTarget(s),m&&f.render(x,c),f.render(e,c)}f.toneMapping=h,f.autoClear=d,e.background=S}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===ss||e.mapping===Ss;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ud());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;fr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Ca)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,l=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(l*l-u*u),d=l*1.25,h=f*d,{_lodMax:p}=this,x=this._sizeLods[n],g=3*x*(n>p-pr?n-p+pr:0),m=4*(this._cubeSize-x);c.envMap.value=e.texture,c.roughness.value=h,c.mipInt.value=p-t,fr(r,g,m,3*x,2*x),s.setRenderTarget(r),s.render(o,Ca),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=p-n,fr(e,g,m,3*x,2*x),s.setRenderTarget(e),s.render(o,Ca)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[s];c.material=o;let l=o.uniforms;l.envMap.value=e.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;let u=this._sizeLods[s],f=3*u*(s>this._lodMax-pr?s-this._lodMax+pr:0),d=4*(this._cubeSize-u);fr(t,f,d,3*u,2*u),a.setRenderTarget(t),a.render(c,Ca)}};function Gg(i){let e=[],t=[],n=i,s=i-pr+1+Bg;for(let r=0;r<s;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),c=-o,l=1+o,u=[c,c,l,c,l,l,c,c,l,l,c,l],f=6,d=6,h=3,p=new Float32Array(h*d*f),x=new Float32Array(h*d*f);for(let m=0;m<f;m++){let S=m%3*2/3-1,b=m>2?0:-1,_=[S,b,0,S+2/3,b,0,S+2/3,b+1,0,S,b,0,S+2/3,b+1,0,S,b+1,0];p.set(_,h*d*m);for(let E=0;E<d;E++){let w=u[E*2]*2-1,R=u[E*2+1]*2-1;m===0?bs.set(1,R,w):m===1?bs.set(-w,1,-R):m===2?bs.set(-w,R,1):m===3?bs.set(-1,R,-w):m===4?bs.set(-w,-1,R):bs.set(w,R,-1),bs.toArray(x,(m*d+E)*h)}}let g=new St;g.setAttribute("position",new _t(p,h)),g.setAttribute("outputDirection",new _t(x,h)),t.push(new Re(g,null)),n>pr&&n--}return{lodMeshes:t,sizeLods:e}}function Ld(i,e,t){let n=new Wt(i,e,t);return n.texture.mapping=ya,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function fr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function kg(i,e,t){return new Dt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:zg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:nc(),fragmentShader:`

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
		`,blending:en,depthTest:!1,depthWrite:!1})}function Wg(i,e,t){return new Dt({name:"SphericalGaussianBlur",defines:{SAMPLES:Hg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:nc(),fragmentShader:`

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
		`,blending:en,depthTest:!1,depthWrite:!1})}function Ud(){return new Dt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nc(),fragmentShader:`

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
		`,blending:en,depthTest:!1,depthWrite:!1})}function Nd(){return new Dt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:en,depthTest:!1,depthWrite:!1})}function nc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var ec=class extends Wt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Yr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new It(5,5,5),r=new Dt({name:"CubemapFromEquirect",uniforms:Es(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:un,blending:en});r.uniforms.tEquirect.value=t;let a=new Re(s,r),o=t.minFilter;return t.minFilter===Ei&&(t.minFilter=sn),new al(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};function Xg(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,h=!1){return d==null?null:h?a(d):r(d)}function r(d){if(d&&d.isTexture){let h=d.mapping;if(h===hl||h===ul)if(e.has(d)){let p=e.get(d).texture;return o(p,d.mapping)}else{let p=d.image;if(p&&p.height>0){let x=new ec(p.height);return x.fromEquirectangularTexture(i,d),e.set(d,x),d.addEventListener("dispose",l),o(x.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){let h=d.mapping,p=h===hl||h===ul,x=h===ss||h===Ss;if(p||x){let g=t.get(d),m=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return n===null&&(n=new gr(i)),g=p?n.fromEquirectangular(d,g):n.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{let S=d.image;return p&&S&&S.height>0||x&&S&&c(S)?(n===null&&(n=new gr(i)),g=p?n.fromEquirectangular(d):n.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",u),g.texture):null}}}return d}function o(d,h){return h===hl?d.mapping=ss:h===ul&&(d.mapping=Ss),d}function c(d){let h=0,p=6;for(let x=0;x<p;x++)d[x]!==void 0&&h++;return h===p}function l(d){let h=d.target;h.removeEventListener("dispose",l);let p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function u(d){let h=d.target;h.removeEventListener("dispose",u);let p=t.get(h);p!==void 0&&(t.delete(h),p.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function qg(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&ps("WebGLRenderer: "+n+" extension not supported."),s}}}function Yg(i,e,t,n){let s={},r=new WeakMap;function a(f){let d=f.target;d.index!==null&&e.remove(d.index);for(let p in d.attributes)e.remove(d.attributes[p]);d.removeEventListener("dispose",a),delete s[d.id];let h=r.get(d);h&&(e.remove(h),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function c(f){let d=f.attributes;for(let h in d)e.update(d[h],i.ARRAY_BUFFER)}function l(f){let d=[],h=f.index,p=f.attributes.position,x=0;if(p===void 0)return;if(h!==null){let S=h.array;x=h.version;for(let b=0,_=S.length;b<_;b+=3){let E=S[b+0],w=S[b+1],R=S[b+2];d.push(E,w,w,R,R,E)}}else{let S=p.array;x=p.version;for(let b=0,_=S.length/3-1;b<_;b+=3){let E=b+0,w=b+1,R=b+2;d.push(E,w,w,R,R,E)}}let g=new(p.count>=65535?Xr:Wr)(d,1);g.version=x;let m=r.get(f);m&&e.remove(m),r.set(f,g)}function u(f){let d=r.get(f);if(d){let h=f.index;h!==null&&d.version<h.version&&l(f)}else l(f);return r.get(f)}return{get:o,update:c,getWireframeAttribute:u}}function Zg(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,d){i.drawElements(n,d,r,f*a),t.update(d,n,1)}function l(f,d,h){h!==0&&(i.drawElementsInstanced(n,d,r,f*a,h),t.update(d,n,h))}function u(f,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,h);let x=0;for(let g=0;g<h;g++)x+=d[g];t.update(x,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Jg(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:ct("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function $g(i,e,t){let n=new WeakMap,s=new Vt;function r(a,o,c){let l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0,d=n.get(o);if(d===void 0||d.count!==f){let A=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",A)};d!==void 0&&d.texture.dispose();let h=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],b=0;h===!0&&(b=1),p===!0&&(b=2),x===!0&&(b=3);let _=o.attributes.position.count*b,E=1;_>e.maxTextureSize&&(E=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let w=new Float32Array(_*E*4*f),R=new Gr(w,_,E,f);R.type=Yn,R.needsUpdate=!0;let v=b*4;for(let P=0;P<f;P++){let F=g[P],M=m[P],I=S[P],L=_*E*4*P;for(let U=0;U<F.count;U++){let V=U*v;h===!0&&(s.fromBufferAttribute(F,U),w[L+V+0]=s.x,w[L+V+1]=s.y,w[L+V+2]=s.z,w[L+V+3]=0),p===!0&&(s.fromBufferAttribute(M,U),w[L+V+4]=s.x,w[L+V+5]=s.y,w[L+V+6]=s.z,w[L+V+7]=0),x===!0&&(s.fromBufferAttribute(I,U),w[L+V+8]=s.x,w[L+V+9]=s.y,w[L+V+10]=s.z,w[L+V+11]=I.itemSize===4?s.w:1)}}d={count:f,texture:R,size:new Se(_,E)},n.set(o,d),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let h=0;for(let x=0;x<l.length;x++)h+=l[x];let p=o.morphTargetsRelative?1:1-h;c.getUniforms().setValue(i,"morphTargetBaseInfluence",p),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Kg(i,e,t,n,s){let r=new WeakMap;function a(l){let u=s.render.frame,f=l.geometry,d=e.get(l,f);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){let h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return d}function o(){r=new WeakMap}function c(l){let u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}var Qg={[pa]:"LINEAR_TONE_MAPPING",[ma]:"REINHARD_TONE_MAPPING",[ga]:"CINEON_TONE_MAPPING",[is]:"ACES_FILMIC_TONE_MAPPING",[_a]:"AGX_TONE_MAPPING",[va]:"NEUTRAL_TONE_MAPPING",[xa]:"CUSTOM_TONE_MAPPING"};function jg(i,e,t,n,s,r){let a=new Wt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=new St;l.setAttribute("position",new vt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new vt([0,2,0,0,2,0],2));let u=new or({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Re(l,u),d=new ts(-1,1,1,-1,0,1),h=null,p=null,x=!1,g,m=null,S=[],b=!1;this.setSize=function(_,E){a.setSize(_,E),o!==null&&o.setSize(_,E),c!==null&&c.setSize(_,E);for(let w=0;w<S.length;w++){let R=S[w];R.setSize&&R.setSize(_,E)}},this.setEffects=function(_){S=_,b=S.length>0&&S[0].isRenderPass===!0;let E=a.width,w=a.height;S.length>0&&o===null&&(o=new Wt(E,w,{type:Kt,depthBuffer:!1,stencilBuffer:!1}),c=new Wt(E,w,{type:Kt,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<S.length;R++){let v=S[R];v.setSize&&v.setSize(E,w)}},this.begin=function(_,E){if(x||_.toneMapping===Hn&&S.length===0)return!1;if(m=E,E!==null){let w=E.width,R=E.height;(a.width!==w||a.height!==R)&&this.setSize(w,R)}return b===!1&&_.setRenderTarget(a),g=_.toneMapping,_.toneMapping=Hn,!0},this.hasRenderPass=function(){return b},this.end=function(_,E){_.toneMapping=g,x=!0;let w=a,R=o;for(let v=0;v<S.length;v++){let A=S[v];A.enabled!==!1&&(A.render(_,R,w,E),A.needsSwap!==!1&&(w=R,R=R===o?c:o))}if(h!==_.outputColorSpace||p!==_.toneMapping){h=_.outputColorSpace,p=_.toneMapping,u.defines={},wt.getTransfer(h)===Pt&&(u.defines.SRGB_TRANSFER="");let v=Qg[p];v&&(u.defines[v]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=w.texture,_.setRenderTarget(m),_.render(f,d),m=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var tf=new An,Fh=new Mi(1,1),nf=new Gr,sf=new Ho,rf=new Yr,Fd=[],Od=[],Bd=new Float32Array(16),Hd=new Float32Array(9),zd=new Float32Array(4);function xr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Fd[s];if(r===void 0&&(r=new Float32Array(s),Fd[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function on(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function ln(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ic(i,e){let t=Od[e];t===void 0&&(t=new Int32Array(e),Od[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function ex(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function tx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;i.uniform2fv(this.addr,e),ln(t,e)}}function nx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(on(t,e))return;i.uniform3fv(this.addr,e),ln(t,e)}}function ix(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;i.uniform4fv(this.addr,e),ln(t,e)}}function sx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),ln(t,e)}else{if(on(t,n))return;zd.set(n),i.uniformMatrix2fv(this.addr,!1,zd),ln(t,n)}}function rx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),ln(t,e)}else{if(on(t,n))return;Hd.set(n),i.uniformMatrix3fv(this.addr,!1,Hd),ln(t,n)}}function ax(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),ln(t,e)}else{if(on(t,n))return;Bd.set(n),i.uniformMatrix4fv(this.addr,!1,Bd),ln(t,n)}}function ox(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function lx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;i.uniform2iv(this.addr,e),ln(t,e)}}function cx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;i.uniform3iv(this.addr,e),ln(t,e)}}function hx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;i.uniform4iv(this.addr,e),ln(t,e)}}function ux(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function dx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;i.uniform2uiv(this.addr,e),ln(t,e)}}function fx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;i.uniform3uiv(this.addr,e),ln(t,e)}}function px(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;i.uniform4uiv(this.addr,e),ln(t,e)}}function mx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Fh.compareFunction=t.isReversedDepthBuffer()?Kl:$l,r=Fh):r=tf,t.setTexture2D(e||r,s)}function gx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||sf,s)}function xx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||rf,s)}function _x(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||nf,s)}function vx(i){switch(i){case 5126:return ex;case 35664:return tx;case 35665:return nx;case 35666:return ix;case 35674:return sx;case 35675:return rx;case 35676:return ax;case 5124:case 35670:return ox;case 35667:case 35671:return lx;case 35668:case 35672:return cx;case 35669:case 35673:return hx;case 5125:return ux;case 36294:return dx;case 36295:return fx;case 36296:return px;case 35678:case 36198:case 36298:case 36306:case 35682:return mx;case 35679:case 36299:case 36307:return gx;case 35680:case 36300:case 36308:case 36293:return xx;case 36289:case 36303:case 36311:case 36292:return _x}}function yx(i,e){i.uniform1fv(this.addr,e)}function Mx(i,e){let t=xr(e,this.size,2);i.uniform2fv(this.addr,t)}function Sx(i,e){let t=xr(e,this.size,3);i.uniform3fv(this.addr,t)}function Ex(i,e){let t=xr(e,this.size,4);i.uniform4fv(this.addr,t)}function bx(i,e){let t=xr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Tx(i,e){let t=xr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function wx(i,e){let t=xr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Ax(i,e){i.uniform1iv(this.addr,e)}function Rx(i,e){i.uniform2iv(this.addr,e)}function Cx(i,e){i.uniform3iv(this.addr,e)}function Px(i,e){i.uniform4iv(this.addr,e)}function Ix(i,e){i.uniform1uiv(this.addr,e)}function Dx(i,e){i.uniform2uiv(this.addr,e)}function Lx(i,e){i.uniform3uiv(this.addr,e)}function Ux(i,e){i.uniform4uiv(this.addr,e)}function Nx(i,e,t){let n=this.cache,s=e.length,r=ic(t,s);on(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Fh:a=tf;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Fx(i,e,t){let n=this.cache,s=e.length,r=ic(t,s);on(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||sf,r[a])}function Ox(i,e,t){let n=this.cache,s=e.length,r=ic(t,s);on(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||rf,r[a])}function Bx(i,e,t){let n=this.cache,s=e.length,r=ic(t,s);on(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||nf,r[a])}function Hx(i){switch(i){case 5126:return yx;case 35664:return Mx;case 35665:return Sx;case 35666:return Ex;case 35674:return bx;case 35675:return Tx;case 35676:return wx;case 5124:case 35670:return Ax;case 35667:case 35671:return Rx;case 35668:case 35672:return Cx;case 35669:case 35673:return Px;case 5125:return Ix;case 36294:return Dx;case 36295:return Lx;case 36296:return Ux;case 35678:case 36198:case 36298:case 36306:case 35682:return Nx;case 35679:case 36299:case 36307:return Fx;case 35680:case 36300:case 36308:case 36293:return Ox;case 36289:case 36303:case 36311:case 36292:return Bx}}var Oh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=vx(t.type)}},Bh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Hx(t.type)}},Hh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Uh=/(\w+)(\])?(\[|\.)?/g;function Vd(i,e){i.seq.push(e),i.map[e.id]=e}function zx(i,e,t){let n=i.name,s=n.length;for(Uh.lastIndex=0;;){let r=Uh.exec(n),a=Uh.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Vd(t,l===void 0?new Oh(o,i,e):new Bh(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new Hh(o),Vd(t,f)),t=f}}}var mr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);zx(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Gd(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Vx=37297,Gx=0;function kx(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var kd=new mt;function Wx(i){wt._getMatrix(kd,wt.workingColorSpace,i);let e=`mat3( ${kd.elements.map(t=>t.toFixed(4))} )`;switch(wt.getTransfer(i)){case Hr:return[e,"LinearTransferOETF"];case Pt:return[e,"sRGBTransferOETF"];default:return ot("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Wd(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+kx(i.getShaderSource(e),o)}else return r}function Xx(i,e){let t=Wx(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var qx={[pa]:"Linear",[ma]:"Reinhard",[ga]:"Cineon",[is]:"ACESFilmic",[_a]:"AgX",[va]:"Neutral",[xa]:"Custom"};function Yx(i,e){let t=qx[e];return t===void 0?(ot("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var jl=new C;function Zx(){wt.getLuminanceCoefficients(jl);let i=jl.x.toFixed(4),e=jl.y.toFixed(4),t=jl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Jx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ia).join(`
`)}function $x(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Kx(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ia(i){return i!==""}function Xd(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Qx=/^[ \t]*#include +<([\w\d./]+)>/gm;function zh(i){return i.replace(Qx,e_)}var jx=new Map;function e_(i,e){let t=yt[e];if(t===void 0){let n=jx.get(e);if(n!==void 0)t=yt[n],ot('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return zh(t)}var t_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yd(i){return i.replace(t_,n_)}function n_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Zd(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var i_={[ys]:"SHADOWMAP_TYPE_PCF",[hr]:"SHADOWMAP_TYPE_VSM"};function s_(i){return i_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var r_={[ss]:"ENVMAP_TYPE_CUBE",[Ss]:"ENVMAP_TYPE_CUBE",[ya]:"ENVMAP_TYPE_CUBE_UV"};function a_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":r_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var o_={[Ss]:"ENVMAP_MODE_REFRACTION"};function l_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":o_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var c_={[hh]:"ENVMAP_BLENDING_MULTIPLY",[ld]:"ENVMAP_BLENDING_MIX",[cd]:"ENVMAP_BLENDING_ADD"};function h_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":c_[i.combine]||"ENVMAP_BLENDING_NONE"}function u_(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function d_(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=s_(t),l=a_(t),u=l_(t),f=h_(t),d=u_(t),h=Jx(t),p=$x(r),x=s.createProgram(),g,m,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Ia).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Ia).join(`
`),m.length>0&&(m+=`
`)):(g=[Zd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ia).join(`
`),m=[Zd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Hn?"#define TONE_MAPPING":"",t.toneMapping!==Hn?yt.tonemapping_pars_fragment:"",t.toneMapping!==Hn?Yx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",yt.colorspace_pars_fragment,Xx("linearToOutputTexel",t.outputColorSpace),Zx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ia).join(`
`)),a=zh(a),a=Xd(a,t),a=qd(a,t),o=zh(o),o=Xd(o,t),o=qd(o,t),a=Yd(a),o=Yd(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,g=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===vh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===vh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let b=S+g+a,_=S+m+o,E=Gd(s,s.VERTEX_SHADER,b),w=Gd(s,s.FRAGMENT_SHADER,_);s.attachShader(x,E),s.attachShader(x,w),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function R(F){if(i.debug.checkShaderErrors){let M=s.getProgramInfoLog(x)||"",I=s.getShaderInfoLog(E)||"",L=s.getShaderInfoLog(w)||"",U=M.trim(),V=I.trim(),B=L.trim(),G=!0,O=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,E,w);else{let q=Wd(s,E,"vertex"),K=Wd(s,w,"fragment");ct("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+U+`
`+q+`
`+K)}else U!==""?ot("WebGLProgram: Program Info Log:",U):(V===""||B==="")&&(O=!1);O&&(F.diagnostics={runnable:G,programLog:U,vertexShader:{log:V,prefix:g},fragmentShader:{log:B,prefix:m}})}s.deleteShader(E),s.deleteShader(w),v=new mr(s,x),A=Kx(s,x)}let v;this.getUniforms=function(){return v===void 0&&R(this),v};let A;this.getAttributes=function(){return A===void 0&&R(this),A};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(x,Vx)),P},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Gx++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=E,this.fragmentShader=w,this}var f_=0,Vh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Gh(e),t.set(e,n)),n}},Gh=class{constructor(e){this.id=f_++,this.code=e,this.usedTimes=0}};function p_(i){return i===as||i===wa||i===Aa}function m_(i,e,t,n,s,r){let a=new Qs,o=new Vh,c=new Set,l=[],u=new Map,f=n.logarithmicDepthBuffer,d=n.precision,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return c.add(v),v===0?"uv":`uv${v}`}function x(v,A,P,F,M,I){let L=F.fog,U=M.geometry,V=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?F.environment:null,B=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,G=e.get(v.envMap||V,B),O=G&&G.mapping===ya?G.image.height:null,q=h[v.type];v.precision!==null&&(d=n.getMaxPrecision(v.precision),d!==v.precision&&ot("WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));let K=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,ie=K!==void 0?K.length:0,ve=0;U.morphAttributes.position!==void 0&&(ve=1),U.morphAttributes.normal!==void 0&&(ve=2),U.morphAttributes.color!==void 0&&(ve=3);let De,Le,Ye,Y;if(q){let rt=wi[q];De=rt.vertexShader,Le=rt.fragmentShader}else{De=v.vertexShader,Le=v.fragmentShader;let rt=o.getVertexShaderStage(v),tt=o.getFragmentShaderStage(v);o.update(v,rt,tt),Ye=rt.id,Y=tt.id}let ne=i.getRenderTarget(),ye=i.state.buffers.depth.getReversed(),pe=M.isInstancedMesh===!0,Me=M.isBatchedMesh===!0,Ue=!!v.map,je=!!v.matcap,fe=!!G,he=!!v.aoMap,Z=!!v.lightMap,se=!!v.bumpMap&&v.wireframe===!1,ue=!!v.normalMap,Te=!!v.displacementMap,we=!!v.emissiveMap,Ge=!!v.metalnessMap,Ze=!!v.roughnessMap,H=v.anisotropy>0,dt=v.clearcoat>0,nt=v.dispersion>0,D=v.retroreflectivity>0,y=v.iridescence>0,J=v.sheen>0,Q=v.transmission>0,re=H&&!!v.anisotropyMap,Pe=dt&&!!v.clearcoatMap,Ee=dt&&!!v.clearcoatNormalMap,ce=dt&&!!v.clearcoatRoughnessMap,_e=y&&!!v.iridescenceMap,Oe=y&&!!v.iridescenceThicknessMap,Qe=J&&!!v.sheenColorMap,Ne=J&&!!v.sheenRoughnessMap,Fe=!!v.specularMap,Ve=!!v.specularColorMap,$e=!!v.specularIntensityMap,it=Q&&!!v.transmissionMap,X=Q&&!!v.thicknessMap,Ie=!!v.gradientMap,z=!!v.alphaMap,me=v.alphaTest>0,xe=!!v.alphaHash,le=!!v.extensions,He=Hn;v.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(He=i.toneMapping);let ke={shaderID:q,shaderType:v.type,shaderName:v.name,vertexShader:De,fragmentShader:Le,defines:v.defines,customVertexShaderID:Ye,customFragmentShaderID:Y,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:Me,batchingColor:Me&&M._colorsTexture!==null,instancing:pe,instancingColor:pe&&M.instanceColor!==null,instancingMorph:pe&&M.morphTexture!==null,outputColorSpace:ne===null?i.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:wt.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Ue,matcap:je,envMap:fe,envMapMode:fe&&G.mapping,envMapCubeUVHeight:O,aoMap:he,lightMap:Z,bumpMap:se,normalMap:ue,displacementMap:Te,emissiveMap:we,normalMapObjectSpace:ue&&v.normalMapType===dd,normalMapTangentSpace:ue&&v.normalMapType===Ra,packedNormalMap:ue&&v.normalMapType===Ra&&p_(v.normalMap.format),metalnessMap:Ge,roughnessMap:Ze,anisotropy:H,anisotropyMap:re,clearcoat:dt,clearcoatMap:Pe,clearcoatNormalMap:Ee,clearcoatRoughnessMap:ce,dispersion:nt,retroreflection:D,iridescence:y,iridescenceMap:_e,iridescenceThicknessMap:Oe,sheen:J,sheenColorMap:Qe,sheenRoughnessMap:Ne,specularMap:Fe,specularColorMap:Ve,specularIntensityMap:$e,transmission:Q,transmissionMap:it,thicknessMap:X,gradientMap:Ie,opaque:v.transparent===!1&&v.blending===ur&&v.alphaToCoverage===!1,alphaMap:z,alphaTest:me,alphaHash:xe,combine:v.combine,mapUv:Ue&&p(v.map.channel),aoMapUv:he&&p(v.aoMap.channel),lightMapUv:Z&&p(v.lightMap.channel),bumpMapUv:se&&p(v.bumpMap.channel),normalMapUv:ue&&p(v.normalMap.channel),displacementMapUv:Te&&p(v.displacementMap.channel),emissiveMapUv:we&&p(v.emissiveMap.channel),metalnessMapUv:Ge&&p(v.metalnessMap.channel),roughnessMapUv:Ze&&p(v.roughnessMap.channel),anisotropyMapUv:re&&p(v.anisotropyMap.channel),clearcoatMapUv:Pe&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:Oe&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:Qe&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&p(v.sheenRoughnessMap.channel),specularMapUv:Fe&&p(v.specularMap.channel),specularColorMapUv:Ve&&p(v.specularColorMap.channel),specularIntensityMapUv:$e&&p(v.specularIntensityMap.channel),transmissionMapUv:it&&p(v.transmissionMap.channel),thicknessMapUv:X&&p(v.thicknessMap.channel),alphaMapUv:z&&p(v.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(ue||H),vertexNormals:!!U.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:M.isPoints===!0&&!!U.attributes.uv&&(Ue||z),fog:!!L,useFog:v.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||U.attributes.normal===void 0&&ue===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ye,skinning:M.isSkinnedMesh===!0,hasPositionAttribute:U.attributes.position!==void 0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:ve,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:I.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:He,decodeVideoTexture:Ue&&v.map.isVideoTexture===!0&&wt.getTransfer(v.map.colorSpace)===Pt,decodeVideoTextureEmissive:we&&v.emissiveMap.isVideoTexture===!0&&wt.getTransfer(v.emissiveMap.colorSpace)===Pt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===_n,flipSided:v.side===un,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:le&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(le&&v.extensions.multiDraw===!0||Me)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ke.vertexUv1s=c.has(1),ke.vertexUv2s=c.has(2),ke.vertexUv3s=c.has(3),c.clear(),ke}function g(v){let A=[];if(v.shaderID?A.push(v.shaderID):(A.push(v.customVertexShaderID),A.push(v.customFragmentShaderID)),v.defines!==void 0)for(let P in v.defines)A.push(P),A.push(v.defines[P]);return v.isRawShaderMaterial===!1&&(m(A,v),S(A,v),A.push(i.outputColorSpace)),A.push(v.customProgramCacheKey),A.join()}function m(v,A){v.push(A.precision),v.push(A.outputColorSpace),v.push(A.envMapMode),v.push(A.envMapCubeUVHeight),v.push(A.mapUv),v.push(A.alphaMapUv),v.push(A.lightMapUv),v.push(A.aoMapUv),v.push(A.bumpMapUv),v.push(A.normalMapUv),v.push(A.displacementMapUv),v.push(A.emissiveMapUv),v.push(A.metalnessMapUv),v.push(A.roughnessMapUv),v.push(A.anisotropyMapUv),v.push(A.clearcoatMapUv),v.push(A.clearcoatNormalMapUv),v.push(A.clearcoatRoughnessMapUv),v.push(A.iridescenceMapUv),v.push(A.iridescenceThicknessMapUv),v.push(A.sheenColorMapUv),v.push(A.sheenRoughnessMapUv),v.push(A.specularMapUv),v.push(A.specularColorMapUv),v.push(A.specularIntensityMapUv),v.push(A.transmissionMapUv),v.push(A.thicknessMapUv),v.push(A.combine),v.push(A.fogExp2),v.push(A.sizeAttenuation),v.push(A.morphTargetsCount),v.push(A.morphAttributeCount),v.push(A.numSunLights),v.push(A.numDirLights),v.push(A.numPointLights),v.push(A.numSpotLights),v.push(A.numSpotLightMaps),v.push(A.numHemiLights),v.push(A.numRectAreaLights),v.push(A.numSunLightShadows),v.push(A.numDirLightShadows),v.push(A.numPointLightShadows),v.push(A.numSpotLightShadows),v.push(A.numSpotLightShadowsWithMaps),v.push(A.numLightProbes),v.push(A.shadowMapType),v.push(A.toneMapping),v.push(A.numClippingPlanes),v.push(A.numClipIntersection),v.push(A.depthPacking)}function S(v,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.retroreflection&&a.enable(24),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),A.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function b(v){let A=h[v.type],P;if(A){let F=wi[A];P=Rn.clone(F.uniforms)}else P=v.uniforms;return P}function _(v,A){let P=u.get(A);return P!==void 0?++P.usedTimes:(P=new d_(i,A,v,s),l.push(P),u.set(A,P)),P}function E(v){if(--v.usedTimes===0){let A=l.indexOf(v);l[A]=l[l.length-1],l.pop(),u.delete(v.cacheKey),v.destroy()}}function w(v){o.remove(v)}function R(){o.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:b,acquireProgram:_,releaseProgram:E,releaseShaderCache:w,programs:l,dispose:R}}function g_(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function x_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Jd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function $d(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d){let h=0;return d.isInstancedMesh&&(h+=2),d.isSkinnedMesh&&(h+=1),h}function o(d,h,p,x,g,m){let S=i[e];return S===void 0?(S={id:d.id,object:d,geometry:h,material:p,materialVariant:a(d),groupOrder:x,renderOrder:d.renderOrder,z:g,group:m},i[e]=S):(S.id=d.id,S.object=d,S.geometry=h,S.material=p,S.materialVariant=a(d),S.groupOrder=x,S.renderOrder=d.renderOrder,S.z=g,S.group=m),e++,S}function c(d,h,p,x,g,m,S){S.reversedDepth===!0&&(g=-g);let b=o(d,h,p,x,g,m);p.transmission>0?n.push(b):p.transparent===!0?s.push(b):t.push(b)}function l(d,h,p,x,g,m){let S=o(d,h,p,x,g,m);p.transmission>0?n.unshift(S):p.transparent===!0?s.unshift(S):t.unshift(S)}function u(d,h){t.length>1&&t.sort(d||x_),n.length>1&&n.sort(h||Jd),s.length>1&&s.sort(h||Jd)}function f(){for(let d=e,h=i.length;d<h;d++){let p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:f,sort:u}}function __(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new $d,i.set(n,[a])):s>=r.length?(a=new $d,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function v_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new C,color:new Be};break;case"SpotLight":t={position:new C,direction:new C,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new C,halfWidth:new C,halfHeight:new C};break}return i[e.id]=t,t}}}function y_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var M_=0;function S_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function E_(i){let e=new v_,t=y_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new C);let s=new C,r=new st,a=new st;function o(l){let u=0,f=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let h=0,p=0,x=0,g=0,m=0,S=0,b=0,_=0,E=0,w=0,R=0,v=0,A=0,P=0;l.sort(S_);for(let M=0,I=l.length;M<I;M++){let L=l[M],U=L.color,V=L.intensity,B=L.distance,G=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===as?G=L.shadow.map.texture:G=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)u+=U.r*V,f+=U.g*V,d+=U.b*V;else if(L.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(L.sh.coefficients[O],V);P++}else if(L.isSunLight){let O=e.get(L);if(O.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let q=L.shadow,K=t.get(L);K.shadowIntensity=q.intensity,K.shadowBias=q.bias,K.shadowNormalBias=q.normalBias,K.shadowRadius=q.radius,K.shadowMapSize.copy(q.mapSize).multiply(q.getFrameExtents()),n.sunShadow[p]=K,n.sunShadowMap[p]=G;let ie=q.getViewportCount();for(let ve=0;ve<ie;ve++)n.sunShadowMatrix[x+ve]=q.getMatrix(ve),n.sunShadowCascade[x+ve]=q._cascadeData[ve];x+=ie,p++}n.sun[h]=O,h++}else if(L.isDirectionalLight){let O=e.get(L);if(O.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let q=L.shadow,K=t.get(L);K.shadowIntensity=q.intensity,K.shadowBias=q.bias,K.shadowNormalBias=q.normalBias,K.shadowRadius=q.radius,K.shadowMapSize=q.mapSize,n.directionalShadow[g]=K,n.directionalShadowMap[g]=G,n.directionalShadowMatrix[g]=L.shadow.matrix,E++}n.directional[g]=O,g++}else if(L.isSpotLight){let O=e.get(L);O.position.setFromMatrixPosition(L.matrixWorld),O.color.copy(U).multiplyScalar(V),O.distance=B,O.coneCos=Math.cos(L.angle),O.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),O.decay=L.decay,n.spot[S]=O;let q=L.shadow;if(L.map&&(n.spotLightMap[v]=L.map,v++,q.updateMatrices(L),L.castShadow&&A++),n.spotLightMatrix[S]=q.matrix,L.castShadow){let K=t.get(L);K.shadowIntensity=q.intensity,K.shadowBias=q.bias,K.shadowNormalBias=q.normalBias,K.shadowRadius=q.radius,K.shadowMapSize=q.mapSize,n.spotShadow[S]=K,n.spotShadowMap[S]=G,R++}S++}else if(L.isRectAreaLight){let O=e.get(L);O.color.copy(U).multiplyScalar(V),O.halfWidth.set(L.width*.5,0,0),O.halfHeight.set(0,L.height*.5,0),n.rectArea[b]=O,b++}else if(L.isPointLight){let O=e.get(L);if(O.color.copy(L.color).multiplyScalar(L.intensity),O.distance=L.distance,O.decay=L.decay,L.castShadow){let q=L.shadow,K=t.get(L);K.shadowIntensity=q.intensity,K.shadowBias=q.bias,K.shadowNormalBias=q.normalBias,K.shadowRadius=q.radius,K.shadowMapSize=q.mapSize,K.shadowCameraNear=q.camera.near,K.shadowCameraFar=q.camera.far,n.pointShadow[m]=K,n.pointShadowMap[m]=G,n.pointShadowMatrix[m]=L.shadow.matrix,w++}n.point[m]=O,m++}else if(L.isHemisphereLight){let O=e.get(L);O.skyColor.copy(L.color).multiplyScalar(V),O.groundColor.copy(L.groundColor).multiplyScalar(V),n.hemi[_]=O,_++}}b>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Xe.LTC_FLOAT_1,n.rectAreaLTC2=Xe.LTC_FLOAT_2):(n.rectAreaLTC1=Xe.LTC_HALF_1,n.rectAreaLTC2=Xe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=d;let F=n.hash;(F.sunLength!==h||F.directionalLength!==g||F.pointLength!==m||F.spotLength!==S||F.rectAreaLength!==b||F.hemiLength!==_||F.numSunShadows!==p||F.numDirectionalShadows!==E||F.numPointShadows!==w||F.numSpotShadows!==R||F.numSpotMaps!==v||F.numLightProbes!==P)&&(n.sun.length=h,n.directional.length=g,n.spot.length=S,n.rectArea.length=b,n.point.length=m,n.hemi.length=_,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=R,n.spotShadowMap.length=R,n.spotLightMatrix.length=R+v-A,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=P,F.sunLength=h,F.directionalLength=g,F.pointLength=m,F.spotLength=S,F.rectAreaLength=b,F.hemiLength=_,F.numSunShadows=p,F.numDirectionalShadows=E,F.numPointShadows=w,F.numSpotShadows=R,F.numSpotMaps=v,F.numLightProbes=P,n.version=M_++)}function c(l,u){let f=0,d=0,h=0,p=0,x=0,g=0,m=u.matrixWorldInverse;for(let S=0,b=l.length;S<b;S++){let _=l[S];if(_.isSunLight){let E=n.sun[f];E.direction.setFromMatrixPosition(_.matrixWorld),E.direction.transformDirection(m),f++}else if(_.isDirectionalLight){let E=n.directional[d];E.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),d++}else if(_.isSpotLight){let E=n.spot[p];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),p++}else if(_.isRectAreaLight){let E=n.rectArea[x];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(m),a.identity(),r.copy(_.matrixWorld),r.premultiply(m),a.extractRotation(r),E.halfWidth.set(_.width*.5,0,0),E.halfHeight.set(0,_.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),x++}else if(_.isPointLight){let E=n.point[h];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(m),h++}else if(_.isHemisphereLight){let E=n.hemi[g];E.direction.setFromMatrixPosition(_.matrixWorld),E.direction.transformDirection(m),g++}}}return{setup:o,setupView:c,state:n}}function Kd(i){let e=new E_(i),t=[],n=[],s=[];function r(d){f.camera=d,t.length=0,n.length=0,s.length=0}function a(d){t.push(d)}function o(d){n.push(d)}function c(d){s.push(d)}function l(){e.setup(t)}function u(d){e.setupView(t,d)}let f={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:l,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function b_(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Kd(i),e.set(s,[o])):r>=a.length?(o=new Kd(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var T_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,w_=`uniform sampler2D shadow_pass;
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
}`,A_=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],R_=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],Qd=new st,Pa=new C,Nh=new C;function C_(i,e,t){let n=new nr,s=new Se,r=new Se,a=new Vt,o=new Zo,c=new Jo,l={},u=t.maxTextureSize,f={[ns]:un,[un]:ns,[_n]:_n},d=new Dt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Se},radius:{value:4}},vertexShader:T_,fragmentShader:w_}),h=d.clone();h.defines.HORIZONTAL_PASS=1;let p=new St;p.setAttribute("position",new _t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Re(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ys;let m=this.type;this.render=function(w,R,v){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;this.type===Yu&&(ot("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ys);let A=i.getRenderTarget(),P=i.getActiveCubeFace(),F=i.getActiveMipmapLevel(),M=i.state;M.setBlending(en),M.buffers.depth.getReversed()===!0?M.buffers.color.setClear(0,0,0,0):M.buffers.color.setClear(1,1,1,1),M.buffers.depth.setTest(!0),M.setScissorTest(!1);let I=m!==this.type;I&&R.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(U=>U.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,U=w.length;L<U;L++){let V=w[L],B=V.shadow;if(B===void 0){ot("WebGLShadowMap:",V,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);let G=B.getFrameExtents();s.multiply(G),r.copy(B.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/G.x),s.x=r.x*G.x,B.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/G.y),s.y=r.y*G.y,B.mapSize.y=r.y));let O=i.state.buffers.depth.getReversed();if(B.camera._reversedDepth=O,B.map===null||I===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===hr){if(V.isPointLight){ot("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Wt(s.x,s.y,{format:as,type:Kt,minFilter:sn,magFilter:sn,generateMipmaps:!1}),B.map.texture.name=V.name+".shadowMap",B.map.depthTexture=new Mi(s.x,s.y,Yn),B.map.depthTexture.name=V.name+".shadowMapDepth",B.map.depthTexture.format=gi,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Qt,B.map.depthTexture.magFilter=Qt}else V.isPointLight?(B.map=new ec(s.x),B.map.depthTexture=new ko(s.x,ai)):(B.map=new Wt(s.x,s.y),B.map.depthTexture=new Mi(s.x,s.y,ai)),B.map.depthTexture.name=V.name+".shadowMap",B.map.depthTexture.format=gi,this.type===ys?(B.map.depthTexture.compareFunction=O?Kl:$l,B.map.depthTexture.minFilter=sn,B.map.depthTexture.magFilter=sn):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Qt,B.map.depthTexture.magFilter=Qt);B.camera.updateProjectionMatrix()}B.map.isWebGLCubeRenderTarget!==!0&&(B.map.width!==s.x||B.map.height!==s.y)&&B.map.setSize(s.x,s.y);let q=B.map.isWebGLCubeRenderTarget?6:B.getViewportCount();V.isPointLight!==!0&&B.updateMatrices(V,v);for(let K=0;K<q;K++){let ie=B.getCamera(K);if(V.isPointLight){let ve=B.camera,De=B.matrix,Le=V.distance||ve.far;Le!==ve.far&&(ve.far=Le,ve.updateProjectionMatrix()),Pa.setFromMatrixPosition(V.matrixWorld),ve.position.copy(Pa),Nh.copy(ve.position),Nh.add(A_[K]),ve.up.copy(R_[K]),ve.lookAt(Nh),ve.updateMatrixWorld(),De.makeTranslation(-Pa.x,-Pa.y,-Pa.z),Qd.multiplyMatrices(ve.projectionMatrix,ve.matrixWorldInverse),B._frustum.setFromProjectionMatrix(Qd,ve.coordinateSystem,ve.reversedDepth)}if(B.map.isWebGLCubeRenderTarget)i.setRenderTarget(B.map,K),i.clear();else{K===0&&(i.setRenderTarget(B.map),i.clear());let ve=B.getViewport(K);a.set(r.x*ve.x,r.y*ve.y,r.x*ve.z,r.y*ve.w),M.viewport(a)}n=B.getFrustum(K),_(R,v,ie,V,this.type)}B.isPointLightShadow!==!0&&this.type===hr&&S(B,v),B.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(A,P,F)};function S(w,R){let v=e.update(x);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,h.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),w.mapPass===null?w.mapPass=new Wt(s.x,s.y,{format:as,type:Kt}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(R,null,v,d,x,null),h.uniforms.shadow_pass.value=w.mapPass.texture,h.uniforms.resolution.value.set(w.map.width,w.map.height),h.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(R,null,v,h,x,null)}function b(w,R,v,A){let P=null,F=v.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(F!==void 0)P=F;else if(P=v.isPointLight===!0?c:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let M=P.uuid,I=R.uuid,L=l[M];L===void 0&&(L={},l[M]=L);let U=L[I];U===void 0&&(U=P.clone(),L[I]=U,R.addEventListener("dispose",E)),P=U}if(P.visible=R.visible,P.wireframe=R.wireframe,A===hr?P.side=R.shadowSide!==null?R.shadowSide:R.side:P.side=R.shadowSide!==null?R.shadowSide:f[R.side],P.alphaMap=R.alphaMap,P.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,P.map=R.map,P.clipShadows=R.clipShadows,P.clippingPlanes=R.clippingPlanes,P.clipIntersection=R.clipIntersection,P.displacementMap=R.displacementMap,P.displacementScale=R.displacementScale,P.displacementBias=R.displacementBias,P.wireframeLinewidth=R.wireframeLinewidth,P.linewidth=R.linewidth,v.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let M=i.properties.get(P);M.light=v}return P}function _(w,R,v,A,P){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&P===hr)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,w.matrixWorld);let I=e.update(w),L=w.material;if(Array.isArray(L)){let U=I.groups;for(let V=0,B=U.length;V<B;V++){let G=U[V],O=L[G.materialIndex];if(O&&O.visible){let q=b(w,O,A,P);w.onBeforeShadow(i,w,R,v,I,q,G),i.renderBufferDirect(v,null,I,q,w,G),w.onAfterShadow(i,w,R,v,I,q,G)}}}else if(L.visible){let U=b(w,L,A,P);w.onBeforeShadow(i,w,R,v,I,U,null),i.renderBufferDirect(v,null,I,U,w,null),w.onAfterShadow(i,w,R,v,I,U,null)}}let M=w.children;for(let I=0,L=M.length;I<L;I++)_(M[I],R,v,A,P)}function E(w){w.target.removeEventListener("dispose",E);for(let v in l){let A=l[v],P=w.target.uuid;P in A&&(A[P].dispose(),delete A[P])}}}function P_(i,e){function t(){let X=!1,Ie=new Vt,z=null,me=new Vt(0,0,0,0);return{setMask:function(xe){z!==xe&&!X&&(i.colorMask(xe,xe,xe,xe),z=xe)},setLocked:function(xe){X=xe},setClear:function(xe,le,He,ke,rt){rt===!0&&(xe*=ke,le*=ke,He*=ke),Ie.set(xe,le,He,ke),me.equals(Ie)===!1&&(i.clearColor(xe,le,He,ke),me.copy(Ie))},reset:function(){X=!1,z=null,me.set(-1,0,0,0)}}}function n(){let X=!1,Ie=!1,z=null,me=null,xe=null;return{setReversed:function(le){if(Ie!==le){let He=e.get("EXT_clip_control");le?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT),Ie=le;let ke=xe;xe=null,this.setClear(ke)}},getReversed:function(){return Ie},setTest:function(le){le?ne(i.DEPTH_TEST):ye(i.DEPTH_TEST)},setMask:function(le){z!==le&&!X&&(i.depthMask(le),z=le)},setFunc:function(le){if(Ie&&(le=Ed[le]),me!==le){switch(le){case Ao:i.depthFunc(i.NEVER);break;case Ro:i.depthFunc(i.ALWAYS);break;case Co:i.depthFunc(i.LESS);break;case Zs:i.depthFunc(i.LEQUAL);break;case Po:i.depthFunc(i.EQUAL);break;case Io:i.depthFunc(i.GEQUAL);break;case Do:i.depthFunc(i.GREATER);break;case Lo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}me=le}},setLocked:function(le){X=le},setClear:function(le){xe!==le&&(xe=le,Ie&&(le=1-le),i.clearDepth(le))},reset:function(){X=!1,z=null,me=null,xe=null,Ie=!1}}}function s(){let X=!1,Ie=null,z=null,me=null,xe=null,le=null,He=null,ke=null,rt=null;return{setTest:function(tt){X||(tt?ne(i.STENCIL_TEST):ye(i.STENCIL_TEST))},setMask:function(tt){Ie!==tt&&!X&&(i.stencilMask(tt),Ie=tt)},setFunc:function(tt,Zt,tn){(z!==tt||me!==Zt||xe!==tn)&&(i.stencilFunc(tt,Zt,tn),z=tt,me=Zt,xe=tn)},setOp:function(tt,Zt,tn){(le!==tt||He!==Zt||ke!==tn)&&(i.stencilOp(tt,Zt,tn),le=tt,He=Zt,ke=tn)},setLocked:function(tt){X=tt},setClear:function(tt){rt!==tt&&(i.clearStencil(tt),rt=tt)},reset:function(){X=!1,Ie=null,z=null,me=null,xe=null,le=null,He=null,ke=null,rt=null}}}let r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap,u={},f={},d={},h=new WeakMap,p=[],x=null,g=!1,m=null,S=null,b=null,_=null,E=null,w=null,R=null,v=new Be(0,0,0),A=0,P=!1,F=null,M=null,I=null,L=null,U=null,V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,G=0,O=i.getParameter(i.VERSION);O.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(O)[1]),B=G>=1):O.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),B=G>=2);let q=null,K={},ie=i.getParameter(i.SCISSOR_BOX),ve=i.getParameter(i.VIEWPORT),De=new Vt().fromArray(ie),Le=new Vt().fromArray(ve);function Ye(X,Ie,z,me){let xe=new Uint8Array(4),le=i.createTexture();i.bindTexture(X,le),i.texParameteri(X,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(X,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let He=0;He<z;He++)X===i.TEXTURE_3D||X===i.TEXTURE_2D_ARRAY?i.texImage3D(Ie,0,i.RGBA,1,1,me,0,i.RGBA,i.UNSIGNED_BYTE,xe):i.texImage2D(Ie+He,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xe);return le}let Y={};Y[i.TEXTURE_2D]=Ye(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=Ye(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=Ye(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=Ye(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ne(i.DEPTH_TEST),a.setFunc(Zs),se(!1),ue(rh),ne(i.CULL_FACE),he(en);function ne(X){u[X]!==!0&&(i.enable(X),u[X]=!0)}function ye(X){u[X]!==!1&&(i.disable(X),u[X]=!1)}function pe(X,Ie){return d[X]!==Ie?(i.bindFramebuffer(X,Ie),d[X]=Ie,X===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=Ie),X===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=Ie),!0):!1}function Me(X,Ie){let z=p,me=!1;if(X){z=h.get(Ie),z===void 0&&(z=[],h.set(Ie,z));let xe=X.textures;if(z.length!==xe.length||z[0]!==i.COLOR_ATTACHMENT0){for(let le=0,He=xe.length;le<He;le++)z[le]=i.COLOR_ATTACHMENT0+le;z.length=xe.length,me=!0}}else z[0]!==i.BACK&&(z[0]=i.BACK,me=!0);me&&i.drawBuffers(z)}function Ue(X){return x!==X?(i.useProgram(X),x=X,!0):!1}let je={[qn]:i.FUNC_ADD,[Zu]:i.FUNC_SUBTRACT,[Ju]:i.FUNC_REVERSE_SUBTRACT};je[$u]=i.MIN,je[Ku]=i.MAX;let fe={[Ms]:i.ZERO,[Qu]:i.ONE,[ju]:i.SRC_COLOR,[lh]:i.SRC_ALPHA,[id]:i.SRC_ALPHA_SATURATE,[fa]:i.DST_COLOR,[da]:i.DST_ALPHA,[ed]:i.ONE_MINUS_SRC_COLOR,[ch]:i.ONE_MINUS_SRC_ALPHA,[nd]:i.ONE_MINUS_DST_COLOR,[td]:i.ONE_MINUS_DST_ALPHA,[sd]:i.CONSTANT_COLOR,[rd]:i.ONE_MINUS_CONSTANT_COLOR,[ad]:i.CONSTANT_ALPHA,[od]:i.ONE_MINUS_CONSTANT_ALPHA};function he(X,Ie,z,me,xe,le,He,ke,rt,tt){if(X===en){g===!0&&(ye(i.BLEND),g=!1);return}if(g===!1&&(ne(i.BLEND),g=!0),X!==cl){if(X!==m||tt!==P){if((S!==qn||E!==qn)&&(i.blendEquation(i.FUNC_ADD),S=qn,E=qn),tt)switch(X){case ur:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Bt:i.blendFunc(i.ONE,i.ONE);break;case ah:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case oh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ct("WebGLState: Invalid blending: ",X);break}else switch(X){case ur:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Bt:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ah:ct("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case oh:ct("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ct("WebGLState: Invalid blending: ",X);break}b=null,_=null,w=null,R=null,v.set(0,0,0),A=0,m=X,P=tt}return}xe=xe||Ie,le=le||z,He=He||me,(Ie!==S||xe!==E)&&(i.blendEquationSeparate(je[Ie],je[xe]),S=Ie,E=xe),(z!==b||me!==_||le!==w||He!==R)&&(i.blendFuncSeparate(fe[z],fe[me],fe[le],fe[He]),b=z,_=me,w=le,R=He),(ke.equals(v)===!1||rt!==A)&&(i.blendColor(ke.r,ke.g,ke.b,rt),v.copy(ke),A=rt),m=X,P=!1}function Z(X,Ie){X.side===_n?ye(i.CULL_FACE):ne(i.CULL_FACE);let z=X.side===un;Ie&&(z=!z),se(z),X.blending===ur&&X.transparent===!1?he(en):he(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),a.setFunc(X.depthFunc),a.setTest(X.depthTest),a.setMask(X.depthWrite),r.setMask(X.colorWrite);let me=X.stencilWrite;o.setTest(me),me&&(o.setMask(X.stencilWriteMask),o.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),o.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),we(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?ne(i.SAMPLE_ALPHA_TO_COVERAGE):ye(i.SAMPLE_ALPHA_TO_COVERAGE)}function se(X){F!==X&&(X?i.frontFace(i.CW):i.frontFace(i.CCW),F=X)}function ue(X){X!==Xu?(ne(i.CULL_FACE),X!==M&&(X===rh?i.cullFace(i.BACK):X===qu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ye(i.CULL_FACE),M=X}function Te(X){X!==I&&(B&&i.lineWidth(X),I=X)}function we(X,Ie,z){X?(ne(i.POLYGON_OFFSET_FILL),(L!==Ie||U!==z)&&(L=Ie,U=z,a.getReversed()&&(Ie=-Ie),i.polygonOffset(Ie,z))):ye(i.POLYGON_OFFSET_FILL)}function Ge(X){X?ne(i.SCISSOR_TEST):ye(i.SCISSOR_TEST)}function Ze(X){X===void 0&&(X=i.TEXTURE0+V-1),q!==X&&(i.activeTexture(X),q=X)}function H(X,Ie,z){z===void 0&&(q===null?z=i.TEXTURE0+V-1:z=q);let me=K[z];me===void 0&&(me={type:void 0,texture:void 0},K[z]=me),(me.type!==X||me.texture!==Ie)&&(q!==z&&(i.activeTexture(z),q=z),i.bindTexture(X,Ie||Y[X]),me.type=X,me.texture=Ie)}function dt(){let X=K[q];X!==void 0&&X.type!==void 0&&(i.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function nt(){try{i.compressedTexImage2D(...arguments)}catch(X){ct("WebGLState:",X)}}function D(){try{i.compressedTexImage3D(...arguments)}catch(X){ct("WebGLState:",X)}}function y(){try{i.texSubImage2D(...arguments)}catch(X){ct("WebGLState:",X)}}function J(){try{i.texSubImage3D(...arguments)}catch(X){ct("WebGLState:",X)}}function Q(){try{i.compressedTexSubImage2D(...arguments)}catch(X){ct("WebGLState:",X)}}function re(){try{i.compressedTexSubImage3D(...arguments)}catch(X){ct("WebGLState:",X)}}function Pe(){try{i.texStorage2D(...arguments)}catch(X){ct("WebGLState:",X)}}function Ee(){try{i.texStorage3D(...arguments)}catch(X){ct("WebGLState:",X)}}function ce(){try{i.texImage2D(...arguments)}catch(X){ct("WebGLState:",X)}}function _e(){try{i.texImage3D(...arguments)}catch(X){ct("WebGLState:",X)}}function Oe(X){return f[X]!==void 0?f[X]:i.getParameter(X)}function Qe(X,Ie){f[X]!==Ie&&(i.pixelStorei(X,Ie),f[X]=Ie)}function Ne(X){De.equals(X)===!1&&(i.scissor(X.x,X.y,X.z,X.w),De.copy(X))}function Fe(X){Le.equals(X)===!1&&(i.viewport(X.x,X.y,X.z,X.w),Le.copy(X))}function Ve(X,Ie){let z=l.get(Ie);z===void 0&&(z=new WeakMap,l.set(Ie,z));let me=z.get(X);me===void 0&&(me=i.getUniformBlockIndex(Ie,X.name),z.set(X,me))}function $e(X,Ie){let me=l.get(Ie).get(X);c.get(Ie)!==me&&(i.uniformBlockBinding(Ie,me,X.__bindingPointIndex),c.set(Ie,me))}function it(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},f={},q=null,K={},d={},h=new WeakMap,p=[],x=null,g=!1,m=null,S=null,b=null,_=null,E=null,w=null,R=null,v=new Be(0,0,0),A=0,P=!1,F=null,M=null,I=null,L=null,U=null,De.set(0,0,i.canvas.width,i.canvas.height),Le.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ne,disable:ye,bindFramebuffer:pe,drawBuffers:Me,useProgram:Ue,setBlending:he,setMaterial:Z,setFlipSided:se,setCullFace:ue,setLineWidth:Te,setPolygonOffset:we,setScissorTest:Ge,activeTexture:Ze,bindTexture:H,unbindTexture:dt,compressedTexImage2D:nt,compressedTexImage3D:D,texImage2D:ce,texImage3D:_e,pixelStorei:Qe,getParameter:Oe,updateUBOMapping:Ve,uniformBlockBinding:$e,texStorage2D:Pe,texStorage3D:Ee,texSubImage2D:y,texSubImage3D:J,compressedTexSubImage2D:Q,compressedTexSubImage3D:re,scissor:Ne,viewport:Fe,reset:it}}function I_(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Se,u=new WeakMap,f=new Set,d,h=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(D,y){return p?new OffscreenCanvas(D,y):zr("canvas")}function g(D,y,J){let Q=1,re=nt(D);if((re.width>J||re.height>J)&&(Q=J/Math.max(re.width,re.height)),Q<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){let Pe=Math.floor(Q*re.width),Ee=Math.floor(Q*re.height);d===void 0&&(d=x(Pe,Ee));let ce=y?x(Pe,Ee):d;return ce.width=Pe,ce.height=Ee,ce.getContext("2d").drawImage(D,0,0,Pe,Ee),ot("WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+Pe+"x"+Ee+")."),ce}else return"data"in D&&ot("WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),D;return D}function m(D){return D.generateMipmaps}function S(D){i.generateMipmap(D)}function b(D){return D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?i.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(D,y,J,Q,re,Pe=!1){if(D!==null){if(i[D]!==void 0)return i[D];ot("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Ee;Q&&(Ee=e.get("EXT_texture_norm16"),Ee||ot("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ce=y;if(y===i.RED&&(J===i.FLOAT&&(ce=i.R32F),J===i.HALF_FLOAT&&(ce=i.R16F),J===i.UNSIGNED_BYTE&&(ce=i.R8),J===i.UNSIGNED_SHORT&&Ee&&(ce=Ee.R16_EXT),J===i.SHORT&&Ee&&(ce=Ee.R16_SNORM_EXT)),y===i.RED_INTEGER&&(J===i.UNSIGNED_BYTE&&(ce=i.R8UI),J===i.UNSIGNED_SHORT&&(ce=i.R16UI),J===i.UNSIGNED_INT&&(ce=i.R32UI),J===i.BYTE&&(ce=i.R8I),J===i.SHORT&&(ce=i.R16I),J===i.INT&&(ce=i.R32I)),y===i.RG&&(J===i.FLOAT&&(ce=i.RG32F),J===i.HALF_FLOAT&&(ce=i.RG16F),J===i.UNSIGNED_BYTE&&(ce=i.RG8),J===i.UNSIGNED_SHORT&&Ee&&(ce=Ee.RG16_EXT),J===i.SHORT&&Ee&&(ce=Ee.RG16_SNORM_EXT)),y===i.RG_INTEGER&&(J===i.UNSIGNED_BYTE&&(ce=i.RG8UI),J===i.UNSIGNED_SHORT&&(ce=i.RG16UI),J===i.UNSIGNED_INT&&(ce=i.RG32UI),J===i.BYTE&&(ce=i.RG8I),J===i.SHORT&&(ce=i.RG16I),J===i.INT&&(ce=i.RG32I)),y===i.RGB_INTEGER&&(J===i.UNSIGNED_BYTE&&(ce=i.RGB8UI),J===i.UNSIGNED_SHORT&&(ce=i.RGB16UI),J===i.UNSIGNED_INT&&(ce=i.RGB32UI),J===i.BYTE&&(ce=i.RGB8I),J===i.SHORT&&(ce=i.RGB16I),J===i.INT&&(ce=i.RGB32I)),y===i.RGBA_INTEGER&&(J===i.UNSIGNED_BYTE&&(ce=i.RGBA8UI),J===i.UNSIGNED_SHORT&&(ce=i.RGBA16UI),J===i.UNSIGNED_INT&&(ce=i.RGBA32UI),J===i.BYTE&&(ce=i.RGBA8I),J===i.SHORT&&(ce=i.RGBA16I),J===i.INT&&(ce=i.RGBA32I)),y===i.RGB&&(J===i.UNSIGNED_SHORT&&Ee&&(ce=Ee.RGB16_EXT),J===i.SHORT&&Ee&&(ce=Ee.RGB16_SNORM_EXT),J===i.UNSIGNED_INT_5_9_9_9_REV&&(ce=i.RGB9_E5),J===i.UNSIGNED_INT_10F_11F_11F_REV&&(ce=i.R11F_G11F_B10F)),y===i.RGBA){let _e=Pe?Hr:wt.getTransfer(re);J===i.FLOAT&&(ce=i.RGBA32F),J===i.HALF_FLOAT&&(ce=i.RGBA16F),J===i.UNSIGNED_BYTE&&(ce=_e===Pt?i.SRGB8_ALPHA8:i.RGBA8),J===i.UNSIGNED_SHORT&&Ee&&(ce=Ee.RGBA16_EXT),J===i.SHORT&&Ee&&(ce=Ee.RGBA16_SNORM_EXT),J===i.UNSIGNED_SHORT_4_4_4_4&&(ce=i.RGBA4),J===i.UNSIGNED_SHORT_5_5_5_1&&(ce=i.RGB5_A1)}return(ce===i.R16F||ce===i.R32F||ce===i.RG16F||ce===i.RG32F||ce===i.RGBA16F||ce===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function E(D,y){let J;return D?y===null||y===ai||y===rs?J=i.DEPTH24_STENCIL8:y===Yn?J=i.DEPTH32F_STENCIL8:y===dr&&(J=i.DEPTH24_STENCIL8,ot("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===ai||y===rs?J=i.DEPTH_COMPONENT24:y===Yn?J=i.DEPTH_COMPONENT32F:y===dr&&(J=i.DEPTH_COMPONENT16),J}function w(D,y){return m(D)===!0||D.isFramebufferTexture&&D.minFilter!==Qt&&D.minFilter!==sn?Math.log2(Math.max(y.width,y.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?y.mipmaps.length:1}function R(D){let y=D.target;y.removeEventListener("dispose",R),A(y),y.isVideoTexture&&u.delete(y),y.isHTMLTexture&&f.delete(y)}function v(D){let y=D.target;y.removeEventListener("dispose",v),F(y)}function A(D){let y=n.get(D);if(y.__webglInit===void 0)return;let J=D.source,Q=h.get(J);if(Q){let re=Q[y.__cacheKey];re.usedTimes--,re.usedTimes===0&&P(D),Object.keys(Q).length===0&&h.delete(J)}n.remove(D)}function P(D){let y=n.get(D);i.deleteTexture(y.__webglTexture);let J=D.source,Q=h.get(J);delete Q[y.__cacheKey],a.memory.textures--}function F(D){let y=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(y.__webglFramebuffer[Q]))for(let re=0;re<y.__webglFramebuffer[Q].length;re++)i.deleteFramebuffer(y.__webglFramebuffer[Q][re]);else i.deleteFramebuffer(y.__webglFramebuffer[Q]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[Q])}else{if(Array.isArray(y.__webglFramebuffer))for(let Q=0;Q<y.__webglFramebuffer.length;Q++)i.deleteFramebuffer(y.__webglFramebuffer[Q]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Q=0;Q<y.__webglColorRenderbuffer.length;Q++)y.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[Q]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let J=D.textures;for(let Q=0,re=J.length;Q<re;Q++){let Pe=n.get(J[Q]);Pe.__webglTexture&&(i.deleteTexture(Pe.__webglTexture),a.memory.textures--),n.remove(J[Q])}n.remove(D)}let M=0;function I(){M=0}function L(){return M}function U(D){M=D}function V(){let D=M;return D>=s.maxTextures&&ot("WebGLTextures: Trying to use "+(D+1)+" texture units while this GPU supports only "+s.maxTextures),M+=1,D}function B(D){let y=[];return y.push(D.wrapS),y.push(D.wrapT),y.push(D.wrapR||0),y.push(D.magFilter),y.push(D.minFilter),y.push(D.anisotropy),y.push(D.internalFormat),y.push(D.format),y.push(D.type),y.push(D.generateMipmaps),y.push(D.premultiplyAlpha),y.push(D.flipY),y.push(D.unpackAlignment),y.push(D.colorSpace),y.join()}function G(D,y){let J=n.get(D);if(D.isVideoTexture&&H(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&J.__version!==D.version){let Q=D.image;if(Q===null)ot("WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)ot("WebGLRenderer: Texture marked for update but image is incomplete");else{ye(J,D,y);return}}else D.isExternalTexture&&(J.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,J.__webglTexture,i.TEXTURE0+y)}function O(D,y){let J=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&J.__version!==D.version){ye(J,D,y);return}else D.isExternalTexture&&(J.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,J.__webglTexture,i.TEXTURE0+y)}function q(D,y){let J=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&J.__version!==D.version){ye(J,D,y);return}t.bindTexture(i.TEXTURE_3D,J.__webglTexture,i.TEXTURE0+y)}function K(D,y){let J=n.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&J.__version!==D.version){pe(J,D,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture,i.TEXTURE0+y)}let ie={[pn]:i.REPEAT,[mi]:i.CLAMP_TO_EDGE,[Uo]:i.MIRRORED_REPEAT},ve={[Qt]:i.NEAREST,[hd]:i.NEAREST_MIPMAP_NEAREST,[Ma]:i.NEAREST_MIPMAP_LINEAR,[sn]:i.LINEAR,[dl]:i.LINEAR_MIPMAP_NEAREST,[Ei]:i.LINEAR_MIPMAP_LINEAR},De={[pd]:i.NEVER,[vd]:i.ALWAYS,[md]:i.LESS,[$l]:i.LEQUAL,[gd]:i.EQUAL,[Kl]:i.GEQUAL,[xd]:i.GREATER,[_d]:i.NOTEQUAL};function Le(D,y){if(y.type===Yn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===sn||y.magFilter===dl||y.magFilter===Ma||y.magFilter===Ei||y.minFilter===sn||y.minFilter===dl||y.minFilter===Ma||y.minFilter===Ei)&&ot("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,ie[y.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,ie[y.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,ie[y.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,ve[y.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,ve[y.minFilter]),y.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,De[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Qt||y.minFilter!==Ma&&y.minFilter!==Ei||y.type===Yn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let J=e.get("EXT_texture_filter_anisotropic");i.texParameterf(D,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Ye(D,y){let J=!1;D.__webglInit===void 0&&(D.__webglInit=!0,y.addEventListener("dispose",R));let Q=y.source,re=h.get(Q);re===void 0&&(re={},h.set(Q,re));let Pe=B(y);if(Pe!==D.__cacheKey){re[Pe]===void 0&&(re[Pe]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,J=!0),re[Pe].usedTimes++;let Ee=re[D.__cacheKey];Ee!==void 0&&(re[D.__cacheKey].usedTimes--,Ee.usedTimes===0&&P(y)),D.__cacheKey=Pe,D.__webglTexture=re[Pe].texture}return J}function Y(D,y,J){return Math.floor(Math.floor(D/J)/y)}function ne(D,y,J,Q){let Pe=D.updateRanges;if(Pe.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,J,Q,y.data);else{Pe.sort((Qe,Ne)=>Qe.start-Ne.start);let Ee=0;for(let Qe=1;Qe<Pe.length;Qe++){let Ne=Pe[Ee],Fe=Pe[Qe],Ve=Ne.start+Ne.count,$e=Y(Fe.start,y.width,4),it=Y(Ne.start,y.width,4);Fe.start<=Ve+1&&$e===it&&Y(Fe.start+Fe.count-1,y.width,4)===$e?Ne.count=Math.max(Ne.count,Fe.start+Fe.count-Ne.start):(++Ee,Pe[Ee]=Fe)}Pe.length=Ee+1;let ce=t.getParameter(i.UNPACK_ROW_LENGTH),_e=t.getParameter(i.UNPACK_SKIP_PIXELS),Oe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let Qe=0,Ne=Pe.length;Qe<Ne;Qe++){let Fe=Pe[Qe],Ve=Math.floor(Fe.start/4),$e=Math.ceil(Fe.count/4),it=Ve%y.width,X=Math.floor(Ve/y.width),Ie=$e,z=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,it),t.pixelStorei(i.UNPACK_SKIP_ROWS,X),t.texSubImage2D(i.TEXTURE_2D,0,it,X,Ie,z,J,Q,y.data)}D.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ce),t.pixelStorei(i.UNPACK_SKIP_PIXELS,_e),t.pixelStorei(i.UNPACK_SKIP_ROWS,Oe)}}function ye(D,y,J){let Q=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Q=i.TEXTURE_3D);let re=Ye(D,y),Pe=y.source;t.bindTexture(Q,D.__webglTexture,i.TEXTURE0+J);let Ee=n.get(Pe);if(Pe.version!==Ee.__version||re===!0){if(t.activeTexture(i.TEXTURE0+J),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let z=wt.getPrimaries(wt.workingColorSpace),me=y.colorSpace===oi?null:wt.getPrimaries(y.colorSpace),xe=y.colorSpace===oi||z===me?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe)}t.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment);let _e=g(y.image,!1,s.maxTextureSize);_e=dt(y,_e);let Oe=r.convert(y.format,y.colorSpace),Qe=r.convert(y.type),Ne=_(y.internalFormat,Oe,Qe,y.normalized,y.colorSpace,y.isVideoTexture);Le(Q,y);let Fe,Ve=y.mipmaps,$e=y.isVideoTexture!==!0,it=Ee.__version===void 0||re===!0,X=Pe.dataReady,Ie=w(y,_e);if(y.isDepthTexture)Ne=E(y.format===bi,y.type),it&&($e?t.texStorage2D(i.TEXTURE_2D,1,Ne,_e.width,_e.height):t.texImage2D(i.TEXTURE_2D,0,Ne,_e.width,_e.height,0,Oe,Qe,null));else if(y.isDataTexture)if(Ve.length>0){$e&&it&&t.texStorage2D(i.TEXTURE_2D,Ie,Ne,Ve[0].width,Ve[0].height);for(let z=0,me=Ve.length;z<me;z++)Fe=Ve[z],$e?X&&t.texSubImage2D(i.TEXTURE_2D,z,0,0,Fe.width,Fe.height,Oe,Qe,Fe.data):t.texImage2D(i.TEXTURE_2D,z,Ne,Fe.width,Fe.height,0,Oe,Qe,Fe.data);y.generateMipmaps=!1}else $e?(it&&t.texStorage2D(i.TEXTURE_2D,Ie,Ne,_e.width,_e.height),X&&ne(y,_e,Oe,Qe)):t.texImage2D(i.TEXTURE_2D,0,Ne,_e.width,_e.height,0,Oe,Qe,_e.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){$e&&it&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ie,Ne,Ve[0].width,Ve[0].height,_e.depth);for(let z=0,me=Ve.length;z<me;z++)if(Fe=Ve[z],y.format!==vn)if(Oe!==null)if($e){if(X)if(y.layerUpdates.size>0){let xe=bh(Fe.width,Fe.height,y.format,y.type);for(let le of y.layerUpdates){let He=Fe.data.subarray(le*xe/Fe.data.BYTES_PER_ELEMENT,(le+1)*xe/Fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,z,0,0,le,Fe.width,Fe.height,1,Oe,He)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,z,0,0,0,Fe.width,Fe.height,_e.depth,Oe,Fe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,z,Ne,Fe.width,Fe.height,_e.depth,0,Fe.data,0,0);else ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $e?X&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,z,0,0,0,Fe.width,Fe.height,_e.depth,Oe,Qe,Fe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,z,Ne,Fe.width,Fe.height,_e.depth,0,Oe,Qe,Fe.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{$e&&it&&t.texStorage2D(i.TEXTURE_2D,Ie,Ne,Ve[0].width,Ve[0].height);for(let z=0,me=Ve.length;z<me;z++)Fe=Ve[z],y.format!==vn?Oe!==null?$e?X&&t.compressedTexSubImage2D(i.TEXTURE_2D,z,0,0,Fe.width,Fe.height,Oe,Fe.data):t.compressedTexImage2D(i.TEXTURE_2D,z,Ne,Fe.width,Fe.height,0,Fe.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?X&&t.texSubImage2D(i.TEXTURE_2D,z,0,0,Fe.width,Fe.height,Oe,Qe,Fe.data):t.texImage2D(i.TEXTURE_2D,z,Ne,Fe.width,Fe.height,0,Oe,Qe,Fe.data)}else if(y.isDataArrayTexture)if($e){if(it&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ie,Ne,_e.width,_e.height,_e.depth),X)if(y.layerUpdates.size>0){let z=bh(_e.width,_e.height,y.format,y.type);for(let me of y.layerUpdates){let xe=_e.data.subarray(me*z/_e.data.BYTES_PER_ELEMENT,(me+1)*z/_e.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,me,_e.width,_e.height,1,Oe,Qe,xe)}y.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Oe,Qe,_e.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ne,_e.width,_e.height,_e.depth,0,Oe,Qe,_e.data);else if(y.isData3DTexture)$e?(it&&t.texStorage3D(i.TEXTURE_3D,Ie,Ne,_e.width,_e.height,_e.depth),X&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Oe,Qe,_e.data)):t.texImage3D(i.TEXTURE_3D,0,Ne,_e.width,_e.height,_e.depth,0,Oe,Qe,_e.data);else if(y.isFramebufferTexture){if(it)if($e)t.texStorage2D(i.TEXTURE_2D,Ie,Ne,_e.width,_e.height);else{let z=_e.width,me=_e.height;for(let xe=0;xe<Ie;xe++)t.texImage2D(i.TEXTURE_2D,xe,Ne,z,me,0,Oe,Qe,null),z>>=1,me>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in i){let z=i.canvas;if(z.hasAttribute("layoutsubtree")||z.setAttribute("layoutsubtree","true"),_e.parentNode!==z){z.appendChild(_e),f.add(y),z.onpaint=me=>{let xe=me.changedElements;for(let le of f)xe.includes(le.image)&&(le.needsUpdate=!0)},z.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,_e);else{let xe=i.RGBA,le=i.RGBA,He=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,xe,le,He,_e)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ve.length>0){if($e&&it){let z=nt(Ve[0]);t.texStorage2D(i.TEXTURE_2D,Ie,Ne,z.width,z.height)}for(let z=0,me=Ve.length;z<me;z++)Fe=Ve[z],$e?X&&t.texSubImage2D(i.TEXTURE_2D,z,0,0,Oe,Qe,Fe):t.texImage2D(i.TEXTURE_2D,z,Ne,Oe,Qe,Fe);y.generateMipmaps=!1}else if($e){if(it){let z=nt(_e);t.texStorage2D(i.TEXTURE_2D,Ie,Ne,z.width,z.height)}X&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Oe,Qe,_e)}else t.texImage2D(i.TEXTURE_2D,0,Ne,Oe,Qe,_e);m(y)&&S(Q),Ee.__version=Pe.version,y.onUpdate&&y.onUpdate(y)}D.__version=y.version}function pe(D,y,J){if(y.image.length!==6)return;let Q=Ye(D,y),re=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+J);let Pe=n.get(re);if(re.version!==Pe.__version||Q===!0){t.activeTexture(i.TEXTURE0+J);let Ee=wt.getPrimaries(wt.workingColorSpace),ce=y.colorSpace===oi?null:wt.getPrimaries(y.colorSpace),_e=y.colorSpace===oi||Ee===ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);let Oe=y.isCompressedTexture||y.image[0].isCompressedTexture,Qe=y.image[0]&&y.image[0].isDataTexture,Ne=[];for(let le=0;le<6;le++)!Oe&&!Qe?Ne[le]=g(y.image[le],!0,s.maxCubemapSize):Ne[le]=Qe?y.image[le].image:y.image[le],Ne[le]=dt(y,Ne[le]);let Fe=Ne[0],Ve=r.convert(y.format,y.colorSpace),$e=r.convert(y.type),it=_(y.internalFormat,Ve,$e,y.normalized,y.colorSpace),X=y.isVideoTexture!==!0,Ie=Pe.__version===void 0||Q===!0,z=re.dataReady,me=w(y,Fe);Le(i.TEXTURE_CUBE_MAP,y);let xe;if(Oe){X&&Ie&&t.texStorage2D(i.TEXTURE_CUBE_MAP,me,it,Fe.width,Fe.height);for(let le=0;le<6;le++){xe=Ne[le].mipmaps;for(let He=0;He<xe.length;He++){let ke=xe[He];y.format!==vn?Ve!==null?X?z&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,He,0,0,ke.width,ke.height,Ve,ke.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,He,it,ke.width,ke.height,0,ke.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,He,0,0,ke.width,ke.height,Ve,$e,ke.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,He,it,ke.width,ke.height,0,Ve,$e,ke.data)}}}else{if(xe=y.mipmaps,X&&Ie){xe.length>0&&me++;let le=nt(Ne[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,me,it,le.width,le.height)}for(let le=0;le<6;le++)if(Qe){X?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Ne[le].width,Ne[le].height,Ve,$e,Ne[le].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,it,Ne[le].width,Ne[le].height,0,Ve,$e,Ne[le].data);for(let He=0;He<xe.length;He++){let rt=xe[He].image[le].image;X?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,He+1,0,0,rt.width,rt.height,Ve,$e,rt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,He+1,it,rt.width,rt.height,0,Ve,$e,rt.data)}}else{X?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Ve,$e,Ne[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,it,Ve,$e,Ne[le]);for(let He=0;He<xe.length;He++){let ke=xe[He];X?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,He+1,0,0,Ve,$e,ke.image[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,He+1,it,Ve,$e,ke.image[le])}}}m(y)&&S(i.TEXTURE_CUBE_MAP),Pe.__version=re.version,y.onUpdate&&y.onUpdate(y)}D.__version=y.version}function Me(D,y,J,Q,re,Pe){let Ee=r.convert(J.format,J.colorSpace),ce=r.convert(J.type),_e=_(J.internalFormat,Ee,ce,J.normalized,J.colorSpace),Oe=n.get(y),Qe=n.get(J);if(Qe.__renderTarget=y,!Oe.__hasExternalTextures){let Ne=Math.max(1,y.width>>Pe),Fe=Math.max(1,y.height>>Pe);re===i.TEXTURE_3D||re===i.TEXTURE_2D_ARRAY?t.texImage3D(re,Pe,_e,Ne,Fe,y.depth,0,Ee,ce,null):t.texImage2D(re,Pe,_e,Ne,Fe,0,Ee,ce,null)}t.bindFramebuffer(i.FRAMEBUFFER,D),Ze(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,re,Qe.__webglTexture,0,Ge(y)):(re===i.TEXTURE_2D||re>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,re,Qe.__webglTexture,Pe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ue(D,y,J){if(i.bindRenderbuffer(i.RENDERBUFFER,D),y.depthBuffer){let Q=y.depthTexture,re=Q&&Q.isDepthTexture?Q.type:null,Pe=E(y.stencilBuffer,re),Ee=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ze(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ge(y),Pe,y.width,y.height):J?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ge(y),Pe,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,Pe,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ee,i.RENDERBUFFER,D)}else{let Q=y.textures;for(let re=0;re<Q.length;re++){let Pe=Q[re],Ee=r.convert(Pe.format,Pe.colorSpace),ce=r.convert(Pe.type),_e=_(Pe.internalFormat,Ee,ce,Pe.normalized,Pe.colorSpace);Ze(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ge(y),_e,y.width,y.height):J?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ge(y),_e,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,_e,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function je(D,y,J){let Q=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,D),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let re=n.get(y.depthTexture);if(re.__renderTarget=y,(!re.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),Q){if(re.__webglInit===void 0&&(re.__webglInit=!0,y.depthTexture.addEventListener("dispose",R)),re.__webglTexture===void 0){re.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,re.__webglTexture),Le(i.TEXTURE_CUBE_MAP,y.depthTexture);let Oe=r.convert(y.depthTexture.format),Qe=r.convert(y.depthTexture.type),Ne;y.depthTexture.format===gi?Ne=i.DEPTH_COMPONENT24:y.depthTexture.format===bi&&(Ne=i.DEPTH24_STENCIL8);for(let Fe=0;Fe<6;Fe++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,Ne,y.width,y.height,0,Oe,Qe,null)}}else G(y.depthTexture,0);let Pe=re.__webglTexture,Ee=Ge(y),ce=Q?i.TEXTURE_CUBE_MAP_POSITIVE_X+J:i.TEXTURE_2D,_e=y.depthTexture.format===bi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(y.depthTexture.format===gi)Ze(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,_e,ce,Pe,0,Ee):i.framebufferTexture2D(i.FRAMEBUFFER,_e,ce,Pe,0);else if(y.depthTexture.format===bi)Ze(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,_e,ce,Pe,0,Ee):i.framebufferTexture2D(i.FRAMEBUFFER,_e,ce,Pe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function fe(D){let y=n.get(D),J=D.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==D.depthTexture){let Q=D.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),Q){let re=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,Q.removeEventListener("dispose",re)};Q.addEventListener("dispose",re),y.__depthDisposeCallback=re}y.__boundDepthTexture=Q}if(D.depthTexture&&!y.__autoAllocateDepthBuffer)if(J)for(let Q=0;Q<6;Q++)je(y.__webglFramebuffer[Q],D,Q);else{let Q=D.texture.mipmaps;Q&&Q.length>0?je(y.__webglFramebuffer[0],D,0):je(y.__webglFramebuffer,D,0)}else if(J){y.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[Q]),y.__webglDepthbuffer[Q]===void 0)y.__webglDepthbuffer[Q]=i.createRenderbuffer(),Ue(y.__webglDepthbuffer[Q],D,!1);else{let re=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pe=y.__webglDepthbuffer[Q];i.bindRenderbuffer(i.RENDERBUFFER,Pe),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,Pe)}}else{let Q=D.texture.mipmaps;if(Q&&Q.length>0?t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),Ue(y.__webglDepthbuffer,D,!1);else{let re=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pe=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Pe),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,Pe)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function he(D,y,J){let Q=n.get(D);y!==void 0&&Me(Q.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),J!==void 0&&fe(D)}function Z(D){let y=D.texture,J=n.get(D),Q=n.get(y);D.addEventListener("dispose",v);let re=D.textures,Pe=D.isWebGLCubeRenderTarget===!0,Ee=re.length>1;if(Ee||(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=y.version,a.memory.textures++),Pe){J.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(y.mipmaps&&y.mipmaps.length>0){J.__webglFramebuffer[ce]=[];for(let _e=0;_e<y.mipmaps.length;_e++)J.__webglFramebuffer[ce][_e]=i.createFramebuffer()}else J.__webglFramebuffer[ce]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){J.__webglFramebuffer=[];for(let ce=0;ce<y.mipmaps.length;ce++)J.__webglFramebuffer[ce]=i.createFramebuffer()}else J.__webglFramebuffer=i.createFramebuffer();if(Ee)for(let ce=0,_e=re.length;ce<_e;ce++){let Oe=n.get(re[ce]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=i.createTexture(),a.memory.textures++)}if(D.samples>0&&Ze(D)===!1){J.__webglMultisampledFramebuffer=i.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let ce=0;ce<re.length;ce++){let _e=re[ce];J.__webglColorRenderbuffer[ce]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,J.__webglColorRenderbuffer[ce]);let Oe=r.convert(_e.format,_e.colorSpace),Qe=r.convert(_e.type),Ne=_(_e.internalFormat,Oe,Qe,_e.normalized,_e.colorSpace,D.isXRRenderTarget===!0),Fe=Ge(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,Fe,Ne,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,J.__webglColorRenderbuffer[ce])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(J.__webglDepthRenderbuffer=i.createRenderbuffer(),Ue(J.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Pe){t.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),Le(i.TEXTURE_CUBE_MAP,y);for(let ce=0;ce<6;ce++)if(y.mipmaps&&y.mipmaps.length>0)for(let _e=0;_e<y.mipmaps.length;_e++)Me(J.__webglFramebuffer[ce][_e],D,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,_e);else Me(J.__webglFramebuffer[ce],D,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);m(y)&&S(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let ce=0,_e=re.length;ce<_e;ce++){let Oe=re[ce],Qe=n.get(Oe),Ne=i.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ne=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ne,Qe.__webglTexture),Le(Ne,Oe),Me(J.__webglFramebuffer,D,Oe,i.COLOR_ATTACHMENT0+ce,Ne,0),m(Oe)&&S(Ne)}t.unbindTexture()}else{let ce=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ce=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ce,Q.__webglTexture),Le(ce,y),y.mipmaps&&y.mipmaps.length>0)for(let _e=0;_e<y.mipmaps.length;_e++)Me(J.__webglFramebuffer[_e],D,y,i.COLOR_ATTACHMENT0,ce,_e);else Me(J.__webglFramebuffer,D,y,i.COLOR_ATTACHMENT0,ce,0);m(y)&&S(ce),t.unbindTexture()}D.depthBuffer&&fe(D)}function se(D){let y=D.textures;for(let J=0,Q=y.length;J<Q;J++){let re=y[J];if(m(re)){let Pe=b(D),Ee=n.get(re).__webglTexture;t.bindTexture(Pe,Ee),S(Pe),t.unbindTexture()}}}let ue=[],Te=[];function we(D){if(D.samples>0){if(Ze(D)===!1){let y=D.textures,J=D.width,Q=D.height,re=i.COLOR_BUFFER_BIT,Pe=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ee=n.get(D),ce=y.length>1;if(ce)for(let Oe=0;Oe<y.length;Oe++)t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Oe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Oe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer);let _e=D.texture.mipmaps;_e&&_e.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let Oe=0;Oe<y.length;Oe++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(re|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(re|=i.STENCIL_BUFFER_BIT)),ce){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[Oe]);let Qe=n.get(y[Oe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Qe,0)}i.blitFramebuffer(0,0,J,Q,0,0,J,Q,re,i.NEAREST),c===!0&&(ue.length=0,Te.length=0,ue.push(i.COLOR_ATTACHMENT0+Oe),D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&(ue.push(Pe),Te.push(Pe),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Te)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ue))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ce)for(let Oe=0;Oe<y.length;Oe++){t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Oe,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[Oe]);let Qe=n.get(y[Oe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Oe,i.TEXTURE_2D,Qe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&c){let y=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function Ge(D){return Math.min(s.maxSamples,D.samples)}function Ze(D){let y=n.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function H(D){let y=a.render.frame;u.get(D)!==y&&(u.set(D,y),D.update())}function dt(D,y){let J=D.colorSpace,Q=D.format,re=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||J!==Br&&J!==oi&&(wt.getTransfer(J)===Pt?(Q!==vn||re!==an)&&ot("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ct("WebGLTextures: Unsupported texture color space:",J)),y}function nt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(l.width=D.naturalWidth||D.width,l.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(l.width=D.displayWidth,l.height=D.displayHeight):(l.width=D.width,l.height=D.height),l}this.allocateTextureUnit=V,this.resetTextureUnits=I,this.getTextureUnits=L,this.setTextureUnits=U,this.setTexture2D=G,this.setTexture2DArray=O,this.setTexture3D=q,this.setTextureCube=K,this.rebindTextures=he,this.setupRenderTarget=Z,this.updateRenderTargetMipmap=se,this.updateMultisampleRenderTarget=we,this.setupDepthRenderbuffer=fe,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=Ze,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function D_(i,e){function t(n,s=oi){let r,a=wt.getTransfer(s);if(n===an)return i.UNSIGNED_BYTE;if(n===pl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ml)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ph)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===mh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===dh)return i.BYTE;if(n===fh)return i.SHORT;if(n===dr)return i.UNSIGNED_SHORT;if(n===fl)return i.INT;if(n===ai)return i.UNSIGNED_INT;if(n===Yn)return i.FLOAT;if(n===Kt)return i.HALF_FLOAT;if(n===gh)return i.ALPHA;if(n===xh)return i.RGB;if(n===vn)return i.RGBA;if(n===gi)return i.DEPTH_COMPONENT;if(n===bi)return i.DEPTH_STENCIL;if(n===gl)return i.RED;if(n===xl)return i.RED_INTEGER;if(n===as)return i.RG;if(n===_l)return i.RG_INTEGER;if(n===vl)return i.RGBA_INTEGER;if(n===Sa||n===Ea||n===ba||n===Ta)if(a===Pt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Sa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Sa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ea)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ba)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ta)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===yl||n===Ml||n===Sl||n===El)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===yl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ml)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Sl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===El)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===bl||n===Tl||n===wl||n===Al||n===Rl||n===wa||n===Cl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===bl||n===Tl)return a===Pt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===wl)return a===Pt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Al)return r.COMPRESSED_R11_EAC;if(n===Rl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===wa)return r.COMPRESSED_RG11_EAC;if(n===Cl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Pl||n===Il||n===Dl||n===Ll||n===Ul||n===Nl||n===Fl||n===Ol||n===Bl||n===Hl||n===zl||n===Vl||n===Gl||n===kl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Pl)return a===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Il)return a===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Dl)return a===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ll)return a===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ul)return a===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Nl)return a===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Fl)return a===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ol)return a===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Bl)return a===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Hl)return a===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===zl)return a===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Vl)return a===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Gl)return a===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===kl)return a===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Wl||n===Xl||n===ql)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Wl)return a===Pt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Xl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ql)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Yl||n===Zl||n===Aa||n===Jl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Yl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Zl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Aa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Jl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===rs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var L_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,U_=`
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

}`,kh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Zr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Dt({vertexShader:L_,fragmentShader:U_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Re(new Ht(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Wh=class extends xi{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,f=null,d=null,h=null,p=null,x=typeof XRWebGLBinding<"u",g=new kh,m={},S=t.getContextAttributes(),b=null,_=null,E=[],w=[],R=new Se,v=null,A=null,P=new fn;P.viewport=new Vt;let F=new fn;F.viewport=new Vt;let M=[P,F],I=new ol,L=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ne=E[Y];return ne===void 0&&(ne=new js,E[Y]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(Y){let ne=E[Y];return ne===void 0&&(ne=new js,E[Y]=ne),ne.getGripSpace()},this.getHand=function(Y){let ne=E[Y];return ne===void 0&&(ne=new js,E[Y]=ne),ne.getHandSpace()};function V(Y){let ne=w.indexOf(Y.inputSource);if(ne===-1)return;let ye=E[ne];ye!==void 0&&(ye.update(Y.inputSource,Y.frame,l||a),ye.dispatchEvent({type:Y.type,data:Y.inputSource}))}function B(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",G);for(let Y=0;Y<E.length;Y++){let ne=w[Y];ne!==null&&(w[Y]=null,E[Y].disconnect(ne))}L=null,U=null,g.reset();for(let Y in m)delete m[Y];if(e.setRenderTarget(b),h=null,d=null,f=null,s=null,_=null,Ye.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(R.width,R.height,!1),A!==null){let Y=A.camera;Y.fov=A.fov,Y.zoom=A.zoom,Y.updateProjectionMatrix(),A=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&ot("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&ot("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",B),s.addEventListener("inputsourceschange",G),S.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(R),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,pe=null,Me=null;S.depth&&(Me=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=S.stencil?bi:gi,pe=S.stencil?rs:ai);let Ue={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(Ue),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new Wt(d.textureWidth,d.textureHeight,{format:vn,type:an,depthTexture:new Mi(d.textureWidth,d.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let ye={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,t,ye),s.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),_=new Wt(h.framebufferWidth,h.framebufferHeight,{format:vn,type:an,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Ye.setContext(s),Ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function G(Y){for(let ne=0;ne<Y.removed.length;ne++){let ye=Y.removed[ne],pe=w.indexOf(ye);pe>=0&&(w[pe]=null,E[pe].disconnect(ye))}for(let ne=0;ne<Y.added.length;ne++){let ye=Y.added[ne],pe=w.indexOf(ye);if(pe===-1){for(let Ue=0;Ue<E.length;Ue++)if(Ue>=w.length){w.push(ye),pe=Ue;break}else if(w[Ue]===null){w[Ue]=ye,pe=Ue;break}if(pe===-1)break}let Me=E[pe];Me&&Me.connect(ye)}}let O=new C,q=new C;function K(Y,ne,ye){O.setFromMatrixPosition(ne.matrixWorld),q.setFromMatrixPosition(ye.matrixWorld);let pe=O.distanceTo(q),Me=ne.projectionMatrix.elements,Ue=ye.projectionMatrix.elements,je=Me[14]/(Me[10]-1),fe=Me[14]/(Me[10]+1),he=(Me[9]+1)/Me[5],Z=(Me[9]-1)/Me[5],se=(Me[8]-1)/Me[0],ue=(Ue[8]+1)/Ue[0],Te=je*se,we=je*ue,Ge=pe/(-se+ue),Ze=Ge*-se;if(ne.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Ze),Y.translateZ(Ge),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Me[10]===-1)Y.projectionMatrix.copy(ne.projectionMatrix),Y.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{let H=je+Ge,dt=fe+Ge,nt=Te-Ze,D=we+(pe-Ze),y=he*fe/dt*H,J=Z*fe/dt*H;Y.projectionMatrix.makePerspective(nt,D,y,J,H,dt),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ie(Y,ne){ne===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ne.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let ne=Y.near,ye=Y.far;g.texture!==null&&(g.depthNear>0&&(ne=g.depthNear),g.depthFar>0&&(ye=g.depthFar)),I.near=F.near=P.near=ne,I.far=F.far=P.far=ye,(L!==I.near||U!==I.far)&&(s.updateRenderState({depthNear:I.near,depthFar:I.far}),L=I.near,U=I.far),I.layers.mask=Y.layers.mask|6,P.layers.mask=I.layers.mask&-5,F.layers.mask=I.layers.mask&-3;let pe=Y.parent,Me=I.cameras;ie(I,pe);for(let Ue=0;Ue<Me.length;Ue++)ie(Me[Ue],pe);Me.length===2?K(I,P,F):I.projectionMatrix.copy(P.projectionMatrix),A===null&&Y.isPerspectiveCamera&&(A={camera:Y,fov:Y.fov,zoom:Y.zoom}),ve(Y,I,pe)};function ve(Y,ne,ye){ye===null?Y.matrix.copy(ne.matrixWorld):(Y.matrix.copy(ye.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ne.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ne.projectionMatrix),Y.projectionMatrixInverse.copy(ne.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Fo*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(d===null&&h===null))return c},this.setFoveation=function(Y){c=Y,d!==null&&(d.fixedFoveation=Y),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=Y)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(I)},this.getCameraTexture=function(Y){return m[Y]};let De=null;function Le(Y,ne){if(u=ne.getViewerPose(l||a),p=ne,u!==null){let ye=u.views;h!==null&&(e.setRenderTargetFramebuffer(_,h.framebuffer),e.setRenderTarget(_));let pe=!1;ye.length!==I.cameras.length&&(I.cameras.length=0,pe=!0);for(let fe=0;fe<ye.length;fe++){let he=ye[fe],Z=null;if(h!==null)Z=h.getViewport(he);else{let ue=f.getViewSubImage(d,he);Z=ue.viewport,fe===0&&(e.setRenderTargetTextures(_,ue.colorTexture,ue.depthStencilTexture),e.setRenderTarget(_))}let se=M[fe];se===void 0&&(se=new fn,se.layers.enable(fe),se.viewport=new Vt,M[fe]=se),se.matrix.fromArray(he.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(he.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(Z.x,Z.y,Z.width,Z.height),fe===0&&(I.matrix.copy(se.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),pe===!0&&I.cameras.push(se)}let Me=s.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){f=n.getBinding();let fe=f.getDepthInformation(ye[0]);fe&&fe.isValid&&fe.texture&&g.init(fe,s.renderState)}if(Me&&Me.includes("camera-access")&&x){e.state.unbindTexture(),f=n.getBinding();for(let fe=0;fe<ye.length;fe++){let he=ye[fe].camera;if(he){let Z=m[he];Z||(Z=new Zr,m[he]=Z);let se=f.getCameraImage(he);Z.sourceTexture=se}}}}for(let ye=0;ye<E.length;ye++){let pe=w[ye],Me=E[ye];pe!==null&&Me!==void 0&&Me.update(pe,ne,l||a)}De&&De(Y,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),p=null}let Ye=new jd;Ye.setAnimationLoop(Le),this.setAnimationLoop=function(Y){De=Y},this.dispose=function(){}}},N_=new st,af=new mt;af.set(-1,0,0,0,1,0,0,0,1);function F_(i,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Mh(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,S,b,_){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),f(g,m)):m.isMeshPhongMaterial?(r(g,m),u(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),d(g,m),m.isMeshPhysicalMaterial&&h(g,m,_)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),x(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?c(g,m,S,b):m.isSpriteMaterial?l(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===un&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===un&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let S=e.get(m),b=S.envMap,_=S.envMapRotation;b&&(g.envMap.value=b,g.envMapRotation.value.setFromMatrix4(N_.makeRotationFromEuler(_)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(af),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,S,b){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*S,g.scale.value=b*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function f(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function h(g,m,S){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===un&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=S.texture,g.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){let S=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(S.matrixWorld),g.nearDistance.value=S.shadow.camera.near,g.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function O_(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,E){let w=E.program;n.uniformBlockBinding(_,w)}function l(_,E){let w=s[_.id];w===void 0&&(g(_),w=u(_),s[_.id]=w,_.addEventListener("dispose",S));let R=E.program;n.updateUBOMapping(_,R);let v=e.render.frame;r[_.id]!==v&&(d(_),r[_.id]=v)}function u(_){let E=f();_.__bindingPointIndex=E;let w=i.createBuffer(),R=_.__size,v=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,R,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,w),w}function f(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return ct("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){let E=s[_.id],w=_.uniforms,R=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let v=0,A=w.length;v<A;v++){let P=w[v];if(Array.isArray(P))for(let F=0,M=P.length;F<M;F++)h(P[F],v,F,R);else h(P,v,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(_,E,w,R){if(x(_,E,w,R)===!0){let v=_.__offset,A=_.value;if(Array.isArray(A)){let P=0;for(let F=0;F<A.length;F++){let M=A[F],I=m(M);p(M,_.__data,P),typeof M!="number"&&typeof M!="boolean"&&!M.isMatrix3&&!ArrayBuffer.isView(M)&&(P+=I.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(A,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,_.__data)}}function p(_,E,w){typeof _=="number"||typeof _=="boolean"?E[0]=_:_.isMatrix3?(E[0]=_.elements[0],E[1]=_.elements[1],E[2]=_.elements[2],E[3]=0,E[4]=_.elements[3],E[5]=_.elements[4],E[6]=_.elements[5],E[7]=0,E[8]=_.elements[6],E[9]=_.elements[7],E[10]=_.elements[8],E[11]=0):ArrayBuffer.isView(_)?E.set(new _.constructor(_.buffer,_.byteOffset,E.length)):_.toArray(E,w)}function x(_,E,w,R){let v=_.value,A=E+"_"+w;if(R[A]===void 0)return typeof v=="number"||typeof v=="boolean"?R[A]=v:ArrayBuffer.isView(v)?R[A]=v.slice():R[A]=v.clone(),!0;{let P=R[A];if(typeof v=="number"||typeof v=="boolean"){if(P!==v)return R[A]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(P.equals(v)===!1)return P.copy(v),!0}}return!1}function g(_){let E=_.uniforms,w=0,R=16;for(let A=0,P=E.length;A<P;A++){let F=Array.isArray(E[A])?E[A]:[E[A]];for(let M=0,I=F.length;M<I;M++){let L=F[M],U=Array.isArray(L.value)?L.value:[L.value];for(let V=0,B=U.length;V<B;V++){let G=U[V],O=m(G),q=w%R,K=q%O.boundary,ie=q+K;w+=K,ie!==0&&R-ie<O.storage&&(w+=R-ie),L.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=w,w+=O.storage}}}let v=w%R;return v>0&&(w+=R-v),_.__size=w,_.__cache={},this}function m(_){let E={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(E.boundary=4,E.storage=4):_.isVector2?(E.boundary=8,E.storage=8):_.isVector3||_.isColor?(E.boundary=16,E.storage=12):_.isVector4?(E.boundary=16,E.storage=16):_.isMatrix3?(E.boundary=48,E.storage=48):_.isMatrix4?(E.boundary=64,E.storage=64):_.isTexture?ot("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(E.boundary=16,E.storage=_.byteLength):ot("WebGLRenderer: Unsupported uniform value type.",_),E}function S(_){let E=_.target;E.removeEventListener("dispose",S);let w=a.indexOf(E.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function b(){for(let _ in s)i.deleteBuffer(s[_]);a=[],s={},r={}}return{bind:c,update:l,dispose:b}}var B_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ti=null;function H_(){return Ti===null&&(Ti=new kn(B_,16,16,as,Kt),Ti.name="DFG_LUT",Ti.minFilter=sn,Ti.magFilter=sn,Ti.wrapS=mi,Ti.wrapT=mi,Ti.generateMipmaps=!1,Ti.needsUpdate=!0),Ti}var tc=class{constructor(e={}){let{canvas:t=yd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:h=an}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let x=h,g=new Set([vl,_l,xl]),m=new Set([an,ai,dr,rs,pl,ml]),S=new Uint32Array(4),b=new Int32Array(4),_=new C,E=null,w=null,R=[],v=[],A=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Hn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,F=!1,M=null,I=null,L=null,U=null;this._outputColorSpace=Ft;let V=0,B=0,G=null,O=-1,q=null,K=new Vt,ie=new Vt,ve=null,De=new Be(0),Le=0,Ye=t.width,Y=t.height,ne=1,ye=null,pe=null,Me=new Vt(0,0,Ye,Y),Ue=new Vt(0,0,Ye,Y),je=!1,fe=new nr,he=!1,Z=!1,se=new st,ue=new C,Te=new Vt,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ge=!1;function Ze(){return G===null?ne:1}let H=n;function dt(T,W){return t.getContext(T,W)}let nt,D,y,J,Q,re,Pe,Ee,ce,_e,Oe,Qe,Ne,Fe,Ve,$e,it,X,Ie,z,me,xe,le;try{let T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",rt,!1),t.addEventListener("webglcontextrestored",tt,!1),t.addEventListener("webglcontextcreationerror",Zt,!1),H===null){let W="webgl2";if(H=dt(W,T),H===null)throw dt(W)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}He()}catch(T){throw t.removeEventListener("webglcontextlost",rt,!1),t.removeEventListener("webglcontextrestored",tt,!1),t.removeEventListener("webglcontextcreationerror",Zt,!1),ct("WebGLRenderer: "+T.message),T}function He(){nt=new qg(H),nt.init(),me=new D_(H,nt),D=new Fg(H,nt,e,me),y=new P_(H,nt),D.reversedDepthBuffer&&d&&y.buffers.depth.setReversed(!0),I=H.createFramebuffer(),L=H.createFramebuffer(),U=H.createFramebuffer(),J=new Jg(H),Q=new g_,re=new I_(H,nt,y,Q,D,me,J),Pe=new Xg(P),Ee=new Kp(H),xe=new Ug(H,Ee),ce=new Yg(H,Ee,J,xe),_e=new Kg(H,ce,Ee,xe,J),X=new $g(H,D,re),Ve=new Og(Q),Oe=new m_(P,Pe,nt,D,xe,Ve),Qe=new F_(P,Q),Ne=new __,Fe=new b_(nt),it=new Lg(P,Pe,y,_e,p,c),$e=new C_(P,_e,D),le=new O_(H,J,D,y),Ie=new Ng(H,nt,J),z=new Zg(H,nt,J),J.programs=Oe.programs,P.capabilities=D,P.extensions=nt,P.properties=Q,P.renderLists=Ne,P.shadowMap=$e,P.state=y,P.info=J}x!==an&&(A=new jg(x,t.width,t.height,o,s,r));let ke=new Wh(P,H);this.xr=ke,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let T=nt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=nt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(T){T!==void 0&&(ne=T,this.setSize(Ye,Y,!1))},this.getSize=function(T){return T.set(Ye,Y)},this.setSize=function(T,W,oe=!0){if(ke.isPresenting){ot("WebGLRenderer: Can't change size while VR device is presenting.");return}Ye=T,Y=W,t.width=Math.floor(T*ne),t.height=Math.floor(W*ne),oe===!0&&(t.style.width=T+"px",t.style.height=W+"px"),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,T,W)},this.getDrawingBufferSize=function(T){return T.set(Ye*ne,Y*ne).floor()},this.setDrawingBufferSize=function(T,W,oe){Ye=T,Y=W,ne=oe,t.width=Math.floor(T*oe),t.height=Math.floor(W*oe),this.setViewport(0,0,T,W)},this.setEffects=function(T){if(x===an){ct("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let W=0;W<T.length;W++)if(T[W].isOutputPass===!0){ot("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(K)},this.getViewport=function(T){return T.copy(Me)},this.setViewport=function(T,W,oe,j){T.isVector4?Me.set(T.x,T.y,T.z,T.w):Me.set(T,W,oe,j),y.viewport(K.copy(Me).multiplyScalar(ne).round())},this.getScissor=function(T){return T.copy(Ue)},this.setScissor=function(T,W,oe,j){T.isVector4?Ue.set(T.x,T.y,T.z,T.w):Ue.set(T,W,oe,j),y.scissor(ie.copy(Ue).multiplyScalar(ne).round())},this.getScissorTest=function(){return je},this.setScissorTest=function(T){y.setScissorTest(je=T)},this.setOpaqueSort=function(T){ye=T},this.setTransparentSort=function(T){pe=T},this.getClearColor=function(T){return T.copy(it.getClearColor())},this.setClearColor=function(){it.setClearColor(...arguments)},this.getClearAlpha=function(){return it.getClearAlpha()},this.setClearAlpha=function(){it.setClearAlpha(...arguments)},this.clear=function(T=!0,W=!0,oe=!0){let j=0;if(T){let ee=!1;if(G!==null){let We=G.texture.format;ee=g.has(We)}if(ee){let We=G.texture.type,Je=m.has(We),N=it.getClearColor(),k=it.getClearAlpha(),$=N.r,ge=N.g,de=N.b;Je?(S[0]=$,S[1]=ge,S[2]=de,S[3]=k,H.clearBufferuiv(H.COLOR,0,S)):(b[0]=$,b[1]=ge,b[2]=de,b[3]=k,H.clearBufferiv(H.COLOR,0,b))}else j|=H.COLOR_BUFFER_BIT}W&&(j|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),oe&&(j|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j!==0&&H.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),M=T},this.dispose=function(){t.removeEventListener("webglcontextlost",rt,!1),t.removeEventListener("webglcontextrestored",tt,!1),t.removeEventListener("webglcontextcreationerror",Zt,!1),it.dispose(),Ne.dispose(),Fe.dispose(),Q.dispose(),Pe.dispose(),_e.dispose(),xe.dispose(),le.dispose(),Oe.dispose(),ke.dispose(),ke.removeEventListener("sessionstart",Ln),ke.removeEventListener("sessionend",Jt),dn.stop()};function rt(T){T.preventDefault(),Vr("WebGLRenderer: Context Lost."),F=!0}function tt(){Vr("WebGLRenderer: Context Restored."),F=!1;let T=J.autoReset,W=$e.enabled,oe=$e.autoUpdate,j=$e.needsUpdate,ee=$e.type;He(),J.autoReset=T,$e.enabled=W,$e.autoUpdate=oe,$e.needsUpdate=j,$e.type=ee}function Zt(T){ct("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function tn(T){let W=T.target;W.removeEventListener("dispose",tn),Kn(W)}function Kn(T){Gi(T),Q.remove(T)}function Gi(T){let W=Q.get(T).programs;W!==void 0&&(W.forEach(function(oe){Oe.releaseProgram(oe)}),T.isShaderMaterial&&Oe.releaseShaderCache(T))}this.renderBufferDirect=function(T,W,oe,j,ee,We){W===null&&(W=we);let Je=ee.isMesh&&ee.matrixWorld.determinantAffine()<0,N=ws(T,W,oe,j,ee);y.setMaterial(j,Je);let k=oe.index,$=1;if(j.wireframe===!0){if(k=ce.getWireframeAttribute(oe),k===void 0)return;$=2}let ge=oe.drawRange,de=oe.attributes.position,ae=ge.start*$,Ae=(ge.start+ge.count)*$;We!==null&&(ae=Math.max(ae,We.start*$),Ae=Math.min(Ae,(We.start+We.count)*$)),k!==null?(ae=Math.max(ae,0),Ae=Math.min(Ae,k.count)):de!=null&&(ae=Math.max(ae,0),Ae=Math.min(Ae,de.count));let Ce=Ae-ae;if(Ce<0||Ce===1/0)return;xe.setup(ee,j,N,oe,k);let ze,qe=Ie;if(k!==null&&(ze=Ee.get(k),qe=z,qe.setIndex(ze)),ee.isMesh)j.wireframe===!0?(y.setLineWidth(j.wireframeLinewidth*Ze()),qe.setMode(H.LINES)):qe.setMode(H.TRIANGLES);else if(ee.isLine){let be=j.linewidth;be===void 0&&(be=1),y.setLineWidth(be*Ze()),ee.isLineSegments?qe.setMode(H.LINES):ee.isLineLoop?qe.setMode(H.LINE_LOOP):qe.setMode(H.LINE_STRIP)}else ee.isPoints?qe.setMode(H.POINTS):ee.isSprite&&qe.setMode(H.TRIANGLES);if(ee.isBatchedMesh)if(nt.get("WEBGL_multi_draw"))qe.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else{let be=ee._multiDrawStarts,te=ee._multiDrawCounts,et=ee._multiDrawCount,Ke=k?Ee.get(k).bytesPerElement:1,ut=Q.get(j).currentProgram.getUniforms();for(let Et=0;Et<et;Et++)ut.setValue(H,"_gl_DrawID",Et),qe.render(be[Et]/Ke,te[Et])}else if(ee.isInstancedMesh)qe.renderInstances(ae,Ce,ee.count);else if(oe.isInstancedBufferGeometry){let be=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,te=Math.min(oe.instanceCount,be);qe.renderInstances(ae,Ce,te)}else qe.render(ae,Ce)};function li(T,W,oe,j){M!==null&&T.isNodeMaterial&&M.setObject(j,T),he===!0&&Ve.setState(T,oe,!1),T.transparent===!0&&T.side===_n&&T.forceSinglePass===!1?(T.side=un,T.needsUpdate=!0,ui(T,W,j),T.side=ns,T.needsUpdate=!0,ui(T,W,j),T.side=_n):ui(T,W,j)}this.compile=function(T,W,oe=null){oe===null&&(oe=T),M!==null&&M.renderStart(T,W,oe),w=Fe.get(oe),w.init(W),v.push(w),oe.traverseVisible(function(ee){ee.isLight&&ee.layers.test(W.layers)&&(w.pushLight(ee),ee.castShadow&&w.pushShadow(ee))}),T!==oe&&T.traverseVisible(function(ee){ee.isLight&&ee.layers.test(W.layers)&&(w.pushLight(ee),ee.castShadow&&w.pushShadow(ee))}),w.setupLights(),M!==null&&M.updateLights(w.state.lightsArray),Z=this.localClippingEnabled,he=Ve.init(this.clippingPlanes,Z),he===!0&&Ve.setGlobalState(this.clippingPlanes,W),M!==null&&$e.render(w.state.shadowsArray,oe,W);let j=new Set;return T.traverse(function(ee){if(!(ee.isMesh||ee.isPoints||ee.isLine||ee.isSprite))return;let We=ee.material;if(We)if(Array.isArray(We))for(let Je=0;Je<We.length;Je++){let N=We[Je];li(N,oe,W,ee),j.add(N)}else li(We,oe,W,ee),j.add(We)}),w=v.pop(),M!==null&&M.renderEnd(),j},this.compileAsync=function(T,W,oe=null){let j=this.compile(T,W,oe);return new Promise(ee=>{function We(){if(j.forEach(function(Je){let k=Q.get(Je).currentProgram;(k===void 0||k.isReady())&&j.delete(Je)}),j.size===0){ee(T);return}setTimeout(We,10)}nt.get("KHR_parallel_shader_compile")!==null?We():setTimeout(We,10)})};let ci=null;function Qn(T){ci&&ci(T)}function Ln(){dn.stop()}function Jt(){dn.start()}let dn=new jd;dn.setAnimationLoop(Qn),typeof self<"u"&&dn.setContext(self),this.setAnimationLoop=function(T){ci=T,ke.setAnimationLoop(T),T===null?dn.stop():dn.start()},ke.addEventListener("sessionstart",Ln),ke.addEventListener("sessionend",Jt),this.render=function(T,W){if(W!==void 0&&W.isCamera!==!0){ct("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;M!==null&&M.renderStart(T,W);let oe=ke.enabled===!0&&ke.isPresenting===!0,j=A!==null&&(G===null||oe)&&A.begin(P,G);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),ke.enabled===!0&&ke.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(ke.cameraAutoUpdate===!0&&ke.updateCamera(W),W=ke.getCamera()),T.isScene===!0&&T.onBeforeRender(P,T,W,G),w=Fe.get(T,v.length),w.init(W),w.state.textureUnits=re.getTextureUnits(),v.push(w),se.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),fe.setFromProjectionMatrix(se,ni,W.reversedDepth),Z=this.localClippingEnabled,he=Ve.init(this.clippingPlanes,Z),E=Ne.get(T,R.length),E.init(),R.push(E),ke.enabled===!0&&ke.isPresenting===!0){let Je=P.xr.getDepthSensingMesh();Je!==null&&hi(Je,W,-1/0,P.sortObjects)}hi(T,W,0,P.sortObjects),E.finish(),M!==null&&M.updateLights(w.state.lightsArray),P.sortObjects===!0&&E.sort(ye,pe),Ge=ke.enabled===!1||ke.isPresenting===!1||ke.hasDepthSensing()===!1,Ge&&it.addToRenderList(E,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),he===!0&&Ve.beginShadows();let ee=w.state.shadowsArray;if($e.render(ee,T,W),he===!0&&Ve.endShadows(),(j&&A.hasRenderPass())===!1){let Je=E.opaque,N=E.transmissive;if(w.setupLights(),W.isArrayCamera){let k=W.cameras;if(N.length>0)for(let $=0,ge=k.length;$<ge;$++){let de=k[$];Mr(Je,N,T,de)}Ge&&it.render(T);for(let $=0,ge=k.length;$<ge;$++){let de=k[$];ki(E,T,de,de.viewport)}}else N.length>0&&Mr(Je,N,T,W),Ge&&it.render(T),ki(E,T,W)}G!==null&&B===0&&(re.updateMultisampleRenderTarget(G),re.updateRenderTargetMipmap(G)),j&&A.end(P),T.isScene===!0&&T.onAfterRender(P,T,W),xe.resetDefaultState(),O=-1,q=null,v.pop(),v.length>0?(w=v[v.length-1],re.setTextureUnits(w.state.textureUnits),he===!0&&Ve.setGlobalState(P.clippingPlanes,w.state.camera)):w=null,R.pop(),R.length>0?E=R[R.length-1]:E=null,M!==null&&M.renderEnd()};function hi(T,W,oe,j){if(T.visible===!1)return;if(T.layers.test(W.layers)){if(T.isGroup)oe=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(W);else if(T.isLightProbeGrid)w.pushLightProbeGrid(T);else if(T.isLight)w.pushLight(T),T.castShadow&&w.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||T.intersectsFrustum(fe)){j&&Te.setFromMatrixPosition(T.matrixWorld).applyMatrix4(se);let Je=_e.update(T),N=T.material;N.visible&&E.push(T,Je,N,oe,Te.z,null,W)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||T.intersectsFrustum(fe))){let Je=_e.update(T),N=T.material;if(j&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Te.copy(T.boundingSphere.center)):(Je.boundingSphere===null&&Je.computeBoundingSphere(),Te.copy(Je.boundingSphere.center)),Te.applyMatrix4(T.matrixWorld).applyMatrix4(se)),Array.isArray(N)){let k=Je.groups;for(let $=0,ge=k.length;$<ge;$++){let de=k[$],ae=N[de.materialIndex];ae&&ae.visible&&E.push(T,Je,ae,oe,Te.z,de,W)}}else N.visible&&E.push(T,Je,N,oe,Te.z,null,W)}}let We=T.children;for(let Je=0,N=We.length;Je<N;Je++)hi(We[Je],W,oe,j)}function ki(T,W,oe,j){let{opaque:ee,transmissive:We,transparent:Je}=T;w.setupLightsView(oe),he===!0&&Ve.setGlobalState(P.clippingPlanes,oe),j&&y.viewport(K.copy(j)),ee.length>0&&zn(ee,W,oe),We.length>0&&zn(We,W,oe),Je.length>0&&zn(Je,W,oe),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function Mr(T,W,oe,j){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[j.id]===void 0){let ae=nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[j.id]=new Wt(1,1,{generateMipmaps:!0,type:ae?Kt:an,minFilter:Ei,samples:Math.max(4,D.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:wt.workingColorSpace})}let We=w.state.transmissionRenderTarget[j.id],Je=j.viewport||K;We.setSize(Je.z*P.transmissionResolutionScale,Je.w*P.transmissionResolutionScale);let N=P.getRenderTarget(),k=P.getActiveCubeFace(),$=P.getActiveMipmapLevel();P.setRenderTarget(We),P.getClearColor(De),Le=P.getClearAlpha(),Le<1&&P.setClearColor(16777215,.5),P.clear(),Ge&&it.render(oe);let ge=P.toneMapping;P.toneMapping=Hn;let de=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),w.setupLightsView(j),he===!0&&Ve.setGlobalState(P.clippingPlanes,j),zn(T,oe,j),re.updateMultisampleRenderTarget(We),re.updateRenderTargetMipmap(We),nt.has("WEBGL_multisampled_render_to_texture")===!1){let ae=!1;for(let Ae=0,Ce=W.length;Ae<Ce;Ae++){let ze=W[Ae],{object:qe,geometry:be,material:te,group:et}=ze;if(te.side===_n&&qe.layers.test(j.layers)){let Ke=te.side;te.side=un,te.needsUpdate=!0,Pi(qe,oe,j,be,te,et),te.side=Ke,te.needsUpdate=!0,ae=!0}}ae===!0&&(re.updateMultisampleRenderTarget(We),re.updateRenderTargetMipmap(We))}P.setRenderTarget(N,k,$),P.setClearColor(De,Le),de!==void 0&&(j.viewport=de),P.toneMapping=ge}function zn(T,W,oe){let j=W.isScene===!0?W.overrideMaterial:null;for(let ee=0,We=T.length;ee<We;ee++){let Je=T[ee],{object:N,geometry:k,group:$}=Je,ge=Je.material;ge.allowOverride===!0&&j!==null&&(ge=j),N.layers.test(oe.layers)&&Pi(N,W,oe,k,ge,$)}}function Pi(T,W,oe,j,ee,We){M!==null&&ee.isNodeMaterial&&M.setObject(T,ee),T.onBeforeRender(P,W,oe,j,ee,We),T.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),ee.onBeforeRender(P,W,oe,j,T,We),ee.transparent===!0&&ee.side===_n&&ee.forceSinglePass===!1?(ee.side=un,ee.needsUpdate=!0,P.renderBufferDirect(oe,W,j,ee,T,We),ee.side=ns,ee.needsUpdate=!0,P.renderBufferDirect(oe,W,j,ee,T,We),ee.side=_n):P.renderBufferDirect(oe,W,j,ee,T,We),T.onAfterRender(P,W,oe,j,ee,We)}function ui(T,W,oe){W.isScene!==!0&&(W=we);let j=Q.get(T),ee=w.state.lights,We=w.state.shadowsArray,Je=ee.state.version,N=Oe.getParameters(T,ee.state,We,W,oe,w.state.lightProbeGridArray),k=Oe.getProgramCacheKey(N),$=j.programs;j.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?W.environment:null,j.fog=W.fog;let ge=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;j.envMap=Pe.get(T.envMap||j.environment,ge),j.envMapRotation=j.environment!==null&&T.envMap===null?W.environmentRotation:T.envMapRotation,$===void 0&&(T.addEventListener("dispose",tn),$=new Map,j.programs=$);let de=$.get(k);if(de!==void 0){if(j.currentProgram===de&&j.lightsStateVersion===Je)return Wi(T,N),de}else N.uniforms=Oe.getUniforms(T),M!==null&&T.isNodeMaterial&&M.build(T,oe,N),T.onBeforeCompile(N,P),de=Oe.acquireProgram(N,k),$.set(k,de),j.uniforms=N.uniforms;let ae=j.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(ae.clippingPlanes=Ve.uniform),Wi(T,N),j.needsLights=Ii(T),j.lightsStateVersion=Je,j.needsLights&&(ae.ambientLightColor.value=ee.state.ambient,ae.lightProbe.value=ee.state.probe,ae.sunLights.value=ee.state.sun,ae.sunLightShadows.value=ee.state.sunShadow,ae.directionalLights.value=ee.state.directional,ae.directionalLightShadows.value=ee.state.directionalShadow,ae.spotLights.value=ee.state.spot,ae.spotLightShadows.value=ee.state.spotShadow,ae.rectAreaLights.value=ee.state.rectArea,ae.ltc_1.value=ee.state.rectAreaLTC1,ae.ltc_2.value=ee.state.rectAreaLTC2,ae.pointLights.value=ee.state.point,ae.pointLightShadows.value=ee.state.pointShadow,ae.hemisphereLights.value=ee.state.hemi,ae.sunShadowMatrix.value=ee.state.sunShadowMatrix,ae.sunShadowCascade.value=ee.state.sunShadowCascade,ae.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,ae.spotLightMatrix.value=ee.state.spotLightMatrix,ae.spotLightMap.value=ee.state.spotLightMap,ae.pointShadowMatrix.value=ee.state.pointShadowMatrix),j.lightProbeGrid=w.state.lightProbeGridArray.length>0,j.currentProgram=de,j.uniformsList=null,de}function ls(T){if(T.uniformsList===null){let W=T.currentProgram.getUniforms();T.uniformsList=mr.seqWithValue(W.seq,T.uniforms)}return T.uniformsList}function Wi(T,W){let oe=Q.get(T);oe.outputColorSpace=W.outputColorSpace,oe.batching=W.batching,oe.batchingColor=W.batchingColor,oe.instancing=W.instancing,oe.instancingColor=W.instancingColor,oe.instancingMorph=W.instancingMorph,oe.skinning=W.skinning,oe.morphTargets=W.morphTargets,oe.morphNormals=W.morphNormals,oe.morphColors=W.morphColors,oe.morphTargetsCount=W.morphTargetsCount,oe.numClippingPlanes=W.numClippingPlanes,oe.numIntersection=W.numClipIntersection,oe.vertexAlphas=W.vertexAlphas,oe.vertexTangents=W.vertexTangents,oe.toneMapping=W.toneMapping}function ka(T,W){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;_.setFromMatrixPosition(W.matrixWorld);for(let oe=0,j=T.length;oe<j;oe++){let ee=T[oe];if(ee.texture!==null&&ee.boundingBox.containsPoint(_))return ee}return null}function ws(T,W,oe,j,ee){W.isScene!==!0&&(W=we),re.resetTextureUnits();let We=W.fog,Je=j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial?W.environment:null,N=G===null?P.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:wt.workingColorSpace,k=j.isMeshStandardMaterial||j.isMeshLambertMaterial&&!j.envMap||j.isMeshPhongMaterial&&!j.envMap,$=Pe.get(j.envMap||Je,k),ge=j.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,de=!!oe.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),ae=!!oe.morphAttributes.position,Ae=!!oe.morphAttributes.normal,Ce=!!oe.morphAttributes.color,ze=Hn;j.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(ze=P.toneMapping);let qe=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,be=qe!==void 0?qe.length:0,te=Q.get(j),et=w.state.lights;if(he===!0&&(Z===!0||T!==q)){let at=T===q&&j.id===O;Ve.setState(j,T,at)}let Ke=!1;j.version===te.__version?(te.needsLights&&te.lightsStateVersion!==et.state.version||te.outputColorSpace!==N||ee.isBatchedMesh&&te.batching===!1||!ee.isBatchedMesh&&te.batching===!0||ee.isBatchedMesh&&te.batchingColor===!0&&ee._colorsTexture===null||ee.isBatchedMesh&&te.batchingColor===!1&&ee._colorsTexture!==null||ee.isInstancedMesh&&te.instancing===!1||!ee.isInstancedMesh&&te.instancing===!0||ee.isSkinnedMesh&&te.skinning===!1||!ee.isSkinnedMesh&&te.skinning===!0||ee.isInstancedMesh&&te.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&te.instancingColor===!1&&ee.instanceColor!==null||ee.isInstancedMesh&&te.instancingMorph===!0&&ee.morphTexture===null||ee.isInstancedMesh&&te.instancingMorph===!1&&ee.morphTexture!==null||te.envMap!==$||j.fog===!0&&te.fog!==We||te.numClippingPlanes!==void 0&&(te.numClippingPlanes!==Ve.numPlanes||te.numIntersection!==Ve.numIntersection)||te.vertexAlphas!==ge||te.vertexTangents!==de||te.morphTargets!==ae||te.morphNormals!==Ae||te.morphColors!==Ce||te.toneMapping!==ze||te.morphTargetsCount!==be||!!te.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(Ke=!0):(Ke=!0,te.__version=j.version);let ut=te.currentProgram;Ke===!0&&(ut=ui(j,W,ee),M&&j.isNodeMaterial&&M.onUpdateProgram(j,ut,te));let Et=!1,Ct=!1,Lt=!1,lt=ut.getUniforms(),bt=te.uniforms;if(y.useProgram(ut.program)&&(Et=!0,Ct=!0,Lt=!0),j.id!==O&&(O=j.id,Ct=!0),te.needsLights){let at=ka(w.state.lightProbeGridArray,ee);te.lightProbeGrid!==at&&(te.lightProbeGrid=at,Ct=!0)}if(Et||q!==T){y.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),lt.setValue(H,"projectionMatrix",T.projectionMatrix),lt.setValue(H,"viewMatrix",T.matrixWorldInverse);let $t=lt.map.cameraPosition;$t!==void 0&&$t.setValue(H,ue.setFromMatrixPosition(T.matrixWorld)),D.logarithmicDepthBuffer&&lt.setValue(H,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&lt.setValue(H,"isOrthographic",T.isOrthographicCamera===!0),q!==T&&(q=T,Ct=!0,Lt=!0)}if(te.needsLights&&(et.state.sunShadowMap.length>0&&lt.setValue(H,"sunShadowMap",et.state.sunShadowMap,re),et.state.directionalShadowMap.length>0&&lt.setValue(H,"directionalShadowMap",et.state.directionalShadowMap,re),et.state.spotShadowMap.length>0&&lt.setValue(H,"spotShadowMap",et.state.spotShadowMap,re),et.state.pointShadowMap.length>0&&lt.setValue(H,"pointShadowMap",et.state.pointShadowMap,re)),ee.isSkinnedMesh){lt.setOptional(H,ee,"bindMatrix"),lt.setOptional(H,ee,"bindMatrixInverse");let at=ee.skeleton;at&&(at.boneTexture===null&&at.computeBoneTexture(),lt.setValue(H,"boneTexture",at.boneTexture,re))}ee.isBatchedMesh&&(lt.setOptional(H,ee,"batchingTexture"),lt.setValue(H,"batchingTexture",ee._matricesTexture,re),lt.setOptional(H,ee,"batchingIdTexture"),lt.setValue(H,"batchingIdTexture",ee._indirectTexture,re),lt.setOptional(H,ee,"batchingColorTexture"),ee._colorsTexture!==null&&lt.setValue(H,"batchingColorTexture",ee._colorsTexture,re));let Mt=oe.morphAttributes;if((Mt.position!==void 0||Mt.normal!==void 0||Mt.color!==void 0)&&X.update(ee,oe,ut),(Ct||te.receiveShadow!==ee.receiveShadow)&&(te.receiveShadow=ee.receiveShadow,lt.setValue(H,"receiveShadow",ee.receiveShadow)),(j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial)&&j.envMap===null&&W.environment!==null&&(bt.envMapIntensity.value=W.environmentIntensity),bt.dfgLUT!==void 0&&(bt.dfgLUT.value=H_()),Ct){if(lt.setValue(H,"toneMappingExposure",P.toneMappingExposure),te.needsLights&&fc(bt,Lt),We&&j.fog===!0&&Qe.refreshFogUniforms(bt,We),Qe.refreshMaterialUniforms(bt,j,ne,Y,w.state.transmissionRenderTarget[T.id]),te.needsLights&&te.lightProbeGrid){let at=te.lightProbeGrid;bt.probesSH.value=at.texture,bt.probesMin.value.copy(at.boundingBox.min),bt.probesMax.value.copy(at.boundingBox.max),bt.probesResolution.value.copy(at.resolution)}mr.upload(H,ls(te),bt,re)}if(j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(mr.upload(H,ls(te),bt,re),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&lt.setValue(H,"center",ee.center),lt.setValue(H,"modelViewMatrix",ee.modelViewMatrix),lt.setValue(H,"normalMatrix",ee.normalMatrix),lt.setValue(H,"modelMatrix",ee.matrixWorld),j.uniformsGroups!==void 0){let at=j.uniformsGroups;for(let $t=0,rn=at.length;$t<rn;$t++){let Tn=at[$t];le.update(Tn,ut),le.bind(Tn,ut)}}return ut}function fc(T,W){T.ambientLightColor.needsUpdate=W,T.lightProbe.needsUpdate=W,T.sunLights.needsUpdate=W,T.sunLightShadows.needsUpdate=W,T.directionalLights.needsUpdate=W,T.directionalLightShadows.needsUpdate=W,T.pointLights.needsUpdate=W,T.pointLightShadows.needsUpdate=W,T.spotLights.needsUpdate=W,T.spotLightShadows.needsUpdate=W,T.rectAreaLights.needsUpdate=W,T.hemisphereLights.needsUpdate=W}function Ii(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(T,W,oe){let j=Q.get(T);j.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),Q.get(T.texture).__webglTexture=W,Q.get(T.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:oe,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,W){let oe=Q.get(T);oe.__webglFramebuffer=W,oe.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(T,W=0,oe=0){G=T,V=W,B=oe;let j=null,ee=!1,We=!1;if(T){let N=Q.get(T);if(N.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(H.FRAMEBUFFER,N.__webglFramebuffer),K.copy(T.viewport),ie.copy(T.scissor),ve=T.scissorTest,y.viewport(K),y.scissor(ie),y.setScissorTest(ve),O=-1;return}else if(N.__webglFramebuffer===void 0)re.setupRenderTarget(T);else if(N.__hasExternalTextures)re.rebindTextures(T,Q.get(T.texture).__webglTexture,Q.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let ge=T.depthTexture;if(N.__boundDepthTexture!==ge){if(ge!==null&&Q.has(ge)&&(T.width!==ge.image.width||T.height!==ge.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");re.setupDepthRenderbuffer(T)}}let k=T.texture;(k.isData3DTexture||k.isDataArrayTexture||k.isCompressedArrayTexture)&&(We=!0);let $=Q.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray($[W])?j=$[W][oe]:j=$[W],ee=!0):T.samples>0&&re.useMultisampledRTT(T)===!1?j=Q.get(T).__webglMultisampledFramebuffer:Array.isArray($)?j=$[oe]:j=$,K.copy(T.viewport),ie.copy(T.scissor),ve=T.scissorTest}else K.copy(Me).multiplyScalar(ne).floor(),ie.copy(Ue).multiplyScalar(ne).floor(),ve=je;if(oe!==0&&(j=I),y.bindFramebuffer(H.FRAMEBUFFER,j)&&y.drawBuffers(T,j),y.viewport(K),y.scissor(ie),y.setScissorTest(ve),ee){let N=Q.get(T.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+W,N.__webglTexture,oe)}else if(We){let N=W;for(let k=0;k<T.textures.length;k++){let $=Q.get(T.textures[k]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+k,$.__webglTexture,oe,N)}}else if(T!==null&&oe!==0){let N=Q.get(T.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,N.__webglTexture,oe)}O=-1};function Sr(T){let W=Q.get(T);return(W.__readFormat!==T.format||W.__readType!==T.type)&&(W.__readFormat=T.format,W.__readType=T.type,W.__formatReadable=D.textureFormatReadable(T.format),W.__typeReadable=D.textureTypeReadable(T.type)),W}this.readRenderTargetPixels=function(T,W,oe,j,ee,We,Je,N=0){if(!(T&&T.isWebGLRenderTarget)){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let k=Q.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Je!==void 0&&(k=k[Je]),k){y.bindFramebuffer(H.FRAMEBUFFER,k);try{let $=T.textures[N],ge=$.format,de=$.type;T.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+N);let ae=Sr($);if(ae.__formatReadable===!1){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ae.__typeReadable===!1){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=T.width-j&&oe>=0&&oe<=T.height-ee&&H.readPixels(W,oe,j,ee,me.convert(ge),me.convert(de),We)}finally{let $=G!==null?Q.get(G).__webglFramebuffer:null;y.bindFramebuffer(H.FRAMEBUFFER,$)}}},this.readRenderTargetPixelsAsync=async function(T,W,oe,j,ee,We,Je,N=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let k=Q.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Je!==void 0&&(k=k[Je]),k)if(W>=0&&W<=T.width-j&&oe>=0&&oe<=T.height-ee){y.bindFramebuffer(H.FRAMEBUFFER,k);let $=T.textures[N],ge=$.format,de=$.type;T.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+N);let ae=Sr($);if(ae.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ae.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ae=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Ae),H.bufferData(H.PIXEL_PACK_BUFFER,We.byteLength,H.STREAM_READ),H.readPixels(W,oe,j,ee,me.convert(ge),me.convert(de),0),H.bindBuffer(H.PIXEL_PACK_BUFFER,null);let Ce=G!==null?Q.get(G).__webglFramebuffer:null;y.bindFramebuffer(H.FRAMEBUFFER,Ce);let ze=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await Sd(H,ze,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,Ae),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,We),H.bindBuffer(H.PIXEL_PACK_BUFFER,null),H.deleteBuffer(Ae),H.deleteSync(ze),We}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,W=null,oe=0){let j=Math.pow(2,-oe),ee=Math.floor(T.image.width*j),We=Math.floor(T.image.height*j),Je=W!==null?W.x:0,N=W!==null?W.y:0;re.setTexture2D(T,0),H.copyTexSubImage2D(H.TEXTURE_2D,oe,0,0,Je,N,ee,We),y.unbindTexture()},this.copyTextureToTexture=function(T,W,oe=null,j=null,ee=0,We=0){let Je,N,k,$,ge,de,ae,Ae,Ce,ze=T.isCompressedTexture?T.mipmaps[We]:T.image;if(oe!==null)Je=oe.max.x-oe.min.x,N=oe.max.y-oe.min.y,k=oe.isBox3?oe.max.z-oe.min.z:1,$=oe.min.x,ge=oe.min.y,de=oe.isBox3?oe.min.z:0;else{let bt=Math.pow(2,-ee);Je=Math.floor(ze.width*bt),N=Math.floor(ze.height*bt),T.isDataArrayTexture?k=ze.depth:T.isData3DTexture?k=Math.floor(ze.depth*bt):k=1,$=0,ge=0,de=0}j!==null?(ae=j.x,Ae=j.y,Ce=j.z):(ae=0,Ae=0,Ce=0);let qe=me.convert(W.format),be=me.convert(W.type),te;W.isData3DTexture?(re.setTexture3D(W,0),te=H.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(re.setTexture2DArray(W,0),te=H.TEXTURE_2D_ARRAY):(re.setTexture2D(W,0),te=H.TEXTURE_2D),y.activeTexture(H.TEXTURE0),y.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,W.flipY),y.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),y.pixelStorei(H.UNPACK_ALIGNMENT,W.unpackAlignment);let et=y.getParameter(H.UNPACK_ROW_LENGTH),Ke=y.getParameter(H.UNPACK_IMAGE_HEIGHT),ut=y.getParameter(H.UNPACK_SKIP_PIXELS),Et=y.getParameter(H.UNPACK_SKIP_ROWS),Ct=y.getParameter(H.UNPACK_SKIP_IMAGES);y.pixelStorei(H.UNPACK_ROW_LENGTH,ze.width),y.pixelStorei(H.UNPACK_IMAGE_HEIGHT,ze.height),y.pixelStorei(H.UNPACK_SKIP_PIXELS,$),y.pixelStorei(H.UNPACK_SKIP_ROWS,ge),y.pixelStorei(H.UNPACK_SKIP_IMAGES,de);let Lt=T.isDataArrayTexture||T.isData3DTexture,lt=W.isDataArrayTexture||W.isData3DTexture;if(T.isDepthTexture){let bt=Q.get(T),Mt=Q.get(W),at=Q.get(bt.__renderTarget),$t=Q.get(Mt.__renderTarget);y.bindFramebuffer(H.READ_FRAMEBUFFER,at.__webglFramebuffer),y.bindFramebuffer(H.DRAW_FRAMEBUFFER,$t.__webglFramebuffer);for(let rn=0;rn<k;rn++)Lt&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Q.get(T).__webglTexture,ee,de+rn),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Q.get(W).__webglTexture,We,Ce+rn)),H.blitFramebuffer($,ge,Je,N,ae,Ae,Je,N,H.DEPTH_BUFFER_BIT,H.NEAREST);y.bindFramebuffer(H.READ_FRAMEBUFFER,null),y.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(ee!==0||T.isRenderTargetTexture||Q.has(T)){let bt=Q.get(T),Mt=Q.get(W);y.bindFramebuffer(H.READ_FRAMEBUFFER,L),y.bindFramebuffer(H.DRAW_FRAMEBUFFER,U);for(let at=0;at<k;at++)Lt?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,bt.__webglTexture,ee,de+at):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,bt.__webglTexture,ee),lt?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Mt.__webglTexture,We,Ce+at):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Mt.__webglTexture,We),ee!==0?H.blitFramebuffer($,ge,Je,N,ae,Ae,Je,N,H.COLOR_BUFFER_BIT,H.NEAREST):lt?H.copyTexSubImage3D(te,We,ae,Ae,Ce+at,$,ge,Je,N):H.copyTexSubImage2D(te,We,ae,Ae,$,ge,Je,N);y.bindFramebuffer(H.READ_FRAMEBUFFER,null),y.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else lt?T.isDataTexture||T.isData3DTexture?H.texSubImage3D(te,We,ae,Ae,Ce,Je,N,k,qe,be,ze.data):W.isCompressedArrayTexture?H.compressedTexSubImage3D(te,We,ae,Ae,Ce,Je,N,k,qe,ze.data):H.texSubImage3D(te,We,ae,Ae,Ce,Je,N,k,qe,be,ze):T.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,We,ae,Ae,Je,N,qe,be,ze.data):T.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,We,ae,Ae,ze.width,ze.height,qe,ze.data):H.texSubImage2D(H.TEXTURE_2D,We,ae,Ae,Je,N,qe,be,ze);y.pixelStorei(H.UNPACK_ROW_LENGTH,et),y.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ke),y.pixelStorei(H.UNPACK_SKIP_PIXELS,ut),y.pixelStorei(H.UNPACK_SKIP_ROWS,Et),y.pixelStorei(H.UNPACK_SKIP_IMAGES,Ct),We===0&&W.generateMipmaps&&H.generateMipmap(te),y.unbindTexture()},this.initRenderTarget=function(T){Q.get(T).__webglFramebuffer===void 0&&re.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?re.setTextureCube(T,0):T.isData3DTexture?re.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?re.setTexture2DArray(T,0):re.setTexture2D(T,0),y.unbindTexture()},this.resetState=function(){V=0,B=0,G=null,y.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=wt._getDrawingBufferColorSpace(e),t.unpackColorSpace=wt._getUnpackColorSpace()}};var pt=(i,e,t)=>Math.min(t,Math.max(e,i)),ft=(i,e,t)=>i+(e-i)*t,ht=(i,e,t)=>{let n=pt((t-i)/(e-i),0,1);return n*n*(3-2*n)};function Cn(i){let e=i>>>0;return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function cn(i,e,t=0){let n=Math.imul(i|0,374761393)+Math.imul(e|0,668265263)+Math.imul(t|0,2147483647);return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}function z_(i,e,t=1024,n=1024,s=0){let r=Math.floor(i),a=Math.floor(e),o=i-r,c=e-a,l=o*o*(3-2*o),u=c*c*(3-2*c),f=m=>(m%t+t)%t,d=m=>(m%n+n)%n,h=cn(f(r),d(a),s),p=cn(f(r+1),d(a),s),x=cn(f(r),d(a+1),s),g=cn(f(r+1),d(a+1),s);return ft(ft(h,p,l),ft(x,g,l),u)}function zt(i,e,t=4,n=1024,s=1024,r=0){let a=.5,o=1,c=0,l=0;for(let u=0;u<t;u++)c+=a*z_(i*o,e*o,n*o,s*o,r+u*17),l+=a,a*=.5,o*=2;return c/l}var of=()=>window.innerWidth<760||/Android|iPhone|iPad|iPod/i.test(navigator.userAgent);function Da(i,e={}){let t=i.attributes.position,n=i.attributes.normal,s=i.attributes.uv,r=e.ox||0,a=e.oy||0,o=e.oz||0;for(let c=0;c<t.count;c++){let l=n.getX(c),u=n.getY(c),f=n.getZ(c),d=t.getX(c)+r,h=t.getY(c)+a,p=t.getZ(c)+o,x,g;Math.abs(f)>.5?(x=f>0?d:-d,g=h):Math.abs(l)>.5?(x=l>0?-p:p,g=h):(e.swap?(x=p,g=d):(x=d,g=p),u<0&&(g=-g)),s.setXY(c,x,g)}s.needsUpdate=!0}var lf=4,qh=1,cf=i=>{lf=Math.min(8,i)},hf=i=>{qh=i>=2?1:.5},sc=()=>qh;function Xh(i,e,t){let n=new kn(i,e,e,vn,an);return n.wrapS=n.wrapT=pn,n.magFilter=sn,n.minFilter=Ei,n.generateMipmaps=!0,n.colorSpace=t?Ft:oi,n.anisotropy=lf,n.needsUpdate=!0,n}function zi(i,e,t,n){i=Math.max(128,Math.round(i*qh));let s=i*i,r=new Uint8Array(s*4),a=new Uint8Array(s*4),o=new Uint8Array(s*4),c=new Float32Array(s);for(let h=0;h<i;h++)for(let p=0;p<i;p++){let x=h*i+p,g=n((p+.5)/i,(h+.5)/i);r[x*4]=pt(g[0],0,1)*255,r[x*4+1]=pt(g[1],0,1)*255,r[x*4+2]=pt(g[2],0,1)*255,r[x*4+3]=255,c[x]=g[3],a[x*4]=255,a[x*4+1]=pt(g[4],0,1)*255,a[x*4+2]=pt(g[5]||0,0,1)*255,a[x*4+3]=255}let l=e/i;for(let h=0;h<i;h++)for(let p=0;p<i;p++){let x=h*i+p,g=(c[h*i+(p+1)%i]-c[h*i+(p-1+i)%i])*t/(2*l),m=(c[(h+1)%i*i+p]-c[(h-1+i)%i*i+p])*t/(2*l),S=Math.hypot(g,m,1);o[x*4]=(-g/S*.5+.5)*255,o[x*4+1]=(-m/S*.5+.5)*255,o[x*4+2]=(1/S*.5+.5)*255,o[x*4+3]=255}let u=Xh(r,i,!0),f=Xh(o,i,!1),d=Xh(a,i,!1);return[u,f,d].forEach(h=>h.repeat.set(1/e,1/e)),{map:u,normalMap:f,rmMap:d,tile:e}}var La=(i,e)=>[i[0]*e,i[1]*e,i[2]*e];function uf(i=[.2,.22,.25]){return zi(512,.6,.02,(e,t)=>{let n=t*3,s=Math.floor(n),r=n-s,a=zt(e*5+s*3.1,r*22,3,5,22,s),o,c=1;r>.94?(o=0,c=.45):o=.28+.72*Math.pow(1-r/.94,1.4);let l=(.9+.2*cn(s,3,5))*(.9+.2*a)*c;return[...La(i,l),o+(a-.5)*.08,.72+.2*a,0]})}function df(i=[.13,.145,.16]){return zi(512,1.2,.025,(e,t)=>{let n=e*4,s=Math.floor(n),r=n-s,a=Math.min(r,1-r)*.3,o=zt(s*5.1+r*3,t*7,3,20,7,s),c=.4+(o-.5)*.1,l=1;a<.026?c=1:a<.05&&(c=0,l=.5);let u=(.92+.16*cn(s,1,9))*(.9+.2*o)*l;return[...La(i,u),c,.7+.2*o,0]})}function ff(i=[.1,.105,.115]){return zi(512,.9,.018,(e,t)=>{let n=e*2%1,s=Math.min(n,1-n)*.45,r=s<.028?Math.pow(1-s/.028,.7):0,a=(zt(e*3,t*3,3,3,3,4)-.5)*.1,o=.34+.12*zt(e*8,t*40,2,8,40,2);return[...La(i,1+(zt(e*2,t*6,2,2,6,11)-.5)*.25+r*.35),.1+r+a,o,.8]})}function rc(i=[.66,.43,.26],e=[.4,.24,.13]){return zi(512,.6,.01,(t,n)=>{let s=zt(t*3,n*1.2,3,3,2,21)*3,r=.5+.5*Math.sin((t*10+s)*Math.PI*2/1),a=zt(t*18,n*2.4,3,18,2,33),o=pt(.25+r*.35+a*.5,0,1),c=t*6%1,l=c<.012||c>.988?.45:1;return[ft(e[0],i[0],o)*l,ft(e[1],i[1],o)*l,ft(e[2],i[2],o)*l,.55+a*.3-(l<1?.5:0),.55+.15*a,0]})}function pf(i=[.56,.55,.53]){return zi(512,1.2,.012,(e,t)=>{let n=t*8,s=Math.floor(n),r=n-s,a=cn(s,7,2)*40,o=zt(e*4+a,r*10,3,4,10,s),c=cn(Math.floor(e*512),Math.floor(t*512),3)>.985?.6:1,l=r<.04?.7:1,u=(.9+.2*o)*c*l*(.94+.12*cn(s,4,1));return[...La(i,u),.5+(o-.5)*.4-(r<.04?.3:0),.92,0]})}function mf(){return zi(512,1,.045,(i,e)=>{let t=i*5,n=e*4,s=Math.floor(t),r=Math.floor(n),a=9,o=9,c=0;for(let g=-1;g<=1;g++)for(let m=-1;m<=1;m++){let S=s+m,b=r+g,_=(S%5+5)%5,E=(b%4+4)%4,w=S+.15+cn(_,E,1)*.7,R=b+.15+cn(_,E,2)*.7,v=Math.hypot((t-w)*1,(n-R)*1.25);v<a?(o=a,a=v,c=_*31+E):v<o&&(o=v)}let l=o-a,u=ht(.04,.3,l),f=cn(c,5,3),d=.4+f*.2,h=cn(c,9,1)*.06,p=.9+.2*zt(i*12,e*12,3,12,12,c),x=u>.02?1:.35;return[(d+h)*p*x,(d+h*.6)*p*x,(d-.02)*p*x,u*(.7+.3*f),.88,0]})}function gf(){return zi(512,5,.06,(i,e)=>{let t=zt(i*5,e*5,4,5,5,71),n=zt(i*60,e*60,2,60,60,72),s=cn(Math.floor(i*512),Math.floor(e*512),8)>.988,r=.93+.07*t;return[.9*r,.94*r,1*r,t*.8+n*.2,s?.12:.78+n*.15,0]})}function xf(i=[.13,.135,.145]){return zi(256,3,.01,(e,t)=>{let n=cn(Math.floor(e*256),Math.floor(t*256),12),s=zt(e*6,t*6,3,6,6,9),r=.8+.5*n*n+.25*s;return[...La(i,r),n*.5+s*.3,.88-n*.1,0]})}function _f(){return zi(512,4,.05,(i,e)=>{let t=zt(i*70,e*70,2,70,70,3),n=zt(i*4,e*4,4,4,4,5),s=zt(i*9,e*9,3,9,9,6),r=.75+.5*t;return[ft(.22,.4,s)*r+n*.05,ft(.3,.4,s)*r*(.85+.3*n),ft(.1,.16,s)*r,t,.92,0]})}function vf(i,e){let t=new Uint8Array(i*i*4);for(let s=0;s<i;s++)for(let r=0;r<i;r++){let a=(r+.5)/i,o=(s+.5)/i,c=.45+.55*zt(a*6,o*4,4,1024,1024,41);c=ht(.2,.95,c),c*=.35+.65*ht(0,.18,Math.min(a,1-a,o,1-o)+.04*zt(a*30,o*30,2,1024,1024,5)),e&&(c*=e(a,o));let l=(s*i+r)*4;t[l]=255,t[l+1]=pt(c,0,1)*255,t[l+2]=255,t[l+3]=255}let n=new kn(t,i,i,vn,an);return n.magFilter=n.minFilter=sn,n.generateMipmaps=!1,n.needsUpdate=!0,n}function yf(i="living"){let e=document.createElement("canvas");e.width=160,e.height=160;let t=e.getContext("2d"),n={living:["#6b4426","#d99a55","#f5c27c"],kitchen:["#7a5a3a","#e6b673","#fff0cf"],bed:["#4a3a52","#c78b7a","#f1c6a0"],bath:["#4f6670","#a9c7cf","#eaf6f4"],hall:["#5a4128","#c58c52","#efba78"]}[i]||["#6b4426","#d99a55","#f5c27c"],s=t.createLinearGradient(0,0,0,160);s.addColorStop(0,n[0]),s.addColorStop(.55,n[1]),s.addColorStop(1,n[2]),t.fillStyle=s,t.fillRect(0,0,160,160);let r=i==="kitchen"?80:40+Math.random()*80,a=t.createRadialGradient(r,52,2,r,52,70);if(a.addColorStop(0,"rgba(255,246,214,.95)"),a.addColorStop(1,"rgba(255,220,150,0)"),t.fillStyle=a,t.fillRect(0,0,160,160),t.fillStyle="rgba(30,18,10,.55)",i==="living"&&(t.fillRect(14,108,92,52),t.fillRect(14,88,92,22),t.fillRect(112,70,6,90)),i==="kitchen"){t.fillRect(0,100,160,60),t.fillStyle="rgba(30,18,10,.4)";for(let l=0;l<4;l++)t.fillRect(8+l*38,20,30,40)}i==="bed"&&(t.fillRect(20,96,120,64),t.fillRect(20,70,14,40)),i==="bath"&&(t.fillStyle="rgba(20,40,48,.35)",t.fillRect(0,112,160,48),t.fillRect(104,40,40,36)),i==="hall"&&(t.fillRect(0,128,160,32),t.fillRect(70,30,36,90));let o=t.createLinearGradient(0,0,40,0);o.addColorStop(0,"rgba(40,24,16,.7)"),o.addColorStop(1,"rgba(40,24,16,0)"),t.fillStyle=o,t.fillRect(0,0,40,160),t.save(),t.translate(160,0),t.scale(-1,1),t.fillStyle=o,t.fillRect(0,0,40,160),t.restore();let c=new xn(e);return c.colorSpace=Ft,c}function _r(i="rgba(255,190,120,0.9)",e="rgba(255,150,80,0)"){let t=document.createElement("canvas");t.width=t.height=128;let n=t.getContext("2d"),s=n.createRadialGradient(64,64,0,64,64,64);s.addColorStop(0,i),s.addColorStop(.35,i.replace(/[\d.]+\)$/,"0.35)")),s.addColorStop(1,e),n.fillStyle=s,n.fillRect(0,0,128,128);let r=new xn(t);return r.colorSpace=Ft,r}function Mf(){let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d"),t=e.createRadialGradient(64,64,20,64,64,64);t.addColorStop(0,"rgba(244,189,126,0.55)"),t.addColorStop(1,"rgba(244,189,126,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),e.beginPath(),e.arc(64,64,30,0,Math.PI*2),e.fillStyle="#d98a4e",e.fill(),e.lineWidth=3,e.strokeStyle="#f4bd7e",e.stroke(),e.beginPath(),e.moveTo(49,79),e.lineTo(64,49),e.lineTo(79,79),e.lineWidth=6.5,e.strokeStyle="#121311",e.lineJoin="miter",e.stroke(),e.fillStyle="#121311",e.fillRect(60.5,64.5,7,7);let n=new xn(i);return n.colorSpace=Ft,n}function Ts(i="rgba(255,255,255,0.6)"){let e=document.createElement("canvas");e.width=e.height=64;let t=e.getContext("2d"),n=t.createRadialGradient(32,32,0,32,32,32);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.25,i),n.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=n,t.fillRect(0,0,64,64);let s=new xn(e);return s.colorSpace=Ft,s}function Sf(){let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d");for(let n=0;n<9;n++){let s=64+(cn(n,1,3)-.5)*40,r=64+(cn(n,2,3)-.5)*40,a=22+cn(n,3,3)*22,o=e.createRadialGradient(s,r,0,s,r,a);o.addColorStop(0,"rgba(255,255,255,0.28)"),o.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=o,e.fillRect(0,0,128,128)}let t=new xn(i);return t.colorSpace=Ft,t}function Ef(){let i={lap:uf([.3,.33,.37]),bb:df([.2,.22,.25]),seam:ff([.1,.105,.115]),cedar:rc(),walnut:rc([.46,.29,.17],[.25,.15,.09]),oak:rc([.8,.64,.44],[.56,.4,.25]),form:pf(),stone:mf(),snow:gf(),asphalt:xf(),grass:_f()},e=(a,o={})=>new Rt({map:a.map,normalMap:a.normalMap,roughnessMap:a.rmMap,metalnessMap:a.rmMap,roughness:1,metalness:1,...o}),t=(a,o=.8,c=0,l={})=>new Rt({color:a,roughness:o,metalness:c,...l}),n=(a,o)=>(a.userData.shell=!0,a.userData.th=o,a),s=(a,o)=>(a.userData.th=o,a),r={lap:n(e(i.lap,{normalScale:new Se(1,1)}),[.3,.05,.3]),bb:n(e(i.bb,{normalScale:new Se(1,1)}),[.3,.05,.3]),roof:n(e(i.seam,{normalScale:new Se(1.2,1.2),envMapIntensity:1.3}),[.4,.12]),cedar:n(e(i.cedar),[.42,0,.25]),walnut:n(e(i.walnut),[.52]),oak:n(e(i.oak),[.55]),form:n(e(i.form),[.33]),stone:n(e(i.stone),[.33]),drywall:n(t(14209475,.95),[.6]),trim:n(t(855568,.42,.55,{envMapIntensity:1.2}),[.32,0,.2]),reveal:n(t(14275785,.85),[.45]),slab:n(t(7828331,1),[.35]),concrete:n(t(7301987,1),[.33]),floor:n(t(10518364,.7),[.55]),door:n(e(i.walnut),[.52]),insul:n(t(13087881,1),[.5]),counter:n(t(2959910,.5,.05),[.55]),snowRoof:n(t(15265527,.85,0,{alphaToCoverage:!0}),[.03]),ice:s(new Hi({color:13625845,roughness:.08,metalness:0,transparent:!0,opacity:.85,clearcoat:1,envMapIntensity:1.6}),[.1]),white:s(t(14605267,.5,.05),[.6]),steel:s(t(10133670,.35,.85),[.55]),pvc:s(t(15131612,.4),[.24]),pipe:s(t(6255750,.5,.4),[.45]),copper:s(t(14256718,.28,.9,{envMapIntensity:1.4}),[.68]),solar:s(new Hi({color:726832,roughness:.16,metalness:.7,clearcoat:1,clearcoatRoughness:.06,envMapIntensity:1.5}),[.17]),solarFrame:s(t(11186616,.4,.9),[.3]),neighbor:s(e(i.lap,{color:9080210}),[.26,.04,.24]),neighborRoof:s(e(i.seam,{color:6711920}),[.4,.12]),asphalt:s(e(i.asphalt),[.3]),pavement:s(t(9144706,.95),[.3]),sconce:s(new Rt({color:1709070,emissive:16756833,emissiveIntensity:3,roughness:.4}),[.9]),lampHead:s(new Rt({color:2236962,emissive:16761466,emissiveIntensity:4,roughness:.4}),[.95]),pole:s(t(1776928,.5,.7),[.3]),spruce:s(new Rt({vertexColors:!0,roughness:.92,metalness:0}),[.13]),trunk:s(t(2760471,1),[.18]),shrub:s(new Rt({vertexColors:!0,roughness:1}),[.14]),fabric:s(t(6970708,.95),[.5]),fabric2:s(t(4016726,.95),[.5]),leather:s(t(8014634,.55),[.5]),ceramic:s(t(15921129,.18,0),[.45]),mirror:s(t(12570840,.05,.9),[.4]),black:s(t(1381653,.5,.3),[.4]),warmLight:s(new Rt({color:2236440,emissive:16767392,emissiveIntensity:5,roughness:.6}),[1])};return["lap","bb","roof","drywall","form","stone","trim","cedar","door","walnut","reveal","snowRoof"].forEach(a=>{r[a].userData.wall=!0}),Object.values(r).forEach(a=>{a.userData.th===void 0&&(a.userData.th=[.3])}),{M:r,T:i}}function Yh(i){let e=new Rt({color:395533,roughness:.05,metalness:.25,emissive:16777215,emissiveMap:i,emissiveIntensity:0,envMapIntensity:1.6});return e.userData.shell=!0,e.userData.pane=!0,e.userData.wall=!0,e.userData.th=[.86],e}var ac=[[-90,"#04060d","#0c1124"],[-20,"#05070f","#10162b"],[-14,"#080d20","#1a2140"],[-9,"#0f1838","#33406a"],[-5,"#1a2650","#7a6f94"],[-2,"#27345e","#d98d62"],[1,"#35508a","#eba66f"],[5,"#43689f","#e8bf8f"],[12,"#4a78b0","#dccfb4"],[25,"#4a80ba","#c7dcec"],[50,"#3f78b8","#b4d2e8"],[90,"#3a72b0","#accce6"]],V_=`varying vec3 vDir;
void main(){ vDir = normalize(position); vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_Position = p.xyww; }`,G_=`precision highp float;
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
}`;function bf(i,e){let t={uTop:{value:new Be},uHor:{value:new Be},uLow:{value:new Be},uSunDir:{value:new C(0,1,0)},uSunCol:{value:new Be(1,.8,.6)},uMoonDir:{value:new C(.3,.55,-.78).normalize()},uSunI:{value:0},uMoonI:{value:0},uTime:{value:0},uCloud:{value:.4},uAurora:{value:0},uThermal:{value:0},uSnowLine:{value:0}},n=new Dt({uniforms:t,vertexShader:V_,fragmentShader:G_,side:un,depthWrite:!1,depthTest:!1}),s=new Re(new In(500,48,28),n);s.renderOrder=-10,s.frustumCulled=!1,s.userData.noThermal=!0,s.userData.noAO=!0,e.add(s);let r=Cn(7),a=1500,o=new Float32Array(a*3);for(let E=0;E<a;E++){let w=r()*Math.PI*2,R=Math.acos(1-r()*1),v=480;o[E*3]=Math.sin(R)*Math.cos(w)*v,o[E*3+1]=Math.cos(R)*v,o[E*3+2]=Math.sin(R)*Math.sin(w)*v}let c=new St;c.setAttribute("position",new _t(o,3));let l=new gn({color:14674175,size:1.7,sizeAttenuation:!1,transparent:!0,opacity:0,fog:!1,depthWrite:!1}),u=new En(c,l);u.frustumCulled=!1,u.renderOrder=-9,u.userData.noAO=!0,e.add(u);function f(E,w,R){let v=document.createElement("canvas");v.width=4096,v.height=256;let A=v.getContext("2d"),P=Cn(E);A.filter="blur(1.4px)";let F=Array.from({length:8},()=>P()*6.28);A.clearRect(0,0,2048,256),A.beginPath(),A.moveTo(0,256);let M=[3,7,15,31,63],I=[.5,.28,.15,.08*R,.045*R];for(let V=0;V<=4096;V+=2){let B=V/4096*Math.PI*2,G=0;for(let O=0;O<5;O++)G+=I[O]*Math.pow(1-Math.abs(Math.sin(B*M[O]+F[O])),1.6);A.lineTo(V,256-pt(G/1.06,0,1)*w)}A.lineTo(4096,256),A.closePath();let L=A.createLinearGradient(0,256-w,0,256);L.addColorStop(0,"rgba(255,255,255,1)"),L.addColorStop(.3,"rgba(232,236,248,1)"),L.addColorStop(.62,"rgba(120,132,160,1)"),L.addColorStop(1,"rgba(66,74,96,0)"),A.fillStyle=L,A.fill();let U=new xn(v);return U.colorSpace=Ft,U.wrapS=pn,U.anisotropy=4,U}function d(E){let w=document.createElement("canvas");w.width=2048,w.height=128;let R=w.getContext("2d"),v=Cn(E);R.clearRect(0,0,2048,128),R.fillStyle="rgba(255,255,255,1)";for(let P=0;P<2048;P+=3){let F=34+v()*40+Math.sin(P*.01)*10,M=6+v()*7;R.beginPath(),R.moveTo(P-M,128),R.lineTo(P,128-F),R.lineTo(P+M,128),R.fill()}R.fillRect(0,100,2048,28);let A=new xn(w);return A.colorSpace=Ft,A.wrapS=pn,A}let h=[{tex:f(3,220,1),R:450,h:190,y:40,k:.8,mix:.86},{tex:f(11,170,.8),R:360,h:120,y:16,k:.55,mix:.68},{tex:d(5),R:300,h:34,y:8,k:.22,mix:.2}].map(E=>{let w=new Ut({map:E.tex,transparent:!0,side:un,depthWrite:!1,fog:!1,color:4478327}),R=new Re(new Ot(E.R,E.R,E.h,96,1,!0),w);return R.position.y=E.y,R.renderOrder=-8,R.frustumCulled=!1,R.userData.noThermal=!0,R.userData.noAO=!0,e.add(R),{...E,mat:w,mesh:R}}),p=new gr(i),x=new ms,g=new Re(new In(50,32,16),n.clone());g.material.uniforms=t,g.material.depthTest=!0,x.add(g);let m=null,S="",b=new Be,_=new Be;return{dome:s,mat:n,U:t,stars:u,horizon:new Be,zenith:new Be,update(E,w){let R=pt(E.elev,-90,90),v=0;for(;v<ac.length-2&&ac[v+1][0]<=R;)v++;let[A,P,F]=ac[v],[M,I,L]=ac[v+1],U=ht(0,1,(R-A)/(M-A));t.uTop.value.copy(b.set(P)).lerp(_.set(I),U),t.uHor.value.copy(b.set(F)).lerp(_.set(L),U),E.seasonTint&&(t.uTop.value.lerp(E.seasonTint.top,E.seasonTint.k),t.uHor.value.lerp(E.seasonTint.hor,E.seasonTint.k)),t.uLow.value.copy(t.uHor.value).multiplyScalar(.55+.25*E.daylight).lerp(b.set(E.snowy?7174806:2764834),.18+.2*E.daylight),t.uLow.value.multiplyScalar(1-.82*(E.voidK||0)),t.uSunDir.value.copy(E.sunDir);let V=1-ht(0,.5,E.sunDir.y);t.uSunCol.value.setRGB(1,ft(.93,.56,V),ft(.84,.32,V)),t.uSunI.value=ht(-.14,.04,E.sunDir.y)*ft(1,1.4,V),t.uMoonI.value=(1-E.daylight)*.9,t.uTime.value=w,t.uCloud.value=E.cloud??.4,t.uAurora.value=E.aurora||0,t.uThermal.value=E.thermal||0,this.horizon.copy(t.uHor.value),this.zenith.copy(t.uTop.value),l.opacity=pt((1-E.daylight*1.2)*.95,0,1)*(1-(E.thermal||0)),h.forEach(B=>{B.mat.color.copy(t.uHor.value).lerp(t.uTop.value,.12).multiplyScalar(B.k*(.55+.7*E.daylight)).lerp(b.set(16777215),0).multiplyScalar(1),B.mat.color.lerp(t.uHor.value,1-B.mix),B.mat.color.lerp(_.set(2101306),(E.thermal||0)*.9)})},follow(E){s.position.copy(E),u.position.copy(E),h.forEach(w=>{w.mesh.position.x=E.x,w.mesh.position.z=E.z})},refreshEnv(E){let w=[t.uTop.value.getHexString(),t.uHor.value.getHexString(),t.uSunI.value.toFixed(2),t.uAurora.value.toFixed(1),t.uThermal.value.toFixed(1),t.uSunDir.value.x.toFixed(2),t.uSunDir.value.y.toFixed(2)].join("|");if(!E&&w===S)return;S=w;let R=m;m=p.fromScene(x,.015,.1,200,{size:128}),e.environment=m.texture,R&&R.dispose()}}}var Ai={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Pn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},k_=new ts(-1,1,1,-1,0,1),Zh=class extends St{constructor(){super(),this.setAttribute("position",new vt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new vt([0,2,0,0,2,0],2))}},W_=new Zh,Ri=class{constructor(e){this._mesh=new Re(W_,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,k_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var vr=class extends Pn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Dt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Rn.clone(e.uniforms),this.material=new Dt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Ri(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Ua=class extends Pn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},oc=class extends Pn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var lc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Se);this._width=n.width,this._height=n.height,t=new Wt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Kt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new vr(Ai),this.copyPass.material.blending=en,this.timer=new ha}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Ua!==void 0&&(a instanceof Ua?n=!0:a instanceof oc&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Se);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var cc=class extends Pn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Be}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var Tf={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Be(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var yr=class i extends Pn{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Se(e.x,e.y):new Se(256,256),this.clearColor=new Be(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Wt(r,a,{type:Kt,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let f=new Wt(r,a,{type:Kt,depthBuffer:!1});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let d=new Wt(r,a,{type:Kt,depthBuffer:!1});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}let o=Tf;this.highPassUniforms=Rn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Dt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let c=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Se(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Rn.clone(Ai.uniforms),this.blendMaterial=new Dt({uniforms:this.copyUniforms,vertexShader:Ai.vertexShader,fragmentShader:Ai.fragmentShader,premultipliedAlpha:!0,blending:Bt,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Be,this._oldClearAlpha=1,this._basic=new Ut,this._fsQuad=new Ri(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Se(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let s=[],r=[];for(let a=1;a<e;a+=2){let o=t[a],c=a+1<e?t[a+1]:0,l=o+c;s.push((a*o+(a+1)*c)/l),r.push(l)}return new Dt({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new Se(.5,.5)},direction:{value:new Se(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new Dt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};yr.BlurDirectionX=new Se(1,0);yr.BlurDirectionY=new Se(0,1);var Na={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var hc=class extends Pn{constructor(){super(),this.isOutputPass=!0,this.uniforms=Rn.clone(Na.uniforms),this.material=new or({name:Na.name,uniforms:this.uniforms,vertexShader:Na.vertexShader,fragmentShader:Na.fragmentShader}),this._fsQuad=new Ri(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},wt.getTransfer(this._outputColorSpace)===Pt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===pa?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===ma?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ga?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===is?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===_a?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===va?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===xa&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Fa={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Se},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new st},cameraProjectionMatrixInverse:{value:new st},cameraWorldMatrix:{value:new st},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new C(-1,-1,-1)},sceneBoxMax:{value:new C(1,1,1)}},vertexShader:`

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
		}`},Oa={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},uc={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function wf(i=5){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=X_(e),n=t.length,s=new Uint8Array(n*4);for(let a=0;a<n;++a){let o=t[a],c=2*Math.PI*o/n,l=new C(Math.cos(c),Math.sin(c),0).normalize();s[a*4]=(l.x*.5+.5)*255,s[a*4+1]=(l.y*.5+.5)*255,s[a*4+2]=127,s[a*4+3]=255}let r=new kn(s,e,e);return r.wrapS=pn,r.wrapT=pn,r.needsUpdate=!0,r}function X_(i){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let a=1;a<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),n[s*e+r]!==0){r-=2,s++;continue}else n[s*e+r]=a++;r++,s--}return n}var Ba={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:Jh(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Se},cameraProjectionMatrixInverse:{value:new st},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function Jh(i,e,t){let n=q_(i,e,t),s="vec3[SAMPLES](";for(let r=0;r<i;r++){let a=n[r];s+=`vec3(${a.x}, ${a.y}, ${a.z})${r<i-1?",":")"}`}return s}function q_(i,e,t){let n=[];for(let s=0;s<i;s++){let r=2*Math.PI*e*s/i,a=Math.pow(s/(i-1),t);n.push(new C(Math.cos(r),Math.sin(r),a))}return n}var dc=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,s,r,a=.5*(Math.sqrt(3)-1),o=(e+t)*a,c=Math.floor(e+o),l=Math.floor(t+o),u=(3-Math.sqrt(3))/6,f=(c+l)*u,d=c-f,h=l-f,p=e-d,x=t-h,g,m;p>x?(g=1,m=0):(g=0,m=1);let S=p-g+u,b=x-m+u,_=p-1+2*u,E=x-1+2*u,w=c&255,R=l&255,v=this.perm[w+this.perm[R]]%12,A=this.perm[w+g+this.perm[R+m]]%12,P=this.perm[w+1+this.perm[R+1]]%12,F=.5-p*p-x*x;F<0?n=0:(F*=F,n=F*F*this._dot(this.grad3[v],p,x));let M=.5-S*S-b*b;M<0?s=0:(M*=M,s=M*M*this._dot(this.grad3[A],S,b));let I=.5-_*_-E*E;return I<0?r=0:(I*=I,r=I*I*this._dot(this.grad3[P],_,E)),70*(n+s+r)}noise3d(e,t,n){let s,r,a,o,l=(e+t+n)*.3333333333333333,u=Math.floor(e+l),f=Math.floor(t+l),d=Math.floor(n+l),h=1/6,p=(u+f+d)*h,x=u-p,g=f-p,m=d-p,S=e-x,b=t-g,_=n-m,E,w,R,v,A,P;S>=b?b>=_?(E=1,w=0,R=0,v=1,A=1,P=0):S>=_?(E=1,w=0,R=0,v=1,A=0,P=1):(E=0,w=0,R=1,v=1,A=0,P=1):b<_?(E=0,w=0,R=1,v=0,A=1,P=1):S<_?(E=0,w=1,R=0,v=0,A=1,P=1):(E=0,w=1,R=0,v=1,A=1,P=0);let F=S-E+h,M=b-w+h,I=_-R+h,L=S-v+2*h,U=b-A+2*h,V=_-P+2*h,B=S-1+3*h,G=b-1+3*h,O=_-1+3*h,q=u&255,K=f&255,ie=d&255,ve=this.perm[q+this.perm[K+this.perm[ie]]]%12,De=this.perm[q+E+this.perm[K+w+this.perm[ie+R]]]%12,Le=this.perm[q+v+this.perm[K+A+this.perm[ie+P]]]%12,Ye=this.perm[q+1+this.perm[K+1+this.perm[ie+1]]]%12,Y=.6-S*S-b*b-_*_;Y<0?s=0:(Y*=Y,s=Y*Y*this._dot3(this.grad3[ve],S,b,_));let ne=.6-F*F-M*M-I*I;ne<0?r=0:(ne*=ne,r=ne*ne*this._dot3(this.grad3[De],F,M,I));let ye=.6-L*L-U*U-V*V;ye<0?a=0:(ye*=ye,a=ye*ye*this._dot3(this.grad3[Le],L,U,V));let pe=.6-B*B-G*G-O*O;return pe<0?o=0:(pe*=pe,o=pe*pe*this._dot3(this.grad3[Ye],B,G,O)),32*(s+r+a+o)}noise4d(e,t,n,s){let r=this.grad4,a=this.simplex,o=this.perm,c=(Math.sqrt(5)-1)/4,l=(5-Math.sqrt(5))/20,u,f,d,h,p,x=(e+t+n+s)*c,g=Math.floor(e+x),m=Math.floor(t+x),S=Math.floor(n+x),b=Math.floor(s+x),_=(g+m+S+b)*l,E=g-_,w=m-_,R=S-_,v=b-_,A=e-E,P=t-w,F=n-R,M=s-v,I=A>P?32:0,L=A>F?16:0,U=P>F?8:0,V=A>M?4:0,B=P>M?2:0,G=F>M?1:0,O=I+L+U+V+B+G,q=a[O][0]>=3?1:0,K=a[O][1]>=3?1:0,ie=a[O][2]>=3?1:0,ve=a[O][3]>=3?1:0,De=a[O][0]>=2?1:0,Le=a[O][1]>=2?1:0,Ye=a[O][2]>=2?1:0,Y=a[O][3]>=2?1:0,ne=a[O][0]>=1?1:0,ye=a[O][1]>=1?1:0,pe=a[O][2]>=1?1:0,Me=a[O][3]>=1?1:0,Ue=A-q+l,je=P-K+l,fe=F-ie+l,he=M-ve+l,Z=A-De+2*l,se=P-Le+2*l,ue=F-Ye+2*l,Te=M-Y+2*l,we=A-ne+3*l,Ge=P-ye+3*l,Ze=F-pe+3*l,H=M-Me+3*l,dt=A-1+4*l,nt=P-1+4*l,D=F-1+4*l,y=M-1+4*l,J=g&255,Q=m&255,re=S&255,Pe=b&255,Ee=o[J+o[Q+o[re+o[Pe]]]]%32,ce=o[J+q+o[Q+K+o[re+ie+o[Pe+ve]]]]%32,_e=o[J+De+o[Q+Le+o[re+Ye+o[Pe+Y]]]]%32,Oe=o[J+ne+o[Q+ye+o[re+pe+o[Pe+Me]]]]%32,Qe=o[J+1+o[Q+1+o[re+1+o[Pe+1]]]]%32,Ne=.6-A*A-P*P-F*F-M*M;Ne<0?u=0:(Ne*=Ne,u=Ne*Ne*this._dot4(r[Ee],A,P,F,M));let Fe=.6-Ue*Ue-je*je-fe*fe-he*he;Fe<0?f=0:(Fe*=Fe,f=Fe*Fe*this._dot4(r[ce],Ue,je,fe,he));let Ve=.6-Z*Z-se*se-ue*ue-Te*Te;Ve<0?d=0:(Ve*=Ve,d=Ve*Ve*this._dot4(r[_e],Z,se,ue,Te));let $e=.6-we*we-Ge*Ge-Ze*Ze-H*H;$e<0?h=0:($e*=$e,h=$e*$e*this._dot4(r[Oe],we,Ge,Ze,H));let it=.6-dt*dt-nt*nt-D*D-y*y;return it<0?p=0:(it*=it,p=it*it*this._dot4(r[Qe],dt,nt,D,y)),27*(u+f+d+h+p)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}_dot4(e,t,n,s,r){return e[0]*t+e[1]*n+e[2]*s+e[3]*r}};var Ha=class i extends Pn{constructor(e,t,n=512,s=512,r,a,o){super(),this.width=n,this.height=s,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=wf(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new Wt(this.width,this.height,{type:Kt,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Dt({defines:Object.assign({},Fa.defines),uniforms:Rn.clone(Fa.uniforms),vertexShader:Fa.vertexShader,fragmentShader:Fa.fragmentShader,blending:en,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new ra,this.normalMaterial.blending=en,this.pdMaterial=new Dt({defines:Object.assign({},Ba.defines),uniforms:Rn.clone(Ba.uniforms),vertexShader:Ba.vertexShader,fragmentShader:Ba.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Dt({defines:Object.assign({},Oa.defines),uniforms:Rn.clone(Oa.uniforms),vertexShader:Oa.vertexShader,fragmentShader:Oa.fragmentShader,blending:en}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Dt({uniforms:Rn.clone(Ai.uniforms),vertexShader:Ai.vertexShader,fragmentShader:Ai.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:fa,blendDst:Ms,blendEquation:qn,blendSrcAlpha:da,blendDstAlpha:Ms,blendEquationAlpha:qn}),this.blendMaterial=new Dt({uniforms:Rn.clone(uc.uniforms),vertexShader:uc.vertexShader,fragmentShader:uc.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:cl,blendSrc:fa,blendDst:Ms,blendEquation:qn,blendSrcAlpha:da,blendDstAlpha:Ms,blendEquationAlpha:qn}),this._fsQuad=new Ri(null),this._originalClearColor=new Be,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new Mi,this.depthTexture.format=bi,this.depthTexture.type=rs,this.normalRenderTarget=new Wt(this.width,this.height,{minFilter:Qt,magFilter:Qt,type:Kt,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Jh(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=en,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=en,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=en,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=en,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=en,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,n,s,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_renderOverride(e,t,n,s,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,t.push(n))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new dc,n=e*e*4,s=new Uint8Array(n);for(let a=0;a<e;a++)for(let o=0;o<e;o++){let c=a,l=o;s[(a*e+o)*4]=(t.noise(c,l)*.5+.5)*255,s[(a*e+o)*4+1]=(t.noise(c+e,l)*.5+.5)*255,s[(a*e+o)*4+2]=(t.noise(c,l+e)*.5+.5)*255,s[(a*e+o)*4+3]=(t.noise(c+e,l+e)*.5+.5)*255}let r=new kn(s,e,e,vn,an);return r.wrapS=pn,r.wrapT=pn,r.needsUpdate=!0,r}};Ha.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var Y_={name:"HauseGrade",uniforms:{tDiffuse:{value:null},uTime:{value:0},uVig:{value:.32},uGrain:{value:.03},uCA:{value:.0011},uSat:{value:1.05},uCon:{value:1.05},uThermal:{value:0},uAspect:{value:1.6}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float uTime, uVig, uGrain, uCA, uSat, uCon, uThermal, uAspect; varying vec2 vUv;
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
    }`};function Af(i,e,t,n,s,r){let a=n>=2?4:n===1?2:0,o=new Wt(s,r,{type:Kt,samples:a}),c=new lc(i,o);c.setSize(s,r),c.addPass(new cc(e,t));let l=null,u=null;n>=2&&(l=new Ha(e,t,s,r,{radius:.9,distanceExponent:1.4,thickness:1.2,scale:1,samples:12,distanceFallOff:1,screenSpaceRadius:!1},void 0,{lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,radiusExponent:1,rings:2,samples:12}),l.blendIntensity=.9,l._overrideVisibility=function(){let d=this._visibilityCache;this.scene.traverse(h=>{(h.isPoints||h.isLine||h.isLine2||h.isSprite||h.userData&&h.userData.noAO)&&h.visible&&(h.visible=!1,d.push(h))})},c.addPass(l)),n>=1&&(u=new yr(new Se(s,r),.55,.62,1),c.addPass(u)),c.addPass(new hc);let f=new vr(Y_);return n===0&&(f.uniforms.uCA.value=0,f.uniforms.uGrain.value=.015),c.addPass(f),{composer:c,bloom:u,gtao:l,grade:f,tier:n,setSize(d,h){c.setSize(d,h),f.uniforms.uAspect.value=d/h},render(d,h){f.uniforms.uTime.value=h%10,c.render(d)},dispose(){c.dispose(),o.dispose()}}}var za=new C;function Jn(i,e,t,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),c=Math.PI/4;za.copy(e),za[n]=0,za.normalize();let l=.5*a/(a+o),u=1-za.angleTo(i)/c;return Math.sign(za[t])===1?u*l:o/(a+o)+l+l*(1-u)}var Ci=class i extends It{constructor(e=1,t=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let c=new C,l=new C,u=new C(e,t,n).divideScalar(2).subScalar(r),f=this.attributes.position.array,d=this.attributes.normal.array,h=this.attributes.uv.array,p=f.length/6,x=new C,g=.5/a;for(let m=0,S=0;m<f.length;m+=3,S+=2)switch(c.fromArray(f,m),l.copy(c),l.x-=Math.sign(l.x)*g,l.y-=Math.sign(l.y)*g,l.z-=Math.sign(l.z)*g,l.normalize(),f[m+0]=u.x*Math.sign(c.x)+l.x*r,f[m+1]=u.y*Math.sign(c.y)+l.y*r,f[m+2]=u.z*Math.sign(c.z)+l.z*r,d[m+0]=l.x,d[m+1]=l.y,d[m+2]=l.z,Math.floor(m/p)){case 0:x.set(1,0,0),h[S+0]=Jn(x,l,"z","y",r,n),h[S+1]=1-Jn(x,l,"y","z",r,t);break;case 1:x.set(-1,0,0),h[S+0]=1-Jn(x,l,"z","y",r,n),h[S+1]=1-Jn(x,l,"y","z",r,t);break;case 2:x.set(0,1,0),h[S+0]=1-Jn(x,l,"x","z",r,e),h[S+1]=Jn(x,l,"z","x",r,n);break;case 3:x.set(0,-1,0),h[S+0]=1-Jn(x,l,"x","z",r,e),h[S+1]=1-Jn(x,l,"z","x",r,n);break;case 4:x.set(0,0,1),h[S+0]=1-Jn(x,l,"x","y",r,e),h[S+1]=1-Jn(x,l,"y","x",r,t);break;case 5:x.set(0,0,-1),h[S+0]=Jn(x,l,"x","y",r,e),h[S+1]=1-Jn(x,l,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};var Gt=10,xt=8,$n=2.9,Va=[{key:"roof",dy:9.2},{key:"upper",dy:6.6},{key:"main",dy:4.1},{key:"basement",dy:2},{key:"below",dy:0}],gt=(i,e,t)=>new C(i,e,t);function Rf({M:i,T:e,markTex:t,glowTex:n}){let s=new Tt,r={};Va.forEach(M=>{let I=new Tt;I.userData.level=M.key,r[M.key]=I,s.add(I)});let a={},o=[],c=new $i({color:11126756,transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1,fog:!1}),l={icicles:null,snowL:null,snowR:null,chimneyTop:new jt,fans:[]},u=Da;function f(M,I,L,U,V=0,B=0,G=0,O,q={}){let K=new It(M,I,L);u(K,q.uv||{});let ie=new Re(K,U);if(ie.position.set(V,B,G),ie.castShadow=q.cast!==!1,ie.receiveShadow=q.receive!==!1,q.edges){let ve=new yi(new ir(K,30),c);ve.raycast=()=>{},ie.add(ve)}return O&&O.add(ie),ie}function d(M,I,L,U,V,B=0,G=0,O=0,q,K={}){let ie=new Ci(M,I,L,K.seg||2,U),ve=new Re(ie,V);return ve.position.set(B,G,O),ve.castShadow=K.cast!==!1,ve.receiveShadow=!0,q&&q.add(ve),ve}function h(M,I,L,U,V,B,G,O=18){let q=new Re(new Ot(M,M,I,O),L);return q.position.set(U,V,B),q.castShadow=!0,q.receiveShadow=!0,G&&G.add(q),q}function p(M,I,L,U){let V=a[M]||(a[M]={meshes:[],mats:[],marks:[]}),B=G=>{let O=G.clone();return O.userData.baseEmissive=O.emissive.clone(),O};if(I.forEach(G=>{G.material=Array.isArray(G.material)?G.material.map(B):B(G.material),G.userData.sys=M,V.meshes.push(G),V.mats.push(...[].concat(G.material))}),L){let G=new Sn(new mn({map:t,transparent:!0,depthTest:!1,depthWrite:!1,opacity:0}));G.position.copy(L),G.scale.set(.95,.95,1),G.renderOrder=10,G.userData.sys=M,G.userData.noAO=!0,r[U].add(G),V.marks.push(G)}}let x=0,g={},m=M=>g[M]||(g[M]=yf(M));function S(M,I,L,U,V,B){let G=I.x1-I.x0,O=I.y1-I.y0,q=(I.x0+I.x1)/2,K=(I.y0+I.y1)/2,ie=new Tt;ie.position.set(q,K,0),M.add(ie);let ve=Yh(m(U||"living")),De=new Re(new Ht(G,O),ve);De.position.z=.03,De.receiveShadow=!1,ie.add(De);let Le=.075,Ye=.1;d(G,Le,Ye,.012,i.trim,0,O/2-Le/2,.07,ie,{seg:1}),d(G,Le,Ye,.012,i.trim,0,-O/2+Le/2,.07,ie,{seg:1}),d(Le,O,Ye,.012,i.trim,-G/2+Le/2,0,.07,ie,{seg:1}),d(Le,O,Ye,.012,i.trim,G/2-Le/2,0,.07,ie,{seg:1});let Y=G>1.35?Math.round(G/.95):1;for(let ye=1;ye<Y;ye++)d(.035,O-.1,.07,.008,i.trim,-G/2+G/Y*ye,0,.065,ie,{seg:1,cast:!1});O>1.2&&d(G-.1,.035,.07,.008,i.trim,0,O*.12,.065,ie,{seg:1,cast:!1}),d(G+.22,.055,.26,.012,i.cedar,0,-O/2-.03,.14,ie,{seg:1}),d(G+.18,.09,.12,.012,i.trim,0,O/2+.07,.1,ie,{seg:1});let ne=new Sn(new mn({map:n,transparent:!0,depthWrite:!1,blending:Bt,opacity:0}));return ne.position.set(0,0,.4),ne.scale.set(G*2.6,O*2.6,1),ne.userData.noAO=!0,ie.add(ne),o.push({mat:ve,halo:ne,order:V!=null?V+x*.001:x,always:!!B,w:G,h:O}),x++,ie}function b(M,I,L){let U=I.x1-I.x0,V=I.y1-I.y0,B=(I.x0+I.x1)/2,G=(I.y0+I.y1)/2,O=new Tt;O.position.set(B,G,0),M.add(O),f(U,V,.07,i.door,0,0,0,O,{uv:{ox:B,oy:G}});let q=new Re(new Ht(.22,V*.72),Yh(m("hall")));q.position.set(-U/2+.22,.05,.04),O.add(q),o.push({mat:q.material,halo:null,order:.5,always:!1,w:.22,h:V*.72}),d(.03,.8,.05,.012,i.trim,U/2-.14,-.05,.08,O,{seg:1}),d(U+.14,.09,.12,.012,i.trim,0,V/2+.07,.07,O,{seg:1}),d(.07,V,.1,.01,i.trim,-U/2-.035,0,.06,O,{seg:1}),d(.07,V,.1,.01,i.trim,U/2+.035,0,.06,O,{seg:1})}function _(M,I,L,U,V,B,G,O,q={}){let K=new Tt,ie=new Set([-M/2,M/2]),ve=new Set([0,I]);U.forEach(Y=>{ie.add(Y.x0),ie.add(Y.x1),ve.add(Y.y0),ve.add(Y.y1)});let De=[...ie].sort((Y,ne)=>Y-ne),Le=[...ve].sort((Y,ne)=>Y-ne),Ye=[i.trim,i.trim,i.trim,i.trim,V,i.drywall];for(let Y=0;Y<De.length-1;Y++)for(let ne=0;ne<Le.length-1;ne++){let ye=(De[Y]+De[Y+1])/2,pe=(Le[ne]+Le[ne+1])/2;U.some(Me=>ye>Me.x0&&ye<Me.x1&&pe>Me.y0&&pe<Me.y1)||f(De[Y+1]-De[Y],Le[ne+1]-Le[ne],L,Ye,ye,pe,0,K,{edges:!0,uv:{ox:ye,oy:pe+(q.v0||0)}})}return U.forEach(Y=>{Y.door?b(K,Y,L):S(K,Y,L,Y.room,q.order,Y.always)}),K.position.copy(G),K.rotation.y=O||0,B.add(K),K}(()=>{let M=r.below,I=[],L=i.form;I.push(f(Gt+.5,3.4,.25,L,0,-1.4,xt/2+.12,M,{edges:!0,uv:{ox:0,oy:-1.4}})),I.push(f(Gt+.5,3.4,.25,L,0,-1.4,-xt/2-.12,M,{edges:!0,uv:{ox:0,oy:-1.4}})),I.push(f(.25,3.4,xt,L,Gt/2+.12,-1.4,0,M,{edges:!0,uv:{oy:-1.4}})),I.push(f(.25,3.4,xt,L,-Gt/2-.12,-1.4,0,M,{edges:!0,uv:{oy:-1.4}})),f(Gt+1.2,.3,.8,i.concrete,0,-3.1,xt/2+.1,M),f(Gt+1.2,.3,.8,i.concrete,0,-3.1,-xt/2-.1,M),f(.8,.3,xt,i.concrete,Gt/2+.1,-3.1,0,M),f(.8,.3,xt,i.concrete,-Gt/2-.1,-3.1,0,M);let U=f(Gt,.16,xt,i.slab,0,-2.88,0,M,{edges:!0});p("foundation",[...I,U],gt(Gt/2+.6,-1.4,1.6),"below");let V=h(.14,9,i.pipe,.6,-3.25,-xt/2-4.3,M);V.rotation.x=Math.PI/2-.05;let B=h(.14,.6,i.pipe,.6,-3,-xt/2+.2,M),G=h(.12,3.2,i.pvc,.6,-1.6,-xt/2-1.2,M);p("sewer",[V,B,G],gt(.6,-2.4,-xt/2-4.5),"below");let O=h(.1,.5,i.pvc,-1.2,-2.7,-1.5,M);p("radon",[O],gt(-1.2,-2.2,-1.5),"below");let q=h(.06,Gt+1,i.pvc,0,-3.25,xt/2+.7,M,10);q.rotation.z=Math.PI/2,q.castShadow=!1})(),(()=>{let M=r.basement,I=new Xn(16766880,0,15,2);I.position.set(.2,-.7,-.4),M.add(I),M.userData.lights=[I];let L=f(.85,1.7,.85,i.white,-3.3,-2,-2.6,M),U=f(.87,.12,.87,i.copper,-3.3,-1.5,-2.6,M),V=f(6.2,.36,.5,i.steel,-.3,-.12,-2.6,M),B=f(.5,1,.5,i.steel,-3.3,-.7,-2.6,M),G=h(.07,1.2,i.pvc,-3,-.6,-3.1,M);p("hvac",[L,U,V,B,G],gt(-3.3,-.9,-2),"basement");let O=h(.3,1.4,i.white,-2.1,-2.1,-3,M),q=h(.04,1.2,i.copper,-2,-.9,-3,M);p("water-heaters",[O,q],gt(-2.1,-1.1,-2.6),"basement");let K=f(.62,.95,.14,i.steel,2.8,-1.2,-3.8,M),ie=f(.4,.7,.02,i.copper,2.8,-1.2,-3.72,M),ve=h(.05,1.5,i.copper,2.8,-.1,-3.8,M);p("electrical",[K,ie,ve],gt(2.8,-.5,-3.3),"basement");let De=h(.1,3.1,i.pvc,-1.2,-1.2,-1.5,M);p("radon",[De],null,"basement"),h(.09,3.1,i.pipe,-2.6,-1.3,-3.6,M);for(let Le=-4;Le<=4;Le++)f(.09,.3,xt-.3,i.cedar,Le*1,0-.1,0,M,{cast:!1})})();let E=[{x0:-3.8,x1:-1.2,y0:.7,y1:2.5,room:"living"},{x0:.2,x1:1.3,y0:0,y1:2.2,door:!0},{x0:2.1,x1:4.2,y0:.7,y1:2.5,room:"kitchen"}];(()=>{let M=r.main,I=.3;f(Gt,.3,xt,i.floor,0,.15,0,M,{edges:!0}),_(Gt,$n,.22,E,i.lap,M,gt(0,I,xt/2),0,{order:1,v0:I}),_(Gt,$n,.22,[{x0:-3,x1:1.6,y0:.1,y1:2.45,room:"kitchen"}],i.lap,M,gt(0,I,-xt/2),Math.PI,{order:4,v0:I}),_(xt,$n,.22,[{x0:-2.2,x1:-.2,y0:.8,y1:2.3,room:"hall"}],i.lap,M,gt(Gt/2,I,0),Math.PI/2,{order:2,v0:I}),_(xt,$n,.22,[{x0:.3,x1:2.3,y0:.8,y1:2.3,room:"living"}],i.lap,M,gt(-Gt/2,I,0),-Math.PI/2,{order:3,v0:I}),f(.15,$n,5,i.drywall,1.2,I+$n/2,-1.2,M);let L=f(3,.95,.65,i.counter,2.9,I+.48,-3.4,M),U=d(.85,1.95,.7,.03,i.steel,4.35,I+.98,-3.4,M),V=f(.75,.05,.6,i.steel,2.4,I+.97,-3.4,M);p("installation",[L,U,V],gt(3,2.3,-3.2),"main");let B=h(.1,3.2,i.pvc,-1.2,1.9,-1.5,M);p("radon",[B],null,"main"),h(.09,3.2,i.pipe,-2.6,1.9,-3.6,M),d(.3,.42,.18,.02,i.white,2.8,1.5,-xt/2-.2,M),h(.035,3.6,i.steel,2.8,3.55,-xt/2-.1,M,10);let G=new Xn(16758123,0,11,2);G.position.set(-1.5,2.4,.5),M.add(G);let O=new Xn(16758123,0,9,2);O.position.set(3,2.4,-1.5),M.add(O),M.userData.lights=[G,O];let q=new Tt;M.add(q),f(2.9,.32,2.3,i.stone,.55,.16,5.1,q,{uv:{ox:.55,oy:.16}}),f(2.9,.07,2.3,i.cedar,.55,.35,5.1,q,{uv:{}}),f(1.7,.17,.4,i.concrete,.7,.085,6.55,q),f(1.9,.17,.4,i.concrete,.7,.255-.085,6.2,q),[-.75,1.85].forEach(De=>{d(.22,2.55,.22,.015,i.cedar,De,1.67,6.12,q),f(.34,.5,.34,i.stone,De,.6,6.12,q,{uv:{ox:De,oy:.6}})}),d(3.5,.24,.22,.02,i.cedar,.55,2.84,6.12,q);let K=f(3.4,.14,2.6,[i.trim,i.trim,i.roof,i.cedar,i.trim,i.trim],.55,3,5.25,q,{uv:{swap:!0}});K.rotation.x=.1,[-.15,1.65].forEach(De=>{let Le=new Re(new Ot(.06,.07,.24,12),i.sconce);Le.position.set(De,1.9,4.2),Le.userData.noAO=!0,q.add(Le);let Ye=new Sn(new mn({map:n,transparent:!0,depthWrite:!1,blending:Bt,opacity:0}));Ye.position.set(De,1.9,4.5),Ye.scale.set(1.6,1.6,1),Ye.userData.noAO=!0,q.add(Ye),l.porchHalos=(l.porchHalos||[]).concat(Ye)}),[-.78,1.88].forEach(De=>{f(.06,.06,2,i.trim,De,1.2,5.15,q),f(.05,.05,2,i.trim,De,.55,5.15,q);for(let Le=0;Le<8;Le++)f(.025,.62,.025,i.trim,De,.9,4.25+Le*.27,q,{cast:!1})});let ie=new Re(new Ht(.2,.2),new Ut({map:t,transparent:!0,toneMapped:!1}));ie.position.set(1.62,1.35,4.13),ie.userData.noAO=!0,q.add(ie);let ve=new Xn(16761469,0,7,2);ve.position.set(.75,2.6,xt/2+1.1),M.add(ve),M.userData.porch=ve})(),(()=>{let M=r.upper,I=3.45;f(Gt,.25,xt,i.floor,0,3.32,0,M,{edges:!0}),_(Gt,$n,.22,[{x0:-3.6,x1:-1.8,y0:.9,y1:2.4,room:"bed"},{x0:-.9,x1:1.9,y0:.5,y1:2.5,room:"living"},{x0:2.6,x1:4.1,y0:.9,y1:2.4,room:"bed"}],i.bb,M,gt(0,I,xt/2),0,{order:5,v0:I}),_(Gt,$n,.22,[{x0:-3.4,x1:-1.8,y0:.9,y1:2.3,room:"bath"},{x0:1.6,x1:3.2,y0:.9,y1:2.3,room:"bed"}],i.bb,M,gt(0,I,-xt/2),Math.PI,{order:8,v0:I}),_(xt,$n,.22,[{x0:.6,x1:2.4,y0:.9,y1:2.3,room:"bed"}],i.bb,M,gt(Gt/2,I,0),Math.PI/2,{order:6,v0:I}),_(xt,$n,.22,[{x0:-2.2,x1:-.6,y0:1.2,y1:2.2,room:"bath"}],i.bb,M,gt(-Gt/2,I,0),-Math.PI/2,{order:7,v0:I}),f(.15,$n,xt-.4,i.drywall,-1.6,I+$n/2,0,M);let L=d(1.7,.55,.8,.08,i.ceramic,-3.6,I+.28,-3.35,M),U=d(.7,.85,.5,.04,i.ceramic,-2.4,I+.43,-3.5,M),V=h(.09,3,i.pipe,-2.6,I+1.4,-3.6,M);p("plumbing",[L,U,V],gt(-3.4,4.6,-3),"upper");let B=h(.1,3,i.pvc,-1.2,I+1.4,-1.5,M);p("radon",[B],null,"upper");let G=new Xn(16758123,0,11,2);G.position.set(.5,5.6,.5),M.add(G),M.userData.lights=[G]})(),(()=>{let M=r.roof,I=6.35,L=3.6,U=Gt/2,V=.6,B=Math.atan2(L,U),G=Math.hypot(U+V,(U+V)*L/U),O=Z=>{let se=new It(G,.2,xt+1);u(se,{swap:!0});let ue=new Re(se,[i.trim,i.trim,i.roof,i.cedar,i.trim,i.trim]);ue.castShadow=!0,ue.receiveShadow=!0,ue.rotation.z=Z*B;let Te=I+L-(U+V)/2*(L/U)+.12;return ue.position.set(Z>0?-(U+V)/2+.02:(U+V)/2-.02,Te,0),M.add(ue),ue},q=O(1),K=O(-1);[q,K].forEach(Z=>{let se=new yi(new ir(Z.geometry,30),c);se.raycast=()=>{},Z.add(se)}),[q,K].forEach((Z,se)=>{[-1,1].forEach(we=>f(G,.3,.06,i.trim,0,-.05,we*(xt/2+.5),Z,{cast:!1}));let ue=se===0?-1:1;f(.06,.34,xt+1.04,i.trim,ue*(G/2),-.1,0,Z,{cast:!1});let Te=f(.12,.1,xt+.9,i.trim,ue*(G/2+.06),-.28,0,Z,{cast:!1});Te.rotation.z=-Z.rotation.z}),f(.3,.22,xt+1.05,i.trim,0,I+L+.2,0,M),p("roofing",[q,K],gt(-2.8,9.1,2.2),"roof");let ie=new ri;ie.moveTo(-U,0),ie.lineTo(U,0),ie.lineTo(0,L),ie.lineTo(-U,0);let ve=new _s;ve.moveTo(-.5,1.15),ve.lineTo(.5,1.15),ve.lineTo(.5,2.15),ve.lineTo(-.5,2.15),ve.lineTo(-.5,1.15),ie.holes.push(ve);let De=new Si(ie,{depth:.22,bevelEnabled:!1});[xt/2-.22,-xt/2].forEach((Z,se)=>{let ue=new Re(De,[i.bb,i.trim]);ue.position.set(0,I,Z),ue.castShadow=!0,ue.receiveShadow=!0,M.add(ue);let Te=new Tt;Te.position.set(0,I+1.65,Z+.11),M.add(Te);let we=S(Te,{x0:-.5,x1:.5,y0:-.5,y1:.5,room:"hall"},.22,"hall",-1,!0);se===1&&(Te.rotation.y=Math.PI,Te.position.z=Z+.11-0);let Ge=new Sn(new mn({map:n,transparent:!0,depthWrite:!1,blending:Bt,opacity:0}));Ge.position.set(0,I+1.65,Z+(se===0?.55:-.3)),Ge.scale.set(3.4,3.4,1),Ge.userData.noAO=!0,M.add(Ge),o.push({mat:null,halo:Ge,order:-1,always:!0,w:1,h:1,haloOnly:!0,level:.6})});let Le=new Tt;Le.rotation.z=-B,Le.position.copy(K.position);let Ye=[];for(let Z=0;Z<2;Z++)for(let se=0;se<4;se++){let ue=f(1.3,.05,.95,i.solar,-.9+Z*1.45,.16,-1.6+se*1.05,Le,{cast:!1}),Te=f(1.34,.04,.99,i.solarFrame,-.9+Z*1.45,.14,-1.6+se*1.05,Le,{cast:!1});Ye.push(ue)}M.add(Le),p("solar",Ye,gt(3.4,9.3,.6),"roof");let Y=Z=>{let se=new Ht(G-.25,xt+.7,30,30),ue=se.attributes.position,Te=Cn(5);for(let Ze=0;Ze<ue.count;Ze++)ue.setZ(Ze,.025+Te()*.05);se.computeVertexNormals();let we=i.snowRoof.clone();we.alphaMap=vf(256,Z),we.alphaTest=.25,we.userData={...i.snowRoof.userData};let Ge=new Re(se,we);return Ge.rotation.x=-Math.PI/2,Ge.position.y=.105,Ge.receiveShadow=!0,Ge.castShadow=!0,Ge};l.snowL=Y(),l.snowL.userData.keep=!0,q.add(l.snowL),l.snowR=Y((Z,se)=>Z>.24&&Z<.7&&se>.24&&se<.76?0:1),l.snowR.userData.keep=!0,K.add(l.snowR);let ne=f(.5,.16,xt+.8,i.snowRoof,0,I+L+.38,0,M,{cast:!1});ne.material=i.snowRoof,ne.userData.keep=!0,(()=>{let Z=Cn(9),se=70,ue=new xs(.04,1,6);ue.rotateX(Math.PI),ue.translate(0,-.5,0);let Te=new si(ue,i.ice,se*2),we=new st,Ge=new Yt,Ze=new C,H=new C,dt=I+L-(U+V)*(L/U)+0;for(let nt=0;nt<2;nt++)for(let D=0;D<se;D++){let y=-xt/2-.4+D/(se-1)*(xt+.8),J=.12+Z()*Z()*.7,Q=.7+Z()*.8;Ze.set((nt?1:-1)*(U+V+.08),dt-.35,y+(Z()-.5)*.06),H.set(Q,J,Q),we.compose(Ze,Ge,H),Te.setMatrixAt(nt*se+D,we)}Te.userData.baseMatrices=Array.from({length:se*2},(nt,D)=>{let y=new st;return Te.getMatrixAt(D,y),y}),Te.castShadow=!1,Te.userData.noAO=!0,Te.visible=!1,M.add(Te),l.icicles=Te})();let ye=new Ht(Gt-.6,xt-.6,40,32),pe=ye.attributes.position,Me=Cn(3);for(let Z=0;Z<pe.count;Z++)pe.setZ(Z,Me()*.12);ye.computeVertexNormals();let Ue=new Re(ye,i.insul);Ue.rotation.x=-Math.PI/2,Ue.position.y=I+.02,Ue.receiveShadow=!0,M.add(Ue),f(Gt,.1,xt,i.floor,0,I-.05,0,M),p("asbestos",[Ue],gt(-.4,7.3,-.8),"roof");let je=h(.1,4.6,i.pvc,-1.2,I+2.2,-1.5,M);p("radon",[je],gt(-1.2,10.9,-1.5),"roof");let fe=h(.24,.42,i.steel,-1.2,7.9,-1.5,M,16);p("radon",[fe],null,"roof"),h(.09,4,i.pipe,-2.6,I+2,-3.6,M);let he=f(.95,4.1,.95,i.stone,-3.4,8.4,-1.6,M,{uv:{ox:-3.4,oy:8.4}});f(1.15,.12,1.15,i.concrete,-3.4,10.5,-1.6,M),f(.7,.3,.7,i.steel,-3.4,10.7,-1.6,M),l.chimneyTop.position.set(-3.4,10.9,-1.6),M.add(l.chimneyTop)})();let w={meter:gt(2.8,1.45,-4.3),panel:gt(2.8,-1.2,-3.8),shutoff:gt(-.5,-1.4,3.75),heater:gt(-2.1,-2,-3),sewer:gt(.6,-3.35,-7.5),furnace:gt(-3.3,-2,-2.6),register:gt(3.8,3.52,2.9),fan:gt(-1.2,7.9,-1.5),pit:gt(-1.2,-3,-1.5),exhaust:gt(-1.2,11.6,-1.5),rim:gt(4.9,.3,4.05),sill:gt(-2.5,.7,4.05),attic:gt(0,6.4,4.05),door:gt(.75,1.2,4.05),chimney:gt(-3.4,10.5,-1.6),eave:gt(-5.6,5.9,3.5),potlights:gt(-2.4,3.1,.7),rangeHood:gt(2.4,2.4,-3.55),island:gt(3,1.3,-.6),vanity:gt(-2.4,4.4,-3.55),tub:gt(-3.6,4.1,-3.35),bedWindow:gt(2.4,5.2,-3.9),sump:gt(.66,-2.2,1.6)},R=new st,v=new C,A=new Yt,P=new C;function F(M,I,L,U,V){let B=U<.55?1:0;F.on=ft(F.on??0,B,pt(V*(B?.55:1.2),0,1));let G=F.on*9,O=(1-M.ghost*.85)*(1-.35*(M.cut||0)),q=1-.65*(M.cut||0),K=1+1.6*(M.cut||0);o.forEach(ye=>{let pe=(ye.always?1:pt(G-ye.order,0,1))*O,Me=1-U*.8;ye.mat&&(ye.mat.emissiveIntensity=(ye.always?2.6:2)*pe*Me*q),ye.halo&&(ye.halo.material.opacity=(ye.haloOnly?.28:ye.always?.5:.3)*pe*Me*q)}),["main","upper"].forEach(ye=>(r[ye].userData.lights||[]).forEach(pe=>{pe.intensity=9*pt(G/9,0,1)*(1-U)*O*K}));let ie=Math.max(ht(.2,.7,M.explode||0),pt(((M.lift||0)-1.5)/1.5,0,1));(r.basement.userData.lights||[]).forEach(ye=>{ye.intensity=30*ie*O*K});let ve=(1-U)*O;r.main.userData.porch.intensity=12*ve,(l.porchHalos||[]).forEach(ye=>{ye.material.opacity=.55*ve*q}),i.sconce.emissiveIntensity=.4+3.2*(1-U);let De=pt(M.melt,0,1),Le=.18+De*.8;l.snowL.material.alphaTest=Le,l.snowR.material.alphaTest=pt(Le+.1,0,1);let Ye=r.roof.children.find(ye=>ye.material===i.snowRoof);Ye&&(Ye.visible=De<.6);let Y=l.icicles,ne=pt(M.icicles,0,1);if(Y.visible=ne>.01,Y.visible){for(let ye=0;ye<Y.count;ye++)R.copy(Y.userData.baseMatrices[ye]),R.decompose(v,A,P),P.y*=ne,P.x*=.5+.5*ne,P.z=P.x,R.compose(v,A,P),Y.setMatrixAt(ye,R);Y.instanceMatrix.needsUpdate=!0}return G}return{house:s,layers:r,sys:a,windows:o,ANCHORS:w,edgeMat:c,extra:l,update:F,box:f,rbox:d,cyl:h,system:p,wall:_,windowUnit:S,setUV:u,v:gt}}function os(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,c=new St,l=0;for(let u=0;u<i.length;++u){let f=i[u],d=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let h in f.attributes){if(!n.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+h+'" attribute exists among all geometries, or in none of them.'),null;r[h]===void 0&&(r[h]=[]),r[h].push(f.attributes[h]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let h in f.morphAttributes){if(!s.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[h]===void 0&&(a[h]=[]),a[h].push(f.morphAttributes[h])}if(e){let h;if(t)h=f.index.count;else if(f.attributes.position!==void 0)h=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,h,u),l+=h}}if(t){let u=0,f=[];for(let d=0;d<i.length;++d){let h=i[d].index;for(let p=0;p<h.count;++p)f.push(h.getX(p)+u);u+=i[d].attributes.position.count}c.setIndex(f)}for(let u in r){let f=Cf(r[u]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,f)}for(let u in a){let f=a[u][0].length;if(f!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let d=0;d<f;++d){let h=[];for(let x=0;x<a[u].length;++x)h.push(a[u][x][d]);let p=Cf(h);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(p)}}}return c}function Cf(i){let e,t,n,s=-1,r=0;for(let l=0;l<i.length;++l){let u=i[l];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}let a=new e(r),o=new _t(a,t,n),c=0;for(let l=0;l<i.length;++l){let u=i[l];if(u.isInterleavedBufferAttribute){let f=c/t;for(let d=0,h=u.count;d<h;d++)for(let p=0;p<t;p++){let x=u.getComponent(d,p);o.setComponent(d+f,p,x)}}else a.set(u.array,c);c+=u.count*t}return s!==void 0&&(o.gpuType=s),o}var Kh=0,Pf={value:new Vt(0,0,-1,30)};function Ga(i,e,t,n=!1){let s=i.onBeforeCompile,r=++Kh;return i.onBeforeCompile=(a,o)=>{s&&s(a,o),a.uniforms.uSight=Pf,a.fragmentShader=a.fragmentShader.replace("#include <common>",`#include <common>
uniform vec4 uSight;`).replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
      { vec3 fp = -vViewPosition;
        float fd = smoothstep(${e.toFixed(1)}, ${t.toFixed(1)}, length(fp));${n?`
        float fs = dot(fp, uSight.xyz);
        float fc = 1.0 - smoothstep(0.12, 0.26, length(fp - fs * uSight.xyz) / max(fs, 0.5));
        fd = min(fd, 1.0 - 0.94 * fc * smoothstep(0.5, 4.0, uSight.w - fs) * step(0.0, fs));`:""}
        float fh = fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715))));
        if (fd < fh) discard; }`)},i.customProgramCacheKey=()=>"fade"+r,i}function $h(i,e){let t=i.onBeforeCompile,n=++Kh;return i.onBeforeCompile=(s,r)=>{t&&t(s,r),s.uniforms.uSnow=e,s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
attribute float aSnow;
uniform float uSnow;`).replace("#include <color_vertex>",`#include <color_vertex>
vColor.rgb = mix(vColor.rgb, vec3(0.8, 0.86, 0.95), aSnow * uSnow);`)},i.customProgramCacheKey=()=>"snowv"+n,i}function If({M:i,T:e,glowTex:t,markTex:n,tier:s,reduce:r}){let a=new Tt,o=Cn(21),c=Ts("rgba(255,255,255,0.7)"),l=Sf(),u=_r("rgba(255,196,120,0.9)","rgba(255,150,70,0)"),f={uSnow:{value:1},uRoofSnow:{value:1},uTint:{value:new Be(1,1,1)},uGrow:{value:0},uLeafTint:{value:new Be(.3,.5,.15)}},d=e.grass,h=e.snow,p=new Rt({map:h.map,normalMap:h.normalMap,roughnessMap:h.rmMap,metalnessMap:h.rmMap,roughness:1,metalness:1,transparent:!0,normalScale:new Se(1.1,1.1),envMapIntensity:.9});p.onBeforeCompile=N=>{N.uniforms.uSnow=f.uSnow,N.uniforms.uTint=f.uTint,N.uniforms.uGrass={value:d.map},N.vertexShader=N.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vWxz;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vWxz = (modelMatrix * vec4(position, 1.0)).xz;`),N.fragmentShader=N.fragmentShader.replace("#include <common>",`#include <common>
      uniform float uSnow; uniform vec3 uTint; uniform sampler2D uGrass; varying vec2 vWxz;
      float gh(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float gn(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f); return mix(mix(gh(i), gh(i+vec2(1,0)), f.x), mix(gh(i+vec2(0,1)), gh(i+vec2(1,1)), f.x), f.y); }`).replace("#include <map_fragment>",`
      vec4 snowC = texture2D(map, vMapUv);
      vec3 gr = texture2D(uGrass, vWxz * 0.25).rgb * uTint;
      float nz = gn(vWxz * 0.35) * 0.55 + gn(vWxz * 1.7) * 0.3 + gn(vWxz * 7.0) * 0.15;
      float cover = smoothstep(uSnow - 0.1, uSnow + 0.1, 1.0 - nz + (uSnow - 0.5) * 0.9);
      cover = uSnow >= 0.995 ? 1.0 : (uSnow <= 0.005 ? 0.0 : cover);
      diffuseColor.rgb *= mix(gr / max(snowC.rgb, vec3(0.2)) * 0.9, vec3(1.0), cover);
      diffuseColor *= snowC;`)};let x=200,g=6,m=450,S=Array.from({length:x+1},(N,k)=>m*Math.sinh(g*(k/x*2-1))/Math.sinh(g)),b=(N,k)=>{let $=Math.hypot(N,k),ge=ht(40,220,$)*(zt(N*.012+3,k*.012+8,4,4096,4096,3)-.35)*22,de=(zt(N*.09,k*.09,3,4096,4096,9)-.5)*.35*ht(8,22,$)*(1-ht(14,17,k)*(1-ht(27,30,k)))*(1-ht(-22.5,-20.5,k)*(1-ht(-15.5,-13.5,k)))*(1-ht(5,6.2,N)*(1-ht(10.2,11.5,N))*ht(.5,2,k)*(1-ht(16.5,18,k)));return ge+de},_=new St;{let N=new Float32Array((x+1)*(x+1)*3),k=new Float32Array((x+1)*(x+1)*2),$=[];for(let ge=0;ge<=x;ge++)for(let de=0;de<=x;de++){let ae=ge*(x+1)+de,Ae=S[de],Ce=S[ge];N[ae*3]=Ae,N[ae*3+1]=b(Ae,Ce),N[ae*3+2]=Ce,k[ae*2]=Ae,k[ae*2+1]=Ce}for(let ge=0;ge<x;ge++)for(let de=0;de<x;de++){let ae=(S[de]+S[de+1])/2,Ae=(S[ge]+S[ge+1])/2;if(Math.abs(ae)<5.1&&Math.abs(Ae)<4.1)continue;let Ce=ge*(x+1)+de,ze=Ce+1,qe=Ce+x+1,be=qe+1;$.push(Ce,qe,ze,ze,qe,be)}_.setAttribute("position",new _t(N,3)),_.setAttribute("uv",new _t(k,2)),_.setIndex($),_.computeVertexNormals()}let E=[],w=new Re(_,p);w.receiveShadow=!0,w.renderOrder=-1,a.add(w);let R=i.asphalt.clone();[R.map,R.normalMap,R.roughnessMap,R.metalnessMap].forEach(N=>{N&&N.repeat.set(220,3)}),R.roughness=.72,R.metalness=0,R.metalnessMap=null,R.envMapIntensity=1.4;let v=new Re(new Ht(660,9),R);v.rotation.x=-Math.PI/2,v.position.set(0,.012,22.2),v.receiveShadow=!0,a.add(v);let A=null;{let N=new Ht(2.2,.14),k=new si(N,new Rt({color:14070346,roughness:.8}),90),$=new st,ge=new Yt().setFromEuler(new ii(-Math.PI/2,0,0)),de=new C,ae=new C(1,1,1);for(let Ae=0;Ae<90;Ae++)de.set(-180+Ae*4,.02,22.2),$.compose(de,ge,ae),k.setMatrixAt(Ae,$);k.receiveShadow=!0,a.add(k),A=k}E.push(R,i.pavement);let P=new Re(new It(660,.1,1.8),i.pavement);P.position.set(0,.05,15.6),P.receiveShadow=!0,P.castShadow=!0,a.add(P);let F=new Re(new It(1.3,.05,9.4),i.pavement);F.position.set(.7,.03,10.9),F.receiveShadow=!0,a.add(F);let M=new Re(new It(3.6,.06,14.5),i.pavement);M.position.set(7.9,.03,9.3),M.receiveShadow=!0,a.add(M);let I=i.asphalt.clone();[I.map,I.normalMap,I.roughnessMap,I.metalnessMap].forEach(N=>{N&&N.repeat.set(220,1.5)}),I.metalnessMap=null,I.metalness=0,I.roughness=.9,I.color.setScalar(1.25),E.push(I);let L=new Re(new Ht(660,4.5),I);L.rotation.x=-Math.PI/2,L.position.set(0,.012,-18.2),L.receiveShadow=!0,a.add(L);let U=(()=>{let N=new In(1,10,6),k=new si(N,new Rt({color:14673906,roughness:.95}),70),$=new st,ge=new Yt,de=new C,ae=new C;for(let Ae=0;Ae<70;Ae++){let Ce=Ae%2,ze=-140+(Ae>>1)*8+o()*3;de.set(ze,.1,Ce?26.9:17.6+o()*.2),ae.set(2.8+o()*1.4,.55+o()*.25,.9+o()*.3),$.compose(de,ge,ae),k.setMatrixAt(Ae,$)}return k.castShadow=!0,k.receiveShadow=!0,a.add(k),k})(),V=[],B=Ga(i.pole.clone(),3.5,9),G=Ga(new Rt({color:3817544,roughness:.42,metalness:.65}),3.5,9),O=new Ut({color:new Be(3.2,2.2,1.1),toneMapped:!1}),q=new Wn([new C(0,6.9,0),new C(0,7.45,.25),new C(0,7.6,.9),new C(0,7.5,1.6)]),K=new Dn(q,14,.05,8),ie=new In(1,24,12);ie.scale(.54,.085,.23),[[-13,16.6],[11,16.6],[34,16.6],[-38,16.6]].forEach(([N,k])=>{let $=new Tt;$.position.set(N,0,k);let ge=new Re(new Ot(.06,.1,7.2,10),B);ge.position.y=3.6,ge.castShadow=!0,$.add(ge);let de=new Re(K,B);de.castShadow=!0,$.add(de);let ae=new Re(ie,G);ae.position.set(0,7.5,1.78),ae.rotation.x=.04,ae.castShadow=!0,$.add(ae);let Ae=new Re(new Ht(.8,.24),O);Ae.rotation.x=Math.PI/2,Ae.position.set(0,7.445,1.78),Ae.userData.noAO=!0,$.add(Ae);let Ce=new Sn(new mn({map:t,transparent:!0,depthWrite:!1,blending:Bt,opacity:0}));Ce.position.set(0,7.3,1.78),Ce.scale.set(5,5,1),Ce.userData.noAO=!0,$.add(Ce);let ze=new Re(new Ht(1,1),new Ut({map:u,transparent:!0,depthWrite:!1,blending:Bt,opacity:0}));ze.rotation.x=-Math.PI/2,ze.position.set(0,.04,2),ze.scale.set(15,10,1),ze.userData.noAO=!0,$.add(ze),a.add($),V.push({halo:Ce,pool:ze,lens:Ae})});let ve=new Xn(16761466,0,32,2);ve.position.set(11,7,18.2),a.add(ve);let De=new Xn(16761466,0,32,2);De.position.set(-13,7,18.2),a.add(De);let Le=[];[[-2.5,7.4,5.5,4.2],[.8,8.4,5.5,4.6],[3.15,7.4,5.5,4.2]].forEach(([N,k,$,ge])=>{let de=new Re(new Ht(1,1),new Ut({map:u,transparent:!0,depthWrite:!1,blending:Bt,opacity:0}));de.rotation.x=-Math.PI/2,de.position.set(N,.05,k),de.scale.set($,ge,1),de.userData.noAO=!0,a.add(de),Le.push(de)});let Ye=Ga($h(i.spruce.clone(),f.uSnow),5,12,!0);function Y(N){let k=Cn(N),$=[],ge=11;for(let te=0;te<ge;te++){let et=te/(ge-1),Ke=ft(1.7,.18,Math.pow(et,.85))*(.94+k()*.12),ut=ft(1.7,.9,et),Et=1+te*.62,Ct=new xs(Ke,ut,20,4,!0);Ct.translate(0,Et+ut/2,0);let Lt=Ct.attributes.position;for(let lt=0;lt<Lt.count;lt++){let bt=Lt.getX(lt),Mt=Lt.getY(lt),at=Lt.getZ(lt),$t=Math.atan2(at,bt),rn=Math.hypot(bt,at),Tn=1+Math.sin($t*7+te*2.3)*.09+Math.sin($t*13+te)*.04+(k()-.5)*.05,As=rn/Ke*(rn/Ke)*.34*(1+.35*Math.sin($t*5+te*1.3));Lt.setXYZ(lt,bt*Tn,Mt-As,at*Tn)}Ct.computeVertexNormals(),$.push(Ct)}let de=new Ot(.1,.2,1.6,8);de.translate(0,.8,0),$.push(de);let ae=os($);ae.computeVertexNormals();let Ae=ae.attributes.position,Ce=ae.attributes.normal,ze=new Float32Array(Ae.count*3),qe=new Float32Array(Ae.count),be=new Be;for(let te=0;te<Ae.count;te++){let et=Ce.getY(te),Ke=zt(Ae.getX(te)*2.1,Ae.getZ(te)*2.1+Ae.getY(te)*1.1,3,64,64,2);be.setRGB(.05+Ke*.05,.12+Ke*.08,.09+Ke*.05),Ae.getY(te)<1.15&&be.setRGB(.1,.07,.05),ze[te*3]=be.r,ze[te*3+1]=be.g,ze[te*3+2]=be.b,qe[te]=Ae.getY(te)<1.15?0:pt(ht(.05,.6,et+(Ke-.5)*.7),0,1)*.78}return ae.setAttribute("color",new _t(ze,3)),ae.setAttribute("aSnow",new _t(qe,1)),ae}let ne=[[-9.5,3,1.1],[-11.8,-3.5,1.4],[9.8,-5.5,1.25],[-8.2,-8.5,1.05],[15,-9,1.35],[-14,9.5,1.2],[18,9,1.1],[-21,-6,1.5],[24,-3,1.25],[-27,8,1.2],[30,-12,1.4],[-11.5,-13.5,1.3],[6,-26,1.1],[-18,-27,1.45],[22,-27,1.3],[-36,3,1.3],[40,2,1.2]],ye=[Y(1),Y(2)],pe=ye[0];ye.forEach((N,k)=>{let $=ne.filter((ze,qe)=>qe%2===k),ge=new si(N,Ye,$.length),de=new st,ae=new Yt,Ae=new C,Ce=new C;$.forEach(([ze,qe,be],te)=>{ae.setFromAxisAngle(new C(0,1,0),o()*6.28),Ae.set(ze,0,qe),Ce.set(be,be*(.9+o()*.25),be),de.compose(Ae,ae,Ce),ge.setMatrixAt(te,de)}),ge.castShadow=!0,ge.receiveShadow=!0,a.add(ge)});let Me=[];{let N=$h(i.shrub.clone(),f.uSnow),k=new ia(.7,3),$=k.attributes.position,ge=new Float32Array($.count*3),de=new Float32Array($.count);for(let ae=0;ae<$.count;ae++){let Ae=$.getX(ae),Ce=$.getY(ae),ze=$.getZ(ae),qe=zt(Ae*2+5,ze*2+Ce*2,3,64,64,4),be=1+(qe-.5)*.35;$.setXYZ(ae,Ae*be,Ce*be*.72,ze*be),ge[ae*3]=.06,ge[ae*3+1]=.15+qe*.05,ge[ae*3+2]=.1,de[ae]=ht(.05,.7,Ce/.7+(qe-.5))*.8}k.setAttribute("color",new _t(ge,3)),k.setAttribute("aSnow",new _t(de,1)),k.computeVertexNormals(),[[-1.7,4.9,1.2],[-2.5,4.7,.9],[2.9,4.9,1],[3.7,4.6,.8],[-5.2,4.6,.8]].forEach(([ae,Ae,Ce])=>{let ze=new Re(k,N);ze.position.set(ae,.35*Ce,Ae),ze.scale.setScalar(Ce),ze.castShadow=!0,ze.receiveShadow=!0,ze.userData.keep=!0,a.add(ze),Me.push(ze)})}let Ue=Ga($h(new Rt({vertexColors:!0,roughness:1}),f.uSnow),5,12,!0),je=(()=>{let N=document.createElement("canvas");N.width=N.height=128;let k=N.getContext("2d"),$=Cn(77);for(let de=0;de<30;de++){k.save(),k.translate(12+$()*104,12+$()*104),k.rotate($()*Math.PI);let ae=150+Math.floor($()*105),Ae=6+$()*6,Ce=13+$()*9;k.fillStyle=`rgb(${ae},${ae},${ae})`,k.beginPath(),k.ellipse(0,0,Ae,Ce,0,0,Math.PI*2),k.fill(),k.strokeStyle="rgba(70,70,70,0.65)",k.lineWidth=1,k.beginPath(),k.moveTo(0,-Ce),k.lineTo(0,Ce),k.stroke(),k.restore()}let ge=new xn(N);return ge.colorSpace=Ft,ge.anisotropy=4,ge})(),fe=Ga((()=>{let N=new Rt({map:je,alphaTest:.5,alphaToCoverage:s>=1,vertexColors:!0,roughness:.8,side:_n}),k=++Kh;return N.onBeforeCompile=$=>{$.uniforms.uGrow=f.uGrow,$.uniforms.uLeafTint=f.uLeafTint,$.vertexShader=$.vertexShader.replace("#include <common>",`#include <common>
attribute vec3 aCenter;
uniform float uGrow;
uniform vec3 uLeafTint;`).replace("#include <begin_vertex>",`#include <begin_vertex>
transformed = aCenter + (position - aCenter) * uGrow;`).replace("#include <color_vertex>",`#include <color_vertex>
vColor.rgb *= uLeafTint;`),$.fragmentShader=$.fragmentShader.replace("#include <normal_fragment_begin>",yt.normal_fragment_begin.replace("normal *= faceDirection;",""))},N.customProgramCacheKey=()=>"leaf"+k,N})(),5,12,!0);function he(N){let k=Cn(N),$=[],ge=[],de=new C(0,1,0);function ae(ut,Et,Ct,Lt){let lt=new Ot(Lt*.68,Lt,Ct,6,1);return lt.applyMatrix4(new st().compose(ut.clone().addScaledVector(Et,Ct/2),new Yt().setFromUnitVectors(de,Et),new C(1,1,1))),$.push(lt),ut.clone().addScaledVector(Et,Ct)}let Ae=new C(0,0,1);function Ce(ut,Et){let Ct=[],Lt=[],lt=[],bt=[],Mt=[],at=[],$t=.72+k()*.5,rn=(k()-.5)*.25;for(let As=0;As<18;As++){let Er=k()*2-1,eu=k()*Math.PI*2,tu=Math.sqrt(1-Er*Er),pc=new C(tu*Math.cos(eu),Er*.85,tu*Math.sin(eu)).normalize(),Wa=ut.clone().addScaledVector(pc,Et*(.3+.7*Math.cbrt(k()))),nu=.8+k()*.55,iu=pc.clone().add(new C(k()-.5,k()-.3,k()-.5).multiplyScalar(.9)).normalize(),Of=new Yt().setFromUnitVectors(Ae,iu).premultiply(new Yt().setFromAxisAngle(iu,k()*6.28)),mc=pc.clone().add(new C(0,.3,0)).normalize(),Rs=Ct.length/3;[[-.5,-.5],[.5,-.5],[.5,.5],[-.5,.5]].forEach(([su,ru])=>{let gc=new C(su*nu,ru*nu,0).applyQuaternion(Of).add(Wa);Ct.push(gc.x,gc.y,gc.z),Lt.push(mc.x,mc.y,mc.z),lt.push(su+.5,ru+.5),bt.push(Wa.x,Wa.y,Wa.z);let xc=$t*(.85+.3*k());Mt.push(xc*(1+rn),xc,xc*(1-rn*.6))}),at.push(Rs,Rs+1,Rs+2,Rs,Rs+2,Rs+3)}let Tn=new St;Tn.setAttribute("position",new vt(Ct,3)),Tn.setAttribute("normal",new vt(Lt,3)),Tn.setAttribute("uv",new vt(lt,2)),Tn.setAttribute("aCenter",new vt(bt,3)),Tn.setAttribute("color",new vt(Mt,3)),Tn.setIndex(at),ge.push(Tn)}function ze(ut,Et,Ct,Lt,lt){let bt=ae(ut,Et,Ct,Lt);if(lt===0){Ce(bt,.9+k()*.7),k()<.7&&Ce(bt.clone().add(new C((k()-.5)*1.2,k()*.6,(k()-.5)*1.2)),.7+k()*.5);return}let Mt=lt>=3?3:2+(k()<.4?1:0);for(let at=0;at<Mt;at++){let $t=new C().crossVectors(Et,new C(k()-.5,.25,k()-.5)).normalize(),rn=Et.clone().applyAxisAngle($t,.45+k()*.7).add(new C(0,.18,0)).normalize();ze(bt,rn,Ct*(.68+k()*.14),Lt*.62,lt-1)}lt<=2&&Ce(bt.clone().add(new C((k()-.5)*.8,.3,(k()-.5)*.8)),.8+k()*.5)}ze(new C(0,0,0),de,2.6,.24,4);let qe=os($),be=qe.attributes.position,te=qe.attributes.normal,et=new Float32Array(be.count*3),Ke=new Float32Array(be.count);for(let ut=0;ut<be.count;ut++){let Et=zt(be.getX(ut)*3,be.getY(ut)*3+be.getZ(ut),2,64,64,6);et[ut*3]=.16+Et*.08,et[ut*3+1]=.12+Et*.06,et[ut*3+2]=.09+Et*.05,Ke[ut]=pt(te.getY(ut)*1.5,0,1)*.85}return qe.setAttribute("color",new _t(et,3)),qe.setAttribute("aSnow",new _t(Ke,1)),{wood:qe,leaf:os(ge)}}let Z=[],se=[[-11.5,-1,.95],[12.2,-3.6,1],[-9.5,-9.5,1.1],[8.5,-9.8,1.15],[-33,-9,1.15],[35,-8,1.05],[-26,11,1],[27,9,1],[-30,18.8,.75],[44,18.8,.75],[-9,-22,1.2],[14,-23,1.1]];[he(31),he(47)].forEach((N,k)=>{let $=se.filter((de,ae)=>ae%2===k),ge=(de,ae,Ae)=>{let Ce=new si(de,ae,$.length),ze=new st,qe=new Yt,be=new C,te=new C;return $.forEach(([et,Ke,ut],Et)=>{qe.setFromAxisAngle(new C(0,1,0),(et*7+Ke*3)%6.28),be.set(et,0,Ke),te.setScalar(ut*.95),ze.compose(be,qe,te),Ce.setMatrixAt(Et,ze)}),Ce.castShadow=Ae,Ce.receiveShadow=!0,a.add(Ce),Ce};ge(N.wood,Ue,!0),Z.push(ge(N.leaf,fe,!0))});let ue=i.neighborRoof.clone();ue.onBeforeCompile=N=>{N.uniforms.uRoofSnow=f.uRoofSnow,N.fragmentShader=N.fragmentShader.replace("#include <common>",`#include <common>
uniform float uRoofSnow;`).replace("#include <map_fragment>",`#include <map_fragment>
diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.9, 0.93, 0.97), uRoofSnow * 0.92);`)},ue.customProgramCacheKey=()=>"nroof";let Te=new Ut({color:new Be(1.5,.92,.42),transparent:!0,opacity:0}),we=new Rt({color:659222,roughness:.08,metalness:.4,envMapIntensity:1.6}),Ge=[],Ze=[],H=[];function dt(N){let{x:k,z:$,w:ge,d:de,h:ae,rh:Ae,tone:Ce,rot:ze=0,garage:qe,chimney:be}=N,te=new Tt,et=i.neighbor.clone();et.color.setHex(Ce).multiplyScalar(1.9);let Ke=new It(ge,ae,de);Da(Ke,{oy:ae/2});let ut=new Re(Ke,et);ut.position.y=ae/2,ut.castShadow=!0,ut.receiveShadow=!0,te.add(ut);let Et=new ri;Et.moveTo(-ge/2-.5,0),Et.lineTo(ge/2+.5,0),Et.lineTo(0,Ae),Et.lineTo(-ge/2-.5,0);let Ct=new Re(new Si(Et,{depth:de+1,bevelEnabled:!1}),ue);if(Ct.position.set(0,ae,-de/2-.5),Ct.castShadow=!0,Ct.receiveShadow=!0,te.add(Ct),be){let Mt=new Re(new It(.7,2.4,.7),i.stone);Mt.position.set(ge*.22,ae+Ae*.55,-de*.1),Mt.castShadow=!0,te.add(Mt)}let Lt=(Mt,at,$t,rn,Tn)=>{let As=new st().compose(new C(Mt,at,$t),new Yt().setFromAxisAngle(new C(0,1,0),rn),new C(1,1,1)),Er=new st().compose(new C(Mt,at,$t).add(new C(Math.sin(rn),0,Math.cos(rn)).multiplyScalar(-.012)),new Yt().setFromAxisAngle(new C(0,1,0),rn),new C(1,1,1));(Tn?Ge:Ze).push({g:te,m:As}),H.push({g:te,m:Er})},lt=Math.max(2,Math.round(ge/2.4));for(let Mt=0;Mt<2;Mt++)for(let at=0;at<lt;at++)qe&&Mt===0&&at===0||Lt(-ge/2+(at+.5)*(ge/lt),1.5+Mt*2.6,de/2+.02,0,o()>.32);for(let Mt=0;Mt<2;Mt++)Lt(ge/2+.02,1.5+Mt*2.6,0,Math.PI/2,o()>.5),Lt(-ge/2-.02,1.5+Mt*2.6,0,-Math.PI/2,o()>.5);let bt=new Re(new It(2.2,2.1,.12),i.walnut);if(bt.position.set(ge/2-1.5,1.05,de/2+.05),te.add(bt),qe){let Mt=new Re(new It(2.8,2.3,.14),i.cedar);Mt.position.set(-ge/2+1.7,1.15,de/2+.06),te.add(Mt);for(let at=1;at<4;at++){let $t=new Re(new It(2.8,.04,.16),i.trim);$t.position.set(-ge/2+1.7,at*.575,de/2+.07),te.add($t)}}return te.position.set(k,0,$),te.rotation.y=ze,a.add(te),nt.push([k,ae+Ae,$]),te}let nt=[];[{x:-17,z:-1,w:7.4,d:7,h:5.4,rh:2.6,tone:7304314,garage:!0,chimney:!0},{x:17.5,z:.5,w:6.8,d:6.6,h:4.8,rh:2.4,tone:8023912},{x:-33,z:-2,w:7.2,d:7.5,h:5.2,rh:2.5,tone:6251884,chimney:!0},{x:34,z:0,w:7.6,d:7,h:5.6,rh:2.8,tone:6975608,garage:!0},{x:-49,z:0,w:7,d:7,h:5,rh:2.4,tone:7565679},{x:50,z:-1,w:7,d:7,h:5.2,rh:2.4,tone:6712178,chimney:!0},{x:-66,z:1,w:7,d:7,h:5,rh:2.4,tone:7171954,garage:!0},{x:67,z:0,w:7,d:7,h:5,rh:2.4,tone:7369592},{x:-24,z:40,w:7,d:7,h:5.2,rh:2.5,tone:6975092,rot:Math.PI,garage:!0},{x:-8,z:41,w:7.4,d:7,h:5.4,rh:2.6,tone:7828073,rot:Math.PI,chimney:!0},{x:10,z:40,w:7,d:6.8,h:5,rh:2.4,tone:6843764,rot:Math.PI},{x:28,z:41,w:7.2,d:7,h:5.4,rh:2.6,tone:7500921,rot:Math.PI,garage:!0},{x:46,z:40,w:7,d:7,h:5.2,rh:2.4,tone:7106678,rot:Math.PI}].forEach(dt),a.updateMatrixWorld(!0);let D=(N,k,$)=>{let ge=new si(k,$,N.length),de=new st;return N.forEach(({g:ae,m:Ae},Ce)=>{de.multiplyMatrices(ae.matrixWorld,Ae),ge.setMatrixAt(Ce,de)}),ge.userData.noAO=!1,a.add(ge),ge},y=new Ht(1,1.15),J=new Ht(1.16,1.31),Q=[];D(Ge,y,Te),D(Ze,y,we),D(H,J,i.trim);let re=new Tt;re.visible=!1,a.add(re);let Pe=new Ot(.05,.05,1,8,1,!0),Ee=[],ce=new C(0,12.6,0);nt.forEach(([N,k,$],ge)=>{let de=new C(N,k+3.4,$),ae=new Sn(new mn({map:n,transparent:!0,depthWrite:!1,depthTest:!1,opacity:0}));ae.position.copy(de),ae.renderOrder=12,ae.userData.noAO=!0,re.add(ae);let Ae=new Re(Pe,new Ut({color:new Be(2.2,1.3,.55),transparent:!0,opacity:0,blending:Bt,depthWrite:!1,toneMapped:!1}));Ae.scale.set(1,3.2,1),Ae.position.set(N,k+1.6,$),Ae.userData.noAO=!0,Ae.raycast=()=>{},re.add(Ae);let Ce=de.clone().lerp(ce,.5);Ce.y+=5+de.distanceTo(ce)*.18;let ze=new Wn([de,de.clone().lerp(Ce,.5).setY(Ce.y*.9),Ce,Ce.clone().lerp(ce,.5).setY(Ce.y*.9),ce]),qe=40,be=new Re(new Dn(ze,qe,.07,5,!1),new Ut({color:new Be(2.4,1.4,.6),transparent:!0,opacity:0,blending:Bt,depthWrite:!1,toneMapped:!1}));be.userData.noAO=!0,be.raycast=()=>{},re.add(be);let te=9,et=new St;et.setAttribute("position",new _t(new Float32Array(te*3),3));let Ke=new En(et,new gn({size:.9,map:c,color:new Be(2.4,1.5,.7),transparent:!0,depthWrite:!1,blending:Bt,toneMapped:!1}));Ke.frustumCulled=!1,Ke.userData.noAO=!0,Ke.raycast=()=>{},re.add(Ke),Ee.push({spr:ae,bm:Ae,tube:be,segs:qe,curve:ze,pts:Ke,n:te,d:de.distanceTo(ce),delay:0})}),Ee.sort((N,k)=>N.d-k.d),Ee.forEach((N,k)=>{N.delay=k/Ee.length});let _e=new Sn(new mn({map:n,transparent:!0,depthWrite:!1,depthTest:!1,opacity:0}));_e.position.copy(ce).add(new C(0,1.2,0)),_e.scale.set(4.2,4.2,1),_e.renderOrder=13,_e.userData.noAO=!0,re.add(_e);let Oe=new C;function Qe(N,k){re.visible=N>.003,re.visible&&(_e.material.opacity=ht(0,.15,N),_e.scale.setScalar(4.2+Math.sin(k*3)*.3),Ee.forEach($=>{let ge=ht($.delay*.7,$.delay*.7+.3,N);$.spr.material.opacity=ge,$.spr.scale.setScalar(2.4*(.6+.4*ge)),$.bm.material.opacity=.5*ge,$.bm.scale.y=3.2+6*ge,$.bm.position.y=$.spr.position.y-$.bm.scale.y/2-1.6;let de=Math.floor(ht(.1+$.delay*.6,.45+$.delay*.6,N)*$.segs)*5*6;$.tube.geometry.setDrawRange(0,de),$.tube.material.opacity=.34*ge*(.8+.2*Math.sin(k*3+$.delay*9));let ae=$.pts.geometry.attributes.position.array,Ae=ht(.1+$.delay*.6,.45+$.delay*.6,N);for(let Ce=0;Ce<$.n;Ce++){let ze=(Ce/$.n+k*.16+$.delay)%1;if(ze>Ae){ae[Ce*3+1]=-999;continue}$.curve.getPointAt(ze,Oe),ae[Ce*3]=Oe.x,ae[Ce*3+1]=Oe.y,ae[Ce*3+2]=Oe.z}$.pts.geometry.attributes.position.needsUpdate=!0,$.pts.material.opacity=ge}))}let Ne=new Rt({color:4864555,roughness:.95}),Fe=new Ut({color:723724}),Ve=[];(()=>{let N=new Tt;N.position.set(-3.4,0,-11.4),a.add(N);let k=7.4,$=6.4,ge=3.1,de=new It(k,ge,$);Da(de,{oy:ge/2});let ae=new Re(de,i.bb.clone());ae.material.color.setScalar(1),ae.position.y=ge/2,ae.castShadow=!0,ae.receiveShadow=!0,N.add(ae);let Ae=new ri;Ae.moveTo(-k/2-.45,0),Ae.lineTo(k/2+.45,0),Ae.lineTo(0,1.9),Ae.lineTo(-k/2-.45,0);let Ce=new Re(new Si(Ae,{depth:$+.9,bevelEnabled:!1}),ue);Ce.position.set(0,ge,-$/2-.45),Ce.castShadow=!0,Ce.receiveShadow=!0,N.add(Ce);for(let qe=0;qe<2;qe++){let be=-1.8+qe*3.6,te=new Re(new It(3.1,2.4,.12),i.walnut);te.position.set(be,1.2,-$/2-.05),te.castShadow=!0,N.add(te);for(let ut=1;ut<4;ut++){let Et=new Re(new It(3.1,.04,.14),i.trim);Et.position.set(be,ut*.6,-$/2-.08),N.add(Et)}let et=new Re(new It(2.7,.3,.14),i.mirror);et.position.set(be,2.05,-$/2-.09),N.add(et);let Ke=new Re(new It(3.3,2.55,.1),i.trim);Ke.position.set(be,1.27,-$/2-0),N.add(Ke)}[-3.3,3.3].forEach(qe=>{let be=new Re(new Ot(.07,.08,.26,12),i.sconce);be.position.set(qe,2.55,-$/2-.2),be.userData.noAO=!0,N.add(be);let te=new Sn(new mn({map:t,transparent:!0,depthWrite:!1,blending:Bt,opacity:0}));te.position.set(qe,2.55,-$/2-.5),te.scale.set(2.2,2.2,1),te.userData.noAO=!0,N.add(te),Ve.push(te)});let ze=new Re(new Ht(1,1),new Ut({map:u,transparent:!0,depthWrite:!1,blending:Bt,opacity:0}));ze.rotation.x=-Math.PI/2,ze.position.set(0,.05,-$/2-2.2),ze.scale.set(10,5,1),ze.userData.noAO=!0,N.add(ze),Ve.pool=ze})();let $e=[-75.2,-49.2,-23.2,2.8,28.8,54.8,80.8];$e.forEach(N=>{let k=new Tt;k.position.set(N,0,-15.5),a.add(k);let $=new Re(new Ot(.13,.19,9.8,10),Ne);$.position.y=4.9,$.castShadow=!0,k.add($);let ge=new Re(new It(.12,.12,2.2),Ne);if(ge.position.y=9.2,k.add(ge),[-.85,0,.85].forEach(de=>{let ae=new Re(new Ot(.04,.05,.2,8),i.ceramic);ae.position.set(0,9.36,de),k.add(ae)}),Math.abs(N-2.8)<1){let de=new Re(new Ot(.3,.3,.95,14),i.steel);de.position.set(.5,8.35,.2),de.castShadow=!0,k.add(de);let ae=new Re(new Ot(.2,.3,.12,14),i.steel);ae.position.set(.5,8.9,.2),k.add(ae)}});let it=[];for(let N=0;N<$e.length-1;N++)[-.85,0,.85].forEach(k=>{let $=new C($e[N],9.4,-15.5+k),ge=new C($e[N+1],9.4,-15.5+k),de=$.clone().lerp(ge,.5);de.y-=.9,it.push(new Dn(new Wn([$,$.clone().lerp(de,.5).setY(9.4-.45),de,de.clone().lerp(ge,.5).setY(9.4-.45),ge]),24,.022,4))});{let N=new C(2.8,9.4,-15.5),k=new C(2.8,5.4,-4.3),$=N.clone().lerp(k,.5);$.y-=.7,it.push(new Dn(new Wn([N,$,k]),20,.026,4))}let X=new Re(os(it),Fe);X.castShadow=!1,X.raycast=()=>{},a.add(X);let Ie=new Tt,z=[],me={front:null,rear:null},xe=new Tt;(()=>{let N=new Hi({color:1784408,metalness:.65,roughness:.3,clearcoat:1,clearcoatRoughness:.08,envMapIntensity:1.5}),k=new Hi({color:395533,metalness:.2,roughness:.04,clearcoat:1,envMapIntensity:1.8}),$=new Rt({color:1052946,roughness:.85}),ge=new Rt({color:12107462,metalness:.9,roughness:.25}),de=new ri;de.moveTo(-2.3,.28),de.lineTo(-2.38,.6),de.quadraticCurveTo(-2.36,.92,-2.05,.98),de.lineTo(1.35,.98),de.quadraticCurveTo(2.05,.9,2.3,.7),de.lineTo(2.34,.44),de.quadraticCurveTo(2.3,.28,2.1,.28),de.lineTo(-2.3,.28);let ae=new Re(new Si(de,{depth:1.7,bevelEnabled:!0,bevelThickness:.09,bevelSize:.09,bevelSegments:4,curveSegments:14}),N);ae.geometry.translate(0,0,-.85),ae.castShadow=!0,Ie.add(ae);let Ae=new ri;Ae.moveTo(-1.95,.96),Ae.quadraticCurveTo(-1.55,1.42,-.95,1.46),Ae.lineTo(.5,1.44),Ae.quadraticCurveTo(.95,1.4,1.38,.96),Ae.lineTo(-1.95,.96);let Ce=new Re(new Si(Ae,{depth:1.62,bevelEnabled:!0,bevelThickness:.07,bevelSize:.05,bevelSegments:3,curveSegments:12}),k);Ce.geometry.translate(0,0,-.81),Ce.castShadow=!0,Ie.add(Ce);let ze=new Re(new Ci(1.9,.07,1.6,2,.03),N);ze.position.set(-.2,1.47,0),Ie.add(ze),[[-1.4,.8],[1.4,.8],[-1.4,-.8],[1.4,-.8]].forEach(([lt,bt])=>{let Mt=new Re(new Ot(.37,.37,.26,24),$);Mt.rotation.x=Math.PI/2,Mt.position.set(lt,.37,bt*1+Math.sign(bt)*.04),Mt.castShadow=!0,Ie.add(Mt);let at=new Re(new Ot(.23,.23,.27,20),ge);at.rotation.x=Math.PI/2,at.position.copy(Mt.position),Ie.add(at)});let qe=new Rt({color:1118481,emissive:16777215,emissiveIntensity:.1}),be=new Rt({color:2228224,emissive:16722458,emissiveIntensity:.1}),te=new Re(new It(.06,.05,1.5),qe);te.position.set(2.33,.72,0),te.userData.noAO=!0,Ie.add(te);let et=new Re(new It(.06,.05,1.5),be);et.position.set(-2.4,.78,0),et.userData.noAO=!0,Ie.add(et),me.front=qe,me.rear=be;let Ke=new Re(new Ci(1.8,.07,1.5,2,.03),i.snowRoof);Ke.userData.keep=!0,Ke.position.set(-.2,1.54,0),Ie.add(Ke),z.push(Ke);let ut=new Re(new Ci(1,.05,1.45,2,.02),i.snowRoof);ut.userData.keep=!0,ut.position.set(1.6,1,0),ut.rotation.z=-.1,Ie.add(ut),z.push(ut),Ie.position.set(7.9,0,6.3),Ie.rotation.y=-Math.PI/2,a.add(Ie);let Et=[new C(5.2,1.2,2.5),new C(5.55,.5,2.85),new C(6.15,.12,3.3),new C(6.7,.4,3.75),new C(7,.82,3.95)],Ct=new Re(new Dn(new Wn(Et),24,.028,6),new Rt({color:855310,roughness:.6}));Ct.castShadow=!0,xe.add(Ct);let Lt=new Re(new In(.05,10,8),new Ut({color:new Be(.4,3,1.2)}));Lt.position.set(5.16,1.5,2.5),Lt.userData.noAO=!0,xe.add(Lt),xe.userData.led=Lt,a.add(xe)})();let le=r?0:s>=1?2200:900,He=new St,ke=new Float32Array(le*3),rt=new Float32Array(le*2),tt=[90,40,90];for(let N=0;N<le;N++)ke[N*3]=(o()-.5)*tt[0],ke[N*3+1]=o()*tt[1],ke[N*3+2]=(o()-.5)*tt[2],rt[N*2]=.7+o()*1.1,rt[N*2+1]=o()*6.28;He.setAttribute("position",new _t(ke,3));let Zt=new gn({color:16777215,size:.11,map:c,transparent:!0,opacity:.85,depthWrite:!1,blending:Bt}),tn=new En(He,Zt);tn.frustumCulled=!1,tn.userData.noAO=!0,a.add(tn);let Kn=s>=1&&!r?140:0,Gi=new St,li=new Float32Array(Kn*3);for(let N=0;N<Kn;N++)li[N*3]=(o()-.5)*50,li[N*3+1]=o()*22,li[N*3+2]=(o()-.5)*50;Gi.setAttribute("position",new _t(li,3));let ci=new gn({color:14674175,size:.42,map:c,transparent:!0,opacity:.22,depthWrite:!1,blending:Bt}),Qn=new En(Gi,ci);Qn.frustumCulled=!1,Qn.userData.noAO=!0,a.add(Qn);let Ln=r?0:s>=1?1600:700,Jt=new St,dn=new Float32Array(Ln*6),hi=new Float32Array(Ln),ki=[70,30,70];for(let N=0;N<Ln;N++){let k=(o()-.5)*ki[0],$=o()*ki[1],ge=(o()-.5)*ki[2];dn.set([k,$,ge,k-.04,$+.7,ge],N*6),hi[N]=14+o()*6}Jt.setAttribute("position",new _t(dn,3));let Mr=new $i({color:11455464,transparent:!0,opacity:0,depthWrite:!1}),zn=new yi(Jt,Mr);zn.frustumCulled=!1,zn.userData.noAO=!0,zn.raycast=()=>{},a.add(zn);let Pi=r?0:s>=1?420:160,ui=new St,ls=new Float32Array(Pi*3),Wi=new Float32Array(Pi*2),ka=new Float32Array(Pi*3),ws=[80,22,80],fc=[[.95,.55,.1],[.85,.3,.08],[.9,.75,.15],[.6,.2,.05]];for(let N=0;N<Pi;N++){ls[N*3]=(o()-.5)*ws[0],ls[N*3+1]=o()*ws[1],ls[N*3+2]=(o()-.5)*ws[2],Wi[N*2]=.5+o()*.8,Wi[N*2+1]=o()*6.28;let k=fc[N%4];ka.set(k,N*3)}ui.setAttribute("position",new _t(ls,3)),ui.setAttribute("color",new _t(ka,3));let Ii=new En(ui,new gn({size:.2,vertexColors:!0,map:c,transparent:!0,opacity:.9,depthWrite:!1}));Ii.frustumCulled=!1,Ii.userData.noAO=!0,a.add(Ii);let Sr=[];for(let N=0;N<22;N++){let k=new Sn(new mn({map:l,transparent:!0,depthWrite:!1,opacity:0,color:12568276}));k.userData={age:N/22*6,noAO:!0},k.renderOrder=5,a.add(k),Sr.push(k)}let T=new Re(pe,Ye);T.position.set(.9,0,-12.4),T.scale.setScalar(.75),T.castShadow=!0,T.visible=!1,a.add(T);let W=new Set([w,v,P,F,M,L,U,A,T]),oe=new Tt;a.add(oe),a.children.slice().forEach(N=>{N!==oe&&!W.has(N)&&oe.add(N)});let j=new C;function ee(N){Zt.color.set(N?6963104:16777215)}function We(N,k,$,ge,de,ae,Ae){p.opacity=N.ground,p.depthWrite=N.ground>.95,w.visible=N.ground>.01,E.forEach(be=>{let te=N.ground<.99;be.transparent!==te&&(be.transparent=te,be.needsUpdate=!0),be.opacity=N.ground,be.depthWrite=!te}),f.uSnow.value=N.snow,f.uRoofSnow.value=N.roofSnow,f.uGrow.value=N.grow,f.uLeafTint.value.copy(N.leafTint),Qe(N.beacons||0,k),T.visible=N.section>.3,U.visible=N.snow>.25,Z.forEach(be=>{be.visible=N.grow>.02,be.castShadow=N.grow>.5}),z.forEach(be=>{be.visible=N.snow>.5}),xe.visible=N.explode<.05,Ie.visible=!0;let Ce=1-ge;me.front.emissiveIntensity=.1+2.2*Ce,me.rear.emissiveIntensity=.1+3*Ce,xe.userData.led.scale.setScalar(.8+.25*Math.sin(k*3));let ze=ht(.35,.9,N.ground);Me.forEach(be=>{be.visible=N.ground>.5||N.explode>.05}),V.forEach(be=>{be.halo.material.opacity=.75*Ce,be.pool.material.opacity=.55*Ce*ze}),ve.intensity=55*Ce,De.intensity=40*Ce,O.color.setRGB(3.2,2.2,1.1).multiplyScalar(.06+.94*Ce),Ve.forEach(be=>{be.material.opacity=.5*Ce}),Ve.pool.material.opacity=.4*Ce*ze,Le.forEach((be,te)=>{be.material.opacity=.5*Ce*pt(Je(Ae,te),0,1)*(1-N.ghost)*ze}),Te.opacity=Ce*.9,tn.position.set(de.x,0,de.z),Qn.position.set(de.x,0,de.z),zn.position.set(de.x,0,de.z),Ii.position.set(de.x,0,de.z);let qe=N.snowfall;if(tn.visible=Qn.visible=qe>.02&&le>0,tn.visible){let be=He.attributes.position.array;for(let et=0;et<le;et++)be[et*3+1]-=rt[et*2]*$*1.5,be[et*3]+=Math.sin(k*.7+rt[et*2+1])*$*.3,be[et*3+2]+=Math.cos(k*.5+rt[et*2+1])*$*.2,be[et*3+1]<0&&(be[et*3+1]=tt[1]);He.attributes.position.needsUpdate=!0;let te=Gi.attributes.position.array;for(let et=0;et<Kn;et++)te[et*3+1]-=.8*$,te[et*3+1]<0&&(te[et*3+1]=22);Gi.attributes.position.needsUpdate=!0,Zt.opacity=.8*qe*(1-ge*.45),ci.opacity=.2*qe*(1-ge*.5)}if(zn.visible=N.rain>.02&&Ln>0,zn.visible){let be=Jt.attributes.position.array;for(let te=0;te<Ln;te++){let et=hi[te]*$;be[te*6+1]-=et,be[te*6+4]-=et,be[te*6+4]<0&&(be[te*6+1]+=ki[1],be[te*6+4]+=ki[1])}Jt.attributes.position.needsUpdate=!0,Mr.opacity=.32*N.rain}if(Ii.visible=N.leaves>.02&&Pi>0,Ii.visible){let be=ui.attributes.position.array;for(let te=0;te<Pi;te++)be[te*3+1]-=Wi[te*2]*$*.9,be[te*3]+=(Math.sin(k*.9+Wi[te*2+1])*.7+.35)*$,be[te*3+2]+=Math.cos(k*.6+Wi[te*2+1])*.4*$,be[te*3+1]<0&&(be[te*3+1]=ws[1]);ui.attributes.position.needsUpdate=!0,Ii.material.opacity=.9*N.leaves}Sr.forEach(be=>{be.userData.age+=$*.55,be.userData.age>6&&(be.userData.age-=6);let te=be.userData.age/6;j.copy(ae),j.y+=te*5.2,j.x+=te*2.2+Math.sin(te*5+be.id)*.18,j.z+=Math.cos(te*3+be.id)*.15,be.position.copy(j),be.scale.setScalar(.5+te*2.6),be.material.opacity=Math.sin(Math.PI*Math.min(1,te*1.3))*.34*N.smoke*(.5+.5*Ce)})}let Je=(N,k)=>N-k*.3;return{world:a,ground:w,groundMat:p,U:f,update:We,lamps:V,setThermal:ee,evGroup:Ie,props:oe,sight:Pf}}var Xt={wire:16761963,cold:5220095,hot:16739151,drain:10135476,supply:9433288,ret:9083903,radon:14257407},Qh=2.4;function Df({house:i,reduce:e}){let t=(M,I,L)=>new C(M,I,L),n=Ts("rgba(255,255,255,0.6)"),s={netE:[],netW:[],netA:[],netR:[]},r={netE:[],netW:[],netA:[],netR:[]},a={};Object.keys(s).forEach(M=>{a[M]=new Tt,a[M].visible=!1,a[M].userData.noAO=!0,i.add(a[M])});let o=M=>{let I=new rr;for(let L=1;L<M.length;L++)I.add(new Ki(M[L-1],M[L]));return I};function c(M,I,L,U,V){let B=o(I.map(Le=>t(Le[0],Le[1],Le[2]))),G=B.getLength(),O=Math.max(6,Math.round(G*7)),q=6,K=new Ut({color:L,toneMapped:!1,fog:!1,transparent:!0});K.color.multiplyScalar(1.5);let ie=new Re(new Dn(B,O,U,q,!1),K),ve=new Ut({color:L,transparent:!0,opacity:.2,blending:Bt,depthWrite:!1,toneMapped:!1,fog:!1});ve.color.multiplyScalar(Qh);let De=new Re(new Dn(B,O,U*3.4,q,!1),ve);ie.renderOrder=7,De.renderOrder=8,ie.userData.noAO=De.userData.noAO=!0,ie.raycast=De.raycast=()=>{},a[M].add(ie,De),s[M].push({tube:ie,glow:De,segs:O,radial:q,gmat:ve}),V&&r[M].push({curve:B,len:G,n:Math.max(3,Math.round(G*V.density)),speed:V.speed,color:V.color||L})}let l=[];for(let M=0;M<=10;M++){let I=M/10;l.push([2.8,ft(9.1,7.7,I)-1*Math.sin(Math.PI*I),ft(-15.5,-4.45,I)])}c("netE",[...l,[2.8,1.45,-4.3],[2.8,-.35,-4.3],[2.8,-.35,-3.86],[2.8,-.72,-3.86]],Xt.wire,.045,{density:2.2,speed:6});let u=[2.8,-.72,-3.78],f=[2.8,-.2,-3.78];c("netE",[u,f,[2.2,-.2,-3.78],[2.2,1.35,-3.9],[4.6,1.35,-3.9]],Xt.wire,.032,{density:2.5,speed:5}),c("netE",[u,f,[4.94,-.2,-3.78],[4.94,-.2,3.7],[4.94,.6,3.92],[1.45,.6,3.92],[1.45,2.45,3.92],[.05,2.45,3.92],[.05,.6,3.92],[-4.94,.6,3.92],[-4.94,.6,-3.2]],Xt.wire,.032,{density:2.5,speed:5}),c("netE",[u,f,[4.94,-.2,-3.78],[4.94,3.85,-3.78],[4.94,3.85,3.92],[-4.94,3.85,3.92],[-4.94,3.85,-2.4]],Xt.wire,.032,{density:2.5,speed:5}),c("netE",[u,f,[1.28,-.2,-3.78],[1.28,-.2,-1],[1.28,3.05,-1],[-1.5,3.05,-1],[-1.5,3.05,.5]],Xt.wire,.03,{density:2.5,speed:5}),c("netE",[[1.28,3.05,-1],[3,3.05,-1],[3,3.05,-1.6]],Xt.wire,.03,{density:2.5,speed:5}),c("netE",[u,f,[4.94,-.2,-3.78],[4.94,-.2,2.5],[4.94,1.3,2.5],[5.1,1.3,2.5]],Xt.wire,.034,{density:2.5,speed:5}),c("netW",[[-.5,-2.2,16],[-.5,-2.2,3.75],[-.5,-.32,3.75],[-.5,-.32,-3],[-1.95,-.32,-3],[-1.95,-1.35,-3]],Xt.cold,.072,{density:2,speed:2.4}),c("netW",[[-.5,-.32,-3.2],[2.4,-.32,-3.2],[2.4,-.32,-3.7],[2.4,1.05,-3.7]],Xt.cold,.051,{density:2,speed:2.4}),c("netW",[[-.5,-.32,-3.45],[-2.3,-.32,-3.45],[-2.3,3.95,-3.45],[-2.3,3.95,-3.62]],Xt.cold,.051,{density:2,speed:2.4}),c("netW",[[-2.3,3.6,-3.45],[-3.4,3.6,-3.45]],Xt.cold,.051,{density:2,speed:2.4}),c("netW",[[-2.2,-1.35,-3],[-2.2,-.46,-3],[-2.2,-.46,-3.32],[2.55,-.46,-3.32],[2.55,-.46,-3.72],[2.55,1.05,-3.72]],Xt.hot,.051,{density:2,speed:2.4}),c("netW",[[-2.2,-.46,-3.32],[-2.47,-.46,-3.32],[-2.47,3.95,-3.32],[-2.47,3.95,-3.6]],Xt.hot,.051,{density:2,speed:2.4}),c("netW",[[-2.47,3.6,-3.32],[-3.5,3.6,-3.32]],Xt.hot,.051,{density:2,speed:2.4}),c("netW",[[-3.6,3.48,-3.62],[-2.6,3.48,-3.62],[-2.6,-2.95,-3.62],[.6,-2.95,-3.62],[.6,-3.2,-4.3],[.6,-3.45,-9.5]],Xt.drain,.087,{density:1.6,speed:2.8}),c("netW",[[2.6,.95,-3.86],[2.6,-2.9,-3.86],[.75,-2.9,-3.86]],Xt.drain,.072,{density:1.6,speed:2.8}),c("netW",[[-2.6,3.48,-3.62],[-2.6,10.2,-3.62]],Xt.drain,.065,null);let d=[-3.3,-1.15,-2.6],h=[-3.3,-.12,-2.6];c("netA",[d,h,[2.6,-.12,-2.6],[4.4,-.12,-2.6],[4.4,-.12,-1.2],[4.4,.34,-1.2]],Xt.supply,.091,{density:1.6,speed:3.2}),c("netA",[h,[-2,-.12,-2.6],[-2,-.12,3.4],[-2,.34,3.4]],Xt.supply,.078,{density:1.6,speed:3.2}),c("netA",[[3.1,-.12,-2.6],[3.1,-.12,3.45],[3.1,.34,3.45]],Xt.supply,.078,{density:1.6,speed:3.2}),c("netA",[[1.28,-.12,-2.6],[1.28,3.35,-2.6],[3.8,3.35,-2.6],[3.8,3.35,2.9],[3.8,3.52,2.9]],Xt.supply,.078,{density:1.6,speed:3.2}),c("netA",[[1.28,3.35,-2.6],[-3.8,3.35,-2.6],[-3.8,3.35,2],[-3.8,3.52,2]],Xt.supply,.078,{density:1.6,speed:3.2}),c("netA",[[-1.75,5.6,1],[-1.75,-.32,1],[-3.3,-.32,1],[-3.3,-.32,-2.15],[-3.3,-1.05,-2.15]],Xt.ret,.091,{density:1.6,speed:2.4}),c("netR",[[-1.2,-2.92,-1.5],[-1.2,11.6,-1.5]],Xt.radon,.075,{density:2.2,speed:2.6});let p={},x=new Be,g=new Be(16777215);Object.keys(r).forEach(M=>{let I=r[M];if(!I.length)return;let L=I.reduce((q,K)=>q+K.n,0),U=new St;U.setAttribute("position",new _t(new Float32Array(L*3),3));let V=new Float32Array(L*3),B=0;I.forEach(q=>{x.set(q.color).lerp(g,.45).multiplyScalar(Qh);for(let K=0;K<q.n;K++,B++)V[B*3]=x.r,V[B*3+1]=x.g,V[B*3+2]=x.b}),U.setAttribute("color",new _t(V,3));let G=new gn({size:M==="netE"?.2:.26,map:n,vertexColors:!0,transparent:!0,depthWrite:!1,blending:Bt,toneMapped:!1,fog:!1}),O=new En(U,G);O.frustumCulled=!1,O.renderOrder=9,O.raycast=()=>{},a[M].add(O),p[M]=O});let m=e?0:260,S=new St,b=new Float32Array(m*3),_=new Float32Array(m),E=t(-1.2,-2.95,-1.5),w=M=>{b[M*3]=(Math.random()-.5)*9.4,b[M*3+1]=-3.05-Math.random()*1.6,b[M*3+2]=(Math.random()-.5)*7.4,_[M]=.4+Math.random()*.8};for(let M=0;M<m;M++)w(M);S.setAttribute("position",new _t(b,3));let R=new gn({color:new Be(Xt.radon).multiplyScalar(Qh),size:.2,map:Ts("rgba(217,140,255,0.6)"),transparent:!0,opacity:0,depthWrite:!1,blending:Bt,toneMapped:!1,fog:!1}),v=new En(S,R);v.frustumCulled=!1,v.raycast=()=>{},a.netR.add(v);let A=new C,P={netE:1,netW:1,netA:1,netR:1};function F(M,I,L,U){let V=M.explode<.06;if(Object.keys(s).forEach(B=>{let G=M[B],O=a[B];if(O.visible=V&&G>.003,!O.visible)return;let q=!I||I===B?1:.2,K=P[B]=ft(P[B],q,Math.min(1,U*4));s[B].forEach(ve=>{let De=Math.floor(pt(G,0,1)*ve.segs)*ve.radial*6;ve.tube.geometry.setDrawRange(0,De),ve.glow.geometry.setDrawRange(0,De),ve.tube.material.opacity=K,ve.gmat.opacity=(.22+.1*Math.sin(L*3+ve.segs))*K});let ie=p[B];if(ie){let ve=ie.geometry.attributes.position.array,De=0;r[B].forEach(Le=>{for(let Ye=0;Ye<Le.n;Ye++,De++){let Y=(Ye/Le.n+L*Le.speed/Le.len)%1;if(Y>G){ve[De*3+1]=-999;continue}Le.curve.getPointAt(Y,A),ve[De*3]=A.x,ve[De*3+1]=A.y,ve[De*3+2]=A.z}}),ie.geometry.attributes.position.needsUpdate=!0,ie.material.opacity=pt(G*3,0,1)*K}}),m&&a.netR.visible){R.opacity=pt(M.netR*2,0,.9)*P.netR;for(let B=0;B<m;B++){A.set(E.x-b[B*3],E.y-b[B*3+1],E.z-b[B*3+2]);let G=A.length();if(G<.25){w(B);continue}A.multiplyScalar(U*_[B]*1.1/G),b[B*3]+=A.x+Math.sin(L+B)*U*.15,b[B*3+1]+=A.y,b[B*3+2]+=A.z}S.attributes.position.needsUpdate=!0}}return{groups:a,update:F}}var Z_=`varying vec3 vW; varying vec3 vN;
void main(){ vec4 w = modelMatrix * vec4(position, 1.0);
#ifdef USE_INSTANCING
  w = modelMatrix * instanceMatrix * vec4(position, 1.0);
#endif
  vW = w.xyz; vN = normalize(mat3(modelMatrix) * normal); gl_Position = projectionMatrix * viewMatrix * w; }`,J_=`uniform float uBase, uGrad, uBand, uTime; varying vec3 vW; varying vec3 vN;
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
  gl_FragColor = vec4(toLinear(iron(t + rim)), 1.0); }`;function Lf({scene:i,M:e,skipParents:t,onChange:n}){let s={value:0},r=new Map;function a(d,h=0,p=0){let x=d+"|"+h+"|"+p;return r.has(x)||r.set(x,new Dt({uniforms:{uBase:{value:d},uGrad:{value:h},uBand:{value:p},uTime:s},vertexShader:Z_,fragmentShader:J_})),r.get(x)}let o={hvac:.93,"water-heaters":.88,electrical:.6,plumbing:.56,installation:.5,radon:.22,solar:.17,roofing:[.4,.12],foundation:.33,sewer:.3,asbestos:.5};function c(d,h){if(h&&o[h]!==void 0)return a(...[].concat(o[h]));let p=d.userData&&d.userData.th;return p?a(...p):a(.3)}let l=[],u=!1;function f(d){d!==u&&(u=d,i.traverse(h=>{if(h.isSprite&&h.userData.noAO){h.visible=!u&&(h.userData.wasVisible??!0);return}if(!(!(h.isMesh||h.isInstancedMesh)||!h.material)&&!h.userData.noThermal){for(let p=h.parent;p;p=p.parent)if(t.includes(p))return;u?(h.userData.mat0=h.material,h.material=Array.isArray(h.material)?h.material.map(p=>c(p,h.userData.sys)):c(h.material,h.userData.sys)):h.userData.mat0&&(h.material=h.userData.mat0,h.userData.mat0=null)}}),n&&n(u))}return{set:f,time:s,get on(){return u}}}function Uf({M:i,layers:e,glowTex:t}){let n=[],s=(h,p=.7,x=0,g=[.5],m={})=>{let S=new Rt({color:h,roughness:p,metalness:x,...m});return S.userData.th=g,S},r=(h,p=[.95])=>{let x=new Rt({color:2236440,emissive:h,emissiveIntensity:0,roughness:.5});return x.userData.th=p,n.push(x),x},a={rug:s(5787722,1),rug2:s(3884628,1),cushion:s(13215610,.95),cushion2:s(9413544,.95),tvBlack:s(789775,.25,.3,[.6]),book1:s(9190190,.8),book2:s(3100522,.8),book3:s(14208440,.8),plant:s(4156218,.9,0,[.3]),pot:s(14209734,.6),sheets:s(15328474,.95),duvet:s(7043718,.95),wood:s(10122320,.55),woodDark:s(4929062,.55),steel:s(11186358,.3,.9,[.55]),quartz:s(15328991,.25,0,[.5]),cabinet:s(3812386,.5,0,[.5]),tile:s(13620952,.4,0,[.4]),bin:s(3829659,.6),bin2:s(12936750,.6),cardboard:s(11570526,.9),tv:r(10274047,[.85]),lamp:r(16762746),pendant:r(16765594),screen:r(13625599,[.8]),led:r(6750105,[.7]),pot:s(14868180,.55)},o=(h,p,x,g,m,S,b,_,E,w=0)=>{let R=new Re(new Ci(h,p,x,2,Math.min(g,h/2-.001,p/2-.001,x/2-.001)),m);return R.position.set(S,b+p/2,_),R.rotation.y=w,R.castShadow=!0,R.receiveShadow=!0,R.userData.noPick=!0,E.add(R),R},c=(h,p,x,g,m,S,b,_=18)=>{let E=new Re(new Ot(h,h,p,_),x);return E.position.set(g,m+p/2,S),E.castShadow=!0,E.receiveShadow=!0,E.userData.noPick=!0,b.add(E),E},l=(h,p,x,g,m,S,b=1)=>{let _=new Re(new In(h,14,10),p);return _.position.set(x,g,m),_.scale.y=b,_.castShadow=!0,_.userData.noPick=!0,S.add(_),_},u=(h,p,x,g,m,S=a.woodDark)=>{let b=new Tt;return b.position.set(h,p,x),b.rotation.y=g,m.add(b),o(.44,.05,.44,.02,S,0,.44,0,b),[[-.19,-.19],[.19,-.19],[-.19,.19],[.19,.19]].forEach(([_,E])=>c(.02,.44,a.steel,_,0,E,b,8)),o(.44,.45,.04,.02,S,0,.5,-.2,b),b},f=(h,p,x,g,m=1.4)=>{c(.14,.03,a.steel,h,p,x,g,14),c(.015,m,a.steel,h,p,x,g,8);let S=new Re(new Ot(.17,.24,.3,18,1,!0),a.lamp);return S.material.side=_n,S.position.set(h,p+m+.05,x),S.userData.noAO=!0,S.userData.noPick=!0,g.add(S),S};(()=>{let h=e.main,p=.3;o(3.4,.02,2.5,.01,a.rug,-2.3,p,.7,h);let x=new Tt;x.position.set(-.9,p,.7),x.rotation.y=-Math.PI/2,h.add(x),o(2.3,.4,.95,.1,a.fabric??i.fabric,0,.1,0,x),o(2.3,.45,.25,.1,i.fabric,0,.45,-.38,x),o(.25,.3,.9,.08,i.fabric,-1.07,.3,0,x),o(.25,.3,.9,.08,i.fabric,1.07,.3,0,x),o(.5,.4,.14,.06,a.cushion,-.6,.55,-.1,x),o(.5,.4,.14,.06,a.cushion2,.6,.55,-.1,x),[[-.9,.18],[.9,.18]].forEach(([S])=>{[[-1.05,-.4],[1.05,-.4],[-1.05,.4],[1.05,.4]].forEach(([b,_])=>c(.03,.1,a.woodDark,b,0,_,x,8))}),o(1,.05,.6,.03,a.wood,-2.75,p+.34,.7,h),[[-.4,-.22],[.4,-.22],[-.4,.22],[.4,.22]].forEach(([S,b])=>c(.025,.34,a.woodDark,-2.75+S,p,.7+b,h,8)),u(-2,p,2.5,Math.PI,h,i.fabric2??a.cushion2),o(.4,.5,2,.04,a.woodDark,-4.62,p,.7,h),o(.05,.75,1.5,.015,a.tvBlack,-4.74,p+.95,.7,h);let g=new Re(new Ht(1.4,.68),a.tv);g.rotation.y=Math.PI/2,g.position.set(-4.7,p+1.32,.7),g.userData.noPick=!0,h.add(g),o(.34,2,2.2,.02,a.woodDark,.9,p,-1.8,h),[.5,1,1.5].forEach((S,b)=>{o(.2,.28,1.9,.01,[a.book1,a.book2,a.book3][b],1,p+S+.05,-1.8,h)}),c(.17,.4,a.pot,-4.2,p,3.2,h,14),l(.38,a.plant,-4.2,p+.85,3.2,h,1.3),l(.28,a.plant,-4.3,p+1.15,3.1,h,1.2),f(-.45,p,3.1,h,1.45),o(3,.72,.36,.02,a.cabinet,2.9,p+1.55,-3.7,h),o(.9,.14,.6,.02,a.steel,2.4,p+1.3,-3.58,h),o(.34,.9,.34,.02,a.steel,2.4,p+1.45,-3.7,h),o(2.2,.06,1,.02,a.quartz,3,p+.9,-.6,h),o(2.1,.9,.9,.03,a.cabinet,3,p,-.6,h),[2.4,3,3.6].forEach(S=>{c(.17,.05,a.woodDark,S,p+.62,.35,h,16),c(.025,.62,a.steel,S,p,.35,h,8)}),[2.3,3,3.7].forEach(S=>{c(.006,.7,a.steel,S,p+2.1,-.6,h,4);let b=new Re(new In(.15,16,10,0,Math.PI*2,0,Math.PI/2),a.pendant);b.position.set(S,p+2.1,-.6),b.userData.noAO=!0,b.userData.noPick=!0,h.add(b)}),o(1.8,.05,.92,.02,a.wood,3.2,p+.72,2.4,h),[[-.8,-.4],[.8,-.4],[-.8,.4],[.8,.4]].forEach(([S,b])=>c(.035,.72,a.woodDark,3.2+S,p,2.4+b,h,8)),u(2.5,p,1.55,0,h),u(3.9,p,1.55,0,h),u(2.5,p,3.25,Math.PI,h),u(3.9,p,3.25,Math.PI,h);let m=new Re(new Ot(.28,.28,.22,20,1,!0),a.pendant);m.material.side=_n,m.position.set(3.2,p+2.15,2.4),m.userData.noAO=!0,m.userData.noPick=!0,h.add(m),c(.006,.55,a.steel,3.2,p+2.2,2.4,h,4),o(1,.45,.38,.03,a.wood,.6,p,3.55,h)})(),(()=>{let h=e.upper,p=3.45;o(2,.42,2.15,.06,a.sheets,2.4,p,-2.55,h),o(1.96,.18,1.55,.08,a.duvet,2.4,p+.38,-2.2,h),o(2,.9,.1,.03,a.woodDark,2.4,p,-3.72,h),o(.6,.22,.38,.08,a.sheets,1.85,p+.5,-3.3,h),o(.6,.22,.38,.08,a.sheets,2.95,p+.5,-3.3,h),[[1],[3.8]].forEach(([g])=>{o(.5,.5,.4,.03,a.woodDark,g,p,-3.55,h),f(g,p+.5,-3.55,h,.34)}),o(2,.02,1.4,.01,a.rug2,2.4,p,-1,h),o(.6,2.3,2,.02,a.woodDark,4.55,p,-1.2,h),o(1.5,.05,.7,.02,a.wood,.6,p+.72,3.35,h),[[-.7,-.3],[.7,-.3],[-.7,.3],[.7,.3]].forEach(([g,m])=>c(.03,.72,a.steel,.6+g,p,3.35+m,h,8)),o(.7,.42,.04,.01,a.tvBlack,.6,p+.98,3.52,h);let x=new Re(new Ht(.64,.36),a.screen);x.position.set(.6,p+1.19,3.495),x.rotation.y=Math.PI,x.userData.noPick=!0,h.add(x),u(.6,p,2.7,Math.PI,h,a.cushion2),o(1.5,.4,2,.06,a.sheets,-3.4,p,2.2,h),o(1.46,.16,1.4,.07,a.cushion2,-3.4,p+.36,2.5,h),o(.9,.9,.5,.03,a.woodDark,-4.55,p,.6,h),o(.9,.02,.06,.01,a.tile,-3.2,p,-2.6,h),o(.42,.34,.6,.12,i.ceramic,-4.4,p,-3.2,h),o(.4,.4,.2,.06,i.ceramic,-4.4,p+.34,-3.5,h),o(.7,.9,.03,.01,i.mirror,-2.4,p+1.2,-3.84,h)})(),(()=>{let h=e.basement,p=-2.8;o(.68,.92,.68,.04,i.white,.5,p,-3.5,h),o(.68,.92,.68,.04,i.white,1.25,p,-3.5,h),c(.2,.03,a.tvBlack,.5,p+.93,-3.15,h,18),c(.2,.03,a.tvBlack,1.25,p+.93,-3.15,h,18),o(.6,.06,.4,.01,a.tvBlack,.88,p+.92,-3.88,h),o(2,.06,.75,.01,a.wood,-4,p+.88,2.6,h),o(1.9,.88,.7,.01,a.cabinet,-4,p,2.6,h),o(.3,.06,.12,.01,a.bin2,-4.4,p+.94,2.55,h),o(.2,.2,.2,.02,a.bin,-3.7,p+.94,2.7,h),o(1.7,2,.42,.01,a.steel,4.25,p,2.9,h,0),[.3,.9,1.5].forEach((g,m)=>{o(.5,.3,.34,.03,[a.bin,a.bin2,a.cardboard][m],3.8,p+g+.05,2.9,h),o(.6,.3,.34,.03,[a.cardboard,a.bin,a.bin2][m],4.5,p+g+.05,2.9,h)}),c(.32,.05,a.tvBlack,.66,p,1.6,h,20),c(.1,.5,a.pvc??i.pvc,.66,p,1.6,h,12);let x=new Re(new In(.03,8,6),a.led);x.position.set(.66,p+.58,1.6),x.userData.noAO=!0,x.userData.noPick=!0,h.add(x),o(.5,.4,.4,.02,a.cardboard,-1.4,p,2.9,h,.3),o(.45,.35,.4,.02,a.cardboard,-1.3,p+.4,2.9,h,.1),o(1.6,.02,1.2,.01,a.rug,.4,p,.8,h)})();function d(h,p){let x=pt(.25+.75*h+p*.3,0,1.1);a.tv.emissiveIntensity=1.3*x,a.screen.emissiveIntensity=1.1*x,a.lamp.emissiveIntensity=2.2*x,a.pendant.emissiveIntensity=2.6*x,a.led.emissiveIntensity=3}return{update:d,glows:n}}var Vi=.38;function Nf({scene:i,M:e,tier:t,reduce:n}){let s=new Tt;s.visible=!1,i.add(s);let r=Cn(55),a=Ts("rgba(255,255,255,0.65)"),o=(pe,Me,Ue)=>new C(pe,Me,Ue),c=.45,l=.66,u=(()=>{let pe=Math.round(1024*sc()),Me=Math.round(512*sc()),Ue=document.createElement("canvas");Ue.width=pe,Ue.height=Me;let je=Ue.getContext("2d"),fe=je.createImageData(pe,Me),he=fe.data,Z=[[0,[58,41,29]],[.5,[92,64,40]],[.62,[150,106,62]],[2.2,[138,98,58]],[2.4,[150,142,120]],[4.6,[124,118,104]],[4.8,[100,112,120]],[7,[90,98,108]],[9,[74,78,86]]],se=Te=>{let we=0;for(;we<Z.length-2&&Z[we+1][0]<=Te;)we++;let[Ge,Ze]=Z[we],[H,dt]=Z[we+1],nt=pt((Te-Ge)/(H-Ge),0,1);return[ft(Ze[0],dt[0],nt),ft(Ze[1],dt[1],nt),ft(Ze[2],dt[2],nt)]};for(let Te=0;Te<Me;Te++)for(let we=0;we<pe;we++){let Ge=Te/Me*9+(zt(we/90,Te/40,3,11,8,5)-.5)*.7+Math.sin(we*.02+Te*.01)*.12,Ze=se(pt(Ge,0,9)),H=(zt(we/6,Te/6,2,170,85,9)-.5)*34,dt=(Te*pe+we)*4;he[dt]=pt(Ze[0]+H,0,255),he[dt+1]=pt(Ze[1]+H,0,255),he[dt+2]=pt(Ze[2]+H*.9,0,255),he[dt+3]=255}je.putImageData(fe,0,0);for(let Te=0;Te<420*sc();Te++){let we=105+r()*75;je.fillStyle=`rgba(${we|0},${we*.96|0},${we*.86|0},0.85)`,je.beginPath(),je.ellipse(r()*pe,(2.5+r()*2.1)/9*Me,1.5+r()*3.5,1.2+r()*2.4,r()*3,0,6.3),je.fill()}let ue=new xn(Ue);return ue.colorSpace=Ft,ue.wrapS=pn,ue.anisotropy=8,ue})(),f=new Rt({map:u,roughness:1,metalness:0});u.repeat.set(6,1);let d=new Re(new Ht(240,9),f);d.rotation.y=-Math.PI/2,d.position.set(c+Vi,-4.52,0),d.userData.noAO=!0,d.userData.noPick=!0,d.receiveShadow=!1,s.add(d);let h=(()=>{let pe=document.createElement("canvas");pe.width=4,pe.height=256;let Me=pe.getContext("2d"),Ue=Me.createLinearGradient(0,0,0,256);Ue.addColorStop(0,"rgb(74,78,86)"),Ue.addColorStop(.35,"rgb(24,26,31)"),Ue.addColorStop(1,"rgb(6,7,9)"),Me.fillStyle=Ue,Me.fillRect(0,0,4,256);let je=new xn(pe);return je.colorSpace=Ft,je})(),p=new Re(new Ht(240,60),new Ut({map:h,fog:!1,toneMapped:!1}));p.rotation.y=-Math.PI/2,p.position.set(c+Vi,-9.02-30,0),p.userData.noAO=!0,p.userData.noPick=!0,p.raycast=()=>{},s.add(p);let x=new Tt;s.add(x);for(let pe=0;pe<=9;pe++){let Me=new Re(new It(.04,.05,pe%3===0?1.4:.8),new Ut({color:16039294,toneMapped:!1}));Me.position.set(0,-pe,31-(pe%3===0?.7:.4)),Me.userData.noAO=!0,Me.raycast=()=>{},x.add(Me)}let g=new Re(new It(.06,.07,240),new Ut({color:16039294,toneMapped:!1}));g.position.set(c+Vi-.02,.02,0),g.userData.noAO=!0,g.raycast=()=>{},s.add(g);let m=(pe,Me=.45,Ue=.2)=>{let je=new Rt({color:pe,roughness:Me,metalness:Ue,emissive:pe,emissiveIntensity:.12,side:_n});return je.userData.th=[.3],je},S={water:m(4165606,.4,.3),gas:m(15775786,.45,.2),sewer:m(12169888,.8,0),tile:m(15855334,.6,0),roots:m(8017458,.95,0),sump:m(8362672,.5,.3),crack:new Ut({color:new Be(3,.5,.35),toneMapped:!1})};S.roots.emissiveIntensity=0;let b={water:new Tt,gas:new Tt,sewer:new Tt,found:new Tt,radon:new Tt};Object.values(b).forEach(pe=>s.add(pe));let _=(pe,Me,Ue,je,fe=0)=>{let he=new Wn(pe.map(se=>o(...se)),!1,"catmullrom",.05),Z=new Re(new Dn(he,fe||Math.max(8,pe.length*8),Me,10,!1),Ue);return Z.castShadow=!1,Z.userData.noPick=!0,je.add(Z),he},E=(pe,Me,Ue,je,fe)=>{let he=o(...pe),Z=o(...Me),se=he.distanceTo(Z),ue=new Re(new Ot(Ue,Ue,se,16,1,!0),je);return ue.position.copy(he).lerp(Z,.5),ue.quaternion.setFromUnitVectors(o(0,1,0),Z.clone().sub(he).normalize()),ue.userData.noPick=!0,fe.add(ue),new Ki(he,Z)},w=[];function R(pe,Me,Ue,je,fe,he=.22){let Z=new St;Z.setAttribute("position",new _t(new Float32Array(Me*3),3));let se=new En(Z,new gn({size:he,map:a,color:new Be(je).multiplyScalar(2.2),transparent:!0,depthWrite:!1,blending:Bt,toneMapped:!1}));se.frustumCulled=!1,se.userData.noAO=!0,se.raycast=()=>{},fe.add(se),w.push({curve:pe,n:Me,speed:Ue,len:pe.getLength(),pts:se,group:fe})}E([c-12,-2.4,22.8],[c+60,-2.4,22.8],.24,S.water,b.water),E([c-12,-1.3,24.7],[c+60,-1.3,24.7],.11,S.gas,b.gas);let v=_([[l,-2.4,22.8],[l,-2.3,18],[l,-2.2,6],[l,-2.2,3.75]],.075,S.water,b.water,30);R(v,20,2,7320831,b.water,.2);let A=_([[l+.1,-1.3,24.7],[l+.1,-1.3,8],[l+.1,-.3,5.4],[l+.1,.9,4.25]],.055,S.gas,b.gas,30);R(A,16,2.6,16765514,b.gas,.18);let P=new Re(new It(.3,.4,.2),e.steel);P.position.set(l+.1,1.2,4.25),P.userData.noPick=!0,b.gas.add(P),E([c-12,-3.95,-18.2],[c+60,-3.95,-18.2],.4,S.sewer,b.sewer);let F=_([[l,-3.27,-3.8],[l,-3.35,-9],[l,-3.55,-13],[l,-3.9,-17.9]],.19,S.sewer,b.sewer,30);R(F,18,1.3,13214314,b.sewer,.2);let M=_([[l,-3.3,-5.2],[l,-1,-5.2],[l,.1,-5.2]],.14,S.sewer,b.sewer,10),I=o(l,-3.52,-12.8);[[[.9,-.2,-12.4],[.8,-1.2,-12.2],[l+.04,-2.4,-12.5],[l+.02,-3.2,-12.8],[l,-3.5,-12.9]],[[.9,-.2,-12.4],[.85,-.9,-11.4],[l+.1,-2,-11.5],[l+.04,-3,-12.1],[l,-3.45,-12.6]],[[.9,-.2,-12.4],[.85,-1,-13.5],[l+.12,-2.2,-13.9],[l+.04,-3.1,-13.4],[l,-3.5,-13.1]],[[l+.1,-2.2,-13.8],[l+.05,-2.9,-14.6]],[[l+.12,-2,-11.5],[l+.06,-2.6,-10.5]]].forEach((pe,Me)=>_(pe,Me<3?.1:.05,S.roots,b.sewer,24));let L=new Re(new sa(.3,.02,8,28),S.crack);L.position.copy(I),L.rotation.y=Math.PI/2,L.userData.noAO=!0,b.sewer.add(L),[[-4.55],[4.55]].forEach(([pe])=>E([c-6,-3.3,pe],[c+6.2,-3.3,pe],.11,S.tile,b.found)),[[c-6],[c+6.2]].forEach(([pe])=>E([pe,-3.3,-4.55],[pe,-3.3,4.55],.11,S.tile,b.found));let U=_([[l,-3.3,4.55],[l,-3.3,3],[l,-3.1,1.9]],.09,S.tile,b.found,12),V=new Re(new Ot(.34,.34,.75,22,1,!0),S.sump);V.position.set(l,-3.05,1.6),V.userData.noPick=!0,b.found.add(V);let B=_([[l,-2.55,1.6],[l,-1.2,1.6],[l,-1.2,6.8],[l,.1,6.8]],.075,S.sump,b.found,24);R(U,10,.8,7320831,b.found,.16),R(B,14,1.8,7320831,b.found,.18),_([[.62,-.15,4.27],[.55,-.55,4.27],[.74,-.95,4.27],[.5,-1.4,4.27],[.7,-1.9,4.27],[.52,-2.5,4.27]],.022,S.crack,b.found,30);let G=new Sn(new mn({map:_r("rgba(255,90,70,0.9)","rgba(255,60,40,0)"),transparent:!0,depthWrite:!1,blending:Bt,opacity:.6}));G.position.set(.62,-1.4,4.5),G.scale.set(2.2,3.4,1),G.userData.noAO=!0,b.found.add(G);let O=n?0:t>=1?520:200,q=new St,K=new Float32Array(O*3),ie=new Float32Array(O*2),ve=pe=>{K[pe*3]=r()*(Vi-.06),K[pe*3+1]=-8.6+r()*1.4,K[pe*3+2]=(r()-.5)*14-1.5,ie[pe*2]=.6+r()*.9,ie[pe*2+1]=r()*6.28};for(let pe=0;pe<O;pe++)ve(pe),K[pe*3+1]=-8.6+r()*5.6;q.setAttribute("position",new _t(K,3));let De=new En(q,new gn({size:.42,map:a,color:new Be(14257407).multiplyScalar(2.6),transparent:!0,depthWrite:!1,blending:Bt,toneMapped:!1}));De.frustumCulled=!1,De.userData.noAO=!0,De.raycast=()=>{},b.radon.add(De);let Le={x:-1.2,z:-1.5},Ye={ugWater:o(l,-2.4,21),ugGas:o(l+.1,-1.3,14),ugSewer:o(l,-3.7,-16),ugRoots:I.clone(),ugSewerMain:o(l,-3.95,-18.2),ugTile:o(l,-3.3,4.55),ugSump:o(l,-3.1,1.6),ugCrack:o(l,-1.5,4.3),ugRadon:o(-1.2,-6,-1.5),ugMeter:o(l+.1,1.2,4.25),ugMain:o(l,-2.4,22.8),ugGasMain:o(l,-1.3,24.7)},Y=o(0,0,0),ne={cx:-1e3};function ye(pe,Me,Ue,je){let fe=ht(0,1,pe.section),he=pe.section<.002?-1e3:ft(-60,pe.cutX,fe);if(ne.cx=he,s.visible=pe.section>.002,!s.visible)return he;if(d.position.x=he+Vi,p.position.x=he+Vi,g.position.x=he+Vi-.02,x.position.x=he+Vi,Ye.ugRadon.x=he+Vi*.5,Object.entries(b).forEach(([Z,se])=>{let ue=Me===Z||Me==="street"&&(Z==="water"||Z==="gas"),Te=!Me||ue?1:.2;se.userData.al=ft(se.userData.al??Te,Te,Math.min(1,je*5)),se.traverse(we=>{we.material&&we.material.isMeshStandardMaterial&&(we.material.emissiveIntensity=ue?.6:.12)})}),S.crack.color.setRGB(3,.5,.35).multiplyScalar(.7+.3*Math.sin(Ue*5)),w.forEach(Z=>{let se=Z.group.userData.al??1;if(Z.pts.visible=se>.02,!Z.pts.visible)return;let ue=Z.pts.geometry.attributes.position.array;for(let Te=0;Te<Z.n;Te++){let we=(Te/Z.n+Ue*Z.speed/Z.len)%1;Z.curve.getPointAt(we,Y),ue[Te*3]=Y.x,ue[Te*3+1]=Y.y,ue[Te*3+2]=Y.z}Z.pts.geometry.attributes.position.needsUpdate=!0,Z.pts.material.opacity=se}),De.visible=O>0&&(b.radon.userData.al??1)>.2,De.visible){De.position.x=he;for(let Z=0;Z<O;Z++){let se=K[Z*3+1],ue=ht(-5.8,-3,se);K[Z*3+1]+=ie[Z*2]*je*.8,K[Z*3+2]+=((Le.z-K[Z*3+2])*ue*.5+Math.sin(Ue*.8+ie[Z*2+1])*.1)*je,K[Z*3+1]>-2.95&&ve(Z)}q.attributes.position.needsUpdate=!0,De.material.opacity=b.radon.userData.al??1}return he}return{group:s,update:ye,ANCHORS:Ye,groups:b,state:ne}}function jh(i){i.updateWorldMatrix(!0,!0);let e=new st().copy(i.matrixWorld).invert(),t=new st,n=new Map,s=[],r=l=>{for(let u=l;u&&u!==i;u=u.parent)if(u.userData.sys||u.userData.keep||u.userData.level)return!0;return!1},a=l=>Array.isArray(l.material)?l.geometry.groups.map(u=>{let f=l.geometry.clone(),d=l.geometry.index;return f.clearGroups(),d?f.setIndex(Array.from(d.array.slice(u.start,u.start+u.count))):f.deleteAttribute("position"),{m:l.material[u.materialIndex],g:f}}):[{m:l.material,g:l.geometry.clone()}];i.traverse(l=>{if(!l.isMesh||l.isInstancedMesh||l===i||!l.material||!l.visible||r(l)||l.children.length||!l.geometry.index&&Array.isArray(l.material)||(Array.isArray(l.material)?l.material:[l.material]).some(f=>!f||f.userData.pane))return;t.multiplyMatrices(e,l.matrixWorld),a(l).forEach(({m:f,g:d})=>{let h=[f.uuid,+l.castShadow,+l.receiveShadow,+!!l.userData.noAO,+!!l.userData.noPick,l.renderOrder].join("|"),p=n.get(h);p||n.set(h,p={m:f,cast:l.castShadow,recv:l.receiveShadow,noAO:!!l.userData.noAO,noPick:!!l.userData.noPick,ro:l.renderOrder,geos:[],owners:new Set}),d.attributes.uv||d.setAttribute("uv",new _t(new Float32Array(d.attributes.position.count*2),2)),d.applyMatrix4(t),p.geos.push(d),p.owners.add(l)}),s.push(l)});let o=0;n.forEach(l=>{if(l.geos.length<2){l.geos.forEach(p=>p.dispose());return}let u=Object.keys(l.geos[0].attributes).filter(p=>l.geos.every(x=>x.attributes[p]));l.geos.forEach(p=>{for(let x of Object.keys(p.attributes))u.includes(x)||p.deleteAttribute(x)});let f=l.geos.some(p=>!p.index)?l.geos.map(p=>p.index?p.toNonIndexed():p):l.geos,d=os(f);if(!d)return;d.computeBoundingSphere();let h=new Re(d,l.m);h.castShadow=l.cast,h.receiveShadow=l.recv,h.renderOrder=l.ro,l.noAO&&(h.userData.noAO=!0),l.noPick&&(h.userData.noPick=!0),i.add(h),o++,l.done=!0});let c=new Set;return n.forEach(l=>{l.done||l.owners.forEach(u=>c.add(u))}),s.forEach(l=>{!c.has(l)&&l.parent&&(l.parent.remove(l),l.geometry.dispose())}),o}function Ff(i,e){i.updateWorldMatrix(!0,!0);let t=new st().copy(i.matrixWorld).invert(),n=new st,s=[],r=[];if(i.traverse(c=>{c.isLineSegments&&c.material===e&&r.push(c)}),r.forEach(c=>{let l=c.geometry.clone();for(let u of Object.keys(l.attributes))u!=="position"&&l.deleteAttribute(u);l.applyMatrix4(n.multiplyMatrices(t,c.matrixWorld)),s.push(l)}),s.length<2)return 0;let a=os(s.map(c=>c.index?c.toNonIndexed():c));if(!a)return 0;let o=new yi(a,e);return o.raycast=()=>{},o.userData.noAO=!0,i.add(o),r.forEach(c=>{c.parent&&c.parent.remove(c),c.geometry.dispose()}),r.length}function $_(){let i=performance.now(),e=[],t=z=>e.push([z,Math.round(performance.now()-i)]),n=document.getElementById("stage"),s=document.documentElement,r=()=>window.dispatchEvent(new Event("hause:stage-ready")),a=()=>{s.classList.add("no-webgl"),r()};if(!n)return a();let o=window.matchMedia("(prefers-reduced-motion: reduce)").matches,c=of(),l=navigator.hardwareConcurrency||4,u=typeof window.HAUSE_QUALITY=="number"?window.HAUSE_QUALITY:c?l>=6?1:0:l>=6?2:1;try{let z=document.createElement("canvas"),me=z.getContext("webgl2");if(!me)return a();let xe=me.getExtension("WEBGL_lose_context");xe&&xe.loseContext()}catch{return a()}let f;try{if(f=new tc({canvas:n,antialias:u===0,powerPreference:"high-performance"}),!f.getContext())throw new Error("no gl")}catch{return a()}n.addEventListener("webglcontextlost",z=>{z.preventDefault(),O=!1,s.classList.add("no-webgl")}),f.toneMapping=is,f.toneMappingExposure=1,f.shadowMap.enabled=!0,f.shadowMap.type=ys;let d=new Fn(new C(1,0,0),1e3);f.clippingPlanes=[d],cf(f.capabilities.getMaxAnisotropy()),hf(u);let h=new ms;h.environmentIntensity=.6,h.fog=new kr(1317678,70,360);let p=new fn(30,1,.3,1400);t("renderer");let x=bf(f,h);t("sky");let{M:g,T:m}=Ef();t("materials+textures");let S=_r(),b=Mf(),_=Rf({M:g,T:m,markTex:b,glowTex:S});h.add(_.house),t("house");let E=If({M:g,T:m,glowTex:S,markTex:b,tier:u,reduce:o});h.add(E.world),t("world");let w=Df({house:_.house,reduce:o}),R=Uf({M:g,layers:_.layers,glowTex:S}),v=Nf({scene:h,M:g,tier:u,reduce:o});Object.values(_.layers).forEach(z=>{Ff(z,_.edgeMat),jh(z)}),jh(E.props),t("systems+interior+underground+merge");let A=new oa(10466518,1709842,.5),P=new cr(16769728,3);P.castShadow=!0,P.shadow.mapSize.set(u>=2?2048:1024,u>=2?2048:1024),Object.assign(P.shadow.camera,{left:-26,right:26,top:26,bottom:-26,near:5,far:240}),P.shadow.bias=-3e-4,P.shadow.normalBias=.04,P.shadow.radius=u>=2?2.5:1.5,P.target.position.set(0,3,0);let F=new cr(9085656,.6);F.position.copy(x.U.uMoonDir.value).multiplyScalar(60),h.add(A,P,P.target,F);let M={explode:0,radius:36,theta:.55,phi:1.36,ty:4.2,tx:-6,time:19.4,marks:0,ground:1,orbit:.04,visible:1,ghost:0,cut:0,lift:0,thermal:0,netE:0,netW:0,netA:0,netR:0,lensY:0,fx:0,fz:0,beacons:0,section:0,cutX:.45,season:0,snowfall:1,smoke:1,melt:0,icicles:0,aurora:0},I=Object.assign({level:null,focusSys:null,netFocus:null,ugFocus:null,interactive:!1},M),L=["explode","radius","phi","ty","tx","time","marks","ground","visible","ghost","cut","lift","thermal","netE","netW","netA","netR","lensY","fx","fz","beacons","section","cutX","season","snowfall","smoke","melt","icicles","aurora"],U=0,V=1,B=1,G=1,O=!0,q=0,K=-9,ie={set(z){Object.assign(I,z)},highlight(z){I.focusSys=z},selectLevel(z){I.level=z},levels:Va.map(z=>z.key),onPick:null,onHoverLevel:null,onFrame:null,onThermal:null,roomsLit:0,get quality(){return u}};window.HAUSE_STAGE=ie;let ve=new Be(14256718),De=null;function Le(z){De=z,Object.keys(_.sys).forEach(me=>_.sys[me].mats.forEach(xe=>{me===z?(xe.emissive.copy(ve),xe.emissiveIntensity=.9):(xe.emissive.copy(xe.userData.baseEmissive),xe.emissiveIntensity=1)}))}let Ye=new Set;_.house.traverse(z=>{!z.isMesh||!z.material||(Array.isArray(z.material)?z.material:[z.material]).forEach(me=>{me.userData&&(me.userData.shell||me.userData.wall)&&Ye.add(me)})});let Y="",ne=!1;_.edgeMat.visible=!1;function ye(z,me){let xe=z.toFixed(3)+"|"+me.toFixed(3);if(xe===Y)return;Y=xe;let le=z>.01||me>.01;Ye.forEach(He=>{let ke=He.userData.pane,rt=He.userData.shell?z*(ke?.75:.9):0,tt=He.userData.wall?me*(ke?.8:.9):0;le!==ne&&(He.transparent=le||!!He.userData.alwaysTransparent,He.needsUpdate=!0),He.opacity=1-Math.max(rt,tt),He.depthWrite=Math.max(rt,tt)<.4}),ne=le,_.edgeMat.opacity=Math.max(z*.28,me*.16),_.edgeMat.visible=_.edgeMat.opacity>.01}let pe=Lf({scene:h,M:g,skipParents:Object.values(w.groups),onChange:z=>{E.setThermal(z),f.toneMapping=z?Hn:is,ie.onThermal&&ie.onThermal(z)}}),Me=new C;function Ue(z,me){return Me.copy(me),z.localToWorld(Me),Me.project(p),{x:(Me.x*.5+.5)*V,y:(-Me.y*.5+.5)*B,behind:Me.z>1}}let je=(z,me,xe)=>new C(z,me,xe),fe=Va.map(z=>({obj:_.layers[z.key],offset:je(Gt/2+1.4,{roof:7.8,upper:4.9,main:1.8,basement:-1.2,below:-2.8}[z.key],xt/2)}));ie.projectLevels=()=>fe.map(z=>Ue(z.obj,z.offset)),ie.projectAnchors=()=>{let z={};return Object.keys(_.ANCHORS).forEach(me=>{z[me]=Ue(_.house,_.ANCHORS[me])}),Object.keys(v.ANCHORS).forEach(me=>{z[me]=Ue(_.house,v.ANCHORS[me])}),z};let he={x:0,y:0,nx:0,ny:0},Z=null,se=new ua,ue=[];_.house.traverse(z=>{!z.isMesh||z.isInstancedMesh||!z.visible||z.userData.noPick||(z.geometry.computeBoundingSphere(),z.geometry.boundingSphere.radius>.3&&ue.push(z))});let Te=z=>{for(;z&&!z.userData.level;)z=z.parent;return z?z.userData.level:null};ie.pickAt=(z,me)=>{se.setFromCamera({x:z/V*2-1,y:-(me/B)*2+1},p);let xe=se.intersectObjects(ue,!1)[0];return xe?{level:Te(xe.object),sys:xe.object.userData.sys||null}:null},ie.pickCount=()=>ue.length,window.addEventListener("pointermove",z=>{he.nx=z.clientX/V*2-1,he.ny=z.clientY/B*2-1,Z&&(q=Z.theta0-(z.clientX-Z.x)*.006)},{passive:!0}),n.addEventListener("pointerdown",z=>{I.interactive&&(Z={x:z.clientX,theta0:q,t:performance.now()})}),window.addEventListener("pointerup",z=>{if(!Z)return;let me=Math.abs(z.clientX-Z.x)<6&&performance.now()-Z.t<400;if(Z=null,me&&I.interactive){se.setFromCamera({x:z.clientX/V*2-1,y:-(z.clientY/B)*2+1},p);let xe=se.intersectObjects(ue,!1)[0];xe&&ie.onPick&&ie.onPick(Te(xe.object),xe.object.userData.sys||null)}}),n.addEventListener("pointermove",z=>{if(!I.interactive||Z)return;se.setFromCamera({x:z.clientX/V*2-1,y:-(z.clientY/B)*2+1},p);let me=se.intersectObjects(ue,!1)[0],xe=me?Te(me.object):null;n.style.cursor=xe?"pointer":"grab",ie.onHoverLevel&&ie.onHoverLevel(xe)});let we=null;function Ge(){we&&we.dispose(),we=u>=1?Af(f,h,p,u,Math.round(V*G),Math.round(B*G)):null}function Ze(){V=window.innerWidth,B=window.innerHeight,G=Math.min(window.devicePixelRatio||1,u>=2?1.75:u===1?1.5:1.25),f.setPixelRatio(G),f.setSize(V,B,!1),p.aspect=V/B,p.fov=V<700?44:30,p.updateProjectionMatrix(),we&&we.setSize(Math.round(V*G),Math.round(B*G))}window.addEventListener("resize",Ze),Ze(),Ge();let H=new C;function dt(z,me){let xe=.5-.5*Math.cos(me*Math.PI*2),le=ft(7.5,5,xe),He=ft(18.3,21.9,xe),ke=ft(24,62,xe),rt=Math.PI*(z-le)/(He-le),tt=ke*Math.sin(rt),Zt=tt*Math.PI/180;return H.set(-Math.sin(rt)*Math.cos(Zt),Math.sin(Zt),Math.cos(rt)*Math.cos(Zt)).normalize(),tt}let nt=[[0,[.62,.6,.55]],[.16,[.7,.7,.55]],[.3,[.8,1,.62]],[.5,[.74,.95,.55]],[.68,[1.05,.88,.5]],[.82,[1,.72,.45]],[1,[.62,.6,.55]]];function D(z,me){let xe=0;for(;xe<nt.length-2&&nt[xe+1][0]<=z;)xe++;let[le,He]=nt[xe],[ke,rt]=nt[xe+1],tt=(z-le)/(ke-le);me.setRGB(ft(He[0],rt[0],tt),ft(He[1],rt[1],tt),ft(He[2],rt[2],tt))}let y=new C,J=new C,Q=new C,re=new C,Pe=new C,Ee={ug:0,section:0,cutX:.45,ground:1,ghost:0,cut:0,snow:1,roofSnow:1,snowfall:1,rain:0,leaves:0,smoke:1,melt:0,icicles:0,grow:0,leafTint:new Be(.3,.5,.15),explode:0,lift:0},ce=[[0,[.3,.3,.3]],[.22,[.62,.8,.28]],[.36,[.4,.62,.2]],[.55,[.3,.5,.15]],[.7,[.95,.7,.18]],[.82,[.9,.35,.1]],[1,[.5,.2,.08]]];function _e(z,me){let xe=0;for(;xe<ce.length-2&&ce[xe+1][0]<=z;)xe++;let[le,He]=ce[xe],[ke,rt]=ce[xe+1],tt=(z-le)/(ke-le);me.setRGB(ft(He[0],rt[0],tt),ft(He[1],rt[1],tt),ft(He[2],rt[2],tt))}let Oe=new Be(16777215),Qe=new Be,Ne=0;function Fe(z,me){U+=z;let xe=me?1:1-Math.exp(-z*(o?30:4.2));L.forEach(Jt=>{M[Jt]=ft(M[Jt],I[Jt],xe)}),M.theta=ft(M.theta,I.theta+(o?0:Math.sin(U*.08)*I.orbit)+q,xe),Va.forEach(Jt=>{let dn=_.layers[Jt.key],hi=Jt.key==="roof"?18*pt(M.lift,0,1):Jt.key==="upper"?12*pt(M.lift-1,0,1):Jt.key==="main"?9*pt(M.lift-2,0,1):0;dn.position.y=ft(dn.position.y,Jt.dy*M.explode+hi+(I.level===Jt.key?.9:0),xe)});let le=(M.season%1+1)%1,He=Math.max(1-ht(.1,.3,le),ht(.84,1,le)),ke=Math.max(1-ht(.06,.22,le),ht(.88,1,le));Ee.ug=0,Ee.beacons=M.beacons,Ee.section=M.section,Ee.cutX=M.cutX,Ee.ground=M.ground,Ee.ghost=M.ghost,Ee.cut=M.cut,Ee.lift=M.lift,Ee.snow=He,Ee.roofSnow=ke,Ee.explode=M.explode,Ee.grow=ht(.2,.34,le)*(1-ht(.78,.93,le)),_e(le,Ee.leafTint),Ee.rain=ht(.2,.24,le)*(1-ht(.3,.34,le))*(o?0:1),Ee.leaves=ht(.72,.78,le)*(1-ht(.9,.95,le))*(o?0:1),Ee.melt=Math.max(M.melt,1-ke),Ee.icicles=Math.max(M.icicles,ht(.03,.1,le)*(1-ht(.17,.26,le))+ht(.9,.97,le)*.5),Ee.snowfall=M.snowfall*(o?0:1)*(le<.05||le>.93?1:0),Ee.smoke=M.smoke*(1-ht(.12,.3,le)+ht(.8,.95,le)),D(le,E.U.uTint.value);let rt=dt(M.time,le),tt=ht(-5,10,rt);x.update({elev:rt,daylight:tt,sunDir:H,thermal:M.thermal,aurora:M.aurora*(1-tt),cloud:ft(.38,.62,ht(0,1,Math.abs(Math.sin(le*Math.PI*2)))),snowy:He>.5,voidK:pt(1-M.ground,0,1)},U),x.follow(p.position),h.fog.color.copy(x.horizon);let Zt=1-ht(0,28,rt);P.position.copy(H).multiplyScalar(110).add(P.target.position),P.color.setRGB(1,ft(.95,.62,Zt),ft(.88,.4,Zt)),P.intensity=3.6*ht(-4,6,rt)*(1-M.thermal),A.color.copy(x.zenith).lerp(Oe,.4),A.groundColor.setRGB(.1,.09,.08).lerp(Qe.setRGB(.55,.6,.72),He*.8*(.25+.75*tt)),A.intensity=(.5+.35*tt+.25*M.cut)*(1-M.thermal),F.intensity=.7*(1-tt)*(1-M.thermal),h.environmentIntensity=.5+.4*tt+.1*M.cut,f.toneMappingExposure=pe.on?1:ft(1.2,.95,tt),(me||U-K>.4)&&(x.refreshEnv(me),K=U),ye(M.ghost*(1-pt(M.explode*4,0,1)),M.cut),R.update(1-tt,M.cut);let tn=_.update(Ee,xe,U,tt,me?100:z);ie.roomsLit=Math.round(pt(tn,0,7)),_.extra.chimneyTop.getWorldPosition(re),E.update(Ee,U,z,tt,y,re,pt(tn/9,0,1));let Kn=I.focusSys;Object.keys(_.sys).forEach(Jt=>_.sys[Jt].marks.forEach(dn=>{let hi=Kn?Jt===Kn?1:M.marks*.35:M.marks;dn.material.opacity=ft(dn.material.opacity,hi,xe),dn.scale.setScalar(.95*(Jt===Kn?1+Math.sin(U*4)*.12:1)*(1+M.explode*.25))})),Kn!==De&&Le(Kn),w.update(M,I.netFocus,U,z);let Gi=v.update(Ee,I.ugFocus,U,z);d.constant=-Gi,pe.set(I.thermal>.5),pe.time.value=U,he.x=ft(he.x,he.nx,xe*.6),he.y=ft(he.y,he.ny,xe*.6);let li=M.theta+he.x*.08,ci=pt(M.phi+he.y*.04,.35,1.5),Qn=V<700;y.set(M.fx,M.ty+(Qn?-1.2:0),M.fz),J.set(Math.sin(ci)*Math.sin(li),Math.cos(ci),Math.sin(ci)*Math.cos(li)).multiplyScalar(M.radius*(Qn?1.25:1)).add(y),p.position.copy(J),p.lookAt(y),p.updateMatrixWorld(),Q.setFromMatrixColumn(p.matrixWorld,0),p.position.addScaledVector(Q,Qn?0:M.tx),p.updateMatrixWorld(),Pe.copy(y).applyMatrix4(p.matrixWorldInverse);let Ln=Math.max(.001,Pe.length());E.sight.value.set(Pe.x/Ln,Pe.y/Ln,Pe.z/Ln,Ln),Math.abs(M.lensY-Ne)>1e-4&&(Ne=M.lensY,Math.abs(Ne)<1e-4?p.clearViewOffset():p.setViewOffset(V,B,0,-Ne*B,V,B)),n.style.opacity=M.visible.toFixed(3)}let Ve={n:0,sum:0,last:0},$e=performance.now();function it(z){if(we){let me=we.gtao,xe=M.ghost>.05||M.cut>.05||pe.on||M.explode>.05;me&&(me.enabled=!xe),we.bloom&&(we.bloom.strength=pe.on?.9:.3+.55*(1-pt(H.y*4,0,1))),we.grade.uniforms.uSat.value=pe.on?1:1.05,we.render(z,U)}else f.render(h,p)}function X(z){let me=z-Ve.last;if(Ve.last=z,!(me>250||me<=0)&&(Ve.n++,Ve.n>40&&(Ve.sum+=me),Ve.n===130)){let xe=Ve.sum/90;xe>26&&u>1&&typeof window.HAUSE_QUALITY!="number"?(u--,Ge(),Ze(),P.shadow.mapSize.set(1024,1024),P.shadow.map&&P.shadow.map.dispose(),P.shadow.map=null):xe>34&&u===1&&G>1.01&&typeof window.HAUSE_QUALITY!="number"&&(G=1,f.setPixelRatio(1),f.setSize(V,B,!1),we&&we.setSize(V,B)),Ve={n:0,sum:0,last:z}}}function Ie(z){if(!O)return;let me=Math.min((z-$e)/1e3,.05);$e=z,Fe(me,!1),it(me),X(z),ie.onFrame&&ie.onFrame(),requestAnimationFrame(Ie)}ie.pause=()=>{O=!1},ie.resume=()=>{O||(O=!0,$e=performance.now(),Ve.last=0,requestAnimationFrame(Ie))},ie.settle=()=>{Fe(.016,!0),Fe(.016,!0),it(.016),ie.onFrame&&ie.onFrame()},window.HAUSE_DEBUG&&(ie.debug={scene:h,camera:p,renderer:f,S:M,target:I,H:_,Wd:E,sky:x,sun:P,hemi:A,moon:F}),ie.info=()=>({tier:u,calls:f.info.render.calls,triangles:f.info.render.triangles,pixelRatio:G,buildMs:ie.buildMs}),t("pre-first-render"),ie.settle(),t("first-render"),ie.laps=e,requestAnimationFrame(z=>{$e=z,requestAnimationFrame(Ie)}),ie.buildMs=Math.round(performance.now()-i),s.classList.add("has-webgl"),r()}$_();})();
