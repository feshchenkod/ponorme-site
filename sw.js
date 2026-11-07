/* ПоНорме — офлайн-кэш (сгенерировано scripts/sw-build.mjs, версия 58a60a2ce60b) */
const VERSION = "pnrm-v-58a60a2ce60b";
const STATIC = "pnrm-static-v1";
const PRECACHE = ["/","/icon.svg","/favicon.svg","/favicon.ico","/favicon-16x16.png","/favicon-32x32.png","/logo.svg","/logo-dark.svg","/site.webmanifest","/apple-touch-icon.png","/android-chrome-192x192.png","/android-chrome-512x512.png","/maskable-512x512.png","/assets/AboutPage-rQdPJITS.js","/assets/CalcCard-COZMlAzS.js","/assets/Calculator-0XHvNtw3.js","/assets/Calculator-B2iKP9qh.js","/assets/Calculator-B4ZUHNg0.js","/assets/Calculator-B74d08gl.js","/assets/Calculator-B84hAeah.js","/assets/Calculator-BFiHfgNZ.js","/assets/Calculator-BJ1zwbut.js","/assets/Calculator-BRrVBsR6.js","/assets/Calculator-BYPvch-l.js","/assets/Calculator-BqOVEsxC.js","/assets/Calculator-BxuSn1n1.js","/assets/Calculator-C4817kTw.js","/assets/Calculator-C5o_Zjsq.js","/assets/Calculator-C97SVVGO.js","/assets/Calculator-C9goSZaF.js","/assets/Calculator-CADRwRki.js","/assets/Calculator-ClECV5as.js","/assets/Calculator-CqCVuFV1.js","/assets/Calculator-DGZozCMa.js","/assets/Calculator-DOMHqiwQ.js","/assets/Calculator-DbQVKTN0.js","/assets/Calculator-KsQdXxbr.js","/assets/Calculator-TvQG_6v-.js","/assets/Calculator-YQqpoje2.js","/assets/Calculator-iQHO6r5x.js","/assets/CalculatorPage-CuDLZGkK.js","/assets/CalculatorsPage-B4Iu_O35.js","/assets/CategoryPage-BEwJX6mC.js","/assets/CodeBlock-CXnwLPQh.js","/assets/Conclusion-CYRqJI7W.js","/assets/DxfPreview-CiWAcuv7.js","/assets/HomePage-BgrBVtG6.js","/assets/HomePage-DPG3nwCk.css","/assets/NormBadge-BEzhiXsJ.js","/assets/NormsPage-BNiNw9QQ.js","/assets/NotFoundPage-DtByHvh6.js","/assets/NumberField-D3pgqiKl.js","/assets/PracticeQuiz-D4-C_2RM.js","/assets/PrivacyPage-BHleqUdO.js","/assets/RangeScale-HZ0C8ZTb.js","/assets/ReportDoc-DFNQmjmR.js","/assets/ReportIssue--ZN30AJk.js","/assets/ResultCard-gTizAe_B.js","/assets/SegmentedControl-BBCHd3Hc.js","/assets/SelectField-Bw-u9wE5.js","/assets/SkillCadLessonPage-CZNM7shW.js","/assets/SkillCadPage-Czsw8ZrD.js","/assets/SkillFirePage-Bq31d9x6.js","/assets/SkillLispLessonPage-DvPVpVFu.js","/assets/SkillLispPage-zBsuKrFJ.js","/assets/SkillsPage-D-D4r7lp.js","/assets/Sp10ChangesPage-ByoGhbvz.js","/assets/Sp3ChangesPage-BjMDozDR.js","/assets/Sp484ChangesPage-DFCP_moA.js","/assets/Sp485ChangesPage-Czu6aTGd.js","/assets/Sp486ChangesPage-DGGxxFeE.js","/assets/Sp6ChangesPage-DHjIu3ce.js","/assets/Sp7ChangesPage-BXQpgexC.js","/assets/StickyVerdict-CZ_QKNXY.js","/assets/TableViewport-Ds3XOISF.js","/assets/TableViewport-agq5n59z.css","/assets/ToolCatalog-DfdQX6aI.js","/assets/VerificationPage-CsP96f1i.js","/assets/VisualViewport-C7JYJikR.css","/assets/VisualViewport-DfvTi5Hj.js","/assets/_plugin-vue_export-helper-BDNMzG2s.js","/assets/arrow-left-CVRlY7vd.js","/assets/arrow-right-CMxhufJr.js","/assets/arrow-up-DTAGW4FF.js","/assets/book-open-Czb7FC3Q.js","/assets/check-CgcivuSN.js","/assets/chevron-left-CC9bnMUN.js","/assets/circle-x-DiRobfRH.js","/assets/clipboard-paste-C4ZtcKWx.js","/assets/clock-CufdgwIa.js","/assets/copy-B1ieY_HW.js","/assets/createLucideIcon-DQwryfmw.js","/assets/data-D_svl8wA.js","/assets/details-3iiPOnKE.js","/assets/details-B4hvOaAK.js","/assets/details-Bc2tYyfP.js","/assets/details-BeSfkZz3.js","/assets/details-BmzSxLqX.js","/assets/details-C0JEFbZN.js","/assets/details-C82gze12.js","/assets/details-C9ZIxl07.js","/assets/details-CCIf42H1.js","/assets/details-CGeBbmuB.js","/assets/details-COkrjy4h.js","/assets/details-CYIi8suX.js","/assets/details-CgXGlmnX.js","/assets/details-CiCPIXBK.js","/assets/details-D32sz6Em.js","/assets/details-DBlj_EIh.js","/assets/details-DWYEghX7.js","/assets/details-DXw8g0eg.js","/assets/details-DbznLcFX.js","/assets/details-DiNMG9t-.js","/assets/details-QGnFnOtR.js","/assets/details-VTnmx31X.js","/assets/details-eJoYn4gq.js","/assets/details-gmn4s2iB.js","/assets/details-xzVT94Zy.js","/assets/download-Dzt5X9kd.js","/assets/dxf--1YJ8LA-.js","/assets/dxf-DkKGA4pW.js","/assets/dxf2000-BjDItz6g.js","/assets/external-link-BqXJj5K9.js","/assets/eye-DjJ6EmJU.js","/assets/file-text-CE3_g9Fd.js","/assets/file-up-7MPFxh57.js","/assets/format-D1k5F0iu.js","/assets/formula--0oqVBwx.js","/assets/formula-BA4hv4zw.js","/assets/formula-BazO1WS4.js","/assets/formula-Box9Itnk.js","/assets/formula-C8vd45lc.js","/assets/formula-CPKG7gvi.js","/assets/formula-CWXCEg7W.js","/assets/formula-CfLP9i6R.js","/assets/formula-D5FYMbLd.js","/assets/formula-DQJCo8Rv.js","/assets/formula-DRKHG1NO.js","/assets/formula-DyWFNqXW.js","/assets/formula-J_Itbrth.js","/assets/formula-eXT72YUs.js","/assets/html-CKuHtFmo.js","/assets/import-CN2Kk_FH.js","/assets/index-BLetBima.css","/assets/index-CaNZ3E5h.js","/assets/inter-cyrillic-wght-normal-DqGufNeO.woff2","/assets/inter-greek-wght-normal-CkhJZR-_.woff2","/assets/inter-latin-ext-wght-normal-DO1Apj_S.woff2","/assets/inter-latin-wght-normal-Dx4kXJAl.woff2","/assets/layers-BsPc3bWq.js","/assets/link-2-DZjJRC3j.js","/assets/minus-CE61oLF-.js","/assets/norms-editions-EpEe8mkF.js","/assets/ocr-BDWZw-84.js","/assets/pdf-DM16lVGj.js","/assets/pdf.worker.min-CHFwMXne.mjs","/assets/plural-whhAQkHA.js","/assets/plus-sEqG2PNU.js","/assets/rename-BjZ122zx.js","/assets/share-DtI-0_Sm.js","/assets/shield-check-DVAJBmRQ.js","/assets/sp3-2026-xWvMbSdi.js","/assets/sp6-2025-DkABLIUq.js","/assets/sparkles-BPOV3R2N.js","/assets/storage-BJrV_QB0.js","/assets/storage-CFF07s9j.js","/assets/storage-DXtyF0na.js","/assets/symbols-BEL__pMj.js","/assets/trash-2-CNNtPLQ8.js","/assets/triangle-alert-onTJt7HR.js","/assets/vendor-3QNz-Mpq.js","/assets/wand-sparkles-FcQq1SCn.js","/assets/worker-CFz37K6C.js"];

/* Новая версия НЕ вытесняет работающую (без skipWaiting/claim): открытые вкладки
   продолжают жить на своей сборке, чьи хэшированные чанки лежат в её кэше,
   а новый SW активируется при следующей навигации, когда старых клиентов нет.
   Иначе деплой удалял кэш старой версии из-под живой вкладки, и восстановленная
   после простоя страница не могла загрузить свои чанки (голый пререндер). */
async function installOffline() {
  const cache = await caches.open(VERSION);
  const oldNames = (await caches.keys()).filter(name => name.startsWith("pnrm-v-") && name !== VERSION);
  const oldCaches = await Promise.all(oldNames.map(name => caches.open(name)));
  let next = 0;
  async function consume() {
    while (next < PRECACHE.length) {
      const path = PRECACHE[next++];
      // Повтор установки после сетевого сбоя не скачивает уже готовую часть.
      if (await cache.match(path, { ignoreVary: true })) continue;
      let response;
      // Только content-hash пути: HTML и логотип под прежним именем должны обновиться.
      if (path.startsWith("/assets/")) {
        for (const old of oldCaches) {
          response = await old.match(path, { ignoreVary: true });
          if (response) break;
        }
      }
      response ??= await fetch(new Request(path, { priority: "low" }));
      if (!response.ok) throw new Error("offline precache: " + path + " (" + response.status + ")");
      await cache.put(path, response);
    }
  }
  // Не запускаем 170+ запросов одновременно с поиском/ленивым переходом.
  const completed = await Promise.allSettled([consume(), consume()]);
  const failed = completed.find(result => result.status === "rejected");
  if (failed) throw failed.reason;
}
self.addEventListener("install", (e) => { e.waitUntil(installOffline()); });

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((k) => k.startsWith("pnrm-") && k !== VERSION && k !== STATIC)
            .map((k) => caches.delete(k)),
        ),
      )
  );
});

/* Cache API не принимает redirected-ответы для навигаций — пересобираем чистый */
async function putClean(cache, req, res) {
  if (!res.redirected) {
    await cache.put(req, res);
    return;
  }
  const body = await res.arrayBuffer();
  await cache.put(req, new Response(body, { status: res.status, headers: res.headers }));
}

async function handleNavigate(req) {
  const cache = await caches.open(VERSION);
  try {
    const res = await fetch(req);
    if (res.ok) await putClean(cache, req, res.clone());
    return res;
  } catch {
    return (
      (await cache.match(req, { ignoreSearch: true, ignoreVary: true })) ||
      (await cache.match("/", { ignoreVary: true })) ||
      Response.error()
    );
  }
}

async function cacheFirst(req) {
  const cache = await caches.open(VERSION);
  const hit = await cache.match(req, { ignoreVary: true });
  if (hit) return hit;
  const res = await fetch(req);
  if (res.ok) await cache.put(req, res.clone());
  return res;
}

async function staleWhileRevalidate(req) {
  const cache = await caches.open(STATIC);
  const hit = await cache.match(req, { ignoreVary: true });
  const net = fetch(req)
    .then(async (res) => {
      if (res.ok) await cache.put(req, res.clone());
      return res;
    })
    .catch(() => hit || Response.error());
  return hit || net;
}

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;
  if (req.mode === "navigate") {
    e.respondWith(handleNavigate(req));
  } else if (url.pathname.startsWith("/assets/") || PRECACHE.includes(url.pathname)) {
    e.respondWith(cacheFirst(req));
  } else {
    e.respondWith(staleWhileRevalidate(req));
  }
});
