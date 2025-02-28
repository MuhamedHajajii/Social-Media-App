
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 0,
    "preload": [
      "chunk-FSOSMJUR.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-FSOSMJUR.js"
    ],
    "route": "/signin"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-FSOSMJUR.js"
    ],
    "route": "/signup"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-XAENJCS2.js"
    ],
    "route": "/timeline"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BY3HCOZA.js"
    ],
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 7396, hash: '71fd4c7651ab40aa171ae297193dcb69ae2540700aaffc8b6f67e5ae05072b4d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1240, hash: '4d269fb070d14a3b8f4190d9ee522389c2e087d6f32d4c51a7536ea0b5207d12', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-U3EB5NCI.css': {size: 166478, hash: 'Ue4HMWm/tHU', text: () => import('./assets-chunks/styles-U3EB5NCI_css.mjs').then(m => m.default)}
  },
};
