!function(e){function t(t){for(var r,i,c=t[0],l=t[1],u=t[2],s=0,p=[];s<c.length;s++)i=c[s],o[i]&&p.push(o[i][0]),o[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(f&&f(t);p.length;)p.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var l=n[c];0!==o[l]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={1:0,2:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var c=window.webpackJsonp=window.webpackJsonp||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var f=l;a.push([7,0]),n()}({3:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(1),i=n.n(a),c=n(4),l=n(2);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var y=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=function(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?d(e):t}(this,s(t).call(this,e)),Object(l.bind)(d(d(n))),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,o.a.Component),function(e,t,n){t&&f(e.prototype,t),n&&f(e,n)}(t,[{key:"handleClick",value:function(e){var t=e.keyCode;if(!t||13===t){var n=this.props.handleClick;if("function"==typeof n)n(e,this.props.index,this.props.label)}}},{key:"render",value:function(){var e=this.props.ariaControls,t=this.props.ariaExpanded,n=this.props.ariaSelected,r=this.props.className,a=this.props.id,i=this.props.label,c=this.handleClick;return o.a.createElement("dt",{"aria-controls":e,"aria-expanded":t,"aria-selected":n,className:r,id:a,key:a,role:"tab",tabIndex:"0",onClick:c,onKeyDown:c},o.a.createElement("span",{"aria-hidden":"true",className:"t7-accordion__header__icon"}),i)}}]),t}();y.propTypes={ariaControls:i.a.string,ariaExpanded:i.a.bool,ariaSelected:i.a.bool,className:i.a.string,id:i.a.string,index:i.a.number,label:i.a.string,handleClick:i.a.func},y.defaultProps={ariaExpanded:!1,ariaSelected:!1};var b=y;function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){return!t||"object"!==h(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var _=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),m(this,v(t).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(t,o.a.Component),t}();function j(e){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function S(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"AccordionHeader",function(){return b}),n.d(t,"AccordionPanel",function(){return _});var P=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=function(e,t){return!t||"object"!==j(t)&&"function"!=typeof t?S(e):t}(this,g(t).call(this,e)),Object(l.bind)(S(S(n))),n.defaultState(),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(t,o.a.Component),function(e,t,n){t&&w(e.prototype,t),n&&w(e,n)}(t,[{key:"defaultState",value:function(){this.state={id:this.props.id||Object(l.unique)(),selected:this.props.selected}}},{key:"componentWillReceiveProps",value:function(e){var t=e.selected,n=this.props.selected;!Object(c.isEqual)(t,n)&&this.setState({selected:t})}},{key:"handleClick",value:function(e,t,n){var r=e.keyCode;if(!r||13===r){var o=this.props.multi,a=Object(c.cloneDeep)(this.state.selected),i=a[t];o||(a={}),a[t]=!i,this.setState({selected:a});var l=this.props.handleClick;"function"==typeof l&&l(e,t,n,a)}}},{key:"render",value:function(){var e=this.state.id,t=this.state.selected,n=this.props.children,r=this.props.multi,a=this.handleClick,i=[];return n.map(function(n,r){var c="accordion_panel_"+r+"_"+e,l="accordion_header_"+r+"_"+e,u=t[r],f=n.props.label,s=n.props.children;"string"==typeof s&&(s=o.a.createElement("p",null,s)),i.push(o.a.createElement(b,{ariaControls:c,ariaExpanded:u,ariaSelected:u,className:"t7-accordion__header",id:l,index:r,key:l,label:f,handleClick:a})),i.push(o.a.createElement("dd",{"aria-hidden":!u,"aria-labelledby":l,className:"t7-accordion__panel",id:c,key:c,role:"tabpanel"},s))}),o.a.createElement("dl",{className:"t7-accordion",id:e,role:"tablist","aria-multiselectable":r},i)}}]),t}();P.propTypes={children:i.a.node,id:i.a.string,multi:i.a.bool,selected:i.a.object,handleClick:i.a.func},P.defaultProps={children:null,multi:!1,selected:{}};t.default=P},36:function(e,t,n){},38:function(e,t,n){},7:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(6),i=n.n(a),c=n(3);n(36),n(38);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),f(this,s(t).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,o.a.Component),function(e,t,n){t&&u(e.prototype,t),n&&u(e,n)}(t,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,"@t7/render"),o.a.createElement("p",null,o.a.createElement("a",{href:"https://github.com/t7-components/accordion/blob/master/source/demo.js"},'View "demo.js" on GitHub')),o.a.createElement("hr",null),o.a.createElement("h2",null,"Using <Accordion> as a container and <AccordionPanel> for content"),o.a.createElement("h3",null,"(For demonstration purposes Item 2 has been pre-selected)"),o.a.createElement(c.default,{selected:{1:!0},handleClick:function(){}},o.a.createElement(c.AccordionPanel,{label:"Item 1"},o.a.createElement("p",null,'Content for "Item 1"')),o.a.createElement(c.AccordionPanel,{label:"Item 2"},o.a.createElement("p",null,'Content for "Item 2"')),o.a.createElement(c.AccordionPanel,{label:"Item 3"},o.a.createElement("p",null,'Content for "Item 3"'))))}}]),t}(),y=document.getElementById("root");i.a.render(o.a.createElement(d,null),y)}});