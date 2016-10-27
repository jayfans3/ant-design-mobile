webpackJsonp([36],{9:function(n,a,s){"use strict";s(14),s(13)},13:function(n,a){},14:function(n,a){},23:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var p=s(8),e=t(p),c=s(5),o=t(c),l=s(7),u=t(l),i=s(6),r=t(i),k=s(1),d=t(k),f=s(3),m=t(f),g=function(n){function a(){return(0,o["default"])(this,a),(0,u["default"])(this,n.apply(this,arguments))}return(0,r["default"])(a,n),a.prototype.render=function(){var n,a=this.props,s=a.prefixCls,t=a.size,p=a.className,c=a.style,o=a.onClick,l=(0,m["default"])((n={},(0,e["default"])(n,""+s,!0),(0,e["default"])(n,s+"-"+t,!0),(0,e["default"])(n,p,!!p),n));return d["default"].createElement("div",{className:l,style:c,onClick:o})},a}(d["default"].Component);a["default"]=g,g.defaultProps={prefixCls:"am-whitespace",size:"md"},n.exports=a["default"]},24:function(n,a,s){"use strict";s(9),s(52)},26:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var p=s(8),e=t(p),c=s(5),o=t(c),l=s(7),u=t(l),i=s(6),r=t(i),k=s(1),d=t(k),f=s(3),m=t(f),g=function(n){function a(){return(0,o["default"])(this,a),(0,u["default"])(this,n.apply(this,arguments))}return(0,r["default"])(a,n),a.prototype.render=function(){var n,a=this.props,s=a.prefixCls,t=a.size,p=a.className,c=a.children,o=a.style,l=(0,m["default"])((n={},(0,e["default"])(n,""+s,!0),(0,e["default"])(n,s+"-"+t,!0),(0,e["default"])(n,p,!!p),n));return d["default"].createElement("div",{className:l,style:o},c)},a}(d["default"].Component);a["default"]=g,g.defaultProps={prefixCls:"am-wingblank",size:"lg"},n.exports=a["default"]},27:function(n,a,s){"use strict";s(9),s(54)},52:function(n,a){},54:function(n,a){},515:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}function p(n){return"string"==typeof n}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var e=s(4),c=t(e),o=s(5),l=t(o),u=s(7),i=t(u),r=s(6),k=t(r),d=s(1),f=t(d),m=s(1284),g=t(m),v=function(n){function a(){return(0,l["default"])(this,a),(0,i["default"])(this,n.apply(this,arguments))}return(0,k["default"])(a,n),a.prototype.render=function(){var n=this,a=this.props,s=a.current,t=a.direction;return f["default"].createElement(g["default"],(0,c["default"])({},this.props,{direction:t}),this.props.children.map(function(a,t){var e=-1;if(t<n.props.children.length-1){var c=n.props.children[t+1].props.status;"error"===c&&(e=t)}var o=e>-1?"error-tail":"",l=void 0,u=void 0;return a.props.icon?(l=a.props.icon,p(l)&&(u="",t>0&&t<=s?l="check-circle":"error"===a.props.status?l="cross-circle":"process"===a.props.status&&(l="check-circle"))):(u=t<=s?null:"ellipsis-item",l=t<=s?"check-circle-o":"error"===a.props.status?"cross-circle-o":"ellipsis"),u=o+" "+u,f["default"].cloneElement(a,{key:t,icon:l,className:u})}))},a}(f["default"].Component);a["default"]=v,v.Step=g["default"].Step,v.defaultProps={prefixCls:"am-steps",iconPrefix:"ant",labelPlacement:"vertical",current:0,direction:"vertical"},n.exports=a["default"]},516:function(n,a,s){"use strict";s(9),s(1175)},789:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(27),s(26)),e=t(p),c=(s(24),s(23)),o=t(c),l=(s(516),s(515)),u=t(l),i=s(1),r=t(i),k=s(2);t(k);n.exports={content:[["p","\u9875\u9762\u4e2d\u7b80\u5355\u7684\u7ad6\u76f4\u65b9\u5411\u7684\u6b65\u9aa4\u6761\uff0c",["code","size=small"]]],meta:{order:0,title:"\u9875\u9762\u4e2d\u7684\u6b65\u9aa4\u6761",filename:"components/steps/demo/basic.md",id:"components-steps-demo-basic"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Steps<span class="token punctuation" >,</span> WingBlank<span class="token punctuation" >,</span> WhiteSpace <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> Step <span class="token operator" >=</span> Steps<span class="token punctuation" >.</span>Step<span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>stepsExample<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>lg<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WingBlank</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>lg<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Steps</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>small<span class="token punctuation" >"</span></span> <span class="token attr-name" >current</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >3</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Step</span> <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u5df2\u5b8c\u6210<span class="token punctuation" >"</span></span> <span class="token attr-name" >description</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u8fd9\u91cc\u662f\u4fe1\u606f\u7684\u63cf\u8ff0<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Step</span> <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u8fdb\u884c\u4e2d<span class="token punctuation" >"</span></span> <span class="token attr-name" >description</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u8fd9\u91cc\u662f\u4fe1\u606f\u7684\u63cf\u8ff0<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Step</span> <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u5f85\u8fd0\u884c<span class="token punctuation" >"</span></span> <span class="token attr-name" >description</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u8fd9\u91cc\u662f\u4fe1\u606f\u7684\u63cf\u8ff0<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Steps</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>WingBlank</span><span class="token punctuation" >></span></span>\n\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>lg<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WingBlank</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>lg<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Steps</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>small<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Step</span> <span class="token attr-name" >status</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>process<span class="token punctuation" >"</span></span> <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u5df2\u5b8c\u6210<span class="token punctuation" >"</span></span> <span class="token attr-name" >description</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u8fd9\u91cc\u662f\u4fe1\u606f\u7684\u63cf\u8ff0<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Step</span> <span class="token attr-name" >status</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>error<span class="token punctuation" >"</span></span> <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u51fa\u9519<span class="token punctuation" >"</span></span> <span class="token attr-name" >description</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u8fd9\u91cc\u662f\u4fe1\u606f\u7684\u63cf\u8ff0<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Step</span> <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u5f85\u8fd0\u884c<span class="token punctuation" >"</span></span> <span class="token attr-name" >description</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u8fd9\u91cc\u662f\u4fe1\u606f\u7684\u63cf\u8ff0<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Steps</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>WingBlank</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=u["default"].Step;return r["default"].createElement("div",{className:"stepsExample"},r["default"].createElement(o["default"],{size:"lg"}),r["default"].createElement(e["default"],{size:"lg"},r["default"].createElement(u["default"],{size:"small",current:3},r["default"].createElement(n,{title:"\u5df2\u5b8c\u6210",description:"\u8fd9\u91cc\u662f\u4fe1\u606f\u7684\u63cf\u8ff0"}),r["default"].createElement(n,{title:"\u8fdb\u884c\u4e2d",description:"\u8fd9\u91cc\u662f\u4fe1\u606f\u7684\u63cf\u8ff0"}),r["default"].createElement(n,{title:"\u5f85\u8fd0\u884c",description:"\u8fd9\u91cc\u662f\u4fe1\u606f\u7684\u63cf\u8ff0"}))),r["default"].createElement(o["default"],{size:"lg"}),r["default"].createElement(e["default"],{size:"lg"},r["default"].createElement(u["default"],{size:"small"},r["default"].createElement(n,{status:"process",title:"\u5df2\u5b8c\u6210",description:"\u8fd9\u91cc\u662f\u4fe1\u606f\u7684\u63cf\u8ff0"}),r["default"].createElement(n,{status:"error",title:"\u51fa\u9519",description:"\u8fd9\u91cc\u662f\u4fe1\u606f\u7684\u63cf\u8ff0"}),r["default"].createElement(n,{title:"\u5f85\u8fd0\u884c",description:"\u8fd9\u91cc\u662f\u4fe1\u606f\u7684\u63cf\u8ff0"}))))}}},790:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(27),s(26)),e=t(p),c=(s(24),s(23)),o=t(c),l=(s(516),s(515)),u=t(l),i=s(1),r=t(i),k=s(2);t(k);n.exports={content:[["p","\u7ed3\u679c\u9875\u4e2d\u7684\u6b65\u9aa4\u6761\uff0c\u6839\u636e\u4e1a\u52a1\u8bbe\u5b9a\u6b65\u9aa4icon."]],meta:{order:1,title:"\u7ed3\u679c\u9875\u9762\u4e2d\u7684\u6b65\u9aa4\u6761",filename:"components/steps/demo/icons.md",id:"components-steps-demo-icons"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Steps<span class="token punctuation" >,</span> WingBlank<span class="token punctuation" >,</span> WhiteSpace <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> Step <span class="token operator" >=</span> Steps<span class="token punctuation" >.</span>Step<span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> Icon <span class="token operator" >=</span> <span class="token punctuation" >(</span><span class="token punctuation" >{</span> type <span class="token punctuation" >}</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>span</span> <span class="token attr-name" >className</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token template-string" ><span class="token string" >`anticon anticon-</span><span class="token interpolation" ><span class="token interpolation-punctuation punctuation" >${</span>type<span class="token interpolation-punctuation punctuation" >}</span></span><span class="token string" >`</span></span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>stepsExample<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>lg<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WingBlank</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>lg<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Steps</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Step</span> <span class="token attr-name" >status</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>finish<span class="token punctuation" >"</span></span> <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u6b65\u9aa41<span class="token punctuation" >"</span></span> <span class="token attr-name" >icon</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>pay-circle<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Step</span> <span class="token attr-name" >status</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>process<span class="token punctuation" >"</span></span> <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u6b65\u9aa42<span class="token punctuation" >"</span></span> <span class="token attr-name" >icon</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>pay-circle<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Step</span> <span class="token attr-name" >status</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>error<span class="token punctuation" >"</span></span> <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u6b65\u9aa43<span class="token punctuation" >"</span></span> <span class="token attr-name" >icon</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>pay-circle<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Steps</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>WingBlank</span><span class="token punctuation" >></span></span>\n\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>lg<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WingBlank</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>lg<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Steps</span> <span class="token attr-name" >current</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >1</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Step</span> <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u6b65\u9aa41<span class="token punctuation" >"</span></span> <span class="token attr-name" >icon</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>pay-circle<span class="token punctuation" >"</span></span> <span class="token attr-name" >description</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u8fd9\u91cc\u662f\u4fe1\u606f\u7684\u63cf\u8ff0<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Step</span> <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u6b65\u9aa42<span class="token punctuation" >"</span></span> <span class="token attr-name" >icon</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>pay-circle<span class="token punctuation" >"</span></span> <span class="token attr-name" >description</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u8fd9\u91cc\u662f\u4fe1\u606f\u7684\u63cf\u8ff0<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Step</span> <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u6b65\u9aa43<span class="token punctuation" >"</span></span> <span class="token attr-name" >icon</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>pay-circle<span class="token punctuation" >"</span></span> <span class="token attr-name" >description</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u8fd9\u91cc\u662f\u4fe1\u606f\u7684\u63cf\u8ff0<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Steps</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>WingBlank</span><span class="token punctuation" >></span></span>\n\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>lg<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WingBlank</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>lg<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Steps</span> <span class="token attr-name" >current</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >1</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Step</span> <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u6b65\u9aa41<span class="token punctuation" >"</span></span> <span class="token attr-name" >icon={&lt;Icon</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>pay-circle<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span><span class="token punctuation" >}</span> <span class="token operator" >/</span><span class="token operator" >></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Step</span> <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u6b65\u9aa42<span class="token punctuation" >"</span></span> <span class="token attr-name" >icon</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>pay-circle<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Step</span> <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u6b65\u9aa43<span class="token punctuation" >"</span></span> <span class="token attr-name" >status</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>error<span class="token punctuation" >"</span></span> <span class="token attr-name" >icon</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>pay-circle<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Step</span> <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u6b65\u9aa44<span class="token punctuation" >"</span></span> <span class="token attr-name" >icon</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>pay-circle<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Steps</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>WingBlank</span><span class="token punctuation" >></span></span>\n\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=u["default"].Step,a=function(n){var a=n.type;return r["default"].createElement("span",{className:"anticon anticon-"+a})};return r["default"].createElement("div",{className:"stepsExample"},r["default"].createElement(o["default"],{size:"lg"}),r["default"].createElement(e["default"],{size:"lg"},r["default"].createElement(u["default"],null,r["default"].createElement(n,{status:"finish",title:"\u6b65\u9aa41",icon:"pay-circle"}),r["default"].createElement(n,{status:"process",title:"\u6b65\u9aa42",icon:"pay-circle"}),r["default"].createElement(n,{status:"error",title:"\u6b65\u9aa43",icon:"pay-circle"}))),r["default"].createElement(o["default"],{size:"lg"}),r["default"].createElement(e["default"],{size:"lg"},r["default"].createElement(u["default"],{current:1},r["default"].createElement(n,{title:"\u6b65\u9aa41",icon:"pay-circle",description:"\u8fd9\u91cc\u662f\u4fe1\u606f\u7684\u63cf\u8ff0"}),r["default"].createElement(n,{title:"\u6b65\u9aa42",icon:"pay-circle",description:"\u8fd9\u91cc\u662f\u4fe1\u606f\u7684\u63cf\u8ff0"}),r["default"].createElement(n,{title:"\u6b65\u9aa43",icon:"pay-circle",description:"\u8fd9\u91cc\u662f\u4fe1\u606f\u7684\u63cf\u8ff0"}))),r["default"].createElement(o["default"],{size:"lg"}),r["default"].createElement(e["default"],{size:"lg"},r["default"].createElement(u["default"],{current:1},r["default"].createElement(n,{title:"\u6b65\u9aa41",icon:r["default"].createElement(a,{type:"pay-circle"})}),r["default"].createElement(n,{title:"\u6b65\u9aa42",icon:"pay-circle"}),r["default"].createElement(n,{title:"\u6b65\u9aa43",status:"error",icon:"pay-circle"}),r["default"].createElement(n,{title:"\u6b65\u9aa44",icon:"pay-circle"}))))}}},927:function(n,a,s){n.exports={basic:s(789),icons:s(790)}},1175:function(n,a){},1282:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}function p(n,a,s){return a in n?Object.defineProperty(n,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):n[a]=s,n}function e(n,a){var s={};for(var t in n)a.indexOf(t)>=0||Object.prototype.hasOwnProperty.call(n,t)&&(s[t]=n[t]);return s}function c(n){return"string"==typeof n}function o(n){var a,s,t=n.className,o=n.prefixCls,u=n.style,r=n.tailWidth,d=n.status,f=void 0===d?"wait":d,m=n.iconPrefix,g=n.icon,v=n.wrapperStyle,y=n.adjustMarginRight,h=n.stepLast,b=n.stepNumber,S=n.description,E=n.title,P=e(n,["className","prefixCls","style","tailWidth","status","iconPrefix","icon","wrapperStyle","adjustMarginRight","stepLast","stepNumber","description","title"]),x=(0,k["default"])((a={},p(a,o+"-icon",!0),p(a,m+"icon",!0),p(a,m+"icon-"+g,g&&c(g)),p(a,m+"icon-check",!g&&"finish"===f),p(a,m+"icon-cross",!g&&"error"===f),a)),O=void 0;O=g&&!c(g)?i["default"].createElement("span",{className:o+"-icon"},g):g||"finish"===f||"error"===f?i["default"].createElement("span",{className:x}):i["default"].createElement("span",{className:o+"-icon"},b);var N=(0,k["default"])((s={},p(s,o+"-item",!0),p(s,o+"-item-last",h),p(s,o+"-status-"+f,!0),p(s,o+"-custom",g),p(s,t,!!t),s));return i["default"].createElement("div",l({},P,{className:N,style:l({width:r,marginRight:y},u)}),h?"":i["default"].createElement("div",{className:o+"-tail"},i["default"].createElement("i",null)),i["default"].createElement("div",{className:o+"-step"
},i["default"].createElement("div",{className:o+"-head",style:{background:v.background||v.backgroundColor}},i["default"].createElement("div",{className:o+"-head-inner"},O)),i["default"].createElement("div",{className:o+"-main"},i["default"].createElement("div",{className:o+"-title",style:{background:v.background||v.backgroundColor}},E),S?i["default"].createElement("div",{className:o+"-description"},S):"")))}var l=Object.assign||function(n){for(var a=1;a<arguments.length;a++){var s=arguments[a];for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&(n[t]=s[t])}return n},u=s(1),i=t(u),r=s(3),k=t(r);o.propTypes={className:u.PropTypes.string,prefixCls:u.PropTypes.string,style:u.PropTypes.object,wrapperStyle:u.PropTypes.object,tailWidth:u.PropTypes.oneOfType([u.PropTypes.number,u.PropTypes.string]),status:u.PropTypes.string,iconPrefix:u.PropTypes.string,icon:u.PropTypes.node,adjustMarginRight:u.PropTypes.oneOfType([u.PropTypes.number,u.PropTypes.string]),stepLast:u.PropTypes.bool,stepNumber:u.PropTypes.string,description:u.PropTypes.any,title:u.PropTypes.any},n.exports=o},1283:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}function p(n,a){for(var s=Object.getOwnPropertyNames(a),t=0;t<s.length;t++){var p=s[t],e=Object.getOwnPropertyDescriptor(a,p);e&&e.configurable&&void 0===n[p]&&Object.defineProperty(n,p,e)}return n}function e(n,a,s){return a in n?Object.defineProperty(n,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):n[a]=s,n}function c(n,a){var s={};for(var t in n)a.indexOf(t)>=0||Object.prototype.hasOwnProperty.call(n,t)&&(s[t]=n[t]);return s}function o(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function l(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}function u(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):p(n,a))}Object.defineProperty(a,"__esModule",{value:!0});var i=Object.assign||function(n){for(var a=1;a<arguments.length;a++){var s=arguments[a];for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&(n[t]=s[t])}return n},r=s(1),k=t(r),d=s(2),f=t(d),m=s(3),g=t(m),v=function(n){function a(s){o(this,a);var t=l(this,n.call(this,s));return t.culcLastStepOffsetWidth=function(){var n=f["default"].findDOMNode(t);n.children.length>0&&(t.culcTimeout=setTimeout(function(){var a=n.lastChild.offsetWidth+1;t.state.lastStepOffsetWidth!==a&&t.setState({lastStepOffsetWidth:a})}))},t.state={lastStepOffsetWidth:0},t}return u(a,n),a.prototype.componentDidMount=function(){this.culcLastStepOffsetWidth()},a.prototype.componentDidUpdate=function(){this.culcLastStepOffsetWidth()},a.prototype.componentWillUnmount=function(){this.culcTimeout&&clearTimeout(this.culcTimeout)},a.prototype.render=function(){var n,a=this,s=this.props,t=s.prefixCls,p=s.style,o=void 0===p?{}:p,l=s.className,u=s.children,r=s.direction,d=s.labelPlacement,f=s.iconPrefix,m=s.status,v=s.size,y=s.current,h=c(s,["prefixCls","style","className","children","direction","labelPlacement","iconPrefix","status","size","current"]),b=u.length-1,S=this.state.lastStepOffsetWidth>0,E=(0,g["default"])((n={},e(n,t,!0),e(n,t+"-"+v,v),e(n,t+"-"+r,!0),e(n,t+"-label-"+d,"horizontal"===r),e(n,t+"-hidden",!S),e(n,l,l),n));return k["default"].createElement("div",i({className:E,style:o},h),k["default"].Children.map(u,function(n,p){var e="vertical"!==r&&p!==b&&S?100/b+"%":null,c="vertical"===r||p===b?null:-(a.state.lastStepOffsetWidth/b+1),l={stepNumber:(p+1).toString(),stepLast:p===b,tailWidth:e,adjustMarginRight:c,prefixCls:t,iconPrefix:f,wrapperStyle:o};return"error"===m&&p===y-1&&(l.className=s.prefixCls+"-next-error"),n.props.status||(p===y?l.status=m:p<y?l.status="finish":l.status="wait"),k["default"].cloneElement(n,l)},this))},a}(k["default"].Component);a["default"]=v,v.propTypes={prefixCls:r.PropTypes.string,iconPrefix:r.PropTypes.string,direction:r.PropTypes.string,labelPlacement:r.PropTypes.string,children:r.PropTypes.any,status:r.PropTypes.string,size:r.PropTypes.string},v.defaultProps={prefixCls:"rc-steps",iconPrefix:"rc",direction:"horizontal",labelPlacement:"horizontal",current:0,status:"process",size:""},n.exports=a["default"]},1284:function(n,a,s){"use strict";var t=s(1283);t.Step=s(1282),n.exports=t}});