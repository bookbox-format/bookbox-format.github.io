import{i as m,c,t as p}from"./index.2b56531b.js";import{c as b,m as k,g as d,a as h,B as g}from"./Bookbox.da00e604.js";const $=p('<div class="quick-start"></div>');b();k();const f=o=>{const{title:i,book:r,header:a,code:e,separator:u,math:n,link:t,list:l,item:s}=o;return r.root`
${i`Quick start`}


${a.level(2)`Install`}
${e`
npm i @bookbox/preset-web
`}


${a.level(2)`Usage`}
Step 1: init command


${e.lang("typescript")`
import { css, browserInit } from '@bookbox/preset-web';

browserInit();

// only if you use code blocks
css.code();

// only if you use mathematical formulas
css.math();
`}


Step 2: create book


${e.lang("typescript")`
import { FBook, getBookSchema } from '@bookbox/preset-web';

export const book: FBook = _ => _.book.root\`
\${_.title\`exampleBook\`}

Lorem ipsum dolor sit amet, consectetur adipiscing elit.

Fusce urna velit, imperdiet ac diam a, sollicitudin gravida tellus.
In hac habitasse platea dictumst. Vestibulum tempus arcu sed molestie volutpat.
Praesent ante purus, suscipit eget nunc non, rutrum ullamcorper nulla.


Aliquam quis luctus quam, in malesuada purus.
Nullam venenatis leo at iaculis finibus.
Sed feugiat nibh felis, at maximus nibh pellentesque in.
Aenean nunc massa, aliquet id accumsan non, pharetra at magna.
Cras luctus velit et lorem fringilla mattis.
Suspendisse tristique aliquam ligula a congue.
Nullam accumsan orci auctor sapien venenatis, eu interdum eros mattis.


\${_.separator}

\${_.math\`E = mc^2\`}

\${_.code.lang('typescript')\`
const tools = [];
tools.push('book-box');
\`}
\`;

const { schema } = getBookSchema({ book });
`}


Step 3: render html book in target element


${e.lang("typescript")`
import { render } from '@bookbox/preset-web';

render({
  element: document.body,
  bookData: createHtmlBook({ schema })
});
`}

${a.level(2)`Result`}

${i`exampleBook`}

Lorem ipsum dolor sit amet, consectetur adipiscing elit.

Fusce urna velit, imperdiet ac diam a, sollicitudin gravida tellus.
In hac habitasse platea dictumst. Vestibulum tempus arcu sed molestie volutpat.
Praesent ante purus, suscipit eget nunc non, rutrum ullamcorper nulla.


Aliquam quis luctus quam, in malesuada purus.
Nullam venenatis leo at iaculis finibus.
Sed feugiat nibh felis, at maximus nibh pellentesque in.
Aenean nunc massa, aliquet id accumsan non, pharetra at magna.
Cras luctus velit et lorem fringilla mattis.
Suspendisse tristique aliquam ligula a congue.
Nullam accumsan orci auctor sapien venenatis, eu interdum eros mattis.


${u}

${n`E = mc^2`}

${e.lang("typescript")`
const tools = [];
tools.push('book-box');
`}


${a.level(2)`Documentation`}
${t.href("?path=docs")`Full documentation`}


Package docs:
${l`
${s`${t.href("https://github.com/bookbox-format/bookbox/tree/master/packages/core")`@bookbox/core`}`}
${s`${t.href("https://github.com/bookbox-format/bookbox/tree/master/packages/preset-web")`@bookbox/preset-web`}`}
${s`${t.href("https://github.com/bookbox-format/bookbox/tree/master/packages/view-html")`@bookbox/view-html`}`}
${s`${t.href("https://github.com/bookbox-format/bookbox/tree/master/packages/generator-js")`@bookbox/generator-js`}`}
`}
`},{schema:x}=d({book:f}),v=h({schema:x}),q={media:!1,viewTumbler:!1},B=()=>(()=>{const o=$.cloneNode(!0);return m(o,c(g,{bookData:v,settingsOptions:q})),o})();export{B as QuickStart,B as default};
