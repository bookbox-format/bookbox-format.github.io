import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
    esbuild: {
        charset: 'utf8',
    },
    plugins: [solidPlugin()],
    server: {
        port: 3000,
    },
    build: {
        target: 'esnext',
    },
    // assetsInclude: 'docs'
});
