/* HAUSE 3D stage. Built from hause/src/stage with esbuild + three.js. Do not edit by hand. */
(()=>{var Hd=0,Wh=1,zd=2;var za=1,Gd=2,No=3,ya=0,es=1,oi=2,Ai=0,_a=1,zn=2,Xh=3,Yh=4,O0=5;var Qs=100,kd=101,Vd=102,Wd=103,Xd=104,Ga=200,Yd=201,qd=202,Zd=203,qh=204,Zh=205,zl=206,$d=207,Gl=208,Jd=209,Kd=210,Qd=211,jd=212,ep=213,tp=214,s0=0,r0=1,a0=2,go=3,o0=4,l0=5,c0=6,u0=7,$h=0,np=1,ip=2,Us=0,kl=1,Vl=2,Wl=3,Ma=4,Xl=5,Yl=6,ql=7;var Jh=300,Ea=301,ka=302,B0=303,H0=304,Zl=306,Zn=1e3,ws=1001,h0=1002,Ri=1003,sp=1004;var $l=1005;var Li=1006,z0=1007;var Ur=1008;var zi=1009,Kh=1010,Qh=1011,Uo=1012,G0=1013,xr=1014,js=1015,yi=1016,k0=1017,V0=1018,Sa=1020,jh=35902,ef=35899,tf=1021,nf=1022,rs=1023,Cr=1026,Fr=1027,W0=1028,X0=1029,ba=1030,Y0=1031;var q0=1033,Jl=33776,Kl=33777,Ql=33778,jl=33779,Z0=35840,$0=35841,J0=35842,K0=35843,Q0=36196,j0=37492,eu=37496,tu=37488,nu=37489,ec=37490,iu=37491,su=37808,ru=37809,au=37810,ou=37811,lu=37812,cu=37813,uu=37814,hu=37815,fu=37816,du=37817,pu=37818,mu=37819,gu=37820,xu=37821,vu=36492,yu=36494,_u=36495,Mu=36283,Eu=36284,tc=36285,Su=36286;var cl=2300,f0=2301,t0=2302,Ph=2303,Ih=2400,Dh=2401,Lh=2402;var rp=3200,sf=3201;var nc=0,ap=1,vr="",yn="srgb",ul="srgb-linear",hl="linear",Ln="srgb";var n0=7680;var op=519,lp=512,cp=513,up=514,bu=515,hp=516,fp=517,Tu=518,dp=519,rf=35044;var af="300 es",gr=2e3,xo=2001;function Jm(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Km(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function fl(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function pp(){let i=fl("canvas");return i.style.display="block",i}var ed={},vo=null;function dl(...i){let e="THREE."+i.shift();vo?vo("log",e,...i):console.log(e,...i)}function mp(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Qt(...i){i=mp(i);let e="THREE."+i.shift();if(vo)vo("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function en(...i){i=mp(i);let e="THREE."+i.shift();if(vo)vo("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Na(...i){let e=i.join(" ");e in ed||(ed[e]=!0,Qt(...i))}function gp(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var xp={[s0]:r0,[a0]:c0,[o0]:u0,[go]:l0,[r0]:s0,[c0]:a0,[u0]:o0,[l0]:go},Pr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},us=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var i0=Math.PI/180,pl=180/Math.PI;function $r(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(us[i&255]+us[i>>8&255]+us[i>>16&255]+us[i>>24&255]+"-"+us[e&255]+us[e>>8&255]+"-"+us[e>>16&15|64]+us[e>>24&255]+"-"+us[t&63|128]+us[t>>8&255]+"-"+us[t>>16&255]+us[t>>24&255]+us[n&255]+us[n>>8&255]+us[n>>16&255]+us[n>>24&255]).toLowerCase()}function En(i,e,t){return Math.max(e,Math.min(t,i))}function Qm(i,e){return(i%e+e)%e}function nh(i,e,t){return(1-t)*i+t*e}function wr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Yn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var ff=class ff{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=En(this.x,e.x,t.x),this.y=En(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=En(this.x,e,t),this.y=En(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(En(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(En(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ff.prototype.isVector2=!0;var tt=ff,Bn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],d=n[s+3],p=r[a+0],u=r[a+1],f=r[a+2],x=r[a+3];if(d!==x||c!==p||l!==u||h!==f){let g=c*p+l*u+h*f+d*x;g<0&&(p=-p,u=-u,f=-f,x=-x,g=-g);let m=1-o;if(g<.9995){let M=Math.acos(g),b=Math.sin(M);m=Math.sin(m*M)/b,o=Math.sin(o*M)/b,c=c*m+p*o,l=l*m+u*o,h=h*m+f*o,d=d*m+x*o}else{c=c*m+p*o,l=l*m+u*o,h=h*m+f*o,d=d*m+x*o;let M=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=M,l*=M,h*=M,d*=M}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],d=r[a],p=r[a+1],u=r[a+2],f=r[a+3];return e[t]=o*f+h*d+c*u-l*p,e[t+1]=c*f+h*p+l*d-o*u,e[t+2]=l*f+h*u+o*p-c*d,e[t+3]=h*f-o*d-c*p-l*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),d=o(r/2),p=c(n/2),u=c(s/2),f=c(r/2);switch(a){case"XYZ":this._x=p*h*d+l*u*f,this._y=l*u*d-p*h*f,this._z=l*h*f+p*u*d,this._w=l*h*d-p*u*f;break;case"YXZ":this._x=p*h*d+l*u*f,this._y=l*u*d-p*h*f,this._z=l*h*f-p*u*d,this._w=l*h*d+p*u*f;break;case"ZXY":this._x=p*h*d-l*u*f,this._y=l*u*d+p*h*f,this._z=l*h*f+p*u*d,this._w=l*h*d-p*u*f;break;case"ZYX":this._x=p*h*d-l*u*f,this._y=l*u*d+p*h*f,this._z=l*h*f-p*u*d,this._w=l*h*d+p*u*f;break;case"YZX":this._x=p*h*d+l*u*f,this._y=l*u*d+p*h*f,this._z=l*h*f-p*u*d,this._w=l*h*d-p*u*f;break;case"XZY":this._x=p*h*d-l*u*f,this._y=l*u*d-p*h*f,this._z=l*h*f+p*u*d,this._w=l*h*d+p*u*f;break;default:Qt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],d=t[10],p=n+o+d;if(p>0){let u=.5/Math.sqrt(p+1);this._w=.25/u,this._x=(h-c)*u,this._y=(r-l)*u,this._z=(a-s)*u}else if(n>o&&n>d){let u=2*Math.sqrt(1+n-o-d);this._w=(h-c)/u,this._x=.25*u,this._y=(s+a)/u,this._z=(r+l)/u}else if(o>d){let u=2*Math.sqrt(1+o-n-d);this._w=(r-l)/u,this._x=(s+a)/u,this._y=.25*u,this._z=(c+h)/u}else{let u=2*Math.sqrt(1+d-n-o);this._w=(a-s)/u,this._x=(r+l)/u,this._y=(c+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(En(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},df=class df{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(td.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(td.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),h=2*(o*t-r*s),d=2*(r*n-a*t);return this.x=t+c*l+a*d-o*h,this.y=n+c*h+o*l-r*d,this.z=s+c*d+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=En(this.x,e.x,t.x),this.y=En(this.y,e.y,t.y),this.z=En(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=En(this.x,e,t),this.y=En(this.y,e,t),this.z=En(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(En(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ih.copy(this).projectOnVector(e),this.sub(ih)}reflect(e){return this.sub(ih.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(En(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};df.prototype.isVector3=!0;var F=df,ih=new F,td=new Bn,pf=class pf{constructor(e,t,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],p=n[2],u=n[5],f=n[8],x=s[0],g=s[3],m=s[6],M=s[1],b=s[4],y=s[7],_=s[2],w=s[5],A=s[8];return r[0]=a*x+o*M+c*_,r[3]=a*g+o*b+c*w,r[6]=a*m+o*y+c*A,r[1]=l*x+h*M+d*_,r[4]=l*g+h*b+d*w,r[7]=l*m+h*y+d*A,r[2]=p*x+u*M+f*_,r[5]=p*g+u*b+f*w,r[8]=p*m+u*y+f*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=h*a-o*l,p=o*c-h*r,u=l*r-a*c,f=t*d+n*p+s*u;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/f;return e[0]=d*x,e[1]=(s*l-h*n)*x,e[2]=(o*n-s*a)*x,e[3]=p*x,e[4]=(h*t-s*c)*x,e[5]=(s*r-o*t)*x,e[6]=u*x,e[7]=(n*c-l*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return Na("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(sh.makeScale(e,t)),this}rotate(e){return Na("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(sh.makeRotation(-e)),this}translate(e,t){return Na("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(sh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};pf.prototype.isMatrix3=!0;var un=pf,sh=new un,nd=new un().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),id=new un().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function jm(){let i={enabled:!0,workingColorSpace:ul,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Ln&&(s.r=Jr(s.r),s.g=Jr(s.g),s.b=Jr(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ln&&(s.r=mo(s.r),s.g=mo(s.g),s.b=mo(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===vr?hl:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Na("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Na("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ul]:{primaries:e,whitePoint:n,transfer:hl,toXYZ:nd,fromXYZ:id,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:yn},outputColorSpaceConfig:{drawingBufferColorSpace:yn}},[yn]:{primaries:e,whitePoint:n,transfer:Ln,toXYZ:nd,fromXYZ:id,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:yn}}}),i}var wn=jm();function Jr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function mo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ja,d0=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ja===void 0&&(Ja=fl("canvas")),Ja.width=e.width,Ja.height=e.height;let s=Ja.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Ja}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=fl("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Jr(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Jr(t[n]/255)*255):t[n]=Jr(t[n]);return{data:t,width:e.width,height:e.height}}else return Qt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},e1=0,yo=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:e1++}),this.uuid=$r(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(rh(s[a].image)):r.push(rh(s[a]))}else r=rh(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function rh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?d0.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Qt("Texture: Unable to serialize Texture."),{})}var t1=0,ah=new F,Ms=class i extends Pr{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=ws,s=ws,r=Li,a=Ur,o=rs,c=zi,l=i.DEFAULT_ANISOTROPY,h=vr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:t1++}),this.uuid=$r(),this.name="",this.source=new yo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new un,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ah).x}get height(){return this.source.getSize(ah).y}get depth(){return this.source.getSize(ah).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Qt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Qt(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Jh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zn:e.x=e.x-Math.floor(e.x);break;case ws:e.x=e.x<0?0:1;break;case h0:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zn:e.y=e.y-Math.floor(e.y);break;case ws:e.y=e.y<0?0:1;break;case h0:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ms.DEFAULT_IMAGE=null;Ms.DEFAULT_MAPPING=Jh;Ms.DEFAULT_ANISOTROPY=1;var mf=class mf{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],d=c[8],p=c[1],u=c[5],f=c[9],x=c[2],g=c[6],m=c[10];if(Math.abs(h-p)<.01&&Math.abs(d-x)<.01&&Math.abs(f-g)<.01){if(Math.abs(h+p)<.1&&Math.abs(d+x)<.1&&Math.abs(f+g)<.1&&Math.abs(l+u+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(l+1)/2,y=(u+1)/2,_=(m+1)/2,w=(h+p)/4,A=(d+x)/4,v=(f+g)/4;return b>y&&b>_?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=w/n,r=A/n):y>_?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=w/s,r=v/s):_<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(_),n=A/r,s=v/r),this.set(n,s,r,t),this}let M=Math.sqrt((g-f)*(g-f)+(d-x)*(d-x)+(p-h)*(p-h));return Math.abs(M)<.001&&(M=1),this.x=(g-f)/M,this.y=(d-x)/M,this.z=(p-h)/M,this.w=Math.acos((l+u+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=En(this.x,e.x,t.x),this.y=En(this.y,e.y,t.y),this.z=En(this.z,e.z,t.z),this.w=En(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=En(this.x,e,t),this.y=En(this.y,e,t),this.z=En(this.z,e,t),this.w=En(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(En(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};mf.prototype.isVector4=!0;var ri=mf,p0=class extends Pr{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Li,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ri(0,0,e,t),this.scissorTest=!1,this.viewport=new ri(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new Ms(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Li,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new yo(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ai=class extends p0{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ml=class extends Ms{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ri,this.minFilter=Ri,this.wrapR=ws,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var m0=class extends Ms{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ri,this.minFilter=Ri,this.wrapR=ws,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var F0=class F0{constructor(e,t,n,s,r,a,o,c,l,h,d,p,u,f,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,h,d,p,u,f,x,g)}set(e,t,n,s,r,a,o,c,l,h,d,p,u,f,x,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=c,m[2]=l,m[6]=h,m[10]=d,m[14]=p,m[3]=u,m[7]=f,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new F0().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Ka.setFromMatrixColumn(e,0).length(),r=1/Ka.setFromMatrixColumn(e,1).length(),a=1/Ka.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let p=a*h,u=a*d,f=o*h,x=o*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=u+f*l,t[5]=p-x*l,t[9]=-o*c,t[2]=x-p*l,t[6]=f+u*l,t[10]=a*c}else if(e.order==="YXZ"){let p=c*h,u=c*d,f=l*h,x=l*d;t[0]=p+x*o,t[4]=f*o-u,t[8]=a*l,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=u*o-f,t[6]=x+p*o,t[10]=a*c}else if(e.order==="ZXY"){let p=c*h,u=c*d,f=l*h,x=l*d;t[0]=p-x*o,t[4]=-a*d,t[8]=f+u*o,t[1]=u+f*o,t[5]=a*h,t[9]=x-p*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let p=a*h,u=a*d,f=o*h,x=o*d;t[0]=c*h,t[4]=f*l-u,t[8]=p*l+x,t[1]=c*d,t[5]=x*l+p,t[9]=u*l-f,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let p=a*c,u=a*l,f=o*c,x=o*l;t[0]=c*h,t[4]=x-p*d,t[8]=f*d+u,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=u*d+f,t[10]=p-x*d}else if(e.order==="XZY"){let p=a*c,u=a*l,f=o*c,x=o*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=p*d+x,t[5]=a*h,t[9]=u*d-f,t[2]=f*d-u,t[6]=o*h,t[10]=x*d+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(n1,e,i1)}lookAt(e,t,n){let s=this.elements;return Ps.subVectors(e,t),Ps.lengthSq()===0&&(Ps.z=1),Ps.normalize(),oa.crossVectors(n,Ps),oa.lengthSq()===0&&(Math.abs(n.z)===1?Ps.x+=1e-4:Ps.z+=1e-4,Ps.normalize(),oa.crossVectors(n,Ps)),oa.normalize(),Sc.crossVectors(Ps,oa),s[0]=oa.x,s[4]=Sc.x,s[8]=Ps.x,s[1]=oa.y,s[5]=Sc.y,s[9]=Ps.y,s[2]=oa.z,s[6]=Sc.z,s[10]=Ps.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],p=n[9],u=n[13],f=n[2],x=n[6],g=n[10],m=n[14],M=n[3],b=n[7],y=n[11],_=n[15],w=s[0],A=s[4],v=s[8],R=s[12],P=s[1],B=s[5],T=s[9],U=s[13],I=s[2],G=s[6],j=s[10],q=s[14],Y=s[3],V=s[7],W=s[11],Q=s[15];return r[0]=a*w+o*P+c*I+l*Y,r[4]=a*A+o*B+c*G+l*V,r[8]=a*v+o*T+c*j+l*W,r[12]=a*R+o*U+c*q+l*Q,r[1]=h*w+d*P+p*I+u*Y,r[5]=h*A+d*B+p*G+u*V,r[9]=h*v+d*T+p*j+u*W,r[13]=h*R+d*U+p*q+u*Q,r[2]=f*w+x*P+g*I+m*Y,r[6]=f*A+x*B+g*G+m*V,r[10]=f*v+x*T+g*j+m*W,r[14]=f*R+x*U+g*q+m*Q,r[3]=M*w+b*P+y*I+_*Y,r[7]=M*A+b*B+y*G+_*V,r[11]=M*v+b*T+y*j+_*W,r[15]=M*R+b*U+y*q+_*Q,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],d=e[6],p=e[10],u=e[14],f=e[3],x=e[7],g=e[11],m=e[15],M=c*u-l*p,b=o*u-l*d,y=o*p-c*d,_=a*u-l*h,w=a*p-c*h,A=a*d-o*h;return t*(x*M-g*b+m*y)-n*(f*M-g*_+m*w)+s*(f*b-x*_+m*A)-r*(f*y-x*w+g*A)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],h=e[10];return t*(a*h-o*l)-n*(r*h-o*c)+s*(r*l-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=e[9],p=e[10],u=e[11],f=e[12],x=e[13],g=e[14],m=e[15],M=t*o-n*a,b=t*c-s*a,y=t*l-r*a,_=n*c-s*o,w=n*l-r*o,A=s*l-r*c,v=h*x-d*f,R=h*g-p*f,P=h*m-u*f,B=d*g-p*x,T=d*m-u*x,U=p*m-u*g,I=M*U-b*T+y*B+_*P-w*R+A*v;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let G=1/I;return e[0]=(o*U-c*T+l*B)*G,e[1]=(s*T-n*U-r*B)*G,e[2]=(x*A-g*w+m*_)*G,e[3]=(p*w-d*A-u*_)*G,e[4]=(c*P-a*U-l*R)*G,e[5]=(t*U-s*P+r*R)*G,e[6]=(g*y-f*A-m*b)*G,e[7]=(h*A-p*y+u*b)*G,e[8]=(a*T-o*P+l*v)*G,e[9]=(n*P-t*T-r*v)*G,e[10]=(f*w-x*y+m*M)*G,e[11]=(d*y-h*w-u*M)*G,e[12]=(o*R-a*B-c*v)*G,e[13]=(t*B-n*R+s*v)*G,e[14]=(x*b-f*_-g*M)*G,e[15]=(h*_-d*b+p*M)*G,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,d=o+o,p=r*l,u=r*h,f=r*d,x=a*h,g=a*d,m=o*d,M=c*l,b=c*h,y=c*d,_=n.x,w=n.y,A=n.z;return s[0]=(1-(x+m))*_,s[1]=(u+y)*_,s[2]=(f-b)*_,s[3]=0,s[4]=(u-y)*w,s[5]=(1-(p+m))*w,s[6]=(g+M)*w,s[7]=0,s[8]=(f+b)*A,s[9]=(g-M)*A,s[10]=(1-(p+x))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Ka.set(s[0],s[1],s[2]).length(),o=Ka.set(s[4],s[5],s[6]).length(),c=Ka.set(s[8],s[9],s[10]).length();r<0&&(a=-a),dr.copy(this);let l=1/a,h=1/o,d=1/c;return dr.elements[0]*=l,dr.elements[1]*=l,dr.elements[2]*=l,dr.elements[4]*=h,dr.elements[5]*=h,dr.elements[6]*=h,dr.elements[8]*=d,dr.elements[9]*=d,dr.elements[10]*=d,t.setFromRotationMatrix(dr),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,s,r,a,o=gr,c=!1){let l=this.elements,h=2*r/(t-e),d=2*r/(n-s),p=(t+e)/(t-e),u=(n+s)/(n-s),f,x;if(c)f=r/(a-r),x=a*r/(a-r);else if(o===gr)f=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===xo)f=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=d,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=gr,c=!1){let l=this.elements,h=2/(t-e),d=2/(n-s),p=-(t+e)/(t-e),u=-(n+s)/(n-s),f,x;if(c)f=1/(a-r),x=a/(a-r);else if(o===gr)f=-2/(a-r),x=-(a+r)/(a-r);else if(o===xo)f=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=p,l[1]=0,l[5]=d,l[9]=0,l[13]=u,l[2]=0,l[6]=0,l[10]=f,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};F0.prototype.isMatrix4=!0;var zt=F0,Ka=new F,dr=new zt,n1=new F(0,0,0),i1=new F(1,1,1),oa=new F,Sc=new F,Ps=new F,sd=new zt,rd=new Bn,Ni=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],d=s[2],p=s[6],u=s[10];switch(t){case"XYZ":this._y=Math.asin(En(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-En(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(En(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-En(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,u),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(En(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-En(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:Qt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return sd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(sd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return rd.setFromEuler(this),this.setFromQuaternion(rd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ni.DEFAULT_ORDER="XYZ";var _o=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},s1=0,ad=new F,Qa=new Bn,Wr=new zt,bc=new F,Jo=new F,r1=new F,a1=new Bn,od=new F(1,0,0),ld=new F(0,1,0),cd=new F(0,0,1),ud={type:"added"},o1={type:"removed"},ja={type:"childadded",child:null},oh={type:"childremoved",child:null},vi=class i extends Pr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:s1++}),this.uuid=$r(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new F,t=new Ni,n=new Bn,s=new F(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new zt},normalMatrix:{value:new un}}),this.matrix=new zt,this.matrixWorld=new zt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _o,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Qa.setFromAxisAngle(e,t),this.quaternion.multiply(Qa),this}rotateOnWorldAxis(e,t){return Qa.setFromAxisAngle(e,t),this.quaternion.premultiply(Qa),this}rotateX(e){return this.rotateOnAxis(od,e)}rotateY(e){return this.rotateOnAxis(ld,e)}rotateZ(e){return this.rotateOnAxis(cd,e)}translateOnAxis(e,t){return ad.copy(e).applyQuaternion(this.quaternion),this.position.add(ad.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(od,e)}translateY(e){return this.translateOnAxis(ld,e)}translateZ(e){return this.translateOnAxis(cd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?bc.copy(e):bc.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Jo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wr.lookAt(Jo,bc,this.up):Wr.lookAt(bc,Jo,this.up),this.quaternion.setFromRotationMatrix(Wr),s&&(Wr.extractRotation(s.matrixWorld),Qa.setFromRotationMatrix(Wr),this.quaternion.premultiply(Qa.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(en("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ud),ja.child=e,this.dispatchEvent(ja),ja.child=null):en("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(o1),oh.child=e,this.dispatchEvent(oh),oh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Wr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ud),ja.child=e,this.dispatchEvent(ja),ja.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jo,e,r1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jo,a1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),d=a(e.shapes),p=a(e.skeletons),u=a(e.animations),f=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),p.length>0&&(n.skeletons=p),u.length>0&&(n.animations=u),f.length>0&&(n.nodes=f)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};vi.DEFAULT_UP=new F(0,1,0);vi.DEFAULT_MATRIX_AUTO_UPDATE=!0;vi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var mt=class extends vi{constructor(){super(),this.isGroup=!0,this.type="Group"}},l1={type:"move"},Mo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,n),m=this._getHandJoint(l,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],p=h.position.distanceTo(d.position),u=.02,f=.005;l.inputState.pinching&&p>u+f?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&p<=u-f&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(l1)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new mt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},vp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},la={h:0,s:0,l:0},Tc={h:0,s:0,l:0};function lh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var xt=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wn.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=wn.workingColorSpace){return this.r=e,this.g=t,this.b=n,wn.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=wn.workingColorSpace){if(e=Qm(e,1),t=En(t,0,1),n=En(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=lh(a,r,e+1/3),this.g=lh(a,r,e),this.b=lh(a,r,e-1/3)}return wn.colorSpaceToWorking(this,s),this}setStyle(e,t=yn){function n(r){r!==void 0&&parseFloat(r)<1&&Qt("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Qt("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Qt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=yn){let n=vp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Qt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Jr(e.r),this.g=Jr(e.g),this.b=Jr(e.b),this}copyLinearToSRGB(e){return this.r=mo(e.r),this.g=mo(e.g),this.b=mo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yn){return wn.workingToColorSpace(hs.copy(this),e),Math.round(En(hs.r*255,0,255))*65536+Math.round(En(hs.g*255,0,255))*256+Math.round(En(hs.b*255,0,255))}getHexString(e=yn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=wn.workingColorSpace){wn.workingToColorSpace(hs.copy(this),t);let n=hs.r,s=hs.g,r=hs.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=wn.workingColorSpace){return wn.workingToColorSpace(hs.copy(this),t),e.r=hs.r,e.g=hs.g,e.b=hs.b,e}getStyle(e=yn){wn.workingToColorSpace(hs.copy(this),e);let t=hs.r,n=hs.g,s=hs.b;return e!==yn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(la),this.setHSL(la.h+e,la.s+t,la.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(la),e.getHSL(Tc);let n=nh(la.h,Tc.h,t),s=nh(la.s,Tc.s,t),r=nh(la.l,Tc.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},hs=new xt;xt.NAMES=vp;var gl=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new xt(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ua=class extends vi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ni,this.environmentIntensity=1,this.environmentRotation=new Ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},pr=new F,Xr=new F,ch=new F,Yr=new F,eo=new F,to=new F,hd=new F,uh=new F,hh=new F,fh=new F,dh=new ri,ph=new ri,mh=new ri,Rr=class i{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),pr.subVectors(e,t),s.cross(pr);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){pr.subVectors(s,t),Xr.subVectors(n,t),ch.subVectors(e,t);let a=pr.dot(pr),o=pr.dot(Xr),c=pr.dot(ch),l=Xr.dot(Xr),h=Xr.dot(ch),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;let p=1/d,u=(l*c-o*h)*p,f=(a*h-o*c)*p;return r.set(1-u-f,f,u)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Yr)===null?!1:Yr.x>=0&&Yr.y>=0&&Yr.x+Yr.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,Yr)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Yr.x),c.addScaledVector(a,Yr.y),c.addScaledVector(o,Yr.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return dh.setScalar(0),ph.setScalar(0),mh.setScalar(0),dh.fromBufferAttribute(e,t),ph.fromBufferAttribute(e,n),mh.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(dh,r.x),a.addScaledVector(ph,r.y),a.addScaledVector(mh,r.z),a}static isFrontFacing(e,t,n,s){return pr.subVectors(n,t),Xr.subVectors(e,t),pr.cross(Xr).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pr.subVectors(this.c,this.b),Xr.subVectors(this.a,this.b),pr.cross(Xr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;eo.subVectors(s,n),to.subVectors(r,n),uh.subVectors(e,n);let c=eo.dot(uh),l=to.dot(uh);if(c<=0&&l<=0)return t.copy(n);hh.subVectors(e,s);let h=eo.dot(hh),d=to.dot(hh);if(h>=0&&d<=h)return t.copy(s);let p=c*d-h*l;if(p<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(eo,a);fh.subVectors(e,r);let u=eo.dot(fh),f=to.dot(fh);if(f>=0&&u<=f)return t.copy(r);let x=u*l-c*f;if(x<=0&&l>=0&&f<=0)return o=l/(l-f),t.copy(n).addScaledVector(to,o);let g=h*f-u*d;if(g<=0&&d-h>=0&&u-f>=0)return hd.subVectors(r,s),o=(d-h)/(d-h+(u-f)),t.copy(s).addScaledVector(hd,o);let m=1/(g+x+p);return a=x*m,o=p*m,t.copy(n).addScaledVector(eo,a).addScaledVector(to,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ir=class{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(mr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(mr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=mr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,mr):mr.fromBufferAttribute(r,a),mr.applyMatrix4(e.matrixWorld),this.expandByPoint(mr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),wc.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),wc.copy(n.boundingBox)),wc.applyMatrix4(e.matrixWorld),this.union(wc)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,mr),mr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ko),Rc.subVectors(this.max,Ko),no.subVectors(e.a,Ko),io.subVectors(e.b,Ko),so.subVectors(e.c,Ko),ca.subVectors(io,no),ua.subVectors(so,io),Pa.subVectors(no,so);let t=[0,-ca.z,ca.y,0,-ua.z,ua.y,0,-Pa.z,Pa.y,ca.z,0,-ca.x,ua.z,0,-ua.x,Pa.z,0,-Pa.x,-ca.y,ca.x,0,-ua.y,ua.x,0,-Pa.y,Pa.x,0];return!gh(t,no,io,so,Rc)||(t=[1,0,0,0,1,0,0,0,1],!gh(t,no,io,so,Rc))?!1:(Ac.crossVectors(ca,ua),t=[Ac.x,Ac.y,Ac.z],gh(t,no,io,so,Rc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},qr=[new F,new F,new F,new F,new F,new F,new F,new F],mr=new F,wc=new Ir,no=new F,io=new F,so=new F,ca=new F,ua=new F,Pa=new F,Ko=new F,Rc=new F,Ac=new F,Ia=new F;function gh(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ia.fromArray(i,r);let o=s.x*Math.abs(Ia.x)+s.y*Math.abs(Ia.y)+s.z*Math.abs(Ia.z),c=e.dot(Ia),l=t.dot(Ia),h=n.dot(Ia);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Di=new F,Cc=new tt,c1=0,Jt=class extends Pr{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:c1++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=rf,this.updateRanges=[],this.gpuType=js,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Cc.fromBufferAttribute(this,t),Cc.applyMatrix3(e),this.setXY(t,Cc.x,Cc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Di.fromBufferAttribute(this,t),Di.applyMatrix3(e),this.setXYZ(t,Di.x,Di.y,Di.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Di.fromBufferAttribute(this,t),Di.applyMatrix4(e),this.setXYZ(t,Di.x,Di.y,Di.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Di.fromBufferAttribute(this,t),Di.applyNormalMatrix(e),this.setXYZ(t,Di.x,Di.y,Di.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Di.fromBufferAttribute(this,t),Di.transformDirection(e),this.setXYZ(t,Di.x,Di.y,Di.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=wr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Yn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=wr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Yn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=wr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Yn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=wr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Yn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=wr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Yn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Yn(t,this.array),n=Yn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Yn(t,this.array),n=Yn(n,this.array),s=Yn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Yn(t,this.array),n=Yn(n,this.array),s=Yn(s,this.array),r=Yn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var xl=class extends Jt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var vl=class extends Jt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var qt=class extends Jt{constructor(e,t,n){super(new Float32Array(e),t,n)}},u1=new Ir,Qo=new F,xh=new F,Dr=class{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):u1.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qo.subVectors(e,this.center);let t=Qo.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Qo,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qo.copy(e.center).add(xh)),this.expandByPoint(Qo.copy(e.center).sub(xh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},h1=0,qs=new zt,vh=new vi,ro=new F,Is=new Ir,jo=new Ir,Zi=new F,tn=class i extends Pr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:h1++}),this.uuid=$r(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jm(e)?vl:xl)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new un().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return qs.makeRotationFromQuaternion(e),this.applyMatrix4(qs),this}rotateX(e){return qs.makeRotationX(e),this.applyMatrix4(qs),this}rotateY(e){return qs.makeRotationY(e),this.applyMatrix4(qs),this}rotateZ(e){return qs.makeRotationZ(e),this.applyMatrix4(qs),this}translate(e,t,n){return qs.makeTranslation(e,t,n),this.applyMatrix4(qs),this}scale(e,t,n){return qs.makeScale(e,t,n),this.applyMatrix4(qs),this}lookAt(e){return vh.lookAt(e),vh.updateMatrix(),this.applyMatrix4(vh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ro).negate(),this.translate(ro.x,ro.y,ro.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new qt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Qt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ir);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){en("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Is.setFromBufferAttribute(r),this.morphTargetsRelative?(Zi.addVectors(this.boundingBox.min,Is.min),this.boundingBox.expandByPoint(Zi),Zi.addVectors(this.boundingBox.max,Is.max),this.boundingBox.expandByPoint(Zi)):(this.boundingBox.expandByPoint(Is.min),this.boundingBox.expandByPoint(Is.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&en('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){en("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){let n=this.boundingSphere.center;if(Is.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];jo.setFromBufferAttribute(o),this.morphTargetsRelative?(Zi.addVectors(Is.min,jo.min),Is.expandByPoint(Zi),Zi.addVectors(Is.max,jo.max),Is.expandByPoint(Zi)):(Is.expandByPoint(jo.min),Is.expandByPoint(jo.max))}Is.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Zi.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Zi));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Zi.fromBufferAttribute(o,l),c&&(ro.fromBufferAttribute(e,l),Zi.add(ro)),s=Math.max(s,n.distanceToSquared(Zi))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&en('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){en("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Jt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let v=0;v<n.count;v++)o[v]=new F,c[v]=new F;let l=new F,h=new F,d=new F,p=new tt,u=new tt,f=new tt,x=new F,g=new F;function m(v,R,P){l.fromBufferAttribute(n,v),h.fromBufferAttribute(n,R),d.fromBufferAttribute(n,P),p.fromBufferAttribute(r,v),u.fromBufferAttribute(r,R),f.fromBufferAttribute(r,P),h.sub(l),d.sub(l),u.sub(p),f.sub(p);let B=1/(u.x*f.y-f.x*u.y);isFinite(B)&&(x.copy(h).multiplyScalar(f.y).addScaledVector(d,-u.y).multiplyScalar(B),g.copy(d).multiplyScalar(u.x).addScaledVector(h,-f.x).multiplyScalar(B),o[v].add(x),o[R].add(x),o[P].add(x),c[v].add(g),c[R].add(g),c[P].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let v=0,R=M.length;v<R;++v){let P=M[v],B=P.start,T=P.count;for(let U=B,I=B+T;U<I;U+=3)m(e.getX(U+0),e.getX(U+1),e.getX(U+2))}let b=new F,y=new F,_=new F,w=new F;function A(v){_.fromBufferAttribute(s,v),w.copy(_);let R=o[v];b.copy(R),b.sub(_.multiplyScalar(_.dot(R))).normalize(),y.crossVectors(w,R);let B=y.dot(c[v])<0?-1:1;a.setXYZW(v,b.x,b.y,b.z,B)}for(let v=0,R=M.length;v<R;++v){let P=M[v],B=P.start,T=P.count;for(let U=B,I=B+T;U<I;U+=3)A(e.getX(U+0)),A(e.getX(U+1)),A(e.getX(U+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Jt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,u=n.count;p<u;p++)n.setXYZ(p,0,0,0);let s=new F,r=new F,a=new F,o=new F,c=new F,l=new F,h=new F,d=new F;if(e)for(let p=0,u=e.count;p<u;p+=3){let f=e.getX(p+0),x=e.getX(p+1),g=e.getX(p+2);s.fromBufferAttribute(t,f),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,g),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,f),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,g),o.add(h),c.add(h),l.add(h),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let p=0,u=t.count;p<u;p+=3)s.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),a.fromBufferAttribute(t,p+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Zi.fromBufferAttribute(e,t),Zi.normalize(),e.setXYZ(t,Zi.x,Zi.y,Zi.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,d=o.normalized,p=new l.constructor(c.length*h),u=0,f=0;for(let x=0,g=c.length;x<g;x++){o.isInterleavedBufferAttribute?u=c[x]*o.data.stride+o.offset:u=c[x]*h;for(let m=0;m<h;m++)p[f++]=l[u++]}return new Jt(p,h,d)}if(this.index===null)return Qt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,d=l.length;h<d;h++){let p=l[h],u=e(p,n);c.push(u)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,p=l.length;d<p;d++){let u=l[d];h.push(u.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],d=r[l];for(let p=0,u=d.length;p<u;p++)h.push(d[p].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},yl=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=rf,this.updateRanges=[],this.version=0,this.uuid=$r()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$r()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$r()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},_s=new F,Eo=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)_s.fromBufferAttribute(this,t),_s.applyMatrix4(e),this.setXYZ(t,_s.x,_s.y,_s.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)_s.fromBufferAttribute(this,t),_s.applyNormalMatrix(e),this.setXYZ(t,_s.x,_s.y,_s.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)_s.fromBufferAttribute(this,t),_s.transformDirection(e),this.setXYZ(t,_s.x,_s.y,_s.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=wr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Yn(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Yn(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Yn(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Yn(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Yn(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=wr(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=wr(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=wr(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=wr(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Yn(t,this.array),n=Yn(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Yn(t,this.array),n=Yn(n,this.array),s=Yn(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Yn(t,this.array),n=Yn(n,this.array),s=Yn(s,this.array),r=Yn(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){dl("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Jt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){dl("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},yh=new F,f1=new F,d1=new un,Ds=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=yh.subVectors(n,t).cross(f1.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(yh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||d1.getNormalMatrix(e),s=this.coplanarPoint(yh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},p1=0,Zs=class extends Pr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:p1++}),this.uuid=$r(),this.name="",this.type="Material",this.blending=_a,this.side=ya,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qh,this.blendDst=Zh,this.blendEquation=Qs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xt(0,0,0),this.blendAlpha=0,this.depthFunc=go,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=op,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=n0,this.stencilZFail=n0,this.stencilZPass=n0,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Qt(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Qt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new xt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Ds().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new tt().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new tt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Bi=class extends Zs{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new xt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ao,el=new F,oo=new F,lo=new F,co=new tt,tl=new tt,yp=new zt,Pc=new F,nl=new F,Ic=new F,fd=new tt,_h=new tt,dd=new tt,Ji=class extends vi{constructor(e=new Bi){if(super(),this.isSprite=!0,this.type="Sprite",ao===void 0){ao=new tn;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new yl(t,5);ao.setIndex([0,1,2,0,2,3]),ao.setAttribute("position",new Eo(n,3,0,!1)),ao.setAttribute("uv",new Eo(n,2,3,!1))}this.geometry=ao,this.material=e,this.center=new tt(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&en('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),oo.setFromMatrixScale(this.matrixWorld),yp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),lo.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&oo.multiplyScalar(-lo.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Dc(Pc.set(-.5,-.5,0),lo,a,oo,s,r),Dc(nl.set(.5,-.5,0),lo,a,oo,s,r),Dc(Ic.set(.5,.5,0),lo,a,oo,s,r),fd.set(0,0),_h.set(1,0),dd.set(1,1);let o=e.ray.intersectTriangle(Pc,nl,Ic,!1,el);if(o===null&&(Dc(nl.set(-.5,.5,0),lo,a,oo,s,r),_h.set(0,1),o=e.ray.intersectTriangle(Pc,Ic,nl,!1,el),o===null))return;let c=e.ray.origin.distanceTo(el);c<e.near||c>e.far||t.push({distance:c,point:el.clone(),uv:Rr.getInterpolation(el,Pc,nl,Ic,fd,_h,dd,new tt),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Dc(i,e,t,n,s,r){co.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(tl.x=r*co.x-s*co.y,tl.y=s*co.x+r*co.y):tl.copy(co),i.copy(e),i.x+=tl.x,i.y+=tl.y,i.applyMatrix4(yp)}var Zr=new F,Mh=new F,Lc=new F,Nc=new F,Fa=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Zr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zr.copy(this.origin).addScaledVector(this.direction,t),Zr.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Mh.copy(e).add(t).multiplyScalar(.5),Lc.copy(t).sub(e).normalize(),Nc.copy(this.origin).sub(Mh);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Lc),o=Nc.dot(this.direction),c=-Nc.dot(Lc),l=Nc.lengthSq(),h=Math.abs(1-a*a),d,p,u,f;if(h>0)if(d=a*c-o,p=a*o-c,f=r*h,d>=0)if(p>=-f)if(p<=f){let x=1/h;d*=x,p*=x,u=d*(d+a*p+2*o)+p*(a*d+p+2*c)+l}else p=r,d=Math.max(0,-(a*p+o)),u=-d*d+p*(p+2*c)+l;else p=-r,d=Math.max(0,-(a*p+o)),u=-d*d+p*(p+2*c)+l;else p<=-f?(d=Math.max(0,-(-a*r+o)),p=d>0?-r:Math.min(Math.max(-r,-c),r),u=-d*d+p*(p+2*c)+l):p<=f?(d=0,p=Math.min(Math.max(-r,-c),r),u=p*(p+2*c)+l):(d=Math.max(0,-(a*r+o)),p=d>0?r:Math.min(Math.max(-r,-c),r),u=-d*d+p*(p+2*c)+l);else p=a>0?-r:r,d=Math.max(0,-(a*p+o)),u=-d*d+p*(p+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Mh).addScaledVector(Lc,p),u}intersectSphere(e,t){if(e.radius<0)return null;Zr.subVectors(e.center,this.origin);let n=Zr.dot(this.direction),s=Zr.dot(Zr)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,p=this.origin;return l>=0?(n=(e.min.x-p.x)*l,s=(e.max.x-p.x)*l):(n=(e.max.x-p.x)*l,s=(e.min.x-p.x)*l),h>=0?(r=(e.min.y-p.y)*h,a=(e.max.y-p.y)*h):(r=(e.max.y-p.y)*h,a=(e.min.y-p.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-p.z)*d,c=(e.max.z-p.z)*d):(o=(e.max.z-p.z)*d,c=(e.min.z-p.z)*d),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Zr)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,d=e.x-a.x,p=e.y-a.y,u=e.z-a.z,f=t.x-a.x,x=t.y-a.y,g=t.z-a.z,m=n.x-a.x,M=n.y-a.y,b=n.z-a.z,y=Math.abs(c),_=Math.abs(l),w=Math.abs(h),A,v,R,P,B,T,U,I,G,j,q,Y;if(y>=_&&y>=w?(R=c,T=d,G=f,Y=m,c>=0?(A=l,v=h,P=p,B=u,U=x,I=g,j=M,q=b):(A=h,v=l,P=u,B=p,U=g,I=x,j=b,q=M)):_>=w?(R=l,T=p,G=x,Y=M,l>=0?(A=h,v=c,P=u,B=d,U=g,I=f,j=b,q=m):(A=c,v=h,P=d,B=u,U=f,I=g,j=m,q=b)):(R=h,T=u,G=g,Y=b,h>=0?(A=c,v=l,P=d,B=p,U=f,I=x,j=m,q=M):(A=l,v=c,P=p,B=d,U=x,I=f,j=M,q=m)),R===0)return null;let V=A/R,W=v/R,Q=1/R,be=P-V*T,Ve=B-W*T,Ne=U-V*G,rt=I-W*G,Et=j-V*Y,he=q-W*Y,Se=Et*rt-he*Ne,Oe=be*he-Ve*Et,Re=Ne*Ve-rt*be;if(s){if(Se<0||Oe<0||Re<0)return null}else if((Se<0||Oe<0||Re<0)&&(Se>0||Oe>0||Re>0))return null;let Ye=Se+Oe+Re;if(Ye===0)return null;let ee=Q*(Se*T+Oe*G+Re*Y);return(Ye>0?ee<0:ee>0)?null:this.at(ee/Ye,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Hn=class extends Zs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.combine=$h,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},pd=new zt,Da=new Fa,Uc=new Dr,md=new F,Fc=new F,Oc=new F,Bc=new F,Eh=new F,Hc=new F,gd=new F,zc=new F,Fe=class extends vi{constructor(e=new tn,t=new Hn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Hc.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],d=r[c];h!==0&&(Eh.fromBufferAttribute(d,e),a?Hc.addScaledVector(Eh,h):Hc.addScaledVector(Eh.sub(t),h))}t.add(Hc)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Uc.copy(n.boundingSphere),Uc.applyMatrix4(r),Da.copy(e.ray).recast(e.near),!(Uc.containsPoint(Da.origin)===!1&&(Da.intersectSphere(Uc,md)===null||Da.origin.distanceToSquared(md)>(e.far-e.near)**2))&&(pd.copy(r).invert(),Da.copy(e.ray).applyMatrix4(pd),!(n.boundingBox!==null&&Da.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Da)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,p=r.groups,u=r.drawRange;if(o!==null)if(Array.isArray(a))for(let f=0,x=p.length;f<x;f++){let g=p[f],m=a[g.materialIndex],M=Math.max(g.start,u.start),b=Math.min(o.count,Math.min(g.start+g.count,u.start+u.count));for(let y=M,_=b;y<_;y+=3){let w=o.getX(y),A=o.getX(y+1),v=o.getX(y+2);s=Gc(this,m,e,n,l,h,d,w,A,v),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let f=Math.max(0,u.start),x=Math.min(o.count,u.start+u.count);for(let g=f,m=x;g<m;g+=3){let M=o.getX(g),b=o.getX(g+1),y=o.getX(g+2);s=Gc(this,a,e,n,l,h,d,M,b,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let f=0,x=p.length;f<x;f++){let g=p[f],m=a[g.materialIndex],M=Math.max(g.start,u.start),b=Math.min(c.count,Math.min(g.start+g.count,u.start+u.count));for(let y=M,_=b;y<_;y+=3){let w=y,A=y+1,v=y+2;s=Gc(this,m,e,n,l,h,d,w,A,v),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let f=Math.max(0,u.start),x=Math.min(c.count,u.start+u.count);for(let g=f,m=x;g<m;g+=3){let M=g,b=g+1,y=g+2;s=Gc(this,a,e,n,l,h,d,M,b,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function m1(i,e,t,n,s,r,a,o){let c;if(e.side===es?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===ya,o),c===null)return null;zc.copy(o),zc.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(zc);return l<t.near||l>t.far?null:{distance:l,point:zc.clone(),object:i}}function Gc(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,Fc),i.getVertexPosition(c,Oc),i.getVertexPosition(l,Bc);let h=m1(i,e,t,n,Fc,Oc,Bc,gd);if(h){let d=new F;Rr.getBarycoord(gd,Fc,Oc,Bc,d),s&&(h.uv=Rr.getInterpolatedAttribute(s,o,c,l,d,new tt)),r&&(h.uv1=Rr.getInterpolatedAttribute(r,o,c,l,d,new tt)),a&&(h.normal=Rr.getInterpolatedAttribute(a,o,c,l,d,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let p={a:o,b:c,c:l,normal:new F,materialIndex:0};Rr.getNormal(Fc,Oc,Bc,p.normal),h.face=p,h.barycoord=d}return h}var $s=class extends Ms{constructor(e=null,t=1,n=1,s,r,a,o,c,l=Ri,h=Ri,d,p){super(null,a,o,c,l,h,s,r,d,p),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var So=class extends Jt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},uo=new zt,xd=new zt,kc=[],vd=new Ir,g1=new zt,il=new Fe,sl=new Dr,Mi=class extends Fe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new So(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,g1)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ir),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,uo),vd.copy(e.boundingBox).applyMatrix4(uo),this.boundingBox.union(vd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Dr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,uo),sl.copy(e.boundingSphere).applyMatrix4(uo),this.boundingSphere.union(sl)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(il.geometry=this.geometry,il.material=this.material,il.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),sl.copy(this.boundingSphere),sl.applyMatrix4(n),e.ray.intersectsSphere(sl)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,uo),xd.multiplyMatrices(n,uo),il.matrixWorld=xd,il.raycast(e,kc);for(let a=0,o=kc.length;a<o;a++){let c=kc[a];c.instanceId=r,c.object=this,t.push(c)}kc.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new So(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new $s(new Float32Array(s*this.count),s,this.count,W0,js));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},La=new Dr,x1=new tt(.5,.5),Vc=new F,bo=class{constructor(e=new Ds,t=new Ds,n=new Ds,s=new Ds,r=new Ds,a=new Ds){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=gr,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],d=r[5],p=r[6],u=r[7],f=r[8],x=r[9],g=r[10],m=r[11],M=r[12],b=r[13],y=r[14],_=r[15];if(s[0].setComponents(l-a,u-h,m-f,_-M).normalize(),s[1].setComponents(l+a,u+h,m+f,_+M).normalize(),s[2].setComponents(l+o,u+d,m+x,_+b).normalize(),s[3].setComponents(l-o,u-d,m-x,_-b).normalize(),n)s[4].setComponents(c,p,g,y).normalize(),s[5].setComponents(l-c,u-p,m-g,_-y).normalize();else if(s[4].setComponents(l-c,u-p,m-g,_-y).normalize(),t===gr)s[5].setComponents(l+c,u+p,m+g,_+y).normalize();else if(t===xo)s[5].setComponents(c,p,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),La.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),La.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(La)}intersectsSprite(e){La.center.set(0,0,0);let t=x1.distanceTo(e.center);return La.radius=.7071067811865476+t,La.applyMatrix4(e.matrixWorld),this.intersectsSphere(La)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Vc.x=s.normal.x>0?e.max.x:e.min.x,Vc.y=s.normal.y>0?e.max.y:e.min.y,Vc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Vc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var fa=class extends Zs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new xt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},g0=new F,x0=new F,yd=new zt,rl=new Fa,Wc=new Dr,Sh=new F,_d=new F,v0=class extends vi{constructor(e=new tn,t=new fa){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)g0.fromBufferAttribute(t,s-1),x0.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=g0.distanceTo(x0);e.setAttribute("lineDistance",new qt(n,1))}else Qt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wc.copy(n.boundingSphere),Wc.applyMatrix4(s),Wc.radius+=r,e.ray.intersectsSphere(Wc)===!1)return;yd.copy(s).invert(),rl.copy(e.ray).applyMatrix4(yd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,p=n.attributes.position;if(h!==null){let u=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let x=u,g=f-1;x<g;x+=l){let m=h.getX(x),M=h.getX(x+1),b=Xc(this,e,rl,c,m,M,x);b&&t.push(b)}if(this.isLineLoop){let x=h.getX(f-1),g=h.getX(u),m=Xc(this,e,rl,c,x,g,f-1);m&&t.push(m)}}else{let u=Math.max(0,a.start),f=Math.min(p.count,a.start+a.count);for(let x=u,g=f-1;x<g;x+=l){let m=Xc(this,e,rl,c,x,x+1,x);m&&t.push(m)}if(this.isLineLoop){let x=Xc(this,e,rl,c,f-1,u,f-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Xc(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(g0.fromBufferAttribute(o,s),x0.fromBufferAttribute(o,r),t.distanceSqToSegment(g0,x0,Sh,_d)>n)return;Sh.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Sh);if(!(l<e.near||l>e.far))return{distance:l,point:_d.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Md=new F,Ed=new F,Lr=class extends v0{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Md.fromBufferAttribute(t,s),Ed.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Md.distanceTo(Ed);e.setAttribute("lineDistance",new qt(n,1))}else Qt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Hi=class extends Zs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new xt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Sd=new zt,Nh=new Fa,Yc=new Dr,qc=new F,Ki=class extends vi{constructor(e=new tn,t=new Hi){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Yc.copy(n.boundingSphere),Yc.applyMatrix4(s),Yc.radius+=r,e.ray.intersectsSphere(Yc)===!1)return;Sd.copy(s).invert(),Nh.copy(e.ray).applyMatrix4(Sd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,d=n.attributes.position;if(l!==null){let p=Math.max(0,a.start),u=Math.min(l.count,a.start+a.count);for(let f=p,x=u;f<x;f++){let g=l.getX(f);qc.fromBufferAttribute(d,g),bd(qc,g,c,s,e,t,this)}}else{let p=Math.max(0,a.start),u=Math.min(d.count,a.start+a.count);for(let f=p,x=u;f<x;f++)qc.fromBufferAttribute(d,f),bd(qc,f,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function bd(i,e,t,n,s,r,a){let o=Nh.distanceSqToPoint(i);if(o<t){let c=new F;Nh.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var _l=class extends Ms{constructor(e=[],t=Ea,n,s,r,a,o,c,l,h){super(e,t,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Wn=class extends Ms{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Js=class extends Ms{constructor(e,t,n=xr,s,r,a,o=Ri,c=Ri,l,h=Cr,d=1){if(h!==Cr&&h!==Fr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let p={width:e,height:t,depth:d};super(p,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new yo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},y0=class extends Js{constructor(e,t=xr,n=Ea,s,r,a=Ri,o=Ri,c,l=Cr){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ml=class extends Ms{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Sn=class i extends tn{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],d=[],p=0,u=0;f("z","y","x",-1,-1,n,t,e,a,r,0),f("z","y","x",1,-1,n,t,-e,a,r,1),f("x","z","y",1,1,e,n,t,s,a,2),f("x","z","y",1,-1,e,n,-t,s,a,3),f("x","y","z",1,-1,e,t,n,s,r,4),f("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new qt(l,3)),this.setAttribute("normal",new qt(h,3)),this.setAttribute("uv",new qt(d,2));function f(x,g,m,M,b,y,_,w,A,v,R){let P=y/A,B=_/v,T=y/2,U=_/2,I=w/2,G=A+1,j=v+1,q=0,Y=0,V=new F;for(let W=0;W<j;W++){let Q=W*B-U;for(let be=0;be<G;be++){let Ve=be*P-T;V[x]=Ve*M,V[g]=Q*b,V[m]=I,l.push(V.x,V.y,V.z),V[x]=0,V[g]=0,V[m]=w>0?1:-1,h.push(V.x,V.y,V.z),d.push(be/A),d.push(1-W/v),q+=1}}for(let W=0;W<v;W++)for(let Q=0;Q<A;Q++){let be=p+Q+G*W,Ve=p+Q+G*(W+1),Ne=p+(Q+1)+G*(W+1),rt=p+(Q+1)+G*W;c.push(be,Ve,rt),c.push(Ve,Ne,rt),Y+=6}o.addGroup(u,Y,R),u+=Y,p+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var To=class i extends tn{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],c=[],l=new F,h=new tt;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,p=3;d<=t;d++,p+=3){let u=n+d/t*s;l.x=e*Math.cos(u),l.y=e*Math.sin(u),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[p]/e+1)/2,h.y=(a[p+1]/e+1)/2,c.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new qt(a,3)),this.setAttribute("normal",new qt(o,3)),this.setAttribute("uv",new qt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},pn=class i extends tn{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],p=[],u=[],f=0,x=[],g=n/2,m=0;M(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new qt(d,3)),this.setAttribute("normal",new qt(p,3)),this.setAttribute("uv",new qt(u,2));function M(){let y=new F,_=new F,w=0,A=(t-e)/n;for(let v=0;v<=r;v++){let R=[],P=v/r,B=P*(t-e)+e;for(let T=0;T<=s;T++){let U=T/s,I=U*c+o,G=Math.sin(I),j=Math.cos(I);_.x=B*G,_.y=-P*n+g,_.z=B*j,d.push(_.x,_.y,_.z),y.set(G,A,j).normalize(),p.push(y.x,y.y,y.z),u.push(U,1-P),R.push(f++)}x.push(R)}for(let v=0;v<s;v++)for(let R=0;R<r;R++){let P=x[R][v],B=x[R+1][v],T=x[R+1][v+1],U=x[R][v+1];(e>0||R!==0)&&(h.push(P,B,U),w+=3),(t>0||R!==r-1)&&(h.push(B,T,U),w+=3)}l.addGroup(m,w,0),m+=w}function b(y){let _=f,w=new tt,A=new F,v=0,R=y===!0?e:t,P=y===!0?1:-1;for(let T=1;T<=s;T++)d.push(0,g*P,0),p.push(0,P,0),u.push(.5,.5),f++;let B=f;for(let T=0;T<=s;T++){let I=T/s*c+o,G=Math.cos(I),j=Math.sin(I);A.x=R*j,A.y=g*P,A.z=R*G,d.push(A.x,A.y,A.z),p.push(0,P,0),w.x=G*.5+.5,w.y=j*.5*P+.5,u.push(w.x,w.y),f++}for(let T=0;T<s;T++){let U=_+T,I=B+T;y===!0?h.push(I,I+1,U):h.push(I+1,I,U),v+=3}l.addGroup(m,v,y===!0?1:2),m+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Kr=class i extends pn{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},El=class i extends tn{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new qt(r,3)),this.setAttribute("normal",new qt(r.slice(),3)),this.setAttribute("uv",new qt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){let b=new F,y=new F,_=new F;for(let w=0;w<t.length;w+=3)u(t[w+0],b),u(t[w+1],y),u(t[w+2],_),c(b,y,_,M)}function c(M,b,y,_){let w=_+1,A=[];for(let v=0;v<=w;v++){A[v]=[];let R=M.clone().lerp(y,v/w),P=b.clone().lerp(y,v/w),B=w-v;for(let T=0;T<=B;T++)T===0&&v===w?A[v][T]=R:A[v][T]=R.clone().lerp(P,T/B)}for(let v=0;v<w;v++)for(let R=0;R<2*(w-v)-1;R++){let P=Math.floor(R/2);R%2===0?(p(A[v][P+1]),p(A[v+1][P]),p(A[v][P])):(p(A[v][P+1]),p(A[v+1][P+1]),p(A[v+1][P]))}}function l(M){let b=new F;for(let y=0;y<r.length;y+=3)b.x=r[y+0],b.y=r[y+1],b.z=r[y+2],b.normalize().multiplyScalar(M),r[y+0]=b.x,r[y+1]=b.y,r[y+2]=b.z}function h(){let M=new F;for(let b=0;b<r.length;b+=3){M.x=r[b+0],M.y=r[b+1],M.z=r[b+2];let y=g(M)/2/Math.PI+.5,_=m(M)/Math.PI+.5;a.push(y,1-_)}f(),d()}function d(){for(let M=0;M<a.length;M+=6){let b=a[M+0],y=a[M+2],_=a[M+4],w=Math.max(b,y,_),A=Math.min(b,y,_);w>.9&&A<.1&&(b<.2&&(a[M+0]+=1),y<.2&&(a[M+2]+=1),_<.2&&(a[M+4]+=1))}}function p(M){r.push(M.x,M.y,M.z)}function u(M,b){let y=M*3;b.x=e[y+0],b.y=e[y+1],b.z=e[y+2]}function f(){let M=new F,b=new F,y=new F,_=new F,w=new tt,A=new tt,v=new tt;for(let R=0,P=0;R<r.length;R+=9,P+=6){M.set(r[R+0],r[R+1],r[R+2]),b.set(r[R+3],r[R+4],r[R+5]),y.set(r[R+6],r[R+7],r[R+8]),w.set(a[P+0],a[P+1]),A.set(a[P+2],a[P+3]),v.set(a[P+4],a[P+5]),_.copy(M).add(b).add(y).divideScalar(3);let B=g(_);x(w,P+0,M,B),x(A,P+2,b,B),x(v,P+4,y,B)}}function x(M,b,y,_){_<0&&M.x===1&&(a[b]=M.x-1),y.x===0&&y.z===0&&(a[b]=_/2/Math.PI+.5)}function g(M){return Math.atan2(M.z,-M.x)}function m(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var Zc=new F,$c=new F,bh=new F,Jc=new Rr,wo=class extends tn{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let s=Math.pow(10,4),r=Math.cos(i0*t),a=e.getIndex(),o=e.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],h=["a","b","c"],d=new Array(3),p={},u=[];for(let f=0;f<c;f+=3){a?(l[0]=a.getX(f),l[1]=a.getX(f+1),l[2]=a.getX(f+2)):(l[0]=f,l[1]=f+1,l[2]=f+2);let{a:x,b:g,c:m}=Jc;if(x.fromBufferAttribute(o,l[0]),g.fromBufferAttribute(o,l[1]),m.fromBufferAttribute(o,l[2]),Jc.getNormal(bh),d[0]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,d[1]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,d[2]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let M=0;M<3;M++){let b=(M+1)%3,y=d[M],_=d[b],w=Jc[h[M]],A=Jc[h[b]],v=`${y}_${_}`,R=`${_}_${y}`;R in p&&p[R]?(bh.dot(p[R].normal)<=r&&(u.push(w.x,w.y,w.z),u.push(A.x,A.y,A.z)),p[R]=null):v in p||(p[v]={index0:l[M],index1:l[b],normal:bh.clone()})}}for(let f in p)if(p[f]){let{index0:x,index1:g}=p[f];Zc.fromBufferAttribute(o,x),$c.fromBufferAttribute(o,g),u.push(Zc.x,Zc.y,Zc.z),u.push($c.x,$c.y,$c.z)}this.setAttribute("position",new qt(u,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Ls=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Qt("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let h=n[s],p=n[s+1]-h,u=(a-h)/p;return(s+u)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new tt:new F);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new F,s=[],r=[],a=[],o=new F,c=new zt;for(let u=0;u<=e;u++){let f=u/e;s[u]=this.getTangentAt(f,new F)}r[0]=new F,a[0]=new F;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),p=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),p<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let u=1;u<=e;u++){if(r[u]=r[u-1].clone(),a[u]=a[u-1].clone(),o.crossVectors(s[u-1],s[u]),o.length()>Number.EPSILON){o.normalize();let f=Math.acos(En(s[u-1].dot(s[u]),-1,1));r[u].applyMatrix4(c.makeRotationAxis(o,f))}a[u].crossVectors(s[u],r[u])}if(t===!0){let u=Math.acos(En(r[0].dot(r[e]),-1,1));u/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(u=-u);for(let f=1;f<=e;f++)r[f].applyMatrix4(c.makeRotationAxis(s[f],u*f)),a[f].crossVectors(s[f],r[f])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ro=class extends Ls{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new tt){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),p=c-this.aX,u=l-this.aY;c=p*h-u*d+this.aX,l=p*d+u*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},_0=class extends Ro{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function of(){let i=0,e=0,t=0,n=0;function s(r,a,o,c){i=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,d){let p=(a-r)/l-(o-r)/(l+h)+(o-a)/h,u=(o-a)/h-(c-a)/(h+d)+(c-o)/d;p*=h,u*=h,s(a,o,p,u)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var Td=new F,wd=new F,Th=new of,wh=new of,Rh=new of,fs=class extends Ls{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new F){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(wd.subVectors(s[0],s[1]).add(s[0]),l=wd);let d=s[o%r],p=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Td.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Td),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,f=Math.pow(l.distanceToSquared(d),u),x=Math.pow(d.distanceToSquared(p),u),g=Math.pow(p.distanceToSquared(h),u);x<1e-4&&(x=1),f<1e-4&&(f=x),g<1e-4&&(g=x),Th.initNonuniformCatmullRom(l.x,d.x,p.x,h.x,f,x,g),wh.initNonuniformCatmullRom(l.y,d.y,p.y,h.y,f,x,g),Rh.initNonuniformCatmullRom(l.z,d.z,p.z,h.z,f,x,g)}else this.curveType==="catmullrom"&&(Th.initCatmullRom(l.x,d.x,p.x,h.x,this.tension),wh.initCatmullRom(l.y,d.y,p.y,h.y,this.tension),Rh.initCatmullRom(l.z,d.z,p.z,h.z,this.tension));return n.set(Th.calc(c),wh.calc(c),Rh.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new F().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Rd(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,c=i*o;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*o+r*i+t}function v1(i,e){let t=1-i;return t*t*e}function y1(i,e){return 2*(1-i)*i*e}function _1(i,e){return i*i*e}function ol(i,e,t,n){return v1(i,e)+y1(i,t)+_1(i,n)}function M1(i,e){let t=1-i;return t*t*t*e}function E1(i,e){let t=1-i;return 3*t*t*i*e}function S1(i,e){return 3*(1-i)*i*i*e}function b1(i,e){return i*i*i*e}function ll(i,e,t,n,s){return M1(i,e)+E1(i,t)+S1(i,n)+b1(i,s)}var Sl=class extends Ls{constructor(e=new tt,t=new tt,n=new tt,s=new tt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new tt){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ll(e,s.x,r.x,a.x,o.x),ll(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},M0=class extends Ls{constructor(e=new F,t=new F,n=new F,s=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new F){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ll(e,s.x,r.x,a.x,o.x),ll(e,s.y,r.y,a.y,o.y),ll(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},bl=class extends Ls{constructor(e=new tt,t=new tt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new tt){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new tt){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},da=class extends Ls{constructor(e=new F,t=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new F){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new F){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Tl=class extends Ls{constructor(e=new tt,t=new tt,n=new tt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new tt){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(ol(e,s.x,r.x,a.x),ol(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},wl=class extends Ls{constructor(e=new F,t=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new F){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(ol(e,s.x,r.x,a.x),ol(e,s.y,r.y,a.y),ol(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Rl=class extends Ls{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new tt){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(Rd(o,c.x,l.x,h.x,d.x),Rd(o,c.y,l.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new tt().fromArray(s))}return this}},E0=Object.freeze({__proto__:null,ArcCurve:_0,CatmullRomCurve3:fs,CubicBezierCurve:Sl,CubicBezierCurve3:M0,EllipseCurve:Ro,LineCurve:bl,LineCurve3:da,QuadraticBezierCurve:Tl,QuadraticBezierCurve3:wl,SplineCurve:Rl}),Ao=class extends Ls{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new E0[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new E0[s.type]().fromJSON(s))}return this}},Ks=class extends Ao{constructor(e){super(),this.type="Path",this.currentPoint=new tt,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new bl(this.currentPoint.clone(),new tt(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Tl(this.currentPoint.clone(),new tt(e,t),new tt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new Sl(this.currentPoint.clone(),new tt(e,t),new tt(n,s),new tt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Rl(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,a,o,c),this}absellipse(e,t,n,s,r,a,o,c){let l=new Ro(e,t,n,s,r,a,o,c);if(this.curves.length>0){let d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ei=class extends Ks{constructor(e){super(e),this.uuid=$r(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Ks().fromJSON(s))}return this}};function T1(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=_p(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l;if(n&&(r=P1(i,e,r,t)),i.length>80*t){o=i[0],c=i[1];let h=o,d=c;for(let p=t;p<s;p+=t){let u=i[p],f=i[p+1];u<o&&(o=u),f<c&&(c=f),u>h&&(h=u),f>d&&(d=f)}l=Math.max(h-o,d-c),l=l!==0?32767/l:0}return Al(r,a,t,o,c,l,0),a}function _p(i,e,t,n,s){let r;if(s===G1(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=Ad(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=Ad(a/n|0,i[a],i[a+1],r);return r&&Co(r,r.next)&&(Pl(r),r=r.next),r}function Oa(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Co(t,t.next)||xi(t.prev,t,t.next)===0)){if(Pl(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Al(i,e,t,n,s,r,a){if(!i)return;!a&&r&&U1(i,n,s,r);let o=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?R1(i,n,s,r):w1(i)){e.push(c.i,i.i,l.i),Pl(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=A1(Oa(i),e),Al(i,e,t,n,s,r,2)):a===2&&C1(i,e,t,n,s,r):Al(Oa(i),e,t,n,s,r,1);break}}}function w1(i){let e=i.prev,t=i,n=i.next;if(xi(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,c=t.y,l=n.y,h=Math.min(s,r,a),d=Math.min(o,c,l),p=Math.max(s,r,a),u=Math.max(o,c,l),f=n.next;for(;f!==e;){if(f.x>=h&&f.x<=p&&f.y>=d&&f.y<=u&&al(s,o,r,c,a,l,f.x,f.y)&&xi(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function R1(i,e,t,n){let s=i.prev,r=i,a=i.next;if(xi(s,r,a)>=0)return!1;let o=s.x,c=r.x,l=a.x,h=s.y,d=r.y,p=a.y,u=Math.min(o,c,l),f=Math.min(h,d,p),x=Math.max(o,c,l),g=Math.max(h,d,p),m=Uh(u,f,e,t,n),M=Uh(x,g,e,t,n),b=i.prevZ,y=i.nextZ;for(;b&&b.z>=m&&y&&y.z<=M;){if(b.x>=u&&b.x<=x&&b.y>=f&&b.y<=g&&b!==s&&b!==a&&al(o,h,c,d,l,p,b.x,b.y)&&xi(b.prev,b,b.next)>=0||(b=b.prevZ,y.x>=u&&y.x<=x&&y.y>=f&&y.y<=g&&y!==s&&y!==a&&al(o,h,c,d,l,p,y.x,y.y)&&xi(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;b&&b.z>=m;){if(b.x>=u&&b.x<=x&&b.y>=f&&b.y<=g&&b!==s&&b!==a&&al(o,h,c,d,l,p,b.x,b.y)&&xi(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;y&&y.z<=M;){if(y.x>=u&&y.x<=x&&y.y>=f&&y.y<=g&&y!==s&&y!==a&&al(o,h,c,d,l,p,y.x,y.y)&&xi(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function A1(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Co(n,s)&&Ep(n,t,t.next,s)&&Cl(n,s)&&Cl(s,n)&&(e.push(n.i,t.i,s.i),Pl(t),Pl(t.next),t=i=s),t=t.next}while(t!==i);return Oa(t)}function C1(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&B1(a,o)){let c=Sp(a,o);a=Oa(a,a.next),c=Oa(c,c.next),Al(a,e,t,n,s,r,0),Al(c,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function P1(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,c=r<a-1?e[r+1]*n:i.length,l=_p(i,o,c,n,!1);l===l.next&&(l.steiner=!0),s.push(O1(l))}s.sort(I1);for(let r=0;r<s.length;r++)t=D1(s[r],t);return t}function I1(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function D1(i,e){let t=L1(i,e);if(!t)return e;let n=Sp(t,i);return Oa(n,n.next),Oa(t,t.next)}function L1(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(Co(i,t))return t;do{if(Co(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>r&&(r=d,a=t.x<t.next.x?t:t.next,d===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,c=a.x,l=a.y,h=1/0;t=a;do{if(n>=t.x&&t.x>=c&&n!==t.x&&Mp(s<l?n:r,s,c,l,s<l?r:n,s,t.x,t.y)){let d=Math.abs(s-t.y)/(n-t.x);Cl(t,i)&&(d<h||d===h&&(t.x>a.x||t.x===a.x&&N1(a,t)))&&(a=t,h=d)}t=t.next}while(t!==o);return a}function N1(i,e){return xi(i.prev,i,e.prev)<0&&xi(e.next,i,i.next)<0}function U1(i,e,t,n){let s=i;do s.z===0&&(s.z=Uh(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,F1(s)}function F1(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let l=0;l<t&&(o++,a=a.nextZ,!!a);l++);let c=t;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function Uh(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function O1(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Mp(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function al(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&Mp(i,e,t,n,s,r,a,o)}function B1(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!H1(i,e)&&(Cl(i,e)&&Cl(e,i)&&z1(i,e)&&(xi(i.prev,i,e.prev)||xi(i,e.prev,e))||Co(i,e)&&xi(i.prev,i,i.next)>0&&xi(e.prev,e,e.next)>0)}function xi(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Co(i,e){return i.x===e.x&&i.y===e.y}function Ep(i,e,t,n){let s=Qc(xi(i,e,t)),r=Qc(xi(i,e,n)),a=Qc(xi(t,n,i)),o=Qc(xi(t,n,e));return!!(s!==r&&a!==o||s===0&&Kc(i,t,e)||r===0&&Kc(i,n,e)||a===0&&Kc(t,i,n)||o===0&&Kc(t,e,n))}function Kc(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Qc(i){return i>0?1:i<0?-1:0}function H1(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Ep(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Cl(i,e){return xi(i.prev,i,i.next)<0?xi(i,e,i.next)>=0&&xi(i,i.prev,e)>=0:xi(i,e,i.prev)<0||xi(i,i.next,e)<0}function z1(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Sp(i,e){let t=Fh(i.i,i.x,i.y),n=Fh(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Ad(i,e,t,n){let s=Fh(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Pl(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Fh(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function G1(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Oh=class{static triangulate(e,t,n=2){return T1(e,t,n)}},Ar=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Cd(e),Pd(n,e);let a=e.length;t.forEach(Cd);for(let c=0;c<t.length;c++)s.push(a),a+=t[c].length,Pd(n,t[c]);let o=Oh.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function Cd(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Pd(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Rs=class i extends tn{constructor(e=new Ei([new tt(.5,.5),new tt(-.5,.5),new tt(-.5,-.5),new tt(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,c=e.length;o<c;o++){let l=e[o];a(l)}this.setAttribute("position",new qt(s,3)),this.setAttribute("uv",new qt(r,2)),this.computeVertexNormals();function a(o){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,p=t.bevelEnabled!==void 0?t.bevelEnabled:!0,u=t.bevelThickness!==void 0?t.bevelThickness:.2,f=t.bevelSize!==void 0?t.bevelSize:u-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:k1,b,y=!1,_,w,A,v;if(m){b=m.getSpacedPoints(h),y=!0,p=!1;let oe=m.isCatmullRomCurve3?m.closed:!1;_=m.computeFrenetFrames(h,oe),w=new F,A=new F,v=new F}p||(g=0,u=0,f=0,x=0);let R=o.extractPoints(l),P=R.shape,B=R.holes;if(!Ar.isClockWise(P)){P=P.reverse();for(let oe=0,xe=B.length;oe<xe;oe++){let ie=B[oe];Ar.isClockWise(ie)&&(B[oe]=ie.reverse())}}function U(oe){let ie=10000000000000001e-36,de=oe[0];for(let Me=1;Me<=oe.length;Me++){let $e=Me%oe.length,qe=oe[$e],ut=qe.x-de.x,lt=qe.y-de.y,J=ut*ut+lt*lt,It=Math.max(Math.abs(qe.x),Math.abs(qe.y),Math.abs(de.x),Math.abs(de.y)),At=ie*It*It;if(J<=At){oe.splice($e,1),Me--;continue}de=qe}}U(P),B.forEach(U);let I=B.length,G=P;for(let oe=0;oe<I;oe++){let xe=B[oe];P=P.concat(xe)}function j(oe,xe,ie){return xe||en("ExtrudeGeometry: vec does not exist"),oe.clone().addScaledVector(xe,ie)}let q=P.length;function Y(oe,xe,ie){let de,Me,$e,qe=oe.x-xe.x,ut=oe.y-xe.y,lt=ie.x-oe.x,J=ie.y-oe.y,It=qe*qe+ut*ut,At=qe*J-ut*lt;if(Math.abs(At)>Number.EPSILON){let H=Math.sqrt(It),S=Math.sqrt(lt*lt+J*J),fe=xe.x-ut/H,le=xe.y+qe/H,ye=ie.x-J/S,it=ie.y+lt/S,st=((ye-fe)*J-(it-le)*lt)/(qe*J-ut*lt);de=fe+qe*st-oe.x,Me=le+ut*st-oe.y;let Le=de*de+Me*Me;if(Le<=2)return new tt(de,Me);$e=Math.sqrt(Le/2)}else{let H=!1;qe>Number.EPSILON?lt>Number.EPSILON&&(H=!0):qe<-Number.EPSILON?lt<-Number.EPSILON&&(H=!0):Math.sign(ut)===Math.sign(J)&&(H=!0),H?(de=-ut,Me=qe,$e=Math.sqrt(It)):(de=qe,Me=ut,$e=Math.sqrt(It/2))}return new tt(de/$e,Me/$e)}let V=[];for(let oe=0,xe=G.length,ie=xe-1,de=oe+1;oe<xe;oe++,ie++,de++)ie===xe&&(ie=0),de===xe&&(de=0),V[oe]=Y(G[oe],G[ie],G[de]);let W=[],Q,be=V.concat();for(let oe=0,xe=I;oe<xe;oe++){let ie=B[oe];Q=[];for(let de=0,Me=ie.length,$e=Me-1,qe=de+1;de<Me;de++,$e++,qe++)$e===Me&&($e=0),qe===Me&&(qe=0),Q[de]=Y(ie[de],ie[$e],ie[qe]);W.push(Q),be=be.concat(Q)}let Ve;if(g===0)Ve=Ar.triangulateShape(G,B);else{let oe=[],xe=[];for(let ie=0;ie<g;ie++){let de=ie/g,Me=u*Math.cos(de*Math.PI/2),$e=f*Math.sin(de*Math.PI/2)+x;for(let qe=0,ut=G.length;qe<ut;qe++){let lt=j(G[qe],V[qe],$e);Oe(lt.x,lt.y,-Me),de===0&&oe.push(lt)}for(let qe=0,ut=I;qe<ut;qe++){let lt=B[qe];Q=W[qe];let J=[];for(let It=0,At=lt.length;It<At;It++){let H=j(lt[It],Q[It],$e);Oe(H.x,H.y,-Me),de===0&&J.push(H)}de===0&&xe.push(J)}}Ve=Ar.triangulateShape(oe,xe)}let Ne=Ve.length,rt=f+x;for(let oe=0;oe<q;oe++){let xe=p?j(P[oe],be[oe],rt):P[oe];y?(A.copy(_.normals[0]).multiplyScalar(xe.x),w.copy(_.binormals[0]).multiplyScalar(xe.y),v.copy(b[0]).add(A).add(w),Oe(v.x,v.y,v.z)):Oe(xe.x,xe.y,0)}for(let oe=1;oe<=h;oe++)for(let xe=0;xe<q;xe++){let ie=p?j(P[xe],be[xe],rt):P[xe];y?(A.copy(_.normals[oe]).multiplyScalar(ie.x),w.copy(_.binormals[oe]).multiplyScalar(ie.y),v.copy(b[oe]).add(A).add(w),Oe(v.x,v.y,v.z)):Oe(ie.x,ie.y,d/h*oe)}for(let oe=g-1;oe>=0;oe--){let xe=oe/g,ie=u*Math.cos(xe*Math.PI/2),de=f*Math.sin(xe*Math.PI/2)+x;for(let Me=0,$e=G.length;Me<$e;Me++){let qe=j(G[Me],V[Me],de);Oe(qe.x,qe.y,d+ie)}for(let Me=0,$e=B.length;Me<$e;Me++){let qe=B[Me];Q=W[Me];for(let ut=0,lt=qe.length;ut<lt;ut++){let J=j(qe[ut],Q[ut],de);y?Oe(J.x,J.y+b[h-1].y,b[h-1].x+ie):Oe(J.x,J.y,d+ie)}}}Et(),he();function Et(){let oe=s.length/3;if(p){let xe=0,ie=q*xe;for(let de=0;de<Ne;de++){let Me=Ve[de];Re(Me[2]+ie,Me[1]+ie,Me[0]+ie)}xe=h+g*2,ie=q*xe;for(let de=0;de<Ne;de++){let Me=Ve[de];Re(Me[0]+ie,Me[1]+ie,Me[2]+ie)}}else{for(let xe=0;xe<Ne;xe++){let ie=Ve[xe];Re(ie[2],ie[1],ie[0])}for(let xe=0;xe<Ne;xe++){let ie=Ve[xe];Re(ie[0]+q*h,ie[1]+q*h,ie[2]+q*h)}}n.addGroup(oe,s.length/3-oe,0)}function he(){let oe=s.length/3,xe=0;Se(G,xe),xe+=G.length;for(let ie=0,de=B.length;ie<de;ie++){let Me=B[ie];Se(Me,xe),xe+=Me.length}n.addGroup(oe,s.length/3-oe,1)}function Se(oe,xe){let ie=oe.length;for(;--ie>=0;){let de=ie,Me=ie-1;Me<0&&(Me=oe.length-1);for(let $e=0,qe=h+g*2;$e<qe;$e++){let ut=q*$e,lt=q*($e+1),J=xe+de+ut,It=xe+Me+ut,At=xe+Me+lt,H=xe+de+lt;Ye(J,It,At,H)}}}function Oe(oe,xe,ie){c.push(oe),c.push(xe),c.push(ie)}function Re(oe,xe,ie){ee(oe),ee(xe),ee(ie);let de=s.length/3,Me=M.generateTopUV(n,s,de-3,de-2,de-1);Je(Me[0]),Je(Me[1]),Je(Me[2])}function Ye(oe,xe,ie,de){ee(oe),ee(xe),ee(de),ee(xe),ee(ie),ee(de);let Me=s.length/3,$e=M.generateSideWallUV(n,s,Me-6,Me-3,Me-2,Me-1);Je($e[0]),Je($e[1]),Je($e[3]),Je($e[1]),Je($e[2]),Je($e[3])}function ee(oe){s.push(c[oe*3+0]),s.push(c[oe*3+1]),s.push(c[oe*3+2])}function Je(oe){r.push(oe.x),r.push(oe.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return V1(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new E0[s.type]().fromJSON(s)),new i(n,e.options)}},k1={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],c=e[n*3+1],l=e[s*3],h=e[s*3+1];return[new tt(r,a),new tt(o,c),new tt(l,h)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],d=e[n*3+2],p=e[s*3],u=e[s*3+1],f=e[s*3+2],x=e[r*3],g=e[r*3+1],m=e[r*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new tt(a,1-c),new tt(l,1-d),new tt(p,1-f),new tt(x,1-m)]:[new tt(o,1-c),new tt(h,1-d),new tt(u,1-f),new tt(g,1-m)]}};function V1(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Nr=class i extends El{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Il=class i extends tn{constructor(e=[new tt(0,-.5),new tt(.5,0),new tt(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=En(s,0,Math.PI*2);let r=[],a=[],o=[],c=[],l=[],h=1/t,d=new F,p=new tt,u=new F,f=new F,x=new F,g=0,m=0;for(let M=0;M<=e.length-1;M++)switch(M){case 0:g=e[M+1].x-e[M].x,m=e[M+1].y-e[M].y,u.x=m*1,u.y=-g,u.z=m*0,x.copy(u),u.normalize(),c.push(u.x,u.y,u.z);break;case e.length-1:c.push(x.x,x.y,x.z);break;default:g=e[M+1].x-e[M].x,m=e[M+1].y-e[M].y,u.x=m*1,u.y=-g,u.z=m*0,f.copy(u),u.x+=x.x,u.y+=x.y,u.z+=x.z,u.normalize(),c.push(u.x,u.y,u.z),x.copy(f)}for(let M=0;M<=t;M++){let b=n+M*h*s,y=Math.sin(b),_=Math.cos(b);for(let w=0;w<=e.length-1;w++){d.x=e[w].x*y,d.y=e[w].y,d.z=e[w].x*_,a.push(d.x,d.y,d.z),p.x=M/t,p.y=w/(e.length-1),o.push(p.x,p.y);let A=c[3*w+0]*y,v=c[3*w+1],R=c[3*w+0]*_;l.push(A,v,R)}}for(let M=0;M<t;M++)for(let b=0;b<e.length-1;b++){let y=b+M*e.length,_=y,w=y+e.length,A=y+e.length+1,v=y+1;r.push(_,w,v),r.push(A,v,w)}this.setIndex(r),this.setAttribute("position",new qt(a,3)),this.setAttribute("uv",new qt(o,2)),this.setAttribute("normal",new qt(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},Dl=class i extends El{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},an=class i extends tn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,d=e/o,p=t/c,u=[],f=[],x=[],g=[];for(let m=0;m<h;m++){let M=m*p-a;for(let b=0;b<l;b++){let y=b*d-r;f.push(y,-M,0),x.push(0,0,1),g.push(b/o),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let M=0;M<o;M++){let b=M+l*m,y=M+l*(m+1),_=M+1+l*(m+1),w=M+1+l*m;u.push(b,y,w),u.push(y,_,w)}this.setIndex(u),this.setAttribute("position",new qt(f,3)),this.setAttribute("normal",new qt(x,3)),this.setAttribute("uv",new qt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Ba=class i extends tn{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],c=[],l=[],h=[],d=e,p=(t-e)/s,u=new F,f=new tt;for(let x=0;x<=s;x++){for(let g=0;g<=n;g++){let m=r+g/n*a;u.x=d*Math.cos(m),u.y=d*Math.sin(m),c.push(u.x,u.y,u.z),l.push(0,0,1),f.x=(u.x/t+1)/2,f.y=(u.y/t+1)/2,h.push(f.x,f.y)}d+=p}for(let x=0;x<s;x++){let g=x*(n+1);for(let m=0;m<n;m++){let M=m+g,b=M,y=M+n+1,_=M+n+2,w=M+1;o.push(b,y,w),o.push(y,_,w)}}this.setIndex(o),this.setAttribute("position",new qt(c,3)),this.setAttribute("normal",new qt(l,3)),this.setAttribute("uv",new qt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},pa=class i extends tn{constructor(e=new Ei([new tt(0,.5),new tt(-.5,-.5),new tt(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],a=[],o=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(o,c,h),o+=c,c=0;this.setIndex(n),this.setAttribute("position",new qt(s,3)),this.setAttribute("normal",new qt(r,3)),this.setAttribute("uv",new qt(a,2));function l(h){let d=s.length/3,p=h.extractPoints(t),u=p.shape,f=p.holes;Ar.isClockWise(u)===!1&&(u=u.reverse());for(let g=0,m=f.length;g<m;g++){let M=f[g];Ar.isClockWise(M)===!0&&(f[g]=M.reverse())}let x=Ar.triangulateShape(u,f);for(let g=0,m=f.length;g<m;g++){let M=f[g];u=u.concat(M)}for(let g=0,m=u.length;g<m;g++){let M=u[g];s.push(M.x,M.y,0),r.push(0,0,1),a.push(M.x,M.y)}for(let g=0,m=x.length;g<m;g++){let M=x[g],b=M[0]+d,y=M[1]+d,_=M[2]+d;n.push(b,y,_),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return W1(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];n.push(a)}return new i(n,e.curveSegments)}};function W1(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var $n=class i extends tn{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],d=new F,p=new F,u=[],f=[],x=[],g=[];for(let m=0;m<=n;m++){let M=[],b=m/n,y=a+b*o,_=e*Math.cos(y),w=Math.sqrt(e*e-_*_),A=0;m===0&&a===0?A=.5/t:m===n&&c===Math.PI&&(A=-.5/t);for(let v=0;v<=t;v++){let R=v/t,P=s+R*r;d.x=-w*Math.cos(P),d.y=_,d.z=w*Math.sin(P),f.push(d.x,d.y,d.z),p.copy(d).normalize(),x.push(p.x,p.y,p.z),g.push(R+A,1-b),M.push(l++)}h.push(M)}for(let m=0;m<n;m++)for(let M=0;M<t;M++){let b=h[m][M+1],y=h[m][M],_=h[m+1][M],w=h[m+1][M+1];(m!==0||a>0)&&u.push(b,y,w),(m!==n-1||c<Math.PI)&&u.push(y,_,w)}this.setIndex(u),this.setAttribute("position",new qt(f,3)),this.setAttribute("normal",new qt(x,3)),this.setAttribute("uv",new qt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Qi=class i extends tn{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let c=[],l=[],h=[],d=[],p=new F,u=new F,f=new F;for(let x=0;x<=n;x++){let g=a+x/n*o;for(let m=0;m<=s;m++){let M=m/s*r;u.x=(e+t*Math.cos(g))*Math.cos(M),u.y=(e+t*Math.cos(g))*Math.sin(M),u.z=t*Math.sin(g),l.push(u.x,u.y,u.z),p.x=e*Math.cos(M),p.y=e*Math.sin(M),f.subVectors(u,p).normalize(),h.push(f.x,f.y,f.z),d.push(m/s),d.push(x/n)}}for(let x=1;x<=n;x++)for(let g=1;g<=s;g++){let m=(s+1)*x+g-1,M=(s+1)*(x-1)+g-1,b=(s+1)*(x-1)+g,y=(s+1)*x+g;c.push(m,M,y),c.push(M,b,y)}this.setIndex(c),this.setAttribute("position",new qt(l,3)),this.setAttribute("normal",new qt(h,3)),this.setAttribute("uv",new qt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var ds=class i extends tn{constructor(e=new wl(new F(-1,-1,0),new F(-1,1,0),new F(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new F,c=new F,l=new tt,h=new F,d=[],p=[],u=[],f=[];x(),this.setIndex(f),this.setAttribute("position",new qt(d,3)),this.setAttribute("normal",new qt(p,3)),this.setAttribute("uv",new qt(u,2));function x(){for(let b=0;b<t;b++)g(b);g(r===!1?t:0),M(),m()}function g(b){h=e.getPointAt(b/t,h);let y=a.normals[b],_=a.binormals[b];for(let w=0;w<=s;w++){let A=w/s*Math.PI*2,v=Math.sin(A),R=-Math.cos(A);c.x=R*y.x+v*_.x,c.y=R*y.y+v*_.y,c.z=R*y.z+v*_.z,c.normalize(),p.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,d.push(o.x,o.y,o.z)}}function m(){for(let b=1;b<=t;b++)for(let y=1;y<=s;y++){let _=(s+1)*(b-1)+(y-1),w=(s+1)*b+(y-1),A=(s+1)*b+y,v=(s+1)*(b-1)+y;f.push(_,w,v),f.push(w,A,v)}}function M(){for(let b=0;b<=t;b++)for(let y=0;y<=s;y++)l.x=b/t,l.y=y/s,u.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new E0[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function Va(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Id(s))s.isRenderTargetTexture?(Qt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Id(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function ms(i){let e={};for(let t=0;t<i.length;t++){let n=Va(i[t]);for(let s in n)e[s]=n[s]}return e}function Id(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function X1(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function lf(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:wn.workingColorSpace}var Es={clone:Va,merge:ms},Y1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,q1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Cn=class extends Zs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Y1,this.fragmentShader=q1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Va(e.uniforms),this.uniformsGroups=X1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new xt().setHex(s.value);break;case"v2":this.uniforms[n].value=new tt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new F().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ri().fromArray(s.value);break;case"m3":this.uniforms[n].value=new un().fromArray(s.value);break;case"m4":this.uniforms[n].value=new zt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Po=class extends Cn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ln=class extends Zs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nc,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ji=class extends ln{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new tt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return En(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new xt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new xt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new xt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Ll=class extends Zs{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nc,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};var Io=class extends Zs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},S0=class extends Zs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ho(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Ah(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var ma=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},b0=class extends ma{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ih,endingEnd:Ih}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Dh:r=e,o=2*t-n;break;case Lh:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Dh:a=e,c=2*n-t;break;case Lh:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,d=this._offsetNext,p=this._weightPrev,u=this._weightNext,f=(n-t)/(s-t),x=f*f,g=x*f,m=-p*g+2*p*x-p*f,M=(1+p)*g+(-1.5-2*p)*x+(-.5+p)*f+1,b=(-1-u)*g+(1.5+u)*x+.5*f,y=u*g-u*x;for(let _=0;_!==o;++_)r[_]=m*a[h+_]+M*a[l+_]+b*a[c+_]+y*a[d+_];return r}},T0=class extends ma{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(s-t),d=1-h;for(let p=0;p!==o;++p)r[p]=a[l+p]*d+a[c+p]*h;return r}},w0=class extends ma{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},R0=class extends ma{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let f=(n-t)/(s-t),x=1-f;for(let g=0;g!==o;++g)r[g]=a[l+g]*x+a[c+g]*f;return r}let p=o*2,u=e-1;for(let f=0;f!==o;++f){let x=a[l+f],g=a[c+f],m=u*p+f*2,M=d[m],b=d[m+1],y=e*p+f*2,_=h[y],w=h[y+1],A=$1(n,t,M,_,s);r[f]=bp(A,x,b,w,g)}return r}};function bp(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Z1(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function $1(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=bp(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let c=Z1(r,e,t,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var Ns=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ho(t,this.TimeBufferType),this.values=ho(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ho(e.times,Array),values:ho(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Ah(e.settings)&&(n.settings={inTangents:ho(e.settings.inTangents,Array),outTangents:ho(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new w0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new T0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new b0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new R0(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case cl:t=this.InterpolantFactoryMethodDiscrete;break;case f0:t=this.InterpolantFactoryMethodLinear;break;case t0:t=this.InterpolantFactoryMethodSmooth;break;case Ph:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Qt("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return cl;case this.InterpolantFactoryMethodLinear:return f0;case this.InterpolantFactoryMethodSmooth:return t0;case this.InterpolantFactoryMethodBezier:return Ph}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Ah(this.settings)&&(Dd(this.settings.inTangents,e),Dd(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(en("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(en("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){en("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){en("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&Km(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){en("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===t0,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(s)c=!0;else{let d=o*n,p=d-n,u=d+n;for(let f=0;f!==n;++f){let x=t[d+f];if(x!==t[p+f]||x!==t[u+f]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let d=o*n,p=a*n;for(let u=0;u!==n;++u)t[p+u]=t[d+u]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Ah(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Dd(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Ns.prototype.ValueTypeName="";Ns.prototype.TimeBufferType=Float32Array;Ns.prototype.ValueBufferType=Float32Array;Ns.prototype.DefaultInterpolation=f0;var ga=class extends Ns{constructor(e,t,n){super(e,t,n)}};ga.prototype.ValueTypeName="bool";ga.prototype.ValueBufferType=Array;ga.prototype.DefaultInterpolation=cl;ga.prototype.InterpolantFactoryMethodLinear=void 0;ga.prototype.InterpolantFactoryMethodSmooth=void 0;var A0=class extends Ns{constructor(e,t,n,s){super(e,t,n,s)}};A0.prototype.ValueTypeName="color";var C0=class extends Ns{constructor(e,t,n,s){super(e,t,n,s)}};C0.prototype.ValueTypeName="number";var P0=class extends ma{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),l=e*o;for(let h=l+o;l!==h;l+=4)Bn.slerpFlat(r,0,a,l-o,a,l,c);return r}},Nl=class extends Ns{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new P0(this.times,this.values,this.getValueSize(),e)}};Nl.prototype.ValueTypeName="quaternion";Nl.prototype.InterpolantFactoryMethodSmooth=void 0;var xa=class extends Ns{constructor(e,t,n){super(e,t,n)}};xa.prototype.ValueTypeName="string";xa.prototype.ValueBufferType=Array;xa.prototype.DefaultInterpolation=cl;xa.prototype.InterpolantFactoryMethodLinear=void 0;xa.prototype.InterpolantFactoryMethodSmooth=void 0;var I0=class extends Ns{constructor(e,t,n,s){super(e,t,n,s)}};I0.prototype.ValueTypeName="vector";var D0=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,p=l.length;d<p;d+=2){let u=l[d],f=l[d+1];if(u.global&&(u.lastIndex=0),u.test(h))return f}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Tp=new D0,L0=class{constructor(e){this.manager=e!==void 0?e:Tp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};L0.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ha=class extends vi{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new xt(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Ul=class extends Ha{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(vi.DEFAULT_UP),this.updateMatrix(),this.groundColor=new xt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Ch=new zt,Ld=new F,Nd=new F,Do=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new tt(512,512),this.mapType=zi,this.map=null,this.mapPass=null,this.matrix=new zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bo,this._frameExtents=new tt(1,1),this._viewportCount=1,this._viewports=[new ri(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Ld.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ld),Nd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Nd),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Ch.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Ch,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===xo||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(Ch)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},jc=new F,e0=new Bn,Tr=new F,Fl=class extends vi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new zt,this.projectionMatrix=new zt,this.projectionMatrixInverse=new zt,this.coordinateSystem=gr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(jc,e0,Tr),Tr.x===1&&Tr.y===1&&Tr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(jc,e0,Tr.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(jc,e0,Tr),Tr.x===1&&Tr.y===1&&Tr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(jc,e0,Tr.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ha=new F,Ud=new tt,Fd=new tt,$i=class extends Fl{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=pl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(i0*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return pl*2*Math.atan(Math.tan(i0*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ha.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ha.x,ha.y).multiplyScalar(-e/ha.z),ha.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ha.x,ha.y).multiplyScalar(-e/ha.z)}getViewSize(e,t){return this.getViewBounds(e,Ud,Fd),t.subVectors(Fd,Ud)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(i0*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Bh=class extends Do{constructor(){super(new $i(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=pl*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Ol=class extends Ha{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(vi.DEFAULT_UP),this.updateMatrix(),this.target=new vi,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Bh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Hh=class extends Do{constructor(){super(new $i(90,1,.5,500)),this.isPointLightShadow=!0}},ps=class extends Ha{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Hh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},va=class extends Fl{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},zh=class extends Do{constructor(){super(new va(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Lo=class extends Ha{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vi.DEFAULT_UP),this.updateMatrix(),this.target=new vi,this.shadow=new zh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var fo=-90,po=1,N0=class extends vi{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new $i(fo,po,e,t);s.layers=this.layers,this.add(s);let r=new $i(fo,po,e,t);r.layers=this.layers,this.add(r);let a=new $i(fo,po,e,t);a.layers=this.layers,this.add(a);let o=new $i(fo,po,e,t);o.layers=this.layers,this.add(o);let c=new $i(fo,po,e,t);c.layers=this.layers,this.add(c);let l=new $i(fo,po,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===gr)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===xo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,d=e.getRenderTarget(),p=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,p,u),e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}},U0=class extends $i{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Bl=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=J1.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function J1(){this._document.hidden===!1&&this.reset()}var cf="\\[\\]\\.:\\/",K1=new RegExp("["+cf+"]","g"),uf="[^"+cf+"]",Q1="[^"+cf.replace("\\.","")+"]",j1=/((?:WC+[\/:])*)/.source.replace("WC",uf),eg=/(WCOD+)?/.source.replace("WCOD",Q1),tg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",uf),ng=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",uf),ig=new RegExp("^"+j1+eg+tg+ng+"$"),sg=["material","materials","bones","map"],Gh=class{constructor(e,t,n){let s=n||ci.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ci=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(K1,"")}static parseTrackName(e){let t=ig.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);sg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Qt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){en("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){en("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){en("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){en("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){en("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){en("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){en("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;en("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){en("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){en("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ci.Composite=Gh;ci.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ci.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ci.prototype.GetterByBindingType=[ci.prototype._getValue_direct,ci.prototype._getValue_array,ci.prototype._getValue_arrayElement,ci.prototype._getValue_toArray];ci.prototype.SetterByBindingTypeAndVersioning=[[ci.prototype._setValue_direct,ci.prototype._setValue_direct_setNeedsUpdate,ci.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ci.prototype._setValue_array,ci.prototype._setValue_array_setNeedsUpdate,ci.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ci.prototype._setValue_arrayElement,ci.prototype._setValue_arrayElement_setNeedsUpdate,ci.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ci.prototype._setValue_fromArray,ci.prototype._setValue_fromArray_setNeedsUpdate,ci.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var v_=new Float32Array(1);var Od=new zt,Hl=class{constructor(e,t,n=0,s=1/0){this.ray=new Fa(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new _o,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):en("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Od.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Od),this}intersectObject(e,t=!0,n=[]){return kh(e,this,n,t),n.sort(Bd),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)kh(e[s],this,n,t);return n.sort(Bd),n}};function Bd(i,e){return i.distance-e.distance}function kh(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)kh(r[a],e,t,!0)}}var gf=class gf{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};gf.prototype.isMatrix2=!0;var Vh=gf;function hf(i,e,t,n){let s=rg(n);switch(t){case tf:return i*e;case W0:return i*e/s.components*s.byteLength;case X0:return i*e/s.components*s.byteLength;case ba:return i*e*2/s.components*s.byteLength;case Y0:return i*e*2/s.components*s.byteLength;case nf:return i*e*3/s.components*s.byteLength;case rs:return i*e*4/s.components*s.byteLength;case q0:return i*e*4/s.components*s.byteLength;case Jl:case Kl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ql:case jl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case $0:case K0:return Math.max(i,16)*Math.max(e,8)/4;case Z0:case J0:return Math.max(i,8)*Math.max(e,8)/2;case Q0:case j0:case tu:case nu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case eu:case ec:case iu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case su:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ru:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case au:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ou:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case lu:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case cu:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case uu:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case hu:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case fu:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case du:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case pu:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case mu:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case gu:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case xu:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case vu:case yu:case _u:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Mu:case Eu:return Math.ceil(i/4)*Math.ceil(e/4)*8;case tc:case Su:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function rg(i){switch(i){case zi:case Kh:return{byteLength:1,components:1};case Uo:case Qh:case yi:return{byteLength:2,components:1};case k0:case V0:return{byteLength:2,components:4};case xr:case G0:case js:return{byteLength:4,components:1};case jh:case ef:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Qt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function qp(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function ug(i){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,d=l.byteLength,p=i.createBuffer();i.bindBuffer(c,p),i.bufferData(c,l,h),o.onUploadCallback();let u;if(l instanceof Float32Array)u=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)u=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)u=i.SHORT;else if(l instanceof Uint32Array)u=i.UNSIGNED_INT;else if(l instanceof Int32Array)u=i.INT;else if(l instanceof Int8Array)u=i.BYTE;else if(l instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:p,type:u,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){let h=c.array,d=c.updateRanges;if(i.bindBuffer(l,o),d.length===0)i.bufferSubData(l,0,h);else{d.sort((u,f)=>u.start-f.start);let p=0;for(let u=1;u<d.length;u++){let f=d[p],x=d[u];x.start<=f.start+f.count+1?f.count=Math.max(f.count,x.start+x.count-f.start):(++p,d[p]=x)}d.length=p+1;for(let u=0,f=d.length;u<f;u++){let x=d[u];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var hg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fg=`#ifdef USE_ALPHAHASH
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
#endif`,dg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xg=`#ifdef USE_AOMAP
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
#endif`,vg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yg=`#ifdef USE_BATCHING
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
#endif`,_g=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Mg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Eg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Sg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,bg=`#ifdef USE_IRIDESCENCE
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
#endif`,Tg=`#ifdef USE_BUMPMAP
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
#endif`,wg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Rg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ag=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Pg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ig=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Dg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Lg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Ng=`#define PI 3.141592653589793
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
} // validated`,Ug=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Fg=`vec3 transformedNormal = objectNormal;
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
#endif`,Og=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gg="gl_FragColor = linearToOutputTexel( gl_FragColor );",kg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Vg=`#ifdef USE_ENVMAP
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
#endif`,Wg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Xg=`#ifdef USE_ENVMAP
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
#endif`,Yg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qg=`#ifdef USE_ENVMAP
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
#endif`,Zg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$g=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Kg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qg=`#ifdef USE_GRADIENTMAP
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
}`,jg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,e2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,t2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,n2=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,i2=`#ifdef USE_ENVMAP
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
#endif`,s2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,r2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,a2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,o2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,l2=`PhysicalMaterial material;
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
#endif`,c2=`uniform sampler2D dfgLUT;
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
}`,u2=`
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
#endif`,h2=`#if defined( RE_IndirectDiffuse )
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
#endif`,f2=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,d2=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,p2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,m2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,g2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,x2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,v2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,y2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,M2=`#if defined( USE_POINTS_UV )
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
#endif`,E2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,S2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,b2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,T2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,w2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,R2=`#ifdef USE_MORPHTARGETS
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
#endif`,A2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,C2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,P2=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,I2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,D2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,L2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,N2=`#ifdef USE_NORMALMAP
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
#endif`,U2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,F2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,O2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,B2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,H2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,z2=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,G2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,k2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,V2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,W2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,X2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Y2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,q2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Z2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,J2=`float getShadowMask() {
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
}`,K2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Q2=`#ifdef USE_SKINNING
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
#endif`,j2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ex=`#ifdef USE_SKINNING
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
#endif`,tx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ix=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,rx=`#ifdef USE_TRANSMISSION
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
#endif`,ax=`#ifdef USE_TRANSMISSION
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
#endif`,ox=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ux=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,hx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fx=`uniform sampler2D t2D;
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
}`,dx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,px=`#ifdef ENVMAP_TYPE_CUBE
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
}`,mx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xx=`#include <common>
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
}`,vx=`#if DEPTH_PACKING == 3200
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
}`,yx=`#define DISTANCE
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
}`,_x=`#define DISTANCE
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
}`,Mx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ex=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sx=`uniform float scale;
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
}`,bx=`uniform vec3 diffuse;
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
}`,Tx=`#include <common>
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
}`,wx=`uniform vec3 diffuse;
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
}`,Rx=`#define LAMBERT
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
}`,Ax=`#define LAMBERT
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
}`,Cx=`#define MATCAP
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
}`,Px=`#define MATCAP
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
}`,Ix=`#define NORMAL
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
}`,Dx=`#define NORMAL
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
}`,Lx=`#define PHONG
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
}`,Nx=`#define PHONG
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
}`,Ux=`#define STANDARD
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
}`,Fx=`#define STANDARD
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
}`,Ox=`#define TOON
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
}`,Bx=`#define TOON
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
}`,Hx=`uniform float size;
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
}`,zx=`uniform vec3 diffuse;
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
}`,Gx=`#include <common>
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
}`,kx=`uniform vec3 color;
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
}`,Vx=`uniform float rotation;
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
}`,Wx=`uniform vec3 diffuse;
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
}`,mn={alphahash_fragment:hg,alphahash_pars_fragment:fg,alphamap_fragment:dg,alphamap_pars_fragment:pg,alphatest_fragment:mg,alphatest_pars_fragment:gg,aomap_fragment:xg,aomap_pars_fragment:vg,batching_pars_vertex:yg,batching_vertex:_g,begin_vertex:Mg,beginnormal_vertex:Eg,bsdfs:Sg,iridescence_fragment:bg,bumpmap_pars_fragment:Tg,clipping_planes_fragment:wg,clipping_planes_pars_fragment:Rg,clipping_planes_pars_vertex:Ag,clipping_planes_vertex:Cg,color_fragment:Pg,color_pars_fragment:Ig,color_pars_vertex:Dg,color_vertex:Lg,common:Ng,cube_uv_reflection_fragment:Ug,defaultnormal_vertex:Fg,displacementmap_pars_vertex:Og,displacementmap_vertex:Bg,emissivemap_fragment:Hg,emissivemap_pars_fragment:zg,colorspace_fragment:Gg,colorspace_pars_fragment:kg,envmap_fragment:Vg,envmap_common_pars_fragment:Wg,envmap_pars_fragment:Xg,envmap_pars_vertex:Yg,envmap_physical_pars_fragment:i2,envmap_vertex:qg,fog_vertex:Zg,fog_pars_vertex:$g,fog_fragment:Jg,fog_pars_fragment:Kg,gradientmap_pars_fragment:Qg,lightmap_pars_fragment:jg,lights_lambert_fragment:e2,lights_lambert_pars_fragment:t2,lights_pars_begin:n2,lights_toon_fragment:s2,lights_toon_pars_fragment:r2,lights_phong_fragment:a2,lights_phong_pars_fragment:o2,lights_physical_fragment:l2,lights_physical_pars_fragment:c2,lights_fragment_begin:u2,lights_fragment_maps:h2,lights_fragment_end:f2,lightprobes_pars_fragment:d2,logdepthbuf_fragment:p2,logdepthbuf_pars_fragment:m2,logdepthbuf_pars_vertex:g2,logdepthbuf_vertex:x2,map_fragment:v2,map_pars_fragment:y2,map_particle_fragment:_2,map_particle_pars_fragment:M2,metalnessmap_fragment:E2,metalnessmap_pars_fragment:S2,morphinstance_vertex:b2,morphcolor_vertex:T2,morphnormal_vertex:w2,morphtarget_pars_vertex:R2,morphtarget_vertex:A2,normal_fragment_begin:C2,normal_fragment_maps:P2,normal_pars_fragment:I2,normal_pars_vertex:D2,normal_vertex:L2,normalmap_pars_fragment:N2,clearcoat_normal_fragment_begin:U2,clearcoat_normal_fragment_maps:F2,clearcoat_pars_fragment:O2,iridescence_pars_fragment:B2,opaque_fragment:H2,packing:z2,premultiplied_alpha_fragment:G2,project_vertex:k2,dithering_fragment:V2,dithering_pars_fragment:W2,roughnessmap_fragment:X2,roughnessmap_pars_fragment:Y2,shadowmap_pars_fragment:q2,shadowmap_pars_vertex:Z2,shadowmap_vertex:$2,shadowmask_pars_fragment:J2,skinbase_vertex:K2,skinning_pars_vertex:Q2,skinning_vertex:j2,skinnormal_vertex:ex,specularmap_fragment:tx,specularmap_pars_fragment:nx,tonemapping_fragment:ix,tonemapping_pars_fragment:sx,transmission_fragment:rx,transmission_pars_fragment:ax,uv_pars_fragment:ox,uv_pars_vertex:lx,uv_vertex:cx,worldpos_vertex:ux,background_vert:hx,background_frag:fx,backgroundCube_vert:dx,backgroundCube_frag:px,cube_vert:mx,cube_frag:gx,depth_vert:xx,depth_frag:vx,distance_vert:yx,distance_frag:_x,equirect_vert:Mx,equirect_frag:Ex,linedashed_vert:Sx,linedashed_frag:bx,meshbasic_vert:Tx,meshbasic_frag:wx,meshlambert_vert:Rx,meshlambert_frag:Ax,meshmatcap_vert:Cx,meshmatcap_frag:Px,meshnormal_vert:Ix,meshnormal_frag:Dx,meshphong_vert:Lx,meshphong_frag:Nx,meshphysical_vert:Ux,meshphysical_frag:Fx,meshtoon_vert:Ox,meshtoon_frag:Bx,points_vert:Hx,points_frag:zx,shadow_vert:Gx,shadow_frag:kx,sprite_vert:Vx,sprite_frag:Wx},Bt={common:{diffuse:{value:new xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new un},alphaMap:{value:null},alphaMapTransform:{value:new un},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new un}},envmap:{envMap:{value:null},envMapRotation:{value:new un},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new un}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new un}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new un},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new un},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new un},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new un}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new un}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new un}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new F},probesMax:{value:new F},probesResolution:{value:new F}},points:{diffuse:{value:new xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new un},alphaTest:{value:0},uvTransform:{value:new un}},sprite:{diffuse:{value:new xt(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new un},alphaMap:{value:null},alphaMapTransform:{value:new un},alphaTest:{value:0}}},Br={basic:{uniforms:ms([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.fog]),vertexShader:mn.meshbasic_vert,fragmentShader:mn.meshbasic_frag},lambert:{uniforms:ms([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new xt(0)},envMapIntensity:{value:1}}]),vertexShader:mn.meshlambert_vert,fragmentShader:mn.meshlambert_frag},phong:{uniforms:ms([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new xt(0)},specular:{value:new xt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:mn.meshphong_vert,fragmentShader:mn.meshphong_frag},standard:{uniforms:ms([Bt.common,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.roughnessmap,Bt.metalnessmap,Bt.fog,Bt.lights,{emissive:{value:new xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mn.meshphysical_vert,fragmentShader:mn.meshphysical_frag},toon:{uniforms:ms([Bt.common,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.gradientmap,Bt.fog,Bt.lights,{emissive:{value:new xt(0)}}]),vertexShader:mn.meshtoon_vert,fragmentShader:mn.meshtoon_frag},matcap:{uniforms:ms([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,{matcap:{value:null}}]),vertexShader:mn.meshmatcap_vert,fragmentShader:mn.meshmatcap_frag},points:{uniforms:ms([Bt.points,Bt.fog]),vertexShader:mn.points_vert,fragmentShader:mn.points_frag},dashed:{uniforms:ms([Bt.common,Bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mn.linedashed_vert,fragmentShader:mn.linedashed_frag},depth:{uniforms:ms([Bt.common,Bt.displacementmap]),vertexShader:mn.depth_vert,fragmentShader:mn.depth_frag},normal:{uniforms:ms([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,{opacity:{value:1}}]),vertexShader:mn.meshnormal_vert,fragmentShader:mn.meshnormal_frag},sprite:{uniforms:ms([Bt.sprite,Bt.fog]),vertexShader:mn.sprite_vert,fragmentShader:mn.sprite_frag},background:{uniforms:{uvTransform:{value:new un},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mn.background_vert,fragmentShader:mn.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new un}},vertexShader:mn.backgroundCube_vert,fragmentShader:mn.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mn.cube_vert,fragmentShader:mn.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mn.equirect_vert,fragmentShader:mn.equirect_frag},distance:{uniforms:ms([Bt.common,Bt.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mn.distance_vert,fragmentShader:mn.distance_frag},shadow:{uniforms:ms([Bt.lights,Bt.fog,{color:{value:new xt(0)},opacity:{value:1}}]),vertexShader:mn.shadow_vert,fragmentShader:mn.shadow_frag}};Br.physical={uniforms:ms([Br.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new un},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new un},clearcoatNormalScale:{value:new tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new un},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new un},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new un},sheen:{value:0},sheenColor:{value:new xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new un},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new un},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new un},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new un},attenuationDistance:{value:0},attenuationColor:{value:new xt(0)},specularColor:{value:new xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new un},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new un},anisotropyVector:{value:new tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new un}}]),vertexShader:mn.meshphysical_vert,fragmentShader:mn.meshphysical_frag};var wu={r:0,b:0,g:0},Xx=new zt,Zp=new un;Zp.set(-1,0,0,0,1,0,0,0,1);function Yx(i,e,t,n,s,r){let a=new xt(0),o=s===!0?0:1,c,l,h=null,d=0,p=null;function u(M){let b=M.isScene===!0?M.background:null;if(b&&b.isTexture){let y=M.backgroundBlurriness>0;b=e.get(b,y)}return b}function f(M){let b=!1,y=u(M);y===null?g(a,o):y&&y.isColor&&(g(y,1),b=!0);let _=i.xr.getEnvironmentBlendMode();_==="additive"?t.buffers.color.setClear(0,0,0,1,r):_==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(M,b){let y=u(b);y&&(y.isCubeTexture||y.mapping===Zl)?(l===void 0&&(l=new Fe(new Sn(1,1,1),new Cn({name:"BackgroundCubeMaterial",uniforms:Va(Br.backgroundCube.uniforms),vertexShader:Br.backgroundCube.vertexShader,fragmentShader:Br.backgroundCube.fragmentShader,side:es,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(_,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Xx.makeRotationFromEuler(b.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Zp),l.material.toneMapped=wn.getTransfer(y.colorSpace)!==Ln,(h!==y||d!==y.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,p=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Fe(new an(2,2),new Cn({name:"BackgroundMaterial",uniforms:Va(Br.background.uniforms),vertexShader:Br.background.vertexShader,fragmentShader:Br.background.fragmentShader,side:ya,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=wn.getTransfer(y.colorSpace)!==Ln,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,p=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function g(M,b){M.getRGB(wu,lf(i)),t.buffers.color.setClear(wu.r,wu.g,wu.b,b,r)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,b=1){a.set(M),o=b,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,g(a,o)},render:f,addToRenderList:x,dispose:m}}function qx(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null),r=s,a=!1;function o(B,T,U,I,G){let j=!1,q=d(B,I,U,T);r!==q&&(r=q,l(r.object)),j=u(B,I,U,G),j&&f(B,I,U,G),G!==null&&e.update(G,i.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,y(B,T,U,I),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function c(){return i.createVertexArray()}function l(B){return i.bindVertexArray(B)}function h(B){return i.deleteVertexArray(B)}function d(B,T,U,I){let G=I.wireframe===!0,j=n[T.id];j===void 0&&(j={},n[T.id]=j);let q=B.isInstancedMesh===!0?B.id:0,Y=j[q];Y===void 0&&(Y={},j[q]=Y);let V=Y[U.id];V===void 0&&(V={},Y[U.id]=V);let W=V[G];return W===void 0&&(W=p(c()),V[G]=W),W}function p(B){let T=[],U=[],I=[];for(let G=0;G<t;G++)T[G]=0,U[G]=0,I[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:U,attributeDivisors:I,object:B,attributes:{},index:null}}function u(B,T,U,I){let G=r.attributes,j=T.attributes,q=0,Y=U.getAttributes();for(let V in Y)if(Y[V].location>=0){let Q=G[V],be=j[V];if(be===void 0&&(V==="instanceMatrix"&&B.instanceMatrix&&(be=B.instanceMatrix),V==="instanceColor"&&B.instanceColor&&(be=B.instanceColor)),Q===void 0||Q.attribute!==be||be&&Q.data!==be.data)return!0;q++}return r.attributesNum!==q||r.index!==I}function f(B,T,U,I){let G={},j=T.attributes,q=0,Y=U.getAttributes();for(let V in Y)if(Y[V].location>=0){let Q=j[V];Q===void 0&&(V==="instanceMatrix"&&B.instanceMatrix&&(Q=B.instanceMatrix),V==="instanceColor"&&B.instanceColor&&(Q=B.instanceColor));let be={};be.attribute=Q,Q&&Q.data&&(be.data=Q.data),G[V]=be,q++}r.attributes=G,r.attributesNum=q,r.index=I}function x(){let B=r.newAttributes;for(let T=0,U=B.length;T<U;T++)B[T]=0}function g(B){m(B,0)}function m(B,T){let U=r.newAttributes,I=r.enabledAttributes,G=r.attributeDivisors;U[B]=1,I[B]===0&&(i.enableVertexAttribArray(B),I[B]=1),G[B]!==T&&(i.vertexAttribDivisor(B,T),G[B]=T)}function M(){let B=r.newAttributes,T=r.enabledAttributes;for(let U=0,I=T.length;U<I;U++)T[U]!==B[U]&&(i.disableVertexAttribArray(U),T[U]=0)}function b(B,T,U,I,G,j,q){q===!0?i.vertexAttribIPointer(B,T,U,G,j):i.vertexAttribPointer(B,T,U,I,G,j)}function y(B,T,U,I){x();let G=I.attributes,j=U.getAttributes(),q=T.defaultAttributeValues;for(let Y in j){let V=j[Y];if(V.location>=0){let W=G[Y];if(W===void 0&&(Y==="instanceMatrix"&&B.instanceMatrix&&(W=B.instanceMatrix),Y==="instanceColor"&&B.instanceColor&&(W=B.instanceColor)),W!==void 0){let Q=W.normalized,be=W.itemSize,Ve=e.get(W);if(Ve===void 0)continue;let Ne=Ve.buffer,rt=Ve.type,Et=Ve.bytesPerElement,he=rt===i.INT||rt===i.UNSIGNED_INT||W.gpuType===G0;if(W.isInterleavedBufferAttribute){let Se=W.data,Oe=Se.stride,Re=W.offset;if(Se.isInstancedInterleavedBuffer){for(let Ye=0;Ye<V.locationSize;Ye++)m(V.location+Ye,Se.meshPerAttribute);B.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let Ye=0;Ye<V.locationSize;Ye++)g(V.location+Ye);i.bindBuffer(i.ARRAY_BUFFER,Ne);for(let Ye=0;Ye<V.locationSize;Ye++)b(V.location+Ye,be/V.locationSize,rt,Q,Oe*Et,(Re+be/V.locationSize*Ye)*Et,he)}else{if(W.isInstancedBufferAttribute){for(let Se=0;Se<V.locationSize;Se++)m(V.location+Se,W.meshPerAttribute);B.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let Se=0;Se<V.locationSize;Se++)g(V.location+Se);i.bindBuffer(i.ARRAY_BUFFER,Ne);for(let Se=0;Se<V.locationSize;Se++)b(V.location+Se,be/V.locationSize,rt,Q,be*Et,be/V.locationSize*Se*Et,he)}}else if(q!==void 0){let Q=q[Y];if(Q!==void 0)switch(Q.length){case 2:i.vertexAttrib2fv(V.location,Q);break;case 3:i.vertexAttrib3fv(V.location,Q);break;case 4:i.vertexAttrib4fv(V.location,Q);break;default:i.vertexAttrib1fv(V.location,Q)}}}}M()}function _(){R();for(let B in n){let T=n[B];for(let U in T){let I=T[U];for(let G in I){let j=I[G];for(let q in j)h(j[q].object),delete j[q];delete I[G]}}delete n[B]}}function w(B){if(n[B.id]===void 0)return;let T=n[B.id];for(let U in T){let I=T[U];for(let G in I){let j=I[G];for(let q in j)h(j[q].object),delete j[q];delete I[G]}}delete n[B.id]}function A(B){for(let T in n){let U=n[T];for(let I in U){let G=U[I];if(G[B.id]===void 0)continue;let j=G[B.id];for(let q in j)h(j[q].object),delete j[q];delete G[B.id]}}}function v(B){for(let T in n){let U=n[T],I=B.isInstancedMesh===!0?B.id:0,G=U[I];if(G!==void 0){for(let j in G){let q=G[j];for(let Y in q)h(q[Y].object),delete q[Y];delete G[j]}delete U[I],Object.keys(U).length===0&&delete n[T]}}}function R(){P(),a=!0,r!==s&&(r=s,l(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:R,resetDefaultState:P,dispose:_,releaseStatesOfGeometry:w,releaseStatesOfObject:v,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:g,disableUnusedAttributes:M}}function Zx(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function o(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let p=0;for(let u=0;u<h;u++)p+=l[u];t.update(p,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function $x(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==rs&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let v=A===yi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==zi&&A!==js&&!v&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(Qt("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let d=t.logarithmicDepthBuffer===!0,p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&p===!1&&Qt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),_=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:p,maxTextures:u,maxVertexTextures:f,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:M,maxVaryings:b,maxFragmentUniforms:y,maxSamples:_,samples:w}}function Jx(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Ds,o=new un,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){let u=d.length!==0||p||n!==0||s;return s=p,n=d.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,p){t=h(d,p,0)},this.setState=function(d,p,u){let f=d.clippingPlanes,x=d.clipIntersection,g=d.clipShadows,m=i.get(d);if(!s||f===null||f.length===0||r&&!g)r?h(null):l();else{let M=r?0:n,b=M*4,y=m.clippingState||null;c.value=y,y=h(f,p,b,u);for(let _=0;_!==b;++_)y[_]=t[_];m.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,p,u,f){let x=d!==null?d.length:0,g=null;if(x!==0){if(g=c.value,f!==!0||g===null){let m=u+x*4,M=p.matrixWorldInverse;o.getNormalMatrix(M),(g===null||g.length<m)&&(g=new Float32Array(m));for(let b=0,y=u;b!==x;++b,y+=4)a.copy(d[b]).applyMatrix4(M,o),a.normal.toArray(g,y),g[y+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}var Oo=4,Kx=6,Qx=20,jx=256,ic=new va,wp=new xt,xf=null,vf=0,yf=0,_f=!1,ev=new F,Wa=new F,Ho=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=ev}=r;xf=this._renderer.getRenderTarget(),vf=this._renderer.getActiveCubeFace(),yf=this._renderer.getActiveMipmapLevel(),_f=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ap(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(xf,vf,yf),this._renderer.xr.enabled=_f,e.scissorTest=!1,Fo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ea||e.mapping===ka?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),xf=this._renderer.getRenderTarget(),vf=this._renderer.getActiveCubeFace(),yf=this._renderer.getActiveMipmapLevel(),_f=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Li,minFilter:Li,generateMipmaps:!1,type:yi,format:rs,colorSpace:ul,depthBuffer:!1},s=Rp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rp(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=tv(r)),this._blurMaterial=iv(r,e,t),this._ggxMaterial=nv(r,e,t)}return s}_compileMaterial(e){let t=new Fe(new tn,e);this._renderer.compile(t,ic)}_sceneToCubeUV(e,t,n,s,r){let c=new $i(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,p=d.autoClear,u=d.toneMapping;d.getClearColor(wp),d.toneMapping=Us,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Fe(new Sn,new Hn({name:"PMREM.Background",side:es,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,g=x.material,m=!1,M=e.background;M?M.isColor&&(g.color.copy(M),e.background=null,m=!0):(g.color.copy(wp),m=!0);for(let b=0;b<6;b++){let y=b%3;y===0?(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[b],r.y,r.z)):y===1?(c.up.set(0,0,l[b]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[b],r.z)):(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[b]));let _=this._cubeSize;Fo(s,y*_,b>2?_:0,_,_),d.setRenderTarget(s),m&&d.render(x,c),d.render(e,c)}d.toneMapping=u,d.autoClear=p,e.background=M}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Ea||e.mapping===ka;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ap());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;Fo(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,ic)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,l=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(l*l-h*h),p=l*1.25,u=d*p,{_lodMax:f}=this,x=this._sizeLods[n],g=3*x*(n>f-Oo?n-f+Oo:0),m=4*(this._cubeSize-x);c.envMap.value=e.texture,c.roughness.value=u,c.mipInt.value=f-t,Fo(r,g,m,3*x,2*x),s.setRenderTarget(r),s.render(o,ic),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=f-n,Fo(e,g,m,3*x,2*x),s.setRenderTarget(e),s.render(o,ic)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[s];c.material=o;let l=o.uniforms;l.envMap.value=e.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-Oo?s-this._lodMax+Oo:0),p=4*(this._cubeSize-h);Fo(t,d,p,3*h,2*h),a.setRenderTarget(t),a.render(c,ic)}};function tv(i){let e=[],t=[],n=i,s=i-Oo+1+Kx;for(let r=0;r<s;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),c=-o,l=1+o,h=[c,c,l,c,l,l,c,c,l,l,c,l],d=6,p=6,u=3,f=new Float32Array(u*p*d),x=new Float32Array(u*p*d);for(let m=0;m<d;m++){let M=m%3*2/3-1,b=m>2?0:-1,y=[M,b,0,M+2/3,b,0,M+2/3,b+1,0,M,b,0,M+2/3,b+1,0,M,b+1,0];f.set(y,u*p*m);for(let _=0;_<p;_++){let w=h[_*2]*2-1,A=h[_*2+1]*2-1;m===0?Wa.set(1,A,w):m===1?Wa.set(-w,1,-A):m===2?Wa.set(-w,A,1):m===3?Wa.set(-1,A,-w):m===4?Wa.set(-w,-1,A):Wa.set(w,A,-1),Wa.toArray(x,(m*p+_)*u)}}let g=new tn;g.setAttribute("position",new Jt(f,u)),g.setAttribute("outputDirection",new Jt(x,u)),t.push(new Fe(g,null)),n>Oo&&n--}return{lodMeshes:t,sizeLods:e}}function Rp(i,e,t){let n=new ai(i,e,t);return n.texture.mapping=Zl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Fo(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function nv(i,e,t){return new Cn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:jx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Pu(),fragmentShader:`

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
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function iv(i,e,t){return new Cn({name:"SphericalGaussianBlur",defines:{SAMPLES:Qx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Pu(),fragmentShader:`

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
	`}var Au=class extends ai{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new _l(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Sn(5,5,5),r=new Cn({name:"CubemapFromEquirect",uniforms:Va(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:es,blending:Ai});r.uniforms.tEquirect.value=t;let a=new Fe(s,r),o=t.minFilter;return t.minFilter===Ur&&(t.minFilter=Li),new N0(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};function sv(i){let e=new WeakMap,t=new WeakMap,n=null;function s(p,u=!1){return p==null?null:u?a(p):r(p)}function r(p){if(p&&p.isTexture){let u=p.mapping;if(u===B0||u===H0)if(e.has(p)){let f=e.get(p).texture;return o(f,p.mapping)}else{let f=p.image;if(f&&f.height>0){let x=new Au(f.height);return x.fromEquirectangularTexture(i,p),e.set(p,x),p.addEventListener("dispose",l),o(x.texture,p.mapping)}else return null}}return p}function a(p){if(p&&p.isTexture){let u=p.mapping,f=u===B0||u===H0,x=u===Ea||u===ka;if(f||x){let g=t.get(p),m=g!==void 0?g.texture.pmremVersion:0;if(p.isRenderTargetTexture&&p.pmremVersion!==m)return n===null&&(n=new Ho(i)),g=f?n.fromEquirectangular(p,g):n.fromCubemap(p,g),g.texture.pmremVersion=p.pmremVersion,t.set(p,g),g.texture;if(g!==void 0)return g.texture;{let M=p.image;return f&&M&&M.height>0||x&&M&&c(M)?(n===null&&(n=new Ho(i)),g=f?n.fromEquirectangular(p):n.fromCubemap(p),g.texture.pmremVersion=p.pmremVersion,t.set(p,g),p.addEventListener("dispose",h),g.texture):null}}}return p}function o(p,u){return u===B0?p.mapping=Ea:u===H0&&(p.mapping=ka),p}function c(p){let u=0,f=6;for(let x=0;x<f;x++)p[x]!==void 0&&u++;return u===f}function l(p){let u=p.target;u.removeEventListener("dispose",l);let f=e.get(u);f!==void 0&&(e.delete(u),f.dispose())}function h(p){let u=p.target;u.removeEventListener("dispose",h);let f=t.get(u);f!==void 0&&(t.delete(u),f.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function rv(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Na("WebGLRenderer: "+n+" extension not supported."),s}}}function av(i,e,t,n){let s={},r=new WeakMap;function a(d){let p=d.target;p.index!==null&&e.remove(p.index);for(let f in p.attributes)e.remove(p.attributes[f]);p.removeEventListener("dispose",a),delete s[p.id];let u=r.get(p);u&&(e.remove(u),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function o(d,p){return s[p.id]===!0||(p.addEventListener("dispose",a),s[p.id]=!0,t.memory.geometries++),p}function c(d){let p=d.attributes;for(let u in p)e.update(p[u],i.ARRAY_BUFFER)}function l(d){let p=[],u=d.index,f=d.attributes.position,x=0;if(f===void 0)return;if(u!==null){let M=u.array;x=u.version;for(let b=0,y=M.length;b<y;b+=3){let _=M[b+0],w=M[b+1],A=M[b+2];p.push(_,w,w,A,A,_)}}else{let M=f.array;x=f.version;for(let b=0,y=M.length/3-1;b<y;b+=3){let _=b+0,w=b+1,A=b+2;p.push(_,w,w,A,A,_)}}let g=new(f.count>=65535?vl:xl)(p,1);g.version=x;let m=r.get(d);m&&e.remove(m),r.set(d,g)}function h(d){let p=r.get(d);if(p){let u=d.index;u!==null&&p.version<u.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function ov(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,p){i.drawElements(n,p,r,d*a),t.update(p,n,1)}function l(d,p,u){u!==0&&(i.drawElementsInstanced(n,p,r,d*a,u),t.update(p,n,u))}function h(d,p,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,u);let x=0;for(let g=0;g<u;g++)x+=p[g];t.update(x,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function lv(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:en("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function cv(i,e,t){let n=new WeakMap,s=new ri;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,p=n.get(o);if(p===void 0||p.count!==d){let R=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",R)};p!==void 0&&p.texture.dispose();let u=o.morphAttributes.position!==void 0,f=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],b=0;u===!0&&(b=1),f===!0&&(b=2),x===!0&&(b=3);let y=o.attributes.position.count*b,_=1;y>e.maxTextureSize&&(_=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let w=new Float32Array(y*_*4*d),A=new ml(w,y,_,d);A.type=js,A.needsUpdate=!0;let v=b*4;for(let P=0;P<d;P++){let B=g[P],T=m[P],U=M[P],I=y*_*4*P;for(let G=0;G<B.count;G++){let j=G*v;u===!0&&(s.fromBufferAttribute(B,G),w[I+j+0]=s.x,w[I+j+1]=s.y,w[I+j+2]=s.z,w[I+j+3]=0),f===!0&&(s.fromBufferAttribute(T,G),w[I+j+4]=s.x,w[I+j+5]=s.y,w[I+j+6]=s.z,w[I+j+7]=0),x===!0&&(s.fromBufferAttribute(U,G),w[I+j+8]=s.x,w[I+j+9]=s.y,w[I+j+10]=s.z,w[I+j+11]=U.itemSize===4?s.w:1)}}p={count:d,texture:A,size:new tt(y,_)},n.set(o,p),o.addEventListener("dispose",R)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let u=0;for(let x=0;x<l.length;x++)u+=l[x];let f=o.morphTargetsRelative?1:1-u;c.getUniforms().setValue(i,"morphTargetBaseInfluence",f),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:r}}function uv(i,e,t,n,s){let r=new WeakMap;function a(l){let h=s.render.frame,d=l.geometry,p=e.get(l,d);if(r.get(p)!==h&&(e.update(p),r.set(p,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let u=l.skeleton;r.get(u)!==h&&(u.update(),r.set(u,h))}return p}function o(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var hv={[kl]:"LINEAR_TONE_MAPPING",[Vl]:"REINHARD_TONE_MAPPING",[Wl]:"CINEON_TONE_MAPPING",[Ma]:"ACES_FILMIC_TONE_MAPPING",[Yl]:"AGX_TONE_MAPPING",[ql]:"NEUTRAL_TONE_MAPPING",[Xl]:"CUSTOM_TONE_MAPPING"};function fv(i,e,t,n,s,r){let a=new ai(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=new tn;l.setAttribute("position",new qt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new qt([0,2,0,0,2,0],2));let h=new Po({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Fe(l,h),p=new va(-1,1,1,-1,0,1),u=null,f=null,x=!1,g,m=null,M=[],b=!1;this.setSize=function(y,_){a.setSize(y,_),o!==null&&o.setSize(y,_),c!==null&&c.setSize(y,_);for(let w=0;w<M.length;w++){let A=M[w];A.setSize&&A.setSize(y,_)}},this.setEffects=function(y){M=y,b=M.length>0&&M[0].isRenderPass===!0;let _=a.width,w=a.height;M.length>0&&o===null&&(o=new ai(_,w,{type:yi,depthBuffer:!1,stencilBuffer:!1}),c=new ai(_,w,{type:yi,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<M.length;A++){let v=M[A];v.setSize&&v.setSize(_,w)}},this.begin=function(y,_){if(x||y.toneMapping===Us&&M.length===0)return!1;if(m=_,_!==null){let w=_.width,A=_.height;(a.width!==w||a.height!==A)&&this.setSize(w,A)}return b===!1&&y.setRenderTarget(a),g=y.toneMapping,y.toneMapping=Us,!0},this.hasRenderPass=function(){return b},this.end=function(y,_){y.toneMapping=g,x=!0;let w=a,A=o;for(let v=0;v<M.length;v++){let R=M[v];R.enabled!==!1&&(R.render(y,A,w,_),R.needsSwap!==!1&&(w=A,A=A===o?c:o))}if(u!==y.outputColorSpace||f!==y.toneMapping){u=y.outputColorSpace,f=y.toneMapping,h.defines={},wn.getTransfer(u)===Ln&&(h.defines.SRGB_TRANSFER="");let v=hv[f];v&&(h.defines[v]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=w.texture,y.setRenderTarget(m),y.render(d,p),m=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),h.dispose()}}var $p=new Ms,Sf=new Js(1,1),Jp=new ml,Kp=new m0,Qp=new _l,Pp=[],Ip=[],Dp=new Float32Array(16),Lp=new Float32Array(9),Np=new Float32Array(4);function zo(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Pp[s];if(r===void 0&&(r=new Float32Array(s),Pp[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Gi(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function ki(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Iu(i,e){let t=Ip[e];t===void 0&&(t=new Int32Array(e),Ip[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function dv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function pv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gi(t,e))return;i.uniform2fv(this.addr,e),ki(t,e)}}function mv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Gi(t,e))return;i.uniform3fv(this.addr,e),ki(t,e)}}function gv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gi(t,e))return;i.uniform4fv(this.addr,e),ki(t,e)}}function xv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Gi(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),ki(t,e)}else{if(Gi(t,n))return;Np.set(n),i.uniformMatrix2fv(this.addr,!1,Np),ki(t,n)}}function vv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Gi(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),ki(t,e)}else{if(Gi(t,n))return;Lp.set(n),i.uniformMatrix3fv(this.addr,!1,Lp),ki(t,n)}}function yv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Gi(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),ki(t,e)}else{if(Gi(t,n))return;Dp.set(n),i.uniformMatrix4fv(this.addr,!1,Dp),ki(t,n)}}function _v(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Mv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gi(t,e))return;i.uniform2iv(this.addr,e),ki(t,e)}}function Ev(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gi(t,e))return;i.uniform3iv(this.addr,e),ki(t,e)}}function Sv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gi(t,e))return;i.uniform4iv(this.addr,e),ki(t,e)}}function bv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Tv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gi(t,e))return;i.uniform2uiv(this.addr,e),ki(t,e)}}function wv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gi(t,e))return;i.uniform3uiv(this.addr,e),ki(t,e)}}function Rv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gi(t,e))return;i.uniform4uiv(this.addr,e),ki(t,e)}}function Av(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Sf.compareFunction=t.isReversedDepthBuffer()?Tu:bu,r=Sf):r=$p,t.setTexture2D(e||r,s)}function Cv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Kp,s)}function Pv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Qp,s)}function Iv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Jp,s)}function Dv(i){switch(i){case 5126:return dv;case 35664:return pv;case 35665:return mv;case 35666:return gv;case 35674:return xv;case 35675:return vv;case 35676:return yv;case 5124:case 35670:return _v;case 35667:case 35671:return Mv;case 35668:case 35672:return Ev;case 35669:case 35673:return Sv;case 5125:return bv;case 36294:return Tv;case 36295:return wv;case 36296:return Rv;case 35678:case 36198:case 36298:case 36306:case 35682:return Av;case 35679:case 36299:case 36307:return Cv;case 35680:case 36300:case 36308:case 36293:return Pv;case 36289:case 36303:case 36311:case 36292:return Iv}}function Lv(i,e){i.uniform1fv(this.addr,e)}function Nv(i,e){let t=zo(e,this.size,2);i.uniform2fv(this.addr,t)}function Uv(i,e){let t=zo(e,this.size,3);i.uniform3fv(this.addr,t)}function Fv(i,e){let t=zo(e,this.size,4);i.uniform4fv(this.addr,t)}function Ov(i,e){let t=zo(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Bv(i,e){let t=zo(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Hv(i,e){let t=zo(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function zv(i,e){i.uniform1iv(this.addr,e)}function Gv(i,e){i.uniform2iv(this.addr,e)}function kv(i,e){i.uniform3iv(this.addr,e)}function Vv(i,e){i.uniform4iv(this.addr,e)}function Wv(i,e){i.uniform1uiv(this.addr,e)}function Xv(i,e){i.uniform2uiv(this.addr,e)}function Yv(i,e){i.uniform3uiv(this.addr,e)}function qv(i,e){i.uniform4uiv(this.addr,e)}function Zv(i,e,t){let n=this.cache,s=e.length,r=Iu(t,s);Gi(n,r)||(i.uniform1iv(this.addr,r),ki(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Sf:a=$p;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function $v(i,e,t){let n=this.cache,s=e.length,r=Iu(t,s);Gi(n,r)||(i.uniform1iv(this.addr,r),ki(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Kp,r[a])}function Jv(i,e,t){let n=this.cache,s=e.length,r=Iu(t,s);Gi(n,r)||(i.uniform1iv(this.addr,r),ki(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Qp,r[a])}function Kv(i,e,t){let n=this.cache,s=e.length,r=Iu(t,s);Gi(n,r)||(i.uniform1iv(this.addr,r),ki(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Jp,r[a])}function Qv(i){switch(i){case 5126:return Lv;case 35664:return Nv;case 35665:return Uv;case 35666:return Fv;case 35674:return Ov;case 35675:return Bv;case 35676:return Hv;case 5124:case 35670:return zv;case 35667:case 35671:return Gv;case 35668:case 35672:return kv;case 35669:case 35673:return Vv;case 5125:return Wv;case 36294:return Xv;case 36295:return Yv;case 36296:return qv;case 35678:case 36198:case 36298:case 36306:case 35682:return Zv;case 35679:case 36299:case 36307:return $v;case 35680:case 36300:case 36308:case 36293:return Jv;case 36289:case 36303:case 36311:case 36292:return Kv}}var bf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Dv(t.type)}},Tf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Qv(t.type)}},wf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Mf=/(\w+)(\])?(\[|\.)?/g;function Up(i,e){i.seq.push(e),i.map[e.id]=e}function jv(i,e,t){let n=i.name,s=n.length;for(Mf.lastIndex=0;;){let r=Mf.exec(n),a=Mf.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Up(t,l===void 0?new bf(o,i,e):new Tf(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new wf(o),Up(t,d)),t=d}}}var Bo=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);jv(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Fp(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var ey=37297,ty=0;function ny(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Op=new un;function iy(i){wn._getMatrix(Op,wn.workingColorSpace,i);let e=`mat3( ${Op.elements.map(t=>t.toFixed(4))} )`;switch(wn.getTransfer(i)){case hl:return[e,"LinearTransferOETF"];case Ln:return[e,"sRGBTransferOETF"];default:return Qt("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Bp(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+ny(i.getShaderSource(e),o)}else return r}function sy(i,e){let t=iy(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var ry={[kl]:"Linear",[Vl]:"Reinhard",[Wl]:"Cineon",[Ma]:"ACESFilmic",[Yl]:"AgX",[ql]:"Neutral",[Xl]:"Custom"};function ay(i,e){let t=ry[e];return t===void 0?(Qt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ru=new F;function oy(){wn.getLuminanceCoefficients(Ru);let i=Ru.x.toFixed(4),e=Ru.y.toFixed(4),t=Ru.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ly(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(rc).join(`
`)}function cy(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function uy(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function rc(i){return i!==""}function Hp(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var hy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rf(i){return i.replace(hy,dy)}var fy=new Map;function dy(i,e){let t=mn[e];if(t===void 0){let n=fy.get(e);if(n!==void 0)t=mn[n],Qt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Rf(t)}var py=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gp(i){return i.replace(py,my)}function my(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function kp(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var gy={[za]:"SHADOWMAP_TYPE_PCF",[No]:"SHADOWMAP_TYPE_VSM"};function xy(i){return gy[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var vy={[Ea]:"ENVMAP_TYPE_CUBE",[ka]:"ENVMAP_TYPE_CUBE",[Zl]:"ENVMAP_TYPE_CUBE_UV"};function yy(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":vy[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var _y={[ka]:"ENVMAP_MODE_REFRACTION"};function My(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":_y[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Ey={[$h]:"ENVMAP_BLENDING_MULTIPLY",[np]:"ENVMAP_BLENDING_MIX",[ip]:"ENVMAP_BLENDING_ADD"};function Sy(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Ey[i.combine]||"ENVMAP_BLENDING_NONE"}function by(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Ty(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=xy(t),l=yy(t),h=My(t),d=Sy(t),p=by(t),u=ly(t),f=cy(r),x=s.createProgram(),g,m,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(rc).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(rc).join(`
`),m.length>0&&(m+=`
`)):(g=[kp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rc).join(`
`),m=[kp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Us?"#define TONE_MAPPING":"",t.toneMapping!==Us?mn.tonemapping_pars_fragment:"",t.toneMapping!==Us?ay("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",mn.colorspace_pars_fragment,sy("linearToOutputTexel",t.outputColorSpace),oy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(rc).join(`
`)),a=Rf(a),a=Hp(a,t),a=zp(a,t),o=Rf(o),o=Hp(o,t),o=zp(o,t),a=Gp(a),o=Gp(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===af?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===af?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let b=M+g+a,y=M+m+o,_=Fp(s,s.VERTEX_SHADER,b),w=Fp(s,s.FRAGMENT_SHADER,y);s.attachShader(x,_),s.attachShader(x,w),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function A(B){if(i.debug.checkShaderErrors){let T=s.getProgramInfoLog(x)||"",U=s.getShaderInfoLog(_)||"",I=s.getShaderInfoLog(w)||"",G=T.trim(),j=U.trim(),q=I.trim(),Y=!0,V=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,_,w);else{let W=Bp(s,_,"vertex"),Q=Bp(s,w,"fragment");en("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+G+`
`+W+`
`+Q)}else G!==""?Qt("WebGLProgram: Program Info Log:",G):(j===""||q==="")&&(V=!1);V&&(B.diagnostics={runnable:Y,programLog:G,vertexShader:{log:j,prefix:g},fragmentShader:{log:q,prefix:m}})}s.deleteShader(_),s.deleteShader(w),v=new Bo(s,x),R=uy(s,x)}let v;this.getUniforms=function(){return v===void 0&&A(this),v};let R;this.getAttributes=function(){return R===void 0&&A(this),R};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(x,ey)),P},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ty++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=_,this.fragmentShader=w,this}var wy=0,Af=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Cf(e),t.set(e,n)),n}},Cf=class{constructor(e){this.id=wy++,this.code=e,this.usedTimes=0}};function Ry(i){return i===ba||i===ec||i===tc}function Ay(i,e,t,n,s,r){let a=new _o,o=new Af,c=new Set,l=[],h=new Map,d=n.logarithmicDepthBuffer,p=n.precision,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(v){return c.add(v),v===0?"uv":`uv${v}`}function x(v,R,P,B,T,U){let I=B.fog,G=T.geometry,j=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?B.environment:null,q=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,Y=e.get(v.envMap||j,q),V=Y&&Y.mapping===Zl?Y.image.height:null,W=u[v.type];v.precision!==null&&(p=n.getMaxPrecision(v.precision),p!==v.precision&&Qt("WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));let Q=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,be=Q!==void 0?Q.length:0,Ve=0;G.morphAttributes.position!==void 0&&(Ve=1),G.morphAttributes.normal!==void 0&&(Ve=2),G.morphAttributes.color!==void 0&&(Ve=3);let Ne,rt,Et,he;if(W){let Ge=Br[W];Ne=Ge.vertexShader,rt=Ge.fragmentShader}else{Ne=v.vertexShader,rt=v.fragmentShader;let Ge=o.getVertexShaderStage(v),dt=o.getFragmentShaderStage(v);o.update(v,Ge,dt),Et=Ge.id,he=dt.id}let Se=i.getRenderTarget(),Oe=i.state.buffers.depth.getReversed(),Re=T.isInstancedMesh===!0,Ye=T.isBatchedMesh===!0,ee=!!v.map,Je=!!v.matcap,oe=!!Y,xe=!!v.aoMap,ie=!!v.lightMap,de=!!v.bumpMap&&v.wireframe===!1,Me=!!v.normalMap,$e=!!v.displacementMap,qe=!!v.emissiveMap,ut=!!v.metalnessMap,lt=!!v.roughnessMap,J=v.anisotropy>0,It=v.clearcoat>0,At=v.dispersion>0,H=v.retroreflectivity>0,S=v.iridescence>0,fe=v.sheen>0,le=v.transmission>0,ye=J&&!!v.anisotropyMap,it=It&&!!v.clearcoatMap,st=It&&!!v.clearcoatNormalMap,Le=It&&!!v.clearcoatRoughnessMap,Ce=S&&!!v.iridescenceMap,Qe=S&&!!v.iridescenceThicknessMap,vt=fe&&!!v.sheenColorMap,N=fe&&!!v.sheenRoughnessMap,ae=!!v.specularMap,ue=!!v.specularColorMap,we=!!v.specularIntensityMap,ze=le&&!!v.transmissionMap,z=le&&!!v.thicknessMap,Ae=!!v.gradientMap,pe=!!v.alphaMap,Be=v.alphaTest>0,Ue=!!v.alphaHash,re=!!v.extensions,te=Us;v.toneMapped&&(Se===null||Se.isXRRenderTarget===!0)&&(te=i.toneMapping);let _e={shaderID:W,shaderType:v.type,shaderName:v.name,vertexShader:Ne,fragmentShader:rt,defines:v.defines,customVertexShaderID:Et,customFragmentShaderID:he,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,batching:Ye,batchingColor:Ye&&T._colorsTexture!==null,instancing:Re,instancingColor:Re&&T.instanceColor!==null,instancingMorph:Re&&T.morphTexture!==null,outputColorSpace:Se===null?i.outputColorSpace:Se.isXRRenderTarget===!0?Se.texture.colorSpace:wn.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:ee,matcap:Je,envMap:oe,envMapMode:oe&&Y.mapping,envMapCubeUVHeight:V,aoMap:xe,lightMap:ie,bumpMap:de,normalMap:Me,displacementMap:$e,emissiveMap:qe,normalMapObjectSpace:Me&&v.normalMapType===ap,normalMapTangentSpace:Me&&v.normalMapType===nc,packedNormalMap:Me&&v.normalMapType===nc&&Ry(v.normalMap.format),metalnessMap:ut,roughnessMap:lt,anisotropy:J,anisotropyMap:ye,clearcoat:It,clearcoatMap:it,clearcoatNormalMap:st,clearcoatRoughnessMap:Le,dispersion:At,retroreflection:H,iridescence:S,iridescenceMap:Ce,iridescenceThicknessMap:Qe,sheen:fe,sheenColorMap:vt,sheenRoughnessMap:N,specularMap:ae,specularColorMap:ue,specularIntensityMap:we,transmission:le,transmissionMap:ze,thicknessMap:z,gradientMap:Ae,opaque:v.transparent===!1&&v.blending===_a&&v.alphaToCoverage===!1,alphaMap:pe,alphaTest:Be,alphaHash:Ue,combine:v.combine,mapUv:ee&&f(v.map.channel),aoMapUv:xe&&f(v.aoMap.channel),lightMapUv:ie&&f(v.lightMap.channel),bumpMapUv:de&&f(v.bumpMap.channel),normalMapUv:Me&&f(v.normalMap.channel),displacementMapUv:$e&&f(v.displacementMap.channel),emissiveMapUv:qe&&f(v.emissiveMap.channel),metalnessMapUv:ut&&f(v.metalnessMap.channel),roughnessMapUv:lt&&f(v.roughnessMap.channel),anisotropyMapUv:ye&&f(v.anisotropyMap.channel),clearcoatMapUv:it&&f(v.clearcoatMap.channel),clearcoatNormalMapUv:st&&f(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Le&&f(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&f(v.iridescenceMap.channel),iridescenceThicknessMapUv:Qe&&f(v.iridescenceThicknessMap.channel),sheenColorMapUv:vt&&f(v.sheenColorMap.channel),sheenRoughnessMapUv:N&&f(v.sheenRoughnessMap.channel),specularMapUv:ae&&f(v.specularMap.channel),specularColorMapUv:ue&&f(v.specularColorMap.channel),specularIntensityMapUv:we&&f(v.specularIntensityMap.channel),transmissionMapUv:ze&&f(v.transmissionMap.channel),thicknessMapUv:z&&f(v.thicknessMap.channel),alphaMapUv:pe&&f(v.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Me||J),vertexNormals:!!G.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:T.isPoints===!0&&!!G.attributes.uv&&(ee||pe),fog:!!I,useFog:v.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||G.attributes.normal===void 0&&Me===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Oe,skinning:T.isSkinnedMesh===!0,hasPositionAttribute:G.attributes.position!==void 0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:Ve,numSunLights:R.sun.length,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numSunLightShadows:R.sunShadowMap.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numLightProbeGrids:U.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:te,decodeVideoTexture:ee&&v.map.isVideoTexture===!0&&wn.getTransfer(v.map.colorSpace)===Ln,decodeVideoTextureEmissive:qe&&v.emissiveMap.isVideoTexture===!0&&wn.getTransfer(v.emissiveMap.colorSpace)===Ln,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===oi,flipSided:v.side===es,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:re&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(re&&v.extensions.multiDraw===!0||Ye)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return _e.vertexUv1s=c.has(1),_e.vertexUv2s=c.has(2),_e.vertexUv3s=c.has(3),c.clear(),_e}function g(v){let R=[];if(v.shaderID?R.push(v.shaderID):(R.push(v.customVertexShaderID),R.push(v.customFragmentShaderID)),v.defines!==void 0)for(let P in v.defines)R.push(P),R.push(v.defines[P]);return v.isRawShaderMaterial===!1&&(m(R,v),M(R,v),R.push(i.outputColorSpace)),R.push(v.customProgramCacheKey),R.join()}function m(v,R){v.push(R.precision),v.push(R.outputColorSpace),v.push(R.envMapMode),v.push(R.envMapCubeUVHeight),v.push(R.mapUv),v.push(R.alphaMapUv),v.push(R.lightMapUv),v.push(R.aoMapUv),v.push(R.bumpMapUv),v.push(R.normalMapUv),v.push(R.displacementMapUv),v.push(R.emissiveMapUv),v.push(R.metalnessMapUv),v.push(R.roughnessMapUv),v.push(R.anisotropyMapUv),v.push(R.clearcoatMapUv),v.push(R.clearcoatNormalMapUv),v.push(R.clearcoatRoughnessMapUv),v.push(R.iridescenceMapUv),v.push(R.iridescenceThicknessMapUv),v.push(R.sheenColorMapUv),v.push(R.sheenRoughnessMapUv),v.push(R.specularMapUv),v.push(R.specularColorMapUv),v.push(R.specularIntensityMapUv),v.push(R.transmissionMapUv),v.push(R.thicknessMapUv),v.push(R.combine),v.push(R.fogExp2),v.push(R.sizeAttenuation),v.push(R.morphTargetsCount),v.push(R.morphAttributeCount),v.push(R.numSunLights),v.push(R.numDirLights),v.push(R.numPointLights),v.push(R.numSpotLights),v.push(R.numSpotLightMaps),v.push(R.numHemiLights),v.push(R.numRectAreaLights),v.push(R.numSunLightShadows),v.push(R.numDirLightShadows),v.push(R.numPointLightShadows),v.push(R.numSpotLightShadows),v.push(R.numSpotLightShadowsWithMaps),v.push(R.numLightProbes),v.push(R.shadowMapType),v.push(R.toneMapping),v.push(R.numClippingPlanes),v.push(R.numClipIntersection),v.push(R.depthPacking)}function M(v,R){a.disableAll(),R.instancing&&a.enable(0),R.instancingColor&&a.enable(1),R.instancingMorph&&a.enable(2),R.matcap&&a.enable(3),R.envMap&&a.enable(4),R.normalMapObjectSpace&&a.enable(5),R.normalMapTangentSpace&&a.enable(6),R.clearcoat&&a.enable(7),R.iridescence&&a.enable(8),R.alphaTest&&a.enable(9),R.vertexColors&&a.enable(10),R.vertexAlphas&&a.enable(11),R.vertexUv1s&&a.enable(12),R.vertexUv2s&&a.enable(13),R.vertexUv3s&&a.enable(14),R.vertexTangents&&a.enable(15),R.anisotropy&&a.enable(16),R.alphaHash&&a.enable(17),R.batching&&a.enable(18),R.dispersion&&a.enable(19),R.retroreflection&&a.enable(24),R.batchingColor&&a.enable(20),R.gradientMap&&a.enable(21),R.packedNormalMap&&a.enable(22),R.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),R.fog&&a.enable(0),R.useFog&&a.enable(1),R.flatShading&&a.enable(2),R.logarithmicDepthBuffer&&a.enable(3),R.reversedDepthBuffer&&a.enable(4),R.skinning&&a.enable(5),R.morphTargets&&a.enable(6),R.morphNormals&&a.enable(7),R.morphColors&&a.enable(8),R.premultipliedAlpha&&a.enable(9),R.shadowMapEnabled&&a.enable(10),R.doubleSided&&a.enable(11),R.flipSided&&a.enable(12),R.useDepthPacking&&a.enable(13),R.dithering&&a.enable(14),R.transmission&&a.enable(15),R.sheen&&a.enable(16),R.opaque&&a.enable(17),R.pointsUvs&&a.enable(18),R.decodeVideoTexture&&a.enable(19),R.decodeVideoTextureEmissive&&a.enable(20),R.alphaToCoverage&&a.enable(21),R.numLightProbeGrids>0&&a.enable(22),R.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function b(v){let R=u[v.type],P;if(R){let B=Br[R];P=Es.clone(B.uniforms)}else P=v.uniforms;return P}function y(v,R){let P=h.get(R);return P!==void 0?++P.usedTimes:(P=new Ty(i,R,v,s),l.push(P),h.set(R,P)),P}function _(v){if(--v.usedTimes===0){let R=l.indexOf(v);l[R]=l[l.length-1],l.pop(),h.delete(v.cacheKey),v.destroy()}}function w(v){o.remove(v)}function A(){o.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:b,acquireProgram:y,releaseProgram:_,releaseShaderCache:w,programs:l,dispose:A}}function Cy(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Py(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Vp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Wp(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(p){let u=0;return p.isInstancedMesh&&(u+=2),p.isSkinnedMesh&&(u+=1),u}function o(p,u,f,x,g,m){let M=i[e];return M===void 0?(M={id:p.id,object:p,geometry:u,material:f,materialVariant:a(p),groupOrder:x,renderOrder:p.renderOrder,z:g,group:m},i[e]=M):(M.id=p.id,M.object=p,M.geometry=u,M.material=f,M.materialVariant=a(p),M.groupOrder=x,M.renderOrder=p.renderOrder,M.z=g,M.group=m),e++,M}function c(p,u,f,x,g,m,M){M.reversedDepth===!0&&(g=-g);let b=o(p,u,f,x,g,m);f.transmission>0?n.push(b):f.transparent===!0?s.push(b):t.push(b)}function l(p,u,f,x,g,m){let M=o(p,u,f,x,g,m);f.transmission>0?n.unshift(M):f.transparent===!0?s.unshift(M):t.unshift(M)}function h(p,u){t.length>1&&t.sort(p||Py),n.length>1&&n.sort(u||Vp),s.length>1&&s.sort(u||Vp)}function d(){for(let p=e,u=i.length;p<u;p++){let f=i[p];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:d,sort:h}}function Iy(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Wp,i.set(n,[a])):s>=r.length?(a=new Wp,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Dy(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new F,color:new xt};break;case"SpotLight":t={position:new F,direction:new F,color:new xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new xt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new xt,groundColor:new xt};break;case"RectAreaLight":t={color:new xt,position:new F,halfWidth:new F,halfHeight:new F};break}return i[e.id]=t,t}}}function Ly(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Ny=0;function Uy(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Fy(i){let e=new Dy,t=Ly(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new F);let s=new F,r=new zt,a=new zt;function o(l){let h=0,d=0,p=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let u=0,f=0,x=0,g=0,m=0,M=0,b=0,y=0,_=0,w=0,A=0,v=0,R=0,P=0;l.sort(Uy);for(let T=0,U=l.length;T<U;T++){let I=l[T],G=I.color,j=I.intensity,q=I.distance,Y=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===ba?Y=I.shadow.map.texture:Y=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=G.r*j,d+=G.g*j,p+=G.b*j;else if(I.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(I.sh.coefficients[V],j);P++}else if(I.isSunLight){let V=e.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let W=I.shadow,Q=t.get(I);Q.shadowIntensity=W.intensity,Q.shadowBias=W.bias,Q.shadowNormalBias=W.normalBias,Q.shadowRadius=W.radius,Q.shadowMapSize.copy(W.mapSize).multiply(W.getFrameExtents()),n.sunShadow[f]=Q,n.sunShadowMap[f]=Y;let be=W.getViewportCount();for(let Ve=0;Ve<be;Ve++)n.sunShadowMatrix[x+Ve]=W.getMatrix(Ve),n.sunShadowCascade[x+Ve]=W._cascadeData[Ve];x+=be,f++}n.sun[u]=V,u++}else if(I.isDirectionalLight){let V=e.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let W=I.shadow,Q=t.get(I);Q.shadowIntensity=W.intensity,Q.shadowBias=W.bias,Q.shadowNormalBias=W.normalBias,Q.shadowRadius=W.radius,Q.shadowMapSize=W.mapSize,n.directionalShadow[g]=Q,n.directionalShadowMap[g]=Y,n.directionalShadowMatrix[g]=I.shadow.matrix,_++}n.directional[g]=V,g++}else if(I.isSpotLight){let V=e.get(I);V.position.setFromMatrixPosition(I.matrixWorld),V.color.copy(G).multiplyScalar(j),V.distance=q,V.coneCos=Math.cos(I.angle),V.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),V.decay=I.decay,n.spot[M]=V;let W=I.shadow;if(I.map&&(n.spotLightMap[v]=I.map,v++,W.updateMatrices(I),I.castShadow&&R++),n.spotLightMatrix[M]=W.matrix,I.castShadow){let Q=t.get(I);Q.shadowIntensity=W.intensity,Q.shadowBias=W.bias,Q.shadowNormalBias=W.normalBias,Q.shadowRadius=W.radius,Q.shadowMapSize=W.mapSize,n.spotShadow[M]=Q,n.spotShadowMap[M]=Y,A++}M++}else if(I.isRectAreaLight){let V=e.get(I);V.color.copy(G).multiplyScalar(j),V.halfWidth.set(I.width*.5,0,0),V.halfHeight.set(0,I.height*.5,0),n.rectArea[b]=V,b++}else if(I.isPointLight){let V=e.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),V.distance=I.distance,V.decay=I.decay,I.castShadow){let W=I.shadow,Q=t.get(I);Q.shadowIntensity=W.intensity,Q.shadowBias=W.bias,Q.shadowNormalBias=W.normalBias,Q.shadowRadius=W.radius,Q.shadowMapSize=W.mapSize,Q.shadowCameraNear=W.camera.near,Q.shadowCameraFar=W.camera.far,n.pointShadow[m]=Q,n.pointShadowMap[m]=Y,n.pointShadowMatrix[m]=I.shadow.matrix,w++}n.point[m]=V,m++}else if(I.isHemisphereLight){let V=e.get(I);V.skyColor.copy(I.color).multiplyScalar(j),V.groundColor.copy(I.groundColor).multiplyScalar(j),n.hemi[y]=V,y++}}b>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Bt.LTC_FLOAT_1,n.rectAreaLTC2=Bt.LTC_FLOAT_2):(n.rectAreaLTC1=Bt.LTC_HALF_1,n.rectAreaLTC2=Bt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=p;let B=n.hash;(B.sunLength!==u||B.directionalLength!==g||B.pointLength!==m||B.spotLength!==M||B.rectAreaLength!==b||B.hemiLength!==y||B.numSunShadows!==f||B.numDirectionalShadows!==_||B.numPointShadows!==w||B.numSpotShadows!==A||B.numSpotMaps!==v||B.numLightProbes!==P)&&(n.sun.length=u,n.directional.length=g,n.spot.length=M,n.rectArea.length=b,n.point.length=m,n.hemi.length=y,n.sunShadow.length=f,n.sunShadowMap.length=f,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.directionalShadowMatrix.length=_,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+v-R,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=P,B.sunLength=u,B.directionalLength=g,B.pointLength=m,B.spotLength=M,B.rectAreaLength=b,B.hemiLength=y,B.numSunShadows=f,B.numDirectionalShadows=_,B.numPointShadows=w,B.numSpotShadows=A,B.numSpotMaps=v,B.numLightProbes=P,n.version=Ny++)}function c(l,h){let d=0,p=0,u=0,f=0,x=0,g=0,m=h.matrixWorldInverse;for(let M=0,b=l.length;M<b;M++){let y=l[M];if(y.isSunLight){let _=n.sun[d];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(m),d++}else if(y.isDirectionalLight){let _=n.directional[p];_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),p++}else if(y.isSpotLight){let _=n.spot[f];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),f++}else if(y.isRectAreaLight){let _=n.rectArea[x];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),a.identity(),r.copy(y.matrixWorld),r.premultiply(m),a.extractRotation(r),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),x++}else if(y.isPointLight){let _=n.point[u];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),u++}else if(y.isHemisphereLight){let _=n.hemi[g];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(m),g++}}}return{setup:o,setupView:c,state:n}}function Xp(i){let e=new Fy(i),t=[],n=[],s=[];function r(p){d.camera=p,t.length=0,n.length=0,s.length=0}function a(p){t.push(p)}function o(p){n.push(p)}function c(p){s.push(p)}function l(){e.setup(t)}function h(p){e.setupView(t,p)}let d={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:l,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function Oy(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Xp(i),e.set(s,[o])):r>=a.length?(o=new Xp(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var By=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Hy=`uniform sampler2D shadow_pass;
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
}`,zy=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],Gy=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],Yp=new zt,sc=new F,Ef=new F;function ky(i,e,t){let n=new bo,s=new tt,r=new tt,a=new ri,o=new Io,c=new S0,l={},h=t.maxTextureSize,d={[ya]:es,[es]:ya,[oi]:oi},p=new Cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:By,fragmentShader:Hy}),u=p.clone();u.defines.HORIZONTAL_PASS=1;let f=new tn;f.setAttribute("position",new Jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Fe(f,p),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=za;let m=this.type;this.render=function(w,A,v){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;this.type===Gd&&(Qt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=za);let R=i.getRenderTarget(),P=i.getActiveCubeFace(),B=i.getActiveMipmapLevel(),T=i.state;T.setBlending(Ai),T.buffers.depth.getReversed()===!0?T.buffers.color.setClear(0,0,0,0):T.buffers.color.setClear(1,1,1,1),T.buffers.depth.setTest(!0),T.setScissorTest(!1);let U=m!==this.type;U&&A.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(G=>G.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,G=w.length;I<G;I++){let j=w[I],q=j.shadow;if(q===void 0){Qt("WebGLShadowMap:",j,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let Y=q.getFrameExtents();s.multiply(Y),r.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Y.x),s.x=r.x*Y.x,q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Y.y),s.y=r.y*Y.y,q.mapSize.y=r.y));let V=i.state.buffers.depth.getReversed();if(q.camera._reversedDepth=V,q.map===null||U===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===No){if(j.isPointLight){Qt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new ai(s.x,s.y,{format:ba,type:yi,minFilter:Li,magFilter:Li,generateMipmaps:!1}),q.map.texture.name=j.name+".shadowMap",q.map.depthTexture=new Js(s.x,s.y,js),q.map.depthTexture.name=j.name+".shadowMapDepth",q.map.depthTexture.format=Cr,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Ri,q.map.depthTexture.magFilter=Ri}else j.isPointLight?(q.map=new Au(s.x),q.map.depthTexture=new y0(s.x,xr)):(q.map=new ai(s.x,s.y),q.map.depthTexture=new Js(s.x,s.y,xr)),q.map.depthTexture.name=j.name+".shadowMap",q.map.depthTexture.format=Cr,this.type===za?(q.map.depthTexture.compareFunction=V?Tu:bu,q.map.depthTexture.minFilter=Li,q.map.depthTexture.magFilter=Li):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Ri,q.map.depthTexture.magFilter=Ri);q.camera.updateProjectionMatrix()}q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==s.x||q.map.height!==s.y)&&q.map.setSize(s.x,s.y);let W=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();j.isPointLight!==!0&&q.updateMatrices(j,v);for(let Q=0;Q<W;Q++){let be=q.getCamera(Q);if(j.isPointLight){let Ve=q.camera,Ne=q.matrix,rt=j.distance||Ve.far;rt!==Ve.far&&(Ve.far=rt,Ve.updateProjectionMatrix()),sc.setFromMatrixPosition(j.matrixWorld),Ve.position.copy(sc),Ef.copy(Ve.position),Ef.add(zy[Q]),Ve.up.copy(Gy[Q]),Ve.lookAt(Ef),Ve.updateMatrixWorld(),Ne.makeTranslation(-sc.x,-sc.y,-sc.z),Yp.multiplyMatrices(Ve.projectionMatrix,Ve.matrixWorldInverse),q._frustum.setFromProjectionMatrix(Yp,Ve.coordinateSystem,Ve.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)i.setRenderTarget(q.map,Q),i.clear();else{Q===0&&(i.setRenderTarget(q.map),i.clear());let Ve=q.getViewport(Q);a.set(r.x*Ve.x,r.y*Ve.y,r.x*Ve.z,r.y*Ve.w),T.viewport(a)}n=q.getFrustum(Q),y(A,v,be,j,this.type)}q.isPointLightShadow!==!0&&this.type===No&&M(q,v),q.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(R,P,B)};function M(w,A){let v=e.update(x);p.defines.VSM_SAMPLES!==w.blurSamples&&(p.defines.VSM_SAMPLES=w.blurSamples,u.defines.VSM_SAMPLES=w.blurSamples,p.needsUpdate=!0,u.needsUpdate=!0),w.mapPass===null?w.mapPass=new ai(s.x,s.y,{format:ba,type:yi}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),p.uniforms.shadow_pass.value=w.map.depthTexture,p.uniforms.resolution.value.set(w.map.width,w.map.height),p.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(A,null,v,p,x,null),u.uniforms.shadow_pass.value=w.mapPass.texture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(A,null,v,u,x,null)}function b(w,A,v,R){let P=null,B=v.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(B!==void 0)P=B;else if(P=v.isPointLight===!0?c:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let T=P.uuid,U=A.uuid,I=l[T];I===void 0&&(I={},l[T]=I);let G=I[U];G===void 0&&(G=P.clone(),I[U]=G,A.addEventListener("dispose",_)),P=G}if(P.visible=A.visible,P.wireframe=A.wireframe,R===No?P.side=A.shadowSide!==null?A.shadowSide:A.side:P.side=A.shadowSide!==null?A.shadowSide:d[A.side],P.alphaMap=A.alphaMap,P.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,P.map=A.map,P.clipShadows=A.clipShadows,P.clippingPlanes=A.clippingPlanes,P.clipIntersection=A.clipIntersection,P.displacementMap=A.displacementMap,P.displacementScale=A.displacementScale,P.displacementBias=A.displacementBias,P.wireframeLinewidth=A.wireframeLinewidth,P.linewidth=A.linewidth,v.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let T=i.properties.get(P);T.light=v}return P}function y(w,A,v,R,P){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&P===No)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,w.matrixWorld);let U=e.update(w),I=w.material;if(Array.isArray(I)){let G=U.groups;for(let j=0,q=G.length;j<q;j++){let Y=G[j],V=I[Y.materialIndex];if(V&&V.visible){let W=b(w,V,R,P);w.onBeforeShadow(i,w,A,v,U,W,Y),i.renderBufferDirect(v,null,U,W,w,Y),w.onAfterShadow(i,w,A,v,U,W,Y)}}}else if(I.visible){let G=b(w,I,R,P);w.onBeforeShadow(i,w,A,v,U,G,null),i.renderBufferDirect(v,null,U,G,w,null),w.onAfterShadow(i,w,A,v,U,G,null)}}let T=w.children;for(let U=0,I=T.length;U<I;U++)y(T[U],A,v,R,P)}function _(w){w.target.removeEventListener("dispose",_);for(let v in l){let R=l[v],P=w.target.uuid;P in R&&(R[P].dispose(),delete R[P])}}}function Vy(i,e){function t(){let z=!1,Ae=new ri,pe=null,Be=new ri(0,0,0,0);return{setMask:function(Ue){pe!==Ue&&!z&&(i.colorMask(Ue,Ue,Ue,Ue),pe=Ue)},setLocked:function(Ue){z=Ue},setClear:function(Ue,re,te,_e,Ge){Ge===!0&&(Ue*=_e,re*=_e,te*=_e),Ae.set(Ue,re,te,_e),Be.equals(Ae)===!1&&(i.clearColor(Ue,re,te,_e),Be.copy(Ae))},reset:function(){z=!1,pe=null,Be.set(-1,0,0,0)}}}function n(){let z=!1,Ae=!1,pe=null,Be=null,Ue=null;return{setReversed:function(re){if(Ae!==re){let te=e.get("EXT_clip_control");re?te.clipControlEXT(te.LOWER_LEFT_EXT,te.ZERO_TO_ONE_EXT):te.clipControlEXT(te.LOWER_LEFT_EXT,te.NEGATIVE_ONE_TO_ONE_EXT),Ae=re;let _e=Ue;Ue=null,this.setClear(_e)}},getReversed:function(){return Ae},setTest:function(re){re?Se(i.DEPTH_TEST):Oe(i.DEPTH_TEST)},setMask:function(re){pe!==re&&!z&&(i.depthMask(re),pe=re)},setFunc:function(re){if(Ae&&(re=xp[re]),Be!==re){switch(re){case s0:i.depthFunc(i.NEVER);break;case r0:i.depthFunc(i.ALWAYS);break;case a0:i.depthFunc(i.LESS);break;case go:i.depthFunc(i.LEQUAL);break;case o0:i.depthFunc(i.EQUAL);break;case l0:i.depthFunc(i.GEQUAL);break;case c0:i.depthFunc(i.GREATER);break;case u0:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Be=re}},setLocked:function(re){z=re},setClear:function(re){Ue!==re&&(Ue=re,Ae&&(re=1-re),i.clearDepth(re))},reset:function(){z=!1,pe=null,Be=null,Ue=null,Ae=!1}}}function s(){let z=!1,Ae=null,pe=null,Be=null,Ue=null,re=null,te=null,_e=null,Ge=null;return{setTest:function(dt){z||(dt?Se(i.STENCIL_TEST):Oe(i.STENCIL_TEST))},setMask:function(dt){Ae!==dt&&!z&&(i.stencilMask(dt),Ae=dt)},setFunc:function(dt,Ut,Kt){(pe!==dt||Be!==Ut||Ue!==Kt)&&(i.stencilFunc(dt,Ut,Kt),pe=dt,Be=Ut,Ue=Kt)},setOp:function(dt,Ut,Kt){(re!==dt||te!==Ut||_e!==Kt)&&(i.stencilOp(dt,Ut,Kt),re=dt,te=Ut,_e=Kt)},setLocked:function(dt){z=dt},setClear:function(dt){Ge!==dt&&(i.clearStencil(dt),Ge=dt)},reset:function(){z=!1,Ae=null,pe=null,Be=null,Ue=null,re=null,te=null,_e=null,Ge=null}}}let r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap,h={},d={},p={},u=new WeakMap,f=[],x=null,g=!1,m=null,M=null,b=null,y=null,_=null,w=null,A=null,v=new xt(0,0,0),R=0,P=!1,B=null,T=null,U=null,I=null,G=null,j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,Y=0,V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(V)[1]),q=Y>=1):V.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),q=Y>=2);let W=null,Q={},be=i.getParameter(i.SCISSOR_BOX),Ve=i.getParameter(i.VIEWPORT),Ne=new ri().fromArray(be),rt=new ri().fromArray(Ve);function Et(z,Ae,pe,Be){let Ue=new Uint8Array(4),re=i.createTexture();i.bindTexture(z,re),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let te=0;te<pe;te++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(Ae,0,i.RGBA,1,1,Be,0,i.RGBA,i.UNSIGNED_BYTE,Ue):i.texImage2D(Ae+te,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ue);return re}let he={};he[i.TEXTURE_2D]=Et(i.TEXTURE_2D,i.TEXTURE_2D,1),he[i.TEXTURE_CUBE_MAP]=Et(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),he[i.TEXTURE_2D_ARRAY]=Et(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),he[i.TEXTURE_3D]=Et(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Se(i.DEPTH_TEST),a.setFunc(go),de(!1),Me(Wh),Se(i.CULL_FACE),xe(Ai);function Se(z){h[z]!==!0&&(i.enable(z),h[z]=!0)}function Oe(z){h[z]!==!1&&(i.disable(z),h[z]=!1)}function Re(z,Ae){return p[z]!==Ae?(i.bindFramebuffer(z,Ae),p[z]=Ae,z===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=Ae),z===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=Ae),!0):!1}function Ye(z,Ae){let pe=f,Be=!1;if(z){pe=u.get(Ae),pe===void 0&&(pe=[],u.set(Ae,pe));let Ue=z.textures;if(pe.length!==Ue.length||pe[0]!==i.COLOR_ATTACHMENT0){for(let re=0,te=Ue.length;re<te;re++)pe[re]=i.COLOR_ATTACHMENT0+re;pe.length=Ue.length,Be=!0}}else pe[0]!==i.BACK&&(pe[0]=i.BACK,Be=!0);Be&&i.drawBuffers(pe)}function ee(z){return x!==z?(i.useProgram(z),x=z,!0):!1}let Je={[Qs]:i.FUNC_ADD,[kd]:i.FUNC_SUBTRACT,[Vd]:i.FUNC_REVERSE_SUBTRACT};Je[Wd]=i.MIN,Je[Xd]=i.MAX;let oe={[Ga]:i.ZERO,[Yd]:i.ONE,[qd]:i.SRC_COLOR,[qh]:i.SRC_ALPHA,[Kd]:i.SRC_ALPHA_SATURATE,[Gl]:i.DST_COLOR,[zl]:i.DST_ALPHA,[Zd]:i.ONE_MINUS_SRC_COLOR,[Zh]:i.ONE_MINUS_SRC_ALPHA,[Jd]:i.ONE_MINUS_DST_COLOR,[$d]:i.ONE_MINUS_DST_ALPHA,[Qd]:i.CONSTANT_COLOR,[jd]:i.ONE_MINUS_CONSTANT_COLOR,[ep]:i.CONSTANT_ALPHA,[tp]:i.ONE_MINUS_CONSTANT_ALPHA};function xe(z,Ae,pe,Be,Ue,re,te,_e,Ge,dt){if(z===Ai){g===!0&&(Oe(i.BLEND),g=!1);return}if(g===!1&&(Se(i.BLEND),g=!0),z!==O0){if(z!==m||dt!==P){if((M!==Qs||_!==Qs)&&(i.blendEquation(i.FUNC_ADD),M=Qs,_=Qs),dt)switch(z){case _a:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zn:i.blendFunc(i.ONE,i.ONE);break;case Xh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Yh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:en("WebGLState: Invalid blending: ",z);break}else switch(z){case _a:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Xh:en("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Yh:en("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:en("WebGLState: Invalid blending: ",z);break}b=null,y=null,w=null,A=null,v.set(0,0,0),R=0,m=z,P=dt}return}Ue=Ue||Ae,re=re||pe,te=te||Be,(Ae!==M||Ue!==_)&&(i.blendEquationSeparate(Je[Ae],Je[Ue]),M=Ae,_=Ue),(pe!==b||Be!==y||re!==w||te!==A)&&(i.blendFuncSeparate(oe[pe],oe[Be],oe[re],oe[te]),b=pe,y=Be,w=re,A=te),(_e.equals(v)===!1||Ge!==R)&&(i.blendColor(_e.r,_e.g,_e.b,Ge),v.copy(_e),R=Ge),m=z,P=!1}function ie(z,Ae){z.side===oi?Oe(i.CULL_FACE):Se(i.CULL_FACE);let pe=z.side===es;Ae&&(pe=!pe),de(pe),z.blending===_a&&z.transparent===!1?xe(Ai):xe(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),a.setFunc(z.depthFunc),a.setTest(z.depthTest),a.setMask(z.depthWrite),r.setMask(z.colorWrite);let Be=z.stencilWrite;o.setTest(Be),Be&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),qe(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?Se(i.SAMPLE_ALPHA_TO_COVERAGE):Oe(i.SAMPLE_ALPHA_TO_COVERAGE)}function de(z){B!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),B=z)}function Me(z){z!==Hd?(Se(i.CULL_FACE),z!==T&&(z===Wh?i.cullFace(i.BACK):z===zd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Oe(i.CULL_FACE),T=z}function $e(z){z!==U&&(q&&i.lineWidth(z),U=z)}function qe(z,Ae,pe){z?(Se(i.POLYGON_OFFSET_FILL),(I!==Ae||G!==pe)&&(I=Ae,G=pe,a.getReversed()&&(Ae=-Ae),i.polygonOffset(Ae,pe))):Oe(i.POLYGON_OFFSET_FILL)}function ut(z){z?Se(i.SCISSOR_TEST):Oe(i.SCISSOR_TEST)}function lt(z){z===void 0&&(z=i.TEXTURE0+j-1),W!==z&&(i.activeTexture(z),W=z)}function J(z,Ae,pe){pe===void 0&&(W===null?pe=i.TEXTURE0+j-1:pe=W);let Be=Q[pe];Be===void 0&&(Be={type:void 0,texture:void 0},Q[pe]=Be),(Be.type!==z||Be.texture!==Ae)&&(W!==pe&&(i.activeTexture(pe),W=pe),i.bindTexture(z,Ae||he[z]),Be.type=z,Be.texture=Ae)}function It(){let z=Q[W];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function At(){try{i.compressedTexImage2D(...arguments)}catch(z){en("WebGLState:",z)}}function H(){try{i.compressedTexImage3D(...arguments)}catch(z){en("WebGLState:",z)}}function S(){try{i.texSubImage2D(...arguments)}catch(z){en("WebGLState:",z)}}function fe(){try{i.texSubImage3D(...arguments)}catch(z){en("WebGLState:",z)}}function le(){try{i.compressedTexSubImage2D(...arguments)}catch(z){en("WebGLState:",z)}}function ye(){try{i.compressedTexSubImage3D(...arguments)}catch(z){en("WebGLState:",z)}}function it(){try{i.texStorage2D(...arguments)}catch(z){en("WebGLState:",z)}}function st(){try{i.texStorage3D(...arguments)}catch(z){en("WebGLState:",z)}}function Le(){try{i.texImage2D(...arguments)}catch(z){en("WebGLState:",z)}}function Ce(){try{i.texImage3D(...arguments)}catch(z){en("WebGLState:",z)}}function Qe(z){return d[z]!==void 0?d[z]:i.getParameter(z)}function vt(z,Ae){d[z]!==Ae&&(i.pixelStorei(z,Ae),d[z]=Ae)}function N(z){Ne.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),Ne.copy(z))}function ae(z){rt.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),rt.copy(z))}function ue(z,Ae){let pe=l.get(Ae);pe===void 0&&(pe=new WeakMap,l.set(Ae,pe));let Be=pe.get(z);Be===void 0&&(Be=i.getUniformBlockIndex(Ae,z.name),pe.set(z,Be))}function we(z,Ae){let Be=l.get(Ae).get(z);c.get(Ae)!==Be&&(i.uniformBlockBinding(Ae,Be,z.__bindingPointIndex),c.set(Ae,Be))}function ze(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},W=null,Q={},p={},u=new WeakMap,f=[],x=null,g=!1,m=null,M=null,b=null,y=null,_=null,w=null,A=null,v=new xt(0,0,0),R=0,P=!1,B=null,T=null,U=null,I=null,G=null,Ne.set(0,0,i.canvas.width,i.canvas.height),rt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Se,disable:Oe,bindFramebuffer:Re,drawBuffers:Ye,useProgram:ee,setBlending:xe,setMaterial:ie,setFlipSided:de,setCullFace:Me,setLineWidth:$e,setPolygonOffset:qe,setScissorTest:ut,activeTexture:lt,bindTexture:J,unbindTexture:It,compressedTexImage2D:At,compressedTexImage3D:H,texImage2D:Le,texImage3D:Ce,pixelStorei:vt,getParameter:Qe,updateUBOMapping:ue,uniformBlockBinding:we,texStorage2D:it,texStorage3D:st,texSubImage2D:S,texSubImage3D:fe,compressedTexSubImage2D:le,compressedTexSubImage3D:ye,scissor:N,viewport:ae,reset:ze}}function Wy(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new tt,h=new WeakMap,d=new Set,p,u=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(H,S){return f?new OffscreenCanvas(H,S):fl("canvas")}function g(H,S,fe){let le=1,ye=At(H);if((ye.width>fe||ye.height>fe)&&(le=fe/Math.max(ye.width,ye.height)),le<1)if(typeof HTMLImageElement<"u"&&H instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&H instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&H instanceof ImageBitmap||typeof VideoFrame<"u"&&H instanceof VideoFrame){let it=Math.floor(le*ye.width),st=Math.floor(le*ye.height);p===void 0&&(p=x(it,st));let Le=S?x(it,st):p;return Le.width=it,Le.height=st,Le.getContext("2d").drawImage(H,0,0,it,st),Qt("WebGLRenderer: Texture has been resized from ("+ye.width+"x"+ye.height+") to ("+it+"x"+st+")."),Le}else return"data"in H&&Qt("WebGLRenderer: Image in DataTexture is too big ("+ye.width+"x"+ye.height+")."),H;return H}function m(H){return H.generateMipmaps}function M(H){i.generateMipmap(H)}function b(H){return H.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:H.isWebGL3DRenderTarget?i.TEXTURE_3D:H.isWebGLArrayRenderTarget||H.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(H,S,fe,le,ye,it=!1){if(H!==null){if(i[H]!==void 0)return i[H];Qt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+H+"'")}let st;le&&(st=e.get("EXT_texture_norm16"),st||Qt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Le=S;if(S===i.RED&&(fe===i.FLOAT&&(Le=i.R32F),fe===i.HALF_FLOAT&&(Le=i.R16F),fe===i.UNSIGNED_BYTE&&(Le=i.R8),fe===i.UNSIGNED_SHORT&&st&&(Le=st.R16_EXT),fe===i.SHORT&&st&&(Le=st.R16_SNORM_EXT)),S===i.RED_INTEGER&&(fe===i.UNSIGNED_BYTE&&(Le=i.R8UI),fe===i.UNSIGNED_SHORT&&(Le=i.R16UI),fe===i.UNSIGNED_INT&&(Le=i.R32UI),fe===i.BYTE&&(Le=i.R8I),fe===i.SHORT&&(Le=i.R16I),fe===i.INT&&(Le=i.R32I)),S===i.RG&&(fe===i.FLOAT&&(Le=i.RG32F),fe===i.HALF_FLOAT&&(Le=i.RG16F),fe===i.UNSIGNED_BYTE&&(Le=i.RG8),fe===i.UNSIGNED_SHORT&&st&&(Le=st.RG16_EXT),fe===i.SHORT&&st&&(Le=st.RG16_SNORM_EXT)),S===i.RG_INTEGER&&(fe===i.UNSIGNED_BYTE&&(Le=i.RG8UI),fe===i.UNSIGNED_SHORT&&(Le=i.RG16UI),fe===i.UNSIGNED_INT&&(Le=i.RG32UI),fe===i.BYTE&&(Le=i.RG8I),fe===i.SHORT&&(Le=i.RG16I),fe===i.INT&&(Le=i.RG32I)),S===i.RGB_INTEGER&&(fe===i.UNSIGNED_BYTE&&(Le=i.RGB8UI),fe===i.UNSIGNED_SHORT&&(Le=i.RGB16UI),fe===i.UNSIGNED_INT&&(Le=i.RGB32UI),fe===i.BYTE&&(Le=i.RGB8I),fe===i.SHORT&&(Le=i.RGB16I),fe===i.INT&&(Le=i.RGB32I)),S===i.RGBA_INTEGER&&(fe===i.UNSIGNED_BYTE&&(Le=i.RGBA8UI),fe===i.UNSIGNED_SHORT&&(Le=i.RGBA16UI),fe===i.UNSIGNED_INT&&(Le=i.RGBA32UI),fe===i.BYTE&&(Le=i.RGBA8I),fe===i.SHORT&&(Le=i.RGBA16I),fe===i.INT&&(Le=i.RGBA32I)),S===i.RGB&&(fe===i.UNSIGNED_SHORT&&st&&(Le=st.RGB16_EXT),fe===i.SHORT&&st&&(Le=st.RGB16_SNORM_EXT),fe===i.UNSIGNED_INT_5_9_9_9_REV&&(Le=i.RGB9_E5),fe===i.UNSIGNED_INT_10F_11F_11F_REV&&(Le=i.R11F_G11F_B10F)),S===i.RGBA){let Ce=it?hl:wn.getTransfer(ye);fe===i.FLOAT&&(Le=i.RGBA32F),fe===i.HALF_FLOAT&&(Le=i.RGBA16F),fe===i.UNSIGNED_BYTE&&(Le=Ce===Ln?i.SRGB8_ALPHA8:i.RGBA8),fe===i.UNSIGNED_SHORT&&st&&(Le=st.RGBA16_EXT),fe===i.SHORT&&st&&(Le=st.RGBA16_SNORM_EXT),fe===i.UNSIGNED_SHORT_4_4_4_4&&(Le=i.RGBA4),fe===i.UNSIGNED_SHORT_5_5_5_1&&(Le=i.RGB5_A1)}return(Le===i.R16F||Le===i.R32F||Le===i.RG16F||Le===i.RG32F||Le===i.RGBA16F||Le===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Le}function _(H,S){let fe;return H?S===null||S===xr||S===Sa?fe=i.DEPTH24_STENCIL8:S===js?fe=i.DEPTH32F_STENCIL8:S===Uo&&(fe=i.DEPTH24_STENCIL8,Qt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===xr||S===Sa?fe=i.DEPTH_COMPONENT24:S===js?fe=i.DEPTH_COMPONENT32F:S===Uo&&(fe=i.DEPTH_COMPONENT16),fe}function w(H,S){return m(H)===!0||H.isFramebufferTexture&&H.minFilter!==Ri&&H.minFilter!==Li?Math.log2(Math.max(S.width,S.height))+1:H.mipmaps!==void 0&&H.mipmaps.length>0?H.mipmaps.length:H.isCompressedTexture&&Array.isArray(H.image)?S.mipmaps.length:1}function A(H){let S=H.target;S.removeEventListener("dispose",A),R(S),S.isVideoTexture&&h.delete(S),S.isHTMLTexture&&d.delete(S)}function v(H){let S=H.target;S.removeEventListener("dispose",v),B(S)}function R(H){let S=n.get(H);if(S.__webglInit===void 0)return;let fe=H.source,le=u.get(fe);if(le){let ye=le[S.__cacheKey];ye.usedTimes--,ye.usedTimes===0&&P(H),Object.keys(le).length===0&&u.delete(fe)}n.remove(H)}function P(H){let S=n.get(H);i.deleteTexture(S.__webglTexture);let fe=H.source,le=u.get(fe);delete le[S.__cacheKey],a.memory.textures--}function B(H){let S=n.get(H);if(H.depthTexture&&(H.depthTexture.dispose(),n.remove(H.depthTexture)),H.isWebGLCubeRenderTarget)for(let le=0;le<6;le++){if(Array.isArray(S.__webglFramebuffer[le]))for(let ye=0;ye<S.__webglFramebuffer[le].length;ye++)i.deleteFramebuffer(S.__webglFramebuffer[le][ye]);else i.deleteFramebuffer(S.__webglFramebuffer[le]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[le])}else{if(Array.isArray(S.__webglFramebuffer))for(let le=0;le<S.__webglFramebuffer.length;le++)i.deleteFramebuffer(S.__webglFramebuffer[le]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let le=0;le<S.__webglColorRenderbuffer.length;le++)S.__webglColorRenderbuffer[le]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[le]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let fe=H.textures;for(let le=0,ye=fe.length;le<ye;le++){let it=n.get(fe[le]);it.__webglTexture&&(i.deleteTexture(it.__webglTexture),a.memory.textures--),n.remove(fe[le])}n.remove(H)}let T=0;function U(){T=0}function I(){return T}function G(H){T=H}function j(){let H=T;return H>=s.maxTextures&&Qt("WebGLTextures: Trying to use "+(H+1)+" texture units while this GPU supports only "+s.maxTextures),T+=1,H}function q(H){let S=[];return S.push(H.wrapS),S.push(H.wrapT),S.push(H.wrapR||0),S.push(H.magFilter),S.push(H.minFilter),S.push(H.anisotropy),S.push(H.internalFormat),S.push(H.format),S.push(H.type),S.push(H.generateMipmaps),S.push(H.premultiplyAlpha),S.push(H.flipY),S.push(H.unpackAlignment),S.push(H.colorSpace),S.join()}function Y(H,S){let fe=n.get(H);if(H.isVideoTexture&&J(H),H.isRenderTargetTexture===!1&&H.isExternalTexture!==!0&&H.version>0&&fe.__version!==H.version){let le=H.image;if(le===null)Qt("WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)Qt("WebGLRenderer: Texture marked for update but image is incomplete");else{Oe(fe,H,S);return}}else H.isExternalTexture&&(fe.__webglTexture=H.sourceTexture?H.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,fe.__webglTexture,i.TEXTURE0+S)}function V(H,S){let fe=n.get(H);if(H.isRenderTargetTexture===!1&&H.version>0&&fe.__version!==H.version){Oe(fe,H,S);return}else H.isExternalTexture&&(fe.__webglTexture=H.sourceTexture?H.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,fe.__webglTexture,i.TEXTURE0+S)}function W(H,S){let fe=n.get(H);if(H.isRenderTargetTexture===!1&&H.version>0&&fe.__version!==H.version){Oe(fe,H,S);return}t.bindTexture(i.TEXTURE_3D,fe.__webglTexture,i.TEXTURE0+S)}function Q(H,S){let fe=n.get(H);if(H.isCubeDepthTexture!==!0&&H.version>0&&fe.__version!==H.version){Re(fe,H,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,fe.__webglTexture,i.TEXTURE0+S)}let be={[Zn]:i.REPEAT,[ws]:i.CLAMP_TO_EDGE,[h0]:i.MIRRORED_REPEAT},Ve={[Ri]:i.NEAREST,[sp]:i.NEAREST_MIPMAP_NEAREST,[$l]:i.NEAREST_MIPMAP_LINEAR,[Li]:i.LINEAR,[z0]:i.LINEAR_MIPMAP_NEAREST,[Ur]:i.LINEAR_MIPMAP_LINEAR},Ne={[lp]:i.NEVER,[dp]:i.ALWAYS,[cp]:i.LESS,[bu]:i.LEQUAL,[up]:i.EQUAL,[Tu]:i.GEQUAL,[hp]:i.GREATER,[fp]:i.NOTEQUAL};function rt(H,S){if(S.type===js&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Li||S.magFilter===z0||S.magFilter===$l||S.magFilter===Ur||S.minFilter===Li||S.minFilter===z0||S.minFilter===$l||S.minFilter===Ur)&&Qt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(H,i.TEXTURE_WRAP_S,be[S.wrapS]),i.texParameteri(H,i.TEXTURE_WRAP_T,be[S.wrapT]),(H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY)&&i.texParameteri(H,i.TEXTURE_WRAP_R,be[S.wrapR]),i.texParameteri(H,i.TEXTURE_MAG_FILTER,Ve[S.magFilter]),i.texParameteri(H,i.TEXTURE_MIN_FILTER,Ve[S.minFilter]),S.compareFunction&&(i.texParameteri(H,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(H,i.TEXTURE_COMPARE_FUNC,Ne[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Ri||S.minFilter!==$l&&S.minFilter!==Ur||S.type===js&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let fe=e.get("EXT_texture_filter_anisotropic");i.texParameterf(H,fe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Et(H,S){let fe=!1;H.__webglInit===void 0&&(H.__webglInit=!0,S.addEventListener("dispose",A));let le=S.source,ye=u.get(le);ye===void 0&&(ye={},u.set(le,ye));let it=q(S);if(it!==H.__cacheKey){ye[it]===void 0&&(ye[it]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,fe=!0),ye[it].usedTimes++;let st=ye[H.__cacheKey];st!==void 0&&(ye[H.__cacheKey].usedTimes--,st.usedTimes===0&&P(S)),H.__cacheKey=it,H.__webglTexture=ye[it].texture}return fe}function he(H,S,fe){return Math.floor(Math.floor(H/fe)/S)}function Se(H,S,fe,le){let it=H.updateRanges;if(it.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,fe,le,S.data);else{it.sort((vt,N)=>vt.start-N.start);let st=0;for(let vt=1;vt<it.length;vt++){let N=it[st],ae=it[vt],ue=N.start+N.count,we=he(ae.start,S.width,4),ze=he(N.start,S.width,4);ae.start<=ue+1&&we===ze&&he(ae.start+ae.count-1,S.width,4)===we?N.count=Math.max(N.count,ae.start+ae.count-N.start):(++st,it[st]=ae)}it.length=st+1;let Le=t.getParameter(i.UNPACK_ROW_LENGTH),Ce=t.getParameter(i.UNPACK_SKIP_PIXELS),Qe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let vt=0,N=it.length;vt<N;vt++){let ae=it[vt],ue=Math.floor(ae.start/4),we=Math.ceil(ae.count/4),ze=ue%S.width,z=Math.floor(ue/S.width),Ae=we,pe=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,ze),t.pixelStorei(i.UNPACK_SKIP_ROWS,z),t.texSubImage2D(i.TEXTURE_2D,0,ze,z,Ae,pe,fe,le,S.data)}H.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Le),t.pixelStorei(i.UNPACK_SKIP_PIXELS,Ce),t.pixelStorei(i.UNPACK_SKIP_ROWS,Qe)}}function Oe(H,S,fe){let le=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(le=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(le=i.TEXTURE_3D);let ye=Et(H,S),it=S.source;t.bindTexture(le,H.__webglTexture,i.TEXTURE0+fe);let st=n.get(it);if(it.version!==st.__version||ye===!0){if(t.activeTexture(i.TEXTURE0+fe),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let pe=wn.getPrimaries(wn.workingColorSpace),Be=S.colorSpace===vr?null:wn.getPrimaries(S.colorSpace),Ue=S.colorSpace===vr||pe===Be?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue)}t.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment);let Ce=g(S.image,!1,s.maxTextureSize);Ce=It(S,Ce);let Qe=r.convert(S.format,S.colorSpace),vt=r.convert(S.type),N=y(S.internalFormat,Qe,vt,S.normalized,S.colorSpace,S.isVideoTexture);rt(le,S);let ae,ue=S.mipmaps,we=S.isVideoTexture!==!0,ze=st.__version===void 0||ye===!0,z=it.dataReady,Ae=w(S,Ce);if(S.isDepthTexture)N=_(S.format===Fr,S.type),ze&&(we?t.texStorage2D(i.TEXTURE_2D,1,N,Ce.width,Ce.height):t.texImage2D(i.TEXTURE_2D,0,N,Ce.width,Ce.height,0,Qe,vt,null));else if(S.isDataTexture)if(ue.length>0){we&&ze&&t.texStorage2D(i.TEXTURE_2D,Ae,N,ue[0].width,ue[0].height);for(let pe=0,Be=ue.length;pe<Be;pe++)ae=ue[pe],we?z&&t.texSubImage2D(i.TEXTURE_2D,pe,0,0,ae.width,ae.height,Qe,vt,ae.data):t.texImage2D(i.TEXTURE_2D,pe,N,ae.width,ae.height,0,Qe,vt,ae.data);S.generateMipmaps=!1}else we?(ze&&t.texStorage2D(i.TEXTURE_2D,Ae,N,Ce.width,Ce.height),z&&Se(S,Ce,Qe,vt)):t.texImage2D(i.TEXTURE_2D,0,N,Ce.width,Ce.height,0,Qe,vt,Ce.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){we&&ze&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ae,N,ue[0].width,ue[0].height,Ce.depth);for(let pe=0,Be=ue.length;pe<Be;pe++)if(ae=ue[pe],S.format!==rs)if(Qe!==null)if(we){if(z)if(S.layerUpdates.size>0){let Ue=hf(ae.width,ae.height,S.format,S.type);for(let re of S.layerUpdates){let te=ae.data.subarray(re*Ue/ae.data.BYTES_PER_ELEMENT,(re+1)*Ue/ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,pe,0,0,re,ae.width,ae.height,1,Qe,te)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,pe,0,0,0,ae.width,ae.height,Ce.depth,Qe,ae.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,pe,N,ae.width,ae.height,Ce.depth,0,ae.data,0,0);else Qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else we?z&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,pe,0,0,0,ae.width,ae.height,Ce.depth,Qe,vt,ae.data):t.texImage3D(i.TEXTURE_2D_ARRAY,pe,N,ae.width,ae.height,Ce.depth,0,Qe,vt,ae.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{we&&ze&&t.texStorage2D(i.TEXTURE_2D,Ae,N,ue[0].width,ue[0].height);for(let pe=0,Be=ue.length;pe<Be;pe++)ae=ue[pe],S.format!==rs?Qe!==null?we?z&&t.compressedTexSubImage2D(i.TEXTURE_2D,pe,0,0,ae.width,ae.height,Qe,ae.data):t.compressedTexImage2D(i.TEXTURE_2D,pe,N,ae.width,ae.height,0,ae.data):Qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):we?z&&t.texSubImage2D(i.TEXTURE_2D,pe,0,0,ae.width,ae.height,Qe,vt,ae.data):t.texImage2D(i.TEXTURE_2D,pe,N,ae.width,ae.height,0,Qe,vt,ae.data)}else if(S.isDataArrayTexture)if(we){if(ze&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ae,N,Ce.width,Ce.height,Ce.depth),z)if(S.layerUpdates.size>0){let pe=hf(Ce.width,Ce.height,S.format,S.type);for(let Be of S.layerUpdates){let Ue=Ce.data.subarray(Be*pe/Ce.data.BYTES_PER_ELEMENT,(Be+1)*pe/Ce.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Be,Ce.width,Ce.height,1,Qe,vt,Ue)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Ce.width,Ce.height,Ce.depth,Qe,vt,Ce.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,N,Ce.width,Ce.height,Ce.depth,0,Qe,vt,Ce.data);else if(S.isData3DTexture)we?(ze&&t.texStorage3D(i.TEXTURE_3D,Ae,N,Ce.width,Ce.height,Ce.depth),z&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Ce.width,Ce.height,Ce.depth,Qe,vt,Ce.data)):t.texImage3D(i.TEXTURE_3D,0,N,Ce.width,Ce.height,Ce.depth,0,Qe,vt,Ce.data);else if(S.isFramebufferTexture){if(ze)if(we)t.texStorage2D(i.TEXTURE_2D,Ae,N,Ce.width,Ce.height);else{let pe=Ce.width,Be=Ce.height;for(let Ue=0;Ue<Ae;Ue++)t.texImage2D(i.TEXTURE_2D,Ue,N,pe,Be,0,Qe,vt,null),pe>>=1,Be>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in i){let pe=i.canvas;if(pe.hasAttribute("layoutsubtree")||pe.setAttribute("layoutsubtree","true"),Ce.parentNode!==pe){pe.appendChild(Ce),d.add(S),pe.onpaint=Be=>{let Ue=Be.changedElements;for(let re of d)Ue.includes(re.image)&&(re.needsUpdate=!0)},pe.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Ce);else{let Ue=i.RGBA,re=i.RGBA,te=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ue,re,te,Ce)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ue.length>0){if(we&&ze){let pe=At(ue[0]);t.texStorage2D(i.TEXTURE_2D,Ae,N,pe.width,pe.height)}for(let pe=0,Be=ue.length;pe<Be;pe++)ae=ue[pe],we?z&&t.texSubImage2D(i.TEXTURE_2D,pe,0,0,Qe,vt,ae):t.texImage2D(i.TEXTURE_2D,pe,N,Qe,vt,ae);S.generateMipmaps=!1}else if(we){if(ze){let pe=At(Ce);t.texStorage2D(i.TEXTURE_2D,Ae,N,pe.width,pe.height)}z&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Qe,vt,Ce)}else t.texImage2D(i.TEXTURE_2D,0,N,Qe,vt,Ce);m(S)&&M(le),st.__version=it.version,S.onUpdate&&S.onUpdate(S)}H.__version=S.version}function Re(H,S,fe){if(S.image.length!==6)return;let le=Et(H,S),ye=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+fe);let it=n.get(ye);if(ye.version!==it.__version||le===!0){t.activeTexture(i.TEXTURE0+fe);let st=wn.getPrimaries(wn.workingColorSpace),Le=S.colorSpace===vr?null:wn.getPrimaries(S.colorSpace),Ce=S.colorSpace===vr||st===Le?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);let Qe=S.isCompressedTexture||S.image[0].isCompressedTexture,vt=S.image[0]&&S.image[0].isDataTexture,N=[];for(let re=0;re<6;re++)!Qe&&!vt?N[re]=g(S.image[re],!0,s.maxCubemapSize):N[re]=vt?S.image[re].image:S.image[re],N[re]=It(S,N[re]);let ae=N[0],ue=r.convert(S.format,S.colorSpace),we=r.convert(S.type),ze=y(S.internalFormat,ue,we,S.normalized,S.colorSpace),z=S.isVideoTexture!==!0,Ae=it.__version===void 0||le===!0,pe=ye.dataReady,Be=w(S,ae);rt(i.TEXTURE_CUBE_MAP,S);let Ue;if(Qe){z&&Ae&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Be,ze,ae.width,ae.height);for(let re=0;re<6;re++){Ue=N[re].mipmaps;for(let te=0;te<Ue.length;te++){let _e=Ue[te];S.format!==rs?ue!==null?z?pe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,te,0,0,_e.width,_e.height,ue,_e.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,te,ze,_e.width,_e.height,0,_e.data):Qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,te,0,0,_e.width,_e.height,ue,we,_e.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,te,ze,_e.width,_e.height,0,ue,we,_e.data)}}}else{if(Ue=S.mipmaps,z&&Ae){Ue.length>0&&Be++;let re=At(N[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Be,ze,re.width,re.height)}for(let re=0;re<6;re++)if(vt){z?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,N[re].width,N[re].height,ue,we,N[re].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,ze,N[re].width,N[re].height,0,ue,we,N[re].data);for(let te=0;te<Ue.length;te++){let Ge=Ue[te].image[re].image;z?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,te+1,0,0,Ge.width,Ge.height,ue,we,Ge.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,te+1,ze,Ge.width,Ge.height,0,ue,we,Ge.data)}}else{z?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,ue,we,N[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,ze,ue,we,N[re]);for(let te=0;te<Ue.length;te++){let _e=Ue[te];z?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,te+1,0,0,ue,we,_e.image[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,te+1,ze,ue,we,_e.image[re])}}}m(S)&&M(i.TEXTURE_CUBE_MAP),it.__version=ye.version,S.onUpdate&&S.onUpdate(S)}H.__version=S.version}function Ye(H,S,fe,le,ye,it){let st=r.convert(fe.format,fe.colorSpace),Le=r.convert(fe.type),Ce=y(fe.internalFormat,st,Le,fe.normalized,fe.colorSpace),Qe=n.get(S),vt=n.get(fe);if(vt.__renderTarget=S,!Qe.__hasExternalTextures){let N=Math.max(1,S.width>>it),ae=Math.max(1,S.height>>it);ye===i.TEXTURE_3D||ye===i.TEXTURE_2D_ARRAY?t.texImage3D(ye,it,Ce,N,ae,S.depth,0,st,Le,null):t.texImage2D(ye,it,Ce,N,ae,0,st,Le,null)}t.bindFramebuffer(i.FRAMEBUFFER,H),lt(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,le,ye,vt.__webglTexture,0,ut(S)):(ye===i.TEXTURE_2D||ye>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ye<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,le,ye,vt.__webglTexture,it),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ee(H,S,fe){if(i.bindRenderbuffer(i.RENDERBUFFER,H),S.depthBuffer){let le=S.depthTexture,ye=le&&le.isDepthTexture?le.type:null,it=_(S.stencilBuffer,ye),st=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;lt(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ut(S),it,S.width,S.height):fe?i.renderbufferStorageMultisample(i.RENDERBUFFER,ut(S),it,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,it,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,st,i.RENDERBUFFER,H)}else{let le=S.textures;for(let ye=0;ye<le.length;ye++){let it=le[ye],st=r.convert(it.format,it.colorSpace),Le=r.convert(it.type),Ce=y(it.internalFormat,st,Le,it.normalized,it.colorSpace);lt(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ut(S),Ce,S.width,S.height):fe?i.renderbufferStorageMultisample(i.RENDERBUFFER,ut(S),Ce,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Ce,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Je(H,S,fe){let le=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,H),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ye=n.get(S.depthTexture);if(ye.__renderTarget=S,(!ye.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),le){if(ye.__webglInit===void 0&&(ye.__webglInit=!0,S.depthTexture.addEventListener("dispose",A)),ye.__webglTexture===void 0){ye.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,ye.__webglTexture),rt(i.TEXTURE_CUBE_MAP,S.depthTexture);let Qe=r.convert(S.depthTexture.format),vt=r.convert(S.depthTexture.type),N;S.depthTexture.format===Cr?N=i.DEPTH_COMPONENT24:S.depthTexture.format===Fr&&(N=i.DEPTH24_STENCIL8);for(let ae=0;ae<6;ae++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,N,S.width,S.height,0,Qe,vt,null)}}else Y(S.depthTexture,0);let it=ye.__webglTexture,st=ut(S),Le=le?i.TEXTURE_CUBE_MAP_POSITIVE_X+fe:i.TEXTURE_2D,Ce=S.depthTexture.format===Fr?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(S.depthTexture.format===Cr)lt(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ce,Le,it,0,st):i.framebufferTexture2D(i.FRAMEBUFFER,Ce,Le,it,0);else if(S.depthTexture.format===Fr)lt(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ce,Le,it,0,st):i.framebufferTexture2D(i.FRAMEBUFFER,Ce,Le,it,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function oe(H){let S=n.get(H),fe=H.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==H.depthTexture){let le=H.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),le){let ye=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,le.removeEventListener("dispose",ye)};le.addEventListener("dispose",ye),S.__depthDisposeCallback=ye}S.__boundDepthTexture=le}if(H.depthTexture&&!S.__autoAllocateDepthBuffer)if(fe)for(let le=0;le<6;le++)Je(S.__webglFramebuffer[le],H,le);else{let le=H.texture.mipmaps;le&&le.length>0?Je(S.__webglFramebuffer[0],H,0):Je(S.__webglFramebuffer,H,0)}else if(fe){S.__webglDepthbuffer=[];for(let le=0;le<6;le++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[le]),S.__webglDepthbuffer[le]===void 0)S.__webglDepthbuffer[le]=i.createRenderbuffer(),ee(S.__webglDepthbuffer[le],H,!1);else{let ye=H.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=S.__webglDepthbuffer[le];i.bindRenderbuffer(i.RENDERBUFFER,it),i.framebufferRenderbuffer(i.FRAMEBUFFER,ye,i.RENDERBUFFER,it)}}else{let le=H.texture.mipmaps;if(le&&le.length>0?t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),ee(S.__webglDepthbuffer,H,!1);else{let ye=H.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,it),i.framebufferRenderbuffer(i.FRAMEBUFFER,ye,i.RENDERBUFFER,it)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function xe(H,S,fe){let le=n.get(H);S!==void 0&&Ye(le.__webglFramebuffer,H,H.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),fe!==void 0&&oe(H)}function ie(H){let S=H.texture,fe=n.get(H),le=n.get(S);H.addEventListener("dispose",v);let ye=H.textures,it=H.isWebGLCubeRenderTarget===!0,st=ye.length>1;if(st||(le.__webglTexture===void 0&&(le.__webglTexture=i.createTexture()),le.__version=S.version,a.memory.textures++),it){fe.__webglFramebuffer=[];for(let Le=0;Le<6;Le++)if(S.mipmaps&&S.mipmaps.length>0){fe.__webglFramebuffer[Le]=[];for(let Ce=0;Ce<S.mipmaps.length;Ce++)fe.__webglFramebuffer[Le][Ce]=i.createFramebuffer()}else fe.__webglFramebuffer[Le]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){fe.__webglFramebuffer=[];for(let Le=0;Le<S.mipmaps.length;Le++)fe.__webglFramebuffer[Le]=i.createFramebuffer()}else fe.__webglFramebuffer=i.createFramebuffer();if(st)for(let Le=0,Ce=ye.length;Le<Ce;Le++){let Qe=n.get(ye[Le]);Qe.__webglTexture===void 0&&(Qe.__webglTexture=i.createTexture(),a.memory.textures++)}if(H.samples>0&&lt(H)===!1){fe.__webglMultisampledFramebuffer=i.createFramebuffer(),fe.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglMultisampledFramebuffer);for(let Le=0;Le<ye.length;Le++){let Ce=ye[Le];fe.__webglColorRenderbuffer[Le]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,fe.__webglColorRenderbuffer[Le]);let Qe=r.convert(Ce.format,Ce.colorSpace),vt=r.convert(Ce.type),N=y(Ce.internalFormat,Qe,vt,Ce.normalized,Ce.colorSpace,H.isXRRenderTarget===!0),ae=ut(H);i.renderbufferStorageMultisample(i.RENDERBUFFER,ae,N,H.width,H.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.RENDERBUFFER,fe.__webglColorRenderbuffer[Le])}i.bindRenderbuffer(i.RENDERBUFFER,null),H.depthBuffer&&(fe.__webglDepthRenderbuffer=i.createRenderbuffer(),ee(fe.__webglDepthRenderbuffer,H,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(it){t.bindTexture(i.TEXTURE_CUBE_MAP,le.__webglTexture),rt(i.TEXTURE_CUBE_MAP,S);for(let Le=0;Le<6;Le++)if(S.mipmaps&&S.mipmaps.length>0)for(let Ce=0;Ce<S.mipmaps.length;Ce++)Ye(fe.__webglFramebuffer[Le][Ce],H,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,Ce);else Ye(fe.__webglFramebuffer[Le],H,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0);m(S)&&M(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(st){for(let Le=0,Ce=ye.length;Le<Ce;Le++){let Qe=ye[Le],vt=n.get(Qe),N=i.TEXTURE_2D;(H.isWebGL3DRenderTarget||H.isWebGLArrayRenderTarget)&&(N=H.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(N,vt.__webglTexture),rt(N,Qe),Ye(fe.__webglFramebuffer,H,Qe,i.COLOR_ATTACHMENT0+Le,N,0),m(Qe)&&M(N)}t.unbindTexture()}else{let Le=i.TEXTURE_2D;if((H.isWebGL3DRenderTarget||H.isWebGLArrayRenderTarget)&&(Le=H.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Le,le.__webglTexture),rt(Le,S),S.mipmaps&&S.mipmaps.length>0)for(let Ce=0;Ce<S.mipmaps.length;Ce++)Ye(fe.__webglFramebuffer[Ce],H,S,i.COLOR_ATTACHMENT0,Le,Ce);else Ye(fe.__webglFramebuffer,H,S,i.COLOR_ATTACHMENT0,Le,0);m(S)&&M(Le),t.unbindTexture()}H.depthBuffer&&oe(H)}function de(H){let S=H.textures;for(let fe=0,le=S.length;fe<le;fe++){let ye=S[fe];if(m(ye)){let it=b(H),st=n.get(ye).__webglTexture;t.bindTexture(it,st),M(it),t.unbindTexture()}}}let Me=[],$e=[];function qe(H){if(H.samples>0){if(lt(H)===!1){let S=H.textures,fe=H.width,le=H.height,ye=i.COLOR_BUFFER_BIT,it=H.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=n.get(H),Le=S.length>1;if(Le)for(let Qe=0;Qe<S.length;Qe++)t.bindFramebuffer(i.FRAMEBUFFER,st.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Qe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,st.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Qe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,st.__webglMultisampledFramebuffer);let Ce=H.texture.mipmaps;Ce&&Ce.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,st.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,st.__webglFramebuffer);for(let Qe=0;Qe<S.length;Qe++){if(H.resolveDepthBuffer&&(H.depthBuffer&&(ye|=i.DEPTH_BUFFER_BIT),H.stencilBuffer&&H.resolveStencilBuffer&&(ye|=i.STENCIL_BUFFER_BIT)),Le){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,st.__webglColorRenderbuffer[Qe]);let vt=n.get(S[Qe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,vt,0)}i.blitFramebuffer(0,0,fe,le,0,0,fe,le,ye,i.NEAREST),c===!0&&(Me.length=0,$e.length=0,Me.push(i.COLOR_ATTACHMENT0+Qe),H.depthBuffer&&H.storeMultisampledDepthBuffer===!1&&(Me.push(it),$e.push(it),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,$e)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Me))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Le)for(let Qe=0;Qe<S.length;Qe++){t.bindFramebuffer(i.FRAMEBUFFER,st.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Qe,i.RENDERBUFFER,st.__webglColorRenderbuffer[Qe]);let vt=n.get(S[Qe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,st.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Qe,i.TEXTURE_2D,vt,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,st.__webglMultisampledFramebuffer)}else if(H.depthBuffer&&H.storeMultisampledDepthBuffer===!1&&c){let S=H.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function ut(H){return Math.min(s.maxSamples,H.samples)}function lt(H){let S=n.get(H);return H.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function J(H){let S=a.render.frame;h.get(H)!==S&&(h.set(H,S),H.update())}function It(H,S){let fe=H.colorSpace,le=H.format,ye=H.type;return H.isCompressedTexture===!0||H.isVideoTexture===!0||fe!==ul&&fe!==vr&&(wn.getTransfer(fe)===Ln?(le!==rs||ye!==zi)&&Qt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):en("WebGLTextures: Unsupported texture color space:",fe)),S}function At(H){return typeof HTMLImageElement<"u"&&H instanceof HTMLImageElement?(l.width=H.naturalWidth||H.width,l.height=H.naturalHeight||H.height):typeof VideoFrame<"u"&&H instanceof VideoFrame?(l.width=H.displayWidth,l.height=H.displayHeight):(l.width=H.width,l.height=H.height),l}this.allocateTextureUnit=j,this.resetTextureUnits=U,this.getTextureUnits=I,this.setTextureUnits=G,this.setTexture2D=Y,this.setTexture2DArray=V,this.setTexture3D=W,this.setTextureCube=Q,this.rebindTextures=xe,this.setupRenderTarget=ie,this.updateRenderTargetMipmap=de,this.updateMultisampleRenderTarget=qe,this.setupDepthRenderbuffer=oe,this.setupFrameBufferTexture=Ye,this.useMultisampledRTT=lt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Xy(i,e){function t(n,s=vr){let r,a=wn.getTransfer(s);if(n===zi)return i.UNSIGNED_BYTE;if(n===k0)return i.UNSIGNED_SHORT_4_4_4_4;if(n===V0)return i.UNSIGNED_SHORT_5_5_5_1;if(n===jh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ef)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Kh)return i.BYTE;if(n===Qh)return i.SHORT;if(n===Uo)return i.UNSIGNED_SHORT;if(n===G0)return i.INT;if(n===xr)return i.UNSIGNED_INT;if(n===js)return i.FLOAT;if(n===yi)return i.HALF_FLOAT;if(n===tf)return i.ALPHA;if(n===nf)return i.RGB;if(n===rs)return i.RGBA;if(n===Cr)return i.DEPTH_COMPONENT;if(n===Fr)return i.DEPTH_STENCIL;if(n===W0)return i.RED;if(n===X0)return i.RED_INTEGER;if(n===ba)return i.RG;if(n===Y0)return i.RG_INTEGER;if(n===q0)return i.RGBA_INTEGER;if(n===Jl||n===Kl||n===Ql||n===jl)if(a===Ln)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Jl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Kl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ql)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===jl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Jl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Kl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ql)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===jl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Z0||n===$0||n===J0||n===K0)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Z0)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===$0)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===J0)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===K0)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Q0||n===j0||n===eu||n===tu||n===nu||n===ec||n===iu)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Q0||n===j0)return a===Ln?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===eu)return a===Ln?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===tu)return r.COMPRESSED_R11_EAC;if(n===nu)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ec)return r.COMPRESSED_RG11_EAC;if(n===iu)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===su||n===ru||n===au||n===ou||n===lu||n===cu||n===uu||n===hu||n===fu||n===du||n===pu||n===mu||n===gu||n===xu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===su)return a===Ln?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ru)return a===Ln?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===au)return a===Ln?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ou)return a===Ln?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===lu)return a===Ln?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===cu)return a===Ln?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===uu)return a===Ln?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===hu)return a===Ln?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===fu)return a===Ln?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===du)return a===Ln?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===pu)return a===Ln?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===mu)return a===Ln?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===gu)return a===Ln?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===xu)return a===Ln?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===vu||n===yu||n===_u)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===vu)return a===Ln?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===yu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===_u)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Mu||n===Eu||n===tc||n===Su)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Mu)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Eu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===tc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Su)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Sa?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Yy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qy=`
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

}`,Pf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ml(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Cn({vertexShader:Yy,fragmentShader:qy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Fe(new an(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},If=class extends Pr{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,p=null,u=null,f=null,x=typeof XRWebGLBinding<"u",g=new Pf,m={},M=t.getContextAttributes(),b=null,y=null,_=[],w=[],A=new tt,v=null,R=null,P=new $i;P.viewport=new ri;let B=new $i;B.viewport=new ri;let T=[P,B],U=new U0,I=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(he){let Se=_[he];return Se===void 0&&(Se=new Mo,_[he]=Se),Se.getTargetRaySpace()},this.getControllerGrip=function(he){let Se=_[he];return Se===void 0&&(Se=new Mo,_[he]=Se),Se.getGripSpace()},this.getHand=function(he){let Se=_[he];return Se===void 0&&(Se=new Mo,_[he]=Se),Se.getHandSpace()};function j(he){let Se=w.indexOf(he.inputSource);if(Se===-1)return;let Oe=_[Se];Oe!==void 0&&(Oe.update(he.inputSource,he.frame,l||a),Oe.dispatchEvent({type:he.type,data:he.inputSource}))}function q(){s.removeEventListener("select",j),s.removeEventListener("selectstart",j),s.removeEventListener("selectend",j),s.removeEventListener("squeeze",j),s.removeEventListener("squeezestart",j),s.removeEventListener("squeezeend",j),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",Y);for(let he=0;he<_.length;he++){let Se=w[he];Se!==null&&(w[he]=null,_[he].disconnect(Se))}I=null,G=null,g.reset();for(let he in m)delete m[he];if(e.setRenderTarget(b),u=null,p=null,d=null,s=null,y=null,Et.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(A.width,A.height,!1),R!==null){let he=R.camera;he.fov=R.fov,he.zoom=R.zoom,he.updateProjectionMatrix(),R=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(he){r=he,n.isPresenting===!0&&Qt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(he){o=he,n.isPresenting===!0&&Qt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(he){l=he},this.getBaseLayer=function(){return p!==null?p:u},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return f},this.getSession=function(){return s},this.setSession=async function(he){if(s=he,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",j),s.addEventListener("selectstart",j),s.addEventListener("selectend",j),s.addEventListener("squeeze",j),s.addEventListener("squeezestart",j),s.addEventListener("squeezeend",j),s.addEventListener("end",q),s.addEventListener("inputsourceschange",Y),M.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(A),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Oe=null,Re=null,Ye=null;M.depth&&(Ye=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Oe=M.stencil?Fr:Cr,Re=M.stencil?Sa:xr);let ee={colorFormat:t.RGBA8,depthFormat:Ye,scaleFactor:r};d=this.getBinding(),p=d.createProjectionLayer(ee),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),y=new ai(p.textureWidth,p.textureHeight,{format:rs,type:zi,depthTexture:new Js(p.textureWidth,p.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,Oe),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}else{let Oe={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,t,Oe),s.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),y=new ai(u.framebufferWidth,u.framebufferHeight,{format:rs,type:zi,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Et.setContext(s),Et.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Y(he){for(let Se=0;Se<he.removed.length;Se++){let Oe=he.removed[Se],Re=w.indexOf(Oe);Re>=0&&(w[Re]=null,_[Re].disconnect(Oe))}for(let Se=0;Se<he.added.length;Se++){let Oe=he.added[Se],Re=w.indexOf(Oe);if(Re===-1){for(let ee=0;ee<_.length;ee++)if(ee>=w.length){w.push(Oe),Re=ee;break}else if(w[ee]===null){w[ee]=Oe,Re=ee;break}if(Re===-1)break}let Ye=_[Re];Ye&&Ye.connect(Oe)}}let V=new F,W=new F;function Q(he,Se,Oe){V.setFromMatrixPosition(Se.matrixWorld),W.setFromMatrixPosition(Oe.matrixWorld);let Re=V.distanceTo(W),Ye=Se.projectionMatrix.elements,ee=Oe.projectionMatrix.elements,Je=Ye[14]/(Ye[10]-1),oe=Ye[14]/(Ye[10]+1),xe=(Ye[9]+1)/Ye[5],ie=(Ye[9]-1)/Ye[5],de=(Ye[8]-1)/Ye[0],Me=(ee[8]+1)/ee[0],$e=Je*de,qe=Je*Me,ut=Re/(-de+Me),lt=ut*-de;if(Se.matrixWorld.decompose(he.position,he.quaternion,he.scale),he.translateX(lt),he.translateZ(ut),he.matrixWorld.compose(he.position,he.quaternion,he.scale),he.matrixWorldInverse.copy(he.matrixWorld).invert(),Ye[10]===-1)he.projectionMatrix.copy(Se.projectionMatrix),he.projectionMatrixInverse.copy(Se.projectionMatrixInverse);else{let J=Je+ut,It=oe+ut,At=$e-lt,H=qe+(Re-lt),S=xe*oe/It*J,fe=ie*oe/It*J;he.projectionMatrix.makePerspective(At,H,S,fe,J,It),he.projectionMatrixInverse.copy(he.projectionMatrix).invert()}}function be(he,Se){Se===null?he.matrixWorld.copy(he.matrix):he.matrixWorld.multiplyMatrices(Se.matrixWorld,he.matrix),he.matrixWorldInverse.copy(he.matrixWorld).invert()}this.updateCamera=function(he){if(s===null)return;let Se=he.near,Oe=he.far;g.texture!==null&&(g.depthNear>0&&(Se=g.depthNear),g.depthFar>0&&(Oe=g.depthFar)),U.near=B.near=P.near=Se,U.far=B.far=P.far=Oe,(I!==U.near||G!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),I=U.near,G=U.far),U.layers.mask=he.layers.mask|6,P.layers.mask=U.layers.mask&-5,B.layers.mask=U.layers.mask&-3;let Re=he.parent,Ye=U.cameras;be(U,Re);for(let ee=0;ee<Ye.length;ee++)be(Ye[ee],Re);Ye.length===2?Q(U,P,B):U.projectionMatrix.copy(P.projectionMatrix),R===null&&he.isPerspectiveCamera&&(R={camera:he,fov:he.fov,zoom:he.zoom}),Ve(he,U,Re)};function Ve(he,Se,Oe){Oe===null?he.matrix.copy(Se.matrixWorld):(he.matrix.copy(Oe.matrixWorld),he.matrix.invert(),he.matrix.multiply(Se.matrixWorld)),he.matrix.decompose(he.position,he.quaternion,he.scale),he.updateMatrixWorld(!0),he.projectionMatrix.copy(Se.projectionMatrix),he.projectionMatrixInverse.copy(Se.projectionMatrixInverse),he.isPerspectiveCamera&&(he.fov=pl*2*Math.atan(1/he.projectionMatrix.elements[5]),he.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(p===null&&u===null))return c},this.setFoveation=function(he){c=he,p!==null&&(p.fixedFoveation=he),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=he)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(U)},this.getCameraTexture=function(he){return m[he]};let Ne=null;function rt(he,Se){if(h=Se.getViewerPose(l||a),f=Se,h!==null){let Oe=h.views;u!==null&&(e.setRenderTargetFramebuffer(y,u.framebuffer),e.setRenderTarget(y));let Re=!1;Oe.length!==U.cameras.length&&(U.cameras.length=0,Re=!0);for(let oe=0;oe<Oe.length;oe++){let xe=Oe[oe],ie=null;if(u!==null)ie=u.getViewport(xe);else{let Me=d.getViewSubImage(p,xe);ie=Me.viewport,oe===0&&(e.setRenderTargetTextures(y,Me.colorTexture,Me.depthStencilTexture),e.setRenderTarget(y))}let de=T[oe];de===void 0&&(de=new $i,de.layers.enable(oe),de.viewport=new ri,T[oe]=de),de.matrix.fromArray(xe.transform.matrix),de.matrix.decompose(de.position,de.quaternion,de.scale),de.projectionMatrix.fromArray(xe.projectionMatrix),de.projectionMatrixInverse.copy(de.projectionMatrix).invert(),de.viewport.set(ie.x,ie.y,ie.width,ie.height),oe===0&&(U.matrix.copy(de.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Re===!0&&U.cameras.push(de)}let Ye=s.enabledFeatures;if(Ye&&Ye.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=n.getBinding();let oe=d.getDepthInformation(Oe[0]);oe&&oe.isValid&&oe.texture&&g.init(oe,s.renderState)}if(Ye&&Ye.includes("camera-access")&&x){e.state.unbindTexture(),d=n.getBinding();for(let oe=0;oe<Oe.length;oe++){let xe=Oe[oe].camera;if(xe){let ie=m[xe];ie||(ie=new Ml,m[xe]=ie);let de=d.getCameraImage(xe);ie.sourceTexture=de}}}}for(let Oe=0;Oe<_.length;Oe++){let Re=w[Oe],Ye=_[Oe];Re!==null&&Ye!==void 0&&Ye.update(Re,Se,l||a)}Ne&&Ne(he,Se),Se.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Se}),f=null}let Et=new qp;Et.setAnimationLoop(rt),this.setAnimationLoop=function(he){Ne=he},this.dispose=function(){}}},Zy=new zt,jp=new un;jp.set(-1,0,0,0,1,0,0,0,1);function $y(i,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,lf(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,M,b,y){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),d(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),p(g,m),m.isMeshPhysicalMaterial&&u(g,m,y)):m.isMeshMatcapMaterial?(r(g,m),f(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),x(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?c(g,m,M,b):m.isSpriteMaterial?l(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===es&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===es&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let M=e.get(m),b=M.envMap,y=M.envMapRotation;b&&(g.envMap.value=b,g.envMapRotation.value.setFromMatrix4(Zy.makeRotationFromEuler(y)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(jp),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,M,b){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*M,g.scale.value=b*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function p(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function u(g,m,M){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===es&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function f(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){let M=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Jy(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,_){let w=_.program;n.uniformBlockBinding(y,w)}function l(y,_){let w=s[y.id];w===void 0&&(g(y),w=h(y),s[y.id]=w,y.addEventListener("dispose",M));let A=_.program;n.updateUBOMapping(y,A);let v=e.render.frame;r[y.id]!==v&&(p(y),r[y.id]=v)}function h(y){let _=d();y.__bindingPointIndex=_;let w=i.createBuffer(),A=y.__size,v=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,A,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,w),w}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return en("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(y){let _=s[y.id],w=y.uniforms,A=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let v=0,R=w.length;v<R;v++){let P=w[v];if(Array.isArray(P))for(let B=0,T=P.length;B<T;B++)u(P[B],v,B,A);else u(P,v,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(y,_,w,A){if(x(y,_,w,A)===!0){let v=y.__offset,R=y.value;if(Array.isArray(R)){let P=0;for(let B=0;B<R.length;B++){let T=R[B],U=m(T);f(T,y.__data,P),typeof T!="number"&&typeof T!="boolean"&&!T.isMatrix3&&!ArrayBuffer.isView(T)&&(P+=U.storage/Float32Array.BYTES_PER_ELEMENT)}}else f(R,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,y.__data)}}function f(y,_,w){typeof y=="number"||typeof y=="boolean"?_[0]=y:y.isMatrix3?(_[0]=y.elements[0],_[1]=y.elements[1],_[2]=y.elements[2],_[3]=0,_[4]=y.elements[3],_[5]=y.elements[4],_[6]=y.elements[5],_[7]=0,_[8]=y.elements[6],_[9]=y.elements[7],_[10]=y.elements[8],_[11]=0):ArrayBuffer.isView(y)?_.set(new y.constructor(y.buffer,y.byteOffset,_.length)):y.toArray(_,w)}function x(y,_,w,A){let v=y.value,R=_+"_"+w;if(A[R]===void 0)return typeof v=="number"||typeof v=="boolean"?A[R]=v:ArrayBuffer.isView(v)?A[R]=v.slice():A[R]=v.clone(),!0;{let P=A[R];if(typeof v=="number"||typeof v=="boolean"){if(P!==v)return A[R]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(P.equals(v)===!1)return P.copy(v),!0}}return!1}function g(y){let _=y.uniforms,w=0,A=16;for(let R=0,P=_.length;R<P;R++){let B=Array.isArray(_[R])?_[R]:[_[R]];for(let T=0,U=B.length;T<U;T++){let I=B[T],G=Array.isArray(I.value)?I.value:[I.value];for(let j=0,q=G.length;j<q;j++){let Y=G[j],V=m(Y),W=w%A,Q=W%V.boundary,be=W+Q;w+=Q,be!==0&&A-be<V.storage&&(w+=A-be),I.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=w,w+=V.storage}}}let v=w%A;return v>0&&(w+=A-v),y.__size=w,y.__cache={},this}function m(y){let _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?Qt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(_.boundary=16,_.storage=y.byteLength):Qt("WebGLRenderer: Unsupported uniform value type.",y),_}function M(y){let _=y.target;_.removeEventListener("dispose",M);let w=a.indexOf(_.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function b(){for(let y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:c,update:l,dispose:b}}var Ky=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Or=null;function Qy(){return Or===null&&(Or=new $s(Ky,16,16,ba,yi),Or.name="DFG_LUT",Or.minFilter=Li,Or.magFilter=Li,Or.wrapS=ws,Or.wrapT=ws,Or.generateMipmaps=!1,Or.needsUpdate=!0),Or}var Cu=class{constructor(e={}){let{canvas:t=pp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:p=!1,outputBufferType:u=zi}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;let x=u,g=new Set([q0,Y0,X0]),m=new Set([zi,xr,Uo,Sa,k0,V0]),M=new Uint32Array(4),b=new Int32Array(4),y=new F,_=null,w=null,A=[],v=[],R=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Us,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,B=!1,T=null,U=null,I=null,G=null;this._outputColorSpace=yn;let j=0,q=0,Y=null,V=-1,W=null,Q=new ri,be=new ri,Ve=null,Ne=new xt(0),rt=0,Et=t.width,he=t.height,Se=1,Oe=null,Re=null,Ye=new ri(0,0,Et,he),ee=new ri(0,0,Et,he),Je=!1,oe=new bo,xe=!1,ie=!1,de=new zt,Me=new F,$e=new ri,qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ut=!1;function lt(){return Y===null?Se:1}let J=n;function It(D,ne){return t.getContext(D,ne)}let At,H,S,fe,le,ye,it,st,Le,Ce,Qe,vt,N,ae,ue,we,ze,z,Ae,pe,Be,Ue,re;try{let D={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Ge,!1),t.addEventListener("webglcontextrestored",dt,!1),t.addEventListener("webglcontextcreationerror",Ut,!1),J===null){let ne="webgl2";if(J=It(ne,D),J===null)throw It(ne)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}te()}catch(D){throw t.removeEventListener("webglcontextlost",Ge,!1),t.removeEventListener("webglcontextrestored",dt,!1),t.removeEventListener("webglcontextcreationerror",Ut,!1),en("WebGLRenderer: "+D.message),D}function te(){At=new rv(J),At.init(),Be=new Xy(J,At),H=new $x(J,At,e,Be),S=new Vy(J,At),H.reversedDepthBuffer&&p&&S.buffers.depth.setReversed(!0),U=J.createFramebuffer(),I=J.createFramebuffer(),G=J.createFramebuffer(),fe=new lv(J),le=new Cy,ye=new Wy(J,At,S,le,H,Be,fe),it=new sv(P),st=new ug(J),Ue=new qx(J,st),Le=new av(J,st,fe,Ue),Ce=new uv(J,Le,st,Ue,fe),z=new cv(J,H,ye),ue=new Jx(le),Qe=new Ay(P,it,At,H,Ue,ue),vt=new $y(P,le),N=new Iy,ae=new Oy(At),ze=new Yx(P,it,S,Ce,f,c),we=new ky(P,Ce,H),re=new Jy(J,fe,H,S),Ae=new Zx(J,At,fe),pe=new ov(J,At,fe),fe.programs=Qe.programs,P.capabilities=H,P.extensions=At,P.properties=le,P.renderLists=N,P.shadowMap=we,P.state=S,P.info=fe}x!==zi&&(R=new fv(x,t.width,t.height,o,s,r));let _e=new If(P,J);this.xr=_e,this.getContext=function(){return J},this.getContextAttributes=function(){return J.getContextAttributes()},this.forceContextLoss=function(){let D=At.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){let D=At.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return Se},this.setPixelRatio=function(D){D!==void 0&&(Se=D,this.setSize(Et,he,!1))},this.getSize=function(D){return D.set(Et,he)},this.setSize=function(D,ne,De=!0){if(_e.isPresenting){Qt("WebGLRenderer: Can't change size while VR device is presenting.");return}Et=D,he=ne,t.width=Math.floor(D*Se),t.height=Math.floor(ne*Se),De===!0&&(t.style.width=D+"px",t.style.height=ne+"px"),R!==null&&R.setSize(t.width,t.height),this.setViewport(0,0,D,ne)},this.getDrawingBufferSize=function(D){return D.set(Et*Se,he*Se).floor()},this.setDrawingBufferSize=function(D,ne,De){Et=D,he=ne,Se=De,t.width=Math.floor(D*De),t.height=Math.floor(ne*De),this.setViewport(0,0,D,ne)},this.setEffects=function(D){if(x===zi){en("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(D){for(let ne=0;ne<D.length;ne++)if(D[ne].isOutputPass===!0){Qt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(D||[])},this.getCurrentViewport=function(D){return D.copy(Q)},this.getViewport=function(D){return D.copy(Ye)},this.setViewport=function(D,ne,De,Ee){D.isVector4?Ye.set(D.x,D.y,D.z,D.w):Ye.set(D,ne,De,Ee),S.viewport(Q.copy(Ye).multiplyScalar(Se).round())},this.getScissor=function(D){return D.copy(ee)},this.setScissor=function(D,ne,De,Ee){D.isVector4?ee.set(D.x,D.y,D.z,D.w):ee.set(D,ne,De,Ee),S.scissor(be.copy(ee).multiplyScalar(Se).round())},this.getScissorTest=function(){return Je},this.setScissorTest=function(D){S.setScissorTest(Je=D)},this.setOpaqueSort=function(D){Oe=D},this.setTransparentSort=function(D){Re=D},this.getClearColor=function(D){return D.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor(...arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha(...arguments)},this.clear=function(D=!0,ne=!0,De=!0){let Ee=0;if(D){let Pe=!1;if(Y!==null){let _t=Y.texture.format;Pe=g.has(_t)}if(Pe){let _t=Y.texture.type,Dt=m.has(_t),K=ze.getClearColor(),se=ze.getClearAlpha(),ge=K.r,Xe=K.g,E=K.b;Dt?(M[0]=ge,M[1]=Xe,M[2]=E,M[3]=se,J.clearBufferuiv(J.COLOR,0,M)):(b[0]=ge,b[1]=Xe,b[2]=E,b[3]=se,J.clearBufferiv(J.COLOR,0,b))}else Ee|=J.COLOR_BUFFER_BIT}ne&&(Ee|=J.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),De&&(Ee|=J.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Ee!==0&&J.clear(Ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(D){D.setRenderer(this),T=D},this.dispose=function(){t.removeEventListener("webglcontextlost",Ge,!1),t.removeEventListener("webglcontextrestored",dt,!1),t.removeEventListener("webglcontextcreationerror",Ut,!1),ze.dispose(),N.dispose(),ae.dispose(),le.dispose(),it.dispose(),Ce.dispose(),Ue.dispose(),re.dispose(),Qe.dispose(),_e.dispose(),_e.removeEventListener("sessionstart",Te),_e.removeEventListener("sessionend",He),at.stop()};function Ge(D){D.preventDefault(),dl("WebGLRenderer: Context Lost."),B=!0}function dt(){dl("WebGLRenderer: Context Restored."),B=!1;let D=fe.autoReset,ne=we.enabled,De=we.autoUpdate,Ee=we.needsUpdate,Pe=we.type;te(),fe.autoReset=D,we.enabled=ne,we.autoUpdate=De,we.needsUpdate=Ee,we.type=Pe}function Ut(D){en("WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function Kt(D){let ne=D.target;ne.removeEventListener("dispose",Kt),sn(ne)}function sn(D){kt(D),le.remove(D)}function kt(D){let ne=le.get(D).programs;ne!==void 0&&(ne.forEach(function(De){Qe.releaseProgram(De)}),D.isShaderMaterial&&Qe.releaseShaderCache(D))}this.renderBufferDirect=function(D,ne,De,Ee,Pe,_t){ne===null&&(ne=qe);let Dt=Pe.isMesh&&Pe.matrixWorld.determinantAffine()<0,K=di(D,ne,De,Ee,Pe);S.setMaterial(Ee,Dt);let se=De.index,ge=1;if(Ee.wireframe===!0){if(se=Le.getWireframeAttribute(De),se===void 0)return;ge=2}let Xe=De.drawRange,E=De.attributes.position,O=Xe.start*ge,Z=(Xe.start+Xe.count)*ge;_t!==null&&(O=Math.max(O,_t.start*ge),Z=Math.min(Z,(_t.start+_t.count)*ge)),se!==null?(O=Math.max(O,0),Z=Math.min(Z,se.count)):E!=null&&(O=Math.max(O,0),Z=Math.min(Z,E.count));let $=Z-O;if($<0||$===1/0)return;Ue.setup(Pe,Ee,K,De,se);let me,Ie=Ae;if(se!==null&&(me=st.get(se),Ie=pe,Ie.setIndex(me)),Pe.isMesh)Ee.wireframe===!0?(S.setLineWidth(Ee.wireframeLinewidth*lt()),Ie.setMode(J.LINES)):Ie.setMode(J.TRIANGLES);else if(Pe.isLine){let ve=Ee.linewidth;ve===void 0&&(ve=1),S.setLineWidth(ve*lt()),Pe.isLineSegments?Ie.setMode(J.LINES):Pe.isLineLoop?Ie.setMode(J.LINE_LOOP):Ie.setMode(J.LINE_STRIP)}else Pe.isPoints?Ie.setMode(J.POINTS):Pe.isSprite&&Ie.setMode(J.TRIANGLES);if(Pe.isBatchedMesh)if(At.get("WEBGL_multi_draw"))Ie.renderMultiDraw(Pe._multiDrawStarts,Pe._multiDrawCounts,Pe._multiDrawCount);else{let ve=Pe._multiDrawStarts,X=Pe._multiDrawCounts,Ze=Pe._multiDrawCount,Ke=se?st.get(se).bytesPerElement:1,ht=le.get(Ee).currentProgram.getUniforms();for(let ft=0;ft<Ze;ft++)ht.setValue(J,"_gl_DrawID",ft),Ie.render(ve[ft]/Ke,X[ft])}else if(Pe.isInstancedMesh)Ie.renderInstances(O,$,Pe.count);else if(De.isInstancedBufferGeometry){let ve=De._maxInstanceCount!==void 0?De._maxInstanceCount:1/0,X=Math.min(De.instanceCount,ve);Ie.renderInstances(O,$,X)}else Ie.render(O,$)};function Tn(D,ne,De,Ee){T!==null&&D.isNodeMaterial&&T.setObject(Ee,D),xe===!0&&ue.setState(D,De,!1),D.transparent===!0&&D.side===oi&&D.forceSinglePass===!1?(D.side=es,D.needsUpdate=!0,Wt(D,ne,Ee),D.side=ya,D.needsUpdate=!0,Wt(D,ne,Ee),D.side=oi):Wt(D,ne,Ee)}this.compile=function(D,ne,De=null){De===null&&(De=D),T!==null&&T.renderStart(D,ne,De),w=ae.get(De),w.init(ne),v.push(w),De.traverseVisible(function(Pe){Pe.isLight&&Pe.layers.test(ne.layers)&&(w.pushLight(Pe),Pe.castShadow&&w.pushShadow(Pe))}),D!==De&&D.traverseVisible(function(Pe){Pe.isLight&&Pe.layers.test(ne.layers)&&(w.pushLight(Pe),Pe.castShadow&&w.pushShadow(Pe))}),w.setupLights(),T!==null&&T.updateLights(w.state.lightsArray),ie=this.localClippingEnabled,xe=ue.init(this.clippingPlanes,ie),xe===!0&&ue.setGlobalState(this.clippingPlanes,ne),T!==null&&we.render(w.state.shadowsArray,De,ne);let Ee=new Set;return D.traverse(function(Pe){if(!(Pe.isMesh||Pe.isPoints||Pe.isLine||Pe.isSprite))return;let _t=Pe.material;if(_t)if(Array.isArray(_t))for(let Dt=0;Dt<_t.length;Dt++){let K=_t[Dt];Tn(K,De,ne,Pe),Ee.add(K)}else Tn(_t,De,ne,Pe),Ee.add(_t)}),w=v.pop(),T!==null&&T.renderEnd(),Ee},this.compileAsync=function(D,ne,De=null){let Ee=this.compile(D,ne,De);return new Promise(Pe=>{function _t(){if(Ee.forEach(function(Dt){let se=le.get(Dt).currentProgram;(se===void 0||se.isReady())&&Ee.delete(Dt)}),Ee.size===0){Pe(D);return}setTimeout(_t,10)}At.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let Mn=null;function C(D){Mn&&Mn(D)}function Te(){at.stop()}function He(){at.start()}let at=new qp;at.setAnimationLoop(C),typeof self<"u"&&at.setContext(self),this.setAnimationLoop=function(D){Mn=D,_e.setAnimationLoop(D),D===null?at.stop():at.start()},_e.addEventListener("sessionstart",Te),_e.addEventListener("sessionend",He),this.render=function(D,ne){if(ne!==void 0&&ne.isCamera!==!0){en("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;T!==null&&T.renderStart(D,ne);let De=_e.enabled===!0&&_e.isPresenting===!0,Ee=R!==null&&(Y===null||De)&&R.begin(P,Y);if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),ne.parent===null&&ne.matrixWorldAutoUpdate===!0&&ne.updateMatrixWorld(),_e.enabled===!0&&_e.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(_e.cameraAutoUpdate===!0&&_e.updateCamera(ne),ne=_e.getCamera()),D.isScene===!0&&D.onBeforeRender(P,D,ne,Y),w=ae.get(D,v.length),w.init(ne),w.state.textureUnits=ye.getTextureUnits(),v.push(w),de.multiplyMatrices(ne.projectionMatrix,ne.matrixWorldInverse),oe.setFromProjectionMatrix(de,gr,ne.reversedDepth),ie=this.localClippingEnabled,xe=ue.init(this.clippingPlanes,ie),_=N.get(D,A.length),_.init(),A.push(_),_e.enabled===!0&&_e.isPresenting===!0){let Dt=P.xr.getDepthSensingMesh();Dt!==null&&ot(Dt,ne,-1/0,P.sortObjects)}ot(D,ne,0,P.sortObjects),_.finish(),T!==null&&T.updateLights(w.state.lightsArray),P.sortObjects===!0&&_.sort(Oe,Re),ut=_e.enabled===!1||_e.isPresenting===!1||_e.hasDepthSensing()===!1,ut&&ze.addToRenderList(_,D),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),xe===!0&&ue.beginShadows();let Pe=w.state.shadowsArray;if(we.render(Pe,D,ne),xe===!0&&ue.endShadows(),(Ee&&R.hasRenderPass())===!1){let Dt=_.opaque,K=_.transmissive;if(w.setupLights(),ne.isArrayCamera){let se=ne.cameras;if(K.length>0)for(let ge=0,Xe=se.length;ge<Xe;ge++){let E=se[ge];Pt(Dt,K,D,E)}ut&&ze.render(D);for(let ge=0,Xe=se.length;ge<Xe;ge++){let E=se[ge];Ht(_,D,E,E.viewport)}}else K.length>0&&Pt(Dt,K,D,ne),ut&&ze.render(D),Ht(_,D,ne)}Y!==null&&q===0&&(ye.updateMultisampleRenderTarget(Y),ye.updateRenderTargetMipmap(Y)),Ee&&R.end(P),D.isScene===!0&&D.onAfterRender(P,D,ne),Ue.resetDefaultState(),V=-1,W=null,v.pop(),v.length>0?(w=v[v.length-1],ye.setTextureUnits(w.state.textureUnits),xe===!0&&ue.setGlobalState(P.clippingPlanes,w.state.camera)):w=null,A.pop(),A.length>0?_=A[A.length-1]:_=null,T!==null&&T.renderEnd()};function ot(D,ne,De,Ee){if(D.visible===!1)return;if(D.layers.test(ne.layers)){if(D.isGroup)De=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(ne);else if(D.isLightProbeGrid)w.pushLightProbeGrid(D);else if(D.isLight)w.pushLight(D),D.castShadow&&w.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||D.intersectsFrustum(oe)){Ee&&$e.setFromMatrixPosition(D.matrixWorld).applyMatrix4(de);let Dt=Ce.update(D),K=D.material;K.visible&&_.push(D,Dt,K,De,$e.z,null,ne)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||D.intersectsFrustum(oe))){let Dt=Ce.update(D),K=D.material;if(Ee&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),$e.copy(D.boundingSphere.center)):(Dt.boundingSphere===null&&Dt.computeBoundingSphere(),$e.copy(Dt.boundingSphere.center)),$e.applyMatrix4(D.matrixWorld).applyMatrix4(de)),Array.isArray(K)){let se=Dt.groups;for(let ge=0,Xe=se.length;ge<Xe;ge++){let E=se[ge],O=K[E.materialIndex];O&&O.visible&&_.push(D,Dt,O,De,$e.z,E,ne)}}else K.visible&&_.push(D,Dt,K,De,$e.z,null,ne)}}let _t=D.children;for(let Dt=0,K=_t.length;Dt<K;Dt++)ot(_t[Dt],ne,De,Ee)}function Ht(D,ne,De,Ee){let{opaque:Pe,transmissive:_t,transparent:Dt}=D;w.setupLightsView(De),xe===!0&&ue.setGlobalState(P.clippingPlanes,De),Ee&&S.viewport(Q.copy(Ee)),Pe.length>0&&St(Pe,ne,De),_t.length>0&&St(_t,ne,De),Dt.length>0&&St(Dt,ne,De),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function Pt(D,ne,De,Ee){if((De.isScene===!0?De.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[Ee.id]===void 0){let O=At.has("EXT_color_buffer_half_float")||At.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[Ee.id]=new ai(1,1,{generateMipmaps:!0,type:O?yi:zi,minFilter:Ur,samples:Math.max(4,H.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:wn.workingColorSpace})}let _t=w.state.transmissionRenderTarget[Ee.id],Dt=Ee.viewport||Q;_t.setSize(Dt.z*P.transmissionResolutionScale,Dt.w*P.transmissionResolutionScale);let K=P.getRenderTarget(),se=P.getActiveCubeFace(),ge=P.getActiveMipmapLevel();P.setRenderTarget(_t),P.getClearColor(Ne),rt=P.getClearAlpha(),rt<1&&P.setClearColor(16777215,.5),P.clear(),ut&&ze.render(De);let Xe=P.toneMapping;P.toneMapping=Us;let E=Ee.viewport;if(Ee.viewport!==void 0&&(Ee.viewport=void 0),w.setupLightsView(Ee),xe===!0&&ue.setGlobalState(P.clippingPlanes,Ee),St(D,De,Ee),ye.updateMultisampleRenderTarget(_t),ye.updateRenderTargetMipmap(_t),At.has("WEBGL_multisampled_render_to_texture")===!1){let O=!1;for(let Z=0,$=ne.length;Z<$;Z++){let me=ne[Z],{object:Ie,geometry:ve,material:X,group:Ze}=me;if(X.side===oi&&Ie.layers.test(Ee.layers)){let Ke=X.side;X.side=es,X.needsUpdate=!0,bt(Ie,De,Ee,ve,X,Ze),X.side=Ke,X.needsUpdate=!0,O=!0}}O===!0&&(ye.updateMultisampleRenderTarget(_t),ye.updateRenderTargetMipmap(_t))}P.setRenderTarget(K,se,ge),P.setClearColor(Ne,rt),E!==void 0&&(Ee.viewport=E),P.toneMapping=Xe}function St(D,ne,De){let Ee=ne.isScene===!0?ne.overrideMaterial:null;for(let Pe=0,_t=D.length;Pe<_t;Pe++){let Dt=D[Pe],{object:K,geometry:se,group:ge}=Dt,Xe=Dt.material;Xe.allowOverride===!0&&Ee!==null&&(Xe=Ee),K.layers.test(De.layers)&&bt(K,ne,De,se,Xe,ge)}}function bt(D,ne,De,Ee,Pe,_t){T!==null&&Pe.isNodeMaterial&&T.setObject(D,Pe),D.onBeforeRender(P,ne,De,Ee,Pe,_t),D.modelViewMatrix.multiplyMatrices(De.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),Pe.onBeforeRender(P,ne,De,Ee,D,_t),Pe.transparent===!0&&Pe.side===oi&&Pe.forceSinglePass===!1?(Pe.side=es,Pe.needsUpdate=!0,P.renderBufferDirect(De,ne,Ee,Pe,D,_t),Pe.side=ya,Pe.needsUpdate=!0,P.renderBufferDirect(De,ne,Ee,Pe,D,_t),Pe.side=oi):P.renderBufferDirect(De,ne,Ee,Pe,D,_t),D.onAfterRender(P,ne,De,Ee,Pe,_t)}function Wt(D,ne,De){ne.isScene!==!0&&(ne=qe);let Ee=le.get(D),Pe=w.state.lights,_t=w.state.shadowsArray,Dt=Pe.state.version,K=Qe.getParameters(D,Pe.state,_t,ne,De,w.state.lightProbeGridArray),se=Qe.getProgramCacheKey(K),ge=Ee.programs;Ee.environment=D.isMeshStandardMaterial||D.isMeshLambertMaterial||D.isMeshPhongMaterial?ne.environment:null,Ee.fog=ne.fog;let Xe=D.isMeshStandardMaterial||D.isMeshLambertMaterial&&!D.envMap||D.isMeshPhongMaterial&&!D.envMap;Ee.envMap=it.get(D.envMap||Ee.environment,Xe),Ee.envMapRotation=Ee.environment!==null&&D.envMap===null?ne.environmentRotation:D.envMapRotation,ge===void 0&&(D.addEventListener("dispose",Kt),ge=new Map,Ee.programs=ge);let E=ge.get(se);if(E!==void 0){if(Ee.currentProgram===E&&Ee.lightsStateVersion===Dt)return Pn(D,K),E}else K.uniforms=Qe.getUniforms(D),T!==null&&D.isNodeMaterial&&T.build(D,De,K),D.onBeforeCompile(K,P),E=Qe.acquireProgram(K,se),ge.set(se,E),Ee.uniforms=K.uniforms;let O=Ee.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(O.clippingPlanes=ue.uniform),Pn(D,K),Ee.needsLights=ni(D),Ee.lightsStateVersion=Dt,Ee.needsLights&&(O.ambientLightColor.value=Pe.state.ambient,O.lightProbe.value=Pe.state.probe,O.sunLights.value=Pe.state.sun,O.sunLightShadows.value=Pe.state.sunShadow,O.directionalLights.value=Pe.state.directional,O.directionalLightShadows.value=Pe.state.directionalShadow,O.spotLights.value=Pe.state.spot,O.spotLightShadows.value=Pe.state.spotShadow,O.rectAreaLights.value=Pe.state.rectArea,O.ltc_1.value=Pe.state.rectAreaLTC1,O.ltc_2.value=Pe.state.rectAreaLTC2,O.pointLights.value=Pe.state.point,O.pointLightShadows.value=Pe.state.pointShadow,O.hemisphereLights.value=Pe.state.hemi,O.sunShadowMatrix.value=Pe.state.sunShadowMatrix,O.sunShadowCascade.value=Pe.state.sunShadowCascade,O.directionalShadowMatrix.value=Pe.state.directionalShadowMatrix,O.spotLightMatrix.value=Pe.state.spotLightMatrix,O.spotLightMap.value=Pe.state.spotLightMap,O.pointShadowMatrix.value=Pe.state.pointShadowMatrix),Ee.lightProbeGrid=w.state.lightProbeGridArray.length>0,Ee.currentProgram=E,Ee.uniformsList=null,E}function Yt(D){if(D.uniformsList===null){let ne=D.currentProgram.getUniforms();D.uniformsList=Bo.seqWithValue(ne.seq,D.uniforms)}return D.uniformsList}function Pn(D,ne){let De=le.get(D);De.outputColorSpace=ne.outputColorSpace,De.batching=ne.batching,De.batchingColor=ne.batchingColor,De.instancing=ne.instancing,De.instancingColor=ne.instancingColor,De.instancingMorph=ne.instancingMorph,De.skinning=ne.skinning,De.morphTargets=ne.morphTargets,De.morphNormals=ne.morphNormals,De.morphColors=ne.morphColors,De.morphTargetsCount=ne.morphTargetsCount,De.numClippingPlanes=ne.numClippingPlanes,De.numIntersection=ne.numClipIntersection,De.vertexAlphas=ne.vertexAlphas,De.vertexTangents=ne.vertexTangents,De.toneMapping=ne.toneMapping}function qn(D,ne){if(D.length===0)return null;if(D.length===1)return D[0].texture!==null?D[0]:null;y.setFromMatrixPosition(ne.matrixWorld);for(let De=0,Ee=D.length;De<Ee;De++){let Pe=D[De];if(Pe.texture!==null&&Pe.boundingBox.containsPoint(y))return Pe}return null}function di(D,ne,De,Ee,Pe){ne.isScene!==!0&&(ne=qe),ye.resetTextureUnits();let _t=ne.fog,Dt=Ee.isMeshStandardMaterial||Ee.isMeshLambertMaterial||Ee.isMeshPhongMaterial?ne.environment:null,K=Y===null?P.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:wn.workingColorSpace,se=Ee.isMeshStandardMaterial||Ee.isMeshLambertMaterial&&!Ee.envMap||Ee.isMeshPhongMaterial&&!Ee.envMap,ge=it.get(Ee.envMap||Dt,se),Xe=Ee.vertexColors===!0&&!!De.attributes.color&&De.attributes.color.itemSize===4,E=!!De.attributes.tangent&&(!!Ee.normalMap||Ee.anisotropy>0),O=!!De.morphAttributes.position,Z=!!De.morphAttributes.normal,$=!!De.morphAttributes.color,me=Us;Ee.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(me=P.toneMapping);let Ie=De.morphAttributes.position||De.morphAttributes.normal||De.morphAttributes.color,ve=Ie!==void 0?Ie.length:0,X=le.get(Ee),Ze=w.state.lights;if(xe===!0&&(ie===!0||D!==W)){let Ot=D===W&&Ee.id===V;ue.setState(Ee,D,Ot)}let Ke=!1;Ee.version===X.__version?(X.needsLights&&X.lightsStateVersion!==Ze.state.version||X.outputColorSpace!==K||Pe.isBatchedMesh&&X.batching===!1||!Pe.isBatchedMesh&&X.batching===!0||Pe.isBatchedMesh&&X.batchingColor===!0&&Pe._colorsTexture===null||Pe.isBatchedMesh&&X.batchingColor===!1&&Pe._colorsTexture!==null||Pe.isInstancedMesh&&X.instancing===!1||!Pe.isInstancedMesh&&X.instancing===!0||Pe.isSkinnedMesh&&X.skinning===!1||!Pe.isSkinnedMesh&&X.skinning===!0||Pe.isInstancedMesh&&X.instancingColor===!0&&Pe.instanceColor===null||Pe.isInstancedMesh&&X.instancingColor===!1&&Pe.instanceColor!==null||Pe.isInstancedMesh&&X.instancingMorph===!0&&Pe.morphTexture===null||Pe.isInstancedMesh&&X.instancingMorph===!1&&Pe.morphTexture!==null||X.envMap!==ge||Ee.fog===!0&&X.fog!==_t||X.numClippingPlanes!==void 0&&(X.numClippingPlanes!==ue.numPlanes||X.numIntersection!==ue.numIntersection)||X.vertexAlphas!==Xe||X.vertexTangents!==E||X.morphTargets!==O||X.morphNormals!==Z||X.morphColors!==$||X.toneMapping!==me||X.morphTargetsCount!==ve||!!X.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(Ke=!0):(Ke=!0,X.__version=Ee.version);let ht=X.currentProgram;Ke===!0&&(ht=Wt(Ee,ne,Pe),T&&Ee.isNodeMaterial&&T.onUpdateProgram(Ee,ht,X));let ft=!1,pt=!1,Ct=!1,yt=ht.getUniforms(),nt=X.uniforms;if(S.useProgram(ht.program)&&(ft=!0,pt=!0,Ct=!0),Ee.id!==V&&(V=Ee.id,pt=!0),X.needsLights){let Ot=qn(w.state.lightProbeGridArray,Pe);X.lightProbeGrid!==Ot&&(X.lightProbeGrid=Ot,pt=!0)}if(ft||W!==D){S.buffers.depth.getReversed()&&D.reversedDepth!==!0&&(D._reversedDepth=!0,D.updateProjectionMatrix()),yt.setValue(J,"projectionMatrix",D.projectionMatrix),yt.setValue(J,"viewMatrix",D.matrixWorldInverse);let Rn=yt.map.cameraPosition;Rn!==void 0&&Rn.setValue(J,Me.setFromMatrixPosition(D.matrixWorld)),H.logarithmicDepthBuffer&&yt.setValue(J,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(Ee.isMeshPhongMaterial||Ee.isMeshToonMaterial||Ee.isMeshLambertMaterial||Ee.isMeshBasicMaterial||Ee.isMeshStandardMaterial||Ee.isShaderMaterial)&&yt.setValue(J,"isOrthographic",D.isOrthographicCamera===!0),W!==D&&(W=D,pt=!0,Ct=!0)}if(X.needsLights&&(Ze.state.sunShadowMap.length>0&&yt.setValue(J,"sunShadowMap",Ze.state.sunShadowMap,ye),Ze.state.directionalShadowMap.length>0&&yt.setValue(J,"directionalShadowMap",Ze.state.directionalShadowMap,ye),Ze.state.spotShadowMap.length>0&&yt.setValue(J,"spotShadowMap",Ze.state.spotShadowMap,ye),Ze.state.pointShadowMap.length>0&&yt.setValue(J,"pointShadowMap",Ze.state.pointShadowMap,ye)),Pe.isSkinnedMesh){yt.setOptional(J,Pe,"bindMatrix"),yt.setOptional(J,Pe,"bindMatrixInverse");let Ot=Pe.skeleton;Ot&&(Ot.boneTexture===null&&Ot.computeBoneTexture(),yt.setValue(J,"boneTexture",Ot.boneTexture,ye))}Pe.isBatchedMesh&&(yt.setOptional(J,Pe,"batchingTexture"),yt.setValue(J,"batchingTexture",Pe._matricesTexture,ye),yt.setOptional(J,Pe,"batchingIdTexture"),yt.setValue(J,"batchingIdTexture",Pe._indirectTexture,ye),yt.setOptional(J,Pe,"batchingColorTexture"),Pe._colorsTexture!==null&&yt.setValue(J,"batchingColorTexture",Pe._colorsTexture,ye));let wt=De.morphAttributes;if((wt.position!==void 0||wt.normal!==void 0||wt.color!==void 0)&&z.update(Pe,De,ht),(pt||X.receiveShadow!==Pe.receiveShadow)&&(X.receiveShadow=Pe.receiveShadow,yt.setValue(J,"receiveShadow",Pe.receiveShadow)),(Ee.isMeshStandardMaterial||Ee.isMeshLambertMaterial||Ee.isMeshPhongMaterial)&&Ee.envMap===null&&ne.environment!==null&&(nt.envMapIntensity.value=ne.environmentIntensity),nt.dfgLUT!==void 0&&(nt.dfgLUT.value=Qy()),pt){if(yt.setValue(J,"toneMappingExposure",P.toneMappingExposure),X.needsLights&&ti(nt,Ct),_t&&Ee.fog===!0&&vt.refreshFogUniforms(nt,_t),vt.refreshMaterialUniforms(nt,Ee,Se,he,w.state.transmissionRenderTarget[D.id]),X.needsLights&&X.lightProbeGrid){let Ot=X.lightProbeGrid;nt.probesSH.value=Ot.texture,nt.probesMin.value.copy(Ot.boundingBox.min),nt.probesMax.value.copy(Ot.boundingBox.max),nt.probesResolution.value.copy(Ot.resolution)}Bo.upload(J,Yt(X),nt,ye)}if(Ee.isShaderMaterial&&Ee.uniformsNeedUpdate===!0&&(Bo.upload(J,Yt(X),nt,ye),Ee.uniformsNeedUpdate=!1),Ee.isSpriteMaterial&&yt.setValue(J,"center",Pe.center),yt.setValue(J,"modelViewMatrix",Pe.modelViewMatrix),yt.setValue(J,"normalMatrix",Pe.normalMatrix),yt.setValue(J,"modelMatrix",Pe.matrixWorld),Ee.uniformsGroups!==void 0){let Ot=Ee.uniformsGroups;for(let Rn=0,On=Ot.length;Rn<On;Rn++){let kn=Ot[Rn];re.update(kn,ht),re.bind(kn,ht)}}return ht}function ti(D,ne){D.ambientLightColor.needsUpdate=ne,D.lightProbe.needsUpdate=ne,D.sunLights.needsUpdate=ne,D.sunLightShadows.needsUpdate=ne,D.directionalLights.needsUpdate=ne,D.directionalLightShadows.needsUpdate=ne,D.pointLights.needsUpdate=ne,D.pointLightShadows.needsUpdate=ne,D.spotLights.needsUpdate=ne,D.spotLightShadows.needsUpdate=ne,D.rectAreaLights.needsUpdate=ne,D.hemisphereLights.needsUpdate=ne}function ni(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(D,ne,De){let Ee=le.get(D);Ee.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,Ee.__autoAllocateDepthBuffer===!1&&(Ee.__useRenderToTexture=!1),le.get(D.texture).__webglTexture=ne,le.get(D.depthTexture).__webglTexture=Ee.__autoAllocateDepthBuffer?void 0:De,Ee.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,ne){let De=le.get(D);De.__webglFramebuffer=ne,De.__useDefaultFramebuffer=ne===void 0},this.setRenderTarget=function(D,ne=0,De=0){Y=D,j=ne,q=De;let Ee=null,Pe=!1,_t=!1;if(D){let K=le.get(D);if(K.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(J.FRAMEBUFFER,K.__webglFramebuffer),Q.copy(D.viewport),be.copy(D.scissor),Ve=D.scissorTest,S.viewport(Q),S.scissor(be),S.setScissorTest(Ve),V=-1;return}else if(K.__webglFramebuffer===void 0)ye.setupRenderTarget(D);else if(K.__hasExternalTextures)ye.rebindTextures(D,le.get(D.texture).__webglTexture,le.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){let Xe=D.depthTexture;if(K.__boundDepthTexture!==Xe){if(Xe!==null&&le.has(Xe)&&(D.width!==Xe.image.width||D.height!==Xe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ye.setupDepthRenderbuffer(D)}}let se=D.texture;(se.isData3DTexture||se.isDataArrayTexture||se.isCompressedArrayTexture)&&(_t=!0);let ge=le.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(ge[ne])?Ee=ge[ne][De]:Ee=ge[ne],Pe=!0):D.samples>0&&ye.useMultisampledRTT(D)===!1?Ee=le.get(D).__webglMultisampledFramebuffer:Array.isArray(ge)?Ee=ge[De]:Ee=ge,Q.copy(D.viewport),be.copy(D.scissor),Ve=D.scissorTest}else Q.copy(Ye).multiplyScalar(Se).floor(),be.copy(ee).multiplyScalar(Se).floor(),Ve=Je;if(De!==0&&(Ee=U),S.bindFramebuffer(J.FRAMEBUFFER,Ee)&&S.drawBuffers(D,Ee),S.viewport(Q),S.scissor(be),S.setScissorTest(Ve),Pe){let K=le.get(D.texture);J.framebufferTexture2D(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+ne,K.__webglTexture,De)}else if(_t){let K=ne;for(let se=0;se<D.textures.length;se++){let ge=le.get(D.textures[se]);J.framebufferTextureLayer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+se,ge.__webglTexture,De,K)}}else if(D!==null&&De!==0){let K=le.get(D.texture);J.framebufferTexture2D(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,K.__webglTexture,De)}V=-1};function ii(D){let ne=le.get(D);return(ne.__readFormat!==D.format||ne.__readType!==D.type)&&(ne.__readFormat=D.format,ne.__readType=D.type,ne.__formatReadable=H.textureFormatReadable(D.format),ne.__typeReadable=H.textureTypeReadable(D.type)),ne}this.readRenderTargetPixels=function(D,ne,De,Ee,Pe,_t,Dt,K=0){if(!(D&&D.isWebGLRenderTarget)){en("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let se=le.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Dt!==void 0&&(se=se[Dt]),se){S.bindFramebuffer(J.FRAMEBUFFER,se);try{let ge=D.textures[K],Xe=ge.format,E=ge.type;D.textures.length>1&&J.readBuffer(J.COLOR_ATTACHMENT0+K);let O=ii(ge);if(O.__formatReadable===!1){en("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(O.__typeReadable===!1){en("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ne>=0&&ne<=D.width-Ee&&De>=0&&De<=D.height-Pe&&J.readPixels(ne,De,Ee,Pe,Be.convert(Xe),Be.convert(E),_t)}finally{let ge=Y!==null?le.get(Y).__webglFramebuffer:null;S.bindFramebuffer(J.FRAMEBUFFER,ge)}}},this.readRenderTargetPixelsAsync=async function(D,ne,De,Ee,Pe,_t,Dt,K=0){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let se=le.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Dt!==void 0&&(se=se[Dt]),se)if(ne>=0&&ne<=D.width-Ee&&De>=0&&De<=D.height-Pe){S.bindFramebuffer(J.FRAMEBUFFER,se);let ge=D.textures[K],Xe=ge.format,E=ge.type;D.textures.length>1&&J.readBuffer(J.COLOR_ATTACHMENT0+K);let O=ii(ge);if(O.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(O.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Z=J.createBuffer();J.bindBuffer(J.PIXEL_PACK_BUFFER,Z),J.bufferData(J.PIXEL_PACK_BUFFER,_t.byteLength,J.STREAM_READ),J.readPixels(ne,De,Ee,Pe,Be.convert(Xe),Be.convert(E),0),J.bindBuffer(J.PIXEL_PACK_BUFFER,null);let $=Y!==null?le.get(Y).__webglFramebuffer:null;S.bindFramebuffer(J.FRAMEBUFFER,$);let me=J.fenceSync(J.SYNC_GPU_COMMANDS_COMPLETE,0);return J.flush(),await gp(J,me,4),J.bindBuffer(J.PIXEL_PACK_BUFFER,Z),J.getBufferSubData(J.PIXEL_PACK_BUFFER,0,_t),J.bindBuffer(J.PIXEL_PACK_BUFFER,null),J.deleteBuffer(Z),J.deleteSync(me),_t}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,ne=null,De=0){let Ee=Math.pow(2,-De),Pe=Math.floor(D.image.width*Ee),_t=Math.floor(D.image.height*Ee),Dt=ne!==null?ne.x:0,K=ne!==null?ne.y:0;ye.setTexture2D(D,0),J.copyTexSubImage2D(J.TEXTURE_2D,De,0,0,Dt,K,Pe,_t),S.unbindTexture()},this.copyTextureToTexture=function(D,ne,De=null,Ee=null,Pe=0,_t=0){let Dt,K,se,ge,Xe,E,O,Z,$,me=D.isCompressedTexture?D.mipmaps[_t]:D.image;if(De!==null)Dt=De.max.x-De.min.x,K=De.max.y-De.min.y,se=De.isBox3?De.max.z-De.min.z:1,ge=De.min.x,Xe=De.min.y,E=De.isBox3?De.min.z:0;else{let nt=Math.pow(2,-Pe);Dt=Math.floor(me.width*nt),K=Math.floor(me.height*nt),D.isDataArrayTexture?se=me.depth:D.isData3DTexture?se=Math.floor(me.depth*nt):se=1,ge=0,Xe=0,E=0}Ee!==null?(O=Ee.x,Z=Ee.y,$=Ee.z):(O=0,Z=0,$=0);let Ie=Be.convert(ne.format),ve=Be.convert(ne.type),X;ne.isData3DTexture?(ye.setTexture3D(ne,0),X=J.TEXTURE_3D):ne.isDataArrayTexture||ne.isCompressedArrayTexture?(ye.setTexture2DArray(ne,0),X=J.TEXTURE_2D_ARRAY):(ye.setTexture2D(ne,0),X=J.TEXTURE_2D),S.activeTexture(J.TEXTURE0),S.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,ne.flipY),S.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ne.premultiplyAlpha),S.pixelStorei(J.UNPACK_ALIGNMENT,ne.unpackAlignment);let Ze=S.getParameter(J.UNPACK_ROW_LENGTH),Ke=S.getParameter(J.UNPACK_IMAGE_HEIGHT),ht=S.getParameter(J.UNPACK_SKIP_PIXELS),ft=S.getParameter(J.UNPACK_SKIP_ROWS),pt=S.getParameter(J.UNPACK_SKIP_IMAGES);S.pixelStorei(J.UNPACK_ROW_LENGTH,me.width),S.pixelStorei(J.UNPACK_IMAGE_HEIGHT,me.height),S.pixelStorei(J.UNPACK_SKIP_PIXELS,ge),S.pixelStorei(J.UNPACK_SKIP_ROWS,Xe),S.pixelStorei(J.UNPACK_SKIP_IMAGES,E);let Ct=D.isDataArrayTexture||D.isData3DTexture,yt=ne.isDataArrayTexture||ne.isData3DTexture;if(D.isDepthTexture){let nt=le.get(D),wt=le.get(ne),Ot=le.get(nt.__renderTarget),Rn=le.get(wt.__renderTarget);S.bindFramebuffer(J.READ_FRAMEBUFFER,Ot.__webglFramebuffer),S.bindFramebuffer(J.DRAW_FRAMEBUFFER,Rn.__webglFramebuffer);for(let On=0;On<se;On++)Ct&&(J.framebufferTextureLayer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,le.get(D).__webglTexture,Pe,E+On),J.framebufferTextureLayer(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,le.get(ne).__webglTexture,_t,$+On)),J.blitFramebuffer(ge,Xe,Dt,K,O,Z,Dt,K,J.DEPTH_BUFFER_BIT,J.NEAREST);S.bindFramebuffer(J.READ_FRAMEBUFFER,null),S.bindFramebuffer(J.DRAW_FRAMEBUFFER,null)}else if(Pe!==0||D.isRenderTargetTexture||le.has(D)){let nt=le.get(D),wt=le.get(ne);S.bindFramebuffer(J.READ_FRAMEBUFFER,I),S.bindFramebuffer(J.DRAW_FRAMEBUFFER,G);for(let Ot=0;Ot<se;Ot++)Ct?J.framebufferTextureLayer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,nt.__webglTexture,Pe,E+Ot):J.framebufferTexture2D(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,nt.__webglTexture,Pe),yt?J.framebufferTextureLayer(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,wt.__webglTexture,_t,$+Ot):J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,wt.__webglTexture,_t),Pe!==0?J.blitFramebuffer(ge,Xe,Dt,K,O,Z,Dt,K,J.COLOR_BUFFER_BIT,J.NEAREST):yt?J.copyTexSubImage3D(X,_t,O,Z,$+Ot,ge,Xe,Dt,K):J.copyTexSubImage2D(X,_t,O,Z,ge,Xe,Dt,K);S.bindFramebuffer(J.READ_FRAMEBUFFER,null),S.bindFramebuffer(J.DRAW_FRAMEBUFFER,null)}else yt?D.isDataTexture||D.isData3DTexture?J.texSubImage3D(X,_t,O,Z,$,Dt,K,se,Ie,ve,me.data):ne.isCompressedArrayTexture?J.compressedTexSubImage3D(X,_t,O,Z,$,Dt,K,se,Ie,me.data):J.texSubImage3D(X,_t,O,Z,$,Dt,K,se,Ie,ve,me):D.isDataTexture?J.texSubImage2D(J.TEXTURE_2D,_t,O,Z,Dt,K,Ie,ve,me.data):D.isCompressedTexture?J.compressedTexSubImage2D(J.TEXTURE_2D,_t,O,Z,me.width,me.height,Ie,me.data):J.texSubImage2D(J.TEXTURE_2D,_t,O,Z,Dt,K,Ie,ve,me);S.pixelStorei(J.UNPACK_ROW_LENGTH,Ze),S.pixelStorei(J.UNPACK_IMAGE_HEIGHT,Ke),S.pixelStorei(J.UNPACK_SKIP_PIXELS,ht),S.pixelStorei(J.UNPACK_SKIP_ROWS,ft),S.pixelStorei(J.UNPACK_SKIP_IMAGES,pt),_t===0&&ne.generateMipmaps&&J.generateMipmap(X),S.unbindTexture()},this.initRenderTarget=function(D){le.get(D).__webglFramebuffer===void 0&&ye.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?ye.setTextureCube(D,0):D.isData3DTexture?ye.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?ye.setTexture2DArray(D,0):ye.setTexture2D(D,0),S.unbindTexture()},this.resetState=function(){j=0,q=0,Y=null,S.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=wn._getDrawingBufferColorSpace(e),t.unpackColorSpace=wn._getUnpackColorSpace()}};var Zt=(i,e,t)=>Math.min(t,Math.max(e,i)),ct=(i,e,t)=>i+(e-i)*t,Rt=(i,e,t)=>{let n=Zt((t-i)/(e-i),0,1);return n*n*(3-2*n)};function Nn(i){let e=i>>>0;return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Vi(i,e,t=0){let n=Math.imul(i|0,374761393)+Math.imul(e|0,668265263)+Math.imul(t|0,2147483647);return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}function jy(i,e,t=1024,n=1024,s=0){let r=Math.floor(i),a=Math.floor(e),o=i-r,c=e-a,l=o*o*(3-2*o),h=c*c*(3-2*c),d=m=>(m%t+t)%t,p=m=>(m%n+n)%n,u=Vi(d(r),p(a),s),f=Vi(d(r+1),p(a),s),x=Vi(d(r),p(a+1),s),g=Vi(d(r+1),p(a+1),s);return ct(ct(u,f,l),ct(x,g,l),h)}function Jn(i,e,t=4,n=1024,s=1024,r=0){let a=.5,o=1,c=0,l=0;for(let h=0;h<t;h++)c+=a*jy(i*o,e*o,n*o,s*o,r+h*17),l+=a,a*=.5,o*=2;return c/l}var em=()=>window.innerWidth<760||/Android|iPhone|iPad|iPod/i.test(navigator.userAgent);function Xa(i,e={}){let t=i.attributes.position,n=i.attributes.normal,s=i.attributes.uv,r=e.ox||0,a=e.oy||0,o=e.oz||0;for(let c=0;c<t.count;c++){let l=n.getX(c),h=n.getY(c),d=n.getZ(c),p=t.getX(c)+r,u=t.getY(c)+a,f=t.getZ(c)+o,x,g;Math.abs(d)>.5?(x=d>0?p:-p,g=u):Math.abs(l)>.5?(x=l>0?-f:f,g=u):(e.swap?(x=f,g=p):(x=p,g=f),h<0&&(g=-g)),s.setXY(c,x,g)}s.needsUpdate=!0}var tm=4,Lf=1,nm=i=>{tm=Math.min(8,i)},im=i=>{Lf=i>=2?1:.5},Du=()=>Lf;function Df(i,e,t){let n=new $s(i,e,e,rs,zi);return n.wrapS=n.wrapT=Zn,n.magFilter=Li,n.minFilter=Ur,n.generateMipmaps=!0,n.colorSpace=t?yn:vr,n.anisotropy=tm,n.needsUpdate=!0,n}function Qr(i,e,t,n){i=Math.max(128,Math.round(i*Lf));let s=i*i,r=new Uint8Array(s*4),a=new Uint8Array(s*4),o=new Uint8Array(s*4),c=new Float32Array(s);for(let u=0;u<i;u++)for(let f=0;f<i;f++){let x=u*i+f,g=n((f+.5)/i,(u+.5)/i);r[x*4]=Zt(g[0],0,1)*255,r[x*4+1]=Zt(g[1],0,1)*255,r[x*4+2]=Zt(g[2],0,1)*255,r[x*4+3]=255,c[x]=g[3],a[x*4]=255,a[x*4+1]=Zt(g[4],0,1)*255,a[x*4+2]=Zt(g[5]||0,0,1)*255,a[x*4+3]=255}let l=e/i;for(let u=0;u<i;u++)for(let f=0;f<i;f++){let x=u*i+f,g=(c[u*i+(f+1)%i]-c[u*i+(f-1+i)%i])*t/(2*l),m=(c[(u+1)%i*i+f]-c[(u-1+i)%i*i+f])*t/(2*l),M=Math.hypot(g,m,1);o[x*4]=(-g/M*.5+.5)*255,o[x*4+1]=(-m/M*.5+.5)*255,o[x*4+2]=(1/M*.5+.5)*255,o[x*4+3]=255}let h=Df(r,i,!0),d=Df(o,i,!1),p=Df(a,i,!1);return[h,d,p].forEach(u=>u.repeat.set(1/e,1/e)),{map:h,normalMap:d,rmMap:p,tile:e}}var ac=(i,e)=>[i[0]*e,i[1]*e,i[2]*e];function sm(i=[.2,.22,.25]){return Qr(512,.6,.02,(e,t)=>{let n=t*3,s=Math.floor(n),r=n-s,a=Jn(e*5+s*3.1,r*22,3,5,22,s),o,c=1;r>.94?(o=0,c=.45):o=.28+.72*Math.pow(1-r/.94,1.4);let l=(.9+.2*Vi(s,3,5))*(.9+.2*a)*c;return[...ac(i,l),o+(a-.5)*.08,.72+.2*a,0]})}function rm(i=[.13,.145,.16]){return Qr(512,1.2,.025,(e,t)=>{let n=e*4,s=Math.floor(n),r=n-s,a=Math.min(r,1-r)*.3,o=Jn(s*5.1+r*3,t*7,3,20,7,s),c=.4+(o-.5)*.1,l=1;a<.026?c=1:a<.05&&(c=0,l=.5);let h=(.92+.16*Vi(s,1,9))*(.9+.2*o)*l;return[...ac(i,h),c,.7+.2*o,0]})}function am(i=[.1,.105,.115]){return Qr(512,.9,.018,(e,t)=>{let n=e*2%1,s=Math.min(n,1-n)*.45,r=s<.028?Math.pow(1-s/.028,.7):0,a=(Jn(e*3,t*3,3,3,3,4)-.5)*.1,o=.34+.12*Jn(e*8,t*40,2,8,40,2);return[...ac(i,1+(Jn(e*2,t*6,2,2,6,11)-.5)*.25+r*.35),.1+r+a,o,.8]})}function Lu(i=[.66,.43,.26],e=[.4,.24,.13]){return Qr(512,.6,.01,(t,n)=>{let s=Jn(t*3,n*1.2,3,3,2,21)*3,r=.5+.5*Math.sin((t*10+s)*Math.PI*2/1),a=Jn(t*18,n*2.4,3,18,2,33),o=Zt(.25+r*.35+a*.5,0,1),c=t*6%1,l=c<.012||c>.988?.45:1;return[ct(e[0],i[0],o)*l,ct(e[1],i[1],o)*l,ct(e[2],i[2],o)*l,.55+a*.3-(l<1?.5:0),.55+.15*a,0]})}function om(i=[.56,.55,.53]){return Qr(512,1.2,.012,(e,t)=>{let n=t*8,s=Math.floor(n),r=n-s,a=Vi(s,7,2)*40,o=Jn(e*4+a,r*10,3,4,10,s),c=Vi(Math.floor(e*512),Math.floor(t*512),3)>.985?.6:1,l=r<.04?.7:1,h=(.9+.2*o)*c*l*(.94+.12*Vi(s,4,1));return[...ac(i,h),.5+(o-.5)*.4-(r<.04?.3:0),.92,0]})}function lm(){return Qr(512,1,.045,(i,e)=>{let t=i*5,n=e*4,s=Math.floor(t),r=Math.floor(n),a=9,o=9,c=0;for(let g=-1;g<=1;g++)for(let m=-1;m<=1;m++){let M=s+m,b=r+g,y=(M%5+5)%5,_=(b%4+4)%4,w=M+.15+Vi(y,_,1)*.7,A=b+.15+Vi(y,_,2)*.7,v=Math.hypot((t-w)*1,(n-A)*1.25);v<a?(o=a,a=v,c=y*31+_):v<o&&(o=v)}let l=o-a,h=Rt(.04,.3,l),d=Vi(c,5,3),p=.4+d*.2,u=Vi(c,9,1)*.06,f=.9+.2*Jn(i*12,e*12,3,12,12,c),x=h>.02?1:.35;return[(p+u)*f*x,(p+u*.6)*f*x,(p-.02)*f*x,h*(.7+.3*d),.88,0]})}function cm(){return Qr(512,5,.06,(i,e)=>{let t=Jn(i*5,e*5,4,5,5,71),n=Jn(i*60,e*60,2,60,60,72),s=Vi(Math.floor(i*512),Math.floor(e*512),8)>.988,r=.93+.07*t;return[.9*r,.94*r,1*r,t*.8+n*.2,s?.12:.78+n*.15,0]})}function um(i=[.13,.135,.145]){return Qr(256,3,.01,(e,t)=>{let n=Vi(Math.floor(e*256),Math.floor(t*256),12),s=Jn(e*6,t*6,3,6,6,9),r=.8+.5*n*n+.25*s;return[...ac(i,r),n*.5+s*.3,.88-n*.1,0]})}function hm(){return Qr(512,4,.05,(i,e)=>{let t=Jn(i*70,e*70,2,70,70,3),n=Jn(i*4,e*4,4,4,4,5),s=Jn(i*9,e*9,3,9,9,6),r=.75+.5*t;return[ct(.22,.4,s)*r+n*.05,ct(.3,.4,s)*r*(.85+.3*n),ct(.1,.16,s)*r,t,.92,0]})}function fm(i,e){let t=new Uint8Array(i*i*4);for(let s=0;s<i;s++)for(let r=0;r<i;r++){let a=(r+.5)/i,o=(s+.5)/i,c=.45+.55*Jn(a*6,o*4,4,1024,1024,41);c=Rt(.2,.95,c),c*=.35+.65*Rt(0,.18,Math.min(a,1-a,o,1-o)+.04*Jn(a*30,o*30,2,1024,1024,5)),e&&(c*=e(a,o));let l=(s*i+r)*4;t[l]=255,t[l+1]=Zt(c,0,1)*255,t[l+2]=255,t[l+3]=255}let n=new $s(t,i,i,rs,zi);return n.magFilter=n.minFilter=Li,n.generateMipmaps=!1,n.needsUpdate=!0,n}function dm(i="living"){let e=document.createElement("canvas");e.width=160,e.height=160;let t=e.getContext("2d"),n={living:["#6b4426","#d99a55","#f5c27c"],kitchen:["#7a5a3a","#e6b673","#fff0cf"],bed:["#4a3a52","#c78b7a","#f1c6a0"],bath:["#4f6670","#a9c7cf","#eaf6f4"],hall:["#5a4128","#c58c52","#efba78"]}[i]||["#6b4426","#d99a55","#f5c27c"],s=t.createLinearGradient(0,0,0,160);s.addColorStop(0,n[0]),s.addColorStop(.55,n[1]),s.addColorStop(1,n[2]),t.fillStyle=s,t.fillRect(0,0,160,160);let r=i==="kitchen"?80:40+Math.random()*80,a=t.createRadialGradient(r,52,2,r,52,70);if(a.addColorStop(0,"rgba(255,246,214,.95)"),a.addColorStop(1,"rgba(255,220,150,0)"),t.fillStyle=a,t.fillRect(0,0,160,160),t.fillStyle="rgba(30,18,10,.55)",i==="living"&&(t.fillRect(14,108,92,52),t.fillRect(14,88,92,22),t.fillRect(112,70,6,90)),i==="kitchen"){t.fillRect(0,100,160,60),t.fillStyle="rgba(30,18,10,.4)";for(let l=0;l<4;l++)t.fillRect(8+l*38,20,30,40)}i==="bed"&&(t.fillRect(20,96,120,64),t.fillRect(20,70,14,40)),i==="bath"&&(t.fillStyle="rgba(20,40,48,.35)",t.fillRect(0,112,160,48),t.fillRect(104,40,40,36)),i==="hall"&&(t.fillRect(0,128,160,32),t.fillRect(70,30,36,90));let o=t.createLinearGradient(0,0,40,0);o.addColorStop(0,"rgba(40,24,16,.7)"),o.addColorStop(1,"rgba(40,24,16,0)"),t.fillStyle=o,t.fillRect(0,0,40,160),t.save(),t.translate(160,0),t.scale(-1,1),t.fillStyle=o,t.fillRect(0,0,40,160),t.restore();let c=new Wn(e);return c.colorSpace=yn,c}function Go(i="rgba(255,190,120,0.9)",e="rgba(255,150,80,0)"){let t=document.createElement("canvas");t.width=t.height=128;let n=t.getContext("2d"),s=n.createRadialGradient(64,64,0,64,64,64);s.addColorStop(0,i),s.addColorStop(.35,i.replace(/[\d.]+\)$/,"0.35)")),s.addColorStop(1,e),n.fillStyle=s,n.fillRect(0,0,128,128);let r=new Wn(t);return r.colorSpace=yn,r}function pm(){let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d"),t=e.createRadialGradient(64,64,20,64,64,64);t.addColorStop(0,"rgba(244,189,126,0.55)"),t.addColorStop(1,"rgba(244,189,126,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),e.beginPath(),e.arc(64,64,30,0,Math.PI*2),e.fillStyle="#d98a4e",e.fill(),e.lineWidth=3,e.strokeStyle="#f4bd7e",e.stroke(),e.beginPath(),e.moveTo(49,79),e.lineTo(64,49),e.lineTo(79,79),e.lineWidth=6.5,e.strokeStyle="#121311",e.lineJoin="miter",e.stroke(),e.fillStyle="#121311",e.fillRect(60.5,64.5,7,7);let n=new Wn(i);return n.colorSpace=yn,n}function jr(i="rgba(255,255,255,0.6)"){let e=document.createElement("canvas");e.width=e.height=64;let t=e.getContext("2d"),n=t.createRadialGradient(32,32,0,32,32,32);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.25,i),n.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=n,t.fillRect(0,0,64,64);let s=new Wn(e);return s.colorSpace=yn,s}function mm(){let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d");for(let n=0;n<9;n++){let s=64+(Vi(n,1,3)-.5)*40,r=64+(Vi(n,2,3)-.5)*40,a=22+Vi(n,3,3)*22,o=e.createRadialGradient(s,r,0,s,r,a);o.addColorStop(0,"rgba(255,255,255,0.28)"),o.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=o,e.fillRect(0,0,128,128)}let t=new Wn(i);return t.colorSpace=yn,t}function gm(){let i={lap:sm([.3,.33,.37]),bb:rm([.2,.22,.25]),seam:am([.1,.105,.115]),cedar:Lu(),walnut:Lu([.46,.29,.17],[.25,.15,.09]),oak:Lu([.8,.64,.44],[.56,.4,.25]),form:om(),stone:lm(),snow:cm(),asphalt:um(),grass:hm()},e=(a,o={})=>new ln({map:a.map,normalMap:a.normalMap,roughnessMap:a.rmMap,metalnessMap:a.rmMap,roughness:1,metalness:1,...o}),t=(a,o=.8,c=0,l={})=>new ln({color:a,roughness:o,metalness:c,...l}),n=(a,o)=>(a.userData.shell=!0,a.userData.th=o,a),s=(a,o)=>(a.userData.th=o,a),r={lap:n(e(i.lap,{normalScale:new tt(1,1)}),[.3,.05,.3]),bb:n(e(i.bb,{normalScale:new tt(1,1)}),[.3,.05,.3]),roof:n(e(i.seam,{normalScale:new tt(1.2,1.2),envMapIntensity:1.3}),[.4,.12]),cedar:n(e(i.cedar),[.42,0,.25]),walnut:n(e(i.walnut),[.52]),oak:n(e(i.oak),[.55]),form:n(e(i.form),[.33]),stone:n(e(i.stone),[.33]),drywall:n(t(14209475,.95),[.6]),trim:n(t(855568,.42,.55,{envMapIntensity:1.2}),[.32,0,.2]),reveal:n(t(14275785,.85),[.45]),slab:n(t(7828331,1),[.35]),concrete:n(t(7301987,1),[.33]),floor:n(t(10518364,.7),[.55]),door:n(e(i.walnut),[.52]),insul:n(t(13087881,1),[.5]),counter:n(t(2959910,.5,.05),[.55]),snowRoof:n(t(15265527,.85,0,{alphaToCoverage:!0}),[.03]),ice:s(new ji({color:13625845,roughness:.08,metalness:0,transparent:!0,opacity:.85,clearcoat:1,envMapIntensity:1.6}),[.1]),white:s(t(14605267,.5,.05),[.6]),steel:s(t(10133670,.35,.85),[.55]),pvc:s(t(15131612,.4),[.24]),pipe:s(t(6255750,.5,.4),[.45]),copper:s(t(14256718,.28,.9,{envMapIntensity:1.4}),[.68]),solar:s(new ji({color:726832,roughness:.16,metalness:.7,clearcoat:1,clearcoatRoughness:.06,envMapIntensity:1.5}),[.17]),solarFrame:s(t(11186616,.4,.9),[.3]),neighbor:s(e(i.lap,{color:9080210}),[.26,.04,.24]),neighborRoof:s(e(i.seam,{color:6711920}),[.4,.12]),asphalt:s(e(i.asphalt),[.3]),pavement:s(t(9144706,.95),[.3]),sconce:s(new ln({color:1709070,emissive:16756833,emissiveIntensity:3,roughness:.4}),[.9]),lampHead:s(new ln({color:2236962,emissive:16761466,emissiveIntensity:4,roughness:.4}),[.95]),pole:s(t(1776928,.5,.7),[.3]),spruce:s(new ln({vertexColors:!0,roughness:.92,metalness:0}),[.13]),trunk:s(t(2760471,1),[.18]),shrub:s(new ln({vertexColors:!0,roughness:1}),[.14]),fabric:s(t(6970708,.95),[.5]),fabric2:s(t(4016726,.95),[.5]),leather:s(t(8014634,.55),[.5]),ceramic:s(t(15921129,.18,0),[.45]),mirror:s(t(12570840,.05,.9),[.4]),black:s(t(1381653,.5,.3),[.4]),warmLight:s(new ln({color:2236440,emissive:16767392,emissiveIntensity:5,roughness:.6}),[1])};return["lap","bb","roof","drywall","form","stone","trim","cedar","door","walnut","reveal","snowRoof"].forEach(a=>{r[a].userData.wall=!0}),Object.values(r).forEach(a=>{a.userData.th===void 0&&(a.userData.th=[.3])}),{M:r,T:i}}function Nf(i){let e=new ln({color:395533,roughness:.05,metalness:.25,emissive:16777215,emissiveMap:i,emissiveIntensity:0,envMapIntensity:1.6});return e.userData.shell=!0,e.userData.pane=!0,e.userData.wall=!0,e.userData.th=[.86],e}var Nu=[[-90,"#04060d","#0c1124"],[-20,"#05070f","#10162b"],[-14,"#080d20","#1a2140"],[-9,"#0f1838","#33406a"],[-5,"#1a2650","#7a6f94"],[-2,"#27345e","#d98d62"],[1,"#35508a","#eba66f"],[5,"#43689f","#e8bf8f"],[12,"#4a78b0","#dccfb4"],[25,"#4a80ba","#c7dcec"],[50,"#3f78b8","#b4d2e8"],[90,"#3a72b0","#accce6"]],e_=`varying vec3 vDir;
void main(){ vDir = normalize(position); vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_Position = p.xyww; }`,t_=`precision highp float;
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
}`;function xm(i,e){let t={uTop:{value:new xt},uHor:{value:new xt},uLow:{value:new xt},uSunDir:{value:new F(0,1,0)},uSunCol:{value:new xt(1,.8,.6)},uMoonDir:{value:new F(.3,.55,-.78).normalize()},uSunI:{value:0},uMoonI:{value:0},uTime:{value:0},uCloud:{value:.4},uAurora:{value:0},uThermal:{value:0},uSnowLine:{value:0}},n=new Cn({uniforms:t,vertexShader:e_,fragmentShader:t_,side:es,depthWrite:!1,depthTest:!1}),s=new Fe(new $n(500,48,28),n);s.renderOrder=-10,s.frustumCulled=!1,s.userData.noThermal=!0,s.userData.noAO=!0,e.add(s);let r=Nn(7),a=1500,o=new Float32Array(a*3);for(let _=0;_<a;_++){let w=r()*Math.PI*2,A=Math.acos(1-r()*1),v=480;o[_*3]=Math.sin(A)*Math.cos(w)*v,o[_*3+1]=Math.cos(A)*v,o[_*3+2]=Math.sin(A)*Math.sin(w)*v}let c=new tn;c.setAttribute("position",new Jt(o,3));let l=new Hi({color:14674175,size:1.7,sizeAttenuation:!1,transparent:!0,opacity:0,fog:!1,depthWrite:!1}),h=new Ki(c,l);h.frustumCulled=!1,h.renderOrder=-9,h.userData.noAO=!0,e.add(h);function d(_,w,A){let v=document.createElement("canvas");v.width=4096,v.height=256;let R=v.getContext("2d"),P=Nn(_);R.filter="blur(1.4px)";let B=Array.from({length:8},()=>P()*6.28);R.clearRect(0,0,2048,256),R.beginPath(),R.moveTo(0,256);let T=[3,7,15,31,63],U=[.5,.28,.15,.08*A,.045*A];for(let j=0;j<=4096;j+=2){let q=j/4096*Math.PI*2,Y=0;for(let V=0;V<5;V++)Y+=U[V]*Math.pow(1-Math.abs(Math.sin(q*T[V]+B[V])),1.6);R.lineTo(j,256-Zt(Y/1.06,0,1)*w)}R.lineTo(4096,256),R.closePath();let I=R.createLinearGradient(0,256-w,0,256);I.addColorStop(0,"rgba(255,255,255,1)"),I.addColorStop(.3,"rgba(232,236,248,1)"),I.addColorStop(.62,"rgba(120,132,160,1)"),I.addColorStop(1,"rgba(66,74,96,0)"),R.fillStyle=I,R.fill();let G=new Wn(v);return G.colorSpace=yn,G.wrapS=Zn,G.anisotropy=4,G}function p(_){let w=document.createElement("canvas");w.width=2048,w.height=128;let A=w.getContext("2d"),v=Nn(_);A.clearRect(0,0,2048,128),A.fillStyle="rgba(255,255,255,1)";for(let P=0;P<2048;P+=3){let B=34+v()*40+Math.sin(P*.01)*10,T=6+v()*7;A.beginPath(),A.moveTo(P-T,128),A.lineTo(P,128-B),A.lineTo(P+T,128),A.fill()}A.fillRect(0,100,2048,28);let R=new Wn(w);return R.colorSpace=yn,R.wrapS=Zn,R}let u=[{tex:d(3,220,1),R:450,h:190,y:40,k:.8,mix:.86},{tex:d(11,170,.8),R:360,h:120,y:16,k:.55,mix:.68},{tex:p(5),R:300,h:34,y:8,k:.22,mix:.2}].map(_=>{let w=new Hn({map:_.tex,transparent:!0,side:es,depthWrite:!1,fog:!1,color:4478327}),A=new Fe(new pn(_.R,_.R,_.h,96,1,!0),w);return A.position.y=_.y,A.renderOrder=-8,A.frustumCulled=!1,A.userData.noThermal=!0,A.userData.noAO=!0,e.add(A),{..._,mat:w,mesh:A}}),f=new Ho(i),x=new Ua,g=new Fe(new $n(50,32,16),n.clone());g.material.uniforms=t,g.material.depthTest=!0,x.add(g);let m=null,M="",b=new xt,y=new xt;return{dome:s,mat:n,U:t,stars:h,horizon:new xt,zenith:new xt,update(_,w){let A=Zt(_.elev,-90,90),v=0;for(;v<Nu.length-2&&Nu[v+1][0]<=A;)v++;let[R,P,B]=Nu[v],[T,U,I]=Nu[v+1],G=Rt(0,1,(A-R)/(T-R));t.uTop.value.copy(b.set(P)).lerp(y.set(U),G),t.uHor.value.copy(b.set(B)).lerp(y.set(I),G),_.seasonTint&&(t.uTop.value.lerp(_.seasonTint.top,_.seasonTint.k),t.uHor.value.lerp(_.seasonTint.hor,_.seasonTint.k)),t.uLow.value.copy(t.uHor.value).multiplyScalar(.55+.25*_.daylight).lerp(b.set(_.snowy?7174806:2764834),.18+.2*_.daylight),t.uLow.value.multiplyScalar(1-.82*(_.voidK||0)),t.uSunDir.value.copy(_.sunDir);let j=1-Rt(0,.5,_.sunDir.y);t.uSunCol.value.setRGB(1,ct(.93,.56,j),ct(.84,.32,j)),t.uSunI.value=Rt(-.14,.04,_.sunDir.y)*ct(1,1.4,j),t.uMoonI.value=(1-_.daylight)*.9,t.uTime.value=w,t.uCloud.value=_.cloud??.4,t.uAurora.value=_.aurora||0,t.uThermal.value=_.thermal||0,this.horizon.copy(t.uHor.value),this.zenith.copy(t.uTop.value),l.opacity=Zt((1-_.daylight*1.2)*.95,0,1)*(1-(_.thermal||0)),u.forEach(q=>{q.mat.color.copy(t.uHor.value).lerp(t.uTop.value,.12).multiplyScalar(q.k*(.55+.7*_.daylight)).lerp(b.set(16777215),0).multiplyScalar(1),q.mat.color.lerp(t.uHor.value,1-q.mix),q.mat.color.lerp(y.set(2101306),(_.thermal||0)*.9)})},follow(_){s.position.copy(_),h.position.copy(_),u.forEach(w=>{w.mesh.position.x=_.x,w.mesh.position.z=_.z})},refreshEnv(_){let w=[t.uTop.value.getHexString(),t.uHor.value.getHexString(),t.uSunI.value.toFixed(2),t.uAurora.value.toFixed(1),t.uThermal.value.toFixed(1),t.uSunDir.value.x.toFixed(2),t.uSunDir.value.y.toFixed(2)].join("|");if(!_&&w===M)return;M=w;let A=m;m=f.fromScene(x,.015,.1,200,{size:128}),e.environment=m.texture,A&&A.dispose()}}}var Hr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var ts=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},n_=new va(-1,1,1,-1,0,1),Uf=class extends tn{constructor(){super(),this.setAttribute("position",new qt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new qt([0,2,0,0,2,0],2))}},i_=new Uf,er=class{constructor(e){this._mesh=new Fe(i_,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,n_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var ko=class extends ts{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Cn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Es.clone(e.uniforms),this.material=new Cn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new er(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var oc=class extends ts{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Uu=class extends ts{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Fu=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new tt);this._width=n.width,this._height=n.height,t=new ai(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:yi}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ko(Hr),this.copyPass.material.blending=Ai,this.timer=new Bl}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}oc!==void 0&&(a instanceof oc?n=!0:a instanceof Uu&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new tt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Ou=class extends ts{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new xt}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var vm={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new xt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Vo=class i extends ts{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new tt(e.x,e.y):new tt(256,256),this.clearColor=new xt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new ai(r,a,{type:yi,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new ai(r,a,{type:yi,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let p=new ai(r,a,{type:yi,depthBuffer:!1});p.texture.name="UnrealBloomPass.v"+h,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),a=Math.round(a/2)}let o=vm;this.highPassUniforms=Es.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Cn({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let c=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new tt(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Es.clone(Hr.uniforms),this.blendMaterial=new Cn({uniforms:this.copyUniforms,vertexShader:Hr.vertexShader,fragmentShader:Hr.fragmentShader,premultipliedAlpha:!0,blending:zn,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new xt,this._oldClearAlpha=1,this._basic=new Hn,this._fsQuad=new er(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new tt(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let s=[],r=[];for(let a=1;a<e;a+=2){let o=t[a],c=a+1<e?t[a+1]:0,l=o+c;s.push((a*o+(a+1)*c)/l),r.push(l)}return new Cn({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new tt(.5,.5)},direction:{value:new tt(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}};Vo.BlurDirectionX=new tt(1,0);Vo.BlurDirectionY=new tt(0,1);var lc={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Bu=class extends ts{constructor(){super(),this.isOutputPass=!0,this.uniforms=Es.clone(lc.uniforms),this.material=new Po({name:lc.name,uniforms:this.uniforms,vertexShader:lc.vertexShader,fragmentShader:lc.fragmentShader}),this._fsQuad=new er(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},wn.getTransfer(this._outputColorSpace)===Ln&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===kl?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Vl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Wl?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ma?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Yl?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ql?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Xl&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var cc={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new tt},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new zt},cameraProjectionMatrixInverse:{value:new zt},cameraWorldMatrix:{value:new zt},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new F(-1,-1,-1)},sceneBoxMax:{value:new F(1,1,1)}},vertexShader:`

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
		}`},uc={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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
		}`};function ym(i=5){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=s_(e),n=t.length,s=new Uint8Array(n*4);for(let a=0;a<n;++a){let o=t[a],c=2*Math.PI*o/n,l=new F(Math.cos(c),Math.sin(c),0).normalize();s[a*4]=(l.x*.5+.5)*255,s[a*4+1]=(l.y*.5+.5)*255,s[a*4+2]=127,s[a*4+3]=255}let r=new $s(s,e,e);return r.wrapS=Zn,r.wrapT=Zn,r.needsUpdate=!0,r}function s_(i){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let a=1;a<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),n[s*e+r]!==0){r-=2,s++;continue}else n[s*e+r]=a++;r++,s--}return n}var hc={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:Ff(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new tt},cameraProjectionMatrixInverse:{value:new zt},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function Ff(i,e,t){let n=r_(i,e,t),s="vec3[SAMPLES](";for(let r=0;r<i;r++){let a=n[r];s+=`vec3(${a.x}, ${a.y}, ${a.z})${r<i-1?",":")"}`}return s}function r_(i,e,t){let n=[];for(let s=0;s<i;s++){let r=2*Math.PI*e*s/i,a=Math.pow(s/(i-1),t);n.push(new F(Math.cos(r),Math.sin(r),a))}return n}var zu=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,s,r,a=.5*(Math.sqrt(3)-1),o=(e+t)*a,c=Math.floor(e+o),l=Math.floor(t+o),h=(3-Math.sqrt(3))/6,d=(c+l)*h,p=c-d,u=l-d,f=e-p,x=t-u,g,m;f>x?(g=1,m=0):(g=0,m=1);let M=f-g+h,b=x-m+h,y=f-1+2*h,_=x-1+2*h,w=c&255,A=l&255,v=this.perm[w+this.perm[A]]%12,R=this.perm[w+g+this.perm[A+m]]%12,P=this.perm[w+1+this.perm[A+1]]%12,B=.5-f*f-x*x;B<0?n=0:(B*=B,n=B*B*this._dot(this.grad3[v],f,x));let T=.5-M*M-b*b;T<0?s=0:(T*=T,s=T*T*this._dot(this.grad3[R],M,b));let U=.5-y*y-_*_;return U<0?r=0:(U*=U,r=U*U*this._dot(this.grad3[P],y,_)),70*(n+s+r)}noise3d(e,t,n){let s,r,a,o,l=(e+t+n)*.3333333333333333,h=Math.floor(e+l),d=Math.floor(t+l),p=Math.floor(n+l),u=1/6,f=(h+d+p)*u,x=h-f,g=d-f,m=p-f,M=e-x,b=t-g,y=n-m,_,w,A,v,R,P;M>=b?b>=y?(_=1,w=0,A=0,v=1,R=1,P=0):M>=y?(_=1,w=0,A=0,v=1,R=0,P=1):(_=0,w=0,A=1,v=1,R=0,P=1):b<y?(_=0,w=0,A=1,v=0,R=1,P=1):M<y?(_=0,w=1,A=0,v=0,R=1,P=1):(_=0,w=1,A=0,v=1,R=1,P=0);let B=M-_+u,T=b-w+u,U=y-A+u,I=M-v+2*u,G=b-R+2*u,j=y-P+2*u,q=M-1+3*u,Y=b-1+3*u,V=y-1+3*u,W=h&255,Q=d&255,be=p&255,Ve=this.perm[W+this.perm[Q+this.perm[be]]]%12,Ne=this.perm[W+_+this.perm[Q+w+this.perm[be+A]]]%12,rt=this.perm[W+v+this.perm[Q+R+this.perm[be+P]]]%12,Et=this.perm[W+1+this.perm[Q+1+this.perm[be+1]]]%12,he=.6-M*M-b*b-y*y;he<0?s=0:(he*=he,s=he*he*this._dot3(this.grad3[Ve],M,b,y));let Se=.6-B*B-T*T-U*U;Se<0?r=0:(Se*=Se,r=Se*Se*this._dot3(this.grad3[Ne],B,T,U));let Oe=.6-I*I-G*G-j*j;Oe<0?a=0:(Oe*=Oe,a=Oe*Oe*this._dot3(this.grad3[rt],I,G,j));let Re=.6-q*q-Y*Y-V*V;return Re<0?o=0:(Re*=Re,o=Re*Re*this._dot3(this.grad3[Et],q,Y,V)),32*(s+r+a+o)}noise4d(e,t,n,s){let r=this.grad4,a=this.simplex,o=this.perm,c=(Math.sqrt(5)-1)/4,l=(5-Math.sqrt(5))/20,h,d,p,u,f,x=(e+t+n+s)*c,g=Math.floor(e+x),m=Math.floor(t+x),M=Math.floor(n+x),b=Math.floor(s+x),y=(g+m+M+b)*l,_=g-y,w=m-y,A=M-y,v=b-y,R=e-_,P=t-w,B=n-A,T=s-v,U=R>P?32:0,I=R>B?16:0,G=P>B?8:0,j=R>T?4:0,q=P>T?2:0,Y=B>T?1:0,V=U+I+G+j+q+Y,W=a[V][0]>=3?1:0,Q=a[V][1]>=3?1:0,be=a[V][2]>=3?1:0,Ve=a[V][3]>=3?1:0,Ne=a[V][0]>=2?1:0,rt=a[V][1]>=2?1:0,Et=a[V][2]>=2?1:0,he=a[V][3]>=2?1:0,Se=a[V][0]>=1?1:0,Oe=a[V][1]>=1?1:0,Re=a[V][2]>=1?1:0,Ye=a[V][3]>=1?1:0,ee=R-W+l,Je=P-Q+l,oe=B-be+l,xe=T-Ve+l,ie=R-Ne+2*l,de=P-rt+2*l,Me=B-Et+2*l,$e=T-he+2*l,qe=R-Se+3*l,ut=P-Oe+3*l,lt=B-Re+3*l,J=T-Ye+3*l,It=R-1+4*l,At=P-1+4*l,H=B-1+4*l,S=T-1+4*l,fe=g&255,le=m&255,ye=M&255,it=b&255,st=o[fe+o[le+o[ye+o[it]]]]%32,Le=o[fe+W+o[le+Q+o[ye+be+o[it+Ve]]]]%32,Ce=o[fe+Ne+o[le+rt+o[ye+Et+o[it+he]]]]%32,Qe=o[fe+Se+o[le+Oe+o[ye+Re+o[it+Ye]]]]%32,vt=o[fe+1+o[le+1+o[ye+1+o[it+1]]]]%32,N=.6-R*R-P*P-B*B-T*T;N<0?h=0:(N*=N,h=N*N*this._dot4(r[st],R,P,B,T));let ae=.6-ee*ee-Je*Je-oe*oe-xe*xe;ae<0?d=0:(ae*=ae,d=ae*ae*this._dot4(r[Le],ee,Je,oe,xe));let ue=.6-ie*ie-de*de-Me*Me-$e*$e;ue<0?p=0:(ue*=ue,p=ue*ue*this._dot4(r[Ce],ie,de,Me,$e));let we=.6-qe*qe-ut*ut-lt*lt-J*J;we<0?u=0:(we*=we,u=we*we*this._dot4(r[Qe],qe,ut,lt,J));let ze=.6-It*It-At*At-H*H-S*S;return ze<0?f=0:(ze*=ze,f=ze*ze*this._dot4(r[vt],It,At,H,S)),27*(h+d+p+u+f)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}_dot4(e,t,n,s,r){return e[0]*t+e[1]*n+e[2]*s+e[3]*r}};var fc=class i extends ts{constructor(e,t,n=512,s=512,r,a,o){super(),this.width=n,this.height=s,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=ym(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new ai(this.width,this.height,{type:yi,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Cn({defines:Object.assign({},cc.defines),uniforms:Es.clone(cc.uniforms),vertexShader:cc.vertexShader,fragmentShader:cc.fragmentShader,blending:Ai,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Ll,this.normalMaterial.blending=Ai,this.pdMaterial=new Cn({defines:Object.assign({},hc.defines),uniforms:Es.clone(hc.uniforms),vertexShader:hc.vertexShader,fragmentShader:hc.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Cn({defines:Object.assign({},uc.defines),uniforms:Es.clone(uc.uniforms),vertexShader:uc.vertexShader,fragmentShader:uc.fragmentShader,blending:Ai}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Cn({uniforms:Es.clone(Hr.uniforms),vertexShader:Hr.vertexShader,fragmentShader:Hr.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Gl,blendDst:Ga,blendEquation:Qs,blendSrcAlpha:zl,blendDstAlpha:Ga,blendEquationAlpha:Qs}),this.blendMaterial=new Cn({uniforms:Es.clone(Hu.uniforms),vertexShader:Hu.vertexShader,fragmentShader:Hu.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:O0,blendSrc:Gl,blendDst:Ga,blendEquation:Qs,blendSrcAlpha:zl,blendDstAlpha:Ga,blendEquationAlpha:Qs}),this._fsQuad=new er(null),this._originalClearColor=new xt,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new Js,this.depthTexture.format=Fr,this.depthTexture.type=Sa,this.normalRenderTarget=new ai(this.width,this.height,{minFilter:Ri,magFilter:Ri,type:yi,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Ff(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Ai,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Ai,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Ai,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Ai,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Ai,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,n,s,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_renderOverride(e,t,n,s,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,t.push(n))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new zu,n=e*e*4,s=new Uint8Array(n);for(let a=0;a<e;a++)for(let o=0;o<e;o++){let c=a,l=o;s[(a*e+o)*4]=(t.noise(c,l)*.5+.5)*255,s[(a*e+o)*4+1]=(t.noise(c+e,l)*.5+.5)*255,s[(a*e+o)*4+2]=(t.noise(c,l+e)*.5+.5)*255,s[(a*e+o)*4+3]=(t.noise(c+e,l+e)*.5+.5)*255}let r=new $s(s,e,e,rs,zi);return r.wrapS=Zn,r.wrapT=Zn,r.needsUpdate=!0,r}};fc.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var Of=class extends ts{constructor(e){super(),this.needsSwap=!1,this.holder=e}render(e,t,n){this.holder.value=n.depthTexture}},_m="varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",Mm=`uniform sampler2D tDiffuse; uniform sampler2D tDepth; uniform vec2 uPx; uniform float uNear, uFar, uFocus, uAperture, uMaxBlur; varying vec2 vUv;
    float viewDist(vec2 uv){ float d = texture2D(tDepth, uv).x; return (uNear * uFar) / (uFar - (uFar - uNear) * d); }
    float cocAt(float dist){ return clamp(uAperture * abs(dist - uFocus) / max(dist, 0.001), 0.0, 1.0) * uMaxBlur; }`,a_=`${Mm}
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
    }`,o_=`${Mm}
    uniform sampler2D tBlur; uniform vec2 uHalfPx;
    void main(){
      vec4 sharp = texture2D(tDiffuse, vUv);
      vec2 o = uHalfPx * 0.5;
      vec4 blur = (texture2D(tBlur, vUv + o) + texture2D(tBlur, vUv - o) + texture2D(tBlur, vUv + vec2(o.x, -o.y)) + texture2D(tBlur, vUv + vec2(-o.x, o.y))) * 0.25;
      float w = max(smoothstep(0.75, 2.5, cocAt(viewDist(vUv))), smoothstep(0.0, 0.2, blur.a));
      gl_FragColor = vec4(mix(sharp.rgb, blur.rgb, w), sharp.a);
    }`,Bf=class extends ts{constructor(e,t){super(),this.depthHolder=e,this.shared={tDepth:{value:null},uPx:{value:new tt(1/1440,1/900)},uNear:{value:.3},uFar:{value:1400},uFocus:{value:30},uAperture:{value:0},uMaxBlur:{value:12}},this.half=new ai(720,450,{type:yi,depthBuffer:!1}),this.gather=new Cn({name:"HauseDofGather",defines:{TAPS:t},uniforms:{tDiffuse:{value:null},...this.shared},vertexShader:_m,fragmentShader:a_,depthTest:!1,depthWrite:!1}),this.composite=new Cn({name:"HauseDofComposite",uniforms:{tDiffuse:{value:null},tBlur:{value:this.half.texture},uHalfPx:{value:new tt(1/720,1/450)},...this.shared},vertexShader:_m,fragmentShader:o_,depthTest:!1,depthWrite:!1}),this.quad=new er(this.gather)}setSize(e,t){let n=Math.max(1,Math.round(e/2)),s=Math.max(1,Math.round(t/2));this.half.setSize(n,s),this.shared.uPx.value.set(1/e,1/t),this.composite.uniforms.uHalfPx.value.set(1/n,1/s),this.shared.uMaxBlur.value=Math.max(6,t*.014)}render(e,t,n){this.shared.tDepth.value=this.depthHolder.value,this.gather.uniforms.tDiffuse.value=n.texture,this.quad.material=this.gather,e.setRenderTarget(this.half),this.quad.render(e),this.composite.uniforms.tDiffuse.value=n.texture,this.quad.material=this.composite,e.setRenderTarget(this.renderToScreen?null:t),this.quad.render(e)}dispose(){this.half.dispose(),this.gather.dispose(),this.composite.dispose(),this.quad.dispose()}},l_={name:"HauseGrade",uniforms:{tDiffuse:{value:null},uTime:{value:0},uVig:{value:.32},uGrain:{value:.03},uCA:{value:.0011},uSat:{value:1.05},uCon:{value:1.05},uThermal:{value:0},uAspect:{value:1.6},uShadow:{value:new F(.96,.99,1.05)},uHigh:{value:new F(1.04,1,.95)},uCool:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float uTime, uVig, uGrain, uCA, uSat, uCon, uThermal, uAspect; uniform vec3 uShadow, uHigh; uniform float uCool; varying vec2 vUv;
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
    }`};function Em(i,e,t,n,s,r){let a=n>=2?4:n===1?2:0,o=new ai(s,r,{type:yi,samples:a,depthTexture:new Js(s,r)}),c=new Fu(i,o);c.setPixelRatio(1),c.addPass(new Ou(e,t));let l={value:null};c.addPass(new Of(l));let h=null,d=null;n>=2&&(h=new fc(e,t,s,r,void 0,{radius:.9,distanceExponent:1.4,thickness:1.2,scale:1,samples:12,distanceFallOff:1,screenSpaceRadius:!1},{lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,radiusExponent:1,rings:2,samples:12}),h.blendIntensity=.9,h._overrideVisibility=function(){let f=this._visibilityCache;this.scene.traverse(x=>{(x.isPoints||x.isLine||x.isLine2||x.isSprite||x.userData&&x.userData.noAO)&&x.visible&&(x.visible=!1,f.push(x))})},c.addPass(h));let p=null;n>=1&&(p=new Bf(l,n>=2?48:20),p.enabled=!1,c.addPass(p),p.setSize(c.readBuffer.width,c.readBuffer.height)),n>=1&&(d=new Vo(new tt(s,r),.55,.62,1),c.addPass(d)),c.addPass(new Bu);let u=new ko(l_);return n===0&&(u.uniforms.uCA.value=0,u.uniforms.uGrain.value=.015),c.addPass(u),{composer:c,bloom:d,gtao:h,dof:p,grade:u,tier:n,setDof(f,x,g,m){if(!p)return;p.enabled=f>.01;let M=p.shared;M.uAperture.value=f,M.uFocus.value=x,M.uNear.value=g,M.uFar.value=m},setSize(f,x){c.setSize(f,x),u.uniforms.uAspect.value=f/x},render(f,x){u.uniforms.uTime.value=x%10,c.render(f)},dispose(){c.dispose(),p&&p.dispose(),o.dispose()}}}var dc=new F;function tr(i,e,t,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),c=Math.PI/4;dc.copy(e),dc[n]=0,dc.normalize();let l=.5*a/(a+o),h=1-dc.angleTo(i)/c;return Math.sign(dc[t])===1?h*l:o/(a+o)+l+l*(1-h)}var nr=class i extends Sn{constructor(e=1,t=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let c=new F,l=new F,h=new F(e,t,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,p=this.attributes.normal.array,u=this.attributes.uv.array,f=d.length/6,x=new F,g=.5/a;for(let m=0,M=0;m<d.length;m+=3,M+=2)switch(c.fromArray(d,m),l.copy(c),l.x-=Math.sign(l.x)*g,l.y-=Math.sign(l.y)*g,l.z-=Math.sign(l.z)*g,l.normalize(),d[m+0]=h.x*Math.sign(c.x)+l.x*r,d[m+1]=h.y*Math.sign(c.y)+l.y*r,d[m+2]=h.z*Math.sign(c.z)+l.z*r,p[m+0]=l.x,p[m+1]=l.y,p[m+2]=l.z,Math.floor(m/f)){case 0:x.set(1,0,0),u[M+0]=tr(x,l,"z","y",r,n),u[M+1]=1-tr(x,l,"y","z",r,t);break;case 1:x.set(-1,0,0),u[M+0]=1-tr(x,l,"z","y",r,n),u[M+1]=1-tr(x,l,"y","z",r,t);break;case 2:x.set(0,1,0),u[M+0]=1-tr(x,l,"x","z",r,e),u[M+1]=tr(x,l,"z","x",r,n);break;case 3:x.set(0,-1,0),u[M+0]=1-tr(x,l,"x","z",r,e),u[M+1]=1-tr(x,l,"z","x",r,n);break;case 4:x.set(0,0,1),u[M+0]=1-tr(x,l,"x","y",r,e),u[M+1]=1-tr(x,l,"y","x",r,t);break;case 5:x.set(0,0,-1),u[M+0]=tr(x,l,"x","y",r,e),u[M+1]=1-tr(x,l,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};var li=10,dn=8,ir=2.9,pc=[{key:"roof",dy:9.2},{key:"upper",dy:6.6},{key:"main",dy:4.1},{key:"basement",dy:2},{key:"below",dy:0}],fn=(i,e,t)=>new F(i,e,t);function Sm({M:i,T:e,markTex:t,glowTex:n}){let s=new mt,r={};pc.forEach(T=>{let U=new mt;U.userData.level=T.key,r[T.key]=U,s.add(U)});let a={},o=[],c=new fa({color:11126756,transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1,fog:!1}),l={icicles:null,snowL:null,snowR:null,chimneyTop:new vi,fans:[]},h=Xa;function d(T,U,I,G,j=0,q=0,Y=0,V,W={}){let Q=new Sn(T,U,I);h(Q,W.uv||{});let be=new Fe(Q,G);if(be.position.set(j,q,Y),be.castShadow=W.cast!==!1,be.receiveShadow=W.receive!==!1,W.edges){let Ve=new Lr(new wo(Q,30),c);Ve.raycast=()=>{},be.add(Ve)}return V&&V.add(be),be}function p(T,U,I,G,j,q=0,Y=0,V=0,W,Q={}){let be=new nr(T,U,I,Q.seg||2,G),Ve=new Fe(be,j);return Ve.position.set(q,Y,V),Ve.castShadow=Q.cast!==!1,Ve.receiveShadow=!0,W&&W.add(Ve),Ve}function u(T,U,I,G,j,q,Y,V=18){let W=new Fe(new pn(T,T,U,V),I);return W.position.set(G,j,q),W.castShadow=!0,W.receiveShadow=!0,Y&&Y.add(W),W}function f(T,U,I,G){let j=a[T]||(a[T]={meshes:[],mats:[],marks:[]}),q=Y=>{let V=Y.clone();return V.userData.baseEmissive=V.emissive.clone(),V};if(U.forEach(Y=>{Y.material=Array.isArray(Y.material)?Y.material.map(q):q(Y.material),Y.userData.sys=T,j.meshes.push(Y),j.mats.push(...[].concat(Y.material))}),I){let Y=new Ji(new Bi({map:t,transparent:!0,depthTest:!1,depthWrite:!1,opacity:0}));Y.position.copy(I),Y.scale.set(.95,.95,1),Y.renderOrder=10,Y.userData.sys=T,Y.userData.noAO=!0,r[G].add(Y),j.marks.push(Y)}}let x=0,g={},m=T=>g[T]||(g[T]=dm(T));function M(T,U,I,G,j,q){let Y=U.x1-U.x0,V=U.y1-U.y0,W=(U.x0+U.x1)/2,Q=(U.y0+U.y1)/2,be=new mt;be.position.set(W,Q,0),T.add(be);let Ve=Nf(m(G||"living")),Ne=new Fe(new an(Y,V),Ve);Ne.position.z=.03,Ne.receiveShadow=!1,be.add(Ne);let rt=.075,Et=.1;p(Y,rt,Et,.012,i.trim,0,V/2-rt/2,.07,be,{seg:1}),p(Y,rt,Et,.012,i.trim,0,-V/2+rt/2,.07,be,{seg:1}),p(rt,V,Et,.012,i.trim,-Y/2+rt/2,0,.07,be,{seg:1}),p(rt,V,Et,.012,i.trim,Y/2-rt/2,0,.07,be,{seg:1});let he=Y>1.35?Math.round(Y/.95):1;for(let Oe=1;Oe<he;Oe++)p(.035,V-.1,.07,.008,i.trim,-Y/2+Y/he*Oe,0,.065,be,{seg:1,cast:!1});V>1.2&&p(Y-.1,.035,.07,.008,i.trim,0,V*.12,.065,be,{seg:1,cast:!1}),p(Y+.22,.055,.26,.012,i.cedar,0,-V/2-.03,.14,be,{seg:1}),p(Y+.18,.09,.12,.012,i.trim,0,V/2+.07,.1,be,{seg:1});let Se=new Ji(new Bi({map:n,transparent:!0,depthWrite:!1,blending:zn,opacity:0}));return Se.position.set(0,0,.4),Se.scale.set(Y*2.6,V*2.6,1),Se.userData.noAO=!0,be.add(Se),o.push({mat:Ve,halo:Se,order:j!=null?j+x*.001:x,always:!!q,w:Y,h:V}),x++,be}function b(T,U,I){let G=U.x1-U.x0,j=U.y1-U.y0,q=(U.x0+U.x1)/2,Y=(U.y0+U.y1)/2,V=new mt;V.position.set(q,Y,0),T.add(V),d(G,j,.07,i.door,0,0,0,V,{uv:{ox:q,oy:Y}});let W=new Fe(new an(.22,j*.72),Nf(m("hall")));W.position.set(-G/2+.22,.05,.04),V.add(W),o.push({mat:W.material,halo:null,order:.5,always:!1,w:.22,h:j*.72}),p(.03,.8,.05,.012,i.trim,G/2-.14,-.05,.08,V,{seg:1}),p(G+.14,.09,.12,.012,i.trim,0,j/2+.07,.07,V,{seg:1}),p(.07,j,.1,.01,i.trim,-G/2-.035,0,.06,V,{seg:1}),p(.07,j,.1,.01,i.trim,G/2+.035,0,.06,V,{seg:1})}function y(T,U,I,G,j,q,Y,V,W={}){let Q=new mt,be=new Set([-T/2,T/2]),Ve=new Set([0,U]);G.forEach(he=>{be.add(he.x0),be.add(he.x1),Ve.add(he.y0),Ve.add(he.y1)});let Ne=[...be].sort((he,Se)=>he-Se),rt=[...Ve].sort((he,Se)=>he-Se),Et=[i.trim,i.trim,i.trim,i.trim,j,i.drywall];for(let he=0;he<Ne.length-1;he++)for(let Se=0;Se<rt.length-1;Se++){let Oe=(Ne[he]+Ne[he+1])/2,Re=(rt[Se]+rt[Se+1])/2;G.some(Ye=>Oe>Ye.x0&&Oe<Ye.x1&&Re>Ye.y0&&Re<Ye.y1)||d(Ne[he+1]-Ne[he],rt[Se+1]-rt[Se],I,Et,Oe,Re,0,Q,{edges:!0,uv:{ox:Oe,oy:Re+(W.v0||0)}})}return G.forEach(he=>{he.door?b(Q,he,I):M(Q,he,I,he.room,W.order,he.always)}),Q.position.copy(Y),Q.rotation.y=V||0,q.add(Q),Q}(()=>{let T=r.below,U=[],I=i.form;U.push(d(li+.5,3.4,.25,I,0,-1.4,dn/2+.12,T,{edges:!0,uv:{ox:0,oy:-1.4}})),U.push(d(li+.5,3.4,.25,I,0,-1.4,-dn/2-.12,T,{edges:!0,uv:{ox:0,oy:-1.4}})),U.push(d(.25,3.4,dn,I,li/2+.12,-1.4,0,T,{edges:!0,uv:{oy:-1.4}})),U.push(d(.25,3.4,dn,I,-li/2-.12,-1.4,0,T,{edges:!0,uv:{oy:-1.4}})),d(li+1.2,.3,.8,i.concrete,0,-3.1,dn/2+.1,T),d(li+1.2,.3,.8,i.concrete,0,-3.1,-dn/2-.1,T),d(.8,.3,dn,i.concrete,li/2+.1,-3.1,0,T),d(.8,.3,dn,i.concrete,-li/2-.1,-3.1,0,T);let G=d(li,.16,dn,i.slab,0,-2.88,0,T,{edges:!0});f("foundation",[...U,G],fn(li/2+.6,-1.4,1.6),"below");let j=u(.14,9,i.pipe,.6,-3.25,-dn/2-4.3,T);j.rotation.x=Math.PI/2-.05;let q=u(.14,.6,i.pipe,.6,-3,-dn/2+.2,T),Y=u(.12,3.2,i.pvc,.6,-1.6,-dn/2-1.2,T);f("sewer",[j,q,Y],fn(.6,-2.4,-dn/2-4.5),"below");let V=u(.1,.5,i.pvc,-1.2,-2.7,-1.5,T);f("radon",[V],fn(-1.2,-2.2,-1.5),"below");let W=u(.06,li+1,i.pvc,0,-3.25,dn/2+.7,T,10);W.rotation.z=Math.PI/2,W.castShadow=!1})(),(()=>{let T=r.basement,U=new ps(16766880,0,15,2);U.position.set(.2,-.7,-.4),T.add(U),T.userData.lights=[U];let I=d(.85,1.7,.85,i.white,-3.3,-2,-2.6,T),G=d(.87,.12,.87,i.copper,-3.3,-1.5,-2.6,T),j=d(6.2,.36,.5,i.steel,-.3,-.12,-2.6,T),q=d(.5,1,.5,i.steel,-3.3,-.7,-2.6,T),Y=u(.07,1.2,i.pvc,-3,-.6,-3.1,T);f("hvac",[I,G,j,q,Y],fn(-3.3,-.9,-2),"basement");let V=u(.3,1.4,i.white,-2.1,-2.1,-3,T),W=u(.04,1.2,i.copper,-2,-.9,-3,T);f("water-heaters",[V,W],fn(-2.1,-1.1,-2.6),"basement");let Q=d(.62,.95,.14,i.steel,2.8,-1.2,-3.8,T),be=d(.4,.7,.02,i.copper,2.8,-1.2,-3.72,T),Ve=u(.05,1.5,i.copper,2.8,-.1,-3.8,T);f("electrical",[Q,be,Ve],fn(2.8,-.5,-3.3),"basement");let Ne=u(.1,3.1,i.pvc,-1.2,-1.2,-1.5,T);f("radon",[Ne],null,"basement"),u(.09,3.1,i.pipe,-2.6,-1.3,-3.6,T);for(let rt=-4;rt<=4;rt++)d(.09,.3,dn-.3,i.cedar,rt*1,0-.1,0,T,{cast:!1})})();let _=[{x0:-3.8,x1:-1.2,y0:.7,y1:2.5,room:"living"},{x0:.2,x1:1.3,y0:0,y1:2.2,door:!0},{x0:2.1,x1:4.2,y0:.7,y1:2.5,room:"kitchen"}];(()=>{let T=r.main,U=.3;d(li,.3,dn,i.floor,0,.15,0,T,{edges:!0}),y(li,ir,.22,_,i.lap,T,fn(0,U,dn/2),0,{order:1,v0:U}),y(li,ir,.22,[{x0:-3,x1:1.6,y0:.1,y1:2.45,room:"kitchen"}],i.lap,T,fn(0,U,-dn/2),Math.PI,{order:4,v0:U}),y(dn,ir,.22,[{x0:-2.2,x1:-.2,y0:.8,y1:2.3,room:"hall"}],i.lap,T,fn(li/2,U,0),Math.PI/2,{order:2,v0:U}),y(dn,ir,.22,[{x0:.3,x1:2.3,y0:.8,y1:2.3,room:"living"}],i.lap,T,fn(-li/2,U,0),-Math.PI/2,{order:3,v0:U}),d(.15,ir,5,i.drywall,1.2,U+ir/2,-1.2,T);let I=d(3,.95,.65,i.counter,2.9,U+.48,-3.4,T),G=p(.85,1.95,.7,.03,i.steel,4.35,U+.98,-3.4,T),j=d(.75,.05,.6,i.steel,2.4,U+.97,-3.4,T);f("installation",[I,G,j],fn(3,2.3,-3.2),"main");let q=u(.1,3.2,i.pvc,-1.2,1.9,-1.5,T);f("radon",[q],null,"main"),u(.09,3.2,i.pipe,-2.6,1.9,-3.6,T),p(.3,.42,.18,.02,i.white,2.8,1.5,-dn/2-.2,T),u(.035,3.6,i.steel,2.8,3.55,-dn/2-.1,T,10);let Y=new ps(16758123,0,11,2);Y.position.set(-1.5,2.4,.5),T.add(Y);let V=new ps(16758123,0,9,2);V.position.set(3,2.4,-1.5),T.add(V),T.userData.lights=[Y,V];let W=new mt;T.add(W),d(2.9,.32,2.3,i.stone,.55,.16,5.1,W,{uv:{ox:.55,oy:.16}}),d(2.9,.07,2.3,i.cedar,.55,.35,5.1,W,{uv:{}}),d(1.7,.17,.4,i.concrete,.7,.085,6.55,W),d(1.9,.17,.4,i.concrete,.7,.255-.085,6.2,W),[-.75,1.85].forEach(Ne=>{p(.22,2.55,.22,.015,i.cedar,Ne,1.67,6.12,W),d(.34,.5,.34,i.stone,Ne,.6,6.12,W,{uv:{ox:Ne,oy:.6}})}),p(3.5,.24,.22,.02,i.cedar,.55,2.84,6.12,W);let Q=d(3.4,.14,2.6,[i.trim,i.trim,i.roof,i.cedar,i.trim,i.trim],.55,3,5.25,W,{uv:{swap:!0}});Q.rotation.x=.1,[-.15,1.65].forEach(Ne=>{let rt=new Fe(new pn(.06,.07,.24,12),i.sconce);rt.position.set(Ne,1.9,4.2),rt.userData.noAO=!0,W.add(rt);let Et=new Ji(new Bi({map:n,transparent:!0,depthWrite:!1,blending:zn,opacity:0}));Et.position.set(Ne,1.9,4.5),Et.scale.set(1.6,1.6,1),Et.userData.noAO=!0,W.add(Et),l.porchHalos=(l.porchHalos||[]).concat(Et)}),[-.78,1.88].forEach(Ne=>{d(.06,.06,2,i.trim,Ne,1.2,5.15,W),d(.05,.05,2,i.trim,Ne,.55,5.15,W);for(let rt=0;rt<8;rt++)d(.025,.62,.025,i.trim,Ne,.9,4.25+rt*.27,W,{cast:!1})});let be=new Fe(new an(.2,.2),new Hn({map:t,transparent:!0,toneMapped:!1}));be.position.set(1.62,1.35,4.13),be.userData.noAO=!0,W.add(be);let Ve=new ps(16761469,0,7,2);Ve.position.set(.75,2.6,dn/2+1.1),T.add(Ve),T.userData.porch=Ve})(),(()=>{let T=r.upper,U=3.45;d(li,.25,dn,i.floor,0,3.32,0,T,{edges:!0}),y(li,ir,.22,[{x0:-3.6,x1:-1.8,y0:.9,y1:2.4,room:"bed"},{x0:-.9,x1:1.9,y0:.5,y1:2.5,room:"living"},{x0:2.6,x1:4.1,y0:.9,y1:2.4,room:"bed"}],i.bb,T,fn(0,U,dn/2),0,{order:5,v0:U}),y(li,ir,.22,[{x0:-3.4,x1:-1.8,y0:.9,y1:2.3,room:"bath"},{x0:1.6,x1:3.2,y0:.9,y1:2.3,room:"bed"}],i.bb,T,fn(0,U,-dn/2),Math.PI,{order:8,v0:U}),y(dn,ir,.22,[{x0:.6,x1:2.4,y0:.9,y1:2.3,room:"bed"}],i.bb,T,fn(li/2,U,0),Math.PI/2,{order:6,v0:U}),y(dn,ir,.22,[{x0:-2.2,x1:-.6,y0:1.2,y1:2.2,room:"bath"}],i.bb,T,fn(-li/2,U,0),-Math.PI/2,{order:7,v0:U}),d(.15,ir,dn-.4,i.drywall,-1.6,U+ir/2,0,T);let I=p(1.7,.55,.8,.08,i.ceramic,-3.6,U+.28,-3.35,T),G=p(.7,.85,.5,.04,i.ceramic,-2.4,U+.43,-3.5,T),j=u(.09,3,i.pipe,-2.6,U+1.4,-3.6,T);f("plumbing",[I,G,j],fn(-3.4,4.6,-3),"upper");let q=u(.1,3,i.pvc,-1.2,U+1.4,-1.5,T);f("radon",[q],null,"upper");let Y=new ps(16758123,0,11,2);Y.position.set(.5,5.6,.5),T.add(Y),T.userData.lights=[Y]})(),(()=>{let T=r.roof,U=6.35,I=3.6,G=li/2,j=.6,q=Math.atan2(I,G),Y=Math.hypot(G+j,(G+j)*I/G),V=ie=>{let de=new Sn(Y,.2,dn+1);h(de,{swap:!0});let Me=new Fe(de,[i.trim,i.trim,i.roof,i.cedar,i.trim,i.trim]);Me.castShadow=!0,Me.receiveShadow=!0,Me.rotation.z=ie*q;let $e=U+I-(G+j)/2*(I/G)+.12;return Me.position.set(ie>0?-(G+j)/2+.02:(G+j)/2-.02,$e,0),T.add(Me),Me},W=V(1),Q=V(-1);[W,Q].forEach(ie=>{let de=new Lr(new wo(ie.geometry,30),c);de.raycast=()=>{},ie.add(de)}),[W,Q].forEach((ie,de)=>{[-1,1].forEach(qe=>d(Y,.3,.06,i.trim,0,-.05,qe*(dn/2+.5),ie,{cast:!1}));let Me=de===0?-1:1;d(.06,.34,dn+1.04,i.trim,Me*(Y/2),-.1,0,ie,{cast:!1});let $e=d(.12,.1,dn+.9,i.trim,Me*(Y/2+.06),-.28,0,ie,{cast:!1});$e.rotation.z=-ie.rotation.z}),d(.3,.22,dn+1.05,i.trim,0,U+I+.2,0,T),f("roofing",[W,Q],fn(-2.8,9.1,2.2),"roof");let be=new Ei;be.moveTo(-G,0),be.lineTo(G,0),be.lineTo(0,I),be.lineTo(-G,0);let Ve=new Ks;Ve.moveTo(-.5,1.15),Ve.lineTo(.5,1.15),Ve.lineTo(.5,2.15),Ve.lineTo(-.5,2.15),Ve.lineTo(-.5,1.15),be.holes.push(Ve);let Ne=new Rs(be,{depth:.22,bevelEnabled:!1});[dn/2-.22,-dn/2].forEach((ie,de)=>{let Me=new Fe(Ne,[i.bb,i.trim]);Me.position.set(0,U,ie),Me.castShadow=!0,Me.receiveShadow=!0,T.add(Me);let $e=new mt;$e.position.set(0,U+1.65,ie+.11),T.add($e);let qe=M($e,{x0:-.5,x1:.5,y0:-.5,y1:.5,room:"hall"},.22,"hall",-1,!0);de===1&&($e.rotation.y=Math.PI,$e.position.z=ie+.11-0);let ut=new Ji(new Bi({map:n,transparent:!0,depthWrite:!1,blending:zn,opacity:0}));ut.position.set(0,U+1.65,ie+(de===0?.55:-.3)),ut.scale.set(3.4,3.4,1),ut.userData.noAO=!0,T.add(ut),o.push({mat:null,halo:ut,order:-1,always:!0,w:1,h:1,haloOnly:!0,level:.6})});let rt=new mt;rt.rotation.z=-q,rt.position.copy(Q.position);let Et=[];for(let ie=0;ie<2;ie++)for(let de=0;de<4;de++){let Me=d(1.3,.05,.95,i.solar,-.9+ie*1.45,.16,-1.6+de*1.05,rt,{cast:!1}),$e=d(1.34,.04,.99,i.solarFrame,-.9+ie*1.45,.14,-1.6+de*1.05,rt,{cast:!1});Et.push(Me)}T.add(rt),f("solar",Et,fn(3.4,9.3,.6),"roof");let he=ie=>{let de=new an(Y-.25,dn+.7,30,30),Me=de.attributes.position,$e=Nn(5);for(let lt=0;lt<Me.count;lt++)Me.setZ(lt,.025+$e()*.05);de.computeVertexNormals();let qe=i.snowRoof.clone();qe.alphaMap=fm(256,ie),qe.alphaTest=.25,qe.userData={...i.snowRoof.userData};let ut=new Fe(de,qe);return ut.rotation.x=-Math.PI/2,ut.position.y=.105,ut.receiveShadow=!0,ut.castShadow=!0,ut};l.snowL=he(),l.snowL.userData.keep=!0,W.add(l.snowL),l.snowR=he((ie,de)=>ie>.24&&ie<.7&&de>.24&&de<.76?0:1),l.snowR.userData.keep=!0,Q.add(l.snowR);let Se=d(.5,.16,dn+.8,i.snowRoof,0,U+I+.38,0,T,{cast:!1});Se.material=i.snowRoof,Se.userData.keep=!0,(()=>{let ie=Nn(9),de=70,Me=new Kr(.04,1,6);Me.rotateX(Math.PI),Me.translate(0,-.5,0);let $e=new Mi(Me,i.ice,de*2),qe=new zt,ut=new Bn,lt=new F,J=new F,It=U+I-(G+j)*(I/G)+0;for(let At=0;At<2;At++)for(let H=0;H<de;H++){let S=-dn/2-.4+H/(de-1)*(dn+.8),fe=.12+ie()*ie()*.7,le=.7+ie()*.8;lt.set((At?1:-1)*(G+j+.08),It-.35,S+(ie()-.5)*.06),J.set(le,fe,le),qe.compose(lt,ut,J),$e.setMatrixAt(At*de+H,qe)}$e.userData.baseMatrices=Array.from({length:de*2},(At,H)=>{let S=new zt;return $e.getMatrixAt(H,S),S}),$e.castShadow=!1,$e.userData.noAO=!0,$e.visible=!1,T.add($e),l.icicles=$e})();let Oe=new an(li-.6,dn-.6,40,32),Re=Oe.attributes.position,Ye=Nn(3);for(let ie=0;ie<Re.count;ie++)Re.setZ(ie,Ye()*.12);Oe.computeVertexNormals();let ee=new Fe(Oe,i.insul);ee.rotation.x=-Math.PI/2,ee.position.y=U+.02,ee.receiveShadow=!0,T.add(ee),d(li,.1,dn,i.floor,0,U-.05,0,T),f("asbestos",[ee],fn(-.4,7.3,-.8),"roof");let Je=u(.1,4.6,i.pvc,-1.2,U+2.2,-1.5,T);f("radon",[Je],fn(-1.2,10.9,-1.5),"roof");let oe=u(.24,.42,i.steel,-1.2,7.9,-1.5,T,16);f("radon",[oe],null,"roof"),u(.09,4,i.pipe,-2.6,U+2,-3.6,T);let xe=d(.95,4.1,.95,i.stone,-3.4,8.4,-1.6,T,{uv:{ox:-3.4,oy:8.4}});d(1.15,.12,1.15,i.concrete,-3.4,10.5,-1.6,T),d(.7,.3,.7,i.steel,-3.4,10.7,-1.6,T),l.chimneyTop.position.set(-3.4,10.9,-1.6),T.add(l.chimneyTop)})();let w={meter:fn(2.8,1.45,-4.3),panel:fn(2.8,-1.2,-3.8),shutoff:fn(-.5,-1.4,3.75),heater:fn(-2.1,-2,-3),sewer:fn(.6,-3.35,-7.5),furnace:fn(-3.3,-2,-2.6),register:fn(3.8,3.52,2.9),fan:fn(-1.2,7.9,-1.5),pit:fn(-1.2,-3,-1.5),exhaust:fn(-1.2,11.6,-1.5),rim:fn(4.9,.3,4.05),sill:fn(-2.5,.7,4.05),attic:fn(0,6.4,4.05),door:fn(.75,1.2,4.05),chimney:fn(-3.4,10.5,-1.6),eave:fn(-5.6,5.9,3.5),potlights:fn(-2.4,3.1,.7),rangeHood:fn(2.4,2.4,-3.55),island:fn(3,1.3,-.6),vanity:fn(-2.4,4.4,-3.55),tub:fn(-3.6,4.1,-3.35),bedWindow:fn(2.4,5.2,-3.9),sump:fn(.66,-2.2,1.6)},A=new zt,v=new F,R=new Bn,P=new F;function B(T,U,I,G,j){let q=G<.55?1:0;B.on=ct(B.on??0,q,Zt(j*(q?.55:1.2),0,1));let Y=B.on*9,V=(1-T.ghost*.85)*(1-.35*(T.cut||0)),W=1-.65*(T.cut||0),Q=1+1.6*(T.cut||0);o.forEach(Oe=>{let Re=(Oe.always?1:Zt(Y-Oe.order,0,1))*V,Ye=1-G*.8;Oe.mat&&(Oe.mat.emissiveIntensity=(Oe.always?2.6:2)*Re*Ye*W),Oe.halo&&(Oe.halo.material.opacity=(Oe.haloOnly?.28:Oe.always?.5:.3)*Re*Ye*W)}),["main","upper"].forEach(Oe=>(r[Oe].userData.lights||[]).forEach(Re=>{Re.intensity=9*Zt(Y/9,0,1)*(1-G)*V*Q}));let be=Math.max(T.zk||0,Rt(.2,.7,T.explode||0),Zt(((T.lift||0)-1.5)/1.5,0,1));(r.basement.userData.lights||[]).forEach(Oe=>{Oe.intensity=30*be*V*Q});let Ve=(1-G)*V;r.main.userData.porch.intensity=12*Ve,(l.porchHalos||[]).forEach(Oe=>{Oe.material.opacity=.55*Ve*W}),i.sconce.emissiveIntensity=.4+3.2*(1-G);let Ne=Zt(T.melt,0,1),rt=.18+Ne*.8;l.snowL.material.alphaTest=rt,l.snowR.material.alphaTest=Zt(rt+.1,0,1);let Et=r.roof.children.find(Oe=>Oe.material===i.snowRoof);Et&&(Et.visible=Ne<.6);let he=l.icicles,Se=Zt(T.icicles,0,1);if(he.visible=Se>.01,he.visible){for(let Oe=0;Oe<he.count;Oe++)A.copy(he.userData.baseMatrices[Oe]),A.decompose(v,R,P),P.y*=Se,P.x*=.5+.5*Se,P.z=P.x,A.compose(v,R,P),he.setMatrixAt(Oe,A);he.instanceMatrix.needsUpdate=!0}return Y}return{house:s,layers:r,sys:a,windows:o,ANCHORS:w,edgeMat:c,extra:l,update:B,box:d,rbox:p,cyl:u,system:f,wall:y,windowUnit:M,setUV:h,v:fn}}function Ss(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,c=new tn,l=0;for(let h=0;h<i.length;++h){let d=i[h],p=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let u in d.attributes){if(!n.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+u+'" attribute exists among all geometries, or in none of them.'),null;r[u]===void 0&&(r[u]=[]),r[u].push(d.attributes[u]),p++}if(p!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let u in d.morphAttributes){if(!s.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[u]===void 0&&(a[u]=[]),a[u].push(d.morphAttributes[u])}if(e){let u;if(t)u=d.index.count;else if(d.attributes.position!==void 0)u=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,u,h),l+=u}}if(t){let h=0,d=[];for(let p=0;p<i.length;++p){let u=i[p].index;for(let f=0;f<u.count;++f)d.push(u.getX(f)+h);h+=i[p].attributes.position.count}c.setIndex(d)}for(let h in r){let d=bm(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,d)}for(let h in a){let d=a[h][0].length;if(d!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let p=0;p<d;++p){let u=[];for(let x=0;x<a[h].length;++x)u.push(a[h][x][p]);let f=bm(u);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(f)}}}return c}function bm(i){let e,t,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let a=new e(r),o=new Jt(a,t,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let d=c/t;for(let p=0,u=h.count;p<u;p++)for(let f=0;f<t;f++){let x=h.getComponent(p,f);o.setComponent(p+d,f,x)}}else a.set(h.array,c);c+=h.count*t}return s!==void 0&&(o.gpuType=s),o}function Tm(i,e=1e-4){e=Math.max(e,Number.EPSILON);let t={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count,a=0,o=Object.keys(i.attributes),c={},l={},h=[],d=["getX","getY","getZ","getW"],p=["setX","setY","setZ","setW"];for(let M=0,b=o.length;M<b;M++){let y=o[M],_=i.attributes[y];c[y]=new _.constructor(new _.array.constructor(_.count*_.itemSize),_.itemSize,_.normalized);let w=i.morphAttributes[y];w&&(l[y]||(l[y]=[]),w.forEach((A,v)=>{let R=new A.array.constructor(A.count*A.itemSize);l[y][v]=new A.constructor(R,A.itemSize,A.normalized)}))}let u=e*.5,f=Math.log10(1/e),x=Math.pow(10,f),g=u*x;for(let M=0;M<r;M++){let b=n?n.getX(M):M,y="";for(let _=0,w=o.length;_<w;_++){let A=o[_],v=i.getAttribute(A),R=v.itemSize;for(let P=0;P<R;P++)y+=`${Math.trunc(v[d[P]](b)*x+g)},`}if(y in t)h.push(t[y]);else{for(let _=0,w=o.length;_<w;_++){let A=o[_],v=i.getAttribute(A),R=i.morphAttributes[A],P=v.itemSize,B=c[A],T=l[A];for(let U=0;U<P;U++){let I=d[U],G=p[U];if(B[G](a,v[I](b)),R)for(let j=0,q=R.length;j<q;j++)T[j][G](a,R[j][I](b))}}t[y]=a,h.push(a),a++}}let m=i.clone();for(let M in i.attributes){let b=c[M];if(m.setAttribute(M,new b.constructor(b.array.slice(0,a*b.itemSize),b.itemSize,b.normalized)),M in l)for(let y=0;y<l[M].length;y++){let _=l[M][y];m.morphAttributes[M][y]=new _.constructor(_.array.slice(0,a*_.itemSize),_.itemSize,_.normalized)}}return m.setIndex(h),m}var zf=0,wm={value:new ri(0,0,-1,30)};function mc(i,e,t,n=!1){let s=i.onBeforeCompile,r=++zf;return i.onBeforeCompile=(a,o)=>{s&&s(a,o),a.uniforms.uSight=wm,a.fragmentShader=a.fragmentShader.replace("#include <common>",`#include <common>
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
vColor.rgb = mix(vColor.rgb, vec3(0.8, 0.86, 0.95), aSnow * uSnow);`)},i.customProgramCacheKey=()=>"snowv"+n,i}function Rm({M:i,T:e,glowTex:t,markTex:n,tier:s,reduce:r}){let a=new mt,o=Nn(21),c=jr("rgba(255,255,255,0.7)"),l=mm(),h=Go("rgba(255,196,120,0.9)","rgba(255,150,70,0)"),d={uSnow:{value:1},uRoofSnow:{value:1},uTint:{value:new xt(1,1,1)},uGrow:{value:0},uLeafTint:{value:new xt(.3,.5,.15)}},p=e.grass,u=e.snow,f=new ln({map:u.map,normalMap:u.normalMap,roughnessMap:u.rmMap,metalnessMap:u.rmMap,roughness:1,metalness:1,transparent:!0,normalScale:new tt(1.1,1.1),envMapIntensity:.9});f.onBeforeCompile=K=>{K.uniforms.uSnow=d.uSnow,K.uniforms.uTint=d.uTint,K.uniforms.uGrass={value:p.map},K.vertexShader=K.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vWxz;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vWxz = (modelMatrix * vec4(position, 1.0)).xz;`),K.fragmentShader=K.fragmentShader.replace("#include <common>",`#include <common>
      uniform float uSnow; uniform vec3 uTint; uniform sampler2D uGrass; varying vec2 vWxz;
      float gh(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float gn(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f); return mix(mix(gh(i), gh(i+vec2(1,0)), f.x), mix(gh(i+vec2(0,1)), gh(i+vec2(1,1)), f.x), f.y); }`).replace("#include <map_fragment>",`
      vec4 snowC = texture2D(map, vMapUv);
      vec3 gr = texture2D(uGrass, vWxz * 0.25).rgb * uTint;
      float nz = gn(vWxz * 0.35) * 0.55 + gn(vWxz * 1.7) * 0.3 + gn(vWxz * 7.0) * 0.15;
      float cover = smoothstep(uSnow - 0.1, uSnow + 0.1, 1.0 - nz + (uSnow - 0.5) * 0.9);
      cover = uSnow >= 0.995 ? 1.0 : (uSnow <= 0.005 ? 0.0 : cover);
      diffuseColor.rgb *= mix(gr / max(snowC.rgb, vec3(0.2)) * 0.9, vec3(1.0), cover);
      diffuseColor *= snowC;`)};let x=200,g=6,m=450,M=Array.from({length:x+1},(K,se)=>m*Math.sinh(g*(se/x*2-1))/Math.sinh(g)),b=(K,se)=>{let ge=Math.hypot(K,se),Xe=Rt(40,220,ge)*(Jn(K*.012+3,se*.012+8,4,4096,4096,3)-.35)*22,E=(Jn(K*.09,se*.09,3,4096,4096,9)-.5)*.35*Rt(8,22,ge)*(1-Rt(14,17,se)*(1-Rt(27,30,se)))*(1-Rt(-22.5,-20.5,se)*(1-Rt(-15.5,-13.5,se)))*(1-Rt(5,6.2,K)*(1-Rt(10.2,11.5,K))*Rt(.5,2,se)*(1-Rt(16.5,18,se)));return Xe+E},y=new tn;{let K=new Float32Array((x+1)*(x+1)*3),se=new Float32Array((x+1)*(x+1)*2),ge=[];for(let Xe=0;Xe<=x;Xe++)for(let E=0;E<=x;E++){let O=Xe*(x+1)+E,Z=M[E],$=M[Xe];K[O*3]=Z,K[O*3+1]=b(Z,$),K[O*3+2]=$,se[O*2]=Z,se[O*2+1]=$}for(let Xe=0;Xe<x;Xe++)for(let E=0;E<x;E++){let O=(M[E]+M[E+1])/2,Z=(M[Xe]+M[Xe+1])/2;if(Math.abs(O)<5.1&&Math.abs(Z)<4.1)continue;let $=Xe*(x+1)+E,me=$+1,Ie=$+x+1,ve=Ie+1;ge.push($,Ie,me,me,Ie,ve)}y.setAttribute("position",new Jt(K,3)),y.setAttribute("uv",new Jt(se,2)),y.setIndex(ge),y.computeVertexNormals()}let _=[],w=new Fe(y,f);w.receiveShadow=!0,w.renderOrder=-1,a.add(w);let A=i.asphalt.clone();[A.map,A.normalMap,A.roughnessMap,A.metalnessMap].forEach(K=>{K&&K.repeat.set(220,3)}),A.roughness=.72,A.metalness=0,A.metalnessMap=null,A.envMapIntensity=1.4;let v=new Fe(new an(660,9),A);v.rotation.x=-Math.PI/2,v.position.set(0,.012,22.2),v.receiveShadow=!0,a.add(v);let R=null;{let K=new an(2.2,.14),se=new Mi(K,new ln({color:14070346,roughness:.8}),90),ge=new zt,Xe=new Bn().setFromEuler(new Ni(-Math.PI/2,0,0)),E=new F,O=new F(1,1,1);for(let Z=0;Z<90;Z++)E.set(-180+Z*4,.02,22.2),ge.compose(E,Xe,O),se.setMatrixAt(Z,ge);se.receiveShadow=!0,a.add(se),R=se}_.push(A,i.pavement);let P=new Fe(new Sn(660,.1,1.8),i.pavement);P.position.set(0,.05,15.6),P.receiveShadow=!0,P.castShadow=!0,a.add(P);let B=new Fe(new Sn(1.3,.05,9.4),i.pavement);B.position.set(.7,.03,10.9),B.receiveShadow=!0,a.add(B);let T=new Fe(new Sn(3.6,.06,14.5),i.pavement);T.position.set(7.9,.03,9.3),T.receiveShadow=!0,a.add(T);let U=i.asphalt.clone();[U.map,U.normalMap,U.roughnessMap,U.metalnessMap].forEach(K=>{K&&K.repeat.set(220,1.5)}),U.metalnessMap=null,U.metalness=0,U.roughness=.9,U.color.setScalar(1.25),_.push(U);let I=new Fe(new an(660,4.5),U);I.rotation.x=-Math.PI/2,I.position.set(0,.012,-18.2),I.receiveShadow=!0,a.add(I);let G=(()=>{let K=new $n(1,10,6),se=new Mi(K,new ln({color:14673906,roughness:.95}),70),ge=new zt,Xe=new Bn,E=new F,O=new F;for(let Z=0;Z<70;Z++){let $=Z%2,me=-140+(Z>>1)*8+o()*3;E.set(me,.1,$?26.9:17.6+o()*.2),O.set(2.8+o()*1.4,.55+o()*.25,.9+o()*.3),ge.compose(E,Xe,O),se.setMatrixAt(Z,ge)}return se.castShadow=!0,se.receiveShadow=!0,a.add(se),se})(),j=[],q=mc(i.pole.clone(),3.5,9),Y=mc(new ln({color:3817544,roughness:.42,metalness:.65}),3.5,9),V=new Hn({color:new xt(3.2,2.2,1.1),toneMapped:!1}),W=new fs([new F(0,6.9,0),new F(0,7.45,.25),new F(0,7.6,.9),new F(0,7.5,1.6)]),Q=new ds(W,14,.05,8),be=new $n(1,24,12);be.scale(.54,.085,.23),[[-13,16.6],[11,16.6],[34,16.6],[-38,16.6]].forEach(([K,se])=>{let ge=new mt;ge.position.set(K,0,se);let Xe=new Fe(new pn(.06,.1,7.2,10),q);Xe.position.y=3.6,Xe.castShadow=!0,ge.add(Xe);let E=new Fe(Q,q);E.castShadow=!0,ge.add(E);let O=new Fe(be,Y);O.position.set(0,7.5,1.78),O.rotation.x=.04,O.castShadow=!0,ge.add(O);let Z=new Fe(new an(.8,.24),V);Z.rotation.x=Math.PI/2,Z.position.set(0,7.445,1.78),Z.userData.noAO=!0,ge.add(Z);let $=new Ji(new Bi({map:t,transparent:!0,depthWrite:!1,blending:zn,opacity:0}));$.position.set(0,7.3,1.78),$.scale.set(5,5,1),$.userData.noAO=!0,ge.add($);let me=new Fe(new an(1,1),new Hn({map:h,transparent:!0,depthWrite:!1,blending:zn,opacity:0}));me.rotation.x=-Math.PI/2,me.position.set(0,.04,2),me.scale.set(15,10,1),me.userData.noAO=!0,ge.add(me),a.add(ge),j.push({halo:$,pool:me,lens:Z})});let Ve=new ps(16761466,0,32,2);Ve.position.set(11,7,18.2),a.add(Ve);let Ne=new ps(16761466,0,32,2);Ne.position.set(-13,7,18.2),a.add(Ne);let rt=[];[[-2.5,7.4,5.5,4.2],[.8,8.4,5.5,4.6],[3.15,7.4,5.5,4.2]].forEach(([K,se,ge,Xe])=>{let E=new Fe(new an(1,1),new Hn({map:h,transparent:!0,depthWrite:!1,blending:zn,opacity:0}));E.rotation.x=-Math.PI/2,E.position.set(K,.05,se),E.scale.set(ge,Xe,1),E.userData.noAO=!0,a.add(E),rt.push(E)});let Et=mc(Hf(i.spruce.clone(),d.uSnow),5,12,!0);function he(K){let se=Nn(K),ge=[],Xe=11;for(let X=0;X<Xe;X++){let Ze=X/(Xe-1),Ke=ct(1.7,.18,Math.pow(Ze,.85))*(.94+se()*.12),ht=ct(1.7,.9,Ze),ft=1+X*.62,pt=new Kr(Ke,ht,20,4,!0);pt.translate(0,ft+ht/2,0);let Ct=pt.attributes.position;for(let yt=0;yt<Ct.count;yt++){let nt=Ct.getX(yt),wt=Ct.getY(yt),Ot=Ct.getZ(yt),Rn=Math.atan2(Ot,nt),On=Math.hypot(nt,Ot),kn=1+Math.sin(Rn*7+X*2.3)*.09+Math.sin(Rn*13+X)*.04+(se()-.5)*.05,An=On/Ke*(On/Ke)*.34*(1+.35*Math.sin(Rn*5+X*1.3));Ct.setXYZ(yt,nt*kn,wt-An,Ot*kn)}pt.computeVertexNormals(),ge.push(pt)}let E=new pn(.1,.2,1.6,8);E.translate(0,.8,0),ge.push(E);let O=Ss(ge);O.computeVertexNormals();let Z=O.attributes.position,$=O.attributes.normal,me=new Float32Array(Z.count*3),Ie=new Float32Array(Z.count),ve=new xt;for(let X=0;X<Z.count;X++){let Ze=$.getY(X),Ke=Jn(Z.getX(X)*2.1,Z.getZ(X)*2.1+Z.getY(X)*1.1,3,64,64,2);ve.setRGB(.05+Ke*.05,.12+Ke*.08,.09+Ke*.05),Z.getY(X)<1.15&&ve.setRGB(.1,.07,.05),me[X*3]=ve.r,me[X*3+1]=ve.g,me[X*3+2]=ve.b,Ie[X]=Z.getY(X)<1.15?0:Zt(Rt(.05,.6,Ze+(Ke-.5)*.7),0,1)*.78}return O.setAttribute("color",new Jt(me,3)),O.setAttribute("aSnow",new Jt(Ie,1)),O}let Se=[[-9.5,3,1.1],[-11.8,-3.5,1.4],[9.8,-5.5,1.25],[-8.2,-8.5,1.05],[15,-9,1.35],[-14,9.5,1.2],[18,9,1.1],[-21,-6,1.5],[24,-3,1.25],[-27,8,1.2],[30,-12,1.4],[-11.5,-13.5,1.3],[6,-26,1.1],[-18,-27,1.45],[22,-27,1.3],[-36,3,1.3],[40,2,1.2]],Oe=[he(1),he(2)],Re=Oe[0];Oe.forEach((K,se)=>{let ge=Se.filter((me,Ie)=>Ie%2===se),Xe=new Mi(K,Et,ge.length),E=new zt,O=new Bn,Z=new F,$=new F;ge.forEach(([me,Ie,ve],X)=>{O.setFromAxisAngle(new F(0,1,0),o()*6.28),Z.set(me,0,Ie),$.set(ve,ve*(.9+o()*.25),ve),E.compose(Z,O,$),Xe.setMatrixAt(X,E)}),Xe.castShadow=!0,Xe.receiveShadow=!0,a.add(Xe)});let Ye=[];{let K=Hf(i.shrub.clone(),d.uSnow),se=new Nr(.7,3),ge=se.attributes.position,Xe=new Float32Array(ge.count*3),E=new Float32Array(ge.count);for(let O=0;O<ge.count;O++){let Z=ge.getX(O),$=ge.getY(O),me=ge.getZ(O),Ie=Jn(Z*2+5,me*2+$*2,3,64,64,4),ve=1+(Ie-.5)*.35;ge.setXYZ(O,Z*ve,$*ve*.72,me*ve),Xe[O*3]=.06,Xe[O*3+1]=.15+Ie*.05,Xe[O*3+2]=.1,E[O]=Rt(.05,.7,$/.7+(Ie-.5))*.8}se.setAttribute("color",new Jt(Xe,3)),se.setAttribute("aSnow",new Jt(E,1)),se.computeVertexNormals(),[[-1.7,4.9,1.2],[-2.5,4.7,.9],[2.9,4.9,1],[3.7,4.6,.8],[-5.2,4.6,.8]].forEach(([O,Z,$])=>{let me=new Fe(se,K);me.position.set(O,.35*$,Z),me.scale.setScalar($),me.castShadow=!0,me.receiveShadow=!0,me.userData.keep=!0,a.add(me),Ye.push(me)})}let ee=mc(Hf(new ln({vertexColors:!0,roughness:1}),d.uSnow),5,12,!0),Je=(()=>{let K=document.createElement("canvas");K.width=K.height=128;let se=K.getContext("2d"),ge=Nn(77);for(let E=0;E<30;E++){se.save(),se.translate(12+ge()*104,12+ge()*104),se.rotate(ge()*Math.PI);let O=150+Math.floor(ge()*105),Z=6+ge()*6,$=13+ge()*9;se.fillStyle=`rgb(${O},${O},${O})`,se.beginPath(),se.ellipse(0,0,Z,$,0,0,Math.PI*2),se.fill(),se.strokeStyle="rgba(70,70,70,0.65)",se.lineWidth=1,se.beginPath(),se.moveTo(0,-$),se.lineTo(0,$),se.stroke(),se.restore()}let Xe=new Wn(K);return Xe.colorSpace=yn,Xe.anisotropy=4,Xe})(),oe=mc((()=>{let K=new ln({map:Je,alphaTest:.5,alphaToCoverage:s>=1,vertexColors:!0,roughness:.8,side:oi}),se=++zf;return K.onBeforeCompile=ge=>{ge.uniforms.uGrow=d.uGrow,ge.uniforms.uLeafTint=d.uLeafTint,ge.vertexShader=ge.vertexShader.replace("#include <common>",`#include <common>
attribute vec3 aCenter;
uniform float uGrow;
uniform vec3 uLeafTint;`).replace("#include <begin_vertex>",`#include <begin_vertex>
transformed = aCenter + (position - aCenter) * uGrow;`).replace("#include <color_vertex>",`#include <color_vertex>
vColor.rgb *= uLeafTint;`),ge.fragmentShader=ge.fragmentShader.replace("#include <normal_fragment_begin>",mn.normal_fragment_begin.replace("normal *= faceDirection;",""))},K.customProgramCacheKey=()=>"leaf"+se,K})(),5,12,!0);function xe(K){let se=Nn(K),ge=[],Xe=[],E=new F(0,1,0);function O(ht,ft,pt,Ct){let yt=new pn(Ct*.68,Ct,pt,6,1);return yt.applyMatrix4(new zt().compose(ht.clone().addScaledVector(ft,pt/2),new Bn().setFromUnitVectors(E,ft),new F(1,1,1))),ge.push(yt),ht.clone().addScaledVector(ft,pt)}let Z=new F(0,0,1);function $(ht,ft){let pt=[],Ct=[],yt=[],nt=[],wt=[],Ot=[],Rn=.72+se()*.5,On=(se()-.5)*.25;for(let An=0;An<18;An++){let ls=se()*2-1,Ts=se()*Math.PI*2,hn=Math.sqrt(1-ls*ls),Gr=new F(hn*Math.cos(Ts),ls*.85,hn*Math.sin(Ts)).normalize(),qi=ht.clone().addScaledVector(Gr,ft*(.3+.7*Math.cbrt(se()))),kr=.8+se()*.55,Vr=Gr.clone().add(new F(se()-.5,se()-.3,se()-.5).multiplyScalar(.9)).normalize(),aa=new Bn().setFromUnitVectors(Z,Vr).premultiply(new Bn().setFromAxisAngle(Vr,se()*6.28)),ys=Gr.clone().add(new F(0,.3,0)).normalize(),k=pt.length/3;[[-.5,-.5],[.5,-.5],[.5,.5],[-.5,.5]].forEach(([je,gt])=>{let Mt=new F(je*kr,gt*kr,0).applyQuaternion(aa).add(qi);pt.push(Mt.x,Mt.y,Mt.z),Ct.push(ys.x,ys.y,ys.z),yt.push(je+.5,gt+.5),nt.push(qi.x,qi.y,qi.z);let Lt=Rn*(.85+.3*se());wt.push(Lt*(1+On),Lt,Lt*(1-On*.6))}),Ot.push(k,k+1,k+2,k,k+2,k+3)}let kn=new tn;kn.setAttribute("position",new qt(pt,3)),kn.setAttribute("normal",new qt(Ct,3)),kn.setAttribute("uv",new qt(yt,2)),kn.setAttribute("aCenter",new qt(nt,3)),kn.setAttribute("color",new qt(wt,3)),kn.setIndex(Ot),Xe.push(kn)}function me(ht,ft,pt,Ct,yt){let nt=O(ht,ft,pt,Ct);if(yt===0){$(nt,.9+se()*.7),se()<.7&&$(nt.clone().add(new F((se()-.5)*1.2,se()*.6,(se()-.5)*1.2)),.7+se()*.5);return}let wt=yt>=3?3:2+(se()<.4?1:0);for(let Ot=0;Ot<wt;Ot++){let Rn=new F().crossVectors(ft,new F(se()-.5,.25,se()-.5)).normalize(),On=ft.clone().applyAxisAngle(Rn,.45+se()*.7).add(new F(0,.18,0)).normalize();me(nt,On,pt*(.68+se()*.14),Ct*.62,yt-1)}yt<=2&&$(nt.clone().add(new F((se()-.5)*.8,.3,(se()-.5)*.8)),.8+se()*.5)}me(new F(0,0,0),E,2.6,.24,4);let Ie=Ss(ge),ve=Ie.attributes.position,X=Ie.attributes.normal,Ze=new Float32Array(ve.count*3),Ke=new Float32Array(ve.count);for(let ht=0;ht<ve.count;ht++){let ft=Jn(ve.getX(ht)*3,ve.getY(ht)*3+ve.getZ(ht),2,64,64,6);Ze[ht*3]=.16+ft*.08,Ze[ht*3+1]=.12+ft*.06,Ze[ht*3+2]=.09+ft*.05,Ke[ht]=Zt(X.getY(ht)*1.5,0,1)*.85}return Ie.setAttribute("color",new Jt(Ze,3)),Ie.setAttribute("aSnow",new Jt(Ke,1)),{wood:Ie,leaf:Ss(Xe)}}let ie=[],de=[[-11.5,-1,.95],[12.2,-3.6,1],[-9.5,-9.5,1.1],[8.5,-9.8,1.15],[-33,-9,1.15],[35,-8,1.05],[-26,11,1],[27,9,1],[-30,18.8,.75],[44,18.8,.75],[-9,-22,1.2],[14,-23,1.1]];[xe(31),xe(47)].forEach((K,se)=>{let ge=de.filter((E,O)=>O%2===se),Xe=(E,O,Z)=>{let $=new Mi(E,O,ge.length),me=new zt,Ie=new Bn,ve=new F,X=new F;return ge.forEach(([Ze,Ke,ht],ft)=>{Ie.setFromAxisAngle(new F(0,1,0),(Ze*7+Ke*3)%6.28),ve.set(Ze,0,Ke),X.setScalar(ht*.95),me.compose(ve,Ie,X),$.setMatrixAt(ft,me)}),$.castShadow=Z,$.receiveShadow=!0,a.add($),$};Xe(K.wood,ee,!0),ie.push(Xe(K.leaf,oe,!0))});let Me=i.neighborRoof.clone();Me.onBeforeCompile=K=>{K.uniforms.uRoofSnow=d.uRoofSnow,K.fragmentShader=K.fragmentShader.replace("#include <common>",`#include <common>
uniform float uRoofSnow;`).replace("#include <map_fragment>",`#include <map_fragment>
diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.9, 0.93, 0.97), uRoofSnow * 0.92);`)},Me.customProgramCacheKey=()=>"nroof";let $e=new Hn({color:new xt(1.5,.92,.42),transparent:!0,opacity:0}),qe=new ln({color:659222,roughness:.08,metalness:.4,envMapIntensity:1.6}),ut=[],lt=[],J=[];function It(K){let{x:se,z:ge,w:Xe,d:E,h:O,rh:Z,tone:$,rot:me=0,garage:Ie,chimney:ve}=K,X=new mt,Ze=i.neighbor.clone();Ze.color.setHex($).multiplyScalar(1.9);let Ke=new Sn(Xe,O,E);Xa(Ke,{oy:O/2});let ht=new Fe(Ke,Ze);ht.position.y=O/2,ht.castShadow=!0,ht.receiveShadow=!0,X.add(ht);let ft=new Ei;ft.moveTo(-Xe/2-.5,0),ft.lineTo(Xe/2+.5,0),ft.lineTo(0,Z),ft.lineTo(-Xe/2-.5,0);let pt=new Fe(new Rs(ft,{depth:E+1,bevelEnabled:!1}),Me);if(pt.position.set(0,O,-E/2-.5),pt.castShadow=!0,pt.receiveShadow=!0,X.add(pt),ve){let wt=new Fe(new Sn(.7,2.4,.7),i.stone);wt.position.set(Xe*.22,O+Z*.55,-E*.1),wt.castShadow=!0,X.add(wt)}let Ct=(wt,Ot,Rn,On,kn)=>{let An=new zt().compose(new F(wt,Ot,Rn),new Bn().setFromAxisAngle(new F(0,1,0),On),new F(1,1,1)),ls=new zt().compose(new F(wt,Ot,Rn).add(new F(Math.sin(On),0,Math.cos(On)).multiplyScalar(-.012)),new Bn().setFromAxisAngle(new F(0,1,0),On),new F(1,1,1));(kn?ut:lt).push({g:X,m:An}),J.push({g:X,m:ls})},yt=Math.max(2,Math.round(Xe/2.4));for(let wt=0;wt<2;wt++)for(let Ot=0;Ot<yt;Ot++)Ie&&wt===0&&Ot===0||Ct(-Xe/2+(Ot+.5)*(Xe/yt),1.5+wt*2.6,E/2+.02,0,o()>.32);for(let wt=0;wt<2;wt++)Ct(Xe/2+.02,1.5+wt*2.6,0,Math.PI/2,o()>.5),Ct(-Xe/2-.02,1.5+wt*2.6,0,-Math.PI/2,o()>.5);let nt=new Fe(new Sn(2.2,2.1,.12),i.walnut);if(nt.position.set(Xe/2-1.5,1.05,E/2+.05),X.add(nt),Ie){let wt=new Fe(new Sn(2.8,2.3,.14),i.cedar);wt.position.set(-Xe/2+1.7,1.15,E/2+.06),X.add(wt);for(let Ot=1;Ot<4;Ot++){let Rn=new Fe(new Sn(2.8,.04,.16),i.trim);Rn.position.set(-Xe/2+1.7,Ot*.575,E/2+.07),X.add(Rn)}}return X.position.set(se,0,ge),X.rotation.y=me,a.add(X),At.push([se,O+Z,ge]),X}let At=[];[{x:-17,z:-1,w:7.4,d:7,h:5.4,rh:2.6,tone:7304314,garage:!0,chimney:!0},{x:17.5,z:.5,w:6.8,d:6.6,h:4.8,rh:2.4,tone:8023912},{x:-33,z:-2,w:7.2,d:7.5,h:5.2,rh:2.5,tone:6251884,chimney:!0},{x:34,z:0,w:7.6,d:7,h:5.6,rh:2.8,tone:6975608,garage:!0},{x:-49,z:0,w:7,d:7,h:5,rh:2.4,tone:7565679},{x:50,z:-1,w:7,d:7,h:5.2,rh:2.4,tone:6712178,chimney:!0},{x:-66,z:1,w:7,d:7,h:5,rh:2.4,tone:7171954,garage:!0},{x:67,z:0,w:7,d:7,h:5,rh:2.4,tone:7369592},{x:-24,z:40,w:7,d:7,h:5.2,rh:2.5,tone:6975092,rot:Math.PI,garage:!0},{x:-8,z:41,w:7.4,d:7,h:5.4,rh:2.6,tone:7828073,rot:Math.PI,chimney:!0},{x:10,z:40,w:7,d:6.8,h:5,rh:2.4,tone:6843764,rot:Math.PI},{x:28,z:41,w:7.2,d:7,h:5.4,rh:2.6,tone:7500921,rot:Math.PI,garage:!0},{x:46,z:40,w:7,d:7,h:5.2,rh:2.4,tone:7106678,rot:Math.PI}].forEach(It),a.updateMatrixWorld(!0);let H=(K,se,ge)=>{let Xe=new Mi(se,ge,K.length),E=new zt;return K.forEach(({g:O,m:Z},$)=>{E.multiplyMatrices(O.matrixWorld,Z),Xe.setMatrixAt($,E)}),Xe.userData.noAO=!1,a.add(Xe),Xe},S=new an(1,1.15),fe=new an(1.16,1.31),le=[];H(ut,S,$e),H(lt,S,qe),H(J,fe,i.trim);let ye=new mt;ye.visible=!1,a.add(ye);let it=new pn(.05,.05,1,8,1,!0),st=[],Le=new F(0,12.6,0);At.forEach(([K,se,ge],Xe)=>{let E=new F(K,se+3.4,ge),O=new Ji(new Bi({map:n,transparent:!0,depthWrite:!1,depthTest:!1,opacity:0}));O.position.copy(E),O.renderOrder=12,O.userData.noAO=!0,ye.add(O);let Z=new Fe(it,new Hn({color:new xt(2.2,1.3,.55),transparent:!0,opacity:0,blending:zn,depthWrite:!1,toneMapped:!1}));Z.scale.set(1,3.2,1),Z.position.set(K,se+1.6,ge),Z.userData.noAO=!0,Z.raycast=()=>{},ye.add(Z);let $=E.clone().lerp(Le,.5);$.y+=5+E.distanceTo(Le)*.18;let me=new fs([E,E.clone().lerp($,.5).setY($.y*.9),$,$.clone().lerp(Le,.5).setY($.y*.9),Le]),Ie=40,ve=new Fe(new ds(me,Ie,.07,5,!1),new Hn({color:new xt(2.4,1.4,.6),transparent:!0,opacity:0,blending:zn,depthWrite:!1,toneMapped:!1}));ve.userData.noAO=!0,ve.raycast=()=>{},ye.add(ve);let X=9,Ze=new tn;Ze.setAttribute("position",new Jt(new Float32Array(X*3),3));let Ke=new Ki(Ze,new Hi({size:.9,map:c,color:new xt(2.4,1.5,.7),transparent:!0,depthWrite:!1,blending:zn,toneMapped:!1}));Ke.frustumCulled=!1,Ke.userData.noAO=!0,Ke.raycast=()=>{},ye.add(Ke),st.push({spr:O,bm:Z,tube:ve,segs:Ie,curve:me,pts:Ke,n:X,d:E.distanceTo(Le),delay:0})}),st.sort((K,se)=>K.d-se.d),st.forEach((K,se)=>{K.delay=se/st.length});let Ce=new Ji(new Bi({map:n,transparent:!0,depthWrite:!1,depthTest:!1,opacity:0}));Ce.position.copy(Le).add(new F(0,1.2,0)),Ce.scale.set(4.2,4.2,1),Ce.renderOrder=13,Ce.userData.noAO=!0,ye.add(Ce);let Qe=new F;function vt(K,se){ye.visible=K>.003,ye.visible&&(Ce.material.opacity=Rt(0,.15,K),Ce.scale.setScalar(4.2+Math.sin(se*3)*.3),st.forEach(ge=>{let Xe=Rt(ge.delay*.7,ge.delay*.7+.3,K);ge.spr.material.opacity=Xe,ge.spr.scale.setScalar(2.4*(.6+.4*Xe)),ge.bm.material.opacity=.5*Xe,ge.bm.scale.y=3.2+6*Xe,ge.bm.position.y=ge.spr.position.y-ge.bm.scale.y/2-1.6;let E=Math.floor(Rt(.1+ge.delay*.6,.45+ge.delay*.6,K)*ge.segs)*5*6;ge.tube.geometry.setDrawRange(0,E),ge.tube.material.opacity=.34*Xe*(.8+.2*Math.sin(se*3+ge.delay*9));let O=ge.pts.geometry.attributes.position.array,Z=Rt(.1+ge.delay*.6,.45+ge.delay*.6,K);for(let $=0;$<ge.n;$++){let me=($/ge.n+se*.16+ge.delay)%1;if(me>Z){O[$*3+1]=-999;continue}ge.curve.getPointAt(me,Qe),O[$*3]=Qe.x,O[$*3+1]=Qe.y,O[$*3+2]=Qe.z}ge.pts.geometry.attributes.position.needsUpdate=!0,ge.pts.material.opacity=Xe}))}let N=new ln({color:4864555,roughness:.95}),ae=new Hn({color:723724}),ue=[];(()=>{let K=new mt;K.position.set(-3.4,0,-11.4),a.add(K);let se=7.4,ge=6.4,Xe=3.1,E=new Sn(se,Xe,ge);Xa(E,{oy:Xe/2});let O=new Fe(E,i.bb.clone());O.material.color.setScalar(1),O.position.y=Xe/2,O.castShadow=!0,O.receiveShadow=!0,K.add(O);let Z=new Ei;Z.moveTo(-se/2-.45,0),Z.lineTo(se/2+.45,0),Z.lineTo(0,1.9),Z.lineTo(-se/2-.45,0);let $=new Fe(new Rs(Z,{depth:ge+.9,bevelEnabled:!1}),Me);$.position.set(0,Xe,-ge/2-.45),$.castShadow=!0,$.receiveShadow=!0,K.add($);for(let Ie=0;Ie<2;Ie++){let ve=-1.8+Ie*3.6,X=new Fe(new Sn(3.1,2.4,.12),i.walnut);X.position.set(ve,1.2,-ge/2-.05),X.castShadow=!0,K.add(X);for(let ht=1;ht<4;ht++){let ft=new Fe(new Sn(3.1,.04,.14),i.trim);ft.position.set(ve,ht*.6,-ge/2-.08),K.add(ft)}let Ze=new Fe(new Sn(2.7,.3,.14),i.mirror);Ze.position.set(ve,2.05,-ge/2-.09),K.add(Ze);let Ke=new Fe(new Sn(3.3,2.55,.1),i.trim);Ke.position.set(ve,1.27,-ge/2-0),K.add(Ke)}[-3.3,3.3].forEach(Ie=>{let ve=new Fe(new pn(.07,.08,.26,12),i.sconce);ve.position.set(Ie,2.55,-ge/2-.2),ve.userData.noAO=!0,K.add(ve);let X=new Ji(new Bi({map:t,transparent:!0,depthWrite:!1,blending:zn,opacity:0}));X.position.set(Ie,2.55,-ge/2-.5),X.scale.set(2.2,2.2,1),X.userData.noAO=!0,K.add(X),ue.push(X)});let me=new Fe(new an(1,1),new Hn({map:h,transparent:!0,depthWrite:!1,blending:zn,opacity:0}));me.rotation.x=-Math.PI/2,me.position.set(0,.05,-ge/2-2.2),me.scale.set(10,5,1),me.userData.noAO=!0,K.add(me),ue.pool=me})();let we=[-75.2,-49.2,-23.2,2.8,28.8,54.8,80.8];we.forEach(K=>{let se=new mt;se.position.set(K,0,-15.5),a.add(se);let ge=new Fe(new pn(.13,.19,9.8,10),N);ge.position.y=4.9,ge.castShadow=!0,se.add(ge);let Xe=new Fe(new Sn(.12,.12,2.2),N);if(Xe.position.y=9.2,se.add(Xe),[-.85,0,.85].forEach(E=>{let O=new Fe(new pn(.04,.05,.2,8),i.ceramic);O.position.set(0,9.36,E),se.add(O)}),Math.abs(K-2.8)<1){let E=new Fe(new pn(.3,.3,.95,14),i.steel);E.position.set(.5,8.35,.2),E.castShadow=!0,se.add(E);let O=new Fe(new pn(.2,.3,.12,14),i.steel);O.position.set(.5,8.9,.2),se.add(O)}});let ze=[];for(let K=0;K<we.length-1;K++)[-.85,0,.85].forEach(se=>{let ge=new F(we[K],9.4,-15.5+se),Xe=new F(we[K+1],9.4,-15.5+se),E=ge.clone().lerp(Xe,.5);E.y-=.9,ze.push(new ds(new fs([ge,ge.clone().lerp(E,.5).setY(9.4-.45),E,E.clone().lerp(Xe,.5).setY(9.4-.45),Xe]),24,.022,4))});{let K=new F(2.8,9.4,-15.5),se=new F(2.8,5.4,-4.3),ge=K.clone().lerp(se,.5);ge.y-=.7,ze.push(new ds(new fs([K,ge,se]),20,.026,4))}let z=new Fe(Ss(ze),ae);z.castShadow=!1,z.raycast=()=>{},a.add(z);let Ae=new mt,pe=[],Be={front:null,rear:null},Ue=new mt;(()=>{let K=new ji({color:1784408,metalness:.65,roughness:.3,clearcoat:1,clearcoatRoughness:.08,envMapIntensity:1.5}),se=new ji({color:395533,metalness:.2,roughness:.04,clearcoat:1,envMapIntensity:1.8}),ge=new ln({color:1052946,roughness:.85}),Xe=new ln({color:12107462,metalness:.9,roughness:.25}),E=new Ei;E.moveTo(-2.3,.28),E.lineTo(-2.38,.6),E.quadraticCurveTo(-2.36,.92,-2.05,.98),E.lineTo(1.35,.98),E.quadraticCurveTo(2.05,.9,2.3,.7),E.lineTo(2.34,.44),E.quadraticCurveTo(2.3,.28,2.1,.28),E.lineTo(-2.3,.28);let O=new Fe(new Rs(E,{depth:1.7,bevelEnabled:!0,bevelThickness:.09,bevelSize:.09,bevelSegments:4,curveSegments:14}),K);O.geometry.translate(0,0,-.85),O.castShadow=!0,Ae.add(O);let Z=new Ei;Z.moveTo(-1.95,.96),Z.quadraticCurveTo(-1.55,1.42,-.95,1.46),Z.lineTo(.5,1.44),Z.quadraticCurveTo(.95,1.4,1.38,.96),Z.lineTo(-1.95,.96);let $=new Fe(new Rs(Z,{depth:1.62,bevelEnabled:!0,bevelThickness:.07,bevelSize:.05,bevelSegments:3,curveSegments:12}),se);$.geometry.translate(0,0,-.81),$.castShadow=!0,Ae.add($);let me=new Fe(new nr(1.9,.07,1.6,2,.03),K);me.position.set(-.2,1.47,0),Ae.add(me),[[-1.4,.8],[1.4,.8],[-1.4,-.8],[1.4,-.8]].forEach(([yt,nt])=>{let wt=new Fe(new pn(.37,.37,.26,24),ge);wt.rotation.x=Math.PI/2,wt.position.set(yt,.37,nt*1+Math.sign(nt)*.04),wt.castShadow=!0,Ae.add(wt);let Ot=new Fe(new pn(.23,.23,.27,20),Xe);Ot.rotation.x=Math.PI/2,Ot.position.copy(wt.position),Ae.add(Ot)});let Ie=new ln({color:1118481,emissive:16777215,emissiveIntensity:.1}),ve=new ln({color:2228224,emissive:16722458,emissiveIntensity:.1}),X=new Fe(new Sn(.06,.05,1.5),Ie);X.position.set(2.33,.72,0),X.userData.noAO=!0,Ae.add(X);let Ze=new Fe(new Sn(.06,.05,1.5),ve);Ze.position.set(-2.4,.78,0),Ze.userData.noAO=!0,Ae.add(Ze),Be.front=Ie,Be.rear=ve;let Ke=new Fe(new nr(1.8,.07,1.5,2,.03),i.snowRoof);Ke.userData.keep=!0,Ke.position.set(-.2,1.54,0),Ae.add(Ke),pe.push(Ke);let ht=new Fe(new nr(1,.05,1.45,2,.02),i.snowRoof);ht.userData.keep=!0,ht.position.set(1.6,1,0),ht.rotation.z=-.1,Ae.add(ht),pe.push(ht),Ae.position.set(7.9,0,6.3),Ae.rotation.y=-Math.PI/2,a.add(Ae);let ft=[new F(5.2,1.2,2.5),new F(5.55,.5,2.85),new F(6.15,.12,3.3),new F(6.7,.4,3.75),new F(7,.82,3.95)],pt=new Fe(new ds(new fs(ft),24,.028,6),new ln({color:855310,roughness:.6}));pt.castShadow=!0,Ue.add(pt);let Ct=new Fe(new $n(.05,10,8),new Hn({color:new xt(.4,3,1.2)}));Ct.position.set(5.16,1.5,2.5),Ct.userData.noAO=!0,Ue.add(Ct),Ue.userData.led=Ct,a.add(Ue)})();let re=r?0:s>=1?2200:900,te=new tn,_e=new Float32Array(re*3),Ge=new Float32Array(re*2),dt=[90,40,90];for(let K=0;K<re;K++)_e[K*3]=(o()-.5)*dt[0],_e[K*3+1]=o()*dt[1],_e[K*3+2]=(o()-.5)*dt[2],Ge[K*2]=.7+o()*1.1,Ge[K*2+1]=o()*6.28;te.setAttribute("position",new Jt(_e,3));let Ut=new Hi({color:16777215,size:.11,map:c,transparent:!0,opacity:.85,depthWrite:!1,blending:zn}),Kt=new Ki(te,Ut);Kt.frustumCulled=!1,Kt.userData.noAO=!0,a.add(Kt);let sn=s>=1&&!r?140:0,kt=new tn,Tn=new Float32Array(sn*3);for(let K=0;K<sn;K++)Tn[K*3]=(o()-.5)*50,Tn[K*3+1]=o()*22,Tn[K*3+2]=(o()-.5)*50;kt.setAttribute("position",new Jt(Tn,3));let Mn=new Hi({color:14674175,size:.42,map:c,transparent:!0,opacity:.22,depthWrite:!1,blending:zn}),C=new Ki(kt,Mn);C.frustumCulled=!1,C.userData.noAO=!0,a.add(C);let Te=r?0:s>=1?1600:700,He=new tn,at=new Float32Array(Te*6),ot=new Float32Array(Te),Ht=[70,30,70];for(let K=0;K<Te;K++){let se=(o()-.5)*Ht[0],ge=o()*Ht[1],Xe=(o()-.5)*Ht[2];at.set([se,ge,Xe,se-.04,ge+.7,Xe],K*6),ot[K]=14+o()*6}He.setAttribute("position",new Jt(at,3));let Pt=new fa({color:11455464,transparent:!0,opacity:0,depthWrite:!1}),St=new Lr(He,Pt);St.frustumCulled=!1,St.userData.noAO=!0,St.raycast=()=>{},a.add(St);let bt=r?0:s>=1?420:160,Wt=new tn,Yt=new Float32Array(bt*3),Pn=new Float32Array(bt*2),qn=new Float32Array(bt*3),di=[80,22,80],ti=[[.95,.55,.1],[.85,.3,.08],[.9,.75,.15],[.6,.2,.05]];for(let K=0;K<bt;K++){Yt[K*3]=(o()-.5)*di[0],Yt[K*3+1]=o()*di[1],Yt[K*3+2]=(o()-.5)*di[2],Pn[K*2]=.5+o()*.8,Pn[K*2+1]=o()*6.28;let se=ti[K%4];qn.set(se,K*3)}Wt.setAttribute("position",new Jt(Yt,3)),Wt.setAttribute("color",new Jt(qn,3));let ni=new Ki(Wt,new Hi({size:.2,vertexColors:!0,map:c,transparent:!0,opacity:.9,depthWrite:!1}));ni.frustumCulled=!1,ni.userData.noAO=!0,a.add(ni);let ii=[];for(let K=0;K<22;K++){let se=new Ji(new Bi({map:l,transparent:!0,depthWrite:!1,opacity:0,color:12568276}));se.userData={age:K/22*6,noAO:!0},se.renderOrder=5,a.add(se),ii.push(se)}let D=new Fe(Re,Et);D.position.set(.9,0,-12.4),D.scale.setScalar(.75),D.castShadow=!0,D.visible=!1,a.add(D);let ne=new Set([w,v,P,B,T,I,G,R,D]),De=new mt;a.add(De),a.children.slice().forEach(K=>{K!==De&&!ne.has(K)&&De.add(K)});let Ee=new F;function Pe(K){Ut.color.set(K?6963104:16777215)}function _t(K,se,ge,Xe,E,O,Z){f.opacity=K.ground,f.depthWrite=K.ground>.95,w.visible=K.ground>.01,_.forEach(ve=>{let X=K.ground<.99;ve.transparent!==X&&(ve.transparent=X,ve.needsUpdate=!0),ve.opacity=K.ground,ve.depthWrite=!X}),d.uSnow.value=K.snow,d.uRoofSnow.value=K.roofSnow,d.uGrow.value=K.grow,d.uLeafTint.value.copy(K.leafTint),vt(K.beacons||0,se),D.visible=K.section>.3,G.visible=K.snow>.25,ie.forEach(ve=>{ve.visible=K.grow>.02,ve.castShadow=K.grow>.5}),pe.forEach(ve=>{ve.visible=K.snow>.5}),Ue.visible=K.explode<.05,Ae.visible=!0;let $=1-Xe;Be.front.emissiveIntensity=.1+2.2*$,Be.rear.emissiveIntensity=.1+3*$,Ue.userData.led.scale.setScalar(.8+.25*Math.sin(se*3));let me=Rt(.35,.9,K.ground);Ye.forEach(ve=>{ve.visible=K.ground>.5||K.explode>.05}),j.forEach(ve=>{ve.halo.material.opacity=.75*$,ve.pool.material.opacity=.55*$*me}),Ve.intensity=55*$,Ne.intensity=40*$,V.color.setRGB(3.2,2.2,1.1).multiplyScalar(.06+.94*$),ue.forEach(ve=>{ve.material.opacity=.5*$}),ue.pool.material.opacity=.4*$*me,rt.forEach((ve,X)=>{ve.material.opacity=.5*$*Zt(Dt(Z,X),0,1)*(1-K.ghost)*me}),$e.opacity=$*.9,Kt.position.set(E.x,0,E.z),C.position.set(E.x,0,E.z),St.position.set(E.x,0,E.z),ni.position.set(E.x,0,E.z);let Ie=K.snowfall;if(Kt.visible=C.visible=Ie>.02&&re>0,Kt.visible){let ve=te.attributes.position.array;for(let Ze=0;Ze<re;Ze++)ve[Ze*3+1]-=Ge[Ze*2]*ge*1.5,ve[Ze*3]+=Math.sin(se*.7+Ge[Ze*2+1])*ge*.3,ve[Ze*3+2]+=Math.cos(se*.5+Ge[Ze*2+1])*ge*.2,ve[Ze*3+1]<0&&(ve[Ze*3+1]=dt[1]);te.attributes.position.needsUpdate=!0;let X=kt.attributes.position.array;for(let Ze=0;Ze<sn;Ze++)X[Ze*3+1]-=.8*ge,X[Ze*3+1]<0&&(X[Ze*3+1]=22);kt.attributes.position.needsUpdate=!0,Ut.opacity=.8*Ie*(1-Xe*.45),Mn.opacity=.2*Ie*(1-Xe*.5)}if(St.visible=K.rain>.02&&Te>0,St.visible){let ve=He.attributes.position.array;for(let X=0;X<Te;X++){let Ze=ot[X]*ge;ve[X*6+1]-=Ze,ve[X*6+4]-=Ze,ve[X*6+4]<0&&(ve[X*6+1]+=Ht[1],ve[X*6+4]+=Ht[1])}He.attributes.position.needsUpdate=!0,Pt.opacity=.32*K.rain}if(ni.visible=K.leaves>.02&&bt>0,ni.visible){let ve=Wt.attributes.position.array;for(let X=0;X<bt;X++)ve[X*3+1]-=Pn[X*2]*ge*.9,ve[X*3]+=(Math.sin(se*.9+Pn[X*2+1])*.7+.35)*ge,ve[X*3+2]+=Math.cos(se*.6+Pn[X*2+1])*.4*ge,ve[X*3+1]<0&&(ve[X*3+1]=di[1]);Wt.attributes.position.needsUpdate=!0,ni.material.opacity=.9*K.leaves}ii.forEach(ve=>{ve.userData.age+=ge*.55,ve.userData.age>6&&(ve.userData.age-=6);let X=ve.userData.age/6;Ee.copy(O),Ee.y+=X*5.2,Ee.x+=X*2.2+Math.sin(X*5+ve.id)*.18,Ee.z+=Math.cos(X*3+ve.id)*.15,ve.position.copy(Ee),ve.scale.setScalar(.5+X*2.6),ve.material.opacity=Math.sin(Math.PI*Math.min(1,X*1.3))*.34*K.smoke*(.5+.5*$)})}let Dt=(K,se)=>K-se*.3;return{world:a,ground:w,groundMat:f,U:d,update:_t,lamps:j,setThermal:Pe,evGroup:Ae,props:De,sight:wm}}var ui={wire:16761963,cold:5220095,hot:16739151,drain:10135476,supply:9433288,ret:9083903,radon:14257407},Gf=2.4;function Am({house:i,reduce:e}){let t=(T,U,I)=>new F(T,U,I),n=jr("rgba(255,255,255,0.6)"),s={netE:[],netW:[],netA:[],netR:[]},r={netE:[],netW:[],netA:[],netR:[]},a={};Object.keys(s).forEach(T=>{a[T]=new mt,a[T].visible=!1,a[T].userData.noAO=!0,i.add(a[T])});let o=T=>{let U=new Ao;for(let I=1;I<T.length;I++)U.add(new da(T[I-1],T[I]));return U};function c(T,U,I,G,j){let q=o(U.map(rt=>t(rt[0],rt[1],rt[2]))),Y=q.getLength(),V=Math.max(6,Math.round(Y*7)),W=6,Q=new Hn({color:I,toneMapped:!1,fog:!1,transparent:!0});Q.color.multiplyScalar(1.5);let be=new Fe(new ds(q,V,G,W,!1),Q),Ve=new Hn({color:I,transparent:!0,opacity:.2,blending:zn,depthWrite:!1,toneMapped:!1,fog:!1});Ve.color.multiplyScalar(Gf);let Ne=new Fe(new ds(q,V,G*3.4,W,!1),Ve);be.renderOrder=7,Ne.renderOrder=8,be.userData.noAO=Ne.userData.noAO=!0,be.raycast=Ne.raycast=()=>{},a[T].add(be,Ne),s[T].push({tube:be,glow:Ne,segs:V,radial:W,gmat:Ve}),j&&r[T].push({curve:q,len:Y,n:Math.max(3,Math.round(Y*j.density)),speed:j.speed,color:j.color||I})}let l=[];for(let T=0;T<=10;T++){let U=T/10;l.push([2.8,ct(9.1,7.7,U)-1*Math.sin(Math.PI*U),ct(-15.5,-4.45,U)])}c("netE",[...l,[2.8,1.45,-4.3],[2.8,-.35,-4.3],[2.8,-.35,-3.86],[2.8,-.72,-3.86]],ui.wire,.045,{density:2.2,speed:6});let h=[2.8,-.72,-3.78],d=[2.8,-.2,-3.78];c("netE",[h,d,[2.2,-.2,-3.78],[2.2,1.35,-3.9],[4.6,1.35,-3.9]],ui.wire,.032,{density:2.5,speed:5}),c("netE",[h,d,[4.94,-.2,-3.78],[4.94,-.2,3.7],[4.94,.6,3.92],[1.45,.6,3.92],[1.45,2.45,3.92],[.05,2.45,3.92],[.05,.6,3.92],[-4.94,.6,3.92],[-4.94,.6,-3.2]],ui.wire,.032,{density:2.5,speed:5}),c("netE",[h,d,[4.94,-.2,-3.78],[4.94,3.85,-3.78],[4.94,3.85,3.92],[-4.94,3.85,3.92],[-4.94,3.85,-2.4]],ui.wire,.032,{density:2.5,speed:5}),c("netE",[h,d,[1.28,-.2,-3.78],[1.28,-.2,-1],[1.28,3.05,-1],[-1.5,3.05,-1],[-1.5,3.05,.5]],ui.wire,.03,{density:2.5,speed:5}),c("netE",[[1.28,3.05,-1],[3,3.05,-1],[3,3.05,-1.6]],ui.wire,.03,{density:2.5,speed:5}),c("netE",[h,d,[4.94,-.2,-3.78],[4.94,-.2,2.5],[4.94,1.3,2.5],[5.1,1.3,2.5]],ui.wire,.034,{density:2.5,speed:5}),c("netW",[[-.5,-2.2,16],[-.5,-2.2,3.75],[-.5,-.32,3.75],[-.5,-.32,-3],[-1.95,-.32,-3],[-1.95,-1.35,-3]],ui.cold,.072,{density:2,speed:2.4}),c("netW",[[-.5,-.32,-3.2],[2.4,-.32,-3.2],[2.4,-.32,-3.7],[2.4,1.05,-3.7]],ui.cold,.051,{density:2,speed:2.4}),c("netW",[[-.5,-.32,-3.45],[-2.3,-.32,-3.45],[-2.3,3.95,-3.45],[-2.3,3.95,-3.62]],ui.cold,.051,{density:2,speed:2.4}),c("netW",[[-2.3,3.6,-3.45],[-3.4,3.6,-3.45]],ui.cold,.051,{density:2,speed:2.4}),c("netW",[[-2.2,-1.35,-3],[-2.2,-.46,-3],[-2.2,-.46,-3.32],[2.55,-.46,-3.32],[2.55,-.46,-3.72],[2.55,1.05,-3.72]],ui.hot,.051,{density:2,speed:2.4}),c("netW",[[-2.2,-.46,-3.32],[-2.47,-.46,-3.32],[-2.47,3.95,-3.32],[-2.47,3.95,-3.6]],ui.hot,.051,{density:2,speed:2.4}),c("netW",[[-2.47,3.6,-3.32],[-3.5,3.6,-3.32]],ui.hot,.051,{density:2,speed:2.4}),c("netW",[[-3.6,3.48,-3.62],[-2.6,3.48,-3.62],[-2.6,-2.95,-3.62],[.6,-2.95,-3.62],[.6,-3.2,-4.3],[.6,-3.45,-9.5]],ui.drain,.087,{density:1.6,speed:2.8}),c("netW",[[2.6,.95,-3.86],[2.6,-2.9,-3.86],[.75,-2.9,-3.86]],ui.drain,.072,{density:1.6,speed:2.8}),c("netW",[[-2.6,3.48,-3.62],[-2.6,10.2,-3.62]],ui.drain,.065,null);let p=[-3.3,-1.15,-2.6],u=[-3.3,-.12,-2.6];c("netA",[p,u,[2.6,-.12,-2.6],[4.4,-.12,-2.6],[4.4,-.12,-1.2],[4.4,.34,-1.2]],ui.supply,.091,{density:1.6,speed:3.2}),c("netA",[u,[-2,-.12,-2.6],[-2,-.12,3.4],[-2,.34,3.4]],ui.supply,.078,{density:1.6,speed:3.2}),c("netA",[[3.1,-.12,-2.6],[3.1,-.12,3.45],[3.1,.34,3.45]],ui.supply,.078,{density:1.6,speed:3.2}),c("netA",[[1.28,-.12,-2.6],[1.28,3.35,-2.6],[3.8,3.35,-2.6],[3.8,3.35,2.9],[3.8,3.52,2.9]],ui.supply,.078,{density:1.6,speed:3.2}),c("netA",[[1.28,3.35,-2.6],[-3.8,3.35,-2.6],[-3.8,3.35,2],[-3.8,3.52,2]],ui.supply,.078,{density:1.6,speed:3.2}),c("netA",[[-1.75,5.6,1],[-1.75,-.32,1],[-3.3,-.32,1],[-3.3,-.32,-2.15],[-3.3,-1.05,-2.15]],ui.ret,.091,{density:1.6,speed:2.4}),c("netR",[[-1.2,-2.92,-1.5],[-1.2,11.6,-1.5]],ui.radon,.075,{density:2.2,speed:2.6});let f={},x=new xt,g=new xt(16777215);Object.keys(r).forEach(T=>{let U=r[T];if(!U.length)return;let I=U.reduce((W,Q)=>W+Q.n,0),G=new tn;G.setAttribute("position",new Jt(new Float32Array(I*3),3));let j=new Float32Array(I*3),q=0;U.forEach(W=>{x.set(W.color).lerp(g,.45).multiplyScalar(Gf);for(let Q=0;Q<W.n;Q++,q++)j[q*3]=x.r,j[q*3+1]=x.g,j[q*3+2]=x.b}),G.setAttribute("color",new Jt(j,3));let Y=new Hi({size:T==="netE"?.2:.26,map:n,vertexColors:!0,transparent:!0,depthWrite:!1,blending:zn,toneMapped:!1,fog:!1}),V=new Ki(G,Y);V.frustumCulled=!1,V.renderOrder=9,V.raycast=()=>{},a[T].add(V),f[T]=V});let m=e?0:260,M=new tn,b=new Float32Array(m*3),y=new Float32Array(m),_=t(-1.2,-2.95,-1.5),w=T=>{b[T*3]=(Math.random()-.5)*9.4,b[T*3+1]=-3.05-Math.random()*1.6,b[T*3+2]=(Math.random()-.5)*7.4,y[T]=.4+Math.random()*.8};for(let T=0;T<m;T++)w(T);M.setAttribute("position",new Jt(b,3));let A=new Hi({color:new xt(ui.radon).multiplyScalar(Gf),size:.2,map:jr("rgba(217,140,255,0.6)"),transparent:!0,opacity:0,depthWrite:!1,blending:zn,toneMapped:!1,fog:!1}),v=new Ki(M,A);v.frustumCulled=!1,v.raycast=()=>{},a.netR.add(v);let R=new F,P={netE:1,netW:1,netA:1,netR:1};function B(T,U,I,G){let j=T.explode<.06;if(Object.keys(s).forEach(q=>{let Y=T[q],V=a[q];if(V.visible=j&&Y>.003,!V.visible)return;let W=!U||U===q?1:.2,Q=P[q]=ct(P[q],W,Math.min(1,G*4));s[q].forEach(Ve=>{let Ne=Math.floor(Zt(Y,0,1)*Ve.segs)*Ve.radial*6;Ve.tube.geometry.setDrawRange(0,Ne),Ve.glow.geometry.setDrawRange(0,Ne),Ve.tube.material.opacity=Q,Ve.gmat.opacity=(.22+.1*Math.sin(I*3+Ve.segs))*Q});let be=f[q];if(be){let Ve=be.geometry.attributes.position.array,Ne=0;r[q].forEach(rt=>{for(let Et=0;Et<rt.n;Et++,Ne++){let he=(Et/rt.n+I*rt.speed/rt.len)%1;if(he>Y){Ve[Ne*3+1]=-999;continue}rt.curve.getPointAt(he,R),Ve[Ne*3]=R.x,Ve[Ne*3+1]=R.y,Ve[Ne*3+2]=R.z}}),be.geometry.attributes.position.needsUpdate=!0,be.material.opacity=Zt(Y*3,0,1)*Q}}),m&&a.netR.visible){A.opacity=Zt(T.netR*2,0,.9)*P.netR;for(let q=0;q<m;q++){R.set(_.x-b[q*3],_.y-b[q*3+1],_.z-b[q*3+2]);let Y=R.length();if(Y<.25){w(q);continue}R.multiplyScalar(G*y[q]*1.1/Y),b[q*3]+=R.x+Math.sin(I+q)*G*.15,b[q*3+1]+=R.y,b[q*3+2]+=R.z}M.attributes.position.needsUpdate=!0}}return{groups:a,update:B}}var c_=`varying vec3 vW; varying vec3 vN;
void main(){ vec4 w = modelMatrix * vec4(position, 1.0);
#ifdef USE_INSTANCING
  w = modelMatrix * instanceMatrix * vec4(position, 1.0);
#endif
  vW = w.xyz; vN = normalize(mat3(modelMatrix) * normal); gl_Position = projectionMatrix * viewMatrix * w; }`,u_=`uniform float uBase, uGrad, uBand, uTime; varying vec3 vW; varying vec3 vN;
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
  gl_FragColor = vec4(toLinear(iron(t + rim)), 1.0); }`;function Cm({scene:i,M:e,skipParents:t,onChange:n}){let s={value:0},r=new Map;function a(p,u=0,f=0){let x=p+"|"+u+"|"+f;return r.has(x)||r.set(x,new Cn({uniforms:{uBase:{value:p},uGrad:{value:u},uBand:{value:f},uTime:s},vertexShader:c_,fragmentShader:u_})),r.get(x)}let o={hvac:.93,"water-heaters":.88,electrical:.6,plumbing:.56,installation:.5,radon:.22,solar:.17,roofing:[.4,.12],foundation:.33,sewer:.3,asbestos:.5};function c(p,u){if(u&&o[u]!==void 0)return a(...[].concat(o[u]));let f=p.userData&&p.userData.th;return f?a(...f):a(.3)}let l=[],h=!1;function d(p){p!==h&&(h=p,i.traverse(u=>{if(u.isSprite&&u.userData.noAO){u.visible=!h&&(u.userData.wasVisible??!0);return}if(!(!(u.isMesh||u.isInstancedMesh)||!u.material)&&!u.userData.noThermal){for(let f=u.parent;f;f=f.parent)if(t.includes(f))return;h?(u.userData.mat0=u.material,u.material=Array.isArray(u.material)?u.material.map(f=>c(f,u.userData.sys)):c(u.material,u.userData.sys)):u.userData.mat0&&(u.material=u.userData.mat0,u.userData.mat0=null)}}),n&&n(h))}return{set:d,time:s,get on(){return h}}}function Pm({M:i,layers:e,glowTex:t}){let n=[],s=(u,f=.7,x=0,g=[.5],m={})=>{let M=new ln({color:u,roughness:f,metalness:x,...m});return M.userData.th=g,M},r=(u,f=[.95])=>{let x=new ln({color:2236440,emissive:u,emissiveIntensity:0,roughness:.5});return x.userData.th=f,n.push(x),x},a={rug:s(5787722,1),rug2:s(3884628,1),cushion:s(13215610,.95),cushion2:s(9413544,.95),tvBlack:s(789775,.25,.3,[.6]),book1:s(9190190,.8),book2:s(3100522,.8),book3:s(14208440,.8),plant:s(4156218,.9,0,[.3]),pot:s(14209734,.6),sheets:s(15328474,.95),duvet:s(7043718,.95),wood:s(10122320,.55),woodDark:s(4929062,.55),steel:s(11186358,.3,.9,[.55]),quartz:s(15328991,.25,0,[.5]),cabinet:s(3812386,.5,0,[.5]),tile:s(13620952,.4,0,[.4]),bin:s(3829659,.6),bin2:s(12936750,.6),cardboard:s(11570526,.9),tv:r(10274047,[.85]),lamp:r(16762746),pendant:r(16765594),screen:r(13625599,[.8]),led:r(6750105,[.7]),pot:s(14868180,.55)},o=(u,f,x,g,m,M,b,y,_,w=0)=>{let A=new Fe(new nr(u,f,x,2,Math.min(g,u/2-.001,f/2-.001,x/2-.001)),m);return A.position.set(M,b+f/2,y),A.rotation.y=w,A.castShadow=!0,A.receiveShadow=!0,A.userData.noPick=!0,_.add(A),A},c=(u,f,x,g,m,M,b,y=18)=>{let _=new Fe(new pn(u,u,f,y),x);return _.position.set(g,m+f/2,M),_.castShadow=!0,_.receiveShadow=!0,_.userData.noPick=!0,b.add(_),_},l=(u,f,x,g,m,M,b=1)=>{let y=new Fe(new $n(u,14,10),f);return y.position.set(x,g,m),y.scale.y=b,y.castShadow=!0,y.userData.noPick=!0,M.add(y),y},h=(u,f,x,g,m,M=a.woodDark)=>{let b=new mt;return b.position.set(u,f,x),b.rotation.y=g,m.add(b),o(.44,.05,.44,.02,M,0,.44,0,b),[[-.19,-.19],[.19,-.19],[-.19,.19],[.19,.19]].forEach(([y,_])=>c(.02,.44,a.steel,y,0,_,b,8)),o(.44,.45,.04,.02,M,0,.5,-.2,b),b},d=(u,f,x,g,m=1.4)=>{c(.14,.03,a.steel,u,f,x,g,14),c(.015,m,a.steel,u,f,x,g,8);let M=new Fe(new pn(.17,.24,.3,18,1,!0),a.lamp);return M.material.side=oi,M.position.set(u,f+m+.05,x),M.userData.noAO=!0,M.userData.noPick=!0,g.add(M),M};(()=>{let u=e.main,f=.3;o(3.4,.02,2.5,.01,a.rug,-2.3,f,.7,u);let x=new mt;x.position.set(-.9,f,.7),x.rotation.y=-Math.PI/2,u.add(x),o(2.3,.4,.95,.1,a.fabric??i.fabric,0,.1,0,x),o(2.3,.45,.25,.1,i.fabric,0,.45,-.38,x),o(.25,.3,.9,.08,i.fabric,-1.07,.3,0,x),o(.25,.3,.9,.08,i.fabric,1.07,.3,0,x),o(.5,.4,.14,.06,a.cushion,-.6,.55,-.1,x),o(.5,.4,.14,.06,a.cushion2,.6,.55,-.1,x),[[-.9,.18],[.9,.18]].forEach(([M])=>{[[-1.05,-.4],[1.05,-.4],[-1.05,.4],[1.05,.4]].forEach(([b,y])=>c(.03,.1,a.woodDark,b,0,y,x,8))}),o(1,.05,.6,.03,a.wood,-2.75,f+.34,.7,u),[[-.4,-.22],[.4,-.22],[-.4,.22],[.4,.22]].forEach(([M,b])=>c(.025,.34,a.woodDark,-2.75+M,f,.7+b,u,8)),h(-2,f,2.5,Math.PI,u,i.fabric2??a.cushion2),o(.4,.5,2,.04,a.woodDark,-4.62,f,.7,u),o(.05,.75,1.5,.015,a.tvBlack,-4.74,f+.95,.7,u);let g=new Fe(new an(1.4,.68),a.tv);g.rotation.y=Math.PI/2,g.position.set(-4.7,f+1.32,.7),g.userData.noPick=!0,u.add(g),o(.34,2,2.2,.02,a.woodDark,.9,f,-1.8,u),[.5,1,1.5].forEach((M,b)=>{o(.2,.28,1.9,.01,[a.book1,a.book2,a.book3][b],1,f+M+.05,-1.8,u)}),c(.17,.4,a.pot,-4.2,f,3.2,u,14),l(.38,a.plant,-4.2,f+.85,3.2,u,1.3),l(.28,a.plant,-4.3,f+1.15,3.1,u,1.2),d(-.45,f,3.1,u,1.45),o(3,.72,.36,.02,a.cabinet,2.9,f+1.55,-3.7,u),o(.9,.14,.6,.02,a.steel,2.4,f+1.3,-3.58,u),o(.34,.9,.34,.02,a.steel,2.4,f+1.45,-3.7,u),o(2.2,.06,1,.02,a.quartz,3,f+.9,-.6,u),o(2.1,.9,.9,.03,a.cabinet,3,f,-.6,u),[2.4,3,3.6].forEach(M=>{c(.17,.05,a.woodDark,M,f+.62,.35,u,16),c(.025,.62,a.steel,M,f,.35,u,8)}),[2.3,3,3.7].forEach(M=>{c(.006,.7,a.steel,M,f+2.1,-.6,u,4);let b=new Fe(new $n(.15,16,10,0,Math.PI*2,0,Math.PI/2),a.pendant);b.position.set(M,f+2.1,-.6),b.userData.noAO=!0,b.userData.noPick=!0,u.add(b)}),o(1.8,.05,.92,.02,a.wood,3.2,f+.72,2.4,u),[[-.8,-.4],[.8,-.4],[-.8,.4],[.8,.4]].forEach(([M,b])=>c(.035,.72,a.woodDark,3.2+M,f,2.4+b,u,8)),h(2.5,f,1.55,0,u),h(3.9,f,1.55,0,u),h(2.5,f,3.25,Math.PI,u),h(3.9,f,3.25,Math.PI,u);let m=new Fe(new pn(.28,.28,.22,20,1,!0),a.pendant);m.material.side=oi,m.position.set(3.2,f+2.15,2.4),m.userData.noAO=!0,m.userData.noPick=!0,u.add(m),c(.006,.55,a.steel,3.2,f+2.2,2.4,u,4),o(1,.45,.38,.03,a.wood,.6,f,3.55,u)})(),(()=>{let u=e.upper,f=3.45;o(2,.42,2.15,.06,a.sheets,2.4,f,-2.55,u),o(1.96,.18,1.55,.08,a.duvet,2.4,f+.38,-2.2,u),o(2,.9,.1,.03,a.woodDark,2.4,f,-3.72,u),o(.6,.22,.38,.08,a.sheets,1.85,f+.5,-3.3,u),o(.6,.22,.38,.08,a.sheets,2.95,f+.5,-3.3,u),[[1],[3.8]].forEach(([g])=>{o(.5,.5,.4,.03,a.woodDark,g,f,-3.55,u),d(g,f+.5,-3.55,u,.34)}),o(2,.02,1.4,.01,a.rug2,2.4,f,-1,u),o(.6,2.3,2,.02,a.woodDark,4.55,f,-1.2,u),o(1.5,.05,.7,.02,a.wood,.6,f+.72,3.35,u),[[-.7,-.3],[.7,-.3],[-.7,.3],[.7,.3]].forEach(([g,m])=>c(.03,.72,a.steel,.6+g,f,3.35+m,u,8)),o(.7,.42,.04,.01,a.tvBlack,.6,f+.98,3.52,u);let x=new Fe(new an(.64,.36),a.screen);x.position.set(.6,f+1.19,3.495),x.rotation.y=Math.PI,x.userData.noPick=!0,u.add(x),h(.6,f,2.7,Math.PI,u,a.cushion2),o(1.5,.4,2,.06,a.sheets,-3.4,f,2.2,u),o(1.46,.16,1.4,.07,a.cushion2,-3.4,f+.36,2.5,u),o(.9,.9,.5,.03,a.woodDark,-4.55,f,.6,u),o(.9,.02,.06,.01,a.tile,-3.2,f,-2.6,u),o(.42,.34,.6,.12,i.ceramic,-4.4,f,-3.2,u),o(.4,.4,.2,.06,i.ceramic,-4.4,f+.34,-3.5,u),o(.7,.9,.03,.01,i.mirror,-2.4,f+1.2,-3.84,u)})(),(()=>{let u=e.basement,f=-2.8;o(.68,.92,.68,.04,i.white,.5,f,-3.5,u),o(.68,.92,.68,.04,i.white,1.25,f,-3.5,u),c(.2,.03,a.tvBlack,.5,f+.93,-3.15,u,18),c(.2,.03,a.tvBlack,1.25,f+.93,-3.15,u,18),o(.6,.06,.4,.01,a.tvBlack,.88,f+.92,-3.88,u),o(2,.06,.75,.01,a.wood,-4,f+.88,2.6,u),o(1.9,.88,.7,.01,a.cabinet,-4,f,2.6,u),o(.3,.06,.12,.01,a.bin2,-4.4,f+.94,2.55,u),o(.2,.2,.2,.02,a.bin,-3.7,f+.94,2.7,u),o(1.7,2,.42,.01,a.steel,4.25,f,2.9,u,0),[.3,.9,1.5].forEach((g,m)=>{o(.5,.3,.34,.03,[a.bin,a.bin2,a.cardboard][m],3.8,f+g+.05,2.9,u),o(.6,.3,.34,.03,[a.cardboard,a.bin,a.bin2][m],4.5,f+g+.05,2.9,u)}),c(.32,.05,a.tvBlack,.66,f,1.6,u,20),c(.1,.5,a.pvc??i.pvc,.66,f,1.6,u,12);let x=new Fe(new $n(.03,8,6),a.led);x.position.set(.66,f+.58,1.6),x.userData.noAO=!0,x.userData.noPick=!0,u.add(x),o(.5,.4,.4,.02,a.cardboard,-1.4,f,2.9,u,.3),o(.45,.35,.4,.02,a.cardboard,-1.3,f+.4,2.9,u,.1),o(1.6,.02,1.2,.01,a.rug,.4,f,.8,u)})();function p(u,f){let x=Zt(.25+.75*u+f*.3,0,1.1);a.tv.emissiveIntensity=1.3*x,a.screen.emissiveIntensity=1.1*x,a.lamp.emissiveIntensity=2.2*x,a.pendant.emissiveIntensity=2.6*x,a.led.emissiveIntensity=3}return{update:p,glows:n}}var ea=.38;function Im({scene:i,M:e,tier:t,reduce:n}){let s=new mt;s.visible=!1,i.add(s);let r=Nn(55),a=jr("rgba(255,255,255,0.65)"),o=(Re,Ye,ee)=>new F(Re,Ye,ee),c=.45,l=.66,h=(()=>{let Re=Math.round(1024*Du()),Ye=Math.round(512*Du()),ee=document.createElement("canvas");ee.width=Re,ee.height=Ye;let Je=ee.getContext("2d"),oe=Je.createImageData(Re,Ye),xe=oe.data,ie=[[0,[58,41,29]],[.5,[92,64,40]],[.62,[150,106,62]],[2.2,[138,98,58]],[2.4,[150,142,120]],[4.6,[124,118,104]],[4.8,[100,112,120]],[7,[90,98,108]],[9,[74,78,86]]],de=$e=>{let qe=0;for(;qe<ie.length-2&&ie[qe+1][0]<=$e;)qe++;let[ut,lt]=ie[qe],[J,It]=ie[qe+1],At=Zt(($e-ut)/(J-ut),0,1);return[ct(lt[0],It[0],At),ct(lt[1],It[1],At),ct(lt[2],It[2],At)]};for(let $e=0;$e<Ye;$e++)for(let qe=0;qe<Re;qe++){let ut=$e/Ye*9+(Jn(qe/90,$e/40,3,11,8,5)-.5)*.7+Math.sin(qe*.02+$e*.01)*.12,lt=de(Zt(ut,0,9)),J=(Jn(qe/6,$e/6,2,170,85,9)-.5)*34,It=($e*Re+qe)*4;xe[It]=Zt(lt[0]+J,0,255),xe[It+1]=Zt(lt[1]+J,0,255),xe[It+2]=Zt(lt[2]+J*.9,0,255),xe[It+3]=255}Je.putImageData(oe,0,0);for(let $e=0;$e<420*Du();$e++){let qe=105+r()*75;Je.fillStyle=`rgba(${qe|0},${qe*.96|0},${qe*.86|0},0.85)`,Je.beginPath(),Je.ellipse(r()*Re,(2.5+r()*2.1)/9*Ye,1.5+r()*3.5,1.2+r()*2.4,r()*3,0,6.3),Je.fill()}let Me=new Wn(ee);return Me.colorSpace=yn,Me.wrapS=Zn,Me.anisotropy=8,Me})(),d=new ln({map:h,roughness:1,metalness:0});h.repeat.set(6,1);let p=new Fe(new an(240,9),d);p.rotation.y=-Math.PI/2,p.position.set(c+ea,-4.52,0),p.userData.noAO=!0,p.userData.noPick=!0,p.receiveShadow=!1,s.add(p);let u=(()=>{let Re=document.createElement("canvas");Re.width=4,Re.height=256;let Ye=Re.getContext("2d"),ee=Ye.createLinearGradient(0,0,0,256);ee.addColorStop(0,"rgb(74,78,86)"),ee.addColorStop(.35,"rgb(24,26,31)"),ee.addColorStop(1,"rgb(6,7,9)"),Ye.fillStyle=ee,Ye.fillRect(0,0,4,256);let Je=new Wn(Re);return Je.colorSpace=yn,Je})(),f=new Fe(new an(240,60),new Hn({map:u,fog:!1,toneMapped:!1}));f.rotation.y=-Math.PI/2,f.position.set(c+ea,-9.02-30,0),f.userData.noAO=!0,f.userData.noPick=!0,f.raycast=()=>{},s.add(f);let x=new mt;s.add(x);for(let Re=0;Re<=9;Re++){let Ye=new Fe(new Sn(.04,.05,Re%3===0?1.4:.8),new Hn({color:16039294,toneMapped:!1}));Ye.position.set(0,-Re,31-(Re%3===0?.7:.4)),Ye.userData.noAO=!0,Ye.raycast=()=>{},x.add(Ye)}let g=new Fe(new Sn(.06,.07,240),new Hn({color:16039294,toneMapped:!1}));g.position.set(c+ea-.02,.02,0),g.userData.noAO=!0,g.raycast=()=>{},s.add(g);let m=(Re,Ye=.45,ee=.2)=>{let Je=new ln({color:Re,roughness:Ye,metalness:ee,emissive:Re,emissiveIntensity:.12,side:oi});return Je.userData.th=[.3],Je},M={water:m(4165606,.4,.3),gas:m(15775786,.45,.2),sewer:m(12169888,.8,0),tile:m(15855334,.6,0),roots:m(8017458,.95,0),sump:m(8362672,.5,.3),crack:new Hn({color:new xt(3,.5,.35),toneMapped:!1})};M.roots.emissiveIntensity=0;let b={water:new mt,gas:new mt,sewer:new mt,found:new mt,radon:new mt};Object.values(b).forEach(Re=>s.add(Re));let y=(Re,Ye,ee,Je,oe=0)=>{let xe=new fs(Re.map(de=>o(...de)),!1,"catmullrom",.05),ie=new Fe(new ds(xe,oe||Math.max(8,Re.length*8),Ye,10,!1),ee);return ie.castShadow=!1,ie.userData.noPick=!0,Je.add(ie),xe},_=(Re,Ye,ee,Je,oe)=>{let xe=o(...Re),ie=o(...Ye),de=xe.distanceTo(ie),Me=new Fe(new pn(ee,ee,de,16,1,!0),Je);return Me.position.copy(xe).lerp(ie,.5),Me.quaternion.setFromUnitVectors(o(0,1,0),ie.clone().sub(xe).normalize()),Me.userData.noPick=!0,oe.add(Me),new da(xe,ie)},w=[];function A(Re,Ye,ee,Je,oe,xe=.22){let ie=new tn;ie.setAttribute("position",new Jt(new Float32Array(Ye*3),3));let de=new Ki(ie,new Hi({size:xe,map:a,color:new xt(Je).multiplyScalar(2.2),transparent:!0,depthWrite:!1,blending:zn,toneMapped:!1}));de.frustumCulled=!1,de.userData.noAO=!0,de.raycast=()=>{},oe.add(de),w.push({curve:Re,n:Ye,speed:ee,len:Re.getLength(),pts:de,group:oe})}_([c-12,-2.4,22.8],[c+60,-2.4,22.8],.24,M.water,b.water),_([c-12,-1.3,24.7],[c+60,-1.3,24.7],.11,M.gas,b.gas);let v=y([[l,-2.4,22.8],[l,-2.3,18],[l,-2.2,6],[l,-2.2,3.75]],.075,M.water,b.water,30);A(v,20,2,7320831,b.water,.2);let R=y([[l+.1,-1.3,24.7],[l+.1,-1.3,8],[l+.1,-.3,5.4],[l+.1,.9,4.25]],.055,M.gas,b.gas,30);A(R,16,2.6,16765514,b.gas,.18);let P=new Fe(new Sn(.3,.4,.2),e.steel);P.position.set(l+.1,1.2,4.25),P.userData.noPick=!0,b.gas.add(P),_([c-12,-3.95,-18.2],[c+60,-3.95,-18.2],.4,M.sewer,b.sewer);let B=y([[l,-3.27,-3.8],[l,-3.35,-9],[l,-3.55,-13],[l,-3.9,-17.9]],.19,M.sewer,b.sewer,30);A(B,18,1.3,13214314,b.sewer,.2);let T=y([[l,-3.3,-5.2],[l,-1,-5.2],[l,.1,-5.2]],.14,M.sewer,b.sewer,10),U=o(l,-3.52,-12.8);[[[.9,-.2,-12.4],[.8,-1.2,-12.2],[l+.04,-2.4,-12.5],[l+.02,-3.2,-12.8],[l,-3.5,-12.9]],[[.9,-.2,-12.4],[.85,-.9,-11.4],[l+.1,-2,-11.5],[l+.04,-3,-12.1],[l,-3.45,-12.6]],[[.9,-.2,-12.4],[.85,-1,-13.5],[l+.12,-2.2,-13.9],[l+.04,-3.1,-13.4],[l,-3.5,-13.1]],[[l+.1,-2.2,-13.8],[l+.05,-2.9,-14.6]],[[l+.12,-2,-11.5],[l+.06,-2.6,-10.5]]].forEach((Re,Ye)=>y(Re,Ye<3?.1:.05,M.roots,b.sewer,24));let I=new Fe(new Qi(.3,.02,8,28),M.crack);I.position.copy(U),I.rotation.y=Math.PI/2,I.userData.noAO=!0,b.sewer.add(I),[[-4.55],[4.55]].forEach(([Re])=>_([c-6,-3.3,Re],[c+6.2,-3.3,Re],.11,M.tile,b.found)),[[c-6],[c+6.2]].forEach(([Re])=>_([Re,-3.3,-4.55],[Re,-3.3,4.55],.11,M.tile,b.found));let G=y([[l,-3.3,4.55],[l,-3.3,3],[l,-3.1,1.9]],.09,M.tile,b.found,12),j=new Fe(new pn(.34,.34,.75,22,1,!0),M.sump);j.position.set(l,-3.05,1.6),j.userData.noPick=!0,b.found.add(j);let q=y([[l,-2.55,1.6],[l,-1.2,1.6],[l,-1.2,6.8],[l,.1,6.8]],.075,M.sump,b.found,24);A(G,10,.8,7320831,b.found,.16),A(q,14,1.8,7320831,b.found,.18),y([[.62,-.15,4.27],[.55,-.55,4.27],[.74,-.95,4.27],[.5,-1.4,4.27],[.7,-1.9,4.27],[.52,-2.5,4.27]],.022,M.crack,b.found,30);let Y=new Ji(new Bi({map:Go("rgba(255,90,70,0.9)","rgba(255,60,40,0)"),transparent:!0,depthWrite:!1,blending:zn,opacity:.6}));Y.position.set(.62,-1.4,4.5),Y.scale.set(2.2,3.4,1),Y.userData.noAO=!0,b.found.add(Y);let V=n?0:t>=1?520:200,W=new tn,Q=new Float32Array(V*3),be=new Float32Array(V*2),Ve=Re=>{Q[Re*3]=r()*(ea-.06),Q[Re*3+1]=-8.6+r()*1.4,Q[Re*3+2]=(r()-.5)*14-1.5,be[Re*2]=.6+r()*.9,be[Re*2+1]=r()*6.28};for(let Re=0;Re<V;Re++)Ve(Re),Q[Re*3+1]=-8.6+r()*5.6;W.setAttribute("position",new Jt(Q,3));let Ne=new Ki(W,new Hi({size:.42,map:a,color:new xt(14257407).multiplyScalar(2.6),transparent:!0,depthWrite:!1,blending:zn,toneMapped:!1}));Ne.frustumCulled=!1,Ne.userData.noAO=!0,Ne.raycast=()=>{},b.radon.add(Ne);let rt={x:-1.2,z:-1.5},Et={ugWater:o(l,-2.4,21),ugGas:o(l+.1,-1.3,14),ugSewer:o(l,-3.7,-16),ugRoots:U.clone(),ugSewerMain:o(l,-3.95,-18.2),ugTile:o(l,-3.3,4.55),ugSump:o(l,-3.1,1.6),ugCrack:o(l,-1.5,4.3),ugRadon:o(-1.2,-6,-1.5),ugMeter:o(l+.1,1.2,4.25),ugMain:o(l,-2.4,22.8),ugGasMain:o(l,-1.3,24.7)},he=o(0,0,0),Se={cx:-1e3};function Oe(Re,Ye,ee,Je){let oe=Rt(0,1,Re.section),xe=Re.section<.002?-1e3:ct(-60,Re.cutX,oe);if(Se.cx=xe,s.visible=Re.section>.002,!s.visible)return xe;if(p.position.x=xe+ea,f.position.x=xe+ea,g.position.x=xe+ea-.02,x.position.x=xe+ea,Et.ugRadon.x=xe+ea*.5,Object.entries(b).forEach(([ie,de])=>{let Me=Ye===ie||Ye==="street"&&(ie==="water"||ie==="gas"),$e=!Ye||Me?1:.2;de.userData.al=ct(de.userData.al??$e,$e,Math.min(1,Je*5)),de.traverse(qe=>{qe.material&&qe.material.isMeshStandardMaterial&&(qe.material.emissiveIntensity=Me?.6:.12)})}),M.crack.color.setRGB(3,.5,.35).multiplyScalar(.7+.3*Math.sin(ee*5)),w.forEach(ie=>{let de=ie.group.userData.al??1;if(ie.pts.visible=de>.02,!ie.pts.visible)return;let Me=ie.pts.geometry.attributes.position.array;for(let $e=0;$e<ie.n;$e++){let qe=($e/ie.n+ee*ie.speed/ie.len)%1;ie.curve.getPointAt(qe,he),Me[$e*3]=he.x,Me[$e*3+1]=he.y,Me[$e*3+2]=he.z}ie.pts.geometry.attributes.position.needsUpdate=!0,ie.pts.material.opacity=de}),Ne.visible=V>0&&(b.radon.userData.al??1)>.2,Ne.visible){Ne.position.x=xe;for(let ie=0;ie<V;ie++){let de=Q[ie*3+1],Me=Rt(-5.8,-3,de);Q[ie*3+1]+=be[ie*2]*Je*.8,Q[ie*3+2]+=((rt.z-Q[ie*3+2])*Me*.5+Math.sin(ee*.8+be[ie*2+1])*.1)*Je,Q[ie*3+1]>-2.95&&Ve(ie)}W.attributes.position.needsUpdate=!0,Ne.material.opacity=b.radon.userData.al??1}return xe}return{group:s,update:Oe,ANCHORS:Et,groups:b,state:Se}}function kf(i){i.updateWorldMatrix(!0,!0);let e=new zt().copy(i.matrixWorld).invert(),t=new zt,n=new Map,s=[],r=l=>{for(let h=l;h&&h!==i;h=h.parent)if(h.userData.sys||h.userData.keep||h.userData.level)return!0;return!1},a=l=>Array.isArray(l.material)?l.geometry.groups.map(h=>{let d=l.geometry.clone(),p=l.geometry.index;return d.clearGroups(),p?d.setIndex(Array.from(p.array.slice(h.start,h.start+h.count))):d.deleteAttribute("position"),{m:l.material[h.materialIndex],g:d}}):[{m:l.material,g:l.geometry.clone()}];i.traverse(l=>{if(!l.isMesh||l.isInstancedMesh||l===i||!l.material||!l.visible||r(l)||l.children.length||!l.geometry.index&&Array.isArray(l.material)||(Array.isArray(l.material)?l.material:[l.material]).some(d=>!d||d.userData.pane))return;t.multiplyMatrices(e,l.matrixWorld),a(l).forEach(({m:d,g:p})=>{let u=[d.uuid,+l.castShadow,+l.receiveShadow,+!!l.userData.noAO,+!!l.userData.noPick,l.renderOrder].join("|"),f=n.get(u);f||n.set(u,f={m:d,cast:l.castShadow,recv:l.receiveShadow,noAO:!!l.userData.noAO,noPick:!!l.userData.noPick,ro:l.renderOrder,geos:[],owners:new Set}),p.attributes.uv||p.setAttribute("uv",new Jt(new Float32Array(p.attributes.position.count*2),2)),p.applyMatrix4(t),f.geos.push(p),f.owners.add(l)}),s.push(l)});let o=0;n.forEach(l=>{if(l.geos.length<2){l.geos.forEach(f=>f.dispose());return}let h=Object.keys(l.geos[0].attributes).filter(f=>l.geos.every(x=>x.attributes[f]));l.geos.forEach(f=>{for(let x of Object.keys(f.attributes))h.includes(x)||f.deleteAttribute(x)});let d=l.geos.some(f=>!f.index)?l.geos.map(f=>f.index?f.toNonIndexed():f):l.geos,p=Ss(d);if(!p)return;p.computeBoundingSphere();let u=new Fe(p,l.m);u.castShadow=l.cast,u.receiveShadow=l.recv,u.renderOrder=l.ro,l.noAO&&(u.userData.noAO=!0),l.noPick&&(u.userData.noPick=!0),i.add(u),o++,l.done=!0});let c=new Set;return n.forEach(l=>{l.done||l.owners.forEach(h=>c.add(h))}),s.forEach(l=>{!c.has(l)&&l.parent&&(l.parent.remove(l),l.geometry.dispose())}),o}function Dm(i,e){i.updateWorldMatrix(!0,!0);let t=new zt().copy(i.matrixWorld).invert(),n=new zt,s=[],r=[];if(i.traverse(c=>{c.isLineSegments&&c.material===e&&r.push(c)}),r.forEach(c=>{let l=c.geometry.clone();for(let h of Object.keys(l.attributes))h!=="position"&&l.deleteAttribute(h);l.applyMatrix4(n.multiplyMatrices(t,c.matrixWorld)),s.push(l)}),s.length<2)return 0;let a=Ss(s.map(c=>c.index?c.toNonIndexed():c));if(!a)return 0;let o=new Lr(a,e);return o.raycast=()=>{},o.userData.noAO=!0,i.add(o),r.forEach(c=>{c.parent&&c.parent.remove(c),c.geometry.dispose()}),r.length}function Lm({M:i,tier:e,glowTex:t,dotTex:n}){let s={value:0},r=(y,_=.6,w=0,A={})=>{let v=new ln({color:y,roughness:_,metalness:w,...A});return v.userData.th=[.4],v};function a(){let y=document.createElement("canvas");y.width=y.height=512;let _=y.getContext("2d");_.fillStyle="#b99a6e",_.fillRect(0,0,512,512);let w=7,A=()=>(w=w*16807%2147483647)/2147483647;for(let P=0;P<260;P++){let B=A()*512,T=.03+A()*.07;_.strokeStyle=A()>.5?`rgba(90,62,30,${T})`:`rgba(240,220,180,${T})`,_.lineWidth=.6+A()*2.2,_.beginPath(),_.moveTo(0,B);for(let U=0;U<=512;U+=32)_.lineTo(U,B+Math.sin(U*.012+P)*(2+A()*5));_.stroke()}for(let P=0;P<5;P++){let B=A()*512,T=A()*512,U=4+A()*7,I=_.createRadialGradient(B,T,0,B,T,U*2.4);I.addColorStop(0,"rgba(70,44,20,.55)"),I.addColorStop(1,"rgba(70,44,20,0)"),_.fillStyle=I,_.beginPath(),_.ellipse(B,T,U*2.6,U*1.3,0,0,6.3),_.fill()}let v=new Wn(y);v.colorSpace=yn,v.wrapS=v.wrapT=Zn,v.repeat.set(1/1.2,1/1.2),v.anisotropy=8;let R=new ln({map:v,roughness:.82,metalness:0});return R.userData.th=[.45],R}let o=(y,_=1.5,w={})=>r(789776,.5,0,{emissive:y,emissiveIntensity:_,...w}),c={enclosure:r(8093831,.5,.6,{envMapIntensity:.7}),enclosureDark:r(2764082,.62,.5,{envMapIntensity:.6}),galv:r(11186618,.38,.9,{envMapIntensity:1.3}),blackPlastic:r(1184534,.42,.05),greyPlastic:r(4869975,.5,.05),whitePlastic:r(11118238,.55,.02),conduit:r(7304316,.62,.02),bluePlastic:r(3104680,.5,.02),orangePlastic:r(14711338,.5,.02),yellowPlastic:r(15319598,.5,.02),redPlastic:r(12728875,.5,.02),purple:r(8011716,.45,.05,{emissive:5909152,emissiveIntensity:.25}),green:r(3119703,.5,.05),copper:r(14256718,.25,1,{envMapIntensity:1.5}),copperHot:r(13201722,.3,1,{envMapIntensity:1.5,emissive:16742954,emissiveIntensity:.3}),aluminum:r(13225684,.3,1,{envMapIntensity:1.4}),brass:r(13214282,.32,1,{envMapIntensity:1.3}),rubber:r(855568,.85,0),plywood:a(),studs:i.cedar,concrete:i.concrete,slab:i.slab,drywall:i.drywall,steel:i.steel,pvc:i.pvc,castIron:r(2829617,.75,.6),clay:r(10115900,.9,0),hdpe:r(1316378,.35,.1,{envMapIntensity:1.2}),gravel:r(7301730,1,0),soil:r(3812382,1,0),insulPink:r(15311018,1,0),insulYellow:r(14861930,1,0),vermiculite:r(11569738,.95,.15),frost:r(15923199,.35,0,{emissive:12572415,emissiveIntensity:.25}),ice:i.ice,water:new ji({color:2781104,roughness:.06,metalness:0,transparent:!0,opacity:.78,envMapIntensity:1.8,clearcoat:1}),sewage:new ji({color:5916200,roughness:.2,metalness:0,transparent:!0,opacity:.9,envMapIntensity:1.2}),glassClear:new ji({color:14674674,roughness:.03,metalness:0,transparent:!0,opacity:.22,envMapIntensity:2,clearcoat:1}),poly:new ji({color:14542574,roughness:.35,metalness:0,transparent:!0,opacity:.28,envMapIntensity:1.4,side:oi,depthWrite:!1}),led:(y=9425830,_=3)=>o(y,_),glow:o};[c.water,c.sewage,c.glassClear,c.poly].forEach(y=>{y.userData.th=[.3]});let l=(y,_,w,A,v,R={})=>(y.position.set(_,w,A),y.castShadow=R.cast!==!1,y.receiveShadow=R.receive!==!1,R.keep&&(y.userData.keep=!0),R.rot&&y.rotation.set(R.rot[0]||0,R.rot[1]||0,R.rot[2]||0),v&&v.add(y),y),h=(y,_,w,A,v=0,R=0,P=0,B,T={})=>{let U=T.r?new nr(y,_,w,2,Math.min(T.r,y/2,_/2,w/2)):new Sn(y,_,w);return T.uv&&Xa(U,T.uv===!0?{}:T.uv),l(new Fe(U,A),v,R,P,B,T)},d=(y,_,w,A=0,v=0,R=0,P,B={})=>{let T=new pn(B.r2??y,y,_,B.seg||16,1,!!B.open);return B.axis==="x"?T.rotateZ(Math.PI/2):B.axis==="z"&&T.rotateX(Math.PI/2),l(new Fe(T,w),A,v,R,P,B)},p=(y,_,w,A,v,R,P={})=>l(new Fe(new $n(y,P.seg||16,P.seg2||12),_),w,A,v,R,P),u=(y,_,w)=>new F(y,_,w);return{time:s,mats:c,std:r,box:h,cyl:d,sphere:p,tube:(y,_,w,A,v={})=>{let R=new fs(y.map(I=>I.isVector3?I:u(I[0],I[1],I[2])),!1,v.type||"catmullrom",v.tension??.3),P=R.getLength(),B=new ds(R,v.seg||Math.max(8,Math.round(P*(v.density||14))),_,v.radial||8,!1),T=B.attributes.uv;for(let I=0;I<T.count;I++)T.setX(I,T.getX(I)*P);let U=l(new Fe(B,w),0,0,0,A,v);return U.userData.curve=R,U.userData.len=P,U},V:u,flow:(y,_={})=>{let w={value:_.level??1},A=new ln({color:_.base??1382170,roughness:_.roughness??.45,metalness:_.metalness??.1,emissive:y,emissiveIntensity:_.intensity??2.2});return A.defines={USE_UV:""},A.userData.level=w,A.userData.th=[.6],A.onBeforeCompile=v=>{v.uniforms.uFlowT=s,v.uniforms.uFlowL=w,v.fragmentShader=v.fragmentShader.replace("#include <common>",`#include <common>
uniform float uFlowT; uniform float uFlowL;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        { float fd = fract(vUv.x * ${(_.dash??3).toFixed(2)} - uFlowT * ${((_.speed??.5)*(_.dash??3)).toFixed(2)});
          float fp = smoothstep(0.0, 0.18, fd) * (1.0 - smoothstep(0.42, 0.6, fd));
          totalEmissiveRadiance *= (${(_.rest??.12).toFixed(2)} + ${(_.gain??1).toFixed(2)} * fp) * uFlowL; }`)},A.customProgramCacheKey=()=>`flow${_.dash??3}_${_.speed??.5}_${_.rest??.12}_${_.gain??1}`,A},atlas:(y,_={})=>{let A=_.width||1024,v=4,R=4,P=0,B={};y.forEach(W=>{v+W.w+4>A&&(v=4,R+=P+4,P=0),B[W.key]={x:v,y:R,w:W.w,h:W.h,c:W},v+=W.w+4,P=Math.max(P,W.h)});let T=2**Math.ceil(Math.log2(R+P+4)),U=document.createElement("canvas");U.width=A,U.height=T;let I=U.getContext("2d"),G=W=>{let Q=W.c;if(I.clearRect(W.x,W.y,W.w,W.h),Q.bg&&(I.fillStyle=Q.bg,I.fillRect(W.x,W.y,W.w,W.h)),Q.draw){I.save(),I.translate(W.x,W.y),Q.draw(I,W.w,W.h,Q),I.restore();return}I.fillStyle=Q.color||"#ece6da",I.textAlign=Q.align||"center",I.textBaseline="middle";let be=Q.align==="left"?W.x+6:W.x+W.w/2;I.font=`${Q.weight||600} ${Q.size||Math.round(W.h*.62)}px ${Q.font||"ui-monospace, Menlo, Consolas, monospace"}`,Q.sub?(I.fillText(Q.text,be,W.y+W.h*.38),I.font=`500 ${Math.round((Q.size||W.h*.62)*.5)}px ui-monospace, Menlo, Consolas, monospace`,I.globalAlpha=.75,I.fillText(Q.sub,be,W.y+W.h*.78),I.globalAlpha=1):I.fillText(Q.text,be,W.y+W.h/2+1)};Object.values(B).forEach(G);let j=new Wn(U);j.colorSpace=yn,j.anisotropy=8;let q=new ln({map:j,emissiveMap:j,emissive:16777215,emissiveIntensity:_.emissive??.35,roughness:.6,transparent:!0,alphaTest:.02,depthWrite:!1});return q.userData.th=[.4],{plane:(W,Q,be,Ve=0,Ne=0,rt=0,Et={})=>{let he=B[W],Se=Q*(he.h/he.w),Oe=new an(Q,Se),Re=Oe.attributes.uv;for(let ee=0;ee<Re.count;ee++)Re.setXY(ee,(he.x+Re.getX(ee)*he.w)/A,1-(he.y+(1-Re.getY(ee))*he.h)/T);let Ye=l(new Fe(Oe,q),Ve,Ne,rt,be,{cast:!1,receive:!1,...Et});return Ye.renderOrder=3,Ye},set:(W,Q,be,Ve)=>{let Ne=B[W];Q!==void 0&&(Ne.c.text=Q),be!==void 0&&(Ne.c.sub=be),Ve&&Object.assign(Ne.c,Ve),G(Ne),j.needsUpdate=!0},mat:q,tex:j}},particles:(y,_={})=>{let w=e>=1?y:Math.ceil(y*.45),A=new tn,v=new Float32Array(w*3);A.setAttribute("position",new Jt(v,3));let R=new Hi({size:_.size??.05,map:n,color:new xt(_.color??16777215).multiplyScalar(_.gain??1.6),transparent:!0,depthWrite:!1,blending:_.normal?_a:zn,toneMapped:!1,sizeAttenuation:!0,opacity:_.opacity??1}),P=new Ki(A,R);return P.frustumCulled=!1,P.userData.noAO=!0,P.userData.keep=!0,P.raycast=()=>{},P.userData.n=w,P.userData.pos=v,P},sprite:(y,_,w,A,v,R,P=.8)=>{let B=new Ji(new Bi({map:t,color:y,transparent:!0,depthWrite:!1,blending:zn,opacity:P}));return B.position.set(w,A,v),B.scale.set(_,_,1),B.userData.noAO=!0,B.userData.keep=!0,B.raycast=()=>{},R&&R.add(B),B},bake:y=>{let _=new Map,w=[];y.updateWorldMatrix(!0,!0);let A=new zt().copy(y.matrixWorld).invert(),v=new zt,R=P=>{for(let B=P;B&&B!==y;B=B.parent)if(B.userData.keep)return!0;return!1};return y.traverse(P=>{if(!P.isMesh||P.isInstancedMesh||R(P)||Array.isArray(P.material)||P.children.length)return;let B=P.material.uuid+"|"+ +P.castShadow+ +P.receiveShadow+"|"+P.renderOrder,T=_.get(B);T||_.set(B,T={mat:P.material,cast:P.castShadow,recv:P.receiveShadow,ro:P.renderOrder,geos:[]});let U=P.geometry.index?P.geometry.toNonIndexed():P.geometry.clone();Object.keys(U.attributes).forEach(I=>{I!=="position"&&I!=="normal"&&I!=="uv"&&U.deleteAttribute(I)}),U.attributes.uv||U.setAttribute("uv",new Jt(new Float32Array(U.attributes.position.count*2),2)),U.applyMatrix4(v.multiplyMatrices(A,P.matrixWorld)),T.geos.push(U),w.push(P)}),_.forEach(P=>{let B=Ss(P.geos);if(!B)return;let T=new Fe(B,P.mat);T.castShadow=P.cast,T.receiveShadow=P.recv,T.renderOrder=P.ro,T.userData.keep=!0,y.add(T),P.geos.forEach(U=>U.dispose())}),w.forEach(P=>{P.parent&&P.parent.remove(P),P.geometry.dispose()}),y},place:l}}var zr=new F(2.8,-1.25,-3.945),Xf=.0266,Wo=i=>.3-i*Xf,Vf=[[15,1],[15,1],[20,1],[15,1],[15,1],[20,1],[15,1],[15,1],[40,2,"range","RANGE"],[30,2,"dryer","DRYER"],[40,2,"hp","HEAT PUMP"],[30,2,"base","BASEBOARD"],[15,1],[15,1]],Wf=[[15,1,null,null,"AFCI"],[15,1,null,null,"AFCI"],[20,1,null,null,"GFCI"],[20,1],[15,1],[15,1],[20,1],[15,1],[30,2,"wh","WATER HTR"],[30,2,"ac","A/C"],[50,2,"ev","EV CHARGER"],[60,2,"spa","HOT TUB"],[40,2,"suite","SUITE"]];function Nm({kit:i}){let{box:e,cyl:t,tube:n,mats:s,atlas:r}=i,a=new mt,o=2.8,c=-4.3;t(.034,3.7,s.galv,o,3.6,c,a),t(.06,.16,s.galv,o,5.5,c-.02,a,{r2:.03}),e(.1,.05,.16,s.galv,o,5.44,c-.05,a,{rot:[.5,0,0]}),[2.2,3.4,4.6].forEach(p=>e(.12,.03,.2,s.galv,o,p,c+.1,a,{cast:!1})),e(.3,.44,.12,s.enclosure,o,1.45,c+.02,a,{r:.012}),t(.092,.03,s.galv,o,1.5,c-.05,a,{axis:"z",seg:28}),t(.085,.085,s.glassClear,o,1.5,c-.1,a,{axis:"z",seg:28,cast:!1}),t(.074,.006,s.whitePlastic,o,1.5,c-.075,a,{axis:"z",seg:28,cast:!1});let l=r([{key:"kwh",text:"08431",sub:"kWh \xB7 CL200 \xB7 240 V",w:192,h:96,size:46,color:"#0e1014"}],{width:256,emissive:.15}),h=l.plane("kwh",.1,a,o,1.5,c-.0795);h.rotation.y=Math.PI;let d=t(.05,.002,s.aluminum,o,1.452,c-.09,a,{seg:24,cast:!1,keep:!0});return t(.03,1.02,s.conduit,o,.72,c,a),e(.075,.13,.075,s.conduit,o,.17,c,a,{r:.012}),t(.03,.34,s.conduit,o,.15,c+.17,a,{axis:"z"}),n([[o+.11,1.24,c+.03],[o+.13,.6,c+.06],[o+.14,.05,c-.12],[o+.14,-.25,c-.16]],.006,s.copper,a,{radial:6}),t(.011,.5,s.copper,o+.14,-.05,c-.16,a,{seg:8}),i.bake(a),a.add(d),{group:a,disc:d,labels:l}}function Um({kit:i}){let{box:e,cyl:t,tube:n,mats:s,flow:r,atlas:a,V:o}=i,c=new mt;c.position.copy(zr);let l=new mt;c.add(l);let h=[];[15,20,30,40,50,60].forEach(ee=>h.push({key:"a"+ee,text:String(ee),w:96,h:56,size:40,color:"#f4f1ea"})),h.push({key:"a200",text:"200",w:144,h:72,size:56,color:"#f4f1ea"}),[...Vf,...Wf].filter(ee=>ee[3]).forEach(ee=>h.push({key:"n"+ee[2],text:ee[3],w:224,h:44,size:26,color:"#f4bd7e"})),h.push({key:"AFCI",text:"AFCI",w:112,h:44,size:26,color:"#9fc4ff"},{key:"GFCI",text:"GFCI",w:112,h:44,size:26,color:"#ffe08a"}),h.push({key:"rating",text:"200 A \xB7 120/240 V \xB7 1\xD8 3W",w:420,h:44,size:24,color:"#cfd4da"}),h.push({key:"mon",w:320,h:200,text:"49 A",sub:"of a 100 A service",ratio:.49,draw(ee,Je,oe,xe){ee.fillStyle="#05070b",ee.fillRect(0,0,Je,oe);let ie=xe.ratio>.9?"#ff6b4f":xe.ratio>.7?"#f4bd7e":"#8fd3a6";ee.textAlign="left",ee.textBaseline="middle",ee.fillStyle="#8b93a1",ee.font="600 17px ui-monospace, Menlo, monospace",ee.fillText("DEMAND",20,30),ee.fillStyle=ie,ee.font="700 74px ui-monospace, Menlo, monospace",ee.fillText(xe.text,18,92),ee.fillStyle="#cfd4da",ee.font="500 19px ui-monospace, Menlo, monospace",ee.fillText(xe.sub,20,146),ee.fillStyle="#1c222c",ee.fillRect(20,168,Je-40,14),ee.fillStyle=ie,ee.fillRect(20,168,(Je-40)*Math.min(1,xe.ratio),14)}}),h.push({key:"dir",w:300,h:420,draw(ee,Je,oe){ee.fillStyle="#e9e4d6",ee.fillRect(0,0,Je,oe),ee.fillStyle="#1a1c20",ee.font="700 20px ui-monospace, Menlo, monospace",ee.textAlign="left",ee.textBaseline="middle",ee.fillText("CIRCUIT DIRECTORY",14,24),ee.strokeStyle="rgba(20,22,26,.45)",ee.lineWidth=1,ee.font="500 13px ui-monospace, Menlo, monospace",["KITCHEN PLUGS","BEDROOM 1 \xB7 AFCI","BEDROOM 2 \xB7 AFCI","BATH \xB7 GFCI","LIVING","FURNACE","RANGE 40A","DRYER 30A","WATER HTR 30A","A/C 30A","EV CHARGER 50A","HOT TUB 60A","HEAT PUMP 40A","SUITE 40A"].forEach((ie,de)=>{let Me=54+de*25;ee.beginPath(),ee.moveTo(12,Me+12),ee.lineTo(Je-12,Me+12),ee.stroke(),ee.fillText(String(de+1).padStart(2,"0")+"  "+ie,14,Me)})}});let d=a(h,{width:1024,emissive:.22});e(2,1.9,.03,s.plywood,.2,.1,-.015,l,{uv:{ox:1,oy:1}}),e(2.3,2.4,.1,s.concrete,.2,.05,-.085,l,{cast:!1,uv:!0});let p=.4,u=1,f=.1,x=.004;e(p,u,x,s.enclosureDark,0,0,x/2,l),e(x,u,f,s.enclosure,-p/2,0,f/2,l),e(x,u,f,s.enclosure,p/2,0,f/2,l),e(p,x,f,s.enclosure,0,u/2,f/2,l),e(p,x,f,s.enclosure,0,-u/2,f/2,l),t(.03,.92,s.conduit,0,u/2+.46,.045,l),t(.04,.03,s.enclosure,0,u/2+.012,.045,l),e(.19,.125,.026,s.blackPlastic,.42,.3,.013,l,{r:.006});let g=d.plane("mon",.168,c,.42,.3,.0268,{keep:!0});n([[.325,.3,.012],[.27,.31,.014],[.215,.33,.03]],.004,s.rubber,l,{radial:6}),e(.11,.075,.058,s.blackPlastic,0,.39,.035,l,{r:.004});let m=e(.034,.024,.022,i.std(1908773,.4,.1,{emissive:16039294,emissiveIntensity:0}),0,.39,.072,c,{r:.003,keep:!0});d.plane("a200",.05,l,0,.365,.0646),[-.03,.03].forEach(ee=>e(.022,.022,.03,s.brass,ee,.447,.03,l)),[[-.03,s.rubber],[.03,i.std(9183002,.6)],[.085,s.whitePlastic]].forEach(([ee,Je],oe)=>n([[oe===2?.02:ee*.4,.5,.045],[ee*.8,.485,.04],[ee,.46,.032]],.0075,Je,l,{radial:8,seg:10}));let M=s.copperHot.clone(),b=[-.012,.012].map(ee=>e(.016,.74,.005,M,ee,-.02,.012,c,{keep:!0,cast:!1}));[-.03,.03].forEach((ee,Je)=>e(.016,.06,.005,M,ee*.7,.36,.012,l,{cast:!1}));let y={},_=s.greyPlastic,w=s.rubber,A=i.std(9183002,.6),v=s.whitePlastic,R=(ee,Je)=>{let oe=0;ee.forEach(([xe,ie,de,Me,$e])=>{let qe=ie===2?(Wo(oe)+Wo(oe+1))/2:Wo(oe),ut=ie===2?Xf*2-.002:Xf-.002,lt=Je*.076;e(.088,ut,.055,s.blackPlastic,lt,qe,.0325,l,{r:.0025,cast:!1});let J=Je*.047,It=_;de&&(It=i.std(4869975,.5,.05,{emissive:16753981,emissiveIntensity:0}),y[de]={handle:It,level:null,pos:o(lt,qe,.06),amps:xe}),e(.015,ie===2?ut*.72:.0125,.013,It,J,qe,.0655,de?c:l,{r:.002,cast:!1,keep:!!de}),d.plane("a"+xe,.02,l,Je*.07,qe+(ie===2?.009:0),.0603),Me&&d.plane("n"+de,.05,l,Je*.087,qe-.011,.0603),$e&&(d.plane($e,.026,l,Je*.099,qe,.0603),e(.007,.007,.004,$e==="AFCI"?s.bluePlastic:s.yellowPlastic,Je*.118,qe,.062,l,{cast:!1}));for(let At=0;At<ie;At++){let H=oe+At,S=Wo(H);e(.03,.007,.004,s.copper,Je*.024+(H%2?.012:-.012)*.3,S,.016,l,{cast:!1});let fe=Je*(.146+H%4*.0045),le=.026+H%3*.008;n([[Je*.121,S,.034],[Je*.134,S+.002,le+.004],[fe,S+.02,le],[fe,.3+H%5*.01,le],[Je*(.1+H%6*.012),.492,.03+H%2*.04]],.0023,ie===2&&At===1?A:w,l,{radial:5,seg:14,cast:!1})}oe+=ie})};R(Vf,-1),R(Wf,1),[-1,1].forEach(ee=>{e(.012,.52,.008,s.aluminum,ee*.176,-.02,.012,l,{cast:!1});for(let Je=0;Je<22;Je++)t(.0034,.004,s.galv,ee*.176,.22-Je*.0225,.018,l,{axis:"z",seg:6,cast:!1});for(let Je=0;Je<9;Je++){let oe=.2-Je*.05;n([[ee*.176,oe,.02],[ee*.164,oe+.03,.05+Je%3*.008],[ee*.162,.33,.055+Je%3*.008],[ee*(.06+Je*.012),.492,.07]],.0023,v,l,{radial:5,seg:12,cast:!1})}}),e(.36,.01,.004,s.aluminum,0,-.3,.008,l,{cast:!1}),e(.18,.012,.008,s.brass,-.05,-.43,.012,l,{cast:!1}),n([[-.1,-.43,.02],[-.13,-.47,.04],[-.13,-.56,.04],[-.2,-.75,.012],[-.7,-.82,.008]],.004,s.copper,l,{radial:6});let P=new mt;P.userData.keep=!0,c.add(P);let B=.0585,T=s.enclosure;e(.07,.98,.003,T,-.159,0,B,P),e(.07,.98,.003,T,.159,0,B,P),e(.056,.66,.003,T,0,-.02,B,P),e(.248,.062,.003,T,0,.459,B,P),e(.064,.094,.003,T,-.092,.381,B,P),e(.064,.094,.003,T,.092,.381,B,P),e(.248,.018,.003,T,0,.323,B,P),e(.248,.292,.003,T,0,-.344,B,P);let U=d.plane("rating",.2,P,0,.462,B+.002),I=new mt;I.userData.keep=!0,I.position.set(-p/2,0,f+.002),c.add(I),e(p,u,.003,s.enclosure,p/2,0,0,I);let G=d.plane("dir",.24,I,p/2,.02,-.003);G.rotation.y=Math.PI,e(.012,.06,.012,s.galv,p-.02,0,.006,I),I.rotation.y=-2.05;let j={15:s.whitePlastic,20:s.yellowPlastic,30:s.orangePlastic,40:s.rubber,50:s.rubber,60:s.rubber},q={15:r(16763274,{base:12170667,intensity:.7,dash:2.2,speed:.9,rest:0,gain:1,roughness:.6}),20:r(16758863,{base:13215008,intensity:.7,dash:2.2,speed:.9,rest:0,gain:1,roughness:.6})},Y=.955,V=0,W=(ee,Je,oe)=>{let xe=V++,ie=-.17+xe%13*.028,de=.028+xe%2*.042,Me=ee>=40?.0085:ee===30?.0065:.0052,$e=[[ie,.5,de],[ie,.66+xe%3*.03,de],[ie*1.4,Y-.06,de+.05],[ie*1.6,Y,de+.16+xe%4*.03]],qe=.3+xe%7*.035,ut=oe==="south"?[[-.6,Y,qe],[-2.2,Y,qe],[-5.4,Y,qe+.2]]:oe==="north"?[[.6,Y,qe],[1.6,Y,qe],[2.1,Y,qe+1.2],[2.1,Y,5.5]]:oe==="east"?[[ie*1.2,Y,.9],[ie,Y,3.2],[ie+.6,Y,7.4]]:oe==="up"?[[-.42,Y+.1,.3],[-.42,Y+.9,.34]]:[[.5,Y,.2],[.62,Y+.02,.02],[.62,Y+.02,-.4]],lt=j[ee];Je&&y[Je]?(lt=r(16753981,{base:1513757,intensity:2.6,dash:1.6,speed:1.1,rest:0,gain:1,level:0}),y[Je].level=lt.userData.level):q[ee]&&(lt=q[ee]),n([...$e,...ut],Me,lt,l,{radial:7,density:9,tension:.35,cast:xe%3===0})},Q=["south","north","south","east","north","south","north","south"];Vf.filter(ee=>!ee[2]).forEach((ee,Je)=>W(ee[0],null,Q[Je%Q.length])),Wf.filter(ee=>!ee[2]).forEach((ee,Je)=>W(ee[0],null,Q[(Je+3)%Q.length])),W(40,"range","up"),W(30,"dryer","south"),W(40,"hp","south"),W(30,"base","north"),W(30,"wh","south"),W(30,"ac","out"),W(50,"ev","east"),W(60,"spa","out"),W(40,"suite","north"),e(2.4,.02,.09,s.studs,-.4,Y+.012,.5,l,{uv:!0,cast:!1});let be=o(.72,-.2,0);e(.06,.098,.062,s.bluePlastic,be.x,be.y,.031,l,{r:.004});let Ve=new mt;Ve.position.set(be.x+.012,be.y-.004,.118),Ve.rotation.set(.12,-.5,.06),Ve.userData.keep=!0,c.add(Ve),e(.034,.104,.024,s.whitePlastic,0,0,0,Ve,{r:.004}),e(.04,.118,.0016,s.galv,0,0,.0128,Ve),[.028,-.028].forEach(ee=>{e(.004,.011,.002,s.rubber,-.006,ee,.0125,Ve,{cast:!1}),e(.004,.011,.002,s.rubber,.006,ee,.0125,Ve,{cast:!1})}),[.012,-.012].forEach(ee=>{t(.0035,.004,s.brass,.0185,ee,-.004,Ve,{axis:"x",seg:8}),t(.0035,.004,s.aluminum,-.0185,ee,-.004,Ve,{axis:"x",seg:8})}),n([[be.x-.01,.62,.012],[be.x-.012,.2,.014],[be.x-.008,be.y+.05,.02]],.0058,s.greyPlastic,l,{radial:7});let Ne=[];[[-1,s.aluminum],[1,s.aluminum]].forEach(([ee,Je])=>{let oe=o(be.x+ee*.03,be.y+.012*ee+.02,.085+(ee>0?.012:0));n([[be.x-.008+ee*.004,be.y+.045,.022],[be.x+ee*.02,be.y+.05,.05],[oe.x,oe.y+.016,oe.z]],.0019,Je,l,{radial:6,seg:12,cast:!1});let xe=t(.0078,.027,s.purple,oe.x,oe.y,oe.z,c,{seg:12,keep:!0});Ne.push(xe),t(.0086,.006,s.purple,oe.x,oe.y+.0135,oe.z,l,{seg:12}),n([[oe.x,oe.y+.014,oe.z],[oe.x+ee*.012,oe.y+.03,oe.z+.012],[be.x+.012+ee*.026,be.y+.006*ee,.1],[be.x+.012+ee*.02,be.y-.004+.012*ee,.112]],.0017,s.copper,l,{radial:6,seg:14,cast:!1})}),i.bake(l);let rt={meter:o(2.8,1.5,-4.42),main:zr.clone().add(o(0,.39,.075)),bus:zr.clone().add(o(0,-.06,.02)),branch:zr.clone().add(o(-.076,Wo(3),.06)),range:zr.clone().add(y.range.pos),ev:zr.clone().add(y.ev.pos),spa:zr.clone().add(y.spa.pos),alu:zr.clone().add(o(be.x+.03,be.y+.03,.09)),afci:zr.clone().add(o(.099,Wo(.5),.06)),load:zr.clone().add(o(.33,.35,.03))},Et={fx:2.8,fz:-3.9,time:19.4,cut:0,ghost:0,ground:1,orbit:.012},he=[{...Et,radius:15,theta:3.42,phi:1.4,ty:2.8,fz:-4.2,dof:0,orbit:.03,time:15.5},{...Et,radius:3.4,theta:3.5,phi:1.72,ty:1.95,fz:-4.35,dof:.8,time:15.5},{...Et,radius:1.5,theta:.3,phi:1.44,ty:-1,dof:1.2},{...Et,radius:1.45,theta:-.28,phi:1.47,ty:-1.24,dof:1.3},{...Et,radius:1.75,theta:.34,phi:1.74,ty:-.98,fz:-3.8,dof:1.1},{...Et,radius:1.15,theta:1,phi:1.5,ty:-1.3,fx:3.45,dof:1},{...Et,radius:1.85,theta:.2,phi:1.6,ty:-.98,fx:3,fz:-3.8,dof:1}],Se=new Set(["range","dryer","ac"]),Oe="",Re=0,Ye=["range","ev","spa"];return{name:"panel",group:c,anchors:rt,shots:he,hides:ee=>ee.sys.electrical?ee.sys.electrical.meshes:[],input(ee){if(ee&&(ee.on&&(Se=new Set(ee.on)),ee.amps!==void 0&&ee.service)){let Je=`${Math.round(ee.amps)} A`,oe=`of a ${ee.service} A service`;Je+oe!==Oe&&(Oe=Je+oe,d.set("mon",Je,oe,{ratio:ee.amps/ee.service}))}},light(ee){return ee===0?{pos:[2.2,3.4,-7.4],at:[2.8,1.6,-4.3],power:0}:ee===1?{pos:[2.2,3.4,-7.4],at:[2.8,1.6,-4.3],power:.55,fill:.3}:ee===5?{pos:[2.9,-.45,-2.2],at:[3.52,-1.45,-3.9],power:.8}:{pos:[1.5,-.5,-1.7],at:[2.8,-1.2,-3.9],power:1}},update({step:ee,k:Je,t:oe,dt:xe,snap:ie}){let de=ie?1:1-Math.exp(-xe*5);Re=ct(Re,ee===3||ee===4?1:0,de);let Me=Rt(0,1,Re);P.position.set(.52*Me,-.99*Me,.2*Math.sin(Math.PI*Me)+.075*Me),P.rotation.set(-.13*Me,0,-.05*Me),M.emissiveIntensity=.08+.26*Me+(ee===3?.12*Math.sin(oe*2.2):0),m.material.emissiveIntensity=ee===2?.4+.2*Math.sin(oe*3):.06;let $e=ee===3?1:ee===6?.35:.12;Object.values(q).forEach(qe=>{qe.userData.level.value=ct(qe.userData.level.value,$e,de)}),Object.entries(y).forEach(([qe,ut])=>{let lt=ee===4?Ye.includes(qe)?1:0:ee===6&&Se.has(qe)?1:0;ut.level&&(ut.level.value=ct(ut.level.value,lt,de)),ut.handle.emissiveIntensity=ct(ut.handle.emissiveIntensity,lt*2.4,de)}),Ne.forEach((qe,ut)=>{qe.scale.setScalar(ee===5?1+.08*Math.sin(oe*4+ut):1)}),U.visible=Me<.9}}}var xc=Math.atan2(3.6,5),qf=Math.cos(xc),Fm=Math.sin(xc),h_=3.6/5,Gu=9.9324,Ta=i=>Gu-Math.abs(i)*h_,Fs=(i,e,t=0,n=new F)=>n.set(i*qf+e*Fm,Gu-i*Fm+e*qf,t),jt=.2,f_=6.805,gc=Array.from({length:13},(i,e)=>-3.6+e*.6),Kn={z0:-2.4,z1:-.6,y0:4.35,y1:5.75},Xo={x:5.466,y:5.723},gi={x:.75,z:.95,rx:.52,rz:.44},Dn={x:2.55,z:-.9},Ya=4.78,Yf=6.8;function yr(i,e,t,n={}){let s=document.createElement("canvas");s.width=i,s.height=e,t(s.getContext("2d"),i,e);let r=new Wn(s);return n.color!==!1&&(r.colorSpace=yn),r.wrapS=r.wrapT=n.clamp?ws:Zn,r.anisotropy=8,n.repeat&&r.repeat.set(n.repeat[0],n.repeat[1]),r}function Om({kit:i,H:e,tier:t}){let{box:n,cyl:s,tube:r,mats:a,std:o,atlas:c,V:l}=i,h=new mt;h.name="attic";let d=new mt;h.add(d);let p=t===0,u=Nn(17),f=new F,x=new F,g=(E,O)=>{let Z=new mt;return Z.position.set(0,Gu,0),Z.rotation.set(0,O?Math.PI:0,-xc),E.add(Z),Z},m=g(d),M=g(d,!0),b=new ln({roughness:.86,map:yr(512,256,(E,O,Z)=>{E.fillStyle="#b48d58",E.fillRect(0,0,O,Z);let $=Nn(21);for(let me=0;me<1500;me++){let Ie=$()*O,ve=$()*Z,X=12+$()*36,Ze=3+$()*8,Ke=$();E.fillStyle=Ke<.4?`rgba(118,80,38,${.22+$()*.3})`:Ke<.85?`rgba(218,182,124,${.22+$()*.3})`:`rgba(78,52,24,${.35+$()*.3})`,E.save(),E.translate(Ie,ve),E.rotate(($()-.5)*1.2+($()>.5?0:Math.PI/2)),E.fillRect(-X/2,-Ze/2,X,Ze),E.restore()}E.fillStyle="rgba(48,30,14,.85)",E.fillRect(0,0,O,2),E.fillRect(0,0,2,Z)},{repeat:[1/2.4,1/1.2]})});b.userData.th=[.4];let y=o(16777215,.78,0,{map:yr(256,256,(E,O,Z)=>{E.fillStyle="#cdae78",E.fillRect(0,0,O,Z);let $=Nn(33);for(let me=0;me<70;me++){let Ie=$()*Z,ve=.06+$()*.12;E.strokeStyle=$()>.4?`rgba(122,84,40,${ve})`:`rgba(246,226,182,${ve})`,E.lineWidth=.6+$()*2.4,E.beginPath(),E.moveTo(0,Ie);for(let X=0;X<=O;X+=16)E.lineTo(X,Ie+Math.sin(X*.024+me)*2.5);E.stroke()}for(let me=0;me<2;me++){let Ie=$()*O,ve=$()*Z,X=E.createRadialGradient(Ie,ve,0,Ie,ve,9);X.addColorStop(0,"rgba(96,58,24,.7)"),X.addColorStop(1,"rgba(96,58,24,0)"),E.fillStyle=X,E.fillRect(Ie-12,ve-6,24,12)}},{repeat:[1/1.6,1/.4]})}),_=yr(256,256,(E,O,Z)=>{E.fillStyle="#808080",E.fillRect(0,0,O,Z);let $=Nn(5);for(let me=0;me<700;me++){let Ie=$()*O,ve=$()*Z,X=2+$()*10,Ze=$()<.5?255:0;for(let Ke of[-O,0,O])for(let ht of[-Z,0,Z]){if(Ie+Ke<-X||Ie+Ke>O+X||ve+ht<-X||ve+ht>Z+X)continue;let ft=E.createRadialGradient(Ie+Ke,ve+ht,0,Ie+Ke,ve+ht,X);ft.addColorStop(0,`rgba(${Ze},${Ze},${Ze},0.22)`),ft.addColorStop(1,`rgba(${Ze},${Ze},${Ze},0)`),E.fillStyle=ft,E.fillRect(Ie+Ke-X,ve+ht-X,X*2,X*2)}}},{color:!1,repeat:[2.5,2.5]}),w=o(13483416,1,0,{bumpMap:_,bumpScale:3}),A=yr(512,512,(E,O,Z)=>{E.fillStyle="#000",E.fillRect(0,0,O,Z);let $=Nn(8);E.strokeStyle="#fff",E.lineCap="round";for(let me=0;me<900;me++){let Ie=$()*O,ve=$()*Z,X=$()*6.28,Ze=6+$()*24;E.globalAlpha=.3+$()*.6,E.lineWidth=.8+$()*1.4;let Ke=Ie+Math.cos(X)*Ze,ht=ve+Math.sin(X)*Ze;E.beginPath(),E.moveTo(Ie,ve),E.lineTo(Ke,ht);for(let ft=1;ft<5;ft++){let pt=ft/5,Ct=Ie+(Ke-Ie)*pt,yt=ve+(ht-ve)*pt,nt=Ze*.32*(1-pt)+2;E.moveTo(Ct,yt),E.lineTo(Ct+Math.cos(X+.7)*nt,yt+Math.sin(X+.7)*nt),E.moveTo(Ct,yt),E.lineTo(Ct+Math.cos(X-.7)*nt,yt+Math.sin(X-.7)*nt)}E.stroke()}E.globalAlpha=.28,E.fillStyle="#fff",E.fillRect(0,0,O,Z)},{color:!1,repeat:[4,4]}),v=o(15660543,.45,0,{alphaMap:A,transparent:!0,depthWrite:!1,emissive:11455487,emissiveIntensity:.12,side:oi}),R=o(15923199,.35,0,{emissive:12572415,emissiveIntensity:.22}),P=o(13226970,.62,.02),B=o(16777215,.55,.3,{map:yr(128,128,(E,O,Z)=>{E.fillStyle="#d7d5cf",E.fillRect(0,0,O,Z),E.fillStyle="#3a3c40";for(let $=0;$<4;$++)for(let me=0;me<6;me++)E.fillRect(8+me*20+$%2*10,12+$*32,6,14);E.fillStyle="rgba(0,0,0,.18)",E.fillRect(0,0,O,3)},{repeat:[1/.16,1/.16]})}),T=o(14209734,.55,.12,{envMapIntensity:.4,map:yr(16,64,(E,O,Z)=>{let $=E.createLinearGradient(0,0,O,0);$.addColorStop(0,"#5e6268"),$.addColorStop(.35,"#b9bec4"),$.addColorStop(.7,"#9a9fa6"),$.addColorStop(1,"#5e6268"),E.fillStyle=$,E.fillRect(0,0,O,Z)},{repeat:[34,1]}),envMapIntensity:1.1}),U=o(11581636,.95,0,{bumpMap:_,bumpScale:1.2}),I=new ji({color:11849691,roughness:.08,metalness:0,transparent:!0,opacity:.72,clearcoat:1,clearcoatRoughness:.04,envMapIntensity:.75,bumpMap:_,bumpScale:.6});I.userData.th=[.1];let G=o(14673902,.38,0,{emissive:9413300,emissiveIntensity:.05}),j=new ji({roughness:.14,metalness:.25,clearcoat:1,clearcoatRoughness:.05,envMapIntensity:1.4,map:yr(512,384,(E,O,Z)=>{E.fillStyle="#b9bfc8",E.fillRect(0,0,O,Z);let $=10,me=6,Ie=5,ve=(O-2*Ie)/$,X=(Z-2*Ie)/me;for(let Ze=0;Ze<$;Ze++)for(let Ke=0;Ke<me;Ke++){let ht=Ie+Ze*ve+1.5,ft=Ie+Ke*X+1.5,pt=ve-3,Ct=X-3,yt=6;E.fillStyle="#0c1830",E.beginPath(),E.moveTo(ht+yt,ft),E.lineTo(ht+pt-yt,ft),E.lineTo(ht+pt,ft+yt),E.lineTo(ht+pt,ft+Ct-yt),E.lineTo(ht+pt-yt,ft+Ct),E.lineTo(ht+yt,ft+Ct),E.lineTo(ht,ft+Ct-yt),E.lineTo(ht,ft+yt),E.closePath(),E.fill(),E.fillStyle="rgba(150,165,190,.18)";for(let nt=1;nt<12;nt++)E.fillRect(ht,ft+Ct*nt/12,pt,.6);E.fillStyle="rgba(196,204,216,.75)";for(let nt=1;nt<=3;nt++)E.fillRect(ht+pt*nt/4-.7,ft,1.4,Ct)}},{clamp:!0})});j.userData.th=[.17];let q=new ln({color:11187390,roughness:.9,transparent:!0,depthWrite:!1,map:yr(256,256,(E,O,Z)=>{let $=E.createLinearGradient(0,0,0,Z);$.addColorStop(0,"rgba(214,224,232,0.2)"),$.addColorStop(.45,"rgba(214,224,232,0.42)"),$.addColorStop(1,"rgba(224,232,240,0.74)"),E.fillStyle=$,E.fillRect(0,0,O,Z);let me=Nn(4);E.globalCompositeOperation="destination-out";for(let Ie=0;Ie<26;Ie++){let ve=me()*O,X=me()*Z*.6,Ze=30+me()*140;E.lineWidth=1+me()*2.2,E.strokeStyle="rgba(0,0,0,.75)",E.beginPath(),E.moveTo(ve,X),E.bezierCurveTo(ve+(me()-.5)*8,X+Ze*.4,ve+(me()-.5)*8,X+Ze*.7,ve+(me()-.5)*6,X+Ze),E.stroke()}E.globalCompositeOperation="source-over";for(let Ie=0;Ie<260;Ie++){let ve=me()*O,X=Z*Math.sqrt(me()),Ze=.8+me()*2.4;E.fillStyle=`rgba(250,252,255,${.4+me()*.5})`,E.beginPath(),E.arc(ve,X,Ze,0,6.3),E.fill()}E.fillStyle="rgba(240,246,252,.8)",[[0,Z],[O,Z]].forEach(([Ie,ve])=>{let X=E.createRadialGradient(Ie,ve,0,Ie,ve,70);X.addColorStop(0,"rgba(244,248,252,.9)"),X.addColorStop(1,"rgba(244,248,252,0)"),E.fillStyle=X,E.fillRect(Ie-70,ve-70,140,140)})},{clamp:!0})});q.userData.th=[.5];let Y=.3,V=-3.3,W=5.88,Q=3.6,be=new ln({roughness:.9,transparent:!0,depthWrite:!1,map:yr(512,324,(E,O,Z)=>{let $=X=>(Y-X)/(Y-V)*O,me=X=>(W-X)/(W-Q)*Z,Ie=Nn(9),ve=(X,Ze,Ke,ht,ft)=>{let pt=E.createLinearGradient(0,Ze,0,Ze+Ke);pt.addColorStop(0,`rgba(186,178,160,${ft*.32})`),pt.addColorStop(1,"rgba(206,196,176,0)"),E.fillStyle=pt,E.beginPath(),E.moveTo(X-ht/2,Ze);for(let Ct=0;Ct<=8;Ct++)E.lineTo(X-ht/2+Math.sin(Ct*1.7+X)*1.5-ht*.2*Ct/8,Ze+Ke*Ct/8);for(let Ct=8;Ct>=0;Ct--)E.lineTo(X+ht/2+Math.sin(Ct*1.3+X)*1.5+ht*.15*Ct/8,Ze+Ke*Ct/8);E.closePath(),E.fill()};for(let X=0;X<22;X++)ve($(.1-Ie()*3.2),0,30+Ie()*120,4+Ie()*16,.25+Ie()*.35);[Kn.z0-.06,Kn.z1+.06].forEach(X=>{ve($(X),me(5.86),90,18,.5),ve($(X)+(Ie()-.5)*6,me(4.3),150,14,.55)});for(let X=0;X<14;X++)ve($(Kn.z0+.05+Ie()*1.7),me(4.3)+Ie()*6,30+Ie()*120,2+Ie()*7,.2+Ie()*.35);E.clearRect($(Kn.z1),me(Kn.y1),$(Kn.z0)-$(Kn.z1),me(Kn.y0)-me(Kn.y1))},{clamp:!0})});be.userData.th=[.3];let Ve=o(16777215,.92,0,{map:yr(128,256,(E,O,Z)=>{E.fillStyle="#4b3a29",E.fillRect(0,0,O,Z);let $=Nn(12);for(let me=0;me<40;me++){let Ie=$()*O;E.strokeStyle=$()>.5?`rgba(20,14,8,${.3+$()*.4})`:`rgba(120,98,70,${.2+$()*.3})`,E.lineWidth=.6+$()*1.8,E.beginPath(),E.moveTo(Ie,0);for(let ve=0;ve<=Z;ve+=16)E.lineTo(Ie+Math.sin(ve*.05+me)*2,ve);E.stroke()}for(let me=0;me<26;me++){let Ie=$()*O,ve=$()*Z,X=3+$()*10,Ze=8+$()*30,Ke=E.createRadialGradient(Ie,ve,0,Ie,ve,Ze);Ke.addColorStop(0,`rgba(14,10,6,${.55+$()*.35})`),Ke.addColorStop(1,"rgba(14,10,6,0)"),E.fillStyle=Ke,E.beginPath(),E.ellipse(Ie,ve,X,Ze,0,0,6.3),E.fill()}for(let me=0;me<7;me++)E.fillStyle=`rgba(206,200,188,${.45+$()*.3})`,E.fillRect($()*O,$()*Z,2+$()*6,4+$()*14)},{repeat:[1/.3,1/.3]})}),Ne=a.galv,rt=o(13289149,.5,.12,{envMapIntensity:.35}),Et=new ji({color:2046544,roughness:.04,metalness:0,transparent:!0,opacity:.86,clearcoat:1,envMapIntensity:1.1});Et.userData.th=[.3];let he=i.flow(5220095,{base:924714,intensity:.35,dash:5,speed:.2,rest:.3,gain:1,roughness:.08}),Se=c([{key:"ruler",w:72,h:664,draw(E,O,Z){E.fillStyle="#e6d9b0",E.fillRect(0,0,O,Z);let $=me=>Z-me/600*Z;E.fillStyle="rgba(143,211,166,.9)",E.fillRect(0,$(445),O,$(400)-$(445)),E.fillStyle="#1a1c20",E.textAlign="right",E.textBaseline="middle";for(let me=0;me<=600;me+=10){let Ie=$(me),ve=me%100===0?22:me%50===0?15:8;E.fillRect(0,Ie-.8,ve,1.6)}E.font="700 18px ui-monospace, Menlo, monospace";for(let me=100;me<600;me+=100)me!==400&&E.fillText(String(me),O-3,$(me)+10);E.font="800 17px ui-monospace, Menlo, monospace",E.fillText("400",O-3,$(400)-12),E.fillText("R-50",O-3,$(400)-32),E.font="700 14px ui-monospace, Menlo, monospace",E.fillText("mm",O-3,$(565))}},{key:"bag",w:200,h:112,bg:"#f1efe8",draw(E,O,Z){E.fillStyle="#f1efe8",E.fillRect(0,0,O,Z),E.strokeStyle="#1a1c20",E.lineWidth=3,E.strokeRect(5,5,O-10,Z-10),E.fillStyle="#1a1c20",E.textAlign="left",E.textBaseline="middle",E.font="700 30px ui-monospace, Menlo, monospace",E.fillText("SAMPLE A-1",16,36),E.font="500 17px ui-monospace, Menlo, monospace",E.fillText("ATTIC \xB7 LOOSE FILL",16,70),E.fillText("SEALED \xB7 FOR LAB",16,92)}},{key:"caution",w:300,h:150,draw(E,O,Z){E.fillStyle="#e9c22e",E.fillRect(0,0,O,Z),E.fillStyle="#16171a",E.fillRect(0,0,O,12),E.fillRect(0,Z-12,O,12),E.textAlign="center",E.textBaseline="middle",E.font="800 44px ui-monospace, Menlo, monospace",E.fillText("CAUTION",O/2,46),E.font="700 20px ui-monospace, Menlo, monospace",E.fillText("POSSIBLE ASBESTOS",O/2,88),E.fillText("DO NOT DISTURB",O/2,116)}},{key:"pv",w:300,h:92,draw(E,O,Z){E.fillStyle="#b8281c",E.fillRect(0,0,O,Z),E.fillStyle="#f4f1ea",E.textAlign="center",E.textBaseline="middle",E.font="800 34px ui-monospace, Menlo, monospace",E.fillText("PV SYSTEM",O/2,32),E.font="600 17px ui-monospace, Menlo, monospace",E.fillText("DC CONDUCTORS \xB7 600 V",O/2,66)}}],{width:1024,emissive:.2});[m,M].forEach(E=>n(6.27,.012,7.55,b,3.165,-.008,0,E,{uv:!0,cast:!1})),n(.05,.012,7.55,a.blackPlastic,0,Gu-.03,0,d,{cast:!1});let Oe=new Ei;Oe.moveTo(-4.95,6.4),Oe.lineTo(4.95,6.4),Oe.lineTo(0,Ta(0)-.02),Oe.lineTo(-4.95,6.4);let Re=new Ks;Re.moveTo(-.5,7.5),Re.lineTo(.5,7.5),Re.lineTo(.5,8.5),Re.lineTo(-.5,8.5),Re.lineTo(-.5,7.5),Oe.holes.push(Re);let Ye=new pa(Oe);[[-3.775,0],[3.775,Math.PI]].forEach(([E,O])=>{let Z=new Fe(Ye,b);Z.position.set(0,0,E),Z.rotation.y=O,Z.receiveShadow=!0,d.add(Z),[-4.2,-3.4,-2.6,-1.8,-1.05,1.05,1.8,2.6,3.4,4.2].forEach($=>{let me=Ta($)-.06;n(.038,me-6.4,.089,y,$,(me+6.4)/2,E+Math.sign(-E)*.046,d,{uv:!0,cast:!1})}),[7.45,8.55].forEach($=>n(1.12,.038,.089,y,0,$,E+Math.sign(-E)*.046,d,{uv:!0,cast:!1}))});let ee=(E,O,Z,$,me,Ie=d)=>n(Math.hypot(Z-E,$-O),.089,.038,y,(E+Z)/2,(O+$)/2,me,Ie,{uv:!0,rot:[0,0,Math.atan2($-O,Z-E)]}),Je=(.014+.089)/qf;gc.forEach(E=>{n(6.76,.089,.038,y,3.38,-.0585,E,m,{uv:!0}),n(6.2,.089,.038,y,3.1,-.0585,E,M,{uv:!0}),n(9.9,.089,.038,y,0,6.4+.0445,E,d,{uv:!0,cast:!1}),[-1,1].forEach(O=>{ee(O*1.667,6.48,O*2.5,Ta(2.5)-Je+.02,E),ee(O*1.667,6.48,O*.08,Ta(0)-Je-.04,E),[[O*2.5,Ta(2.5)-Je+.01]].forEach(([Z,$])=>[-1,1].forEach(me=>n(.16,.12,.002,rt,Z,$,E+me*.02,d,{cast:!1})))}),[-1,1].forEach(O=>n(.2,.14,.002,rt,0,Ta(0)-Je-.01,E+O*.02,d,{cast:!1}))}),[-1,1].forEach(E=>n(.038,.089,7.5,y,E*2.06,7.32,0,d,{uv:!0,cast:!1}));for(let E=0;E<gc.length-1;E++){let O=gc[E]+.3;n(1.12,.004,.54,P,5.66,-.066,O,m,{cast:!1}),[-1,1].forEach(Z=>n(1.12,.052,.004,P,5.66,-.04,O+Z*.27,m,{cast:!1})),[-.13,0,.13].forEach(Z=>n(1.12,.01,.03,P,5.66,-.07,O+Z,m,{cast:!1}));for(let Z=0;Z<3;Z++)[-1,1].forEach($=>n(.012,.002,.01,a.galv,5.25+Z*.4,-.016,O+$*.272,m,{cast:!1}))}n(.33,.008,8.9,B,5.27,5.876,0,d,{uv:!0,cast:!1}),[-4.455,4.455].forEach(E=>n(.33,.36,.02,a.whitePlastic,5.27,6.05,E,d,{cast:!1}));let oe=(...E)=>{let O=[];for(let Z=0;Z<E.length-1;Z++){let[$,me]=E[Z],Ie=E[Z+1][0];for(let ve=$;ve<Ie-1e-6;ve+=me)O.push(ve)}return O.push(E[E.length-1][0]),O},xe=p?oe([-4.95,.4],[-.1,.08],[1.7,.2],[4,.1],[4.95]):oe([-4.95,.25],[-.1,.04],[1.65,.12],[4,.06],[4.95]),ie=p?oe([-3.75,.25],[.2,.08],[1.7,.3],[3.75]):oe([-3.75,.15],[.25,.04],[1.7,.2],[3.75]),de=(E,O)=>.013*Math.sin(E*7.1+Math.sin(O*3.3)*1.7)+.01*Math.sin(O*8.3+E*2.1)+.006*Math.sin(E*23+O*19)+.004*Math.sin(E*41-O*37),Me=(E,O)=>{let Z=Math.min(Yf+de(E,O),Ta(E)-.095),$=(E-gi.x)/gi.rx,me=(O-gi.z)/gi.rz,Ie=Math.atan2(me,$),ve=Math.sqrt($*$+me*me)+.05*Math.sin(Ie*5)+.03*Math.sin(Ie*13+1)+.02*Math.sin(Ie*29+E*40);return ve<1.4&&(Z=ct(6.43,Z+.05*Math.max(0,1-Math.abs(ve-1.06)/.3)+.02*Math.sin(E*37+O*29),Rt(.7,1,ve))),Math.max(Z,6.405)};{let E=xe.length,O=ie.length,Z=new Float32Array(E*O*3),$=new Float32Array(E*O*2),me=[];for(let X=0;X<O;X++)for(let Ze=0;Ze<E;Ze++){let Ke=X*E+Ze;Z.set([xe[Ze],Me(xe[Ze],ie[X]),ie[X]],Ke*3),$.set([xe[Ze],ie[X]],Ke*2)}for(let X=0;X<O-1;X++)for(let Ze=0;Ze<E-1;Ze++){let Ke=X*E+Ze,ht=Ke+1,ft=Ke+E,pt=ft+1;me.push(Ke,ft,ht,ht,ft,pt)}let Ie=new tn;Ie.setAttribute("position",new Jt(Z,3)),Ie.setAttribute("uv",new Jt($,2)),Ie.setIndex(me),Ie.computeVertexNormals();let ve=new Fe(Ie,w);ve.receiveShadow=!0,ve.castShadow=!1,d.add(ve)}let $e=l(3.62,6.7,-1.32),qe=new mt;qe.position.copy($e),qe.rotation.y=-2.2,d.add(qe),n(.07,.6,.004,a.whitePlastic,0,0,-.003,qe,{cast:!1}),Se.plane("ruler",.065,qe,0,0,0),s(.002,.62,a.galv,0,.05,-.008,qe,{seg:5,cast:!1}),n(.26,.17,.26,rt,Dn.x,6.485,Dn.z,d),s(.06,.12,rt,Dn.x,6.62,Dn.z,d,{seg:16});let ut=r([[Dn.x,6.6,Dn.z],[Dn.x+.04,6.92,Dn.z+.03],[Dn.x+.3,7,Dn.z+.2],[Dn.x+.62,6.93,Dn.z+.38],[Dn.x+.85,6.87,Dn.z+.45]],.07,T,h,{radial:14,density:30,keep:!0}),lt=l(Dn.x+.92,6.88,Dn.z+.48),J=Fs(Ya,-.1,Dn.z),It=r([[Dn.x,6.6,Dn.z],[Dn.x+.06,6.9,Dn.z],[Dn.x+.55,6.99,Dn.z+.02],[J.x-.22,6.92,Dn.z],[J.x,J.y,Dn.z]],.07,T,h,{radial:14,density:30,keep:!0});s(.075,.13,rt,Ya,-.06,Dn.z,m,{seg:18}),[[Dn.x,6.66,Dn.z]].forEach(([E,O,Z])=>s(.077,.02,rt,E,O,Z,d,{seg:18,cast:!1})),n(.46,.006,.44,Ne,Ya-.02,jt+.003,Dn.z,m),s(.08,.1,Ne,Ya,jt+.05,Dn.z,m,{seg:18}),n(.3,.13,.28,Ne,Ya-.01,jt+.15,Dn.z,m,{r:.02}),n(.05,.08,.26,a.blackPlastic,Ya+.135,jt+.1,Dn.z,m,{cast:!1}),s(.5,.058,o(8021318,.95,.1),gi.x,6.431,gi.z,d,{seg:32,cast:!1}).scale.set(gi.rx/.5*1.05,1,gi.rz/.5*1.05);{let E=p?450:1e3,O=new Dl(1,0),Z=new Mi(O,o(16777215,.7,.35,{envMapIntensity:1.2}),E),$=new zt,me=new Bn,Ie=new Ni,ve=new F,X=new F,Ze=new xt,Ke=[10517060,12096600,8216632,10262154,12756592,9075294];for(let ht=0;ht<E;ht++){let ft=u()*6.283,pt=Math.sqrt(u())*1.02;ve.set(gi.x+Math.cos(ft)*pt*gi.rx,6.462+u()*.008,gi.z+Math.sin(ft)*pt*gi.rz);let Ct=.006+u()*.008;X.set(Ct*(1+u()*.8),Ct*.5,Ct*(1+u()*.8)),me.setFromEuler(Ie.set(u()*.6,u()*6.28,u()*.6)),$.compose(ve,me,X),Z.setMatrixAt(ht,$),Z.setColorAt(ht,Ze.setHex(Ke[u()*Ke.length|0]))}Z.castShadow=!1,Z.receiveShadow=!0,h.add(Z)}let H=l(gi.x-.59,0,gi.z+.47);H.y=Me(H.x,H.z)+.016;let S=new mt;S.position.copy(H),S.rotation.set(.05,.5,-.04),d.add(S),n(.14,.022,.18,a.vermiculite,0,0,.01,S,{r:.01,cast:!1}),n(.16,.03,.22,a.poly,0,.002,0,S,{r:.012,cast:!1}),n(.16,.006,.012,a.bluePlastic,0,.012,-.095,S,{cast:!1});let fe=Se.plane("bag",.12,S,0,.018,.03);fe.rotation.x=-Math.PI/2;let le=l(gi.x+.08,0,gi.z+.6);le.y=Me(le.x,le.z)+.2;let ye=new mt;ye.position.copy(le),ye.rotation.set(0,-2.3,.05),d.add(ye),n(.174,.09,.002,a.whitePlastic,0,.02,-.0015,ye,{cast:!1}),Se.plane("caution",.17,ye,0,.02,0),s(.0022,.42,a.galv,0,-.14,-.004,ye,{seg:5,cast:!1});let it=[];for(let E=2.4;E<6;E+=p?.45:.3)for(let O=-3.5;O<1.4;O+=p?.24:.16){let Z=O+(u()-.5)*.05;gc.some($=>Math.abs($-Z)<.035)||it.push([E+(u()-.5)*.04,Z,.024+u()*.012])}let st=it.length,Le=new Mi(new pn(.0016,.0016,1,5),a.galv,st),Ce=new Mi(new Nr(1,0),R,st),Qe=new zt,vt=new Bn().setFromEuler(new Ni(0,0,-xc)),N=new F,ae=[];it.forEach(([E,O,Z],$)=>{Fs(E,-.014-Z/2,O,f),Qe.compose(f,vt,N.set(1,Z,1)),Le.setMatrixAt($,Qe),ae.push(Fs(E,-.014-Z-.004,O))}),Le.castShadow=!1,Ce.castShadow=!1,h.add(Le,Ce);let ue=it.map(()=>.8+u()*.6),we=-1,ze=E=>{if(!(Math.abs(E-we)<.004)){we=E;for(let O=0;O<st;O++){let Z=ue[O]*(.15+.85*E),$=.0055*Z;Fs(it[O][0],-.014-it[O][2]*(.4+.25*E),it[O][1],f),Qe.compose(f,vt,N.set($,it[O][2]*.32*(.3+.7*E)+$,$)),Ce.setMatrixAt(O,Qe)}Ce.instanceMatrix.needsUpdate=!0}},z=new Fe(new an(4,5),v);z.rotation.x=Math.PI/2,z.position.set(4,-.0165,-1.1),z.renderOrder=2,z.userData.keep=!0;let Ae=g(h);Ae.add(z),Ae.userData.keep=!0;let pe=[2.455,3.905],Be=[-1.6,-.55,.5,1.55],Ue=jt+.135,re=Ue+.036;pe.forEach(E=>Be.forEach(O=>{n(1.3,.03,.95,a.enclosureDark,E,Ue+.015,O,m,{cast:!1}),n(1.29,.004,.94,j,E,re-.004,O,m,{cast:!1}),[-1,1].forEach(Z=>{n(1.32,.036,.016,a.aluminum,E,Ue+.018,O+Z*.477,m,{cast:!1}),n(.016,.036,.97,a.aluminum,E+Z*.652,Ue+.018,O,m,{cast:!1})})}));let te=Be[0]-.49,_e=Be[3]+.49;pe.forEach(E=>[-.36,.36].forEach(O=>{let Z=E+O;n(.04,.045,_e-te+.14,a.aluminum,Z,Ue-.0225,(te+_e)/2,m,{cast:!1});for(let $=te+.1;$<_e;$+=.52)n(.05,.05,.04,a.aluminum,Z,jt+.025,$,m,{r:.006,cast:!1}),n(.012,.045,.04,a.aluminum,Z+.02,jt+.07,$,m,{cast:!1}),s(.007,.012,a.galv,Z+.03,jt+.025,$,m,{axis:"x",seg:6,cast:!1});[te-.012,_e+.012].forEach($=>n(.045,.04,.02,a.aluminum,Z,Ue+.02,$,m,{cast:!1}));for(let $=0;$<3;$++){let me=(Be[$]+Be[$+1])/2;n(.04,.008,.045,a.aluminum,Z,re+.003,me,m,{cast:!1}),s(.006,.006,a.galv,Z,re+.009,me,m,{seg:6,cast:!1})}}));let Ge={s:4.74,z:te+.25};n(.2,.09,.16,a.greyPlastic,Ge.s,jt+.06,Ge.z,m,{r:.008}),n(.24,.015,.2,a.aluminum,Ge.s,jt+.01,Ge.z,m,{cast:!1});let dt=Se.plane("pv",.13,m,Ge.s,jt+.1065,Ge.z);dt.rotation.x=-Math.PI/2,dt.rotation.z=Math.PI/2,[[.03,-.004],[-.03,.004]].forEach(([E,O])=>r([[pe[1]+.2,Ue-.01,Be[0]+E*3],[pe[1]+.5,Ue-.025+O,Be[0]-.3+E],[Ge.s-.15,jt+.07,Ge.z+.25+E],[Ge.s-.04,jt+.07,Ge.z+.06+E]],.004,a.rubber,m,{radial:5,cast:!1})),r([[Ge.s+.1,jt+.05,Ge.z],[Ge.s+.2,jt+.05,Ge.z],[Ge.s+.26,jt+.04,Ge.z]],.012,a.conduit,m,{radial:8,cast:!1}),s(.06,.07,a.blackPlastic,Ge.s+.3,jt+.03,Ge.z,m,{r2:.025,seg:14,cast:!1});let Ut=new Fe(new an(Kn.z1-Kn.z0-.14,Kn.y1-Kn.y0-.14),q);Ut.position.set(5.037,(Kn.y0+Kn.y1)/2,(Kn.z0+Kn.z1)/2),Ut.rotation.y=Math.PI/2,Ut.renderOrder=2,Ut.userData.keep=!0,h.add(Ut);let Kt=new Fe(new an(Y-V,W-Q),be);Kt.position.set(5.1135,(W+Q)/2,(Y+V)/2),Kt.rotation.y=Math.PI/2,Kt.renderOrder=2,d.add(Kt),n(.272,.062,2.045,Ve,5.141,Kn.y0-.03,(Kn.z0+Kn.z1)/2,d,{uv:!0}),n(.05,.03,.22,Ve,5.25,Kn.y0-.068,Kn.z1+.05,d,{uv:!0,rot:[.3,.2,-.5],cast:!1});let sn=g(h);sn.userData.keep=!0;let kt=(E,O,Z,$,me)=>{let Ie=new Ei;Ie.moveTo(E[0][0],E[0][1]),E.slice(1).forEach(Ze=>Ie.lineTo(Ze[0],Ze[1]));let ve=new Rs(Ie,{depth:Z-O,steps:me?44:1,bevelEnabled:!1,curveSegments:1});if(me){let Ze=ve.attributes.position;for(let ft=0;ft<Ze.count;ft++){let pt=Ze.getX(ft),Ct=Ze.getY(ft),yt=Ze.getZ(ft);Ct>jt+.03&&Ze.setY(ft,Ct+me(pt,yt)*Rt(jt+.03,jt+.12,Ct)),pt>f_+.03&&Ze.setX(ft,pt+Math.abs(me(pt+3,yt*1.7))*1.6)}ve.deleteAttribute("normal"),ve.deleteAttribute("uv"),ve=Tm(ve,1e-4),ve.computeVertexNormals();let Ke=ve.attributes.position,ht=new Float32Array(Ke.count*2);for(let ft=0;ft<Ke.count;ft++)ht[ft*2]=Ke.getZ(ft)*.6,ht[ft*2+1]=Ke.getX(ft)*.6;ve.setAttribute("uv",new Jt(ht,2))}let X=new Fe(ve,$);return X.position.z=O,X.castShadow=!0,X.receiveShadow=!0,sn.add(X),X},Tn=jt+.016,Mn=(E,O)=>.025*Math.sin(O*2.3+E*3)+.015*Math.sin(O*5.7-E*2)+.008*Math.sin(O*13+E*11);kt([[4.62,Tn],[4.9,jt+.1],[5.3,jt+.17],[5.8,jt+.19],[5.98,jt+.17],[6.07,jt+.11],[6.12,jt+.05],[6.14,Tn]],-4.35,4.5,U,Mn),kt([[.06,Tn],[.2,jt+.09],[.6,jt+.12],[1.55,jt+.13],[1.72,jt+.08],[1.78,Tn]],-4.5,4.5,U,Mn),[[-4.5,te-.5],[_e+.5,4.5]].forEach(([E,O])=>kt([[1.5,Tn],[1.5,jt+.12],[3,jt+.14],[4.95,jt+.16],[4.95,Tn]],E,O,U,Mn)),kt([[6.06,jt+.002],[6.07,jt+.045],[6.4,jt+.05],[6.42,jt+.002]],-4.5,4.5,Et),kt([[6.3,jt],[6.36,jt+.07],[6.46,jt+.12],[6.68,jt+.14],[6.84,jt+.12],[6.92,jt+.03],[6.935,-.08],[6.9,-.17],[6.86,-.13],[6.84,.02],[6.81,.17],[6.79,jt]],-4.5,4.5,I,(E,O)=>.04*Math.sin(O*1.7+1)+.03*Math.sin(O*4.9+E*6)+.018*Math.sin(O*11.3+2+E*9)+.01*Math.sin(O*29+E*13));{let E=new an(1.42,.15),O=E.attributes.uv;for(let $=0;$<O.count;$++)O.setX($,4.68+O.getX($)*1.42);let Z=new Fe(E,he);Z.rotation.x=-Math.PI/2,Z.position.set(4.68+.71,jt+.004,-4.425),Z.receiveShadow=!0,sn.add(Z)}i.bake(sn);let C=new mt;C.position.set(Xo.x,Xo.y,0),C.userData.keep=!0,h.add(C),n(.135,.05,8.9,I,0,.12,0,C,{cast:!1});let Te=p?60:130,He=new Kr(.028,1,7,1,!0);He.rotateX(Math.PI),He.translate(0,-.5,0);let at=new Mi(He,I,Te),ot=[];for(let E=0;E<Te;E++){let O=-4.42+E/(Te-1)*8.84+(u()-.5)*.05,Z=Math.max(0,1-Math.abs(O+1.5)/2.2),$=.06+u()*u()*(.55+.5*Z),me=.7+u()*.9;f.set((u()-.5)*.08,.004,O),Qe.compose(f,vt.identity(),N.set(me,$,me)),at.setMatrixAt(E,Qe),ot.push([f.x,$,O])}vt.setFromEuler(new Ni(0,0,-xc)),at.castShadow=!1,C.add(at),i.bake(C);let Ht=p?110:220,Pt=new Nr(1,1);{let E=Pt.attributes.position,O=new Map;for(let Z=0;Z<E.count;Z++){let $=E.getX(Z).toFixed(3)+E.getY(Z).toFixed(3)+E.getZ(Z).toFixed(3);O.has($)||O.set($,.84+u()*.3);let me=O.get($);E.setXYZ(Z,E.getX(Z)*me,E.getY(Z)*me,E.getZ(Z)*me)}Pt.computeVertexNormals()}let St=new Mi(Pt,G,Ht);{let E=new Bn,O=new Ni,Z=(me,Ie)=>{E.setFromEuler(O.set(u()*6.3,u()*6.3,u()*6.3)),Qe.compose(f,E,N.set(Ie*(.9+u()*.25),Ie*(.8+u()*.2),Ie*(.9+u()*.25))),St.setMatrixAt(me,Qe)},$=()=>Math.pow(u(),.6);for(let me=0;me<Ht;me++){let Ie=.0075+u()*.01,ve=me/Ht;if(ve<.3){let X=-4.2+Math.floor(u()*9)*1+(u()-.5)*.8*$();f.set(Xo.x+(u()-.5)*.09,Xo.y+.1+Ie*.8+(u()<.3?Ie*1.4:0),X)}else if(ve<.62){let X=pe[u()<.5?0:1],Ze=Be[u()*4|0];Fs(X+.63-u()*.03-(u()<.35?Ie*2:0),re+Ie*.85,Ze+(u()-.5)*.9,f)}else if(ve<.82)Fs(6.55+u()*.22,jt+Ie*.8,-4.3+u()*8.6,f);else{let X=.5+u()*5.8,Ze=-4.2+u()*8.4,Ke=X>pe[0]-.65&&X<pe[1]+.65&&Ze>te&&Ze<_e;Fs(X,(Ke?re:jt)+Ie*.8,Ze,f)}Z(me,Ie)}}St.castShadow=!0,St.receiveShadow=!0,h.add(St);let bt=.4,Wt=6.75,Yt=4.4,Pn=o(16777215,.5,0,{alphaTest:.35,map:yr(1024,1024,(E,O,Z)=>{let $=Nn(41),me=X=>(X-bt)/(Wt-bt)*O,Ie=X=>(X+Yt)/(2*Yt)*Z,ve=(X,Ze)=>{let Ke=X>pe[0]-.68&&X<pe[1]+.68&&Ze>te&&Ze<_e,ht=pe.some(ft=>X>ft+.65&&X<ft+.95)&&Ze>te&&Ze<_e;return Ke?.06:ht?1:.3+.7*Rt(5.3,6.4,X)};for(let X=0;X<3e4;X++){let Ze=bt+$()*(Wt-bt),Ke=-Yt+$()*2*Yt;if($()>ve(Ze,Ke))continue;let ht=me(Ze),ft=Ie(Ke),pt=1.3+$()*$()*2.6;E.fillStyle="rgba(96,108,122,1)",E.beginPath(),E.arc(ht+pt*.35,ft+pt*.3,pt,0,6.3),E.fill(),E.fillStyle=$()>.3?"#dfe6ec":"#c4ced8",E.beginPath(),E.arc(ht,ft,pt*.92,0,6.3),E.fill()}},{clamp:!0})}),qn=new Fe(new an(Wt-bt,2*Yt),Pn);qn.rotation.x=-Math.PI/2,qn.position.set((bt+Wt)/2,jt+.004,0),qn.receiveShadow=!0;let di=g(h);di.userData.keep=!0,di.add(qn);let ti=i.particles(260,{size:.06,color:14674687,opacity:.5,gain:.55}),ni=i.particles(240,{size:.014,color:12574975,gain:1.1});h.add(ti,ni);let ii=ti.userData.n,D=ni.userData.n,ne=Float32Array.from({length:Math.max(ii,D)*4},()=>u()),De=Array.from({length:D},(E,O)=>O*7919%st),Ee=ot.map((E,O)=>[E[1],O]).sort((E,O)=>O[0]-E[0]).slice(0,40).map(E=>E[1]);i.bake(d);let Pe={roof:Fs(6.3,jt+.03,-1.2),ice:Fs(6.62,jt+.17,-2),rain:Fs(4.75,-.05,-.35),ins:l($e.x,Yf+.02,$e.z),fan:Fs(Ya,-.16,Dn.z),verm:l(gi.x,6.48,gi.z),solar:Fs(Ge.s,jt+.12,Ge.z),win:l(5.16,4.36,-1)},_t={cut:0,ghost:0,ground:1,season:0,snowfall:0,melt:0,icicles:0,orbit:.012,time:19.4},Dt=[{..._t,radius:10,theta:2.3,phi:.62,fx:3.75,ty:7.55,fz:-.6,dof:0,orbit:.02,time:13,season:.5,snowfall:0,narrow:{radius:8.5}},{..._t,radius:3.6,theta:2.15,phi:1.02,fx:5.4,ty:6.15,fz:-2,dof:.8,time:19.4,snowfall:1,narrow:{radius:3.1}},{..._t,radius:2.3,theta:3.95,phi:1.55,fx:3.45,ty:7,fz:-.3,dof:1,narrow:{radius:1.7,fx:3.75,ty:7.1,fz:-.3}},{..._t,radius:1.75,theta:4.25,phi:1.33,fx:3.75,ty:6.92,fz:-1.15,dof:1,narrow:{radius:1.35,fx:3.8,ty:7,fz:-1.05}},{..._t,radius:2.6,theta:3.95,phi:.88,fx:gi.x-.2,ty:6.55,fz:gi.z+.25,dof:1,narrow:{radius:2.2,fx:gi.x+.05,fz:gi.z+.25}},{..._t,radius:2.7,theta:2.1,phi:1.1,fx:3.85,ty:7.5,fz:-1.5,dof:.9,narrow:{radius:2.4}},{..._t,radius:4.1,theta:1.92,phi:1.54,fx:5.15,ty:4.95,fz:-1.3,dof:.9,snowfall:1,narrow:{radius:3.5}}],K=0,se=1,ge=ti.userData.pos,Xe=ni.userData.pos;return{name:"attic",group:h,anchors:Pe,shots:Dt,hides:E=>{let O=E||e,Z=[];return O.sys.asbestos&&Z.push(...O.sys.asbestos.meshes),O.sys.solar&&O.sys.solar.meshes[0]&&Z.push(O.sys.solar.meshes[0].parent),O.extra&&O.extra.snowR&&Z.push(O.extra.snowR),Z},light(E){return E===0?{pos:[8.6,15.5,-4.2],at:[3.9,7.4,-.8],power:1.35,fill:0}:E===1?{pos:[7.9,9,-4],at:[5.45,6.1,-2],power:.6,fill:.3}:E===2?{pos:[1.4,8.4,-2.4],at:[3.9,7.2,-.6],power:.9,fill:.6}:E===3?{pos:[1.4,8.5,-2.4],at:[4.1,6.85,-.7],power:.9,fill:.6}:E===4?{pos:[.6,8.6,-.6],at:[gi.x,6.45,gi.z],power:.9,fill:.5}:E===5?{pos:[6.6,10.2,-3.6],at:[3.8,7.55,-1.4],power:.8,fill:.35}:{pos:[7.6,6.6,-3.6],at:[5.1,5,-1.4],power:.9,fill:.2}},update({step:E,q:O,t:Z,dt:$,snap:me,reduce:Ie}){let ve=me?1:1-Math.exp(-$*2.6);K=ct(K,E>=1?1:0,ve);let X=Rt(0,1,K);sn.visible=C.visible=X>.01,sn.scale.y=Math.max(.001,X),C.scale.y=Math.max(.001,X),St.visible=di.visible=E===0,Ut.visible=E>=1;let Ze=E===2?1-Rt(.4,.8,O):E<2?1:0;se=ct(se,Ze,me?1:1-Math.exp(-$*6)),v.opacity=.75*se,Ae.visible=Ce.visible=se>.01,ze(se),ut.visible=E<=2,It.visible=E>=3;let Ke=Ie?3.3:Z,ht=0,ft=0;if(E===2){let pt=Rt(.35,.65,O),Ct=Math.round(ii*.7);for(let nt=0;nt<Ct;nt++){let wt=(Ke*(.16+ne[nt]*.08)+ne[nt+ii])%1,Ot=wt*wt;ge[ht*3]=lt.x+.06+wt*.9+Math.sin(Ke*.7+nt)*.05*wt,ge[ht*3+1]=Math.min(lt.y+.03+wt*.9,Ta(lt.x+.06+wt*.9)-.08)+.02*Math.sin(nt),ge[ht*3+2]=lt.z+(ne[nt+2*ii]-.5)*Ot*2.2,ht++}let yt=Math.round(D*pt);for(let nt=0;nt<yt;nt++){let wt=ae[De[nt]],Ot=.9+ne[nt]*1.1,Rn=(Ke+ne[nt+D]*Ot)%Ot/Ot,On=Math.max(0,Rn-.6)/.4,kn=9.8*(On*Ot*.4)**2*.5;Xe[ft*3]=wt.x,Xe[ft*3+1]=Math.max(wt.y-.004-kn,Yf-.01),Xe[ft*3+2]=wt.z,ft++}}else if(E===3)for(let pt=0;pt<ii;pt++){let Ct=ne[pt]*12|0,yt=gc[Ct]+.3+(ne[pt+ii]-.5)*.4,nt=(Ke*(.07+ne[pt+2*ii]*.04)+ne[pt+3*ii])%1,wt=6.5-nt*6.45,Ot=wt>5.1?-.04:-.04-.06*Math.sin(ne[pt]*9+nt*6)-.04;Fs(wt,wt>6.15?-.04-(wt-6.15)*.6:Ot,yt,x),ge[ht*3]=x.x,ge[ht*3+1]=x.y,ge[ht*3+2]=x.z,ht++}if(E===1||E===6){for(let pt=0;pt<Ee.length&&ft<D;pt++){let Ct=ot[Ee[pt]],yt=1.2+ne[pt]*1.6,nt=(Ke+ne[pt+D]*yt)%yt/yt,wt=Math.max(0,nt-.55)/.45,Ot=4.9*(wt*yt*.45)**2;Xe[ft*3]=Xo.x+Ct[0],Xe[ft*3+1]=Xo.y-Ct[1]*X-.01-Ot,Xe[ft*3+2]=Ct[2],ft++}if(E===6)for(let pt=0;pt<16&&ft<D;pt++){let Ct=pt<6?Kn.z0+.04+ne[pt]*.1:pt<12?Kn.z1-.04-ne[pt]*.1:Kn.z0+.3+ne[pt]*1.2,yt=.8+ne[pt+5]*1.2,nt=(Ke+ne[pt+D]*yt)%yt/yt,wt=Math.max(0,nt-.5)/.5;Xe[ft*3]=5.165,Xe[ft*3+1]=Math.max(Kn.y1+.02-4.9*(wt*yt*.5)**2,Kn.y0+.002),Xe[ft*3+2]=Ct,ft++}}ti.material.size=E===2?.14:.07,ti.material.opacity=E===2?.5:.85,ni.material.size=E===2?.014:.03,ti.geometry.setDrawRange(0,ht),ni.geometry.setDrawRange(0,ft),ti.visible=ht>0,ni.visible=ft>0,ht&&(ti.geometry.attributes.position.needsUpdate=!0),ft&&(ni.geometry.attributes.position.needsUpdate=!0)}}}var gn=.6,wa=.42,Fi=wa+.004,Wi=.86,Os=-4.25,$f=-3.4,sa=13.62,Kf=Math.atan2(.26,sa),Bm=Math.cos(Kf),Hm=Math.sin(Kf),sr=-18.2,rr=-3.95,ar=.19,ku=.15,Yo=.75,Yu=.12,Vu=18,bn=.075,Wu=.092,qa=.116,zm=.096,d_=11;var Gm=2,ta=[4.62,6.87],na=[6.95,9.05],or=-14.05,lr=-18.95,ia=-4.3,bs=1.3,Xi=1.6,hi=.7,_r=-2.9,Za=i=>Yu+i*Yo,Oi=(i,e=0,t=0,n=new F)=>n.set(gn+e,$f+t*Bm-i*Hm,Os-t*Hm-i*Bm),Xu=new xt;function Bs(i,e){Xu.set(e);let t=i.attributes.position.count,n=new Float32Array(t*3);for(let s=0;s<t;s++)n[s*3]=Xu.r,n[s*3+1]=Xu.g,n[s*3+2]=Xu.b;return i.setAttribute("color",new Jt(n,3)),i}function Jf(i,e,t,n=14){let s=[];i.forEach((o,c)=>{let l=i[(c+1)%i.length];if(Math.abs(o[0]-l[0])+Math.abs(o[1]-l[1])<1e-6)return;let h=new Il([new tt(o[1],o[0]),new tt(l[1],l[0])],n,0,Math.PI).toNonIndexed();h.rotateX(-Math.PI/2),s.push(Bs(h,e[c]))});let r=new pa(new Ei(i.map(([o,c])=>new tt(-o,c)))).toNonIndexed();r.rotateY(-Math.PI/2);let a=r.clone();return a.scale(1,-1,1),s.push(Bs(r,t),Bs(a,t)),Ss(s)}var Zf=(i,e,t,n,s,r,a)=>Jf([[0,e],[0,t],[i,t],[i,e]],[r,n,r,s],r,a);function km({kit:i,M:e,Ug:t,tier:n,reduce:s}){let{box:r,cyl:a,tube:o,mats:c,atlas:l,V:h}=i,d=new mt;d.name="sewer";let p=new mt;d.add(p);let u=Nn(1958),f=(k,je,gt={})=>i.std(16777215,k,je,{vertexColors:!0,side:oi,...gt}),x=f(.74,0),g=f(.48,.8,{envMapIntensity:1.1}),m=x,M=(k,je,gt,Mt,Lt,L,ce,We,ke={})=>{let et=r(k,je,gt,ke.mat||x,Lt,L,ce,We,ke);return Bs(et.geometry,Mt),et},b=(k,je,gt,Mt,Lt,L,ce,We={})=>{let ke=a(k,je,We.mat||x,Mt,Lt,L,ce,We);return Bs(ke.geometry,gt),ke},y=(k,je,gt,Mt,Lt={})=>{let L=o(k,je,Lt.mat||x,Mt,Lt);return Bs(L.geometry,gt),L},_=(k,je,gt={})=>i.place(new Fe(k,gt.mat||x),gt.x||0,gt.y||0,gt.z||0,je,gt),w=(k,je,gt,Mt={})=>(Bs(k,je),i.place(new Fe(k,Mt.mat||x),Mt.x||0,Mt.y||0,Mt.z||0,gt,Mt)),A=i.flow(13214314,{base:2892310,intensity:1.1,dash:1.4,speed:.45,rest:.3,gain:1,roughness:.12}),v=(k,je={})=>i.flow(5220095,{base:k,intensity:1.6,dash:2.2,speed:.7,rest:.05,gain:1,roughness:.4,...je}),R=t&&t.group?t.group.children.find(k=>k.isMesh&&k.geometry.parameters&&k.geometry.parameters.height===9):null,P=R?R.material:c.soil,B=(k,je,gt,Mt,Lt,L)=>{let ce=new an(Math.abs(je-k),Mt-gt);ce.rotateY(-Math.PI/2),ce.translate(Lt,(gt+Mt)/2,(k+je)/2);let We=ce.attributes.position,ke=ce.attributes.uv;for(let et=0;et<We.count;et++)ke.setXY(et,(We.getZ(et)+120)/240,(We.getY(et)+9.02)/9);return i.place(new Fe(ce,P),0,0,0,L,{cast:!1})},T=document.createElement("canvas");T.width=T.height=256;{let k=T.getContext("2d");k.fillStyle="#3b3833",k.fillRect(0,0,256,256);for(let je=0;je<520;je++){let gt=u()*256,Mt=u()*256,Lt=3+u()*7,L=70+u()*90;k.fillStyle=`rgb(${L|0},${L*.96|0},${L*.9|0})`,k.beginPath(),k.ellipse(gt,Mt,Lt,Lt*(.6+u()*.4),u()*3,0,6.3),k.fill(),k.fillStyle="rgba(255,255,255,0.12)",k.beginPath(),k.ellipse(gt-Lt*.25,Mt-Lt*.25,Lt*.45,Lt*.3,0,0,6.3),k.fill()}}let U=new Wn(T);U.colorSpace=yn,U.wrapS=U.wrapT=Zn,U.repeat.set(2.6,2.6);let I=i.std(16777215,.95,0,{map:U}),G=new Hn({color:16039294,toneMapped:!1}),j=(k,je,gt,Mt)=>{let Lt=new Fe(new Sn(.05,.06,Math.abs(je-k)),G);return Lt.position.set(gt-.02,.02,(k+je)/2),Lt.userData.noAO=!0,Mt.add(Lt),Lt},q=(k,je,gt=[],Mt=p,Lt=Fi)=>{let L=new Ei(k.map(([We,ke])=>new tt(We,ke)));gt.forEach(We=>L.holes.push(We.length===3?new Ks().absarc(We[0],We[1],We[2],0,Math.PI*2,!1):new Ks(We.map(([ke,et])=>new tt(ke,et)))));let ce=new pa(L,8);return ce.rotateY(-Math.PI/2),ce.translate(Lt,0,0),typeof je=="object"?i.place(new Fe(ce,je),0,0,0,Mt,{cast:!1}):w(ce,je,Mt,{cast:!1})},Y=[{key:"mon",w:320,h:232,text:"0.0 m",sub:"CLAY 150 mm",flag:"",draw:V},{key:"pvc",text:"SEWER PVC \xB7 SDR 35 \xB7 150 mm \xB7 2025",w:600,h:34,size:22,color:"#eef3ec"},{key:"pb",text:"PB \xB7 19 mm \xB7 1987",w:300,h:34,size:22,color:"#22262b"},{key:"pl",text:"PROPERTY LINE",w:220,h:54,size:26,color:"#1a1206",bg:"#f08a2c"},{key:"permit",text:"CONNECTION PERMIT",sub:"INSPECTED \xB7 BACKFILL OK",w:260,h:74,size:22,color:"#15130c",bg:"#e9c22e"},{key:"shut",text:"MAIN SHUT-OFF",w:200,h:46,size:22,color:"#fff4ea",bg:"#b8321f"},{key:"pump",text:"SUMP \xB7 1/3 HP",w:180,h:40,size:22,color:"#d9dde2"}];function V(k,je,gt,Mt){k.fillStyle="#05070a",k.fillRect(0,0,je,gt);let Lt=je/2,L=gt/2+14,ce=k.createRadialGradient(Lt,L,4,Lt,L,112);ce.addColorStop(0,"#040201"),ce.addColorStop(.32,"#1d1008"),ce.addColorStop(.78,"#9a6038"),ce.addColorStop(1,"#4a2c18"),k.fillStyle=ce,k.beginPath(),k.arc(Lt,L,108,0,6.3),k.fill(),k.strokeStyle="rgba(14,8,4,.85)",k.lineWidth=6;let We=Mt.flag==="OFFSET JOINT"?9:0;if(k.beginPath(),k.arc(Lt,L+We,46,0,6.3),k.stroke(),k.fillStyle="rgba(150,112,62,.75)",k.beginPath(),k.ellipse(Lt,L+86,58,12,0,0,6.3),k.fill(),Mt.flag==="CRACK"&&(k.strokeStyle="#0a0503",k.lineWidth=3,k.beginPath(),k.moveTo(Lt-18,L-104),k.lineTo(Lt-8,L-80),k.lineTo(Lt-20,L-62),k.lineTo(Lt-9,L-44),k.stroke()),Mt.flag==="ROOTS"){k.strokeStyle="#d8c49a",k.lineWidth=2;for(let ke=0;ke<9;ke++)k.beginPath(),k.moveTo(Lt-40+ke*10,L-46),k.quadraticCurveTo(Lt-30+ke*7,L,Lt-20+ke*5,L+20),k.stroke()}k.textAlign="left",k.textBaseline="middle",k.fillStyle="#f4bd7e",k.font="700 28px ui-monospace, Menlo, monospace",k.fillText(Mt.text,14,24),k.fillStyle="#cfd4da",k.font="500 15px ui-monospace, Menlo, monospace",k.fillText(Mt.sub,14,50),k.fillStyle="#ff6b4f",k.beginPath(),k.arc(je-22,22,7,0,6.3),k.fill(),k.textAlign="right",k.fillStyle="#cfd4da",k.font="600 14px ui-monospace, Menlo, monospace",k.fillText("REC",je-36,23),Mt.flag&&(k.textAlign="left",k.fillStyle="#ff6b4f",k.font="700 20px ui-monospace, Menlo, monospace",k.fillText(Mt.flag,14,gt-18))}let W=l(Y,{width:1024,emissive:.26}),Q=new mt;Q.position.set(gn,$f,Os),Q.rotation.x=-Kf,p.add(Q);let be={out:9064756,inn:5977123,end:7620398,cut:12880480},Ve=Jf([[0,zm],[0,qa],[.09,qa],[.125,Wu],[Yo+.075,Wu],[Yo+.075,bn],[.1,bn],[.1,zm]],[be.end,be.out,be.out,be.out,be.end,be.inn,be.inn,4138008],be.cut,18),Ne=new Mi(Ve,x,Vu);Ne.castShadow=!0,Ne.receiveShadow=!0,Ne.frustumCulled=!1,Ne.userData.keep=!0,Q.add(Ne);let rt=k=>k===Gm?-.013:k===4?-.016:k===5?-.024:k===6?-.01:0,Et=[],he=new zt,Se=new zt().makeScale(0,0,0);for(let k=0;k<Vu;k++)Et.push(new zt().makeTranslation(0,rt(k),-Za(k))),Ne.setMatrixAt(k,Et[k]);let Oe="",Re=k=>{let je="";for(let gt=0;gt<Vu;gt++)je+=k(gt)?"0":"1";if(je!==Oe){Oe=je;for(let gt=0;gt<Vu;gt++)Ne.setMatrixAt(gt,je[gt]==="1"?Et[gt]:Se);Ne.instanceMatrix.needsUpdate=!0}};y([[.02,bn*.99,-1.02],[.034,bn*.97,-1.18],[.022,bn*.98,-1.32],[.04,bn*.96,-1.5]].map(([k,je,gt])=>{let Mt=bn*.985/Math.hypot(k,je);return[k*Mt,je*Mt,gt]}),.0028,1182214,Q,{radial:5,seg:16,cast:!1});let Ye=(k,je,gt,Mt,Lt,L=A,ce=0)=>{let We=new an(je-k,Mt);We.rotateX(-Math.PI/2),We.rotateY(Math.PI/2),We.translate(ce+Mt/2,gt,-(k+je)/2);let ke=We.attributes.position,et=We.attributes.uv;for(let Tt=0;Tt<ke.count;Tt++)et.setX(Tt,-ke.getZ(Tt));return i.place(new Fe(We,L),0,0,0,Lt,{cast:!1})},ee=k=>Math.sqrt(bn*bn-(bn-k)*(bn-k));Ye(0,sa,-bn+.016,ee(.016),Q),Ye(Za(4)-.05,Za(7)-.1,-bn+.014,ee(.03),Q).position.y=-.018;let Je=new mt,oe=.78,xe=-3.06,ie=Math.atan2(xe-$f-.02,oe-Os);Je.position.set(gn,xe,oe),Je.rotation.x=-ie,p.add(Je);let de={out:3026996,inn:5190692,cut:9277590},Me=oe-Os+.12;_(Zf(Me,bn,.086,de.out,de.inn,de.cut,16),Je),[0,1.5,3,4.5].forEach(k=>_(Jf([[k,.086],[k,.104],[k+.09,.104],[k+.12,.086]],[de.cut,de.out,de.out,de.out],de.cut,16),Je)),Ye(.05,Me,-bn+.014,ee(.014),Je),b(.056,.4,de.out,-.2,.012,-2.75,Je,{axis:"x",seg:16});{let k=xe-(oe-_r)*Math.tan(ie)+.06;_(Zf(-2.77-k,.052,.062,de.out,de.inn,de.cut,14).rotateX(Math.PI/2),p,{x:gn,y:k,z:_r})}b(.09,.012,9212827,gn,-2.795,oe+.04,p,{mat:g,seg:24}),y([[gn,-2.8,oe+.04],[gn,-3.08,oe+.06],[gn,-3.2,oe-.04],[gn,-3.1,oe-.14],[gn,-3.06,oe-.02]],.05,de.out,p,{radial:12,seg:24});let $e=e.form||e.concrete;q([[-4.5,-3.25],[-3.7,-3.25],[-3.7,-2.95],[-4,-2.95],[-4,.3],[-4.25,.3],[-4.25,-2.95],[-4.5,-2.95]],$e),q([[4.5,-3.25],[3.7,-3.25],[3.7,-2.95],[4,-2.95],[4,.3],[4.25,.3],[4.25,-2.95],[4.5,-2.95]],$e,[[4.125,-2.3,.028]]),[[-4,_r-.07],[_r+.07,oe-.07],[oe+.13,Xi-.25],[Xi+.25,4]].forEach(([k,je])=>q([[k,-2.96],[je,-2.96],[je,-2.8],[k,-2.8]],e.slab||7170659)),[-1,1].forEach(k=>M(Wi-Fi,3,.012,1447963,(Fi+Wi)/2,-1.55,k*4.258,p,{cast:!1})),B(Os,or,-9.02,0,Wi,p),B(lr,-60,-9.02,0,Wi,p),B(-Os,60,-9.02,0,Wi,p),B(Os,-Os,-9.02,-2.96,Wi,p),j(Os,or,Wi,p),j(lr,-60,Wi,p),j(-Os,60,Wi,p);let qe=new mt;qe.userData.keep=!0,d.add(qe),B(or,lr,-9.02,0,Wi,qe);let ut={out:8815226,inn:4999491,cut:11117980},lt=2.6;[[ar,ut.out],[ku,ut.inn]].forEach(([k,je])=>b(k,lt,je,Fi+lt/2,rr,sr,p,{axis:"x",seg:32,open:!0}));let J=new Ba(ku,ar,32);J.rotateY(-Math.PI/2),w(J,ut.cut,p,{x:Fi,y:rr,z:sr,cast:!1});let It=Math.sqrt(ku*ku-.085*.085);{let k=new an(lt,It*2);k.rotateX(-Math.PI/2),k.translate(Fi+lt/2,rr-.085,sr);let je=k.attributes.uv,gt=k.attributes.position;for(let Mt=0;Mt<gt.count;Mt++)je.setX(Mt,gt.getX(Mt));i.place(new Fe(k,A),0,0,0,p,{cast:!1})}let At=new mt;At.userData.keep=!0,d.add(At);let H=[Oi(sa-.25),Oi(sa),h(gn,rr+.25,sr+.2),h(gn,rr+ar*.72,sr+ar*.68)];y(H,Wu,be.out,At,{radial:16,seg:16}),w(new $n(.15,14,10),7828331,At,{x:gn,y:rr+ar*.72,z:sr+ar*.68}).scale.set(.8,.7,1);let S=6966835,fe=[13350026,11112036,14272416],le=Za(d_),ye=(k,je,gt,Mt,Lt,L={})=>{let ce=[k[0]];for(let on=1;on<k.length;on++){let vn=k[on-1],Xt=k[on],Gt=Math.hypot(Xt[0]-vn[0],Xt[1]-vn[1],Xt[2]-vn[2])*(L.wob??.12);for(let pi=1;pi<=3;pi++){let $t=pi/3;ce.push(pi===3?Xt:[ct(vn[0],Xt[0],$t)+(u()-.5)*Gt*.3,ct(vn[1],Xt[1],$t)+(u()-.5)*Gt,ct(vn[2],Xt[2],$t)+(u()-.5)*Gt])}}let We=y(ce,je,Mt,Lt,{radial:L.radial||6,density:L.density||26,tension:.4,cast:L.cast??je>.01}),ke=We.geometry,{tubularSegments:et,radialSegments:Tt}=ke.parameters,Vt=ke.attributes.position,Ft=new F;for(let on=0;on<=et;on++){We.userData.curve.getPointAt(on/et,Ft);let vn=ct(1,gt/je,Math.pow(on/et,.8));for(let Xt=0;Xt<=Tt;Xt++){let Gt=on*(Tt+1)+Xt;Vt.setXYZ(Gt,Ft.x+(Vt.getX(Gt)-Ft.x)*vn,Ft.y+(Vt.getY(Gt)-Ft.y)*vn,Ft.z+(Vt.getZ(Gt)-Ft.z)*vn)}}return We},it=(k,je=0,gt=qa+.006)=>Oi(le+je,gt*Math.sin(k),gt*Math.cos(k));[[.034,.008,[[.83,-.12,-12.4],[.8,-.6,-12],[.78,-1.3,-11.6],[.76,-2,-11.45],[.74,-2.7,-11.8]]],[.03,.007,[[.83,-.15,-12.48],[.8,-.7,-13],[.77,-1.4,-13.4],[.75,-2.2,-13.5],[.73,-2.9,-13.2]]],[.028,.006,[[.83,-.2,-12.44],[.79,-1,-12.5],[.76,-1.9,-12.66],[.73,-2.7,-12.7],it(.25,-.02,.15).toArray()]]].forEach(([k,je,gt])=>ye(gt,k,je,S,p));for(let k=0;k<8;k++){let je=.2+u()*1.4,gt=-11.9-u()*1.4,Mt=[.7+u()*.1,-2.6-u()*.5,gt],Lt=[Mt[0]-.02+u()*.04,ct(Mt[1],-3.3,.45),ct(gt,-12.62,.4)+(u()-.5)*.25],L=it(je+.5,-.12+u()*.08,.17);ye([Mt,Lt,L.toArray(),it(je,-.03,qa+.008).toArray(),it(je+.2,.004,.106).toArray()],.0055,.0016,S,p,{radial:5,density:40,cast:!1})}for(let k=0;k<18;k++){let je=u()*1.7,gt=-.06+u()*.16,Mt=.4+u()*.8;ye([it(je,gt,qa+.004).toArray(),it(je+Mt*.5,gt+.02,qa+.009).toArray(),it(je+Mt,gt-.01,qa+.004).toArray()],.0028,.0012,S,p,{radial:4,density:60,cast:!1})}let st=new mt;st.userData.keep=!0,st.position.set(0,0,-(le+.075)),Q.add(st);let Le=n===0?26:44;for(let k=0;k<Le;k++){let je=.05+u()*3.05,gt=.12+u()*u()*.6,Mt=k<5?.0045:.0016+u()*.0018,Lt=bn*.97*Math.sin(je),L=bn*.97*Math.cos(je),ce=0,We=-Lt*.25,ke=-.2-L*.2,et=[];for(let Tt=0;Tt<=9;Tt++){et.push([Lt,L,ce]),ce-=gt/9,We+=(u()-.5)*.7,ke+=(u()-.62)*.5,Lt+=We*gt*.06,L+=ke*gt*.06;let Vt=Math.hypot(Lt,L);Vt>bn*.94&&(Lt*=bn*.94/Vt,L*=bn*.94/Vt,We*=-.5,ke*=-.5)}ye(et,Mt,Mt*.35,fe[k%3],st,{radial:4,density:50,cast:!1,wob:0})}An(st);let Ce=le-.8,Qe=le+.9,vt=48,N=16,ae=new pn(bn-.0018,bn-.0018,Qe-Ce,N,vt,!0,0,Math.PI);ae.rotateX(-Math.PI/2);let ue=new Fe(Bs(ae,9207644),f(.9,0));ue.position.set(0,0,-(Ce+Qe)/2),ue.userData.keep=!0,ue.receiveShadow=!0,Q.add(ue);let we=new mt;we.userData.keep=!0,d.add(we);let ze=new mt;we.add(ze);let z=1.55,Ae=-2.5,pe=-2.42;[z-.09,z+.09].forEach(k=>{y([[k,-2.79,pe-.26],[k,Ae,pe],[k,-2.79,pe+.26]],.011,9212827,ze,{mat:g,radial:8,tension:0}),b(.013,.56,9212827,k,-2.79,pe,ze,{axis:"z",mat:g,seg:8})}),b(.014,.2,9212827,z,Ae,pe,ze,{axis:"x",mat:g,seg:10});let Be=1,Ue=-2.92,re=.32;M(.17,.075,.26,1776929,Be,-2.762,Ue,ze,{r:.012}),M(.07,.01,.12,3817029,Be-.03,-2.722,Ue+.04,ze,{cast:!1});let te=new mt;te.position.set(Be+.075,-2.725,Ue),te.rotation.z=re,ze.add(te),M(.016,.2,.26,1776929,-.008,.1,0,te,{r:.006});let _e=W.plane("mon",.225,we,0,0,0,{keep:!0});_e.rotation.order="ZYX",_e.rotation.set(0,-Math.PI/2,re),_e.position.set(Be+.075-.0165*Math.cos(re)-.1*Math.sin(re),-2.725-.0165*Math.sin(re)+.1*Math.cos(re),Ue);let Ge=new mt;Ge.position.set(z,Ae,pe),we.add(Ge),b(.25,.014,2500910,.075,0,0,Ge,{axis:"x",seg:36}),b(.05,.15,3817029,0,0,0,Ge,{axis:"x",seg:16});for(let k=0;k<7;k++){let je=new Qi(.11+k*.019,.0075,6,40);je.rotateY(Math.PI/2),w(je,14857514,Ge,{x:-.02+k%2*.016,cast:!1})}[0,2.1,4.2].forEach(k=>M(.012,.36,.03,9212827,.06,0,0,Ge,{mat:g,rot:[k,0,0],cast:!1})),An(Ge);let dt=k=>xe-(oe-k)*Math.tan(ie);y([[z-.04,Ae-.23,pe-.1],[z-.12,-2.775,pe-.32],[1.2,-2.79,-2.62],[.84,-2.785,-2.68],[gn+.08,-2.76,_r+.04],[gn+.01,-2.86,_r],[gn,dt(_r)-.06,_r-.04]],.0055,14857514,ze,{radial:6,density:24,tension:.4,cast:!1}),y([[z-.06,Ae,pe],[z-.2,-2.79,pe-.1],[Be+.06,-2.79,Ue+.18],[Be+.05,-2.76,Ue+.12]],.005,1052948,ze,{radial:6,cast:!1}),b(.05,.03,11569722,.76,-2.785,_r+.3,ze,{mat:g,seg:16}),An(ze);let Ut=new fs([h(gn,dt(_r-.1)-bn,_r-.1),h(gn,dt(-3.6)-bn,-3.6),h(gn,dt(Os+.1)-bn,Os+.1),Oi(.3,0,-bn),Oi(1,0,-bn),Oi(1.6,0,-bn)],!1,"catmullrom",.2),Kt=120,sn=o(Ut.getSpacedPoints(Kt),.0055,x,d,{seg:Kt,radial:6,keep:!0,cast:!1});Bs(sn.geometry,14857514);let kt=new F,Tn=new F,Mn=new mt;Mn.userData.keep=!0,d.add(Mn),M(.06,.034,.16,15319598,0,.002,0,Mn,{r:.008}),M(.03,.012,.1,2764081,0,.024,.01,Mn,{r:.004}),[-1,1].forEach(k=>[-1,1].forEach(je=>{let gt=b(.02,.013,1052948,k*.039,-.012,je*.058,Mn,{axis:"x",seg:14});gt.rotation.z=k*.5})),b(.022,.06,10133929,0,.008,-.105,Mn,{axis:"z",seg:18}),b(.0095,.006,329224,0,.008,-.136,Mn,{axis:"z",seg:14}),b(.008,.03,2764081,0,.004,.092,Mn,{axis:"z",seg:10});let C=new Fe(new Qi(.0158,.003,6,20),c.led(16773336,2.4));C.position.set(0,.008,-.1355),Mn.add(C),An(Mn);let Te=i.sprite(16769725,.16,0,.008,-.16,Mn,.55),He=new mt;He.userData.keep=!0,Q.add(He);let at=new mt;He.add(at),b(.012,.05,11055288,0,0,0,at,{axis:"z",mat:g,seg:12});for(let k=0;k<4;k++){let je=M(.004,bn*1.7,.03,13160148,0,0,-.03,at,{mat:g,cast:!1});je.rotation.z=k*Math.PI/4}b(.009,.04,5593439,0,0,.04,He,{axis:"z",mat:g,seg:10}),An(at),An(He);let ot=new pn(.0085,.0085,1,8,1,!0);ot.translate(0,.5,0),ot.rotateX(-Math.PI/2);let Ht=new Fe(Bs(ot,4869717),g);Ht.userData.keep=!0,Q.add(Ht);let Pt=new mt;Pt.userData.keep=!0,Q.add(Pt),b(.014,.04,13214282,0,0,0,Pt,{axis:"z",mat:g,seg:14}),w(new $n(.014,14,8,0,Math.PI*2,0,Math.PI/2).rotateX(-Math.PI/2),13214282,Pt,{z:-.02,mat:g}),b(.011,.025,10133929,0,0,.032,Pt,{axis:"z",mat:g,seg:12}),An(Pt);let St=new pn(.009,.009,1,8,1,!0);St.translate(0,.5,0),St.rotateX(-Math.PI/2);let bt=new Fe(Bs(St,1382170),m);bt.userData.keep=!0,Q.add(bt);let Wt=200,Yt=i.particles(Wt,{color:10473727,size:.017,gain:1.6});Q.add(Yt);let Pn=new mt;Pn.userData.keep=!0,Q.add(Pn);let qn=60,di=16,ti=ta[1]-ta[0],ni=i.flow(16751165,{base:6265980,intensity:.75,dash:1.4,speed:.32,rest:.12,gain:1,roughness:.55,metalness:0});ni.side=oi;let ii=new pn(bn-.003,bn-.003,ti,di,qn,!0,0,Math.PI);ii.rotateX(-Math.PI/2),ii.translate(0,0,-(ta[0]+ta[1])/2);{let k=ii.attributes.position,je=ii.attributes.uv;for(let gt=0;gt<k.count;gt++)je.setX(gt,-k.getZ(gt))}let D=i.place(new Fe(ii,ni),0,0,0,Pn,{keep:!0}),ne=new $n(bn-.003,16,8,0,Math.PI*2,0,Math.PI/2);ne.rotateX(-Math.PI/2),ne.scale(1,1,.45);let De=i.place(new Fe(ne,ni),0,0,0,Pn,{keep:!0}),Ee=new pn(.08,.08,1,24,1,!0);Ee.translate(0,.5,0),Ee.rotateX(-Math.PI/2);let Pe=i.place(new Fe(Ee,c.hdpe),0,0,0,Pn,{keep:!0}),_t=new mt;_t.userData.keep=!0,Pn.add(_t),b(.03,.17,10134445,0,0,-.085,_t,{axis:"z",r2:.104,mat:g,seg:20}),b(.086,.07,7107451,0,0,.035,_t,{axis:"z",mat:g,seg:20});for(let k=0;k<3;k++){let je=M(.006,.05,.12,12041926,0,0,-.07,_t,{mat:g});je.geometry.translate(0,.085,0),je.rotation.z=k*Math.PI*2/3+.4}b(.006,na[1]-.05,10133929,0,0,-na[1]/2+.05,_t,{axis:"z",mat:g,seg:6,cast:!1}),An(_t);let Dt=44,K=Bs(new Sn(.05,.011,.065),7619114),se=new Mi(K,x,Dt);se.userData.keep=!0,se.frustumCulled=!1,se.castShadow=!0;let ge=[];{let k=new Bn,je=new Ni,gt=new F,Mt=new F(1,1,1);for(let Lt=0;Lt<Dt;Lt++){let L=na[0]+.1+Lt/Dt*(na[1]-na[0]-.15)+u()*.05,ce=u()*Math.PI*2,We=.1+u()*.05;gt.set(We*Math.sin(ce),We*Math.cos(ce),-L),je.set(u()*.5,u()*.6,-ce+(u()-.5)*.6),k.setFromEuler(je),Mt.set(.6+u()*.6,1,.6+u()*.7),he.compose(gt,k,Mt),se.setMatrixAt(Lt,he),ge.push(L)}}Pn.add(se);let Xe=new mt;Xe.userData.keep=!0,d.add(Xe);let E=new mt;Xe.add(E),B(or,lr,ia,0,bs,E),B(or,lr,-9.02,ia,Wi,E);{[[or,-1],[lr,1]].forEach(([je,gt])=>{let Mt=new an(bs-wa,-ia);Mt.rotateY(gt>0?0:Math.PI),Mt.translate((bs+wa)/2,ia/2,je);let Lt=Mt.attributes.position,L=Mt.attributes.uv;for(let ce=0;ce<Lt.count;ce++)L.setXY(ce,(Lt.getX(ce)*.3+60)/240,(Lt.getY(ce)+9.02)/9);i.place(new Fe(Mt,P),0,0,0,E,{cast:!1})});let k=new an(bs-wa,or-lr);k.rotateX(-Math.PI/2),k.translate((bs+wa)/2,ia,(or+lr)/2),w(k,3877918,E,{cast:!1})}M(.01,.1,-15.95-lr,2763566,bs-.006,-.045,(-15.95+lr)/2,E,{cast:!1}),M(.01,.3,-15.95-lr,7828331,bs-.006,-.25,(-15.95+lr)/2,E,{cast:!1}),[-15,-16.9].forEach(k=>{M(.05,2.5,.08,12765390,bs-.048,-1.4,k,E,{mat:g}),[-.6,-2.3].forEach(je=>{b(.03,bs-.07-wa+.3,12765390,(bs-.07+wa-.3)/2,je,k,E,{axis:"x",mat:g,seg:12}),b(.042,.2,14201402,bs-.25,je,k,E,{axis:"x",mat:m,seg:14})})}),[.62,1].forEach(k=>y([[k,ia,or-.6],[k,.9,or-.04]],.016,12765390,E,{mat:g,radial:8,tension:0}));for(let k=0;k<15;k++){let je=(k+.5)/15;b(.012,.38,12765390,.81,ct(ia,.9,je),ct(or-.6,or-.04,je),E,{axis:"x",mat:g,seg:8,cast:!1})}w(new $n(1,20,10,0,Math.PI*2,0,Math.PI/2),3812125,E,{x:2.6,y:-.05,z:-15}).scale.set(1.15,.85,1.05),w(new $n(1,20,6,0,Math.PI*2,0,.7),14673647,E,{x:2.6,y:-.06,z:-15,cast:!1}).scale.set(1.17,.87,1.07);let O=new mt;O.position.copy(Q.position),O.rotation.copy(Q.rotation),E.add(O);let Z=Za(13)-.04;{let k=sa-.3,je=Oi(Z,0,-.035),gt=Oi(k,0,-.035);q([[je.z,ia],[gt.z,ia],[gt.z,gt.y],[je.z,je.y]],I,[],E);let Mt=new an(bs-Fi,k-Z);Mt.rotateX(-Math.PI/2),Mt.translate((bs+Fi)/2-gn,-.035,-(Z+k)/2);let Lt=Mt.attributes.position,L=Mt.attributes.uv;for(let ce=0;ce<Lt.count;ce++)L.setXY(ce,Lt.getX(ce),Lt.getZ(ce));i.place(new Fe(Mt,I),0,0,0,O,{cast:!1}),M(bs-Fi-.01,.5,.012,3877918,(bs+Fi)/2-gn,-.3,-Z+.006,O,{cast:!1})}let $=3112266;b(.081,sa-Z,$,0,0,-(Z+sa)/2,O,{axis:"z",mat:m,seg:28}),b(.1,.16,1513499,0,0,-Z+.02,O,{axis:"z",seg:24}),[-.05,.05].forEach(k=>b(.102,.018,12765390,0,0,-Z+.02+k,O,{axis:"z",mat:g,seg:24,cast:!1})),W.plane("pvc",.62,O,-.0815,.012,-(Z+.7),{rot:[0,-Math.PI/2,0]}),y([Oi(sa-.05),Oi(sa+.1),h(gn,rr+.24,sr+.2),h(gn,rr+ar*.73,sr+ar*.69)],.081,$,E,{mat:m,radial:20,seg:16});{let k=new pn(ar+.013,ar+.013,.34,24,1,!0,-.25,2.2);k.rotateZ(Math.PI/2),w(k,$,E,{x:gn,y:rr,z:sr,mat:m})}[-.13,.13].forEach(k=>b(ar+.017,.025,12765390,gn+k,rr,sr,E,{axis:"x",mat:g,seg:32,open:!0,cast:!1})),W.plane("permit",.17,E,Fi+.03,rr+.24,sr-.26,{rot:[0,-Math.PI/2,0]}),An(E),M(.035,.75,.035,10123858,.66,-.12,-15.95,p),b(.008,.6,5981750,.66,-.7,-15.95,p,{seg:6,cast:!1}),M(.004,.12,.05,15764012,.64,.17,-15.95-.03,p,{cast:!1,rot:[0,0,.2]}),W.plane("pl",.13,p,.64,.05,-15.95,{rot:[0,-Math.PI/2,0]});let me=document.createElement("canvas");me.width=256,me.height=128;{let k=me.getContext("2d"),je=k.createLinearGradient(0,0,0,128);je.addColorStop(0,"rgba(220,236,255,0.55)"),je.addColorStop(.86,"rgba(205,226,252,0.34)"),je.addColorStop(.97,"rgba(205,226,252,0.12)"),je.addColorStop(1,"rgba(200,222,250,0)"),k.fillStyle=je,k.fillRect(0,0,128,128);for(let Mt=0;Mt<260;Mt++)k.fillStyle=`rgba(240,248,255,${.2+u()*.5})`,k.fillRect(u()*128,Math.pow(u(),1.6)*110,1+u()*1.5,1+u()*1.5);let gt=k.createRadialGradient(192,64,2,192,64,62);gt.addColorStop(0,"rgba(8,6,4,0.72)"),gt.addColorStop(1,"rgba(8,6,4,0)"),k.fillStyle=gt,k.fillRect(128,0,128,128)}let Ie=new Wn(me);Ie.colorSpace=yn;let ve=new ln({map:Ie,transparent:!0,depthWrite:!1,roughness:.9,emissive:10467544,emissiveIntensity:.05}),X=(k,je,gt,Mt,Lt,L,ce)=>{let We=new an(gt,Mt);We.rotateY(-Math.PI/2);let ke=We.attributes.uv;for(let et=0;et<ke.count;et++)ke.setX(et,ct(k,je,ke.getX(et)));return i.place(new Fe(We,ve),Lt,L,ce,p,{cast:!1,receive:!1})};X(0,.5,26,2.05,Wi-.004,-1.025,4.25+13),X(.5,1,.8,.6,Wi-.006,-2.45,4.6);let Ze=-2.32,Ke=k=>Ze-Math.max(0,k-4.3)*.012,ht=x,ft=g;y([[hi,Ke(4.44),4.44],[hi,Ke(7.5),7.5],[hi,Ke(12),12]],.02,8423053,p,{mat:ht,radial:10,tension:0}),y([[hi,Ke(4.42),4.42],[hi,Ze,4.3],[hi,Ze,3.96],[hi,Ze+.06,3.9],[hi,Ze+.2,3.88],[hi,-1.02,3.88],[hi,-.3,3.88],[hi,-.24,3.8],[hi-.5,-.24,3.8]],.019,12088383,p,{mat:ft,radial:10,density:26,tension:.15}),b(.027,.045,13214282,hi,Ke(4.43),4.43,p,{axis:"z",mat:g,seg:14}),[4.405,4.455].forEach(k=>b(.025,.008,12088383,hi,Ke(k),k,p,{axis:"z",mat:g,seg:12,cast:!1})),b(.023,.06,8028295,hi,Ke(4.6),4.6,p,{axis:"z",seg:12}),M(.004,.012,.05,789775,hi-.023,Ke(4.6)+.004,4.6,p,{cast:!1}),W.plane("pb",.19,p,hi-.0215,Ke(5.3),5.3,{rot:[0,-Math.PI/2,0]}),b(.022,.07,13214282,hi,-1.72,3.88,p,{mat:g,seg:14}),M(.012,.016,.1,12728875,hi-.03,-1.7,3.88-.04,p,{mat:m,cast:!1}),W.plane("shut",.11,p,hi-.045,-1.8,3.82,{rot:[0,-Math.PI/2,0]}),M(.1,.17,.1,2241610,hi,-1.42,3.88,p,{r:.012,mat:m}),b(.04,.02,9212827,hi-.05,-1.4,3.88,p,{axis:"x",mat:g,seg:18});let pt=4.7,Ct=-3.25;b(.066,Wi-Fi,12433322,(Fi+Wi)/2,Ct,pt,p,{axis:"x",seg:24,open:!0}),b(.05,Wi-Fi,1118740,(Fi+Wi)/2,Ct,pt,p,{axis:"x",seg:24,open:!0});{let k=new Ba(.05,.066,24);k.rotateY(-Math.PI/2),w(k,2763823,p,{x:Fi+.002,y:Ct,z:pt,cast:!1});let je=new Ba(.06,.066,24);je.rotateY(-Math.PI/2),w(je,14209990,p,{x:Fi+.003,y:Ct,z:pt,cast:!1})}q([[4.5,-3.37],[5.08,-3.37],[5.08,-2.87],[4.5,-2.87]],I,[[pt,Ct,.068]],p),M(Wi-Fi,.008,.66,13617854,(Fi+Wi)/2,-2.865,4.82,p,{cast:!1}),y([[gn,Ct-.03,pt-.04],[gn,-3.36,4.42],[gn,-3.37,3.6],[gn,-3.37,Xi+.2]],.038,1776929,p,{radial:12,tension:.2});let yt=new Fe(Zf(.68,.215,.232,1842722,2829875,5264475,22),x);yt.geometry.rotateX(Math.PI/2),yt.position.set(gn,-3.48,Xi),p.add(yt),yt.receiveShadow=!0;{let k=new To(.232,20,-Math.PI/2,Math.PI);k.rotateX(-Math.PI/2),w(k,2829875,p,{x:gn,y:-3.475,z:Xi,cast:!1})}b(.082,.22,2764081,gn,-3.36,Xi,p,{seg:20}),w(new $n(.082,18,6,0,Math.PI*2,0,Math.PI/2),2764081,p,{x:gn,y:-3.25,z:Xi}),b(.095,.02,1710878,gn,-3.465,Xi,p,{seg:20}),W.plane("pump",.1,p,gn-.084,-3.34,Xi,{rot:[0,-Math.PI/2,0]}),b(.004,.3,9212827,gn+.02,-3.2,Xi+.12,p,{mat:g,seg:6,cast:!1});let nt=v(13815750,{intensity:2.6,speed:1.4,level:0,roughness:.45}),wt=.66;o([[gn,-3.17,Xi],[gn,-3,Xi],[wt,-2.85,Xi],[wt,-2.2,Xi],[wt,-.5,Xi],[wt,-.42,Xi+.08],[wt,-.42,3.86],[wt,-.34,3.94],[wt,.12,3.94],[wt,.15,4.02],[wt,.15,4.42],[wt,.06,4.5]],.024,nt,p,{radial:10,density:16,tension:.12}),b(.034,.13,9409691,wt,-1.9,Xi,p,{seg:16}),[-1.84,-1.96].forEach(k=>b(.037,.012,12765390,wt,k,Xi,p,{mat:g,seg:16,cast:!1}));let Ot=new Fe(new To(.214,24,-Math.PI/2,Math.PI).rotateX(-Math.PI/2),c.water);Ot.position.set(gn,-3.3,Xi),Ot.userData.keep=!0,d.add(Ot);let Rn=i.sprite(7321855,.42,hi-.04,Ke(4.6)+.04,4.6,d,.75),On=110,kn=i.particles(On,{color:8175871,size:.04,gain:2.4});d.add(kn),An(p);function An(k){k.updateWorldMatrix(!0,!0);let je=new zt().copy(k.matrixWorld).invert(),gt=new zt,Mt=new Map,Lt=[],L=ce=>{for(let We=ce;We&&We!==k;We=We.parent)if(We.userData.keep)return!0;return!1};k.traverse(ce=>{if(!ce.isMesh||ce.isInstancedMesh||L(ce)||Array.isArray(ce.material)||ce.children.length)return;let We=ce.material.uuid+"|"+ce.renderOrder,ke=Mt.get(We);ke||Mt.set(We,ke={mat:ce.material,cast:!1,recv:!1,ro:ce.renderOrder,geos:[]}),ke.cast=ke.cast||ce.castShadow,ke.recv=ke.recv||ce.receiveShadow;let et=ce.geometry.index?ce.geometry.toNonIndexed():ce.geometry.clone();Object.keys(et.attributes).forEach(Tt=>{Tt!=="position"&&Tt!=="normal"&&Tt!=="uv"&&Tt!=="color"&&et.deleteAttribute(Tt)}),et.attributes.uv||et.setAttribute("uv",new Jt(new Float32Array(et.attributes.position.count*2),2)),ce.material.vertexColors?et.attributes.color||Bs(et,16777215):et.attributes.color&&et.deleteAttribute("color"),et.applyMatrix4(gt.multiplyMatrices(je,ce.matrixWorld)),ke.geos.push(et),Lt.push(ce)}),Mt.forEach(ce=>{let We=Ss(ce.geos);if(!We)return;let ke=new Fe(We,ce.mat);ke.castShadow=ce.cast,ke.receiveShadow=ce.recv,ke.renderOrder=ce.ro,ke.userData.keep=!0,k.add(ke),ce.geos.forEach(et=>et.dispose())}),Lt.forEach(ce=>{ce.parent&&ce.parent.remove(ce),ce.geometry.dispose()})}let ls={hub:Oi(5.6,.02,Wu+.02),cam:Oi(1.2),roots:Oi(le+.12,.03,.03),jet:Oi(8.2),liner:Oi(5.6),burst:Oi(8.3),trench:h(1,-1.4,-15.4),main:h(gn,rr+ar+.02,sr+.05),water:h(hi,Ke(4.6),4.6),tile:h(gn,Ct,pt)},Ts={fx:gn+.1,time:19.4,cut:0,ghost:0,section:1,cutX:wa,ugFocus:null,ground:1,orbit:.01,season:0,lift:0},hn=[{...Ts,radius:28,theta:-.95,phi:1.2,ty:-2.2,fz:-7.8,dof:0,orbit:.02,time:16.6,narrow:{radius:34,fz:-10.5,ty:-1.6}},{...Ts,radius:3.2,theta:-1.57,phi:1.4,ty:-3,fz:-3.55,dof:.6,narrow:{radius:3.3,fz:-3.45}},{...Ts,radius:1.7,theta:-1.42,phi:1.22,ty:-3.45,fz:-12.8,dof:1.1,narrow:{radius:1.9}},{...Ts,radius:1.6,theta:-1.5,phi:1.32,ty:-3.56,fz:-12.5,dof:1.1,narrow:{radius:1.8,fz:-12.62}},{...Ts,radius:5.2,theta:-1.55,phi:1.42,ty:-3.45,fz:-10.9,dof:.8,narrow:{radius:7.2,fz:-11.3}},{...Ts,radius:14,theta:-1.5,phi:1,ty:-1.55,fz:-15.8,dof:.4,time:16.6,narrow:{radius:14,fz:-16.1}},{...Ts,radius:7,theta:-1.5,phi:1.46,ty:-2.5,fz:3.6,dof:.5,narrow:{radius:8.6,fz:3.2}}],Gr="",qi=0,kr=1,Vr=k=>k>.95&&k<1.55?"CRACK":Math.abs(k-Za(Gm)-.06)<.1?"OFFSET JOINT":(k-Yu+Yo*2)%Yo<.12?"JOINT":"",aa=new Float32Array(On*2);for(let k=0;k<On;k++)aa[k*2]=u(),aa[k*2+1]=u();let ys=new Float32Array(Wt*2);for(let k=0;k<Wt;k++)ys[k*2]=k%6/6*Math.PI*2+u()*.3,ys[k*2+1]=u();return{name:"sewer",group:d,anchors:ls,shots:hn,hides:(k,je)=>{let gt=k.sys.sewer?[...k.sys.sewer.meshes]:[];return je&&je.groups&&["water","gas","sewer","found","radon"].forEach(Mt=>je.groups[Mt]&&gt.push(je.groups[Mt])),je&&je.group&&je.group.children.forEach(Mt=>{let Lt=Mt.geometry&&Mt.geometry.parameters;Mt.isMesh&&Lt&&(Lt.height===9||Lt.depth===240)&&gt.push(Mt)}),gt},light(k){return k===0?{pos:[-2.6,-1,-8.6],at:[.8,-3.3,-11.5],power:.7,fill:.6}:k===1?{pos:[-1.6,-3.05,-5.2],at:[.7,-3.3,-4],power:.55,fill:.9}:k===2||k===3?{pos:[-1.3,-2.5,-12],at:[.7,-3.5,-12.8],power:.6,fill:.8}:k===4?{pos:[-4.6,-2,-9.4],at:[.75,-3.55,-11.1],power:1,fill:.6}:k===5?{pos:[-3.2,-1.4,-15.6],at:[.8,-3.5,-17.6],power:1.3,fill:.9}:{pos:[-1.8,-3.4,2.6],at:[.75,-3,3.4],power:1.6,fill:1.6}},update({step:k,q:je,t:gt,dt:Mt,snap:Lt}){let L=Lt?1:1-Math.exp(-Mt*5),ce=s?0:gt,We=ct(na[0]+.05,na[1]-.05,je);Re(Gt=>k===4&&Gt>=9&&Gt<=11&&Za(Gt)+Yo*.5<We||k===5&&Gt>=13),we.visible=Mn.visible=sn.visible=k===1,Xe.visible=k===5,qe.visible=At.visible=k!==5,Pn.visible=k===4;let ke=k<=3;if(st.visible=ue.visible=ke,kr=ct(kr,k===0?1.8:.55,L),A.userData.level.value=kr,k===1){let Gt=ct(0,.62,je);Ut.getPointAt(Gt,kt),Ut.getTangentAt(Gt,Tn),Mn.position.copy(kt),Mn.position.y+=.045-.003,Mn.rotation.x=Math.atan2(Tn.y,-Tn.z),sn.geometry.setDrawRange(0,Math.round(Gt*Kt)*6*6);let pi=Os-kt.z;Ge.rotation.x=-Gt*9,ls.cam.copy(kt),ls.cam.y+=.07,Te.material.opacity=.45+(s?0:.08*Math.sin(ce*9));let $t=(Gt*Ut.getLength()+.4).toFixed(1),si=pi<Yu?"":Vr(pi),Vn=$t+si;Vn!==Gr&&(Gr=Vn,W.set("mon",$t+" m",pi<Yu?"CAST IRON 150 mm":"CLAY 150 mm \xB7 1958",{flag:si}))}let et=k===3?Zt(je/.42,0,1):0,Tt=k===3?Zt((je-.42)/.58,0,1):0;He.visible=Ht.visible=k===3&&je<.42,Pt.visible=bt.visible=Yt.visible=k===3&&je>=.42;let Vt=k===3?Rt(.1,.9,et):0;st.scale.set(1,1,k===3&&je>=.42?.12:Math.max(.12,1-.88*Vt));let Ft=ct(le-.3,le+.7,Tt);if(k===3){if(He.visible){let Gt=ct(le-.3,le+.4,et);He.position.set(0,-.004,-Gt),at.rotation.z=-ce*14,Ht.position.set(0,-.006,-6),Ht.scale.set(1,1,Math.max(.01,Gt-6.06)),Oi(Gt,0,.02,ls.jet)}if(Pt.visible){Pt.position.set(0,-bn+.02,-Ft),bt.position.set(0,-bn+.012,-6),bt.scale.set(1,1,Math.max(.01,Ft-6.03)),Oi(Ft,0,.02,ls.jet);let Gt=Yt.userData.pos,pi=Yt.userData.n;for(let $t=0;$t<pi;$t++){let si=ys[$t*2],Vn=(ys[$t*2+1]+ce*2.6)%1,rn=Vn*.2,In=.012+rn*.62,mi=In*Math.sin(si),Ii=-bn+.02+In*Math.cos(si),cs=Math.hypot(mi,Ii);cs>bn*.95&&(mi*=bn*.95/cs,Ii=Ii*bn*.95/cs-(rn-.1)*.15),Gt[$t*3]=mi,Gt[$t*3+1]=Math.max(Ii,-bn*.95),Gt[$t*3+2]=-Ft+.02+rn}Yt.geometry.attributes.position.needsUpdate=!0}je>=.42&&Ft>le+.1&&(st.visible=!1)}if(ue.visible){let Gt=k===3&&je>=.42?Math.round(Zt((Qe-Ft)/(Qe-Ce),0,1)*vt):vt;ue.geometry.setDrawRange(0,Gt*N*6)}if(k===4){let Gt=ct(ta[0]+.15,ta[1],je),pi=Math.round((Gt-ta[0])/(ta[1]-ta[0])*qn);D.geometry.setDrawRange((qn-pi)*di*6,pi*di*6),De.position.set(0,0,-Gt),Oi(Gt,0,.02,ls.liner),_t.position.set(0,0,-We),Oi(We,0,.11,ls.burst),Pe.position.set(0,0,-(na[0]-.1)),Pe.scale.set(1,1,Math.max(.01,We-na[0]+.1-.05));let $t=0;for(;$t<Dt&&ge[$t]<We-.06;)$t++;se.count=$t}let on=s?.5:ce%7/7,vn=on<.55?on/.55:1-(on-.55)/.45,Xt=s||on>=.55;if(Ot.position.y=ct(-3.38,-3.14,vn),qi=ct(qi,Xt?1:0,Lt?1:1-Math.exp(-Mt*6)),nt.userData.level.value=qi,k===6){let Gt=kn.userData.pos,pi=kn.userData.n;for(let $t=0;$t<pi;$t++){let si=aa[$t*2],Vn=aa[$t*2+1];if($t%2===0){let rn=(Vn+ce*.11)%1;Gt[$t*3]=Fi+.03+si*.36,Gt[$t*3+1]=ct(-1,-3.1,rn),Gt[$t*3+2]=4.32+si*7.3%1*.62}else{let rn=(Vn+ce*1.3)%1,In=(si-.5)*1.6;Gt[$t*3]=hi-.03-rn*.14,Gt[$t*3+1]=Ke(4.6)+.01+rn*.3-rn*rn*.42,Gt[$t*3+2]=4.6+In*rn*.22}}kn.geometry.attributes.position.needsUpdate=!0}kn.visible=Rn.visible=k===6,Rn.material.opacity=.6+(s?0:.15*Math.sin(ce*7))}}}var nn=-1.2,xn=-1.5,Qn=.057,Mr=-2.8,Xn=-2.9,As=-3.05,vc=-4.4,Ci=-2.1,Pi=.25,jn=-1.5,as=-.25,Qf=-3.75,Ra=.24,gs=7.9,qo=10.45,Cs=-3.995,Si=.66,_i=1.6,fi={x:-.5,y:-1.52,z:Cs+.1},Er={x:-.3,z:Cs+.115},$a=-.59,Zo=new F(nn,Xn-.1,xn+.03),Vm=i=>8.054+.1233+.72*(i+2.78),yc=[[-.36,jn],[-.62,Cs+.04]],_c=[[-.95,as],[-1.5,1.25]],Wm=[-2.3,.05];function Xm({kit:i,M:e,tier:t,reduce:n}){let{box:s,cyl:r,tube:a,mats:o,atlas:c,V:l}=i,h=new mt,d=new mt,p=new mt,u=new mt;h.add(d,p,u);let f=Nn(41),x=(N,ae,ue,we,ze)=>{let z=document.createElement("canvas");z.width=N,z.height=ae,ue(z.getContext("2d"),N,ae);let Ae=new Wn(z);return Ae.colorSpace=yn,Ae.wrapS=Ae.wrapT=Zn,Ae.repeat.set(we,ze),Ae.anisotropy=8,Ae},g=(N,ae,ue,we,ze,z,Ae)=>{for(let pe=0;pe<we;pe++)N.fillStyle=ze[f()*ze.length|0],N.beginPath(),N.ellipse(f()*ae,f()*ue,z+f()*(Ae-z),z+f()*(Ae-z)*.7,f()*3,0,6.3),N.fill()},m=x(256,256,(N,ae,ue)=>{N.fillStyle="#7c776f",N.fillRect(0,0,ae,ue);for(let we=0;we<40;we++){let ze=f()*ae,z=f()*ue,Ae=20+f()*50,pe=N.createRadialGradient(ze,z,0,ze,z,Ae),Be=f()>.5;pe.addColorStop(0,Be?"rgba(60,56,50,.18)":"rgba(160,154,144,.14)"),pe.addColorStop(1,"rgba(0,0,0,0)"),N.fillStyle=pe,N.fillRect(ze-Ae,z-Ae,Ae*2,Ae*2)}g(N,ae,ue,900,["rgba(50,47,43,.35)","rgba(170,164,152,.3)","rgba(96,90,82,.4)"],.4,1.3)},1/1.6,1/1.6),M=x(256,256,(N,ae,ue)=>{N.fillStyle="#3a3732",N.fillRect(0,0,ae,ue);for(let we=0;we<900;we++){let ze=f()*ae,z=f()*ue,Ae=2+f()*5,pe=70+f()*60,Be=5+(f()*3|0);N.fillStyle=`rgb(${pe|0},${pe*.97|0},${pe*.9|0})`,N.beginPath();for(let Ue=0;Ue<Be;Ue++){let re=Ue/Be*6.283+f()*.5,te=Ae*(.6+f()*.5);N[Ue?"lineTo":"moveTo"](ze+Math.cos(re)*te,z+Math.sin(re)*te*.8)}N.closePath(),N.fill(),N.strokeStyle="rgba(20,18,16,.45)",N.lineWidth=1,N.stroke()}},1/.45,1/.45),b=x(256,256,(N,ae,ue)=>{let we=N.createImageData(ae,ue),ze=we.data;for(let z=0;z<ue;z++)for(let Ae=0;Ae<ae;Ae++){let pe=z/ue,Be=(f()-.5)*26,Ue=Math.sin(z*.11+Math.sin(Ae*.05)*1.6)*6,re=(z*ae+Ae)*4;ze[re]=90-30*pe+Be+Ue,ze[re+1]=68-22*pe+Be*.9+Ue,ze[re+2]=50-12*pe+Be*.8+Ue*.6,ze[re+3]=255}N.putImageData(we,0,0),g(N,ae,ue,160,["rgba(150,140,124,.8)","rgba(120,112,100,.8)","rgba(70,60,50,.7)"],.8,3.2)},1/1.7,1/1.7);b.wrapT=ws,b.offset.set(0,1+2.9/1.7);let y=i.std(16777215,.92,0,{map:m}),_=i.std(16777215,1,0,{map:M}),w=i.std(16777215,1,0,{map:b}),A=o.rubber,v=i.std(9341828,.7,0),R=i.std(10920859,.8,0),P=i.std(2060240,.15,0,{emissive:5220095,emissiveIntensity:.55}),B=o.blackPlastic,T=o.rubber,U=(N,ae,ue,we)=>{let ze=Nn(ue),z=[],Ae=[],pe=16;for(let Be=3;Be<=ae-3;Be+=6)pe=Math.max(7,Math.min(25,pe+(ze()-.5)*5)),z.push([Be,pe]);for(let Be=0;Be<4;Be++){let Ue=3+(ze()*(z.length-6)|0),re=z[Ue];Ae.push([re,[re[0]+8+ze()*26,re[1]+(ze()>.5?1:-1)*(5+ze()*7)]])}return{key:N,w:ae,h:32,draw(Be){let Ue=(re,te)=>{Be.strokeStyle=te,Be.lineWidth=re,Be.lineJoin=Be.lineCap="round",Be.beginPath(),z.forEach((_e,Ge)=>Be[Ge?"lineTo":"moveTo"](_e[0],_e[1])),Be.stroke()};if(we){Ue(8,"rgba(74,72,68,1)"),Ue(3,"rgba(98,95,90,.9)");return}Ue(3.4,"rgba(150,144,134,.35)"),Ue(1.6,"rgba(16,14,12,.92)"),Be.lineWidth=.9,Be.strokeStyle="rgba(16,14,12,.8)",Ae.forEach(([re,te])=>{Be.beginPath(),Be.moveTo(re[0],re[1]),Be.lineTo(te[0],te[1]),Be.stroke()})}}},I=c([{key:"warn",text:"RADON SYSTEM",sub:"DO NOT TURN OFF",w:384,h:112,size:50,color:"#16130c",bg:"#e3bd2f"},{key:"info",w:384,h:150,draw(N,ae,ue){N.fillStyle="#e8e3d6",N.fillRect(0,0,ae,ue),N.fillStyle="#1a1c20",N.textAlign="left",N.textBaseline="middle",N.font="700 25px ui-monospace, Menlo, monospace",N.fillText("RADON MITIGATION",14,24),N.font="500 19px ui-monospace, Menlo, monospace",["SUB-SLAB DEPRESSURIZATION","INSTALLED 2026-11","BEFORE: 412 Bq/m\xB3","RETEST: 91-DAY TEST"].forEach((we,ze)=>N.fillText(we,14,56+ze*24))}},{key:"air",text:"AIRFLOW \u25B2",w:224,h:56,size:30,color:"#16130c",bg:"#e8e3d6"},{key:"fan",text:"RADON FAN",sub:"120 V \xB7 60 Hz \xB7 85 W",w:384,h:104,size:44,color:"#2a2c30"},{key:"jbox",text:"RADON FAN",sub:"DISCONNECT",w:224,h:84,size:34,color:"#16130c",bg:"#e3bd2f"},{key:"sump",text:"SEALED SUMP",sub:"RADON \xB7 KEEP CLOSED",w:320,h:96,size:38,color:"#16130c",bg:"#e8e3d6"},{key:"alpha",w:160,h:160,draw(N,ae){N.fillStyle="#e8e3d6",N.beginPath(),N.arc(ae/2,ae/2,ae/2-2,0,6.3),N.fill(),N.fillStyle="#1a1c20",N.textAlign="center",N.textBaseline="middle",N.font="700 17px ui-monospace, Menlo, monospace",N.fillText("ALPHA TRACK",ae/2,46),N.font="600 14px ui-monospace, Menlo, monospace",N.fillText("LONG-TERM \xB7 91 d",ae/2,72),N.font="500 13px ui-monospace, Menlo, monospace",N.fillText("START 11-10",ae/2,96),N.fillText("DO NOT OPEN",ae/2,116)}},{key:"scale",w:64,h:300,draw(N,ae,ue){N.fillStyle="#ebe7dd",N.fillRect(0,0,ae,ue),N.fillStyle="#1a1c20",N.strokeStyle="#1a1c20",N.textBaseline="middle",N.textAlign="center";for(let we=-11;we<=11;we++){let ze=ue/2-we*11,z=we%5===0;N.lineWidth=z?2:1,N.beginPath(),N.moveTo(z?10:18,ze),N.lineTo(ae-(z?10:18),ze),N.stroke()}N.font="700 15px ui-monospace, Menlo, monospace",N.fillText("0",ae/2,ue/2-9),N.font="600 12px ui-monospace, Menlo, monospace",N.fillText("Pa",ae/2,12),N.fillText("250",ae/2,ue/2-64),N.fillText("250",ae/2,ue/2+64)}},U("ca",512,7,!1),U("cas",512,7,!0),U("cb",384,9,!1),U("cbs",384,9,!0)],{width:1024,emissive:.22}),G=[];{let N=400;for(let ae=0;ae<46;ae++)N=ct(N,330+f()*200,.45),G.push(N)}let j=c([{key:"mon",w:256,h:192,value:412,after:0,draw(N,ae,ue,we){N.fillStyle="#06080c",N.fillRect(0,0,ae,ue);let ze=Math.round(we.value),z=ze>=200?"#ff6b4f":ze>=100?"#f4bd7e":"#8fd3a6";N.textBaseline="middle",N.textAlign="left",N.fillStyle="#8b93a1",N.font="600 15px ui-monospace, Menlo, monospace",N.fillText("RADON",14,18),N.textAlign="right",N.fillText(we.after>.5?"RETEST":"91-DAY AVG",ae-14,18),we.after>.5&&(N.textAlign="right",N.fillStyle="#8b93a1",N.font="500 15px ui-monospace, Menlo, monospace",N.fillText("was 412",ae-14,52)),N.textAlign="left",N.fillStyle=z,N.font="700 64px ui-monospace, Menlo, monospace";let Ae=String(ze);N.fillText(Ae,12,66);let pe=N.measureText(Ae).width;N.fillStyle="#cfd4da",N.font="500 17px ui-monospace, Menlo, monospace",N.fillText("Bq/m\xB3",20+pe,80);let Be=178,Ue=64/480,re=14,te=(ae-28)/(G.length-1);N.strokeStyle="rgba(139,147,161,.6)",N.lineWidth=1,N.setLineDash([4,4]),N.beginPath(),N.moveTo(re,Be-200*Ue),N.lineTo(ae-14,Be-200*Ue),N.stroke(),N.setLineDash([]),N.fillStyle="#8b93a1",N.font="500 12px ui-monospace, Menlo, monospace",N.fillText("200",re,Be-200*Ue-9),N.strokeStyle=z,N.lineWidth=2.2,N.beginPath(),G.forEach((_e,Ge)=>{let dt=we.after*Rt(G.length-12,G.length-1,Ge),Ut=ct(_e,we.value+(_e-420)*.08,dt);N[Ge?"lineTo":"moveTo"](re+Ge*te,Be-Ut*Ue)}),N.stroke()}}],{width:256,emissive:.8}),q=(N,ae,ue,we,ze,z,Ae,pe,Be)=>{let Ue=N.plane(ae,ue,Be),re=Ue.geometry.attributes.uv,te=1,_e=0,Ge=1,dt=0;for(let kt=0;kt<re.count;kt++)te=Math.min(te,re.getX(kt)),_e=Math.max(_e,re.getX(kt)),Ge=Math.min(Ge,re.getY(kt)),dt=Math.max(dt,re.getY(kt));let Ut=new an(ue,Ue.geometry.parameters.height,16,1),Kt=Ut.attributes.position,sn=Ut.attributes.uv;for(let kt=0;kt<Kt.count;kt++){let Tn=pe+Kt.getX(kt)/we;Kt.setXYZ(kt,ze+we*Math.sin(Tn),z+Kt.getY(kt),Ae+we*Math.cos(Tn)),sn.setXY(kt,ct(te,_e,sn.getX(kt)),ct(Ge,dt,sn.getY(kt)))}return Ut.computeVertexNormals(),Ue.geometry.dispose(),Ue.geometry=Ut,Ue},Y=(N,ae,ue,we,ze=.0015)=>{let z=ue[0]-ae[0],Ae=ue[1]-ae[1],pe=Math.hypot(z,Ae);return I.plane(N,pe,we,(ae[0]+ue[0])/2,Mr+ze,(ae[1]+ue[1])/2,{rot:[-Math.PI/2,0,Math.atan2(-Ae,z)]})},V=(N,ae,ue,we,ze,z,Ae,pe,Be={})=>{let Ue=(N+ae)/2,re=(ue+we)/2,te=(ze+z)/2;return s(ae-N,we-ue,z-ze,Ae,Ue,re,te,pe,{uv:{ox:Ue,oy:re,oz:te},...Be})},W=jn-.5;V(-5,5,Xn,Mr,-4,jn,y,d),V(-5,5,Xn,Mr,as,4,y,d),V(-5,Ci,Xn,Mr,jn,as,y,d),V(Pi,5,Xn,Mr,jn,as,y,d),[[-5,Ci,-4,jn],[Pi,5,-4,jn],[Ci,Pi,-4,W],[-5,5,as,4],[-5,Ci,jn,as],[Pi,5,jn,as]].forEach(([N,ae,ue,we])=>V(N,ae,As,Xn,ue,we,_,d,{cast:!1})),[[-5.6,Ci,-4.6,jn],[Pi,5.6,-4.6,jn],[Ci,Pi,-4.6,W],[-5.6,5.6,as,4.6],[-5.6,Ci,jn,as],[Pi,5.6,jn,as]].forEach(([N,ae,ue,we])=>V(N,ae,vc,As,ue,we,w,d,{cast:!1})),V(Ci,Pi,vc,Qf,jn,as,w,d,{cast:!1}),V(Ci,Pi,Xn-.004,Xn,jn,jn+.002,A,d,{cast:!1}),V(Ci-.002,Ci,Xn-.004,Xn,jn,as,A,d,{cast:!1}),V(Pi,Pi+.002,Xn-.004,Xn,jn,as,A,d,{cast:!1});{let N=t>=1?260:120,ae=new Nr(1,0),ue=new Mi(ae,i.std(16777215,1,0),N),we=new zt,ze=new Bn,z=new Ni,Ae=new F,pe=new F,Be=new xt,Ue=0;for(;Ue<N;){let re=f(),te=As+.012+f()*(Xn-As-.024),_e=.007+f()*.013,Ge=f();if(Ge<.6){let Ut=ct(Ci+.02,Pi-.02,re);if(Math.abs(Ut-nn)<Ra+.03)continue;pe.set(Ut,te,jn+_e*.25)}else Ge<.8?pe.set(Ci+_e*.25,te,ct(jn+.02,as-.02,re)):pe.set(Pi-_e*.25,te,ct(jn+.02,as-.02,re));Ae.set(_e,_e*(.6+f()*.4),_e*(.7+f()*.3)),ze.setFromEuler(z.set(f()*6,f()*6,f()*6)),ue.setMatrixAt(Ue,we.compose(pe,ze,Ae));let dt=.07+f()*.07;ue.setColorAt(Ue,Be.setRGB(dt,dt*.97,dt*.9)),Ue++}ue.castShadow=!1,ue.receiveShadow=!0,d.add(ue)}V(Ci,Pi,As,Xn,W,jn,_,p,{cast:!1}),V(Ci,Pi,vc,As,W,jn,w,p,{cast:!1});{let N=Math.asin((Xn-As)/Ra),ae=Math.cos(N)*Ra,ue=(_e,Ge)=>{let dt=new Rs(_e,{depth:jn-W,bevelEnabled:!1,curveSegments:20});dt.translate(0,0,W);let Ut=new Fe(dt,Ge);return Ut.receiveShadow=!0,u.add(Ut),Ut},we=new Ei;we.moveTo(Ci,Xn),we.lineTo(nn-Ra,Xn),we.absarc(nn,Xn,Ra,Math.PI,Math.PI+N,!1),we.lineTo(Ci,As),we.closePath();let ze=new Ei;ze.moveTo(Pi,Xn),ze.lineTo(Pi,As),ze.lineTo(nn+ae,As),ze.absarc(nn,Xn,Ra,-N,0,!1),ze.closePath();let z=new Ei;z.moveTo(Ci,As),z.lineTo(nn-ae,As),z.absarc(nn,Xn,Ra,Math.PI+N,2*Math.PI-N,!1),z.lineTo(Pi,As),z.lineTo(Pi,vc),z.lineTo(Ci,vc),z.closePath(),ue(we,_),ue(ze,_),ue(z,w);let Ae=new $n(Ra,24,10,Math.PI,Math.PI,Math.PI/2,Math.PI/2);Ae.translate(nn,Xn,xn);let pe=Ae.attributes.position,Be=Ae.attributes.uv;for(let _e=0;_e<pe.count;_e++)Be.setXY(_e,pe.getX(_e)+pe.getZ(_e)*.7,pe.getY(_e));let Ue=Ae.index.array;for(let _e=0;_e<Ue.length;_e+=3){let Ge=Ue[_e+1];Ue[_e+1]=Ue[_e+2],Ue[_e+2]=Ge}let re=Ae.attributes.normal;for(let _e=0;_e<re.count;_e++)re.setXYZ(_e,-re.getX(_e),-re.getY(_e),-re.getZ(_e));let te=new Fe(Ae,_);te.receiveShadow=!0,u.add(te)}Y("ca",yc[0],yc[1],d),Y("cb",_c[0],_c[1],d),Y("cas",yc[0],yc[1],u,.003),Y("cbs",_c[0],_c[1],u,.003),V(-4.9,4.9,Mr-.002,Mr+.0012,Cs,Cs+.012,T,d,{cast:!1,receive:!1}),s(9.8,.012,.016,v,0,Mr+.004,Cs+.008,u,{r:.005,cast:!1});let Q=Mr+.05,be=o.whitePlastic;r(.024,-.12-Q,be,Si,(Q-.12)/2,_i,d),r(.034,.1,o.rubber,Si,-2.3,_i,d,{seg:16}),[-2.34,-2.26].forEach(N=>r(.036,.012,o.galv,Si,N,_i,d,{seg:16,cast:!1})),a([[Si,-.2,_i],[Si,-.13,_i+.02],[Si,-.12,_i+.1]],.024,be,d,{radial:12,seg:10}),r(.024,4-_i-.1,be,Si,-.12,(_i+.1+3.99)/2,d,{axis:"z"}),a([[Si+.06,Q+.03,_i+.05],[Si+.05,-2.4,_i+.03],[Si+.03,-1.6,_i+.03],[Si+.03,-.26,_i+.03]],.004,o.rubber,d,{radial:5,cast:!1}),r(.345,.022,o.blackPlastic,Si+.012,Q+.011,_i-.016,p,{seg:40}).rotation.set(.015,0,-.012),r(.055,.003,T,Si,Q+.024,_i,p,{seg:20,cast:!1}),s(.035,.004,.05,T,Si+.06,Q+.023,_i+.06,p,{cast:!1});{r(.35,.02,o.blackPlastic,Si,Q+.01,_i,u,{seg:40});let N=new Fe(new Qi(.346,.006,6,48),v);N.rotation.x=Math.PI/2,i.place(N,Si,Q+.004,_i,u,{cast:!1});for(let ae=0;ae<10;ae++){let ue=ae/10*Math.PI*2;r(.009,.008,o.galv,Si+Math.cos(ue)*.318,Q+.024,_i+Math.sin(ue)*.318,u,{seg:8,cast:!1})}r(.036,.016,o.rubber,Si,Q+.026,_i,u,{seg:16,cast:!1}),r(.011,.012,o.rubber,Si+.06,Q+.025,_i+.05,u,{seg:10,cast:!1}),I.plane("sump",.16,u,Si-.1,Q+.0215,_i+.15,{rot:[-Math.PI/2,0,.35]})}s(.9,.022,.2,o.plywood,fi.x,fi.y-.011,fi.z,d,{uv:{ox:1,oz:1}}),[-.33,.33].forEach(N=>{let ae=fi.x+N;s(.022,.15,.004,B,ae,fi.y-.097,Cs+.002,d,{cast:!1}),s(.022,.004,.17,B,ae,fi.y-.024,Cs+.087,d,{cast:!1});let ue=s(.016,.004,.2,B,ae,fi.y-.085,Cs+.077,d,{cast:!1});ue.rotation.x=-.71,[-.05,-.13].forEach(we=>r(.006,.006,o.galv,ae,fi.y+we,Cs+.006,d,{axis:"z",seg:8,cast:!1}))}),r(.034,.016,o.greyPlastic,fi.x-.24,fi.y+.008,fi.z+.01,d,{seg:28}),r(.03,.004,o.blackPlastic,fi.x-.24,fi.y+.018,fi.z+.01,d,{seg:28,cast:!1}),I.plane("alpha",.056,d,fi.x-.24,fi.y+.0205,fi.z+.01,{rot:[-Math.PI/2,0,.2]});{let N=new mt;N.position.set(Er.x,fi.y,Er.z),N.rotation.y=-.22,d.add(N),s(.105,.155,.04,o.whitePlastic,0,.0775,0,N,{r:.012}),s(.092,.074,.003,o.blackPlastic,0,.105,.02,N,{cast:!1}),j.plane("mon",.086,N,0,.105,.0218);for(let ae=0;ae<5;ae++)s(.05,.003,.002,o.greyPlastic,0,.022+ae*.008,.0202,N,{cast:!1})}let Ve=Math.sin($a),Ne=Math.cos($a);r(Qn,gs-.24-(Xn-.08),R,nn,(gs-.24+Xn-.08)/2,xn,u,{seg:28}),r(Qn,qo-gs-.22,R,nn,(qo+gs+.22)/2,xn,u,{seg:28}),r(Qn+.014,.012,v,nn,Mr+.005,xn,u,{seg:28,cast:!1}),[-1.95,-.62,2,5].forEach(N=>r(Qn+.006,.07,R,nn,N,xn,u,{seg:28})),s(.91,.14,.038,o.plywood,-1.5,-.18,xn-Qn-.022,u,{uv:!0});{let N=new Fe(new Qi(Qn+.003,.0022,4,24,Math.PI),o.galv);N.rotation.set(-Math.PI/2,0,0),i.place(N,nn,-.16,xn,u,{cast:!1}),[-1,1].forEach(ae=>{s(.028,.03,.002,o.galv,nn+ae*(Qn+.016),-.16,xn-Qn-.002,u,{cast:!1}),r(.005,.004,o.galv,nn+ae*(Qn+.02),-.16,xn-Qn+.001,u,{axis:"z",seg:8,cast:!1})})}q(I,"warn",.11,Qn+.0012,nn,-1.18,xn,$a,u),q(I,"info",.1,Qn+.0012,nn,-2.18,xn,$a,u),q(I,"air",.07,Qn+.0012,nn,-.88,xn,$a,u);let rt=[];{let N=new mt;N.position.set(nn+Ve*(Qn+.014),-1.58,xn+Ne*(Qn+.014)),N.rotation.y=$a,u.add(N),s(.064,.2,.006,o.whitePlastic,0,0,0,N,{r:.003}),I.plane("scale",.026,N,0,-.005,.0034),[.075,-.075].forEach(we=>s(.03,.014,.014,o.whitePlastic,0,we,-.009,N,{cast:!1}));let ae=o.glassClear;[-.019,.019].forEach(we=>r(.0042,.16,ae,we,0,.009,N,{seg:10,cast:!1}));let ue=[[-.019,-.08,.009],[-.019,-.088,.009],[-.012,-.096,.009],[0,-.098,.009],[.012,-.096,.009],[.019,-.088,.009],[.019,-.08,.009]];a(ue,.0042,ae,N,{radial:8,seg:16,cast:!1}),a(ue,.003,P,N,{radial:6,seg:16,cast:!1}),[-.019,.019].forEach(we=>{let ze=new pn(.003,.003,1,8);ze.translate(0,.5,0);let z=new Fe(ze,P);z.position.set(we,-.08,.009),z.userData.keep=!0,z.castShadow=!1,N.add(z),rt.push(z)}),r(.0055,.008,o.blackPlastic,.019,.083,.009,N,{seg:10,cast:!1}),a([[-.019,.08,.009],[-.019,.1,.01],[-.024,.118,0],[-.022,.124,-.014]],.003,o.glassClear,N,{radial:6,seg:12,cast:!1}),r(.007,.008,o.rubber,-.022,.124,-.016,N,{axis:"z",seg:10,cast:!1}),[.075,-.075].forEach(we=>{let ze=new Fe(new Qi(Qn+.0015,.0018,4,32),o.blackPlastic);ze.rotation.x=Math.PI/2,i.place(ze,nn,-1.58+we,xn,u,{cast:!1})})}{let N=o.whitePlastic,ae=o.greyPlastic,ue=re=>{r(Qn+.011,.1,o.rubber,nn,re,xn,u,{seg:28}),[re-.03,re+.03].forEach((te,_e)=>{r(Qn+.0125,.012,o.galv,nn,te,xn,u,{seg:28,cast:!1});let Ge=$a-1.1+_e*.5;s(.016,.012,.012,o.galv,nn+Math.sin(Ge)*(Qn+.018),te,xn+Math.cos(Ge)*(Qn+.018),u,{rot:[0,Ge,0],cast:!1})})};ue(gs-.27),ue(gs+.27),r(Qn+.002,.06,ae,nn,gs-.2,xn,u,{seg:28}),r(Qn+.002,.06,ae,nn,gs+.2,xn,u,{seg:28}),r(.07,.06,N,nn,gs-.11,xn,u,{seg:36,r2:.135}),r(.135,.06,N,nn,gs+.11,xn,u,{seg:36,r2:.07}),r(.135,.16,N,nn,gs,xn,u,{seg:36}),r(.1375,.012,ae,nn,gs+.02,xn,u,{seg:36,cast:!1}),q(I,"fan",.16,.1365,nn,gs-.03,xn,-.9,u);let we=Math.atan(.72),ze=re=>Vm(re)-.2466;[-3,-2.4,-1.8,-1.2,-.6,0].forEach(re=>s(4.84/Math.cos(we),.14,.038,o.plywood,-2.48,ze(-2.48)-.07/Math.cos(we),re,u,{rot:[0,0,we],uv:!0})),s(.038,.18,4.2,o.plywood,0,ze(0)-.09,-1.5,u,{uv:!0});let z={x:nn-.35,z:-1.8},Ae=ze(z.x)-.14/Math.cos(we);s(.089,Ae-6.37,.038,o.plywood,z.x,(Ae+6.37)/2,z.z,u,{uv:!0}),s(.11,.11,.055,o.greyPlastic,z.x,7.75,z.z+.047,u,{r:.006}),s(.018,.03,.014,o.blackPlastic,z.x,7.77,z.z+.081,u,{cast:!1}),I.plane("jbox",.075,u,z.x,7.72,z.z+.0752);let pe=[nn+Math.sin(Math.PI+.25)*.135,gs-.04,xn+Math.cos(Math.PI+.25)*.135];r(.008,.016,o.blackPlastic,pe[0],pe[1],pe[2]-.006,u,{axis:"z",seg:10,cast:!1}),a([[pe[0],pe[1],pe[2]-.012],[pe[0]+.02,pe[1]-.12,pe[2]-.1],[z.x+.02,7.62,z.z+.12],[z.x,7.69,z.z+.06]],.0045,o.blackPlastic,u,{radial:6,cast:!1}),a([[z.x+.03,7.69,z.z+.05],[z.x+.05,7.4,z.z+.03],[z.x+.055,6.6,z.z+.025],[z.x+.2,6.42,z.z+.1]],.006,o.rubber,u,{radial:6,cast:!1}),[-1,1].forEach(re=>{s(.34,.03,.006,o.galv,nn,6.44,xn+re*(Qn+.004),u,{cast:!1}),[-.15,.15].forEach(te=>r(.006,.03,o.galv,nn+te,6.44,xn,u,{axis:"z",seg:8,cast:!1}))});let Be=Vm(nn),Ue=Math.atan(.72);s(.42,.006,.42,o.galv,nn,Be+.003/Math.cos(Ue),xn,u,{rot:[0,0,Ue],cast:!1}),r(.13,.15,o.rubber,nn,Be+.09,xn,u,{seg:28,r2:Qn+.008}),r(Qn+.012,.02,o.galv,nn,Be+.2,xn,u,{seg:28,cast:!1}),r(Qn+.004,.02,o.galv,nn,qo-.005,xn,u,{seg:28,cast:!1}),r(Qn-.004,.002,T,nn,qo-.004,xn,u,{seg:24,cast:!1})}let Et=new Set([R,o.plywood,o.whitePlastic,o.blackPlastic,o.rubber,y]);[d,p,u].forEach(N=>N.traverse(ae=>{ae.isMesh&&!ae.isInstancedMesh&&(ae.castShadow=Et.has(ae.material)&&ae.renderOrder===0,ae.receiveShadow=!0)})),i.bake(d),i.bake(p),i.bake(u);let he=14257407,Se=i.particles(300,{color:he,size:.065,gain:2.2}),Oe=Se.userData.n,Re=Se.userData.pos,Ye=new Float32Array(Oe*4),ee=new Float32Array(Oe*3),Je=(N,ae)=>{Re[N*3]=ct(Ci+.03,Pi-.03,f()),Re[N*3+1]=ae?ct(Qf,Xn-.03,f()):Qf+f()*.08,Re[N*3+2]=ct(jn+.02,as-.05,f()),Ye[N*4]=.05+f()*.08,Ye[N*4+1]=f()*6.28;let ue=f(),we=(f()-.5)*.6;ue<.4?(Ye[N*4+2]=we,Ye[N*4+3]=-1):ue<.6?(Ye[N*4+2]=-1,Ye[N*4+3]=we):ue<.75?(Ye[N*4+2]=1,Ye[N*4+3]=we):(Ye[N*4+2]=we,Ye[N*4+3]=1)};for(let N=0;N<Oe;N++){Je(N,!0);let ae=f();ee[N*3]=ct(Re[N*3],Zo.x,ae),ee[N*3+1]=ct(Re[N*3+1],Zo.y,ae*ae),ee[N*3+2]=ct(Re[N*3+2],Zo.z,ae)}let oe=Re.slice(),xe=i.particles(170,{color:he,size:.055,gain:1.8}),ie=xe.userData.n,de=xe.userData.pos,Me=new Float32Array(ie*4),$e=(N,ae,ue,we)=>{ue[we*3]=ct(N[0][0],N[1][0],ae),ue[we*3+2]=ct(N[0][1],N[1][1],ae)},qe=(N,ae)=>{let ue=f();if(ue<.3)$e(yc,f(),de,N);else if(ue<.48)$e(_c,f(),de,N);else if(ue<.8)de[N*3]=ct(Wm[0],Wm[1],f()),de[N*3+2]=Cs+.012;else{let we=f()*6.283,ze=f()<.4?.06:.35;de[N*3]=Si+Math.cos(we)*ze,de[N*3+2]=_i+Math.sin(we)*ze}if(de[N*3+1]=Mr+.01,Me[N*4]=.03+f()*.11,Me[N*4+1]=f()*6.28,Me[N*4+2]=4+f()*10,Me[N*4+3]=0,ae){let we=f()*Me[N*4+2];Me[N*4+3]=we,de[N*3+1]+=Me[N*4]*we*.85}};for(let N=0;N<ie;N++)qe(N,!0);let ut=i.particles(80,{color:he,size:.08,gain:1.2}),lt=ut.userData.n,J=ut.userData.pos,It=new Float32Array(lt*4),At=(N,ae)=>{if(J[N*3]=nn+(f()-.5)*.05,J[N*3+1]=qo,J[N*3+2]=xn+(f()-.5)*.05,It[N*4]=.45+f()*.35,It[N*4+1]=f()*6.28,It[N*4+2]=2+f()*1.6,It[N*4+3]=0,ae){let ue=f()*It[N*4+2];It[N*4+3]=ue,H(N,ue,0)}},H=(N,ae,ue)=>{let we=It[N*4+3]/It[N*4+2],ze=It[N*4+1];J[N*3+1]+=It[N*4]*(1-.6*we)*ae,J[N*3]+=(-.22*we+Math.sin(ze)*.12*we)*ae,J[N*3+2]+=(.08*we+Math.cos(ze+ue*.3)*.12*we)*ae};for(let N=0;N<lt;N++)At(N,!0);h.add(Se,xe,ut);let S={soil:l(-.45,-3.42,jn+.02),test:l(Er.x,fi.y+.1,Er.z+.03),pit:l(nn,Xn-.12,xn+.04),fan:l(nn-.08,gs,xn+.11),stack:l(nn,qo-.15,xn),after:l(Er.x,fi.y+.1,Er.z+.03)},fe={time:19.4,cut:0,ghost:0,ground:1,orbit:.012},le=[{...fe,radius:15,theta:.6,phi:1.36,fx:-.6,ty:-1.5,fz:-.8,cut:1,ground:0,dof:0,orbit:.025},{...fe,radius:1.6,theta:.2,phi:1.36,fx:Er.x-.05,ty:fi.y+.07,fz:Cs+.1,dof:1.1,narrow:{fx:Er.x-.12}},{...fe,radius:2.9,theta:.38,phi:1.2,fx:nn+.25,ty:-3,fz:xn,dof:1,narrow:{fx:nn+.05}},{...fe,radius:2.6,theta:.5,phi:1.5,fx:nn,ty:8.05,fz:xn,dof:.9,orbit:.012,narrow:{ty:7.85}},{...fe,radius:.78,theta:-.12,phi:1.47,fx:Er.x,ty:fi.y+.1,fz:Er.z+.02,dof:1.3}],ye=0,it=0,st=412,Le=412,Ce=0,Qe=0,vt=-1;return{name:"radon",group:h,anchors:S,shots:le,hides(N){let ae=[...N.sys.radon?N.sys.radon.meshes:[]];return N.sys.foundation&&N.sys.foundation.meshes.forEach(ue=>{Math.abs(ue.position.y+2.88)<.01&&ae.push(ue)}),N.layers.basement.traverse(ue=>{ue.isMesh&&Math.abs(ue.position.x-Si)<.01&&Math.abs(ue.position.z-_i)<.01&&ae.push(ue)}),ae},light(N){return N===0?{pos:[.6,-.6,.9],at:[-.9,-3.1,-1.1],power:.75,fill:.6}:N===1?{pos:[-.3,-.9,-2.4],at:[fi.x+.1,fi.y,Cs],power:.4,fill:.5}:N===2?{pos:[.2,-1.6,.4],at:[nn+.1,Xn-.2,xn],power:.4}:N===3?{pos:[.3,8.85,.3],at:[nn,gs,xn],power:.75,fill:.35}:N===4?{pos:[.2,-1.05,-2.9],at:[Er.x,fi.y+.08,Cs],power:.35,fill:.4}:{pos:[-2.3,-.9,.3],at:[-1,-1.7,-2.4],power:.5}},update({step:N,t:ae,dt:ue,snap:we}){let ze=N>=2?1:0,z=re=>we?1:1-Math.exp(-ue*re);ye=ct(ye,ze,z(1.6)),it=ct(it,ze,z(1.2)),p.visible=!ze,u.visible=!!ze;let Ae=.022*it;rt[0].scale.y=.08+Ae,rt[1].scale.y=.08-Ae,st=N===4?ct(st,45,z(1.3)):ct(st,412,z(6)),Qe=ct(Qe,N===4?1:0,z(1.3));let pe=Math.round(st),Be=Math.round(Qe*20)/20;if((pe!==Le||Be!==Ce)&&(Le=pe,Ce=Be,j.set("mon",void 0,void 0,{value:pe,after:Be})),xe.material.opacity=1-ye,xe.visible=ye<.98,ut.material.opacity=Rt(.3,1,it),ut.visible=it>.3,n){let re=ye>.5?1:0;re!==vt&&(vt=re,Re.set(re?ee:oe),Se.geometry.attributes.position.needsUpdate=!0);return}let Ue=Math.min(ue,.05);for(let re=0;re<Oe;re++){let te=Re[re*3],_e=Re[re*3+1],Ge=Re[re*3+2],dt=Ye[re*4],Ut=Ye[re*4+1],Kt=Math.sin(ae*.9+Ut)*.02,sn=dt,kt=Math.cos(ae*.7+Ut)*.02,Tn=Rt(As-.03,Xn-.03,_e);Kt+=Ye[re*4+2]*.14*Tn,kt+=Ye[re*4+3]*.14*Tn,sn*=1-Tn;let Mn=Zo.x-te,C=Zo.y-_e,Te=Zo.z-Ge,He=Math.hypot(Mn,C,Te)+1e-4,at=(.12+dt)*(.7+.35/(He+.2)),ot=Mn/He*at+Math.sin(ae*1.3+Ut)*.015,Ht=C/He*at,Pt=Te/He*at;Re[re*3]=te+ct(Kt,ot,ye)*Ue,Re[re*3+1]=Math.min(_e+ct(sn,Ht,ye)*Ue,Xn-.015),Re[re*3+2]=Ge+ct(kt,Pt,ye)*Ue,(Re[re*3]<Ci-.03||Re[re*3]>Pi+.03||Re[re*3+2]<jn-.04||Re[re*3+2]>as+.03||ye>.5&&He<.06)&&Je(re,!1)}if(Se.geometry.attributes.position.needsUpdate=!0,xe.visible){for(let re=0;re<ie;re++){let te=Me[re*4+1];if(Me[re*4+3]+=Ue,Me[re*4+3]>Me[re*4+2]){qe(re,!1);continue}de[re*3+1]+=Me[re*4]*Ue*(1-.3*Me[re*4+3]/Me[re*4+2]),de[re*3]+=Math.sin(ae*.5+te)*.035*Ue,de[re*3+2]+=Math.cos(ae*.4+te*1.3)*.035*Ue}xe.geometry.attributes.position.needsUpdate=!0}if(ut.visible){for(let re=0;re<lt;re++)It[re*4+3]+=Ue,It[re*4+3]>It[re*4+2]?At(re,!1):H(re,Ue,ae);ut.geometry.attributes.position.needsUpdate=!0}}}}var Nt=-2.8,Gn=-.27,ra=1.8,Yi=4.88,ei=-2.93,Ku=2.45,ns=Yi-ra,is=Ku-ei,cr=(ra+Yi)/2,Hs=(ei+Ku)/2,zs=.6,qu=4.9375,Mc=-2.9875,Sr=.3,xs=1.24,Gs=new F(4.775,-.45,-.7),os=new F(2.75,Nt,-1.45),Un=new F(2.22,1.29,-3.42),Aa=1.585,Zu=Aa-1.29-.012,$u=-3.26- -3.42,bi={x0:-.4,x1:Yi,z0:ei,z1:2.62},br=(i,e,t)=>{let n=document.createElement("canvas");return n.width=i,n.height=e,t(n.getContext("2d"),i,e),n},ks=(i,e={})=>{let t=new Wn(i);return e.color!==!1&&(t.colorSpace=yn),e.wrap!==!1&&(t.wrapS=t.wrapT=Zn),e.repeat&&t.repeat.set(e.repeat[0],e.repeat[1]),t.anisotropy=8,t},Ju=(i,e,t,n,s,r)=>{i.save(),i.translate(e,t),i.scale(1,s/n);let a=i.createRadialGradient(0,0,0,0,0,n);r.forEach(([o,c])=>a.addColorStop(o,c)),i.fillStyle=a,i.beginPath(),i.arc(0,0,n,0,6.2832),i.fill(),i.restore()};function Ym({kit:i,M:e}){let{box:t,cyl:n,sphere:s,tube:r,mats:a,atlas:o,V:c}=i,l=new mt,h=new mt;l.add(h);let d=(L=l)=>{let ce=new mt;return L.add(ce),ce},p=L=>{let ce=new Map,We=et=>{for(let Tt=et;Tt&&Tt!==L;Tt=Tt.parent)if(Tt.userData.keep)return!0;return!1},ke=[];L.traverse(et=>{et.isMesh&&!We(et)&&ke.push(et)}),ke.forEach(et=>{let Tt=ce.get(et.material)||{cast:!1,recv:!1};Tt.cast||(Tt.cast=et.castShadow),Tt.recv||(Tt.recv=et.receiveShadow),ce.set(et.material,Tt)}),ke.forEach(et=>{let Tt=ce.get(et.material);et.castShadow=Tt.cast,et.receiveShadow=Tt.recv})},u=L=>(p(L),i.bake(L),L.userData.keep=!0,L),f=(L,ce,We,ke,et,Tt,Vt,Ft={})=>{let on=new an(L,ce);if(Ft.u){let Xt=on.attributes.uv;for(let Gt=0;Gt<Xt.count;Gt++)Xt.setX(Gt,ct(Ft.u[0],Ft.u[1],Xt.getX(Gt)))}Ft.base&&on.translate(0,ce/2,0),Ft.edge&&on.translate(-L/2,0,0);let vn=i.place(new Fe(on,We),et,Tt,Vt,ke,{cast:!1,...Ft});return Ft.ry&&(vn.rotation.y=Ft.ry),Ft.rx&&(vn.rotation.x=Ft.rx),vn},x=Nn(72),g=.2286,m=ks(br(512,512,L=>{for(let We=0;We<4;We++)for(let ke=0;ke<4;ke++){let et=(We+ke)%2===1,Tt=(et?128:172)+(x()-.5)*14;L.fillStyle=`rgb(${Tt|0},${Tt*.93|0},${Tt*.78|0})`,L.fillRect(We*128,ke*128,128,128);for(let Vt=0;Vt<16;Vt++){let Ft=We*128+x()*128,on=ke*128+x()*128,vn=x()*6.28,Xt=10+x()*34;L.strokeStyle=x()>.5?`rgba(255,246,222,${.06+x()*.1})`:`rgba(60,46,30,${.06+x()*.1})`,L.lineWidth=1+x()*2.5,L.beginPath(),L.moveTo(Ft,on),L.quadraticCurveTo(Ft+Math.cos(vn+1)*Xt*.5,on+Math.sin(vn+1)*Xt*.5,Ft+Math.cos(vn)*Xt,on+Math.sin(vn)*Xt),L.stroke()}}L.strokeStyle="rgba(48,38,26,.55)",L.lineWidth=2;for(let We=0;We<=4;We++)L.beginPath(),L.moveTo(We*128,0),L.lineTo(We*128,512),L.moveTo(0,We*128),L.lineTo(512,We*128),L.stroke();Ju(L,300,260,220,170,[[0,"rgba(70,56,36,.16)"],[1,"rgba(70,56,36,0)"]])}),{repeat:[ns/(4*g),is/(4*g)]}),M=ks(br(256,256,(L,ce,We)=>{L.fillStyle="#7a7a7a",L.fillRect(0,0,ce,We);for(let ke=0;ke<2600;ke++){let et=x()>.3?150+x()*100:30+x()*50;L.fillStyle=`rgba(${et|0},${et|0},${et|0},${.5+x()*.5})`,L.beginPath(),L.arc(x()*ce,x()*We,.8+x()*x()*4.2,0,6.2832),L.fill()}}),{color:!1,repeat:[ns/.32,is/.32]}),b=br(32,4,(L,ce)=>{for(let We=0;We<ce;We++){let ke=128+120*Math.sin(We/ce*6.2832);L.fillStyle=`rgb(${ke|0},${ke|0},${ke|0})`,L.fillRect(We,0,1,4)}}),y=ks(b,{color:!1,repeat:[1/.045,1]}),_=ks(b,{color:!1,repeat:[1/.014,1]}),w=br(256,256,(L,ce)=>{L.fillStyle="#000",L.fillRect(0,0,ce,ce),L.filter="blur(4px)",L.fillStyle="#fff",L.beginPath();for(let We=0;We<=96;We++){let ke=We/96*6.2832,et=ce*.4*(1+.08*Math.sin(3*ke+1)+.05*Math.sin(7*ke+2)+.025*Math.sin(17*ke));L[We?"lineTo":"moveTo"](ce/2+Math.cos(ke)*et,ce/2+Math.sin(ke)*et)}L.fill(),L.filter="none"}),A=L=>{let ce=ks(w,{color:!1,wrap:!1});return ce.center.set(L.cu,L.cv),ce.offset.set(.5-L.cu,.5-L.cv),ce},v=br(128,128,(L,ce,We)=>{let ke=L.createImageData(ce,We),et=6.2832/ce,Tt=(Vt,Ft)=>Math.sin(et*(2*Vt+Ft))*.5+Math.sin(et*(-Vt+3*Ft)+1.3)*.35+Math.sin(et*(5*Vt-2*Ft)+2.1)*.2+Math.sin(et*(3*Vt+5*Ft)+.4)*.15;for(let Vt=0;Vt<We;Vt++)for(let Ft=0;Ft<ce;Ft++){let on=(Tt(Ft+1,Vt)-Tt(Ft-1,Vt))*2.2,vn=(Tt(Ft,Vt+1)-Tt(Ft,Vt-1))*2.2,Xt=Math.hypot(on,vn,1),Gt=(Vt*ce+Ft)*4;ke.data[Gt]=(-on/Xt*.5+.5)*255,ke.data[Gt+1]=(-vn/Xt*.5+.5)*255,ke.data[Gt+2]=(1/Xt*.5+.5)*255,ke.data[Gt+3]=255}L.putImageData(ke,0,0)}),R=ks(br(1024,128,(L,ce,We)=>{let ke=[];for(let Vt=0;Vt<=ce;Vt+=8)ke.push(We*.13+Math.sin(Vt*.013)*5+Math.sin(Vt*.051+1)*3+(x()-.5)*3);let et=Vt=>{L.beginPath(),ke.forEach((Ft,on)=>L[on?"lineTo":"moveTo"](on*8,Ft+Vt))},Tt=L.createLinearGradient(0,0,0,We);Tt.addColorStop(0,"rgba(96,70,40,.22)"),Tt.addColorStop(1,"rgba(56,40,22,.66)"),L.fillStyle=Tt,et(0),L.lineTo(ce,We),L.lineTo(0,We),L.fill(),L.strokeStyle="rgba(72,50,26,.8)",L.lineWidth=3,et(0),L.stroke(),L.strokeStyle="rgba(80,58,30,.35)",L.lineWidth=2,et(16),L.stroke()}),{wrap:!1}),P=ks(br(2048,256,(L,ce,We)=>{for(let ke=0;ke<54;ke++){let et=x()*ce,Tt=We*(.5+x()*.5),Vt=18+x()*70,Ft=30+x()*120|0;Ju(L,et,Tt,Vt*1.4,Vt*1.1,[[0,"rgba(38,46,28,.42)"],[1,"rgba(38,46,28,0)"]]);for(let on=0;on<Ft;on++){let vn=x()*6.2832,Xt=Vt*Math.sqrt(x());L.fillStyle=x()>.3?`rgba(16,20,12,${.55+x()*.4})`:`rgba(86,106,64,${.4+x()*.4})`,L.beginPath(),L.arc(et+Math.cos(vn)*Xt,Tt+Math.sin(vn)*Xt*.8,.8+x()*x()*5,0,6.2832),L.fill()}}}),{wrap:!1}),B=ks(br(256,256,(L,ce,We)=>{for(let ke=0;ke<30;ke++){let et=ke/29;Ju(L,ce/2+(x()-.5)*50*et,We*(.96-et*.62),ce*(.06+.36*et),We*(.07+.2*et),[[0,`rgba(12,10,8,${.42*(1-.5*et)})`],[1,"rgba(12,10,8,0)"]])}for(let ke=0;ke<40;ke++){let et=ce*(.3+x()*.4);L.strokeStyle=`rgba(10,8,6,${.04+x()*.06})`,L.lineWidth=2+x()*6,L.beginPath(),L.moveTo(et,We),L.lineTo(et+(et-ce/2)*.8,We*(.2+x()*.3)),L.stroke()}}),{wrap:!1}),T=ks(br(512,512,(L,ce,We)=>{let ke=ce/6;for(let et=0;et<6;et++){let Tt=x()*We;[[0,Tt],[Tt,We]].forEach(([Vt,Ft])=>{let on=150+(x()-.5)*26;L.fillStyle=`rgb(${on|0},${on*.9|0},${on*.76|0})`,L.fillRect(et*ke,Vt,ke,Ft-Vt);for(let vn=0;vn<22;vn++){let Xt=et*ke+x()*ke;L.strokeStyle=`rgba(${x()>.5?"70,52,32":"220,200,170"},${.05+x()*.08})`,L.lineWidth=.6+x()*1.6,L.beginPath(),L.moveTo(Xt,Vt),L.bezierCurveTo(Xt+4,Vt+(Ft-Vt)*.3,Xt-4,Vt+(Ft-Vt)*.7,Xt+(x()-.5)*6,Ft),L.stroke()}}),L.fillStyle="rgba(40,30,20,.5)",L.fillRect(et*ke,Tt-1,ke,2),L.fillRect(et*ke,0,2,We)}}),{repeat:[ns/1.2,is/1.2]}),U=ks(br(256,128,(L,ce,We)=>{L.fillStyle="#c2beb2",L.fillRect(0,0,ce,We),[[0,0],[1,0],[-.5,1],[.5,1],[1.5,1]].forEach(([ke,et])=>{let Tt=ke*128+2,Vt=et*64+2,Ft=120+(x()-.5)*12;L.fillStyle=`rgb(${Ft*.86|0},${Ft|0},${Ft*.96|0})`,L.fillRect(Tt,Vt,124,60),L.fillStyle="rgba(255,255,255,.12)",L.fillRect(Tt+4,Vt+4,116,10)})}),{repeat:[3.57/.3,.61/.15]}),I=new xt(11575946),G=new xt(11450028),j=new xt(11774872),q=new xt(11974832),Y=i.std(I.getHex(),.88),V=i.std(9077104,.95),W=i.std(12170150,.45),Q=i.std(j.getHex(),.95,0,{bumpMap:M,bumpScale:3}),be=i.std(16777215,.5,0,{map:m}),Ve=i.std(16777215,.55,0,{map:T}),Ne=i.std(3812386,.5),rt=i.std(16777215,.25,0,{map:U}),Et=i.std(9343639,.5,.4,{bumpMap:y,bumpScale:1.5}),he=i.std(12103837,.92,0,{bumpMap:_,bumpScale:2.5}),Se=i.std(3104680,.45,.05,{side:oi}),Oe=(L,ce={})=>{let We=new ln({map:L,transparent:!0,depthWrite:!1,roughness:.9,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2,...ce});return We.userData.th=[.5],We},Re=Oe(R),Ye=Oe(P),ee=Oe(B),Je=ks(v,{color:!1,repeat:[(bi.x1-bi.x0)/.7,(bi.z1-bi.z0)/.7]}),oe=a.water.clone();oe.alphaMap=A({cu:(Gs.x-bi.x0)/(bi.x1-bi.x0),cv:(bi.z1-Gs.z)/(bi.z1-bi.z0)}),oe.normalMap=Je,oe.normalScale.set(.4,.4),oe.opacity=.74,oe.color.set(2906748),oe.roughness=.1,oe.ior=1.33,oe.envMapIntensity=2.4;let xe=3.8,ie=a.sewage.clone();ie.alphaMap=A({cu:.5,cv:.5}),ie.normalMap=ks(v,{color:!1,repeat:[xe/.5,xe/.5]}),ie.normalScale.set(.1,.1),ie.color.set(4930079),ie.opacity=.93,ie.roughness=.28,ie.envMapIntensity=1.8;let de=ie.clone();de.envMapIntensity=.35,de.color.set(5915940),de.alphaMap=null,de.normalMap=null;let $e=o([{key:"tag",text:"MAIN SHUT-OFF",w:256,h:64,size:30,color:"#16181c",bg:"#e9c22e"},{key:"reg",text:"0412.7",sub:"m\xB3",w:160,h:72,size:34,color:"#1a1c20",bg:"#d9d4c4"},{key:"cat3",w:240,h:320,draw(L,ce,We){L.fillStyle="#e3bd2c",L.fillRect(0,0,ce,We),L.fillStyle="#121316",L.fillRect(0,26,ce,58),L.textAlign="center",L.textBaseline="middle",L.fillStyle="#e3bd2c",L.font="800 40px ui-sans-serif, Arial, sans-serif",L.fillText("CAUTION",ce/2,56),L.fillStyle="#121316",L.font="800 34px ui-sans-serif, Arial, sans-serif",L.fillText("CATEGORY 3",ce/2,132),L.fillText("WATER",ce/2,172),L.font="600 21px ui-sans-serif, Arial, sans-serif",L.fillText("SEWAGE \xB7 NO ENTRY",ce/2,226),L.fillText("WITHOUT PPE",ce/2,256)}},{key:"hepa",text:"HEPA \xB7 99.97 %",w:256,h:44,size:24,color:"#cfd4da"},{key:"zip",text:"CONTAINMENT",sub:"KEEP ZIPPED SHUT",w:288,h:84,size:34,color:"#16181c",bg:"#e9c22e"},{key:"mano",text:"\u22126 Pa",sub:"NEGATIVE AIR",w:176,h:96,size:40,color:"#8fd3a6",bg:"#05070b"},{key:"asb",text:"ASBESTOS SAMPLING",sub:"DO NOT DISTURB",w:384,h:92,size:34,color:"#ff6b4f",bg:"#e6e1d4"},{key:"s1",text:"S-01",sub:"CEILING TEXTURE",w:176,h:72,size:32,color:"#16181c",bg:"#e6e1d4"},{key:"s2",text:"S-02",sub:"9\xD79 FLOOR TILE",w:176,h:72,size:32,color:"#16181c",bg:"#e6e1d4"},{key:"s3",text:"S-03",sub:"PIPE WRAP",w:176,h:72,size:32,color:"#16181c",bg:"#e6e1d4"},{key:"lab",w:300,h:384,draw(L,ce){L.fillStyle="#d8d3c5",L.fillRect(0,0,ce,384),L.textAlign="left",L.textBaseline="middle",L.fillStyle="#16181c",L.font="700 22px ui-monospace, Menlo, monospace",L.fillText("LAB RESULTS \xB7 PLM",16,30),L.font="500 14px ui-monospace, Menlo, monospace",L.fillStyle="#4a4d52",L.fillText("BULK SAMPLES \xB7 3",16,58),L.fillStyle="#16181c",L.fillRect(16,74,ce-32,2),[["S-01 CEILING","NONE DETECTED","#2f7a4c"],["S-02 FLOOR TILE","CHRYSOTILE 3 %","#c2402b"],["S-03 PIPE WRAP","CHRYSOTILE 60 %","#c2402b"]].forEach(([We,ke,et],Tt)=>{let Vt=108+Tt*78;L.fillStyle="#16181c",L.font="700 18px ui-monospace, Menlo, monospace",L.fillText(We,16,Vt),L.fillStyle=et,L.font="700 20px ui-monospace, Menlo, monospace",L.fillText(ke,16,Vt+28),L.fillStyle="rgba(20,22,26,.3)",L.fillRect(16,Vt+50,ce-32,1)}),L.fillStyle="#c2402b",L.font="800 20px ui-monospace, Menlo, monospace",L.fillText("ABATE BEFORE DEMO",16,352)}},{key:"rh",text:"RH 46 %",sub:"PUMP ON",w:176,h:88,size:36,color:"#9fc4ff",bg:"#05070b"},{key:"mm",text:"28",sub:"% WOOD",tone:"#ff6b4f",w:200,h:120,draw(L,ce,We,ke){L.fillStyle="#05070b",L.fillRect(0,0,ce,We),L.textAlign="left",L.textBaseline="middle",L.fillStyle="#8b93a1",L.font="600 15px ui-monospace, Menlo, monospace",L.fillText("MOISTURE",14,20),L.fillStyle=ke.tone,L.font="700 58px ui-monospace, Menlo, monospace",L.fillText(ke.text,12,66),L.fillStyle="#cfd4da",L.font="500 17px ui-monospace, Menlo, monospace",L.fillText(ke.sub,98,76),L.fillStyle="#1c222c",L.fillRect(14,102,ce-28,8),L.fillStyle=ke.tone,L.fillRect(14,102,(ce-28)*Zt((+ke.text-6)/26,.05,1),8)}}],{width:1024,emissive:.25});for(let L=ei+.06;L<Ku;L+=.406)t(.089,Gn-Nt-.076,.038,a.studs,qu,(Nt+Gn)/2,L,h,{cast:!1,uv:!0});t(.089,.038,is,a.studs,qu,Nt+.019,Hs,h,{cast:!1,uv:!0}),t(.089,.038,is,a.studs,qu,Gn-.019,Hs,h,{cast:!1,uv:!0});let qe=Gn-Nt-zs;t(.013,qe,is,Y,Yi+.0065,Nt+zs+qe/2,Hs,h),t(.115,Gn-Nt,.013,Y,qu-.004,(Nt+Gn)/2,Ku+.0065,h);for(let L=ra+.04;L<Yi;L+=.406)t(.038,Gn-Nt-.076,.089,a.studs,L,(Nt+Gn)/2,Mc,h,{cast:!1,uv:!0});t(ns,.038,.089,a.studs,cr,Nt+.019,Mc,h,{cast:!1,uv:!0}),t(ns,.038,.089,a.studs,cr,Gn-.019,Mc,h,{cast:!1,uv:!0}),t(ns,qe,.013,Y,cr,Nt+zs+qe/2,ei-.0065,h),t(ns,Gn-Nt,.013,V,cr,(Nt+Gn)/2,Mc-.051,h),t(.013,Gn-Nt,.128,Y,ra-.0065,(Nt+Gn)/2,Mc,h);let ut=f(ns,is,Q,l,cr,Gn,Hs,{rx:Math.PI/2,receive:!0,keep:!0}),lt=2.95,J=-2.24,It=-.47;t(lt-ra,.013,J-ei,Y,(ra+lt)/2,It,(ei+J)/2,h),t(lt-ra,Gn-It,.013,Y,(ra+lt)/2,(It+Gn)/2,J,h),t(.013,Gn-It,J-ei,Y,lt,(It+Gn)/2,(ei+J)/2,h),f(ns,is,be,h,cr,Nt+.003,Hs,{rx:-Math.PI/2,receive:!0}),t(.045,.008,is,a.galv,ra+.02,Nt+.004,Hs,h,{cast:!1}),n(.095,.008,a.castIron,os.x,Nt+.004,os.z,h,{seg:24,cast:!1}),n(.074,.006,a.galv,os.x,Nt+.009,os.z,h,{seg:24,cast:!1});for(let L=-2;L<=2;L++)t(.012,.002,.11-Math.abs(L)*.018,a.blackPlastic,os.x+L*.024,Nt+.0125,os.z,h,{cast:!1});let At=d();t(.013,zs,is,Y,Yi+.0065,Nt+zs/2,Hs,At),t(ns,zs,.013,Y,cr,Nt+zs/2,ei-.0065,At),t(.012,.09,is,W,Yi-.006,Nt+.045,Hs,At,{cast:!1}),t(ns,.09,.012,W,cr,Nt+.045,ei+.006,At,{cast:!1});let H=d(At);H.position.y=Nt,f(is,.46,Re,H,Yi-.0125,0,Hs,{ry:-Math.PI/2,base:!0}),f(ns,.46,Re,H,cr,0,ei+.0125,{base:!0,u:[0,ns/is]}),u(H),f(is,zs,Ye,At,Yi-.0128,Nt,Hs,{ry:-Math.PI/2,base:!0}),f(ns,zs,Ye,At,cr,Nt,ei+.0128,{base:!0,u:[.2,.2+ns/is]}),u(At);let S=d();S.position.y=Nt,t(.013,zs,is,Y,Yi+.0065,zs/2,Hs,S),t(.012,.09,is,W,Yi-.006,.045,Hs,S,{cast:!1}),t(ns,zs,.013,Y,cr,zs/2,ei-.0065,S),t(ns,.09,.012,W,cr,.045,ei+.006,S,{cast:!1}),u(S);let fe=f(ns,is,Ve,l,Yi,Nt+.007,Hs,{rx:-Math.PI/2,edge:!0,keep:!0,receive:!0}),le=-.62,ye=ei+.1,it=[[2.3,It,ye],[2.3,le+.06,ye],[2.33,le+.008,ye],[2.38,le,ye],[3.49,le,ye]],st=[[3.57,le,ye],[4.56,le,ye],[4.61,le+.008,ye],[4.64,le+.06,ye],[4.64,Gn,ye]],Le=d(),Ce=d();[it,st].forEach(L=>{r(L,.043,he,Le,{type:"centripetal",radial:12,density:24}),r(L,.033,a.rubber,Ce,{type:"centripetal",radial:12,density:24})}),[2.9,3.53,4.2].forEach(L=>n(.046,L===3.53?.09:.05,L===3.53?a.galv:he,L,le,ye,Le,{axis:"x",seg:16})),u(Le),u(Ce),[2.75,3.85].forEach(L=>{t(.022,Gn-le-.04,.004,a.galv,L,(Gn+le)/2+.02,ye-.046,h,{cast:!1}),t(.022,.004,.1,a.galv,L,le-.046,ye,h,{cast:!1})}),n(.06,.008,W,4.64,Gn-.004,ye,h,{seg:20,cast:!1});let Qe=4.8,vt=2.1;n(.019,.26,a.bluePlastic,Qe,Nt+.13,vt,h,{seg:12}),n(.04,.012,a.castIron,Qe,Nt+.006,vt,h,{seg:16,cast:!1}),t(.1,.12,.11,a.brass,Qe,Nt+.32,vt,h,{r:.01}),n(.04,.035,a.blackPlastic,Qe-.065,Nt+.33,vt,h,{axis:"x",seg:20}),$e.plane("reg",.06,h,Qe-.0835,Nt+.33,vt,{rot:[0,-Math.PI/2,0]}),n(.015,.12,a.brass,Qe,Nt+.44,vt,h,{seg:12}),n(.024,.09,a.brass,Qe,Nt+.53,vt,h,{seg:16}),n(.006,.03,a.galv,Qe-.035,Nt+.53,vt,h,{axis:"x",seg:8});let N=new mt;N.position.set(Qe-.052,Nt+.53,vt),N.userData.keep=!0,l.add(N),t(.01,.14,.024,a.redPlastic,0,.06,0,N,{r:.004}),t(.014,.06,.028,a.redPlastic,-.002,.11,0,N,{r:.005}),i.bake(N),$e.plane("tag",.1,h,Qe-.03,Nt+.43,vt-.055,{rot:[0,-Math.PI/2+.35,.05]}),r([[Qe-.035,Nt+.53,vt-.01],[Qe-.045,Nt+.49,vt-.04],[Qe-.03,Nt+.455,vt-.055]],.0012,a.galv,h,{radial:4,cast:!1});let ae=.0112;n(ae,-.45-(Nt+.58),a.copper,Qe,(Nt+.58-.45)/2,vt,h,{seg:10}),s(.016,a.copper,Qe,-.45,vt,h,{seg:10,seg2:8}),n(ae,vt-ei,a.copper,Qe,-.45,(vt+ei)/2,h,{axis:"z",seg:10}),[1.5,.6,-1.3,-2.2].forEach(L=>t(.07,.022,.02,a.galv,Qe+.045,-.45,L,h,{cast:!1})),[-2.1,-1.2].forEach(L=>t(.07,.02,.022,a.galv,Qe+.045,L,vt,h,{cast:!1})),n(.0142,.07,a.copper,Gs.x+.025,Gs.y,Gs.z,h,{axis:"z",seg:12}),t(.004,.006,.045,a.blackPlastic,Gs.x+.011,Gs.y,Gs.z,h,{cast:!1});let ue=d(),we=-3.885,ze=-3.27,z=1.285,Ae=4.86,pe=2.02,Be=2.78;[[z,pe],[Be,Ae]].forEach(([L,ce])=>{t(ce-L,.8,ze-we-.03,Ne,(L+ce)/2,Sr+.5,(we+ze)/2-.015,ue),t(ce-L,.1,.5,a.blackPlastic,(L+ce)/2,Sr+.05,we+.25,ue,{cast:!1}),t(ce-L+.01,.04,ze-we+.02,a.blackPlastic,(L+ce)/2,xs-.02,(we+ze)/2+.01,ue);let We=Math.max(1,Math.round((ce-L)/.46)),ke=(ce-L)/We;for(let et=0;et<We;et++){let Tt=L+ke*(et+.5);t(ke-.006,.15,.02,Ne,Tt,xs-.13,ze-.01,ue,{r:.004}),t(ke-.006,.6,.02,Ne,Tt,Sr+.42,ze-.01,ue,{r:.004}),t(.12,.012,.02,a.steel,Tt,xs-.11,ze+.01,ue,{cast:!1}),t(.012,.12,.02,a.steel,Tt+ke/2-.05,Sr+.6,ze+.01,ue,{cast:!1})}}),t(3.57,.61,.012,rt,(z+Ae)/2,(xs+1.85)/2,we+.006,ue),t(Ae-z,3.195-2.57,.37,Y,(z+Ae)/2,(2.57+3.195)/2,-3.705,ue),t(.115,.72,.36,Ne,1.343,2.21,-3.7,ue);for(let L=0;L<6;L++){let ce=1.65+L*.5;t(.494,.69,.012,Ne,ce,2.215,-3.514,ue,{r:.004}),t(.012,.1,.02,a.steel,ce+(L%2?-.21:.21),1.94,-3.5,ue,{cast:!1})}t(Ae-4.4,.72,.36,Ne,(4.4+Ae)/2,2.21,-3.7,ue),t(Be-pe-.004,xs-Sr-.012,.62,a.steel,2.4,(Sr+xs)/2-.006,-3.575,ue),t(.7,.56,.02,a.steel,2.4,Sr+.44,-3.255,ue,{r:.006}),t(.5,.24,.006,a.blackPlastic,2.4,Sr+.5,-3.243,ue,{cast:!1}),n(.011,.6,a.steel,2.4,Sr+.78,-3.215,ue,{axis:"x",seg:10}),[-.09,.09].forEach(L=>t(.014,.014,.04,a.steel,2.4+L*3,Sr+.78,-3.235,ue,{cast:!1})),[-.27,-.16,.16,.27].forEach(L=>n(.02,.025,a.blackPlastic,2.4+L,xs-.07,-3.255,ue,{axis:"z",seg:14})),t(Be-pe,.012,.6,a.blackPlastic,2.4,xs-.006,-3.575,ue,{cast:!1}),[[-.18,-3.42,.095],[.18,-3.42,.08],[-.18,-3.72,.08],[.18,-3.72,.095]].forEach(([L,ce,We])=>n(We,.002,a.greyPlastic,2.4+L,xs+.001,ce,ue,{seg:24,cast:!1})),t(Be-pe,.06,.03,a.steel,2.4,xs+.03,we+.03,ue),n(.125,.05,a.blackPlastic,Un.x,xs+.027,Un.z,ue,{seg:24}),t(.2,.016,.026,a.blackPlastic,Un.x-.07,xs+.045,Un.z+.2,ue,{rot:[0,1.1,0]}),n(.08,.15,a.steel,2.58,xs+.078,-3.72,ue,{seg:20,r2:.06}),t(.13,.25,.012,a.greyPlastic,2.3,Sr+.68,-3.198,ue,{rot:[.05,0,0]}),n(.055,.15,a.greyPlastic,3.4,xs+.075,-3.75,ue,{seg:16}),[[-.02,.1],[.015,-.08],[0,0]].forEach(([L,ce])=>n(.006,.3,Ne,3.4+L,xs+.2,-3.75+L,ue,{seg:6,rot:[ce,0,ce*.6]})),t(Ae-z+.1,.012,2.9,Y,(z+Ae)/2+.05,3.189,-2.44,ue,{cast:!1}),u(ue);let Ue=d(),re=f(bi.x1-bi.x0,bi.z1-bi.z0,oe,Ue,(bi.x0+bi.x1)/2,Nt+.01,(bi.z0+bi.z1)/2,{rx:-Math.PI/2,keep:!0});re.renderOrder=2,re.userData.noAO=!0;let te=i.particles(280,{color:11065087,size:.13,gain:.9,opacity:.8});Ue.add(te);let _e=te.userData.n,Ge=te.userData.pos,dt=new Float32Array(_e*4);for(let L=0;L<_e;L++){let ce=(x()-.5)*.7,We=(x()-.3)*.5,ke=2.4+x()*2;dt[L*4]=-Math.cos(We)*Math.cos(ce)*ke,dt[L*4+1]=Math.sin(We)*ke,dt[L*4+2]=Math.cos(We)*Math.sin(ce)*ke,dt[L*4+3]=x()}let Ut=d(),Kt=f(xe,xe,ie,Ut,os.x,Nt+.012,os.z,{rx:-Math.PI/2,keep:!0});Kt.renderOrder=2,Kt.userData.noAO=!0;let sn=i.place(new Fe(new $n(.13,24,8,0,Math.PI*2,0,Math.PI/2),de),os.x,Nt+.01,os.z,Ut,{keep:!0,cast:!1}),kt=i.particles(48,{color:11046492,size:.03,gain:1,normal:!0,opacity:.9});Ut.add(kt);let Tn=kt.userData.n,Mn=kt.userData.pos,C=new Float32Array(Tn*3);for(let L=0;L<Tn;L++)C[L*3]=x()*6.2832,C[L*3+1]=.02+x()*.2,C[L*3+2]=x();let Te=d(Ut);Te.position.set(3.95,Nt,-1.55),Te.rotation.y=-1.05,[[-.2,.0616],[.2,-.0616]].forEach(([L,ce])=>t(.32,.64,.012,a.yellowPlastic,0,.3,ce,Te,{rot:[L,0,0],r:.005})),t(.34,.03,.03,a.yellowPlastic,0,.615,0,Te,{r:.008}),$e.plane("cat3",.26,Te,0,.3+.199*.0075,.0616+.98*.0075,{rot:[-.2,0,0]}),u(Te);let He=d(),at=d(He);f(1.9,1.6,ee,at,2.35,1.595,-3.505),f(1.6,.61,ee,at,2.3,xs,we+.0125,{base:!0}),f(.92,.16,ee,at,2.4,1.6,-3.274),f(3,2.6,ee,at,2.45,3.18,-2.75,{rx:Math.PI/2}),u(at);let ot=i.particles(90,{color:16760944,size:.11,gain:1.3,opacity:.85}),Ht=i.particles(70,{color:16738850,size:.2,gain:1,opacity:.6}),Pt=ks(br(64,64,L=>{for(let ce=0;ce<7;ce++)Ju(L,32+(x()-.5)*16,32+(x()-.5)*16,14+x()*10,12+x()*10,[[0,"rgba(255,255,255,.1)"],[1,"rgba(255,255,255,0)"]])}),{wrap:!1}),St=i.particles(170,{color:2762532,size:1.15,gain:1,normal:!0,opacity:.6}),bt=i.particles(60,{color:1973274,size:1.3,gain:1,normal:!0,opacity:.4});St.material.map=Pt,bt.material.map=Pt,He.add(ot,Ht,St,bt);let Wt=(L,ce)=>{let We=new Float32Array(L.userData.n*ce);for(let ke=0;ke<We.length;ke++)We[ke]=x();return We},Yt=Wt(ot,4),Pn=Wt(Ht,4),qn=Wt(St,4),di=Wt(bt,4),ti=i.sprite(16747066,1.4,Un.x,Un.y+.16,Un.z+.06,He,0),ni=[i.sprite(16742954,1,Un.x-.01,Un.y+.15,Un.z+.03,He,.6),i.sprite(16747066,1,Un.x+.02,Aa+.12,-3.2,He,.45)],ii=new ps(16747066,0,5,2);ii.position.set(Un.x,Un.y+.2,Un.z+.22),l.add(ii);let D=d(),ne=2.28,De=.9,Ee=Gn-Nt,Pe=a.poly.clone();Pe.opacity=.15,Pe.color.set(13030107);let _t=Pe.clone();_t.opacity=.45;let Dt=(L,ce,We)=>.075*Math.sin(Math.PI*L)*Math.pow(Math.sin(Math.PI*ce),.6)+.008*Math.sin((L-.5)*We*11+ce*3)*Math.sin(Math.PI*ce),K=(L,ce,We)=>{let ke=[],et=[];for(let Xt=0;Xt<=16;Xt++)ke.push(-L/2+L*Xt/16);for(let Xt=0;Xt<=10;Xt++)et.push(-Ee/2+Ee*Xt/10);We&&(ke.push(We[0],We[1]),et.push(We[2])),ke.sort((Xt,Gt)=>Xt-Gt),et.sort((Xt,Gt)=>Xt-Gt);let Tt=[],Vt=[],Ft=[],on=ke.length;et.forEach(Xt=>ke.forEach(Gt=>{let pi=Gt/L+.5,$t=Xt/Ee+.5;Tt.push(Gt,Xt,Dt(pi,$t,L)),Vt.push(pi,$t)}));for(let Xt=0;Xt<et.length-1;Xt++)for(let Gt=0;Gt<on-1;Gt++){let pi=(ke[Gt]+ke[Gt+1])/2,$t=(et[Xt]+et[Xt+1])/2;if(We&&pi>We[0]&&pi<We[1]&&$t<We[2])continue;let si=Gt+on*(Xt+1),Vn=Gt+on*Xt,rn=Gt+1+on*Xt,In=Gt+1+on*(Xt+1);Ft.push(si,Vn,In,Vn,rn,In)}let vn=new tn;return vn.setAttribute("position",new qt(Tt,3)),vn.setAttribute("uv",new qt(Vt,2)),vn.setIndex(Ft),vn.computeVertexNormals(),i.place(new Fe(vn,Pe),0,0,0,ce,{cast:!1,receive:!1})},se=De-ei,ge=Yi-ne,Xe=(ei+De)/2,E=L=>-(L-Xe),O=L=>(E(L)+se/2)/se,Z=L=>-Ee/2+L,$=-.75,me=.84,Ie=2.05,ve=E($+me/2),X=E($-me/2),Ze=d(D);Ze.position.set(ne,(Nt+Gn)/2,Xe),Ze.rotation.y=Math.PI/2,K(se,Ze,[ve,X,Z(Ie)]);let Ke=d(D);Ke.position.copy(Ze.position),Ke.rotation.copy(Ze.rotation);let ht=d(D);ht.position.set((ne+Yi)/2,(Nt+Gn)/2,De),ht.rotation.y=Math.PI,K(ge,ht),[ve,X].forEach((L,ce)=>{let We=(L+se/2)/se,ke=[];for(let et=0;et<=10;et++){let Tt=Z(.03+et/10*(Ie-.03));ke.push([L,Tt,Dt(We,(Tt+Ee/2)/Ee,se)-.006])}r(ke,.006,a.blackPlastic,Ke,{radial:5,cast:!1}),t(.016,.04,.01,a.blackPlastic,L+(ce?-.012:.012),Z(1.1),Dt(We,1.1/Ee,se)-.014,Ke,{cast:!1})});let ft=Dt(.5,Ie/Ee,se)-.03;n(.05,me+.02,_t,(ve+X)/2,Z(Ie+.04),ft,Ke,{axis:"x",seg:14,cast:!1}),[-.25,.25].forEach(L=>t(.035,.12,.11,a.bluePlastic,(ve+X)/2+L,Z(Ie+.03),ft,Ke,{cast:!1})),u(Ze),$e.plane("zip",.3,D,ne+Dt(O(.15),1.9/Ee,se)-.014,Nt+1.9,.15,{rot:[0,-Math.PI/2,0]});let pt=.25,Ct=ne+Dt(O(pt),1.45/Ee,se)-.03;t(.03,.15,.11,a.blackPlastic,Ct,Nt+1.45,pt,D,{r:.006}),$e.plane("mano",.09,D,Ct-.0155,Nt+1.47,pt,{rot:[0,-Math.PI/2,0]}),r([[Ct,Nt+1.38,pt-.03],[Ct+.02,Nt+1.3,pt-.06],[ne+.2,Nt+1.2,pt-.05]],.003,a.blackPlastic,D,{radial:5,cast:!1});let yt=a.bluePlastic;t(.05,.003,se,yt,ne+.01,Nt+.0015,Xe,D,{cast:!1}),t(.05,.003,se,yt,ne+.01,Gn-.0015,Xe,D,{cast:!1}),t(ge,.003,.05,yt,(ne+Yi)/2,Nt+.0015,De-.01,D,{cast:!1}),t(ge,.003,.05,yt,(ne+Yi)/2,Gn-.0015,De-.01,D,{cast:!1}),t(.003,Ee,.05,yt,Yi-.0015,(Nt+Gn)/2,De-.01,D,{cast:!1}),t(.05,Ee,.003,yt,ne+.01,(Nt+Gn)/2,ei+.0015,D,{cast:!1});let nt=c(2.85,Nt,.32);t(.44,.5,.62,a.enclosureDark,nt.x,nt.y+.33,nt.z,D,{r:.02}),t(.45,.04,.63,a.blackPlastic,nt.x,nt.y+.6,nt.z,D,{r:.012}),t(.004,.36,.48,a.blackPlastic,nt.x-.222,nt.y+.33,nt.z,D,{cast:!1});for(let L=0;L<9;L++)t(.008,.008,.46,a.galv,nt.x-.226,nt.y+.17+L*.04,nt.z,D,{cast:!1});$e.plane("hepa",.2,D,nt.x-.228,nt.y+.545,nt.z,{rot:[0,-Math.PI/2,0]}),t(.012,.012,.004,a.led(9425830,2),nt.x-.226,nt.y+.545,nt.z+.25,D,{cast:!1}),[[-.17,-.25],[.17,-.25],[-.17,.25],[.17,.25]].forEach(([L,ce])=>n(.03,.025,a.blackPlastic,nt.x+L,nt.y+.04,nt.z+ce,D,{axis:"x",seg:12})),r([[nt.x-.16,nt.y+.66,nt.z-.2],[nt.x-.16,nt.y+.72,nt.z-.1],[nt.x-.16,nt.y+.72,nt.z+.1],[nt.x-.16,nt.y+.66,nt.z+.2]],.01,a.blackPlastic,D,{radial:6}),n(.11,.06,a.galv,nt.x,nt.y+.38,nt.z+.33,D,{axis:"z",seg:20}),r([[nt.x,nt.y+.38,nt.z+.36],[nt.x,nt.y+.37,De-.05],[nt.x-.05,nt.y+.3,De+.25],[nt.x-.3,nt.y+.11,1.6],[2,nt.y+.1,2.2],[.9,nt.y+.1,2.7]],.1,Et,D,{radial:14,density:10}),[[0,.16],[0,-.16]].forEach(([,L])=>t(.3,.05,.004,yt,nt.x,nt.y+.37+L,De+.004,D,{cast:!1})),[[.16],[-.16]].forEach(([L])=>t(.05,.3,.004,yt,nt.x+L,nt.y+.37,De+.004,D,{cast:!1})),u(D);let wt=d(),Ot=d(wt);Ot.position.set(4.3,Nt,-1.45),Ot.rotation.y=-1.25;let Rn=1.72,On=.17;[[-.21,1],[.21,1],[-.21,-1],[.21,-1]].forEach(([L,ce])=>t(.026,Rn/Math.cos(On),.07,a.yellowPlastic,L,Rn/2,ce*Math.tan(On)*Rn/2,Ot,{rot:[-ce*On,0,0]})),[.3,.6,.9,1.2,1.5].forEach(L=>t(.42,.022,.085,a.greyPlastic,0,L,Math.tan(On)*(Rn-L),Ot,{cast:!1})),[.5,1].forEach(L=>t(.4,.016,.016,a.greyPlastic,0,L,-Math.tan(On)*(Rn-L),Ot,{cast:!1})),t(.46,.05,.24,a.greyPlastic,0,Rn+.02,0,Ot,{r:.01});let kn=ei+.008;["s1","s2","s3"].forEach((L,ce)=>{let We=3.62+ce*.17,ke=-1.62+ce%2*.02,et=(ce-1)*.06;t(.13,.17,.012,a.glassClear,We,ke,kn,wt,{rot:[0,0,et],cast:!1}),t(.126,.012,.004,a.greyPlastic,We,ke+.075,kn+.007,wt,{rot:[0,0,et],cast:!1}),t(.05,.04,.006,[a.whitePlastic,a.greyPlastic,a.whitePlastic][ce],We+.02,ke-.05,kn+.001,wt,{rot:[0,0,et+.4],cast:!1}),$e.plane(L,.1,wt,We,ke+.02,kn+.0075,{rot:[0,0,et]}),t(.05,.016,.002,a.whitePlastic,We,ke+.088,kn+.009,wt,{rot:[0,0,et],cast:!1})}),$e.plane("lab",.24,wt,3.85,-1.16,ei+.002),[[-.11,.15],[.11,.15],[-.11,-.15],[.11,-.15]].forEach(([L,ce])=>t(.04,.016,.002,a.whitePlastic,3.85+L,-1.16+ce,ei+.003,wt,{rot:[0,0,.5*Math.sign(L*ce)],cast:!1})),$e.plane("asb",.36,wt,3.8,-.8,ei+.002),t(.06,.004,.06,a.greyPlastic,3.4,Nt+.004,-1,wt,{cast:!1}),t(.11,.002,.04,a.whitePlastic,3.4,Nt+.006,-.95,wt,{cast:!1}),n(.035,.003,a.greyPlastic,3.9,Gn-.002,-1.75,wt,{seg:16,cast:!1}),t(.1,.002,.04,a.whitePlastic,3.93,Gn-.004,-1.71,wt,{cast:!1}),u(wt);let An=d(),ls=[],Ts=(L,ce,We)=>{let ke=d(An);ke.position.set(L,Nt,ce),ke.rotation.y=We,n(.2,.24,Se,0,.235,0,ke,{axis:"z",seg:28,open:!0}),n(.17,.02,a.blackPlastic,0,.235,0,ke,{axis:"z",seg:24}),t(.25,.14,.24,Se,.12,.09,0,ke,{r:.02}),t(.03,.12,.22,a.blackPlastic,.245,.09,0,ke,{cast:!1}),[-1,1].forEach(Tt=>{[.06,.11,.165].forEach(Vt=>i.place(new Fe(new Qi(Vt,.004,4,28),a.galv),0,.235,Tt*.122,ke,{cast:!1})),t(.34,.008,.006,a.galv,0,.235,Tt*.122,ke,{cast:!1}),t(.008,.34,.006,a.galv,0,.235,Tt*.122,ke,{cast:!1})}),t(.04,.03,.2,a.blackPlastic,-.13,.015,0,ke),t(.04,.03,.2,a.blackPlastic,.2,.015,0,ke),t(.18,.026,.03,a.yellowPlastic,-.04,.47,0,ke,{r:.01}),[-.11,.03].forEach(Tt=>t(.02,.06,.02,a.yellowPlastic,Tt,.44,0,ke)),r([[-.18,.15,-.05],[-.32,.03,-.1],[-.6,.006,-.3],[-1,.006,-.35]],.006,a.blackPlastic,ke,{radial:5,cast:!1});let et=new mt;et.position.set(0,.235,0),et.userData.keep=!0,ke.add(et);for(let Tt=0;Tt<10;Tt++){let Vt=Tt/10*6.2832;t(.008,.06,.2,a.blackPlastic,Math.cos(Vt)*.12,Math.sin(Vt)*.12,0,et,{rot:[0,0,Vt+.5],cast:!1})}p(et),i.bake(et),ls.push(et)};Ts(4.42,-2.25,-.55),Ts(4.45,-.5,-.5),Ts(4.42,1.25,-.6);let hn=c(3.4,Nt,-.85);t(.42,.66,.4,a.enclosure,hn.x,hn.y+.42,hn.z,An,{r:.02}),t(.43,.04,.41,a.blackPlastic,hn.x,hn.y+.09,hn.z,An,{r:.01});for(let L=0;L<8;L++)t(.006,.012,.32,a.galv,hn.x-.212,hn.y+.22+L*.045,hn.z,An,{cast:!1});t(.004,.36,.34,a.blackPlastic,hn.x-.211,hn.y+.38,hn.z,An,{cast:!1}),$e.plane("rh",.12,An,hn.x-.2115,hn.y+.66,hn.z+.05,{rot:[0,-Math.PI/2,0]}),[[-.15,-.16],[.15,-.16],[-.15,.16],[.15,.16]].forEach(([L,ce])=>n(.05,.03,a.blackPlastic,hn.x+L,hn.y+.05,hn.z+ce,An,{axis:"z",seg:14})),r([[hn.x+.19,hn.y+.7,hn.z-.16],[hn.x+.22,hn.y+.92,hn.z-.16],[hn.x+.22,hn.y+.92,hn.z+.16],[hn.x+.19,hn.y+.7,hn.z+.16]],.011,a.galv,An,{radial:8,tension:.1}),r([[hn.x+.1,hn.y+.12,hn.z-.2],[hn.x-.05,hn.y+.01,hn.z-.4],[os.x+.25,Nt+.012,os.z+.1],[os.x+.02,Nt+.015,os.z+.01]],.008,a.blackPlastic,An,{radial:6,cast:!1});let Gr=1,qi=c(hn.x+.123,hn.y+.825,hn.z-.06);t(.16,.024,.085,a.blackPlastic,qi.x,qi.y,qi.z,An,{r:.008,rot:[0,0,Gr]});let kr=$e.plane("mm",.072,An,qi.x-.84*.0125-.54*.02,qi.y+.54*.0125-.84*.02,qi.z);kr.rotation.order="ZYX",kr.rotation.set(-Math.PI/2,0,Gr);let Vr=ei+.06+.406*5;[-.012,.012].forEach(L=>n(.0022,.035,a.galv,4.878,Nt+.32,Vr+L,An,{axis:"x",seg:6,cast:!1})),n(.013,.1,a.blackPlastic,4.81,Nt+.32,Vr,An,{axis:"x",seg:12}),r([[4.76,Nt+.32,Vr],[4.6,Nt+.12,Vr+.1],[4,Nt+.01,-.6],[3.62,Nt+.3,-.62],[qi.x-.03,qi.y-.05,qi.z+.05]],.004,a.blackPlastic,An,{radial:5,cast:!1}),u(An),p(h),i.bake(h);let aa={water:Gs.clone(),sewage:os.clone().add(c(0,.06,0)),fire:c(Un.x,Un.y+.2,Un.z),mould:c(Yi-.02,Nt+.32,-1.75),asb:c(3.85,-1.16,ei+.01),rebuild:c(Yi-.02,Nt+.35,-.5)},ys={time:19.4,cut:0,ghost:0,ground:1,orbit:.012},k=[{...ys,radius:13,theta:-.95,phi:.82,fx:2.9,ty:-1.9,fz:-.4,lift:3,dof:0,orbit:.02},{...ys,radius:3.5,theta:-.95,phi:1.18,fx:2.95,ty:-2.45,fz:-1.5,dof:1.1},{...ys,radius:4.6,theta:.42,phi:1.68,fx:2.45,ty:2.15,fz:-3.45,dof:1,narrow:{radius:4.2,phi:1.6,ty:2.25}},{...ys,radius:5,theta:-1.12,phi:1.42,fx:3.6,ty:-1.7,fz:-.8,dof:1},{...ys,radius:3.7,theta:-.62,phi:1.6,fx:4,ty:-1.35,fz:-2.25,dof:1},{...ys,radius:3.9,theta:-1.1,phi:1.38,fx:3.95,ty:-2.2,fz:-.45,dof:1,narrow:{fx:3.75,fz:-.75}}],je=bi.x1-bi.x0,gt=bi.z1-bi.z0,Mt="",Lt=0;return{name:"restore",group:l,anchors:aa,shots:k,hides:L=>[...L.sys.installation?L.sys.installation.meshes:[],...L.layers.basement.children.filter(ce=>ce.isMesh&&ce.material===e.cedar)],light(L){return L===0?{pos:[.2,-1.5,2.2],at:[4.4,-2,-.9],power:.75,fill:.6}:L===1?{pos:[4.2,-.7,-2.4],at:[2.6,-2.8,-1.2],power:.85}:L===2?{pos:[3.9,1.9,-.7],at:[2.4,1.8,-3.7],power:.32,fill:.3}:L===3?{pos:[.7,-.6,.5],at:[4.2,-2.3,-1.2],power:.9}:L===4?{pos:[1.7,-.75,.6],at:[4.3,-1.2,-2.3],power:.85}:{pos:[1.3,-.55,1.4],at:[4.3,-2.4,-.4],power:.9}},update({step:L,q:ce,t:We,dt:ke,snap:et,reduce:Tt}){let Vt=et?1:1-Math.exp(-ke*4),Ft=Tt?1.7:We;ue.visible=L===2,ut.visible=L!==0,Ue.visible=L===0,Ut.visible=L===1,He.visible=L===2,D.visible=L===3,wt.visible=L===4,An.visible=L===5&&ce<.56,At.visible=L!==5,Le.visible=L!==5,Ce.visible=L===5;let on=L===0?.03+.97*Rt(.04,.9,ce):L===3?1:0;H.visible=on>.01,H.scale.y=Math.max(.01,on),Lt=ct(Lt,L===3?.55+.45*Rt(0,.7,ce):0,Vt),Ye.opacity=Lt,Ye.visible=Lt>.01;let vn=L===5?1:0,Xt=vn*Rt(.57,.73,ce),Gt=vn*Rt(.68,.86,ce),pi=vn*Rt(.74,.97,ce);if(S.visible=Xt>.005,S.scale.y=Math.max(.001,Xt),Y.color.copy(I).lerp(G,Gt),Q.color.copy(j).lerp(q,Gt),Q.bumpScale=3*(1-Gt),fe.visible=pi>.005,fe.scale.x=Math.max(.001,pi),L===0){let $t=Rt(0,.7,ce),si=Rt(.6,.74,ce);re.position.y=Nt+.009+.03*$t;let Vn=ct(.3,6.2,Math.pow(Rt(0,.85,ce),1.1));oe.alphaMap.repeat.set(.4*je/Vn,.4*gt/Vn),Je.offset.set(Ft*.035,Ft*.022),N.rotation.x=-si*Math.PI/2;let rn=1-.96*si,In=Math.round(_e*(1-.85*si)),mi=Gs.y-Nt-.03*$t;te.material.opacity=.85-.35*si;for(let Ii=0;Ii<_e;Ii++){let cs=Ii*3;if(Ii>=In){Ge[cs+1]=-60;continue}let hr=dt[Ii*4]*rn,wi=dt[Ii*4+1]*rn,ss=dt[Ii*4+2]*rn,fr=(wi+Math.sqrt(wi*wi+19.6*mi))/9.8,Ys=(Ft/fr+dt[Ii*4+3])%1*fr;Ge[cs]=Gs.x-.012+hr*Ys,Ge[cs+1]=Gs.y+wi*Ys-4.9*Ys*Ys,Ge[cs+2]=Gs.z+ss*Ys}te.geometry.attributes.position.needsUpdate=!0}if(L===1){let $t=ct(.2,1.75,Rt(0,.85,ce));ie.alphaMap.repeat.set(.4*xe/$t,.4*xe/$t),ie.normalMap.offset.set(Ft*.02,-Ft*.03);let si=Tt?.5:.5+.5*Math.sin(Ft*3.1);sn.scale.set(1+.12*si,.14+.1*si,1+.12*si);for(let Vn=0;Vn<Tn;Vn++){let rn=Vn*3,In=(Ft*.45+C[Vn*3+2])%1,mi=C[Vn*3+1]*(.4+In)*Math.min(1,$t/.6);Mn[rn]=os.x+Math.cos(C[Vn*3])*mi,Mn[rn+1]=Nt+.016+.012*Math.sin(In*Math.PI),Mn[rn+2]=os.z+Math.sin(C[Vn*3])*mi}kt.geometry.attributes.position.needsUpdate=!0}if(ii.intensity=L===2?(2.6+(Tt?0:.7*Math.sin(Ft*17)+.5*Math.sin(Ft*7.3)))*(.7+.3*Math.min(1,ce*3)):0,L===2){ee.opacity=.18+.82*Rt(0,.85,ce),ti.material.opacity=.55+(Tt?0:.12*Math.sin(Ft*13)),ni.forEach((rn,In)=>{let mi=Tt?0:Math.sin(Ft*(11+In*4))*.5+Math.sin(Ft*(5.3+In*2.1))*.5;rn.scale.set([.3,.32][In]+.03*mi,[.42,.5][In]+.07*mi,1)});let $t=(rn,In,mi,Ii,cs)=>{let hr=rn.userData.pos;for(let wi=0;wi<rn.userData.n;wi++){let ss=wi*3,fr=In[wi*4]*6.2832,Ys=(Ft*cs*(.7+.6*In[wi*4+1])+In[wi*4+3])%1,ju=mi*Math.sqrt(In[wi*4+2])*(1-.65*Ys),$o=Ys*Ii*(.5+In[wi*4+1]),$m=Math.sin(Ft*9+wi)*.014*Ys,eh=Un.x+Math.cos(fr)*ju+$m,Ec,th=Un.z+Math.sin(fr)*ju;if($o<Zu)Ec=Un.y+$o;else if($o<Zu+$u){let Ca=$o-Zu;Ec=Aa-.012-Ca*.04,th=Un.z+Math.sin(fr)*ju*.5+Ca,eh+=Math.cos(fr)*Ca*.9}else{let Ca=$o-Zu-$u;Ec=Aa-.02+Ca*.95,th=Un.z+$u+.02+Ca*.12,eh+=Math.cos(fr)*$u*.9+Math.sin(Ft*6+wi)*.03*Ca}hr[ss]=eh,hr[ss+1]=Ec,hr[ss+2]=th}rn.geometry.attributes.position.needsUpdate=!0};$t(ot,Yt,.08,.42,1.5),$t(Ht,Pn,.11,.62,1.05);let si=St.userData.pos;for(let rn=0;rn<St.userData.n;rn++){let In=rn*3,mi=(Ft*.11*(.7+.6*qn[rn*4])+qn[rn*4+3])%1,Ii=(qn[rn*4+1]-.5)*.1,cs,hr,wi;if(mi<.15){let ss=mi/.15;cs=Un.x+Ii,hr=Un.y+.15+ss*(Aa-Un.y-.2),wi=Un.z+Ii*.5}else if(mi<.3){let ss=(mi-.15)/.15;cs=Un.x+Ii*1.6,hr=Aa-.03,wi=Un.z+ss*.32}else if(mi<.55){let ss=(mi-.3)/.25;cs=Un.x+Ii*2+ss*.1,hr=Aa+ss*(3.06-Aa),wi=Un.z+.32+ss*.12+Math.sin(ss*3+rn)*.04}else{let ss=(mi-.55)/.45,fr=(qn[rn*4+2]-.5)*2.6,Ys=ss*(.7+1.6*qn[rn*4]);cs=Un.x+.1+Math.sin(fr)*Ys,hr=3.07-ss*.08,wi=Un.z+.44+Math.cos(fr)*Ys}si[In]=cs,si[In+1]=hr,si[In+2]=wi}St.geometry.attributes.position.needsUpdate=!0,St.material.opacity=.6+.4*Math.min(1,ce*2);let Vn=bt.userData.pos;for(let rn=0;rn<bt.userData.n;rn++){let In=rn*3,mi=Ft*.05+di[rn*4+3]*6.28;Vn[In]=1.45+di[rn*4]*3.2+Math.sin(mi)*.15,Vn[In+1]=2.98+di[rn*4+1]*.16,Vn[In+2]=-3.7+di[rn*4+2]*2.6+Math.cos(mi*.7)*.15}bt.geometry.attributes.position.needsUpdate=!0,bt.material.opacity=.15+.6*Rt(.05,.9,ce)}if(L===3){let $t=Tt?1:1+.06*Math.sin(Ft*.9);Ze.scale.z=$t}if(L===5){Tt||ls.forEach((rn,In)=>{rn.rotation.z-=ke*(34+In*3)});let $t=Math.round(ct(28,11,Rt(.02,.48,ce))),si=$t>19?"#ff6b4f":$t>15?"#f4bd7e":"#8fd3a6",Vn=$t<=12?"DRY":"% WOOD";$t+Vn!==Mt&&(Mt=$t+Vn,$e.set("mm",String($t),Vn,{tone:si}))}}}}var _n=-3.3,Fn=-2.6,cn=-2.8,jf=-2.51,Vs=-1.39,vs=Fn+.37,Ws=-4.9,ur=-.26,Ti=-2.75,Xs=-.6,p_=[0,1,12,18,22,25],m_=["INSTALL","MAINTAIN","UPGRADE","REPLACE","REMOVE","DEMOLISH"],g_=[[0,"INSTALLED \xB7 PERMIT"],[1,"FILTER \xB7 TUNE-UP"],[3,"FILTER \xB7 TUNE-UP"],[5,"DUCTS CLEANED"],[8,"IGNITER"],[11,"FILTER \xB7 TUNE-UP"],[12,"HEAT PUMP COIL"],[15,"TUNE-UP"],[18,"FILTER \xB7 TUNE-UP"],[20,"BLOWER MOTOR"],[24,"TUNE-UP"]],Qu=12;function qm({kit:i,tier:e}){let{box:t,cyl:n,tube:s,mats:r,atlas:a,V:o,std:c}=i,l=new mt,h=new mt;l.add(h);let d=c(9736070,.42,.3,{envMapIntensity:.8}),p=c(6717583,.42,.3,{envMapIntensity:.8}),u=c(10920599,.93,0),f=c(12886642,.82,0),x=c(9400648,.95,0),g=c(13884388,.88,0),m=c(5330782,.5,.45,{envMapIntensity:.8}),M=c(9316898,.45,.5),b=c(2897971,.6,.05),y=c(13210519,1,0),_=c(1313284,.4,0,{emissive:16747066,emissiveIntensity:1.4}),w=r.led(9425830,2),A=r.castIron,v=r.galv,R=r.pvc,P=r.copper,B=r.yellowPlastic,T="ui-monospace, Menlo, Consolas, monospace",U=C=>(Te,He,at)=>{Te.fillStyle=C?"#5f574b":"#a9a08a",Te.fillRect(0,0,He,at);for(let ot=0;ot<He;ot+=8)Te.fillStyle=C?"rgba(30,26,20,.55)":"rgba(120,110,90,.45)",Te.fillRect(ot,0,3,at);if(C)for(let ot=0;ot<90;ot++)Te.fillStyle=`rgba(40,34,26,${.15+ot%5*.06})`,Te.fillRect(ot*37%He,ot*53%at,6+ot%4*3,4+ot%3*3);Te.fillStyle=C?"#6e5a3c":"#9a7a4c",Te.fillRect(0,0,He,6),Te.fillRect(0,at-6,He,6),Te.fillRect(0,0,6,at),Te.fillRect(He-6,0,6,at)},I=[{key:"afue",text:"96% AFUE",sub:"60 000 BTU/h \xB7 NAT GAS",w:256,h:72,size:32,color:"#1b1d21",bg:"#c9c3b2"},{key:"permit",w:128,h:220,draw(C,Te,He){C.fillStyle="#e08a2c",C.beginPath(),C.moveTo(0,22),C.lineTo(22,0),C.lineTo(Te-22,0),C.lineTo(Te,22),C.lineTo(Te,He),C.lineTo(0,He),C.fill(),C.fillStyle="#14161a",C.beginPath(),C.arc(Te/2,20,8,0,6.3),C.fill(),C.textAlign="center",C.textBaseline="middle",C.fillStyle="#1a1308",C.font=`700 22px ${T}`,C.fillText("GAS",Te/2,58),C.fillText("PERMIT",Te/2,84),C.font=`500 15px ${T}`,C.fillText("INSPECTED",Te/2,122),C.fillText("YEAR 0",Te/2,144),C.strokeStyle="#1a1308",C.lineWidth=2,C.strokeRect(14,166,Te-28,36),C.font=`700 18px ${T}`,C.fillText("PASS",Te/2,185)}},{key:"crate",text:"UPFLOW FURNACE",sub:"THIS SIDE UP \xB7 52 kg",w:320,h:72,size:30,color:"#2a1d0e"},{key:"svc",w:256,h:384,year:0,draw(C,Te,He,at){C.fillStyle="#d8d1bd",C.fillRect(0,0,Te,He),C.fillStyle="#24262b",C.fillRect(0,0,Te,44),C.fillStyle="#e9e3d3",C.textAlign="left",C.textBaseline="middle",C.font=`700 20px ${T}`,C.fillText("SERVICE RECORD",12,23),C.font=`500 15px ${T}`,g_.forEach(([ot,Ht],Pt)=>{let St=66+Pt*28;C.strokeStyle="rgba(20,22,26,.3)",C.beginPath(),C.moveTo(10,St+13),C.lineTo(Te-10,St+13),C.stroke(),!(ot>at.year)&&(C.fillStyle="#2b3a66",C.fillText(("YR "+ot).padEnd(6)+Ht,12,St))})}},{key:"cal",w:200,h:248,year:0,verb:"INSTALL",draw(C,Te,He,at){C.fillStyle="#cdc6b3",C.fillRect(0,0,Te,He),C.fillStyle="#a8322a",C.fillRect(0,0,Te,54),C.fillStyle="#1a1c20",[40,100,160].forEach(ot=>{C.beginPath(),C.arc(ot,8,6,0,6.3),C.fill()}),C.textAlign="center",C.textBaseline="middle",C.fillStyle="#f1e6d6",C.font=`700 24px ${T}`,C.fillText("YEAR",Te/2,33),C.fillStyle="#16181c",C.font=`700 112px ${T}`,C.fillText(String(at.year),Te/2,140),C.fillStyle="#5a3a1c",C.font=`700 22px ${T}`,C.fillText(at.verb,Te/2,222)}},{key:"tstat",w:192,h:192,draw(C,Te,He){C.fillStyle="#05070b",C.beginPath(),C.arc(Te/2,He/2,Te/2-2,0,6.3),C.fill(),C.strokeStyle="#8fd3a6",C.lineWidth=6,C.beginPath(),C.arc(Te/2,He/2,Te/2-14,2.3,2.3+3.4),C.stroke(),C.textAlign="center",C.textBaseline="middle",C.fillStyle="#eef2f0",C.font=`600 58px ${T}`,C.fillText("21\xB0",Te/2+4,He/2-6),C.fillStyle="#8fd3a6",C.font=`600 15px ${T}`,C.fillText("HEAT PUMP",Te/2,He/2+36),C.fillStyle="#8b93a1",C.font=`500 13px ${T}`,C.fillText("OUT \u221218\xB0",Te/2,He/2+58)}},{key:"coil",text:"HEAT PUMP COIL",sub:"CASED \xB7 3 TON",w:256,h:64,size:26,color:"#e3ddd0"},{key:"odu",text:"COLD CLIMATE",sub:"HEATS TO \u221230 \xB0C",w:256,h:64,size:26,color:"#e3ddd0"},{key:"tank",text:"189 L",sub:"GAS \xB7 40 000 BTU/h",w:192,h:96,size:42,color:"#e9e6de"},{key:"tkl",w:128,h:72,draw(C,Te,He){C.fillStyle="#05070b",C.fillRect(0,0,Te,He),C.textAlign="center",C.textBaseline="middle",C.fillStyle="#7fc4ff",C.font=`700 34px ${T}`,C.fillText("49\xB0C",Te/2,He/2-6),C.fillStyle="#8fd3a6",C.font=`500 12px ${T}`,C.fillText("ON DEMAND",Te/2,He-12)}},{key:"capped",w:112,h:176,draw(C,Te,He){C.fillStyle="#c23a2b",C.fillRect(0,14,Te,He-14),C.beginPath(),C.moveTo(0,14),C.lineTo(Te/2,0),C.lineTo(Te,14),C.fill(),C.fillStyle="#14161a",C.beginPath(),C.arc(Te/2,20,7,0,6.3),C.fill(),C.textAlign="center",C.textBaseline="middle",C.fillStyle="#f6eee4",C.font=`700 21px ${T}`,C.fillText("CAPPED",Te/2,64),C.font=`500 13px ${T}`,C.fillText("GAS OFF",Te/2,98),C.fillText("DO NOT",Te/2,124),C.fillText("OPEN",Te/2,142)}},{key:"suite",w:256,h:320,draw(C,Te,He){C.fillStyle="#c9c4b4",C.fillRect(0,0,Te,He),C.fillStyle="#1a1c20",C.textAlign="left",C.textBaseline="middle",C.font=`700 21px ${T}`,C.fillText("SECONDARY SUITE",12,24),C.font=`500 14px ${T}`,C.fillText("BUILDING PERMIT \xB7 YR 25",12,48),C.strokeStyle="#2b3a66",C.lineWidth=3,C.strokeRect(20,70,Te-40,170),C.beginPath(),C.moveTo(20,150),C.lineTo(130,150),C.moveTo(130,70),C.lineTo(130,240),C.stroke(),C.lineWidth=1.5,C.beginPath(),C.arc(130,196,34,Math.PI,Math.PI*1.5),C.stroke(),C.fillStyle="#2b3a66",C.font=`600 13px ${T}`,C.fillText("MECH",40,110),C.fillText("BEDROOM",148,110),C.fillText("BATH",40,196),C.fillText("LIVING",148,196),C.fillStyle="#1a1c20",C.font=`500 13px ${T}`,C.fillText("MECH ROOM: TYPE X",12,268),C.fillText("BOTH SIDES \xB7 30 MIN",12,290)}},{key:"disc",text:"HEAT PUMP",w:128,h:32,size:18,color:"#e3ddd0"},{key:"bin",text:"DRYWALL ONLY",w:192,h:40,size:22,color:"#e3ddd0"},{key:"rust",w:384,h:96,draw(C,Te,He){let at=11,ot=()=>(at=at*16807%2147483647)/2147483647;C.clearRect(0,0,Te,He);for(let Ht=0;Ht<Te;Ht+=2){let Pt=He*(.35+.5*ot()*ot())*(.6+.4*Math.sin(Ht*.05)**2),St=C.createLinearGradient(0,He,0,He-Pt);St.addColorStop(0,"rgba(96,40,14,0.95)"),St.addColorStop(.5,"rgba(122,56,20,0.75)"),St.addColorStop(1,"rgba(140,70,30,0)"),C.fillStyle=St,C.fillRect(Ht,He-Pt,2+ot()*2,Pt)}}},{key:"pleatOld",w:96,h:128,draw:U(!0)},{key:"pleatNew",w:96,h:128,draw:U(!1)}],G=a(I,{width:1024,emissive:.22}),j=o(0,1,0),q=o(0,0,0),Y=C=>{let Te=new Map;return C.traverse(He=>{He.isMesh&&Te.set(He.material,Te.get(He.material)||!1||He.castShadow)}),C.traverse(He=>{He.isMesh&&!He.userData.keep&&(He.castShadow=Te.get(He.material),He.receiveShadow=!0)}),i.bake(C)},V=(C,Te,He,at,ot={})=>{let Ht=C.map(Yt=>o(Yt[0],Yt[1],Yt[2])),Pt=ot.fit??1.35,St=ot.seg||10,bt=ot.cast!==!1,Wt=(Yt,Pn,qn)=>{let di=Yt.distanceTo(Pn);if(di<1e-4)return;let ti=new Fe(new pn(qn,qn,di,St),He);ti.position.copy(Yt).add(Pn).multiplyScalar(.5),ti.quaternion.setFromUnitVectors(j,q.subVectors(Pn,Yt).normalize()),ti.castShadow=bt,ti.receiveShadow=!0,at.add(ti)};for(let Yt=0;Yt<Ht.length-1;Yt++)if(Wt(Ht[Yt],Ht[Yt+1],Te),Yt>0&&Pt){let Pn=Ht[Yt];[Ht[Yt-1],Ht[Yt+1]].forEach(qn=>{q.subVectors(qn,Pn).normalize(),Wt(Pn.clone(),Pn.clone().addScaledVector(q,Te*2.2),Te*Pt)})}},W={value:Array.from({length:Qu},()=>o(0,0,0))},Q={value:Array.from({length:Qu},()=>o(0,0,0))},be=C=>{C.uniforms.uPhP=W,C.uniforms.uPhS=Q,C.vertexShader=C.vertexShader.replace("#include <common>",`#include <common>
attribute float aPh; uniform vec3 uPhP[${Qu}]; uniform vec3 uPhS[${Qu}];`).replace("#include <begin_vertex>",`#include <begin_vertex>
{ int pi = int(aPh + 0.5); transformed = uPhP[pi] + (transformed - uPhP[pi]) * uPhS[pi]; }`)},Ve=new Io({depthPacking:sf});Ve.onBeforeCompile=be,Ve.customProgramCacheKey=()=>"cyclePhDepth";let Ne=[],rt=(C,Te,He="s")=>{let at=new mt;at.name=C,l.add(at);let ot={g:at,i:Ne.length,pivot:Te.clone(),mode:He,k:0};return W.value[ot.i].copy(Te),Ne.push(ot),ot},Et=()=>{l.updateWorldMatrix(!0,!0);let C=new zt().copy(l.matrixWorld).invert(),Te=new zt,He=new Map;Ne.forEach(at=>at.g.traverse(ot=>{if(!ot.isMesh)return;let Ht=ot.material.uuid+"|"+ot.renderOrder,Pt=He.get(Ht);Pt||He.set(Ht,Pt={mat:ot.material,cast:!1,ro:ot.renderOrder,geos:[]}),Pt.cast=Pt.cast||ot.castShadow;let St=ot.geometry.index?ot.geometry.toNonIndexed():ot.geometry.clone();Object.keys(St.attributes).forEach(bt=>{bt!=="position"&&bt!=="normal"&&bt!=="uv"&&St.deleteAttribute(bt)}),St.attributes.uv||St.setAttribute("uv",new Jt(new Float32Array(St.attributes.position.count*2),2)),St.applyMatrix4(Te.multiplyMatrices(C,ot.matrixWorld)),St.setAttribute("aPh",new Jt(new Float32Array(St.attributes.position.count).fill(at.i),1)),Pt.geos.push(St)})),Ne.forEach(at=>{at.g.traverse(ot=>{ot.isMesh&&ot.geometry.dispose()}),l.remove(at.g)}),He.forEach(at=>{let ot=Ss(at.geos);if(at.geos.forEach(St=>St.dispose()),!ot)return;let Ht=at.mat.clone();Ht.onBeforeCompile=be,Ht.customProgramCacheKey=()=>"cyclePh";let Pt=new Fe(ot,Ht);Pt.castShadow=at.cast,Pt.receiveShadow=!0,Pt.renderOrder=at.ro,Pt.frustumCulled=!1,at.cast&&(Pt.customDepthMaterial=Ve),Pt.userData.keep=!0,Pt.userData.noAO=!0,l.add(Pt)})},he=(C,Te,He)=>{C.k=ct(C.k,Te,He),Math.abs(C.k-Te)<.002&&(C.k=Te);let at=C.mode==="pop"?C.k>.5?1:0:Rt(0,1,C.k),ot=Q.value[C.i];return C.mode==="y"?ot.set(1,at,1):C.mode==="xz"?ot.set(at,1,at):ot.setScalar(at),at<.001&&ot.setScalar(0),at};n(.085,.012,v,-2.7,cn+.004,-1.85,h,{seg:20,cast:!1}),n(.068,.014,A,-2.7,cn+.005,-1.85,h,{seg:20,cast:!1});for(let C=-2;C<=2;C++)t(.11-Math.abs(C)*.02,.006,.008,v,-2.7,cn+.012,-1.85+C*.022,h,{cast:!1});let Se=-3.95,Oe=.9;t(.089,.038,Oe-Se,f,Ws-.045,cn+.019,(Se+Oe)/2,h,{cast:!1}),t(.089,.038,Oe-Se,f,Ws-.045,ur-.019,(Se+Oe)/2,h,{cast:!1});for(let C=Se+.02;C<=Oe;C+=.406)t(.089,ur-cn-.076,.038,f,Ws-.045,(cn+ur)/2,Math.min(C,Oe-.02),h,{cast:!1});for(let C=0;C<6;C++)C===2||C===4||t(.08,ur-cn-.09,.36,y,Ws-.05,(cn+ur)/2,-1.48+.019+C*.406+.203,h,{cast:!1});let Re=(C,Te,He)=>{t(.0127,ur-cn-.01,Te-C-.003,u,Ws+.0064,(cn+ur)/2,(C+Te)/2,He),t(.012,.08,Te-C,R,Ws+.019,cn+.04,(C+Te)/2,He,{cast:!1})};Re(Se,-2.7,h),Re(-2.7,-1.48,h),t(.68,.05,.88,A,_n,cn+.025,Fn,h),t(.56,.24,.74,v,_n,(cn+.05+jf)/2,Fn,h),t(.52,.036,.012,A,_n,-2.56,vs-.004,h,{cast:!1}),t(.56,.012,.02,v,_n,-2.535,vs+.008,h,{cast:!1}),t(.3,-.25-(cn+.05),.6,v,_n-.43,(-.25+cn+.05)/2,Fn,h),[-2.2,-1.6,-1,-.5].forEach(C=>t(.304,.012,.604,v,_n-.43,C,Fn,h,{cast:!1})),t(.56,Vs-jf,.74,d,_n,(jf+Vs)/2,Fn,h,{r:.008}),t(.54,.52,.008,r.enclosure,_n,-1.67,vs+.004,h,{r:.003}),t(.54,.54,.008,r.enclosure,_n,-2.225,vs+.004,h,{r:.003});for(let C=0;C<6;C++)t(.3,.011,.006,A,_n-.05,-1.47-C*.026,vs+.008,h,{cast:!1});for(let C=0;C<4;C++)t(.3,.011,.006,A,_n-.05,-2.41-C*.022,vs+.008,h,{cast:!1});[-1.43,-1.99].forEach(C=>t(.09,.016,.01,A,_n+.17,C,vs+.011,h,{cast:!1})),t(.09,.06,.006,A,_n+.15,-1.72,vs+.009,h,{cast:!1});let Ye=t(.064,.036,.004,_,_n+.15,-1.72,vs+.012,l,{cast:!1,keep:!0}),ee=t(.012,.012,.004,w,_n+.2,-2.08,vs+.01,l,{cast:!1,keep:!0});t(.04,.024,.004,A,_n+.2,-2.08,vs+.0085,h,{cast:!1}),G.plane("afue",.15,h,_n-.1,-1.78,vs+.0095),G.plane("svc",.13,h,_n+.2805,-1.95,Fn+.1).rotation.y=Math.PI/2,t(.004,.012,.03,A,_n+.283,-1.85,Fn+.1,h,{cast:!1}),s([[_n+.24,-2.45,vs+.01],[_n+.3,-2.62,vs+.08],[-2.85,cn+.02,-2.05],[-2.72,cn+.02,-1.88]],.008,R,h,{radial:6,cast:!1}),t(.56,-.25-Vs,.74,v,_n,(Vs-.25)/2,Fn,h),t(.57,.02,.75,v,_n,Vs+.01,Fn,h,{cast:!1});let Je=_n+.28,oe=1.4;t(oe-Je,.25,.5,v,(Je+oe)/2,-.375,Fn,h);for(let C=Je+1.2;C<oe;C+=1.5)t(.02,.258,.508,v,C,-.375,Fn,h,{cast:!1});for(let C=Je+.6;C<oe;C+=1.2)[-1,1].forEach(Te=>t(.025,.27,.003,v,C,-.37,Fn+Te*.253,h,{cast:!1}));n(.065,.24,v,-1.5,-.375,Fn+.37,h,{axis:"z",seg:16}),n(.065,.42,v,-1.5,-.27,Fn+.49,h,{seg:16}),n(.07,.03,v,-1.5,-.375,Fn+.26,h,{axis:"z",seg:16,cast:!1});let xe=o(-2.3,-.375,Fn+.25);t(.27,.12,.012,R,xe.x,xe.y,xe.z+.006,h,{cast:!1});for(let C=0;C<7;C++)t(.012,.09,.006,A,xe.x-.105+C*.035,xe.y,xe.z+.014,h,{cast:!1});t(.05,.12,.075,r.enclosure,_n+.305,-.85,Fn+.2,h),t(.006,.1,.06,R,_n+.333,-.85,Fn+.2,h,{cast:!1}),t(.01,.025,.012,A,_n+.338,-.85,Fn+.2,h,{cast:!1}),n(.008,.55,v,_n+.305,-.52,Fn+.2,h,{seg:6,cast:!1}),[-3.45,-3.22].forEach((C,Te)=>{V([[C,-1.62,Fn-.37],[C,-1.62,-3.2],[C,-.1+Te*.02,-3.2],[C,-.1+Te*.02,-3.85],[C,.14,-3.85],[C,.14,-4.4]],.04,R,h,{fit:1.2,seg:14}),n(.048,.06,R,C,.14,-4.42,h,{axis:"z",seg:14}),t(.025,.2,.003,v,C,-.2,-3.4,h,{cast:!1})}),V([[Ti,Xs,1.2],[Ti,Xs,-3.5]],.017,A,h,{fit:0}),[.6,-.6,-1.8,-3.1].forEach(C=>t(.02,-.25-Xs,.004,v,Ti,(Xs-.25)/2+.01,C,h,{cast:!1})),n(.024,.06,A,Ti,Xs,-3.5,h,{axis:"z",seg:10}),V([[Ti,Xs,-2.3],[Ti,-1.72,-2.3],[_n+.28,-1.72,-2.3]],.017,A,h),V([[Ti,-1.72,-2.3],[Ti,-1.95,-2.3]],.017,A,h,{fit:0}),n(.025,.04,A,Ti,-1.965,-2.3,h,{seg:10}),n(.024,.06,A,Ti,-1.72,-2.3,h,{seg:10}),n(.024,.06,A,Ti,Xs,-2.3,h,{axis:"z",seg:10}),n(.029,.035,A,Ti,-1.48,-2.3,h,{seg:8}),n(.026,.07,P,Ti,-1.25,-2.3,h,{seg:12}),t(.016,.1,.02,B,Ti+.035,-1.24,-2.3,h,{r:.004}),V([[Ti,Xs,-2.7],[-1.86,Xs,-2.7],[-1.86,-2,-2.7]],.017,A,h),n(.024,.06,A,Ti,Xs,-2.7,h,{axis:"z",seg:10}),n(.026,.07,P,-1.86,-1.85,-2.7,h,{seg:12});let ie=new mt;ie.position.set(-1.86,-1.85,-2.7),ie.userData.keep=!0,l.add(ie),t(.016,.1,.02,B,.035,.01,0,ie,{r:.004,cast:!1}),[-2.2,-2].forEach(C=>n(.011,.5,P,C,-.5,-3,h,{seg:8})),n(.085,.06,v,-2.1,-.28,-3,h,{seg:16}),t(.006,.006,.02,v,-1.15,-.93,-3.985,h,{cast:!1}),G.plane("cal",.2,h,-1.15,-1.07,-3.988);let de=rt("crate",o(-2.2,cn,-1.05));{let C=de.g,Te=-2.2,He=-1.05,at=cn;[-.4,0,.4].forEach(ot=>t(.9,.09,.07,f,Te,at+.045,He+ot,C));for(let ot=0;ot<6;ot++)t(.11,.02,.92,f,Te-.4+ot*.16,at+.1,He,C);[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([ot,Ht])=>t(.12,.1,.12,R,Te+ot*.32,at+.16,He+Ht*.33,C,{cast:!1})),t(.62,.1,.8,x,Te+.05,at+.27,He+.02,C,{rot:[0,.1,0]}),t(1.6,.008,.78,x,-3.75,at+.004,-.9,C,{rot:[0,.35,0],cast:!1}),t(.78,.008,.76,x,-3.2,at+.012,-.25,C,{rot:[0,-.2,0],cast:!1}),G.plane("crate",.34,C,-3.7,at+.0095,-.9).rotation.set(-Math.PI/2,0,.35),s([[Te-.5,at+.11,He+.2],[Te-.7,at+.01,He+.4],[Te-.95,at+.005,He+.3],[Te-1.1,at+.005,He+.6]],.006,A,C,{radial:4,cast:!1}),s([[Ti,-1.22,-2.28],[Ti+.01,-1.3,-2.25],[Ti+.01,-1.36,-2.26]],.0015,v,C,{radial:4,cast:!1}),G.plane("permit",.07,C,Ti+.01,-1.42,-2.255).rotation.set(.05,.3,.04)}let Me=G.mat.clone();Me.transparent=!1,Me.depthWrite=!0,Me.alphaTest=0;let $e=C=>{let Te=G.plane(C,.1),He=Te.geometry.attributes.uv,at=1,ot=0,Ht=1,Pt=0;for(let Yt=0;Yt<He.count;Yt++)at=Math.min(at,He.getX(Yt)),ot=Math.max(ot,He.getX(Yt)),Ht=Math.min(Ht,He.getY(Yt)),Pt=Math.max(Pt,He.getY(Yt));Te.geometry.dispose();let St=new Sn(.5,.025,.64),bt=St.attributes.uv;for(let Yt=0;Yt<bt.count;Yt++)bt.setXY(Yt,at+bt.getX(Yt)*(ot-at),Ht+bt.getY(Yt)*(Pt-Ht));let Wt=new Fe(St,Me);return Wt.castShadow=!0,Wt.receiveShadow=!0,Wt.userData.keep=!0,l.add(Wt),Wt},qe=$e("pleatOld"),ut=$e("pleatNew"),lt=o(_n,-2.56,Fn+.05),J=o(_n,-2.56,Fn+.78),It=o(-3.88,cn+.322,-2.2),At=rt("hose",xe);{let C=At.g,Te=[[xe.x,xe.y,xe.z+.06],[xe.x+.02,xe.y-.12,xe.z+.3],[-2.15,-1.5,-1.75],[-1.95,cn+.09,-1.3],[-1.55,cn+.08,-.7],[-.4,cn+.08,.1],[1.4,cn+.08,.7]],He=s(Te,.07,A,C,{radial:10,density:6,tension:.4}),at=He.userData.curve,ot=He.userData.len,Ht=new Qi(.072,.007,4,12),Pt=Math.round(ot/(e>=1?.07:.14));for(let St=2;St<Pt;St++){let bt=St/Pt,Wt=new Fe(Ht,A);Wt.position.copy(at.getPointAt(bt)),Wt.quaternion.setFromUnitVectors(o(0,0,1),at.getTangentAt(bt)),C.add(Wt)}t(.3,.16,.08,A,xe.x,xe.y,xe.z+.05,C,{r:.01}),n(.08,.06,v,xe.x,xe.y,xe.z+.11,C,{axis:"z",seg:16})}let H=rt("hp",o(_n,Vs,Fn),"y"),S=-3,fe=-4.85,le=.42,ye=new mt;ye.userData.keep=!0,ye.position.set(S-.1,le+.4,fe-.17),l.add(ye);{let C=H.g;t(.6,.44,.78,d,_n,Vs+.22,Fn,C,{r:.008}),t(.52,.34,.006,d,_n,Vs+.22,Fn+.392,C,{r:.003});for(let He=0;He<4;He++)t(.012,.012,.008,v,_n+(He%2?.24:-.24),Vs+(He<2?.07:.37),Fn+.396,C,{cast:!1});G.plane("coil",.2,C,_n-.08,Vs+.3,Fn+.3965);let Te=(He,at,ot)=>s([[_n+.3,Vs+.2+ot,Fn-.28],[-2.92,Vs+.2+ot,Fn-.28],[-2.9+ot,-.6,-2.9],[-2.9+ot,-.13,-2.95],[-2.9+ot,-.12,-3.85],[-2.9+ot,.12,-3.97],[-2.9+ot,.12,-4.35],[-2.85+ot,.32,-4.42],[-2.75+ot,.6,-4.5],[-2.55,.62+ot*2,-4.62]],He,at,C,{radial:8,density:10,tension:.2});Te(.021,A,0),Te(.006,P,.045),t(.02,.22,.003,v,-2.88,-.24,-3.4,C,{cast:!1}),t(.012,.11,.11,A,Ws+.019,-1.3,-2.05,C,{r:.004}),G.plane("tstat",.092,C,Ws+.0256,-1.3,-2.05).rotation.y=Math.PI/2,t(1.2,.08,.7,g,S,.04,fe,C),[-.4,.4].forEach(He=>{t(.05,le-.08,.05,v,S+He,(le+.08)/2,fe+.12,C),t(.05,le-.08,.05,v,S+He,(le+.08)/2,fe-.12,C),t(.06,.04,.5,v,S+He,le-.02,fe,C)}),t(.96,.78,.38,m,S,le+.39,fe,C,{r:.02}),n(.31,.02,A,S-.1,le+.4,fe-.19,C,{axis:"z",seg:32,cast:!1}),[.12,.2,.28].forEach(He=>{let at=new Fe(new Qi(He,.005,4,32),v);at.position.set(S-.1,le+.4,fe-.205),C.add(at)}),t(.62,.008,.008,v,S-.1,le+.4,fe-.206,C,{cast:!1}),t(.008,.62,.008,v,S-.1,le+.4,fe-.206,C,{cast:!1}),G.plane("odu",.2,C,S+.33,le+.62,fe-.193).rotation.y=Math.PI,t(1,.07,.42,g,S,le+.815,fe,C,{r:.03,cast:!1}),t(.7,.05,.3,g,S-.05,le+.86,fe,C,{r:.022,cast:!1}),t(.22,.1,.9,g,S+.4,.13,fe+.1,C,{r:.04,cast:!1}),t(.14,.2,.08,m,-2.25,.9,-4.29,C,{r:.01}),G.plane("disc",.1,C,-2.25,.93,-4.332).rotation.y=Math.PI,s([[-2.25,.8,-4.3],[-2.3,.6,-4.4],[-2.52,.55,-4.7]],.012,A,C,{radial:6,cast:!1});for(let He=0;He<3;He++){let at=t(.26,.09,.006,A,0,0,0,null,{cast:!1});at.geometry.translate(.14,0,0),at.rotation.set(0,.25,He*Math.PI*2/3),ye.add(at)}Y(ye)}let it=o(-2.1,cn+.12,-2.64),st=new mt;st.rotation.order="YXZ",st.position.copy(it),st.userData.keep=!0,l.add(st);let Le;{let C=new mt,Te=-.36;st.add(C),n(.28,1.38,p,0,-.1+.69,Te,C,{seg:28}),n(.284,.04,A,0,-.1,Te,C,{seg:28}),n(.27,.03,p,0,1.295,Te,C,{seg:28,r2:.2}),t(.14,.08,.01,A,0,.08,-.083,C),t(.1,.12,.07,A,0,.26,-.05,C,{r:.008}),n(.02,.025,P,0,.29,-.012,C,{axis:"z",seg:12,cast:!1}),n(.012,.06,P,.12,.05,-.1,C,{axis:"z",seg:8,cast:!1}),n(.07,.08,v,0,1.35,Te,C,{seg:16,r2:.04}),n(.075,.1,v,0,1.43,Te,C,{seg:16}),[-.1,.1].forEach(Wt=>{n(.012,.08,v,Wt,1.33,Te,C,{seg:8}),n(.02,.03,P,Wt,1.37,Te,C,{seg:8})}),n(.018,.06,P,.3,1.1,Te,C,{axis:"x",seg:8}),t(.025,.04,.02,P,.31,1.13,Te,C,{cast:!1}),V([[.33,1.1,Te],[.34,1.1,Te],[.34,.04,Te]],.011,P,C,{seg:8}),G.plane("tank",.14,C,0,.78,-.076),Y(C),Le=n(.2825,.3,G.mat,0,.06,Te,st,{seg:28,open:!0,keep:!0,cast:!1});let He=G.plane("rust",.1),at=He.geometry.attributes.uv,ot=1,Ht=0,Pt=1,St=0;for(let Wt=0;Wt<at.count;Wt++)ot=Math.min(ot,at.getX(Wt)),Ht=Math.max(Ht,at.getX(Wt)),Pt=Math.min(Pt,at.getY(Wt)),St=Math.max(St,at.getY(Wt));He.geometry.dispose();let bt=Le.geometry.attributes.uv;for(let Wt=0;Wt<bt.count;Wt++)bt.setXY(Wt,ot+bt.getX(Wt)*(Ht-ot),Pt+bt.getY(Wt)*(St-Pt))}let Ce=new mt;Ce.userData.keep=!0,st.add(Ce);let Qe=new mt;Qe.position.set(0,0,.02),Qe.userData.keep=!0;{let C=new mt;Ce.add(C),[-.17,.17].forEach(He=>V([[He,-.1,-.05],[He,1.28,-.05],[He,1.4,.03]],.013,M,C,{seg:8,fit:0})),V([[-.17,1.4,.03],[.17,1.4,.03]],.013,M,C,{seg:8,fit:0}),[.35,.85].forEach(He=>n(.009,.34,M,0,He,-.05,C,{axis:"x",seg:6})),t(.38,.01,.24,M,0,-.115,-.17,C),n(.012,.5,M,0,0,.02,C,{axis:"x",seg:8}),[-.17,.17].forEach(He=>t(.02,.1,.08,M,He,-.04,-.02,C));let Te=new Fe(new Qi(.286,.006,4,40),B);Te.rotation.x=Math.PI/2,Te.position.set(0,.95,-.36),C.add(Te),t(.06,.04,.03,B,0,.95,-.065,C),Y(C),[-.25,.25].forEach(He=>{n(.12,.06,A,He,0,0,Qe,{axis:"x",seg:20}),n(.055,.065,M,He,0,0,Qe,{axis:"x",seg:12}),t(.068,.02,.16,M,He,0,0,Qe,{cast:!1})}),Y(Qe),Ce.add(Qe)}let vt=rt("conn",o(-2.1,-1.5,-2.85),"pop");{let C=vt.g;V([[-1.86,-2,-2.7],[-1.86,-2.42,-2.7],[-2.05,-2.42,-2.7]],.017,A,C),V([[-1.86,-2.42,-2.7],[-1.86,-2.56,-2.7]],.017,A,C,{fit:0}),n(.024,.03,A,-1.86,-2.575,-2.7,C,{seg:10}),n(.024,.05,A,-1.86,-2,-2.7,C,{seg:10}),[-2.2,-2].forEach(Te=>n(.011,.5,P,Te,-1,-3,C,{seg:8})),n(.075,.96,v,-2.1,-.76,-3,C,{seg:16}),[-1,-.55].forEach(Te=>n(.079,.02,v,-2.1,Te,-3,C,{seg:16,cast:!1}))}let N=rt("caps",o(-2,-1.2,-2.85),"pop");{let C=N.g;[-2.2,-2].forEach(Te=>n(.014,.035,P,Te,-.765,-3,C,{seg:8})),n(.024,.035,A,-1.86,-1.905,-2.7,C,{seg:10}),s([[-1.86,-1.86,-2.68],[-1.85,-1.92,-2.66],[-1.85,-1.97,-2.665]],.0015,v,C,{radial:4,cast:!1}),G.plane("capped",.055,C,-1.85,-2.02,-2.66).rotation.set(0,.25,-.05),n(.08,.012,v,-2.1,-.315,-3,C,{seg:16,cast:!1})}let ae=rt("puddle",o(-1.95,cn+.003,-2.6),"xz");[[0,0,.42,.3],[.25,.18,.28,.2],[-.2,.22,.22,.18]].forEach(([C,Te,He,at])=>{n(1,.004,r.water,-1.95+C,cn+.003,-2.6+Te,ae.g,{seg:28,cast:!1}).scale.set(He,1,at)});let ue=-1.72,we=-1.1,ze=-3.89,z=rt("tankless",o(ue,we,ze));{let C=z.g;t(.36,.56,.2,d,ue,we,ze,C,{r:.012}),t(.3,.46,.006,d,ue,we,ze+.1,C,{r:.003}),G.plane("tkl",.08,C,ue,we+.12,ze+.105),V([[ue+.06,we+.28,ze],[ue+.06,-.62,ze],[ue+.06,-.62,-4.05]],.05,R,C,{fit:1.15,seg:16}),V([[Ti,Xs,-3.5],[Ti,Xs,-3.84],[-1.45,Xs,-3.84],[-1.45,-1.52,-3.84],[ue+.1,-1.52,-3.84],[ue+.1,we-.28,-3.84]],.014,A,C,{seg:8}),n(.022,.06,P,-1.45,-1.25,-3.84,C,{seg:10}),t(.014,.08,.016,B,-1.42,-1.24,-3.84,C,{r:.003,cast:!1}),[[ue-.1,r.bluePlastic,-2.25],[ue-.02,r.redPlastic,-2.35]].forEach(([Te,He,at],ot)=>{V([[Te,we-.28,-3.84],[Te,-1.6-ot*.06,-3.84],[at,-1.6-ot*.06,-3.84],[at,-.26,-3.84]],.011,P,C,{seg:8}),n(.017,.04,P,Te,-1.47,-3.84,C,{seg:8}),t(.05,.012,.012,He,Te+.02,-1.47,-3.815,C,{cast:!1})}),[-.45,-1.2].forEach(Te=>t(.03,.012,.03,P,-2.3,Te,-3.85,C,{cast:!1}))}let Ae=rt("loose",o(Ws,-1.5,-.3),"pop");Re(-1.48,-.29,Ae.g),Re(-.29,Oe,Ae.g);let pe=rt("demo",o(-3,cn,-.5),"y");{let C=pe.g,Te=-1.05,He=Ws+.02,at=-1.45,ot=-2.45,Ht=-1.6;t(ot-He,.038,.089,f,(He+ot)/2,cn+.019,Te,C),t(at-Ht,.038,.089,f,(Ht+at)/2,cn+.019,Te,C),t(at-He,.038,.089,f,(He+at)/2,ur-.019,Te,C);for(let bt=He+.02;bt<at;bt+=.406)bt>ot-.04&&bt<Ht+.04||t(.038,ur-cn-.076,.089,f,bt,(cn+ur)/2,Te,C);[ot-.019,Ht+.019].forEach(bt=>t(.038,ur-cn-.076,.089,f,bt,(cn+ur)/2,Te,C)),[ot+.019,Ht-.019].forEach(bt=>t(.038,2.07,.089,f,bt,cn+1.035,Te,C)),t(Ht-ot,.18,.089,f,(ot+Ht)/2,cn+2.16,Te,C),G.plane("suite",.15,C,ot-.019,-1.2,Te+.046),[-.5,.5].forEach(bt=>t(1.1,.04,.08,f,-2.7,cn+.02,1+bt*1.8,C));for(let bt=0;bt<4;bt++)t(1.22,.0127,2.44,u,-2.7+bt%2*.02,cn+.047+bt*.0135,1+bt%3*.015,C,{rot:[0,(bt-1.5)*.012,0]});let Pt=-4.35,St=1.5;t(.62,.88,.92,b,Pt,cn+.5,St,C,{r:.02}),t(.66,.04,.96,b,Pt,cn+.95,St,C,{r:.01}),[-.3,.3].forEach(bt=>n(.05,.04,A,Pt+.2,cn+.05,St+bt,C,{axis:"x",seg:12})),[[0,.1,.4,.4],[-.1,-.15,-.3,.6],[.12,-.25,.2,-.5]].forEach(([bt,Wt,Yt,Pn])=>t(.4,.0127,.5,u,Pt+bt,cn+.95,St+Wt,C,{rot:[Yt,Pn,.2]})),t(.3,.09,.6,y,Pt-.05,cn+.98,St-.1,C,{rot:[.3,.2,-.25]}),G.plane("bin",.2,C,Pt+.312,cn+.75,St).rotation.y=Math.PI/2;for(let bt=0;bt<7;bt++)t(.05+bt%3*.04,.0127,.04+bt%2*.05,u,Ws+.12+bt%3*.09,cn+.007,-1.3+bt*.3,C,{rot:[0,bt*.7,0],cast:!1})}Y(h),Et();let Be={install:o(_n,-1.65,vs+.02),maintain:o(_n+.1,-2.56,vs+.03),upgrade:o(Ws+.03,-1.3,-2.05),hpump:o(_n+.1,Vs+.22,Fn+.4),replace:o(ue,we+.05,ze+.11),remove:o(-2.1,-1.9,-2.6),demo:o(Ws-.04,-1.5,-.6)},Ue={time:19.4,cut:0,ghost:0,ground:1,lift:0,orbit:.012},re=[{...Ue,radius:14,theta:.2,phi:.9,fx:-2.6,ty:-1.8,fz:-2.2,lift:3,dof:0,orbit:.02,narrow:{radius:12}},{...Ue,radius:3.5,theta:.5,phi:1.36,fx:-2.8,ty:-1.95,fz:-2.2,dof:1,narrow:{fx:-3.15}},{...Ue,radius:4.4,theta:1,phi:1.56,fx:-3.7,ty:-1.15,fz:-2.25,dof:.9},{...Ue,radius:4.8,theta:-.1,phi:1.36,fx:-1.85,ty:-1.8,fz:-3.2,dof:1},{...Ue,radius:3.8,theta:-.55,phi:1.36,fx:-2,ty:-1.85,fz:-1.3,dof:.8,narrow:{fx:-2.35,fz:-1.1}},{...Ue,radius:4.4,theta:.7,phi:1.3,fx:-3.4,ty:-1.95,fz:-.1,dof:.7,narrow:{fx:-3.9,ty:-1.55,fz:-.6}}],te=-1,_e=0,Ge=0,dt=0,Ut=0,Kt=0,sn=0,kt=o(-2,cn+.12,.35),Tn=it.distanceTo(kt),Mn=o(0,0,0);return{name:"cycle",group:l,anchors:Be,shots:re,hides:C=>[...C.sys.hvac?C.sys.hvac.meshes:[],...C.sys["water-heaters"]?C.sys["water-heaters"].meshes:[]],light(C){return C===0?{pos:[-4,2,0],at:[-2.8,-2.4,-2.4],power:1,fill:.3}:C===1?{pos:[-1.7,-.5,-.7],at:[-3.3,-2.3,-2.4],power:1,fill:.35}:C===2?{pos:[-1.6,-.45,-1.1],at:[-3.9,-1.4,-2.2],power:1,fill:.35}:C===3?{pos:[-2.5,-.45,-1],at:[-1.9,-1.9,-3.4],power:1,fill:.35}:C===4?{pos:[-3.6,-.45,.2],at:[-2,-2.2,-1.4],power:1,fill:.35}:{pos:[-1.5,-.5,1.6],at:[-4.2,-1.8,-.6],power:1,fill:.35}},update({step:C,q:Te,t:He,dt:at,snap:ot,reduce:Ht}){let Pt=ot?1:1-Math.exp(-at*4);Te=Zt(Te||0,0,1);let St=C===1?Math.round(1+11*Te):p_[C]??25;St!==te&&(te=St,G.set("cal",void 0,void 0,{year:St,verb:m_[C]||""}),G.set("svc",void 0,void 0,{year:St})),_.emissiveIntensity=Ht?1.4:1.3+.3*Math.sin(He*13.1)+.2*Math.sin(He*7.7+1.3),w.emissiveIntensity=Ht?1.8:Math.sin(He*2.4)>-.2?2:.3;let bt=C===1?Te:C>1?1:0;_e=ot?bt:ct(_e,bt,1-Math.exp(-at*6));let Wt=Rt(.06,.28,_e),Yt=Rt(.3,.46,_e),Pn=Rt(.5,.86,_e),qn=Rt(.38,.48,_e);qe.visible=C<=1,qe.position.lerpVectors(lt,J,Wt).lerp(It,Yt),qe.rotation.set(-1.72*Yt,0,.06*Yt),ut.visible=qn>.001,ut.position.lerpVectors(J,lt,Pn),ut.scale.setScalar(Math.max(.001,qn)),he(de,C===0?1:0,Pt),he(At,C===1?1:0,Pt);let di=he(H,C>=2?1:0,Pt);ye.visible=di>.98,Ht||(ye.rotation.z=He*6);let ti=C>3||C===3&&Te>.6;he(vt,ti?0:1,1),he(N,ti?1:0,1),he(ae,C===3?.15+.85*Rt(0,.45,Te):0,Pt),he(z,C>3||C===3&&Te>.45?1:0,Pt),he(Ae,C<5?1:0,1),he(pe,C===5?1:0,Pt),sn=ct(sn,ti?1:0,Pt),ie.rotation.z=-sn*Math.PI/2,Le.visible=C>=3;let ni=C===4?Te:C>4?1:0;Ge=ct(Ge,Rt(0,.25,ni)*.42,Pt);let ii=dt;dt=ct(dt,Rt(.25,1,ni),Pt),Kt+=(dt-ii)*Tn,Ut=ct(Ut,C===4?1:0,Pt),st.visible=C<=4,st.position.lerpVectors(it,kt,dt),st.rotation.set(Ge,.08*dt,0),Ce.visible=Ut>.02,Ce.scale.setScalar(Math.max(.001,Rt(0,1,Ut))),Qe.rotation.x=Kt/.12,Mn.set(0,.95,-.36),st.updateMatrix(),Be.remove.copy(Mn.applyMatrix4(st.matrix))}}}function Zm({M:i,H:e,Ug:t,Wd:n,tier:s,reduce:r,glowTex:a}){let o=Lm({M:i,tier:s,reduce:r,glowTex:a,dotTex:jr("rgba(255,255,255,0.75)")}),c=new mt;c.name="sets";let l=v=>v.traverse(R=>{R.userData.noPick=!0}),h=Nm({kit:o});c.add(h.group),l(h.group);let d={};Object.entries({panel:Um,attic:Om,sewer:km,radon:Xm,restore:Ym,cycle:qm}).forEach(([v,R])=>{typeof R=="function"&&(d[v]=R)});let p={},u=new Ol(16769725,0,18,.5,.8,1);u.castShadow=s>=1,u.shadow.mapSize.set(s>=2?2048:1024,s>=2?2048:1024),u.shadow.bias=-6e-4,u.shadow.normalBias=.006,u.shadow.radius=3,u.shadow.camera.near=.15,u.shadow.camera.far=16;let f=new ps(9414888,0,9,2);c.add(u,u.target,f);let x=new F(2,-.3,-2.5),g=new F(2.8,-1.2,-3.9),m=0,M=1,b=null,y=[];function _(v){if(p[v]||!d[v])return p[v];let R=d[v]({kit:o,M:i,H:e,Ug:t,Wd:n,tier:s,reduce:r});return R.group.visible=!1,l(R.group),c.add(R.group),p[v]=R,R}function w(v,R,P,B,T){o.time.value=P,h.disc.rotation.y=P*1.4;let U=R.zoom&&d[R.zoom]?R.zoom:null;U&&_(U);let I=v.zk>.004?U||b:null;I!==b&&(b&&p[b]&&(p[b].group.visible=!1),y.forEach(q=>{q.visible=!0}),y=[],b=I,b&&(p[b].group.visible=!0,p[b].hides&&(y=(p[b].hides(e,t,n)||[]).filter(q=>q&&q.visible),y.forEach(q=>{q.visible=!1}))));let G=T?1:1-Math.exp(-B*3.2),j=0;if(b){let q=p[b];q.update({step:R.zs|0,p:R.zp||0,q:R.zq||0,k:v.zk,t:P,dt:B,reduce:r,snap:T});let Y=q.light?q.light(R.zs|0,R.zq||0):null;if(Y){let V=m<.02?1:G;x.lerp(A.fromArray(Y.pos),V),g.lerp(A.fromArray(Y.at),V),j=Y.power*v.zk,M=ct(M,Y.fill??1,G)}}m=ct(m,j,G),u.position.copy(x),u.target.position.copy(g),u.intensity=10*m,u.visible=m>.01,f.position.copy(g).add(A.set(-1.2,.5,1.6)),f.intensity=1.4*m*M,f.visible=m>.01}let A=new F;return{root:c,kit:o,update:w,ensure:_,names:Object.keys(d),get shown(){return b},anchors(){return b?p[b].anchors:null},input(v,R){let P=_(v);P&&P.input&&P.input(R)},shots(v){let R=_(v);return R?R.shots||[]:null},get:v=>_(v),prebuild(){let v=Object.keys(d).find(R=>!p[R]);return v?(_(v),!0):!1},lampPower:()=>m}}function x_(){let i=performance.now(),e=[],t=te=>e.push([te,Math.round(performance.now()-i)]),n=document.getElementById("stage"),s=document.documentElement,r=()=>window.dispatchEvent(new Event("hause:stage-ready")),a=()=>{s.classList.add("no-webgl"),r()};if(!n)return a();let o=window.matchMedia("(prefers-reduced-motion: reduce)").matches,c=em(),l=navigator.hardwareConcurrency||4,h=typeof window.HAUSE_QUALITY=="number"?window.HAUSE_QUALITY:c?l>=6?1:0:l>=6?2:1;try{let te=document.createElement("canvas"),_e=te.getContext("webgl2");if(!_e)return a();let Ge=_e.getExtension("WEBGL_lose_context");Ge&&Ge.loseContext()}catch{return a()}let d;try{if(d=new Cu({canvas:n,antialias:h===0,powerPreference:"high-performance"}),!d.getContext())throw new Error("no gl")}catch{return a()}n.addEventListener("webglcontextlost",te=>{te.preventDefault(),Q=!1,s.classList.add("no-webgl")}),d.toneMapping=Ma,d.toneMappingExposure=1,d.shadowMap.enabled=!0,d.shadowMap.type=za;let p=new Ds(new F(1,0,0),1e3);d.clippingPlanes=[p],nm(d.capabilities.getMaxAnisotropy()),im(h);let u=new Ua;u.environmentIntensity=.6,u.fog=new gl(1317678,70,360);let f=new $i(30,1,.3,1400),x=.3;t("renderer");let g=xm(d,u);t("sky");let{M:m,T:M}=gm();t("materials+textures");let b=Go(),y=pm(),_=Sm({M:m,T:M,markTex:y,glowTex:b});u.add(_.house),t("house");let w=Rm({M:m,T:M,glowTex:b,markTex:y,tier:h,reduce:o});u.add(w.world),t("world");let A=Am({house:_.house,reduce:o}),v=Pm({M:m,layers:_.layers,glowTex:b}),R=Im({scene:u,M:m,tier:h,reduce:o});Object.values(_.layers).forEach(te=>{Dm(te,_.edgeMat),kf(te)}),kf(w.props);let P=Zm({M:m,H:_,Ug:R,Wd:w,tier:h,reduce:o,glowTex:b});_.house.add(P.root),t("systems+interior+underground+merge");let B=new Ul(10466518,1709842,.5),T=new Lo(16769728,3);T.castShadow=!0,T.shadow.mapSize.set(h>=2?2048:1024,h>=2?2048:1024),Object.assign(T.shadow.camera,{left:-26,right:26,top:26,bottom:-26,near:5,far:240}),T.shadow.bias=-3e-4,T.shadow.normalBias=.04,T.shadow.radius=h>=2?2.5:1.5,T.target.position.set(0,3,0);let U=new Lo(9085656,.6);U.position.copy(g.U.uMoonDir.value).multiplyScalar(60),u.add(B,T,T.target,U);let I={explode:0,radius:36,theta:.55,phi:1.36,ty:4.2,tx:-6,time:19.4,marks:0,ground:1,orbit:.04,visible:1,ghost:0,cut:0,lift:0,thermal:0,netE:0,netW:0,netA:0,netR:0,lensY:0,fx:0,fz:0,beacons:0,section:0,cutX:.45,season:0,snowfall:1,smoke:1,melt:0,icicles:0,aurora:0,zk:0,dof:0},G=Object.assign({level:null,focusSys:null,netFocus:null,ugFocus:null,interactive:!1,zoom:null,zs:0,zp:0,zq:0},I),j=["explode","radius","phi","ty","tx","time","marks","ground","visible","ghost","cut","lift","thermal","netE","netW","netA","netR","lensY","fx","fz","beacons","section","cutX","season","snowfall","smoke","melt","icicles","aurora","zk","dof"],q=0,Y=1,V=1,W=1,Q=!0,be=0,Ve=-9,Ne={set(te){Object.assign(G,te)},highlight(te){G.focusSys=te},selectLevel(te){G.level=te},levels:pc.map(te=>te.key),onPick:null,onHoverLevel:null,onFrame:null,onThermal:null,roomsLit:0,get quality(){return h}};window.HAUSE_STAGE=Ne;let rt=new xt(14256718),Et=null;function he(te){Et=te,Object.keys(_.sys).forEach(_e=>_.sys[_e].mats.forEach(Ge=>{_e===te?(Ge.emissive.copy(rt),Ge.emissiveIntensity=.9):(Ge.emissive.copy(Ge.userData.baseEmissive),Ge.emissiveIntensity=1)}))}let Se=new Set;_.house.traverse(te=>{!te.isMesh||!te.material||(Array.isArray(te.material)?te.material:[te.material]).forEach(_e=>{_e.userData&&(_e.userData.shell||_e.userData.wall)&&Se.add(_e)})});let Oe="",Re=!1;_.edgeMat.visible=!1;function Ye(te,_e){let Ge=te.toFixed(3)+"|"+_e.toFixed(3);if(Ge===Oe)return;Oe=Ge;let dt=te>.01||_e>.01;Se.forEach(Ut=>{let Kt=Ut.userData.pane,sn=Ut.userData.shell?te*(Kt?.75:.9):0,kt=Ut.userData.wall?_e*(Kt?.8:.9):0;dt!==Re&&(Ut.transparent=dt||!!Ut.userData.alwaysTransparent,Ut.needsUpdate=!0),Ut.opacity=1-Math.max(sn,kt),Ut.depthWrite=Math.max(sn,kt)<.4}),Re=dt,_.edgeMat.opacity=Math.max(te*.28,_e*.16),_.edgeMat.visible=_.edgeMat.opacity>.01}let ee=Cm({scene:u,M:m,skipParents:[...Object.values(A.groups),P.root],onChange:te=>{w.setThermal(te),d.toneMapping=te?Us:Ma,Ne.onThermal&&Ne.onThermal(te)}}),Je=new F;function oe(te,_e){return Je.copy(_e),te.localToWorld(Je),Je.project(f),{x:(Je.x*.5+.5)*Y,y:(-Je.y*.5+.5)*V,behind:Je.z>1}}let xe=(te,_e,Ge)=>new F(te,_e,Ge),ie=pc.map(te=>({obj:_.layers[te.key],offset:xe(li/2+1.4,{roof:7.8,upper:4.9,main:1.8,basement:-1.2,below:-2.8}[te.key],dn/2)}));Ne.projectLevels=()=>ie.map(te=>oe(te.obj,te.offset)),Ne.projectAnchors=()=>{let te={};Object.keys(_.ANCHORS).forEach(Ge=>{te[Ge]=oe(_.house,_.ANCHORS[Ge])}),Object.keys(R.ANCHORS).forEach(Ge=>{te[Ge]=oe(_.house,R.ANCHORS[Ge])});let _e=P.anchors();return _e&&Object.keys(_e).forEach(Ge=>{te["z."+Ge]=oe(_.house,_e[Ge])}),te},Ne.zoomSets=P.names,Ne.setLook=te=>{Object.assign(ze,te||{})},Ne.zoomShots=te=>P.shots(te),Ne.zoomInput=(te,_e)=>P.input(te,_e),Ne.prebuildZoom=()=>P.prebuild();let de={x:0,y:0,nx:0,ny:0},Me=null,$e=new Hl,qe=[];_.house.traverse(te=>{!te.isMesh||te.isInstancedMesh||!te.visible||te.userData.noPick||(te.geometry.computeBoundingSphere(),te.geometry.boundingSphere.radius>.3&&qe.push(te))});let ut=te=>{for(;te&&!te.userData.level;)te=te.parent;return te?te.userData.level:null};Ne.pickAt=(te,_e)=>{$e.setFromCamera({x:te/Y*2-1,y:-(_e/V)*2+1},f);let Ge=$e.intersectObjects(qe,!1)[0];return Ge?{level:ut(Ge.object),sys:Ge.object.userData.sys||null}:null},Ne.pickCount=()=>qe.length,window.addEventListener("pointermove",te=>{de.nx=te.clientX/Y*2-1,de.ny=te.clientY/V*2-1,Me&&(be=Me.theta0-(te.clientX-Me.x)*.006)},{passive:!0}),n.addEventListener("pointerdown",te=>{G.interactive&&(Me={x:te.clientX,theta0:be,t:performance.now()})}),window.addEventListener("pointerup",te=>{if(!Me)return;let _e=Math.abs(te.clientX-Me.x)<6&&performance.now()-Me.t<400;if(Me=null,_e&&G.interactive){$e.setFromCamera({x:te.clientX/Y*2-1,y:-(te.clientY/V)*2+1},f);let Ge=$e.intersectObjects(qe,!1)[0];Ge&&Ne.onPick&&Ne.onPick(ut(Ge.object),Ge.object.userData.sys||null)}}),n.addEventListener("pointermove",te=>{if(!G.interactive||Me)return;$e.setFromCamera({x:te.clientX/Y*2-1,y:-(te.clientY/V)*2+1},f);let _e=$e.intersectObjects(qe,!1)[0],Ge=_e?ut(_e.object):null;n.style.cursor=Ge?"pointer":"grab",Ne.onHoverLevel&&Ne.onHoverLevel(Ge)});let lt=null;function J(){lt&&lt.dispose(),lt=h>=1?Em(d,u,f,h,Math.round(Y*W),Math.round(V*W)):null}function It(){Y=window.innerWidth,V=window.innerHeight,W=Math.min(window.devicePixelRatio||1,h>=2?1.75:h===1?1.5:1.25),d.setPixelRatio(W),d.setSize(Y,V,!1),f.aspect=Y/V,f.fov=Y<700?44:30,f.updateProjectionMatrix(),lt&&lt.setSize(Math.round(Y*W),Math.round(V*W))}window.addEventListener("resize",It),It(),J();let At=new F;function H(te,_e){let Ge=.5-.5*Math.cos(_e*Math.PI*2),dt=ct(7.5,5,Ge),Ut=ct(18.3,21.9,Ge),Kt=ct(24,62,Ge),sn=Math.PI*(te-dt)/(Ut-dt),kt=Kt*Math.sin(sn),Tn=kt*Math.PI/180;return At.set(-Math.sin(sn)*Math.cos(Tn),Math.sin(Tn),Math.cos(sn)*Math.cos(Tn)).normalize(),kt}let S=[[0,[.62,.6,.55]],[.16,[.7,.7,.55]],[.3,[.8,1,.62]],[.5,[.74,.95,.55]],[.68,[1.05,.88,.5]],[.82,[1,.72,.45]],[1,[.62,.6,.55]]];function fe(te,_e){let Ge=0;for(;Ge<S.length-2&&S[Ge+1][0]<=te;)Ge++;let[dt,Ut]=S[Ge],[Kt,sn]=S[Ge+1],kt=(te-dt)/(Kt-dt);_e.setRGB(ct(Ut[0],sn[0],kt),ct(Ut[1],sn[1],kt),ct(Ut[2],sn[2],kt))}let le=new F,ye=new F,it=new F,st=new F,Le=new F,Ce={ug:0,section:0,cutX:.45,ground:1,ghost:0,cut:0,snow:1,roofSnow:1,snowfall:1,rain:0,leaves:0,smoke:1,melt:0,icicles:0,grow:0,leafTint:new xt(.3,.5,.15),explode:0,lift:0,zk:0},Qe=[[0,[.3,.3,.3]],[.22,[.62,.8,.28]],[.36,[.4,.62,.2]],[.55,[.3,.5,.15]],[.7,[.95,.7,.18]],[.82,[.9,.35,.1]],[1,[.5,.2,.08]]];function vt(te,_e){let Ge=0;for(;Ge<Qe.length-2&&Qe[Ge+1][0]<=te;)Ge++;let[dt,Ut]=Qe[Ge],[Kt,sn]=Qe[Ge+1],kt=(te-dt)/(Kt-dt);_e.setRGB(ct(Ut[0],sn[0],kt),ct(Ut[1],sn[1],kt),ct(Ut[2],sn[2],kt))}let N=new xt(16777215),ae=new xt,ue=0,we=30,ze={shadow:[.96,.99,1.05],high:[1.04,1,.95],sat:1.05};function z(te,_e){q+=te;let Ge=_e?1:1-Math.exp(-te*(o?30:4.2));j.forEach(St=>{I[St]=ct(I[St],G[St],Ge)}),I.theta=ct(I.theta,G.theta+(o?0:Math.sin(q*.08)*G.orbit)+be,Ge),pc.forEach(St=>{let bt=_.layers[St.key],Wt=St.key==="roof"?18*Zt(I.lift,0,1):St.key==="upper"?12*Zt(I.lift-1,0,1):St.key==="main"?9*Zt(I.lift-2,0,1):0;bt.position.y=ct(bt.position.y,St.dy*I.explode+Wt+(G.level===St.key?.9:0),Ge)});let dt=(I.season%1+1)%1,Ut=Math.max(1-Rt(.1,.3,dt),Rt(.84,1,dt)),Kt=Math.max(1-Rt(.06,.22,dt),Rt(.88,1,dt));Ce.ug=0,Ce.beacons=I.beacons,Ce.section=I.section,Ce.cutX=I.cutX,Ce.ground=I.ground,Ce.ghost=I.ghost,Ce.cut=I.cut,Ce.lift=I.lift,Ce.zk=I.zk,Ce.snow=Ut,Ce.roofSnow=Kt,Ce.explode=I.explode,Ce.grow=Rt(.2,.34,dt)*(1-Rt(.78,.93,dt)),vt(dt,Ce.leafTint),Ce.rain=Rt(.2,.24,dt)*(1-Rt(.3,.34,dt))*(o?0:1),Ce.leaves=Rt(.72,.78,dt)*(1-Rt(.9,.95,dt))*(o?0:1),Ce.melt=Math.max(I.melt,1-Kt),Ce.icicles=Math.max(I.icicles,Rt(.03,.1,dt)*(1-Rt(.17,.26,dt))+Rt(.9,.97,dt)*.5),Ce.snowfall=I.snowfall*(o?0:1)*(dt<.05||dt>.93?1:0),Ce.smoke=I.smoke*(1-Rt(.12,.3,dt)+Rt(.8,.95,dt)),fe(dt,w.U.uTint.value);let sn=H(I.time,dt),kt=Rt(-5,10,sn);g.update({elev:sn,daylight:kt,sunDir:At,thermal:I.thermal,aurora:I.aurora*(1-kt),cloud:ct(.38,.62,Rt(0,1,Math.abs(Math.sin(dt*Math.PI*2)))),snowy:Ut>.5,voidK:Zt(1-I.ground,0,1)},q),g.follow(f.position),u.fog.color.copy(g.horizon);let Tn=1-Rt(0,28,sn);T.position.copy(At).multiplyScalar(110).add(T.target.position),T.color.setRGB(1,ct(.95,.62,Tn),ct(.88,.4,Tn)),T.intensity=3.6*Rt(-4,6,sn)*(1-I.thermal),B.color.copy(g.zenith).lerp(N,.4),B.groundColor.setRGB(.1,.09,.08).lerp(ae.setRGB(.55,.6,.72),Ut*.8*(.25+.75*kt)),B.intensity=(.5+.35*kt+.25*I.cut)*(1-I.thermal),U.intensity=.7*(1-kt)*(1-I.thermal),u.environmentIntensity=.5+.4*kt+.1*I.cut,d.toneMappingExposure=ee.on?1:ct(1.2,.95,kt),(_e||q-Ve>.4)&&(g.refreshEnv(_e),Ve=q),Ye(I.ghost*(1-Zt(I.explode*4,0,1)),I.cut),v.update(1-kt,I.cut);let Mn=_.update(Ce,Ge,q,kt,_e?100:te);Ne.roomsLit=Math.round(Zt(Mn,0,7)),_.extra.chimneyTop.getWorldPosition(st),w.update(Ce,q,te,kt,le,st,Zt(Mn/9,0,1));let C=G.focusSys;Object.keys(_.sys).forEach(St=>_.sys[St].marks.forEach(bt=>{let Wt=C?St===C?1:I.marks*.35:I.marks;bt.material.opacity=ct(bt.material.opacity,Wt,Ge),bt.scale.setScalar(.95*(St===C?1+Math.sin(q*4)*.12:1)*(1+I.explode*.25))})),C!==Et&&he(C),A.update(I,G.netFocus,q,te);let Te=R.update(Ce,G.ugFocus,q,te);p.constant=-Te,ee.set(G.thermal>.5),ee.time.value=q,P.update(I,G,q,te,_e),de.x=ct(de.x,de.nx,Ge*.6),de.y=ct(de.y,de.ny,Ge*.6);let He=I.theta+de.x*.08,at=Zt(I.phi+de.y*.04,.35-.27*I.zk,1.5+1.2*I.zk),ot=Y<700,Ht=Zt(I.radius*.012,.02,.3);Math.abs(Ht-x)>x*.02&&(x=Ht,f.near=Ht,f.updateProjectionMatrix()),le.set(I.fx,I.ty+(ot?-1.2*Zt(I.radius/30,0,1):0),I.fz),ye.set(Math.sin(at)*Math.sin(He),Math.cos(at),Math.sin(at)*Math.cos(He)).multiplyScalar(I.radius*(ot?1.25:1)).add(le),f.position.copy(ye),f.lookAt(le),f.updateMatrixWorld(),it.setFromMatrixColumn(f.matrixWorld,0),f.position.addScaledVector(it,ot?0:I.tx),f.updateMatrixWorld(),Le.copy(le).applyMatrix4(f.matrixWorldInverse);let Pt=Math.max(.001,Le.length());we=Pt,w.sight.value.set(Le.x/Pt,Le.y/Pt,Le.z/Pt,Pt),Math.abs(I.lensY-ue)>1e-4&&(ue=I.lensY,Math.abs(ue)<1e-4?f.clearViewOffset():f.setViewOffset(Y,V,0,-ue*V,Y,V)),n.style.opacity=I.visible.toFixed(3)}let Ae={n:0,sum:0,last:0},pe=performance.now();function Be(te){if(lt){let _e=lt.gtao,Ge=I.ghost>.05||I.cut>.05||ee.on||I.explode>.05;_e&&(_e.enabled=!Ge),lt.bloom&&(lt.bloom.strength=ee.on?.9:(.3+.55*(1-Zt(At.y*4,0,1)))*(1-.45*I.zk)),lt.grade.uniforms.uSat.value=ee.on?1:ze.sat,lt.grade.uniforms.uShadow.value.fromArray(ee.on?[1,1,1]:ze.shadow),lt.grade.uniforms.uHigh.value.fromArray(ee.on?[1,1,1]:ze.high),lt.grade.uniforms.uCool.value=ee.on?0:ze.cool||0,lt.setDof(ee.on?0:I.dof,we,f.near,f.far),lt.render(te,q)}else d.render(u,f)}function Ue(te){let _e=te-Ae.last;if(Ae.last=te,!(_e>250||_e<=0)&&(Ae.n++,Ae.n>40&&(Ae.sum+=_e),Ae.n===130)){let Ge=Ae.sum/90;Ge>26&&h>1&&typeof window.HAUSE_QUALITY!="number"?(h--,J(),It(),T.shadow.mapSize.set(1024,1024),T.shadow.map&&T.shadow.map.dispose(),T.shadow.map=null):Ge>34&&h===1&&W>1.01&&typeof window.HAUSE_QUALITY!="number"&&(W=1,d.setPixelRatio(1),d.setSize(Y,V,!1),lt&&lt.setSize(Y,V)),Ae={n:0,sum:0,last:te}}}function re(te){if(!Q)return;let _e=Math.min((te-pe)/1e3,.05);pe=te,z(_e,!1),Be(_e),Ue(te),Ne.onFrame&&Ne.onFrame(),requestAnimationFrame(re)}Ne.pause=()=>{Q=!1},Ne.resume=()=>{Q||(Q=!0,pe=performance.now(),Ae.last=0,requestAnimationFrame(re))},Ne.settle=()=>{z(.016,!0),z(.016,!0),Be(.016),Ne.onFrame&&Ne.onFrame()},window.HAUSE_DEBUG&&(Ne.debug={scene:u,camera:f,renderer:d,S:I,target:G,H:_,Wd:w,sky:g,sun:T,hemi:B,moon:U,Sets:P,get post(){return lt}}),Ne.info=()=>({tier:h,calls:d.info.render.calls,triangles:d.info.render.triangles,pixelRatio:W,buildMs:Ne.buildMs}),t("pre-first-render"),Ne.settle(),t("first-render"),Ne.laps=e,requestAnimationFrame(te=>{pe=te,requestAnimationFrame(re)}),Ne.buildMs=Math.round(performance.now()-i),s.classList.add("has-webgl"),r()}x_();})();
