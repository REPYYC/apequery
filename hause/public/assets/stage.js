/* HAUSE 3D stage. Built from hause/src/stage with esbuild + three.js. Do not edit by hand. */
(()=>{var nf=0,l0=1,sf=2;var oa=1,rf=2,no=3,zr=0,Ci=1,Wn=2,si=0,Gr=1,Sn=2,c0=3,u0=4,ou=5;var Es=100,af=101,of=102,lf=103,cf=104,la=200,uf=201,hf=202,df=203,h0=204,d0=205,ll=206,ff=207,cl=208,pf=209,mf=210,gf=211,xf=212,vf=213,yf=214,Rc=0,Cc=1,Pc=2,Ba=3,Ic=4,Dc=5,Lc=6,Nc=7,f0=0,_f=1,Mf=2,us=0,ul=1,hl=2,dl=3,kr=4,fl=5,pl=6,ml=7;var p0=300,Vr=301,ca=302,lu=303,cu=304,gl=306,Bn=1e3,Qi=1001,Uc=1002,ii=1003,Ef=1004;var xl=1005;var li=1006,uu=1007;var ir=1008;var mi=1009,m0=1010,g0=1011,io=1012,hu=1013,Hs=1014,Ss=1015,Jn=1016,du=1017,fu=1018,Wr=1020,x0=35902,v0=35899,y0=1021,_0=1022,Li=1023,Ks=1026,sr=1027,pu=1028,mu=1029,Xr=1030,gu=1031;var xu=1033,vl=33776,yl=33777,_l=33778,Ml=33779,vu=35840,yu=35841,_u=35842,Mu=35843,Eu=36196,Su=37492,bu=37496,Tu=37488,wu=37489,El=37490,Au=37491,Ru=37808,Cu=37809,Pu=37810,Iu=37811,Du=37812,Lu=37813,Nu=37814,Uu=37815,Fu=37816,Ou=37817,Bu=37818,Hu=37819,zu=37820,Gu=37821,ku=36492,Vu=36494,Wu=36495,Xu=36283,Yu=36284,Sl=36285,qu=36286;var Io=2300,Fc=2301,Tc=2302,Zh=2303,$h=2400,Jh=2401,Kh=2402;var Sf=3200,M0=3201;var bl=0,bf=1,zs="",gn="srgb",Do="srgb-linear",Lo="linear",yn="srgb";var wc=7680;var Tf=519,wf=512,Af=513,Rf=514,Zu=515,Cf=516,Pf=517,$u=518,If=519,E0=35044;var S0="300 es",Bs=2e3,Ha=2001;function dm(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function fm(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function No(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Df(){let i=No("canvas");return i.style.display="block",i}var xd={},za=null;function Uo(...i){let e="THREE."+i.shift();za?za("log",e,...i):console.log(e,...i)}function Lf(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ht(...i){i=Lf(i);let e="THREE."+i.shift();if(za)za("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function zt(...i){i=Lf(i);let e="THREE."+i.shift();if(za)za("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function ta(...i){let e=i.join(" ");e in xd||(xd[e]=!0,Ht(...i))}function Nf(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Uf={[Rc]:Cc,[Pc]:Lc,[Ic]:Nc,[Ba]:Dc,[Cc]:Rc,[Lc]:Pc,[Nc]:Ic,[Dc]:Ba},Qs=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Ui=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ac=Math.PI/180,Fo=180/Math.PI;function gr(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ui[i&255]+Ui[i>>8&255]+Ui[i>>16&255]+Ui[i>>24&255]+"-"+Ui[e&255]+Ui[e>>8&255]+"-"+Ui[e>>16&15|64]+Ui[e>>24&255]+"-"+Ui[t&63|128]+Ui[t>>8&255]+"-"+Ui[t>>16&255]+Ui[t>>24&255]+Ui[n&255]+Ui[n>>8&255]+Ui[n>>16&255]+Ui[n>>24&255]).toLowerCase()}function hn(i,e,t){return Math.max(e,Math.min(t,i))}function pm(i,e){return(i%e+e)%e}function _h(i,e,t){return(1-t)*i+t*e}function Zs(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Rn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var C0=class C0{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=hn(this.x,e.x,t.x),this.y=hn(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=hn(this.x,e,t),this.y=hn(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(hn(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(hn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};C0.prototype.isVector2=!0;var Ye=C0,Tn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],p=n[s+3],d=r[a+0],u=r[a+1],f=r[a+2],y=r[a+3];if(p!==y||c!==d||l!==u||h!==f){let g=c*d+l*u+h*f+p*y;g<0&&(d=-d,u=-u,f=-f,y=-y,g=-g);let m=1-o;if(g<.9995){let M=Math.acos(g),S=Math.sin(M);m=Math.sin(m*M)/S,o=Math.sin(o*M)/S,c=c*m+d*o,l=l*m+u*o,h=h*m+f*o,p=p*m+y*o}else{c=c*m+d*o,l=l*m+u*o,h=h*m+f*o,p=p*m+y*o;let M=1/Math.sqrt(c*c+l*l+h*h+p*p);c*=M,l*=M,h*=M,p*=M}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],p=r[a],d=r[a+1],u=r[a+2],f=r[a+3];return e[t]=o*f+h*p+c*u-l*d,e[t+1]=c*f+h*d+l*p-o*u,e[t+2]=l*f+h*u+o*d-c*p,e[t+3]=h*f-o*p-c*d-l*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),p=o(r/2),d=c(n/2),u=c(s/2),f=c(r/2);switch(a){case"XYZ":this._x=d*h*p+l*u*f,this._y=l*u*p-d*h*f,this._z=l*h*f+d*u*p,this._w=l*h*p-d*u*f;break;case"YXZ":this._x=d*h*p+l*u*f,this._y=l*u*p-d*h*f,this._z=l*h*f-d*u*p,this._w=l*h*p+d*u*f;break;case"ZXY":this._x=d*h*p-l*u*f,this._y=l*u*p+d*h*f,this._z=l*h*f+d*u*p,this._w=l*h*p-d*u*f;break;case"ZYX":this._x=d*h*p-l*u*f,this._y=l*u*p+d*h*f,this._z=l*h*f-d*u*p,this._w=l*h*p+d*u*f;break;case"YZX":this._x=d*h*p+l*u*f,this._y=l*u*p+d*h*f,this._z=l*h*f-d*u*p,this._w=l*h*p-d*u*f;break;case"XZY":this._x=d*h*p-l*u*f,this._y=l*u*p-d*h*f,this._z=l*h*f+d*u*p,this._w=l*h*p+d*u*f;break;default:Ht("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],p=t[10],d=n+o+p;if(d>0){let u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(h-c)*u,this._y=(r-l)*u,this._z=(a-s)*u}else if(n>o&&n>p){let u=2*Math.sqrt(1+n-o-p);this._w=(h-c)/u,this._x=.25*u,this._y=(s+a)/u,this._z=(r+l)/u}else if(o>p){let u=2*Math.sqrt(1+o-n-p);this._w=(r-l)/u,this._x=(s+a)/u,this._y=.25*u,this._z=(c+h)/u}else{let u=2*Math.sqrt(1+p-n-o);this._w=(a-s)/u,this._x=(r+l)/u,this._y=(c+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(hn(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P0=class P0{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(vd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(vd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),h=2*(o*t-r*s),p=2*(r*n-a*t);return this.x=t+c*l+a*p-o*h,this.y=n+c*h+o*l-r*p,this.z=s+c*p+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=hn(this.x,e.x,t.x),this.y=hn(this.y,e.y,t.y),this.z=hn(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=hn(this.x,e,t),this.y=hn(this.y,e,t),this.z=hn(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(hn(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Mh.copy(this).projectOnVector(e),this.sub(Mh)}reflect(e){return this.sub(Mh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(hn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};P0.prototype.isVector3=!0;var F=P0,Mh=new F,vd=new Tn,I0=class I0{constructor(e,t,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],p=n[7],d=n[2],u=n[5],f=n[8],y=s[0],g=s[3],m=s[6],M=s[1],S=s[4],v=s[7],_=s[2],w=s[5],R=s[8];return r[0]=a*y+o*M+c*_,r[3]=a*g+o*S+c*w,r[6]=a*m+o*v+c*R,r[1]=l*y+h*M+p*_,r[4]=l*g+h*S+p*w,r[7]=l*m+h*v+p*R,r[2]=d*y+u*M+f*_,r[5]=d*g+u*S+f*w,r[8]=d*m+u*v+f*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],p=h*a-o*l,d=o*c-h*r,u=l*r-a*c,f=t*p+n*d+s*u;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/f;return e[0]=p*y,e[1]=(s*l-h*n)*y,e[2]=(o*n-s*a)*y,e[3]=d*y,e[4]=(h*t-s*c)*y,e[5]=(s*r-o*t)*y,e[6]=u*y,e[7]=(n*c-l*t)*y,e[8]=(a*t-n*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return ta("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Eh.makeScale(e,t)),this}rotate(e){return ta("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Eh.makeRotation(-e)),this}translate(e,t){return ta("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Eh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};I0.prototype.isMatrix3=!0;var Zt=I0,Eh=new Zt,yd=new Zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_d=new Zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function mm(){let i={enabled:!0,workingColorSpace:Do,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===yn&&(s.r=xr(s.r),s.g=xr(s.g),s.b=xr(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===yn&&(s.r=Oa(s.r),s.g=Oa(s.g),s.b=Oa(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===zs?Lo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ta("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ta("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Do]:{primaries:e,whitePoint:n,transfer:Lo,toXYZ:yd,fromXYZ:_d,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:gn},outputColorSpaceConfig:{drawingBufferColorSpace:gn}},[gn]:{primaries:e,whitePoint:n,transfer:yn,toXYZ:yd,fromXYZ:_d,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:gn}}}),i}var mn=mm();function xr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Oa(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ya,Oc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ya===void 0&&(ya=No("canvas")),ya.width=e.width,ya.height=e.height;let s=ya.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=ya}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=No("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=xr(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(xr(t[n]/255)*255):t[n]=xr(t[n]);return{data:t,width:e.width,height:e.height}}else return Ht("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},gm=0,Ga=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:gm++}),this.uuid=gr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Sh(s[a].image)):r.push(Sh(s[a]))}else r=Sh(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Sh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Oc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ht("Texture: Unable to serialize Texture."),{})}var xm=0,bh=new F,qi=class i extends Qs{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Qi,s=Qi,r=li,a=ir,o=Li,c=mi,l=i.DEFAULT_ANISOTROPY,h=zs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xm++}),this.uuid=gr(),this.name="",this.source=new Ga(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ye(0,0),this.repeat=new Ye(1,1),this.center=new Ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(bh).x}get height(){return this.source.getSize(bh).y}get depth(){return this.source.getSize(bh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ht(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ht(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==p0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Bn:e.x=e.x-Math.floor(e.x);break;case Qi:e.x=e.x<0?0:1;break;case Uc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Bn:e.y=e.y-Math.floor(e.y);break;case Qi:e.y=e.y<0?0:1;break;case Uc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};qi.DEFAULT_IMAGE=null;qi.DEFAULT_MAPPING=p0;qi.DEFAULT_ANISOTROPY=1;var D0=class D0{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],p=c[8],d=c[1],u=c[5],f=c[9],y=c[2],g=c[6],m=c[10];if(Math.abs(h-d)<.01&&Math.abs(p-y)<.01&&Math.abs(f-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(p+y)<.1&&Math.abs(f+g)<.1&&Math.abs(l+u+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(l+1)/2,v=(u+1)/2,_=(m+1)/2,w=(h+d)/4,R=(p+y)/4,x=(f+g)/4;return S>v&&S>_?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=w/n,r=R/n):v>_?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=w/s,r=x/s):_<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(_),n=R/r,s=x/r),this.set(n,s,r,t),this}let M=Math.sqrt((g-f)*(g-f)+(p-y)*(p-y)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(g-f)/M,this.y=(p-y)/M,this.z=(d-h)/M,this.w=Math.acos((l+u+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=hn(this.x,e.x,t.x),this.y=hn(this.y,e.y,t.y),this.z=hn(this.z,e.z,t.z),this.w=hn(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=hn(this.x,e,t),this.y=hn(this.y,e,t),this.z=hn(this.z,e,t),this.w=hn(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(hn(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};D0.prototype.isVector4=!0;var Nn=D0,Bc=class extends Qs{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:li,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Nn(0,0,e,t),this.scissorTest=!1,this.viewport=new Nn(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new qi(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:li,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ga(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Un=class extends Bc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Oo=class extends qi{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=ii,this.minFilter=ii,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Hc=class extends qi{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=ii,this.minFilter=ii,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var au=class au{constructor(e,t,n,s,r,a,o,c,l,h,p,d,u,f,y,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,h,p,d,u,f,y,g)}set(e,t,n,s,r,a,o,c,l,h,p,d,u,f,y,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=c,m[2]=l,m[6]=h,m[10]=p,m[14]=d,m[3]=u,m[7]=f,m[11]=y,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new au().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/_a.setFromMatrixColumn(e,0).length(),r=1/_a.setFromMatrixColumn(e,1).length(),a=1/_a.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),p=Math.sin(r);if(e.order==="XYZ"){let d=a*h,u=a*p,f=o*h,y=o*p;t[0]=c*h,t[4]=-c*p,t[8]=l,t[1]=u+f*l,t[5]=d-y*l,t[9]=-o*c,t[2]=y-d*l,t[6]=f+u*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*h,u=c*p,f=l*h,y=l*p;t[0]=d+y*o,t[4]=f*o-u,t[8]=a*l,t[1]=a*p,t[5]=a*h,t[9]=-o,t[2]=u*o-f,t[6]=y+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*h,u=c*p,f=l*h,y=l*p;t[0]=d-y*o,t[4]=-a*p,t[8]=f+u*o,t[1]=u+f*o,t[5]=a*h,t[9]=y-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*h,u=a*p,f=o*h,y=o*p;t[0]=c*h,t[4]=f*l-u,t[8]=d*l+y,t[1]=c*p,t[5]=y*l+d,t[9]=u*l-f,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,u=a*l,f=o*c,y=o*l;t[0]=c*h,t[4]=y-d*p,t[8]=f*p+u,t[1]=p,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=u*p+f,t[10]=d-y*p}else if(e.order==="XZY"){let d=a*c,u=a*l,f=o*c,y=o*l;t[0]=c*h,t[4]=-p,t[8]=l*h,t[1]=d*p+y,t[5]=a*h,t[9]=u*p-f,t[2]=f*p-u,t[6]=o*h,t[10]=y*p+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vm,e,ym)}lookAt(e,t,n){let s=this.elements;return rs.subVectors(e,t),rs.lengthSq()===0&&(rs.z=1),rs.normalize(),Rr.crossVectors(n,rs),Rr.lengthSq()===0&&(Math.abs(n.z)===1?rs.x+=1e-4:rs.z+=1e-4,rs.normalize(),Rr.crossVectors(n,rs)),Rr.normalize(),ql.crossVectors(rs,Rr),s[0]=Rr.x,s[4]=ql.x,s[8]=rs.x,s[1]=Rr.y,s[5]=ql.y,s[9]=rs.y,s[2]=Rr.z,s[6]=ql.z,s[10]=rs.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],p=n[5],d=n[9],u=n[13],f=n[2],y=n[6],g=n[10],m=n[14],M=n[3],S=n[7],v=n[11],_=n[15],w=s[0],R=s[4],x=s[8],A=s[12],P=s[1],B=s[5],T=s[9],U=s[13],I=s[2],k=s[6],j=s[10],q=s[14],Z=s[3],W=s[7],X=s[11],K=s[15];return r[0]=a*w+o*P+c*I+l*Z,r[4]=a*R+o*B+c*k+l*W,r[8]=a*x+o*T+c*j+l*X,r[12]=a*A+o*U+c*q+l*K,r[1]=h*w+p*P+d*I+u*Z,r[5]=h*R+p*B+d*k+u*W,r[9]=h*x+p*T+d*j+u*X,r[13]=h*A+p*U+d*q+u*K,r[2]=f*w+y*P+g*I+m*Z,r[6]=f*R+y*B+g*k+m*W,r[10]=f*x+y*T+g*j+m*X,r[14]=f*A+y*U+g*q+m*K,r[3]=M*w+S*P+v*I+_*Z,r[7]=M*R+S*B+v*k+_*W,r[11]=M*x+S*T+v*j+_*X,r[15]=M*A+S*U+v*q+_*K,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],p=e[6],d=e[10],u=e[14],f=e[3],y=e[7],g=e[11],m=e[15],M=c*u-l*d,S=o*u-l*p,v=o*d-c*p,_=a*u-l*h,w=a*d-c*h,R=a*p-o*h;return t*(y*M-g*S+m*v)-n*(f*M-g*_+m*w)+s*(f*S-y*_+m*R)-r*(f*v-y*w+g*R)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],h=e[10];return t*(a*h-o*l)-n*(r*h-o*c)+s*(r*l-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],p=e[9],d=e[10],u=e[11],f=e[12],y=e[13],g=e[14],m=e[15],M=t*o-n*a,S=t*c-s*a,v=t*l-r*a,_=n*c-s*o,w=n*l-r*o,R=s*l-r*c,x=h*y-p*f,A=h*g-d*f,P=h*m-u*f,B=p*g-d*y,T=p*m-u*y,U=d*m-u*g,I=M*U-S*T+v*B+_*P-w*A+R*x;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/I;return e[0]=(o*U-c*T+l*B)*k,e[1]=(s*T-n*U-r*B)*k,e[2]=(y*R-g*w+m*_)*k,e[3]=(d*w-p*R-u*_)*k,e[4]=(c*P-a*U-l*A)*k,e[5]=(t*U-s*P+r*A)*k,e[6]=(g*v-f*R-m*S)*k,e[7]=(h*R-d*v+u*S)*k,e[8]=(a*T-o*P+l*x)*k,e[9]=(n*P-t*T-r*x)*k,e[10]=(f*w-y*v+m*M)*k,e[11]=(p*v-h*w-u*M)*k,e[12]=(o*A-a*B-c*x)*k,e[13]=(t*B-n*A+s*x)*k,e[14]=(y*S-f*_-g*M)*k,e[15]=(h*_-p*S+d*M)*k,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,p=o+o,d=r*l,u=r*h,f=r*p,y=a*h,g=a*p,m=o*p,M=c*l,S=c*h,v=c*p,_=n.x,w=n.y,R=n.z;return s[0]=(1-(y+m))*_,s[1]=(u+v)*_,s[2]=(f-S)*_,s[3]=0,s[4]=(u-v)*w,s[5]=(1-(d+m))*w,s[6]=(g+M)*w,s[7]=0,s[8]=(f+S)*R,s[9]=(g-M)*R,s[10]=(1-(d+y))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=_a.set(s[0],s[1],s[2]).length(),o=_a.set(s[4],s[5],s[6]).length(),c=_a.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Us.copy(this);let l=1/a,h=1/o,p=1/c;return Us.elements[0]*=l,Us.elements[1]*=l,Us.elements[2]*=l,Us.elements[4]*=h,Us.elements[5]*=h,Us.elements[6]*=h,Us.elements[8]*=p,Us.elements[9]*=p,Us.elements[10]*=p,t.setFromRotationMatrix(Us),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,s,r,a,o=Bs,c=!1){let l=this.elements,h=2*r/(t-e),p=2*r/(n-s),d=(t+e)/(t-e),u=(n+s)/(n-s),f,y;if(c)f=r/(a-r),y=a*r/(a-r);else if(o===Bs)f=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===Ha)f=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=p,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Bs,c=!1){let l=this.elements,h=2/(t-e),p=2/(n-s),d=-(t+e)/(t-e),u=-(n+s)/(n-s),f,y;if(c)f=1/(a-r),y=a/(a-r);else if(o===Bs)f=-2/(a-r),y=-(a+r)/(a-r);else if(o===Ha)f=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=p,l[9]=0,l[13]=u,l[2]=0,l[6]=0,l[10]=f,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};au.prototype.isMatrix4=!0;var St=au,_a=new F,Us=new St,vm=new F(0,0,0),ym=new F(1,1,1),Rr=new F,ql=new F,rs=new F,Md=new St,Ed=new Tn,di=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],p=s[2],d=s[6],u=s[10];switch(t){case"XYZ":this._y=Math.asin(hn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-hn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(hn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-p,u),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-hn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(d,u),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(hn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-hn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:Ht("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Md.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Md,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ed.setFromEuler(this),this.setFromQuaternion(Ed,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};di.DEFAULT_ORDER="XYZ";var ka=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},_m=0,Sd=new F,Ma=new Tn,hr=new St,Zl=new F,vo=new F,Mm=new F,Em=new Tn,bd=new F(1,0,0),Td=new F(0,1,0),wd=new F(0,0,1),Ad={type:"added"},Sm={type:"removed"},Ea={type:"childadded",child:null},Th={type:"childremoved",child:null},$n=class i extends Qs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_m++}),this.uuid=gr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new F,t=new di,n=new Tn,s=new F(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new St},normalMatrix:{value:new Zt}}),this.matrix=new St,this.matrixWorld=new St,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ka,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ma.setFromAxisAngle(e,t),this.quaternion.multiply(Ma),this}rotateOnWorldAxis(e,t){return Ma.setFromAxisAngle(e,t),this.quaternion.premultiply(Ma),this}rotateX(e){return this.rotateOnAxis(bd,e)}rotateY(e){return this.rotateOnAxis(Td,e)}rotateZ(e){return this.rotateOnAxis(wd,e)}translateOnAxis(e,t){return Sd.copy(e).applyQuaternion(this.quaternion),this.position.add(Sd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(bd,e)}translateY(e){return this.translateOnAxis(Td,e)}translateZ(e){return this.translateOnAxis(wd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Zl.copy(e):Zl.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),vo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hr.lookAt(vo,Zl,this.up):hr.lookAt(Zl,vo,this.up),this.quaternion.setFromRotationMatrix(hr),s&&(hr.extractRotation(s.matrixWorld),Ma.setFromRotationMatrix(hr),this.quaternion.premultiply(Ma.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(zt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ad),Ea.child=e,this.dispatchEvent(Ea),Ea.child=null):zt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Sm),Th.child=e,this.dispatchEvent(Th),Th.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hr.multiply(e.parent.matrixWorld)),e.applyMatrix4(hr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ad),Ea.child=e,this.dispatchEvent(Ea),Ea.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vo,e,Mm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vo,Em,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let p=c[l];r(e.shapes,p)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),p=a(e.shapes),d=a(e.skeletons),u=a(e.animations),f=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),p.length>0&&(n.shapes=p),d.length>0&&(n.skeletons=d),u.length>0&&(n.animations=u),f.length>0&&(n.nodes=f)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};$n.DEFAULT_UP=new F(0,1,0);$n.DEFAULT_MATRIX_AUTO_UPDATE=!0;$n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var lt=class extends $n{constructor(){super(),this.isGroup=!0,this.type="Group"}},bm={type:"move"},Va=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new lt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new lt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new lt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let y of e.hand.values()){let g=t.getJointPose(y,n),m=this._getHandJoint(l,y);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=l.joints["index-finger-tip"],p=l.joints["thumb-tip"],d=h.position.distanceTo(p.position),u=.02,f=.005;l.inputState.pinching&&d>u+f?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=u-f&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(bm)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new lt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Ff={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Cr={h:0,s:0,l:0},$l={h:0,s:0,l:0};function wh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var ct=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=gn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,mn.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=mn.workingColorSpace){return this.r=e,this.g=t,this.b=n,mn.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=mn.workingColorSpace){if(e=pm(e,1),t=hn(t,0,1),n=hn(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=wh(a,r,e+1/3),this.g=wh(a,r,e),this.b=wh(a,r,e-1/3)}return mn.colorSpaceToWorking(this,s),this}setStyle(e,t=gn){function n(r){r!==void 0&&parseFloat(r)<1&&Ht("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ht("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ht("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=gn){let n=Ff[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ht("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xr(e.r),this.g=xr(e.g),this.b=xr(e.b),this}copyLinearToSRGB(e){return this.r=Oa(e.r),this.g=Oa(e.g),this.b=Oa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gn){return mn.workingToColorSpace(Fi.copy(this),e),Math.round(hn(Fi.r*255,0,255))*65536+Math.round(hn(Fi.g*255,0,255))*256+Math.round(hn(Fi.b*255,0,255))}getHexString(e=gn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=mn.workingColorSpace){mn.workingToColorSpace(Fi.copy(this),t);let n=Fi.r,s=Fi.g,r=Fi.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let p=a-o;switch(l=h<=.5?p/(a+o):p/(2-a-o),a){case n:c=(s-r)/p+(s<r?6:0);break;case s:c=(r-n)/p+2;break;case r:c=(n-s)/p+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=mn.workingColorSpace){return mn.workingToColorSpace(Fi.copy(this),t),e.r=Fi.r,e.g=Fi.g,e.b=Fi.b,e}getStyle(e=gn){mn.workingToColorSpace(Fi.copy(this),e);let t=Fi.r,n=Fi.g,s=Fi.b;return e!==gn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Cr),this.setHSL(Cr.h+e,Cr.s+t,Cr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Cr),e.getHSL($l);let n=_h(Cr.h,$l.h,t),s=_h(Cr.s,$l.s,t),r=_h(Cr.l,$l.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Fi=new ct;ct.NAMES=Ff;var Bo=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ct(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},na=class extends $n{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new di,this.environmentIntensity=1,this.environmentRotation=new di,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Fs=new F,dr=new F,Ah=new F,fr=new F,Sa=new F,ba=new F,Rd=new F,Rh=new F,Ch=new F,Ph=new F,Ih=new Nn,Dh=new Nn,Lh=new Nn,$s=class i{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Fs.subVectors(e,t),s.cross(Fs);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Fs.subVectors(s,t),dr.subVectors(n,t),Ah.subVectors(e,t);let a=Fs.dot(Fs),o=Fs.dot(dr),c=Fs.dot(Ah),l=dr.dot(dr),h=dr.dot(Ah),p=a*l-o*o;if(p===0)return r.set(0,0,0),null;let d=1/p,u=(l*c-o*h)*d,f=(a*h-o*c)*d;return r.set(1-u-f,f,u)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,fr)===null?!1:fr.x>=0&&fr.y>=0&&fr.x+fr.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,fr)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,fr.x),c.addScaledVector(a,fr.y),c.addScaledVector(o,fr.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return Ih.setScalar(0),Dh.setScalar(0),Lh.setScalar(0),Ih.fromBufferAttribute(e,t),Dh.fromBufferAttribute(e,n),Lh.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Ih,r.x),a.addScaledVector(Dh,r.y),a.addScaledVector(Lh,r.z),a}static isFrontFacing(e,t,n,s){return Fs.subVectors(n,t),dr.subVectors(e,t),Fs.cross(dr).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fs.subVectors(this.c,this.b),dr.subVectors(this.a,this.b),Fs.cross(dr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Sa.subVectors(s,n),ba.subVectors(r,n),Rh.subVectors(e,n);let c=Sa.dot(Rh),l=ba.dot(Rh);if(c<=0&&l<=0)return t.copy(n);Ch.subVectors(e,s);let h=Sa.dot(Ch),p=ba.dot(Ch);if(h>=0&&p<=h)return t.copy(s);let d=c*p-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(Sa,a);Ph.subVectors(e,r);let u=Sa.dot(Ph),f=ba.dot(Ph);if(f>=0&&u<=f)return t.copy(r);let y=u*l-c*f;if(y<=0&&l>=0&&f<=0)return o=l/(l-f),t.copy(n).addScaledVector(ba,o);let g=h*f-u*p;if(g<=0&&p-h>=0&&u-f>=0)return Rd.subVectors(r,s),o=(p-h)/(p-h+(u-f)),t.copy(s).addScaledVector(Rd,o);let m=1/(g+y+d);return a=y*m,o=d*m,t.copy(n).addScaledVector(Sa,a).addScaledVector(ba,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},js=class{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Os.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Os.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Os.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Os):Os.fromBufferAttribute(r,a),Os.applyMatrix4(e.matrixWorld),this.expandByPoint(Os);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Jl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Jl.copy(n.boundingBox)),Jl.applyMatrix4(e.matrixWorld),this.union(Jl)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Os),Os.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(yo),Kl.subVectors(this.max,yo),Ta.subVectors(e.a,yo),wa.subVectors(e.b,yo),Aa.subVectors(e.c,yo),Pr.subVectors(wa,Ta),Ir.subVectors(Aa,wa),Kr.subVectors(Ta,Aa);let t=[0,-Pr.z,Pr.y,0,-Ir.z,Ir.y,0,-Kr.z,Kr.y,Pr.z,0,-Pr.x,Ir.z,0,-Ir.x,Kr.z,0,-Kr.x,-Pr.y,Pr.x,0,-Ir.y,Ir.x,0,-Kr.y,Kr.x,0];return!Nh(t,Ta,wa,Aa,Kl)||(t=[1,0,0,0,1,0,0,0,1],!Nh(t,Ta,wa,Aa,Kl))?!1:(Ql.crossVectors(Pr,Ir),t=[Ql.x,Ql.y,Ql.z],Nh(t,Ta,wa,Aa,Kl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Os).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Os).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},pr=[new F,new F,new F,new F,new F,new F,new F,new F],Os=new F,Jl=new js,Ta=new F,wa=new F,Aa=new F,Pr=new F,Ir=new F,Kr=new F,yo=new F,Kl=new F,Ql=new F,Qr=new F;function Nh(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Qr.fromArray(i,r);let o=s.x*Math.abs(Qr.x)+s.y*Math.abs(Qr.y)+s.z*Math.abs(Qr.z),c=e.dot(Qr),l=t.dot(Qr),h=n.dot(Qr);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var oi=new F,jl=new Ye,Tm=0,Nt=class extends Qs{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Tm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=E0,this.updateRanges=[],this.gpuType=Ss,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)jl.fromBufferAttribute(this,t),jl.applyMatrix3(e),this.setXY(t,jl.x,jl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)oi.fromBufferAttribute(this,t),oi.applyMatrix3(e),this.setXYZ(t,oi.x,oi.y,oi.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)oi.fromBufferAttribute(this,t),oi.applyMatrix4(e),this.setXYZ(t,oi.x,oi.y,oi.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)oi.fromBufferAttribute(this,t),oi.applyNormalMatrix(e),this.setXYZ(t,oi.x,oi.y,oi.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)oi.fromBufferAttribute(this,t),oi.transformDirection(e),this.setXYZ(t,oi.x,oi.y,oi.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Zs(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Rn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Zs(t,this.array)),t}setX(e,t){return this.normalized&&(t=Rn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Zs(t,this.array)),t}setY(e,t){return this.normalized&&(t=Rn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Zs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Rn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Zs(t,this.array)),t}setW(e,t){return this.normalized&&(t=Rn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Rn(t,this.array),n=Rn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Rn(t,this.array),n=Rn(n,this.array),s=Rn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Rn(t,this.array),n=Rn(n,this.array),s=Rn(s,this.array),r=Rn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Ho=class extends Nt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var zo=class extends Nt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ot=class extends Nt{constructor(e,t,n){super(new Float32Array(e),t,n)}},wm=new js,_o=new F,Uh=new F,er=class{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):wm.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_o.subVectors(e,this.center);let t=_o.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(_o,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Uh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_o.copy(e.center).add(Uh)),this.expandByPoint(_o.copy(e.center).sub(Uh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Am=0,xs=new St,Fh=new $n,Ra=new F,as=new js,Mo=new js,bi=new F,Vt=class i extends Qs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Am++}),this.uuid=gr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(dm(e)?zo:Ho)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Zt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return xs.makeRotationFromQuaternion(e),this.applyMatrix4(xs),this}rotateX(e){return xs.makeRotationX(e),this.applyMatrix4(xs),this}rotateY(e){return xs.makeRotationY(e),this.applyMatrix4(xs),this}rotateZ(e){return xs.makeRotationZ(e),this.applyMatrix4(xs),this}translate(e,t,n){return xs.makeTranslation(e,t,n),this.applyMatrix4(xs),this}scale(e,t,n){return xs.makeScale(e,t,n),this.applyMatrix4(xs),this}lookAt(e){return Fh.lookAt(e),Fh.updateMatrix(),this.applyMatrix4(Fh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ra).negate(),this.translate(Ra.x,Ra.y,Ra.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ot(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ht("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new js);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){zt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];as.setFromBufferAttribute(r),this.morphTargetsRelative?(bi.addVectors(this.boundingBox.min,as.min),this.boundingBox.expandByPoint(bi),bi.addVectors(this.boundingBox.max,as.max),this.boundingBox.expandByPoint(bi)):(this.boundingBox.expandByPoint(as.min),this.boundingBox.expandByPoint(as.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&zt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new er);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){zt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){let n=this.boundingSphere.center;if(as.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Mo.setFromBufferAttribute(o),this.morphTargetsRelative?(bi.addVectors(as.min,Mo.min),as.expandByPoint(bi),bi.addVectors(as.max,Mo.max),as.expandByPoint(bi)):(as.expandByPoint(Mo.min),as.expandByPoint(Mo.max))}as.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)bi.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(bi));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)bi.fromBufferAttribute(o,l),c&&(Ra.fromBufferAttribute(e,l),bi.add(Ra)),s=Math.max(s,n.distanceToSquared(bi))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&zt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){zt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Nt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let x=0;x<n.count;x++)o[x]=new F,c[x]=new F;let l=new F,h=new F,p=new F,d=new Ye,u=new Ye,f=new Ye,y=new F,g=new F;function m(x,A,P){l.fromBufferAttribute(n,x),h.fromBufferAttribute(n,A),p.fromBufferAttribute(n,P),d.fromBufferAttribute(r,x),u.fromBufferAttribute(r,A),f.fromBufferAttribute(r,P),h.sub(l),p.sub(l),u.sub(d),f.sub(d);let B=1/(u.x*f.y-f.x*u.y);isFinite(B)&&(y.copy(h).multiplyScalar(f.y).addScaledVector(p,-u.y).multiplyScalar(B),g.copy(p).multiplyScalar(u.x).addScaledVector(h,-f.x).multiplyScalar(B),o[x].add(y),o[A].add(y),o[P].add(y),c[x].add(g),c[A].add(g),c[P].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let x=0,A=M.length;x<A;++x){let P=M[x],B=P.start,T=P.count;for(let U=B,I=B+T;U<I;U+=3)m(e.getX(U+0),e.getX(U+1),e.getX(U+2))}let S=new F,v=new F,_=new F,w=new F;function R(x){_.fromBufferAttribute(s,x),w.copy(_);let A=o[x];S.copy(A),S.sub(_.multiplyScalar(_.dot(A))).normalize(),v.crossVectors(w,A);let B=v.dot(c[x])<0?-1:1;a.setXYZW(x,S.x,S.y,S.z,B)}for(let x=0,A=M.length;x<A;++x){let P=M[x],B=P.start,T=P.count;for(let U=B,I=B+T;U<I;U+=3)R(e.getX(U+0)),R(e.getX(U+1)),R(e.getX(U+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Nt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,u=n.count;d<u;d++)n.setXYZ(d,0,0,0);let s=new F,r=new F,a=new F,o=new F,c=new F,l=new F,h=new F,p=new F;if(e)for(let d=0,u=e.count;d<u;d+=3){let f=e.getX(d+0),y=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,f),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,g),h.subVectors(a,r),p.subVectors(s,r),h.cross(p),o.fromBufferAttribute(n,f),c.fromBufferAttribute(n,y),l.fromBufferAttribute(n,g),o.add(h),c.add(h),l.add(h),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,u=t.count;d<u;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),p.subVectors(s,r),h.cross(p),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)bi.fromBufferAttribute(e,t),bi.normalize(),e.setXYZ(t,bi.x,bi.y,bi.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,p=o.normalized,d=new l.constructor(c.length*h),u=0,f=0;for(let y=0,g=c.length;y<g;y++){o.isInterleavedBufferAttribute?u=c[y]*o.data.stride+o.offset:u=c[y]*h;for(let m=0;m<h;m++)d[f++]=l[u++]}return new Nt(d,h,p)}if(this.index===null)return Ht("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,p=l.length;h<p;h++){let d=l[h],u=e(d,n);c.push(u)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let p=0,d=l.length;p<d;p++){let u=l[p];h.push(u.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],p=r[l];for(let d=0,u=p.length;d<u;d++)h.push(p[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let p=a[l];this.addGroup(p.start,p.count,p.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Go=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=E0,this.updateRanges=[],this.version=0,this.uuid=gr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},Yi=new F,Wa=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Yi.fromBufferAttribute(this,t),Yi.applyMatrix4(e),this.setXYZ(t,Yi.x,Yi.y,Yi.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Yi.fromBufferAttribute(this,t),Yi.applyNormalMatrix(e),this.setXYZ(t,Yi.x,Yi.y,Yi.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Yi.fromBufferAttribute(this,t),Yi.transformDirection(e),this.setXYZ(t,Yi.x,Yi.y,Yi.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Zs(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Rn(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Rn(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Rn(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Rn(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Rn(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Zs(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Zs(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Zs(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Zs(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Rn(t,this.array),n=Rn(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Rn(t,this.array),n=Rn(n,this.array),s=Rn(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Rn(t,this.array),n=Rn(n,this.array),s=Rn(s,this.array),r=Rn(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Uo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Nt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Uo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Oh=new F,Rm=new F,Cm=new Zt,os=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Oh.subVectors(n,t).cross(Rm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Oh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Cm.getNormalMatrix(e),s=this.coplanarPoint(Oh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Pm=0,vs=class extends Qs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pm++}),this.uuid=gr(),this.name="",this.type="Material",this.blending=Gr,this.side=zr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=h0,this.blendDst=d0,this.blendEquation=Es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ct(0,0,0),this.blendAlpha=0,this.depthFunc=Ba,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wc,this.stencilZFail=wc,this.stencilZPass=wc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ht(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ht(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ct().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new os().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ye().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ye().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},fi=class extends vs{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ct(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ca,Eo=new F,Pa=new F,Ia=new F,Da=new Ye,So=new Ye,Of=new St,ec=new F,bo=new F,tc=new F,Cd=new Ye,Bh=new Ye,Pd=new Ye,wi=class extends $n{constructor(e=new fi){if(super(),this.isSprite=!0,this.type="Sprite",Ca===void 0){Ca=new Vt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Go(t,5);Ca.setIndex([0,1,2,0,2,3]),Ca.setAttribute("position",new Wa(n,3,0,!1)),Ca.setAttribute("uv",new Wa(n,2,3,!1))}this.geometry=Ca,this.material=e,this.center=new Ye(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&zt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Pa.setFromMatrixScale(this.matrixWorld),Of.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ia.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Pa.multiplyScalar(-Ia.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;nc(ec.set(-.5,-.5,0),Ia,a,Pa,s,r),nc(bo.set(.5,-.5,0),Ia,a,Pa,s,r),nc(tc.set(.5,.5,0),Ia,a,Pa,s,r),Cd.set(0,0),Bh.set(1,0),Pd.set(1,1);let o=e.ray.intersectTriangle(ec,bo,tc,!1,Eo);if(o===null&&(nc(bo.set(-.5,.5,0),Ia,a,Pa,s,r),Bh.set(0,1),o=e.ray.intersectTriangle(ec,tc,bo,!1,Eo),o===null))return;let c=e.ray.origin.distanceTo(Eo);c<e.near||c>e.far||t.push({distance:c,point:Eo.clone(),uv:$s.getInterpolation(Eo,ec,bo,tc,Cd,Bh,Pd,new Ye),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function nc(i,e,t,n,s,r){Da.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(So.x=r*Da.x-s*Da.y,So.y=s*Da.x+r*Da.y):So.copy(Da),i.copy(e),i.x+=So.x,i.y+=So.y,i.applyMatrix4(Of)}var mr=new F,Hh=new F,ic=new F,sc=new F,ia=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=mr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(mr.copy(this.origin).addScaledVector(this.direction,t),mr.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Hh.copy(e).add(t).multiplyScalar(.5),ic.copy(t).sub(e).normalize(),sc.copy(this.origin).sub(Hh);let r=e.distanceTo(t)*.5,a=-this.direction.dot(ic),o=sc.dot(this.direction),c=-sc.dot(ic),l=sc.lengthSq(),h=Math.abs(1-a*a),p,d,u,f;if(h>0)if(p=a*c-o,d=a*o-c,f=r*h,p>=0)if(d>=-f)if(d<=f){let y=1/h;p*=y,d*=y,u=p*(p+a*d+2*o)+d*(a*p+d+2*c)+l}else d=r,p=Math.max(0,-(a*d+o)),u=-p*p+d*(d+2*c)+l;else d=-r,p=Math.max(0,-(a*d+o)),u=-p*p+d*(d+2*c)+l;else d<=-f?(p=Math.max(0,-(-a*r+o)),d=p>0?-r:Math.min(Math.max(-r,-c),r),u=-p*p+d*(d+2*c)+l):d<=f?(p=0,d=Math.min(Math.max(-r,-c),r),u=d*(d+2*c)+l):(p=Math.max(0,-(a*r+o)),d=p>0?r:Math.min(Math.max(-r,-c),r),u=-p*p+d*(d+2*c)+l);else d=a>0?-r:r,p=Math.max(0,-(a*d+o)),u=-p*p+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(Hh).addScaledVector(ic,d),u}intersectSphere(e,t){if(e.radius<0)return null;mr.subVectors(e.center,this.origin);let n=mr.dot(this.direction),s=mr.dot(mr)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),p>=0?(o=(e.min.z-d.z)*p,c=(e.max.z-d.z)*p):(o=(e.max.z-d.z)*p,c=(e.min.z-d.z)*p),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,mr)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,p=e.x-a.x,d=e.y-a.y,u=e.z-a.z,f=t.x-a.x,y=t.y-a.y,g=t.z-a.z,m=n.x-a.x,M=n.y-a.y,S=n.z-a.z,v=Math.abs(c),_=Math.abs(l),w=Math.abs(h),R,x,A,P,B,T,U,I,k,j,q,Z;if(v>=_&&v>=w?(A=c,T=p,k=f,Z=m,c>=0?(R=l,x=h,P=d,B=u,U=y,I=g,j=M,q=S):(R=h,x=l,P=u,B=d,U=g,I=y,j=S,q=M)):_>=w?(A=l,T=d,k=y,Z=M,l>=0?(R=h,x=c,P=u,B=p,U=g,I=f,j=S,q=m):(R=c,x=h,P=p,B=u,U=f,I=g,j=m,q=S)):(A=h,T=u,k=g,Z=S,h>=0?(R=c,x=l,P=p,B=d,U=f,I=y,j=m,q=M):(R=l,x=c,P=d,B=p,U=y,I=f,j=M,q=m)),A===0)return null;let W=R/A,X=x/A,K=1/A,ve=P-W*T,Ne=B-X*T,He=U-W*k,Qe=I-X*k,dt=j-W*Z,re=q-X*Z,ye=dt*Qe-re*He,Le=ve*re-Ne*dt,Se=He*Ne-Qe*ve;if(s){if(ye<0||Le<0||Se<0)return null}else if((ye<0||Le<0||Se<0)&&(ye>0||Le>0||Se>0))return null;let ke=ye+Le+Se;if(ke===0)return null;let ee=K*(ye*T+Le*k+Se*Z);return(ke>0?ee<0:ee>0)?null:this.at(ee/ke,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},En=class extends vs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new di,this.combine=f0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Id=new St,jr=new ia,rc=new er,Dd=new F,ac=new F,oc=new F,lc=new F,zh=new F,cc=new F,Ld=new F,uc=new F,Ue=class extends $n{constructor(e=new Vt,t=new En){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){cc.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],p=r[c];h!==0&&(zh.fromBufferAttribute(p,e),a?cc.addScaledVector(zh,h):cc.addScaledVector(zh.sub(t),h))}t.add(cc)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),rc.copy(n.boundingSphere),rc.applyMatrix4(r),jr.copy(e.ray).recast(e.near),!(rc.containsPoint(jr.origin)===!1&&(jr.intersectSphere(rc,Dd)===null||jr.origin.distanceToSquared(Dd)>(e.far-e.near)**2))&&(Id.copy(r).invert(),jr.copy(e.ray).applyMatrix4(Id),!(n.boundingBox!==null&&jr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,jr)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,p=r.attributes.normal,d=r.groups,u=r.drawRange;if(o!==null)if(Array.isArray(a))for(let f=0,y=d.length;f<y;f++){let g=d[f],m=a[g.materialIndex],M=Math.max(g.start,u.start),S=Math.min(o.count,Math.min(g.start+g.count,u.start+u.count));for(let v=M,_=S;v<_;v+=3){let w=o.getX(v),R=o.getX(v+1),x=o.getX(v+2);s=hc(this,m,e,n,l,h,p,w,R,x),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let f=Math.max(0,u.start),y=Math.min(o.count,u.start+u.count);for(let g=f,m=y;g<m;g+=3){let M=o.getX(g),S=o.getX(g+1),v=o.getX(g+2);s=hc(this,a,e,n,l,h,p,M,S,v),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let f=0,y=d.length;f<y;f++){let g=d[f],m=a[g.materialIndex],M=Math.max(g.start,u.start),S=Math.min(c.count,Math.min(g.start+g.count,u.start+u.count));for(let v=M,_=S;v<_;v+=3){let w=v,R=v+1,x=v+2;s=hc(this,m,e,n,l,h,p,w,R,x),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let f=Math.max(0,u.start),y=Math.min(c.count,u.start+u.count);for(let g=f,m=y;g<m;g+=3){let M=g,S=g+1,v=g+2;s=hc(this,a,e,n,l,h,p,M,S,v),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function Im(i,e,t,n,s,r,a,o){let c;if(e.side===Ci?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===zr,o),c===null)return null;uc.copy(o),uc.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(uc);return l<t.near||l>t.far?null:{distance:l,point:uc.clone(),object:i}}function hc(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,ac),i.getVertexPosition(c,oc),i.getVertexPosition(l,lc);let h=Im(i,e,t,n,ac,oc,lc,Ld);if(h){let p=new F;$s.getBarycoord(Ld,ac,oc,lc,p),s&&(h.uv=$s.getInterpolatedAttribute(s,o,c,l,p,new Ye)),r&&(h.uv1=$s.getInterpolatedAttribute(r,o,c,l,p,new Ye)),a&&(h.normal=$s.getInterpolatedAttribute(a,o,c,l,p,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new F,materialIndex:0};$s.getNormal(ac,oc,lc,d.normal),h.face=d,h.barycoord=p}return h}var ys=class extends qi{constructor(e=null,t=1,n=1,s,r,a,o,c,l=ii,h=ii,p,d){super(null,a,o,c,l,h,s,r,p,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Xa=class extends Nt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},La=new St,Nd=new St,dc=[],Ud=new js,Dm=new St,To=new Ue,wo=new er,Qn=class extends Ue{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Xa(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Dm)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new js),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,La),Ud.copy(e.boundingBox).applyMatrix4(La),this.boundingBox.union(Ud)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new er),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,La),wo.copy(e.boundingSphere).applyMatrix4(La),this.boundingSphere.union(wo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(To.geometry=this.geometry,To.material=this.material,To.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),wo.copy(this.boundingSphere),wo.applyMatrix4(n),e.ray.intersectsSphere(wo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,La),Nd.multiplyMatrices(n,La),To.matrixWorld=Nd,To.raycast(e,dc);for(let a=0,o=dc.length;a<o;a++){let c=dc[a];c.instanceId=r,c.object=this,t.push(c)}dc.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Xa(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ys(new Float32Array(s*this.count),s,this.count,pu,Ss));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ea=new er,Lm=new Ye(.5,.5),fc=new F,Ya=class{constructor(e=new os,t=new os,n=new os,s=new os,r=new os,a=new os){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Bs,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],p=r[5],d=r[6],u=r[7],f=r[8],y=r[9],g=r[10],m=r[11],M=r[12],S=r[13],v=r[14],_=r[15];if(s[0].setComponents(l-a,u-h,m-f,_-M).normalize(),s[1].setComponents(l+a,u+h,m+f,_+M).normalize(),s[2].setComponents(l+o,u+p,m+y,_+S).normalize(),s[3].setComponents(l-o,u-p,m-y,_-S).normalize(),n)s[4].setComponents(c,d,g,v).normalize(),s[5].setComponents(l-c,u-d,m-g,_-v).normalize();else if(s[4].setComponents(l-c,u-d,m-g,_-v).normalize(),t===Bs)s[5].setComponents(l+c,u+d,m+g,_+v).normalize();else if(t===Ha)s[5].setComponents(c,d,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ea.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ea.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ea)}intersectsSprite(e){ea.center.set(0,0,0);let t=Lm.distanceTo(e.center);return ea.radius=.7071067811865476+t,ea.applyMatrix4(e.matrixWorld),this.intersectsSphere(ea)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(fc.x=s.normal.x>0?e.max.x:e.min.x,fc.y=s.normal.y>0?e.max.y:e.min.y,fc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(fc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Lr=class extends vs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ct(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},zc=new F,Gc=new F,Fd=new St,Ao=new ia,pc=new er,Gh=new F,Od=new F,kc=class extends $n{constructor(e=new Vt,t=new Lr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)zc.fromBufferAttribute(t,s-1),Gc.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=zc.distanceTo(Gc);e.setAttribute("lineDistance",new Ot(n,1))}else Ht("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),pc.copy(n.boundingSphere),pc.applyMatrix4(s),pc.radius+=r,e.ray.intersectsSphere(pc)===!1)return;Fd.copy(s).invert(),Ao.copy(e.ray).applyMatrix4(Fd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let u=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let y=u,g=f-1;y<g;y+=l){let m=h.getX(y),M=h.getX(y+1),S=mc(this,e,Ao,c,m,M,y);S&&t.push(S)}if(this.isLineLoop){let y=h.getX(f-1),g=h.getX(u),m=mc(this,e,Ao,c,y,g,f-1);m&&t.push(m)}}else{let u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let y=u,g=f-1;y<g;y+=l){let m=mc(this,e,Ao,c,y,y+1,y);m&&t.push(m)}if(this.isLineLoop){let y=mc(this,e,Ao,c,f-1,u,f-1);y&&t.push(y)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function mc(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(zc.fromBufferAttribute(o,s),Gc.fromBufferAttribute(o,r),t.distanceSqToSegment(zc,Gc,Gh,Od)>n)return;Gh.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Gh);if(!(l<e.near||l>e.far))return{distance:l,point:Od.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Bd=new F,Hd=new F,tr=class extends kc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Bd.fromBufferAttribute(t,s),Hd.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Bd.distanceTo(Hd);e.setAttribute("lineDistance",new Ot(n,1))}else Ht("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var pi=class extends vs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ct(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},zd=new St,Qh=new ia,gc=new er,xc=new F,Ai=class extends $n{constructor(e=new Vt,t=new pi){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),gc.copy(n.boundingSphere),gc.applyMatrix4(s),gc.radius+=r,e.ray.intersectsSphere(gc)===!1)return;zd.copy(s).invert(),Qh.copy(e.ray).applyMatrix4(zd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,p=n.attributes.position;if(l!==null){let d=Math.max(0,a.start),u=Math.min(l.count,a.start+a.count);for(let f=d,y=u;f<y;f++){let g=l.getX(f);xc.fromBufferAttribute(p,g),Gd(xc,g,c,s,e,t,this)}}else{let d=Math.max(0,a.start),u=Math.min(p.count,a.start+a.count);for(let f=d,y=u;f<y;f++)xc.fromBufferAttribute(p,f),Gd(xc,f,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Gd(i,e,t,n,s,r,a){let o=Qh.distanceSqToPoint(i);if(o<t){let c=new F;Qh.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var ko=class extends qi{constructor(e=[],t=Vr,n,s,r,a,o,c,l,h){super(e,t,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Cn=class extends qi{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var _s=class extends qi{constructor(e,t,n=Hs,s,r,a,o=ii,c=ii,l,h=Ks,p=1){if(h!==Ks&&h!==sr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:p};super(d,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ga(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Vc=class extends _s{constructor(e,t=Hs,n=Vr,s,r,a=ii,o=ii,c,l=Ks){let h={width:e,height:e,depth:1},p=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,c,l),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Vo=class extends qi{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},dn=class i extends Vt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],p=[],d=0,u=0;f("z","y","x",-1,-1,n,t,e,a,r,0),f("z","y","x",1,-1,n,t,-e,a,r,1),f("x","z","y",1,1,e,n,t,s,a,2),f("x","z","y",1,-1,e,n,-t,s,a,3),f("x","y","z",1,-1,e,t,n,s,r,4),f("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Ot(l,3)),this.setAttribute("normal",new Ot(h,3)),this.setAttribute("uv",new Ot(p,2));function f(y,g,m,M,S,v,_,w,R,x,A){let P=v/R,B=_/x,T=v/2,U=_/2,I=w/2,k=R+1,j=x+1,q=0,Z=0,W=new F;for(let X=0;X<j;X++){let K=X*B-U;for(let ve=0;ve<k;ve++){let Ne=ve*P-T;W[y]=Ne*M,W[g]=K*S,W[m]=I,l.push(W.x,W.y,W.z),W[y]=0,W[g]=0,W[m]=w>0?1:-1,h.push(W.x,W.y,W.z),p.push(ve/R),p.push(1-X/x),q+=1}}for(let X=0;X<x;X++)for(let K=0;K<R;K++){let ve=d+K+k*X,Ne=d+K+k*(X+1),He=d+(K+1)+k*(X+1),Qe=d+(K+1)+k*X;c.push(ve,Ne,Qe),c.push(Ne,He,Qe),Z+=6}o.addGroup(u,Z,A),u+=Z,d+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var qa=class i extends Vt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],c=[],l=new F,h=new Ye;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let p=0,d=3;p<=t;p++,d+=3){let u=n+p/t*s;l.x=e*Math.cos(u),l.y=e*Math.sin(u),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,c.push(h.x,h.y)}for(let p=1;p<=t;p++)r.push(p,p+1,0);this.setIndex(r),this.setAttribute("position",new Ot(a,3)),this.setAttribute("normal",new Ot(o,3)),this.setAttribute("uv",new Ot(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},en=class i extends Vt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],p=[],d=[],u=[],f=0,y=[],g=n/2,m=0;M(),a===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new Ot(p,3)),this.setAttribute("normal",new Ot(d,3)),this.setAttribute("uv",new Ot(u,2));function M(){let v=new F,_=new F,w=0,R=(t-e)/n;for(let x=0;x<=r;x++){let A=[],P=x/r,B=P*(t-e)+e;for(let T=0;T<=s;T++){let U=T/s,I=U*c+o,k=Math.sin(I),j=Math.cos(I);_.x=B*k,_.y=-P*n+g,_.z=B*j,p.push(_.x,_.y,_.z),v.set(k,R,j).normalize(),d.push(v.x,v.y,v.z),u.push(U,1-P),A.push(f++)}y.push(A)}for(let x=0;x<s;x++)for(let A=0;A<r;A++){let P=y[A][x],B=y[A+1][x],T=y[A+1][x+1],U=y[A][x+1];(e>0||A!==0)&&(h.push(P,B,U),w+=3),(t>0||A!==r-1)&&(h.push(B,T,U),w+=3)}l.addGroup(m,w,0),m+=w}function S(v){let _=f,w=new Ye,R=new F,x=0,A=v===!0?e:t,P=v===!0?1:-1;for(let T=1;T<=s;T++)p.push(0,g*P,0),d.push(0,P,0),u.push(.5,.5),f++;let B=f;for(let T=0;T<=s;T++){let I=T/s*c+o,k=Math.cos(I),j=Math.sin(I);R.x=A*j,R.y=g*P,R.z=A*k,p.push(R.x,R.y,R.z),d.push(0,P,0),w.x=k*.5+.5,w.y=j*.5*P+.5,u.push(w.x,w.y),f++}for(let T=0;T<s;T++){let U=_+T,I=B+T;v===!0?h.push(I,I+1,U):h.push(I+1,I,U),x+=3}l.addGroup(m,x,v===!0?1:2),m+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},vr=class i extends en{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Wo=class i extends Vt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new Ot(r,3)),this.setAttribute("normal",new Ot(r.slice(),3)),this.setAttribute("uv",new Ot(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){let S=new F,v=new F,_=new F;for(let w=0;w<t.length;w+=3)u(t[w+0],S),u(t[w+1],v),u(t[w+2],_),c(S,v,_,M)}function c(M,S,v,_){let w=_+1,R=[];for(let x=0;x<=w;x++){R[x]=[];let A=M.clone().lerp(v,x/w),P=S.clone().lerp(v,x/w),B=w-x;for(let T=0;T<=B;T++)T===0&&x===w?R[x][T]=A:R[x][T]=A.clone().lerp(P,T/B)}for(let x=0;x<w;x++)for(let A=0;A<2*(w-x)-1;A++){let P=Math.floor(A/2);A%2===0?(d(R[x][P+1]),d(R[x+1][P]),d(R[x][P])):(d(R[x][P+1]),d(R[x+1][P+1]),d(R[x+1][P]))}}function l(M){let S=new F;for(let v=0;v<r.length;v+=3)S.x=r[v+0],S.y=r[v+1],S.z=r[v+2],S.normalize().multiplyScalar(M),r[v+0]=S.x,r[v+1]=S.y,r[v+2]=S.z}function h(){let M=new F;for(let S=0;S<r.length;S+=3){M.x=r[S+0],M.y=r[S+1],M.z=r[S+2];let v=g(M)/2/Math.PI+.5,_=m(M)/Math.PI+.5;a.push(v,1-_)}f(),p()}function p(){for(let M=0;M<a.length;M+=6){let S=a[M+0],v=a[M+2],_=a[M+4],w=Math.max(S,v,_),R=Math.min(S,v,_);w>.9&&R<.1&&(S<.2&&(a[M+0]+=1),v<.2&&(a[M+2]+=1),_<.2&&(a[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function u(M,S){let v=M*3;S.x=e[v+0],S.y=e[v+1],S.z=e[v+2]}function f(){let M=new F,S=new F,v=new F,_=new F,w=new Ye,R=new Ye,x=new Ye;for(let A=0,P=0;A<r.length;A+=9,P+=6){M.set(r[A+0],r[A+1],r[A+2]),S.set(r[A+3],r[A+4],r[A+5]),v.set(r[A+6],r[A+7],r[A+8]),w.set(a[P+0],a[P+1]),R.set(a[P+2],a[P+3]),x.set(a[P+4],a[P+5]),_.copy(M).add(S).add(v).divideScalar(3);let B=g(_);y(w,P+0,M,B),y(R,P+2,S,B),y(x,P+4,v,B)}}function y(M,S,v,_){_<0&&M.x===1&&(a[S]=M.x-1),v.x===0&&v.z===0&&(a[S]=_/2/Math.PI+.5)}function g(M){return Math.atan2(M.z,-M.x)}function m(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var vc=new F,yc=new F,kh=new F,_c=new $s,Za=class extends Vt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let s=Math.pow(10,4),r=Math.cos(Ac*t),a=e.getIndex(),o=e.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],h=["a","b","c"],p=new Array(3),d={},u=[];for(let f=0;f<c;f+=3){a?(l[0]=a.getX(f),l[1]=a.getX(f+1),l[2]=a.getX(f+2)):(l[0]=f,l[1]=f+1,l[2]=f+2);let{a:y,b:g,c:m}=_c;if(y.fromBufferAttribute(o,l[0]),g.fromBufferAttribute(o,l[1]),m.fromBufferAttribute(o,l[2]),_c.getNormal(kh),p[0]=`${Math.round(y.x*s)},${Math.round(y.y*s)},${Math.round(y.z*s)}`,p[1]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,p[2]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,!(p[0]===p[1]||p[1]===p[2]||p[2]===p[0]))for(let M=0;M<3;M++){let S=(M+1)%3,v=p[M],_=p[S],w=_c[h[M]],R=_c[h[S]],x=`${v}_${_}`,A=`${_}_${v}`;A in d&&d[A]?(kh.dot(d[A].normal)<=r&&(u.push(w.x,w.y,w.z),u.push(R.x,R.y,R.z)),d[A]=null):x in d||(d[x]={index0:l[M],index1:l[S],normal:kh.clone()})}}for(let f in d)if(d[f]){let{index0:y,index1:g}=d[f];vc.fromBufferAttribute(o,y),yc.fromBufferAttribute(o,g),u.push(vc.x,vc.y,vc.z),u.push(yc.x,yc.y,yc.z)}this.setAttribute("position",new Ot(u,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},ls=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ht("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,u=(a-h)/d;return(s+u)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new Ye:new F);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new F,s=[],r=[],a=[],o=new F,c=new St;for(let u=0;u<=e;u++){let f=u/e;s[u]=this.getTangentAt(f,new F)}r[0]=new F,a[0]=new F;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),p=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),p<=l&&(l=p,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let u=1;u<=e;u++){if(r[u]=r[u-1].clone(),a[u]=a[u-1].clone(),o.crossVectors(s[u-1],s[u]),o.length()>Number.EPSILON){o.normalize();let f=Math.acos(hn(s[u-1].dot(s[u]),-1,1));r[u].applyMatrix4(c.makeRotationAxis(o,f))}a[u].crossVectors(s[u],r[u])}if(t===!0){let u=Math.acos(hn(r[0].dot(r[e]),-1,1));u/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(u=-u);for(let f=1;f<=e;f++)r[f].applyMatrix4(c.makeRotationAxis(s[f],u*f)),a[f].crossVectors(s[f],r[f])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},$a=class extends ls{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new Ye){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),p=Math.sin(this.aRotation),d=c-this.aX,u=l-this.aY;c=d*h-u*p+this.aX,l=d*p+u*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Wc=class extends $a{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function b0(){let i=0,e=0,t=0,n=0;function s(r,a,o,c){i=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,p){let d=(a-r)/l-(o-r)/(l+h)+(o-a)/h,u=(o-a)/h-(c-a)/(h+p)+(c-o)/p;d*=h,u*=h,s(a,o,d,u)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var kd=new F,Vd=new F,Vh=new b0,Wh=new b0,Xh=new b0,Oi=class extends ls{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new F){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(Vd.subVectors(s[0],s[1]).add(s[0]),l=Vd);let p=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(kd.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=kd),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,f=Math.pow(l.distanceToSquared(p),u),y=Math.pow(p.distanceToSquared(d),u),g=Math.pow(d.distanceToSquared(h),u);y<1e-4&&(y=1),f<1e-4&&(f=y),g<1e-4&&(g=y),Vh.initNonuniformCatmullRom(l.x,p.x,d.x,h.x,f,y,g),Wh.initNonuniformCatmullRom(l.y,p.y,d.y,h.y,f,y,g),Xh.initNonuniformCatmullRom(l.z,p.z,d.z,h.z,f,y,g)}else this.curveType==="catmullrom"&&(Vh.initCatmullRom(l.x,p.x,d.x,h.x,this.tension),Wh.initCatmullRom(l.y,p.y,d.y,h.y,this.tension),Xh.initCatmullRom(l.z,p.z,d.z,h.z,this.tension));return n.set(Vh.calc(c),Wh.calc(c),Xh.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new F().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Wd(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,c=i*o;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*o+r*i+t}function Nm(i,e){let t=1-i;return t*t*e}function Um(i,e){return 2*(1-i)*i*e}function Fm(i,e){return i*i*e}function Co(i,e,t,n){return Nm(i,e)+Um(i,t)+Fm(i,n)}function Om(i,e){let t=1-i;return t*t*t*e}function Bm(i,e){let t=1-i;return 3*t*t*i*e}function Hm(i,e){return 3*(1-i)*i*i*e}function zm(i,e){return i*i*i*e}function Po(i,e,t,n,s){return Om(i,e)+Bm(i,t)+Hm(i,n)+zm(i,s)}var Xo=class extends ls{constructor(e=new Ye,t=new Ye,n=new Ye,s=new Ye){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Ye){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Po(e,s.x,r.x,a.x,o.x),Po(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Xc=class extends ls{constructor(e=new F,t=new F,n=new F,s=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new F){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Po(e,s.x,r.x,a.x,o.x),Po(e,s.y,r.y,a.y,o.y),Po(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Yo=class extends ls{constructor(e=new Ye,t=new Ye){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ye){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ye){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Nr=class extends ls{constructor(e=new F,t=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new F){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new F){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},qo=class extends ls{constructor(e=new Ye,t=new Ye,n=new Ye){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ye){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Co(e,s.x,r.x,a.x),Co(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Zo=class extends ls{constructor(e=new F,t=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new F){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Co(e,s.x,r.x,a.x),Co(e,s.y,r.y,a.y),Co(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},$o=class extends ls{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ye){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],p=s[a>s.length-3?s.length-1:a+2];return n.set(Wd(o,c.x,l.x,h.x,p.x),Wd(o,c.y,l.y,h.y,p.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Ye().fromArray(s))}return this}},Yc=Object.freeze({__proto__:null,ArcCurve:Wc,CatmullRomCurve3:Oi,CubicBezierCurve:Xo,CubicBezierCurve3:Xc,EllipseCurve:$a,LineCurve:Yo,LineCurve3:Nr,QuadraticBezierCurve:qo,QuadraticBezierCurve3:Zo,SplineCurve:$o}),Ja=class extends ls{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Yc[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Yc[s.type]().fromJSON(s))}return this}},Ms=class extends Ja{constructor(e){super(),this.type="Path",this.currentPoint=new Ye,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Yo(this.currentPoint.clone(),new Ye(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new qo(this.currentPoint.clone(),new Ye(e,t),new Ye(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new Xo(this.currentPoint.clone(),new Ye(e,t),new Ye(n,s),new Ye(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new $o(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,a,o,c),this}absellipse(e,t,n,s,r,a,o,c){let l=new $a(e,t,n,s,r,a,o,c);if(this.curves.length>0){let p=l.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},jn=class extends Ms{constructor(e){super(e),this.uuid=gr(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Ms().fromJSON(s))}return this}};function Gm(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Bf(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l;if(n&&(r=Ym(i,e,r,t)),i.length>80*t){o=i[0],c=i[1];let h=o,p=c;for(let d=t;d<s;d+=t){let u=i[d],f=i[d+1];u<o&&(o=u),f<c&&(c=f),u>h&&(h=u),f>p&&(p=f)}l=Math.max(h-o,p-c),l=l!==0?32767/l:0}return Jo(r,a,t,o,c,l,0),a}function Bf(i,e,t,n,s){let r;if(s===ig(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=Xd(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=Xd(a/n|0,i[a],i[a+1],r);return r&&Ka(r,r.next)&&(Qo(r),r=r.next),r}function sa(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Ka(t,t.next)||Zn(t.prev,t,t.next)===0)){if(Qo(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Jo(i,e,t,n,s,r,a){if(!i)return;!a&&r&&Km(i,n,s,r);let o=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?Vm(i,n,s,r):km(i)){e.push(c.i,i.i,l.i),Qo(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=Wm(sa(i),e),Jo(i,e,t,n,s,r,2)):a===2&&Xm(i,e,t,n,s,r):Jo(sa(i),e,t,n,s,r,1);break}}}function km(i){let e=i.prev,t=i,n=i.next;if(Zn(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,c=t.y,l=n.y,h=Math.min(s,r,a),p=Math.min(o,c,l),d=Math.max(s,r,a),u=Math.max(o,c,l),f=n.next;for(;f!==e;){if(f.x>=h&&f.x<=d&&f.y>=p&&f.y<=u&&Ro(s,o,r,c,a,l,f.x,f.y)&&Zn(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function Vm(i,e,t,n){let s=i.prev,r=i,a=i.next;if(Zn(s,r,a)>=0)return!1;let o=s.x,c=r.x,l=a.x,h=s.y,p=r.y,d=a.y,u=Math.min(o,c,l),f=Math.min(h,p,d),y=Math.max(o,c,l),g=Math.max(h,p,d),m=jh(u,f,e,t,n),M=jh(y,g,e,t,n),S=i.prevZ,v=i.nextZ;for(;S&&S.z>=m&&v&&v.z<=M;){if(S.x>=u&&S.x<=y&&S.y>=f&&S.y<=g&&S!==s&&S!==a&&Ro(o,h,c,p,l,d,S.x,S.y)&&Zn(S.prev,S,S.next)>=0||(S=S.prevZ,v.x>=u&&v.x<=y&&v.y>=f&&v.y<=g&&v!==s&&v!==a&&Ro(o,h,c,p,l,d,v.x,v.y)&&Zn(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;S&&S.z>=m;){if(S.x>=u&&S.x<=y&&S.y>=f&&S.y<=g&&S!==s&&S!==a&&Ro(o,h,c,p,l,d,S.x,S.y)&&Zn(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;v&&v.z<=M;){if(v.x>=u&&v.x<=y&&v.y>=f&&v.y<=g&&v!==s&&v!==a&&Ro(o,h,c,p,l,d,v.x,v.y)&&Zn(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Wm(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Ka(n,s)&&zf(n,t,t.next,s)&&Ko(n,s)&&Ko(s,n)&&(e.push(n.i,t.i,s.i),Qo(t),Qo(t.next),t=i=s),t=t.next}while(t!==i);return sa(t)}function Xm(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&eg(a,o)){let c=Gf(a,o);a=sa(a,a.next),c=sa(c,c.next),Jo(a,e,t,n,s,r,0),Jo(c,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Ym(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,c=r<a-1?e[r+1]*n:i.length,l=Bf(i,o,c,n,!1);l===l.next&&(l.steiner=!0),s.push(jm(l))}s.sort(qm);for(let r=0;r<s.length;r++)t=Zm(s[r],t);return t}function qm(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Zm(i,e){let t=$m(i,e);if(!t)return e;let n=Gf(t,i);return sa(n,n.next),sa(t,t.next)}function $m(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(Ka(i,t))return t;do{if(Ka(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let p=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(p<=n&&p>r&&(r=p,a=t.x<t.next.x?t:t.next,p===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,c=a.x,l=a.y,h=1/0;t=a;do{if(n>=t.x&&t.x>=c&&n!==t.x&&Hf(s<l?n:r,s,c,l,s<l?r:n,s,t.x,t.y)){let p=Math.abs(s-t.y)/(n-t.x);Ko(t,i)&&(p<h||p===h&&(t.x>a.x||t.x===a.x&&Jm(a,t)))&&(a=t,h=p)}t=t.next}while(t!==o);return a}function Jm(i,e){return Zn(i.prev,i,e.prev)<0&&Zn(e.next,i,i.next)<0}function Km(i,e,t,n){let s=i;do s.z===0&&(s.z=jh(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Qm(s)}function Qm(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let l=0;l<t&&(o++,a=a.nextZ,!!a);l++);let c=t;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function jh(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function jm(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Hf(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Ro(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&Hf(i,e,t,n,s,r,a,o)}function eg(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!tg(i,e)&&(Ko(i,e)&&Ko(e,i)&&ng(i,e)&&(Zn(i.prev,i,e.prev)||Zn(i,e.prev,e))||Ka(i,e)&&Zn(i.prev,i,i.next)>0&&Zn(e.prev,e,e.next)>0)}function Zn(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Ka(i,e){return i.x===e.x&&i.y===e.y}function zf(i,e,t,n){let s=Ec(Zn(i,e,t)),r=Ec(Zn(i,e,n)),a=Ec(Zn(t,n,i)),o=Ec(Zn(t,n,e));return!!(s!==r&&a!==o||s===0&&Mc(i,t,e)||r===0&&Mc(i,n,e)||a===0&&Mc(t,i,n)||o===0&&Mc(t,e,n))}function Mc(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Ec(i){return i>0?1:i<0?-1:0}function tg(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&zf(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Ko(i,e){return Zn(i.prev,i,i.next)<0?Zn(i,e,i.next)>=0&&Zn(i,i.prev,e)>=0:Zn(i,e,i.prev)<0||Zn(i,i.next,e)<0}function ng(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Gf(i,e){let t=e0(i.i,i.x,i.y),n=e0(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Xd(i,e,t,n){let s=e0(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Qo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function e0(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function ig(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var t0=class{static triangulate(e,t,n=2){return Gm(e,t,n)}},Js=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Yd(e),qd(n,e);let a=e.length;t.forEach(Yd);for(let c=0;c<t.length;c++)s.push(a),a+=t[c].length,qd(n,t[c]);let o=t0.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function Yd(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function qd(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var ji=class i extends Vt{constructor(e=new jn([new Ye(.5,.5),new Ye(-.5,.5),new Ye(-.5,-.5),new Ye(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,c=e.length;o<c;o++){let l=e[o];a(l)}this.setAttribute("position",new Ot(s,3)),this.setAttribute("uv",new Ot(r,2)),this.computeVertexNormals();function a(o){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,p=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,u=t.bevelThickness!==void 0?t.bevelThickness:.2,f=t.bevelSize!==void 0?t.bevelSize:u-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:sg,S,v=!1,_,w,R,x;if(m){S=m.getSpacedPoints(h),v=!0,d=!1;let le=m.isCatmullRomCurve3?m.closed:!1;_=m.computeFrenetFrames(h,le),w=new F,R=new F,x=new F}d||(g=0,u=0,f=0,y=0);let A=o.extractPoints(l),P=A.shape,B=A.holes;if(!Js.isClockWise(P)){P=P.reverse();for(let le=0,pe=B.length;le<pe;le++){let te=B[le];Js.isClockWise(te)&&(B[le]=te.reverse())}}function U(le){let te=10000000000000001e-36,he=le[0];for(let xe=1;xe<=le.length;xe++){let Xe=xe%le.length,Ve=le[Xe],st=Ve.x-he.x,it=Ve.y-he.y,Q=st*st+it*it,_t=Math.max(Math.abs(Ve.x),Math.abs(Ve.y),Math.abs(he.x),Math.abs(he.y)),vt=te*_t*_t;if(Q<=vt){le.splice(Xe,1),xe--;continue}he=Ve}}U(P),B.forEach(U);let I=B.length,k=P;for(let le=0;le<I;le++){let pe=B[le];P=P.concat(pe)}function j(le,pe,te){return pe||zt("ExtrudeGeometry: vec does not exist"),le.clone().addScaledVector(pe,te)}let q=P.length;function Z(le,pe,te){let he,xe,Xe,Ve=le.x-pe.x,st=le.y-pe.y,it=te.x-le.x,Q=te.y-le.y,_t=Ve*Ve+st*st,vt=Ve*Q-st*it;if(Math.abs(vt)>Number.EPSILON){let H=Math.sqrt(_t),E=Math.sqrt(it*it+Q*Q),ae=pe.x-st/H,ue=pe.y+Ve/H,_e=te.x-Q/E,Ze=te.y+it/E,Ke=((_e-ae)*Q-(Ze-ue)*it)/(Ve*Q-st*it);he=ae+Ve*Ke-le.x,xe=ue+st*Ke-le.y;let Ie=he*he+xe*xe;if(Ie<=2)return new Ye(he,xe);Xe=Math.sqrt(Ie/2)}else{let H=!1;Ve>Number.EPSILON?it>Number.EPSILON&&(H=!0):Ve<-Number.EPSILON?it<-Number.EPSILON&&(H=!0):Math.sign(st)===Math.sign(Q)&&(H=!0),H?(he=-st,xe=Ve,Xe=Math.sqrt(_t)):(he=Ve,xe=st,Xe=Math.sqrt(_t/2))}return new Ye(he/Xe,xe/Xe)}let W=[];for(let le=0,pe=k.length,te=pe-1,he=le+1;le<pe;le++,te++,he++)te===pe&&(te=0),he===pe&&(he=0),W[le]=Z(k[le],k[te],k[he]);let X=[],K,ve=W.concat();for(let le=0,pe=I;le<pe;le++){let te=B[le];K=[];for(let he=0,xe=te.length,Xe=xe-1,Ve=he+1;he<xe;he++,Xe++,Ve++)Xe===xe&&(Xe=0),Ve===xe&&(Ve=0),K[he]=Z(te[he],te[Xe],te[Ve]);X.push(K),ve=ve.concat(K)}let Ne;if(g===0)Ne=Js.triangulateShape(k,B);else{let le=[],pe=[];for(let te=0;te<g;te++){let he=te/g,xe=u*Math.cos(he*Math.PI/2),Xe=f*Math.sin(he*Math.PI/2)+y;for(let Ve=0,st=k.length;Ve<st;Ve++){let it=j(k[Ve],W[Ve],Xe);Le(it.x,it.y,-xe),he===0&&le.push(it)}for(let Ve=0,st=I;Ve<st;Ve++){let it=B[Ve];K=X[Ve];let Q=[];for(let _t=0,vt=it.length;_t<vt;_t++){let H=j(it[_t],K[_t],Xe);Le(H.x,H.y,-xe),he===0&&Q.push(H)}he===0&&pe.push(Q)}}Ne=Js.triangulateShape(le,pe)}let He=Ne.length,Qe=f+y;for(let le=0;le<q;le++){let pe=d?j(P[le],ve[le],Qe):P[le];v?(R.copy(_.normals[0]).multiplyScalar(pe.x),w.copy(_.binormals[0]).multiplyScalar(pe.y),x.copy(S[0]).add(R).add(w),Le(x.x,x.y,x.z)):Le(pe.x,pe.y,0)}for(let le=1;le<=h;le++)for(let pe=0;pe<q;pe++){let te=d?j(P[pe],ve[pe],Qe):P[pe];v?(R.copy(_.normals[le]).multiplyScalar(te.x),w.copy(_.binormals[le]).multiplyScalar(te.y),x.copy(S[le]).add(R).add(w),Le(x.x,x.y,x.z)):Le(te.x,te.y,p/h*le)}for(let le=g-1;le>=0;le--){let pe=le/g,te=u*Math.cos(pe*Math.PI/2),he=f*Math.sin(pe*Math.PI/2)+y;for(let xe=0,Xe=k.length;xe<Xe;xe++){let Ve=j(k[xe],W[xe],he);Le(Ve.x,Ve.y,p+te)}for(let xe=0,Xe=B.length;xe<Xe;xe++){let Ve=B[xe];K=X[xe];for(let st=0,it=Ve.length;st<it;st++){let Q=j(Ve[st],K[st],he);v?Le(Q.x,Q.y+S[h-1].y,S[h-1].x+te):Le(Q.x,Q.y,p+te)}}}dt(),re();function dt(){let le=s.length/3;if(d){let pe=0,te=q*pe;for(let he=0;he<He;he++){let xe=Ne[he];Se(xe[2]+te,xe[1]+te,xe[0]+te)}pe=h+g*2,te=q*pe;for(let he=0;he<He;he++){let xe=Ne[he];Se(xe[0]+te,xe[1]+te,xe[2]+te)}}else{for(let pe=0;pe<He;pe++){let te=Ne[pe];Se(te[2],te[1],te[0])}for(let pe=0;pe<He;pe++){let te=Ne[pe];Se(te[0]+q*h,te[1]+q*h,te[2]+q*h)}}n.addGroup(le,s.length/3-le,0)}function re(){let le=s.length/3,pe=0;ye(k,pe),pe+=k.length;for(let te=0,he=B.length;te<he;te++){let xe=B[te];ye(xe,pe),pe+=xe.length}n.addGroup(le,s.length/3-le,1)}function ye(le,pe){let te=le.length;for(;--te>=0;){let he=te,xe=te-1;xe<0&&(xe=le.length-1);for(let Xe=0,Ve=h+g*2;Xe<Ve;Xe++){let st=q*Xe,it=q*(Xe+1),Q=pe+he+st,_t=pe+xe+st,vt=pe+xe+it,H=pe+he+it;ke(Q,_t,vt,H)}}}function Le(le,pe,te){c.push(le),c.push(pe),c.push(te)}function Se(le,pe,te){ee(le),ee(pe),ee(te);let he=s.length/3,xe=M.generateTopUV(n,s,he-3,he-2,he-1);We(xe[0]),We(xe[1]),We(xe[2])}function ke(le,pe,te,he){ee(le),ee(pe),ee(he),ee(pe),ee(te),ee(he);let xe=s.length/3,Xe=M.generateSideWallUV(n,s,xe-6,xe-3,xe-2,xe-1);We(Xe[0]),We(Xe[1]),We(Xe[3]),We(Xe[1]),We(Xe[2]),We(Xe[3])}function ee(le){s.push(c[le*3+0]),s.push(c[le*3+1]),s.push(c[le*3+2])}function We(le){r.push(le.x),r.push(le.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return rg(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Yc[s.type]().fromJSON(s)),new i(n,e.options)}},sg={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],c=e[n*3+1],l=e[s*3],h=e[s*3+1];return[new Ye(r,a),new Ye(o,c),new Ye(l,h)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],p=e[n*3+2],d=e[s*3],u=e[s*3+1],f=e[s*3+2],y=e[r*3],g=e[r*3+1],m=e[r*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new Ye(a,1-c),new Ye(l,1-p),new Ye(d,1-f),new Ye(y,1-m)]:[new Ye(o,1-c),new Ye(h,1-p),new Ye(u,1-f),new Ye(g,1-m)]}};function rg(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var nr=class i extends Wo{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},jo=class i extends Vt{constructor(e=[new Ye(0,-.5),new Ye(.5,0),new Ye(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=hn(s,0,Math.PI*2);let r=[],a=[],o=[],c=[],l=[],h=1/t,p=new F,d=new Ye,u=new F,f=new F,y=new F,g=0,m=0;for(let M=0;M<=e.length-1;M++)switch(M){case 0:g=e[M+1].x-e[M].x,m=e[M+1].y-e[M].y,u.x=m*1,u.y=-g,u.z=m*0,y.copy(u),u.normalize(),c.push(u.x,u.y,u.z);break;case e.length-1:c.push(y.x,y.y,y.z);break;default:g=e[M+1].x-e[M].x,m=e[M+1].y-e[M].y,u.x=m*1,u.y=-g,u.z=m*0,f.copy(u),u.x+=y.x,u.y+=y.y,u.z+=y.z,u.normalize(),c.push(u.x,u.y,u.z),y.copy(f)}for(let M=0;M<=t;M++){let S=n+M*h*s,v=Math.sin(S),_=Math.cos(S);for(let w=0;w<=e.length-1;w++){p.x=e[w].x*v,p.y=e[w].y,p.z=e[w].x*_,a.push(p.x,p.y,p.z),d.x=M/t,d.y=w/(e.length-1),o.push(d.x,d.y);let R=c[3*w+0]*v,x=c[3*w+1],A=c[3*w+0]*_;l.push(R,x,A)}}for(let M=0;M<t;M++)for(let S=0;S<e.length-1;S++){let v=S+M*e.length,_=v,w=v+e.length,R=v+e.length+1,x=v+1;r.push(_,w,x),r.push(R,x,w)}this.setIndex(r),this.setAttribute("position",new Ot(a,3)),this.setAttribute("uv",new Ot(o,2)),this.setAttribute("normal",new Ot(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},el=class i extends Wo{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},$t=class i extends Vt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,p=e/o,d=t/c,u=[],f=[],y=[],g=[];for(let m=0;m<h;m++){let M=m*d-a;for(let S=0;S<l;S++){let v=S*p-r;f.push(v,-M,0),y.push(0,0,1),g.push(S/o),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let M=0;M<o;M++){let S=M+l*m,v=M+l*(m+1),_=M+1+l*(m+1),w=M+1+l*m;u.push(S,v,w),u.push(v,_,w)}this.setIndex(u),this.setAttribute("position",new Ot(f,3)),this.setAttribute("normal",new Ot(y,3)),this.setAttribute("uv",new Ot(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},ra=class i extends Vt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],c=[],l=[],h=[],p=e,d=(t-e)/s,u=new F,f=new Ye;for(let y=0;y<=s;y++){for(let g=0;g<=n;g++){let m=r+g/n*a;u.x=p*Math.cos(m),u.y=p*Math.sin(m),c.push(u.x,u.y,u.z),l.push(0,0,1),f.x=(u.x/t+1)/2,f.y=(u.y/t+1)/2,h.push(f.x,f.y)}p+=d}for(let y=0;y<s;y++){let g=y*(n+1);for(let m=0;m<n;m++){let M=m+g,S=M,v=M+n+1,_=M+n+2,w=M+1;o.push(S,v,w),o.push(v,_,w)}}this.setIndex(o),this.setAttribute("position",new Ot(c,3)),this.setAttribute("normal",new Ot(l,3)),this.setAttribute("uv",new Ot(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Ur=class i extends Vt{constructor(e=new jn([new Ye(0,.5),new Ye(-.5,-.5),new Ye(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],a=[],o=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(o,c,h),o+=c,c=0;this.setIndex(n),this.setAttribute("position",new Ot(s,3)),this.setAttribute("normal",new Ot(r,3)),this.setAttribute("uv",new Ot(a,2));function l(h){let p=s.length/3,d=h.extractPoints(t),u=d.shape,f=d.holes;Js.isClockWise(u)===!1&&(u=u.reverse());for(let g=0,m=f.length;g<m;g++){let M=f[g];Js.isClockWise(M)===!0&&(f[g]=M.reverse())}let y=Js.triangulateShape(u,f);for(let g=0,m=f.length;g<m;g++){let M=f[g];u=u.concat(M)}for(let g=0,m=u.length;g<m;g++){let M=u[g];s.push(M.x,M.y,0),r.push(0,0,1),a.push(M.x,M.y)}for(let g=0,m=y.length;g<m;g++){let M=y[g],S=M[0]+p,v=M[1]+p,_=M[2]+p;n.push(S,v,_),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return ag(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];n.push(a)}return new i(n,e.curveSegments)}};function ag(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var Hn=class i extends Vt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],p=new F,d=new F,u=[],f=[],y=[],g=[];for(let m=0;m<=n;m++){let M=[],S=m/n,v=a+S*o,_=e*Math.cos(v),w=Math.sqrt(e*e-_*_),R=0;m===0&&a===0?R=.5/t:m===n&&c===Math.PI&&(R=-.5/t);for(let x=0;x<=t;x++){let A=x/t,P=s+A*r;p.x=-w*Math.cos(P),p.y=_,p.z=w*Math.sin(P),f.push(p.x,p.y,p.z),d.copy(p).normalize(),y.push(d.x,d.y,d.z),g.push(A+R,1-S),M.push(l++)}h.push(M)}for(let m=0;m<n;m++)for(let M=0;M<t;M++){let S=h[m][M+1],v=h[m][M],_=h[m+1][M],w=h[m+1][M+1];(m!==0||a>0)&&u.push(S,v,w),(m!==n-1||c<Math.PI)&&u.push(v,_,w)}this.setIndex(u),this.setAttribute("position",new Ot(f,3)),this.setAttribute("normal",new Ot(y,3)),this.setAttribute("uv",new Ot(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Bi=class i extends Vt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let c=[],l=[],h=[],p=[],d=new F,u=new F,f=new F;for(let y=0;y<=n;y++){let g=a+y/n*o;for(let m=0;m<=s;m++){let M=m/s*r;u.x=(e+t*Math.cos(g))*Math.cos(M),u.y=(e+t*Math.cos(g))*Math.sin(M),u.z=t*Math.sin(g),l.push(u.x,u.y,u.z),d.x=e*Math.cos(M),d.y=e*Math.sin(M),f.subVectors(u,d).normalize(),h.push(f.x,f.y,f.z),p.push(m/s),p.push(y/n)}}for(let y=1;y<=n;y++)for(let g=1;g<=s;g++){let m=(s+1)*y+g-1,M=(s+1)*(y-1)+g-1,S=(s+1)*(y-1)+g,v=(s+1)*y+g;c.push(m,M,v),c.push(M,S,v)}this.setIndex(c),this.setAttribute("position",new Ot(l,3)),this.setAttribute("normal",new Ot(h,3)),this.setAttribute("uv",new Ot(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var Hi=class i extends Vt{constructor(e=new Zo(new F(-1,-1,0),new F(-1,1,0),new F(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new F,c=new F,l=new Ye,h=new F,p=[],d=[],u=[],f=[];y(),this.setIndex(f),this.setAttribute("position",new Ot(p,3)),this.setAttribute("normal",new Ot(d,3)),this.setAttribute("uv",new Ot(u,2));function y(){for(let S=0;S<t;S++)g(S);g(r===!1?t:0),M(),m()}function g(S){h=e.getPointAt(S/t,h);let v=a.normals[S],_=a.binormals[S];for(let w=0;w<=s;w++){let R=w/s*Math.PI*2,x=Math.sin(R),A=-Math.cos(R);c.x=A*v.x+x*_.x,c.y=A*v.y+x*_.y,c.z=A*v.z+x*_.z,c.normalize(),d.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,p.push(o.x,o.y,o.z)}}function m(){for(let S=1;S<=t;S++)for(let v=1;v<=s;v++){let _=(s+1)*(S-1)+(v-1),w=(s+1)*S+(v-1),R=(s+1)*S+v,x=(s+1)*(S-1)+v;f.push(_,w,x),f.push(w,R,x)}}function M(){for(let S=0;S<=t;S++)for(let v=0;v<=s;v++)l.x=S/t,l.y=v/s,u.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Yc[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function ua(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Zd(s))s.isRenderTargetTexture?(Ht("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Zd(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function zi(i){let e={};for(let t=0;t<i.length;t++){let n=ua(i[t]);for(let s in n)e[s]=n[s]}return e}function Zd(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function og(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function T0(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:mn.workingColorSpace}var Zi={clone:ua,merge:zi},lg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,xn=class extends vs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lg,this.fragmentShader=cg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ua(e.uniforms),this.uniformsGroups=og(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new ct().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ye().fromArray(s.value);break;case"v3":this.uniforms[n].value=new F().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Nn().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Zt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new St().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Qa=class extends xn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Jt=class extends vs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bl,this.normalScale=new Ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new di,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ri=class extends Jt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ye(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return hn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ct(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ct(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ct(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var tl=class extends vs{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bl,this.normalScale=new Ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};var ja=class extends vs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},qc=class extends vs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Na(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Yh(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Fr=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Zc=class extends Fr{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:$h,endingEnd:$h}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Jh:r=e,o=2*t-n;break;case Kh:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Jh:a=e,c=2*n-t;break;case Kh:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,p=this._offsetNext,d=this._weightPrev,u=this._weightNext,f=(n-t)/(s-t),y=f*f,g=y*f,m=-d*g+2*d*y-d*f,M=(1+d)*g+(-1.5-2*d)*y+(-.5+d)*f+1,S=(-1-u)*g+(1.5+u)*y+.5*f,v=u*g-u*y;for(let _=0;_!==o;++_)r[_]=m*a[h+_]+M*a[l+_]+S*a[c+_]+v*a[p+_];return r}},$c=class extends Fr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(s-t),p=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*p+a[c+d]*h;return r}},Jc=class extends Fr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Kc=class extends Fr{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this.inTangents,p=this.outTangents;if(!h||!p){let f=(n-t)/(s-t),y=1-f;for(let g=0;g!==o;++g)r[g]=a[l+g]*y+a[c+g]*f;return r}let d=o*2,u=e-1;for(let f=0;f!==o;++f){let y=a[l+f],g=a[c+f],m=u*d+f*2,M=p[m],S=p[m+1],v=e*d+f*2,_=h[v],w=h[v+1],R=hg(n,t,M,_,s);r[f]=kf(R,y,S,w,g)}return r}};function kf(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function ug(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function hg(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=kf(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let c=ug(r,e,t,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var cs=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Na(t,this.TimeBufferType),this.values=Na(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Na(e.times,Array),values:Na(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Yh(e.settings)&&(n.settings={inTangents:Na(e.settings.inTangents,Array),outTangents:Na(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Jc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new $c(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Zc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Kc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Io:t=this.InterpolantFactoryMethodDiscrete;break;case Fc:t=this.InterpolantFactoryMethodLinear;break;case Tc:t=this.InterpolantFactoryMethodSmooth;break;case Zh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ht("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Io;case this.InterpolantFactoryMethodLinear:return Fc;case this.InterpolantFactoryMethodSmooth:return Tc;case this.InterpolantFactoryMethodBezier:return Zh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Yh(this.settings)&&($d(this.settings.inTangents,e),$d(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(zt("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(zt("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){zt("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){zt("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&fm(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){zt("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Tc,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(s)c=!0;else{let p=o*n,d=p-n,u=p+n;for(let f=0;f!==n;++f){let y=t[p+f];if(y!==t[d+f]||y!==t[u+f]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let p=o*n,d=a*n;for(let u=0;u!==n;++u)t[d+u]=t[p+u]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Yh(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function $d(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}cs.prototype.ValueTypeName="";cs.prototype.TimeBufferType=Float32Array;cs.prototype.ValueBufferType=Float32Array;cs.prototype.DefaultInterpolation=Fc;var Or=class extends cs{constructor(e,t,n){super(e,t,n)}};Or.prototype.ValueTypeName="bool";Or.prototype.ValueBufferType=Array;Or.prototype.DefaultInterpolation=Io;Or.prototype.InterpolantFactoryMethodLinear=void 0;Or.prototype.InterpolantFactoryMethodSmooth=void 0;var Qc=class extends cs{constructor(e,t,n,s){super(e,t,n,s)}};Qc.prototype.ValueTypeName="color";var jc=class extends cs{constructor(e,t,n,s){super(e,t,n,s)}};jc.prototype.ValueTypeName="number";var eu=class extends Fr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),l=e*o;for(let h=l+o;l!==h;l+=4)Tn.slerpFlat(r,0,a,l-o,a,l,c);return r}},nl=class extends cs{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new eu(this.times,this.values,this.getValueSize(),e)}};nl.prototype.ValueTypeName="quaternion";nl.prototype.InterpolantFactoryMethodSmooth=void 0;var Br=class extends cs{constructor(e,t,n){super(e,t,n)}};Br.prototype.ValueTypeName="string";Br.prototype.ValueBufferType=Array;Br.prototype.DefaultInterpolation=Io;Br.prototype.InterpolantFactoryMethodLinear=void 0;Br.prototype.InterpolantFactoryMethodSmooth=void 0;var tu=class extends cs{constructor(e,t,n,s){super(e,t,n,s)}};tu.prototype.ValueTypeName="vector";var nu=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,p){return l.push(h,p),this},this.removeHandler=function(h){let p=l.indexOf(h);return p!==-1&&l.splice(p,2),this},this.getHandler=function(h){for(let p=0,d=l.length;p<d;p+=2){let u=l[p],f=l[p+1];if(u.global&&(u.lastIndex=0),u.test(h))return f}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Vf=new nu,iu=class{constructor(e){this.manager=e!==void 0?e:Vf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};iu.DEFAULT_MATERIAL_NAME="__DEFAULT";var aa=class extends $n{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ct(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},il=class extends aa{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy($n.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ct(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},qh=new St,Jd=new F,Kd=new F,eo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ye(512,512),this.mapType=mi,this.map=null,this.mapPass=null,this.matrix=new St,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ya,this._frameExtents=new Ye(1,1),this._viewportCount=1,this._viewports=[new Nn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Jd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Jd),Kd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Kd),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){qh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(qh,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===Ha||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(qh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Sc=new F,bc=new Tn,qs=new F,sl=class extends $n{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new St,this.projectionMatrix=new St,this.projectionMatrixInverse=new St,this.coordinateSystem=Bs,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Sc,bc,qs),qs.x===1&&qs.y===1&&qs.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Sc,bc,qs.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Sc,bc,qs),qs.x===1&&qs.y===1&&qs.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Sc,bc,qs.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Dr=new F,Qd=new Ye,jd=new Ye,Ti=class extends sl{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Fo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ac*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fo*2*Math.atan(Math.tan(Ac*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Dr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Dr.x,Dr.y).multiplyScalar(-e/Dr.z),Dr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Dr.x,Dr.y).multiplyScalar(-e/Dr.z)}getViewSize(e,t){return this.getViewBounds(e,Qd,jd),t.subVectors(jd,Qd)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ac*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},n0=class extends eo{constructor(){super(new Ti(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Fo*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},rl=class extends aa{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy($n.DEFAULT_UP),this.updateMatrix(),this.target=new $n,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new n0}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},i0=class extends eo{constructor(){super(new Ti(90,1,.5,500)),this.isPointLightShadow=!0}},es=class extends aa{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new i0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Hr=class extends sl{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},s0=class extends eo{constructor(){super(new Hr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},to=class extends aa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($n.DEFAULT_UP),this.updateMatrix(),this.target=new $n,this.shadow=new s0}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Ua=-90,Fa=1,su=class extends $n{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ti(Ua,Fa,e,t);s.layers=this.layers,this.add(s);let r=new Ti(Ua,Fa,e,t);r.layers=this.layers,this.add(r);let a=new Ti(Ua,Fa,e,t);a.layers=this.layers,this.add(a);let o=new Ti(Ua,Fa,e,t);o.layers=this.layers,this.add(o);let c=new Ti(Ua,Fa,e,t);c.layers=this.layers,this.add(c);let l=new Ti(Ua,Fa,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===Bs)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ha)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,p=e.getRenderTarget(),d=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(p,d,u),e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}},ru=class extends Ti{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},al=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=dg.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function dg(){this._document.hidden===!1&&this.reset()}var w0="\\[\\]\\.:\\/",fg=new RegExp("["+w0+"]","g"),A0="[^"+w0+"]",pg="[^"+w0.replace("\\.","")+"]",mg=/((?:WC+[\/:])*)/.source.replace("WC",A0),gg=/(WCOD+)?/.source.replace("WCOD",pg),xg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",A0),vg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",A0),yg=new RegExp("^"+mg+gg+xg+vg+"$"),_g=["material","materials","bones","map"],r0=class{constructor(e,t,n){let s=n||On.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},On=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(fg,"")}static parseTrackName(e){let t=yg.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);_g.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ht("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){zt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){zt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){zt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){zt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){zt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){zt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){zt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;zt("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){zt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){zt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};On.Composite=r0;On.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};On.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};On.prototype.GetterByBindingType=[On.prototype._getValue_direct,On.prototype._getValue_array,On.prototype._getValue_arrayElement,On.prototype._getValue_toArray];On.prototype.SetterByBindingTypeAndVersioning=[[On.prototype._setValue_direct,On.prototype._setValue_direct_setNeedsUpdate,On.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[On.prototype._setValue_array,On.prototype._setValue_array_setNeedsUpdate,On.prototype._setValue_array_setMatrixWorldNeedsUpdate],[On.prototype._setValue_arrayElement,On.prototype._setValue_arrayElement_setNeedsUpdate,On.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[On.prototype._setValue_fromArray,On.prototype._setValue_fromArray_setNeedsUpdate,On.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Uy=new Float32Array(1);var ef=new St,ol=class{constructor(e,t,n=0,s=1/0){this.ray=new ia(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new ka,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):zt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ef.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ef),this}intersectObject(e,t=!0,n=[]){return a0(e,this,n,t),n.sort(tf),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)a0(e[s],this,n,t);return n.sort(tf),n}};function tf(i,e){return i.distance-e.distance}function a0(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)a0(r[a],e,t,!0)}}var L0=class L0{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};L0.prototype.isMatrix2=!0;var o0=L0;function R0(i,e,t,n){let s=Mg(n);switch(t){case y0:return i*e;case pu:return i*e/s.components*s.byteLength;case mu:return i*e/s.components*s.byteLength;case Xr:return i*e*2/s.components*s.byteLength;case gu:return i*e*2/s.components*s.byteLength;case _0:return i*e*3/s.components*s.byteLength;case Li:return i*e*4/s.components*s.byteLength;case xu:return i*e*4/s.components*s.byteLength;case vl:case yl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case _l:case Ml:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case yu:case Mu:return Math.max(i,16)*Math.max(e,8)/4;case vu:case _u:return Math.max(i,8)*Math.max(e,8)/2;case Eu:case Su:case Tu:case wu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case bu:case El:case Au:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ru:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Cu:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Pu:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Iu:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Du:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Lu:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Nu:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Uu:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Fu:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ou:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Bu:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Hu:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case zu:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Gu:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ku:case Vu:case Wu:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Xu:case Yu:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Sl:case qu:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Mg(i){switch(i){case mi:case m0:return{byteLength:1,components:1};case io:case g0:case Jn:return{byteLength:2,components:1};case du:case fu:return{byteLength:2,components:4};case Hs:case hu:case Ss:return{byteLength:4,components:1};case x0:case v0:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ht("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function hp(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function wg(i){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,p=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),o.onUploadCallback();let u;if(l instanceof Float32Array)u=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)u=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)u=i.SHORT;else if(l instanceof Uint32Array)u=i.UNSIGNED_INT;else if(l instanceof Int32Array)u=i.INT;else if(l instanceof Int8Array)u=i.BYTE;else if(l instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:u,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,c,l){let h=c.array,p=c.updateRanges;if(i.bindBuffer(l,o),p.length===0)i.bufferSubData(l,0,h);else{p.sort((u,f)=>u.start-f.start);let d=0;for(let u=1;u<p.length;u++){let f=p[d],y=p[u];y.start<=f.start+f.count+1?f.count=Math.max(f.count,y.start+y.count-f.start):(++d,p[d]=y)}p.length=d+1;for(let u=0,f=p.length;u<f;u++){let y=p[u];i.bufferSubData(l,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Ag=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Rg=`#ifdef USE_ALPHAHASH
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
#endif`,Cg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Pg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ig=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Dg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lg=`#ifdef USE_AOMAP
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
#endif`,Ng=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ug=`#ifdef USE_BATCHING
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
#endif`,Fg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Og=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Bg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,zg=`#ifdef USE_IRIDESCENCE
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
#endif`,Gg=`#ifdef USE_BUMPMAP
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
#endif`,kg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Vg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,qg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Zg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,$g=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Jg=`#define PI 3.141592653589793
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
} // validated`,Kg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Qg=`vec3 transformedNormal = objectNormal;
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
#endif`,jg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,e1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,t1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,n1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,i1="gl_FragColor = linearToOutputTexel( gl_FragColor );",s1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,r1=`#ifdef USE_ENVMAP
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
#endif`,a1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,o1=`#ifdef USE_ENVMAP
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
#endif`,l1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,c1=`#ifdef USE_ENVMAP
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
#endif`,u1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,h1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,d1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,f1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,p1=`#ifdef USE_GRADIENTMAP
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
}`,m1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,g1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,x1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,v1=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,y1=`#ifdef USE_ENVMAP
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
#endif`,_1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,M1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,E1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,S1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,b1=`PhysicalMaterial material;
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
#endif`,T1=`uniform sampler2D dfgLUT;
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
}`,w1=`
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
#endif`,A1=`#if defined( RE_IndirectDiffuse )
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
#endif`,R1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,C1=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,P1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,I1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,D1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,L1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,N1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,U1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,F1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,O1=`#if defined( USE_POINTS_UV )
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
#endif`,B1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,H1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,z1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,G1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,k1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,V1=`#ifdef USE_MORPHTARGETS
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
#endif`,W1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,X1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Y1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,q1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Z1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,J1=`#ifdef USE_NORMALMAP
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
#endif`,K1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Q1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,j1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ex=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ix=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ax=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ox=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ux=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,dx=`float getShadowMask() {
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
}`,fx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,px=`#ifdef USE_SKINNING
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
#endif`,mx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gx=`#ifdef USE_SKINNING
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
#endif`,xx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_x=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mx=`#ifdef USE_TRANSMISSION
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
#endif`,Ex=`#ifdef USE_TRANSMISSION
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
#endif`,Sx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ax=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Rx=`uniform sampler2D t2D;
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
}`,Cx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Px=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ix=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lx=`#include <common>
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
}`,Nx=`#if DEPTH_PACKING == 3200
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
}`,Ux=`#define DISTANCE
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
}`,Fx=`#define DISTANCE
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
}`,Ox=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Bx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hx=`uniform float scale;
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
}`,zx=`uniform vec3 diffuse;
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
}`,Gx=`#include <common>
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
}`,kx=`uniform vec3 diffuse;
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
}`,Vx=`#define LAMBERT
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
}`,Wx=`#define LAMBERT
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
}`,Xx=`#define MATCAP
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
}`,Yx=`#define MATCAP
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
}`,qx=`#define NORMAL
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
}`,Zx=`#define NORMAL
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
}`,$x=`#define PHONG
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
}`,Jx=`#define PHONG
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
}`,Kx=`#define STANDARD
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
}`,Qx=`#define STANDARD
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
}`,jx=`#define TOON
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
}`,e2=`#define TOON
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
}`,t2=`uniform float size;
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
}`,n2=`uniform vec3 diffuse;
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
}`,i2=`#include <common>
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
}`,s2=`uniform vec3 color;
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
}`,r2=`uniform float rotation;
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
}`,a2=`uniform vec3 diffuse;
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
}`,rn={alphahash_fragment:Ag,alphahash_pars_fragment:Rg,alphamap_fragment:Cg,alphamap_pars_fragment:Pg,alphatest_fragment:Ig,alphatest_pars_fragment:Dg,aomap_fragment:Lg,aomap_pars_fragment:Ng,batching_pars_vertex:Ug,batching_vertex:Fg,begin_vertex:Og,beginnormal_vertex:Bg,bsdfs:Hg,iridescence_fragment:zg,bumpmap_pars_fragment:Gg,clipping_planes_fragment:kg,clipping_planes_pars_fragment:Vg,clipping_planes_pars_vertex:Wg,clipping_planes_vertex:Xg,color_fragment:Yg,color_pars_fragment:qg,color_pars_vertex:Zg,color_vertex:$g,common:Jg,cube_uv_reflection_fragment:Kg,defaultnormal_vertex:Qg,displacementmap_pars_vertex:jg,displacementmap_vertex:e1,emissivemap_fragment:t1,emissivemap_pars_fragment:n1,colorspace_fragment:i1,colorspace_pars_fragment:s1,envmap_fragment:r1,envmap_common_pars_fragment:a1,envmap_pars_fragment:o1,envmap_pars_vertex:l1,envmap_physical_pars_fragment:y1,envmap_vertex:c1,fog_vertex:u1,fog_pars_vertex:h1,fog_fragment:d1,fog_pars_fragment:f1,gradientmap_pars_fragment:p1,lightmap_pars_fragment:m1,lights_lambert_fragment:g1,lights_lambert_pars_fragment:x1,lights_pars_begin:v1,lights_toon_fragment:_1,lights_toon_pars_fragment:M1,lights_phong_fragment:E1,lights_phong_pars_fragment:S1,lights_physical_fragment:b1,lights_physical_pars_fragment:T1,lights_fragment_begin:w1,lights_fragment_maps:A1,lights_fragment_end:R1,lightprobes_pars_fragment:C1,logdepthbuf_fragment:P1,logdepthbuf_pars_fragment:I1,logdepthbuf_pars_vertex:D1,logdepthbuf_vertex:L1,map_fragment:N1,map_pars_fragment:U1,map_particle_fragment:F1,map_particle_pars_fragment:O1,metalnessmap_fragment:B1,metalnessmap_pars_fragment:H1,morphinstance_vertex:z1,morphcolor_vertex:G1,morphnormal_vertex:k1,morphtarget_pars_vertex:V1,morphtarget_vertex:W1,normal_fragment_begin:X1,normal_fragment_maps:Y1,normal_pars_fragment:q1,normal_pars_vertex:Z1,normal_vertex:$1,normalmap_pars_fragment:J1,clearcoat_normal_fragment_begin:K1,clearcoat_normal_fragment_maps:Q1,clearcoat_pars_fragment:j1,iridescence_pars_fragment:ex,opaque_fragment:tx,packing:nx,premultiplied_alpha_fragment:ix,project_vertex:sx,dithering_fragment:rx,dithering_pars_fragment:ax,roughnessmap_fragment:ox,roughnessmap_pars_fragment:lx,shadowmap_pars_fragment:cx,shadowmap_pars_vertex:ux,shadowmap_vertex:hx,shadowmask_pars_fragment:dx,skinbase_vertex:fx,skinning_pars_vertex:px,skinning_vertex:mx,skinnormal_vertex:gx,specularmap_fragment:xx,specularmap_pars_fragment:vx,tonemapping_fragment:yx,tonemapping_pars_fragment:_x,transmission_fragment:Mx,transmission_pars_fragment:Ex,uv_pars_fragment:Sx,uv_pars_vertex:bx,uv_vertex:Tx,worldpos_vertex:wx,background_vert:Ax,background_frag:Rx,backgroundCube_vert:Cx,backgroundCube_frag:Px,cube_vert:Ix,cube_frag:Dx,depth_vert:Lx,depth_frag:Nx,distance_vert:Ux,distance_frag:Fx,equirect_vert:Ox,equirect_frag:Bx,linedashed_vert:Hx,linedashed_frag:zx,meshbasic_vert:Gx,meshbasic_frag:kx,meshlambert_vert:Vx,meshlambert_frag:Wx,meshmatcap_vert:Xx,meshmatcap_frag:Yx,meshnormal_vert:qx,meshnormal_frag:Zx,meshphong_vert:$x,meshphong_frag:Jx,meshphysical_vert:Kx,meshphysical_frag:Qx,meshtoon_vert:jx,meshtoon_frag:e2,points_vert:t2,points_frag:n2,shadow_vert:i2,shadow_frag:s2,sprite_vert:r2,sprite_frag:a2},Mt={common:{diffuse:{value:new ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},envMapRotation:{value:new Zt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new Ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new F},probesMax:{value:new F},probesResolution:{value:new F}},points:{diffuse:{value:new ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new ct(16777215)},opacity:{value:1},center:{value:new Ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},ar={basic:{uniforms:zi([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.fog]),vertexShader:rn.meshbasic_vert,fragmentShader:rn.meshbasic_frag},lambert:{uniforms:zi([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new ct(0)},envMapIntensity:{value:1}}]),vertexShader:rn.meshlambert_vert,fragmentShader:rn.meshlambert_frag},phong:{uniforms:zi([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new ct(0)},specular:{value:new ct(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:rn.meshphong_vert,fragmentShader:rn.meshphong_frag},standard:{uniforms:zi([Mt.common,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.roughnessmap,Mt.metalnessmap,Mt.fog,Mt.lights,{emissive:{value:new ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rn.meshphysical_vert,fragmentShader:rn.meshphysical_frag},toon:{uniforms:zi([Mt.common,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.gradientmap,Mt.fog,Mt.lights,{emissive:{value:new ct(0)}}]),vertexShader:rn.meshtoon_vert,fragmentShader:rn.meshtoon_frag},matcap:{uniforms:zi([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,{matcap:{value:null}}]),vertexShader:rn.meshmatcap_vert,fragmentShader:rn.meshmatcap_frag},points:{uniforms:zi([Mt.points,Mt.fog]),vertexShader:rn.points_vert,fragmentShader:rn.points_frag},dashed:{uniforms:zi([Mt.common,Mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rn.linedashed_vert,fragmentShader:rn.linedashed_frag},depth:{uniforms:zi([Mt.common,Mt.displacementmap]),vertexShader:rn.depth_vert,fragmentShader:rn.depth_frag},normal:{uniforms:zi([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,{opacity:{value:1}}]),vertexShader:rn.meshnormal_vert,fragmentShader:rn.meshnormal_frag},sprite:{uniforms:zi([Mt.sprite,Mt.fog]),vertexShader:rn.sprite_vert,fragmentShader:rn.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rn.background_vert,fragmentShader:rn.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Zt}},vertexShader:rn.backgroundCube_vert,fragmentShader:rn.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rn.cube_vert,fragmentShader:rn.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rn.equirect_vert,fragmentShader:rn.equirect_frag},distance:{uniforms:zi([Mt.common,Mt.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rn.distance_vert,fragmentShader:rn.distance_frag},shadow:{uniforms:zi([Mt.lights,Mt.fog,{color:{value:new ct(0)},opacity:{value:1}}]),vertexShader:rn.shadow_vert,fragmentShader:rn.shadow_frag}};ar.physical={uniforms:zi([ar.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new Ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new Ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new ct(0)},specularColor:{value:new ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new Ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:rn.meshphysical_vert,fragmentShader:rn.meshphysical_frag};var Ju={r:0,b:0,g:0},o2=new St,dp=new Zt;dp.set(-1,0,0,0,1,0,0,0,1);function l2(i,e,t,n,s,r){let a=new ct(0),o=s===!0?0:1,c,l,h=null,p=0,d=null;function u(M){let S=M.isScene===!0?M.background:null;if(S&&S.isTexture){let v=M.backgroundBlurriness>0;S=e.get(S,v)}return S}function f(M){let S=!1,v=u(M);v===null?g(a,o):v&&v.isColor&&(g(v,1),S=!0);let _=i.xr.getEnvironmentBlendMode();_==="additive"?t.buffers.color.setClear(0,0,0,1,r):_==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||S)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(M,S){let v=u(S);v&&(v.isCubeTexture||v.mapping===gl)?(l===void 0&&(l=new Ue(new dn(1,1,1),new xn({name:"BackgroundCubeMaterial",uniforms:ua(ar.backgroundCube.uniforms),vertexShader:ar.backgroundCube.vertexShader,fragmentShader:ar.backgroundCube.fragmentShader,side:Ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(_,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=v,l.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(o2.makeRotationFromEuler(S.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(dp),l.material.toneMapped=mn.getTransfer(v.colorSpace)!==yn,(h!==v||p!==v.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,p=v.version,d=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Ue(new $t(2,2),new xn({name:"BackgroundMaterial",uniforms:ua(ar.background.uniforms),vertexShader:ar.background.vertexShader,fragmentShader:ar.background.fragmentShader,side:zr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=mn.getTransfer(v.colorSpace)!==yn,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||p!==v.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,p=v.version,d=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function g(M,S){M.getRGB(Ju,T0(i)),t.buffers.color.setClear(Ju.r,Ju.g,Ju.b,S,r)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,S=1){a.set(M),o=S,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,g(a,o)},render:f,addToRenderList:y,dispose:m}}function c2(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(B,T,U,I,k){let j=!1,q=p(B,I,U,T);r!==q&&(r=q,l(r.object)),j=u(B,I,U,k),j&&f(B,I,U,k),k!==null&&e.update(k,i.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,v(B,T,U,I),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function c(){return i.createVertexArray()}function l(B){return i.bindVertexArray(B)}function h(B){return i.deleteVertexArray(B)}function p(B,T,U,I){let k=I.wireframe===!0,j=n[T.id];j===void 0&&(j={},n[T.id]=j);let q=B.isInstancedMesh===!0?B.id:0,Z=j[q];Z===void 0&&(Z={},j[q]=Z);let W=Z[U.id];W===void 0&&(W={},Z[U.id]=W);let X=W[k];return X===void 0&&(X=d(c()),W[k]=X),X}function d(B){let T=[],U=[],I=[];for(let k=0;k<t;k++)T[k]=0,U[k]=0,I[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:U,attributeDivisors:I,object:B,attributes:{},index:null}}function u(B,T,U,I){let k=r.attributes,j=T.attributes,q=0,Z=U.getAttributes();for(let W in Z)if(Z[W].location>=0){let K=k[W],ve=j[W];if(ve===void 0&&(W==="instanceMatrix"&&B.instanceMatrix&&(ve=B.instanceMatrix),W==="instanceColor"&&B.instanceColor&&(ve=B.instanceColor)),K===void 0||K.attribute!==ve||ve&&K.data!==ve.data)return!0;q++}return r.attributesNum!==q||r.index!==I}function f(B,T,U,I){let k={},j=T.attributes,q=0,Z=U.getAttributes();for(let W in Z)if(Z[W].location>=0){let K=j[W];K===void 0&&(W==="instanceMatrix"&&B.instanceMatrix&&(K=B.instanceMatrix),W==="instanceColor"&&B.instanceColor&&(K=B.instanceColor));let ve={};ve.attribute=K,K&&K.data&&(ve.data=K.data),k[W]=ve,q++}r.attributes=k,r.attributesNum=q,r.index=I}function y(){let B=r.newAttributes;for(let T=0,U=B.length;T<U;T++)B[T]=0}function g(B){m(B,0)}function m(B,T){let U=r.newAttributes,I=r.enabledAttributes,k=r.attributeDivisors;U[B]=1,I[B]===0&&(i.enableVertexAttribArray(B),I[B]=1),k[B]!==T&&(i.vertexAttribDivisor(B,T),k[B]=T)}function M(){let B=r.newAttributes,T=r.enabledAttributes;for(let U=0,I=T.length;U<I;U++)T[U]!==B[U]&&(i.disableVertexAttribArray(U),T[U]=0)}function S(B,T,U,I,k,j,q){q===!0?i.vertexAttribIPointer(B,T,U,k,j):i.vertexAttribPointer(B,T,U,I,k,j)}function v(B,T,U,I){y();let k=I.attributes,j=U.getAttributes(),q=T.defaultAttributeValues;for(let Z in j){let W=j[Z];if(W.location>=0){let X=k[Z];if(X===void 0&&(Z==="instanceMatrix"&&B.instanceMatrix&&(X=B.instanceMatrix),Z==="instanceColor"&&B.instanceColor&&(X=B.instanceColor)),X!==void 0){let K=X.normalized,ve=X.itemSize,Ne=e.get(X);if(Ne===void 0)continue;let He=Ne.buffer,Qe=Ne.type,dt=Ne.bytesPerElement,re=Qe===i.INT||Qe===i.UNSIGNED_INT||X.gpuType===hu;if(X.isInterleavedBufferAttribute){let ye=X.data,Le=ye.stride,Se=X.offset;if(ye.isInstancedInterleavedBuffer){for(let ke=0;ke<W.locationSize;ke++)m(W.location+ke,ye.meshPerAttribute);B.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let ke=0;ke<W.locationSize;ke++)g(W.location+ke);i.bindBuffer(i.ARRAY_BUFFER,He);for(let ke=0;ke<W.locationSize;ke++)S(W.location+ke,ve/W.locationSize,Qe,K,Le*dt,(Se+ve/W.locationSize*ke)*dt,re)}else{if(X.isInstancedBufferAttribute){for(let ye=0;ye<W.locationSize;ye++)m(W.location+ye,X.meshPerAttribute);B.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let ye=0;ye<W.locationSize;ye++)g(W.location+ye);i.bindBuffer(i.ARRAY_BUFFER,He);for(let ye=0;ye<W.locationSize;ye++)S(W.location+ye,ve/W.locationSize,Qe,K,ve*dt,ve/W.locationSize*ye*dt,re)}}else if(q!==void 0){let K=q[Z];if(K!==void 0)switch(K.length){case 2:i.vertexAttrib2fv(W.location,K);break;case 3:i.vertexAttrib3fv(W.location,K);break;case 4:i.vertexAttrib4fv(W.location,K);break;default:i.vertexAttrib1fv(W.location,K)}}}}M()}function _(){A();for(let B in n){let T=n[B];for(let U in T){let I=T[U];for(let k in I){let j=I[k];for(let q in j)h(j[q].object),delete j[q];delete I[k]}}delete n[B]}}function w(B){if(n[B.id]===void 0)return;let T=n[B.id];for(let U in T){let I=T[U];for(let k in I){let j=I[k];for(let q in j)h(j[q].object),delete j[q];delete I[k]}}delete n[B.id]}function R(B){for(let T in n){let U=n[T];for(let I in U){let k=U[I];if(k[B.id]===void 0)continue;let j=k[B.id];for(let q in j)h(j[q].object),delete j[q];delete k[B.id]}}}function x(B){for(let T in n){let U=n[T],I=B.isInstancedMesh===!0?B.id:0,k=U[I];if(k!==void 0){for(let j in k){let q=k[j];for(let Z in q)h(q[Z].object),delete q[Z];delete k[j]}delete U[I],Object.keys(U).length===0&&delete n[T]}}}function A(){P(),a=!0,r!==s&&(r=s,l(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:A,resetDefaultState:P,dispose:_,releaseStatesOfGeometry:w,releaseStatesOfObject:x,releaseStatesOfProgram:R,initAttributes:y,enableAttribute:g,disableUnusedAttributes:M}}function u2(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function o(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let d=0;for(let u=0;u<h;u++)d+=l[u];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function h2(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==Li&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let x=R===Jn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==mi&&R!==Ss&&!x&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(Ht("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let p=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&Ht("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),_=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:p,reversedDepthBuffer:d,maxTextures:u,maxVertexTextures:f,maxTextureSize:y,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:M,maxVaryings:S,maxFragmentUniforms:v,maxSamples:_,samples:w}}function d2(i){let e=this,t=null,n=0,s=!1,r=!1,a=new os,o=new Zt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,d){let u=p.length!==0||d||n!==0||s;return s=d,n=p.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,d){t=h(p,d,0)},this.setState=function(p,d,u){let f=p.clippingPlanes,y=p.clipIntersection,g=p.clipShadows,m=i.get(p);if(!s||f===null||f.length===0||r&&!g)r?h(null):l();else{let M=r?0:n,S=M*4,v=m.clippingState||null;c.value=v,v=h(f,d,S,u);for(let _=0;_!==S;++_)v[_]=t[_];m.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(p,d,u,f){let y=p!==null?p.length:0,g=null;if(y!==0){if(g=c.value,f!==!0||g===null){let m=u+y*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(g===null||g.length<m)&&(g=new Float32Array(m));for(let S=0,v=u;S!==y;++S,v+=4)a.copy(p[S]).applyMatrix4(M,o),a.normal.toArray(g,v),g[v+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}var ro=4,f2=6,p2=20,m2=256,Tl=new Hr,Wf=new ct,N0=null,U0=0,F0=0,O0=!1,g2=new F,ha=new F,oo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=g2}=r;N0=this._renderer.getRenderTarget(),U0=this._renderer.getActiveCubeFace(),F0=this._renderer.getActiveMipmapLevel(),O0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(N0,U0,F0),this._renderer.xr.enabled=O0,e.scissorTest=!1,so(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Vr||e.mapping===ca?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),N0=this._renderer.getRenderTarget(),U0=this._renderer.getActiveCubeFace(),F0=this._renderer.getActiveMipmapLevel(),O0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:li,minFilter:li,generateMipmaps:!1,type:Jn,format:Li,colorSpace:Do,depthBuffer:!1},s=Xf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xf(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=x2(r)),this._blurMaterial=y2(r,e,t),this._ggxMaterial=v2(r,e,t)}return s}_compileMaterial(e){let t=new Ue(new Vt,e);this._renderer.compile(t,Tl)}_sceneToCubeUV(e,t,n,s,r){let c=new Ti(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,d=p.autoClear,u=p.toneMapping;p.getClearColor(Wf),p.toneMapping=us,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(s),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ue(new dn,new En({name:"PMREM.Background",side:Ci,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,g=y.material,m=!1,M=e.background;M?M.isColor&&(g.color.copy(M),e.background=null,m=!0):(g.color.copy(Wf),m=!0);for(let S=0;S<6;S++){let v=S%3;v===0?(c.up.set(0,l[S],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[S],r.y,r.z)):v===1?(c.up.set(0,0,l[S]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[S],r.z)):(c.up.set(0,l[S],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[S]));let _=this._cubeSize;so(s,v*_,S>2?_:0,_,_),p.setRenderTarget(s),m&&p.render(y,c),p.render(e,c)}p.toneMapping=u,p.autoClear=d,e.background=M}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Vr||e.mapping===ca;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=qf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yf());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;so(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Tl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,l=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),p=Math.sqrt(l*l-h*h),d=l*1.25,u=p*d,{_lodMax:f}=this,y=this._sizeLods[n],g=3*y*(n>f-ro?n-f+ro:0),m=4*(this._cubeSize-y);c.envMap.value=e.texture,c.roughness.value=u,c.mipInt.value=f-t,so(r,g,m,3*y,2*y),s.setRenderTarget(r),s.render(o,Tl),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=f-n,so(e,g,m,3*y,2*y),s.setRenderTarget(e),s.render(o,Tl)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[s];c.material=o;let l=o.uniforms;l.envMap.value=e.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],p=3*h*(s>this._lodMax-ro?s-this._lodMax+ro:0),d=4*(this._cubeSize-h);so(t,p,d,3*h,2*h),a.setRenderTarget(t),a.render(c,Tl)}};function x2(i){let e=[],t=[],n=i,s=i-ro+1+f2;for(let r=0;r<s;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),c=-o,l=1+o,h=[c,c,l,c,l,l,c,c,l,l,c,l],p=6,d=6,u=3,f=new Float32Array(u*d*p),y=new Float32Array(u*d*p);for(let m=0;m<p;m++){let M=m%3*2/3-1,S=m>2?0:-1,v=[M,S,0,M+2/3,S,0,M+2/3,S+1,0,M,S,0,M+2/3,S+1,0,M,S+1,0];f.set(v,u*d*m);for(let _=0;_<d;_++){let w=h[_*2]*2-1,R=h[_*2+1]*2-1;m===0?ha.set(1,R,w):m===1?ha.set(-w,1,-R):m===2?ha.set(-w,R,1):m===3?ha.set(-1,R,-w):m===4?ha.set(-w,-1,R):ha.set(w,R,-1),ha.toArray(y,(m*d+_)*u)}}let g=new Vt;g.setAttribute("position",new Nt(f,u)),g.setAttribute("outputDirection",new Nt(y,u)),t.push(new Ue(g,null)),n>ro&&n--}return{lodMeshes:t,sizeLods:e}}function Xf(i,e,t){let n=new Un(i,e,t);return n.texture.mapping=gl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function so(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function v2(i,e,t){return new xn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:m2,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:eh(),fragmentShader:`

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
		`,blending:si,depthTest:!1,depthWrite:!1})}function y2(i,e,t){return new xn({name:"SphericalGaussianBlur",defines:{SAMPLES:p2,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:eh(),fragmentShader:`

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
		`,blending:si,depthTest:!1,depthWrite:!1})}function Yf(){return new xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:eh(),fragmentShader:`

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
		`,blending:si,depthTest:!1,depthWrite:!1})}function qf(){return new xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:eh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function eh(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Qu=class extends Un{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new ko(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new dn(5,5,5),r=new xn({name:"CubemapFromEquirect",uniforms:ua(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ci,blending:si});r.uniforms.tEquirect.value=t;let a=new Ue(s,r),o=t.minFilter;return t.minFilter===ir&&(t.minFilter=li),new su(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};function _2(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,u=!1){return d==null?null:u?a(d):r(d)}function r(d){if(d&&d.isTexture){let u=d.mapping;if(u===lu||u===cu)if(e.has(d)){let f=e.get(d).texture;return o(f,d.mapping)}else{let f=d.image;if(f&&f.height>0){let y=new Qu(f.height);return y.fromEquirectangularTexture(i,d),e.set(d,y),d.addEventListener("dispose",l),o(y.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){let u=d.mapping,f=u===lu||u===cu,y=u===Vr||u===ca;if(f||y){let g=t.get(d),m=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return n===null&&(n=new oo(i)),g=f?n.fromEquirectangular(d,g):n.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{let M=d.image;return f&&M&&M.height>0||y&&M&&c(M)?(n===null&&(n=new oo(i)),g=f?n.fromEquirectangular(d):n.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",h),g.texture):null}}}return d}function o(d,u){return u===lu?d.mapping=Vr:u===cu&&(d.mapping=ca),d}function c(d){let u=0,f=6;for(let y=0;y<f;y++)d[y]!==void 0&&u++;return u===f}function l(d){let u=d.target;u.removeEventListener("dispose",l);let f=e.get(u);f!==void 0&&(e.delete(u),f.dispose())}function h(d){let u=d.target;u.removeEventListener("dispose",h);let f=t.get(u);f!==void 0&&(t.delete(u),f.dispose())}function p(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:p}}function M2(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&ta("WebGLRenderer: "+n+" extension not supported."),s}}}function E2(i,e,t,n){let s={},r=new WeakMap;function a(p){let d=p.target;d.index!==null&&e.remove(d.index);for(let f in d.attributes)e.remove(d.attributes[f]);d.removeEventListener("dispose",a),delete s[d.id];let u=r.get(d);u&&(e.remove(u),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(p,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function c(p){let d=p.attributes;for(let u in d)e.update(d[u],i.ARRAY_BUFFER)}function l(p){let d=[],u=p.index,f=p.attributes.position,y=0;if(f===void 0)return;if(u!==null){let M=u.array;y=u.version;for(let S=0,v=M.length;S<v;S+=3){let _=M[S+0],w=M[S+1],R=M[S+2];d.push(_,w,w,R,R,_)}}else{let M=f.array;y=f.version;for(let S=0,v=M.length/3-1;S<v;S+=3){let _=S+0,w=S+1,R=S+2;d.push(_,w,w,R,R,_)}}let g=new(f.count>=65535?zo:Ho)(d,1);g.version=y;let m=r.get(p);m&&e.remove(m),r.set(p,g)}function h(p){let d=r.get(p);if(d){let u=p.index;u!==null&&d.version<u.version&&l(p)}else l(p);return r.get(p)}return{get:o,update:c,getWireframeAttribute:h}}function S2(i,e,t){let n;function s(p){n=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function c(p,d){i.drawElements(n,d,r,p*a),t.update(d,n,1)}function l(p,d,u){u!==0&&(i.drawElementsInstanced(n,d,r,p*a,u),t.update(d,n,u))}function h(p,d,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,p,0,u);let y=0;for(let g=0;g<u;g++)y+=d[g];t.update(y,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function b2(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:zt("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function T2(i,e,t){let n=new WeakMap,s=new Nn;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==p){let A=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",A)};d!==void 0&&d.texture.dispose();let u=o.morphAttributes.position!==void 0,f=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],S=0;u===!0&&(S=1),f===!0&&(S=2),y===!0&&(S=3);let v=o.attributes.position.count*S,_=1;v>e.maxTextureSize&&(_=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let w=new Float32Array(v*_*4*p),R=new Oo(w,v,_,p);R.type=Ss,R.needsUpdate=!0;let x=S*4;for(let P=0;P<p;P++){let B=g[P],T=m[P],U=M[P],I=v*_*4*P;for(let k=0;k<B.count;k++){let j=k*x;u===!0&&(s.fromBufferAttribute(B,k),w[I+j+0]=s.x,w[I+j+1]=s.y,w[I+j+2]=s.z,w[I+j+3]=0),f===!0&&(s.fromBufferAttribute(T,k),w[I+j+4]=s.x,w[I+j+5]=s.y,w[I+j+6]=s.z,w[I+j+7]=0),y===!0&&(s.fromBufferAttribute(U,k),w[I+j+8]=s.x,w[I+j+9]=s.y,w[I+j+10]=s.z,w[I+j+11]=U.itemSize===4?s.w:1)}}d={count:p,texture:R,size:new Ye(v,_)},n.set(o,d),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let u=0;for(let y=0;y<l.length;y++)u+=l[y];let f=o.morphTargetsRelative?1:1-u;c.getUniforms().setValue(i,"morphTargetBaseInfluence",f),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function w2(i,e,t,n,s){let r=new WeakMap;function a(l){let h=s.render.frame,p=l.geometry,d=e.get(l,p);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let u=l.skeleton;r.get(u)!==h&&(u.update(),r.set(u,h))}return d}function o(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var A2={[ul]:"LINEAR_TONE_MAPPING",[hl]:"REINHARD_TONE_MAPPING",[dl]:"CINEON_TONE_MAPPING",[kr]:"ACES_FILMIC_TONE_MAPPING",[pl]:"AGX_TONE_MAPPING",[ml]:"NEUTRAL_TONE_MAPPING",[fl]:"CUSTOM_TONE_MAPPING"};function R2(i,e,t,n,s,r){let a=new Un(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=new Vt;l.setAttribute("position",new Ot([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Ot([0,2,0,0,2,0],2));let h=new Qa({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new Ue(l,h),d=new Hr(-1,1,1,-1,0,1),u=null,f=null,y=!1,g,m=null,M=[],S=!1;this.setSize=function(v,_){a.setSize(v,_),o!==null&&o.setSize(v,_),c!==null&&c.setSize(v,_);for(let w=0;w<M.length;w++){let R=M[w];R.setSize&&R.setSize(v,_)}},this.setEffects=function(v){M=v,S=M.length>0&&M[0].isRenderPass===!0;let _=a.width,w=a.height;M.length>0&&o===null&&(o=new Un(_,w,{type:Jn,depthBuffer:!1,stencilBuffer:!1}),c=new Un(_,w,{type:Jn,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<M.length;R++){let x=M[R];x.setSize&&x.setSize(_,w)}},this.begin=function(v,_){if(y||v.toneMapping===us&&M.length===0)return!1;if(m=_,_!==null){let w=_.width,R=_.height;(a.width!==w||a.height!==R)&&this.setSize(w,R)}return S===!1&&v.setRenderTarget(a),g=v.toneMapping,v.toneMapping=us,!0},this.hasRenderPass=function(){return S},this.end=function(v,_){v.toneMapping=g,y=!0;let w=a,R=o;for(let x=0;x<M.length;x++){let A=M[x];A.enabled!==!1&&(A.render(v,R,w,_),A.needsSwap!==!1&&(w=R,R=R===o?c:o))}if(u!==v.outputColorSpace||f!==v.toneMapping){u=v.outputColorSpace,f=v.toneMapping,h.defines={},mn.getTransfer(u)===yn&&(h.defines.SRGB_TRANSFER="");let x=A2[f];x&&(h.defines[x]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=w.texture,v.setRenderTarget(m),v.render(p,d),m=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),h.dispose()}}var fp=new qi,z0=new _s(1,1),pp=new Oo,mp=new Hc,gp=new ko,Zf=[],$f=[],Jf=new Float32Array(16),Kf=new Float32Array(9),Qf=new Float32Array(4);function lo(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Zf[s];if(r===void 0&&(r=new Float32Array(s),Zf[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function gi(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function xi(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function th(i,e){let t=$f[e];t===void 0&&(t=new Int32Array(e),$f[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function C2(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function P2(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gi(t,e))return;i.uniform2fv(this.addr,e),xi(t,e)}}function I2(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(gi(t,e))return;i.uniform3fv(this.addr,e),xi(t,e)}}function D2(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gi(t,e))return;i.uniform4fv(this.addr,e),xi(t,e)}}function L2(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(gi(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),xi(t,e)}else{if(gi(t,n))return;Qf.set(n),i.uniformMatrix2fv(this.addr,!1,Qf),xi(t,n)}}function N2(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(gi(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),xi(t,e)}else{if(gi(t,n))return;Kf.set(n),i.uniformMatrix3fv(this.addr,!1,Kf),xi(t,n)}}function U2(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(gi(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),xi(t,e)}else{if(gi(t,n))return;Jf.set(n),i.uniformMatrix4fv(this.addr,!1,Jf),xi(t,n)}}function F2(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function O2(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gi(t,e))return;i.uniform2iv(this.addr,e),xi(t,e)}}function B2(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gi(t,e))return;i.uniform3iv(this.addr,e),xi(t,e)}}function H2(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gi(t,e))return;i.uniform4iv(this.addr,e),xi(t,e)}}function z2(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function G2(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gi(t,e))return;i.uniform2uiv(this.addr,e),xi(t,e)}}function k2(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gi(t,e))return;i.uniform3uiv(this.addr,e),xi(t,e)}}function V2(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gi(t,e))return;i.uniform4uiv(this.addr,e),xi(t,e)}}function W2(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(z0.compareFunction=t.isReversedDepthBuffer()?$u:Zu,r=z0):r=fp,t.setTexture2D(e||r,s)}function X2(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||mp,s)}function Y2(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||gp,s)}function q2(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||pp,s)}function Z2(i){switch(i){case 5126:return C2;case 35664:return P2;case 35665:return I2;case 35666:return D2;case 35674:return L2;case 35675:return N2;case 35676:return U2;case 5124:case 35670:return F2;case 35667:case 35671:return O2;case 35668:case 35672:return B2;case 35669:case 35673:return H2;case 5125:return z2;case 36294:return G2;case 36295:return k2;case 36296:return V2;case 35678:case 36198:case 36298:case 36306:case 35682:return W2;case 35679:case 36299:case 36307:return X2;case 35680:case 36300:case 36308:case 36293:return Y2;case 36289:case 36303:case 36311:case 36292:return q2}}function $2(i,e){i.uniform1fv(this.addr,e)}function J2(i,e){let t=lo(e,this.size,2);i.uniform2fv(this.addr,t)}function K2(i,e){let t=lo(e,this.size,3);i.uniform3fv(this.addr,t)}function Q2(i,e){let t=lo(e,this.size,4);i.uniform4fv(this.addr,t)}function j2(i,e){let t=lo(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function ev(i,e){let t=lo(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function tv(i,e){let t=lo(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function nv(i,e){i.uniform1iv(this.addr,e)}function iv(i,e){i.uniform2iv(this.addr,e)}function sv(i,e){i.uniform3iv(this.addr,e)}function rv(i,e){i.uniform4iv(this.addr,e)}function av(i,e){i.uniform1uiv(this.addr,e)}function ov(i,e){i.uniform2uiv(this.addr,e)}function lv(i,e){i.uniform3uiv(this.addr,e)}function cv(i,e){i.uniform4uiv(this.addr,e)}function uv(i,e,t){let n=this.cache,s=e.length,r=th(t,s);gi(n,r)||(i.uniform1iv(this.addr,r),xi(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=z0:a=fp;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function hv(i,e,t){let n=this.cache,s=e.length,r=th(t,s);gi(n,r)||(i.uniform1iv(this.addr,r),xi(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||mp,r[a])}function dv(i,e,t){let n=this.cache,s=e.length,r=th(t,s);gi(n,r)||(i.uniform1iv(this.addr,r),xi(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||gp,r[a])}function fv(i,e,t){let n=this.cache,s=e.length,r=th(t,s);gi(n,r)||(i.uniform1iv(this.addr,r),xi(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||pp,r[a])}function pv(i){switch(i){case 5126:return $2;case 35664:return J2;case 35665:return K2;case 35666:return Q2;case 35674:return j2;case 35675:return ev;case 35676:return tv;case 5124:case 35670:return nv;case 35667:case 35671:return iv;case 35668:case 35672:return sv;case 35669:case 35673:return rv;case 5125:return av;case 36294:return ov;case 36295:return lv;case 36296:return cv;case 35678:case 36198:case 36298:case 36306:case 35682:return uv;case 35679:case 36299:case 36307:return hv;case 35680:case 36300:case 36308:case 36293:return dv;case 36289:case 36303:case 36311:case 36292:return fv}}var G0=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Z2(t.type)}},k0=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=pv(t.type)}},V0=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},B0=/(\w+)(\])?(\[|\.)?/g;function jf(i,e){i.seq.push(e),i.map[e.id]=e}function mv(i,e,t){let n=i.name,s=n.length;for(B0.lastIndex=0;;){let r=B0.exec(n),a=B0.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){jf(t,l===void 0?new G0(o,i,e):new k0(o,i,e));break}else{let p=t.map[o];p===void 0&&(p=new V0(o),jf(t,p)),t=p}}}var ao=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);mv(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function ep(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var gv=37297,xv=0;function vv(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var tp=new Zt;function yv(i){mn._getMatrix(tp,mn.workingColorSpace,i);let e=`mat3( ${tp.elements.map(t=>t.toFixed(4))} )`;switch(mn.getTransfer(i)){case Lo:return[e,"LinearTransferOETF"];case yn:return[e,"sRGBTransferOETF"];default:return Ht("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function np(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+vv(i.getShaderSource(e),o)}else return r}function _v(i,e){let t=yv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Mv={[ul]:"Linear",[hl]:"Reinhard",[dl]:"Cineon",[kr]:"ACESFilmic",[pl]:"AgX",[ml]:"Neutral",[fl]:"Custom"};function Ev(i,e){let t=Mv[e];return t===void 0?(Ht("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ku=new F;function Sv(){mn.getLuminanceCoefficients(Ku);let i=Ku.x.toFixed(4),e=Ku.y.toFixed(4),t=Ku.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function bv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Al).join(`
`)}function Tv(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function wv(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Al(i){return i!==""}function ip(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function sp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Av=/^[ \t]*#include +<([\w\d./]+)>/gm;function W0(i){return i.replace(Av,Cv)}var Rv=new Map;function Cv(i,e){let t=rn[e];if(t===void 0){let n=Rv.get(e);if(n!==void 0)t=rn[n],Ht('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return W0(t)}var Pv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rp(i){return i.replace(Pv,Iv)}function Iv(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ap(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var Dv={[oa]:"SHADOWMAP_TYPE_PCF",[no]:"SHADOWMAP_TYPE_VSM"};function Lv(i){return Dv[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Nv={[Vr]:"ENVMAP_TYPE_CUBE",[ca]:"ENVMAP_TYPE_CUBE",[gl]:"ENVMAP_TYPE_CUBE_UV"};function Uv(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Nv[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Fv={[ca]:"ENVMAP_MODE_REFRACTION"};function Ov(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Fv[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Bv={[f0]:"ENVMAP_BLENDING_MULTIPLY",[_f]:"ENVMAP_BLENDING_MIX",[Mf]:"ENVMAP_BLENDING_ADD"};function Hv(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Bv[i.combine]||"ENVMAP_BLENDING_NONE"}function zv(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Gv(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=Lv(t),l=Uv(t),h=Ov(t),p=Hv(t),d=zv(t),u=bv(t),f=Tv(r),y=s.createProgram(),g,m,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Al).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Al).join(`
`),m.length>0&&(m+=`
`)):(g=[ap(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Al).join(`
`),m=[ap(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==us?"#define TONE_MAPPING":"",t.toneMapping!==us?rn.tonemapping_pars_fragment:"",t.toneMapping!==us?Ev("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rn.colorspace_pars_fragment,_v("linearToOutputTexel",t.outputColorSpace),Sv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Al).join(`
`)),a=W0(a),a=ip(a,t),a=sp(a,t),o=W0(o),o=ip(o,t),o=sp(o,t),a=rp(a),o=rp(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===S0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===S0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let S=M+g+a,v=M+m+o,_=ep(s,s.VERTEX_SHADER,S),w=ep(s,s.FRAGMENT_SHADER,v);s.attachShader(y,_),s.attachShader(y,w),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function R(B){if(i.debug.checkShaderErrors){let T=s.getProgramInfoLog(y)||"",U=s.getShaderInfoLog(_)||"",I=s.getShaderInfoLog(w)||"",k=T.trim(),j=U.trim(),q=I.trim(),Z=!0,W=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,_,w);else{let X=np(s,_,"vertex"),K=np(s,w,"fragment");zt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+k+`
`+X+`
`+K)}else k!==""?Ht("WebGLProgram: Program Info Log:",k):(j===""||q==="")&&(W=!1);W&&(B.diagnostics={runnable:Z,programLog:k,vertexShader:{log:j,prefix:g},fragmentShader:{log:q,prefix:m}})}s.deleteShader(_),s.deleteShader(w),x=new ao(s,y),A=wv(s,y)}let x;this.getUniforms=function(){return x===void 0&&R(this),x};let A;this.getAttributes=function(){return A===void 0&&R(this),A};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(y,gv)),P},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=xv++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=_,this.fragmentShader=w,this}var kv=0,X0=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Y0(e),t.set(e,n)),n}},Y0=class{constructor(e){this.id=kv++,this.code=e,this.usedTimes=0}};function Vv(i){return i===Xr||i===El||i===Sl}function Wv(i,e,t,n,s,r){let a=new ka,o=new X0,c=new Set,l=[],h=new Map,p=n.logarithmicDepthBuffer,d=n.precision,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return c.add(x),x===0?"uv":`uv${x}`}function y(x,A,P,B,T,U){let I=B.fog,k=T.geometry,j=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?B.environment:null,q=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,Z=e.get(x.envMap||j,q),W=Z&&Z.mapping===gl?Z.image.height:null,X=u[x.type];x.precision!==null&&(d=n.getMaxPrecision(x.precision),d!==x.precision&&Ht("WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));let K=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ve=K!==void 0?K.length:0,Ne=0;k.morphAttributes.position!==void 0&&(Ne=1),k.morphAttributes.normal!==void 0&&(Ne=2),k.morphAttributes.color!==void 0&&(Ne=3);let He,Qe,dt,re;if(X){let $e=ar[X];He=$e.vertexShader,Qe=$e.fragmentShader}else{He=x.vertexShader,Qe=x.fragmentShader;let $e=o.getVertexShaderStage(x),ft=o.getFragmentShaderStage(x);o.update(x,$e,ft),dt=$e.id,re=ft.id}let ye=i.getRenderTarget(),Le=i.state.buffers.depth.getReversed(),Se=T.isInstancedMesh===!0,ke=T.isBatchedMesh===!0,ee=!!x.map,We=!!x.matcap,le=!!Z,pe=!!x.aoMap,te=!!x.lightMap,he=!!x.bumpMap&&x.wireframe===!1,xe=!!x.normalMap,Xe=!!x.displacementMap,Ve=!!x.emissiveMap,st=!!x.metalnessMap,it=!!x.roughnessMap,Q=x.anisotropy>0,_t=x.clearcoat>0,vt=x.dispersion>0,H=x.retroreflectivity>0,E=x.iridescence>0,ae=x.sheen>0,ue=x.transmission>0,_e=Q&&!!x.anisotropyMap,Ze=_t&&!!x.clearcoatMap,Ke=_t&&!!x.clearcoatNormalMap,Ie=_t&&!!x.clearcoatRoughnessMap,be=E&&!!x.iridescenceMap,et=E&&!!x.iridescenceThicknessMap,gt=ae&&!!x.sheenColorMap,N=ae&&!!x.sheenRoughnessMap,ie=!!x.specularMap,ge=!!x.specularColorMap,Te=!!x.specularIntensityMap,Ge=ue&&!!x.transmissionMap,G=ue&&!!x.thicknessMap,Ae=!!x.gradientMap,de=!!x.alphaMap,Fe=x.alphaTest>0,Ce=!!x.alphaHash,O=!!x.extensions,we=us;x.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(we=i.toneMapping);let me={shaderID:X,shaderType:x.type,shaderName:x.name,vertexShader:He,fragmentShader:Qe,defines:x.defines,customVertexShaderID:dt,customFragmentShaderID:re,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:ke,batchingColor:ke&&T._colorsTexture!==null,instancing:Se,instancingColor:Se&&T.instanceColor!==null,instancingMorph:Se&&T.morphTexture!==null,outputColorSpace:ye===null?i.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:mn.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:ee,matcap:We,envMap:le,envMapMode:le&&Z.mapping,envMapCubeUVHeight:W,aoMap:pe,lightMap:te,bumpMap:he,normalMap:xe,displacementMap:Xe,emissiveMap:Ve,normalMapObjectSpace:xe&&x.normalMapType===bf,normalMapTangentSpace:xe&&x.normalMapType===bl,packedNormalMap:xe&&x.normalMapType===bl&&Vv(x.normalMap.format),metalnessMap:st,roughnessMap:it,anisotropy:Q,anisotropyMap:_e,clearcoat:_t,clearcoatMap:Ze,clearcoatNormalMap:Ke,clearcoatRoughnessMap:Ie,dispersion:vt,retroreflection:H,iridescence:E,iridescenceMap:be,iridescenceThicknessMap:et,sheen:ae,sheenColorMap:gt,sheenRoughnessMap:N,specularMap:ie,specularColorMap:ge,specularIntensityMap:Te,transmission:ue,transmissionMap:Ge,thicknessMap:G,gradientMap:Ae,opaque:x.transparent===!1&&x.blending===Gr&&x.alphaToCoverage===!1,alphaMap:de,alphaTest:Fe,alphaHash:Ce,combine:x.combine,mapUv:ee&&f(x.map.channel),aoMapUv:pe&&f(x.aoMap.channel),lightMapUv:te&&f(x.lightMap.channel),bumpMapUv:he&&f(x.bumpMap.channel),normalMapUv:xe&&f(x.normalMap.channel),displacementMapUv:Xe&&f(x.displacementMap.channel),emissiveMapUv:Ve&&f(x.emissiveMap.channel),metalnessMapUv:st&&f(x.metalnessMap.channel),roughnessMapUv:it&&f(x.roughnessMap.channel),anisotropyMapUv:_e&&f(x.anisotropyMap.channel),clearcoatMapUv:Ze&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:Ke&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ie&&f(x.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:et&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:gt&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:N&&f(x.sheenRoughnessMap.channel),specularMapUv:ie&&f(x.specularMap.channel),specularColorMapUv:ge&&f(x.specularColorMap.channel),specularIntensityMapUv:Te&&f(x.specularIntensityMap.channel),transmissionMapUv:Ge&&f(x.transmissionMap.channel),thicknessMapUv:G&&f(x.thicknessMap.channel),alphaMapUv:de&&f(x.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(xe||Q),vertexNormals:!!k.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:T.isPoints===!0&&!!k.attributes.uv&&(ee||de),fog:!!I,useFog:x.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||k.attributes.normal===void 0&&xe===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:Le,skinning:T.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:Ne,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:U.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:we,decodeVideoTexture:ee&&x.map.isVideoTexture===!0&&mn.getTransfer(x.map.colorSpace)===yn,decodeVideoTextureEmissive:Ve&&x.emissiveMap.isVideoTexture===!0&&mn.getTransfer(x.emissiveMap.colorSpace)===yn,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Wn,flipSided:x.side===Ci,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:O&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(O&&x.extensions.multiDraw===!0||ke)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return me.vertexUv1s=c.has(1),me.vertexUv2s=c.has(2),me.vertexUv3s=c.has(3),c.clear(),me}function g(x){let A=[];if(x.shaderID?A.push(x.shaderID):(A.push(x.customVertexShaderID),A.push(x.customFragmentShaderID)),x.defines!==void 0)for(let P in x.defines)A.push(P),A.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(m(A,x),M(A,x),A.push(i.outputColorSpace)),A.push(x.customProgramCacheKey),A.join()}function m(x,A){x.push(A.precision),x.push(A.outputColorSpace),x.push(A.envMapMode),x.push(A.envMapCubeUVHeight),x.push(A.mapUv),x.push(A.alphaMapUv),x.push(A.lightMapUv),x.push(A.aoMapUv),x.push(A.bumpMapUv),x.push(A.normalMapUv),x.push(A.displacementMapUv),x.push(A.emissiveMapUv),x.push(A.metalnessMapUv),x.push(A.roughnessMapUv),x.push(A.anisotropyMapUv),x.push(A.clearcoatMapUv),x.push(A.clearcoatNormalMapUv),x.push(A.clearcoatRoughnessMapUv),x.push(A.iridescenceMapUv),x.push(A.iridescenceThicknessMapUv),x.push(A.sheenColorMapUv),x.push(A.sheenRoughnessMapUv),x.push(A.specularMapUv),x.push(A.specularColorMapUv),x.push(A.specularIntensityMapUv),x.push(A.transmissionMapUv),x.push(A.thicknessMapUv),x.push(A.combine),x.push(A.fogExp2),x.push(A.sizeAttenuation),x.push(A.morphTargetsCount),x.push(A.morphAttributeCount),x.push(A.numSunLights),x.push(A.numDirLights),x.push(A.numPointLights),x.push(A.numSpotLights),x.push(A.numSpotLightMaps),x.push(A.numHemiLights),x.push(A.numRectAreaLights),x.push(A.numSunLightShadows),x.push(A.numDirLightShadows),x.push(A.numPointLightShadows),x.push(A.numSpotLightShadows),x.push(A.numSpotLightShadowsWithMaps),x.push(A.numLightProbes),x.push(A.shadowMapType),x.push(A.toneMapping),x.push(A.numClippingPlanes),x.push(A.numClipIntersection),x.push(A.depthPacking)}function M(x,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.retroreflection&&a.enable(24),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),A.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function S(x){let A=u[x.type],P;if(A){let B=ar[A];P=Zi.clone(B.uniforms)}else P=x.uniforms;return P}function v(x,A){let P=h.get(A);return P!==void 0?++P.usedTimes:(P=new Gv(i,A,x,s),l.push(P),h.set(A,P)),P}function _(x){if(--x.usedTimes===0){let A=l.indexOf(x);l[A]=l[l.length-1],l.pop(),h.delete(x.cacheKey),x.destroy()}}function w(x){o.remove(x)}function R(){o.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:S,acquireProgram:v,releaseProgram:_,releaseShaderCache:w,programs:l,dispose:R}}function Xv(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Yv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function op(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function lp(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d){let u=0;return d.isInstancedMesh&&(u+=2),d.isSkinnedMesh&&(u+=1),u}function o(d,u,f,y,g,m){let M=i[e];return M===void 0?(M={id:d.id,object:d,geometry:u,material:f,materialVariant:a(d),groupOrder:y,renderOrder:d.renderOrder,z:g,group:m},i[e]=M):(M.id=d.id,M.object=d,M.geometry=u,M.material=f,M.materialVariant=a(d),M.groupOrder=y,M.renderOrder=d.renderOrder,M.z=g,M.group=m),e++,M}function c(d,u,f,y,g,m,M){M.reversedDepth===!0&&(g=-g);let S=o(d,u,f,y,g,m);f.transmission>0?n.push(S):f.transparent===!0?s.push(S):t.push(S)}function l(d,u,f,y,g,m){let M=o(d,u,f,y,g,m);f.transmission>0?n.unshift(M):f.transparent===!0?s.unshift(M):t.unshift(M)}function h(d,u){t.length>1&&t.sort(d||Yv),n.length>1&&n.sort(u||op),s.length>1&&s.sort(u||op)}function p(){for(let d=e,u=i.length;d<u;d++){let f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:p,sort:h}}function qv(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new lp,i.set(n,[a])):s>=r.length?(a=new lp,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Zv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new F,color:new ct};break;case"SpotLight":t={position:new F,direction:new F,color:new ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new ct,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new ct,groundColor:new ct};break;case"RectAreaLight":t={color:new ct,position:new F,halfWidth:new F,halfHeight:new F};break}return i[e.id]=t,t}}}function $v(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Jv=0;function Kv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Qv(i){let e=new Zv,t=$v(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new F);let s=new F,r=new St,a=new St;function o(l){let h=0,p=0,d=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let u=0,f=0,y=0,g=0,m=0,M=0,S=0,v=0,_=0,w=0,R=0,x=0,A=0,P=0;l.sort(Kv);for(let T=0,U=l.length;T<U;T++){let I=l[T],k=I.color,j=I.intensity,q=I.distance,Z=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Xr?Z=I.shadow.map.texture:Z=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=k.r*j,p+=k.g*j,d+=k.b*j;else if(I.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(I.sh.coefficients[W],j);P++}else if(I.isSunLight){let W=e.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let X=I.shadow,K=t.get(I);K.shadowIntensity=X.intensity,K.shadowBias=X.bias,K.shadowNormalBias=X.normalBias,K.shadowRadius=X.radius,K.shadowMapSize.copy(X.mapSize).multiply(X.getFrameExtents()),n.sunShadow[f]=K,n.sunShadowMap[f]=Z;let ve=X.getViewportCount();for(let Ne=0;Ne<ve;Ne++)n.sunShadowMatrix[y+Ne]=X.getMatrix(Ne),n.sunShadowCascade[y+Ne]=X._cascadeData[Ne];y+=ve,f++}n.sun[u]=W,u++}else if(I.isDirectionalLight){let W=e.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let X=I.shadow,K=t.get(I);K.shadowIntensity=X.intensity,K.shadowBias=X.bias,K.shadowNormalBias=X.normalBias,K.shadowRadius=X.radius,K.shadowMapSize=X.mapSize,n.directionalShadow[g]=K,n.directionalShadowMap[g]=Z,n.directionalShadowMatrix[g]=I.shadow.matrix,_++}n.directional[g]=W,g++}else if(I.isSpotLight){let W=e.get(I);W.position.setFromMatrixPosition(I.matrixWorld),W.color.copy(k).multiplyScalar(j),W.distance=q,W.coneCos=Math.cos(I.angle),W.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),W.decay=I.decay,n.spot[M]=W;let X=I.shadow;if(I.map&&(n.spotLightMap[x]=I.map,x++,X.updateMatrices(I),I.castShadow&&A++),n.spotLightMatrix[M]=X.matrix,I.castShadow){let K=t.get(I);K.shadowIntensity=X.intensity,K.shadowBias=X.bias,K.shadowNormalBias=X.normalBias,K.shadowRadius=X.radius,K.shadowMapSize=X.mapSize,n.spotShadow[M]=K,n.spotShadowMap[M]=Z,R++}M++}else if(I.isRectAreaLight){let W=e.get(I);W.color.copy(k).multiplyScalar(j),W.halfWidth.set(I.width*.5,0,0),W.halfHeight.set(0,I.height*.5,0),n.rectArea[S]=W,S++}else if(I.isPointLight){let W=e.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),W.distance=I.distance,W.decay=I.decay,I.castShadow){let X=I.shadow,K=t.get(I);K.shadowIntensity=X.intensity,K.shadowBias=X.bias,K.shadowNormalBias=X.normalBias,K.shadowRadius=X.radius,K.shadowMapSize=X.mapSize,K.shadowCameraNear=X.camera.near,K.shadowCameraFar=X.camera.far,n.pointShadow[m]=K,n.pointShadowMap[m]=Z,n.pointShadowMatrix[m]=I.shadow.matrix,w++}n.point[m]=W,m++}else if(I.isHemisphereLight){let W=e.get(I);W.skyColor.copy(I.color).multiplyScalar(j),W.groundColor.copy(I.groundColor).multiplyScalar(j),n.hemi[v]=W,v++}}S>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Mt.LTC_FLOAT_1,n.rectAreaLTC2=Mt.LTC_FLOAT_2):(n.rectAreaLTC1=Mt.LTC_HALF_1,n.rectAreaLTC2=Mt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=p,n.ambient[2]=d;let B=n.hash;(B.sunLength!==u||B.directionalLength!==g||B.pointLength!==m||B.spotLength!==M||B.rectAreaLength!==S||B.hemiLength!==v||B.numSunShadows!==f||B.numDirectionalShadows!==_||B.numPointShadows!==w||B.numSpotShadows!==R||B.numSpotMaps!==x||B.numLightProbes!==P)&&(n.sun.length=u,n.directional.length=g,n.spot.length=M,n.rectArea.length=S,n.point.length=m,n.hemi.length=v,n.sunShadow.length=f,n.sunShadowMap.length=f,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.directionalShadowMatrix.length=_,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=R,n.spotShadowMap.length=R,n.spotLightMatrix.length=R+x-A,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=P,B.sunLength=u,B.directionalLength=g,B.pointLength=m,B.spotLength=M,B.rectAreaLength=S,B.hemiLength=v,B.numSunShadows=f,B.numDirectionalShadows=_,B.numPointShadows=w,B.numSpotShadows=R,B.numSpotMaps=x,B.numLightProbes=P,n.version=Jv++)}function c(l,h){let p=0,d=0,u=0,f=0,y=0,g=0,m=h.matrixWorldInverse;for(let M=0,S=l.length;M<S;M++){let v=l[M];if(v.isSunLight){let _=n.sun[p];_.direction.setFromMatrixPosition(v.matrixWorld),_.direction.transformDirection(m),p++}else if(v.isDirectionalLight){let _=n.directional[d];_.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),d++}else if(v.isSpotLight){let _=n.spot[f];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),f++}else if(v.isRectAreaLight){let _=n.rectArea[y];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),a.identity(),r.copy(v.matrixWorld),r.premultiply(m),a.extractRotation(r),_.halfWidth.set(v.width*.5,0,0),_.halfHeight.set(0,v.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),y++}else if(v.isPointLight){let _=n.point[u];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),u++}else if(v.isHemisphereLight){let _=n.hemi[g];_.direction.setFromMatrixPosition(v.matrixWorld),_.direction.transformDirection(m),g++}}}return{setup:o,setupView:c,state:n}}function cp(i){let e=new Qv(i),t=[],n=[],s=[];function r(d){p.camera=d,t.length=0,n.length=0,s.length=0}function a(d){t.push(d)}function o(d){n.push(d)}function c(d){s.push(d)}function l(){e.setup(t)}function h(d){e.setupView(t,d)}let p={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:p,setupLights:l,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function jv(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new cp(i),e.set(s,[o])):r>=a.length?(o=new cp(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var ey=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ty=`uniform sampler2D shadow_pass;
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
}`,ny=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],iy=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],up=new St,wl=new F,H0=new F;function sy(i,e,t){let n=new Ya,s=new Ye,r=new Ye,a=new Nn,o=new ja,c=new qc,l={},h=t.maxTextureSize,p={[zr]:Ci,[Ci]:zr,[Wn]:Wn},d=new xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ye},radius:{value:4}},vertexShader:ey,fragmentShader:ty}),u=d.clone();u.defines.HORIZONTAL_PASS=1;let f=new Vt;f.setAttribute("position",new Nt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Ue(f,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=oa;let m=this.type;this.render=function(w,R,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;this.type===rf&&(Ht("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=oa);let A=i.getRenderTarget(),P=i.getActiveCubeFace(),B=i.getActiveMipmapLevel(),T=i.state;T.setBlending(si),T.buffers.depth.getReversed()===!0?T.buffers.color.setClear(0,0,0,0):T.buffers.color.setClear(1,1,1,1),T.buffers.depth.setTest(!0),T.setScissorTest(!1);let U=m!==this.type;U&&R.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(k=>k.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,k=w.length;I<k;I++){let j=w[I],q=j.shadow;if(q===void 0){Ht("WebGLShadowMap:",j,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let Z=q.getFrameExtents();s.multiply(Z),r.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Z.x),s.x=r.x*Z.x,q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Z.y),s.y=r.y*Z.y,q.mapSize.y=r.y));let W=i.state.buffers.depth.getReversed();if(q.camera._reversedDepth=W,q.map===null||U===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===no){if(j.isPointLight){Ht("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new Un(s.x,s.y,{format:Xr,type:Jn,minFilter:li,magFilter:li,generateMipmaps:!1}),q.map.texture.name=j.name+".shadowMap",q.map.depthTexture=new _s(s.x,s.y,Ss),q.map.depthTexture.name=j.name+".shadowMapDepth",q.map.depthTexture.format=Ks,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=ii,q.map.depthTexture.magFilter=ii}else j.isPointLight?(q.map=new Qu(s.x),q.map.depthTexture=new Vc(s.x,Hs)):(q.map=new Un(s.x,s.y),q.map.depthTexture=new _s(s.x,s.y,Hs)),q.map.depthTexture.name=j.name+".shadowMap",q.map.depthTexture.format=Ks,this.type===oa?(q.map.depthTexture.compareFunction=W?$u:Zu,q.map.depthTexture.minFilter=li,q.map.depthTexture.magFilter=li):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=ii,q.map.depthTexture.magFilter=ii);q.camera.updateProjectionMatrix()}q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==s.x||q.map.height!==s.y)&&q.map.setSize(s.x,s.y);let X=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();j.isPointLight!==!0&&q.updateMatrices(j,x);for(let K=0;K<X;K++){let ve=q.getCamera(K);if(j.isPointLight){let Ne=q.camera,He=q.matrix,Qe=j.distance||Ne.far;Qe!==Ne.far&&(Ne.far=Qe,Ne.updateProjectionMatrix()),wl.setFromMatrixPosition(j.matrixWorld),Ne.position.copy(wl),H0.copy(Ne.position),H0.add(ny[K]),Ne.up.copy(iy[K]),Ne.lookAt(H0),Ne.updateMatrixWorld(),He.makeTranslation(-wl.x,-wl.y,-wl.z),up.multiplyMatrices(Ne.projectionMatrix,Ne.matrixWorldInverse),q._frustum.setFromProjectionMatrix(up,Ne.coordinateSystem,Ne.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)i.setRenderTarget(q.map,K),i.clear();else{K===0&&(i.setRenderTarget(q.map),i.clear());let Ne=q.getViewport(K);a.set(r.x*Ne.x,r.y*Ne.y,r.x*Ne.z,r.y*Ne.w),T.viewport(a)}n=q.getFrustum(K),v(R,x,ve,j,this.type)}q.isPointLightShadow!==!0&&this.type===no&&M(q,x),q.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(A,P,B)};function M(w,R){let x=e.update(y);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,u.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,u.needsUpdate=!0),w.mapPass===null?w.mapPass=new Un(s.x,s.y,{format:Xr,type:Jn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(R,null,x,d,y,null),u.uniforms.shadow_pass.value=w.mapPass.texture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(R,null,x,u,y,null)}function S(w,R,x,A){let P=null,B=x.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(B!==void 0)P=B;else if(P=x.isPointLight===!0?c:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let T=P.uuid,U=R.uuid,I=l[T];I===void 0&&(I={},l[T]=I);let k=I[U];k===void 0&&(k=P.clone(),I[U]=k,R.addEventListener("dispose",_)),P=k}if(P.visible=R.visible,P.wireframe=R.wireframe,A===no?P.side=R.shadowSide!==null?R.shadowSide:R.side:P.side=R.shadowSide!==null?R.shadowSide:p[R.side],P.alphaMap=R.alphaMap,P.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,P.map=R.map,P.clipShadows=R.clipShadows,P.clippingPlanes=R.clippingPlanes,P.clipIntersection=R.clipIntersection,P.displacementMap=R.displacementMap,P.displacementScale=R.displacementScale,P.displacementBias=R.displacementBias,P.wireframeLinewidth=R.wireframeLinewidth,P.linewidth=R.linewidth,x.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let T=i.properties.get(P);T.light=x}return P}function v(w,R,x,A,P){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&P===no)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,w.matrixWorld);let U=e.update(w),I=w.material;if(Array.isArray(I)){let k=U.groups;for(let j=0,q=k.length;j<q;j++){let Z=k[j],W=I[Z.materialIndex];if(W&&W.visible){let X=S(w,W,A,P);w.onBeforeShadow(i,w,R,x,U,X,Z),i.renderBufferDirect(x,null,U,X,w,Z),w.onAfterShadow(i,w,R,x,U,X,Z)}}}else if(I.visible){let k=S(w,I,A,P);w.onBeforeShadow(i,w,R,x,U,k,null),i.renderBufferDirect(x,null,U,k,w,null),w.onAfterShadow(i,w,R,x,U,k,null)}}let T=w.children;for(let U=0,I=T.length;U<I;U++)v(T[U],R,x,A,P)}function _(w){w.target.removeEventListener("dispose",_);for(let x in l){let A=l[x],P=w.target.uuid;P in A&&(A[P].dispose(),delete A[P])}}}function ry(i,e){function t(){let G=!1,Ae=new Nn,de=null,Fe=new Nn(0,0,0,0);return{setMask:function(Ce){de!==Ce&&!G&&(i.colorMask(Ce,Ce,Ce,Ce),de=Ce)},setLocked:function(Ce){G=Ce},setClear:function(Ce,O,we,me,$e){$e===!0&&(Ce*=me,O*=me,we*=me),Ae.set(Ce,O,we,me),Fe.equals(Ae)===!1&&(i.clearColor(Ce,O,we,me),Fe.copy(Ae))},reset:function(){G=!1,de=null,Fe.set(-1,0,0,0)}}}function n(){let G=!1,Ae=!1,de=null,Fe=null,Ce=null;return{setReversed:function(O){if(Ae!==O){let we=e.get("EXT_clip_control");O?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT),Ae=O;let me=Ce;Ce=null,this.setClear(me)}},getReversed:function(){return Ae},setTest:function(O){O?ye(i.DEPTH_TEST):Le(i.DEPTH_TEST)},setMask:function(O){de!==O&&!G&&(i.depthMask(O),de=O)},setFunc:function(O){if(Ae&&(O=Uf[O]),Fe!==O){switch(O){case Rc:i.depthFunc(i.NEVER);break;case Cc:i.depthFunc(i.ALWAYS);break;case Pc:i.depthFunc(i.LESS);break;case Ba:i.depthFunc(i.LEQUAL);break;case Ic:i.depthFunc(i.EQUAL);break;case Dc:i.depthFunc(i.GEQUAL);break;case Lc:i.depthFunc(i.GREATER);break;case Nc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Fe=O}},setLocked:function(O){G=O},setClear:function(O){Ce!==O&&(Ce=O,Ae&&(O=1-O),i.clearDepth(O))},reset:function(){G=!1,de=null,Fe=null,Ce=null,Ae=!1}}}function s(){let G=!1,Ae=null,de=null,Fe=null,Ce=null,O=null,we=null,me=null,$e=null;return{setTest:function(ft){G||(ft?ye(i.STENCIL_TEST):Le(i.STENCIL_TEST))},setMask:function(ft){Ae!==ft&&!G&&(i.stencilMask(ft),Ae=ft)},setFunc:function(ft,wt,Pt){(de!==ft||Fe!==wt||Ce!==Pt)&&(i.stencilFunc(ft,wt,Pt),de=ft,Fe=wt,Ce=Pt)},setOp:function(ft,wt,Pt){(O!==ft||we!==wt||me!==Pt)&&(i.stencilOp(ft,wt,Pt),O=ft,we=wt,me=Pt)},setLocked:function(ft){G=ft},setClear:function(ft){$e!==ft&&(i.clearStencil(ft),$e=ft)},reset:function(){G=!1,Ae=null,de=null,Fe=null,Ce=null,O=null,we=null,me=null,$e=null}}}let r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap,h={},p={},d={},u=new WeakMap,f=[],y=null,g=!1,m=null,M=null,S=null,v=null,_=null,w=null,R=null,x=new ct(0,0,0),A=0,P=!1,B=null,T=null,U=null,I=null,k=null,j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,Z=0,W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(W)[1]),q=Z>=1):W.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),q=Z>=2);let X=null,K={},ve=i.getParameter(i.SCISSOR_BOX),Ne=i.getParameter(i.VIEWPORT),He=new Nn().fromArray(ve),Qe=new Nn().fromArray(Ne);function dt(G,Ae,de,Fe){let Ce=new Uint8Array(4),O=i.createTexture();i.bindTexture(G,O),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let we=0;we<de;we++)G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?i.texImage3D(Ae,0,i.RGBA,1,1,Fe,0,i.RGBA,i.UNSIGNED_BYTE,Ce):i.texImage2D(Ae+we,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ce);return O}let re={};re[i.TEXTURE_2D]=dt(i.TEXTURE_2D,i.TEXTURE_2D,1),re[i.TEXTURE_CUBE_MAP]=dt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[i.TEXTURE_2D_ARRAY]=dt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),re[i.TEXTURE_3D]=dt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ye(i.DEPTH_TEST),a.setFunc(Ba),he(!1),xe(l0),ye(i.CULL_FACE),pe(si);function ye(G){h[G]!==!0&&(i.enable(G),h[G]=!0)}function Le(G){h[G]!==!1&&(i.disable(G),h[G]=!1)}function Se(G,Ae){return d[G]!==Ae?(i.bindFramebuffer(G,Ae),d[G]=Ae,G===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=Ae),G===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=Ae),!0):!1}function ke(G,Ae){let de=f,Fe=!1;if(G){de=u.get(Ae),de===void 0&&(de=[],u.set(Ae,de));let Ce=G.textures;if(de.length!==Ce.length||de[0]!==i.COLOR_ATTACHMENT0){for(let O=0,we=Ce.length;O<we;O++)de[O]=i.COLOR_ATTACHMENT0+O;de.length=Ce.length,Fe=!0}}else de[0]!==i.BACK&&(de[0]=i.BACK,Fe=!0);Fe&&i.drawBuffers(de)}function ee(G){return y!==G?(i.useProgram(G),y=G,!0):!1}let We={[Es]:i.FUNC_ADD,[af]:i.FUNC_SUBTRACT,[of]:i.FUNC_REVERSE_SUBTRACT};We[lf]=i.MIN,We[cf]=i.MAX;let le={[la]:i.ZERO,[uf]:i.ONE,[hf]:i.SRC_COLOR,[h0]:i.SRC_ALPHA,[mf]:i.SRC_ALPHA_SATURATE,[cl]:i.DST_COLOR,[ll]:i.DST_ALPHA,[df]:i.ONE_MINUS_SRC_COLOR,[d0]:i.ONE_MINUS_SRC_ALPHA,[pf]:i.ONE_MINUS_DST_COLOR,[ff]:i.ONE_MINUS_DST_ALPHA,[gf]:i.CONSTANT_COLOR,[xf]:i.ONE_MINUS_CONSTANT_COLOR,[vf]:i.CONSTANT_ALPHA,[yf]:i.ONE_MINUS_CONSTANT_ALPHA};function pe(G,Ae,de,Fe,Ce,O,we,me,$e,ft){if(G===si){g===!0&&(Le(i.BLEND),g=!1);return}if(g===!1&&(ye(i.BLEND),g=!0),G!==ou){if(G!==m||ft!==P){if((M!==Es||_!==Es)&&(i.blendEquation(i.FUNC_ADD),M=Es,_=Es),ft)switch(G){case Gr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Sn:i.blendFunc(i.ONE,i.ONE);break;case c0:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case u0:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:zt("WebGLState: Invalid blending: ",G);break}else switch(G){case Gr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Sn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case c0:zt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case u0:zt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:zt("WebGLState: Invalid blending: ",G);break}S=null,v=null,w=null,R=null,x.set(0,0,0),A=0,m=G,P=ft}return}Ce=Ce||Ae,O=O||de,we=we||Fe,(Ae!==M||Ce!==_)&&(i.blendEquationSeparate(We[Ae],We[Ce]),M=Ae,_=Ce),(de!==S||Fe!==v||O!==w||we!==R)&&(i.blendFuncSeparate(le[de],le[Fe],le[O],le[we]),S=de,v=Fe,w=O,R=we),(me.equals(x)===!1||$e!==A)&&(i.blendColor(me.r,me.g,me.b,$e),x.copy(me),A=$e),m=G,P=!1}function te(G,Ae){G.side===Wn?Le(i.CULL_FACE):ye(i.CULL_FACE);let de=G.side===Ci;Ae&&(de=!de),he(de),G.blending===Gr&&G.transparent===!1?pe(si):pe(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),a.setFunc(G.depthFunc),a.setTest(G.depthTest),a.setMask(G.depthWrite),r.setMask(G.colorWrite);let Fe=G.stencilWrite;o.setTest(Fe),Fe&&(o.setMask(G.stencilWriteMask),o.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),o.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Ve(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?ye(i.SAMPLE_ALPHA_TO_COVERAGE):Le(i.SAMPLE_ALPHA_TO_COVERAGE)}function he(G){B!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),B=G)}function xe(G){G!==nf?(ye(i.CULL_FACE),G!==T&&(G===l0?i.cullFace(i.BACK):G===sf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Le(i.CULL_FACE),T=G}function Xe(G){G!==U&&(q&&i.lineWidth(G),U=G)}function Ve(G,Ae,de){G?(ye(i.POLYGON_OFFSET_FILL),(I!==Ae||k!==de)&&(I=Ae,k=de,a.getReversed()&&(Ae=-Ae),i.polygonOffset(Ae,de))):Le(i.POLYGON_OFFSET_FILL)}function st(G){G?ye(i.SCISSOR_TEST):Le(i.SCISSOR_TEST)}function it(G){G===void 0&&(G=i.TEXTURE0+j-1),X!==G&&(i.activeTexture(G),X=G)}function Q(G,Ae,de){de===void 0&&(X===null?de=i.TEXTURE0+j-1:de=X);let Fe=K[de];Fe===void 0&&(Fe={type:void 0,texture:void 0},K[de]=Fe),(Fe.type!==G||Fe.texture!==Ae)&&(X!==de&&(i.activeTexture(de),X=de),i.bindTexture(G,Ae||re[G]),Fe.type=G,Fe.texture=Ae)}function _t(){let G=K[X];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function vt(){try{i.compressedTexImage2D(...arguments)}catch(G){zt("WebGLState:",G)}}function H(){try{i.compressedTexImage3D(...arguments)}catch(G){zt("WebGLState:",G)}}function E(){try{i.texSubImage2D(...arguments)}catch(G){zt("WebGLState:",G)}}function ae(){try{i.texSubImage3D(...arguments)}catch(G){zt("WebGLState:",G)}}function ue(){try{i.compressedTexSubImage2D(...arguments)}catch(G){zt("WebGLState:",G)}}function _e(){try{i.compressedTexSubImage3D(...arguments)}catch(G){zt("WebGLState:",G)}}function Ze(){try{i.texStorage2D(...arguments)}catch(G){zt("WebGLState:",G)}}function Ke(){try{i.texStorage3D(...arguments)}catch(G){zt("WebGLState:",G)}}function Ie(){try{i.texImage2D(...arguments)}catch(G){zt("WebGLState:",G)}}function be(){try{i.texImage3D(...arguments)}catch(G){zt("WebGLState:",G)}}function et(G){return p[G]!==void 0?p[G]:i.getParameter(G)}function gt(G,Ae){p[G]!==Ae&&(i.pixelStorei(G,Ae),p[G]=Ae)}function N(G){He.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),He.copy(G))}function ie(G){Qe.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),Qe.copy(G))}function ge(G,Ae){let de=l.get(Ae);de===void 0&&(de=new WeakMap,l.set(Ae,de));let Fe=de.get(G);Fe===void 0&&(Fe=i.getUniformBlockIndex(Ae,G.name),de.set(G,Fe))}function Te(G,Ae){let Fe=l.get(Ae).get(G);c.get(Ae)!==Fe&&(i.uniformBlockBinding(Ae,Fe,G.__bindingPointIndex),c.set(Ae,Fe))}function Ge(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},p={},X=null,K={},d={},u=new WeakMap,f=[],y=null,g=!1,m=null,M=null,S=null,v=null,_=null,w=null,R=null,x=new ct(0,0,0),A=0,P=!1,B=null,T=null,U=null,I=null,k=null,He.set(0,0,i.canvas.width,i.canvas.height),Qe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ye,disable:Le,bindFramebuffer:Se,drawBuffers:ke,useProgram:ee,setBlending:pe,setMaterial:te,setFlipSided:he,setCullFace:xe,setLineWidth:Xe,setPolygonOffset:Ve,setScissorTest:st,activeTexture:it,bindTexture:Q,unbindTexture:_t,compressedTexImage2D:vt,compressedTexImage3D:H,texImage2D:Ie,texImage3D:be,pixelStorei:gt,getParameter:et,updateUBOMapping:ge,uniformBlockBinding:Te,texStorage2D:Ze,texStorage3D:Ke,texSubImage2D:E,texSubImage3D:ae,compressedTexSubImage2D:ue,compressedTexSubImage3D:_e,scissor:N,viewport:ie,reset:Ge}}function ay(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ye,h=new WeakMap,p=new Set,d,u=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(H,E){return f?new OffscreenCanvas(H,E):No("canvas")}function g(H,E,ae){let ue=1,_e=vt(H);if((_e.width>ae||_e.height>ae)&&(ue=ae/Math.max(_e.width,_e.height)),ue<1)if(typeof HTMLImageElement<"u"&&H instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&H instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&H instanceof ImageBitmap||typeof VideoFrame<"u"&&H instanceof VideoFrame){let Ze=Math.floor(ue*_e.width),Ke=Math.floor(ue*_e.height);d===void 0&&(d=y(Ze,Ke));let Ie=E?y(Ze,Ke):d;return Ie.width=Ze,Ie.height=Ke,Ie.getContext("2d").drawImage(H,0,0,Ze,Ke),Ht("WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+Ze+"x"+Ke+")."),Ie}else return"data"in H&&Ht("WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),H;return H}function m(H){return H.generateMipmaps}function M(H){i.generateMipmap(H)}function S(H){return H.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:H.isWebGL3DRenderTarget?i.TEXTURE_3D:H.isWebGLArrayRenderTarget||H.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(H,E,ae,ue,_e,Ze=!1){if(H!==null){if(i[H]!==void 0)return i[H];Ht("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+H+"'")}let Ke;ue&&(Ke=e.get("EXT_texture_norm16"),Ke||Ht("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Ie=E;if(E===i.RED&&(ae===i.FLOAT&&(Ie=i.R32F),ae===i.HALF_FLOAT&&(Ie=i.R16F),ae===i.UNSIGNED_BYTE&&(Ie=i.R8),ae===i.UNSIGNED_SHORT&&Ke&&(Ie=Ke.R16_EXT),ae===i.SHORT&&Ke&&(Ie=Ke.R16_SNORM_EXT)),E===i.RED_INTEGER&&(ae===i.UNSIGNED_BYTE&&(Ie=i.R8UI),ae===i.UNSIGNED_SHORT&&(Ie=i.R16UI),ae===i.UNSIGNED_INT&&(Ie=i.R32UI),ae===i.BYTE&&(Ie=i.R8I),ae===i.SHORT&&(Ie=i.R16I),ae===i.INT&&(Ie=i.R32I)),E===i.RG&&(ae===i.FLOAT&&(Ie=i.RG32F),ae===i.HALF_FLOAT&&(Ie=i.RG16F),ae===i.UNSIGNED_BYTE&&(Ie=i.RG8),ae===i.UNSIGNED_SHORT&&Ke&&(Ie=Ke.RG16_EXT),ae===i.SHORT&&Ke&&(Ie=Ke.RG16_SNORM_EXT)),E===i.RG_INTEGER&&(ae===i.UNSIGNED_BYTE&&(Ie=i.RG8UI),ae===i.UNSIGNED_SHORT&&(Ie=i.RG16UI),ae===i.UNSIGNED_INT&&(Ie=i.RG32UI),ae===i.BYTE&&(Ie=i.RG8I),ae===i.SHORT&&(Ie=i.RG16I),ae===i.INT&&(Ie=i.RG32I)),E===i.RGB_INTEGER&&(ae===i.UNSIGNED_BYTE&&(Ie=i.RGB8UI),ae===i.UNSIGNED_SHORT&&(Ie=i.RGB16UI),ae===i.UNSIGNED_INT&&(Ie=i.RGB32UI),ae===i.BYTE&&(Ie=i.RGB8I),ae===i.SHORT&&(Ie=i.RGB16I),ae===i.INT&&(Ie=i.RGB32I)),E===i.RGBA_INTEGER&&(ae===i.UNSIGNED_BYTE&&(Ie=i.RGBA8UI),ae===i.UNSIGNED_SHORT&&(Ie=i.RGBA16UI),ae===i.UNSIGNED_INT&&(Ie=i.RGBA32UI),ae===i.BYTE&&(Ie=i.RGBA8I),ae===i.SHORT&&(Ie=i.RGBA16I),ae===i.INT&&(Ie=i.RGBA32I)),E===i.RGB&&(ae===i.UNSIGNED_SHORT&&Ke&&(Ie=Ke.RGB16_EXT),ae===i.SHORT&&Ke&&(Ie=Ke.RGB16_SNORM_EXT),ae===i.UNSIGNED_INT_5_9_9_9_REV&&(Ie=i.RGB9_E5),ae===i.UNSIGNED_INT_10F_11F_11F_REV&&(Ie=i.R11F_G11F_B10F)),E===i.RGBA){let be=Ze?Lo:mn.getTransfer(_e);ae===i.FLOAT&&(Ie=i.RGBA32F),ae===i.HALF_FLOAT&&(Ie=i.RGBA16F),ae===i.UNSIGNED_BYTE&&(Ie=be===yn?i.SRGB8_ALPHA8:i.RGBA8),ae===i.UNSIGNED_SHORT&&Ke&&(Ie=Ke.RGBA16_EXT),ae===i.SHORT&&Ke&&(Ie=Ke.RGBA16_SNORM_EXT),ae===i.UNSIGNED_SHORT_4_4_4_4&&(Ie=i.RGBA4),ae===i.UNSIGNED_SHORT_5_5_5_1&&(Ie=i.RGB5_A1)}return(Ie===i.R16F||Ie===i.R32F||Ie===i.RG16F||Ie===i.RG32F||Ie===i.RGBA16F||Ie===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Ie}function _(H,E){let ae;return H?E===null||E===Hs||E===Wr?ae=i.DEPTH24_STENCIL8:E===Ss?ae=i.DEPTH32F_STENCIL8:E===io&&(ae=i.DEPTH24_STENCIL8,Ht("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Hs||E===Wr?ae=i.DEPTH_COMPONENT24:E===Ss?ae=i.DEPTH_COMPONENT32F:E===io&&(ae=i.DEPTH_COMPONENT16),ae}function w(H,E){return m(H)===!0||H.isFramebufferTexture&&H.minFilter!==ii&&H.minFilter!==li?Math.log2(Math.max(E.width,E.height))+1:H.mipmaps!==void 0&&H.mipmaps.length>0?H.mipmaps.length:H.isCompressedTexture&&Array.isArray(H.image)?E.mipmaps.length:1}function R(H){let E=H.target;E.removeEventListener("dispose",R),A(E),E.isVideoTexture&&h.delete(E),E.isHTMLTexture&&p.delete(E)}function x(H){let E=H.target;E.removeEventListener("dispose",x),B(E)}function A(H){let E=n.get(H);if(E.__webglInit===void 0)return;let ae=H.source,ue=u.get(ae);if(ue){let _e=ue[E.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&P(H),Object.keys(ue).length===0&&u.delete(ae)}n.remove(H)}function P(H){let E=n.get(H);i.deleteTexture(E.__webglTexture);let ae=H.source,ue=u.get(ae);delete ue[E.__cacheKey],a.memory.textures--}function B(H){let E=n.get(H);if(H.depthTexture&&(H.depthTexture.dispose(),n.remove(H.depthTexture)),H.isWebGLCubeRenderTarget)for(let ue=0;ue<6;ue++){if(Array.isArray(E.__webglFramebuffer[ue]))for(let _e=0;_e<E.__webglFramebuffer[ue].length;_e++)i.deleteFramebuffer(E.__webglFramebuffer[ue][_e]);else i.deleteFramebuffer(E.__webglFramebuffer[ue]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[ue])}else{if(Array.isArray(E.__webglFramebuffer))for(let ue=0;ue<E.__webglFramebuffer.length;ue++)i.deleteFramebuffer(E.__webglFramebuffer[ue]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ue=0;ue<E.__webglColorRenderbuffer.length;ue++)E.__webglColorRenderbuffer[ue]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[ue]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let ae=H.textures;for(let ue=0,_e=ae.length;ue<_e;ue++){let Ze=n.get(ae[ue]);Ze.__webglTexture&&(i.deleteTexture(Ze.__webglTexture),a.memory.textures--),n.remove(ae[ue])}n.remove(H)}let T=0;function U(){T=0}function I(){return T}function k(H){T=H}function j(){let H=T;return H>=s.maxTextures&&Ht("WebGLTextures: Trying to use "+(H+1)+" texture units while this GPU supports only "+s.maxTextures),T+=1,H}function q(H){let E=[];return E.push(H.wrapS),E.push(H.wrapT),E.push(H.wrapR||0),E.push(H.magFilter),E.push(H.minFilter),E.push(H.anisotropy),E.push(H.internalFormat),E.push(H.format),E.push(H.type),E.push(H.generateMipmaps),E.push(H.premultiplyAlpha),E.push(H.flipY),E.push(H.unpackAlignment),E.push(H.colorSpace),E.join()}function Z(H,E){let ae=n.get(H);if(H.isVideoTexture&&Q(H),H.isRenderTargetTexture===!1&&H.isExternalTexture!==!0&&H.version>0&&ae.__version!==H.version){let ue=H.image;if(ue===null)Ht("WebGLRenderer: Texture marked for update but no image data found.");else if(ue.complete===!1)Ht("WebGLRenderer: Texture marked for update but image is incomplete");else{Le(ae,H,E);return}}else H.isExternalTexture&&(ae.__webglTexture=H.sourceTexture?H.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,ae.__webglTexture,i.TEXTURE0+E)}function W(H,E){let ae=n.get(H);if(H.isRenderTargetTexture===!1&&H.version>0&&ae.__version!==H.version){Le(ae,H,E);return}else H.isExternalTexture&&(ae.__webglTexture=H.sourceTexture?H.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,ae.__webglTexture,i.TEXTURE0+E)}function X(H,E){let ae=n.get(H);if(H.isRenderTargetTexture===!1&&H.version>0&&ae.__version!==H.version){Le(ae,H,E);return}t.bindTexture(i.TEXTURE_3D,ae.__webglTexture,i.TEXTURE0+E)}function K(H,E){let ae=n.get(H);if(H.isCubeDepthTexture!==!0&&H.version>0&&ae.__version!==H.version){Se(ae,H,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,ae.__webglTexture,i.TEXTURE0+E)}let ve={[Bn]:i.REPEAT,[Qi]:i.CLAMP_TO_EDGE,[Uc]:i.MIRRORED_REPEAT},Ne={[ii]:i.NEAREST,[Ef]:i.NEAREST_MIPMAP_NEAREST,[xl]:i.NEAREST_MIPMAP_LINEAR,[li]:i.LINEAR,[uu]:i.LINEAR_MIPMAP_NEAREST,[ir]:i.LINEAR_MIPMAP_LINEAR},He={[wf]:i.NEVER,[If]:i.ALWAYS,[Af]:i.LESS,[Zu]:i.LEQUAL,[Rf]:i.EQUAL,[$u]:i.GEQUAL,[Cf]:i.GREATER,[Pf]:i.NOTEQUAL};function Qe(H,E){if(E.type===Ss&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===li||E.magFilter===uu||E.magFilter===xl||E.magFilter===ir||E.minFilter===li||E.minFilter===uu||E.minFilter===xl||E.minFilter===ir)&&Ht("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(H,i.TEXTURE_WRAP_S,ve[E.wrapS]),i.texParameteri(H,i.TEXTURE_WRAP_T,ve[E.wrapT]),(H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY)&&i.texParameteri(H,i.TEXTURE_WRAP_R,ve[E.wrapR]),i.texParameteri(H,i.TEXTURE_MAG_FILTER,Ne[E.magFilter]),i.texParameteri(H,i.TEXTURE_MIN_FILTER,Ne[E.minFilter]),E.compareFunction&&(i.texParameteri(H,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(H,i.TEXTURE_COMPARE_FUNC,He[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===ii||E.minFilter!==xl&&E.minFilter!==ir||E.type===Ss&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let ae=e.get("EXT_texture_filter_anisotropic");i.texParameterf(H,ae.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function dt(H,E){let ae=!1;H.__webglInit===void 0&&(H.__webglInit=!0,E.addEventListener("dispose",R));let ue=E.source,_e=u.get(ue);_e===void 0&&(_e={},u.set(ue,_e));let Ze=q(E);if(Ze!==H.__cacheKey){_e[Ze]===void 0&&(_e[Ze]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,ae=!0),_e[Ze].usedTimes++;let Ke=_e[H.__cacheKey];Ke!==void 0&&(_e[H.__cacheKey].usedTimes--,Ke.usedTimes===0&&P(E)),H.__cacheKey=Ze,H.__webglTexture=_e[Ze].texture}return ae}function re(H,E,ae){return Math.floor(Math.floor(H/ae)/E)}function ye(H,E,ae,ue){let Ze=H.updateRanges;if(Ze.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,E.width,E.height,ae,ue,E.data);else{Ze.sort((gt,N)=>gt.start-N.start);let Ke=0;for(let gt=1;gt<Ze.length;gt++){let N=Ze[Ke],ie=Ze[gt],ge=N.start+N.count,Te=re(ie.start,E.width,4),Ge=re(N.start,E.width,4);ie.start<=ge+1&&Te===Ge&&re(ie.start+ie.count-1,E.width,4)===Te?N.count=Math.max(N.count,ie.start+ie.count-N.start):(++Ke,Ze[Ke]=ie)}Ze.length=Ke+1;let Ie=t.getParameter(i.UNPACK_ROW_LENGTH),be=t.getParameter(i.UNPACK_SKIP_PIXELS),et=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,E.width);for(let gt=0,N=Ze.length;gt<N;gt++){let ie=Ze[gt],ge=Math.floor(ie.start/4),Te=Math.ceil(ie.count/4),Ge=ge%E.width,G=Math.floor(ge/E.width),Ae=Te,de=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Ge),t.pixelStorei(i.UNPACK_SKIP_ROWS,G),t.texSubImage2D(i.TEXTURE_2D,0,Ge,G,Ae,de,ae,ue,E.data)}H.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Ie),t.pixelStorei(i.UNPACK_SKIP_PIXELS,be),t.pixelStorei(i.UNPACK_SKIP_ROWS,et)}}function Le(H,E,ae){let ue=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ue=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ue=i.TEXTURE_3D);let _e=dt(H,E),Ze=E.source;t.bindTexture(ue,H.__webglTexture,i.TEXTURE0+ae);let Ke=n.get(Ze);if(Ze.version!==Ke.__version||_e===!0){if(t.activeTexture(i.TEXTURE0+ae),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){let de=mn.getPrimaries(mn.workingColorSpace),Fe=E.colorSpace===zs?null:mn.getPrimaries(E.colorSpace),Ce=E.colorSpace===zs||de===Fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce)}t.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment);let be=g(E.image,!1,s.maxTextureSize);be=_t(E,be);let et=r.convert(E.format,E.colorSpace),gt=r.convert(E.type),N=v(E.internalFormat,et,gt,E.normalized,E.colorSpace,E.isVideoTexture);Qe(ue,E);let ie,ge=E.mipmaps,Te=E.isVideoTexture!==!0,Ge=Ke.__version===void 0||_e===!0,G=Ze.dataReady,Ae=w(E,be);if(E.isDepthTexture)N=_(E.format===sr,E.type),Ge&&(Te?t.texStorage2D(i.TEXTURE_2D,1,N,be.width,be.height):t.texImage2D(i.TEXTURE_2D,0,N,be.width,be.height,0,et,gt,null));else if(E.isDataTexture)if(ge.length>0){Te&&Ge&&t.texStorage2D(i.TEXTURE_2D,Ae,N,ge[0].width,ge[0].height);for(let de=0,Fe=ge.length;de<Fe;de++)ie=ge[de],Te?G&&t.texSubImage2D(i.TEXTURE_2D,de,0,0,ie.width,ie.height,et,gt,ie.data):t.texImage2D(i.TEXTURE_2D,de,N,ie.width,ie.height,0,et,gt,ie.data);E.generateMipmaps=!1}else Te?(Ge&&t.texStorage2D(i.TEXTURE_2D,Ae,N,be.width,be.height),G&&ye(E,be,et,gt)):t.texImage2D(i.TEXTURE_2D,0,N,be.width,be.height,0,et,gt,be.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Te&&Ge&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ae,N,ge[0].width,ge[0].height,be.depth);for(let de=0,Fe=ge.length;de<Fe;de++)if(ie=ge[de],E.format!==Li)if(et!==null)if(Te){if(G)if(E.layerUpdates.size>0){let Ce=R0(ie.width,ie.height,E.format,E.type);for(let O of E.layerUpdates){let we=ie.data.subarray(O*Ce/ie.data.BYTES_PER_ELEMENT,(O+1)*Ce/ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,de,0,0,O,ie.width,ie.height,1,et,we)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,de,0,0,0,ie.width,ie.height,be.depth,et,ie.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,de,N,ie.width,ie.height,be.depth,0,ie.data,0,0);else Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Te?G&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,de,0,0,0,ie.width,ie.height,be.depth,et,gt,ie.data):t.texImage3D(i.TEXTURE_2D_ARRAY,de,N,ie.width,ie.height,be.depth,0,et,gt,ie.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{Te&&Ge&&t.texStorage2D(i.TEXTURE_2D,Ae,N,ge[0].width,ge[0].height);for(let de=0,Fe=ge.length;de<Fe;de++)ie=ge[de],E.format!==Li?et!==null?Te?G&&t.compressedTexSubImage2D(i.TEXTURE_2D,de,0,0,ie.width,ie.height,et,ie.data):t.compressedTexImage2D(i.TEXTURE_2D,de,N,ie.width,ie.height,0,ie.data):Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Te?G&&t.texSubImage2D(i.TEXTURE_2D,de,0,0,ie.width,ie.height,et,gt,ie.data):t.texImage2D(i.TEXTURE_2D,de,N,ie.width,ie.height,0,et,gt,ie.data)}else if(E.isDataArrayTexture)if(Te){if(Ge&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ae,N,be.width,be.height,be.depth),G)if(E.layerUpdates.size>0){let de=R0(be.width,be.height,E.format,E.type);for(let Fe of E.layerUpdates){let Ce=be.data.subarray(Fe*de/be.data.BYTES_PER_ELEMENT,(Fe+1)*de/be.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Fe,be.width,be.height,1,et,gt,Ce)}E.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,be.width,be.height,be.depth,et,gt,be.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,N,be.width,be.height,be.depth,0,et,gt,be.data);else if(E.isData3DTexture)Te?(Ge&&t.texStorage3D(i.TEXTURE_3D,Ae,N,be.width,be.height,be.depth),G&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,be.width,be.height,be.depth,et,gt,be.data)):t.texImage3D(i.TEXTURE_3D,0,N,be.width,be.height,be.depth,0,et,gt,be.data);else if(E.isFramebufferTexture){if(Ge)if(Te)t.texStorage2D(i.TEXTURE_2D,Ae,N,be.width,be.height);else{let de=be.width,Fe=be.height;for(let Ce=0;Ce<Ae;Ce++)t.texImage2D(i.TEXTURE_2D,Ce,N,de,Fe,0,et,gt,null),de>>=1,Fe>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in i){let de=i.canvas;if(de.hasAttribute("layoutsubtree")||de.setAttribute("layoutsubtree","true"),be.parentNode!==de){de.appendChild(be),p.add(E),de.onpaint=Fe=>{let Ce=Fe.changedElements;for(let O of p)Ce.includes(O.image)&&(O.needsUpdate=!0)},de.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,be);else{let Ce=i.RGBA,O=i.RGBA,we=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ce,O,we,be)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ge.length>0){if(Te&&Ge){let de=vt(ge[0]);t.texStorage2D(i.TEXTURE_2D,Ae,N,de.width,de.height)}for(let de=0,Fe=ge.length;de<Fe;de++)ie=ge[de],Te?G&&t.texSubImage2D(i.TEXTURE_2D,de,0,0,et,gt,ie):t.texImage2D(i.TEXTURE_2D,de,N,et,gt,ie);E.generateMipmaps=!1}else if(Te){if(Ge){let de=vt(be);t.texStorage2D(i.TEXTURE_2D,Ae,N,de.width,de.height)}G&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,et,gt,be)}else t.texImage2D(i.TEXTURE_2D,0,N,et,gt,be);m(E)&&M(ue),Ke.__version=Ze.version,E.onUpdate&&E.onUpdate(E)}H.__version=E.version}function Se(H,E,ae){if(E.image.length!==6)return;let ue=dt(H,E),_e=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+ae);let Ze=n.get(_e);if(_e.version!==Ze.__version||ue===!0){t.activeTexture(i.TEXTURE0+ae);let Ke=mn.getPrimaries(mn.workingColorSpace),Ie=E.colorSpace===zs?null:mn.getPrimaries(E.colorSpace),be=E.colorSpace===zs||Ke===Ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);let et=E.isCompressedTexture||E.image[0].isCompressedTexture,gt=E.image[0]&&E.image[0].isDataTexture,N=[];for(let O=0;O<6;O++)!et&&!gt?N[O]=g(E.image[O],!0,s.maxCubemapSize):N[O]=gt?E.image[O].image:E.image[O],N[O]=_t(E,N[O]);let ie=N[0],ge=r.convert(E.format,E.colorSpace),Te=r.convert(E.type),Ge=v(E.internalFormat,ge,Te,E.normalized,E.colorSpace),G=E.isVideoTexture!==!0,Ae=Ze.__version===void 0||ue===!0,de=_e.dataReady,Fe=w(E,ie);Qe(i.TEXTURE_CUBE_MAP,E);let Ce;if(et){G&&Ae&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Fe,Ge,ie.width,ie.height);for(let O=0;O<6;O++){Ce=N[O].mipmaps;for(let we=0;we<Ce.length;we++){let me=Ce[we];E.format!==Li?ge!==null?G?de&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,we,0,0,me.width,me.height,ge,me.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,we,Ge,me.width,me.height,0,me.data):Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,we,0,0,me.width,me.height,ge,Te,me.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,we,Ge,me.width,me.height,0,ge,Te,me.data)}}}else{if(Ce=E.mipmaps,G&&Ae){Ce.length>0&&Fe++;let O=vt(N[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Fe,Ge,O.width,O.height)}for(let O=0;O<6;O++)if(gt){G?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,0,0,N[O].width,N[O].height,ge,Te,N[O].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,Ge,N[O].width,N[O].height,0,ge,Te,N[O].data);for(let we=0;we<Ce.length;we++){let $e=Ce[we].image[O].image;G?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,we+1,0,0,$e.width,$e.height,ge,Te,$e.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,we+1,Ge,$e.width,$e.height,0,ge,Te,$e.data)}}else{G?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,0,0,ge,Te,N[O]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,Ge,ge,Te,N[O]);for(let we=0;we<Ce.length;we++){let me=Ce[we];G?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,we+1,0,0,ge,Te,me.image[O]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,we+1,Ge,ge,Te,me.image[O])}}}m(E)&&M(i.TEXTURE_CUBE_MAP),Ze.__version=_e.version,E.onUpdate&&E.onUpdate(E)}H.__version=E.version}function ke(H,E,ae,ue,_e,Ze){let Ke=r.convert(ae.format,ae.colorSpace),Ie=r.convert(ae.type),be=v(ae.internalFormat,Ke,Ie,ae.normalized,ae.colorSpace),et=n.get(E),gt=n.get(ae);if(gt.__renderTarget=E,!et.__hasExternalTextures){let N=Math.max(1,E.width>>Ze),ie=Math.max(1,E.height>>Ze);_e===i.TEXTURE_3D||_e===i.TEXTURE_2D_ARRAY?t.texImage3D(_e,Ze,be,N,ie,E.depth,0,Ke,Ie,null):t.texImage2D(_e,Ze,be,N,ie,0,Ke,Ie,null)}t.bindFramebuffer(i.FRAMEBUFFER,H),it(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ue,_e,gt.__webglTexture,0,st(E)):(_e===i.TEXTURE_2D||_e>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ue,_e,gt.__webglTexture,Ze),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ee(H,E,ae){if(i.bindRenderbuffer(i.RENDERBUFFER,H),E.depthBuffer){let ue=E.depthTexture,_e=ue&&ue.isDepthTexture?ue.type:null,Ze=_(E.stencilBuffer,_e),Ke=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;it(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,st(E),Ze,E.width,E.height):ae?i.renderbufferStorageMultisample(i.RENDERBUFFER,st(E),Ze,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Ze,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ke,i.RENDERBUFFER,H)}else{let ue=E.textures;for(let _e=0;_e<ue.length;_e++){let Ze=ue[_e],Ke=r.convert(Ze.format,Ze.colorSpace),Ie=r.convert(Ze.type),be=v(Ze.internalFormat,Ke,Ie,Ze.normalized,Ze.colorSpace);it(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,st(E),be,E.width,E.height):ae?i.renderbufferStorageMultisample(i.RENDERBUFFER,st(E),be,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,be,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function We(H,E,ae){let ue=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,H),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let _e=n.get(E.depthTexture);if(_e.__renderTarget=E,(!_e.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ue){if(_e.__webglInit===void 0&&(_e.__webglInit=!0,E.depthTexture.addEventListener("dispose",R)),_e.__webglTexture===void 0){_e.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,_e.__webglTexture),Qe(i.TEXTURE_CUBE_MAP,E.depthTexture);let et=r.convert(E.depthTexture.format),gt=r.convert(E.depthTexture.type),N;E.depthTexture.format===Ks?N=i.DEPTH_COMPONENT24:E.depthTexture.format===sr&&(N=i.DEPTH24_STENCIL8);for(let ie=0;ie<6;ie++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,N,E.width,E.height,0,et,gt,null)}}else Z(E.depthTexture,0);let Ze=_e.__webglTexture,Ke=st(E),Ie=ue?i.TEXTURE_CUBE_MAP_POSITIVE_X+ae:i.TEXTURE_2D,be=E.depthTexture.format===sr?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(E.depthTexture.format===Ks)it(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,be,Ie,Ze,0,Ke):i.framebufferTexture2D(i.FRAMEBUFFER,be,Ie,Ze,0);else if(E.depthTexture.format===sr)it(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,be,Ie,Ze,0,Ke):i.framebufferTexture2D(i.FRAMEBUFFER,be,Ie,Ze,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function le(H){let E=n.get(H),ae=H.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==H.depthTexture){let ue=H.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ue){let _e=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ue.removeEventListener("dispose",_e)};ue.addEventListener("dispose",_e),E.__depthDisposeCallback=_e}E.__boundDepthTexture=ue}if(H.depthTexture&&!E.__autoAllocateDepthBuffer)if(ae)for(let ue=0;ue<6;ue++)We(E.__webglFramebuffer[ue],H,ue);else{let ue=H.texture.mipmaps;ue&&ue.length>0?We(E.__webglFramebuffer[0],H,0):We(E.__webglFramebuffer,H,0)}else if(ae){E.__webglDepthbuffer=[];for(let ue=0;ue<6;ue++)if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[ue]),E.__webglDepthbuffer[ue]===void 0)E.__webglDepthbuffer[ue]=i.createRenderbuffer(),ee(E.__webglDepthbuffer[ue],H,!1);else{let _e=H.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ze=E.__webglDepthbuffer[ue];i.bindRenderbuffer(i.RENDERBUFFER,Ze),i.framebufferRenderbuffer(i.FRAMEBUFFER,_e,i.RENDERBUFFER,Ze)}}else{let ue=H.texture.mipmaps;if(ue&&ue.length>0?t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),ee(E.__webglDepthbuffer,H,!1);else{let _e=H.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ze=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Ze),i.framebufferRenderbuffer(i.FRAMEBUFFER,_e,i.RENDERBUFFER,Ze)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function pe(H,E,ae){let ue=n.get(H);E!==void 0&&ke(ue.__webglFramebuffer,H,H.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),ae!==void 0&&le(H)}function te(H){let E=H.texture,ae=n.get(H),ue=n.get(E);H.addEventListener("dispose",x);let _e=H.textures,Ze=H.isWebGLCubeRenderTarget===!0,Ke=_e.length>1;if(Ke||(ue.__webglTexture===void 0&&(ue.__webglTexture=i.createTexture()),ue.__version=E.version,a.memory.textures++),Ze){ae.__webglFramebuffer=[];for(let Ie=0;Ie<6;Ie++)if(E.mipmaps&&E.mipmaps.length>0){ae.__webglFramebuffer[Ie]=[];for(let be=0;be<E.mipmaps.length;be++)ae.__webglFramebuffer[Ie][be]=i.createFramebuffer()}else ae.__webglFramebuffer[Ie]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){ae.__webglFramebuffer=[];for(let Ie=0;Ie<E.mipmaps.length;Ie++)ae.__webglFramebuffer[Ie]=i.createFramebuffer()}else ae.__webglFramebuffer=i.createFramebuffer();if(Ke)for(let Ie=0,be=_e.length;Ie<be;Ie++){let et=n.get(_e[Ie]);et.__webglTexture===void 0&&(et.__webglTexture=i.createTexture(),a.memory.textures++)}if(H.samples>0&&it(H)===!1){ae.__webglMultisampledFramebuffer=i.createFramebuffer(),ae.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglMultisampledFramebuffer);for(let Ie=0;Ie<_e.length;Ie++){let be=_e[Ie];ae.__webglColorRenderbuffer[Ie]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,ae.__webglColorRenderbuffer[Ie]);let et=r.convert(be.format,be.colorSpace),gt=r.convert(be.type),N=v(be.internalFormat,et,gt,be.normalized,be.colorSpace,H.isXRRenderTarget===!0),ie=st(H);i.renderbufferStorageMultisample(i.RENDERBUFFER,ie,N,H.width,H.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,ae.__webglColorRenderbuffer[Ie])}i.bindRenderbuffer(i.RENDERBUFFER,null),H.depthBuffer&&(ae.__webglDepthRenderbuffer=i.createRenderbuffer(),ee(ae.__webglDepthRenderbuffer,H,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Ze){t.bindTexture(i.TEXTURE_CUBE_MAP,ue.__webglTexture),Qe(i.TEXTURE_CUBE_MAP,E);for(let Ie=0;Ie<6;Ie++)if(E.mipmaps&&E.mipmaps.length>0)for(let be=0;be<E.mipmaps.length;be++)ke(ae.__webglFramebuffer[Ie][be],H,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,be);else ke(ae.__webglFramebuffer[Ie],H,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0);m(E)&&M(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ke){for(let Ie=0,be=_e.length;Ie<be;Ie++){let et=_e[Ie],gt=n.get(et),N=i.TEXTURE_2D;(H.isWebGL3DRenderTarget||H.isWebGLArrayRenderTarget)&&(N=H.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(N,gt.__webglTexture),Qe(N,et),ke(ae.__webglFramebuffer,H,et,i.COLOR_ATTACHMENT0+Ie,N,0),m(et)&&M(N)}t.unbindTexture()}else{let Ie=i.TEXTURE_2D;if((H.isWebGL3DRenderTarget||H.isWebGLArrayRenderTarget)&&(Ie=H.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ie,ue.__webglTexture),Qe(Ie,E),E.mipmaps&&E.mipmaps.length>0)for(let be=0;be<E.mipmaps.length;be++)ke(ae.__webglFramebuffer[be],H,E,i.COLOR_ATTACHMENT0,Ie,be);else ke(ae.__webglFramebuffer,H,E,i.COLOR_ATTACHMENT0,Ie,0);m(E)&&M(Ie),t.unbindTexture()}H.depthBuffer&&le(H)}function he(H){let E=H.textures;for(let ae=0,ue=E.length;ae<ue;ae++){let _e=E[ae];if(m(_e)){let Ze=S(H),Ke=n.get(_e).__webglTexture;t.bindTexture(Ze,Ke),M(Ze),t.unbindTexture()}}}let xe=[],Xe=[];function Ve(H){if(H.samples>0){if(it(H)===!1){let E=H.textures,ae=H.width,ue=H.height,_e=i.COLOR_BUFFER_BIT,Ze=H.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ke=n.get(H),Ie=E.length>1;if(Ie)for(let et=0;et<E.length;et++)t.bindFramebuffer(i.FRAMEBUFFER,Ke.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+et,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ke.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+et,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ke.__webglMultisampledFramebuffer);let be=H.texture.mipmaps;be&&be.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ke.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ke.__webglFramebuffer);for(let et=0;et<E.length;et++){if(H.resolveDepthBuffer&&(H.depthBuffer&&(_e|=i.DEPTH_BUFFER_BIT),H.stencilBuffer&&H.resolveStencilBuffer&&(_e|=i.STENCIL_BUFFER_BIT)),Ie){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ke.__webglColorRenderbuffer[et]);let gt=n.get(E[et]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,gt,0)}i.blitFramebuffer(0,0,ae,ue,0,0,ae,ue,_e,i.NEAREST),c===!0&&(xe.length=0,Xe.length=0,xe.push(i.COLOR_ATTACHMENT0+et),H.depthBuffer&&H.storeMultisampledDepthBuffer===!1&&(xe.push(Ze),Xe.push(Ze),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Xe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,xe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ie)for(let et=0;et<E.length;et++){t.bindFramebuffer(i.FRAMEBUFFER,Ke.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+et,i.RENDERBUFFER,Ke.__webglColorRenderbuffer[et]);let gt=n.get(E[et]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ke.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+et,i.TEXTURE_2D,gt,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ke.__webglMultisampledFramebuffer)}else if(H.depthBuffer&&H.storeMultisampledDepthBuffer===!1&&c){let E=H.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function st(H){return Math.min(s.maxSamples,H.samples)}function it(H){let E=n.get(H);return H.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Q(H){let E=a.render.frame;h.get(H)!==E&&(h.set(H,E),H.update())}function _t(H,E){let ae=H.colorSpace,ue=H.format,_e=H.type;return H.isCompressedTexture===!0||H.isVideoTexture===!0||ae!==Do&&ae!==zs&&(mn.getTransfer(ae)===yn?(ue!==Li||_e!==mi)&&Ht("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):zt("WebGLTextures: Unsupported texture color space:",ae)),E}function vt(H){return typeof HTMLImageElement<"u"&&H instanceof HTMLImageElement?(l.width=H.naturalWidth||H.width,l.height=H.naturalHeight||H.height):typeof VideoFrame<"u"&&H instanceof VideoFrame?(l.width=H.displayWidth,l.height=H.displayHeight):(l.width=H.width,l.height=H.height),l}this.allocateTextureUnit=j,this.resetTextureUnits=U,this.getTextureUnits=I,this.setTextureUnits=k,this.setTexture2D=Z,this.setTexture2DArray=W,this.setTexture3D=X,this.setTextureCube=K,this.rebindTextures=pe,this.setupRenderTarget=te,this.updateRenderTargetMipmap=he,this.updateMultisampleRenderTarget=Ve,this.setupDepthRenderbuffer=le,this.setupFrameBufferTexture=ke,this.useMultisampledRTT=it,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function oy(i,e){function t(n,s=zs){let r,a=mn.getTransfer(s);if(n===mi)return i.UNSIGNED_BYTE;if(n===du)return i.UNSIGNED_SHORT_4_4_4_4;if(n===fu)return i.UNSIGNED_SHORT_5_5_5_1;if(n===x0)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===v0)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===m0)return i.BYTE;if(n===g0)return i.SHORT;if(n===io)return i.UNSIGNED_SHORT;if(n===hu)return i.INT;if(n===Hs)return i.UNSIGNED_INT;if(n===Ss)return i.FLOAT;if(n===Jn)return i.HALF_FLOAT;if(n===y0)return i.ALPHA;if(n===_0)return i.RGB;if(n===Li)return i.RGBA;if(n===Ks)return i.DEPTH_COMPONENT;if(n===sr)return i.DEPTH_STENCIL;if(n===pu)return i.RED;if(n===mu)return i.RED_INTEGER;if(n===Xr)return i.RG;if(n===gu)return i.RG_INTEGER;if(n===xu)return i.RGBA_INTEGER;if(n===vl||n===yl||n===_l||n===Ml)if(a===yn)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===vl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===yl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===_l)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ml)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===vl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===yl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===_l)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ml)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===vu||n===yu||n===_u||n===Mu)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===vu)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===yu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===_u)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Mu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Eu||n===Su||n===bu||n===Tu||n===wu||n===El||n===Au)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Eu||n===Su)return a===yn?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===bu)return a===yn?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Tu)return r.COMPRESSED_R11_EAC;if(n===wu)return r.COMPRESSED_SIGNED_R11_EAC;if(n===El)return r.COMPRESSED_RG11_EAC;if(n===Au)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ru||n===Cu||n===Pu||n===Iu||n===Du||n===Lu||n===Nu||n===Uu||n===Fu||n===Ou||n===Bu||n===Hu||n===zu||n===Gu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ru)return a===yn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Cu)return a===yn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Pu)return a===yn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Iu)return a===yn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Du)return a===yn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Lu)return a===yn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Nu)return a===yn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Uu)return a===yn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Fu)return a===yn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ou)return a===yn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Bu)return a===yn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Hu)return a===yn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===zu)return a===yn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Gu)return a===yn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ku||n===Vu||n===Wu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ku)return a===yn?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Vu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Wu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Xu||n===Yu||n===Sl||n===qu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Xu)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Yu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Sl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===qu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Wr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var ly=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cy=`
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

}`,q0=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Vo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new xn({vertexShader:ly,fragmentShader:cy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ue(new $t(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Z0=class extends Qs{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,p=null,d=null,u=null,f=null,y=typeof XRWebGLBinding<"u",g=new q0,m={},M=t.getContextAttributes(),S=null,v=null,_=[],w=[],R=new Ye,x=null,A=null,P=new Ti;P.viewport=new Nn;let B=new Ti;B.viewport=new Nn;let T=[P,B],U=new ru,I=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let ye=_[re];return ye===void 0&&(ye=new Va,_[re]=ye),ye.getTargetRaySpace()},this.getControllerGrip=function(re){let ye=_[re];return ye===void 0&&(ye=new Va,_[re]=ye),ye.getGripSpace()},this.getHand=function(re){let ye=_[re];return ye===void 0&&(ye=new Va,_[re]=ye),ye.getHandSpace()};function j(re){let ye=w.indexOf(re.inputSource);if(ye===-1)return;let Le=_[ye];Le!==void 0&&(Le.update(re.inputSource,re.frame,l||a),Le.dispatchEvent({type:re.type,data:re.inputSource}))}function q(){s.removeEventListener("select",j),s.removeEventListener("selectstart",j),s.removeEventListener("selectend",j),s.removeEventListener("squeeze",j),s.removeEventListener("squeezestart",j),s.removeEventListener("squeezeend",j),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",Z);for(let re=0;re<_.length;re++){let ye=w[re];ye!==null&&(w[re]=null,_[re].disconnect(ye))}I=null,k=null,g.reset();for(let re in m)delete m[re];if(e.setRenderTarget(S),u=null,d=null,p=null,s=null,v=null,dt.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(R.width,R.height,!1),A!==null){let re=A.camera;re.fov=A.fov,re.zoom=A.zoom,re.updateProjectionMatrix(),A=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){r=re,n.isPresenting===!0&&Ht("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){o=re,n.isPresenting===!0&&Ht("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(re){l=re},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return p===null&&y&&(p=new XRWebGLBinding(s,t)),p},this.getFrame=function(){return f},this.getSession=function(){return s},this.setSession=async function(re){if(s=re,s!==null){if(S=e.getRenderTarget(),s.addEventListener("select",j),s.addEventListener("selectstart",j),s.addEventListener("selectend",j),s.addEventListener("squeeze",j),s.addEventListener("squeezestart",j),s.addEventListener("squeezeend",j),s.addEventListener("end",q),s.addEventListener("inputsourceschange",Z),M.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(R),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let Le=null,Se=null,ke=null;M.depth&&(ke=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Le=M.stencil?sr:Ks,Se=M.stencil?Wr:Hs);let ee={colorFormat:t.RGBA8,depthFormat:ke,scaleFactor:r};p=this.getBinding(),d=p.createProjectionLayer(ee),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new Un(d.textureWidth,d.textureHeight,{format:Li,type:mi,depthTexture:new _s(d.textureWidth,d.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,Le),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Le={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,t,Le),s.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),v=new Un(u.framebufferWidth,u.framebufferHeight,{format:Li,type:mi,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),dt.setContext(s),dt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Z(re){for(let ye=0;ye<re.removed.length;ye++){let Le=re.removed[ye],Se=w.indexOf(Le);Se>=0&&(w[Se]=null,_[Se].disconnect(Le))}for(let ye=0;ye<re.added.length;ye++){let Le=re.added[ye],Se=w.indexOf(Le);if(Se===-1){for(let ee=0;ee<_.length;ee++)if(ee>=w.length){w.push(Le),Se=ee;break}else if(w[ee]===null){w[ee]=Le,Se=ee;break}if(Se===-1)break}let ke=_[Se];ke&&ke.connect(Le)}}let W=new F,X=new F;function K(re,ye,Le){W.setFromMatrixPosition(ye.matrixWorld),X.setFromMatrixPosition(Le.matrixWorld);let Se=W.distanceTo(X),ke=ye.projectionMatrix.elements,ee=Le.projectionMatrix.elements,We=ke[14]/(ke[10]-1),le=ke[14]/(ke[10]+1),pe=(ke[9]+1)/ke[5],te=(ke[9]-1)/ke[5],he=(ke[8]-1)/ke[0],xe=(ee[8]+1)/ee[0],Xe=We*he,Ve=We*xe,st=Se/(-he+xe),it=st*-he;if(ye.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(it),re.translateZ(st),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),ke[10]===-1)re.projectionMatrix.copy(ye.projectionMatrix),re.projectionMatrixInverse.copy(ye.projectionMatrixInverse);else{let Q=We+st,_t=le+st,vt=Xe-it,H=Ve+(Se-it),E=pe*le/_t*Q,ae=te*le/_t*Q;re.projectionMatrix.makePerspective(vt,H,E,ae,Q,_t),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function ve(re,ye){ye===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(ye.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(s===null)return;let ye=re.near,Le=re.far;g.texture!==null&&(g.depthNear>0&&(ye=g.depthNear),g.depthFar>0&&(Le=g.depthFar)),U.near=B.near=P.near=ye,U.far=B.far=P.far=Le,(I!==U.near||k!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),I=U.near,k=U.far),U.layers.mask=re.layers.mask|6,P.layers.mask=U.layers.mask&-5,B.layers.mask=U.layers.mask&-3;let Se=re.parent,ke=U.cameras;ve(U,Se);for(let ee=0;ee<ke.length;ee++)ve(ke[ee],Se);ke.length===2?K(U,P,B):U.projectionMatrix.copy(P.projectionMatrix),A===null&&re.isPerspectiveCamera&&(A={camera:re,fov:re.fov,zoom:re.zoom}),Ne(re,U,Se)};function Ne(re,ye,Le){Le===null?re.matrix.copy(ye.matrixWorld):(re.matrix.copy(Le.matrixWorld),re.matrix.invert(),re.matrix.multiply(ye.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(ye.projectionMatrix),re.projectionMatrixInverse.copy(ye.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=Fo*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(d===null&&u===null))return c},this.setFoveation=function(re){c=re,d!==null&&(d.fixedFoveation=re),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=re)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(U)},this.getCameraTexture=function(re){return m[re]};let He=null;function Qe(re,ye){if(h=ye.getViewerPose(l||a),f=ye,h!==null){let Le=h.views;u!==null&&(e.setRenderTargetFramebuffer(v,u.framebuffer),e.setRenderTarget(v));let Se=!1;Le.length!==U.cameras.length&&(U.cameras.length=0,Se=!0);for(let le=0;le<Le.length;le++){let pe=Le[le],te=null;if(u!==null)te=u.getViewport(pe);else{let xe=p.getViewSubImage(d,pe);te=xe.viewport,le===0&&(e.setRenderTargetTextures(v,xe.colorTexture,xe.depthStencilTexture),e.setRenderTarget(v))}let he=T[le];he===void 0&&(he=new Ti,he.layers.enable(le),he.viewport=new Nn,T[le]=he),he.matrix.fromArray(pe.transform.matrix),he.matrix.decompose(he.position,he.quaternion,he.scale),he.projectionMatrix.fromArray(pe.projectionMatrix),he.projectionMatrixInverse.copy(he.projectionMatrix).invert(),he.viewport.set(te.x,te.y,te.width,te.height),le===0&&(U.matrix.copy(he.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Se===!0&&U.cameras.push(he)}let ke=s.enabledFeatures;if(ke&&ke.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){p=n.getBinding();let le=p.getDepthInformation(Le[0]);le&&le.isValid&&le.texture&&g.init(le,s.renderState)}if(ke&&ke.includes("camera-access")&&y){e.state.unbindTexture(),p=n.getBinding();for(let le=0;le<Le.length;le++){let pe=Le[le].camera;if(pe){let te=m[pe];te||(te=new Vo,m[pe]=te);let he=p.getCameraImage(pe);te.sourceTexture=he}}}}for(let Le=0;Le<_.length;Le++){let Se=w[Le],ke=_[Le];Se!==null&&ke!==void 0&&ke.update(Se,ye,l||a)}He&&He(re,ye),ye.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ye}),f=null}let dt=new hp;dt.setAnimationLoop(Qe),this.setAnimationLoop=function(re){He=re},this.dispose=function(){}}},uy=new St,xp=new Zt;xp.set(-1,0,0,0,1,0,0,0,1);function hy(i,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,T0(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,M,S,v){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),p(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),d(g,m),m.isMeshPhysicalMaterial&&u(g,m,v)):m.isMeshMatcapMaterial?(r(g,m),f(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),y(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?c(g,m,M,S):m.isSpriteMaterial?l(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Ci&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Ci&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let M=e.get(m),S=M.envMap,v=M.envMapRotation;S&&(g.envMap.value=S,g.envMapRotation.value.setFromMatrix4(uy.makeRotationFromEuler(v)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(xp),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,M,S){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*M,g.scale.value=S*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function p(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function u(g,m,M){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ci&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function f(g,m){m.matcap&&(g.matcap.value=m.matcap)}function y(g,m){let M=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function dy(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,_){let w=_.program;n.uniformBlockBinding(v,w)}function l(v,_){let w=s[v.id];w===void 0&&(g(v),w=h(v),s[v.id]=w,v.addEventListener("dispose",M));let R=_.program;n.updateUBOMapping(v,R);let x=e.render.frame;r[v.id]!==x&&(d(v),r[v.id]=x)}function h(v){let _=p();v.__bindingPointIndex=_;let w=i.createBuffer(),R=v.__size,x=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,R,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,w),w}function p(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return zt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let _=s[v.id],w=v.uniforms,R=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let x=0,A=w.length;x<A;x++){let P=w[x];if(Array.isArray(P))for(let B=0,T=P.length;B<T;B++)u(P[B],x,B,R);else u(P,x,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(v,_,w,R){if(y(v,_,w,R)===!0){let x=v.__offset,A=v.value;if(Array.isArray(A)){let P=0;for(let B=0;B<A.length;B++){let T=A[B],U=m(T);f(T,v.__data,P),typeof T!="number"&&typeof T!="boolean"&&!T.isMatrix3&&!ArrayBuffer.isView(T)&&(P+=U.storage/Float32Array.BYTES_PER_ELEMENT)}}else f(A,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,v.__data)}}function f(v,_,w){typeof v=="number"||typeof v=="boolean"?_[0]=v:v.isMatrix3?(_[0]=v.elements[0],_[1]=v.elements[1],_[2]=v.elements[2],_[3]=0,_[4]=v.elements[3],_[5]=v.elements[4],_[6]=v.elements[5],_[7]=0,_[8]=v.elements[6],_[9]=v.elements[7],_[10]=v.elements[8],_[11]=0):ArrayBuffer.isView(v)?_.set(new v.constructor(v.buffer,v.byteOffset,_.length)):v.toArray(_,w)}function y(v,_,w,R){let x=v.value,A=_+"_"+w;if(R[A]===void 0)return typeof x=="number"||typeof x=="boolean"?R[A]=x:ArrayBuffer.isView(x)?R[A]=x.slice():R[A]=x.clone(),!0;{let P=R[A];if(typeof x=="number"||typeof x=="boolean"){if(P!==x)return R[A]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(P.equals(x)===!1)return P.copy(x),!0}}return!1}function g(v){let _=v.uniforms,w=0,R=16;for(let A=0,P=_.length;A<P;A++){let B=Array.isArray(_[A])?_[A]:[_[A]];for(let T=0,U=B.length;T<U;T++){let I=B[T],k=Array.isArray(I.value)?I.value:[I.value];for(let j=0,q=k.length;j<q;j++){let Z=k[j],W=m(Z),X=w%R,K=X%W.boundary,ve=X+K;w+=K,ve!==0&&R-ve<W.storage&&(w+=R-ve),I.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=w,w+=W.storage}}}let x=w%R;return x>0&&(w+=R-x),v.__size=w,v.__cache={},this}function m(v){let _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?Ht("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(_.boundary=16,_.storage=v.byteLength):Ht("WebGLRenderer: Unsupported uniform value type.",v),_}function M(v){let _=v.target;_.removeEventListener("dispose",M);let w=a.indexOf(_.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function S(){for(let v in s)i.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:c,update:l,dispose:S}}var fy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),rr=null;function py(){return rr===null&&(rr=new ys(fy,16,16,Xr,Jn),rr.name="DFG_LUT",rr.minFilter=li,rr.magFilter=li,rr.wrapS=Qi,rr.wrapT=Qi,rr.generateMipmaps=!1,rr.needsUpdate=!0),rr}var ju=class{constructor(e={}){let{canvas:t=Df(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:d=!1,outputBufferType:u=mi}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;let y=u,g=new Set([xu,gu,mu]),m=new Set([mi,Hs,io,Wr,du,fu]),M=new Uint32Array(4),S=new Int32Array(4),v=new F,_=null,w=null,R=[],x=[],A=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=us,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,B=!1,T=null,U=null,I=null,k=null;this._outputColorSpace=gn;let j=0,q=0,Z=null,W=-1,X=null,K=new Nn,ve=new Nn,Ne=null,He=new ct(0),Qe=0,dt=t.width,re=t.height,ye=1,Le=null,Se=null,ke=new Nn(0,0,dt,re),ee=new Nn(0,0,dt,re),We=!1,le=new Ya,pe=!1,te=!1,he=new St,xe=new F,Xe=new Nn,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},st=!1;function it(){return Z===null?ye:1}let Q=n;function _t(L,ce){return t.getContext(L,ce)}let vt,H,E,ae,ue,_e,Ze,Ke,Ie,be,et,gt,N,ie,ge,Te,Ge,G,Ae,de,Fe,Ce,O;try{let L={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",$e,!1),t.addEventListener("webglcontextrestored",ft,!1),t.addEventListener("webglcontextcreationerror",wt,!1),Q===null){let ce="webgl2";if(Q=_t(ce,L),Q===null)throw _t(ce)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}we()}catch(L){throw t.removeEventListener("webglcontextlost",$e,!1),t.removeEventListener("webglcontextrestored",ft,!1),t.removeEventListener("webglcontextcreationerror",wt,!1),zt("WebGLRenderer: "+L.message),L}function we(){vt=new M2(Q),vt.init(),Fe=new oy(Q,vt),H=new h2(Q,vt,e,Fe),E=new ry(Q,vt),H.reversedDepthBuffer&&d&&E.buffers.depth.setReversed(!0),U=Q.createFramebuffer(),I=Q.createFramebuffer(),k=Q.createFramebuffer(),ae=new b2(Q),ue=new Xv,_e=new ay(Q,vt,E,ue,H,Fe,ae),Ze=new _2(P),Ke=new wg(Q),Ce=new c2(Q,Ke),Ie=new E2(Q,Ke,ae,Ce),be=new w2(Q,Ie,Ke,Ce,ae),G=new T2(Q,H,_e),ge=new d2(ue),et=new Wv(P,Ze,vt,H,Ce,ge),gt=new hy(P,ue),N=new qv,ie=new jv(vt),Ge=new l2(P,Ze,E,be,f,c),Te=new sy(P,be,H),O=new dy(Q,ae,H,E),Ae=new u2(Q,vt,ae),de=new S2(Q,vt,ae),ae.programs=et.programs,P.capabilities=H,P.extensions=vt,P.properties=ue,P.renderLists=N,P.shadowMap=Te,P.state=E,P.info=ae}y!==mi&&(A=new R2(y,t.width,t.height,o,s,r));let me=new Z0(P,Q);this.xr=me,this.getContext=function(){return Q},this.getContextAttributes=function(){return Q.getContextAttributes()},this.forceContextLoss=function(){let L=vt.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){let L=vt.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return ye},this.setPixelRatio=function(L){L!==void 0&&(ye=L,this.setSize(dt,re,!1))},this.getSize=function(L){return L.set(dt,re)},this.setSize=function(L,ce,Pe=!0){if(me.isPresenting){Ht("WebGLRenderer: Can't change size while VR device is presenting.");return}dt=L,re=ce,t.width=Math.floor(L*ye),t.height=Math.floor(ce*ye),Pe===!0&&(t.style.width=L+"px",t.style.height=ce+"px"),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,L,ce)},this.getDrawingBufferSize=function(L){return L.set(dt*ye,re*ye).floor()},this.setDrawingBufferSize=function(L,ce,Pe){dt=L,re=ce,ye=Pe,t.width=Math.floor(L*Pe),t.height=Math.floor(ce*Pe),this.setViewport(0,0,L,ce)},this.setEffects=function(L){if(y===mi){zt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(L){for(let ce=0;ce<L.length;ce++)if(L[ce].isOutputPass===!0){Ht("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(L||[])},this.getCurrentViewport=function(L){return L.copy(K)},this.getViewport=function(L){return L.copy(ke)},this.setViewport=function(L,ce,Pe,Me){L.isVector4?ke.set(L.x,L.y,L.z,L.w):ke.set(L,ce,Pe,Me),E.viewport(K.copy(ke).multiplyScalar(ye).round())},this.getScissor=function(L){return L.copy(ee)},this.setScissor=function(L,ce,Pe,Me){L.isVector4?ee.set(L.x,L.y,L.z,L.w):ee.set(L,ce,Pe,Me),E.scissor(ve.copy(ee).multiplyScalar(ye).round())},this.getScissorTest=function(){return We},this.setScissorTest=function(L){E.setScissorTest(We=L)},this.setOpaqueSort=function(L){Le=L},this.setTransparentSort=function(L){Se=L},this.getClearColor=function(L){return L.copy(Ge.getClearColor())},this.setClearColor=function(){Ge.setClearColor(...arguments)},this.getClearAlpha=function(){return Ge.getClearAlpha()},this.setClearAlpha=function(){Ge.setClearAlpha(...arguments)},this.clear=function(L=!0,ce=!0,Pe=!0){let Me=0;if(L){let b=!1;if(Z!==null){let $=Z.texture.format;b=g.has($)}if(b){let $=Z.texture.type,oe=m.has($),D=Ge.getClearColor(),z=Ge.getClearAlpha(),Y=D.r,ne=D.g,J=D.b;oe?(M[0]=Y,M[1]=ne,M[2]=J,M[3]=z,Q.clearBufferuiv(Q.COLOR,0,M)):(S[0]=Y,S[1]=ne,S[2]=J,S[3]=z,Q.clearBufferiv(Q.COLOR,0,S))}else Me|=Q.COLOR_BUFFER_BIT}ce&&(Me|=Q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Pe&&(Me|=Q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Me!==0&&Q.clear(Me)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(L){L.setRenderer(this),T=L},this.dispose=function(){t.removeEventListener("webglcontextlost",$e,!1),t.removeEventListener("webglcontextrestored",ft,!1),t.removeEventListener("webglcontextcreationerror",wt,!1),Ge.dispose(),N.dispose(),ie.dispose(),ue.dispose(),Ze.dispose(),be.dispose(),Ce.dispose(),O.dispose(),et.dispose(),me.dispose(),me.removeEventListener("sessionstart",Ee),me.removeEventListener("sessionend",Oe),je.stop()};function $e(L){L.preventDefault(),Uo("WebGLRenderer: Context Lost."),B=!0}function ft(){Uo("WebGLRenderer: Context Restored."),B=!1;let L=ae.autoReset,ce=Te.enabled,Pe=Te.autoUpdate,Me=Te.needsUpdate,b=Te.type;we(),ae.autoReset=L,Te.enabled=ce,Te.autoUpdate=Pe,Te.needsUpdate=Me,Te.type=b}function wt(L){zt("WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function Pt(L){let ce=L.target;ce.removeEventListener("dispose",Pt),Bt(ce)}function Bt(L){Yt(L),ue.remove(L)}function Yt(L){let ce=ue.get(L).programs;ce!==void 0&&(ce.forEach(function(Pe){et.releaseProgram(Pe)}),L.isShaderMaterial&&et.releaseShaderCache(L))}this.renderBufferDirect=function(L,ce,Pe,Me,b,$){ce===null&&(ce=Ve);let oe=b.isMesh&&b.matrixWorld.determinantAffine()<0,D=Ei(L,ce,Pe,Me,b);E.setMaterial(Me,oe);let z=Pe.index,Y=1;if(Me.wireframe===!0){if(z=Ie.getWireframeAttribute(Pe),z===void 0)return;Y=2}let ne=Pe.drawRange,J=Pe.attributes.position,se=ne.start*Y,Re=(ne.start+ne.count)*Y;$!==null&&(se=Math.max(se,$.start*Y),Re=Math.min(Re,($.start+$.count)*Y)),z!==null?(se=Math.max(se,0),Re=Math.min(Re,z.count)):J!=null&&(se=Math.max(se,0),Re=Math.min(Re,J.count));let De=Re-se;if(De<0||De===1/0)return;Ce.setup(b,Me,D,Pe,z);let ze,Je=Ae;if(z!==null&&(ze=Ke.get(z),Je=de,Je.setIndex(ze)),b.isMesh)Me.wireframe===!0?(E.setLineWidth(Me.wireframeLinewidth*it()),Je.setMode(Q.LINES)):Je.setMode(Q.TRIANGLES);else if(b.isLine){let Be=Me.linewidth;Be===void 0&&(Be=1),E.setLineWidth(Be*it()),b.isLineSegments?Je.setMode(Q.LINES):b.isLineLoop?Je.setMode(Q.LINE_LOOP):Je.setMode(Q.LINE_STRIP)}else b.isPoints?Je.setMode(Q.POINTS):b.isSprite&&Je.setMode(Q.TRIANGLES);if(b.isBatchedMesh)if(vt.get("WEBGL_multi_draw"))Je.renderMultiDraw(b._multiDrawStarts,b._multiDrawCounts,b._multiDrawCount);else{let Be=b._multiDrawStarts,fe=b._multiDrawCounts,rt=b._multiDrawCount,at=z?Ke.get(z).bytesPerElement:1,Tt=ue.get(Me).currentProgram.getUniforms();for(let jt=0;jt<rt;jt++)Tt.setValue(Q,"_gl_DrawID",jt),Je.render(Be[jt]/at,fe[jt])}else if(b.isInstancedMesh)Je.renderInstances(se,De,b.count);else if(Pe.isInstancedBufferGeometry){let Be=Pe._maxInstanceCount!==void 0?Pe._maxInstanceCount:1/0,fe=Math.min(Pe.instanceCount,Be);Je.renderInstances(se,De,fe)}else Je.render(se,De)};function bn(L,ce,Pe,Me){T!==null&&L.isNodeMaterial&&T.setObject(Me,L),pe===!0&&ge.setState(L,Pe,!1),L.transparent===!0&&L.side===Wn&&L.forceSinglePass===!1?(L.side=Ci,L.needsUpdate=!0,It(L,ce,Me),L.side=zr,L.needsUpdate=!0,It(L,ce,Me),L.side=Wn):It(L,ce,Me)}this.compile=function(L,ce,Pe=null){Pe===null&&(Pe=L),T!==null&&T.renderStart(L,ce,Pe),w=ie.get(Pe),w.init(ce),x.push(w),Pe.traverseVisible(function(b){b.isLight&&b.layers.test(ce.layers)&&(w.pushLight(b),b.castShadow&&w.pushShadow(b))}),L!==Pe&&L.traverseVisible(function(b){b.isLight&&b.layers.test(ce.layers)&&(w.pushLight(b),b.castShadow&&w.pushShadow(b))}),w.setupLights(),T!==null&&T.updateLights(w.state.lightsArray),te=this.localClippingEnabled,pe=ge.init(this.clippingPlanes,te),pe===!0&&ge.setGlobalState(this.clippingPlanes,ce),T!==null&&Te.render(w.state.shadowsArray,Pe,ce);let Me=new Set;return L.traverse(function(b){if(!(b.isMesh||b.isPoints||b.isLine||b.isSprite))return;let $=b.material;if($)if(Array.isArray($))for(let oe=0;oe<$.length;oe++){let D=$[oe];bn(D,Pe,ce,b),Me.add(D)}else bn($,Pe,ce,b),Me.add($)}),w=x.pop(),T!==null&&T.renderEnd(),Me},this.compileAsync=function(L,ce,Pe=null){let Me=this.compile(L,ce,Pe);return new Promise(b=>{function $(){if(Me.forEach(function(oe){let z=ue.get(oe).currentProgram;(z===void 0||z.isReady())&&Me.delete(oe)}),Me.size===0){b(L);return}setTimeout($,10)}vt.get("KHR_parallel_shader_compile")!==null?$():setTimeout($,10)})};let pn=null;function C(L){pn&&pn(L)}function Ee(){je.stop()}function Oe(){je.start()}let je=new hp;je.setAnimationLoop(C),typeof self<"u"&&je.setContext(self),this.setAnimationLoop=function(L){pn=L,me.setAnimationLoop(L),L===null?je.stop():je.start()},me.addEventListener("sessionstart",Ee),me.addEventListener("sessionend",Oe),this.render=function(L,ce){if(ce!==void 0&&ce.isCamera!==!0){zt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;T!==null&&T.renderStart(L,ce);let Pe=me.enabled===!0&&me.isPresenting===!0,Me=A!==null&&(Z===null||Pe)&&A.begin(P,Z);if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),ce.parent===null&&ce.matrixWorldAutoUpdate===!0&&ce.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(me.cameraAutoUpdate===!0&&me.updateCamera(ce),ce=me.getCamera()),L.isScene===!0&&L.onBeforeRender(P,L,ce,Z),w=ie.get(L,x.length),w.init(ce),w.state.textureUnits=_e.getTextureUnits(),x.push(w),he.multiplyMatrices(ce.projectionMatrix,ce.matrixWorldInverse),le.setFromProjectionMatrix(he,Bs,ce.reversedDepth),te=this.localClippingEnabled,pe=ge.init(this.clippingPlanes,te),_=N.get(L,R.length),_.init(),R.push(_),me.enabled===!0&&me.isPresenting===!0){let oe=P.xr.getDepthSensingMesh();oe!==null&&tt(oe,ce,-1/0,P.sortObjects)}tt(L,ce,0,P.sortObjects),_.finish(),T!==null&&T.updateLights(w.state.lightsArray),P.sortObjects===!0&&_.sort(Le,Se),st=me.enabled===!1||me.isPresenting===!1||me.hasDepthSensing()===!1,st&&Ge.addToRenderList(_,L),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),pe===!0&&ge.beginShadows();let b=w.state.shadowsArray;if(Te.render(b,L,ce),pe===!0&&ge.endShadows(),(Me&&A.hasRenderPass())===!1){let oe=_.opaque,D=_.transmissive;if(w.setupLights(),ce.isArrayCamera){let z=ce.cameras;if(D.length>0)for(let Y=0,ne=z.length;Y<ne;Y++){let J=z[Y];ut(oe,D,L,J)}st&&Ge.render(L);for(let Y=0,ne=z.length;Y<ne;Y++){let J=z[Y];bt(_,L,J,J.viewport)}}else D.length>0&&ut(oe,D,L,ce),st&&Ge.render(L),bt(_,L,ce)}Z!==null&&q===0&&(_e.updateMultisampleRenderTarget(Z),_e.updateRenderTargetMipmap(Z)),Me&&A.end(P),L.isScene===!0&&L.onAfterRender(P,L,ce),Ce.resetDefaultState(),W=-1,X=null,x.pop(),x.length>0?(w=x[x.length-1],_e.setTextureUnits(w.state.textureUnits),pe===!0&&ge.setGlobalState(P.clippingPlanes,w.state.camera)):w=null,R.pop(),R.length>0?_=R[R.length-1]:_=null,T!==null&&T.renderEnd()};function tt(L,ce,Pe,Me){if(L.visible===!1)return;if(L.layers.test(ce.layers)){if(L.isGroup)Pe=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(ce);else if(L.isLightProbeGrid)w.pushLightProbeGrid(L);else if(L.isLight)w.pushLight(L),L.castShadow&&w.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||L.intersectsFrustum(le)){Me&&Xe.setFromMatrixPosition(L.matrixWorld).applyMatrix4(he);let oe=be.update(L),D=L.material;D.visible&&_.push(L,oe,D,Pe,Xe.z,null,ce)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||L.intersectsFrustum(le))){let oe=be.update(L),D=L.material;if(Me&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),Xe.copy(L.boundingSphere.center)):(oe.boundingSphere===null&&oe.computeBoundingSphere(),Xe.copy(oe.boundingSphere.center)),Xe.applyMatrix4(L.matrixWorld).applyMatrix4(he)),Array.isArray(D)){let z=oe.groups;for(let Y=0,ne=z.length;Y<ne;Y++){let J=z[Y],se=D[J.materialIndex];se&&se.visible&&_.push(L,oe,se,Pe,Xe.z,J,ce)}}else D.visible&&_.push(L,oe,D,Pe,Xe.z,null,ce)}}let $=L.children;for(let oe=0,D=$.length;oe<D;oe++)tt($[oe],ce,Pe,Me)}function bt(L,ce,Pe,Me){let{opaque:b,transmissive:$,transparent:oe}=L;w.setupLightsView(Pe),pe===!0&&ge.setGlobalState(P.clippingPlanes,Pe),Me&&E.viewport(K.copy(Me)),b.length>0&&xt(b,ce,Pe),$.length>0&&xt($,ce,Pe),oe.length>0&&xt(oe,ce,Pe),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function ut(L,ce,Pe,Me){if((Pe.isScene===!0?Pe.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[Me.id]===void 0){let se=vt.has("EXT_color_buffer_half_float")||vt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[Me.id]=new Un(1,1,{generateMipmaps:!0,type:se?Jn:mi,minFilter:ir,samples:Math.max(4,H.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:mn.workingColorSpace})}let $=w.state.transmissionRenderTarget[Me.id],oe=Me.viewport||K;$.setSize(oe.z*P.transmissionResolutionScale,oe.w*P.transmissionResolutionScale);let D=P.getRenderTarget(),z=P.getActiveCubeFace(),Y=P.getActiveMipmapLevel();P.setRenderTarget($),P.getClearColor(He),Qe=P.getClearAlpha(),Qe<1&&P.setClearColor(16777215,.5),P.clear(),st&&Ge.render(Pe);let ne=P.toneMapping;P.toneMapping=us;let J=Me.viewport;if(Me.viewport!==void 0&&(Me.viewport=void 0),w.setupLightsView(Me),pe===!0&&ge.setGlobalState(P.clippingPlanes,Me),xt(L,Pe,Me),_e.updateMultisampleRenderTarget($),_e.updateRenderTargetMipmap($),vt.has("WEBGL_multisampled_render_to_texture")===!1){let se=!1;for(let Re=0,De=ce.length;Re<De;Re++){let ze=ce[Re],{object:Je,geometry:Be,material:fe,group:rt}=ze;if(fe.side===Wn&&Je.layers.test(Me.layers)){let at=fe.side;fe.side=Ci,fe.needsUpdate=!0,mt(Je,Pe,Me,Be,fe,rt),fe.side=at,fe.needsUpdate=!0,se=!0}}se===!0&&(_e.updateMultisampleRenderTarget($),_e.updateRenderTargetMipmap($))}P.setRenderTarget(D,z,Y),P.setClearColor(He,Qe),J!==void 0&&(Me.viewport=J),P.toneMapping=ne}function xt(L,ce,Pe){let Me=ce.isScene===!0?ce.overrideMaterial:null;for(let b=0,$=L.length;b<$;b++){let oe=L[b],{object:D,geometry:z,group:Y}=oe,ne=oe.material;ne.allowOverride===!0&&Me!==null&&(ne=Me),D.layers.test(Pe.layers)&&mt(D,ce,Pe,z,ne,Y)}}function mt(L,ce,Pe,Me,b,$){T!==null&&b.isNodeMaterial&&T.setObject(L,b),L.onBeforeRender(P,ce,Pe,Me,b,$),L.modelViewMatrix.multiplyMatrices(Pe.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),b.onBeforeRender(P,ce,Pe,Me,L,$),b.transparent===!0&&b.side===Wn&&b.forceSinglePass===!1?(b.side=Ci,b.needsUpdate=!0,P.renderBufferDirect(Pe,ce,Me,b,L,$),b.side=zr,b.needsUpdate=!0,P.renderBufferDirect(Pe,ce,Me,b,L,$),b.side=Wn):P.renderBufferDirect(Pe,ce,Me,b,L,$),L.onAfterRender(P,ce,Pe,Me,b,$)}function It(L,ce,Pe){ce.isScene!==!0&&(ce=Ve);let Me=ue.get(L),b=w.state.lights,$=w.state.shadowsArray,oe=b.state.version,D=et.getParameters(L,b.state,$,ce,Pe,w.state.lightProbeGridArray),z=et.getProgramCacheKey(D),Y=Me.programs;Me.environment=L.isMeshStandardMaterial||L.isMeshLambertMaterial||L.isMeshPhongMaterial?ce.environment:null,Me.fog=ce.fog;let ne=L.isMeshStandardMaterial||L.isMeshLambertMaterial&&!L.envMap||L.isMeshPhongMaterial&&!L.envMap;Me.envMap=Ze.get(L.envMap||Me.environment,ne),Me.envMapRotation=Me.environment!==null&&L.envMap===null?ce.environmentRotation:L.envMapRotation,Y===void 0&&(L.addEventListener("dispose",Pt),Y=new Map,Me.programs=Y);let J=Y.get(z);if(J!==void 0){if(Me.currentProgram===J&&Me.lightsStateVersion===oe)return Wt(L,D),J}else D.uniforms=et.getUniforms(L),T!==null&&L.isNodeMaterial&&T.build(L,Pe,D),L.onBeforeCompile(D,P),J=et.acquireProgram(D,z),Y.set(z,J),Me.uniforms=D.uniforms;let se=Me.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(se.clippingPlanes=ge.uniform),Wt(L,D),Me.needsLights=kn(L),Me.lightsStateVersion=oe,Me.needsLights&&(se.ambientLightColor.value=b.state.ambient,se.lightProbe.value=b.state.probe,se.sunLights.value=b.state.sun,se.sunLightShadows.value=b.state.sunShadow,se.directionalLights.value=b.state.directional,se.directionalLightShadows.value=b.state.directionalShadow,se.spotLights.value=b.state.spot,se.spotLightShadows.value=b.state.spotShadow,se.rectAreaLights.value=b.state.rectArea,se.ltc_1.value=b.state.rectAreaLTC1,se.ltc_2.value=b.state.rectAreaLTC2,se.pointLights.value=b.state.point,se.pointLightShadows.value=b.state.pointShadow,se.hemisphereLights.value=b.state.hemi,se.sunShadowMatrix.value=b.state.sunShadowMatrix,se.sunShadowCascade.value=b.state.sunShadowCascade,se.directionalShadowMatrix.value=b.state.directionalShadowMatrix,se.spotLightMatrix.value=b.state.spotLightMatrix,se.spotLightMap.value=b.state.spotLightMap,se.pointShadowMatrix.value=b.state.pointShadowMatrix),Me.lightProbeGrid=w.state.lightProbeGridArray.length>0,Me.currentProgram=J,Me.uniformsList=null,J}function At(L){if(L.uniformsList===null){let ce=L.currentProgram.getUniforms();L.uniformsList=ao.seqWithValue(ce.seq,L.uniforms)}return L.uniformsList}function Wt(L,ce){let Pe=ue.get(L);Pe.outputColorSpace=ce.outputColorSpace,Pe.batching=ce.batching,Pe.batchingColor=ce.batchingColor,Pe.instancing=ce.instancing,Pe.instancingColor=ce.instancingColor,Pe.instancingMorph=ce.instancingMorph,Pe.skinning=ce.skinning,Pe.morphTargets=ce.morphTargets,Pe.morphNormals=ce.morphNormals,Pe.morphColors=ce.morphColors,Pe.morphTargetsCount=ce.morphTargetsCount,Pe.numClippingPlanes=ce.numClippingPlanes,Pe.numIntersection=ce.numClipIntersection,Pe.vertexAlphas=ce.vertexAlphas,Pe.vertexTangents=ce.vertexTangents,Pe.toneMapping=ce.toneMapping}function Mi(L,ce){if(L.length===0)return null;if(L.length===1)return L[0].texture!==null?L[0]:null;v.setFromMatrixPosition(ce.matrixWorld);for(let Pe=0,Me=L.length;Pe<Me;Pe++){let b=L[Pe];if(b.texture!==null&&b.boundingBox.containsPoint(v))return b}return null}function Ei(L,ce,Pe,Me,b){ce.isScene!==!0&&(ce=Ve),_e.resetTextureUnits();let $=ce.fog,oe=Me.isMeshStandardMaterial||Me.isMeshLambertMaterial||Me.isMeshPhongMaterial?ce.environment:null,D=Z===null?P.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:mn.workingColorSpace,z=Me.isMeshStandardMaterial||Me.isMeshLambertMaterial&&!Me.envMap||Me.isMeshPhongMaterial&&!Me.envMap,Y=Ze.get(Me.envMap||oe,z),ne=Me.vertexColors===!0&&!!Pe.attributes.color&&Pe.attributes.color.itemSize===4,J=!!Pe.attributes.tangent&&(!!Me.normalMap||Me.anisotropy>0),se=!!Pe.morphAttributes.position,Re=!!Pe.morphAttributes.normal,De=!!Pe.morphAttributes.color,ze=us;Me.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(ze=P.toneMapping);let Je=Pe.morphAttributes.position||Pe.morphAttributes.normal||Pe.morphAttributes.color,Be=Je!==void 0?Je.length:0,fe=ue.get(Me),rt=w.state.lights;if(pe===!0&&(te===!0||L!==X)){let Rt=L===X&&Me.id===W;ge.setState(Me,L,Rt)}let at=!1;Me.version===fe.__version?(fe.needsLights&&fe.lightsStateVersion!==rt.state.version||fe.outputColorSpace!==D||b.isBatchedMesh&&fe.batching===!1||!b.isBatchedMesh&&fe.batching===!0||b.isBatchedMesh&&fe.batchingColor===!0&&b._colorsTexture===null||b.isBatchedMesh&&fe.batchingColor===!1&&b._colorsTexture!==null||b.isInstancedMesh&&fe.instancing===!1||!b.isInstancedMesh&&fe.instancing===!0||b.isSkinnedMesh&&fe.skinning===!1||!b.isSkinnedMesh&&fe.skinning===!0||b.isInstancedMesh&&fe.instancingColor===!0&&b.instanceColor===null||b.isInstancedMesh&&fe.instancingColor===!1&&b.instanceColor!==null||b.isInstancedMesh&&fe.instancingMorph===!0&&b.morphTexture===null||b.isInstancedMesh&&fe.instancingMorph===!1&&b.morphTexture!==null||fe.envMap!==Y||Me.fog===!0&&fe.fog!==$||fe.numClippingPlanes!==void 0&&(fe.numClippingPlanes!==ge.numPlanes||fe.numIntersection!==ge.numIntersection)||fe.vertexAlphas!==ne||fe.vertexTangents!==J||fe.morphTargets!==se||fe.morphNormals!==Re||fe.morphColors!==De||fe.toneMapping!==ze||fe.morphTargetsCount!==Be||!!fe.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(at=!0):(at=!0,fe.__version=Me.version);let Tt=fe.currentProgram;at===!0&&(Tt=It(Me,ce,b),T&&Me.isNodeMaterial&&T.onUpdateProgram(Me,Tt,fe));let jt=!1,nn=!1,ln=!1,Dt=Tt.getUniforms(),sn=fe.uniforms;if(E.useProgram(Tt.program)&&(jt=!0,nn=!0,ln=!0),Me.id!==W&&(W=Me.id,nn=!0),fe.needsLights){let Rt=Mi(w.state.lightProbeGridArray,b);fe.lightProbeGrid!==Rt&&(fe.lightProbeGrid=Rt,nn=!0)}if(jt||X!==L){E.buffers.depth.getReversed()&&L.reversedDepth!==!0&&(L._reversedDepth=!0,L.updateProjectionMatrix()),Dt.setValue(Q,"projectionMatrix",L.projectionMatrix),Dt.setValue(Q,"viewMatrix",L.matrixWorldInverse);let Vn=Dt.map.cameraPosition;Vn!==void 0&&Vn.setValue(Q,xe.setFromMatrixPosition(L.matrixWorld)),H.logarithmicDepthBuffer&&Dt.setValue(Q,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(Me.isMeshPhongMaterial||Me.isMeshToonMaterial||Me.isMeshLambertMaterial||Me.isMeshBasicMaterial||Me.isMeshStandardMaterial||Me.isShaderMaterial)&&Dt.setValue(Q,"isOrthographic",L.isOrthographicCamera===!0),X!==L&&(X=L,nn=!0,ln=!0)}if(fe.needsLights&&(rt.state.sunShadowMap.length>0&&Dt.setValue(Q,"sunShadowMap",rt.state.sunShadowMap,_e),rt.state.directionalShadowMap.length>0&&Dt.setValue(Q,"directionalShadowMap",rt.state.directionalShadowMap,_e),rt.state.spotShadowMap.length>0&&Dt.setValue(Q,"spotShadowMap",rt.state.spotShadowMap,_e),rt.state.pointShadowMap.length>0&&Dt.setValue(Q,"pointShadowMap",rt.state.pointShadowMap,_e)),b.isSkinnedMesh){Dt.setOptional(Q,b,"bindMatrix"),Dt.setOptional(Q,b,"bindMatrixInverse");let Rt=b.skeleton;Rt&&(Rt.boneTexture===null&&Rt.computeBoneTexture(),Dt.setValue(Q,"boneTexture",Rt.boneTexture,_e))}b.isBatchedMesh&&(Dt.setOptional(Q,b,"batchingTexture"),Dt.setValue(Q,"batchingTexture",b._matricesTexture,_e),Dt.setOptional(Q,b,"batchingIdTexture"),Dt.setValue(Q,"batchingIdTexture",b._indirectTexture,_e),Dt.setOptional(Q,b,"batchingColorTexture"),b._colorsTexture!==null&&Dt.setValue(Q,"batchingColorTexture",b._colorsTexture,_e));let Ft=Pe.morphAttributes;if((Ft.position!==void 0||Ft.normal!==void 0||Ft.color!==void 0)&&G.update(b,Pe,Tt),(nn||fe.receiveShadow!==b.receiveShadow)&&(fe.receiveShadow=b.receiveShadow,Dt.setValue(Q,"receiveShadow",b.receiveShadow)),(Me.isMeshStandardMaterial||Me.isMeshLambertMaterial||Me.isMeshPhongMaterial)&&Me.envMap===null&&ce.environment!==null&&(sn.envMapIntensity.value=ce.environmentIntensity),sn.dfgLUT!==void 0&&(sn.dfgLUT.value=py()),nn){if(Dt.setValue(Q,"toneMappingExposure",P.toneMappingExposure),fe.needsLights&&Ii(sn,ln),$&&Me.fog===!0&&gt.refreshFogUniforms(sn,$),gt.refreshMaterialUniforms(sn,Me,ye,re,w.state.transmissionRenderTarget[L.id]),fe.needsLights&&fe.lightProbeGrid){let Rt=fe.lightProbeGrid;sn.probesSH.value=Rt.texture,sn.probesMin.value.copy(Rt.boundingBox.min),sn.probesMax.value.copy(Rt.boundingBox.max),sn.probesResolution.value.copy(Rt.resolution)}ao.upload(Q,At(fe),sn,_e)}if(Me.isShaderMaterial&&Me.uniformsNeedUpdate===!0&&(ao.upload(Q,At(fe),sn,_e),Me.uniformsNeedUpdate=!1),Me.isSpriteMaterial&&Dt.setValue(Q,"center",b.center),Dt.setValue(Q,"modelViewMatrix",b.modelViewMatrix),Dt.setValue(Q,"normalMatrix",b.normalMatrix),Dt.setValue(Q,"modelMatrix",b.matrixWorld),Me.uniformsGroups!==void 0){let Rt=Me.uniformsGroups;for(let Vn=0,qn=Rt.length;Vn<qn;Vn++){let ni=Rt[Vn];O.update(ni,Tt),O.bind(ni,Tt)}}return Tt}function Ii(L,ce){L.ambientLightColor.needsUpdate=ce,L.lightProbe.needsUpdate=ce,L.sunLights.needsUpdate=ce,L.sunLightShadows.needsUpdate=ce,L.directionalLights.needsUpdate=ce,L.directionalLightShadows.needsUpdate=ce,L.pointLights.needsUpdate=ce,L.pointLightShadows.needsUpdate=ce,L.spotLights.needsUpdate=ce,L.spotLightShadows.needsUpdate=ce,L.rectAreaLights.needsUpdate=ce,L.hemisphereLights.needsUpdate=ce}function kn(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(L,ce,Pe){let Me=ue.get(L);Me.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,Me.__autoAllocateDepthBuffer===!1&&(Me.__useRenderToTexture=!1),ue.get(L.texture).__webglTexture=ce,ue.get(L.depthTexture).__webglTexture=Me.__autoAllocateDepthBuffer?void 0:Pe,Me.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,ce){let Pe=ue.get(L);Pe.__webglFramebuffer=ce,Pe.__useDefaultFramebuffer=ce===void 0},this.setRenderTarget=function(L,ce=0,Pe=0){Z=L,j=ce,q=Pe;let Me=null,b=!1,$=!1;if(L){let D=ue.get(L);if(D.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(Q.FRAMEBUFFER,D.__webglFramebuffer),K.copy(L.viewport),ve.copy(L.scissor),Ne=L.scissorTest,E.viewport(K),E.scissor(ve),E.setScissorTest(Ne),W=-1;return}else if(D.__webglFramebuffer===void 0)_e.setupRenderTarget(L);else if(D.__hasExternalTextures)_e.rebindTextures(L,ue.get(L.texture).__webglTexture,ue.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){let ne=L.depthTexture;if(D.__boundDepthTexture!==ne){if(ne!==null&&ue.has(ne)&&(L.width!==ne.image.width||L.height!==ne.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");_e.setupDepthRenderbuffer(L)}}let z=L.texture;(z.isData3DTexture||z.isDataArrayTexture||z.isCompressedArrayTexture)&&($=!0);let Y=ue.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(Y[ce])?Me=Y[ce][Pe]:Me=Y[ce],b=!0):L.samples>0&&_e.useMultisampledRTT(L)===!1?Me=ue.get(L).__webglMultisampledFramebuffer:Array.isArray(Y)?Me=Y[Pe]:Me=Y,K.copy(L.viewport),ve.copy(L.scissor),Ne=L.scissorTest}else K.copy(ke).multiplyScalar(ye).floor(),ve.copy(ee).multiplyScalar(ye).floor(),Ne=We;if(Pe!==0&&(Me=U),E.bindFramebuffer(Q.FRAMEBUFFER,Me)&&E.drawBuffers(L,Me),E.viewport(K),E.scissor(ve),E.setScissorTest(Ne),b){let D=ue.get(L.texture);Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_CUBE_MAP_POSITIVE_X+ce,D.__webglTexture,Pe)}else if($){let D=ce;for(let z=0;z<L.textures.length;z++){let Y=ue.get(L.textures[z]);Q.framebufferTextureLayer(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0+z,Y.__webglTexture,Pe,D)}}else if(L!==null&&Pe!==0){let D=ue.get(L.texture);Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,D.__webglTexture,Pe)}W=-1};function Vi(L){let ce=ue.get(L);return(ce.__readFormat!==L.format||ce.__readType!==L.type)&&(ce.__readFormat=L.format,ce.__readType=L.type,ce.__formatReadable=H.textureFormatReadable(L.format),ce.__typeReadable=H.textureTypeReadable(L.type)),ce}this.readRenderTargetPixels=function(L,ce,Pe,Me,b,$,oe,D=0){if(!(L&&L.isWebGLRenderTarget)){zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let z=ue.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&oe!==void 0&&(z=z[oe]),z){E.bindFramebuffer(Q.FRAMEBUFFER,z);try{let Y=L.textures[D],ne=Y.format,J=Y.type;L.textures.length>1&&Q.readBuffer(Q.COLOR_ATTACHMENT0+D);let se=Vi(Y);if(se.__formatReadable===!1){zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(se.__typeReadable===!1){zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ce>=0&&ce<=L.width-Me&&Pe>=0&&Pe<=L.height-b&&Q.readPixels(ce,Pe,Me,b,Fe.convert(ne),Fe.convert(J),$)}finally{let Y=Z!==null?ue.get(Z).__webglFramebuffer:null;E.bindFramebuffer(Q.FRAMEBUFFER,Y)}}},this.readRenderTargetPixelsAsync=async function(L,ce,Pe,Me,b,$,oe,D=0){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let z=ue.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&oe!==void 0&&(z=z[oe]),z)if(ce>=0&&ce<=L.width-Me&&Pe>=0&&Pe<=L.height-b){E.bindFramebuffer(Q.FRAMEBUFFER,z);let Y=L.textures[D],ne=Y.format,J=Y.type;L.textures.length>1&&Q.readBuffer(Q.COLOR_ATTACHMENT0+D);let se=Vi(Y);if(se.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(se.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Re=Q.createBuffer();Q.bindBuffer(Q.PIXEL_PACK_BUFFER,Re),Q.bufferData(Q.PIXEL_PACK_BUFFER,$.byteLength,Q.STREAM_READ),Q.readPixels(ce,Pe,Me,b,Fe.convert(ne),Fe.convert(J),0),Q.bindBuffer(Q.PIXEL_PACK_BUFFER,null);let De=Z!==null?ue.get(Z).__webglFramebuffer:null;E.bindFramebuffer(Q.FRAMEBUFFER,De);let ze=Q.fenceSync(Q.SYNC_GPU_COMMANDS_COMPLETE,0);return Q.flush(),await Nf(Q,ze,4),Q.bindBuffer(Q.PIXEL_PACK_BUFFER,Re),Q.getBufferSubData(Q.PIXEL_PACK_BUFFER,0,$),Q.bindBuffer(Q.PIXEL_PACK_BUFFER,null),Q.deleteBuffer(Re),Q.deleteSync(ze),$}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,ce=null,Pe=0){let Me=Math.pow(2,-Pe),b=Math.floor(L.image.width*Me),$=Math.floor(L.image.height*Me),oe=ce!==null?ce.x:0,D=ce!==null?ce.y:0;_e.setTexture2D(L,0),Q.copyTexSubImage2D(Q.TEXTURE_2D,Pe,0,0,oe,D,b,$),E.unbindTexture()},this.copyTextureToTexture=function(L,ce,Pe=null,Me=null,b=0,$=0){let oe,D,z,Y,ne,J,se,Re,De,ze=L.isCompressedTexture?L.mipmaps[$]:L.image;if(Pe!==null)oe=Pe.max.x-Pe.min.x,D=Pe.max.y-Pe.min.y,z=Pe.isBox3?Pe.max.z-Pe.min.z:1,Y=Pe.min.x,ne=Pe.min.y,J=Pe.isBox3?Pe.min.z:0;else{let sn=Math.pow(2,-b);oe=Math.floor(ze.width*sn),D=Math.floor(ze.height*sn),L.isDataArrayTexture?z=ze.depth:L.isData3DTexture?z=Math.floor(ze.depth*sn):z=1,Y=0,ne=0,J=0}Me!==null?(se=Me.x,Re=Me.y,De=Me.z):(se=0,Re=0,De=0);let Je=Fe.convert(ce.format),Be=Fe.convert(ce.type),fe;ce.isData3DTexture?(_e.setTexture3D(ce,0),fe=Q.TEXTURE_3D):ce.isDataArrayTexture||ce.isCompressedArrayTexture?(_e.setTexture2DArray(ce,0),fe=Q.TEXTURE_2D_ARRAY):(_e.setTexture2D(ce,0),fe=Q.TEXTURE_2D),E.activeTexture(Q.TEXTURE0),E.pixelStorei(Q.UNPACK_FLIP_Y_WEBGL,ce.flipY),E.pixelStorei(Q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ce.premultiplyAlpha),E.pixelStorei(Q.UNPACK_ALIGNMENT,ce.unpackAlignment);let rt=E.getParameter(Q.UNPACK_ROW_LENGTH),at=E.getParameter(Q.UNPACK_IMAGE_HEIGHT),Tt=E.getParameter(Q.UNPACK_SKIP_PIXELS),jt=E.getParameter(Q.UNPACK_SKIP_ROWS),nn=E.getParameter(Q.UNPACK_SKIP_IMAGES);E.pixelStorei(Q.UNPACK_ROW_LENGTH,ze.width),E.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,ze.height),E.pixelStorei(Q.UNPACK_SKIP_PIXELS,Y),E.pixelStorei(Q.UNPACK_SKIP_ROWS,ne),E.pixelStorei(Q.UNPACK_SKIP_IMAGES,J);let ln=L.isDataArrayTexture||L.isData3DTexture,Dt=ce.isDataArrayTexture||ce.isData3DTexture;if(L.isDepthTexture){let sn=ue.get(L),Ft=ue.get(ce),Rt=ue.get(sn.__renderTarget),Vn=ue.get(Ft.__renderTarget);E.bindFramebuffer(Q.READ_FRAMEBUFFER,Rt.__webglFramebuffer),E.bindFramebuffer(Q.DRAW_FRAMEBUFFER,Vn.__webglFramebuffer);for(let qn=0;qn<z;qn++)ln&&(Q.framebufferTextureLayer(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,ue.get(L).__webglTexture,b,J+qn),Q.framebufferTextureLayer(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,ue.get(ce).__webglTexture,$,De+qn)),Q.blitFramebuffer(Y,ne,oe,D,se,Re,oe,D,Q.DEPTH_BUFFER_BIT,Q.NEAREST);E.bindFramebuffer(Q.READ_FRAMEBUFFER,null),E.bindFramebuffer(Q.DRAW_FRAMEBUFFER,null)}else if(b!==0||L.isRenderTargetTexture||ue.has(L)){let sn=ue.get(L),Ft=ue.get(ce);E.bindFramebuffer(Q.READ_FRAMEBUFFER,I),E.bindFramebuffer(Q.DRAW_FRAMEBUFFER,k);for(let Rt=0;Rt<z;Rt++)ln?Q.framebufferTextureLayer(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,sn.__webglTexture,b,J+Rt):Q.framebufferTexture2D(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,sn.__webglTexture,b),Dt?Q.framebufferTextureLayer(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Ft.__webglTexture,$,De+Rt):Q.framebufferTexture2D(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,Ft.__webglTexture,$),b!==0?Q.blitFramebuffer(Y,ne,oe,D,se,Re,oe,D,Q.COLOR_BUFFER_BIT,Q.NEAREST):Dt?Q.copyTexSubImage3D(fe,$,se,Re,De+Rt,Y,ne,oe,D):Q.copyTexSubImage2D(fe,$,se,Re,Y,ne,oe,D);E.bindFramebuffer(Q.READ_FRAMEBUFFER,null),E.bindFramebuffer(Q.DRAW_FRAMEBUFFER,null)}else Dt?L.isDataTexture||L.isData3DTexture?Q.texSubImage3D(fe,$,se,Re,De,oe,D,z,Je,Be,ze.data):ce.isCompressedArrayTexture?Q.compressedTexSubImage3D(fe,$,se,Re,De,oe,D,z,Je,ze.data):Q.texSubImage3D(fe,$,se,Re,De,oe,D,z,Je,Be,ze):L.isDataTexture?Q.texSubImage2D(Q.TEXTURE_2D,$,se,Re,oe,D,Je,Be,ze.data):L.isCompressedTexture?Q.compressedTexSubImage2D(Q.TEXTURE_2D,$,se,Re,ze.width,ze.height,Je,ze.data):Q.texSubImage2D(Q.TEXTURE_2D,$,se,Re,oe,D,Je,Be,ze);E.pixelStorei(Q.UNPACK_ROW_LENGTH,rt),E.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,at),E.pixelStorei(Q.UNPACK_SKIP_PIXELS,Tt),E.pixelStorei(Q.UNPACK_SKIP_ROWS,jt),E.pixelStorei(Q.UNPACK_SKIP_IMAGES,nn),$===0&&ce.generateMipmaps&&Q.generateMipmap(fe),E.unbindTexture()},this.initRenderTarget=function(L){ue.get(L).__webglFramebuffer===void 0&&_e.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?_e.setTextureCube(L,0):L.isData3DTexture?_e.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?_e.setTexture2DArray(L,0):_e.setTexture2D(L,0),E.unbindTexture()},this.resetState=function(){j=0,q=0,Z=null,E.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bs}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=mn._getDrawingBufferColorSpace(e),t.unpackColorSpace=mn._getUnpackColorSpace()}};var Ut=(i,e,t)=>Math.min(t,Math.max(e,i)),nt=(i,e,t)=>i+(e-i)*t,Et=(i,e,t)=>{let n=Ut((t-i)/(e-i),0,1);return n*n*(3-2*n)};function wn(i){let e=i>>>0;return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function yi(i,e,t=0){let n=Math.imul(i|0,374761393)+Math.imul(e|0,668265263)+Math.imul(t|0,2147483647);return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}function my(i,e,t=1024,n=1024,s=0){let r=Math.floor(i),a=Math.floor(e),o=i-r,c=e-a,l=o*o*(3-2*o),h=c*c*(3-2*c),p=m=>(m%t+t)%t,d=m=>(m%n+n)%n,u=yi(p(r),d(a),s),f=yi(p(r+1),d(a),s),y=yi(p(r),d(a+1),s),g=yi(p(r+1),d(a+1),s);return nt(nt(u,f,l),nt(y,g,l),h)}function Pn(i,e,t=4,n=1024,s=1024,r=0){let a=.5,o=1,c=0,l=0;for(let h=0;h<t;h++)c+=a*my(i*o,e*o,n*o,s*o,r+h*17),l+=a,a*=.5,o*=2;return c/l}var vp=()=>window.innerWidth<760||/Android|iPhone|iPad|iPod/i.test(navigator.userAgent);function da(i,e={}){let t=i.attributes.position,n=i.attributes.normal,s=i.attributes.uv,r=e.ox||0,a=e.oy||0,o=e.oz||0;for(let c=0;c<t.count;c++){let l=n.getX(c),h=n.getY(c),p=n.getZ(c),d=t.getX(c)+r,u=t.getY(c)+a,f=t.getZ(c)+o,y,g;Math.abs(p)>.5?(y=p>0?d:-d,g=u):Math.abs(l)>.5?(y=l>0?-f:f,g=u):(e.swap?(y=f,g=d):(y=d,g=f),h<0&&(g=-g)),s.setXY(c,y,g)}s.needsUpdate=!0}var yp=4,J0=1,_p=i=>{yp=Math.min(8,i)},Mp=i=>{J0=i>=2?1:.5},nh=()=>J0;function $0(i,e,t){let n=new ys(i,e,e,Li,mi);return n.wrapS=n.wrapT=Bn,n.magFilter=li,n.minFilter=ir,n.generateMipmaps=!0,n.colorSpace=t?gn:zs,n.anisotropy=yp,n.needsUpdate=!0,n}function yr(i,e,t,n){i=Math.max(128,Math.round(i*J0));let s=i*i,r=new Uint8Array(s*4),a=new Uint8Array(s*4),o=new Uint8Array(s*4),c=new Float32Array(s);for(let u=0;u<i;u++)for(let f=0;f<i;f++){let y=u*i+f,g=n((f+.5)/i,(u+.5)/i);r[y*4]=Ut(g[0],0,1)*255,r[y*4+1]=Ut(g[1],0,1)*255,r[y*4+2]=Ut(g[2],0,1)*255,r[y*4+3]=255,c[y]=g[3],a[y*4]=255,a[y*4+1]=Ut(g[4],0,1)*255,a[y*4+2]=Ut(g[5]||0,0,1)*255,a[y*4+3]=255}let l=e/i;for(let u=0;u<i;u++)for(let f=0;f<i;f++){let y=u*i+f,g=(c[u*i+(f+1)%i]-c[u*i+(f-1+i)%i])*t/(2*l),m=(c[(u+1)%i*i+f]-c[(u-1+i)%i*i+f])*t/(2*l),M=Math.hypot(g,m,1);o[y*4]=(-g/M*.5+.5)*255,o[y*4+1]=(-m/M*.5+.5)*255,o[y*4+2]=(1/M*.5+.5)*255,o[y*4+3]=255}let h=$0(r,i,!0),p=$0(o,i,!1),d=$0(a,i,!1);return[h,p,d].forEach(u=>u.repeat.set(1/e,1/e)),{map:h,normalMap:p,rmMap:d,tile:e}}var Rl=(i,e)=>[i[0]*e,i[1]*e,i[2]*e];function Ep(i=[.2,.22,.25]){return yr(512,.6,.02,(e,t)=>{let n=t*3,s=Math.floor(n),r=n-s,a=Pn(e*5+s*3.1,r*22,3,5,22,s),o,c=1;r>.94?(o=0,c=.45):o=.28+.72*Math.pow(1-r/.94,1.4);let l=(.9+.2*yi(s,3,5))*(.9+.2*a)*c;return[...Rl(i,l),o+(a-.5)*.08,.72+.2*a,0]})}function Sp(i=[.13,.145,.16]){return yr(512,1.2,.025,(e,t)=>{let n=e*4,s=Math.floor(n),r=n-s,a=Math.min(r,1-r)*.3,o=Pn(s*5.1+r*3,t*7,3,20,7,s),c=.4+(o-.5)*.1,l=1;a<.026?c=1:a<.05&&(c=0,l=.5);let h=(.92+.16*yi(s,1,9))*(.9+.2*o)*l;return[...Rl(i,h),c,.7+.2*o,0]})}function bp(i=[.1,.105,.115]){return yr(512,.9,.018,(e,t)=>{let n=e*2%1,s=Math.min(n,1-n)*.45,r=s<.028?Math.pow(1-s/.028,.7):0,a=(Pn(e*3,t*3,3,3,3,4)-.5)*.1,o=.34+.12*Pn(e*8,t*40,2,8,40,2);return[...Rl(i,1+(Pn(e*2,t*6,2,2,6,11)-.5)*.25+r*.35),.1+r+a,o,.8]})}function ih(i=[.66,.43,.26],e=[.4,.24,.13]){return yr(512,.6,.01,(t,n)=>{let s=Pn(t*3,n*1.2,3,3,2,21)*3,r=.5+.5*Math.sin((t*10+s)*Math.PI*2/1),a=Pn(t*18,n*2.4,3,18,2,33),o=Ut(.25+r*.35+a*.5,0,1),c=t*6%1,l=c<.012||c>.988?.45:1;return[nt(e[0],i[0],o)*l,nt(e[1],i[1],o)*l,nt(e[2],i[2],o)*l,.55+a*.3-(l<1?.5:0),.55+.15*a,0]})}function Tp(i=[.56,.55,.53]){return yr(512,1.2,.012,(e,t)=>{let n=t*8,s=Math.floor(n),r=n-s,a=yi(s,7,2)*40,o=Pn(e*4+a,r*10,3,4,10,s),c=yi(Math.floor(e*512),Math.floor(t*512),3)>.985?.6:1,l=r<.04?.7:1,h=(.9+.2*o)*c*l*(.94+.12*yi(s,4,1));return[...Rl(i,h),.5+(o-.5)*.4-(r<.04?.3:0),.92,0]})}function wp(){return yr(512,1,.045,(i,e)=>{let t=i*5,n=e*4,s=Math.floor(t),r=Math.floor(n),a=9,o=9,c=0;for(let g=-1;g<=1;g++)for(let m=-1;m<=1;m++){let M=s+m,S=r+g,v=(M%5+5)%5,_=(S%4+4)%4,w=M+.15+yi(v,_,1)*.7,R=S+.15+yi(v,_,2)*.7,x=Math.hypot((t-w)*1,(n-R)*1.25);x<a?(o=a,a=x,c=v*31+_):x<o&&(o=x)}let l=o-a,h=Et(.04,.3,l),p=yi(c,5,3),d=.4+p*.2,u=yi(c,9,1)*.06,f=.9+.2*Pn(i*12,e*12,3,12,12,c),y=h>.02?1:.35;return[(d+u)*f*y,(d+u*.6)*f*y,(d-.02)*f*y,h*(.7+.3*p),.88,0]})}function Ap(){return yr(512,5,.06,(i,e)=>{let t=Pn(i*5,e*5,4,5,5,71),n=Pn(i*60,e*60,2,60,60,72),s=yi(Math.floor(i*512),Math.floor(e*512),8)>.988,r=.93+.07*t;return[.9*r,.94*r,1*r,t*.8+n*.2,s?.12:.78+n*.15,0]})}function Rp(i=[.13,.135,.145]){return yr(256,3,.01,(e,t)=>{let n=yi(Math.floor(e*256),Math.floor(t*256),12),s=Pn(e*6,t*6,3,6,6,9),r=.8+.5*n*n+.25*s;return[...Rl(i,r),n*.5+s*.3,.88-n*.1,0]})}function Cp(){return yr(512,4,.05,(i,e)=>{let t=Pn(i*70,e*70,2,70,70,3),n=Pn(i*4,e*4,4,4,4,5),s=Pn(i*9,e*9,3,9,9,6),r=.75+.5*t;return[nt(.22,.4,s)*r+n*.05,nt(.3,.4,s)*r*(.85+.3*n),nt(.1,.16,s)*r,t,.92,0]})}function Pp(i,e){let t=new Uint8Array(i*i*4);for(let s=0;s<i;s++)for(let r=0;r<i;r++){let a=(r+.5)/i,o=(s+.5)/i,c=.45+.55*Pn(a*6,o*4,4,1024,1024,41);c=Et(.2,.95,c),c*=.35+.65*Et(0,.18,Math.min(a,1-a,o,1-o)+.04*Pn(a*30,o*30,2,1024,1024,5)),e&&(c*=e(a,o));let l=(s*i+r)*4;t[l]=255,t[l+1]=Ut(c,0,1)*255,t[l+2]=255,t[l+3]=255}let n=new ys(t,i,i,Li,mi);return n.magFilter=n.minFilter=li,n.generateMipmaps=!1,n.needsUpdate=!0,n}function Ip(i="living"){let e=document.createElement("canvas");e.width=160,e.height=160;let t=e.getContext("2d"),n={living:["#6b4426","#d99a55","#f5c27c"],kitchen:["#7a5a3a","#e6b673","#fff0cf"],bed:["#4a3a52","#c78b7a","#f1c6a0"],bath:["#4f6670","#a9c7cf","#eaf6f4"],hall:["#5a4128","#c58c52","#efba78"]}[i]||["#6b4426","#d99a55","#f5c27c"],s=t.createLinearGradient(0,0,0,160);s.addColorStop(0,n[0]),s.addColorStop(.55,n[1]),s.addColorStop(1,n[2]),t.fillStyle=s,t.fillRect(0,0,160,160);let r=i==="kitchen"?80:40+Math.random()*80,a=t.createRadialGradient(r,52,2,r,52,70);if(a.addColorStop(0,"rgba(255,246,214,.95)"),a.addColorStop(1,"rgba(255,220,150,0)"),t.fillStyle=a,t.fillRect(0,0,160,160),t.fillStyle="rgba(30,18,10,.55)",i==="living"&&(t.fillRect(14,108,92,52),t.fillRect(14,88,92,22),t.fillRect(112,70,6,90)),i==="kitchen"){t.fillRect(0,100,160,60),t.fillStyle="rgba(30,18,10,.4)";for(let l=0;l<4;l++)t.fillRect(8+l*38,20,30,40)}i==="bed"&&(t.fillRect(20,96,120,64),t.fillRect(20,70,14,40)),i==="bath"&&(t.fillStyle="rgba(20,40,48,.35)",t.fillRect(0,112,160,48),t.fillRect(104,40,40,36)),i==="hall"&&(t.fillRect(0,128,160,32),t.fillRect(70,30,36,90));let o=t.createLinearGradient(0,0,40,0);o.addColorStop(0,"rgba(40,24,16,.7)"),o.addColorStop(1,"rgba(40,24,16,0)"),t.fillStyle=o,t.fillRect(0,0,40,160),t.save(),t.translate(160,0),t.scale(-1,1),t.fillStyle=o,t.fillRect(0,0,40,160),t.restore();let c=new Cn(e);return c.colorSpace=gn,c}function co(i="rgba(255,190,120,0.9)",e="rgba(255,150,80,0)"){let t=document.createElement("canvas");t.width=t.height=128;let n=t.getContext("2d"),s=n.createRadialGradient(64,64,0,64,64,64);s.addColorStop(0,i),s.addColorStop(.35,i.replace(/[\d.]+\)$/,"0.35)")),s.addColorStop(1,e),n.fillStyle=s,n.fillRect(0,0,128,128);let r=new Cn(t);return r.colorSpace=gn,r}function Dp(){let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d"),t=e.createRadialGradient(64,64,20,64,64,64);t.addColorStop(0,"rgba(244,189,126,0.55)"),t.addColorStop(1,"rgba(244,189,126,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),e.beginPath(),e.arc(64,64,30,0,Math.PI*2),e.fillStyle="#d98a4e",e.fill(),e.lineWidth=3,e.strokeStyle="#f4bd7e",e.stroke(),e.beginPath(),e.moveTo(49,79),e.lineTo(64,49),e.lineTo(79,79),e.lineWidth=6.5,e.strokeStyle="#121311",e.lineJoin="miter",e.stroke(),e.fillStyle="#121311",e.fillRect(60.5,64.5,7,7);let n=new Cn(i);return n.colorSpace=gn,n}function _r(i="rgba(255,255,255,0.6)"){let e=document.createElement("canvas");e.width=e.height=64;let t=e.getContext("2d"),n=t.createRadialGradient(32,32,0,32,32,32);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.25,i),n.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=n,t.fillRect(0,0,64,64);let s=new Cn(e);return s.colorSpace=gn,s}function Lp(){let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d");for(let n=0;n<9;n++){let s=64+(yi(n,1,3)-.5)*40,r=64+(yi(n,2,3)-.5)*40,a=22+yi(n,3,3)*22,o=e.createRadialGradient(s,r,0,s,r,a);o.addColorStop(0,"rgba(255,255,255,0.28)"),o.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=o,e.fillRect(0,0,128,128)}let t=new Cn(i);return t.colorSpace=gn,t}function Np(){let i={lap:Ep([.3,.33,.37]),bb:Sp([.2,.22,.25]),seam:bp([.1,.105,.115]),cedar:ih(),walnut:ih([.46,.29,.17],[.25,.15,.09]),oak:ih([.8,.64,.44],[.56,.4,.25]),form:Tp(),stone:wp(),snow:Ap(),asphalt:Rp(),grass:Cp()},e=(a,o={})=>new Jt({map:a.map,normalMap:a.normalMap,roughnessMap:a.rmMap,metalnessMap:a.rmMap,roughness:1,metalness:1,...o}),t=(a,o=.8,c=0,l={})=>new Jt({color:a,roughness:o,metalness:c,...l}),n=(a,o)=>(a.userData.shell=!0,a.userData.th=o,a),s=(a,o)=>(a.userData.th=o,a),r={lap:n(e(i.lap,{normalScale:new Ye(1,1)}),[.3,.05,.3]),bb:n(e(i.bb,{normalScale:new Ye(1,1)}),[.3,.05,.3]),roof:n(e(i.seam,{normalScale:new Ye(1.2,1.2),envMapIntensity:1.3}),[.4,.12]),cedar:n(e(i.cedar),[.42,0,.25]),walnut:n(e(i.walnut),[.52]),oak:n(e(i.oak),[.55]),form:n(e(i.form),[.33]),stone:n(e(i.stone),[.33]),drywall:n(t(14209475,.95),[.6]),trim:n(t(855568,.42,.55,{envMapIntensity:1.2}),[.32,0,.2]),reveal:n(t(14275785,.85),[.45]),slab:n(t(7828331,1),[.35]),concrete:n(t(7301987,1),[.33]),floor:n(t(10518364,.7),[.55]),door:n(e(i.walnut),[.52]),insul:n(t(13087881,1),[.5]),counter:n(t(2959910,.5,.05),[.55]),snowRoof:n(t(15265527,.85,0,{alphaToCoverage:!0}),[.03]),ice:s(new Ri({color:13625845,roughness:.08,metalness:0,transparent:!0,opacity:.85,clearcoat:1,envMapIntensity:1.6}),[.1]),white:s(t(14605267,.5,.05),[.6]),steel:s(t(10133670,.35,.85),[.55]),pvc:s(t(15131612,.4),[.24]),pipe:s(t(6255750,.5,.4),[.45]),copper:s(t(14256718,.28,.9,{envMapIntensity:1.4}),[.68]),solar:s(new Ri({color:726832,roughness:.16,metalness:.7,clearcoat:1,clearcoatRoughness:.06,envMapIntensity:1.5}),[.17]),solarFrame:s(t(11186616,.4,.9),[.3]),neighbor:s(e(i.lap,{color:9080210}),[.26,.04,.24]),neighborRoof:s(e(i.seam,{color:6711920}),[.4,.12]),asphalt:s(e(i.asphalt),[.3]),pavement:s(t(9144706,.95),[.3]),sconce:s(new Jt({color:1709070,emissive:16756833,emissiveIntensity:3,roughness:.4}),[.9]),lampHead:s(new Jt({color:2236962,emissive:16761466,emissiveIntensity:4,roughness:.4}),[.95]),pole:s(t(1776928,.5,.7),[.3]),spruce:s(new Jt({vertexColors:!0,roughness:.92,metalness:0}),[.13]),trunk:s(t(2760471,1),[.18]),shrub:s(new Jt({vertexColors:!0,roughness:1}),[.14]),fabric:s(t(6970708,.95),[.5]),fabric2:s(t(4016726,.95),[.5]),leather:s(t(8014634,.55),[.5]),ceramic:s(t(15921129,.18,0),[.45]),mirror:s(t(12570840,.05,.9),[.4]),black:s(t(1381653,.5,.3),[.4]),warmLight:s(new Jt({color:2236440,emissive:16767392,emissiveIntensity:5,roughness:.6}),[1])};return["lap","bb","roof","drywall","form","stone","trim","cedar","door","walnut","reveal","snowRoof"].forEach(a=>{r[a].userData.wall=!0}),Object.values(r).forEach(a=>{a.userData.th===void 0&&(a.userData.th=[.3])}),{M:r,T:i}}function K0(i){let e=new Jt({color:395533,roughness:.05,metalness:.25,emissive:16777215,emissiveMap:i,emissiveIntensity:0,envMapIntensity:1.6});return e.userData.shell=!0,e.userData.pane=!0,e.userData.wall=!0,e.userData.th=[.86],e}var sh=[[-90,"#04060d","#0c1124"],[-20,"#05070f","#10162b"],[-14,"#080d20","#1a2140"],[-9,"#0f1838","#33406a"],[-5,"#1a2650","#7a6f94"],[-2,"#27345e","#d98d62"],[1,"#35508a","#eba66f"],[5,"#43689f","#e8bf8f"],[12,"#4a78b0","#dccfb4"],[25,"#4a80ba","#c7dcec"],[50,"#3f78b8","#b4d2e8"],[90,"#3a72b0","#accce6"]],gy=`varying vec3 vDir;
void main(){ vDir = normalize(position); vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_Position = p.xyww; }`,xy=`precision highp float;
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
}`;function Up(i,e){let t={uTop:{value:new ct},uHor:{value:new ct},uLow:{value:new ct},uSunDir:{value:new F(0,1,0)},uSunCol:{value:new ct(1,.8,.6)},uMoonDir:{value:new F(.3,.55,-.78).normalize()},uSunI:{value:0},uMoonI:{value:0},uTime:{value:0},uCloud:{value:.4},uAurora:{value:0},uThermal:{value:0},uSnowLine:{value:0}},n=new xn({uniforms:t,vertexShader:gy,fragmentShader:xy,side:Ci,depthWrite:!1,depthTest:!1}),s=new Ue(new Hn(500,48,28),n);s.renderOrder=-10,s.frustumCulled=!1,s.userData.noThermal=!0,s.userData.noAO=!0,e.add(s);let r=wn(7),a=1500,o=new Float32Array(a*3);for(let _=0;_<a;_++){let w=r()*Math.PI*2,R=Math.acos(1-r()*1),x=480;o[_*3]=Math.sin(R)*Math.cos(w)*x,o[_*3+1]=Math.cos(R)*x,o[_*3+2]=Math.sin(R)*Math.sin(w)*x}let c=new Vt;c.setAttribute("position",new Nt(o,3));let l=new pi({color:14674175,size:1.7,sizeAttenuation:!1,transparent:!0,opacity:0,fog:!1,depthWrite:!1}),h=new Ai(c,l);h.frustumCulled=!1,h.renderOrder=-9,h.userData.noAO=!0,e.add(h);function p(_,w,R){let x=document.createElement("canvas");x.width=4096,x.height=256;let A=x.getContext("2d"),P=wn(_);A.filter="blur(1.4px)";let B=Array.from({length:8},()=>P()*6.28);A.clearRect(0,0,2048,256),A.beginPath(),A.moveTo(0,256);let T=[3,7,15,31,63],U=[.5,.28,.15,.08*R,.045*R];for(let j=0;j<=4096;j+=2){let q=j/4096*Math.PI*2,Z=0;for(let W=0;W<5;W++)Z+=U[W]*Math.pow(1-Math.abs(Math.sin(q*T[W]+B[W])),1.6);A.lineTo(j,256-Ut(Z/1.06,0,1)*w)}A.lineTo(4096,256),A.closePath();let I=A.createLinearGradient(0,256-w,0,256);I.addColorStop(0,"rgba(255,255,255,1)"),I.addColorStop(.3,"rgba(232,236,248,1)"),I.addColorStop(.62,"rgba(120,132,160,1)"),I.addColorStop(1,"rgba(66,74,96,0)"),A.fillStyle=I,A.fill();let k=new Cn(x);return k.colorSpace=gn,k.wrapS=Bn,k.anisotropy=4,k}function d(_){let w=document.createElement("canvas");w.width=2048,w.height=128;let R=w.getContext("2d"),x=wn(_);R.clearRect(0,0,2048,128),R.fillStyle="rgba(255,255,255,1)";for(let P=0;P<2048;P+=3){let B=34+x()*40+Math.sin(P*.01)*10,T=6+x()*7;R.beginPath(),R.moveTo(P-T,128),R.lineTo(P,128-B),R.lineTo(P+T,128),R.fill()}R.fillRect(0,100,2048,28);let A=new Cn(w);return A.colorSpace=gn,A.wrapS=Bn,A}let u=[{tex:p(3,220,1),R:450,h:190,y:40,k:.8,mix:.86},{tex:p(11,170,.8),R:360,h:120,y:16,k:.55,mix:.68},{tex:d(5),R:300,h:34,y:8,k:.22,mix:.2}].map(_=>{let w=new En({map:_.tex,transparent:!0,side:Ci,depthWrite:!1,fog:!1,color:4478327}),R=new Ue(new en(_.R,_.R,_.h,96,1,!0),w);return R.position.y=_.y,R.renderOrder=-8,R.frustumCulled=!1,R.userData.noThermal=!0,R.userData.noAO=!0,e.add(R),{..._,mat:w,mesh:R}}),f=new oo(i),y=new na,g=new Ue(new Hn(50,32,16),n.clone());g.material.uniforms=t,g.material.depthTest=!0,y.add(g);let m=null,M="",S=new ct,v=new ct;return{dome:s,mat:n,U:t,stars:h,horizon:new ct,zenith:new ct,update(_,w){let R=Ut(_.elev,-90,90),x=0;for(;x<sh.length-2&&sh[x+1][0]<=R;)x++;let[A,P,B]=sh[x],[T,U,I]=sh[x+1],k=Et(0,1,(R-A)/(T-A));t.uTop.value.copy(S.set(P)).lerp(v.set(U),k),t.uHor.value.copy(S.set(B)).lerp(v.set(I),k),_.seasonTint&&(t.uTop.value.lerp(_.seasonTint.top,_.seasonTint.k),t.uHor.value.lerp(_.seasonTint.hor,_.seasonTint.k)),t.uLow.value.copy(t.uHor.value).multiplyScalar(.55+.25*_.daylight).lerp(S.set(_.snowy?7174806:2764834),.18+.2*_.daylight),t.uLow.value.multiplyScalar(1-.82*(_.voidK||0)),t.uSunDir.value.copy(_.sunDir);let j=1-Et(0,.5,_.sunDir.y);t.uSunCol.value.setRGB(1,nt(.93,.56,j),nt(.84,.32,j)),t.uSunI.value=Et(-.14,.04,_.sunDir.y)*nt(1,1.4,j),t.uMoonI.value=(1-_.daylight)*.9,t.uTime.value=w,t.uCloud.value=_.cloud??.4,t.uAurora.value=_.aurora||0,t.uThermal.value=_.thermal||0,this.horizon.copy(t.uHor.value),this.zenith.copy(t.uTop.value),l.opacity=Ut((1-_.daylight*1.2)*.95,0,1)*(1-(_.thermal||0)),u.forEach(q=>{q.mat.color.copy(t.uHor.value).lerp(t.uTop.value,.12).multiplyScalar(q.k*(.55+.7*_.daylight)).lerp(S.set(16777215),0).multiplyScalar(1),q.mat.color.lerp(t.uHor.value,1-q.mix),q.mat.color.lerp(v.set(2101306),(_.thermal||0)*.9)})},follow(_){s.position.copy(_),h.position.copy(_),u.forEach(w=>{w.mesh.position.x=_.x,w.mesh.position.z=_.z})},refreshEnv(_){let w=[t.uTop.value.getHexString(),t.uHor.value.getHexString(),t.uSunI.value.toFixed(2),t.uAurora.value.toFixed(1),t.uThermal.value.toFixed(1),t.uSunDir.value.x.toFixed(2),t.uSunDir.value.y.toFixed(2)].join("|");if(!_&&w===M)return;M=w;let R=m;m=f.fromScene(y,.015,.1,200,{size:128}),e.environment=m.texture,R&&R.dispose()}}}var or={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Pi=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},vy=new Hr(-1,1,1,-1,0,1),Q0=class extends Vt{constructor(){super(),this.setAttribute("position",new Ot([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ot([0,2,0,0,2,0],2))}},yy=new Q0,bs=class{constructor(e){this._mesh=new Ue(yy,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,vy)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var uo=class extends Pi{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof xn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Zi.clone(e.uniforms),this.material=new xn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new bs(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Cl=class extends Pi{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},rh=class extends Pi{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var ah=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Ye);this._width=n.width,this._height=n.height,t=new Un(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Jn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new uo(or),this.copyPass.material.blending=si,this.timer=new al}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Cl!==void 0&&(a instanceof Cl?n=!0:a instanceof rh&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Ye);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var oh=class extends Pi{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new ct}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var Fp={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ct(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var ho=class i extends Pi{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Ye(e.x,e.y):new Ye(256,256),this.clearColor=new ct(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Un(r,a,{type:Jn,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let p=new Un(r,a,{type:Jn,depthBuffer:!1});p.texture.name="UnrealBloomPass.h"+h,p.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(p);let d=new Un(r,a,{type:Jn,depthBuffer:!1});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}let o=Fp;this.highPassUniforms=Zi.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new xn({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let c=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Ye(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Zi.clone(or.uniforms),this.blendMaterial=new xn({uniforms:this.copyUniforms,vertexShader:or.vertexShader,fragmentShader:or.fragmentShader,premultipliedAlpha:!0,blending:Sn,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ct,this._oldClearAlpha=1,this._basic=new En,this._fsQuad=new bs(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Ye(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let s=[],r=[];for(let a=1;a<e;a+=2){let o=t[a],c=a+1<e?t[a+1]:0,l=o+c;s.push((a*o+(a+1)*c)/l),r.push(l)}return new xn({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new Ye(.5,.5)},direction:{value:new Ye(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new xn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};ho.BlurDirectionX=new Ye(1,0);ho.BlurDirectionY=new Ye(0,1);var Pl={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var lh=class extends Pi{constructor(){super(),this.isOutputPass=!0,this.uniforms=Zi.clone(Pl.uniforms),this.material=new Qa({name:Pl.name,uniforms:this.uniforms,vertexShader:Pl.vertexShader,fragmentShader:Pl.fragmentShader}),this._fsQuad=new bs(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},mn.getTransfer(this._outputColorSpace)===yn&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ul?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===hl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===dl?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===kr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===pl?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ml?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===fl&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Il={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Ye},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new St},cameraProjectionMatrixInverse:{value:new St},cameraWorldMatrix:{value:new St},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new F(-1,-1,-1)},sceneBoxMax:{value:new F(1,1,1)}},vertexShader:`

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
		}`},Dl={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},ch={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function Op(i=5){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=_y(e),n=t.length,s=new Uint8Array(n*4);for(let a=0;a<n;++a){let o=t[a],c=2*Math.PI*o/n,l=new F(Math.cos(c),Math.sin(c),0).normalize();s[a*4]=(l.x*.5+.5)*255,s[a*4+1]=(l.y*.5+.5)*255,s[a*4+2]=127,s[a*4+3]=255}let r=new ys(s,e,e);return r.wrapS=Bn,r.wrapT=Bn,r.needsUpdate=!0,r}function _y(i){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let a=1;a<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),n[s*e+r]!==0){r-=2,s++;continue}else n[s*e+r]=a++;r++,s--}return n}var Ll={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:j0(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Ye},cameraProjectionMatrixInverse:{value:new St},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function j0(i,e,t){let n=My(i,e,t),s="vec3[SAMPLES](";for(let r=0;r<i;r++){let a=n[r];s+=`vec3(${a.x}, ${a.y}, ${a.z})${r<i-1?",":")"}`}return s}function My(i,e,t){let n=[];for(let s=0;s<i;s++){let r=2*Math.PI*e*s/i,a=Math.pow(s/(i-1),t);n.push(new F(Math.cos(r),Math.sin(r),a))}return n}var uh=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,s,r,a=.5*(Math.sqrt(3)-1),o=(e+t)*a,c=Math.floor(e+o),l=Math.floor(t+o),h=(3-Math.sqrt(3))/6,p=(c+l)*h,d=c-p,u=l-p,f=e-d,y=t-u,g,m;f>y?(g=1,m=0):(g=0,m=1);let M=f-g+h,S=y-m+h,v=f-1+2*h,_=y-1+2*h,w=c&255,R=l&255,x=this.perm[w+this.perm[R]]%12,A=this.perm[w+g+this.perm[R+m]]%12,P=this.perm[w+1+this.perm[R+1]]%12,B=.5-f*f-y*y;B<0?n=0:(B*=B,n=B*B*this._dot(this.grad3[x],f,y));let T=.5-M*M-S*S;T<0?s=0:(T*=T,s=T*T*this._dot(this.grad3[A],M,S));let U=.5-v*v-_*_;return U<0?r=0:(U*=U,r=U*U*this._dot(this.grad3[P],v,_)),70*(n+s+r)}noise3d(e,t,n){let s,r,a,o,l=(e+t+n)*.3333333333333333,h=Math.floor(e+l),p=Math.floor(t+l),d=Math.floor(n+l),u=1/6,f=(h+p+d)*u,y=h-f,g=p-f,m=d-f,M=e-y,S=t-g,v=n-m,_,w,R,x,A,P;M>=S?S>=v?(_=1,w=0,R=0,x=1,A=1,P=0):M>=v?(_=1,w=0,R=0,x=1,A=0,P=1):(_=0,w=0,R=1,x=1,A=0,P=1):S<v?(_=0,w=0,R=1,x=0,A=1,P=1):M<v?(_=0,w=1,R=0,x=0,A=1,P=1):(_=0,w=1,R=0,x=1,A=1,P=0);let B=M-_+u,T=S-w+u,U=v-R+u,I=M-x+2*u,k=S-A+2*u,j=v-P+2*u,q=M-1+3*u,Z=S-1+3*u,W=v-1+3*u,X=h&255,K=p&255,ve=d&255,Ne=this.perm[X+this.perm[K+this.perm[ve]]]%12,He=this.perm[X+_+this.perm[K+w+this.perm[ve+R]]]%12,Qe=this.perm[X+x+this.perm[K+A+this.perm[ve+P]]]%12,dt=this.perm[X+1+this.perm[K+1+this.perm[ve+1]]]%12,re=.6-M*M-S*S-v*v;re<0?s=0:(re*=re,s=re*re*this._dot3(this.grad3[Ne],M,S,v));let ye=.6-B*B-T*T-U*U;ye<0?r=0:(ye*=ye,r=ye*ye*this._dot3(this.grad3[He],B,T,U));let Le=.6-I*I-k*k-j*j;Le<0?a=0:(Le*=Le,a=Le*Le*this._dot3(this.grad3[Qe],I,k,j));let Se=.6-q*q-Z*Z-W*W;return Se<0?o=0:(Se*=Se,o=Se*Se*this._dot3(this.grad3[dt],q,Z,W)),32*(s+r+a+o)}noise4d(e,t,n,s){let r=this.grad4,a=this.simplex,o=this.perm,c=(Math.sqrt(5)-1)/4,l=(5-Math.sqrt(5))/20,h,p,d,u,f,y=(e+t+n+s)*c,g=Math.floor(e+y),m=Math.floor(t+y),M=Math.floor(n+y),S=Math.floor(s+y),v=(g+m+M+S)*l,_=g-v,w=m-v,R=M-v,x=S-v,A=e-_,P=t-w,B=n-R,T=s-x,U=A>P?32:0,I=A>B?16:0,k=P>B?8:0,j=A>T?4:0,q=P>T?2:0,Z=B>T?1:0,W=U+I+k+j+q+Z,X=a[W][0]>=3?1:0,K=a[W][1]>=3?1:0,ve=a[W][2]>=3?1:0,Ne=a[W][3]>=3?1:0,He=a[W][0]>=2?1:0,Qe=a[W][1]>=2?1:0,dt=a[W][2]>=2?1:0,re=a[W][3]>=2?1:0,ye=a[W][0]>=1?1:0,Le=a[W][1]>=1?1:0,Se=a[W][2]>=1?1:0,ke=a[W][3]>=1?1:0,ee=A-X+l,We=P-K+l,le=B-ve+l,pe=T-Ne+l,te=A-He+2*l,he=P-Qe+2*l,xe=B-dt+2*l,Xe=T-re+2*l,Ve=A-ye+3*l,st=P-Le+3*l,it=B-Se+3*l,Q=T-ke+3*l,_t=A-1+4*l,vt=P-1+4*l,H=B-1+4*l,E=T-1+4*l,ae=g&255,ue=m&255,_e=M&255,Ze=S&255,Ke=o[ae+o[ue+o[_e+o[Ze]]]]%32,Ie=o[ae+X+o[ue+K+o[_e+ve+o[Ze+Ne]]]]%32,be=o[ae+He+o[ue+Qe+o[_e+dt+o[Ze+re]]]]%32,et=o[ae+ye+o[ue+Le+o[_e+Se+o[Ze+ke]]]]%32,gt=o[ae+1+o[ue+1+o[_e+1+o[Ze+1]]]]%32,N=.6-A*A-P*P-B*B-T*T;N<0?h=0:(N*=N,h=N*N*this._dot4(r[Ke],A,P,B,T));let ie=.6-ee*ee-We*We-le*le-pe*pe;ie<0?p=0:(ie*=ie,p=ie*ie*this._dot4(r[Ie],ee,We,le,pe));let ge=.6-te*te-he*he-xe*xe-Xe*Xe;ge<0?d=0:(ge*=ge,d=ge*ge*this._dot4(r[be],te,he,xe,Xe));let Te=.6-Ve*Ve-st*st-it*it-Q*Q;Te<0?u=0:(Te*=Te,u=Te*Te*this._dot4(r[et],Ve,st,it,Q));let Ge=.6-_t*_t-vt*vt-H*H-E*E;return Ge<0?f=0:(Ge*=Ge,f=Ge*Ge*this._dot4(r[gt],_t,vt,H,E)),27*(h+p+d+u+f)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}_dot4(e,t,n,s,r){return e[0]*t+e[1]*n+e[2]*s+e[3]*r}};var Nl=class i extends Pi{constructor(e,t,n=512,s=512,r,a,o){super(),this.width=n,this.height=s,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Op(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new Un(this.width,this.height,{type:Jn,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new xn({defines:Object.assign({},Il.defines),uniforms:Zi.clone(Il.uniforms),vertexShader:Il.vertexShader,fragmentShader:Il.fragmentShader,blending:si,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new tl,this.normalMaterial.blending=si,this.pdMaterial=new xn({defines:Object.assign({},Ll.defines),uniforms:Zi.clone(Ll.uniforms),vertexShader:Ll.vertexShader,fragmentShader:Ll.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new xn({defines:Object.assign({},Dl.defines),uniforms:Zi.clone(Dl.uniforms),vertexShader:Dl.vertexShader,fragmentShader:Dl.fragmentShader,blending:si}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new xn({uniforms:Zi.clone(or.uniforms),vertexShader:or.vertexShader,fragmentShader:or.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:cl,blendDst:la,blendEquation:Es,blendSrcAlpha:ll,blendDstAlpha:la,blendEquationAlpha:Es}),this.blendMaterial=new xn({uniforms:Zi.clone(ch.uniforms),vertexShader:ch.vertexShader,fragmentShader:ch.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:ou,blendSrc:cl,blendDst:la,blendEquation:Es,blendSrcAlpha:ll,blendDstAlpha:la,blendEquationAlpha:Es}),this._fsQuad=new bs(null),this._originalClearColor=new ct,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new _s,this.depthTexture.format=sr,this.depthTexture.type=Wr,this.normalRenderTarget=new Un(this.width,this.height,{minFilter:ii,magFilter:ii,type:Jn,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=j0(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=si,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=si,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=si,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=si,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=si,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,n,s,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_renderOverride(e,t,n,s,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,t.push(n))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new uh,n=e*e*4,s=new Uint8Array(n);for(let a=0;a<e;a++)for(let o=0;o<e;o++){let c=a,l=o;s[(a*e+o)*4]=(t.noise(c,l)*.5+.5)*255,s[(a*e+o)*4+1]=(t.noise(c+e,l)*.5+.5)*255,s[(a*e+o)*4+2]=(t.noise(c,l+e)*.5+.5)*255,s[(a*e+o)*4+3]=(t.noise(c+e,l+e)*.5+.5)*255}let r=new ys(s,e,e,Li,mi);return r.wrapS=Bn,r.wrapT=Bn,r.needsUpdate=!0,r}};Nl.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var ed=class extends Pi{constructor(e){super(),this.needsSwap=!1,this.holder=e}render(e,t,n){this.holder.value=n.depthTexture}},Bp="varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",Hp=`uniform sampler2D tDiffuse; uniform sampler2D tDepth; uniform vec2 uPx; uniform float uNear, uFar, uFocus, uAperture, uMaxBlur; varying vec2 vUv;
    float viewDist(vec2 uv){ float d = texture2D(tDepth, uv).x; return (uNear * uFar) / (uFar - (uFar - uNear) * d); }
    float cocAt(float dist){ return clamp(uAperture * abs(dist - uFocus) / max(dist, 0.001), 0.0, 1.0) * uMaxBlur; }`,Ey=`${Hp}
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
    }`,Sy=`${Hp}
    uniform sampler2D tBlur; uniform vec2 uHalfPx;
    void main(){
      vec4 sharp = texture2D(tDiffuse, vUv);
      vec2 o = uHalfPx * 0.5;
      vec4 blur = (texture2D(tBlur, vUv + o) + texture2D(tBlur, vUv - o) + texture2D(tBlur, vUv + vec2(o.x, -o.y)) + texture2D(tBlur, vUv + vec2(-o.x, o.y))) * 0.25;
      float w = max(smoothstep(0.75, 2.5, cocAt(viewDist(vUv))), smoothstep(0.0, 0.2, blur.a));
      gl_FragColor = vec4(mix(sharp.rgb, blur.rgb, w), sharp.a);
    }`,td=class extends Pi{constructor(e,t){super(),this.depthHolder=e,this.shared={tDepth:{value:null},uPx:{value:new Ye(1/1440,1/900)},uNear:{value:.3},uFar:{value:1400},uFocus:{value:30},uAperture:{value:0},uMaxBlur:{value:12}},this.half=new Un(720,450,{type:Jn,depthBuffer:!1}),this.gather=new xn({name:"HauseDofGather",defines:{TAPS:t},uniforms:{tDiffuse:{value:null},...this.shared},vertexShader:Bp,fragmentShader:Ey,depthTest:!1,depthWrite:!1}),this.composite=new xn({name:"HauseDofComposite",uniforms:{tDiffuse:{value:null},tBlur:{value:this.half.texture},uHalfPx:{value:new Ye(1/720,1/450)},...this.shared},vertexShader:Bp,fragmentShader:Sy,depthTest:!1,depthWrite:!1}),this.quad=new bs(this.gather)}setSize(e,t){let n=Math.max(1,Math.round(e/2)),s=Math.max(1,Math.round(t/2));this.half.setSize(n,s),this.shared.uPx.value.set(1/e,1/t),this.composite.uniforms.uHalfPx.value.set(1/n,1/s),this.shared.uMaxBlur.value=Math.max(6,t*.014)}render(e,t,n){this.shared.tDepth.value=this.depthHolder.value,this.gather.uniforms.tDiffuse.value=n.texture,this.quad.material=this.gather,e.setRenderTarget(this.half),this.quad.render(e),this.composite.uniforms.tDiffuse.value=n.texture,this.quad.material=this.composite,e.setRenderTarget(this.renderToScreen?null:t),this.quad.render(e)}dispose(){this.half.dispose(),this.gather.dispose(),this.composite.dispose(),this.quad.dispose()}},by={name:"HauseGrade",uniforms:{tDiffuse:{value:null},uTime:{value:0},uVig:{value:.32},uGrain:{value:.03},uCA:{value:.0011},uSat:{value:1.05},uCon:{value:1.05},uThermal:{value:0},uAspect:{value:1.6}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float uTime, uVig, uGrain, uCA, uSat, uCon, uThermal, uAspect; varying vec2 vUv;
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
    }`};function zp(i,e,t,n,s,r){let a=n>=2?4:n===1?2:0,o=new Un(s,r,{type:Jn,samples:a,depthTexture:new _s(s,r)}),c=new ah(i,o);c.setPixelRatio(1),c.addPass(new oh(e,t));let l={value:null};c.addPass(new ed(l));let h=null,p=null;n>=2&&(h=new Nl(e,t,s,r,void 0,{radius:.9,distanceExponent:1.4,thickness:1.2,scale:1,samples:12,distanceFallOff:1,screenSpaceRadius:!1},{lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,radiusExponent:1,rings:2,samples:12}),h.blendIntensity=.9,h._overrideVisibility=function(){let f=this._visibilityCache;this.scene.traverse(y=>{(y.isPoints||y.isLine||y.isLine2||y.isSprite||y.userData&&y.userData.noAO)&&y.visible&&(y.visible=!1,f.push(y))})},c.addPass(h));let d=null;n>=1&&(d=new td(l,n>=2?48:20),d.enabled=!1,c.addPass(d),d.setSize(c.readBuffer.width,c.readBuffer.height)),n>=1&&(p=new ho(new Ye(s,r),.55,.62,1),c.addPass(p)),c.addPass(new lh);let u=new uo(by);return n===0&&(u.uniforms.uCA.value=0,u.uniforms.uGrain.value=.015),c.addPass(u),{composer:c,bloom:p,gtao:h,dof:d,grade:u,tier:n,setDof(f,y,g,m){if(!d)return;d.enabled=f>.01;let M=d.shared;M.uAperture.value=f,M.uFocus.value=y,M.uNear.value=g,M.uFar.value=m},setSize(f,y){c.setSize(f,y),u.uniforms.uAspect.value=f/y},render(f,y){u.uniforms.uTime.value=y%10,c.render(f)},dispose(){c.dispose(),d&&d.dispose(),o.dispose()}}}var Ul=new F;function Ts(i,e,t,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),c=Math.PI/4;Ul.copy(e),Ul[n]=0,Ul.normalize();let l=.5*a/(a+o),h=1-Ul.angleTo(i)/c;return Math.sign(Ul[t])===1?h*l:o/(a+o)+l+l*(1-h)}var ws=class i extends dn{constructor(e=1,t=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let c=new F,l=new F,h=new F(e,t,n).divideScalar(2).subScalar(r),p=this.attributes.position.array,d=this.attributes.normal.array,u=this.attributes.uv.array,f=p.length/6,y=new F,g=.5/a;for(let m=0,M=0;m<p.length;m+=3,M+=2)switch(c.fromArray(p,m),l.copy(c),l.x-=Math.sign(l.x)*g,l.y-=Math.sign(l.y)*g,l.z-=Math.sign(l.z)*g,l.normalize(),p[m+0]=h.x*Math.sign(c.x)+l.x*r,p[m+1]=h.y*Math.sign(c.y)+l.y*r,p[m+2]=h.z*Math.sign(c.z)+l.z*r,d[m+0]=l.x,d[m+1]=l.y,d[m+2]=l.z,Math.floor(m/f)){case 0:y.set(1,0,0),u[M+0]=Ts(y,l,"z","y",r,n),u[M+1]=1-Ts(y,l,"y","z",r,t);break;case 1:y.set(-1,0,0),u[M+0]=1-Ts(y,l,"z","y",r,n),u[M+1]=1-Ts(y,l,"y","z",r,t);break;case 2:y.set(0,1,0),u[M+0]=1-Ts(y,l,"x","z",r,e),u[M+1]=Ts(y,l,"z","x",r,n);break;case 3:y.set(0,-1,0),u[M+0]=1-Ts(y,l,"x","z",r,e),u[M+1]=1-Ts(y,l,"z","x",r,n);break;case 4:y.set(0,0,1),u[M+0]=1-Ts(y,l,"x","y",r,e),u[M+1]=1-Ts(y,l,"y","x",r,t);break;case 5:y.set(0,0,-1),u[M+0]=Ts(y,l,"x","y",r,e),u[M+1]=1-Ts(y,l,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};var Fn=10,Qt=8,As=2.9,Fl=[{key:"roof",dy:9.2},{key:"upper",dy:6.6},{key:"main",dy:4.1},{key:"basement",dy:2},{key:"below",dy:0}],Kt=(i,e,t)=>new F(i,e,t);function Gp({M:i,T:e,markTex:t,glowTex:n}){let s=new lt,r={};Fl.forEach(T=>{let U=new lt;U.userData.level=T.key,r[T.key]=U,s.add(U)});let a={},o=[],c=new Lr({color:11126756,transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1,fog:!1}),l={icicles:null,snowL:null,snowR:null,chimneyTop:new $n,fans:[]},h=da;function p(T,U,I,k,j=0,q=0,Z=0,W,X={}){let K=new dn(T,U,I);h(K,X.uv||{});let ve=new Ue(K,k);if(ve.position.set(j,q,Z),ve.castShadow=X.cast!==!1,ve.receiveShadow=X.receive!==!1,X.edges){let Ne=new tr(new Za(K,30),c);Ne.raycast=()=>{},ve.add(Ne)}return W&&W.add(ve),ve}function d(T,U,I,k,j,q=0,Z=0,W=0,X,K={}){let ve=new ws(T,U,I,K.seg||2,k),Ne=new Ue(ve,j);return Ne.position.set(q,Z,W),Ne.castShadow=K.cast!==!1,Ne.receiveShadow=!0,X&&X.add(Ne),Ne}function u(T,U,I,k,j,q,Z,W=18){let X=new Ue(new en(T,T,U,W),I);return X.position.set(k,j,q),X.castShadow=!0,X.receiveShadow=!0,Z&&Z.add(X),X}function f(T,U,I,k){let j=a[T]||(a[T]={meshes:[],mats:[],marks:[]}),q=Z=>{let W=Z.clone();return W.userData.baseEmissive=W.emissive.clone(),W};if(U.forEach(Z=>{Z.material=Array.isArray(Z.material)?Z.material.map(q):q(Z.material),Z.userData.sys=T,j.meshes.push(Z),j.mats.push(...[].concat(Z.material))}),I){let Z=new wi(new fi({map:t,transparent:!0,depthTest:!1,depthWrite:!1,opacity:0}));Z.position.copy(I),Z.scale.set(.95,.95,1),Z.renderOrder=10,Z.userData.sys=T,Z.userData.noAO=!0,r[k].add(Z),j.marks.push(Z)}}let y=0,g={},m=T=>g[T]||(g[T]=Ip(T));function M(T,U,I,k,j,q){let Z=U.x1-U.x0,W=U.y1-U.y0,X=(U.x0+U.x1)/2,K=(U.y0+U.y1)/2,ve=new lt;ve.position.set(X,K,0),T.add(ve);let Ne=K0(m(k||"living")),He=new Ue(new $t(Z,W),Ne);He.position.z=.03,He.receiveShadow=!1,ve.add(He);let Qe=.075,dt=.1;d(Z,Qe,dt,.012,i.trim,0,W/2-Qe/2,.07,ve,{seg:1}),d(Z,Qe,dt,.012,i.trim,0,-W/2+Qe/2,.07,ve,{seg:1}),d(Qe,W,dt,.012,i.trim,-Z/2+Qe/2,0,.07,ve,{seg:1}),d(Qe,W,dt,.012,i.trim,Z/2-Qe/2,0,.07,ve,{seg:1});let re=Z>1.35?Math.round(Z/.95):1;for(let Le=1;Le<re;Le++)d(.035,W-.1,.07,.008,i.trim,-Z/2+Z/re*Le,0,.065,ve,{seg:1,cast:!1});W>1.2&&d(Z-.1,.035,.07,.008,i.trim,0,W*.12,.065,ve,{seg:1,cast:!1}),d(Z+.22,.055,.26,.012,i.cedar,0,-W/2-.03,.14,ve,{seg:1}),d(Z+.18,.09,.12,.012,i.trim,0,W/2+.07,.1,ve,{seg:1});let ye=new wi(new fi({map:n,transparent:!0,depthWrite:!1,blending:Sn,opacity:0}));return ye.position.set(0,0,.4),ye.scale.set(Z*2.6,W*2.6,1),ye.userData.noAO=!0,ve.add(ye),o.push({mat:Ne,halo:ye,order:j!=null?j+y*.001:y,always:!!q,w:Z,h:W}),y++,ve}function S(T,U,I){let k=U.x1-U.x0,j=U.y1-U.y0,q=(U.x0+U.x1)/2,Z=(U.y0+U.y1)/2,W=new lt;W.position.set(q,Z,0),T.add(W),p(k,j,.07,i.door,0,0,0,W,{uv:{ox:q,oy:Z}});let X=new Ue(new $t(.22,j*.72),K0(m("hall")));X.position.set(-k/2+.22,.05,.04),W.add(X),o.push({mat:X.material,halo:null,order:.5,always:!1,w:.22,h:j*.72}),d(.03,.8,.05,.012,i.trim,k/2-.14,-.05,.08,W,{seg:1}),d(k+.14,.09,.12,.012,i.trim,0,j/2+.07,.07,W,{seg:1}),d(.07,j,.1,.01,i.trim,-k/2-.035,0,.06,W,{seg:1}),d(.07,j,.1,.01,i.trim,k/2+.035,0,.06,W,{seg:1})}function v(T,U,I,k,j,q,Z,W,X={}){let K=new lt,ve=new Set([-T/2,T/2]),Ne=new Set([0,U]);k.forEach(re=>{ve.add(re.x0),ve.add(re.x1),Ne.add(re.y0),Ne.add(re.y1)});let He=[...ve].sort((re,ye)=>re-ye),Qe=[...Ne].sort((re,ye)=>re-ye),dt=[i.trim,i.trim,i.trim,i.trim,j,i.drywall];for(let re=0;re<He.length-1;re++)for(let ye=0;ye<Qe.length-1;ye++){let Le=(He[re]+He[re+1])/2,Se=(Qe[ye]+Qe[ye+1])/2;k.some(ke=>Le>ke.x0&&Le<ke.x1&&Se>ke.y0&&Se<ke.y1)||p(He[re+1]-He[re],Qe[ye+1]-Qe[ye],I,dt,Le,Se,0,K,{edges:!0,uv:{ox:Le,oy:Se+(X.v0||0)}})}return k.forEach(re=>{re.door?S(K,re,I):M(K,re,I,re.room,X.order,re.always)}),K.position.copy(Z),K.rotation.y=W||0,q.add(K),K}(()=>{let T=r.below,U=[],I=i.form;U.push(p(Fn+.5,3.4,.25,I,0,-1.4,Qt/2+.12,T,{edges:!0,uv:{ox:0,oy:-1.4}})),U.push(p(Fn+.5,3.4,.25,I,0,-1.4,-Qt/2-.12,T,{edges:!0,uv:{ox:0,oy:-1.4}})),U.push(p(.25,3.4,Qt,I,Fn/2+.12,-1.4,0,T,{edges:!0,uv:{oy:-1.4}})),U.push(p(.25,3.4,Qt,I,-Fn/2-.12,-1.4,0,T,{edges:!0,uv:{oy:-1.4}})),p(Fn+1.2,.3,.8,i.concrete,0,-3.1,Qt/2+.1,T),p(Fn+1.2,.3,.8,i.concrete,0,-3.1,-Qt/2-.1,T),p(.8,.3,Qt,i.concrete,Fn/2+.1,-3.1,0,T),p(.8,.3,Qt,i.concrete,-Fn/2-.1,-3.1,0,T);let k=p(Fn,.16,Qt,i.slab,0,-2.88,0,T,{edges:!0});f("foundation",[...U,k],Kt(Fn/2+.6,-1.4,1.6),"below");let j=u(.14,9,i.pipe,.6,-3.25,-Qt/2-4.3,T);j.rotation.x=Math.PI/2-.05;let q=u(.14,.6,i.pipe,.6,-3,-Qt/2+.2,T),Z=u(.12,3.2,i.pvc,.6,-1.6,-Qt/2-1.2,T);f("sewer",[j,q,Z],Kt(.6,-2.4,-Qt/2-4.5),"below");let W=u(.1,.5,i.pvc,-1.2,-2.7,-1.5,T);f("radon",[W],Kt(-1.2,-2.2,-1.5),"below");let X=u(.06,Fn+1,i.pvc,0,-3.25,Qt/2+.7,T,10);X.rotation.z=Math.PI/2,X.castShadow=!1})(),(()=>{let T=r.basement,U=new es(16766880,0,15,2);U.position.set(.2,-.7,-.4),T.add(U),T.userData.lights=[U];let I=p(.85,1.7,.85,i.white,-3.3,-2,-2.6,T),k=p(.87,.12,.87,i.copper,-3.3,-1.5,-2.6,T),j=p(6.2,.36,.5,i.steel,-.3,-.12,-2.6,T),q=p(.5,1,.5,i.steel,-3.3,-.7,-2.6,T),Z=u(.07,1.2,i.pvc,-3,-.6,-3.1,T);f("hvac",[I,k,j,q,Z],Kt(-3.3,-.9,-2),"basement");let W=u(.3,1.4,i.white,-2.1,-2.1,-3,T),X=u(.04,1.2,i.copper,-2,-.9,-3,T);f("water-heaters",[W,X],Kt(-2.1,-1.1,-2.6),"basement");let K=p(.62,.95,.14,i.steel,2.8,-1.2,-3.8,T),ve=p(.4,.7,.02,i.copper,2.8,-1.2,-3.72,T),Ne=u(.05,1.5,i.copper,2.8,-.1,-3.8,T);f("electrical",[K,ve,Ne],Kt(2.8,-.5,-3.3),"basement");let He=u(.1,3.1,i.pvc,-1.2,-1.2,-1.5,T);f("radon",[He],null,"basement"),u(.09,3.1,i.pipe,-2.6,-1.3,-3.6,T);for(let Qe=-4;Qe<=4;Qe++)p(.09,.3,Qt-.3,i.cedar,Qe*1,0-.1,0,T,{cast:!1})})();let _=[{x0:-3.8,x1:-1.2,y0:.7,y1:2.5,room:"living"},{x0:.2,x1:1.3,y0:0,y1:2.2,door:!0},{x0:2.1,x1:4.2,y0:.7,y1:2.5,room:"kitchen"}];(()=>{let T=r.main,U=.3;p(Fn,.3,Qt,i.floor,0,.15,0,T,{edges:!0}),v(Fn,As,.22,_,i.lap,T,Kt(0,U,Qt/2),0,{order:1,v0:U}),v(Fn,As,.22,[{x0:-3,x1:1.6,y0:.1,y1:2.45,room:"kitchen"}],i.lap,T,Kt(0,U,-Qt/2),Math.PI,{order:4,v0:U}),v(Qt,As,.22,[{x0:-2.2,x1:-.2,y0:.8,y1:2.3,room:"hall"}],i.lap,T,Kt(Fn/2,U,0),Math.PI/2,{order:2,v0:U}),v(Qt,As,.22,[{x0:.3,x1:2.3,y0:.8,y1:2.3,room:"living"}],i.lap,T,Kt(-Fn/2,U,0),-Math.PI/2,{order:3,v0:U}),p(.15,As,5,i.drywall,1.2,U+As/2,-1.2,T);let I=p(3,.95,.65,i.counter,2.9,U+.48,-3.4,T),k=d(.85,1.95,.7,.03,i.steel,4.35,U+.98,-3.4,T),j=p(.75,.05,.6,i.steel,2.4,U+.97,-3.4,T);f("installation",[I,k,j],Kt(3,2.3,-3.2),"main");let q=u(.1,3.2,i.pvc,-1.2,1.9,-1.5,T);f("radon",[q],null,"main"),u(.09,3.2,i.pipe,-2.6,1.9,-3.6,T),d(.3,.42,.18,.02,i.white,2.8,1.5,-Qt/2-.2,T),u(.035,3.6,i.steel,2.8,3.55,-Qt/2-.1,T,10);let Z=new es(16758123,0,11,2);Z.position.set(-1.5,2.4,.5),T.add(Z);let W=new es(16758123,0,9,2);W.position.set(3,2.4,-1.5),T.add(W),T.userData.lights=[Z,W];let X=new lt;T.add(X),p(2.9,.32,2.3,i.stone,.55,.16,5.1,X,{uv:{ox:.55,oy:.16}}),p(2.9,.07,2.3,i.cedar,.55,.35,5.1,X,{uv:{}}),p(1.7,.17,.4,i.concrete,.7,.085,6.55,X),p(1.9,.17,.4,i.concrete,.7,.255-.085,6.2,X),[-.75,1.85].forEach(He=>{d(.22,2.55,.22,.015,i.cedar,He,1.67,6.12,X),p(.34,.5,.34,i.stone,He,.6,6.12,X,{uv:{ox:He,oy:.6}})}),d(3.5,.24,.22,.02,i.cedar,.55,2.84,6.12,X);let K=p(3.4,.14,2.6,[i.trim,i.trim,i.roof,i.cedar,i.trim,i.trim],.55,3,5.25,X,{uv:{swap:!0}});K.rotation.x=.1,[-.15,1.65].forEach(He=>{let Qe=new Ue(new en(.06,.07,.24,12),i.sconce);Qe.position.set(He,1.9,4.2),Qe.userData.noAO=!0,X.add(Qe);let dt=new wi(new fi({map:n,transparent:!0,depthWrite:!1,blending:Sn,opacity:0}));dt.position.set(He,1.9,4.5),dt.scale.set(1.6,1.6,1),dt.userData.noAO=!0,X.add(dt),l.porchHalos=(l.porchHalos||[]).concat(dt)}),[-.78,1.88].forEach(He=>{p(.06,.06,2,i.trim,He,1.2,5.15,X),p(.05,.05,2,i.trim,He,.55,5.15,X);for(let Qe=0;Qe<8;Qe++)p(.025,.62,.025,i.trim,He,.9,4.25+Qe*.27,X,{cast:!1})});let ve=new Ue(new $t(.2,.2),new En({map:t,transparent:!0,toneMapped:!1}));ve.position.set(1.62,1.35,4.13),ve.userData.noAO=!0,X.add(ve);let Ne=new es(16761469,0,7,2);Ne.position.set(.75,2.6,Qt/2+1.1),T.add(Ne),T.userData.porch=Ne})(),(()=>{let T=r.upper,U=3.45;p(Fn,.25,Qt,i.floor,0,3.32,0,T,{edges:!0}),v(Fn,As,.22,[{x0:-3.6,x1:-1.8,y0:.9,y1:2.4,room:"bed"},{x0:-.9,x1:1.9,y0:.5,y1:2.5,room:"living"},{x0:2.6,x1:4.1,y0:.9,y1:2.4,room:"bed"}],i.bb,T,Kt(0,U,Qt/2),0,{order:5,v0:U}),v(Fn,As,.22,[{x0:-3.4,x1:-1.8,y0:.9,y1:2.3,room:"bath"},{x0:1.6,x1:3.2,y0:.9,y1:2.3,room:"bed"}],i.bb,T,Kt(0,U,-Qt/2),Math.PI,{order:8,v0:U}),v(Qt,As,.22,[{x0:.6,x1:2.4,y0:.9,y1:2.3,room:"bed"}],i.bb,T,Kt(Fn/2,U,0),Math.PI/2,{order:6,v0:U}),v(Qt,As,.22,[{x0:-2.2,x1:-.6,y0:1.2,y1:2.2,room:"bath"}],i.bb,T,Kt(-Fn/2,U,0),-Math.PI/2,{order:7,v0:U}),p(.15,As,Qt-.4,i.drywall,-1.6,U+As/2,0,T);let I=d(1.7,.55,.8,.08,i.ceramic,-3.6,U+.28,-3.35,T),k=d(.7,.85,.5,.04,i.ceramic,-2.4,U+.43,-3.5,T),j=u(.09,3,i.pipe,-2.6,U+1.4,-3.6,T);f("plumbing",[I,k,j],Kt(-3.4,4.6,-3),"upper");let q=u(.1,3,i.pvc,-1.2,U+1.4,-1.5,T);f("radon",[q],null,"upper");let Z=new es(16758123,0,11,2);Z.position.set(.5,5.6,.5),T.add(Z),T.userData.lights=[Z]})(),(()=>{let T=r.roof,U=6.35,I=3.6,k=Fn/2,j=.6,q=Math.atan2(I,k),Z=Math.hypot(k+j,(k+j)*I/k),W=te=>{let he=new dn(Z,.2,Qt+1);h(he,{swap:!0});let xe=new Ue(he,[i.trim,i.trim,i.roof,i.cedar,i.trim,i.trim]);xe.castShadow=!0,xe.receiveShadow=!0,xe.rotation.z=te*q;let Xe=U+I-(k+j)/2*(I/k)+.12;return xe.position.set(te>0?-(k+j)/2+.02:(k+j)/2-.02,Xe,0),T.add(xe),xe},X=W(1),K=W(-1);[X,K].forEach(te=>{let he=new tr(new Za(te.geometry,30),c);he.raycast=()=>{},te.add(he)}),[X,K].forEach((te,he)=>{[-1,1].forEach(Ve=>p(Z,.3,.06,i.trim,0,-.05,Ve*(Qt/2+.5),te,{cast:!1}));let xe=he===0?-1:1;p(.06,.34,Qt+1.04,i.trim,xe*(Z/2),-.1,0,te,{cast:!1});let Xe=p(.12,.1,Qt+.9,i.trim,xe*(Z/2+.06),-.28,0,te,{cast:!1});Xe.rotation.z=-te.rotation.z}),p(.3,.22,Qt+1.05,i.trim,0,U+I+.2,0,T),f("roofing",[X,K],Kt(-2.8,9.1,2.2),"roof");let ve=new jn;ve.moveTo(-k,0),ve.lineTo(k,0),ve.lineTo(0,I),ve.lineTo(-k,0);let Ne=new Ms;Ne.moveTo(-.5,1.15),Ne.lineTo(.5,1.15),Ne.lineTo(.5,2.15),Ne.lineTo(-.5,2.15),Ne.lineTo(-.5,1.15),ve.holes.push(Ne);let He=new ji(ve,{depth:.22,bevelEnabled:!1});[Qt/2-.22,-Qt/2].forEach((te,he)=>{let xe=new Ue(He,[i.bb,i.trim]);xe.position.set(0,U,te),xe.castShadow=!0,xe.receiveShadow=!0,T.add(xe);let Xe=new lt;Xe.position.set(0,U+1.65,te+.11),T.add(Xe);let Ve=M(Xe,{x0:-.5,x1:.5,y0:-.5,y1:.5,room:"hall"},.22,"hall",-1,!0);he===1&&(Xe.rotation.y=Math.PI,Xe.position.z=te+.11-0);let st=new wi(new fi({map:n,transparent:!0,depthWrite:!1,blending:Sn,opacity:0}));st.position.set(0,U+1.65,te+(he===0?.55:-.3)),st.scale.set(3.4,3.4,1),st.userData.noAO=!0,T.add(st),o.push({mat:null,halo:st,order:-1,always:!0,w:1,h:1,haloOnly:!0,level:.6})});let Qe=new lt;Qe.rotation.z=-q,Qe.position.copy(K.position);let dt=[];for(let te=0;te<2;te++)for(let he=0;he<4;he++){let xe=p(1.3,.05,.95,i.solar,-.9+te*1.45,.16,-1.6+he*1.05,Qe,{cast:!1}),Xe=p(1.34,.04,.99,i.solarFrame,-.9+te*1.45,.14,-1.6+he*1.05,Qe,{cast:!1});dt.push(xe)}T.add(Qe),f("solar",dt,Kt(3.4,9.3,.6),"roof");let re=te=>{let he=new $t(Z-.25,Qt+.7,30,30),xe=he.attributes.position,Xe=wn(5);for(let it=0;it<xe.count;it++)xe.setZ(it,.025+Xe()*.05);he.computeVertexNormals();let Ve=i.snowRoof.clone();Ve.alphaMap=Pp(256,te),Ve.alphaTest=.25,Ve.userData={...i.snowRoof.userData};let st=new Ue(he,Ve);return st.rotation.x=-Math.PI/2,st.position.y=.105,st.receiveShadow=!0,st.castShadow=!0,st};l.snowL=re(),l.snowL.userData.keep=!0,X.add(l.snowL),l.snowR=re((te,he)=>te>.24&&te<.7&&he>.24&&he<.76?0:1),l.snowR.userData.keep=!0,K.add(l.snowR);let ye=p(.5,.16,Qt+.8,i.snowRoof,0,U+I+.38,0,T,{cast:!1});ye.material=i.snowRoof,ye.userData.keep=!0,(()=>{let te=wn(9),he=70,xe=new vr(.04,1,6);xe.rotateX(Math.PI),xe.translate(0,-.5,0);let Xe=new Qn(xe,i.ice,he*2),Ve=new St,st=new Tn,it=new F,Q=new F,_t=U+I-(k+j)*(I/k)+0;for(let vt=0;vt<2;vt++)for(let H=0;H<he;H++){let E=-Qt/2-.4+H/(he-1)*(Qt+.8),ae=.12+te()*te()*.7,ue=.7+te()*.8;it.set((vt?1:-1)*(k+j+.08),_t-.35,E+(te()-.5)*.06),Q.set(ue,ae,ue),Ve.compose(it,st,Q),Xe.setMatrixAt(vt*he+H,Ve)}Xe.userData.baseMatrices=Array.from({length:he*2},(vt,H)=>{let E=new St;return Xe.getMatrixAt(H,E),E}),Xe.castShadow=!1,Xe.userData.noAO=!0,Xe.visible=!1,T.add(Xe),l.icicles=Xe})();let Le=new $t(Fn-.6,Qt-.6,40,32),Se=Le.attributes.position,ke=wn(3);for(let te=0;te<Se.count;te++)Se.setZ(te,ke()*.12);Le.computeVertexNormals();let ee=new Ue(Le,i.insul);ee.rotation.x=-Math.PI/2,ee.position.y=U+.02,ee.receiveShadow=!0,T.add(ee),p(Fn,.1,Qt,i.floor,0,U-.05,0,T),f("asbestos",[ee],Kt(-.4,7.3,-.8),"roof");let We=u(.1,4.6,i.pvc,-1.2,U+2.2,-1.5,T);f("radon",[We],Kt(-1.2,10.9,-1.5),"roof");let le=u(.24,.42,i.steel,-1.2,7.9,-1.5,T,16);f("radon",[le],null,"roof"),u(.09,4,i.pipe,-2.6,U+2,-3.6,T);let pe=p(.95,4.1,.95,i.stone,-3.4,8.4,-1.6,T,{uv:{ox:-3.4,oy:8.4}});p(1.15,.12,1.15,i.concrete,-3.4,10.5,-1.6,T),p(.7,.3,.7,i.steel,-3.4,10.7,-1.6,T),l.chimneyTop.position.set(-3.4,10.9,-1.6),T.add(l.chimneyTop)})();let w={meter:Kt(2.8,1.45,-4.3),panel:Kt(2.8,-1.2,-3.8),shutoff:Kt(-.5,-1.4,3.75),heater:Kt(-2.1,-2,-3),sewer:Kt(.6,-3.35,-7.5),furnace:Kt(-3.3,-2,-2.6),register:Kt(3.8,3.52,2.9),fan:Kt(-1.2,7.9,-1.5),pit:Kt(-1.2,-3,-1.5),exhaust:Kt(-1.2,11.6,-1.5),rim:Kt(4.9,.3,4.05),sill:Kt(-2.5,.7,4.05),attic:Kt(0,6.4,4.05),door:Kt(.75,1.2,4.05),chimney:Kt(-3.4,10.5,-1.6),eave:Kt(-5.6,5.9,3.5),potlights:Kt(-2.4,3.1,.7),rangeHood:Kt(2.4,2.4,-3.55),island:Kt(3,1.3,-.6),vanity:Kt(-2.4,4.4,-3.55),tub:Kt(-3.6,4.1,-3.35),bedWindow:Kt(2.4,5.2,-3.9),sump:Kt(.66,-2.2,1.6)},R=new St,x=new F,A=new Tn,P=new F;function B(T,U,I,k,j){let q=k<.55?1:0;B.on=nt(B.on??0,q,Ut(j*(q?.55:1.2),0,1));let Z=B.on*9,W=(1-T.ghost*.85)*(1-.35*(T.cut||0)),X=1-.65*(T.cut||0),K=1+1.6*(T.cut||0);o.forEach(Le=>{let Se=(Le.always?1:Ut(Z-Le.order,0,1))*W,ke=1-k*.8;Le.mat&&(Le.mat.emissiveIntensity=(Le.always?2.6:2)*Se*ke*X),Le.halo&&(Le.halo.material.opacity=(Le.haloOnly?.28:Le.always?.5:.3)*Se*ke*X)}),["main","upper"].forEach(Le=>(r[Le].userData.lights||[]).forEach(Se=>{Se.intensity=9*Ut(Z/9,0,1)*(1-k)*W*K}));let ve=Math.max(T.zk||0,Et(.2,.7,T.explode||0),Ut(((T.lift||0)-1.5)/1.5,0,1));(r.basement.userData.lights||[]).forEach(Le=>{Le.intensity=30*ve*W*K});let Ne=(1-k)*W;r.main.userData.porch.intensity=12*Ne,(l.porchHalos||[]).forEach(Le=>{Le.material.opacity=.55*Ne*X}),i.sconce.emissiveIntensity=.4+3.2*(1-k);let He=Ut(T.melt,0,1),Qe=.18+He*.8;l.snowL.material.alphaTest=Qe,l.snowR.material.alphaTest=Ut(Qe+.1,0,1);let dt=r.roof.children.find(Le=>Le.material===i.snowRoof);dt&&(dt.visible=He<.6);let re=l.icicles,ye=Ut(T.icicles,0,1);if(re.visible=ye>.01,re.visible){for(let Le=0;Le<re.count;Le++)R.copy(re.userData.baseMatrices[Le]),R.decompose(x,A,P),P.y*=ye,P.x*=.5+.5*ye,P.z=P.x,R.compose(x,A,P),re.setMatrixAt(Le,R);re.instanceMatrix.needsUpdate=!0}return Z}return{house:s,layers:r,sys:a,windows:o,ANCHORS:w,edgeMat:c,extra:l,update:B,box:p,rbox:d,cyl:u,system:f,wall:v,windowUnit:M,setUV:h,v:Kt}}function $i(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,c=new Vt,l=0;for(let h=0;h<i.length;++h){let p=i[h],d=0;if(t!==(p.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let u in p.attributes){if(!n.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+u+'" attribute exists among all geometries, or in none of them.'),null;r[u]===void 0&&(r[u]=[]),r[u].push(p.attributes[u]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==p.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let u in p.morphAttributes){if(!s.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[u]===void 0&&(a[u]=[]),a[u].push(p.morphAttributes[u])}if(e){let u;if(t)u=p.index.count;else if(p.attributes.position!==void 0)u=p.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,u,h),l+=u}}if(t){let h=0,p=[];for(let d=0;d<i.length;++d){let u=i[d].index;for(let f=0;f<u.count;++f)p.push(u.getX(f)+h);h+=i[d].attributes.position.count}c.setIndex(p)}for(let h in r){let p=kp(r[h]);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,p)}for(let h in a){let p=a[h][0].length;if(p!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<p;++d){let u=[];for(let y=0;y<a[h].length;++y)u.push(a[h][y][d]);let f=kp(u);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(f)}}}return c}function kp(i){let e,t,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let a=new e(r),o=new Nt(a,t,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let p=c/t;for(let d=0,u=h.count;d<u;d++)for(let f=0;f<t;f++){let y=h.getComponent(d,f);o.setComponent(d+p,f,y)}}else a.set(h.array,c);c+=h.count*t}return s!==void 0&&(o.gpuType=s),o}function Vp(i,e=1e-4){e=Math.max(e,Number.EPSILON);let t={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count,a=0,o=Object.keys(i.attributes),c={},l={},h=[],p=["getX","getY","getZ","getW"],d=["setX","setY","setZ","setW"];for(let M=0,S=o.length;M<S;M++){let v=o[M],_=i.attributes[v];c[v]=new _.constructor(new _.array.constructor(_.count*_.itemSize),_.itemSize,_.normalized);let w=i.morphAttributes[v];w&&(l[v]||(l[v]=[]),w.forEach((R,x)=>{let A=new R.array.constructor(R.count*R.itemSize);l[v][x]=new R.constructor(A,R.itemSize,R.normalized)}))}let u=e*.5,f=Math.log10(1/e),y=Math.pow(10,f),g=u*y;for(let M=0;M<r;M++){let S=n?n.getX(M):M,v="";for(let _=0,w=o.length;_<w;_++){let R=o[_],x=i.getAttribute(R),A=x.itemSize;for(let P=0;P<A;P++)v+=`${Math.trunc(x[p[P]](S)*y+g)},`}if(v in t)h.push(t[v]);else{for(let _=0,w=o.length;_<w;_++){let R=o[_],x=i.getAttribute(R),A=i.morphAttributes[R],P=x.itemSize,B=c[R],T=l[R];for(let U=0;U<P;U++){let I=p[U],k=d[U];if(B[k](a,x[I](S)),A)for(let j=0,q=A.length;j<q;j++)T[j][k](a,A[j][I](S))}}t[v]=a,h.push(a),a++}}let m=i.clone();for(let M in i.attributes){let S=c[M];if(m.setAttribute(M,new S.constructor(S.array.slice(0,a*S.itemSize),S.itemSize,S.normalized)),M in l)for(let v=0;v<l[M].length;v++){let _=l[M][v];m.morphAttributes[M][v]=new _.constructor(_.array.slice(0,a*_.itemSize),_.itemSize,_.normalized)}}return m.setIndex(h),m}var id=0,Wp={value:new Nn(0,0,-1,30)};function Ol(i,e,t,n=!1){let s=i.onBeforeCompile,r=++id;return i.onBeforeCompile=(a,o)=>{s&&s(a,o),a.uniforms.uSight=Wp,a.fragmentShader=a.fragmentShader.replace("#include <common>",`#include <common>
uniform vec4 uSight;`).replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
      { vec3 fp = -vViewPosition;
        float fd = smoothstep(${e.toFixed(1)}, ${t.toFixed(1)}, length(fp));${n?`
        float fs = dot(fp, uSight.xyz);
        float fc = 1.0 - smoothstep(0.12, 0.26, length(fp - fs * uSight.xyz) / max(fs, 0.5));
        fd = min(fd, 1.0 - 0.94 * fc * smoothstep(0.5, 4.0, uSight.w - fs) * step(0.0, fs));`:""}
        float fh = fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715))));
        if (fd < fh) discard; }`)},i.customProgramCacheKey=()=>"fade"+r,i}function nd(i,e){let t=i.onBeforeCompile,n=++id;return i.onBeforeCompile=(s,r)=>{t&&t(s,r),s.uniforms.uSnow=e,s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
attribute float aSnow;
uniform float uSnow;`).replace("#include <color_vertex>",`#include <color_vertex>
vColor.rgb = mix(vColor.rgb, vec3(0.8, 0.86, 0.95), aSnow * uSnow);`)},i.customProgramCacheKey=()=>"snowv"+n,i}function Xp({M:i,T:e,glowTex:t,markTex:n,tier:s,reduce:r}){let a=new lt,o=wn(21),c=_r("rgba(255,255,255,0.7)"),l=Lp(),h=co("rgba(255,196,120,0.9)","rgba(255,150,70,0)"),p={uSnow:{value:1},uRoofSnow:{value:1},uTint:{value:new ct(1,1,1)},uGrow:{value:0},uLeafTint:{value:new ct(.3,.5,.15)}},d=e.grass,u=e.snow,f=new Jt({map:u.map,normalMap:u.normalMap,roughnessMap:u.rmMap,metalnessMap:u.rmMap,roughness:1,metalness:1,transparent:!0,normalScale:new Ye(1.1,1.1),envMapIntensity:.9});f.onBeforeCompile=D=>{D.uniforms.uSnow=p.uSnow,D.uniforms.uTint=p.uTint,D.uniforms.uGrass={value:d.map},D.vertexShader=D.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vWxz;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vWxz = (modelMatrix * vec4(position, 1.0)).xz;`),D.fragmentShader=D.fragmentShader.replace("#include <common>",`#include <common>
      uniform float uSnow; uniform vec3 uTint; uniform sampler2D uGrass; varying vec2 vWxz;
      float gh(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float gn(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f); return mix(mix(gh(i), gh(i+vec2(1,0)), f.x), mix(gh(i+vec2(0,1)), gh(i+vec2(1,1)), f.x), f.y); }`).replace("#include <map_fragment>",`
      vec4 snowC = texture2D(map, vMapUv);
      vec3 gr = texture2D(uGrass, vWxz * 0.25).rgb * uTint;
      float nz = gn(vWxz * 0.35) * 0.55 + gn(vWxz * 1.7) * 0.3 + gn(vWxz * 7.0) * 0.15;
      float cover = smoothstep(uSnow - 0.1, uSnow + 0.1, 1.0 - nz + (uSnow - 0.5) * 0.9);
      cover = uSnow >= 0.995 ? 1.0 : (uSnow <= 0.005 ? 0.0 : cover);
      diffuseColor.rgb *= mix(gr / max(snowC.rgb, vec3(0.2)) * 0.9, vec3(1.0), cover);
      diffuseColor *= snowC;`)};let y=200,g=6,m=450,M=Array.from({length:y+1},(D,z)=>m*Math.sinh(g*(z/y*2-1))/Math.sinh(g)),S=(D,z)=>{let Y=Math.hypot(D,z),ne=Et(40,220,Y)*(Pn(D*.012+3,z*.012+8,4,4096,4096,3)-.35)*22,J=(Pn(D*.09,z*.09,3,4096,4096,9)-.5)*.35*Et(8,22,Y)*(1-Et(14,17,z)*(1-Et(27,30,z)))*(1-Et(-22.5,-20.5,z)*(1-Et(-15.5,-13.5,z)))*(1-Et(5,6.2,D)*(1-Et(10.2,11.5,D))*Et(.5,2,z)*(1-Et(16.5,18,z)));return ne+J},v=new Vt;{let D=new Float32Array((y+1)*(y+1)*3),z=new Float32Array((y+1)*(y+1)*2),Y=[];for(let ne=0;ne<=y;ne++)for(let J=0;J<=y;J++){let se=ne*(y+1)+J,Re=M[J],De=M[ne];D[se*3]=Re,D[se*3+1]=S(Re,De),D[se*3+2]=De,z[se*2]=Re,z[se*2+1]=De}for(let ne=0;ne<y;ne++)for(let J=0;J<y;J++){let se=(M[J]+M[J+1])/2,Re=(M[ne]+M[ne+1])/2;if(Math.abs(se)<5.1&&Math.abs(Re)<4.1)continue;let De=ne*(y+1)+J,ze=De+1,Je=De+y+1,Be=Je+1;Y.push(De,Je,ze,ze,Je,Be)}v.setAttribute("position",new Nt(D,3)),v.setAttribute("uv",new Nt(z,2)),v.setIndex(Y),v.computeVertexNormals()}let _=[],w=new Ue(v,f);w.receiveShadow=!0,w.renderOrder=-1,a.add(w);let R=i.asphalt.clone();[R.map,R.normalMap,R.roughnessMap,R.metalnessMap].forEach(D=>{D&&D.repeat.set(220,3)}),R.roughness=.72,R.metalness=0,R.metalnessMap=null,R.envMapIntensity=1.4;let x=new Ue(new $t(660,9),R);x.rotation.x=-Math.PI/2,x.position.set(0,.012,22.2),x.receiveShadow=!0,a.add(x);let A=null;{let D=new $t(2.2,.14),z=new Qn(D,new Jt({color:14070346,roughness:.8}),90),Y=new St,ne=new Tn().setFromEuler(new di(-Math.PI/2,0,0)),J=new F,se=new F(1,1,1);for(let Re=0;Re<90;Re++)J.set(-180+Re*4,.02,22.2),Y.compose(J,ne,se),z.setMatrixAt(Re,Y);z.receiveShadow=!0,a.add(z),A=z}_.push(R,i.pavement);let P=new Ue(new dn(660,.1,1.8),i.pavement);P.position.set(0,.05,15.6),P.receiveShadow=!0,P.castShadow=!0,a.add(P);let B=new Ue(new dn(1.3,.05,9.4),i.pavement);B.position.set(.7,.03,10.9),B.receiveShadow=!0,a.add(B);let T=new Ue(new dn(3.6,.06,14.5),i.pavement);T.position.set(7.9,.03,9.3),T.receiveShadow=!0,a.add(T);let U=i.asphalt.clone();[U.map,U.normalMap,U.roughnessMap,U.metalnessMap].forEach(D=>{D&&D.repeat.set(220,1.5)}),U.metalnessMap=null,U.metalness=0,U.roughness=.9,U.color.setScalar(1.25),_.push(U);let I=new Ue(new $t(660,4.5),U);I.rotation.x=-Math.PI/2,I.position.set(0,.012,-18.2),I.receiveShadow=!0,a.add(I);let k=(()=>{let D=new Hn(1,10,6),z=new Qn(D,new Jt({color:14673906,roughness:.95}),70),Y=new St,ne=new Tn,J=new F,se=new F;for(let Re=0;Re<70;Re++){let De=Re%2,ze=-140+(Re>>1)*8+o()*3;J.set(ze,.1,De?26.9:17.6+o()*.2),se.set(2.8+o()*1.4,.55+o()*.25,.9+o()*.3),Y.compose(J,ne,se),z.setMatrixAt(Re,Y)}return z.castShadow=!0,z.receiveShadow=!0,a.add(z),z})(),j=[],q=Ol(i.pole.clone(),3.5,9),Z=Ol(new Jt({color:3817544,roughness:.42,metalness:.65}),3.5,9),W=new En({color:new ct(3.2,2.2,1.1),toneMapped:!1}),X=new Oi([new F(0,6.9,0),new F(0,7.45,.25),new F(0,7.6,.9),new F(0,7.5,1.6)]),K=new Hi(X,14,.05,8),ve=new Hn(1,24,12);ve.scale(.54,.085,.23),[[-13,16.6],[11,16.6],[34,16.6],[-38,16.6]].forEach(([D,z])=>{let Y=new lt;Y.position.set(D,0,z);let ne=new Ue(new en(.06,.1,7.2,10),q);ne.position.y=3.6,ne.castShadow=!0,Y.add(ne);let J=new Ue(K,q);J.castShadow=!0,Y.add(J);let se=new Ue(ve,Z);se.position.set(0,7.5,1.78),se.rotation.x=.04,se.castShadow=!0,Y.add(se);let Re=new Ue(new $t(.8,.24),W);Re.rotation.x=Math.PI/2,Re.position.set(0,7.445,1.78),Re.userData.noAO=!0,Y.add(Re);let De=new wi(new fi({map:t,transparent:!0,depthWrite:!1,blending:Sn,opacity:0}));De.position.set(0,7.3,1.78),De.scale.set(5,5,1),De.userData.noAO=!0,Y.add(De);let ze=new Ue(new $t(1,1),new En({map:h,transparent:!0,depthWrite:!1,blending:Sn,opacity:0}));ze.rotation.x=-Math.PI/2,ze.position.set(0,.04,2),ze.scale.set(15,10,1),ze.userData.noAO=!0,Y.add(ze),a.add(Y),j.push({halo:De,pool:ze,lens:Re})});let Ne=new es(16761466,0,32,2);Ne.position.set(11,7,18.2),a.add(Ne);let He=new es(16761466,0,32,2);He.position.set(-13,7,18.2),a.add(He);let Qe=[];[[-2.5,7.4,5.5,4.2],[.8,8.4,5.5,4.6],[3.15,7.4,5.5,4.2]].forEach(([D,z,Y,ne])=>{let J=new Ue(new $t(1,1),new En({map:h,transparent:!0,depthWrite:!1,blending:Sn,opacity:0}));J.rotation.x=-Math.PI/2,J.position.set(D,.05,z),J.scale.set(Y,ne,1),J.userData.noAO=!0,a.add(J),Qe.push(J)});let dt=Ol(nd(i.spruce.clone(),p.uSnow),5,12,!0);function re(D){let z=wn(D),Y=[],ne=11;for(let fe=0;fe<ne;fe++){let rt=fe/(ne-1),at=nt(1.7,.18,Math.pow(rt,.85))*(.94+z()*.12),Tt=nt(1.7,.9,rt),jt=1+fe*.62,nn=new vr(at,Tt,20,4,!0);nn.translate(0,jt+Tt/2,0);let ln=nn.attributes.position;for(let Dt=0;Dt<ln.count;Dt++){let sn=ln.getX(Dt),Ft=ln.getY(Dt),Rt=ln.getZ(Dt),Vn=Math.atan2(Rt,sn),qn=Math.hypot(sn,Rt),ni=1+Math.sin(Vn*7+fe*2.3)*.09+Math.sin(Vn*13+fe)*.04+(z()-.5)*.05,Di=qn/at*(qn/at)*.34*(1+.35*Math.sin(Vn*5+fe*1.3));ln.setXYZ(Dt,sn*ni,Ft-Di,Rt*ni)}nn.computeVertexNormals(),Y.push(nn)}let J=new en(.1,.2,1.6,8);J.translate(0,.8,0),Y.push(J);let se=$i(Y);se.computeVertexNormals();let Re=se.attributes.position,De=se.attributes.normal,ze=new Float32Array(Re.count*3),Je=new Float32Array(Re.count),Be=new ct;for(let fe=0;fe<Re.count;fe++){let rt=De.getY(fe),at=Pn(Re.getX(fe)*2.1,Re.getZ(fe)*2.1+Re.getY(fe)*1.1,3,64,64,2);Be.setRGB(.05+at*.05,.12+at*.08,.09+at*.05),Re.getY(fe)<1.15&&Be.setRGB(.1,.07,.05),ze[fe*3]=Be.r,ze[fe*3+1]=Be.g,ze[fe*3+2]=Be.b,Je[fe]=Re.getY(fe)<1.15?0:Ut(Et(.05,.6,rt+(at-.5)*.7),0,1)*.78}return se.setAttribute("color",new Nt(ze,3)),se.setAttribute("aSnow",new Nt(Je,1)),se}let ye=[[-9.5,3,1.1],[-11.8,-3.5,1.4],[9.8,-5.5,1.25],[-8.2,-8.5,1.05],[15,-9,1.35],[-14,9.5,1.2],[18,9,1.1],[-21,-6,1.5],[24,-3,1.25],[-27,8,1.2],[30,-12,1.4],[-11.5,-13.5,1.3],[6,-26,1.1],[-18,-27,1.45],[22,-27,1.3],[-36,3,1.3],[40,2,1.2]],Le=[re(1),re(2)],Se=Le[0];Le.forEach((D,z)=>{let Y=ye.filter((ze,Je)=>Je%2===z),ne=new Qn(D,dt,Y.length),J=new St,se=new Tn,Re=new F,De=new F;Y.forEach(([ze,Je,Be],fe)=>{se.setFromAxisAngle(new F(0,1,0),o()*6.28),Re.set(ze,0,Je),De.set(Be,Be*(.9+o()*.25),Be),J.compose(Re,se,De),ne.setMatrixAt(fe,J)}),ne.castShadow=!0,ne.receiveShadow=!0,a.add(ne)});let ke=[];{let D=nd(i.shrub.clone(),p.uSnow),z=new nr(.7,3),Y=z.attributes.position,ne=new Float32Array(Y.count*3),J=new Float32Array(Y.count);for(let se=0;se<Y.count;se++){let Re=Y.getX(se),De=Y.getY(se),ze=Y.getZ(se),Je=Pn(Re*2+5,ze*2+De*2,3,64,64,4),Be=1+(Je-.5)*.35;Y.setXYZ(se,Re*Be,De*Be*.72,ze*Be),ne[se*3]=.06,ne[se*3+1]=.15+Je*.05,ne[se*3+2]=.1,J[se]=Et(.05,.7,De/.7+(Je-.5))*.8}z.setAttribute("color",new Nt(ne,3)),z.setAttribute("aSnow",new Nt(J,1)),z.computeVertexNormals(),[[-1.7,4.9,1.2],[-2.5,4.7,.9],[2.9,4.9,1],[3.7,4.6,.8],[-5.2,4.6,.8]].forEach(([se,Re,De])=>{let ze=new Ue(z,D);ze.position.set(se,.35*De,Re),ze.scale.setScalar(De),ze.castShadow=!0,ze.receiveShadow=!0,ze.userData.keep=!0,a.add(ze),ke.push(ze)})}let ee=Ol(nd(new Jt({vertexColors:!0,roughness:1}),p.uSnow),5,12,!0),We=(()=>{let D=document.createElement("canvas");D.width=D.height=128;let z=D.getContext("2d"),Y=wn(77);for(let J=0;J<30;J++){z.save(),z.translate(12+Y()*104,12+Y()*104),z.rotate(Y()*Math.PI);let se=150+Math.floor(Y()*105),Re=6+Y()*6,De=13+Y()*9;z.fillStyle=`rgb(${se},${se},${se})`,z.beginPath(),z.ellipse(0,0,Re,De,0,0,Math.PI*2),z.fill(),z.strokeStyle="rgba(70,70,70,0.65)",z.lineWidth=1,z.beginPath(),z.moveTo(0,-De),z.lineTo(0,De),z.stroke(),z.restore()}let ne=new Cn(D);return ne.colorSpace=gn,ne.anisotropy=4,ne})(),le=Ol((()=>{let D=new Jt({map:We,alphaTest:.5,alphaToCoverage:s>=1,vertexColors:!0,roughness:.8,side:Wn}),z=++id;return D.onBeforeCompile=Y=>{Y.uniforms.uGrow=p.uGrow,Y.uniforms.uLeafTint=p.uLeafTint,Y.vertexShader=Y.vertexShader.replace("#include <common>",`#include <common>
attribute vec3 aCenter;
uniform float uGrow;
uniform vec3 uLeafTint;`).replace("#include <begin_vertex>",`#include <begin_vertex>
transformed = aCenter + (position - aCenter) * uGrow;`).replace("#include <color_vertex>",`#include <color_vertex>
vColor.rgb *= uLeafTint;`),Y.fragmentShader=Y.fragmentShader.replace("#include <normal_fragment_begin>",rn.normal_fragment_begin.replace("normal *= faceDirection;",""))},D.customProgramCacheKey=()=>"leaf"+z,D})(),5,12,!0);function pe(D){let z=wn(D),Y=[],ne=[],J=new F(0,1,0);function se(Tt,jt,nn,ln){let Dt=new en(ln*.68,ln,nn,6,1);return Dt.applyMatrix4(new St().compose(Tt.clone().addScaledVector(jt,nn/2),new Tn().setFromUnitVectors(J,jt),new F(1,1,1))),Y.push(Dt),Tt.clone().addScaledVector(jt,nn)}let Re=new F(0,0,1);function De(Tt,jt){let nn=[],ln=[],Dt=[],sn=[],Ft=[],Rt=[],Vn=.72+z()*.5,qn=(z()-.5)*.25;for(let Di=0;Di<18;Di++){let is=z()*2-1,Xs=z()*Math.PI*2,Vl=Math.sqrt(1-is*is),ga=new F(Vl*Math.cos(Xs),is*.85,Vl*Math.sin(Xs)).normalize(),wr=Tt.clone().addScaledVector(ga,jt*(.3+.7*Math.cbrt(z()))),xa=.8+z()*.55,Wl=ga.clone().add(new F(z()-.5,z()-.3,z()-.5).multiplyScalar(.9)).normalize(),va=new Tn().setFromUnitVectors(Re,Wl).premultiply(new Tn().setFromAxisAngle(Wl,z()*6.28)),Ar=ga.clone().add(new F(0,.3,0)).normalize(),V=nn.length/3;[[-.5,-.5],[.5,-.5],[.5,.5],[-.5,.5]].forEach(([qe,ot])=>{let ht=new F(qe*xa,ot*xa,0).applyQuaternion(va).add(wr);nn.push(ht.x,ht.y,ht.z),ln.push(Ar.x,Ar.y,Ar.z),Dt.push(qe+.5,ot+.5),sn.push(wr.x,wr.y,wr.z);let yt=Vn*(.85+.3*z());Ft.push(yt*(1+qn),yt,yt*(1-qn*.6))}),Rt.push(V,V+1,V+2,V,V+2,V+3)}let ni=new Vt;ni.setAttribute("position",new Ot(nn,3)),ni.setAttribute("normal",new Ot(ln,3)),ni.setAttribute("uv",new Ot(Dt,2)),ni.setAttribute("aCenter",new Ot(sn,3)),ni.setAttribute("color",new Ot(Ft,3)),ni.setIndex(Rt),ne.push(ni)}function ze(Tt,jt,nn,ln,Dt){let sn=se(Tt,jt,nn,ln);if(Dt===0){De(sn,.9+z()*.7),z()<.7&&De(sn.clone().add(new F((z()-.5)*1.2,z()*.6,(z()-.5)*1.2)),.7+z()*.5);return}let Ft=Dt>=3?3:2+(z()<.4?1:0);for(let Rt=0;Rt<Ft;Rt++){let Vn=new F().crossVectors(jt,new F(z()-.5,.25,z()-.5)).normalize(),qn=jt.clone().applyAxisAngle(Vn,.45+z()*.7).add(new F(0,.18,0)).normalize();ze(sn,qn,nn*(.68+z()*.14),ln*.62,Dt-1)}Dt<=2&&De(sn.clone().add(new F((z()-.5)*.8,.3,(z()-.5)*.8)),.8+z()*.5)}ze(new F(0,0,0),J,2.6,.24,4);let Je=$i(Y),Be=Je.attributes.position,fe=Je.attributes.normal,rt=new Float32Array(Be.count*3),at=new Float32Array(Be.count);for(let Tt=0;Tt<Be.count;Tt++){let jt=Pn(Be.getX(Tt)*3,Be.getY(Tt)*3+Be.getZ(Tt),2,64,64,6);rt[Tt*3]=.16+jt*.08,rt[Tt*3+1]=.12+jt*.06,rt[Tt*3+2]=.09+jt*.05,at[Tt]=Ut(fe.getY(Tt)*1.5,0,1)*.85}return Je.setAttribute("color",new Nt(rt,3)),Je.setAttribute("aSnow",new Nt(at,1)),{wood:Je,leaf:$i(ne)}}let te=[],he=[[-11.5,-1,.95],[12.2,-3.6,1],[-9.5,-9.5,1.1],[8.5,-9.8,1.15],[-33,-9,1.15],[35,-8,1.05],[-26,11,1],[27,9,1],[-30,18.8,.75],[44,18.8,.75],[-9,-22,1.2],[14,-23,1.1]];[pe(31),pe(47)].forEach((D,z)=>{let Y=he.filter((J,se)=>se%2===z),ne=(J,se,Re)=>{let De=new Qn(J,se,Y.length),ze=new St,Je=new Tn,Be=new F,fe=new F;return Y.forEach(([rt,at,Tt],jt)=>{Je.setFromAxisAngle(new F(0,1,0),(rt*7+at*3)%6.28),Be.set(rt,0,at),fe.setScalar(Tt*.95),ze.compose(Be,Je,fe),De.setMatrixAt(jt,ze)}),De.castShadow=Re,De.receiveShadow=!0,a.add(De),De};ne(D.wood,ee,!0),te.push(ne(D.leaf,le,!0))});let xe=i.neighborRoof.clone();xe.onBeforeCompile=D=>{D.uniforms.uRoofSnow=p.uRoofSnow,D.fragmentShader=D.fragmentShader.replace("#include <common>",`#include <common>
uniform float uRoofSnow;`).replace("#include <map_fragment>",`#include <map_fragment>
diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.9, 0.93, 0.97), uRoofSnow * 0.92);`)},xe.customProgramCacheKey=()=>"nroof";let Xe=new En({color:new ct(1.5,.92,.42),transparent:!0,opacity:0}),Ve=new Jt({color:659222,roughness:.08,metalness:.4,envMapIntensity:1.6}),st=[],it=[],Q=[];function _t(D){let{x:z,z:Y,w:ne,d:J,h:se,rh:Re,tone:De,rot:ze=0,garage:Je,chimney:Be}=D,fe=new lt,rt=i.neighbor.clone();rt.color.setHex(De).multiplyScalar(1.9);let at=new dn(ne,se,J);da(at,{oy:se/2});let Tt=new Ue(at,rt);Tt.position.y=se/2,Tt.castShadow=!0,Tt.receiveShadow=!0,fe.add(Tt);let jt=new jn;jt.moveTo(-ne/2-.5,0),jt.lineTo(ne/2+.5,0),jt.lineTo(0,Re),jt.lineTo(-ne/2-.5,0);let nn=new Ue(new ji(jt,{depth:J+1,bevelEnabled:!1}),xe);if(nn.position.set(0,se,-J/2-.5),nn.castShadow=!0,nn.receiveShadow=!0,fe.add(nn),Be){let Ft=new Ue(new dn(.7,2.4,.7),i.stone);Ft.position.set(ne*.22,se+Re*.55,-J*.1),Ft.castShadow=!0,fe.add(Ft)}let ln=(Ft,Rt,Vn,qn,ni)=>{let Di=new St().compose(new F(Ft,Rt,Vn),new Tn().setFromAxisAngle(new F(0,1,0),qn),new F(1,1,1)),is=new St().compose(new F(Ft,Rt,Vn).add(new F(Math.sin(qn),0,Math.cos(qn)).multiplyScalar(-.012)),new Tn().setFromAxisAngle(new F(0,1,0),qn),new F(1,1,1));(ni?st:it).push({g:fe,m:Di}),Q.push({g:fe,m:is})},Dt=Math.max(2,Math.round(ne/2.4));for(let Ft=0;Ft<2;Ft++)for(let Rt=0;Rt<Dt;Rt++)Je&&Ft===0&&Rt===0||ln(-ne/2+(Rt+.5)*(ne/Dt),1.5+Ft*2.6,J/2+.02,0,o()>.32);for(let Ft=0;Ft<2;Ft++)ln(ne/2+.02,1.5+Ft*2.6,0,Math.PI/2,o()>.5),ln(-ne/2-.02,1.5+Ft*2.6,0,-Math.PI/2,o()>.5);let sn=new Ue(new dn(2.2,2.1,.12),i.walnut);if(sn.position.set(ne/2-1.5,1.05,J/2+.05),fe.add(sn),Je){let Ft=new Ue(new dn(2.8,2.3,.14),i.cedar);Ft.position.set(-ne/2+1.7,1.15,J/2+.06),fe.add(Ft);for(let Rt=1;Rt<4;Rt++){let Vn=new Ue(new dn(2.8,.04,.16),i.trim);Vn.position.set(-ne/2+1.7,Rt*.575,J/2+.07),fe.add(Vn)}}return fe.position.set(z,0,Y),fe.rotation.y=ze,a.add(fe),vt.push([z,se+Re,Y]),fe}let vt=[];[{x:-17,z:-1,w:7.4,d:7,h:5.4,rh:2.6,tone:7304314,garage:!0,chimney:!0},{x:17.5,z:.5,w:6.8,d:6.6,h:4.8,rh:2.4,tone:8023912},{x:-33,z:-2,w:7.2,d:7.5,h:5.2,rh:2.5,tone:6251884,chimney:!0},{x:34,z:0,w:7.6,d:7,h:5.6,rh:2.8,tone:6975608,garage:!0},{x:-49,z:0,w:7,d:7,h:5,rh:2.4,tone:7565679},{x:50,z:-1,w:7,d:7,h:5.2,rh:2.4,tone:6712178,chimney:!0},{x:-66,z:1,w:7,d:7,h:5,rh:2.4,tone:7171954,garage:!0},{x:67,z:0,w:7,d:7,h:5,rh:2.4,tone:7369592},{x:-24,z:40,w:7,d:7,h:5.2,rh:2.5,tone:6975092,rot:Math.PI,garage:!0},{x:-8,z:41,w:7.4,d:7,h:5.4,rh:2.6,tone:7828073,rot:Math.PI,chimney:!0},{x:10,z:40,w:7,d:6.8,h:5,rh:2.4,tone:6843764,rot:Math.PI},{x:28,z:41,w:7.2,d:7,h:5.4,rh:2.6,tone:7500921,rot:Math.PI,garage:!0},{x:46,z:40,w:7,d:7,h:5.2,rh:2.4,tone:7106678,rot:Math.PI}].forEach(_t),a.updateMatrixWorld(!0);let H=(D,z,Y)=>{let ne=new Qn(z,Y,D.length),J=new St;return D.forEach(({g:se,m:Re},De)=>{J.multiplyMatrices(se.matrixWorld,Re),ne.setMatrixAt(De,J)}),ne.userData.noAO=!1,a.add(ne),ne},E=new $t(1,1.15),ae=new $t(1.16,1.31),ue=[];H(st,E,Xe),H(it,E,Ve),H(Q,ae,i.trim);let _e=new lt;_e.visible=!1,a.add(_e);let Ze=new en(.05,.05,1,8,1,!0),Ke=[],Ie=new F(0,12.6,0);vt.forEach(([D,z,Y],ne)=>{let J=new F(D,z+3.4,Y),se=new wi(new fi({map:n,transparent:!0,depthWrite:!1,depthTest:!1,opacity:0}));se.position.copy(J),se.renderOrder=12,se.userData.noAO=!0,_e.add(se);let Re=new Ue(Ze,new En({color:new ct(2.2,1.3,.55),transparent:!0,opacity:0,blending:Sn,depthWrite:!1,toneMapped:!1}));Re.scale.set(1,3.2,1),Re.position.set(D,z+1.6,Y),Re.userData.noAO=!0,Re.raycast=()=>{},_e.add(Re);let De=J.clone().lerp(Ie,.5);De.y+=5+J.distanceTo(Ie)*.18;let ze=new Oi([J,J.clone().lerp(De,.5).setY(De.y*.9),De,De.clone().lerp(Ie,.5).setY(De.y*.9),Ie]),Je=40,Be=new Ue(new Hi(ze,Je,.07,5,!1),new En({color:new ct(2.4,1.4,.6),transparent:!0,opacity:0,blending:Sn,depthWrite:!1,toneMapped:!1}));Be.userData.noAO=!0,Be.raycast=()=>{},_e.add(Be);let fe=9,rt=new Vt;rt.setAttribute("position",new Nt(new Float32Array(fe*3),3));let at=new Ai(rt,new pi({size:.9,map:c,color:new ct(2.4,1.5,.7),transparent:!0,depthWrite:!1,blending:Sn,toneMapped:!1}));at.frustumCulled=!1,at.userData.noAO=!0,at.raycast=()=>{},_e.add(at),Ke.push({spr:se,bm:Re,tube:Be,segs:Je,curve:ze,pts:at,n:fe,d:J.distanceTo(Ie),delay:0})}),Ke.sort((D,z)=>D.d-z.d),Ke.forEach((D,z)=>{D.delay=z/Ke.length});let be=new wi(new fi({map:n,transparent:!0,depthWrite:!1,depthTest:!1,opacity:0}));be.position.copy(Ie).add(new F(0,1.2,0)),be.scale.set(4.2,4.2,1),be.renderOrder=13,be.userData.noAO=!0,_e.add(be);let et=new F;function gt(D,z){_e.visible=D>.003,_e.visible&&(be.material.opacity=Et(0,.15,D),be.scale.setScalar(4.2+Math.sin(z*3)*.3),Ke.forEach(Y=>{let ne=Et(Y.delay*.7,Y.delay*.7+.3,D);Y.spr.material.opacity=ne,Y.spr.scale.setScalar(2.4*(.6+.4*ne)),Y.bm.material.opacity=.5*ne,Y.bm.scale.y=3.2+6*ne,Y.bm.position.y=Y.spr.position.y-Y.bm.scale.y/2-1.6;let J=Math.floor(Et(.1+Y.delay*.6,.45+Y.delay*.6,D)*Y.segs)*5*6;Y.tube.geometry.setDrawRange(0,J),Y.tube.material.opacity=.34*ne*(.8+.2*Math.sin(z*3+Y.delay*9));let se=Y.pts.geometry.attributes.position.array,Re=Et(.1+Y.delay*.6,.45+Y.delay*.6,D);for(let De=0;De<Y.n;De++){let ze=(De/Y.n+z*.16+Y.delay)%1;if(ze>Re){se[De*3+1]=-999;continue}Y.curve.getPointAt(ze,et),se[De*3]=et.x,se[De*3+1]=et.y,se[De*3+2]=et.z}Y.pts.geometry.attributes.position.needsUpdate=!0,Y.pts.material.opacity=ne}))}let N=new Jt({color:4864555,roughness:.95}),ie=new En({color:723724}),ge=[];(()=>{let D=new lt;D.position.set(-3.4,0,-11.4),a.add(D);let z=7.4,Y=6.4,ne=3.1,J=new dn(z,ne,Y);da(J,{oy:ne/2});let se=new Ue(J,i.bb.clone());se.material.color.setScalar(1),se.position.y=ne/2,se.castShadow=!0,se.receiveShadow=!0,D.add(se);let Re=new jn;Re.moveTo(-z/2-.45,0),Re.lineTo(z/2+.45,0),Re.lineTo(0,1.9),Re.lineTo(-z/2-.45,0);let De=new Ue(new ji(Re,{depth:Y+.9,bevelEnabled:!1}),xe);De.position.set(0,ne,-Y/2-.45),De.castShadow=!0,De.receiveShadow=!0,D.add(De);for(let Je=0;Je<2;Je++){let Be=-1.8+Je*3.6,fe=new Ue(new dn(3.1,2.4,.12),i.walnut);fe.position.set(Be,1.2,-Y/2-.05),fe.castShadow=!0,D.add(fe);for(let Tt=1;Tt<4;Tt++){let jt=new Ue(new dn(3.1,.04,.14),i.trim);jt.position.set(Be,Tt*.6,-Y/2-.08),D.add(jt)}let rt=new Ue(new dn(2.7,.3,.14),i.mirror);rt.position.set(Be,2.05,-Y/2-.09),D.add(rt);let at=new Ue(new dn(3.3,2.55,.1),i.trim);at.position.set(Be,1.27,-Y/2-0),D.add(at)}[-3.3,3.3].forEach(Je=>{let Be=new Ue(new en(.07,.08,.26,12),i.sconce);Be.position.set(Je,2.55,-Y/2-.2),Be.userData.noAO=!0,D.add(Be);let fe=new wi(new fi({map:t,transparent:!0,depthWrite:!1,blending:Sn,opacity:0}));fe.position.set(Je,2.55,-Y/2-.5),fe.scale.set(2.2,2.2,1),fe.userData.noAO=!0,D.add(fe),ge.push(fe)});let ze=new Ue(new $t(1,1),new En({map:h,transparent:!0,depthWrite:!1,blending:Sn,opacity:0}));ze.rotation.x=-Math.PI/2,ze.position.set(0,.05,-Y/2-2.2),ze.scale.set(10,5,1),ze.userData.noAO=!0,D.add(ze),ge.pool=ze})();let Te=[-75.2,-49.2,-23.2,2.8,28.8,54.8,80.8];Te.forEach(D=>{let z=new lt;z.position.set(D,0,-15.5),a.add(z);let Y=new Ue(new en(.13,.19,9.8,10),N);Y.position.y=4.9,Y.castShadow=!0,z.add(Y);let ne=new Ue(new dn(.12,.12,2.2),N);if(ne.position.y=9.2,z.add(ne),[-.85,0,.85].forEach(J=>{let se=new Ue(new en(.04,.05,.2,8),i.ceramic);se.position.set(0,9.36,J),z.add(se)}),Math.abs(D-2.8)<1){let J=new Ue(new en(.3,.3,.95,14),i.steel);J.position.set(.5,8.35,.2),J.castShadow=!0,z.add(J);let se=new Ue(new en(.2,.3,.12,14),i.steel);se.position.set(.5,8.9,.2),z.add(se)}});let Ge=[];for(let D=0;D<Te.length-1;D++)[-.85,0,.85].forEach(z=>{let Y=new F(Te[D],9.4,-15.5+z),ne=new F(Te[D+1],9.4,-15.5+z),J=Y.clone().lerp(ne,.5);J.y-=.9,Ge.push(new Hi(new Oi([Y,Y.clone().lerp(J,.5).setY(9.4-.45),J,J.clone().lerp(ne,.5).setY(9.4-.45),ne]),24,.022,4))});{let D=new F(2.8,9.4,-15.5),z=new F(2.8,5.4,-4.3),Y=D.clone().lerp(z,.5);Y.y-=.7,Ge.push(new Hi(new Oi([D,Y,z]),20,.026,4))}let G=new Ue($i(Ge),ie);G.castShadow=!1,G.raycast=()=>{},a.add(G);let Ae=new lt,de=[],Fe={front:null,rear:null},Ce=new lt;(()=>{let D=new Ri({color:1784408,metalness:.65,roughness:.3,clearcoat:1,clearcoatRoughness:.08,envMapIntensity:1.5}),z=new Ri({color:395533,metalness:.2,roughness:.04,clearcoat:1,envMapIntensity:1.8}),Y=new Jt({color:1052946,roughness:.85}),ne=new Jt({color:12107462,metalness:.9,roughness:.25}),J=new jn;J.moveTo(-2.3,.28),J.lineTo(-2.38,.6),J.quadraticCurveTo(-2.36,.92,-2.05,.98),J.lineTo(1.35,.98),J.quadraticCurveTo(2.05,.9,2.3,.7),J.lineTo(2.34,.44),J.quadraticCurveTo(2.3,.28,2.1,.28),J.lineTo(-2.3,.28);let se=new Ue(new ji(J,{depth:1.7,bevelEnabled:!0,bevelThickness:.09,bevelSize:.09,bevelSegments:4,curveSegments:14}),D);se.geometry.translate(0,0,-.85),se.castShadow=!0,Ae.add(se);let Re=new jn;Re.moveTo(-1.95,.96),Re.quadraticCurveTo(-1.55,1.42,-.95,1.46),Re.lineTo(.5,1.44),Re.quadraticCurveTo(.95,1.4,1.38,.96),Re.lineTo(-1.95,.96);let De=new Ue(new ji(Re,{depth:1.62,bevelEnabled:!0,bevelThickness:.07,bevelSize:.05,bevelSegments:3,curveSegments:12}),z);De.geometry.translate(0,0,-.81),De.castShadow=!0,Ae.add(De);let ze=new Ue(new ws(1.9,.07,1.6,2,.03),D);ze.position.set(-.2,1.47,0),Ae.add(ze),[[-1.4,.8],[1.4,.8],[-1.4,-.8],[1.4,-.8]].forEach(([Dt,sn])=>{let Ft=new Ue(new en(.37,.37,.26,24),Y);Ft.rotation.x=Math.PI/2,Ft.position.set(Dt,.37,sn*1+Math.sign(sn)*.04),Ft.castShadow=!0,Ae.add(Ft);let Rt=new Ue(new en(.23,.23,.27,20),ne);Rt.rotation.x=Math.PI/2,Rt.position.copy(Ft.position),Ae.add(Rt)});let Je=new Jt({color:1118481,emissive:16777215,emissiveIntensity:.1}),Be=new Jt({color:2228224,emissive:16722458,emissiveIntensity:.1}),fe=new Ue(new dn(.06,.05,1.5),Je);fe.position.set(2.33,.72,0),fe.userData.noAO=!0,Ae.add(fe);let rt=new Ue(new dn(.06,.05,1.5),Be);rt.position.set(-2.4,.78,0),rt.userData.noAO=!0,Ae.add(rt),Fe.front=Je,Fe.rear=Be;let at=new Ue(new ws(1.8,.07,1.5,2,.03),i.snowRoof);at.userData.keep=!0,at.position.set(-.2,1.54,0),Ae.add(at),de.push(at);let Tt=new Ue(new ws(1,.05,1.45,2,.02),i.snowRoof);Tt.userData.keep=!0,Tt.position.set(1.6,1,0),Tt.rotation.z=-.1,Ae.add(Tt),de.push(Tt),Ae.position.set(7.9,0,6.3),Ae.rotation.y=-Math.PI/2,a.add(Ae);let jt=[new F(5.2,1.2,2.5),new F(5.55,.5,2.85),new F(6.15,.12,3.3),new F(6.7,.4,3.75),new F(7,.82,3.95)],nn=new Ue(new Hi(new Oi(jt),24,.028,6),new Jt({color:855310,roughness:.6}));nn.castShadow=!0,Ce.add(nn);let ln=new Ue(new Hn(.05,10,8),new En({color:new ct(.4,3,1.2)}));ln.position.set(5.16,1.5,2.5),ln.userData.noAO=!0,Ce.add(ln),Ce.userData.led=ln,a.add(Ce)})();let O=r?0:s>=1?2200:900,we=new Vt,me=new Float32Array(O*3),$e=new Float32Array(O*2),ft=[90,40,90];for(let D=0;D<O;D++)me[D*3]=(o()-.5)*ft[0],me[D*3+1]=o()*ft[1],me[D*3+2]=(o()-.5)*ft[2],$e[D*2]=.7+o()*1.1,$e[D*2+1]=o()*6.28;we.setAttribute("position",new Nt(me,3));let wt=new pi({color:16777215,size:.11,map:c,transparent:!0,opacity:.85,depthWrite:!1,blending:Sn}),Pt=new Ai(we,wt);Pt.frustumCulled=!1,Pt.userData.noAO=!0,a.add(Pt);let Bt=s>=1&&!r?140:0,Yt=new Vt,bn=new Float32Array(Bt*3);for(let D=0;D<Bt;D++)bn[D*3]=(o()-.5)*50,bn[D*3+1]=o()*22,bn[D*3+2]=(o()-.5)*50;Yt.setAttribute("position",new Nt(bn,3));let pn=new pi({color:14674175,size:.42,map:c,transparent:!0,opacity:.22,depthWrite:!1,blending:Sn}),C=new Ai(Yt,pn);C.frustumCulled=!1,C.userData.noAO=!0,a.add(C);let Ee=r?0:s>=1?1600:700,Oe=new Vt,je=new Float32Array(Ee*6),tt=new Float32Array(Ee),bt=[70,30,70];for(let D=0;D<Ee;D++){let z=(o()-.5)*bt[0],Y=o()*bt[1],ne=(o()-.5)*bt[2];je.set([z,Y,ne,z-.04,Y+.7,ne],D*6),tt[D]=14+o()*6}Oe.setAttribute("position",new Nt(je,3));let ut=new Lr({color:11455464,transparent:!0,opacity:0,depthWrite:!1}),xt=new tr(Oe,ut);xt.frustumCulled=!1,xt.userData.noAO=!0,xt.raycast=()=>{},a.add(xt);let mt=r?0:s>=1?420:160,It=new Vt,At=new Float32Array(mt*3),Wt=new Float32Array(mt*2),Mi=new Float32Array(mt*3),Ei=[80,22,80],Ii=[[.95,.55,.1],[.85,.3,.08],[.9,.75,.15],[.6,.2,.05]];for(let D=0;D<mt;D++){At[D*3]=(o()-.5)*Ei[0],At[D*3+1]=o()*Ei[1],At[D*3+2]=(o()-.5)*Ei[2],Wt[D*2]=.5+o()*.8,Wt[D*2+1]=o()*6.28;let z=Ii[D%4];Mi.set(z,D*3)}It.setAttribute("position",new Nt(At,3)),It.setAttribute("color",new Nt(Mi,3));let kn=new Ai(It,new pi({size:.2,vertexColors:!0,map:c,transparent:!0,opacity:.9,depthWrite:!1}));kn.frustumCulled=!1,kn.userData.noAO=!0,a.add(kn);let Vi=[];for(let D=0;D<22;D++){let z=new wi(new fi({map:l,transparent:!0,depthWrite:!1,opacity:0,color:12568276}));z.userData={age:D/22*6,noAO:!0},z.renderOrder=5,a.add(z),Vi.push(z)}let L=new Ue(Se,dt);L.position.set(.9,0,-12.4),L.scale.setScalar(.75),L.castShadow=!0,L.visible=!1,a.add(L);let ce=new Set([w,x,P,B,T,I,k,A,L]),Pe=new lt;a.add(Pe),a.children.slice().forEach(D=>{D!==Pe&&!ce.has(D)&&Pe.add(D)});let Me=new F;function b(D){wt.color.set(D?6963104:16777215)}function $(D,z,Y,ne,J,se,Re){f.opacity=D.ground,f.depthWrite=D.ground>.95,w.visible=D.ground>.01,_.forEach(Be=>{let fe=D.ground<.99;Be.transparent!==fe&&(Be.transparent=fe,Be.needsUpdate=!0),Be.opacity=D.ground,Be.depthWrite=!fe}),p.uSnow.value=D.snow,p.uRoofSnow.value=D.roofSnow,p.uGrow.value=D.grow,p.uLeafTint.value.copy(D.leafTint),gt(D.beacons||0,z),L.visible=D.section>.3,k.visible=D.snow>.25,te.forEach(Be=>{Be.visible=D.grow>.02,Be.castShadow=D.grow>.5}),de.forEach(Be=>{Be.visible=D.snow>.5}),Ce.visible=D.explode<.05,Ae.visible=!0;let De=1-ne;Fe.front.emissiveIntensity=.1+2.2*De,Fe.rear.emissiveIntensity=.1+3*De,Ce.userData.led.scale.setScalar(.8+.25*Math.sin(z*3));let ze=Et(.35,.9,D.ground);ke.forEach(Be=>{Be.visible=D.ground>.5||D.explode>.05}),j.forEach(Be=>{Be.halo.material.opacity=.75*De,Be.pool.material.opacity=.55*De*ze}),Ne.intensity=55*De,He.intensity=40*De,W.color.setRGB(3.2,2.2,1.1).multiplyScalar(.06+.94*De),ge.forEach(Be=>{Be.material.opacity=.5*De}),ge.pool.material.opacity=.4*De*ze,Qe.forEach((Be,fe)=>{Be.material.opacity=.5*De*Ut(oe(Re,fe),0,1)*(1-D.ghost)*ze}),Xe.opacity=De*.9,Pt.position.set(J.x,0,J.z),C.position.set(J.x,0,J.z),xt.position.set(J.x,0,J.z),kn.position.set(J.x,0,J.z);let Je=D.snowfall;if(Pt.visible=C.visible=Je>.02&&O>0,Pt.visible){let Be=we.attributes.position.array;for(let rt=0;rt<O;rt++)Be[rt*3+1]-=$e[rt*2]*Y*1.5,Be[rt*3]+=Math.sin(z*.7+$e[rt*2+1])*Y*.3,Be[rt*3+2]+=Math.cos(z*.5+$e[rt*2+1])*Y*.2,Be[rt*3+1]<0&&(Be[rt*3+1]=ft[1]);we.attributes.position.needsUpdate=!0;let fe=Yt.attributes.position.array;for(let rt=0;rt<Bt;rt++)fe[rt*3+1]-=.8*Y,fe[rt*3+1]<0&&(fe[rt*3+1]=22);Yt.attributes.position.needsUpdate=!0,wt.opacity=.8*Je*(1-ne*.45),pn.opacity=.2*Je*(1-ne*.5)}if(xt.visible=D.rain>.02&&Ee>0,xt.visible){let Be=Oe.attributes.position.array;for(let fe=0;fe<Ee;fe++){let rt=tt[fe]*Y;Be[fe*6+1]-=rt,Be[fe*6+4]-=rt,Be[fe*6+4]<0&&(Be[fe*6+1]+=bt[1],Be[fe*6+4]+=bt[1])}Oe.attributes.position.needsUpdate=!0,ut.opacity=.32*D.rain}if(kn.visible=D.leaves>.02&&mt>0,kn.visible){let Be=It.attributes.position.array;for(let fe=0;fe<mt;fe++)Be[fe*3+1]-=Wt[fe*2]*Y*.9,Be[fe*3]+=(Math.sin(z*.9+Wt[fe*2+1])*.7+.35)*Y,Be[fe*3+2]+=Math.cos(z*.6+Wt[fe*2+1])*.4*Y,Be[fe*3+1]<0&&(Be[fe*3+1]=Ei[1]);It.attributes.position.needsUpdate=!0,kn.material.opacity=.9*D.leaves}Vi.forEach(Be=>{Be.userData.age+=Y*.55,Be.userData.age>6&&(Be.userData.age-=6);let fe=Be.userData.age/6;Me.copy(se),Me.y+=fe*5.2,Me.x+=fe*2.2+Math.sin(fe*5+Be.id)*.18,Me.z+=Math.cos(fe*3+Be.id)*.15,Be.position.copy(Me),Be.scale.setScalar(.5+fe*2.6),Be.material.opacity=Math.sin(Math.PI*Math.min(1,fe*1.3))*.34*D.smoke*(.5+.5*De)})}let oe=(D,z)=>D-z*.3;return{world:a,ground:w,groundMat:f,U:p,update:$,lamps:j,setThermal:b,evGroup:Ae,props:Pe,sight:Wp}}var zn={wire:16761963,cold:5220095,hot:16739151,drain:10135476,supply:9433288,ret:9083903,radon:14257407},sd=2.4;function Yp({house:i,reduce:e}){let t=(T,U,I)=>new F(T,U,I),n=_r("rgba(255,255,255,0.6)"),s={netE:[],netW:[],netA:[],netR:[]},r={netE:[],netW:[],netA:[],netR:[]},a={};Object.keys(s).forEach(T=>{a[T]=new lt,a[T].visible=!1,a[T].userData.noAO=!0,i.add(a[T])});let o=T=>{let U=new Ja;for(let I=1;I<T.length;I++)U.add(new Nr(T[I-1],T[I]));return U};function c(T,U,I,k,j){let q=o(U.map(Qe=>t(Qe[0],Qe[1],Qe[2]))),Z=q.getLength(),W=Math.max(6,Math.round(Z*7)),X=6,K=new En({color:I,toneMapped:!1,fog:!1,transparent:!0});K.color.multiplyScalar(1.5);let ve=new Ue(new Hi(q,W,k,X,!1),K),Ne=new En({color:I,transparent:!0,opacity:.2,blending:Sn,depthWrite:!1,toneMapped:!1,fog:!1});Ne.color.multiplyScalar(sd);let He=new Ue(new Hi(q,W,k*3.4,X,!1),Ne);ve.renderOrder=7,He.renderOrder=8,ve.userData.noAO=He.userData.noAO=!0,ve.raycast=He.raycast=()=>{},a[T].add(ve,He),s[T].push({tube:ve,glow:He,segs:W,radial:X,gmat:Ne}),j&&r[T].push({curve:q,len:Z,n:Math.max(3,Math.round(Z*j.density)),speed:j.speed,color:j.color||I})}let l=[];for(let T=0;T<=10;T++){let U=T/10;l.push([2.8,nt(9.1,7.7,U)-1*Math.sin(Math.PI*U),nt(-15.5,-4.45,U)])}c("netE",[...l,[2.8,1.45,-4.3],[2.8,-.35,-4.3],[2.8,-.35,-3.86],[2.8,-.72,-3.86]],zn.wire,.045,{density:2.2,speed:6});let h=[2.8,-.72,-3.78],p=[2.8,-.2,-3.78];c("netE",[h,p,[2.2,-.2,-3.78],[2.2,1.35,-3.9],[4.6,1.35,-3.9]],zn.wire,.032,{density:2.5,speed:5}),c("netE",[h,p,[4.94,-.2,-3.78],[4.94,-.2,3.7],[4.94,.6,3.92],[1.45,.6,3.92],[1.45,2.45,3.92],[.05,2.45,3.92],[.05,.6,3.92],[-4.94,.6,3.92],[-4.94,.6,-3.2]],zn.wire,.032,{density:2.5,speed:5}),c("netE",[h,p,[4.94,-.2,-3.78],[4.94,3.85,-3.78],[4.94,3.85,3.92],[-4.94,3.85,3.92],[-4.94,3.85,-2.4]],zn.wire,.032,{density:2.5,speed:5}),c("netE",[h,p,[1.28,-.2,-3.78],[1.28,-.2,-1],[1.28,3.05,-1],[-1.5,3.05,-1],[-1.5,3.05,.5]],zn.wire,.03,{density:2.5,speed:5}),c("netE",[[1.28,3.05,-1],[3,3.05,-1],[3,3.05,-1.6]],zn.wire,.03,{density:2.5,speed:5}),c("netE",[h,p,[4.94,-.2,-3.78],[4.94,-.2,2.5],[4.94,1.3,2.5],[5.1,1.3,2.5]],zn.wire,.034,{density:2.5,speed:5}),c("netW",[[-.5,-2.2,16],[-.5,-2.2,3.75],[-.5,-.32,3.75],[-.5,-.32,-3],[-1.95,-.32,-3],[-1.95,-1.35,-3]],zn.cold,.072,{density:2,speed:2.4}),c("netW",[[-.5,-.32,-3.2],[2.4,-.32,-3.2],[2.4,-.32,-3.7],[2.4,1.05,-3.7]],zn.cold,.051,{density:2,speed:2.4}),c("netW",[[-.5,-.32,-3.45],[-2.3,-.32,-3.45],[-2.3,3.95,-3.45],[-2.3,3.95,-3.62]],zn.cold,.051,{density:2,speed:2.4}),c("netW",[[-2.3,3.6,-3.45],[-3.4,3.6,-3.45]],zn.cold,.051,{density:2,speed:2.4}),c("netW",[[-2.2,-1.35,-3],[-2.2,-.46,-3],[-2.2,-.46,-3.32],[2.55,-.46,-3.32],[2.55,-.46,-3.72],[2.55,1.05,-3.72]],zn.hot,.051,{density:2,speed:2.4}),c("netW",[[-2.2,-.46,-3.32],[-2.47,-.46,-3.32],[-2.47,3.95,-3.32],[-2.47,3.95,-3.6]],zn.hot,.051,{density:2,speed:2.4}),c("netW",[[-2.47,3.6,-3.32],[-3.5,3.6,-3.32]],zn.hot,.051,{density:2,speed:2.4}),c("netW",[[-3.6,3.48,-3.62],[-2.6,3.48,-3.62],[-2.6,-2.95,-3.62],[.6,-2.95,-3.62],[.6,-3.2,-4.3],[.6,-3.45,-9.5]],zn.drain,.087,{density:1.6,speed:2.8}),c("netW",[[2.6,.95,-3.86],[2.6,-2.9,-3.86],[.75,-2.9,-3.86]],zn.drain,.072,{density:1.6,speed:2.8}),c("netW",[[-2.6,3.48,-3.62],[-2.6,10.2,-3.62]],zn.drain,.065,null);let d=[-3.3,-1.15,-2.6],u=[-3.3,-.12,-2.6];c("netA",[d,u,[2.6,-.12,-2.6],[4.4,-.12,-2.6],[4.4,-.12,-1.2],[4.4,.34,-1.2]],zn.supply,.091,{density:1.6,speed:3.2}),c("netA",[u,[-2,-.12,-2.6],[-2,-.12,3.4],[-2,.34,3.4]],zn.supply,.078,{density:1.6,speed:3.2}),c("netA",[[3.1,-.12,-2.6],[3.1,-.12,3.45],[3.1,.34,3.45]],zn.supply,.078,{density:1.6,speed:3.2}),c("netA",[[1.28,-.12,-2.6],[1.28,3.35,-2.6],[3.8,3.35,-2.6],[3.8,3.35,2.9],[3.8,3.52,2.9]],zn.supply,.078,{density:1.6,speed:3.2}),c("netA",[[1.28,3.35,-2.6],[-3.8,3.35,-2.6],[-3.8,3.35,2],[-3.8,3.52,2]],zn.supply,.078,{density:1.6,speed:3.2}),c("netA",[[-1.75,5.6,1],[-1.75,-.32,1],[-3.3,-.32,1],[-3.3,-.32,-2.15],[-3.3,-1.05,-2.15]],zn.ret,.091,{density:1.6,speed:2.4}),c("netR",[[-1.2,-2.92,-1.5],[-1.2,11.6,-1.5]],zn.radon,.075,{density:2.2,speed:2.6});let f={},y=new ct,g=new ct(16777215);Object.keys(r).forEach(T=>{let U=r[T];if(!U.length)return;let I=U.reduce((X,K)=>X+K.n,0),k=new Vt;k.setAttribute("position",new Nt(new Float32Array(I*3),3));let j=new Float32Array(I*3),q=0;U.forEach(X=>{y.set(X.color).lerp(g,.45).multiplyScalar(sd);for(let K=0;K<X.n;K++,q++)j[q*3]=y.r,j[q*3+1]=y.g,j[q*3+2]=y.b}),k.setAttribute("color",new Nt(j,3));let Z=new pi({size:T==="netE"?.2:.26,map:n,vertexColors:!0,transparent:!0,depthWrite:!1,blending:Sn,toneMapped:!1,fog:!1}),W=new Ai(k,Z);W.frustumCulled=!1,W.renderOrder=9,W.raycast=()=>{},a[T].add(W),f[T]=W});let m=e?0:260,M=new Vt,S=new Float32Array(m*3),v=new Float32Array(m),_=t(-1.2,-2.95,-1.5),w=T=>{S[T*3]=(Math.random()-.5)*9.4,S[T*3+1]=-3.05-Math.random()*1.6,S[T*3+2]=(Math.random()-.5)*7.4,v[T]=.4+Math.random()*.8};for(let T=0;T<m;T++)w(T);M.setAttribute("position",new Nt(S,3));let R=new pi({color:new ct(zn.radon).multiplyScalar(sd),size:.2,map:_r("rgba(217,140,255,0.6)"),transparent:!0,opacity:0,depthWrite:!1,blending:Sn,toneMapped:!1,fog:!1}),x=new Ai(M,R);x.frustumCulled=!1,x.raycast=()=>{},a.netR.add(x);let A=new F,P={netE:1,netW:1,netA:1,netR:1};function B(T,U,I,k){let j=T.explode<.06;if(Object.keys(s).forEach(q=>{let Z=T[q],W=a[q];if(W.visible=j&&Z>.003,!W.visible)return;let X=!U||U===q?1:.2,K=P[q]=nt(P[q],X,Math.min(1,k*4));s[q].forEach(Ne=>{let He=Math.floor(Ut(Z,0,1)*Ne.segs)*Ne.radial*6;Ne.tube.geometry.setDrawRange(0,He),Ne.glow.geometry.setDrawRange(0,He),Ne.tube.material.opacity=K,Ne.gmat.opacity=(.22+.1*Math.sin(I*3+Ne.segs))*K});let ve=f[q];if(ve){let Ne=ve.geometry.attributes.position.array,He=0;r[q].forEach(Qe=>{for(let dt=0;dt<Qe.n;dt++,He++){let re=(dt/Qe.n+I*Qe.speed/Qe.len)%1;if(re>Z){Ne[He*3+1]=-999;continue}Qe.curve.getPointAt(re,A),Ne[He*3]=A.x,Ne[He*3+1]=A.y,Ne[He*3+2]=A.z}}),ve.geometry.attributes.position.needsUpdate=!0,ve.material.opacity=Ut(Z*3,0,1)*K}}),m&&a.netR.visible){R.opacity=Ut(T.netR*2,0,.9)*P.netR;for(let q=0;q<m;q++){A.set(_.x-S[q*3],_.y-S[q*3+1],_.z-S[q*3+2]);let Z=A.length();if(Z<.25){w(q);continue}A.multiplyScalar(k*v[q]*1.1/Z),S[q*3]+=A.x+Math.sin(I+q)*k*.15,S[q*3+1]+=A.y,S[q*3+2]+=A.z}M.attributes.position.needsUpdate=!0}}return{groups:a,update:B}}var Ty=`varying vec3 vW; varying vec3 vN;
void main(){ vec4 w = modelMatrix * vec4(position, 1.0);
#ifdef USE_INSTANCING
  w = modelMatrix * instanceMatrix * vec4(position, 1.0);
#endif
  vW = w.xyz; vN = normalize(mat3(modelMatrix) * normal); gl_Position = projectionMatrix * viewMatrix * w; }`,wy=`uniform float uBase, uGrad, uBand, uTime; varying vec3 vW; varying vec3 vN;
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
  gl_FragColor = vec4(toLinear(iron(t + rim)), 1.0); }`;function qp({scene:i,M:e,skipParents:t,onChange:n}){let s={value:0},r=new Map;function a(d,u=0,f=0){let y=d+"|"+u+"|"+f;return r.has(y)||r.set(y,new xn({uniforms:{uBase:{value:d},uGrad:{value:u},uBand:{value:f},uTime:s},vertexShader:Ty,fragmentShader:wy})),r.get(y)}let o={hvac:.93,"water-heaters":.88,electrical:.6,plumbing:.56,installation:.5,radon:.22,solar:.17,roofing:[.4,.12],foundation:.33,sewer:.3,asbestos:.5};function c(d,u){if(u&&o[u]!==void 0)return a(...[].concat(o[u]));let f=d.userData&&d.userData.th;return f?a(...f):a(.3)}let l=[],h=!1;function p(d){d!==h&&(h=d,i.traverse(u=>{if(u.isSprite&&u.userData.noAO){u.visible=!h&&(u.userData.wasVisible??!0);return}if(!(!(u.isMesh||u.isInstancedMesh)||!u.material)&&!u.userData.noThermal){for(let f=u.parent;f;f=f.parent)if(t.includes(f))return;h?(u.userData.mat0=u.material,u.material=Array.isArray(u.material)?u.material.map(f=>c(f,u.userData.sys)):c(u.material,u.userData.sys)):u.userData.mat0&&(u.material=u.userData.mat0,u.userData.mat0=null)}}),n&&n(h))}return{set:p,time:s,get on(){return h}}}function Zp({M:i,layers:e,glowTex:t}){let n=[],s=(u,f=.7,y=0,g=[.5],m={})=>{let M=new Jt({color:u,roughness:f,metalness:y,...m});return M.userData.th=g,M},r=(u,f=[.95])=>{let y=new Jt({color:2236440,emissive:u,emissiveIntensity:0,roughness:.5});return y.userData.th=f,n.push(y),y},a={rug:s(5787722,1),rug2:s(3884628,1),cushion:s(13215610,.95),cushion2:s(9413544,.95),tvBlack:s(789775,.25,.3,[.6]),book1:s(9190190,.8),book2:s(3100522,.8),book3:s(14208440,.8),plant:s(4156218,.9,0,[.3]),pot:s(14209734,.6),sheets:s(15328474,.95),duvet:s(7043718,.95),wood:s(10122320,.55),woodDark:s(4929062,.55),steel:s(11186358,.3,.9,[.55]),quartz:s(15328991,.25,0,[.5]),cabinet:s(3812386,.5,0,[.5]),tile:s(13620952,.4,0,[.4]),bin:s(3829659,.6),bin2:s(12936750,.6),cardboard:s(11570526,.9),tv:r(10274047,[.85]),lamp:r(16762746),pendant:r(16765594),screen:r(13625599,[.8]),led:r(6750105,[.7]),pot:s(14868180,.55)},o=(u,f,y,g,m,M,S,v,_,w=0)=>{let R=new Ue(new ws(u,f,y,2,Math.min(g,u/2-.001,f/2-.001,y/2-.001)),m);return R.position.set(M,S+f/2,v),R.rotation.y=w,R.castShadow=!0,R.receiveShadow=!0,R.userData.noPick=!0,_.add(R),R},c=(u,f,y,g,m,M,S,v=18)=>{let _=new Ue(new en(u,u,f,v),y);return _.position.set(g,m+f/2,M),_.castShadow=!0,_.receiveShadow=!0,_.userData.noPick=!0,S.add(_),_},l=(u,f,y,g,m,M,S=1)=>{let v=new Ue(new Hn(u,14,10),f);return v.position.set(y,g,m),v.scale.y=S,v.castShadow=!0,v.userData.noPick=!0,M.add(v),v},h=(u,f,y,g,m,M=a.woodDark)=>{let S=new lt;return S.position.set(u,f,y),S.rotation.y=g,m.add(S),o(.44,.05,.44,.02,M,0,.44,0,S),[[-.19,-.19],[.19,-.19],[-.19,.19],[.19,.19]].forEach(([v,_])=>c(.02,.44,a.steel,v,0,_,S,8)),o(.44,.45,.04,.02,M,0,.5,-.2,S),S},p=(u,f,y,g,m=1.4)=>{c(.14,.03,a.steel,u,f,y,g,14),c(.015,m,a.steel,u,f,y,g,8);let M=new Ue(new en(.17,.24,.3,18,1,!0),a.lamp);return M.material.side=Wn,M.position.set(u,f+m+.05,y),M.userData.noAO=!0,M.userData.noPick=!0,g.add(M),M};(()=>{let u=e.main,f=.3;o(3.4,.02,2.5,.01,a.rug,-2.3,f,.7,u);let y=new lt;y.position.set(-.9,f,.7),y.rotation.y=-Math.PI/2,u.add(y),o(2.3,.4,.95,.1,a.fabric??i.fabric,0,.1,0,y),o(2.3,.45,.25,.1,i.fabric,0,.45,-.38,y),o(.25,.3,.9,.08,i.fabric,-1.07,.3,0,y),o(.25,.3,.9,.08,i.fabric,1.07,.3,0,y),o(.5,.4,.14,.06,a.cushion,-.6,.55,-.1,y),o(.5,.4,.14,.06,a.cushion2,.6,.55,-.1,y),[[-.9,.18],[.9,.18]].forEach(([M])=>{[[-1.05,-.4],[1.05,-.4],[-1.05,.4],[1.05,.4]].forEach(([S,v])=>c(.03,.1,a.woodDark,S,0,v,y,8))}),o(1,.05,.6,.03,a.wood,-2.75,f+.34,.7,u),[[-.4,-.22],[.4,-.22],[-.4,.22],[.4,.22]].forEach(([M,S])=>c(.025,.34,a.woodDark,-2.75+M,f,.7+S,u,8)),h(-2,f,2.5,Math.PI,u,i.fabric2??a.cushion2),o(.4,.5,2,.04,a.woodDark,-4.62,f,.7,u),o(.05,.75,1.5,.015,a.tvBlack,-4.74,f+.95,.7,u);let g=new Ue(new $t(1.4,.68),a.tv);g.rotation.y=Math.PI/2,g.position.set(-4.7,f+1.32,.7),g.userData.noPick=!0,u.add(g),o(.34,2,2.2,.02,a.woodDark,.9,f,-1.8,u),[.5,1,1.5].forEach((M,S)=>{o(.2,.28,1.9,.01,[a.book1,a.book2,a.book3][S],1,f+M+.05,-1.8,u)}),c(.17,.4,a.pot,-4.2,f,3.2,u,14),l(.38,a.plant,-4.2,f+.85,3.2,u,1.3),l(.28,a.plant,-4.3,f+1.15,3.1,u,1.2),p(-.45,f,3.1,u,1.45),o(3,.72,.36,.02,a.cabinet,2.9,f+1.55,-3.7,u),o(.9,.14,.6,.02,a.steel,2.4,f+1.3,-3.58,u),o(.34,.9,.34,.02,a.steel,2.4,f+1.45,-3.7,u),o(2.2,.06,1,.02,a.quartz,3,f+.9,-.6,u),o(2.1,.9,.9,.03,a.cabinet,3,f,-.6,u),[2.4,3,3.6].forEach(M=>{c(.17,.05,a.woodDark,M,f+.62,.35,u,16),c(.025,.62,a.steel,M,f,.35,u,8)}),[2.3,3,3.7].forEach(M=>{c(.006,.7,a.steel,M,f+2.1,-.6,u,4);let S=new Ue(new Hn(.15,16,10,0,Math.PI*2,0,Math.PI/2),a.pendant);S.position.set(M,f+2.1,-.6),S.userData.noAO=!0,S.userData.noPick=!0,u.add(S)}),o(1.8,.05,.92,.02,a.wood,3.2,f+.72,2.4,u),[[-.8,-.4],[.8,-.4],[-.8,.4],[.8,.4]].forEach(([M,S])=>c(.035,.72,a.woodDark,3.2+M,f,2.4+S,u,8)),h(2.5,f,1.55,0,u),h(3.9,f,1.55,0,u),h(2.5,f,3.25,Math.PI,u),h(3.9,f,3.25,Math.PI,u);let m=new Ue(new en(.28,.28,.22,20,1,!0),a.pendant);m.material.side=Wn,m.position.set(3.2,f+2.15,2.4),m.userData.noAO=!0,m.userData.noPick=!0,u.add(m),c(.006,.55,a.steel,3.2,f+2.2,2.4,u,4),o(1,.45,.38,.03,a.wood,.6,f,3.55,u)})(),(()=>{let u=e.upper,f=3.45;o(2,.42,2.15,.06,a.sheets,2.4,f,-2.55,u),o(1.96,.18,1.55,.08,a.duvet,2.4,f+.38,-2.2,u),o(2,.9,.1,.03,a.woodDark,2.4,f,-3.72,u),o(.6,.22,.38,.08,a.sheets,1.85,f+.5,-3.3,u),o(.6,.22,.38,.08,a.sheets,2.95,f+.5,-3.3,u),[[1],[3.8]].forEach(([g])=>{o(.5,.5,.4,.03,a.woodDark,g,f,-3.55,u),p(g,f+.5,-3.55,u,.34)}),o(2,.02,1.4,.01,a.rug2,2.4,f,-1,u),o(.6,2.3,2,.02,a.woodDark,4.55,f,-1.2,u),o(1.5,.05,.7,.02,a.wood,.6,f+.72,3.35,u),[[-.7,-.3],[.7,-.3],[-.7,.3],[.7,.3]].forEach(([g,m])=>c(.03,.72,a.steel,.6+g,f,3.35+m,u,8)),o(.7,.42,.04,.01,a.tvBlack,.6,f+.98,3.52,u);let y=new Ue(new $t(.64,.36),a.screen);y.position.set(.6,f+1.19,3.495),y.rotation.y=Math.PI,y.userData.noPick=!0,u.add(y),h(.6,f,2.7,Math.PI,u,a.cushion2),o(1.5,.4,2,.06,a.sheets,-3.4,f,2.2,u),o(1.46,.16,1.4,.07,a.cushion2,-3.4,f+.36,2.5,u),o(.9,.9,.5,.03,a.woodDark,-4.55,f,.6,u),o(.9,.02,.06,.01,a.tile,-3.2,f,-2.6,u),o(.42,.34,.6,.12,i.ceramic,-4.4,f,-3.2,u),o(.4,.4,.2,.06,i.ceramic,-4.4,f+.34,-3.5,u),o(.7,.9,.03,.01,i.mirror,-2.4,f+1.2,-3.84,u)})(),(()=>{let u=e.basement,f=-2.8;o(.68,.92,.68,.04,i.white,.5,f,-3.5,u),o(.68,.92,.68,.04,i.white,1.25,f,-3.5,u),c(.2,.03,a.tvBlack,.5,f+.93,-3.15,u,18),c(.2,.03,a.tvBlack,1.25,f+.93,-3.15,u,18),o(.6,.06,.4,.01,a.tvBlack,.88,f+.92,-3.88,u),o(2,.06,.75,.01,a.wood,-4,f+.88,2.6,u),o(1.9,.88,.7,.01,a.cabinet,-4,f,2.6,u),o(.3,.06,.12,.01,a.bin2,-4.4,f+.94,2.55,u),o(.2,.2,.2,.02,a.bin,-3.7,f+.94,2.7,u),o(1.7,2,.42,.01,a.steel,4.25,f,2.9,u,0),[.3,.9,1.5].forEach((g,m)=>{o(.5,.3,.34,.03,[a.bin,a.bin2,a.cardboard][m],3.8,f+g+.05,2.9,u),o(.6,.3,.34,.03,[a.cardboard,a.bin,a.bin2][m],4.5,f+g+.05,2.9,u)}),c(.32,.05,a.tvBlack,.66,f,1.6,u,20),c(.1,.5,a.pvc??i.pvc,.66,f,1.6,u,12);let y=new Ue(new Hn(.03,8,6),a.led);y.position.set(.66,f+.58,1.6),y.userData.noAO=!0,y.userData.noPick=!0,u.add(y),o(.5,.4,.4,.02,a.cardboard,-1.4,f,2.9,u,.3),o(.45,.35,.4,.02,a.cardboard,-1.3,f+.4,2.9,u,.1),o(1.6,.02,1.2,.01,a.rug,.4,f,.8,u)})();function d(u,f){let y=Ut(.25+.75*u+f*.3,0,1.1);a.tv.emissiveIntensity=1.3*y,a.screen.emissiveIntensity=1.1*y,a.lamp.emissiveIntensity=2.2*y,a.pendant.emissiveIntensity=2.6*y,a.led.emissiveIntensity=3}return{update:d,glows:n}}var Mr=.38;function $p({scene:i,M:e,tier:t,reduce:n}){let s=new lt;s.visible=!1,i.add(s);let r=wn(55),a=_r("rgba(255,255,255,0.65)"),o=(Se,ke,ee)=>new F(Se,ke,ee),c=.45,l=.66,h=(()=>{let Se=Math.round(1024*nh()),ke=Math.round(512*nh()),ee=document.createElement("canvas");ee.width=Se,ee.height=ke;let We=ee.getContext("2d"),le=We.createImageData(Se,ke),pe=le.data,te=[[0,[58,41,29]],[.5,[92,64,40]],[.62,[150,106,62]],[2.2,[138,98,58]],[2.4,[150,142,120]],[4.6,[124,118,104]],[4.8,[100,112,120]],[7,[90,98,108]],[9,[74,78,86]]],he=Xe=>{let Ve=0;for(;Ve<te.length-2&&te[Ve+1][0]<=Xe;)Ve++;let[st,it]=te[Ve],[Q,_t]=te[Ve+1],vt=Ut((Xe-st)/(Q-st),0,1);return[nt(it[0],_t[0],vt),nt(it[1],_t[1],vt),nt(it[2],_t[2],vt)]};for(let Xe=0;Xe<ke;Xe++)for(let Ve=0;Ve<Se;Ve++){let st=Xe/ke*9+(Pn(Ve/90,Xe/40,3,11,8,5)-.5)*.7+Math.sin(Ve*.02+Xe*.01)*.12,it=he(Ut(st,0,9)),Q=(Pn(Ve/6,Xe/6,2,170,85,9)-.5)*34,_t=(Xe*Se+Ve)*4;pe[_t]=Ut(it[0]+Q,0,255),pe[_t+1]=Ut(it[1]+Q,0,255),pe[_t+2]=Ut(it[2]+Q*.9,0,255),pe[_t+3]=255}We.putImageData(le,0,0);for(let Xe=0;Xe<420*nh();Xe++){let Ve=105+r()*75;We.fillStyle=`rgba(${Ve|0},${Ve*.96|0},${Ve*.86|0},0.85)`,We.beginPath(),We.ellipse(r()*Se,(2.5+r()*2.1)/9*ke,1.5+r()*3.5,1.2+r()*2.4,r()*3,0,6.3),We.fill()}let xe=new Cn(ee);return xe.colorSpace=gn,xe.wrapS=Bn,xe.anisotropy=8,xe})(),p=new Jt({map:h,roughness:1,metalness:0});h.repeat.set(6,1);let d=new Ue(new $t(240,9),p);d.rotation.y=-Math.PI/2,d.position.set(c+Mr,-4.52,0),d.userData.noAO=!0,d.userData.noPick=!0,d.receiveShadow=!1,s.add(d);let u=(()=>{let Se=document.createElement("canvas");Se.width=4,Se.height=256;let ke=Se.getContext("2d"),ee=ke.createLinearGradient(0,0,0,256);ee.addColorStop(0,"rgb(74,78,86)"),ee.addColorStop(.35,"rgb(24,26,31)"),ee.addColorStop(1,"rgb(6,7,9)"),ke.fillStyle=ee,ke.fillRect(0,0,4,256);let We=new Cn(Se);return We.colorSpace=gn,We})(),f=new Ue(new $t(240,60),new En({map:u,fog:!1,toneMapped:!1}));f.rotation.y=-Math.PI/2,f.position.set(c+Mr,-9.02-30,0),f.userData.noAO=!0,f.userData.noPick=!0,f.raycast=()=>{},s.add(f);let y=new lt;s.add(y);for(let Se=0;Se<=9;Se++){let ke=new Ue(new dn(.04,.05,Se%3===0?1.4:.8),new En({color:16039294,toneMapped:!1}));ke.position.set(0,-Se,31-(Se%3===0?.7:.4)),ke.userData.noAO=!0,ke.raycast=()=>{},y.add(ke)}let g=new Ue(new dn(.06,.07,240),new En({color:16039294,toneMapped:!1}));g.position.set(c+Mr-.02,.02,0),g.userData.noAO=!0,g.raycast=()=>{},s.add(g);let m=(Se,ke=.45,ee=.2)=>{let We=new Jt({color:Se,roughness:ke,metalness:ee,emissive:Se,emissiveIntensity:.12,side:Wn});return We.userData.th=[.3],We},M={water:m(4165606,.4,.3),gas:m(15775786,.45,.2),sewer:m(12169888,.8,0),tile:m(15855334,.6,0),roots:m(8017458,.95,0),sump:m(8362672,.5,.3),crack:new En({color:new ct(3,.5,.35),toneMapped:!1})};M.roots.emissiveIntensity=0;let S={water:new lt,gas:new lt,sewer:new lt,found:new lt,radon:new lt};Object.values(S).forEach(Se=>s.add(Se));let v=(Se,ke,ee,We,le=0)=>{let pe=new Oi(Se.map(he=>o(...he)),!1,"catmullrom",.05),te=new Ue(new Hi(pe,le||Math.max(8,Se.length*8),ke,10,!1),ee);return te.castShadow=!1,te.userData.noPick=!0,We.add(te),pe},_=(Se,ke,ee,We,le)=>{let pe=o(...Se),te=o(...ke),he=pe.distanceTo(te),xe=new Ue(new en(ee,ee,he,16,1,!0),We);return xe.position.copy(pe).lerp(te,.5),xe.quaternion.setFromUnitVectors(o(0,1,0),te.clone().sub(pe).normalize()),xe.userData.noPick=!0,le.add(xe),new Nr(pe,te)},w=[];function R(Se,ke,ee,We,le,pe=.22){let te=new Vt;te.setAttribute("position",new Nt(new Float32Array(ke*3),3));let he=new Ai(te,new pi({size:pe,map:a,color:new ct(We).multiplyScalar(2.2),transparent:!0,depthWrite:!1,blending:Sn,toneMapped:!1}));he.frustumCulled=!1,he.userData.noAO=!0,he.raycast=()=>{},le.add(he),w.push({curve:Se,n:ke,speed:ee,len:Se.getLength(),pts:he,group:le})}_([c-12,-2.4,22.8],[c+60,-2.4,22.8],.24,M.water,S.water),_([c-12,-1.3,24.7],[c+60,-1.3,24.7],.11,M.gas,S.gas);let x=v([[l,-2.4,22.8],[l,-2.3,18],[l,-2.2,6],[l,-2.2,3.75]],.075,M.water,S.water,30);R(x,20,2,7320831,S.water,.2);let A=v([[l+.1,-1.3,24.7],[l+.1,-1.3,8],[l+.1,-.3,5.4],[l+.1,.9,4.25]],.055,M.gas,S.gas,30);R(A,16,2.6,16765514,S.gas,.18);let P=new Ue(new dn(.3,.4,.2),e.steel);P.position.set(l+.1,1.2,4.25),P.userData.noPick=!0,S.gas.add(P),_([c-12,-3.95,-18.2],[c+60,-3.95,-18.2],.4,M.sewer,S.sewer);let B=v([[l,-3.27,-3.8],[l,-3.35,-9],[l,-3.55,-13],[l,-3.9,-17.9]],.19,M.sewer,S.sewer,30);R(B,18,1.3,13214314,S.sewer,.2);let T=v([[l,-3.3,-5.2],[l,-1,-5.2],[l,.1,-5.2]],.14,M.sewer,S.sewer,10),U=o(l,-3.52,-12.8);[[[.9,-.2,-12.4],[.8,-1.2,-12.2],[l+.04,-2.4,-12.5],[l+.02,-3.2,-12.8],[l,-3.5,-12.9]],[[.9,-.2,-12.4],[.85,-.9,-11.4],[l+.1,-2,-11.5],[l+.04,-3,-12.1],[l,-3.45,-12.6]],[[.9,-.2,-12.4],[.85,-1,-13.5],[l+.12,-2.2,-13.9],[l+.04,-3.1,-13.4],[l,-3.5,-13.1]],[[l+.1,-2.2,-13.8],[l+.05,-2.9,-14.6]],[[l+.12,-2,-11.5],[l+.06,-2.6,-10.5]]].forEach((Se,ke)=>v(Se,ke<3?.1:.05,M.roots,S.sewer,24));let I=new Ue(new Bi(.3,.02,8,28),M.crack);I.position.copy(U),I.rotation.y=Math.PI/2,I.userData.noAO=!0,S.sewer.add(I),[[-4.55],[4.55]].forEach(([Se])=>_([c-6,-3.3,Se],[c+6.2,-3.3,Se],.11,M.tile,S.found)),[[c-6],[c+6.2]].forEach(([Se])=>_([Se,-3.3,-4.55],[Se,-3.3,4.55],.11,M.tile,S.found));let k=v([[l,-3.3,4.55],[l,-3.3,3],[l,-3.1,1.9]],.09,M.tile,S.found,12),j=new Ue(new en(.34,.34,.75,22,1,!0),M.sump);j.position.set(l,-3.05,1.6),j.userData.noPick=!0,S.found.add(j);let q=v([[l,-2.55,1.6],[l,-1.2,1.6],[l,-1.2,6.8],[l,.1,6.8]],.075,M.sump,S.found,24);R(k,10,.8,7320831,S.found,.16),R(q,14,1.8,7320831,S.found,.18),v([[.62,-.15,4.27],[.55,-.55,4.27],[.74,-.95,4.27],[.5,-1.4,4.27],[.7,-1.9,4.27],[.52,-2.5,4.27]],.022,M.crack,S.found,30);let Z=new wi(new fi({map:co("rgba(255,90,70,0.9)","rgba(255,60,40,0)"),transparent:!0,depthWrite:!1,blending:Sn,opacity:.6}));Z.position.set(.62,-1.4,4.5),Z.scale.set(2.2,3.4,1),Z.userData.noAO=!0,S.found.add(Z);let W=n?0:t>=1?520:200,X=new Vt,K=new Float32Array(W*3),ve=new Float32Array(W*2),Ne=Se=>{K[Se*3]=r()*(Mr-.06),K[Se*3+1]=-8.6+r()*1.4,K[Se*3+2]=(r()-.5)*14-1.5,ve[Se*2]=.6+r()*.9,ve[Se*2+1]=r()*6.28};for(let Se=0;Se<W;Se++)Ne(Se),K[Se*3+1]=-8.6+r()*5.6;X.setAttribute("position",new Nt(K,3));let He=new Ai(X,new pi({size:.42,map:a,color:new ct(14257407).multiplyScalar(2.6),transparent:!0,depthWrite:!1,blending:Sn,toneMapped:!1}));He.frustumCulled=!1,He.userData.noAO=!0,He.raycast=()=>{},S.radon.add(He);let Qe={x:-1.2,z:-1.5},dt={ugWater:o(l,-2.4,21),ugGas:o(l+.1,-1.3,14),ugSewer:o(l,-3.7,-16),ugRoots:U.clone(),ugSewerMain:o(l,-3.95,-18.2),ugTile:o(l,-3.3,4.55),ugSump:o(l,-3.1,1.6),ugCrack:o(l,-1.5,4.3),ugRadon:o(-1.2,-6,-1.5),ugMeter:o(l+.1,1.2,4.25),ugMain:o(l,-2.4,22.8),ugGasMain:o(l,-1.3,24.7)},re=o(0,0,0),ye={cx:-1e3};function Le(Se,ke,ee,We){let le=Et(0,1,Se.section),pe=Se.section<.002?-1e3:nt(-60,Se.cutX,le);if(ye.cx=pe,s.visible=Se.section>.002,!s.visible)return pe;if(d.position.x=pe+Mr,f.position.x=pe+Mr,g.position.x=pe+Mr-.02,y.position.x=pe+Mr,dt.ugRadon.x=pe+Mr*.5,Object.entries(S).forEach(([te,he])=>{let xe=ke===te||ke==="street"&&(te==="water"||te==="gas"),Xe=!ke||xe?1:.2;he.userData.al=nt(he.userData.al??Xe,Xe,Math.min(1,We*5)),he.traverse(Ve=>{Ve.material&&Ve.material.isMeshStandardMaterial&&(Ve.material.emissiveIntensity=xe?.6:.12)})}),M.crack.color.setRGB(3,.5,.35).multiplyScalar(.7+.3*Math.sin(ee*5)),w.forEach(te=>{let he=te.group.userData.al??1;if(te.pts.visible=he>.02,!te.pts.visible)return;let xe=te.pts.geometry.attributes.position.array;for(let Xe=0;Xe<te.n;Xe++){let Ve=(Xe/te.n+ee*te.speed/te.len)%1;te.curve.getPointAt(Ve,re),xe[Xe*3]=re.x,xe[Xe*3+1]=re.y,xe[Xe*3+2]=re.z}te.pts.geometry.attributes.position.needsUpdate=!0,te.pts.material.opacity=he}),He.visible=W>0&&(S.radon.userData.al??1)>.2,He.visible){He.position.x=pe;for(let te=0;te<W;te++){let he=K[te*3+1],xe=Et(-5.8,-3,he);K[te*3+1]+=ve[te*2]*We*.8,K[te*3+2]+=((Qe.z-K[te*3+2])*xe*.5+Math.sin(ee*.8+ve[te*2+1])*.1)*We,K[te*3+1]>-2.95&&Ne(te)}X.attributes.position.needsUpdate=!0,He.material.opacity=S.radon.userData.al??1}return pe}return{group:s,update:Le,ANCHORS:dt,groups:S,state:ye}}function rd(i){i.updateWorldMatrix(!0,!0);let e=new St().copy(i.matrixWorld).invert(),t=new St,n=new Map,s=[],r=l=>{for(let h=l;h&&h!==i;h=h.parent)if(h.userData.sys||h.userData.keep||h.userData.level)return!0;return!1},a=l=>Array.isArray(l.material)?l.geometry.groups.map(h=>{let p=l.geometry.clone(),d=l.geometry.index;return p.clearGroups(),d?p.setIndex(Array.from(d.array.slice(h.start,h.start+h.count))):p.deleteAttribute("position"),{m:l.material[h.materialIndex],g:p}}):[{m:l.material,g:l.geometry.clone()}];i.traverse(l=>{if(!l.isMesh||l.isInstancedMesh||l===i||!l.material||!l.visible||r(l)||l.children.length||!l.geometry.index&&Array.isArray(l.material)||(Array.isArray(l.material)?l.material:[l.material]).some(p=>!p||p.userData.pane))return;t.multiplyMatrices(e,l.matrixWorld),a(l).forEach(({m:p,g:d})=>{let u=[p.uuid,+l.castShadow,+l.receiveShadow,+!!l.userData.noAO,+!!l.userData.noPick,l.renderOrder].join("|"),f=n.get(u);f||n.set(u,f={m:p,cast:l.castShadow,recv:l.receiveShadow,noAO:!!l.userData.noAO,noPick:!!l.userData.noPick,ro:l.renderOrder,geos:[],owners:new Set}),d.attributes.uv||d.setAttribute("uv",new Nt(new Float32Array(d.attributes.position.count*2),2)),d.applyMatrix4(t),f.geos.push(d),f.owners.add(l)}),s.push(l)});let o=0;n.forEach(l=>{if(l.geos.length<2){l.geos.forEach(f=>f.dispose());return}let h=Object.keys(l.geos[0].attributes).filter(f=>l.geos.every(y=>y.attributes[f]));l.geos.forEach(f=>{for(let y of Object.keys(f.attributes))h.includes(y)||f.deleteAttribute(y)});let p=l.geos.some(f=>!f.index)?l.geos.map(f=>f.index?f.toNonIndexed():f):l.geos,d=$i(p);if(!d)return;d.computeBoundingSphere();let u=new Ue(d,l.m);u.castShadow=l.cast,u.receiveShadow=l.recv,u.renderOrder=l.ro,l.noAO&&(u.userData.noAO=!0),l.noPick&&(u.userData.noPick=!0),i.add(u),o++,l.done=!0});let c=new Set;return n.forEach(l=>{l.done||l.owners.forEach(h=>c.add(h))}),s.forEach(l=>{!c.has(l)&&l.parent&&(l.parent.remove(l),l.geometry.dispose())}),o}function Jp(i,e){i.updateWorldMatrix(!0,!0);let t=new St().copy(i.matrixWorld).invert(),n=new St,s=[],r=[];if(i.traverse(c=>{c.isLineSegments&&c.material===e&&r.push(c)}),r.forEach(c=>{let l=c.geometry.clone();for(let h of Object.keys(l.attributes))h!=="position"&&l.deleteAttribute(h);l.applyMatrix4(n.multiplyMatrices(t,c.matrixWorld)),s.push(l)}),s.length<2)return 0;let a=$i(s.map(c=>c.index?c.toNonIndexed():c));if(!a)return 0;let o=new tr(a,e);return o.raycast=()=>{},o.userData.noAO=!0,i.add(o),r.forEach(c=>{c.parent&&c.parent.remove(c),c.geometry.dispose()}),r.length}function Kp({M:i,tier:e,glowTex:t,dotTex:n}){let s={value:0},r=(v,_=.6,w=0,R={})=>{let x=new Jt({color:v,roughness:_,metalness:w,...R});return x.userData.th=[.4],x};function a(){let v=document.createElement("canvas");v.width=v.height=512;let _=v.getContext("2d");_.fillStyle="#b99a6e",_.fillRect(0,0,512,512);let w=7,R=()=>(w=w*16807%2147483647)/2147483647;for(let P=0;P<260;P++){let B=R()*512,T=.03+R()*.07;_.strokeStyle=R()>.5?`rgba(90,62,30,${T})`:`rgba(240,220,180,${T})`,_.lineWidth=.6+R()*2.2,_.beginPath(),_.moveTo(0,B);for(let U=0;U<=512;U+=32)_.lineTo(U,B+Math.sin(U*.012+P)*(2+R()*5));_.stroke()}for(let P=0;P<5;P++){let B=R()*512,T=R()*512,U=4+R()*7,I=_.createRadialGradient(B,T,0,B,T,U*2.4);I.addColorStop(0,"rgba(70,44,20,.55)"),I.addColorStop(1,"rgba(70,44,20,0)"),_.fillStyle=I,_.beginPath(),_.ellipse(B,T,U*2.6,U*1.3,0,0,6.3),_.fill()}let x=new Cn(v);x.colorSpace=gn,x.wrapS=x.wrapT=Bn,x.repeat.set(1/1.2,1/1.2),x.anisotropy=8;let A=new Jt({map:x,roughness:.82,metalness:0});return A.userData.th=[.45],A}let o=(v,_=1.5,w={})=>r(789776,.5,0,{emissive:v,emissiveIntensity:_,...w}),c={enclosure:r(8093831,.5,.6,{envMapIntensity:.7}),enclosureDark:r(2764082,.62,.5,{envMapIntensity:.6}),galv:r(11186618,.38,.9,{envMapIntensity:1.3}),blackPlastic:r(1184534,.42,.05),greyPlastic:r(4869975,.5,.05),whitePlastic:r(11118238,.55,.02),conduit:r(7304316,.62,.02),bluePlastic:r(3104680,.5,.02),orangePlastic:r(14711338,.5,.02),yellowPlastic:r(15319598,.5,.02),redPlastic:r(12728875,.5,.02),purple:r(8011716,.45,.05,{emissive:5909152,emissiveIntensity:.25}),green:r(3119703,.5,.05),copper:r(14256718,.25,1,{envMapIntensity:1.5}),copperHot:r(13201722,.3,1,{envMapIntensity:1.5,emissive:16742954,emissiveIntensity:.3}),aluminum:r(13225684,.3,1,{envMapIntensity:1.4}),brass:r(13214282,.32,1,{envMapIntensity:1.3}),rubber:r(855568,.85,0),plywood:a(),studs:i.cedar,concrete:i.concrete,slab:i.slab,drywall:i.drywall,steel:i.steel,pvc:i.pvc,castIron:r(2829617,.75,.6),clay:r(10115900,.9,0),hdpe:r(1316378,.35,.1,{envMapIntensity:1.2}),gravel:r(7301730,1,0),soil:r(3812382,1,0),insulPink:r(15311018,1,0),insulYellow:r(14861930,1,0),vermiculite:r(11569738,.95,.15),frost:r(15923199,.35,0,{emissive:12572415,emissiveIntensity:.25}),ice:i.ice,water:new Ri({color:2781104,roughness:.06,metalness:0,transparent:!0,opacity:.78,envMapIntensity:1.8,clearcoat:1}),sewage:new Ri({color:5916200,roughness:.2,metalness:0,transparent:!0,opacity:.9,envMapIntensity:1.2}),glassClear:new Ri({color:14674674,roughness:.03,metalness:0,transparent:!0,opacity:.22,envMapIntensity:2,clearcoat:1}),poly:new Ri({color:14542574,roughness:.35,metalness:0,transparent:!0,opacity:.28,envMapIntensity:1.4,side:Wn,depthWrite:!1}),led:(v=9425830,_=3)=>o(v,_),glow:o};[c.water,c.sewage,c.glassClear,c.poly].forEach(v=>{v.userData.th=[.3]});let l=(v,_,w,R,x,A={})=>(v.position.set(_,w,R),v.castShadow=A.cast!==!1,v.receiveShadow=A.receive!==!1,A.keep&&(v.userData.keep=!0),A.rot&&v.rotation.set(A.rot[0]||0,A.rot[1]||0,A.rot[2]||0),x&&x.add(v),v),h=(v,_,w,R,x=0,A=0,P=0,B,T={})=>{let U=T.r?new ws(v,_,w,2,Math.min(T.r,v/2,_/2,w/2)):new dn(v,_,w);return T.uv&&da(U,T.uv===!0?{}:T.uv),l(new Ue(U,R),x,A,P,B,T)},p=(v,_,w,R=0,x=0,A=0,P,B={})=>{let T=new en(B.r2??v,v,_,B.seg||16,1,!!B.open);return B.axis==="x"?T.rotateZ(Math.PI/2):B.axis==="z"&&T.rotateX(Math.PI/2),l(new Ue(T,w),R,x,A,P,B)},d=(v,_,w,R,x,A,P={})=>l(new Ue(new Hn(v,P.seg||16,P.seg2||12),_),w,R,x,A,P),u=(v,_,w)=>new F(v,_,w);return{time:s,mats:c,std:r,box:h,cyl:p,sphere:d,tube:(v,_,w,R,x={})=>{let A=new Oi(v.map(I=>I.isVector3?I:u(I[0],I[1],I[2])),!1,x.type||"catmullrom",x.tension??.3),P=A.getLength(),B=new Hi(A,x.seg||Math.max(8,Math.round(P*(x.density||14))),_,x.radial||8,!1),T=B.attributes.uv;for(let I=0;I<T.count;I++)T.setX(I,T.getX(I)*P);let U=l(new Ue(B,w),0,0,0,R,x);return U.userData.curve=A,U.userData.len=P,U},V:u,flow:(v,_={})=>{let w={value:_.level??1},R=new Jt({color:_.base??1382170,roughness:_.roughness??.45,metalness:_.metalness??.1,emissive:v,emissiveIntensity:_.intensity??2.2});return R.defines={USE_UV:""},R.userData.level=w,R.userData.th=[.6],R.onBeforeCompile=x=>{x.uniforms.uFlowT=s,x.uniforms.uFlowL=w,x.fragmentShader=x.fragmentShader.replace("#include <common>",`#include <common>
uniform float uFlowT; uniform float uFlowL;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        { float fd = fract(vUv.x * ${(_.dash??3).toFixed(2)} - uFlowT * ${((_.speed??.5)*(_.dash??3)).toFixed(2)});
          float fp = smoothstep(0.0, 0.18, fd) * (1.0 - smoothstep(0.42, 0.6, fd));
          totalEmissiveRadiance *= (${(_.rest??.12).toFixed(2)} + ${(_.gain??1).toFixed(2)} * fp) * uFlowL; }`)},R.customProgramCacheKey=()=>`flow${_.dash??3}_${_.speed??.5}_${_.rest??.12}_${_.gain??1}`,R},atlas:(v,_={})=>{let R=_.width||1024,x=4,A=4,P=0,B={};v.forEach(X=>{x+X.w+4>R&&(x=4,A+=P+4,P=0),B[X.key]={x,y:A,w:X.w,h:X.h,c:X},x+=X.w+4,P=Math.max(P,X.h)});let T=2**Math.ceil(Math.log2(A+P+4)),U=document.createElement("canvas");U.width=R,U.height=T;let I=U.getContext("2d"),k=X=>{let K=X.c;if(I.clearRect(X.x,X.y,X.w,X.h),K.bg&&(I.fillStyle=K.bg,I.fillRect(X.x,X.y,X.w,X.h)),K.draw){I.save(),I.translate(X.x,X.y),K.draw(I,X.w,X.h,K),I.restore();return}I.fillStyle=K.color||"#ece6da",I.textAlign=K.align||"center",I.textBaseline="middle";let ve=K.align==="left"?X.x+6:X.x+X.w/2;I.font=`${K.weight||600} ${K.size||Math.round(X.h*.62)}px ${K.font||"ui-monospace, Menlo, Consolas, monospace"}`,K.sub?(I.fillText(K.text,ve,X.y+X.h*.38),I.font=`500 ${Math.round((K.size||X.h*.62)*.5)}px ui-monospace, Menlo, Consolas, monospace`,I.globalAlpha=.75,I.fillText(K.sub,ve,X.y+X.h*.78),I.globalAlpha=1):I.fillText(K.text,ve,X.y+X.h/2+1)};Object.values(B).forEach(k);let j=new Cn(U);j.colorSpace=gn,j.anisotropy=8;let q=new Jt({map:j,emissiveMap:j,emissive:16777215,emissiveIntensity:_.emissive??.35,roughness:.6,transparent:!0,alphaTest:.02,depthWrite:!1});return q.userData.th=[.4],{plane:(X,K,ve,Ne=0,He=0,Qe=0,dt={})=>{let re=B[X],ye=K*(re.h/re.w),Le=new $t(K,ye),Se=Le.attributes.uv;for(let ee=0;ee<Se.count;ee++)Se.setXY(ee,(re.x+Se.getX(ee)*re.w)/R,1-(re.y+(1-Se.getY(ee))*re.h)/T);let ke=l(new Ue(Le,q),Ne,He,Qe,ve,{cast:!1,receive:!1,...dt});return ke.renderOrder=3,ke},set:(X,K,ve,Ne)=>{let He=B[X];K!==void 0&&(He.c.text=K),ve!==void 0&&(He.c.sub=ve),Ne&&Object.assign(He.c,Ne),k(He),j.needsUpdate=!0},mat:q,tex:j}},particles:(v,_={})=>{let w=e>=1?v:Math.ceil(v*.45),R=new Vt,x=new Float32Array(w*3);R.setAttribute("position",new Nt(x,3));let A=new pi({size:_.size??.05,map:n,color:new ct(_.color??16777215).multiplyScalar(_.gain??1.6),transparent:!0,depthWrite:!1,blending:_.normal?Gr:Sn,toneMapped:!1,sizeAttenuation:!0,opacity:_.opacity??1}),P=new Ai(R,A);return P.frustumCulled=!1,P.userData.noAO=!0,P.userData.keep=!0,P.raycast=()=>{},P.userData.n=w,P.userData.pos=x,P},sprite:(v,_,w,R,x,A,P=.8)=>{let B=new wi(new fi({map:t,color:v,transparent:!0,depthWrite:!1,blending:Sn,opacity:P}));return B.position.set(w,R,x),B.scale.set(_,_,1),B.userData.noAO=!0,B.userData.keep=!0,B.raycast=()=>{},A&&A.add(B),B},bake:v=>{let _=new Map,w=[];v.updateWorldMatrix(!0,!0);let R=new St().copy(v.matrixWorld).invert(),x=new St,A=P=>{for(let B=P;B&&B!==v;B=B.parent)if(B.userData.keep)return!0;return!1};return v.traverse(P=>{if(!P.isMesh||P.isInstancedMesh||A(P)||Array.isArray(P.material)||P.children.length)return;let B=P.material.uuid+"|"+ +P.castShadow+ +P.receiveShadow+"|"+P.renderOrder,T=_.get(B);T||_.set(B,T={mat:P.material,cast:P.castShadow,recv:P.receiveShadow,ro:P.renderOrder,geos:[]});let U=P.geometry.index?P.geometry.toNonIndexed():P.geometry.clone();Object.keys(U.attributes).forEach(I=>{I!=="position"&&I!=="normal"&&I!=="uv"&&U.deleteAttribute(I)}),U.attributes.uv||U.setAttribute("uv",new Nt(new Float32Array(U.attributes.position.count*2),2)),U.applyMatrix4(x.multiplyMatrices(R,P.matrixWorld)),T.geos.push(U),w.push(P)}),_.forEach(P=>{let B=$i(P.geos);if(!B)return;let T=new Ue(B,P.mat);T.castShadow=P.cast,T.receiveShadow=P.recv,T.renderOrder=P.ro,T.userData.keep=!0,v.add(T),P.geos.forEach(U=>U.dispose())}),w.forEach(P=>{P.parent&&P.parent.remove(P),P.geometry.dispose()}),v},place:l}}var lr=new F(2.8,-1.25,-3.945),ld=.0266,fo=i=>.3-i*ld,ad=[[15,1],[15,1],[20,1],[15,1],[15,1],[20,1],[15,1],[15,1],[40,2,"range","RANGE"],[30,2,"dryer","DRYER"],[40,2,"hp","HEAT PUMP"],[30,2,"base","BASEBOARD"],[15,1],[15,1]],od=[[15,1,null,null,"AFCI"],[15,1,null,null,"AFCI"],[20,1,null,null,"GFCI"],[20,1],[15,1],[15,1],[20,1],[15,1],[30,2,"wh","WATER HTR"],[30,2,"ac","A/C"],[50,2,"ev","EV CHARGER"],[60,2,"spa","HOT TUB"],[40,2,"suite","SUITE"]];function Qp({kit:i}){let{box:e,cyl:t,tube:n,mats:s,atlas:r}=i,a=new lt,o=2.8,c=-4.3;t(.034,3.7,s.galv,o,3.6,c,a),t(.06,.16,s.galv,o,5.5,c-.02,a,{r2:.03}),e(.1,.05,.16,s.galv,o,5.44,c-.05,a,{rot:[.5,0,0]}),[2.2,3.4,4.6].forEach(d=>e(.12,.03,.2,s.galv,o,d,c+.1,a,{cast:!1})),e(.3,.44,.12,s.enclosure,o,1.45,c+.02,a,{r:.012}),t(.092,.03,s.galv,o,1.5,c-.05,a,{axis:"z",seg:28}),t(.085,.085,s.glassClear,o,1.5,c-.1,a,{axis:"z",seg:28,cast:!1}),t(.074,.006,s.whitePlastic,o,1.5,c-.075,a,{axis:"z",seg:28,cast:!1});let l=r([{key:"kwh",text:"08431",sub:"kWh \xB7 CL200 \xB7 240 V",w:192,h:96,size:46,color:"#0e1014"}],{width:256,emissive:.15}),h=l.plane("kwh",.1,a,o,1.5,c-.0795);h.rotation.y=Math.PI;let p=t(.05,.002,s.aluminum,o,1.452,c-.09,a,{seg:24,cast:!1,keep:!0});return t(.03,1.02,s.conduit,o,.72,c,a),e(.075,.13,.075,s.conduit,o,.17,c,a,{r:.012}),t(.03,.34,s.conduit,o,.15,c+.17,a,{axis:"z"}),n([[o+.11,1.24,c+.03],[o+.13,.6,c+.06],[o+.14,.05,c-.12],[o+.14,-.25,c-.16]],.006,s.copper,a,{radial:6}),t(.011,.5,s.copper,o+.14,-.05,c-.16,a,{seg:8}),i.bake(a),a.add(p),{group:a,disc:p,labels:l}}function jp({kit:i}){let{box:e,cyl:t,tube:n,mats:s,flow:r,atlas:a,V:o}=i,c=new lt;c.position.copy(lr);let l=new lt;c.add(l);let h=[];[15,20,30,40,50,60].forEach(ee=>h.push({key:"a"+ee,text:String(ee),w:96,h:56,size:40,color:"#f4f1ea"})),h.push({key:"a200",text:"200",w:144,h:72,size:56,color:"#f4f1ea"}),[...ad,...od].filter(ee=>ee[3]).forEach(ee=>h.push({key:"n"+ee[2],text:ee[3],w:224,h:44,size:26,color:"#f4bd7e"})),h.push({key:"AFCI",text:"AFCI",w:112,h:44,size:26,color:"#9fc4ff"},{key:"GFCI",text:"GFCI",w:112,h:44,size:26,color:"#ffe08a"}),h.push({key:"rating",text:"200 A \xB7 120/240 V \xB7 1\xD8 3W",w:420,h:44,size:24,color:"#cfd4da"}),h.push({key:"mon",w:320,h:200,text:"49 A",sub:"of a 100 A service",ratio:.49,draw(ee,We,le,pe){ee.fillStyle="#05070b",ee.fillRect(0,0,We,le);let te=pe.ratio>.9?"#ff6b4f":pe.ratio>.7?"#f4bd7e":"#8fd3a6";ee.textAlign="left",ee.textBaseline="middle",ee.fillStyle="#8b93a1",ee.font="600 17px ui-monospace, Menlo, monospace",ee.fillText("DEMAND",20,30),ee.fillStyle=te,ee.font="700 74px ui-monospace, Menlo, monospace",ee.fillText(pe.text,18,92),ee.fillStyle="#cfd4da",ee.font="500 19px ui-monospace, Menlo, monospace",ee.fillText(pe.sub,20,146),ee.fillStyle="#1c222c",ee.fillRect(20,168,We-40,14),ee.fillStyle=te,ee.fillRect(20,168,(We-40)*Math.min(1,pe.ratio),14)}}),h.push({key:"dir",w:300,h:420,draw(ee,We,le){ee.fillStyle="#e9e4d6",ee.fillRect(0,0,We,le),ee.fillStyle="#1a1c20",ee.font="700 20px ui-monospace, Menlo, monospace",ee.textAlign="left",ee.textBaseline="middle",ee.fillText("CIRCUIT DIRECTORY",14,24),ee.strokeStyle="rgba(20,22,26,.45)",ee.lineWidth=1,ee.font="500 13px ui-monospace, Menlo, monospace",["KITCHEN PLUGS","BEDROOM 1 \xB7 AFCI","BEDROOM 2 \xB7 AFCI","BATH \xB7 GFCI","LIVING","FURNACE","RANGE 40A","DRYER 30A","WATER HTR 30A","A/C 30A","EV CHARGER 50A","HOT TUB 60A","HEAT PUMP 40A","SUITE 40A"].forEach((te,he)=>{let xe=54+he*25;ee.beginPath(),ee.moveTo(12,xe+12),ee.lineTo(We-12,xe+12),ee.stroke(),ee.fillText(String(he+1).padStart(2,"0")+"  "+te,14,xe)})}});let p=a(h,{width:1024,emissive:.22});e(2,1.9,.03,s.plywood,.2,.1,-.015,l,{uv:{ox:1,oy:1}}),e(2.3,2.4,.1,s.concrete,.2,.05,-.085,l,{cast:!1,uv:!0});let d=.4,u=1,f=.1,y=.004;e(d,u,y,s.enclosureDark,0,0,y/2,l),e(y,u,f,s.enclosure,-d/2,0,f/2,l),e(y,u,f,s.enclosure,d/2,0,f/2,l),e(d,y,f,s.enclosure,0,u/2,f/2,l),e(d,y,f,s.enclosure,0,-u/2,f/2,l),t(.03,.92,s.conduit,0,u/2+.46,.045,l),t(.04,.03,s.enclosure,0,u/2+.012,.045,l),e(.19,.125,.026,s.blackPlastic,.42,.3,.013,l,{r:.006});let g=p.plane("mon",.168,c,.42,.3,.0268,{keep:!0});n([[.325,.3,.012],[.27,.31,.014],[.215,.33,.03]],.004,s.rubber,l,{radial:6}),e(.11,.075,.058,s.blackPlastic,0,.39,.035,l,{r:.004});let m=e(.034,.024,.022,i.std(1908773,.4,.1,{emissive:16039294,emissiveIntensity:0}),0,.39,.072,c,{r:.003,keep:!0});p.plane("a200",.05,l,0,.365,.0646),[-.03,.03].forEach(ee=>e(.022,.022,.03,s.brass,ee,.447,.03,l)),[[-.03,s.rubber],[.03,i.std(9183002,.6)],[.085,s.whitePlastic]].forEach(([ee,We],le)=>n([[le===2?.02:ee*.4,.5,.045],[ee*.8,.485,.04],[ee,.46,.032]],.0075,We,l,{radial:8,seg:10}));let M=s.copperHot.clone(),S=[-.012,.012].map(ee=>e(.016,.74,.005,M,ee,-.02,.012,c,{keep:!0,cast:!1}));[-.03,.03].forEach((ee,We)=>e(.016,.06,.005,M,ee*.7,.36,.012,l,{cast:!1}));let v={},_=s.greyPlastic,w=s.rubber,R=i.std(9183002,.6),x=s.whitePlastic,A=(ee,We)=>{let le=0;ee.forEach(([pe,te,he,xe,Xe])=>{let Ve=te===2?(fo(le)+fo(le+1))/2:fo(le),st=te===2?ld*2-.002:ld-.002,it=We*.076;e(.088,st,.055,s.blackPlastic,it,Ve,.0325,l,{r:.0025,cast:!1});let Q=We*.047,_t=_;he&&(_t=i.std(4869975,.5,.05,{emissive:16753981,emissiveIntensity:0}),v[he]={handle:_t,level:null,pos:o(it,Ve,.06),amps:pe}),e(.015,te===2?st*.72:.0125,.013,_t,Q,Ve,.0655,he?c:l,{r:.002,cast:!1,keep:!!he}),p.plane("a"+pe,.02,l,We*.07,Ve+(te===2?.009:0),.0603),xe&&p.plane("n"+he,.05,l,We*.087,Ve-.011,.0603),Xe&&(p.plane(Xe,.026,l,We*.099,Ve,.0603),e(.007,.007,.004,Xe==="AFCI"?s.bluePlastic:s.yellowPlastic,We*.118,Ve,.062,l,{cast:!1}));for(let vt=0;vt<te;vt++){let H=le+vt,E=fo(H);e(.03,.007,.004,s.copper,We*.024+(H%2?.012:-.012)*.3,E,.016,l,{cast:!1});let ae=We*(.146+H%4*.0045),ue=.026+H%3*.008;n([[We*.121,E,.034],[We*.134,E+.002,ue+.004],[ae,E+.02,ue],[ae,.3+H%5*.01,ue],[We*(.1+H%6*.012),.492,.03+H%2*.04]],.0023,te===2&&vt===1?R:w,l,{radial:5,seg:14,cast:!1})}le+=te})};A(ad,-1),A(od,1),[-1,1].forEach(ee=>{e(.012,.52,.008,s.aluminum,ee*.176,-.02,.012,l,{cast:!1});for(let We=0;We<22;We++)t(.0034,.004,s.galv,ee*.176,.22-We*.0225,.018,l,{axis:"z",seg:6,cast:!1});for(let We=0;We<9;We++){let le=.2-We*.05;n([[ee*.176,le,.02],[ee*.164,le+.03,.05+We%3*.008],[ee*.162,.33,.055+We%3*.008],[ee*(.06+We*.012),.492,.07]],.0023,x,l,{radial:5,seg:12,cast:!1})}}),e(.36,.01,.004,s.aluminum,0,-.3,.008,l,{cast:!1}),e(.18,.012,.008,s.brass,-.05,-.43,.012,l,{cast:!1}),n([[-.1,-.43,.02],[-.13,-.47,.04],[-.13,-.56,.04],[-.2,-.75,.012],[-.7,-.82,.008]],.004,s.copper,l,{radial:6});let P=new lt;P.userData.keep=!0,c.add(P);let B=.0585,T=s.enclosure;e(.07,.98,.003,T,-.159,0,B,P),e(.07,.98,.003,T,.159,0,B,P),e(.056,.66,.003,T,0,-.02,B,P),e(.248,.062,.003,T,0,.459,B,P),e(.064,.094,.003,T,-.092,.381,B,P),e(.064,.094,.003,T,.092,.381,B,P),e(.248,.018,.003,T,0,.323,B,P),e(.248,.292,.003,T,0,-.344,B,P);let U=p.plane("rating",.2,P,0,.462,B+.002),I=new lt;I.userData.keep=!0,I.position.set(-d/2,0,f+.002),c.add(I),e(d,u,.003,s.enclosure,d/2,0,0,I);let k=p.plane("dir",.24,I,d/2,.02,-.003);k.rotation.y=Math.PI,e(.012,.06,.012,s.galv,d-.02,0,.006,I),I.rotation.y=-2.05;let j={15:s.whitePlastic,20:s.yellowPlastic,30:s.orangePlastic,40:s.rubber,50:s.rubber,60:s.rubber},q={15:r(16763274,{base:12170667,intensity:.7,dash:2.2,speed:.9,rest:0,gain:1,roughness:.6}),20:r(16758863,{base:13215008,intensity:.7,dash:2.2,speed:.9,rest:0,gain:1,roughness:.6})},Z=.955,W=0,X=(ee,We,le)=>{let pe=W++,te=-.17+pe%13*.028,he=.028+pe%2*.042,xe=ee>=40?.0085:ee===30?.0065:.0052,Xe=[[te,.5,he],[te,.66+pe%3*.03,he],[te*1.4,Z-.06,he+.05],[te*1.6,Z,he+.16+pe%4*.03]],Ve=.3+pe%7*.035,st=le==="south"?[[-.6,Z,Ve],[-2.2,Z,Ve],[-5.4,Z,Ve+.2]]:le==="north"?[[.6,Z,Ve],[1.6,Z,Ve],[2.1,Z,Ve+1.2],[2.1,Z,5.5]]:le==="east"?[[te*1.2,Z,.9],[te,Z,3.2],[te+.6,Z,7.4]]:le==="up"?[[-.42,Z+.1,.3],[-.42,Z+.9,.34]]:[[.5,Z,.2],[.62,Z+.02,.02],[.62,Z+.02,-.4]],it=j[ee];We&&v[We]?(it=r(16753981,{base:1513757,intensity:2.6,dash:1.6,speed:1.1,rest:0,gain:1,level:0}),v[We].level=it.userData.level):q[ee]&&(it=q[ee]),n([...Xe,...st],xe,it,l,{radial:7,density:9,tension:.35,cast:pe%3===0})},K=["south","north","south","east","north","south","north","south"];ad.filter(ee=>!ee[2]).forEach((ee,We)=>X(ee[0],null,K[We%K.length])),od.filter(ee=>!ee[2]).forEach((ee,We)=>X(ee[0],null,K[(We+3)%K.length])),X(40,"range","up"),X(30,"dryer","south"),X(40,"hp","south"),X(30,"base","north"),X(30,"wh","south"),X(30,"ac","out"),X(50,"ev","east"),X(60,"spa","out"),X(40,"suite","north"),e(2.4,.02,.09,s.studs,-.4,Z+.012,.5,l,{uv:!0,cast:!1});let ve=o(.72,-.2,0);e(.06,.098,.062,s.bluePlastic,ve.x,ve.y,.031,l,{r:.004});let Ne=new lt;Ne.position.set(ve.x+.012,ve.y-.004,.118),Ne.rotation.set(.12,-.5,.06),Ne.userData.keep=!0,c.add(Ne),e(.034,.104,.024,s.whitePlastic,0,0,0,Ne,{r:.004}),e(.04,.118,.0016,s.galv,0,0,.0128,Ne),[.028,-.028].forEach(ee=>{e(.004,.011,.002,s.rubber,-.006,ee,.0125,Ne,{cast:!1}),e(.004,.011,.002,s.rubber,.006,ee,.0125,Ne,{cast:!1})}),[.012,-.012].forEach(ee=>{t(.0035,.004,s.brass,.0185,ee,-.004,Ne,{axis:"x",seg:8}),t(.0035,.004,s.aluminum,-.0185,ee,-.004,Ne,{axis:"x",seg:8})}),n([[ve.x-.01,.62,.012],[ve.x-.012,.2,.014],[ve.x-.008,ve.y+.05,.02]],.0058,s.greyPlastic,l,{radial:7});let He=[];[[-1,s.aluminum],[1,s.aluminum]].forEach(([ee,We])=>{let le=o(ve.x+ee*.03,ve.y+.012*ee+.02,.085+(ee>0?.012:0));n([[ve.x-.008+ee*.004,ve.y+.045,.022],[ve.x+ee*.02,ve.y+.05,.05],[le.x,le.y+.016,le.z]],.0019,We,l,{radial:6,seg:12,cast:!1});let pe=t(.0078,.027,s.purple,le.x,le.y,le.z,c,{seg:12,keep:!0});He.push(pe),t(.0086,.006,s.purple,le.x,le.y+.0135,le.z,l,{seg:12}),n([[le.x,le.y+.014,le.z],[le.x+ee*.012,le.y+.03,le.z+.012],[ve.x+.012+ee*.026,ve.y+.006*ee,.1],[ve.x+.012+ee*.02,ve.y-.004+.012*ee,.112]],.0017,s.copper,l,{radial:6,seg:14,cast:!1})}),i.bake(l);let Qe={meter:o(2.8,1.5,-4.42),main:lr.clone().add(o(0,.39,.075)),bus:lr.clone().add(o(0,-.06,.02)),branch:lr.clone().add(o(-.076,fo(3),.06)),range:lr.clone().add(v.range.pos),ev:lr.clone().add(v.ev.pos),spa:lr.clone().add(v.spa.pos),alu:lr.clone().add(o(ve.x+.03,ve.y+.03,.09)),afci:lr.clone().add(o(.099,fo(.5),.06)),load:lr.clone().add(o(.33,.35,.03))},dt={fx:2.8,fz:-3.9,time:19.4,cut:0,ghost:0,ground:1,orbit:.012},re=[{...dt,radius:15,theta:3.42,phi:1.4,ty:2.8,fz:-4.2,dof:0,orbit:.03,time:15.5},{...dt,radius:3.4,theta:3.5,phi:1.72,ty:1.95,fz:-4.35,dof:.8,time:15.5},{...dt,radius:1.5,theta:.3,phi:1.44,ty:-1,dof:1.2},{...dt,radius:1.45,theta:-.28,phi:1.47,ty:-1.24,dof:1.3},{...dt,radius:1.75,theta:.34,phi:1.74,ty:-.98,fz:-3.8,dof:1.1},{...dt,radius:1.15,theta:1,phi:1.5,ty:-1.3,fx:3.45,dof:1},{...dt,radius:1.85,theta:.2,phi:1.6,ty:-.98,fx:3,fz:-3.8,dof:1}],ye=new Set(["range","dryer","ac"]),Le="",Se=0,ke=["range","ev","spa"];return{name:"panel",group:c,anchors:Qe,shots:re,hides:ee=>ee.sys.electrical?ee.sys.electrical.meshes:[],input(ee){if(ee&&(ee.on&&(ye=new Set(ee.on)),ee.amps!==void 0&&ee.service)){let We=`${Math.round(ee.amps)} A`,le=`of a ${ee.service} A service`;We+le!==Le&&(Le=We+le,p.set("mon",We,le,{ratio:ee.amps/ee.service}))}},light(ee){return ee===0?{pos:[2.2,3.4,-7.4],at:[2.8,1.6,-4.3],power:0}:ee===1?{pos:[2.2,3.4,-7.4],at:[2.8,1.6,-4.3],power:.55,fill:.3}:ee===5?{pos:[2.9,-.45,-2.2],at:[3.52,-1.45,-3.9],power:.8}:{pos:[1.5,-.5,-1.7],at:[2.8,-1.2,-3.9],power:1}},update({step:ee,k:We,t:le,dt:pe,snap:te}){let he=te?1:1-Math.exp(-pe*5);Se=nt(Se,ee===3||ee===4?1:0,he);let xe=Et(0,1,Se);P.position.set(.52*xe,-.99*xe,.2*Math.sin(Math.PI*xe)+.075*xe),P.rotation.set(-.13*xe,0,-.05*xe),M.emissiveIntensity=.08+.26*xe+(ee===3?.12*Math.sin(le*2.2):0),m.material.emissiveIntensity=ee===2?.4+.2*Math.sin(le*3):.06;let Xe=ee===3?1:ee===6?.35:.12;Object.values(q).forEach(Ve=>{Ve.userData.level.value=nt(Ve.userData.level.value,Xe,he)}),Object.entries(v).forEach(([Ve,st])=>{let it=ee===4?ke.includes(Ve)?1:0:ee===6&&ye.has(Ve)?1:0;st.level&&(st.level.value=nt(st.level.value,it,he)),st.handle.emissiveIntensity=nt(st.handle.emissiveIntensity,it*2.4,he)}),He.forEach((Ve,st)=>{Ve.scale.setScalar(ee===5?1+.08*Math.sin(le*4+st):1)}),U.visible=xe<.9}}}var Hl=Math.atan2(3.6,5),ud=Math.cos(Hl),em=Math.sin(Hl),Ay=3.6/5,hh=9.9324,Yr=i=>hh-Math.abs(i)*Ay,Gs=(i,e,t=0,n=new F)=>n.set(i*ud+e*em,hh-i*em+e*ud,t),Gt=.2,Ry=6.805,Bl=Array.from({length:13},(i,e)=>-3.6+e*.6),In={z0:-2.4,z1:-.6,y0:4.35,y1:5.75},po={x:5.466,y:5.723},Xn={x:.75,z:.95,rx:.52,rz:.44},vn={x:2.55,z:-.9},qr=4.78,cd=6.8;function cr(i,e,t,n={}){let s=document.createElement("canvas");s.width=i,s.height=e,t(s.getContext("2d"),i,e);let r=new Cn(s);return n.color!==!1&&(r.colorSpace=gn),r.wrapS=r.wrapT=n.clamp?Qi:Bn,r.anisotropy=8,n.repeat&&r.repeat.set(n.repeat[0],n.repeat[1]),r}function tm({kit:i,H:e,tier:t}){let{box:n,cyl:s,tube:r,mats:a,std:o,atlas:c,V:l}=i,h=new lt;h.name="attic";let p=new lt;h.add(p);let d=t===0,u=wn(17),f=new F,y=new F,g=(b,$)=>{let oe=new lt;return oe.position.set(0,hh,0),oe.rotation.set(0,$?Math.PI:0,-Hl),b.add(oe),oe},m=g(p),M=g(p,!0),S=new Jt({roughness:.86,map:cr(512,256,(b,$,oe)=>{b.fillStyle="#b48d58",b.fillRect(0,0,$,oe);let D=wn(21);for(let z=0;z<1500;z++){let Y=D()*$,ne=D()*oe,J=12+D()*36,se=3+D()*8,Re=D();b.fillStyle=Re<.4?`rgba(118,80,38,${.22+D()*.3})`:Re<.85?`rgba(218,182,124,${.22+D()*.3})`:`rgba(78,52,24,${.35+D()*.3})`,b.save(),b.translate(Y,ne),b.rotate((D()-.5)*1.2+(D()>.5?0:Math.PI/2)),b.fillRect(-J/2,-se/2,J,se),b.restore()}b.fillStyle="rgba(48,30,14,.85)",b.fillRect(0,0,$,2),b.fillRect(0,0,2,oe)},{repeat:[1/2.4,1/1.2]})});S.userData.th=[.4];let v=o(16777215,.78,0,{map:cr(256,256,(b,$,oe)=>{b.fillStyle="#cdae78",b.fillRect(0,0,$,oe);let D=wn(33);for(let z=0;z<70;z++){let Y=D()*oe,ne=.06+D()*.12;b.strokeStyle=D()>.4?`rgba(122,84,40,${ne})`:`rgba(246,226,182,${ne})`,b.lineWidth=.6+D()*2.4,b.beginPath(),b.moveTo(0,Y);for(let J=0;J<=$;J+=16)b.lineTo(J,Y+Math.sin(J*.024+z)*2.5);b.stroke()}for(let z=0;z<2;z++){let Y=D()*$,ne=D()*oe,J=b.createRadialGradient(Y,ne,0,Y,ne,9);J.addColorStop(0,"rgba(96,58,24,.7)"),J.addColorStop(1,"rgba(96,58,24,0)"),b.fillStyle=J,b.fillRect(Y-12,ne-6,24,12)}},{repeat:[1/1.6,1/.4]})}),_=cr(256,256,(b,$,oe)=>{b.fillStyle="#808080",b.fillRect(0,0,$,oe);let D=wn(5);for(let z=0;z<700;z++){let Y=D()*$,ne=D()*oe,J=2+D()*10,se=D()<.5?255:0;for(let Re of[-$,0,$])for(let De of[-oe,0,oe]){if(Y+Re<-J||Y+Re>$+J||ne+De<-J||ne+De>oe+J)continue;let ze=b.createRadialGradient(Y+Re,ne+De,0,Y+Re,ne+De,J);ze.addColorStop(0,`rgba(${se},${se},${se},0.22)`),ze.addColorStop(1,`rgba(${se},${se},${se},0)`),b.fillStyle=ze,b.fillRect(Y+Re-J,ne+De-J,J*2,J*2)}}},{color:!1,repeat:[2.5,2.5]}),w=o(13483416,1,0,{bumpMap:_,bumpScale:3}),R=cr(512,512,(b,$,oe)=>{b.fillStyle="#000",b.fillRect(0,0,$,oe);let D=wn(8);b.strokeStyle="#fff",b.lineCap="round";for(let z=0;z<900;z++){let Y=D()*$,ne=D()*oe,J=D()*6.28,se=6+D()*24;b.globalAlpha=.3+D()*.6,b.lineWidth=.8+D()*1.4;let Re=Y+Math.cos(J)*se,De=ne+Math.sin(J)*se;b.beginPath(),b.moveTo(Y,ne),b.lineTo(Re,De);for(let ze=1;ze<5;ze++){let Je=ze/5,Be=Y+(Re-Y)*Je,fe=ne+(De-ne)*Je,rt=se*.32*(1-Je)+2;b.moveTo(Be,fe),b.lineTo(Be+Math.cos(J+.7)*rt,fe+Math.sin(J+.7)*rt),b.moveTo(Be,fe),b.lineTo(Be+Math.cos(J-.7)*rt,fe+Math.sin(J-.7)*rt)}b.stroke()}b.globalAlpha=.28,b.fillStyle="#fff",b.fillRect(0,0,$,oe)},{color:!1,repeat:[4,4]}),x=o(15660543,.45,0,{alphaMap:R,transparent:!0,depthWrite:!1,emissive:11455487,emissiveIntensity:.12,side:Wn}),A=o(15923199,.35,0,{emissive:12572415,emissiveIntensity:.22}),P=o(13226970,.62,.02),B=o(16777215,.55,.3,{map:cr(128,128,(b,$,oe)=>{b.fillStyle="#d7d5cf",b.fillRect(0,0,$,oe),b.fillStyle="#3a3c40";for(let D=0;D<4;D++)for(let z=0;z<6;z++)b.fillRect(8+z*20+D%2*10,12+D*32,6,14);b.fillStyle="rgba(0,0,0,.18)",b.fillRect(0,0,$,3)},{repeat:[1/.16,1/.16]})}),T=o(14209734,.55,.12,{envMapIntensity:.4,map:cr(16,64,(b,$,oe)=>{let D=b.createLinearGradient(0,0,$,0);D.addColorStop(0,"#5e6268"),D.addColorStop(.35,"#b9bec4"),D.addColorStop(.7,"#9a9fa6"),D.addColorStop(1,"#5e6268"),b.fillStyle=D,b.fillRect(0,0,$,oe)},{repeat:[34,1]}),envMapIntensity:1.1}),U=o(11581636,.95,0,{bumpMap:_,bumpScale:1.2}),I=new Ri({color:11849691,roughness:.08,metalness:0,transparent:!0,opacity:.72,clearcoat:1,clearcoatRoughness:.04,envMapIntensity:.75,bumpMap:_,bumpScale:.6});I.userData.th=[.1];let k=o(15265525,.28,0,{emissive:10465988,emissiveIntensity:.12}),j=new Ri({roughness:.14,metalness:.25,clearcoat:1,clearcoatRoughness:.05,envMapIntensity:1.4,map:cr(512,384,(b,$,oe)=>{b.fillStyle="#b9bfc8",b.fillRect(0,0,$,oe);let D=10,z=6,Y=5,ne=($-2*Y)/D,J=(oe-2*Y)/z;for(let se=0;se<D;se++)for(let Re=0;Re<z;Re++){let De=Y+se*ne+1.5,ze=Y+Re*J+1.5,Je=ne-3,Be=J-3,fe=6;b.fillStyle="#0c1830",b.beginPath(),b.moveTo(De+fe,ze),b.lineTo(De+Je-fe,ze),b.lineTo(De+Je,ze+fe),b.lineTo(De+Je,ze+Be-fe),b.lineTo(De+Je-fe,ze+Be),b.lineTo(De+fe,ze+Be),b.lineTo(De,ze+Be-fe),b.lineTo(De,ze+fe),b.closePath(),b.fill(),b.fillStyle="rgba(150,165,190,.18)";for(let rt=1;rt<12;rt++)b.fillRect(De,ze+Be*rt/12,Je,.6);b.fillStyle="rgba(196,204,216,.75)";for(let rt=1;rt<=3;rt++)b.fillRect(De+Je*rt/4-.7,ze,1.4,Be)}},{clamp:!0})});j.userData.th=[.17];let q=new Jt({color:11187390,roughness:.9,transparent:!0,depthWrite:!1,map:cr(256,256,(b,$,oe)=>{let D=b.createLinearGradient(0,0,0,oe);D.addColorStop(0,"rgba(214,224,232,0.2)"),D.addColorStop(.45,"rgba(214,224,232,0.42)"),D.addColorStop(1,"rgba(224,232,240,0.74)"),b.fillStyle=D,b.fillRect(0,0,$,oe);let z=wn(4);b.globalCompositeOperation="destination-out";for(let Y=0;Y<26;Y++){let ne=z()*$,J=z()*oe*.6,se=30+z()*140;b.lineWidth=1+z()*2.2,b.strokeStyle="rgba(0,0,0,.75)",b.beginPath(),b.moveTo(ne,J),b.bezierCurveTo(ne+(z()-.5)*8,J+se*.4,ne+(z()-.5)*8,J+se*.7,ne+(z()-.5)*6,J+se),b.stroke()}b.globalCompositeOperation="source-over";for(let Y=0;Y<260;Y++){let ne=z()*$,J=oe*Math.sqrt(z()),se=.8+z()*2.4;b.fillStyle=`rgba(250,252,255,${.4+z()*.5})`,b.beginPath(),b.arc(ne,J,se,0,6.3),b.fill()}b.fillStyle="rgba(240,246,252,.8)",[[0,oe],[$,oe]].forEach(([Y,ne])=>{let J=b.createRadialGradient(Y,ne,0,Y,ne,70);J.addColorStop(0,"rgba(244,248,252,.9)"),J.addColorStop(1,"rgba(244,248,252,0)"),b.fillStyle=J,b.fillRect(Y-70,ne-70,140,140)})},{clamp:!0})});q.userData.th=[.5];let Z=.3,W=-3.3,X=5.88,K=3.6,ve=new Jt({roughness:.9,transparent:!0,depthWrite:!1,map:cr(512,324,(b,$,oe)=>{let D=J=>(Z-J)/(Z-W)*$,z=J=>(X-J)/(X-K)*oe,Y=wn(9),ne=(J,se,Re,De,ze)=>{let Je=b.createLinearGradient(0,se,0,se+Re);Je.addColorStop(0,`rgba(186,178,160,${ze*.32})`),Je.addColorStop(1,"rgba(206,196,176,0)"),b.fillStyle=Je,b.beginPath(),b.moveTo(J-De/2,se);for(let Be=0;Be<=8;Be++)b.lineTo(J-De/2+Math.sin(Be*1.7+J)*1.5-De*.2*Be/8,se+Re*Be/8);for(let Be=8;Be>=0;Be--)b.lineTo(J+De/2+Math.sin(Be*1.3+J)*1.5+De*.15*Be/8,se+Re*Be/8);b.closePath(),b.fill()};for(let J=0;J<22;J++)ne(D(.1-Y()*3.2),0,30+Y()*120,4+Y()*16,.25+Y()*.35);[In.z0-.06,In.z1+.06].forEach(J=>{ne(D(J),z(5.86),90,18,.5),ne(D(J)+(Y()-.5)*6,z(4.3),150,14,.55)});for(let J=0;J<14;J++)ne(D(In.z0+.05+Y()*1.7),z(4.3)+Y()*6,30+Y()*120,2+Y()*7,.2+Y()*.35);b.clearRect(D(In.z1),z(In.y1),D(In.z0)-D(In.z1),z(In.y0)-z(In.y1))},{clamp:!0})});ve.userData.th=[.3];let Ne=o(16777215,.92,0,{map:cr(128,256,(b,$,oe)=>{b.fillStyle="#4b3a29",b.fillRect(0,0,$,oe);let D=wn(12);for(let z=0;z<40;z++){let Y=D()*$;b.strokeStyle=D()>.5?`rgba(20,14,8,${.3+D()*.4})`:`rgba(120,98,70,${.2+D()*.3})`,b.lineWidth=.6+D()*1.8,b.beginPath(),b.moveTo(Y,0);for(let ne=0;ne<=oe;ne+=16)b.lineTo(Y+Math.sin(ne*.05+z)*2,ne);b.stroke()}for(let z=0;z<26;z++){let Y=D()*$,ne=D()*oe,J=3+D()*10,se=8+D()*30,Re=b.createRadialGradient(Y,ne,0,Y,ne,se);Re.addColorStop(0,`rgba(14,10,6,${.55+D()*.35})`),Re.addColorStop(1,"rgba(14,10,6,0)"),b.fillStyle=Re,b.beginPath(),b.ellipse(Y,ne,J,se,0,0,6.3),b.fill()}for(let z=0;z<7;z++)b.fillStyle=`rgba(206,200,188,${.45+D()*.3})`,b.fillRect(D()*$,D()*oe,2+D()*6,4+D()*14)},{repeat:[1/.3,1/.3]})}),He=a.galv,Qe=o(13289149,.5,.12,{envMapIntensity:.35}),dt=new Ri({color:2046544,roughness:.04,metalness:0,transparent:!0,opacity:.86,clearcoat:1,envMapIntensity:1.1});dt.userData.th=[.3];let re=i.flow(5220095,{base:924714,intensity:.35,dash:5,speed:.2,rest:.3,gain:1,roughness:.08}),ye=c([{key:"ruler",w:72,h:664,draw(b,$,oe){b.fillStyle="#e6d9b0",b.fillRect(0,0,$,oe);let D=z=>oe-z/600*oe;b.fillStyle="rgba(143,211,166,.9)",b.fillRect(0,D(445),$,D(400)-D(445)),b.fillStyle="#1a1c20",b.textAlign="right",b.textBaseline="middle";for(let z=0;z<=600;z+=10){let Y=D(z),ne=z%100===0?22:z%50===0?15:8;b.fillRect(0,Y-.8,ne,1.6)}b.font="700 18px ui-monospace, Menlo, monospace";for(let z=100;z<600;z+=100)z!==400&&b.fillText(String(z),$-3,D(z)+10);b.font="800 17px ui-monospace, Menlo, monospace",b.fillText("400",$-3,D(400)-12),b.fillText("R-50",$-3,D(400)-32),b.font="700 14px ui-monospace, Menlo, monospace",b.fillText("mm",$-3,D(565))}},{key:"bag",w:200,h:112,bg:"#f1efe8",draw(b,$,oe){b.fillStyle="#f1efe8",b.fillRect(0,0,$,oe),b.strokeStyle="#1a1c20",b.lineWidth=3,b.strokeRect(5,5,$-10,oe-10),b.fillStyle="#1a1c20",b.textAlign="left",b.textBaseline="middle",b.font="700 30px ui-monospace, Menlo, monospace",b.fillText("SAMPLE A-1",16,36),b.font="500 17px ui-monospace, Menlo, monospace",b.fillText("ATTIC \xB7 LOOSE FILL",16,70),b.fillText("SEALED \xB7 FOR LAB",16,92)}},{key:"caution",w:300,h:150,draw(b,$,oe){b.fillStyle="#e9c22e",b.fillRect(0,0,$,oe),b.fillStyle="#16171a",b.fillRect(0,0,$,12),b.fillRect(0,oe-12,$,12),b.textAlign="center",b.textBaseline="middle",b.font="800 44px ui-monospace, Menlo, monospace",b.fillText("CAUTION",$/2,46),b.font="700 20px ui-monospace, Menlo, monospace",b.fillText("POSSIBLE ASBESTOS",$/2,88),b.fillText("DO NOT DISTURB",$/2,116)}},{key:"pv",w:300,h:92,draw(b,$,oe){b.fillStyle="#b8281c",b.fillRect(0,0,$,oe),b.fillStyle="#f4f1ea",b.textAlign="center",b.textBaseline="middle",b.font="800 34px ui-monospace, Menlo, monospace",b.fillText("PV SYSTEM",$/2,32),b.font="600 17px ui-monospace, Menlo, monospace",b.fillText("DC CONDUCTORS \xB7 600 V",$/2,66)}}],{width:1024,emissive:.2});[m,M].forEach(b=>n(6.27,.012,7.55,S,3.165,-.008,0,b,{uv:!0,cast:!1})),n(.05,.012,7.55,a.blackPlastic,0,hh-.03,0,p,{cast:!1});let Le=new jn;Le.moveTo(-4.95,6.4),Le.lineTo(4.95,6.4),Le.lineTo(0,Yr(0)-.02),Le.lineTo(-4.95,6.4);let Se=new Ms;Se.moveTo(-.5,7.5),Se.lineTo(.5,7.5),Se.lineTo(.5,8.5),Se.lineTo(-.5,8.5),Se.lineTo(-.5,7.5),Le.holes.push(Se);let ke=new Ur(Le);[[-3.775,0],[3.775,Math.PI]].forEach(([b,$])=>{let oe=new Ue(ke,S);oe.position.set(0,0,b),oe.rotation.y=$,oe.receiveShadow=!0,p.add(oe),[-4.2,-3.4,-2.6,-1.8,-1.05,1.05,1.8,2.6,3.4,4.2].forEach(D=>{let z=Yr(D)-.06;n(.038,z-6.4,.089,v,D,(z+6.4)/2,b+Math.sign(-b)*.046,p,{uv:!0,cast:!1})}),[7.45,8.55].forEach(D=>n(1.12,.038,.089,v,0,D,b+Math.sign(-b)*.046,p,{uv:!0,cast:!1}))});let ee=(b,$,oe,D,z,Y=p)=>n(Math.hypot(oe-b,D-$),.089,.038,v,(b+oe)/2,($+D)/2,z,Y,{uv:!0,rot:[0,0,Math.atan2(D-$,oe-b)]}),We=(.014+.089)/ud;Bl.forEach(b=>{n(6.76,.089,.038,v,3.38,-.0585,b,m,{uv:!0}),n(6.2,.089,.038,v,3.1,-.0585,b,M,{uv:!0}),n(9.9,.089,.038,v,0,6.4+.0445,b,p,{uv:!0,cast:!1}),[-1,1].forEach($=>{ee($*1.667,6.48,$*2.5,Yr(2.5)-We+.02,b),ee($*1.667,6.48,$*.08,Yr(0)-We-.04,b),[[$*2.5,Yr(2.5)-We+.01]].forEach(([oe,D])=>[-1,1].forEach(z=>n(.16,.12,.002,Qe,oe,D,b+z*.02,p,{cast:!1})))}),[-1,1].forEach($=>n(.2,.14,.002,Qe,0,Yr(0)-We-.01,b+$*.02,p,{cast:!1}))}),[-1,1].forEach(b=>n(.038,.089,7.5,v,b*2.06,7.32,0,p,{uv:!0,cast:!1}));for(let b=0;b<Bl.length-1;b++){let $=Bl[b]+.3;n(1.12,.004,.54,P,5.66,-.066,$,m,{cast:!1}),[-1,1].forEach(oe=>n(1.12,.052,.004,P,5.66,-.04,$+oe*.27,m,{cast:!1})),[-.13,0,.13].forEach(oe=>n(1.12,.01,.03,P,5.66,-.07,$+oe,m,{cast:!1}));for(let oe=0;oe<3;oe++)[-1,1].forEach(D=>n(.012,.002,.01,a.galv,5.25+oe*.4,-.016,$+D*.272,m,{cast:!1}))}n(.33,.008,8.9,B,5.27,5.876,0,p,{uv:!0,cast:!1}),[-4.455,4.455].forEach(b=>n(.33,.36,.02,a.whitePlastic,5.27,6.05,b,p,{cast:!1}));let le=(...b)=>{let $=[];for(let oe=0;oe<b.length-1;oe++){let[D,z]=b[oe],Y=b[oe+1][0];for(let ne=D;ne<Y-1e-6;ne+=z)$.push(ne)}return $.push(b[b.length-1][0]),$},pe=d?le([-4.95,.4],[-.1,.08],[1.7,.2],[4,.1],[4.95]):le([-4.95,.25],[-.1,.04],[1.65,.12],[4,.06],[4.95]),te=d?le([-3.75,.25],[.2,.08],[1.7,.3],[3.75]):le([-3.75,.15],[.25,.04],[1.7,.2],[3.75]),he=(b,$)=>.013*Math.sin(b*7.1+Math.sin($*3.3)*1.7)+.01*Math.sin($*8.3+b*2.1)+.006*Math.sin(b*23+$*19)+.004*Math.sin(b*41-$*37),xe=(b,$)=>{let oe=Math.min(cd+he(b,$),Yr(b)-.095),D=(b-Xn.x)/Xn.rx,z=($-Xn.z)/Xn.rz,Y=Math.atan2(z,D),ne=Math.sqrt(D*D+z*z)+.05*Math.sin(Y*5)+.03*Math.sin(Y*13+1)+.02*Math.sin(Y*29+b*40);return ne<1.4&&(oe=nt(6.43,oe+.05*Math.max(0,1-Math.abs(ne-1.06)/.3)+.02*Math.sin(b*37+$*29),Et(.7,1,ne))),Math.max(oe,6.405)};{let b=pe.length,$=te.length,oe=new Float32Array(b*$*3),D=new Float32Array(b*$*2),z=[];for(let J=0;J<$;J++)for(let se=0;se<b;se++){let Re=J*b+se;oe.set([pe[se],xe(pe[se],te[J]),te[J]],Re*3),D.set([pe[se],te[J]],Re*2)}for(let J=0;J<$-1;J++)for(let se=0;se<b-1;se++){let Re=J*b+se,De=Re+1,ze=Re+b,Je=ze+1;z.push(Re,ze,De,De,ze,Je)}let Y=new Vt;Y.setAttribute("position",new Nt(oe,3)),Y.setAttribute("uv",new Nt(D,2)),Y.setIndex(z),Y.computeVertexNormals();let ne=new Ue(Y,w);ne.receiveShadow=!0,ne.castShadow=!1,p.add(ne)}let Xe=l(3.62,6.7,-1.32),Ve=new lt;Ve.position.copy(Xe),Ve.rotation.y=-2.2,p.add(Ve),n(.07,.6,.004,a.whitePlastic,0,0,-.003,Ve,{cast:!1}),ye.plane("ruler",.065,Ve,0,0,0),s(.002,.62,a.galv,0,.05,-.008,Ve,{seg:5,cast:!1}),n(.26,.17,.26,Qe,vn.x,6.485,vn.z,p),s(.06,.12,Qe,vn.x,6.62,vn.z,p,{seg:16});let st=r([[vn.x,6.6,vn.z],[vn.x+.04,6.92,vn.z+.03],[vn.x+.3,7,vn.z+.2],[vn.x+.62,6.93,vn.z+.38],[vn.x+.85,6.87,vn.z+.45]],.07,T,h,{radial:14,density:30,keep:!0}),it=l(vn.x+.92,6.88,vn.z+.48),Q=Gs(qr,-.1,vn.z),_t=r([[vn.x,6.6,vn.z],[vn.x+.06,6.9,vn.z],[vn.x+.55,6.99,vn.z+.02],[Q.x-.22,6.92,vn.z],[Q.x,Q.y,vn.z]],.07,T,h,{radial:14,density:30,keep:!0});s(.075,.13,Qe,qr,-.06,vn.z,m,{seg:18}),[[vn.x,6.66,vn.z]].forEach(([b,$,oe])=>s(.077,.02,Qe,b,$,oe,p,{seg:18,cast:!1})),n(.46,.006,.44,He,qr-.02,Gt+.003,vn.z,m),s(.08,.1,He,qr,Gt+.05,vn.z,m,{seg:18}),n(.3,.13,.28,He,qr-.01,Gt+.15,vn.z,m,{r:.02}),n(.05,.08,.26,a.blackPlastic,qr+.135,Gt+.1,vn.z,m,{cast:!1}),s(.5,.058,o(8021318,.95,.1),Xn.x,6.431,Xn.z,p,{seg:32,cast:!1}).scale.set(Xn.rx/.5*1.05,1,Xn.rz/.5*1.05);{let b=d?450:1e3,$=new el(1,0),oe=new Qn($,o(16777215,.7,.35,{envMapIntensity:1.2}),b),D=new St,z=new Tn,Y=new di,ne=new F,J=new F,se=new ct,Re=[10517060,12096600,8216632,10262154,12756592,9075294];for(let De=0;De<b;De++){let ze=u()*6.283,Je=Math.sqrt(u())*1.02;ne.set(Xn.x+Math.cos(ze)*Je*Xn.rx,6.462+u()*.008,Xn.z+Math.sin(ze)*Je*Xn.rz);let Be=.006+u()*.008;J.set(Be*(1+u()*.8),Be*.5,Be*(1+u()*.8)),z.setFromEuler(Y.set(u()*.6,u()*6.28,u()*.6)),D.compose(ne,z,J),oe.setMatrixAt(De,D),oe.setColorAt(De,se.setHex(Re[u()*Re.length|0]))}oe.castShadow=!1,oe.receiveShadow=!0,h.add(oe)}let H=l(Xn.x-.59,0,Xn.z+.47);H.y=xe(H.x,H.z)+.016;let E=new lt;E.position.copy(H),E.rotation.set(.05,.5,-.04),p.add(E),n(.14,.022,.18,a.vermiculite,0,0,.01,E,{r:.01,cast:!1}),n(.16,.03,.22,a.poly,0,.002,0,E,{r:.012,cast:!1}),n(.16,.006,.012,a.bluePlastic,0,.012,-.095,E,{cast:!1});let ae=ye.plane("bag",.12,E,0,.018,.03);ae.rotation.x=-Math.PI/2;let ue=l(Xn.x+.08,0,Xn.z+.6);ue.y=xe(ue.x,ue.z)+.2;let _e=new lt;_e.position.copy(ue),_e.rotation.set(0,-2.3,.05),p.add(_e),n(.174,.09,.002,a.whitePlastic,0,.02,-.0015,_e,{cast:!1}),ye.plane("caution",.17,_e,0,.02,0),s(.0022,.42,a.galv,0,-.14,-.004,_e,{seg:5,cast:!1});let Ze=[];for(let b=2.4;b<6;b+=d?.45:.3)for(let $=-3.5;$<1.4;$+=d?.24:.16){let oe=$+(u()-.5)*.05;Bl.some(D=>Math.abs(D-oe)<.035)||Ze.push([b+(u()-.5)*.04,oe,.024+u()*.012])}let Ke=Ze.length,Ie=new Qn(new en(.0016,.0016,1,5),a.galv,Ke),be=new Qn(new nr(1,0),A,Ke),et=new St,gt=new Tn().setFromEuler(new di(0,0,-Hl)),N=new F,ie=[];Ze.forEach(([b,$,oe],D)=>{Gs(b,-.014-oe/2,$,f),et.compose(f,gt,N.set(1,oe,1)),Ie.setMatrixAt(D,et),ie.push(Gs(b,-.014-oe-.004,$))}),Ie.castShadow=!1,be.castShadow=!1,h.add(Ie,be);let ge=Ze.map(()=>.8+u()*.6),Te=-1,Ge=b=>{if(!(Math.abs(b-Te)<.004)){Te=b;for(let $=0;$<Ke;$++){let oe=ge[$]*(.15+.85*b),D=.0055*oe;Gs(Ze[$][0],-.014-Ze[$][2]*(.4+.25*b),Ze[$][1],f),et.compose(f,gt,N.set(D,Ze[$][2]*.32*(.3+.7*b)+D,D)),be.setMatrixAt($,et)}be.instanceMatrix.needsUpdate=!0}},G=new Ue(new $t(4,5),x);G.rotation.x=Math.PI/2,G.position.set(4,-.0165,-1.1),G.renderOrder=2,G.userData.keep=!0;let Ae=g(h);Ae.add(G),Ae.userData.keep=!0;let de=[2.455,3.905],Fe=[-1.6,-.55,.5,1.55],Ce=Gt+.135,O=Ce+.036;de.forEach(b=>Fe.forEach($=>{n(1.3,.03,.95,a.enclosureDark,b,Ce+.015,$,m,{cast:!1}),n(1.29,.004,.94,j,b,O-.004,$,m,{cast:!1}),[-1,1].forEach(oe=>{n(1.32,.036,.016,a.aluminum,b,Ce+.018,$+oe*.477,m,{cast:!1}),n(.016,.036,.97,a.aluminum,b+oe*.652,Ce+.018,$,m,{cast:!1})})}));let we=Fe[0]-.49,me=Fe[3]+.49;de.forEach(b=>[-.36,.36].forEach($=>{let oe=b+$;n(.04,.045,me-we+.14,a.aluminum,oe,Ce-.0225,(we+me)/2,m,{cast:!1});for(let D=we+.1;D<me;D+=.52)n(.05,.05,.04,a.aluminum,oe,Gt+.025,D,m,{r:.006,cast:!1}),n(.012,.045,.04,a.aluminum,oe+.02,Gt+.07,D,m,{cast:!1}),s(.007,.012,a.galv,oe+.03,Gt+.025,D,m,{axis:"x",seg:6,cast:!1});[we-.012,me+.012].forEach(D=>n(.045,.04,.02,a.aluminum,oe,Ce+.02,D,m,{cast:!1}));for(let D=0;D<3;D++){let z=(Fe[D]+Fe[D+1])/2;n(.04,.008,.045,a.aluminum,oe,O+.003,z,m,{cast:!1}),s(.006,.006,a.galv,oe,O+.009,z,m,{seg:6,cast:!1})}}));let $e={s:4.74,z:we+.25};n(.2,.09,.16,a.greyPlastic,$e.s,Gt+.06,$e.z,m,{r:.008}),n(.24,.015,.2,a.aluminum,$e.s,Gt+.01,$e.z,m,{cast:!1});let ft=ye.plane("pv",.13,m,$e.s,Gt+.1065,$e.z);ft.rotation.x=-Math.PI/2,ft.rotation.z=Math.PI/2,[[.03,-.004],[-.03,.004]].forEach(([b,$])=>r([[de[1]+.2,Ce-.01,Fe[0]+b*3],[de[1]+.5,Ce-.025+$,Fe[0]-.3+b],[$e.s-.15,Gt+.07,$e.z+.25+b],[$e.s-.04,Gt+.07,$e.z+.06+b]],.004,a.rubber,m,{radial:5,cast:!1})),r([[$e.s+.1,Gt+.05,$e.z],[$e.s+.2,Gt+.05,$e.z],[$e.s+.26,Gt+.04,$e.z]],.012,a.conduit,m,{radial:8,cast:!1}),s(.06,.07,a.blackPlastic,$e.s+.3,Gt+.03,$e.z,m,{r2:.025,seg:14,cast:!1});let wt=new Ue(new $t(In.z1-In.z0-.14,In.y1-In.y0-.14),q);wt.position.set(5.037,(In.y0+In.y1)/2,(In.z0+In.z1)/2),wt.rotation.y=Math.PI/2,wt.renderOrder=2,wt.userData.keep=!0,h.add(wt);let Pt=new Ue(new $t(Z-W,X-K),ve);Pt.position.set(5.1135,(X+K)/2,(Z+W)/2),Pt.rotation.y=Math.PI/2,Pt.renderOrder=2,p.add(Pt),n(.272,.062,2.045,Ne,5.141,In.y0-.03,(In.z0+In.z1)/2,p,{uv:!0}),n(.05,.03,.22,Ne,5.25,In.y0-.068,In.z1+.05,p,{uv:!0,rot:[.3,.2,-.5],cast:!1});let Bt=g(h);Bt.userData.keep=!0;let Yt=(b,$,oe,D,z)=>{let Y=new jn;Y.moveTo(b[0][0],b[0][1]),b.slice(1).forEach(se=>Y.lineTo(se[0],se[1]));let ne=new ji(Y,{depth:oe-$,steps:z?44:1,bevelEnabled:!1,curveSegments:1});if(z){let se=ne.attributes.position;for(let ze=0;ze<se.count;ze++){let Je=se.getX(ze),Be=se.getY(ze),fe=se.getZ(ze);Be>Gt+.03&&se.setY(ze,Be+z(Je,fe)*Et(Gt+.03,Gt+.12,Be)),Je>Ry+.03&&se.setX(ze,Je+Math.abs(z(Je+3,fe*1.7))*1.6)}ne.deleteAttribute("normal"),ne.deleteAttribute("uv"),ne=Vp(ne,1e-4),ne.computeVertexNormals();let Re=ne.attributes.position,De=new Float32Array(Re.count*2);for(let ze=0;ze<Re.count;ze++)De[ze*2]=Re.getZ(ze)*.6,De[ze*2+1]=Re.getX(ze)*.6;ne.setAttribute("uv",new Nt(De,2))}let J=new Ue(ne,D);return J.position.z=$,J.castShadow=!0,J.receiveShadow=!0,Bt.add(J),J},bn=Gt+.016,pn=(b,$)=>.025*Math.sin($*2.3+b*3)+.015*Math.sin($*5.7-b*2)+.008*Math.sin($*13+b*11);Yt([[4.62,bn],[4.9,Gt+.1],[5.3,Gt+.17],[5.8,Gt+.19],[5.98,Gt+.17],[6.07,Gt+.11],[6.12,Gt+.05],[6.14,bn]],-4.35,4.5,U,pn),Yt([[.06,bn],[.2,Gt+.09],[.6,Gt+.12],[1.55,Gt+.13],[1.72,Gt+.08],[1.78,bn]],-4.5,4.5,U,pn),[[-4.5,we-.5],[me+.5,4.5]].forEach(([b,$])=>Yt([[1.5,bn],[1.5,Gt+.12],[3,Gt+.14],[4.95,Gt+.16],[4.95,bn]],b,$,U,pn)),Yt([[6.06,Gt+.002],[6.07,Gt+.045],[6.4,Gt+.05],[6.42,Gt+.002]],-4.5,4.5,dt),Yt([[6.3,Gt],[6.36,Gt+.07],[6.46,Gt+.12],[6.68,Gt+.14],[6.84,Gt+.12],[6.92,Gt+.03],[6.935,-.08],[6.9,-.17],[6.86,-.13],[6.84,.02],[6.81,.17],[6.79,Gt]],-4.5,4.5,I,(b,$)=>.04*Math.sin($*1.7+1)+.03*Math.sin($*4.9+b*6)+.018*Math.sin($*11.3+2+b*9)+.01*Math.sin($*29+b*13));{let b=new $t(1.42,.15),$=b.attributes.uv;for(let D=0;D<$.count;D++)$.setX(D,4.68+$.getX(D)*1.42);let oe=new Ue(b,re);oe.rotation.x=-Math.PI/2,oe.position.set(4.68+.71,Gt+.004,-4.425),oe.receiveShadow=!0,Bt.add(oe)}i.bake(Bt);let C=new lt;C.position.set(po.x,po.y,0),C.userData.keep=!0,h.add(C),n(.135,.05,8.9,I,0,.12,0,C,{cast:!1});let Ee=d?60:130,Oe=new vr(.028,1,7,1,!0);Oe.rotateX(Math.PI),Oe.translate(0,-.5,0);let je=new Qn(Oe,I,Ee),tt=[];for(let b=0;b<Ee;b++){let $=-4.42+b/(Ee-1)*8.84+(u()-.5)*.05,oe=Math.max(0,1-Math.abs($+1.5)/2.2),D=.06+u()*u()*(.55+.5*oe),z=.7+u()*.9;f.set((u()-.5)*.08,.004,$),et.compose(f,gt.identity(),N.set(z,D,z)),je.setMatrixAt(b,et),tt.push([f.x,D,$])}gt.setFromEuler(new di(0,0,-Hl)),je.castShadow=!1,C.add(je),i.bake(C);let bt=d?260:560,ut=new Qn(new nr(1,0),k,bt);{let b=($,oe)=>$>de[0]-.67&&$<de[1]+.67&&oe>we&&oe<me;for(let $=0;$<bt;$++){let oe=.007+u()*u()*.016,D=u(),z,Y,ne;D<.16?f.set(po.x+(u()-.5)*.1,po.y+.1+oe,-4.4+u()*8.8):(z=D<.4?6.2+u()*.58:.3+Math.sqrt(u())*6.45,ne=-4.4+u()*8.8,Y=b(z,ne)?O+oe:Gt+oe*.6+(Math.abs(ne-vn.z)<.14&&Math.abs(z-qr)<.15?.21:0),Gs(z,Y,ne,f)),et.compose(f,gt,N.set(oe,oe*.92,oe)),ut.setMatrixAt($,et)}}ut.castShadow=!1,ut.receiveShadow=!0,h.add(ut);let xt=i.particles(260,{size:.06,color:14674687,opacity:.5,gain:.55}),mt=i.particles(240,{size:.014,color:12574975,gain:1.1});h.add(xt,mt);let It=xt.userData.n,At=mt.userData.n,Wt=Float32Array.from({length:Math.max(It,At)*4},()=>u()),Mi=Array.from({length:At},(b,$)=>$*7919%Ke),Ei=tt.map((b,$)=>[b[1],$]).sort((b,$)=>$[0]-b[0]).slice(0,40).map(b=>b[1]);i.bake(p);let Ii={roof:Gs(5.7,Gt+.05,-3.3),ice:Gs(6.62,Gt+.17,-2),rain:Gs(4.75,-.05,-.35),ins:l(Xe.x,cd+.02,Xe.z),fan:Gs(qr,-.16,vn.z),verm:l(Xn.x,6.48,Xn.z),solar:Gs($e.s,Gt+.12,$e.z),win:l(5.16,4.36,-1)},kn={cut:0,ghost:0,ground:1,season:0,snowfall:0,melt:0,icicles:0,orbit:.012,time:19.4},Vi=[{...kn,radius:13,theta:2.12,phi:1.18,fx:4,ty:6.8,fz:-1.4,dof:0,orbit:.025,time:12.5,season:.5,narrow:{radius:13}},{...kn,radius:3.6,theta:2.15,phi:1.02,fx:5.4,ty:6.15,fz:-2,dof:.8,time:19.4,snowfall:1,narrow:{radius:3.1}},{...kn,radius:2.3,theta:3.95,phi:1.55,fx:3.45,ty:7,fz:-.3,dof:1,narrow:{radius:1.7,fx:3.75,ty:7.1,fz:-.3}},{...kn,radius:1.75,theta:4.25,phi:1.33,fx:3.75,ty:6.92,fz:-1.15,dof:1,narrow:{radius:1.35,fx:3.8,ty:7,fz:-1.05}},{...kn,radius:2.6,theta:3.95,phi:.88,fx:Xn.x-.2,ty:6.55,fz:Xn.z+.25,dof:1,narrow:{radius:2.2,fx:Xn.x+.05,fz:Xn.z+.25}},{...kn,radius:2.7,theta:2.1,phi:1.1,fx:3.85,ty:7.5,fz:-1.5,dof:.9,narrow:{radius:2.4}},{...kn,radius:4.1,theta:1.92,phi:1.54,fx:5.15,ty:4.95,fz:-1.3,dof:.9,snowfall:1,narrow:{radius:3.5}}],L=0,ce=1,Pe=xt.userData.pos,Me=mt.userData.pos;return{name:"attic",group:h,anchors:Ii,shots:Vi,hides:b=>{let $=b||e,oe=[];return $.sys.asbestos&&oe.push(...$.sys.asbestos.meshes),$.sys.solar&&$.sys.solar.meshes[0]&&oe.push($.sys.solar.meshes[0].parent),$.extra&&$.extra.snowR&&oe.push($.extra.snowR),oe},light(b){return b===0?{pos:[8.5,11.5,-5.5],at:[4.6,7.4,-1.6],power:0}:b===1?{pos:[7.9,9,-4],at:[5.45,6.1,-2],power:.6,fill:.3}:b===2?{pos:[1.4,8.4,-2.4],at:[3.9,7.2,-.6],power:.9,fill:.6}:b===3?{pos:[1.4,8.5,-2.4],at:[4.1,6.85,-.7],power:.9,fill:.6}:b===4?{pos:[.6,8.6,-.6],at:[Xn.x,6.45,Xn.z],power:.9,fill:.5}:b===5?{pos:[6.6,10.2,-3.6],at:[3.8,7.55,-1.4],power:.8,fill:.35}:{pos:[7.6,6.6,-3.6],at:[5.1,5,-1.4],power:.9,fill:.2}},update({step:b,q:$,t:oe,dt:D,snap:z,reduce:Y}){let ne=z?1:1-Math.exp(-D*2.6);L=nt(L,b>=1?1:0,ne);let J=Et(0,1,L);Bt.visible=C.visible=J>.01,Bt.scale.y=Math.max(.001,J),C.scale.y=Math.max(.001,J),ut.visible=b===0,wt.visible=b>=1;let se=b===2?1-Et(.4,.8,$):b<2?1:0;ce=nt(ce,se,z?1:1-Math.exp(-D*6)),x.opacity=.75*ce,Ae.visible=be.visible=ce>.01,Ge(ce),st.visible=b<=2,_t.visible=b>=3;let Re=Y?3.3:oe,De=0,ze=0;if(b===2){let Je=Et(.35,.65,$),Be=Math.round(It*.7);for(let rt=0;rt<Be;rt++){let at=(Re*(.16+Wt[rt]*.08)+Wt[rt+It])%1,Tt=at*at;Pe[De*3]=it.x+.06+at*.9+Math.sin(Re*.7+rt)*.05*at,Pe[De*3+1]=Math.min(it.y+.03+at*.9,Yr(it.x+.06+at*.9)-.08)+.02*Math.sin(rt),Pe[De*3+2]=it.z+(Wt[rt+2*It]-.5)*Tt*2.2,De++}let fe=Math.round(At*Je);for(let rt=0;rt<fe;rt++){let at=ie[Mi[rt]],Tt=.9+Wt[rt]*1.1,jt=(Re+Wt[rt+At]*Tt)%Tt/Tt,nn=Math.max(0,jt-.6)/.4,ln=9.8*(nn*Tt*.4)**2*.5;Me[ze*3]=at.x,Me[ze*3+1]=Math.max(at.y-.004-ln,cd-.01),Me[ze*3+2]=at.z,ze++}}else if(b===3)for(let Je=0;Je<It;Je++){let Be=Wt[Je]*12|0,fe=Bl[Be]+.3+(Wt[Je+It]-.5)*.4,rt=(Re*(.07+Wt[Je+2*It]*.04)+Wt[Je+3*It])%1,at=6.5-rt*6.45,Tt=at>5.1?-.04:-.04-.06*Math.sin(Wt[Je]*9+rt*6)-.04;Gs(at,at>6.15?-.04-(at-6.15)*.6:Tt,fe,y),Pe[De*3]=y.x,Pe[De*3+1]=y.y,Pe[De*3+2]=y.z,De++}if(b===1||b===6){for(let Je=0;Je<Ei.length&&ze<At;Je++){let Be=tt[Ei[Je]],fe=1.2+Wt[Je]*1.6,rt=(Re+Wt[Je+At]*fe)%fe/fe,at=Math.max(0,rt-.55)/.45,Tt=4.9*(at*fe*.45)**2;Me[ze*3]=po.x+Be[0],Me[ze*3+1]=po.y-Be[1]*J-.01-Tt,Me[ze*3+2]=Be[2],ze++}if(b===6)for(let Je=0;Je<16&&ze<At;Je++){let Be=Je<6?In.z0+.04+Wt[Je]*.1:Je<12?In.z1-.04-Wt[Je]*.1:In.z0+.3+Wt[Je]*1.2,fe=.8+Wt[Je+5]*1.2,rt=(Re+Wt[Je+At]*fe)%fe/fe,at=Math.max(0,rt-.5)/.5;Me[ze*3]=5.165,Me[ze*3+1]=Math.max(In.y1+.02-4.9*(at*fe*.5)**2,In.y0+.002),Me[ze*3+2]=Be,ze++}}xt.material.size=b===2?.14:.07,xt.material.opacity=b===2?.5:.85,mt.material.size=b===2?.014:.03,xt.geometry.setDrawRange(0,De),mt.geometry.setDrawRange(0,ze),xt.visible=De>0,mt.visible=ze>0,De&&(xt.geometry.attributes.position.needsUpdate=!0),ze&&(mt.geometry.attributes.position.needsUpdate=!0)}}}var tn=.6,Zr=.42,ci=Zr+.004,_i=.86,hs=-4.25,dd=-3.4,Tr=13.62,pd=Math.atan2(.26,Tr),nm=Math.cos(pd),im=Math.sin(pd),Rs=-18.2,Cs=-3.95,Ps=.19,dh=.15,mo=.75,gh=.12,fh=18,fn=.075,ph=.092,fa=.116,sm=.096,Cy=11;var rm=2,Er=[4.62,6.87],Sr=[6.95,9.05],Is=-14.05,Ds=-18.95,br=-4.3,Ji=1.3,ui=1.6,Yn=.7,ks=-2.9,pa=i=>gh+i*mo,hi=(i,e=0,t=0,n=new F)=>n.set(tn+e,dd+t*nm-i*im,hs-t*im-i*nm),mh=new ct;function ds(i,e){mh.set(e);let t=i.attributes.position.count,n=new Float32Array(t*3);for(let s=0;s<t;s++)n[s*3]=mh.r,n[s*3+1]=mh.g,n[s*3+2]=mh.b;return i.setAttribute("color",new Nt(n,3)),i}function fd(i,e,t,n=14){let s=[];i.forEach((o,c)=>{let l=i[(c+1)%i.length];if(Math.abs(o[0]-l[0])+Math.abs(o[1]-l[1])<1e-6)return;let h=new jo([new Ye(o[1],o[0]),new Ye(l[1],l[0])],n,0,Math.PI).toNonIndexed();h.rotateX(-Math.PI/2),s.push(ds(h,e[c]))});let r=new Ur(new jn(i.map(([o,c])=>new Ye(-o,c)))).toNonIndexed();r.rotateY(-Math.PI/2);let a=r.clone();return a.scale(1,-1,1),s.push(ds(r,t),ds(a,t)),$i(s)}var hd=(i,e,t,n,s,r,a)=>fd([[0,e],[0,t],[i,t],[i,e]],[r,n,r,s],r,a);function am({kit:i,M:e,Ug:t,tier:n,reduce:s}){let{box:r,cyl:a,tube:o,mats:c,atlas:l,V:h}=i,p=new lt;p.name="sewer";let d=new lt;p.add(d);let u=wn(1958),f=(V,qe,ot={})=>i.std(16777215,V,qe,{vertexColors:!0,side:Wn,...ot}),y=f(.74,0),g=f(.48,.8,{envMapIntensity:1.1}),m=y,M=(V,qe,ot,ht,yt,Lt,pt,Ct,Xt={})=>{let an=r(V,qe,ot,Xt.mat||y,yt,Lt,pt,Ct,Xt);return ds(an.geometry,ht),an},S=(V,qe,ot,ht,yt,Lt,pt,Ct={})=>{let Xt=a(V,qe,Ct.mat||y,ht,yt,Lt,pt,Ct);return ds(Xt.geometry,ot),Xt},v=(V,qe,ot,ht,yt={})=>{let Lt=o(V,qe,yt.mat||y,ht,yt);return ds(Lt.geometry,ot),Lt},_=(V,qe,ot={})=>i.place(new Ue(V,ot.mat||y),ot.x||0,ot.y||0,ot.z||0,qe,ot),w=(V,qe,ot,ht={})=>(ds(V,qe),i.place(new Ue(V,ht.mat||y),ht.x||0,ht.y||0,ht.z||0,ot,ht)),R=i.flow(13214314,{base:2892310,intensity:1.1,dash:1.4,speed:.45,rest:.3,gain:1,roughness:.12}),x=(V,qe={})=>i.flow(5220095,{base:V,intensity:1.6,dash:2.2,speed:.7,rest:.05,gain:1,roughness:.4,...qe}),A=t&&t.group?t.group.children.find(V=>V.isMesh&&V.geometry.parameters&&V.geometry.parameters.height===9):null,P=A?A.material:c.soil,B=(V,qe,ot,ht,yt,Lt)=>{let pt=new $t(Math.abs(qe-V),ht-ot);pt.rotateY(-Math.PI/2),pt.translate(yt,(ot+ht)/2,(V+qe)/2);let Ct=pt.attributes.position,Xt=pt.attributes.uv;for(let an=0;an<Ct.count;an++)Xt.setXY(an,(Ct.getZ(an)+120)/240,(Ct.getY(an)+9.02)/9);return i.place(new Ue(pt,P),0,0,0,Lt,{cast:!1})},T=document.createElement("canvas");T.width=T.height=256;{let V=T.getContext("2d");V.fillStyle="#3b3833",V.fillRect(0,0,256,256);for(let qe=0;qe<520;qe++){let ot=u()*256,ht=u()*256,yt=3+u()*7,Lt=70+u()*90;V.fillStyle=`rgb(${Lt|0},${Lt*.96|0},${Lt*.9|0})`,V.beginPath(),V.ellipse(ot,ht,yt,yt*(.6+u()*.4),u()*3,0,6.3),V.fill(),V.fillStyle="rgba(255,255,255,0.12)",V.beginPath(),V.ellipse(ot-yt*.25,ht-yt*.25,yt*.45,yt*.3,0,0,6.3),V.fill()}}let U=new Cn(T);U.colorSpace=gn,U.wrapS=U.wrapT=Bn,U.repeat.set(2.6,2.6);let I=i.std(16777215,.95,0,{map:U}),k=new En({color:16039294,toneMapped:!1}),j=(V,qe,ot,ht)=>{let yt=new Ue(new dn(.05,.06,Math.abs(qe-V)),k);return yt.position.set(ot-.02,.02,(V+qe)/2),yt.userData.noAO=!0,ht.add(yt),yt},q=(V,qe,ot=[],ht=d,yt=ci)=>{let Lt=new jn(V.map(([Ct,Xt])=>new Ye(Ct,Xt)));ot.forEach(Ct=>Lt.holes.push(Ct.length===3?new Ms().absarc(Ct[0],Ct[1],Ct[2],0,Math.PI*2,!1):new Ms(Ct.map(([Xt,an])=>new Ye(Xt,an)))));let pt=new Ur(Lt,8);return pt.rotateY(-Math.PI/2),pt.translate(yt,0,0),typeof qe=="object"?i.place(new Ue(pt,qe),0,0,0,ht,{cast:!1}):w(pt,qe,ht,{cast:!1})},Z=[{key:"mon",w:320,h:232,text:"0.0 m",sub:"CLAY 150 mm",flag:"",draw:W},{key:"pvc",text:"SEWER PVC \xB7 SDR 35 \xB7 150 mm \xB7 2025",w:600,h:34,size:22,color:"#eef3ec"},{key:"pb",text:"PB \xB7 19 mm \xB7 1987",w:300,h:34,size:22,color:"#22262b"},{key:"pl",text:"PROPERTY LINE",w:220,h:54,size:26,color:"#1a1206",bg:"#f08a2c"},{key:"permit",text:"CONNECTION PERMIT",sub:"INSPECTED \xB7 BACKFILL OK",w:260,h:74,size:22,color:"#15130c",bg:"#e9c22e"},{key:"shut",text:"MAIN SHUT-OFF",w:200,h:46,size:22,color:"#fff4ea",bg:"#b8321f"},{key:"pump",text:"SUMP \xB7 1/3 HP",w:180,h:40,size:22,color:"#d9dde2"}];function W(V,qe,ot,ht){V.fillStyle="#05070a",V.fillRect(0,0,qe,ot);let yt=qe/2,Lt=ot/2+14,pt=V.createRadialGradient(yt,Lt,4,yt,Lt,112);pt.addColorStop(0,"#040201"),pt.addColorStop(.32,"#1d1008"),pt.addColorStop(.78,"#9a6038"),pt.addColorStop(1,"#4a2c18"),V.fillStyle=pt,V.beginPath(),V.arc(yt,Lt,108,0,6.3),V.fill(),V.strokeStyle="rgba(14,8,4,.85)",V.lineWidth=6;let Ct=ht.flag==="OFFSET JOINT"?9:0;if(V.beginPath(),V.arc(yt,Lt+Ct,46,0,6.3),V.stroke(),V.fillStyle="rgba(150,112,62,.75)",V.beginPath(),V.ellipse(yt,Lt+86,58,12,0,0,6.3),V.fill(),ht.flag==="CRACK"&&(V.strokeStyle="#0a0503",V.lineWidth=3,V.beginPath(),V.moveTo(yt-18,Lt-104),V.lineTo(yt-8,Lt-80),V.lineTo(yt-20,Lt-62),V.lineTo(yt-9,Lt-44),V.stroke()),ht.flag==="ROOTS"){V.strokeStyle="#d8c49a",V.lineWidth=2;for(let Xt=0;Xt<9;Xt++)V.beginPath(),V.moveTo(yt-40+Xt*10,Lt-46),V.quadraticCurveTo(yt-30+Xt*7,Lt,yt-20+Xt*5,Lt+20),V.stroke()}V.textAlign="left",V.textBaseline="middle",V.fillStyle="#f4bd7e",V.font="700 28px ui-monospace, Menlo, monospace",V.fillText(ht.text,14,24),V.fillStyle="#cfd4da",V.font="500 15px ui-monospace, Menlo, monospace",V.fillText(ht.sub,14,50),V.fillStyle="#ff6b4f",V.beginPath(),V.arc(qe-22,22,7,0,6.3),V.fill(),V.textAlign="right",V.fillStyle="#cfd4da",V.font="600 14px ui-monospace, Menlo, monospace",V.fillText("REC",qe-36,23),ht.flag&&(V.textAlign="left",V.fillStyle="#ff6b4f",V.font="700 20px ui-monospace, Menlo, monospace",V.fillText(ht.flag,14,ot-18))}let X=l(Z,{width:1024,emissive:.26}),K=new lt;K.position.set(tn,dd,hs),K.rotation.x=-pd,d.add(K);let ve={out:9064756,inn:5977123,end:7620398,cut:12880480},Ne=fd([[0,sm],[0,fa],[.09,fa],[.125,ph],[mo+.075,ph],[mo+.075,fn],[.1,fn],[.1,sm]],[ve.end,ve.out,ve.out,ve.out,ve.end,ve.inn,ve.inn,4138008],ve.cut,18),He=new Qn(Ne,y,fh);He.castShadow=!0,He.receiveShadow=!0,He.frustumCulled=!1,He.userData.keep=!0,K.add(He);let Qe=V=>V===rm?-.013:V===4?-.016:V===5?-.024:V===6?-.01:0,dt=[],re=new St,ye=new St().makeScale(0,0,0);for(let V=0;V<fh;V++)dt.push(new St().makeTranslation(0,Qe(V),-pa(V))),He.setMatrixAt(V,dt[V]);let Le="",Se=V=>{let qe="";for(let ot=0;ot<fh;ot++)qe+=V(ot)?"0":"1";if(qe!==Le){Le=qe;for(let ot=0;ot<fh;ot++)He.setMatrixAt(ot,qe[ot]==="1"?dt[ot]:ye);He.instanceMatrix.needsUpdate=!0}};v([[.02,fn*.99,-1.02],[.034,fn*.97,-1.18],[.022,fn*.98,-1.32],[.04,fn*.96,-1.5]].map(([V,qe,ot])=>{let ht=fn*.985/Math.hypot(V,qe);return[V*ht,qe*ht,ot]}),.0028,1182214,K,{radial:5,seg:16,cast:!1});let ke=(V,qe,ot,ht,yt,Lt=R,pt=0)=>{let Ct=new $t(qe-V,ht);Ct.rotateX(-Math.PI/2),Ct.rotateY(Math.PI/2),Ct.translate(pt+ht/2,ot,-(V+qe)/2);let Xt=Ct.attributes.position,an=Ct.attributes.uv;for(let Si=0;Si<Xt.count;Si++)an.setX(Si,-Xt.getZ(Si));return i.place(new Ue(Ct,Lt),0,0,0,yt,{cast:!1})},ee=V=>Math.sqrt(fn*fn-(fn-V)*(fn-V));ke(0,Tr,-fn+.016,ee(.016),K),ke(pa(4)-.05,pa(7)-.1,-fn+.014,ee(.03),K).position.y=-.018;let We=new lt,le=.78,pe=-3.06,te=Math.atan2(pe-dd-.02,le-hs);We.position.set(tn,pe,le),We.rotation.x=-te,d.add(We);let he={out:3026996,inn:5190692,cut:9277590},xe=le-hs+.12;_(hd(xe,fn,.086,he.out,he.inn,he.cut,16),We),[0,1.5,3,4.5].forEach(V=>_(fd([[V,.086],[V,.104],[V+.09,.104],[V+.12,.086]],[he.cut,he.out,he.out,he.out],he.cut,16),We)),ke(.05,xe,-fn+.014,ee(.014),We),S(.056,.4,he.out,-.2,.012,-2.75,We,{axis:"x",seg:16});{let V=pe-(le-ks)*Math.tan(te)+.06;_(hd(-2.77-V,.052,.062,he.out,he.inn,he.cut,14).rotateX(Math.PI/2),d,{x:tn,y:V,z:ks})}S(.09,.012,9212827,tn,-2.795,le+.04,d,{mat:g,seg:24}),v([[tn,-2.8,le+.04],[tn,-3.08,le+.06],[tn,-3.2,le-.04],[tn,-3.1,le-.14],[tn,-3.06,le-.02]],.05,he.out,d,{radial:12,seg:24});let Xe=e.form||e.concrete;q([[-4.5,-3.25],[-3.7,-3.25],[-3.7,-2.95],[-4,-2.95],[-4,.3],[-4.25,.3],[-4.25,-2.95],[-4.5,-2.95]],Xe),q([[4.5,-3.25],[3.7,-3.25],[3.7,-2.95],[4,-2.95],[4,.3],[4.25,.3],[4.25,-2.95],[4.5,-2.95]],Xe,[[4.125,-2.3,.028]]),[[-4,ks-.07],[ks+.07,le-.07],[le+.13,ui-.25],[ui+.25,4]].forEach(([V,qe])=>q([[V,-2.96],[qe,-2.96],[qe,-2.8],[V,-2.8]],e.slab||7170659)),[-1,1].forEach(V=>M(_i-ci,3,.012,1447963,(ci+_i)/2,-1.55,V*4.258,d,{cast:!1})),B(hs,Is,-9.02,0,_i,d),B(Ds,-60,-9.02,0,_i,d),B(-hs,60,-9.02,0,_i,d),B(hs,-hs,-9.02,-2.96,_i,d),j(hs,Is,_i,d),j(Ds,-60,_i,d),j(-hs,60,_i,d);let Ve=new lt;Ve.userData.keep=!0,p.add(Ve),B(Is,Ds,-9.02,0,_i,Ve);let st={out:8815226,inn:4999491,cut:11117980},it=2.6;[[Ps,st.out],[dh,st.inn]].forEach(([V,qe])=>S(V,it,qe,ci+it/2,Cs,Rs,d,{axis:"x",seg:32,open:!0}));let Q=new ra(dh,Ps,32);Q.rotateY(-Math.PI/2),w(Q,st.cut,d,{x:ci,y:Cs,z:Rs,cast:!1});let _t=Math.sqrt(dh*dh-.085*.085);{let V=new $t(it,_t*2);V.rotateX(-Math.PI/2),V.translate(ci+it/2,Cs-.085,Rs);let qe=V.attributes.uv,ot=V.attributes.position;for(let ht=0;ht<ot.count;ht++)qe.setX(ht,ot.getX(ht));i.place(new Ue(V,R),0,0,0,d,{cast:!1})}let vt=new lt;vt.userData.keep=!0,p.add(vt);let H=[hi(Tr-.25),hi(Tr),h(tn,Cs+.25,Rs+.2),h(tn,Cs+Ps*.72,Rs+Ps*.68)];v(H,ph,ve.out,vt,{radial:16,seg:16}),w(new Hn(.15,14,10),7828331,vt,{x:tn,y:Cs+Ps*.72,z:Rs+Ps*.68}).scale.set(.8,.7,1);let E=6966835,ae=[13350026,11112036,14272416],ue=pa(Cy),_e=(V,qe,ot,ht,yt,Lt={})=>{let pt=[V[0]];for(let Wi=1;Wi<V.length;Wi++){let gs=V[Wi-1],ss=V[Wi],cn=Math.hypot(ss[0]-gs[0],ss[1]-gs[1],ss[2]-gs[2])*(Lt.wob??.12);for(let Xi=1;Xi<=3;Xi++){let Mn=Xi/3;pt.push(Xi===3?ss:[nt(gs[0],ss[0],Mn)+(u()-.5)*cn*.3,nt(gs[1],ss[1],Mn)+(u()-.5)*cn,nt(gs[2],ss[2],Mn)+(u()-.5)*cn])}}let Ct=v(pt,qe,ht,yt,{radial:Lt.radial||6,density:Lt.density||26,tension:.4,cast:Lt.cast??qe>.01}),Xt=Ct.geometry,{tubularSegments:an,radialSegments:Si}=Xt.parameters,Ys=Xt.attributes.position,Ki=new F;for(let Wi=0;Wi<=an;Wi++){Ct.userData.curve.getPointAt(Wi/an,Ki);let gs=nt(1,ot/qe,Math.pow(Wi/an,.8));for(let ss=0;ss<=Si;ss++){let cn=Wi*(Si+1)+ss;Ys.setXYZ(cn,Ki.x+(Ys.getX(cn)-Ki.x)*gs,Ki.y+(Ys.getY(cn)-Ki.y)*gs,Ki.z+(Ys.getZ(cn)-Ki.z)*gs)}}return Ct},Ze=(V,qe=0,ot=fa+.006)=>hi(ue+qe,ot*Math.sin(V),ot*Math.cos(V));[[.034,.008,[[.83,-.12,-12.4],[.8,-.6,-12],[.78,-1.3,-11.6],[.76,-2,-11.45],[.74,-2.7,-11.8]]],[.03,.007,[[.83,-.15,-12.48],[.8,-.7,-13],[.77,-1.4,-13.4],[.75,-2.2,-13.5],[.73,-2.9,-13.2]]],[.028,.006,[[.83,-.2,-12.44],[.79,-1,-12.5],[.76,-1.9,-12.66],[.73,-2.7,-12.7],Ze(.25,-.02,.15).toArray()]]].forEach(([V,qe,ot])=>_e(ot,V,qe,E,d));for(let V=0;V<8;V++){let qe=.2+u()*1.4,ot=-11.9-u()*1.4,ht=[.7+u()*.1,-2.6-u()*.5,ot],yt=[ht[0]-.02+u()*.04,nt(ht[1],-3.3,.45),nt(ot,-12.62,.4)+(u()-.5)*.25],Lt=Ze(qe+.5,-.12+u()*.08,.17);_e([ht,yt,Lt.toArray(),Ze(qe,-.03,fa+.008).toArray(),Ze(qe+.2,.004,.106).toArray()],.0055,.0016,E,d,{radial:5,density:40,cast:!1})}for(let V=0;V<18;V++){let qe=u()*1.7,ot=-.06+u()*.16,ht=.4+u()*.8;_e([Ze(qe,ot,fa+.004).toArray(),Ze(qe+ht*.5,ot+.02,fa+.009).toArray(),Ze(qe+ht,ot-.01,fa+.004).toArray()],.0028,.0012,E,d,{radial:4,density:60,cast:!1})}let Ke=new lt;Ke.userData.keep=!0,Ke.position.set(0,0,-(ue+.075)),K.add(Ke);let Ie=n===0?26:44;for(let V=0;V<Ie;V++){let qe=.05+u()*3.05,ot=.12+u()*u()*.6,ht=V<5?.0045:.0016+u()*.0018,yt=fn*.97*Math.sin(qe),Lt=fn*.97*Math.cos(qe),pt=0,Ct=-yt*.25,Xt=-.2-Lt*.2,an=[];for(let Si=0;Si<=9;Si++){an.push([yt,Lt,pt]),pt-=ot/9,Ct+=(u()-.5)*.7,Xt+=(u()-.62)*.5,yt+=Ct*ot*.06,Lt+=Xt*ot*.06;let Ys=Math.hypot(yt,Lt);Ys>fn*.94&&(yt*=fn*.94/Ys,Lt*=fn*.94/Ys,Ct*=-.5,Xt*=-.5)}_e(an,ht,ht*.35,ae[V%3],Ke,{radial:4,density:50,cast:!1,wob:0})}Di(Ke);let be=ue-.8,et=ue+.9,gt=48,N=16,ie=new en(fn-.0018,fn-.0018,et-be,N,gt,!0,0,Math.PI);ie.rotateX(-Math.PI/2);let ge=new Ue(ds(ie,9207644),f(.9,0));ge.position.set(0,0,-(be+et)/2),ge.userData.keep=!0,ge.receiveShadow=!0,K.add(ge);let Te=new lt;Te.userData.keep=!0,p.add(Te);let Ge=new lt;Te.add(Ge);let G=1.55,Ae=-2.5,de=-2.42;[G-.09,G+.09].forEach(V=>{v([[V,-2.79,de-.26],[V,Ae,de],[V,-2.79,de+.26]],.011,9212827,Ge,{mat:g,radial:8,tension:0}),S(.013,.56,9212827,V,-2.79,de,Ge,{axis:"z",mat:g,seg:8})}),S(.014,.2,9212827,G,Ae,de,Ge,{axis:"x",mat:g,seg:10});let Fe=1,Ce=-2.92,O=.32;M(.17,.075,.26,1776929,Fe,-2.762,Ce,Ge,{r:.012}),M(.07,.01,.12,3817029,Fe-.03,-2.722,Ce+.04,Ge,{cast:!1});let we=new lt;we.position.set(Fe+.075,-2.725,Ce),we.rotation.z=O,Ge.add(we),M(.016,.2,.26,1776929,-.008,.1,0,we,{r:.006});let me=X.plane("mon",.225,Te,0,0,0,{keep:!0});me.rotation.order="ZYX",me.rotation.set(0,-Math.PI/2,O),me.position.set(Fe+.075-.0165*Math.cos(O)-.1*Math.sin(O),-2.725-.0165*Math.sin(O)+.1*Math.cos(O),Ce);let $e=new lt;$e.position.set(G,Ae,de),Te.add($e),S(.25,.014,2500910,.075,0,0,$e,{axis:"x",seg:36}),S(.05,.15,3817029,0,0,0,$e,{axis:"x",seg:16});for(let V=0;V<7;V++){let qe=new Bi(.11+V*.019,.0075,6,40);qe.rotateY(Math.PI/2),w(qe,14857514,$e,{x:-.02+V%2*.016,cast:!1})}[0,2.1,4.2].forEach(V=>M(.012,.36,.03,9212827,.06,0,0,$e,{mat:g,rot:[V,0,0],cast:!1})),Di($e);let ft=V=>pe-(le-V)*Math.tan(te);v([[G-.04,Ae-.23,de-.1],[G-.12,-2.775,de-.32],[1.2,-2.79,-2.62],[.84,-2.785,-2.68],[tn+.08,-2.76,ks+.04],[tn+.01,-2.86,ks],[tn,ft(ks)-.06,ks-.04]],.0055,14857514,Ge,{radial:6,density:24,tension:.4,cast:!1}),v([[G-.06,Ae,de],[G-.2,-2.79,de-.1],[Fe+.06,-2.79,Ce+.18],[Fe+.05,-2.76,Ce+.12]],.005,1052948,Ge,{radial:6,cast:!1}),S(.05,.03,11569722,.76,-2.785,ks+.3,Ge,{mat:g,seg:16}),Di(Ge);let wt=new Oi([h(tn,ft(ks-.1)-fn,ks-.1),h(tn,ft(-3.6)-fn,-3.6),h(tn,ft(hs+.1)-fn,hs+.1),hi(.3,0,-fn),hi(1,0,-fn),hi(1.6,0,-fn)],!1,"catmullrom",.2),Pt=120,Bt=o(wt.getSpacedPoints(Pt),.0055,y,p,{seg:Pt,radial:6,keep:!0,cast:!1});ds(Bt.geometry,14857514);let Yt=new F,bn=new F,pn=new lt;pn.userData.keep=!0,p.add(pn),M(.06,.034,.16,15319598,0,.002,0,pn,{r:.008}),M(.03,.012,.1,2764081,0,.024,.01,pn,{r:.004}),[-1,1].forEach(V=>[-1,1].forEach(qe=>{let ot=S(.02,.013,1052948,V*.039,-.012,qe*.058,pn,{axis:"x",seg:14});ot.rotation.z=V*.5})),S(.022,.06,10133929,0,.008,-.105,pn,{axis:"z",seg:18}),S(.0095,.006,329224,0,.008,-.136,pn,{axis:"z",seg:14}),S(.008,.03,2764081,0,.004,.092,pn,{axis:"z",seg:10});let C=new Ue(new Bi(.0158,.003,6,20),c.led(16773336,2.4));C.position.set(0,.008,-.1355),pn.add(C),Di(pn);let Ee=i.sprite(16769725,.16,0,.008,-.16,pn,.55),Oe=new lt;Oe.userData.keep=!0,K.add(Oe);let je=new lt;Oe.add(je),S(.012,.05,11055288,0,0,0,je,{axis:"z",mat:g,seg:12});for(let V=0;V<4;V++){let qe=M(.004,fn*1.7,.03,13160148,0,0,-.03,je,{mat:g,cast:!1});qe.rotation.z=V*Math.PI/4}S(.009,.04,5593439,0,0,.04,Oe,{axis:"z",mat:g,seg:10}),Di(je),Di(Oe);let tt=new en(.0085,.0085,1,8,1,!0);tt.translate(0,.5,0),tt.rotateX(-Math.PI/2);let bt=new Ue(ds(tt,4869717),g);bt.userData.keep=!0,K.add(bt);let ut=new lt;ut.userData.keep=!0,K.add(ut),S(.014,.04,13214282,0,0,0,ut,{axis:"z",mat:g,seg:14}),w(new Hn(.014,14,8,0,Math.PI*2,0,Math.PI/2).rotateX(-Math.PI/2),13214282,ut,{z:-.02,mat:g}),S(.011,.025,10133929,0,0,.032,ut,{axis:"z",mat:g,seg:12}),Di(ut);let xt=new en(.009,.009,1,8,1,!0);xt.translate(0,.5,0),xt.rotateX(-Math.PI/2);let mt=new Ue(ds(xt,1382170),m);mt.userData.keep=!0,K.add(mt);let It=200,At=i.particles(It,{color:10473727,size:.017,gain:1.6});K.add(At);let Wt=new lt;Wt.userData.keep=!0,K.add(Wt);let Mi=60,Ei=16,Ii=Er[1]-Er[0],kn=i.flow(16751165,{base:6265980,intensity:.75,dash:1.4,speed:.32,rest:.12,gain:1,roughness:.55,metalness:0});kn.side=Wn;let Vi=new en(fn-.003,fn-.003,Ii,Ei,Mi,!0,0,Math.PI);Vi.rotateX(-Math.PI/2),Vi.translate(0,0,-(Er[0]+Er[1])/2);{let V=Vi.attributes.position,qe=Vi.attributes.uv;for(let ot=0;ot<V.count;ot++)qe.setX(ot,-V.getZ(ot))}let L=i.place(new Ue(Vi,kn),0,0,0,Wt,{keep:!0}),ce=new Hn(fn-.003,16,8,0,Math.PI*2,0,Math.PI/2);ce.rotateX(-Math.PI/2),ce.scale(1,1,.45);let Pe=i.place(new Ue(ce,kn),0,0,0,Wt,{keep:!0}),Me=new en(.08,.08,1,24,1,!0);Me.translate(0,.5,0),Me.rotateX(-Math.PI/2);let b=i.place(new Ue(Me,c.hdpe),0,0,0,Wt,{keep:!0}),$=new lt;$.userData.keep=!0,Wt.add($),S(.03,.17,10134445,0,0,-.085,$,{axis:"z",r2:.104,mat:g,seg:20}),S(.086,.07,7107451,0,0,.035,$,{axis:"z",mat:g,seg:20});for(let V=0;V<3;V++){let qe=M(.006,.05,.12,12041926,0,0,-.07,$,{mat:g});qe.geometry.translate(0,.085,0),qe.rotation.z=V*Math.PI*2/3+.4}S(.006,Sr[1]-.05,10133929,0,0,-Sr[1]/2+.05,$,{axis:"z",mat:g,seg:6,cast:!1}),Di($);let oe=44,D=ds(new dn(.05,.011,.065),7619114),z=new Qn(D,y,oe);z.userData.keep=!0,z.frustumCulled=!1,z.castShadow=!0;let Y=[];{let V=new Tn,qe=new di,ot=new F,ht=new F(1,1,1);for(let yt=0;yt<oe;yt++){let Lt=Sr[0]+.1+yt/oe*(Sr[1]-Sr[0]-.15)+u()*.05,pt=u()*Math.PI*2,Ct=.1+u()*.05;ot.set(Ct*Math.sin(pt),Ct*Math.cos(pt),-Lt),qe.set(u()*.5,u()*.6,-pt+(u()-.5)*.6),V.setFromEuler(qe),ht.set(.6+u()*.6,1,.6+u()*.7),re.compose(ot,V,ht),z.setMatrixAt(yt,re),Y.push(Lt)}}Wt.add(z);let ne=new lt;ne.userData.keep=!0,p.add(ne);let J=new lt;ne.add(J),B(Is,Ds,br,0,Ji,J),B(Is,Ds,-9.02,br,_i,J);{[[Is,-1],[Ds,1]].forEach(([qe,ot])=>{let ht=new $t(Ji-Zr,-br);ht.rotateY(ot>0?0:Math.PI),ht.translate((Ji+Zr)/2,br/2,qe);let yt=ht.attributes.position,Lt=ht.attributes.uv;for(let pt=0;pt<yt.count;pt++)Lt.setXY(pt,(yt.getX(pt)*.3+60)/240,(yt.getY(pt)+9.02)/9);i.place(new Ue(ht,P),0,0,0,J,{cast:!1})});let V=new $t(Ji-Zr,Is-Ds);V.rotateX(-Math.PI/2),V.translate((Ji+Zr)/2,br,(Is+Ds)/2),w(V,3877918,J,{cast:!1})}M(.01,.1,-15.95-Ds,2763566,Ji-.006,-.045,(-15.95+Ds)/2,J,{cast:!1}),M(.01,.3,-15.95-Ds,7828331,Ji-.006,-.25,(-15.95+Ds)/2,J,{cast:!1}),[-15,-16.9].forEach(V=>{M(.05,2.5,.08,12765390,Ji-.048,-1.4,V,J,{mat:g}),[-.6,-2.3].forEach(qe=>{S(.03,Ji-.07-Zr+.3,12765390,(Ji-.07+Zr-.3)/2,qe,V,J,{axis:"x",mat:g,seg:12}),S(.042,.2,14201402,Ji-.25,qe,V,J,{axis:"x",mat:m,seg:14})})}),[.62,1].forEach(V=>v([[V,br,Is-.6],[V,.9,Is-.04]],.016,12765390,J,{mat:g,radial:8,tension:0}));for(let V=0;V<15;V++){let qe=(V+.5)/15;S(.012,.38,12765390,.81,nt(br,.9,qe),nt(Is-.6,Is-.04,qe),J,{axis:"x",mat:g,seg:8,cast:!1})}w(new Hn(1,20,10,0,Math.PI*2,0,Math.PI/2),3812125,J,{x:2.6,y:-.05,z:-15}).scale.set(1.15,.85,1.05),w(new Hn(1,20,6,0,Math.PI*2,0,.7),14673647,J,{x:2.6,y:-.06,z:-15,cast:!1}).scale.set(1.17,.87,1.07);let se=new lt;se.position.copy(K.position),se.rotation.copy(K.rotation),J.add(se);let Re=pa(13)-.04;{let V=Tr-.3,qe=hi(Re,0,-.035),ot=hi(V,0,-.035);q([[qe.z,br],[ot.z,br],[ot.z,ot.y],[qe.z,qe.y]],I,[],J);let ht=new $t(Ji-ci,V-Re);ht.rotateX(-Math.PI/2),ht.translate((Ji+ci)/2-tn,-.035,-(Re+V)/2);let yt=ht.attributes.position,Lt=ht.attributes.uv;for(let pt=0;pt<yt.count;pt++)Lt.setXY(pt,yt.getX(pt),yt.getZ(pt));i.place(new Ue(ht,I),0,0,0,se,{cast:!1}),M(Ji-ci-.01,.5,.012,3877918,(Ji+ci)/2-tn,-.3,-Re+.006,se,{cast:!1})}let De=3112266;S(.081,Tr-Re,De,0,0,-(Re+Tr)/2,se,{axis:"z",mat:m,seg:28}),S(.1,.16,1513499,0,0,-Re+.02,se,{axis:"z",seg:24}),[-.05,.05].forEach(V=>S(.102,.018,12765390,0,0,-Re+.02+V,se,{axis:"z",mat:g,seg:24,cast:!1})),X.plane("pvc",.62,se,-.0815,.012,-(Re+.7),{rot:[0,-Math.PI/2,0]}),v([hi(Tr-.05),hi(Tr+.1),h(tn,Cs+.24,Rs+.2),h(tn,Cs+Ps*.73,Rs+Ps*.69)],.081,De,J,{mat:m,radial:20,seg:16});{let V=new en(Ps+.013,Ps+.013,.34,24,1,!0,-.25,2.2);V.rotateZ(Math.PI/2),w(V,De,J,{x:tn,y:Cs,z:Rs,mat:m})}[-.13,.13].forEach(V=>S(Ps+.017,.025,12765390,tn+V,Cs,Rs,J,{axis:"x",mat:g,seg:32,open:!0,cast:!1})),X.plane("permit",.17,J,ci+.03,Cs+.24,Rs-.26,{rot:[0,-Math.PI/2,0]}),Di(J),M(.035,.75,.035,10123858,.66,-.12,-15.95,d),S(.008,.6,5981750,.66,-.7,-15.95,d,{seg:6,cast:!1}),M(.004,.12,.05,15764012,.64,.17,-15.95-.03,d,{cast:!1,rot:[0,0,.2]}),X.plane("pl",.13,d,.64,.05,-15.95,{rot:[0,-Math.PI/2,0]});let ze=document.createElement("canvas");ze.width=256,ze.height=128;{let V=ze.getContext("2d"),qe=V.createLinearGradient(0,0,0,128);qe.addColorStop(0,"rgba(220,236,255,0.55)"),qe.addColorStop(.86,"rgba(205,226,252,0.34)"),qe.addColorStop(.97,"rgba(205,226,252,0.12)"),qe.addColorStop(1,"rgba(200,222,250,0)"),V.fillStyle=qe,V.fillRect(0,0,128,128);for(let ht=0;ht<260;ht++)V.fillStyle=`rgba(240,248,255,${.2+u()*.5})`,V.fillRect(u()*128,Math.pow(u(),1.6)*110,1+u()*1.5,1+u()*1.5);let ot=V.createRadialGradient(192,64,2,192,64,62);ot.addColorStop(0,"rgba(8,6,4,0.72)"),ot.addColorStop(1,"rgba(8,6,4,0)"),V.fillStyle=ot,V.fillRect(128,0,128,128)}let Je=new Cn(ze);Je.colorSpace=gn;let Be=new Jt({map:Je,transparent:!0,depthWrite:!1,roughness:.9,emissive:10467544,emissiveIntensity:.05}),fe=(V,qe,ot,ht,yt,Lt,pt)=>{let Ct=new $t(ot,ht);Ct.rotateY(-Math.PI/2);let Xt=Ct.attributes.uv;for(let an=0;an<Xt.count;an++)Xt.setX(an,nt(V,qe,Xt.getX(an)));return i.place(new Ue(Ct,Be),yt,Lt,pt,d,{cast:!1,receive:!1})};fe(0,.5,26,2.05,_i-.004,-1.025,4.25+13),fe(.5,1,.8,.6,_i-.006,-2.45,4.6);let rt=-2.32,at=V=>rt-Math.max(0,V-4.3)*.012,Tt=y,jt=g;v([[Yn,at(4.44),4.44],[Yn,at(7.5),7.5],[Yn,at(12),12]],.02,8423053,d,{mat:Tt,radial:10,tension:0}),v([[Yn,at(4.42),4.42],[Yn,rt,4.3],[Yn,rt,3.96],[Yn,rt+.06,3.9],[Yn,rt+.2,3.88],[Yn,-1.02,3.88],[Yn,-.3,3.88],[Yn,-.24,3.8],[Yn-.5,-.24,3.8]],.019,12088383,d,{mat:jt,radial:10,density:26,tension:.15}),S(.027,.045,13214282,Yn,at(4.43),4.43,d,{axis:"z",mat:g,seg:14}),[4.405,4.455].forEach(V=>S(.025,.008,12088383,Yn,at(V),V,d,{axis:"z",mat:g,seg:12,cast:!1})),S(.023,.06,8028295,Yn,at(4.6),4.6,d,{axis:"z",seg:12}),M(.004,.012,.05,789775,Yn-.023,at(4.6)+.004,4.6,d,{cast:!1}),X.plane("pb",.19,d,Yn-.0215,at(5.3),5.3,{rot:[0,-Math.PI/2,0]}),S(.022,.07,13214282,Yn,-1.72,3.88,d,{mat:g,seg:14}),M(.012,.016,.1,12728875,Yn-.03,-1.7,3.88-.04,d,{mat:m,cast:!1}),X.plane("shut",.11,d,Yn-.045,-1.8,3.82,{rot:[0,-Math.PI/2,0]}),M(.1,.17,.1,2241610,Yn,-1.42,3.88,d,{r:.012,mat:m}),S(.04,.02,9212827,Yn-.05,-1.4,3.88,d,{axis:"x",mat:g,seg:18});let nn=4.7,ln=-3.25;S(.066,_i-ci,12433322,(ci+_i)/2,ln,nn,d,{axis:"x",seg:24,open:!0}),S(.05,_i-ci,1118740,(ci+_i)/2,ln,nn,d,{axis:"x",seg:24,open:!0});{let V=new ra(.05,.066,24);V.rotateY(-Math.PI/2),w(V,2763823,d,{x:ci+.002,y:ln,z:nn,cast:!1});let qe=new ra(.06,.066,24);qe.rotateY(-Math.PI/2),w(qe,14209990,d,{x:ci+.003,y:ln,z:nn,cast:!1})}q([[4.5,-3.37],[5.08,-3.37],[5.08,-2.87],[4.5,-2.87]],I,[[nn,ln,.068]],d),M(_i-ci,.008,.66,13617854,(ci+_i)/2,-2.865,4.82,d,{cast:!1}),v([[tn,ln-.03,nn-.04],[tn,-3.36,4.42],[tn,-3.37,3.6],[tn,-3.37,ui+.2]],.038,1776929,d,{radial:12,tension:.2});let Dt=new Ue(hd(.68,.215,.232,1842722,2829875,5264475,22),y);Dt.geometry.rotateX(Math.PI/2),Dt.position.set(tn,-3.48,ui),d.add(Dt),Dt.receiveShadow=!0;{let V=new qa(.232,20,-Math.PI/2,Math.PI);V.rotateX(-Math.PI/2),w(V,2829875,d,{x:tn,y:-3.475,z:ui,cast:!1})}S(.082,.22,2764081,tn,-3.36,ui,d,{seg:20}),w(new Hn(.082,18,6,0,Math.PI*2,0,Math.PI/2),2764081,d,{x:tn,y:-3.25,z:ui}),S(.095,.02,1710878,tn,-3.465,ui,d,{seg:20}),X.plane("pump",.1,d,tn-.084,-3.34,ui,{rot:[0,-Math.PI/2,0]}),S(.004,.3,9212827,tn+.02,-3.2,ui+.12,d,{mat:g,seg:6,cast:!1});let sn=x(13815750,{intensity:2.6,speed:1.4,level:0,roughness:.45}),Ft=.66;o([[tn,-3.17,ui],[tn,-3,ui],[Ft,-2.85,ui],[Ft,-2.2,ui],[Ft,-.5,ui],[Ft,-.42,ui+.08],[Ft,-.42,3.86],[Ft,-.34,3.94],[Ft,.12,3.94],[Ft,.15,4.02],[Ft,.15,4.42],[Ft,.06,4.5]],.024,sn,d,{radial:10,density:16,tension:.12}),S(.034,.13,9409691,Ft,-1.9,ui,d,{seg:16}),[-1.84,-1.96].forEach(V=>S(.037,.012,12765390,Ft,V,ui,d,{mat:g,seg:16,cast:!1}));let Rt=new Ue(new qa(.214,24,-Math.PI/2,Math.PI).rotateX(-Math.PI/2),c.water);Rt.position.set(tn,-3.3,ui),Rt.userData.keep=!0,p.add(Rt);let Vn=S(.024,.05,3817029,tn+.02,-3.2,ui+.12,p,{seg:12,keep:!0}),qn=96,ni=i.particles(qn,{color:7321855,size:.03,gain:2.2});p.add(ni),Di(d);function Di(V){V.updateWorldMatrix(!0,!0);let qe=new St().copy(V.matrixWorld).invert(),ot=new St,ht=new Map,yt=[],Lt=pt=>{for(let Ct=pt;Ct&&Ct!==V;Ct=Ct.parent)if(Ct.userData.keep)return!0;return!1};V.traverse(pt=>{if(!pt.isMesh||pt.isInstancedMesh||Lt(pt)||Array.isArray(pt.material)||pt.children.length)return;let Ct=pt.material.uuid+"|"+pt.renderOrder,Xt=ht.get(Ct);Xt||ht.set(Ct,Xt={mat:pt.material,cast:!1,recv:!1,ro:pt.renderOrder,geos:[]}),Xt.cast=Xt.cast||pt.castShadow,Xt.recv=Xt.recv||pt.receiveShadow;let an=pt.geometry.index?pt.geometry.toNonIndexed():pt.geometry.clone();Object.keys(an.attributes).forEach(Si=>{Si!=="position"&&Si!=="normal"&&Si!=="uv"&&Si!=="color"&&an.deleteAttribute(Si)}),an.attributes.uv||an.setAttribute("uv",new Nt(new Float32Array(an.attributes.position.count*2),2)),pt.material.vertexColors?an.attributes.color||ds(an,16777215):an.attributes.color&&an.deleteAttribute("color"),an.applyMatrix4(ot.multiplyMatrices(qe,pt.matrixWorld)),Xt.geos.push(an),yt.push(pt)}),ht.forEach(pt=>{let Ct=$i(pt.geos);if(!Ct)return;let Xt=new Ue(Ct,pt.mat);Xt.castShadow=pt.cast,Xt.receiveShadow=pt.recv,Xt.renderOrder=pt.ro,Xt.userData.keep=!0,V.add(Xt),pt.geos.forEach(an=>an.dispose())}),yt.forEach(pt=>{pt.parent&&pt.parent.remove(pt),pt.geometry.dispose()})}let is={hub:hi(5.6,.02,ph+.02),cam:hi(1.2),roots:hi(ue+.12,.03,.03),jet:hi(8.2),liner:hi(5.6),burst:hi(8.3),trench:h(1,-1.4,-15.4),main:h(tn,Cs+Ps+.02,Rs+.05),water:h(Yn,at(4.6),4.6),tile:h(tn,ln,nn)},Xs={fx:tn+.1,time:19.4,cut:0,ghost:0,section:1,cutX:Zr,ugFocus:null,ground:1,orbit:.01,season:0,lift:0},Vl=[{...Xs,radius:28,theta:-.95,phi:1.2,ty:-2.2,fz:-7.8,dof:0,orbit:.02,time:16.6,narrow:{radius:34,fz:-10.5,ty:-1.6}},{...Xs,radius:3.2,theta:-1.57,phi:1.4,ty:-3,fz:-3.55,dof:.6,narrow:{radius:3.3,fz:-3.45}},{...Xs,radius:1.7,theta:-1.42,phi:1.22,ty:-3.45,fz:-12.8,dof:1.1,narrow:{radius:1.9}},{...Xs,radius:1.6,theta:-1.5,phi:1.32,ty:-3.56,fz:-12.5,dof:1.1,narrow:{radius:1.8,fz:-12.62}},{...Xs,radius:5.2,theta:-1.55,phi:1.42,ty:-3.45,fz:-10.9,dof:.8,narrow:{radius:7.2,fz:-11.3}},{...Xs,radius:13,theta:-1.5,phi:1,ty:-1.9,fz:-15.8,dof:.4,time:19.4,narrow:{radius:14,fz:-16.1}},{...Xs,radius:7,theta:-1.5,phi:1.46,ty:-2.5,fz:3.6,dof:.5,narrow:{radius:8.6,fz:3.2}}],ga="",wr=0,xa=1,Wl=V=>V>.95&&V<1.55?"CRACK":Math.abs(V-pa(rm)-.06)<.1?"OFFSET JOINT":(V-gh+mo*2)%mo<.12?"JOINT":"",va=new Float32Array(qn*2);for(let V=0;V<qn;V++)va[V*2]=u(),va[V*2+1]=u();let Ar=new Float32Array(It*2);for(let V=0;V<It;V++)Ar[V*2]=V%6/6*Math.PI*2+u()*.3,Ar[V*2+1]=u();return{name:"sewer",group:p,anchors:is,shots:Vl,hides:(V,qe)=>{let ot=V.sys.sewer?[...V.sys.sewer.meshes]:[];return qe&&qe.groups&&["water","gas","sewer","found","radon"].forEach(ht=>qe.groups[ht]&&ot.push(qe.groups[ht])),qe&&qe.group&&qe.group.children.forEach(ht=>{let yt=ht.geometry&&ht.geometry.parameters;ht.isMesh&&yt&&(yt.height===9||yt.depth===240)&&ot.push(ht)}),ot},light(V){return V===0?{pos:[-2.6,-1,-8.6],at:[.8,-3.3,-11.5],power:.7,fill:.6}:V===1?{pos:[-1.6,-3.05,-5.2],at:[.7,-3.3,-4],power:.55,fill:.9}:V===2||V===3?{pos:[-1.3,-2.5,-12],at:[.7,-3.5,-12.8],power:.6,fill:.8}:V===4?{pos:[-4.6,-2,-9.4],at:[.75,-3.55,-11.1],power:1,fill:.6}:V===5?{pos:[-3.2,-1.4,-15.6],at:[.8,-3.5,-17.6],power:1.3,fill:.9}:{pos:[-1.8,-3.4,2.6],at:[.75,-3,3.4],power:1.6,fill:1.6}},update({step:V,q:qe,t:ot,dt:ht,snap:yt}){let Lt=yt?1:1-Math.exp(-ht*5),pt=s?0:ot,Ct=nt(Sr[0]+.05,Sr[1]-.05,qe);Se(cn=>V===4&&cn>=9&&cn<=11&&pa(cn)+mo*.5<Ct||V===5&&cn>=13),Te.visible=pn.visible=Bt.visible=V===1,ne.visible=V===5,Ve.visible=vt.visible=V!==5,Wt.visible=V===4;let Xt=V<=3;if(Ke.visible=ge.visible=Xt,xa=nt(xa,V===0?1.8:.55,Lt),R.userData.level.value=xa,V===1){let cn=nt(0,.62,qe);wt.getPointAt(cn,Yt),wt.getTangentAt(cn,bn),pn.position.copy(Yt),pn.position.y+=.045-.003,pn.rotation.x=Math.atan2(bn.y,-bn.z),Bt.geometry.setDrawRange(0,Math.round(cn*Pt)*6*6);let Xi=hs-Yt.z;$e.rotation.x=-cn*9,is.cam.copy(Yt),is.cam.y+=.07,Ee.material.opacity=.45+(s?0:.08*Math.sin(pt*9));let Mn=(cn*wt.getLength()+.4).toFixed(1),ur=Xi<gh?"":Wl(Xi),Jr=Mn+ur;Jr!==ga&&(ga=Jr,X.set("mon",Mn+" m",Xi<gh?"CAST IRON 150 mm":"CLAY 150 mm \xB7 1958",{flag:ur}))}let an=V===3?Ut(qe/.42,0,1):0,Si=V===3?Ut((qe-.42)/.58,0,1):0;Oe.visible=bt.visible=V===3&&qe<.42,ut.visible=mt.visible=At.visible=V===3&&qe>=.42;let Ys=V===3?Et(.1,.9,an):0;Ke.scale.set(1,1,V===3&&qe>=.42?.12:Math.max(.12,1-.88*Ys));let Ki=nt(ue-.3,ue+.7,Si);if(V===3){if(Oe.visible){let cn=nt(ue-.3,ue+.4,an);Oe.position.set(0,-.004,-cn),je.rotation.z=-pt*14,bt.position.set(0,-.006,-6),bt.scale.set(1,1,Math.max(.01,cn-6.06)),hi(cn,0,.02,is.jet)}if(ut.visible){ut.position.set(0,-fn+.02,-Ki),mt.position.set(0,-fn+.012,-6),mt.scale.set(1,1,Math.max(.01,Ki-6.03)),hi(Ki,0,.02,is.jet);let cn=At.userData.pos,Xi=At.userData.n;for(let Mn=0;Mn<Xi;Mn++){let ur=Ar[Mn*2],Jr=(Ar[Mn*2+1]+pt*2.6)%1,Ns=Jr*.2,Xl=.012+Ns*.62,vh=Xl*Math.sin(ur),Yl=-fn+.02+Xl*Math.cos(ur),yh=Math.hypot(vh,Yl);yh>fn*.95&&(vh*=fn*.95/yh,Yl=Yl*fn*.95/yh-(Ns-.1)*.15),cn[Mn*3]=vh,cn[Mn*3+1]=Math.max(Yl,-fn*.95),cn[Mn*3+2]=-Ki+.02+Ns}At.geometry.attributes.position.needsUpdate=!0}qe>=.42&&Ki>ue+.1&&(Ke.visible=!1)}if(ge.visible){let cn=V===3&&qe>=.42?Math.round(Ut((et-Ki)/(et-be),0,1)*gt):gt;ge.geometry.setDrawRange(0,cn*N*6)}if(V===4){let cn=nt(Er[0]+.15,Er[1],qe),Xi=Math.round((cn-Er[0])/(Er[1]-Er[0])*Mi);L.geometry.setDrawRange((Mi-Xi)*Ei*6,Xi*Ei*6),Pe.position.set(0,0,-cn),hi(cn,0,.02,is.liner),$.position.set(0,0,-Ct),hi(Ct,0,.11,is.burst),b.position.set(0,0,-(Sr[0]-.1)),b.scale.set(1,1,Math.max(.01,Ct-Sr[0]+.1-.05));let Mn=0;for(;Mn<oe&&Y[Mn]<Ct-.06;)Mn++;z.count=Mn}let Wi=s?.5:pt%7/7,gs=Wi<.55?Wi/.55:1-(Wi-.55)/.45,ss=s||Wi>=.55;if(Rt.position.y=nt(-3.38,-3.14,gs),Vn.position.y=Math.max(-3.24,Rt.position.y+.012),wr=nt(wr,ss?1:0,yt?1:1-Math.exp(-ht*6)),sn.userData.level.value=wr,V===6){let cn=ni.userData.pos,Xi=ni.userData.n;for(let Mn=0;Mn<Xi;Mn++){let ur=va[Mn*2],Jr=va[Mn*2+1];if(Mn%2===0){let Ns=(Jr+pt*.11)%1;cn[Mn*3]=ci+.03+ur*.36,cn[Mn*3+1]=nt(-1,-3.1,Ns),cn[Mn*3+2]=4.32+ur*7.3%1*.62}else{let Ns=(Jr+pt*1.3)%1,Xl=(ur-.5)*1.6;cn[Mn*3]=Yn-.03-Ns*.12,cn[Mn*3+1]=at(4.6)+.01+Ns*.16-Ns*Ns*.22,cn[Mn*3+2]=4.6+Xl*Ns*.14}}ni.geometry.attributes.position.needsUpdate=!0}ni.visible=V===6}}}var kt=-1.2,on=-1.5,Dn=.057,Vs=-2.8,An=-2.9,ts=-3.05,zl=-4.4,ri=-2.1,ai=.25,Ln=-1.5,Ni=-.25,md=-3.75,$r=.24,Gi=7.9,go=10.45,ns=-3.995,ei=.66,Kn=1.6,Gn={x:-.5,y:-1.52,z:ns+.1},Ws={x:-.3,z:ns+.115},ma=-.59,xo=new F(kt,An-.1,on+.03),om=i=>8.054+.1233+.72*(i+2.78),Gl=[[-.36,Ln],[-.62,ns+.04]],kl=[[-.95,Ni],[-1.5,1.25]],lm=[-2.3,.05];function cm({kit:i,M:e,tier:t,reduce:n}){let{box:s,cyl:r,tube:a,mats:o,atlas:c,V:l}=i,h=new lt,p=new lt,d=new lt,u=new lt;h.add(p,d,u);let f=wn(41),y=(N,ie,ge,Te,Ge)=>{let G=document.createElement("canvas");G.width=N,G.height=ie,ge(G.getContext("2d"),N,ie);let Ae=new Cn(G);return Ae.colorSpace=gn,Ae.wrapS=Ae.wrapT=Bn,Ae.repeat.set(Te,Ge),Ae.anisotropy=8,Ae},g=(N,ie,ge,Te,Ge,G,Ae)=>{for(let de=0;de<Te;de++)N.fillStyle=Ge[f()*Ge.length|0],N.beginPath(),N.ellipse(f()*ie,f()*ge,G+f()*(Ae-G),G+f()*(Ae-G)*.7,f()*3,0,6.3),N.fill()},m=y(256,256,(N,ie,ge)=>{N.fillStyle="#7c776f",N.fillRect(0,0,ie,ge);for(let Te=0;Te<40;Te++){let Ge=f()*ie,G=f()*ge,Ae=20+f()*50,de=N.createRadialGradient(Ge,G,0,Ge,G,Ae),Fe=f()>.5;de.addColorStop(0,Fe?"rgba(60,56,50,.18)":"rgba(160,154,144,.14)"),de.addColorStop(1,"rgba(0,0,0,0)"),N.fillStyle=de,N.fillRect(Ge-Ae,G-Ae,Ae*2,Ae*2)}g(N,ie,ge,900,["rgba(50,47,43,.35)","rgba(170,164,152,.3)","rgba(96,90,82,.4)"],.4,1.3)},1/1.6,1/1.6),M=y(256,256,(N,ie,ge)=>{N.fillStyle="#3a3732",N.fillRect(0,0,ie,ge);for(let Te=0;Te<900;Te++){let Ge=f()*ie,G=f()*ge,Ae=2+f()*5,de=70+f()*60,Fe=5+(f()*3|0);N.fillStyle=`rgb(${de|0},${de*.97|0},${de*.9|0})`,N.beginPath();for(let Ce=0;Ce<Fe;Ce++){let O=Ce/Fe*6.283+f()*.5,we=Ae*(.6+f()*.5);N[Ce?"lineTo":"moveTo"](Ge+Math.cos(O)*we,G+Math.sin(O)*we*.8)}N.closePath(),N.fill(),N.strokeStyle="rgba(20,18,16,.45)",N.lineWidth=1,N.stroke()}},1/.45,1/.45),S=y(256,256,(N,ie,ge)=>{let Te=N.createImageData(ie,ge),Ge=Te.data;for(let G=0;G<ge;G++)for(let Ae=0;Ae<ie;Ae++){let de=G/ge,Fe=(f()-.5)*26,Ce=Math.sin(G*.11+Math.sin(Ae*.05)*1.6)*6,O=(G*ie+Ae)*4;Ge[O]=90-30*de+Fe+Ce,Ge[O+1]=68-22*de+Fe*.9+Ce,Ge[O+2]=50-12*de+Fe*.8+Ce*.6,Ge[O+3]=255}N.putImageData(Te,0,0),g(N,ie,ge,160,["rgba(150,140,124,.8)","rgba(120,112,100,.8)","rgba(70,60,50,.7)"],.8,3.2)},1/1.7,1/1.7);S.wrapT=Qi,S.offset.set(0,1+2.9/1.7);let v=i.std(16777215,.92,0,{map:m}),_=i.std(16777215,1,0,{map:M}),w=i.std(16777215,1,0,{map:S}),R=o.rubber,x=i.std(9341828,.7,0),A=i.std(10920859,.8,0),P=i.std(2060240,.15,0,{emissive:5220095,emissiveIntensity:.55}),B=o.blackPlastic,T=o.rubber,U=(N,ie,ge,Te)=>{let Ge=wn(ge),G=[],Ae=[],de=16;for(let Fe=3;Fe<=ie-3;Fe+=6)de=Math.max(7,Math.min(25,de+(Ge()-.5)*5)),G.push([Fe,de]);for(let Fe=0;Fe<4;Fe++){let Ce=3+(Ge()*(G.length-6)|0),O=G[Ce];Ae.push([O,[O[0]+8+Ge()*26,O[1]+(Ge()>.5?1:-1)*(5+Ge()*7)]])}return{key:N,w:ie,h:32,draw(Fe){let Ce=(O,we)=>{Fe.strokeStyle=we,Fe.lineWidth=O,Fe.lineJoin=Fe.lineCap="round",Fe.beginPath(),G.forEach((me,$e)=>Fe[$e?"lineTo":"moveTo"](me[0],me[1])),Fe.stroke()};if(Te){Ce(8,"rgba(74,72,68,1)"),Ce(3,"rgba(98,95,90,.9)");return}Ce(3.4,"rgba(150,144,134,.35)"),Ce(1.6,"rgba(16,14,12,.92)"),Fe.lineWidth=.9,Fe.strokeStyle="rgba(16,14,12,.8)",Ae.forEach(([O,we])=>{Fe.beginPath(),Fe.moveTo(O[0],O[1]),Fe.lineTo(we[0],we[1]),Fe.stroke()})}}},I=c([{key:"warn",text:"RADON SYSTEM",sub:"DO NOT TURN OFF",w:384,h:112,size:50,color:"#16130c",bg:"#e3bd2f"},{key:"info",w:384,h:150,draw(N,ie,ge){N.fillStyle="#e8e3d6",N.fillRect(0,0,ie,ge),N.fillStyle="#1a1c20",N.textAlign="left",N.textBaseline="middle",N.font="700 25px ui-monospace, Menlo, monospace",N.fillText("RADON MITIGATION",14,24),N.font="500 19px ui-monospace, Menlo, monospace",["SUB-SLAB DEPRESSURIZATION","INSTALLED 2026-11","BEFORE: 412 Bq/m\xB3","RETEST: 91-DAY TEST"].forEach((Te,Ge)=>N.fillText(Te,14,56+Ge*24))}},{key:"air",text:"AIRFLOW \u25B2",w:224,h:56,size:30,color:"#16130c",bg:"#e8e3d6"},{key:"fan",text:"RADON FAN",sub:"120 V \xB7 60 Hz \xB7 85 W",w:384,h:104,size:44,color:"#2a2c30"},{key:"jbox",text:"RADON FAN",sub:"DISCONNECT",w:224,h:84,size:34,color:"#16130c",bg:"#e3bd2f"},{key:"sump",text:"SEALED SUMP",sub:"RADON \xB7 KEEP CLOSED",w:320,h:96,size:38,color:"#16130c",bg:"#e8e3d6"},{key:"alpha",w:160,h:160,draw(N,ie){N.fillStyle="#e8e3d6",N.beginPath(),N.arc(ie/2,ie/2,ie/2-2,0,6.3),N.fill(),N.fillStyle="#1a1c20",N.textAlign="center",N.textBaseline="middle",N.font="700 17px ui-monospace, Menlo, monospace",N.fillText("ALPHA TRACK",ie/2,46),N.font="600 14px ui-monospace, Menlo, monospace",N.fillText("LONG-TERM \xB7 91 d",ie/2,72),N.font="500 13px ui-monospace, Menlo, monospace",N.fillText("START 11-10",ie/2,96),N.fillText("DO NOT OPEN",ie/2,116)}},{key:"scale",w:64,h:300,draw(N,ie,ge){N.fillStyle="#ebe7dd",N.fillRect(0,0,ie,ge),N.fillStyle="#1a1c20",N.strokeStyle="#1a1c20",N.textBaseline="middle",N.textAlign="center";for(let Te=-11;Te<=11;Te++){let Ge=ge/2-Te*11,G=Te%5===0;N.lineWidth=G?2:1,N.beginPath(),N.moveTo(G?10:18,Ge),N.lineTo(ie-(G?10:18),Ge),N.stroke()}N.font="700 15px ui-monospace, Menlo, monospace",N.fillText("0",ie/2,ge/2-9),N.font="600 12px ui-monospace, Menlo, monospace",N.fillText("Pa",ie/2,12),N.fillText("250",ie/2,ge/2-64),N.fillText("250",ie/2,ge/2+64)}},U("ca",512,7,!1),U("cas",512,7,!0),U("cb",384,9,!1),U("cbs",384,9,!0)],{width:1024,emissive:.22}),k=[];{let N=400;for(let ie=0;ie<46;ie++)N=nt(N,330+f()*200,.45),k.push(N)}let j=c([{key:"mon",w:256,h:192,value:412,after:0,draw(N,ie,ge,Te){N.fillStyle="#06080c",N.fillRect(0,0,ie,ge);let Ge=Math.round(Te.value),G=Ge>=200?"#ff6b4f":Ge>=100?"#f4bd7e":"#8fd3a6";N.textBaseline="middle",N.textAlign="left",N.fillStyle="#8b93a1",N.font="600 15px ui-monospace, Menlo, monospace",N.fillText("RADON",14,18),N.textAlign="right",N.fillText(Te.after>.5?"RETEST":"91-DAY AVG",ie-14,18),Te.after>.5&&(N.textAlign="right",N.fillStyle="#8b93a1",N.font="500 15px ui-monospace, Menlo, monospace",N.fillText("was 412",ie-14,52)),N.textAlign="left",N.fillStyle=G,N.font="700 64px ui-monospace, Menlo, monospace";let Ae=String(Ge);N.fillText(Ae,12,66);let de=N.measureText(Ae).width;N.fillStyle="#cfd4da",N.font="500 17px ui-monospace, Menlo, monospace",N.fillText("Bq/m\xB3",20+de,80);let Fe=178,Ce=64/480,O=14,we=(ie-28)/(k.length-1);N.strokeStyle="rgba(139,147,161,.6)",N.lineWidth=1,N.setLineDash([4,4]),N.beginPath(),N.moveTo(O,Fe-200*Ce),N.lineTo(ie-14,Fe-200*Ce),N.stroke(),N.setLineDash([]),N.fillStyle="#8b93a1",N.font="500 12px ui-monospace, Menlo, monospace",N.fillText("200",O,Fe-200*Ce-9),N.strokeStyle=G,N.lineWidth=2.2,N.beginPath(),k.forEach((me,$e)=>{let ft=Te.after*Et(k.length-12,k.length-1,$e),wt=nt(me,Te.value+(me-420)*.08,ft);N[$e?"lineTo":"moveTo"](O+$e*we,Fe-wt*Ce)}),N.stroke()}}],{width:256,emissive:.8}),q=(N,ie,ge,Te,Ge,G,Ae,de,Fe)=>{let Ce=N.plane(ie,ge,Fe),O=Ce.geometry.attributes.uv,we=1,me=0,$e=1,ft=0;for(let Yt=0;Yt<O.count;Yt++)we=Math.min(we,O.getX(Yt)),me=Math.max(me,O.getX(Yt)),$e=Math.min($e,O.getY(Yt)),ft=Math.max(ft,O.getY(Yt));let wt=new $t(ge,Ce.geometry.parameters.height,16,1),Pt=wt.attributes.position,Bt=wt.attributes.uv;for(let Yt=0;Yt<Pt.count;Yt++){let bn=de+Pt.getX(Yt)/Te;Pt.setXYZ(Yt,Ge+Te*Math.sin(bn),G+Pt.getY(Yt),Ae+Te*Math.cos(bn)),Bt.setXY(Yt,nt(we,me,Bt.getX(Yt)),nt($e,ft,Bt.getY(Yt)))}return wt.computeVertexNormals(),Ce.geometry.dispose(),Ce.geometry=wt,Ce},Z=(N,ie,ge,Te,Ge=.0015)=>{let G=ge[0]-ie[0],Ae=ge[1]-ie[1],de=Math.hypot(G,Ae);return I.plane(N,de,Te,(ie[0]+ge[0])/2,Vs+Ge,(ie[1]+ge[1])/2,{rot:[-Math.PI/2,0,Math.atan2(-Ae,G)]})},W=(N,ie,ge,Te,Ge,G,Ae,de,Fe={})=>{let Ce=(N+ie)/2,O=(ge+Te)/2,we=(Ge+G)/2;return s(ie-N,Te-ge,G-Ge,Ae,Ce,O,we,de,{uv:{ox:Ce,oy:O,oz:we},...Fe})},X=Ln-.5;W(-5,5,An,Vs,-4,Ln,v,p),W(-5,5,An,Vs,Ni,4,v,p),W(-5,ri,An,Vs,Ln,Ni,v,p),W(ai,5,An,Vs,Ln,Ni,v,p),[[-5,ri,-4,Ln],[ai,5,-4,Ln],[ri,ai,-4,X],[-5,5,Ni,4],[-5,ri,Ln,Ni],[ai,5,Ln,Ni]].forEach(([N,ie,ge,Te])=>W(N,ie,ts,An,ge,Te,_,p,{cast:!1})),[[-5.6,ri,-4.6,Ln],[ai,5.6,-4.6,Ln],[ri,ai,-4.6,X],[-5.6,5.6,Ni,4.6],[-5.6,ri,Ln,Ni],[ai,5.6,Ln,Ni]].forEach(([N,ie,ge,Te])=>W(N,ie,zl,ts,ge,Te,w,p,{cast:!1})),W(ri,ai,zl,md,Ln,Ni,w,p,{cast:!1}),W(ri,ai,An-.004,An,Ln,Ln+.002,R,p,{cast:!1}),W(ri-.002,ri,An-.004,An,Ln,Ni,R,p,{cast:!1}),W(ai,ai+.002,An-.004,An,Ln,Ni,R,p,{cast:!1});{let N=t>=1?260:120,ie=new nr(1,0),ge=new Qn(ie,i.std(16777215,1,0),N),Te=new St,Ge=new Tn,G=new di,Ae=new F,de=new F,Fe=new ct,Ce=0;for(;Ce<N;){let O=f(),we=ts+.012+f()*(An-ts-.024),me=.007+f()*.013,$e=f();if($e<.6){let wt=nt(ri+.02,ai-.02,O);if(Math.abs(wt-kt)<$r+.03)continue;de.set(wt,we,Ln+me*.25)}else $e<.8?de.set(ri+me*.25,we,nt(Ln+.02,Ni-.02,O)):de.set(ai-me*.25,we,nt(Ln+.02,Ni-.02,O));Ae.set(me,me*(.6+f()*.4),me*(.7+f()*.3)),Ge.setFromEuler(G.set(f()*6,f()*6,f()*6)),ge.setMatrixAt(Ce,Te.compose(de,Ge,Ae));let ft=.07+f()*.07;ge.setColorAt(Ce,Fe.setRGB(ft,ft*.97,ft*.9)),Ce++}ge.castShadow=!1,ge.receiveShadow=!0,p.add(ge)}W(ri,ai,ts,An,X,Ln,_,d,{cast:!1}),W(ri,ai,zl,ts,X,Ln,w,d,{cast:!1});{let N=Math.asin((An-ts)/$r),ie=Math.cos(N)*$r,ge=(me,$e)=>{let ft=new ji(me,{depth:Ln-X,bevelEnabled:!1,curveSegments:20});ft.translate(0,0,X);let wt=new Ue(ft,$e);return wt.receiveShadow=!0,u.add(wt),wt},Te=new jn;Te.moveTo(ri,An),Te.lineTo(kt-$r,An),Te.absarc(kt,An,$r,Math.PI,Math.PI+N,!1),Te.lineTo(ri,ts),Te.closePath();let Ge=new jn;Ge.moveTo(ai,An),Ge.lineTo(ai,ts),Ge.lineTo(kt+ie,ts),Ge.absarc(kt,An,$r,-N,0,!1),Ge.closePath();let G=new jn;G.moveTo(ri,ts),G.lineTo(kt-ie,ts),G.absarc(kt,An,$r,Math.PI+N,2*Math.PI-N,!1),G.lineTo(ai,ts),G.lineTo(ai,zl),G.lineTo(ri,zl),G.closePath(),ge(Te,_),ge(Ge,_),ge(G,w);let Ae=new Hn($r,24,10,Math.PI,Math.PI,Math.PI/2,Math.PI/2);Ae.translate(kt,An,on);let de=Ae.attributes.position,Fe=Ae.attributes.uv;for(let me=0;me<de.count;me++)Fe.setXY(me,de.getX(me)+de.getZ(me)*.7,de.getY(me));let Ce=Ae.index.array;for(let me=0;me<Ce.length;me+=3){let $e=Ce[me+1];Ce[me+1]=Ce[me+2],Ce[me+2]=$e}let O=Ae.attributes.normal;for(let me=0;me<O.count;me++)O.setXYZ(me,-O.getX(me),-O.getY(me),-O.getZ(me));let we=new Ue(Ae,_);we.receiveShadow=!0,u.add(we)}Z("ca",Gl[0],Gl[1],p),Z("cb",kl[0],kl[1],p),Z("cas",Gl[0],Gl[1],u,.003),Z("cbs",kl[0],kl[1],u,.003),W(-4.9,4.9,Vs-.002,Vs+.0012,ns,ns+.012,T,p,{cast:!1,receive:!1}),s(9.8,.012,.016,x,0,Vs+.004,ns+.008,u,{r:.005,cast:!1});let K=Vs+.05,ve=o.whitePlastic;r(.024,-.12-K,ve,ei,(K-.12)/2,Kn,p),r(.034,.1,o.rubber,ei,-2.3,Kn,p,{seg:16}),[-2.34,-2.26].forEach(N=>r(.036,.012,o.galv,ei,N,Kn,p,{seg:16,cast:!1})),a([[ei,-.2,Kn],[ei,-.13,Kn+.02],[ei,-.12,Kn+.1]],.024,ve,p,{radial:12,seg:10}),r(.024,4-Kn-.1,ve,ei,-.12,(Kn+.1+3.99)/2,p,{axis:"z"}),a([[ei+.06,K+.03,Kn+.05],[ei+.05,-2.4,Kn+.03],[ei+.03,-1.6,Kn+.03],[ei+.03,-.26,Kn+.03]],.004,o.rubber,p,{radial:5,cast:!1}),r(.345,.022,o.blackPlastic,ei+.012,K+.011,Kn-.016,d,{seg:40}).rotation.set(.015,0,-.012),r(.055,.003,T,ei,K+.024,Kn,d,{seg:20,cast:!1}),s(.035,.004,.05,T,ei+.06,K+.023,Kn+.06,d,{cast:!1});{r(.35,.02,o.blackPlastic,ei,K+.01,Kn,u,{seg:40});let N=new Ue(new Bi(.346,.006,6,48),x);N.rotation.x=Math.PI/2,i.place(N,ei,K+.004,Kn,u,{cast:!1});for(let ie=0;ie<10;ie++){let ge=ie/10*Math.PI*2;r(.009,.008,o.galv,ei+Math.cos(ge)*.318,K+.024,Kn+Math.sin(ge)*.318,u,{seg:8,cast:!1})}r(.036,.016,o.rubber,ei,K+.026,Kn,u,{seg:16,cast:!1}),r(.011,.012,o.rubber,ei+.06,K+.025,Kn+.05,u,{seg:10,cast:!1}),I.plane("sump",.16,u,ei-.1,K+.0215,Kn+.15,{rot:[-Math.PI/2,0,.35]})}s(.9,.022,.2,o.plywood,Gn.x,Gn.y-.011,Gn.z,p,{uv:{ox:1,oz:1}}),[-.33,.33].forEach(N=>{let ie=Gn.x+N;s(.022,.15,.004,B,ie,Gn.y-.097,ns+.002,p,{cast:!1}),s(.022,.004,.17,B,ie,Gn.y-.024,ns+.087,p,{cast:!1});let ge=s(.016,.004,.2,B,ie,Gn.y-.085,ns+.077,p,{cast:!1});ge.rotation.x=-.71,[-.05,-.13].forEach(Te=>r(.006,.006,o.galv,ie,Gn.y+Te,ns+.006,p,{axis:"z",seg:8,cast:!1}))}),r(.034,.016,o.greyPlastic,Gn.x-.24,Gn.y+.008,Gn.z+.01,p,{seg:28}),r(.03,.004,o.blackPlastic,Gn.x-.24,Gn.y+.018,Gn.z+.01,p,{seg:28,cast:!1}),I.plane("alpha",.056,p,Gn.x-.24,Gn.y+.0205,Gn.z+.01,{rot:[-Math.PI/2,0,.2]});{let N=new lt;N.position.set(Ws.x,Gn.y,Ws.z),N.rotation.y=-.22,p.add(N),s(.105,.155,.04,o.whitePlastic,0,.0775,0,N,{r:.012}),s(.092,.074,.003,o.blackPlastic,0,.105,.02,N,{cast:!1}),j.plane("mon",.086,N,0,.105,.0218);for(let ie=0;ie<5;ie++)s(.05,.003,.002,o.greyPlastic,0,.022+ie*.008,.0202,N,{cast:!1})}let Ne=Math.sin(ma),He=Math.cos(ma);r(Dn,Gi-.24-(An-.08),A,kt,(Gi-.24+An-.08)/2,on,u,{seg:28}),r(Dn,go-Gi-.22,A,kt,(go+Gi+.22)/2,on,u,{seg:28}),r(Dn+.014,.012,x,kt,Vs+.005,on,u,{seg:28,cast:!1}),[-1.95,-.62,2,5].forEach(N=>r(Dn+.006,.07,A,kt,N,on,u,{seg:28})),s(.91,.14,.038,o.plywood,-1.5,-.18,on-Dn-.022,u,{uv:!0});{let N=new Ue(new Bi(Dn+.003,.0022,4,24,Math.PI),o.galv);N.rotation.set(-Math.PI/2,0,0),i.place(N,kt,-.16,on,u,{cast:!1}),[-1,1].forEach(ie=>{s(.028,.03,.002,o.galv,kt+ie*(Dn+.016),-.16,on-Dn-.002,u,{cast:!1}),r(.005,.004,o.galv,kt+ie*(Dn+.02),-.16,on-Dn+.001,u,{axis:"z",seg:8,cast:!1})})}q(I,"warn",.11,Dn+.0012,kt,-1.18,on,ma,u),q(I,"info",.1,Dn+.0012,kt,-2.18,on,ma,u),q(I,"air",.07,Dn+.0012,kt,-.88,on,ma,u);let Qe=[];{let N=new lt;N.position.set(kt+Ne*(Dn+.014),-1.58,on+He*(Dn+.014)),N.rotation.y=ma,u.add(N),s(.064,.2,.006,o.whitePlastic,0,0,0,N,{r:.003}),I.plane("scale",.026,N,0,-.005,.0034),[.075,-.075].forEach(Te=>s(.03,.014,.014,o.whitePlastic,0,Te,-.009,N,{cast:!1}));let ie=o.glassClear;[-.019,.019].forEach(Te=>r(.0042,.16,ie,Te,0,.009,N,{seg:10,cast:!1}));let ge=[[-.019,-.08,.009],[-.019,-.088,.009],[-.012,-.096,.009],[0,-.098,.009],[.012,-.096,.009],[.019,-.088,.009],[.019,-.08,.009]];a(ge,.0042,ie,N,{radial:8,seg:16,cast:!1}),a(ge,.003,P,N,{radial:6,seg:16,cast:!1}),[-.019,.019].forEach(Te=>{let Ge=new en(.003,.003,1,8);Ge.translate(0,.5,0);let G=new Ue(Ge,P);G.position.set(Te,-.08,.009),G.userData.keep=!0,G.castShadow=!1,N.add(G),Qe.push(G)}),r(.0055,.008,o.blackPlastic,.019,.083,.009,N,{seg:10,cast:!1}),a([[-.019,.08,.009],[-.019,.1,.01],[-.024,.118,0],[-.022,.124,-.014]],.003,o.glassClear,N,{radial:6,seg:12,cast:!1}),r(.007,.008,o.rubber,-.022,.124,-.016,N,{axis:"z",seg:10,cast:!1}),[.075,-.075].forEach(Te=>{let Ge=new Ue(new Bi(Dn+.0015,.0018,4,32),o.blackPlastic);Ge.rotation.x=Math.PI/2,i.place(Ge,kt,-1.58+Te,on,u,{cast:!1})})}{let N=o.whitePlastic,ie=o.greyPlastic,ge=O=>{r(Dn+.011,.1,o.rubber,kt,O,on,u,{seg:28}),[O-.03,O+.03].forEach((we,me)=>{r(Dn+.0125,.012,o.galv,kt,we,on,u,{seg:28,cast:!1});let $e=ma-1.1+me*.5;s(.016,.012,.012,o.galv,kt+Math.sin($e)*(Dn+.018),we,on+Math.cos($e)*(Dn+.018),u,{rot:[0,$e,0],cast:!1})})};ge(Gi-.27),ge(Gi+.27),r(Dn+.002,.06,ie,kt,Gi-.2,on,u,{seg:28}),r(Dn+.002,.06,ie,kt,Gi+.2,on,u,{seg:28}),r(.07,.06,N,kt,Gi-.11,on,u,{seg:36,r2:.135}),r(.135,.06,N,kt,Gi+.11,on,u,{seg:36,r2:.07}),r(.135,.16,N,kt,Gi,on,u,{seg:36}),r(.1375,.012,ie,kt,Gi+.02,on,u,{seg:36,cast:!1}),q(I,"fan",.16,.1365,kt,Gi-.03,on,-.9,u);let Te=Math.atan(.72),Ge=O=>om(O)-.2466;[-3,-2.4,-1.8,-1.2,-.6,0].forEach(O=>s(4.84/Math.cos(Te),.14,.038,o.plywood,-2.48,Ge(-2.48)-.07/Math.cos(Te),O,u,{rot:[0,0,Te],uv:!0})),s(.038,.18,4.2,o.plywood,0,Ge(0)-.09,-1.5,u,{uv:!0});let G={x:kt-.35,z:-1.8},Ae=Ge(G.x)-.14/Math.cos(Te);s(.089,Ae-6.37,.038,o.plywood,G.x,(Ae+6.37)/2,G.z,u,{uv:!0}),s(.11,.11,.055,o.greyPlastic,G.x,7.75,G.z+.047,u,{r:.006}),s(.018,.03,.014,o.blackPlastic,G.x,7.77,G.z+.081,u,{cast:!1}),I.plane("jbox",.075,u,G.x,7.72,G.z+.0752);let de=[kt+Math.sin(Math.PI+.25)*.135,Gi-.04,on+Math.cos(Math.PI+.25)*.135];r(.008,.016,o.blackPlastic,de[0],de[1],de[2]-.006,u,{axis:"z",seg:10,cast:!1}),a([[de[0],de[1],de[2]-.012],[de[0]+.02,de[1]-.12,de[2]-.1],[G.x+.02,7.62,G.z+.12],[G.x,7.69,G.z+.06]],.0045,o.blackPlastic,u,{radial:6,cast:!1}),a([[G.x+.03,7.69,G.z+.05],[G.x+.05,7.4,G.z+.03],[G.x+.055,6.6,G.z+.025],[G.x+.2,6.42,G.z+.1]],.006,o.rubber,u,{radial:6,cast:!1}),[-1,1].forEach(O=>{s(.34,.03,.006,o.galv,kt,6.44,on+O*(Dn+.004),u,{cast:!1}),[-.15,.15].forEach(we=>r(.006,.03,o.galv,kt+we,6.44,on,u,{axis:"z",seg:8,cast:!1}))});let Fe=om(kt),Ce=Math.atan(.72);s(.42,.006,.42,o.galv,kt,Fe+.003/Math.cos(Ce),on,u,{rot:[0,0,Ce],cast:!1}),r(.13,.15,o.rubber,kt,Fe+.09,on,u,{seg:28,r2:Dn+.008}),r(Dn+.012,.02,o.galv,kt,Fe+.2,on,u,{seg:28,cast:!1}),r(Dn+.004,.02,o.galv,kt,go-.005,on,u,{seg:28,cast:!1}),r(Dn-.004,.002,T,kt,go-.004,on,u,{seg:24,cast:!1})}let dt=new Set([A,o.plywood,o.whitePlastic,o.blackPlastic,o.rubber,v]);[p,d,u].forEach(N=>N.traverse(ie=>{ie.isMesh&&!ie.isInstancedMesh&&(ie.castShadow=dt.has(ie.material)&&ie.renderOrder===0,ie.receiveShadow=!0)})),i.bake(p),i.bake(d),i.bake(u);let re=14257407,ye=i.particles(300,{color:re,size:.065,gain:2.2}),Le=ye.userData.n,Se=ye.userData.pos,ke=new Float32Array(Le*4),ee=new Float32Array(Le*3),We=(N,ie)=>{Se[N*3]=nt(ri+.03,ai-.03,f()),Se[N*3+1]=ie?nt(md,An-.03,f()):md+f()*.08,Se[N*3+2]=nt(Ln+.02,Ni-.05,f()),ke[N*4]=.05+f()*.08,ke[N*4+1]=f()*6.28;let ge=f(),Te=(f()-.5)*.6;ge<.4?(ke[N*4+2]=Te,ke[N*4+3]=-1):ge<.6?(ke[N*4+2]=-1,ke[N*4+3]=Te):ge<.75?(ke[N*4+2]=1,ke[N*4+3]=Te):(ke[N*4+2]=Te,ke[N*4+3]=1)};for(let N=0;N<Le;N++){We(N,!0);let ie=f();ee[N*3]=nt(Se[N*3],xo.x,ie),ee[N*3+1]=nt(Se[N*3+1],xo.y,ie*ie),ee[N*3+2]=nt(Se[N*3+2],xo.z,ie)}let le=Se.slice(),pe=i.particles(170,{color:re,size:.055,gain:1.8}),te=pe.userData.n,he=pe.userData.pos,xe=new Float32Array(te*4),Xe=(N,ie,ge,Te)=>{ge[Te*3]=nt(N[0][0],N[1][0],ie),ge[Te*3+2]=nt(N[0][1],N[1][1],ie)},Ve=(N,ie)=>{let ge=f();if(ge<.3)Xe(Gl,f(),he,N);else if(ge<.48)Xe(kl,f(),he,N);else if(ge<.8)he[N*3]=nt(lm[0],lm[1],f()),he[N*3+2]=ns+.012;else{let Te=f()*6.283,Ge=f()<.4?.06:.35;he[N*3]=ei+Math.cos(Te)*Ge,he[N*3+2]=Kn+Math.sin(Te)*Ge}if(he[N*3+1]=Vs+.01,xe[N*4]=.03+f()*.11,xe[N*4+1]=f()*6.28,xe[N*4+2]=4+f()*10,xe[N*4+3]=0,ie){let Te=f()*xe[N*4+2];xe[N*4+3]=Te,he[N*3+1]+=xe[N*4]*Te*.85}};for(let N=0;N<te;N++)Ve(N,!0);let st=i.particles(80,{color:re,size:.08,gain:1.2}),it=st.userData.n,Q=st.userData.pos,_t=new Float32Array(it*4),vt=(N,ie)=>{if(Q[N*3]=kt+(f()-.5)*.05,Q[N*3+1]=go,Q[N*3+2]=on+(f()-.5)*.05,_t[N*4]=.45+f()*.35,_t[N*4+1]=f()*6.28,_t[N*4+2]=2+f()*1.6,_t[N*4+3]=0,ie){let ge=f()*_t[N*4+2];_t[N*4+3]=ge,H(N,ge,0)}},H=(N,ie,ge)=>{let Te=_t[N*4+3]/_t[N*4+2],Ge=_t[N*4+1];Q[N*3+1]+=_t[N*4]*(1-.6*Te)*ie,Q[N*3]+=(-.22*Te+Math.sin(Ge)*.12*Te)*ie,Q[N*3+2]+=(.08*Te+Math.cos(Ge+ge*.3)*.12*Te)*ie};for(let N=0;N<it;N++)vt(N,!0);h.add(ye,pe,st);let E={soil:l(-.45,-3.42,Ln+.02),test:l(Ws.x,Gn.y+.1,Ws.z+.03),pit:l(kt,An-.12,on+.04),fan:l(kt-.08,Gi,on+.11),stack:l(kt,go-.15,on),after:l(Ws.x,Gn.y+.1,Ws.z+.03)},ae={time:19.4,cut:0,ghost:0,ground:1,orbit:.012},ue=[{...ae,radius:15,theta:.6,phi:1.36,fx:-.6,ty:-1.5,fz:-.8,cut:1,ground:0,dof:0,orbit:.025},{...ae,radius:1.6,theta:.2,phi:1.36,fx:Ws.x-.05,ty:Gn.y+.07,fz:ns+.1,dof:1.1,narrow:{fx:Ws.x-.12}},{...ae,radius:2.9,theta:.38,phi:1.2,fx:kt+.25,ty:-3,fz:on,dof:1,narrow:{fx:kt+.05}},{...ae,radius:2.6,theta:.5,phi:1.5,fx:kt,ty:8.05,fz:on,dof:.9,orbit:.012,narrow:{ty:7.85}},{...ae,radius:.78,theta:-.12,phi:1.47,fx:Ws.x,ty:Gn.y+.1,fz:Ws.z+.02,dof:1.3}],_e=0,Ze=0,Ke=412,Ie=412,be=0,et=0,gt=-1;return{name:"radon",group:h,anchors:E,shots:ue,hides(N){let ie=[...N.sys.radon?N.sys.radon.meshes:[]];return N.sys.foundation&&N.sys.foundation.meshes.forEach(ge=>{Math.abs(ge.position.y+2.88)<.01&&ie.push(ge)}),N.layers.basement.traverse(ge=>{ge.isMesh&&Math.abs(ge.position.x-ei)<.01&&Math.abs(ge.position.z-Kn)<.01&&ie.push(ge)}),ie},light(N){return N===0?{pos:[.6,-.6,.9],at:[-.9,-3.1,-1.1],power:.75,fill:.6}:N===1?{pos:[-.3,-.9,-2.4],at:[Gn.x+.1,Gn.y,ns],power:.4,fill:.5}:N===2?{pos:[.2,-1.6,.4],at:[kt+.1,An-.2,on],power:.4}:N===3?{pos:[.3,8.85,.3],at:[kt,Gi,on],power:.75,fill:.35}:N===4?{pos:[.2,-1.05,-2.9],at:[Ws.x,Gn.y+.08,ns],power:.35,fill:.4}:{pos:[-2.3,-.9,.3],at:[-1,-1.7,-2.4],power:.5}},update({step:N,t:ie,dt:ge,snap:Te}){let Ge=N>=2?1:0,G=O=>Te?1:1-Math.exp(-ge*O);_e=nt(_e,Ge,G(1.6)),Ze=nt(Ze,Ge,G(1.2)),d.visible=!Ge,u.visible=!!Ge;let Ae=.022*Ze;Qe[0].scale.y=.08+Ae,Qe[1].scale.y=.08-Ae,Ke=N===4?nt(Ke,45,G(1.3)):nt(Ke,412,G(6)),et=nt(et,N===4?1:0,G(1.3));let de=Math.round(Ke),Fe=Math.round(et*20)/20;if((de!==Ie||Fe!==be)&&(Ie=de,be=Fe,j.set("mon",void 0,void 0,{value:de,after:Fe})),pe.material.opacity=1-_e,pe.visible=_e<.98,st.material.opacity=Et(.3,1,Ze),st.visible=Ze>.3,n){let O=_e>.5?1:0;O!==gt&&(gt=O,Se.set(O?ee:le),ye.geometry.attributes.position.needsUpdate=!0);return}let Ce=Math.min(ge,.05);for(let O=0;O<Le;O++){let we=Se[O*3],me=Se[O*3+1],$e=Se[O*3+2],ft=ke[O*4],wt=ke[O*4+1],Pt=Math.sin(ie*.9+wt)*.02,Bt=ft,Yt=Math.cos(ie*.7+wt)*.02,bn=Et(ts-.03,An-.03,me);Pt+=ke[O*4+2]*.14*bn,Yt+=ke[O*4+3]*.14*bn,Bt*=1-bn;let pn=xo.x-we,C=xo.y-me,Ee=xo.z-$e,Oe=Math.hypot(pn,C,Ee)+1e-4,je=(.12+ft)*(.7+.35/(Oe+.2)),tt=pn/Oe*je+Math.sin(ie*1.3+wt)*.015,bt=C/Oe*je,ut=Ee/Oe*je;Se[O*3]=we+nt(Pt,tt,_e)*Ce,Se[O*3+1]=Math.min(me+nt(Bt,bt,_e)*Ce,An-.015),Se[O*3+2]=$e+nt(Yt,ut,_e)*Ce,(Se[O*3]<ri-.03||Se[O*3]>ai+.03||Se[O*3+2]<Ln-.04||Se[O*3+2]>Ni+.03||_e>.5&&Oe<.06)&&We(O,!1)}if(ye.geometry.attributes.position.needsUpdate=!0,pe.visible){for(let O=0;O<te;O++){let we=xe[O*4+1];if(xe[O*4+3]+=Ce,xe[O*4+3]>xe[O*4+2]){Ve(O,!1);continue}he[O*3+1]+=xe[O*4]*Ce*(1-.3*xe[O*4+3]/xe[O*4+2]),he[O*3]+=Math.sin(ie*.5+we)*.035*Ce,he[O*3+2]+=Math.cos(ie*.4+we*1.3)*.035*Ce}pe.geometry.attributes.position.needsUpdate=!0}if(st.visible){for(let O=0;O<it;O++)_t[O*4+3]+=Ce,_t[O*4+3]>_t[O*4+2]?vt(O,!1):H(O,Ce,ie);st.geometry.attributes.position.needsUpdate=!0}}}}var un=-3.3,_n=-2.6,qt=-2.8,gd=-2.51,fs=-1.39,ki=_n+.37,ps=-4.9,Ls=-.26,ti=-2.75,ms=-.6,Py=[0,1,12,18,22,25],Iy=["INSTALL","MAINTAIN","UPGRADE","REPLACE","REMOVE","DEMOLISH"],Dy=[[0,"INSTALLED \xB7 PERMIT"],[1,"FILTER \xB7 TUNE-UP"],[3,"FILTER \xB7 TUNE-UP"],[5,"DUCTS CLEANED"],[8,"IGNITER"],[11,"FILTER \xB7 TUNE-UP"],[12,"HEAT PUMP COIL"],[15,"TUNE-UP"],[18,"FILTER \xB7 TUNE-UP"],[20,"BLOWER MOTOR"],[24,"TUNE-UP"]],xh=12;function um({kit:i,tier:e}){let{box:t,cyl:n,tube:s,mats:r,atlas:a,V:o,std:c}=i,l=new lt,h=new lt;l.add(h);let p=c(9736070,.42,.3,{envMapIntensity:.8}),d=c(6717583,.42,.3,{envMapIntensity:.8}),u=c(10920599,.93,0),f=c(12886642,.82,0),y=c(9400648,.95,0),g=c(13884388,.88,0),m=c(5330782,.5,.45,{envMapIntensity:.8}),M=c(9316898,.45,.5),S=c(2897971,.6,.05),v=c(13210519,1,0),_=c(1313284,.4,0,{emissive:16747066,emissiveIntensity:1.4}),w=r.led(9425830,2),R=r.castIron,x=r.galv,A=r.pvc,P=r.copper,B=r.yellowPlastic,T="ui-monospace, Menlo, Consolas, monospace",U=C=>(Ee,Oe,je)=>{Ee.fillStyle=C?"#5f574b":"#a9a08a",Ee.fillRect(0,0,Oe,je);for(let tt=0;tt<Oe;tt+=8)Ee.fillStyle=C?"rgba(30,26,20,.55)":"rgba(120,110,90,.45)",Ee.fillRect(tt,0,3,je);if(C)for(let tt=0;tt<90;tt++)Ee.fillStyle=`rgba(40,34,26,${.15+tt%5*.06})`,Ee.fillRect(tt*37%Oe,tt*53%je,6+tt%4*3,4+tt%3*3);Ee.fillStyle=C?"#6e5a3c":"#9a7a4c",Ee.fillRect(0,0,Oe,6),Ee.fillRect(0,je-6,Oe,6),Ee.fillRect(0,0,6,je),Ee.fillRect(Oe-6,0,6,je)},I=[{key:"afue",text:"96% AFUE",sub:"60 000 BTU/h \xB7 NAT GAS",w:256,h:72,size:32,color:"#1b1d21",bg:"#c9c3b2"},{key:"permit",w:128,h:220,draw(C,Ee,Oe){C.fillStyle="#e08a2c",C.beginPath(),C.moveTo(0,22),C.lineTo(22,0),C.lineTo(Ee-22,0),C.lineTo(Ee,22),C.lineTo(Ee,Oe),C.lineTo(0,Oe),C.fill(),C.fillStyle="#14161a",C.beginPath(),C.arc(Ee/2,20,8,0,6.3),C.fill(),C.textAlign="center",C.textBaseline="middle",C.fillStyle="#1a1308",C.font=`700 22px ${T}`,C.fillText("GAS",Ee/2,58),C.fillText("PERMIT",Ee/2,84),C.font=`500 15px ${T}`,C.fillText("INSPECTED",Ee/2,122),C.fillText("YEAR 0",Ee/2,144),C.strokeStyle="#1a1308",C.lineWidth=2,C.strokeRect(14,166,Ee-28,36),C.font=`700 18px ${T}`,C.fillText("PASS",Ee/2,185)}},{key:"crate",text:"UPFLOW FURNACE",sub:"THIS SIDE UP \xB7 52 kg",w:320,h:72,size:30,color:"#2a1d0e"},{key:"svc",w:256,h:384,year:0,draw(C,Ee,Oe,je){C.fillStyle="#d8d1bd",C.fillRect(0,0,Ee,Oe),C.fillStyle="#24262b",C.fillRect(0,0,Ee,44),C.fillStyle="#e9e3d3",C.textAlign="left",C.textBaseline="middle",C.font=`700 20px ${T}`,C.fillText("SERVICE RECORD",12,23),C.font=`500 15px ${T}`,Dy.forEach(([tt,bt],ut)=>{let xt=66+ut*28;C.strokeStyle="rgba(20,22,26,.3)",C.beginPath(),C.moveTo(10,xt+13),C.lineTo(Ee-10,xt+13),C.stroke(),!(tt>je.year)&&(C.fillStyle="#2b3a66",C.fillText(("YR "+tt).padEnd(6)+bt,12,xt))})}},{key:"cal",w:200,h:248,year:0,verb:"INSTALL",draw(C,Ee,Oe,je){C.fillStyle="#cdc6b3",C.fillRect(0,0,Ee,Oe),C.fillStyle="#a8322a",C.fillRect(0,0,Ee,54),C.fillStyle="#1a1c20",[40,100,160].forEach(tt=>{C.beginPath(),C.arc(tt,8,6,0,6.3),C.fill()}),C.textAlign="center",C.textBaseline="middle",C.fillStyle="#f1e6d6",C.font=`700 24px ${T}`,C.fillText("YEAR",Ee/2,33),C.fillStyle="#16181c",C.font=`700 112px ${T}`,C.fillText(String(je.year),Ee/2,140),C.fillStyle="#5a3a1c",C.font=`700 22px ${T}`,C.fillText(je.verb,Ee/2,222)}},{key:"tstat",w:192,h:192,draw(C,Ee,Oe){C.fillStyle="#05070b",C.beginPath(),C.arc(Ee/2,Oe/2,Ee/2-2,0,6.3),C.fill(),C.strokeStyle="#8fd3a6",C.lineWidth=6,C.beginPath(),C.arc(Ee/2,Oe/2,Ee/2-14,2.3,2.3+3.4),C.stroke(),C.textAlign="center",C.textBaseline="middle",C.fillStyle="#eef2f0",C.font=`600 58px ${T}`,C.fillText("21\xB0",Ee/2+4,Oe/2-6),C.fillStyle="#8fd3a6",C.font=`600 15px ${T}`,C.fillText("HEAT PUMP",Ee/2,Oe/2+36),C.fillStyle="#8b93a1",C.font=`500 13px ${T}`,C.fillText("OUT \u221218\xB0",Ee/2,Oe/2+58)}},{key:"coil",text:"HEAT PUMP COIL",sub:"CASED \xB7 3 TON",w:256,h:64,size:26,color:"#e3ddd0"},{key:"odu",text:"COLD CLIMATE",sub:"HEATS TO \u221230 \xB0C",w:256,h:64,size:26,color:"#e3ddd0"},{key:"tank",text:"189 L",sub:"GAS \xB7 40 000 BTU/h",w:192,h:96,size:42,color:"#e9e6de"},{key:"tkl",w:128,h:72,draw(C,Ee,Oe){C.fillStyle="#05070b",C.fillRect(0,0,Ee,Oe),C.textAlign="center",C.textBaseline="middle",C.fillStyle="#7fc4ff",C.font=`700 34px ${T}`,C.fillText("49\xB0C",Ee/2,Oe/2-6),C.fillStyle="#8fd3a6",C.font=`500 12px ${T}`,C.fillText("ON DEMAND",Ee/2,Oe-12)}},{key:"capped",w:112,h:176,draw(C,Ee,Oe){C.fillStyle="#c23a2b",C.fillRect(0,14,Ee,Oe-14),C.beginPath(),C.moveTo(0,14),C.lineTo(Ee/2,0),C.lineTo(Ee,14),C.fill(),C.fillStyle="#14161a",C.beginPath(),C.arc(Ee/2,20,7,0,6.3),C.fill(),C.textAlign="center",C.textBaseline="middle",C.fillStyle="#f6eee4",C.font=`700 21px ${T}`,C.fillText("CAPPED",Ee/2,64),C.font=`500 13px ${T}`,C.fillText("GAS OFF",Ee/2,98),C.fillText("DO NOT",Ee/2,124),C.fillText("OPEN",Ee/2,142)}},{key:"suite",w:256,h:320,draw(C,Ee,Oe){C.fillStyle="#c9c4b4",C.fillRect(0,0,Ee,Oe),C.fillStyle="#1a1c20",C.textAlign="left",C.textBaseline="middle",C.font=`700 21px ${T}`,C.fillText("SECONDARY SUITE",12,24),C.font=`500 14px ${T}`,C.fillText("BUILDING PERMIT \xB7 YR 25",12,48),C.strokeStyle="#2b3a66",C.lineWidth=3,C.strokeRect(20,70,Ee-40,170),C.beginPath(),C.moveTo(20,150),C.lineTo(130,150),C.moveTo(130,70),C.lineTo(130,240),C.stroke(),C.lineWidth=1.5,C.beginPath(),C.arc(130,196,34,Math.PI,Math.PI*1.5),C.stroke(),C.fillStyle="#2b3a66",C.font=`600 13px ${T}`,C.fillText("MECH",40,110),C.fillText("BEDROOM",148,110),C.fillText("BATH",40,196),C.fillText("LIVING",148,196),C.fillStyle="#1a1c20",C.font=`500 13px ${T}`,C.fillText("MECH ROOM: TYPE X",12,268),C.fillText("BOTH SIDES \xB7 30 MIN",12,290)}},{key:"disc",text:"HEAT PUMP",w:128,h:32,size:18,color:"#e3ddd0"},{key:"bin",text:"DRYWALL ONLY",w:192,h:40,size:22,color:"#e3ddd0"},{key:"rust",w:384,h:96,draw(C,Ee,Oe){let je=11,tt=()=>(je=je*16807%2147483647)/2147483647;C.clearRect(0,0,Ee,Oe);for(let bt=0;bt<Ee;bt+=2){let ut=Oe*(.35+.5*tt()*tt())*(.6+.4*Math.sin(bt*.05)**2),xt=C.createLinearGradient(0,Oe,0,Oe-ut);xt.addColorStop(0,"rgba(96,40,14,0.95)"),xt.addColorStop(.5,"rgba(122,56,20,0.75)"),xt.addColorStop(1,"rgba(140,70,30,0)"),C.fillStyle=xt,C.fillRect(bt,Oe-ut,2+tt()*2,ut)}}},{key:"pleatOld",w:96,h:128,draw:U(!0)},{key:"pleatNew",w:96,h:128,draw:U(!1)}],k=a(I,{width:1024,emissive:.22}),j=o(0,1,0),q=o(0,0,0),Z=C=>{let Ee=new Map;return C.traverse(Oe=>{Oe.isMesh&&Ee.set(Oe.material,Ee.get(Oe.material)||!1||Oe.castShadow)}),C.traverse(Oe=>{Oe.isMesh&&!Oe.userData.keep&&(Oe.castShadow=Ee.get(Oe.material),Oe.receiveShadow=!0)}),i.bake(C)},W=(C,Ee,Oe,je,tt={})=>{let bt=C.map(At=>o(At[0],At[1],At[2])),ut=tt.fit??1.35,xt=tt.seg||10,mt=tt.cast!==!1,It=(At,Wt,Mi)=>{let Ei=At.distanceTo(Wt);if(Ei<1e-4)return;let Ii=new Ue(new en(Mi,Mi,Ei,xt),Oe);Ii.position.copy(At).add(Wt).multiplyScalar(.5),Ii.quaternion.setFromUnitVectors(j,q.subVectors(Wt,At).normalize()),Ii.castShadow=mt,Ii.receiveShadow=!0,je.add(Ii)};for(let At=0;At<bt.length-1;At++)if(It(bt[At],bt[At+1],Ee),At>0&&ut){let Wt=bt[At];[bt[At-1],bt[At+1]].forEach(Mi=>{q.subVectors(Mi,Wt).normalize(),It(Wt.clone(),Wt.clone().addScaledVector(q,Ee*2.2),Ee*ut)})}},X={value:Array.from({length:xh},()=>o(0,0,0))},K={value:Array.from({length:xh},()=>o(0,0,0))},ve=C=>{C.uniforms.uPhP=X,C.uniforms.uPhS=K,C.vertexShader=C.vertexShader.replace("#include <common>",`#include <common>
attribute float aPh; uniform vec3 uPhP[${xh}]; uniform vec3 uPhS[${xh}];`).replace("#include <begin_vertex>",`#include <begin_vertex>
{ int pi = int(aPh + 0.5); transformed = uPhP[pi] + (transformed - uPhP[pi]) * uPhS[pi]; }`)},Ne=new ja({depthPacking:M0});Ne.onBeforeCompile=ve,Ne.customProgramCacheKey=()=>"cyclePhDepth";let He=[],Qe=(C,Ee,Oe="s")=>{let je=new lt;je.name=C,l.add(je);let tt={g:je,i:He.length,pivot:Ee.clone(),mode:Oe,k:0};return X.value[tt.i].copy(Ee),He.push(tt),tt},dt=()=>{l.updateWorldMatrix(!0,!0);let C=new St().copy(l.matrixWorld).invert(),Ee=new St,Oe=new Map;He.forEach(je=>je.g.traverse(tt=>{if(!tt.isMesh)return;let bt=tt.material.uuid+"|"+tt.renderOrder,ut=Oe.get(bt);ut||Oe.set(bt,ut={mat:tt.material,cast:!1,ro:tt.renderOrder,geos:[]}),ut.cast=ut.cast||tt.castShadow;let xt=tt.geometry.index?tt.geometry.toNonIndexed():tt.geometry.clone();Object.keys(xt.attributes).forEach(mt=>{mt!=="position"&&mt!=="normal"&&mt!=="uv"&&xt.deleteAttribute(mt)}),xt.attributes.uv||xt.setAttribute("uv",new Nt(new Float32Array(xt.attributes.position.count*2),2)),xt.applyMatrix4(Ee.multiplyMatrices(C,tt.matrixWorld)),xt.setAttribute("aPh",new Nt(new Float32Array(xt.attributes.position.count).fill(je.i),1)),ut.geos.push(xt)})),He.forEach(je=>{je.g.traverse(tt=>{tt.isMesh&&tt.geometry.dispose()}),l.remove(je.g)}),Oe.forEach(je=>{let tt=$i(je.geos);if(je.geos.forEach(xt=>xt.dispose()),!tt)return;let bt=je.mat.clone();bt.onBeforeCompile=ve,bt.customProgramCacheKey=()=>"cyclePh";let ut=new Ue(tt,bt);ut.castShadow=je.cast,ut.receiveShadow=!0,ut.renderOrder=je.ro,ut.frustumCulled=!1,je.cast&&(ut.customDepthMaterial=Ne),ut.userData.keep=!0,ut.userData.noAO=!0,l.add(ut)})},re=(C,Ee,Oe)=>{C.k=nt(C.k,Ee,Oe),Math.abs(C.k-Ee)<.002&&(C.k=Ee);let je=C.mode==="pop"?C.k>.5?1:0:Et(0,1,C.k),tt=K.value[C.i];return C.mode==="y"?tt.set(1,je,1):C.mode==="xz"?tt.set(je,1,je):tt.setScalar(je),je<.001&&tt.setScalar(0),je};n(.085,.012,x,-2.7,qt+.004,-1.85,h,{seg:20,cast:!1}),n(.068,.014,R,-2.7,qt+.005,-1.85,h,{seg:20,cast:!1});for(let C=-2;C<=2;C++)t(.11-Math.abs(C)*.02,.006,.008,x,-2.7,qt+.012,-1.85+C*.022,h,{cast:!1});let ye=-3.95,Le=.9;t(.089,.038,Le-ye,f,ps-.045,qt+.019,(ye+Le)/2,h,{cast:!1}),t(.089,.038,Le-ye,f,ps-.045,Ls-.019,(ye+Le)/2,h,{cast:!1});for(let C=ye+.02;C<=Le;C+=.406)t(.089,Ls-qt-.076,.038,f,ps-.045,(qt+Ls)/2,Math.min(C,Le-.02),h,{cast:!1});for(let C=0;C<6;C++)C===2||C===4||t(.08,Ls-qt-.09,.36,v,ps-.05,(qt+Ls)/2,-1.48+.019+C*.406+.203,h,{cast:!1});let Se=(C,Ee,Oe)=>{t(.0127,Ls-qt-.01,Ee-C-.003,u,ps+.0064,(qt+Ls)/2,(C+Ee)/2,Oe),t(.012,.08,Ee-C,A,ps+.019,qt+.04,(C+Ee)/2,Oe,{cast:!1})};Se(ye,-2.7,h),Se(-2.7,-1.48,h),t(.68,.05,.88,R,un,qt+.025,_n,h),t(.56,.24,.74,x,un,(qt+.05+gd)/2,_n,h),t(.52,.036,.012,R,un,-2.56,ki-.004,h,{cast:!1}),t(.56,.012,.02,x,un,-2.535,ki+.008,h,{cast:!1}),t(.3,-.25-(qt+.05),.6,x,un-.43,(-.25+qt+.05)/2,_n,h),[-2.2,-1.6,-1,-.5].forEach(C=>t(.304,.012,.604,x,un-.43,C,_n,h,{cast:!1})),t(.56,fs-gd,.74,p,un,(gd+fs)/2,_n,h,{r:.008}),t(.54,.52,.008,r.enclosure,un,-1.67,ki+.004,h,{r:.003}),t(.54,.54,.008,r.enclosure,un,-2.225,ki+.004,h,{r:.003});for(let C=0;C<6;C++)t(.3,.011,.006,R,un-.05,-1.47-C*.026,ki+.008,h,{cast:!1});for(let C=0;C<4;C++)t(.3,.011,.006,R,un-.05,-2.41-C*.022,ki+.008,h,{cast:!1});[-1.43,-1.99].forEach(C=>t(.09,.016,.01,R,un+.17,C,ki+.011,h,{cast:!1})),t(.09,.06,.006,R,un+.15,-1.72,ki+.009,h,{cast:!1});let ke=t(.064,.036,.004,_,un+.15,-1.72,ki+.012,l,{cast:!1,keep:!0}),ee=t(.012,.012,.004,w,un+.2,-2.08,ki+.01,l,{cast:!1,keep:!0});t(.04,.024,.004,R,un+.2,-2.08,ki+.0085,h,{cast:!1}),k.plane("afue",.15,h,un-.1,-1.78,ki+.0095),k.plane("svc",.13,h,un+.2805,-1.95,_n+.1).rotation.y=Math.PI/2,t(.004,.012,.03,R,un+.283,-1.85,_n+.1,h,{cast:!1}),s([[un+.24,-2.45,ki+.01],[un+.3,-2.62,ki+.08],[-2.85,qt+.02,-2.05],[-2.72,qt+.02,-1.88]],.008,A,h,{radial:6,cast:!1}),t(.56,-.25-fs,.74,x,un,(fs-.25)/2,_n,h),t(.57,.02,.75,x,un,fs+.01,_n,h,{cast:!1});let We=un+.28,le=1.4;t(le-We,.25,.5,x,(We+le)/2,-.375,_n,h);for(let C=We+1.2;C<le;C+=1.5)t(.02,.258,.508,x,C,-.375,_n,h,{cast:!1});for(let C=We+.6;C<le;C+=1.2)[-1,1].forEach(Ee=>t(.025,.27,.003,x,C,-.37,_n+Ee*.253,h,{cast:!1}));n(.065,.24,x,-1.5,-.375,_n+.37,h,{axis:"z",seg:16}),n(.065,.42,x,-1.5,-.27,_n+.49,h,{seg:16}),n(.07,.03,x,-1.5,-.375,_n+.26,h,{axis:"z",seg:16,cast:!1});let pe=o(-2.3,-.375,_n+.25);t(.27,.12,.012,A,pe.x,pe.y,pe.z+.006,h,{cast:!1});for(let C=0;C<7;C++)t(.012,.09,.006,R,pe.x-.105+C*.035,pe.y,pe.z+.014,h,{cast:!1});t(.05,.12,.075,r.enclosure,un+.305,-.85,_n+.2,h),t(.006,.1,.06,A,un+.333,-.85,_n+.2,h,{cast:!1}),t(.01,.025,.012,R,un+.338,-.85,_n+.2,h,{cast:!1}),n(.008,.55,x,un+.305,-.52,_n+.2,h,{seg:6,cast:!1}),[-3.45,-3.22].forEach((C,Ee)=>{W([[C,-1.62,_n-.37],[C,-1.62,-3.2],[C,-.1+Ee*.02,-3.2],[C,-.1+Ee*.02,-3.85],[C,.14,-3.85],[C,.14,-4.4]],.04,A,h,{fit:1.2,seg:14}),n(.048,.06,A,C,.14,-4.42,h,{axis:"z",seg:14}),t(.025,.2,.003,x,C,-.2,-3.4,h,{cast:!1})}),W([[ti,ms,1.2],[ti,ms,-3.5]],.017,R,h,{fit:0}),[.6,-.6,-1.8,-3.1].forEach(C=>t(.02,-.25-ms,.004,x,ti,(ms-.25)/2+.01,C,h,{cast:!1})),n(.024,.06,R,ti,ms,-3.5,h,{axis:"z",seg:10}),W([[ti,ms,-2.3],[ti,-1.72,-2.3],[un+.28,-1.72,-2.3]],.017,R,h),W([[ti,-1.72,-2.3],[ti,-1.95,-2.3]],.017,R,h,{fit:0}),n(.025,.04,R,ti,-1.965,-2.3,h,{seg:10}),n(.024,.06,R,ti,-1.72,-2.3,h,{seg:10}),n(.024,.06,R,ti,ms,-2.3,h,{axis:"z",seg:10}),n(.029,.035,R,ti,-1.48,-2.3,h,{seg:8}),n(.026,.07,P,ti,-1.25,-2.3,h,{seg:12}),t(.016,.1,.02,B,ti+.035,-1.24,-2.3,h,{r:.004}),W([[ti,ms,-2.7],[-1.86,ms,-2.7],[-1.86,-2,-2.7]],.017,R,h),n(.024,.06,R,ti,ms,-2.7,h,{axis:"z",seg:10}),n(.026,.07,P,-1.86,-1.85,-2.7,h,{seg:12});let te=new lt;te.position.set(-1.86,-1.85,-2.7),te.userData.keep=!0,l.add(te),t(.016,.1,.02,B,.035,.01,0,te,{r:.004,cast:!1}),[-2.2,-2].forEach(C=>n(.011,.5,P,C,-.5,-3,h,{seg:8})),n(.085,.06,x,-2.1,-.28,-3,h,{seg:16}),t(.006,.006,.02,x,-1.15,-.93,-3.985,h,{cast:!1}),k.plane("cal",.2,h,-1.15,-1.07,-3.988);let he=Qe("crate",o(-2.2,qt,-1.05));{let C=he.g,Ee=-2.2,Oe=-1.05,je=qt;[-.4,0,.4].forEach(tt=>t(.9,.09,.07,f,Ee,je+.045,Oe+tt,C));for(let tt=0;tt<6;tt++)t(.11,.02,.92,f,Ee-.4+tt*.16,je+.1,Oe,C);[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([tt,bt])=>t(.12,.1,.12,A,Ee+tt*.32,je+.16,Oe+bt*.33,C,{cast:!1})),t(.62,.1,.8,y,Ee+.05,je+.27,Oe+.02,C,{rot:[0,.1,0]}),t(1.6,.008,.78,y,-3.75,je+.004,-.9,C,{rot:[0,.35,0],cast:!1}),t(.78,.008,.76,y,-3.2,je+.012,-.25,C,{rot:[0,-.2,0],cast:!1}),k.plane("crate",.34,C,-3.7,je+.0095,-.9).rotation.set(-Math.PI/2,0,.35),s([[Ee-.5,je+.11,Oe+.2],[Ee-.7,je+.01,Oe+.4],[Ee-.95,je+.005,Oe+.3],[Ee-1.1,je+.005,Oe+.6]],.006,R,C,{radial:4,cast:!1}),s([[ti,-1.22,-2.28],[ti+.01,-1.3,-2.25],[ti+.01,-1.36,-2.26]],.0015,x,C,{radial:4,cast:!1}),k.plane("permit",.07,C,ti+.01,-1.42,-2.255).rotation.set(.05,.3,.04)}let xe=k.mat.clone();xe.transparent=!1,xe.depthWrite=!0,xe.alphaTest=0;let Xe=C=>{let Ee=k.plane(C,.1),Oe=Ee.geometry.attributes.uv,je=1,tt=0,bt=1,ut=0;for(let At=0;At<Oe.count;At++)je=Math.min(je,Oe.getX(At)),tt=Math.max(tt,Oe.getX(At)),bt=Math.min(bt,Oe.getY(At)),ut=Math.max(ut,Oe.getY(At));Ee.geometry.dispose();let xt=new dn(.5,.025,.64),mt=xt.attributes.uv;for(let At=0;At<mt.count;At++)mt.setXY(At,je+mt.getX(At)*(tt-je),bt+mt.getY(At)*(ut-bt));let It=new Ue(xt,xe);return It.castShadow=!0,It.receiveShadow=!0,It.userData.keep=!0,l.add(It),It},Ve=Xe("pleatOld"),st=Xe("pleatNew"),it=o(un,-2.56,_n+.05),Q=o(un,-2.56,_n+.78),_t=o(-3.88,qt+.322,-2.2),vt=Qe("hose",pe);{let C=vt.g,Ee=[[pe.x,pe.y,pe.z+.06],[pe.x+.02,pe.y-.12,pe.z+.3],[-2.15,-1.5,-1.75],[-1.95,qt+.09,-1.3],[-1.55,qt+.08,-.7],[-.4,qt+.08,.1],[1.4,qt+.08,.7]],Oe=s(Ee,.07,R,C,{radial:10,density:6,tension:.4}),je=Oe.userData.curve,tt=Oe.userData.len,bt=new Bi(.072,.007,4,12),ut=Math.round(tt/(e>=1?.07:.14));for(let xt=2;xt<ut;xt++){let mt=xt/ut,It=new Ue(bt,R);It.position.copy(je.getPointAt(mt)),It.quaternion.setFromUnitVectors(o(0,0,1),je.getTangentAt(mt)),C.add(It)}t(.3,.16,.08,R,pe.x,pe.y,pe.z+.05,C,{r:.01}),n(.08,.06,x,pe.x,pe.y,pe.z+.11,C,{axis:"z",seg:16})}let H=Qe("hp",o(un,fs,_n),"y"),E=-3,ae=-4.85,ue=.42,_e=new lt;_e.userData.keep=!0,_e.position.set(E-.1,ue+.4,ae-.17),l.add(_e);{let C=H.g;t(.6,.44,.78,p,un,fs+.22,_n,C,{r:.008}),t(.52,.34,.006,p,un,fs+.22,_n+.392,C,{r:.003});for(let Oe=0;Oe<4;Oe++)t(.012,.012,.008,x,un+(Oe%2?.24:-.24),fs+(Oe<2?.07:.37),_n+.396,C,{cast:!1});k.plane("coil",.2,C,un-.08,fs+.3,_n+.3965);let Ee=(Oe,je,tt)=>s([[un+.3,fs+.2+tt,_n-.28],[-2.92,fs+.2+tt,_n-.28],[-2.9+tt,-.6,-2.9],[-2.9+tt,-.13,-2.95],[-2.9+tt,-.12,-3.85],[-2.9+tt,.12,-3.97],[-2.9+tt,.12,-4.35],[-2.85+tt,.32,-4.42],[-2.75+tt,.6,-4.5],[-2.55,.62+tt*2,-4.62]],Oe,je,C,{radial:8,density:10,tension:.2});Ee(.021,R,0),Ee(.006,P,.045),t(.02,.22,.003,x,-2.88,-.24,-3.4,C,{cast:!1}),t(.012,.11,.11,R,ps+.019,-1.3,-2.05,C,{r:.004}),k.plane("tstat",.092,C,ps+.0256,-1.3,-2.05).rotation.y=Math.PI/2,t(1.2,.08,.7,g,E,.04,ae,C),[-.4,.4].forEach(Oe=>{t(.05,ue-.08,.05,x,E+Oe,(ue+.08)/2,ae+.12,C),t(.05,ue-.08,.05,x,E+Oe,(ue+.08)/2,ae-.12,C),t(.06,.04,.5,x,E+Oe,ue-.02,ae,C)}),t(.96,.78,.38,m,E,ue+.39,ae,C,{r:.02}),n(.31,.02,R,E-.1,ue+.4,ae-.19,C,{axis:"z",seg:32,cast:!1}),[.12,.2,.28].forEach(Oe=>{let je=new Ue(new Bi(Oe,.005,4,32),x);je.position.set(E-.1,ue+.4,ae-.205),C.add(je)}),t(.62,.008,.008,x,E-.1,ue+.4,ae-.206,C,{cast:!1}),t(.008,.62,.008,x,E-.1,ue+.4,ae-.206,C,{cast:!1}),k.plane("odu",.2,C,E+.33,ue+.62,ae-.193).rotation.y=Math.PI,t(1,.07,.42,g,E,ue+.815,ae,C,{r:.03,cast:!1}),t(.7,.05,.3,g,E-.05,ue+.86,ae,C,{r:.022,cast:!1}),t(.22,.1,.9,g,E+.4,.13,ae+.1,C,{r:.04,cast:!1}),t(.14,.2,.08,m,-2.25,.9,-4.29,C,{r:.01}),k.plane("disc",.1,C,-2.25,.93,-4.332).rotation.y=Math.PI,s([[-2.25,.8,-4.3],[-2.3,.6,-4.4],[-2.52,.55,-4.7]],.012,R,C,{radial:6,cast:!1});for(let Oe=0;Oe<3;Oe++){let je=t(.26,.09,.006,R,0,0,0,null,{cast:!1});je.geometry.translate(.14,0,0),je.rotation.set(0,.25,Oe*Math.PI*2/3),_e.add(je)}Z(_e)}let Ze=o(-2.1,qt+.12,-2.64),Ke=new lt;Ke.rotation.order="YXZ",Ke.position.copy(Ze),Ke.userData.keep=!0,l.add(Ke);let Ie;{let C=new lt,Ee=-.36;Ke.add(C),n(.28,1.38,d,0,-.1+.69,Ee,C,{seg:28}),n(.284,.04,R,0,-.1,Ee,C,{seg:28}),n(.27,.03,d,0,1.295,Ee,C,{seg:28,r2:.2}),t(.14,.08,.01,R,0,.08,-.083,C),t(.1,.12,.07,R,0,.26,-.05,C,{r:.008}),n(.02,.025,P,0,.29,-.012,C,{axis:"z",seg:12,cast:!1}),n(.012,.06,P,.12,.05,-.1,C,{axis:"z",seg:8,cast:!1}),n(.07,.08,x,0,1.35,Ee,C,{seg:16,r2:.04}),n(.075,.1,x,0,1.43,Ee,C,{seg:16}),[-.1,.1].forEach(It=>{n(.012,.08,x,It,1.33,Ee,C,{seg:8}),n(.02,.03,P,It,1.37,Ee,C,{seg:8})}),n(.018,.06,P,.3,1.1,Ee,C,{axis:"x",seg:8}),t(.025,.04,.02,P,.31,1.13,Ee,C,{cast:!1}),W([[.33,1.1,Ee],[.34,1.1,Ee],[.34,.04,Ee]],.011,P,C,{seg:8}),k.plane("tank",.14,C,0,.78,-.076),Z(C),Ie=n(.2825,.3,k.mat,0,.06,Ee,Ke,{seg:28,open:!0,keep:!0,cast:!1});let Oe=k.plane("rust",.1),je=Oe.geometry.attributes.uv,tt=1,bt=0,ut=1,xt=0;for(let It=0;It<je.count;It++)tt=Math.min(tt,je.getX(It)),bt=Math.max(bt,je.getX(It)),ut=Math.min(ut,je.getY(It)),xt=Math.max(xt,je.getY(It));Oe.geometry.dispose();let mt=Ie.geometry.attributes.uv;for(let It=0;It<mt.count;It++)mt.setXY(It,tt+mt.getX(It)*(bt-tt),ut+mt.getY(It)*(xt-ut))}let be=new lt;be.userData.keep=!0,Ke.add(be);let et=new lt;et.position.set(0,0,.02),et.userData.keep=!0;{let C=new lt;be.add(C),[-.17,.17].forEach(Oe=>W([[Oe,-.1,-.05],[Oe,1.28,-.05],[Oe,1.4,.03]],.013,M,C,{seg:8,fit:0})),W([[-.17,1.4,.03],[.17,1.4,.03]],.013,M,C,{seg:8,fit:0}),[.35,.85].forEach(Oe=>n(.009,.34,M,0,Oe,-.05,C,{axis:"x",seg:6})),t(.38,.01,.24,M,0,-.115,-.17,C),n(.012,.5,M,0,0,.02,C,{axis:"x",seg:8}),[-.17,.17].forEach(Oe=>t(.02,.1,.08,M,Oe,-.04,-.02,C));let Ee=new Ue(new Bi(.286,.006,4,40),B);Ee.rotation.x=Math.PI/2,Ee.position.set(0,.95,-.36),C.add(Ee),t(.06,.04,.03,B,0,.95,-.065,C),Z(C),[-.25,.25].forEach(Oe=>{n(.12,.06,R,Oe,0,0,et,{axis:"x",seg:20}),n(.055,.065,M,Oe,0,0,et,{axis:"x",seg:12}),t(.068,.02,.16,M,Oe,0,0,et,{cast:!1})}),Z(et),be.add(et)}let gt=Qe("conn",o(-2.1,-1.5,-2.85),"pop");{let C=gt.g;W([[-1.86,-2,-2.7],[-1.86,-2.42,-2.7],[-2.05,-2.42,-2.7]],.017,R,C),W([[-1.86,-2.42,-2.7],[-1.86,-2.56,-2.7]],.017,R,C,{fit:0}),n(.024,.03,R,-1.86,-2.575,-2.7,C,{seg:10}),n(.024,.05,R,-1.86,-2,-2.7,C,{seg:10}),[-2.2,-2].forEach(Ee=>n(.011,.5,P,Ee,-1,-3,C,{seg:8})),n(.075,.96,x,-2.1,-.76,-3,C,{seg:16}),[-1,-.55].forEach(Ee=>n(.079,.02,x,-2.1,Ee,-3,C,{seg:16,cast:!1}))}let N=Qe("caps",o(-2,-1.2,-2.85),"pop");{let C=N.g;[-2.2,-2].forEach(Ee=>n(.014,.035,P,Ee,-.765,-3,C,{seg:8})),n(.024,.035,R,-1.86,-1.905,-2.7,C,{seg:10}),s([[-1.86,-1.86,-2.68],[-1.85,-1.92,-2.66],[-1.85,-1.97,-2.665]],.0015,x,C,{radial:4,cast:!1}),k.plane("capped",.055,C,-1.85,-2.02,-2.66).rotation.set(0,.25,-.05),n(.08,.012,x,-2.1,-.315,-3,C,{seg:16,cast:!1})}let ie=Qe("puddle",o(-1.95,qt+.003,-2.6),"xz");[[0,0,.42,.3],[.25,.18,.28,.2],[-.2,.22,.22,.18]].forEach(([C,Ee,Oe,je])=>{n(1,.004,r.water,-1.95+C,qt+.003,-2.6+Ee,ie.g,{seg:28,cast:!1}).scale.set(Oe,1,je)});let ge=-1.72,Te=-1.1,Ge=-3.89,G=Qe("tankless",o(ge,Te,Ge));{let C=G.g;t(.36,.56,.2,p,ge,Te,Ge,C,{r:.012}),t(.3,.46,.006,p,ge,Te,Ge+.1,C,{r:.003}),k.plane("tkl",.08,C,ge,Te+.12,Ge+.105),W([[ge+.06,Te+.28,Ge],[ge+.06,-.62,Ge],[ge+.06,-.62,-4.05]],.05,A,C,{fit:1.15,seg:16}),W([[ti,ms,-3.5],[ti,ms,-3.84],[-1.45,ms,-3.84],[-1.45,-1.52,-3.84],[ge+.1,-1.52,-3.84],[ge+.1,Te-.28,-3.84]],.014,R,C,{seg:8}),n(.022,.06,P,-1.45,-1.25,-3.84,C,{seg:10}),t(.014,.08,.016,B,-1.42,-1.24,-3.84,C,{r:.003,cast:!1}),[[ge-.1,r.bluePlastic,-2.25],[ge-.02,r.redPlastic,-2.35]].forEach(([Ee,Oe,je],tt)=>{W([[Ee,Te-.28,-3.84],[Ee,-1.6-tt*.06,-3.84],[je,-1.6-tt*.06,-3.84],[je,-.26,-3.84]],.011,P,C,{seg:8}),n(.017,.04,P,Ee,-1.47,-3.84,C,{seg:8}),t(.05,.012,.012,Oe,Ee+.02,-1.47,-3.815,C,{cast:!1})}),[-.45,-1.2].forEach(Ee=>t(.03,.012,.03,P,-2.3,Ee,-3.85,C,{cast:!1}))}let Ae=Qe("loose",o(ps,-1.5,-.3),"pop");Se(-1.48,-.29,Ae.g),Se(-.29,Le,Ae.g);let de=Qe("demo",o(-3,qt,-.5),"y");{let C=de.g,Ee=-1.05,Oe=ps+.02,je=-1.45,tt=-2.45,bt=-1.6;t(tt-Oe,.038,.089,f,(Oe+tt)/2,qt+.019,Ee,C),t(je-bt,.038,.089,f,(bt+je)/2,qt+.019,Ee,C),t(je-Oe,.038,.089,f,(Oe+je)/2,Ls-.019,Ee,C);for(let mt=Oe+.02;mt<je;mt+=.406)mt>tt-.04&&mt<bt+.04||t(.038,Ls-qt-.076,.089,f,mt,(qt+Ls)/2,Ee,C);[tt-.019,bt+.019].forEach(mt=>t(.038,Ls-qt-.076,.089,f,mt,(qt+Ls)/2,Ee,C)),[tt+.019,bt-.019].forEach(mt=>t(.038,2.07,.089,f,mt,qt+1.035,Ee,C)),t(bt-tt,.18,.089,f,(tt+bt)/2,qt+2.16,Ee,C),k.plane("suite",.15,C,tt-.019,-1.2,Ee+.046),[-.5,.5].forEach(mt=>t(1.1,.04,.08,f,-2.7,qt+.02,1+mt*1.8,C));for(let mt=0;mt<4;mt++)t(1.22,.0127,2.44,u,-2.7+mt%2*.02,qt+.047+mt*.0135,1+mt%3*.015,C,{rot:[0,(mt-1.5)*.012,0]});let ut=-4.35,xt=1.5;t(.62,.88,.92,S,ut,qt+.5,xt,C,{r:.02}),t(.66,.04,.96,S,ut,qt+.95,xt,C,{r:.01}),[-.3,.3].forEach(mt=>n(.05,.04,R,ut+.2,qt+.05,xt+mt,C,{axis:"x",seg:12})),[[0,.1,.4,.4],[-.1,-.15,-.3,.6],[.12,-.25,.2,-.5]].forEach(([mt,It,At,Wt])=>t(.4,.0127,.5,u,ut+mt,qt+.95,xt+It,C,{rot:[At,Wt,.2]})),t(.3,.09,.6,v,ut-.05,qt+.98,xt-.1,C,{rot:[.3,.2,-.25]}),k.plane("bin",.2,C,ut+.312,qt+.75,xt).rotation.y=Math.PI/2;for(let mt=0;mt<7;mt++)t(.05+mt%3*.04,.0127,.04+mt%2*.05,u,ps+.12+mt%3*.09,qt+.007,-1.3+mt*.3,C,{rot:[0,mt*.7,0],cast:!1})}Z(h),dt();let Fe={install:o(un,-1.65,ki+.02),maintain:o(un+.1,-2.56,ki+.03),upgrade:o(ps+.03,-1.3,-2.05),hpump:o(un+.1,fs+.22,_n+.4),replace:o(ge,Te+.05,Ge+.11),remove:o(-2.1,-1.9,-2.6),demo:o(ps-.04,-1.5,-.6)},Ce={time:19.4,cut:0,ghost:0,ground:1,lift:0,orbit:.012},O=[{...Ce,radius:14,theta:.2,phi:.9,fx:-2.6,ty:-1.8,fz:-2.2,lift:3,dof:0,orbit:.02,narrow:{radius:12}},{...Ce,radius:3.5,theta:.5,phi:1.36,fx:-2.8,ty:-1.95,fz:-2.2,dof:1,narrow:{fx:-3.15}},{...Ce,radius:4.4,theta:1,phi:1.56,fx:-3.7,ty:-1.15,fz:-2.25,dof:.9},{...Ce,radius:4.8,theta:-.1,phi:1.36,fx:-1.85,ty:-1.8,fz:-3.2,dof:1},{...Ce,radius:3.8,theta:-.55,phi:1.36,fx:-2,ty:-1.85,fz:-1.3,dof:.8,narrow:{fx:-2.35,fz:-1.1}},{...Ce,radius:4.4,theta:.7,phi:1.3,fx:-3.4,ty:-1.95,fz:-.1,dof:.7,narrow:{fx:-3.9,ty:-1.55,fz:-.6}}],we=-1,me=0,$e=0,ft=0,wt=0,Pt=0,Bt=0,Yt=o(-2,qt+.12,.35),bn=Ze.distanceTo(Yt),pn=o(0,0,0);return{name:"cycle",group:l,anchors:Fe,shots:O,hides:C=>[...C.sys.hvac?C.sys.hvac.meshes:[],...C.sys["water-heaters"]?C.sys["water-heaters"].meshes:[]],light(C){return C===0?{pos:[-4,2,0],at:[-2.8,-2.4,-2.4],power:1,fill:.3}:C===1?{pos:[-1.7,-.5,-.7],at:[-3.3,-2.3,-2.4],power:1,fill:.35}:C===2?{pos:[-1.6,-.45,-1.1],at:[-3.9,-1.4,-2.2],power:1,fill:.35}:C===3?{pos:[-2.5,-.45,-1],at:[-1.9,-1.9,-3.4],power:1,fill:.35}:C===4?{pos:[-3.6,-.45,.2],at:[-2,-2.2,-1.4],power:1,fill:.35}:{pos:[-1.5,-.5,1.6],at:[-4.2,-1.8,-.6],power:1,fill:.35}},update({step:C,q:Ee,t:Oe,dt:je,snap:tt,reduce:bt}){let ut=tt?1:1-Math.exp(-je*4);Ee=Ut(Ee||0,0,1);let xt=C===1?Math.round(1+11*Ee):Py[C]??25;xt!==we&&(we=xt,k.set("cal",void 0,void 0,{year:xt,verb:Iy[C]||""}),k.set("svc",void 0,void 0,{year:xt})),_.emissiveIntensity=bt?1.4:1.3+.3*Math.sin(Oe*13.1)+.2*Math.sin(Oe*7.7+1.3),w.emissiveIntensity=bt?1.8:Math.sin(Oe*2.4)>-.2?2:.3;let mt=C===1?Ee:C>1?1:0;me=tt?mt:nt(me,mt,1-Math.exp(-je*6));let It=Et(.06,.28,me),At=Et(.3,.46,me),Wt=Et(.5,.86,me),Mi=Et(.38,.48,me);Ve.visible=C<=1,Ve.position.lerpVectors(it,Q,It).lerp(_t,At),Ve.rotation.set(-1.72*At,0,.06*At),st.visible=Mi>.001,st.position.lerpVectors(Q,it,Wt),st.scale.setScalar(Math.max(.001,Mi)),re(he,C===0?1:0,ut),re(vt,C===1?1:0,ut);let Ei=re(H,C>=2?1:0,ut);_e.visible=Ei>.98,bt||(_e.rotation.z=Oe*6);let Ii=C>3||C===3&&Ee>.6;re(gt,Ii?0:1,1),re(N,Ii?1:0,1),re(ie,C===3?.15+.85*Et(0,.45,Ee):0,ut),re(G,C>3||C===3&&Ee>.45?1:0,ut),re(Ae,C<5?1:0,1),re(de,C===5?1:0,ut),Bt=nt(Bt,Ii?1:0,ut),te.rotation.z=-Bt*Math.PI/2,Ie.visible=C>=3;let kn=C===4?Ee:C>4?1:0;$e=nt($e,Et(0,.25,kn)*.42,ut);let Vi=ft;ft=nt(ft,Et(.25,1,kn),ut),Pt+=(ft-Vi)*bn,wt=nt(wt,C===4?1:0,ut),Ke.visible=C<=4,Ke.position.lerpVectors(Ze,Yt,ft),Ke.rotation.set($e,.08*ft,0),be.visible=wt>.02,be.scale.setScalar(Math.max(.001,Et(0,1,wt))),et.rotation.x=Pt/.12,pn.set(0,.95,-.36),Ke.updateMatrix(),Fe.remove.copy(pn.applyMatrix4(Ke.matrix))}}}function hm({M:i,H:e,Ug:t,Wd:n,tier:s,reduce:r,glowTex:a}){let o=Kp({M:i,tier:s,reduce:r,glowTex:a,dotTex:_r("rgba(255,255,255,0.75)")}),c=new lt;c.name="sets";let l=x=>x.traverse(A=>{A.userData.noPick=!0}),h=Qp({kit:o});c.add(h.group),l(h.group);let p={};Object.entries({panel:jp,attic:tm,sewer:am,radon:cm,restore:null,cycle:um}).forEach(([x,A])=>{typeof A=="function"&&(p[x]=A)});let d={},u=new rl(16769725,0,18,.5,.8,1);u.castShadow=s>=1,u.shadow.mapSize.set(s>=2?2048:1024,s>=2?2048:1024),u.shadow.bias=-6e-4,u.shadow.normalBias=.006,u.shadow.radius=3,u.shadow.camera.near=.15,u.shadow.camera.far=16;let f=new es(9414888,0,9,2);c.add(u,u.target,f);let y=new F(2,-.3,-2.5),g=new F(2.8,-1.2,-3.9),m=0,M=1,S=null,v=[];function _(x){if(d[x]||!p[x])return d[x];let A=p[x]({kit:o,M:i,H:e,Ug:t,Wd:n,tier:s,reduce:r});return A.group.visible=!1,l(A.group),c.add(A.group),d[x]=A,A}function w(x,A,P,B,T){o.time.value=P,h.disc.rotation.y=P*1.4;let U=A.zoom&&p[A.zoom]?A.zoom:null;U&&_(U);let I=x.zk>.004?U||S:null;I!==S&&(S&&d[S]&&(d[S].group.visible=!1),v.forEach(q=>{q.visible=!0}),v=[],S=I,S&&(d[S].group.visible=!0,d[S].hides&&(v=(d[S].hides(e,t,n)||[]).filter(q=>q&&q.visible),v.forEach(q=>{q.visible=!1}))));let k=T?1:1-Math.exp(-B*3.2),j=0;if(S){let q=d[S];q.update({step:A.zs|0,p:A.zp||0,q:A.zq||0,k:x.zk,t:P,dt:B,reduce:r,snap:T});let Z=q.light?q.light(A.zs|0,A.zq||0):null;if(Z){let W=m<.02?1:k;y.lerp(R.fromArray(Z.pos),W),g.lerp(R.fromArray(Z.at),W),j=Z.power*x.zk,M=nt(M,Z.fill??1,k)}}m=nt(m,j,k),u.position.copy(y),u.target.position.copy(g),u.intensity=10*m,u.visible=m>.01,f.position.copy(g).add(R.set(-1.2,.5,1.6)),f.intensity=1.4*m*M,f.visible=m>.01}let R=new F;return{root:c,kit:o,update:w,ensure:_,names:Object.keys(p),get shown(){return S},anchors(){return S?d[S].anchors:null},input(x,A){let P=_(x);P&&P.input&&P.input(A)},shots(x){let A=_(x);return A?A.shots||[]:null},get:x=>_(x),prebuild(){let x=Object.keys(p).find(A=>!d[A]);return x?(_(x),!0):!1},lampPower:()=>m}}function Ny(){let i=performance.now(),e=[],t=O=>e.push([O,Math.round(performance.now()-i)]),n=document.getElementById("stage"),s=document.documentElement,r=()=>window.dispatchEvent(new Event("hause:stage-ready")),a=()=>{s.classList.add("no-webgl"),r()};if(!n)return a();let o=window.matchMedia("(prefers-reduced-motion: reduce)").matches,c=vp(),l=navigator.hardwareConcurrency||4,h=typeof window.HAUSE_QUALITY=="number"?window.HAUSE_QUALITY:c?l>=6?1:0:l>=6?2:1;try{let O=document.createElement("canvas"),we=O.getContext("webgl2");if(!we)return a();let me=we.getExtension("WEBGL_lose_context");me&&me.loseContext()}catch{return a()}let p;try{if(p=new ju({canvas:n,antialias:h===0,powerPreference:"high-performance"}),!p.getContext())throw new Error("no gl")}catch{return a()}n.addEventListener("webglcontextlost",O=>{O.preventDefault(),K=!1,s.classList.add("no-webgl")}),p.toneMapping=kr,p.toneMappingExposure=1,p.shadowMap.enabled=!0,p.shadowMap.type=oa;let d=new os(new F(1,0,0),1e3);p.clippingPlanes=[d],_p(p.capabilities.getMaxAnisotropy()),Mp(h);let u=new na;u.environmentIntensity=.6,u.fog=new Bo(1317678,70,360);let f=new Ti(30,1,.3,1400),y=.3;t("renderer");let g=Up(p,u);t("sky");let{M:m,T:M}=Np();t("materials+textures");let S=co(),v=Dp(),_=Gp({M:m,T:M,markTex:v,glowTex:S});u.add(_.house),t("house");let w=Xp({M:m,T:M,glowTex:S,markTex:v,tier:h,reduce:o});u.add(w.world),t("world");let R=Yp({house:_.house,reduce:o}),x=Zp({M:m,layers:_.layers,glowTex:S}),A=$p({scene:u,M:m,tier:h,reduce:o});Object.values(_.layers).forEach(O=>{Jp(O,_.edgeMat),rd(O)}),rd(w.props);let P=hm({M:m,H:_,Ug:A,Wd:w,tier:h,reduce:o,glowTex:S});_.house.add(P.root),t("systems+interior+underground+merge");let B=new il(10466518,1709842,.5),T=new to(16769728,3);T.castShadow=!0,T.shadow.mapSize.set(h>=2?2048:1024,h>=2?2048:1024),Object.assign(T.shadow.camera,{left:-26,right:26,top:26,bottom:-26,near:5,far:240}),T.shadow.bias=-3e-4,T.shadow.normalBias=.04,T.shadow.radius=h>=2?2.5:1.5,T.target.position.set(0,3,0);let U=new to(9085656,.6);U.position.copy(g.U.uMoonDir.value).multiplyScalar(60),u.add(B,T,T.target,U);let I={explode:0,radius:36,theta:.55,phi:1.36,ty:4.2,tx:-6,time:19.4,marks:0,ground:1,orbit:.04,visible:1,ghost:0,cut:0,lift:0,thermal:0,netE:0,netW:0,netA:0,netR:0,lensY:0,fx:0,fz:0,beacons:0,section:0,cutX:.45,season:0,snowfall:1,smoke:1,melt:0,icicles:0,aurora:0,zk:0,dof:0},k=Object.assign({level:null,focusSys:null,netFocus:null,ugFocus:null,interactive:!1,zoom:null,zs:0,zp:0,zq:0},I),j=["explode","radius","phi","ty","tx","time","marks","ground","visible","ghost","cut","lift","thermal","netE","netW","netA","netR","lensY","fx","fz","beacons","section","cutX","season","snowfall","smoke","melt","icicles","aurora","zk","dof"],q=0,Z=1,W=1,X=1,K=!0,ve=0,Ne=-9,He={set(O){Object.assign(k,O)},highlight(O){k.focusSys=O},selectLevel(O){k.level=O},levels:Fl.map(O=>O.key),onPick:null,onHoverLevel:null,onFrame:null,onThermal:null,roomsLit:0,get quality(){return h}};window.HAUSE_STAGE=He;let Qe=new ct(14256718),dt=null;function re(O){dt=O,Object.keys(_.sys).forEach(we=>_.sys[we].mats.forEach(me=>{we===O?(me.emissive.copy(Qe),me.emissiveIntensity=.9):(me.emissive.copy(me.userData.baseEmissive),me.emissiveIntensity=1)}))}let ye=new Set;_.house.traverse(O=>{!O.isMesh||!O.material||(Array.isArray(O.material)?O.material:[O.material]).forEach(we=>{we.userData&&(we.userData.shell||we.userData.wall)&&ye.add(we)})});let Le="",Se=!1;_.edgeMat.visible=!1;function ke(O,we){let me=O.toFixed(3)+"|"+we.toFixed(3);if(me===Le)return;Le=me;let $e=O>.01||we>.01;ye.forEach(ft=>{let wt=ft.userData.pane,Pt=ft.userData.shell?O*(wt?.75:.9):0,Bt=ft.userData.wall?we*(wt?.8:.9):0;$e!==Se&&(ft.transparent=$e||!!ft.userData.alwaysTransparent,ft.needsUpdate=!0),ft.opacity=1-Math.max(Pt,Bt),ft.depthWrite=Math.max(Pt,Bt)<.4}),Se=$e,_.edgeMat.opacity=Math.max(O*.28,we*.16),_.edgeMat.visible=_.edgeMat.opacity>.01}let ee=qp({scene:u,M:m,skipParents:[...Object.values(R.groups),P.root],onChange:O=>{w.setThermal(O),p.toneMapping=O?us:kr,He.onThermal&&He.onThermal(O)}}),We=new F;function le(O,we){return We.copy(we),O.localToWorld(We),We.project(f),{x:(We.x*.5+.5)*Z,y:(-We.y*.5+.5)*W,behind:We.z>1}}let pe=(O,we,me)=>new F(O,we,me),te=Fl.map(O=>({obj:_.layers[O.key],offset:pe(Fn/2+1.4,{roof:7.8,upper:4.9,main:1.8,basement:-1.2,below:-2.8}[O.key],Qt/2)}));He.projectLevels=()=>te.map(O=>le(O.obj,O.offset)),He.projectAnchors=()=>{let O={};Object.keys(_.ANCHORS).forEach(me=>{O[me]=le(_.house,_.ANCHORS[me])}),Object.keys(A.ANCHORS).forEach(me=>{O[me]=le(_.house,A.ANCHORS[me])});let we=P.anchors();return we&&Object.keys(we).forEach(me=>{O["z."+me]=le(_.house,we[me])}),O},He.zoomSets=P.names,He.zoomShots=O=>P.shots(O),He.zoomInput=(O,we)=>P.input(O,we),He.prebuildZoom=()=>P.prebuild();let he={x:0,y:0,nx:0,ny:0},xe=null,Xe=new ol,Ve=[];_.house.traverse(O=>{!O.isMesh||O.isInstancedMesh||!O.visible||O.userData.noPick||(O.geometry.computeBoundingSphere(),O.geometry.boundingSphere.radius>.3&&Ve.push(O))});let st=O=>{for(;O&&!O.userData.level;)O=O.parent;return O?O.userData.level:null};He.pickAt=(O,we)=>{Xe.setFromCamera({x:O/Z*2-1,y:-(we/W)*2+1},f);let me=Xe.intersectObjects(Ve,!1)[0];return me?{level:st(me.object),sys:me.object.userData.sys||null}:null},He.pickCount=()=>Ve.length,window.addEventListener("pointermove",O=>{he.nx=O.clientX/Z*2-1,he.ny=O.clientY/W*2-1,xe&&(ve=xe.theta0-(O.clientX-xe.x)*.006)},{passive:!0}),n.addEventListener("pointerdown",O=>{k.interactive&&(xe={x:O.clientX,theta0:ve,t:performance.now()})}),window.addEventListener("pointerup",O=>{if(!xe)return;let we=Math.abs(O.clientX-xe.x)<6&&performance.now()-xe.t<400;if(xe=null,we&&k.interactive){Xe.setFromCamera({x:O.clientX/Z*2-1,y:-(O.clientY/W)*2+1},f);let me=Xe.intersectObjects(Ve,!1)[0];me&&He.onPick&&He.onPick(st(me.object),me.object.userData.sys||null)}}),n.addEventListener("pointermove",O=>{if(!k.interactive||xe)return;Xe.setFromCamera({x:O.clientX/Z*2-1,y:-(O.clientY/W)*2+1},f);let we=Xe.intersectObjects(Ve,!1)[0],me=we?st(we.object):null;n.style.cursor=me?"pointer":"grab",He.onHoverLevel&&He.onHoverLevel(me)});let it=null;function Q(){it&&it.dispose(),it=h>=1?zp(p,u,f,h,Math.round(Z*X),Math.round(W*X)):null}function _t(){Z=window.innerWidth,W=window.innerHeight,X=Math.min(window.devicePixelRatio||1,h>=2?1.75:h===1?1.5:1.25),p.setPixelRatio(X),p.setSize(Z,W,!1),f.aspect=Z/W,f.fov=Z<700?44:30,f.updateProjectionMatrix(),it&&it.setSize(Math.round(Z*X),Math.round(W*X))}window.addEventListener("resize",_t),_t(),Q();let vt=new F;function H(O,we){let me=.5-.5*Math.cos(we*Math.PI*2),$e=nt(7.5,5,me),ft=nt(18.3,21.9,me),wt=nt(24,62,me),Pt=Math.PI*(O-$e)/(ft-$e),Bt=wt*Math.sin(Pt),Yt=Bt*Math.PI/180;return vt.set(-Math.sin(Pt)*Math.cos(Yt),Math.sin(Yt),Math.cos(Pt)*Math.cos(Yt)).normalize(),Bt}let E=[[0,[.62,.6,.55]],[.16,[.7,.7,.55]],[.3,[.8,1,.62]],[.5,[.74,.95,.55]],[.68,[1.05,.88,.5]],[.82,[1,.72,.45]],[1,[.62,.6,.55]]];function ae(O,we){let me=0;for(;me<E.length-2&&E[me+1][0]<=O;)me++;let[$e,ft]=E[me],[wt,Pt]=E[me+1],Bt=(O-$e)/(wt-$e);we.setRGB(nt(ft[0],Pt[0],Bt),nt(ft[1],Pt[1],Bt),nt(ft[2],Pt[2],Bt))}let ue=new F,_e=new F,Ze=new F,Ke=new F,Ie=new F,be={ug:0,section:0,cutX:.45,ground:1,ghost:0,cut:0,snow:1,roofSnow:1,snowfall:1,rain:0,leaves:0,smoke:1,melt:0,icicles:0,grow:0,leafTint:new ct(.3,.5,.15),explode:0,lift:0,zk:0},et=[[0,[.3,.3,.3]],[.22,[.62,.8,.28]],[.36,[.4,.62,.2]],[.55,[.3,.5,.15]],[.7,[.95,.7,.18]],[.82,[.9,.35,.1]],[1,[.5,.2,.08]]];function gt(O,we){let me=0;for(;me<et.length-2&&et[me+1][0]<=O;)me++;let[$e,ft]=et[me],[wt,Pt]=et[me+1],Bt=(O-$e)/(wt-$e);we.setRGB(nt(ft[0],Pt[0],Bt),nt(ft[1],Pt[1],Bt),nt(ft[2],Pt[2],Bt))}let N=new ct(16777215),ie=new ct,ge=0,Te=30;function Ge(O,we){q+=O;let me=we?1:1-Math.exp(-O*(o?30:4.2));j.forEach(ut=>{I[ut]=nt(I[ut],k[ut],me)}),I.theta=nt(I.theta,k.theta+(o?0:Math.sin(q*.08)*k.orbit)+ve,me),Fl.forEach(ut=>{let xt=_.layers[ut.key],mt=ut.key==="roof"?18*Ut(I.lift,0,1):ut.key==="upper"?12*Ut(I.lift-1,0,1):ut.key==="main"?9*Ut(I.lift-2,0,1):0;xt.position.y=nt(xt.position.y,ut.dy*I.explode+mt+(k.level===ut.key?.9:0),me)});let $e=(I.season%1+1)%1,ft=Math.max(1-Et(.1,.3,$e),Et(.84,1,$e)),wt=Math.max(1-Et(.06,.22,$e),Et(.88,1,$e));be.ug=0,be.beacons=I.beacons,be.section=I.section,be.cutX=I.cutX,be.ground=I.ground,be.ghost=I.ghost,be.cut=I.cut,be.lift=I.lift,be.zk=I.zk,be.snow=ft,be.roofSnow=wt,be.explode=I.explode,be.grow=Et(.2,.34,$e)*(1-Et(.78,.93,$e)),gt($e,be.leafTint),be.rain=Et(.2,.24,$e)*(1-Et(.3,.34,$e))*(o?0:1),be.leaves=Et(.72,.78,$e)*(1-Et(.9,.95,$e))*(o?0:1),be.melt=Math.max(I.melt,1-wt),be.icicles=Math.max(I.icicles,Et(.03,.1,$e)*(1-Et(.17,.26,$e))+Et(.9,.97,$e)*.5),be.snowfall=I.snowfall*(o?0:1)*($e<.05||$e>.93?1:0),be.smoke=I.smoke*(1-Et(.12,.3,$e)+Et(.8,.95,$e)),ae($e,w.U.uTint.value);let Pt=H(I.time,$e),Bt=Et(-5,10,Pt);g.update({elev:Pt,daylight:Bt,sunDir:vt,thermal:I.thermal,aurora:I.aurora*(1-Bt),cloud:nt(.38,.62,Et(0,1,Math.abs(Math.sin($e*Math.PI*2)))),snowy:ft>.5,voidK:Ut(1-I.ground,0,1)},q),g.follow(f.position),u.fog.color.copy(g.horizon);let Yt=1-Et(0,28,Pt);T.position.copy(vt).multiplyScalar(110).add(T.target.position),T.color.setRGB(1,nt(.95,.62,Yt),nt(.88,.4,Yt)),T.intensity=3.6*Et(-4,6,Pt)*(1-I.thermal),B.color.copy(g.zenith).lerp(N,.4),B.groundColor.setRGB(.1,.09,.08).lerp(ie.setRGB(.55,.6,.72),ft*.8*(.25+.75*Bt)),B.intensity=(.5+.35*Bt+.25*I.cut)*(1-I.thermal),U.intensity=.7*(1-Bt)*(1-I.thermal),u.environmentIntensity=.5+.4*Bt+.1*I.cut,p.toneMappingExposure=ee.on?1:nt(1.2,.95,Bt),(we||q-Ne>.4)&&(g.refreshEnv(we),Ne=q),ke(I.ghost*(1-Ut(I.explode*4,0,1)),I.cut),x.update(1-Bt,I.cut);let bn=_.update(be,me,q,Bt,we?100:O);He.roomsLit=Math.round(Ut(bn,0,7)),_.extra.chimneyTop.getWorldPosition(Ke),w.update(be,q,O,Bt,ue,Ke,Ut(bn/9,0,1));let pn=k.focusSys;Object.keys(_.sys).forEach(ut=>_.sys[ut].marks.forEach(xt=>{let mt=pn?ut===pn?1:I.marks*.35:I.marks;xt.material.opacity=nt(xt.material.opacity,mt,me),xt.scale.setScalar(.95*(ut===pn?1+Math.sin(q*4)*.12:1)*(1+I.explode*.25))})),pn!==dt&&re(pn),R.update(I,k.netFocus,q,O);let C=A.update(be,k.ugFocus,q,O);d.constant=-C,ee.set(k.thermal>.5),ee.time.value=q,P.update(I,k,q,O,we),he.x=nt(he.x,he.nx,me*.6),he.y=nt(he.y,he.ny,me*.6);let Ee=I.theta+he.x*.08,Oe=Ut(I.phi+he.y*.04,.35-.27*I.zk,1.5+1.2*I.zk),je=Z<700,tt=Ut(I.radius*.012,.02,.3);Math.abs(tt-y)>y*.02&&(y=tt,f.near=tt,f.updateProjectionMatrix()),ue.set(I.fx,I.ty+(je?-1.2*Ut(I.radius/30,0,1):0),I.fz),_e.set(Math.sin(Oe)*Math.sin(Ee),Math.cos(Oe),Math.sin(Oe)*Math.cos(Ee)).multiplyScalar(I.radius*(je?1.25:1)).add(ue),f.position.copy(_e),f.lookAt(ue),f.updateMatrixWorld(),Ze.setFromMatrixColumn(f.matrixWorld,0),f.position.addScaledVector(Ze,je?0:I.tx),f.updateMatrixWorld(),Ie.copy(ue).applyMatrix4(f.matrixWorldInverse);let bt=Math.max(.001,Ie.length());Te=bt,w.sight.value.set(Ie.x/bt,Ie.y/bt,Ie.z/bt,bt),Math.abs(I.lensY-ge)>1e-4&&(ge=I.lensY,Math.abs(ge)<1e-4?f.clearViewOffset():f.setViewOffset(Z,W,0,-ge*W,Z,W)),n.style.opacity=I.visible.toFixed(3)}let G={n:0,sum:0,last:0},Ae=performance.now();function de(O){if(it){let we=it.gtao,me=I.ghost>.05||I.cut>.05||ee.on||I.explode>.05;we&&(we.enabled=!me),it.bloom&&(it.bloom.strength=ee.on?.9:(.3+.55*(1-Ut(vt.y*4,0,1)))*(1-.45*I.zk)),it.grade.uniforms.uSat.value=ee.on?1:1.05,it.setDof(ee.on?0:I.dof,Te,f.near,f.far),it.render(O,q)}else p.render(u,f)}function Fe(O){let we=O-G.last;if(G.last=O,!(we>250||we<=0)&&(G.n++,G.n>40&&(G.sum+=we),G.n===130)){let me=G.sum/90;me>26&&h>1&&typeof window.HAUSE_QUALITY!="number"?(h--,Q(),_t(),T.shadow.mapSize.set(1024,1024),T.shadow.map&&T.shadow.map.dispose(),T.shadow.map=null):me>34&&h===1&&X>1.01&&typeof window.HAUSE_QUALITY!="number"&&(X=1,p.setPixelRatio(1),p.setSize(Z,W,!1),it&&it.setSize(Z,W)),G={n:0,sum:0,last:O}}}function Ce(O){if(!K)return;let we=Math.min((O-Ae)/1e3,.05);Ae=O,Ge(we,!1),de(we),Fe(O),He.onFrame&&He.onFrame(),requestAnimationFrame(Ce)}He.pause=()=>{K=!1},He.resume=()=>{K||(K=!0,Ae=performance.now(),G.last=0,requestAnimationFrame(Ce))},He.settle=()=>{Ge(.016,!0),Ge(.016,!0),de(.016),He.onFrame&&He.onFrame()},window.HAUSE_DEBUG&&(He.debug={scene:u,camera:f,renderer:p,S:I,target:k,H:_,Wd:w,sky:g,sun:T,hemi:B,moon:U,Sets:P,get post(){return it}}),He.info=()=>({tier:h,calls:p.info.render.calls,triangles:p.info.render.triangles,pixelRatio:X,buildMs:He.buildMs}),t("pre-first-render"),He.settle(),t("first-render"),He.laps=e,requestAnimationFrame(O=>{Ae=O,requestAnimationFrame(Ce)}),He.buildMs=Math.round(performance.now()-i),s.classList.add("has-webgl"),r()}Ny();})();
