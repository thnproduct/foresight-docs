"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[883],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),p=s(n),m=o,h=p["".concat(l,".").concat(m)]||p[m]||c[m]||r;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5382:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return c}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],u={title:"Optimize workflow duration",slug:"/configuration/optimize-workflow-duration",sidebar_position:1},l=void 0,s={unversionedId:"how-to/optimize-workflow-duration",id:"how-to/optimize-workflow-duration",title:"Optimize workflow duration",description:"Using Layers",source:"@site/docs/how-to/optimize-workflow-duration.mdx",sourceDirName:"how-to",slug:"/configuration/optimize-workflow-duration",permalink:"/configuration/optimize-workflow-duration",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Optimize workflow duration",slug:"/configuration/optimize-workflow-duration",sidebar_position:1},sidebar:"sidebar",previous:{title:"Examples",permalink:"/examples"},next:{title:"Monitor CI Costs",permalink:"/configuration/monitor-ci-costs"}},d={},c=[{value:"Using Layers",id:"using-layers",level:2},{value:"Step 1 - Deploy Your Function to AWS Lambda",id:"step-1---deploy-your-function-to-aws-lambda",level:3},{value:"Step 2 - Configure Your Function",id:"step-2---configure-your-function",level:3},{value:"Step 3: Configure Handler",id:"step-3-configure-handler",level:3},{value:"a. Auto wrap",id:"a-auto-wrap",level:4},{value:"b. Manual wrap",id:"b-manual-wrap",level:4},{value:"Step 4: Invoke Your Function",id:"step-4-invoke-your-function",level:3},{value:"Without Layers",id:"without-layers",level:2}],p={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"using-layers"},"Using Layers"),(0,r.kt)("p",null,"Integrating Frogate using AWS Lambda Layers is the recommended (and easier) way to get started with Frogate.\nDepending on whether or not you choose to use a custom runtime, you can integrate Frogate with no code changes\nat all or just by wrapping your handler function."),(0,r.kt)("h3",{id:"step-1---deploy-your-function-to-aws-lambda"},"Step 1 - Deploy Your Function to AWS Lambda"),(0,r.kt)("p",null,"Bundle all your Node.js Lambda function files and any additional required packages, and then upload it to the\nAWS Lambda console using the ",(0,r.kt)("strong",{parentName:"p"},"Upload a.zip file")," option for the code entry type.\nNote that Frogate dependencies are not expected to be in the artifact to be uploaded, as they\ncome with a layer that will be utilized at a later point."),(0,r.kt)("h3",{id:"step-2---configure-your-function"},"Step 2 - Configure Your Function"),(0,r.kt)("p",null,"Add Thundra's Node.js layer to your Lambda function using the ARN below. Note that the ARN contains a region and a\nversion parameter which you will need to set. Set the region value to your Lambda function's region and the version\nvalue to the layer version you want to use with your Lambda function."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"arn:aws:lambda:${region}:269863060030:layer:thundra-lambda-node-layer-minified:${version}\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Latest  ",(0,r.kt)("img",{parentName:"p",src:"https://img.shields.io/endpoint.svg?url=https://thundra-layer-nodejs-hbxafac868au.runkit.sh",alt:"Thundra Node Layer"})," "))),(0,r.kt)("p",null,"After the Thundra layer ARN has been added, you can continue using a custom runtime or continue without using a\ncustom runtime. Regardless of what you choose, make sure to also set the THUNDRA_APIKEY environment variable to\nthe API key you get from the Thundra console."),(0,r.kt)("h3",{id:"step-3-configure-handler"},"Step 3: Configure Handler"),(0,r.kt)("p",null,"You should only use one (either auto or manual) of the options below, not both of them!"),(0,r.kt)("h4",{id:"a-auto-wrap"},"a. Auto wrap"),(0,r.kt)("p",null,"Set the handler to ",(0,r.kt)("inlineCode",{parentName:"p"},"thundra_handler.wrapper")," and then set the ",(0,r.kt)("inlineCode",{parentName:"p"},"THUNDRA_AGENT_LAMBDA_HANDLER")," environment variable\nvalue to your original handler (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"index.handler"),")."),(0,r.kt)("h4",{id:"b-manual-wrap"},"b. Manual wrap"),(0,r.kt)("p",null,"You can wrap your Lambda handler to integrate Thundra as shown below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="index.js"',title:'"index.js"'},'const thundra = require("@thundra/core")();\n\nexports.handler = thundra((event, context,callback) => {\n    callback(null, "Hello Thundra!");\n});\n')),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"In the example above, the required @thundra/core package is already available in Thundra's Node.js layer, which we already added. Thus, you don't need to install the package and bundle it with your Lambda function."))),(0,r.kt)("h3",{id:"step-4-invoke-your-function"},"Step 4: Invoke Your Function"),(0,r.kt)("p",null,"Now you can try to invoke your Lambda function and see the details of your invocation in the Thundra console!"),(0,r.kt)("h2",{id:"without-layers"},"Without Layers"))}m.isMDXComponent=!0}}]);