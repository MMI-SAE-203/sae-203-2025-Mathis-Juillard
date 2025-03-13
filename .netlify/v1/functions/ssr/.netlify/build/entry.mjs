import { renderers } from './renderers.mjs';
import { a as actions } from './chunks/_noop-actions_CfKMStZn.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_CPXu8sPH.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/activite/_id_.astro.mjs');
const _page2 = () => import('./pages/activite.astro.mjs');
const _page3 = () => import('./pages/apropos.astro.mjs');
const _page4 = () => import('./pages/contact.astro.mjs');
const _page5 = () => import('./pages/films/_id_.astro.mjs');
const _page6 = () => import('./pages/films.astro.mjs');
const _page7 = () => import('./pages/infopratique.astro.mjs');
const _page8 = () => import('./pages/invite/_id_.astro.mjs');
const _page9 = () => import('./pages/invite.astro.mjs');
const _page10 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/activite/[id].astro", _page1],
    ["src/pages/activite/index.astro", _page2],
    ["src/pages/apropos.astro", _page3],
    ["src/pages/contact.astro", _page4],
    ["src/pages/films/[id].astro", _page5],
    ["src/pages/films/index.astro", _page6],
    ["src/pages/infopratique.astro", _page7],
    ["src/pages/invite/[id].astro", _page8],
    ["src/pages/invite/index.astro", _page9],
    ["src/pages/index.astro", _page10]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "01da7b23-fe13-4c1c-bf0f-d3e669bff7df"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
