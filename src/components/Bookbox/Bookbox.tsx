import { Component, onMount } from 'solid-js';
import { browserInit, render, core, HtmlToken, RenderOptions } from '@bookbox/preset-web';

browserInit();

export const Bookbox: Component<Omit<RenderOptions, 'element'>> = ({ bookData, settingsOptions, layoutOptions }) => {
    let docsRef: HTMLDivElement;

    onMount(() => {
        render({ element: docsRef, bookData, settingsOptions, layoutOptions });
    });

    return <div ref={docsRef!}></div>;
};

