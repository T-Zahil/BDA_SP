importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "wp-vue-ssr",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.49db93bd739a391f905f.js",
    "revision": "06c122096614a7b1f12608a8aa35b842"
  },
  {
    "url": "/_nuxt/layouts/default.48ae3045129827dfcfd0.js",
    "revision": "d9bd85576698950fa304f42b893c8555"
  },
  {
    "url": "/_nuxt/manifest.f5ae9ae98b3d46fc0ec7.js",
    "revision": "f8c91ac047d4f8bf37c095d9dbbe6f85"
  },
  {
    "url": "/_nuxt/pages/index.ec823bba3a8fc51f72ed.js",
    "revision": "9eb32147ecd5a80977f4e70763379d70"
  },
  {
    "url": "/_nuxt/pages/index/_slug.f76bfd9be0228c485c0c.js",
    "revision": "e1454310a809a14db9ac4582ef767a42"
  },
  {
    "url": "/_nuxt/pages/index/index.027d168c2c209c00da1c.js",
    "revision": "e1fee0fb1a8157e7e654b30a63e22c23"
  },
  {
    "url": "/_nuxt/vendor.64a6afe1a7be1d557eb5.js",
    "revision": "20a14ff86483fa5c67e78b1f1c3511fa"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

