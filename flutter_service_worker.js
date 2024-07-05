'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "d9cca721a735dac4efe709e0f3518373",
".git/config": "7b3697de5c4f2bcf86ec6f1533c9f5f3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "1ce696e7ea013eba1d8c0a62a613eb80",
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
".git/index": "a5ff88b06bdf2cb2526dc391fe33cef6",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8acdcc0f130521590b51826f78c4cccd",
".git/logs/refs/heads/main": "8acdcc0f130521590b51826f78c4cccd",
".git/logs/refs/remotes/origin/HEAD": "2dfad00725c2cd5b053a0a2b251145b8",
".git/logs/refs/remotes/origin/main": "f9c28d36fa29ec3293457a16bd50b2c7",
".git/objects/01/9cb0a04696ff63a7bd912f57c080acbb7b7fce": "9b4d2e05ef185954bf722edf71394183",
".git/objects/02/2bbc516b5551df580b74e1764239509a9fc8f0": "e6b578f3a08de6e5c31f82f126425976",
".git/objects/08/ce500e44e5956621c56626fc8e74cf636c2a90": "ad77a360da94a93b4d96cd4cd9cf8396",
".git/objects/09/6ff1aeb684093f29375116cec67d6412c9ea85": "c6e159fd9f4cbb17824a147d635e28da",
".git/objects/09/720627deea393a96a1e1e9c434abb56751ad8b": "a320e8f279436ddd2891a99e93112492",
".git/objects/09/8e1cdfa6622f70ba9c81e247b7bee9da33c75d": "6aab0829eef2cc470921f664e536ba9b",
".git/objects/0d/eebb36f64da15177511cde3d8b68214e8ff6d6": "04db48d27b5fb9825085ddfde74cc895",
".git/objects/0f/029bdb76493d140f31878a27ef91888dd31d75": "aa9344fe758c4d580d0bc659a8909866",
".git/objects/1a/d04854b7e9c836e53d2e4d45ddf419bcbca983": "358ec42588bb291b3bcf241343b949ed",
".git/objects/1b/7b8b3ff657967160999a5c2f47452b39ca8bf2": "516e561a3fb4307775e010fbeb626113",
".git/objects/1c/cd71f5bf35b2b73004221f5c9764fa40ce2cbf": "84fd52fe6e0ef911641c43854876ad2e",
".git/objects/21/f41ae1760f88df6d7eefb98bae29c8c1371108": "c3ca30387c26ee9d425418bf500d501b",
".git/objects/29/7e68e40569457613c50e76e6618f9e35cc8915": "1908750f896b1ba91307983f5ffa43f6",
".git/objects/2f/70c0c2a32dc53da74ffc365e43ca88d252ac54": "91d264875bab6bf7b76dd049e1fb9f03",
".git/objects/32/f53454fed12868389ab9efe1d6bde41366f78c": "e6ad33fda43345e9b4494243bc9fd17a",
".git/objects/38/f68a649540faeed318b64cb7cf1cf87ffdb41a": "4254fe5bc3c2e7583708ac8e320d8f8f",
".git/objects/3a/1ed7f7894e09a854884b4d4f9160f3adc13a89": "8a160b491788e0719c5eae701b0023bf",
".git/objects/40/63707ec78fa1e8d9650abf75187cb0eb21d0be": "763429820b26fe8370625f2429276474",
".git/objects/41/06dbf07d4bde9b542836bcc9fe18810d052d39": "79decde4cadbf6c75048cd4912187586",
".git/objects/43/b171102706ef46de99919a73c4f8531f6c03fd": "1edc29e2f9e8ba1173de16f22ce16409",
".git/objects/43/d65a2628b932eead5a752818b5f875b35089b6": "a1b5ca06f2c19fd7dc0d4962a479232c",
".git/objects/44/2a8ad13962451ab285304cedc47be191326bde": "4af4e27b89f2dd1d45efa6f0708dc91d",
".git/objects/44/77c170e21bf1d657e7d8d339aa22701eead743": "10a1b3eb73bff3955acb01deb3ff2a2b",
".git/objects/46/1b0a6837df13f56b22dc25e8b9cfd755eaf65f": "270e8c1cbcad8a9eb4e338239183e762",
".git/objects/48/51bd54677ba51dd8ff29fc99e7f7b83ace2306": "4b0569adab91cf393dfa9baf24957df1",
".git/objects/4f/d4049ada0b5c173e0239232c7c38501a84e353": "fd62a20a17ee8834b40cb1755e5c3f48",
".git/objects/54/8cce75bd4432cb6c666f070064c7ed5bdebb3c": "1d566e50a4a7b3d47367b5f7fabde192",
".git/objects/57/9a51d6465d8712115924fb1d4cdbcbb09a44d5": "11a6359aa38d508d7c640bd12ca23301",
".git/objects/5a/29e5cc3ae4a0248ab087f63756fec3d9e230d9": "c88905993e764e2fd8aff66201943825",
".git/objects/60/030eebaf5591217ac99ba4954a1b31e9238beb": "97034db12a3c9e82efb91793ad3ae277",
".git/objects/64/c76e8ee6d642aad3eec98cc689292fe3a7b117": "c4456e3de266ff0d88ae1280de9dcbc3",
".git/objects/65/513d70e8a7d16169d867eefb9165234330a947": "7a33f15f8afbb0171cdf0ddd6f4ec9b6",
".git/objects/6b/2226368dc7ee7a1dd338f338ed98af3046df66": "1aa92546a6be079c4cfaf343f2ce650e",
".git/objects/6b/ef566981e3040ba631960cb6b306393490497f": "02c820cc7ff17475f903b9d45ab99b3f",
".git/objects/70/a9ff8fa61795c487b4d5409703a07c67da9552": "2ef0ab3ea972f7522d1a09ff0cc9b1e0",
".git/objects/76/bf20296e99660dd2f83aab87c2630ad7d400d8": "3a4907edfce2780b24b8fbabf057dbcd",
".git/objects/77/8cbf6ff9d56e1bf6d47fc6aceeadaf07520fcc": "5cdce4acf3a5db1087bd1475e5b09c69",
".git/objects/77/f6627a275b6bed886f93a046fa7e94d1bcb58b": "6cdccc5b0d65a0b14a40b9ff8081a0fd",
".git/objects/7b/92400c50db9cb0bb7d2a46bdd8de1d9d1dbfdb": "37f6c25c18c4e463106d38d99f923a5a",
".git/objects/7b/b239c9d6b0914095f88440337499f3664d2653": "d7082ff7bd9047a7825544ec1715f318",
".git/objects/81/5255ff396c00d5c2bc7c54c968d6ad584f9f92": "0141a75376277157f379bd7c53ec0f5e",
".git/objects/82/b80beeb6c549c4cb6d261d11ee8e5d40cc08e0": "13ded152823e7cd9154811fcb0081740",
".git/objects/94/122dcadc4169194527cc35f970644b87f704aa": "64d8bd242007e115d1a52cd1e7e9be11",
".git/objects/95/04ff1c82aef8421a0b318b321d5eeeb349cf5d": "4c188590aa24b541d030053436b671a8",
".git/objects/a2/3810dd45eff715c14581d8b7cf067ed466b14b": "385cc2afbae42c9e65c2b154cbc51dd8",
".git/objects/af/c8c16640002634e77d2e52b34fd8b28e705929": "509386d21fc12211d7f861237dbf2eaa",
".git/objects/b4/b624ec5c1918e1a9d437062db73e4cfebaeb53": "004e5d6d08a7b8f800b6298737bb75f9",
".git/objects/bb/80f38cdaa2a9131d711ee3a860f03c0b870176": "32826c54ac73761d8fbb391df43ecbca",
".git/objects/c0/238993e02a8e2d366873b887e0838ffa7b0e8f": "46e023b0390844d40f6e971157626ad6",
".git/objects/c6/4a29a43c8f2dabcf811d2699630c368be4f80e": "2190151c92e62bc9a42b3a9467b3f78f",
".git/objects/c7/44d083d5509611f4906f52c79b54ea68f29a35": "31f70b27eec19d9706cc2e173a7082cf",
".git/objects/c9/9a1117084c25f217de5e29e823486b7aadd5e6": "2db7e894d730edcaf7135ff0f8727819",
".git/objects/ca/ac24be2a8de983bbec4ba984acdf2f69ef0507": "d0705e99bd98f553913b40f5b81aa067",
".git/objects/d0/11db7ea6d47684b9935448bcaf527a6f7e0ca9": "96e3636e344e055fa582b7eff5d54ec4",
".git/objects/d2/7b6b410e619273ea8b1f6408e0e1bcea95d0ba": "2e843cd37ab4e97f17d59063a59196ca",
".git/objects/d5/97851a43bd442d6c0e43f16d7f92499aee2158": "4db100d45b18a1d4ca07a5c645cba27a",
".git/objects/d6/0c33958741a92aed201a879652a9e656d40593": "ccaf0e43d71485f82e88c0c89a6993ca",
".git/objects/d6/9fdff2f08c33f8ad992ff197a0a0222d59d873": "08f81ec9e95c35ad286ad60c06e23012",
".git/objects/d7/6354bc2145fefee0fc75f11296a37b6c5ec40e": "a7a0828732e44014509d908f88251776",
".git/objects/eb/a2892fbdfed0ded05554058ab8acaf4acbbed0": "91c706aed72d4bee40a0a64e777bbe53",
".git/objects/ff/26a382962f5f971365ab19235169533b71c782": "460ffb1907cd825251e5f51028c1c2aa",
".git/objects/pack/pack-4978fc7e93abcbd2f27b492945ccf6abd1942cde.idx": "9a7d7e3d71789e57c62b549060b0c561",
".git/objects/pack/pack-4978fc7e93abcbd2f27b492945ccf6abd1942cde.pack": "176df26d7ab6eb5e7bbfd5fe5e854d42",
".git/objects/pack/pack-4978fc7e93abcbd2f27b492945ccf6abd1942cde.rev": "2079501fe52bc399c260271e22692dee",
".git/ORIG_HEAD": "b4c6ddffbc1ac4e462705a87c4369b76",
".git/packed-refs": "cdb3010fbc811018614c62a8ee352b68",
".git/refs/heads/main": "b9e506f28475e3496d7ce89fb6d7eb42",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "b9e506f28475e3496d7ce89fb6d7eb42",
"assets/AssetManifest.bin": "1bf7fe2a4dca0110e801113571047311",
"assets/AssetManifest.bin.json": "1118d02b474cd1aa6f797e1d86cfb07b",
"assets/AssetManifest.json": "5bd3dfdb7f8c09b3a5a0ee4d0a368151",
"assets/FontManifest.json": "8eaa9a3ef5863239fcb5c1733030ecd0",
"assets/fonts/MaterialIcons-Regular.otf": "c7820164ccf16740d2273383182da566",
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
"assets/lib/assets/icon/others/location.png": "f0456f76dae755d6a83b187469afd0bc",
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
"assets/lib/features/06_preview_and_payment/view/001_preview_loading.dart": "fb05fe51f00c46f05b56342e5c281549",
"assets/lib/features/06_preview_and_payment/view/01_preview_and_payment.dart": "d26a3d2f92874b014dc22d6e0d620bd0",
"assets/lib/features/06_preview_and_payment/view/02_choose_payment.dart": "a77d0c0720cad1c0b100052e4e97b1f0",
"assets/lib/features/06_preview_and_payment/view/03_confirmContact.dart": "53d13cec0a4540ff1830f8bc1305c743",
"assets/lib/features/06_preview_and_payment/view/04_processing_payment.dart": "263a75f77413075fb39a52e72a06b316",
"assets/lib/features/06_preview_and_payment/view/05_payment_instruction.dart": "dd1ad3db2583762870b7410eca23562f",
"assets/lib/features/06_preview_and_payment/view/07_payment_record.dart": "baf2b0c4f600503206fad113a4e43fd9",
"assets/lib/features/06_preview_and_payment/view/08_line_pay_failed.dart": "1d4089e2e1bc45d1147429233c9b9598",
"assets/lib/features/06_preview_and_payment/view/09_pop_up_confirm.dart": "39e2fec64deb58733ee614d3e55aca18",
"assets/NOTICES": "4cc1f9e18e7b38e728f13293e8e01da6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fast_image_resizer/assets/lena.png": "af16d124a7d709df7d8e1cdda7ac6e5a",
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
"CNAME": "b9e93be3281d1c1a48d570a1fcad4753",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "fd8c256f44800098ceb41f76944b3f55",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "75062d5cf5146b845ff8f3bfbca54c0e",
"/": "75062d5cf5146b845ff8f3bfbca54c0e",
"main.dart.js": "7cb11abd8998c06217b429e7bf44c53c",
"manifest.json": "06d02a054bdf94bd4df92a889136b5e3",
"version.json": "f0b606d5556d3cb7a359e5d4a834adba"};
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
