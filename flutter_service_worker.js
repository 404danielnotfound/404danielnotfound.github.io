'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "2290babda371e52eeca2a2065a358783",
".git/config": "7b3697de5c4f2bcf86ec6f1533c9f5f3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "03f7ea4437630d11ddc900c4d6805891",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "20bc290ce81e5e2a60d03c5ffc71773a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7cb0c6cd08f7f17c4ece18b47bd60a76",
".git/logs/refs/heads/main": "7cb0c6cd08f7f17c4ece18b47bd60a76",
".git/logs/refs/remotes/origin/HEAD": "8e89c9ee5795a4deb38225bf1ddf480a",
".git/logs/refs/remotes/origin/main": "4746dda6ce26aaff6ed4a4aeb011fc52",
".git/objects/01/91fe3712208abf8190c7cbe3b191c0d370b7b0": "a2693c9a76e2c8429c028c7b8e8bf6c6",
".git/objects/07/8572ea7573ffab5fbc8693a8c94a9af5f62200": "a51b197e6552091f56c2ace023487fcc",
".git/objects/0f/42e8a7db19d3d85c93e1a76ee43dfad20ef0d0": "75c1673326c551bbc4e717a29fca3226",
".git/objects/12/f9e500c3ffd4388fa21605baf0ca3bb4c61e28": "9cba4bdf3a5e841e9f0ad823003c00f6",
".git/objects/13/3c7556fbe804a5376f63e49968a3e68e807d1b": "80f27f00f0501868091dcf3277e2bf60",
".git/objects/14/4153c8d9db41c9f358c6c4abd4d394ba4d8d8b": "78d8d8078f0ff13d766225a1d2bc81da",
".git/objects/1b/8b3faf759f2b6e51420d2cffcc471429a9371f": "d8defee40233dd0590423e6963f485cd",
".git/objects/2b/a36ce25374f69920870a188532292f86f37ade": "a5e7fc310335e0e65641aa3265fee3b4",
".git/objects/30/154e41a1cb1e195c5642ab35b2ab6ed13bfc71": "3d049aaa9ae044f1deaa0d4025dbe852",
".git/objects/37/c8f1b58604650b400ae90b50f93c927684ff9a": "99ce434c275c723c2cef58f7c6af1ff9",
".git/objects/46/99b00a816f256f806b8497ecc51eaf1ca84af9": "eb8b2734add67c11b5b0d8e70bb60221",
".git/objects/49/50fde5d55f68cb88029f4103db7e5b24bca8d0": "5ff0e63c086fc5a7c4103b21a224f0ca",
".git/objects/51/ba656b11c4c04c856eb9d7c3fcb1a25aff1a4e": "719870c96382b0c104fbe98afca39f90",
".git/objects/69/ed66ffe1ba7e87e1f91a3423e9f2026784f083": "6e027cbed0eab20f43a0e72efe26e96a",
".git/objects/6c/f5ec9e5f181dcf433acfe35918c795b0dd2ece": "6e0660eb8ba684cc03d6ce752cfcb773",
".git/objects/85/df5118018b0c6a74231009a4680b8e8f3e0218": "b4547249c7f371ace2d3e22fb22888c2",
".git/objects/8c/67ff780928e0783b9c2f6b777e42d38d98c87e": "2c7ec0492b5a4eceaa18768c88f58e87",
".git/objects/b4/427f661ab72a4a5de148b488d3b33ed1ef272f": "b6c720f82bb61838aab16accd162c809",
".git/objects/b5/e115624480702cfcce2015f3de7952b824370d": "41103e74f5472dd87ec641c14fa0b20b",
".git/objects/b9/6186e2bc69f2f56f61c825fb23214eaa6b97b7": "b8de780da83f8525f8e8260e62f77a60",
".git/objects/ba/21e1cd5d2c5bb495f3f3c5f97d9360f706c6b9": "9c0a82a2a6b214d01785aa35283b56c5",
".git/objects/bb/9bd9f71f331591b3205ea1ec99e358fa28bdc0": "08380391f16f56390ba0b50a081904f1",
".git/objects/c8/3670f75576df5fbfeb4e6cadad0315bfbab3ce": "e33d9d937f4ec84c6c27462788bd0066",
".git/objects/cd/e2e4663666fb3d4832dcf86f3655cc2d45cf79": "27eb70a8bcec1e46bf9a5043e41a7ca2",
".git/objects/d9/5dcab710ea70878d0eee5827b2de994eff790d": "8a48f49acffe88640d4a7e257a3e947c",
".git/objects/e7/3173b21bc2f940583e3ee4488ada80510fa8f7": "083243704bfd369ff2c7f649d7e1f884",
".git/objects/f7/32aa439585de50f929114c0980f5ca42172328": "a59f07089f178f116ff41722dfc985b4",
".git/objects/f7/cef33a9ca7299a216015dca153da1feb0cdae7": "22f635d804d9bb2162e3e7e2facfbfbd",
".git/objects/pack/pack-5119bab96932a260c7d6a98247d6a8fc06de4aa7.idx": "32ba805f5a5fab25009cc403f6c9bc30",
".git/objects/pack/pack-5119bab96932a260c7d6a98247d6a8fc06de4aa7.pack": "ccd19e1fbed776250c96f1c559ee778c",
".git/objects/pack/pack-5119bab96932a260c7d6a98247d6a8fc06de4aa7.rev": "5033b17c3518454064ee6fc72aa78e40",
".git/packed-refs": "b9714d1e75884c41230b86085cb7892e",
".git/refs/heads/main": "8c12f110a6a1c8fd773bd8e704afd055",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "8c12f110a6a1c8fd773bd8e704afd055",
"assets/AssetManifest.bin": "511ee6d4ecdf967b7e8c3d9c1906c0ec",
"assets/AssetManifest.bin.json": "ae9b09a834e123de23a8c15f5ab976a8",
"assets/AssetManifest.json": "74678f90bcc8552f0cf99c0407761114",
"assets/FontManifest.json": "0f4c187745cd003e4eb45be542f93423",
"assets/fonts/MaterialIcons-Regular.otf": "274f15bd4f0ded00ccf6b539533bbb30",
"assets/lib/assets/fonts/ChenYuluoyan.ttf": "46277c925406ad304fb7de66c0641ddc",
"assets/lib/assets/icon/instruction/bank.png": "116cec3961ba83682c1d8b4ad2da00fd",
"assets/lib/assets/icon/instruction/barcode.png": "193c8c208b8d0835d057edc8b0fd5bde",
"assets/lib/assets/icon/instruction/cashier.png": "d928e4ab9a09ab1db50102580d00bb5b",
"assets/lib/assets/icon/instruction/download.png": "c87fbb81e4c3e5e483ca795c770d61ee",
"assets/lib/assets/icon/instruction/info.png": "c4451256d004f163ae05024cb50f828b",
"assets/lib/assets/icon/instruction/phone.png": "2d77590a1e8fb9bad18904e9fa2d0aac",
"assets/lib/assets/icon/instruction/popUp.png": "cee78e1823acaf7b2a854b46363bd612",
"assets/lib/assets/icon/instruction/pressButton.png": "7f28d6c2dd23f8a11000ba10729f0577",
"assets/lib/assets/icon/instruction/store.png": "7ed630a2261ea15267e8b9da23fd4778",
"assets/lib/assets/icon/instruction/warning.png": "f9ce0f99c85a0989c0cc83e64bbb48b6",
"assets/lib/assets/icon/payment/atm.png": "5d3a8c613b6be6bbb4bb6e687e02e3d4",
"assets/lib/assets/icon/payment/card.png": "a411e3ec11fb03778098d9abbb73f6cb",
"assets/lib/assets/icon/payment/jkpay.png": "9b9db45afe28cbcf8853e49fec32ea3a",
"assets/lib/assets/icon/payment/jkpay2.png": "2cdbd78db3d3cd4d0caec5a6fada6346",
"assets/lib/assets/icon/payment/linepay.png": "9503db27924bc9e85a4b5f7ddd2dc8b7",
"assets/lib/assets/icon/payment/store.png": "789578e408ce8c538e027589880c5f0c",
"assets/lib/assets/icon/service/line.png": "37b0675d3f782dcca65bcee1d4d3e786",
"assets/lib/assets/icon/service/messenger.png": "0dec4abbc97e10b4ab4c99c6bdb45fe9",
"assets/lib/assets/icon/service/mobile.png": "db49d8ba3eeec30ae37982c1b647aa8c",
"assets/lib/assets/pics/checked.png": "8c87eb81e3961b45d2ffd1e4907dc2e7",
"assets/lib/assets/pics/round_arrow.png": "aef9bd821dc7aa3a6fde91be92ad42ae",
"assets/lib/assets/pics/wood_camera.png": "c4a96b33bb58364e42cf1169fd8a0998",
"assets/lib/assets/survey/surveyQuestion.json": "5f2711d61e2b4ac85bf2e34292b93990",
"assets/lib/features/06_preview_and_payment/view/01_preview_and_payment.dart": "92899352c217e4026dfabf84d9289cc0",
"assets/lib/features/06_preview_and_payment/view/01_preview_loading.dart": "431c3b0e89949d2b1da1831e6b1fbd1b",
"assets/lib/features/06_preview_and_payment/view/02_choose_payment.dart": "e43364235b9f843eb558a5fb7fc43f20",
"assets/lib/features/06_preview_and_payment/view/03_confirmContact.dart": "0b7d784140fbf8d55b56c1913b17aa8d",
"assets/lib/features/06_preview_and_payment/view/04_processing_payment.dart": "fa6deafa3e1ca92ca987eff131349d12",
"assets/lib/features/06_preview_and_payment/view/05_payment_instruction.dart": "51092e3264e60360c0caaccf374a11e3",
"assets/lib/features/06_preview_and_payment/view/07_payment_record.dart": "2917afd661c09fd0a9a3b797cc55d64f",
"assets/lib/features/06_preview_and_payment/view/08_line_pay_failed.dart": "1d4089e2e1bc45d1147429233c9b9598",
"assets/lib/features/06_preview_and_payment/view/09_pop_up_confirm.dart": "6bb38378dd3dce12b28ac20bd05389d5",
"assets/loading.gif": "5a1b183ba68dc78b9360100147ca327b",
"assets/NOTICES": "92760a09bab204f5389d144c8d32fefa",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fast_image_resizer/assets/lena.png": "af16d124a7d709df7d8e1cdda7ac6e5a",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/packages/youtube_player_iframe/assets/player.html": "ea69af402f26127fa4991b611d4f2596",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "271b287e6a098ecec6fd62a288b84519",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3390da83732e60708c95cb791bc310aa",
"/": "3390da83732e60708c95cb791bc310aa",
"main.dart.js": "23b7b657a742f15be36f012dd782d3b8",
"manifest.json": "6f8831e8849ec9403ccd37e7914e3fb4",
"version.json": "adcd24159c5ec8e67e4409675202aea6"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
