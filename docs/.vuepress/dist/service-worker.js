/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "264a2a1a0fe9bec67653a64d97e9da17"
  },
  {
    "url": "assets/css/0.styles.c8d293c0.css",
    "revision": "a72b04857665facbebe38df0fc828d32"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.9e79f9ac.js",
    "revision": "e1306857a88e6daf97e616e6eefe4e3c"
  },
  {
    "url": "assets/js/11.f08484d9.js",
    "revision": "4d892260427fb570df29decbd8118754"
  },
  {
    "url": "assets/js/12.41be5e07.js",
    "revision": "eaa78657ca4ebf80d5f7f2a204f4599d"
  },
  {
    "url": "assets/js/13.4f3d6cf7.js",
    "revision": "5332fdddee81be828376af133a5691c6"
  },
  {
    "url": "assets/js/14.577d366a.js",
    "revision": "fe9234dd9d5f9faff8c7e6f80969be86"
  },
  {
    "url": "assets/js/15.5056ce76.js",
    "revision": "f0af5ea2d6d9af31561566939f78bf70"
  },
  {
    "url": "assets/js/16.cce2e920.js",
    "revision": "81f017fec7bb5087c05aae9d728dc507"
  },
  {
    "url": "assets/js/17.14ac9ea0.js",
    "revision": "e7327e43bc8951c64c676465a367670c"
  },
  {
    "url": "assets/js/18.e880192e.js",
    "revision": "a90559ac0f926a9033e57e14ac11e9c8"
  },
  {
    "url": "assets/js/19.468e4268.js",
    "revision": "3fa1c55b846f0b308e6afb66f5e8a1f1"
  },
  {
    "url": "assets/js/2.33099e9c.js",
    "revision": "53993e1931f71739efd95bd2a5de1c26"
  },
  {
    "url": "assets/js/20.be6a2133.js",
    "revision": "a06bf4341a25432731760b9572b3fb27"
  },
  {
    "url": "assets/js/21.fb25679c.js",
    "revision": "275bdd0daff001139eddd661e8dbca70"
  },
  {
    "url": "assets/js/22.43683ebb.js",
    "revision": "2302b99fab518c8494ee1bf16c600097"
  },
  {
    "url": "assets/js/23.04be33a2.js",
    "revision": "2a641dc670039209cce5323aada08c4e"
  },
  {
    "url": "assets/js/24.261b907f.js",
    "revision": "7685a7c9c8babcd7a7d9739e92978670"
  },
  {
    "url": "assets/js/25.6b323d9d.js",
    "revision": "cde2bc96486001006dd5903b3d5eb450"
  },
  {
    "url": "assets/js/26.d561bde4.js",
    "revision": "a56eaed9d87638facd56c213718fb3ed"
  },
  {
    "url": "assets/js/27.d8312cff.js",
    "revision": "a40fe47552fa488a40a8cdf6ac6714f9"
  },
  {
    "url": "assets/js/28.7537a869.js",
    "revision": "a0a68c9a796f25d44645de0c52a95e73"
  },
  {
    "url": "assets/js/3.2d26778c.js",
    "revision": "481b9202399ee80d21a6b418df9d9398"
  },
  {
    "url": "assets/js/4.679eb384.js",
    "revision": "5fde21c63a1f292d18f1722199021ebd"
  },
  {
    "url": "assets/js/5.59c54c7f.js",
    "revision": "7ccf13529340824f445c9f261b7a83d4"
  },
  {
    "url": "assets/js/6.c337a6a1.js",
    "revision": "c9c2c0ccebba24fa87648ef62497a4ec"
  },
  {
    "url": "assets/js/7.7b8c6c0f.js",
    "revision": "456628b232d1ecd5b169b46b1c5967f7"
  },
  {
    "url": "assets/js/8.b6b4dfe0.js",
    "revision": "97a724ff8847c3746ba4afab51e5ffe0"
  },
  {
    "url": "assets/js/9.8a5dc70d.js",
    "revision": "d82dca1f045076321037eba46eedbbc4"
  },
  {
    "url": "assets/js/app.e0c68255.js",
    "revision": "2be6ca2b9a7d13cb45b1d91d234555f4"
  },
  {
    "url": "blogs/cesium/index.html",
    "revision": "ecadd1b1a86e159310749c42e6cc1be9"
  },
  {
    "url": "blogs/leaflet/index.html",
    "revision": "4d80bb576f48ab5edf0127ee79f838c1"
  },
  {
    "url": "blogs/openlayers/00-Overview.html",
    "revision": "3c770ca6828602f74a0a8fd94f5f5120"
  },
  {
    "url": "blogs/openlayers/01-Quick Start.html",
    "revision": "cbb56ebeb5c524e6e09d40bdf70de54e"
  },
  {
    "url": "blogs/openlayers/02-Get the Code.html",
    "revision": "793100bcd731bd949ad057485c6af86a"
  },
  {
    "url": "blogs/openlayers/03-Map.html",
    "revision": "c997f80cbee8c3d7a38e7a971eab8b56"
  },
  {
    "url": "blogs/openlayers/04-View.html",
    "revision": "85ba3e318f80a10475a411bf4d6d78f1"
  },
  {
    "url": "blogs/openlayers/05-Layers.html",
    "revision": "845cc78a6508001b307bd476c269c467"
  },
  {
    "url": "blogs/openlayers/06-Controls.html",
    "revision": "698977342cf5a1d4ed9e4878d940eb94"
  },
  {
    "url": "blogs/openlayers/07-Interactions.html",
    "revision": "45ee1695f9ed7151d31d2b978eb5b4e6"
  },
  {
    "url": "blogs/openlayers/08-WMSCapabilities.html",
    "revision": "5638cb66f42c496ef3941178c6fc45c8"
  },
  {
    "url": "blogs/openlayers/09-Projections.html",
    "revision": "fdee806f555ad7c5936988e24baf78ab"
  },
  {
    "url": "blogs/openlayers/10-Overlay.html",
    "revision": "3d01d3f02eba61c58b47b310534f312d"
  },
  {
    "url": "blogs/openlayers/11-Format.html",
    "revision": "288d8d0d0cabd4d2d2d5221d1440a3f3"
  },
  {
    "url": "blogs/openlayers/12-Geom.html",
    "revision": "f789499f9b5f2e176241c54b98125228"
  },
  {
    "url": "blogs/react/a.html",
    "revision": "b53a06cc108baa8521eb31e143e86870"
  },
  {
    "url": "blogs/react/b.html",
    "revision": "75336d7f473dd36651689f75b4ea149e"
  },
  {
    "url": "blogs/react/index.html",
    "revision": "ddb955ce39ba15cd55e2125121d8aaaa"
  },
  {
    "url": "guide/index.html",
    "revision": "96a75777113e5940a9b2b9b304582769"
  },
  {
    "url": "imgs/bg.jpg",
    "revision": "5eb86270afa7a5ec6c2cb3c8140ffc65"
  },
  {
    "url": "imgs/logo.png",
    "revision": "c792803a7063df66430160524e719359"
  },
  {
    "url": "imgs/ol.jpg",
    "revision": "a0f8769465cc87d40b065cb953d242a5"
  },
  {
    "url": "index.html",
    "revision": "9adfc291dc45b6b6a93a3564bb8e3170"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
