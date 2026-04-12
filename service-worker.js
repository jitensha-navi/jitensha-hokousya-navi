// service-worker.js

// インストール時（初回読み込み時）
self.addEventListener("install", event => {
  console.log("Service Worker: installed");
});

// 有効化されたとき
self.addEventListener("activate", event => {
  console.log("Service Worker: activated");
});

// ページからのリクエストが飛んでくるたびに呼ばれる
self.addEventListener("fetch", event => {
  // ここでキャッシュ制御などができるが、
  // まずは何もしないでそのままネットワークに流す
});
