import { Component } from 'solid-js';
import { createHtmlBook, css } from '@bookbox/preset-web';

import docsData from '../../../docs/docs.json';
import { Bookbox } from '../../components';

import mermaid from 'mermaid';
mermaid.initialize({ startOnLoad: true });

css.math();
css.code()

const bookData = createHtmlBook({
    schema: docsData,
    externalBuilder: {
        mermaid: {
            local:
                ({ key = '' }) =>
                ({ store }) => {
                    const rawChildren = store.elementsByKeys[key];
                    const text = rawChildren.children.join('');
                    return `<div class="mermaid">${text}</div>`;
                },
        },
    },
    resourceOptions: {
        prefix: '/docs',
    },
});

export const Docs: Component = () => {
    return <Bookbox bookData={bookData} />;
};

export default Docs;
