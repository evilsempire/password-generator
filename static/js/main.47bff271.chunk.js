(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[0],{60:function(e,t,n){e.exports=n(75)},65:function(e,t,n){},66:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),c=n.n(o),i=(n(65),n(66),n(13)),s=n(14),l=n(17),u=n(16),d=n(107),m=n(108),h=n(109),p=n(110),f=n(105),v=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).setInput=function(e){var t,n=e.target.value;Number(n)?n>50&&(t="Password length cannot be exceed than 50."):t="Should be number.",a.setState({passwordLength:n,error:t}),a.props.setValue(n,!1)},a.state={passwordLength:"",error:""},a}return Object(s.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.passwordLength,a=t.error;return r.a.createElement("form",{autoComplete:"off"},r.a.createElement(p.a,{color:a?"secondary":"primary",type:"Number",value:n,onChange:function(t){return e.setInput(t)},fullWidth:!0,id:"outlined-basic",label:"Password Length",variant:"outlined"}),r.a.createElement(f.a,{id:"component-error-text",className:"error"},a))}}]),n}(r.a.Component),g=n(106),b=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"generate"},r.a.createElement(g.a,{variant:"outlined",onClick:function(){return e.props.calculate()}},"Generate"))}}]),n}(r.a.Component),E=n(50),O=n(51),j=n.n(O),w=n(111),y=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement(w.a,{severity:"success",color:"info"},"Copied to Clipboard!")}}]),n}(r.a.Component),C=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).randomstring=function(e){for(var t="",n=function(){var e=Math.floor(62*Math.random());return e<10?e:e<36?String.fromCharCode(e+55):String.fromCharCode(e+61)};t.length<e;)t+=n();return t},a.state={passwordString:a.randomstring(e.passwordLength),copied:!1},a}return Object(s.a)(n,[{key:"render",value:function(){var e=this,t=this.state.passwordString;return r.a.createElement("div",null,r.a.createElement(E.CopyToClipboard,{className:"copy",text:t,onCopy:function(){return e.setState({copied:!0})}},r.a.createElement("div",null,r.a.createElement("span",null,t," "),r.a.createElement(j.a,{className:"copy-icon"}))),this.state.copied?r.a.createElement(y,null):null)}}]),n}(r.a.Component),S=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={passwordLength:0,isTriggered:!1},a}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement(d.a,{variant:"outlined"},r.a.createElement(m.a,null,r.a.createElement(h.a,{maxWidth:"sm"},r.a.createElement(v,{setValue:function(t,n){return e.setState({passwordLength:t,isTriggered:n})}}),this.state.isTriggered?r.a.createElement(C,{passwordLength:this.state.passwordLength}):null,r.a.createElement(b,{calculate:function(t){return e.setState({isTriggered:!t})}}))))}}]),n}(r.a.Component);var k=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"PASSWORD GENERATOR"),r.a.createElement(S,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[60,1,2]]]);
//# sourceMappingURL=main.47bff271.chunk.js.map