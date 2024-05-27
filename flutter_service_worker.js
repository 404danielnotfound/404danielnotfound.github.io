'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "35bbc43e64540d3c801dee6442771c66",
"assets/AssetManifest.bin.json": "54ea86e03cda3621c58a982c33687fa9",
"assets/AssetManifest.json": "e6211da6591a9387724ba9653c608dca",
"assets/FontManifest.json": "fa8f3a05294c87840c0e4fa32017f70b",
"assets/fonts/MaterialIcons-Regular.otf": "70f8669833cd1f228aae82beae7f1bdc",
"assets/lib/assets/fonts/ChenYuluoyan.ttf": "46277c925406ad304fb7de66c0641ddc",
"assets/lib/assets/fonts/TaipeiSansRegular.ttf": "7cf11eedfd307ceae0e05fbd74fbde60",
"assets/lib/assets/pics/atm.png": "ebbb67b2f398759afcc0c11fdc04e83f",
"assets/lib/assets/pics/bank.png": "004eb4239d213d5f896ca2b028be4c7d",
"assets/lib/assets/pics/barcode.png": "7535abee39179308b3f32ae4be2a22f8",
"assets/lib/assets/pics/card.png": "a411e3ec11fb03778098d9abbb73f6cb",
"assets/lib/assets/pics/cashier.png": "42c9fe10156412cf9c04c5da3b08bc79",
"assets/lib/assets/pics/downloadIcon.png": "409930a4505af0ca590fb2517c481111",
"assets/lib/assets/pics/info.png": "108af03952a93bdee96ed0c0ac0d84ea",
"assets/lib/assets/pics/jkpay.png": "9b9db45afe28cbcf8853e49fec32ea3a",
"assets/lib/assets/pics/jkpay2.png": "2cdbd78db3d3cd4d0caec5a6fada6346",
"assets/lib/assets/pics/linepay.png": "9503db27924bc9e85a4b5f7ddd2dc8b7",
"assets/lib/assets/pics/phone.png": "457bd3ba8e856b521d15ef3f1aa6bd1c",
"assets/lib/assets/pics/round_arrow.png": "aef9bd821dc7aa3a6fde91be92ad42ae",
"assets/lib/assets/pics/store.png": "7d827cb6df92e73b38afe2d0c189fe23",
"assets/lib/assets/pics/storeIcon.png": "a3255873e57d2aee74f5d71b9d834961",
"assets/lib/assets/pics/wood_camera.png": "c4a96b33bb58364e42cf1169fd8a0998",
"assets/lib/assets/survey/surveyQuestion.json": "5f2711d61e2b4ac85bf2e34292b93990",
"assets/lib/features/06_preview_and_payment/view/01_preview_and_payment.dart": "d3f94bb1401085a55cf66445fd379e0a",
"assets/lib/features/06_preview_and_payment/view/01_preview_loading.dart": "d7be998cac61ce86ee7b64013d34759f",
"assets/lib/features/06_preview_and_payment/view/02_choose_payment.dart": "d672ae4b1277a71c50b5068385cce1a1",
"assets/lib/features/06_preview_and_payment/view/03_confirmContact.dart": "95d9276624a9f2b35827d73f0bb53746",
"assets/lib/features/06_preview_and_payment/view/04_processing_payment.dart": "842f64036a92b1740bfc2e319879e349",
"assets/lib/features/06_preview_and_payment/view/05_sotre_instruction.dart": "2d4588e8f4ad94ca70b8aee937a652e6",
"assets/lib/features/06_preview_and_payment/view/06_ATM_instruction.dart": "b86fb82e3822e2492ea3dc5699ec923d",
"assets/lib/features/06_preview_and_payment/view/07_payment_record.dart": "1181daba20fbd5e4cc7a52721344a4db",
"assets/NOTICES": "7a10cc51542979f55410435755cc0445",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fast_image_resizer/assets/lena.png": "af16d124a7d709df7d8e1cdda7ac6e5a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9e742a377d8a899eef379da5c56b4d3a",
"/": "9e742a377d8a899eef379da5c56b4d3a",
"main.dart.js": "0134a1d4d9a0c3cdd47d2e72dfd3c699",
"manifest.json": "6f8831e8849ec9403ccd37e7914e3fb4",
"version.json": "adcd24159c5ec8e67e4409675202aea6"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
