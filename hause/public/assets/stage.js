/* HAUSE 3D stage. Built from hause/src/stage with esbuild + three.js. Do not edit by hand. */
(()=>{var Hd=0,Wh=1,zd=2;var Ga=1,Gd=2,Fo=3,ya=0,es=1,li=2,Ai=0,_a=1,zn=2,Xh=3,Yh=4,B0=5;var Qs=100,kd=101,Vd=102,Wd=103,Xd=104,ka=200,Yd=201,qd=202,Zd=203,qh=204,Zh=205,kl=206,$d=207,Vl=208,Jd=209,Kd=210,Qd=211,jd=212,ep=213,tp=214,a0=0,o0=1,l0=2,xo=3,c0=4,u0=5,h0=6,f0=7,$h=0,np=1,ip=2,Us=0,Wl=1,Xl=2,Yl=3,Ma=4,ql=5,Zl=6,$l=7;var Jh=300,Ea=301,Va=302,H0=303,z0=304,Jl=306,Qn=1e3,ws=1001,d0=1002,Ri=1003,sp=1004;var Kl=1005;var Ni=1006,G0=1007;var Ur=1008;var zi=1009,Kh=1010,Qh=1011,Oo=1012,k0=1013,xr=1014,js=1015,hi=1016,V0=1017,W0=1018,Sa=1020,jh=35902,ef=35899,tf=1021,nf=1022,rs=1023,Cr=1026,Fr=1027,X0=1028,Y0=1029,ba=1030,q0=1031;var Z0=1033,Ql=33776,jl=33777,ec=33778,tc=33779,$0=35840,J0=35841,K0=35842,Q0=35843,j0=36196,eu=37492,tu=37496,nu=37488,iu=37489,nc=37490,su=37491,ru=37808,au=37809,ou=37810,lu=37811,cu=37812,uu=37813,hu=37814,fu=37815,du=37816,pu=37817,mu=37818,gu=37819,xu=37820,vu=37821,yu=36492,_u=36494,Mu=36495,Eu=36283,Su=36284,ic=36285,bu=36286;var hl=2300,p0=2301,i0=2302,Ph=2303,Ih=2400,Dh=2401,Lh=2402;var rp=3200,sf=3201;var sc=0,ap=1,vr="",vn="srgb",fl="srgb-linear",dl="linear",Ln="srgb";var s0=7680;var op=519,lp=512,cp=513,up=514,Tu=515,hp=516,fp=517,wu=518,dp=519,rf=35044;var af="300 es",gr=2e3,vo=2001;function Km(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Qm(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function pl(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function pp(){let i=pl("canvas");return i.style.display="block",i}var ed={},yo=null;function ml(...i){let e="THREE."+i.shift();yo?yo("log",e,...i):console.log(e,...i)}function mp(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Kt(...i){i=mp(i);let e="THREE."+i.shift();if(yo)yo("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function jt(...i){i=mp(i);let e="THREE."+i.shift();if(yo)yo("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Ua(...i){let e=i.join(" ");e in ed||(ed[e]=!0,Kt(...i))}function gp(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var xp={[a0]:o0,[l0]:h0,[c0]:f0,[xo]:u0,[o0]:a0,[h0]:l0,[f0]:c0,[u0]:xo},Pr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},us=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var r0=Math.PI/180,gl=180/Math.PI;function $r(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(us[i&255]+us[i>>8&255]+us[i>>16&255]+us[i>>24&255]+"-"+us[e&255]+us[e>>8&255]+"-"+us[e>>16&15|64]+us[e>>24&255]+"-"+us[t&63|128]+us[t>>8&255]+"-"+us[t>>16&255]+us[t>>24&255]+us[n&255]+us[n>>8&255]+us[n>>16&255]+us[n>>24&255]).toLowerCase()}function Mn(i,e,t){return Math.max(e,Math.min(t,i))}function jm(i,e){return(i%e+e)%e}function nh(i,e,t){return(1-t)*i+t*e}function wr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Kn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var ff=class ff{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Mn(this.x,e.x,t.x),this.y=Mn(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Mn(this.x,e,t),this.y=Mn(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Mn(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Mn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ff.prototype.isVector2=!0;var nt=ff,Bn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],d=n[s+3],p=r[a+0],u=r[a+1],f=r[a+2],x=r[a+3];if(d!==x||c!==p||l!==u||h!==f){let g=c*p+l*u+h*f+d*x;g<0&&(p=-p,u=-u,f=-f,x=-x,g=-g);let m=1-o;if(g<.9995){let _=Math.acos(g),b=Math.sin(_);m=Math.sin(m*_)/b,o=Math.sin(o*_)/b,c=c*m+p*o,l=l*m+u*o,h=h*m+f*o,d=d*m+x*o}else{c=c*m+p*o,l=l*m+u*o,h=h*m+f*o,d=d*m+x*o;let _=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=_,l*=_,h*=_,d*=_}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],d=r[a],p=r[a+1],u=r[a+2],f=r[a+3];return e[t]=o*f+h*d+c*u-l*p,e[t+1]=c*f+h*p+l*d-o*u,e[t+2]=l*f+h*u+o*p-c*d,e[t+3]=h*f-o*d-c*p-l*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),d=o(r/2),p=c(n/2),u=c(s/2),f=c(r/2);switch(a){case"XYZ":this._x=p*h*d+l*u*f,this._y=l*u*d-p*h*f,this._z=l*h*f+p*u*d,this._w=l*h*d-p*u*f;break;case"YXZ":this._x=p*h*d+l*u*f,this._y=l*u*d-p*h*f,this._z=l*h*f-p*u*d,this._w=l*h*d+p*u*f;break;case"ZXY":this._x=p*h*d-l*u*f,this._y=l*u*d+p*h*f,this._z=l*h*f+p*u*d,this._w=l*h*d-p*u*f;break;case"ZYX":this._x=p*h*d-l*u*f,this._y=l*u*d+p*h*f,this._z=l*h*f-p*u*d,this._w=l*h*d+p*u*f;break;case"YZX":this._x=p*h*d+l*u*f,this._y=l*u*d+p*h*f,this._z=l*h*f-p*u*d,this._w=l*h*d-p*u*f;break;case"XZY":this._x=p*h*d-l*u*f,this._y=l*u*d-p*h*f,this._z=l*h*f+p*u*d,this._w=l*h*d+p*u*f;break;default:Kt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],d=t[10],p=n+o+d;if(p>0){let u=.5/Math.sqrt(p+1);this._w=.25/u,this._x=(h-c)*u,this._y=(r-l)*u,this._z=(a-s)*u}else if(n>o&&n>d){let u=2*Math.sqrt(1+n-o-d);this._w=(h-c)/u,this._x=.25*u,this._y=(s+a)/u,this._z=(r+l)/u}else if(o>d){let u=2*Math.sqrt(1+o-n-d);this._w=(r-l)/u,this._x=(s+a)/u,this._y=.25*u,this._z=(c+h)/u}else{let u=2*Math.sqrt(1+d-n-o);this._w=(a-s)/u,this._x=(r+l)/u,this._y=(c+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mn(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},df=class df{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(td.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(td.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),h=2*(o*t-r*s),d=2*(r*n-a*t);return this.x=t+c*l+a*d-o*h,this.y=n+c*h+o*l-r*d,this.z=s+c*d+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Mn(this.x,e.x,t.x),this.y=Mn(this.y,e.y,t.y),this.z=Mn(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Mn(this.x,e,t),this.y=Mn(this.y,e,t),this.z=Mn(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Mn(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ih.copy(this).projectOnVector(e),this.sub(ih)}reflect(e){return this.sub(ih.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Mn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};df.prototype.isVector3=!0;var F=df,ih=new F,td=new Bn,pf=class pf{constructor(e,t,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],p=n[2],u=n[5],f=n[8],x=s[0],g=s[3],m=s[6],_=s[1],b=s[4],y=s[7],M=s[2],T=s[5],R=s[8];return r[0]=a*x+o*_+c*M,r[3]=a*g+o*b+c*T,r[6]=a*m+o*y+c*R,r[1]=l*x+h*_+d*M,r[4]=l*g+h*b+d*T,r[7]=l*m+h*y+d*R,r[2]=p*x+u*_+f*M,r[5]=p*g+u*b+f*T,r[8]=p*m+u*y+f*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=h*a-o*l,p=o*c-h*r,u=l*r-a*c,f=t*d+n*p+s*u;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/f;return e[0]=d*x,e[1]=(s*l-h*n)*x,e[2]=(o*n-s*a)*x,e[3]=p*x,e[4]=(h*t-s*c)*x,e[5]=(s*r-o*t)*x,e[6]=u*x,e[7]=(n*c-l*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return Ua("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(sh.makeScale(e,t)),this}rotate(e){return Ua("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(sh.makeRotation(-e)),this}translate(e,t){return Ua("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(sh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};pf.prototype.isMatrix3=!0;var cn=pf,sh=new cn,nd=new cn().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),id=new cn().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function e1(){let i={enabled:!0,workingColorSpace:fl,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Ln&&(s.r=Jr(s.r),s.g=Jr(s.g),s.b=Jr(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ln&&(s.r=go(s.r),s.g=go(s.g),s.b=go(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===vr?dl:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ua("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ua("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[fl]:{primaries:e,whitePoint:n,transfer:dl,toXYZ:nd,fromXYZ:id,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:vn},outputColorSpaceConfig:{drawingBufferColorSpace:vn}},[vn]:{primaries:e,whitePoint:n,transfer:Ln,toXYZ:nd,fromXYZ:id,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:vn}}}),i}var bn=e1();function Jr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function go(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ka,m0=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ka===void 0&&(Ka=pl("canvas")),Ka.width=e.width,Ka.height=e.height;let s=Ka.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Ka}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=pl("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Jr(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Jr(t[n]/255)*255):t[n]=Jr(t[n]);return{data:t,width:e.width,height:e.height}}else return Kt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},t1=0,_o=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:t1++}),this.uuid=$r(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(rh(s[a].image)):r.push(rh(s[a]))}else r=rh(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function rh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?m0.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Kt("Texture: Unable to serialize Texture."),{})}var n1=0,ah=new F,Ms=class i extends Pr{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=ws,s=ws,r=Ni,a=Ur,o=rs,c=zi,l=i.DEFAULT_ANISOTROPY,h=vr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:n1++}),this.uuid=$r(),this.name="",this.source=new _o(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new cn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ah).x}get height(){return this.source.getSize(ah).y}get depth(){return this.source.getSize(ah).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Kt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Kt(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Jh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Qn:e.x=e.x-Math.floor(e.x);break;case ws:e.x=e.x<0?0:1;break;case d0:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Qn:e.y=e.y-Math.floor(e.y);break;case ws:e.y=e.y<0?0:1;break;case d0:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ms.DEFAULT_IMAGE=null;Ms.DEFAULT_MAPPING=Jh;Ms.DEFAULT_ANISOTROPY=1;var mf=class mf{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],d=c[8],p=c[1],u=c[5],f=c[9],x=c[2],g=c[6],m=c[10];if(Math.abs(h-p)<.01&&Math.abs(d-x)<.01&&Math.abs(f-g)<.01){if(Math.abs(h+p)<.1&&Math.abs(d+x)<.1&&Math.abs(f+g)<.1&&Math.abs(l+u+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(l+1)/2,y=(u+1)/2,M=(m+1)/2,T=(h+p)/4,R=(d+x)/4,v=(f+g)/4;return b>y&&b>M?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=T/n,r=R/n):y>M?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=T/s,r=v/s):M<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),n=R/r,s=v/r),this.set(n,s,r,t),this}let _=Math.sqrt((g-f)*(g-f)+(d-x)*(d-x)+(p-h)*(p-h));return Math.abs(_)<.001&&(_=1),this.x=(g-f)/_,this.y=(d-x)/_,this.z=(p-h)/_,this.w=Math.acos((l+u+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Mn(this.x,e.x,t.x),this.y=Mn(this.y,e.y,t.y),this.z=Mn(this.z,e.z,t.z),this.w=Mn(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Mn(this.x,e,t),this.y=Mn(this.y,e,t),this.z=Mn(this.z,e,t),this.w=Mn(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Mn(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};mf.prototype.isVector4=!0;var ai=mf,g0=class extends Pr{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ni,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ai(0,0,e,t),this.scissorTest=!1,this.viewport=new ai(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new Ms(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Ni,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new _o(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},oi=class extends g0{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},xl=class extends Ms{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ri,this.minFilter=Ri,this.wrapR=ws,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var x0=class extends Ms{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ri,this.minFilter=Ri,this.wrapR=ws,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var O0=class O0{constructor(e,t,n,s,r,a,o,c,l,h,d,p,u,f,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,h,d,p,u,f,x,g)}set(e,t,n,s,r,a,o,c,l,h,d,p,u,f,x,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=c,m[2]=l,m[6]=h,m[10]=d,m[14]=p,m[3]=u,m[7]=f,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new O0().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Qa.setFromMatrixColumn(e,0).length(),r=1/Qa.setFromMatrixColumn(e,1).length(),a=1/Qa.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let p=a*h,u=a*d,f=o*h,x=o*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=u+f*l,t[5]=p-x*l,t[9]=-o*c,t[2]=x-p*l,t[6]=f+u*l,t[10]=a*c}else if(e.order==="YXZ"){let p=c*h,u=c*d,f=l*h,x=l*d;t[0]=p+x*o,t[4]=f*o-u,t[8]=a*l,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=u*o-f,t[6]=x+p*o,t[10]=a*c}else if(e.order==="ZXY"){let p=c*h,u=c*d,f=l*h,x=l*d;t[0]=p-x*o,t[4]=-a*d,t[8]=f+u*o,t[1]=u+f*o,t[5]=a*h,t[9]=x-p*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let p=a*h,u=a*d,f=o*h,x=o*d;t[0]=c*h,t[4]=f*l-u,t[8]=p*l+x,t[1]=c*d,t[5]=x*l+p,t[9]=u*l-f,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let p=a*c,u=a*l,f=o*c,x=o*l;t[0]=c*h,t[4]=x-p*d,t[8]=f*d+u,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=u*d+f,t[10]=p-x*d}else if(e.order==="XZY"){let p=a*c,u=a*l,f=o*c,x=o*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=p*d+x,t[5]=a*h,t[9]=u*d-f,t[2]=f*d-u,t[6]=o*h,t[10]=x*d+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(i1,e,s1)}lookAt(e,t,n){let s=this.elements;return Ps.subVectors(e,t),Ps.lengthSq()===0&&(Ps.z=1),Ps.normalize(),oa.crossVectors(n,Ps),oa.lengthSq()===0&&(Math.abs(n.z)===1?Ps.x+=1e-4:Ps.z+=1e-4,Ps.normalize(),oa.crossVectors(n,Ps)),oa.normalize(),Tc.crossVectors(Ps,oa),s[0]=oa.x,s[4]=Tc.x,s[8]=Ps.x,s[1]=oa.y,s[5]=Tc.y,s[9]=Ps.y,s[2]=oa.z,s[6]=Tc.z,s[10]=Ps.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],p=n[9],u=n[13],f=n[2],x=n[6],g=n[10],m=n[14],_=n[3],b=n[7],y=n[11],M=n[15],T=s[0],R=s[4],v=s[8],A=s[12],I=s[1],G=s[5],w=s[9],U=s[13],N=s[2],B=s[6],Z=s[10],H=s[14],Y=s[3],q=s[7],W=s[11],J=s[15];return r[0]=a*T+o*I+c*N+l*Y,r[4]=a*R+o*G+c*B+l*q,r[8]=a*v+o*w+c*Z+l*W,r[12]=a*A+o*U+c*H+l*J,r[1]=h*T+d*I+p*N+u*Y,r[5]=h*R+d*G+p*B+u*q,r[9]=h*v+d*w+p*Z+u*W,r[13]=h*A+d*U+p*H+u*J,r[2]=f*T+x*I+g*N+m*Y,r[6]=f*R+x*G+g*B+m*q,r[10]=f*v+x*w+g*Z+m*W,r[14]=f*A+x*U+g*H+m*J,r[3]=_*T+b*I+y*N+M*Y,r[7]=_*R+b*G+y*B+M*q,r[11]=_*v+b*w+y*Z+M*W,r[15]=_*A+b*U+y*H+M*J,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],d=e[6],p=e[10],u=e[14],f=e[3],x=e[7],g=e[11],m=e[15],_=c*u-l*p,b=o*u-l*d,y=o*p-c*d,M=a*u-l*h,T=a*p-c*h,R=a*d-o*h;return t*(x*_-g*b+m*y)-n*(f*_-g*M+m*T)+s*(f*b-x*M+m*R)-r*(f*y-x*T+g*R)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],h=e[10];return t*(a*h-o*l)-n*(r*h-o*c)+s*(r*l-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=e[9],p=e[10],u=e[11],f=e[12],x=e[13],g=e[14],m=e[15],_=t*o-n*a,b=t*c-s*a,y=t*l-r*a,M=n*c-s*o,T=n*l-r*o,R=s*l-r*c,v=h*x-d*f,A=h*g-p*f,I=h*m-u*f,G=d*g-p*x,w=d*m-u*x,U=p*m-u*g,N=_*U-b*w+y*G+M*I-T*A+R*v;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/N;return e[0]=(o*U-c*w+l*G)*B,e[1]=(s*w-n*U-r*G)*B,e[2]=(x*R-g*T+m*M)*B,e[3]=(p*T-d*R-u*M)*B,e[4]=(c*I-a*U-l*A)*B,e[5]=(t*U-s*I+r*A)*B,e[6]=(g*y-f*R-m*b)*B,e[7]=(h*R-p*y+u*b)*B,e[8]=(a*w-o*I+l*v)*B,e[9]=(n*I-t*w-r*v)*B,e[10]=(f*T-x*y+m*_)*B,e[11]=(d*y-h*T-u*_)*B,e[12]=(o*A-a*G-c*v)*B,e[13]=(t*G-n*A+s*v)*B,e[14]=(x*b-f*M-g*_)*B,e[15]=(h*M-d*b+p*_)*B,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,d=o+o,p=r*l,u=r*h,f=r*d,x=a*h,g=a*d,m=o*d,_=c*l,b=c*h,y=c*d,M=n.x,T=n.y,R=n.z;return s[0]=(1-(x+m))*M,s[1]=(u+y)*M,s[2]=(f-b)*M,s[3]=0,s[4]=(u-y)*T,s[5]=(1-(p+m))*T,s[6]=(g+_)*T,s[7]=0,s[8]=(f+b)*R,s[9]=(g-_)*R,s[10]=(1-(p+x))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Qa.set(s[0],s[1],s[2]).length(),o=Qa.set(s[4],s[5],s[6]).length(),c=Qa.set(s[8],s[9],s[10]).length();r<0&&(a=-a),dr.copy(this);let l=1/a,h=1/o,d=1/c;return dr.elements[0]*=l,dr.elements[1]*=l,dr.elements[2]*=l,dr.elements[4]*=h,dr.elements[5]*=h,dr.elements[6]*=h,dr.elements[8]*=d,dr.elements[9]*=d,dr.elements[10]*=d,t.setFromRotationMatrix(dr),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,s,r,a,o=gr,c=!1){let l=this.elements,h=2*r/(t-e),d=2*r/(n-s),p=(t+e)/(t-e),u=(n+s)/(n-s),f,x;if(c)f=r/(a-r),x=a*r/(a-r);else if(o===gr)f=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===vo)f=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=d,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=gr,c=!1){let l=this.elements,h=2/(t-e),d=2/(n-s),p=-(t+e)/(t-e),u=-(n+s)/(n-s),f,x;if(c)f=1/(a-r),x=a/(a-r);else if(o===gr)f=-2/(a-r),x=-(a+r)/(a-r);else if(o===vo)f=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=p,l[1]=0,l[5]=d,l[9]=0,l[13]=u,l[2]=0,l[6]=0,l[10]=f,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};O0.prototype.isMatrix4=!0;var zt=O0,Qa=new F,dr=new zt,i1=new F(0,0,0),s1=new F(1,1,1),oa=new F,Tc=new F,Ps=new F,sd=new zt,rd=new Bn,Ui=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],d=s[2],p=s[6],u=s[10];switch(t){case"XYZ":this._y=Math.asin(Mn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Mn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Mn(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Mn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,u),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Mn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-Mn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:Kt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return sd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(sd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return rd.setFromEuler(this),this.setFromQuaternion(rd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ui.DEFAULT_ORDER="XYZ";var Mo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},r1=0,ad=new F,ja=new Bn,Wr=new zt,wc=new F,Qo=new F,a1=new F,o1=new Bn,od=new F(1,0,0),ld=new F(0,1,0),cd=new F(0,0,1),ud={type:"added"},l1={type:"removed"},eo={type:"childadded",child:null},oh={type:"childremoved",child:null},yi=class i extends Pr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:r1++}),this.uuid=$r(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new F,t=new Ui,n=new Bn,s=new F(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new zt},normalMatrix:{value:new cn}}),this.matrix=new zt,this.matrixWorld=new zt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ja.setFromAxisAngle(e,t),this.quaternion.multiply(ja),this}rotateOnWorldAxis(e,t){return ja.setFromAxisAngle(e,t),this.quaternion.premultiply(ja),this}rotateX(e){return this.rotateOnAxis(od,e)}rotateY(e){return this.rotateOnAxis(ld,e)}rotateZ(e){return this.rotateOnAxis(cd,e)}translateOnAxis(e,t){return ad.copy(e).applyQuaternion(this.quaternion),this.position.add(ad.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(od,e)}translateY(e){return this.translateOnAxis(ld,e)}translateZ(e){return this.translateOnAxis(cd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?wc.copy(e):wc.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Qo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wr.lookAt(Qo,wc,this.up):Wr.lookAt(wc,Qo,this.up),this.quaternion.setFromRotationMatrix(Wr),s&&(Wr.extractRotation(s.matrixWorld),ja.setFromRotationMatrix(Wr),this.quaternion.premultiply(ja.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(jt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ud),eo.child=e,this.dispatchEvent(eo),eo.child=null):jt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(l1),oh.child=e,this.dispatchEvent(oh),oh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Wr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ud),eo.child=e,this.dispatchEvent(eo),eo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qo,e,a1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qo,o1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),d=a(e.shapes),p=a(e.skeletons),u=a(e.animations),f=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),p.length>0&&(n.skeletons=p),u.length>0&&(n.animations=u),f.length>0&&(n.nodes=f)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};yi.DEFAULT_UP=new F(0,1,0);yi.DEFAULT_MATRIX_AUTO_UPDATE=!0;yi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var yt=class extends yi{constructor(){super(),this.isGroup=!0,this.type="Group"}},c1={type:"move"},Eo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,n),m=this._getHandJoint(l,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],p=h.position.distanceTo(d.position),u=.02,f=.005;l.inputState.pinching&&p>u+f?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&p<=u-f&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(c1)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new yt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},vp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},la={h:0,s:0,l:0},Rc={h:0,s:0,l:0};function lh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Et=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bn.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=bn.workingColorSpace){return this.r=e,this.g=t,this.b=n,bn.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=bn.workingColorSpace){if(e=jm(e,1),t=Mn(t,0,1),n=Mn(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=lh(a,r,e+1/3),this.g=lh(a,r,e),this.b=lh(a,r,e-1/3)}return bn.colorSpaceToWorking(this,s),this}setStyle(e,t=vn){function n(r){r!==void 0&&parseFloat(r)<1&&Kt("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Kt("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Kt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=vn){let n=vp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Kt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Jr(e.r),this.g=Jr(e.g),this.b=Jr(e.b),this}copyLinearToSRGB(e){return this.r=go(e.r),this.g=go(e.g),this.b=go(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vn){return bn.workingToColorSpace(hs.copy(this),e),Math.round(Mn(hs.r*255,0,255))*65536+Math.round(Mn(hs.g*255,0,255))*256+Math.round(Mn(hs.b*255,0,255))}getHexString(e=vn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=bn.workingColorSpace){bn.workingToColorSpace(hs.copy(this),t);let n=hs.r,s=hs.g,r=hs.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=bn.workingColorSpace){return bn.workingToColorSpace(hs.copy(this),t),e.r=hs.r,e.g=hs.g,e.b=hs.b,e}getStyle(e=vn){bn.workingToColorSpace(hs.copy(this),e);let t=hs.r,n=hs.g,s=hs.b;return e!==vn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(la),this.setHSL(la.h+e,la.s+t,la.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(la),e.getHSL(Rc);let n=nh(la.h,Rc.h,t),s=nh(la.s,Rc.s,t),r=nh(la.l,Rc.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},hs=new Et;Et.NAMES=vp;var vl=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Et(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Fa=class extends yi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ui,this.environmentIntensity=1,this.environmentRotation=new Ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},pr=new F,Xr=new F,ch=new F,Yr=new F,to=new F,no=new F,hd=new F,uh=new F,hh=new F,fh=new F,dh=new ai,ph=new ai,mh=new ai,Rr=class i{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),pr.subVectors(e,t),s.cross(pr);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){pr.subVectors(s,t),Xr.subVectors(n,t),ch.subVectors(e,t);let a=pr.dot(pr),o=pr.dot(Xr),c=pr.dot(ch),l=Xr.dot(Xr),h=Xr.dot(ch),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;let p=1/d,u=(l*c-o*h)*p,f=(a*h-o*c)*p;return r.set(1-u-f,f,u)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Yr)===null?!1:Yr.x>=0&&Yr.y>=0&&Yr.x+Yr.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,Yr)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Yr.x),c.addScaledVector(a,Yr.y),c.addScaledVector(o,Yr.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return dh.setScalar(0),ph.setScalar(0),mh.setScalar(0),dh.fromBufferAttribute(e,t),ph.fromBufferAttribute(e,n),mh.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(dh,r.x),a.addScaledVector(ph,r.y),a.addScaledVector(mh,r.z),a}static isFrontFacing(e,t,n,s){return pr.subVectors(n,t),Xr.subVectors(e,t),pr.cross(Xr).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pr.subVectors(this.c,this.b),Xr.subVectors(this.a,this.b),pr.cross(Xr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;to.subVectors(s,n),no.subVectors(r,n),uh.subVectors(e,n);let c=to.dot(uh),l=no.dot(uh);if(c<=0&&l<=0)return t.copy(n);hh.subVectors(e,s);let h=to.dot(hh),d=no.dot(hh);if(h>=0&&d<=h)return t.copy(s);let p=c*d-h*l;if(p<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(to,a);fh.subVectors(e,r);let u=to.dot(fh),f=no.dot(fh);if(f>=0&&u<=f)return t.copy(r);let x=u*l-c*f;if(x<=0&&l>=0&&f<=0)return o=l/(l-f),t.copy(n).addScaledVector(no,o);let g=h*f-u*d;if(g<=0&&d-h>=0&&u-f>=0)return hd.subVectors(r,s),o=(d-h)/(d-h+(u-f)),t.copy(s).addScaledVector(hd,o);let m=1/(g+x+p);return a=x*m,o=p*m,t.copy(n).addScaledVector(to,a).addScaledVector(no,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ir=class{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(mr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(mr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=mr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,mr):mr.fromBufferAttribute(r,a),mr.applyMatrix4(e.matrixWorld),this.expandByPoint(mr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ac.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ac.copy(n.boundingBox)),Ac.applyMatrix4(e.matrixWorld),this.union(Ac)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,mr),mr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(jo),Cc.subVectors(this.max,jo),io.subVectors(e.a,jo),so.subVectors(e.b,jo),ro.subVectors(e.c,jo),ca.subVectors(so,io),ua.subVectors(ro,so),Ia.subVectors(io,ro);let t=[0,-ca.z,ca.y,0,-ua.z,ua.y,0,-Ia.z,Ia.y,ca.z,0,-ca.x,ua.z,0,-ua.x,Ia.z,0,-Ia.x,-ca.y,ca.x,0,-ua.y,ua.x,0,-Ia.y,Ia.x,0];return!gh(t,io,so,ro,Cc)||(t=[1,0,0,0,1,0,0,0,1],!gh(t,io,so,ro,Cc))?!1:(Pc.crossVectors(ca,ua),t=[Pc.x,Pc.y,Pc.z],gh(t,io,so,ro,Cc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},qr=[new F,new F,new F,new F,new F,new F,new F,new F],mr=new F,Ac=new Ir,io=new F,so=new F,ro=new F,ca=new F,ua=new F,Ia=new F,jo=new F,Cc=new F,Pc=new F,Da=new F;function gh(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Da.fromArray(i,r);let o=s.x*Math.abs(Da.x)+s.y*Math.abs(Da.y)+s.z*Math.abs(Da.z),c=e.dot(Da),l=t.dot(Da),h=n.dot(Da);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Li=new F,Ic=new nt,u1=0,$t=class extends Pr{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:u1++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=rf,this.updateRanges=[],this.gpuType=js,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ic.fromBufferAttribute(this,t),Ic.applyMatrix3(e),this.setXY(t,Ic.x,Ic.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Li.fromBufferAttribute(this,t),Li.applyMatrix3(e),this.setXYZ(t,Li.x,Li.y,Li.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Li.fromBufferAttribute(this,t),Li.applyMatrix4(e),this.setXYZ(t,Li.x,Li.y,Li.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Li.fromBufferAttribute(this,t),Li.applyNormalMatrix(e),this.setXYZ(t,Li.x,Li.y,Li.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Li.fromBufferAttribute(this,t),Li.transformDirection(e),this.setXYZ(t,Li.x,Li.y,Li.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=wr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Kn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=wr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Kn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=wr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Kn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=wr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Kn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=wr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Kn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Kn(t,this.array),n=Kn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Kn(t,this.array),n=Kn(n,this.array),s=Kn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Kn(t,this.array),n=Kn(n,this.array),s=Kn(s,this.array),r=Kn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var yl=class extends $t{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var _l=class extends $t{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var qt=class extends $t{constructor(e,t,n){super(new Float32Array(e),t,n)}},h1=new Ir,el=new F,xh=new F,Dr=class{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):h1.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;el.subVectors(e,this.center);let t=el.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(el,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(el.copy(e.center).add(xh)),this.expandByPoint(el.copy(e.center).sub(xh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},f1=0,qs=new zt,vh=new yi,ao=new F,Is=new Ir,tl=new Ir,Zi=new F,en=class i extends Pr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:f1++}),this.uuid=$r(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Km(e)?_l:yl)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new cn().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return qs.makeRotationFromQuaternion(e),this.applyMatrix4(qs),this}rotateX(e){return qs.makeRotationX(e),this.applyMatrix4(qs),this}rotateY(e){return qs.makeRotationY(e),this.applyMatrix4(qs),this}rotateZ(e){return qs.makeRotationZ(e),this.applyMatrix4(qs),this}translate(e,t,n){return qs.makeTranslation(e,t,n),this.applyMatrix4(qs),this}scale(e,t,n){return qs.makeScale(e,t,n),this.applyMatrix4(qs),this}lookAt(e){return vh.lookAt(e),vh.updateMatrix(),this.applyMatrix4(vh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ao).negate(),this.translate(ao.x,ao.y,ao.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new qt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Kt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ir);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){jt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Is.setFromBufferAttribute(r),this.morphTargetsRelative?(Zi.addVectors(this.boundingBox.min,Is.min),this.boundingBox.expandByPoint(Zi),Zi.addVectors(this.boundingBox.max,Is.max),this.boundingBox.expandByPoint(Zi)):(this.boundingBox.expandByPoint(Is.min),this.boundingBox.expandByPoint(Is.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&jt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){jt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){let n=this.boundingSphere.center;if(Is.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];tl.setFromBufferAttribute(o),this.morphTargetsRelative?(Zi.addVectors(Is.min,tl.min),Is.expandByPoint(Zi),Zi.addVectors(Is.max,tl.max),Is.expandByPoint(Zi)):(Is.expandByPoint(tl.min),Is.expandByPoint(tl.max))}Is.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Zi.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Zi));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Zi.fromBufferAttribute(o,l),c&&(ao.fromBufferAttribute(e,l),Zi.add(ao)),s=Math.max(s,n.distanceToSquared(Zi))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&jt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){jt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new $t(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let v=0;v<n.count;v++)o[v]=new F,c[v]=new F;let l=new F,h=new F,d=new F,p=new nt,u=new nt,f=new nt,x=new F,g=new F;function m(v,A,I){l.fromBufferAttribute(n,v),h.fromBufferAttribute(n,A),d.fromBufferAttribute(n,I),p.fromBufferAttribute(r,v),u.fromBufferAttribute(r,A),f.fromBufferAttribute(r,I),h.sub(l),d.sub(l),u.sub(p),f.sub(p);let G=1/(u.x*f.y-f.x*u.y);isFinite(G)&&(x.copy(h).multiplyScalar(f.y).addScaledVector(d,-u.y).multiplyScalar(G),g.copy(d).multiplyScalar(u.x).addScaledVector(h,-f.x).multiplyScalar(G),o[v].add(x),o[A].add(x),o[I].add(x),c[v].add(g),c[A].add(g),c[I].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let v=0,A=_.length;v<A;++v){let I=_[v],G=I.start,w=I.count;for(let U=G,N=G+w;U<N;U+=3)m(e.getX(U+0),e.getX(U+1),e.getX(U+2))}let b=new F,y=new F,M=new F,T=new F;function R(v){M.fromBufferAttribute(s,v),T.copy(M);let A=o[v];b.copy(A),b.sub(M.multiplyScalar(M.dot(A))).normalize(),y.crossVectors(T,A);let G=y.dot(c[v])<0?-1:1;a.setXYZW(v,b.x,b.y,b.z,G)}for(let v=0,A=_.length;v<A;++v){let I=_[v],G=I.start,w=I.count;for(let U=G,N=G+w;U<N;U+=3)R(e.getX(U+0)),R(e.getX(U+1)),R(e.getX(U+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new $t(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,u=n.count;p<u;p++)n.setXYZ(p,0,0,0);let s=new F,r=new F,a=new F,o=new F,c=new F,l=new F,h=new F,d=new F;if(e)for(let p=0,u=e.count;p<u;p+=3){let f=e.getX(p+0),x=e.getX(p+1),g=e.getX(p+2);s.fromBufferAttribute(t,f),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,g),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,f),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,g),o.add(h),c.add(h),l.add(h),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let p=0,u=t.count;p<u;p+=3)s.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),a.fromBufferAttribute(t,p+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Zi.fromBufferAttribute(e,t),Zi.normalize(),e.setXYZ(t,Zi.x,Zi.y,Zi.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,d=o.normalized,p=new l.constructor(c.length*h),u=0,f=0;for(let x=0,g=c.length;x<g;x++){o.isInterleavedBufferAttribute?u=c[x]*o.data.stride+o.offset:u=c[x]*h;for(let m=0;m<h;m++)p[f++]=l[u++]}return new $t(p,h,d)}if(this.index===null)return Kt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,d=l.length;h<d;h++){let p=l[h],u=e(p,n);c.push(u)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,p=l.length;d<p;d++){let u=l[d];h.push(u.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],d=r[l];for(let p=0,u=d.length;p<u;p++)h.push(d[p].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ml=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=rf,this.updateRanges=[],this.version=0,this.uuid=$r()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$r()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$r()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},_s=new F,So=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)_s.fromBufferAttribute(this,t),_s.applyMatrix4(e),this.setXYZ(t,_s.x,_s.y,_s.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)_s.fromBufferAttribute(this,t),_s.applyNormalMatrix(e),this.setXYZ(t,_s.x,_s.y,_s.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)_s.fromBufferAttribute(this,t),_s.transformDirection(e),this.setXYZ(t,_s.x,_s.y,_s.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=wr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Kn(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Kn(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Kn(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Kn(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Kn(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=wr(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=wr(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=wr(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=wr(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Kn(t,this.array),n=Kn(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Kn(t,this.array),n=Kn(n,this.array),s=Kn(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Kn(t,this.array),n=Kn(n,this.array),s=Kn(s,this.array),r=Kn(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){ml("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new $t(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ml("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},yh=new F,d1=new F,p1=new cn,Ds=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=yh.subVectors(n,t).cross(d1.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(yh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||p1.getNormalMatrix(e),s=this.coplanarPoint(yh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},m1=0,Zs=class extends Pr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:m1++}),this.uuid=$r(),this.name="",this.type="Material",this.blending=_a,this.side=ya,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qh,this.blendDst=Zh,this.blendEquation=Qs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Et(0,0,0),this.blendAlpha=0,this.depthFunc=xo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=op,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=s0,this.stencilZFail=s0,this.stencilZPass=s0,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Kt(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Kt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Et().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Ds().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new nt().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new nt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Bi=class extends Zs{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Et(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},oo,nl=new F,lo=new F,co=new F,uo=new nt,il=new nt,yp=new zt,Dc=new F,sl=new F,Lc=new F,fd=new nt,_h=new nt,dd=new nt,Ji=class extends yi{constructor(e=new Bi){if(super(),this.isSprite=!0,this.type="Sprite",oo===void 0){oo=new en;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ml(t,5);oo.setIndex([0,1,2,0,2,3]),oo.setAttribute("position",new So(n,3,0,!1)),oo.setAttribute("uv",new So(n,2,3,!1))}this.geometry=oo,this.material=e,this.center=new nt(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&jt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),lo.setFromMatrixScale(this.matrixWorld),yp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),co.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&lo.multiplyScalar(-co.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Nc(Dc.set(-.5,-.5,0),co,a,lo,s,r),Nc(sl.set(.5,-.5,0),co,a,lo,s,r),Nc(Lc.set(.5,.5,0),co,a,lo,s,r),fd.set(0,0),_h.set(1,0),dd.set(1,1);let o=e.ray.intersectTriangle(Dc,sl,Lc,!1,nl);if(o===null&&(Nc(sl.set(-.5,.5,0),co,a,lo,s,r),_h.set(0,1),o=e.ray.intersectTriangle(Dc,Lc,sl,!1,nl),o===null))return;let c=e.ray.origin.distanceTo(nl);c<e.near||c>e.far||t.push({distance:c,point:nl.clone(),uv:Rr.getInterpolation(nl,Dc,sl,Lc,fd,_h,dd,new nt),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Nc(i,e,t,n,s,r){uo.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(il.x=r*uo.x-s*uo.y,il.y=s*uo.x+r*uo.y):il.copy(uo),i.copy(e),i.x+=il.x,i.y+=il.y,i.applyMatrix4(yp)}var Zr=new F,Mh=new F,Uc=new F,Fc=new F,Oa=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Zr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zr.copy(this.origin).addScaledVector(this.direction,t),Zr.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Mh.copy(e).add(t).multiplyScalar(.5),Uc.copy(t).sub(e).normalize(),Fc.copy(this.origin).sub(Mh);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Uc),o=Fc.dot(this.direction),c=-Fc.dot(Uc),l=Fc.lengthSq(),h=Math.abs(1-a*a),d,p,u,f;if(h>0)if(d=a*c-o,p=a*o-c,f=r*h,d>=0)if(p>=-f)if(p<=f){let x=1/h;d*=x,p*=x,u=d*(d+a*p+2*o)+p*(a*d+p+2*c)+l}else p=r,d=Math.max(0,-(a*p+o)),u=-d*d+p*(p+2*c)+l;else p=-r,d=Math.max(0,-(a*p+o)),u=-d*d+p*(p+2*c)+l;else p<=-f?(d=Math.max(0,-(-a*r+o)),p=d>0?-r:Math.min(Math.max(-r,-c),r),u=-d*d+p*(p+2*c)+l):p<=f?(d=0,p=Math.min(Math.max(-r,-c),r),u=p*(p+2*c)+l):(d=Math.max(0,-(a*r+o)),p=d>0?r:Math.min(Math.max(-r,-c),r),u=-d*d+p*(p+2*c)+l);else p=a>0?-r:r,d=Math.max(0,-(a*p+o)),u=-d*d+p*(p+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Mh).addScaledVector(Uc,p),u}intersectSphere(e,t){if(e.radius<0)return null;Zr.subVectors(e.center,this.origin);let n=Zr.dot(this.direction),s=Zr.dot(Zr)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,p=this.origin;return l>=0?(n=(e.min.x-p.x)*l,s=(e.max.x-p.x)*l):(n=(e.max.x-p.x)*l,s=(e.min.x-p.x)*l),h>=0?(r=(e.min.y-p.y)*h,a=(e.max.y-p.y)*h):(r=(e.max.y-p.y)*h,a=(e.min.y-p.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-p.z)*d,c=(e.max.z-p.z)*d):(o=(e.max.z-p.z)*d,c=(e.min.z-p.z)*d),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Zr)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,d=e.x-a.x,p=e.y-a.y,u=e.z-a.z,f=t.x-a.x,x=t.y-a.y,g=t.z-a.z,m=n.x-a.x,_=n.y-a.y,b=n.z-a.z,y=Math.abs(c),M=Math.abs(l),T=Math.abs(h),R,v,A,I,G,w,U,N,B,Z,H,Y;if(y>=M&&y>=T?(A=c,w=d,B=f,Y=m,c>=0?(R=l,v=h,I=p,G=u,U=x,N=g,Z=_,H=b):(R=h,v=l,I=u,G=p,U=g,N=x,Z=b,H=_)):M>=T?(A=l,w=p,B=x,Y=_,l>=0?(R=h,v=c,I=u,G=d,U=g,N=f,Z=b,H=m):(R=c,v=h,I=d,G=u,U=f,N=g,Z=m,H=b)):(A=h,w=u,B=g,Y=b,h>=0?(R=c,v=l,I=d,G=p,U=f,N=x,Z=m,H=_):(R=l,v=c,I=p,G=d,U=x,N=f,Z=_,H=m)),A===0)return null;let q=R/A,W=v/A,J=1/A,ge=I-q*w,Ne=G-W*w,qe=U-q*B,Je=N-W*B,mt=Z-q*Y,te=H-W*Y,Ee=mt*Je-te*qe,Ue=ge*te-Ne*mt,be=qe*Ne-Je*ge;if(s){if(Ee<0||Ue<0||be<0)return null}else if((Ee<0||Ue<0||be<0)&&(Ee>0||Ue>0||be>0))return null;let Ge=Ee+Ue+be;if(Ge===0)return null;let re=J*(Ee*w+Ue*B+be*Y);return(Ge>0?re<0:re>0)?null:this.at(re/Ge,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Hn=class extends Zs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.combine=$h,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},pd=new zt,La=new Oa,Oc=new Dr,md=new F,Bc=new F,Hc=new F,zc=new F,Eh=new F,Gc=new F,gd=new F,kc=new F,Fe=class extends yi{constructor(e=new en,t=new Hn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Gc.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],d=r[c];h!==0&&(Eh.fromBufferAttribute(d,e),a?Gc.addScaledVector(Eh,h):Gc.addScaledVector(Eh.sub(t),h))}t.add(Gc)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Oc.copy(n.boundingSphere),Oc.applyMatrix4(r),La.copy(e.ray).recast(e.near),!(Oc.containsPoint(La.origin)===!1&&(La.intersectSphere(Oc,md)===null||La.origin.distanceToSquared(md)>(e.far-e.near)**2))&&(pd.copy(r).invert(),La.copy(e.ray).applyMatrix4(pd),!(n.boundingBox!==null&&La.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,La)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,p=r.groups,u=r.drawRange;if(o!==null)if(Array.isArray(a))for(let f=0,x=p.length;f<x;f++){let g=p[f],m=a[g.materialIndex],_=Math.max(g.start,u.start),b=Math.min(o.count,Math.min(g.start+g.count,u.start+u.count));for(let y=_,M=b;y<M;y+=3){let T=o.getX(y),R=o.getX(y+1),v=o.getX(y+2);s=Vc(this,m,e,n,l,h,d,T,R,v),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let f=Math.max(0,u.start),x=Math.min(o.count,u.start+u.count);for(let g=f,m=x;g<m;g+=3){let _=o.getX(g),b=o.getX(g+1),y=o.getX(g+2);s=Vc(this,a,e,n,l,h,d,_,b,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let f=0,x=p.length;f<x;f++){let g=p[f],m=a[g.materialIndex],_=Math.max(g.start,u.start),b=Math.min(c.count,Math.min(g.start+g.count,u.start+u.count));for(let y=_,M=b;y<M;y+=3){let T=y,R=y+1,v=y+2;s=Vc(this,m,e,n,l,h,d,T,R,v),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let f=Math.max(0,u.start),x=Math.min(c.count,u.start+u.count);for(let g=f,m=x;g<m;g+=3){let _=g,b=g+1,y=g+2;s=Vc(this,a,e,n,l,h,d,_,b,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function g1(i,e,t,n,s,r,a,o){let c;if(e.side===es?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===ya,o),c===null)return null;kc.copy(o),kc.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(kc);return l<t.near||l>t.far?null:{distance:l,point:kc.clone(),object:i}}function Vc(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,Bc),i.getVertexPosition(c,Hc),i.getVertexPosition(l,zc);let h=g1(i,e,t,n,Bc,Hc,zc,gd);if(h){let d=new F;Rr.getBarycoord(gd,Bc,Hc,zc,d),s&&(h.uv=Rr.getInterpolatedAttribute(s,o,c,l,d,new nt)),r&&(h.uv1=Rr.getInterpolatedAttribute(r,o,c,l,d,new nt)),a&&(h.normal=Rr.getInterpolatedAttribute(a,o,c,l,d,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let p={a:o,b:c,c:l,normal:new F,materialIndex:0};Rr.getNormal(Bc,Hc,zc,p.normal),h.face=p,h.barycoord=d}return h}var $s=class extends Ms{constructor(e=null,t=1,n=1,s,r,a,o,c,l=Ri,h=Ri,d,p){super(null,a,o,c,l,h,s,r,d,p),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var bo=class extends $t{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ho=new zt,xd=new zt,Wc=[],vd=new Ir,x1=new zt,rl=new Fe,al=new Dr,Mi=class extends Fe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new bo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,x1)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ir),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ho),vd.copy(e.boundingBox).applyMatrix4(ho),this.boundingBox.union(vd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Dr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ho),al.copy(e.boundingSphere).applyMatrix4(ho),this.boundingSphere.union(al)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(rl.geometry=this.geometry,rl.material=this.material,rl.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),al.copy(this.boundingSphere),al.applyMatrix4(n),e.ray.intersectsSphere(al)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ho),xd.multiplyMatrices(n,ho),rl.matrixWorld=xd,rl.raycast(e,Wc);for(let a=0,o=Wc.length;a<o;a++){let c=Wc[a];c.instanceId=r,c.object=this,t.push(c)}Wc.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new bo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new $s(new Float32Array(s*this.count),s,this.count,X0,js));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Na=new Dr,v1=new nt(.5,.5),Xc=new F,To=class{constructor(e=new Ds,t=new Ds,n=new Ds,s=new Ds,r=new Ds,a=new Ds){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=gr,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],d=r[5],p=r[6],u=r[7],f=r[8],x=r[9],g=r[10],m=r[11],_=r[12],b=r[13],y=r[14],M=r[15];if(s[0].setComponents(l-a,u-h,m-f,M-_).normalize(),s[1].setComponents(l+a,u+h,m+f,M+_).normalize(),s[2].setComponents(l+o,u+d,m+x,M+b).normalize(),s[3].setComponents(l-o,u-d,m-x,M-b).normalize(),n)s[4].setComponents(c,p,g,y).normalize(),s[5].setComponents(l-c,u-p,m-g,M-y).normalize();else if(s[4].setComponents(l-c,u-p,m-g,M-y).normalize(),t===gr)s[5].setComponents(l+c,u+p,m+g,M+y).normalize();else if(t===vo)s[5].setComponents(c,p,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Na.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Na.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Na)}intersectsSprite(e){Na.center.set(0,0,0);let t=v1.distanceTo(e.center);return Na.radius=.7071067811865476+t,Na.applyMatrix4(e.matrixWorld),this.intersectsSphere(Na)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Xc.x=s.normal.x>0?e.max.x:e.min.x,Xc.y=s.normal.y>0?e.max.y:e.min.y,Xc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Xc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var fa=class extends Zs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},v0=new F,y0=new F,yd=new zt,ol=new Oa,Yc=new Dr,Sh=new F,_d=new F,_0=class extends yi{constructor(e=new en,t=new fa){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)v0.fromBufferAttribute(t,s-1),y0.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=v0.distanceTo(y0);e.setAttribute("lineDistance",new qt(n,1))}else Kt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Yc.copy(n.boundingSphere),Yc.applyMatrix4(s),Yc.radius+=r,e.ray.intersectsSphere(Yc)===!1)return;yd.copy(s).invert(),ol.copy(e.ray).applyMatrix4(yd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,p=n.attributes.position;if(h!==null){let u=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let x=u,g=f-1;x<g;x+=l){let m=h.getX(x),_=h.getX(x+1),b=qc(this,e,ol,c,m,_,x);b&&t.push(b)}if(this.isLineLoop){let x=h.getX(f-1),g=h.getX(u),m=qc(this,e,ol,c,x,g,f-1);m&&t.push(m)}}else{let u=Math.max(0,a.start),f=Math.min(p.count,a.start+a.count);for(let x=u,g=f-1;x<g;x+=l){let m=qc(this,e,ol,c,x,x+1,x);m&&t.push(m)}if(this.isLineLoop){let x=qc(this,e,ol,c,f-1,u,f-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function qc(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(v0.fromBufferAttribute(o,s),y0.fromBufferAttribute(o,r),t.distanceSqToSegment(v0,y0,Sh,_d)>n)return;Sh.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Sh);if(!(l<e.near||l>e.far))return{distance:l,point:_d.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Md=new F,Ed=new F,Lr=class extends _0{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Md.fromBufferAttribute(t,s),Ed.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Md.distanceTo(Ed);e.setAttribute("lineDistance",new qt(n,1))}else Kt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Hi=class extends Zs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Sd=new zt,Nh=new Oa,Zc=new Dr,$c=new F,Ki=class extends yi{constructor(e=new en,t=new Hi){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zc.copy(n.boundingSphere),Zc.applyMatrix4(s),Zc.radius+=r,e.ray.intersectsSphere(Zc)===!1)return;Sd.copy(s).invert(),Nh.copy(e.ray).applyMatrix4(Sd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,d=n.attributes.position;if(l!==null){let p=Math.max(0,a.start),u=Math.min(l.count,a.start+a.count);for(let f=p,x=u;f<x;f++){let g=l.getX(f);$c.fromBufferAttribute(d,g),bd($c,g,c,s,e,t,this)}}else{let p=Math.max(0,a.start),u=Math.min(d.count,a.start+a.count);for(let f=p,x=u;f<x;f++)$c.fromBufferAttribute(d,f),bd($c,f,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function bd(i,e,t,n,s,r,a){let o=Nh.distanceSqToPoint(i);if(o<t){let c=new F;Nh.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var El=class extends Ms{constructor(e=[],t=Ea,n,s,r,a,o,c,l,h){super(e,t,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Zn=class extends Ms{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Js=class extends Ms{constructor(e,t,n=xr,s,r,a,o=Ri,c=Ri,l,h=Cr,d=1){if(h!==Cr&&h!==Fr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let p={width:e,height:t,depth:d};super(p,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new _o(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},M0=class extends Js{constructor(e,t=xr,n=Ea,s,r,a=Ri,o=Ri,c,l=Cr){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Sl=class extends Ms{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},En=class i extends en{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],d=[],p=0,u=0;f("z","y","x",-1,-1,n,t,e,a,r,0),f("z","y","x",1,-1,n,t,-e,a,r,1),f("x","z","y",1,1,e,n,t,s,a,2),f("x","z","y",1,-1,e,n,-t,s,a,3),f("x","y","z",1,-1,e,t,n,s,r,4),f("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new qt(l,3)),this.setAttribute("normal",new qt(h,3)),this.setAttribute("uv",new qt(d,2));function f(x,g,m,_,b,y,M,T,R,v,A){let I=y/R,G=M/v,w=y/2,U=M/2,N=T/2,B=R+1,Z=v+1,H=0,Y=0,q=new F;for(let W=0;W<Z;W++){let J=W*G-U;for(let ge=0;ge<B;ge++){let Ne=ge*I-w;q[x]=Ne*_,q[g]=J*b,q[m]=N,l.push(q.x,q.y,q.z),q[x]=0,q[g]=0,q[m]=T>0?1:-1,h.push(q.x,q.y,q.z),d.push(ge/R),d.push(1-W/v),H+=1}}for(let W=0;W<v;W++)for(let J=0;J<R;J++){let ge=p+J+B*W,Ne=p+J+B*(W+1),qe=p+(J+1)+B*(W+1),Je=p+(J+1)+B*W;c.push(ge,Ne,Je),c.push(Ne,qe,Je),Y+=6}o.addGroup(u,Y,A),u+=Y,p+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var wo=class i extends en{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],c=[],l=new F,h=new nt;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,p=3;d<=t;d++,p+=3){let u=n+d/t*s;l.x=e*Math.cos(u),l.y=e*Math.sin(u),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[p]/e+1)/2,h.y=(a[p+1]/e+1)/2,c.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new qt(a,3)),this.setAttribute("normal",new qt(o,3)),this.setAttribute("uv",new qt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},dn=class i extends en{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],p=[],u=[],f=0,x=[],g=n/2,m=0;_(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new qt(d,3)),this.setAttribute("normal",new qt(p,3)),this.setAttribute("uv",new qt(u,2));function _(){let y=new F,M=new F,T=0,R=(t-e)/n;for(let v=0;v<=r;v++){let A=[],I=v/r,G=I*(t-e)+e;for(let w=0;w<=s;w++){let U=w/s,N=U*c+o,B=Math.sin(N),Z=Math.cos(N);M.x=G*B,M.y=-I*n+g,M.z=G*Z,d.push(M.x,M.y,M.z),y.set(B,R,Z).normalize(),p.push(y.x,y.y,y.z),u.push(U,1-I),A.push(f++)}x.push(A)}for(let v=0;v<s;v++)for(let A=0;A<r;A++){let I=x[A][v],G=x[A+1][v],w=x[A+1][v+1],U=x[A][v+1];(e>0||A!==0)&&(h.push(I,G,U),T+=3),(t>0||A!==r-1)&&(h.push(G,w,U),T+=3)}l.addGroup(m,T,0),m+=T}function b(y){let M=f,T=new nt,R=new F,v=0,A=y===!0?e:t,I=y===!0?1:-1;for(let w=1;w<=s;w++)d.push(0,g*I,0),p.push(0,I,0),u.push(.5,.5),f++;let G=f;for(let w=0;w<=s;w++){let N=w/s*c+o,B=Math.cos(N),Z=Math.sin(N);R.x=A*Z,R.y=g*I,R.z=A*B,d.push(R.x,R.y,R.z),p.push(0,I,0),T.x=B*.5+.5,T.y=Z*.5*I+.5,u.push(T.x,T.y),f++}for(let w=0;w<s;w++){let U=M+w,N=G+w;y===!0?h.push(N,N+1,U):h.push(N+1,N,U),v+=3}l.addGroup(m,v,y===!0?1:2),m+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Kr=class i extends dn{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},bl=class i extends en{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new qt(r,3)),this.setAttribute("normal",new qt(r.slice(),3)),this.setAttribute("uv",new qt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(_){let b=new F,y=new F,M=new F;for(let T=0;T<t.length;T+=3)u(t[T+0],b),u(t[T+1],y),u(t[T+2],M),c(b,y,M,_)}function c(_,b,y,M){let T=M+1,R=[];for(let v=0;v<=T;v++){R[v]=[];let A=_.clone().lerp(y,v/T),I=b.clone().lerp(y,v/T),G=T-v;for(let w=0;w<=G;w++)w===0&&v===T?R[v][w]=A:R[v][w]=A.clone().lerp(I,w/G)}for(let v=0;v<T;v++)for(let A=0;A<2*(T-v)-1;A++){let I=Math.floor(A/2);A%2===0?(p(R[v][I+1]),p(R[v+1][I]),p(R[v][I])):(p(R[v][I+1]),p(R[v+1][I+1]),p(R[v+1][I]))}}function l(_){let b=new F;for(let y=0;y<r.length;y+=3)b.x=r[y+0],b.y=r[y+1],b.z=r[y+2],b.normalize().multiplyScalar(_),r[y+0]=b.x,r[y+1]=b.y,r[y+2]=b.z}function h(){let _=new F;for(let b=0;b<r.length;b+=3){_.x=r[b+0],_.y=r[b+1],_.z=r[b+2];let y=g(_)/2/Math.PI+.5,M=m(_)/Math.PI+.5;a.push(y,1-M)}f(),d()}function d(){for(let _=0;_<a.length;_+=6){let b=a[_+0],y=a[_+2],M=a[_+4],T=Math.max(b,y,M),R=Math.min(b,y,M);T>.9&&R<.1&&(b<.2&&(a[_+0]+=1),y<.2&&(a[_+2]+=1),M<.2&&(a[_+4]+=1))}}function p(_){r.push(_.x,_.y,_.z)}function u(_,b){let y=_*3;b.x=e[y+0],b.y=e[y+1],b.z=e[y+2]}function f(){let _=new F,b=new F,y=new F,M=new F,T=new nt,R=new nt,v=new nt;for(let A=0,I=0;A<r.length;A+=9,I+=6){_.set(r[A+0],r[A+1],r[A+2]),b.set(r[A+3],r[A+4],r[A+5]),y.set(r[A+6],r[A+7],r[A+8]),T.set(a[I+0],a[I+1]),R.set(a[I+2],a[I+3]),v.set(a[I+4],a[I+5]),M.copy(_).add(b).add(y).divideScalar(3);let G=g(M);x(T,I+0,_,G),x(R,I+2,b,G),x(v,I+4,y,G)}}function x(_,b,y,M){M<0&&_.x===1&&(a[b]=_.x-1),y.x===0&&y.z===0&&(a[b]=M/2/Math.PI+.5)}function g(_){return Math.atan2(_.z,-_.x)}function m(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var Jc=new F,Kc=new F,bh=new F,Qc=new Rr,Ro=class extends en{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let s=Math.pow(10,4),r=Math.cos(r0*t),a=e.getIndex(),o=e.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],h=["a","b","c"],d=new Array(3),p={},u=[];for(let f=0;f<c;f+=3){a?(l[0]=a.getX(f),l[1]=a.getX(f+1),l[2]=a.getX(f+2)):(l[0]=f,l[1]=f+1,l[2]=f+2);let{a:x,b:g,c:m}=Qc;if(x.fromBufferAttribute(o,l[0]),g.fromBufferAttribute(o,l[1]),m.fromBufferAttribute(o,l[2]),Qc.getNormal(bh),d[0]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,d[1]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,d[2]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let _=0;_<3;_++){let b=(_+1)%3,y=d[_],M=d[b],T=Qc[h[_]],R=Qc[h[b]],v=`${y}_${M}`,A=`${M}_${y}`;A in p&&p[A]?(bh.dot(p[A].normal)<=r&&(u.push(T.x,T.y,T.z),u.push(R.x,R.y,R.z)),p[A]=null):v in p||(p[v]={index0:l[_],index1:l[b],normal:bh.clone()})}}for(let f in p)if(p[f]){let{index0:x,index1:g}=p[f];Jc.fromBufferAttribute(o,x),Kc.fromBufferAttribute(o,g),u.push(Jc.x,Jc.y,Jc.z),u.push(Kc.x,Kc.y,Kc.z)}this.setAttribute("position",new qt(u,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Ls=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Kt("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let h=n[s],p=n[s+1]-h,u=(a-h)/p;return(s+u)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new nt:new F);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new F,s=[],r=[],a=[],o=new F,c=new zt;for(let u=0;u<=e;u++){let f=u/e;s[u]=this.getTangentAt(f,new F)}r[0]=new F,a[0]=new F;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),p=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),p<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let u=1;u<=e;u++){if(r[u]=r[u-1].clone(),a[u]=a[u-1].clone(),o.crossVectors(s[u-1],s[u]),o.length()>Number.EPSILON){o.normalize();let f=Math.acos(Mn(s[u-1].dot(s[u]),-1,1));r[u].applyMatrix4(c.makeRotationAxis(o,f))}a[u].crossVectors(s[u],r[u])}if(t===!0){let u=Math.acos(Mn(r[0].dot(r[e]),-1,1));u/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(u=-u);for(let f=1;f<=e;f++)r[f].applyMatrix4(c.makeRotationAxis(s[f],u*f)),a[f].crossVectors(s[f],r[f])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ao=class extends Ls{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new nt){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),p=c-this.aX,u=l-this.aY;c=p*h-u*d+this.aX,l=p*d+u*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},E0=class extends Ao{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function of(){let i=0,e=0,t=0,n=0;function s(r,a,o,c){i=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,d){let p=(a-r)/l-(o-r)/(l+h)+(o-a)/h,u=(o-a)/h-(c-a)/(h+d)+(c-o)/d;p*=h,u*=h,s(a,o,p,u)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var Td=new F,wd=new F,Th=new of,wh=new of,Rh=new of,fs=class extends Ls{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new F){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(wd.subVectors(s[0],s[1]).add(s[0]),l=wd);let d=s[o%r],p=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Td.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Td),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,f=Math.pow(l.distanceToSquared(d),u),x=Math.pow(d.distanceToSquared(p),u),g=Math.pow(p.distanceToSquared(h),u);x<1e-4&&(x=1),f<1e-4&&(f=x),g<1e-4&&(g=x),Th.initNonuniformCatmullRom(l.x,d.x,p.x,h.x,f,x,g),wh.initNonuniformCatmullRom(l.y,d.y,p.y,h.y,f,x,g),Rh.initNonuniformCatmullRom(l.z,d.z,p.z,h.z,f,x,g)}else this.curveType==="catmullrom"&&(Th.initCatmullRom(l.x,d.x,p.x,h.x,this.tension),wh.initCatmullRom(l.y,d.y,p.y,h.y,this.tension),Rh.initCatmullRom(l.z,d.z,p.z,h.z,this.tension));return n.set(Th.calc(c),wh.calc(c),Rh.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new F().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Rd(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,c=i*o;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*o+r*i+t}function y1(i,e){let t=1-i;return t*t*e}function _1(i,e){return 2*(1-i)*i*e}function M1(i,e){return i*i*e}function cl(i,e,t,n){return y1(i,e)+_1(i,t)+M1(i,n)}function E1(i,e){let t=1-i;return t*t*t*e}function S1(i,e){let t=1-i;return 3*t*t*i*e}function b1(i,e){return 3*(1-i)*i*i*e}function T1(i,e){return i*i*i*e}function ul(i,e,t,n,s){return E1(i,e)+S1(i,t)+b1(i,n)+T1(i,s)}var Tl=class extends Ls{constructor(e=new nt,t=new nt,n=new nt,s=new nt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new nt){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ul(e,s.x,r.x,a.x,o.x),ul(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},S0=class extends Ls{constructor(e=new F,t=new F,n=new F,s=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new F){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ul(e,s.x,r.x,a.x,o.x),ul(e,s.y,r.y,a.y,o.y),ul(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},wl=class extends Ls{constructor(e=new nt,t=new nt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new nt){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new nt){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},da=class extends Ls{constructor(e=new F,t=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new F){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new F){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Rl=class extends Ls{constructor(e=new nt,t=new nt,n=new nt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new nt){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(cl(e,s.x,r.x,a.x),cl(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Al=class extends Ls{constructor(e=new F,t=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new F){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(cl(e,s.x,r.x,a.x),cl(e,s.y,r.y,a.y),cl(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Cl=class extends Ls{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new nt){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(Rd(o,c.x,l.x,h.x,d.x),Rd(o,c.y,l.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new nt().fromArray(s))}return this}},b0=Object.freeze({__proto__:null,ArcCurve:E0,CatmullRomCurve3:fs,CubicBezierCurve:Tl,CubicBezierCurve3:S0,EllipseCurve:Ao,LineCurve:wl,LineCurve3:da,QuadraticBezierCurve:Rl,QuadraticBezierCurve3:Al,SplineCurve:Cl}),Co=class extends Ls{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new b0[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new b0[s.type]().fromJSON(s))}return this}},Ks=class extends Co{constructor(e){super(),this.type="Path",this.currentPoint=new nt,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new wl(this.currentPoint.clone(),new nt(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Rl(this.currentPoint.clone(),new nt(e,t),new nt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new Tl(this.currentPoint.clone(),new nt(e,t),new nt(n,s),new nt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Cl(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,a,o,c),this}absellipse(e,t,n,s,r,a,o,c){let l=new Ao(e,t,n,s,r,a,o,c);if(this.curves.length>0){let d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ei=class extends Ks{constructor(e){super(e),this.uuid=$r(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Ks().fromJSON(s))}return this}};function w1(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=_p(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l;if(n&&(r=I1(i,e,r,t)),i.length>80*t){o=i[0],c=i[1];let h=o,d=c;for(let p=t;p<s;p+=t){let u=i[p],f=i[p+1];u<o&&(o=u),f<c&&(c=f),u>h&&(h=u),f>d&&(d=f)}l=Math.max(h-o,d-c),l=l!==0?32767/l:0}return Pl(r,a,t,o,c,l,0),a}function _p(i,e,t,n,s){let r;if(s===k1(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=Ad(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=Ad(a/n|0,i[a],i[a+1],r);return r&&Po(r,r.next)&&(Dl(r),r=r.next),r}function Ba(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Po(t,t.next)||vi(t.prev,t,t.next)===0)){if(Dl(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Pl(i,e,t,n,s,r,a){if(!i)return;!a&&r&&F1(i,n,s,r);let o=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?A1(i,n,s,r):R1(i)){e.push(c.i,i.i,l.i),Dl(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=C1(Ba(i),e),Pl(i,e,t,n,s,r,2)):a===2&&P1(i,e,t,n,s,r):Pl(Ba(i),e,t,n,s,r,1);break}}}function R1(i){let e=i.prev,t=i,n=i.next;if(vi(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,c=t.y,l=n.y,h=Math.min(s,r,a),d=Math.min(o,c,l),p=Math.max(s,r,a),u=Math.max(o,c,l),f=n.next;for(;f!==e;){if(f.x>=h&&f.x<=p&&f.y>=d&&f.y<=u&&ll(s,o,r,c,a,l,f.x,f.y)&&vi(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function A1(i,e,t,n){let s=i.prev,r=i,a=i.next;if(vi(s,r,a)>=0)return!1;let o=s.x,c=r.x,l=a.x,h=s.y,d=r.y,p=a.y,u=Math.min(o,c,l),f=Math.min(h,d,p),x=Math.max(o,c,l),g=Math.max(h,d,p),m=Uh(u,f,e,t,n),_=Uh(x,g,e,t,n),b=i.prevZ,y=i.nextZ;for(;b&&b.z>=m&&y&&y.z<=_;){if(b.x>=u&&b.x<=x&&b.y>=f&&b.y<=g&&b!==s&&b!==a&&ll(o,h,c,d,l,p,b.x,b.y)&&vi(b.prev,b,b.next)>=0||(b=b.prevZ,y.x>=u&&y.x<=x&&y.y>=f&&y.y<=g&&y!==s&&y!==a&&ll(o,h,c,d,l,p,y.x,y.y)&&vi(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;b&&b.z>=m;){if(b.x>=u&&b.x<=x&&b.y>=f&&b.y<=g&&b!==s&&b!==a&&ll(o,h,c,d,l,p,b.x,b.y)&&vi(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;y&&y.z<=_;){if(y.x>=u&&y.x<=x&&y.y>=f&&y.y<=g&&y!==s&&y!==a&&ll(o,h,c,d,l,p,y.x,y.y)&&vi(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function C1(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Po(n,s)&&Ep(n,t,t.next,s)&&Il(n,s)&&Il(s,n)&&(e.push(n.i,t.i,s.i),Dl(t),Dl(t.next),t=i=s),t=t.next}while(t!==i);return Ba(t)}function P1(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&H1(a,o)){let c=Sp(a,o);a=Ba(a,a.next),c=Ba(c,c.next),Pl(a,e,t,n,s,r,0),Pl(c,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function I1(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,c=r<a-1?e[r+1]*n:i.length,l=_p(i,o,c,n,!1);l===l.next&&(l.steiner=!0),s.push(B1(l))}s.sort(D1);for(let r=0;r<s.length;r++)t=L1(s[r],t);return t}function D1(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function L1(i,e){let t=N1(i,e);if(!t)return e;let n=Sp(t,i);return Ba(n,n.next),Ba(t,t.next)}function N1(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(Po(i,t))return t;do{if(Po(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>r&&(r=d,a=t.x<t.next.x?t:t.next,d===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,c=a.x,l=a.y,h=1/0;t=a;do{if(n>=t.x&&t.x>=c&&n!==t.x&&Mp(s<l?n:r,s,c,l,s<l?r:n,s,t.x,t.y)){let d=Math.abs(s-t.y)/(n-t.x);Il(t,i)&&(d<h||d===h&&(t.x>a.x||t.x===a.x&&U1(a,t)))&&(a=t,h=d)}t=t.next}while(t!==o);return a}function U1(i,e){return vi(i.prev,i,e.prev)<0&&vi(e.next,i,i.next)<0}function F1(i,e,t,n){let s=i;do s.z===0&&(s.z=Uh(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,O1(s)}function O1(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let l=0;l<t&&(o++,a=a.nextZ,!!a);l++);let c=t;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function Uh(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function B1(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Mp(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function ll(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&Mp(i,e,t,n,s,r,a,o)}function H1(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!z1(i,e)&&(Il(i,e)&&Il(e,i)&&G1(i,e)&&(vi(i.prev,i,e.prev)||vi(i,e.prev,e))||Po(i,e)&&vi(i.prev,i,i.next)>0&&vi(e.prev,e,e.next)>0)}function vi(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Po(i,e){return i.x===e.x&&i.y===e.y}function Ep(i,e,t,n){let s=e0(vi(i,e,t)),r=e0(vi(i,e,n)),a=e0(vi(t,n,i)),o=e0(vi(t,n,e));return!!(s!==r&&a!==o||s===0&&jc(i,t,e)||r===0&&jc(i,n,e)||a===0&&jc(t,i,n)||o===0&&jc(t,e,n))}function jc(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function e0(i){return i>0?1:i<0?-1:0}function z1(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Ep(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Il(i,e){return vi(i.prev,i,i.next)<0?vi(i,e,i.next)>=0&&vi(i,i.prev,e)>=0:vi(i,e,i.prev)<0||vi(i,i.next,e)<0}function G1(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Sp(i,e){let t=Fh(i.i,i.x,i.y),n=Fh(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Ad(i,e,t,n){let s=Fh(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Dl(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Fh(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function k1(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Oh=class{static triangulate(e,t,n=2){return w1(e,t,n)}},Ar=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Cd(e),Pd(n,e);let a=e.length;t.forEach(Cd);for(let c=0;c<t.length;c++)s.push(a),a+=t[c].length,Pd(n,t[c]);let o=Oh.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function Cd(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Pd(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Rs=class i extends en{constructor(e=new Ei([new nt(.5,.5),new nt(-.5,.5),new nt(-.5,-.5),new nt(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,c=e.length;o<c;o++){let l=e[o];a(l)}this.setAttribute("position",new qt(s,3)),this.setAttribute("uv",new qt(r,2)),this.computeVertexNormals();function a(o){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,p=t.bevelEnabled!==void 0?t.bevelEnabled:!0,u=t.bevelThickness!==void 0?t.bevelThickness:.2,f=t.bevelSize!==void 0?t.bevelSize:u-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:V1,b,y=!1,M,T,R,v;if(m){b=m.getSpacedPoints(h),y=!0,p=!1;let ue=m.isCatmullRomCurve3?m.closed:!1;M=m.computeFrenetFrames(h,ue),T=new F,R=new F,v=new F}p||(g=0,u=0,f=0,x=0);let A=o.extractPoints(l),I=A.shape,G=A.holes;if(!Ar.isClockWise(I)){I=I.reverse();for(let ue=0,me=G.length;ue<me;ue++){let ie=G[ue];Ar.isClockWise(ie)&&(G[ue]=ie.reverse())}}function U(ue){let ie=10000000000000001e-36,xe=ue[0];for(let we=1;we<=ue.length;we++){let $e=we%ue.length,Xe=ue[$e],lt=Xe.x-xe.x,ft=Xe.y-xe.y,j=lt*lt+ft*ft,Dt=Math.max(Math.abs(Xe.x),Math.abs(Xe.y),Math.abs(xe.x),Math.abs(xe.y)),_t=ie*Dt*Dt;if(j<=_t){ue.splice($e,1),we--;continue}xe=Xe}}U(I),G.forEach(U);let N=G.length,B=I;for(let ue=0;ue<N;ue++){let me=G[ue];I=I.concat(me)}function Z(ue,me,ie){return me||jt("ExtrudeGeometry: vec does not exist"),ue.clone().addScaledVector(me,ie)}let H=I.length;function Y(ue,me,ie){let xe,we,$e,Xe=ue.x-me.x,lt=ue.y-me.y,ft=ie.x-ue.x,j=ie.y-ue.y,Dt=Xe*Xe+lt*lt,_t=Xe*j-lt*ft;if(Math.abs(_t)>Number.EPSILON){let z=Math.sqrt(Dt),S=Math.sqrt(ft*ft+j*j),le=me.x-lt/z,he=me.y+Xe/z,_e=ie.x-j/S,rt=ie.y+ft/S,it=((_e-le)*j-(rt-he)*ft)/(Xe*j-lt*ft);xe=le+Xe*it-ue.x,we=he+lt*it-ue.y;let Oe=xe*xe+we*we;if(Oe<=2)return new nt(xe,we);$e=Math.sqrt(Oe/2)}else{let z=!1;Xe>Number.EPSILON?ft>Number.EPSILON&&(z=!0):Xe<-Number.EPSILON?ft<-Number.EPSILON&&(z=!0):Math.sign(lt)===Math.sign(j)&&(z=!0),z?(xe=-lt,we=Xe,$e=Math.sqrt(Dt)):(xe=Xe,we=lt,$e=Math.sqrt(Dt/2))}return new nt(xe/$e,we/$e)}let q=[];for(let ue=0,me=B.length,ie=me-1,xe=ue+1;ue<me;ue++,ie++,xe++)ie===me&&(ie=0),xe===me&&(xe=0),q[ue]=Y(B[ue],B[ie],B[xe]);let W=[],J,ge=q.concat();for(let ue=0,me=N;ue<me;ue++){let ie=G[ue];J=[];for(let xe=0,we=ie.length,$e=we-1,Xe=xe+1;xe<we;xe++,$e++,Xe++)$e===we&&($e=0),Xe===we&&(Xe=0),J[xe]=Y(ie[xe],ie[$e],ie[Xe]);W.push(J),ge=ge.concat(J)}let Ne;if(g===0)Ne=Ar.triangulateShape(B,G);else{let ue=[],me=[];for(let ie=0;ie<g;ie++){let xe=ie/g,we=u*Math.cos(xe*Math.PI/2),$e=f*Math.sin(xe*Math.PI/2)+x;for(let Xe=0,lt=B.length;Xe<lt;Xe++){let ft=Z(B[Xe],q[Xe],$e);Ue(ft.x,ft.y,-we),xe===0&&ue.push(ft)}for(let Xe=0,lt=N;Xe<lt;Xe++){let ft=G[Xe];J=W[Xe];let j=[];for(let Dt=0,_t=ft.length;Dt<_t;Dt++){let z=Z(ft[Dt],J[Dt],$e);Ue(z.x,z.y,-we),xe===0&&j.push(z)}xe===0&&me.push(j)}}Ne=Ar.triangulateShape(ue,me)}let qe=Ne.length,Je=f+x;for(let ue=0;ue<H;ue++){let me=p?Z(I[ue],ge[ue],Je):I[ue];y?(R.copy(M.normals[0]).multiplyScalar(me.x),T.copy(M.binormals[0]).multiplyScalar(me.y),v.copy(b[0]).add(R).add(T),Ue(v.x,v.y,v.z)):Ue(me.x,me.y,0)}for(let ue=1;ue<=h;ue++)for(let me=0;me<H;me++){let ie=p?Z(I[me],ge[me],Je):I[me];y?(R.copy(M.normals[ue]).multiplyScalar(ie.x),T.copy(M.binormals[ue]).multiplyScalar(ie.y),v.copy(b[ue]).add(R).add(T),Ue(v.x,v.y,v.z)):Ue(ie.x,ie.y,d/h*ue)}for(let ue=g-1;ue>=0;ue--){let me=ue/g,ie=u*Math.cos(me*Math.PI/2),xe=f*Math.sin(me*Math.PI/2)+x;for(let we=0,$e=B.length;we<$e;we++){let Xe=Z(B[we],q[we],xe);Ue(Xe.x,Xe.y,d+ie)}for(let we=0,$e=G.length;we<$e;we++){let Xe=G[we];J=W[we];for(let lt=0,ft=Xe.length;lt<ft;lt++){let j=Z(Xe[lt],J[lt],xe);y?Ue(j.x,j.y+b[h-1].y,b[h-1].x+ie):Ue(j.x,j.y,d+ie)}}}mt(),te();function mt(){let ue=s.length/3;if(p){let me=0,ie=H*me;for(let xe=0;xe<qe;xe++){let we=Ne[xe];be(we[2]+ie,we[1]+ie,we[0]+ie)}me=h+g*2,ie=H*me;for(let xe=0;xe<qe;xe++){let we=Ne[xe];be(we[0]+ie,we[1]+ie,we[2]+ie)}}else{for(let me=0;me<qe;me++){let ie=Ne[me];be(ie[2],ie[1],ie[0])}for(let me=0;me<qe;me++){let ie=Ne[me];be(ie[0]+H*h,ie[1]+H*h,ie[2]+H*h)}}n.addGroup(ue,s.length/3-ue,0)}function te(){let ue=s.length/3,me=0;Ee(B,me),me+=B.length;for(let ie=0,xe=G.length;ie<xe;ie++){let we=G[ie];Ee(we,me),me+=we.length}n.addGroup(ue,s.length/3-ue,1)}function Ee(ue,me){let ie=ue.length;for(;--ie>=0;){let xe=ie,we=ie-1;we<0&&(we=ue.length-1);for(let $e=0,Xe=h+g*2;$e<Xe;$e++){let lt=H*$e,ft=H*($e+1),j=me+xe+lt,Dt=me+we+lt,_t=me+we+ft,z=me+xe+ft;Ge(j,Dt,_t,z)}}}function Ue(ue,me,ie){c.push(ue),c.push(me),c.push(ie)}function be(ue,me,ie){re(ue),re(me),re(ie);let xe=s.length/3,we=_.generateTopUV(n,s,xe-3,xe-2,xe-1);Qe(we[0]),Qe(we[1]),Qe(we[2])}function Ge(ue,me,ie,xe){re(ue),re(me),re(xe),re(me),re(ie),re(xe);let we=s.length/3,$e=_.generateSideWallUV(n,s,we-6,we-3,we-2,we-1);Qe($e[0]),Qe($e[1]),Qe($e[3]),Qe($e[1]),Qe($e[2]),Qe($e[3])}function re(ue){s.push(c[ue*3+0]),s.push(c[ue*3+1]),s.push(c[ue*3+2])}function Qe(ue){r.push(ue.x),r.push(ue.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return W1(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new b0[s.type]().fromJSON(s)),new i(n,e.options)}},V1={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],c=e[n*3+1],l=e[s*3],h=e[s*3+1];return[new nt(r,a),new nt(o,c),new nt(l,h)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],d=e[n*3+2],p=e[s*3],u=e[s*3+1],f=e[s*3+2],x=e[r*3],g=e[r*3+1],m=e[r*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new nt(a,1-c),new nt(l,1-d),new nt(p,1-f),new nt(x,1-m)]:[new nt(o,1-c),new nt(h,1-d),new nt(u,1-f),new nt(g,1-m)]}};function W1(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Nr=class i extends bl{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Ll=class i extends en{constructor(e=[new nt(0,-.5),new nt(.5,0),new nt(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Mn(s,0,Math.PI*2);let r=[],a=[],o=[],c=[],l=[],h=1/t,d=new F,p=new nt,u=new F,f=new F,x=new F,g=0,m=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:g=e[_+1].x-e[_].x,m=e[_+1].y-e[_].y,u.x=m*1,u.y=-g,u.z=m*0,x.copy(u),u.normalize(),c.push(u.x,u.y,u.z);break;case e.length-1:c.push(x.x,x.y,x.z);break;default:g=e[_+1].x-e[_].x,m=e[_+1].y-e[_].y,u.x=m*1,u.y=-g,u.z=m*0,f.copy(u),u.x+=x.x,u.y+=x.y,u.z+=x.z,u.normalize(),c.push(u.x,u.y,u.z),x.copy(f)}for(let _=0;_<=t;_++){let b=n+_*h*s,y=Math.sin(b),M=Math.cos(b);for(let T=0;T<=e.length-1;T++){d.x=e[T].x*y,d.y=e[T].y,d.z=e[T].x*M,a.push(d.x,d.y,d.z),p.x=_/t,p.y=T/(e.length-1),o.push(p.x,p.y);let R=c[3*T+0]*y,v=c[3*T+1],A=c[3*T+0]*M;l.push(R,v,A)}}for(let _=0;_<t;_++)for(let b=0;b<e.length-1;b++){let y=b+_*e.length,M=y,T=y+e.length,R=y+e.length+1,v=y+1;r.push(M,T,v),r.push(R,v,T)}this.setIndex(r),this.setAttribute("position",new qt(a,3)),this.setAttribute("uv",new qt(o,2)),this.setAttribute("normal",new qt(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},Nl=class i extends bl{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},sn=class i extends en{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,d=e/o,p=t/c,u=[],f=[],x=[],g=[];for(let m=0;m<h;m++){let _=m*p-a;for(let b=0;b<l;b++){let y=b*d-r;f.push(y,-_,0),x.push(0,0,1),g.push(b/o),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let _=0;_<o;_++){let b=_+l*m,y=_+l*(m+1),M=_+1+l*(m+1),T=_+1+l*m;u.push(b,y,T),u.push(y,M,T)}this.setIndex(u),this.setAttribute("position",new qt(f,3)),this.setAttribute("normal",new qt(x,3)),this.setAttribute("uv",new qt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Ha=class i extends en{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],c=[],l=[],h=[],d=e,p=(t-e)/s,u=new F,f=new nt;for(let x=0;x<=s;x++){for(let g=0;g<=n;g++){let m=r+g/n*a;u.x=d*Math.cos(m),u.y=d*Math.sin(m),c.push(u.x,u.y,u.z),l.push(0,0,1),f.x=(u.x/t+1)/2,f.y=(u.y/t+1)/2,h.push(f.x,f.y)}d+=p}for(let x=0;x<s;x++){let g=x*(n+1);for(let m=0;m<n;m++){let _=m+g,b=_,y=_+n+1,M=_+n+2,T=_+1;o.push(b,y,T),o.push(y,M,T)}}this.setIndex(o),this.setAttribute("position",new qt(c,3)),this.setAttribute("normal",new qt(l,3)),this.setAttribute("uv",new qt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},pa=class i extends en{constructor(e=new Ei([new nt(0,.5),new nt(-.5,-.5),new nt(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],a=[],o=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(o,c,h),o+=c,c=0;this.setIndex(n),this.setAttribute("position",new qt(s,3)),this.setAttribute("normal",new qt(r,3)),this.setAttribute("uv",new qt(a,2));function l(h){let d=s.length/3,p=h.extractPoints(t),u=p.shape,f=p.holes;Ar.isClockWise(u)===!1&&(u=u.reverse());for(let g=0,m=f.length;g<m;g++){let _=f[g];Ar.isClockWise(_)===!0&&(f[g]=_.reverse())}let x=Ar.triangulateShape(u,f);for(let g=0,m=f.length;g<m;g++){let _=f[g];u=u.concat(_)}for(let g=0,m=u.length;g<m;g++){let _=u[g];s.push(_.x,_.y,0),r.push(0,0,1),a.push(_.x,_.y)}for(let g=0,m=x.length;g<m;g++){let _=x[g],b=_[0]+d,y=_[1]+d,M=_[2]+d;n.push(b,y,M),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return X1(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];n.push(a)}return new i(n,e.curveSegments)}};function X1(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var jn=class i extends en{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],d=new F,p=new F,u=[],f=[],x=[],g=[];for(let m=0;m<=n;m++){let _=[],b=m/n,y=a+b*o,M=e*Math.cos(y),T=Math.sqrt(e*e-M*M),R=0;m===0&&a===0?R=.5/t:m===n&&c===Math.PI&&(R=-.5/t);for(let v=0;v<=t;v++){let A=v/t,I=s+A*r;d.x=-T*Math.cos(I),d.y=M,d.z=T*Math.sin(I),f.push(d.x,d.y,d.z),p.copy(d).normalize(),x.push(p.x,p.y,p.z),g.push(A+R,1-b),_.push(l++)}h.push(_)}for(let m=0;m<n;m++)for(let _=0;_<t;_++){let b=h[m][_+1],y=h[m][_],M=h[m+1][_],T=h[m+1][_+1];(m!==0||a>0)&&u.push(b,y,T),(m!==n-1||c<Math.PI)&&u.push(y,M,T)}this.setIndex(u),this.setAttribute("position",new qt(f,3)),this.setAttribute("normal",new qt(x,3)),this.setAttribute("uv",new qt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Qi=class i extends en{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let c=[],l=[],h=[],d=[],p=new F,u=new F,f=new F;for(let x=0;x<=n;x++){let g=a+x/n*o;for(let m=0;m<=s;m++){let _=m/s*r;u.x=(e+t*Math.cos(g))*Math.cos(_),u.y=(e+t*Math.cos(g))*Math.sin(_),u.z=t*Math.sin(g),l.push(u.x,u.y,u.z),p.x=e*Math.cos(_),p.y=e*Math.sin(_),f.subVectors(u,p).normalize(),h.push(f.x,f.y,f.z),d.push(m/s),d.push(x/n)}}for(let x=1;x<=n;x++)for(let g=1;g<=s;g++){let m=(s+1)*x+g-1,_=(s+1)*(x-1)+g-1,b=(s+1)*(x-1)+g,y=(s+1)*x+g;c.push(m,_,y),c.push(_,b,y)}this.setIndex(c),this.setAttribute("position",new qt(l,3)),this.setAttribute("normal",new qt(h,3)),this.setAttribute("uv",new qt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var ds=class i extends en{constructor(e=new Al(new F(-1,-1,0),new F(-1,1,0),new F(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new F,c=new F,l=new nt,h=new F,d=[],p=[],u=[],f=[];x(),this.setIndex(f),this.setAttribute("position",new qt(d,3)),this.setAttribute("normal",new qt(p,3)),this.setAttribute("uv",new qt(u,2));function x(){for(let b=0;b<t;b++)g(b);g(r===!1?t:0),_(),m()}function g(b){h=e.getPointAt(b/t,h);let y=a.normals[b],M=a.binormals[b];for(let T=0;T<=s;T++){let R=T/s*Math.PI*2,v=Math.sin(R),A=-Math.cos(R);c.x=A*y.x+v*M.x,c.y=A*y.y+v*M.y,c.z=A*y.z+v*M.z,c.normalize(),p.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,d.push(o.x,o.y,o.z)}}function m(){for(let b=1;b<=t;b++)for(let y=1;y<=s;y++){let M=(s+1)*(b-1)+(y-1),T=(s+1)*b+(y-1),R=(s+1)*b+y,v=(s+1)*(b-1)+y;f.push(M,T,v),f.push(T,R,v)}}function _(){for(let b=0;b<=t;b++)for(let y=0;y<=s;y++)l.x=b/t,l.y=y/s,u.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new b0[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function Wa(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Id(s))s.isRenderTargetTexture?(Kt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Id(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function ms(i){let e={};for(let t=0;t<i.length;t++){let n=Wa(i[t]);for(let s in n)e[s]=n[s]}return e}function Id(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Y1(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function lf(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:bn.workingColorSpace}var Es={clone:Wa,merge:ms},q1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Z1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Cn=class extends Zs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=q1,this.fragmentShader=Z1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Wa(e.uniforms),this.uniformsGroups=Y1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Et().setHex(s.value);break;case"v2":this.uniforms[n].value=new nt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new F().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ai().fromArray(s.value);break;case"m3":this.uniforms[n].value=new cn().fromArray(s.value);break;case"m4":this.uniforms[n].value=new zt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Io=class extends Cn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},on=class extends Zs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sc,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ji=class extends on{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new nt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Mn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Et(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Et(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Et(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Ul=class extends Zs{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sc,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};var Do=class extends Zs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},T0=class extends Zs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function fo(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Ah(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var ma=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},w0=class extends ma{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ih,endingEnd:Ih}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Dh:r=e,o=2*t-n;break;case Lh:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Dh:a=e,c=2*n-t;break;case Lh:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,d=this._offsetNext,p=this._weightPrev,u=this._weightNext,f=(n-t)/(s-t),x=f*f,g=x*f,m=-p*g+2*p*x-p*f,_=(1+p)*g+(-1.5-2*p)*x+(-.5+p)*f+1,b=(-1-u)*g+(1.5+u)*x+.5*f,y=u*g-u*x;for(let M=0;M!==o;++M)r[M]=m*a[h+M]+_*a[l+M]+b*a[c+M]+y*a[d+M];return r}},R0=class extends ma{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(s-t),d=1-h;for(let p=0;p!==o;++p)r[p]=a[l+p]*d+a[c+p]*h;return r}},A0=class extends ma{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},C0=class extends ma{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let f=(n-t)/(s-t),x=1-f;for(let g=0;g!==o;++g)r[g]=a[l+g]*x+a[c+g]*f;return r}let p=o*2,u=e-1;for(let f=0;f!==o;++f){let x=a[l+f],g=a[c+f],m=u*p+f*2,_=d[m],b=d[m+1],y=e*p+f*2,M=h[y],T=h[y+1],R=J1(n,t,_,M,s);r[f]=bp(R,x,b,T,g)}return r}};function bp(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function $1(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function J1(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=bp(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let c=$1(r,e,t,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var Ns=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=fo(t,this.TimeBufferType),this.values=fo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:fo(e.times,Array),values:fo(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Ah(e.settings)&&(n.settings={inTangents:fo(e.settings.inTangents,Array),outTangents:fo(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new A0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new R0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new w0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new C0(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case hl:t=this.InterpolantFactoryMethodDiscrete;break;case p0:t=this.InterpolantFactoryMethodLinear;break;case i0:t=this.InterpolantFactoryMethodSmooth;break;case Ph:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Kt("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return hl;case this.InterpolantFactoryMethodLinear:return p0;case this.InterpolantFactoryMethodSmooth:return i0;case this.InterpolantFactoryMethodBezier:return Ph}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Ah(this.settings)&&(Dd(this.settings.inTangents,e),Dd(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(jt("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(jt("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){jt("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){jt("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&Qm(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){jt("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===i0,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(s)c=!0;else{let d=o*n,p=d-n,u=d+n;for(let f=0;f!==n;++f){let x=t[d+f];if(x!==t[p+f]||x!==t[u+f]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let d=o*n,p=a*n;for(let u=0;u!==n;++u)t[p+u]=t[d+u]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Ah(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Dd(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Ns.prototype.ValueTypeName="";Ns.prototype.TimeBufferType=Float32Array;Ns.prototype.ValueBufferType=Float32Array;Ns.prototype.DefaultInterpolation=p0;var ga=class extends Ns{constructor(e,t,n){super(e,t,n)}};ga.prototype.ValueTypeName="bool";ga.prototype.ValueBufferType=Array;ga.prototype.DefaultInterpolation=hl;ga.prototype.InterpolantFactoryMethodLinear=void 0;ga.prototype.InterpolantFactoryMethodSmooth=void 0;var P0=class extends Ns{constructor(e,t,n,s){super(e,t,n,s)}};P0.prototype.ValueTypeName="color";var I0=class extends Ns{constructor(e,t,n,s){super(e,t,n,s)}};I0.prototype.ValueTypeName="number";var D0=class extends ma{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),l=e*o;for(let h=l+o;l!==h;l+=4)Bn.slerpFlat(r,0,a,l-o,a,l,c);return r}},Fl=class extends Ns{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new D0(this.times,this.values,this.getValueSize(),e)}};Fl.prototype.ValueTypeName="quaternion";Fl.prototype.InterpolantFactoryMethodSmooth=void 0;var xa=class extends Ns{constructor(e,t,n){super(e,t,n)}};xa.prototype.ValueTypeName="string";xa.prototype.ValueBufferType=Array;xa.prototype.DefaultInterpolation=hl;xa.prototype.InterpolantFactoryMethodLinear=void 0;xa.prototype.InterpolantFactoryMethodSmooth=void 0;var L0=class extends Ns{constructor(e,t,n,s){super(e,t,n,s)}};L0.prototype.ValueTypeName="vector";var N0=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,p=l.length;d<p;d+=2){let u=l[d],f=l[d+1];if(u.global&&(u.lastIndex=0),u.test(h))return f}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Tp=new N0,U0=class{constructor(e){this.manager=e!==void 0?e:Tp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};U0.DEFAULT_MATERIAL_NAME="__DEFAULT";var za=class extends yi{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Et(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Ol=class extends za{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(yi.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Et(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Ch=new zt,Ld=new F,Nd=new F,Lo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.mapType=zi,this.map=null,this.mapPass=null,this.matrix=new zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new To,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new ai(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Ld.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ld),Nd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Nd),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Ch.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Ch,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===vo||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(Ch)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},t0=new F,n0=new Bn,Tr=new F,Bl=class extends yi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new zt,this.projectionMatrix=new zt,this.projectionMatrixInverse=new zt,this.coordinateSystem=gr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(t0,n0,Tr),Tr.x===1&&Tr.y===1&&Tr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(t0,n0,Tr.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(t0,n0,Tr),Tr.x===1&&Tr.y===1&&Tr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(t0,n0,Tr.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ha=new F,Ud=new nt,Fd=new nt,$i=class extends Bl{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=gl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(r0*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return gl*2*Math.atan(Math.tan(r0*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ha.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ha.x,ha.y).multiplyScalar(-e/ha.z),ha.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ha.x,ha.y).multiplyScalar(-e/ha.z)}getViewSize(e,t){return this.getViewBounds(e,Ud,Fd),t.subVectors(Fd,Ud)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(r0*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Bh=class extends Lo{constructor(){super(new $i(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=gl*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Hl=class extends za{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(yi.DEFAULT_UP),this.updateMatrix(),this.target=new yi,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Bh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Hh=class extends Lo{constructor(){super(new $i(90,1,.5,500)),this.isPointLightShadow=!0}},ps=class extends za{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Hh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},va=class extends Bl{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},zh=class extends Lo{constructor(){super(new va(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},No=class extends za{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yi.DEFAULT_UP),this.updateMatrix(),this.target=new yi,this.shadow=new zh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var po=-90,mo=1,Uo=class extends yi{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new $i(po,mo,e,t);s.layers=this.layers,this.add(s);let r=new $i(po,mo,e,t);r.layers=this.layers,this.add(r);let a=new $i(po,mo,e,t);a.layers=this.layers,this.add(a);let o=new $i(po,mo,e,t);o.layers=this.layers,this.add(o);let c=new $i(po,mo,e,t);c.layers=this.layers,this.add(c);let l=new $i(po,mo,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===gr)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===vo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,d=e.getRenderTarget(),p=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,p,u),e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}},F0=class extends $i{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},zl=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=K1.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function K1(){this._document.hidden===!1&&this.reset()}var cf="\\[\\]\\.:\\/",Q1=new RegExp("["+cf+"]","g"),uf="[^"+cf+"]",j1="[^"+cf.replace("\\.","")+"]",eg=/((?:WC+[\/:])*)/.source.replace("WC",uf),tg=/(WCOD+)?/.source.replace("WCOD",j1),ng=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",uf),ig=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",uf),sg=new RegExp("^"+eg+tg+ng+ig+"$"),rg=["material","materials","bones","map"],Gh=class{constructor(e,t,n){let s=n||ui.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ui=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Q1,"")}static parseTrackName(e){let t=sg.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);rg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Kt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){jt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){jt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){jt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){jt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){jt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){jt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){jt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;jt("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){jt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){jt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ui.Composite=Gh;ui.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ui.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ui.prototype.GetterByBindingType=[ui.prototype._getValue_direct,ui.prototype._getValue_array,ui.prototype._getValue_arrayElement,ui.prototype._getValue_toArray];ui.prototype.SetterByBindingTypeAndVersioning=[[ui.prototype._setValue_direct,ui.prototype._setValue_direct_setNeedsUpdate,ui.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ui.prototype._setValue_array,ui.prototype._setValue_array_setNeedsUpdate,ui.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ui.prototype._setValue_arrayElement,ui.prototype._setValue_arrayElement_setNeedsUpdate,ui.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ui.prototype._setValue_fromArray,ui.prototype._setValue_fromArray_setNeedsUpdate,ui.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var y_=new Float32Array(1);var Od=new zt,Gl=class{constructor(e,t,n=0,s=1/0){this.ray=new Oa(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Mo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):jt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Od.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Od),this}intersectObject(e,t=!0,n=[]){return kh(e,this,n,t),n.sort(Bd),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)kh(e[s],this,n,t);return n.sort(Bd),n}};function Bd(i,e){return i.distance-e.distance}function kh(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)kh(r[a],e,t,!0)}}var gf=class gf{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};gf.prototype.isMatrix2=!0;var Vh=gf;function hf(i,e,t,n){let s=ag(n);switch(t){case tf:return i*e;case X0:return i*e/s.components*s.byteLength;case Y0:return i*e/s.components*s.byteLength;case ba:return i*e*2/s.components*s.byteLength;case q0:return i*e*2/s.components*s.byteLength;case nf:return i*e*3/s.components*s.byteLength;case rs:return i*e*4/s.components*s.byteLength;case Z0:return i*e*4/s.components*s.byteLength;case Ql:case jl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ec:case tc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case J0:case Q0:return Math.max(i,16)*Math.max(e,8)/4;case $0:case K0:return Math.max(i,8)*Math.max(e,8)/2;case j0:case eu:case nu:case iu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case tu:case nc:case su:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ru:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case au:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ou:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case lu:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case cu:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case uu:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case hu:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case fu:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case du:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case pu:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case mu:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case gu:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case xu:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case vu:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case yu:case _u:case Mu:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Eu:case Su:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ic:case bu:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ag(i){switch(i){case zi:case Kh:return{byteLength:1,components:1};case Oo:case Qh:case hi:return{byteLength:2,components:1};case V0:case W0:return{byteLength:2,components:4};case xr:case k0:case js:return{byteLength:4,components:1};case jh:case ef:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Kt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function qp(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function hg(i){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,d=l.byteLength,p=i.createBuffer();i.bindBuffer(c,p),i.bufferData(c,l,h),o.onUploadCallback();let u;if(l instanceof Float32Array)u=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)u=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)u=i.SHORT;else if(l instanceof Uint32Array)u=i.UNSIGNED_INT;else if(l instanceof Int32Array)u=i.INT;else if(l instanceof Int8Array)u=i.BYTE;else if(l instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:p,type:u,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){let h=c.array,d=c.updateRanges;if(i.bindBuffer(l,o),d.length===0)i.bufferSubData(l,0,h);else{d.sort((u,f)=>u.start-f.start);let p=0;for(let u=1;u<d.length;u++){let f=d[p],x=d[u];x.start<=f.start+f.count+1?f.count=Math.max(f.count,x.start+x.count-f.start):(++p,d[p]=x)}d.length=p+1;for(let u=0,f=d.length;u<f;u++){let x=d[u];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var fg=`#ifdef USE_ALPHAHASH
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
}`,pn={alphahash_fragment:fg,alphahash_pars_fragment:dg,alphamap_fragment:pg,alphamap_pars_fragment:mg,alphatest_fragment:gg,alphatest_pars_fragment:xg,aomap_fragment:vg,aomap_pars_fragment:yg,batching_pars_vertex:_g,batching_vertex:Mg,begin_vertex:Eg,beginnormal_vertex:Sg,bsdfs:bg,iridescence_fragment:Tg,bumpmap_pars_fragment:wg,clipping_planes_fragment:Rg,clipping_planes_pars_fragment:Ag,clipping_planes_pars_vertex:Cg,clipping_planes_vertex:Pg,color_fragment:Ig,color_pars_fragment:Dg,color_pars_vertex:Lg,color_vertex:Ng,common:Ug,cube_uv_reflection_fragment:Fg,defaultnormal_vertex:Og,displacementmap_pars_vertex:Bg,displacementmap_vertex:Hg,emissivemap_fragment:zg,emissivemap_pars_fragment:Gg,colorspace_fragment:kg,colorspace_pars_fragment:Vg,envmap_fragment:Wg,envmap_common_pars_fragment:Xg,envmap_pars_fragment:Yg,envmap_pars_vertex:qg,envmap_physical_pars_fragment:s2,envmap_vertex:Zg,fog_vertex:$g,fog_pars_vertex:Jg,fog_fragment:Kg,fog_pars_fragment:Qg,gradientmap_pars_fragment:jg,lightmap_pars_fragment:e2,lights_lambert_fragment:t2,lights_lambert_pars_fragment:n2,lights_pars_begin:i2,lights_toon_fragment:r2,lights_toon_pars_fragment:a2,lights_phong_fragment:o2,lights_phong_pars_fragment:l2,lights_physical_fragment:c2,lights_physical_pars_fragment:u2,lights_fragment_begin:h2,lights_fragment_maps:f2,lights_fragment_end:d2,lightprobes_pars_fragment:p2,logdepthbuf_fragment:m2,logdepthbuf_pars_fragment:g2,logdepthbuf_pars_vertex:x2,logdepthbuf_vertex:v2,map_fragment:y2,map_pars_fragment:_2,map_particle_fragment:M2,map_particle_pars_fragment:E2,metalnessmap_fragment:S2,metalnessmap_pars_fragment:b2,morphinstance_vertex:T2,morphcolor_vertex:w2,morphnormal_vertex:R2,morphtarget_pars_vertex:A2,morphtarget_vertex:C2,normal_fragment_begin:P2,normal_fragment_maps:I2,normal_pars_fragment:D2,normal_pars_vertex:L2,normal_vertex:N2,normalmap_pars_fragment:U2,clearcoat_normal_fragment_begin:F2,clearcoat_normal_fragment_maps:O2,clearcoat_pars_fragment:B2,iridescence_pars_fragment:H2,opaque_fragment:z2,packing:G2,premultiplied_alpha_fragment:k2,project_vertex:V2,dithering_fragment:W2,dithering_pars_fragment:X2,roughnessmap_fragment:Y2,roughnessmap_pars_fragment:q2,shadowmap_pars_fragment:Z2,shadowmap_pars_vertex:$2,shadowmap_vertex:J2,shadowmask_pars_fragment:K2,skinbase_vertex:Q2,skinning_pars_vertex:j2,skinning_vertex:ex,skinnormal_vertex:tx,specularmap_fragment:nx,specularmap_pars_fragment:ix,tonemapping_fragment:sx,tonemapping_pars_fragment:rx,transmission_fragment:ax,transmission_pars_fragment:ox,uv_pars_fragment:lx,uv_pars_vertex:cx,uv_vertex:ux,worldpos_vertex:hx,background_vert:fx,background_frag:dx,backgroundCube_vert:px,backgroundCube_frag:mx,cube_vert:gx,cube_frag:xx,depth_vert:vx,depth_frag:yx,distance_vert:_x,distance_frag:Mx,equirect_vert:Ex,equirect_frag:Sx,linedashed_vert:bx,linedashed_frag:Tx,meshbasic_vert:wx,meshbasic_frag:Rx,meshlambert_vert:Ax,meshlambert_frag:Cx,meshmatcap_vert:Px,meshmatcap_frag:Ix,meshnormal_vert:Dx,meshnormal_frag:Lx,meshphong_vert:Nx,meshphong_frag:Ux,meshphysical_vert:Fx,meshphysical_frag:Ox,meshtoon_vert:Bx,meshtoon_frag:Hx,points_vert:zx,points_frag:Gx,shadow_vert:kx,shadow_frag:Vx,sprite_vert:Wx,sprite_frag:Xx},Ht={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new cn},alphaMap:{value:null},alphaMapTransform:{value:new cn},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new cn}},envmap:{envMap:{value:null},envMapRotation:{value:new cn},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new cn}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new cn}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new cn},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new cn},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new cn},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new cn}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new cn}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new cn}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new F},probesMax:{value:new F},probesResolution:{value:new F}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new cn},alphaTest:{value:0},uvTransform:{value:new cn}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new cn},alphaMap:{value:null},alphaMapTransform:{value:new cn},alphaTest:{value:0}}},Br={basic:{uniforms:ms([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.fog]),vertexShader:pn.meshbasic_vert,fragmentShader:pn.meshbasic_frag},lambert:{uniforms:ms([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new Et(0)},envMapIntensity:{value:1}}]),vertexShader:pn.meshlambert_vert,fragmentShader:pn.meshlambert_frag},phong:{uniforms:ms([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:pn.meshphong_vert,fragmentShader:pn.meshphong_frag},standard:{uniforms:ms([Ht.common,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.roughnessmap,Ht.metalnessmap,Ht.fog,Ht.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pn.meshphysical_vert,fragmentShader:pn.meshphysical_frag},toon:{uniforms:ms([Ht.common,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.gradientmap,Ht.fog,Ht.lights,{emissive:{value:new Et(0)}}]),vertexShader:pn.meshtoon_vert,fragmentShader:pn.meshtoon_frag},matcap:{uniforms:ms([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,{matcap:{value:null}}]),vertexShader:pn.meshmatcap_vert,fragmentShader:pn.meshmatcap_frag},points:{uniforms:ms([Ht.points,Ht.fog]),vertexShader:pn.points_vert,fragmentShader:pn.points_frag},dashed:{uniforms:ms([Ht.common,Ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pn.linedashed_vert,fragmentShader:pn.linedashed_frag},depth:{uniforms:ms([Ht.common,Ht.displacementmap]),vertexShader:pn.depth_vert,fragmentShader:pn.depth_frag},normal:{uniforms:ms([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,{opacity:{value:1}}]),vertexShader:pn.meshnormal_vert,fragmentShader:pn.meshnormal_frag},sprite:{uniforms:ms([Ht.sprite,Ht.fog]),vertexShader:pn.sprite_vert,fragmentShader:pn.sprite_frag},background:{uniforms:{uvTransform:{value:new cn},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pn.background_vert,fragmentShader:pn.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new cn}},vertexShader:pn.backgroundCube_vert,fragmentShader:pn.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pn.cube_vert,fragmentShader:pn.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pn.equirect_vert,fragmentShader:pn.equirect_frag},distance:{uniforms:ms([Ht.common,Ht.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pn.distance_vert,fragmentShader:pn.distance_frag},shadow:{uniforms:ms([Ht.lights,Ht.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:pn.shadow_vert,fragmentShader:pn.shadow_frag}};Br.physical={uniforms:ms([Br.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new cn},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new cn},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new cn},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new cn},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new cn},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new cn},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new cn},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new cn},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new cn},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new cn},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new cn},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new cn}}]),vertexShader:pn.meshphysical_vert,fragmentShader:pn.meshphysical_frag};var Ru={r:0,b:0,g:0},Yx=new zt,Zp=new cn;Zp.set(-1,0,0,0,1,0,0,0,1);function qx(i,e,t,n,s,r){let a=new Et(0),o=s===!0?0:1,c,l,h=null,d=0,p=null;function u(_){let b=_.isScene===!0?_.background:null;if(b&&b.isTexture){let y=_.backgroundBlurriness>0;b=e.get(b,y)}return b}function f(_){let b=!1,y=u(_);y===null?g(a,o):y&&y.isColor&&(g(y,1),b=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?t.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(_,b){let y=u(b);y&&(y.isCubeTexture||y.mapping===Jl)?(l===void 0&&(l=new Fe(new En(1,1,1),new Cn({name:"BackgroundCubeMaterial",uniforms:Wa(Br.backgroundCube.uniforms),vertexShader:Br.backgroundCube.vertexShader,fragmentShader:Br.backgroundCube.fragmentShader,side:es,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(M,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Yx.makeRotationFromEuler(b.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Zp),l.material.toneMapped=bn.getTransfer(y.colorSpace)!==Ln,(h!==y||d!==y.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,p=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Fe(new sn(2,2),new Cn({name:"BackgroundMaterial",uniforms:Wa(Br.background.uniforms),vertexShader:Br.background.vertexShader,fragmentShader:Br.background.fragmentShader,side:ya,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=bn.getTransfer(y.colorSpace)!==Ln,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,p=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function g(_,b){_.getRGB(Ru,lf(i)),t.buffers.color.setClear(Ru.r,Ru.g,Ru.b,b,r)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,b=1){a.set(_),o=b,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,g(a,o)},render:f,addToRenderList:x,dispose:m}}function Zx(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null),r=s,a=!1;function o(G,w,U,N,B){let Z=!1,H=d(G,N,U,w);r!==H&&(r=H,l(r.object)),Z=u(G,N,U,B),Z&&f(G,N,U,B),B!==null&&e.update(B,i.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,y(G,w,U,N),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function c(){return i.createVertexArray()}function l(G){return i.bindVertexArray(G)}function h(G){return i.deleteVertexArray(G)}function d(G,w,U,N){let B=N.wireframe===!0,Z=n[w.id];Z===void 0&&(Z={},n[w.id]=Z);let H=G.isInstancedMesh===!0?G.id:0,Y=Z[H];Y===void 0&&(Y={},Z[H]=Y);let q=Y[U.id];q===void 0&&(q={},Y[U.id]=q);let W=q[B];return W===void 0&&(W=p(c()),q[B]=W),W}function p(G){let w=[],U=[],N=[];for(let B=0;B<t;B++)w[B]=0,U[B]=0,N[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:U,attributeDivisors:N,object:G,attributes:{},index:null}}function u(G,w,U,N){let B=r.attributes,Z=w.attributes,H=0,Y=U.getAttributes();for(let q in Y)if(Y[q].location>=0){let J=B[q],ge=Z[q];if(ge===void 0&&(q==="instanceMatrix"&&G.instanceMatrix&&(ge=G.instanceMatrix),q==="instanceColor"&&G.instanceColor&&(ge=G.instanceColor)),J===void 0||J.attribute!==ge||ge&&J.data!==ge.data)return!0;H++}return r.attributesNum!==H||r.index!==N}function f(G,w,U,N){let B={},Z=w.attributes,H=0,Y=U.getAttributes();for(let q in Y)if(Y[q].location>=0){let J=Z[q];J===void 0&&(q==="instanceMatrix"&&G.instanceMatrix&&(J=G.instanceMatrix),q==="instanceColor"&&G.instanceColor&&(J=G.instanceColor));let ge={};ge.attribute=J,J&&J.data&&(ge.data=J.data),B[q]=ge,H++}r.attributes=B,r.attributesNum=H,r.index=N}function x(){let G=r.newAttributes;for(let w=0,U=G.length;w<U;w++)G[w]=0}function g(G){m(G,0)}function m(G,w){let U=r.newAttributes,N=r.enabledAttributes,B=r.attributeDivisors;U[G]=1,N[G]===0&&(i.enableVertexAttribArray(G),N[G]=1),B[G]!==w&&(i.vertexAttribDivisor(G,w),B[G]=w)}function _(){let G=r.newAttributes,w=r.enabledAttributes;for(let U=0,N=w.length;U<N;U++)w[U]!==G[U]&&(i.disableVertexAttribArray(U),w[U]=0)}function b(G,w,U,N,B,Z,H){H===!0?i.vertexAttribIPointer(G,w,U,B,Z):i.vertexAttribPointer(G,w,U,N,B,Z)}function y(G,w,U,N){x();let B=N.attributes,Z=U.getAttributes(),H=w.defaultAttributeValues;for(let Y in Z){let q=Z[Y];if(q.location>=0){let W=B[Y];if(W===void 0&&(Y==="instanceMatrix"&&G.instanceMatrix&&(W=G.instanceMatrix),Y==="instanceColor"&&G.instanceColor&&(W=G.instanceColor)),W!==void 0){let J=W.normalized,ge=W.itemSize,Ne=e.get(W);if(Ne===void 0)continue;let qe=Ne.buffer,Je=Ne.type,mt=Ne.bytesPerElement,te=Je===i.INT||Je===i.UNSIGNED_INT||W.gpuType===k0;if(W.isInterleavedBufferAttribute){let Ee=W.data,Ue=Ee.stride,be=W.offset;if(Ee.isInstancedInterleavedBuffer){for(let Ge=0;Ge<q.locationSize;Ge++)m(q.location+Ge,Ee.meshPerAttribute);G.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let Ge=0;Ge<q.locationSize;Ge++)g(q.location+Ge);i.bindBuffer(i.ARRAY_BUFFER,qe);for(let Ge=0;Ge<q.locationSize;Ge++)b(q.location+Ge,ge/q.locationSize,Je,J,Ue*mt,(be+ge/q.locationSize*Ge)*mt,te)}else{if(W.isInstancedBufferAttribute){for(let Ee=0;Ee<q.locationSize;Ee++)m(q.location+Ee,W.meshPerAttribute);G.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let Ee=0;Ee<q.locationSize;Ee++)g(q.location+Ee);i.bindBuffer(i.ARRAY_BUFFER,qe);for(let Ee=0;Ee<q.locationSize;Ee++)b(q.location+Ee,ge/q.locationSize,Je,J,ge*mt,ge/q.locationSize*Ee*mt,te)}}else if(H!==void 0){let J=H[Y];if(J!==void 0)switch(J.length){case 2:i.vertexAttrib2fv(q.location,J);break;case 3:i.vertexAttrib3fv(q.location,J);break;case 4:i.vertexAttrib4fv(q.location,J);break;default:i.vertexAttrib1fv(q.location,J)}}}}_()}function M(){A();for(let G in n){let w=n[G];for(let U in w){let N=w[U];for(let B in N){let Z=N[B];for(let H in Z)h(Z[H].object),delete Z[H];delete N[B]}}delete n[G]}}function T(G){if(n[G.id]===void 0)return;let w=n[G.id];for(let U in w){let N=w[U];for(let B in N){let Z=N[B];for(let H in Z)h(Z[H].object),delete Z[H];delete N[B]}}delete n[G.id]}function R(G){for(let w in n){let U=n[w];for(let N in U){let B=U[N];if(B[G.id]===void 0)continue;let Z=B[G.id];for(let H in Z)h(Z[H].object),delete Z[H];delete B[G.id]}}}function v(G){for(let w in n){let U=n[w],N=G.isInstancedMesh===!0?G.id:0,B=U[N];if(B!==void 0){for(let Z in B){let H=B[Z];for(let Y in H)h(H[Y].object),delete H[Y];delete B[Z]}delete U[N],Object.keys(U).length===0&&delete n[w]}}}function A(){I(),a=!0,r!==s&&(r=s,l(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:A,resetDefaultState:I,dispose:M,releaseStatesOfGeometry:T,releaseStatesOfObject:v,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:g,disableUnusedAttributes:_}}function $x(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function o(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let p=0;for(let u=0;u<h;u++)p+=l[u];t.update(p,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Jx(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==rs&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let v=R===hi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==zi&&R!==js&&!v&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(Kt("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let d=t.logarithmicDepthBuffer===!0,p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&p===!1&&Kt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:p,maxTextures:u,maxVertexTextures:f,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:_,maxVaryings:b,maxFragmentUniforms:y,maxSamples:M,samples:T}}function Kx(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Ds,o=new cn,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){let u=d.length!==0||p||n!==0||s;return s=p,n=d.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,p){t=h(d,p,0)},this.setState=function(d,p,u){let f=d.clippingPlanes,x=d.clipIntersection,g=d.clipShadows,m=i.get(d);if(!s||f===null||f.length===0||r&&!g)r?h(null):l();else{let _=r?0:n,b=_*4,y=m.clippingState||null;c.value=y,y=h(f,p,b,u);for(let M=0;M!==b;++M)y[M]=t[M];m.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,p,u,f){let x=d!==null?d.length:0,g=null;if(x!==0){if(g=c.value,f!==!0||g===null){let m=u+x*4,_=p.matrixWorldInverse;o.getNormalMatrix(_),(g===null||g.length<m)&&(g=new Float32Array(m));for(let b=0,y=u;b!==x;++b,y+=4)a.copy(d[b]).applyMatrix4(_,o),a.normal.toArray(g,y),g[y+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}var Ho=4,Qx=6,jx=20,ev=256,rc=new va,wp=new Et,xf=null,vf=0,yf=0,_f=!1,tv=new F,Xa=new F,Ta=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=tv}=r;xf=this._renderer.getRenderTarget(),vf=this._renderer.getActiveCubeFace(),yf=this._renderer.getActiveMipmapLevel(),_f=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ap(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(xf,vf,yf),this._renderer.xr.enabled=_f,e.scissorTest=!1,Bo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ea||e.mapping===Va?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),xf=this._renderer.getRenderTarget(),vf=this._renderer.getActiveCubeFace(),yf=this._renderer.getActiveMipmapLevel(),_f=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ni,minFilter:Ni,generateMipmaps:!1,type:hi,format:rs,colorSpace:fl,depthBuffer:!1},s=Rp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rp(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=nv(r)),this._blurMaterial=sv(r,e,t),this._ggxMaterial=iv(r,e,t)}return s}_compileMaterial(e){let t=new Fe(new en,e);this._renderer.compile(t,rc)}_sceneToCubeUV(e,t,n,s,r){let c=new $i(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,p=d.autoClear,u=d.toneMapping;d.getClearColor(wp),d.toneMapping=Us,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Fe(new En,new Hn({name:"PMREM.Background",side:es,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,g=x.material,m=!1,_=e.background;_?_.isColor&&(g.color.copy(_),e.background=null,m=!0):(g.color.copy(wp),m=!0);for(let b=0;b<6;b++){let y=b%3;y===0?(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[b],r.y,r.z)):y===1?(c.up.set(0,0,l[b]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[b],r.z)):(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[b]));let M=this._cubeSize;Bo(s,y*M,b>2?M:0,M,M),d.setRenderTarget(s),m&&d.render(x,c),d.render(e,c)}d.toneMapping=u,d.autoClear=p,e.background=_}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Ea||e.mapping===Va;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ap());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;Bo(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,rc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,l=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(l*l-h*h),p=l*1.25,u=d*p,{_lodMax:f}=this,x=this._sizeLods[n],g=3*x*(n>f-Ho?n-f+Ho:0),m=4*(this._cubeSize-x);c.envMap.value=e.texture,c.roughness.value=u,c.mipInt.value=f-t,Bo(r,g,m,3*x,2*x),s.setRenderTarget(r),s.render(o,rc),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=f-n,Bo(e,g,m,3*x,2*x),s.setRenderTarget(e),s.render(o,rc)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[s];c.material=o;let l=o.uniforms;l.envMap.value=e.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-Ho?s-this._lodMax+Ho:0),p=4*(this._cubeSize-h);Bo(t,d,p,3*h,2*h),a.setRenderTarget(t),a.render(c,rc)}};function nv(i){let e=[],t=[],n=i,s=i-Ho+1+Qx;for(let r=0;r<s;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),c=-o,l=1+o,h=[c,c,l,c,l,l,c,c,l,l,c,l],d=6,p=6,u=3,f=new Float32Array(u*p*d),x=new Float32Array(u*p*d);for(let m=0;m<d;m++){let _=m%3*2/3-1,b=m>2?0:-1,y=[_,b,0,_+2/3,b,0,_+2/3,b+1,0,_,b,0,_+2/3,b+1,0,_,b+1,0];f.set(y,u*p*m);for(let M=0;M<p;M++){let T=h[M*2]*2-1,R=h[M*2+1]*2-1;m===0?Xa.set(1,R,T):m===1?Xa.set(-T,1,-R):m===2?Xa.set(-T,R,1):m===3?Xa.set(-1,R,-T):m===4?Xa.set(-T,-1,R):Xa.set(T,R,-1),Xa.toArray(x,(m*p+M)*u)}}let g=new en;g.setAttribute("position",new $t(f,u)),g.setAttribute("outputDirection",new $t(x,u)),t.push(new Fe(g,null)),n>Ho&&n--}return{lodMeshes:t,sizeLods:e}}function Rp(i,e,t){let n=new oi(i,e,t);return n.texture.mapping=Jl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Bo(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function iv(i,e,t){return new Cn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ev,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Pu(),fragmentShader:`

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
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function sv(i,e,t){return new Cn({name:"SphericalGaussianBlur",defines:{SAMPLES:jx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Pu(),fragmentShader:`

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
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function Ap(){return new Cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pu(),fragmentShader:`

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
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function Cp(){return new Cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pu(),fragmentShader:`

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
			`},s=new En(5,5,5),r=new Cn({name:"CubemapFromEquirect",uniforms:Wa(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:es,blending:Ai});r.uniforms.tEquirect.value=t;let a=new Fe(s,r),o=t.minFilter;return t.minFilter===Ur&&(t.minFilter=Ni),new Uo(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};function rv(i){let e=new WeakMap,t=new WeakMap,n=null;function s(p,u=!1){return p==null?null:u?a(p):r(p)}function r(p){if(p&&p.isTexture){let u=p.mapping;if(u===H0||u===z0)if(e.has(p)){let f=e.get(p).texture;return o(f,p.mapping)}else{let f=p.image;if(f&&f.height>0){let x=new Go(f.height);return x.fromEquirectangularTexture(i,p),e.set(p,x),p.addEventListener("dispose",l),o(x.texture,p.mapping)}else return null}}return p}function a(p){if(p&&p.isTexture){let u=p.mapping,f=u===H0||u===z0,x=u===Ea||u===Va;if(f||x){let g=t.get(p),m=g!==void 0?g.texture.pmremVersion:0;if(p.isRenderTargetTexture&&p.pmremVersion!==m)return n===null&&(n=new Ta(i)),g=f?n.fromEquirectangular(p,g):n.fromCubemap(p,g),g.texture.pmremVersion=p.pmremVersion,t.set(p,g),g.texture;if(g!==void 0)return g.texture;{let _=p.image;return f&&_&&_.height>0||x&&_&&c(_)?(n===null&&(n=new Ta(i)),g=f?n.fromEquirectangular(p):n.fromCubemap(p),g.texture.pmremVersion=p.pmremVersion,t.set(p,g),p.addEventListener("dispose",h),g.texture):null}}}return p}function o(p,u){return u===H0?p.mapping=Ea:u===z0&&(p.mapping=Va),p}function c(p){let u=0,f=6;for(let x=0;x<f;x++)p[x]!==void 0&&u++;return u===f}function l(p){let u=p.target;u.removeEventListener("dispose",l);let f=e.get(u);f!==void 0&&(e.delete(u),f.dispose())}function h(p){let u=p.target;u.removeEventListener("dispose",h);let f=t.get(u);f!==void 0&&(t.delete(u),f.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function av(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Ua("WebGLRenderer: "+n+" extension not supported."),s}}}function ov(i,e,t,n){let s={},r=new WeakMap;function a(d){let p=d.target;p.index!==null&&e.remove(p.index);for(let f in p.attributes)e.remove(p.attributes[f]);p.removeEventListener("dispose",a),delete s[p.id];let u=r.get(p);u&&(e.remove(u),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function o(d,p){return s[p.id]===!0||(p.addEventListener("dispose",a),s[p.id]=!0,t.memory.geometries++),p}function c(d){let p=d.attributes;for(let u in p)e.update(p[u],i.ARRAY_BUFFER)}function l(d){let p=[],u=d.index,f=d.attributes.position,x=0;if(f===void 0)return;if(u!==null){let _=u.array;x=u.version;for(let b=0,y=_.length;b<y;b+=3){let M=_[b+0],T=_[b+1],R=_[b+2];p.push(M,T,T,R,R,M)}}else{let _=f.array;x=f.version;for(let b=0,y=_.length/3-1;b<y;b+=3){let M=b+0,T=b+1,R=b+2;p.push(M,T,T,R,R,M)}}let g=new(f.count>=65535?_l:yl)(p,1);g.version=x;let m=r.get(d);m&&e.remove(m),r.set(d,g)}function h(d){let p=r.get(d);if(p){let u=d.index;u!==null&&p.version<u.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function lv(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,p){i.drawElements(n,p,r,d*a),t.update(p,n,1)}function l(d,p,u){u!==0&&(i.drawElementsInstanced(n,p,r,d*a,u),t.update(p,n,u))}function h(d,p,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,u);let x=0;for(let g=0;g<u;g++)x+=p[g];t.update(x,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function cv(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:jt("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function uv(i,e,t){let n=new WeakMap,s=new ai;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,p=n.get(o);if(p===void 0||p.count!==d){let A=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",A)};p!==void 0&&p.texture.dispose();let u=o.morphAttributes.position!==void 0,f=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],b=0;u===!0&&(b=1),f===!0&&(b=2),x===!0&&(b=3);let y=o.attributes.position.count*b,M=1;y>e.maxTextureSize&&(M=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let T=new Float32Array(y*M*4*d),R=new xl(T,y,M,d);R.type=js,R.needsUpdate=!0;let v=b*4;for(let I=0;I<d;I++){let G=g[I],w=m[I],U=_[I],N=y*M*4*I;for(let B=0;B<G.count;B++){let Z=B*v;u===!0&&(s.fromBufferAttribute(G,B),T[N+Z+0]=s.x,T[N+Z+1]=s.y,T[N+Z+2]=s.z,T[N+Z+3]=0),f===!0&&(s.fromBufferAttribute(w,B),T[N+Z+4]=s.x,T[N+Z+5]=s.y,T[N+Z+6]=s.z,T[N+Z+7]=0),x===!0&&(s.fromBufferAttribute(U,B),T[N+Z+8]=s.x,T[N+Z+9]=s.y,T[N+Z+10]=s.z,T[N+Z+11]=U.itemSize===4?s.w:1)}}p={count:d,texture:R,size:new nt(y,M)},n.set(o,p),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let u=0;for(let x=0;x<l.length;x++)u+=l[x];let f=o.morphTargetsRelative?1:1-u;c.getUniforms().setValue(i,"morphTargetBaseInfluence",f),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:r}}function hv(i,e,t,n,s){let r=new WeakMap;function a(l){let h=s.render.frame,d=l.geometry,p=e.get(l,d);if(r.get(p)!==h&&(e.update(p),r.set(p,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let u=l.skeleton;r.get(u)!==h&&(u.update(),r.set(u,h))}return p}function o(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var fv={[Wl]:"LINEAR_TONE_MAPPING",[Xl]:"REINHARD_TONE_MAPPING",[Yl]:"CINEON_TONE_MAPPING",[Ma]:"ACES_FILMIC_TONE_MAPPING",[Zl]:"AGX_TONE_MAPPING",[$l]:"NEUTRAL_TONE_MAPPING",[ql]:"CUSTOM_TONE_MAPPING"};function dv(i,e,t,n,s,r){let a=new oi(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=new en;l.setAttribute("position",new qt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new qt([0,2,0,0,2,0],2));let h=new Io({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Fe(l,h),p=new va(-1,1,1,-1,0,1),u=null,f=null,x=!1,g,m=null,_=[],b=!1;this.setSize=function(y,M){a.setSize(y,M),o!==null&&o.setSize(y,M),c!==null&&c.setSize(y,M);for(let T=0;T<_.length;T++){let R=_[T];R.setSize&&R.setSize(y,M)}},this.setEffects=function(y){_=y,b=_.length>0&&_[0].isRenderPass===!0;let M=a.width,T=a.height;_.length>0&&o===null&&(o=new oi(M,T,{type:hi,depthBuffer:!1,stencilBuffer:!1}),c=new oi(M,T,{type:hi,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<_.length;R++){let v=_[R];v.setSize&&v.setSize(M,T)}},this.begin=function(y,M){if(x||y.toneMapping===Us&&_.length===0)return!1;if(m=M,M!==null){let T=M.width,R=M.height;(a.width!==T||a.height!==R)&&this.setSize(T,R)}return b===!1&&y.setRenderTarget(a),g=y.toneMapping,y.toneMapping=Us,!0},this.hasRenderPass=function(){return b},this.end=function(y,M){y.toneMapping=g,x=!0;let T=a,R=o;for(let v=0;v<_.length;v++){let A=_[v];A.enabled!==!1&&(A.render(y,R,T,M),A.needsSwap!==!1&&(T=R,R=R===o?c:o))}if(u!==y.outputColorSpace||f!==y.toneMapping){u=y.outputColorSpace,f=y.toneMapping,h.defines={},bn.getTransfer(u)===Ln&&(h.defines.SRGB_TRANSFER="");let v=fv[f];v&&(h.defines[v]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=T.texture,y.setRenderTarget(m),y.render(d,p),m=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),h.dispose()}}var $p=new Ms,Sf=new Js(1,1),Jp=new xl,Kp=new x0,Qp=new El,Pp=[],Ip=[],Dp=new Float32Array(16),Lp=new Float32Array(9),Np=new Float32Array(4);function ko(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Pp[s];if(r===void 0&&(r=new Float32Array(s),Pp[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Gi(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function ki(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Iu(i,e){let t=Ip[e];t===void 0&&(t=new Int32Array(e),Ip[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function pv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function mv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gi(t,e))return;i.uniform2fv(this.addr,e),ki(t,e)}}function gv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Gi(t,e))return;i.uniform3fv(this.addr,e),ki(t,e)}}function xv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gi(t,e))return;i.uniform4fv(this.addr,e),ki(t,e)}}function vv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Gi(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),ki(t,e)}else{if(Gi(t,n))return;Np.set(n),i.uniformMatrix2fv(this.addr,!1,Np),ki(t,n)}}function yv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Gi(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),ki(t,e)}else{if(Gi(t,n))return;Lp.set(n),i.uniformMatrix3fv(this.addr,!1,Lp),ki(t,n)}}function _v(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Gi(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),ki(t,e)}else{if(Gi(t,n))return;Dp.set(n),i.uniformMatrix4fv(this.addr,!1,Dp),ki(t,n)}}function Mv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Ev(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gi(t,e))return;i.uniform2iv(this.addr,e),ki(t,e)}}function Sv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gi(t,e))return;i.uniform3iv(this.addr,e),ki(t,e)}}function bv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gi(t,e))return;i.uniform4iv(this.addr,e),ki(t,e)}}function Tv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function wv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gi(t,e))return;i.uniform2uiv(this.addr,e),ki(t,e)}}function Rv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gi(t,e))return;i.uniform3uiv(this.addr,e),ki(t,e)}}function Av(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gi(t,e))return;i.uniform4uiv(this.addr,e),ki(t,e)}}function Cv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Sf.compareFunction=t.isReversedDepthBuffer()?wu:Tu,r=Sf):r=$p,t.setTexture2D(e||r,s)}function Pv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Kp,s)}function Iv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Qp,s)}function Dv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Jp,s)}function Lv(i){switch(i){case 5126:return pv;case 35664:return mv;case 35665:return gv;case 35666:return xv;case 35674:return vv;case 35675:return yv;case 35676:return _v;case 5124:case 35670:return Mv;case 35667:case 35671:return Ev;case 35668:case 35672:return Sv;case 35669:case 35673:return bv;case 5125:return Tv;case 36294:return wv;case 36295:return Rv;case 36296:return Av;case 35678:case 36198:case 36298:case 36306:case 35682:return Cv;case 35679:case 36299:case 36307:return Pv;case 35680:case 36300:case 36308:case 36293:return Iv;case 36289:case 36303:case 36311:case 36292:return Dv}}function Nv(i,e){i.uniform1fv(this.addr,e)}function Uv(i,e){let t=ko(e,this.size,2);i.uniform2fv(this.addr,t)}function Fv(i,e){let t=ko(e,this.size,3);i.uniform3fv(this.addr,t)}function Ov(i,e){let t=ko(e,this.size,4);i.uniform4fv(this.addr,t)}function Bv(i,e){let t=ko(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Hv(i,e){let t=ko(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function zv(i,e){let t=ko(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Gv(i,e){i.uniform1iv(this.addr,e)}function kv(i,e){i.uniform2iv(this.addr,e)}function Vv(i,e){i.uniform3iv(this.addr,e)}function Wv(i,e){i.uniform4iv(this.addr,e)}function Xv(i,e){i.uniform1uiv(this.addr,e)}function Yv(i,e){i.uniform2uiv(this.addr,e)}function qv(i,e){i.uniform3uiv(this.addr,e)}function Zv(i,e){i.uniform4uiv(this.addr,e)}function $v(i,e,t){let n=this.cache,s=e.length,r=Iu(t,s);Gi(n,r)||(i.uniform1iv(this.addr,r),ki(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Sf:a=$p;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Jv(i,e,t){let n=this.cache,s=e.length,r=Iu(t,s);Gi(n,r)||(i.uniform1iv(this.addr,r),ki(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Kp,r[a])}function Kv(i,e,t){let n=this.cache,s=e.length,r=Iu(t,s);Gi(n,r)||(i.uniform1iv(this.addr,r),ki(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Qp,r[a])}function Qv(i,e,t){let n=this.cache,s=e.length,r=Iu(t,s);Gi(n,r)||(i.uniform1iv(this.addr,r),ki(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Jp,r[a])}function jv(i){switch(i){case 5126:return Nv;case 35664:return Uv;case 35665:return Fv;case 35666:return Ov;case 35674:return Bv;case 35675:return Hv;case 35676:return zv;case 5124:case 35670:return Gv;case 35667:case 35671:return kv;case 35668:case 35672:return Vv;case 35669:case 35673:return Wv;case 5125:return Xv;case 36294:return Yv;case 36295:return qv;case 36296:return Zv;case 35678:case 36198:case 36298:case 36306:case 35682:return $v;case 35679:case 36299:case 36307:return Jv;case 35680:case 36300:case 36308:case 36293:return Kv;case 36289:case 36303:case 36311:case 36292:return Qv}}var bf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Lv(t.type)}},Tf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=jv(t.type)}},wf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Mf=/(\w+)(\])?(\[|\.)?/g;function Up(i,e){i.seq.push(e),i.map[e.id]=e}function ey(i,e,t){let n=i.name,s=n.length;for(Mf.lastIndex=0;;){let r=Mf.exec(n),a=Mf.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Up(t,l===void 0?new bf(o,i,e):new Tf(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new wf(o),Up(t,d)),t=d}}}var zo=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);ey(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Fp(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var ty=37297,ny=0;function iy(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Op=new cn;function sy(i){bn._getMatrix(Op,bn.workingColorSpace,i);let e=`mat3( ${Op.elements.map(t=>t.toFixed(4))} )`;switch(bn.getTransfer(i)){case dl:return[e,"LinearTransferOETF"];case Ln:return[e,"sRGBTransferOETF"];default:return Kt("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Bp(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+iy(i.getShaderSource(e),o)}else return r}function ry(i,e){let t=sy(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var ay={[Wl]:"Linear",[Xl]:"Reinhard",[Yl]:"Cineon",[Ma]:"ACESFilmic",[Zl]:"AgX",[$l]:"Neutral",[ql]:"Custom"};function oy(i,e){let t=ay[e];return t===void 0?(Kt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Au=new F;function ly(){bn.getLuminanceCoefficients(Au);let i=Au.x.toFixed(4),e=Au.y.toFixed(4),t=Au.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(oc).join(`
`)}function uy(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function hy(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function oc(i){return i!==""}function Hp(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var fy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rf(i){return i.replace(fy,py)}var dy=new Map;function py(i,e){let t=pn[e];if(t===void 0){let n=dy.get(e);if(n!==void 0)t=pn[n],Kt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Rf(t)}var my=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gp(i){return i.replace(my,gy)}function gy(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function kp(i){let e=`precision ${i.precision} float;
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
`),m=[kp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Us?"#define TONE_MAPPING":"",t.toneMapping!==Us?pn.tonemapping_pars_fragment:"",t.toneMapping!==Us?oy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",pn.colorspace_pars_fragment,ry("linearToOutputTexel",t.outputColorSpace),ly(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(oc).join(`
`)),a=Rf(a),a=Hp(a,t),a=zp(a,t),o=Rf(o),o=Hp(o,t),o=zp(o,t),a=Gp(a),o=Gp(o),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===af?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===af?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let b=_+g+a,y=_+m+o,M=Fp(s,s.VERTEX_SHADER,b),T=Fp(s,s.FRAGMENT_SHADER,y);s.attachShader(x,M),s.attachShader(x,T),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function R(G){if(i.debug.checkShaderErrors){let w=s.getProgramInfoLog(x)||"",U=s.getShaderInfoLog(M)||"",N=s.getShaderInfoLog(T)||"",B=w.trim(),Z=U.trim(),H=N.trim(),Y=!0,q=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,M,T);else{let W=Bp(s,M,"vertex"),J=Bp(s,T,"fragment");jt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+B+`
`+W+`
`+J)}else B!==""?Kt("WebGLProgram: Program Info Log:",B):(Z===""||H==="")&&(q=!1);q&&(G.diagnostics={runnable:Y,programLog:B,vertexShader:{log:Z,prefix:g},fragmentShader:{log:H,prefix:m}})}s.deleteShader(M),s.deleteShader(T),v=new zo(s,x),A=hy(s,x)}let v;this.getUniforms=function(){return v===void 0&&R(this),v};let A;this.getAttributes=function(){return A===void 0&&R(this),A};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(x,ty)),I},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ny++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=M,this.fragmentShader=T,this}var Ry=0,Af=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Cf(e),t.set(e,n)),n}},Cf=class{constructor(e){this.id=Ry++,this.code=e,this.usedTimes=0}};function Ay(i){return i===ba||i===nc||i===ic}function Cy(i,e,t,n,s,r){let a=new Mo,o=new Af,c=new Set,l=[],h=new Map,d=n.logarithmicDepthBuffer,p=n.precision,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(v){return c.add(v),v===0?"uv":`uv${v}`}function x(v,A,I,G,w,U){let N=G.fog,B=w.geometry,Z=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?G.environment:null,H=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,Y=e.get(v.envMap||Z,H),q=Y&&Y.mapping===Jl?Y.image.height:null,W=u[v.type];v.precision!==null&&(p=n.getMaxPrecision(v.precision),p!==v.precision&&Kt("WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));let J=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ge=J!==void 0?J.length:0,Ne=0;B.morphAttributes.position!==void 0&&(Ne=1),B.morphAttributes.normal!==void 0&&(Ne=2),B.morphAttributes.color!==void 0&&(Ne=3);let qe,Je,mt,te;if(W){let vt=Br[W];qe=vt.vertexShader,Je=vt.fragmentShader}else{qe=v.vertexShader,Je=v.fragmentShader;let vt=o.getVertexShaderStage(v),Ft=o.getFragmentShaderStage(v);o.update(v,vt,Ft),mt=vt.id,te=Ft.id}let Ee=i.getRenderTarget(),Ue=i.state.buffers.depth.getReversed(),be=w.isInstancedMesh===!0,Ge=w.isBatchedMesh===!0,re=!!v.map,Qe=!!v.matcap,ue=!!Y,me=!!v.aoMap,ie=!!v.lightMap,xe=!!v.bumpMap&&v.wireframe===!1,we=!!v.normalMap,$e=!!v.displacementMap,Xe=!!v.emissiveMap,lt=!!v.metalnessMap,ft=!!v.roughnessMap,j=v.anisotropy>0,Dt=v.clearcoat>0,_t=v.dispersion>0,z=v.retroreflectivity>0,S=v.iridescence>0,le=v.sheen>0,he=v.transmission>0,_e=j&&!!v.anisotropyMap,rt=Dt&&!!v.clearcoatMap,it=Dt&&!!v.clearcoatNormalMap,Oe=Dt&&!!v.clearcoatRoughnessMap,Ve=S&&!!v.iridescenceMap,je=S&&!!v.iridescenceThicknessMap,xt=le&&!!v.sheenColorMap,D=le&&!!v.sheenRoughnessMap,oe=!!v.specularMap,fe=!!v.specularColorMap,Re=!!v.specularIntensityMap,We=he&&!!v.transmissionMap,k=he&&!!v.thicknessMap,Le=!!v.gradientMap,de=!!v.alphaMap,Be=v.alphaTest>0,Pe=!!v.alphaHash,ae=!!v.extensions,at=Us;v.toneMapped&&(Ee===null||Ee.isXRRenderTarget===!0)&&(at=i.toneMapping);let Ze={shaderID:W,shaderType:v.type,shaderName:v.name,vertexShader:qe,fragmentShader:Je,defines:v.defines,customVertexShaderID:mt,customFragmentShaderID:te,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,batching:Ge,batchingColor:Ge&&w._colorsTexture!==null,instancing:be,instancingColor:be&&w.instanceColor!==null,instancingMorph:be&&w.morphTexture!==null,outputColorSpace:Ee===null?i.outputColorSpace:Ee.isXRRenderTarget===!0?Ee.texture.colorSpace:bn.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:re,matcap:Qe,envMap:ue,envMapMode:ue&&Y.mapping,envMapCubeUVHeight:q,aoMap:me,lightMap:ie,bumpMap:xe,normalMap:we,displacementMap:$e,emissiveMap:Xe,normalMapObjectSpace:we&&v.normalMapType===ap,normalMapTangentSpace:we&&v.normalMapType===sc,packedNormalMap:we&&v.normalMapType===sc&&Ay(v.normalMap.format),metalnessMap:lt,roughnessMap:ft,anisotropy:j,anisotropyMap:_e,clearcoat:Dt,clearcoatMap:rt,clearcoatNormalMap:it,clearcoatRoughnessMap:Oe,dispersion:_t,retroreflection:z,iridescence:S,iridescenceMap:Ve,iridescenceThicknessMap:je,sheen:le,sheenColorMap:xt,sheenRoughnessMap:D,specularMap:oe,specularColorMap:fe,specularIntensityMap:Re,transmission:he,transmissionMap:We,thicknessMap:k,gradientMap:Le,opaque:v.transparent===!1&&v.blending===_a&&v.alphaToCoverage===!1,alphaMap:de,alphaTest:Be,alphaHash:Pe,combine:v.combine,mapUv:re&&f(v.map.channel),aoMapUv:me&&f(v.aoMap.channel),lightMapUv:ie&&f(v.lightMap.channel),bumpMapUv:xe&&f(v.bumpMap.channel),normalMapUv:we&&f(v.normalMap.channel),displacementMapUv:$e&&f(v.displacementMap.channel),emissiveMapUv:Xe&&f(v.emissiveMap.channel),metalnessMapUv:lt&&f(v.metalnessMap.channel),roughnessMapUv:ft&&f(v.roughnessMap.channel),anisotropyMapUv:_e&&f(v.anisotropyMap.channel),clearcoatMapUv:rt&&f(v.clearcoatMap.channel),clearcoatNormalMapUv:it&&f(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Oe&&f(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Ve&&f(v.iridescenceMap.channel),iridescenceThicknessMapUv:je&&f(v.iridescenceThicknessMap.channel),sheenColorMapUv:xt&&f(v.sheenColorMap.channel),sheenRoughnessMapUv:D&&f(v.sheenRoughnessMap.channel),specularMapUv:oe&&f(v.specularMap.channel),specularColorMapUv:fe&&f(v.specularColorMap.channel),specularIntensityMapUv:Re&&f(v.specularIntensityMap.channel),transmissionMapUv:We&&f(v.transmissionMap.channel),thicknessMapUv:k&&f(v.thicknessMap.channel),alphaMapUv:de&&f(v.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(we||j),vertexNormals:!!B.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:w.isPoints===!0&&!!B.attributes.uv&&(re||de),fog:!!N,useFog:v.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||B.attributes.normal===void 0&&we===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Ue,skinning:w.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:Ne,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:U.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:at,decodeVideoTexture:re&&v.map.isVideoTexture===!0&&bn.getTransfer(v.map.colorSpace)===Ln,decodeVideoTextureEmissive:Xe&&v.emissiveMap.isVideoTexture===!0&&bn.getTransfer(v.emissiveMap.colorSpace)===Ln,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===li,flipSided:v.side===es,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ae&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&v.extensions.multiDraw===!0||Ge)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ze.vertexUv1s=c.has(1),Ze.vertexUv2s=c.has(2),Ze.vertexUv3s=c.has(3),c.clear(),Ze}function g(v){let A=[];if(v.shaderID?A.push(v.shaderID):(A.push(v.customVertexShaderID),A.push(v.customFragmentShaderID)),v.defines!==void 0)for(let I in v.defines)A.push(I),A.push(v.defines[I]);return v.isRawShaderMaterial===!1&&(m(A,v),_(A,v),A.push(i.outputColorSpace)),A.push(v.customProgramCacheKey),A.join()}function m(v,A){v.push(A.precision),v.push(A.outputColorSpace),v.push(A.envMapMode),v.push(A.envMapCubeUVHeight),v.push(A.mapUv),v.push(A.alphaMapUv),v.push(A.lightMapUv),v.push(A.aoMapUv),v.push(A.bumpMapUv),v.push(A.normalMapUv),v.push(A.displacementMapUv),v.push(A.emissiveMapUv),v.push(A.metalnessMapUv),v.push(A.roughnessMapUv),v.push(A.anisotropyMapUv),v.push(A.clearcoatMapUv),v.push(A.clearcoatNormalMapUv),v.push(A.clearcoatRoughnessMapUv),v.push(A.iridescenceMapUv),v.push(A.iridescenceThicknessMapUv),v.push(A.sheenColorMapUv),v.push(A.sheenRoughnessMapUv),v.push(A.specularMapUv),v.push(A.specularColorMapUv),v.push(A.specularIntensityMapUv),v.push(A.transmissionMapUv),v.push(A.thicknessMapUv),v.push(A.combine),v.push(A.fogExp2),v.push(A.sizeAttenuation),v.push(A.morphTargetsCount),v.push(A.morphAttributeCount),v.push(A.numSunLights),v.push(A.numDirLights),v.push(A.numPointLights),v.push(A.numSpotLights),v.push(A.numSpotLightMaps),v.push(A.numHemiLights),v.push(A.numRectAreaLights),v.push(A.numSunLightShadows),v.push(A.numDirLightShadows),v.push(A.numPointLightShadows),v.push(A.numSpotLightShadows),v.push(A.numSpotLightShadowsWithMaps),v.push(A.numLightProbes),v.push(A.shadowMapType),v.push(A.toneMapping),v.push(A.numClippingPlanes),v.push(A.numClipIntersection),v.push(A.depthPacking)}function _(v,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.retroreflection&&a.enable(24),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),A.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function b(v){let A=u[v.type],I;if(A){let G=Br[A];I=Es.clone(G.uniforms)}else I=v.uniforms;return I}function y(v,A){let I=h.get(A);return I!==void 0?++I.usedTimes:(I=new wy(i,A,v,s),l.push(I),h.set(A,I)),I}function M(v){if(--v.usedTimes===0){let A=l.indexOf(v);l[A]=l[l.length-1],l.pop(),h.delete(v.cacheKey),v.destroy()}}function T(v){o.remove(v)}function R(){o.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:b,acquireProgram:y,releaseProgram:M,releaseShaderCache:T,programs:l,dispose:R}}function Py(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Iy(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Vp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Wp(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(p){let u=0;return p.isInstancedMesh&&(u+=2),p.isSkinnedMesh&&(u+=1),u}function o(p,u,f,x,g,m){let _=i[e];return _===void 0?(_={id:p.id,object:p,geometry:u,material:f,materialVariant:a(p),groupOrder:x,renderOrder:p.renderOrder,z:g,group:m},i[e]=_):(_.id=p.id,_.object=p,_.geometry=u,_.material=f,_.materialVariant=a(p),_.groupOrder=x,_.renderOrder=p.renderOrder,_.z=g,_.group=m),e++,_}function c(p,u,f,x,g,m,_){_.reversedDepth===!0&&(g=-g);let b=o(p,u,f,x,g,m);f.transmission>0?n.push(b):f.transparent===!0?s.push(b):t.push(b)}function l(p,u,f,x,g,m){let _=o(p,u,f,x,g,m);f.transmission>0?n.unshift(_):f.transparent===!0?s.unshift(_):t.unshift(_)}function h(p,u){t.length>1&&t.sort(p||Iy),n.length>1&&n.sort(u||Vp),s.length>1&&s.sort(u||Vp)}function d(){for(let p=e,u=i.length;p<u;p++){let f=i[p];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:d,sort:h}}function Dy(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Wp,i.set(n,[a])):s>=r.length?(a=new Wp,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Ly(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new F,color:new Et};break;case"SpotLight":t={position:new F,direction:new F,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":t={color:new Et,position:new F,halfWidth:new F,halfHeight:new F};break}return i[e.id]=t,t}}}function Ny(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Uy=0;function Fy(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Oy(i){let e=new Ly,t=Ny(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new F);let s=new F,r=new zt,a=new zt;function o(l){let h=0,d=0,p=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let u=0,f=0,x=0,g=0,m=0,_=0,b=0,y=0,M=0,T=0,R=0,v=0,A=0,I=0;l.sort(Fy);for(let w=0,U=l.length;w<U;w++){let N=l[w],B=N.color,Z=N.intensity,H=N.distance,Y=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===ba?Y=N.shadow.map.texture:Y=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)h+=B.r*Z,d+=B.g*Z,p+=B.b*Z;else if(N.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(N.sh.coefficients[q],Z);I++}else if(N.isSunLight){let q=e.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let W=N.shadow,J=t.get(N);J.shadowIntensity=W.intensity,J.shadowBias=W.bias,J.shadowNormalBias=W.normalBias,J.shadowRadius=W.radius,J.shadowMapSize.copy(W.mapSize).multiply(W.getFrameExtents()),n.sunShadow[f]=J,n.sunShadowMap[f]=Y;let ge=W.getViewportCount();for(let Ne=0;Ne<ge;Ne++)n.sunShadowMatrix[x+Ne]=W.getMatrix(Ne),n.sunShadowCascade[x+Ne]=W._cascadeData[Ne];x+=ge,f++}n.sun[u]=q,u++}else if(N.isDirectionalLight){let q=e.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let W=N.shadow,J=t.get(N);J.shadowIntensity=W.intensity,J.shadowBias=W.bias,J.shadowNormalBias=W.normalBias,J.shadowRadius=W.radius,J.shadowMapSize=W.mapSize,n.directionalShadow[g]=J,n.directionalShadowMap[g]=Y,n.directionalShadowMatrix[g]=N.shadow.matrix,M++}n.directional[g]=q,g++}else if(N.isSpotLight){let q=e.get(N);q.position.setFromMatrixPosition(N.matrixWorld),q.color.copy(B).multiplyScalar(Z),q.distance=H,q.coneCos=Math.cos(N.angle),q.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),q.decay=N.decay,n.spot[_]=q;let W=N.shadow;if(N.map&&(n.spotLightMap[v]=N.map,v++,W.updateMatrices(N),N.castShadow&&A++),n.spotLightMatrix[_]=W.matrix,N.castShadow){let J=t.get(N);J.shadowIntensity=W.intensity,J.shadowBias=W.bias,J.shadowNormalBias=W.normalBias,J.shadowRadius=W.radius,J.shadowMapSize=W.mapSize,n.spotShadow[_]=J,n.spotShadowMap[_]=Y,R++}_++}else if(N.isRectAreaLight){let q=e.get(N);q.color.copy(B).multiplyScalar(Z),q.halfWidth.set(N.width*.5,0,0),q.halfHeight.set(0,N.height*.5,0),n.rectArea[b]=q,b++}else if(N.isPointLight){let q=e.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity),q.distance=N.distance,q.decay=N.decay,N.castShadow){let W=N.shadow,J=t.get(N);J.shadowIntensity=W.intensity,J.shadowBias=W.bias,J.shadowNormalBias=W.normalBias,J.shadowRadius=W.radius,J.shadowMapSize=W.mapSize,J.shadowCameraNear=W.camera.near,J.shadowCameraFar=W.camera.far,n.pointShadow[m]=J,n.pointShadowMap[m]=Y,n.pointShadowMatrix[m]=N.shadow.matrix,T++}n.point[m]=q,m++}else if(N.isHemisphereLight){let q=e.get(N);q.skyColor.copy(N.color).multiplyScalar(Z),q.groundColor.copy(N.groundColor).multiplyScalar(Z),n.hemi[y]=q,y++}}b>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ht.LTC_FLOAT_1,n.rectAreaLTC2=Ht.LTC_FLOAT_2):(n.rectAreaLTC1=Ht.LTC_HALF_1,n.rectAreaLTC2=Ht.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=p;let G=n.hash;(G.sunLength!==u||G.directionalLength!==g||G.pointLength!==m||G.spotLength!==_||G.rectAreaLength!==b||G.hemiLength!==y||G.numSunShadows!==f||G.numDirectionalShadows!==M||G.numPointShadows!==T||G.numSpotShadows!==R||G.numSpotMaps!==v||G.numLightProbes!==I)&&(n.sun.length=u,n.directional.length=g,n.spot.length=_,n.rectArea.length=b,n.point.length=m,n.hemi.length=y,n.sunShadow.length=f,n.sunShadowMap.length=f,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=R,n.spotShadowMap.length=R,n.spotLightMatrix.length=R+v-A,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=I,G.sunLength=u,G.directionalLength=g,G.pointLength=m,G.spotLength=_,G.rectAreaLength=b,G.hemiLength=y,G.numSunShadows=f,G.numDirectionalShadows=M,G.numPointShadows=T,G.numSpotShadows=R,G.numSpotMaps=v,G.numLightProbes=I,n.version=Uy++)}function c(l,h){let d=0,p=0,u=0,f=0,x=0,g=0,m=h.matrixWorldInverse;for(let _=0,b=l.length;_<b;_++){let y=l[_];if(y.isSunLight){let M=n.sun[d];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(m),d++}else if(y.isDirectionalLight){let M=n.directional[p];M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),p++}else if(y.isSpotLight){let M=n.spot[f];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),f++}else if(y.isRectAreaLight){let M=n.rectArea[x];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),a.identity(),r.copy(y.matrixWorld),r.premultiply(m),a.extractRotation(r),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),x++}else if(y.isPointLight){let M=n.point[u];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),u++}else if(y.isHemisphereLight){let M=n.hemi[g];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(m),g++}}}return{setup:o,setupView:c,state:n}}function Xp(i){let e=new Oy(i),t=[],n=[],s=[];function r(p){d.camera=p,t.length=0,n.length=0,s.length=0}function a(p){t.push(p)}function o(p){n.push(p)}function c(p){s.push(p)}function l(){e.setup(t)}function h(p){e.setupView(t,p)}let d={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:l,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function By(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Xp(i),e.set(s,[o])):r>=a.length?(o=new Xp(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Hy=`void main() {
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
}`,Gy=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],ky=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],Yp=new zt,ac=new F,Ef=new F;function Vy(i,e,t){let n=new To,s=new nt,r=new nt,a=new ai,o=new Do,c=new T0,l={},h=t.maxTextureSize,d={[ya]:es,[es]:ya,[li]:li},p=new Cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:Hy,fragmentShader:zy}),u=p.clone();u.defines.HORIZONTAL_PASS=1;let f=new en;f.setAttribute("position",new $t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Fe(f,p),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ga;let m=this.type;this.render=function(T,R,v){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===Gd&&(Kt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ga);let A=i.getRenderTarget(),I=i.getActiveCubeFace(),G=i.getActiveMipmapLevel(),w=i.state;w.setBlending(Ai),w.buffers.depth.getReversed()===!0?w.buffers.color.setClear(0,0,0,0):w.buffers.color.setClear(1,1,1,1),w.buffers.depth.setTest(!0),w.setScissorTest(!1);let U=m!==this.type;U&&R.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(B=>B.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,B=T.length;N<B;N++){let Z=T[N],H=Z.shadow;if(H===void 0){Kt("WebGLShadowMap:",Z,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let Y=H.getFrameExtents();s.multiply(Y),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Y.x),s.x=r.x*Y.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Y.y),s.y=r.y*Y.y,H.mapSize.y=r.y));let q=i.state.buffers.depth.getReversed();if(H.camera._reversedDepth=q,H.map===null||U===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Fo){if(Z.isPointLight){Kt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new oi(s.x,s.y,{format:ba,type:hi,minFilter:Ni,magFilter:Ni,generateMipmaps:!1}),H.map.texture.name=Z.name+".shadowMap",H.map.depthTexture=new Js(s.x,s.y,js),H.map.depthTexture.name=Z.name+".shadowMapDepth",H.map.depthTexture.format=Cr,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Ri,H.map.depthTexture.magFilter=Ri}else Z.isPointLight?(H.map=new Go(s.x),H.map.depthTexture=new M0(s.x,xr)):(H.map=new oi(s.x,s.y),H.map.depthTexture=new Js(s.x,s.y,xr)),H.map.depthTexture.name=Z.name+".shadowMap",H.map.depthTexture.format=Cr,this.type===Ga?(H.map.depthTexture.compareFunction=q?wu:Tu,H.map.depthTexture.minFilter=Ni,H.map.depthTexture.magFilter=Ni):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Ri,H.map.depthTexture.magFilter=Ri);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==s.x||H.map.height!==s.y)&&H.map.setSize(s.x,s.y);let W=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();Z.isPointLight!==!0&&H.updateMatrices(Z,v);for(let J=0;J<W;J++){let ge=H.getCamera(J);if(Z.isPointLight){let Ne=H.camera,qe=H.matrix,Je=Z.distance||Ne.far;Je!==Ne.far&&(Ne.far=Je,Ne.updateProjectionMatrix()),ac.setFromMatrixPosition(Z.matrixWorld),Ne.position.copy(ac),Ef.copy(Ne.position),Ef.add(Gy[J]),Ne.up.copy(ky[J]),Ne.lookAt(Ef),Ne.updateMatrixWorld(),qe.makeTranslation(-ac.x,-ac.y,-ac.z),Yp.multiplyMatrices(Ne.projectionMatrix,Ne.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Yp,Ne.coordinateSystem,Ne.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)i.setRenderTarget(H.map,J),i.clear();else{J===0&&(i.setRenderTarget(H.map),i.clear());let Ne=H.getViewport(J);a.set(r.x*Ne.x,r.y*Ne.y,r.x*Ne.z,r.y*Ne.w),w.viewport(a)}n=H.getFrustum(J),y(R,v,ge,Z,this.type)}H.isPointLightShadow!==!0&&this.type===Fo&&_(H,v),H.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(A,I,G)};function _(T,R){let v=e.update(x);p.defines.VSM_SAMPLES!==T.blurSamples&&(p.defines.VSM_SAMPLES=T.blurSamples,u.defines.VSM_SAMPLES=T.blurSamples,p.needsUpdate=!0,u.needsUpdate=!0),T.mapPass===null?T.mapPass=new oi(s.x,s.y,{format:ba,type:hi}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),p.uniforms.shadow_pass.value=T.map.depthTexture,p.uniforms.resolution.value.set(T.map.width,T.map.height),p.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(R,null,v,p,x,null),u.uniforms.shadow_pass.value=T.mapPass.texture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(R,null,v,u,x,null)}function b(T,R,v,A){let I=null,G=v.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(G!==void 0)I=G;else if(I=v.isPointLight===!0?c:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let w=I.uuid,U=R.uuid,N=l[w];N===void 0&&(N={},l[w]=N);let B=N[U];B===void 0&&(B=I.clone(),N[U]=B,R.addEventListener("dispose",M)),I=B}if(I.visible=R.visible,I.wireframe=R.wireframe,A===Fo?I.side=R.shadowSide!==null?R.shadowSide:R.side:I.side=R.shadowSide!==null?R.shadowSide:d[R.side],I.alphaMap=R.alphaMap,I.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,I.map=R.map,I.clipShadows=R.clipShadows,I.clippingPlanes=R.clippingPlanes,I.clipIntersection=R.clipIntersection,I.displacementMap=R.displacementMap,I.displacementScale=R.displacementScale,I.displacementBias=R.displacementBias,I.wireframeLinewidth=R.wireframeLinewidth,I.linewidth=R.linewidth,v.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let w=i.properties.get(I);w.light=v}return I}function y(T,R,v,A,I){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&I===Fo)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,T.matrixWorld);let U=e.update(T),N=T.material;if(Array.isArray(N)){let B=U.groups;for(let Z=0,H=B.length;Z<H;Z++){let Y=B[Z],q=N[Y.materialIndex];if(q&&q.visible){let W=b(T,q,A,I);T.onBeforeShadow(i,T,R,v,U,W,Y),i.renderBufferDirect(v,null,U,W,T,Y),T.onAfterShadow(i,T,R,v,U,W,Y)}}}else if(N.visible){let B=b(T,N,A,I);T.onBeforeShadow(i,T,R,v,U,B,null),i.renderBufferDirect(v,null,U,B,T,null),T.onAfterShadow(i,T,R,v,U,B,null)}}let w=T.children;for(let U=0,N=w.length;U<N;U++)y(w[U],R,v,A,I)}function M(T){T.target.removeEventListener("dispose",M);for(let v in l){let A=l[v],I=T.target.uuid;I in A&&(A[I].dispose(),delete A[I])}}}function Wy(i,e){function t(){let k=!1,Le=new ai,de=null,Be=new ai(0,0,0,0);return{setMask:function(Pe){de!==Pe&&!k&&(i.colorMask(Pe,Pe,Pe,Pe),de=Pe)},setLocked:function(Pe){k=Pe},setClear:function(Pe,ae,at,Ze,vt){vt===!0&&(Pe*=Ze,ae*=Ze,at*=Ze),Le.set(Pe,ae,at,Ze),Be.equals(Le)===!1&&(i.clearColor(Pe,ae,at,Ze),Be.copy(Le))},reset:function(){k=!1,de=null,Be.set(-1,0,0,0)}}}function n(){let k=!1,Le=!1,de=null,Be=null,Pe=null;return{setReversed:function(ae){if(Le!==ae){let at=e.get("EXT_clip_control");ae?at.clipControlEXT(at.LOWER_LEFT_EXT,at.ZERO_TO_ONE_EXT):at.clipControlEXT(at.LOWER_LEFT_EXT,at.NEGATIVE_ONE_TO_ONE_EXT),Le=ae;let Ze=Pe;Pe=null,this.setClear(Ze)}},getReversed:function(){return Le},setTest:function(ae){ae?Ee(i.DEPTH_TEST):Ue(i.DEPTH_TEST)},setMask:function(ae){de!==ae&&!k&&(i.depthMask(ae),de=ae)},setFunc:function(ae){if(Le&&(ae=xp[ae]),Be!==ae){switch(ae){case a0:i.depthFunc(i.NEVER);break;case o0:i.depthFunc(i.ALWAYS);break;case l0:i.depthFunc(i.LESS);break;case xo:i.depthFunc(i.LEQUAL);break;case c0:i.depthFunc(i.EQUAL);break;case u0:i.depthFunc(i.GEQUAL);break;case h0:i.depthFunc(i.GREATER);break;case f0:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Be=ae}},setLocked:function(ae){k=ae},setClear:function(ae){Pe!==ae&&(Pe=ae,Le&&(ae=1-ae),i.clearDepth(ae))},reset:function(){k=!1,de=null,Be=null,Pe=null,Le=!1}}}function s(){let k=!1,Le=null,de=null,Be=null,Pe=null,ae=null,at=null,Ze=null,vt=null;return{setTest:function(Ft){k||(Ft?Ee(i.STENCIL_TEST):Ue(i.STENCIL_TEST))},setMask:function(Ft){Le!==Ft&&!k&&(i.stencilMask(Ft),Le=Ft)},setFunc:function(Ft,Xt,rn){(de!==Ft||Be!==Xt||Pe!==rn)&&(i.stencilFunc(Ft,Xt,rn),de=Ft,Be=Xt,Pe=rn)},setOp:function(Ft,Xt,rn){(ae!==Ft||at!==Xt||Ze!==rn)&&(i.stencilOp(Ft,Xt,rn),ae=Ft,at=Xt,Ze=rn)},setLocked:function(Ft){k=Ft},setClear:function(Ft){vt!==Ft&&(i.clearStencil(Ft),vt=Ft)},reset:function(){k=!1,Le=null,de=null,Be=null,Pe=null,ae=null,at=null,Ze=null,vt=null}}}let r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap,h={},d={},p={},u=new WeakMap,f=[],x=null,g=!1,m=null,_=null,b=null,y=null,M=null,T=null,R=null,v=new Et(0,0,0),A=0,I=!1,G=null,w=null,U=null,N=null,B=null,Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,Y=0,q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(q)[1]),H=Y>=1):q.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),H=Y>=2);let W=null,J={},ge=i.getParameter(i.SCISSOR_BOX),Ne=i.getParameter(i.VIEWPORT),qe=new ai().fromArray(ge),Je=new ai().fromArray(Ne);function mt(k,Le,de,Be){let Pe=new Uint8Array(4),ae=i.createTexture();i.bindTexture(k,ae),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let at=0;at<de;at++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(Le,0,i.RGBA,1,1,Be,0,i.RGBA,i.UNSIGNED_BYTE,Pe):i.texImage2D(Le+at,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Pe);return ae}let te={};te[i.TEXTURE_2D]=mt(i.TEXTURE_2D,i.TEXTURE_2D,1),te[i.TEXTURE_CUBE_MAP]=mt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[i.TEXTURE_2D_ARRAY]=mt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),te[i.TEXTURE_3D]=mt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Ee(i.DEPTH_TEST),a.setFunc(xo),xe(!1),we(Wh),Ee(i.CULL_FACE),me(Ai);function Ee(k){h[k]!==!0&&(i.enable(k),h[k]=!0)}function Ue(k){h[k]!==!1&&(i.disable(k),h[k]=!1)}function be(k,Le){return p[k]!==Le?(i.bindFramebuffer(k,Le),p[k]=Le,k===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=Le),k===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=Le),!0):!1}function Ge(k,Le){let de=f,Be=!1;if(k){de=u.get(Le),de===void 0&&(de=[],u.set(Le,de));let Pe=k.textures;if(de.length!==Pe.length||de[0]!==i.COLOR_ATTACHMENT0){for(let ae=0,at=Pe.length;ae<at;ae++)de[ae]=i.COLOR_ATTACHMENT0+ae;de.length=Pe.length,Be=!0}}else de[0]!==i.BACK&&(de[0]=i.BACK,Be=!0);Be&&i.drawBuffers(de)}function re(k){return x!==k?(i.useProgram(k),x=k,!0):!1}let Qe={[Qs]:i.FUNC_ADD,[kd]:i.FUNC_SUBTRACT,[Vd]:i.FUNC_REVERSE_SUBTRACT};Qe[Wd]=i.MIN,Qe[Xd]=i.MAX;let ue={[ka]:i.ZERO,[Yd]:i.ONE,[qd]:i.SRC_COLOR,[qh]:i.SRC_ALPHA,[Kd]:i.SRC_ALPHA_SATURATE,[Vl]:i.DST_COLOR,[kl]:i.DST_ALPHA,[Zd]:i.ONE_MINUS_SRC_COLOR,[Zh]:i.ONE_MINUS_SRC_ALPHA,[Jd]:i.ONE_MINUS_DST_COLOR,[$d]:i.ONE_MINUS_DST_ALPHA,[Qd]:i.CONSTANT_COLOR,[jd]:i.ONE_MINUS_CONSTANT_COLOR,[ep]:i.CONSTANT_ALPHA,[tp]:i.ONE_MINUS_CONSTANT_ALPHA};function me(k,Le,de,Be,Pe,ae,at,Ze,vt,Ft){if(k===Ai){g===!0&&(Ue(i.BLEND),g=!1);return}if(g===!1&&(Ee(i.BLEND),g=!0),k!==B0){if(k!==m||Ft!==I){if((_!==Qs||M!==Qs)&&(i.blendEquation(i.FUNC_ADD),_=Qs,M=Qs),Ft)switch(k){case _a:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zn:i.blendFunc(i.ONE,i.ONE);break;case Xh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Yh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:jt("WebGLState: Invalid blending: ",k);break}else switch(k){case _a:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Xh:jt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Yh:jt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:jt("WebGLState: Invalid blending: ",k);break}b=null,y=null,T=null,R=null,v.set(0,0,0),A=0,m=k,I=Ft}return}Pe=Pe||Le,ae=ae||de,at=at||Be,(Le!==_||Pe!==M)&&(i.blendEquationSeparate(Qe[Le],Qe[Pe]),_=Le,M=Pe),(de!==b||Be!==y||ae!==T||at!==R)&&(i.blendFuncSeparate(ue[de],ue[Be],ue[ae],ue[at]),b=de,y=Be,T=ae,R=at),(Ze.equals(v)===!1||vt!==A)&&(i.blendColor(Ze.r,Ze.g,Ze.b,vt),v.copy(Ze),A=vt),m=k,I=!1}function ie(k,Le){k.side===li?Ue(i.CULL_FACE):Ee(i.CULL_FACE);let de=k.side===es;Le&&(de=!de),xe(de),k.blending===_a&&k.transparent===!1?me(Ai):me(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),a.setFunc(k.depthFunc),a.setTest(k.depthTest),a.setMask(k.depthWrite),r.setMask(k.colorWrite);let Be=k.stencilWrite;o.setTest(Be),Be&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Xe(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Ee(i.SAMPLE_ALPHA_TO_COVERAGE):Ue(i.SAMPLE_ALPHA_TO_COVERAGE)}function xe(k){G!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),G=k)}function we(k){k!==Hd?(Ee(i.CULL_FACE),k!==w&&(k===Wh?i.cullFace(i.BACK):k===zd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ue(i.CULL_FACE),w=k}function $e(k){k!==U&&(H&&i.lineWidth(k),U=k)}function Xe(k,Le,de){k?(Ee(i.POLYGON_OFFSET_FILL),(N!==Le||B!==de)&&(N=Le,B=de,a.getReversed()&&(Le=-Le),i.polygonOffset(Le,de))):Ue(i.POLYGON_OFFSET_FILL)}function lt(k){k?Ee(i.SCISSOR_TEST):Ue(i.SCISSOR_TEST)}function ft(k){k===void 0&&(k=i.TEXTURE0+Z-1),W!==k&&(i.activeTexture(k),W=k)}function j(k,Le,de){de===void 0&&(W===null?de=i.TEXTURE0+Z-1:de=W);let Be=J[de];Be===void 0&&(Be={type:void 0,texture:void 0},J[de]=Be),(Be.type!==k||Be.texture!==Le)&&(W!==de&&(i.activeTexture(de),W=de),i.bindTexture(k,Le||te[k]),Be.type=k,Be.texture=Le)}function Dt(){let k=J[W];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function _t(){try{i.compressedTexImage2D(...arguments)}catch(k){jt("WebGLState:",k)}}function z(){try{i.compressedTexImage3D(...arguments)}catch(k){jt("WebGLState:",k)}}function S(){try{i.texSubImage2D(...arguments)}catch(k){jt("WebGLState:",k)}}function le(){try{i.texSubImage3D(...arguments)}catch(k){jt("WebGLState:",k)}}function he(){try{i.compressedTexSubImage2D(...arguments)}catch(k){jt("WebGLState:",k)}}function _e(){try{i.compressedTexSubImage3D(...arguments)}catch(k){jt("WebGLState:",k)}}function rt(){try{i.texStorage2D(...arguments)}catch(k){jt("WebGLState:",k)}}function it(){try{i.texStorage3D(...arguments)}catch(k){jt("WebGLState:",k)}}function Oe(){try{i.texImage2D(...arguments)}catch(k){jt("WebGLState:",k)}}function Ve(){try{i.texImage3D(...arguments)}catch(k){jt("WebGLState:",k)}}function je(k){return d[k]!==void 0?d[k]:i.getParameter(k)}function xt(k,Le){d[k]!==Le&&(i.pixelStorei(k,Le),d[k]=Le)}function D(k){qe.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),qe.copy(k))}function oe(k){Je.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),Je.copy(k))}function fe(k,Le){let de=l.get(Le);de===void 0&&(de=new WeakMap,l.set(Le,de));let Be=de.get(k);Be===void 0&&(Be=i.getUniformBlockIndex(Le,k.name),de.set(k,Be))}function Re(k,Le){let Be=l.get(Le).get(k);c.get(Le)!==Be&&(i.uniformBlockBinding(Le,Be,k.__bindingPointIndex),c.set(Le,Be))}function We(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},W=null,J={},p={},u=new WeakMap,f=[],x=null,g=!1,m=null,_=null,b=null,y=null,M=null,T=null,R=null,v=new Et(0,0,0),A=0,I=!1,G=null,w=null,U=null,N=null,B=null,qe.set(0,0,i.canvas.width,i.canvas.height),Je.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Ee,disable:Ue,bindFramebuffer:be,drawBuffers:Ge,useProgram:re,setBlending:me,setMaterial:ie,setFlipSided:xe,setCullFace:we,setLineWidth:$e,setPolygonOffset:Xe,setScissorTest:lt,activeTexture:ft,bindTexture:j,unbindTexture:Dt,compressedTexImage2D:_t,compressedTexImage3D:z,texImage2D:Oe,texImage3D:Ve,pixelStorei:xt,getParameter:je,updateUBOMapping:fe,uniformBlockBinding:Re,texStorage2D:rt,texStorage3D:it,texSubImage2D:S,texSubImage3D:le,compressedTexSubImage2D:he,compressedTexSubImage3D:_e,scissor:D,viewport:oe,reset:We}}function Xy(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new nt,h=new WeakMap,d=new Set,p,u=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(z,S){return f?new OffscreenCanvas(z,S):pl("canvas")}function g(z,S,le){let he=1,_e=_t(z);if((_e.width>le||_e.height>le)&&(he=le/Math.max(_e.width,_e.height)),he<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){let rt=Math.floor(he*_e.width),it=Math.floor(he*_e.height);p===void 0&&(p=x(rt,it));let Oe=S?x(rt,it):p;return Oe.width=rt,Oe.height=it,Oe.getContext("2d").drawImage(z,0,0,rt,it),Kt("WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+rt+"x"+it+")."),Oe}else return"data"in z&&Kt("WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),z;return z}function m(z){return z.generateMipmaps}function _(z){i.generateMipmap(z)}function b(z){return z.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:z.isWebGL3DRenderTarget?i.TEXTURE_3D:z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(z,S,le,he,_e,rt=!1){if(z!==null){if(i[z]!==void 0)return i[z];Kt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let it;he&&(it=e.get("EXT_texture_norm16"),it||Kt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Oe=S;if(S===i.RED&&(le===i.FLOAT&&(Oe=i.R32F),le===i.HALF_FLOAT&&(Oe=i.R16F),le===i.UNSIGNED_BYTE&&(Oe=i.R8),le===i.UNSIGNED_SHORT&&it&&(Oe=it.R16_EXT),le===i.SHORT&&it&&(Oe=it.R16_SNORM_EXT)),S===i.RED_INTEGER&&(le===i.UNSIGNED_BYTE&&(Oe=i.R8UI),le===i.UNSIGNED_SHORT&&(Oe=i.R16UI),le===i.UNSIGNED_INT&&(Oe=i.R32UI),le===i.BYTE&&(Oe=i.R8I),le===i.SHORT&&(Oe=i.R16I),le===i.INT&&(Oe=i.R32I)),S===i.RG&&(le===i.FLOAT&&(Oe=i.RG32F),le===i.HALF_FLOAT&&(Oe=i.RG16F),le===i.UNSIGNED_BYTE&&(Oe=i.RG8),le===i.UNSIGNED_SHORT&&it&&(Oe=it.RG16_EXT),le===i.SHORT&&it&&(Oe=it.RG16_SNORM_EXT)),S===i.RG_INTEGER&&(le===i.UNSIGNED_BYTE&&(Oe=i.RG8UI),le===i.UNSIGNED_SHORT&&(Oe=i.RG16UI),le===i.UNSIGNED_INT&&(Oe=i.RG32UI),le===i.BYTE&&(Oe=i.RG8I),le===i.SHORT&&(Oe=i.RG16I),le===i.INT&&(Oe=i.RG32I)),S===i.RGB_INTEGER&&(le===i.UNSIGNED_BYTE&&(Oe=i.RGB8UI),le===i.UNSIGNED_SHORT&&(Oe=i.RGB16UI),le===i.UNSIGNED_INT&&(Oe=i.RGB32UI),le===i.BYTE&&(Oe=i.RGB8I),le===i.SHORT&&(Oe=i.RGB16I),le===i.INT&&(Oe=i.RGB32I)),S===i.RGBA_INTEGER&&(le===i.UNSIGNED_BYTE&&(Oe=i.RGBA8UI),le===i.UNSIGNED_SHORT&&(Oe=i.RGBA16UI),le===i.UNSIGNED_INT&&(Oe=i.RGBA32UI),le===i.BYTE&&(Oe=i.RGBA8I),le===i.SHORT&&(Oe=i.RGBA16I),le===i.INT&&(Oe=i.RGBA32I)),S===i.RGB&&(le===i.UNSIGNED_SHORT&&it&&(Oe=it.RGB16_EXT),le===i.SHORT&&it&&(Oe=it.RGB16_SNORM_EXT),le===i.UNSIGNED_INT_5_9_9_9_REV&&(Oe=i.RGB9_E5),le===i.UNSIGNED_INT_10F_11F_11F_REV&&(Oe=i.R11F_G11F_B10F)),S===i.RGBA){let Ve=rt?dl:bn.getTransfer(_e);le===i.FLOAT&&(Oe=i.RGBA32F),le===i.HALF_FLOAT&&(Oe=i.RGBA16F),le===i.UNSIGNED_BYTE&&(Oe=Ve===Ln?i.SRGB8_ALPHA8:i.RGBA8),le===i.UNSIGNED_SHORT&&it&&(Oe=it.RGBA16_EXT),le===i.SHORT&&it&&(Oe=it.RGBA16_SNORM_EXT),le===i.UNSIGNED_SHORT_4_4_4_4&&(Oe=i.RGBA4),le===i.UNSIGNED_SHORT_5_5_5_1&&(Oe=i.RGB5_A1)}return(Oe===i.R16F||Oe===i.R32F||Oe===i.RG16F||Oe===i.RG32F||Oe===i.RGBA16F||Oe===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Oe}function M(z,S){let le;return z?S===null||S===xr||S===Sa?le=i.DEPTH24_STENCIL8:S===js?le=i.DEPTH32F_STENCIL8:S===Oo&&(le=i.DEPTH24_STENCIL8,Kt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===xr||S===Sa?le=i.DEPTH_COMPONENT24:S===js?le=i.DEPTH_COMPONENT32F:S===Oo&&(le=i.DEPTH_COMPONENT16),le}function T(z,S){return m(z)===!0||z.isFramebufferTexture&&z.minFilter!==Ri&&z.minFilter!==Ni?Math.log2(Math.max(S.width,S.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?S.mipmaps.length:1}function R(z){let S=z.target;S.removeEventListener("dispose",R),A(S),S.isVideoTexture&&h.delete(S),S.isHTMLTexture&&d.delete(S)}function v(z){let S=z.target;S.removeEventListener("dispose",v),G(S)}function A(z){let S=n.get(z);if(S.__webglInit===void 0)return;let le=z.source,he=u.get(le);if(he){let _e=he[S.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&I(z),Object.keys(he).length===0&&u.delete(le)}n.remove(z)}function I(z){let S=n.get(z);i.deleteTexture(S.__webglTexture);let le=z.source,he=u.get(le);delete he[S.__cacheKey],a.memory.textures--}function G(z){let S=n.get(z);if(z.depthTexture&&(z.depthTexture.dispose(),n.remove(z.depthTexture)),z.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(S.__webglFramebuffer[he]))for(let _e=0;_e<S.__webglFramebuffer[he].length;_e++)i.deleteFramebuffer(S.__webglFramebuffer[he][_e]);else i.deleteFramebuffer(S.__webglFramebuffer[he]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[he])}else{if(Array.isArray(S.__webglFramebuffer))for(let he=0;he<S.__webglFramebuffer.length;he++)i.deleteFramebuffer(S.__webglFramebuffer[he]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let he=0;he<S.__webglColorRenderbuffer.length;he++)S.__webglColorRenderbuffer[he]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[he]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let le=z.textures;for(let he=0,_e=le.length;he<_e;he++){let rt=n.get(le[he]);rt.__webglTexture&&(i.deleteTexture(rt.__webglTexture),a.memory.textures--),n.remove(le[he])}n.remove(z)}let w=0;function U(){w=0}function N(){return w}function B(z){w=z}function Z(){let z=w;return z>=s.maxTextures&&Kt("WebGLTextures: Trying to use "+(z+1)+" texture units while this GPU supports only "+s.maxTextures),w+=1,z}function H(z){let S=[];return S.push(z.wrapS),S.push(z.wrapT),S.push(z.wrapR||0),S.push(z.magFilter),S.push(z.minFilter),S.push(z.anisotropy),S.push(z.internalFormat),S.push(z.format),S.push(z.type),S.push(z.generateMipmaps),S.push(z.premultiplyAlpha),S.push(z.flipY),S.push(z.unpackAlignment),S.push(z.colorSpace),S.join()}function Y(z,S){let le=n.get(z);if(z.isVideoTexture&&j(z),z.isRenderTargetTexture===!1&&z.isExternalTexture!==!0&&z.version>0&&le.__version!==z.version){let he=z.image;if(he===null)Kt("WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)Kt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ue(le,z,S);return}}else z.isExternalTexture&&(le.__webglTexture=z.sourceTexture?z.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,le.__webglTexture,i.TEXTURE0+S)}function q(z,S){let le=n.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&le.__version!==z.version){Ue(le,z,S);return}else z.isExternalTexture&&(le.__webglTexture=z.sourceTexture?z.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,le.__webglTexture,i.TEXTURE0+S)}function W(z,S){let le=n.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&le.__version!==z.version){Ue(le,z,S);return}t.bindTexture(i.TEXTURE_3D,le.__webglTexture,i.TEXTURE0+S)}function J(z,S){let le=n.get(z);if(z.isCubeDepthTexture!==!0&&z.version>0&&le.__version!==z.version){be(le,z,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,le.__webglTexture,i.TEXTURE0+S)}let ge={[Qn]:i.REPEAT,[ws]:i.CLAMP_TO_EDGE,[d0]:i.MIRRORED_REPEAT},Ne={[Ri]:i.NEAREST,[sp]:i.NEAREST_MIPMAP_NEAREST,[Kl]:i.NEAREST_MIPMAP_LINEAR,[Ni]:i.LINEAR,[G0]:i.LINEAR_MIPMAP_NEAREST,[Ur]:i.LINEAR_MIPMAP_LINEAR},qe={[lp]:i.NEVER,[dp]:i.ALWAYS,[cp]:i.LESS,[Tu]:i.LEQUAL,[up]:i.EQUAL,[wu]:i.GEQUAL,[hp]:i.GREATER,[fp]:i.NOTEQUAL};function Je(z,S){if(S.type===js&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Ni||S.magFilter===G0||S.magFilter===Kl||S.magFilter===Ur||S.minFilter===Ni||S.minFilter===G0||S.minFilter===Kl||S.minFilter===Ur)&&Kt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(z,i.TEXTURE_WRAP_S,ge[S.wrapS]),i.texParameteri(z,i.TEXTURE_WRAP_T,ge[S.wrapT]),(z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY)&&i.texParameteri(z,i.TEXTURE_WRAP_R,ge[S.wrapR]),i.texParameteri(z,i.TEXTURE_MAG_FILTER,Ne[S.magFilter]),i.texParameteri(z,i.TEXTURE_MIN_FILTER,Ne[S.minFilter]),S.compareFunction&&(i.texParameteri(z,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(z,i.TEXTURE_COMPARE_FUNC,qe[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Ri||S.minFilter!==Kl&&S.minFilter!==Ur||S.type===js&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let le=e.get("EXT_texture_filter_anisotropic");i.texParameterf(z,le.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function mt(z,S){let le=!1;z.__webglInit===void 0&&(z.__webglInit=!0,S.addEventListener("dispose",R));let he=S.source,_e=u.get(he);_e===void 0&&(_e={},u.set(he,_e));let rt=H(S);if(rt!==z.__cacheKey){_e[rt]===void 0&&(_e[rt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,le=!0),_e[rt].usedTimes++;let it=_e[z.__cacheKey];it!==void 0&&(_e[z.__cacheKey].usedTimes--,it.usedTimes===0&&I(S)),z.__cacheKey=rt,z.__webglTexture=_e[rt].texture}return le}function te(z,S,le){return Math.floor(Math.floor(z/le)/S)}function Ee(z,S,le,he){let rt=z.updateRanges;if(rt.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,le,he,S.data);else{rt.sort((xt,D)=>xt.start-D.start);let it=0;for(let xt=1;xt<rt.length;xt++){let D=rt[it],oe=rt[xt],fe=D.start+D.count,Re=te(oe.start,S.width,4),We=te(D.start,S.width,4);oe.start<=fe+1&&Re===We&&te(oe.start+oe.count-1,S.width,4)===Re?D.count=Math.max(D.count,oe.start+oe.count-D.start):(++it,rt[it]=oe)}rt.length=it+1;let Oe=t.getParameter(i.UNPACK_ROW_LENGTH),Ve=t.getParameter(i.UNPACK_SKIP_PIXELS),je=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let xt=0,D=rt.length;xt<D;xt++){let oe=rt[xt],fe=Math.floor(oe.start/4),Re=Math.ceil(oe.count/4),We=fe%S.width,k=Math.floor(fe/S.width),Le=Re,de=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,We),t.pixelStorei(i.UNPACK_SKIP_ROWS,k),t.texSubImage2D(i.TEXTURE_2D,0,We,k,Le,de,le,he,S.data)}z.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Oe),t.pixelStorei(i.UNPACK_SKIP_PIXELS,Ve),t.pixelStorei(i.UNPACK_SKIP_ROWS,je)}}function Ue(z,S,le){let he=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(he=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(he=i.TEXTURE_3D);let _e=mt(z,S),rt=S.source;t.bindTexture(he,z.__webglTexture,i.TEXTURE0+le);let it=n.get(rt);if(rt.version!==it.__version||_e===!0){if(t.activeTexture(i.TEXTURE0+le),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let de=bn.getPrimaries(bn.workingColorSpace),Be=S.colorSpace===vr?null:bn.getPrimaries(S.colorSpace),Pe=S.colorSpace===vr||de===Be?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe)}t.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment);let Ve=g(S.image,!1,s.maxTextureSize);Ve=Dt(S,Ve);let je=r.convert(S.format,S.colorSpace),xt=r.convert(S.type),D=y(S.internalFormat,je,xt,S.normalized,S.colorSpace,S.isVideoTexture);Je(he,S);let oe,fe=S.mipmaps,Re=S.isVideoTexture!==!0,We=it.__version===void 0||_e===!0,k=rt.dataReady,Le=T(S,Ve);if(S.isDepthTexture)D=M(S.format===Fr,S.type),We&&(Re?t.texStorage2D(i.TEXTURE_2D,1,D,Ve.width,Ve.height):t.texImage2D(i.TEXTURE_2D,0,D,Ve.width,Ve.height,0,je,xt,null));else if(S.isDataTexture)if(fe.length>0){Re&&We&&t.texStorage2D(i.TEXTURE_2D,Le,D,fe[0].width,fe[0].height);for(let de=0,Be=fe.length;de<Be;de++)oe=fe[de],Re?k&&t.texSubImage2D(i.TEXTURE_2D,de,0,0,oe.width,oe.height,je,xt,oe.data):t.texImage2D(i.TEXTURE_2D,de,D,oe.width,oe.height,0,je,xt,oe.data);S.generateMipmaps=!1}else Re?(We&&t.texStorage2D(i.TEXTURE_2D,Le,D,Ve.width,Ve.height),k&&Ee(S,Ve,je,xt)):t.texImage2D(i.TEXTURE_2D,0,D,Ve.width,Ve.height,0,je,xt,Ve.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Re&&We&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Le,D,fe[0].width,fe[0].height,Ve.depth);for(let de=0,Be=fe.length;de<Be;de++)if(oe=fe[de],S.format!==rs)if(je!==null)if(Re){if(k)if(S.layerUpdates.size>0){let Pe=hf(oe.width,oe.height,S.format,S.type);for(let ae of S.layerUpdates){let at=oe.data.subarray(ae*Pe/oe.data.BYTES_PER_ELEMENT,(ae+1)*Pe/oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,de,0,0,ae,oe.width,oe.height,1,je,at)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,de,0,0,0,oe.width,oe.height,Ve.depth,je,oe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,de,D,oe.width,oe.height,Ve.depth,0,oe.data,0,0);else Kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Re?k&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,de,0,0,0,oe.width,oe.height,Ve.depth,je,xt,oe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,de,D,oe.width,oe.height,Ve.depth,0,je,xt,oe.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{Re&&We&&t.texStorage2D(i.TEXTURE_2D,Le,D,fe[0].width,fe[0].height);for(let de=0,Be=fe.length;de<Be;de++)oe=fe[de],S.format!==rs?je!==null?Re?k&&t.compressedTexSubImage2D(i.TEXTURE_2D,de,0,0,oe.width,oe.height,je,oe.data):t.compressedTexImage2D(i.TEXTURE_2D,de,D,oe.width,oe.height,0,oe.data):Kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Re?k&&t.texSubImage2D(i.TEXTURE_2D,de,0,0,oe.width,oe.height,je,xt,oe.data):t.texImage2D(i.TEXTURE_2D,de,D,oe.width,oe.height,0,je,xt,oe.data)}else if(S.isDataArrayTexture)if(Re){if(We&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Le,D,Ve.width,Ve.height,Ve.depth),k)if(S.layerUpdates.size>0){let de=hf(Ve.width,Ve.height,S.format,S.type);for(let Be of S.layerUpdates){let Pe=Ve.data.subarray(Be*de/Ve.data.BYTES_PER_ELEMENT,(Be+1)*de/Ve.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Be,Ve.width,Ve.height,1,je,xt,Pe)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Ve.width,Ve.height,Ve.depth,je,xt,Ve.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,D,Ve.width,Ve.height,Ve.depth,0,je,xt,Ve.data);else if(S.isData3DTexture)Re?(We&&t.texStorage3D(i.TEXTURE_3D,Le,D,Ve.width,Ve.height,Ve.depth),k&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Ve.width,Ve.height,Ve.depth,je,xt,Ve.data)):t.texImage3D(i.TEXTURE_3D,0,D,Ve.width,Ve.height,Ve.depth,0,je,xt,Ve.data);else if(S.isFramebufferTexture){if(We)if(Re)t.texStorage2D(i.TEXTURE_2D,Le,D,Ve.width,Ve.height);else{let de=Ve.width,Be=Ve.height;for(let Pe=0;Pe<Le;Pe++)t.texImage2D(i.TEXTURE_2D,Pe,D,de,Be,0,je,xt,null),de>>=1,Be>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in i){let de=i.canvas;if(de.hasAttribute("layoutsubtree")||de.setAttribute("layoutsubtree","true"),Ve.parentNode!==de){de.appendChild(Ve),d.add(S),de.onpaint=Be=>{let Pe=Be.changedElements;for(let ae of d)Pe.includes(ae.image)&&(ae.needsUpdate=!0)},de.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Ve);else{let Pe=i.RGBA,ae=i.RGBA,at=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Pe,ae,at,Ve)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(fe.length>0){if(Re&&We){let de=_t(fe[0]);t.texStorage2D(i.TEXTURE_2D,Le,D,de.width,de.height)}for(let de=0,Be=fe.length;de<Be;de++)oe=fe[de],Re?k&&t.texSubImage2D(i.TEXTURE_2D,de,0,0,je,xt,oe):t.texImage2D(i.TEXTURE_2D,de,D,je,xt,oe);S.generateMipmaps=!1}else if(Re){if(We){let de=_t(Ve);t.texStorage2D(i.TEXTURE_2D,Le,D,de.width,de.height)}k&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,je,xt,Ve)}else t.texImage2D(i.TEXTURE_2D,0,D,je,xt,Ve);m(S)&&_(he),it.__version=rt.version,S.onUpdate&&S.onUpdate(S)}z.__version=S.version}function be(z,S,le){if(S.image.length!==6)return;let he=mt(z,S),_e=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+le);let rt=n.get(_e);if(_e.version!==rt.__version||he===!0){t.activeTexture(i.TEXTURE0+le);let it=bn.getPrimaries(bn.workingColorSpace),Oe=S.colorSpace===vr?null:bn.getPrimaries(S.colorSpace),Ve=S.colorSpace===vr||it===Oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);let je=S.isCompressedTexture||S.image[0].isCompressedTexture,xt=S.image[0]&&S.image[0].isDataTexture,D=[];for(let ae=0;ae<6;ae++)!je&&!xt?D[ae]=g(S.image[ae],!0,s.maxCubemapSize):D[ae]=xt?S.image[ae].image:S.image[ae],D[ae]=Dt(S,D[ae]);let oe=D[0],fe=r.convert(S.format,S.colorSpace),Re=r.convert(S.type),We=y(S.internalFormat,fe,Re,S.normalized,S.colorSpace),k=S.isVideoTexture!==!0,Le=rt.__version===void 0||he===!0,de=_e.dataReady,Be=T(S,oe);Je(i.TEXTURE_CUBE_MAP,S);let Pe;if(je){k&&Le&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Be,We,oe.width,oe.height);for(let ae=0;ae<6;ae++){Pe=D[ae].mipmaps;for(let at=0;at<Pe.length;at++){let Ze=Pe[at];S.format!==rs?fe!==null?k?de&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,at,0,0,Ze.width,Ze.height,fe,Ze.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,at,We,Ze.width,Ze.height,0,Ze.data):Kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,at,0,0,Ze.width,Ze.height,fe,Re,Ze.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,at,We,Ze.width,Ze.height,0,fe,Re,Ze.data)}}}else{if(Pe=S.mipmaps,k&&Le){Pe.length>0&&Be++;let ae=_t(D[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Be,We,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(xt){k?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,D[ae].width,D[ae].height,fe,Re,D[ae].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,We,D[ae].width,D[ae].height,0,fe,Re,D[ae].data);for(let at=0;at<Pe.length;at++){let vt=Pe[at].image[ae].image;k?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,at+1,0,0,vt.width,vt.height,fe,Re,vt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,at+1,We,vt.width,vt.height,0,fe,Re,vt.data)}}else{k?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,fe,Re,D[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,We,fe,Re,D[ae]);for(let at=0;at<Pe.length;at++){let Ze=Pe[at];k?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,at+1,0,0,fe,Re,Ze.image[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,at+1,We,fe,Re,Ze.image[ae])}}}m(S)&&_(i.TEXTURE_CUBE_MAP),rt.__version=_e.version,S.onUpdate&&S.onUpdate(S)}z.__version=S.version}function Ge(z,S,le,he,_e,rt){let it=r.convert(le.format,le.colorSpace),Oe=r.convert(le.type),Ve=y(le.internalFormat,it,Oe,le.normalized,le.colorSpace),je=n.get(S),xt=n.get(le);if(xt.__renderTarget=S,!je.__hasExternalTextures){let D=Math.max(1,S.width>>rt),oe=Math.max(1,S.height>>rt);_e===i.TEXTURE_3D||_e===i.TEXTURE_2D_ARRAY?t.texImage3D(_e,rt,Ve,D,oe,S.depth,0,it,Oe,null):t.texImage2D(_e,rt,Ve,D,oe,0,it,Oe,null)}t.bindFramebuffer(i.FRAMEBUFFER,z),ft(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,he,_e,xt.__webglTexture,0,lt(S)):(_e===i.TEXTURE_2D||_e>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,he,_e,xt.__webglTexture,rt),t.bindFramebuffer(i.FRAMEBUFFER,null)}function re(z,S,le){if(i.bindRenderbuffer(i.RENDERBUFFER,z),S.depthBuffer){let he=S.depthTexture,_e=he&&he.isDepthTexture?he.type:null,rt=M(S.stencilBuffer,_e),it=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ft(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,lt(S),rt,S.width,S.height):le?i.renderbufferStorageMultisample(i.RENDERBUFFER,lt(S),rt,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,rt,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,z)}else{let he=S.textures;for(let _e=0;_e<he.length;_e++){let rt=he[_e],it=r.convert(rt.format,rt.colorSpace),Oe=r.convert(rt.type),Ve=y(rt.internalFormat,it,Oe,rt.normalized,rt.colorSpace);ft(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,lt(S),Ve,S.width,S.height):le?i.renderbufferStorageMultisample(i.RENDERBUFFER,lt(S),Ve,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Ve,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Qe(z,S,le){let he=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,z),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let _e=n.get(S.depthTexture);if(_e.__renderTarget=S,(!_e.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),he){if(_e.__webglInit===void 0&&(_e.__webglInit=!0,S.depthTexture.addEventListener("dispose",R)),_e.__webglTexture===void 0){_e.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,_e.__webglTexture),Je(i.TEXTURE_CUBE_MAP,S.depthTexture);let je=r.convert(S.depthTexture.format),xt=r.convert(S.depthTexture.type),D;S.depthTexture.format===Cr?D=i.DEPTH_COMPONENT24:S.depthTexture.format===Fr&&(D=i.DEPTH24_STENCIL8);for(let oe=0;oe<6;oe++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,D,S.width,S.height,0,je,xt,null)}}else Y(S.depthTexture,0);let rt=_e.__webglTexture,it=lt(S),Oe=he?i.TEXTURE_CUBE_MAP_POSITIVE_X+le:i.TEXTURE_2D,Ve=S.depthTexture.format===Fr?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(S.depthTexture.format===Cr)ft(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ve,Oe,rt,0,it):i.framebufferTexture2D(i.FRAMEBUFFER,Ve,Oe,rt,0);else if(S.depthTexture.format===Fr)ft(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ve,Oe,rt,0,it):i.framebufferTexture2D(i.FRAMEBUFFER,Ve,Oe,rt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ue(z){let S=n.get(z),le=z.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==z.depthTexture){let he=z.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),he){let _e=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,he.removeEventListener("dispose",_e)};he.addEventListener("dispose",_e),S.__depthDisposeCallback=_e}S.__boundDepthTexture=he}if(z.depthTexture&&!S.__autoAllocateDepthBuffer)if(le)for(let he=0;he<6;he++)Qe(S.__webglFramebuffer[he],z,he);else{let he=z.texture.mipmaps;he&&he.length>0?Qe(S.__webglFramebuffer[0],z,0):Qe(S.__webglFramebuffer,z,0)}else if(le){S.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[he]),S.__webglDepthbuffer[he]===void 0)S.__webglDepthbuffer[he]=i.createRenderbuffer(),re(S.__webglDepthbuffer[he],z,!1);else{let _e=z.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=S.__webglDepthbuffer[he];i.bindRenderbuffer(i.RENDERBUFFER,rt),i.framebufferRenderbuffer(i.FRAMEBUFFER,_e,i.RENDERBUFFER,rt)}}else{let he=z.texture.mipmaps;if(he&&he.length>0?t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),re(S.__webglDepthbuffer,z,!1);else{let _e=z.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,rt),i.framebufferRenderbuffer(i.FRAMEBUFFER,_e,i.RENDERBUFFER,rt)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function me(z,S,le){let he=n.get(z);S!==void 0&&Ge(he.__webglFramebuffer,z,z.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),le!==void 0&&ue(z)}function ie(z){let S=z.texture,le=n.get(z),he=n.get(S);z.addEventListener("dispose",v);let _e=z.textures,rt=z.isWebGLCubeRenderTarget===!0,it=_e.length>1;if(it||(he.__webglTexture===void 0&&(he.__webglTexture=i.createTexture()),he.__version=S.version,a.memory.textures++),rt){le.__webglFramebuffer=[];for(let Oe=0;Oe<6;Oe++)if(S.mipmaps&&S.mipmaps.length>0){le.__webglFramebuffer[Oe]=[];for(let Ve=0;Ve<S.mipmaps.length;Ve++)le.__webglFramebuffer[Oe][Ve]=i.createFramebuffer()}else le.__webglFramebuffer[Oe]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){le.__webglFramebuffer=[];for(let Oe=0;Oe<S.mipmaps.length;Oe++)le.__webglFramebuffer[Oe]=i.createFramebuffer()}else le.__webglFramebuffer=i.createFramebuffer();if(it)for(let Oe=0,Ve=_e.length;Oe<Ve;Oe++){let je=n.get(_e[Oe]);je.__webglTexture===void 0&&(je.__webglTexture=i.createTexture(),a.memory.textures++)}if(z.samples>0&&ft(z)===!1){le.__webglMultisampledFramebuffer=i.createFramebuffer(),le.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,le.__webglMultisampledFramebuffer);for(let Oe=0;Oe<_e.length;Oe++){let Ve=_e[Oe];le.__webglColorRenderbuffer[Oe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,le.__webglColorRenderbuffer[Oe]);let je=r.convert(Ve.format,Ve.colorSpace),xt=r.convert(Ve.type),D=y(Ve.internalFormat,je,xt,Ve.normalized,Ve.colorSpace,z.isXRRenderTarget===!0),oe=lt(z);i.renderbufferStorageMultisample(i.RENDERBUFFER,oe,D,z.width,z.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Oe,i.RENDERBUFFER,le.__webglColorRenderbuffer[Oe])}i.bindRenderbuffer(i.RENDERBUFFER,null),z.depthBuffer&&(le.__webglDepthRenderbuffer=i.createRenderbuffer(),re(le.__webglDepthRenderbuffer,z,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(rt){t.bindTexture(i.TEXTURE_CUBE_MAP,he.__webglTexture),Je(i.TEXTURE_CUBE_MAP,S);for(let Oe=0;Oe<6;Oe++)if(S.mipmaps&&S.mipmaps.length>0)for(let Ve=0;Ve<S.mipmaps.length;Ve++)Ge(le.__webglFramebuffer[Oe][Ve],z,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,Ve);else Ge(le.__webglFramebuffer[Oe],z,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0);m(S)&&_(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(it){for(let Oe=0,Ve=_e.length;Oe<Ve;Oe++){let je=_e[Oe],xt=n.get(je),D=i.TEXTURE_2D;(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(D=z.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(D,xt.__webglTexture),Je(D,je),Ge(le.__webglFramebuffer,z,je,i.COLOR_ATTACHMENT0+Oe,D,0),m(je)&&_(D)}t.unbindTexture()}else{let Oe=i.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(Oe=z.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Oe,he.__webglTexture),Je(Oe,S),S.mipmaps&&S.mipmaps.length>0)for(let Ve=0;Ve<S.mipmaps.length;Ve++)Ge(le.__webglFramebuffer[Ve],z,S,i.COLOR_ATTACHMENT0,Oe,Ve);else Ge(le.__webglFramebuffer,z,S,i.COLOR_ATTACHMENT0,Oe,0);m(S)&&_(Oe),t.unbindTexture()}z.depthBuffer&&ue(z)}function xe(z){let S=z.textures;for(let le=0,he=S.length;le<he;le++){let _e=S[le];if(m(_e)){let rt=b(z),it=n.get(_e).__webglTexture;t.bindTexture(rt,it),_(rt),t.unbindTexture()}}}let we=[],$e=[];function Xe(z){if(z.samples>0){if(ft(z)===!1){let S=z.textures,le=z.width,he=z.height,_e=i.COLOR_BUFFER_BIT,rt=z.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=n.get(z),Oe=S.length>1;if(Oe)for(let je=0;je<S.length;je++)t.bindFramebuffer(i.FRAMEBUFFER,it.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+je,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,it.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+je,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,it.__webglMultisampledFramebuffer);let Ve=z.texture.mipmaps;Ve&&Ve.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,it.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,it.__webglFramebuffer);for(let je=0;je<S.length;je++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(_e|=i.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(_e|=i.STENCIL_BUFFER_BIT)),Oe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,it.__webglColorRenderbuffer[je]);let xt=n.get(S[je]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,xt,0)}i.blitFramebuffer(0,0,le,he,0,0,le,he,_e,i.NEAREST),c===!0&&(we.length=0,$e.length=0,we.push(i.COLOR_ATTACHMENT0+je),z.depthBuffer&&z.storeMultisampledDepthBuffer===!1&&(we.push(rt),$e.push(rt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,$e)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,we))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Oe)for(let je=0;je<S.length;je++){t.bindFramebuffer(i.FRAMEBUFFER,it.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+je,i.RENDERBUFFER,it.__webglColorRenderbuffer[je]);let xt=n.get(S[je]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,it.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+je,i.TEXTURE_2D,xt,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,it.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.storeMultisampledDepthBuffer===!1&&c){let S=z.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function lt(z){return Math.min(s.maxSamples,z.samples)}function ft(z){let S=n.get(z);return z.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function j(z){let S=a.render.frame;h.get(z)!==S&&(h.set(z,S),z.update())}function Dt(z,S){let le=z.colorSpace,he=z.format,_e=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||le!==fl&&le!==vr&&(bn.getTransfer(le)===Ln?(he!==rs||_e!==zi)&&Kt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):jt("WebGLTextures: Unsupported texture color space:",le)),S}function _t(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(l.width=z.naturalWidth||z.width,l.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(l.width=z.displayWidth,l.height=z.displayHeight):(l.width=z.width,l.height=z.height),l}this.allocateTextureUnit=Z,this.resetTextureUnits=U,this.getTextureUnits=N,this.setTextureUnits=B,this.setTexture2D=Y,this.setTexture2DArray=q,this.setTexture3D=W,this.setTextureCube=J,this.rebindTextures=me,this.setupRenderTarget=ie,this.updateRenderTargetMipmap=xe,this.updateMultisampleRenderTarget=Xe,this.setupDepthRenderbuffer=ue,this.setupFrameBufferTexture=Ge,this.useMultisampledRTT=ft,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Yy(i,e){function t(n,s=vr){let r,a=bn.getTransfer(s);if(n===zi)return i.UNSIGNED_BYTE;if(n===V0)return i.UNSIGNED_SHORT_4_4_4_4;if(n===W0)return i.UNSIGNED_SHORT_5_5_5_1;if(n===jh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ef)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Kh)return i.BYTE;if(n===Qh)return i.SHORT;if(n===Oo)return i.UNSIGNED_SHORT;if(n===k0)return i.INT;if(n===xr)return i.UNSIGNED_INT;if(n===js)return i.FLOAT;if(n===hi)return i.HALF_FLOAT;if(n===tf)return i.ALPHA;if(n===nf)return i.RGB;if(n===rs)return i.RGBA;if(n===Cr)return i.DEPTH_COMPONENT;if(n===Fr)return i.DEPTH_STENCIL;if(n===X0)return i.RED;if(n===Y0)return i.RED_INTEGER;if(n===ba)return i.RG;if(n===q0)return i.RG_INTEGER;if(n===Z0)return i.RGBA_INTEGER;if(n===Ql||n===jl||n===ec||n===tc)if(a===Ln)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ql)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===jl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ec)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===tc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ql)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===jl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ec)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===tc)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===$0||n===J0||n===K0||n===Q0)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===$0)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===J0)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===K0)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Q0)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===j0||n===eu||n===tu||n===nu||n===iu||n===nc||n===su)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===j0||n===eu)return a===Ln?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===tu)return a===Ln?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===nu)return r.COMPRESSED_R11_EAC;if(n===iu)return r.COMPRESSED_SIGNED_R11_EAC;if(n===nc)return r.COMPRESSED_RG11_EAC;if(n===su)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ru||n===au||n===ou||n===lu||n===cu||n===uu||n===hu||n===fu||n===du||n===pu||n===mu||n===gu||n===xu||n===vu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ru)return a===Ln?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===au)return a===Ln?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ou)return a===Ln?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===lu)return a===Ln?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===cu)return a===Ln?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===uu)return a===Ln?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===hu)return a===Ln?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===fu)return a===Ln?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===du)return a===Ln?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===pu)return a===Ln?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===mu)return a===Ln?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===gu)return a===Ln?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===xu)return a===Ln?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===vu)return a===Ln?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===yu||n===_u||n===Mu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===yu)return a===Ln?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===_u)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Mu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Eu||n===Su||n===ic||n===bu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Eu)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Su)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ic)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===bu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Sa?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var qy=`
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

}`,Pf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Sl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Cn({vertexShader:qy,fragmentShader:Zy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Fe(new sn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},If=class extends Pr{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,p=null,u=null,f=null,x=typeof XRWebGLBinding<"u",g=new Pf,m={},_=t.getContextAttributes(),b=null,y=null,M=[],T=[],R=new nt,v=null,A=null,I=new $i;I.viewport=new ai;let G=new $i;G.viewport=new ai;let w=[I,G],U=new F0,N=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let Ee=M[te];return Ee===void 0&&(Ee=new Eo,M[te]=Ee),Ee.getTargetRaySpace()},this.getControllerGrip=function(te){let Ee=M[te];return Ee===void 0&&(Ee=new Eo,M[te]=Ee),Ee.getGripSpace()},this.getHand=function(te){let Ee=M[te];return Ee===void 0&&(Ee=new Eo,M[te]=Ee),Ee.getHandSpace()};function Z(te){let Ee=T.indexOf(te.inputSource);if(Ee===-1)return;let Ue=M[Ee];Ue!==void 0&&(Ue.update(te.inputSource,te.frame,l||a),Ue.dispatchEvent({type:te.type,data:te.inputSource}))}function H(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",Y);for(let te=0;te<M.length;te++){let Ee=T[te];Ee!==null&&(T[te]=null,M[te].disconnect(Ee))}N=null,B=null,g.reset();for(let te in m)delete m[te];if(e.setRenderTarget(b),u=null,p=null,d=null,s=null,y=null,mt.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(R.width,R.height,!1),A!==null){let te=A.camera;te.fov=A.fov,te.zoom=A.zoom,te.updateProjectionMatrix(),A=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){r=te,n.isPresenting===!0&&Kt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){o=te,n.isPresenting===!0&&Kt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(te){l=te},this.getBaseLayer=function(){return p!==null?p:u},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return f},this.getSession=function(){return s},this.setSession=async function(te){if(s=te,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",H),s.addEventListener("inputsourceschange",Y),_.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(R),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ue=null,be=null,Ge=null;_.depth&&(Ge=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ue=_.stencil?Fr:Cr,be=_.stencil?Sa:xr);let re={colorFormat:t.RGBA8,depthFormat:Ge,scaleFactor:r};d=this.getBinding(),p=d.createProjectionLayer(re),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),y=new oi(p.textureWidth,p.textureHeight,{format:rs,type:zi,depthTexture:new Js(p.textureWidth,p.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,Ue),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}else{let Ue={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,t,Ue),s.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),y=new oi(u.framebufferWidth,u.framebufferHeight,{format:rs,type:zi,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),mt.setContext(s),mt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Y(te){for(let Ee=0;Ee<te.removed.length;Ee++){let Ue=te.removed[Ee],be=T.indexOf(Ue);be>=0&&(T[be]=null,M[be].disconnect(Ue))}for(let Ee=0;Ee<te.added.length;Ee++){let Ue=te.added[Ee],be=T.indexOf(Ue);if(be===-1){for(let re=0;re<M.length;re++)if(re>=T.length){T.push(Ue),be=re;break}else if(T[re]===null){T[re]=Ue,be=re;break}if(be===-1)break}let Ge=M[be];Ge&&Ge.connect(Ue)}}let q=new F,W=new F;function J(te,Ee,Ue){q.setFromMatrixPosition(Ee.matrixWorld),W.setFromMatrixPosition(Ue.matrixWorld);let be=q.distanceTo(W),Ge=Ee.projectionMatrix.elements,re=Ue.projectionMatrix.elements,Qe=Ge[14]/(Ge[10]-1),ue=Ge[14]/(Ge[10]+1),me=(Ge[9]+1)/Ge[5],ie=(Ge[9]-1)/Ge[5],xe=(Ge[8]-1)/Ge[0],we=(re[8]+1)/re[0],$e=Qe*xe,Xe=Qe*we,lt=be/(-xe+we),ft=lt*-xe;if(Ee.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(ft),te.translateZ(lt),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),Ge[10]===-1)te.projectionMatrix.copy(Ee.projectionMatrix),te.projectionMatrixInverse.copy(Ee.projectionMatrixInverse);else{let j=Qe+lt,Dt=ue+lt,_t=$e-ft,z=Xe+(be-ft),S=me*ue/Dt*j,le=ie*ue/Dt*j;te.projectionMatrix.makePerspective(_t,z,S,le,j,Dt),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function ge(te,Ee){Ee===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(Ee.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(s===null)return;let Ee=te.near,Ue=te.far;g.texture!==null&&(g.depthNear>0&&(Ee=g.depthNear),g.depthFar>0&&(Ue=g.depthFar)),U.near=G.near=I.near=Ee,U.far=G.far=I.far=Ue,(N!==U.near||B!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),N=U.near,B=U.far),U.layers.mask=te.layers.mask|6,I.layers.mask=U.layers.mask&-5,G.layers.mask=U.layers.mask&-3;let be=te.parent,Ge=U.cameras;ge(U,be);for(let re=0;re<Ge.length;re++)ge(Ge[re],be);Ge.length===2?J(U,I,G):U.projectionMatrix.copy(I.projectionMatrix),A===null&&te.isPerspectiveCamera&&(A={camera:te,fov:te.fov,zoom:te.zoom}),Ne(te,U,be)};function Ne(te,Ee,Ue){Ue===null?te.matrix.copy(Ee.matrixWorld):(te.matrix.copy(Ue.matrixWorld),te.matrix.invert(),te.matrix.multiply(Ee.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(Ee.projectionMatrix),te.projectionMatrixInverse.copy(Ee.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=gl*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(p===null&&u===null))return c},this.setFoveation=function(te){c=te,p!==null&&(p.fixedFoveation=te),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=te)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(U)},this.getCameraTexture=function(te){return m[te]};let qe=null;function Je(te,Ee){if(h=Ee.getViewerPose(l||a),f=Ee,h!==null){let Ue=h.views;u!==null&&(e.setRenderTargetFramebuffer(y,u.framebuffer),e.setRenderTarget(y));let be=!1;Ue.length!==U.cameras.length&&(U.cameras.length=0,be=!0);for(let ue=0;ue<Ue.length;ue++){let me=Ue[ue],ie=null;if(u!==null)ie=u.getViewport(me);else{let we=d.getViewSubImage(p,me);ie=we.viewport,ue===0&&(e.setRenderTargetTextures(y,we.colorTexture,we.depthStencilTexture),e.setRenderTarget(y))}let xe=w[ue];xe===void 0&&(xe=new $i,xe.layers.enable(ue),xe.viewport=new ai,w[ue]=xe),xe.matrix.fromArray(me.transform.matrix),xe.matrix.decompose(xe.position,xe.quaternion,xe.scale),xe.projectionMatrix.fromArray(me.projectionMatrix),xe.projectionMatrixInverse.copy(xe.projectionMatrix).invert(),xe.viewport.set(ie.x,ie.y,ie.width,ie.height),ue===0&&(U.matrix.copy(xe.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),be===!0&&U.cameras.push(xe)}let Ge=s.enabledFeatures;if(Ge&&Ge.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=n.getBinding();let ue=d.getDepthInformation(Ue[0]);ue&&ue.isValid&&ue.texture&&g.init(ue,s.renderState)}if(Ge&&Ge.includes("camera-access")&&x){e.state.unbindTexture(),d=n.getBinding();for(let ue=0;ue<Ue.length;ue++){let me=Ue[ue].camera;if(me){let ie=m[me];ie||(ie=new Sl,m[me]=ie);let xe=d.getCameraImage(me);ie.sourceTexture=xe}}}}for(let Ue=0;Ue<M.length;Ue++){let be=T[Ue],Ge=M[Ue];be!==null&&Ge!==void 0&&Ge.update(be,Ee,l||a)}qe&&qe(te,Ee),Ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Ee}),f=null}let mt=new qp;mt.setAnimationLoop(Je),this.setAnimationLoop=function(te){qe=te},this.dispose=function(){}}},$y=new zt,jp=new cn;jp.set(-1,0,0,0,1,0,0,0,1);function Jy(i,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,lf(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,_,b,y){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),d(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),p(g,m),m.isMeshPhysicalMaterial&&u(g,m,y)):m.isMeshMatcapMaterial?(r(g,m),f(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),x(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?c(g,m,_,b):m.isSpriteMaterial?l(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===es&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===es&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let _=e.get(m),b=_.envMap,y=_.envMapRotation;b&&(g.envMap.value=b,g.envMapRotation.value.setFromMatrix4($y.makeRotationFromEuler(y)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(jp),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,_,b){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*_,g.scale.value=b*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function p(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function u(g,m,_){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===es&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function f(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){let _=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Ky(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,M){let T=M.program;n.uniformBlockBinding(y,T)}function l(y,M){let T=s[y.id];T===void 0&&(g(y),T=h(y),s[y.id]=T,y.addEventListener("dispose",_));let R=M.program;n.updateUBOMapping(y,R);let v=e.render.frame;r[y.id]!==v&&(p(y),r[y.id]=v)}function h(y){let M=d();y.__bindingPointIndex=M;let T=i.createBuffer(),R=y.__size,v=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,R,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,T),T}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return jt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(y){let M=s[y.id],T=y.uniforms,R=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let v=0,A=T.length;v<A;v++){let I=T[v];if(Array.isArray(I))for(let G=0,w=I.length;G<w;G++)u(I[G],v,G,R);else u(I,v,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(y,M,T,R){if(x(y,M,T,R)===!0){let v=y.__offset,A=y.value;if(Array.isArray(A)){let I=0;for(let G=0;G<A.length;G++){let w=A[G],U=m(w);f(w,y.__data,I),typeof w!="number"&&typeof w!="boolean"&&!w.isMatrix3&&!ArrayBuffer.isView(w)&&(I+=U.storage/Float32Array.BYTES_PER_ELEMENT)}}else f(A,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,y.__data)}}function f(y,M,T){typeof y=="number"||typeof y=="boolean"?M[0]=y:y.isMatrix3?(M[0]=y.elements[0],M[1]=y.elements[1],M[2]=y.elements[2],M[3]=0,M[4]=y.elements[3],M[5]=y.elements[4],M[6]=y.elements[5],M[7]=0,M[8]=y.elements[6],M[9]=y.elements[7],M[10]=y.elements[8],M[11]=0):ArrayBuffer.isView(y)?M.set(new y.constructor(y.buffer,y.byteOffset,M.length)):y.toArray(M,T)}function x(y,M,T,R){let v=y.value,A=M+"_"+T;if(R[A]===void 0)return typeof v=="number"||typeof v=="boolean"?R[A]=v:ArrayBuffer.isView(v)?R[A]=v.slice():R[A]=v.clone(),!0;{let I=R[A];if(typeof v=="number"||typeof v=="boolean"){if(I!==v)return R[A]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(I.equals(v)===!1)return I.copy(v),!0}}return!1}function g(y){let M=y.uniforms,T=0,R=16;for(let A=0,I=M.length;A<I;A++){let G=Array.isArray(M[A])?M[A]:[M[A]];for(let w=0,U=G.length;w<U;w++){let N=G[w],B=Array.isArray(N.value)?N.value:[N.value];for(let Z=0,H=B.length;Z<H;Z++){let Y=B[Z],q=m(Y),W=T%R,J=W%q.boundary,ge=W+J;T+=J,ge!==0&&R-ge<q.storage&&(T+=R-ge),N.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=T,T+=q.storage}}}let v=T%R;return v>0&&(T+=R-v),y.__size=T,y.__cache={},this}function m(y){let M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?Kt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(M.boundary=16,M.storage=y.byteLength):Kt("WebGLRenderer: Unsupported uniform value type.",y),M}function _(y){let M=y.target;M.removeEventListener("dispose",_);let T=a.indexOf(M.__bindingPointIndex);a.splice(T,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function b(){for(let y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:c,update:l,dispose:b}}var Qy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Or=null;function jy(){return Or===null&&(Or=new $s(Qy,16,16,ba,hi),Or.name="DFG_LUT",Or.minFilter=Ni,Or.magFilter=Ni,Or.wrapS=ws,Or.wrapT=ws,Or.generateMipmaps=!1,Or.needsUpdate=!0),Or}var Cu=class{constructor(e={}){let{canvas:t=pp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:p=!1,outputBufferType:u=zi}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;let x=u,g=new Set([Z0,q0,Y0]),m=new Set([zi,xr,Oo,Sa,V0,W0]),_=new Uint32Array(4),b=new Int32Array(4),y=new F,M=null,T=null,R=[],v=[],A=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Us,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,G=!1,w=null,U=null,N=null,B=null;this._outputColorSpace=vn;let Z=0,H=0,Y=null,q=-1,W=null,J=new ai,ge=new ai,Ne=null,qe=new Et(0),Je=0,mt=t.width,te=t.height,Ee=1,Ue=null,be=null,Ge=new ai(0,0,mt,te),re=new ai(0,0,mt,te),Qe=!1,ue=new To,me=!1,ie=!1,xe=new zt,we=new F,$e=new ai,Xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},lt=!1;function ft(){return Y===null?Ee:1}let j=n;function Dt(P,se){return t.getContext(P,se)}let _t,z,S,le,he,_e,rt,it,Oe,Ve,je,xt,D,oe,fe,Re,We,k,Le,de,Be,Pe,ae;try{let P={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",vt,!1),t.addEventListener("webglcontextrestored",Ft,!1),t.addEventListener("webglcontextcreationerror",Xt,!1),j===null){let se="webgl2";if(j=Dt(se,P),j===null)throw Dt(se)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}at()}catch(P){throw t.removeEventListener("webglcontextlost",vt,!1),t.removeEventListener("webglcontextrestored",Ft,!1),t.removeEventListener("webglcontextcreationerror",Xt,!1),jt("WebGLRenderer: "+P.message),P}function at(){_t=new av(j),_t.init(),Be=new Yy(j,_t),z=new Jx(j,_t,e,Be),S=new Wy(j,_t),z.reversedDepthBuffer&&p&&S.buffers.depth.setReversed(!0),U=j.createFramebuffer(),N=j.createFramebuffer(),B=j.createFramebuffer(),le=new cv(j),he=new Py,_e=new Xy(j,_t,S,he,z,Be,le),rt=new rv(I),it=new hg(j),Pe=new Zx(j,it),Oe=new ov(j,it,le,Pe),Ve=new hv(j,Oe,it,Pe,le),k=new uv(j,z,_e),fe=new Kx(he),je=new Cy(I,rt,_t,z,Pe,fe),xt=new Jy(I,he),D=new Dy,oe=new By(_t),We=new qx(I,rt,S,Ve,f,c),Re=new Vy(I,Ve,z),ae=new Ky(j,le,z,S),Le=new $x(j,_t,le),de=new lv(j,_t,le),le.programs=je.programs,I.capabilities=z,I.extensions=_t,I.properties=he,I.renderLists=D,I.shadowMap=Re,I.state=S,I.info=le}x!==zi&&(A=new dv(x,t.width,t.height,o,s,r));let Ze=new If(I,j);this.xr=Ze,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){let P=_t.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=_t.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return Ee},this.setPixelRatio=function(P){P!==void 0&&(Ee=P,this.setSize(mt,te,!1))},this.getSize=function(P){return P.set(mt,te)},this.setSize=function(P,se,Ie=!0){if(Ze.isPresenting){Kt("WebGLRenderer: Can't change size while VR device is presenting.");return}mt=P,te=se,t.width=Math.floor(P*Ee),t.height=Math.floor(se*Ee),Ie===!0&&(t.style.width=P+"px",t.style.height=se+"px"),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,P,se)},this.getDrawingBufferSize=function(P){return P.set(mt*Ee,te*Ee).floor()},this.setDrawingBufferSize=function(P,se,Ie){mt=P,te=se,Ee=Ie,t.width=Math.floor(P*Ie),t.height=Math.floor(se*Ie),this.setViewport(0,0,P,se)},this.setEffects=function(P){if(x===zi){jt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(P){for(let se=0;se<P.length;se++)if(P[se].isOutputPass===!0){Kt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(P||[])},this.getCurrentViewport=function(P){return P.copy(J)},this.getViewport=function(P){return P.copy(Ge)},this.setViewport=function(P,se,Ie,Me){P.isVector4?Ge.set(P.x,P.y,P.z,P.w):Ge.set(P,se,Ie,Me),S.viewport(J.copy(Ge).multiplyScalar(Ee).round())},this.getScissor=function(P){return P.copy(re)},this.setScissor=function(P,se,Ie,Me){P.isVector4?re.set(P.x,P.y,P.z,P.w):re.set(P,se,Ie,Me),S.scissor(ge.copy(re).multiplyScalar(Ee).round())},this.getScissorTest=function(){return Qe},this.setScissorTest=function(P){S.setScissorTest(Qe=P)},this.setOpaqueSort=function(P){Ue=P},this.setTransparentSort=function(P){be=P},this.getClearColor=function(P){return P.copy(We.getClearColor())},this.setClearColor=function(){We.setClearColor(...arguments)},this.getClearAlpha=function(){return We.getClearAlpha()},this.setClearAlpha=function(){We.setClearAlpha(...arguments)},this.clear=function(P=!0,se=!0,Ie=!0){let Me=0;if(P){let Ce=!1;if(Y!==null){let St=Y.texture.format;Ce=g.has(St)}if(Ce){let St=Y.texture.type,It=m.has(St),ee=We.getClearColor(),ne=We.getClearAlpha(),pe=ee.r,He=ee.g,E=ee.b;It?(_[0]=pe,_[1]=He,_[2]=E,_[3]=ne,j.clearBufferuiv(j.COLOR,0,_)):(b[0]=pe,b[1]=He,b[2]=E,b[3]=ne,j.clearBufferiv(j.COLOR,0,b))}else Me|=j.COLOR_BUFFER_BIT}se&&(Me|=j.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Ie&&(Me|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Me!==0&&j.clear(Me)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(P){P.setRenderer(this),w=P},this.dispose=function(){t.removeEventListener("webglcontextlost",vt,!1),t.removeEventListener("webglcontextrestored",Ft,!1),t.removeEventListener("webglcontextcreationerror",Xt,!1),We.dispose(),D.dispose(),oe.dispose(),he.dispose(),rt.dispose(),Ve.dispose(),Pe.dispose(),ae.dispose(),je.dispose(),Ze.dispose(),Ze.removeEventListener("sessionstart",Se),Ze.removeEventListener("sessionend",$),Ae.stop()};function vt(P){P.preventDefault(),ml("WebGLRenderer: Context Lost."),G=!0}function Ft(){ml("WebGLRenderer: Context Restored."),G=!1;let P=le.autoReset,se=Re.enabled,Ie=Re.autoUpdate,Me=Re.needsUpdate,Ce=Re.type;at(),le.autoReset=P,Re.enabled=se,Re.autoUpdate=Ie,Re.needsUpdate=Me,Re.type=Ce}function Xt(P){jt("WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function rn(P){let se=P.target;se.removeEventListener("dispose",rn),Pn(se)}function Pn(P){Jt(P),he.remove(P)}function Jt(P){let se=he.get(P).programs;se!==void 0&&(se.forEach(function(Ie){je.releaseProgram(Ie)}),P.isShaderMaterial&&je.releaseShaderCache(P))}this.renderBufferDirect=function(P,se,Ie,Me,Ce,St){se===null&&(se=Xe);let It=Ce.isMesh&&Ce.matrixWorld.determinantAffine()<0,ee=Vn(P,se,Ie,Me,Ce);S.setMaterial(Me,It);let ne=Ie.index,pe=1;if(Me.wireframe===!0){if(ne=Oe.getWireframeAttribute(Ie),ne===void 0)return;pe=2}let He=Ie.drawRange,E=Ie.attributes.position,O=He.start*pe,K=(He.start+He.count)*pe;St!==null&&(O=Math.max(O,St.start*pe),K=Math.min(K,(St.start+St.count)*pe)),ne!==null?(O=Math.max(O,0),K=Math.min(K,ne.count)):E!=null&&(O=Math.max(O,0),K=Math.min(K,E.count));let Q=K-O;if(Q<0||Q===1/0)return;Pe.setup(Ce,Me,ee,Ie,ne);let ve,De=Le;if(ne!==null&&(ve=it.get(ne),De=de,De.setIndex(ve)),Ce.isMesh)Me.wireframe===!0?(S.setLineWidth(Me.wireframeLinewidth*ft()),De.setMode(j.LINES)):De.setMode(j.TRIANGLES);else if(Ce.isLine){let ye=Me.linewidth;ye===void 0&&(ye=1),S.setLineWidth(ye*ft()),Ce.isLineSegments?De.setMode(j.LINES):Ce.isLineLoop?De.setMode(j.LINE_LOOP):De.setMode(j.LINE_STRIP)}else Ce.isPoints?De.setMode(j.POINTS):Ce.isSprite&&De.setMode(j.TRIANGLES);if(Ce.isBatchedMesh)if(_t.get("WEBGL_multi_draw"))De.renderMultiDraw(Ce._multiDrawStarts,Ce._multiDrawCounts,Ce._multiDrawCount);else{let ye=Ce._multiDrawStarts,X=Ce._multiDrawCounts,Ye=Ce._multiDrawCount,Ke=ne?it.get(ne).bytesPerElement:1,ct=he.get(Me).currentProgram.getUniforms();for(let ut=0;ut<Ye;ut++)ct.setValue(j,"_gl_DrawID",ut),De.render(ye[ut]/Ke,X[ut])}else if(Ce.isInstancedMesh)De.renderInstances(O,Q,Ce.count);else if(Ie.isInstancedBufferGeometry){let ye=Ie._maxInstanceCount!==void 0?Ie._maxInstanceCount:1/0,X=Math.min(Ie.instanceCount,ye);De.renderInstances(O,Q,X)}else De.render(O,Q)};function Tn(P,se,Ie,Me){w!==null&&P.isNodeMaterial&&w.setObject(Me,P),me===!0&&fe.setState(P,Ie,!1),P.transparent===!0&&P.side===li&&P.forceSinglePass===!1?(P.side=es,P.needsUpdate=!0,Lt(P,se,Me),P.side=ya,P.needsUpdate=!0,Lt(P,se,Me),P.side=li):Lt(P,se,Me)}this.compile=function(P,se,Ie=null){Ie===null&&(Ie=P),w!==null&&w.renderStart(P,se,Ie),T=oe.get(Ie),T.init(se),v.push(T),Ie.traverseVisible(function(Ce){Ce.isLight&&Ce.layers.test(se.layers)&&(T.pushLight(Ce),Ce.castShadow&&T.pushShadow(Ce))}),P!==Ie&&P.traverseVisible(function(Ce){Ce.isLight&&Ce.layers.test(se.layers)&&(T.pushLight(Ce),Ce.castShadow&&T.pushShadow(Ce))}),T.setupLights(),w!==null&&w.updateLights(T.state.lightsArray),ie=this.localClippingEnabled,me=fe.init(this.clippingPlanes,ie),me===!0&&fe.setGlobalState(this.clippingPlanes,se),w!==null&&Re.render(T.state.shadowsArray,Ie,se);let Me=new Set;return P.traverse(function(Ce){if(!(Ce.isMesh||Ce.isPoints||Ce.isLine||Ce.isSprite))return;let St=Ce.material;if(St)if(Array.isArray(St))for(let It=0;It<St.length;It++){let ee=St[It];Tn(ee,Ie,se,Ce),Me.add(ee)}else Tn(St,Ie,se,Ce),Me.add(St)}),T=v.pop(),w!==null&&w.renderEnd(),Me},this.compileAsync=function(P,se,Ie=null){let Me=this.compile(P,se,Ie);return new Promise(Ce=>{function St(){if(Me.forEach(function(It){let ne=he.get(It).currentProgram;(ne===void 0||ne.isReady())&&Me.delete(It)}),Me.size===0){Ce(P);return}setTimeout(St,10)}_t.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let _n=null;function C(P){_n&&_n(P)}function Se(){Ae.stop()}function $(){Ae.start()}let Ae=new qp;Ae.setAnimationLoop(C),typeof self<"u"&&Ae.setContext(self),this.setAnimationLoop=function(P){_n=P,Ze.setAnimationLoop(P),P===null?Ae.stop():Ae.start()},Ze.addEventListener("sessionstart",Se),Ze.addEventListener("sessionend",$),this.render=function(P,se){if(se!==void 0&&se.isCamera!==!0){jt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;w!==null&&w.renderStart(P,se);let Ie=Ze.enabled===!0&&Ze.isPresenting===!0,Me=A!==null&&(Y===null||Ie)&&A.begin(I,Y);if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),se.parent===null&&se.matrixWorldAutoUpdate===!0&&se.updateMatrixWorld(),Ze.enabled===!0&&Ze.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Ze.cameraAutoUpdate===!0&&Ze.updateCamera(se),se=Ze.getCamera()),P.isScene===!0&&P.onBeforeRender(I,P,se,Y),T=oe.get(P,v.length),T.init(se),T.state.textureUnits=_e.getTextureUnits(),v.push(T),xe.multiplyMatrices(se.projectionMatrix,se.matrixWorldInverse),ue.setFromProjectionMatrix(xe,gr,se.reversedDepth),ie=this.localClippingEnabled,me=fe.init(this.clippingPlanes,ie),M=D.get(P,R.length),M.init(),R.push(M),Ze.enabled===!0&&Ze.isPresenting===!0){let It=I.xr.getDepthSensingMesh();It!==null&&Te(It,se,-1/0,I.sortObjects)}Te(P,se,0,I.sortObjects),M.finish(),w!==null&&w.updateLights(T.state.lightsArray),I.sortObjects===!0&&M.sort(Ue,be),lt=Ze.enabled===!1||Ze.isPresenting===!1||Ze.hasDepthSensing()===!1,lt&&We.addToRenderList(M,P),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),me===!0&&fe.beginShadows();let Ce=T.state.shadowsArray;if(Re.render(Ce,P,se),me===!0&&fe.endShadows(),(Me&&A.hasRenderPass())===!1){let It=M.opaque,ee=M.transmissive;if(T.setupLights(),se.isArrayCamera){let ne=se.cameras;if(ee.length>0)for(let pe=0,He=ne.length;pe<He;pe++){let E=ne[pe];gt(It,ee,P,E)}lt&&We.render(P);for(let pe=0,He=ne.length;pe<He;pe++){let E=ne[pe];ht(M,P,E,E.viewport)}}else ee.length>0&&gt(It,ee,P,se),lt&&We.render(P),ht(M,P,se)}Y!==null&&H===0&&(_e.updateMultisampleRenderTarget(Y),_e.updateRenderTargetMipmap(Y)),Me&&A.end(I),P.isScene===!0&&P.onAfterRender(I,P,se),Pe.resetDefaultState(),q=-1,W=null,v.pop(),v.length>0?(T=v[v.length-1],_e.setTextureUnits(T.state.textureUnits),me===!0&&fe.setGlobalState(I.clippingPlanes,T.state.camera)):T=null,R.pop(),R.length>0?M=R[R.length-1]:M=null,w!==null&&w.renderEnd()};function Te(P,se,Ie,Me){if(P.visible===!1)return;if(P.layers.test(se.layers)){if(P.isGroup)Ie=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(se);else if(P.isLightProbeGrid)T.pushLightProbeGrid(P);else if(P.isLight)T.pushLight(P),P.castShadow&&T.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||P.intersectsFrustum(ue)){Me&&$e.setFromMatrixPosition(P.matrixWorld).applyMatrix4(xe);let It=Ve.update(P),ee=P.material;ee.visible&&M.push(P,It,ee,Ie,$e.z,null,se)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||P.intersectsFrustum(ue))){let It=Ve.update(P),ee=P.material;if(Me&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),$e.copy(P.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),$e.copy(It.boundingSphere.center)),$e.applyMatrix4(P.matrixWorld).applyMatrix4(xe)),Array.isArray(ee)){let ne=It.groups;for(let pe=0,He=ne.length;pe<He;pe++){let E=ne[pe],O=ee[E.materialIndex];O&&O.visible&&M.push(P,It,O,Ie,$e.z,E,se)}}else ee.visible&&M.push(P,It,ee,Ie,$e.z,null,se)}}let St=P.children;for(let It=0,ee=St.length;It<ee;It++)Te(St[It],se,Ie,Me)}function ht(P,se,Ie,Me){let{opaque:Ce,transmissive:St,transparent:It}=P;T.setupLightsView(Ie),me===!0&&fe.setGlobalState(I.clippingPlanes,Ie),Me&&S.viewport(J.copy(Me)),Ce.length>0&&Ct(Ce,se,Ie),St.length>0&&Ct(St,se,Ie),It.length>0&&Ct(It,se,Ie),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function gt(P,se,Ie,Me){if((Ie.isScene===!0?Ie.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[Me.id]===void 0){let O=_t.has("EXT_color_buffer_half_float")||_t.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[Me.id]=new oi(1,1,{generateMipmaps:!0,type:O?hi:zi,minFilter:Ur,samples:Math.max(4,z.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:bn.workingColorSpace})}let St=T.state.transmissionRenderTarget[Me.id],It=Me.viewport||J;St.setSize(It.z*I.transmissionResolutionScale,It.w*I.transmissionResolutionScale);let ee=I.getRenderTarget(),ne=I.getActiveCubeFace(),pe=I.getActiveMipmapLevel();I.setRenderTarget(St),I.getClearColor(qe),Je=I.getClearAlpha(),Je<1&&I.setClearColor(16777215,.5),I.clear(),lt&&We.render(Ie);let He=I.toneMapping;I.toneMapping=Us;let E=Me.viewport;if(Me.viewport!==void 0&&(Me.viewport=void 0),T.setupLightsView(Me),me===!0&&fe.setGlobalState(I.clippingPlanes,Me),Ct(P,Ie,Me),_e.updateMultisampleRenderTarget(St),_e.updateRenderTargetMipmap(St),_t.has("WEBGL_multisampled_render_to_texture")===!1){let O=!1;for(let K=0,Q=se.length;K<Q;K++){let ve=se[K],{object:De,geometry:ye,material:X,group:Ye}=ve;if(X.side===li&&De.layers.test(Me.layers)){let Ke=X.side;X.side=es,X.needsUpdate=!0,dt(De,Ie,Me,ye,X,Ye),X.side=Ke,X.needsUpdate=!0,O=!0}}O===!0&&(_e.updateMultisampleRenderTarget(St),_e.updateRenderTargetMipmap(St))}I.setRenderTarget(ee,ne,pe),I.setClearColor(qe,Je),E!==void 0&&(Me.viewport=E),I.toneMapping=He}function Ct(P,se,Ie){let Me=se.isScene===!0?se.overrideMaterial:null;for(let Ce=0,St=P.length;Ce<St;Ce++){let It=P[Ce],{object:ee,geometry:ne,group:pe}=It,He=It.material;He.allowOverride===!0&&Me!==null&&(He=Me),ee.layers.test(Ie.layers)&&dt(ee,se,Ie,ne,He,pe)}}function dt(P,se,Ie,Me,Ce,St){w!==null&&Ce.isNodeMaterial&&w.setObject(P,Ce),P.onBeforeRender(I,se,Ie,Me,Ce,St),P.modelViewMatrix.multiplyMatrices(Ie.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),Ce.onBeforeRender(I,se,Ie,Me,P,St),Ce.transparent===!0&&Ce.side===li&&Ce.forceSinglePass===!1?(Ce.side=es,Ce.needsUpdate=!0,I.renderBufferDirect(Ie,se,Me,Ce,P,St),Ce.side=ya,Ce.needsUpdate=!0,I.renderBufferDirect(Ie,se,Me,Ce,P,St),Ce.side=li):I.renderBufferDirect(Ie,se,Me,Ce,P,St),P.onAfterRender(I,se,Ie,Me,Ce,St)}function Lt(P,se,Ie){se.isScene!==!0&&(se=Xe);let Me=he.get(P),Ce=T.state.lights,St=T.state.shadowsArray,It=Ce.state.version,ee=je.getParameters(P,Ce.state,St,se,Ie,T.state.lightProbeGridArray),ne=je.getProgramCacheKey(ee),pe=Me.programs;Me.environment=P.isMeshStandardMaterial||P.isMeshLambertMaterial||P.isMeshPhongMaterial?se.environment:null,Me.fog=se.fog;let He=P.isMeshStandardMaterial||P.isMeshLambertMaterial&&!P.envMap||P.isMeshPhongMaterial&&!P.envMap;Me.envMap=rt.get(P.envMap||Me.environment,He),Me.envMapRotation=Me.environment!==null&&P.envMap===null?se.environmentRotation:P.envMapRotation,pe===void 0&&(P.addEventListener("dispose",rn),pe=new Map,Me.programs=pe);let E=pe.get(ne);if(E!==void 0){if(Me.currentProgram===E&&Me.lightsStateVersion===It)return wn(P,ee),E}else ee.uniforms=je.getUniforms(P),w!==null&&P.isNodeMaterial&&w.build(P,Ie,ee),P.onBeforeCompile(ee,I),E=je.acquireProgram(ee,ne),pe.set(ne,E),Me.uniforms=ee.uniforms;let O=Me.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(O.clippingPlanes=fe.uniform),wn(P,ee),Me.needsLights=Xn(P),Me.lightsStateVersion=It,Me.needsLights&&(O.ambientLightColor.value=Ce.state.ambient,O.lightProbe.value=Ce.state.probe,O.sunLights.value=Ce.state.sun,O.sunLightShadows.value=Ce.state.sunShadow,O.directionalLights.value=Ce.state.directional,O.directionalLightShadows.value=Ce.state.directionalShadow,O.spotLights.value=Ce.state.spot,O.spotLightShadows.value=Ce.state.spotShadow,O.rectAreaLights.value=Ce.state.rectArea,O.ltc_1.value=Ce.state.rectAreaLTC1,O.ltc_2.value=Ce.state.rectAreaLTC2,O.pointLights.value=Ce.state.point,O.pointLightShadows.value=Ce.state.pointShadow,O.hemisphereLights.value=Ce.state.hemi,O.sunShadowMatrix.value=Ce.state.sunShadowMatrix,O.sunShadowCascade.value=Ce.state.sunShadowCascade,O.directionalShadowMatrix.value=Ce.state.directionalShadowMatrix,O.spotLightMatrix.value=Ce.state.spotLightMatrix,O.spotLightMap.value=Ce.state.spotLightMap,O.pointShadowMatrix.value=Ce.state.pointShadowMatrix),Me.lightProbeGrid=T.state.lightProbeGridArray.length>0,Me.currentProgram=E,Me.uniformsList=null,E}function Vt(P){if(P.uniformsList===null){let se=P.currentProgram.getUniforms();P.uniformsList=zo.seqWithValue(se.seq,P.uniforms)}return P.uniformsList}function wn(P,se){let Ie=he.get(P);Ie.outputColorSpace=se.outputColorSpace,Ie.batching=se.batching,Ie.batchingColor=se.batchingColor,Ie.instancing=se.instancing,Ie.instancingColor=se.instancingColor,Ie.instancingMorph=se.instancingMorph,Ie.skinning=se.skinning,Ie.morphTargets=se.morphTargets,Ie.morphNormals=se.morphNormals,Ie.morphColors=se.morphColors,Ie.morphTargetsCount=se.morphTargetsCount,Ie.numClippingPlanes=se.numClippingPlanes,Ie.numIntersection=se.numClipIntersection,Ie.vertexAlphas=se.vertexAlphas,Ie.vertexTangents=se.vertexTangents,Ie.toneMapping=se.toneMapping}function kn(P,se){if(P.length===0)return null;if(P.length===1)return P[0].texture!==null?P[0]:null;y.setFromMatrixPosition(se.matrixWorld);for(let Ie=0,Me=P.length;Ie<Me;Ie++){let Ce=P[Ie];if(Ce.texture!==null&&Ce.boundingBox.containsPoint(y))return Ce}return null}function Vn(P,se,Ie,Me,Ce){se.isScene!==!0&&(se=Xe),_e.resetTextureUnits();let St=se.fog,It=Me.isMeshStandardMaterial||Me.isMeshLambertMaterial||Me.isMeshPhongMaterial?se.environment:null,ee=Y===null?I.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:bn.workingColorSpace,ne=Me.isMeshStandardMaterial||Me.isMeshLambertMaterial&&!Me.envMap||Me.isMeshPhongMaterial&&!Me.envMap,pe=rt.get(Me.envMap||It,ne),He=Me.vertexColors===!0&&!!Ie.attributes.color&&Ie.attributes.color.itemSize===4,E=!!Ie.attributes.tangent&&(!!Me.normalMap||Me.anisotropy>0),O=!!Ie.morphAttributes.position,K=!!Ie.morphAttributes.normal,Q=!!Ie.morphAttributes.color,ve=Us;Me.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(ve=I.toneMapping);let De=Ie.morphAttributes.position||Ie.morphAttributes.normal||Ie.morphAttributes.color,ye=De!==void 0?De.length:0,X=he.get(Me),Ye=T.state.lights;if(me===!0&&(ie===!0||P!==W)){let Bt=P===W&&Me.id===q;fe.setState(Me,P,Bt)}let Ke=!1;Me.version===X.__version?(X.needsLights&&X.lightsStateVersion!==Ye.state.version||X.outputColorSpace!==ee||Ce.isBatchedMesh&&X.batching===!1||!Ce.isBatchedMesh&&X.batching===!0||Ce.isBatchedMesh&&X.batchingColor===!0&&Ce._colorsTexture===null||Ce.isBatchedMesh&&X.batchingColor===!1&&Ce._colorsTexture!==null||Ce.isInstancedMesh&&X.instancing===!1||!Ce.isInstancedMesh&&X.instancing===!0||Ce.isSkinnedMesh&&X.skinning===!1||!Ce.isSkinnedMesh&&X.skinning===!0||Ce.isInstancedMesh&&X.instancingColor===!0&&Ce.instanceColor===null||Ce.isInstancedMesh&&X.instancingColor===!1&&Ce.instanceColor!==null||Ce.isInstancedMesh&&X.instancingMorph===!0&&Ce.morphTexture===null||Ce.isInstancedMesh&&X.instancingMorph===!1&&Ce.morphTexture!==null||X.envMap!==pe||Me.fog===!0&&X.fog!==St||X.numClippingPlanes!==void 0&&(X.numClippingPlanes!==fe.numPlanes||X.numIntersection!==fe.numIntersection)||X.vertexAlphas!==He||X.vertexTangents!==E||X.morphTargets!==O||X.morphNormals!==K||X.morphColors!==Q||X.toneMapping!==ve||X.morphTargetsCount!==ye||!!X.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(Ke=!0):(Ke=!0,X.__version=Me.version);let ct=X.currentProgram;Ke===!0&&(ct=Lt(Me,se,Ce),w&&Me.isNodeMaterial&&w.onUpdateProgram(Me,ct,X));let ut=!1,pt=!1,Pt=!1,bt=ct.getUniforms(),st=X.uniforms;if(S.useProgram(ct.program)&&(ut=!0,pt=!0,Pt=!0),Me.id!==q&&(q=Me.id,pt=!0),X.needsLights){let Bt=kn(T.state.lightProbeGridArray,Ce);X.lightProbeGrid!==Bt&&(X.lightProbeGrid=Bt,pt=!0)}if(ut||W!==P){S.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),bt.setValue(j,"projectionMatrix",P.projectionMatrix),bt.setValue(j,"viewMatrix",P.matrixWorldInverse);let Rn=bt.map.cameraPosition;Rn!==void 0&&Rn.setValue(j,we.setFromMatrixPosition(P.matrixWorld)),z.logarithmicDepthBuffer&&bt.setValue(j,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(Me.isMeshPhongMaterial||Me.isMeshToonMaterial||Me.isMeshLambertMaterial||Me.isMeshBasicMaterial||Me.isMeshStandardMaterial||Me.isShaderMaterial)&&bt.setValue(j,"isOrthographic",P.isOrthographicCamera===!0),W!==P&&(W=P,pt=!0,Pt=!0)}if(X.needsLights&&(Ye.state.sunShadowMap.length>0&&bt.setValue(j,"sunShadowMap",Ye.state.sunShadowMap,_e),Ye.state.directionalShadowMap.length>0&&bt.setValue(j,"directionalShadowMap",Ye.state.directionalShadowMap,_e),Ye.state.spotShadowMap.length>0&&bt.setValue(j,"spotShadowMap",Ye.state.spotShadowMap,_e),Ye.state.pointShadowMap.length>0&&bt.setValue(j,"pointShadowMap",Ye.state.pointShadowMap,_e)),Ce.isSkinnedMesh){bt.setOptional(j,Ce,"bindMatrix"),bt.setOptional(j,Ce,"bindMatrixInverse");let Bt=Ce.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),bt.setValue(j,"boneTexture",Bt.boneTexture,_e))}Ce.isBatchedMesh&&(bt.setOptional(j,Ce,"batchingTexture"),bt.setValue(j,"batchingTexture",Ce._matricesTexture,_e),bt.setOptional(j,Ce,"batchingIdTexture"),bt.setValue(j,"batchingIdTexture",Ce._indirectTexture,_e),bt.setOptional(j,Ce,"batchingColorTexture"),Ce._colorsTexture!==null&&bt.setValue(j,"batchingColorTexture",Ce._colorsTexture,_e));let Rt=Ie.morphAttributes;if((Rt.position!==void 0||Rt.normal!==void 0||Rt.color!==void 0)&&k.update(Ce,Ie,ct),(pt||X.receiveShadow!==Ce.receiveShadow)&&(X.receiveShadow=Ce.receiveShadow,bt.setValue(j,"receiveShadow",Ce.receiveShadow)),(Me.isMeshStandardMaterial||Me.isMeshLambertMaterial||Me.isMeshPhongMaterial)&&Me.envMap===null&&se.environment!==null&&(st.envMapIntensity.value=se.environmentIntensity),st.dfgLUT!==void 0&&(st.dfgLUT.value=jy()),pt){if(bt.setValue(j,"toneMappingExposure",I.toneMappingExposure),X.needsLights&&Jn(st,Pt),St&&Me.fog===!0&&xt.refreshFogUniforms(st,St),xt.refreshMaterialUniforms(st,Me,Ee,te,T.state.transmissionRenderTarget[P.id]),X.needsLights&&X.lightProbeGrid){let Bt=X.lightProbeGrid;st.probesSH.value=Bt.texture,st.probesMin.value.copy(Bt.boundingBox.min),st.probesMax.value.copy(Bt.boundingBox.max),st.probesResolution.value.copy(Bt.resolution)}zo.upload(j,Vt(X),st,_e)}if(Me.isShaderMaterial&&Me.uniformsNeedUpdate===!0&&(zo.upload(j,Vt(X),st,_e),Me.uniformsNeedUpdate=!1),Me.isSpriteMaterial&&bt.setValue(j,"center",Ce.center),bt.setValue(j,"modelViewMatrix",Ce.modelViewMatrix),bt.setValue(j,"normalMatrix",Ce.normalMatrix),bt.setValue(j,"modelMatrix",Ce.matrixWorld),Me.uniformsGroups!==void 0){let Bt=Me.uniformsGroups;for(let Rn=0,On=Bt.length;Rn<On;Rn++){let Yn=Bt[Rn];ae.update(Yn,ct),ae.bind(Yn,ct)}}return ct}function Jn(P,se){P.ambientLightColor.needsUpdate=se,P.lightProbe.needsUpdate=se,P.sunLights.needsUpdate=se,P.sunLightShadows.needsUpdate=se,P.directionalLights.needsUpdate=se,P.directionalLightShadows.needsUpdate=se,P.pointLights.needsUpdate=se,P.pointLightShadows.needsUpdate=se,P.spotLights.needsUpdate=se,P.spotLightShadows.needsUpdate=se,P.rectAreaLights.needsUpdate=se,P.hemisphereLights.needsUpdate=se}function Xn(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(P,se,Ie){let Me=he.get(P);Me.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,Me.__autoAllocateDepthBuffer===!1&&(Me.__useRenderToTexture=!1),he.get(P.texture).__webglTexture=se,he.get(P.depthTexture).__webglTexture=Me.__autoAllocateDepthBuffer?void 0:Ie,Me.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,se){let Ie=he.get(P);Ie.__webglFramebuffer=se,Ie.__useDefaultFramebuffer=se===void 0},this.setRenderTarget=function(P,se=0,Ie=0){Y=P,Z=se,H=Ie;let Me=null,Ce=!1,St=!1;if(P){let ee=he.get(P);if(ee.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(j.FRAMEBUFFER,ee.__webglFramebuffer),J.copy(P.viewport),ge.copy(P.scissor),Ne=P.scissorTest,S.viewport(J),S.scissor(ge),S.setScissorTest(Ne),q=-1;return}else if(ee.__webglFramebuffer===void 0)_e.setupRenderTarget(P);else if(ee.__hasExternalTextures)_e.rebindTextures(P,he.get(P.texture).__webglTexture,he.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){let He=P.depthTexture;if(ee.__boundDepthTexture!==He){if(He!==null&&he.has(He)&&(P.width!==He.image.width||P.height!==He.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");_e.setupDepthRenderbuffer(P)}}let ne=P.texture;(ne.isData3DTexture||ne.isDataArrayTexture||ne.isCompressedArrayTexture)&&(St=!0);let pe=he.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(pe[se])?Me=pe[se][Ie]:Me=pe[se],Ce=!0):P.samples>0&&_e.useMultisampledRTT(P)===!1?Me=he.get(P).__webglMultisampledFramebuffer:Array.isArray(pe)?Me=pe[Ie]:Me=pe,J.copy(P.viewport),ge.copy(P.scissor),Ne=P.scissorTest}else J.copy(Ge).multiplyScalar(Ee).floor(),ge.copy(re).multiplyScalar(Ee).floor(),Ne=Qe;if(Ie!==0&&(Me=U),S.bindFramebuffer(j.FRAMEBUFFER,Me)&&S.drawBuffers(P,Me),S.viewport(J),S.scissor(ge),S.setScissorTest(Ne),Ce){let ee=he.get(P.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+se,ee.__webglTexture,Ie)}else if(St){let ee=se;for(let ne=0;ne<P.textures.length;ne++){let pe=he.get(P.textures[ne]);j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0+ne,pe.__webglTexture,Ie,ee)}}else if(P!==null&&Ie!==0){let ee=he.get(P.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,ee.__webglTexture,Ie)}q=-1};function Wn(P){let se=he.get(P);return(se.__readFormat!==P.format||se.__readType!==P.type)&&(se.__readFormat=P.format,se.__readType=P.type,se.__formatReadable=z.textureFormatReadable(P.format),se.__typeReadable=z.textureTypeReadable(P.type)),se}this.readRenderTargetPixels=function(P,se,Ie,Me,Ce,St,It,ee=0){if(!(P&&P.isWebGLRenderTarget)){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ne=he.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&It!==void 0&&(ne=ne[It]),ne){S.bindFramebuffer(j.FRAMEBUFFER,ne);try{let pe=P.textures[ee],He=pe.format,E=pe.type;P.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+ee);let O=Wn(pe);if(O.__formatReadable===!1){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(O.__typeReadable===!1){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}se>=0&&se<=P.width-Me&&Ie>=0&&Ie<=P.height-Ce&&j.readPixels(se,Ie,Me,Ce,Be.convert(He),Be.convert(E),St)}finally{let pe=Y!==null?he.get(Y).__webglFramebuffer:null;S.bindFramebuffer(j.FRAMEBUFFER,pe)}}},this.readRenderTargetPixelsAsync=async function(P,se,Ie,Me,Ce,St,It,ee=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ne=he.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&It!==void 0&&(ne=ne[It]),ne)if(se>=0&&se<=P.width-Me&&Ie>=0&&Ie<=P.height-Ce){S.bindFramebuffer(j.FRAMEBUFFER,ne);let pe=P.textures[ee],He=pe.format,E=pe.type;P.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+ee);let O=Wn(pe);if(O.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(O.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let K=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,K),j.bufferData(j.PIXEL_PACK_BUFFER,St.byteLength,j.STREAM_READ),j.readPixels(se,Ie,Me,Ce,Be.convert(He),Be.convert(E),0),j.bindBuffer(j.PIXEL_PACK_BUFFER,null);let Q=Y!==null?he.get(Y).__webglFramebuffer:null;S.bindFramebuffer(j.FRAMEBUFFER,Q);let ve=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await gp(j,ve,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,K),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,St),j.bindBuffer(j.PIXEL_PACK_BUFFER,null),j.deleteBuffer(K),j.deleteSync(ve),St}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,se=null,Ie=0){let Me=Math.pow(2,-Ie),Ce=Math.floor(P.image.width*Me),St=Math.floor(P.image.height*Me),It=se!==null?se.x:0,ee=se!==null?se.y:0;_e.setTexture2D(P,0),j.copyTexSubImage2D(j.TEXTURE_2D,Ie,0,0,It,ee,Ce,St),S.unbindTexture()},this.copyTextureToTexture=function(P,se,Ie=null,Me=null,Ce=0,St=0){let It,ee,ne,pe,He,E,O,K,Q,ve=P.isCompressedTexture?P.mipmaps[St]:P.image;if(Ie!==null)It=Ie.max.x-Ie.min.x,ee=Ie.max.y-Ie.min.y,ne=Ie.isBox3?Ie.max.z-Ie.min.z:1,pe=Ie.min.x,He=Ie.min.y,E=Ie.isBox3?Ie.min.z:0;else{let st=Math.pow(2,-Ce);It=Math.floor(ve.width*st),ee=Math.floor(ve.height*st),P.isDataArrayTexture?ne=ve.depth:P.isData3DTexture?ne=Math.floor(ve.depth*st):ne=1,pe=0,He=0,E=0}Me!==null?(O=Me.x,K=Me.y,Q=Me.z):(O=0,K=0,Q=0);let De=Be.convert(se.format),ye=Be.convert(se.type),X;se.isData3DTexture?(_e.setTexture3D(se,0),X=j.TEXTURE_3D):se.isDataArrayTexture||se.isCompressedArrayTexture?(_e.setTexture2DArray(se,0),X=j.TEXTURE_2D_ARRAY):(_e.setTexture2D(se,0),X=j.TEXTURE_2D),S.activeTexture(j.TEXTURE0),S.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,se.flipY),S.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,se.premultiplyAlpha),S.pixelStorei(j.UNPACK_ALIGNMENT,se.unpackAlignment);let Ye=S.getParameter(j.UNPACK_ROW_LENGTH),Ke=S.getParameter(j.UNPACK_IMAGE_HEIGHT),ct=S.getParameter(j.UNPACK_SKIP_PIXELS),ut=S.getParameter(j.UNPACK_SKIP_ROWS),pt=S.getParameter(j.UNPACK_SKIP_IMAGES);S.pixelStorei(j.UNPACK_ROW_LENGTH,ve.width),S.pixelStorei(j.UNPACK_IMAGE_HEIGHT,ve.height),S.pixelStorei(j.UNPACK_SKIP_PIXELS,pe),S.pixelStorei(j.UNPACK_SKIP_ROWS,He),S.pixelStorei(j.UNPACK_SKIP_IMAGES,E);let Pt=P.isDataArrayTexture||P.isData3DTexture,bt=se.isDataArrayTexture||se.isData3DTexture;if(P.isDepthTexture){let st=he.get(P),Rt=he.get(se),Bt=he.get(st.__renderTarget),Rn=he.get(Rt.__renderTarget);S.bindFramebuffer(j.READ_FRAMEBUFFER,Bt.__webglFramebuffer),S.bindFramebuffer(j.DRAW_FRAMEBUFFER,Rn.__webglFramebuffer);for(let On=0;On<ne;On++)Pt&&(j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,he.get(P).__webglTexture,Ce,E+On),j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,he.get(se).__webglTexture,St,Q+On)),j.blitFramebuffer(pe,He,It,ee,O,K,It,ee,j.DEPTH_BUFFER_BIT,j.NEAREST);S.bindFramebuffer(j.READ_FRAMEBUFFER,null),S.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(Ce!==0||P.isRenderTargetTexture||he.has(P)){let st=he.get(P),Rt=he.get(se);S.bindFramebuffer(j.READ_FRAMEBUFFER,N),S.bindFramebuffer(j.DRAW_FRAMEBUFFER,B);for(let Bt=0;Bt<ne;Bt++)Pt?j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,st.__webglTexture,Ce,E+Bt):j.framebufferTexture2D(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,st.__webglTexture,Ce),bt?j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Rt.__webglTexture,St,Q+Bt):j.framebufferTexture2D(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Rt.__webglTexture,St),Ce!==0?j.blitFramebuffer(pe,He,It,ee,O,K,It,ee,j.COLOR_BUFFER_BIT,j.NEAREST):bt?j.copyTexSubImage3D(X,St,O,K,Q+Bt,pe,He,It,ee):j.copyTexSubImage2D(X,St,O,K,pe,He,It,ee);S.bindFramebuffer(j.READ_FRAMEBUFFER,null),S.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else bt?P.isDataTexture||P.isData3DTexture?j.texSubImage3D(X,St,O,K,Q,It,ee,ne,De,ye,ve.data):se.isCompressedArrayTexture?j.compressedTexSubImage3D(X,St,O,K,Q,It,ee,ne,De,ve.data):j.texSubImage3D(X,St,O,K,Q,It,ee,ne,De,ye,ve):P.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,St,O,K,It,ee,De,ye,ve.data):P.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,St,O,K,ve.width,ve.height,De,ve.data):j.texSubImage2D(j.TEXTURE_2D,St,O,K,It,ee,De,ye,ve);S.pixelStorei(j.UNPACK_ROW_LENGTH,Ye),S.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Ke),S.pixelStorei(j.UNPACK_SKIP_PIXELS,ct),S.pixelStorei(j.UNPACK_SKIP_ROWS,ut),S.pixelStorei(j.UNPACK_SKIP_IMAGES,pt),St===0&&se.generateMipmaps&&j.generateMipmap(X),S.unbindTexture()},this.initRenderTarget=function(P){he.get(P).__webglFramebuffer===void 0&&_e.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?_e.setTextureCube(P,0):P.isData3DTexture?_e.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?_e.setTexture2DArray(P,0):_e.setTexture2D(P,0),S.unbindTexture()},this.resetState=function(){Z=0,H=0,Y=null,S.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=bn._getDrawingBufferColorSpace(e),t.unpackColorSpace=bn._getUnpackColorSpace()}};var Yt=(i,e,t)=>Math.min(t,Math.max(e,i)),ot=(i,e,t)=>i+(e-i)*t,At=(i,e,t)=>{let n=Yt((t-i)/(e-i),0,1);return n*n*(3-2*n)};function Nn(i){let e=i>>>0;return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Vi(i,e,t=0){let n=Math.imul(i|0,374761393)+Math.imul(e|0,668265263)+Math.imul(t|0,2147483647);return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}function e_(i,e,t=1024,n=1024,s=0){let r=Math.floor(i),a=Math.floor(e),o=i-r,c=e-a,l=o*o*(3-2*o),h=c*c*(3-2*c),d=m=>(m%t+t)%t,p=m=>(m%n+n)%n,u=Vi(d(r),p(a),s),f=Vi(d(r+1),p(a),s),x=Vi(d(r),p(a+1),s),g=Vi(d(r+1),p(a+1),s);return ot(ot(u,f,l),ot(x,g,l),h)}function ei(i,e,t=4,n=1024,s=1024,r=0){let a=.5,o=1,c=0,l=0;for(let h=0;h<t;h++)c+=a*e_(i*o,e*o,n*o,s*o,r+h*17),l+=a,a*=.5,o*=2;return c/l}var em=()=>window.innerWidth<760||/Android|iPhone|iPad|iPod/i.test(navigator.userAgent);function Ya(i,e={}){let t=i.attributes.position,n=i.attributes.normal,s=i.attributes.uv,r=e.ox||0,a=e.oy||0,o=e.oz||0;for(let c=0;c<t.count;c++){let l=n.getX(c),h=n.getY(c),d=n.getZ(c),p=t.getX(c)+r,u=t.getY(c)+a,f=t.getZ(c)+o,x,g;Math.abs(d)>.5?(x=d>0?p:-p,g=u):Math.abs(l)>.5?(x=l>0?-f:f,g=u):(e.swap?(x=f,g=p):(x=p,g=f),h<0&&(g=-g)),s.setXY(c,x,g)}s.needsUpdate=!0}var tm=4,Lf=1,nm=i=>{tm=Math.min(8,i)},im=i=>{Lf=i>=2?1:.5},Du=()=>Lf;function Df(i,e,t){let n=new $s(i,e,e,rs,zi);return n.wrapS=n.wrapT=Qn,n.magFilter=Ni,n.minFilter=Ur,n.generateMipmaps=!0,n.colorSpace=t?vn:vr,n.anisotropy=tm,n.needsUpdate=!0,n}function Qr(i,e,t,n){i=Math.max(128,Math.round(i*Lf));let s=i*i,r=new Uint8Array(s*4),a=new Uint8Array(s*4),o=new Uint8Array(s*4),c=new Float32Array(s);for(let u=0;u<i;u++)for(let f=0;f<i;f++){let x=u*i+f,g=n((f+.5)/i,(u+.5)/i);r[x*4]=Yt(g[0],0,1)*255,r[x*4+1]=Yt(g[1],0,1)*255,r[x*4+2]=Yt(g[2],0,1)*255,r[x*4+3]=255,c[x]=g[3],a[x*4]=255,a[x*4+1]=Yt(g[4],0,1)*255,a[x*4+2]=Yt(g[5]||0,0,1)*255,a[x*4+3]=255}let l=e/i;for(let u=0;u<i;u++)for(let f=0;f<i;f++){let x=u*i+f,g=(c[u*i+(f+1)%i]-c[u*i+(f-1+i)%i])*t/(2*l),m=(c[(u+1)%i*i+f]-c[(u-1+i)%i*i+f])*t/(2*l),_=Math.hypot(g,m,1);o[x*4]=(-g/_*.5+.5)*255,o[x*4+1]=(-m/_*.5+.5)*255,o[x*4+2]=(1/_*.5+.5)*255,o[x*4+3]=255}let h=Df(r,i,!0),d=Df(o,i,!1),p=Df(a,i,!1);return[h,d,p].forEach(u=>u.repeat.set(1/e,1/e)),{map:h,normalMap:d,rmMap:p,tile:e}}var lc=(i,e)=>[i[0]*e,i[1]*e,i[2]*e];function sm(i=[.2,.22,.25]){return Qr(512,.6,.02,(e,t)=>{let n=t*3,s=Math.floor(n),r=n-s,a=ei(e*5+s*3.1,r*22,3,5,22,s),o,c=1;r>.94?(o=0,c=.45):o=.28+.72*Math.pow(1-r/.94,1.4);let l=(.9+.2*Vi(s,3,5))*(.9+.2*a)*c;return[...lc(i,l),o+(a-.5)*.08,.72+.2*a,0]})}function rm(i=[.13,.145,.16]){return Qr(512,1.2,.025,(e,t)=>{let n=e*4,s=Math.floor(n),r=n-s,a=Math.min(r,1-r)*.3,o=ei(s*5.1+r*3,t*7,3,20,7,s),c=.4+(o-.5)*.1,l=1;a<.026?c=1:a<.05&&(c=0,l=.5);let h=(.92+.16*Vi(s,1,9))*(.9+.2*o)*l;return[...lc(i,h),c,.7+.2*o,0]})}function am(i=[.1,.105,.115]){return Qr(512,.9,.018,(e,t)=>{let n=e*2%1,s=Math.min(n,1-n)*.45,r=s<.028?Math.pow(1-s/.028,.7):0,a=(ei(e*3,t*3,3,3,3,4)-.5)*.1,o=.34+.12*ei(e*8,t*40,2,8,40,2);return[...lc(i,1+(ei(e*2,t*6,2,2,6,11)-.5)*.25+r*.35),.1+r+a,o,.8]})}function Lu(i=[.66,.43,.26],e=[.4,.24,.13]){return Qr(512,.6,.01,(t,n)=>{let s=ei(t*3,n*1.2,3,3,2,21)*3,r=.5+.5*Math.sin((t*10+s)*Math.PI*2/1),a=ei(t*18,n*2.4,3,18,2,33),o=Yt(.25+r*.35+a*.5,0,1),c=t*6%1,l=c<.012||c>.988?.45:1;return[ot(e[0],i[0],o)*l,ot(e[1],i[1],o)*l,ot(e[2],i[2],o)*l,.55+a*.3-(l<1?.5:0),.55+.15*a,0]})}function om(i=[.56,.55,.53]){return Qr(512,1.2,.012,(e,t)=>{let n=t*8,s=Math.floor(n),r=n-s,a=Vi(s,7,2)*40,o=ei(e*4+a,r*10,3,4,10,s),c=Vi(Math.floor(e*512),Math.floor(t*512),3)>.985?.6:1,l=r<.04?.7:1,h=(.9+.2*o)*c*l*(.94+.12*Vi(s,4,1));return[...lc(i,h),.5+(o-.5)*.4-(r<.04?.3:0),.92,0]})}function lm(){return Qr(512,1,.045,(i,e)=>{let t=i*5,n=e*4,s=Math.floor(t),r=Math.floor(n),a=9,o=9,c=0;for(let g=-1;g<=1;g++)for(let m=-1;m<=1;m++){let _=s+m,b=r+g,y=(_%5+5)%5,M=(b%4+4)%4,T=_+.15+Vi(y,M,1)*.7,R=b+.15+Vi(y,M,2)*.7,v=Math.hypot((t-T)*1,(n-R)*1.25);v<a?(o=a,a=v,c=y*31+M):v<o&&(o=v)}let l=o-a,h=At(.04,.3,l),d=Vi(c,5,3),p=.4+d*.2,u=Vi(c,9,1)*.06,f=.9+.2*ei(i*12,e*12,3,12,12,c),x=h>.02?1:.35;return[(p+u)*f*x,(p+u*.6)*f*x,(p-.02)*f*x,h*(.7+.3*d),.88,0]})}function cm(){return Qr(512,5,.06,(i,e)=>{let t=ei(i*5,e*5,4,5,5,71),n=ei(i*60,e*60,2,60,60,72),s=Vi(Math.floor(i*512),Math.floor(e*512),8)>.988,r=.93+.07*t;return[.9*r,.94*r,1*r,t*.8+n*.2,s?.12:.78+n*.15,0]})}function um(i=[.13,.135,.145]){return Qr(256,3,.01,(e,t)=>{let n=Vi(Math.floor(e*256),Math.floor(t*256),12),s=ei(e*6,t*6,3,6,6,9),r=.8+.5*n*n+.25*s;return[...lc(i,r),n*.5+s*.3,.88-n*.1,0]})}function hm(){return Qr(512,4,.05,(i,e)=>{let t=ei(i*70,e*70,2,70,70,3),n=ei(i*4,e*4,4,4,4,5),s=ei(i*9,e*9,3,9,9,6),r=.75+.5*t;return[ot(.22,.4,s)*r+n*.05,ot(.3,.4,s)*r*(.85+.3*n),ot(.1,.16,s)*r,t,.92,0]})}function fm(i,e){let t=new Uint8Array(i*i*4);for(let s=0;s<i;s++)for(let r=0;r<i;r++){let a=(r+.5)/i,o=(s+.5)/i,c=.45+.55*ei(a*6,o*4,4,1024,1024,41);c=At(.2,.95,c),c*=.35+.65*At(0,.18,Math.min(a,1-a,o,1-o)+.04*ei(a*30,o*30,2,1024,1024,5)),e&&(c*=e(a,o));let l=(s*i+r)*4;t[l]=255,t[l+1]=Yt(c,0,1)*255,t[l+2]=255,t[l+3]=255}let n=new $s(t,i,i,rs,zi);return n.magFilter=n.minFilter=Ni,n.generateMipmaps=!1,n.needsUpdate=!0,n}function dm(i="living"){let e=document.createElement("canvas");e.width=160,e.height=160;let t=e.getContext("2d"),n={living:["#6b4426","#d99a55","#f5c27c"],kitchen:["#7a5a3a","#e6b673","#fff0cf"],bed:["#4a3a52","#c78b7a","#f1c6a0"],bath:["#4f6670","#a9c7cf","#eaf6f4"],hall:["#5a4128","#c58c52","#efba78"]}[i]||["#6b4426","#d99a55","#f5c27c"],s=t.createLinearGradient(0,0,0,160);s.addColorStop(0,n[0]),s.addColorStop(.55,n[1]),s.addColorStop(1,n[2]),t.fillStyle=s,t.fillRect(0,0,160,160);let r=i==="kitchen"?80:40+Math.random()*80,a=t.createRadialGradient(r,52,2,r,52,70);if(a.addColorStop(0,"rgba(255,246,214,.95)"),a.addColorStop(1,"rgba(255,220,150,0)"),t.fillStyle=a,t.fillRect(0,0,160,160),t.fillStyle="rgba(30,18,10,.55)",i==="living"&&(t.fillRect(14,108,92,52),t.fillRect(14,88,92,22),t.fillRect(112,70,6,90)),i==="kitchen"){t.fillRect(0,100,160,60),t.fillStyle="rgba(30,18,10,.4)";for(let l=0;l<4;l++)t.fillRect(8+l*38,20,30,40)}i==="bed"&&(t.fillRect(20,96,120,64),t.fillRect(20,70,14,40)),i==="bath"&&(t.fillStyle="rgba(20,40,48,.35)",t.fillRect(0,112,160,48),t.fillRect(104,40,40,36)),i==="hall"&&(t.fillRect(0,128,160,32),t.fillRect(70,30,36,90));let o=t.createLinearGradient(0,0,40,0);o.addColorStop(0,"rgba(40,24,16,.7)"),o.addColorStop(1,"rgba(40,24,16,0)"),t.fillStyle=o,t.fillRect(0,0,40,160),t.save(),t.translate(160,0),t.scale(-1,1),t.fillStyle=o,t.fillRect(0,0,40,160),t.restore();let c=new Zn(e);return c.colorSpace=vn,c}function Vo(i="rgba(255,190,120,0.9)",e="rgba(255,150,80,0)"){let t=document.createElement("canvas");t.width=t.height=128;let n=t.getContext("2d"),s=n.createRadialGradient(64,64,0,64,64,64);s.addColorStop(0,i),s.addColorStop(.35,i.replace(/[\d.]+\)$/,"0.35)")),s.addColorStop(1,e),n.fillStyle=s,n.fillRect(0,0,128,128);let r=new Zn(t);return r.colorSpace=vn,r}function pm(){let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d"),t=e.createRadialGradient(64,64,20,64,64,64);t.addColorStop(0,"rgba(244,189,126,0.55)"),t.addColorStop(1,"rgba(244,189,126,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),e.beginPath(),e.arc(64,64,30,0,Math.PI*2),e.fillStyle="#d98a4e",e.fill(),e.lineWidth=3,e.strokeStyle="#f4bd7e",e.stroke(),e.beginPath(),e.moveTo(49,79),e.lineTo(64,49),e.lineTo(79,79),e.lineWidth=6.5,e.strokeStyle="#121311",e.lineJoin="miter",e.stroke(),e.fillStyle="#121311",e.fillRect(60.5,64.5,7,7);let n=new Zn(i);return n.colorSpace=vn,n}function jr(i="rgba(255,255,255,0.6)"){let e=document.createElement("canvas");e.width=e.height=64;let t=e.getContext("2d"),n=t.createRadialGradient(32,32,0,32,32,32);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.25,i),n.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=n,t.fillRect(0,0,64,64);let s=new Zn(e);return s.colorSpace=vn,s}function mm(){let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d");for(let n=0;n<9;n++){let s=64+(Vi(n,1,3)-.5)*40,r=64+(Vi(n,2,3)-.5)*40,a=22+Vi(n,3,3)*22,o=e.createRadialGradient(s,r,0,s,r,a);o.addColorStop(0,"rgba(255,255,255,0.28)"),o.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=o,e.fillRect(0,0,128,128)}let t=new Zn(i);return t.colorSpace=vn,t}function gm(){let i={lap:sm([.3,.33,.37]),bb:rm([.2,.22,.25]),seam:am([.1,.105,.115]),cedar:Lu(),walnut:Lu([.46,.29,.17],[.25,.15,.09]),oak:Lu([.8,.64,.44],[.56,.4,.25]),form:om(),stone:lm(),snow:cm(),asphalt:um(),grass:hm()},e=(a,o={})=>new on({map:a.map,normalMap:a.normalMap,roughnessMap:a.rmMap,metalnessMap:a.rmMap,roughness:1,metalness:1,...o}),t=(a,o=.8,c=0,l={})=>new on({color:a,roughness:o,metalness:c,...l}),n=(a,o)=>(a.userData.shell=!0,a.userData.th=o,a),s=(a,o)=>(a.userData.th=o,a),r={lap:n(e(i.lap,{normalScale:new nt(1,1)}),[.3,.05,.3]),bb:n(e(i.bb,{normalScale:new nt(1,1)}),[.3,.05,.3]),roof:n(e(i.seam,{normalScale:new nt(1.2,1.2),envMapIntensity:1.3}),[.4,.12]),cedar:n(e(i.cedar),[.42,0,.25]),walnut:n(e(i.walnut),[.52]),oak:n(e(i.oak),[.55]),form:n(e(i.form),[.33]),stone:n(e(i.stone),[.33]),drywall:n(t(14209475,.95),[.6]),trim:n(t(855568,.42,.55,{envMapIntensity:1.2}),[.32,0,.2]),reveal:n(t(14275785,.85),[.45]),slab:n(t(7828331,1),[.35]),concrete:n(t(7301987,1),[.33]),floor:n(t(10518364,.7),[.55]),door:n(e(i.walnut),[.52]),insul:n(t(13087881,1),[.5]),counter:n(t(2959910,.5,.05),[.55]),snowRoof:n(t(15265527,.85,0,{alphaToCoverage:!0}),[.03]),ice:s(new ji({color:13625845,roughness:.08,metalness:0,transparent:!0,opacity:.85,clearcoat:1,envMapIntensity:1.6}),[.1]),white:s(t(14605267,.5,.05),[.6]),steel:s(t(10133670,.35,.85),[.55]),pvc:s(t(15131612,.4),[.24]),pipe:s(t(6255750,.5,.4),[.45]),copper:s(t(14256718,.28,.9,{envMapIntensity:1.4}),[.68]),solar:s(new ji({color:726832,roughness:.16,metalness:.7,clearcoat:1,clearcoatRoughness:.06,envMapIntensity:1.5}),[.17]),solarFrame:s(t(11186616,.4,.9),[.3]),neighbor:s(e(i.lap,{color:9080210}),[.26,.04,.24]),neighborRoof:s(e(i.seam,{color:6711920}),[.4,.12]),asphalt:s(e(i.asphalt),[.3]),pavement:s(t(9144706,.95),[.3]),sconce:s(new on({color:1709070,emissive:16756833,emissiveIntensity:3,roughness:.4}),[.9]),lampHead:s(new on({color:2236962,emissive:16761466,emissiveIntensity:4,roughness:.4}),[.95]),pole:s(t(1776928,.5,.7),[.3]),spruce:s(new on({vertexColors:!0,roughness:.92,metalness:0}),[.13]),trunk:s(t(2760471,1),[.18]),shrub:s(new on({vertexColors:!0,roughness:1}),[.14]),fabric:s(t(6970708,.95),[.5]),fabric2:s(t(4016726,.95),[.5]),leather:s(t(8014634,.55),[.5]),ceramic:s(t(15921129,.18,0),[.45]),mirror:s(t(12570840,.05,.9),[.4]),black:s(t(1381653,.5,.3),[.4]),warmLight:s(new on({color:2236440,emissive:16767392,emissiveIntensity:5,roughness:.6}),[1])};return["lap","bb","roof","drywall","form","stone","trim","cedar","door","walnut","reveal","snowRoof"].forEach(a=>{r[a].userData.wall=!0}),Object.values(r).forEach(a=>{a.userData.th===void 0&&(a.userData.th=[.3])}),{M:r,T:i}}function Nf(i){let e=new on({color:395533,roughness:.05,metalness:.25,emissive:16777215,emissiveMap:i,emissiveIntensity:0,envMapIntensity:1.6});return e.userData.shell=!0,e.userData.pane=!0,e.userData.wall=!0,e.userData.th=[.86],e}var Nu=[[-90,"#04060d","#0c1124"],[-20,"#05070f","#10162b"],[-14,"#080d20","#1a2140"],[-9,"#0f1838","#33406a"],[-5,"#1a2650","#7a6f94"],[-2,"#27345e","#d98d62"],[1,"#35508a","#eba66f"],[5,"#43689f","#e8bf8f"],[12,"#4a78b0","#dccfb4"],[25,"#4a80ba","#c7dcec"],[50,"#3f78b8","#b4d2e8"],[90,"#3a72b0","#accce6"]],t_=`varying vec3 vDir;
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
}`;function xm(i,e){let t={uTop:{value:new Et},uHor:{value:new Et},uLow:{value:new Et},uSunDir:{value:new F(0,1,0)},uSunCol:{value:new Et(1,.8,.6)},uMoonDir:{value:new F(.3,.55,-.78).normalize()},uSunI:{value:0},uMoonI:{value:0},uTime:{value:0},uCloud:{value:.4},uAurora:{value:0},uThermal:{value:0},uSnowLine:{value:0}},n=new Cn({uniforms:t,vertexShader:t_,fragmentShader:n_,side:es,depthWrite:!1,depthTest:!1}),s=new Fe(new jn(500,48,28),n);s.renderOrder=-10,s.frustumCulled=!1,s.userData.noThermal=!0,s.userData.noAO=!0,e.add(s);let r=Nn(7),a=1500,o=new Float32Array(a*3);for(let M=0;M<a;M++){let T=r()*Math.PI*2,R=Math.acos(1-r()*1),v=480;o[M*3]=Math.sin(R)*Math.cos(T)*v,o[M*3+1]=Math.cos(R)*v,o[M*3+2]=Math.sin(R)*Math.sin(T)*v}let c=new en;c.setAttribute("position",new $t(o,3));let l=new Hi({color:14674175,size:1.7,sizeAttenuation:!1,transparent:!0,opacity:0,fog:!1,depthWrite:!1}),h=new Ki(c,l);h.frustumCulled=!1,h.renderOrder=-9,h.userData.noAO=!0,e.add(h);function d(M,T,R){let v=document.createElement("canvas");v.width=4096,v.height=256;let A=v.getContext("2d"),I=Nn(M);A.filter="blur(1.4px)";let G=Array.from({length:8},()=>I()*6.28);A.clearRect(0,0,2048,256),A.beginPath(),A.moveTo(0,256);let w=[3,7,15,31,63],U=[.5,.28,.15,.08*R,.045*R];for(let Z=0;Z<=4096;Z+=2){let H=Z/4096*Math.PI*2,Y=0;for(let q=0;q<5;q++)Y+=U[q]*Math.pow(1-Math.abs(Math.sin(H*w[q]+G[q])),1.6);A.lineTo(Z,256-Yt(Y/1.06,0,1)*T)}A.lineTo(4096,256),A.closePath();let N=A.createLinearGradient(0,256-T,0,256);N.addColorStop(0,"rgba(255,255,255,1)"),N.addColorStop(.3,"rgba(232,236,248,1)"),N.addColorStop(.62,"rgba(120,132,160,1)"),N.addColorStop(1,"rgba(66,74,96,0)"),A.fillStyle=N,A.fill();let B=new Zn(v);return B.colorSpace=vn,B.wrapS=Qn,B.anisotropy=4,B}function p(M){let T=document.createElement("canvas");T.width=2048,T.height=128;let R=T.getContext("2d"),v=Nn(M);R.clearRect(0,0,2048,128),R.fillStyle="rgba(255,255,255,1)";for(let I=0;I<2048;I+=3){let G=34+v()*40+Math.sin(I*.01)*10,w=6+v()*7;R.beginPath(),R.moveTo(I-w,128),R.lineTo(I,128-G),R.lineTo(I+w,128),R.fill()}R.fillRect(0,100,2048,28);let A=new Zn(T);return A.colorSpace=vn,A.wrapS=Qn,A}let u=[{tex:d(3,220,1),R:450,h:190,y:40,k:.8,mix:.86},{tex:d(11,170,.8),R:360,h:120,y:16,k:.55,mix:.68},{tex:p(5),R:300,h:34,y:8,k:.22,mix:.2}].map(M=>{let T=new Hn({map:M.tex,transparent:!0,side:es,depthWrite:!1,fog:!1,color:4478327}),R=new Fe(new dn(M.R,M.R,M.h,96,1,!0),T);return R.position.y=M.y,R.renderOrder=-8,R.frustumCulled=!1,R.userData.noThermal=!0,R.userData.noAO=!0,e.add(R),{...M,mat:T,mesh:R}}),f=new Ta(i),x=new Fa,g=new Fe(new jn(50,32,16),n.clone());g.material.uniforms=t,g.material.depthTest=!0,x.add(g);let m=null,_="",b=new Et,y=new Et;return{dome:s,mat:n,U:t,stars:h,horizon:new Et,zenith:new Et,update(M,T){let R=Yt(M.elev,-90,90),v=0;for(;v<Nu.length-2&&Nu[v+1][0]<=R;)v++;let[A,I,G]=Nu[v],[w,U,N]=Nu[v+1],B=At(0,1,(R-A)/(w-A));t.uTop.value.copy(b.set(I)).lerp(y.set(U),B),t.uHor.value.copy(b.set(G)).lerp(y.set(N),B),M.seasonTint&&(t.uTop.value.lerp(M.seasonTint.top,M.seasonTint.k),t.uHor.value.lerp(M.seasonTint.hor,M.seasonTint.k)),t.uLow.value.copy(t.uHor.value).multiplyScalar(.55+.25*M.daylight).lerp(b.set(M.snowy?7174806:2764834),.18+.2*M.daylight),t.uLow.value.multiplyScalar(1-.82*(M.voidK||0)),t.uSunDir.value.copy(M.sunDir);let Z=1-At(0,.5,M.sunDir.y);t.uSunCol.value.setRGB(1,ot(.93,.56,Z),ot(.84,.32,Z)),t.uSunI.value=At(-.14,.04,M.sunDir.y)*ot(1,1.4,Z),t.uMoonI.value=(1-M.daylight)*.9,t.uTime.value=T,t.uCloud.value=M.cloud??.4,t.uAurora.value=M.aurora||0,t.uThermal.value=M.thermal||0,this.horizon.copy(t.uHor.value),this.zenith.copy(t.uTop.value),l.opacity=Yt((1-M.daylight*1.2)*.95,0,1)*(1-(M.thermal||0)),u.forEach(H=>{H.mat.color.copy(t.uHor.value).lerp(t.uTop.value,.12).multiplyScalar(H.k*(.55+.7*M.daylight)).lerp(b.set(16777215),0).multiplyScalar(1),H.mat.color.lerp(t.uHor.value,1-H.mix),H.mat.color.lerp(y.set(2101306),(M.thermal||0)*.9)})},follow(M){s.position.copy(M),h.position.copy(M),u.forEach(T=>{T.mesh.position.x=M.x,T.mesh.position.z=M.z})},refreshEnv(M){let T=[t.uTop.value.getHexString(),t.uHor.value.getHexString(),t.uSunI.value.toFixed(2),t.uAurora.value.toFixed(1),t.uThermal.value.toFixed(1),t.uSunDir.value.x.toFixed(2),t.uSunDir.value.y.toFixed(2)].join("|");if(!M&&T===_)return;_=T;let R=m;m=f.fromScene(x,.015,.1,200,{size:128}),e.environment=m.texture,R&&R.dispose()}}}var Hr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var ts=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},i_=new va(-1,1,1,-1,0,1),Uf=class extends en{constructor(){super(),this.setAttribute("position",new qt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new qt([0,2,0,0,2,0],2))}},s_=new Uf,er=class{constructor(e){this._mesh=new Fe(s_,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,i_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Wo=class extends ts{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Cn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Es.clone(e.uniforms),this.material=new Cn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new er(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var cc=class extends ts{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Uu=class extends ts{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Fu=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new nt);this._width=n.width,this._height=n.height,t=new oi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:hi}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Wo(Hr),this.copyPass.material.blending=Ai,this.timer=new zl}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}cc!==void 0&&(a instanceof cc?n=!0:a instanceof Uu&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new nt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Ou=class extends ts{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Et}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var vm={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Et(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Xo=class i extends ts{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new nt(e.x,e.y):new nt(256,256),this.clearColor=new Et(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new oi(r,a,{type:hi,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new oi(r,a,{type:hi,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let p=new oi(r,a,{type:hi,depthBuffer:!1});p.texture.name="UnrealBloomPass.v"+h,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),a=Math.round(a/2)}let o=vm;this.highPassUniforms=Es.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Cn({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let c=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new nt(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Es.clone(Hr.uniforms),this.blendMaterial=new Cn({uniforms:this.copyUniforms,vertexShader:Hr.vertexShader,fragmentShader:Hr.fragmentShader,premultipliedAlpha:!0,blending:zn,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Et,this._oldClearAlpha=1,this._basic=new Hn,this._fsQuad=new er(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new nt(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let s=[],r=[];for(let a=1;a<e;a+=2){let o=t[a],c=a+1<e?t[a+1]:0,l=o+c;s.push((a*o+(a+1)*c)/l),r.push(l)}return new Cn({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new nt(.5,.5)},direction:{value:new nt(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new Cn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};Xo.BlurDirectionX=new nt(1,0);Xo.BlurDirectionY=new nt(0,1);var uc={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Bu=class extends ts{constructor(){super(),this.isOutputPass=!0,this.uniforms=Es.clone(uc.uniforms),this.material=new Io({name:uc.name,uniforms:this.uniforms,vertexShader:uc.vertexShader,fragmentShader:uc.fragmentShader}),this._fsQuad=new er(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},bn.getTransfer(this._outputColorSpace)===Ln&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Wl?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Xl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Yl?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ma?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Zl?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===$l?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===ql&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var hc={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new nt},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new zt},cameraProjectionMatrixInverse:{value:new zt},cameraWorldMatrix:{value:new zt},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new F(-1,-1,-1)},sceneBoxMax:{value:new F(1,1,1)}},vertexShader:`

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
		}`};function ym(i=5){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=r_(e),n=t.length,s=new Uint8Array(n*4);for(let a=0;a<n;++a){let o=t[a],c=2*Math.PI*o/n,l=new F(Math.cos(c),Math.sin(c),0).normalize();s[a*4]=(l.x*.5+.5)*255,s[a*4+1]=(l.y*.5+.5)*255,s[a*4+2]=127,s[a*4+3]=255}let r=new $s(s,e,e);return r.wrapS=Qn,r.wrapT=Qn,r.needsUpdate=!0,r}function r_(i){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let a=1;a<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),n[s*e+r]!==0){r-=2,s++;continue}else n[s*e+r]=a++;r++,s--}return n}var dc={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:Ff(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new nt},cameraProjectionMatrixInverse:{value:new zt},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function Ff(i,e,t){let n=a_(i,e,t),s="vec3[SAMPLES](";for(let r=0;r<i;r++){let a=n[r];s+=`vec3(${a.x}, ${a.y}, ${a.z})${r<i-1?",":")"}`}return s}function a_(i,e,t){let n=[];for(let s=0;s<i;s++){let r=2*Math.PI*e*s/i,a=Math.pow(s/(i-1),t);n.push(new F(Math.cos(r),Math.sin(r),a))}return n}var zu=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,s,r,a=.5*(Math.sqrt(3)-1),o=(e+t)*a,c=Math.floor(e+o),l=Math.floor(t+o),h=(3-Math.sqrt(3))/6,d=(c+l)*h,p=c-d,u=l-d,f=e-p,x=t-u,g,m;f>x?(g=1,m=0):(g=0,m=1);let _=f-g+h,b=x-m+h,y=f-1+2*h,M=x-1+2*h,T=c&255,R=l&255,v=this.perm[T+this.perm[R]]%12,A=this.perm[T+g+this.perm[R+m]]%12,I=this.perm[T+1+this.perm[R+1]]%12,G=.5-f*f-x*x;G<0?n=0:(G*=G,n=G*G*this._dot(this.grad3[v],f,x));let w=.5-_*_-b*b;w<0?s=0:(w*=w,s=w*w*this._dot(this.grad3[A],_,b));let U=.5-y*y-M*M;return U<0?r=0:(U*=U,r=U*U*this._dot(this.grad3[I],y,M)),70*(n+s+r)}noise3d(e,t,n){let s,r,a,o,l=(e+t+n)*.3333333333333333,h=Math.floor(e+l),d=Math.floor(t+l),p=Math.floor(n+l),u=1/6,f=(h+d+p)*u,x=h-f,g=d-f,m=p-f,_=e-x,b=t-g,y=n-m,M,T,R,v,A,I;_>=b?b>=y?(M=1,T=0,R=0,v=1,A=1,I=0):_>=y?(M=1,T=0,R=0,v=1,A=0,I=1):(M=0,T=0,R=1,v=1,A=0,I=1):b<y?(M=0,T=0,R=1,v=0,A=1,I=1):_<y?(M=0,T=1,R=0,v=0,A=1,I=1):(M=0,T=1,R=0,v=1,A=1,I=0);let G=_-M+u,w=b-T+u,U=y-R+u,N=_-v+2*u,B=b-A+2*u,Z=y-I+2*u,H=_-1+3*u,Y=b-1+3*u,q=y-1+3*u,W=h&255,J=d&255,ge=p&255,Ne=this.perm[W+this.perm[J+this.perm[ge]]]%12,qe=this.perm[W+M+this.perm[J+T+this.perm[ge+R]]]%12,Je=this.perm[W+v+this.perm[J+A+this.perm[ge+I]]]%12,mt=this.perm[W+1+this.perm[J+1+this.perm[ge+1]]]%12,te=.6-_*_-b*b-y*y;te<0?s=0:(te*=te,s=te*te*this._dot3(this.grad3[Ne],_,b,y));let Ee=.6-G*G-w*w-U*U;Ee<0?r=0:(Ee*=Ee,r=Ee*Ee*this._dot3(this.grad3[qe],G,w,U));let Ue=.6-N*N-B*B-Z*Z;Ue<0?a=0:(Ue*=Ue,a=Ue*Ue*this._dot3(this.grad3[Je],N,B,Z));let be=.6-H*H-Y*Y-q*q;return be<0?o=0:(be*=be,o=be*be*this._dot3(this.grad3[mt],H,Y,q)),32*(s+r+a+o)}noise4d(e,t,n,s){let r=this.grad4,a=this.simplex,o=this.perm,c=(Math.sqrt(5)-1)/4,l=(5-Math.sqrt(5))/20,h,d,p,u,f,x=(e+t+n+s)*c,g=Math.floor(e+x),m=Math.floor(t+x),_=Math.floor(n+x),b=Math.floor(s+x),y=(g+m+_+b)*l,M=g-y,T=m-y,R=_-y,v=b-y,A=e-M,I=t-T,G=n-R,w=s-v,U=A>I?32:0,N=A>G?16:0,B=I>G?8:0,Z=A>w?4:0,H=I>w?2:0,Y=G>w?1:0,q=U+N+B+Z+H+Y,W=a[q][0]>=3?1:0,J=a[q][1]>=3?1:0,ge=a[q][2]>=3?1:0,Ne=a[q][3]>=3?1:0,qe=a[q][0]>=2?1:0,Je=a[q][1]>=2?1:0,mt=a[q][2]>=2?1:0,te=a[q][3]>=2?1:0,Ee=a[q][0]>=1?1:0,Ue=a[q][1]>=1?1:0,be=a[q][2]>=1?1:0,Ge=a[q][3]>=1?1:0,re=A-W+l,Qe=I-J+l,ue=G-ge+l,me=w-Ne+l,ie=A-qe+2*l,xe=I-Je+2*l,we=G-mt+2*l,$e=w-te+2*l,Xe=A-Ee+3*l,lt=I-Ue+3*l,ft=G-be+3*l,j=w-Ge+3*l,Dt=A-1+4*l,_t=I-1+4*l,z=G-1+4*l,S=w-1+4*l,le=g&255,he=m&255,_e=_&255,rt=b&255,it=o[le+o[he+o[_e+o[rt]]]]%32,Oe=o[le+W+o[he+J+o[_e+ge+o[rt+Ne]]]]%32,Ve=o[le+qe+o[he+Je+o[_e+mt+o[rt+te]]]]%32,je=o[le+Ee+o[he+Ue+o[_e+be+o[rt+Ge]]]]%32,xt=o[le+1+o[he+1+o[_e+1+o[rt+1]]]]%32,D=.6-A*A-I*I-G*G-w*w;D<0?h=0:(D*=D,h=D*D*this._dot4(r[it],A,I,G,w));let oe=.6-re*re-Qe*Qe-ue*ue-me*me;oe<0?d=0:(oe*=oe,d=oe*oe*this._dot4(r[Oe],re,Qe,ue,me));let fe=.6-ie*ie-xe*xe-we*we-$e*$e;fe<0?p=0:(fe*=fe,p=fe*fe*this._dot4(r[Ve],ie,xe,we,$e));let Re=.6-Xe*Xe-lt*lt-ft*ft-j*j;Re<0?u=0:(Re*=Re,u=Re*Re*this._dot4(r[je],Xe,lt,ft,j));let We=.6-Dt*Dt-_t*_t-z*z-S*S;return We<0?f=0:(We*=We,f=We*We*this._dot4(r[xt],Dt,_t,z,S)),27*(h+d+p+u+f)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}_dot4(e,t,n,s,r){return e[0]*t+e[1]*n+e[2]*s+e[3]*r}};var pc=class i extends ts{constructor(e,t,n=512,s=512,r,a,o){super(),this.width=n,this.height=s,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=ym(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new oi(this.width,this.height,{type:hi,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Cn({defines:Object.assign({},hc.defines),uniforms:Es.clone(hc.uniforms),vertexShader:hc.vertexShader,fragmentShader:hc.fragmentShader,blending:Ai,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Ul,this.normalMaterial.blending=Ai,this.pdMaterial=new Cn({defines:Object.assign({},dc.defines),uniforms:Es.clone(dc.uniforms),vertexShader:dc.vertexShader,fragmentShader:dc.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Cn({defines:Object.assign({},fc.defines),uniforms:Es.clone(fc.uniforms),vertexShader:fc.vertexShader,fragmentShader:fc.fragmentShader,blending:Ai}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Cn({uniforms:Es.clone(Hr.uniforms),vertexShader:Hr.vertexShader,fragmentShader:Hr.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Vl,blendDst:ka,blendEquation:Qs,blendSrcAlpha:kl,blendDstAlpha:ka,blendEquationAlpha:Qs}),this.blendMaterial=new Cn({uniforms:Es.clone(Hu.uniforms),vertexShader:Hu.vertexShader,fragmentShader:Hu.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:B0,blendSrc:Vl,blendDst:ka,blendEquation:Qs,blendSrcAlpha:kl,blendDstAlpha:ka,blendEquationAlpha:Qs}),this._fsQuad=new er(null),this._originalClearColor=new Et,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new Js,this.depthTexture.format=Fr,this.depthTexture.type=Sa,this.normalRenderTarget=new oi(this.width,this.height,{minFilter:Ri,magFilter:Ri,type:hi,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Ff(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Ai,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Ai,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Ai,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Ai,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Ai,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,n,s,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_renderOverride(e,t,n,s,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,t.push(n))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new zu,n=e*e*4,s=new Uint8Array(n);for(let a=0;a<e;a++)for(let o=0;o<e;o++){let c=a,l=o;s[(a*e+o)*4]=(t.noise(c,l)*.5+.5)*255,s[(a*e+o)*4+1]=(t.noise(c+e,l)*.5+.5)*255,s[(a*e+o)*4+2]=(t.noise(c,l+e)*.5+.5)*255,s[(a*e+o)*4+3]=(t.noise(c+e,l+e)*.5+.5)*255}let r=new $s(s,e,e,rs,zi);return r.wrapS=Qn,r.wrapT=Qn,r.needsUpdate=!0,r}};pc.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var Of=class extends ts{constructor(e){super(),this.needsSwap=!1,this.holder=e}render(e,t,n){this.holder.value=n.depthTexture}},_m="varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",Mm=`uniform sampler2D tDiffuse; uniform sampler2D tDepth; uniform vec2 uPx; uniform float uNear, uFar, uFocus, uAperture, uMaxBlur; varying vec2 vUv;
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
    }`,Bf=class extends ts{constructor(e,t){super(),this.depthHolder=e,this.shared={tDepth:{value:null},uPx:{value:new nt(1/1440,1/900)},uNear:{value:.3},uFar:{value:1400},uFocus:{value:30},uAperture:{value:0},uMaxBlur:{value:12}},this.half=new oi(720,450,{type:hi,depthBuffer:!1}),this.gather=new Cn({name:"HauseDofGather",defines:{TAPS:t},uniforms:{tDiffuse:{value:null},...this.shared},vertexShader:_m,fragmentShader:o_,depthTest:!1,depthWrite:!1}),this.composite=new Cn({name:"HauseDofComposite",uniforms:{tDiffuse:{value:null},tBlur:{value:this.half.texture},uHalfPx:{value:new nt(1/720,1/450)},...this.shared},vertexShader:_m,fragmentShader:l_,depthTest:!1,depthWrite:!1}),this.quad=new er(this.gather)}setSize(e,t){let n=Math.max(1,Math.round(e/2)),s=Math.max(1,Math.round(t/2));this.half.setSize(n,s),this.shared.uPx.value.set(1/e,1/t),this.composite.uniforms.uHalfPx.value.set(1/n,1/s),this.shared.uMaxBlur.value=Math.max(6,t*.014)}render(e,t,n){this.shared.tDepth.value=this.depthHolder.value,this.gather.uniforms.tDiffuse.value=n.texture,this.quad.material=this.gather,e.setRenderTarget(this.half),this.quad.render(e),this.composite.uniforms.tDiffuse.value=n.texture,this.quad.material=this.composite,e.setRenderTarget(this.renderToScreen?null:t),this.quad.render(e)}dispose(){this.half.dispose(),this.gather.dispose(),this.composite.dispose(),this.quad.dispose()}},c_={name:"HauseGrade",uniforms:{tDiffuse:{value:null},uTime:{value:0},uVig:{value:.32},uGrain:{value:.03},uCA:{value:.0011},uSat:{value:1.05},uCon:{value:1.05},uThermal:{value:0},uAspect:{value:1.6},uShadow:{value:new F(.96,.99,1.05)},uHigh:{value:new F(1.04,1,.95)},uCool:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float uTime, uVig, uGrain, uCA, uSat, uCon, uThermal, uAspect; uniform vec3 uShadow, uHigh; uniform float uCool; varying vec2 vUv;
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
    }`};function Em(i,e,t,n,s,r){let a=n>=2?4:n===1?2:0,o=new oi(s,r,{type:hi,samples:a,depthTexture:new Js(s,r)}),c=new Fu(i,o);c.setPixelRatio(1),c.addPass(new Ou(e,t));let l={value:null};c.addPass(new Of(l));let h=null,d=null;n>=2&&(h=new pc(e,t,s,r,void 0,{radius:.9,distanceExponent:1.4,thickness:1.2,scale:1,samples:12,distanceFallOff:1,screenSpaceRadius:!1},{lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,radiusExponent:1,rings:2,samples:12}),h.blendIntensity=.9,h._overrideVisibility=function(){let f=this._visibilityCache;this.scene.traverse(x=>{(x.isPoints||x.isLine||x.isLine2||x.isSprite||x.userData&&x.userData.noAO)&&x.visible&&(x.visible=!1,f.push(x))})},c.addPass(h));let p=null;n>=1&&(p=new Bf(l,n>=2?48:20),p.enabled=!1,c.addPass(p),p.setSize(c.readBuffer.width,c.readBuffer.height)),n>=1&&(d=new Xo(new nt(s,r),.55,.62,1),c.addPass(d)),c.addPass(new Bu);let u=new Wo(c_);return n===0&&(u.uniforms.uCA.value=0,u.uniforms.uGrain.value=.015),c.addPass(u),{composer:c,bloom:d,gtao:h,dof:p,grade:u,tier:n,setDof(f,x,g,m){if(!p)return;p.enabled=f>.01;let _=p.shared;_.uAperture.value=f,_.uFocus.value=x,_.uNear.value=g,_.uFar.value=m},setSize(f,x){c.setSize(f,x),u.uniforms.uAspect.value=f/x},render(f,x){u.uniforms.uTime.value=x%10,c.render(f)},dispose(){c.dispose(),p&&p.dispose(),o.dispose()}}}var mc=new F;function tr(i,e,t,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),c=Math.PI/4;mc.copy(e),mc[n]=0,mc.normalize();let l=.5*a/(a+o),h=1-mc.angleTo(i)/c;return Math.sign(mc[t])===1?h*l:o/(a+o)+l+l*(1-h)}var nr=class i extends En{constructor(e=1,t=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let c=new F,l=new F,h=new F(e,t,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,p=this.attributes.normal.array,u=this.attributes.uv.array,f=d.length/6,x=new F,g=.5/a;for(let m=0,_=0;m<d.length;m+=3,_+=2)switch(c.fromArray(d,m),l.copy(c),l.x-=Math.sign(l.x)*g,l.y-=Math.sign(l.y)*g,l.z-=Math.sign(l.z)*g,l.normalize(),d[m+0]=h.x*Math.sign(c.x)+l.x*r,d[m+1]=h.y*Math.sign(c.y)+l.y*r,d[m+2]=h.z*Math.sign(c.z)+l.z*r,p[m+0]=l.x,p[m+1]=l.y,p[m+2]=l.z,Math.floor(m/f)){case 0:x.set(1,0,0),u[_+0]=tr(x,l,"z","y",r,n),u[_+1]=1-tr(x,l,"y","z",r,t);break;case 1:x.set(-1,0,0),u[_+0]=1-tr(x,l,"z","y",r,n),u[_+1]=1-tr(x,l,"y","z",r,t);break;case 2:x.set(0,1,0),u[_+0]=1-tr(x,l,"x","z",r,e),u[_+1]=tr(x,l,"z","x",r,n);break;case 3:x.set(0,-1,0),u[_+0]=1-tr(x,l,"x","z",r,e),u[_+1]=1-tr(x,l,"z","x",r,n);break;case 4:x.set(0,0,1),u[_+0]=1-tr(x,l,"x","y",r,e),u[_+1]=1-tr(x,l,"y","x",r,t);break;case 5:x.set(0,0,-1),u[_+0]=tr(x,l,"x","y",r,e),u[_+1]=1-tr(x,l,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};var ci=10,fn=8,ir=2.9,gc=[{key:"roof",dy:9.2},{key:"upper",dy:6.6},{key:"main",dy:4.1},{key:"basement",dy:2},{key:"below",dy:0}],hn=(i,e,t)=>new F(i,e,t);function Sm({M:i,T:e,markTex:t,glowTex:n}){let s=new yt,r={};gc.forEach(w=>{let U=new yt;U.userData.level=w.key,r[w.key]=U,s.add(U)});let a={},o=[],c=new fa({color:11126756,transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1,fog:!1}),l={icicles:null,snowL:null,snowR:null,chimneyTop:new yi,fans:[]},h=Ya;function d(w,U,N,B,Z=0,H=0,Y=0,q,W={}){let J=new En(w,U,N);h(J,W.uv||{});let ge=new Fe(J,B);if(ge.position.set(Z,H,Y),ge.castShadow=W.cast!==!1,ge.receiveShadow=W.receive!==!1,W.edges){let Ne=new Lr(new Ro(J,30),c);Ne.raycast=()=>{},ge.add(Ne)}return q&&q.add(ge),ge}function p(w,U,N,B,Z,H=0,Y=0,q=0,W,J={}){let ge=new nr(w,U,N,J.seg||2,B),Ne=new Fe(ge,Z);return Ne.position.set(H,Y,q),Ne.castShadow=J.cast!==!1,Ne.receiveShadow=!0,W&&W.add(Ne),Ne}function u(w,U,N,B,Z,H,Y,q=18){let W=new Fe(new dn(w,w,U,q),N);return W.position.set(B,Z,H),W.castShadow=!0,W.receiveShadow=!0,Y&&Y.add(W),W}function f(w,U,N,B){let Z=a[w]||(a[w]={meshes:[],mats:[],marks:[]}),H=Y=>{let q=Y.clone();return q.userData.baseEmissive=q.emissive.clone(),q};if(U.forEach(Y=>{Y.material=Array.isArray(Y.material)?Y.material.map(H):H(Y.material),Y.userData.sys=w,Z.meshes.push(Y),Z.mats.push(...[].concat(Y.material))}),N){let Y=new Ji(new Bi({map:t,transparent:!0,depthTest:!1,depthWrite:!1,opacity:0}));Y.position.copy(N),Y.scale.set(.95,.95,1),Y.renderOrder=10,Y.userData.sys=w,Y.userData.noAO=!0,r[B].add(Y),Z.marks.push(Y)}}let x=0,g={},m=w=>g[w]||(g[w]=dm(w));function _(w,U,N,B,Z,H){let Y=U.x1-U.x0,q=U.y1-U.y0,W=(U.x0+U.x1)/2,J=(U.y0+U.y1)/2,ge=new yt;ge.position.set(W,J,0),w.add(ge);let Ne=Nf(m(B||"living")),qe=new Fe(new sn(Y,q),Ne);qe.position.z=.03,qe.receiveShadow=!1,ge.add(qe);let Je=.075,mt=.1;p(Y,Je,mt,.012,i.trim,0,q/2-Je/2,.07,ge,{seg:1}),p(Y,Je,mt,.012,i.trim,0,-q/2+Je/2,.07,ge,{seg:1}),p(Je,q,mt,.012,i.trim,-Y/2+Je/2,0,.07,ge,{seg:1}),p(Je,q,mt,.012,i.trim,Y/2-Je/2,0,.07,ge,{seg:1});let te=Y>1.35?Math.round(Y/.95):1;for(let Ue=1;Ue<te;Ue++)p(.035,q-.1,.07,.008,i.trim,-Y/2+Y/te*Ue,0,.065,ge,{seg:1,cast:!1});q>1.2&&p(Y-.1,.035,.07,.008,i.trim,0,q*.12,.065,ge,{seg:1,cast:!1}),p(Y+.22,.055,.26,.012,i.cedar,0,-q/2-.03,.14,ge,{seg:1}),p(Y+.18,.09,.12,.012,i.trim,0,q/2+.07,.1,ge,{seg:1});let Ee=new Ji(new Bi({map:n,transparent:!0,depthWrite:!1,blending:zn,opacity:0}));return Ee.position.set(0,0,.4),Ee.scale.set(Y*2.6,q*2.6,1),Ee.userData.noAO=!0,ge.add(Ee),o.push({mat:Ne,halo:Ee,order:Z!=null?Z+x*.001:x,always:!!H,w:Y,h:q}),x++,ge}function b(w,U,N){let B=U.x1-U.x0,Z=U.y1-U.y0,H=(U.x0+U.x1)/2,Y=(U.y0+U.y1)/2,q=new yt;q.position.set(H,Y,0),w.add(q),d(B,Z,.07,i.door,0,0,0,q,{uv:{ox:H,oy:Y}});let W=new Fe(new sn(.22,Z*.72),Nf(m("hall")));W.position.set(-B/2+.22,.05,.04),q.add(W),o.push({mat:W.material,halo:null,order:.5,always:!1,w:.22,h:Z*.72}),p(.03,.8,.05,.012,i.trim,B/2-.14,-.05,.08,q,{seg:1}),p(B+.14,.09,.12,.012,i.trim,0,Z/2+.07,.07,q,{seg:1}),p(.07,Z,.1,.01,i.trim,-B/2-.035,0,.06,q,{seg:1}),p(.07,Z,.1,.01,i.trim,B/2+.035,0,.06,q,{seg:1})}function y(w,U,N,B,Z,H,Y,q,W={}){let J=new yt,ge=new Set([-w/2,w/2]),Ne=new Set([0,U]);B.forEach(te=>{ge.add(te.x0),ge.add(te.x1),Ne.add(te.y0),Ne.add(te.y1)});let qe=[...ge].sort((te,Ee)=>te-Ee),Je=[...Ne].sort((te,Ee)=>te-Ee),mt=[i.trim,i.trim,i.trim,i.trim,Z,i.drywall];for(let te=0;te<qe.length-1;te++)for(let Ee=0;Ee<Je.length-1;Ee++){let Ue=(qe[te]+qe[te+1])/2,be=(Je[Ee]+Je[Ee+1])/2;B.some(Ge=>Ue>Ge.x0&&Ue<Ge.x1&&be>Ge.y0&&be<Ge.y1)||d(qe[te+1]-qe[te],Je[Ee+1]-Je[Ee],N,mt,Ue,be,0,J,{edges:!0,uv:{ox:Ue,oy:be+(W.v0||0)}})}return B.forEach(te=>{te.door?b(J,te,N):_(J,te,N,te.room,W.order,te.always)}),J.position.copy(Y),J.rotation.y=q||0,H.add(J),J}(()=>{let w=r.below,U=[],N=i.form;U.push(d(ci+.5,3.4,.25,N,0,-1.4,fn/2+.12,w,{edges:!0,uv:{ox:0,oy:-1.4}})),U.push(d(ci+.5,3.4,.25,N,0,-1.4,-fn/2-.12,w,{edges:!0,uv:{ox:0,oy:-1.4}})),U.push(d(.25,3.4,fn,N,ci/2+.12,-1.4,0,w,{edges:!0,uv:{oy:-1.4}})),U.push(d(.25,3.4,fn,N,-ci/2-.12,-1.4,0,w,{edges:!0,uv:{oy:-1.4}})),d(ci+1.2,.3,.8,i.concrete,0,-3.1,fn/2+.1,w),d(ci+1.2,.3,.8,i.concrete,0,-3.1,-fn/2-.1,w),d(.8,.3,fn,i.concrete,ci/2+.1,-3.1,0,w),d(.8,.3,fn,i.concrete,-ci/2-.1,-3.1,0,w);let B=d(ci,.16,fn,i.slab,0,-2.88,0,w,{edges:!0});f("foundation",[...U,B],hn(ci/2+.6,-1.4,1.6),"below");let Z=u(.14,9,i.pipe,.6,-3.25,-fn/2-4.3,w);Z.rotation.x=Math.PI/2-.05;let H=u(.14,.6,i.pipe,.6,-3,-fn/2+.2,w),Y=u(.12,3.2,i.pvc,.6,-1.6,-fn/2-1.2,w);f("sewer",[Z,H,Y],hn(.6,-2.4,-fn/2-4.5),"below");let q=u(.1,.5,i.pvc,-1.2,-2.7,-1.5,w);f("radon",[q],hn(-1.2,-2.2,-1.5),"below");let W=u(.06,ci+1,i.pvc,0,-3.25,fn/2+.7,w,10);W.rotation.z=Math.PI/2,W.castShadow=!1})(),(()=>{let w=r.basement,U=new ps(16766880,0,15,2);U.position.set(.2,-.7,-.4),w.add(U),w.userData.lights=[U];let N=d(.85,1.7,.85,i.white,-3.3,-2,-2.6,w),B=d(.87,.12,.87,i.copper,-3.3,-1.5,-2.6,w),Z=d(6.2,.36,.5,i.steel,-.3,-.12,-2.6,w),H=d(.5,1,.5,i.steel,-3.3,-.7,-2.6,w),Y=u(.07,1.2,i.pvc,-3,-.6,-3.1,w);f("hvac",[N,B,Z,H,Y],hn(-3.3,-.9,-2),"basement");let q=u(.3,1.4,i.white,-2.1,-2.1,-3,w),W=u(.04,1.2,i.copper,-2,-.9,-3,w);f("water-heaters",[q,W],hn(-2.1,-1.1,-2.6),"basement");let J=d(.62,.95,.14,i.steel,2.8,-1.2,-3.8,w),ge=d(.4,.7,.02,i.copper,2.8,-1.2,-3.72,w),Ne=u(.05,1.5,i.copper,2.8,-.1,-3.8,w);f("electrical",[J,ge,Ne],hn(2.8,-.5,-3.3),"basement");let qe=u(.1,3.1,i.pvc,-1.2,-1.2,-1.5,w);f("radon",[qe],null,"basement"),u(.09,3.1,i.pipe,-2.6,-1.3,-3.6,w);for(let Je=-4;Je<=4;Je++)d(.09,.3,fn-.3,i.cedar,Je*1,0-.1,0,w,{cast:!1})})();let M=[{x0:-3.8,x1:-1.2,y0:.7,y1:2.5,room:"living"},{x0:.2,x1:1.3,y0:0,y1:2.2,door:!0},{x0:2.1,x1:4.2,y0:.7,y1:2.5,room:"kitchen"}];(()=>{let w=r.main,U=.3;d(ci,.3,fn,i.floor,0,.15,0,w,{edges:!0}),y(ci,ir,.22,M,i.lap,w,hn(0,U,fn/2),0,{order:1,v0:U}),y(ci,ir,.22,[{x0:-3,x1:1.6,y0:.1,y1:2.45,room:"kitchen"}],i.lap,w,hn(0,U,-fn/2),Math.PI,{order:4,v0:U}),y(fn,ir,.22,[{x0:-2.2,x1:-.2,y0:.8,y1:2.3,room:"hall"}],i.lap,w,hn(ci/2,U,0),Math.PI/2,{order:2,v0:U}),y(fn,ir,.22,[{x0:.3,x1:2.3,y0:.8,y1:2.3,room:"living"}],i.lap,w,hn(-ci/2,U,0),-Math.PI/2,{order:3,v0:U}),d(.15,ir,5,i.drywall,1.2,U+ir/2,-1.2,w);let N=d(3,.95,.65,i.counter,2.9,U+.48,-3.4,w),B=p(.85,1.95,.7,.03,i.steel,4.35,U+.98,-3.4,w),Z=d(.75,.05,.6,i.steel,2.4,U+.97,-3.4,w);f("installation",[N,B,Z],hn(3,2.3,-3.2),"main");let H=u(.1,3.2,i.pvc,-1.2,1.9,-1.5,w);f("radon",[H],null,"main"),u(.09,3.2,i.pipe,-2.6,1.9,-3.6,w),p(.3,.42,.18,.02,i.white,2.8,1.5,-fn/2-.2,w),u(.035,3.6,i.steel,2.8,3.55,-fn/2-.1,w,10);let Y=new ps(16758123,0,11,2);Y.position.set(-1.5,2.4,.5),w.add(Y);let q=new ps(16758123,0,9,2);q.position.set(3,2.4,-1.5),w.add(q),w.userData.lights=[Y,q];let W=new yt;w.add(W),d(2.9,.32,2.3,i.stone,.55,.16,5.1,W,{uv:{ox:.55,oy:.16}}),d(2.9,.07,2.3,i.cedar,.55,.35,5.1,W,{uv:{}}),d(1.7,.17,.4,i.concrete,.7,.085,6.55,W),d(1.9,.17,.4,i.concrete,.7,.255-.085,6.2,W),[-.75,1.85].forEach(qe=>{p(.22,2.55,.22,.015,i.cedar,qe,1.67,6.12,W),d(.34,.5,.34,i.stone,qe,.6,6.12,W,{uv:{ox:qe,oy:.6}})}),p(3.5,.24,.22,.02,i.cedar,.55,2.84,6.12,W);let J=d(3.4,.14,2.6,[i.trim,i.trim,i.roof,i.cedar,i.trim,i.trim],.55,3,5.25,W,{uv:{swap:!0}});J.rotation.x=.1,[-.15,1.65].forEach(qe=>{let Je=new Fe(new dn(.06,.07,.24,12),i.sconce);Je.position.set(qe,1.9,4.2),Je.userData.noAO=!0,W.add(Je);let mt=new Ji(new Bi({map:n,transparent:!0,depthWrite:!1,blending:zn,opacity:0}));mt.position.set(qe,1.9,4.5),mt.scale.set(1.6,1.6,1),mt.userData.noAO=!0,W.add(mt),l.porchHalos=(l.porchHalos||[]).concat(mt)}),[-.78,1.88].forEach(qe=>{d(.06,.06,2,i.trim,qe,1.2,5.15,W),d(.05,.05,2,i.trim,qe,.55,5.15,W);for(let Je=0;Je<8;Je++)d(.025,.62,.025,i.trim,qe,.9,4.25+Je*.27,W,{cast:!1})});let ge=new Fe(new sn(.2,.2),new Hn({map:t,transparent:!0,toneMapped:!1}));ge.position.set(1.62,1.35,4.13),ge.userData.noAO=!0,W.add(ge);let Ne=new ps(16761469,0,7,2);Ne.position.set(.75,2.6,fn/2+1.1),w.add(Ne),w.userData.porch=Ne})(),(()=>{let w=r.upper,U=3.45;d(ci,.25,fn,i.floor,0,3.32,0,w,{edges:!0}),y(ci,ir,.22,[{x0:-3.6,x1:-1.8,y0:.9,y1:2.4,room:"bed"},{x0:-.9,x1:1.9,y0:.5,y1:2.5,room:"living"},{x0:2.6,x1:4.1,y0:.9,y1:2.4,room:"bed"}],i.bb,w,hn(0,U,fn/2),0,{order:5,v0:U}),y(ci,ir,.22,[{x0:-3.4,x1:-1.8,y0:.9,y1:2.3,room:"bath"},{x0:1.6,x1:3.2,y0:.9,y1:2.3,room:"bed"}],i.bb,w,hn(0,U,-fn/2),Math.PI,{order:8,v0:U}),y(fn,ir,.22,[{x0:.6,x1:2.4,y0:.9,y1:2.3,room:"bed"}],i.bb,w,hn(ci/2,U,0),Math.PI/2,{order:6,v0:U}),y(fn,ir,.22,[{x0:-2.2,x1:-.6,y0:1.2,y1:2.2,room:"bath"}],i.bb,w,hn(-ci/2,U,0),-Math.PI/2,{order:7,v0:U}),d(.15,ir,fn-.4,i.drywall,-1.6,U+ir/2,0,w);let N=p(1.7,.55,.8,.08,i.ceramic,-3.6,U+.28,-3.35,w),B=p(.7,.85,.5,.04,i.ceramic,-2.4,U+.43,-3.5,w),Z=u(.09,3,i.pipe,-2.6,U+1.4,-3.6,w);f("plumbing",[N,B,Z],hn(-3.4,4.6,-3),"upper");let H=u(.1,3,i.pvc,-1.2,U+1.4,-1.5,w);f("radon",[H],null,"upper");let Y=new ps(16758123,0,11,2);Y.position.set(.5,5.6,.5),w.add(Y),w.userData.lights=[Y]})(),(()=>{let w=r.roof,U=6.35,N=3.6,B=ci/2,Z=.6,H=Math.atan2(N,B),Y=Math.hypot(B+Z,(B+Z)*N/B),q=ie=>{let xe=new En(Y,.2,fn+1);h(xe,{swap:!0});let we=new Fe(xe,[i.trim,i.trim,i.roof,i.cedar,i.trim,i.trim]);we.castShadow=!0,we.receiveShadow=!0,we.rotation.z=ie*H;let $e=U+N-(B+Z)/2*(N/B)+.12;return we.position.set(ie>0?-(B+Z)/2+.02:(B+Z)/2-.02,$e,0),w.add(we),we},W=q(1),J=q(-1);[W,J].forEach(ie=>{let xe=new Lr(new Ro(ie.geometry,30),c);xe.raycast=()=>{},ie.add(xe)}),[W,J].forEach((ie,xe)=>{[-1,1].forEach(Xe=>d(Y,.3,.06,i.trim,0,-.05,Xe*(fn/2+.5),ie,{cast:!1}));let we=xe===0?-1:1;d(.06,.34,fn+1.04,i.trim,we*(Y/2),-.1,0,ie,{cast:!1});let $e=d(.12,.1,fn+.9,i.trim,we*(Y/2+.06),-.28,0,ie,{cast:!1});$e.rotation.z=-ie.rotation.z}),d(.3,.22,fn+1.05,i.trim,0,U+N+.2,0,w),f("roofing",[W,J],hn(-2.8,9.1,2.2),"roof");let ge=new Ei;ge.moveTo(-B,0),ge.lineTo(B,0),ge.lineTo(0,N),ge.lineTo(-B,0);let Ne=new Ks;Ne.moveTo(-.5,1.15),Ne.lineTo(.5,1.15),Ne.lineTo(.5,2.15),Ne.lineTo(-.5,2.15),Ne.lineTo(-.5,1.15),ge.holes.push(Ne);let qe=new Rs(ge,{depth:.22,bevelEnabled:!1});[fn/2-.22,-fn/2].forEach((ie,xe)=>{let we=new Fe(qe,[i.bb,i.trim]);we.position.set(0,U,ie),we.castShadow=!0,we.receiveShadow=!0,w.add(we);let $e=new yt;$e.position.set(0,U+1.65,ie+.11),w.add($e);let Xe=_($e,{x0:-.5,x1:.5,y0:-.5,y1:.5,room:"hall"},.22,"hall",-1,!0);xe===1&&($e.rotation.y=Math.PI,$e.position.z=ie+.11-0);let lt=new Ji(new Bi({map:n,transparent:!0,depthWrite:!1,blending:zn,opacity:0}));lt.position.set(0,U+1.65,ie+(xe===0?.55:-.3)),lt.scale.set(3.4,3.4,1),lt.userData.noAO=!0,w.add(lt),o.push({mat:null,halo:lt,order:-1,always:!0,w:1,h:1,haloOnly:!0,level:.6})});let Je=new yt;Je.rotation.z=-H,Je.position.copy(J.position);let mt=[];for(let ie=0;ie<2;ie++)for(let xe=0;xe<4;xe++){let we=d(1.3,.05,.95,i.solar,-.9+ie*1.45,.16,-1.6+xe*1.05,Je,{cast:!1}),$e=d(1.34,.04,.99,i.solarFrame,-.9+ie*1.45,.14,-1.6+xe*1.05,Je,{cast:!1});mt.push(we)}w.add(Je),f("solar",mt,hn(3.4,9.3,.6),"roof");let te=ie=>{let xe=new sn(Y-.25,fn+.7,30,30),we=xe.attributes.position,$e=Nn(5);for(let ft=0;ft<we.count;ft++)we.setZ(ft,.025+$e()*.05);xe.computeVertexNormals();let Xe=i.snowRoof.clone();Xe.alphaMap=fm(256,ie),Xe.alphaTest=.25,Xe.userData={...i.snowRoof.userData};let lt=new Fe(xe,Xe);return lt.rotation.x=-Math.PI/2,lt.position.y=.105,lt.receiveShadow=!0,lt.castShadow=!0,lt};l.snowL=te(),l.snowL.userData.keep=!0,W.add(l.snowL),l.snowR=te((ie,xe)=>ie>.24&&ie<.7&&xe>.24&&xe<.76?0:1),l.snowR.userData.keep=!0,J.add(l.snowR);let Ee=d(.5,.16,fn+.8,i.snowRoof,0,U+N+.38,0,w,{cast:!1});Ee.material=i.snowRoof,Ee.userData.keep=!0,(()=>{let ie=Nn(9),xe=70,we=new Kr(.04,1,6);we.rotateX(Math.PI),we.translate(0,-.5,0);let $e=new Mi(we,i.ice,xe*2),Xe=new zt,lt=new Bn,ft=new F,j=new F,Dt=U+N-(B+Z)*(N/B)+0;for(let _t=0;_t<2;_t++)for(let z=0;z<xe;z++){let S=-fn/2-.4+z/(xe-1)*(fn+.8),le=.12+ie()*ie()*.7,he=.7+ie()*.8;ft.set((_t?1:-1)*(B+Z+.08),Dt-.35,S+(ie()-.5)*.06),j.set(he,le,he),Xe.compose(ft,lt,j),$e.setMatrixAt(_t*xe+z,Xe)}$e.userData.baseMatrices=Array.from({length:xe*2},(_t,z)=>{let S=new zt;return $e.getMatrixAt(z,S),S}),$e.castShadow=!1,$e.userData.noAO=!0,$e.visible=!1,w.add($e),l.icicles=$e})();let Ue=new sn(ci-.6,fn-.6,40,32),be=Ue.attributes.position,Ge=Nn(3);for(let ie=0;ie<be.count;ie++)be.setZ(ie,Ge()*.12);Ue.computeVertexNormals();let re=new Fe(Ue,i.insul);re.rotation.x=-Math.PI/2,re.position.y=U+.02,re.receiveShadow=!0,w.add(re),d(ci,.1,fn,i.floor,0,U-.05,0,w),f("asbestos",[re],hn(-.4,7.3,-.8),"roof");let Qe=u(.1,4.6,i.pvc,-1.2,U+2.2,-1.5,w);f("radon",[Qe],hn(-1.2,10.9,-1.5),"roof");let ue=u(.24,.42,i.steel,-1.2,7.9,-1.5,w,16);f("radon",[ue],null,"roof"),u(.09,4,i.pipe,-2.6,U+2,-3.6,w);let me=d(.95,4.1,.95,i.stone,-3.4,8.4,-1.6,w,{uv:{ox:-3.4,oy:8.4}});d(1.15,.12,1.15,i.concrete,-3.4,10.5,-1.6,w),d(.7,.3,.7,i.steel,-3.4,10.7,-1.6,w),l.chimneyTop.position.set(-3.4,10.9,-1.6),w.add(l.chimneyTop)})();let T={meter:hn(2.8,1.45,-4.3),panel:hn(2.8,-1.2,-3.8),shutoff:hn(-.5,-1.4,3.75),heater:hn(-2.1,-2,-3),sewer:hn(.6,-3.35,-7.5),furnace:hn(-3.3,-2,-2.6),register:hn(3.8,3.52,2.9),fan:hn(-1.2,7.9,-1.5),pit:hn(-1.2,-3,-1.5),exhaust:hn(-1.2,11.6,-1.5),rim:hn(4.9,.3,4.05),sill:hn(-2.5,.7,4.05),attic:hn(0,6.4,4.05),door:hn(.75,1.2,4.05),chimney:hn(-3.4,10.5,-1.6),eave:hn(-5.6,5.9,3.5),potlights:hn(-2.4,3.1,.7),rangeHood:hn(2.4,2.4,-3.55),island:hn(3,1.3,-.6),vanity:hn(-2.4,4.4,-3.55),tub:hn(-3.6,4.1,-3.35),bedWindow:hn(2.4,5.2,-3.9),sump:hn(.66,-2.2,1.6)},R=new zt,v=new F,A=new Bn,I=new F;function G(w,U,N,B,Z){let H=B<.55?1:0;G.on=ot(G.on??0,H,Yt(Z*(H?.55:1.2),0,1));let Y=G.on*9,q=(1-w.ghost*.85)*(1-.35*(w.cut||0)),W=1-.65*(w.cut||0),J=1+1.6*(w.cut||0);o.forEach(Ue=>{let be=(Ue.always?1:Yt(Y-Ue.order,0,1))*q,Ge=1-B*.8;Ue.mat&&(Ue.mat.emissiveIntensity=(Ue.always?2.6:2)*be*Ge*W),Ue.halo&&(Ue.halo.material.opacity=(Ue.haloOnly?.28:Ue.always?.5:.3)*be*Ge*W)}),["main","upper"].forEach(Ue=>(r[Ue].userData.lights||[]).forEach(be=>{be.intensity=9*Yt(Y/9,0,1)*(1-B)*q*J}));let ge=Math.max(w.zk||0,At(.2,.7,w.explode||0),Yt(((w.lift||0)-1.5)/1.5,0,1));(r.basement.userData.lights||[]).forEach(Ue=>{Ue.intensity=30*ge*q*J});let Ne=(1-B)*q;r.main.userData.porch.intensity=12*Ne,(l.porchHalos||[]).forEach(Ue=>{Ue.material.opacity=.55*Ne*W}),i.sconce.emissiveIntensity=.4+3.2*(1-B);let qe=Yt(w.melt,0,1),Je=.18+qe*.8;l.snowL.material.alphaTest=Je,l.snowR.material.alphaTest=Yt(Je+.1,0,1);let mt=r.roof.children.find(Ue=>Ue.material===i.snowRoof);mt&&(mt.visible=qe<.6);let te=l.icicles,Ee=Yt(w.icicles,0,1);if(te.visible=Ee>.01,te.visible){for(let Ue=0;Ue<te.count;Ue++)R.copy(te.userData.baseMatrices[Ue]),R.decompose(v,A,I),I.y*=Ee,I.x*=.5+.5*Ee,I.z=I.x,R.compose(v,A,I),te.setMatrixAt(Ue,R);te.instanceMatrix.needsUpdate=!0}return Y}return{house:s,layers:r,sys:a,windows:o,ANCHORS:T,edgeMat:c,extra:l,update:G,box:d,rbox:p,cyl:u,system:f,wall:y,windowUnit:_,setUV:h,v:hn}}function Ss(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,c=new en,l=0;for(let h=0;h<i.length;++h){let d=i[h],p=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let u in d.attributes){if(!n.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+u+'" attribute exists among all geometries, or in none of them.'),null;r[u]===void 0&&(r[u]=[]),r[u].push(d.attributes[u]),p++}if(p!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let u in d.morphAttributes){if(!s.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[u]===void 0&&(a[u]=[]),a[u].push(d.morphAttributes[u])}if(e){let u;if(t)u=d.index.count;else if(d.attributes.position!==void 0)u=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,u,h),l+=u}}if(t){let h=0,d=[];for(let p=0;p<i.length;++p){let u=i[p].index;for(let f=0;f<u.count;++f)d.push(u.getX(f)+h);h+=i[p].attributes.position.count}c.setIndex(d)}for(let h in r){let d=bm(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,d)}for(let h in a){let d=a[h][0].length;if(d!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let p=0;p<d;++p){let u=[];for(let x=0;x<a[h].length;++x)u.push(a[h][x][p]);let f=bm(u);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(f)}}}return c}function bm(i){let e,t,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let a=new e(r),o=new $t(a,t,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let d=c/t;for(let p=0,u=h.count;p<u;p++)for(let f=0;f<t;f++){let x=h.getComponent(p,f);o.setComponent(p+d,f,x)}}else a.set(h.array,c);c+=h.count*t}return s!==void 0&&(o.gpuType=s),o}function Tm(i,e=1e-4){e=Math.max(e,Number.EPSILON);let t={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count,a=0,o=Object.keys(i.attributes),c={},l={},h=[],d=["getX","getY","getZ","getW"],p=["setX","setY","setZ","setW"];for(let _=0,b=o.length;_<b;_++){let y=o[_],M=i.attributes[y];c[y]=new M.constructor(new M.array.constructor(M.count*M.itemSize),M.itemSize,M.normalized);let T=i.morphAttributes[y];T&&(l[y]||(l[y]=[]),T.forEach((R,v)=>{let A=new R.array.constructor(R.count*R.itemSize);l[y][v]=new R.constructor(A,R.itemSize,R.normalized)}))}let u=e*.5,f=Math.log10(1/e),x=Math.pow(10,f),g=u*x;for(let _=0;_<r;_++){let b=n?n.getX(_):_,y="";for(let M=0,T=o.length;M<T;M++){let R=o[M],v=i.getAttribute(R),A=v.itemSize;for(let I=0;I<A;I++)y+=`${Math.trunc(v[d[I]](b)*x+g)},`}if(y in t)h.push(t[y]);else{for(let M=0,T=o.length;M<T;M++){let R=o[M],v=i.getAttribute(R),A=i.morphAttributes[R],I=v.itemSize,G=c[R],w=l[R];for(let U=0;U<I;U++){let N=d[U],B=p[U];if(G[B](a,v[N](b)),A)for(let Z=0,H=A.length;Z<H;Z++)w[Z][B](a,A[Z][N](b))}}t[y]=a,h.push(a),a++}}let m=i.clone();for(let _ in i.attributes){let b=c[_];if(m.setAttribute(_,new b.constructor(b.array.slice(0,a*b.itemSize),b.itemSize,b.normalized)),_ in l)for(let y=0;y<l[_].length;y++){let M=l[_][y];m.morphAttributes[_][y]=new M.constructor(M.array.slice(0,a*M.itemSize),M.itemSize,M.normalized)}}return m.setIndex(h),m}var zf=0,wm={value:new ai(0,0,-1,30)};function xc(i,e,t,n=!1){let s=i.onBeforeCompile,r=++zf;return i.onBeforeCompile=(a,o)=>{s&&s(a,o),a.uniforms.uSight=wm,a.fragmentShader=a.fragmentShader.replace("#include <common>",`#include <common>
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
vColor.rgb = mix(vColor.rgb, vec3(0.8, 0.86, 0.95), aSnow * uSnow);`)},i.customProgramCacheKey=()=>"snowv"+n,i}function Rm({M:i,T:e,glowTex:t,markTex:n,tier:s,reduce:r}){let a=new yt,o=Nn(21),c=jr("rgba(255,255,255,0.7)"),l=mm(),h=Vo("rgba(255,196,120,0.9)","rgba(255,150,70,0)"),d={uSnow:{value:1},uRoofSnow:{value:1},uTint:{value:new Et(1,1,1)},uGrow:{value:0},uLeafTint:{value:new Et(.3,.5,.15)}},p=e.grass,u=e.snow,f=new on({map:u.map,normalMap:u.normalMap,roughnessMap:u.rmMap,metalnessMap:u.rmMap,roughness:1,metalness:1,transparent:!0,normalScale:new nt(1.1,1.1),envMapIntensity:.9});f.onBeforeCompile=ee=>{ee.uniforms.uSnow=d.uSnow,ee.uniforms.uTint=d.uTint,ee.uniforms.uGrass={value:p.map},ee.vertexShader=ee.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vWxz;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vWxz = (modelMatrix * vec4(position, 1.0)).xz;`),ee.fragmentShader=ee.fragmentShader.replace("#include <common>",`#include <common>
      uniform float uSnow; uniform vec3 uTint; uniform sampler2D uGrass; varying vec2 vWxz;
      float gh(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float gn(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f); return mix(mix(gh(i), gh(i+vec2(1,0)), f.x), mix(gh(i+vec2(0,1)), gh(i+vec2(1,1)), f.x), f.y); }`).replace("#include <map_fragment>",`
      vec4 snowC = texture2D(map, vMapUv);
      vec3 gr = texture2D(uGrass, vWxz * 0.25).rgb * uTint;
      float nz = gn(vWxz * 0.35) * 0.55 + gn(vWxz * 1.7) * 0.3 + gn(vWxz * 7.0) * 0.15;
      float cover = smoothstep(uSnow - 0.1, uSnow + 0.1, 1.0 - nz + (uSnow - 0.5) * 0.9);
      cover = uSnow >= 0.995 ? 1.0 : (uSnow <= 0.005 ? 0.0 : cover);
      diffuseColor.rgb *= mix(gr / max(snowC.rgb, vec3(0.2)) * 0.9, vec3(1.0), cover);
      diffuseColor *= snowC;`)};let x=200,g=6,m=450,_=Array.from({length:x+1},(ee,ne)=>m*Math.sinh(g*(ne/x*2-1))/Math.sinh(g)),b=(ee,ne)=>{let pe=Math.hypot(ee,ne),He=At(40,220,pe)*(ei(ee*.012+3,ne*.012+8,4,4096,4096,3)-.35)*22,E=(ei(ee*.09,ne*.09,3,4096,4096,9)-.5)*.35*At(8,22,pe)*(1-At(14,17,ne)*(1-At(27,30,ne)))*(1-At(-22.5,-20.5,ne)*(1-At(-15.5,-13.5,ne)))*(1-At(5,6.2,ee)*(1-At(10.2,11.5,ee))*At(.5,2,ne)*(1-At(16.5,18,ne)));return He+E},y=new en;{let ee=new Float32Array((x+1)*(x+1)*3),ne=new Float32Array((x+1)*(x+1)*2),pe=[];for(let He=0;He<=x;He++)for(let E=0;E<=x;E++){let O=He*(x+1)+E,K=_[E],Q=_[He];ee[O*3]=K,ee[O*3+1]=b(K,Q),ee[O*3+2]=Q,ne[O*2]=K,ne[O*2+1]=Q}for(let He=0;He<x;He++)for(let E=0;E<x;E++){let O=(_[E]+_[E+1])/2,K=(_[He]+_[He+1])/2;if(Math.abs(O)<5.1&&Math.abs(K)<4.1)continue;let Q=He*(x+1)+E,ve=Q+1,De=Q+x+1,ye=De+1;pe.push(Q,De,ve,ve,De,ye)}y.setAttribute("position",new $t(ee,3)),y.setAttribute("uv",new $t(ne,2)),y.setIndex(pe),y.computeVertexNormals()}let M=[],T=new Fe(y,f);T.receiveShadow=!0,T.renderOrder=-1,a.add(T);let R=i.asphalt.clone();[R.map,R.normalMap,R.roughnessMap,R.metalnessMap].forEach(ee=>{ee&&ee.repeat.set(220,3)}),R.roughness=.72,R.metalness=0,R.metalnessMap=null,R.envMapIntensity=1.4;let v=new Fe(new sn(660,9),R);v.rotation.x=-Math.PI/2,v.position.set(0,.012,22.2),v.receiveShadow=!0,a.add(v);let A=null;{let ee=new sn(2.2,.14),ne=new Mi(ee,new on({color:14070346,roughness:.8}),90),pe=new zt,He=new Bn().setFromEuler(new Ui(-Math.PI/2,0,0)),E=new F,O=new F(1,1,1);for(let K=0;K<90;K++)E.set(-180+K*4,.02,22.2),pe.compose(E,He,O),ne.setMatrixAt(K,pe);ne.receiveShadow=!0,a.add(ne),A=ne}M.push(R,i.pavement);let I=new Fe(new En(660,.1,1.8),i.pavement);I.position.set(0,.05,15.6),I.receiveShadow=!0,I.castShadow=!0,a.add(I);let G=new Fe(new En(1.3,.05,9.4),i.pavement);G.position.set(.7,.03,10.9),G.receiveShadow=!0,a.add(G);let w=new Fe(new En(3.6,.06,14.5),i.pavement);w.position.set(7.9,.03,9.3),w.receiveShadow=!0,a.add(w);let U=i.asphalt.clone();[U.map,U.normalMap,U.roughnessMap,U.metalnessMap].forEach(ee=>{ee&&ee.repeat.set(220,1.5)}),U.metalnessMap=null,U.metalness=0,U.roughness=.9,U.color.setScalar(1.25),M.push(U);let N=new Fe(new sn(660,4.5),U);N.rotation.x=-Math.PI/2,N.position.set(0,.012,-18.2),N.receiveShadow=!0,a.add(N);let B=(()=>{let ee=new jn(1,10,6),ne=new Mi(ee,new on({color:14673906,roughness:.95}),70),pe=new zt,He=new Bn,E=new F,O=new F;for(let K=0;K<70;K++){let Q=K%2,ve=-140+(K>>1)*8+o()*3;E.set(ve,.1,Q?26.9:17.6+o()*.2),O.set(2.8+o()*1.4,.55+o()*.25,.9+o()*.3),pe.compose(E,He,O),ne.setMatrixAt(K,pe)}return ne.castShadow=!0,ne.receiveShadow=!0,a.add(ne),ne})(),Z=[],H=xc(i.pole.clone(),3.5,9),Y=xc(new on({color:3817544,roughness:.42,metalness:.65}),3.5,9),q=new Hn({color:new Et(3.2,2.2,1.1),toneMapped:!1}),W=new fs([new F(0,6.9,0),new F(0,7.45,.25),new F(0,7.6,.9),new F(0,7.5,1.6)]),J=new ds(W,14,.05,8),ge=new jn(1,24,12);ge.scale(.54,.085,.23),[[-13,16.6],[11,16.6],[34,16.6],[-38,16.6]].forEach(([ee,ne])=>{let pe=new yt;pe.position.set(ee,0,ne);let He=new Fe(new dn(.06,.1,7.2,10),H);He.position.y=3.6,He.castShadow=!0,pe.add(He);let E=new Fe(J,H);E.castShadow=!0,pe.add(E);let O=new Fe(ge,Y);O.position.set(0,7.5,1.78),O.rotation.x=.04,O.castShadow=!0,pe.add(O);let K=new Fe(new sn(.8,.24),q);K.rotation.x=Math.PI/2,K.position.set(0,7.445,1.78),K.userData.noAO=!0,pe.add(K);let Q=new Ji(new Bi({map:t,transparent:!0,depthWrite:!1,blending:zn,opacity:0}));Q.position.set(0,7.3,1.78),Q.scale.set(5,5,1),Q.userData.noAO=!0,pe.add(Q);let ve=new Fe(new sn(1,1),new Hn({map:h,transparent:!0,depthWrite:!1,blending:zn,opacity:0}));ve.rotation.x=-Math.PI/2,ve.position.set(0,.04,2),ve.scale.set(15,10,1),ve.userData.noAO=!0,pe.add(ve),a.add(pe),Z.push({halo:Q,pool:ve,lens:K})});let Ne=new ps(16761466,0,32,2);Ne.position.set(11,7,18.2),a.add(Ne);let qe=new ps(16761466,0,32,2);qe.position.set(-13,7,18.2),a.add(qe);let Je=[];[[-2.5,7.4,5.5,4.2],[.8,8.4,5.5,4.6],[3.15,7.4,5.5,4.2]].forEach(([ee,ne,pe,He])=>{let E=new Fe(new sn(1,1),new Hn({map:h,transparent:!0,depthWrite:!1,blending:zn,opacity:0}));E.rotation.x=-Math.PI/2,E.position.set(ee,.05,ne),E.scale.set(pe,He,1),E.userData.noAO=!0,a.add(E),Je.push(E)});let mt=xc(Hf(i.spruce.clone(),d.uSnow),5,12,!0);function te(ee){let ne=Nn(ee),pe=[],He=11;for(let X=0;X<He;X++){let Ye=X/(He-1),Ke=ot(1.7,.18,Math.pow(Ye,.85))*(.94+ne()*.12),ct=ot(1.7,.9,Ye),ut=1+X*.62,pt=new Kr(Ke,ct,20,4,!0);pt.translate(0,ut+ct/2,0);let Pt=pt.attributes.position;for(let bt=0;bt<Pt.count;bt++){let st=Pt.getX(bt),Rt=Pt.getY(bt),Bt=Pt.getZ(bt),Rn=Math.atan2(Bt,st),On=Math.hypot(st,Bt),Yn=1+Math.sin(Rn*7+X*2.3)*.09+Math.sin(Rn*13+X)*.04+(ne()-.5)*.05,An=On/Ke*(On/Ke)*.34*(1+.35*Math.sin(Rn*5+X*1.3));Pt.setXYZ(bt,st*Yn,Rt-An,Bt*Yn)}pt.computeVertexNormals(),pe.push(pt)}let E=new dn(.1,.2,1.6,8);E.translate(0,.8,0),pe.push(E);let O=Ss(pe);O.computeVertexNormals();let K=O.attributes.position,Q=O.attributes.normal,ve=new Float32Array(K.count*3),De=new Float32Array(K.count),ye=new Et;for(let X=0;X<K.count;X++){let Ye=Q.getY(X),Ke=ei(K.getX(X)*2.1,K.getZ(X)*2.1+K.getY(X)*1.1,3,64,64,2);ye.setRGB(.05+Ke*.05,.12+Ke*.08,.09+Ke*.05),K.getY(X)<1.15&&ye.setRGB(.1,.07,.05),ve[X*3]=ye.r,ve[X*3+1]=ye.g,ve[X*3+2]=ye.b,De[X]=K.getY(X)<1.15?0:Yt(At(.05,.6,Ye+(Ke-.5)*.7),0,1)*.78}return O.setAttribute("color",new $t(ve,3)),O.setAttribute("aSnow",new $t(De,1)),O}let Ee=[[-9.5,3,1.1],[-11.8,-3.5,1.4],[9.8,-5.5,1.25],[-8.2,-8.5,1.05],[15,-9,1.35],[-14,9.5,1.2],[18,9,1.1],[-21,-6,1.5],[24,-3,1.25],[-27,8,1.2],[30,-12,1.4],[-11.5,-13.5,1.3],[6,-26,1.1],[-18,-27,1.45],[22,-27,1.3],[-36,3,1.3],[40,2,1.2]],Ue=[te(1),te(2)],be=Ue[0];Ue.forEach((ee,ne)=>{let pe=Ee.filter((ve,De)=>De%2===ne),He=new Mi(ee,mt,pe.length),E=new zt,O=new Bn,K=new F,Q=new F;pe.forEach(([ve,De,ye],X)=>{O.setFromAxisAngle(new F(0,1,0),o()*6.28),K.set(ve,0,De),Q.set(ye,ye*(.9+o()*.25),ye),E.compose(K,O,Q),He.setMatrixAt(X,E)}),He.castShadow=!0,He.receiveShadow=!0,a.add(He)});let Ge=[];{let ee=Hf(i.shrub.clone(),d.uSnow),ne=new Nr(.7,3),pe=ne.attributes.position,He=new Float32Array(pe.count*3),E=new Float32Array(pe.count);for(let O=0;O<pe.count;O++){let K=pe.getX(O),Q=pe.getY(O),ve=pe.getZ(O),De=ei(K*2+5,ve*2+Q*2,3,64,64,4),ye=1+(De-.5)*.35;pe.setXYZ(O,K*ye,Q*ye*.72,ve*ye),He[O*3]=.06,He[O*3+1]=.15+De*.05,He[O*3+2]=.1,E[O]=At(.05,.7,Q/.7+(De-.5))*.8}ne.setAttribute("color",new $t(He,3)),ne.setAttribute("aSnow",new $t(E,1)),ne.computeVertexNormals(),[[-1.7,4.9,1.2],[-2.5,4.7,.9],[2.9,4.9,1],[3.7,4.6,.8],[-5.2,4.6,.8]].forEach(([O,K,Q])=>{let ve=new Fe(ne,ee);ve.position.set(O,.35*Q,K),ve.scale.setScalar(Q),ve.castShadow=!0,ve.receiveShadow=!0,ve.userData.keep=!0,a.add(ve),Ge.push(ve)})}let re=xc(Hf(new on({vertexColors:!0,roughness:1}),d.uSnow),5,12,!0),Qe=(()=>{let ee=document.createElement("canvas");ee.width=ee.height=128;let ne=ee.getContext("2d"),pe=Nn(77);for(let E=0;E<30;E++){ne.save(),ne.translate(12+pe()*104,12+pe()*104),ne.rotate(pe()*Math.PI);let O=150+Math.floor(pe()*105),K=6+pe()*6,Q=13+pe()*9;ne.fillStyle=`rgb(${O},${O},${O})`,ne.beginPath(),ne.ellipse(0,0,K,Q,0,0,Math.PI*2),ne.fill(),ne.strokeStyle="rgba(70,70,70,0.65)",ne.lineWidth=1,ne.beginPath(),ne.moveTo(0,-Q),ne.lineTo(0,Q),ne.stroke(),ne.restore()}let He=new Zn(ee);return He.colorSpace=vn,He.anisotropy=4,He})(),ue=xc((()=>{let ee=new on({map:Qe,alphaTest:.5,alphaToCoverage:s>=1,vertexColors:!0,roughness:.8,side:li}),ne=++zf;return ee.onBeforeCompile=pe=>{pe.uniforms.uGrow=d.uGrow,pe.uniforms.uLeafTint=d.uLeafTint,pe.vertexShader=pe.vertexShader.replace("#include <common>",`#include <common>
attribute vec3 aCenter;
uniform float uGrow;
uniform vec3 uLeafTint;`).replace("#include <begin_vertex>",`#include <begin_vertex>
transformed = aCenter + (position - aCenter) * uGrow;`).replace("#include <color_vertex>",`#include <color_vertex>
vColor.rgb *= uLeafTint;`),pe.fragmentShader=pe.fragmentShader.replace("#include <normal_fragment_begin>",pn.normal_fragment_begin.replace("normal *= faceDirection;",""))},ee.customProgramCacheKey=()=>"leaf"+ne,ee})(),5,12,!0);function me(ee){let ne=Nn(ee),pe=[],He=[],E=new F(0,1,0);function O(ct,ut,pt,Pt){let bt=new dn(Pt*.68,Pt,pt,6,1);return bt.applyMatrix4(new zt().compose(ct.clone().addScaledVector(ut,pt/2),new Bn().setFromUnitVectors(E,ut),new F(1,1,1))),pe.push(bt),ct.clone().addScaledVector(ut,pt)}let K=new F(0,0,1);function Q(ct,ut){let pt=[],Pt=[],bt=[],st=[],Rt=[],Bt=[],Rn=.72+ne()*.5,On=(ne()-.5)*.25;for(let An=0;An<18;An++){let ls=ne()*2-1,Ts=ne()*Math.PI*2,un=Math.sqrt(1-ls*ls),Gr=new F(un*Math.cos(Ts),ls*.85,un*Math.sin(Ts)).normalize(),qi=ct.clone().addScaledVector(Gr,ut*(.3+.7*Math.cbrt(ne()))),kr=.8+ne()*.55,Vr=Gr.clone().add(new F(ne()-.5,ne()-.3,ne()-.5).multiplyScalar(.9)).normalize(),aa=new Bn().setFromUnitVectors(K,Vr).premultiply(new Bn().setFromAxisAngle(Vr,ne()*6.28)),ys=Gr.clone().add(new F(0,.3,0)).normalize(),V=pt.length/3;[[-.5,-.5],[.5,-.5],[.5,.5],[-.5,.5]].forEach(([et,Mt])=>{let Tt=new F(et*kr,Mt*kr,0).applyQuaternion(aa).add(qi);pt.push(Tt.x,Tt.y,Tt.z),Pt.push(ys.x,ys.y,ys.z),bt.push(et+.5,Mt+.5),st.push(qi.x,qi.y,qi.z);let Nt=Rn*(.85+.3*ne());Rt.push(Nt*(1+On),Nt,Nt*(1-On*.6))}),Bt.push(V,V+1,V+2,V,V+2,V+3)}let Yn=new en;Yn.setAttribute("position",new qt(pt,3)),Yn.setAttribute("normal",new qt(Pt,3)),Yn.setAttribute("uv",new qt(bt,2)),Yn.setAttribute("aCenter",new qt(st,3)),Yn.setAttribute("color",new qt(Rt,3)),Yn.setIndex(Bt),He.push(Yn)}function ve(ct,ut,pt,Pt,bt){let st=O(ct,ut,pt,Pt);if(bt===0){Q(st,.9+ne()*.7),ne()<.7&&Q(st.clone().add(new F((ne()-.5)*1.2,ne()*.6,(ne()-.5)*1.2)),.7+ne()*.5);return}let Rt=bt>=3?3:2+(ne()<.4?1:0);for(let Bt=0;Bt<Rt;Bt++){let Rn=new F().crossVectors(ut,new F(ne()-.5,.25,ne()-.5)).normalize(),On=ut.clone().applyAxisAngle(Rn,.45+ne()*.7).add(new F(0,.18,0)).normalize();ve(st,On,pt*(.68+ne()*.14),Pt*.62,bt-1)}bt<=2&&Q(st.clone().add(new F((ne()-.5)*.8,.3,(ne()-.5)*.8)),.8+ne()*.5)}ve(new F(0,0,0),E,2.6,.24,4);let De=Ss(pe),ye=De.attributes.position,X=De.attributes.normal,Ye=new Float32Array(ye.count*3),Ke=new Float32Array(ye.count);for(let ct=0;ct<ye.count;ct++){let ut=ei(ye.getX(ct)*3,ye.getY(ct)*3+ye.getZ(ct),2,64,64,6);Ye[ct*3]=.16+ut*.08,Ye[ct*3+1]=.12+ut*.06,Ye[ct*3+2]=.09+ut*.05,Ke[ct]=Yt(X.getY(ct)*1.5,0,1)*.85}return De.setAttribute("color",new $t(Ye,3)),De.setAttribute("aSnow",new $t(Ke,1)),{wood:De,leaf:Ss(He)}}let ie=[],xe=[[-11.5,-1,.95],[12.2,-3.6,1],[-9.5,-9.5,1.1],[8.5,-9.8,1.15],[-33,-9,1.15],[35,-8,1.05],[-26,11,1],[27,9,1],[-30,18.8,.75],[44,18.8,.75],[-9,-22,1.2],[14,-23,1.1]];[me(31),me(47)].forEach((ee,ne)=>{let pe=xe.filter((E,O)=>O%2===ne),He=(E,O,K)=>{let Q=new Mi(E,O,pe.length),ve=new zt,De=new Bn,ye=new F,X=new F;return pe.forEach(([Ye,Ke,ct],ut)=>{De.setFromAxisAngle(new F(0,1,0),(Ye*7+Ke*3)%6.28),ye.set(Ye,0,Ke),X.setScalar(ct*.95),ve.compose(ye,De,X),Q.setMatrixAt(ut,ve)}),Q.castShadow=K,Q.receiveShadow=!0,a.add(Q),Q};He(ee.wood,re,!0),ie.push(He(ee.leaf,ue,!0))});let we=i.neighborRoof.clone();we.onBeforeCompile=ee=>{ee.uniforms.uRoofSnow=d.uRoofSnow,ee.fragmentShader=ee.fragmentShader.replace("#include <common>",`#include <common>
uniform float uRoofSnow;`).replace("#include <map_fragment>",`#include <map_fragment>
diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.9, 0.93, 0.97), uRoofSnow * 0.92);`)},we.customProgramCacheKey=()=>"nroof";let $e=new Hn({color:new Et(1.5,.92,.42),transparent:!0,opacity:0}),Xe=new on({color:659222,roughness:.08,metalness:.4,envMapIntensity:1.6}),lt=[],ft=[],j=[];function Dt(ee){let{x:ne,z:pe,w:He,d:E,h:O,rh:K,tone:Q,rot:ve=0,garage:De,chimney:ye}=ee,X=new yt,Ye=i.neighbor.clone();Ye.color.setHex(Q).multiplyScalar(1.9);let Ke=new En(He,O,E);Ya(Ke,{oy:O/2});let ct=new Fe(Ke,Ye);ct.position.y=O/2,ct.castShadow=!0,ct.receiveShadow=!0,X.add(ct);let ut=new Ei;ut.moveTo(-He/2-.5,0),ut.lineTo(He/2+.5,0),ut.lineTo(0,K),ut.lineTo(-He/2-.5,0);let pt=new Fe(new Rs(ut,{depth:E+1,bevelEnabled:!1}),we);if(pt.position.set(0,O,-E/2-.5),pt.castShadow=!0,pt.receiveShadow=!0,X.add(pt),ye){let Rt=new Fe(new En(.7,2.4,.7),i.stone);Rt.position.set(He*.22,O+K*.55,-E*.1),Rt.castShadow=!0,X.add(Rt)}let Pt=(Rt,Bt,Rn,On,Yn)=>{let An=new zt().compose(new F(Rt,Bt,Rn),new Bn().setFromAxisAngle(new F(0,1,0),On),new F(1,1,1)),ls=new zt().compose(new F(Rt,Bt,Rn).add(new F(Math.sin(On),0,Math.cos(On)).multiplyScalar(-.012)),new Bn().setFromAxisAngle(new F(0,1,0),On),new F(1,1,1));(Yn?lt:ft).push({g:X,m:An}),j.push({g:X,m:ls})},bt=Math.max(2,Math.round(He/2.4));for(let Rt=0;Rt<2;Rt++)for(let Bt=0;Bt<bt;Bt++)De&&Rt===0&&Bt===0||Pt(-He/2+(Bt+.5)*(He/bt),1.5+Rt*2.6,E/2+.02,0,o()>.32);for(let Rt=0;Rt<2;Rt++)Pt(He/2+.02,1.5+Rt*2.6,0,Math.PI/2,o()>.5),Pt(-He/2-.02,1.5+Rt*2.6,0,-Math.PI/2,o()>.5);let st=new Fe(new En(2.2,2.1,.12),i.walnut);if(st.position.set(He/2-1.5,1.05,E/2+.05),X.add(st),De){let Rt=new Fe(new En(2.8,2.3,.14),i.cedar);Rt.position.set(-He/2+1.7,1.15,E/2+.06),X.add(Rt);for(let Bt=1;Bt<4;Bt++){let Rn=new Fe(new En(2.8,.04,.16),i.trim);Rn.position.set(-He/2+1.7,Bt*.575,E/2+.07),X.add(Rn)}}return X.position.set(ne,0,pe),X.rotation.y=ve,a.add(X),_t.push([ne,O+K,pe]),X}let _t=[];[{x:-17,z:-1,w:7.4,d:7,h:5.4,rh:2.6,tone:7304314,garage:!0,chimney:!0},{x:17.5,z:.5,w:6.8,d:6.6,h:4.8,rh:2.4,tone:8023912},{x:-33,z:-2,w:7.2,d:7.5,h:5.2,rh:2.5,tone:6251884,chimney:!0},{x:34,z:0,w:7.6,d:7,h:5.6,rh:2.8,tone:6975608,garage:!0},{x:-49,z:0,w:7,d:7,h:5,rh:2.4,tone:7565679},{x:50,z:-1,w:7,d:7,h:5.2,rh:2.4,tone:6712178,chimney:!0},{x:-66,z:1,w:7,d:7,h:5,rh:2.4,tone:7171954,garage:!0},{x:67,z:0,w:7,d:7,h:5,rh:2.4,tone:7369592},{x:-24,z:40,w:7,d:7,h:5.2,rh:2.5,tone:6975092,rot:Math.PI,garage:!0},{x:-8,z:41,w:7.4,d:7,h:5.4,rh:2.6,tone:7828073,rot:Math.PI,chimney:!0},{x:10,z:40,w:7,d:6.8,h:5,rh:2.4,tone:6843764,rot:Math.PI},{x:28,z:41,w:7.2,d:7,h:5.4,rh:2.6,tone:7500921,rot:Math.PI,garage:!0},{x:46,z:40,w:7,d:7,h:5.2,rh:2.4,tone:7106678,rot:Math.PI}].forEach(Dt),a.updateMatrixWorld(!0);let z=(ee,ne,pe)=>{let He=new Mi(ne,pe,ee.length),E=new zt;return ee.forEach(({g:O,m:K},Q)=>{E.multiplyMatrices(O.matrixWorld,K),He.setMatrixAt(Q,E)}),He.userData.noAO=!1,a.add(He),He},S=new sn(1,1.15),le=new sn(1.16,1.31),he=[];z(lt,S,$e),z(ft,S,Xe),z(j,le,i.trim);let _e=new yt;_e.visible=!1,a.add(_e);let rt=new dn(.05,.05,1,8,1,!0),it=[],Oe=new F(0,12.6,0);_t.forEach(([ee,ne,pe],He)=>{let E=new F(ee,ne+3.4,pe),O=new Ji(new Bi({map:n,transparent:!0,depthWrite:!1,depthTest:!1,opacity:0}));O.position.copy(E),O.renderOrder=12,O.userData.noAO=!0,_e.add(O);let K=new Fe(rt,new Hn({color:new Et(2.2,1.3,.55),transparent:!0,opacity:0,blending:zn,depthWrite:!1,toneMapped:!1}));K.scale.set(1,3.2,1),K.position.set(ee,ne+1.6,pe),K.userData.noAO=!0,K.raycast=()=>{},_e.add(K);let Q=E.clone().lerp(Oe,.5);Q.y+=5+E.distanceTo(Oe)*.18;let ve=new fs([E,E.clone().lerp(Q,.5).setY(Q.y*.9),Q,Q.clone().lerp(Oe,.5).setY(Q.y*.9),Oe]),De=40,ye=new Fe(new ds(ve,De,.07,5,!1),new Hn({color:new Et(2.4,1.4,.6),transparent:!0,opacity:0,blending:zn,depthWrite:!1,toneMapped:!1}));ye.userData.noAO=!0,ye.raycast=()=>{},_e.add(ye);let X=9,Ye=new en;Ye.setAttribute("position",new $t(new Float32Array(X*3),3));let Ke=new Ki(Ye,new Hi({size:.9,map:c,color:new Et(2.4,1.5,.7),transparent:!0,depthWrite:!1,blending:zn,toneMapped:!1}));Ke.frustumCulled=!1,Ke.userData.noAO=!0,Ke.raycast=()=>{},_e.add(Ke),it.push({spr:O,bm:K,tube:ye,segs:De,curve:ve,pts:Ke,n:X,d:E.distanceTo(Oe),delay:0})}),it.sort((ee,ne)=>ee.d-ne.d),it.forEach((ee,ne)=>{ee.delay=ne/it.length});let Ve=new Ji(new Bi({map:n,transparent:!0,depthWrite:!1,depthTest:!1,opacity:0}));Ve.position.copy(Oe).add(new F(0,1.2,0)),Ve.scale.set(4.2,4.2,1),Ve.renderOrder=13,Ve.userData.noAO=!0,_e.add(Ve);let je=new F;function xt(ee,ne){_e.visible=ee>.003,_e.visible&&(Ve.material.opacity=At(0,.15,ee),Ve.scale.setScalar(4.2+Math.sin(ne*3)*.3),it.forEach(pe=>{let He=At(pe.delay*.7,pe.delay*.7+.3,ee);pe.spr.material.opacity=He,pe.spr.scale.setScalar(2.4*(.6+.4*He)),pe.bm.material.opacity=.5*He,pe.bm.scale.y=3.2+6*He,pe.bm.position.y=pe.spr.position.y-pe.bm.scale.y/2-1.6;let E=Math.floor(At(.1+pe.delay*.6,.45+pe.delay*.6,ee)*pe.segs)*5*6;pe.tube.geometry.setDrawRange(0,E),pe.tube.material.opacity=.34*He*(.8+.2*Math.sin(ne*3+pe.delay*9));let O=pe.pts.geometry.attributes.position.array,K=At(.1+pe.delay*.6,.45+pe.delay*.6,ee);for(let Q=0;Q<pe.n;Q++){let ve=(Q/pe.n+ne*.16+pe.delay)%1;if(ve>K){O[Q*3+1]=-999;continue}pe.curve.getPointAt(ve,je),O[Q*3]=je.x,O[Q*3+1]=je.y,O[Q*3+2]=je.z}pe.pts.geometry.attributes.position.needsUpdate=!0,pe.pts.material.opacity=He}))}let D=new on({color:4864555,roughness:.95}),oe=new Hn({color:723724}),fe=[];(()=>{let ee=new yt;ee.position.set(-3.4,0,-11.4),a.add(ee);let ne=7.4,pe=6.4,He=3.1,E=new En(ne,He,pe);Ya(E,{oy:He/2});let O=new Fe(E,i.bb.clone());O.material.color.setScalar(1),O.position.y=He/2,O.castShadow=!0,O.receiveShadow=!0,ee.add(O);let K=new Ei;K.moveTo(-ne/2-.45,0),K.lineTo(ne/2+.45,0),K.lineTo(0,1.9),K.lineTo(-ne/2-.45,0);let Q=new Fe(new Rs(K,{depth:pe+.9,bevelEnabled:!1}),we);Q.position.set(0,He,-pe/2-.45),Q.castShadow=!0,Q.receiveShadow=!0,ee.add(Q);for(let De=0;De<2;De++){let ye=-1.8+De*3.6,X=new Fe(new En(3.1,2.4,.12),i.walnut);X.position.set(ye,1.2,-pe/2-.05),X.castShadow=!0,ee.add(X);for(let ct=1;ct<4;ct++){let ut=new Fe(new En(3.1,.04,.14),i.trim);ut.position.set(ye,ct*.6,-pe/2-.08),ee.add(ut)}let Ye=new Fe(new En(2.7,.3,.14),i.mirror);Ye.position.set(ye,2.05,-pe/2-.09),ee.add(Ye);let Ke=new Fe(new En(3.3,2.55,.1),i.trim);Ke.position.set(ye,1.27,-pe/2-0),ee.add(Ke)}[-3.3,3.3].forEach(De=>{let ye=new Fe(new dn(.07,.08,.26,12),i.sconce);ye.position.set(De,2.55,-pe/2-.2),ye.userData.noAO=!0,ee.add(ye);let X=new Ji(new Bi({map:t,transparent:!0,depthWrite:!1,blending:zn,opacity:0}));X.position.set(De,2.55,-pe/2-.5),X.scale.set(2.2,2.2,1),X.userData.noAO=!0,ee.add(X),fe.push(X)});let ve=new Fe(new sn(1,1),new Hn({map:h,transparent:!0,depthWrite:!1,blending:zn,opacity:0}));ve.rotation.x=-Math.PI/2,ve.position.set(0,.05,-pe/2-2.2),ve.scale.set(10,5,1),ve.userData.noAO=!0,ee.add(ve),fe.pool=ve})();let Re=[-75.2,-49.2,-23.2,2.8,28.8,54.8,80.8];Re.forEach(ee=>{let ne=new yt;ne.position.set(ee,0,-15.5),a.add(ne);let pe=new Fe(new dn(.13,.19,9.8,10),D);pe.position.y=4.9,pe.castShadow=!0,ne.add(pe);let He=new Fe(new En(.12,.12,2.2),D);if(He.position.y=9.2,ne.add(He),[-.85,0,.85].forEach(E=>{let O=new Fe(new dn(.04,.05,.2,8),i.ceramic);O.position.set(0,9.36,E),ne.add(O)}),Math.abs(ee-2.8)<1){let E=new Fe(new dn(.3,.3,.95,14),i.steel);E.position.set(.5,8.35,.2),E.castShadow=!0,ne.add(E);let O=new Fe(new dn(.2,.3,.12,14),i.steel);O.position.set(.5,8.9,.2),ne.add(O)}});let We=[];for(let ee=0;ee<Re.length-1;ee++)[-.85,0,.85].forEach(ne=>{let pe=new F(Re[ee],9.4,-15.5+ne),He=new F(Re[ee+1],9.4,-15.5+ne),E=pe.clone().lerp(He,.5);E.y-=.9,We.push(new ds(new fs([pe,pe.clone().lerp(E,.5).setY(9.4-.45),E,E.clone().lerp(He,.5).setY(9.4-.45),He]),24,.022,4))});{let ee=new F(2.8,9.4,-15.5),ne=new F(2.8,5.4,-4.3),pe=ee.clone().lerp(ne,.5);pe.y-=.7,We.push(new ds(new fs([ee,pe,ne]),20,.026,4))}let k=new Fe(Ss(We),oe);k.castShadow=!1,k.raycast=()=>{},a.add(k);let Le=new yt,de=[],Be={front:null,rear:null},Pe=new yt;(()=>{let ee=new ji({color:1784408,metalness:.65,roughness:.3,clearcoat:1,clearcoatRoughness:.08,envMapIntensity:1.5}),ne=new ji({color:395533,metalness:.2,roughness:.04,clearcoat:1,envMapIntensity:1.8}),pe=new on({color:1052946,roughness:.85}),He=new on({color:12107462,metalness:.9,roughness:.25}),E=new Ei;E.moveTo(-2.3,.28),E.lineTo(-2.38,.6),E.quadraticCurveTo(-2.36,.92,-2.05,.98),E.lineTo(1.35,.98),E.quadraticCurveTo(2.05,.9,2.3,.7),E.lineTo(2.34,.44),E.quadraticCurveTo(2.3,.28,2.1,.28),E.lineTo(-2.3,.28);let O=new Fe(new Rs(E,{depth:1.7,bevelEnabled:!0,bevelThickness:.09,bevelSize:.09,bevelSegments:4,curveSegments:14}),ee);O.geometry.translate(0,0,-.85),O.castShadow=!0,Le.add(O);let K=new Ei;K.moveTo(-1.95,.96),K.quadraticCurveTo(-1.55,1.42,-.95,1.46),K.lineTo(.5,1.44),K.quadraticCurveTo(.95,1.4,1.38,.96),K.lineTo(-1.95,.96);let Q=new Fe(new Rs(K,{depth:1.62,bevelEnabled:!0,bevelThickness:.07,bevelSize:.05,bevelSegments:3,curveSegments:12}),ne);Q.geometry.translate(0,0,-.81),Q.castShadow=!0,Le.add(Q);let ve=new Fe(new nr(1.9,.07,1.6,2,.03),ee);ve.position.set(-.2,1.47,0),Le.add(ve),[[-1.4,.8],[1.4,.8],[-1.4,-.8],[1.4,-.8]].forEach(([bt,st])=>{let Rt=new Fe(new dn(.37,.37,.26,24),pe);Rt.rotation.x=Math.PI/2,Rt.position.set(bt,.37,st*1+Math.sign(st)*.04),Rt.castShadow=!0,Le.add(Rt);let Bt=new Fe(new dn(.23,.23,.27,20),He);Bt.rotation.x=Math.PI/2,Bt.position.copy(Rt.position),Le.add(Bt)});let De=new on({color:1118481,emissive:16777215,emissiveIntensity:.1}),ye=new on({color:2228224,emissive:16722458,emissiveIntensity:.1}),X=new Fe(new En(.06,.05,1.5),De);X.position.set(2.33,.72,0),X.userData.noAO=!0,Le.add(X);let Ye=new Fe(new En(.06,.05,1.5),ye);Ye.position.set(-2.4,.78,0),Ye.userData.noAO=!0,Le.add(Ye),Be.front=De,Be.rear=ye;let Ke=new Fe(new nr(1.8,.07,1.5,2,.03),i.snowRoof);Ke.userData.keep=!0,Ke.position.set(-.2,1.54,0),Le.add(Ke),de.push(Ke);let ct=new Fe(new nr(1,.05,1.45,2,.02),i.snowRoof);ct.userData.keep=!0,ct.position.set(1.6,1,0),ct.rotation.z=-.1,Le.add(ct),de.push(ct),Le.position.set(7.9,0,6.3),Le.rotation.y=-Math.PI/2,a.add(Le);let ut=[new F(5.2,1.2,2.5),new F(5.55,.5,2.85),new F(6.15,.12,3.3),new F(6.7,.4,3.75),new F(7,.82,3.95)],pt=new Fe(new ds(new fs(ut),24,.028,6),new on({color:855310,roughness:.6}));pt.castShadow=!0,Pe.add(pt);let Pt=new Fe(new jn(.05,10,8),new Hn({color:new Et(.4,3,1.2)}));Pt.position.set(5.16,1.5,2.5),Pt.userData.noAO=!0,Pe.add(Pt),Pe.userData.led=Pt,a.add(Pe)})();let ae=r?0:s>=1?2200:900,at=new en,Ze=new Float32Array(ae*3),vt=new Float32Array(ae*2),Ft=[90,40,90];for(let ee=0;ee<ae;ee++)Ze[ee*3]=(o()-.5)*Ft[0],Ze[ee*3+1]=o()*Ft[1],Ze[ee*3+2]=(o()-.5)*Ft[2],vt[ee*2]=.7+o()*1.1,vt[ee*2+1]=o()*6.28;at.setAttribute("position",new $t(Ze,3));let Xt=new Hi({color:16777215,size:.11,map:c,transparent:!0,opacity:.85,depthWrite:!1,blending:zn}),rn=new Ki(at,Xt);rn.frustumCulled=!1,rn.userData.noAO=!0,a.add(rn);let Pn=s>=1&&!r?140:0,Jt=new en,Tn=new Float32Array(Pn*3);for(let ee=0;ee<Pn;ee++)Tn[ee*3]=(o()-.5)*50,Tn[ee*3+1]=o()*22,Tn[ee*3+2]=(o()-.5)*50;Jt.setAttribute("position",new $t(Tn,3));let _n=new Hi({color:14674175,size:.42,map:c,transparent:!0,opacity:.22,depthWrite:!1,blending:zn}),C=new Ki(Jt,_n);C.frustumCulled=!1,C.userData.noAO=!0,a.add(C);let Se=r?0:s>=1?1600:700,$=new en,Ae=new Float32Array(Se*6),Te=new Float32Array(Se),ht=[70,30,70];for(let ee=0;ee<Se;ee++){let ne=(o()-.5)*ht[0],pe=o()*ht[1],He=(o()-.5)*ht[2];Ae.set([ne,pe,He,ne-.04,pe+.7,He],ee*6),Te[ee]=14+o()*6}$.setAttribute("position",new $t(Ae,3));let gt=new fa({color:11455464,transparent:!0,opacity:0,depthWrite:!1}),Ct=new Lr($,gt);Ct.frustumCulled=!1,Ct.userData.noAO=!0,Ct.raycast=()=>{},a.add(Ct);let dt=r?0:s>=1?420:160,Lt=new en,Vt=new Float32Array(dt*3),wn=new Float32Array(dt*2),kn=new Float32Array(dt*3),Vn=[80,22,80],Jn=[[.95,.55,.1],[.85,.3,.08],[.9,.75,.15],[.6,.2,.05]];for(let ee=0;ee<dt;ee++){Vt[ee*3]=(o()-.5)*Vn[0],Vt[ee*3+1]=o()*Vn[1],Vt[ee*3+2]=(o()-.5)*Vn[2],wn[ee*2]=.5+o()*.8,wn[ee*2+1]=o()*6.28;let ne=Jn[ee%4];kn.set(ne,ee*3)}Lt.setAttribute("position",new $t(Vt,3)),Lt.setAttribute("color",new $t(kn,3));let Xn=new Ki(Lt,new Hi({size:.2,vertexColors:!0,map:c,transparent:!0,opacity:.9,depthWrite:!1}));Xn.frustumCulled=!1,Xn.userData.noAO=!0,a.add(Xn);let Wn=[];for(let ee=0;ee<22;ee++){let ne=new Ji(new Bi({map:l,transparent:!0,depthWrite:!1,opacity:0,color:12568276}));ne.userData={age:ee/22*6,noAO:!0},ne.renderOrder=5,a.add(ne),Wn.push(ne)}let P=new Fe(be,mt);P.position.set(.9,0,-12.4),P.scale.setScalar(.75),P.castShadow=!0,P.visible=!1,a.add(P);let se=new Set([T,v,I,G,w,N,B,A,P]),Ie=new yt;a.add(Ie),a.children.slice().forEach(ee=>{ee!==Ie&&!se.has(ee)&&Ie.add(ee)});let Me=new F;function Ce(ee){Xt.color.set(ee?6963104:16777215)}function St(ee,ne,pe,He,E,O,K){f.opacity=ee.ground,f.depthWrite=ee.ground>.95,T.visible=ee.ground>.01,M.forEach(ye=>{let X=ee.ground<.99;ye.transparent!==X&&(ye.transparent=X,ye.needsUpdate=!0),ye.opacity=ee.ground,ye.depthWrite=!X}),d.uSnow.value=ee.snow,d.uRoofSnow.value=ee.roofSnow,d.uGrow.value=ee.grow,d.uLeafTint.value.copy(ee.leafTint),xt(ee.beacons||0,ne),P.visible=ee.section>.3,B.visible=ee.snow>.25,ie.forEach(ye=>{ye.visible=ee.grow>.02,ye.castShadow=ee.grow>.5}),de.forEach(ye=>{ye.visible=ee.snow>.5}),Pe.visible=ee.explode<.05,Le.visible=!0;let Q=1-He;Be.front.emissiveIntensity=.1+2.2*Q,Be.rear.emissiveIntensity=.1+3*Q,Pe.userData.led.scale.setScalar(.8+.25*Math.sin(ne*3));let ve=At(.35,.9,ee.ground);Ge.forEach(ye=>{ye.visible=ee.ground>.5||ee.explode>.05}),Z.forEach(ye=>{ye.halo.material.opacity=.75*Q,ye.pool.material.opacity=.55*Q*ve}),Ne.intensity=55*Q,qe.intensity=40*Q,q.color.setRGB(3.2,2.2,1.1).multiplyScalar(.06+.94*Q),fe.forEach(ye=>{ye.material.opacity=.5*Q}),fe.pool.material.opacity=.4*Q*ve,Je.forEach((ye,X)=>{ye.material.opacity=.5*Q*Yt(It(K,X),0,1)*(1-ee.ghost)*ve}),$e.opacity=Q*.9,rn.position.set(E.x,0,E.z),C.position.set(E.x,0,E.z),Ct.position.set(E.x,0,E.z),Xn.position.set(E.x,0,E.z);let De=ee.snowfall;if(rn.visible=C.visible=De>.02&&ae>0,rn.visible){let ye=at.attributes.position.array;for(let Ye=0;Ye<ae;Ye++)ye[Ye*3+1]-=vt[Ye*2]*pe*1.5,ye[Ye*3]+=Math.sin(ne*.7+vt[Ye*2+1])*pe*.3,ye[Ye*3+2]+=Math.cos(ne*.5+vt[Ye*2+1])*pe*.2,ye[Ye*3+1]<0&&(ye[Ye*3+1]=Ft[1]);at.attributes.position.needsUpdate=!0;let X=Jt.attributes.position.array;for(let Ye=0;Ye<Pn;Ye++)X[Ye*3+1]-=.8*pe,X[Ye*3+1]<0&&(X[Ye*3+1]=22);Jt.attributes.position.needsUpdate=!0,Xt.opacity=.8*De*(1-He*.45),_n.opacity=.2*De*(1-He*.5)}if(Ct.visible=ee.rain>.02&&Se>0,Ct.visible){let ye=$.attributes.position.array;for(let X=0;X<Se;X++){let Ye=Te[X]*pe;ye[X*6+1]-=Ye,ye[X*6+4]-=Ye,ye[X*6+4]<0&&(ye[X*6+1]+=ht[1],ye[X*6+4]+=ht[1])}$.attributes.position.needsUpdate=!0,gt.opacity=.32*ee.rain}if(Xn.visible=ee.leaves>.02&&dt>0,Xn.visible){let ye=Lt.attributes.position.array;for(let X=0;X<dt;X++)ye[X*3+1]-=wn[X*2]*pe*.9,ye[X*3]+=(Math.sin(ne*.9+wn[X*2+1])*.7+.35)*pe,ye[X*3+2]+=Math.cos(ne*.6+wn[X*2+1])*.4*pe,ye[X*3+1]<0&&(ye[X*3+1]=Vn[1]);Lt.attributes.position.needsUpdate=!0,Xn.material.opacity=.9*ee.leaves}Wn.forEach(ye=>{ye.userData.age+=pe*.55,ye.userData.age>6&&(ye.userData.age-=6);let X=ye.userData.age/6;Me.copy(O),Me.y+=X*5.2,Me.x+=X*2.2+Math.sin(X*5+ye.id)*.18,Me.z+=Math.cos(X*3+ye.id)*.15,ye.position.copy(Me),ye.scale.setScalar(.5+X*2.6),ye.material.opacity=Math.sin(Math.PI*Math.min(1,X*1.3))*.34*ee.smoke*(.5+.5*Q)})}let It=(ee,ne)=>ee-ne*.3;return{world:a,ground:T,groundMat:f,U:d,update:St,lamps:Z,setThermal:Ce,evGroup:Le,props:Ie,sight:wm}}var fi={wire:16761963,cold:5220095,hot:16739151,drain:10135476,supply:9433288,ret:9083903,radon:14257407},Gf=2.4;function Am({house:i,reduce:e}){let t=(w,U,N)=>new F(w,U,N),n=jr("rgba(255,255,255,0.6)"),s={netE:[],netW:[],netA:[],netR:[]},r={netE:[],netW:[],netA:[],netR:[]},a={};Object.keys(s).forEach(w=>{a[w]=new yt,a[w].visible=!1,a[w].userData.noAO=!0,i.add(a[w])});let o=w=>{let U=new Co;for(let N=1;N<w.length;N++)U.add(new da(w[N-1],w[N]));return U};function c(w,U,N,B,Z){let H=o(U.map(Je=>t(Je[0],Je[1],Je[2]))),Y=H.getLength(),q=Math.max(6,Math.round(Y*7)),W=6,J=new Hn({color:N,toneMapped:!1,fog:!1,transparent:!0});J.color.multiplyScalar(1.5);let ge=new Fe(new ds(H,q,B,W,!1),J),Ne=new Hn({color:N,transparent:!0,opacity:.2,blending:zn,depthWrite:!1,toneMapped:!1,fog:!1});Ne.color.multiplyScalar(Gf);let qe=new Fe(new ds(H,q,B*3.4,W,!1),Ne);ge.renderOrder=7,qe.renderOrder=8,ge.userData.noAO=qe.userData.noAO=!0,ge.raycast=qe.raycast=()=>{},a[w].add(ge,qe),s[w].push({tube:ge,glow:qe,segs:q,radial:W,gmat:Ne}),Z&&r[w].push({curve:H,len:Y,n:Math.max(3,Math.round(Y*Z.density)),speed:Z.speed,color:Z.color||N})}let l=[];for(let w=0;w<=10;w++){let U=w/10;l.push([2.8,ot(9.1,7.7,U)-1*Math.sin(Math.PI*U),ot(-15.5,-4.45,U)])}c("netE",[...l,[2.8,1.45,-4.3],[2.8,-.35,-4.3],[2.8,-.35,-3.86],[2.8,-.72,-3.86]],fi.wire,.045,{density:2.2,speed:6});let h=[2.8,-.72,-3.78],d=[2.8,-.2,-3.78];c("netE",[h,d,[2.2,-.2,-3.78],[2.2,1.35,-3.9],[4.6,1.35,-3.9]],fi.wire,.032,{density:2.5,speed:5}),c("netE",[h,d,[4.94,-.2,-3.78],[4.94,-.2,3.7],[4.94,.6,3.92],[1.45,.6,3.92],[1.45,2.45,3.92],[.05,2.45,3.92],[.05,.6,3.92],[-4.94,.6,3.92],[-4.94,.6,-3.2]],fi.wire,.032,{density:2.5,speed:5}),c("netE",[h,d,[4.94,-.2,-3.78],[4.94,3.85,-3.78],[4.94,3.85,3.92],[-4.94,3.85,3.92],[-4.94,3.85,-2.4]],fi.wire,.032,{density:2.5,speed:5}),c("netE",[h,d,[1.28,-.2,-3.78],[1.28,-.2,-1],[1.28,3.05,-1],[-1.5,3.05,-1],[-1.5,3.05,.5]],fi.wire,.03,{density:2.5,speed:5}),c("netE",[[1.28,3.05,-1],[3,3.05,-1],[3,3.05,-1.6]],fi.wire,.03,{density:2.5,speed:5}),c("netE",[h,d,[4.94,-.2,-3.78],[4.94,-.2,2.5],[4.94,1.3,2.5],[5.1,1.3,2.5]],fi.wire,.034,{density:2.5,speed:5}),c("netW",[[-.5,-2.2,16],[-.5,-2.2,3.75],[-.5,-.32,3.75],[-.5,-.32,-3],[-1.95,-.32,-3],[-1.95,-1.35,-3]],fi.cold,.072,{density:2,speed:2.4}),c("netW",[[-.5,-.32,-3.2],[2.4,-.32,-3.2],[2.4,-.32,-3.7],[2.4,1.05,-3.7]],fi.cold,.051,{density:2,speed:2.4}),c("netW",[[-.5,-.32,-3.45],[-2.3,-.32,-3.45],[-2.3,3.95,-3.45],[-2.3,3.95,-3.62]],fi.cold,.051,{density:2,speed:2.4}),c("netW",[[-2.3,3.6,-3.45],[-3.4,3.6,-3.45]],fi.cold,.051,{density:2,speed:2.4}),c("netW",[[-2.2,-1.35,-3],[-2.2,-.46,-3],[-2.2,-.46,-3.32],[2.55,-.46,-3.32],[2.55,-.46,-3.72],[2.55,1.05,-3.72]],fi.hot,.051,{density:2,speed:2.4}),c("netW",[[-2.2,-.46,-3.32],[-2.47,-.46,-3.32],[-2.47,3.95,-3.32],[-2.47,3.95,-3.6]],fi.hot,.051,{density:2,speed:2.4}),c("netW",[[-2.47,3.6,-3.32],[-3.5,3.6,-3.32]],fi.hot,.051,{density:2,speed:2.4}),c("netW",[[-3.6,3.48,-3.62],[-2.6,3.48,-3.62],[-2.6,-2.95,-3.62],[.6,-2.95,-3.62],[.6,-3.2,-4.3],[.6,-3.45,-9.5]],fi.drain,.087,{density:1.6,speed:2.8}),c("netW",[[2.6,.95,-3.86],[2.6,-2.9,-3.86],[.75,-2.9,-3.86]],fi.drain,.072,{density:1.6,speed:2.8}),c("netW",[[-2.6,3.48,-3.62],[-2.6,10.2,-3.62]],fi.drain,.065,null);let p=[-3.3,-1.15,-2.6],u=[-3.3,-.12,-2.6];c("netA",[p,u,[2.6,-.12,-2.6],[4.4,-.12,-2.6],[4.4,-.12,-1.2],[4.4,.34,-1.2]],fi.supply,.091,{density:1.6,speed:3.2}),c("netA",[u,[-2,-.12,-2.6],[-2,-.12,3.4],[-2,.34,3.4]],fi.supply,.078,{density:1.6,speed:3.2}),c("netA",[[3.1,-.12,-2.6],[3.1,-.12,3.45],[3.1,.34,3.45]],fi.supply,.078,{density:1.6,speed:3.2}),c("netA",[[1.28,-.12,-2.6],[1.28,3.35,-2.6],[3.8,3.35,-2.6],[3.8,3.35,2.9],[3.8,3.52,2.9]],fi.supply,.078,{density:1.6,speed:3.2}),c("netA",[[1.28,3.35,-2.6],[-3.8,3.35,-2.6],[-3.8,3.35,2],[-3.8,3.52,2]],fi.supply,.078,{density:1.6,speed:3.2}),c("netA",[[-1.75,5.6,1],[-1.75,-.32,1],[-3.3,-.32,1],[-3.3,-.32,-2.15],[-3.3,-1.05,-2.15]],fi.ret,.091,{density:1.6,speed:2.4}),c("netR",[[-1.2,-2.92,-1.5],[-1.2,11.6,-1.5]],fi.radon,.075,{density:2.2,speed:2.6});let f={},x=new Et,g=new Et(16777215);Object.keys(r).forEach(w=>{let U=r[w];if(!U.length)return;let N=U.reduce((W,J)=>W+J.n,0),B=new en;B.setAttribute("position",new $t(new Float32Array(N*3),3));let Z=new Float32Array(N*3),H=0;U.forEach(W=>{x.set(W.color).lerp(g,.45).multiplyScalar(Gf);for(let J=0;J<W.n;J++,H++)Z[H*3]=x.r,Z[H*3+1]=x.g,Z[H*3+2]=x.b}),B.setAttribute("color",new $t(Z,3));let Y=new Hi({size:w==="netE"?.2:.26,map:n,vertexColors:!0,transparent:!0,depthWrite:!1,blending:zn,toneMapped:!1,fog:!1}),q=new Ki(B,Y);q.frustumCulled=!1,q.renderOrder=9,q.raycast=()=>{},a[w].add(q),f[w]=q});let m=e?0:260,_=new en,b=new Float32Array(m*3),y=new Float32Array(m),M=t(-1.2,-2.95,-1.5),T=w=>{b[w*3]=(Math.random()-.5)*9.4,b[w*3+1]=-3.05-Math.random()*1.6,b[w*3+2]=(Math.random()-.5)*7.4,y[w]=.4+Math.random()*.8};for(let w=0;w<m;w++)T(w);_.setAttribute("position",new $t(b,3));let R=new Hi({color:new Et(fi.radon).multiplyScalar(Gf),size:.2,map:jr("rgba(217,140,255,0.6)"),transparent:!0,opacity:0,depthWrite:!1,blending:zn,toneMapped:!1,fog:!1}),v=new Ki(_,R);v.frustumCulled=!1,v.raycast=()=>{},a.netR.add(v);let A=new F,I={netE:1,netW:1,netA:1,netR:1};function G(w,U,N,B){let Z=w.explode<.06;if(Object.keys(s).forEach(H=>{let Y=w[H],q=a[H];if(q.visible=Z&&Y>.003,!q.visible)return;let W=!U||U===H?1:.2,J=I[H]=ot(I[H],W,Math.min(1,B*4));s[H].forEach(Ne=>{let qe=Math.floor(Yt(Y,0,1)*Ne.segs)*Ne.radial*6;Ne.tube.geometry.setDrawRange(0,qe),Ne.glow.geometry.setDrawRange(0,qe),Ne.tube.material.opacity=J,Ne.gmat.opacity=(.22+.1*Math.sin(N*3+Ne.segs))*J});let ge=f[H];if(ge){let Ne=ge.geometry.attributes.position.array,qe=0;r[H].forEach(Je=>{for(let mt=0;mt<Je.n;mt++,qe++){let te=(mt/Je.n+N*Je.speed/Je.len)%1;if(te>Y){Ne[qe*3+1]=-999;continue}Je.curve.getPointAt(te,A),Ne[qe*3]=A.x,Ne[qe*3+1]=A.y,Ne[qe*3+2]=A.z}}),ge.geometry.attributes.position.needsUpdate=!0,ge.material.opacity=Yt(Y*3,0,1)*J}}),m&&a.netR.visible){R.opacity=Yt(w.netR*2,0,.9)*I.netR;for(let H=0;H<m;H++){A.set(M.x-b[H*3],M.y-b[H*3+1],M.z-b[H*3+2]);let Y=A.length();if(Y<.25){T(H);continue}A.multiplyScalar(B*y[H]*1.1/Y),b[H*3]+=A.x+Math.sin(N+H)*B*.15,b[H*3+1]+=A.y,b[H*3+2]+=A.z}_.attributes.position.needsUpdate=!0}}return{groups:a,update:G}}var u_=`varying vec3 vW; varying vec3 vN;
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
  gl_FragColor = vec4(toLinear(iron(t + rim)), 1.0); }`;function Cm({scene:i,M:e,skipParents:t,onChange:n}){let s={value:0},r=new Map;function a(p,u=0,f=0){let x=p+"|"+u+"|"+f;return r.has(x)||r.set(x,new Cn({uniforms:{uBase:{value:p},uGrad:{value:u},uBand:{value:f},uTime:s},vertexShader:u_,fragmentShader:h_})),r.get(x)}let o={hvac:.93,"water-heaters":.88,electrical:.6,plumbing:.56,installation:.5,radon:.22,solar:.17,roofing:[.4,.12],foundation:.33,sewer:.3,asbestos:.5};function c(p,u){if(u&&o[u]!==void 0)return a(...[].concat(o[u]));let f=p.userData&&p.userData.th;return f?a(...f):a(.3)}let l=[],h=!1;function d(p){p!==h&&(h=p,i.traverse(u=>{if(u.isSprite&&u.userData.noAO){u.visible=!h&&(u.userData.wasVisible??!0);return}if(!(!(u.isMesh||u.isInstancedMesh)||!u.material)&&!u.userData.noThermal){for(let f=u.parent;f;f=f.parent)if(t.includes(f))return;h?(u.userData.mat0=u.material,u.material=Array.isArray(u.material)?u.material.map(f=>c(f,u.userData.sys)):c(u.material,u.userData.sys)):u.userData.mat0&&(u.material=u.userData.mat0,u.userData.mat0=null)}}),n&&n(h))}return{set:d,time:s,get on(){return h}}}function Pm({M:i,layers:e,glowTex:t}){let n=[],s=(u,f=.7,x=0,g=[.5],m={})=>{let _=new on({color:u,roughness:f,metalness:x,...m});return _.userData.th=g,_},r=(u,f=[.95])=>{let x=new on({color:2236440,emissive:u,emissiveIntensity:0,roughness:.5});return x.userData.th=f,n.push(x),x},a={rug:s(5787722,1),rug2:s(3884628,1),cushion:s(13215610,.95),cushion2:s(9413544,.95),tvBlack:s(789775,.25,.3,[.6]),book1:s(9190190,.8),book2:s(3100522,.8),book3:s(14208440,.8),plant:s(4156218,.9,0,[.3]),pot:s(14209734,.6),sheets:s(15328474,.95),duvet:s(7043718,.95),wood:s(10122320,.55),woodDark:s(4929062,.55),steel:s(11186358,.3,.9,[.55]),quartz:s(15328991,.25,0,[.5]),cabinet:s(3812386,.5,0,[.5]),tile:s(13620952,.4,0,[.4]),bin:s(3829659,.6),bin2:s(12936750,.6),cardboard:s(11570526,.9),tv:r(10274047,[.85]),lamp:r(16762746),pendant:r(16765594),screen:r(13625599,[.8]),led:r(6750105,[.7]),pot:s(14868180,.55)},o=(u,f,x,g,m,_,b,y,M,T=0)=>{let R=new Fe(new nr(u,f,x,2,Math.min(g,u/2-.001,f/2-.001,x/2-.001)),m);return R.position.set(_,b+f/2,y),R.rotation.y=T,R.castShadow=!0,R.receiveShadow=!0,R.userData.noPick=!0,M.add(R),R},c=(u,f,x,g,m,_,b,y=18)=>{let M=new Fe(new dn(u,u,f,y),x);return M.position.set(g,m+f/2,_),M.castShadow=!0,M.receiveShadow=!0,M.userData.noPick=!0,b.add(M),M},l=(u,f,x,g,m,_,b=1)=>{let y=new Fe(new jn(u,14,10),f);return y.position.set(x,g,m),y.scale.y=b,y.castShadow=!0,y.userData.noPick=!0,_.add(y),y},h=(u,f,x,g,m,_=a.woodDark)=>{let b=new yt;return b.position.set(u,f,x),b.rotation.y=g,m.add(b),o(.44,.05,.44,.02,_,0,.44,0,b),[[-.19,-.19],[.19,-.19],[-.19,.19],[.19,.19]].forEach(([y,M])=>c(.02,.44,a.steel,y,0,M,b,8)),o(.44,.45,.04,.02,_,0,.5,-.2,b),b},d=(u,f,x,g,m=1.4)=>{c(.14,.03,a.steel,u,f,x,g,14),c(.015,m,a.steel,u,f,x,g,8);let _=new Fe(new dn(.17,.24,.3,18,1,!0),a.lamp);return _.material.side=li,_.position.set(u,f+m+.05,x),_.userData.noAO=!0,_.userData.noPick=!0,g.add(_),_};(()=>{let u=e.main,f=.3;o(3.4,.02,2.5,.01,a.rug,-2.3,f,.7,u);let x=new yt;x.position.set(-.9,f,.7),x.rotation.y=-Math.PI/2,u.add(x),o(2.3,.4,.95,.1,a.fabric??i.fabric,0,.1,0,x),o(2.3,.45,.25,.1,i.fabric,0,.45,-.38,x),o(.25,.3,.9,.08,i.fabric,-1.07,.3,0,x),o(.25,.3,.9,.08,i.fabric,1.07,.3,0,x),o(.5,.4,.14,.06,a.cushion,-.6,.55,-.1,x),o(.5,.4,.14,.06,a.cushion2,.6,.55,-.1,x),[[-.9,.18],[.9,.18]].forEach(([_])=>{[[-1.05,-.4],[1.05,-.4],[-1.05,.4],[1.05,.4]].forEach(([b,y])=>c(.03,.1,a.woodDark,b,0,y,x,8))}),o(1,.05,.6,.03,a.wood,-2.75,f+.34,.7,u),[[-.4,-.22],[.4,-.22],[-.4,.22],[.4,.22]].forEach(([_,b])=>c(.025,.34,a.woodDark,-2.75+_,f,.7+b,u,8)),h(-2,f,2.5,Math.PI,u,i.fabric2??a.cushion2),o(.4,.5,2,.04,a.woodDark,-4.62,f,.7,u),o(.05,.75,1.5,.015,a.tvBlack,-4.74,f+.95,.7,u);let g=new Fe(new sn(1.4,.68),a.tv);g.rotation.y=Math.PI/2,g.position.set(-4.7,f+1.32,.7),g.userData.noPick=!0,u.add(g),o(.34,2,2.2,.02,a.woodDark,.9,f,-1.8,u),[.5,1,1.5].forEach((_,b)=>{o(.2,.28,1.9,.01,[a.book1,a.book2,a.book3][b],1,f+_+.05,-1.8,u)}),c(.17,.4,a.pot,-4.2,f,3.2,u,14),l(.38,a.plant,-4.2,f+.85,3.2,u,1.3),l(.28,a.plant,-4.3,f+1.15,3.1,u,1.2),d(-.45,f,3.1,u,1.45),o(3,.72,.36,.02,a.cabinet,2.9,f+1.55,-3.7,u),o(.9,.14,.6,.02,a.steel,2.4,f+1.3,-3.58,u),o(.34,.9,.34,.02,a.steel,2.4,f+1.45,-3.7,u),o(2.2,.06,1,.02,a.quartz,3,f+.9,-.6,u),o(2.1,.9,.9,.03,a.cabinet,3,f,-.6,u),[2.4,3,3.6].forEach(_=>{c(.17,.05,a.woodDark,_,f+.62,.35,u,16),c(.025,.62,a.steel,_,f,.35,u,8)}),[2.3,3,3.7].forEach(_=>{c(.006,.7,a.steel,_,f+2.1,-.6,u,4);let b=new Fe(new jn(.15,16,10,0,Math.PI*2,0,Math.PI/2),a.pendant);b.position.set(_,f+2.1,-.6),b.userData.noAO=!0,b.userData.noPick=!0,u.add(b)}),o(1.8,.05,.92,.02,a.wood,3.2,f+.72,2.4,u),[[-.8,-.4],[.8,-.4],[-.8,.4],[.8,.4]].forEach(([_,b])=>c(.035,.72,a.woodDark,3.2+_,f,2.4+b,u,8)),h(2.5,f,1.55,0,u),h(3.9,f,1.55,0,u),h(2.5,f,3.25,Math.PI,u),h(3.9,f,3.25,Math.PI,u);let m=new Fe(new dn(.28,.28,.22,20,1,!0),a.pendant);m.material.side=li,m.position.set(3.2,f+2.15,2.4),m.userData.noAO=!0,m.userData.noPick=!0,u.add(m),c(.006,.55,a.steel,3.2,f+2.2,2.4,u,4),o(1,.45,.38,.03,a.wood,.6,f,3.55,u)})(),(()=>{let u=e.upper,f=3.45;o(2,.42,2.15,.06,a.sheets,2.4,f,-2.55,u),o(1.96,.18,1.55,.08,a.duvet,2.4,f+.38,-2.2,u),o(2,.9,.1,.03,a.woodDark,2.4,f,-3.72,u),o(.6,.22,.38,.08,a.sheets,1.85,f+.5,-3.3,u),o(.6,.22,.38,.08,a.sheets,2.95,f+.5,-3.3,u),[[1],[3.8]].forEach(([g])=>{o(.5,.5,.4,.03,a.woodDark,g,f,-3.55,u),d(g,f+.5,-3.55,u,.34)}),o(2,.02,1.4,.01,a.rug2,2.4,f,-1,u),o(.6,2.3,2,.02,a.woodDark,4.55,f,-1.2,u),o(1.5,.05,.7,.02,a.wood,.6,f+.72,3.35,u),[[-.7,-.3],[.7,-.3],[-.7,.3],[.7,.3]].forEach(([g,m])=>c(.03,.72,a.steel,.6+g,f,3.35+m,u,8)),o(.7,.42,.04,.01,a.tvBlack,.6,f+.98,3.52,u);let x=new Fe(new sn(.64,.36),a.screen);x.position.set(.6,f+1.19,3.495),x.rotation.y=Math.PI,x.userData.noPick=!0,u.add(x),h(.6,f,2.7,Math.PI,u,a.cushion2),o(1.5,.4,2,.06,a.sheets,-3.4,f,2.2,u),o(1.46,.16,1.4,.07,a.cushion2,-3.4,f+.36,2.5,u),o(.9,.9,.5,.03,a.woodDark,-4.55,f,.6,u),o(.9,.02,.06,.01,a.tile,-3.2,f,-2.6,u),o(.42,.34,.6,.12,i.ceramic,-4.4,f,-3.2,u),o(.4,.4,.2,.06,i.ceramic,-4.4,f+.34,-3.5,u),o(.7,.9,.03,.01,i.mirror,-2.4,f+1.2,-3.84,u)})(),(()=>{let u=e.basement,f=-2.8;o(.68,.92,.68,.04,i.white,.5,f,-3.5,u),o(.68,.92,.68,.04,i.white,1.25,f,-3.5,u),c(.2,.03,a.tvBlack,.5,f+.93,-3.15,u,18),c(.2,.03,a.tvBlack,1.25,f+.93,-3.15,u,18),o(.6,.06,.4,.01,a.tvBlack,.88,f+.92,-3.88,u),o(2,.06,.75,.01,a.wood,-4,f+.88,2.6,u),o(1.9,.88,.7,.01,a.cabinet,-4,f,2.6,u),o(.3,.06,.12,.01,a.bin2,-4.4,f+.94,2.55,u),o(.2,.2,.2,.02,a.bin,-3.7,f+.94,2.7,u),o(1.7,2,.42,.01,a.steel,4.25,f,2.9,u,0),[.3,.9,1.5].forEach((g,m)=>{o(.5,.3,.34,.03,[a.bin,a.bin2,a.cardboard][m],3.8,f+g+.05,2.9,u),o(.6,.3,.34,.03,[a.cardboard,a.bin,a.bin2][m],4.5,f+g+.05,2.9,u)}),c(.32,.05,a.tvBlack,.66,f,1.6,u,20),c(.1,.5,a.pvc??i.pvc,.66,f,1.6,u,12);let x=new Fe(new jn(.03,8,6),a.led);x.position.set(.66,f+.58,1.6),x.userData.noAO=!0,x.userData.noPick=!0,u.add(x),o(.5,.4,.4,.02,a.cardboard,-1.4,f,2.9,u,.3),o(.45,.35,.4,.02,a.cardboard,-1.3,f+.4,2.9,u,.1),o(1.6,.02,1.2,.01,a.rug,.4,f,.8,u)})();function p(u,f){let x=Yt(.25+.75*u+f*.3,0,1.1);a.tv.emissiveIntensity=1.3*x,a.screen.emissiveIntensity=1.1*x,a.lamp.emissiveIntensity=2.2*x,a.pendant.emissiveIntensity=2.6*x,a.led.emissiveIntensity=3}return{update:p,glows:n}}var ea=.38;function Im({scene:i,M:e,tier:t,reduce:n}){let s=new yt;s.visible=!1,i.add(s);let r=Nn(55),a=jr("rgba(255,255,255,0.65)"),o=(be,Ge,re)=>new F(be,Ge,re),c=.45,l=.66,h=(()=>{let be=Math.round(1024*Du()),Ge=Math.round(512*Du()),re=document.createElement("canvas");re.width=be,re.height=Ge;let Qe=re.getContext("2d"),ue=Qe.createImageData(be,Ge),me=ue.data,ie=[[0,[58,41,29]],[.5,[92,64,40]],[.62,[150,106,62]],[2.2,[138,98,58]],[2.4,[150,142,120]],[4.6,[124,118,104]],[4.8,[100,112,120]],[7,[90,98,108]],[9,[74,78,86]]],xe=$e=>{let Xe=0;for(;Xe<ie.length-2&&ie[Xe+1][0]<=$e;)Xe++;let[lt,ft]=ie[Xe],[j,Dt]=ie[Xe+1],_t=Yt(($e-lt)/(j-lt),0,1);return[ot(ft[0],Dt[0],_t),ot(ft[1],Dt[1],_t),ot(ft[2],Dt[2],_t)]};for(let $e=0;$e<Ge;$e++)for(let Xe=0;Xe<be;Xe++){let lt=$e/Ge*9+(ei(Xe/90,$e/40,3,11,8,5)-.5)*.7+Math.sin(Xe*.02+$e*.01)*.12,ft=xe(Yt(lt,0,9)),j=(ei(Xe/6,$e/6,2,170,85,9)-.5)*34,Dt=($e*be+Xe)*4;me[Dt]=Yt(ft[0]+j,0,255),me[Dt+1]=Yt(ft[1]+j,0,255),me[Dt+2]=Yt(ft[2]+j*.9,0,255),me[Dt+3]=255}Qe.putImageData(ue,0,0);for(let $e=0;$e<420*Du();$e++){let Xe=105+r()*75;Qe.fillStyle=`rgba(${Xe|0},${Xe*.96|0},${Xe*.86|0},0.85)`,Qe.beginPath(),Qe.ellipse(r()*be,(2.5+r()*2.1)/9*Ge,1.5+r()*3.5,1.2+r()*2.4,r()*3,0,6.3),Qe.fill()}let we=new Zn(re);return we.colorSpace=vn,we.wrapS=Qn,we.anisotropy=8,we})(),d=new on({map:h,roughness:1,metalness:0});h.repeat.set(6,1);let p=new Fe(new sn(240,9),d);p.rotation.y=-Math.PI/2,p.position.set(c+ea,-4.52,0),p.userData.noAO=!0,p.userData.noPick=!0,p.receiveShadow=!1,s.add(p);let u=(()=>{let be=document.createElement("canvas");be.width=4,be.height=256;let Ge=be.getContext("2d"),re=Ge.createLinearGradient(0,0,0,256);re.addColorStop(0,"rgb(74,78,86)"),re.addColorStop(.35,"rgb(24,26,31)"),re.addColorStop(1,"rgb(6,7,9)"),Ge.fillStyle=re,Ge.fillRect(0,0,4,256);let Qe=new Zn(be);return Qe.colorSpace=vn,Qe})(),f=new Fe(new sn(240,60),new Hn({map:u,fog:!1,toneMapped:!1}));f.rotation.y=-Math.PI/2,f.position.set(c+ea,-9.02-30,0),f.userData.noAO=!0,f.userData.noPick=!0,f.raycast=()=>{},s.add(f);let x=new yt;s.add(x);for(let be=0;be<=9;be++){let Ge=new Fe(new En(.04,.05,be%3===0?1.4:.8),new Hn({color:16039294,toneMapped:!1}));Ge.position.set(0,-be,31-(be%3===0?.7:.4)),Ge.userData.noAO=!0,Ge.raycast=()=>{},x.add(Ge)}let g=new Fe(new En(.06,.07,240),new Hn({color:16039294,toneMapped:!1}));g.position.set(c+ea-.02,.02,0),g.userData.noAO=!0,g.raycast=()=>{},s.add(g);let m=(be,Ge=.45,re=.2)=>{let Qe=new on({color:be,roughness:Ge,metalness:re,emissive:be,emissiveIntensity:.12,side:li});return Qe.userData.th=[.3],Qe},_={water:m(4165606,.4,.3),gas:m(15775786,.45,.2),sewer:m(12169888,.8,0),tile:m(15855334,.6,0),roots:m(8017458,.95,0),sump:m(8362672,.5,.3),crack:new Hn({color:new Et(3,.5,.35),toneMapped:!1})};_.roots.emissiveIntensity=0;let b={water:new yt,gas:new yt,sewer:new yt,found:new yt,radon:new yt};Object.values(b).forEach(be=>s.add(be));let y=(be,Ge,re,Qe,ue=0)=>{let me=new fs(be.map(xe=>o(...xe)),!1,"catmullrom",.05),ie=new Fe(new ds(me,ue||Math.max(8,be.length*8),Ge,10,!1),re);return ie.castShadow=!1,ie.userData.noPick=!0,Qe.add(ie),me},M=(be,Ge,re,Qe,ue)=>{let me=o(...be),ie=o(...Ge),xe=me.distanceTo(ie),we=new Fe(new dn(re,re,xe,16,1,!0),Qe);return we.position.copy(me).lerp(ie,.5),we.quaternion.setFromUnitVectors(o(0,1,0),ie.clone().sub(me).normalize()),we.userData.noPick=!0,ue.add(we),new da(me,ie)},T=[];function R(be,Ge,re,Qe,ue,me=.22){let ie=new en;ie.setAttribute("position",new $t(new Float32Array(Ge*3),3));let xe=new Ki(ie,new Hi({size:me,map:a,color:new Et(Qe).multiplyScalar(2.2),transparent:!0,depthWrite:!1,blending:zn,toneMapped:!1}));xe.frustumCulled=!1,xe.userData.noAO=!0,xe.raycast=()=>{},ue.add(xe),T.push({curve:be,n:Ge,speed:re,len:be.getLength(),pts:xe,group:ue})}M([c-12,-2.4,22.8],[c+60,-2.4,22.8],.24,_.water,b.water),M([c-12,-1.3,24.7],[c+60,-1.3,24.7],.11,_.gas,b.gas);let v=y([[l,-2.4,22.8],[l,-2.3,18],[l,-2.2,6],[l,-2.2,3.75]],.075,_.water,b.water,30);R(v,20,2,7320831,b.water,.2);let A=y([[l+.1,-1.3,24.7],[l+.1,-1.3,8],[l+.1,-.3,5.4],[l+.1,.9,4.25]],.055,_.gas,b.gas,30);R(A,16,2.6,16765514,b.gas,.18);let I=new Fe(new En(.3,.4,.2),e.steel);I.position.set(l+.1,1.2,4.25),I.userData.noPick=!0,b.gas.add(I),M([c-12,-3.95,-18.2],[c+60,-3.95,-18.2],.4,_.sewer,b.sewer);let G=y([[l,-3.27,-3.8],[l,-3.35,-9],[l,-3.55,-13],[l,-3.9,-17.9]],.19,_.sewer,b.sewer,30);R(G,18,1.3,13214314,b.sewer,.2);let w=y([[l,-3.3,-5.2],[l,-1,-5.2],[l,.1,-5.2]],.14,_.sewer,b.sewer,10),U=o(l,-3.52,-12.8);[[[.9,-.2,-12.4],[.8,-1.2,-12.2],[l+.04,-2.4,-12.5],[l+.02,-3.2,-12.8],[l,-3.5,-12.9]],[[.9,-.2,-12.4],[.85,-.9,-11.4],[l+.1,-2,-11.5],[l+.04,-3,-12.1],[l,-3.45,-12.6]],[[.9,-.2,-12.4],[.85,-1,-13.5],[l+.12,-2.2,-13.9],[l+.04,-3.1,-13.4],[l,-3.5,-13.1]],[[l+.1,-2.2,-13.8],[l+.05,-2.9,-14.6]],[[l+.12,-2,-11.5],[l+.06,-2.6,-10.5]]].forEach((be,Ge)=>y(be,Ge<3?.1:.05,_.roots,b.sewer,24));let N=new Fe(new Qi(.3,.02,8,28),_.crack);N.position.copy(U),N.rotation.y=Math.PI/2,N.userData.noAO=!0,b.sewer.add(N),[[-4.55],[4.55]].forEach(([be])=>M([c-6,-3.3,be],[c+6.2,-3.3,be],.11,_.tile,b.found)),[[c-6],[c+6.2]].forEach(([be])=>M([be,-3.3,-4.55],[be,-3.3,4.55],.11,_.tile,b.found));let B=y([[l,-3.3,4.55],[l,-3.3,3],[l,-3.1,1.9]],.09,_.tile,b.found,12),Z=new Fe(new dn(.34,.34,.75,22,1,!0),_.sump);Z.position.set(l,-3.05,1.6),Z.userData.noPick=!0,b.found.add(Z);let H=y([[l,-2.55,1.6],[l,-1.2,1.6],[l,-1.2,6.8],[l,.1,6.8]],.075,_.sump,b.found,24);R(B,10,.8,7320831,b.found,.16),R(H,14,1.8,7320831,b.found,.18),y([[.62,-.15,4.27],[.55,-.55,4.27],[.74,-.95,4.27],[.5,-1.4,4.27],[.7,-1.9,4.27],[.52,-2.5,4.27]],.022,_.crack,b.found,30);let Y=new Ji(new Bi({map:Vo("rgba(255,90,70,0.9)","rgba(255,60,40,0)"),transparent:!0,depthWrite:!1,blending:zn,opacity:.6}));Y.position.set(.62,-1.4,4.5),Y.scale.set(2.2,3.4,1),Y.userData.noAO=!0,b.found.add(Y);let q=n?0:t>=1?520:200,W=new en,J=new Float32Array(q*3),ge=new Float32Array(q*2),Ne=be=>{J[be*3]=r()*(ea-.06),J[be*3+1]=-8.6+r()*1.4,J[be*3+2]=(r()-.5)*14-1.5,ge[be*2]=.6+r()*.9,ge[be*2+1]=r()*6.28};for(let be=0;be<q;be++)Ne(be),J[be*3+1]=-8.6+r()*5.6;W.setAttribute("position",new $t(J,3));let qe=new Ki(W,new Hi({size:.42,map:a,color:new Et(14257407).multiplyScalar(2.6),transparent:!0,depthWrite:!1,blending:zn,toneMapped:!1}));qe.frustumCulled=!1,qe.userData.noAO=!0,qe.raycast=()=>{},b.radon.add(qe);let Je={x:-1.2,z:-1.5},mt={ugWater:o(l,-2.4,21),ugGas:o(l+.1,-1.3,14),ugSewer:o(l,-3.7,-16),ugRoots:U.clone(),ugSewerMain:o(l,-3.95,-18.2),ugTile:o(l,-3.3,4.55),ugSump:o(l,-3.1,1.6),ugCrack:o(l,-1.5,4.3),ugRadon:o(-1.2,-6,-1.5),ugMeter:o(l+.1,1.2,4.25),ugMain:o(l,-2.4,22.8),ugGasMain:o(l,-1.3,24.7)},te=o(0,0,0),Ee={cx:-1e3};function Ue(be,Ge,re,Qe){let ue=At(0,1,be.section),me=be.section<.002?-1e3:ot(-60,be.cutX,ue);if(Ee.cx=me,s.visible=be.section>.002,!s.visible)return me;if(p.position.x=me+ea,f.position.x=me+ea,g.position.x=me+ea-.02,x.position.x=me+ea,mt.ugRadon.x=me+ea*.5,Object.entries(b).forEach(([ie,xe])=>{let we=Ge===ie||Ge==="street"&&(ie==="water"||ie==="gas"),$e=!Ge||we?1:.2;xe.userData.al=ot(xe.userData.al??$e,$e,Math.min(1,Qe*5)),xe.traverse(Xe=>{Xe.material&&Xe.material.isMeshStandardMaterial&&(Xe.material.emissiveIntensity=we?.6:.12)})}),_.crack.color.setRGB(3,.5,.35).multiplyScalar(.7+.3*Math.sin(re*5)),T.forEach(ie=>{let xe=ie.group.userData.al??1;if(ie.pts.visible=xe>.02,!ie.pts.visible)return;let we=ie.pts.geometry.attributes.position.array;for(let $e=0;$e<ie.n;$e++){let Xe=($e/ie.n+re*ie.speed/ie.len)%1;ie.curve.getPointAt(Xe,te),we[$e*3]=te.x,we[$e*3+1]=te.y,we[$e*3+2]=te.z}ie.pts.geometry.attributes.position.needsUpdate=!0,ie.pts.material.opacity=xe}),qe.visible=q>0&&(b.radon.userData.al??1)>.2,qe.visible){qe.position.x=me;for(let ie=0;ie<q;ie++){let xe=J[ie*3+1],we=At(-5.8,-3,xe);J[ie*3+1]+=ge[ie*2]*Qe*.8,J[ie*3+2]+=((Je.z-J[ie*3+2])*we*.5+Math.sin(re*.8+ge[ie*2+1])*.1)*Qe,J[ie*3+1]>-2.95&&Ne(ie)}W.attributes.position.needsUpdate=!0,qe.material.opacity=b.radon.userData.al??1}return me}return{group:s,update:Ue,ANCHORS:mt,groups:b,state:Ee}}function kf(i){i.updateWorldMatrix(!0,!0);let e=new zt().copy(i.matrixWorld).invert(),t=new zt,n=new Map,s=[],r=l=>{for(let h=l;h&&h!==i;h=h.parent)if(h.userData.sys||h.userData.keep||h.userData.level)return!0;return!1},a=l=>Array.isArray(l.material)?l.geometry.groups.map(h=>{let d=l.geometry.clone(),p=l.geometry.index;return d.clearGroups(),p?d.setIndex(Array.from(p.array.slice(h.start,h.start+h.count))):d.deleteAttribute("position"),{m:l.material[h.materialIndex],g:d}}):[{m:l.material,g:l.geometry.clone()}];i.traverse(l=>{if(!l.isMesh||l.isInstancedMesh||l===i||!l.material||!l.visible||r(l)||l.children.length||!l.geometry.index&&Array.isArray(l.material)||(Array.isArray(l.material)?l.material:[l.material]).some(d=>!d||d.userData.pane))return;t.multiplyMatrices(e,l.matrixWorld),a(l).forEach(({m:d,g:p})=>{let u=[d.uuid,+l.castShadow,+l.receiveShadow,+!!l.userData.noAO,+!!l.userData.noPick,l.renderOrder].join("|"),f=n.get(u);f||n.set(u,f={m:d,cast:l.castShadow,recv:l.receiveShadow,noAO:!!l.userData.noAO,noPick:!!l.userData.noPick,ro:l.renderOrder,geos:[],owners:new Set}),p.attributes.uv||p.setAttribute("uv",new $t(new Float32Array(p.attributes.position.count*2),2)),p.applyMatrix4(t),f.geos.push(p),f.owners.add(l)}),s.push(l)});let o=0;n.forEach(l=>{if(l.geos.length<2){l.geos.forEach(f=>f.dispose());return}let h=Object.keys(l.geos[0].attributes).filter(f=>l.geos.every(x=>x.attributes[f]));l.geos.forEach(f=>{for(let x of Object.keys(f.attributes))h.includes(x)||f.deleteAttribute(x)});let d=l.geos.some(f=>!f.index)?l.geos.map(f=>f.index?f.toNonIndexed():f):l.geos,p=Ss(d);if(!p)return;p.computeBoundingSphere();let u=new Fe(p,l.m);u.castShadow=l.cast,u.receiveShadow=l.recv,u.renderOrder=l.ro,l.noAO&&(u.userData.noAO=!0),l.noPick&&(u.userData.noPick=!0),i.add(u),o++,l.done=!0});let c=new Set;return n.forEach(l=>{l.done||l.owners.forEach(h=>c.add(h))}),s.forEach(l=>{!c.has(l)&&l.parent&&(l.parent.remove(l),l.geometry.dispose())}),o}function Dm(i,e){i.updateWorldMatrix(!0,!0);let t=new zt().copy(i.matrixWorld).invert(),n=new zt,s=[],r=[];if(i.traverse(c=>{c.isLineSegments&&c.material===e&&r.push(c)}),r.forEach(c=>{let l=c.geometry.clone();for(let h of Object.keys(l.attributes))h!=="position"&&l.deleteAttribute(h);l.applyMatrix4(n.multiplyMatrices(t,c.matrixWorld)),s.push(l)}),s.length<2)return 0;let a=Ss(s.map(c=>c.index?c.toNonIndexed():c));if(!a)return 0;let o=new Lr(a,e);return o.raycast=()=>{},o.userData.noAO=!0,i.add(o),r.forEach(c=>{c.parent&&c.parent.remove(c),c.geometry.dispose()}),r.length}function Lm({M:i,tier:e,glowTex:t,dotTex:n}){let s={value:0},r=(y,M=.6,T=0,R={})=>{let v=new on({color:y,roughness:M,metalness:T,...R});return v.userData.th=[.4],v};function a(){let y=document.createElement("canvas");y.width=y.height=512;let M=y.getContext("2d");M.fillStyle="#b99a6e",M.fillRect(0,0,512,512);let T=7,R=()=>(T=T*16807%2147483647)/2147483647;for(let I=0;I<260;I++){let G=R()*512,w=.03+R()*.07;M.strokeStyle=R()>.5?`rgba(90,62,30,${w})`:`rgba(240,220,180,${w})`,M.lineWidth=.6+R()*2.2,M.beginPath(),M.moveTo(0,G);for(let U=0;U<=512;U+=32)M.lineTo(U,G+Math.sin(U*.012+I)*(2+R()*5));M.stroke()}for(let I=0;I<5;I++){let G=R()*512,w=R()*512,U=4+R()*7,N=M.createRadialGradient(G,w,0,G,w,U*2.4);N.addColorStop(0,"rgba(70,44,20,.55)"),N.addColorStop(1,"rgba(70,44,20,0)"),M.fillStyle=N,M.beginPath(),M.ellipse(G,w,U*2.6,U*1.3,0,0,6.3),M.fill()}let v=new Zn(y);v.colorSpace=vn,v.wrapS=v.wrapT=Qn,v.repeat.set(1/1.2,1/1.2),v.anisotropy=8;let A=new on({map:v,roughness:.82,metalness:0});return A.userData.th=[.45],A}let o=(y,M=1.5,T={})=>r(789776,.5,0,{emissive:y,emissiveIntensity:M,...T}),c={enclosure:r(8093831,.5,.6,{envMapIntensity:.7}),enclosureDark:r(2764082,.62,.5,{envMapIntensity:.6}),galv:r(11186618,.38,.9,{envMapIntensity:1.3}),blackPlastic:r(1184534,.42,.05),greyPlastic:r(4869975,.5,.05),whitePlastic:r(11118238,.55,.02),conduit:r(7304316,.62,.02),bluePlastic:r(3104680,.5,.02),orangePlastic:r(14711338,.5,.02),yellowPlastic:r(15319598,.5,.02),redPlastic:r(12728875,.5,.02),purple:r(8011716,.45,.05,{emissive:5909152,emissiveIntensity:.25}),green:r(3119703,.5,.05),copper:r(14256718,.25,1,{envMapIntensity:1.5}),copperHot:r(13201722,.3,1,{envMapIntensity:1.5,emissive:16742954,emissiveIntensity:.3}),aluminum:r(13225684,.3,1,{envMapIntensity:1.4}),brass:r(13214282,.32,1,{envMapIntensity:1.3}),rubber:r(855568,.85,0),plywood:a(),studs:i.cedar,concrete:i.concrete,slab:i.slab,drywall:i.drywall,steel:i.steel,pvc:i.pvc,castIron:r(2829617,.75,.6),clay:r(10115900,.9,0),hdpe:r(1316378,.35,.1,{envMapIntensity:1.2}),gravel:r(7301730,1,0),soil:r(3812382,1,0),insulPink:r(15311018,1,0),insulYellow:r(14861930,1,0),vermiculite:r(11569738,.95,.15),frost:r(15923199,.35,0,{emissive:12572415,emissiveIntensity:.25}),ice:i.ice,water:new ji({color:2781104,roughness:.06,metalness:0,transparent:!0,opacity:.78,envMapIntensity:1.8,clearcoat:1}),sewage:new ji({color:5916200,roughness:.2,metalness:0,transparent:!0,opacity:.9,envMapIntensity:1.2}),glassClear:new ji({color:14674674,roughness:.03,metalness:0,transparent:!0,opacity:.22,envMapIntensity:2,clearcoat:1}),poly:new ji({color:14542574,roughness:.35,metalness:0,transparent:!0,opacity:.28,envMapIntensity:1.4,side:li,depthWrite:!1}),led:(y=9425830,M=3)=>o(y,M),glow:o};[c.water,c.sewage,c.glassClear,c.poly].forEach(y=>{y.userData.th=[.3]});let l=(y,M,T,R,v,A={})=>(y.position.set(M,T,R),y.castShadow=A.cast!==!1,y.receiveShadow=A.receive!==!1,A.keep&&(y.userData.keep=!0),A.rot&&y.rotation.set(A.rot[0]||0,A.rot[1]||0,A.rot[2]||0),v&&v.add(y),y),h=(y,M,T,R,v=0,A=0,I=0,G,w={})=>{let U=w.r?new nr(y,M,T,2,Math.min(w.r,y/2,M/2,T/2)):new En(y,M,T);return w.uv&&Ya(U,w.uv===!0?{}:w.uv),l(new Fe(U,R),v,A,I,G,w)},d=(y,M,T,R=0,v=0,A=0,I,G={})=>{let w=new dn(G.r2??y,y,M,G.seg||16,1,!!G.open);return G.axis==="x"?w.rotateZ(Math.PI/2):G.axis==="z"&&w.rotateX(Math.PI/2),l(new Fe(w,T),R,v,A,I,G)},p=(y,M,T,R,v,A,I={})=>l(new Fe(new jn(y,I.seg||16,I.seg2||12),M),T,R,v,A,I),u=(y,M,T)=>new F(y,M,T);return{time:s,mats:c,std:r,box:h,cyl:d,sphere:p,tube:(y,M,T,R,v={})=>{let A=new fs(y.map(N=>N.isVector3?N:u(N[0],N[1],N[2])),!1,v.type||"catmullrom",v.tension??.3),I=A.getLength(),G=new ds(A,v.seg||Math.max(8,Math.round(I*(v.density||14))),M,v.radial||8,!1),w=G.attributes.uv;for(let N=0;N<w.count;N++)w.setX(N,w.getX(N)*I);let U=l(new Fe(G,T),0,0,0,R,v);return U.userData.curve=A,U.userData.len=I,U},V:u,flow:(y,M={})=>{let T={value:M.level??1},R=new on({color:M.base??1382170,roughness:M.roughness??.45,metalness:M.metalness??.1,emissive:y,emissiveIntensity:M.intensity??2.2});return R.defines={USE_UV:""},R.userData.level=T,R.userData.th=[.6],R.onBeforeCompile=v=>{v.uniforms.uFlowT=s,v.uniforms.uFlowL=T,v.fragmentShader=v.fragmentShader.replace("#include <common>",`#include <common>
uniform float uFlowT; uniform float uFlowL;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        { float fd = fract(vUv.x * ${(M.dash??3).toFixed(2)} - uFlowT * ${((M.speed??.5)*(M.dash??3)).toFixed(2)});
          float fp = smoothstep(0.0, 0.18, fd) * (1.0 - smoothstep(0.42, 0.6, fd));
          totalEmissiveRadiance *= (${(M.rest??.12).toFixed(2)} + ${(M.gain??1).toFixed(2)} * fp) * uFlowL; }`)},R.customProgramCacheKey=()=>`flow${M.dash??3}_${M.speed??.5}_${M.rest??.12}_${M.gain??1}`,R},atlas:(y,M={})=>{let R=M.width||1024,v=4,A=4,I=0,G={};y.forEach(W=>{v+W.w+4>R&&(v=4,A+=I+4,I=0),G[W.key]={x:v,y:A,w:W.w,h:W.h,c:W},v+=W.w+4,I=Math.max(I,W.h)});let w=2**Math.ceil(Math.log2(A+I+4)),U=document.createElement("canvas");U.width=R,U.height=w;let N=U.getContext("2d"),B=W=>{let J=W.c;if(N.clearRect(W.x,W.y,W.w,W.h),J.bg&&(N.fillStyle=J.bg,N.fillRect(W.x,W.y,W.w,W.h)),J.draw){N.save(),N.translate(W.x,W.y),J.draw(N,W.w,W.h,J),N.restore();return}N.fillStyle=J.color||"#ece6da",N.textAlign=J.align||"center",N.textBaseline="middle";let ge=J.align==="left"?W.x+6:W.x+W.w/2;N.font=`${J.weight||600} ${J.size||Math.round(W.h*.62)}px ${J.font||"ui-monospace, Menlo, Consolas, monospace"}`,J.sub?(N.fillText(J.text,ge,W.y+W.h*.38),N.font=`500 ${Math.round((J.size||W.h*.62)*.5)}px ui-monospace, Menlo, Consolas, monospace`,N.globalAlpha=.75,N.fillText(J.sub,ge,W.y+W.h*.78),N.globalAlpha=1):N.fillText(J.text,ge,W.y+W.h/2+1)};Object.values(G).forEach(B);let Z=new Zn(U);Z.colorSpace=vn,Z.anisotropy=8;let H=new on({map:Z,emissiveMap:Z,emissive:16777215,emissiveIntensity:M.emissive??.35,roughness:.6,transparent:!0,alphaTest:.02,depthWrite:!1});return H.userData.th=[.4],{plane:(W,J,ge,Ne=0,qe=0,Je=0,mt={})=>{let te=G[W],Ee=J*(te.h/te.w),Ue=new sn(J,Ee),be=Ue.attributes.uv;for(let re=0;re<be.count;re++)be.setXY(re,(te.x+be.getX(re)*te.w)/R,1-(te.y+(1-be.getY(re))*te.h)/w);let Ge=l(new Fe(Ue,H),Ne,qe,Je,ge,{cast:!1,receive:!1,...mt});return Ge.renderOrder=3,Ge},set:(W,J,ge,Ne)=>{let qe=G[W];J!==void 0&&(qe.c.text=J),ge!==void 0&&(qe.c.sub=ge),Ne&&Object.assign(qe.c,Ne),B(qe),Z.needsUpdate=!0},mat:H,tex:Z}},particles:(y,M={})=>{let T=e>=1?y:Math.ceil(y*.45),R=new en,v=new Float32Array(T*3);R.setAttribute("position",new $t(v,3));let A=new Hi({size:M.size??.05,map:n,color:new Et(M.color??16777215).multiplyScalar(M.gain??1.6),transparent:!0,depthWrite:!1,blending:M.normal?_a:zn,toneMapped:!1,sizeAttenuation:!0,opacity:M.opacity??1}),I=new Ki(R,A);return I.frustumCulled=!1,I.userData.noAO=!0,I.userData.keep=!0,I.raycast=()=>{},I.userData.n=T,I.userData.pos=v,I},sprite:(y,M,T,R,v,A,I=.8)=>{let G=new Ji(new Bi({map:t,color:y,transparent:!0,depthWrite:!1,blending:zn,opacity:I}));return G.position.set(T,R,v),G.scale.set(M,M,1),G.userData.noAO=!0,G.userData.keep=!0,G.raycast=()=>{},A&&A.add(G),G},bake:y=>{let M=new Map,T=[];y.updateWorldMatrix(!0,!0);let R=new zt().copy(y.matrixWorld).invert(),v=new zt,A=I=>{for(let G=I;G&&G!==y;G=G.parent)if(G.userData.keep)return!0;return!1};return y.traverse(I=>{if(!I.isMesh||I.isInstancedMesh||A(I)||Array.isArray(I.material)||I.children.length)return;let G=I.material.uuid+"|"+ +I.castShadow+ +I.receiveShadow+"|"+I.renderOrder,w=M.get(G);w||M.set(G,w={mat:I.material,cast:I.castShadow,recv:I.receiveShadow,ro:I.renderOrder,geos:[]});let U=I.geometry.index?I.geometry.toNonIndexed():I.geometry.clone();Object.keys(U.attributes).forEach(N=>{N!=="position"&&N!=="normal"&&N!=="uv"&&U.deleteAttribute(N)}),U.attributes.uv||U.setAttribute("uv",new $t(new Float32Array(U.attributes.position.count*2),2)),U.applyMatrix4(v.multiplyMatrices(R,I.matrixWorld)),w.geos.push(U),T.push(I)}),M.forEach(I=>{let G=Ss(I.geos);if(!G)return;let w=new Fe(G,I.mat);w.castShadow=I.cast,w.receiveShadow=I.recv,w.renderOrder=I.ro,w.userData.keep=!0,y.add(w),I.geos.forEach(U=>U.dispose())}),T.forEach(I=>{I.parent&&I.parent.remove(I),I.geometry.dispose()}),y},place:l}}var zr=new F(2.8,-1.25,-3.945),Xf=.0266,Yo=i=>.3-i*Xf,Vf=[[15,1],[15,1],[20,1],[15,1],[15,1],[20,1],[15,1],[15,1],[40,2,"range","RANGE"],[30,2,"dryer","DRYER"],[40,2,"hp","HEAT PUMP"],[30,2,"base","BASEBOARD"],[15,1],[15,1]],Wf=[[15,1,null,null,"AFCI"],[15,1,null,null,"AFCI"],[20,1,null,null,"GFCI"],[20,1],[15,1],[15,1],[20,1],[15,1],[30,2,"wh","WATER HTR"],[30,2,"ac","A/C"],[50,2,"ev","EV CHARGER"],[60,2,"spa","HOT TUB"],[40,2,"suite","SUITE"]];function Nm({kit:i}){let{box:e,cyl:t,tube:n,mats:s,atlas:r}=i,a=new yt,o=2.8,c=-4.3;t(.034,3.7,s.galv,o,3.6,c,a),t(.06,.16,s.galv,o,5.5,c-.02,a,{r2:.03}),e(.1,.05,.16,s.galv,o,5.44,c-.05,a,{rot:[.5,0,0]}),[2.2,3.4,4.6].forEach(p=>e(.12,.03,.2,s.galv,o,p,c+.1,a,{cast:!1})),e(.3,.44,.12,s.enclosure,o,1.45,c+.02,a,{r:.012}),t(.092,.03,s.galv,o,1.5,c-.05,a,{axis:"z",seg:28}),t(.085,.085,s.glassClear,o,1.5,c-.1,a,{axis:"z",seg:28,cast:!1}),t(.074,.006,s.whitePlastic,o,1.5,c-.075,a,{axis:"z",seg:28,cast:!1});let l=r([{key:"kwh",text:"08431",sub:"kWh \xB7 CL200 \xB7 240 V",w:192,h:96,size:46,color:"#0e1014"}],{width:256,emissive:.15}),h=l.plane("kwh",.1,a,o,1.5,c-.0795);h.rotation.y=Math.PI;let d=t(.05,.002,s.aluminum,o,1.452,c-.09,a,{seg:24,cast:!1,keep:!0});return t(.03,1.02,s.conduit,o,.72,c,a),e(.075,.13,.075,s.conduit,o,.17,c,a,{r:.012}),t(.03,.34,s.conduit,o,.15,c+.17,a,{axis:"z"}),n([[o+.11,1.24,c+.03],[o+.13,.6,c+.06],[o+.14,.05,c-.12],[o+.14,-.25,c-.16]],.006,s.copper,a,{radial:6}),t(.011,.5,s.copper,o+.14,-.05,c-.16,a,{seg:8}),i.bake(a),a.add(d),{group:a,disc:d,labels:l}}function Um({kit:i}){let{box:e,cyl:t,tube:n,mats:s,flow:r,atlas:a,V:o}=i,c=new yt;c.position.copy(zr);let l=new yt;c.add(l);let h=[];[15,20,30,40,50,60].forEach(re=>h.push({key:"a"+re,text:String(re),w:96,h:56,size:40,color:"#f4f1ea"})),h.push({key:"a200",text:"200",w:144,h:72,size:56,color:"#f4f1ea"}),[...Vf,...Wf].filter(re=>re[3]).forEach(re=>h.push({key:"n"+re[2],text:re[3],w:224,h:44,size:26,color:"#f4bd7e"})),h.push({key:"AFCI",text:"AFCI",w:112,h:44,size:26,color:"#9fc4ff"},{key:"GFCI",text:"GFCI",w:112,h:44,size:26,color:"#ffe08a"}),h.push({key:"rating",text:"200 A \xB7 120/240 V \xB7 1\xD8 3W",w:420,h:44,size:24,color:"#cfd4da"}),h.push({key:"mon",w:320,h:200,text:"49 A",sub:"of a 100 A service",ratio:.49,draw(re,Qe,ue,me){re.fillStyle="#05070b",re.fillRect(0,0,Qe,ue);let ie=me.ratio>.9?"#ff6b4f":me.ratio>.7?"#f4bd7e":"#8fd3a6";re.textAlign="left",re.textBaseline="middle",re.fillStyle="#8b93a1",re.font="600 17px ui-monospace, Menlo, monospace",re.fillText("DEMAND",20,30),re.fillStyle=ie,re.font="700 74px ui-monospace, Menlo, monospace",re.fillText(me.text,18,92),re.fillStyle="#cfd4da",re.font="500 19px ui-monospace, Menlo, monospace",re.fillText(me.sub,20,146),re.fillStyle="#1c222c",re.fillRect(20,168,Qe-40,14),re.fillStyle=ie,re.fillRect(20,168,(Qe-40)*Math.min(1,me.ratio),14)}}),h.push({key:"dir",w:300,h:420,draw(re,Qe,ue){re.fillStyle="#e9e4d6",re.fillRect(0,0,Qe,ue),re.fillStyle="#1a1c20",re.font="700 20px ui-monospace, Menlo, monospace",re.textAlign="left",re.textBaseline="middle",re.fillText("CIRCUIT DIRECTORY",14,24),re.strokeStyle="rgba(20,22,26,.45)",re.lineWidth=1,re.font="500 13px ui-monospace, Menlo, monospace",["KITCHEN PLUGS","BEDROOM 1 \xB7 AFCI","BEDROOM 2 \xB7 AFCI","BATH \xB7 GFCI","LIVING","FURNACE","RANGE 40A","DRYER 30A","WATER HTR 30A","A/C 30A","EV CHARGER 50A","HOT TUB 60A","HEAT PUMP 40A","SUITE 40A"].forEach((ie,xe)=>{let we=54+xe*25;re.beginPath(),re.moveTo(12,we+12),re.lineTo(Qe-12,we+12),re.stroke(),re.fillText(String(xe+1).padStart(2,"0")+"  "+ie,14,we)})}});let d=a(h,{width:1024,emissive:.22});e(2,1.9,.03,s.plywood,.2,.1,-.015,l,{uv:{ox:1,oy:1}}),e(2.3,2.4,.1,s.concrete,.2,.05,-.085,l,{cast:!1,uv:!0});let p=.4,u=1,f=.1,x=.004;e(p,u,x,s.enclosureDark,0,0,x/2,l),e(x,u,f,s.enclosure,-p/2,0,f/2,l),e(x,u,f,s.enclosure,p/2,0,f/2,l),e(p,x,f,s.enclosure,0,u/2,f/2,l),e(p,x,f,s.enclosure,0,-u/2,f/2,l),t(.03,.92,s.conduit,0,u/2+.46,.045,l),t(.04,.03,s.enclosure,0,u/2+.012,.045,l),e(.19,.125,.026,s.blackPlastic,.42,.3,.013,l,{r:.006});let g=d.plane("mon",.168,c,.42,.3,.0268,{keep:!0});n([[.325,.3,.012],[.27,.31,.014],[.215,.33,.03]],.004,s.rubber,l,{radial:6}),e(.11,.075,.058,s.blackPlastic,0,.39,.035,l,{r:.004});let m=e(.034,.024,.022,i.std(1908773,.4,.1,{emissive:16039294,emissiveIntensity:0}),0,.39,.072,c,{r:.003,keep:!0});d.plane("a200",.05,l,0,.365,.0646),[-.03,.03].forEach(re=>e(.022,.022,.03,s.brass,re,.447,.03,l)),[[-.03,s.rubber],[.03,i.std(9183002,.6)],[.085,s.whitePlastic]].forEach(([re,Qe],ue)=>n([[ue===2?.02:re*.4,.5,.045],[re*.8,.485,.04],[re,.46,.032]],.0075,Qe,l,{radial:8,seg:10}));let _=s.copperHot.clone(),b=[-.012,.012].map(re=>e(.016,.74,.005,_,re,-.02,.012,c,{keep:!0,cast:!1}));[-.03,.03].forEach((re,Qe)=>e(.016,.06,.005,_,re*.7,.36,.012,l,{cast:!1}));let y={},M=s.greyPlastic,T=s.rubber,R=i.std(9183002,.6),v=s.whitePlastic,A=(re,Qe)=>{let ue=0;re.forEach(([me,ie,xe,we,$e])=>{let Xe=ie===2?(Yo(ue)+Yo(ue+1))/2:Yo(ue),lt=ie===2?Xf*2-.002:Xf-.002,ft=Qe*.076;e(.088,lt,.055,s.blackPlastic,ft,Xe,.0325,l,{r:.0025,cast:!1});let j=Qe*.047,Dt=M;xe&&(Dt=i.std(4869975,.5,.05,{emissive:16753981,emissiveIntensity:0}),y[xe]={handle:Dt,level:null,pos:o(ft,Xe,.06),amps:me}),e(.015,ie===2?lt*.72:.0125,.013,Dt,j,Xe,.0655,xe?c:l,{r:.002,cast:!1,keep:!!xe}),d.plane("a"+me,.02,l,Qe*.07,Xe+(ie===2?.009:0),.0603),we&&d.plane("n"+xe,.05,l,Qe*.087,Xe-.011,.0603),$e&&(d.plane($e,.026,l,Qe*.099,Xe,.0603),e(.007,.007,.004,$e==="AFCI"?s.bluePlastic:s.yellowPlastic,Qe*.118,Xe,.062,l,{cast:!1}));for(let _t=0;_t<ie;_t++){let z=ue+_t,S=Yo(z);e(.03,.007,.004,s.copper,Qe*.024+(z%2?.012:-.012)*.3,S,.016,l,{cast:!1});let le=Qe*(.146+z%4*.0045),he=.026+z%3*.008;n([[Qe*.121,S,.034],[Qe*.134,S+.002,he+.004],[le,S+.02,he],[le,.3+z%5*.01,he],[Qe*(.1+z%6*.012),.492,.03+z%2*.04]],.0023,ie===2&&_t===1?R:T,l,{radial:5,seg:14,cast:!1})}ue+=ie})};A(Vf,-1),A(Wf,1),[-1,1].forEach(re=>{e(.012,.52,.008,s.aluminum,re*.176,-.02,.012,l,{cast:!1});for(let Qe=0;Qe<22;Qe++)t(.0034,.004,s.galv,re*.176,.22-Qe*.0225,.018,l,{axis:"z",seg:6,cast:!1});for(let Qe=0;Qe<9;Qe++){let ue=.2-Qe*.05;n([[re*.176,ue,.02],[re*.164,ue+.03,.05+Qe%3*.008],[re*.162,.33,.055+Qe%3*.008],[re*(.06+Qe*.012),.492,.07]],.0023,v,l,{radial:5,seg:12,cast:!1})}}),e(.36,.01,.004,s.aluminum,0,-.3,.008,l,{cast:!1}),e(.18,.012,.008,s.brass,-.05,-.43,.012,l,{cast:!1}),n([[-.1,-.43,.02],[-.13,-.47,.04],[-.13,-.56,.04],[-.2,-.75,.012],[-.7,-.82,.008]],.004,s.copper,l,{radial:6});let I=new yt;I.userData.keep=!0,c.add(I);let G=.0585,w=s.enclosure;e(.07,.98,.003,w,-.159,0,G,I),e(.07,.98,.003,w,.159,0,G,I),e(.056,.66,.003,w,0,-.02,G,I),e(.248,.062,.003,w,0,.459,G,I),e(.064,.094,.003,w,-.092,.381,G,I),e(.064,.094,.003,w,.092,.381,G,I),e(.248,.018,.003,w,0,.323,G,I),e(.248,.292,.003,w,0,-.344,G,I);let U=d.plane("rating",.2,I,0,.462,G+.002),N=new yt;N.userData.keep=!0,N.position.set(-p/2,0,f+.002),c.add(N),e(p,u,.003,s.enclosure,p/2,0,0,N);let B=d.plane("dir",.24,N,p/2,.02,-.003);B.rotation.y=Math.PI,e(.012,.06,.012,s.galv,p-.02,0,.006,N),N.rotation.y=-2.05;let Z={15:s.whitePlastic,20:s.yellowPlastic,30:s.orangePlastic,40:s.rubber,50:s.rubber,60:s.rubber},H={15:r(16763274,{base:12170667,intensity:.7,dash:2.2,speed:.9,rest:0,gain:1,roughness:.6}),20:r(16758863,{base:13215008,intensity:.7,dash:2.2,speed:.9,rest:0,gain:1,roughness:.6})},Y=.955,q=0,W=(re,Qe,ue)=>{let me=q++,ie=-.17+me%13*.028,xe=.028+me%2*.042,we=re>=40?.0085:re===30?.0065:.0052,$e=[[ie,.5,xe],[ie,.66+me%3*.03,xe],[ie*1.4,Y-.06,xe+.05],[ie*1.6,Y,xe+.16+me%4*.03]],Xe=.3+me%7*.035,lt=ue==="south"?[[-.6,Y,Xe],[-2.2,Y,Xe],[-5.4,Y,Xe+.2]]:ue==="north"?[[.6,Y,Xe],[1.6,Y,Xe],[2.1,Y,Xe+1.2],[2.1,Y,5.5]]:ue==="east"?[[ie*1.2,Y,.9],[ie,Y,3.2],[ie+.6,Y,7.4]]:ue==="up"?[[-.42,Y+.1,.3],[-.42,Y+.9,.34]]:[[.5,Y,.2],[.62,Y+.02,.02],[.62,Y+.02,-.4]],ft=Z[re];Qe&&y[Qe]?(ft=r(16753981,{base:1513757,intensity:2.6,dash:1.6,speed:1.1,rest:0,gain:1,level:0}),y[Qe].level=ft.userData.level):H[re]&&(ft=H[re]),n([...$e,...lt],we,ft,l,{radial:7,density:9,tension:.35,cast:me%3===0})},J=["south","north","south","east","north","south","north","south"];Vf.filter(re=>!re[2]).forEach((re,Qe)=>W(re[0],null,J[Qe%J.length])),Wf.filter(re=>!re[2]).forEach((re,Qe)=>W(re[0],null,J[(Qe+3)%J.length])),W(40,"range","up"),W(30,"dryer","south"),W(40,"hp","south"),W(30,"base","north"),W(30,"wh","south"),W(30,"ac","out"),W(50,"ev","east"),W(60,"spa","out"),W(40,"suite","north"),e(2.4,.02,.09,s.studs,-.4,Y+.012,.5,l,{uv:!0,cast:!1});let ge=o(.72,-.2,0);e(.06,.098,.062,s.bluePlastic,ge.x,ge.y,.031,l,{r:.004});let Ne=new yt;Ne.position.set(ge.x+.012,ge.y-.004,.118),Ne.rotation.set(.12,-.5,.06),Ne.userData.keep=!0,c.add(Ne),e(.034,.104,.024,s.whitePlastic,0,0,0,Ne,{r:.004}),e(.04,.118,.0016,s.galv,0,0,.0128,Ne),[.028,-.028].forEach(re=>{e(.004,.011,.002,s.rubber,-.006,re,.0125,Ne,{cast:!1}),e(.004,.011,.002,s.rubber,.006,re,.0125,Ne,{cast:!1})}),[.012,-.012].forEach(re=>{t(.0035,.004,s.brass,.0185,re,-.004,Ne,{axis:"x",seg:8}),t(.0035,.004,s.aluminum,-.0185,re,-.004,Ne,{axis:"x",seg:8})}),n([[ge.x-.01,.62,.012],[ge.x-.012,.2,.014],[ge.x-.008,ge.y+.05,.02]],.0058,s.greyPlastic,l,{radial:7});let qe=[];[[-1,s.aluminum],[1,s.aluminum]].forEach(([re,Qe])=>{let ue=o(ge.x+re*.03,ge.y+.012*re+.02,.085+(re>0?.012:0));n([[ge.x-.008+re*.004,ge.y+.045,.022],[ge.x+re*.02,ge.y+.05,.05],[ue.x,ue.y+.016,ue.z]],.0019,Qe,l,{radial:6,seg:12,cast:!1});let me=t(.0078,.027,s.purple,ue.x,ue.y,ue.z,c,{seg:12,keep:!0});qe.push(me),t(.0086,.006,s.purple,ue.x,ue.y+.0135,ue.z,l,{seg:12}),n([[ue.x,ue.y+.014,ue.z],[ue.x+re*.012,ue.y+.03,ue.z+.012],[ge.x+.012+re*.026,ge.y+.006*re,.1],[ge.x+.012+re*.02,ge.y-.004+.012*re,.112]],.0017,s.copper,l,{radial:6,seg:14,cast:!1})}),i.bake(l);let Je={meter:o(2.8,1.5,-4.42),main:zr.clone().add(o(0,.39,.075)),bus:zr.clone().add(o(0,-.06,.02)),branch:zr.clone().add(o(-.076,Yo(3),.06)),range:zr.clone().add(y.range.pos),ev:zr.clone().add(y.ev.pos),spa:zr.clone().add(y.spa.pos),alu:zr.clone().add(o(ge.x+.03,ge.y+.03,.09)),afci:zr.clone().add(o(.099,Yo(.5),.06)),load:zr.clone().add(o(.33,.35,.03))},mt={fx:2.8,fz:-3.9,time:19.4,cut:0,ghost:0,ground:1,orbit:.012},te=[{...mt,radius:15,theta:3.42,phi:1.4,ty:2.8,fz:-4.2,dof:0,orbit:.03,time:15.5},{...mt,radius:3.4,theta:3.5,phi:1.72,ty:1.95,fz:-4.35,dof:.8,time:15.5},{...mt,radius:1.5,theta:.3,phi:1.44,ty:-1,dof:1.2},{...mt,radius:1.45,theta:-.28,phi:1.47,ty:-1.24,dof:1.3},{...mt,radius:1.75,theta:.34,phi:1.74,ty:-.98,fz:-3.8,dof:1.1},{...mt,radius:1.15,theta:1,phi:1.5,ty:-1.3,fx:3.45,dof:1},{...mt,radius:1.85,theta:.2,phi:1.6,ty:-.98,fx:3,fz:-3.8,dof:1}],Ee=new Set(["range","dryer","ac"]),Ue="",be=0,Ge=["range","ev","spa"];return{name:"panel",group:c,anchors:Je,shots:te,hides:re=>re.sys.electrical?re.sys.electrical.meshes:[],input(re){if(re&&(re.on&&(Ee=new Set(re.on)),re.amps!==void 0&&re.service)){let Qe=`${Math.round(re.amps)} A`,ue=`of a ${re.service} A service`;Qe+ue!==Ue&&(Ue=Qe+ue,d.set("mon",Qe,ue,{ratio:re.amps/re.service}))}},light(re){return re===0?{pos:[2.2,3.4,-7.4],at:[2.8,1.6,-4.3],power:0}:re===1?{pos:[2.2,3.4,-7.4],at:[2.8,1.6,-4.3],power:.55,fill:.3}:re===5?{pos:[2.9,-.45,-2.2],at:[3.52,-1.45,-3.9],power:.8}:{pos:[1.5,-.5,-1.7],at:[2.8,-1.2,-3.9],power:1}},update({step:re,k:Qe,t:ue,dt:me,snap:ie}){let xe=ie?1:1-Math.exp(-me*5);be=ot(be,re===3||re===4?1:0,xe);let we=At(0,1,be);I.position.set(.52*we,-.99*we,.2*Math.sin(Math.PI*we)+.075*we),I.rotation.set(-.13*we,0,-.05*we),_.emissiveIntensity=.08+.26*we+(re===3?.12*Math.sin(ue*2.2):0),m.material.emissiveIntensity=re===2?.4+.2*Math.sin(ue*3):.06;let $e=re===3?1:re===6?.35:.12;Object.values(H).forEach(Xe=>{Xe.userData.level.value=ot(Xe.userData.level.value,$e,xe)}),Object.entries(y).forEach(([Xe,lt])=>{let ft=re===4?Ge.includes(Xe)?1:0:re===6&&Ee.has(Xe)?1:0;lt.level&&(lt.level.value=ot(lt.level.value,ft,xe)),lt.handle.emissiveIntensity=ot(lt.handle.emissiveIntensity,ft*2.4,xe)}),qe.forEach((Xe,lt)=>{Xe.scale.setScalar(re===5?1+.08*Math.sin(ue*4+lt):1)}),U.visible=we<.9}}}var yc=Math.atan2(3.6,5),qf=Math.cos(yc),Fm=Math.sin(yc),f_=3.6/5,Gu=9.9324,wa=i=>Gu-Math.abs(i)*f_,Fs=(i,e,t=0,n=new F)=>n.set(i*qf+e*Fm,Gu-i*Fm+e*qf,t),Qt=.2,d_=6.805,vc=Array.from({length:13},(i,e)=>-3.6+e*.6),ti={z0:-2.4,z1:-.6,y0:4.35,y1:5.75},qo={x:5.466,y:5.723},xi={x:.75,z:.95,rx:.52,rz:.44},Dn={x:2.55,z:-.9},qa=4.78,Yf=6.8;function yr(i,e,t,n={}){let s=document.createElement("canvas");s.width=i,s.height=e,t(s.getContext("2d"),i,e);let r=new Zn(s);return n.color!==!1&&(r.colorSpace=vn),r.wrapS=r.wrapT=n.clamp?ws:Qn,r.anisotropy=8,n.repeat&&r.repeat.set(n.repeat[0],n.repeat[1]),r}function Om({kit:i,H:e,tier:t}){let{box:n,cyl:s,tube:r,mats:a,std:o,atlas:c,V:l}=i,h=new yt;h.name="attic";let d=new yt;h.add(d);let p=t===0,u=Nn(17),f=new F,x=new F,g=(E,O)=>{let K=new yt;return K.position.set(0,Gu,0),K.rotation.set(0,O?Math.PI:0,-yc),E.add(K),K},m=g(d),_=g(d,!0),b=new on({roughness:.86,map:yr(512,256,(E,O,K)=>{E.fillStyle="#b48d58",E.fillRect(0,0,O,K);let Q=Nn(21);for(let ve=0;ve<1500;ve++){let De=Q()*O,ye=Q()*K,X=12+Q()*36,Ye=3+Q()*8,Ke=Q();E.fillStyle=Ke<.4?`rgba(118,80,38,${.22+Q()*.3})`:Ke<.85?`rgba(218,182,124,${.22+Q()*.3})`:`rgba(78,52,24,${.35+Q()*.3})`,E.save(),E.translate(De,ye),E.rotate((Q()-.5)*1.2+(Q()>.5?0:Math.PI/2)),E.fillRect(-X/2,-Ye/2,X,Ye),E.restore()}E.fillStyle="rgba(48,30,14,.85)",E.fillRect(0,0,O,2),E.fillRect(0,0,2,K)},{repeat:[1/2.4,1/1.2]})});b.userData.th=[.4];let y=o(16777215,.78,0,{map:yr(256,256,(E,O,K)=>{E.fillStyle="#cdae78",E.fillRect(0,0,O,K);let Q=Nn(33);for(let ve=0;ve<70;ve++){let De=Q()*K,ye=.06+Q()*.12;E.strokeStyle=Q()>.4?`rgba(122,84,40,${ye})`:`rgba(246,226,182,${ye})`,E.lineWidth=.6+Q()*2.4,E.beginPath(),E.moveTo(0,De);for(let X=0;X<=O;X+=16)E.lineTo(X,De+Math.sin(X*.024+ve)*2.5);E.stroke()}for(let ve=0;ve<2;ve++){let De=Q()*O,ye=Q()*K,X=E.createRadialGradient(De,ye,0,De,ye,9);X.addColorStop(0,"rgba(96,58,24,.7)"),X.addColorStop(1,"rgba(96,58,24,0)"),E.fillStyle=X,E.fillRect(De-12,ye-6,24,12)}},{repeat:[1/1.6,1/.4]})}),M=yr(256,256,(E,O,K)=>{E.fillStyle="#808080",E.fillRect(0,0,O,K);let Q=Nn(5);for(let ve=0;ve<700;ve++){let De=Q()*O,ye=Q()*K,X=2+Q()*10,Ye=Q()<.5?255:0;for(let Ke of[-O,0,O])for(let ct of[-K,0,K]){if(De+Ke<-X||De+Ke>O+X||ye+ct<-X||ye+ct>K+X)continue;let ut=E.createRadialGradient(De+Ke,ye+ct,0,De+Ke,ye+ct,X);ut.addColorStop(0,`rgba(${Ye},${Ye},${Ye},0.22)`),ut.addColorStop(1,`rgba(${Ye},${Ye},${Ye},0)`),E.fillStyle=ut,E.fillRect(De+Ke-X,ye+ct-X,X*2,X*2)}}},{color:!1,repeat:[2.5,2.5]}),T=o(13483416,1,0,{bumpMap:M,bumpScale:3}),R=yr(512,512,(E,O,K)=>{E.fillStyle="#000",E.fillRect(0,0,O,K);let Q=Nn(8);E.strokeStyle="#fff",E.lineCap="round";for(let ve=0;ve<900;ve++){let De=Q()*O,ye=Q()*K,X=Q()*6.28,Ye=6+Q()*24;E.globalAlpha=.3+Q()*.6,E.lineWidth=.8+Q()*1.4;let Ke=De+Math.cos(X)*Ye,ct=ye+Math.sin(X)*Ye;E.beginPath(),E.moveTo(De,ye),E.lineTo(Ke,ct);for(let ut=1;ut<5;ut++){let pt=ut/5,Pt=De+(Ke-De)*pt,bt=ye+(ct-ye)*pt,st=Ye*.32*(1-pt)+2;E.moveTo(Pt,bt),E.lineTo(Pt+Math.cos(X+.7)*st,bt+Math.sin(X+.7)*st),E.moveTo(Pt,bt),E.lineTo(Pt+Math.cos(X-.7)*st,bt+Math.sin(X-.7)*st)}E.stroke()}E.globalAlpha=.28,E.fillStyle="#fff",E.fillRect(0,0,O,K)},{color:!1,repeat:[4,4]}),v=o(15660543,.45,0,{alphaMap:R,transparent:!0,depthWrite:!1,emissive:11455487,emissiveIntensity:.12,side:li}),A=o(15923199,.35,0,{emissive:12572415,emissiveIntensity:.22}),I=o(13226970,.62,.02),G=o(16777215,.55,.3,{map:yr(128,128,(E,O,K)=>{E.fillStyle="#d7d5cf",E.fillRect(0,0,O,K),E.fillStyle="#3a3c40";for(let Q=0;Q<4;Q++)for(let ve=0;ve<6;ve++)E.fillRect(8+ve*20+Q%2*10,12+Q*32,6,14);E.fillStyle="rgba(0,0,0,.18)",E.fillRect(0,0,O,3)},{repeat:[1/.16,1/.16]})}),w=o(14209734,.55,.12,{envMapIntensity:.4,map:yr(16,64,(E,O,K)=>{let Q=E.createLinearGradient(0,0,O,0);Q.addColorStop(0,"#5e6268"),Q.addColorStop(.35,"#b9bec4"),Q.addColorStop(.7,"#9a9fa6"),Q.addColorStop(1,"#5e6268"),E.fillStyle=Q,E.fillRect(0,0,O,K)},{repeat:[34,1]}),envMapIntensity:1.1}),U=o(11581636,.95,0,{bumpMap:M,bumpScale:1.2}),N=new ji({color:11849691,roughness:.08,metalness:0,transparent:!0,opacity:.72,clearcoat:1,clearcoatRoughness:.04,envMapIntensity:.75,bumpMap:M,bumpScale:.6});N.userData.th=[.1];let B=o(14673902,.38,0,{emissive:9413300,emissiveIntensity:.05}),Z=new ji({roughness:.14,metalness:.25,clearcoat:1,clearcoatRoughness:.05,envMapIntensity:1.4,map:yr(512,384,(E,O,K)=>{E.fillStyle="#b9bfc8",E.fillRect(0,0,O,K);let Q=10,ve=6,De=5,ye=(O-2*De)/Q,X=(K-2*De)/ve;for(let Ye=0;Ye<Q;Ye++)for(let Ke=0;Ke<ve;Ke++){let ct=De+Ye*ye+1.5,ut=De+Ke*X+1.5,pt=ye-3,Pt=X-3,bt=6;E.fillStyle="#0c1830",E.beginPath(),E.moveTo(ct+bt,ut),E.lineTo(ct+pt-bt,ut),E.lineTo(ct+pt,ut+bt),E.lineTo(ct+pt,ut+Pt-bt),E.lineTo(ct+pt-bt,ut+Pt),E.lineTo(ct+bt,ut+Pt),E.lineTo(ct,ut+Pt-bt),E.lineTo(ct,ut+bt),E.closePath(),E.fill(),E.fillStyle="rgba(150,165,190,.18)";for(let st=1;st<12;st++)E.fillRect(ct,ut+Pt*st/12,pt,.6);E.fillStyle="rgba(196,204,216,.75)";for(let st=1;st<=3;st++)E.fillRect(ct+pt*st/4-.7,ut,1.4,Pt)}},{clamp:!0})});Z.userData.th=[.17];let H=new on({color:11187390,roughness:.9,transparent:!0,depthWrite:!1,map:yr(256,256,(E,O,K)=>{let Q=E.createLinearGradient(0,0,0,K);Q.addColorStop(0,"rgba(214,224,232,0.2)"),Q.addColorStop(.45,"rgba(214,224,232,0.42)"),Q.addColorStop(1,"rgba(224,232,240,0.74)"),E.fillStyle=Q,E.fillRect(0,0,O,K);let ve=Nn(4);E.globalCompositeOperation="destination-out";for(let De=0;De<26;De++){let ye=ve()*O,X=ve()*K*.6,Ye=30+ve()*140;E.lineWidth=1+ve()*2.2,E.strokeStyle="rgba(0,0,0,.75)",E.beginPath(),E.moveTo(ye,X),E.bezierCurveTo(ye+(ve()-.5)*8,X+Ye*.4,ye+(ve()-.5)*8,X+Ye*.7,ye+(ve()-.5)*6,X+Ye),E.stroke()}E.globalCompositeOperation="source-over";for(let De=0;De<260;De++){let ye=ve()*O,X=K*Math.sqrt(ve()),Ye=.8+ve()*2.4;E.fillStyle=`rgba(250,252,255,${.4+ve()*.5})`,E.beginPath(),E.arc(ye,X,Ye,0,6.3),E.fill()}E.fillStyle="rgba(240,246,252,.8)",[[0,K],[O,K]].forEach(([De,ye])=>{let X=E.createRadialGradient(De,ye,0,De,ye,70);X.addColorStop(0,"rgba(244,248,252,.9)"),X.addColorStop(1,"rgba(244,248,252,0)"),E.fillStyle=X,E.fillRect(De-70,ye-70,140,140)})},{clamp:!0})});H.userData.th=[.5];let Y=.3,q=-3.3,W=5.88,J=3.6,ge=new on({roughness:.9,transparent:!0,depthWrite:!1,map:yr(512,324,(E,O,K)=>{let Q=X=>(Y-X)/(Y-q)*O,ve=X=>(W-X)/(W-J)*K,De=Nn(9),ye=(X,Ye,Ke,ct,ut)=>{let pt=E.createLinearGradient(0,Ye,0,Ye+Ke);pt.addColorStop(0,`rgba(186,178,160,${ut*.32})`),pt.addColorStop(1,"rgba(206,196,176,0)"),E.fillStyle=pt,E.beginPath(),E.moveTo(X-ct/2,Ye);for(let Pt=0;Pt<=8;Pt++)E.lineTo(X-ct/2+Math.sin(Pt*1.7+X)*1.5-ct*.2*Pt/8,Ye+Ke*Pt/8);for(let Pt=8;Pt>=0;Pt--)E.lineTo(X+ct/2+Math.sin(Pt*1.3+X)*1.5+ct*.15*Pt/8,Ye+Ke*Pt/8);E.closePath(),E.fill()};for(let X=0;X<22;X++)ye(Q(.1-De()*3.2),0,30+De()*120,4+De()*16,.25+De()*.35);[ti.z0-.06,ti.z1+.06].forEach(X=>{ye(Q(X),ve(5.86),90,18,.5),ye(Q(X)+(De()-.5)*6,ve(4.3),150,14,.55)});for(let X=0;X<14;X++)ye(Q(ti.z0+.05+De()*1.7),ve(4.3)+De()*6,30+De()*120,2+De()*7,.2+De()*.35);E.clearRect(Q(ti.z1),ve(ti.y1),Q(ti.z0)-Q(ti.z1),ve(ti.y0)-ve(ti.y1))},{clamp:!0})});ge.userData.th=[.3];let Ne=o(16777215,.92,0,{map:yr(128,256,(E,O,K)=>{E.fillStyle="#4b3a29",E.fillRect(0,0,O,K);let Q=Nn(12);for(let ve=0;ve<40;ve++){let De=Q()*O;E.strokeStyle=Q()>.5?`rgba(20,14,8,${.3+Q()*.4})`:`rgba(120,98,70,${.2+Q()*.3})`,E.lineWidth=.6+Q()*1.8,E.beginPath(),E.moveTo(De,0);for(let ye=0;ye<=K;ye+=16)E.lineTo(De+Math.sin(ye*.05+ve)*2,ye);E.stroke()}for(let ve=0;ve<26;ve++){let De=Q()*O,ye=Q()*K,X=3+Q()*10,Ye=8+Q()*30,Ke=E.createRadialGradient(De,ye,0,De,ye,Ye);Ke.addColorStop(0,`rgba(14,10,6,${.55+Q()*.35})`),Ke.addColorStop(1,"rgba(14,10,6,0)"),E.fillStyle=Ke,E.beginPath(),E.ellipse(De,ye,X,Ye,0,0,6.3),E.fill()}for(let ve=0;ve<7;ve++)E.fillStyle=`rgba(206,200,188,${.45+Q()*.3})`,E.fillRect(Q()*O,Q()*K,2+Q()*6,4+Q()*14)},{repeat:[1/.3,1/.3]})}),qe=a.galv,Je=o(13289149,.5,.12,{envMapIntensity:.35}),mt=new ji({color:2046544,roughness:.04,metalness:0,transparent:!0,opacity:.86,clearcoat:1,envMapIntensity:1.1});mt.userData.th=[.3];let te=i.flow(5220095,{base:924714,intensity:.35,dash:5,speed:.2,rest:.3,gain:1,roughness:.08}),Ee=c([{key:"ruler",w:72,h:664,draw(E,O,K){E.fillStyle="#e6d9b0",E.fillRect(0,0,O,K);let Q=ve=>K-ve/600*K;E.fillStyle="rgba(143,211,166,.9)",E.fillRect(0,Q(445),O,Q(400)-Q(445)),E.fillStyle="#1a1c20",E.textAlign="right",E.textBaseline="middle";for(let ve=0;ve<=600;ve+=10){let De=Q(ve),ye=ve%100===0?22:ve%50===0?15:8;E.fillRect(0,De-.8,ye,1.6)}E.font="700 18px ui-monospace, Menlo, monospace";for(let ve=100;ve<600;ve+=100)ve!==400&&E.fillText(String(ve),O-3,Q(ve)+10);E.font="800 17px ui-monospace, Menlo, monospace",E.fillText("400",O-3,Q(400)-12),E.fillText("R-50",O-3,Q(400)-32),E.font="700 14px ui-monospace, Menlo, monospace",E.fillText("mm",O-3,Q(565))}},{key:"bag",w:200,h:112,bg:"#f1efe8",draw(E,O,K){E.fillStyle="#f1efe8",E.fillRect(0,0,O,K),E.strokeStyle="#1a1c20",E.lineWidth=3,E.strokeRect(5,5,O-10,K-10),E.fillStyle="#1a1c20",E.textAlign="left",E.textBaseline="middle",E.font="700 30px ui-monospace, Menlo, monospace",E.fillText("SAMPLE A-1",16,36),E.font="500 17px ui-monospace, Menlo, monospace",E.fillText("ATTIC \xB7 LOOSE FILL",16,70),E.fillText("SEALED \xB7 FOR LAB",16,92)}},{key:"caution",w:300,h:150,draw(E,O,K){E.fillStyle="#e9c22e",E.fillRect(0,0,O,K),E.fillStyle="#16171a",E.fillRect(0,0,O,12),E.fillRect(0,K-12,O,12),E.textAlign="center",E.textBaseline="middle",E.font="800 44px ui-monospace, Menlo, monospace",E.fillText("CAUTION",O/2,46),E.font="700 20px ui-monospace, Menlo, monospace",E.fillText("POSSIBLE ASBESTOS",O/2,88),E.fillText("DO NOT DISTURB",O/2,116)}},{key:"pv",w:300,h:92,draw(E,O,K){E.fillStyle="#b8281c",E.fillRect(0,0,O,K),E.fillStyle="#f4f1ea",E.textAlign="center",E.textBaseline="middle",E.font="800 34px ui-monospace, Menlo, monospace",E.fillText("PV SYSTEM",O/2,32),E.font="600 17px ui-monospace, Menlo, monospace",E.fillText("DC CONDUCTORS \xB7 600 V",O/2,66)}}],{width:1024,emissive:.2});[m,_].forEach(E=>n(6.27,.012,7.55,b,3.165,-.008,0,E,{uv:!0,cast:!1})),n(.05,.012,7.55,a.blackPlastic,0,Gu-.03,0,d,{cast:!1});let Ue=new Ei;Ue.moveTo(-4.95,6.4),Ue.lineTo(4.95,6.4),Ue.lineTo(0,wa(0)-.02),Ue.lineTo(-4.95,6.4);let be=new Ks;be.moveTo(-.5,7.5),be.lineTo(.5,7.5),be.lineTo(.5,8.5),be.lineTo(-.5,8.5),be.lineTo(-.5,7.5),Ue.holes.push(be);let Ge=new pa(Ue);[[-3.775,0],[3.775,Math.PI]].forEach(([E,O])=>{let K=new Fe(Ge,b);K.position.set(0,0,E),K.rotation.y=O,K.receiveShadow=!0,d.add(K),[-4.2,-3.4,-2.6,-1.8,-1.05,1.05,1.8,2.6,3.4,4.2].forEach(Q=>{let ve=wa(Q)-.06;n(.038,ve-6.4,.089,y,Q,(ve+6.4)/2,E+Math.sign(-E)*.046,d,{uv:!0,cast:!1})}),[7.45,8.55].forEach(Q=>n(1.12,.038,.089,y,0,Q,E+Math.sign(-E)*.046,d,{uv:!0,cast:!1}))});let re=(E,O,K,Q,ve,De=d)=>n(Math.hypot(K-E,Q-O),.089,.038,y,(E+K)/2,(O+Q)/2,ve,De,{uv:!0,rot:[0,0,Math.atan2(Q-O,K-E)]}),Qe=(.014+.089)/qf;vc.forEach(E=>{n(6.76,.089,.038,y,3.38,-.0585,E,m,{uv:!0}),n(6.2,.089,.038,y,3.1,-.0585,E,_,{uv:!0}),n(9.9,.089,.038,y,0,6.4+.0445,E,d,{uv:!0,cast:!1}),[-1,1].forEach(O=>{re(O*1.667,6.48,O*2.5,wa(2.5)-Qe+.02,E),re(O*1.667,6.48,O*.08,wa(0)-Qe-.04,E),[[O*2.5,wa(2.5)-Qe+.01]].forEach(([K,Q])=>[-1,1].forEach(ve=>n(.16,.12,.002,Je,K,Q,E+ve*.02,d,{cast:!1})))}),[-1,1].forEach(O=>n(.2,.14,.002,Je,0,wa(0)-Qe-.01,E+O*.02,d,{cast:!1}))}),[-1,1].forEach(E=>n(.038,.089,7.5,y,E*2.06,7.32,0,d,{uv:!0,cast:!1}));for(let E=0;E<vc.length-1;E++){let O=vc[E]+.3;n(1.12,.004,.54,I,5.66,-.066,O,m,{cast:!1}),[-1,1].forEach(K=>n(1.12,.052,.004,I,5.66,-.04,O+K*.27,m,{cast:!1})),[-.13,0,.13].forEach(K=>n(1.12,.01,.03,I,5.66,-.07,O+K,m,{cast:!1}));for(let K=0;K<3;K++)[-1,1].forEach(Q=>n(.012,.002,.01,a.galv,5.25+K*.4,-.016,O+Q*.272,m,{cast:!1}))}n(.33,.008,8.9,G,5.27,5.876,0,d,{uv:!0,cast:!1}),[-4.455,4.455].forEach(E=>n(.33,.36,.02,a.whitePlastic,5.27,6.05,E,d,{cast:!1}));let ue=(...E)=>{let O=[];for(let K=0;K<E.length-1;K++){let[Q,ve]=E[K],De=E[K+1][0];for(let ye=Q;ye<De-1e-6;ye+=ve)O.push(ye)}return O.push(E[E.length-1][0]),O},me=p?ue([-4.95,.4],[-.1,.08],[1.7,.2],[4,.1],[4.95]):ue([-4.95,.25],[-.1,.04],[1.65,.12],[4,.06],[4.95]),ie=p?ue([-3.75,.25],[.2,.08],[1.7,.3],[3.75]):ue([-3.75,.15],[.25,.04],[1.7,.2],[3.75]),xe=(E,O)=>.013*Math.sin(E*7.1+Math.sin(O*3.3)*1.7)+.01*Math.sin(O*8.3+E*2.1)+.006*Math.sin(E*23+O*19)+.004*Math.sin(E*41-O*37),we=(E,O)=>{let K=Math.min(Yf+xe(E,O),wa(E)-.095),Q=(E-xi.x)/xi.rx,ve=(O-xi.z)/xi.rz,De=Math.atan2(ve,Q),ye=Math.sqrt(Q*Q+ve*ve)+.05*Math.sin(De*5)+.03*Math.sin(De*13+1)+.02*Math.sin(De*29+E*40);return ye<1.4&&(K=ot(6.43,K+.05*Math.max(0,1-Math.abs(ye-1.06)/.3)+.02*Math.sin(E*37+O*29),At(.7,1,ye))),Math.max(K,6.405)};{let E=me.length,O=ie.length,K=new Float32Array(E*O*3),Q=new Float32Array(E*O*2),ve=[];for(let X=0;X<O;X++)for(let Ye=0;Ye<E;Ye++){let Ke=X*E+Ye;K.set([me[Ye],we(me[Ye],ie[X]),ie[X]],Ke*3),Q.set([me[Ye],ie[X]],Ke*2)}for(let X=0;X<O-1;X++)for(let Ye=0;Ye<E-1;Ye++){let Ke=X*E+Ye,ct=Ke+1,ut=Ke+E,pt=ut+1;ve.push(Ke,ut,ct,ct,ut,pt)}let De=new en;De.setAttribute("position",new $t(K,3)),De.setAttribute("uv",new $t(Q,2)),De.setIndex(ve),De.computeVertexNormals();let ye=new Fe(De,T);ye.receiveShadow=!0,ye.castShadow=!1,d.add(ye)}let $e=l(3.62,6.7,-1.32),Xe=new yt;Xe.position.copy($e),Xe.rotation.y=-2.2,d.add(Xe),n(.07,.6,.004,a.whitePlastic,0,0,-.003,Xe,{cast:!1}),Ee.plane("ruler",.065,Xe,0,0,0),s(.002,.62,a.galv,0,.05,-.008,Xe,{seg:5,cast:!1}),n(.26,.17,.26,Je,Dn.x,6.485,Dn.z,d),s(.06,.12,Je,Dn.x,6.62,Dn.z,d,{seg:16});let lt=r([[Dn.x,6.6,Dn.z],[Dn.x+.04,6.92,Dn.z+.03],[Dn.x+.3,7,Dn.z+.2],[Dn.x+.62,6.93,Dn.z+.38],[Dn.x+.85,6.87,Dn.z+.45]],.07,w,h,{radial:14,density:30,keep:!0}),ft=l(Dn.x+.92,6.88,Dn.z+.48),j=Fs(qa,-.1,Dn.z),Dt=r([[Dn.x,6.6,Dn.z],[Dn.x+.06,6.9,Dn.z],[Dn.x+.55,6.99,Dn.z+.02],[j.x-.22,6.92,Dn.z],[j.x,j.y,Dn.z]],.07,w,h,{radial:14,density:30,keep:!0});s(.075,.13,Je,qa,-.06,Dn.z,m,{seg:18}),[[Dn.x,6.66,Dn.z]].forEach(([E,O,K])=>s(.077,.02,Je,E,O,K,d,{seg:18,cast:!1})),n(.46,.006,.44,qe,qa-.02,Qt+.003,Dn.z,m),s(.08,.1,qe,qa,Qt+.05,Dn.z,m,{seg:18}),n(.3,.13,.28,qe,qa-.01,Qt+.15,Dn.z,m,{r:.02}),n(.05,.08,.26,a.blackPlastic,qa+.135,Qt+.1,Dn.z,m,{cast:!1}),s(.5,.058,o(8021318,.95,.1),xi.x,6.431,xi.z,d,{seg:32,cast:!1}).scale.set(xi.rx/.5*1.05,1,xi.rz/.5*1.05);{let E=p?450:1e3,O=new Nl(1,0),K=new Mi(O,o(16777215,.7,.35,{envMapIntensity:1.2}),E),Q=new zt,ve=new Bn,De=new Ui,ye=new F,X=new F,Ye=new Et,Ke=[10517060,12096600,8216632,10262154,12756592,9075294];for(let ct=0;ct<E;ct++){let ut=u()*6.283,pt=Math.sqrt(u())*1.02;ye.set(xi.x+Math.cos(ut)*pt*xi.rx,6.462+u()*.008,xi.z+Math.sin(ut)*pt*xi.rz);let Pt=.006+u()*.008;X.set(Pt*(1+u()*.8),Pt*.5,Pt*(1+u()*.8)),ve.setFromEuler(De.set(u()*.6,u()*6.28,u()*.6)),Q.compose(ye,ve,X),K.setMatrixAt(ct,Q),K.setColorAt(ct,Ye.setHex(Ke[u()*Ke.length|0]))}K.castShadow=!1,K.receiveShadow=!0,h.add(K)}let z=l(xi.x-.59,0,xi.z+.47);z.y=we(z.x,z.z)+.016;let S=new yt;S.position.copy(z),S.rotation.set(.05,.5,-.04),d.add(S),n(.14,.022,.18,a.vermiculite,0,0,.01,S,{r:.01,cast:!1}),n(.16,.03,.22,a.poly,0,.002,0,S,{r:.012,cast:!1}),n(.16,.006,.012,a.bluePlastic,0,.012,-.095,S,{cast:!1});let le=Ee.plane("bag",.12,S,0,.018,.03);le.rotation.x=-Math.PI/2;let he=l(xi.x+.08,0,xi.z+.6);he.y=we(he.x,he.z)+.2;let _e=new yt;_e.position.copy(he),_e.rotation.set(0,-2.3,.05),d.add(_e),n(.174,.09,.002,a.whitePlastic,0,.02,-.0015,_e,{cast:!1}),Ee.plane("caution",.17,_e,0,.02,0),s(.0022,.42,a.galv,0,-.14,-.004,_e,{seg:5,cast:!1});let rt=[];for(let E=2.4;E<6;E+=p?.45:.3)for(let O=-3.5;O<1.4;O+=p?.24:.16){let K=O+(u()-.5)*.05;vc.some(Q=>Math.abs(Q-K)<.035)||rt.push([E+(u()-.5)*.04,K,.024+u()*.012])}let it=rt.length,Oe=new Mi(new dn(.0016,.0016,1,5),a.galv,it),Ve=new Mi(new Nr(1,0),A,it),je=new zt,xt=new Bn().setFromEuler(new Ui(0,0,-yc)),D=new F,oe=[];rt.forEach(([E,O,K],Q)=>{Fs(E,-.014-K/2,O,f),je.compose(f,xt,D.set(1,K,1)),Oe.setMatrixAt(Q,je),oe.push(Fs(E,-.014-K-.004,O))}),Oe.castShadow=!1,Ve.castShadow=!1,h.add(Oe,Ve);let fe=rt.map(()=>.8+u()*.6),Re=-1,We=E=>{if(!(Math.abs(E-Re)<.004)){Re=E;for(let O=0;O<it;O++){let K=fe[O]*(.15+.85*E),Q=.0055*K;Fs(rt[O][0],-.014-rt[O][2]*(.4+.25*E),rt[O][1],f),je.compose(f,xt,D.set(Q,rt[O][2]*.32*(.3+.7*E)+Q,Q)),Ve.setMatrixAt(O,je)}Ve.instanceMatrix.needsUpdate=!0}},k=new Fe(new sn(4,5),v);k.rotation.x=Math.PI/2,k.position.set(4,-.0165,-1.1),k.renderOrder=2,k.userData.keep=!0;let Le=g(h);Le.add(k),Le.userData.keep=!0;let de=[2.455,3.905],Be=[-1.6,-.55,.5,1.55],Pe=Qt+.135,ae=Pe+.036;de.forEach(E=>Be.forEach(O=>{n(1.3,.03,.95,a.enclosureDark,E,Pe+.015,O,m,{cast:!1}),n(1.29,.004,.94,Z,E,ae-.004,O,m,{cast:!1}),[-1,1].forEach(K=>{n(1.32,.036,.016,a.aluminum,E,Pe+.018,O+K*.477,m,{cast:!1}),n(.016,.036,.97,a.aluminum,E+K*.652,Pe+.018,O,m,{cast:!1})})}));let at=Be[0]-.49,Ze=Be[3]+.49;de.forEach(E=>[-.36,.36].forEach(O=>{let K=E+O;n(.04,.045,Ze-at+.14,a.aluminum,K,Pe-.0225,(at+Ze)/2,m,{cast:!1});for(let Q=at+.1;Q<Ze;Q+=.52)n(.05,.05,.04,a.aluminum,K,Qt+.025,Q,m,{r:.006,cast:!1}),n(.012,.045,.04,a.aluminum,K+.02,Qt+.07,Q,m,{cast:!1}),s(.007,.012,a.galv,K+.03,Qt+.025,Q,m,{axis:"x",seg:6,cast:!1});[at-.012,Ze+.012].forEach(Q=>n(.045,.04,.02,a.aluminum,K,Pe+.02,Q,m,{cast:!1}));for(let Q=0;Q<3;Q++){let ve=(Be[Q]+Be[Q+1])/2;n(.04,.008,.045,a.aluminum,K,ae+.003,ve,m,{cast:!1}),s(.006,.006,a.galv,K,ae+.009,ve,m,{seg:6,cast:!1})}}));let vt={s:4.74,z:at+.25};n(.2,.09,.16,a.greyPlastic,vt.s,Qt+.06,vt.z,m,{r:.008}),n(.24,.015,.2,a.aluminum,vt.s,Qt+.01,vt.z,m,{cast:!1});let Ft=Ee.plane("pv",.13,m,vt.s,Qt+.1065,vt.z);Ft.rotation.x=-Math.PI/2,Ft.rotation.z=Math.PI/2,[[.03,-.004],[-.03,.004]].forEach(([E,O])=>r([[de[1]+.2,Pe-.01,Be[0]+E*3],[de[1]+.5,Pe-.025+O,Be[0]-.3+E],[vt.s-.15,Qt+.07,vt.z+.25+E],[vt.s-.04,Qt+.07,vt.z+.06+E]],.004,a.rubber,m,{radial:5,cast:!1})),r([[vt.s+.1,Qt+.05,vt.z],[vt.s+.2,Qt+.05,vt.z],[vt.s+.26,Qt+.04,vt.z]],.012,a.conduit,m,{radial:8,cast:!1}),s(.06,.07,a.blackPlastic,vt.s+.3,Qt+.03,vt.z,m,{r2:.025,seg:14,cast:!1});let Xt=new Fe(new sn(ti.z1-ti.z0-.14,ti.y1-ti.y0-.14),H);Xt.position.set(5.037,(ti.y0+ti.y1)/2,(ti.z0+ti.z1)/2),Xt.rotation.y=Math.PI/2,Xt.renderOrder=2,Xt.userData.keep=!0,h.add(Xt);let rn=new Fe(new sn(Y-q,W-J),ge);rn.position.set(5.1135,(W+J)/2,(Y+q)/2),rn.rotation.y=Math.PI/2,rn.renderOrder=2,d.add(rn),n(.272,.062,2.045,Ne,5.141,ti.y0-.03,(ti.z0+ti.z1)/2,d,{uv:!0}),n(.05,.03,.22,Ne,5.25,ti.y0-.068,ti.z1+.05,d,{uv:!0,rot:[.3,.2,-.5],cast:!1});let Pn=g(h);Pn.userData.keep=!0;let Jt=(E,O,K,Q,ve)=>{let De=new Ei;De.moveTo(E[0][0],E[0][1]),E.slice(1).forEach(Ye=>De.lineTo(Ye[0],Ye[1]));let ye=new Rs(De,{depth:K-O,steps:ve?44:1,bevelEnabled:!1,curveSegments:1});if(ve){let Ye=ye.attributes.position;for(let ut=0;ut<Ye.count;ut++){let pt=Ye.getX(ut),Pt=Ye.getY(ut),bt=Ye.getZ(ut);Pt>Qt+.03&&Ye.setY(ut,Pt+ve(pt,bt)*At(Qt+.03,Qt+.12,Pt)),pt>d_+.03&&Ye.setX(ut,pt+Math.abs(ve(pt+3,bt*1.7))*1.6)}ye.deleteAttribute("normal"),ye.deleteAttribute("uv"),ye=Tm(ye,1e-4),ye.computeVertexNormals();let Ke=ye.attributes.position,ct=new Float32Array(Ke.count*2);for(let ut=0;ut<Ke.count;ut++)ct[ut*2]=Ke.getZ(ut)*.6,ct[ut*2+1]=Ke.getX(ut)*.6;ye.setAttribute("uv",new $t(ct,2))}let X=new Fe(ye,Q);return X.position.z=O,X.castShadow=!0,X.receiveShadow=!0,Pn.add(X),X},Tn=Qt+.016,_n=(E,O)=>.025*Math.sin(O*2.3+E*3)+.015*Math.sin(O*5.7-E*2)+.008*Math.sin(O*13+E*11);Jt([[4.62,Tn],[4.9,Qt+.1],[5.3,Qt+.17],[5.8,Qt+.19],[5.98,Qt+.17],[6.07,Qt+.11],[6.12,Qt+.05],[6.14,Tn]],-4.35,4.5,U,_n),Jt([[.06,Tn],[.2,Qt+.09],[.6,Qt+.12],[1.55,Qt+.13],[1.72,Qt+.08],[1.78,Tn]],-4.5,4.5,U,_n),[[-4.5,at-.5],[Ze+.5,4.5]].forEach(([E,O])=>Jt([[1.5,Tn],[1.5,Qt+.12],[3,Qt+.14],[4.95,Qt+.16],[4.95,Tn]],E,O,U,_n)),Jt([[6.06,Qt+.002],[6.07,Qt+.045],[6.4,Qt+.05],[6.42,Qt+.002]],-4.5,4.5,mt),Jt([[6.3,Qt],[6.36,Qt+.07],[6.46,Qt+.12],[6.68,Qt+.14],[6.84,Qt+.12],[6.92,Qt+.03],[6.935,-.08],[6.9,-.17],[6.86,-.13],[6.84,.02],[6.81,.17],[6.79,Qt]],-4.5,4.5,N,(E,O)=>.04*Math.sin(O*1.7+1)+.03*Math.sin(O*4.9+E*6)+.018*Math.sin(O*11.3+2+E*9)+.01*Math.sin(O*29+E*13));{let E=new sn(1.42,.15),O=E.attributes.uv;for(let Q=0;Q<O.count;Q++)O.setX(Q,4.68+O.getX(Q)*1.42);let K=new Fe(E,te);K.rotation.x=-Math.PI/2,K.position.set(4.68+.71,Qt+.004,-4.425),K.receiveShadow=!0,Pn.add(K)}i.bake(Pn);let C=new yt;C.position.set(qo.x,qo.y,0),C.userData.keep=!0,h.add(C),n(.135,.05,8.9,N,0,.12,0,C,{cast:!1});let Se=p?60:130,$=new Kr(.028,1,7,1,!0);$.rotateX(Math.PI),$.translate(0,-.5,0);let Ae=new Mi($,N,Se),Te=[];for(let E=0;E<Se;E++){let O=-4.42+E/(Se-1)*8.84+(u()-.5)*.05,K=Math.max(0,1-Math.abs(O+1.5)/2.2),Q=.06+u()*u()*(.55+.5*K),ve=.7+u()*.9;f.set((u()-.5)*.08,.004,O),je.compose(f,xt.identity(),D.set(ve,Q,ve)),Ae.setMatrixAt(E,je),Te.push([f.x,Q,O])}xt.setFromEuler(new Ui(0,0,-yc)),Ae.castShadow=!1,C.add(Ae),i.bake(C);let ht=p?110:220,gt=new Nr(1,1);{let E=gt.attributes.position,O=new Map;for(let K=0;K<E.count;K++){let Q=E.getX(K).toFixed(3)+E.getY(K).toFixed(3)+E.getZ(K).toFixed(3);O.has(Q)||O.set(Q,.84+u()*.3);let ve=O.get(Q);E.setXYZ(K,E.getX(K)*ve,E.getY(K)*ve,E.getZ(K)*ve)}gt.computeVertexNormals()}let Ct=new Mi(gt,B,ht);{let E=new Bn,O=new Ui,K=(ve,De)=>{E.setFromEuler(O.set(u()*6.3,u()*6.3,u()*6.3)),je.compose(f,E,D.set(De*(.9+u()*.25),De*(.8+u()*.2),De*(.9+u()*.25))),Ct.setMatrixAt(ve,je)},Q=()=>Math.pow(u(),.6);for(let ve=0;ve<ht;ve++){let De=.0075+u()*.01,ye=ve/ht;if(ye<.3){let X=-4.2+Math.floor(u()*9)*1+(u()-.5)*.8*Q();f.set(qo.x+(u()-.5)*.09,qo.y+.1+De*.8+(u()<.3?De*1.4:0),X)}else if(ye<.62){let X=de[u()<.5?0:1],Ye=Be[u()*4|0];Fs(X+.63-u()*.03-(u()<.35?De*2:0),ae+De*.85,Ye+(u()-.5)*.9,f)}else if(ye<.82)Fs(6.55+u()*.22,Qt+De*.8,-4.3+u()*8.6,f);else{let X=.5+u()*5.8,Ye=-4.2+u()*8.4,Ke=X>de[0]-.65&&X<de[1]+.65&&Ye>at&&Ye<Ze;Fs(X,(Ke?ae:Qt)+De*.8,Ye,f)}K(ve,De)}}Ct.castShadow=!0,Ct.receiveShadow=!0,h.add(Ct);let dt=.4,Lt=6.75,Vt=4.4,wn=o(16777215,.5,0,{alphaTest:.35,map:yr(1024,1024,(E,O,K)=>{let Q=Nn(41),ve=X=>(X-dt)/(Lt-dt)*O,De=X=>(X+Vt)/(2*Vt)*K,ye=(X,Ye)=>{let Ke=X>de[0]-.68&&X<de[1]+.68&&Ye>at&&Ye<Ze,ct=de.some(ut=>X>ut+.65&&X<ut+.95)&&Ye>at&&Ye<Ze;return Ke?.06:ct?1:.3+.7*At(5.3,6.4,X)};for(let X=0;X<3e4;X++){let Ye=dt+Q()*(Lt-dt),Ke=-Vt+Q()*2*Vt;if(Q()>ye(Ye,Ke))continue;let ct=ve(Ye),ut=De(Ke),pt=1.3+Q()*Q()*2.6;E.fillStyle="rgba(96,108,122,1)",E.beginPath(),E.arc(ct+pt*.35,ut+pt*.3,pt,0,6.3),E.fill(),E.fillStyle=Q()>.3?"#dfe6ec":"#c4ced8",E.beginPath(),E.arc(ct,ut,pt*.92,0,6.3),E.fill()}},{clamp:!0})}),kn=new Fe(new sn(Lt-dt,2*Vt),wn);kn.rotation.x=-Math.PI/2,kn.position.set((dt+Lt)/2,Qt+.004,0),kn.receiveShadow=!0;let Vn=g(h);Vn.userData.keep=!0,Vn.add(kn);let Jn=i.particles(260,{size:.06,color:14674687,opacity:.5,gain:.55}),Xn=i.particles(240,{size:.014,color:12574975,gain:1.1});h.add(Jn,Xn);let Wn=Jn.userData.n,P=Xn.userData.n,se=Float32Array.from({length:Math.max(Wn,P)*4},()=>u()),Ie=Array.from({length:P},(E,O)=>O*7919%it),Me=Te.map((E,O)=>[E[1],O]).sort((E,O)=>O[0]-E[0]).slice(0,40).map(E=>E[1]);i.bake(d);let Ce={roof:Fs(6.3,Qt+.03,-1.2),ice:Fs(6.62,Qt+.17,-2),rain:Fs(4.75,-.05,-.35),ins:l($e.x,Yf+.02,$e.z),fan:Fs(qa,-.16,Dn.z),verm:l(xi.x,6.48,xi.z),solar:Fs(vt.s,Qt+.12,vt.z),win:l(5.16,4.36,-1)},St={cut:0,ghost:0,ground:1,season:0,snowfall:0,melt:0,icicles:0,orbit:.012,time:19.4},It=[{...St,radius:10,theta:2.3,phi:.62,fx:3.75,ty:7.55,fz:-.6,dof:0,orbit:.02,time:13,season:.5,snowfall:0,narrow:{radius:8.5}},{...St,radius:3.6,theta:2.15,phi:1.02,fx:5.4,ty:6.15,fz:-2,dof:.8,time:19.4,snowfall:1,narrow:{radius:3.1}},{...St,radius:2.3,theta:3.95,phi:1.55,fx:3.45,ty:7,fz:-.3,dof:1,narrow:{radius:1.7,fx:3.75,ty:7.1,fz:-.3}},{...St,radius:1.75,theta:4.25,phi:1.33,fx:3.75,ty:6.92,fz:-1.15,dof:1,narrow:{radius:1.35,fx:3.8,ty:7,fz:-1.05}},{...St,radius:2.6,theta:3.95,phi:.88,fx:xi.x-.2,ty:6.55,fz:xi.z+.25,dof:1,narrow:{radius:2.2,fx:xi.x+.05,fz:xi.z+.25}},{...St,radius:2.7,theta:2.1,phi:1.1,fx:3.85,ty:7.5,fz:-1.5,dof:.9,narrow:{radius:2.4}},{...St,radius:4.1,theta:1.92,phi:1.54,fx:5.15,ty:4.95,fz:-1.3,dof:.9,snowfall:1,narrow:{radius:3.5}}],ee=0,ne=1,pe=Jn.userData.pos,He=Xn.userData.pos;return{name:"attic",group:h,anchors:Ce,shots:It,hides:E=>{let O=E||e,K=[];return O.sys.asbestos&&K.push(...O.sys.asbestos.meshes),O.sys.solar&&O.sys.solar.meshes[0]&&K.push(O.sys.solar.meshes[0].parent),O.extra&&O.extra.snowR&&K.push(O.extra.snowR),K},light(E){return E===0?{pos:[8.6,15.5,-4.2],at:[3.9,7.4,-.8],power:1.35,fill:0}:E===1?{pos:[7.9,9,-4],at:[5.45,6.1,-2],power:.6,fill:.3}:E===2?{pos:[1.4,8.4,-2.4],at:[3.9,7.2,-.6],power:.9,fill:.6}:E===3?{pos:[1.4,8.5,-2.4],at:[4.1,6.85,-.7],power:.9,fill:.6}:E===4?{pos:[.6,8.6,-.6],at:[xi.x,6.45,xi.z],power:.9,fill:.5}:E===5?{pos:[6.6,10.2,-3.6],at:[3.8,7.55,-1.4],power:.8,fill:.35}:{pos:[7.6,6.6,-3.6],at:[5.1,5,-1.4],power:.9,fill:.2}},update({step:E,q:O,t:K,dt:Q,snap:ve,reduce:De}){let ye=ve?1:1-Math.exp(-Q*2.6);ee=ot(ee,E>=1?1:0,ye);let X=At(0,1,ee);Pn.visible=C.visible=X>.01,Pn.scale.y=Math.max(.001,X),C.scale.y=Math.max(.001,X),Ct.visible=Vn.visible=E===0,Xt.visible=E>=1;let Ye=E===2?1-At(.4,.8,O):E<2?1:0;ne=ot(ne,Ye,ve?1:1-Math.exp(-Q*6)),v.opacity=.75*ne,Le.visible=Ve.visible=ne>.01,We(ne),lt.visible=E<=2,Dt.visible=E>=3;let Ke=De?3.3:K,ct=0,ut=0;if(E===2){let pt=At(.35,.65,O),Pt=Math.round(Wn*.7);for(let st=0;st<Pt;st++){let Rt=(Ke*(.16+se[st]*.08)+se[st+Wn])%1,Bt=Rt*Rt;pe[ct*3]=ft.x+.06+Rt*.9+Math.sin(Ke*.7+st)*.05*Rt,pe[ct*3+1]=Math.min(ft.y+.03+Rt*.9,wa(ft.x+.06+Rt*.9)-.08)+.02*Math.sin(st),pe[ct*3+2]=ft.z+(se[st+2*Wn]-.5)*Bt*2.2,ct++}let bt=Math.round(P*pt);for(let st=0;st<bt;st++){let Rt=oe[Ie[st]],Bt=.9+se[st]*1.1,Rn=(Ke+se[st+P]*Bt)%Bt/Bt,On=Math.max(0,Rn-.6)/.4,Yn=9.8*(On*Bt*.4)**2*.5;He[ut*3]=Rt.x,He[ut*3+1]=Math.max(Rt.y-.004-Yn,Yf-.01),He[ut*3+2]=Rt.z,ut++}}else if(E===3)for(let pt=0;pt<Wn;pt++){let Pt=se[pt]*12|0,bt=vc[Pt]+.3+(se[pt+Wn]-.5)*.4,st=(Ke*(.07+se[pt+2*Wn]*.04)+se[pt+3*Wn])%1,Rt=6.5-st*6.45,Bt=Rt>5.1?-.04:-.04-.06*Math.sin(se[pt]*9+st*6)-.04;Fs(Rt,Rt>6.15?-.04-(Rt-6.15)*.6:Bt,bt,x),pe[ct*3]=x.x,pe[ct*3+1]=x.y,pe[ct*3+2]=x.z,ct++}if(E===1||E===6){for(let pt=0;pt<Me.length&&ut<P;pt++){let Pt=Te[Me[pt]],bt=1.2+se[pt]*1.6,st=(Ke+se[pt+P]*bt)%bt/bt,Rt=Math.max(0,st-.55)/.45,Bt=4.9*(Rt*bt*.45)**2;He[ut*3]=qo.x+Pt[0],He[ut*3+1]=qo.y-Pt[1]*X-.01-Bt,He[ut*3+2]=Pt[2],ut++}if(E===6)for(let pt=0;pt<16&&ut<P;pt++){let Pt=pt<6?ti.z0+.04+se[pt]*.1:pt<12?ti.z1-.04-se[pt]*.1:ti.z0+.3+se[pt]*1.2,bt=.8+se[pt+5]*1.2,st=(Ke+se[pt+P]*bt)%bt/bt,Rt=Math.max(0,st-.5)/.5;He[ut*3]=5.165,He[ut*3+1]=Math.max(ti.y1+.02-4.9*(Rt*bt*.5)**2,ti.y0+.002),He[ut*3+2]=Pt,ut++}}Jn.material.size=E===2?.14:.07,Jn.material.opacity=E===2?.5:.85,Xn.material.size=E===2?.014:.03,Jn.geometry.setDrawRange(0,ct),Xn.geometry.setDrawRange(0,ut),Jn.visible=ct>0,Xn.visible=ut>0,ct&&(Jn.geometry.attributes.position.needsUpdate=!0),ut&&(Xn.geometry.attributes.position.needsUpdate=!0)}}}var mn=.6,Ra=.42,Fi=Ra+.004,Wi=.86,Os=-4.25,$f=-3.4,sa=13.62,Kf=Math.atan2(.26,sa),Bm=Math.cos(Kf),Hm=Math.sin(Kf),sr=-18.2,rr=-3.95,ar=.19,ku=.15,Zo=.75,Yu=.12,Vu=18,Sn=.075,Wu=.092,Za=.116,zm=.096,p_=11;var Gm=2,ta=[4.62,6.87],na=[6.95,9.05],or=-14.05,lr=-18.95,ia=-4.3,bs=1.3,Xi=1.6,di=.7,_r=-2.9,$a=i=>Yu+i*Zo,Oi=(i,e=0,t=0,n=new F)=>n.set(mn+e,$f+t*Bm-i*Hm,Os-t*Hm-i*Bm),Xu=new Et;function Bs(i,e){Xu.set(e);let t=i.attributes.position.count,n=new Float32Array(t*3);for(let s=0;s<t;s++)n[s*3]=Xu.r,n[s*3+1]=Xu.g,n[s*3+2]=Xu.b;return i.setAttribute("color",new $t(n,3)),i}function Jf(i,e,t,n=14){let s=[];i.forEach((o,c)=>{let l=i[(c+1)%i.length];if(Math.abs(o[0]-l[0])+Math.abs(o[1]-l[1])<1e-6)return;let h=new Ll([new nt(o[1],o[0]),new nt(l[1],l[0])],n,0,Math.PI).toNonIndexed();h.rotateX(-Math.PI/2),s.push(Bs(h,e[c]))});let r=new pa(new Ei(i.map(([o,c])=>new nt(-o,c)))).toNonIndexed();r.rotateY(-Math.PI/2);let a=r.clone();return a.scale(1,-1,1),s.push(Bs(r,t),Bs(a,t)),Ss(s)}var Zf=(i,e,t,n,s,r,a)=>Jf([[0,e],[0,t],[i,t],[i,e]],[r,n,r,s],r,a);function km({kit:i,M:e,Ug:t,tier:n,reduce:s}){let{box:r,cyl:a,tube:o,mats:c,atlas:l,V:h}=i,d=new yt;d.name="sewer";let p=new yt;d.add(p);let u=Nn(1958),f=(V,et,Mt={})=>i.std(16777215,V,et,{vertexColors:!0,side:li,...Mt}),x=f(.74,0),g=f(.48,.8,{envMapIntensity:1.1}),m=x,_=(V,et,Mt,Tt,Nt,L,ce,ke,ze={})=>{let tt=r(V,et,Mt,ze.mat||x,Nt,L,ce,ke,ze);return Bs(tt.geometry,Tt),tt},b=(V,et,Mt,Tt,Nt,L,ce,ke={})=>{let ze=a(V,et,ke.mat||x,Tt,Nt,L,ce,ke);return Bs(ze.geometry,Mt),ze},y=(V,et,Mt,Tt,Nt={})=>{let L=o(V,et,Nt.mat||x,Tt,Nt);return Bs(L.geometry,Mt),L},M=(V,et,Mt={})=>i.place(new Fe(V,Mt.mat||x),Mt.x||0,Mt.y||0,Mt.z||0,et,Mt),T=(V,et,Mt,Tt={})=>(Bs(V,et),i.place(new Fe(V,Tt.mat||x),Tt.x||0,Tt.y||0,Tt.z||0,Mt,Tt)),R=i.flow(13214314,{base:2892310,intensity:1.1,dash:1.4,speed:.45,rest:.3,gain:1,roughness:.12}),v=(V,et={})=>i.flow(5220095,{base:V,intensity:1.6,dash:2.2,speed:.7,rest:.05,gain:1,roughness:.4,...et}),A=t&&t.group?t.group.children.find(V=>V.isMesh&&V.geometry.parameters&&V.geometry.parameters.height===9):null,I=A?A.material:c.soil,G=(V,et,Mt,Tt,Nt,L)=>{let ce=new sn(Math.abs(et-V),Tt-Mt);ce.rotateY(-Math.PI/2),ce.translate(Nt,(Mt+Tt)/2,(V+et)/2);let ke=ce.attributes.position,ze=ce.attributes.uv;for(let tt=0;tt<ke.count;tt++)ze.setXY(tt,(ke.getZ(tt)+120)/240,(ke.getY(tt)+9.02)/9);return i.place(new Fe(ce,I),0,0,0,L,{cast:!1})},w=document.createElement("canvas");w.width=w.height=256;{let V=w.getContext("2d");V.fillStyle="#3b3833",V.fillRect(0,0,256,256);for(let et=0;et<520;et++){let Mt=u()*256,Tt=u()*256,Nt=3+u()*7,L=70+u()*90;V.fillStyle=`rgb(${L|0},${L*.96|0},${L*.9|0})`,V.beginPath(),V.ellipse(Mt,Tt,Nt,Nt*(.6+u()*.4),u()*3,0,6.3),V.fill(),V.fillStyle="rgba(255,255,255,0.12)",V.beginPath(),V.ellipse(Mt-Nt*.25,Tt-Nt*.25,Nt*.45,Nt*.3,0,0,6.3),V.fill()}}let U=new Zn(w);U.colorSpace=vn,U.wrapS=U.wrapT=Qn,U.repeat.set(2.6,2.6);let N=i.std(16777215,.95,0,{map:U}),B=new Hn({color:16039294,toneMapped:!1}),Z=(V,et,Mt,Tt)=>{let Nt=new Fe(new En(.05,.06,Math.abs(et-V)),B);return Nt.position.set(Mt-.02,.02,(V+et)/2),Nt.userData.noAO=!0,Tt.add(Nt),Nt},H=(V,et,Mt=[],Tt=p,Nt=Fi)=>{let L=new Ei(V.map(([ke,ze])=>new nt(ke,ze)));Mt.forEach(ke=>L.holes.push(ke.length===3?new Ks().absarc(ke[0],ke[1],ke[2],0,Math.PI*2,!1):new Ks(ke.map(([ze,tt])=>new nt(ze,tt)))));let ce=new pa(L,8);return ce.rotateY(-Math.PI/2),ce.translate(Nt,0,0),typeof et=="object"?i.place(new Fe(ce,et),0,0,0,Tt,{cast:!1}):T(ce,et,Tt,{cast:!1})},Y=[{key:"mon",w:320,h:232,text:"0.0 m",sub:"CLAY 150 mm",flag:"",draw:q},{key:"pvc",text:"SEWER PVC \xB7 SDR 35 \xB7 150 mm \xB7 2025",w:600,h:34,size:22,color:"#eef3ec"},{key:"pb",text:"PB \xB7 19 mm \xB7 1987",w:300,h:34,size:22,color:"#22262b"},{key:"pl",text:"PROPERTY LINE",w:220,h:54,size:26,color:"#1a1206",bg:"#f08a2c"},{key:"permit",text:"CONNECTION PERMIT",sub:"INSPECTED \xB7 BACKFILL OK",w:260,h:74,size:22,color:"#15130c",bg:"#e9c22e"},{key:"shut",text:"MAIN SHUT-OFF",w:200,h:46,size:22,color:"#fff4ea",bg:"#b8321f"},{key:"pump",text:"SUMP \xB7 1/3 HP",w:180,h:40,size:22,color:"#d9dde2"}];function q(V,et,Mt,Tt){V.fillStyle="#05070a",V.fillRect(0,0,et,Mt);let Nt=et/2,L=Mt/2+14,ce=V.createRadialGradient(Nt,L,4,Nt,L,112);ce.addColorStop(0,"#040201"),ce.addColorStop(.32,"#1d1008"),ce.addColorStop(.78,"#9a6038"),ce.addColorStop(1,"#4a2c18"),V.fillStyle=ce,V.beginPath(),V.arc(Nt,L,108,0,6.3),V.fill(),V.strokeStyle="rgba(14,8,4,.85)",V.lineWidth=6;let ke=Tt.flag==="OFFSET JOINT"?9:0;if(V.beginPath(),V.arc(Nt,L+ke,46,0,6.3),V.stroke(),V.fillStyle="rgba(150,112,62,.75)",V.beginPath(),V.ellipse(Nt,L+86,58,12,0,0,6.3),V.fill(),Tt.flag==="CRACK"&&(V.strokeStyle="#0a0503",V.lineWidth=3,V.beginPath(),V.moveTo(Nt-18,L-104),V.lineTo(Nt-8,L-80),V.lineTo(Nt-20,L-62),V.lineTo(Nt-9,L-44),V.stroke()),Tt.flag==="ROOTS"){V.strokeStyle="#d8c49a",V.lineWidth=2;for(let ze=0;ze<9;ze++)V.beginPath(),V.moveTo(Nt-40+ze*10,L-46),V.quadraticCurveTo(Nt-30+ze*7,L,Nt-20+ze*5,L+20),V.stroke()}V.textAlign="left",V.textBaseline="middle",V.fillStyle="#f4bd7e",V.font="700 28px ui-monospace, Menlo, monospace",V.fillText(Tt.text,14,24),V.fillStyle="#cfd4da",V.font="500 15px ui-monospace, Menlo, monospace",V.fillText(Tt.sub,14,50),V.fillStyle="#ff6b4f",V.beginPath(),V.arc(et-22,22,7,0,6.3),V.fill(),V.textAlign="right",V.fillStyle="#cfd4da",V.font="600 14px ui-monospace, Menlo, monospace",V.fillText("REC",et-36,23),Tt.flag&&(V.textAlign="left",V.fillStyle="#ff6b4f",V.font="700 20px ui-monospace, Menlo, monospace",V.fillText(Tt.flag,14,Mt-18))}let W=l(Y,{width:1024,emissive:.26}),J=new yt;J.position.set(mn,$f,Os),J.rotation.x=-Kf,p.add(J);let ge={out:9064756,inn:5977123,end:7620398,cut:12880480},Ne=Jf([[0,zm],[0,Za],[.09,Za],[.125,Wu],[Zo+.075,Wu],[Zo+.075,Sn],[.1,Sn],[.1,zm]],[ge.end,ge.out,ge.out,ge.out,ge.end,ge.inn,ge.inn,4138008],ge.cut,18),qe=new Mi(Ne,x,Vu);qe.castShadow=!0,qe.receiveShadow=!0,qe.frustumCulled=!1,qe.userData.keep=!0,J.add(qe);let Je=V=>V===Gm?-.013:V===4?-.016:V===5?-.024:V===6?-.01:0,mt=[],te=new zt,Ee=new zt().makeScale(0,0,0);for(let V=0;V<Vu;V++)mt.push(new zt().makeTranslation(0,Je(V),-$a(V))),qe.setMatrixAt(V,mt[V]);let Ue="",be=V=>{let et="";for(let Mt=0;Mt<Vu;Mt++)et+=V(Mt)?"0":"1";if(et!==Ue){Ue=et;for(let Mt=0;Mt<Vu;Mt++)qe.setMatrixAt(Mt,et[Mt]==="1"?mt[Mt]:Ee);qe.instanceMatrix.needsUpdate=!0}};y([[.02,Sn*.99,-1.02],[.034,Sn*.97,-1.18],[.022,Sn*.98,-1.32],[.04,Sn*.96,-1.5]].map(([V,et,Mt])=>{let Tt=Sn*.985/Math.hypot(V,et);return[V*Tt,et*Tt,Mt]}),.0028,1182214,J,{radial:5,seg:16,cast:!1});let Ge=(V,et,Mt,Tt,Nt,L=R,ce=0)=>{let ke=new sn(et-V,Tt);ke.rotateX(-Math.PI/2),ke.rotateY(Math.PI/2),ke.translate(ce+Tt/2,Mt,-(V+et)/2);let ze=ke.attributes.position,tt=ke.attributes.uv;for(let wt=0;wt<ze.count;wt++)tt.setX(wt,-ze.getZ(wt));return i.place(new Fe(ke,L),0,0,0,Nt,{cast:!1})},re=V=>Math.sqrt(Sn*Sn-(Sn-V)*(Sn-V));Ge(0,sa,-Sn+.016,re(.016),J),Ge($a(4)-.05,$a(7)-.1,-Sn+.014,re(.03),J).position.y=-.018;let Qe=new yt,ue=.78,me=-3.06,ie=Math.atan2(me-$f-.02,ue-Os);Qe.position.set(mn,me,ue),Qe.rotation.x=-ie,p.add(Qe);let xe={out:3026996,inn:5190692,cut:9277590},we=ue-Os+.12;M(Zf(we,Sn,.086,xe.out,xe.inn,xe.cut,16),Qe),[0,1.5,3,4.5].forEach(V=>M(Jf([[V,.086],[V,.104],[V+.09,.104],[V+.12,.086]],[xe.cut,xe.out,xe.out,xe.out],xe.cut,16),Qe)),Ge(.05,we,-Sn+.014,re(.014),Qe),b(.056,.4,xe.out,-.2,.012,-2.75,Qe,{axis:"x",seg:16});{let V=me-(ue-_r)*Math.tan(ie)+.06;M(Zf(-2.77-V,.052,.062,xe.out,xe.inn,xe.cut,14).rotateX(Math.PI/2),p,{x:mn,y:V,z:_r})}b(.09,.012,9212827,mn,-2.795,ue+.04,p,{mat:g,seg:24}),y([[mn,-2.8,ue+.04],[mn,-3.08,ue+.06],[mn,-3.2,ue-.04],[mn,-3.1,ue-.14],[mn,-3.06,ue-.02]],.05,xe.out,p,{radial:12,seg:24});let $e=e.form||e.concrete;H([[-4.5,-3.25],[-3.7,-3.25],[-3.7,-2.95],[-4,-2.95],[-4,.3],[-4.25,.3],[-4.25,-2.95],[-4.5,-2.95]],$e),H([[4.5,-3.25],[3.7,-3.25],[3.7,-2.95],[4,-2.95],[4,.3],[4.25,.3],[4.25,-2.95],[4.5,-2.95]],$e,[[4.125,-2.3,.028]]),[[-4,_r-.07],[_r+.07,ue-.07],[ue+.13,Xi-.25],[Xi+.25,4]].forEach(([V,et])=>H([[V,-2.96],[et,-2.96],[et,-2.8],[V,-2.8]],e.slab||7170659)),[-1,1].forEach(V=>_(Wi-Fi,3,.012,1447963,(Fi+Wi)/2,-1.55,V*4.258,p,{cast:!1})),G(Os,or,-9.02,0,Wi,p),G(lr,-60,-9.02,0,Wi,p),G(-Os,60,-9.02,0,Wi,p),G(Os,-Os,-9.02,-2.96,Wi,p),Z(Os,or,Wi,p),Z(lr,-60,Wi,p),Z(-Os,60,Wi,p);let Xe=new yt;Xe.userData.keep=!0,d.add(Xe),G(or,lr,-9.02,0,Wi,Xe);let lt={out:8815226,inn:4999491,cut:11117980},ft=2.6;[[ar,lt.out],[ku,lt.inn]].forEach(([V,et])=>b(V,ft,et,Fi+ft/2,rr,sr,p,{axis:"x",seg:32,open:!0}));let j=new Ha(ku,ar,32);j.rotateY(-Math.PI/2),T(j,lt.cut,p,{x:Fi,y:rr,z:sr,cast:!1});let Dt=Math.sqrt(ku*ku-.085*.085);{let V=new sn(ft,Dt*2);V.rotateX(-Math.PI/2),V.translate(Fi+ft/2,rr-.085,sr);let et=V.attributes.uv,Mt=V.attributes.position;for(let Tt=0;Tt<Mt.count;Tt++)et.setX(Tt,Mt.getX(Tt));i.place(new Fe(V,R),0,0,0,p,{cast:!1})}let _t=new yt;_t.userData.keep=!0,d.add(_t);let z=[Oi(sa-.25),Oi(sa),h(mn,rr+.25,sr+.2),h(mn,rr+ar*.72,sr+ar*.68)];y(z,Wu,ge.out,_t,{radial:16,seg:16}),T(new jn(.15,14,10),7828331,_t,{x:mn,y:rr+ar*.72,z:sr+ar*.68}).scale.set(.8,.7,1);let S=6966835,le=[13350026,11112036,14272416],he=$a(p_),_e=(V,et,Mt,Tt,Nt,L={})=>{let ce=[V[0]];for(let an=1;an<V.length;an++){let xn=V[an-1],Wt=V[an],Gt=Math.hypot(Wt[0]-xn[0],Wt[1]-xn[1],Wt[2]-xn[2])*(L.wob??.12);for(let mi=1;mi<=3;mi++){let Zt=mi/3;ce.push(mi===3?Wt:[ot(xn[0],Wt[0],Zt)+(u()-.5)*Gt*.3,ot(xn[1],Wt[1],Zt)+(u()-.5)*Gt,ot(xn[2],Wt[2],Zt)+(u()-.5)*Gt])}}let ke=y(ce,et,Tt,Nt,{radial:L.radial||6,density:L.density||26,tension:.4,cast:L.cast??et>.01}),ze=ke.geometry,{tubularSegments:tt,radialSegments:wt}=ze.parameters,kt=ze.attributes.position,Ot=new F;for(let an=0;an<=tt;an++){ke.userData.curve.getPointAt(an/tt,Ot);let xn=ot(1,Mt/et,Math.pow(an/tt,.8));for(let Wt=0;Wt<=wt;Wt++){let Gt=an*(wt+1)+Wt;kt.setXYZ(Gt,Ot.x+(kt.getX(Gt)-Ot.x)*xn,Ot.y+(kt.getY(Gt)-Ot.y)*xn,Ot.z+(kt.getZ(Gt)-Ot.z)*xn)}}return ke},rt=(V,et=0,Mt=Za+.006)=>Oi(he+et,Mt*Math.sin(V),Mt*Math.cos(V));[[.034,.008,[[.83,-.12,-12.4],[.8,-.6,-12],[.78,-1.3,-11.6],[.76,-2,-11.45],[.74,-2.7,-11.8]]],[.03,.007,[[.83,-.15,-12.48],[.8,-.7,-13],[.77,-1.4,-13.4],[.75,-2.2,-13.5],[.73,-2.9,-13.2]]],[.028,.006,[[.83,-.2,-12.44],[.79,-1,-12.5],[.76,-1.9,-12.66],[.73,-2.7,-12.7],rt(.25,-.02,.15).toArray()]]].forEach(([V,et,Mt])=>_e(Mt,V,et,S,p));for(let V=0;V<8;V++){let et=.2+u()*1.4,Mt=-11.9-u()*1.4,Tt=[.7+u()*.1,-2.6-u()*.5,Mt],Nt=[Tt[0]-.02+u()*.04,ot(Tt[1],-3.3,.45),ot(Mt,-12.62,.4)+(u()-.5)*.25],L=rt(et+.5,-.12+u()*.08,.17);_e([Tt,Nt,L.toArray(),rt(et,-.03,Za+.008).toArray(),rt(et+.2,.004,.106).toArray()],.0055,.0016,S,p,{radial:5,density:40,cast:!1})}for(let V=0;V<18;V++){let et=u()*1.7,Mt=-.06+u()*.16,Tt=.4+u()*.8;_e([rt(et,Mt,Za+.004).toArray(),rt(et+Tt*.5,Mt+.02,Za+.009).toArray(),rt(et+Tt,Mt-.01,Za+.004).toArray()],.0028,.0012,S,p,{radial:4,density:60,cast:!1})}let it=new yt;it.userData.keep=!0,it.position.set(0,0,-(he+.075)),J.add(it);let Oe=n===0?26:44;for(let V=0;V<Oe;V++){let et=.05+u()*3.05,Mt=.12+u()*u()*.6,Tt=V<5?.0045:.0016+u()*.0018,Nt=Sn*.97*Math.sin(et),L=Sn*.97*Math.cos(et),ce=0,ke=-Nt*.25,ze=-.2-L*.2,tt=[];for(let wt=0;wt<=9;wt++){tt.push([Nt,L,ce]),ce-=Mt/9,ke+=(u()-.5)*.7,ze+=(u()-.62)*.5,Nt+=ke*Mt*.06,L+=ze*Mt*.06;let kt=Math.hypot(Nt,L);kt>Sn*.94&&(Nt*=Sn*.94/kt,L*=Sn*.94/kt,ke*=-.5,ze*=-.5)}_e(tt,Tt,Tt*.35,le[V%3],it,{radial:4,density:50,cast:!1,wob:0})}An(it);let Ve=he-.8,je=he+.9,xt=48,D=16,oe=new dn(Sn-.0018,Sn-.0018,je-Ve,D,xt,!0,0,Math.PI);oe.rotateX(-Math.PI/2);let fe=new Fe(Bs(oe,9207644),f(.9,0));fe.position.set(0,0,-(Ve+je)/2),fe.userData.keep=!0,fe.receiveShadow=!0,J.add(fe);let Re=new yt;Re.userData.keep=!0,d.add(Re);let We=new yt;Re.add(We);let k=1.55,Le=-2.5,de=-2.42;[k-.09,k+.09].forEach(V=>{y([[V,-2.79,de-.26],[V,Le,de],[V,-2.79,de+.26]],.011,9212827,We,{mat:g,radial:8,tension:0}),b(.013,.56,9212827,V,-2.79,de,We,{axis:"z",mat:g,seg:8})}),b(.014,.2,9212827,k,Le,de,We,{axis:"x",mat:g,seg:10});let Be=1,Pe=-2.92,ae=.32;_(.17,.075,.26,1776929,Be,-2.762,Pe,We,{r:.012}),_(.07,.01,.12,3817029,Be-.03,-2.722,Pe+.04,We,{cast:!1});let at=new yt;at.position.set(Be+.075,-2.725,Pe),at.rotation.z=ae,We.add(at),_(.016,.2,.26,1776929,-.008,.1,0,at,{r:.006});let Ze=W.plane("mon",.225,Re,0,0,0,{keep:!0});Ze.rotation.order="ZYX",Ze.rotation.set(0,-Math.PI/2,ae),Ze.position.set(Be+.075-.0165*Math.cos(ae)-.1*Math.sin(ae),-2.725-.0165*Math.sin(ae)+.1*Math.cos(ae),Pe);let vt=new yt;vt.position.set(k,Le,de),Re.add(vt),b(.25,.014,2500910,.075,0,0,vt,{axis:"x",seg:36}),b(.05,.15,3817029,0,0,0,vt,{axis:"x",seg:16});for(let V=0;V<7;V++){let et=new Qi(.11+V*.019,.0075,6,40);et.rotateY(Math.PI/2),T(et,14857514,vt,{x:-.02+V%2*.016,cast:!1})}[0,2.1,4.2].forEach(V=>_(.012,.36,.03,9212827,.06,0,0,vt,{mat:g,rot:[V,0,0],cast:!1})),An(vt);let Ft=V=>me-(ue-V)*Math.tan(ie);y([[k-.04,Le-.23,de-.1],[k-.12,-2.775,de-.32],[1.2,-2.79,-2.62],[.84,-2.785,-2.68],[mn+.08,-2.76,_r+.04],[mn+.01,-2.86,_r],[mn,Ft(_r)-.06,_r-.04]],.0055,14857514,We,{radial:6,density:24,tension:.4,cast:!1}),y([[k-.06,Le,de],[k-.2,-2.79,de-.1],[Be+.06,-2.79,Pe+.18],[Be+.05,-2.76,Pe+.12]],.005,1052948,We,{radial:6,cast:!1}),b(.05,.03,11569722,.76,-2.785,_r+.3,We,{mat:g,seg:16}),An(We);let Xt=new fs([h(mn,Ft(_r-.1)-Sn,_r-.1),h(mn,Ft(-3.6)-Sn,-3.6),h(mn,Ft(Os+.1)-Sn,Os+.1),Oi(.3,0,-Sn),Oi(1,0,-Sn),Oi(1.6,0,-Sn)],!1,"catmullrom",.2),rn=120,Pn=o(Xt.getSpacedPoints(rn),.0055,x,d,{seg:rn,radial:6,keep:!0,cast:!1});Bs(Pn.geometry,14857514);let Jt=new F,Tn=new F,_n=new yt;_n.userData.keep=!0,d.add(_n),_(.06,.034,.16,15319598,0,.002,0,_n,{r:.008}),_(.03,.012,.1,2764081,0,.024,.01,_n,{r:.004}),[-1,1].forEach(V=>[-1,1].forEach(et=>{let Mt=b(.02,.013,1052948,V*.039,-.012,et*.058,_n,{axis:"x",seg:14});Mt.rotation.z=V*.5})),b(.022,.06,10133929,0,.008,-.105,_n,{axis:"z",seg:18}),b(.0095,.006,329224,0,.008,-.136,_n,{axis:"z",seg:14}),b(.008,.03,2764081,0,.004,.092,_n,{axis:"z",seg:10});let C=new Fe(new Qi(.0158,.003,6,20),c.led(16773336,2.4));C.position.set(0,.008,-.1355),_n.add(C),An(_n);let Se=i.sprite(16769725,.16,0,.008,-.16,_n,.55),$=new yt;$.userData.keep=!0,J.add($);let Ae=new yt;$.add(Ae),b(.012,.05,11055288,0,0,0,Ae,{axis:"z",mat:g,seg:12});for(let V=0;V<4;V++){let et=_(.004,Sn*1.7,.03,13160148,0,0,-.03,Ae,{mat:g,cast:!1});et.rotation.z=V*Math.PI/4}b(.009,.04,5593439,0,0,.04,$,{axis:"z",mat:g,seg:10}),An(Ae),An($);let Te=new dn(.0085,.0085,1,8,1,!0);Te.translate(0,.5,0),Te.rotateX(-Math.PI/2);let ht=new Fe(Bs(Te,4869717),g);ht.userData.keep=!0,J.add(ht);let gt=new yt;gt.userData.keep=!0,J.add(gt),b(.014,.04,13214282,0,0,0,gt,{axis:"z",mat:g,seg:14}),T(new jn(.014,14,8,0,Math.PI*2,0,Math.PI/2).rotateX(-Math.PI/2),13214282,gt,{z:-.02,mat:g}),b(.011,.025,10133929,0,0,.032,gt,{axis:"z",mat:g,seg:12}),An(gt);let Ct=new dn(.009,.009,1,8,1,!0);Ct.translate(0,.5,0),Ct.rotateX(-Math.PI/2);let dt=new Fe(Bs(Ct,1382170),m);dt.userData.keep=!0,J.add(dt);let Lt=200,Vt=i.particles(Lt,{color:10473727,size:.017,gain:1.6});J.add(Vt);let wn=new yt;wn.userData.keep=!0,J.add(wn);let kn=60,Vn=16,Jn=ta[1]-ta[0],Xn=i.flow(16751165,{base:6265980,intensity:.75,dash:1.4,speed:.32,rest:.12,gain:1,roughness:.55,metalness:0});Xn.side=li;let Wn=new dn(Sn-.003,Sn-.003,Jn,Vn,kn,!0,0,Math.PI);Wn.rotateX(-Math.PI/2),Wn.translate(0,0,-(ta[0]+ta[1])/2);{let V=Wn.attributes.position,et=Wn.attributes.uv;for(let Mt=0;Mt<V.count;Mt++)et.setX(Mt,-V.getZ(Mt))}let P=i.place(new Fe(Wn,Xn),0,0,0,wn,{keep:!0}),se=new jn(Sn-.003,16,8,0,Math.PI*2,0,Math.PI/2);se.rotateX(-Math.PI/2),se.scale(1,1,.45);let Ie=i.place(new Fe(se,Xn),0,0,0,wn,{keep:!0}),Me=new dn(.08,.08,1,24,1,!0);Me.translate(0,.5,0),Me.rotateX(-Math.PI/2);let Ce=i.place(new Fe(Me,c.hdpe),0,0,0,wn,{keep:!0}),St=new yt;St.userData.keep=!0,wn.add(St),b(.03,.17,10134445,0,0,-.085,St,{axis:"z",r2:.104,mat:g,seg:20}),b(.086,.07,7107451,0,0,.035,St,{axis:"z",mat:g,seg:20});for(let V=0;V<3;V++){let et=_(.006,.05,.12,12041926,0,0,-.07,St,{mat:g});et.geometry.translate(0,.085,0),et.rotation.z=V*Math.PI*2/3+.4}b(.006,na[1]-.05,10133929,0,0,-na[1]/2+.05,St,{axis:"z",mat:g,seg:6,cast:!1}),An(St);let It=44,ee=Bs(new En(.05,.011,.065),7619114),ne=new Mi(ee,x,It);ne.userData.keep=!0,ne.frustumCulled=!1,ne.castShadow=!0;let pe=[];{let V=new Bn,et=new Ui,Mt=new F,Tt=new F(1,1,1);for(let Nt=0;Nt<It;Nt++){let L=na[0]+.1+Nt/It*(na[1]-na[0]-.15)+u()*.05,ce=u()*Math.PI*2,ke=.1+u()*.05;Mt.set(ke*Math.sin(ce),ke*Math.cos(ce),-L),et.set(u()*.5,u()*.6,-ce+(u()-.5)*.6),V.setFromEuler(et),Tt.set(.6+u()*.6,1,.6+u()*.7),te.compose(Mt,V,Tt),ne.setMatrixAt(Nt,te),pe.push(L)}}wn.add(ne);let He=new yt;He.userData.keep=!0,d.add(He);let E=new yt;He.add(E),G(or,lr,ia,0,bs,E),G(or,lr,-9.02,ia,Wi,E);{[[or,-1],[lr,1]].forEach(([et,Mt])=>{let Tt=new sn(bs-Ra,-ia);Tt.rotateY(Mt>0?0:Math.PI),Tt.translate((bs+Ra)/2,ia/2,et);let Nt=Tt.attributes.position,L=Tt.attributes.uv;for(let ce=0;ce<Nt.count;ce++)L.setXY(ce,(Nt.getX(ce)*.3+60)/240,(Nt.getY(ce)+9.02)/9);i.place(new Fe(Tt,I),0,0,0,E,{cast:!1})});let V=new sn(bs-Ra,or-lr);V.rotateX(-Math.PI/2),V.translate((bs+Ra)/2,ia,(or+lr)/2),T(V,3877918,E,{cast:!1})}_(.01,.1,-15.95-lr,2763566,bs-.006,-.045,(-15.95+lr)/2,E,{cast:!1}),_(.01,.3,-15.95-lr,7828331,bs-.006,-.25,(-15.95+lr)/2,E,{cast:!1}),[-15,-16.9].forEach(V=>{_(.05,2.5,.08,12765390,bs-.048,-1.4,V,E,{mat:g}),[-.6,-2.3].forEach(et=>{b(.03,bs-.07-Ra+.3,12765390,(bs-.07+Ra-.3)/2,et,V,E,{axis:"x",mat:g,seg:12}),b(.042,.2,14201402,bs-.25,et,V,E,{axis:"x",mat:m,seg:14})})}),[.62,1].forEach(V=>y([[V,ia,or-.6],[V,.9,or-.04]],.016,12765390,E,{mat:g,radial:8,tension:0}));for(let V=0;V<15;V++){let et=(V+.5)/15;b(.012,.38,12765390,.81,ot(ia,.9,et),ot(or-.6,or-.04,et),E,{axis:"x",mat:g,seg:8,cast:!1})}T(new jn(1,20,10,0,Math.PI*2,0,Math.PI/2),3812125,E,{x:2.6,y:-.05,z:-15}).scale.set(1.15,.85,1.05),T(new jn(1,20,6,0,Math.PI*2,0,.7),14673647,E,{x:2.6,y:-.06,z:-15,cast:!1}).scale.set(1.17,.87,1.07);let O=new yt;O.position.copy(J.position),O.rotation.copy(J.rotation),E.add(O);let K=$a(13)-.04;{let V=sa-.3,et=Oi(K,0,-.035),Mt=Oi(V,0,-.035);H([[et.z,ia],[Mt.z,ia],[Mt.z,Mt.y],[et.z,et.y]],N,[],E);let Tt=new sn(bs-Fi,V-K);Tt.rotateX(-Math.PI/2),Tt.translate((bs+Fi)/2-mn,-.035,-(K+V)/2);let Nt=Tt.attributes.position,L=Tt.attributes.uv;for(let ce=0;ce<Nt.count;ce++)L.setXY(ce,Nt.getX(ce),Nt.getZ(ce));i.place(new Fe(Tt,N),0,0,0,O,{cast:!1}),_(bs-Fi-.01,.5,.012,3877918,(bs+Fi)/2-mn,-.3,-K+.006,O,{cast:!1})}let Q=3112266;b(.081,sa-K,Q,0,0,-(K+sa)/2,O,{axis:"z",mat:m,seg:28}),b(.1,.16,1513499,0,0,-K+.02,O,{axis:"z",seg:24}),[-.05,.05].forEach(V=>b(.102,.018,12765390,0,0,-K+.02+V,O,{axis:"z",mat:g,seg:24,cast:!1})),W.plane("pvc",.62,O,-.0815,.012,-(K+.7),{rot:[0,-Math.PI/2,0]}),y([Oi(sa-.05),Oi(sa+.1),h(mn,rr+.24,sr+.2),h(mn,rr+ar*.73,sr+ar*.69)],.081,Q,E,{mat:m,radial:20,seg:16});{let V=new dn(ar+.013,ar+.013,.34,24,1,!0,-.25,2.2);V.rotateZ(Math.PI/2),T(V,Q,E,{x:mn,y:rr,z:sr,mat:m})}[-.13,.13].forEach(V=>b(ar+.017,.025,12765390,mn+V,rr,sr,E,{axis:"x",mat:g,seg:32,open:!0,cast:!1})),W.plane("permit",.17,E,Fi+.03,rr+.24,sr-.26,{rot:[0,-Math.PI/2,0]}),An(E),_(.035,.75,.035,10123858,.66,-.12,-15.95,p),b(.008,.6,5981750,.66,-.7,-15.95,p,{seg:6,cast:!1}),_(.004,.12,.05,15764012,.64,.17,-15.95-.03,p,{cast:!1,rot:[0,0,.2]}),W.plane("pl",.13,p,.64,.05,-15.95,{rot:[0,-Math.PI/2,0]});let ve=document.createElement("canvas");ve.width=256,ve.height=128;{let V=ve.getContext("2d"),et=V.createLinearGradient(0,0,0,128);et.addColorStop(0,"rgba(220,236,255,0.55)"),et.addColorStop(.86,"rgba(205,226,252,0.34)"),et.addColorStop(.97,"rgba(205,226,252,0.12)"),et.addColorStop(1,"rgba(200,222,250,0)"),V.fillStyle=et,V.fillRect(0,0,128,128);for(let Tt=0;Tt<260;Tt++)V.fillStyle=`rgba(240,248,255,${.2+u()*.5})`,V.fillRect(u()*128,Math.pow(u(),1.6)*110,1+u()*1.5,1+u()*1.5);let Mt=V.createRadialGradient(192,64,2,192,64,62);Mt.addColorStop(0,"rgba(8,6,4,0.72)"),Mt.addColorStop(1,"rgba(8,6,4,0)"),V.fillStyle=Mt,V.fillRect(128,0,128,128)}let De=new Zn(ve);De.colorSpace=vn;let ye=new on({map:De,transparent:!0,depthWrite:!1,roughness:.9,emissive:10467544,emissiveIntensity:.05}),X=(V,et,Mt,Tt,Nt,L,ce)=>{let ke=new sn(Mt,Tt);ke.rotateY(-Math.PI/2);let ze=ke.attributes.uv;for(let tt=0;tt<ze.count;tt++)ze.setX(tt,ot(V,et,ze.getX(tt)));return i.place(new Fe(ke,ye),Nt,L,ce,p,{cast:!1,receive:!1})};X(0,.5,26,2.05,Wi-.004,-1.025,4.25+13),X(.5,1,.8,.6,Wi-.006,-2.45,4.6);let Ye=-2.32,Ke=V=>Ye-Math.max(0,V-4.3)*.012,ct=x,ut=g;y([[di,Ke(4.44),4.44],[di,Ke(7.5),7.5],[di,Ke(12),12]],.02,8423053,p,{mat:ct,radial:10,tension:0}),y([[di,Ke(4.42),4.42],[di,Ye,4.3],[di,Ye,3.96],[di,Ye+.06,3.9],[di,Ye+.2,3.88],[di,-1.02,3.88],[di,-.3,3.88],[di,-.24,3.8],[di-.5,-.24,3.8]],.019,12088383,p,{mat:ut,radial:10,density:26,tension:.15}),b(.027,.045,13214282,di,Ke(4.43),4.43,p,{axis:"z",mat:g,seg:14}),[4.405,4.455].forEach(V=>b(.025,.008,12088383,di,Ke(V),V,p,{axis:"z",mat:g,seg:12,cast:!1})),b(.023,.06,8028295,di,Ke(4.6),4.6,p,{axis:"z",seg:12}),_(.004,.012,.05,789775,di-.023,Ke(4.6)+.004,4.6,p,{cast:!1}),W.plane("pb",.19,p,di-.0215,Ke(5.3),5.3,{rot:[0,-Math.PI/2,0]}),b(.022,.07,13214282,di,-1.72,3.88,p,{mat:g,seg:14}),_(.012,.016,.1,12728875,di-.03,-1.7,3.88-.04,p,{mat:m,cast:!1}),W.plane("shut",.11,p,di-.045,-1.8,3.82,{rot:[0,-Math.PI/2,0]}),_(.1,.17,.1,2241610,di,-1.42,3.88,p,{r:.012,mat:m}),b(.04,.02,9212827,di-.05,-1.4,3.88,p,{axis:"x",mat:g,seg:18});let pt=4.7,Pt=-3.25;b(.066,Wi-Fi,12433322,(Fi+Wi)/2,Pt,pt,p,{axis:"x",seg:24,open:!0}),b(.05,Wi-Fi,1118740,(Fi+Wi)/2,Pt,pt,p,{axis:"x",seg:24,open:!0});{let V=new Ha(.05,.066,24);V.rotateY(-Math.PI/2),T(V,2763823,p,{x:Fi+.002,y:Pt,z:pt,cast:!1});let et=new Ha(.06,.066,24);et.rotateY(-Math.PI/2),T(et,14209990,p,{x:Fi+.003,y:Pt,z:pt,cast:!1})}H([[4.5,-3.37],[5.08,-3.37],[5.08,-2.87],[4.5,-2.87]],N,[[pt,Pt,.068]],p),_(Wi-Fi,.008,.66,13617854,(Fi+Wi)/2,-2.865,4.82,p,{cast:!1}),y([[mn,Pt-.03,pt-.04],[mn,-3.36,4.42],[mn,-3.37,3.6],[mn,-3.37,Xi+.2]],.038,1776929,p,{radial:12,tension:.2});let bt=new Fe(Zf(.68,.215,.232,1842722,2829875,5264475,22),x);bt.geometry.rotateX(Math.PI/2),bt.position.set(mn,-3.48,Xi),p.add(bt),bt.receiveShadow=!0;{let V=new wo(.232,20,-Math.PI/2,Math.PI);V.rotateX(-Math.PI/2),T(V,2829875,p,{x:mn,y:-3.475,z:Xi,cast:!1})}b(.082,.22,2764081,mn,-3.36,Xi,p,{seg:20}),T(new jn(.082,18,6,0,Math.PI*2,0,Math.PI/2),2764081,p,{x:mn,y:-3.25,z:Xi}),b(.095,.02,1710878,mn,-3.465,Xi,p,{seg:20}),W.plane("pump",.1,p,mn-.084,-3.34,Xi,{rot:[0,-Math.PI/2,0]}),b(.004,.3,9212827,mn+.02,-3.2,Xi+.12,p,{mat:g,seg:6,cast:!1});let st=v(13815750,{intensity:2.6,speed:1.4,level:0,roughness:.45}),Rt=.66;o([[mn,-3.17,Xi],[mn,-3,Xi],[Rt,-2.85,Xi],[Rt,-2.2,Xi],[Rt,-.5,Xi],[Rt,-.42,Xi+.08],[Rt,-.42,3.86],[Rt,-.34,3.94],[Rt,.12,3.94],[Rt,.15,4.02],[Rt,.15,4.42],[Rt,.06,4.5]],.024,st,p,{radial:10,density:16,tension:.12}),b(.034,.13,9409691,Rt,-1.9,Xi,p,{seg:16}),[-1.84,-1.96].forEach(V=>b(.037,.012,12765390,Rt,V,Xi,p,{mat:g,seg:16,cast:!1}));let Bt=new Fe(new wo(.214,24,-Math.PI/2,Math.PI).rotateX(-Math.PI/2),c.water);Bt.position.set(mn,-3.3,Xi),Bt.userData.keep=!0,d.add(Bt);let Rn=i.sprite(7321855,.42,di-.04,Ke(4.6)+.04,4.6,d,.75),On=110,Yn=i.particles(On,{color:8175871,size:.04,gain:2.4});d.add(Yn),An(p);function An(V){V.updateWorldMatrix(!0,!0);let et=new zt().copy(V.matrixWorld).invert(),Mt=new zt,Tt=new Map,Nt=[],L=ce=>{for(let ke=ce;ke&&ke!==V;ke=ke.parent)if(ke.userData.keep)return!0;return!1};V.traverse(ce=>{if(!ce.isMesh||ce.isInstancedMesh||L(ce)||Array.isArray(ce.material)||ce.children.length)return;let ke=ce.material.uuid+"|"+ce.renderOrder,ze=Tt.get(ke);ze||Tt.set(ke,ze={mat:ce.material,cast:!1,recv:!1,ro:ce.renderOrder,geos:[]}),ze.cast=ze.cast||ce.castShadow,ze.recv=ze.recv||ce.receiveShadow;let tt=ce.geometry.index?ce.geometry.toNonIndexed():ce.geometry.clone();Object.keys(tt.attributes).forEach(wt=>{wt!=="position"&&wt!=="normal"&&wt!=="uv"&&wt!=="color"&&tt.deleteAttribute(wt)}),tt.attributes.uv||tt.setAttribute("uv",new $t(new Float32Array(tt.attributes.position.count*2),2)),ce.material.vertexColors?tt.attributes.color||Bs(tt,16777215):tt.attributes.color&&tt.deleteAttribute("color"),tt.applyMatrix4(Mt.multiplyMatrices(et,ce.matrixWorld)),ze.geos.push(tt),Nt.push(ce)}),Tt.forEach(ce=>{let ke=Ss(ce.geos);if(!ke)return;let ze=new Fe(ke,ce.mat);ze.castShadow=ce.cast,ze.receiveShadow=ce.recv,ze.renderOrder=ce.ro,ze.userData.keep=!0,V.add(ze),ce.geos.forEach(tt=>tt.dispose())}),Nt.forEach(ce=>{ce.parent&&ce.parent.remove(ce),ce.geometry.dispose()})}let ls={hub:Oi(5.6,.02,Wu+.02),cam:Oi(1.2),roots:Oi(he+.12,.03,.03),jet:Oi(8.2),liner:Oi(5.6),burst:Oi(8.3),trench:h(1,-1.4,-15.4),main:h(mn,rr+ar+.02,sr+.05),water:h(di,Ke(4.6),4.6),tile:h(mn,Pt,pt)},Ts={fx:mn+.1,time:19.4,cut:0,ghost:0,section:1,cutX:Ra,ugFocus:null,ground:1,orbit:.01,season:0,lift:0},un=[{...Ts,radius:28,theta:-.95,phi:1.2,ty:-2.2,fz:-7.8,dof:0,orbit:.02,time:16.6,narrow:{radius:34,fz:-10.5,ty:-1.6}},{...Ts,radius:3.2,theta:-1.57,phi:1.4,ty:-3,fz:-3.55,dof:.6,narrow:{radius:3.3,fz:-3.45}},{...Ts,radius:1.7,theta:-1.42,phi:1.22,ty:-3.45,fz:-12.8,dof:1.1,narrow:{radius:1.9}},{...Ts,radius:1.6,theta:-1.5,phi:1.32,ty:-3.56,fz:-12.5,dof:1.1,narrow:{radius:1.8,fz:-12.62}},{...Ts,radius:5.2,theta:-1.55,phi:1.42,ty:-3.45,fz:-10.9,dof:.8,narrow:{radius:7.2,fz:-11.3}},{...Ts,radius:14,theta:-1.5,phi:1,ty:-1.55,fz:-15.8,dof:.4,time:16.6,narrow:{radius:14,fz:-16.1}},{...Ts,radius:7,theta:-1.5,phi:1.46,ty:-2.5,fz:3.6,dof:.5,narrow:{radius:8.6,fz:3.2}}],Gr="",qi=0,kr=1,Vr=V=>V>.95&&V<1.55?"CRACK":Math.abs(V-$a(Gm)-.06)<.1?"OFFSET JOINT":(V-Yu+Zo*2)%Zo<.12?"JOINT":"",aa=new Float32Array(On*2);for(let V=0;V<On;V++)aa[V*2]=u(),aa[V*2+1]=u();let ys=new Float32Array(Lt*2);for(let V=0;V<Lt;V++)ys[V*2]=V%6/6*Math.PI*2+u()*.3,ys[V*2+1]=u();return{name:"sewer",group:d,anchors:ls,shots:un,hides:(V,et)=>{let Mt=V.sys.sewer?[...V.sys.sewer.meshes]:[];return et&&et.groups&&["water","gas","sewer","found","radon"].forEach(Tt=>et.groups[Tt]&&Mt.push(et.groups[Tt])),et&&et.group&&et.group.children.forEach(Tt=>{let Nt=Tt.geometry&&Tt.geometry.parameters;Tt.isMesh&&Nt&&(Nt.height===9||Nt.depth===240)&&Mt.push(Tt)}),Mt},light(V){return V===0?{pos:[-2.6,-1,-8.6],at:[.8,-3.3,-11.5],power:.7,fill:.6}:V===1?{pos:[-1.6,-3.05,-5.2],at:[.7,-3.3,-4],power:.55,fill:.9}:V===2||V===3?{pos:[-1.3,-2.5,-12],at:[.7,-3.5,-12.8],power:.6,fill:.8}:V===4?{pos:[-4.6,-2,-9.4],at:[.75,-3.55,-11.1],power:1,fill:.6}:V===5?{pos:[-3.2,-1.4,-15.6],at:[.8,-3.5,-17.6],power:1.3,fill:.9}:{pos:[-1.8,-3.4,2.6],at:[.75,-3,3.4],power:1.6,fill:1.6}},update({step:V,q:et,t:Mt,dt:Tt,snap:Nt}){let L=Nt?1:1-Math.exp(-Tt*5),ce=s?0:Mt,ke=ot(na[0]+.05,na[1]-.05,et);be(Gt=>V===4&&Gt>=9&&Gt<=11&&$a(Gt)+Zo*.5<ke||V===5&&Gt>=13),Re.visible=_n.visible=Pn.visible=V===1,He.visible=V===5,Xe.visible=_t.visible=V!==5,wn.visible=V===4;let ze=V<=3;if(it.visible=fe.visible=ze,kr=ot(kr,V===0?1.8:.55,L),R.userData.level.value=kr,V===1){let Gt=ot(0,.62,et);Xt.getPointAt(Gt,Jt),Xt.getTangentAt(Gt,Tn),_n.position.copy(Jt),_n.position.y+=.045-.003,_n.rotation.x=Math.atan2(Tn.y,-Tn.z),Pn.geometry.setDrawRange(0,Math.round(Gt*rn)*6*6);let mi=Os-Jt.z;vt.rotation.x=-Gt*9,ls.cam.copy(Jt),ls.cam.y+=.07,Se.material.opacity=.45+(s?0:.08*Math.sin(ce*9));let Zt=(Gt*Xt.getLength()+.4).toFixed(1),ri=mi<Yu?"":Vr(mi),qn=Zt+ri;qn!==Gr&&(Gr=qn,W.set("mon",Zt+" m",mi<Yu?"CAST IRON 150 mm":"CLAY 150 mm \xB7 1958",{flag:ri}))}let tt=V===3?Yt(et/.42,0,1):0,wt=V===3?Yt((et-.42)/.58,0,1):0;$.visible=ht.visible=V===3&&et<.42,gt.visible=dt.visible=Vt.visible=V===3&&et>=.42;let kt=V===3?At(.1,.9,tt):0;it.scale.set(1,1,V===3&&et>=.42?.12:Math.max(.12,1-.88*kt));let Ot=ot(he-.3,he+.7,wt);if(V===3){if($.visible){let Gt=ot(he-.3,he+.4,tt);$.position.set(0,-.004,-Gt),Ae.rotation.z=-ce*14,ht.position.set(0,-.006,-6),ht.scale.set(1,1,Math.max(.01,Gt-6.06)),Oi(Gt,0,.02,ls.jet)}if(gt.visible){gt.position.set(0,-Sn+.02,-Ot),dt.position.set(0,-Sn+.012,-6),dt.scale.set(1,1,Math.max(.01,Ot-6.03)),Oi(Ot,0,.02,ls.jet);let Gt=Vt.userData.pos,mi=Vt.userData.n;for(let Zt=0;Zt<mi;Zt++){let ri=ys[Zt*2],qn=(ys[Zt*2+1]+ce*2.6)%1,nn=qn*.2,In=.012+nn*.62,gi=In*Math.sin(ri),Di=-Sn+.02+In*Math.cos(ri),cs=Math.hypot(gi,Di);cs>Sn*.95&&(gi*=Sn*.95/cs,Di=Di*Sn*.95/cs-(nn-.1)*.15),Gt[Zt*3]=gi,Gt[Zt*3+1]=Math.max(Di,-Sn*.95),Gt[Zt*3+2]=-Ot+.02+nn}Vt.geometry.attributes.position.needsUpdate=!0}et>=.42&&Ot>he+.1&&(it.visible=!1)}if(fe.visible){let Gt=V===3&&et>=.42?Math.round(Yt((je-Ot)/(je-Ve),0,1)*xt):xt;fe.geometry.setDrawRange(0,Gt*D*6)}if(V===4){let Gt=ot(ta[0]+.15,ta[1],et),mi=Math.round((Gt-ta[0])/(ta[1]-ta[0])*kn);P.geometry.setDrawRange((kn-mi)*Vn*6,mi*Vn*6),Ie.position.set(0,0,-Gt),Oi(Gt,0,.02,ls.liner),St.position.set(0,0,-ke),Oi(ke,0,.11,ls.burst),Ce.position.set(0,0,-(na[0]-.1)),Ce.scale.set(1,1,Math.max(.01,ke-na[0]+.1-.05));let Zt=0;for(;Zt<It&&pe[Zt]<ke-.06;)Zt++;ne.count=Zt}let an=s?.5:ce%7/7,xn=an<.55?an/.55:1-(an-.55)/.45,Wt=s||an>=.55;if(Bt.position.y=ot(-3.38,-3.14,xn),qi=ot(qi,Wt?1:0,Nt?1:1-Math.exp(-Tt*6)),st.userData.level.value=qi,V===6){let Gt=Yn.userData.pos,mi=Yn.userData.n;for(let Zt=0;Zt<mi;Zt++){let ri=aa[Zt*2],qn=aa[Zt*2+1];if(Zt%2===0){let nn=(qn+ce*.11)%1;Gt[Zt*3]=Fi+.03+ri*.36,Gt[Zt*3+1]=ot(-1,-3.1,nn),Gt[Zt*3+2]=4.32+ri*7.3%1*.62}else{let nn=(qn+ce*1.3)%1,In=(ri-.5)*1.6;Gt[Zt*3]=di-.03-nn*.14,Gt[Zt*3+1]=Ke(4.6)+.01+nn*.3-nn*nn*.42,Gt[Zt*3+2]=4.6+In*nn*.22}}Yn.geometry.attributes.position.needsUpdate=!0}Yn.visible=Rn.visible=V===6,Rn.material.opacity=.6+(s?0:.15*Math.sin(ce*7))}}}var tn=-1.2,gn=-1.5,ni=.057,Mr=-2.8,$n=-2.9,As=-3.05,_c=-4.4,Pi=-2.1,Ii=.25,ii=-1.5,as=-.25,Qf=-3.75,Aa=.24,gs=7.9,$o=10.45,Cs=-3.995,Si=.66,_i=1.6,pi={x:-.5,y:-1.52,z:Cs+.1},Er={x:-.3,z:Cs+.115},Ja=-.59,Jo=new F(tn,$n-.1,gn+.03),Vm=i=>8.054+.1233+.72*(i+2.78),Mc=[[-.36,ii],[-.62,Cs+.04]],Ec=[[-.95,as],[-1.5,1.25]],Wm=[-2.3,.05];function Xm({kit:i,M:e,tier:t,reduce:n}){let{box:s,cyl:r,tube:a,mats:o,atlas:c,V:l}=i,h=new yt,d=new yt,p=new yt,u=new yt;h.add(d,p,u);let f=Nn(41),x=(D,oe,fe,Re,We)=>{let k=document.createElement("canvas");k.width=D,k.height=oe,fe(k.getContext("2d"),D,oe);let Le=new Zn(k);return Le.colorSpace=vn,Le.wrapS=Le.wrapT=Qn,Le.repeat.set(Re,We),Le.anisotropy=8,Le},g=(D,oe,fe,Re,We,k,Le)=>{for(let de=0;de<Re;de++)D.fillStyle=We[f()*We.length|0],D.beginPath(),D.ellipse(f()*oe,f()*fe,k+f()*(Le-k),k+f()*(Le-k)*.7,f()*3,0,6.3),D.fill()},m=x(256,256,(D,oe,fe)=>{D.fillStyle="#7c776f",D.fillRect(0,0,oe,fe);for(let Re=0;Re<40;Re++){let We=f()*oe,k=f()*fe,Le=20+f()*50,de=D.createRadialGradient(We,k,0,We,k,Le),Be=f()>.5;de.addColorStop(0,Be?"rgba(60,56,50,.18)":"rgba(160,154,144,.14)"),de.addColorStop(1,"rgba(0,0,0,0)"),D.fillStyle=de,D.fillRect(We-Le,k-Le,Le*2,Le*2)}g(D,oe,fe,900,["rgba(50,47,43,.35)","rgba(170,164,152,.3)","rgba(96,90,82,.4)"],.4,1.3)},1/1.6,1/1.6),_=x(256,256,(D,oe,fe)=>{D.fillStyle="#3a3732",D.fillRect(0,0,oe,fe);for(let Re=0;Re<900;Re++){let We=f()*oe,k=f()*fe,Le=2+f()*5,de=70+f()*60,Be=5+(f()*3|0);D.fillStyle=`rgb(${de|0},${de*.97|0},${de*.9|0})`,D.beginPath();for(let Pe=0;Pe<Be;Pe++){let ae=Pe/Be*6.283+f()*.5,at=Le*(.6+f()*.5);D[Pe?"lineTo":"moveTo"](We+Math.cos(ae)*at,k+Math.sin(ae)*at*.8)}D.closePath(),D.fill(),D.strokeStyle="rgba(20,18,16,.45)",D.lineWidth=1,D.stroke()}},1/.45,1/.45),b=x(256,256,(D,oe,fe)=>{let Re=D.createImageData(oe,fe),We=Re.data;for(let k=0;k<fe;k++)for(let Le=0;Le<oe;Le++){let de=k/fe,Be=(f()-.5)*26,Pe=Math.sin(k*.11+Math.sin(Le*.05)*1.6)*6,ae=(k*oe+Le)*4;We[ae]=90-30*de+Be+Pe,We[ae+1]=68-22*de+Be*.9+Pe,We[ae+2]=50-12*de+Be*.8+Pe*.6,We[ae+3]=255}D.putImageData(Re,0,0),g(D,oe,fe,160,["rgba(150,140,124,.8)","rgba(120,112,100,.8)","rgba(70,60,50,.7)"],.8,3.2)},1/1.7,1/1.7);b.wrapT=ws,b.offset.set(0,1+2.9/1.7);let y=i.std(16777215,.92,0,{map:m}),M=i.std(16777215,1,0,{map:_}),T=i.std(16777215,1,0,{map:b}),R=o.rubber,v=i.std(9341828,.7,0),A=i.std(10920859,.8,0),I=i.std(2060240,.15,0,{emissive:5220095,emissiveIntensity:.55}),G=o.blackPlastic,w=o.rubber,U=(D,oe,fe,Re)=>{let We=Nn(fe),k=[],Le=[],de=16;for(let Be=3;Be<=oe-3;Be+=6)de=Math.max(7,Math.min(25,de+(We()-.5)*5)),k.push([Be,de]);for(let Be=0;Be<4;Be++){let Pe=3+(We()*(k.length-6)|0),ae=k[Pe];Le.push([ae,[ae[0]+8+We()*26,ae[1]+(We()>.5?1:-1)*(5+We()*7)]])}return{key:D,w:oe,h:32,draw(Be){let Pe=(ae,at)=>{Be.strokeStyle=at,Be.lineWidth=ae,Be.lineJoin=Be.lineCap="round",Be.beginPath(),k.forEach((Ze,vt)=>Be[vt?"lineTo":"moveTo"](Ze[0],Ze[1])),Be.stroke()};if(Re){Pe(8,"rgba(74,72,68,1)"),Pe(3,"rgba(98,95,90,.9)");return}Pe(3.4,"rgba(150,144,134,.35)"),Pe(1.6,"rgba(16,14,12,.92)"),Be.lineWidth=.9,Be.strokeStyle="rgba(16,14,12,.8)",Le.forEach(([ae,at])=>{Be.beginPath(),Be.moveTo(ae[0],ae[1]),Be.lineTo(at[0],at[1]),Be.stroke()})}}},N=c([{key:"warn",text:"RADON SYSTEM",sub:"DO NOT TURN OFF",w:384,h:112,size:50,color:"#16130c",bg:"#e3bd2f"},{key:"info",w:384,h:150,draw(D,oe,fe){D.fillStyle="#e8e3d6",D.fillRect(0,0,oe,fe),D.fillStyle="#1a1c20",D.textAlign="left",D.textBaseline="middle",D.font="700 25px ui-monospace, Menlo, monospace",D.fillText("RADON MITIGATION",14,24),D.font="500 19px ui-monospace, Menlo, monospace",["SUB-SLAB DEPRESSURIZATION","INSTALLED 2026-11","BEFORE: 412 Bq/m\xB3","RETEST: 91-DAY TEST"].forEach((Re,We)=>D.fillText(Re,14,56+We*24))}},{key:"air",text:"AIRFLOW \u25B2",w:224,h:56,size:30,color:"#16130c",bg:"#e8e3d6"},{key:"fan",text:"RADON FAN",sub:"120 V \xB7 60 Hz \xB7 85 W",w:384,h:104,size:44,color:"#2a2c30"},{key:"jbox",text:"RADON FAN",sub:"DISCONNECT",w:224,h:84,size:34,color:"#16130c",bg:"#e3bd2f"},{key:"sump",text:"SEALED SUMP",sub:"RADON \xB7 KEEP CLOSED",w:320,h:96,size:38,color:"#16130c",bg:"#e8e3d6"},{key:"alpha",w:160,h:160,draw(D,oe){D.fillStyle="#e8e3d6",D.beginPath(),D.arc(oe/2,oe/2,oe/2-2,0,6.3),D.fill(),D.fillStyle="#1a1c20",D.textAlign="center",D.textBaseline="middle",D.font="700 17px ui-monospace, Menlo, monospace",D.fillText("ALPHA TRACK",oe/2,46),D.font="600 14px ui-monospace, Menlo, monospace",D.fillText("LONG-TERM \xB7 91 d",oe/2,72),D.font="500 13px ui-monospace, Menlo, monospace",D.fillText("START 11-10",oe/2,96),D.fillText("DO NOT OPEN",oe/2,116)}},{key:"scale",w:64,h:300,draw(D,oe,fe){D.fillStyle="#ebe7dd",D.fillRect(0,0,oe,fe),D.fillStyle="#1a1c20",D.strokeStyle="#1a1c20",D.textBaseline="middle",D.textAlign="center";for(let Re=-11;Re<=11;Re++){let We=fe/2-Re*11,k=Re%5===0;D.lineWidth=k?2:1,D.beginPath(),D.moveTo(k?10:18,We),D.lineTo(oe-(k?10:18),We),D.stroke()}D.font="700 15px ui-monospace, Menlo, monospace",D.fillText("0",oe/2,fe/2-9),D.font="600 12px ui-monospace, Menlo, monospace",D.fillText("Pa",oe/2,12),D.fillText("250",oe/2,fe/2-64),D.fillText("250",oe/2,fe/2+64)}},U("ca",512,7,!1),U("cas",512,7,!0),U("cb",384,9,!1),U("cbs",384,9,!0)],{width:1024,emissive:.22}),B=[];{let D=400;for(let oe=0;oe<46;oe++)D=ot(D,330+f()*200,.45),B.push(D)}let Z=c([{key:"mon",w:256,h:192,value:412,after:0,draw(D,oe,fe,Re){D.fillStyle="#06080c",D.fillRect(0,0,oe,fe);let We=Math.round(Re.value),k=We>=200?"#ff6b4f":We>=100?"#f4bd7e":"#8fd3a6";D.textBaseline="middle",D.textAlign="left",D.fillStyle="#8b93a1",D.font="600 15px ui-monospace, Menlo, monospace",D.fillText("RADON",14,18),D.textAlign="right",D.fillText(Re.after>.5?"RETEST":"91-DAY AVG",oe-14,18),Re.after>.5&&(D.textAlign="right",D.fillStyle="#8b93a1",D.font="500 15px ui-monospace, Menlo, monospace",D.fillText("was 412",oe-14,52)),D.textAlign="left",D.fillStyle=k,D.font="700 64px ui-monospace, Menlo, monospace";let Le=String(We);D.fillText(Le,12,66);let de=D.measureText(Le).width;D.fillStyle="#cfd4da",D.font="500 17px ui-monospace, Menlo, monospace",D.fillText("Bq/m\xB3",20+de,80);let Be=178,Pe=64/480,ae=14,at=(oe-28)/(B.length-1);D.strokeStyle="rgba(139,147,161,.6)",D.lineWidth=1,D.setLineDash([4,4]),D.beginPath(),D.moveTo(ae,Be-200*Pe),D.lineTo(oe-14,Be-200*Pe),D.stroke(),D.setLineDash([]),D.fillStyle="#8b93a1",D.font="500 12px ui-monospace, Menlo, monospace",D.fillText("200",ae,Be-200*Pe-9),D.strokeStyle=k,D.lineWidth=2.2,D.beginPath(),B.forEach((Ze,vt)=>{let Ft=Re.after*At(B.length-12,B.length-1,vt),Xt=ot(Ze,Re.value+(Ze-420)*.08,Ft);D[vt?"lineTo":"moveTo"](ae+vt*at,Be-Xt*Pe)}),D.stroke()}}],{width:256,emissive:.8}),H=(D,oe,fe,Re,We,k,Le,de,Be)=>{let Pe=D.plane(oe,fe,Be),ae=Pe.geometry.attributes.uv,at=1,Ze=0,vt=1,Ft=0;for(let Jt=0;Jt<ae.count;Jt++)at=Math.min(at,ae.getX(Jt)),Ze=Math.max(Ze,ae.getX(Jt)),vt=Math.min(vt,ae.getY(Jt)),Ft=Math.max(Ft,ae.getY(Jt));let Xt=new sn(fe,Pe.geometry.parameters.height,16,1),rn=Xt.attributes.position,Pn=Xt.attributes.uv;for(let Jt=0;Jt<rn.count;Jt++){let Tn=de+rn.getX(Jt)/Re;rn.setXYZ(Jt,We+Re*Math.sin(Tn),k+rn.getY(Jt),Le+Re*Math.cos(Tn)),Pn.setXY(Jt,ot(at,Ze,Pn.getX(Jt)),ot(vt,Ft,Pn.getY(Jt)))}return Xt.computeVertexNormals(),Pe.geometry.dispose(),Pe.geometry=Xt,Pe},Y=(D,oe,fe,Re,We=.0015)=>{let k=fe[0]-oe[0],Le=fe[1]-oe[1],de=Math.hypot(k,Le);return N.plane(D,de,Re,(oe[0]+fe[0])/2,Mr+We,(oe[1]+fe[1])/2,{rot:[-Math.PI/2,0,Math.atan2(-Le,k)]})},q=(D,oe,fe,Re,We,k,Le,de,Be={})=>{let Pe=(D+oe)/2,ae=(fe+Re)/2,at=(We+k)/2;return s(oe-D,Re-fe,k-We,Le,Pe,ae,at,de,{uv:{ox:Pe,oy:ae,oz:at},...Be})},W=ii-.5;q(-5,5,$n,Mr,-4,ii,y,d),q(-5,5,$n,Mr,as,4,y,d),q(-5,Pi,$n,Mr,ii,as,y,d),q(Ii,5,$n,Mr,ii,as,y,d),[[-5,Pi,-4,ii],[Ii,5,-4,ii],[Pi,Ii,-4,W],[-5,5,as,4],[-5,Pi,ii,as],[Ii,5,ii,as]].forEach(([D,oe,fe,Re])=>q(D,oe,As,$n,fe,Re,M,d,{cast:!1})),[[-5.6,Pi,-4.6,ii],[Ii,5.6,-4.6,ii],[Pi,Ii,-4.6,W],[-5.6,5.6,as,4.6],[-5.6,Pi,ii,as],[Ii,5.6,ii,as]].forEach(([D,oe,fe,Re])=>q(D,oe,_c,As,fe,Re,T,d,{cast:!1})),q(Pi,Ii,_c,Qf,ii,as,T,d,{cast:!1}),q(Pi,Ii,$n-.004,$n,ii,ii+.002,R,d,{cast:!1}),q(Pi-.002,Pi,$n-.004,$n,ii,as,R,d,{cast:!1}),q(Ii,Ii+.002,$n-.004,$n,ii,as,R,d,{cast:!1});{let D=t>=1?260:120,oe=new Nr(1,0),fe=new Mi(oe,i.std(16777215,1,0),D),Re=new zt,We=new Bn,k=new Ui,Le=new F,de=new F,Be=new Et,Pe=0;for(;Pe<D;){let ae=f(),at=As+.012+f()*($n-As-.024),Ze=.007+f()*.013,vt=f();if(vt<.6){let Xt=ot(Pi+.02,Ii-.02,ae);if(Math.abs(Xt-tn)<Aa+.03)continue;de.set(Xt,at,ii+Ze*.25)}else vt<.8?de.set(Pi+Ze*.25,at,ot(ii+.02,as-.02,ae)):de.set(Ii-Ze*.25,at,ot(ii+.02,as-.02,ae));Le.set(Ze,Ze*(.6+f()*.4),Ze*(.7+f()*.3)),We.setFromEuler(k.set(f()*6,f()*6,f()*6)),fe.setMatrixAt(Pe,Re.compose(de,We,Le));let Ft=.07+f()*.07;fe.setColorAt(Pe,Be.setRGB(Ft,Ft*.97,Ft*.9)),Pe++}fe.castShadow=!1,fe.receiveShadow=!0,d.add(fe)}q(Pi,Ii,As,$n,W,ii,M,p,{cast:!1}),q(Pi,Ii,_c,As,W,ii,T,p,{cast:!1});{let D=Math.asin(($n-As)/Aa),oe=Math.cos(D)*Aa,fe=(Ze,vt)=>{let Ft=new Rs(Ze,{depth:ii-W,bevelEnabled:!1,curveSegments:20});Ft.translate(0,0,W);let Xt=new Fe(Ft,vt);return Xt.receiveShadow=!0,u.add(Xt),Xt},Re=new Ei;Re.moveTo(Pi,$n),Re.lineTo(tn-Aa,$n),Re.absarc(tn,$n,Aa,Math.PI,Math.PI+D,!1),Re.lineTo(Pi,As),Re.closePath();let We=new Ei;We.moveTo(Ii,$n),We.lineTo(Ii,As),We.lineTo(tn+oe,As),We.absarc(tn,$n,Aa,-D,0,!1),We.closePath();let k=new Ei;k.moveTo(Pi,As),k.lineTo(tn-oe,As),k.absarc(tn,$n,Aa,Math.PI+D,2*Math.PI-D,!1),k.lineTo(Ii,As),k.lineTo(Ii,_c),k.lineTo(Pi,_c),k.closePath(),fe(Re,M),fe(We,M),fe(k,T);let Le=new jn(Aa,24,10,Math.PI,Math.PI,Math.PI/2,Math.PI/2);Le.translate(tn,$n,gn);let de=Le.attributes.position,Be=Le.attributes.uv;for(let Ze=0;Ze<de.count;Ze++)Be.setXY(Ze,de.getX(Ze)+de.getZ(Ze)*.7,de.getY(Ze));let Pe=Le.index.array;for(let Ze=0;Ze<Pe.length;Ze+=3){let vt=Pe[Ze+1];Pe[Ze+1]=Pe[Ze+2],Pe[Ze+2]=vt}let ae=Le.attributes.normal;for(let Ze=0;Ze<ae.count;Ze++)ae.setXYZ(Ze,-ae.getX(Ze),-ae.getY(Ze),-ae.getZ(Ze));let at=new Fe(Le,M);at.receiveShadow=!0,u.add(at)}Y("ca",Mc[0],Mc[1],d),Y("cb",Ec[0],Ec[1],d),Y("cas",Mc[0],Mc[1],u,.003),Y("cbs",Ec[0],Ec[1],u,.003),q(-4.9,4.9,Mr-.002,Mr+.0012,Cs,Cs+.012,w,d,{cast:!1,receive:!1}),s(9.8,.012,.016,v,0,Mr+.004,Cs+.008,u,{r:.005,cast:!1});let J=Mr+.05,ge=o.whitePlastic;r(.024,-.12-J,ge,Si,(J-.12)/2,_i,d),r(.034,.1,o.rubber,Si,-2.3,_i,d,{seg:16}),[-2.34,-2.26].forEach(D=>r(.036,.012,o.galv,Si,D,_i,d,{seg:16,cast:!1})),a([[Si,-.2,_i],[Si,-.13,_i+.02],[Si,-.12,_i+.1]],.024,ge,d,{radial:12,seg:10}),r(.024,4-_i-.1,ge,Si,-.12,(_i+.1+3.99)/2,d,{axis:"z"}),a([[Si+.06,J+.03,_i+.05],[Si+.05,-2.4,_i+.03],[Si+.03,-1.6,_i+.03],[Si+.03,-.26,_i+.03]],.004,o.rubber,d,{radial:5,cast:!1}),r(.345,.022,o.blackPlastic,Si+.012,J+.011,_i-.016,p,{seg:40}).rotation.set(.015,0,-.012),r(.055,.003,w,Si,J+.024,_i,p,{seg:20,cast:!1}),s(.035,.004,.05,w,Si+.06,J+.023,_i+.06,p,{cast:!1});{r(.35,.02,o.blackPlastic,Si,J+.01,_i,u,{seg:40});let D=new Fe(new Qi(.346,.006,6,48),v);D.rotation.x=Math.PI/2,i.place(D,Si,J+.004,_i,u,{cast:!1});for(let oe=0;oe<10;oe++){let fe=oe/10*Math.PI*2;r(.009,.008,o.galv,Si+Math.cos(fe)*.318,J+.024,_i+Math.sin(fe)*.318,u,{seg:8,cast:!1})}r(.036,.016,o.rubber,Si,J+.026,_i,u,{seg:16,cast:!1}),r(.011,.012,o.rubber,Si+.06,J+.025,_i+.05,u,{seg:10,cast:!1}),N.plane("sump",.16,u,Si-.1,J+.0215,_i+.15,{rot:[-Math.PI/2,0,.35]})}s(.9,.022,.2,o.plywood,pi.x,pi.y-.011,pi.z,d,{uv:{ox:1,oz:1}}),[-.33,.33].forEach(D=>{let oe=pi.x+D;s(.022,.15,.004,G,oe,pi.y-.097,Cs+.002,d,{cast:!1}),s(.022,.004,.17,G,oe,pi.y-.024,Cs+.087,d,{cast:!1});let fe=s(.016,.004,.2,G,oe,pi.y-.085,Cs+.077,d,{cast:!1});fe.rotation.x=-.71,[-.05,-.13].forEach(Re=>r(.006,.006,o.galv,oe,pi.y+Re,Cs+.006,d,{axis:"z",seg:8,cast:!1}))}),r(.034,.016,o.greyPlastic,pi.x-.24,pi.y+.008,pi.z+.01,d,{seg:28}),r(.03,.004,o.blackPlastic,pi.x-.24,pi.y+.018,pi.z+.01,d,{seg:28,cast:!1}),N.plane("alpha",.056,d,pi.x-.24,pi.y+.0205,pi.z+.01,{rot:[-Math.PI/2,0,.2]});{let D=new yt;D.position.set(Er.x,pi.y,Er.z),D.rotation.y=-.22,d.add(D),s(.105,.155,.04,o.whitePlastic,0,.0775,0,D,{r:.012}),s(.092,.074,.003,o.blackPlastic,0,.105,.02,D,{cast:!1}),Z.plane("mon",.086,D,0,.105,.0218);for(let oe=0;oe<5;oe++)s(.05,.003,.002,o.greyPlastic,0,.022+oe*.008,.0202,D,{cast:!1})}let Ne=Math.sin(Ja),qe=Math.cos(Ja);r(ni,gs-.24-($n-.08),A,tn,(gs-.24+$n-.08)/2,gn,u,{seg:28}),r(ni,$o-gs-.22,A,tn,($o+gs+.22)/2,gn,u,{seg:28}),r(ni+.014,.012,v,tn,Mr+.005,gn,u,{seg:28,cast:!1}),[-1.95,-.62,2,5].forEach(D=>r(ni+.006,.07,A,tn,D,gn,u,{seg:28})),s(.91,.14,.038,o.plywood,-1.5,-.18,gn-ni-.022,u,{uv:!0});{let D=new Fe(new Qi(ni+.003,.0022,4,24,Math.PI),o.galv);D.rotation.set(-Math.PI/2,0,0),i.place(D,tn,-.16,gn,u,{cast:!1}),[-1,1].forEach(oe=>{s(.028,.03,.002,o.galv,tn+oe*(ni+.016),-.16,gn-ni-.002,u,{cast:!1}),r(.005,.004,o.galv,tn+oe*(ni+.02),-.16,gn-ni+.001,u,{axis:"z",seg:8,cast:!1})})}H(N,"warn",.11,ni+.0012,tn,-1.18,gn,Ja,u),H(N,"info",.1,ni+.0012,tn,-2.18,gn,Ja,u),H(N,"air",.07,ni+.0012,tn,-.88,gn,Ja,u);let Je=[];{let D=new yt;D.position.set(tn+Ne*(ni+.014),-1.58,gn+qe*(ni+.014)),D.rotation.y=Ja,u.add(D),s(.064,.2,.006,o.whitePlastic,0,0,0,D,{r:.003}),N.plane("scale",.026,D,0,-.005,.0034),[.075,-.075].forEach(Re=>s(.03,.014,.014,o.whitePlastic,0,Re,-.009,D,{cast:!1}));let oe=o.glassClear;[-.019,.019].forEach(Re=>r(.0042,.16,oe,Re,0,.009,D,{seg:10,cast:!1}));let fe=[[-.019,-.08,.009],[-.019,-.088,.009],[-.012,-.096,.009],[0,-.098,.009],[.012,-.096,.009],[.019,-.088,.009],[.019,-.08,.009]];a(fe,.0042,oe,D,{radial:8,seg:16,cast:!1}),a(fe,.003,I,D,{radial:6,seg:16,cast:!1}),[-.019,.019].forEach(Re=>{let We=new dn(.003,.003,1,8);We.translate(0,.5,0);let k=new Fe(We,I);k.position.set(Re,-.08,.009),k.userData.keep=!0,k.castShadow=!1,D.add(k),Je.push(k)}),r(.0055,.008,o.blackPlastic,.019,.083,.009,D,{seg:10,cast:!1}),a([[-.019,.08,.009],[-.019,.1,.01],[-.024,.118,0],[-.022,.124,-.014]],.003,o.glassClear,D,{radial:6,seg:12,cast:!1}),r(.007,.008,o.rubber,-.022,.124,-.016,D,{axis:"z",seg:10,cast:!1}),[.075,-.075].forEach(Re=>{let We=new Fe(new Qi(ni+.0015,.0018,4,32),o.blackPlastic);We.rotation.x=Math.PI/2,i.place(We,tn,-1.58+Re,gn,u,{cast:!1})})}{let D=o.whitePlastic,oe=o.greyPlastic,fe=ae=>{r(ni+.011,.1,o.rubber,tn,ae,gn,u,{seg:28}),[ae-.03,ae+.03].forEach((at,Ze)=>{r(ni+.0125,.012,o.galv,tn,at,gn,u,{seg:28,cast:!1});let vt=Ja-1.1+Ze*.5;s(.016,.012,.012,o.galv,tn+Math.sin(vt)*(ni+.018),at,gn+Math.cos(vt)*(ni+.018),u,{rot:[0,vt,0],cast:!1})})};fe(gs-.27),fe(gs+.27),r(ni+.002,.06,oe,tn,gs-.2,gn,u,{seg:28}),r(ni+.002,.06,oe,tn,gs+.2,gn,u,{seg:28}),r(.07,.06,D,tn,gs-.11,gn,u,{seg:36,r2:.135}),r(.135,.06,D,tn,gs+.11,gn,u,{seg:36,r2:.07}),r(.135,.16,D,tn,gs,gn,u,{seg:36}),r(.1375,.012,oe,tn,gs+.02,gn,u,{seg:36,cast:!1}),H(N,"fan",.16,.1365,tn,gs-.03,gn,-.9,u);let Re=Math.atan(.72),We=ae=>Vm(ae)-.2466;[-3,-2.4,-1.8,-1.2,-.6,0].forEach(ae=>s(4.84/Math.cos(Re),.14,.038,o.plywood,-2.48,We(-2.48)-.07/Math.cos(Re),ae,u,{rot:[0,0,Re],uv:!0})),s(.038,.18,4.2,o.plywood,0,We(0)-.09,-1.5,u,{uv:!0});let k={x:tn-.35,z:-1.8},Le=We(k.x)-.14/Math.cos(Re);s(.089,Le-6.37,.038,o.plywood,k.x,(Le+6.37)/2,k.z,u,{uv:!0}),s(.11,.11,.055,o.greyPlastic,k.x,7.75,k.z+.047,u,{r:.006}),s(.018,.03,.014,o.blackPlastic,k.x,7.77,k.z+.081,u,{cast:!1}),N.plane("jbox",.075,u,k.x,7.72,k.z+.0752);let de=[tn+Math.sin(Math.PI+.25)*.135,gs-.04,gn+Math.cos(Math.PI+.25)*.135];r(.008,.016,o.blackPlastic,de[0],de[1],de[2]-.006,u,{axis:"z",seg:10,cast:!1}),a([[de[0],de[1],de[2]-.012],[de[0]+.02,de[1]-.12,de[2]-.1],[k.x+.02,7.62,k.z+.12],[k.x,7.69,k.z+.06]],.0045,o.blackPlastic,u,{radial:6,cast:!1}),a([[k.x+.03,7.69,k.z+.05],[k.x+.05,7.4,k.z+.03],[k.x+.055,6.6,k.z+.025],[k.x+.2,6.42,k.z+.1]],.006,o.rubber,u,{radial:6,cast:!1}),[-1,1].forEach(ae=>{s(.34,.03,.006,o.galv,tn,6.44,gn+ae*(ni+.004),u,{cast:!1}),[-.15,.15].forEach(at=>r(.006,.03,o.galv,tn+at,6.44,gn,u,{axis:"z",seg:8,cast:!1}))});let Be=Vm(tn),Pe=Math.atan(.72);s(.42,.006,.42,o.galv,tn,Be+.003/Math.cos(Pe),gn,u,{rot:[0,0,Pe],cast:!1}),r(.13,.15,o.rubber,tn,Be+.09,gn,u,{seg:28,r2:ni+.008}),r(ni+.012,.02,o.galv,tn,Be+.2,gn,u,{seg:28,cast:!1}),r(ni+.004,.02,o.galv,tn,$o-.005,gn,u,{seg:28,cast:!1}),r(ni-.004,.002,w,tn,$o-.004,gn,u,{seg:24,cast:!1})}let mt=new Set([A,o.plywood,o.whitePlastic,o.blackPlastic,o.rubber,y]);[d,p,u].forEach(D=>D.traverse(oe=>{oe.isMesh&&!oe.isInstancedMesh&&(oe.castShadow=mt.has(oe.material)&&oe.renderOrder===0,oe.receiveShadow=!0)})),i.bake(d),i.bake(p),i.bake(u);let te=14257407,Ee=i.particles(300,{color:te,size:.065,gain:2.2}),Ue=Ee.userData.n,be=Ee.userData.pos,Ge=new Float32Array(Ue*4),re=new Float32Array(Ue*3),Qe=(D,oe)=>{be[D*3]=ot(Pi+.03,Ii-.03,f()),be[D*3+1]=oe?ot(Qf,$n-.03,f()):Qf+f()*.08,be[D*3+2]=ot(ii+.02,as-.05,f()),Ge[D*4]=.05+f()*.08,Ge[D*4+1]=f()*6.28;let fe=f(),Re=(f()-.5)*.6;fe<.4?(Ge[D*4+2]=Re,Ge[D*4+3]=-1):fe<.6?(Ge[D*4+2]=-1,Ge[D*4+3]=Re):fe<.75?(Ge[D*4+2]=1,Ge[D*4+3]=Re):(Ge[D*4+2]=Re,Ge[D*4+3]=1)};for(let D=0;D<Ue;D++){Qe(D,!0);let oe=f();re[D*3]=ot(be[D*3],Jo.x,oe),re[D*3+1]=ot(be[D*3+1],Jo.y,oe*oe),re[D*3+2]=ot(be[D*3+2],Jo.z,oe)}let ue=be.slice(),me=i.particles(170,{color:te,size:.055,gain:1.8}),ie=me.userData.n,xe=me.userData.pos,we=new Float32Array(ie*4),$e=(D,oe,fe,Re)=>{fe[Re*3]=ot(D[0][0],D[1][0],oe),fe[Re*3+2]=ot(D[0][1],D[1][1],oe)},Xe=(D,oe)=>{let fe=f();if(fe<.3)$e(Mc,f(),xe,D);else if(fe<.48)$e(Ec,f(),xe,D);else if(fe<.8)xe[D*3]=ot(Wm[0],Wm[1],f()),xe[D*3+2]=Cs+.012;else{let Re=f()*6.283,We=f()<.4?.06:.35;xe[D*3]=Si+Math.cos(Re)*We,xe[D*3+2]=_i+Math.sin(Re)*We}if(xe[D*3+1]=Mr+.01,we[D*4]=.03+f()*.11,we[D*4+1]=f()*6.28,we[D*4+2]=4+f()*10,we[D*4+3]=0,oe){let Re=f()*we[D*4+2];we[D*4+3]=Re,xe[D*3+1]+=we[D*4]*Re*.85}};for(let D=0;D<ie;D++)Xe(D,!0);let lt=i.particles(80,{color:te,size:.08,gain:1.2}),ft=lt.userData.n,j=lt.userData.pos,Dt=new Float32Array(ft*4),_t=(D,oe)=>{if(j[D*3]=tn+(f()-.5)*.05,j[D*3+1]=$o,j[D*3+2]=gn+(f()-.5)*.05,Dt[D*4]=.45+f()*.35,Dt[D*4+1]=f()*6.28,Dt[D*4+2]=2+f()*1.6,Dt[D*4+3]=0,oe){let fe=f()*Dt[D*4+2];Dt[D*4+3]=fe,z(D,fe,0)}},z=(D,oe,fe)=>{let Re=Dt[D*4+3]/Dt[D*4+2],We=Dt[D*4+1];j[D*3+1]+=Dt[D*4]*(1-.6*Re)*oe,j[D*3]+=(-.22*Re+Math.sin(We)*.12*Re)*oe,j[D*3+2]+=(.08*Re+Math.cos(We+fe*.3)*.12*Re)*oe};for(let D=0;D<ft;D++)_t(D,!0);h.add(Ee,me,lt);let S={soil:l(-.45,-3.42,ii+.02),test:l(Er.x,pi.y+.1,Er.z+.03),pit:l(tn,$n-.12,gn+.04),fan:l(tn-.08,gs,gn+.11),stack:l(tn,$o-.15,gn),after:l(Er.x,pi.y+.1,Er.z+.03)},le={time:19.4,cut:0,ghost:0,ground:1,orbit:.012},he=[{...le,radius:15,theta:.6,phi:1.36,fx:-.6,ty:-1.5,fz:-.8,cut:1,ground:0,dof:0,orbit:.025},{...le,radius:1.6,theta:.2,phi:1.36,fx:Er.x-.05,ty:pi.y+.07,fz:Cs+.1,dof:1.1,narrow:{fx:Er.x-.12}},{...le,radius:2.9,theta:.38,phi:1.2,fx:tn+.25,ty:-3,fz:gn,dof:1,narrow:{fx:tn+.05}},{...le,radius:2.6,theta:.5,phi:1.5,fx:tn,ty:8.05,fz:gn,dof:.9,orbit:.012,narrow:{ty:7.85}},{...le,radius:.78,theta:-.12,phi:1.47,fx:Er.x,ty:pi.y+.1,fz:Er.z+.02,dof:1.3}],_e=0,rt=0,it=412,Oe=412,Ve=0,je=0,xt=-1;return{name:"radon",group:h,anchors:S,shots:he,hides(D){let oe=[...D.sys.radon?D.sys.radon.meshes:[]];return D.sys.foundation&&D.sys.foundation.meshes.forEach(fe=>{Math.abs(fe.position.y+2.88)<.01&&oe.push(fe)}),D.layers.basement.traverse(fe=>{fe.isMesh&&Math.abs(fe.position.x-Si)<.01&&Math.abs(fe.position.z-_i)<.01&&oe.push(fe)}),oe},light(D){return D===0?{pos:[.6,-.6,.9],at:[-.9,-3.1,-1.1],power:.75,fill:.6}:D===1?{pos:[-.3,-.9,-2.4],at:[pi.x+.1,pi.y,Cs],power:.4,fill:.5}:D===2?{pos:[.2,-1.6,.4],at:[tn+.1,$n-.2,gn],power:.4}:D===3?{pos:[.3,8.85,.3],at:[tn,gs,gn],power:.75,fill:.35}:D===4?{pos:[.2,-1.05,-2.9],at:[Er.x,pi.y+.08,Cs],power:.35,fill:.4}:{pos:[-2.3,-.9,.3],at:[-1,-1.7,-2.4],power:.5}},update({step:D,t:oe,dt:fe,snap:Re}){let We=D>=2?1:0,k=ae=>Re?1:1-Math.exp(-fe*ae);_e=ot(_e,We,k(1.6)),rt=ot(rt,We,k(1.2)),p.visible=!We,u.visible=!!We;let Le=.022*rt;Je[0].scale.y=.08+Le,Je[1].scale.y=.08-Le,it=D===4?ot(it,45,k(1.3)):ot(it,412,k(6)),je=ot(je,D===4?1:0,k(1.3));let de=Math.round(it),Be=Math.round(je*20)/20;if((de!==Oe||Be!==Ve)&&(Oe=de,Ve=Be,Z.set("mon",void 0,void 0,{value:de,after:Be})),me.material.opacity=1-_e,me.visible=_e<.98,lt.material.opacity=At(.3,1,rt),lt.visible=rt>.3,n){let ae=_e>.5?1:0;ae!==xt&&(xt=ae,be.set(ae?re:ue),Ee.geometry.attributes.position.needsUpdate=!0);return}let Pe=Math.min(fe,.05);for(let ae=0;ae<Ue;ae++){let at=be[ae*3],Ze=be[ae*3+1],vt=be[ae*3+2],Ft=Ge[ae*4],Xt=Ge[ae*4+1],rn=Math.sin(oe*.9+Xt)*.02,Pn=Ft,Jt=Math.cos(oe*.7+Xt)*.02,Tn=At(As-.03,$n-.03,Ze);rn+=Ge[ae*4+2]*.14*Tn,Jt+=Ge[ae*4+3]*.14*Tn,Pn*=1-Tn;let _n=Jo.x-at,C=Jo.y-Ze,Se=Jo.z-vt,$=Math.hypot(_n,C,Se)+1e-4,Ae=(.12+Ft)*(.7+.35/($+.2)),Te=_n/$*Ae+Math.sin(oe*1.3+Xt)*.015,ht=C/$*Ae,gt=Se/$*Ae;be[ae*3]=at+ot(rn,Te,_e)*Pe,be[ae*3+1]=Math.min(Ze+ot(Pn,ht,_e)*Pe,$n-.015),be[ae*3+2]=vt+ot(Jt,gt,_e)*Pe,(be[ae*3]<Pi-.03||be[ae*3]>Ii+.03||be[ae*3+2]<ii-.04||be[ae*3+2]>as+.03||_e>.5&&$<.06)&&Qe(ae,!1)}if(Ee.geometry.attributes.position.needsUpdate=!0,me.visible){for(let ae=0;ae<ie;ae++){let at=we[ae*4+1];if(we[ae*4+3]+=Pe,we[ae*4+3]>we[ae*4+2]){Xe(ae,!1);continue}xe[ae*3+1]+=we[ae*4]*Pe*(1-.3*we[ae*4+3]/we[ae*4+2]),xe[ae*3]+=Math.sin(oe*.5+at)*.035*Pe,xe[ae*3+2]+=Math.cos(oe*.4+at*1.3)*.035*Pe}me.geometry.attributes.position.needsUpdate=!0}if(lt.visible){for(let ae=0;ae<ft;ae++)Dt[ae*4+3]+=Pe,Dt[ae*4+3]>Dt[ae*4+2]?_t(ae,!1):z(ae,Pe,oe);lt.geometry.attributes.position.needsUpdate=!0}}}}var Ut=-2.8,Gn=-.27,ra=1.8,Yi=4.88,si=-2.93,Ku=2.45,ns=Yi-ra,is=Ku-si,cr=(ra+Yi)/2,Hs=(si+Ku)/2,zs=.6,qu=4.9375,Sc=-2.9875,Sr=.3,xs=1.24,Gs=new F(4.775,-.45,-.7),os=new F(2.75,Ut,-1.45),Un=new F(2.22,1.29,-3.42),Ca=1.585,Zu=Ca-1.29-.012,$u=-3.26- -3.42,bi={x0:-.4,x1:Yi,z0:si,z1:2.62},br=(i,e,t)=>{let n=document.createElement("canvas");return n.width=i,n.height=e,t(n.getContext("2d"),i,e),n},ks=(i,e={})=>{let t=new Zn(i);return e.color!==!1&&(t.colorSpace=vn),e.wrap!==!1&&(t.wrapS=t.wrapT=Qn),e.repeat&&t.repeat.set(e.repeat[0],e.repeat[1]),t.anisotropy=8,t},Ju=(i,e,t,n,s,r)=>{i.save(),i.translate(e,t),i.scale(1,s/n);let a=i.createRadialGradient(0,0,0,0,0,n);r.forEach(([o,c])=>a.addColorStop(o,c)),i.fillStyle=a,i.beginPath(),i.arc(0,0,n,0,6.2832),i.fill(),i.restore()};function Ym({kit:i,M:e}){let{box:t,cyl:n,sphere:s,tube:r,mats:a,atlas:o,V:c}=i,l=new yt,h=new yt;l.add(h);let d=(L=l)=>{let ce=new yt;return L.add(ce),ce},p=L=>{let ce=new Map,ke=tt=>{for(let wt=tt;wt&&wt!==L;wt=wt.parent)if(wt.userData.keep)return!0;return!1},ze=[];L.traverse(tt=>{tt.isMesh&&!ke(tt)&&ze.push(tt)}),ze.forEach(tt=>{let wt=ce.get(tt.material)||{cast:!1,recv:!1};wt.cast||(wt.cast=tt.castShadow),wt.recv||(wt.recv=tt.receiveShadow),ce.set(tt.material,wt)}),ze.forEach(tt=>{let wt=ce.get(tt.material);tt.castShadow=wt.cast,tt.receiveShadow=wt.recv})},u=L=>(p(L),i.bake(L),L.userData.keep=!0,L),f=(L,ce,ke,ze,tt,wt,kt,Ot={})=>{let an=new sn(L,ce);if(Ot.u){let Wt=an.attributes.uv;for(let Gt=0;Gt<Wt.count;Gt++)Wt.setX(Gt,ot(Ot.u[0],Ot.u[1],Wt.getX(Gt)))}Ot.base&&an.translate(0,ce/2,0),Ot.edge&&an.translate(-L/2,0,0);let xn=i.place(new Fe(an,ke),tt,wt,kt,ze,{cast:!1,...Ot});return Ot.ry&&(xn.rotation.y=Ot.ry),Ot.rx&&(xn.rotation.x=Ot.rx),xn},x=Nn(72),g=.2286,m=ks(br(512,512,L=>{for(let ke=0;ke<4;ke++)for(let ze=0;ze<4;ze++){let tt=(ke+ze)%2===1,wt=(tt?128:172)+(x()-.5)*14;L.fillStyle=`rgb(${wt|0},${wt*.93|0},${wt*.78|0})`,L.fillRect(ke*128,ze*128,128,128);for(let kt=0;kt<16;kt++){let Ot=ke*128+x()*128,an=ze*128+x()*128,xn=x()*6.28,Wt=10+x()*34;L.strokeStyle=x()>.5?`rgba(255,246,222,${.06+x()*.1})`:`rgba(60,46,30,${.06+x()*.1})`,L.lineWidth=1+x()*2.5,L.beginPath(),L.moveTo(Ot,an),L.quadraticCurveTo(Ot+Math.cos(xn+1)*Wt*.5,an+Math.sin(xn+1)*Wt*.5,Ot+Math.cos(xn)*Wt,an+Math.sin(xn)*Wt),L.stroke()}}L.strokeStyle="rgba(48,38,26,.55)",L.lineWidth=2;for(let ke=0;ke<=4;ke++)L.beginPath(),L.moveTo(ke*128,0),L.lineTo(ke*128,512),L.moveTo(0,ke*128),L.lineTo(512,ke*128),L.stroke();Ju(L,300,260,220,170,[[0,"rgba(70,56,36,.16)"],[1,"rgba(70,56,36,0)"]])}),{repeat:[ns/(4*g),is/(4*g)]}),_=ks(br(256,256,(L,ce,ke)=>{L.fillStyle="#7a7a7a",L.fillRect(0,0,ce,ke);for(let ze=0;ze<2600;ze++){let tt=x()>.3?150+x()*100:30+x()*50;L.fillStyle=`rgba(${tt|0},${tt|0},${tt|0},${.5+x()*.5})`,L.beginPath(),L.arc(x()*ce,x()*ke,.8+x()*x()*4.2,0,6.2832),L.fill()}}),{color:!1,repeat:[ns/.32,is/.32]}),b=br(32,4,(L,ce)=>{for(let ke=0;ke<ce;ke++){let ze=128+120*Math.sin(ke/ce*6.2832);L.fillStyle=`rgb(${ze|0},${ze|0},${ze|0})`,L.fillRect(ke,0,1,4)}}),y=ks(b,{color:!1,repeat:[1/.045,1]}),M=ks(b,{color:!1,repeat:[1/.014,1]}),T=br(256,256,(L,ce)=>{L.fillStyle="#000",L.fillRect(0,0,ce,ce),L.filter="blur(4px)",L.fillStyle="#fff",L.beginPath();for(let ke=0;ke<=96;ke++){let ze=ke/96*6.2832,tt=ce*.4*(1+.08*Math.sin(3*ze+1)+.05*Math.sin(7*ze+2)+.025*Math.sin(17*ze));L[ke?"lineTo":"moveTo"](ce/2+Math.cos(ze)*tt,ce/2+Math.sin(ze)*tt)}L.fill(),L.filter="none"}),R=L=>{let ce=ks(T,{color:!1,wrap:!1});return ce.center.set(L.cu,L.cv),ce.offset.set(.5-L.cu,.5-L.cv),ce},v=br(128,128,(L,ce,ke)=>{let ze=L.createImageData(ce,ke),tt=6.2832/ce,wt=(kt,Ot)=>Math.sin(tt*(2*kt+Ot))*.5+Math.sin(tt*(-kt+3*Ot)+1.3)*.35+Math.sin(tt*(5*kt-2*Ot)+2.1)*.2+Math.sin(tt*(3*kt+5*Ot)+.4)*.15;for(let kt=0;kt<ke;kt++)for(let Ot=0;Ot<ce;Ot++){let an=(wt(Ot+1,kt)-wt(Ot-1,kt))*2.2,xn=(wt(Ot,kt+1)-wt(Ot,kt-1))*2.2,Wt=Math.hypot(an,xn,1),Gt=(kt*ce+Ot)*4;ze.data[Gt]=(-an/Wt*.5+.5)*255,ze.data[Gt+1]=(-xn/Wt*.5+.5)*255,ze.data[Gt+2]=(1/Wt*.5+.5)*255,ze.data[Gt+3]=255}L.putImageData(ze,0,0)}),A=ks(br(1024,128,(L,ce,ke)=>{let ze=[];for(let kt=0;kt<=ce;kt+=8)ze.push(ke*.13+Math.sin(kt*.013)*5+Math.sin(kt*.051+1)*3+(x()-.5)*3);let tt=kt=>{L.beginPath(),ze.forEach((Ot,an)=>L[an?"lineTo":"moveTo"](an*8,Ot+kt))},wt=L.createLinearGradient(0,0,0,ke);wt.addColorStop(0,"rgba(96,70,40,.22)"),wt.addColorStop(1,"rgba(56,40,22,.66)"),L.fillStyle=wt,tt(0),L.lineTo(ce,ke),L.lineTo(0,ke),L.fill(),L.strokeStyle="rgba(72,50,26,.8)",L.lineWidth=3,tt(0),L.stroke(),L.strokeStyle="rgba(80,58,30,.35)",L.lineWidth=2,tt(16),L.stroke()}),{wrap:!1}),I=ks(br(2048,256,(L,ce,ke)=>{for(let ze=0;ze<54;ze++){let tt=x()*ce,wt=ke*(.5+x()*.5),kt=18+x()*70,Ot=30+x()*120|0;Ju(L,tt,wt,kt*1.4,kt*1.1,[[0,"rgba(38,46,28,.42)"],[1,"rgba(38,46,28,0)"]]);for(let an=0;an<Ot;an++){let xn=x()*6.2832,Wt=kt*Math.sqrt(x());L.fillStyle=x()>.3?`rgba(16,20,12,${.55+x()*.4})`:`rgba(86,106,64,${.4+x()*.4})`,L.beginPath(),L.arc(tt+Math.cos(xn)*Wt,wt+Math.sin(xn)*Wt*.8,.8+x()*x()*5,0,6.2832),L.fill()}}}),{wrap:!1}),G=ks(br(256,256,(L,ce,ke)=>{for(let ze=0;ze<30;ze++){let tt=ze/29;Ju(L,ce/2+(x()-.5)*50*tt,ke*(.96-tt*.62),ce*(.06+.36*tt),ke*(.07+.2*tt),[[0,`rgba(12,10,8,${.42*(1-.5*tt)})`],[1,"rgba(12,10,8,0)"]])}for(let ze=0;ze<40;ze++){let tt=ce*(.3+x()*.4);L.strokeStyle=`rgba(10,8,6,${.04+x()*.06})`,L.lineWidth=2+x()*6,L.beginPath(),L.moveTo(tt,ke),L.lineTo(tt+(tt-ce/2)*.8,ke*(.2+x()*.3)),L.stroke()}}),{wrap:!1}),w=ks(br(512,512,(L,ce,ke)=>{let ze=ce/6;for(let tt=0;tt<6;tt++){let wt=x()*ke;[[0,wt],[wt,ke]].forEach(([kt,Ot])=>{let an=150+(x()-.5)*26;L.fillStyle=`rgb(${an|0},${an*.9|0},${an*.76|0})`,L.fillRect(tt*ze,kt,ze,Ot-kt);for(let xn=0;xn<22;xn++){let Wt=tt*ze+x()*ze;L.strokeStyle=`rgba(${x()>.5?"70,52,32":"220,200,170"},${.05+x()*.08})`,L.lineWidth=.6+x()*1.6,L.beginPath(),L.moveTo(Wt,kt),L.bezierCurveTo(Wt+4,kt+(Ot-kt)*.3,Wt-4,kt+(Ot-kt)*.7,Wt+(x()-.5)*6,Ot),L.stroke()}}),L.fillStyle="rgba(40,30,20,.5)",L.fillRect(tt*ze,wt-1,ze,2),L.fillRect(tt*ze,0,2,ke)}}),{repeat:[ns/1.2,is/1.2]}),U=ks(br(256,128,(L,ce,ke)=>{L.fillStyle="#c2beb2",L.fillRect(0,0,ce,ke),[[0,0],[1,0],[-.5,1],[.5,1],[1.5,1]].forEach(([ze,tt])=>{let wt=ze*128+2,kt=tt*64+2,Ot=120+(x()-.5)*12;L.fillStyle=`rgb(${Ot*.86|0},${Ot|0},${Ot*.96|0})`,L.fillRect(wt,kt,124,60),L.fillStyle="rgba(255,255,255,.12)",L.fillRect(wt+4,kt+4,116,10)})}),{repeat:[3.57/.3,.61/.15]}),N=new Et(11575946),B=new Et(11450028),Z=new Et(11774872),H=new Et(11974832),Y=i.std(N.getHex(),.88),q=i.std(9077104,.95),W=i.std(12170150,.45),J=i.std(Z.getHex(),.95,0,{bumpMap:_,bumpScale:3}),ge=i.std(16777215,.5,0,{map:m}),Ne=i.std(16777215,.55,0,{map:w}),qe=i.std(3812386,.5),Je=i.std(16777215,.25,0,{map:U}),mt=i.std(9343639,.5,.4,{bumpMap:y,bumpScale:1.5}),te=i.std(12103837,.92,0,{bumpMap:M,bumpScale:2.5}),Ee=i.std(3104680,.45,.05,{side:li}),Ue=(L,ce={})=>{let ke=new on({map:L,transparent:!0,depthWrite:!1,roughness:.9,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2,...ce});return ke.userData.th=[.5],ke},be=Ue(A),Ge=Ue(I),re=Ue(G),Qe=ks(v,{color:!1,repeat:[(bi.x1-bi.x0)/.7,(bi.z1-bi.z0)/.7]}),ue=a.water.clone();ue.alphaMap=R({cu:(Gs.x-bi.x0)/(bi.x1-bi.x0),cv:(bi.z1-Gs.z)/(bi.z1-bi.z0)}),ue.normalMap=Qe,ue.normalScale.set(.4,.4),ue.opacity=.74,ue.color.set(2906748),ue.roughness=.1,ue.ior=1.33,ue.envMapIntensity=2.4;let me=3.8,ie=a.sewage.clone();ie.alphaMap=R({cu:.5,cv:.5}),ie.normalMap=ks(v,{color:!1,repeat:[me/.5,me/.5]}),ie.normalScale.set(.1,.1),ie.color.set(4930079),ie.opacity=.93,ie.roughness=.28,ie.envMapIntensity=1.8;let xe=ie.clone();xe.envMapIntensity=.35,xe.color.set(5915940),xe.alphaMap=null,xe.normalMap=null;let $e=o([{key:"tag",text:"MAIN SHUT-OFF",w:256,h:64,size:30,color:"#16181c",bg:"#e9c22e"},{key:"reg",text:"0412.7",sub:"m\xB3",w:160,h:72,size:34,color:"#1a1c20",bg:"#d9d4c4"},{key:"cat3",w:240,h:320,draw(L,ce,ke){L.fillStyle="#e3bd2c",L.fillRect(0,0,ce,ke),L.fillStyle="#121316",L.fillRect(0,26,ce,58),L.textAlign="center",L.textBaseline="middle",L.fillStyle="#e3bd2c",L.font="800 40px ui-sans-serif, Arial, sans-serif",L.fillText("CAUTION",ce/2,56),L.fillStyle="#121316",L.font="800 34px ui-sans-serif, Arial, sans-serif",L.fillText("CATEGORY 3",ce/2,132),L.fillText("WATER",ce/2,172),L.font="600 21px ui-sans-serif, Arial, sans-serif",L.fillText("SEWAGE \xB7 NO ENTRY",ce/2,226),L.fillText("WITHOUT PPE",ce/2,256)}},{key:"hepa",text:"HEPA \xB7 99.97 %",w:256,h:44,size:24,color:"#cfd4da"},{key:"zip",text:"CONTAINMENT",sub:"KEEP ZIPPED SHUT",w:288,h:84,size:34,color:"#16181c",bg:"#e9c22e"},{key:"mano",text:"\u22126 Pa",sub:"NEGATIVE AIR",w:176,h:96,size:40,color:"#8fd3a6",bg:"#05070b"},{key:"asb",text:"ASBESTOS SAMPLING",sub:"DO NOT DISTURB",w:384,h:92,size:34,color:"#ff6b4f",bg:"#e6e1d4"},{key:"s1",text:"S-01",sub:"CEILING TEXTURE",w:176,h:72,size:32,color:"#16181c",bg:"#e6e1d4"},{key:"s2",text:"S-02",sub:"9\xD79 FLOOR TILE",w:176,h:72,size:32,color:"#16181c",bg:"#e6e1d4"},{key:"s3",text:"S-03",sub:"PIPE WRAP",w:176,h:72,size:32,color:"#16181c",bg:"#e6e1d4"},{key:"lab",w:300,h:384,draw(L,ce){L.fillStyle="#d8d3c5",L.fillRect(0,0,ce,384),L.textAlign="left",L.textBaseline="middle",L.fillStyle="#16181c",L.font="700 22px ui-monospace, Menlo, monospace",L.fillText("LAB RESULTS \xB7 PLM",16,30),L.font="500 14px ui-monospace, Menlo, monospace",L.fillStyle="#4a4d52",L.fillText("BULK SAMPLES \xB7 3",16,58),L.fillStyle="#16181c",L.fillRect(16,74,ce-32,2),[["S-01 CEILING","NONE DETECTED","#2f7a4c"],["S-02 FLOOR TILE","CHRYSOTILE 3 %","#c2402b"],["S-03 PIPE WRAP","CHRYSOTILE 60 %","#c2402b"]].forEach(([ke,ze,tt],wt)=>{let kt=108+wt*78;L.fillStyle="#16181c",L.font="700 18px ui-monospace, Menlo, monospace",L.fillText(ke,16,kt),L.fillStyle=tt,L.font="700 20px ui-monospace, Menlo, monospace",L.fillText(ze,16,kt+28),L.fillStyle="rgba(20,22,26,.3)",L.fillRect(16,kt+50,ce-32,1)}),L.fillStyle="#c2402b",L.font="800 20px ui-monospace, Menlo, monospace",L.fillText("ABATE BEFORE DEMO",16,352)}},{key:"rh",text:"RH 46 %",sub:"PUMP ON",w:176,h:88,size:36,color:"#9fc4ff",bg:"#05070b"},{key:"mm",text:"28",sub:"% WOOD",tone:"#ff6b4f",w:200,h:120,draw(L,ce,ke,ze){L.fillStyle="#05070b",L.fillRect(0,0,ce,ke),L.textAlign="left",L.textBaseline="middle",L.fillStyle="#8b93a1",L.font="600 15px ui-monospace, Menlo, monospace",L.fillText("MOISTURE",14,20),L.fillStyle=ze.tone,L.font="700 58px ui-monospace, Menlo, monospace",L.fillText(ze.text,12,66),L.fillStyle="#cfd4da",L.font="500 17px ui-monospace, Menlo, monospace",L.fillText(ze.sub,98,76),L.fillStyle="#1c222c",L.fillRect(14,102,ce-28,8),L.fillStyle=ze.tone,L.fillRect(14,102,(ce-28)*Yt((+ze.text-6)/26,.05,1),8)}}],{width:1024,emissive:.25});for(let L=si+.06;L<Ku;L+=.406)t(.089,Gn-Ut-.076,.038,a.studs,qu,(Ut+Gn)/2,L,h,{cast:!1,uv:!0});t(.089,.038,is,a.studs,qu,Ut+.019,Hs,h,{cast:!1,uv:!0}),t(.089,.038,is,a.studs,qu,Gn-.019,Hs,h,{cast:!1,uv:!0});let Xe=Gn-Ut-zs;t(.013,Xe,is,Y,Yi+.0065,Ut+zs+Xe/2,Hs,h),t(.115,Gn-Ut,.013,Y,qu-.004,(Ut+Gn)/2,Ku+.0065,h);for(let L=ra+.04;L<Yi;L+=.406)t(.038,Gn-Ut-.076,.089,a.studs,L,(Ut+Gn)/2,Sc,h,{cast:!1,uv:!0});t(ns,.038,.089,a.studs,cr,Ut+.019,Sc,h,{cast:!1,uv:!0}),t(ns,.038,.089,a.studs,cr,Gn-.019,Sc,h,{cast:!1,uv:!0}),t(ns,Xe,.013,Y,cr,Ut+zs+Xe/2,si-.0065,h),t(ns,Gn-Ut,.013,q,cr,(Ut+Gn)/2,Sc-.051,h),t(.013,Gn-Ut,.128,Y,ra-.0065,(Ut+Gn)/2,Sc,h);let lt=f(ns,is,J,l,cr,Gn,Hs,{rx:Math.PI/2,receive:!0,keep:!0}),ft=2.95,j=-2.24,Dt=-.47;t(ft-ra,.013,j-si,Y,(ra+ft)/2,Dt,(si+j)/2,h),t(ft-ra,Gn-Dt,.013,Y,(ra+ft)/2,(Dt+Gn)/2,j,h),t(.013,Gn-Dt,j-si,Y,ft,(Dt+Gn)/2,(si+j)/2,h),f(ns,is,ge,h,cr,Ut+.003,Hs,{rx:-Math.PI/2,receive:!0}),t(.045,.008,is,a.galv,ra+.02,Ut+.004,Hs,h,{cast:!1}),n(.095,.008,a.castIron,os.x,Ut+.004,os.z,h,{seg:24,cast:!1}),n(.074,.006,a.galv,os.x,Ut+.009,os.z,h,{seg:24,cast:!1});for(let L=-2;L<=2;L++)t(.012,.002,.11-Math.abs(L)*.018,a.blackPlastic,os.x+L*.024,Ut+.0125,os.z,h,{cast:!1});let _t=d();t(.013,zs,is,Y,Yi+.0065,Ut+zs/2,Hs,_t),t(ns,zs,.013,Y,cr,Ut+zs/2,si-.0065,_t),t(.012,.09,is,W,Yi-.006,Ut+.045,Hs,_t,{cast:!1}),t(ns,.09,.012,W,cr,Ut+.045,si+.006,_t,{cast:!1});let z=d(_t);z.position.y=Ut,f(is,.46,be,z,Yi-.0125,0,Hs,{ry:-Math.PI/2,base:!0}),f(ns,.46,be,z,cr,0,si+.0125,{base:!0,u:[0,ns/is]}),u(z),f(is,zs,Ge,_t,Yi-.0128,Ut,Hs,{ry:-Math.PI/2,base:!0}),f(ns,zs,Ge,_t,cr,Ut,si+.0128,{base:!0,u:[.2,.2+ns/is]}),u(_t);let S=d();S.position.y=Ut,t(.013,zs,is,Y,Yi+.0065,zs/2,Hs,S),t(.012,.09,is,W,Yi-.006,.045,Hs,S,{cast:!1}),t(ns,zs,.013,Y,cr,zs/2,si-.0065,S),t(ns,.09,.012,W,cr,.045,si+.006,S,{cast:!1}),u(S);let le=f(ns,is,Ne,l,Yi,Ut+.007,Hs,{rx:-Math.PI/2,edge:!0,keep:!0,receive:!0}),he=-.62,_e=si+.1,rt=[[2.3,Dt,_e],[2.3,he+.06,_e],[2.33,he+.008,_e],[2.38,he,_e],[3.49,he,_e]],it=[[3.57,he,_e],[4.56,he,_e],[4.61,he+.008,_e],[4.64,he+.06,_e],[4.64,Gn,_e]],Oe=d(),Ve=d();[rt,it].forEach(L=>{r(L,.043,te,Oe,{type:"centripetal",radial:12,density:24}),r(L,.033,a.rubber,Ve,{type:"centripetal",radial:12,density:24})}),[2.9,3.53,4.2].forEach(L=>n(.046,L===3.53?.09:.05,L===3.53?a.galv:te,L,he,_e,Oe,{axis:"x",seg:16})),u(Oe),u(Ve),[2.75,3.85].forEach(L=>{t(.022,Gn-he-.04,.004,a.galv,L,(Gn+he)/2+.02,_e-.046,h,{cast:!1}),t(.022,.004,.1,a.galv,L,he-.046,_e,h,{cast:!1})}),n(.06,.008,W,4.64,Gn-.004,_e,h,{seg:20,cast:!1});let je=4.8,xt=2.1;n(.019,.26,a.bluePlastic,je,Ut+.13,xt,h,{seg:12}),n(.04,.012,a.castIron,je,Ut+.006,xt,h,{seg:16,cast:!1}),t(.1,.12,.11,a.brass,je,Ut+.32,xt,h,{r:.01}),n(.04,.035,a.blackPlastic,je-.065,Ut+.33,xt,h,{axis:"x",seg:20}),$e.plane("reg",.06,h,je-.0835,Ut+.33,xt,{rot:[0,-Math.PI/2,0]}),n(.015,.12,a.brass,je,Ut+.44,xt,h,{seg:12}),n(.024,.09,a.brass,je,Ut+.53,xt,h,{seg:16}),n(.006,.03,a.galv,je-.035,Ut+.53,xt,h,{axis:"x",seg:8});let D=new yt;D.position.set(je-.052,Ut+.53,xt),D.userData.keep=!0,l.add(D),t(.01,.14,.024,a.redPlastic,0,.06,0,D,{r:.004}),t(.014,.06,.028,a.redPlastic,-.002,.11,0,D,{r:.005}),i.bake(D),$e.plane("tag",.1,h,je-.03,Ut+.43,xt-.055,{rot:[0,-Math.PI/2+.35,.05]}),r([[je-.035,Ut+.53,xt-.01],[je-.045,Ut+.49,xt-.04],[je-.03,Ut+.455,xt-.055]],.0012,a.galv,h,{radial:4,cast:!1});let oe=.0112;n(oe,-.45-(Ut+.58),a.copper,je,(Ut+.58-.45)/2,xt,h,{seg:10}),s(.016,a.copper,je,-.45,xt,h,{seg:10,seg2:8}),n(oe,xt-si,a.copper,je,-.45,(xt+si)/2,h,{axis:"z",seg:10}),[1.5,.6,-1.3,-2.2].forEach(L=>t(.07,.022,.02,a.galv,je+.045,-.45,L,h,{cast:!1})),[-2.1,-1.2].forEach(L=>t(.07,.02,.022,a.galv,je+.045,L,xt,h,{cast:!1})),n(.0142,.07,a.copper,Gs.x+.025,Gs.y,Gs.z,h,{axis:"z",seg:12}),t(.004,.006,.045,a.blackPlastic,Gs.x+.011,Gs.y,Gs.z,h,{cast:!1});let fe=d(),Re=-3.885,We=-3.27,k=1.285,Le=4.86,de=2.02,Be=2.78;[[k,de],[Be,Le]].forEach(([L,ce])=>{t(ce-L,.8,We-Re-.03,qe,(L+ce)/2,Sr+.5,(Re+We)/2-.015,fe),t(ce-L,.1,.5,a.blackPlastic,(L+ce)/2,Sr+.05,Re+.25,fe,{cast:!1}),t(ce-L+.01,.04,We-Re+.02,a.blackPlastic,(L+ce)/2,xs-.02,(Re+We)/2+.01,fe);let ke=Math.max(1,Math.round((ce-L)/.46)),ze=(ce-L)/ke;for(let tt=0;tt<ke;tt++){let wt=L+ze*(tt+.5);t(ze-.006,.15,.02,qe,wt,xs-.13,We-.01,fe,{r:.004}),t(ze-.006,.6,.02,qe,wt,Sr+.42,We-.01,fe,{r:.004}),t(.12,.012,.02,a.steel,wt,xs-.11,We+.01,fe,{cast:!1}),t(.012,.12,.02,a.steel,wt+ze/2-.05,Sr+.6,We+.01,fe,{cast:!1})}}),t(3.57,.61,.012,Je,(k+Le)/2,(xs+1.85)/2,Re+.006,fe),t(Le-k,3.195-2.57,.37,Y,(k+Le)/2,(2.57+3.195)/2,-3.705,fe),t(.115,.72,.36,qe,1.343,2.21,-3.7,fe);for(let L=0;L<6;L++){let ce=1.65+L*.5;t(.494,.69,.012,qe,ce,2.215,-3.514,fe,{r:.004}),t(.012,.1,.02,a.steel,ce+(L%2?-.21:.21),1.94,-3.5,fe,{cast:!1})}t(Le-4.4,.72,.36,qe,(4.4+Le)/2,2.21,-3.7,fe),t(Be-de-.004,xs-Sr-.012,.62,a.steel,2.4,(Sr+xs)/2-.006,-3.575,fe),t(.7,.56,.02,a.steel,2.4,Sr+.44,-3.255,fe,{r:.006}),t(.5,.24,.006,a.blackPlastic,2.4,Sr+.5,-3.243,fe,{cast:!1}),n(.011,.6,a.steel,2.4,Sr+.78,-3.215,fe,{axis:"x",seg:10}),[-.09,.09].forEach(L=>t(.014,.014,.04,a.steel,2.4+L*3,Sr+.78,-3.235,fe,{cast:!1})),[-.27,-.16,.16,.27].forEach(L=>n(.02,.025,a.blackPlastic,2.4+L,xs-.07,-3.255,fe,{axis:"z",seg:14})),t(Be-de,.012,.6,a.blackPlastic,2.4,xs-.006,-3.575,fe,{cast:!1}),[[-.18,-3.42,.095],[.18,-3.42,.08],[-.18,-3.72,.08],[.18,-3.72,.095]].forEach(([L,ce,ke])=>n(ke,.002,a.greyPlastic,2.4+L,xs+.001,ce,fe,{seg:24,cast:!1})),t(Be-de,.06,.03,a.steel,2.4,xs+.03,Re+.03,fe),n(.125,.05,a.blackPlastic,Un.x,xs+.027,Un.z,fe,{seg:24}),t(.2,.016,.026,a.blackPlastic,Un.x-.07,xs+.045,Un.z+.2,fe,{rot:[0,1.1,0]}),n(.08,.15,a.steel,2.58,xs+.078,-3.72,fe,{seg:20,r2:.06}),t(.13,.25,.012,a.greyPlastic,2.3,Sr+.68,-3.198,fe,{rot:[.05,0,0]}),n(.055,.15,a.greyPlastic,3.4,xs+.075,-3.75,fe,{seg:16}),[[-.02,.1],[.015,-.08],[0,0]].forEach(([L,ce])=>n(.006,.3,qe,3.4+L,xs+.2,-3.75+L,fe,{seg:6,rot:[ce,0,ce*.6]})),t(Le-k+.1,.012,2.9,Y,(k+Le)/2+.05,3.189,-2.44,fe,{cast:!1}),u(fe);let Pe=d(),ae=f(bi.x1-bi.x0,bi.z1-bi.z0,ue,Pe,(bi.x0+bi.x1)/2,Ut+.01,(bi.z0+bi.z1)/2,{rx:-Math.PI/2,keep:!0});ae.renderOrder=2,ae.userData.noAO=!0;let at=i.particles(280,{color:11065087,size:.13,gain:.9,opacity:.8});Pe.add(at);let Ze=at.userData.n,vt=at.userData.pos,Ft=new Float32Array(Ze*4);for(let L=0;L<Ze;L++){let ce=(x()-.5)*.7,ke=(x()-.3)*.5,ze=2.4+x()*2;Ft[L*4]=-Math.cos(ke)*Math.cos(ce)*ze,Ft[L*4+1]=Math.sin(ke)*ze,Ft[L*4+2]=Math.cos(ke)*Math.sin(ce)*ze,Ft[L*4+3]=x()}let Xt=d(),rn=f(me,me,ie,Xt,os.x,Ut+.012,os.z,{rx:-Math.PI/2,keep:!0});rn.renderOrder=2,rn.userData.noAO=!0;let Pn=i.place(new Fe(new jn(.13,24,8,0,Math.PI*2,0,Math.PI/2),xe),os.x,Ut+.01,os.z,Xt,{keep:!0,cast:!1}),Jt=i.particles(48,{color:11046492,size:.03,gain:1,normal:!0,opacity:.9});Xt.add(Jt);let Tn=Jt.userData.n,_n=Jt.userData.pos,C=new Float32Array(Tn*3);for(let L=0;L<Tn;L++)C[L*3]=x()*6.2832,C[L*3+1]=.02+x()*.2,C[L*3+2]=x();let Se=d(Xt);Se.position.set(3.95,Ut,-1.55),Se.rotation.y=-1.05,[[-.2,.0616],[.2,-.0616]].forEach(([L,ce])=>t(.32,.64,.012,a.yellowPlastic,0,.3,ce,Se,{rot:[L,0,0],r:.005})),t(.34,.03,.03,a.yellowPlastic,0,.615,0,Se,{r:.008}),$e.plane("cat3",.26,Se,0,.3+.199*.0075,.0616+.98*.0075,{rot:[-.2,0,0]}),u(Se);let $=d(),Ae=d($);f(1.9,1.6,re,Ae,2.35,1.595,-3.505),f(1.6,.61,re,Ae,2.3,xs,Re+.0125,{base:!0}),f(.92,.16,re,Ae,2.4,1.6,-3.274),f(3,2.6,re,Ae,2.45,3.18,-2.75,{rx:Math.PI/2}),u(Ae);let Te=i.particles(90,{color:16760944,size:.11,gain:1.3,opacity:.85}),ht=i.particles(70,{color:16738850,size:.2,gain:1,opacity:.6}),gt=ks(br(64,64,L=>{for(let ce=0;ce<7;ce++)Ju(L,32+(x()-.5)*16,32+(x()-.5)*16,14+x()*10,12+x()*10,[[0,"rgba(255,255,255,.1)"],[1,"rgba(255,255,255,0)"]])}),{wrap:!1}),Ct=i.particles(170,{color:2762532,size:1.15,gain:1,normal:!0,opacity:.6}),dt=i.particles(60,{color:1973274,size:1.3,gain:1,normal:!0,opacity:.4});Ct.material.map=gt,dt.material.map=gt,$.add(Te,ht,Ct,dt);let Lt=(L,ce)=>{let ke=new Float32Array(L.userData.n*ce);for(let ze=0;ze<ke.length;ze++)ke[ze]=x();return ke},Vt=Lt(Te,4),wn=Lt(ht,4),kn=Lt(Ct,4),Vn=Lt(dt,4),Jn=i.sprite(16747066,1.4,Un.x,Un.y+.16,Un.z+.06,$,0),Xn=[i.sprite(16742954,1,Un.x-.01,Un.y+.15,Un.z+.03,$,.6),i.sprite(16747066,1,Un.x+.02,Ca+.12,-3.2,$,.45)],Wn=new ps(16747066,0,5,2);Wn.position.set(Un.x,Un.y+.2,Un.z+.22),l.add(Wn);let P=d(),se=2.28,Ie=.9,Me=Gn-Ut,Ce=a.poly.clone();Ce.opacity=.15,Ce.color.set(13030107);let St=Ce.clone();St.opacity=.45;let It=(L,ce,ke)=>.075*Math.sin(Math.PI*L)*Math.pow(Math.sin(Math.PI*ce),.6)+.008*Math.sin((L-.5)*ke*11+ce*3)*Math.sin(Math.PI*ce),ee=(L,ce,ke)=>{let ze=[],tt=[];for(let Wt=0;Wt<=16;Wt++)ze.push(-L/2+L*Wt/16);for(let Wt=0;Wt<=10;Wt++)tt.push(-Me/2+Me*Wt/10);ke&&(ze.push(ke[0],ke[1]),tt.push(ke[2])),ze.sort((Wt,Gt)=>Wt-Gt),tt.sort((Wt,Gt)=>Wt-Gt);let wt=[],kt=[],Ot=[],an=ze.length;tt.forEach(Wt=>ze.forEach(Gt=>{let mi=Gt/L+.5,Zt=Wt/Me+.5;wt.push(Gt,Wt,It(mi,Zt,L)),kt.push(mi,Zt)}));for(let Wt=0;Wt<tt.length-1;Wt++)for(let Gt=0;Gt<an-1;Gt++){let mi=(ze[Gt]+ze[Gt+1])/2,Zt=(tt[Wt]+tt[Wt+1])/2;if(ke&&mi>ke[0]&&mi<ke[1]&&Zt<ke[2])continue;let ri=Gt+an*(Wt+1),qn=Gt+an*Wt,nn=Gt+1+an*Wt,In=Gt+1+an*(Wt+1);Ot.push(ri,qn,In,qn,nn,In)}let xn=new en;return xn.setAttribute("position",new qt(wt,3)),xn.setAttribute("uv",new qt(kt,2)),xn.setIndex(Ot),xn.computeVertexNormals(),i.place(new Fe(xn,Ce),0,0,0,ce,{cast:!1,receive:!1})},ne=Ie-si,pe=Yi-se,He=(si+Ie)/2,E=L=>-(L-He),O=L=>(E(L)+ne/2)/ne,K=L=>-Me/2+L,Q=-.75,ve=.84,De=2.05,ye=E(Q+ve/2),X=E(Q-ve/2),Ye=d(P);Ye.position.set(se,(Ut+Gn)/2,He),Ye.rotation.y=Math.PI/2,ee(ne,Ye,[ye,X,K(De)]);let Ke=d(P);Ke.position.copy(Ye.position),Ke.rotation.copy(Ye.rotation);let ct=d(P);ct.position.set((se+Yi)/2,(Ut+Gn)/2,Ie),ct.rotation.y=Math.PI,ee(pe,ct),[ye,X].forEach((L,ce)=>{let ke=(L+ne/2)/ne,ze=[];for(let tt=0;tt<=10;tt++){let wt=K(.03+tt/10*(De-.03));ze.push([L,wt,It(ke,(wt+Me/2)/Me,ne)-.006])}r(ze,.006,a.blackPlastic,Ke,{radial:5,cast:!1}),t(.016,.04,.01,a.blackPlastic,L+(ce?-.012:.012),K(1.1),It(ke,1.1/Me,ne)-.014,Ke,{cast:!1})});let ut=It(.5,De/Me,ne)-.03;n(.05,ve+.02,St,(ye+X)/2,K(De+.04),ut,Ke,{axis:"x",seg:14,cast:!1}),[-.25,.25].forEach(L=>t(.035,.12,.11,a.bluePlastic,(ye+X)/2+L,K(De+.03),ut,Ke,{cast:!1})),u(Ye),$e.plane("zip",.3,P,se+It(O(.15),1.9/Me,ne)-.014,Ut+1.9,.15,{rot:[0,-Math.PI/2,0]});let pt=.25,Pt=se+It(O(pt),1.45/Me,ne)-.03;t(.03,.15,.11,a.blackPlastic,Pt,Ut+1.45,pt,P,{r:.006}),$e.plane("mano",.09,P,Pt-.0155,Ut+1.47,pt,{rot:[0,-Math.PI/2,0]}),r([[Pt,Ut+1.38,pt-.03],[Pt+.02,Ut+1.3,pt-.06],[se+.2,Ut+1.2,pt-.05]],.003,a.blackPlastic,P,{radial:5,cast:!1});let bt=a.bluePlastic;t(.05,.003,ne,bt,se+.01,Ut+.0015,He,P,{cast:!1}),t(.05,.003,ne,bt,se+.01,Gn-.0015,He,P,{cast:!1}),t(pe,.003,.05,bt,(se+Yi)/2,Ut+.0015,Ie-.01,P,{cast:!1}),t(pe,.003,.05,bt,(se+Yi)/2,Gn-.0015,Ie-.01,P,{cast:!1}),t(.003,Me,.05,bt,Yi-.0015,(Ut+Gn)/2,Ie-.01,P,{cast:!1}),t(.05,Me,.003,bt,se+.01,(Ut+Gn)/2,si+.0015,P,{cast:!1});let st=c(2.85,Ut,.32);t(.44,.5,.62,a.enclosureDark,st.x,st.y+.33,st.z,P,{r:.02}),t(.45,.04,.63,a.blackPlastic,st.x,st.y+.6,st.z,P,{r:.012}),t(.004,.36,.48,a.blackPlastic,st.x-.222,st.y+.33,st.z,P,{cast:!1});for(let L=0;L<9;L++)t(.008,.008,.46,a.galv,st.x-.226,st.y+.17+L*.04,st.z,P,{cast:!1});$e.plane("hepa",.2,P,st.x-.228,st.y+.545,st.z,{rot:[0,-Math.PI/2,0]}),t(.012,.012,.004,a.led(9425830,2),st.x-.226,st.y+.545,st.z+.25,P,{cast:!1}),[[-.17,-.25],[.17,-.25],[-.17,.25],[.17,.25]].forEach(([L,ce])=>n(.03,.025,a.blackPlastic,st.x+L,st.y+.04,st.z+ce,P,{axis:"x",seg:12})),r([[st.x-.16,st.y+.66,st.z-.2],[st.x-.16,st.y+.72,st.z-.1],[st.x-.16,st.y+.72,st.z+.1],[st.x-.16,st.y+.66,st.z+.2]],.01,a.blackPlastic,P,{radial:6}),n(.11,.06,a.galv,st.x,st.y+.38,st.z+.33,P,{axis:"z",seg:20}),r([[st.x,st.y+.38,st.z+.36],[st.x,st.y+.37,Ie-.05],[st.x-.05,st.y+.3,Ie+.25],[st.x-.3,st.y+.11,1.6],[2,st.y+.1,2.2],[.9,st.y+.1,2.7]],.1,mt,P,{radial:14,density:10}),[[0,.16],[0,-.16]].forEach(([,L])=>t(.3,.05,.004,bt,st.x,st.y+.37+L,Ie+.004,P,{cast:!1})),[[.16],[-.16]].forEach(([L])=>t(.05,.3,.004,bt,st.x+L,st.y+.37,Ie+.004,P,{cast:!1})),u(P);let Rt=d(),Bt=d(Rt);Bt.position.set(4.3,Ut,-1.45),Bt.rotation.y=-1.25;let Rn=1.72,On=.17;[[-.21,1],[.21,1],[-.21,-1],[.21,-1]].forEach(([L,ce])=>t(.026,Rn/Math.cos(On),.07,a.yellowPlastic,L,Rn/2,ce*Math.tan(On)*Rn/2,Bt,{rot:[-ce*On,0,0]})),[.3,.6,.9,1.2,1.5].forEach(L=>t(.42,.022,.085,a.greyPlastic,0,L,Math.tan(On)*(Rn-L),Bt,{cast:!1})),[.5,1].forEach(L=>t(.4,.016,.016,a.greyPlastic,0,L,-Math.tan(On)*(Rn-L),Bt,{cast:!1})),t(.46,.05,.24,a.greyPlastic,0,Rn+.02,0,Bt,{r:.01});let Yn=si+.008;["s1","s2","s3"].forEach((L,ce)=>{let ke=3.62+ce*.17,ze=-1.62+ce%2*.02,tt=(ce-1)*.06;t(.13,.17,.012,a.glassClear,ke,ze,Yn,Rt,{rot:[0,0,tt],cast:!1}),t(.126,.012,.004,a.greyPlastic,ke,ze+.075,Yn+.007,Rt,{rot:[0,0,tt],cast:!1}),t(.05,.04,.006,[a.whitePlastic,a.greyPlastic,a.whitePlastic][ce],ke+.02,ze-.05,Yn+.001,Rt,{rot:[0,0,tt+.4],cast:!1}),$e.plane(L,.1,Rt,ke,ze+.02,Yn+.0075,{rot:[0,0,tt]}),t(.05,.016,.002,a.whitePlastic,ke,ze+.088,Yn+.009,Rt,{rot:[0,0,tt],cast:!1})}),$e.plane("lab",.24,Rt,3.85,-1.16,si+.002),[[-.11,.15],[.11,.15],[-.11,-.15],[.11,-.15]].forEach(([L,ce])=>t(.04,.016,.002,a.whitePlastic,3.85+L,-1.16+ce,si+.003,Rt,{rot:[0,0,.5*Math.sign(L*ce)],cast:!1})),$e.plane("asb",.36,Rt,3.8,-.8,si+.002),t(.06,.004,.06,a.greyPlastic,3.4,Ut+.004,-1,Rt,{cast:!1}),t(.11,.002,.04,a.whitePlastic,3.4,Ut+.006,-.95,Rt,{cast:!1}),n(.035,.003,a.greyPlastic,3.9,Gn-.002,-1.75,Rt,{seg:16,cast:!1}),t(.1,.002,.04,a.whitePlastic,3.93,Gn-.004,-1.71,Rt,{cast:!1}),u(Rt);let An=d(),ls=[],Ts=(L,ce,ke)=>{let ze=d(An);ze.position.set(L,Ut,ce),ze.rotation.y=ke,n(.2,.24,Ee,0,.235,0,ze,{axis:"z",seg:28,open:!0}),n(.17,.02,a.blackPlastic,0,.235,0,ze,{axis:"z",seg:24}),t(.25,.14,.24,Ee,.12,.09,0,ze,{r:.02}),t(.03,.12,.22,a.blackPlastic,.245,.09,0,ze,{cast:!1}),[-1,1].forEach(wt=>{[.06,.11,.165].forEach(kt=>i.place(new Fe(new Qi(kt,.004,4,28),a.galv),0,.235,wt*.122,ze,{cast:!1})),t(.34,.008,.006,a.galv,0,.235,wt*.122,ze,{cast:!1}),t(.008,.34,.006,a.galv,0,.235,wt*.122,ze,{cast:!1})}),t(.04,.03,.2,a.blackPlastic,-.13,.015,0,ze),t(.04,.03,.2,a.blackPlastic,.2,.015,0,ze),t(.18,.026,.03,a.yellowPlastic,-.04,.47,0,ze,{r:.01}),[-.11,.03].forEach(wt=>t(.02,.06,.02,a.yellowPlastic,wt,.44,0,ze)),r([[-.18,.15,-.05],[-.32,.03,-.1],[-.6,.006,-.3],[-1,.006,-.35]],.006,a.blackPlastic,ze,{radial:5,cast:!1});let tt=new yt;tt.position.set(0,.235,0),tt.userData.keep=!0,ze.add(tt);for(let wt=0;wt<10;wt++){let kt=wt/10*6.2832;t(.008,.06,.2,a.blackPlastic,Math.cos(kt)*.12,Math.sin(kt)*.12,0,tt,{rot:[0,0,kt+.5],cast:!1})}p(tt),i.bake(tt),ls.push(tt)};Ts(4.42,-2.25,-.55),Ts(4.45,-.5,-.5),Ts(4.42,1.25,-.6);let un=c(3.4,Ut,-.85);t(.42,.66,.4,a.enclosure,un.x,un.y+.42,un.z,An,{r:.02}),t(.43,.04,.41,a.blackPlastic,un.x,un.y+.09,un.z,An,{r:.01});for(let L=0;L<8;L++)t(.006,.012,.32,a.galv,un.x-.212,un.y+.22+L*.045,un.z,An,{cast:!1});t(.004,.36,.34,a.blackPlastic,un.x-.211,un.y+.38,un.z,An,{cast:!1}),$e.plane("rh",.12,An,un.x-.2115,un.y+.66,un.z+.05,{rot:[0,-Math.PI/2,0]}),[[-.15,-.16],[.15,-.16],[-.15,.16],[.15,.16]].forEach(([L,ce])=>n(.05,.03,a.blackPlastic,un.x+L,un.y+.05,un.z+ce,An,{axis:"z",seg:14})),r([[un.x+.19,un.y+.7,un.z-.16],[un.x+.22,un.y+.92,un.z-.16],[un.x+.22,un.y+.92,un.z+.16],[un.x+.19,un.y+.7,un.z+.16]],.011,a.galv,An,{radial:8,tension:.1}),r([[un.x+.1,un.y+.12,un.z-.2],[un.x-.05,un.y+.01,un.z-.4],[os.x+.25,Ut+.012,os.z+.1],[os.x+.02,Ut+.015,os.z+.01]],.008,a.blackPlastic,An,{radial:6,cast:!1});let Gr=1,qi=c(un.x+.123,un.y+.825,un.z-.06);t(.16,.024,.085,a.blackPlastic,qi.x,qi.y,qi.z,An,{r:.008,rot:[0,0,Gr]});let kr=$e.plane("mm",.072,An,qi.x-.84*.0125-.54*.02,qi.y+.54*.0125-.84*.02,qi.z);kr.rotation.order="ZYX",kr.rotation.set(-Math.PI/2,0,Gr);let Vr=si+.06+.406*5;[-.012,.012].forEach(L=>n(.0022,.035,a.galv,4.878,Ut+.32,Vr+L,An,{axis:"x",seg:6,cast:!1})),n(.013,.1,a.blackPlastic,4.81,Ut+.32,Vr,An,{axis:"x",seg:12}),r([[4.76,Ut+.32,Vr],[4.6,Ut+.12,Vr+.1],[4,Ut+.01,-.6],[3.62,Ut+.3,-.62],[qi.x-.03,qi.y-.05,qi.z+.05]],.004,a.blackPlastic,An,{radial:5,cast:!1}),u(An),p(h),i.bake(h);let aa={water:Gs.clone(),sewage:os.clone().add(c(0,.06,0)),fire:c(Un.x,Un.y+.2,Un.z),mould:c(Yi-.02,Ut+.32,-1.75),asb:c(3.85,-1.16,si+.01),rebuild:c(Yi-.02,Ut+.35,-.5)},ys={time:19.4,cut:0,ghost:0,ground:1,orbit:.012},V=[{...ys,radius:13,theta:-.95,phi:.82,fx:2.9,ty:-1.9,fz:-.4,lift:3,dof:0,orbit:.02},{...ys,radius:3.5,theta:-.95,phi:1.18,fx:2.95,ty:-2.45,fz:-1.5,dof:1.1},{...ys,radius:4.6,theta:.42,phi:1.68,fx:2.45,ty:2.15,fz:-3.45,dof:1,narrow:{radius:4.2,phi:1.6,ty:2.25}},{...ys,radius:5,theta:-1.12,phi:1.42,fx:3.6,ty:-1.7,fz:-.8,dof:1},{...ys,radius:3.7,theta:-.62,phi:1.6,fx:4,ty:-1.35,fz:-2.25,dof:1},{...ys,radius:3.9,theta:-1.1,phi:1.38,fx:3.95,ty:-2.2,fz:-.45,dof:1,narrow:{fx:3.75,fz:-.75}}],et=bi.x1-bi.x0,Mt=bi.z1-bi.z0,Tt="",Nt=0;return{name:"restore",group:l,anchors:aa,shots:V,hides:L=>[...L.sys.installation?L.sys.installation.meshes:[],...L.layers.basement.children.filter(ce=>ce.isMesh&&ce.material===e.cedar)],light(L){return L===0?{pos:[.2,-1.5,2.2],at:[4.4,-2,-.9],power:.75,fill:.6}:L===1?{pos:[4.2,-.7,-2.4],at:[2.6,-2.8,-1.2],power:.85}:L===2?{pos:[3.9,1.9,-.7],at:[2.4,1.8,-3.7],power:.32,fill:.3}:L===3?{pos:[.7,-.6,.5],at:[4.2,-2.3,-1.2],power:.9}:L===4?{pos:[1.7,-.75,.6],at:[4.3,-1.2,-2.3],power:.85}:{pos:[1.3,-.55,1.4],at:[4.3,-2.4,-.4],power:.9}},update({step:L,q:ce,t:ke,dt:ze,snap:tt,reduce:wt}){let kt=tt?1:1-Math.exp(-ze*4),Ot=wt?1.7:ke;fe.visible=L===2,lt.visible=L!==0,Pe.visible=L===0,Xt.visible=L===1,$.visible=L===2,P.visible=L===3,Rt.visible=L===4,An.visible=L===5&&ce<.56,_t.visible=L!==5,Oe.visible=L!==5,Ve.visible=L===5;let an=L===0?.03+.97*At(.04,.9,ce):L===3?1:0;z.visible=an>.01,z.scale.y=Math.max(.01,an),Nt=ot(Nt,L===3?.55+.45*At(0,.7,ce):0,kt),Ge.opacity=Nt,Ge.visible=Nt>.01;let xn=L===5?1:0,Wt=xn*At(.57,.73,ce),Gt=xn*At(.68,.86,ce),mi=xn*At(.74,.97,ce);if(S.visible=Wt>.005,S.scale.y=Math.max(.001,Wt),Y.color.copy(N).lerp(B,Gt),J.color.copy(Z).lerp(H,Gt),J.bumpScale=3*(1-Gt),le.visible=mi>.005,le.scale.x=Math.max(.001,mi),L===0){let Zt=At(0,.7,ce),ri=At(.6,.74,ce);ae.position.y=Ut+.009+.03*Zt;let qn=ot(.3,6.2,Math.pow(At(0,.85,ce),1.1));ue.alphaMap.repeat.set(.4*et/qn,.4*Mt/qn),Qe.offset.set(Ot*.035,Ot*.022),D.rotation.x=-ri*Math.PI/2;let nn=1-.96*ri,In=Math.round(Ze*(1-.85*ri)),gi=Gs.y-Ut-.03*Zt;at.material.opacity=.85-.35*ri;for(let Di=0;Di<Ze;Di++){let cs=Di*3;if(Di>=In){vt[cs+1]=-60;continue}let hr=Ft[Di*4]*nn,wi=Ft[Di*4+1]*nn,ss=Ft[Di*4+2]*nn,fr=(wi+Math.sqrt(wi*wi+19.6*gi))/9.8,Ys=(Ot/fr+Ft[Di*4+3])%1*fr;vt[cs]=Gs.x-.012+hr*Ys,vt[cs+1]=Gs.y+wi*Ys-4.9*Ys*Ys,vt[cs+2]=Gs.z+ss*Ys}at.geometry.attributes.position.needsUpdate=!0}if(L===1){let Zt=ot(.2,1.75,At(0,.85,ce));ie.alphaMap.repeat.set(.4*me/Zt,.4*me/Zt),ie.normalMap.offset.set(Ot*.02,-Ot*.03);let ri=wt?.5:.5+.5*Math.sin(Ot*3.1);Pn.scale.set(1+.12*ri,.14+.1*ri,1+.12*ri);for(let qn=0;qn<Tn;qn++){let nn=qn*3,In=(Ot*.45+C[qn*3+2])%1,gi=C[qn*3+1]*(.4+In)*Math.min(1,Zt/.6);_n[nn]=os.x+Math.cos(C[qn*3])*gi,_n[nn+1]=Ut+.016+.012*Math.sin(In*Math.PI),_n[nn+2]=os.z+Math.sin(C[qn*3])*gi}Jt.geometry.attributes.position.needsUpdate=!0}if(Wn.intensity=L===2?(2.6+(wt?0:.7*Math.sin(Ot*17)+.5*Math.sin(Ot*7.3)))*(.7+.3*Math.min(1,ce*3)):0,L===2){re.opacity=.18+.82*At(0,.85,ce),Jn.material.opacity=.55+(wt?0:.12*Math.sin(Ot*13)),Xn.forEach((nn,In)=>{let gi=wt?0:Math.sin(Ot*(11+In*4))*.5+Math.sin(Ot*(5.3+In*2.1))*.5;nn.scale.set([.3,.32][In]+.03*gi,[.42,.5][In]+.07*gi,1)});let Zt=(nn,In,gi,Di,cs)=>{let hr=nn.userData.pos;for(let wi=0;wi<nn.userData.n;wi++){let ss=wi*3,fr=In[wi*4]*6.2832,Ys=(Ot*cs*(.7+.6*In[wi*4+1])+In[wi*4+3])%1,ju=gi*Math.sqrt(In[wi*4+2])*(1-.65*Ys),Ko=Ys*Di*(.5+In[wi*4+1]),Jm=Math.sin(Ot*9+wi)*.014*Ys,eh=Un.x+Math.cos(fr)*ju+Jm,bc,th=Un.z+Math.sin(fr)*ju;if(Ko<Zu)bc=Un.y+Ko;else if(Ko<Zu+$u){let Pa=Ko-Zu;bc=Ca-.012-Pa*.04,th=Un.z+Math.sin(fr)*ju*.5+Pa,eh+=Math.cos(fr)*Pa*.9}else{let Pa=Ko-Zu-$u;bc=Ca-.02+Pa*.95,th=Un.z+$u+.02+Pa*.12,eh+=Math.cos(fr)*$u*.9+Math.sin(Ot*6+wi)*.03*Pa}hr[ss]=eh,hr[ss+1]=bc,hr[ss+2]=th}nn.geometry.attributes.position.needsUpdate=!0};Zt(Te,Vt,.08,.42,1.5),Zt(ht,wn,.11,.62,1.05);let ri=Ct.userData.pos;for(let nn=0;nn<Ct.userData.n;nn++){let In=nn*3,gi=(Ot*.11*(.7+.6*kn[nn*4])+kn[nn*4+3])%1,Di=(kn[nn*4+1]-.5)*.1,cs,hr,wi;if(gi<.15){let ss=gi/.15;cs=Un.x+Di,hr=Un.y+.15+ss*(Ca-Un.y-.2),wi=Un.z+Di*.5}else if(gi<.3){let ss=(gi-.15)/.15;cs=Un.x+Di*1.6,hr=Ca-.03,wi=Un.z+ss*.32}else if(gi<.55){let ss=(gi-.3)/.25;cs=Un.x+Di*2+ss*.1,hr=Ca+ss*(3.06-Ca),wi=Un.z+.32+ss*.12+Math.sin(ss*3+nn)*.04}else{let ss=(gi-.55)/.45,fr=(kn[nn*4+2]-.5)*2.6,Ys=ss*(.7+1.6*kn[nn*4]);cs=Un.x+.1+Math.sin(fr)*Ys,hr=3.07-ss*.08,wi=Un.z+.44+Math.cos(fr)*Ys}ri[In]=cs,ri[In+1]=hr,ri[In+2]=wi}Ct.geometry.attributes.position.needsUpdate=!0,Ct.material.opacity=.6+.4*Math.min(1,ce*2);let qn=dt.userData.pos;for(let nn=0;nn<dt.userData.n;nn++){let In=nn*3,gi=Ot*.05+Vn[nn*4+3]*6.28;qn[In]=1.45+Vn[nn*4]*3.2+Math.sin(gi)*.15,qn[In+1]=2.98+Vn[nn*4+1]*.16,qn[In+2]=-3.7+Vn[nn*4+2]*2.6+Math.cos(gi*.7)*.15}dt.geometry.attributes.position.needsUpdate=!0,dt.material.opacity=.15+.6*At(.05,.9,ce)}if(L===3){let Zt=wt?1:1+.06*Math.sin(Ot*.9);Ye.scale.z=Zt}if(L===5){wt||ls.forEach((nn,In)=>{nn.rotation.z-=ze*(34+In*3)});let Zt=Math.round(ot(28,11,At(.02,.48,ce))),ri=Zt>19?"#ff6b4f":Zt>15?"#f4bd7e":"#8fd3a6",qn=Zt<=12?"DRY":"% WOOD";Zt+qn!==Tt&&(Tt=Zt+qn,$e.set("mm",String(Zt),qn,{tone:ri}))}}}}var yn=-3.3,Fn=-2.6,ln=-2.8,jf=-2.51,Vs=-1.39,vs=Fn+.37,Ws=-4.9,ur=-.26,Ti=-2.75,Xs=-.6,m_=[0,1,12,18,22,25],g_=["INSTALL","MAINTAIN","UPGRADE","REPLACE","REMOVE","DEMOLISH"],x_=[[0,"INSTALLED \xB7 PERMIT"],[1,"FILTER \xB7 TUNE-UP"],[3,"FILTER \xB7 TUNE-UP"],[5,"DUCTS CLEANED"],[8,"IGNITER"],[11,"FILTER \xB7 TUNE-UP"],[12,"HEAT PUMP COIL"],[15,"TUNE-UP"],[18,"FILTER \xB7 TUNE-UP"],[20,"BLOWER MOTOR"],[24,"TUNE-UP"]],Qu=12;function qm({kit:i,tier:e}){let{box:t,cyl:n,tube:s,mats:r,atlas:a,V:o,std:c}=i,l=new yt,h=new yt;l.add(h);let d=c(9736070,.42,.3,{envMapIntensity:.8}),p=c(6717583,.42,.3,{envMapIntensity:.8}),u=c(10920599,.93,0),f=c(12886642,.82,0),x=c(9400648,.95,0),g=c(13884388,.88,0),m=c(5330782,.5,.45,{envMapIntensity:.8}),_=c(9316898,.45,.5),b=c(2897971,.6,.05),y=c(13210519,1,0),M=c(1313284,.4,0,{emissive:16747066,emissiveIntensity:1.4}),T=r.led(9425830,2),R=r.castIron,v=r.galv,A=r.pvc,I=r.copper,G=r.yellowPlastic,w="ui-monospace, Menlo, Consolas, monospace",U=C=>(Se,$,Ae)=>{Se.fillStyle=C?"#5f574b":"#a9a08a",Se.fillRect(0,0,$,Ae);for(let Te=0;Te<$;Te+=8)Se.fillStyle=C?"rgba(30,26,20,.55)":"rgba(120,110,90,.45)",Se.fillRect(Te,0,3,Ae);if(C)for(let Te=0;Te<90;Te++)Se.fillStyle=`rgba(40,34,26,${.15+Te%5*.06})`,Se.fillRect(Te*37%$,Te*53%Ae,6+Te%4*3,4+Te%3*3);Se.fillStyle=C?"#6e5a3c":"#9a7a4c",Se.fillRect(0,0,$,6),Se.fillRect(0,Ae-6,$,6),Se.fillRect(0,0,6,Ae),Se.fillRect($-6,0,6,Ae)},N=[{key:"afue",text:"96% AFUE",sub:"60 000 BTU/h \xB7 NAT GAS",w:256,h:72,size:32,color:"#1b1d21",bg:"#c9c3b2"},{key:"permit",w:128,h:220,draw(C,Se,$){C.fillStyle="#e08a2c",C.beginPath(),C.moveTo(0,22),C.lineTo(22,0),C.lineTo(Se-22,0),C.lineTo(Se,22),C.lineTo(Se,$),C.lineTo(0,$),C.fill(),C.fillStyle="#14161a",C.beginPath(),C.arc(Se/2,20,8,0,6.3),C.fill(),C.textAlign="center",C.textBaseline="middle",C.fillStyle="#1a1308",C.font=`700 22px ${w}`,C.fillText("GAS",Se/2,58),C.fillText("PERMIT",Se/2,84),C.font=`500 15px ${w}`,C.fillText("INSPECTED",Se/2,122),C.fillText("YEAR 0",Se/2,144),C.strokeStyle="#1a1308",C.lineWidth=2,C.strokeRect(14,166,Se-28,36),C.font=`700 18px ${w}`,C.fillText("PASS",Se/2,185)}},{key:"crate",text:"UPFLOW FURNACE",sub:"THIS SIDE UP \xB7 52 kg",w:320,h:72,size:30,color:"#2a1d0e"},{key:"svc",w:256,h:384,year:0,draw(C,Se,$,Ae){C.fillStyle="#d8d1bd",C.fillRect(0,0,Se,$),C.fillStyle="#24262b",C.fillRect(0,0,Se,44),C.fillStyle="#e9e3d3",C.textAlign="left",C.textBaseline="middle",C.font=`700 20px ${w}`,C.fillText("SERVICE RECORD",12,23),C.font=`500 15px ${w}`,x_.forEach(([Te,ht],gt)=>{let Ct=66+gt*28;C.strokeStyle="rgba(20,22,26,.3)",C.beginPath(),C.moveTo(10,Ct+13),C.lineTo(Se-10,Ct+13),C.stroke(),!(Te>Ae.year)&&(C.fillStyle="#2b3a66",C.fillText(("YR "+Te).padEnd(6)+ht,12,Ct))})}},{key:"cal",w:200,h:248,year:0,verb:"INSTALL",draw(C,Se,$,Ae){C.fillStyle="#cdc6b3",C.fillRect(0,0,Se,$),C.fillStyle="#a8322a",C.fillRect(0,0,Se,54),C.fillStyle="#1a1c20",[40,100,160].forEach(Te=>{C.beginPath(),C.arc(Te,8,6,0,6.3),C.fill()}),C.textAlign="center",C.textBaseline="middle",C.fillStyle="#f1e6d6",C.font=`700 24px ${w}`,C.fillText("YEAR",Se/2,33),C.fillStyle="#16181c",C.font=`700 112px ${w}`,C.fillText(String(Ae.year),Se/2,140),C.fillStyle="#5a3a1c",C.font=`700 22px ${w}`,C.fillText(Ae.verb,Se/2,222)}},{key:"tstat",w:192,h:192,draw(C,Se,$){C.fillStyle="#05070b",C.beginPath(),C.arc(Se/2,$/2,Se/2-2,0,6.3),C.fill(),C.strokeStyle="#8fd3a6",C.lineWidth=6,C.beginPath(),C.arc(Se/2,$/2,Se/2-14,2.3,2.3+3.4),C.stroke(),C.textAlign="center",C.textBaseline="middle",C.fillStyle="#eef2f0",C.font=`600 58px ${w}`,C.fillText("21\xB0",Se/2+4,$/2-6),C.fillStyle="#8fd3a6",C.font=`600 15px ${w}`,C.fillText("HEAT PUMP",Se/2,$/2+36),C.fillStyle="#8b93a1",C.font=`500 13px ${w}`,C.fillText("OUT \u221218\xB0",Se/2,$/2+58)}},{key:"coil",text:"HEAT PUMP COIL",sub:"CASED \xB7 3 TON",w:256,h:64,size:26,color:"#e3ddd0"},{key:"odu",text:"COLD CLIMATE",sub:"HEATS TO \u221230 \xB0C",w:256,h:64,size:26,color:"#e3ddd0"},{key:"tank",text:"189 L",sub:"GAS \xB7 40 000 BTU/h",w:192,h:96,size:42,color:"#e9e6de"},{key:"tkl",w:128,h:72,draw(C,Se,$){C.fillStyle="#05070b",C.fillRect(0,0,Se,$),C.textAlign="center",C.textBaseline="middle",C.fillStyle="#7fc4ff",C.font=`700 34px ${w}`,C.fillText("49\xB0C",Se/2,$/2-6),C.fillStyle="#8fd3a6",C.font=`500 12px ${w}`,C.fillText("ON DEMAND",Se/2,$-12)}},{key:"capped",w:112,h:176,draw(C,Se,$){C.fillStyle="#c23a2b",C.fillRect(0,14,Se,$-14),C.beginPath(),C.moveTo(0,14),C.lineTo(Se/2,0),C.lineTo(Se,14),C.fill(),C.fillStyle="#14161a",C.beginPath(),C.arc(Se/2,20,7,0,6.3),C.fill(),C.textAlign="center",C.textBaseline="middle",C.fillStyle="#f6eee4",C.font=`700 21px ${w}`,C.fillText("CAPPED",Se/2,64),C.font=`500 13px ${w}`,C.fillText("GAS OFF",Se/2,98),C.fillText("DO NOT",Se/2,124),C.fillText("OPEN",Se/2,142)}},{key:"suite",w:256,h:320,draw(C,Se,$){C.fillStyle="#c9c4b4",C.fillRect(0,0,Se,$),C.fillStyle="#1a1c20",C.textAlign="left",C.textBaseline="middle",C.font=`700 21px ${w}`,C.fillText("SECONDARY SUITE",12,24),C.font=`500 14px ${w}`,C.fillText("BUILDING PERMIT \xB7 YR 25",12,48),C.strokeStyle="#2b3a66",C.lineWidth=3,C.strokeRect(20,70,Se-40,170),C.beginPath(),C.moveTo(20,150),C.lineTo(130,150),C.moveTo(130,70),C.lineTo(130,240),C.stroke(),C.lineWidth=1.5,C.beginPath(),C.arc(130,196,34,Math.PI,Math.PI*1.5),C.stroke(),C.fillStyle="#2b3a66",C.font=`600 13px ${w}`,C.fillText("MECH",40,110),C.fillText("BEDROOM",148,110),C.fillText("BATH",40,196),C.fillText("LIVING",148,196),C.fillStyle="#1a1c20",C.font=`500 13px ${w}`,C.fillText("MECH ROOM: TYPE X",12,268),C.fillText("BOTH SIDES \xB7 30 MIN",12,290)}},{key:"disc",text:"HEAT PUMP",w:128,h:32,size:18,color:"#e3ddd0"},{key:"bin",text:"DRYWALL ONLY",w:192,h:40,size:22,color:"#e3ddd0"},{key:"rust",w:384,h:96,draw(C,Se,$){let Ae=11,Te=()=>(Ae=Ae*16807%2147483647)/2147483647;C.clearRect(0,0,Se,$);for(let ht=0;ht<Se;ht+=2){let gt=$*(.35+.5*Te()*Te())*(.6+.4*Math.sin(ht*.05)**2),Ct=C.createLinearGradient(0,$,0,$-gt);Ct.addColorStop(0,"rgba(96,40,14,0.95)"),Ct.addColorStop(.5,"rgba(122,56,20,0.75)"),Ct.addColorStop(1,"rgba(140,70,30,0)"),C.fillStyle=Ct,C.fillRect(ht,$-gt,2+Te()*2,gt)}}},{key:"pleatOld",w:96,h:128,draw:U(!0)},{key:"pleatNew",w:96,h:128,draw:U(!1)}],B=a(N,{width:1024,emissive:.22}),Z=o(0,1,0),H=o(0,0,0),Y=C=>{let Se=new Map;return C.traverse($=>{$.isMesh&&Se.set($.material,Se.get($.material)||!1||$.castShadow)}),C.traverse($=>{$.isMesh&&!$.userData.keep&&($.castShadow=Se.get($.material),$.receiveShadow=!0)}),i.bake(C)},q=(C,Se,$,Ae,Te={})=>{let ht=C.map(Vt=>o(Vt[0],Vt[1],Vt[2])),gt=Te.fit??1.35,Ct=Te.seg||10,dt=Te.cast!==!1,Lt=(Vt,wn,kn)=>{let Vn=Vt.distanceTo(wn);if(Vn<1e-4)return;let Jn=new Fe(new dn(kn,kn,Vn,Ct),$);Jn.position.copy(Vt).add(wn).multiplyScalar(.5),Jn.quaternion.setFromUnitVectors(Z,H.subVectors(wn,Vt).normalize()),Jn.castShadow=dt,Jn.receiveShadow=!0,Ae.add(Jn)};for(let Vt=0;Vt<ht.length-1;Vt++)if(Lt(ht[Vt],ht[Vt+1],Se),Vt>0&&gt){let wn=ht[Vt];[ht[Vt-1],ht[Vt+1]].forEach(kn=>{H.subVectors(kn,wn).normalize(),Lt(wn.clone(),wn.clone().addScaledVector(H,Se*2.2),Se*gt)})}},W={value:Array.from({length:Qu},()=>o(0,0,0))},J={value:Array.from({length:Qu},()=>o(0,0,0))},ge=C=>{C.uniforms.uPhP=W,C.uniforms.uPhS=J,C.vertexShader=C.vertexShader.replace("#include <common>",`#include <common>
attribute float aPh; uniform vec3 uPhP[${Qu}]; uniform vec3 uPhS[${Qu}];`).replace("#include <begin_vertex>",`#include <begin_vertex>
{ int pi = int(aPh + 0.5); transformed = uPhP[pi] + (transformed - uPhP[pi]) * uPhS[pi]; }`)},Ne=new Do({depthPacking:sf});Ne.onBeforeCompile=ge,Ne.customProgramCacheKey=()=>"cyclePhDepth";let qe=[],Je=(C,Se,$="s")=>{let Ae=new yt;Ae.name=C,l.add(Ae);let Te={g:Ae,i:qe.length,pivot:Se.clone(),mode:$,k:0};return W.value[Te.i].copy(Se),qe.push(Te),Te},mt=()=>{l.updateWorldMatrix(!0,!0);let C=new zt().copy(l.matrixWorld).invert(),Se=new zt,$=new Map;qe.forEach(Ae=>Ae.g.traverse(Te=>{if(!Te.isMesh)return;let ht=Te.material.uuid+"|"+Te.renderOrder,gt=$.get(ht);gt||$.set(ht,gt={mat:Te.material,cast:!1,ro:Te.renderOrder,geos:[]}),gt.cast=gt.cast||Te.castShadow;let Ct=Te.geometry.index?Te.geometry.toNonIndexed():Te.geometry.clone();Object.keys(Ct.attributes).forEach(dt=>{dt!=="position"&&dt!=="normal"&&dt!=="uv"&&Ct.deleteAttribute(dt)}),Ct.attributes.uv||Ct.setAttribute("uv",new $t(new Float32Array(Ct.attributes.position.count*2),2)),Ct.applyMatrix4(Se.multiplyMatrices(C,Te.matrixWorld)),Ct.setAttribute("aPh",new $t(new Float32Array(Ct.attributes.position.count).fill(Ae.i),1)),gt.geos.push(Ct)})),qe.forEach(Ae=>{Ae.g.traverse(Te=>{Te.isMesh&&Te.geometry.dispose()}),l.remove(Ae.g)}),$.forEach(Ae=>{let Te=Ss(Ae.geos);if(Ae.geos.forEach(Ct=>Ct.dispose()),!Te)return;let ht=Ae.mat.clone();ht.onBeforeCompile=ge,ht.customProgramCacheKey=()=>"cyclePh";let gt=new Fe(Te,ht);gt.castShadow=Ae.cast,gt.receiveShadow=!0,gt.renderOrder=Ae.ro,gt.frustumCulled=!1,Ae.cast&&(gt.customDepthMaterial=Ne),gt.userData.keep=!0,gt.userData.noAO=!0,l.add(gt)})},te=(C,Se,$)=>{C.k=ot(C.k,Se,$),Math.abs(C.k-Se)<.002&&(C.k=Se);let Ae=C.mode==="pop"?C.k>.5?1:0:At(0,1,C.k),Te=J.value[C.i];return C.mode==="y"?Te.set(1,Ae,1):C.mode==="xz"?Te.set(Ae,1,Ae):Te.setScalar(Ae),Ae<.001&&Te.setScalar(0),Ae};n(.085,.012,v,-2.7,ln+.004,-1.85,h,{seg:20,cast:!1}),n(.068,.014,R,-2.7,ln+.005,-1.85,h,{seg:20,cast:!1});for(let C=-2;C<=2;C++)t(.11-Math.abs(C)*.02,.006,.008,v,-2.7,ln+.012,-1.85+C*.022,h,{cast:!1});let Ee=-3.95,Ue=.9;t(.089,.038,Ue-Ee,f,Ws-.045,ln+.019,(Ee+Ue)/2,h,{cast:!1}),t(.089,.038,Ue-Ee,f,Ws-.045,ur-.019,(Ee+Ue)/2,h,{cast:!1});for(let C=Ee+.02;C<=Ue;C+=.406)t(.089,ur-ln-.076,.038,f,Ws-.045,(ln+ur)/2,Math.min(C,Ue-.02),h,{cast:!1});for(let C=0;C<6;C++)C===2||C===4||t(.08,ur-ln-.09,.36,y,Ws-.05,(ln+ur)/2,-1.48+.019+C*.406+.203,h,{cast:!1});let be=(C,Se,$)=>{t(.0127,ur-ln-.01,Se-C-.003,u,Ws+.0064,(ln+ur)/2,(C+Se)/2,$),t(.012,.08,Se-C,A,Ws+.019,ln+.04,(C+Se)/2,$,{cast:!1})};be(Ee,-2.7,h),be(-2.7,-1.48,h),t(.68,.05,.88,R,yn,ln+.025,Fn,h),t(.56,.24,.74,v,yn,(ln+.05+jf)/2,Fn,h),t(.52,.036,.012,R,yn,-2.56,vs-.004,h,{cast:!1}),t(.56,.012,.02,v,yn,-2.535,vs+.008,h,{cast:!1}),t(.3,-.25-(ln+.05),.6,v,yn-.43,(-.25+ln+.05)/2,Fn,h),[-2.2,-1.6,-1,-.5].forEach(C=>t(.304,.012,.604,v,yn-.43,C,Fn,h,{cast:!1})),t(.56,Vs-jf,.74,d,yn,(jf+Vs)/2,Fn,h,{r:.008}),t(.54,.52,.008,r.enclosure,yn,-1.67,vs+.004,h,{r:.003}),t(.54,.54,.008,r.enclosure,yn,-2.225,vs+.004,h,{r:.003});for(let C=0;C<6;C++)t(.3,.011,.006,R,yn-.05,-1.47-C*.026,vs+.008,h,{cast:!1});for(let C=0;C<4;C++)t(.3,.011,.006,R,yn-.05,-2.41-C*.022,vs+.008,h,{cast:!1});[-1.43,-1.99].forEach(C=>t(.09,.016,.01,R,yn+.17,C,vs+.011,h,{cast:!1})),t(.09,.06,.006,R,yn+.15,-1.72,vs+.009,h,{cast:!1});let Ge=t(.064,.036,.004,M,yn+.15,-1.72,vs+.012,l,{cast:!1,keep:!0}),re=t(.012,.012,.004,T,yn+.2,-2.08,vs+.01,l,{cast:!1,keep:!0});t(.04,.024,.004,R,yn+.2,-2.08,vs+.0085,h,{cast:!1}),B.plane("afue",.15,h,yn-.1,-1.78,vs+.0095),B.plane("svc",.13,h,yn+.2805,-1.95,Fn+.1).rotation.y=Math.PI/2,t(.004,.012,.03,R,yn+.283,-1.85,Fn+.1,h,{cast:!1}),s([[yn+.24,-2.45,vs+.01],[yn+.3,-2.62,vs+.08],[-2.85,ln+.02,-2.05],[-2.72,ln+.02,-1.88]],.008,A,h,{radial:6,cast:!1}),t(.56,-.25-Vs,.74,v,yn,(Vs-.25)/2,Fn,h),t(.57,.02,.75,v,yn,Vs+.01,Fn,h,{cast:!1});let Qe=yn+.28,ue=1.4;t(ue-Qe,.25,.5,v,(Qe+ue)/2,-.375,Fn,h);for(let C=Qe+1.2;C<ue;C+=1.5)t(.02,.258,.508,v,C,-.375,Fn,h,{cast:!1});for(let C=Qe+.6;C<ue;C+=1.2)[-1,1].forEach(Se=>t(.025,.27,.003,v,C,-.37,Fn+Se*.253,h,{cast:!1}));n(.065,.24,v,-1.5,-.375,Fn+.37,h,{axis:"z",seg:16}),n(.065,.42,v,-1.5,-.27,Fn+.49,h,{seg:16}),n(.07,.03,v,-1.5,-.375,Fn+.26,h,{axis:"z",seg:16,cast:!1});let me=o(-2.3,-.375,Fn+.25);t(.27,.12,.012,A,me.x,me.y,me.z+.006,h,{cast:!1});for(let C=0;C<7;C++)t(.012,.09,.006,R,me.x-.105+C*.035,me.y,me.z+.014,h,{cast:!1});t(.05,.12,.075,r.enclosure,yn+.305,-.85,Fn+.2,h),t(.006,.1,.06,A,yn+.333,-.85,Fn+.2,h,{cast:!1}),t(.01,.025,.012,R,yn+.338,-.85,Fn+.2,h,{cast:!1}),n(.008,.55,v,yn+.305,-.52,Fn+.2,h,{seg:6,cast:!1}),[-3.45,-3.22].forEach((C,Se)=>{q([[C,-1.62,Fn-.37],[C,-1.62,-3.2],[C,-.1+Se*.02,-3.2],[C,-.1+Se*.02,-3.85],[C,.14,-3.85],[C,.14,-4.4]],.04,A,h,{fit:1.2,seg:14}),n(.048,.06,A,C,.14,-4.42,h,{axis:"z",seg:14}),t(.025,.2,.003,v,C,-.2,-3.4,h,{cast:!1})}),q([[Ti,Xs,1.2],[Ti,Xs,-3.5]],.017,R,h,{fit:0}),[.6,-.6,-1.8,-3.1].forEach(C=>t(.02,-.25-Xs,.004,v,Ti,(Xs-.25)/2+.01,C,h,{cast:!1})),n(.024,.06,R,Ti,Xs,-3.5,h,{axis:"z",seg:10}),q([[Ti,Xs,-2.3],[Ti,-1.72,-2.3],[yn+.28,-1.72,-2.3]],.017,R,h),q([[Ti,-1.72,-2.3],[Ti,-1.95,-2.3]],.017,R,h,{fit:0}),n(.025,.04,R,Ti,-1.965,-2.3,h,{seg:10}),n(.024,.06,R,Ti,-1.72,-2.3,h,{seg:10}),n(.024,.06,R,Ti,Xs,-2.3,h,{axis:"z",seg:10}),n(.029,.035,R,Ti,-1.48,-2.3,h,{seg:8}),n(.026,.07,I,Ti,-1.25,-2.3,h,{seg:12}),t(.016,.1,.02,G,Ti+.035,-1.24,-2.3,h,{r:.004}),q([[Ti,Xs,-2.7],[-1.86,Xs,-2.7],[-1.86,-2,-2.7]],.017,R,h),n(.024,.06,R,Ti,Xs,-2.7,h,{axis:"z",seg:10}),n(.026,.07,I,-1.86,-1.85,-2.7,h,{seg:12});let ie=new yt;ie.position.set(-1.86,-1.85,-2.7),ie.userData.keep=!0,l.add(ie),t(.016,.1,.02,G,.035,.01,0,ie,{r:.004,cast:!1}),[-2.2,-2].forEach(C=>n(.011,.5,I,C,-.5,-3,h,{seg:8})),n(.085,.06,v,-2.1,-.28,-3,h,{seg:16}),t(.006,.006,.02,v,-1.15,-.93,-3.985,h,{cast:!1}),B.plane("cal",.2,h,-1.15,-1.07,-3.988);let xe=Je("crate",o(-2.2,ln,-1.05));{let C=xe.g,Se=-2.2,$=-1.05,Ae=ln;[-.4,0,.4].forEach(Te=>t(.9,.09,.07,f,Se,Ae+.045,$+Te,C));for(let Te=0;Te<6;Te++)t(.11,.02,.92,f,Se-.4+Te*.16,Ae+.1,$,C);[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([Te,ht])=>t(.12,.1,.12,A,Se+Te*.32,Ae+.16,$+ht*.33,C,{cast:!1})),t(.62,.1,.8,x,Se+.05,Ae+.27,$+.02,C,{rot:[0,.1,0]}),t(1.6,.008,.78,x,-3.75,Ae+.004,-.9,C,{rot:[0,.35,0],cast:!1}),t(.78,.008,.76,x,-3.2,Ae+.012,-.25,C,{rot:[0,-.2,0],cast:!1}),B.plane("crate",.34,C,-3.7,Ae+.0095,-.9).rotation.set(-Math.PI/2,0,.35),s([[Se-.5,Ae+.11,$+.2],[Se-.7,Ae+.01,$+.4],[Se-.95,Ae+.005,$+.3],[Se-1.1,Ae+.005,$+.6]],.006,R,C,{radial:4,cast:!1}),s([[Ti,-1.22,-2.28],[Ti+.01,-1.3,-2.25],[Ti+.01,-1.36,-2.26]],.0015,v,C,{radial:4,cast:!1}),B.plane("permit",.07,C,Ti+.01,-1.42,-2.255).rotation.set(.05,.3,.04)}let we=B.mat.clone();we.transparent=!1,we.depthWrite=!0,we.alphaTest=0;let $e=C=>{let Se=B.plane(C,.1),$=Se.geometry.attributes.uv,Ae=1,Te=0,ht=1,gt=0;for(let Vt=0;Vt<$.count;Vt++)Ae=Math.min(Ae,$.getX(Vt)),Te=Math.max(Te,$.getX(Vt)),ht=Math.min(ht,$.getY(Vt)),gt=Math.max(gt,$.getY(Vt));Se.geometry.dispose();let Ct=new En(.5,.025,.64),dt=Ct.attributes.uv;for(let Vt=0;Vt<dt.count;Vt++)dt.setXY(Vt,Ae+dt.getX(Vt)*(Te-Ae),ht+dt.getY(Vt)*(gt-ht));let Lt=new Fe(Ct,we);return Lt.castShadow=!0,Lt.receiveShadow=!0,Lt.userData.keep=!0,l.add(Lt),Lt},Xe=$e("pleatOld"),lt=$e("pleatNew"),ft=o(yn,-2.56,Fn+.05),j=o(yn,-2.56,Fn+.78),Dt=o(-3.88,ln+.322,-2.2),_t=Je("hose",me);{let C=_t.g,Se=[[me.x,me.y,me.z+.06],[me.x+.02,me.y-.12,me.z+.3],[-2.15,-1.5,-1.75],[-1.95,ln+.09,-1.3],[-1.55,ln+.08,-.7],[-.4,ln+.08,.1],[1.4,ln+.08,.7]],$=s(Se,.07,R,C,{radial:10,density:6,tension:.4}),Ae=$.userData.curve,Te=$.userData.len,ht=new Qi(.072,.007,4,12),gt=Math.round(Te/(e>=1?.07:.14));for(let Ct=2;Ct<gt;Ct++){let dt=Ct/gt,Lt=new Fe(ht,R);Lt.position.copy(Ae.getPointAt(dt)),Lt.quaternion.setFromUnitVectors(o(0,0,1),Ae.getTangentAt(dt)),C.add(Lt)}t(.3,.16,.08,R,me.x,me.y,me.z+.05,C,{r:.01}),n(.08,.06,v,me.x,me.y,me.z+.11,C,{axis:"z",seg:16})}let z=Je("hp",o(yn,Vs,Fn),"y"),S=-3,le=-4.85,he=.42,_e=new yt;_e.userData.keep=!0,_e.position.set(S-.1,he+.4,le-.17),l.add(_e);{let C=z.g;t(.6,.44,.78,d,yn,Vs+.22,Fn,C,{r:.008}),t(.52,.34,.006,d,yn,Vs+.22,Fn+.392,C,{r:.003});for(let $=0;$<4;$++)t(.012,.012,.008,v,yn+($%2?.24:-.24),Vs+($<2?.07:.37),Fn+.396,C,{cast:!1});B.plane("coil",.2,C,yn-.08,Vs+.3,Fn+.3965);let Se=($,Ae,Te)=>s([[yn+.3,Vs+.2+Te,Fn-.28],[-2.92,Vs+.2+Te,Fn-.28],[-2.9+Te,-.6,-2.9],[-2.9+Te,-.13,-2.95],[-2.9+Te,-.12,-3.85],[-2.9+Te,.12,-3.97],[-2.9+Te,.12,-4.35],[-2.85+Te,.32,-4.42],[-2.75+Te,.6,-4.5],[-2.55,.62+Te*2,-4.62]],$,Ae,C,{radial:8,density:10,tension:.2});Se(.021,R,0),Se(.006,I,.045),t(.02,.22,.003,v,-2.88,-.24,-3.4,C,{cast:!1}),t(.012,.11,.11,R,Ws+.019,-1.3,-2.05,C,{r:.004}),B.plane("tstat",.092,C,Ws+.0256,-1.3,-2.05).rotation.y=Math.PI/2,t(1.2,.08,.7,g,S,.04,le,C),[-.4,.4].forEach($=>{t(.05,he-.08,.05,v,S+$,(he+.08)/2,le+.12,C),t(.05,he-.08,.05,v,S+$,(he+.08)/2,le-.12,C),t(.06,.04,.5,v,S+$,he-.02,le,C)}),t(.96,.78,.38,m,S,he+.39,le,C,{r:.02}),n(.31,.02,R,S-.1,he+.4,le-.19,C,{axis:"z",seg:32,cast:!1}),[.12,.2,.28].forEach($=>{let Ae=new Fe(new Qi($,.005,4,32),v);Ae.position.set(S-.1,he+.4,le-.205),C.add(Ae)}),t(.62,.008,.008,v,S-.1,he+.4,le-.206,C,{cast:!1}),t(.008,.62,.008,v,S-.1,he+.4,le-.206,C,{cast:!1}),B.plane("odu",.2,C,S+.33,he+.62,le-.193).rotation.y=Math.PI,t(1,.07,.42,g,S,he+.815,le,C,{r:.03,cast:!1}),t(.7,.05,.3,g,S-.05,he+.86,le,C,{r:.022,cast:!1}),t(.22,.1,.9,g,S+.4,.13,le+.1,C,{r:.04,cast:!1}),t(.14,.2,.08,m,-2.25,.9,-4.29,C,{r:.01}),B.plane("disc",.1,C,-2.25,.93,-4.332).rotation.y=Math.PI,s([[-2.25,.8,-4.3],[-2.3,.6,-4.4],[-2.52,.55,-4.7]],.012,R,C,{radial:6,cast:!1});for(let $=0;$<3;$++){let Ae=t(.26,.09,.006,R,0,0,0,null,{cast:!1});Ae.geometry.translate(.14,0,0),Ae.rotation.set(0,.25,$*Math.PI*2/3),_e.add(Ae)}Y(_e)}let rt=o(-2.1,ln+.12,-2.64),it=new yt;it.rotation.order="YXZ",it.position.copy(rt),it.userData.keep=!0,l.add(it);let Oe;{let C=new yt,Se=-.36;it.add(C),n(.28,1.38,p,0,-.1+.69,Se,C,{seg:28}),n(.284,.04,R,0,-.1,Se,C,{seg:28}),n(.27,.03,p,0,1.295,Se,C,{seg:28,r2:.2}),t(.14,.08,.01,R,0,.08,-.083,C),t(.1,.12,.07,R,0,.26,-.05,C,{r:.008}),n(.02,.025,I,0,.29,-.012,C,{axis:"z",seg:12,cast:!1}),n(.012,.06,I,.12,.05,-.1,C,{axis:"z",seg:8,cast:!1}),n(.07,.08,v,0,1.35,Se,C,{seg:16,r2:.04}),n(.075,.1,v,0,1.43,Se,C,{seg:16}),[-.1,.1].forEach(Lt=>{n(.012,.08,v,Lt,1.33,Se,C,{seg:8}),n(.02,.03,I,Lt,1.37,Se,C,{seg:8})}),n(.018,.06,I,.3,1.1,Se,C,{axis:"x",seg:8}),t(.025,.04,.02,I,.31,1.13,Se,C,{cast:!1}),q([[.33,1.1,Se],[.34,1.1,Se],[.34,.04,Se]],.011,I,C,{seg:8}),B.plane("tank",.14,C,0,.78,-.076),Y(C),Oe=n(.2825,.3,B.mat,0,.06,Se,it,{seg:28,open:!0,keep:!0,cast:!1});let $=B.plane("rust",.1),Ae=$.geometry.attributes.uv,Te=1,ht=0,gt=1,Ct=0;for(let Lt=0;Lt<Ae.count;Lt++)Te=Math.min(Te,Ae.getX(Lt)),ht=Math.max(ht,Ae.getX(Lt)),gt=Math.min(gt,Ae.getY(Lt)),Ct=Math.max(Ct,Ae.getY(Lt));$.geometry.dispose();let dt=Oe.geometry.attributes.uv;for(let Lt=0;Lt<dt.count;Lt++)dt.setXY(Lt,Te+dt.getX(Lt)*(ht-Te),gt+dt.getY(Lt)*(Ct-gt))}let Ve=new yt;Ve.userData.keep=!0,it.add(Ve);let je=new yt;je.position.set(0,0,.02),je.userData.keep=!0;{let C=new yt;Ve.add(C),[-.17,.17].forEach($=>q([[$,-.1,-.05],[$,1.28,-.05],[$,1.4,.03]],.013,_,C,{seg:8,fit:0})),q([[-.17,1.4,.03],[.17,1.4,.03]],.013,_,C,{seg:8,fit:0}),[.35,.85].forEach($=>n(.009,.34,_,0,$,-.05,C,{axis:"x",seg:6})),t(.38,.01,.24,_,0,-.115,-.17,C),n(.012,.5,_,0,0,.02,C,{axis:"x",seg:8}),[-.17,.17].forEach($=>t(.02,.1,.08,_,$,-.04,-.02,C));let Se=new Fe(new Qi(.286,.006,4,40),G);Se.rotation.x=Math.PI/2,Se.position.set(0,.95,-.36),C.add(Se),t(.06,.04,.03,G,0,.95,-.065,C),Y(C),[-.25,.25].forEach($=>{n(.12,.06,R,$,0,0,je,{axis:"x",seg:20}),n(.055,.065,_,$,0,0,je,{axis:"x",seg:12}),t(.068,.02,.16,_,$,0,0,je,{cast:!1})}),Y(je),Ve.add(je)}let xt=Je("conn",o(-2.1,-1.5,-2.85),"pop");{let C=xt.g;q([[-1.86,-2,-2.7],[-1.86,-2.42,-2.7],[-2.05,-2.42,-2.7]],.017,R,C),q([[-1.86,-2.42,-2.7],[-1.86,-2.56,-2.7]],.017,R,C,{fit:0}),n(.024,.03,R,-1.86,-2.575,-2.7,C,{seg:10}),n(.024,.05,R,-1.86,-2,-2.7,C,{seg:10}),[-2.2,-2].forEach(Se=>n(.011,.5,I,Se,-1,-3,C,{seg:8})),n(.075,.96,v,-2.1,-.76,-3,C,{seg:16}),[-1,-.55].forEach(Se=>n(.079,.02,v,-2.1,Se,-3,C,{seg:16,cast:!1}))}let D=Je("caps",o(-2,-1.2,-2.85),"pop");{let C=D.g;[-2.2,-2].forEach(Se=>n(.014,.035,I,Se,-.765,-3,C,{seg:8})),n(.024,.035,R,-1.86,-1.905,-2.7,C,{seg:10}),s([[-1.86,-1.86,-2.68],[-1.85,-1.92,-2.66],[-1.85,-1.97,-2.665]],.0015,v,C,{radial:4,cast:!1}),B.plane("capped",.055,C,-1.85,-2.02,-2.66).rotation.set(0,.25,-.05),n(.08,.012,v,-2.1,-.315,-3,C,{seg:16,cast:!1})}let oe=Je("puddle",o(-1.95,ln+.003,-2.6),"xz");[[0,0,.42,.3],[.25,.18,.28,.2],[-.2,.22,.22,.18]].forEach(([C,Se,$,Ae])=>{n(1,.004,r.water,-1.95+C,ln+.003,-2.6+Se,oe.g,{seg:28,cast:!1}).scale.set($,1,Ae)});let fe=-1.72,Re=-1.1,We=-3.89,k=Je("tankless",o(fe,Re,We));{let C=k.g;t(.36,.56,.2,d,fe,Re,We,C,{r:.012}),t(.3,.46,.006,d,fe,Re,We+.1,C,{r:.003}),B.plane("tkl",.08,C,fe,Re+.12,We+.105),q([[fe+.06,Re+.28,We],[fe+.06,-.62,We],[fe+.06,-.62,-4.05]],.05,A,C,{fit:1.15,seg:16}),q([[Ti,Xs,-3.5],[Ti,Xs,-3.84],[-1.45,Xs,-3.84],[-1.45,-1.52,-3.84],[fe+.1,-1.52,-3.84],[fe+.1,Re-.28,-3.84]],.014,R,C,{seg:8}),n(.022,.06,I,-1.45,-1.25,-3.84,C,{seg:10}),t(.014,.08,.016,G,-1.42,-1.24,-3.84,C,{r:.003,cast:!1}),[[fe-.1,r.bluePlastic,-2.25],[fe-.02,r.redPlastic,-2.35]].forEach(([Se,$,Ae],Te)=>{q([[Se,Re-.28,-3.84],[Se,-1.6-Te*.06,-3.84],[Ae,-1.6-Te*.06,-3.84],[Ae,-.26,-3.84]],.011,I,C,{seg:8}),n(.017,.04,I,Se,-1.47,-3.84,C,{seg:8}),t(.05,.012,.012,$,Se+.02,-1.47,-3.815,C,{cast:!1})}),[-.45,-1.2].forEach(Se=>t(.03,.012,.03,I,-2.3,Se,-3.85,C,{cast:!1}))}let Le=Je("loose",o(Ws,-1.5,-.3),"pop");be(-1.48,-.29,Le.g),be(-.29,Ue,Le.g);let de=Je("demo",o(-3,ln,-.5),"y");{let C=de.g,Se=-1.05,$=Ws+.02,Ae=-1.45,Te=-2.45,ht=-1.6;t(Te-$,.038,.089,f,($+Te)/2,ln+.019,Se,C),t(Ae-ht,.038,.089,f,(ht+Ae)/2,ln+.019,Se,C),t(Ae-$,.038,.089,f,($+Ae)/2,ur-.019,Se,C);for(let dt=$+.02;dt<Ae;dt+=.406)dt>Te-.04&&dt<ht+.04||t(.038,ur-ln-.076,.089,f,dt,(ln+ur)/2,Se,C);[Te-.019,ht+.019].forEach(dt=>t(.038,ur-ln-.076,.089,f,dt,(ln+ur)/2,Se,C)),[Te+.019,ht-.019].forEach(dt=>t(.038,2.07,.089,f,dt,ln+1.035,Se,C)),t(ht-Te,.18,.089,f,(Te+ht)/2,ln+2.16,Se,C),B.plane("suite",.15,C,Te-.019,-1.2,Se+.046),[-.5,.5].forEach(dt=>t(1.1,.04,.08,f,-2.7,ln+.02,1+dt*1.8,C));for(let dt=0;dt<4;dt++)t(1.22,.0127,2.44,u,-2.7+dt%2*.02,ln+.047+dt*.0135,1+dt%3*.015,C,{rot:[0,(dt-1.5)*.012,0]});let gt=-4.35,Ct=1.5;t(.62,.88,.92,b,gt,ln+.5,Ct,C,{r:.02}),t(.66,.04,.96,b,gt,ln+.95,Ct,C,{r:.01}),[-.3,.3].forEach(dt=>n(.05,.04,R,gt+.2,ln+.05,Ct+dt,C,{axis:"x",seg:12})),[[0,.1,.4,.4],[-.1,-.15,-.3,.6],[.12,-.25,.2,-.5]].forEach(([dt,Lt,Vt,wn])=>t(.4,.0127,.5,u,gt+dt,ln+.95,Ct+Lt,C,{rot:[Vt,wn,.2]})),t(.3,.09,.6,y,gt-.05,ln+.98,Ct-.1,C,{rot:[.3,.2,-.25]}),B.plane("bin",.2,C,gt+.312,ln+.75,Ct).rotation.y=Math.PI/2;for(let dt=0;dt<7;dt++)t(.05+dt%3*.04,.0127,.04+dt%2*.05,u,Ws+.12+dt%3*.09,ln+.007,-1.3+dt*.3,C,{rot:[0,dt*.7,0],cast:!1})}Y(h),mt();let Be={install:o(yn,-1.65,vs+.02),maintain:o(yn+.1,-2.56,vs+.03),upgrade:o(Ws+.03,-1.3,-2.05),hpump:o(yn+.1,Vs+.22,Fn+.4),replace:o(fe,Re+.05,We+.11),remove:o(-2.1,-1.9,-2.6),demo:o(Ws-.04,-1.5,-.6)},Pe={time:19.4,cut:0,ghost:0,ground:1,lift:0,orbit:.012},ae=[{...Pe,radius:14,theta:.2,phi:.9,fx:-2.6,ty:-1.8,fz:-2.2,lift:3,dof:0,orbit:.02,narrow:{radius:12}},{...Pe,radius:3.5,theta:.5,phi:1.36,fx:-2.8,ty:-1.95,fz:-2.2,dof:1,narrow:{fx:-3.15}},{...Pe,radius:4.4,theta:1,phi:1.56,fx:-3.7,ty:-1.15,fz:-2.25,dof:.9},{...Pe,radius:4.8,theta:-.1,phi:1.36,fx:-1.85,ty:-1.8,fz:-3.2,dof:1},{...Pe,radius:3.8,theta:-.55,phi:1.36,fx:-2,ty:-1.85,fz:-1.3,dof:.8,narrow:{fx:-2.35,fz:-1.1}},{...Pe,radius:4.4,theta:.7,phi:1.3,fx:-3.4,ty:-1.95,fz:-.1,dof:.7,narrow:{fx:-3.9,ty:-1.55,fz:-.6}}],at=-1,Ze=0,vt=0,Ft=0,Xt=0,rn=0,Pn=0,Jt=o(-2,ln+.12,.35),Tn=rt.distanceTo(Jt),_n=o(0,0,0);return{name:"cycle",group:l,anchors:Be,shots:ae,hides:C=>[...C.sys.hvac?C.sys.hvac.meshes:[],...C.sys["water-heaters"]?C.sys["water-heaters"].meshes:[]],light(C){return C===0?{pos:[-4,2,0],at:[-2.8,-2.4,-2.4],power:1,fill:.3}:C===1?{pos:[-1.7,-.5,-.7],at:[-3.3,-2.3,-2.4],power:1,fill:.35}:C===2?{pos:[-1.6,-.45,-1.1],at:[-3.9,-1.4,-2.2],power:1,fill:.35}:C===3?{pos:[-2.5,-.45,-1],at:[-1.9,-1.9,-3.4],power:1,fill:.35}:C===4?{pos:[-3.6,-.45,.2],at:[-2,-2.2,-1.4],power:1,fill:.35}:{pos:[-1.5,-.5,1.6],at:[-4.2,-1.8,-.6],power:1,fill:.35}},update({step:C,q:Se,t:$,dt:Ae,snap:Te,reduce:ht}){let gt=Te?1:1-Math.exp(-Ae*4);Se=Yt(Se||0,0,1);let Ct=C===1?Math.round(1+11*Se):m_[C]??25;Ct!==at&&(at=Ct,B.set("cal",void 0,void 0,{year:Ct,verb:g_[C]||""}),B.set("svc",void 0,void 0,{year:Ct})),M.emissiveIntensity=ht?1.4:1.3+.3*Math.sin($*13.1)+.2*Math.sin($*7.7+1.3),T.emissiveIntensity=ht?1.8:Math.sin($*2.4)>-.2?2:.3;let dt=C===1?Se:C>1?1:0;Ze=Te?dt:ot(Ze,dt,1-Math.exp(-Ae*6));let Lt=At(.06,.28,Ze),Vt=At(.3,.46,Ze),wn=At(.5,.86,Ze),kn=At(.38,.48,Ze);Xe.visible=C<=1,Xe.position.lerpVectors(ft,j,Lt).lerp(Dt,Vt),Xe.rotation.set(-1.72*Vt,0,.06*Vt),lt.visible=kn>.001,lt.position.lerpVectors(j,ft,wn),lt.scale.setScalar(Math.max(.001,kn)),te(xe,C===0?1:0,gt),te(_t,C===1?1:0,gt);let Vn=te(z,C>=2?1:0,gt);_e.visible=Vn>.98,ht||(_e.rotation.z=$*6);let Jn=C>3||C===3&&Se>.6;te(xt,Jn?0:1,1),te(D,Jn?1:0,1),te(oe,C===3?.15+.85*At(0,.45,Se):0,gt),te(k,C>3||C===3&&Se>.45?1:0,gt),te(Le,C<5?1:0,1),te(de,C===5?1:0,gt),Pn=ot(Pn,Jn?1:0,gt),ie.rotation.z=-Pn*Math.PI/2,Oe.visible=C>=3;let Xn=C===4?Se:C>4?1:0;vt=ot(vt,At(0,.25,Xn)*.42,gt);let Wn=Ft;Ft=ot(Ft,At(.25,1,Xn),gt),rn+=(Ft-Wn)*Tn,Xt=ot(Xt,C===4?1:0,gt),it.visible=C<=4,it.position.lerpVectors(rt,Jt,Ft),it.rotation.set(vt,.08*Ft,0),Ve.visible=Xt>.02,Ve.scale.setScalar(Math.max(.001,At(0,1,Xt))),je.rotation.x=rn/.12,_n.set(0,.95,-.36),it.updateMatrix(),Be.remove.copy(_n.applyMatrix4(it.matrix))}}}function Zm({M:i,H:e,Ug:t,Wd:n,tier:s,reduce:r,glowTex:a}){let o=Lm({M:i,tier:s,reduce:r,glowTex:a,dotTex:jr("rgba(255,255,255,0.75)")}),c=new yt;c.name="sets";let l=B=>B.traverse(Z=>{Z.userData.noPick=!0}),h=Nm({kit:o});c.add(h.group),l(h.group);let d={};Object.entries({panel:Um,attic:Om,sewer:km,radon:Xm,restore:Ym,cycle:qm}).forEach(([B,Z])=>{typeof Z=="function"&&(d[B]=Z)});let p={},u=new Hl(16769725,0,18,.5,.8,1);u.castShadow=s>=1,u.shadow.mapSize.set(s>=2?2048:1024,s>=2?2048:1024),u.shadow.bias=-6e-4,u.shadow.normalBias=.006,u.shadow.radius=3,u.shadow.camera.near=.15,u.shadow.camera.far=16;let f=new ps(9414888,0,9,2);c.add(u,u.target,f);let x=new F(2,-.3,-2.5),g=new F(2.8,-1.2,-3.9),m=0,_=1,b=null,y=[],M=s>=2?150:s===1?90:0,T=M?o.particles(M,{size:.0075,color:16770756,gain:1.2,opacity:0}):null,R=new Float32Array(M*4);for(let B=0;B<M*4;B++)R[B]=Math.random();T&&(T.visible=!1,c.add(T));let v=new F,A=new F,I=new F;function G(B,Z){let H=m*Z*(r?.6:1);if(T.visible=H>.03,!T.visible)return;T.material.opacity=Math.min(.55,.5*H),v.copy(g).sub(x);let Y=v.length();v.multiplyScalar(1/Math.max(.001,Y)),A.set(0,1,0).cross(v),A.lengthSq()<.001&&A.set(1,0,0),A.normalize(),I.crossVectors(v,A);let q=T.userData.pos,W=T.userData.n,J=r?0:B;for(let ge=0;ge<W;ge++){let Ne=R[ge*4],qe=R[ge*4+1],Je=R[ge*4+2],mt=R[ge*4+3],te=(.3+.75*((Ne+J*(.004+.006*mt))%1))*Y,Ee=Math.sqrt(qe)*te*.3,Ue=Je*6.283+J*(.05+.1*mt)*(ge%2?1:-1),be=Math.cos(Ue)*Ee,Ge=Math.sin(Ue)*Ee,re=Math.sin(J*.4+Ne*40)*.01;q[ge*3]=x.x+v.x*te+A.x*be+I.x*Ge,q[ge*3+1]=x.y+v.y*te+A.y*be+I.y*Ge+re,q[ge*3+2]=x.z+v.z*te+A.z*be+I.z*Ge}T.geometry.attributes.position.needsUpdate=!0}function w(B){if(p[B]||!d[B])return p[B];let Z=d[B]({kit:o,M:i,H:e,Ug:t,Wd:n,tier:s,reduce:r});return Z.group.visible=!1,l(Z.group),c.add(Z.group),p[B]=Z,Z}function U(B,Z,H,Y,q,W=0){o.time.value=H,h.disc.rotation.y=H*1.4;let J=Z.zoom&&d[Z.zoom]?Z.zoom:null;J&&w(J);let ge=B.zk>.004?J||b:null;ge!==b&&(b&&p[b]&&(p[b].group.visible=!1),y.forEach(Je=>{Je.visible=!0}),y=[],b=ge,b&&(p[b].group.visible=!0,p[b].hides&&(y=(p[b].hides(e,t,n)||[]).filter(Je=>Je&&Je.visible),y.forEach(Je=>{Je.visible=!1}))));let Ne=q?1:1-Math.exp(-Y*3.2),qe=0;if(b){let Je=p[b];Je.update({step:Z.zs|0,p:Z.zp||0,q:Z.zq||0,k:B.zk,t:H,dt:Y,reduce:r,snap:q});let mt=Je.light?Je.light(Z.zs|0,Z.zq||0):null;if(mt){let te=m<.02?1:Ne;x.lerp(N.fromArray(mt.pos),te),g.lerp(N.fromArray(mt.at),te),qe=mt.power*B.zk,_=ot(_,mt.fill??1,Ne)}}m=ot(m,qe,Ne),u.position.copy(x),u.target.position.copy(g),u.intensity=10*m,u.visible=m>.01,f.position.copy(g).add(N.set(-1.2,.5,1.6)),f.intensity=1.4*m*_,f.visible=m>.01,T&&G(H,W)}let N=new F;return{root:c,kit:o,update:U,ensure:w,names:Object.keys(d),get shown(){return b},anchors(){return b?p[b].anchors:null},input(B,Z){let H=w(B);H&&H.input&&H.input(Z)},shots(B){let Z=w(B);return Z?Z.shots||[]:null},get:B=>w(B),prebuild(){let B=Object.keys(d).find(Z=>!p[Z]);return B?(w(B),!0):!1},lampPower:()=>m}}function $m(i,e){let t=new Go(128,{type:hi,generateMipmaps:!1}),n=new Uo(.04,40,t),s=new Ta(i),r=null;return{get texture(){return r?r.texture:null},capture(a){let o=e.environment;e.environment=null,n.position.copy(a),n.update(i,e),e.environment=o;let c=s.fromCubemap(t.texture);return r&&r.dispose(),r=c,r.texture},dispose(){t.dispose(),s.dispose(),r&&r.dispose()}}}function v_(){let i=performance.now(),e=[],t=$=>e.push([$,Math.round(performance.now()-i)]),n=document.getElementById("stage"),s=document.documentElement,r=()=>window.dispatchEvent(new Event("hause:stage-ready")),a=()=>{s.classList.add("no-webgl"),r()};if(!n)return a();let o=window.matchMedia("(prefers-reduced-motion: reduce)").matches,c=em(),l=navigator.hardwareConcurrency||4,h=typeof window.HAUSE_QUALITY=="number"?window.HAUSE_QUALITY:c?l>=6?1:0:l>=6?2:1;try{let $=document.createElement("canvas"),Ae=$.getContext("webgl2");if(!Ae)return a();let Te=Ae.getExtension("WEBGL_lose_context");Te&&Te.loseContext()}catch{return a()}let d;try{if(d=new Cu({canvas:n,antialias:h===0,powerPreference:"high-performance"}),!d.getContext())throw new Error("no gl")}catch{return a()}n.addEventListener("webglcontextlost",$=>{$.preventDefault(),qe=!1,s.classList.add("no-webgl")}),d.toneMapping=Ma,d.toneMappingExposure=1,d.shadowMap.enabled=!0,d.info.autoReset=!1,d.shadowMap.type=Ga;let p=new Ds(new F(1,0,0),1e3);d.clippingPlanes=[p],nm(d.capabilities.getMaxAnisotropy()),im(h);let u=new Fa;u.environmentIntensity=.6,u.fog=new vl(1317678,70,360);let f=new $i(30,1,.3,1400),x=.3,g=1,m=0,_=3;t("renderer");let b=xm(d,u);t("sky");let{M:y,T:M}=gm();t("materials+textures");let T=Vo(),R=pm(),v=Sm({M:y,T:M,markTex:R,glowTex:T});u.add(v.house),t("house");let A=Rm({M:y,T:M,glowTex:T,markTex:R,tier:h,reduce:o});u.add(A.world),t("world");let I=Am({house:v.house,reduce:o}),G=Pm({M:y,layers:v.layers,glowTex:T}),w=Im({scene:u,M:y,tier:h,reduce:o});Object.values(v.layers).forEach($=>{Dm($,v.edgeMat),kf($)}),kf(A.props);let U=Zm({M:y,H:v,Ug:w,Wd:A,tier:h,reduce:o,glowTex:T});v.house.add(U.root),t("systems+interior+underground+merge");let N=new Ol(10466518,1709842,.5),B=new No(16769728,3);B.castShadow=!0,B.shadow.mapSize.set(h>=2?2048:1024,h>=2?2048:1024),Object.assign(B.shadow.camera,{left:-26,right:26,top:26,bottom:-26,near:5,far:240}),B.shadow.autoUpdate=!1,B.shadow.bias=-3e-4,B.shadow.normalBias=.04,B.shadow.radius=h>=2?2.5:1.5,B.target.position.set(0,3,0);let Z=new No(9085656,.6);Z.position.copy(b.U.uMoonDir.value).multiplyScalar(60),u.add(N,B,B.target,Z);let H={explode:0,radius:36,theta:.55,phi:1.36,ty:4.2,tx:-6,time:19.4,marks:0,ground:1,orbit:.04,visible:1,ghost:0,cut:0,lift:0,thermal:0,netE:0,netW:0,netA:0,netR:0,lensY:0,fx:0,fz:0,beacons:0,section:0,cutX:.45,season:0,snowfall:1,smoke:1,melt:0,icicles:0,aurora:0,zk:0,dof:0},Y=Object.assign({level:null,focusSys:null,netFocus:null,ugFocus:null,interactive:!1,zoom:null,zs:0,zp:0,zq:0},H),q=["explode","radius","phi","ty","tx","time","marks","ground","visible","ghost","cut","lift","thermal","netE","netW","netA","netR","lensY","fx","fz","beacons","section","cutX","season","snowfall","smoke","melt","icicles","aurora","zk","dof"],W=0,J=1,ge=1,Ne=1,qe=!0,Je=0,mt=-9,te={set($){Object.assign(Y,$)},highlight($){Y.focusSys=$},selectLevel($){Y.level=$},levels:gc.map($=>$.key),onPick:null,onHoverLevel:null,onFrame:null,onThermal:null,roomsLit:0,get quality(){return h}};window.HAUSE_STAGE=te;let Ee=new Et(14256718),Ue=null;function be($){Ue=$,Object.keys(v.sys).forEach(Ae=>v.sys[Ae].mats.forEach(Te=>{Ae===$?(Te.emissive.copy(Ee),Te.emissiveIntensity=.9):(Te.emissive.copy(Te.userData.baseEmissive),Te.emissiveIntensity=1)}))}let Ge=new Set;v.house.traverse($=>{!$.isMesh||!$.material||(Array.isArray($.material)?$.material:[$.material]).forEach(Ae=>{Ae.userData&&(Ae.userData.shell||Ae.userData.wall)&&Ge.add(Ae)})});let re="",Qe=!1;v.edgeMat.visible=!1;function ue($,Ae){let Te=$.toFixed(3)+"|"+Ae.toFixed(3);if(Te===re)return;re=Te;let ht=$>.01||Ae>.01;Ge.forEach(gt=>{let Ct=gt.userData.pane,dt=gt.userData.shell?$*(Ct?.75:.9):0,Lt=gt.userData.wall?Ae*(Ct?.8:.9):0;ht!==Qe&&(gt.transparent=ht||!!gt.userData.alwaysTransparent,gt.needsUpdate=!0),gt.opacity=1-Math.max(dt,Lt),gt.depthWrite=Math.max(dt,Lt)<.4}),Qe=ht,v.edgeMat.opacity=Math.max($*.28,Ae*.16),v.edgeMat.visible=v.edgeMat.opacity>.01}let me=Cm({scene:u,M:y,skipParents:[...Object.values(I.groups),U.root],onChange:$=>{A.setThermal($),d.toneMapping=$?Us:Ma,te.onThermal&&te.onThermal($)}}),ie=new F;function xe($,Ae){return ie.copy(Ae),$.localToWorld(ie),ie.project(f),{x:(ie.x*.5+.5)*J,y:(-ie.y*.5+.5)*ge,behind:ie.z>1}}let we=($,Ae,Te)=>new F($,Ae,Te),$e=gc.map($=>({obj:v.layers[$.key],offset:we(ci/2+1.4,{roof:7.8,upper:4.9,main:1.8,basement:-1.2,below:-2.8}[$.key],fn/2)}));te.projectLevels=()=>$e.map($=>xe($.obj,$.offset)),te.projectAnchors=()=>{let $={};Object.keys(v.ANCHORS).forEach(Te=>{$[Te]=xe(v.house,v.ANCHORS[Te])}),Object.keys(w.ANCHORS).forEach(Te=>{$[Te]=xe(v.house,w.ANCHORS[Te])});let Ae=U.anchors();return Ae&&Object.keys(Ae).forEach(Te=>{$["z."+Te]=xe(v.house,Ae[Te])}),$},te.zoomSets=U.names,te.setLook=$=>{Object.assign(rn,$||{})},te.zoomShots=$=>U.shots($),te.zoomInput=($,Ae)=>U.input($,Ae),te.prebuildZoom=()=>U.prebuild();let Xe={x:0,y:0,nx:0,ny:0},lt=null,ft=new Gl,j=[];v.house.traverse($=>{!$.isMesh||$.isInstancedMesh||!$.visible||$.userData.noPick||($.geometry.computeBoundingSphere(),$.geometry.boundingSphere.radius>.3&&j.push($))});let Dt=$=>{for(;$&&!$.userData.level;)$=$.parent;return $?$.userData.level:null};te.pickAt=($,Ae)=>{ft.setFromCamera({x:$/J*2-1,y:-(Ae/ge)*2+1},f);let Te=ft.intersectObjects(j,!1)[0];return Te?{level:Dt(Te.object),sys:Te.object.userData.sys||null}:null},te.pickCount=()=>j.length,window.addEventListener("pointermove",$=>{Xe.nx=$.clientX/J*2-1,Xe.ny=$.clientY/ge*2-1,lt&&(Je=lt.theta0-($.clientX-lt.x)*.006)},{passive:!0}),n.addEventListener("pointerdown",$=>{Y.interactive&&(lt={x:$.clientX,theta0:Je,t:performance.now()})}),window.addEventListener("pointerup",$=>{if(!lt)return;let Ae=Math.abs($.clientX-lt.x)<6&&performance.now()-lt.t<400;if(lt=null,Ae&&Y.interactive){ft.setFromCamera({x:$.clientX/J*2-1,y:-($.clientY/ge)*2+1},f);let Te=ft.intersectObjects(j,!1)[0];Te&&te.onPick&&te.onPick(Dt(Te.object),Te.object.userData.sys||null)}}),n.addEventListener("pointermove",$=>{if(!Y.interactive||lt)return;ft.setFromCamera({x:$.clientX/J*2-1,y:-($.clientY/ge)*2+1},f);let Ae=ft.intersectObjects(j,!1)[0],Te=Ae?Dt(Ae.object):null;n.style.cursor=Te?"pointer":"grab",te.onHoverLevel&&te.onHoverLevel(Te)});let _t=null;function z(){_t&&_t.dispose(),_t=h>=1?Em(d,u,f,h,Math.round(J*Ne),Math.round(ge*Ne)):null}function S(){J=window.innerWidth,ge=window.innerHeight,Ne=Math.min(window.devicePixelRatio||1,h>=2?2:h===1?1.5:1.25)*g,d.setPixelRatio(Ne),d.setSize(J,ge,!1),f.aspect=J/ge,f.fov=J<700?44:30,f.updateProjectionMatrix(),_t&&_t.setSize(Math.round(J*Ne),Math.round(ge*Ne))}window.addEventListener("resize",S),S(),z();let le=new F;function he($,Ae){let Te=.5-.5*Math.cos(Ae*Math.PI*2),ht=ot(7.5,5,Te),gt=ot(18.3,21.9,Te),Ct=ot(24,62,Te),dt=Math.PI*($-ht)/(gt-ht),Lt=Ct*Math.sin(dt),Vt=Lt*Math.PI/180;return le.set(-Math.sin(dt)*Math.cos(Vt),Math.sin(Vt),Math.cos(dt)*Math.cos(Vt)).normalize(),Lt}let _e=[[0,[.62,.6,.55]],[.16,[.7,.7,.55]],[.3,[.8,1,.62]],[.5,[.74,.95,.55]],[.68,[1.05,.88,.5]],[.82,[1,.72,.45]],[1,[.62,.6,.55]]];function rt($,Ae){let Te=0;for(;Te<_e.length-2&&_e[Te+1][0]<=$;)Te++;let[ht,gt]=_e[Te],[Ct,dt]=_e[Te+1],Lt=($-ht)/(Ct-ht);Ae.setRGB(ot(gt[0],dt[0],Lt),ot(gt[1],dt[1],Lt),ot(gt[2],dt[2],Lt))}let it=new F,Oe=new F,Ve=new F,je=new F,xt=new F,D={ug:0,section:0,cutX:.45,ground:1,ghost:0,cut:0,snow:1,roofSnow:1,snowfall:1,rain:0,leaves:0,smoke:1,melt:0,icicles:0,grow:0,leafTint:new Et(.3,.5,.15),explode:0,lift:0,zk:0},oe=[[0,[.3,.3,.3]],[.22,[.62,.8,.28]],[.36,[.4,.62,.2]],[.55,[.3,.5,.15]],[.7,[.95,.7,.18]],[.82,[.9,.35,.1]],[1,[.5,.2,.08]]];function fe($,Ae){let Te=0;for(;Te<oe.length-2&&oe[Te+1][0]<=$;)Te++;let[ht,gt]=oe[Te],[Ct,dt]=oe[Te+1],Lt=($-ht)/(Ct-ht);Ae.setRGB(ot(gt[0],dt[0],Lt),ot(gt[1],dt[1],Lt),ot(gt[2],dt[2],Lt))}let Re=new Et(16777215),We=new Et,k=0,Le=30,de=h>=1?$m(d,u):null,Be=new F,Pe=0,ae=null,at="",Ze=0,vt=0,Ft="",Xt=9,rn={shadow:[.96,.99,1.05],high:[1.04,1,.95],sat:1.05};function Pn($,Ae){W+=$;let Te=Ae?1:1-Math.exp(-$*(o?30:4.2));q.forEach(ne=>{H[ne]=ot(H[ne],Y[ne],Te)}),H.theta=ot(H.theta,Y.theta+(o?0:Math.sin(W*.08)*Y.orbit)+Je,Te),gc.forEach(ne=>{let pe=v.layers[ne.key],He=ne.key==="roof"?18*Yt(H.lift,0,1):ne.key==="upper"?12*Yt(H.lift-1,0,1):ne.key==="main"?9*Yt(H.lift-2,0,1):0;pe.position.y=ot(pe.position.y,ne.dy*H.explode+He+(Y.level===ne.key?.9:0),Te)});let ht=(H.season%1+1)%1,gt=Math.max(1-At(.1,.3,ht),At(.84,1,ht)),Ct=Math.max(1-At(.06,.22,ht),At(.88,1,ht));D.ug=0,D.beacons=H.beacons,D.section=H.section,D.cutX=H.cutX,D.ground=H.ground,D.ghost=H.ghost,D.cut=H.cut,D.lift=H.lift,D.zk=H.zk,D.snow=gt,D.roofSnow=Ct,D.explode=H.explode,D.grow=At(.2,.34,ht)*(1-At(.78,.93,ht)),fe(ht,D.leafTint),D.rain=At(.2,.24,ht)*(1-At(.3,.34,ht))*(o?0:1),D.leaves=At(.72,.78,ht)*(1-At(.9,.95,ht))*(o?0:1),D.melt=Math.max(H.melt,1-Ct),D.icicles=Math.max(H.icicles,At(.03,.1,ht)*(1-At(.17,.26,ht))+At(.9,.97,ht)*.5),D.snowfall=H.snowfall*(o?0:1)*(ht<.05||ht>.93?1:0),D.smoke=H.smoke*(1-At(.12,.3,ht)+At(.8,.95,ht)),rt(ht,A.U.uTint.value);let dt=he(H.time,ht),Lt=At(-5,10,dt);b.update({elev:dt,daylight:Lt,sunDir:le,thermal:H.thermal,aurora:H.aurora*(1-Lt),cloud:ot(.38,.62,At(0,1,Math.abs(Math.sin(ht*Math.PI*2)))),snowy:gt>.5,voidK:Yt(1-H.ground,0,1)},W),b.follow(f.position),u.fog.color.copy(b.horizon);let Vt=1-At(0,28,dt);B.position.copy(le).multiplyScalar(110).add(B.target.position),B.color.setRGB(1,ot(.95,.62,Vt),ot(.88,.4,Vt)),B.intensity=3.6*At(-4,6,dt)*(1-H.thermal),N.color.copy(b.zenith).lerp(Re,.4),N.groundColor.setRGB(.1,.09,.08).lerp(We.setRGB(.55,.6,.72),gt*.8*(.25+.75*Lt)),N.intensity=(.5+.35*Lt+.25*H.cut)*(1-H.thermal),Z.intensity=.7*(1-Lt)*(1-H.thermal),u.environmentIntensity=.5+.4*Lt+.1*H.cut,d.toneMappingExposure=me.on?1:ot(1.2,.95,Lt),de&&ae&&u.environment===de.texture&&(u.environment=ae),(Ae||W-mt>.4)&&(b.refreshEnv(Ae),mt=W),ae=u.environment,Xt+=$;let wn=`${le.x.toFixed(3)},${le.y.toFixed(3)},${le.z.toFixed(3)},${H.explode.toFixed(2)},${H.lift.toFixed(2)},${H.cut.toFixed(2)},${H.ghost.toFixed(1)},${H.section.toFixed(2)},${H.cutX.toFixed(2)},${gt.toFixed(2)},${Y.level},${U.shown}`;(Ae||wn!==Ft||Xt>.3||H.zk>.02&&Pe<.9)&&(B.shadow.needsUpdate=!0,Ft=wn,Xt=0),ue(H.ghost*(1-Yt(H.explode*4,0,1)),H.cut),G.update(1-Lt,H.cut);let kn=v.update(D,Te,W,Lt,Ae?100:$);te.roomsLit=Math.round(Yt(kn,0,7)),v.extra.chimneyTop.getWorldPosition(je),A.update(D,W,$,Lt,it,je,Yt(kn/9,0,1));let Vn=Y.focusSys;Object.keys(v.sys).forEach(ne=>v.sys[ne].marks.forEach(pe=>{let He=Vn?ne===Vn?1:H.marks*.35:H.marks;pe.material.opacity=ot(pe.material.opacity,He,Te),pe.scale.setScalar(.95*(ne===Vn?1+Math.sin(W*4)*.12:1)*(1+H.explode*.25))})),Vn!==Ue&&be(Vn),I.update(H,Y.netFocus,W,$);let Jn=w.update(D,Y.ugFocus,W,$);p.constant=-Jn,me.set(Y.thermal>.5),me.time.value=W,U.update(H,Y,W,$,Ae,Pe),Xe.x=ot(Xe.x,Xe.nx,Te*.6),Xe.y=ot(Xe.y,Xe.ny,Te*.6);let Xn=H.theta+Xe.x*.08,Wn=Yt(H.phi+Xe.y*.04,.35-.27*H.zk,1.5+1.2*H.zk),P=J<700,se=Yt(H.radius*.012,.02,.3);Math.abs(se-x)>x*.02&&(x=se,f.near=se,f.updateProjectionMatrix()),it.set(H.fx,H.ty+(P?-1.2*Yt(H.radius/30,0,1):0),H.fz),Oe.set(Math.sin(Wn)*Math.sin(Xn),Math.cos(Wn),Math.sin(Wn)*Math.cos(Xn)).multiplyScalar(H.radius*(P?1.25:1)).add(it),f.position.copy(Oe),f.lookAt(it),f.updateMatrixWorld(),Ve.setFromMatrixColumn(f.matrixWorld,0),f.position.addScaledVector(Ve,P?0:H.tx),f.updateMatrixWorld(),xt.copy(it).applyMatrix4(f.matrixWorldInverse);let Ie=Math.max(.001,xt.length());Le=Ie,A.sight.value.set(xt.x/Ie,xt.y/Ie,xt.z/Ie,Ie);let Me=f.position,Ce=Me.y<6.2||Me.y<6.2+(5-Math.abs(Me.x))*.72,St=Math.abs(Me.x)<4.95&&Math.abs(Me.z)<3.95&&Me.y>-2.95&&Ce,It=H.cut<.05&&H.ghost<.05&&H.lift<.05&&H.explode<.05&&H.section<.05&&H.thermal<.05,ee=H.zk>.5&&St&&It?1:0;if(Pe=Ae?ee:ot(Pe,ee,1-Math.exp(-$*7)),A.world.visible=!(Pe>.98&&Me.y<.2),N.intensity*=1-.82*Pe,Z.intensity*=1-Pe,de){let ne=`${Y.zoom}:${Y.zs}`;ne!==at&&(at=ne,Ze=0,vt=0),Ze+=$,Pe>.9&&(Ae||vt===0&&Ze>.25||vt===1&&Ze>1.4)&&(Be.copy(it).lerp(Me,.4),de.capture(Be),vt=Ae?2:vt+1);let pe=Pe>.5&&de.texture;pe&&(u.environment=de.texture);let He=Yt(Math.abs(Pe-.5)*4-.4,0,1);u.environmentIntensity=(pe?1.15:u.environmentIntensity)*He}else u.environmentIntensity*=1-.7*Pe;Math.abs(H.lensY-k)>1e-4&&(k=H.lensY,Math.abs(k)<1e-4?f.clearViewOffset():f.setViewOffset(J,ge,0,-k*ge,J,ge)),n.style.opacity=H.visible.toFixed(3)}let Jt={n:0,sum:0,last:0},Tn=performance.now();function _n($){if(_t){let Ae=_t.gtao,Te=H.ghost>.05||H.cut>.05||me.on||H.explode>.05;Ae&&(Ae.enabled=!Te),_t.bloom&&(_t.bloom.strength=me.on?.9:(.3+.55*(1-Yt(le.y*4,0,1)))*(1-.45*H.zk)),_t.grade.uniforms.uSat.value=me.on?1:rn.sat,_t.grade.uniforms.uShadow.value.fromArray(me.on?[1,1,1]:rn.shadow),_t.grade.uniforms.uHigh.value.fromArray(me.on?[1,1,1]:rn.high),_t.grade.uniforms.uCool.value=me.on?0:rn.cool||0,_t.setDof(me.on?0:H.dof,Le,f.near,f.far),_t.render($,W)}else d.render(u,f)}function C($){let Ae=$-Jt.last;if(Jt.last=$,!(Ae>250||Ae<=0)&&(Jt.n++,Jt.n>40&&(Jt.sum+=Ae),Jt.n===130)){let Te=Jt.sum/90;if(Te>26&&h>1&&typeof window.HAUSE_QUALITY!="number")h--,z(),S(),B.shadow.mapSize.set(1024,1024),B.shadow.map&&B.shadow.map.dispose(),B.shadow.map=null;else if(typeof window.HAUSE_QUALITY!="number"){let ht=g;Te>21?(ht=Math.max(.6,g*.85),m=_,_=Math.min(32,_*2)):Te<17.6&&g<1&&(m>0?m--:ht=Math.min(1,g*1.12)),Math.abs(ht-g)>.01&&(g=ht,S())}Jt={n:0,sum:0,last:$}}}function Se($){if(!qe)return;let Ae=Math.min(($-Tn)/1e3,.05);Tn=$,d.info.reset(),Pn(Ae,!1),_n(Ae),C($),te.onFrame&&te.onFrame(),requestAnimationFrame(Se)}te.pause=()=>{qe=!1},te.resume=()=>{qe||(qe=!0,Tn=performance.now(),Jt.last=0,requestAnimationFrame(Se))},te.settle=()=>{d.info.reset(),Pn(.016,!0),Pn(.016,!0),_n(.016),te.onFrame&&te.onFrame()},window.HAUSE_DEBUG&&(te.debug={scene:u,camera:f,renderer:d,S:H,target:Y,H:v,Wd:A,sky:b,sun:B,hemi:N,moon:Z,Sets:U,get post(){return _t}}),te.info=()=>({tier:h,calls:d.info.render.calls,triangles:d.info.render.triangles,pixelRatio:Ne,indoor:+Pe.toFixed(2),worldDrawn:A.world.visible,buildMs:te.buildMs}),t("pre-first-render"),te.settle(),t("first-render"),te.laps=e,requestAnimationFrame($=>{Tn=$,requestAnimationFrame(Se)}),te.buildMs=Math.round(performance.now()-i),s.classList.add("has-webgl"),r()}v_();})();
