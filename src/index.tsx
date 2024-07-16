/* @refresh reload */
import { render } from 'solid-js/web';
import { injectSpeedInsights } from '@vercel/speed-insights';

injectSpeedInsights();

import App from './App';

import './index.css';

render(() => <App />, document.getElementById('root')!);
