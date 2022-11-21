import type { Component } from 'solid-js';

import { CompareTable } from './components/CompareTable/CompareTable';
import { Example } from './components/Example/Example';

import pipeline from './pipeline.svg';

import './Home.css';
import { A } from '../../router/Router';

export const Home: Component = () => {
    return (
        <div class='home'>
            <div class='logo'>
                <div>
                    <img src='/static/logo.svg' />
                </div>
            </div>
            <h1>Bookbox</h1>
            <h2>book tool for internet</h2>

            <div class='quick'>
                <A href='?path=quick-start'>Quick start</A>
            </div>

            <article class='pipeline'>
                <img src={pipeline} width='100%' />
            </article>

            <article>
                <Example />
            </article>
            <article class='compare'>
                <CompareTable />
            </article>
        </div>
    );
};

export default Home;
