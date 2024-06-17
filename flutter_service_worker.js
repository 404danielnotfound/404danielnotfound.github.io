'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "ad606d6a24a2dec982bc2993aaaf9160",
".git/config": "7b3697de5c4f2bcf86ec6f1533c9f5f3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "0149b1a8889564eae1733c8fe6e75e23",
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
".git/index": "2759cb6377c9d1106efa29e7a1861333",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "db99760095a64833be92bfa1f514edcf",
".git/logs/refs/heads/main": "db99760095a64833be92bfa1f514edcf",
".git/logs/refs/remotes/origin/HEAD": "fa61af5bc435acfd2ee551bdab3e199e",
".git/logs/refs/remotes/origin/main": "82a755492518055bb09b69a6b5ab675c",
".git/objects/12/f9e500c3ffd4388fa21605baf0ca3bb4c61e28": "9cba4bdf3a5e841e9f0ad823003c00f6",
".git/objects/13/3c7556fbe804a5376f63e49968a3e68e807d1b": "80f27f00f0501868091dcf3277e2bf60",
".git/objects/1b/8b3faf759f2b6e51420d2cffcc471429a9371f": "d8defee40233dd0590423e6963f485cd",
".git/objects/2b/a36ce25374f69920870a188532292f86f37ade": "a5e7fc310335e0e65641aa3265fee3b4",
".git/objects/37/c8f1b58604650b400ae90b50f93c927684ff9a": "99ce434c275c723c2cef58f7c6af1ff9",
".git/objects/46/99b00a816f256f806b8497ecc51eaf1ca84af9": "eb8b2734add67c11b5b0d8e70bb60221",
".git/objects/49/50fde5d55f68cb88029f4103db7e5b24bca8d0": "5ff0e63c086fc5a7c4103b21a224f0ca",
".git/objects/51/ba656b11c4c04c856eb9d7c3fcb1a25aff1a4e": "719870c96382b0c104fbe98afca39f90",
".git/objects/85/df5118018b0c6a74231009a4680b8e8f3e0218": "b4547249c7f371ace2d3e22fb22888c2",
".git/objects/ba/21e1cd5d2c5bb495f3f3c5f97d9360f706c6b9": "9c0a82a2a6b214d01785aa35283b56c5",
".git/objects/bb/9bd9f71f331591b3205ea1ec99e358fa28bdc0": "08380391f16f56390ba0b50a081904f1",
".git/objects/c8/3670f75576df5fbfeb4e6cadad0315bfbab3ce": "e33d9d937f4ec84c6c27462788bd0066",
".git/objects/cd/e2e4663666fb3d4832dcf86f3655cc2d45cf79": "27eb70a8bcec1e46bf9a5043e41a7ca2",
".git/objects/e7/3173b21bc2f940583e3ee4488ada80510fa8f7": "083243704bfd369ff2c7f649d7e1f884",
".git/objects/f7/32aa439585de50f929114c0980f5ca42172328": "a59f07089f178f116ff41722dfc985b4",
".git/objects/f7/cef33a9ca7299a216015dca153da1feb0cdae7": "22f635d804d9bb2162e3e7e2facfbfbd",
".git/objects/pack/pack-5119bab96932a260c7d6a98247d6a8fc06de4aa7.idx": "32ba805f5a5fab25009cc403f6c9bc30",
".git/objects/pack/pack-5119bab96932a260c7d6a98247d6a8fc06de4aa7.pack": "ccd19e1fbed776250c96f1c559ee778c",
".git/objects/pack/pack-5119bab96932a260c7d6a98247d6a8fc06de4aa7.rev": "5033b17c3518454064ee6fc72aa78e40",
".git/packed-refs": "b9714d1e75884c41230b86085cb7892e",
".git/refs/heads/main": "31df492f3a31c80cad2dffb4470d1452",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "31df492f3a31c80cad2dffb4470d1452",
"assets/AssetManifest.bin": "61b1e6c6b602dfb230379a304d55c993",
"assets/AssetManifest.bin.json": "45844d69caa0d051aa0a1f7a84fcf744",
"assets/AssetManifest.json": "be8c87f7104990662a34e333dda72654",
"assets/FontManifest.json": "8eaa9a3ef5863239fcb5c1733030ecd0",
"assets/fonts/MaterialIcons-Regular.otf": "68d9e053096beef804150a19a8b0b52b",
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
"assets/NOTICES": "13b589ac902f49749bff141a7ffb56ea",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fast_image_resizer/assets/lena.png": "af16d124a7d709df7d8e1cdda7ac6e5a",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
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
"index.html": "f55a0cfb3c6e2cd450ee3f3ec91fbdbf",
"/": "f55a0cfb3c6e2cd450ee3f3ec91fbdbf",
"main.dart.js": "dccd04f5b989407d87eacd38a6e12059",
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
