'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "bcd97365ddda0c1c61503dd19134ed1b",
".git/config": "82265c7d5bb6227325439ebfc15908bd",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "a4f726e60a613a185190ac79cc03a03e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "6c4f90943d12b16b8f146563bddb5e53",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "79badf2b7f69b8f1e1bea8d3f74f84f0",
".git/logs/refs/heads/main": "a18e2bb1f944454ad65ec8ea084bacf4",
".git/logs/refs/remotes/origin/HEAD": "c24f7b3acdae2194165bbd555d311e96",
".git/logs/refs/remotes/origin/main": "199425f98155cb6c9f4523dd513fbd46",
".git/objects/00/27e9dd7e72d68b9c1e580143ae714e2a723f23": "83c4086682e25714b7fdaed6ff7af30c",
".git/objects/02/b40a4f20cefe3cf853e94cbdb4b2c108b33107": "16d659232ffb3a089a57189fb2daf2b8",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/0b/1f7e064e57557f2348e361043ce56d3a4a2432": "1baa7459bb3004a173e6a5d38bfefd7c",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0e/1310d65b4b7ce44aea2b72ed7105588a4bad62": "979a5e74e7e56a79e5c2dbdfbc8222c2",
".git/objects/0f/2a0e05d64d1526eaf7cef08baf760cbcbfd886": "5054d234e07593c81a000631767b15d3",
".git/objects/10/b3d0add5b0f0def63d9b4e32fa82f22201b40e": "3fff214ec41e3a86b99982fd7cdf333a",
".git/objects/16/0a41d65702780a8ab77f6412711111eb429769": "4754a5ec52466c356e4a9246c485ce0e",
".git/objects/1a/26fc8d60f77c80d8fbc6c3524745366e356147": "17743c341dc1bbe24c7f1edd17c12df2",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/23/3eabf79743225c6c735fdb415d54ea6f242d57": "5a913df7aab5fe7824c6e6320647dc06",
".git/objects/2e/3a4be70c858a1af68914f6db0ec7091ab9b118": "626223fd35eb1e693f055b5b0c21199b",
".git/objects/2e/bda8152fe9e36971d98d01804cbd52458e7880": "ac1ec2da53f40c08a248a8a93acafe34",
".git/objects/33/3294c0eef209778cc6f98bb981a0105fb68dc9": "b106417e3bcb90193cd732b23a9aa031",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/3a/d1e0b39d5d6eb7ea000b85b18a4480b6d7e41a": "84805614ec101c87fa55ef911120b769",
".git/objects/3b/56080238636db144c180dec667db2a9208941d": "11fc1e5e133969e7802763a728d0c596",
".git/objects/3e/3f528df2250fe5f1bac6bdca6cffd1b2a69f8a": "3cfd5a2a96ed4b0f44a3bc9aa9a6ad13",
".git/objects/47/28d912d611e6010aacb010c57639ba117a5100": "4b55071c26592a686e1894ccdfc55db5",
".git/objects/4b/246eb0329154ce1edf37ffa7bf1f6bf8cf0fd2": "6c11cf4631beeab377be84d7d1d3cd9b",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/54/ccabee06c31dc0ca0af536b767f52af43771a3": "27e5c258acb07fb92beeaad0d7aea15e",
".git/objects/56/d4b94c7a55c2fc494be445fc623c4b3b1cbf4b": "7d4a18aff7c501d659d7b77564d67ec4",
".git/objects/5e/66b43f87de4c9401f8b7870ccbab73115b74c2": "5811214bea69e74370716dfcbbfcb40d",
".git/objects/60/41eb1d5be6b179fb54af1b66505158ab0af311": "cec1e0f6ee4ab6c33a6f310efc19d018",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/6b/8828e7465d796d53de4fec6dc0b26ec215ed2e": "7106306a1281274222935fc61ebe2c91",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/71/1af249c728be129dfe13877fa6bef3c6063fa3": "3a5c4dbb434c779e097f50fe6a37ee8a",
".git/objects/75/04edc6bfbde8907d323757dbc2874524a13893": "96f7c36b06c40933e44fb0bf757b9282",
".git/objects/76/ac258a9124a92856117f537f967d84bd46ffcf": "58f90beee37b69b5c28eb5474a1d6d4c",
".git/objects/7a/ed68c1c6e2a637d221c6075ef300e3d197b560": "a98135c53f112e9636f3df6cfa2d5ac7",
".git/objects/7c/0a674efeaf788d929621de29adf35dbdb1ae83": "95cc38352728b2952bba84bc029508c6",
".git/objects/7e/6dcbbce237437bab174f286f1439e240018c34": "b30c916509727975267de2362f01dcda",
".git/objects/83/28a48da163de94d2180eb4e1e32cdfd26e9917": "2134fedf80ef41bf45c9f36183591ef2",
".git/objects/86/60ca61dc3ec42db84f78a5e518a9089d3b91ec": "13191ec4be31aca88280b8a669c20f52",
".git/objects/8a/3d888f93bb8889e9137b4faf10a371253c477d": "52e4cd9a209bcb3ce57dd07e6a710d78",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/8f/0114c1557234f15bbf7ff6dc685331256941dc": "e1742dbb7e2c2ff43d67f022e7aeb5c9",
".git/objects/91/91b195845137a1c2ec0f4760a3ffb3ffb887ed": "d6aae1717841e84da942fa464c9af0e9",
".git/objects/92/a31996806d8fd85943fc0b0d66e882fcb459ac": "5d5f06d0ad956806c58fab6482f278b4",
".git/objects/9b/44472f409dda80420853a6af117823884264e0": "af12caf8a9b82abcfd6f13a28bdf932a",
".git/objects/9e/d16048bbd21b2f84fa34d4d8fc9d604d525bc6": "dbcc6f86e72f53681c6f9af1e54eb158",
".git/objects/a1/68b728a76bb5d21cc51ace72584a52749c7879": "dfc3251dd70fdd35bedd0d419225c47f",
".git/objects/a1/a58a6d3e63cc00e3b262b31671ff50503cb05b": "29b723dae0d40fd4eb15debf41dcdfc2",
".git/objects/aa/2eb7f5ba8d003956721debd0d135a225fd58e9": "06d348b6dd6a62011b9658e1918552ff",
".git/objects/ad/03d990d3b6bcc4ab2ddcad1442ba6db3abbbd3": "c742c68c9b0dba0fa724faad8d9cc6a2",
".git/objects/ad/36a3dc437519552d6c13dd2946ef3adc15f389": "9f36943f2c842ab8c8e922e33f68bd17",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/ae/c7b2f0467bc455b3d355f2aab93680d68308a6": "8d38b725b28a6782f0648b650c18c2f1",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b4/786b2fa66213f4203e40d15306127788144831": "3472df7319043b83c8d3b607753885fa",
".git/objects/b6/3210359f44ff2e893d47f08b84293cb5b56fb7": "ba83b241df6ffb7da3b5b5a6ef330d24",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bd/346deecd83bf024fae3e8fc2214d655c7ac45f": "beb3bb97b613af110cf890ccc2f65a6d",
".git/objects/c1/a5c0495232951e1c870feb06a9a069f21e0a69": "bcefaf9fc2e21ec85bc867ddecd864a3",
".git/objects/c5/df6617052f63f29d04c2a8d9019bdc86d6ba36": "9683aed2584a81097d022769a0552e88",
".git/objects/cc/ec60bcdfd810b5db8d9a718e01c24b176d3cc4": "7f42c817d0e64bbd6d47c7d629577453",
".git/objects/d1/13a8f4beec1b56a8fbaf5206f7bb158b2c32b0": "9c8aac63ce023fdac678886d686c9dbb",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d6/27fe518fbc7e694a600de894a77e0ddb77c589": "41ded8be466a5b5a35360d6e8f441faf",
".git/objects/d9/d894a2790614c9424dd1d2960262a26606eb43": "0fd92b601db55375173f0fb02b61c3de",
".git/objects/de/b9859dfa771c0d6b6e9f5015497db18e60220f": "2d56bd9afcce662dc90f4fe40fbc273e",
".git/objects/e0/45345233e65b4a41157571f15f8ae4d150cc80": "8bfcba052a66e575e87f4d727de8c597",
".git/objects/e1/6ccb45089f381aedd61c8bbb92a2e4ef905b66": "257b0add3ec836b6d1f1c12cb8c120c3",
".git/objects/e7/23ecf3caaa4b9ad275b17c94d255578bbc7d7f": "4f36a09a03ae616f5b31b16e666e7294",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/ef/a3978dc80ff22b12057ae49fb1abc133a74a11": "8506358fa719a89d8449dff545a295ee",
".git/objects/f0/a1590ff17e5714fbf7dab6362a33da05b4abdb": "6bd8191ad23967ae901e52f62891310a",
".git/objects/f3/03c180cba9bc8a2f6bb7bc592ae315b728fae1": "509754c098dc07eaf01338573ba74e2d",
".git/objects/fb/27ef01b9c52f280fc53605fb04aeb64e182e32": "67584c662a9e3ef1e81a3ccd4d667d43",
".git/objects/fc/fa3b58db47f44c3f782e827200834cc0f7fb99": "e5f47629c17b9ef8b9c87f5b638dc737",
".git/objects/ff/39f88b4bafa441ff3612bf57e75e365c1d7735": "ff7ae34b4f98db73b4028c63e81b7295",
".git/objects/pack/pack-e2c280c257e08d8eb9b83d33f0888084d3237455.idx": "513dd70f7e52412b3da352becf21ddea",
".git/objects/pack/pack-e2c280c257e08d8eb9b83d33f0888084d3237455.pack": "b1851982ed11c9e93fbf2e317dcb8999",
".git/ORIG_HEAD": "c2a155455ea43aa0d4d4677d8aee9a1d",
".git/packed-refs": "71d4c0a47af9f7aea50ea14e4cc1a0fe",
".git/refs/heads/main": "3186bf7ff0e1e5b1828513b200db92c0",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "3186bf7ff0e1e5b1828513b200db92c0",
"assets/AssetManifest.bin": "a3d922a0b0bb96200631d1d9f758ce7d",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "89692d361cd33ef2ef59ca5f88ce708c",
"assets/NOTICES": "4933c01ea411709726851c5f25db75d3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "6ae27e22bed74406de4fe91a0f3e2848",
"/": "6ae27e22bed74406de4fe91a0f3e2848",
"main.dart.js": "65f2c125dbf345d16858dc5b7d690037",
"manifest.json": "42de28427f0d09f492da550d0107c132",
"version.json": "d56cf5ac31312b9c2527f35b8b0dc129"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
