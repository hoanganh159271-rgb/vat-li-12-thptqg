/* Service Worker — Hỗ trợ chạy 100% ngoại tuyến & tự cập nhật khi có mạng */
var CACHE_NAME = 'vatli12-gdpt2018-v8';

var PRECACHE_URLS = [
  './',
  './index.html',
  './manifest.json',
  './assets/style.css',
  './assets/common.js',
  './assets/docs_data.js',
  './assets/icon.svg',
  './ly_thuyet/ch1_ch2_truc_quan.html',
  './mo_phong/01_chuyen_the_va_nhiet_dong.html',
  './mo_phong/02_do_thi_khi_li_tuong.html',
  './mo_phong/03_cam_ung_dien_tu_ac.html',
  './mo_phong/04_phong_xa_hat_nhan.html',
  './mo_phong/05_thuc_hanh_nhiet_sgk.html',
  './mo_phong/06_thuc_hanh_khi_va_dong_hoc.html',
  './mo_phong/07_mo_hinh_thi_nghiem_bai_hoc.html',
  './luyen_tap/data_cau_hoi.js',
  './luyen_tap/data_chuyen_de_c1_c2.js',
  './luyen_tap/data_de_thi_c1_c2.js',
  './luyen_tap/data_nguon_thuc_te_c1_c2.js',
  './luyen_tap/data_de_tinh_hot_c1_c2.js',
  './luyen_tap/data_hay_kho_c1_c2.js',
  './luyen_tap/data_ly_thuyet_tn_c1_c2.js',
  './luyen_tap/data_bay_ly_thuyet_c1_c2.js',
  './luyen_tap/phong_thi_thptqg.html',
  './luyen_tap/minh_hoa_loi_giai_c1_c2.js',
  './tra_cuu/hang_so_va_doi_don_vi.html'
];

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(PRECACHE_URLS);
    }).then(function () {
      return self.skipWaiting();
    })
  );
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(
        keys.filter(function (k) { return k !== CACHE_NAME; }).map(function (k) {
          return caches.delete(k);
        })
      );
    }).then(function () {
      return self.clients.claim();
    })
  );
});

self.addEventListener('fetch', function (event) {
  if (event.request.method !== 'GET') return;
  var reqUrl = new URL(event.request.url);
  if (reqUrl.origin !== self.location.origin) return;

  /* Network-First: có mạng luôn lấy bản cập nhật mới nhất, mất mạng trả từ cache */
  event.respondWith(
    fetch(event.request).then(function (networkRes) {
      if (networkRes && networkRes.status === 200) {
        var copy = networkRes.clone();
        caches.open(CACHE_NAME).then(function (cache) {
          cache.put(event.request, copy);
        });
      }
      return networkRes;
    }).catch(function () {
      return caches.match(event.request).then(function (cached) {
        if (cached) return cached;
        if (event.request.mode === 'navigate') {
          // Trang tĩnh dùng query để chọn bài hoặc mô phỏng ở phía trình duyệt.
          return caches.match(event.request, { ignoreSearch: true }).then(function (page) {
            return page || caches.match('./index.html');
          });
        }
        return new Response('Offline', { status: 503, statusText: 'Offline' });
      });
    })
  );
});
