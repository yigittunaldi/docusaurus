"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[72899],{52605:(e,n,t)=>{t.d(n,{Z:()=>d});var s=t(24246),i=t(27378),r=t(80474),o=t(3620);const l={apiTable:"apiTable_e8hp"};function a({name:e,children:n},t){const l=function(e){let n=e;for(;(0,i.isValidElement)(n);)[n]=i.Children.toArray(n.props.children);if("string"!=typeof n)throw new Error(`Could not extract APITable row name from JSX tree:\n${JSON.stringify(e,null,2)}`);return n}(n),a=e?`${e}-${l}`:l,c=`#${a}`,d=(0,o.k6)();return(0,r.Z)().collectAnchor(a),(0,s.jsx)("tr",{id:a,tabIndex:0,ref:d.location.hash===c?t:void 0,onClick:e=>{"A"===e.target.tagName.toUpperCase()||d.push(c)},onKeyDown:e=>{"Enter"===e.key&&d.push(c)},children:n.props.children})}const c=i.forwardRef(a);function d({children:e,name:n}){if("table"!==e.type)throw new Error("Bad usage of APITable component.\nIt is probably that your Markdown table is malformed.\nMake sure to double-check you have the appropriate number of columns for each table row.");const[t,r]=i.Children.toArray(e.props.children),o=(0,i.useRef)(null);(0,i.useEffect)((()=>{var e;null===(e=o.current)||void 0===e||e.focus()}),[o]);const a=i.Children.map(r.props.children,(e=>(0,s.jsx)(c,{name:n,ref:o,children:e})));return(0,s.jsxs)("table",{className:l.apiTable,children:[t,(0,s.jsx)("tbody",{children:a})]})}},18090:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var s=t(24246),i=t(71670),r=t(52605);const o={slug:"/api/misc/@docusaurus/eslint-plugin/no-html-links"},l="no-html-links",a={id:"api/misc/eslint-plugin/no-html-links",title:"no-html-links",description:"Ensure that the Docusaurus ` component is used instead of ` tags.",source:"@site/docs/api/misc/eslint-plugin/no-html-links.mdx",sourceDirName:"api/misc/eslint-plugin",slug:"/api/misc/@docusaurus/eslint-plugin/no-html-links",permalink:"/docs/api/misc/@docusaurus/eslint-plugin/no-html-links",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/api/misc/eslint-plugin/no-html-links.mdx",tags:[],version:"current",lastUpdatedBy:"ozaki",lastUpdatedAt:1717169528e3,frontMatter:{slug:"/api/misc/@docusaurus/eslint-plugin/no-html-links"},sidebar:"api",previous:{title:"\ud83d\udce6 eslint-plugin",permalink:"/docs/api/misc/@docusaurus/eslint-plugin"},next:{title:"no-untranslated-text",permalink:"/docs/api/misc/@docusaurus/eslint-plugin/no-untranslated-text"}},c={},d=[{value:"Rule Details",id:"details",level:2},{value:"Rule Configuration",id:"configuration",level:2}];function u(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"no-html-links",children:"no-html-links"}),"\n","\n",(0,s.jsxs)(n.p,{children:["Ensure that the Docusaurus ",(0,s.jsx)(n.a,{href:"/docs/docusaurus-core#link",children:(0,s.jsx)(n.code,{children:"<Link>"})})," component is used instead of ",(0,s.jsx)(n.code,{children:"<a>"})," tags."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"<Link>"})," component has prefetching and preloading built-in. It also does build-time broken link detection, and helps Docusaurus understand your site's structure better."]}),"\n",(0,s.jsx)(n.h2,{id:"details",children:"Rule Details"}),"\n",(0,s.jsxs)(n.p,{children:["Examples of ",(0,s.jsx)(n.strong,{children:"incorrect"})," code for this rule:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<a href="/page">go to page!</a>\n\n<a href="https://twitter.com/docusaurus" target="_blank">Twitter</a>\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Examples of ",(0,s.jsx)(n.strong,{children:"correct"})," code for this rule:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'import Link from \'@docusaurus/Link\'\n\n<Link to="/page">go to page!</Link>\n\n<Link to="https://twitter.com/docusaurus">Twitter</Link>\n'})}),"\n",(0,s.jsx)(n.h2,{id:"configuration",children:"Rule Configuration"}),"\n",(0,s.jsx)(n.p,{children:"Accepted fields:"}),"\n",(0,s.jsx)(r.Z,{children:(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Option"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Default"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"ignoreFullyResolved"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"boolean"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"false"})}),(0,s.jsxs)(n.td,{children:["Set to true will not report any ",(0,s.jsx)(n.code,{children:"<a>"})," tags with absolute URLs including a protocol."]})]})})]})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},71670:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>o});var s=t(27378);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);