importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "wp-vue-ssr",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.36bc5c0752ceeb6319f4.js",
    "revision": "cb9a7c7b63d4b62d6848d18091ddf858"
  },
  {
    "url": "/_nuxt/layouts/default.48ae3045129827dfcfd0.js",
    "revision": "d9bd85576698950fa304f42b893c8555"
  },
  {
    "url": "/_nuxt/manifest.e3446026b85df5728593.js",
    "revision": "b732f89abe42ff32eabb122ed2bec276"
  },
  {
    "url": "/_nuxt/pages/index.ddafc635c7cbceb154f5.js",
    "revision": "32909429507f18e6f9be39e9b5239cc1"
  },
  {
    "url": "/_nuxt/pages/index/_slug.faf5ba2b56f06941005d.js",
    "revision": "924092d45f91fe2c3d461e87492a0684"
  },
  {
    "url": "/_nuxt/pages/index/index.027d168c2c209c00da1c.js",
    "revision": "e1fee0fb1a8157e7e654b30a63e22c23"
  },
  {
    "url": "/_nuxt/vendor.73f17c47ce32a5338e33.js",
    "revision": "da498f0c149ce5d9b3b43446953d7cb3"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

