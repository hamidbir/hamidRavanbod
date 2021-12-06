'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "89774252a1b773e42035c41500fd7c8d",
"assets/assets/fonts/bradly.ttf": "0252223e8c36008b595f5e379ad5e524",
"assets/assets/fonts/comic.ttf": "cfbe2858223b5d6f0fead9583b07f3fd",
"assets/assets/images/h.png": "c6efc93df8535515c4a9fb1743d534f1",
"assets/assets/images/img1.png": "2193c444f0fa64c87d978089120a0f7f",
"assets/assets/images/main.flr": "91e0edee8c5858caa60794c747877418",
"assets/assets/images/main1.flr": "f64a26763d59b00af1cdc9a6b061e50e",
"assets/assets/images/main7.flr": "cd585d62d8804af0410007ed9d0b7e37",
"assets/assets/images/mainIcon.png": "0881161531de991477bfad796d764885",
"assets/assets/images/p1.png": "922d0c4ec9d7b3cf5f07601e02495704",
"assets/assets/images/p2.jpg": "8084828b0216fec24106f4347d0b7ff7",
"assets/assets/images/p3.png": "3f2d77343ed3ac826d94a5d79e89aa00",
"assets/assets/images/profile.jpg": "3ef0ac9d22848ad9fb27ef903fbfb5db",
"assets/FontManifest.json": "2c0242f617b5f4b8e4adbdd3695409e8",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "67daec8d0f4bf56200e4b5a4522d9807",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"favIcon.png": "265822d7aa0405d5c4969510733799c3",
"icons/android-icon-144x144.png": "a222e3f9415374453925788d62486e3e",
"icons/android-icon-192x192.png": "3cc5e52ddc6cf95b5a8e4de07dcbf72e",
"icons/android-icon-36x36.png": "b7d193cf8cb711016b11781590202570",
"icons/android-icon-48x48.png": "cba8abc776722060a44be7308033da1d",
"icons/android-icon-72x72.png": "dee80bb05e50a249f49b390f387514f1",
"icons/android-icon-96x96.png": "e31d5134861942fd4fd177ef0668db24",
"icons/apple-icon-114x114.png": "da8f1d291970d331d4deec49cdb8ee65",
"icons/apple-icon-120x120.png": "558db6086c837e416b1447d10e0cc8af",
"icons/apple-icon-144x144.png": "a222e3f9415374453925788d62486e3e",
"icons/apple-icon-152x152.png": "04d3368769db0dae65a2b7a25921e1df",
"icons/apple-icon-180x180.png": "956110117e97de117dcc6f4eeb29ac9d",
"icons/apple-icon-57x57.png": "94e5bf2095e750121e5f0d4cfec1a5a0",
"icons/apple-icon-60x60.png": "07579fa98cdba94fbc9a89f008d553b7",
"icons/apple-icon-72x72.png": "dee80bb05e50a249f49b390f387514f1",
"icons/apple-icon-76x76.png": "4d78f9531c5a20764419837021f39bab",
"icons/apple-icon-precomposed.png": "7116103dc230d4379284bba93b88a238",
"icons/apple-icon.png": "7116103dc230d4379284bba93b88a238",
"icons/browserconfig.xml": "97775b1fd3b6e6c13fc719c2c7dd0ffe",
"icons/favicon-16x16.png": "75de70317b26abae64f8ecf5f068578a",
"icons/favicon-32x32.png": "ff67699c263dc7df93594173bdd5b845",
"icons/favicon-96x96.png": "3d5106ee2cfd47243432b60e0dab4b14",
"icons/favicon.ico": "d94f2396072b82db27b61dd644b38d2d",
"icons/manifest.json": "e50e6a1c9ed6452635d3211f39501e0d",
"icons/ms-icon-144x144.png": "a222e3f9415374453925788d62486e3e",
"icons/ms-icon-150x150.png": "b57b246b8342ee4d80c71f32b0449a9a",
"icons/ms-icon-310x310.png": "d3a8372e13fc72553a79bee15eb1de85",
"icons/ms-icon-70x70.png": "1d1eed8966fb0a4a9c565c393d8ea82b",
"img/mainIcon.png": "0881161531de991477bfad796d764885",
"img/please.png": "712402ac580247c5dcdbb487cbd54605",
"index.html": "d66825389511971e5e73dd3ff7f88214",
"/": "d66825389511971e5e73dd3ff7f88214",
"main.dart.js": "47a9d5283120390492c247348540f7c4",
"manifest.json": "ac7ba602e4b1d339402a64deb8a5c475",
"styles.css": "7b80b35a96da2ebadbcf2856dc35cc7b",
"version.json": "779fd6cc4216be0958994e7d40ac95d3"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
