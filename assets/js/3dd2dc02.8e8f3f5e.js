"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2176],{77753:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>r});var o=t(24246),s=t(71670);const i={description:"How the Docusaurus client is structured"},l="Client architecture",c={id:"advanced/client",title:"Client architecture",description:"How the Docusaurus client is structured",source:"@site/docs/advanced/client.mdx",sourceDirName:"advanced",slug:"/advanced/client",permalink:"/docs/advanced/client",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/advanced/client.mdx",tags:[],version:"current",lastUpdatedBy:"ozaki",lastUpdatedAt:1717169528e3,frontMatter:{description:"How the Docusaurus client is structured"},sidebar:"docs",previous:{title:"Static site generation",permalink:"/docs/advanced/ssg"},next:{title:"Upgrading Docusaurus",permalink:"/docs/migration"}},a={},r=[{value:"Theme aliases",id:"theme-aliases",level:2},{value:"Client modules",id:"client-modules",level:2},{value:"Client module lifecycles",id:"client-module-lifecycles",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"client-architecture",children:"Client architecture"}),"\n",(0,o.jsx)(n.h2,{id:"theme-aliases",children:"Theme aliases"}),"\n",(0,o.jsxs)(n.p,{children:["A theme works by exporting a set of components, e.g. ",(0,o.jsx)(n.code,{children:"Navbar"}),", ",(0,o.jsx)(n.code,{children:"Layout"}),", ",(0,o.jsx)(n.code,{children:"Footer"}),", to render the data passed down from plugins. Docusaurus and users use these components by importing them using the ",(0,o.jsx)(n.code,{children:"@theme"})," webpack alias:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"import Navbar from '@theme/Navbar';\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The alias ",(0,o.jsx)(n.code,{children:"@theme"})," can refer to a few directories, in the following priority:"]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["A user's ",(0,o.jsx)(n.code,{children:"website/src/theme"})," directory, which is a special directory that has the higher precedence."]}),"\n",(0,o.jsxs)(n.li,{children:["A Docusaurus theme package's ",(0,o.jsx)(n.code,{children:"theme"})," directory."]}),"\n",(0,o.jsx)(n.li,{children:"Fallback components provided by Docusaurus core (usually not needed)."}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["This is called a ",(0,o.jsx)(n.em,{children:"layered architecture"}),": a higher-priority layer providing the component would shadow a lower-priority layer, making swizzling possible. Given the following structure:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"website\n\u251c\u2500\u2500 node_modules\n\u2502   \u2514\u2500\u2500 @docusaurus/theme-classic\n\u2502       \u2514\u2500\u2500 theme\n\u2502           \u2514\u2500\u2500 Navbar.js\n\u2514\u2500\u2500 src\n    \u2514\u2500\u2500 theme\n        \u2514\u2500\u2500 Navbar.js\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"website/src/theme/Navbar.js"})," takes precedence whenever ",(0,o.jsx)(n.code,{children:"@theme/Navbar"})," is imported. This behavior is called component swizzling. If you are familiar with Objective C where a function's implementation can be swapped during runtime, it's the exact same concept here with changing the target ",(0,o.jsx)(n.code,{children:"@theme/Navbar"})," is pointing to!"]}),"\n",(0,o.jsxs)(n.p,{children:['We already talked about how the "userland theme" in ',(0,o.jsx)(n.code,{children:"src/theme"})," can re-use a theme component through the ",(0,o.jsx)(n.a,{href:"/docs/swizzling#wrapping",children:(0,o.jsx)(n.code,{children:"@theme-original"})})," alias. One theme package can also wrap a component from another theme, by importing the component from the initial theme, using the ",(0,o.jsx)(n.code,{children:"@theme-init"})," import."]}),"\n",(0,o.jsxs)(n.p,{children:["Here's an example of using this feature to enhance the default theme ",(0,o.jsx)(n.code,{children:"CodeBlock"})," component with a ",(0,o.jsx)(n.code,{children:"react-live"})," playground feature."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"import InitialCodeBlock from '@theme-init/CodeBlock';\nimport React from 'react';\n\nexport default function CodeBlock(props) {\n  return props.live ? (\n    <ReactLivePlayground {...props} />\n  ) : (\n    <InitialCodeBlock {...props} />\n  );\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Check the code of ",(0,o.jsx)(n.code,{children:"@docusaurus/theme-live-codeblock"})," for details."]}),"\n",(0,o.jsx)(n.admonition,{type:"warning",children:(0,o.jsxs)(n.p,{children:['Unless you want to publish a re-usable "theme enhancer" (like ',(0,o.jsx)(n.code,{children:"@docusaurus/theme-live-codeblock"}),"), you likely don't need ",(0,o.jsx)(n.code,{children:"@theme-init"}),"."]})}),"\n",(0,o.jsx)(n.p,{children:'It can be quite hard to wrap your mind around these aliases. Let\'s imagine the following case with a super convoluted setup with three themes/plugins and the site itself all trying to define the same component. Internally, Docusaurus loads these themes as a "stack".'}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:"+-------------------------------------------------+\n|        `website/src/theme/CodeBlock.js`         | <-- `@theme/CodeBlock` always points to the top\n+-------------------------------------------------+\n| `theme-live-codeblock/theme/CodeBlock/index.js` | <-- `@theme-original/CodeBlock` points to the topmost non-swizzled component\n+-------------------------------------------------+\n|  `plugin-awesome-codeblock/theme/CodeBlock.js`  |\n+-------------------------------------------------+\n|     `theme-classic/theme/CodeBlock/index.js`    | <-- `@theme-init/CodeBlock` always points to the bottom\n+-------------------------------------------------+\n"})}),"\n",(0,o.jsxs)(n.p,{children:['The components in this "stack" are pushed in the order of ',(0,o.jsx)(n.code,{children:"preset plugins > preset themes > plugins > themes > site"}),", so the swizzled component in ",(0,o.jsx)(n.code,{children:"website/src/theme"})," always comes out on top because it's loaded last."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"@theme/*"})," always points to the topmost component\u2014when ",(0,o.jsx)(n.code,{children:"CodeBlock"})," is swizzled, all other components requesting ",(0,o.jsx)(n.code,{children:"@theme/CodeBlock"})," receive the swizzled version."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"@theme-original/*"})," always points to the topmost non-swizzled component. That's why you can import ",(0,o.jsx)(n.code,{children:"@theme-original/CodeBlock"}),' in the swizzled component\u2014it points to the next one in the "component stack", a theme-provided one. Plugin authors should not try to use this because your component could be the topmost component and cause a self-import.']}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"@theme-init/*"})," always points to the bottommost component\u2014usually, this comes from the theme or plugin that first provides this component. Individual plugins / themes trying to enhance code block can safely use ",(0,o.jsx)(n.code,{children:"@theme-init/CodeBlock"})," to get its basic version. Site creators should generally not use this because you likely want to enhance the ",(0,o.jsx)(n.em,{children:"topmost"})," instead of the ",(0,o.jsx)(n.em,{children:"bottommost"})," component. It's also possible that the ",(0,o.jsx)(n.code,{children:"@theme-init/CodeBlock"})," alias does not exist at all\u2014Docusaurus only creates it when it points to a different one from ",(0,o.jsx)(n.code,{children:"@theme-original/CodeBlock"}),", i.e. when it's provided by more than one theme. We don't waste aliases!"]}),"\n",(0,o.jsx)(n.h2,{id:"client-modules",children:"Client modules"}),"\n",(0,o.jsxs)(n.p,{children:["Client modules are part of your site's bundle, just like theme components. However, they are usually side-effect-ful. Client modules are anything that can be ",(0,o.jsx)(n.code,{children:"import"}),"ed by Webpack\u2014CSS, JS, etc. JS scripts usually work on the global context, like registering event listeners, creating global variables..."]}),"\n",(0,o.jsx)(n.p,{children:"These modules are imported globally before React even renders the initial UI."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",metastring:'title="@docusaurus/core/App.tsx"',children:"// How it works under the hood\nimport '@generated/client-modules';\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Plugins and sites can both declare client modules, through ",(0,o.jsx)(n.a,{href:"/docs/api/plugin-methods/lifecycle-apis#getClientModules",children:(0,o.jsx)(n.code,{children:"getClientModules"})})," and ",(0,o.jsx)(n.a,{href:"/docs/api/docusaurus-config#clientModules",children:(0,o.jsx)(n.code,{children:"siteConfig.clientModules"})}),", respectively."]}),"\n",(0,o.jsxs)(n.p,{children:["Client modules are called during server-side rendering as well, so remember to check the ",(0,o.jsx)(n.a,{href:"/docs/advanced/ssg#escape-hatches",children:"execution environment"})," before accessing client-side globals."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",metastring:'title="mySiteGlobalJs.js"',children:"import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';\n\nif (ExecutionEnvironment.canUseDOM) {\n  // As soon as the site loads in the browser, register a global event listener\n  window.addEventListener('keydown', (e) => {\n    if (e.code === 'Period') {\n      location.assign(location.href.replace('.com', '.dev'));\n    }\n  });\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["CSS stylesheets imported as client modules are ",(0,o.jsx)(n.a,{href:"/docs/styling-layout#global-styles",children:"global"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-css",metastring:'title="mySiteGlobalCss.css"',children:"/* This stylesheet is global. */\n.globalSelector {\n  color: red;\n}\n"})}),"\n",(0,o.jsx)(n.h3,{id:"client-module-lifecycles",children:"Client module lifecycles"}),"\n",(0,o.jsxs)(n.p,{children:["Besides introducing side-effects, client modules can optionally export two lifecycle functions: ",(0,o.jsx)(n.code,{children:"onRouteUpdate"})," and ",(0,o.jsx)(n.code,{children:"onRouteDidUpdate"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Because Docusaurus builds a single-page application, ",(0,o.jsx)(n.code,{children:"script"})," tags will only be executed the first time the page loads, but will not re-execute on page transitions. These lifecycles are useful if you have some imperative JS logic that should execute every time a new page has loaded, e.g., to manipulate DOM elements, to send analytics data, etc."]}),"\n",(0,o.jsx)(n.p,{children:"For every route transition, there will be several important timings:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"The user clicks a link, which causes the router to change its current location."}),"\n",(0,o.jsx)(n.li,{children:"Docusaurus preloads the next route's assets, while keeping displaying the current page's content."}),"\n",(0,o.jsx)(n.li,{children:"The next route's assets have loaded."}),"\n",(0,o.jsx)(n.li,{children:"The new location's route component gets rendered to DOM."}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"onRouteUpdate"})," will be called at event (2), and ",(0,o.jsx)(n.code,{children:"onRouteDidUpdate"})," will be called at (4). They both receive the current location and the previous location (which can be ",(0,o.jsx)(n.code,{children:"null"}),", if this is the first screen)."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"onRouteUpdate"}),' can optionally return a "cleanup" callback, which will be called at (3). For example, if you want to display a progress bar, you can start a timeout in ',(0,o.jsx)(n.code,{children:"onRouteUpdate"}),", and clear the timeout in the callback. (The classic theme already provides an ",(0,o.jsx)(n.code,{children:"nprogress"})," integration this way.)"]}),"\n",(0,o.jsxs)(n.p,{children:["Note that the new page's DOM is only available during event (4). If you need to manipulate the new page's DOM, you'll likely want to use ",(0,o.jsx)(n.code,{children:"onRouteDidUpdate"}),", which will be fired as soon as the DOM on the new page has mounted."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",metastring:'title="myClientModule.js"',children:"export function onRouteDidUpdate({location, previousLocation}) {\n  // Don't execute if we are still on the same page; the lifecycle may be fired\n  // because the hash changes (e.g. when navigating between headings)\n  if (location.pathname !== previousLocation?.pathname) {\n    const title = document.getElementsByTagName('h1')[0];\n    if (title) {\n      title.innerText += '\u2764\ufe0f';\n    }\n  }\n}\n\nexport function onRouteUpdate({location, previousLocation}) {\n  if (location.pathname !== previousLocation?.pathname) {\n    const progressBarTimeout = window.setTimeout(() => {\n      nprogress.start();\n    }, delay);\n    return () => window.clearTimeout(progressBarTimeout);\n  }\n  return undefined;\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:"Or, if you are using TypeScript and you want to leverage contextual typing:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",metastring:'title="myClientModule.ts"',children:"import type {ClientModule} from '@docusaurus/types';\n\nconst module: ClientModule = {\n  onRouteUpdate({location, previousLocation}) {\n    // ...\n  },\n  onRouteDidUpdate({location, previousLocation}) {\n    // ...\n  },\n};\nexport default module;\n"})}),"\n",(0,o.jsx)(n.p,{children:"Both lifecycles will fire on first render, but they will not fire on server-side, so you can safely access browser globals in them."}),"\n",(0,o.jsx)(n.admonition,{title:"Prefer using React",type:"tip",children:(0,o.jsxs)(n.p,{children:["Client module lifecycles are purely imperative, and you can't use React hooks or access React contexts within them. If your operations are state-driven or involve complicated DOM manipulations, you should consider ",(0,o.jsx)(n.a,{href:"/docs/swizzling",children:"swizzling components"})," instead."]})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},71670:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>l});var o=t(27378);const s={},i=o.createContext(s);function l(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);