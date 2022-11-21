import { FBook, getBookSchema, css, createHtmlBook, RenderOptions } from '@bookbox/preset-web';
import type { Component } from 'solid-js';
import { Bookbox } from '../../components';

import './QuickStart.css';

css.code();
css.math();

const text: FBook = api => {
    const { title, book, header, code, separator, math, link, list, item } = api;

    return book.root`
${title`Quick start`}


${header.level(2)`Install`}
${code`
npm i @bookbox/preset-web
`}


${header.level(2)`Usage`}
Step 1: init command


${code.lang('typescript')`
import { css, browserInit } from '@bookbox/preset-web';

browserInit();

// only if you use code blocks
css.code();

// only if you use mathematical formulas
css.math();
`}


Step 2: create book


${code.lang('typescript')`
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


${code.lang('typescript')`
import { render } from '@bookbox/preset-web';

render({
  element: document.body,
  bookData: createHtmlBook({ schema })
});
`}

${header.level(2)`Result`}

${title`exampleBook`}

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


${separator}

${math`E = mc^2`}

${code.lang('typescript')`
const tools = [];
tools.push('book-box');
`}


${header.level(2)`Documentation`}
${link.href('?path=docs')`Full documentation`}


Package docs:
${list`
${item`${link.href('https://github.com/bookbox-format/bookbox/tree/master/packages/core')`@bookbox/core`}`}
${item`${link.href('https://github.com/bookbox-format/bookbox/tree/master/packages/preset-web')`@bookbox/preset-web`}`}
${item`${link.href('https://github.com/bookbox-format/bookbox/tree/master/packages/view-html')`@bookbox/view-html`}`}
${item`${link.href('https://github.com/bookbox-format/bookbox/tree/master/packages/generator-js')`@bookbox/generator-js`}`}
`}
`;
};

const { schema } = getBookSchema({ book: text });
const bookData = createHtmlBook({ schema });

const settingsOptions: RenderOptions['settingsOptions'] = {
    media: false,
    viewTumbler: false,
};

export const QuickStart: Component = () => {
    return <div class='quick-start'><Bookbox bookData={bookData} settingsOptions={settingsOptions} /></div>;
};

export default QuickStart;
