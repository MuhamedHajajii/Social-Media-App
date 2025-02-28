
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-TQM4NSAK.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TQM4NSAK.js"
    ],
    "route": "/signin"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TQM4NSAK.js"
    ],
    "route": "/signup"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-O2PHUHYH.js"
    ],
    "route": "/timeline"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-O2PHUHYH.js"
    ],
    "route": "/post-details/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ZV55RAXD.js"
    ],
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 7829, hash: 'a155b508ff4b50d127525769a478defda4992355f39b06e5e87ea1272ae2a89b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1291, hash: '2be7b074b0cc513568256542afe24e5c9c2de836cc96ece87fc59831ca2ff711', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'signin/index.html': {size: 19904, hash: 'ca125170b26cf3cd13ba4a915559d6fdb9970b81e164bd39a7b160c45398a3a3', text: () => import('./assets-chunks/signin_index_html.mjs').then(m => m.default)},
    'signup/index.html': {size: 19904, hash: 'ca125170b26cf3cd13ba4a915559d6fdb9970b81e164bd39a7b160c45398a3a3', text: () => import('./assets-chunks/signup_index_html.mjs').then(m => m.default)},
    'index.html': {size: 19904, hash: 'ca125170b26cf3cd13ba4a915559d6fdb9970b81e164bd39a7b160c45398a3a3', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'timeline/index.html': {size: 44031, hash: '630f6f65a33b2d2cbfd03dd3b14051df0464a56b1fe667bbe32a99075fef66f7', text: () => import('./assets-chunks/timeline_index_html.mjs').then(m => m.default)},
    'styles-YD6XFX7T.css': {size: 171463, hash: 'JntAPIDQc/E', text: () => import('./assets-chunks/styles-YD6XFX7T_css.mjs').then(m => m.default)}
  },
};
