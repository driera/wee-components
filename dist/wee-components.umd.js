var B=Object.defineProperty,D=Object.defineProperties;var F=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var g=(e,r,f)=>r in e?B(e,r,{enumerable:!0,configurable:!0,writable:!0,value:f}):e[r]=f,h=(e,r)=>{for(var f in r||(r={}))_.call(r,f)&&g(e,f,r[f]);if(b)for(var f of b(r))v.call(r,f)&&g(e,f,r[f]);return e},w=(e,r)=>D(e,F(r));var x=(e,r)=>{var f={};for(var i in e)_.call(e,i)&&r.indexOf(i)<0&&(f[i]=e[i]);if(e!=null&&b)for(var i of b(e))r.indexOf(i)<0&&v.call(e,i)&&(f[i]=e[i]);return f};(function(e,r){typeof exports=="object"&&typeof module!="undefined"?r(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],r):(e=typeof globalThis!="undefined"?globalThis:e||self,r(e["Wee Components"]={},e.React))})(this,function(e,r){"use strict";function f(t){return t&&typeof t=="object"&&"default"in t?t:{default:t}}var i=f(r),S={button:"_button_2err0_5"},d={exports:{}},l={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var y=Object.getOwnPropertySymbols,P=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;function R(t){if(t==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}function N(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de",Object.getOwnPropertyNames(t)[0]==="5")return!1;for(var o={},s=0;s<10;s++)o["_"+String.fromCharCode(s)]=s;var n=Object.getOwnPropertyNames(o).map(function(a){return o[a]});if(n.join("")!=="0123456789")return!1;var u={};return"abcdefghijklmnopqrst".split("").forEach(function(a){u[a]=a}),Object.keys(Object.assign({},u)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}N();/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var T=i.default,m=60103;if(l.Fragment=60107,typeof Symbol=="function"&&Symbol.for){var O=Symbol.for;m=O("react.element"),l.Fragment=O("react.fragment")}var q=T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,C=Object.prototype.hasOwnProperty,I={key:!0,ref:!0,__self:!0,__source:!0};function j(t,o,s){var n,u={},a=null,c=null;s!==void 0&&(a=""+s),o.key!==void 0&&(a=""+o.key),o.ref!==void 0&&(c=o.ref);for(n in o)C.call(o,n)&&!I.hasOwnProperty(n)&&(u[n]=o[n]);if(t&&t.defaultProps)for(n in o=t.defaultProps,o)u[n]===void 0&&(u[n]=o[n]);return{$$typeof:m,type:t,key:a,ref:c,props:u,_owner:q.current}}l.jsx=j,l.jsxs=j,d.exports=l;const k=d.exports.jsx,L=d.exports.jsxs,$=s=>{var n=s,{children:t}=n,o=x(n,["children"]);return L("button",w(h({},o),{className:S.button,children:[t," ",k("span",{children:"O"})]}))};e.Button=$,Object.defineProperty(e,"__esModule",{value:!0}),e[Symbol.toStringTag]="Module"});
