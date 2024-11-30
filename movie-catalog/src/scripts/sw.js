import 'regenerator-runtime'; //supaya saat babel mentranspile kode, asikronus tetap berjalan

//memasukkan cache ke sw (precache)
import CahceHelper from "./utils/cache-helper";
//daftar asset yang dicaching
const assetsToCache = [
  './',
  './icons/icon-72x72.png',
  './icons/icon-96x96.png',
  './icons/icon-128x128.png',
  './icons/icon-144x144.png',
  './icons/icon-152x152.png',
  './icons/icon-192x192.png',
  './icons/icon-384x384.png',
  './icons/icon-512x512.png',
  './index.html',
  './favicon.png',
  './app.bundle.js',
  './app.webmanifest',
  './sw.bundle.js',
];




//Service worker perlu regristrasi sebelum memulai 3 siklus hidupnya, regristrasi SW di src->scripts->utils-> sw-register

self.addEventListener('install', (event) =>{//siklus hidup sw pertama, instalasi
  console.log('Installing Service Worker');

  //buat cache app resource (saat instaling, cache memasukkan aset-asetnya)
  event.waitUntil(CahceHelper.cachingAppShell([...assetsToCache]));
});

self.addEventListener('activate', (event) => {// siklus hidup sw kedua, aktivasi
  console.log('Activating Service Worker...');

  //hapus cache lama
  event.waitUntil(CahceHelper.deleteOldCache());
});
//siklus hidup ketide, idle/bersiap... siklus hidup ke-3 ini tak perlu code apapun




//buat aksi saat melakukan pengiriman
self.addEventListener('fetch', (event)=>{
  console.log(event.request);

  //kirim/dapatkan fetch requesr ke/dari cache dengan taknik stale while revalidate
  event.respondWith(CahceHelper.revalidateCache(event.request));
  
});