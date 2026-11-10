/* HAUSE 3D stage. Built from hause/src/stage with esbuild + three.js. Do not edit by hand. */
(()=>{var dd=0,_u=1,fd=2;var Hs=1,pd=2,Cr=3,ys=0,Nn=1,wn=2,xn=0,Ms=1,Qt=2,yu=3,Mu=4,Sl=5;var vi=100,md=101,gd=102,xd=103,vd=104,zs=200,_d=201,yd=202,Md=203,Su=204,Eu=205,Ca=206,Sd=207,Pa=208,Ed=209,bd=210,Td=211,wd=212,Ad=213,Rd=214,Vo=0,ko=1,Wo=2,dr=3,Xo=4,qo=5,Yo=6,Zo=7,bu=0,Cd=1,Pd=2,oi=0,Ia=1,Da=2,La=3,Ss=4,Ua=5,Na=6,Fa=7;var Tu=300,Es=301,Gs=302,El=303,bl=304,Oa=306,En=1e3,Hi=1001,$o=1002,gn=1003,Id=1004;var Ba=1005;var yn=1006,Tl=1007;var qi=1008;var An=1009,wu=1010,Au=1011,Pr=1012,wl=1013,Ui=1014,_i=1015,fn=1016,Al=1017,Rl=1018,bs=1020,Ru=35902,Cu=35899,Pu=1021,Iu=1022,On=1023,zi=1026,Yi=1027,Cl=1028,Pl=1029,Ts=1030,Il=1031;var Dl=1033,Ha=33776,za=33777,Ga=33778,Va=33779,Ll=35840,Ul=35841,Nl=35842,Fl=35843,Ol=36196,Bl=37492,Hl=37496,zl=37488,Gl=37489,ka=37490,Vl=37491,kl=37808,Wl=37809,Xl=37810,ql=37811,Yl=37812,Zl=37813,$l=37814,Jl=37815,Kl=37816,Ql=37817,jl=37818,ec=37819,tc=37820,nc=37821,ic=36492,sc=36494,rc=36495,ac=36283,oc=36284,Wa=36285,lc=36286;var ea=2300,Jo=2301,Ho=2302,ru=2303,au=2400,ou=2401,lu=2402;var Dd=3200,Du=3201;var Xa=0,Ld=1,Ni="",Kt="srgb",ta="srgb-linear",na="linear",Zt="srgb";var zo=7680;var Ud=519,Nd=512,Fd=513,Od=514,cc=515,Bd=516,Hd=517,uc=518,zd=519,Lu=35044;var Uu="300 es",Pi=2e3,fr=2001;function dp(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function fp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function ia(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Gd(){let i=ia("canvas");return i.style.display="block",i}var Ah={},pr=null;function sa(...i){let e="THREE."+i.shift();pr?pr("log",e,...i):console.log(e,...i)}function Vd(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function yt(...i){i=Vd(i);let e="THREE."+i.shift();if(pr)pr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function St(...i){i=Vd(i);let e="THREE."+i.shift();if(pr)pr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Ds(...i){let e=i.join(" ");e in Ah||(Ah[e]=!0,yt(...i))}function kd(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Wd={[Vo]:ko,[Wo]:Yo,[Xo]:Zo,[dr]:qo,[ko]:Vo,[Yo]:Wo,[Zo]:Xo,[qo]:dr},Gi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Go=Math.PI/180,ra=180/Math.PI;function is(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Hn[i&255]+Hn[i>>8&255]+Hn[i>>16&255]+Hn[i>>24&255]+"-"+Hn[e&255]+Hn[e>>8&255]+"-"+Hn[e>>16&15|64]+Hn[e>>24&255]+"-"+Hn[t&63|128]+Hn[t>>8&255]+"-"+Hn[t>>16&255]+Hn[t>>24&255]+Hn[n&255]+Hn[n>>8&255]+Hn[n>>16&255]+Hn[n>>24&255]).toLowerCase()}function Gt(i,e,t){return Math.max(e,Math.min(t,i))}function pp(i,e){return(i%e+e)%e}function Ic(i,e,t){return(1-t)*i+t*e}function Oi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function nn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var zu=class zu{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Gt(this.x,e.x,t.x),this.y=Gt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Gt(this.x,e,t),this.y=Gt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Gt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};zu.prototype.isVector2=!0;var Ie=zu,hn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],u=n[s+2],p=n[s+3],f=r[a+0],h=r[a+1],d=r[a+2],_=r[a+3];if(p!==_||c!==f||l!==h||u!==d){let g=c*f+l*h+u*d+p*_;g<0&&(f=-f,h=-h,d=-d,_=-_,g=-g);let m=1-o;if(g<.9995){let E=Math.acos(g),T=Math.sin(E);m=Math.sin(m*E)/T,o=Math.sin(o*E)/T,c=c*m+f*o,l=l*m+h*o,u=u*m+d*o,p=p*m+_*o}else{c=c*m+f*o,l=l*m+h*o,u=u*m+d*o,p=p*m+_*o;let E=1/Math.sqrt(c*c+l*l+u*u+p*p);c*=E,l*=E,u*=E,p*=E}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],u=n[s+3],p=r[a],f=r[a+1],h=r[a+2],d=r[a+3];return e[t]=o*d+u*p+c*h-l*f,e[t+1]=c*d+u*f+l*p-o*h,e[t+2]=l*d+u*h+o*f-c*p,e[t+3]=u*d-o*p-c*f-l*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(s/2),p=o(r/2),f=c(n/2),h=c(s/2),d=c(r/2);switch(a){case"XYZ":this._x=f*u*p+l*h*d,this._y=l*h*p-f*u*d,this._z=l*u*d+f*h*p,this._w=l*u*p-f*h*d;break;case"YXZ":this._x=f*u*p+l*h*d,this._y=l*h*p-f*u*d,this._z=l*u*d-f*h*p,this._w=l*u*p+f*h*d;break;case"ZXY":this._x=f*u*p-l*h*d,this._y=l*h*p+f*u*d,this._z=l*u*d+f*h*p,this._w=l*u*p-f*h*d;break;case"ZYX":this._x=f*u*p-l*h*d,this._y=l*h*p+f*u*d,this._z=l*u*d-f*h*p,this._w=l*u*p+f*h*d;break;case"YZX":this._x=f*u*p+l*h*d,this._y=l*h*p+f*u*d,this._z=l*u*d-f*h*p,this._w=l*u*p-f*h*d;break;case"XZY":this._x=f*u*p-l*h*d,this._y=l*h*p-f*u*d,this._z=l*u*d+f*h*p,this._w=l*u*p+f*h*d;break;default:yt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],p=t[10],f=n+o+p;if(f>0){let h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-c)*h,this._y=(r-l)*h,this._z=(a-s)*h}else if(n>o&&n>p){let h=2*Math.sqrt(1+n-o-p);this._w=(u-c)/h,this._x=.25*h,this._y=(s+a)/h,this._z=(r+l)/h}else if(o>p){let h=2*Math.sqrt(1+o-n-p);this._w=(r-l)/h,this._x=(s+a)/h,this._y=.25*h,this._z=(c+u)/h}else{let h=2*Math.sqrt(1+p-n-o);this._w=(a-s)/h,this._x=(r+l)/h,this._y=(c+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Gt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-s*o,this._w=a*u-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Gu=class Gu{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Rh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Rh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),u=2*(o*t-r*s),p=2*(r*n-a*t);return this.x=t+c*l+a*p-o*u,this.y=n+c*u+o*l-r*p,this.z=s+c*p+r*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Gt(this.x,e.x,t.x),this.y=Gt(this.y,e.y,t.y),this.z=Gt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Gt(this.x,e,t),this.y=Gt(this.y,e,t),this.z=Gt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Gt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Dc.copy(this).projectOnVector(e),this.sub(Dc)}reflect(e){return this.sub(Dc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Gu.prototype.isVector3=!0;var L=Gu,Dc=new L,Rh=new hn,Vu=class Vu{constructor(e,t,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],p=n[7],f=n[2],h=n[5],d=n[8],_=s[0],g=s[3],m=s[6],E=s[1],T=s[4],v=s[7],y=s[2],A=s[5],w=s[8];return r[0]=a*_+o*E+c*y,r[3]=a*g+o*T+c*A,r[6]=a*m+o*v+c*w,r[1]=l*_+u*E+p*y,r[4]=l*g+u*T+p*A,r[7]=l*m+u*v+p*w,r[2]=f*_+h*E+d*y,r[5]=f*g+h*T+d*A,r[8]=f*m+h*v+d*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*r*u+n*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],p=u*a-o*l,f=o*c-u*r,h=l*r-a*c,d=t*p+n*f+s*h;if(d===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/d;return e[0]=p*_,e[1]=(s*l-u*n)*_,e[2]=(o*n-s*a)*_,e[3]=f*_,e[4]=(u*t-s*c)*_,e[5]=(s*r-o*t)*_,e[6]=h*_,e[7]=(n*c-l*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return Ds("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Lc.makeScale(e,t)),this}rotate(e){return Ds("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Lc.makeRotation(-e)),this}translate(e,t){return Ds("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Lc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Vu.prototype.isMatrix3=!0;var At=Vu,Lc=new At,Ch=new At().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ph=new At().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function mp(){let i={enabled:!0,workingColorSpace:ta,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Zt&&(s.r=ss(s.r),s.g=ss(s.g),s.b=ss(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Zt&&(s.r=hr(s.r),s.g=hr(s.g),s.b=hr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ni?na:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ds("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ds("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ta]:{primaries:e,whitePoint:n,transfer:na,toXYZ:Ch,fromXYZ:Ph,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Kt},outputColorSpaceConfig:{drawingBufferColorSpace:Kt}},[Kt]:{primaries:e,whitePoint:n,transfer:Zt,toXYZ:Ch,fromXYZ:Ph,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Kt}}}),i}var zt=mp();function ss(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function hr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ys,Ko=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ys===void 0&&(Ys=ia("canvas")),Ys.width=e.width,Ys.height=e.height;let s=Ys.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Ys}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ia("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ss(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ss(t[n]/255)*255):t[n]=ss(t[n]);return{data:t,width:e.width,height:e.height}}else return yt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},gp=0,mr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:gp++}),this.uuid=is(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Uc(s[a].image)):r.push(Uc(s[a]))}else r=Uc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Uc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ko.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(yt("Texture: Unable to serialize Texture."),{})}var xp=0,Nc=new L,$n=class i extends Gi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Hi,s=Hi,r=yn,a=qi,o=On,c=An,l=i.DEFAULT_ANISOTROPY,u=Ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xp++}),this.uuid=is(),this.name="",this.source=new mr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ie(0,0),this.repeat=new Ie(1,1),this.center=new Ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new At,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Nc).x}get height(){return this.source.getSize(Nc).y}get depth(){return this.source.getSize(Nc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){yt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){yt(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Tu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case En:e.x=e.x-Math.floor(e.x);break;case Hi:e.x=e.x<0?0:1;break;case $o:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case En:e.y=e.y-Math.floor(e.y);break;case Hi:e.y=e.y<0?0:1;break;case $o:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};$n.DEFAULT_IMAGE=null;$n.DEFAULT_MAPPING=Tu;$n.DEFAULT_ANISOTROPY=1;var ku=class ku{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],u=c[4],p=c[8],f=c[1],h=c[5],d=c[9],_=c[2],g=c[6],m=c[10];if(Math.abs(u-f)<.01&&Math.abs(p-_)<.01&&Math.abs(d-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(p+_)<.1&&Math.abs(d+g)<.1&&Math.abs(l+h+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let T=(l+1)/2,v=(h+1)/2,y=(m+1)/2,A=(u+f)/4,w=(p+_)/4,x=(d+g)/4;return T>v&&T>y?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=A/n,r=w/n):v>y?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=A/s,r=x/s):y<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(y),n=w/r,s=x/r),this.set(n,s,r,t),this}let E=Math.sqrt((g-d)*(g-d)+(p-_)*(p-_)+(f-u)*(f-u));return Math.abs(E)<.001&&(E=1),this.x=(g-d)/E,this.y=(p-_)/E,this.z=(f-u)/E,this.w=Math.acos((l+h+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Gt(this.x,e.x,t.x),this.y=Gt(this.y,e.y,t.y),this.z=Gt(this.z,e.z,t.z),this.w=Gt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Gt(this.x,e,t),this.y=Gt(this.y,e,t),this.z=Gt(this.z,e,t),this.w=Gt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Gt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ku.prototype.isVector4=!0;var rn=ku,Qo=class extends Gi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new rn(0,0,e,t),this.scissorTest=!1,this.viewport=new rn(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new $n(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:yn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new mr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},an=class extends Qo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},aa=class extends $n{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=gn,this.minFilter=gn,this.wrapR=Hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var jo=class extends $n{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=gn,this.minFilter=gn,this.wrapR=Hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Ml=class Ml{constructor(e,t,n,s,r,a,o,c,l,u,p,f,h,d,_,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,u,p,f,h,d,_,g)}set(e,t,n,s,r,a,o,c,l,u,p,f,h,d,_,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=c,m[2]=l,m[6]=u,m[10]=p,m[14]=f,m[3]=h,m[7]=d,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ml().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Zs.setFromMatrixColumn(e,0).length(),r=1/Zs.setFromMatrixColumn(e,1).length(),a=1/Zs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),p=Math.sin(r);if(e.order==="XYZ"){let f=a*u,h=a*p,d=o*u,_=o*p;t[0]=c*u,t[4]=-c*p,t[8]=l,t[1]=h+d*l,t[5]=f-_*l,t[9]=-o*c,t[2]=_-f*l,t[6]=d+h*l,t[10]=a*c}else if(e.order==="YXZ"){let f=c*u,h=c*p,d=l*u,_=l*p;t[0]=f+_*o,t[4]=d*o-h,t[8]=a*l,t[1]=a*p,t[5]=a*u,t[9]=-o,t[2]=h*o-d,t[6]=_+f*o,t[10]=a*c}else if(e.order==="ZXY"){let f=c*u,h=c*p,d=l*u,_=l*p;t[0]=f-_*o,t[4]=-a*p,t[8]=d+h*o,t[1]=h+d*o,t[5]=a*u,t[9]=_-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let f=a*u,h=a*p,d=o*u,_=o*p;t[0]=c*u,t[4]=d*l-h,t[8]=f*l+_,t[1]=c*p,t[5]=_*l+f,t[9]=h*l-d,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let f=a*c,h=a*l,d=o*c,_=o*l;t[0]=c*u,t[4]=_-f*p,t[8]=d*p+h,t[1]=p,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=h*p+d,t[10]=f-_*p}else if(e.order==="XZY"){let f=a*c,h=a*l,d=o*c,_=o*l;t[0]=c*u,t[4]=-p,t[8]=l*u,t[1]=f*p+_,t[5]=a*u,t[9]=h*p-d,t[2]=d*p-h,t[6]=o*u,t[10]=_*p+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vp,e,_p)}lookAt(e,t,n){let s=this.elements;return ni.subVectors(e,t),ni.lengthSq()===0&&(ni.z=1),ni.normalize(),cs.crossVectors(n,ni),cs.lengthSq()===0&&(Math.abs(n.z)===1?ni.x+=1e-4:ni.z+=1e-4,ni.normalize(),cs.crossVectors(n,ni)),cs.normalize(),ao.crossVectors(ni,cs),s[0]=cs.x,s[4]=ao.x,s[8]=ni.x,s[1]=cs.y,s[5]=ao.y,s[9]=ni.y,s[2]=cs.z,s[6]=ao.z,s[10]=ni.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],p=n[5],f=n[9],h=n[13],d=n[2],_=n[6],g=n[10],m=n[14],E=n[3],T=n[7],v=n[11],y=n[15],A=s[0],w=s[4],x=s[8],b=s[12],C=s[1],U=s[5],S=s[9],D=s[13],P=s[2],F=s[6],k=s[10],H=s[14],z=s[3],O=s[7],B=s[11],q=s[15];return r[0]=a*A+o*C+c*P+l*z,r[4]=a*w+o*U+c*F+l*O,r[8]=a*x+o*S+c*k+l*B,r[12]=a*b+o*D+c*H+l*q,r[1]=u*A+p*C+f*P+h*z,r[5]=u*w+p*U+f*F+h*O,r[9]=u*x+p*S+f*k+h*B,r[13]=u*b+p*D+f*H+h*q,r[2]=d*A+_*C+g*P+m*z,r[6]=d*w+_*U+g*F+m*O,r[10]=d*x+_*S+g*k+m*B,r[14]=d*b+_*D+g*H+m*q,r[3]=E*A+T*C+v*P+y*z,r[7]=E*w+T*U+v*F+y*O,r[11]=E*x+T*S+v*k+y*B,r[15]=E*b+T*D+v*H+y*q,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],p=e[6],f=e[10],h=e[14],d=e[3],_=e[7],g=e[11],m=e[15],E=c*h-l*f,T=o*h-l*p,v=o*f-c*p,y=a*h-l*u,A=a*f-c*u,w=a*p-o*u;return t*(_*E-g*T+m*v)-n*(d*E-g*y+m*A)+s*(d*T-_*y+m*w)-r*(d*v-_*A+g*w)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],u=e[10];return t*(a*u-o*l)-n*(r*u-o*c)+s*(r*l-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],p=e[9],f=e[10],h=e[11],d=e[12],_=e[13],g=e[14],m=e[15],E=t*o-n*a,T=t*c-s*a,v=t*l-r*a,y=n*c-s*o,A=n*l-r*o,w=s*l-r*c,x=u*_-p*d,b=u*g-f*d,C=u*m-h*d,U=p*g-f*_,S=p*m-h*_,D=f*m-h*g,P=E*D-T*S+v*U+y*C-A*b+w*x;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/P;return e[0]=(o*D-c*S+l*U)*F,e[1]=(s*S-n*D-r*U)*F,e[2]=(_*w-g*A+m*y)*F,e[3]=(f*A-p*w-h*y)*F,e[4]=(c*C-a*D-l*b)*F,e[5]=(t*D-s*C+r*b)*F,e[6]=(g*v-d*w-m*T)*F,e[7]=(u*w-f*v+h*T)*F,e[8]=(a*S-o*C+l*x)*F,e[9]=(n*C-t*S-r*x)*F,e[10]=(d*A-_*v+m*E)*F,e[11]=(p*v-u*A-h*E)*F,e[12]=(o*b-a*U-c*x)*F,e[13]=(t*U-n*b+s*x)*F,e[14]=(_*T-d*y-g*E)*F,e[15]=(u*y-p*T+f*E)*F,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+n,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,u=a+a,p=o+o,f=r*l,h=r*u,d=r*p,_=a*u,g=a*p,m=o*p,E=c*l,T=c*u,v=c*p,y=n.x,A=n.y,w=n.z;return s[0]=(1-(_+m))*y,s[1]=(h+v)*y,s[2]=(d-T)*y,s[3]=0,s[4]=(h-v)*A,s[5]=(1-(f+m))*A,s[6]=(g+E)*A,s[7]=0,s[8]=(d+T)*w,s[9]=(g-E)*w,s[10]=(1-(f+_))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Zs.set(s[0],s[1],s[2]).length(),o=Zs.set(s[4],s[5],s[6]).length(),c=Zs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Ai.copy(this);let l=1/a,u=1/o,p=1/c;return Ai.elements[0]*=l,Ai.elements[1]*=l,Ai.elements[2]*=l,Ai.elements[4]*=u,Ai.elements[5]*=u,Ai.elements[6]*=u,Ai.elements[8]*=p,Ai.elements[9]*=p,Ai.elements[10]*=p,t.setFromRotationMatrix(Ai),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,s,r,a,o=Pi,c=!1){let l=this.elements,u=2*r/(t-e),p=2*r/(n-s),f=(t+e)/(t-e),h=(n+s)/(n-s),d,_;if(c)d=r/(a-r),_=a*r/(a-r);else if(o===Pi)d=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===fr)d=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=p,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Pi,c=!1){let l=this.elements,u=2/(t-e),p=2/(n-s),f=-(t+e)/(t-e),h=-(n+s)/(n-s),d,_;if(c)d=1/(a-r),_=a/(a-r);else if(o===Pi)d=-2/(a-r),_=-(a+r)/(a-r);else if(o===fr)d=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=p,l[9]=0,l[13]=h,l[2]=0,l[6]=0,l[10]=d,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Ml.prototype.isMatrix4=!0;var mt=Ml,Zs=new L,Ai=new mt,vp=new L(0,0,0),_p=new L(1,1,1),cs=new L,ao=new L,ni=new L,Ih=new mt,Dh=new hn,Ii=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],p=s[2],f=s[6],h=s[10];switch(t){case"XYZ":this._y=Math.asin(Gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Gt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(Gt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-p,h),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Gt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Gt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-Gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,h),this._y=0);break;default:yt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ih.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ih,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Dh.setFromEuler(this),this.setFromQuaternion(Dh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ii.DEFAULT_ORDER="XYZ";var gr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},yp=0,Lh=new L,$s=new hn,Qi=new mt,oo=new L,Gr=new L,Mp=new L,Sp=new hn,Uh=new L(1,0,0),Nh=new L(0,1,0),Fh=new L(0,0,1),Oh={type:"added"},Ep={type:"removed"},Js={type:"childadded",child:null},Fc={type:"childremoved",child:null},dn=class i extends Gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yp++}),this.uuid=is(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new L,t=new Ii,n=new hn,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new mt},normalMatrix:{value:new At}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $s.setFromAxisAngle(e,t),this.quaternion.multiply($s),this}rotateOnWorldAxis(e,t){return $s.setFromAxisAngle(e,t),this.quaternion.premultiply($s),this}rotateX(e){return this.rotateOnAxis(Uh,e)}rotateY(e){return this.rotateOnAxis(Nh,e)}rotateZ(e){return this.rotateOnAxis(Fh,e)}translateOnAxis(e,t){return Lh.copy(e).applyQuaternion(this.quaternion),this.position.add(Lh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Uh,e)}translateY(e){return this.translateOnAxis(Nh,e)}translateZ(e){return this.translateOnAxis(Fh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?oo.copy(e):oo.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Gr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qi.lookAt(Gr,oo,this.up):Qi.lookAt(oo,Gr,this.up),this.quaternion.setFromRotationMatrix(Qi),s&&(Qi.extractRotation(s.matrixWorld),$s.setFromRotationMatrix(Qi),this.quaternion.premultiply($s.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(St("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Oh),Js.child=e,this.dispatchEvent(Js),Js.child=null):St("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ep),Fc.child=e,this.dispatchEvent(Fc),Fc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Oh),Js.child=e,this.dispatchEvent(Js),Js.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gr,e,Mp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gr,Sp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let p=c[l];r(e.shapes,p)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),p=a(e.shapes),f=a(e.skeletons),h=a(e.animations),d=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),p.length>0&&(n.shapes=p),f.length>0&&(n.skeletons=f),h.length>0&&(n.animations=h),d.length>0&&(n.nodes=d)}return n.object=s,n;function a(o){let c=[];for(let l in o){let u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};dn.DEFAULT_UP=new L(0,1,0);dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var xt=class extends dn{constructor(){super(),this.isGroup=!0,this.type="Group"}},bp={type:"move"},xr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let _ of e.hand.values()){let g=t.getJointPose(_,n),m=this._getHandJoint(l,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let u=l.joints["index-finger-tip"],p=l.joints["thumb-tip"],f=u.position.distanceTo(p.position),h=.02,d=.005;l.inputState.pinching&&f>h+d?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=h-d&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(bp)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new xt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Xd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},us={h:0,s:0,l:0},lo={h:0,s:0,l:0};function Oc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ze=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,zt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=zt.workingColorSpace){return this.r=e,this.g=t,this.b=n,zt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=zt.workingColorSpace){if(e=pp(e,1),t=Gt(t,0,1),n=Gt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Oc(a,r,e+1/3),this.g=Oc(a,r,e),this.b=Oc(a,r,e-1/3)}return zt.colorSpaceToWorking(this,s),this}setStyle(e,t=Kt){function n(r){r!==void 0&&parseFloat(r)<1&&yt("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:yt("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);yt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Kt){let n=Xd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):yt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ss(e.r),this.g=ss(e.g),this.b=ss(e.b),this}copyLinearToSRGB(e){return this.r=hr(e.r),this.g=hr(e.g),this.b=hr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kt){return zt.workingToColorSpace(zn.copy(this),e),Math.round(Gt(zn.r*255,0,255))*65536+Math.round(Gt(zn.g*255,0,255))*256+Math.round(Gt(zn.b*255,0,255))}getHexString(e=Kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=zt.workingColorSpace){zt.workingToColorSpace(zn.copy(this),t);let n=zn.r,s=zn.g,r=zn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,u=(o+a)/2;if(o===a)c=0,l=0;else{let p=a-o;switch(l=u<=.5?p/(a+o):p/(2-a-o),a){case n:c=(s-r)/p+(s<r?6:0);break;case s:c=(r-n)/p+2;break;case r:c=(n-s)/p+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=zt.workingColorSpace){return zt.workingToColorSpace(zn.copy(this),t),e.r=zn.r,e.g=zn.g,e.b=zn.b,e}getStyle(e=Kt){zt.workingToColorSpace(zn.copy(this),e);let t=zn.r,n=zn.g,s=zn.b;return e!==Kt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(us),this.setHSL(us.h+e,us.s+t,us.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(us),e.getHSL(lo);let n=Ic(us.h,lo.h,t),s=Ic(us.s,lo.s,t),r=Ic(us.l,lo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},zn=new Ze;Ze.NAMES=Xd;var oa=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ze(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ls=class extends dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ii,this.environmentIntensity=1,this.environmentRotation=new Ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ri=new L,ji=new L,Bc=new L,es=new L,Ks=new L,Qs=new L,Bh=new L,Hc=new L,zc=new L,Gc=new L,Vc=new rn,kc=new rn,Wc=new rn,Bi=class i{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Ri.subVectors(e,t),s.cross(Ri);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Ri.subVectors(s,t),ji.subVectors(n,t),Bc.subVectors(e,t);let a=Ri.dot(Ri),o=Ri.dot(ji),c=Ri.dot(Bc),l=ji.dot(ji),u=ji.dot(Bc),p=a*l-o*o;if(p===0)return r.set(0,0,0),null;let f=1/p,h=(l*c-o*u)*f,d=(a*u-o*c)*f;return r.set(1-h-d,d,h)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,es)===null?!1:es.x>=0&&es.y>=0&&es.x+es.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,es)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,es.x),c.addScaledVector(a,es.y),c.addScaledVector(o,es.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return Vc.setScalar(0),kc.setScalar(0),Wc.setScalar(0),Vc.fromBufferAttribute(e,t),kc.fromBufferAttribute(e,n),Wc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Vc,r.x),a.addScaledVector(kc,r.y),a.addScaledVector(Wc,r.z),a}static isFrontFacing(e,t,n,s){return Ri.subVectors(n,t),ji.subVectors(e,t),Ri.cross(ji).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ri.subVectors(this.c,this.b),ji.subVectors(this.a,this.b),Ri.cross(ji).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Ks.subVectors(s,n),Qs.subVectors(r,n),Hc.subVectors(e,n);let c=Ks.dot(Hc),l=Qs.dot(Hc);if(c<=0&&l<=0)return t.copy(n);zc.subVectors(e,s);let u=Ks.dot(zc),p=Qs.dot(zc);if(u>=0&&p<=u)return t.copy(s);let f=c*p-u*l;if(f<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(Ks,a);Gc.subVectors(e,r);let h=Ks.dot(Gc),d=Qs.dot(Gc);if(d>=0&&h<=d)return t.copy(r);let _=h*l-c*d;if(_<=0&&l>=0&&d<=0)return o=l/(l-d),t.copy(n).addScaledVector(Qs,o);let g=u*d-h*p;if(g<=0&&p-u>=0&&h-d>=0)return Bh.subVectors(r,s),o=(p-u)/(p-u+(h-d)),t.copy(s).addScaledVector(Bh,o);let m=1/(g+_+f);return a=_*m,o=f*m,t.copy(n).addScaledVector(Ks,a).addScaledVector(Qs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Vi=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ci.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ci.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Ci.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Ci):Ci.fromBufferAttribute(r,a),Ci.applyMatrix4(e.matrixWorld),this.expandByPoint(Ci);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),co.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),co.copy(n.boundingBox)),co.applyMatrix4(e.matrixWorld),this.union(co)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ci),Ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vr),uo.subVectors(this.max,Vr),js.subVectors(e.a,Vr),er.subVectors(e.b,Vr),tr.subVectors(e.c,Vr),hs.subVectors(er,js),ds.subVectors(tr,er),As.subVectors(js,tr);let t=[0,-hs.z,hs.y,0,-ds.z,ds.y,0,-As.z,As.y,hs.z,0,-hs.x,ds.z,0,-ds.x,As.z,0,-As.x,-hs.y,hs.x,0,-ds.y,ds.x,0,-As.y,As.x,0];return!Xc(t,js,er,tr,uo)||(t=[1,0,0,0,1,0,0,0,1],!Xc(t,js,er,tr,uo))?!1:(ho.crossVectors(hs,ds),t=[ho.x,ho.y,ho.z],Xc(t,js,er,tr,uo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ts[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ts[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ts[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ts[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ts[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ts[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ts[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ts[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ts),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ts=[new L,new L,new L,new L,new L,new L,new L,new L],Ci=new L,co=new Vi,js=new L,er=new L,tr=new L,hs=new L,ds=new L,As=new L,Vr=new L,uo=new L,ho=new L,Rs=new L;function Xc(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Rs.fromArray(i,r);let o=s.x*Math.abs(Rs.x)+s.y*Math.abs(Rs.y)+s.z*Math.abs(Rs.z),c=e.dot(Rs),l=t.dot(Rs),u=n.dot(Rs);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}var _n=new L,fo=new Ie,Tp=0,Tt=class extends Gi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Tp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Lu,this.updateRanges=[],this.gpuType=_i,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)fo.fromBufferAttribute(this,t),fo.applyMatrix3(e),this.setXY(t,fo.x,fo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)_n.fromBufferAttribute(this,t),_n.applyMatrix3(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)_n.fromBufferAttribute(this,t),_n.applyMatrix4(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)_n.fromBufferAttribute(this,t),_n.applyNormalMatrix(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)_n.fromBufferAttribute(this,t),_n.transformDirection(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Oi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Oi(t,this.array)),t}setX(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Oi(t,this.array)),t}setY(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Oi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Oi(t,this.array)),t}setW(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),n=nn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),n=nn(n,this.array),s=nn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),n=nn(n,this.array),s=nn(s,this.array),r=nn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var la=class extends Tt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ca=class extends Tt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Dt=class extends Tt{constructor(e,t,n){super(new Float32Array(e),t,n)}},wp=new Vi,kr=new L,qc=new L,ki=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):wp.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;kr.subVectors(e,this.center);let t=kr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(kr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(kr.copy(e.center).add(qc)),this.expandByPoint(kr.copy(e.center).sub(qc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Ap=0,pi=new mt,Yc=new dn,nr=new L,ii=new Vi,Wr=new Vi,In=new L,Lt=class i extends Gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ap++}),this.uuid=is(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(dp(e)?ca:la)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new At().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return pi.makeRotationFromQuaternion(e),this.applyMatrix4(pi),this}rotateX(e){return pi.makeRotationX(e),this.applyMatrix4(pi),this}rotateY(e){return pi.makeRotationY(e),this.applyMatrix4(pi),this}rotateZ(e){return pi.makeRotationZ(e),this.applyMatrix4(pi),this}translate(e,t,n){return pi.makeTranslation(e,t,n),this.applyMatrix4(pi),this}scale(e,t,n){return pi.makeScale(e,t,n),this.applyMatrix4(pi),this}lookAt(e){return Yc.lookAt(e),Yc.updateMatrix(),this.applyMatrix4(Yc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(nr).negate(),this.translate(nr.x,nr.y,nr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Dt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&yt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){St("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];ii.setFromBufferAttribute(r),this.morphTargetsRelative?(In.addVectors(this.boundingBox.min,ii.min),this.boundingBox.expandByPoint(In),In.addVectors(this.boundingBox.max,ii.max),this.boundingBox.expandByPoint(In)):(this.boundingBox.expandByPoint(ii.min),this.boundingBox.expandByPoint(ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&St('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ki);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){St("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(ii.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Wr.setFromBufferAttribute(o),this.morphTargetsRelative?(In.addVectors(ii.min,Wr.min),ii.expandByPoint(In),In.addVectors(ii.max,Wr.max),ii.expandByPoint(In)):(ii.expandByPoint(Wr.min),ii.expandByPoint(Wr.max))}ii.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)In.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(In));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)In.fromBufferAttribute(o,l),c&&(nr.fromBufferAttribute(e,l),In.add(nr)),s=Math.max(s,n.distanceToSquared(In))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&St('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){St("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Tt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let x=0;x<n.count;x++)o[x]=new L,c[x]=new L;let l=new L,u=new L,p=new L,f=new Ie,h=new Ie,d=new Ie,_=new L,g=new L;function m(x,b,C){l.fromBufferAttribute(n,x),u.fromBufferAttribute(n,b),p.fromBufferAttribute(n,C),f.fromBufferAttribute(r,x),h.fromBufferAttribute(r,b),d.fromBufferAttribute(r,C),u.sub(l),p.sub(l),h.sub(f),d.sub(f);let U=1/(h.x*d.y-d.x*h.y);isFinite(U)&&(_.copy(u).multiplyScalar(d.y).addScaledVector(p,-h.y).multiplyScalar(U),g.copy(p).multiplyScalar(h.x).addScaledVector(u,-d.x).multiplyScalar(U),o[x].add(_),o[b].add(_),o[C].add(_),c[x].add(g),c[b].add(g),c[C].add(g))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let x=0,b=E.length;x<b;++x){let C=E[x],U=C.start,S=C.count;for(let D=U,P=U+S;D<P;D+=3)m(e.getX(D+0),e.getX(D+1),e.getX(D+2))}let T=new L,v=new L,y=new L,A=new L;function w(x){y.fromBufferAttribute(s,x),A.copy(y);let b=o[x];T.copy(b),T.sub(y.multiplyScalar(y.dot(b))).normalize(),v.crossVectors(A,b);let U=v.dot(c[x])<0?-1:1;a.setXYZW(x,T.x,T.y,T.z,U)}for(let x=0,b=E.length;x<b;++x){let C=E[x],U=C.start,S=C.count;for(let D=U,P=U+S;D<P;D+=3)w(e.getX(D+0)),w(e.getX(D+1)),w(e.getX(D+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Tt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,h=n.count;f<h;f++)n.setXYZ(f,0,0,0);let s=new L,r=new L,a=new L,o=new L,c=new L,l=new L,u=new L,p=new L;if(e)for(let f=0,h=e.count;f<h;f+=3){let d=e.getX(f+0),_=e.getX(f+1),g=e.getX(f+2);s.fromBufferAttribute(t,d),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,g),u.subVectors(a,r),p.subVectors(s,r),u.cross(p),o.fromBufferAttribute(n,d),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),o.add(u),c.add(u),l.add(u),n.setXYZ(d,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let f=0,h=t.count;f<h;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,r),p.subVectors(s,r),u.cross(p),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)In.fromBufferAttribute(e,t),In.normalize(),e.setXYZ(t,In.x,In.y,In.z)}toNonIndexed(){function e(o,c){let l=o.array,u=o.itemSize,p=o.normalized,f=new l.constructor(c.length*u),h=0,d=0;for(let _=0,g=c.length;_<g;_++){o.isInterleavedBufferAttribute?h=c[_]*o.data.stride+o.offset:h=c[_]*u;for(let m=0;m<u;m++)f[d++]=l[h++]}return new Tt(f,u,p)}if(this.index===null)return yt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let u=0,p=l.length;u<p;u++){let f=l[u],h=e(f,n);c.push(h)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let p=0,f=l.length;p<f;p++){let h=l[p];u.push(h.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(t))}let r=e.morphAttributes;for(let l in r){let u=[],p=r[l];for(let f=0,h=p.length;f<h;f++)u.push(p[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,u=a.length;l<u;l++){let p=a[l];this.addGroup(p.start,p.count,p.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},ua=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Lu,this.updateRanges=[],this.version=0,this.uuid=is()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=is()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=is()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},Zn=new L,vr=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Zn.fromBufferAttribute(this,t),Zn.applyMatrix4(e),this.setXYZ(t,Zn.x,Zn.y,Zn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Zn.fromBufferAttribute(this,t),Zn.applyNormalMatrix(e),this.setXYZ(t,Zn.x,Zn.y,Zn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Zn.fromBufferAttribute(this,t),Zn.transformDirection(e),this.setXYZ(t,Zn.x,Zn.y,Zn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Oi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=nn(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=nn(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=nn(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=nn(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=nn(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Oi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Oi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Oi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Oi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=nn(t,this.array),n=nn(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=nn(t,this.array),n=nn(n,this.array),s=nn(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=nn(t,this.array),n=nn(n,this.array),s=nn(s,this.array),r=nn(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){sa("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Tt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){sa("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Zc=new L,Rp=new L,Cp=new At,si=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Zc.subVectors(n,t).cross(Rp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Zc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Cp.getNormalMatrix(e),s=this.coplanarPoint(Zc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Pp=0,mi=class extends Gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pp++}),this.uuid=is(),this.name="",this.type="Material",this.blending=Ms,this.side=ys,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Su,this.blendDst=Eu,this.blendEquation=vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=dr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ud,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zo,this.stencilZFail=zo,this.stencilZPass=zo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){yt(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){yt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ze().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new si().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ie().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ie().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},bn=class extends mi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ze(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ir,Xr=new L,sr=new L,rr=new L,ar=new Ie,qr=new Ie,qd=new mt,po=new L,Yr=new L,mo=new L,Hh=new Ie,$c=new Ie,zh=new Ie,Ln=class extends dn{constructor(e=new bn){if(super(),this.isSprite=!0,this.type="Sprite",ir===void 0){ir=new Lt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ua(t,5);ir.setIndex([0,1,2,0,2,3]),ir.setAttribute("position",new vr(n,3,0,!1)),ir.setAttribute("uv",new vr(n,2,3,!1))}this.geometry=ir,this.material=e,this.center=new Ie(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&St('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),sr.setFromMatrixScale(this.matrixWorld),qd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),rr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&sr.multiplyScalar(-rr.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;go(po.set(-.5,-.5,0),rr,a,sr,s,r),go(Yr.set(.5,-.5,0),rr,a,sr,s,r),go(mo.set(.5,.5,0),rr,a,sr,s,r),Hh.set(0,0),$c.set(1,0),zh.set(1,1);let o=e.ray.intersectTriangle(po,Yr,mo,!1,Xr);if(o===null&&(go(Yr.set(-.5,.5,0),rr,a,sr,s,r),$c.set(0,1),o=e.ray.intersectTriangle(po,mo,Yr,!1,Xr),o===null))return;let c=e.ray.origin.distanceTo(Xr);c<e.near||c>e.far||t.push({distance:c,point:Xr.clone(),uv:Bi.getInterpolation(Xr,po,Yr,mo,Hh,$c,zh,new Ie),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function go(i,e,t,n,s,r){ar.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(qr.x=r*ar.x-s*ar.y,qr.y=s*ar.x+r*ar.y):qr.copy(ar),i.copy(e),i.x+=qr.x,i.y+=qr.y,i.applyMatrix4(qd)}var ns=new L,Jc=new L,xo=new L,vo=new L,Us=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ns)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ns.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ns.copy(this.origin).addScaledVector(this.direction,t),ns.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Jc.copy(e).add(t).multiplyScalar(.5),xo.copy(t).sub(e).normalize(),vo.copy(this.origin).sub(Jc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(xo),o=vo.dot(this.direction),c=-vo.dot(xo),l=vo.lengthSq(),u=Math.abs(1-a*a),p,f,h,d;if(u>0)if(p=a*c-o,f=a*o-c,d=r*u,p>=0)if(f>=-d)if(f<=d){let _=1/u;p*=_,f*=_,h=p*(p+a*f+2*o)+f*(a*p+f+2*c)+l}else f=r,p=Math.max(0,-(a*f+o)),h=-p*p+f*(f+2*c)+l;else f=-r,p=Math.max(0,-(a*f+o)),h=-p*p+f*(f+2*c)+l;else f<=-d?(p=Math.max(0,-(-a*r+o)),f=p>0?-r:Math.min(Math.max(-r,-c),r),h=-p*p+f*(f+2*c)+l):f<=d?(p=0,f=Math.min(Math.max(-r,-c),r),h=f*(f+2*c)+l):(p=Math.max(0,-(a*r+o)),f=p>0?r:Math.min(Math.max(-r,-c),r),h=-p*p+f*(f+2*c)+l);else f=a>0?-r:r,p=Math.max(0,-(a*f+o)),h=-p*p+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(Jc).addScaledVector(xo,f),h}intersectSphere(e,t){if(e.radius<0)return null;ns.subVectors(e.center,this.origin);let n=ns.dot(this.direction),s=ns.dot(ns)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,l=1/this.direction.x,u=1/this.direction.y,p=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),u>=0?(r=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),p>=0?(o=(e.min.z-f.z)*p,c=(e.max.z-f.z)*p):(o=(e.max.z-f.z)*p,c=(e.min.z-f.z)*p),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ns)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,u=o.z,p=e.x-a.x,f=e.y-a.y,h=e.z-a.z,d=t.x-a.x,_=t.y-a.y,g=t.z-a.z,m=n.x-a.x,E=n.y-a.y,T=n.z-a.z,v=Math.abs(c),y=Math.abs(l),A=Math.abs(u),w,x,b,C,U,S,D,P,F,k,H,z;if(v>=y&&v>=A?(b=c,S=p,F=d,z=m,c>=0?(w=l,x=u,C=f,U=h,D=_,P=g,k=E,H=T):(w=u,x=l,C=h,U=f,D=g,P=_,k=T,H=E)):y>=A?(b=l,S=f,F=_,z=E,l>=0?(w=u,x=c,C=h,U=p,D=g,P=d,k=T,H=m):(w=c,x=u,C=p,U=h,D=d,P=g,k=m,H=T)):(b=u,S=h,F=g,z=T,u>=0?(w=c,x=l,C=p,U=f,D=d,P=_,k=m,H=E):(w=l,x=c,C=f,U=p,D=_,P=d,k=E,H=m)),b===0)return null;let O=w/b,B=x/b,q=1/b,oe=C-O*S,ge=U-B*S,ye=D-O*F,De=P-B*F,Ke=k-O*z,$=H-B*z,se=Ke*De-$*ye,ve=oe*$-ge*Ke,xe=ye*ge-De*oe;if(s){if(se<0||ve<0||xe<0)return null}else if((se<0||ve<0||xe<0)&&(se>0||ve>0||xe>0))return null;let we=se+ve+xe;if(we===0)return null;let X=q*(se*S+ve*F+xe*z);return(we>0?X<0:X>0)?null:this.at(X/we,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},en=class extends mi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.combine=bu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Gh=new mt,Cs=new Us,_o=new ki,Vh=new L,yo=new L,Mo=new L,So=new L,Kc=new L,Eo=new L,kh=new L,bo=new L,Pe=class extends dn{constructor(e=new Lt,t=new en){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Eo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=o[c],p=r[c];u!==0&&(Kc.fromBufferAttribute(p,e),a?Eo.addScaledVector(Kc,u):Eo.addScaledVector(Kc.sub(t),u))}t.add(Eo)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),_o.copy(n.boundingSphere),_o.applyMatrix4(r),Cs.copy(e.ray).recast(e.near),!(_o.containsPoint(Cs.origin)===!1&&(Cs.intersectSphere(_o,Vh)===null||Cs.origin.distanceToSquared(Vh)>(e.far-e.near)**2))&&(Gh.copy(r).invert(),Cs.copy(e.ray).applyMatrix4(Gh),!(n.boundingBox!==null&&Cs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Cs)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,p=r.attributes.normal,f=r.groups,h=r.drawRange;if(o!==null)if(Array.isArray(a))for(let d=0,_=f.length;d<_;d++){let g=f[d],m=a[g.materialIndex],E=Math.max(g.start,h.start),T=Math.min(o.count,Math.min(g.start+g.count,h.start+h.count));for(let v=E,y=T;v<y;v+=3){let A=o.getX(v),w=o.getX(v+1),x=o.getX(v+2);s=To(this,m,e,n,l,u,p,A,w,x),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let d=Math.max(0,h.start),_=Math.min(o.count,h.start+h.count);for(let g=d,m=_;g<m;g+=3){let E=o.getX(g),T=o.getX(g+1),v=o.getX(g+2);s=To(this,a,e,n,l,u,p,E,T,v),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let d=0,_=f.length;d<_;d++){let g=f[d],m=a[g.materialIndex],E=Math.max(g.start,h.start),T=Math.min(c.count,Math.min(g.start+g.count,h.start+h.count));for(let v=E,y=T;v<y;v+=3){let A=v,w=v+1,x=v+2;s=To(this,m,e,n,l,u,p,A,w,x),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let d=Math.max(0,h.start),_=Math.min(c.count,h.start+h.count);for(let g=d,m=_;g<m;g+=3){let E=g,T=g+1,v=g+2;s=To(this,a,e,n,l,u,p,E,T,v),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function Ip(i,e,t,n,s,r,a,o){let c;if(e.side===Nn?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===ys,o),c===null)return null;bo.copy(o),bo.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(bo);return l<t.near||l>t.far?null:{distance:l,point:bo.clone(),object:i}}function To(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,yo),i.getVertexPosition(c,Mo),i.getVertexPosition(l,So);let u=Ip(i,e,t,n,yo,Mo,So,kh);if(u){let p=new L;Bi.getBarycoord(kh,yo,Mo,So,p),s&&(u.uv=Bi.getInterpolatedAttribute(s,o,c,l,p,new Ie)),r&&(u.uv1=Bi.getInterpolatedAttribute(r,o,c,l,p,new Ie)),a&&(u.normal=Bi.getInterpolatedAttribute(a,o,c,l,p,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a:o,b:c,c:l,normal:new L,materialIndex:0};Bi.getNormal(yo,Mo,So,f.normal),u.face=f,u.barycoord=p}return u}var gi=class extends $n{constructor(e=null,t=1,n=1,s,r,a,o,c,l=gn,u=gn,p,f){super(null,a,o,c,l,u,s,r,p,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var _r=class extends Tt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},or=new mt,Wh=new mt,wo=[],Xh=new Vi,Dp=new mt,Zr=new Pe,$r=new ki,Di=class extends Pe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new _r(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Dp)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Vi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,or),Xh.copy(e.boundingBox).applyMatrix4(or),this.boundingBox.union(Xh)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ki),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,or),$r.copy(e.boundingSphere).applyMatrix4(or),this.boundingSphere.union($r)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Zr.geometry=this.geometry,Zr.material=this.material,Zr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$r.copy(this.boundingSphere),$r.applyMatrix4(n),e.ray.intersectsSphere($r)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,or),Wh.multiplyMatrices(n,or),Zr.matrixWorld=Wh,Zr.raycast(e,wo);for(let a=0,o=wo.length;a<o;a++){let c=wo[a];c.instanceId=r,c.object=this,t.push(c)}wo.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new _r(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new gi(new Float32Array(s*this.count),s,this.count,Cl,_i));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ps=new ki,Lp=new Ie(.5,.5),Ao=new L,yr=class{constructor(e=new si,t=new si,n=new si,s=new si,r=new si,a=new si){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Pi,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],u=r[4],p=r[5],f=r[6],h=r[7],d=r[8],_=r[9],g=r[10],m=r[11],E=r[12],T=r[13],v=r[14],y=r[15];if(s[0].setComponents(l-a,h-u,m-d,y-E).normalize(),s[1].setComponents(l+a,h+u,m+d,y+E).normalize(),s[2].setComponents(l+o,h+p,m+_,y+T).normalize(),s[3].setComponents(l-o,h-p,m-_,y-T).normalize(),n)s[4].setComponents(c,f,g,v).normalize(),s[5].setComponents(l-c,h-f,m-g,y-v).normalize();else if(s[4].setComponents(l-c,h-f,m-g,y-v).normalize(),t===Pi)s[5].setComponents(l+c,h+f,m+g,y+v).normalize();else if(t===fr)s[5].setComponents(c,f,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ps.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ps.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ps)}intersectsSprite(e){Ps.center.set(0,0,0);let t=Lp.distanceTo(e.center);return Ps.radius=.7071067811865476+t,Ps.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ps)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Ao.x=s.normal.x>0?e.max.x:e.min.x,Ao.y=s.normal.y>0?e.max.y:e.min.y,Ao.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ao)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ps=class extends mi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},el=new L,tl=new L,qh=new mt,Jr=new Us,Ro=new ki,Qc=new L,Yh=new L,nl=class extends dn{constructor(e=new Lt,t=new ps){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)el.fromBufferAttribute(t,s-1),tl.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=el.distanceTo(tl);e.setAttribute("lineDistance",new Dt(n,1))}else yt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ro.copy(n.boundingSphere),Ro.applyMatrix4(s),Ro.radius+=r,e.ray.intersectsSphere(Ro)===!1)return;qh.copy(s).invert(),Jr.copy(e.ray).applyMatrix4(qh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){let h=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let _=h,g=d-1;_<g;_+=l){let m=u.getX(_),E=u.getX(_+1),T=Co(this,e,Jr,c,m,E,_);T&&t.push(T)}if(this.isLineLoop){let _=u.getX(d-1),g=u.getX(h),m=Co(this,e,Jr,c,_,g,d-1);m&&t.push(m)}}else{let h=Math.max(0,a.start),d=Math.min(f.count,a.start+a.count);for(let _=h,g=d-1;_<g;_+=l){let m=Co(this,e,Jr,c,_,_+1,_);m&&t.push(m)}if(this.isLineLoop){let _=Co(this,e,Jr,c,d-1,h,d-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Co(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(el.fromBufferAttribute(o,s),tl.fromBufferAttribute(o,r),t.distanceSqToSegment(el,tl,Qc,Yh)>n)return;Qc.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Qc);if(!(l<e.near||l>e.far))return{distance:l,point:Yh.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Zh=new L,$h=new L,Wi=class extends nl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Zh.fromBufferAttribute(t,s),$h.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Zh.distanceTo($h);e.setAttribute("lineDistance",new Dt(n,1))}else yt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Tn=class extends mi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Jh=new mt,cu=new Us,Po=new ki,Io=new L,Un=class extends dn{constructor(e=new Lt,t=new Tn){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Po.copy(n.boundingSphere),Po.applyMatrix4(s),Po.radius+=r,e.ray.intersectsSphere(Po)===!1)return;Jh.copy(s).invert(),cu.copy(e.ray).applyMatrix4(Jh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,p=n.attributes.position;if(l!==null){let f=Math.max(0,a.start),h=Math.min(l.count,a.start+a.count);for(let d=f,_=h;d<_;d++){let g=l.getX(d);Io.fromBufferAttribute(p,g),Kh(Io,g,c,s,e,t,this)}}else{let f=Math.max(0,a.start),h=Math.min(p.count,a.start+a.count);for(let d=f,_=h;d<_;d++)Io.fromBufferAttribute(p,d),Kh(Io,d,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Kh(i,e,t,n,s,r,a){let o=cu.distanceSqToPoint(i);if(o<t){let c=new L;cu.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var ha=class extends $n{constructor(e=[],t=Es,n,s,r,a,o,c,l,u){super(e,t,n,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Mn=class extends $n{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var xi=class extends $n{constructor(e,t,n=Ui,s,r,a,o=gn,c=gn,l,u=zi,p=1){if(u!==zi&&u!==Yi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:p};super(f,s,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new mr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},il=class extends xi{constructor(e,t=Ui,n=Es,s,r,a=gn,o=gn,c,l=zi){let u={width:e,height:e,depth:1},p=[u,u,u,u,u,u];super(e,e,t,n,s,r,a,o,c,l),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},da=class extends $n{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},kt=class i extends Lt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],u=[],p=[],f=0,h=0;d("z","y","x",-1,-1,n,t,e,a,r,0),d("z","y","x",1,-1,n,t,-e,a,r,1),d("x","z","y",1,1,e,n,t,s,a,2),d("x","z","y",1,-1,e,n,-t,s,a,3),d("x","y","z",1,-1,e,t,n,s,r,4),d("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Dt(l,3)),this.setAttribute("normal",new Dt(u,3)),this.setAttribute("uv",new Dt(p,2));function d(_,g,m,E,T,v,y,A,w,x,b){let C=v/w,U=y/x,S=v/2,D=y/2,P=A/2,F=w+1,k=x+1,H=0,z=0,O=new L;for(let B=0;B<k;B++){let q=B*U-D;for(let oe=0;oe<F;oe++){let ge=oe*C-S;O[_]=ge*E,O[g]=q*T,O[m]=P,l.push(O.x,O.y,O.z),O[_]=0,O[g]=0,O[m]=A>0?1:-1,u.push(O.x,O.y,O.z),p.push(oe/w),p.push(1-B/x),H+=1}}for(let B=0;B<x;B++)for(let q=0;q<w;q++){let oe=f+q+F*B,ge=f+q+F*(B+1),ye=f+(q+1)+F*(B+1),De=f+(q+1)+F*B;c.push(oe,ge,De),c.push(ge,ye,De),z+=6}o.addGroup(h,z,b),h+=z,f+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var $t=class i extends Lt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let u=[],p=[],f=[],h=[],d=0,_=[],g=n/2,m=0;E(),a===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(u),this.setAttribute("position",new Dt(p,3)),this.setAttribute("normal",new Dt(f,3)),this.setAttribute("uv",new Dt(h,2));function E(){let v=new L,y=new L,A=0,w=(t-e)/n;for(let x=0;x<=r;x++){let b=[],C=x/r,U=C*(t-e)+e;for(let S=0;S<=s;S++){let D=S/s,P=D*c+o,F=Math.sin(P),k=Math.cos(P);y.x=U*F,y.y=-C*n+g,y.z=U*k,p.push(y.x,y.y,y.z),v.set(F,w,k).normalize(),f.push(v.x,v.y,v.z),h.push(D,1-C),b.push(d++)}_.push(b)}for(let x=0;x<s;x++)for(let b=0;b<r;b++){let C=_[b][x],U=_[b+1][x],S=_[b+1][x+1],D=_[b][x+1];(e>0||b!==0)&&(u.push(C,U,D),A+=3),(t>0||b!==r-1)&&(u.push(U,S,D),A+=3)}l.addGroup(m,A,0),m+=A}function T(v){let y=d,A=new Ie,w=new L,x=0,b=v===!0?e:t,C=v===!0?1:-1;for(let S=1;S<=s;S++)p.push(0,g*C,0),f.push(0,C,0),h.push(.5,.5),d++;let U=d;for(let S=0;S<=s;S++){let P=S/s*c+o,F=Math.cos(P),k=Math.sin(P);w.x=b*k,w.y=g*C,w.z=b*F,p.push(w.x,w.y,w.z),f.push(0,C,0),A.x=F*.5+.5,A.y=k*.5*C+.5,h.push(A.x,A.y),d++}for(let S=0;S<s;S++){let D=y+S,P=U+S;v===!0?u.push(P,P+1,D):u.push(P+1,P,D),x+=3}l.addGroup(m,x,v===!0?1:2),m+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ns=class i extends $t{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},sl=class i extends Lt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),l(n),u(),this.setAttribute("position",new Dt(r,3)),this.setAttribute("normal",new Dt(r.slice(),3)),this.setAttribute("uv",new Dt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(E){let T=new L,v=new L,y=new L;for(let A=0;A<t.length;A+=3)h(t[A+0],T),h(t[A+1],v),h(t[A+2],y),c(T,v,y,E)}function c(E,T,v,y){let A=y+1,w=[];for(let x=0;x<=A;x++){w[x]=[];let b=E.clone().lerp(v,x/A),C=T.clone().lerp(v,x/A),U=A-x;for(let S=0;S<=U;S++)S===0&&x===A?w[x][S]=b:w[x][S]=b.clone().lerp(C,S/U)}for(let x=0;x<A;x++)for(let b=0;b<2*(A-x)-1;b++){let C=Math.floor(b/2);b%2===0?(f(w[x][C+1]),f(w[x+1][C]),f(w[x][C])):(f(w[x][C+1]),f(w[x+1][C+1]),f(w[x+1][C]))}}function l(E){let T=new L;for(let v=0;v<r.length;v+=3)T.x=r[v+0],T.y=r[v+1],T.z=r[v+2],T.normalize().multiplyScalar(E),r[v+0]=T.x,r[v+1]=T.y,r[v+2]=T.z}function u(){let E=new L;for(let T=0;T<r.length;T+=3){E.x=r[T+0],E.y=r[T+1],E.z=r[T+2];let v=g(E)/2/Math.PI+.5,y=m(E)/Math.PI+.5;a.push(v,1-y)}d(),p()}function p(){for(let E=0;E<a.length;E+=6){let T=a[E+0],v=a[E+2],y=a[E+4],A=Math.max(T,v,y),w=Math.min(T,v,y);A>.9&&w<.1&&(T<.2&&(a[E+0]+=1),v<.2&&(a[E+2]+=1),y<.2&&(a[E+4]+=1))}}function f(E){r.push(E.x,E.y,E.z)}function h(E,T){let v=E*3;T.x=e[v+0],T.y=e[v+1],T.z=e[v+2]}function d(){let E=new L,T=new L,v=new L,y=new L,A=new Ie,w=new Ie,x=new Ie;for(let b=0,C=0;b<r.length;b+=9,C+=6){E.set(r[b+0],r[b+1],r[b+2]),T.set(r[b+3],r[b+4],r[b+5]),v.set(r[b+6],r[b+7],r[b+8]),A.set(a[C+0],a[C+1]),w.set(a[C+2],a[C+3]),x.set(a[C+4],a[C+5]),y.copy(E).add(T).add(v).divideScalar(3);let U=g(y);_(A,C+0,E,U),_(w,C+2,T,U),_(x,C+4,v,U)}}function _(E,T,v,y){y<0&&E.x===1&&(a[T]=E.x-1),v.x===0&&v.z===0&&(a[T]=y/2/Math.PI+.5)}function g(E){return Math.atan2(E.z,-E.x)}function m(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var Do=new L,Lo=new L,jc=new L,Uo=new Bi,Mr=class extends Lt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let s=Math.pow(10,4),r=Math.cos(Go*t),a=e.getIndex(),o=e.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],u=["a","b","c"],p=new Array(3),f={},h=[];for(let d=0;d<c;d+=3){a?(l[0]=a.getX(d),l[1]=a.getX(d+1),l[2]=a.getX(d+2)):(l[0]=d,l[1]=d+1,l[2]=d+2);let{a:_,b:g,c:m}=Uo;if(_.fromBufferAttribute(o,l[0]),g.fromBufferAttribute(o,l[1]),m.fromBufferAttribute(o,l[2]),Uo.getNormal(jc),p[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,p[1]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,p[2]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,!(p[0]===p[1]||p[1]===p[2]||p[2]===p[0]))for(let E=0;E<3;E++){let T=(E+1)%3,v=p[E],y=p[T],A=Uo[u[E]],w=Uo[u[T]],x=`${v}_${y}`,b=`${y}_${v}`;b in f&&f[b]?(jc.dot(f[b].normal)<=r&&(h.push(A.x,A.y,A.z),h.push(w.x,w.y,w.z)),f[b]=null):x in f||(f[x]={index0:l[E],index1:l[T],normal:jc.clone()})}}for(let d in f)if(f[d]){let{index0:_,index1:g}=f[d];Do.fromBufferAttribute(o,_),Lo.fromBufferAttribute(o,g),h.push(Do.x,Do.y,Do.z),h.push(Lo.x,Lo.y,Lo.z)}this.setAttribute("position",new Dt(h,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},ri=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){yt("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let u=n[s],f=n[s+1]-u,h=(a-u)/f;return(s+h)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new Ie:new L);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new L,s=[],r=[],a=[],o=new L,c=new mt;for(let h=0;h<=e;h++){let d=h/e;s[h]=this.getTangentAt(d,new L)}r[0]=new L,a[0]=new L;let l=Number.MAX_VALUE,u=Math.abs(s[0].x),p=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),p<=l&&(l=p,n.set(0,1,0)),f<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let h=1;h<=e;h++){if(r[h]=r[h-1].clone(),a[h]=a[h-1].clone(),o.crossVectors(s[h-1],s[h]),o.length()>Number.EPSILON){o.normalize();let d=Math.acos(Gt(s[h-1].dot(s[h]),-1,1));r[h].applyMatrix4(c.makeRotationAxis(o,d))}a[h].crossVectors(s[h],r[h])}if(t===!0){let h=Math.acos(Gt(r[0].dot(r[e]),-1,1));h/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(h=-h);for(let d=1;d<=e;d++)r[d].applyMatrix4(c.makeRotationAxis(s[d],h*d)),a[d].crossVectors(s[d],r[d])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Sr=class extends ri{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new Ie){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),p=Math.sin(this.aRotation),f=c-this.aX,h=l-this.aY;c=f*u-h*p+this.aX,l=f*p+h*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},rl=class extends Sr{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Nu(){let i=0,e=0,t=0,n=0;function s(r,a,o,c){i=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,u,p){let f=(a-r)/l-(o-r)/(l+u)+(o-a)/u,h=(o-a)/u-(c-a)/(u+p)+(c-o)/p;f*=u,h*=u,s(a,o,f,h)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var Qh=new L,jh=new L,eu=new Nu,tu=new Nu,nu=new Nu,Qn=class extends ri{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new L){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,u;this.closed||o>0?l=s[(o-1)%r]:(jh.subVectors(s[0],s[1]).add(s[0]),l=jh);let p=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(Qh.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Qh),this.curveType==="centripetal"||this.curveType==="chordal"){let h=this.curveType==="chordal"?.5:.25,d=Math.pow(l.distanceToSquared(p),h),_=Math.pow(p.distanceToSquared(f),h),g=Math.pow(f.distanceToSquared(u),h);_<1e-4&&(_=1),d<1e-4&&(d=_),g<1e-4&&(g=_),eu.initNonuniformCatmullRom(l.x,p.x,f.x,u.x,d,_,g),tu.initNonuniformCatmullRom(l.y,p.y,f.y,u.y,d,_,g),nu.initNonuniformCatmullRom(l.z,p.z,f.z,u.z,d,_,g)}else this.curveType==="catmullrom"&&(eu.initCatmullRom(l.x,p.x,f.x,u.x,this.tension),tu.initCatmullRom(l.y,p.y,f.y,u.y,this.tension),nu.initCatmullRom(l.z,p.z,f.z,u.z,this.tension));return n.set(eu.calc(c),tu.calc(c),nu.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new L().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function ed(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,c=i*o;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*o+r*i+t}function Up(i,e){let t=1-i;return t*t*e}function Np(i,e){return 2*(1-i)*i*e}function Fp(i,e){return i*i*e}function Qr(i,e,t,n){return Up(i,e)+Np(i,t)+Fp(i,n)}function Op(i,e){let t=1-i;return t*t*t*e}function Bp(i,e){let t=1-i;return 3*t*t*i*e}function Hp(i,e){return 3*(1-i)*i*i*e}function zp(i,e){return i*i*i*e}function jr(i,e,t,n,s){return Op(i,e)+Bp(i,t)+Hp(i,n)+zp(i,s)}var fa=class extends ri{constructor(e=new Ie,t=new Ie,n=new Ie,s=new Ie){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Ie){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(jr(e,s.x,r.x,a.x,o.x),jr(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},al=class extends ri{constructor(e=new L,t=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new L){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(jr(e,s.x,r.x,a.x,o.x),jr(e,s.y,r.y,a.y,o.y),jr(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},pa=class extends ri{constructor(e=new Ie,t=new Ie){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ie){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ie){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ms=class extends ri{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ma=class extends ri{constructor(e=new Ie,t=new Ie,n=new Ie){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ie){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Qr(e,s.x,r.x,a.x),Qr(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ga=class extends ri{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Qr(e,s.x,r.x,a.x),Qr(e,s.y,r.y,a.y),Qr(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},xa=class extends ri{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ie){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],u=s[a>s.length-2?s.length-1:a+1],p=s[a>s.length-3?s.length-1:a+2];return n.set(ed(o,c.x,l.x,u.x,p.x),ed(o,c.y,l.y,u.y,p.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Ie().fromArray(s))}return this}},ol=Object.freeze({__proto__:null,ArcCurve:rl,CatmullRomCurve3:Qn,CubicBezierCurve:fa,CubicBezierCurve3:al,EllipseCurve:Sr,LineCurve:pa,LineCurve3:ms,QuadraticBezierCurve:ma,QuadraticBezierCurve3:ga,SplineCurve:xa}),Er=class extends ri{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ol[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){let u=c[l];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new ol[s.type]().fromJSON(s))}return this}},Fs=class extends Er{constructor(e){super(),this.type="Path",this.currentPoint=new Ie,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new pa(this.currentPoint.clone(),new Ie(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new ma(this.currentPoint.clone(),new Ie(e,t),new Ie(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new fa(this.currentPoint.clone(),new Ie(e,t),new Ie(n,s),new Ie(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new xa(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,c){let l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,n,s,r,a,o,c),this}absellipse(e,t,n,s,r,a,o,c){let l=new Sr(e,t,n,s,r,a,o,c);if(this.curves.length>0){let p=l.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(l);let u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Li=class extends Fs{constructor(e){super(e),this.uuid=is(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Fs().fromJSON(s))}return this}};function Gp(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Yd(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l;if(n&&(r=qp(i,e,r,t)),i.length>80*t){o=i[0],c=i[1];let u=o,p=c;for(let f=t;f<s;f+=t){let h=i[f],d=i[f+1];h<o&&(o=h),d<c&&(c=d),h>u&&(u=h),d>p&&(p=d)}l=Math.max(u-o,p-c),l=l!==0?32767/l:0}return va(r,a,t,o,c,l,0),a}function Yd(i,e,t,n,s){let r;if(s===i0(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=td(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=td(a/n|0,i[a],i[a+1],r);return r&&br(r,r.next)&&(ya(r),r=r.next),r}function Os(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(br(t,t.next)||un(t.prev,t,t.next)===0)){if(ya(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function va(i,e,t,n,s,r,a){if(!i)return;!a&&r&&Kp(i,n,s,r);let o=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?kp(i,n,s,r):Vp(i)){e.push(c.i,i.i,l.i),ya(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=Wp(Os(i),e),va(i,e,t,n,s,r,2)):a===2&&Xp(i,e,t,n,s,r):va(Os(i),e,t,n,s,r,1);break}}}function Vp(i){let e=i.prev,t=i,n=i.next;if(un(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,c=t.y,l=n.y,u=Math.min(s,r,a),p=Math.min(o,c,l),f=Math.max(s,r,a),h=Math.max(o,c,l),d=n.next;for(;d!==e;){if(d.x>=u&&d.x<=f&&d.y>=p&&d.y<=h&&Kr(s,o,r,c,a,l,d.x,d.y)&&un(d.prev,d,d.next)>=0)return!1;d=d.next}return!0}function kp(i,e,t,n){let s=i.prev,r=i,a=i.next;if(un(s,r,a)>=0)return!1;let o=s.x,c=r.x,l=a.x,u=s.y,p=r.y,f=a.y,h=Math.min(o,c,l),d=Math.min(u,p,f),_=Math.max(o,c,l),g=Math.max(u,p,f),m=uu(h,d,e,t,n),E=uu(_,g,e,t,n),T=i.prevZ,v=i.nextZ;for(;T&&T.z>=m&&v&&v.z<=E;){if(T.x>=h&&T.x<=_&&T.y>=d&&T.y<=g&&T!==s&&T!==a&&Kr(o,u,c,p,l,f,T.x,T.y)&&un(T.prev,T,T.next)>=0||(T=T.prevZ,v.x>=h&&v.x<=_&&v.y>=d&&v.y<=g&&v!==s&&v!==a&&Kr(o,u,c,p,l,f,v.x,v.y)&&un(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;T&&T.z>=m;){if(T.x>=h&&T.x<=_&&T.y>=d&&T.y<=g&&T!==s&&T!==a&&Kr(o,u,c,p,l,f,T.x,T.y)&&un(T.prev,T,T.next)>=0)return!1;T=T.prevZ}for(;v&&v.z<=E;){if(v.x>=h&&v.x<=_&&v.y>=d&&v.y<=g&&v!==s&&v!==a&&Kr(o,u,c,p,l,f,v.x,v.y)&&un(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Wp(i,e){let t=i;do{let n=t.prev,s=t.next.next;!br(n,s)&&$d(n,t,t.next,s)&&_a(n,s)&&_a(s,n)&&(e.push(n.i,t.i,s.i),ya(t),ya(t.next),t=i=s),t=t.next}while(t!==i);return Os(t)}function Xp(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&e0(a,o)){let c=Jd(a,o);a=Os(a,a.next),c=Os(c,c.next),va(a,e,t,n,s,r,0),va(c,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function qp(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,c=r<a-1?e[r+1]*n:i.length,l=Yd(i,o,c,n,!1);l===l.next&&(l.steiner=!0),s.push(jp(l))}s.sort(Yp);for(let r=0;r<s.length;r++)t=Zp(s[r],t);return t}function Yp(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Zp(i,e){let t=$p(i,e);if(!t)return e;let n=Jd(t,i);return Os(n,n.next),Os(t,t.next)}function $p(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(br(i,t))return t;do{if(br(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let p=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(p<=n&&p>r&&(r=p,a=t.x<t.next.x?t:t.next,p===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,c=a.x,l=a.y,u=1/0;t=a;do{if(n>=t.x&&t.x>=c&&n!==t.x&&Zd(s<l?n:r,s,c,l,s<l?r:n,s,t.x,t.y)){let p=Math.abs(s-t.y)/(n-t.x);_a(t,i)&&(p<u||p===u&&(t.x>a.x||t.x===a.x&&Jp(a,t)))&&(a=t,u=p)}t=t.next}while(t!==o);return a}function Jp(i,e){return un(i.prev,i,e.prev)<0&&un(e.next,i,i.next)<0}function Kp(i,e,t,n){let s=i;do s.z===0&&(s.z=uu(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Qp(s)}function Qp(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let l=0;l<t&&(o++,a=a.nextZ,!!a);l++);let c=t;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function uu(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function jp(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Zd(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Kr(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&Zd(i,e,t,n,s,r,a,o)}function e0(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!t0(i,e)&&(_a(i,e)&&_a(e,i)&&n0(i,e)&&(un(i.prev,i,e.prev)||un(i,e.prev,e))||br(i,e)&&un(i.prev,i,i.next)>0&&un(e.prev,e,e.next)>0)}function un(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function br(i,e){return i.x===e.x&&i.y===e.y}function $d(i,e,t,n){let s=Fo(un(i,e,t)),r=Fo(un(i,e,n)),a=Fo(un(t,n,i)),o=Fo(un(t,n,e));return!!(s!==r&&a!==o||s===0&&No(i,t,e)||r===0&&No(i,n,e)||a===0&&No(t,i,n)||o===0&&No(t,e,n))}function No(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Fo(i){return i>0?1:i<0?-1:0}function t0(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&$d(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function _a(i,e){return un(i.prev,i,i.next)<0?un(i,e,i.next)>=0&&un(i,i.prev,e)>=0:un(i,e,i.prev)<0||un(i,i.next,e)<0}function n0(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Jd(i,e){let t=hu(i.i,i.x,i.y),n=hu(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function td(i,e,t,n){let s=hu(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ya(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function hu(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function i0(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var du=class{static triangulate(e,t,n=2){return Gp(e,t,n)}},Is=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];nd(e),id(n,e);let a=e.length;t.forEach(nd);for(let c=0;c<t.length;c++)s.push(a),a+=t[c].length,id(n,t[c]);let o=du.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function nd(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function id(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Xi=class i extends Lt{constructor(e=new Li([new Ie(.5,.5),new Ie(-.5,.5),new Ie(-.5,-.5),new Ie(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,c=e.length;o<c;o++){let l=e[o];a(l)}this.setAttribute("position",new Dt(s,3)),this.setAttribute("uv",new Dt(r,2)),this.computeVertexNormals();function a(o){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,p=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,h=t.bevelThickness!==void 0?t.bevelThickness:.2,d=t.bevelSize!==void 0?t.bevelSize:h-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,E=t.UVGenerator!==void 0?t.UVGenerator:s0,T,v=!1,y,A,w,x;if(m){T=m.getSpacedPoints(u),v=!0,f=!1;let ee=m.isCatmullRomCurve3?m.closed:!1;y=m.computeFrenetFrames(u,ee),A=new L,w=new L,x=new L}f||(g=0,h=0,d=0,_=0);let b=o.extractPoints(l),C=b.shape,U=b.holes;if(!Is.isClockWise(C)){C=C.reverse();for(let ee=0,ie=U.length;ee<ie;ee++){let Z=U[ee];Is.isClockWise(Z)&&(U[ee]=Z.reverse())}}function D(ee){let Z=10000000000000001e-36,ne=ee[0];for(let le=1;le<=ee.length;le++){let Ae=le%ee.length,Te=ee[Ae],ke=Te.x-ne.x,Ve=Te.y-ne.y,V=ke*ke+Ve*Ve,vt=Math.max(Math.abs(Te.x),Math.abs(Te.y),Math.abs(ne.x),Math.abs(ne.y)),rt=Z*vt*vt;if(V<=rt){ee.splice(Ae,1),le--;continue}ne=Te}}D(C),U.forEach(D);let P=U.length,F=C;for(let ee=0;ee<P;ee++){let ie=U[ee];C=C.concat(ie)}function k(ee,ie,Z){return ie||St("ExtrudeGeometry: vec does not exist"),ee.clone().addScaledVector(ie,Z)}let H=C.length;function z(ee,ie,Z){let ne,le,Ae,Te=ee.x-ie.x,ke=ee.y-ie.y,Ve=Z.x-ee.x,V=Z.y-ee.y,vt=Te*Te+ke*ke,rt=Te*V-ke*Ve;if(Math.abs(rt)>Number.EPSILON){let N=Math.sqrt(vt),M=Math.sqrt(Ve*Ve+V*V),K=ie.x-ke/N,j=ie.y+Te/N,he=Z.x-V/M,He=Z.y+Ve/M,Fe=((he-K)*V-(He-j)*Ve)/(Te*V-ke*Ve);ne=K+Te*Fe-ee.x,le=j+ke*Fe-ee.y;let me=ne*ne+le*le;if(me<=2)return new Ie(ne,le);Ae=Math.sqrt(me/2)}else{let N=!1;Te>Number.EPSILON?Ve>Number.EPSILON&&(N=!0):Te<-Number.EPSILON?Ve<-Number.EPSILON&&(N=!0):Math.sign(ke)===Math.sign(V)&&(N=!0),N?(ne=-ke,le=Te,Ae=Math.sqrt(vt)):(ne=Te,le=ke,Ae=Math.sqrt(vt/2))}return new Ie(ne/Ae,le/Ae)}let O=[];for(let ee=0,ie=F.length,Z=ie-1,ne=ee+1;ee<ie;ee++,Z++,ne++)Z===ie&&(Z=0),ne===ie&&(ne=0),O[ee]=z(F[ee],F[Z],F[ne]);let B=[],q,oe=O.concat();for(let ee=0,ie=P;ee<ie;ee++){let Z=U[ee];q=[];for(let ne=0,le=Z.length,Ae=le-1,Te=ne+1;ne<le;ne++,Ae++,Te++)Ae===le&&(Ae=0),Te===le&&(Te=0),q[ne]=z(Z[ne],Z[Ae],Z[Te]);B.push(q),oe=oe.concat(q)}let ge;if(g===0)ge=Is.triangulateShape(F,U);else{let ee=[],ie=[];for(let Z=0;Z<g;Z++){let ne=Z/g,le=h*Math.cos(ne*Math.PI/2),Ae=d*Math.sin(ne*Math.PI/2)+_;for(let Te=0,ke=F.length;Te<ke;Te++){let Ve=k(F[Te],O[Te],Ae);ve(Ve.x,Ve.y,-le),ne===0&&ee.push(Ve)}for(let Te=0,ke=P;Te<ke;Te++){let Ve=U[Te];q=B[Te];let V=[];for(let vt=0,rt=Ve.length;vt<rt;vt++){let N=k(Ve[vt],q[vt],Ae);ve(N.x,N.y,-le),ne===0&&V.push(N)}ne===0&&ie.push(V)}}ge=Is.triangulateShape(ee,ie)}let ye=ge.length,De=d+_;for(let ee=0;ee<H;ee++){let ie=f?k(C[ee],oe[ee],De):C[ee];v?(w.copy(y.normals[0]).multiplyScalar(ie.x),A.copy(y.binormals[0]).multiplyScalar(ie.y),x.copy(T[0]).add(w).add(A),ve(x.x,x.y,x.z)):ve(ie.x,ie.y,0)}for(let ee=1;ee<=u;ee++)for(let ie=0;ie<H;ie++){let Z=f?k(C[ie],oe[ie],De):C[ie];v?(w.copy(y.normals[ee]).multiplyScalar(Z.x),A.copy(y.binormals[ee]).multiplyScalar(Z.y),x.copy(T[ee]).add(w).add(A),ve(x.x,x.y,x.z)):ve(Z.x,Z.y,p/u*ee)}for(let ee=g-1;ee>=0;ee--){let ie=ee/g,Z=h*Math.cos(ie*Math.PI/2),ne=d*Math.sin(ie*Math.PI/2)+_;for(let le=0,Ae=F.length;le<Ae;le++){let Te=k(F[le],O[le],ne);ve(Te.x,Te.y,p+Z)}for(let le=0,Ae=U.length;le<Ae;le++){let Te=U[le];q=B[le];for(let ke=0,Ve=Te.length;ke<Ve;ke++){let V=k(Te[ke],q[ke],ne);v?ve(V.x,V.y+T[u-1].y,T[u-1].x+Z):ve(V.x,V.y,p+Z)}}}Ke(),$();function Ke(){let ee=s.length/3;if(f){let ie=0,Z=H*ie;for(let ne=0;ne<ye;ne++){let le=ge[ne];xe(le[2]+Z,le[1]+Z,le[0]+Z)}ie=u+g*2,Z=H*ie;for(let ne=0;ne<ye;ne++){let le=ge[ne];xe(le[0]+Z,le[1]+Z,le[2]+Z)}}else{for(let ie=0;ie<ye;ie++){let Z=ge[ie];xe(Z[2],Z[1],Z[0])}for(let ie=0;ie<ye;ie++){let Z=ge[ie];xe(Z[0]+H*u,Z[1]+H*u,Z[2]+H*u)}}n.addGroup(ee,s.length/3-ee,0)}function $(){let ee=s.length/3,ie=0;se(F,ie),ie+=F.length;for(let Z=0,ne=U.length;Z<ne;Z++){let le=U[Z];se(le,ie),ie+=le.length}n.addGroup(ee,s.length/3-ee,1)}function se(ee,ie){let Z=ee.length;for(;--Z>=0;){let ne=Z,le=Z-1;le<0&&(le=ee.length-1);for(let Ae=0,Te=u+g*2;Ae<Te;Ae++){let ke=H*Ae,Ve=H*(Ae+1),V=ie+ne+ke,vt=ie+le+ke,rt=ie+le+Ve,N=ie+ne+Ve;we(V,vt,rt,N)}}}function ve(ee,ie,Z){c.push(ee),c.push(ie),c.push(Z)}function xe(ee,ie,Z){X(ee),X(ie),X(Z);let ne=s.length/3,le=E.generateTopUV(n,s,ne-3,ne-2,ne-1);Re(le[0]),Re(le[1]),Re(le[2])}function we(ee,ie,Z,ne){X(ee),X(ie),X(ne),X(ie),X(Z),X(ne);let le=s.length/3,Ae=E.generateSideWallUV(n,s,le-6,le-3,le-2,le-1);Re(Ae[0]),Re(Ae[1]),Re(Ae[3]),Re(Ae[1]),Re(Ae[2]),Re(Ae[3])}function X(ee){s.push(c[ee*3+0]),s.push(c[ee*3+1]),s.push(c[ee*3+2])}function Re(ee){r.push(ee.x),r.push(ee.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return r0(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new ol[s.type]().fromJSON(s)),new i(n,e.options)}},s0={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],c=e[n*3+1],l=e[s*3],u=e[s*3+1];return[new Ie(r,a),new Ie(o,c),new Ie(l,u)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[n*3],u=e[n*3+1],p=e[n*3+2],f=e[s*3],h=e[s*3+1],d=e[s*3+2],_=e[r*3],g=e[r*3+1],m=e[r*3+2];return Math.abs(o-u)<Math.abs(a-l)?[new Ie(a,1-c),new Ie(l,1-p),new Ie(f,1-d),new Ie(_,1-m)]:[new Ie(o,1-c),new Ie(u,1-p),new Ie(h,1-d),new Ie(g,1-m)]}};function r0(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Ma=class i extends sl{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var tn=class i extends Lt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,u=c+1,p=e/o,f=t/c,h=[],d=[],_=[],g=[];for(let m=0;m<u;m++){let E=m*f-a;for(let T=0;T<l;T++){let v=T*p-r;d.push(v,-E,0),_.push(0,0,1),g.push(T/o),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let E=0;E<o;E++){let T=E+l*m,v=E+l*(m+1),y=E+1+l*(m+1),A=E+1+l*m;h.push(T,v,A),h.push(v,y,A)}this.setIndex(h),this.setAttribute("position",new Dt(d,3)),this.setAttribute("normal",new Dt(_,3)),this.setAttribute("uv",new Dt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Gn=class i extends Lt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,u=[],p=new L,f=new L,h=[],d=[],_=[],g=[];for(let m=0;m<=n;m++){let E=[],T=m/n,v=a+T*o,y=e*Math.cos(v),A=Math.sqrt(e*e-y*y),w=0;m===0&&a===0?w=.5/t:m===n&&c===Math.PI&&(w=-.5/t);for(let x=0;x<=t;x++){let b=x/t,C=s+b*r;p.x=-A*Math.cos(C),p.y=y,p.z=A*Math.sin(C),d.push(p.x,p.y,p.z),f.copy(p).normalize(),_.push(f.x,f.y,f.z),g.push(b+w,1-T),E.push(l++)}u.push(E)}for(let m=0;m<n;m++)for(let E=0;E<t;E++){let T=u[m][E+1],v=u[m][E],y=u[m+1][E],A=u[m+1][E+1];(m!==0||a>0)&&h.push(T,v,A),(m!==n-1||c<Math.PI)&&h.push(v,y,A)}this.setIndex(h),this.setAttribute("position",new Dt(d,3)),this.setAttribute("normal",new Dt(_,3)),this.setAttribute("uv",new Dt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var rs=class i extends Lt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let c=[],l=[],u=[],p=[],f=new L,h=new L,d=new L;for(let _=0;_<=n;_++){let g=a+_/n*o;for(let m=0;m<=s;m++){let E=m/s*r;h.x=(e+t*Math.cos(g))*Math.cos(E),h.y=(e+t*Math.cos(g))*Math.sin(E),h.z=t*Math.sin(g),l.push(h.x,h.y,h.z),f.x=e*Math.cos(E),f.y=e*Math.sin(E),d.subVectors(h,f).normalize(),u.push(d.x,d.y,d.z),p.push(m/s),p.push(_/n)}}for(let _=1;_<=n;_++)for(let g=1;g<=s;g++){let m=(s+1)*_+g-1,E=(s+1)*(_-1)+g-1,T=(s+1)*(_-1)+g,v=(s+1)*_+g;c.push(m,E,v),c.push(E,T,v)}this.setIndex(c),this.setAttribute("position",new Dt(l,3)),this.setAttribute("normal",new Dt(u,3)),this.setAttribute("uv",new Dt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var Vn=class i extends Lt{constructor(e=new ga(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new L,c=new L,l=new Ie,u=new L,p=[],f=[],h=[],d=[];_(),this.setIndex(d),this.setAttribute("position",new Dt(p,3)),this.setAttribute("normal",new Dt(f,3)),this.setAttribute("uv",new Dt(h,2));function _(){for(let T=0;T<t;T++)g(T);g(r===!1?t:0),E(),m()}function g(T){u=e.getPointAt(T/t,u);let v=a.normals[T],y=a.binormals[T];for(let A=0;A<=s;A++){let w=A/s*Math.PI*2,x=Math.sin(w),b=-Math.cos(w);c.x=b*v.x+x*y.x,c.y=b*v.y+x*y.y,c.z=b*v.z+x*y.z,c.normalize(),f.push(c.x,c.y,c.z),o.x=u.x+n*c.x,o.y=u.y+n*c.y,o.z=u.z+n*c.z,p.push(o.x,o.y,o.z)}}function m(){for(let T=1;T<=t;T++)for(let v=1;v<=s;v++){let y=(s+1)*(T-1)+(v-1),A=(s+1)*T+(v-1),w=(s+1)*T+v,x=(s+1)*(T-1)+v;d.push(y,A,x),d.push(A,w,x)}}function E(){for(let T=0;T<=t;T++)for(let v=0;v<=s;v++)l.x=T/t,l.y=v/s,h.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new ol[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function Vs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(sd(s))s.isRenderTargetTexture?(yt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(sd(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function kn(i){let e={};for(let t=0;t<i.length;t++){let n=Vs(i[t]);for(let s in n)e[s]=n[s]}return e}function sd(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function a0(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Fu(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:zt.workingColorSpace}var Jn={clone:Vs,merge:kn},o0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,l0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Xt=class extends mi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=o0,this.fragmentShader=l0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vs(e.uniforms),this.uniformsGroups=a0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Ze().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ie().fromArray(s.value);break;case"v3":this.uniforms[n].value=new L().fromArray(s.value);break;case"v4":this.uniforms[n].value=new rn().fromArray(s.value);break;case"m3":this.uniforms[n].value=new At().fromArray(s.value);break;case"m4":this.uniforms[n].value=new mt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Tr=class extends Xt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Vt=class extends mi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xa,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},jn=class extends Vt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ie(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Gt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ze(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ze(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ze(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Sa=class extends mi{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xa,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};var wr=class extends mi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Dd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ll=class extends mi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function lr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function iu(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var gs=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},cl=class extends gs{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:au,endingEnd:au}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case ou:r=e,o=2*t-n;break;case lu:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case ou:a=e,c=2*n-t;break;case lu:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this._offsetPrev,p=this._offsetNext,f=this._weightPrev,h=this._weightNext,d=(n-t)/(s-t),_=d*d,g=_*d,m=-f*g+2*f*_-f*d,E=(1+f)*g+(-1.5-2*f)*_+(-.5+f)*d+1,T=(-1-h)*g+(1.5+h)*_+.5*d,v=h*g-h*_;for(let y=0;y!==o;++y)r[y]=m*a[u+y]+E*a[l+y]+T*a[c+y]+v*a[p+y];return r}},ul=class extends gs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=(n-t)/(s-t),p=1-u;for(let f=0;f!==o;++f)r[f]=a[l+f]*p+a[c+f]*u;return r}},hl=class extends gs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},dl=class extends gs{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this.inTangents,p=this.outTangents;if(!u||!p){let d=(n-t)/(s-t),_=1-d;for(let g=0;g!==o;++g)r[g]=a[l+g]*_+a[c+g]*d;return r}let f=o*2,h=e-1;for(let d=0;d!==o;++d){let _=a[l+d],g=a[c+d],m=h*f+d*2,E=p[m],T=p[m+1],v=e*f+d*2,y=u[v],A=u[v+1],w=u0(n,t,E,y,s);r[d]=Kd(w,_,T,A,g)}return r}};function Kd(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function c0(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function u0(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=Kd(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let c=c0(r,e,t,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var ai=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=lr(t,this.TimeBufferType),this.values=lr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:lr(e.times,Array),values:lr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),iu(e.settings)&&(n.settings={inTangents:lr(e.settings.inTangents,Array),outTangents:lr(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new hl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ul(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new cl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new dl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ea:t=this.InterpolantFactoryMethodDiscrete;break;case Jo:t=this.InterpolantFactoryMethodLinear;break;case Ho:t=this.InterpolantFactoryMethodSmooth;break;case ru:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return yt("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ea;case this.InterpolantFactoryMethodLinear:return Jo;case this.InterpolantFactoryMethodSmooth:return Ho;case this.InterpolantFactoryMethodBezier:return ru}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;iu(this.settings)&&(rd(this.settings.inTangents,e),rd(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(St("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(St("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){St("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){St("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&fp(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){St("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ho,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],u=e[o+1];if(l!==u&&(o!==1||l!==e[0]))if(s)c=!0;else{let p=o*n,f=p-n,h=p+n;for(let d=0;d!==n;++d){let _=t[p+d];if(_!==t[f+d]||_!==t[h+d]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let p=o*n,f=a*n;for(let h=0;h!==n;++h)t[f+h]=t[p+h]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,iu(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function rd(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}ai.prototype.ValueTypeName="";ai.prototype.TimeBufferType=Float32Array;ai.prototype.ValueBufferType=Float32Array;ai.prototype.DefaultInterpolation=Jo;var xs=class extends ai{constructor(e,t,n){super(e,t,n)}};xs.prototype.ValueTypeName="bool";xs.prototype.ValueBufferType=Array;xs.prototype.DefaultInterpolation=ea;xs.prototype.InterpolantFactoryMethodLinear=void 0;xs.prototype.InterpolantFactoryMethodSmooth=void 0;var fl=class extends ai{constructor(e,t,n,s){super(e,t,n,s)}};fl.prototype.ValueTypeName="color";var pl=class extends ai{constructor(e,t,n,s){super(e,t,n,s)}};pl.prototype.ValueTypeName="number";var ml=class extends gs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),l=e*o;for(let u=l+o;l!==u;l+=4)hn.slerpFlat(r,0,a,l-o,a,l,c);return r}},Ea=class extends ai{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new ml(this.times,this.values,this.getValueSize(),e)}};Ea.prototype.ValueTypeName="quaternion";Ea.prototype.InterpolantFactoryMethodSmooth=void 0;var vs=class extends ai{constructor(e,t,n){super(e,t,n)}};vs.prototype.ValueTypeName="string";vs.prototype.ValueBufferType=Array;vs.prototype.DefaultInterpolation=ea;vs.prototype.InterpolantFactoryMethodLinear=void 0;vs.prototype.InterpolantFactoryMethodSmooth=void 0;var gl=class extends ai{constructor(e,t,n,s){super(e,t,n,s)}};gl.prototype.ValueTypeName="vector";var xl=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,p){return l.push(u,p),this},this.removeHandler=function(u){let p=l.indexOf(u);return p!==-1&&l.splice(p,2),this},this.getHandler=function(u){for(let p=0,f=l.length;p<f;p+=2){let h=l[p],d=l[p+1];if(h.global&&(h.lastIndex=0),h.test(u))return d}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Qd=new xl,vl=class{constructor(e){this.manager=e!==void 0?e:Qd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};vl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Bs=class extends dn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},ba=class extends Bs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ze(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},su=new mt,ad=new L,od=new L,Ar=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ie(512,512),this.mapType=An,this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yr,this._frameExtents=new Ie(1,1),this._viewportCount=1,this._viewports=[new rn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;ad.setFromMatrixPosition(e.matrixWorld),t.position.copy(ad),od.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(od),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){su.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(su,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===fr||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(su)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Oo=new L,Bo=new hn,Fi=new L,Ta=class extends dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=Pi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Oo,Bo,Fi),Fi.x===1&&Fi.y===1&&Fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Oo,Bo,Fi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Oo,Bo,Fi),Fi.x===1&&Fi.y===1&&Fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Oo,Bo,Fi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},fs=new L,ld=new Ie,cd=new Ie,Dn=class extends Ta{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ra*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Go*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ra*2*Math.atan(Math.tan(Go*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){fs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(fs.x,fs.y).multiplyScalar(-e/fs.z),fs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(fs.x,fs.y).multiplyScalar(-e/fs.z)}getViewSize(e,t){return this.getViewBounds(e,ld,cd),t.subVectors(cd,ld)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Go*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},fu=class extends Ar{constructor(){super(new Dn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=ra*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},wa=class extends Bs{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.target=new dn,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new fu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},pu=class extends Ar{constructor(){super(new Dn(90,1,.5,500)),this.isPointLightShadow=!0}},ei=class extends Bs{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new pu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},_s=class extends Ta{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},mu=class extends Ar{constructor(){super(new _s(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Rr=class extends Bs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.target=new dn,this.shadow=new mu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var cr=-90,ur=1,_l=class extends dn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Dn(cr,ur,e,t);s.layers=this.layers,this.add(s);let r=new Dn(cr,ur,e,t);r.layers=this.layers,this.add(r);let a=new Dn(cr,ur,e,t);a.layers=this.layers,this.add(a);let o=new Dn(cr,ur,e,t);o.layers=this.layers,this.add(o);let c=new Dn(cr,ur,e,t);c.layers=this.layers,this.add(c);let l=new Dn(cr,ur,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===Pi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===fr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,u]=this.children,p=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),d=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(p,f,h),e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}},yl=class extends Dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Aa=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=h0.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function h0(){this._document.hidden===!1&&this.reset()}var Ou="\\[\\]\\.:\\/",d0=new RegExp("["+Ou+"]","g"),Bu="[^"+Ou+"]",f0="[^"+Ou.replace("\\.","")+"]",p0=/((?:WC+[\/:])*)/.source.replace("WC",Bu),m0=/(WCOD+)?/.source.replace("WCOD",f0),g0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Bu),x0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Bu),v0=new RegExp("^"+p0+m0+g0+x0+"$"),_0=["material","materials","bones","map"],gu=class{constructor(e,t,n){let s=n||ln.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ln=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(d0,"")}static parseTrackName(e){let t=v0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);_0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){yt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){St("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){St("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){St("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){St("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){St("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){St("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){St("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;St("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){St("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){St("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ln.Composite=gu;ln.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ln.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ln.prototype.GetterByBindingType=[ln.prototype._getValue_direct,ln.prototype._getValue_array,ln.prototype._getValue_arrayElement,ln.prototype._getValue_toArray];ln.prototype.SetterByBindingTypeAndVersioning=[[ln.prototype._setValue_direct,ln.prototype._setValue_direct_setNeedsUpdate,ln.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ln.prototype._setValue_array,ln.prototype._setValue_array_setNeedsUpdate,ln.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ln.prototype._setValue_arrayElement,ln.prototype._setValue_arrayElement_setNeedsUpdate,ln.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ln.prototype._setValue_fromArray,ln.prototype._setValue_fromArray_setNeedsUpdate,ln.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var U1=new Float32Array(1);var ud=new mt,Ra=class{constructor(e,t,n=0,s=1/0){this.ray=new Us(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new gr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):St("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ud.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ud),this}intersectObject(e,t=!0,n=[]){return xu(e,this,n,t),n.sort(hd),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)xu(e[s],this,n,t);return n.sort(hd),n}};function hd(i,e){return i.distance-e.distance}function xu(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)xu(r[a],e,t,!0)}}var Wu=class Wu{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Wu.prototype.isMatrix2=!0;var vu=Wu;function Hu(i,e,t,n){let s=y0(n);switch(t){case Pu:return i*e;case Cl:return i*e/s.components*s.byteLength;case Pl:return i*e/s.components*s.byteLength;case Ts:return i*e*2/s.components*s.byteLength;case Il:return i*e*2/s.components*s.byteLength;case Iu:return i*e*3/s.components*s.byteLength;case On:return i*e*4/s.components*s.byteLength;case Dl:return i*e*4/s.components*s.byteLength;case Ha:case za:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ga:case Va:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ul:case Fl:return Math.max(i,16)*Math.max(e,8)/4;case Ll:case Nl:return Math.max(i,8)*Math.max(e,8)/2;case Ol:case Bl:case zl:case Gl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Hl:case ka:case Vl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case kl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Wl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Xl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ql:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Yl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Zl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case $l:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Jl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Kl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ql:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case jl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ec:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case tc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case nc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ic:case sc:case rc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ac:case oc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Wa:case lc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function y0(i){switch(i){case An:case wu:return{byteLength:1,components:1};case Pr:case Au:case fn:return{byteLength:2,components:1};case Al:case Rl:return{byteLength:2,components:4};case Ui:case wl:case _i:return{byteLength:4,components:1};case Ru:case Cu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?yt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Mf(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function T0(i){let e=new WeakMap;function t(o,c){let l=o.array,u=o.usage,p=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,u),o.onUploadCallback();let h;if(l instanceof Float32Array)h=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)h=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?h=i.HALF_FLOAT:h=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)h=i.SHORT;else if(l instanceof Uint32Array)h=i.UNSIGNED_INT;else if(l instanceof Int32Array)h=i.INT;else if(l instanceof Int8Array)h=i.BYTE;else if(l instanceof Uint8Array)h=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)h=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:h,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,c,l){let u=c.array,p=c.updateRanges;if(i.bindBuffer(l,o),p.length===0)i.bufferSubData(l,0,u);else{p.sort((h,d)=>h.start-d.start);let f=0;for(let h=1;h<p.length;h++){let d=p[f],_=p[h];_.start<=d.start+d.count+1?d.count=Math.max(d.count,_.start+_.count-d.start):(++f,p[f]=_)}p.length=f+1;for(let h=0,d=p.length;h<d;h++){let _=p[h];i.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var w0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,A0=`#ifdef USE_ALPHAHASH
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
#endif`,R0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,C0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,P0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,I0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,D0=`#ifdef USE_AOMAP
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
#endif`,L0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,U0=`#ifdef USE_BATCHING
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
#endif`,N0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,F0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,O0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,B0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,H0=`#ifdef USE_IRIDESCENCE
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
#endif`,z0=`#ifdef USE_BUMPMAP
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
#endif`,G0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,V0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,k0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,W0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,X0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,q0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Y0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Z0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,$0=`#define PI 3.141592653589793
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
} // validated`,J0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,K0=`vec3 transformedNormal = objectNormal;
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
#endif`,Q0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,j0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,em=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nm="gl_FragColor = linearToOutputTexel( gl_FragColor );",im=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sm=`#ifdef USE_ENVMAP
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
#endif`,rm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,am=`#ifdef USE_ENVMAP
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
#endif`,om=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lm=`#ifdef USE_ENVMAP
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
#endif`,cm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,um=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fm=`#ifdef USE_GRADIENTMAP
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
}`,pm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,vm=`#ifdef USE_ENVMAP
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
#endif`,_m=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ym=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Em=`PhysicalMaterial material;
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
#endif`,bm=`uniform sampler2D dfgLUT;
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
}`,Tm=`
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
#endif`,wm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Am=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Rm=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Cm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Pm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Im=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Lm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Um=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Nm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Fm=`#if defined( USE_POINTS_UV )
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
#endif`,Om=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vm=`#ifdef USE_MORPHTARGETS
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
#endif`,km=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Xm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,qm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ym=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,$m=`#ifdef USE_NORMALMAP
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
#endif`,Jm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Km=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,eg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ng=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ig=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ag=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,og=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ug=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,hg=`float getShadowMask() {
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
}`,dg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fg=`#ifdef USE_SKINNING
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
#endif`,pg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mg=`#ifdef USE_SKINNING
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
#endif`,gg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_g=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,yg=`#ifdef USE_TRANSMISSION
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
#endif`,Mg=`#ifdef USE_TRANSMISSION
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
#endif`,Sg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Eg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,wg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ag=`uniform sampler2D t2D;
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
}`,Rg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Pg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ig=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dg=`#include <common>
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
}`,Lg=`#if DEPTH_PACKING == 3200
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
}`,Ug=`#define DISTANCE
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
}`,Ng=`#define DISTANCE
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
}`,Fg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Og=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bg=`uniform float scale;
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
}`,Hg=`uniform vec3 diffuse;
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
}`,zg=`#include <common>
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
}`,Gg=`uniform vec3 diffuse;
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
}`,Vg=`#define LAMBERT
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
}`,kg=`#define LAMBERT
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
}`,Wg=`#define MATCAP
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
}`,Xg=`#define MATCAP
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
}`,qg=`#define NORMAL
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
}`,Yg=`#define NORMAL
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
}`,Zg=`#define PHONG
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
}`,$g=`#define PHONG
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
}`,Jg=`#define STANDARD
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
}`,Kg=`#define STANDARD
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
}`,Qg=`#define TOON
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
}`,jg=`#define TOON
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
}`,ex=`uniform float size;
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
}`,tx=`uniform vec3 diffuse;
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
}`,nx=`#include <common>
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
}`,ix=`uniform vec3 color;
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
}`,sx=`uniform float rotation;
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
}`,rx=`uniform vec3 diffuse;
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
}`,Ut={alphahash_fragment:w0,alphahash_pars_fragment:A0,alphamap_fragment:R0,alphamap_pars_fragment:C0,alphatest_fragment:P0,alphatest_pars_fragment:I0,aomap_fragment:D0,aomap_pars_fragment:L0,batching_pars_vertex:U0,batching_vertex:N0,begin_vertex:F0,beginnormal_vertex:O0,bsdfs:B0,iridescence_fragment:H0,bumpmap_pars_fragment:z0,clipping_planes_fragment:G0,clipping_planes_pars_fragment:V0,clipping_planes_pars_vertex:k0,clipping_planes_vertex:W0,color_fragment:X0,color_pars_fragment:q0,color_pars_vertex:Y0,color_vertex:Z0,common:$0,cube_uv_reflection_fragment:J0,defaultnormal_vertex:K0,displacementmap_pars_vertex:Q0,displacementmap_vertex:j0,emissivemap_fragment:em,emissivemap_pars_fragment:tm,colorspace_fragment:nm,colorspace_pars_fragment:im,envmap_fragment:sm,envmap_common_pars_fragment:rm,envmap_pars_fragment:am,envmap_pars_vertex:om,envmap_physical_pars_fragment:vm,envmap_vertex:lm,fog_vertex:cm,fog_pars_vertex:um,fog_fragment:hm,fog_pars_fragment:dm,gradientmap_pars_fragment:fm,lightmap_pars_fragment:pm,lights_lambert_fragment:mm,lights_lambert_pars_fragment:gm,lights_pars_begin:xm,lights_toon_fragment:_m,lights_toon_pars_fragment:ym,lights_phong_fragment:Mm,lights_phong_pars_fragment:Sm,lights_physical_fragment:Em,lights_physical_pars_fragment:bm,lights_fragment_begin:Tm,lights_fragment_maps:wm,lights_fragment_end:Am,lightprobes_pars_fragment:Rm,logdepthbuf_fragment:Cm,logdepthbuf_pars_fragment:Pm,logdepthbuf_pars_vertex:Im,logdepthbuf_vertex:Dm,map_fragment:Lm,map_pars_fragment:Um,map_particle_fragment:Nm,map_particle_pars_fragment:Fm,metalnessmap_fragment:Om,metalnessmap_pars_fragment:Bm,morphinstance_vertex:Hm,morphcolor_vertex:zm,morphnormal_vertex:Gm,morphtarget_pars_vertex:Vm,morphtarget_vertex:km,normal_fragment_begin:Wm,normal_fragment_maps:Xm,normal_pars_fragment:qm,normal_pars_vertex:Ym,normal_vertex:Zm,normalmap_pars_fragment:$m,clearcoat_normal_fragment_begin:Jm,clearcoat_normal_fragment_maps:Km,clearcoat_pars_fragment:Qm,iridescence_pars_fragment:jm,opaque_fragment:eg,packing:tg,premultiplied_alpha_fragment:ng,project_vertex:ig,dithering_fragment:sg,dithering_pars_fragment:rg,roughnessmap_fragment:ag,roughnessmap_pars_fragment:og,shadowmap_pars_fragment:lg,shadowmap_pars_vertex:cg,shadowmap_vertex:ug,shadowmask_pars_fragment:hg,skinbase_vertex:dg,skinning_pars_vertex:fg,skinning_vertex:pg,skinnormal_vertex:mg,specularmap_fragment:gg,specularmap_pars_fragment:xg,tonemapping_fragment:vg,tonemapping_pars_fragment:_g,transmission_fragment:yg,transmission_pars_fragment:Mg,uv_pars_fragment:Sg,uv_pars_vertex:Eg,uv_vertex:bg,worldpos_vertex:Tg,background_vert:wg,background_frag:Ag,backgroundCube_vert:Rg,backgroundCube_frag:Cg,cube_vert:Pg,cube_frag:Ig,depth_vert:Dg,depth_frag:Lg,distance_vert:Ug,distance_frag:Ng,equirect_vert:Fg,equirect_frag:Og,linedashed_vert:Bg,linedashed_frag:Hg,meshbasic_vert:zg,meshbasic_frag:Gg,meshlambert_vert:Vg,meshlambert_frag:kg,meshmatcap_vert:Wg,meshmatcap_frag:Xg,meshnormal_vert:qg,meshnormal_frag:Yg,meshphong_vert:Zg,meshphong_frag:$g,meshphysical_vert:Jg,meshphysical_frag:Kg,meshtoon_vert:Qg,meshtoon_frag:jg,points_vert:ex,points_frag:tx,shadow_vert:nx,shadow_frag:ix,sprite_vert:sx,sprite_frag:rx},je={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new At},alphaMap:{value:null},alphaMapTransform:{value:new At},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new At}},envmap:{envMap:{value:null},envMapRotation:{value:new At},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new At}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new At}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new At},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new At},normalScale:{value:new Ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new At},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new At}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new At}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new At}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new At},alphaTest:{value:0},uvTransform:{value:new At}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new Ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new At},alphaMap:{value:null},alphaMapTransform:{value:new At},alphaTest:{value:0}}},$i={basic:{uniforms:kn([je.common,je.specularmap,je.envmap,je.aomap,je.lightmap,je.fog]),vertexShader:Ut.meshbasic_vert,fragmentShader:Ut.meshbasic_frag},lambert:{uniforms:kn([je.common,je.specularmap,je.envmap,je.aomap,je.lightmap,je.emissivemap,je.bumpmap,je.normalmap,je.displacementmap,je.fog,je.lights,{emissive:{value:new Ze(0)},envMapIntensity:{value:1}}]),vertexShader:Ut.meshlambert_vert,fragmentShader:Ut.meshlambert_frag},phong:{uniforms:kn([je.common,je.specularmap,je.envmap,je.aomap,je.lightmap,je.emissivemap,je.bumpmap,je.normalmap,je.displacementmap,je.fog,je.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ut.meshphong_vert,fragmentShader:Ut.meshphong_frag},standard:{uniforms:kn([je.common,je.envmap,je.aomap,je.lightmap,je.emissivemap,je.bumpmap,je.normalmap,je.displacementmap,je.roughnessmap,je.metalnessmap,je.fog,je.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag},toon:{uniforms:kn([je.common,je.aomap,je.lightmap,je.emissivemap,je.bumpmap,je.normalmap,je.displacementmap,je.gradientmap,je.fog,je.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Ut.meshtoon_vert,fragmentShader:Ut.meshtoon_frag},matcap:{uniforms:kn([je.common,je.bumpmap,je.normalmap,je.displacementmap,je.fog,{matcap:{value:null}}]),vertexShader:Ut.meshmatcap_vert,fragmentShader:Ut.meshmatcap_frag},points:{uniforms:kn([je.points,je.fog]),vertexShader:Ut.points_vert,fragmentShader:Ut.points_frag},dashed:{uniforms:kn([je.common,je.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ut.linedashed_vert,fragmentShader:Ut.linedashed_frag},depth:{uniforms:kn([je.common,je.displacementmap]),vertexShader:Ut.depth_vert,fragmentShader:Ut.depth_frag},normal:{uniforms:kn([je.common,je.bumpmap,je.normalmap,je.displacementmap,{opacity:{value:1}}]),vertexShader:Ut.meshnormal_vert,fragmentShader:Ut.meshnormal_frag},sprite:{uniforms:kn([je.sprite,je.fog]),vertexShader:Ut.sprite_vert,fragmentShader:Ut.sprite_frag},background:{uniforms:{uvTransform:{value:new At},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ut.background_vert,fragmentShader:Ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new At}},vertexShader:Ut.backgroundCube_vert,fragmentShader:Ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ut.cube_vert,fragmentShader:Ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ut.equirect_vert,fragmentShader:Ut.equirect_frag},distance:{uniforms:kn([je.common,je.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ut.distance_vert,fragmentShader:Ut.distance_frag},shadow:{uniforms:kn([je.lights,je.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:Ut.shadow_vert,fragmentShader:Ut.shadow_frag}};$i.physical={uniforms:kn([$i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new At},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new At},clearcoatNormalScale:{value:new Ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new At},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new At},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new At},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new At},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new At},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new At},transmissionSamplerSize:{value:new Ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new At},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new At},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new At},anisotropyVector:{value:new Ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new At}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag};var hc={r:0,b:0,g:0},ax=new mt,Sf=new At;Sf.set(-1,0,0,0,1,0,0,0,1);function ox(i,e,t,n,s,r){let a=new Ze(0),o=s===!0?0:1,c,l,u=null,p=0,f=null;function h(E){let T=E.isScene===!0?E.background:null;if(T&&T.isTexture){let v=E.backgroundBlurriness>0;T=e.get(T,v)}return T}function d(E){let T=!1,v=h(E);v===null?g(a,o):v&&v.isColor&&(g(v,1),T=!0);let y=i.xr.getEnvironmentBlendMode();y==="additive"?t.buffers.color.setClear(0,0,0,1,r):y==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(E,T){let v=h(T);v&&(v.isCubeTexture||v.mapping===Oa)?(l===void 0&&(l=new Pe(new kt(1,1,1),new Xt({name:"BackgroundCubeMaterial",uniforms:Vs($i.backgroundCube.uniforms),vertexShader:$i.backgroundCube.vertexShader,fragmentShader:$i.backgroundCube.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(y,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=v,l.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(ax.makeRotationFromEuler(T.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Sf),l.material.toneMapped=zt.getTransfer(v.colorSpace)!==Zt,(u!==v||p!==v.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=v,p=v.version,f=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Pe(new tn(2,2),new Xt({name:"BackgroundMaterial",uniforms:Vs($i.background.uniforms),vertexShader:$i.background.vertexShader,fragmentShader:$i.background.fragmentShader,side:ys,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=zt.getTransfer(v.colorSpace)!==Zt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||p!==v.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=v,p=v.version,f=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function g(E,T){E.getRGB(hc,Fu(i)),t.buffers.color.setClear(hc.r,hc.g,hc.b,T,r)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,T=1){a.set(E),o=T,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(E){o=E,g(a,o)},render:d,addToRenderList:_,dispose:m}}function lx(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function o(U,S,D,P,F){let k=!1,H=p(U,P,D,S);r!==H&&(r=H,l(r.object)),k=h(U,P,D,F),k&&d(U,P,D,F),F!==null&&e.update(F,i.ELEMENT_ARRAY_BUFFER),(k||a)&&(a=!1,v(U,S,D,P),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function c(){return i.createVertexArray()}function l(U){return i.bindVertexArray(U)}function u(U){return i.deleteVertexArray(U)}function p(U,S,D,P){let F=P.wireframe===!0,k=n[S.id];k===void 0&&(k={},n[S.id]=k);let H=U.isInstancedMesh===!0?U.id:0,z=k[H];z===void 0&&(z={},k[H]=z);let O=z[D.id];O===void 0&&(O={},z[D.id]=O);let B=O[F];return B===void 0&&(B=f(c()),O[F]=B),B}function f(U){let S=[],D=[],P=[];for(let F=0;F<t;F++)S[F]=0,D[F]=0,P[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:D,attributeDivisors:P,object:U,attributes:{},index:null}}function h(U,S,D,P){let F=r.attributes,k=S.attributes,H=0,z=D.getAttributes();for(let O in z)if(z[O].location>=0){let q=F[O],oe=k[O];if(oe===void 0&&(O==="instanceMatrix"&&U.instanceMatrix&&(oe=U.instanceMatrix),O==="instanceColor"&&U.instanceColor&&(oe=U.instanceColor)),q===void 0||q.attribute!==oe||oe&&q.data!==oe.data)return!0;H++}return r.attributesNum!==H||r.index!==P}function d(U,S,D,P){let F={},k=S.attributes,H=0,z=D.getAttributes();for(let O in z)if(z[O].location>=0){let q=k[O];q===void 0&&(O==="instanceMatrix"&&U.instanceMatrix&&(q=U.instanceMatrix),O==="instanceColor"&&U.instanceColor&&(q=U.instanceColor));let oe={};oe.attribute=q,q&&q.data&&(oe.data=q.data),F[O]=oe,H++}r.attributes=F,r.attributesNum=H,r.index=P}function _(){let U=r.newAttributes;for(let S=0,D=U.length;S<D;S++)U[S]=0}function g(U){m(U,0)}function m(U,S){let D=r.newAttributes,P=r.enabledAttributes,F=r.attributeDivisors;D[U]=1,P[U]===0&&(i.enableVertexAttribArray(U),P[U]=1),F[U]!==S&&(i.vertexAttribDivisor(U,S),F[U]=S)}function E(){let U=r.newAttributes,S=r.enabledAttributes;for(let D=0,P=S.length;D<P;D++)S[D]!==U[D]&&(i.disableVertexAttribArray(D),S[D]=0)}function T(U,S,D,P,F,k,H){H===!0?i.vertexAttribIPointer(U,S,D,F,k):i.vertexAttribPointer(U,S,D,P,F,k)}function v(U,S,D,P){_();let F=P.attributes,k=D.getAttributes(),H=S.defaultAttributeValues;for(let z in k){let O=k[z];if(O.location>=0){let B=F[z];if(B===void 0&&(z==="instanceMatrix"&&U.instanceMatrix&&(B=U.instanceMatrix),z==="instanceColor"&&U.instanceColor&&(B=U.instanceColor)),B!==void 0){let q=B.normalized,oe=B.itemSize,ge=e.get(B);if(ge===void 0)continue;let ye=ge.buffer,De=ge.type,Ke=ge.bytesPerElement,$=De===i.INT||De===i.UNSIGNED_INT||B.gpuType===wl;if(B.isInterleavedBufferAttribute){let se=B.data,ve=se.stride,xe=B.offset;if(se.isInstancedInterleavedBuffer){for(let we=0;we<O.locationSize;we++)m(O.location+we,se.meshPerAttribute);U.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let we=0;we<O.locationSize;we++)g(O.location+we);i.bindBuffer(i.ARRAY_BUFFER,ye);for(let we=0;we<O.locationSize;we++)T(O.location+we,oe/O.locationSize,De,q,ve*Ke,(xe+oe/O.locationSize*we)*Ke,$)}else{if(B.isInstancedBufferAttribute){for(let se=0;se<O.locationSize;se++)m(O.location+se,B.meshPerAttribute);U.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let se=0;se<O.locationSize;se++)g(O.location+se);i.bindBuffer(i.ARRAY_BUFFER,ye);for(let se=0;se<O.locationSize;se++)T(O.location+se,oe/O.locationSize,De,q,oe*Ke,oe/O.locationSize*se*Ke,$)}}else if(H!==void 0){let q=H[z];if(q!==void 0)switch(q.length){case 2:i.vertexAttrib2fv(O.location,q);break;case 3:i.vertexAttrib3fv(O.location,q);break;case 4:i.vertexAttrib4fv(O.location,q);break;default:i.vertexAttrib1fv(O.location,q)}}}}E()}function y(){b();for(let U in n){let S=n[U];for(let D in S){let P=S[D];for(let F in P){let k=P[F];for(let H in k)u(k[H].object),delete k[H];delete P[F]}}delete n[U]}}function A(U){if(n[U.id]===void 0)return;let S=n[U.id];for(let D in S){let P=S[D];for(let F in P){let k=P[F];for(let H in k)u(k[H].object),delete k[H];delete P[F]}}delete n[U.id]}function w(U){for(let S in n){let D=n[S];for(let P in D){let F=D[P];if(F[U.id]===void 0)continue;let k=F[U.id];for(let H in k)u(k[H].object),delete k[H];delete F[U.id]}}}function x(U){for(let S in n){let D=n[S],P=U.isInstancedMesh===!0?U.id:0,F=D[P];if(F!==void 0){for(let k in F){let H=F[k];for(let z in H)u(H[z].object),delete H[z];delete F[k]}delete D[P],Object.keys(D).length===0&&delete n[S]}}}function b(){C(),a=!0,r!==s&&(r=s,l(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:b,resetDefaultState:C,dispose:y,releaseStatesOfGeometry:A,releaseStatesOfObject:x,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:g,disableUnusedAttributes:E}}function cx(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,u){u!==0&&(i.drawArraysInstanced(n,c,l,u),t.update(l,n,u))}function o(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,u);let f=0;for(let h=0;h<u;h++)f+=l[h];t.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function ux(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(w){return!(w!==On&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){let x=w===fn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==An&&w!==_i&&!x&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(yt("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let p=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&yt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=i.getParameter(i.MAX_SAMPLES),A=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:p,reversedDepthBuffer:f,maxTextures:h,maxVertexTextures:d,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:E,maxVaryings:T,maxFragmentUniforms:v,maxSamples:y,samples:A}}function hx(i){let e=this,t=null,n=0,s=!1,r=!1,a=new si,o=new At,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,f){let h=p.length!==0||f||n!==0||s;return s=f,n=p.length,h},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,f){t=u(p,f,0)},this.setState=function(p,f,h){let d=p.clippingPlanes,_=p.clipIntersection,g=p.clipShadows,m=i.get(p);if(!s||d===null||d.length===0||r&&!g)r?u(null):l();else{let E=r?0:n,T=E*4,v=m.clippingState||null;c.value=v,v=u(d,f,T,h);for(let y=0;y!==T;++y)v[y]=t[y];m.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(p,f,h,d){let _=p!==null?p.length:0,g=null;if(_!==0){if(g=c.value,d!==!0||g===null){let m=h+_*4,E=f.matrixWorldInverse;o.getNormalMatrix(E),(g===null||g.length<m)&&(g=new Float32Array(m));for(let T=0,v=h;T!==_;++T,v+=4)a.copy(p[T]).applyMatrix4(E,o),a.normal.toArray(g,v),g[v+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}var Dr=4,dx=6,fx=20,px=256,qa=new _s,jd=new Ze,Xu=null,qu=0,Yu=0,Zu=!1,mx=new L,ks=new L,Ur=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=mx}=r;Xu=this._renderer.getRenderTarget(),qu=this._renderer.getActiveCubeFace(),Yu=this._renderer.getActiveMipmapLevel(),Zu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Xu,qu,Yu),this._renderer.xr.enabled=Zu,e.scissorTest=!1,Ir(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Es||e.mapping===Gs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xu=this._renderer.getRenderTarget(),qu=this._renderer.getActiveCubeFace(),Yu=this._renderer.getActiveMipmapLevel(),Zu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:yn,minFilter:yn,generateMipmaps:!1,type:fn,format:On,colorSpace:ta,depthBuffer:!1},s=ef(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ef(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=gx(r)),this._blurMaterial=vx(r,e,t),this._ggxMaterial=xx(r,e,t)}return s}_compileMaterial(e){let t=new Pe(new Lt,e);this._renderer.compile(t,qa)}_sceneToCubeUV(e,t,n,s,r){let c=new Dn(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],p=this._renderer,f=p.autoClear,h=p.toneMapping;p.getClearColor(jd),p.toneMapping=oi,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(s),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Pe(new kt,new en({name:"PMREM.Background",side:Nn,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,g=_.material,m=!1,E=e.background;E?E.isColor&&(g.color.copy(E),e.background=null,m=!0):(g.color.copy(jd),m=!0);for(let T=0;T<6;T++){let v=T%3;v===0?(c.up.set(0,l[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[T],r.y,r.z)):v===1?(c.up.set(0,0,l[T]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[T],r.z)):(c.up.set(0,l[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[T]));let y=this._cubeSize;Ir(s,v*y,T>2?y:0,y,y),p.setRenderTarget(s),m&&p.render(_,c),p.render(e,c)}p.toneMapping=h,p.autoClear=f,e.background=E}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Es||e.mapping===Gs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=nf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tf());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;Ir(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,qa)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,l=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),p=Math.sqrt(l*l-u*u),f=l*1.25,h=p*f,{_lodMax:d}=this,_=this._sizeLods[n],g=3*_*(n>d-Dr?n-d+Dr:0),m=4*(this._cubeSize-_);c.envMap.value=e.texture,c.roughness.value=h,c.mipInt.value=d-t,Ir(r,g,m,3*_,2*_),s.setRenderTarget(r),s.render(o,qa),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=d-n,Ir(e,g,m,3*_,2*_),s.setRenderTarget(e),s.render(o,qa)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[s];c.material=o;let l=o.uniforms;l.envMap.value=e.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;let u=this._sizeLods[s],p=3*u*(s>this._lodMax-Dr?s-this._lodMax+Dr:0),f=4*(this._cubeSize-u);Ir(t,p,f,3*u,2*u),a.setRenderTarget(t),a.render(c,qa)}};function gx(i){let e=[],t=[],n=i,s=i-Dr+1+dx;for(let r=0;r<s;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),c=-o,l=1+o,u=[c,c,l,c,l,l,c,c,l,l,c,l],p=6,f=6,h=3,d=new Float32Array(h*f*p),_=new Float32Array(h*f*p);for(let m=0;m<p;m++){let E=m%3*2/3-1,T=m>2?0:-1,v=[E,T,0,E+2/3,T,0,E+2/3,T+1,0,E,T,0,E+2/3,T+1,0,E,T+1,0];d.set(v,h*f*m);for(let y=0;y<f;y++){let A=u[y*2]*2-1,w=u[y*2+1]*2-1;m===0?ks.set(1,w,A):m===1?ks.set(-A,1,-w):m===2?ks.set(-A,w,1):m===3?ks.set(-1,w,-A):m===4?ks.set(-A,-1,w):ks.set(A,w,-1),ks.toArray(_,(m*f+y)*h)}}let g=new Lt;g.setAttribute("position",new Tt(d,h)),g.setAttribute("outputDirection",new Tt(_,h)),t.push(new Pe(g,null)),n>Dr&&n--}return{lodMeshes:t,sizeLods:e}}function ef(i,e,t){let n=new an(i,e,t);return n.texture.mapping=Oa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ir(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function xx(i,e,t){return new Xt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:px,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:mc(),fragmentShader:`

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
		`,blending:xn,depthTest:!1,depthWrite:!1})}function vx(i,e,t){return new Xt({name:"SphericalGaussianBlur",defines:{SAMPLES:fx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:mc(),fragmentShader:`

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
		`,blending:xn,depthTest:!1,depthWrite:!1})}function tf(){return new Xt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mc(),fragmentShader:`

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
		`,blending:xn,depthTest:!1,depthWrite:!1})}function nf(){return new Xt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xn,depthTest:!1,depthWrite:!1})}function mc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var fc=class extends an{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new ha(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new kt(5,5,5),r=new Xt({name:"CubemapFromEquirect",uniforms:Vs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Nn,blending:xn});r.uniforms.tEquirect.value=t;let a=new Pe(s,r),o=t.minFilter;return t.minFilter===qi&&(t.minFilter=yn),new _l(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};function _x(i){let e=new WeakMap,t=new WeakMap,n=null;function s(f,h=!1){return f==null?null:h?a(f):r(f)}function r(f){if(f&&f.isTexture){let h=f.mapping;if(h===El||h===bl)if(e.has(f)){let d=e.get(f).texture;return o(d,f.mapping)}else{let d=f.image;if(d&&d.height>0){let _=new fc(d.height);return _.fromEquirectangularTexture(i,f),e.set(f,_),f.addEventListener("dispose",l),o(_.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){let h=f.mapping,d=h===El||h===bl,_=h===Es||h===Gs;if(d||_){let g=t.get(f),m=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return n===null&&(n=new Ur(i)),g=d?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),g.texture;if(g!==void 0)return g.texture;{let E=f.image;return d&&E&&E.height>0||_&&E&&c(E)?(n===null&&(n=new Ur(i)),g=d?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),f.addEventListener("dispose",u),g.texture):null}}}return f}function o(f,h){return h===El?f.mapping=Es:h===bl&&(f.mapping=Gs),f}function c(f){let h=0,d=6;for(let _=0;_<d;_++)f[_]!==void 0&&h++;return h===d}function l(f){let h=f.target;h.removeEventListener("dispose",l);let d=e.get(h);d!==void 0&&(e.delete(h),d.dispose())}function u(f){let h=f.target;h.removeEventListener("dispose",u);let d=t.get(h);d!==void 0&&(t.delete(h),d.dispose())}function p(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:p}}function yx(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Ds("WebGLRenderer: "+n+" extension not supported."),s}}}function Mx(i,e,t,n){let s={},r=new WeakMap;function a(p){let f=p.target;f.index!==null&&e.remove(f.index);for(let d in f.attributes)e.remove(f.attributes[d]);f.removeEventListener("dispose",a),delete s[f.id];let h=r.get(f);h&&(e.remove(h),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(p,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function c(p){let f=p.attributes;for(let h in f)e.update(f[h],i.ARRAY_BUFFER)}function l(p){let f=[],h=p.index,d=p.attributes.position,_=0;if(d===void 0)return;if(h!==null){let E=h.array;_=h.version;for(let T=0,v=E.length;T<v;T+=3){let y=E[T+0],A=E[T+1],w=E[T+2];f.push(y,A,A,w,w,y)}}else{let E=d.array;_=d.version;for(let T=0,v=E.length/3-1;T<v;T+=3){let y=T+0,A=T+1,w=T+2;f.push(y,A,A,w,w,y)}}let g=new(d.count>=65535?ca:la)(f,1);g.version=_;let m=r.get(p);m&&e.remove(m),r.set(p,g)}function u(p){let f=r.get(p);if(f){let h=p.index;h!==null&&f.version<h.version&&l(p)}else l(p);return r.get(p)}return{get:o,update:c,getWireframeAttribute:u}}function Sx(i,e,t){let n;function s(p){n=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function c(p,f){i.drawElements(n,f,r,p*a),t.update(f,n,1)}function l(p,f,h){h!==0&&(i.drawElementsInstanced(n,f,r,p*a,h),t.update(f,n,h))}function u(p,f,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,p,0,h);let _=0;for(let g=0;g<h;g++)_+=f[g];t.update(_,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Ex(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:St("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function bx(i,e,t){let n=new WeakMap,s=new rn;function r(a,o,c){let l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=u!==void 0?u.length:0,f=n.get(o);if(f===void 0||f.count!==p){let b=function(){w.dispose(),n.delete(o),o.removeEventListener("dispose",b)};f!==void 0&&f.texture.dispose();let h=o.morphAttributes.position!==void 0,d=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],E=o.morphAttributes.color||[],T=0;h===!0&&(T=1),d===!0&&(T=2),_===!0&&(T=3);let v=o.attributes.position.count*T,y=1;v>e.maxTextureSize&&(y=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let A=new Float32Array(v*y*4*p),w=new aa(A,v,y,p);w.type=_i,w.needsUpdate=!0;let x=T*4;for(let C=0;C<p;C++){let U=g[C],S=m[C],D=E[C],P=v*y*4*C;for(let F=0;F<U.count;F++){let k=F*x;h===!0&&(s.fromBufferAttribute(U,F),A[P+k+0]=s.x,A[P+k+1]=s.y,A[P+k+2]=s.z,A[P+k+3]=0),d===!0&&(s.fromBufferAttribute(S,F),A[P+k+4]=s.x,A[P+k+5]=s.y,A[P+k+6]=s.z,A[P+k+7]=0),_===!0&&(s.fromBufferAttribute(D,F),A[P+k+8]=s.x,A[P+k+9]=s.y,A[P+k+10]=s.z,A[P+k+11]=D.itemSize===4?s.w:1)}}f={count:p,texture:w,size:new Ie(v,y)},n.set(o,f),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let h=0;for(let _=0;_<l.length;_++)h+=l[_];let d=o.morphTargetsRelative?1:1-h;c.getUniforms().setValue(i,"morphTargetBaseInfluence",d),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Tx(i,e,t,n,s){let r=new WeakMap;function a(l){let u=s.render.frame,p=l.geometry,f=e.get(l,p);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){let h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return f}function o(){r=new WeakMap}function c(l){let u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}var wx={[Ia]:"LINEAR_TONE_MAPPING",[Da]:"REINHARD_TONE_MAPPING",[La]:"CINEON_TONE_MAPPING",[Ss]:"ACES_FILMIC_TONE_MAPPING",[Na]:"AGX_TONE_MAPPING",[Fa]:"NEUTRAL_TONE_MAPPING",[Ua]:"CUSTOM_TONE_MAPPING"};function Ax(i,e,t,n,s,r){let a=new an(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=new Lt;l.setAttribute("position",new Dt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Dt([0,2,0,0,2,0],2));let u=new Tr({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new Pe(l,u),f=new _s(-1,1,1,-1,0,1),h=null,d=null,_=!1,g,m=null,E=[],T=!1;this.setSize=function(v,y){a.setSize(v,y),o!==null&&o.setSize(v,y),c!==null&&c.setSize(v,y);for(let A=0;A<E.length;A++){let w=E[A];w.setSize&&w.setSize(v,y)}},this.setEffects=function(v){E=v,T=E.length>0&&E[0].isRenderPass===!0;let y=a.width,A=a.height;E.length>0&&o===null&&(o=new an(y,A,{type:fn,depthBuffer:!1,stencilBuffer:!1}),c=new an(y,A,{type:fn,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<E.length;w++){let x=E[w];x.setSize&&x.setSize(y,A)}},this.begin=function(v,y){if(_||v.toneMapping===oi&&E.length===0)return!1;if(m=y,y!==null){let A=y.width,w=y.height;(a.width!==A||a.height!==w)&&this.setSize(A,w)}return T===!1&&v.setRenderTarget(a),g=v.toneMapping,v.toneMapping=oi,!0},this.hasRenderPass=function(){return T},this.end=function(v,y){v.toneMapping=g,_=!0;let A=a,w=o;for(let x=0;x<E.length;x++){let b=E[x];b.enabled!==!1&&(b.render(v,w,A,y),b.needsSwap!==!1&&(A=w,w=w===o?c:o))}if(h!==v.outputColorSpace||d!==v.toneMapping){h=v.outputColorSpace,d=v.toneMapping,u.defines={},zt.getTransfer(h)===Zt&&(u.defines.SRGB_TRANSFER="");let x=wx[d];x&&(u.defines[x]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=A.texture,v.setRenderTarget(m),v.render(p,f),m=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var Ef=new $n,Ku=new xi(1,1),bf=new aa,Tf=new jo,wf=new ha,sf=[],rf=[],af=new Float32Array(16),of=new Float32Array(9),lf=new Float32Array(4);function Nr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=sf[s];if(r===void 0&&(r=new Float32Array(s),sf[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Rn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Cn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function gc(i,e){let t=rf[e];t===void 0&&(t=new Int32Array(e),rf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Rx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Cx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rn(t,e))return;i.uniform2fv(this.addr,e),Cn(t,e)}}function Px(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rn(t,e))return;i.uniform3fv(this.addr,e),Cn(t,e)}}function Ix(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rn(t,e))return;i.uniform4fv(this.addr,e),Cn(t,e)}}function Dx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Rn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Cn(t,e)}else{if(Rn(t,n))return;lf.set(n),i.uniformMatrix2fv(this.addr,!1,lf),Cn(t,n)}}function Lx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Rn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Cn(t,e)}else{if(Rn(t,n))return;of.set(n),i.uniformMatrix3fv(this.addr,!1,of),Cn(t,n)}}function Ux(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Rn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Cn(t,e)}else{if(Rn(t,n))return;af.set(n),i.uniformMatrix4fv(this.addr,!1,af),Cn(t,n)}}function Nx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Fx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rn(t,e))return;i.uniform2iv(this.addr,e),Cn(t,e)}}function Ox(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rn(t,e))return;i.uniform3iv(this.addr,e),Cn(t,e)}}function Bx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rn(t,e))return;i.uniform4iv(this.addr,e),Cn(t,e)}}function Hx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function zx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rn(t,e))return;i.uniform2uiv(this.addr,e),Cn(t,e)}}function Gx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rn(t,e))return;i.uniform3uiv(this.addr,e),Cn(t,e)}}function Vx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rn(t,e))return;i.uniform4uiv(this.addr,e),Cn(t,e)}}function kx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ku.compareFunction=t.isReversedDepthBuffer()?uc:cc,r=Ku):r=Ef,t.setTexture2D(e||r,s)}function Wx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Tf,s)}function Xx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||wf,s)}function qx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||bf,s)}function Yx(i){switch(i){case 5126:return Rx;case 35664:return Cx;case 35665:return Px;case 35666:return Ix;case 35674:return Dx;case 35675:return Lx;case 35676:return Ux;case 5124:case 35670:return Nx;case 35667:case 35671:return Fx;case 35668:case 35672:return Ox;case 35669:case 35673:return Bx;case 5125:return Hx;case 36294:return zx;case 36295:return Gx;case 36296:return Vx;case 35678:case 36198:case 36298:case 36306:case 35682:return kx;case 35679:case 36299:case 36307:return Wx;case 35680:case 36300:case 36308:case 36293:return Xx;case 36289:case 36303:case 36311:case 36292:return qx}}function Zx(i,e){i.uniform1fv(this.addr,e)}function $x(i,e){let t=Nr(e,this.size,2);i.uniform2fv(this.addr,t)}function Jx(i,e){let t=Nr(e,this.size,3);i.uniform3fv(this.addr,t)}function Kx(i,e){let t=Nr(e,this.size,4);i.uniform4fv(this.addr,t)}function Qx(i,e){let t=Nr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function jx(i,e){let t=Nr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function ev(i,e){let t=Nr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function tv(i,e){i.uniform1iv(this.addr,e)}function nv(i,e){i.uniform2iv(this.addr,e)}function iv(i,e){i.uniform3iv(this.addr,e)}function sv(i,e){i.uniform4iv(this.addr,e)}function rv(i,e){i.uniform1uiv(this.addr,e)}function av(i,e){i.uniform2uiv(this.addr,e)}function ov(i,e){i.uniform3uiv(this.addr,e)}function lv(i,e){i.uniform4uiv(this.addr,e)}function cv(i,e,t){let n=this.cache,s=e.length,r=gc(t,s);Rn(n,r)||(i.uniform1iv(this.addr,r),Cn(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Ku:a=Ef;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function uv(i,e,t){let n=this.cache,s=e.length,r=gc(t,s);Rn(n,r)||(i.uniform1iv(this.addr,r),Cn(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Tf,r[a])}function hv(i,e,t){let n=this.cache,s=e.length,r=gc(t,s);Rn(n,r)||(i.uniform1iv(this.addr,r),Cn(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||wf,r[a])}function dv(i,e,t){let n=this.cache,s=e.length,r=gc(t,s);Rn(n,r)||(i.uniform1iv(this.addr,r),Cn(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||bf,r[a])}function fv(i){switch(i){case 5126:return Zx;case 35664:return $x;case 35665:return Jx;case 35666:return Kx;case 35674:return Qx;case 35675:return jx;case 35676:return ev;case 5124:case 35670:return tv;case 35667:case 35671:return nv;case 35668:case 35672:return iv;case 35669:case 35673:return sv;case 5125:return rv;case 36294:return av;case 36295:return ov;case 36296:return lv;case 35678:case 36198:case 36298:case 36306:case 35682:return cv;case 35679:case 36299:case 36307:return uv;case 35680:case 36300:case 36308:case 36293:return hv;case 36289:case 36303:case 36311:case 36292:return dv}}var Qu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Yx(t.type)}},ju=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=fv(t.type)}},eh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},$u=/(\w+)(\])?(\[|\.)?/g;function cf(i,e){i.seq.push(e),i.map[e.id]=e}function pv(i,e,t){let n=i.name,s=n.length;for($u.lastIndex=0;;){let r=$u.exec(n),a=$u.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){cf(t,l===void 0?new Qu(o,i,e):new ju(o,i,e));break}else{let p=t.map[o];p===void 0&&(p=new eh(o),cf(t,p)),t=p}}}var Lr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);pv(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function uf(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var mv=37297,gv=0;function xv(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var hf=new At;function vv(i){zt._getMatrix(hf,zt.workingColorSpace,i);let e=`mat3( ${hf.elements.map(t=>t.toFixed(4))} )`;switch(zt.getTransfer(i)){case na:return[e,"LinearTransferOETF"];case Zt:return[e,"sRGBTransferOETF"];default:return yt("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function df(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+xv(i.getShaderSource(e),o)}else return r}function _v(i,e){let t=vv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var yv={[Ia]:"Linear",[Da]:"Reinhard",[La]:"Cineon",[Ss]:"ACESFilmic",[Na]:"AgX",[Fa]:"Neutral",[Ua]:"Custom"};function Mv(i,e){let t=yv[e];return t===void 0?(yt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var dc=new L;function Sv(){zt.getLuminanceCoefficients(dc);let i=dc.x.toFixed(4),e=dc.y.toFixed(4),t=dc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ev(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Za).join(`
`)}function bv(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Tv(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Za(i){return i!==""}function ff(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function pf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var wv=/^[ \t]*#include +<([\w\d./]+)>/gm;function th(i){return i.replace(wv,Rv)}var Av=new Map;function Rv(i,e){let t=Ut[e];if(t===void 0){let n=Av.get(e);if(n!==void 0)t=Ut[n],yt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return th(t)}var Cv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mf(i){return i.replace(Cv,Pv)}function Pv(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function gf(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var Iv={[Hs]:"SHADOWMAP_TYPE_PCF",[Cr]:"SHADOWMAP_TYPE_VSM"};function Dv(i){return Iv[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Lv={[Es]:"ENVMAP_TYPE_CUBE",[Gs]:"ENVMAP_TYPE_CUBE",[Oa]:"ENVMAP_TYPE_CUBE_UV"};function Uv(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Lv[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Nv={[Gs]:"ENVMAP_MODE_REFRACTION"};function Fv(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Nv[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Ov={[bu]:"ENVMAP_BLENDING_MULTIPLY",[Cd]:"ENVMAP_BLENDING_MIX",[Pd]:"ENVMAP_BLENDING_ADD"};function Bv(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Ov[i.combine]||"ENVMAP_BLENDING_NONE"}function Hv(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function zv(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=Dv(t),l=Uv(t),u=Fv(t),p=Bv(t),f=Hv(t),h=Ev(t),d=bv(r),_=s.createProgram(),g,m,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(Za).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(Za).join(`
`),m.length>0&&(m+=`
`)):(g=[gf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Za).join(`
`),m=[gf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+p:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==oi?"#define TONE_MAPPING":"",t.toneMapping!==oi?Ut.tonemapping_pars_fragment:"",t.toneMapping!==oi?Mv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ut.colorspace_pars_fragment,_v("linearToOutputTexel",t.outputColorSpace),Sv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Za).join(`
`)),a=th(a),a=ff(a,t),a=pf(a,t),o=th(o),o=ff(o,t),o=pf(o,t),a=mf(a),o=mf(o),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,g=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===Uu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Uu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let T=E+g+a,v=E+m+o,y=uf(s,s.VERTEX_SHADER,T),A=uf(s,s.FRAGMENT_SHADER,v);s.attachShader(_,y),s.attachShader(_,A),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function w(U){if(i.debug.checkShaderErrors){let S=s.getProgramInfoLog(_)||"",D=s.getShaderInfoLog(y)||"",P=s.getShaderInfoLog(A)||"",F=S.trim(),k=D.trim(),H=P.trim(),z=!0,O=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,y,A);else{let B=df(s,y,"vertex"),q=df(s,A,"fragment");St("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+F+`
`+B+`
`+q)}else F!==""?yt("WebGLProgram: Program Info Log:",F):(k===""||H==="")&&(O=!1);O&&(U.diagnostics={runnable:z,programLog:F,vertexShader:{log:k,prefix:g},fragmentShader:{log:H,prefix:m}})}s.deleteShader(y),s.deleteShader(A),x=new Lr(s,_),b=Tv(s,_)}let x;this.getUniforms=function(){return x===void 0&&w(this),x};let b;this.getAttributes=function(){return b===void 0&&w(this),b};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(_,mv)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=gv++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=y,this.fragmentShader=A,this}var Gv=0,nh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new ih(e),t.set(e,n)),n}},ih=class{constructor(e){this.id=Gv++,this.code=e,this.usedTimes=0}};function Vv(i){return i===Ts||i===ka||i===Wa}function kv(i,e,t,n,s,r){let a=new gr,o=new nh,c=new Set,l=[],u=new Map,p=n.logarithmicDepthBuffer,f=n.precision,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(x){return c.add(x),x===0?"uv":`uv${x}`}function _(x,b,C,U,S,D){let P=U.fog,F=S.geometry,k=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?U.environment:null,H=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,z=e.get(x.envMap||k,H),O=z&&z.mapping===Oa?z.image.height:null,B=h[x.type];x.precision!==null&&(f=n.getMaxPrecision(x.precision),f!==x.precision&&yt("WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));let q=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,oe=q!==void 0?q.length:0,ge=0;F.morphAttributes.position!==void 0&&(ge=1),F.morphAttributes.normal!==void 0&&(ge=2),F.morphAttributes.color!==void 0&&(ge=3);let ye,De,Ke,$;if(B){let nt=$i[B];ye=nt.vertexShader,De=nt.fragmentShader}else{ye=x.vertexShader,De=x.fragmentShader;let nt=o.getVertexShaderStage(x),lt=o.getFragmentShaderStage(x);o.update(x,nt,lt),Ke=nt.id,$=lt.id}let se=i.getRenderTarget(),ve=i.state.buffers.depth.getReversed(),xe=S.isInstancedMesh===!0,we=S.isBatchedMesh===!0,X=!!x.map,Re=!!x.matcap,ee=!!z,ie=!!x.aoMap,Z=!!x.lightMap,ne=!!x.bumpMap&&x.wireframe===!1,le=!!x.normalMap,Ae=!!x.displacementMap,Te=!!x.emissiveMap,ke=!!x.metalnessMap,Ve=!!x.roughnessMap,V=x.anisotropy>0,vt=x.clearcoat>0,rt=x.dispersion>0,N=x.retroreflectivity>0,M=x.iridescence>0,K=x.sheen>0,j=x.transmission>0,he=V&&!!x.anisotropyMap,He=vt&&!!x.clearcoatMap,Fe=vt&&!!x.clearcoatNormalMap,me=vt&&!!x.clearcoatRoughnessMap,de=M&&!!x.iridescenceMap,Ge=M&&!!x.iridescenceThicknessMap,ot=K&&!!x.sheenColorMap,Xe=K&&!!x.sheenRoughnessMap,We=!!x.specularMap,$e=!!x.specularColorMap,et=!!x.specularIntensityMap,ht=j&&!!x.transmissionMap,Y=j&&!!x.thicknessMap,ze=!!x.gradientMap,be=!!x.alphaMap,Ye=x.alphaTest>0,qe=!!x.alphaHash,W=!!x.extensions,Ce=oi;x.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(Ce=i.toneMapping);let Me={shaderID:B,shaderType:x.type,shaderName:x.name,vertexShader:ye,fragmentShader:De,defines:x.defines,customVertexShaderID:Ke,customFragmentShaderID:$,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,batching:we,batchingColor:we&&S._colorsTexture!==null,instancing:xe,instancingColor:xe&&S.instanceColor!==null,instancingMorph:xe&&S.morphTexture!==null,outputColorSpace:se===null?i.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:zt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:X,matcap:Re,envMap:ee,envMapMode:ee&&z.mapping,envMapCubeUVHeight:O,aoMap:ie,lightMap:Z,bumpMap:ne,normalMap:le,displacementMap:Ae,emissiveMap:Te,normalMapObjectSpace:le&&x.normalMapType===Ld,normalMapTangentSpace:le&&x.normalMapType===Xa,packedNormalMap:le&&x.normalMapType===Xa&&Vv(x.normalMap.format),metalnessMap:ke,roughnessMap:Ve,anisotropy:V,anisotropyMap:he,clearcoat:vt,clearcoatMap:He,clearcoatNormalMap:Fe,clearcoatRoughnessMap:me,dispersion:rt,retroreflection:N,iridescence:M,iridescenceMap:de,iridescenceThicknessMap:Ge,sheen:K,sheenColorMap:ot,sheenRoughnessMap:Xe,specularMap:We,specularColorMap:$e,specularIntensityMap:et,transmission:j,transmissionMap:ht,thicknessMap:Y,gradientMap:ze,opaque:x.transparent===!1&&x.blending===Ms&&x.alphaToCoverage===!1,alphaMap:be,alphaTest:Ye,alphaHash:qe,combine:x.combine,mapUv:X&&d(x.map.channel),aoMapUv:ie&&d(x.aoMap.channel),lightMapUv:Z&&d(x.lightMap.channel),bumpMapUv:ne&&d(x.bumpMap.channel),normalMapUv:le&&d(x.normalMap.channel),displacementMapUv:Ae&&d(x.displacementMap.channel),emissiveMapUv:Te&&d(x.emissiveMap.channel),metalnessMapUv:ke&&d(x.metalnessMap.channel),roughnessMapUv:Ve&&d(x.roughnessMap.channel),anisotropyMapUv:he&&d(x.anisotropyMap.channel),clearcoatMapUv:He&&d(x.clearcoatMap.channel),clearcoatNormalMapUv:Fe&&d(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&d(x.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&d(x.iridescenceMap.channel),iridescenceThicknessMapUv:Ge&&d(x.iridescenceThicknessMap.channel),sheenColorMapUv:ot&&d(x.sheenColorMap.channel),sheenRoughnessMapUv:Xe&&d(x.sheenRoughnessMap.channel),specularMapUv:We&&d(x.specularMap.channel),specularColorMapUv:$e&&d(x.specularColorMap.channel),specularIntensityMapUv:et&&d(x.specularIntensityMap.channel),transmissionMapUv:ht&&d(x.transmissionMap.channel),thicknessMapUv:Y&&d(x.thicknessMap.channel),alphaMapUv:be&&d(x.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(le||V),vertexNormals:!!F.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:S.isPoints===!0&&!!F.attributes.uv&&(X||be),fog:!!P,useFog:x.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||F.attributes.normal===void 0&&le===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:ve,skinning:S.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:ge,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:D.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ce,decodeVideoTexture:X&&x.map.isVideoTexture===!0&&zt.getTransfer(x.map.colorSpace)===Zt,decodeVideoTextureEmissive:Te&&x.emissiveMap.isVideoTexture===!0&&zt.getTransfer(x.emissiveMap.colorSpace)===Zt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===wn,flipSided:x.side===Nn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:W&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(W&&x.extensions.multiDraw===!0||we)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Me.vertexUv1s=c.has(1),Me.vertexUv2s=c.has(2),Me.vertexUv3s=c.has(3),c.clear(),Me}function g(x){let b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(let C in x.defines)b.push(C),b.push(x.defines[C]);return x.isRawShaderMaterial===!1&&(m(b,x),E(b,x),b.push(i.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function m(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapCubeUVHeight),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.morphAttributeCount),x.push(b.numSunLights),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numSunLightShadows),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function E(x,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function T(x){let b=h[x.type],C;if(b){let U=$i[b];C=Jn.clone(U.uniforms)}else C=x.uniforms;return C}function v(x,b){let C=u.get(b);return C!==void 0?++C.usedTimes:(C=new zv(i,b,x,s),l.push(C),u.set(b,C)),C}function y(x){if(--x.usedTimes===0){let b=l.indexOf(x);l[b]=l[l.length-1],l.pop(),u.delete(x.cacheKey),x.destroy()}}function A(x){o.remove(x)}function w(){o.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:T,acquireProgram:v,releaseProgram:y,releaseShaderCache:A,programs:l,dispose:w}}function Wv(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Xv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function xf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function vf(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(f){let h=0;return f.isInstancedMesh&&(h+=2),f.isSkinnedMesh&&(h+=1),h}function o(f,h,d,_,g,m){let E=i[e];return E===void 0?(E={id:f.id,object:f,geometry:h,material:d,materialVariant:a(f),groupOrder:_,renderOrder:f.renderOrder,z:g,group:m},i[e]=E):(E.id=f.id,E.object=f,E.geometry=h,E.material=d,E.materialVariant=a(f),E.groupOrder=_,E.renderOrder=f.renderOrder,E.z=g,E.group=m),e++,E}function c(f,h,d,_,g,m,E){E.reversedDepth===!0&&(g=-g);let T=o(f,h,d,_,g,m);d.transmission>0?n.push(T):d.transparent===!0?s.push(T):t.push(T)}function l(f,h,d,_,g,m){let E=o(f,h,d,_,g,m);d.transmission>0?n.unshift(E):d.transparent===!0?s.unshift(E):t.unshift(E)}function u(f,h){t.length>1&&t.sort(f||Xv),n.length>1&&n.sort(h||xf),s.length>1&&s.sort(h||xf)}function p(){for(let f=e,h=i.length;f<h;f++){let d=i[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:p,sort:u}}function qv(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new vf,i.set(n,[a])):s>=r.length?(a=new vf,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Yv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new L,color:new Ze};break;case"SpotLight":t={position:new L,direction:new L,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":t={color:new Ze,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function Zv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var $v=0;function Jv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Kv(i){let e=new Yv,t=Zv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);let s=new L,r=new mt,a=new mt;function o(l){let u=0,p=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let h=0,d=0,_=0,g=0,m=0,E=0,T=0,v=0,y=0,A=0,w=0,x=0,b=0,C=0;l.sort(Jv);for(let S=0,D=l.length;S<D;S++){let P=l[S],F=P.color,k=P.intensity,H=P.distance,z=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Ts?z=P.shadow.map.texture:z=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=F.r*k,p+=F.g*k,f+=F.b*k;else if(P.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(P.sh.coefficients[O],k);C++}else if(P.isSunLight){let O=e.get(P);if(O.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let B=P.shadow,q=t.get(P);q.shadowIntensity=B.intensity,q.shadowBias=B.bias,q.shadowNormalBias=B.normalBias,q.shadowRadius=B.radius,q.shadowMapSize.copy(B.mapSize).multiply(B.getFrameExtents()),n.sunShadow[d]=q,n.sunShadowMap[d]=z;let oe=B.getViewportCount();for(let ge=0;ge<oe;ge++)n.sunShadowMatrix[_+ge]=B.getMatrix(ge),n.sunShadowCascade[_+ge]=B._cascadeData[ge];_+=oe,d++}n.sun[h]=O,h++}else if(P.isDirectionalLight){let O=e.get(P);if(O.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let B=P.shadow,q=t.get(P);q.shadowIntensity=B.intensity,q.shadowBias=B.bias,q.shadowNormalBias=B.normalBias,q.shadowRadius=B.radius,q.shadowMapSize=B.mapSize,n.directionalShadow[g]=q,n.directionalShadowMap[g]=z,n.directionalShadowMatrix[g]=P.shadow.matrix,y++}n.directional[g]=O,g++}else if(P.isSpotLight){let O=e.get(P);O.position.setFromMatrixPosition(P.matrixWorld),O.color.copy(F).multiplyScalar(k),O.distance=H,O.coneCos=Math.cos(P.angle),O.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),O.decay=P.decay,n.spot[E]=O;let B=P.shadow;if(P.map&&(n.spotLightMap[x]=P.map,x++,B.updateMatrices(P),P.castShadow&&b++),n.spotLightMatrix[E]=B.matrix,P.castShadow){let q=t.get(P);q.shadowIntensity=B.intensity,q.shadowBias=B.bias,q.shadowNormalBias=B.normalBias,q.shadowRadius=B.radius,q.shadowMapSize=B.mapSize,n.spotShadow[E]=q,n.spotShadowMap[E]=z,w++}E++}else if(P.isRectAreaLight){let O=e.get(P);O.color.copy(F).multiplyScalar(k),O.halfWidth.set(P.width*.5,0,0),O.halfHeight.set(0,P.height*.5,0),n.rectArea[T]=O,T++}else if(P.isPointLight){let O=e.get(P);if(O.color.copy(P.color).multiplyScalar(P.intensity),O.distance=P.distance,O.decay=P.decay,P.castShadow){let B=P.shadow,q=t.get(P);q.shadowIntensity=B.intensity,q.shadowBias=B.bias,q.shadowNormalBias=B.normalBias,q.shadowRadius=B.radius,q.shadowMapSize=B.mapSize,q.shadowCameraNear=B.camera.near,q.shadowCameraFar=B.camera.far,n.pointShadow[m]=q,n.pointShadowMap[m]=z,n.pointShadowMatrix[m]=P.shadow.matrix,A++}n.point[m]=O,m++}else if(P.isHemisphereLight){let O=e.get(P);O.skyColor.copy(P.color).multiplyScalar(k),O.groundColor.copy(P.groundColor).multiplyScalar(k),n.hemi[v]=O,v++}}T>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=je.LTC_FLOAT_1,n.rectAreaLTC2=je.LTC_FLOAT_2):(n.rectAreaLTC1=je.LTC_HALF_1,n.rectAreaLTC2=je.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=p,n.ambient[2]=f;let U=n.hash;(U.sunLength!==h||U.directionalLength!==g||U.pointLength!==m||U.spotLength!==E||U.rectAreaLength!==T||U.hemiLength!==v||U.numSunShadows!==d||U.numDirectionalShadows!==y||U.numPointShadows!==A||U.numSpotShadows!==w||U.numSpotMaps!==x||U.numLightProbes!==C)&&(n.sun.length=h,n.directional.length=g,n.spot.length=E,n.rectArea.length=T,n.point.length=m,n.hemi.length=v,n.sunShadow.length=d,n.sunShadowMap.length=d,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.directionalShadowMatrix.length=y,n.pointShadow.length=A,n.pointShadowMap.length=A,n.pointShadowMatrix.length=A,n.spotShadow.length=w,n.spotShadowMap.length=w,n.spotLightMatrix.length=w+x-b,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=C,U.sunLength=h,U.directionalLength=g,U.pointLength=m,U.spotLength=E,U.rectAreaLength=T,U.hemiLength=v,U.numSunShadows=d,U.numDirectionalShadows=y,U.numPointShadows=A,U.numSpotShadows=w,U.numSpotMaps=x,U.numLightProbes=C,n.version=$v++)}function c(l,u){let p=0,f=0,h=0,d=0,_=0,g=0,m=u.matrixWorldInverse;for(let E=0,T=l.length;E<T;E++){let v=l[E];if(v.isSunLight){let y=n.sun[p];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(m),p++}else if(v.isDirectionalLight){let y=n.directional[f];y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),f++}else if(v.isSpotLight){let y=n.spot[d];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),d++}else if(v.isRectAreaLight){let y=n.rectArea[_];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),a.identity(),r.copy(v.matrixWorld),r.premultiply(m),a.extractRotation(r),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),_++}else if(v.isPointLight){let y=n.point[h];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),h++}else if(v.isHemisphereLight){let y=n.hemi[g];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(m),g++}}}return{setup:o,setupView:c,state:n}}function _f(i){let e=new Kv(i),t=[],n=[],s=[];function r(f){p.camera=f,t.length=0,n.length=0,s.length=0}function a(f){t.push(f)}function o(f){n.push(f)}function c(f){s.push(f)}function l(){e.setup(t)}function u(f){e.setupView(t,f)}let p={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:p,setupLights:l,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function Qv(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new _f(i),e.set(s,[o])):r>=a.length?(o=new _f(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var jv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,e1=`uniform sampler2D shadow_pass;
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
}`,t1=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],n1=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],yf=new mt,Ya=new L,Ju=new L;function i1(i,e,t){let n=new yr,s=new Ie,r=new Ie,a=new rn,o=new wr,c=new ll,l={},u=t.maxTextureSize,p={[ys]:Nn,[Nn]:ys,[wn]:wn},f=new Xt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ie},radius:{value:4}},vertexShader:jv,fragmentShader:e1}),h=f.clone();h.defines.HORIZONTAL_PASS=1;let d=new Lt;d.setAttribute("position",new Tt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Pe(d,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hs;let m=this.type;this.render=function(A,w,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;this.type===pd&&(yt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Hs);let b=i.getRenderTarget(),C=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),S=i.state;S.setBlending(xn),S.buffers.depth.getReversed()===!0?S.buffers.color.setClear(0,0,0,0):S.buffers.color.setClear(1,1,1,1),S.buffers.depth.setTest(!0),S.setScissorTest(!1);let D=m!==this.type;D&&w.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(F=>F.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,F=A.length;P<F;P++){let k=A[P],H=k.shadow;if(H===void 0){yt("WebGLShadowMap:",k,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let z=H.getFrameExtents();s.multiply(z),r.copy(H.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/z.x),s.x=r.x*z.x,H.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/z.y),s.y=r.y*z.y,H.mapSize.y=r.y));let O=i.state.buffers.depth.getReversed();if(H.camera._reversedDepth=O,H.map===null||D===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Cr){if(k.isPointLight){yt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new an(s.x,s.y,{format:Ts,type:fn,minFilter:yn,magFilter:yn,generateMipmaps:!1}),H.map.texture.name=k.name+".shadowMap",H.map.depthTexture=new xi(s.x,s.y,_i),H.map.depthTexture.name=k.name+".shadowMapDepth",H.map.depthTexture.format=zi,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=gn,H.map.depthTexture.magFilter=gn}else k.isPointLight?(H.map=new fc(s.x),H.map.depthTexture=new il(s.x,Ui)):(H.map=new an(s.x,s.y),H.map.depthTexture=new xi(s.x,s.y,Ui)),H.map.depthTexture.name=k.name+".shadowMap",H.map.depthTexture.format=zi,this.type===Hs?(H.map.depthTexture.compareFunction=O?uc:cc,H.map.depthTexture.minFilter=yn,H.map.depthTexture.magFilter=yn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=gn,H.map.depthTexture.magFilter=gn);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==s.x||H.map.height!==s.y)&&H.map.setSize(s.x,s.y);let B=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();k.isPointLight!==!0&&H.updateMatrices(k,x);for(let q=0;q<B;q++){let oe=H.getCamera(q);if(k.isPointLight){let ge=H.camera,ye=H.matrix,De=k.distance||ge.far;De!==ge.far&&(ge.far=De,ge.updateProjectionMatrix()),Ya.setFromMatrixPosition(k.matrixWorld),ge.position.copy(Ya),Ju.copy(ge.position),Ju.add(t1[q]),ge.up.copy(n1[q]),ge.lookAt(Ju),ge.updateMatrixWorld(),ye.makeTranslation(-Ya.x,-Ya.y,-Ya.z),yf.multiplyMatrices(ge.projectionMatrix,ge.matrixWorldInverse),H._frustum.setFromProjectionMatrix(yf,ge.coordinateSystem,ge.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)i.setRenderTarget(H.map,q),i.clear();else{q===0&&(i.setRenderTarget(H.map),i.clear());let ge=H.getViewport(q);a.set(r.x*ge.x,r.y*ge.y,r.x*ge.z,r.y*ge.w),S.viewport(a)}n=H.getFrustum(q),v(w,x,oe,k,this.type)}H.isPointLightShadow!==!0&&this.type===Cr&&E(H,x),H.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(b,C,U)};function E(A,w){let x=e.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,h.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),A.mapPass===null?A.mapPass=new an(s.x,s.y,{format:Ts,type:fn}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),f.uniforms.shadow_pass.value=A.map.depthTexture,f.uniforms.resolution.value.set(A.map.width,A.map.height),f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(w,null,x,f,_,null),h.uniforms.shadow_pass.value=A.mapPass.texture,h.uniforms.resolution.value.set(A.map.width,A.map.height),h.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(w,null,x,h,_,null)}function T(A,w,x,b){let C=null,U=x.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(U!==void 0)C=U;else if(C=x.isPointLight===!0?c:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let S=C.uuid,D=w.uuid,P=l[S];P===void 0&&(P={},l[S]=P);let F=P[D];F===void 0&&(F=C.clone(),P[D]=F,w.addEventListener("dispose",y)),C=F}if(C.visible=w.visible,C.wireframe=w.wireframe,b===Cr?C.side=w.shadowSide!==null?w.shadowSide:w.side:C.side=w.shadowSide!==null?w.shadowSide:p[w.side],C.alphaMap=w.alphaMap,C.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,C.map=w.map,C.clipShadows=w.clipShadows,C.clippingPlanes=w.clippingPlanes,C.clipIntersection=w.clipIntersection,C.displacementMap=w.displacementMap,C.displacementScale=w.displacementScale,C.displacementBias=w.displacementBias,C.wireframeLinewidth=w.wireframeLinewidth,C.linewidth=w.linewidth,x.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let S=i.properties.get(C);S.light=x}return C}function v(A,w,x,b,C){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&C===Cr)&&(!A.frustumCulled||A.intersectsFrustum(n))){A.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,A.matrixWorld);let D=e.update(A),P=A.material;if(Array.isArray(P)){let F=D.groups;for(let k=0,H=F.length;k<H;k++){let z=F[k],O=P[z.materialIndex];if(O&&O.visible){let B=T(A,O,b,C);A.onBeforeShadow(i,A,w,x,D,B,z),i.renderBufferDirect(x,null,D,B,A,z),A.onAfterShadow(i,A,w,x,D,B,z)}}}else if(P.visible){let F=T(A,P,b,C);A.onBeforeShadow(i,A,w,x,D,F,null),i.renderBufferDirect(x,null,D,F,A,null),A.onAfterShadow(i,A,w,x,D,F,null)}}let S=A.children;for(let D=0,P=S.length;D<P;D++)v(S[D],w,x,b,C)}function y(A){A.target.removeEventListener("dispose",y);for(let x in l){let b=l[x],C=A.target.uuid;C in b&&(b[C].dispose(),delete b[C])}}}function s1(i,e){function t(){let Y=!1,ze=new rn,be=null,Ye=new rn(0,0,0,0);return{setMask:function(qe){be!==qe&&!Y&&(i.colorMask(qe,qe,qe,qe),be=qe)},setLocked:function(qe){Y=qe},setClear:function(qe,W,Ce,Me,nt){nt===!0&&(qe*=Me,W*=Me,Ce*=Me),ze.set(qe,W,Ce,Me),Ye.equals(ze)===!1&&(i.clearColor(qe,W,Ce,Me),Ye.copy(ze))},reset:function(){Y=!1,be=null,Ye.set(-1,0,0,0)}}}function n(){let Y=!1,ze=!1,be=null,Ye=null,qe=null;return{setReversed:function(W){if(ze!==W){let Ce=e.get("EXT_clip_control");W?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),ze=W;let Me=qe;qe=null,this.setClear(Me)}},getReversed:function(){return ze},setTest:function(W){W?se(i.DEPTH_TEST):ve(i.DEPTH_TEST)},setMask:function(W){be!==W&&!Y&&(i.depthMask(W),be=W)},setFunc:function(W){if(ze&&(W=Wd[W]),Ye!==W){switch(W){case Vo:i.depthFunc(i.NEVER);break;case ko:i.depthFunc(i.ALWAYS);break;case Wo:i.depthFunc(i.LESS);break;case dr:i.depthFunc(i.LEQUAL);break;case Xo:i.depthFunc(i.EQUAL);break;case qo:i.depthFunc(i.GEQUAL);break;case Yo:i.depthFunc(i.GREATER);break;case Zo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ye=W}},setLocked:function(W){Y=W},setClear:function(W){qe!==W&&(qe=W,ze&&(W=1-W),i.clearDepth(W))},reset:function(){Y=!1,be=null,Ye=null,qe=null,ze=!1}}}function s(){let Y=!1,ze=null,be=null,Ye=null,qe=null,W=null,Ce=null,Me=null,nt=null;return{setTest:function(lt){Y||(lt?se(i.STENCIL_TEST):ve(i.STENCIL_TEST))},setMask:function(lt){ze!==lt&&!Y&&(i.stencilMask(lt),ze=lt)},setFunc:function(lt,qt,Ft){(be!==lt||Ye!==qt||qe!==Ft)&&(i.stencilFunc(lt,qt,Ft),be=lt,Ye=qt,qe=Ft)},setOp:function(lt,qt,Ft){(W!==lt||Ce!==qt||Me!==Ft)&&(i.stencilOp(lt,qt,Ft),W=lt,Ce=qt,Me=Ft)},setLocked:function(lt){Y=lt},setClear:function(lt){nt!==lt&&(i.clearStencil(lt),nt=lt)},reset:function(){Y=!1,ze=null,be=null,Ye=null,qe=null,W=null,Ce=null,Me=null,nt=null}}}let r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap,u={},p={},f={},h=new WeakMap,d=[],_=null,g=!1,m=null,E=null,T=null,v=null,y=null,A=null,w=null,x=new Ze(0,0,0),b=0,C=!1,U=null,S=null,D=null,P=null,F=null,k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,z=0,O=i.getParameter(i.VERSION);O.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(O)[1]),H=z>=1):O.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),H=z>=2);let B=null,q={},oe=i.getParameter(i.SCISSOR_BOX),ge=i.getParameter(i.VIEWPORT),ye=new rn().fromArray(oe),De=new rn().fromArray(ge);function Ke(Y,ze,be,Ye){let qe=new Uint8Array(4),W=i.createTexture();i.bindTexture(Y,W),i.texParameteri(Y,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(Y,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ce=0;Ce<be;Ce++)Y===i.TEXTURE_3D||Y===i.TEXTURE_2D_ARRAY?i.texImage3D(ze,0,i.RGBA,1,1,Ye,0,i.RGBA,i.UNSIGNED_BYTE,qe):i.texImage2D(ze+Ce,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,qe);return W}let $={};$[i.TEXTURE_2D]=Ke(i.TEXTURE_2D,i.TEXTURE_2D,1),$[i.TEXTURE_CUBE_MAP]=Ke(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[i.TEXTURE_2D_ARRAY]=Ke(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),$[i.TEXTURE_3D]=Ke(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),se(i.DEPTH_TEST),a.setFunc(dr),ne(!1),le(_u),se(i.CULL_FACE),ie(xn);function se(Y){u[Y]!==!0&&(i.enable(Y),u[Y]=!0)}function ve(Y){u[Y]!==!1&&(i.disable(Y),u[Y]=!1)}function xe(Y,ze){return f[Y]!==ze?(i.bindFramebuffer(Y,ze),f[Y]=ze,Y===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=ze),Y===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=ze),!0):!1}function we(Y,ze){let be=d,Ye=!1;if(Y){be=h.get(ze),be===void 0&&(be=[],h.set(ze,be));let qe=Y.textures;if(be.length!==qe.length||be[0]!==i.COLOR_ATTACHMENT0){for(let W=0,Ce=qe.length;W<Ce;W++)be[W]=i.COLOR_ATTACHMENT0+W;be.length=qe.length,Ye=!0}}else be[0]!==i.BACK&&(be[0]=i.BACK,Ye=!0);Ye&&i.drawBuffers(be)}function X(Y){return _!==Y?(i.useProgram(Y),_=Y,!0):!1}let Re={[vi]:i.FUNC_ADD,[md]:i.FUNC_SUBTRACT,[gd]:i.FUNC_REVERSE_SUBTRACT};Re[xd]=i.MIN,Re[vd]=i.MAX;let ee={[zs]:i.ZERO,[_d]:i.ONE,[yd]:i.SRC_COLOR,[Su]:i.SRC_ALPHA,[bd]:i.SRC_ALPHA_SATURATE,[Pa]:i.DST_COLOR,[Ca]:i.DST_ALPHA,[Md]:i.ONE_MINUS_SRC_COLOR,[Eu]:i.ONE_MINUS_SRC_ALPHA,[Ed]:i.ONE_MINUS_DST_COLOR,[Sd]:i.ONE_MINUS_DST_ALPHA,[Td]:i.CONSTANT_COLOR,[wd]:i.ONE_MINUS_CONSTANT_COLOR,[Ad]:i.CONSTANT_ALPHA,[Rd]:i.ONE_MINUS_CONSTANT_ALPHA};function ie(Y,ze,be,Ye,qe,W,Ce,Me,nt,lt){if(Y===xn){g===!0&&(ve(i.BLEND),g=!1);return}if(g===!1&&(se(i.BLEND),g=!0),Y!==Sl){if(Y!==m||lt!==C){if((E!==vi||y!==vi)&&(i.blendEquation(i.FUNC_ADD),E=vi,y=vi),lt)switch(Y){case Ms:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qt:i.blendFunc(i.ONE,i.ONE);break;case yu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Mu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:St("WebGLState: Invalid blending: ",Y);break}else switch(Y){case Ms:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qt:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case yu:St("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Mu:St("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:St("WebGLState: Invalid blending: ",Y);break}T=null,v=null,A=null,w=null,x.set(0,0,0),b=0,m=Y,C=lt}return}qe=qe||ze,W=W||be,Ce=Ce||Ye,(ze!==E||qe!==y)&&(i.blendEquationSeparate(Re[ze],Re[qe]),E=ze,y=qe),(be!==T||Ye!==v||W!==A||Ce!==w)&&(i.blendFuncSeparate(ee[be],ee[Ye],ee[W],ee[Ce]),T=be,v=Ye,A=W,w=Ce),(Me.equals(x)===!1||nt!==b)&&(i.blendColor(Me.r,Me.g,Me.b,nt),x.copy(Me),b=nt),m=Y,C=!1}function Z(Y,ze){Y.side===wn?ve(i.CULL_FACE):se(i.CULL_FACE);let be=Y.side===Nn;ze&&(be=!be),ne(be),Y.blending===Ms&&Y.transparent===!1?ie(xn):ie(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),a.setFunc(Y.depthFunc),a.setTest(Y.depthTest),a.setMask(Y.depthWrite),r.setMask(Y.colorWrite);let Ye=Y.stencilWrite;o.setTest(Ye),Ye&&(o.setMask(Y.stencilWriteMask),o.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),o.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),Te(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?se(i.SAMPLE_ALPHA_TO_COVERAGE):ve(i.SAMPLE_ALPHA_TO_COVERAGE)}function ne(Y){U!==Y&&(Y?i.frontFace(i.CW):i.frontFace(i.CCW),U=Y)}function le(Y){Y!==dd?(se(i.CULL_FACE),Y!==S&&(Y===_u?i.cullFace(i.BACK):Y===fd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ve(i.CULL_FACE),S=Y}function Ae(Y){Y!==D&&(H&&i.lineWidth(Y),D=Y)}function Te(Y,ze,be){Y?(se(i.POLYGON_OFFSET_FILL),(P!==ze||F!==be)&&(P=ze,F=be,a.getReversed()&&(ze=-ze),i.polygonOffset(ze,be))):ve(i.POLYGON_OFFSET_FILL)}function ke(Y){Y?se(i.SCISSOR_TEST):ve(i.SCISSOR_TEST)}function Ve(Y){Y===void 0&&(Y=i.TEXTURE0+k-1),B!==Y&&(i.activeTexture(Y),B=Y)}function V(Y,ze,be){be===void 0&&(B===null?be=i.TEXTURE0+k-1:be=B);let Ye=q[be];Ye===void 0&&(Ye={type:void 0,texture:void 0},q[be]=Ye),(Ye.type!==Y||Ye.texture!==ze)&&(B!==be&&(i.activeTexture(be),B=be),i.bindTexture(Y,ze||$[Y]),Ye.type=Y,Ye.texture=ze)}function vt(){let Y=q[B];Y!==void 0&&Y.type!==void 0&&(i.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function rt(){try{i.compressedTexImage2D(...arguments)}catch(Y){St("WebGLState:",Y)}}function N(){try{i.compressedTexImage3D(...arguments)}catch(Y){St("WebGLState:",Y)}}function M(){try{i.texSubImage2D(...arguments)}catch(Y){St("WebGLState:",Y)}}function K(){try{i.texSubImage3D(...arguments)}catch(Y){St("WebGLState:",Y)}}function j(){try{i.compressedTexSubImage2D(...arguments)}catch(Y){St("WebGLState:",Y)}}function he(){try{i.compressedTexSubImage3D(...arguments)}catch(Y){St("WebGLState:",Y)}}function He(){try{i.texStorage2D(...arguments)}catch(Y){St("WebGLState:",Y)}}function Fe(){try{i.texStorage3D(...arguments)}catch(Y){St("WebGLState:",Y)}}function me(){try{i.texImage2D(...arguments)}catch(Y){St("WebGLState:",Y)}}function de(){try{i.texImage3D(...arguments)}catch(Y){St("WebGLState:",Y)}}function Ge(Y){return p[Y]!==void 0?p[Y]:i.getParameter(Y)}function ot(Y,ze){p[Y]!==ze&&(i.pixelStorei(Y,ze),p[Y]=ze)}function Xe(Y){ye.equals(Y)===!1&&(i.scissor(Y.x,Y.y,Y.z,Y.w),ye.copy(Y))}function We(Y){De.equals(Y)===!1&&(i.viewport(Y.x,Y.y,Y.z,Y.w),De.copy(Y))}function $e(Y,ze){let be=l.get(ze);be===void 0&&(be=new WeakMap,l.set(ze,be));let Ye=be.get(Y);Ye===void 0&&(Ye=i.getUniformBlockIndex(ze,Y.name),be.set(Y,Ye))}function et(Y,ze){let Ye=l.get(ze).get(Y);c.get(ze)!==Ye&&(i.uniformBlockBinding(ze,Ye,Y.__bindingPointIndex),c.set(ze,Ye))}function ht(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},p={},B=null,q={},f={},h=new WeakMap,d=[],_=null,g=!1,m=null,E=null,T=null,v=null,y=null,A=null,w=null,x=new Ze(0,0,0),b=0,C=!1,U=null,S=null,D=null,P=null,F=null,ye.set(0,0,i.canvas.width,i.canvas.height),De.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:se,disable:ve,bindFramebuffer:xe,drawBuffers:we,useProgram:X,setBlending:ie,setMaterial:Z,setFlipSided:ne,setCullFace:le,setLineWidth:Ae,setPolygonOffset:Te,setScissorTest:ke,activeTexture:Ve,bindTexture:V,unbindTexture:vt,compressedTexImage2D:rt,compressedTexImage3D:N,texImage2D:me,texImage3D:de,pixelStorei:ot,getParameter:Ge,updateUBOMapping:$e,uniformBlockBinding:et,texStorage2D:He,texStorage3D:Fe,texSubImage2D:M,texSubImage3D:K,compressedTexSubImage2D:j,compressedTexSubImage3D:he,scissor:Xe,viewport:We,reset:ht}}function r1(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ie,u=new WeakMap,p=new Set,f,h=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(N,M){return d?new OffscreenCanvas(N,M):ia("canvas")}function g(N,M,K){let j=1,he=rt(N);if((he.width>K||he.height>K)&&(j=K/Math.max(he.width,he.height)),j<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){let He=Math.floor(j*he.width),Fe=Math.floor(j*he.height);f===void 0&&(f=_(He,Fe));let me=M?_(He,Fe):f;return me.width=He,me.height=Fe,me.getContext("2d").drawImage(N,0,0,He,Fe),yt("WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+He+"x"+Fe+")."),me}else return"data"in N&&yt("WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),N;return N}function m(N){return N.generateMipmaps}function E(N){i.generateMipmap(N)}function T(N){return N.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?i.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(N,M,K,j,he,He=!1){if(N!==null){if(i[N]!==void 0)return i[N];yt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let Fe;j&&(Fe=e.get("EXT_texture_norm16"),Fe||yt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let me=M;if(M===i.RED&&(K===i.FLOAT&&(me=i.R32F),K===i.HALF_FLOAT&&(me=i.R16F),K===i.UNSIGNED_BYTE&&(me=i.R8),K===i.UNSIGNED_SHORT&&Fe&&(me=Fe.R16_EXT),K===i.SHORT&&Fe&&(me=Fe.R16_SNORM_EXT)),M===i.RED_INTEGER&&(K===i.UNSIGNED_BYTE&&(me=i.R8UI),K===i.UNSIGNED_SHORT&&(me=i.R16UI),K===i.UNSIGNED_INT&&(me=i.R32UI),K===i.BYTE&&(me=i.R8I),K===i.SHORT&&(me=i.R16I),K===i.INT&&(me=i.R32I)),M===i.RG&&(K===i.FLOAT&&(me=i.RG32F),K===i.HALF_FLOAT&&(me=i.RG16F),K===i.UNSIGNED_BYTE&&(me=i.RG8),K===i.UNSIGNED_SHORT&&Fe&&(me=Fe.RG16_EXT),K===i.SHORT&&Fe&&(me=Fe.RG16_SNORM_EXT)),M===i.RG_INTEGER&&(K===i.UNSIGNED_BYTE&&(me=i.RG8UI),K===i.UNSIGNED_SHORT&&(me=i.RG16UI),K===i.UNSIGNED_INT&&(me=i.RG32UI),K===i.BYTE&&(me=i.RG8I),K===i.SHORT&&(me=i.RG16I),K===i.INT&&(me=i.RG32I)),M===i.RGB_INTEGER&&(K===i.UNSIGNED_BYTE&&(me=i.RGB8UI),K===i.UNSIGNED_SHORT&&(me=i.RGB16UI),K===i.UNSIGNED_INT&&(me=i.RGB32UI),K===i.BYTE&&(me=i.RGB8I),K===i.SHORT&&(me=i.RGB16I),K===i.INT&&(me=i.RGB32I)),M===i.RGBA_INTEGER&&(K===i.UNSIGNED_BYTE&&(me=i.RGBA8UI),K===i.UNSIGNED_SHORT&&(me=i.RGBA16UI),K===i.UNSIGNED_INT&&(me=i.RGBA32UI),K===i.BYTE&&(me=i.RGBA8I),K===i.SHORT&&(me=i.RGBA16I),K===i.INT&&(me=i.RGBA32I)),M===i.RGB&&(K===i.UNSIGNED_SHORT&&Fe&&(me=Fe.RGB16_EXT),K===i.SHORT&&Fe&&(me=Fe.RGB16_SNORM_EXT),K===i.UNSIGNED_INT_5_9_9_9_REV&&(me=i.RGB9_E5),K===i.UNSIGNED_INT_10F_11F_11F_REV&&(me=i.R11F_G11F_B10F)),M===i.RGBA){let de=He?na:zt.getTransfer(he);K===i.FLOAT&&(me=i.RGBA32F),K===i.HALF_FLOAT&&(me=i.RGBA16F),K===i.UNSIGNED_BYTE&&(me=de===Zt?i.SRGB8_ALPHA8:i.RGBA8),K===i.UNSIGNED_SHORT&&Fe&&(me=Fe.RGBA16_EXT),K===i.SHORT&&Fe&&(me=Fe.RGBA16_SNORM_EXT),K===i.UNSIGNED_SHORT_4_4_4_4&&(me=i.RGBA4),K===i.UNSIGNED_SHORT_5_5_5_1&&(me=i.RGB5_A1)}return(me===i.R16F||me===i.R32F||me===i.RG16F||me===i.RG32F||me===i.RGBA16F||me===i.RGBA32F)&&e.get("EXT_color_buffer_float"),me}function y(N,M){let K;return N?M===null||M===Ui||M===bs?K=i.DEPTH24_STENCIL8:M===_i?K=i.DEPTH32F_STENCIL8:M===Pr&&(K=i.DEPTH24_STENCIL8,yt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ui||M===bs?K=i.DEPTH_COMPONENT24:M===_i?K=i.DEPTH_COMPONENT32F:M===Pr&&(K=i.DEPTH_COMPONENT16),K}function A(N,M){return m(N)===!0||N.isFramebufferTexture&&N.minFilter!==gn&&N.minFilter!==yn?Math.log2(Math.max(M.width,M.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?M.mipmaps.length:1}function w(N){let M=N.target;M.removeEventListener("dispose",w),b(M),M.isVideoTexture&&u.delete(M),M.isHTMLTexture&&p.delete(M)}function x(N){let M=N.target;M.removeEventListener("dispose",x),U(M)}function b(N){let M=n.get(N);if(M.__webglInit===void 0)return;let K=N.source,j=h.get(K);if(j){let he=j[M.__cacheKey];he.usedTimes--,he.usedTimes===0&&C(N),Object.keys(j).length===0&&h.delete(K)}n.remove(N)}function C(N){let M=n.get(N);i.deleteTexture(M.__webglTexture);let K=N.source,j=h.get(K);delete j[M.__cacheKey],a.memory.textures--}function U(N){let M=n.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),n.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(M.__webglFramebuffer[j]))for(let he=0;he<M.__webglFramebuffer[j].length;he++)i.deleteFramebuffer(M.__webglFramebuffer[j][he]);else i.deleteFramebuffer(M.__webglFramebuffer[j]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[j])}else{if(Array.isArray(M.__webglFramebuffer))for(let j=0;j<M.__webglFramebuffer.length;j++)i.deleteFramebuffer(M.__webglFramebuffer[j]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let j=0;j<M.__webglColorRenderbuffer.length;j++)M.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[j]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let K=N.textures;for(let j=0,he=K.length;j<he;j++){let He=n.get(K[j]);He.__webglTexture&&(i.deleteTexture(He.__webglTexture),a.memory.textures--),n.remove(K[j])}n.remove(N)}let S=0;function D(){S=0}function P(){return S}function F(N){S=N}function k(){let N=S;return N>=s.maxTextures&&yt("WebGLTextures: Trying to use "+(N+1)+" texture units while this GPU supports only "+s.maxTextures),S+=1,N}function H(N){let M=[];return M.push(N.wrapS),M.push(N.wrapT),M.push(N.wrapR||0),M.push(N.magFilter),M.push(N.minFilter),M.push(N.anisotropy),M.push(N.internalFormat),M.push(N.format),M.push(N.type),M.push(N.generateMipmaps),M.push(N.premultiplyAlpha),M.push(N.flipY),M.push(N.unpackAlignment),M.push(N.colorSpace),M.join()}function z(N,M){let K=n.get(N);if(N.isVideoTexture&&V(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&K.__version!==N.version){let j=N.image;if(j===null)yt("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)yt("WebGLRenderer: Texture marked for update but image is incomplete");else{ve(K,N,M);return}}else N.isExternalTexture&&(K.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,K.__webglTexture,i.TEXTURE0+M)}function O(N,M){let K=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&K.__version!==N.version){ve(K,N,M);return}else N.isExternalTexture&&(K.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,K.__webglTexture,i.TEXTURE0+M)}function B(N,M){let K=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&K.__version!==N.version){ve(K,N,M);return}t.bindTexture(i.TEXTURE_3D,K.__webglTexture,i.TEXTURE0+M)}function q(N,M){let K=n.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&K.__version!==N.version){xe(K,N,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture,i.TEXTURE0+M)}let oe={[En]:i.REPEAT,[Hi]:i.CLAMP_TO_EDGE,[$o]:i.MIRRORED_REPEAT},ge={[gn]:i.NEAREST,[Id]:i.NEAREST_MIPMAP_NEAREST,[Ba]:i.NEAREST_MIPMAP_LINEAR,[yn]:i.LINEAR,[Tl]:i.LINEAR_MIPMAP_NEAREST,[qi]:i.LINEAR_MIPMAP_LINEAR},ye={[Nd]:i.NEVER,[zd]:i.ALWAYS,[Fd]:i.LESS,[cc]:i.LEQUAL,[Od]:i.EQUAL,[uc]:i.GEQUAL,[Bd]:i.GREATER,[Hd]:i.NOTEQUAL};function De(N,M){if(M.type===_i&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===yn||M.magFilter===Tl||M.magFilter===Ba||M.magFilter===qi||M.minFilter===yn||M.minFilter===Tl||M.minFilter===Ba||M.minFilter===qi)&&yt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(N,i.TEXTURE_WRAP_S,oe[M.wrapS]),i.texParameteri(N,i.TEXTURE_WRAP_T,oe[M.wrapT]),(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)&&i.texParameteri(N,i.TEXTURE_WRAP_R,oe[M.wrapR]),i.texParameteri(N,i.TEXTURE_MAG_FILTER,ge[M.magFilter]),i.texParameteri(N,i.TEXTURE_MIN_FILTER,ge[M.minFilter]),M.compareFunction&&(i.texParameteri(N,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(N,i.TEXTURE_COMPARE_FUNC,ye[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===gn||M.minFilter!==Ba&&M.minFilter!==qi||M.type===_i&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let K=e.get("EXT_texture_filter_anisotropic");i.texParameterf(N,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Ke(N,M){let K=!1;N.__webglInit===void 0&&(N.__webglInit=!0,M.addEventListener("dispose",w));let j=M.source,he=h.get(j);he===void 0&&(he={},h.set(j,he));let He=H(M);if(He!==N.__cacheKey){he[He]===void 0&&(he[He]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,K=!0),he[He].usedTimes++;let Fe=he[N.__cacheKey];Fe!==void 0&&(he[N.__cacheKey].usedTimes--,Fe.usedTimes===0&&C(M)),N.__cacheKey=He,N.__webglTexture=he[He].texture}return K}function $(N,M,K){return Math.floor(Math.floor(N/K)/M)}function se(N,M,K,j){let He=N.updateRanges;if(He.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,K,j,M.data);else{He.sort((ot,Xe)=>ot.start-Xe.start);let Fe=0;for(let ot=1;ot<He.length;ot++){let Xe=He[Fe],We=He[ot],$e=Xe.start+Xe.count,et=$(We.start,M.width,4),ht=$(Xe.start,M.width,4);We.start<=$e+1&&et===ht&&$(We.start+We.count-1,M.width,4)===et?Xe.count=Math.max(Xe.count,We.start+We.count-Xe.start):(++Fe,He[Fe]=We)}He.length=Fe+1;let me=t.getParameter(i.UNPACK_ROW_LENGTH),de=t.getParameter(i.UNPACK_SKIP_PIXELS),Ge=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let ot=0,Xe=He.length;ot<Xe;ot++){let We=He[ot],$e=Math.floor(We.start/4),et=Math.ceil(We.count/4),ht=$e%M.width,Y=Math.floor($e/M.width),ze=et,be=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,ht),t.pixelStorei(i.UNPACK_SKIP_ROWS,Y),t.texSubImage2D(i.TEXTURE_2D,0,ht,Y,ze,be,K,j,M.data)}N.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,me),t.pixelStorei(i.UNPACK_SKIP_PIXELS,de),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ge)}}function ve(N,M,K){let j=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(j=i.TEXTURE_3D);let he=Ke(N,M),He=M.source;t.bindTexture(j,N.__webglTexture,i.TEXTURE0+K);let Fe=n.get(He);if(He.version!==Fe.__version||he===!0){if(t.activeTexture(i.TEXTURE0+K),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){let be=zt.getPrimaries(zt.workingColorSpace),Ye=M.colorSpace===Ni?null:zt.getPrimaries(M.colorSpace),qe=M.colorSpace===Ni||be===Ye?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe)}t.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment);let de=g(M.image,!1,s.maxTextureSize);de=vt(M,de);let Ge=r.convert(M.format,M.colorSpace),ot=r.convert(M.type),Xe=v(M.internalFormat,Ge,ot,M.normalized,M.colorSpace,M.isVideoTexture);De(j,M);let We,$e=M.mipmaps,et=M.isVideoTexture!==!0,ht=Fe.__version===void 0||he===!0,Y=He.dataReady,ze=A(M,de);if(M.isDepthTexture)Xe=y(M.format===Yi,M.type),ht&&(et?t.texStorage2D(i.TEXTURE_2D,1,Xe,de.width,de.height):t.texImage2D(i.TEXTURE_2D,0,Xe,de.width,de.height,0,Ge,ot,null));else if(M.isDataTexture)if($e.length>0){et&&ht&&t.texStorage2D(i.TEXTURE_2D,ze,Xe,$e[0].width,$e[0].height);for(let be=0,Ye=$e.length;be<Ye;be++)We=$e[be],et?Y&&t.texSubImage2D(i.TEXTURE_2D,be,0,0,We.width,We.height,Ge,ot,We.data):t.texImage2D(i.TEXTURE_2D,be,Xe,We.width,We.height,0,Ge,ot,We.data);M.generateMipmaps=!1}else et?(ht&&t.texStorage2D(i.TEXTURE_2D,ze,Xe,de.width,de.height),Y&&se(M,de,Ge,ot)):t.texImage2D(i.TEXTURE_2D,0,Xe,de.width,de.height,0,Ge,ot,de.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){et&&ht&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ze,Xe,$e[0].width,$e[0].height,de.depth);for(let be=0,Ye=$e.length;be<Ye;be++)if(We=$e[be],M.format!==On)if(Ge!==null)if(et){if(Y)if(M.layerUpdates.size>0){let qe=Hu(We.width,We.height,M.format,M.type);for(let W of M.layerUpdates){let Ce=We.data.subarray(W*qe/We.data.BYTES_PER_ELEMENT,(W+1)*qe/We.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,be,0,0,W,We.width,We.height,1,Ge,Ce)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,be,0,0,0,We.width,We.height,de.depth,Ge,We.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,be,Xe,We.width,We.height,de.depth,0,We.data,0,0);else yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else et?Y&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,be,0,0,0,We.width,We.height,de.depth,Ge,ot,We.data):t.texImage3D(i.TEXTURE_2D_ARRAY,be,Xe,We.width,We.height,de.depth,0,Ge,ot,We.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{et&&ht&&t.texStorage2D(i.TEXTURE_2D,ze,Xe,$e[0].width,$e[0].height);for(let be=0,Ye=$e.length;be<Ye;be++)We=$e[be],M.format!==On?Ge!==null?et?Y&&t.compressedTexSubImage2D(i.TEXTURE_2D,be,0,0,We.width,We.height,Ge,We.data):t.compressedTexImage2D(i.TEXTURE_2D,be,Xe,We.width,We.height,0,We.data):yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?Y&&t.texSubImage2D(i.TEXTURE_2D,be,0,0,We.width,We.height,Ge,ot,We.data):t.texImage2D(i.TEXTURE_2D,be,Xe,We.width,We.height,0,Ge,ot,We.data)}else if(M.isDataArrayTexture)if(et){if(ht&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ze,Xe,de.width,de.height,de.depth),Y)if(M.layerUpdates.size>0){let be=Hu(de.width,de.height,M.format,M.type);for(let Ye of M.layerUpdates){let qe=de.data.subarray(Ye*be/de.data.BYTES_PER_ELEMENT,(Ye+1)*be/de.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ye,de.width,de.height,1,Ge,ot,qe)}M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,Ge,ot,de.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Xe,de.width,de.height,de.depth,0,Ge,ot,de.data);else if(M.isData3DTexture)et?(ht&&t.texStorage3D(i.TEXTURE_3D,ze,Xe,de.width,de.height,de.depth),Y&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,Ge,ot,de.data)):t.texImage3D(i.TEXTURE_3D,0,Xe,de.width,de.height,de.depth,0,Ge,ot,de.data);else if(M.isFramebufferTexture){if(ht)if(et)t.texStorage2D(i.TEXTURE_2D,ze,Xe,de.width,de.height);else{let be=de.width,Ye=de.height;for(let qe=0;qe<ze;qe++)t.texImage2D(i.TEXTURE_2D,qe,Xe,be,Ye,0,Ge,ot,null),be>>=1,Ye>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in i){let be=i.canvas;if(be.hasAttribute("layoutsubtree")||be.setAttribute("layoutsubtree","true"),de.parentNode!==be){be.appendChild(de),p.add(M),be.onpaint=Ye=>{let qe=Ye.changedElements;for(let W of p)qe.includes(W.image)&&(W.needsUpdate=!0)},be.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,de);else{let qe=i.RGBA,W=i.RGBA,Ce=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,qe,W,Ce,de)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if($e.length>0){if(et&&ht){let be=rt($e[0]);t.texStorage2D(i.TEXTURE_2D,ze,Xe,be.width,be.height)}for(let be=0,Ye=$e.length;be<Ye;be++)We=$e[be],et?Y&&t.texSubImage2D(i.TEXTURE_2D,be,0,0,Ge,ot,We):t.texImage2D(i.TEXTURE_2D,be,Xe,Ge,ot,We);M.generateMipmaps=!1}else if(et){if(ht){let be=rt(de);t.texStorage2D(i.TEXTURE_2D,ze,Xe,be.width,be.height)}Y&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ge,ot,de)}else t.texImage2D(i.TEXTURE_2D,0,Xe,Ge,ot,de);m(M)&&E(j),Fe.__version=He.version,M.onUpdate&&M.onUpdate(M)}N.__version=M.version}function xe(N,M,K){if(M.image.length!==6)return;let j=Ke(N,M),he=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+K);let He=n.get(he);if(he.version!==He.__version||j===!0){t.activeTexture(i.TEXTURE0+K);let Fe=zt.getPrimaries(zt.workingColorSpace),me=M.colorSpace===Ni?null:zt.getPrimaries(M.colorSpace),de=M.colorSpace===Ni||Fe===me?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);let Ge=M.isCompressedTexture||M.image[0].isCompressedTexture,ot=M.image[0]&&M.image[0].isDataTexture,Xe=[];for(let W=0;W<6;W++)!Ge&&!ot?Xe[W]=g(M.image[W],!0,s.maxCubemapSize):Xe[W]=ot?M.image[W].image:M.image[W],Xe[W]=vt(M,Xe[W]);let We=Xe[0],$e=r.convert(M.format,M.colorSpace),et=r.convert(M.type),ht=v(M.internalFormat,$e,et,M.normalized,M.colorSpace),Y=M.isVideoTexture!==!0,ze=He.__version===void 0||j===!0,be=he.dataReady,Ye=A(M,We);De(i.TEXTURE_CUBE_MAP,M);let qe;if(Ge){Y&&ze&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ye,ht,We.width,We.height);for(let W=0;W<6;W++){qe=Xe[W].mipmaps;for(let Ce=0;Ce<qe.length;Ce++){let Me=qe[Ce];M.format!==On?$e!==null?Y?be&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ce,0,0,Me.width,Me.height,$e,Me.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ce,ht,Me.width,Me.height,0,Me.data):yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?be&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ce,0,0,Me.width,Me.height,$e,et,Me.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ce,ht,Me.width,Me.height,0,$e,et,Me.data)}}}else{if(qe=M.mipmaps,Y&&ze){qe.length>0&&Ye++;let W=rt(Xe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ye,ht,W.width,W.height)}for(let W=0;W<6;W++)if(ot){Y?be&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,Xe[W].width,Xe[W].height,$e,et,Xe[W].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,ht,Xe[W].width,Xe[W].height,0,$e,et,Xe[W].data);for(let Ce=0;Ce<qe.length;Ce++){let nt=qe[Ce].image[W].image;Y?be&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ce+1,0,0,nt.width,nt.height,$e,et,nt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ce+1,ht,nt.width,nt.height,0,$e,et,nt.data)}}else{Y?be&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,$e,et,Xe[W]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,ht,$e,et,Xe[W]);for(let Ce=0;Ce<qe.length;Ce++){let Me=qe[Ce];Y?be&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ce+1,0,0,$e,et,Me.image[W]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ce+1,ht,$e,et,Me.image[W])}}}m(M)&&E(i.TEXTURE_CUBE_MAP),He.__version=he.version,M.onUpdate&&M.onUpdate(M)}N.__version=M.version}function we(N,M,K,j,he,He){let Fe=r.convert(K.format,K.colorSpace),me=r.convert(K.type),de=v(K.internalFormat,Fe,me,K.normalized,K.colorSpace),Ge=n.get(M),ot=n.get(K);if(ot.__renderTarget=M,!Ge.__hasExternalTextures){let Xe=Math.max(1,M.width>>He),We=Math.max(1,M.height>>He);he===i.TEXTURE_3D||he===i.TEXTURE_2D_ARRAY?t.texImage3D(he,He,de,Xe,We,M.depth,0,Fe,me,null):t.texImage2D(he,He,de,Xe,We,0,Fe,me,null)}t.bindFramebuffer(i.FRAMEBUFFER,N),Ve(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,he,ot.__webglTexture,0,ke(M)):(he===i.TEXTURE_2D||he>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,he,ot.__webglTexture,He),t.bindFramebuffer(i.FRAMEBUFFER,null)}function X(N,M,K){if(i.bindRenderbuffer(i.RENDERBUFFER,N),M.depthBuffer){let j=M.depthTexture,he=j&&j.isDepthTexture?j.type:null,He=y(M.stencilBuffer,he),Fe=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ve(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ke(M),He,M.width,M.height):K?i.renderbufferStorageMultisample(i.RENDERBUFFER,ke(M),He,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,He,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Fe,i.RENDERBUFFER,N)}else{let j=M.textures;for(let he=0;he<j.length;he++){let He=j[he],Fe=r.convert(He.format,He.colorSpace),me=r.convert(He.type),de=v(He.internalFormat,Fe,me,He.normalized,He.colorSpace);Ve(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ke(M),de,M.width,M.height):K?i.renderbufferStorageMultisample(i.RENDERBUFFER,ke(M),de,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,de,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Re(N,M,K){let j=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,N),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let he=n.get(M.depthTexture);if(he.__renderTarget=M,(!he.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),j){if(he.__webglInit===void 0&&(he.__webglInit=!0,M.depthTexture.addEventListener("dispose",w)),he.__webglTexture===void 0){he.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,he.__webglTexture),De(i.TEXTURE_CUBE_MAP,M.depthTexture);let Ge=r.convert(M.depthTexture.format),ot=r.convert(M.depthTexture.type),Xe;M.depthTexture.format===zi?Xe=i.DEPTH_COMPONENT24:M.depthTexture.format===Yi&&(Xe=i.DEPTH24_STENCIL8);for(let We=0;We<6;We++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+We,0,Xe,M.width,M.height,0,Ge,ot,null)}}else z(M.depthTexture,0);let He=he.__webglTexture,Fe=ke(M),me=j?i.TEXTURE_CUBE_MAP_POSITIVE_X+K:i.TEXTURE_2D,de=M.depthTexture.format===Yi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(M.depthTexture.format===zi)Ve(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,de,me,He,0,Fe):i.framebufferTexture2D(i.FRAMEBUFFER,de,me,He,0);else if(M.depthTexture.format===Yi)Ve(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,de,me,He,0,Fe):i.framebufferTexture2D(i.FRAMEBUFFER,de,me,He,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ee(N){let M=n.get(N),K=N.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==N.depthTexture){let j=N.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),j){let he=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,j.removeEventListener("dispose",he)};j.addEventListener("dispose",he),M.__depthDisposeCallback=he}M.__boundDepthTexture=j}if(N.depthTexture&&!M.__autoAllocateDepthBuffer)if(K)for(let j=0;j<6;j++)Re(M.__webglFramebuffer[j],N,j);else{let j=N.texture.mipmaps;j&&j.length>0?Re(M.__webglFramebuffer[0],N,0):Re(M.__webglFramebuffer,N,0)}else if(K){M.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[j]),M.__webglDepthbuffer[j]===void 0)M.__webglDepthbuffer[j]=i.createRenderbuffer(),X(M.__webglDepthbuffer[j],N,!1);else{let he=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,He=M.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,He),i.framebufferRenderbuffer(i.FRAMEBUFFER,he,i.RENDERBUFFER,He)}}else{let j=N.texture.mipmaps;if(j&&j.length>0?t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),X(M.__webglDepthbuffer,N,!1);else{let he=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,He=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,He),i.framebufferRenderbuffer(i.FRAMEBUFFER,he,i.RENDERBUFFER,He)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ie(N,M,K){let j=n.get(N);M!==void 0&&we(j.__webglFramebuffer,N,N.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),K!==void 0&&ee(N)}function Z(N){let M=N.texture,K=n.get(N),j=n.get(M);N.addEventListener("dispose",x);let he=N.textures,He=N.isWebGLCubeRenderTarget===!0,Fe=he.length>1;if(Fe||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=M.version,a.memory.textures++),He){K.__webglFramebuffer=[];for(let me=0;me<6;me++)if(M.mipmaps&&M.mipmaps.length>0){K.__webglFramebuffer[me]=[];for(let de=0;de<M.mipmaps.length;de++)K.__webglFramebuffer[me][de]=i.createFramebuffer()}else K.__webglFramebuffer[me]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){K.__webglFramebuffer=[];for(let me=0;me<M.mipmaps.length;me++)K.__webglFramebuffer[me]=i.createFramebuffer()}else K.__webglFramebuffer=i.createFramebuffer();if(Fe)for(let me=0,de=he.length;me<de;me++){let Ge=n.get(he[me]);Ge.__webglTexture===void 0&&(Ge.__webglTexture=i.createTexture(),a.memory.textures++)}if(N.samples>0&&Ve(N)===!1){K.__webglMultisampledFramebuffer=i.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let me=0;me<he.length;me++){let de=he[me];K.__webglColorRenderbuffer[me]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,K.__webglColorRenderbuffer[me]);let Ge=r.convert(de.format,de.colorSpace),ot=r.convert(de.type),Xe=v(de.internalFormat,Ge,ot,de.normalized,de.colorSpace,N.isXRRenderTarget===!0),We=ke(N);i.renderbufferStorageMultisample(i.RENDERBUFFER,We,Xe,N.width,N.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,K.__webglColorRenderbuffer[me])}i.bindRenderbuffer(i.RENDERBUFFER,null),N.depthBuffer&&(K.__webglDepthRenderbuffer=i.createRenderbuffer(),X(K.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(He){t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),De(i.TEXTURE_CUBE_MAP,M);for(let me=0;me<6;me++)if(M.mipmaps&&M.mipmaps.length>0)for(let de=0;de<M.mipmaps.length;de++)we(K.__webglFramebuffer[me][de],N,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+me,de);else we(K.__webglFramebuffer[me],N,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);m(M)&&E(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Fe){for(let me=0,de=he.length;me<de;me++){let Ge=he[me],ot=n.get(Ge),Xe=i.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Xe=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Xe,ot.__webglTexture),De(Xe,Ge),we(K.__webglFramebuffer,N,Ge,i.COLOR_ATTACHMENT0+me,Xe,0),m(Ge)&&E(Xe)}t.unbindTexture()}else{let me=i.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(me=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(me,j.__webglTexture),De(me,M),M.mipmaps&&M.mipmaps.length>0)for(let de=0;de<M.mipmaps.length;de++)we(K.__webglFramebuffer[de],N,M,i.COLOR_ATTACHMENT0,me,de);else we(K.__webglFramebuffer,N,M,i.COLOR_ATTACHMENT0,me,0);m(M)&&E(me),t.unbindTexture()}N.depthBuffer&&ee(N)}function ne(N){let M=N.textures;for(let K=0,j=M.length;K<j;K++){let he=M[K];if(m(he)){let He=T(N),Fe=n.get(he).__webglTexture;t.bindTexture(He,Fe),E(He),t.unbindTexture()}}}let le=[],Ae=[];function Te(N){if(N.samples>0){if(Ve(N)===!1){let M=N.textures,K=N.width,j=N.height,he=i.COLOR_BUFFER_BIT,He=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Fe=n.get(N),me=M.length>1;if(me)for(let Ge=0;Ge<M.length;Ge++)t.bindFramebuffer(i.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ge,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ge,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer);let de=N.texture.mipmaps;de&&de.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer);for(let Ge=0;Ge<M.length;Ge++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(he|=i.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(he|=i.STENCIL_BUFFER_BIT)),me){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Fe.__webglColorRenderbuffer[Ge]);let ot=n.get(M[Ge]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ot,0)}i.blitFramebuffer(0,0,K,j,0,0,K,j,he,i.NEAREST),c===!0&&(le.length=0,Ae.length=0,le.push(i.COLOR_ATTACHMENT0+Ge),N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&(le.push(He),Ae.push(He),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ae)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,le))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),me)for(let Ge=0;Ge<M.length;Ge++){t.bindFramebuffer(i.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ge,i.RENDERBUFFER,Fe.__webglColorRenderbuffer[Ge]);let ot=n.get(M[Ge]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ge,i.TEXTURE_2D,ot,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&c){let M=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function ke(N){return Math.min(s.maxSamples,N.samples)}function Ve(N){let M=n.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function V(N){let M=a.render.frame;u.get(N)!==M&&(u.set(N,M),N.update())}function vt(N,M){let K=N.colorSpace,j=N.format,he=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||K!==ta&&K!==Ni&&(zt.getTransfer(K)===Zt?(j!==On||he!==An)&&yt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):St("WebGLTextures: Unsupported texture color space:",K)),M}function rt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(l.width=N.naturalWidth||N.width,l.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(l.width=N.displayWidth,l.height=N.displayHeight):(l.width=N.width,l.height=N.height),l}this.allocateTextureUnit=k,this.resetTextureUnits=D,this.getTextureUnits=P,this.setTextureUnits=F,this.setTexture2D=z,this.setTexture2DArray=O,this.setTexture3D=B,this.setTextureCube=q,this.rebindTextures=ie,this.setupRenderTarget=Z,this.updateRenderTargetMipmap=ne,this.updateMultisampleRenderTarget=Te,this.setupDepthRenderbuffer=ee,this.setupFrameBufferTexture=we,this.useMultisampledRTT=Ve,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function a1(i,e){function t(n,s=Ni){let r,a=zt.getTransfer(s);if(n===An)return i.UNSIGNED_BYTE;if(n===Al)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Rl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ru)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Cu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===wu)return i.BYTE;if(n===Au)return i.SHORT;if(n===Pr)return i.UNSIGNED_SHORT;if(n===wl)return i.INT;if(n===Ui)return i.UNSIGNED_INT;if(n===_i)return i.FLOAT;if(n===fn)return i.HALF_FLOAT;if(n===Pu)return i.ALPHA;if(n===Iu)return i.RGB;if(n===On)return i.RGBA;if(n===zi)return i.DEPTH_COMPONENT;if(n===Yi)return i.DEPTH_STENCIL;if(n===Cl)return i.RED;if(n===Pl)return i.RED_INTEGER;if(n===Ts)return i.RG;if(n===Il)return i.RG_INTEGER;if(n===Dl)return i.RGBA_INTEGER;if(n===Ha||n===za||n===Ga||n===Va)if(a===Zt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ha)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===za)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ga)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ha)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===za)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ga)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Va)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ll||n===Ul||n===Nl||n===Fl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ll)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ul)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Nl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Fl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ol||n===Bl||n===Hl||n===zl||n===Gl||n===ka||n===Vl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ol||n===Bl)return a===Zt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Hl)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===zl)return r.COMPRESSED_R11_EAC;if(n===Gl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ka)return r.COMPRESSED_RG11_EAC;if(n===Vl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===kl||n===Wl||n===Xl||n===ql||n===Yl||n===Zl||n===$l||n===Jl||n===Kl||n===Ql||n===jl||n===ec||n===tc||n===nc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===kl)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Wl)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Xl)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ql)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Yl)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Zl)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===$l)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Jl)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Kl)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ql)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===jl)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ec)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===tc)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===nc)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ic||n===sc||n===rc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ic)return a===Zt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===sc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===rc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ac||n===oc||n===Wa||n===lc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ac)return r.COMPRESSED_RED_RGTC1_EXT;if(n===oc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Wa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===lc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===bs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var o1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,l1=`
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

}`,sh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new da(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Xt({vertexShader:o1,fragmentShader:l1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Pe(new tn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},rh=class extends Gi{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,p=null,f=null,h=null,d=null,_=typeof XRWebGLBinding<"u",g=new sh,m={},E=t.getContextAttributes(),T=null,v=null,y=[],A=[],w=new Ie,x=null,b=null,C=new Dn;C.viewport=new rn;let U=new Dn;U.viewport=new rn;let S=[C,U],D=new yl,P=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let se=y[$];return se===void 0&&(se=new xr,y[$]=se),se.getTargetRaySpace()},this.getControllerGrip=function($){let se=y[$];return se===void 0&&(se=new xr,y[$]=se),se.getGripSpace()},this.getHand=function($){let se=y[$];return se===void 0&&(se=new xr,y[$]=se),se.getHandSpace()};function k($){let se=A.indexOf($.inputSource);if(se===-1)return;let ve=y[se];ve!==void 0&&(ve.update($.inputSource,$.frame,l||a),ve.dispatchEvent({type:$.type,data:$.inputSource}))}function H(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",z);for(let $=0;$<y.length;$++){let se=A[$];se!==null&&(A[$]=null,y[$].disconnect(se))}P=null,F=null,g.reset();for(let $ in m)delete m[$];if(e.setRenderTarget(T),h=null,f=null,p=null,s=null,v=null,Ke.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(w.width,w.height,!1),b!==null){let $=b.camera;$.fov=b.fov,$.zoom=b.zoom,$.updateProjectionMatrix(),b=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&yt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&yt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return p===null&&_&&(p=new XRWebGLBinding(s,t)),p},this.getFrame=function(){return d},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(T=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",H),s.addEventListener("inputsourceschange",z),E.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(w),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,xe=null,we=null;E.depth&&(we=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=E.stencil?Yi:zi,xe=E.stencil?bs:Ui);let X={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:r};p=this.getBinding(),f=p.createProjectionLayer(X),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new an(f.textureWidth,f.textureHeight,{format:On,type:An,depthTexture:new xi(f.textureWidth,f.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let ve={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,t,ve),s.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),v=new an(h.framebufferWidth,h.framebufferHeight,{format:On,type:An,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Ke.setContext(s),Ke.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function z($){for(let se=0;se<$.removed.length;se++){let ve=$.removed[se],xe=A.indexOf(ve);xe>=0&&(A[xe]=null,y[xe].disconnect(ve))}for(let se=0;se<$.added.length;se++){let ve=$.added[se],xe=A.indexOf(ve);if(xe===-1){for(let X=0;X<y.length;X++)if(X>=A.length){A.push(ve),xe=X;break}else if(A[X]===null){A[X]=ve,xe=X;break}if(xe===-1)break}let we=y[xe];we&&we.connect(ve)}}let O=new L,B=new L;function q($,se,ve){O.setFromMatrixPosition(se.matrixWorld),B.setFromMatrixPosition(ve.matrixWorld);let xe=O.distanceTo(B),we=se.projectionMatrix.elements,X=ve.projectionMatrix.elements,Re=we[14]/(we[10]-1),ee=we[14]/(we[10]+1),ie=(we[9]+1)/we[5],Z=(we[9]-1)/we[5],ne=(we[8]-1)/we[0],le=(X[8]+1)/X[0],Ae=Re*ne,Te=Re*le,ke=xe/(-ne+le),Ve=ke*-ne;if(se.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Ve),$.translateZ(ke),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),we[10]===-1)$.projectionMatrix.copy(se.projectionMatrix),$.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{let V=Re+ke,vt=ee+ke,rt=Ae-Ve,N=Te+(xe-Ve),M=ie*ee/vt*V,K=Z*ee/vt*V;$.projectionMatrix.makePerspective(rt,N,M,K,V,vt),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function oe($,se){se===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(se.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let se=$.near,ve=$.far;g.texture!==null&&(g.depthNear>0&&(se=g.depthNear),g.depthFar>0&&(ve=g.depthFar)),D.near=U.near=C.near=se,D.far=U.far=C.far=ve,(P!==D.near||F!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),P=D.near,F=D.far),D.layers.mask=$.layers.mask|6,C.layers.mask=D.layers.mask&-5,U.layers.mask=D.layers.mask&-3;let xe=$.parent,we=D.cameras;oe(D,xe);for(let X=0;X<we.length;X++)oe(we[X],xe);we.length===2?q(D,C,U):D.projectionMatrix.copy(C.projectionMatrix),b===null&&$.isPerspectiveCamera&&(b={camera:$,fov:$.fov,zoom:$.zoom}),ge($,D,xe)};function ge($,se,ve){ve===null?$.matrix.copy(se.matrixWorld):($.matrix.copy(ve.matrixWorld),$.matrix.invert(),$.matrix.multiply(se.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(se.projectionMatrix),$.projectionMatrixInverse.copy(se.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=ra*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(f===null&&h===null))return c},this.setFoveation=function($){c=$,f!==null&&(f.fixedFoveation=$),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=$)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(D)},this.getCameraTexture=function($){return m[$]};let ye=null;function De($,se){if(u=se.getViewerPose(l||a),d=se,u!==null){let ve=u.views;h!==null&&(e.setRenderTargetFramebuffer(v,h.framebuffer),e.setRenderTarget(v));let xe=!1;ve.length!==D.cameras.length&&(D.cameras.length=0,xe=!0);for(let ee=0;ee<ve.length;ee++){let ie=ve[ee],Z=null;if(h!==null)Z=h.getViewport(ie);else{let le=p.getViewSubImage(f,ie);Z=le.viewport,ee===0&&(e.setRenderTargetTextures(v,le.colorTexture,le.depthStencilTexture),e.setRenderTarget(v))}let ne=S[ee];ne===void 0&&(ne=new Dn,ne.layers.enable(ee),ne.viewport=new rn,S[ee]=ne),ne.matrix.fromArray(ie.transform.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.projectionMatrix.fromArray(ie.projectionMatrix),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert(),ne.viewport.set(Z.x,Z.y,Z.width,Z.height),ee===0&&(D.matrix.copy(ne.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),xe===!0&&D.cameras.push(ne)}let we=s.enabledFeatures;if(we&&we.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){p=n.getBinding();let ee=p.getDepthInformation(ve[0]);ee&&ee.isValid&&ee.texture&&g.init(ee,s.renderState)}if(we&&we.includes("camera-access")&&_){e.state.unbindTexture(),p=n.getBinding();for(let ee=0;ee<ve.length;ee++){let ie=ve[ee].camera;if(ie){let Z=m[ie];Z||(Z=new da,m[ie]=Z);let ne=p.getCameraImage(ie);Z.sourceTexture=ne}}}}for(let ve=0;ve<y.length;ve++){let xe=A[ve],we=y[ve];xe!==null&&we!==void 0&&we.update(xe,se,l||a)}ye&&ye($,se),se.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:se}),d=null}let Ke=new Mf;Ke.setAnimationLoop(De),this.setAnimationLoop=function($){ye=$},this.dispose=function(){}}},c1=new mt,Af=new At;Af.set(-1,0,0,0,1,0,0,0,1);function u1(i,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Fu(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,E,T,v){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),p(g,m)):m.isMeshPhongMaterial?(r(g,m),u(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),f(g,m),m.isMeshPhysicalMaterial&&h(g,m,v)):m.isMeshMatcapMaterial?(r(g,m),d(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),_(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?c(g,m,E,T):m.isSpriteMaterial?l(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Nn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Nn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let E=e.get(m),T=E.envMap,v=E.envMapRotation;T&&(g.envMap.value=T,g.envMapRotation.value.setFromMatrix4(c1.makeRotationFromEuler(v)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Af),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,E,T){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*E,g.scale.value=T*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function p(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function h(g,m,E){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Nn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=E.texture,g.transmissionSamplerSize.value.set(E.width,E.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function d(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){let E=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(E.matrixWorld),g.nearDistance.value=E.shadow.camera.near,g.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function h1(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,y){let A=y.program;n.uniformBlockBinding(v,A)}function l(v,y){let A=s[v.id];A===void 0&&(g(v),A=u(v),s[v.id]=A,v.addEventListener("dispose",E));let w=y.program;n.updateUBOMapping(v,w);let x=e.render.frame;r[v.id]!==x&&(f(v),r[v.id]=x)}function u(v){let y=p();v.__bindingPointIndex=y;let A=i.createBuffer(),w=v.__size,x=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,w,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,A),A}function p(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return St("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){let y=s[v.id],A=v.uniforms,w=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let x=0,b=A.length;x<b;x++){let C=A[x];if(Array.isArray(C))for(let U=0,S=C.length;U<S;U++)h(C[U],x,U,w);else h(C,x,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(v,y,A,w){if(_(v,y,A,w)===!0){let x=v.__offset,b=v.value;if(Array.isArray(b)){let C=0;for(let U=0;U<b.length;U++){let S=b[U],D=m(S);d(S,v.__data,C),typeof S!="number"&&typeof S!="boolean"&&!S.isMatrix3&&!ArrayBuffer.isView(S)&&(C+=D.storage/Float32Array.BYTES_PER_ELEMENT)}}else d(b,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,v.__data)}}function d(v,y,A){typeof v=="number"||typeof v=="boolean"?y[0]=v:v.isMatrix3?(y[0]=v.elements[0],y[1]=v.elements[1],y[2]=v.elements[2],y[3]=0,y[4]=v.elements[3],y[5]=v.elements[4],y[6]=v.elements[5],y[7]=0,y[8]=v.elements[6],y[9]=v.elements[7],y[10]=v.elements[8],y[11]=0):ArrayBuffer.isView(v)?y.set(new v.constructor(v.buffer,v.byteOffset,y.length)):v.toArray(y,A)}function _(v,y,A,w){let x=v.value,b=y+"_"+A;if(w[b]===void 0)return typeof x=="number"||typeof x=="boolean"?w[b]=x:ArrayBuffer.isView(x)?w[b]=x.slice():w[b]=x.clone(),!0;{let C=w[b];if(typeof x=="number"||typeof x=="boolean"){if(C!==x)return w[b]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(C.equals(x)===!1)return C.copy(x),!0}}return!1}function g(v){let y=v.uniforms,A=0,w=16;for(let b=0,C=y.length;b<C;b++){let U=Array.isArray(y[b])?y[b]:[y[b]];for(let S=0,D=U.length;S<D;S++){let P=U[S],F=Array.isArray(P.value)?P.value:[P.value];for(let k=0,H=F.length;k<H;k++){let z=F[k],O=m(z),B=A%w,q=B%O.boundary,oe=B+q;A+=q,oe!==0&&w-oe<O.storage&&(A+=w-oe),P.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=A,A+=O.storage}}}let x=A%w;return x>0&&(A+=w-x),v.__size=A,v.__cache={},this}function m(v){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?yt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(y.boundary=16,y.storage=v.byteLength):yt("WebGLRenderer: Unsupported uniform value type.",v),y}function E(v){let y=v.target;y.removeEventListener("dispose",E);let A=a.indexOf(y.__bindingPointIndex);a.splice(A,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function T(){for(let v in s)i.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:c,update:l,dispose:T}}var d1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Zi=null;function f1(){return Zi===null&&(Zi=new gi(d1,16,16,Ts,fn),Zi.name="DFG_LUT",Zi.minFilter=yn,Zi.magFilter=yn,Zi.wrapS=Hi,Zi.wrapT=Hi,Zi.generateMipmaps=!1,Zi.needsUpdate=!0),Zi}var pc=class{constructor(e={}){let{canvas:t=Gd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:f=!1,outputBufferType:h=An}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;let _=h,g=new Set([Dl,Il,Pl]),m=new Set([An,Ui,Pr,bs,Al,Rl]),E=new Uint32Array(4),T=new Int32Array(4),v=new L,y=null,A=null,w=[],x=[],b=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=oi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,U=!1,S=null,D=null,P=null,F=null;this._outputColorSpace=Kt;let k=0,H=0,z=null,O=-1,B=null,q=new rn,oe=new rn,ge=null,ye=new Ze(0),De=0,Ke=t.width,$=t.height,se=1,ve=null,xe=null,we=new rn(0,0,Ke,$),X=new rn(0,0,Ke,$),Re=!1,ee=new yr,ie=!1,Z=!1,ne=new mt,le=new L,Ae=new rn,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ke=!1;function Ve(){return z===null?se:1}let V=n;function vt(I,Q){return t.getContext(I,Q)}let rt,N,M,K,j,he,He,Fe,me,de,Ge,ot,Xe,We,$e,et,ht,Y,ze,be,Ye,qe,W;try{let I={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",nt,!1),t.addEventListener("webglcontextrestored",lt,!1),t.addEventListener("webglcontextcreationerror",qt,!1),V===null){let Q="webgl2";if(V=vt(Q,I),V===null)throw vt(Q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ce()}catch(I){throw t.removeEventListener("webglcontextlost",nt,!1),t.removeEventListener("webglcontextrestored",lt,!1),t.removeEventListener("webglcontextcreationerror",qt,!1),St("WebGLRenderer: "+I.message),I}function Ce(){rt=new yx(V),rt.init(),Ye=new a1(V,rt),N=new ux(V,rt,e,Ye),M=new s1(V,rt),N.reversedDepthBuffer&&f&&M.buffers.depth.setReversed(!0),D=V.createFramebuffer(),P=V.createFramebuffer(),F=V.createFramebuffer(),K=new Ex(V),j=new Wv,he=new r1(V,rt,M,j,N,Ye,K),He=new _x(C),Fe=new T0(V),qe=new lx(V,Fe),me=new Mx(V,Fe,K,qe),de=new Tx(V,me,Fe,qe,K),Y=new bx(V,N,he),$e=new hx(j),Ge=new kv(C,He,rt,N,qe,$e),ot=new u1(C,j),Xe=new qv,We=new Qv(rt),ht=new ox(C,He,M,de,d,c),et=new i1(C,de,N),W=new h1(V,K,N,M),ze=new cx(V,rt,K),be=new Sx(V,rt,K),K.programs=Ge.programs,C.capabilities=N,C.extensions=rt,C.properties=j,C.renderLists=Xe,C.shadowMap=et,C.state=M,C.info=K}_!==An&&(b=new Ax(_,t.width,t.height,o,s,r));let Me=new rh(C,V);this.xr=Me,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){let I=rt.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){let I=rt.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(I){I!==void 0&&(se=I,this.setSize(Ke,$,!1))},this.getSize=function(I){return I.set(Ke,$)},this.setSize=function(I,Q,pe=!0){if(Me.isPresenting){yt("WebGLRenderer: Can't change size while VR device is presenting.");return}Ke=I,$=Q,t.width=Math.floor(I*se),t.height=Math.floor(Q*se),pe===!0&&(t.style.width=I+"px",t.style.height=Q+"px"),b!==null&&b.setSize(t.width,t.height),this.setViewport(0,0,I,Q)},this.getDrawingBufferSize=function(I){return I.set(Ke*se,$*se).floor()},this.setDrawingBufferSize=function(I,Q,pe){Ke=I,$=Q,se=pe,t.width=Math.floor(I*pe),t.height=Math.floor(Q*pe),this.setViewport(0,0,I,Q)},this.setEffects=function(I){if(_===An){St("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(I){for(let Q=0;Q<I.length;Q++)if(I[Q].isOutputPass===!0){yt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(I||[])},this.getCurrentViewport=function(I){return I.copy(q)},this.getViewport=function(I){return I.copy(we)},this.setViewport=function(I,Q,pe,ae){I.isVector4?we.set(I.x,I.y,I.z,I.w):we.set(I,Q,pe,ae),M.viewport(q.copy(we).multiplyScalar(se).round())},this.getScissor=function(I){return I.copy(X)},this.setScissor=function(I,Q,pe,ae){I.isVector4?X.set(I.x,I.y,I.z,I.w):X.set(I,Q,pe,ae),M.scissor(oe.copy(X).multiplyScalar(se).round())},this.getScissorTest=function(){return Re},this.setScissorTest=function(I){M.setScissorTest(Re=I)},this.setOpaqueSort=function(I){ve=I},this.setTransparentSort=function(I){xe=I},this.getClearColor=function(I){return I.copy(ht.getClearColor())},this.setClearColor=function(){ht.setClearColor(...arguments)},this.getClearAlpha=function(){return ht.getClearAlpha()},this.setClearAlpha=function(){ht.setClearAlpha(...arguments)},this.clear=function(I=!0,Q=!0,pe=!0){let ae=0;if(I){let ce=!1;if(z!==null){let Qe=z.texture.format;ce=g.has(Qe)}if(ce){let Qe=z.texture.type,st=m.has(Qe),G=ht.getClearColor(),J=ht.getClearAlpha(),te=G.r,Ee=G.g,_e=G.b;st?(E[0]=te,E[1]=Ee,E[2]=_e,E[3]=J,V.clearBufferuiv(V.COLOR,0,E)):(T[0]=te,T[1]=Ee,T[2]=_e,T[3]=J,V.clearBufferiv(V.COLOR,0,T))}else ae|=V.COLOR_BUFFER_BIT}Q&&(ae|=V.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),pe&&(ae|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ae!==0&&V.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(I){I.setRenderer(this),S=I},this.dispose=function(){t.removeEventListener("webglcontextlost",nt,!1),t.removeEventListener("webglcontextrestored",lt,!1),t.removeEventListener("webglcontextcreationerror",qt,!1),ht.dispose(),Xe.dispose(),We.dispose(),j.dispose(),He.dispose(),de.dispose(),qe.dispose(),W.dispose(),Ge.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",re),Me.removeEventListener("sessionend",Se),Oe.stop()};function nt(I){I.preventDefault(),sa("WebGLRenderer: Context Lost."),U=!0}function lt(){sa("WebGLRenderer: Context Restored."),U=!1;let I=K.autoReset,Q=et.enabled,pe=et.autoUpdate,ae=et.needsUpdate,ce=et.type;Ce(),K.autoReset=I,et.enabled=Q,et.autoUpdate=pe,et.needsUpdate=ae,et.type=ce}function qt(I){St("WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function Ft(I){let Q=I.target;Q.removeEventListener("dispose",Ft),Wt(Q)}function Wt(I){Bn(I),j.remove(I)}function Bn(I){let Q=j.get(I).programs;Q!==void 0&&(Q.forEach(function(pe){Ge.releaseProgram(pe)}),I.isShaderMaterial&&Ge.releaseShaderCache(I))}this.renderBufferDirect=function(I,Q,pe,ae,ce,Qe){Q===null&&(Q=Te);let st=ce.isMesh&&ce.matrixWorld.determinantAffine()<0,G=wi(I,Q,pe,ae,ce);M.setMaterial(ae,st);let J=pe.index,te=1;if(ae.wireframe===!0){if(J=me.getWireframeAttribute(pe),J===void 0)return;te=2}let Ee=pe.drawRange,_e=pe.attributes.position,fe=Ee.start*te,Ne=(Ee.start+Ee.count)*te;Qe!==null&&(fe=Math.max(fe,Qe.start*te),Ne=Math.min(Ne,(Qe.start+Qe.count)*te)),J!==null?(fe=Math.max(fe,0),Ne=Math.min(Ne,J.count)):_e!=null&&(fe=Math.max(fe,0),Ne=Math.min(Ne,_e.count));let Be=Ne-fe;if(Be<0||Be===1/0)return;qe.setup(ce,ae,G,pe,J);let Je,it=ze;if(J!==null&&(Je=Fe.get(J),it=be,it.setIndex(Je)),ce.isMesh)ae.wireframe===!0?(M.setLineWidth(ae.wireframeLinewidth*Ve()),it.setMode(V.LINES)):it.setMode(V.TRIANGLES);else if(ce.isLine){let Le=ae.linewidth;Le===void 0&&(Le=1),M.setLineWidth(Le*Ve()),ce.isLineSegments?it.setMode(V.LINES):ce.isLineLoop?it.setMode(V.LINE_LOOP):it.setMode(V.LINE_STRIP)}else ce.isPoints?it.setMode(V.POINTS):ce.isSprite&&it.setMode(V.TRIANGLES);if(ce.isBatchedMesh)if(rt.get("WEBGL_multi_draw"))it.renderMultiDraw(ce._multiDrawStarts,ce._multiDrawCounts,ce._multiDrawCount);else{let Le=ce._multiDrawStarts,ue=ce._multiDrawCounts,pt=ce._multiDrawCount,ut=J?Fe.get(J).bytesPerElement:1,bt=j.get(ae).currentProgram.getUniforms();for(let Bt=0;Bt<pt;Bt++)bt.setValue(V,"_gl_DrawID",Bt),it.render(Le[Bt]/ut,ue[Bt])}else if(ce.isInstancedMesh)it.renderInstances(fe,Be,ce.count);else if(pe.isInstancedBufferGeometry){let Le=pe._maxInstanceCount!==void 0?pe._maxInstanceCount:1/0,ue=Math.min(pe.instanceCount,Le);it.renderInstances(fe,Be,ue)}else it.render(fe,Be)};function hi(I,Q,pe,ae){S!==null&&I.isNodeMaterial&&S.setObject(ae,I),ie===!0&&$e.setState(I,pe,!1),I.transparent===!0&&I.side===wn&&I.forceSinglePass===!1?(I.side=Nn,I.needsUpdate=!0,Pt(I,Q,ae),I.side=ys,I.needsUpdate=!0,Pt(I,Q,ae),I.side=wn):Pt(I,Q,ae)}this.compile=function(I,Q,pe=null){pe===null&&(pe=I),S!==null&&S.renderStart(I,Q,pe),A=We.get(pe),A.init(Q),x.push(A),pe.traverseVisible(function(ce){ce.isLight&&ce.layers.test(Q.layers)&&(A.pushLight(ce),ce.castShadow&&A.pushShadow(ce))}),I!==pe&&I.traverseVisible(function(ce){ce.isLight&&ce.layers.test(Q.layers)&&(A.pushLight(ce),ce.castShadow&&A.pushShadow(ce))}),A.setupLights(),S!==null&&S.updateLights(A.state.lightsArray),Z=this.localClippingEnabled,ie=$e.init(this.clippingPlanes,Z),ie===!0&&$e.setGlobalState(this.clippingPlanes,Q),S!==null&&et.render(A.state.shadowsArray,pe,Q);let ae=new Set;return I.traverse(function(ce){if(!(ce.isMesh||ce.isPoints||ce.isLine||ce.isSprite))return;let Qe=ce.material;if(Qe)if(Array.isArray(Qe))for(let st=0;st<Qe.length;st++){let G=Qe[st];hi(G,pe,Q,ce),ae.add(G)}else hi(Qe,pe,Q,ce),ae.add(Qe)}),A=x.pop(),S!==null&&S.renderEnd(),ae},this.compileAsync=function(I,Q,pe=null){let ae=this.compile(I,Q,pe);return new Promise(ce=>{function Qe(){if(ae.forEach(function(st){let J=j.get(st).currentProgram;(J===void 0||J.isReady())&&ae.delete(st)}),ae.size===0){ce(I);return}setTimeout(Qe,10)}rt.get("KHR_parallel_shader_compile")!==null?Qe():setTimeout(Qe,10)})};let qn=null;function R(I){qn&&qn(I)}function re(){Oe.stop()}function Se(){Oe.start()}let Oe=new Mf;Oe.setAnimationLoop(R),typeof self<"u"&&Oe.setContext(self),this.setAnimationLoop=function(I){qn=I,Me.setAnimationLoop(I),I===null?Oe.stop():Oe.start()},Me.addEventListener("sessionstart",re),Me.addEventListener("sessionend",Se),this.render=function(I,Q){if(Q!==void 0&&Q.isCamera!==!0){St("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;S!==null&&S.renderStart(I,Q);let pe=Me.enabled===!0&&Me.isPresenting===!0,ae=b!==null&&(z===null||pe)&&b.begin(C,z);if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(Q),Q=Me.getCamera()),I.isScene===!0&&I.onBeforeRender(C,I,Q,z),A=We.get(I,x.length),A.init(Q),A.state.textureUnits=he.getTextureUnits(),x.push(A),ne.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),ee.setFromProjectionMatrix(ne,Pi,Q.reversedDepth),Z=this.localClippingEnabled,ie=$e.init(this.clippingPlanes,Z),y=Xe.get(I,w.length),y.init(),w.push(y),Me.enabled===!0&&Me.isPresenting===!0){let st=C.xr.getDepthSensingMesh();st!==null&&Ue(st,Q,-1/0,C.sortObjects)}Ue(I,Q,0,C.sortObjects),y.finish(),S!==null&&S.updateLights(A.state.lightsArray),C.sortObjects===!0&&y.sort(ve,xe),ke=Me.enabled===!1||Me.isPresenting===!1||Me.hasDepthSensing()===!1,ke&&ht.addToRenderList(y,I),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ie===!0&&$e.beginShadows();let ce=A.state.shadowsArray;if(et.render(ce,I,Q),ie===!0&&$e.endShadows(),(ae&&b.hasRenderPass())===!1){let st=y.opaque,G=y.transmissive;if(A.setupLights(),Q.isArrayCamera){let J=Q.cameras;if(G.length>0)for(let te=0,Ee=J.length;te<Ee;te++){let _e=J[te];tt(st,G,I,_e)}ke&&ht.render(I);for(let te=0,Ee=J.length;te<Ee;te++){let _e=J[te];gt(y,I,_e,_e.viewport)}}else G.length>0&&tt(st,G,I,Q),ke&&ht.render(I),gt(y,I,Q)}z!==null&&H===0&&(he.updateMultisampleRenderTarget(z),he.updateRenderTargetMipmap(z)),ae&&b.end(C),I.isScene===!0&&I.onAfterRender(C,I,Q),qe.resetDefaultState(),O=-1,B=null,x.pop(),x.length>0?(A=x[x.length-1],he.setTextureUnits(A.state.textureUnits),ie===!0&&$e.setGlobalState(C.clippingPlanes,A.state.camera)):A=null,w.pop(),w.length>0?y=w[w.length-1]:y=null,S!==null&&S.renderEnd()};function Ue(I,Q,pe,ae){if(I.visible===!1)return;if(I.layers.test(Q.layers)){if(I.isGroup)pe=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(Q);else if(I.isLightProbeGrid)A.pushLightProbeGrid(I);else if(I.isLight)A.pushLight(I),I.castShadow&&A.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||I.intersectsFrustum(ee)){ae&&Ae.setFromMatrixPosition(I.matrixWorld).applyMatrix4(ne);let st=de.update(I),G=I.material;G.visible&&y.push(I,st,G,pe,Ae.z,null,Q)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||I.intersectsFrustum(ee))){let st=de.update(I),G=I.material;if(ae&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),Ae.copy(I.boundingSphere.center)):(st.boundingSphere===null&&st.computeBoundingSphere(),Ae.copy(st.boundingSphere.center)),Ae.applyMatrix4(I.matrixWorld).applyMatrix4(ne)),Array.isArray(G)){let J=st.groups;for(let te=0,Ee=J.length;te<Ee;te++){let _e=J[te],fe=G[_e.materialIndex];fe&&fe.visible&&y.push(I,st,fe,pe,Ae.z,_e,Q)}}else G.visible&&y.push(I,st,G,pe,Ae.z,null,Q)}}let Qe=I.children;for(let st=0,G=Qe.length;st<G;st++)Ue(Qe[st],Q,pe,ae)}function gt(I,Q,pe,ae){let{opaque:ce,transmissive:Qe,transparent:st}=I;A.setupLightsView(pe),ie===!0&&$e.setGlobalState(C.clippingPlanes,pe),ae&&M.viewport(q.copy(ae)),ce.length>0&&ct(ce,Q,pe),Qe.length>0&&ct(Qe,Q,pe),st.length>0&&ct(st,Q,pe),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function tt(I,Q,pe,ae){if((pe.isScene===!0?pe.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[ae.id]===void 0){let fe=rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[ae.id]=new an(1,1,{generateMipmaps:!0,type:fe?fn:An,minFilter:qi,samples:Math.max(4,N.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:zt.workingColorSpace})}let Qe=A.state.transmissionRenderTarget[ae.id],st=ae.viewport||q;Qe.setSize(st.z*C.transmissionResolutionScale,st.w*C.transmissionResolutionScale);let G=C.getRenderTarget(),J=C.getActiveCubeFace(),te=C.getActiveMipmapLevel();C.setRenderTarget(Qe),C.getClearColor(ye),De=C.getClearAlpha(),De<1&&C.setClearColor(16777215,.5),C.clear(),ke&&ht.render(pe);let Ee=C.toneMapping;C.toneMapping=oi;let _e=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),A.setupLightsView(ae),ie===!0&&$e.setGlobalState(C.clippingPlanes,ae),ct(I,pe,ae),he.updateMultisampleRenderTarget(Qe),he.updateRenderTargetMipmap(Qe),rt.has("WEBGL_multisampled_render_to_texture")===!1){let fe=!1;for(let Ne=0,Be=Q.length;Ne<Be;Ne++){let Je=Q[Ne],{object:it,geometry:Le,material:ue,group:pt}=Je;if(ue.side===wn&&it.layers.test(ae.layers)){let ut=ue.side;ue.side=Nn,ue.needsUpdate=!0,at(it,pe,ae,Le,ue,pt),ue.side=ut,ue.needsUpdate=!0,fe=!0}}fe===!0&&(he.updateMultisampleRenderTarget(Qe),he.updateRenderTargetMipmap(Qe))}C.setRenderTarget(G,J,te),C.setClearColor(ye,De),_e!==void 0&&(ae.viewport=_e),C.toneMapping=Ee}function ct(I,Q,pe){let ae=Q.isScene===!0?Q.overrideMaterial:null;for(let ce=0,Qe=I.length;ce<Qe;ce++){let st=I[ce],{object:G,geometry:J,group:te}=st,Ee=st.material;Ee.allowOverride===!0&&ae!==null&&(Ee=ae),G.layers.test(pe.layers)&&at(G,Q,pe,J,Ee,te)}}function at(I,Q,pe,ae,ce,Qe){S!==null&&ce.isNodeMaterial&&S.setObject(I,ce),I.onBeforeRender(C,Q,pe,ae,ce,Qe),I.modelViewMatrix.multiplyMatrices(pe.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),ce.onBeforeRender(C,Q,pe,ae,I,Qe),ce.transparent===!0&&ce.side===wn&&ce.forceSinglePass===!1?(ce.side=Nn,ce.needsUpdate=!0,C.renderBufferDirect(pe,Q,ae,ce,I,Qe),ce.side=ys,ce.needsUpdate=!0,C.renderBufferDirect(pe,Q,ae,ce,I,Qe),ce.side=wn):C.renderBufferDirect(pe,Q,ae,ce,I,Qe),I.onAfterRender(C,Q,pe,ae,ce,Qe)}function Pt(I,Q,pe){Q.isScene!==!0&&(Q=Te);let ae=j.get(I),ce=A.state.lights,Qe=A.state.shadowsArray,st=ce.state.version,G=Ge.getParameters(I,ce.state,Qe,Q,pe,A.state.lightProbeGridArray),J=Ge.getProgramCacheKey(G),te=ae.programs;ae.environment=I.isMeshStandardMaterial||I.isMeshLambertMaterial||I.isMeshPhongMaterial?Q.environment:null,ae.fog=Q.fog;let Ee=I.isMeshStandardMaterial||I.isMeshLambertMaterial&&!I.envMap||I.isMeshPhongMaterial&&!I.envMap;ae.envMap=He.get(I.envMap||ae.environment,Ee),ae.envMapRotation=ae.environment!==null&&I.envMap===null?Q.environmentRotation:I.envMapRotation,te===void 0&&(I.addEventListener("dispose",Ft),te=new Map,ae.programs=te);let _e=te.get(J);if(_e!==void 0){if(ae.currentProgram===_e&&ae.lightsStateVersion===st)return vn(I,G),_e}else G.uniforms=Ge.getUniforms(I),S!==null&&I.isNodeMaterial&&S.build(I,pe,G),I.onBeforeCompile(G,C),_e=Ge.acquireProgram(G,J),te.set(J,_e),ae.uniforms=G.uniforms;let fe=ae.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(fe.clippingPlanes=$e.uniform),vn(I,G),ae.needsLights=fi(I),ae.lightsStateVersion=st,ae.needsLights&&(fe.ambientLightColor.value=ce.state.ambient,fe.lightProbe.value=ce.state.probe,fe.sunLights.value=ce.state.sun,fe.sunLightShadows.value=ce.state.sunShadow,fe.directionalLights.value=ce.state.directional,fe.directionalLightShadows.value=ce.state.directionalShadow,fe.spotLights.value=ce.state.spot,fe.spotLightShadows.value=ce.state.spotShadow,fe.rectAreaLights.value=ce.state.rectArea,fe.ltc_1.value=ce.state.rectAreaLTC1,fe.ltc_2.value=ce.state.rectAreaLTC2,fe.pointLights.value=ce.state.point,fe.pointLightShadows.value=ce.state.pointShadow,fe.hemisphereLights.value=ce.state.hemi,fe.sunShadowMatrix.value=ce.state.sunShadowMatrix,fe.sunShadowCascade.value=ce.state.sunShadowCascade,fe.directionalShadowMatrix.value=ce.state.directionalShadowMatrix,fe.spotLightMatrix.value=ce.state.spotLightMatrix,fe.spotLightMap.value=ce.state.spotLightMap,fe.pointShadowMatrix.value=ce.state.pointShadowMatrix),ae.lightProbeGrid=A.state.lightProbeGridArray.length>0,ae.currentProgram=_e,ae.uniformsList=null,_e}function It(I){if(I.uniformsList===null){let Q=I.currentProgram.getUniforms();I.uniformsList=Lr.seqWithValue(Q.seq,I.uniforms)}return I.uniformsList}function vn(I,Q){let pe=j.get(I);pe.outputColorSpace=Q.outputColorSpace,pe.batching=Q.batching,pe.batchingColor=Q.batchingColor,pe.instancing=Q.instancing,pe.instancingColor=Q.instancingColor,pe.instancingMorph=Q.instancingMorph,pe.skinning=Q.skinning,pe.morphTargets=Q.morphTargets,pe.morphNormals=Q.morphNormals,pe.morphColors=Q.morphColors,pe.morphTargetsCount=Q.morphTargetsCount,pe.numClippingPlanes=Q.numClippingPlanes,pe.numIntersection=Q.numClipIntersection,pe.vertexAlphas=Q.vertexAlphas,pe.vertexTangents=Q.vertexTangents,pe.toneMapping=Q.toneMapping}function di(I,Q){if(I.length===0)return null;if(I.length===1)return I[0].texture!==null?I[0]:null;v.setFromMatrixPosition(Q.matrixWorld);for(let pe=0,ae=I.length;pe<ae;pe++){let ce=I[pe];if(ce.texture!==null&&ce.boundingBox.containsPoint(v))return ce}return null}function wi(I,Q,pe,ae,ce){Q.isScene!==!0&&(Q=Te),he.resetTextureUnits();let Qe=Q.fog,st=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial?Q.environment:null,G=z===null?C.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:zt.workingColorSpace,J=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial&&!ae.envMap||ae.isMeshPhongMaterial&&!ae.envMap,te=He.get(ae.envMap||st,J),Ee=ae.vertexColors===!0&&!!pe.attributes.color&&pe.attributes.color.itemSize===4,_e=!!pe.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),fe=!!pe.morphAttributes.position,Ne=!!pe.morphAttributes.normal,Be=!!pe.morphAttributes.color,Je=oi;ae.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(Je=C.toneMapping);let it=pe.morphAttributes.position||pe.morphAttributes.normal||pe.morphAttributes.color,Le=it!==void 0?it.length:0,ue=j.get(ae),pt=A.state.lights;if(ie===!0&&(Z===!0||I!==B)){let _t=I===B&&ae.id===O;$e.setState(ae,I,_t)}let ut=!1;ae.version===ue.__version?(ue.needsLights&&ue.lightsStateVersion!==pt.state.version||ue.outputColorSpace!==G||ce.isBatchedMesh&&ue.batching===!1||!ce.isBatchedMesh&&ue.batching===!0||ce.isBatchedMesh&&ue.batchingColor===!0&&ce._colorsTexture===null||ce.isBatchedMesh&&ue.batchingColor===!1&&ce._colorsTexture!==null||ce.isInstancedMesh&&ue.instancing===!1||!ce.isInstancedMesh&&ue.instancing===!0||ce.isSkinnedMesh&&ue.skinning===!1||!ce.isSkinnedMesh&&ue.skinning===!0||ce.isInstancedMesh&&ue.instancingColor===!0&&ce.instanceColor===null||ce.isInstancedMesh&&ue.instancingColor===!1&&ce.instanceColor!==null||ce.isInstancedMesh&&ue.instancingMorph===!0&&ce.morphTexture===null||ce.isInstancedMesh&&ue.instancingMorph===!1&&ce.morphTexture!==null||ue.envMap!==te||ae.fog===!0&&ue.fog!==Qe||ue.numClippingPlanes!==void 0&&(ue.numClippingPlanes!==$e.numPlanes||ue.numIntersection!==$e.numIntersection)||ue.vertexAlphas!==Ee||ue.vertexTangents!==_e||ue.morphTargets!==fe||ue.morphNormals!==Ne||ue.morphColors!==Be||ue.toneMapping!==Je||ue.morphTargetsCount!==Le||!!ue.lightProbeGrid!=A.state.lightProbeGridArray.length>0)&&(ut=!0):(ut=!0,ue.__version=ae.version);let bt=ue.currentProgram;ut===!0&&(bt=Pt(ae,Q,ce),S&&ae.isNodeMaterial&&S.onUpdateProgram(ae,bt,ue));let Bt=!1,Yt=!1,jt=!1,Mt=bt.getUniforms(),Ht=ue.uniforms;if(M.useProgram(bt.program)&&(Bt=!0,Yt=!0,jt=!0),ae.id!==O&&(O=ae.id,Yt=!0),ue.needsLights){let _t=di(A.state.lightProbeGridArray,ce);ue.lightProbeGrid!==_t&&(ue.lightProbeGrid=_t,Yt=!0)}if(Bt||B!==I){M.buffers.depth.getReversed()&&I.reversedDepth!==!0&&(I._reversedDepth=!0,I.updateProjectionMatrix()),Mt.setValue(V,"projectionMatrix",I.projectionMatrix),Mt.setValue(V,"viewMatrix",I.matrixWorldInverse);let pn=Mt.map.cameraPosition;pn!==void 0&&pn.setValue(V,le.setFromMatrixPosition(I.matrixWorld)),N.logarithmicDepthBuffer&&Mt.setValue(V,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&Mt.setValue(V,"isOrthographic",I.isOrthographicCamera===!0),B!==I&&(B=I,Yt=!0,jt=!0)}if(ue.needsLights&&(pt.state.sunShadowMap.length>0&&Mt.setValue(V,"sunShadowMap",pt.state.sunShadowMap,he),pt.state.directionalShadowMap.length>0&&Mt.setValue(V,"directionalShadowMap",pt.state.directionalShadowMap,he),pt.state.spotShadowMap.length>0&&Mt.setValue(V,"spotShadowMap",pt.state.spotShadowMap,he),pt.state.pointShadowMap.length>0&&Mt.setValue(V,"pointShadowMap",pt.state.pointShadowMap,he)),ce.isSkinnedMesh){Mt.setOptional(V,ce,"bindMatrix"),Mt.setOptional(V,ce,"bindMatrixInverse");let _t=ce.skeleton;_t&&(_t.boneTexture===null&&_t.computeBoneTexture(),Mt.setValue(V,"boneTexture",_t.boneTexture,he))}ce.isBatchedMesh&&(Mt.setOptional(V,ce,"batchingTexture"),Mt.setValue(V,"batchingTexture",ce._matricesTexture,he),Mt.setOptional(V,ce,"batchingIdTexture"),Mt.setValue(V,"batchingIdTexture",ce._indirectTexture,he),Mt.setOptional(V,ce,"batchingColorTexture"),ce._colorsTexture!==null&&Mt.setValue(V,"batchingColorTexture",ce._colorsTexture,he));let Nt=pe.morphAttributes;if((Nt.position!==void 0||Nt.normal!==void 0||Nt.color!==void 0)&&Y.update(ce,pe,bt),(Yt||ue.receiveShadow!==ce.receiveShadow)&&(ue.receiveShadow=ce.receiveShadow,Mt.setValue(V,"receiveShadow",ce.receiveShadow)),(ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial)&&ae.envMap===null&&Q.environment!==null&&(Ht.envMapIntensity.value=Q.environmentIntensity),Ht.dfgLUT!==void 0&&(Ht.dfgLUT.value=f1()),Yt){if(Mt.setValue(V,"toneMappingExposure",C.toneMappingExposure),ue.needsLights&&ti(Ht,jt),Qe&&ae.fog===!0&&ot.refreshFogUniforms(Ht,Qe),ot.refreshMaterialUniforms(Ht,ae,se,$,A.state.transmissionRenderTarget[I.id]),ue.needsLights&&ue.lightProbeGrid){let _t=ue.lightProbeGrid;Ht.probesSH.value=_t.texture,Ht.probesMin.value.copy(_t.boundingBox.min),Ht.probesMax.value.copy(_t.boundingBox.max),Ht.probesResolution.value.copy(_t.resolution)}Lr.upload(V,It(ue),Ht,he)}if(ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(Lr.upload(V,It(ue),Ht,he),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&Mt.setValue(V,"center",ce.center),Mt.setValue(V,"modelViewMatrix",ce.modelViewMatrix),Mt.setValue(V,"normalMatrix",ce.normalMatrix),Mt.setValue(V,"modelMatrix",ce.matrixWorld),ae.uniformsGroups!==void 0){let _t=ae.uniformsGroups;for(let pn=0,Sn=_t.length;pn<Sn;pn++){let Yn=_t[pn];W.update(Yn,bt),W.bind(Yn,bt)}}return bt}function ti(I,Q){I.ambientLightColor.needsUpdate=Q,I.lightProbe.needsUpdate=Q,I.sunLights.needsUpdate=Q,I.sunLightShadows.needsUpdate=Q,I.directionalLights.needsUpdate=Q,I.directionalLightShadows.needsUpdate=Q,I.pointLights.needsUpdate=Q,I.pointLightShadows.needsUpdate=Q,I.spotLights.needsUpdate=Q,I.spotLightShadows.needsUpdate=Q,I.rectAreaLights.needsUpdate=Q,I.hemisphereLights.needsUpdate=Q}function fi(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(I,Q,pe){let ae=j.get(I);ae.__autoAllocateDepthBuffer=I.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),j.get(I.texture).__webglTexture=Q,j.get(I.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:pe,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(I,Q){let pe=j.get(I);pe.__webglFramebuffer=Q,pe.__useDefaultFramebuffer=Q===void 0},this.setRenderTarget=function(I,Q=0,pe=0){z=I,k=Q,H=pe;let ae=null,ce=!1,Qe=!1;if(I){let G=j.get(I);if(G.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(V.FRAMEBUFFER,G.__webglFramebuffer),q.copy(I.viewport),oe.copy(I.scissor),ge=I.scissorTest,M.viewport(q),M.scissor(oe),M.setScissorTest(ge),O=-1;return}else if(G.__webglFramebuffer===void 0)he.setupRenderTarget(I);else if(G.__hasExternalTextures)he.rebindTextures(I,j.get(I.texture).__webglTexture,j.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){let Ee=I.depthTexture;if(G.__boundDepthTexture!==Ee){if(Ee!==null&&j.has(Ee)&&(I.width!==Ee.image.width||I.height!==Ee.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");he.setupDepthRenderbuffer(I)}}let J=I.texture;(J.isData3DTexture||J.isDataArrayTexture||J.isCompressedArrayTexture)&&(Qe=!0);let te=j.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(te[Q])?ae=te[Q][pe]:ae=te[Q],ce=!0):I.samples>0&&he.useMultisampledRTT(I)===!1?ae=j.get(I).__webglMultisampledFramebuffer:Array.isArray(te)?ae=te[pe]:ae=te,q.copy(I.viewport),oe.copy(I.scissor),ge=I.scissorTest}else q.copy(we).multiplyScalar(se).floor(),oe.copy(X).multiplyScalar(se).floor(),ge=Re;if(pe!==0&&(ae=D),M.bindFramebuffer(V.FRAMEBUFFER,ae)&&M.drawBuffers(I,ae),M.viewport(q),M.scissor(oe),M.setScissorTest(ge),ce){let G=j.get(I.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+Q,G.__webglTexture,pe)}else if(Qe){let G=Q;for(let J=0;J<I.textures.length;J++){let te=j.get(I.textures[J]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+J,te.__webglTexture,pe,G)}}else if(I!==null&&pe!==0){let G=j.get(I.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,G.__webglTexture,pe)}O=-1};function ws(I){let Q=j.get(I);return(Q.__readFormat!==I.format||Q.__readType!==I.type)&&(Q.__readFormat=I.format,Q.__readType=I.type,Q.__formatReadable=N.textureFormatReadable(I.format),Q.__typeReadable=N.textureTypeReadable(I.type)),Q}this.readRenderTargetPixels=function(I,Q,pe,ae,ce,Qe,st,G=0){if(!(I&&I.isWebGLRenderTarget)){St("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let J=j.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&st!==void 0&&(J=J[st]),J){M.bindFramebuffer(V.FRAMEBUFFER,J);try{let te=I.textures[G],Ee=te.format,_e=te.type;I.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+G);let fe=ws(te);if(fe.__formatReadable===!1){St("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(fe.__typeReadable===!1){St("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=I.width-ae&&pe>=0&&pe<=I.height-ce&&V.readPixels(Q,pe,ae,ce,Ye.convert(Ee),Ye.convert(_e),Qe)}finally{let te=z!==null?j.get(z).__webglFramebuffer:null;M.bindFramebuffer(V.FRAMEBUFFER,te)}}},this.readRenderTargetPixelsAsync=async function(I,Q,pe,ae,ce,Qe,st,G=0){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let J=j.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&st!==void 0&&(J=J[st]),J)if(Q>=0&&Q<=I.width-ae&&pe>=0&&pe<=I.height-ce){M.bindFramebuffer(V.FRAMEBUFFER,J);let te=I.textures[G],Ee=te.format,_e=te.type;I.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+G);let fe=ws(te);if(fe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(fe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ne=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,Ne),V.bufferData(V.PIXEL_PACK_BUFFER,Qe.byteLength,V.STREAM_READ),V.readPixels(Q,pe,ae,ce,Ye.convert(Ee),Ye.convert(_e),0),V.bindBuffer(V.PIXEL_PACK_BUFFER,null);let Be=z!==null?j.get(z).__webglFramebuffer:null;M.bindFramebuffer(V.FRAMEBUFFER,Be);let Je=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await kd(V,Je,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,Ne),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Qe),V.bindBuffer(V.PIXEL_PACK_BUFFER,null),V.deleteBuffer(Ne),V.deleteSync(Je),Qe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(I,Q=null,pe=0){let ae=Math.pow(2,-pe),ce=Math.floor(I.image.width*ae),Qe=Math.floor(I.image.height*ae),st=Q!==null?Q.x:0,G=Q!==null?Q.y:0;he.setTexture2D(I,0),V.copyTexSubImage2D(V.TEXTURE_2D,pe,0,0,st,G,ce,Qe),M.unbindTexture()},this.copyTextureToTexture=function(I,Q,pe=null,ae=null,ce=0,Qe=0){let st,G,J,te,Ee,_e,fe,Ne,Be,Je=I.isCompressedTexture?I.mipmaps[Qe]:I.image;if(pe!==null)st=pe.max.x-pe.min.x,G=pe.max.y-pe.min.y,J=pe.isBox3?pe.max.z-pe.min.z:1,te=pe.min.x,Ee=pe.min.y,_e=pe.isBox3?pe.min.z:0;else{let Ht=Math.pow(2,-ce);st=Math.floor(Je.width*Ht),G=Math.floor(Je.height*Ht),I.isDataArrayTexture?J=Je.depth:I.isData3DTexture?J=Math.floor(Je.depth*Ht):J=1,te=0,Ee=0,_e=0}ae!==null?(fe=ae.x,Ne=ae.y,Be=ae.z):(fe=0,Ne=0,Be=0);let it=Ye.convert(Q.format),Le=Ye.convert(Q.type),ue;Q.isData3DTexture?(he.setTexture3D(Q,0),ue=V.TEXTURE_3D):Q.isDataArrayTexture||Q.isCompressedArrayTexture?(he.setTexture2DArray(Q,0),ue=V.TEXTURE_2D_ARRAY):(he.setTexture2D(Q,0),ue=V.TEXTURE_2D),M.activeTexture(V.TEXTURE0),M.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,Q.flipY),M.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),M.pixelStorei(V.UNPACK_ALIGNMENT,Q.unpackAlignment);let pt=M.getParameter(V.UNPACK_ROW_LENGTH),ut=M.getParameter(V.UNPACK_IMAGE_HEIGHT),bt=M.getParameter(V.UNPACK_SKIP_PIXELS),Bt=M.getParameter(V.UNPACK_SKIP_ROWS),Yt=M.getParameter(V.UNPACK_SKIP_IMAGES);M.pixelStorei(V.UNPACK_ROW_LENGTH,Je.width),M.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Je.height),M.pixelStorei(V.UNPACK_SKIP_PIXELS,te),M.pixelStorei(V.UNPACK_SKIP_ROWS,Ee),M.pixelStorei(V.UNPACK_SKIP_IMAGES,_e);let jt=I.isDataArrayTexture||I.isData3DTexture,Mt=Q.isDataArrayTexture||Q.isData3DTexture;if(I.isDepthTexture){let Ht=j.get(I),Nt=j.get(Q),_t=j.get(Ht.__renderTarget),pn=j.get(Nt.__renderTarget);M.bindFramebuffer(V.READ_FRAMEBUFFER,_t.__webglFramebuffer),M.bindFramebuffer(V.DRAW_FRAMEBUFFER,pn.__webglFramebuffer);for(let Sn=0;Sn<J;Sn++)jt&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,j.get(I).__webglTexture,ce,_e+Sn),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,j.get(Q).__webglTexture,Qe,Be+Sn)),V.blitFramebuffer(te,Ee,st,G,fe,Ne,st,G,V.DEPTH_BUFFER_BIT,V.NEAREST);M.bindFramebuffer(V.READ_FRAMEBUFFER,null),M.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(ce!==0||I.isRenderTargetTexture||j.has(I)){let Ht=j.get(I),Nt=j.get(Q);M.bindFramebuffer(V.READ_FRAMEBUFFER,P),M.bindFramebuffer(V.DRAW_FRAMEBUFFER,F);for(let _t=0;_t<J;_t++)jt?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ht.__webglTexture,ce,_e+_t):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Ht.__webglTexture,ce),Mt?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Nt.__webglTexture,Qe,Be+_t):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Nt.__webglTexture,Qe),ce!==0?V.blitFramebuffer(te,Ee,st,G,fe,Ne,st,G,V.COLOR_BUFFER_BIT,V.NEAREST):Mt?V.copyTexSubImage3D(ue,Qe,fe,Ne,Be+_t,te,Ee,st,G):V.copyTexSubImage2D(ue,Qe,fe,Ne,te,Ee,st,G);M.bindFramebuffer(V.READ_FRAMEBUFFER,null),M.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Mt?I.isDataTexture||I.isData3DTexture?V.texSubImage3D(ue,Qe,fe,Ne,Be,st,G,J,it,Le,Je.data):Q.isCompressedArrayTexture?V.compressedTexSubImage3D(ue,Qe,fe,Ne,Be,st,G,J,it,Je.data):V.texSubImage3D(ue,Qe,fe,Ne,Be,st,G,J,it,Le,Je):I.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Qe,fe,Ne,st,G,it,Le,Je.data):I.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Qe,fe,Ne,Je.width,Je.height,it,Je.data):V.texSubImage2D(V.TEXTURE_2D,Qe,fe,Ne,st,G,it,Le,Je);M.pixelStorei(V.UNPACK_ROW_LENGTH,pt),M.pixelStorei(V.UNPACK_IMAGE_HEIGHT,ut),M.pixelStorei(V.UNPACK_SKIP_PIXELS,bt),M.pixelStorei(V.UNPACK_SKIP_ROWS,Bt),M.pixelStorei(V.UNPACK_SKIP_IMAGES,Yt),Qe===0&&Q.generateMipmaps&&V.generateMipmap(ue),M.unbindTexture()},this.initRenderTarget=function(I){j.get(I).__webglFramebuffer===void 0&&he.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?he.setTextureCube(I,0):I.isData3DTexture?he.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?he.setTexture2DArray(I,0):he.setTexture2D(I,0),M.unbindTexture()},this.resetState=function(){k=0,H=0,z=null,M.reset(),qe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=zt._getDrawingBufferColorSpace(e),t.unpackColorSpace=zt._getUnpackColorSpace()}};var Et=(i,e,t)=>Math.min(t,Math.max(e,i)),dt=(i,e,t)=>i+(e-i)*t,ft=(i,e,t)=>{let n=Et((t-i)/(e-i),0,1);return n*n*(3-2*n)};function Kn(i){let e=i>>>0;return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Pn(i,e,t=0){let n=Math.imul(i|0,374761393)+Math.imul(e|0,668265263)+Math.imul(t|0,2147483647);return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}function p1(i,e,t=1024,n=1024,s=0){let r=Math.floor(i),a=Math.floor(e),o=i-r,c=e-a,l=o*o*(3-2*o),u=c*c*(3-2*c),p=m=>(m%t+t)%t,f=m=>(m%n+n)%n,h=Pn(p(r),f(a),s),d=Pn(p(r+1),f(a),s),_=Pn(p(r),f(a+1),s),g=Pn(p(r+1),f(a+1),s);return dt(dt(h,d,l),dt(_,g,l),u)}function sn(i,e,t=4,n=1024,s=1024,r=0){let a=.5,o=1,c=0,l=0;for(let u=0;u<t;u++)c+=a*p1(i*o,e*o,n*o,s*o,r+u*17),l+=a,a*=.5,o*=2;return c/l}var Rf=()=>window.innerWidth<760||/Android|iPhone|iPad|iPod/i.test(navigator.userAgent);function Ws(i,e={}){let t=i.attributes.position,n=i.attributes.normal,s=i.attributes.uv,r=e.ox||0,a=e.oy||0,o=e.oz||0;for(let c=0;c<t.count;c++){let l=n.getX(c),u=n.getY(c),p=n.getZ(c),f=t.getX(c)+r,h=t.getY(c)+a,d=t.getZ(c)+o,_,g;Math.abs(p)>.5?(_=p>0?f:-f,g=h):Math.abs(l)>.5?(_=l>0?-d:d,g=h):(e.swap?(_=d,g=f):(_=f,g=d),u<0&&(g=-g)),s.setXY(c,_,g)}s.needsUpdate=!0}var Cf=4,oh=1,Pf=i=>{Cf=Math.min(8,i)},If=i=>{oh=i>=2?1:.5},xc=()=>oh;function ah(i,e,t){let n=new gi(i,e,e,On,An);return n.wrapS=n.wrapT=En,n.magFilter=yn,n.minFilter=qi,n.generateMipmaps=!0,n.colorSpace=t?Kt:Ni,n.anisotropy=Cf,n.needsUpdate=!0,n}function as(i,e,t,n){i=Math.max(128,Math.round(i*oh));let s=i*i,r=new Uint8Array(s*4),a=new Uint8Array(s*4),o=new Uint8Array(s*4),c=new Float32Array(s);for(let h=0;h<i;h++)for(let d=0;d<i;d++){let _=h*i+d,g=n((d+.5)/i,(h+.5)/i);r[_*4]=Et(g[0],0,1)*255,r[_*4+1]=Et(g[1],0,1)*255,r[_*4+2]=Et(g[2],0,1)*255,r[_*4+3]=255,c[_]=g[3],a[_*4]=255,a[_*4+1]=Et(g[4],0,1)*255,a[_*4+2]=Et(g[5]||0,0,1)*255,a[_*4+3]=255}let l=e/i;for(let h=0;h<i;h++)for(let d=0;d<i;d++){let _=h*i+d,g=(c[h*i+(d+1)%i]-c[h*i+(d-1+i)%i])*t/(2*l),m=(c[(h+1)%i*i+d]-c[(h-1+i)%i*i+d])*t/(2*l),E=Math.hypot(g,m,1);o[_*4]=(-g/E*.5+.5)*255,o[_*4+1]=(-m/E*.5+.5)*255,o[_*4+2]=(1/E*.5+.5)*255,o[_*4+3]=255}let u=ah(r,i,!0),p=ah(o,i,!1),f=ah(a,i,!1);return[u,p,f].forEach(h=>h.repeat.set(1/e,1/e)),{map:u,normalMap:p,rmMap:f,tile:e}}var $a=(i,e)=>[i[0]*e,i[1]*e,i[2]*e];function Df(i=[.2,.22,.25]){return as(512,.6,.02,(e,t)=>{let n=t*3,s=Math.floor(n),r=n-s,a=sn(e*5+s*3.1,r*22,3,5,22,s),o,c=1;r>.94?(o=0,c=.45):o=.28+.72*Math.pow(1-r/.94,1.4);let l=(.9+.2*Pn(s,3,5))*(.9+.2*a)*c;return[...$a(i,l),o+(a-.5)*.08,.72+.2*a,0]})}function Lf(i=[.13,.145,.16]){return as(512,1.2,.025,(e,t)=>{let n=e*4,s=Math.floor(n),r=n-s,a=Math.min(r,1-r)*.3,o=sn(s*5.1+r*3,t*7,3,20,7,s),c=.4+(o-.5)*.1,l=1;a<.026?c=1:a<.05&&(c=0,l=.5);let u=(.92+.16*Pn(s,1,9))*(.9+.2*o)*l;return[...$a(i,u),c,.7+.2*o,0]})}function Uf(i=[.1,.105,.115]){return as(512,.9,.018,(e,t)=>{let n=e*2%1,s=Math.min(n,1-n)*.45,r=s<.028?Math.pow(1-s/.028,.7):0,a=(sn(e*3,t*3,3,3,3,4)-.5)*.1,o=.34+.12*sn(e*8,t*40,2,8,40,2);return[...$a(i,1+(sn(e*2,t*6,2,2,6,11)-.5)*.25+r*.35),.1+r+a,o,.8]})}function vc(i=[.66,.43,.26],e=[.4,.24,.13]){return as(512,.6,.01,(t,n)=>{let s=sn(t*3,n*1.2,3,3,2,21)*3,r=.5+.5*Math.sin((t*10+s)*Math.PI*2/1),a=sn(t*18,n*2.4,3,18,2,33),o=Et(.25+r*.35+a*.5,0,1),c=t*6%1,l=c<.012||c>.988?.45:1;return[dt(e[0],i[0],o)*l,dt(e[1],i[1],o)*l,dt(e[2],i[2],o)*l,.55+a*.3-(l<1?.5:0),.55+.15*a,0]})}function Nf(i=[.56,.55,.53]){return as(512,1.2,.012,(e,t)=>{let n=t*8,s=Math.floor(n),r=n-s,a=Pn(s,7,2)*40,o=sn(e*4+a,r*10,3,4,10,s),c=Pn(Math.floor(e*512),Math.floor(t*512),3)>.985?.6:1,l=r<.04?.7:1,u=(.9+.2*o)*c*l*(.94+.12*Pn(s,4,1));return[...$a(i,u),.5+(o-.5)*.4-(r<.04?.3:0),.92,0]})}function Ff(){return as(512,1,.045,(i,e)=>{let t=i*5,n=e*4,s=Math.floor(t),r=Math.floor(n),a=9,o=9,c=0;for(let g=-1;g<=1;g++)for(let m=-1;m<=1;m++){let E=s+m,T=r+g,v=(E%5+5)%5,y=(T%4+4)%4,A=E+.15+Pn(v,y,1)*.7,w=T+.15+Pn(v,y,2)*.7,x=Math.hypot((t-A)*1,(n-w)*1.25);x<a?(o=a,a=x,c=v*31+y):x<o&&(o=x)}let l=o-a,u=ft(.04,.3,l),p=Pn(c,5,3),f=.4+p*.2,h=Pn(c,9,1)*.06,d=.9+.2*sn(i*12,e*12,3,12,12,c),_=u>.02?1:.35;return[(f+h)*d*_,(f+h*.6)*d*_,(f-.02)*d*_,u*(.7+.3*p),.88,0]})}function Of(){return as(512,5,.06,(i,e)=>{let t=sn(i*5,e*5,4,5,5,71),n=sn(i*60,e*60,2,60,60,72),s=Pn(Math.floor(i*512),Math.floor(e*512),8)>.988,r=.93+.07*t;return[.9*r,.94*r,1*r,t*.8+n*.2,s?.12:.78+n*.15,0]})}function Bf(i=[.13,.135,.145]){return as(256,3,.01,(e,t)=>{let n=Pn(Math.floor(e*256),Math.floor(t*256),12),s=sn(e*6,t*6,3,6,6,9),r=.8+.5*n*n+.25*s;return[...$a(i,r),n*.5+s*.3,.88-n*.1,0]})}function Hf(){return as(512,4,.05,(i,e)=>{let t=sn(i*70,e*70,2,70,70,3),n=sn(i*4,e*4,4,4,4,5),s=sn(i*9,e*9,3,9,9,6),r=.75+.5*t;return[dt(.22,.4,s)*r+n*.05,dt(.3,.4,s)*r*(.85+.3*n),dt(.1,.16,s)*r,t,.92,0]})}function zf(i,e){let t=new Uint8Array(i*i*4);for(let s=0;s<i;s++)for(let r=0;r<i;r++){let a=(r+.5)/i,o=(s+.5)/i,c=.45+.55*sn(a*6,o*4,4,1024,1024,41);c=ft(.2,.95,c),c*=.35+.65*ft(0,.18,Math.min(a,1-a,o,1-o)+.04*sn(a*30,o*30,2,1024,1024,5)),e&&(c*=e(a,o));let l=(s*i+r)*4;t[l]=255,t[l+1]=Et(c,0,1)*255,t[l+2]=255,t[l+3]=255}let n=new gi(t,i,i,On,An);return n.magFilter=n.minFilter=yn,n.generateMipmaps=!1,n.needsUpdate=!0,n}function Gf(i="living"){let e=document.createElement("canvas");e.width=160,e.height=160;let t=e.getContext("2d"),n={living:["#6b4426","#d99a55","#f5c27c"],kitchen:["#7a5a3a","#e6b673","#fff0cf"],bed:["#4a3a52","#c78b7a","#f1c6a0"],bath:["#4f6670","#a9c7cf","#eaf6f4"],hall:["#5a4128","#c58c52","#efba78"]}[i]||["#6b4426","#d99a55","#f5c27c"],s=t.createLinearGradient(0,0,0,160);s.addColorStop(0,n[0]),s.addColorStop(.55,n[1]),s.addColorStop(1,n[2]),t.fillStyle=s,t.fillRect(0,0,160,160);let r=i==="kitchen"?80:40+Math.random()*80,a=t.createRadialGradient(r,52,2,r,52,70);if(a.addColorStop(0,"rgba(255,246,214,.95)"),a.addColorStop(1,"rgba(255,220,150,0)"),t.fillStyle=a,t.fillRect(0,0,160,160),t.fillStyle="rgba(30,18,10,.55)",i==="living"&&(t.fillRect(14,108,92,52),t.fillRect(14,88,92,22),t.fillRect(112,70,6,90)),i==="kitchen"){t.fillRect(0,100,160,60),t.fillStyle="rgba(30,18,10,.4)";for(let l=0;l<4;l++)t.fillRect(8+l*38,20,30,40)}i==="bed"&&(t.fillRect(20,96,120,64),t.fillRect(20,70,14,40)),i==="bath"&&(t.fillStyle="rgba(20,40,48,.35)",t.fillRect(0,112,160,48),t.fillRect(104,40,40,36)),i==="hall"&&(t.fillRect(0,128,160,32),t.fillRect(70,30,36,90));let o=t.createLinearGradient(0,0,40,0);o.addColorStop(0,"rgba(40,24,16,.7)"),o.addColorStop(1,"rgba(40,24,16,0)"),t.fillStyle=o,t.fillRect(0,0,40,160),t.save(),t.translate(160,0),t.scale(-1,1),t.fillStyle=o,t.fillRect(0,0,40,160),t.restore();let c=new Mn(e);return c.colorSpace=Kt,c}function Fr(i="rgba(255,190,120,0.9)",e="rgba(255,150,80,0)"){let t=document.createElement("canvas");t.width=t.height=128;let n=t.getContext("2d"),s=n.createRadialGradient(64,64,0,64,64,64);s.addColorStop(0,i),s.addColorStop(.35,i.replace(/[\d.]+\)$/,"0.35)")),s.addColorStop(1,e),n.fillStyle=s,n.fillRect(0,0,128,128);let r=new Mn(t);return r.colorSpace=Kt,r}function Vf(){let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d"),t=e.createRadialGradient(64,64,20,64,64,64);t.addColorStop(0,"rgba(244,189,126,0.55)"),t.addColorStop(1,"rgba(244,189,126,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),e.beginPath(),e.arc(64,64,30,0,Math.PI*2),e.fillStyle="#d98a4e",e.fill(),e.lineWidth=3,e.strokeStyle="#f4bd7e",e.stroke(),e.beginPath(),e.moveTo(49,79),e.lineTo(64,49),e.lineTo(79,79),e.lineWidth=6.5,e.strokeStyle="#121311",e.lineJoin="miter",e.stroke(),e.fillStyle="#121311",e.fillRect(60.5,64.5,7,7);let n=new Mn(i);return n.colorSpace=Kt,n}function os(i="rgba(255,255,255,0.6)"){let e=document.createElement("canvas");e.width=e.height=64;let t=e.getContext("2d"),n=t.createRadialGradient(32,32,0,32,32,32);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.25,i),n.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=n,t.fillRect(0,0,64,64);let s=new Mn(e);return s.colorSpace=Kt,s}function kf(){let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d");for(let n=0;n<9;n++){let s=64+(Pn(n,1,3)-.5)*40,r=64+(Pn(n,2,3)-.5)*40,a=22+Pn(n,3,3)*22,o=e.createRadialGradient(s,r,0,s,r,a);o.addColorStop(0,"rgba(255,255,255,0.28)"),o.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=o,e.fillRect(0,0,128,128)}let t=new Mn(i);return t.colorSpace=Kt,t}function Wf(){let i={lap:Df([.3,.33,.37]),bb:Lf([.2,.22,.25]),seam:Uf([.1,.105,.115]),cedar:vc(),walnut:vc([.46,.29,.17],[.25,.15,.09]),oak:vc([.8,.64,.44],[.56,.4,.25]),form:Nf(),stone:Ff(),snow:Of(),asphalt:Bf(),grass:Hf()},e=(a,o={})=>new Vt({map:a.map,normalMap:a.normalMap,roughnessMap:a.rmMap,metalnessMap:a.rmMap,roughness:1,metalness:1,...o}),t=(a,o=.8,c=0,l={})=>new Vt({color:a,roughness:o,metalness:c,...l}),n=(a,o)=>(a.userData.shell=!0,a.userData.th=o,a),s=(a,o)=>(a.userData.th=o,a),r={lap:n(e(i.lap,{normalScale:new Ie(1,1)}),[.3,.05,.3]),bb:n(e(i.bb,{normalScale:new Ie(1,1)}),[.3,.05,.3]),roof:n(e(i.seam,{normalScale:new Ie(1.2,1.2),envMapIntensity:1.3}),[.4,.12]),cedar:n(e(i.cedar),[.42,0,.25]),walnut:n(e(i.walnut),[.52]),oak:n(e(i.oak),[.55]),form:n(e(i.form),[.33]),stone:n(e(i.stone),[.33]),drywall:n(t(14209475,.95),[.6]),trim:n(t(855568,.42,.55,{envMapIntensity:1.2}),[.32,0,.2]),reveal:n(t(14275785,.85),[.45]),slab:n(t(7828331,1),[.35]),concrete:n(t(7301987,1),[.33]),floor:n(t(10518364,.7),[.55]),door:n(e(i.walnut),[.52]),insul:n(t(13087881,1),[.5]),counter:n(t(2959910,.5,.05),[.55]),snowRoof:n(t(15265527,.85,0,{alphaToCoverage:!0}),[.03]),ice:s(new jn({color:13625845,roughness:.08,metalness:0,transparent:!0,opacity:.85,clearcoat:1,envMapIntensity:1.6}),[.1]),white:s(t(14605267,.5,.05),[.6]),steel:s(t(10133670,.35,.85),[.55]),pvc:s(t(15131612,.4),[.24]),pipe:s(t(6255750,.5,.4),[.45]),copper:s(t(14256718,.28,.9,{envMapIntensity:1.4}),[.68]),solar:s(new jn({color:726832,roughness:.16,metalness:.7,clearcoat:1,clearcoatRoughness:.06,envMapIntensity:1.5}),[.17]),solarFrame:s(t(11186616,.4,.9),[.3]),neighbor:s(e(i.lap,{color:9080210}),[.26,.04,.24]),neighborRoof:s(e(i.seam,{color:6711920}),[.4,.12]),asphalt:s(e(i.asphalt),[.3]),pavement:s(t(9144706,.95),[.3]),sconce:s(new Vt({color:1709070,emissive:16756833,emissiveIntensity:3,roughness:.4}),[.9]),lampHead:s(new Vt({color:2236962,emissive:16761466,emissiveIntensity:4,roughness:.4}),[.95]),pole:s(t(1776928,.5,.7),[.3]),spruce:s(new Vt({vertexColors:!0,roughness:.92,metalness:0}),[.13]),trunk:s(t(2760471,1),[.18]),shrub:s(new Vt({vertexColors:!0,roughness:1}),[.14]),fabric:s(t(6970708,.95),[.5]),fabric2:s(t(4016726,.95),[.5]),leather:s(t(8014634,.55),[.5]),ceramic:s(t(15921129,.18,0),[.45]),mirror:s(t(12570840,.05,.9),[.4]),black:s(t(1381653,.5,.3),[.4]),warmLight:s(new Vt({color:2236440,emissive:16767392,emissiveIntensity:5,roughness:.6}),[1])};return["lap","bb","roof","drywall","form","stone","trim","cedar","door","walnut","reveal","snowRoof"].forEach(a=>{r[a].userData.wall=!0}),Object.values(r).forEach(a=>{a.userData.th===void 0&&(a.userData.th=[.3])}),{M:r,T:i}}function lh(i){let e=new Vt({color:395533,roughness:.05,metalness:.25,emissive:16777215,emissiveMap:i,emissiveIntensity:0,envMapIntensity:1.6});return e.userData.shell=!0,e.userData.pane=!0,e.userData.wall=!0,e.userData.th=[.86],e}var _c=[[-90,"#04060d","#0c1124"],[-20,"#05070f","#10162b"],[-14,"#080d20","#1a2140"],[-9,"#0f1838","#33406a"],[-5,"#1a2650","#7a6f94"],[-2,"#27345e","#d98d62"],[1,"#35508a","#eba66f"],[5,"#43689f","#e8bf8f"],[12,"#4a78b0","#dccfb4"],[25,"#4a80ba","#c7dcec"],[50,"#3f78b8","#b4d2e8"],[90,"#3a72b0","#accce6"]],m1=`varying vec3 vDir;
void main(){ vDir = normalize(position); vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_Position = p.xyww; }`,g1=`precision highp float;
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
}`;function Xf(i,e){let t={uTop:{value:new Ze},uHor:{value:new Ze},uLow:{value:new Ze},uSunDir:{value:new L(0,1,0)},uSunCol:{value:new Ze(1,.8,.6)},uMoonDir:{value:new L(.3,.55,-.78).normalize()},uSunI:{value:0},uMoonI:{value:0},uTime:{value:0},uCloud:{value:.4},uAurora:{value:0},uThermal:{value:0},uSnowLine:{value:0}},n=new Xt({uniforms:t,vertexShader:m1,fragmentShader:g1,side:Nn,depthWrite:!1,depthTest:!1}),s=new Pe(new Gn(500,48,28),n);s.renderOrder=-10,s.frustumCulled=!1,s.userData.noThermal=!0,s.userData.noAO=!0,e.add(s);let r=Kn(7),a=1500,o=new Float32Array(a*3);for(let y=0;y<a;y++){let A=r()*Math.PI*2,w=Math.acos(1-r()*1),x=480;o[y*3]=Math.sin(w)*Math.cos(A)*x,o[y*3+1]=Math.cos(w)*x,o[y*3+2]=Math.sin(w)*Math.sin(A)*x}let c=new Lt;c.setAttribute("position",new Tt(o,3));let l=new Tn({color:14674175,size:1.7,sizeAttenuation:!1,transparent:!0,opacity:0,fog:!1,depthWrite:!1}),u=new Un(c,l);u.frustumCulled=!1,u.renderOrder=-9,u.userData.noAO=!0,e.add(u);function p(y,A,w){let x=document.createElement("canvas");x.width=4096,x.height=256;let b=x.getContext("2d"),C=Kn(y);b.filter="blur(1.4px)";let U=Array.from({length:8},()=>C()*6.28);b.clearRect(0,0,2048,256),b.beginPath(),b.moveTo(0,256);let S=[3,7,15,31,63],D=[.5,.28,.15,.08*w,.045*w];for(let k=0;k<=4096;k+=2){let H=k/4096*Math.PI*2,z=0;for(let O=0;O<5;O++)z+=D[O]*Math.pow(1-Math.abs(Math.sin(H*S[O]+U[O])),1.6);b.lineTo(k,256-Et(z/1.06,0,1)*A)}b.lineTo(4096,256),b.closePath();let P=b.createLinearGradient(0,256-A,0,256);P.addColorStop(0,"rgba(255,255,255,1)"),P.addColorStop(.3,"rgba(232,236,248,1)"),P.addColorStop(.62,"rgba(120,132,160,1)"),P.addColorStop(1,"rgba(66,74,96,0)"),b.fillStyle=P,b.fill();let F=new Mn(x);return F.colorSpace=Kt,F.wrapS=En,F.anisotropy=4,F}function f(y){let A=document.createElement("canvas");A.width=2048,A.height=128;let w=A.getContext("2d"),x=Kn(y);w.clearRect(0,0,2048,128),w.fillStyle="rgba(255,255,255,1)";for(let C=0;C<2048;C+=3){let U=34+x()*40+Math.sin(C*.01)*10,S=6+x()*7;w.beginPath(),w.moveTo(C-S,128),w.lineTo(C,128-U),w.lineTo(C+S,128),w.fill()}w.fillRect(0,100,2048,28);let b=new Mn(A);return b.colorSpace=Kt,b.wrapS=En,b}let h=[{tex:p(3,220,1),R:450,h:190,y:40,k:.8,mix:.86},{tex:p(11,170,.8),R:360,h:120,y:16,k:.55,mix:.68},{tex:f(5),R:300,h:34,y:8,k:.22,mix:.2}].map(y=>{let A=new en({map:y.tex,transparent:!0,side:Nn,depthWrite:!1,fog:!1,color:4478327}),w=new Pe(new $t(y.R,y.R,y.h,96,1,!0),A);return w.position.y=y.y,w.renderOrder=-8,w.frustumCulled=!1,w.userData.noThermal=!0,w.userData.noAO=!0,e.add(w),{...y,mat:A,mesh:w}}),d=new Ur(i),_=new Ls,g=new Pe(new Gn(50,32,16),n.clone());g.material.uniforms=t,g.material.depthTest=!0,_.add(g);let m=null,E="",T=new Ze,v=new Ze;return{dome:s,mat:n,U:t,stars:u,horizon:new Ze,zenith:new Ze,update(y,A){let w=Et(y.elev,-90,90),x=0;for(;x<_c.length-2&&_c[x+1][0]<=w;)x++;let[b,C,U]=_c[x],[S,D,P]=_c[x+1],F=ft(0,1,(w-b)/(S-b));t.uTop.value.copy(T.set(C)).lerp(v.set(D),F),t.uHor.value.copy(T.set(U)).lerp(v.set(P),F),y.seasonTint&&(t.uTop.value.lerp(y.seasonTint.top,y.seasonTint.k),t.uHor.value.lerp(y.seasonTint.hor,y.seasonTint.k)),t.uLow.value.copy(t.uHor.value).multiplyScalar(.55+.25*y.daylight).lerp(T.set(y.snowy?7174806:2764834),.18+.2*y.daylight),t.uLow.value.multiplyScalar(1-.82*(y.voidK||0)),t.uSunDir.value.copy(y.sunDir);let k=1-ft(0,.5,y.sunDir.y);t.uSunCol.value.setRGB(1,dt(.93,.56,k),dt(.84,.32,k)),t.uSunI.value=ft(-.14,.04,y.sunDir.y)*dt(1,1.4,k),t.uMoonI.value=(1-y.daylight)*.9,t.uTime.value=A,t.uCloud.value=y.cloud??.4,t.uAurora.value=y.aurora||0,t.uThermal.value=y.thermal||0,this.horizon.copy(t.uHor.value),this.zenith.copy(t.uTop.value),l.opacity=Et((1-y.daylight*1.2)*.95,0,1)*(1-(y.thermal||0)),h.forEach(H=>{H.mat.color.copy(t.uHor.value).lerp(t.uTop.value,.12).multiplyScalar(H.k*(.55+.7*y.daylight)).lerp(T.set(16777215),0).multiplyScalar(1),H.mat.color.lerp(t.uHor.value,1-H.mix),H.mat.color.lerp(v.set(2101306),(y.thermal||0)*.9)})},follow(y){s.position.copy(y),u.position.copy(y),h.forEach(A=>{A.mesh.position.x=y.x,A.mesh.position.z=y.z})},refreshEnv(y){let A=[t.uTop.value.getHexString(),t.uHor.value.getHexString(),t.uSunI.value.toFixed(2),t.uAurora.value.toFixed(1),t.uThermal.value.toFixed(1),t.uSunDir.value.x.toFixed(2),t.uSunDir.value.y.toFixed(2)].join("|");if(!y&&A===E)return;E=A;let w=m;m=d.fromScene(_,.015,.1,200,{size:128}),e.environment=m.texture,w&&w.dispose()}}}var Ji={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Fn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},x1=new _s(-1,1,1,-1,0,1),ch=class extends Lt{constructor(){super(),this.setAttribute("position",new Dt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Dt([0,2,0,0,2,0],2))}},v1=new ch,yi=class{constructor(e){this._mesh=new Pe(v1,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,x1)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Or=class extends Fn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Xt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Jn.clone(e.uniforms),this.material=new Xt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new yi(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Ja=class extends Fn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},yc=class extends Fn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Mc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Ie);this._width=n.width,this._height=n.height,t=new an(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:fn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Or(Ji),this.copyPass.material.blending=xn,this.timer=new Aa}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Ja!==void 0&&(a instanceof Ja?n=!0:a instanceof yc&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Ie);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Sc=class extends Fn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Ze}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var qf={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ze(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Br=class i extends Fn{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Ie(e.x,e.y):new Ie(256,256),this.clearColor=new Ze(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new an(r,a,{type:fn,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let p=new an(r,a,{type:fn,depthBuffer:!1});p.texture.name="UnrealBloomPass.h"+u,p.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(p);let f=new an(r,a,{type:fn,depthBuffer:!1});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}let o=qf;this.highPassUniforms=Jn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Xt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let c=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Ie(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Jn.clone(Ji.uniforms),this.blendMaterial=new Xt({uniforms:this.copyUniforms,vertexShader:Ji.vertexShader,fragmentShader:Ji.fragmentShader,premultipliedAlpha:!0,blending:Qt,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ze,this._oldClearAlpha=1,this._basic=new en,this._fsQuad=new yi(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Ie(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let s=[],r=[];for(let a=1;a<e;a+=2){let o=t[a],c=a+1<e?t[a+1]:0,l=o+c;s.push((a*o+(a+1)*c)/l),r.push(l)}return new Xt({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new Ie(.5,.5)},direction:{value:new Ie(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new Xt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};Br.BlurDirectionX=new Ie(1,0);Br.BlurDirectionY=new Ie(0,1);var Ka={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Ec=class extends Fn{constructor(){super(),this.isOutputPass=!0,this.uniforms=Jn.clone(Ka.uniforms),this.material=new Tr({name:Ka.name,uniforms:this.uniforms,vertexShader:Ka.vertexShader,fragmentShader:Ka.fragmentShader}),this._fsQuad=new yi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},zt.getTransfer(this._outputColorSpace)===Zt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Ia?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Da?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===La?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ss?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Na?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Fa?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Ua&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Qa={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Ie},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new mt},cameraProjectionMatrixInverse:{value:new mt},cameraWorldMatrix:{value:new mt},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new L(-1,-1,-1)},sceneBoxMax:{value:new L(1,1,1)}},vertexShader:`

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
		}`},ja={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},bc={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function Yf(i=5){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=_1(e),n=t.length,s=new Uint8Array(n*4);for(let a=0;a<n;++a){let o=t[a],c=2*Math.PI*o/n,l=new L(Math.cos(c),Math.sin(c),0).normalize();s[a*4]=(l.x*.5+.5)*255,s[a*4+1]=(l.y*.5+.5)*255,s[a*4+2]=127,s[a*4+3]=255}let r=new gi(s,e,e);return r.wrapS=En,r.wrapT=En,r.needsUpdate=!0,r}function _1(i){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let a=1;a<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),n[s*e+r]!==0){r-=2,s++;continue}else n[s*e+r]=a++;r++,s--}return n}var eo={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:uh(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Ie},cameraProjectionMatrixInverse:{value:new mt},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function uh(i,e,t){let n=y1(i,e,t),s="vec3[SAMPLES](";for(let r=0;r<i;r++){let a=n[r];s+=`vec3(${a.x}, ${a.y}, ${a.z})${r<i-1?",":")"}`}return s}function y1(i,e,t){let n=[];for(let s=0;s<i;s++){let r=2*Math.PI*e*s/i,a=Math.pow(s/(i-1),t);n.push(new L(Math.cos(r),Math.sin(r),a))}return n}var Tc=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,s,r,a=.5*(Math.sqrt(3)-1),o=(e+t)*a,c=Math.floor(e+o),l=Math.floor(t+o),u=(3-Math.sqrt(3))/6,p=(c+l)*u,f=c-p,h=l-p,d=e-f,_=t-h,g,m;d>_?(g=1,m=0):(g=0,m=1);let E=d-g+u,T=_-m+u,v=d-1+2*u,y=_-1+2*u,A=c&255,w=l&255,x=this.perm[A+this.perm[w]]%12,b=this.perm[A+g+this.perm[w+m]]%12,C=this.perm[A+1+this.perm[w+1]]%12,U=.5-d*d-_*_;U<0?n=0:(U*=U,n=U*U*this._dot(this.grad3[x],d,_));let S=.5-E*E-T*T;S<0?s=0:(S*=S,s=S*S*this._dot(this.grad3[b],E,T));let D=.5-v*v-y*y;return D<0?r=0:(D*=D,r=D*D*this._dot(this.grad3[C],v,y)),70*(n+s+r)}noise3d(e,t,n){let s,r,a,o,l=(e+t+n)*.3333333333333333,u=Math.floor(e+l),p=Math.floor(t+l),f=Math.floor(n+l),h=1/6,d=(u+p+f)*h,_=u-d,g=p-d,m=f-d,E=e-_,T=t-g,v=n-m,y,A,w,x,b,C;E>=T?T>=v?(y=1,A=0,w=0,x=1,b=1,C=0):E>=v?(y=1,A=0,w=0,x=1,b=0,C=1):(y=0,A=0,w=1,x=1,b=0,C=1):T<v?(y=0,A=0,w=1,x=0,b=1,C=1):E<v?(y=0,A=1,w=0,x=0,b=1,C=1):(y=0,A=1,w=0,x=1,b=1,C=0);let U=E-y+h,S=T-A+h,D=v-w+h,P=E-x+2*h,F=T-b+2*h,k=v-C+2*h,H=E-1+3*h,z=T-1+3*h,O=v-1+3*h,B=u&255,q=p&255,oe=f&255,ge=this.perm[B+this.perm[q+this.perm[oe]]]%12,ye=this.perm[B+y+this.perm[q+A+this.perm[oe+w]]]%12,De=this.perm[B+x+this.perm[q+b+this.perm[oe+C]]]%12,Ke=this.perm[B+1+this.perm[q+1+this.perm[oe+1]]]%12,$=.6-E*E-T*T-v*v;$<0?s=0:($*=$,s=$*$*this._dot3(this.grad3[ge],E,T,v));let se=.6-U*U-S*S-D*D;se<0?r=0:(se*=se,r=se*se*this._dot3(this.grad3[ye],U,S,D));let ve=.6-P*P-F*F-k*k;ve<0?a=0:(ve*=ve,a=ve*ve*this._dot3(this.grad3[De],P,F,k));let xe=.6-H*H-z*z-O*O;return xe<0?o=0:(xe*=xe,o=xe*xe*this._dot3(this.grad3[Ke],H,z,O)),32*(s+r+a+o)}noise4d(e,t,n,s){let r=this.grad4,a=this.simplex,o=this.perm,c=(Math.sqrt(5)-1)/4,l=(5-Math.sqrt(5))/20,u,p,f,h,d,_=(e+t+n+s)*c,g=Math.floor(e+_),m=Math.floor(t+_),E=Math.floor(n+_),T=Math.floor(s+_),v=(g+m+E+T)*l,y=g-v,A=m-v,w=E-v,x=T-v,b=e-y,C=t-A,U=n-w,S=s-x,D=b>C?32:0,P=b>U?16:0,F=C>U?8:0,k=b>S?4:0,H=C>S?2:0,z=U>S?1:0,O=D+P+F+k+H+z,B=a[O][0]>=3?1:0,q=a[O][1]>=3?1:0,oe=a[O][2]>=3?1:0,ge=a[O][3]>=3?1:0,ye=a[O][0]>=2?1:0,De=a[O][1]>=2?1:0,Ke=a[O][2]>=2?1:0,$=a[O][3]>=2?1:0,se=a[O][0]>=1?1:0,ve=a[O][1]>=1?1:0,xe=a[O][2]>=1?1:0,we=a[O][3]>=1?1:0,X=b-B+l,Re=C-q+l,ee=U-oe+l,ie=S-ge+l,Z=b-ye+2*l,ne=C-De+2*l,le=U-Ke+2*l,Ae=S-$+2*l,Te=b-se+3*l,ke=C-ve+3*l,Ve=U-xe+3*l,V=S-we+3*l,vt=b-1+4*l,rt=C-1+4*l,N=U-1+4*l,M=S-1+4*l,K=g&255,j=m&255,he=E&255,He=T&255,Fe=o[K+o[j+o[he+o[He]]]]%32,me=o[K+B+o[j+q+o[he+oe+o[He+ge]]]]%32,de=o[K+ye+o[j+De+o[he+Ke+o[He+$]]]]%32,Ge=o[K+se+o[j+ve+o[he+xe+o[He+we]]]]%32,ot=o[K+1+o[j+1+o[he+1+o[He+1]]]]%32,Xe=.6-b*b-C*C-U*U-S*S;Xe<0?u=0:(Xe*=Xe,u=Xe*Xe*this._dot4(r[Fe],b,C,U,S));let We=.6-X*X-Re*Re-ee*ee-ie*ie;We<0?p=0:(We*=We,p=We*We*this._dot4(r[me],X,Re,ee,ie));let $e=.6-Z*Z-ne*ne-le*le-Ae*Ae;$e<0?f=0:($e*=$e,f=$e*$e*this._dot4(r[de],Z,ne,le,Ae));let et=.6-Te*Te-ke*ke-Ve*Ve-V*V;et<0?h=0:(et*=et,h=et*et*this._dot4(r[Ge],Te,ke,Ve,V));let ht=.6-vt*vt-rt*rt-N*N-M*M;return ht<0?d=0:(ht*=ht,d=ht*ht*this._dot4(r[ot],vt,rt,N,M)),27*(u+p+f+h+d)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}_dot4(e,t,n,s,r){return e[0]*t+e[1]*n+e[2]*s+e[3]*r}};var to=class i extends Fn{constructor(e,t,n=512,s=512,r,a,o){super(),this.width=n,this.height=s,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Yf(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new an(this.width,this.height,{type:fn,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Xt({defines:Object.assign({},Qa.defines),uniforms:Jn.clone(Qa.uniforms),vertexShader:Qa.vertexShader,fragmentShader:Qa.fragmentShader,blending:xn,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Sa,this.normalMaterial.blending=xn,this.pdMaterial=new Xt({defines:Object.assign({},eo.defines),uniforms:Jn.clone(eo.uniforms),vertexShader:eo.vertexShader,fragmentShader:eo.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Xt({defines:Object.assign({},ja.defines),uniforms:Jn.clone(ja.uniforms),vertexShader:ja.vertexShader,fragmentShader:ja.fragmentShader,blending:xn}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Xt({uniforms:Jn.clone(Ji.uniforms),vertexShader:Ji.vertexShader,fragmentShader:Ji.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Pa,blendDst:zs,blendEquation:vi,blendSrcAlpha:Ca,blendDstAlpha:zs,blendEquationAlpha:vi}),this.blendMaterial=new Xt({uniforms:Jn.clone(bc.uniforms),vertexShader:bc.vertexShader,fragmentShader:bc.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Sl,blendSrc:Pa,blendDst:zs,blendEquation:vi,blendSrcAlpha:Ca,blendDstAlpha:zs,blendEquationAlpha:vi}),this._fsQuad=new yi(null),this._originalClearColor=new Ze,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new xi,this.depthTexture.format=Yi,this.depthTexture.type=bs,this.normalRenderTarget=new an(this.width,this.height,{minFilter:gn,magFilter:gn,type:fn,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=uh(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=xn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=xn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=xn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=xn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=xn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,n,s,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_renderOverride(e,t,n,s,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,t.push(n))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new Tc,n=e*e*4,s=new Uint8Array(n);for(let a=0;a<e;a++)for(let o=0;o<e;o++){let c=a,l=o;s[(a*e+o)*4]=(t.noise(c,l)*.5+.5)*255,s[(a*e+o)*4+1]=(t.noise(c+e,l)*.5+.5)*255,s[(a*e+o)*4+2]=(t.noise(c,l+e)*.5+.5)*255,s[(a*e+o)*4+3]=(t.noise(c+e,l+e)*.5+.5)*255}let r=new gi(s,e,e,On,An);return r.wrapS=En,r.wrapT=En,r.needsUpdate=!0,r}};to.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var hh=class extends Fn{constructor(e){super(),this.needsSwap=!1,this.holder=e}render(e,t,n){this.holder.value=n.depthTexture}},Zf="varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",$f=`uniform sampler2D tDiffuse; uniform sampler2D tDepth; uniform vec2 uPx; uniform float uNear, uFar, uFocus, uAperture, uMaxBlur; varying vec2 vUv;
    float viewDist(vec2 uv){ float d = texture2D(tDepth, uv).x; return (uNear * uFar) / (uFar - (uFar - uNear) * d); }
    float cocAt(float dist){ return clamp(uAperture * abs(dist - uFocus) / max(dist, 0.001), 0.0, 1.0) * uMaxBlur; }`,M1=`${$f}
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
    }`,S1=`${$f}
    uniform sampler2D tBlur; uniform vec2 uHalfPx;
    void main(){
      vec4 sharp = texture2D(tDiffuse, vUv);
      vec2 o = uHalfPx * 0.5;
      vec4 blur = (texture2D(tBlur, vUv + o) + texture2D(tBlur, vUv - o) + texture2D(tBlur, vUv + vec2(o.x, -o.y)) + texture2D(tBlur, vUv + vec2(-o.x, o.y))) * 0.25;
      float w = max(smoothstep(0.75, 2.5, cocAt(viewDist(vUv))), smoothstep(0.0, 0.2, blur.a));
      gl_FragColor = vec4(mix(sharp.rgb, blur.rgb, w), sharp.a);
    }`,dh=class extends Fn{constructor(e,t){super(),this.depthHolder=e,this.shared={tDepth:{value:null},uPx:{value:new Ie(1/1440,1/900)},uNear:{value:.3},uFar:{value:1400},uFocus:{value:30},uAperture:{value:0},uMaxBlur:{value:12}},this.half=new an(720,450,{type:fn,depthBuffer:!1}),this.gather=new Xt({name:"HauseDofGather",defines:{TAPS:t},uniforms:{tDiffuse:{value:null},...this.shared},vertexShader:Zf,fragmentShader:M1,depthTest:!1,depthWrite:!1}),this.composite=new Xt({name:"HauseDofComposite",uniforms:{tDiffuse:{value:null},tBlur:{value:this.half.texture},uHalfPx:{value:new Ie(1/720,1/450)},...this.shared},vertexShader:Zf,fragmentShader:S1,depthTest:!1,depthWrite:!1}),this.quad=new yi(this.gather)}setSize(e,t){let n=Math.max(1,Math.round(e/2)),s=Math.max(1,Math.round(t/2));this.half.setSize(n,s),this.shared.uPx.value.set(1/e,1/t),this.composite.uniforms.uHalfPx.value.set(1/n,1/s),this.shared.uMaxBlur.value=Math.max(6,t*.014)}render(e,t,n){this.shared.tDepth.value=this.depthHolder.value,this.gather.uniforms.tDiffuse.value=n.texture,this.quad.material=this.gather,e.setRenderTarget(this.half),this.quad.render(e),this.composite.uniforms.tDiffuse.value=n.texture,this.quad.material=this.composite,e.setRenderTarget(this.renderToScreen?null:t),this.quad.render(e)}dispose(){this.half.dispose(),this.gather.dispose(),this.composite.dispose(),this.quad.dispose()}},E1={name:"HauseGrade",uniforms:{tDiffuse:{value:null},uTime:{value:0},uVig:{value:.32},uGrain:{value:.03},uCA:{value:.0011},uSat:{value:1.05},uCon:{value:1.05},uThermal:{value:0},uAspect:{value:1.6}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float uTime, uVig, uGrain, uCA, uSat, uCon, uThermal, uAspect; varying vec2 vUv;
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
    }`};function Jf(i,e,t,n,s,r){let a=n>=2?4:n===1?2:0,o=new an(s,r,{type:fn,samples:a,depthTexture:new xi(s,r)}),c=new Mc(i,o);c.setPixelRatio(1),c.addPass(new Sc(e,t));let l={value:null};c.addPass(new hh(l));let u=null,p=null;n>=2&&(u=new to(e,t,s,r,void 0,{radius:.9,distanceExponent:1.4,thickness:1.2,scale:1,samples:12,distanceFallOff:1,screenSpaceRadius:!1},{lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,radiusExponent:1,rings:2,samples:12}),u.blendIntensity=.9,u._overrideVisibility=function(){let d=this._visibilityCache;this.scene.traverse(_=>{(_.isPoints||_.isLine||_.isLine2||_.isSprite||_.userData&&_.userData.noAO)&&_.visible&&(_.visible=!1,d.push(_))})},c.addPass(u));let f=null;n>=1&&(f=new dh(l,n>=2?48:20),f.enabled=!1,c.addPass(f),f.setSize(c.readBuffer.width,c.readBuffer.height)),n>=1&&(p=new Br(new Ie(s,r),.55,.62,1),c.addPass(p)),c.addPass(new Ec);let h=new Or(E1);return n===0&&(h.uniforms.uCA.value=0,h.uniforms.uGrain.value=.015),c.addPass(h),{composer:c,bloom:p,gtao:u,dof:f,grade:h,tier:n,setDof(d,_,g,m){if(!f)return;f.enabled=d>.01;let E=f.shared;E.uAperture.value=d,E.uFocus.value=_,E.uNear.value=g,E.uFar.value=m},setSize(d,_){c.setSize(d,_),h.uniforms.uAspect.value=d/_},render(d,_){h.uniforms.uTime.value=_%10,c.render(d)},dispose(){c.dispose(),f&&f.dispose(),o.dispose()}}}var no=new L;function Mi(i,e,t,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),c=Math.PI/4;no.copy(e),no[n]=0,no.normalize();let l=.5*a/(a+o),u=1-no.angleTo(i)/c;return Math.sign(no[t])===1?u*l:o/(a+o)+l+l*(1-u)}var Si=class i extends kt{constructor(e=1,t=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let c=new L,l=new L,u=new L(e,t,n).divideScalar(2).subScalar(r),p=this.attributes.position.array,f=this.attributes.normal.array,h=this.attributes.uv.array,d=p.length/6,_=new L,g=.5/a;for(let m=0,E=0;m<p.length;m+=3,E+=2)switch(c.fromArray(p,m),l.copy(c),l.x-=Math.sign(l.x)*g,l.y-=Math.sign(l.y)*g,l.z-=Math.sign(l.z)*g,l.normalize(),p[m+0]=u.x*Math.sign(c.x)+l.x*r,p[m+1]=u.y*Math.sign(c.y)+l.y*r,p[m+2]=u.z*Math.sign(c.z)+l.z*r,f[m+0]=l.x,f[m+1]=l.y,f[m+2]=l.z,Math.floor(m/d)){case 0:_.set(1,0,0),h[E+0]=Mi(_,l,"z","y",r,n),h[E+1]=1-Mi(_,l,"y","z",r,t);break;case 1:_.set(-1,0,0),h[E+0]=1-Mi(_,l,"z","y",r,n),h[E+1]=1-Mi(_,l,"y","z",r,t);break;case 2:_.set(0,1,0),h[E+0]=1-Mi(_,l,"x","z",r,e),h[E+1]=Mi(_,l,"z","x",r,n);break;case 3:_.set(0,-1,0),h[E+0]=1-Mi(_,l,"x","z",r,e),h[E+1]=1-Mi(_,l,"z","x",r,n);break;case 4:_.set(0,0,1),h[E+0]=1-Mi(_,l,"x","y",r,e),h[E+1]=1-Mi(_,l,"y","x",r,t);break;case 5:_.set(0,0,-1),h[E+0]=Mi(_,l,"x","y",r,e),h[E+1]=1-Mi(_,l,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};var on=10,Ct=8,Ei=2.9,io=[{key:"roof",dy:9.2},{key:"upper",dy:6.6},{key:"main",dy:4.1},{key:"basement",dy:2},{key:"below",dy:0}],Rt=(i,e,t)=>new L(i,e,t);function Kf({M:i,T:e,markTex:t,glowTex:n}){let s=new xt,r={};io.forEach(S=>{let D=new xt;D.userData.level=S.key,r[S.key]=D,s.add(D)});let a={},o=[],c=new ps({color:11126756,transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1,fog:!1}),l={icicles:null,snowL:null,snowR:null,chimneyTop:new dn,fans:[]},u=Ws;function p(S,D,P,F,k=0,H=0,z=0,O,B={}){let q=new kt(S,D,P);u(q,B.uv||{});let oe=new Pe(q,F);if(oe.position.set(k,H,z),oe.castShadow=B.cast!==!1,oe.receiveShadow=B.receive!==!1,B.edges){let ge=new Wi(new Mr(q,30),c);ge.raycast=()=>{},oe.add(ge)}return O&&O.add(oe),oe}function f(S,D,P,F,k,H=0,z=0,O=0,B,q={}){let oe=new Si(S,D,P,q.seg||2,F),ge=new Pe(oe,k);return ge.position.set(H,z,O),ge.castShadow=q.cast!==!1,ge.receiveShadow=!0,B&&B.add(ge),ge}function h(S,D,P,F,k,H,z,O=18){let B=new Pe(new $t(S,S,D,O),P);return B.position.set(F,k,H),B.castShadow=!0,B.receiveShadow=!0,z&&z.add(B),B}function d(S,D,P,F){let k=a[S]||(a[S]={meshes:[],mats:[],marks:[]}),H=z=>{let O=z.clone();return O.userData.baseEmissive=O.emissive.clone(),O};if(D.forEach(z=>{z.material=Array.isArray(z.material)?z.material.map(H):H(z.material),z.userData.sys=S,k.meshes.push(z),k.mats.push(...[].concat(z.material))}),P){let z=new Ln(new bn({map:t,transparent:!0,depthTest:!1,depthWrite:!1,opacity:0}));z.position.copy(P),z.scale.set(.95,.95,1),z.renderOrder=10,z.userData.sys=S,z.userData.noAO=!0,r[F].add(z),k.marks.push(z)}}let _=0,g={},m=S=>g[S]||(g[S]=Gf(S));function E(S,D,P,F,k,H){let z=D.x1-D.x0,O=D.y1-D.y0,B=(D.x0+D.x1)/2,q=(D.y0+D.y1)/2,oe=new xt;oe.position.set(B,q,0),S.add(oe);let ge=lh(m(F||"living")),ye=new Pe(new tn(z,O),ge);ye.position.z=.03,ye.receiveShadow=!1,oe.add(ye);let De=.075,Ke=.1;f(z,De,Ke,.012,i.trim,0,O/2-De/2,.07,oe,{seg:1}),f(z,De,Ke,.012,i.trim,0,-O/2+De/2,.07,oe,{seg:1}),f(De,O,Ke,.012,i.trim,-z/2+De/2,0,.07,oe,{seg:1}),f(De,O,Ke,.012,i.trim,z/2-De/2,0,.07,oe,{seg:1});let $=z>1.35?Math.round(z/.95):1;for(let ve=1;ve<$;ve++)f(.035,O-.1,.07,.008,i.trim,-z/2+z/$*ve,0,.065,oe,{seg:1,cast:!1});O>1.2&&f(z-.1,.035,.07,.008,i.trim,0,O*.12,.065,oe,{seg:1,cast:!1}),f(z+.22,.055,.26,.012,i.cedar,0,-O/2-.03,.14,oe,{seg:1}),f(z+.18,.09,.12,.012,i.trim,0,O/2+.07,.1,oe,{seg:1});let se=new Ln(new bn({map:n,transparent:!0,depthWrite:!1,blending:Qt,opacity:0}));return se.position.set(0,0,.4),se.scale.set(z*2.6,O*2.6,1),se.userData.noAO=!0,oe.add(se),o.push({mat:ge,halo:se,order:k!=null?k+_*.001:_,always:!!H,w:z,h:O}),_++,oe}function T(S,D,P){let F=D.x1-D.x0,k=D.y1-D.y0,H=(D.x0+D.x1)/2,z=(D.y0+D.y1)/2,O=new xt;O.position.set(H,z,0),S.add(O),p(F,k,.07,i.door,0,0,0,O,{uv:{ox:H,oy:z}});let B=new Pe(new tn(.22,k*.72),lh(m("hall")));B.position.set(-F/2+.22,.05,.04),O.add(B),o.push({mat:B.material,halo:null,order:.5,always:!1,w:.22,h:k*.72}),f(.03,.8,.05,.012,i.trim,F/2-.14,-.05,.08,O,{seg:1}),f(F+.14,.09,.12,.012,i.trim,0,k/2+.07,.07,O,{seg:1}),f(.07,k,.1,.01,i.trim,-F/2-.035,0,.06,O,{seg:1}),f(.07,k,.1,.01,i.trim,F/2+.035,0,.06,O,{seg:1})}function v(S,D,P,F,k,H,z,O,B={}){let q=new xt,oe=new Set([-S/2,S/2]),ge=new Set([0,D]);F.forEach($=>{oe.add($.x0),oe.add($.x1),ge.add($.y0),ge.add($.y1)});let ye=[...oe].sort(($,se)=>$-se),De=[...ge].sort(($,se)=>$-se),Ke=[i.trim,i.trim,i.trim,i.trim,k,i.drywall];for(let $=0;$<ye.length-1;$++)for(let se=0;se<De.length-1;se++){let ve=(ye[$]+ye[$+1])/2,xe=(De[se]+De[se+1])/2;F.some(we=>ve>we.x0&&ve<we.x1&&xe>we.y0&&xe<we.y1)||p(ye[$+1]-ye[$],De[se+1]-De[se],P,Ke,ve,xe,0,q,{edges:!0,uv:{ox:ve,oy:xe+(B.v0||0)}})}return F.forEach($=>{$.door?T(q,$,P):E(q,$,P,$.room,B.order,$.always)}),q.position.copy(z),q.rotation.y=O||0,H.add(q),q}(()=>{let S=r.below,D=[],P=i.form;D.push(p(on+.5,3.4,.25,P,0,-1.4,Ct/2+.12,S,{edges:!0,uv:{ox:0,oy:-1.4}})),D.push(p(on+.5,3.4,.25,P,0,-1.4,-Ct/2-.12,S,{edges:!0,uv:{ox:0,oy:-1.4}})),D.push(p(.25,3.4,Ct,P,on/2+.12,-1.4,0,S,{edges:!0,uv:{oy:-1.4}})),D.push(p(.25,3.4,Ct,P,-on/2-.12,-1.4,0,S,{edges:!0,uv:{oy:-1.4}})),p(on+1.2,.3,.8,i.concrete,0,-3.1,Ct/2+.1,S),p(on+1.2,.3,.8,i.concrete,0,-3.1,-Ct/2-.1,S),p(.8,.3,Ct,i.concrete,on/2+.1,-3.1,0,S),p(.8,.3,Ct,i.concrete,-on/2-.1,-3.1,0,S);let F=p(on,.16,Ct,i.slab,0,-2.88,0,S,{edges:!0});d("foundation",[...D,F],Rt(on/2+.6,-1.4,1.6),"below");let k=h(.14,9,i.pipe,.6,-3.25,-Ct/2-4.3,S);k.rotation.x=Math.PI/2-.05;let H=h(.14,.6,i.pipe,.6,-3,-Ct/2+.2,S),z=h(.12,3.2,i.pvc,.6,-1.6,-Ct/2-1.2,S);d("sewer",[k,H,z],Rt(.6,-2.4,-Ct/2-4.5),"below");let O=h(.1,.5,i.pvc,-1.2,-2.7,-1.5,S);d("radon",[O],Rt(-1.2,-2.2,-1.5),"below");let B=h(.06,on+1,i.pvc,0,-3.25,Ct/2+.7,S,10);B.rotation.z=Math.PI/2,B.castShadow=!1})(),(()=>{let S=r.basement,D=new ei(16766880,0,15,2);D.position.set(.2,-.7,-.4),S.add(D),S.userData.lights=[D];let P=p(.85,1.7,.85,i.white,-3.3,-2,-2.6,S),F=p(.87,.12,.87,i.copper,-3.3,-1.5,-2.6,S),k=p(6.2,.36,.5,i.steel,-.3,-.12,-2.6,S),H=p(.5,1,.5,i.steel,-3.3,-.7,-2.6,S),z=h(.07,1.2,i.pvc,-3,-.6,-3.1,S);d("hvac",[P,F,k,H,z],Rt(-3.3,-.9,-2),"basement");let O=h(.3,1.4,i.white,-2.1,-2.1,-3,S),B=h(.04,1.2,i.copper,-2,-.9,-3,S);d("water-heaters",[O,B],Rt(-2.1,-1.1,-2.6),"basement");let q=p(.62,.95,.14,i.steel,2.8,-1.2,-3.8,S),oe=p(.4,.7,.02,i.copper,2.8,-1.2,-3.72,S),ge=h(.05,1.5,i.copper,2.8,-.1,-3.8,S);d("electrical",[q,oe,ge],Rt(2.8,-.5,-3.3),"basement");let ye=h(.1,3.1,i.pvc,-1.2,-1.2,-1.5,S);d("radon",[ye],null,"basement"),h(.09,3.1,i.pipe,-2.6,-1.3,-3.6,S);for(let De=-4;De<=4;De++)p(.09,.3,Ct-.3,i.cedar,De*1,0-.1,0,S,{cast:!1})})();let y=[{x0:-3.8,x1:-1.2,y0:.7,y1:2.5,room:"living"},{x0:.2,x1:1.3,y0:0,y1:2.2,door:!0},{x0:2.1,x1:4.2,y0:.7,y1:2.5,room:"kitchen"}];(()=>{let S=r.main,D=.3;p(on,.3,Ct,i.floor,0,.15,0,S,{edges:!0}),v(on,Ei,.22,y,i.lap,S,Rt(0,D,Ct/2),0,{order:1,v0:D}),v(on,Ei,.22,[{x0:-3,x1:1.6,y0:.1,y1:2.45,room:"kitchen"}],i.lap,S,Rt(0,D,-Ct/2),Math.PI,{order:4,v0:D}),v(Ct,Ei,.22,[{x0:-2.2,x1:-.2,y0:.8,y1:2.3,room:"hall"}],i.lap,S,Rt(on/2,D,0),Math.PI/2,{order:2,v0:D}),v(Ct,Ei,.22,[{x0:.3,x1:2.3,y0:.8,y1:2.3,room:"living"}],i.lap,S,Rt(-on/2,D,0),-Math.PI/2,{order:3,v0:D}),p(.15,Ei,5,i.drywall,1.2,D+Ei/2,-1.2,S);let P=p(3,.95,.65,i.counter,2.9,D+.48,-3.4,S),F=f(.85,1.95,.7,.03,i.steel,4.35,D+.98,-3.4,S),k=p(.75,.05,.6,i.steel,2.4,D+.97,-3.4,S);d("installation",[P,F,k],Rt(3,2.3,-3.2),"main");let H=h(.1,3.2,i.pvc,-1.2,1.9,-1.5,S);d("radon",[H],null,"main"),h(.09,3.2,i.pipe,-2.6,1.9,-3.6,S),f(.3,.42,.18,.02,i.white,2.8,1.5,-Ct/2-.2,S),h(.035,3.6,i.steel,2.8,3.55,-Ct/2-.1,S,10);let z=new ei(16758123,0,11,2);z.position.set(-1.5,2.4,.5),S.add(z);let O=new ei(16758123,0,9,2);O.position.set(3,2.4,-1.5),S.add(O),S.userData.lights=[z,O];let B=new xt;S.add(B),p(2.9,.32,2.3,i.stone,.55,.16,5.1,B,{uv:{ox:.55,oy:.16}}),p(2.9,.07,2.3,i.cedar,.55,.35,5.1,B,{uv:{}}),p(1.7,.17,.4,i.concrete,.7,.085,6.55,B),p(1.9,.17,.4,i.concrete,.7,.255-.085,6.2,B),[-.75,1.85].forEach(ye=>{f(.22,2.55,.22,.015,i.cedar,ye,1.67,6.12,B),p(.34,.5,.34,i.stone,ye,.6,6.12,B,{uv:{ox:ye,oy:.6}})}),f(3.5,.24,.22,.02,i.cedar,.55,2.84,6.12,B);let q=p(3.4,.14,2.6,[i.trim,i.trim,i.roof,i.cedar,i.trim,i.trim],.55,3,5.25,B,{uv:{swap:!0}});q.rotation.x=.1,[-.15,1.65].forEach(ye=>{let De=new Pe(new $t(.06,.07,.24,12),i.sconce);De.position.set(ye,1.9,4.2),De.userData.noAO=!0,B.add(De);let Ke=new Ln(new bn({map:n,transparent:!0,depthWrite:!1,blending:Qt,opacity:0}));Ke.position.set(ye,1.9,4.5),Ke.scale.set(1.6,1.6,1),Ke.userData.noAO=!0,B.add(Ke),l.porchHalos=(l.porchHalos||[]).concat(Ke)}),[-.78,1.88].forEach(ye=>{p(.06,.06,2,i.trim,ye,1.2,5.15,B),p(.05,.05,2,i.trim,ye,.55,5.15,B);for(let De=0;De<8;De++)p(.025,.62,.025,i.trim,ye,.9,4.25+De*.27,B,{cast:!1})});let oe=new Pe(new tn(.2,.2),new en({map:t,transparent:!0,toneMapped:!1}));oe.position.set(1.62,1.35,4.13),oe.userData.noAO=!0,B.add(oe);let ge=new ei(16761469,0,7,2);ge.position.set(.75,2.6,Ct/2+1.1),S.add(ge),S.userData.porch=ge})(),(()=>{let S=r.upper,D=3.45;p(on,.25,Ct,i.floor,0,3.32,0,S,{edges:!0}),v(on,Ei,.22,[{x0:-3.6,x1:-1.8,y0:.9,y1:2.4,room:"bed"},{x0:-.9,x1:1.9,y0:.5,y1:2.5,room:"living"},{x0:2.6,x1:4.1,y0:.9,y1:2.4,room:"bed"}],i.bb,S,Rt(0,D,Ct/2),0,{order:5,v0:D}),v(on,Ei,.22,[{x0:-3.4,x1:-1.8,y0:.9,y1:2.3,room:"bath"},{x0:1.6,x1:3.2,y0:.9,y1:2.3,room:"bed"}],i.bb,S,Rt(0,D,-Ct/2),Math.PI,{order:8,v0:D}),v(Ct,Ei,.22,[{x0:.6,x1:2.4,y0:.9,y1:2.3,room:"bed"}],i.bb,S,Rt(on/2,D,0),Math.PI/2,{order:6,v0:D}),v(Ct,Ei,.22,[{x0:-2.2,x1:-.6,y0:1.2,y1:2.2,room:"bath"}],i.bb,S,Rt(-on/2,D,0),-Math.PI/2,{order:7,v0:D}),p(.15,Ei,Ct-.4,i.drywall,-1.6,D+Ei/2,0,S);let P=f(1.7,.55,.8,.08,i.ceramic,-3.6,D+.28,-3.35,S),F=f(.7,.85,.5,.04,i.ceramic,-2.4,D+.43,-3.5,S),k=h(.09,3,i.pipe,-2.6,D+1.4,-3.6,S);d("plumbing",[P,F,k],Rt(-3.4,4.6,-3),"upper");let H=h(.1,3,i.pvc,-1.2,D+1.4,-1.5,S);d("radon",[H],null,"upper");let z=new ei(16758123,0,11,2);z.position.set(.5,5.6,.5),S.add(z),S.userData.lights=[z]})(),(()=>{let S=r.roof,D=6.35,P=3.6,F=on/2,k=.6,H=Math.atan2(P,F),z=Math.hypot(F+k,(F+k)*P/F),O=Z=>{let ne=new kt(z,.2,Ct+1);u(ne,{swap:!0});let le=new Pe(ne,[i.trim,i.trim,i.roof,i.cedar,i.trim,i.trim]);le.castShadow=!0,le.receiveShadow=!0,le.rotation.z=Z*H;let Ae=D+P-(F+k)/2*(P/F)+.12;return le.position.set(Z>0?-(F+k)/2+.02:(F+k)/2-.02,Ae,0),S.add(le),le},B=O(1),q=O(-1);[B,q].forEach(Z=>{let ne=new Wi(new Mr(Z.geometry,30),c);ne.raycast=()=>{},Z.add(ne)}),[B,q].forEach((Z,ne)=>{[-1,1].forEach(Te=>p(z,.3,.06,i.trim,0,-.05,Te*(Ct/2+.5),Z,{cast:!1}));let le=ne===0?-1:1;p(.06,.34,Ct+1.04,i.trim,le*(z/2),-.1,0,Z,{cast:!1});let Ae=p(.12,.1,Ct+.9,i.trim,le*(z/2+.06),-.28,0,Z,{cast:!1});Ae.rotation.z=-Z.rotation.z}),p(.3,.22,Ct+1.05,i.trim,0,D+P+.2,0,S),d("roofing",[B,q],Rt(-2.8,9.1,2.2),"roof");let oe=new Li;oe.moveTo(-F,0),oe.lineTo(F,0),oe.lineTo(0,P),oe.lineTo(-F,0);let ge=new Fs;ge.moveTo(-.5,1.15),ge.lineTo(.5,1.15),ge.lineTo(.5,2.15),ge.lineTo(-.5,2.15),ge.lineTo(-.5,1.15),oe.holes.push(ge);let ye=new Xi(oe,{depth:.22,bevelEnabled:!1});[Ct/2-.22,-Ct/2].forEach((Z,ne)=>{let le=new Pe(ye,[i.bb,i.trim]);le.position.set(0,D,Z),le.castShadow=!0,le.receiveShadow=!0,S.add(le);let Ae=new xt;Ae.position.set(0,D+1.65,Z+.11),S.add(Ae);let Te=E(Ae,{x0:-.5,x1:.5,y0:-.5,y1:.5,room:"hall"},.22,"hall",-1,!0);ne===1&&(Ae.rotation.y=Math.PI,Ae.position.z=Z+.11-0);let ke=new Ln(new bn({map:n,transparent:!0,depthWrite:!1,blending:Qt,opacity:0}));ke.position.set(0,D+1.65,Z+(ne===0?.55:-.3)),ke.scale.set(3.4,3.4,1),ke.userData.noAO=!0,S.add(ke),o.push({mat:null,halo:ke,order:-1,always:!0,w:1,h:1,haloOnly:!0,level:.6})});let De=new xt;De.rotation.z=-H,De.position.copy(q.position);let Ke=[];for(let Z=0;Z<2;Z++)for(let ne=0;ne<4;ne++){let le=p(1.3,.05,.95,i.solar,-.9+Z*1.45,.16,-1.6+ne*1.05,De,{cast:!1}),Ae=p(1.34,.04,.99,i.solarFrame,-.9+Z*1.45,.14,-1.6+ne*1.05,De,{cast:!1});Ke.push(le)}S.add(De),d("solar",Ke,Rt(3.4,9.3,.6),"roof");let $=Z=>{let ne=new tn(z-.25,Ct+.7,30,30),le=ne.attributes.position,Ae=Kn(5);for(let Ve=0;Ve<le.count;Ve++)le.setZ(Ve,.025+Ae()*.05);ne.computeVertexNormals();let Te=i.snowRoof.clone();Te.alphaMap=zf(256,Z),Te.alphaTest=.25,Te.userData={...i.snowRoof.userData};let ke=new Pe(ne,Te);return ke.rotation.x=-Math.PI/2,ke.position.y=.105,ke.receiveShadow=!0,ke.castShadow=!0,ke};l.snowL=$(),l.snowL.userData.keep=!0,B.add(l.snowL),l.snowR=$((Z,ne)=>Z>.24&&Z<.7&&ne>.24&&ne<.76?0:1),l.snowR.userData.keep=!0,q.add(l.snowR);let se=p(.5,.16,Ct+.8,i.snowRoof,0,D+P+.38,0,S,{cast:!1});se.material=i.snowRoof,se.userData.keep=!0,(()=>{let Z=Kn(9),ne=70,le=new Ns(.04,1,6);le.rotateX(Math.PI),le.translate(0,-.5,0);let Ae=new Di(le,i.ice,ne*2),Te=new mt,ke=new hn,Ve=new L,V=new L,vt=D+P-(F+k)*(P/F)+0;for(let rt=0;rt<2;rt++)for(let N=0;N<ne;N++){let M=-Ct/2-.4+N/(ne-1)*(Ct+.8),K=.12+Z()*Z()*.7,j=.7+Z()*.8;Ve.set((rt?1:-1)*(F+k+.08),vt-.35,M+(Z()-.5)*.06),V.set(j,K,j),Te.compose(Ve,ke,V),Ae.setMatrixAt(rt*ne+N,Te)}Ae.userData.baseMatrices=Array.from({length:ne*2},(rt,N)=>{let M=new mt;return Ae.getMatrixAt(N,M),M}),Ae.castShadow=!1,Ae.userData.noAO=!0,Ae.visible=!1,S.add(Ae),l.icicles=Ae})();let ve=new tn(on-.6,Ct-.6,40,32),xe=ve.attributes.position,we=Kn(3);for(let Z=0;Z<xe.count;Z++)xe.setZ(Z,we()*.12);ve.computeVertexNormals();let X=new Pe(ve,i.insul);X.rotation.x=-Math.PI/2,X.position.y=D+.02,X.receiveShadow=!0,S.add(X),p(on,.1,Ct,i.floor,0,D-.05,0,S),d("asbestos",[X],Rt(-.4,7.3,-.8),"roof");let Re=h(.1,4.6,i.pvc,-1.2,D+2.2,-1.5,S);d("radon",[Re],Rt(-1.2,10.9,-1.5),"roof");let ee=h(.24,.42,i.steel,-1.2,7.9,-1.5,S,16);d("radon",[ee],null,"roof"),h(.09,4,i.pipe,-2.6,D+2,-3.6,S);let ie=p(.95,4.1,.95,i.stone,-3.4,8.4,-1.6,S,{uv:{ox:-3.4,oy:8.4}});p(1.15,.12,1.15,i.concrete,-3.4,10.5,-1.6,S),p(.7,.3,.7,i.steel,-3.4,10.7,-1.6,S),l.chimneyTop.position.set(-3.4,10.9,-1.6),S.add(l.chimneyTop)})();let A={meter:Rt(2.8,1.45,-4.3),panel:Rt(2.8,-1.2,-3.8),shutoff:Rt(-.5,-1.4,3.75),heater:Rt(-2.1,-2,-3),sewer:Rt(.6,-3.35,-7.5),furnace:Rt(-3.3,-2,-2.6),register:Rt(3.8,3.52,2.9),fan:Rt(-1.2,7.9,-1.5),pit:Rt(-1.2,-3,-1.5),exhaust:Rt(-1.2,11.6,-1.5),rim:Rt(4.9,.3,4.05),sill:Rt(-2.5,.7,4.05),attic:Rt(0,6.4,4.05),door:Rt(.75,1.2,4.05),chimney:Rt(-3.4,10.5,-1.6),eave:Rt(-5.6,5.9,3.5),potlights:Rt(-2.4,3.1,.7),rangeHood:Rt(2.4,2.4,-3.55),island:Rt(3,1.3,-.6),vanity:Rt(-2.4,4.4,-3.55),tub:Rt(-3.6,4.1,-3.35),bedWindow:Rt(2.4,5.2,-3.9),sump:Rt(.66,-2.2,1.6)},w=new mt,x=new L,b=new hn,C=new L;function U(S,D,P,F,k){let H=F<.55?1:0;U.on=dt(U.on??0,H,Et(k*(H?.55:1.2),0,1));let z=U.on*9,O=(1-S.ghost*.85)*(1-.35*(S.cut||0)),B=1-.65*(S.cut||0),q=1+1.6*(S.cut||0);o.forEach(ve=>{let xe=(ve.always?1:Et(z-ve.order,0,1))*O,we=1-F*.8;ve.mat&&(ve.mat.emissiveIntensity=(ve.always?2.6:2)*xe*we*B),ve.halo&&(ve.halo.material.opacity=(ve.haloOnly?.28:ve.always?.5:.3)*xe*we*B)}),["main","upper"].forEach(ve=>(r[ve].userData.lights||[]).forEach(xe=>{xe.intensity=9*Et(z/9,0,1)*(1-F)*O*q}));let oe=Math.max(S.zk||0,ft(.2,.7,S.explode||0),Et(((S.lift||0)-1.5)/1.5,0,1));(r.basement.userData.lights||[]).forEach(ve=>{ve.intensity=30*oe*O*q});let ge=(1-F)*O;r.main.userData.porch.intensity=12*ge,(l.porchHalos||[]).forEach(ve=>{ve.material.opacity=.55*ge*B}),i.sconce.emissiveIntensity=.4+3.2*(1-F);let ye=Et(S.melt,0,1),De=.18+ye*.8;l.snowL.material.alphaTest=De,l.snowR.material.alphaTest=Et(De+.1,0,1);let Ke=r.roof.children.find(ve=>ve.material===i.snowRoof);Ke&&(Ke.visible=ye<.6);let $=l.icicles,se=Et(S.icicles,0,1);if($.visible=se>.01,$.visible){for(let ve=0;ve<$.count;ve++)w.copy($.userData.baseMatrices[ve]),w.decompose(x,b,C),C.y*=se,C.x*=.5+.5*se,C.z=C.x,w.compose(x,b,C),$.setMatrixAt(ve,w);$.instanceMatrix.needsUpdate=!0}return z}return{house:s,layers:r,sys:a,windows:o,ANCHORS:A,edgeMat:c,extra:l,update:U,box:p,rbox:f,cyl:h,system:d,wall:v,windowUnit:E,setUV:u,v:Rt}}function bi(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,c=new Lt,l=0;for(let u=0;u<i.length;++u){let p=i[u],f=0;if(t!==(p.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let h in p.attributes){if(!n.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+h+'" attribute exists among all geometries, or in none of them.'),null;r[h]===void 0&&(r[h]=[]),r[h].push(p.attributes[h]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==p.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let h in p.morphAttributes){if(!s.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[h]===void 0&&(a[h]=[]),a[h].push(p.morphAttributes[h])}if(e){let h;if(t)h=p.index.count;else if(p.attributes.position!==void 0)h=p.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,h,u),l+=h}}if(t){let u=0,p=[];for(let f=0;f<i.length;++f){let h=i[f].index;for(let d=0;d<h.count;++d)p.push(h.getX(d)+u);u+=i[f].attributes.position.count}c.setIndex(p)}for(let u in r){let p=Qf(r[u]);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,p)}for(let u in a){let p=a[u][0].length;if(p!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let f=0;f<p;++f){let h=[];for(let _=0;_<a[u].length;++_)h.push(a[u][_][f]);let d=Qf(h);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(d)}}}return c}function Qf(i){let e,t,n,s=-1,r=0;for(let l=0;l<i.length;++l){let u=i[l];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}let a=new e(r),o=new Tt(a,t,n),c=0;for(let l=0;l<i.length;++l){let u=i[l];if(u.isInterleavedBufferAttribute){let p=c/t;for(let f=0,h=u.count;f<h;f++)for(let d=0;d<t;d++){let _=u.getComponent(f,d);o.setComponent(f+p,d,_)}}else a.set(u.array,c);c+=u.count*t}return s!==void 0&&(o.gpuType=s),o}var ph=0,jf={value:new rn(0,0,-1,30)};function so(i,e,t,n=!1){let s=i.onBeforeCompile,r=++ph;return i.onBeforeCompile=(a,o)=>{s&&s(a,o),a.uniforms.uSight=jf,a.fragmentShader=a.fragmentShader.replace("#include <common>",`#include <common>
uniform vec4 uSight;`).replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
      { vec3 fp = -vViewPosition;
        float fd = smoothstep(${e.toFixed(1)}, ${t.toFixed(1)}, length(fp));${n?`
        float fs = dot(fp, uSight.xyz);
        float fc = 1.0 - smoothstep(0.12, 0.26, length(fp - fs * uSight.xyz) / max(fs, 0.5));
        fd = min(fd, 1.0 - 0.94 * fc * smoothstep(0.5, 4.0, uSight.w - fs) * step(0.0, fs));`:""}
        float fh = fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715))));
        if (fd < fh) discard; }`)},i.customProgramCacheKey=()=>"fade"+r,i}function fh(i,e){let t=i.onBeforeCompile,n=++ph;return i.onBeforeCompile=(s,r)=>{t&&t(s,r),s.uniforms.uSnow=e,s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
attribute float aSnow;
uniform float uSnow;`).replace("#include <color_vertex>",`#include <color_vertex>
vColor.rgb = mix(vColor.rgb, vec3(0.8, 0.86, 0.95), aSnow * uSnow);`)},i.customProgramCacheKey=()=>"snowv"+n,i}function ep({M:i,T:e,glowTex:t,markTex:n,tier:s,reduce:r}){let a=new xt,o=Kn(21),c=os("rgba(255,255,255,0.7)"),l=kf(),u=Fr("rgba(255,196,120,0.9)","rgba(255,150,70,0)"),p={uSnow:{value:1},uRoofSnow:{value:1},uTint:{value:new Ze(1,1,1)},uGrow:{value:0},uLeafTint:{value:new Ze(.3,.5,.15)}},f=e.grass,h=e.snow,d=new Vt({map:h.map,normalMap:h.normalMap,roughnessMap:h.rmMap,metalnessMap:h.rmMap,roughness:1,metalness:1,transparent:!0,normalScale:new Ie(1.1,1.1),envMapIntensity:.9});d.onBeforeCompile=G=>{G.uniforms.uSnow=p.uSnow,G.uniforms.uTint=p.uTint,G.uniforms.uGrass={value:f.map},G.vertexShader=G.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vWxz;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vWxz = (modelMatrix * vec4(position, 1.0)).xz;`),G.fragmentShader=G.fragmentShader.replace("#include <common>",`#include <common>
      uniform float uSnow; uniform vec3 uTint; uniform sampler2D uGrass; varying vec2 vWxz;
      float gh(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float gn(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f); return mix(mix(gh(i), gh(i+vec2(1,0)), f.x), mix(gh(i+vec2(0,1)), gh(i+vec2(1,1)), f.x), f.y); }`).replace("#include <map_fragment>",`
      vec4 snowC = texture2D(map, vMapUv);
      vec3 gr = texture2D(uGrass, vWxz * 0.25).rgb * uTint;
      float nz = gn(vWxz * 0.35) * 0.55 + gn(vWxz * 1.7) * 0.3 + gn(vWxz * 7.0) * 0.15;
      float cover = smoothstep(uSnow - 0.1, uSnow + 0.1, 1.0 - nz + (uSnow - 0.5) * 0.9);
      cover = uSnow >= 0.995 ? 1.0 : (uSnow <= 0.005 ? 0.0 : cover);
      diffuseColor.rgb *= mix(gr / max(snowC.rgb, vec3(0.2)) * 0.9, vec3(1.0), cover);
      diffuseColor *= snowC;`)};let _=200,g=6,m=450,E=Array.from({length:_+1},(G,J)=>m*Math.sinh(g*(J/_*2-1))/Math.sinh(g)),T=(G,J)=>{let te=Math.hypot(G,J),Ee=ft(40,220,te)*(sn(G*.012+3,J*.012+8,4,4096,4096,3)-.35)*22,_e=(sn(G*.09,J*.09,3,4096,4096,9)-.5)*.35*ft(8,22,te)*(1-ft(14,17,J)*(1-ft(27,30,J)))*(1-ft(-22.5,-20.5,J)*(1-ft(-15.5,-13.5,J)))*(1-ft(5,6.2,G)*(1-ft(10.2,11.5,G))*ft(.5,2,J)*(1-ft(16.5,18,J)));return Ee+_e},v=new Lt;{let G=new Float32Array((_+1)*(_+1)*3),J=new Float32Array((_+1)*(_+1)*2),te=[];for(let Ee=0;Ee<=_;Ee++)for(let _e=0;_e<=_;_e++){let fe=Ee*(_+1)+_e,Ne=E[_e],Be=E[Ee];G[fe*3]=Ne,G[fe*3+1]=T(Ne,Be),G[fe*3+2]=Be,J[fe*2]=Ne,J[fe*2+1]=Be}for(let Ee=0;Ee<_;Ee++)for(let _e=0;_e<_;_e++){let fe=(E[_e]+E[_e+1])/2,Ne=(E[Ee]+E[Ee+1])/2;if(Math.abs(fe)<5.1&&Math.abs(Ne)<4.1)continue;let Be=Ee*(_+1)+_e,Je=Be+1,it=Be+_+1,Le=it+1;te.push(Be,it,Je,Je,it,Le)}v.setAttribute("position",new Tt(G,3)),v.setAttribute("uv",new Tt(J,2)),v.setIndex(te),v.computeVertexNormals()}let y=[],A=new Pe(v,d);A.receiveShadow=!0,A.renderOrder=-1,a.add(A);let w=i.asphalt.clone();[w.map,w.normalMap,w.roughnessMap,w.metalnessMap].forEach(G=>{G&&G.repeat.set(220,3)}),w.roughness=.72,w.metalness=0,w.metalnessMap=null,w.envMapIntensity=1.4;let x=new Pe(new tn(660,9),w);x.rotation.x=-Math.PI/2,x.position.set(0,.012,22.2),x.receiveShadow=!0,a.add(x);let b=null;{let G=new tn(2.2,.14),J=new Di(G,new Vt({color:14070346,roughness:.8}),90),te=new mt,Ee=new hn().setFromEuler(new Ii(-Math.PI/2,0,0)),_e=new L,fe=new L(1,1,1);for(let Ne=0;Ne<90;Ne++)_e.set(-180+Ne*4,.02,22.2),te.compose(_e,Ee,fe),J.setMatrixAt(Ne,te);J.receiveShadow=!0,a.add(J),b=J}y.push(w,i.pavement);let C=new Pe(new kt(660,.1,1.8),i.pavement);C.position.set(0,.05,15.6),C.receiveShadow=!0,C.castShadow=!0,a.add(C);let U=new Pe(new kt(1.3,.05,9.4),i.pavement);U.position.set(.7,.03,10.9),U.receiveShadow=!0,a.add(U);let S=new Pe(new kt(3.6,.06,14.5),i.pavement);S.position.set(7.9,.03,9.3),S.receiveShadow=!0,a.add(S);let D=i.asphalt.clone();[D.map,D.normalMap,D.roughnessMap,D.metalnessMap].forEach(G=>{G&&G.repeat.set(220,1.5)}),D.metalnessMap=null,D.metalness=0,D.roughness=.9,D.color.setScalar(1.25),y.push(D);let P=new Pe(new tn(660,4.5),D);P.rotation.x=-Math.PI/2,P.position.set(0,.012,-18.2),P.receiveShadow=!0,a.add(P);let F=(()=>{let G=new Gn(1,10,6),J=new Di(G,new Vt({color:14673906,roughness:.95}),70),te=new mt,Ee=new hn,_e=new L,fe=new L;for(let Ne=0;Ne<70;Ne++){let Be=Ne%2,Je=-140+(Ne>>1)*8+o()*3;_e.set(Je,.1,Be?26.9:17.6+o()*.2),fe.set(2.8+o()*1.4,.55+o()*.25,.9+o()*.3),te.compose(_e,Ee,fe),J.setMatrixAt(Ne,te)}return J.castShadow=!0,J.receiveShadow=!0,a.add(J),J})(),k=[],H=so(i.pole.clone(),3.5,9),z=so(new Vt({color:3817544,roughness:.42,metalness:.65}),3.5,9),O=new en({color:new Ze(3.2,2.2,1.1),toneMapped:!1}),B=new Qn([new L(0,6.9,0),new L(0,7.45,.25),new L(0,7.6,.9),new L(0,7.5,1.6)]),q=new Vn(B,14,.05,8),oe=new Gn(1,24,12);oe.scale(.54,.085,.23),[[-13,16.6],[11,16.6],[34,16.6],[-38,16.6]].forEach(([G,J])=>{let te=new xt;te.position.set(G,0,J);let Ee=new Pe(new $t(.06,.1,7.2,10),H);Ee.position.y=3.6,Ee.castShadow=!0,te.add(Ee);let _e=new Pe(q,H);_e.castShadow=!0,te.add(_e);let fe=new Pe(oe,z);fe.position.set(0,7.5,1.78),fe.rotation.x=.04,fe.castShadow=!0,te.add(fe);let Ne=new Pe(new tn(.8,.24),O);Ne.rotation.x=Math.PI/2,Ne.position.set(0,7.445,1.78),Ne.userData.noAO=!0,te.add(Ne);let Be=new Ln(new bn({map:t,transparent:!0,depthWrite:!1,blending:Qt,opacity:0}));Be.position.set(0,7.3,1.78),Be.scale.set(5,5,1),Be.userData.noAO=!0,te.add(Be);let Je=new Pe(new tn(1,1),new en({map:u,transparent:!0,depthWrite:!1,blending:Qt,opacity:0}));Je.rotation.x=-Math.PI/2,Je.position.set(0,.04,2),Je.scale.set(15,10,1),Je.userData.noAO=!0,te.add(Je),a.add(te),k.push({halo:Be,pool:Je,lens:Ne})});let ge=new ei(16761466,0,32,2);ge.position.set(11,7,18.2),a.add(ge);let ye=new ei(16761466,0,32,2);ye.position.set(-13,7,18.2),a.add(ye);let De=[];[[-2.5,7.4,5.5,4.2],[.8,8.4,5.5,4.6],[3.15,7.4,5.5,4.2]].forEach(([G,J,te,Ee])=>{let _e=new Pe(new tn(1,1),new en({map:u,transparent:!0,depthWrite:!1,blending:Qt,opacity:0}));_e.rotation.x=-Math.PI/2,_e.position.set(G,.05,J),_e.scale.set(te,Ee,1),_e.userData.noAO=!0,a.add(_e),De.push(_e)});let Ke=so(fh(i.spruce.clone(),p.uSnow),5,12,!0);function $(G){let J=Kn(G),te=[],Ee=11;for(let ue=0;ue<Ee;ue++){let pt=ue/(Ee-1),ut=dt(1.7,.18,Math.pow(pt,.85))*(.94+J()*.12),bt=dt(1.7,.9,pt),Bt=1+ue*.62,Yt=new Ns(ut,bt,20,4,!0);Yt.translate(0,Bt+bt/2,0);let jt=Yt.attributes.position;for(let Mt=0;Mt<jt.count;Mt++){let Ht=jt.getX(Mt),Nt=jt.getY(Mt),_t=jt.getZ(Mt),pn=Math.atan2(_t,Ht),Sn=Math.hypot(Ht,_t),Yn=1+Math.sin(pn*7+ue*2.3)*.09+Math.sin(pn*13+ue)*.04+(J()-.5)*.05,Xs=Sn/ut*(Sn/ut)*.34*(1+.35*Math.sin(pn*5+ue*1.3));jt.setXYZ(Mt,Ht*Yn,Nt-Xs,_t*Yn)}Yt.computeVertexNormals(),te.push(Yt)}let _e=new $t(.1,.2,1.6,8);_e.translate(0,.8,0),te.push(_e);let fe=bi(te);fe.computeVertexNormals();let Ne=fe.attributes.position,Be=fe.attributes.normal,Je=new Float32Array(Ne.count*3),it=new Float32Array(Ne.count),Le=new Ze;for(let ue=0;ue<Ne.count;ue++){let pt=Be.getY(ue),ut=sn(Ne.getX(ue)*2.1,Ne.getZ(ue)*2.1+Ne.getY(ue)*1.1,3,64,64,2);Le.setRGB(.05+ut*.05,.12+ut*.08,.09+ut*.05),Ne.getY(ue)<1.15&&Le.setRGB(.1,.07,.05),Je[ue*3]=Le.r,Je[ue*3+1]=Le.g,Je[ue*3+2]=Le.b,it[ue]=Ne.getY(ue)<1.15?0:Et(ft(.05,.6,pt+(ut-.5)*.7),0,1)*.78}return fe.setAttribute("color",new Tt(Je,3)),fe.setAttribute("aSnow",new Tt(it,1)),fe}let se=[[-9.5,3,1.1],[-11.8,-3.5,1.4],[9.8,-5.5,1.25],[-8.2,-8.5,1.05],[15,-9,1.35],[-14,9.5,1.2],[18,9,1.1],[-21,-6,1.5],[24,-3,1.25],[-27,8,1.2],[30,-12,1.4],[-11.5,-13.5,1.3],[6,-26,1.1],[-18,-27,1.45],[22,-27,1.3],[-36,3,1.3],[40,2,1.2]],ve=[$(1),$(2)],xe=ve[0];ve.forEach((G,J)=>{let te=se.filter((Je,it)=>it%2===J),Ee=new Di(G,Ke,te.length),_e=new mt,fe=new hn,Ne=new L,Be=new L;te.forEach(([Je,it,Le],ue)=>{fe.setFromAxisAngle(new L(0,1,0),o()*6.28),Ne.set(Je,0,it),Be.set(Le,Le*(.9+o()*.25),Le),_e.compose(Ne,fe,Be),Ee.setMatrixAt(ue,_e)}),Ee.castShadow=!0,Ee.receiveShadow=!0,a.add(Ee)});let we=[];{let G=fh(i.shrub.clone(),p.uSnow),J=new Ma(.7,3),te=J.attributes.position,Ee=new Float32Array(te.count*3),_e=new Float32Array(te.count);for(let fe=0;fe<te.count;fe++){let Ne=te.getX(fe),Be=te.getY(fe),Je=te.getZ(fe),it=sn(Ne*2+5,Je*2+Be*2,3,64,64,4),Le=1+(it-.5)*.35;te.setXYZ(fe,Ne*Le,Be*Le*.72,Je*Le),Ee[fe*3]=.06,Ee[fe*3+1]=.15+it*.05,Ee[fe*3+2]=.1,_e[fe]=ft(.05,.7,Be/.7+(it-.5))*.8}J.setAttribute("color",new Tt(Ee,3)),J.setAttribute("aSnow",new Tt(_e,1)),J.computeVertexNormals(),[[-1.7,4.9,1.2],[-2.5,4.7,.9],[2.9,4.9,1],[3.7,4.6,.8],[-5.2,4.6,.8]].forEach(([fe,Ne,Be])=>{let Je=new Pe(J,G);Je.position.set(fe,.35*Be,Ne),Je.scale.setScalar(Be),Je.castShadow=!0,Je.receiveShadow=!0,Je.userData.keep=!0,a.add(Je),we.push(Je)})}let X=so(fh(new Vt({vertexColors:!0,roughness:1}),p.uSnow),5,12,!0),Re=(()=>{let G=document.createElement("canvas");G.width=G.height=128;let J=G.getContext("2d"),te=Kn(77);for(let _e=0;_e<30;_e++){J.save(),J.translate(12+te()*104,12+te()*104),J.rotate(te()*Math.PI);let fe=150+Math.floor(te()*105),Ne=6+te()*6,Be=13+te()*9;J.fillStyle=`rgb(${fe},${fe},${fe})`,J.beginPath(),J.ellipse(0,0,Ne,Be,0,0,Math.PI*2),J.fill(),J.strokeStyle="rgba(70,70,70,0.65)",J.lineWidth=1,J.beginPath(),J.moveTo(0,-Be),J.lineTo(0,Be),J.stroke(),J.restore()}let Ee=new Mn(G);return Ee.colorSpace=Kt,Ee.anisotropy=4,Ee})(),ee=so((()=>{let G=new Vt({map:Re,alphaTest:.5,alphaToCoverage:s>=1,vertexColors:!0,roughness:.8,side:wn}),J=++ph;return G.onBeforeCompile=te=>{te.uniforms.uGrow=p.uGrow,te.uniforms.uLeafTint=p.uLeafTint,te.vertexShader=te.vertexShader.replace("#include <common>",`#include <common>
attribute vec3 aCenter;
uniform float uGrow;
uniform vec3 uLeafTint;`).replace("#include <begin_vertex>",`#include <begin_vertex>
transformed = aCenter + (position - aCenter) * uGrow;`).replace("#include <color_vertex>",`#include <color_vertex>
vColor.rgb *= uLeafTint;`),te.fragmentShader=te.fragmentShader.replace("#include <normal_fragment_begin>",Ut.normal_fragment_begin.replace("normal *= faceDirection;",""))},G.customProgramCacheKey=()=>"leaf"+J,G})(),5,12,!0);function ie(G){let J=Kn(G),te=[],Ee=[],_e=new L(0,1,0);function fe(bt,Bt,Yt,jt){let Mt=new $t(jt*.68,jt,Yt,6,1);return Mt.applyMatrix4(new mt().compose(bt.clone().addScaledVector(Bt,Yt/2),new hn().setFromUnitVectors(_e,Bt),new L(1,1,1))),te.push(Mt),bt.clone().addScaledVector(Bt,Yt)}let Ne=new L(0,0,1);function Be(bt,Bt){let Yt=[],jt=[],Mt=[],Ht=[],Nt=[],_t=[],pn=.72+J()*.5,Sn=(J()-.5)*.25;for(let Xs=0;Xs<18;Xs++){let zr=J()*2-1,Mh=J()*Math.PI*2,Sh=Math.sqrt(1-zr*zr),Ac=new L(Sh*Math.cos(Mh),zr*.85,Sh*Math.sin(Mh)).normalize(),ro=bt.clone().addScaledVector(Ac,Bt*(.3+.7*Math.cbrt(J()))),Eh=.8+J()*.55,bh=Ac.clone().add(new L(J()-.5,J()-.3,J()-.5).multiplyScalar(.9)).normalize(),hp=new hn().setFromUnitVectors(Ne,bh).premultiply(new hn().setFromAxisAngle(bh,J()*6.28)),Rc=Ac.clone().add(new L(0,.3,0)).normalize(),qs=Yt.length/3;[[-.5,-.5],[.5,-.5],[.5,.5],[-.5,.5]].forEach(([Th,wh])=>{let Cc=new L(Th*Eh,wh*Eh,0).applyQuaternion(hp).add(ro);Yt.push(Cc.x,Cc.y,Cc.z),jt.push(Rc.x,Rc.y,Rc.z),Mt.push(Th+.5,wh+.5),Ht.push(ro.x,ro.y,ro.z);let Pc=pn*(.85+.3*J());Nt.push(Pc*(1+Sn),Pc,Pc*(1-Sn*.6))}),_t.push(qs,qs+1,qs+2,qs,qs+2,qs+3)}let Yn=new Lt;Yn.setAttribute("position",new Dt(Yt,3)),Yn.setAttribute("normal",new Dt(jt,3)),Yn.setAttribute("uv",new Dt(Mt,2)),Yn.setAttribute("aCenter",new Dt(Ht,3)),Yn.setAttribute("color",new Dt(Nt,3)),Yn.setIndex(_t),Ee.push(Yn)}function Je(bt,Bt,Yt,jt,Mt){let Ht=fe(bt,Bt,Yt,jt);if(Mt===0){Be(Ht,.9+J()*.7),J()<.7&&Be(Ht.clone().add(new L((J()-.5)*1.2,J()*.6,(J()-.5)*1.2)),.7+J()*.5);return}let Nt=Mt>=3?3:2+(J()<.4?1:0);for(let _t=0;_t<Nt;_t++){let pn=new L().crossVectors(Bt,new L(J()-.5,.25,J()-.5)).normalize(),Sn=Bt.clone().applyAxisAngle(pn,.45+J()*.7).add(new L(0,.18,0)).normalize();Je(Ht,Sn,Yt*(.68+J()*.14),jt*.62,Mt-1)}Mt<=2&&Be(Ht.clone().add(new L((J()-.5)*.8,.3,(J()-.5)*.8)),.8+J()*.5)}Je(new L(0,0,0),_e,2.6,.24,4);let it=bi(te),Le=it.attributes.position,ue=it.attributes.normal,pt=new Float32Array(Le.count*3),ut=new Float32Array(Le.count);for(let bt=0;bt<Le.count;bt++){let Bt=sn(Le.getX(bt)*3,Le.getY(bt)*3+Le.getZ(bt),2,64,64,6);pt[bt*3]=.16+Bt*.08,pt[bt*3+1]=.12+Bt*.06,pt[bt*3+2]=.09+Bt*.05,ut[bt]=Et(ue.getY(bt)*1.5,0,1)*.85}return it.setAttribute("color",new Tt(pt,3)),it.setAttribute("aSnow",new Tt(ut,1)),{wood:it,leaf:bi(Ee)}}let Z=[],ne=[[-11.5,-1,.95],[12.2,-3.6,1],[-9.5,-9.5,1.1],[8.5,-9.8,1.15],[-33,-9,1.15],[35,-8,1.05],[-26,11,1],[27,9,1],[-30,18.8,.75],[44,18.8,.75],[-9,-22,1.2],[14,-23,1.1]];[ie(31),ie(47)].forEach((G,J)=>{let te=ne.filter((_e,fe)=>fe%2===J),Ee=(_e,fe,Ne)=>{let Be=new Di(_e,fe,te.length),Je=new mt,it=new hn,Le=new L,ue=new L;return te.forEach(([pt,ut,bt],Bt)=>{it.setFromAxisAngle(new L(0,1,0),(pt*7+ut*3)%6.28),Le.set(pt,0,ut),ue.setScalar(bt*.95),Je.compose(Le,it,ue),Be.setMatrixAt(Bt,Je)}),Be.castShadow=Ne,Be.receiveShadow=!0,a.add(Be),Be};Ee(G.wood,X,!0),Z.push(Ee(G.leaf,ee,!0))});let le=i.neighborRoof.clone();le.onBeforeCompile=G=>{G.uniforms.uRoofSnow=p.uRoofSnow,G.fragmentShader=G.fragmentShader.replace("#include <common>",`#include <common>
uniform float uRoofSnow;`).replace("#include <map_fragment>",`#include <map_fragment>
diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.9, 0.93, 0.97), uRoofSnow * 0.92);`)},le.customProgramCacheKey=()=>"nroof";let Ae=new en({color:new Ze(1.5,.92,.42),transparent:!0,opacity:0}),Te=new Vt({color:659222,roughness:.08,metalness:.4,envMapIntensity:1.6}),ke=[],Ve=[],V=[];function vt(G){let{x:J,z:te,w:Ee,d:_e,h:fe,rh:Ne,tone:Be,rot:Je=0,garage:it,chimney:Le}=G,ue=new xt,pt=i.neighbor.clone();pt.color.setHex(Be).multiplyScalar(1.9);let ut=new kt(Ee,fe,_e);Ws(ut,{oy:fe/2});let bt=new Pe(ut,pt);bt.position.y=fe/2,bt.castShadow=!0,bt.receiveShadow=!0,ue.add(bt);let Bt=new Li;Bt.moveTo(-Ee/2-.5,0),Bt.lineTo(Ee/2+.5,0),Bt.lineTo(0,Ne),Bt.lineTo(-Ee/2-.5,0);let Yt=new Pe(new Xi(Bt,{depth:_e+1,bevelEnabled:!1}),le);if(Yt.position.set(0,fe,-_e/2-.5),Yt.castShadow=!0,Yt.receiveShadow=!0,ue.add(Yt),Le){let Nt=new Pe(new kt(.7,2.4,.7),i.stone);Nt.position.set(Ee*.22,fe+Ne*.55,-_e*.1),Nt.castShadow=!0,ue.add(Nt)}let jt=(Nt,_t,pn,Sn,Yn)=>{let Xs=new mt().compose(new L(Nt,_t,pn),new hn().setFromAxisAngle(new L(0,1,0),Sn),new L(1,1,1)),zr=new mt().compose(new L(Nt,_t,pn).add(new L(Math.sin(Sn),0,Math.cos(Sn)).multiplyScalar(-.012)),new hn().setFromAxisAngle(new L(0,1,0),Sn),new L(1,1,1));(Yn?ke:Ve).push({g:ue,m:Xs}),V.push({g:ue,m:zr})},Mt=Math.max(2,Math.round(Ee/2.4));for(let Nt=0;Nt<2;Nt++)for(let _t=0;_t<Mt;_t++)it&&Nt===0&&_t===0||jt(-Ee/2+(_t+.5)*(Ee/Mt),1.5+Nt*2.6,_e/2+.02,0,o()>.32);for(let Nt=0;Nt<2;Nt++)jt(Ee/2+.02,1.5+Nt*2.6,0,Math.PI/2,o()>.5),jt(-Ee/2-.02,1.5+Nt*2.6,0,-Math.PI/2,o()>.5);let Ht=new Pe(new kt(2.2,2.1,.12),i.walnut);if(Ht.position.set(Ee/2-1.5,1.05,_e/2+.05),ue.add(Ht),it){let Nt=new Pe(new kt(2.8,2.3,.14),i.cedar);Nt.position.set(-Ee/2+1.7,1.15,_e/2+.06),ue.add(Nt);for(let _t=1;_t<4;_t++){let pn=new Pe(new kt(2.8,.04,.16),i.trim);pn.position.set(-Ee/2+1.7,_t*.575,_e/2+.07),ue.add(pn)}}return ue.position.set(J,0,te),ue.rotation.y=Je,a.add(ue),rt.push([J,fe+Ne,te]),ue}let rt=[];[{x:-17,z:-1,w:7.4,d:7,h:5.4,rh:2.6,tone:7304314,garage:!0,chimney:!0},{x:17.5,z:.5,w:6.8,d:6.6,h:4.8,rh:2.4,tone:8023912},{x:-33,z:-2,w:7.2,d:7.5,h:5.2,rh:2.5,tone:6251884,chimney:!0},{x:34,z:0,w:7.6,d:7,h:5.6,rh:2.8,tone:6975608,garage:!0},{x:-49,z:0,w:7,d:7,h:5,rh:2.4,tone:7565679},{x:50,z:-1,w:7,d:7,h:5.2,rh:2.4,tone:6712178,chimney:!0},{x:-66,z:1,w:7,d:7,h:5,rh:2.4,tone:7171954,garage:!0},{x:67,z:0,w:7,d:7,h:5,rh:2.4,tone:7369592},{x:-24,z:40,w:7,d:7,h:5.2,rh:2.5,tone:6975092,rot:Math.PI,garage:!0},{x:-8,z:41,w:7.4,d:7,h:5.4,rh:2.6,tone:7828073,rot:Math.PI,chimney:!0},{x:10,z:40,w:7,d:6.8,h:5,rh:2.4,tone:6843764,rot:Math.PI},{x:28,z:41,w:7.2,d:7,h:5.4,rh:2.6,tone:7500921,rot:Math.PI,garage:!0},{x:46,z:40,w:7,d:7,h:5.2,rh:2.4,tone:7106678,rot:Math.PI}].forEach(vt),a.updateMatrixWorld(!0);let N=(G,J,te)=>{let Ee=new Di(J,te,G.length),_e=new mt;return G.forEach(({g:fe,m:Ne},Be)=>{_e.multiplyMatrices(fe.matrixWorld,Ne),Ee.setMatrixAt(Be,_e)}),Ee.userData.noAO=!1,a.add(Ee),Ee},M=new tn(1,1.15),K=new tn(1.16,1.31),j=[];N(ke,M,Ae),N(Ve,M,Te),N(V,K,i.trim);let he=new xt;he.visible=!1,a.add(he);let He=new $t(.05,.05,1,8,1,!0),Fe=[],me=new L(0,12.6,0);rt.forEach(([G,J,te],Ee)=>{let _e=new L(G,J+3.4,te),fe=new Ln(new bn({map:n,transparent:!0,depthWrite:!1,depthTest:!1,opacity:0}));fe.position.copy(_e),fe.renderOrder=12,fe.userData.noAO=!0,he.add(fe);let Ne=new Pe(He,new en({color:new Ze(2.2,1.3,.55),transparent:!0,opacity:0,blending:Qt,depthWrite:!1,toneMapped:!1}));Ne.scale.set(1,3.2,1),Ne.position.set(G,J+1.6,te),Ne.userData.noAO=!0,Ne.raycast=()=>{},he.add(Ne);let Be=_e.clone().lerp(me,.5);Be.y+=5+_e.distanceTo(me)*.18;let Je=new Qn([_e,_e.clone().lerp(Be,.5).setY(Be.y*.9),Be,Be.clone().lerp(me,.5).setY(Be.y*.9),me]),it=40,Le=new Pe(new Vn(Je,it,.07,5,!1),new en({color:new Ze(2.4,1.4,.6),transparent:!0,opacity:0,blending:Qt,depthWrite:!1,toneMapped:!1}));Le.userData.noAO=!0,Le.raycast=()=>{},he.add(Le);let ue=9,pt=new Lt;pt.setAttribute("position",new Tt(new Float32Array(ue*3),3));let ut=new Un(pt,new Tn({size:.9,map:c,color:new Ze(2.4,1.5,.7),transparent:!0,depthWrite:!1,blending:Qt,toneMapped:!1}));ut.frustumCulled=!1,ut.userData.noAO=!0,ut.raycast=()=>{},he.add(ut),Fe.push({spr:fe,bm:Ne,tube:Le,segs:it,curve:Je,pts:ut,n:ue,d:_e.distanceTo(me),delay:0})}),Fe.sort((G,J)=>G.d-J.d),Fe.forEach((G,J)=>{G.delay=J/Fe.length});let de=new Ln(new bn({map:n,transparent:!0,depthWrite:!1,depthTest:!1,opacity:0}));de.position.copy(me).add(new L(0,1.2,0)),de.scale.set(4.2,4.2,1),de.renderOrder=13,de.userData.noAO=!0,he.add(de);let Ge=new L;function ot(G,J){he.visible=G>.003,he.visible&&(de.material.opacity=ft(0,.15,G),de.scale.setScalar(4.2+Math.sin(J*3)*.3),Fe.forEach(te=>{let Ee=ft(te.delay*.7,te.delay*.7+.3,G);te.spr.material.opacity=Ee,te.spr.scale.setScalar(2.4*(.6+.4*Ee)),te.bm.material.opacity=.5*Ee,te.bm.scale.y=3.2+6*Ee,te.bm.position.y=te.spr.position.y-te.bm.scale.y/2-1.6;let _e=Math.floor(ft(.1+te.delay*.6,.45+te.delay*.6,G)*te.segs)*5*6;te.tube.geometry.setDrawRange(0,_e),te.tube.material.opacity=.34*Ee*(.8+.2*Math.sin(J*3+te.delay*9));let fe=te.pts.geometry.attributes.position.array,Ne=ft(.1+te.delay*.6,.45+te.delay*.6,G);for(let Be=0;Be<te.n;Be++){let Je=(Be/te.n+J*.16+te.delay)%1;if(Je>Ne){fe[Be*3+1]=-999;continue}te.curve.getPointAt(Je,Ge),fe[Be*3]=Ge.x,fe[Be*3+1]=Ge.y,fe[Be*3+2]=Ge.z}te.pts.geometry.attributes.position.needsUpdate=!0,te.pts.material.opacity=Ee}))}let Xe=new Vt({color:4864555,roughness:.95}),We=new en({color:723724}),$e=[];(()=>{let G=new xt;G.position.set(-3.4,0,-11.4),a.add(G);let J=7.4,te=6.4,Ee=3.1,_e=new kt(J,Ee,te);Ws(_e,{oy:Ee/2});let fe=new Pe(_e,i.bb.clone());fe.material.color.setScalar(1),fe.position.y=Ee/2,fe.castShadow=!0,fe.receiveShadow=!0,G.add(fe);let Ne=new Li;Ne.moveTo(-J/2-.45,0),Ne.lineTo(J/2+.45,0),Ne.lineTo(0,1.9),Ne.lineTo(-J/2-.45,0);let Be=new Pe(new Xi(Ne,{depth:te+.9,bevelEnabled:!1}),le);Be.position.set(0,Ee,-te/2-.45),Be.castShadow=!0,Be.receiveShadow=!0,G.add(Be);for(let it=0;it<2;it++){let Le=-1.8+it*3.6,ue=new Pe(new kt(3.1,2.4,.12),i.walnut);ue.position.set(Le,1.2,-te/2-.05),ue.castShadow=!0,G.add(ue);for(let bt=1;bt<4;bt++){let Bt=new Pe(new kt(3.1,.04,.14),i.trim);Bt.position.set(Le,bt*.6,-te/2-.08),G.add(Bt)}let pt=new Pe(new kt(2.7,.3,.14),i.mirror);pt.position.set(Le,2.05,-te/2-.09),G.add(pt);let ut=new Pe(new kt(3.3,2.55,.1),i.trim);ut.position.set(Le,1.27,-te/2-0),G.add(ut)}[-3.3,3.3].forEach(it=>{let Le=new Pe(new $t(.07,.08,.26,12),i.sconce);Le.position.set(it,2.55,-te/2-.2),Le.userData.noAO=!0,G.add(Le);let ue=new Ln(new bn({map:t,transparent:!0,depthWrite:!1,blending:Qt,opacity:0}));ue.position.set(it,2.55,-te/2-.5),ue.scale.set(2.2,2.2,1),ue.userData.noAO=!0,G.add(ue),$e.push(ue)});let Je=new Pe(new tn(1,1),new en({map:u,transparent:!0,depthWrite:!1,blending:Qt,opacity:0}));Je.rotation.x=-Math.PI/2,Je.position.set(0,.05,-te/2-2.2),Je.scale.set(10,5,1),Je.userData.noAO=!0,G.add(Je),$e.pool=Je})();let et=[-75.2,-49.2,-23.2,2.8,28.8,54.8,80.8];et.forEach(G=>{let J=new xt;J.position.set(G,0,-15.5),a.add(J);let te=new Pe(new $t(.13,.19,9.8,10),Xe);te.position.y=4.9,te.castShadow=!0,J.add(te);let Ee=new Pe(new kt(.12,.12,2.2),Xe);if(Ee.position.y=9.2,J.add(Ee),[-.85,0,.85].forEach(_e=>{let fe=new Pe(new $t(.04,.05,.2,8),i.ceramic);fe.position.set(0,9.36,_e),J.add(fe)}),Math.abs(G-2.8)<1){let _e=new Pe(new $t(.3,.3,.95,14),i.steel);_e.position.set(.5,8.35,.2),_e.castShadow=!0,J.add(_e);let fe=new Pe(new $t(.2,.3,.12,14),i.steel);fe.position.set(.5,8.9,.2),J.add(fe)}});let ht=[];for(let G=0;G<et.length-1;G++)[-.85,0,.85].forEach(J=>{let te=new L(et[G],9.4,-15.5+J),Ee=new L(et[G+1],9.4,-15.5+J),_e=te.clone().lerp(Ee,.5);_e.y-=.9,ht.push(new Vn(new Qn([te,te.clone().lerp(_e,.5).setY(9.4-.45),_e,_e.clone().lerp(Ee,.5).setY(9.4-.45),Ee]),24,.022,4))});{let G=new L(2.8,9.4,-15.5),J=new L(2.8,5.4,-4.3),te=G.clone().lerp(J,.5);te.y-=.7,ht.push(new Vn(new Qn([G,te,J]),20,.026,4))}let Y=new Pe(bi(ht),We);Y.castShadow=!1,Y.raycast=()=>{},a.add(Y);let ze=new xt,be=[],Ye={front:null,rear:null},qe=new xt;(()=>{let G=new jn({color:1784408,metalness:.65,roughness:.3,clearcoat:1,clearcoatRoughness:.08,envMapIntensity:1.5}),J=new jn({color:395533,metalness:.2,roughness:.04,clearcoat:1,envMapIntensity:1.8}),te=new Vt({color:1052946,roughness:.85}),Ee=new Vt({color:12107462,metalness:.9,roughness:.25}),_e=new Li;_e.moveTo(-2.3,.28),_e.lineTo(-2.38,.6),_e.quadraticCurveTo(-2.36,.92,-2.05,.98),_e.lineTo(1.35,.98),_e.quadraticCurveTo(2.05,.9,2.3,.7),_e.lineTo(2.34,.44),_e.quadraticCurveTo(2.3,.28,2.1,.28),_e.lineTo(-2.3,.28);let fe=new Pe(new Xi(_e,{depth:1.7,bevelEnabled:!0,bevelThickness:.09,bevelSize:.09,bevelSegments:4,curveSegments:14}),G);fe.geometry.translate(0,0,-.85),fe.castShadow=!0,ze.add(fe);let Ne=new Li;Ne.moveTo(-1.95,.96),Ne.quadraticCurveTo(-1.55,1.42,-.95,1.46),Ne.lineTo(.5,1.44),Ne.quadraticCurveTo(.95,1.4,1.38,.96),Ne.lineTo(-1.95,.96);let Be=new Pe(new Xi(Ne,{depth:1.62,bevelEnabled:!0,bevelThickness:.07,bevelSize:.05,bevelSegments:3,curveSegments:12}),J);Be.geometry.translate(0,0,-.81),Be.castShadow=!0,ze.add(Be);let Je=new Pe(new Si(1.9,.07,1.6,2,.03),G);Je.position.set(-.2,1.47,0),ze.add(Je),[[-1.4,.8],[1.4,.8],[-1.4,-.8],[1.4,-.8]].forEach(([Mt,Ht])=>{let Nt=new Pe(new $t(.37,.37,.26,24),te);Nt.rotation.x=Math.PI/2,Nt.position.set(Mt,.37,Ht*1+Math.sign(Ht)*.04),Nt.castShadow=!0,ze.add(Nt);let _t=new Pe(new $t(.23,.23,.27,20),Ee);_t.rotation.x=Math.PI/2,_t.position.copy(Nt.position),ze.add(_t)});let it=new Vt({color:1118481,emissive:16777215,emissiveIntensity:.1}),Le=new Vt({color:2228224,emissive:16722458,emissiveIntensity:.1}),ue=new Pe(new kt(.06,.05,1.5),it);ue.position.set(2.33,.72,0),ue.userData.noAO=!0,ze.add(ue);let pt=new Pe(new kt(.06,.05,1.5),Le);pt.position.set(-2.4,.78,0),pt.userData.noAO=!0,ze.add(pt),Ye.front=it,Ye.rear=Le;let ut=new Pe(new Si(1.8,.07,1.5,2,.03),i.snowRoof);ut.userData.keep=!0,ut.position.set(-.2,1.54,0),ze.add(ut),be.push(ut);let bt=new Pe(new Si(1,.05,1.45,2,.02),i.snowRoof);bt.userData.keep=!0,bt.position.set(1.6,1,0),bt.rotation.z=-.1,ze.add(bt),be.push(bt),ze.position.set(7.9,0,6.3),ze.rotation.y=-Math.PI/2,a.add(ze);let Bt=[new L(5.2,1.2,2.5),new L(5.55,.5,2.85),new L(6.15,.12,3.3),new L(6.7,.4,3.75),new L(7,.82,3.95)],Yt=new Pe(new Vn(new Qn(Bt),24,.028,6),new Vt({color:855310,roughness:.6}));Yt.castShadow=!0,qe.add(Yt);let jt=new Pe(new Gn(.05,10,8),new en({color:new Ze(.4,3,1.2)}));jt.position.set(5.16,1.5,2.5),jt.userData.noAO=!0,qe.add(jt),qe.userData.led=jt,a.add(qe)})();let W=r?0:s>=1?2200:900,Ce=new Lt,Me=new Float32Array(W*3),nt=new Float32Array(W*2),lt=[90,40,90];for(let G=0;G<W;G++)Me[G*3]=(o()-.5)*lt[0],Me[G*3+1]=o()*lt[1],Me[G*3+2]=(o()-.5)*lt[2],nt[G*2]=.7+o()*1.1,nt[G*2+1]=o()*6.28;Ce.setAttribute("position",new Tt(Me,3));let qt=new Tn({color:16777215,size:.11,map:c,transparent:!0,opacity:.85,depthWrite:!1,blending:Qt}),Ft=new Un(Ce,qt);Ft.frustumCulled=!1,Ft.userData.noAO=!0,a.add(Ft);let Wt=s>=1&&!r?140:0,Bn=new Lt,hi=new Float32Array(Wt*3);for(let G=0;G<Wt;G++)hi[G*3]=(o()-.5)*50,hi[G*3+1]=o()*22,hi[G*3+2]=(o()-.5)*50;Bn.setAttribute("position",new Tt(hi,3));let qn=new Tn({color:14674175,size:.42,map:c,transparent:!0,opacity:.22,depthWrite:!1,blending:Qt}),R=new Un(Bn,qn);R.frustumCulled=!1,R.userData.noAO=!0,a.add(R);let re=r?0:s>=1?1600:700,Se=new Lt,Oe=new Float32Array(re*6),Ue=new Float32Array(re),gt=[70,30,70];for(let G=0;G<re;G++){let J=(o()-.5)*gt[0],te=o()*gt[1],Ee=(o()-.5)*gt[2];Oe.set([J,te,Ee,J-.04,te+.7,Ee],G*6),Ue[G]=14+o()*6}Se.setAttribute("position",new Tt(Oe,3));let tt=new ps({color:11455464,transparent:!0,opacity:0,depthWrite:!1}),ct=new Wi(Se,tt);ct.frustumCulled=!1,ct.userData.noAO=!0,ct.raycast=()=>{},a.add(ct);let at=r?0:s>=1?420:160,Pt=new Lt,It=new Float32Array(at*3),vn=new Float32Array(at*2),di=new Float32Array(at*3),wi=[80,22,80],ti=[[.95,.55,.1],[.85,.3,.08],[.9,.75,.15],[.6,.2,.05]];for(let G=0;G<at;G++){It[G*3]=(o()-.5)*wi[0],It[G*3+1]=o()*wi[1],It[G*3+2]=(o()-.5)*wi[2],vn[G*2]=.5+o()*.8,vn[G*2+1]=o()*6.28;let J=ti[G%4];di.set(J,G*3)}Pt.setAttribute("position",new Tt(It,3)),Pt.setAttribute("color",new Tt(di,3));let fi=new Un(Pt,new Tn({size:.2,vertexColors:!0,map:c,transparent:!0,opacity:.9,depthWrite:!1}));fi.frustumCulled=!1,fi.userData.noAO=!0,a.add(fi);let ws=[];for(let G=0;G<22;G++){let J=new Ln(new bn({map:l,transparent:!0,depthWrite:!1,opacity:0,color:12568276}));J.userData={age:G/22*6,noAO:!0},J.renderOrder=5,a.add(J),ws.push(J)}let I=new Pe(xe,Ke);I.position.set(.9,0,-12.4),I.scale.setScalar(.75),I.castShadow=!0,I.visible=!1,a.add(I);let Q=new Set([A,x,C,U,S,P,F,b,I]),pe=new xt;a.add(pe),a.children.slice().forEach(G=>{G!==pe&&!Q.has(G)&&pe.add(G)});let ae=new L;function ce(G){qt.color.set(G?6963104:16777215)}function Qe(G,J,te,Ee,_e,fe,Ne){d.opacity=G.ground,d.depthWrite=G.ground>.95,A.visible=G.ground>.01,y.forEach(Le=>{let ue=G.ground<.99;Le.transparent!==ue&&(Le.transparent=ue,Le.needsUpdate=!0),Le.opacity=G.ground,Le.depthWrite=!ue}),p.uSnow.value=G.snow,p.uRoofSnow.value=G.roofSnow,p.uGrow.value=G.grow,p.uLeafTint.value.copy(G.leafTint),ot(G.beacons||0,J),I.visible=G.section>.3,F.visible=G.snow>.25,Z.forEach(Le=>{Le.visible=G.grow>.02,Le.castShadow=G.grow>.5}),be.forEach(Le=>{Le.visible=G.snow>.5}),qe.visible=G.explode<.05,ze.visible=!0;let Be=1-Ee;Ye.front.emissiveIntensity=.1+2.2*Be,Ye.rear.emissiveIntensity=.1+3*Be,qe.userData.led.scale.setScalar(.8+.25*Math.sin(J*3));let Je=ft(.35,.9,G.ground);we.forEach(Le=>{Le.visible=G.ground>.5||G.explode>.05}),k.forEach(Le=>{Le.halo.material.opacity=.75*Be,Le.pool.material.opacity=.55*Be*Je}),ge.intensity=55*Be,ye.intensity=40*Be,O.color.setRGB(3.2,2.2,1.1).multiplyScalar(.06+.94*Be),$e.forEach(Le=>{Le.material.opacity=.5*Be}),$e.pool.material.opacity=.4*Be*Je,De.forEach((Le,ue)=>{Le.material.opacity=.5*Be*Et(st(Ne,ue),0,1)*(1-G.ghost)*Je}),Ae.opacity=Be*.9,Ft.position.set(_e.x,0,_e.z),R.position.set(_e.x,0,_e.z),ct.position.set(_e.x,0,_e.z),fi.position.set(_e.x,0,_e.z);let it=G.snowfall;if(Ft.visible=R.visible=it>.02&&W>0,Ft.visible){let Le=Ce.attributes.position.array;for(let pt=0;pt<W;pt++)Le[pt*3+1]-=nt[pt*2]*te*1.5,Le[pt*3]+=Math.sin(J*.7+nt[pt*2+1])*te*.3,Le[pt*3+2]+=Math.cos(J*.5+nt[pt*2+1])*te*.2,Le[pt*3+1]<0&&(Le[pt*3+1]=lt[1]);Ce.attributes.position.needsUpdate=!0;let ue=Bn.attributes.position.array;for(let pt=0;pt<Wt;pt++)ue[pt*3+1]-=.8*te,ue[pt*3+1]<0&&(ue[pt*3+1]=22);Bn.attributes.position.needsUpdate=!0,qt.opacity=.8*it*(1-Ee*.45),qn.opacity=.2*it*(1-Ee*.5)}if(ct.visible=G.rain>.02&&re>0,ct.visible){let Le=Se.attributes.position.array;for(let ue=0;ue<re;ue++){let pt=Ue[ue]*te;Le[ue*6+1]-=pt,Le[ue*6+4]-=pt,Le[ue*6+4]<0&&(Le[ue*6+1]+=gt[1],Le[ue*6+4]+=gt[1])}Se.attributes.position.needsUpdate=!0,tt.opacity=.32*G.rain}if(fi.visible=G.leaves>.02&&at>0,fi.visible){let Le=Pt.attributes.position.array;for(let ue=0;ue<at;ue++)Le[ue*3+1]-=vn[ue*2]*te*.9,Le[ue*3]+=(Math.sin(J*.9+vn[ue*2+1])*.7+.35)*te,Le[ue*3+2]+=Math.cos(J*.6+vn[ue*2+1])*.4*te,Le[ue*3+1]<0&&(Le[ue*3+1]=wi[1]);Pt.attributes.position.needsUpdate=!0,fi.material.opacity=.9*G.leaves}ws.forEach(Le=>{Le.userData.age+=te*.55,Le.userData.age>6&&(Le.userData.age-=6);let ue=Le.userData.age/6;ae.copy(fe),ae.y+=ue*5.2,ae.x+=ue*2.2+Math.sin(ue*5+Le.id)*.18,ae.z+=Math.cos(ue*3+Le.id)*.15,Le.position.copy(ae),Le.scale.setScalar(.5+ue*2.6),Le.material.opacity=Math.sin(Math.PI*Math.min(1,ue*1.3))*.34*G.smoke*(.5+.5*Be)})}let st=(G,J)=>G-J*.3;return{world:a,ground:A,groundMat:d,U:p,update:Qe,lamps:k,setThermal:ce,evGroup:ze,props:pe,sight:jf}}var cn={wire:16761963,cold:5220095,hot:16739151,drain:10135476,supply:9433288,ret:9083903,radon:14257407},mh=2.4;function tp({house:i,reduce:e}){let t=(S,D,P)=>new L(S,D,P),n=os("rgba(255,255,255,0.6)"),s={netE:[],netW:[],netA:[],netR:[]},r={netE:[],netW:[],netA:[],netR:[]},a={};Object.keys(s).forEach(S=>{a[S]=new xt,a[S].visible=!1,a[S].userData.noAO=!0,i.add(a[S])});let o=S=>{let D=new Er;for(let P=1;P<S.length;P++)D.add(new ms(S[P-1],S[P]));return D};function c(S,D,P,F,k){let H=o(D.map(De=>t(De[0],De[1],De[2]))),z=H.getLength(),O=Math.max(6,Math.round(z*7)),B=6,q=new en({color:P,toneMapped:!1,fog:!1,transparent:!0});q.color.multiplyScalar(1.5);let oe=new Pe(new Vn(H,O,F,B,!1),q),ge=new en({color:P,transparent:!0,opacity:.2,blending:Qt,depthWrite:!1,toneMapped:!1,fog:!1});ge.color.multiplyScalar(mh);let ye=new Pe(new Vn(H,O,F*3.4,B,!1),ge);oe.renderOrder=7,ye.renderOrder=8,oe.userData.noAO=ye.userData.noAO=!0,oe.raycast=ye.raycast=()=>{},a[S].add(oe,ye),s[S].push({tube:oe,glow:ye,segs:O,radial:B,gmat:ge}),k&&r[S].push({curve:H,len:z,n:Math.max(3,Math.round(z*k.density)),speed:k.speed,color:k.color||P})}let l=[];for(let S=0;S<=10;S++){let D=S/10;l.push([2.8,dt(9.1,7.7,D)-1*Math.sin(Math.PI*D),dt(-15.5,-4.45,D)])}c("netE",[...l,[2.8,1.45,-4.3],[2.8,-.35,-4.3],[2.8,-.35,-3.86],[2.8,-.72,-3.86]],cn.wire,.045,{density:2.2,speed:6});let u=[2.8,-.72,-3.78],p=[2.8,-.2,-3.78];c("netE",[u,p,[2.2,-.2,-3.78],[2.2,1.35,-3.9],[4.6,1.35,-3.9]],cn.wire,.032,{density:2.5,speed:5}),c("netE",[u,p,[4.94,-.2,-3.78],[4.94,-.2,3.7],[4.94,.6,3.92],[1.45,.6,3.92],[1.45,2.45,3.92],[.05,2.45,3.92],[.05,.6,3.92],[-4.94,.6,3.92],[-4.94,.6,-3.2]],cn.wire,.032,{density:2.5,speed:5}),c("netE",[u,p,[4.94,-.2,-3.78],[4.94,3.85,-3.78],[4.94,3.85,3.92],[-4.94,3.85,3.92],[-4.94,3.85,-2.4]],cn.wire,.032,{density:2.5,speed:5}),c("netE",[u,p,[1.28,-.2,-3.78],[1.28,-.2,-1],[1.28,3.05,-1],[-1.5,3.05,-1],[-1.5,3.05,.5]],cn.wire,.03,{density:2.5,speed:5}),c("netE",[[1.28,3.05,-1],[3,3.05,-1],[3,3.05,-1.6]],cn.wire,.03,{density:2.5,speed:5}),c("netE",[u,p,[4.94,-.2,-3.78],[4.94,-.2,2.5],[4.94,1.3,2.5],[5.1,1.3,2.5]],cn.wire,.034,{density:2.5,speed:5}),c("netW",[[-.5,-2.2,16],[-.5,-2.2,3.75],[-.5,-.32,3.75],[-.5,-.32,-3],[-1.95,-.32,-3],[-1.95,-1.35,-3]],cn.cold,.072,{density:2,speed:2.4}),c("netW",[[-.5,-.32,-3.2],[2.4,-.32,-3.2],[2.4,-.32,-3.7],[2.4,1.05,-3.7]],cn.cold,.051,{density:2,speed:2.4}),c("netW",[[-.5,-.32,-3.45],[-2.3,-.32,-3.45],[-2.3,3.95,-3.45],[-2.3,3.95,-3.62]],cn.cold,.051,{density:2,speed:2.4}),c("netW",[[-2.3,3.6,-3.45],[-3.4,3.6,-3.45]],cn.cold,.051,{density:2,speed:2.4}),c("netW",[[-2.2,-1.35,-3],[-2.2,-.46,-3],[-2.2,-.46,-3.32],[2.55,-.46,-3.32],[2.55,-.46,-3.72],[2.55,1.05,-3.72]],cn.hot,.051,{density:2,speed:2.4}),c("netW",[[-2.2,-.46,-3.32],[-2.47,-.46,-3.32],[-2.47,3.95,-3.32],[-2.47,3.95,-3.6]],cn.hot,.051,{density:2,speed:2.4}),c("netW",[[-2.47,3.6,-3.32],[-3.5,3.6,-3.32]],cn.hot,.051,{density:2,speed:2.4}),c("netW",[[-3.6,3.48,-3.62],[-2.6,3.48,-3.62],[-2.6,-2.95,-3.62],[.6,-2.95,-3.62],[.6,-3.2,-4.3],[.6,-3.45,-9.5]],cn.drain,.087,{density:1.6,speed:2.8}),c("netW",[[2.6,.95,-3.86],[2.6,-2.9,-3.86],[.75,-2.9,-3.86]],cn.drain,.072,{density:1.6,speed:2.8}),c("netW",[[-2.6,3.48,-3.62],[-2.6,10.2,-3.62]],cn.drain,.065,null);let f=[-3.3,-1.15,-2.6],h=[-3.3,-.12,-2.6];c("netA",[f,h,[2.6,-.12,-2.6],[4.4,-.12,-2.6],[4.4,-.12,-1.2],[4.4,.34,-1.2]],cn.supply,.091,{density:1.6,speed:3.2}),c("netA",[h,[-2,-.12,-2.6],[-2,-.12,3.4],[-2,.34,3.4]],cn.supply,.078,{density:1.6,speed:3.2}),c("netA",[[3.1,-.12,-2.6],[3.1,-.12,3.45],[3.1,.34,3.45]],cn.supply,.078,{density:1.6,speed:3.2}),c("netA",[[1.28,-.12,-2.6],[1.28,3.35,-2.6],[3.8,3.35,-2.6],[3.8,3.35,2.9],[3.8,3.52,2.9]],cn.supply,.078,{density:1.6,speed:3.2}),c("netA",[[1.28,3.35,-2.6],[-3.8,3.35,-2.6],[-3.8,3.35,2],[-3.8,3.52,2]],cn.supply,.078,{density:1.6,speed:3.2}),c("netA",[[-1.75,5.6,1],[-1.75,-.32,1],[-3.3,-.32,1],[-3.3,-.32,-2.15],[-3.3,-1.05,-2.15]],cn.ret,.091,{density:1.6,speed:2.4}),c("netR",[[-1.2,-2.92,-1.5],[-1.2,11.6,-1.5]],cn.radon,.075,{density:2.2,speed:2.6});let d={},_=new Ze,g=new Ze(16777215);Object.keys(r).forEach(S=>{let D=r[S];if(!D.length)return;let P=D.reduce((B,q)=>B+q.n,0),F=new Lt;F.setAttribute("position",new Tt(new Float32Array(P*3),3));let k=new Float32Array(P*3),H=0;D.forEach(B=>{_.set(B.color).lerp(g,.45).multiplyScalar(mh);for(let q=0;q<B.n;q++,H++)k[H*3]=_.r,k[H*3+1]=_.g,k[H*3+2]=_.b}),F.setAttribute("color",new Tt(k,3));let z=new Tn({size:S==="netE"?.2:.26,map:n,vertexColors:!0,transparent:!0,depthWrite:!1,blending:Qt,toneMapped:!1,fog:!1}),O=new Un(F,z);O.frustumCulled=!1,O.renderOrder=9,O.raycast=()=>{},a[S].add(O),d[S]=O});let m=e?0:260,E=new Lt,T=new Float32Array(m*3),v=new Float32Array(m),y=t(-1.2,-2.95,-1.5),A=S=>{T[S*3]=(Math.random()-.5)*9.4,T[S*3+1]=-3.05-Math.random()*1.6,T[S*3+2]=(Math.random()-.5)*7.4,v[S]=.4+Math.random()*.8};for(let S=0;S<m;S++)A(S);E.setAttribute("position",new Tt(T,3));let w=new Tn({color:new Ze(cn.radon).multiplyScalar(mh),size:.2,map:os("rgba(217,140,255,0.6)"),transparent:!0,opacity:0,depthWrite:!1,blending:Qt,toneMapped:!1,fog:!1}),x=new Un(E,w);x.frustumCulled=!1,x.raycast=()=>{},a.netR.add(x);let b=new L,C={netE:1,netW:1,netA:1,netR:1};function U(S,D,P,F){let k=S.explode<.06;if(Object.keys(s).forEach(H=>{let z=S[H],O=a[H];if(O.visible=k&&z>.003,!O.visible)return;let B=!D||D===H?1:.2,q=C[H]=dt(C[H],B,Math.min(1,F*4));s[H].forEach(ge=>{let ye=Math.floor(Et(z,0,1)*ge.segs)*ge.radial*6;ge.tube.geometry.setDrawRange(0,ye),ge.glow.geometry.setDrawRange(0,ye),ge.tube.material.opacity=q,ge.gmat.opacity=(.22+.1*Math.sin(P*3+ge.segs))*q});let oe=d[H];if(oe){let ge=oe.geometry.attributes.position.array,ye=0;r[H].forEach(De=>{for(let Ke=0;Ke<De.n;Ke++,ye++){let $=(Ke/De.n+P*De.speed/De.len)%1;if($>z){ge[ye*3+1]=-999;continue}De.curve.getPointAt($,b),ge[ye*3]=b.x,ge[ye*3+1]=b.y,ge[ye*3+2]=b.z}}),oe.geometry.attributes.position.needsUpdate=!0,oe.material.opacity=Et(z*3,0,1)*q}}),m&&a.netR.visible){w.opacity=Et(S.netR*2,0,.9)*C.netR;for(let H=0;H<m;H++){b.set(y.x-T[H*3],y.y-T[H*3+1],y.z-T[H*3+2]);let z=b.length();if(z<.25){A(H);continue}b.multiplyScalar(F*v[H]*1.1/z),T[H*3]+=b.x+Math.sin(P+H)*F*.15,T[H*3+1]+=b.y,T[H*3+2]+=b.z}E.attributes.position.needsUpdate=!0}}return{groups:a,update:U}}var b1=`varying vec3 vW; varying vec3 vN;
void main(){ vec4 w = modelMatrix * vec4(position, 1.0);
#ifdef USE_INSTANCING
  w = modelMatrix * instanceMatrix * vec4(position, 1.0);
#endif
  vW = w.xyz; vN = normalize(mat3(modelMatrix) * normal); gl_Position = projectionMatrix * viewMatrix * w; }`,T1=`uniform float uBase, uGrad, uBand, uTime; varying vec3 vW; varying vec3 vN;
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
  gl_FragColor = vec4(toLinear(iron(t + rim)), 1.0); }`;function np({scene:i,M:e,skipParents:t,onChange:n}){let s={value:0},r=new Map;function a(f,h=0,d=0){let _=f+"|"+h+"|"+d;return r.has(_)||r.set(_,new Xt({uniforms:{uBase:{value:f},uGrad:{value:h},uBand:{value:d},uTime:s},vertexShader:b1,fragmentShader:T1})),r.get(_)}let o={hvac:.93,"water-heaters":.88,electrical:.6,plumbing:.56,installation:.5,radon:.22,solar:.17,roofing:[.4,.12],foundation:.33,sewer:.3,asbestos:.5};function c(f,h){if(h&&o[h]!==void 0)return a(...[].concat(o[h]));let d=f.userData&&f.userData.th;return d?a(...d):a(.3)}let l=[],u=!1;function p(f){f!==u&&(u=f,i.traverse(h=>{if(h.isSprite&&h.userData.noAO){h.visible=!u&&(h.userData.wasVisible??!0);return}if(!(!(h.isMesh||h.isInstancedMesh)||!h.material)&&!h.userData.noThermal){for(let d=h.parent;d;d=d.parent)if(t.includes(d))return;u?(h.userData.mat0=h.material,h.material=Array.isArray(h.material)?h.material.map(d=>c(d,h.userData.sys)):c(h.material,h.userData.sys)):h.userData.mat0&&(h.material=h.userData.mat0,h.userData.mat0=null)}}),n&&n(u))}return{set:p,time:s,get on(){return u}}}function ip({M:i,layers:e,glowTex:t}){let n=[],s=(h,d=.7,_=0,g=[.5],m={})=>{let E=new Vt({color:h,roughness:d,metalness:_,...m});return E.userData.th=g,E},r=(h,d=[.95])=>{let _=new Vt({color:2236440,emissive:h,emissiveIntensity:0,roughness:.5});return _.userData.th=d,n.push(_),_},a={rug:s(5787722,1),rug2:s(3884628,1),cushion:s(13215610,.95),cushion2:s(9413544,.95),tvBlack:s(789775,.25,.3,[.6]),book1:s(9190190,.8),book2:s(3100522,.8),book3:s(14208440,.8),plant:s(4156218,.9,0,[.3]),pot:s(14209734,.6),sheets:s(15328474,.95),duvet:s(7043718,.95),wood:s(10122320,.55),woodDark:s(4929062,.55),steel:s(11186358,.3,.9,[.55]),quartz:s(15328991,.25,0,[.5]),cabinet:s(3812386,.5,0,[.5]),tile:s(13620952,.4,0,[.4]),bin:s(3829659,.6),bin2:s(12936750,.6),cardboard:s(11570526,.9),tv:r(10274047,[.85]),lamp:r(16762746),pendant:r(16765594),screen:r(13625599,[.8]),led:r(6750105,[.7]),pot:s(14868180,.55)},o=(h,d,_,g,m,E,T,v,y,A=0)=>{let w=new Pe(new Si(h,d,_,2,Math.min(g,h/2-.001,d/2-.001,_/2-.001)),m);return w.position.set(E,T+d/2,v),w.rotation.y=A,w.castShadow=!0,w.receiveShadow=!0,w.userData.noPick=!0,y.add(w),w},c=(h,d,_,g,m,E,T,v=18)=>{let y=new Pe(new $t(h,h,d,v),_);return y.position.set(g,m+d/2,E),y.castShadow=!0,y.receiveShadow=!0,y.userData.noPick=!0,T.add(y),y},l=(h,d,_,g,m,E,T=1)=>{let v=new Pe(new Gn(h,14,10),d);return v.position.set(_,g,m),v.scale.y=T,v.castShadow=!0,v.userData.noPick=!0,E.add(v),v},u=(h,d,_,g,m,E=a.woodDark)=>{let T=new xt;return T.position.set(h,d,_),T.rotation.y=g,m.add(T),o(.44,.05,.44,.02,E,0,.44,0,T),[[-.19,-.19],[.19,-.19],[-.19,.19],[.19,.19]].forEach(([v,y])=>c(.02,.44,a.steel,v,0,y,T,8)),o(.44,.45,.04,.02,E,0,.5,-.2,T),T},p=(h,d,_,g,m=1.4)=>{c(.14,.03,a.steel,h,d,_,g,14),c(.015,m,a.steel,h,d,_,g,8);let E=new Pe(new $t(.17,.24,.3,18,1,!0),a.lamp);return E.material.side=wn,E.position.set(h,d+m+.05,_),E.userData.noAO=!0,E.userData.noPick=!0,g.add(E),E};(()=>{let h=e.main,d=.3;o(3.4,.02,2.5,.01,a.rug,-2.3,d,.7,h);let _=new xt;_.position.set(-.9,d,.7),_.rotation.y=-Math.PI/2,h.add(_),o(2.3,.4,.95,.1,a.fabric??i.fabric,0,.1,0,_),o(2.3,.45,.25,.1,i.fabric,0,.45,-.38,_),o(.25,.3,.9,.08,i.fabric,-1.07,.3,0,_),o(.25,.3,.9,.08,i.fabric,1.07,.3,0,_),o(.5,.4,.14,.06,a.cushion,-.6,.55,-.1,_),o(.5,.4,.14,.06,a.cushion2,.6,.55,-.1,_),[[-.9,.18],[.9,.18]].forEach(([E])=>{[[-1.05,-.4],[1.05,-.4],[-1.05,.4],[1.05,.4]].forEach(([T,v])=>c(.03,.1,a.woodDark,T,0,v,_,8))}),o(1,.05,.6,.03,a.wood,-2.75,d+.34,.7,h),[[-.4,-.22],[.4,-.22],[-.4,.22],[.4,.22]].forEach(([E,T])=>c(.025,.34,a.woodDark,-2.75+E,d,.7+T,h,8)),u(-2,d,2.5,Math.PI,h,i.fabric2??a.cushion2),o(.4,.5,2,.04,a.woodDark,-4.62,d,.7,h),o(.05,.75,1.5,.015,a.tvBlack,-4.74,d+.95,.7,h);let g=new Pe(new tn(1.4,.68),a.tv);g.rotation.y=Math.PI/2,g.position.set(-4.7,d+1.32,.7),g.userData.noPick=!0,h.add(g),o(.34,2,2.2,.02,a.woodDark,.9,d,-1.8,h),[.5,1,1.5].forEach((E,T)=>{o(.2,.28,1.9,.01,[a.book1,a.book2,a.book3][T],1,d+E+.05,-1.8,h)}),c(.17,.4,a.pot,-4.2,d,3.2,h,14),l(.38,a.plant,-4.2,d+.85,3.2,h,1.3),l(.28,a.plant,-4.3,d+1.15,3.1,h,1.2),p(-.45,d,3.1,h,1.45),o(3,.72,.36,.02,a.cabinet,2.9,d+1.55,-3.7,h),o(.9,.14,.6,.02,a.steel,2.4,d+1.3,-3.58,h),o(.34,.9,.34,.02,a.steel,2.4,d+1.45,-3.7,h),o(2.2,.06,1,.02,a.quartz,3,d+.9,-.6,h),o(2.1,.9,.9,.03,a.cabinet,3,d,-.6,h),[2.4,3,3.6].forEach(E=>{c(.17,.05,a.woodDark,E,d+.62,.35,h,16),c(.025,.62,a.steel,E,d,.35,h,8)}),[2.3,3,3.7].forEach(E=>{c(.006,.7,a.steel,E,d+2.1,-.6,h,4);let T=new Pe(new Gn(.15,16,10,0,Math.PI*2,0,Math.PI/2),a.pendant);T.position.set(E,d+2.1,-.6),T.userData.noAO=!0,T.userData.noPick=!0,h.add(T)}),o(1.8,.05,.92,.02,a.wood,3.2,d+.72,2.4,h),[[-.8,-.4],[.8,-.4],[-.8,.4],[.8,.4]].forEach(([E,T])=>c(.035,.72,a.woodDark,3.2+E,d,2.4+T,h,8)),u(2.5,d,1.55,0,h),u(3.9,d,1.55,0,h),u(2.5,d,3.25,Math.PI,h),u(3.9,d,3.25,Math.PI,h);let m=new Pe(new $t(.28,.28,.22,20,1,!0),a.pendant);m.material.side=wn,m.position.set(3.2,d+2.15,2.4),m.userData.noAO=!0,m.userData.noPick=!0,h.add(m),c(.006,.55,a.steel,3.2,d+2.2,2.4,h,4),o(1,.45,.38,.03,a.wood,.6,d,3.55,h)})(),(()=>{let h=e.upper,d=3.45;o(2,.42,2.15,.06,a.sheets,2.4,d,-2.55,h),o(1.96,.18,1.55,.08,a.duvet,2.4,d+.38,-2.2,h),o(2,.9,.1,.03,a.woodDark,2.4,d,-3.72,h),o(.6,.22,.38,.08,a.sheets,1.85,d+.5,-3.3,h),o(.6,.22,.38,.08,a.sheets,2.95,d+.5,-3.3,h),[[1],[3.8]].forEach(([g])=>{o(.5,.5,.4,.03,a.woodDark,g,d,-3.55,h),p(g,d+.5,-3.55,h,.34)}),o(2,.02,1.4,.01,a.rug2,2.4,d,-1,h),o(.6,2.3,2,.02,a.woodDark,4.55,d,-1.2,h),o(1.5,.05,.7,.02,a.wood,.6,d+.72,3.35,h),[[-.7,-.3],[.7,-.3],[-.7,.3],[.7,.3]].forEach(([g,m])=>c(.03,.72,a.steel,.6+g,d,3.35+m,h,8)),o(.7,.42,.04,.01,a.tvBlack,.6,d+.98,3.52,h);let _=new Pe(new tn(.64,.36),a.screen);_.position.set(.6,d+1.19,3.495),_.rotation.y=Math.PI,_.userData.noPick=!0,h.add(_),u(.6,d,2.7,Math.PI,h,a.cushion2),o(1.5,.4,2,.06,a.sheets,-3.4,d,2.2,h),o(1.46,.16,1.4,.07,a.cushion2,-3.4,d+.36,2.5,h),o(.9,.9,.5,.03,a.woodDark,-4.55,d,.6,h),o(.9,.02,.06,.01,a.tile,-3.2,d,-2.6,h),o(.42,.34,.6,.12,i.ceramic,-4.4,d,-3.2,h),o(.4,.4,.2,.06,i.ceramic,-4.4,d+.34,-3.5,h),o(.7,.9,.03,.01,i.mirror,-2.4,d+1.2,-3.84,h)})(),(()=>{let h=e.basement,d=-2.8;o(.68,.92,.68,.04,i.white,.5,d,-3.5,h),o(.68,.92,.68,.04,i.white,1.25,d,-3.5,h),c(.2,.03,a.tvBlack,.5,d+.93,-3.15,h,18),c(.2,.03,a.tvBlack,1.25,d+.93,-3.15,h,18),o(.6,.06,.4,.01,a.tvBlack,.88,d+.92,-3.88,h),o(2,.06,.75,.01,a.wood,-4,d+.88,2.6,h),o(1.9,.88,.7,.01,a.cabinet,-4,d,2.6,h),o(.3,.06,.12,.01,a.bin2,-4.4,d+.94,2.55,h),o(.2,.2,.2,.02,a.bin,-3.7,d+.94,2.7,h),o(1.7,2,.42,.01,a.steel,4.25,d,2.9,h,0),[.3,.9,1.5].forEach((g,m)=>{o(.5,.3,.34,.03,[a.bin,a.bin2,a.cardboard][m],3.8,d+g+.05,2.9,h),o(.6,.3,.34,.03,[a.cardboard,a.bin,a.bin2][m],4.5,d+g+.05,2.9,h)}),c(.32,.05,a.tvBlack,.66,d,1.6,h,20),c(.1,.5,a.pvc??i.pvc,.66,d,1.6,h,12);let _=new Pe(new Gn(.03,8,6),a.led);_.position.set(.66,d+.58,1.6),_.userData.noAO=!0,_.userData.noPick=!0,h.add(_),o(.5,.4,.4,.02,a.cardboard,-1.4,d,2.9,h,.3),o(.45,.35,.4,.02,a.cardboard,-1.3,d+.4,2.9,h,.1),o(1.6,.02,1.2,.01,a.rug,.4,d,.8,h)})();function f(h,d){let _=Et(.25+.75*h+d*.3,0,1.1);a.tv.emissiveIntensity=1.3*_,a.screen.emissiveIntensity=1.1*_,a.lamp.emissiveIntensity=2.2*_,a.pendant.emissiveIntensity=2.6*_,a.led.emissiveIntensity=3}return{update:f,glows:n}}var ls=.38;function sp({scene:i,M:e,tier:t,reduce:n}){let s=new xt;s.visible=!1,i.add(s);let r=Kn(55),a=os("rgba(255,255,255,0.65)"),o=(xe,we,X)=>new L(xe,we,X),c=.45,l=.66,u=(()=>{let xe=Math.round(1024*xc()),we=Math.round(512*xc()),X=document.createElement("canvas");X.width=xe,X.height=we;let Re=X.getContext("2d"),ee=Re.createImageData(xe,we),ie=ee.data,Z=[[0,[58,41,29]],[.5,[92,64,40]],[.62,[150,106,62]],[2.2,[138,98,58]],[2.4,[150,142,120]],[4.6,[124,118,104]],[4.8,[100,112,120]],[7,[90,98,108]],[9,[74,78,86]]],ne=Ae=>{let Te=0;for(;Te<Z.length-2&&Z[Te+1][0]<=Ae;)Te++;let[ke,Ve]=Z[Te],[V,vt]=Z[Te+1],rt=Et((Ae-ke)/(V-ke),0,1);return[dt(Ve[0],vt[0],rt),dt(Ve[1],vt[1],rt),dt(Ve[2],vt[2],rt)]};for(let Ae=0;Ae<we;Ae++)for(let Te=0;Te<xe;Te++){let ke=Ae/we*9+(sn(Te/90,Ae/40,3,11,8,5)-.5)*.7+Math.sin(Te*.02+Ae*.01)*.12,Ve=ne(Et(ke,0,9)),V=(sn(Te/6,Ae/6,2,170,85,9)-.5)*34,vt=(Ae*xe+Te)*4;ie[vt]=Et(Ve[0]+V,0,255),ie[vt+1]=Et(Ve[1]+V,0,255),ie[vt+2]=Et(Ve[2]+V*.9,0,255),ie[vt+3]=255}Re.putImageData(ee,0,0);for(let Ae=0;Ae<420*xc();Ae++){let Te=105+r()*75;Re.fillStyle=`rgba(${Te|0},${Te*.96|0},${Te*.86|0},0.85)`,Re.beginPath(),Re.ellipse(r()*xe,(2.5+r()*2.1)/9*we,1.5+r()*3.5,1.2+r()*2.4,r()*3,0,6.3),Re.fill()}let le=new Mn(X);return le.colorSpace=Kt,le.wrapS=En,le.anisotropy=8,le})(),p=new Vt({map:u,roughness:1,metalness:0});u.repeat.set(6,1);let f=new Pe(new tn(240,9),p);f.rotation.y=-Math.PI/2,f.position.set(c+ls,-4.52,0),f.userData.noAO=!0,f.userData.noPick=!0,f.receiveShadow=!1,s.add(f);let h=(()=>{let xe=document.createElement("canvas");xe.width=4,xe.height=256;let we=xe.getContext("2d"),X=we.createLinearGradient(0,0,0,256);X.addColorStop(0,"rgb(74,78,86)"),X.addColorStop(.35,"rgb(24,26,31)"),X.addColorStop(1,"rgb(6,7,9)"),we.fillStyle=X,we.fillRect(0,0,4,256);let Re=new Mn(xe);return Re.colorSpace=Kt,Re})(),d=new Pe(new tn(240,60),new en({map:h,fog:!1,toneMapped:!1}));d.rotation.y=-Math.PI/2,d.position.set(c+ls,-9.02-30,0),d.userData.noAO=!0,d.userData.noPick=!0,d.raycast=()=>{},s.add(d);let _=new xt;s.add(_);for(let xe=0;xe<=9;xe++){let we=new Pe(new kt(.04,.05,xe%3===0?1.4:.8),new en({color:16039294,toneMapped:!1}));we.position.set(0,-xe,31-(xe%3===0?.7:.4)),we.userData.noAO=!0,we.raycast=()=>{},_.add(we)}let g=new Pe(new kt(.06,.07,240),new en({color:16039294,toneMapped:!1}));g.position.set(c+ls-.02,.02,0),g.userData.noAO=!0,g.raycast=()=>{},s.add(g);let m=(xe,we=.45,X=.2)=>{let Re=new Vt({color:xe,roughness:we,metalness:X,emissive:xe,emissiveIntensity:.12,side:wn});return Re.userData.th=[.3],Re},E={water:m(4165606,.4,.3),gas:m(15775786,.45,.2),sewer:m(12169888,.8,0),tile:m(15855334,.6,0),roots:m(8017458,.95,0),sump:m(8362672,.5,.3),crack:new en({color:new Ze(3,.5,.35),toneMapped:!1})};E.roots.emissiveIntensity=0;let T={water:new xt,gas:new xt,sewer:new xt,found:new xt,radon:new xt};Object.values(T).forEach(xe=>s.add(xe));let v=(xe,we,X,Re,ee=0)=>{let ie=new Qn(xe.map(ne=>o(...ne)),!1,"catmullrom",.05),Z=new Pe(new Vn(ie,ee||Math.max(8,xe.length*8),we,10,!1),X);return Z.castShadow=!1,Z.userData.noPick=!0,Re.add(Z),ie},y=(xe,we,X,Re,ee)=>{let ie=o(...xe),Z=o(...we),ne=ie.distanceTo(Z),le=new Pe(new $t(X,X,ne,16,1,!0),Re);return le.position.copy(ie).lerp(Z,.5),le.quaternion.setFromUnitVectors(o(0,1,0),Z.clone().sub(ie).normalize()),le.userData.noPick=!0,ee.add(le),new ms(ie,Z)},A=[];function w(xe,we,X,Re,ee,ie=.22){let Z=new Lt;Z.setAttribute("position",new Tt(new Float32Array(we*3),3));let ne=new Un(Z,new Tn({size:ie,map:a,color:new Ze(Re).multiplyScalar(2.2),transparent:!0,depthWrite:!1,blending:Qt,toneMapped:!1}));ne.frustumCulled=!1,ne.userData.noAO=!0,ne.raycast=()=>{},ee.add(ne),A.push({curve:xe,n:we,speed:X,len:xe.getLength(),pts:ne,group:ee})}y([c-12,-2.4,22.8],[c+60,-2.4,22.8],.24,E.water,T.water),y([c-12,-1.3,24.7],[c+60,-1.3,24.7],.11,E.gas,T.gas);let x=v([[l,-2.4,22.8],[l,-2.3,18],[l,-2.2,6],[l,-2.2,3.75]],.075,E.water,T.water,30);w(x,20,2,7320831,T.water,.2);let b=v([[l+.1,-1.3,24.7],[l+.1,-1.3,8],[l+.1,-.3,5.4],[l+.1,.9,4.25]],.055,E.gas,T.gas,30);w(b,16,2.6,16765514,T.gas,.18);let C=new Pe(new kt(.3,.4,.2),e.steel);C.position.set(l+.1,1.2,4.25),C.userData.noPick=!0,T.gas.add(C),y([c-12,-3.95,-18.2],[c+60,-3.95,-18.2],.4,E.sewer,T.sewer);let U=v([[l,-3.27,-3.8],[l,-3.35,-9],[l,-3.55,-13],[l,-3.9,-17.9]],.19,E.sewer,T.sewer,30);w(U,18,1.3,13214314,T.sewer,.2);let S=v([[l,-3.3,-5.2],[l,-1,-5.2],[l,.1,-5.2]],.14,E.sewer,T.sewer,10),D=o(l,-3.52,-12.8);[[[.9,-.2,-12.4],[.8,-1.2,-12.2],[l+.04,-2.4,-12.5],[l+.02,-3.2,-12.8],[l,-3.5,-12.9]],[[.9,-.2,-12.4],[.85,-.9,-11.4],[l+.1,-2,-11.5],[l+.04,-3,-12.1],[l,-3.45,-12.6]],[[.9,-.2,-12.4],[.85,-1,-13.5],[l+.12,-2.2,-13.9],[l+.04,-3.1,-13.4],[l,-3.5,-13.1]],[[l+.1,-2.2,-13.8],[l+.05,-2.9,-14.6]],[[l+.12,-2,-11.5],[l+.06,-2.6,-10.5]]].forEach((xe,we)=>v(xe,we<3?.1:.05,E.roots,T.sewer,24));let P=new Pe(new rs(.3,.02,8,28),E.crack);P.position.copy(D),P.rotation.y=Math.PI/2,P.userData.noAO=!0,T.sewer.add(P),[[-4.55],[4.55]].forEach(([xe])=>y([c-6,-3.3,xe],[c+6.2,-3.3,xe],.11,E.tile,T.found)),[[c-6],[c+6.2]].forEach(([xe])=>y([xe,-3.3,-4.55],[xe,-3.3,4.55],.11,E.tile,T.found));let F=v([[l,-3.3,4.55],[l,-3.3,3],[l,-3.1,1.9]],.09,E.tile,T.found,12),k=new Pe(new $t(.34,.34,.75,22,1,!0),E.sump);k.position.set(l,-3.05,1.6),k.userData.noPick=!0,T.found.add(k);let H=v([[l,-2.55,1.6],[l,-1.2,1.6],[l,-1.2,6.8],[l,.1,6.8]],.075,E.sump,T.found,24);w(F,10,.8,7320831,T.found,.16),w(H,14,1.8,7320831,T.found,.18),v([[.62,-.15,4.27],[.55,-.55,4.27],[.74,-.95,4.27],[.5,-1.4,4.27],[.7,-1.9,4.27],[.52,-2.5,4.27]],.022,E.crack,T.found,30);let z=new Ln(new bn({map:Fr("rgba(255,90,70,0.9)","rgba(255,60,40,0)"),transparent:!0,depthWrite:!1,blending:Qt,opacity:.6}));z.position.set(.62,-1.4,4.5),z.scale.set(2.2,3.4,1),z.userData.noAO=!0,T.found.add(z);let O=n?0:t>=1?520:200,B=new Lt,q=new Float32Array(O*3),oe=new Float32Array(O*2),ge=xe=>{q[xe*3]=r()*(ls-.06),q[xe*3+1]=-8.6+r()*1.4,q[xe*3+2]=(r()-.5)*14-1.5,oe[xe*2]=.6+r()*.9,oe[xe*2+1]=r()*6.28};for(let xe=0;xe<O;xe++)ge(xe),q[xe*3+1]=-8.6+r()*5.6;B.setAttribute("position",new Tt(q,3));let ye=new Un(B,new Tn({size:.42,map:a,color:new Ze(14257407).multiplyScalar(2.6),transparent:!0,depthWrite:!1,blending:Qt,toneMapped:!1}));ye.frustumCulled=!1,ye.userData.noAO=!0,ye.raycast=()=>{},T.radon.add(ye);let De={x:-1.2,z:-1.5},Ke={ugWater:o(l,-2.4,21),ugGas:o(l+.1,-1.3,14),ugSewer:o(l,-3.7,-16),ugRoots:D.clone(),ugSewerMain:o(l,-3.95,-18.2),ugTile:o(l,-3.3,4.55),ugSump:o(l,-3.1,1.6),ugCrack:o(l,-1.5,4.3),ugRadon:o(-1.2,-6,-1.5),ugMeter:o(l+.1,1.2,4.25),ugMain:o(l,-2.4,22.8),ugGasMain:o(l,-1.3,24.7)},$=o(0,0,0),se={cx:-1e3};function ve(xe,we,X,Re){let ee=ft(0,1,xe.section),ie=xe.section<.002?-1e3:dt(-60,xe.cutX,ee);if(se.cx=ie,s.visible=xe.section>.002,!s.visible)return ie;if(f.position.x=ie+ls,d.position.x=ie+ls,g.position.x=ie+ls-.02,_.position.x=ie+ls,Ke.ugRadon.x=ie+ls*.5,Object.entries(T).forEach(([Z,ne])=>{let le=we===Z||we==="street"&&(Z==="water"||Z==="gas"),Ae=!we||le?1:.2;ne.userData.al=dt(ne.userData.al??Ae,Ae,Math.min(1,Re*5)),ne.traverse(Te=>{Te.material&&Te.material.isMeshStandardMaterial&&(Te.material.emissiveIntensity=le?.6:.12)})}),E.crack.color.setRGB(3,.5,.35).multiplyScalar(.7+.3*Math.sin(X*5)),A.forEach(Z=>{let ne=Z.group.userData.al??1;if(Z.pts.visible=ne>.02,!Z.pts.visible)return;let le=Z.pts.geometry.attributes.position.array;for(let Ae=0;Ae<Z.n;Ae++){let Te=(Ae/Z.n+X*Z.speed/Z.len)%1;Z.curve.getPointAt(Te,$),le[Ae*3]=$.x,le[Ae*3+1]=$.y,le[Ae*3+2]=$.z}Z.pts.geometry.attributes.position.needsUpdate=!0,Z.pts.material.opacity=ne}),ye.visible=O>0&&(T.radon.userData.al??1)>.2,ye.visible){ye.position.x=ie;for(let Z=0;Z<O;Z++){let ne=q[Z*3+1],le=ft(-5.8,-3,ne);q[Z*3+1]+=oe[Z*2]*Re*.8,q[Z*3+2]+=((De.z-q[Z*3+2])*le*.5+Math.sin(X*.8+oe[Z*2+1])*.1)*Re,q[Z*3+1]>-2.95&&ge(Z)}B.attributes.position.needsUpdate=!0,ye.material.opacity=T.radon.userData.al??1}return ie}return{group:s,update:ve,ANCHORS:Ke,groups:T,state:se}}function gh(i){i.updateWorldMatrix(!0,!0);let e=new mt().copy(i.matrixWorld).invert(),t=new mt,n=new Map,s=[],r=l=>{for(let u=l;u&&u!==i;u=u.parent)if(u.userData.sys||u.userData.keep||u.userData.level)return!0;return!1},a=l=>Array.isArray(l.material)?l.geometry.groups.map(u=>{let p=l.geometry.clone(),f=l.geometry.index;return p.clearGroups(),f?p.setIndex(Array.from(f.array.slice(u.start,u.start+u.count))):p.deleteAttribute("position"),{m:l.material[u.materialIndex],g:p}}):[{m:l.material,g:l.geometry.clone()}];i.traverse(l=>{if(!l.isMesh||l.isInstancedMesh||l===i||!l.material||!l.visible||r(l)||l.children.length||!l.geometry.index&&Array.isArray(l.material)||(Array.isArray(l.material)?l.material:[l.material]).some(p=>!p||p.userData.pane))return;t.multiplyMatrices(e,l.matrixWorld),a(l).forEach(({m:p,g:f})=>{let h=[p.uuid,+l.castShadow,+l.receiveShadow,+!!l.userData.noAO,+!!l.userData.noPick,l.renderOrder].join("|"),d=n.get(h);d||n.set(h,d={m:p,cast:l.castShadow,recv:l.receiveShadow,noAO:!!l.userData.noAO,noPick:!!l.userData.noPick,ro:l.renderOrder,geos:[],owners:new Set}),f.attributes.uv||f.setAttribute("uv",new Tt(new Float32Array(f.attributes.position.count*2),2)),f.applyMatrix4(t),d.geos.push(f),d.owners.add(l)}),s.push(l)});let o=0;n.forEach(l=>{if(l.geos.length<2){l.geos.forEach(d=>d.dispose());return}let u=Object.keys(l.geos[0].attributes).filter(d=>l.geos.every(_=>_.attributes[d]));l.geos.forEach(d=>{for(let _ of Object.keys(d.attributes))u.includes(_)||d.deleteAttribute(_)});let p=l.geos.some(d=>!d.index)?l.geos.map(d=>d.index?d.toNonIndexed():d):l.geos,f=bi(p);if(!f)return;f.computeBoundingSphere();let h=new Pe(f,l.m);h.castShadow=l.cast,h.receiveShadow=l.recv,h.renderOrder=l.ro,l.noAO&&(h.userData.noAO=!0),l.noPick&&(h.userData.noPick=!0),i.add(h),o++,l.done=!0});let c=new Set;return n.forEach(l=>{l.done||l.owners.forEach(u=>c.add(u))}),s.forEach(l=>{!c.has(l)&&l.parent&&(l.parent.remove(l),l.geometry.dispose())}),o}function rp(i,e){i.updateWorldMatrix(!0,!0);let t=new mt().copy(i.matrixWorld).invert(),n=new mt,s=[],r=[];if(i.traverse(c=>{c.isLineSegments&&c.material===e&&r.push(c)}),r.forEach(c=>{let l=c.geometry.clone();for(let u of Object.keys(l.attributes))u!=="position"&&l.deleteAttribute(u);l.applyMatrix4(n.multiplyMatrices(t,c.matrixWorld)),s.push(l)}),s.length<2)return 0;let a=bi(s.map(c=>c.index?c.toNonIndexed():c));if(!a)return 0;let o=new Wi(a,e);return o.raycast=()=>{},o.userData.noAO=!0,i.add(o),r.forEach(c=>{c.parent&&c.parent.remove(c),c.geometry.dispose()}),r.length}function ap({M:i,tier:e,glowTex:t,dotTex:n}){let s={value:0},r=(v,y=.6,A=0,w={})=>{let x=new Vt({color:v,roughness:y,metalness:A,...w});return x.userData.th=[.4],x};function a(){let v=document.createElement("canvas");v.width=v.height=512;let y=v.getContext("2d");y.fillStyle="#b99a6e",y.fillRect(0,0,512,512);let A=7,w=()=>(A=A*16807%2147483647)/2147483647;for(let C=0;C<260;C++){let U=w()*512,S=.03+w()*.07;y.strokeStyle=w()>.5?`rgba(90,62,30,${S})`:`rgba(240,220,180,${S})`,y.lineWidth=.6+w()*2.2,y.beginPath(),y.moveTo(0,U);for(let D=0;D<=512;D+=32)y.lineTo(D,U+Math.sin(D*.012+C)*(2+w()*5));y.stroke()}for(let C=0;C<5;C++){let U=w()*512,S=w()*512,D=4+w()*7,P=y.createRadialGradient(U,S,0,U,S,D*2.4);P.addColorStop(0,"rgba(70,44,20,.55)"),P.addColorStop(1,"rgba(70,44,20,0)"),y.fillStyle=P,y.beginPath(),y.ellipse(U,S,D*2.6,D*1.3,0,0,6.3),y.fill()}let x=new Mn(v);x.colorSpace=Kt,x.wrapS=x.wrapT=En,x.repeat.set(1/1.2,1/1.2),x.anisotropy=8;let b=new Vt({map:x,roughness:.82,metalness:0});return b.userData.th=[.45],b}let o=(v,y=1.5,A={})=>r(789776,.5,0,{emissive:v,emissiveIntensity:y,...A}),c={enclosure:r(8093831,.5,.6,{envMapIntensity:.7}),enclosureDark:r(2764082,.62,.5,{envMapIntensity:.6}),galv:r(11186618,.38,.9,{envMapIntensity:1.3}),blackPlastic:r(1184534,.42,.05),greyPlastic:r(4869975,.5,.05),whitePlastic:r(11118238,.55,.02),conduit:r(7304316,.62,.02),bluePlastic:r(3104680,.5,.02),orangePlastic:r(14711338,.5,.02),yellowPlastic:r(15319598,.5,.02),redPlastic:r(12728875,.5,.02),purple:r(8011716,.45,.05,{emissive:5909152,emissiveIntensity:.25}),green:r(3119703,.5,.05),copper:r(14256718,.25,1,{envMapIntensity:1.5}),copperHot:r(13201722,.3,1,{envMapIntensity:1.5,emissive:16742954,emissiveIntensity:.3}),aluminum:r(13225684,.3,1,{envMapIntensity:1.4}),brass:r(13214282,.32,1,{envMapIntensity:1.3}),rubber:r(855568,.85,0),plywood:a(),studs:i.cedar,concrete:i.concrete,slab:i.slab,drywall:i.drywall,steel:i.steel,pvc:i.pvc,castIron:r(2829617,.75,.6),clay:r(10115900,.9,0),hdpe:r(1316378,.35,.1,{envMapIntensity:1.2}),gravel:r(7301730,1,0),soil:r(3812382,1,0),insulPink:r(15311018,1,0),insulYellow:r(14861930,1,0),vermiculite:r(11569738,.95,.15),frost:r(15923199,.35,0,{emissive:12572415,emissiveIntensity:.25}),ice:i.ice,water:new jn({color:2781104,roughness:.06,metalness:0,transparent:!0,opacity:.78,envMapIntensity:1.8,clearcoat:1}),sewage:new jn({color:5916200,roughness:.2,metalness:0,transparent:!0,opacity:.9,envMapIntensity:1.2}),glassClear:new jn({color:14674674,roughness:.03,metalness:0,transparent:!0,opacity:.22,envMapIntensity:2,clearcoat:1}),poly:new jn({color:14542574,roughness:.35,metalness:0,transparent:!0,opacity:.28,envMapIntensity:1.4,side:wn,depthWrite:!1}),led:(v=9425830,y=3)=>o(v,y),glow:o};[c.water,c.sewage,c.glassClear,c.poly].forEach(v=>{v.userData.th=[.3]});let l=(v,y,A,w,x,b={})=>(v.position.set(y,A,w),v.castShadow=b.cast!==!1,v.receiveShadow=b.receive!==!1,b.keep&&(v.userData.keep=!0),b.rot&&v.rotation.set(b.rot[0]||0,b.rot[1]||0,b.rot[2]||0),x&&x.add(v),v),u=(v,y,A,w,x=0,b=0,C=0,U,S={})=>{let D=S.r?new Si(v,y,A,2,Math.min(S.r,v/2,y/2,A/2)):new kt(v,y,A);return S.uv&&Ws(D,S.uv===!0?{}:S.uv),l(new Pe(D,w),x,b,C,U,S)},p=(v,y,A,w=0,x=0,b=0,C,U={})=>{let S=new $t(U.r2??v,v,y,U.seg||16,1,!!U.open);return U.axis==="x"?S.rotateZ(Math.PI/2):U.axis==="z"&&S.rotateX(Math.PI/2),l(new Pe(S,A),w,x,b,C,U)},f=(v,y,A,w,x,b,C={})=>l(new Pe(new Gn(v,C.seg||16,C.seg2||12),y),A,w,x,b,C),h=(v,y,A)=>new L(v,y,A);return{time:s,mats:c,std:r,box:u,cyl:p,sphere:f,tube:(v,y,A,w,x={})=>{let b=new Qn(v.map(P=>P.isVector3?P:h(P[0],P[1],P[2])),!1,x.type||"catmullrom",x.tension??.3),C=b.getLength(),U=new Vn(b,x.seg||Math.max(8,Math.round(C*(x.density||14))),y,x.radial||8,!1),S=U.attributes.uv;for(let P=0;P<S.count;P++)S.setX(P,S.getX(P)*C);let D=l(new Pe(U,A),0,0,0,w,x);return D.userData.curve=b,D.userData.len=C,D},V:h,flow:(v,y={})=>{let A={value:y.level??1},w=new Vt({color:y.base??1382170,roughness:y.roughness??.45,metalness:y.metalness??.1,emissive:v,emissiveIntensity:y.intensity??2.2});return w.defines={USE_UV:""},w.userData.level=A,w.userData.th=[.6],w.onBeforeCompile=x=>{x.uniforms.uFlowT=s,x.uniforms.uFlowL=A,x.fragmentShader=x.fragmentShader.replace("#include <common>",`#include <common>
uniform float uFlowT; uniform float uFlowL;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        { float fd = fract(vUv.x * ${(y.dash??3).toFixed(2)} - uFlowT * ${((y.speed??.5)*(y.dash??3)).toFixed(2)});
          float fp = smoothstep(0.0, 0.18, fd) * (1.0 - smoothstep(0.42, 0.6, fd));
          totalEmissiveRadiance *= (${(y.rest??.12).toFixed(2)} + ${(y.gain??1).toFixed(2)} * fp) * uFlowL; }`)},w.customProgramCacheKey=()=>`flow${y.dash??3}_${y.speed??.5}_${y.rest??.12}_${y.gain??1}`,w},atlas:(v,y={})=>{let w=y.width||1024,x=4,b=4,C=0,U={};v.forEach(B=>{x+B.w+4>w&&(x=4,b+=C+4,C=0),U[B.key]={x,y:b,w:B.w,h:B.h,c:B},x+=B.w+4,C=Math.max(C,B.h)});let S=2**Math.ceil(Math.log2(b+C+4)),D=document.createElement("canvas");D.width=w,D.height=S;let P=D.getContext("2d"),F=B=>{let q=B.c;if(P.clearRect(B.x,B.y,B.w,B.h),q.bg&&(P.fillStyle=q.bg,P.fillRect(B.x,B.y,B.w,B.h)),q.draw){P.save(),P.translate(B.x,B.y),q.draw(P,B.w,B.h,q),P.restore();return}P.fillStyle=q.color||"#ece6da",P.textAlign=q.align||"center",P.textBaseline="middle";let oe=q.align==="left"?B.x+6:B.x+B.w/2;P.font=`${q.weight||600} ${q.size||Math.round(B.h*.62)}px ${q.font||"ui-monospace, Menlo, Consolas, monospace"}`,q.sub?(P.fillText(q.text,oe,B.y+B.h*.38),P.font=`500 ${Math.round((q.size||B.h*.62)*.5)}px ui-monospace, Menlo, Consolas, monospace`,P.globalAlpha=.75,P.fillText(q.sub,oe,B.y+B.h*.78),P.globalAlpha=1):P.fillText(q.text,oe,B.y+B.h/2+1)};Object.values(U).forEach(F);let k=new Mn(D);k.colorSpace=Kt,k.anisotropy=8;let H=new Vt({map:k,emissiveMap:k,emissive:16777215,emissiveIntensity:y.emissive??.35,roughness:.6,transparent:!0,alphaTest:.02,depthWrite:!1});return H.userData.th=[.4],{plane:(B,q,oe,ge=0,ye=0,De=0,Ke={})=>{let $=U[B],se=q*($.h/$.w),ve=new tn(q,se),xe=ve.attributes.uv;for(let X=0;X<xe.count;X++)xe.setXY(X,($.x+xe.getX(X)*$.w)/w,1-($.y+(1-xe.getY(X))*$.h)/S);let we=l(new Pe(ve,H),ge,ye,De,oe,{cast:!1,receive:!1,...Ke});return we.renderOrder=3,we},set:(B,q,oe,ge)=>{let ye=U[B];q!==void 0&&(ye.c.text=q),oe!==void 0&&(ye.c.sub=oe),ge&&Object.assign(ye.c,ge),F(ye),k.needsUpdate=!0},mat:H,tex:k}},particles:(v,y={})=>{let A=e>=1?v:Math.ceil(v*.45),w=new Lt,x=new Float32Array(A*3);w.setAttribute("position",new Tt(x,3));let b=new Tn({size:y.size??.05,map:n,color:new Ze(y.color??16777215).multiplyScalar(y.gain??1.6),transparent:!0,depthWrite:!1,blending:y.normal?Ms:Qt,toneMapped:!1,sizeAttenuation:!0,opacity:y.opacity??1}),C=new Un(w,b);return C.frustumCulled=!1,C.userData.noAO=!0,C.userData.keep=!0,C.raycast=()=>{},C.userData.n=A,C.userData.pos=x,C},sprite:(v,y,A,w,x,b,C=.8)=>{let U=new Ln(new bn({map:t,color:v,transparent:!0,depthWrite:!1,blending:Qt,opacity:C}));return U.position.set(A,w,x),U.scale.set(y,y,1),U.userData.noAO=!0,U.userData.keep=!0,U.raycast=()=>{},b&&b.add(U),U},bake:v=>{let y=new Map,A=[];v.updateWorldMatrix(!0,!0);let w=new mt().copy(v.matrixWorld).invert(),x=new mt,b=C=>{for(let U=C;U&&U!==v;U=U.parent)if(U.userData.keep)return!0;return!1};return v.traverse(C=>{if(!C.isMesh||C.isInstancedMesh||b(C)||Array.isArray(C.material)||C.children.length)return;let U=C.material.uuid+"|"+ +C.castShadow+ +C.receiveShadow+"|"+C.renderOrder,S=y.get(U);S||y.set(U,S={mat:C.material,cast:C.castShadow,recv:C.receiveShadow,ro:C.renderOrder,geos:[]});let D=C.geometry.index?C.geometry.toNonIndexed():C.geometry.clone();Object.keys(D.attributes).forEach(P=>{P!=="position"&&P!=="normal"&&P!=="uv"&&D.deleteAttribute(P)}),D.attributes.uv||D.setAttribute("uv",new Tt(new Float32Array(D.attributes.position.count*2),2)),D.applyMatrix4(x.multiplyMatrices(w,C.matrixWorld)),S.geos.push(D),A.push(C)}),y.forEach(C=>{let U=bi(C.geos);if(!U)return;let S=new Pe(U,C.mat);S.castShadow=C.cast,S.receiveShadow=C.recv,S.renderOrder=C.ro,S.userData.keep=!0,v.add(S),C.geos.forEach(D=>D.dispose())}),A.forEach(C=>{C.parent&&C.parent.remove(C),C.geometry.dispose()}),v},place:l}}var Ki=new L(2.8,-1.25,-3.945),_h=.0266,Hr=i=>.3-i*_h,xh=[[15,1],[15,1],[20,1],[15,1],[15,1],[20,1],[15,1],[15,1],[40,2,"range","RANGE"],[30,2,"dryer","DRYER"],[40,2,"hp","HEAT PUMP"],[30,2,"base","BASEBOARD"],[15,1],[15,1]],vh=[[15,1,null,null,"AFCI"],[15,1,null,null,"AFCI"],[20,1,null,null,"GFCI"],[20,1],[15,1],[15,1],[20,1],[15,1],[30,2,"wh","WATER HTR"],[30,2,"ac","A/C"],[50,2,"ev","EV CHARGER"],[60,2,"spa","HOT TUB"],[40,2,"suite","SUITE"]];function op({kit:i}){let{box:e,cyl:t,tube:n,mats:s,atlas:r}=i,a=new xt,o=2.8,c=-4.3;t(.034,3.7,s.galv,o,3.6,c,a),t(.06,.16,s.galv,o,5.5,c-.02,a,{r2:.03}),e(.1,.05,.16,s.galv,o,5.44,c-.05,a,{rot:[.5,0,0]}),[2.2,3.4,4.6].forEach(f=>e(.12,.03,.2,s.galv,o,f,c+.1,a,{cast:!1})),e(.3,.44,.12,s.enclosure,o,1.45,c+.02,a,{r:.012}),t(.092,.03,s.galv,o,1.5,c-.05,a,{axis:"z",seg:28}),t(.085,.085,s.glassClear,o,1.5,c-.1,a,{axis:"z",seg:28,cast:!1}),t(.074,.006,s.whitePlastic,o,1.5,c-.075,a,{axis:"z",seg:28,cast:!1});let l=r([{key:"kwh",text:"08431",sub:"kWh \xB7 CL200 \xB7 240 V",w:192,h:96,size:46,color:"#0e1014"}],{width:256,emissive:.15}),u=l.plane("kwh",.1,a,o,1.5,c-.0795);u.rotation.y=Math.PI;let p=t(.05,.002,s.aluminum,o,1.452,c-.09,a,{seg:24,cast:!1,keep:!0});return t(.03,1.02,s.conduit,o,.72,c,a),e(.075,.13,.075,s.conduit,o,.17,c,a,{r:.012}),t(.03,.34,s.conduit,o,.15,c+.17,a,{axis:"z"}),n([[o+.11,1.24,c+.03],[o+.13,.6,c+.06],[o+.14,.05,c-.12],[o+.14,-.25,c-.16]],.006,s.copper,a,{radial:6}),t(.011,.5,s.copper,o+.14,-.05,c-.16,a,{seg:8}),i.bake(a),a.add(p),{group:a,disc:p,labels:l}}function lp({kit:i}){let{box:e,cyl:t,tube:n,mats:s,flow:r,atlas:a,V:o}=i,c=new xt;c.position.copy(Ki);let l=new xt;c.add(l);let u=[];[15,20,30,40,50,60].forEach(X=>u.push({key:"a"+X,text:String(X),w:96,h:56,size:40,color:"#f4f1ea"})),u.push({key:"a200",text:"200",w:144,h:72,size:56,color:"#f4f1ea"}),[...xh,...vh].filter(X=>X[3]).forEach(X=>u.push({key:"n"+X[2],text:X[3],w:224,h:44,size:26,color:"#f4bd7e"})),u.push({key:"AFCI",text:"AFCI",w:112,h:44,size:26,color:"#9fc4ff"},{key:"GFCI",text:"GFCI",w:112,h:44,size:26,color:"#ffe08a"}),u.push({key:"rating",text:"200 A \xB7 120/240 V \xB7 1\xD8 3W",w:420,h:44,size:24,color:"#cfd4da"}),u.push({key:"mon",w:320,h:200,text:"49 A",sub:"of a 100 A service",ratio:.49,draw(X,Re,ee,ie){X.fillStyle="#05070b",X.fillRect(0,0,Re,ee);let Z=ie.ratio>.9?"#ff6b4f":ie.ratio>.7?"#f4bd7e":"#8fd3a6";X.textAlign="left",X.textBaseline="middle",X.fillStyle="#8b93a1",X.font="600 17px ui-monospace, Menlo, monospace",X.fillText("DEMAND",20,30),X.fillStyle=Z,X.font="700 74px ui-monospace, Menlo, monospace",X.fillText(ie.text,18,92),X.fillStyle="#cfd4da",X.font="500 19px ui-monospace, Menlo, monospace",X.fillText(ie.sub,20,146),X.fillStyle="#1c222c",X.fillRect(20,168,Re-40,14),X.fillStyle=Z,X.fillRect(20,168,(Re-40)*Math.min(1,ie.ratio),14)}}),u.push({key:"dir",w:300,h:420,draw(X,Re,ee){X.fillStyle="#e9e4d6",X.fillRect(0,0,Re,ee),X.fillStyle="#1a1c20",X.font="700 20px ui-monospace, Menlo, monospace",X.textAlign="left",X.textBaseline="middle",X.fillText("CIRCUIT DIRECTORY",14,24),X.strokeStyle="rgba(20,22,26,.45)",X.lineWidth=1,X.font="500 13px ui-monospace, Menlo, monospace",["KITCHEN PLUGS","BEDROOM 1 \xB7 AFCI","BEDROOM 2 \xB7 AFCI","BATH \xB7 GFCI","LIVING","FURNACE","RANGE 40A","DRYER 30A","WATER HTR 30A","A/C 30A","EV CHARGER 50A","HOT TUB 60A","HEAT PUMP 40A","SUITE 40A"].forEach((Z,ne)=>{let le=54+ne*25;X.beginPath(),X.moveTo(12,le+12),X.lineTo(Re-12,le+12),X.stroke(),X.fillText(String(ne+1).padStart(2,"0")+"  "+Z,14,le)})}});let p=a(u,{width:1024,emissive:.22});e(2,1.9,.03,s.plywood,.2,.1,-.015,l,{uv:{ox:1,oy:1}}),e(2.3,2.4,.1,s.concrete,.2,.05,-.085,l,{cast:!1,uv:!0});let f=.4,h=1,d=.1,_=.004;e(f,h,_,s.enclosureDark,0,0,_/2,l),e(_,h,d,s.enclosure,-f/2,0,d/2,l),e(_,h,d,s.enclosure,f/2,0,d/2,l),e(f,_,d,s.enclosure,0,h/2,d/2,l),e(f,_,d,s.enclosure,0,-h/2,d/2,l),t(.03,.92,s.conduit,0,h/2+.46,.045,l),t(.04,.03,s.enclosure,0,h/2+.012,.045,l),e(.19,.125,.026,s.blackPlastic,.42,.3,.013,l,{r:.006});let g=p.plane("mon",.168,c,.42,.3,.0268,{keep:!0});n([[.325,.3,.012],[.27,.31,.014],[.215,.33,.03]],.004,s.rubber,l,{radial:6}),e(.11,.075,.058,s.blackPlastic,0,.39,.035,l,{r:.004});let m=e(.034,.024,.022,i.std(1908773,.4,.1,{emissive:16039294,emissiveIntensity:0}),0,.39,.072,c,{r:.003,keep:!0});p.plane("a200",.05,l,0,.365,.0646),[-.03,.03].forEach(X=>e(.022,.022,.03,s.brass,X,.447,.03,l)),[[-.03,s.rubber],[.03,i.std(9183002,.6)],[.085,s.whitePlastic]].forEach(([X,Re],ee)=>n([[ee===2?.02:X*.4,.5,.045],[X*.8,.485,.04],[X,.46,.032]],.0075,Re,l,{radial:8,seg:10}));let E=s.copperHot.clone(),T=[-.012,.012].map(X=>e(.016,.74,.005,E,X,-.02,.012,c,{keep:!0,cast:!1}));[-.03,.03].forEach((X,Re)=>e(.016,.06,.005,E,X*.7,.36,.012,l,{cast:!1}));let v={},y=s.greyPlastic,A=s.rubber,w=i.std(9183002,.6),x=s.whitePlastic,b=(X,Re)=>{let ee=0;X.forEach(([ie,Z,ne,le,Ae])=>{let Te=Z===2?(Hr(ee)+Hr(ee+1))/2:Hr(ee),ke=Z===2?_h*2-.002:_h-.002,Ve=Re*.076;e(.088,ke,.055,s.blackPlastic,Ve,Te,.0325,l,{r:.0025,cast:!1});let V=Re*.047,vt=y;ne&&(vt=i.std(4869975,.5,.05,{emissive:16753981,emissiveIntensity:0}),v[ne]={handle:vt,level:null,pos:o(Ve,Te,.06),amps:ie}),e(.015,Z===2?ke*.72:.0125,.013,vt,V,Te,.0655,ne?c:l,{r:.002,cast:!1,keep:!!ne}),p.plane("a"+ie,.02,l,Re*.07,Te+(Z===2?.009:0),.0603),le&&p.plane("n"+ne,.05,l,Re*.087,Te-.011,.0603),Ae&&(p.plane(Ae,.026,l,Re*.099,Te,.0603),e(.007,.007,.004,Ae==="AFCI"?s.bluePlastic:s.yellowPlastic,Re*.118,Te,.062,l,{cast:!1}));for(let rt=0;rt<Z;rt++){let N=ee+rt,M=Hr(N);e(.03,.007,.004,s.copper,Re*.024+(N%2?.012:-.012)*.3,M,.016,l,{cast:!1});let K=Re*(.146+N%4*.0045),j=.026+N%3*.008;n([[Re*.121,M,.034],[Re*.134,M+.002,j+.004],[K,M+.02,j],[K,.3+N%5*.01,j],[Re*(.1+N%6*.012),.492,.03+N%2*.04]],.0023,Z===2&&rt===1?w:A,l,{radial:5,seg:14,cast:!1})}ee+=Z})};b(xh,-1),b(vh,1),[-1,1].forEach(X=>{e(.012,.52,.008,s.aluminum,X*.176,-.02,.012,l,{cast:!1});for(let Re=0;Re<22;Re++)t(.0034,.004,s.galv,X*.176,.22-Re*.0225,.018,l,{axis:"z",seg:6,cast:!1});for(let Re=0;Re<9;Re++){let ee=.2-Re*.05;n([[X*.176,ee,.02],[X*.164,ee+.03,.05+Re%3*.008],[X*.162,.33,.055+Re%3*.008],[X*(.06+Re*.012),.492,.07]],.0023,x,l,{radial:5,seg:12,cast:!1})}}),e(.36,.01,.004,s.aluminum,0,-.3,.008,l,{cast:!1}),e(.18,.012,.008,s.brass,-.05,-.43,.012,l,{cast:!1}),n([[-.1,-.43,.02],[-.13,-.47,.04],[-.13,-.56,.04],[-.2,-.75,.012],[-.7,-.82,.008]],.004,s.copper,l,{radial:6});let C=new xt;C.userData.keep=!0,c.add(C);let U=.0585,S=s.enclosure;e(.07,.98,.003,S,-.159,0,U,C),e(.07,.98,.003,S,.159,0,U,C),e(.056,.66,.003,S,0,-.02,U,C),e(.248,.062,.003,S,0,.459,U,C),e(.064,.094,.003,S,-.092,.381,U,C),e(.064,.094,.003,S,.092,.381,U,C),e(.248,.018,.003,S,0,.323,U,C),e(.248,.292,.003,S,0,-.344,U,C);let D=p.plane("rating",.2,C,0,.462,U+.002),P=new xt;P.userData.keep=!0,P.position.set(-f/2,0,d+.002),c.add(P),e(f,h,.003,s.enclosure,f/2,0,0,P);let F=p.plane("dir",.24,P,f/2,.02,-.003);F.rotation.y=Math.PI,e(.012,.06,.012,s.galv,f-.02,0,.006,P),P.rotation.y=-2.05;let k={15:s.whitePlastic,20:s.yellowPlastic,30:s.orangePlastic,40:s.rubber,50:s.rubber,60:s.rubber},H={15:r(16763274,{base:12170667,intensity:.7,dash:2.2,speed:.9,rest:0,gain:1,roughness:.6}),20:r(16758863,{base:13215008,intensity:.7,dash:2.2,speed:.9,rest:0,gain:1,roughness:.6})},z=.955,O=0,B=(X,Re,ee)=>{let ie=O++,Z=-.17+ie%13*.028,ne=.028+ie%2*.042,le=X>=40?.0085:X===30?.0065:.0052,Ae=[[Z,.5,ne],[Z,.66+ie%3*.03,ne],[Z*1.4,z-.06,ne+.05],[Z*1.6,z,ne+.16+ie%4*.03]],Te=.3+ie%7*.035,ke=ee==="south"?[[-.6,z,Te],[-2.2,z,Te],[-5.4,z,Te+.2]]:ee==="north"?[[.6,z,Te],[1.6,z,Te],[2.1,z,Te+1.2],[2.1,z,5.5]]:ee==="east"?[[Z*1.2,z,.9],[Z,z,3.2],[Z+.6,z,7.4]]:ee==="up"?[[-.42,z+.1,.3],[-.42,z+.9,.34]]:[[.5,z,.2],[.62,z+.02,.02],[.62,z+.02,-.4]],Ve=k[X];Re&&v[Re]?(Ve=r(16753981,{base:1513757,intensity:2.6,dash:1.6,speed:1.1,rest:0,gain:1,level:0}),v[Re].level=Ve.userData.level):H[X]&&(Ve=H[X]),n([...Ae,...ke],le,Ve,l,{radial:7,density:9,tension:.35,cast:ie%3===0})},q=["south","north","south","east","north","south","north","south"];xh.filter(X=>!X[2]).forEach((X,Re)=>B(X[0],null,q[Re%q.length])),vh.filter(X=>!X[2]).forEach((X,Re)=>B(X[0],null,q[(Re+3)%q.length])),B(40,"range","up"),B(30,"dryer","south"),B(40,"hp","south"),B(30,"base","north"),B(30,"wh","south"),B(30,"ac","out"),B(50,"ev","east"),B(60,"spa","out"),B(40,"suite","north"),e(2.4,.02,.09,s.studs,-.4,z+.012,.5,l,{uv:!0,cast:!1});let oe=o(.72,-.2,0);e(.06,.098,.062,s.bluePlastic,oe.x,oe.y,.031,l,{r:.004});let ge=new xt;ge.position.set(oe.x+.012,oe.y-.004,.118),ge.rotation.set(.12,-.5,.06),ge.userData.keep=!0,c.add(ge),e(.034,.104,.024,s.whitePlastic,0,0,0,ge,{r:.004}),e(.04,.118,.0016,s.galv,0,0,.0128,ge),[.028,-.028].forEach(X=>{e(.004,.011,.002,s.rubber,-.006,X,.0125,ge,{cast:!1}),e(.004,.011,.002,s.rubber,.006,X,.0125,ge,{cast:!1})}),[.012,-.012].forEach(X=>{t(.0035,.004,s.brass,.0185,X,-.004,ge,{axis:"x",seg:8}),t(.0035,.004,s.aluminum,-.0185,X,-.004,ge,{axis:"x",seg:8})}),n([[oe.x-.01,.62,.012],[oe.x-.012,.2,.014],[oe.x-.008,oe.y+.05,.02]],.0058,s.greyPlastic,l,{radial:7});let ye=[];[[-1,s.aluminum],[1,s.aluminum]].forEach(([X,Re])=>{let ee=o(oe.x+X*.03,oe.y+.012*X+.02,.085+(X>0?.012:0));n([[oe.x-.008+X*.004,oe.y+.045,.022],[oe.x+X*.02,oe.y+.05,.05],[ee.x,ee.y+.016,ee.z]],.0019,Re,l,{radial:6,seg:12,cast:!1});let ie=t(.0078,.027,s.purple,ee.x,ee.y,ee.z,c,{seg:12,keep:!0});ye.push(ie),t(.0086,.006,s.purple,ee.x,ee.y+.0135,ee.z,l,{seg:12}),n([[ee.x,ee.y+.014,ee.z],[ee.x+X*.012,ee.y+.03,ee.z+.012],[oe.x+.012+X*.026,oe.y+.006*X,.1],[oe.x+.012+X*.02,oe.y-.004+.012*X,.112]],.0017,s.copper,l,{radial:6,seg:14,cast:!1})}),i.bake(l);let De={meter:o(2.8,1.5,-4.42),main:Ki.clone().add(o(0,.39,.075)),bus:Ki.clone().add(o(0,-.06,.02)),branch:Ki.clone().add(o(-.076,Hr(3),.06)),range:Ki.clone().add(v.range.pos),ev:Ki.clone().add(v.ev.pos),spa:Ki.clone().add(v.spa.pos),alu:Ki.clone().add(o(oe.x+.03,oe.y+.03,.09)),afci:Ki.clone().add(o(.099,Hr(.5),.06)),load:Ki.clone().add(o(.33,.35,.03))},Ke={fx:2.8,fz:-3.9,time:19.4,cut:0,ghost:0,ground:1,orbit:.012},$=[{...Ke,radius:15,theta:3.42,phi:1.4,ty:2.8,fz:-4.2,dof:0,orbit:.03,time:15.5},{...Ke,radius:3.4,theta:3.5,phi:1.72,ty:1.95,fz:-4.35,dof:.8,time:15.5},{...Ke,radius:1.5,theta:.3,phi:1.44,ty:-1,dof:1.2},{...Ke,radius:1.45,theta:-.28,phi:1.47,ty:-1.24,dof:1.3},{...Ke,radius:1.75,theta:.34,phi:1.74,ty:-.98,fz:-3.8,dof:1.1},{...Ke,radius:1.15,theta:1,phi:1.5,ty:-1.3,fx:3.45,dof:1},{...Ke,radius:1.85,theta:.2,phi:1.6,ty:-.98,fx:3,fz:-3.8,dof:1}],se=new Set(["range","dryer","ac"]),ve="",xe=0,we=["range","ev","spa"];return{name:"panel",group:c,anchors:De,shots:$,hides:X=>X.sys.electrical?X.sys.electrical.meshes:[],input(X){if(X&&(X.on&&(se=new Set(X.on)),X.amps!==void 0&&X.service)){let Re=`${Math.round(X.amps)} A`,ee=`of a ${X.service} A service`;Re+ee!==ve&&(ve=Re+ee,p.set("mon",Re,ee,{ratio:X.amps/X.service}))}},light(X){return X===0?{pos:[2.2,3.4,-7.4],at:[2.8,1.6,-4.3],power:0}:X===1?{pos:[2.2,3.4,-7.4],at:[2.8,1.6,-4.3],power:.55,fill:.3}:X===5?{pos:[2.9,-.45,-2.2],at:[3.52,-1.45,-3.9],power:.8}:{pos:[1.5,-.5,-1.7],at:[2.8,-1.2,-3.9],power:1}},update({step:X,k:Re,t:ee,dt:ie,snap:Z}){let ne=Z?1:1-Math.exp(-ie*5);xe=dt(xe,X===3||X===4?1:0,ne);let le=ft(0,1,xe);C.position.set(.52*le,-.99*le,.2*Math.sin(Math.PI*le)+.075*le),C.rotation.set(-.13*le,0,-.05*le),E.emissiveIntensity=.08+.26*le+(X===3?.12*Math.sin(ee*2.2):0),m.material.emissiveIntensity=X===2?.4+.2*Math.sin(ee*3):.06;let Ae=X===3?1:X===6?.35:.12;Object.values(H).forEach(Te=>{Te.userData.level.value=dt(Te.userData.level.value,Ae,ne)}),Object.entries(v).forEach(([Te,ke])=>{let Ve=X===4?we.includes(Te)?1:0:X===6&&se.has(Te)?1:0;ke.level&&(ke.level.value=dt(ke.level.value,Ve,ne)),ke.handle.emissiveIntensity=dt(ke.handle.emissiveIntensity,Ve*2.4,ne)}),ye.forEach((Te,ke)=>{Te.scale.setScalar(X===5?1+.08*Math.sin(ee*4+ke):1)}),D.visible=le<.9}}}var Ot=-3.3,Jt=-2.6,wt=-2.8,yh=-2.51,li=-1.39,Xn=Jt+.37,ci=-4.9,Ti=-.26,mn=-2.75,ui=-.6,w1=[0,1,12,18,22,25],A1=["INSTALL","MAINTAIN","UPGRADE","REPLACE","REMOVE","DEMOLISH"],R1=[[0,"INSTALLED \xB7 PERMIT"],[1,"FILTER \xB7 TUNE-UP"],[3,"FILTER \xB7 TUNE-UP"],[5,"DUCTS CLEANED"],[8,"IGNITER"],[11,"FILTER \xB7 TUNE-UP"],[12,"HEAT PUMP COIL"],[15,"TUNE-UP"],[18,"FILTER \xB7 TUNE-UP"],[20,"BLOWER MOTOR"],[24,"TUNE-UP"]],wc=12;function cp({kit:i,tier:e}){let{box:t,cyl:n,tube:s,mats:r,atlas:a,V:o,std:c}=i,l=new xt,u=new xt;l.add(u);let p=c(9736070,.42,.3,{envMapIntensity:.8}),f=c(6717583,.42,.3,{envMapIntensity:.8}),h=c(10920599,.93,0),d=c(12886642,.82,0),_=c(9400648,.95,0),g=c(13884388,.88,0),m=c(5330782,.5,.45,{envMapIntensity:.8}),E=c(9316898,.45,.5),T=c(2897971,.6,.05),v=c(13210519,1,0),y=c(1313284,.4,0,{emissive:16747066,emissiveIntensity:1.4}),A=r.led(9425830,2),w=r.castIron,x=r.galv,b=r.pvc,C=r.copper,U=r.yellowPlastic,S="ui-monospace, Menlo, Consolas, monospace",D=R=>(re,Se,Oe)=>{re.fillStyle=R?"#5f574b":"#a9a08a",re.fillRect(0,0,Se,Oe);for(let Ue=0;Ue<Se;Ue+=8)re.fillStyle=R?"rgba(30,26,20,.55)":"rgba(120,110,90,.45)",re.fillRect(Ue,0,3,Oe);if(R)for(let Ue=0;Ue<90;Ue++)re.fillStyle=`rgba(40,34,26,${.15+Ue%5*.06})`,re.fillRect(Ue*37%Se,Ue*53%Oe,6+Ue%4*3,4+Ue%3*3);re.fillStyle=R?"#6e5a3c":"#9a7a4c",re.fillRect(0,0,Se,6),re.fillRect(0,Oe-6,Se,6),re.fillRect(0,0,6,Oe),re.fillRect(Se-6,0,6,Oe)},P=[{key:"afue",text:"96% AFUE",sub:"60 000 BTU/h \xB7 NAT GAS",w:256,h:72,size:32,color:"#1b1d21",bg:"#c9c3b2"},{key:"permit",w:128,h:220,draw(R,re,Se){R.fillStyle="#e08a2c",R.beginPath(),R.moveTo(0,22),R.lineTo(22,0),R.lineTo(re-22,0),R.lineTo(re,22),R.lineTo(re,Se),R.lineTo(0,Se),R.fill(),R.fillStyle="#14161a",R.beginPath(),R.arc(re/2,20,8,0,6.3),R.fill(),R.textAlign="center",R.textBaseline="middle",R.fillStyle="#1a1308",R.font=`700 22px ${S}`,R.fillText("GAS",re/2,58),R.fillText("PERMIT",re/2,84),R.font=`500 15px ${S}`,R.fillText("INSPECTED",re/2,122),R.fillText("YEAR 0",re/2,144),R.strokeStyle="#1a1308",R.lineWidth=2,R.strokeRect(14,166,re-28,36),R.font=`700 18px ${S}`,R.fillText("PASS",re/2,185)}},{key:"crate",text:"UPFLOW FURNACE",sub:"THIS SIDE UP \xB7 52 kg",w:320,h:72,size:30,color:"#2a1d0e"},{key:"svc",w:256,h:384,year:0,draw(R,re,Se,Oe){R.fillStyle="#d8d1bd",R.fillRect(0,0,re,Se),R.fillStyle="#24262b",R.fillRect(0,0,re,44),R.fillStyle="#e9e3d3",R.textAlign="left",R.textBaseline="middle",R.font=`700 20px ${S}`,R.fillText("SERVICE RECORD",12,23),R.font=`500 15px ${S}`,R1.forEach(([Ue,gt],tt)=>{let ct=66+tt*28;R.strokeStyle="rgba(20,22,26,.3)",R.beginPath(),R.moveTo(10,ct+13),R.lineTo(re-10,ct+13),R.stroke(),!(Ue>Oe.year)&&(R.fillStyle="#2b3a66",R.fillText(("YR "+Ue).padEnd(6)+gt,12,ct))})}},{key:"cal",w:200,h:248,year:0,verb:"INSTALL",draw(R,re,Se,Oe){R.fillStyle="#cdc6b3",R.fillRect(0,0,re,Se),R.fillStyle="#a8322a",R.fillRect(0,0,re,54),R.fillStyle="#1a1c20",[40,100,160].forEach(Ue=>{R.beginPath(),R.arc(Ue,8,6,0,6.3),R.fill()}),R.textAlign="center",R.textBaseline="middle",R.fillStyle="#f1e6d6",R.font=`700 24px ${S}`,R.fillText("YEAR",re/2,33),R.fillStyle="#16181c",R.font=`700 112px ${S}`,R.fillText(String(Oe.year),re/2,140),R.fillStyle="#5a3a1c",R.font=`700 22px ${S}`,R.fillText(Oe.verb,re/2,222)}},{key:"tstat",w:192,h:192,draw(R,re,Se){R.fillStyle="#05070b",R.beginPath(),R.arc(re/2,Se/2,re/2-2,0,6.3),R.fill(),R.strokeStyle="#8fd3a6",R.lineWidth=6,R.beginPath(),R.arc(re/2,Se/2,re/2-14,2.3,2.3+3.4),R.stroke(),R.textAlign="center",R.textBaseline="middle",R.fillStyle="#eef2f0",R.font=`600 58px ${S}`,R.fillText("21\xB0",re/2+4,Se/2-6),R.fillStyle="#8fd3a6",R.font=`600 15px ${S}`,R.fillText("HEAT PUMP",re/2,Se/2+36),R.fillStyle="#8b93a1",R.font=`500 13px ${S}`,R.fillText("OUT \u221218\xB0",re/2,Se/2+58)}},{key:"coil",text:"HEAT PUMP COIL",sub:"CASED \xB7 3 TON",w:256,h:64,size:26,color:"#e3ddd0"},{key:"odu",text:"COLD CLIMATE",sub:"HEATS TO \u221230 \xB0C",w:256,h:64,size:26,color:"#e3ddd0"},{key:"tank",text:"189 L",sub:"GAS \xB7 40 000 BTU/h",w:192,h:96,size:42,color:"#e9e6de"},{key:"tkl",w:128,h:72,draw(R,re,Se){R.fillStyle="#05070b",R.fillRect(0,0,re,Se),R.textAlign="center",R.textBaseline="middle",R.fillStyle="#7fc4ff",R.font=`700 34px ${S}`,R.fillText("49\xB0C",re/2,Se/2-6),R.fillStyle="#8fd3a6",R.font=`500 12px ${S}`,R.fillText("ON DEMAND",re/2,Se-12)}},{key:"capped",w:112,h:176,draw(R,re,Se){R.fillStyle="#c23a2b",R.fillRect(0,14,re,Se-14),R.beginPath(),R.moveTo(0,14),R.lineTo(re/2,0),R.lineTo(re,14),R.fill(),R.fillStyle="#14161a",R.beginPath(),R.arc(re/2,20,7,0,6.3),R.fill(),R.textAlign="center",R.textBaseline="middle",R.fillStyle="#f6eee4",R.font=`700 21px ${S}`,R.fillText("CAPPED",re/2,64),R.font=`500 13px ${S}`,R.fillText("GAS OFF",re/2,98),R.fillText("DO NOT",re/2,124),R.fillText("OPEN",re/2,142)}},{key:"suite",w:256,h:320,draw(R,re,Se){R.fillStyle="#c9c4b4",R.fillRect(0,0,re,Se),R.fillStyle="#1a1c20",R.textAlign="left",R.textBaseline="middle",R.font=`700 21px ${S}`,R.fillText("SECONDARY SUITE",12,24),R.font=`500 14px ${S}`,R.fillText("BUILDING PERMIT \xB7 YR 25",12,48),R.strokeStyle="#2b3a66",R.lineWidth=3,R.strokeRect(20,70,re-40,170),R.beginPath(),R.moveTo(20,150),R.lineTo(130,150),R.moveTo(130,70),R.lineTo(130,240),R.stroke(),R.lineWidth=1.5,R.beginPath(),R.arc(130,196,34,Math.PI,Math.PI*1.5),R.stroke(),R.fillStyle="#2b3a66",R.font=`600 13px ${S}`,R.fillText("MECH",40,110),R.fillText("BEDROOM",148,110),R.fillText("BATH",40,196),R.fillText("LIVING",148,196),R.fillStyle="#1a1c20",R.font=`500 13px ${S}`,R.fillText("MECH ROOM: TYPE X",12,268),R.fillText("BOTH SIDES \xB7 30 MIN",12,290)}},{key:"disc",text:"HEAT PUMP",w:128,h:32,size:18,color:"#e3ddd0"},{key:"bin",text:"DRYWALL ONLY",w:192,h:40,size:22,color:"#e3ddd0"},{key:"rust",w:384,h:96,draw(R,re,Se){let Oe=11,Ue=()=>(Oe=Oe*16807%2147483647)/2147483647;R.clearRect(0,0,re,Se);for(let gt=0;gt<re;gt+=2){let tt=Se*(.35+.5*Ue()*Ue())*(.6+.4*Math.sin(gt*.05)**2),ct=R.createLinearGradient(0,Se,0,Se-tt);ct.addColorStop(0,"rgba(96,40,14,0.95)"),ct.addColorStop(.5,"rgba(122,56,20,0.75)"),ct.addColorStop(1,"rgba(140,70,30,0)"),R.fillStyle=ct,R.fillRect(gt,Se-tt,2+Ue()*2,tt)}}},{key:"pleatOld",w:96,h:128,draw:D(!0)},{key:"pleatNew",w:96,h:128,draw:D(!1)}],F=a(P,{width:1024,emissive:.22}),k=o(0,1,0),H=o(0,0,0),z=R=>{let re=new Map;return R.traverse(Se=>{Se.isMesh&&re.set(Se.material,re.get(Se.material)||!1||Se.castShadow)}),R.traverse(Se=>{Se.isMesh&&!Se.userData.keep&&(Se.castShadow=re.get(Se.material),Se.receiveShadow=!0)}),i.bake(R)},O=(R,re,Se,Oe,Ue={})=>{let gt=R.map(It=>o(It[0],It[1],It[2])),tt=Ue.fit??1.35,ct=Ue.seg||10,at=Ue.cast!==!1,Pt=(It,vn,di)=>{let wi=It.distanceTo(vn);if(wi<1e-4)return;let ti=new Pe(new $t(di,di,wi,ct),Se);ti.position.copy(It).add(vn).multiplyScalar(.5),ti.quaternion.setFromUnitVectors(k,H.subVectors(vn,It).normalize()),ti.castShadow=at,ti.receiveShadow=!0,Oe.add(ti)};for(let It=0;It<gt.length-1;It++)if(Pt(gt[It],gt[It+1],re),It>0&&tt){let vn=gt[It];[gt[It-1],gt[It+1]].forEach(di=>{H.subVectors(di,vn).normalize(),Pt(vn.clone(),vn.clone().addScaledVector(H,re*2.2),re*tt)})}},B={value:Array.from({length:wc},()=>o(0,0,0))},q={value:Array.from({length:wc},()=>o(0,0,0))},oe=R=>{R.uniforms.uPhP=B,R.uniforms.uPhS=q,R.vertexShader=R.vertexShader.replace("#include <common>",`#include <common>
attribute float aPh; uniform vec3 uPhP[${wc}]; uniform vec3 uPhS[${wc}];`).replace("#include <begin_vertex>",`#include <begin_vertex>
{ int pi = int(aPh + 0.5); transformed = uPhP[pi] + (transformed - uPhP[pi]) * uPhS[pi]; }`)},ge=new wr({depthPacking:Du});ge.onBeforeCompile=oe,ge.customProgramCacheKey=()=>"cyclePhDepth";let ye=[],De=(R,re,Se="s")=>{let Oe=new xt;Oe.name=R,l.add(Oe);let Ue={g:Oe,i:ye.length,pivot:re.clone(),mode:Se,k:0};return B.value[Ue.i].copy(re),ye.push(Ue),Ue},Ke=()=>{l.updateWorldMatrix(!0,!0);let R=new mt().copy(l.matrixWorld).invert(),re=new mt,Se=new Map;ye.forEach(Oe=>Oe.g.traverse(Ue=>{if(!Ue.isMesh)return;let gt=Ue.material.uuid+"|"+Ue.renderOrder,tt=Se.get(gt);tt||Se.set(gt,tt={mat:Ue.material,cast:!1,ro:Ue.renderOrder,geos:[]}),tt.cast=tt.cast||Ue.castShadow;let ct=Ue.geometry.index?Ue.geometry.toNonIndexed():Ue.geometry.clone();Object.keys(ct.attributes).forEach(at=>{at!=="position"&&at!=="normal"&&at!=="uv"&&ct.deleteAttribute(at)}),ct.attributes.uv||ct.setAttribute("uv",new Tt(new Float32Array(ct.attributes.position.count*2),2)),ct.applyMatrix4(re.multiplyMatrices(R,Ue.matrixWorld)),ct.setAttribute("aPh",new Tt(new Float32Array(ct.attributes.position.count).fill(Oe.i),1)),tt.geos.push(ct)})),ye.forEach(Oe=>{Oe.g.traverse(Ue=>{Ue.isMesh&&Ue.geometry.dispose()}),l.remove(Oe.g)}),Se.forEach(Oe=>{let Ue=bi(Oe.geos);if(Oe.geos.forEach(ct=>ct.dispose()),!Ue)return;let gt=Oe.mat.clone();gt.onBeforeCompile=oe,gt.customProgramCacheKey=()=>"cyclePh";let tt=new Pe(Ue,gt);tt.castShadow=Oe.cast,tt.receiveShadow=!0,tt.renderOrder=Oe.ro,tt.frustumCulled=!1,Oe.cast&&(tt.customDepthMaterial=ge),tt.userData.keep=!0,tt.userData.noAO=!0,l.add(tt)})},$=(R,re,Se)=>{R.k=dt(R.k,re,Se),Math.abs(R.k-re)<.002&&(R.k=re);let Oe=R.mode==="pop"?R.k>.5?1:0:ft(0,1,R.k),Ue=q.value[R.i];return R.mode==="y"?Ue.set(1,Oe,1):R.mode==="xz"?Ue.set(Oe,1,Oe):Ue.setScalar(Oe),Oe<.001&&Ue.setScalar(0),Oe};n(.085,.012,x,-2.7,wt+.004,-1.85,u,{seg:20,cast:!1}),n(.068,.014,w,-2.7,wt+.005,-1.85,u,{seg:20,cast:!1});for(let R=-2;R<=2;R++)t(.11-Math.abs(R)*.02,.006,.008,x,-2.7,wt+.012,-1.85+R*.022,u,{cast:!1});let se=-3.95,ve=.9;t(.089,.038,ve-se,d,ci-.045,wt+.019,(se+ve)/2,u,{cast:!1}),t(.089,.038,ve-se,d,ci-.045,Ti-.019,(se+ve)/2,u,{cast:!1});for(let R=se+.02;R<=ve;R+=.406)t(.089,Ti-wt-.076,.038,d,ci-.045,(wt+Ti)/2,Math.min(R,ve-.02),u,{cast:!1});for(let R=0;R<6;R++)R===2||R===4||t(.08,Ti-wt-.09,.36,v,ci-.05,(wt+Ti)/2,-1.48+.019+R*.406+.203,u,{cast:!1});let xe=(R,re,Se)=>{t(.0127,Ti-wt-.01,re-R-.003,h,ci+.0064,(wt+Ti)/2,(R+re)/2,Se),t(.012,.08,re-R,b,ci+.019,wt+.04,(R+re)/2,Se,{cast:!1})};xe(se,-2.7,u),xe(-2.7,-1.48,u),t(.68,.05,.88,w,Ot,wt+.025,Jt,u),t(.56,.24,.74,x,Ot,(wt+.05+yh)/2,Jt,u),t(.52,.036,.012,w,Ot,-2.56,Xn-.004,u,{cast:!1}),t(.56,.012,.02,x,Ot,-2.535,Xn+.008,u,{cast:!1}),t(.3,-.25-(wt+.05),.6,x,Ot-.43,(-.25+wt+.05)/2,Jt,u),[-2.2,-1.6,-1,-.5].forEach(R=>t(.304,.012,.604,x,Ot-.43,R,Jt,u,{cast:!1})),t(.56,li-yh,.74,p,Ot,(yh+li)/2,Jt,u,{r:.008}),t(.54,.52,.008,r.enclosure,Ot,-1.67,Xn+.004,u,{r:.003}),t(.54,.54,.008,r.enclosure,Ot,-2.225,Xn+.004,u,{r:.003});for(let R=0;R<6;R++)t(.3,.011,.006,w,Ot-.05,-1.47-R*.026,Xn+.008,u,{cast:!1});for(let R=0;R<4;R++)t(.3,.011,.006,w,Ot-.05,-2.41-R*.022,Xn+.008,u,{cast:!1});[-1.43,-1.99].forEach(R=>t(.09,.016,.01,w,Ot+.17,R,Xn+.011,u,{cast:!1})),t(.09,.06,.006,w,Ot+.15,-1.72,Xn+.009,u,{cast:!1});let we=t(.064,.036,.004,y,Ot+.15,-1.72,Xn+.012,l,{cast:!1,keep:!0}),X=t(.012,.012,.004,A,Ot+.2,-2.08,Xn+.01,l,{cast:!1,keep:!0});t(.04,.024,.004,w,Ot+.2,-2.08,Xn+.0085,u,{cast:!1}),F.plane("afue",.15,u,Ot-.1,-1.78,Xn+.0095),F.plane("svc",.13,u,Ot+.2805,-1.95,Jt+.1).rotation.y=Math.PI/2,t(.004,.012,.03,w,Ot+.283,-1.85,Jt+.1,u,{cast:!1}),s([[Ot+.24,-2.45,Xn+.01],[Ot+.3,-2.62,Xn+.08],[-2.85,wt+.02,-2.05],[-2.72,wt+.02,-1.88]],.008,b,u,{radial:6,cast:!1}),t(.56,-.25-li,.74,x,Ot,(li-.25)/2,Jt,u),t(.57,.02,.75,x,Ot,li+.01,Jt,u,{cast:!1});let Re=Ot+.28,ee=1.4;t(ee-Re,.25,.5,x,(Re+ee)/2,-.375,Jt,u);for(let R=Re+1.2;R<ee;R+=1.5)t(.02,.258,.508,x,R,-.375,Jt,u,{cast:!1});for(let R=Re+.6;R<ee;R+=1.2)[-1,1].forEach(re=>t(.025,.27,.003,x,R,-.37,Jt+re*.253,u,{cast:!1}));n(.065,.24,x,-1.5,-.375,Jt+.37,u,{axis:"z",seg:16}),n(.065,.42,x,-1.5,-.27,Jt+.49,u,{seg:16}),n(.07,.03,x,-1.5,-.375,Jt+.26,u,{axis:"z",seg:16,cast:!1});let ie=o(-2.3,-.375,Jt+.25);t(.27,.12,.012,b,ie.x,ie.y,ie.z+.006,u,{cast:!1});for(let R=0;R<7;R++)t(.012,.09,.006,w,ie.x-.105+R*.035,ie.y,ie.z+.014,u,{cast:!1});t(.05,.12,.075,r.enclosure,Ot+.305,-.85,Jt+.2,u),t(.006,.1,.06,b,Ot+.333,-.85,Jt+.2,u,{cast:!1}),t(.01,.025,.012,w,Ot+.338,-.85,Jt+.2,u,{cast:!1}),n(.008,.55,x,Ot+.305,-.52,Jt+.2,u,{seg:6,cast:!1}),[-3.45,-3.22].forEach((R,re)=>{O([[R,-1.62,Jt-.37],[R,-1.62,-3.2],[R,-.1+re*.02,-3.2],[R,-.1+re*.02,-3.85],[R,.14,-3.85],[R,.14,-4.4]],.04,b,u,{fit:1.2,seg:14}),n(.048,.06,b,R,.14,-4.42,u,{axis:"z",seg:14}),t(.025,.2,.003,x,R,-.2,-3.4,u,{cast:!1})}),O([[mn,ui,1.2],[mn,ui,-3.5]],.017,w,u,{fit:0}),[.6,-.6,-1.8,-3.1].forEach(R=>t(.02,-.25-ui,.004,x,mn,(ui-.25)/2+.01,R,u,{cast:!1})),n(.024,.06,w,mn,ui,-3.5,u,{axis:"z",seg:10}),O([[mn,ui,-2.3],[mn,-1.72,-2.3],[Ot+.28,-1.72,-2.3]],.017,w,u),O([[mn,-1.72,-2.3],[mn,-1.95,-2.3]],.017,w,u,{fit:0}),n(.025,.04,w,mn,-1.965,-2.3,u,{seg:10}),n(.024,.06,w,mn,-1.72,-2.3,u,{seg:10}),n(.024,.06,w,mn,ui,-2.3,u,{axis:"z",seg:10}),n(.029,.035,w,mn,-1.48,-2.3,u,{seg:8}),n(.026,.07,C,mn,-1.25,-2.3,u,{seg:12}),t(.016,.1,.02,U,mn+.035,-1.24,-2.3,u,{r:.004}),O([[mn,ui,-2.7],[-1.86,ui,-2.7],[-1.86,-2,-2.7]],.017,w,u),n(.024,.06,w,mn,ui,-2.7,u,{axis:"z",seg:10}),n(.026,.07,C,-1.86,-1.85,-2.7,u,{seg:12});let Z=new xt;Z.position.set(-1.86,-1.85,-2.7),Z.userData.keep=!0,l.add(Z),t(.016,.1,.02,U,.035,.01,0,Z,{r:.004,cast:!1}),[-2.2,-2].forEach(R=>n(.011,.5,C,R,-.5,-3,u,{seg:8})),n(.085,.06,x,-2.1,-.28,-3,u,{seg:16}),t(.006,.006,.02,x,-1.15,-.93,-3.985,u,{cast:!1}),F.plane("cal",.2,u,-1.15,-1.07,-3.988);let ne=De("crate",o(-2.2,wt,-1.05));{let R=ne.g,re=-2.2,Se=-1.05,Oe=wt;[-.4,0,.4].forEach(Ue=>t(.9,.09,.07,d,re,Oe+.045,Se+Ue,R));for(let Ue=0;Ue<6;Ue++)t(.11,.02,.92,d,re-.4+Ue*.16,Oe+.1,Se,R);[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([Ue,gt])=>t(.12,.1,.12,b,re+Ue*.32,Oe+.16,Se+gt*.33,R,{cast:!1})),t(.62,.1,.8,_,re+.05,Oe+.27,Se+.02,R,{rot:[0,.1,0]}),t(1.6,.008,.78,_,-3.75,Oe+.004,-.9,R,{rot:[0,.35,0],cast:!1}),t(.78,.008,.76,_,-3.2,Oe+.012,-.25,R,{rot:[0,-.2,0],cast:!1}),F.plane("crate",.34,R,-3.7,Oe+.0095,-.9).rotation.set(-Math.PI/2,0,.35),s([[re-.5,Oe+.11,Se+.2],[re-.7,Oe+.01,Se+.4],[re-.95,Oe+.005,Se+.3],[re-1.1,Oe+.005,Se+.6]],.006,w,R,{radial:4,cast:!1}),s([[mn,-1.22,-2.28],[mn+.01,-1.3,-2.25],[mn+.01,-1.36,-2.26]],.0015,x,R,{radial:4,cast:!1}),F.plane("permit",.07,R,mn+.01,-1.42,-2.255).rotation.set(.05,.3,.04)}let le=F.mat.clone();le.transparent=!1,le.depthWrite=!0,le.alphaTest=0;let Ae=R=>{let re=F.plane(R,.1),Se=re.geometry.attributes.uv,Oe=1,Ue=0,gt=1,tt=0;for(let It=0;It<Se.count;It++)Oe=Math.min(Oe,Se.getX(It)),Ue=Math.max(Ue,Se.getX(It)),gt=Math.min(gt,Se.getY(It)),tt=Math.max(tt,Se.getY(It));re.geometry.dispose();let ct=new kt(.5,.025,.64),at=ct.attributes.uv;for(let It=0;It<at.count;It++)at.setXY(It,Oe+at.getX(It)*(Ue-Oe),gt+at.getY(It)*(tt-gt));let Pt=new Pe(ct,le);return Pt.castShadow=!0,Pt.receiveShadow=!0,Pt.userData.keep=!0,l.add(Pt),Pt},Te=Ae("pleatOld"),ke=Ae("pleatNew"),Ve=o(Ot,-2.56,Jt+.05),V=o(Ot,-2.56,Jt+.78),vt=o(-3.88,wt+.322,-2.2),rt=De("hose",ie);{let R=rt.g,re=[[ie.x,ie.y,ie.z+.06],[ie.x+.02,ie.y-.12,ie.z+.3],[-2.15,-1.5,-1.75],[-1.95,wt+.09,-1.3],[-1.55,wt+.08,-.7],[-.4,wt+.08,.1],[1.4,wt+.08,.7]],Se=s(re,.07,w,R,{radial:10,density:6,tension:.4}),Oe=Se.userData.curve,Ue=Se.userData.len,gt=new rs(.072,.007,4,12),tt=Math.round(Ue/(e>=1?.07:.14));for(let ct=2;ct<tt;ct++){let at=ct/tt,Pt=new Pe(gt,w);Pt.position.copy(Oe.getPointAt(at)),Pt.quaternion.setFromUnitVectors(o(0,0,1),Oe.getTangentAt(at)),R.add(Pt)}t(.3,.16,.08,w,ie.x,ie.y,ie.z+.05,R,{r:.01}),n(.08,.06,x,ie.x,ie.y,ie.z+.11,R,{axis:"z",seg:16})}let N=De("hp",o(Ot,li,Jt),"y"),M=-3,K=-4.85,j=.42,he=new xt;he.userData.keep=!0,he.position.set(M-.1,j+.4,K-.17),l.add(he);{let R=N.g;t(.6,.44,.78,p,Ot,li+.22,Jt,R,{r:.008}),t(.52,.34,.006,p,Ot,li+.22,Jt+.392,R,{r:.003});for(let Se=0;Se<4;Se++)t(.012,.012,.008,x,Ot+(Se%2?.24:-.24),li+(Se<2?.07:.37),Jt+.396,R,{cast:!1});F.plane("coil",.2,R,Ot-.08,li+.3,Jt+.3965);let re=(Se,Oe,Ue)=>s([[Ot+.3,li+.2+Ue,Jt-.28],[-2.92,li+.2+Ue,Jt-.28],[-2.9+Ue,-.6,-2.9],[-2.9+Ue,-.13,-2.95],[-2.9+Ue,-.12,-3.85],[-2.9+Ue,.12,-3.97],[-2.9+Ue,.12,-4.35],[-2.85+Ue,.32,-4.42],[-2.75+Ue,.6,-4.5],[-2.55,.62+Ue*2,-4.62]],Se,Oe,R,{radial:8,density:10,tension:.2});re(.021,w,0),re(.006,C,.045),t(.02,.22,.003,x,-2.88,-.24,-3.4,R,{cast:!1}),t(.012,.11,.11,w,ci+.019,-1.3,-2.05,R,{r:.004}),F.plane("tstat",.092,R,ci+.0256,-1.3,-2.05).rotation.y=Math.PI/2,t(1.2,.08,.7,g,M,.04,K,R),[-.4,.4].forEach(Se=>{t(.05,j-.08,.05,x,M+Se,(j+.08)/2,K+.12,R),t(.05,j-.08,.05,x,M+Se,(j+.08)/2,K-.12,R),t(.06,.04,.5,x,M+Se,j-.02,K,R)}),t(.96,.78,.38,m,M,j+.39,K,R,{r:.02}),n(.31,.02,w,M-.1,j+.4,K-.19,R,{axis:"z",seg:32,cast:!1}),[.12,.2,.28].forEach(Se=>{let Oe=new Pe(new rs(Se,.005,4,32),x);Oe.position.set(M-.1,j+.4,K-.205),R.add(Oe)}),t(.62,.008,.008,x,M-.1,j+.4,K-.206,R,{cast:!1}),t(.008,.62,.008,x,M-.1,j+.4,K-.206,R,{cast:!1}),F.plane("odu",.2,R,M+.33,j+.62,K-.193).rotation.y=Math.PI,t(1,.07,.42,g,M,j+.815,K,R,{r:.03,cast:!1}),t(.7,.05,.3,g,M-.05,j+.86,K,R,{r:.022,cast:!1}),t(.22,.1,.9,g,M+.4,.13,K+.1,R,{r:.04,cast:!1}),t(.14,.2,.08,m,-2.25,.9,-4.29,R,{r:.01}),F.plane("disc",.1,R,-2.25,.93,-4.332).rotation.y=Math.PI,s([[-2.25,.8,-4.3],[-2.3,.6,-4.4],[-2.52,.55,-4.7]],.012,w,R,{radial:6,cast:!1});for(let Se=0;Se<3;Se++){let Oe=t(.26,.09,.006,w,0,0,0,null,{cast:!1});Oe.geometry.translate(.14,0,0),Oe.rotation.set(0,.25,Se*Math.PI*2/3),he.add(Oe)}z(he)}let He=o(-2.1,wt+.12,-2.64),Fe=new xt;Fe.rotation.order="YXZ",Fe.position.copy(He),Fe.userData.keep=!0,l.add(Fe);let me;{let R=new xt,re=-.36;Fe.add(R),n(.28,1.38,f,0,-.1+.69,re,R,{seg:28}),n(.284,.04,w,0,-.1,re,R,{seg:28}),n(.27,.03,f,0,1.295,re,R,{seg:28,r2:.2}),t(.14,.08,.01,w,0,.08,-.083,R),t(.1,.12,.07,w,0,.26,-.05,R,{r:.008}),n(.02,.025,C,0,.29,-.012,R,{axis:"z",seg:12,cast:!1}),n(.012,.06,C,.12,.05,-.1,R,{axis:"z",seg:8,cast:!1}),n(.07,.08,x,0,1.35,re,R,{seg:16,r2:.04}),n(.075,.1,x,0,1.43,re,R,{seg:16}),[-.1,.1].forEach(Pt=>{n(.012,.08,x,Pt,1.33,re,R,{seg:8}),n(.02,.03,C,Pt,1.37,re,R,{seg:8})}),n(.018,.06,C,.3,1.1,re,R,{axis:"x",seg:8}),t(.025,.04,.02,C,.31,1.13,re,R,{cast:!1}),O([[.33,1.1,re],[.34,1.1,re],[.34,.04,re]],.011,C,R,{seg:8}),F.plane("tank",.14,R,0,.78,-.076),z(R),me=n(.2825,.3,F.mat,0,.06,re,Fe,{seg:28,open:!0,keep:!0,cast:!1});let Se=F.plane("rust",.1),Oe=Se.geometry.attributes.uv,Ue=1,gt=0,tt=1,ct=0;for(let Pt=0;Pt<Oe.count;Pt++)Ue=Math.min(Ue,Oe.getX(Pt)),gt=Math.max(gt,Oe.getX(Pt)),tt=Math.min(tt,Oe.getY(Pt)),ct=Math.max(ct,Oe.getY(Pt));Se.geometry.dispose();let at=me.geometry.attributes.uv;for(let Pt=0;Pt<at.count;Pt++)at.setXY(Pt,Ue+at.getX(Pt)*(gt-Ue),tt+at.getY(Pt)*(ct-tt))}let de=new xt;de.userData.keep=!0,Fe.add(de);let Ge=new xt;Ge.position.set(0,0,.02),Ge.userData.keep=!0;{let R=new xt;de.add(R),[-.17,.17].forEach(Se=>O([[Se,-.1,-.05],[Se,1.28,-.05],[Se,1.4,.03]],.013,E,R,{seg:8,fit:0})),O([[-.17,1.4,.03],[.17,1.4,.03]],.013,E,R,{seg:8,fit:0}),[.35,.85].forEach(Se=>n(.009,.34,E,0,Se,-.05,R,{axis:"x",seg:6})),t(.38,.01,.24,E,0,-.115,-.17,R),n(.012,.5,E,0,0,.02,R,{axis:"x",seg:8}),[-.17,.17].forEach(Se=>t(.02,.1,.08,E,Se,-.04,-.02,R));let re=new Pe(new rs(.286,.006,4,40),U);re.rotation.x=Math.PI/2,re.position.set(0,.95,-.36),R.add(re),t(.06,.04,.03,U,0,.95,-.065,R),z(R),[-.25,.25].forEach(Se=>{n(.12,.06,w,Se,0,0,Ge,{axis:"x",seg:20}),n(.055,.065,E,Se,0,0,Ge,{axis:"x",seg:12}),t(.068,.02,.16,E,Se,0,0,Ge,{cast:!1})}),z(Ge),de.add(Ge)}let ot=De("conn",o(-2.1,-1.5,-2.85),"pop");{let R=ot.g;O([[-1.86,-2,-2.7],[-1.86,-2.42,-2.7],[-2.05,-2.42,-2.7]],.017,w,R),O([[-1.86,-2.42,-2.7],[-1.86,-2.56,-2.7]],.017,w,R,{fit:0}),n(.024,.03,w,-1.86,-2.575,-2.7,R,{seg:10}),n(.024,.05,w,-1.86,-2,-2.7,R,{seg:10}),[-2.2,-2].forEach(re=>n(.011,.5,C,re,-1,-3,R,{seg:8})),n(.075,.96,x,-2.1,-.76,-3,R,{seg:16}),[-1,-.55].forEach(re=>n(.079,.02,x,-2.1,re,-3,R,{seg:16,cast:!1}))}let Xe=De("caps",o(-2,-1.2,-2.85),"pop");{let R=Xe.g;[-2.2,-2].forEach(re=>n(.014,.035,C,re,-.765,-3,R,{seg:8})),n(.024,.035,w,-1.86,-1.905,-2.7,R,{seg:10}),s([[-1.86,-1.86,-2.68],[-1.85,-1.92,-2.66],[-1.85,-1.97,-2.665]],.0015,x,R,{radial:4,cast:!1}),F.plane("capped",.055,R,-1.85,-2.02,-2.66).rotation.set(0,.25,-.05),n(.08,.012,x,-2.1,-.315,-3,R,{seg:16,cast:!1})}let We=De("puddle",o(-1.95,wt+.003,-2.6),"xz");[[0,0,.42,.3],[.25,.18,.28,.2],[-.2,.22,.22,.18]].forEach(([R,re,Se,Oe])=>{n(1,.004,r.water,-1.95+R,wt+.003,-2.6+re,We.g,{seg:28,cast:!1}).scale.set(Se,1,Oe)});let $e=-1.72,et=-1.1,ht=-3.89,Y=De("tankless",o($e,et,ht));{let R=Y.g;t(.36,.56,.2,p,$e,et,ht,R,{r:.012}),t(.3,.46,.006,p,$e,et,ht+.1,R,{r:.003}),F.plane("tkl",.08,R,$e,et+.12,ht+.105),O([[$e+.06,et+.28,ht],[$e+.06,-.62,ht],[$e+.06,-.62,-4.05]],.05,b,R,{fit:1.15,seg:16}),O([[mn,ui,-3.5],[mn,ui,-3.84],[-1.45,ui,-3.84],[-1.45,-1.52,-3.84],[$e+.1,-1.52,-3.84],[$e+.1,et-.28,-3.84]],.014,w,R,{seg:8}),n(.022,.06,C,-1.45,-1.25,-3.84,R,{seg:10}),t(.014,.08,.016,U,-1.42,-1.24,-3.84,R,{r:.003,cast:!1}),[[$e-.1,r.bluePlastic,-2.25],[$e-.02,r.redPlastic,-2.35]].forEach(([re,Se,Oe],Ue)=>{O([[re,et-.28,-3.84],[re,-1.6-Ue*.06,-3.84],[Oe,-1.6-Ue*.06,-3.84],[Oe,-.26,-3.84]],.011,C,R,{seg:8}),n(.017,.04,C,re,-1.47,-3.84,R,{seg:8}),t(.05,.012,.012,Se,re+.02,-1.47,-3.815,R,{cast:!1})}),[-.45,-1.2].forEach(re=>t(.03,.012,.03,C,-2.3,re,-3.85,R,{cast:!1}))}let ze=De("loose",o(ci,-1.5,-.3),"pop");xe(-1.48,-.29,ze.g),xe(-.29,ve,ze.g);let be=De("demo",o(-3,wt,-.5),"y");{let R=be.g,re=-1.05,Se=ci+.02,Oe=-1.45,Ue=-2.45,gt=-1.6;t(Ue-Se,.038,.089,d,(Se+Ue)/2,wt+.019,re,R),t(Oe-gt,.038,.089,d,(gt+Oe)/2,wt+.019,re,R),t(Oe-Se,.038,.089,d,(Se+Oe)/2,Ti-.019,re,R);for(let at=Se+.02;at<Oe;at+=.406)at>Ue-.04&&at<gt+.04||t(.038,Ti-wt-.076,.089,d,at,(wt+Ti)/2,re,R);[Ue-.019,gt+.019].forEach(at=>t(.038,Ti-wt-.076,.089,d,at,(wt+Ti)/2,re,R)),[Ue+.019,gt-.019].forEach(at=>t(.038,2.07,.089,d,at,wt+1.035,re,R)),t(gt-Ue,.18,.089,d,(Ue+gt)/2,wt+2.16,re,R),F.plane("suite",.15,R,Ue-.019,-1.2,re+.046),[-.5,.5].forEach(at=>t(1.1,.04,.08,d,-2.7,wt+.02,1+at*1.8,R));for(let at=0;at<4;at++)t(1.22,.0127,2.44,h,-2.7+at%2*.02,wt+.047+at*.0135,1+at%3*.015,R,{rot:[0,(at-1.5)*.012,0]});let tt=-4.35,ct=1.5;t(.62,.88,.92,T,tt,wt+.5,ct,R,{r:.02}),t(.66,.04,.96,T,tt,wt+.95,ct,R,{r:.01}),[-.3,.3].forEach(at=>n(.05,.04,w,tt+.2,wt+.05,ct+at,R,{axis:"x",seg:12})),[[0,.1,.4,.4],[-.1,-.15,-.3,.6],[.12,-.25,.2,-.5]].forEach(([at,Pt,It,vn])=>t(.4,.0127,.5,h,tt+at,wt+.95,ct+Pt,R,{rot:[It,vn,.2]})),t(.3,.09,.6,v,tt-.05,wt+.98,ct-.1,R,{rot:[.3,.2,-.25]}),F.plane("bin",.2,R,tt+.312,wt+.75,ct).rotation.y=Math.PI/2;for(let at=0;at<7;at++)t(.05+at%3*.04,.0127,.04+at%2*.05,h,ci+.12+at%3*.09,wt+.007,-1.3+at*.3,R,{rot:[0,at*.7,0],cast:!1})}z(u),Ke();let Ye={install:o(Ot,-1.65,Xn+.02),maintain:o(Ot+.1,-2.56,Xn+.03),upgrade:o(ci+.03,-1.3,-2.05),hpump:o(Ot+.1,li+.22,Jt+.4),replace:o($e,et+.05,ht+.11),remove:o(-2.1,-1.9,-2.6),demo:o(ci-.04,-1.5,-.6)},qe={time:19.4,cut:0,ghost:0,ground:1,lift:0,orbit:.012},W=[{...qe,radius:14,theta:.2,phi:.9,fx:-2.6,ty:-1.8,fz:-2.2,lift:3,dof:0,orbit:.02,narrow:{radius:12}},{...qe,radius:3.5,theta:.5,phi:1.36,fx:-2.8,ty:-1.95,fz:-2.2,dof:1,narrow:{fx:-3.15}},{...qe,radius:4.4,theta:1,phi:1.56,fx:-3.7,ty:-1.15,fz:-2.25,dof:.9},{...qe,radius:4.8,theta:-.1,phi:1.36,fx:-1.85,ty:-1.8,fz:-3.2,dof:1},{...qe,radius:3.8,theta:-.55,phi:1.36,fx:-2,ty:-1.85,fz:-1.3,dof:.8,narrow:{fx:-2.35,fz:-1.1}},{...qe,radius:4.4,theta:.7,phi:1.3,fx:-3.4,ty:-1.95,fz:-.1,dof:.7,narrow:{fx:-3.9,ty:-1.55,fz:-.6}}],Ce=-1,Me=0,nt=0,lt=0,qt=0,Ft=0,Wt=0,Bn=o(-2,wt+.12,.35),hi=He.distanceTo(Bn),qn=o(0,0,0);return{name:"cycle",group:l,anchors:Ye,shots:W,hides:R=>[...R.sys.hvac?R.sys.hvac.meshes:[],...R.sys["water-heaters"]?R.sys["water-heaters"].meshes:[]],light(R){return R===0?{pos:[-4,2,0],at:[-2.8,-2.4,-2.4],power:1,fill:.3}:R===1?{pos:[-1.7,-.5,-.7],at:[-3.3,-2.3,-2.4],power:1,fill:.35}:R===2?{pos:[-1.6,-.45,-1.1],at:[-3.9,-1.4,-2.2],power:1,fill:.35}:R===3?{pos:[-2.5,-.45,-1],at:[-1.9,-1.9,-3.4],power:1,fill:.35}:R===4?{pos:[-3.6,-.45,.2],at:[-2,-2.2,-1.4],power:1,fill:.35}:{pos:[-1.5,-.5,1.6],at:[-4.2,-1.8,-.6],power:1,fill:.35}},update({step:R,q:re,t:Se,dt:Oe,snap:Ue,reduce:gt}){let tt=Ue?1:1-Math.exp(-Oe*4);re=Et(re||0,0,1);let ct=R===1?Math.round(1+11*re):w1[R]??25;ct!==Ce&&(Ce=ct,F.set("cal",void 0,void 0,{year:ct,verb:A1[R]||""}),F.set("svc",void 0,void 0,{year:ct})),y.emissiveIntensity=gt?1.4:1.3+.3*Math.sin(Se*13.1)+.2*Math.sin(Se*7.7+1.3),A.emissiveIntensity=gt?1.8:Math.sin(Se*2.4)>-.2?2:.3;let at=R===1?re:R>1?1:0;Me=Ue?at:dt(Me,at,1-Math.exp(-Oe*6));let Pt=ft(.06,.28,Me),It=ft(.3,.46,Me),vn=ft(.5,.86,Me),di=ft(.38,.48,Me);Te.visible=R<=1,Te.position.lerpVectors(Ve,V,Pt).lerp(vt,It),Te.rotation.set(-1.72*It,0,.06*It),ke.visible=di>.001,ke.position.lerpVectors(V,Ve,vn),ke.scale.setScalar(Math.max(.001,di)),$(ne,R===0?1:0,tt),$(rt,R===1?1:0,tt);let wi=$(N,R>=2?1:0,tt);he.visible=wi>.98,gt||(he.rotation.z=Se*6);let ti=R>3||R===3&&re>.6;$(ot,ti?0:1,1),$(Xe,ti?1:0,1),$(We,R===3?.15+.85*ft(0,.45,re):0,tt),$(Y,R>3||R===3&&re>.45?1:0,tt),$(ze,R<5?1:0,1),$(be,R===5?1:0,tt),Wt=dt(Wt,ti?1:0,tt),Z.rotation.z=-Wt*Math.PI/2,me.visible=R>=3;let fi=R===4?re:R>4?1:0;nt=dt(nt,ft(0,.25,fi)*.42,tt);let ws=lt;lt=dt(lt,ft(.25,1,fi),tt),Ft+=(lt-ws)*hi,qt=dt(qt,R===4?1:0,tt),Fe.visible=R<=4,Fe.position.lerpVectors(He,Bn,lt),Fe.rotation.set(nt,.08*lt,0),de.visible=qt>.02,de.scale.setScalar(Math.max(.001,ft(0,1,qt))),Ge.rotation.x=Ft/.12,qn.set(0,.95,-.36),Fe.updateMatrix(),Ye.remove.copy(qn.applyMatrix4(Fe.matrix))}}}function up({M:i,H:e,Ug:t,Wd:n,tier:s,reduce:r,glowTex:a}){let o=ap({M:i,tier:s,reduce:r,glowTex:a,dotTex:os("rgba(255,255,255,0.75)")}),c=new xt;c.name="sets";let l=x=>x.traverse(b=>{b.userData.noPick=!0}),u=op({kit:o});c.add(u.group),l(u.group);let p={};Object.entries({panel:lp,attic:null,sewer:null,radon:null,restore:null,cycle:cp}).forEach(([x,b])=>{typeof b=="function"&&(p[x]=b)});let f={},h=new wa(16769725,0,18,.5,.8,1);h.castShadow=s>=1,h.shadow.mapSize.set(s>=2?2048:1024,s>=2?2048:1024),h.shadow.bias=-6e-4,h.shadow.normalBias=.006,h.shadow.radius=3,h.shadow.camera.near=.15,h.shadow.camera.far=16;let d=new ei(9414888,0,9,2);c.add(h,h.target,d);let _=new L(2,-.3,-2.5),g=new L(2.8,-1.2,-3.9),m=0,E=1,T=null,v=[];function y(x){if(f[x]||!p[x])return f[x];let b=p[x]({kit:o,M:i,H:e,Ug:t,Wd:n,tier:s,reduce:r});return b.group.visible=!1,l(b.group),c.add(b.group),f[x]=b,b}function A(x,b,C,U,S){o.time.value=C,u.disc.rotation.y=C*1.4;let D=b.zoom&&p[b.zoom]?b.zoom:null;D&&y(D);let P=x.zk>.004?D||T:null;P!==T&&(T&&f[T]&&(f[T].group.visible=!1),v.forEach(H=>{H.visible=!0}),v=[],T=P,T&&(f[T].group.visible=!0,f[T].hides&&(v=(f[T].hides(e,t,n)||[]).filter(H=>H&&H.visible),v.forEach(H=>{H.visible=!1}))));let F=S?1:1-Math.exp(-U*3.2),k=0;if(T){let H=f[T];H.update({step:b.zs|0,p:b.zp||0,q:b.zq||0,k:x.zk,t:C,dt:U,reduce:r,snap:S});let z=H.light?H.light(b.zs|0,b.zq||0):null;if(z){let O=m<.02?1:F;_.lerp(w.fromArray(z.pos),O),g.lerp(w.fromArray(z.at),O),k=z.power*x.zk,E=dt(E,z.fill??1,F)}}m=dt(m,k,F),h.position.copy(_),h.target.position.copy(g),h.intensity=10*m,h.visible=m>.01,d.position.copy(g).add(w.set(-1.2,.5,1.6)),d.intensity=1.4*m*E,d.visible=m>.01}let w=new L;return{root:c,kit:o,update:A,ensure:y,names:Object.keys(p),get shown(){return T},anchors(){return T?f[T].anchors:null},input(x,b){let C=y(x);C&&C.input&&C.input(b)},shots(x){let b=y(x);return b?b.shots||[]:null},get:x=>y(x),prebuild(){let x=Object.keys(p).find(b=>!f[b]);return x?(y(x),!0):!1},lampPower:()=>m}}function L1(){let i=performance.now(),e=[],t=W=>e.push([W,Math.round(performance.now()-i)]),n=document.getElementById("stage"),s=document.documentElement,r=()=>window.dispatchEvent(new Event("hause:stage-ready")),a=()=>{s.classList.add("no-webgl"),r()};if(!n)return a();let o=window.matchMedia("(prefers-reduced-motion: reduce)").matches,c=Rf(),l=navigator.hardwareConcurrency||4,u=typeof window.HAUSE_QUALITY=="number"?window.HAUSE_QUALITY:c?l>=6?1:0:l>=6?2:1;try{let W=document.createElement("canvas"),Ce=W.getContext("webgl2");if(!Ce)return a();let Me=Ce.getExtension("WEBGL_lose_context");Me&&Me.loseContext()}catch{return a()}let p;try{if(p=new pc({canvas:n,antialias:u===0,powerPreference:"high-performance"}),!p.getContext())throw new Error("no gl")}catch{return a()}n.addEventListener("webglcontextlost",W=>{W.preventDefault(),q=!1,s.classList.add("no-webgl")}),p.toneMapping=Ss,p.toneMappingExposure=1,p.shadowMap.enabled=!0,p.shadowMap.type=Hs;let f=new si(new L(1,0,0),1e3);p.clippingPlanes=[f],Pf(p.capabilities.getMaxAnisotropy()),If(u);let h=new Ls;h.environmentIntensity=.6,h.fog=new oa(1317678,70,360);let d=new Dn(30,1,.3,1400),_=.3;t("renderer");let g=Xf(p,h);t("sky");let{M:m,T:E}=Wf();t("materials+textures");let T=Fr(),v=Vf(),y=Kf({M:m,T:E,markTex:v,glowTex:T});h.add(y.house),t("house");let A=ep({M:m,T:E,glowTex:T,markTex:v,tier:u,reduce:o});h.add(A.world),t("world");let w=tp({house:y.house,reduce:o}),x=ip({M:m,layers:y.layers,glowTex:T}),b=sp({scene:h,M:m,tier:u,reduce:o});Object.values(y.layers).forEach(W=>{rp(W,y.edgeMat),gh(W)}),gh(A.props);let C=up({M:m,H:y,Ug:b,Wd:A,tier:u,reduce:o,glowTex:T});y.house.add(C.root),t("systems+interior+underground+merge");let U=new ba(10466518,1709842,.5),S=new Rr(16769728,3);S.castShadow=!0,S.shadow.mapSize.set(u>=2?2048:1024,u>=2?2048:1024),Object.assign(S.shadow.camera,{left:-26,right:26,top:26,bottom:-26,near:5,far:240}),S.shadow.bias=-3e-4,S.shadow.normalBias=.04,S.shadow.radius=u>=2?2.5:1.5,S.target.position.set(0,3,0);let D=new Rr(9085656,.6);D.position.copy(g.U.uMoonDir.value).multiplyScalar(60),h.add(U,S,S.target,D);let P={explode:0,radius:36,theta:.55,phi:1.36,ty:4.2,tx:-6,time:19.4,marks:0,ground:1,orbit:.04,visible:1,ghost:0,cut:0,lift:0,thermal:0,netE:0,netW:0,netA:0,netR:0,lensY:0,fx:0,fz:0,beacons:0,section:0,cutX:.45,season:0,snowfall:1,smoke:1,melt:0,icicles:0,aurora:0,zk:0,dof:0},F=Object.assign({level:null,focusSys:null,netFocus:null,ugFocus:null,interactive:!1,zoom:null,zs:0,zp:0,zq:0},P),k=["explode","radius","phi","ty","tx","time","marks","ground","visible","ghost","cut","lift","thermal","netE","netW","netA","netR","lensY","fx","fz","beacons","section","cutX","season","snowfall","smoke","melt","icicles","aurora","zk","dof"],H=0,z=1,O=1,B=1,q=!0,oe=0,ge=-9,ye={set(W){Object.assign(F,W)},highlight(W){F.focusSys=W},selectLevel(W){F.level=W},levels:io.map(W=>W.key),onPick:null,onHoverLevel:null,onFrame:null,onThermal:null,roomsLit:0,get quality(){return u}};window.HAUSE_STAGE=ye;let De=new Ze(14256718),Ke=null;function $(W){Ke=W,Object.keys(y.sys).forEach(Ce=>y.sys[Ce].mats.forEach(Me=>{Ce===W?(Me.emissive.copy(De),Me.emissiveIntensity=.9):(Me.emissive.copy(Me.userData.baseEmissive),Me.emissiveIntensity=1)}))}let se=new Set;y.house.traverse(W=>{!W.isMesh||!W.material||(Array.isArray(W.material)?W.material:[W.material]).forEach(Ce=>{Ce.userData&&(Ce.userData.shell||Ce.userData.wall)&&se.add(Ce)})});let ve="",xe=!1;y.edgeMat.visible=!1;function we(W,Ce){let Me=W.toFixed(3)+"|"+Ce.toFixed(3);if(Me===ve)return;ve=Me;let nt=W>.01||Ce>.01;se.forEach(lt=>{let qt=lt.userData.pane,Ft=lt.userData.shell?W*(qt?.75:.9):0,Wt=lt.userData.wall?Ce*(qt?.8:.9):0;nt!==xe&&(lt.transparent=nt||!!lt.userData.alwaysTransparent,lt.needsUpdate=!0),lt.opacity=1-Math.max(Ft,Wt),lt.depthWrite=Math.max(Ft,Wt)<.4}),xe=nt,y.edgeMat.opacity=Math.max(W*.28,Ce*.16),y.edgeMat.visible=y.edgeMat.opacity>.01}let X=np({scene:h,M:m,skipParents:[...Object.values(w.groups),C.root],onChange:W=>{A.setThermal(W),p.toneMapping=W?oi:Ss,ye.onThermal&&ye.onThermal(W)}}),Re=new L;function ee(W,Ce){return Re.copy(Ce),W.localToWorld(Re),Re.project(d),{x:(Re.x*.5+.5)*z,y:(-Re.y*.5+.5)*O,behind:Re.z>1}}let ie=(W,Ce,Me)=>new L(W,Ce,Me),Z=io.map(W=>({obj:y.layers[W.key],offset:ie(on/2+1.4,{roof:7.8,upper:4.9,main:1.8,basement:-1.2,below:-2.8}[W.key],Ct/2)}));ye.projectLevels=()=>Z.map(W=>ee(W.obj,W.offset)),ye.projectAnchors=()=>{let W={};Object.keys(y.ANCHORS).forEach(Me=>{W[Me]=ee(y.house,y.ANCHORS[Me])}),Object.keys(b.ANCHORS).forEach(Me=>{W[Me]=ee(y.house,b.ANCHORS[Me])});let Ce=C.anchors();return Ce&&Object.keys(Ce).forEach(Me=>{W["z."+Me]=ee(y.house,Ce[Me])}),W},ye.zoomSets=C.names,ye.zoomShots=W=>C.shots(W),ye.zoomInput=(W,Ce)=>C.input(W,Ce),ye.prebuildZoom=()=>C.prebuild();let ne={x:0,y:0,nx:0,ny:0},le=null,Ae=new Ra,Te=[];y.house.traverse(W=>{!W.isMesh||W.isInstancedMesh||!W.visible||W.userData.noPick||(W.geometry.computeBoundingSphere(),W.geometry.boundingSphere.radius>.3&&Te.push(W))});let ke=W=>{for(;W&&!W.userData.level;)W=W.parent;return W?W.userData.level:null};ye.pickAt=(W,Ce)=>{Ae.setFromCamera({x:W/z*2-1,y:-(Ce/O)*2+1},d);let Me=Ae.intersectObjects(Te,!1)[0];return Me?{level:ke(Me.object),sys:Me.object.userData.sys||null}:null},ye.pickCount=()=>Te.length,window.addEventListener("pointermove",W=>{ne.nx=W.clientX/z*2-1,ne.ny=W.clientY/O*2-1,le&&(oe=le.theta0-(W.clientX-le.x)*.006)},{passive:!0}),n.addEventListener("pointerdown",W=>{F.interactive&&(le={x:W.clientX,theta0:oe,t:performance.now()})}),window.addEventListener("pointerup",W=>{if(!le)return;let Ce=Math.abs(W.clientX-le.x)<6&&performance.now()-le.t<400;if(le=null,Ce&&F.interactive){Ae.setFromCamera({x:W.clientX/z*2-1,y:-(W.clientY/O)*2+1},d);let Me=Ae.intersectObjects(Te,!1)[0];Me&&ye.onPick&&ye.onPick(ke(Me.object),Me.object.userData.sys||null)}}),n.addEventListener("pointermove",W=>{if(!F.interactive||le)return;Ae.setFromCamera({x:W.clientX/z*2-1,y:-(W.clientY/O)*2+1},d);let Ce=Ae.intersectObjects(Te,!1)[0],Me=Ce?ke(Ce.object):null;n.style.cursor=Me?"pointer":"grab",ye.onHoverLevel&&ye.onHoverLevel(Me)});let Ve=null;function V(){Ve&&Ve.dispose(),Ve=u>=1?Jf(p,h,d,u,Math.round(z*B),Math.round(O*B)):null}function vt(){z=window.innerWidth,O=window.innerHeight,B=Math.min(window.devicePixelRatio||1,u>=2?1.75:u===1?1.5:1.25),p.setPixelRatio(B),p.setSize(z,O,!1),d.aspect=z/O,d.fov=z<700?44:30,d.updateProjectionMatrix(),Ve&&Ve.setSize(Math.round(z*B),Math.round(O*B))}window.addEventListener("resize",vt),vt(),V();let rt=new L;function N(W,Ce){let Me=.5-.5*Math.cos(Ce*Math.PI*2),nt=dt(7.5,5,Me),lt=dt(18.3,21.9,Me),qt=dt(24,62,Me),Ft=Math.PI*(W-nt)/(lt-nt),Wt=qt*Math.sin(Ft),Bn=Wt*Math.PI/180;return rt.set(-Math.sin(Ft)*Math.cos(Bn),Math.sin(Bn),Math.cos(Ft)*Math.cos(Bn)).normalize(),Wt}let M=[[0,[.62,.6,.55]],[.16,[.7,.7,.55]],[.3,[.8,1,.62]],[.5,[.74,.95,.55]],[.68,[1.05,.88,.5]],[.82,[1,.72,.45]],[1,[.62,.6,.55]]];function K(W,Ce){let Me=0;for(;Me<M.length-2&&M[Me+1][0]<=W;)Me++;let[nt,lt]=M[Me],[qt,Ft]=M[Me+1],Wt=(W-nt)/(qt-nt);Ce.setRGB(dt(lt[0],Ft[0],Wt),dt(lt[1],Ft[1],Wt),dt(lt[2],Ft[2],Wt))}let j=new L,he=new L,He=new L,Fe=new L,me=new L,de={ug:0,section:0,cutX:.45,ground:1,ghost:0,cut:0,snow:1,roofSnow:1,snowfall:1,rain:0,leaves:0,smoke:1,melt:0,icicles:0,grow:0,leafTint:new Ze(.3,.5,.15),explode:0,lift:0,zk:0},Ge=[[0,[.3,.3,.3]],[.22,[.62,.8,.28]],[.36,[.4,.62,.2]],[.55,[.3,.5,.15]],[.7,[.95,.7,.18]],[.82,[.9,.35,.1]],[1,[.5,.2,.08]]];function ot(W,Ce){let Me=0;for(;Me<Ge.length-2&&Ge[Me+1][0]<=W;)Me++;let[nt,lt]=Ge[Me],[qt,Ft]=Ge[Me+1],Wt=(W-nt)/(qt-nt);Ce.setRGB(dt(lt[0],Ft[0],Wt),dt(lt[1],Ft[1],Wt),dt(lt[2],Ft[2],Wt))}let Xe=new Ze(16777215),We=new Ze,$e=0,et=30;function ht(W,Ce){H+=W;let Me=Ce?1:1-Math.exp(-W*(o?30:4.2));k.forEach(tt=>{P[tt]=dt(P[tt],F[tt],Me)}),P.theta=dt(P.theta,F.theta+(o?0:Math.sin(H*.08)*F.orbit)+oe,Me),io.forEach(tt=>{let ct=y.layers[tt.key],at=tt.key==="roof"?18*Et(P.lift,0,1):tt.key==="upper"?12*Et(P.lift-1,0,1):tt.key==="main"?9*Et(P.lift-2,0,1):0;ct.position.y=dt(ct.position.y,tt.dy*P.explode+at+(F.level===tt.key?.9:0),Me)});let nt=(P.season%1+1)%1,lt=Math.max(1-ft(.1,.3,nt),ft(.84,1,nt)),qt=Math.max(1-ft(.06,.22,nt),ft(.88,1,nt));de.ug=0,de.beacons=P.beacons,de.section=P.section,de.cutX=P.cutX,de.ground=P.ground,de.ghost=P.ghost,de.cut=P.cut,de.lift=P.lift,de.zk=P.zk,de.snow=lt,de.roofSnow=qt,de.explode=P.explode,de.grow=ft(.2,.34,nt)*(1-ft(.78,.93,nt)),ot(nt,de.leafTint),de.rain=ft(.2,.24,nt)*(1-ft(.3,.34,nt))*(o?0:1),de.leaves=ft(.72,.78,nt)*(1-ft(.9,.95,nt))*(o?0:1),de.melt=Math.max(P.melt,1-qt),de.icicles=Math.max(P.icicles,ft(.03,.1,nt)*(1-ft(.17,.26,nt))+ft(.9,.97,nt)*.5),de.snowfall=P.snowfall*(o?0:1)*(nt<.05||nt>.93?1:0),de.smoke=P.smoke*(1-ft(.12,.3,nt)+ft(.8,.95,nt)),K(nt,A.U.uTint.value);let Ft=N(P.time,nt),Wt=ft(-5,10,Ft);g.update({elev:Ft,daylight:Wt,sunDir:rt,thermal:P.thermal,aurora:P.aurora*(1-Wt),cloud:dt(.38,.62,ft(0,1,Math.abs(Math.sin(nt*Math.PI*2)))),snowy:lt>.5,voidK:Et(1-P.ground,0,1)},H),g.follow(d.position),h.fog.color.copy(g.horizon);let Bn=1-ft(0,28,Ft);S.position.copy(rt).multiplyScalar(110).add(S.target.position),S.color.setRGB(1,dt(.95,.62,Bn),dt(.88,.4,Bn)),S.intensity=3.6*ft(-4,6,Ft)*(1-P.thermal),U.color.copy(g.zenith).lerp(Xe,.4),U.groundColor.setRGB(.1,.09,.08).lerp(We.setRGB(.55,.6,.72),lt*.8*(.25+.75*Wt)),U.intensity=(.5+.35*Wt+.25*P.cut)*(1-P.thermal),D.intensity=.7*(1-Wt)*(1-P.thermal),h.environmentIntensity=.5+.4*Wt+.1*P.cut,p.toneMappingExposure=X.on?1:dt(1.2,.95,Wt),(Ce||H-ge>.4)&&(g.refreshEnv(Ce),ge=H),we(P.ghost*(1-Et(P.explode*4,0,1)),P.cut),x.update(1-Wt,P.cut);let hi=y.update(de,Me,H,Wt,Ce?100:W);ye.roomsLit=Math.round(Et(hi,0,7)),y.extra.chimneyTop.getWorldPosition(Fe),A.update(de,H,W,Wt,j,Fe,Et(hi/9,0,1));let qn=F.focusSys;Object.keys(y.sys).forEach(tt=>y.sys[tt].marks.forEach(ct=>{let at=qn?tt===qn?1:P.marks*.35:P.marks;ct.material.opacity=dt(ct.material.opacity,at,Me),ct.scale.setScalar(.95*(tt===qn?1+Math.sin(H*4)*.12:1)*(1+P.explode*.25))})),qn!==Ke&&$(qn),w.update(P,F.netFocus,H,W);let R=b.update(de,F.ugFocus,H,W);f.constant=-R,X.set(F.thermal>.5),X.time.value=H,C.update(P,F,H,W,Ce),ne.x=dt(ne.x,ne.nx,Me*.6),ne.y=dt(ne.y,ne.ny,Me*.6);let re=P.theta+ne.x*.08,Se=Et(P.phi+ne.y*.04,.35-.27*P.zk,1.5+1.2*P.zk),Oe=z<700,Ue=Et(P.radius*.012,.02,.3);Math.abs(Ue-_)>_*.02&&(_=Ue,d.near=Ue,d.updateProjectionMatrix()),j.set(P.fx,P.ty+(Oe?-1.2*Et(P.radius/30,0,1):0),P.fz),he.set(Math.sin(Se)*Math.sin(re),Math.cos(Se),Math.sin(Se)*Math.cos(re)).multiplyScalar(P.radius*(Oe?1.25:1)).add(j),d.position.copy(he),d.lookAt(j),d.updateMatrixWorld(),He.setFromMatrixColumn(d.matrixWorld,0),d.position.addScaledVector(He,Oe?0:P.tx),d.updateMatrixWorld(),me.copy(j).applyMatrix4(d.matrixWorldInverse);let gt=Math.max(.001,me.length());et=gt,A.sight.value.set(me.x/gt,me.y/gt,me.z/gt,gt),Math.abs(P.lensY-$e)>1e-4&&($e=P.lensY,Math.abs($e)<1e-4?d.clearViewOffset():d.setViewOffset(z,O,0,-$e*O,z,O)),n.style.opacity=P.visible.toFixed(3)}let Y={n:0,sum:0,last:0},ze=performance.now();function be(W){if(Ve){let Ce=Ve.gtao,Me=P.ghost>.05||P.cut>.05||X.on||P.explode>.05;Ce&&(Ce.enabled=!Me),Ve.bloom&&(Ve.bloom.strength=X.on?.9:(.3+.55*(1-Et(rt.y*4,0,1)))*(1-.45*P.zk)),Ve.grade.uniforms.uSat.value=X.on?1:1.05,Ve.setDof(X.on?0:P.dof,et,d.near,d.far),Ve.render(W,H)}else p.render(h,d)}function Ye(W){let Ce=W-Y.last;if(Y.last=W,!(Ce>250||Ce<=0)&&(Y.n++,Y.n>40&&(Y.sum+=Ce),Y.n===130)){let Me=Y.sum/90;Me>26&&u>1&&typeof window.HAUSE_QUALITY!="number"?(u--,V(),vt(),S.shadow.mapSize.set(1024,1024),S.shadow.map&&S.shadow.map.dispose(),S.shadow.map=null):Me>34&&u===1&&B>1.01&&typeof window.HAUSE_QUALITY!="number"&&(B=1,p.setPixelRatio(1),p.setSize(z,O,!1),Ve&&Ve.setSize(z,O)),Y={n:0,sum:0,last:W}}}function qe(W){if(!q)return;let Ce=Math.min((W-ze)/1e3,.05);ze=W,ht(Ce,!1),be(Ce),Ye(W),ye.onFrame&&ye.onFrame(),requestAnimationFrame(qe)}ye.pause=()=>{q=!1},ye.resume=()=>{q||(q=!0,ze=performance.now(),Y.last=0,requestAnimationFrame(qe))},ye.settle=()=>{ht(.016,!0),ht(.016,!0),be(.016),ye.onFrame&&ye.onFrame()},window.HAUSE_DEBUG&&(ye.debug={scene:h,camera:d,renderer:p,S:P,target:F,H:y,Wd:A,sky:g,sun:S,hemi:U,moon:D,Sets:C,get post(){return Ve}}),ye.info=()=>({tier:u,calls:p.info.render.calls,triangles:p.info.render.triangles,pixelRatio:B,buildMs:ye.buildMs}),t("pre-first-render"),ye.settle(),t("first-render"),ye.laps=e,requestAnimationFrame(W=>{ze=W,requestAnimationFrame(qe)}),ye.buildMs=Math.round(performance.now()-i),s.classList.add("has-webgl"),r()}L1();})();
