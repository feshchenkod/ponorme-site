/* ПоНорме — офлайн-кэш (сгенерировано scripts/sw-build.mjs, версия 724b67d3cf02) */
const VERSION = "pnrm-v-724b67d3cf02";
const STATIC = "pnrm-static-v1";
const PRECACHE = ["/","/icon.svg","/favicon.svg","/favicon.ico","/favicon-16x16.png","/favicon-32x32.png","/logo.svg","/logo-dark.svg","/site.webmanifest","/apple-touch-icon.png","/android-chrome-192x192.png","/android-chrome-512x512.png","/maskable-512x512.png","/assets/AboutPage-DKxa5ZCm.js","/assets/CalcCard-g4_dMh6N.js","/assets/Calculator-5GUU6Rr4.js","/assets/Calculator-7hLpUP_o.js","/assets/Calculator-B6QXJl3T.js","/assets/Calculator-B6SeeqZ0.js","/assets/Calculator-BECd9ivO.js","/assets/Calculator-BSnjkaXJ.js","/assets/Calculator-BaST-GfE.js","/assets/Calculator-C0KfacKQ.js","/assets/Calculator-CDovrOfH.js","/assets/Calculator-CLBCN6sB.js","/assets/Calculator-CMKqbbNn.js","/assets/Calculator-CPA62t_5.js","/assets/Calculator-CPp1tz7u.js","/assets/Calculator-CYHaQgcz.js","/assets/Calculator-CofHIhgy.js","/assets/Calculator-D4kXhXCf2.js","/assets/Calculator-DBEjKqwT.js","/assets/Calculator-DKOIZl_4.js","/assets/Calculator-DbbjBRiI2.js","/assets/Calculator-Dfe0ZqEh2.js","/assets/Calculator-DmANnEaz.js","/assets/Calculator-DyCci8GG.js","/assets/Calculator-In4bst4T.js","/assets/Calculator-_kQjGkLg2.js","/assets/Calculator-wtBHqSU6.js","/assets/CalculatorPage-Dhn3HJvj.js","/assets/CalculatorsPage-I_qNcm7P.js","/assets/CategoryPage-QtZw-hFJ.js","/assets/CodeBlock-C2S31yJE.js","/assets/Conclusion-D9d2wRiu.js","/assets/DxfPreview-Dm6Bacp0.js","/assets/HomePage-BmLprPgq.js","/assets/HomePage-DPG3nwCk.css","/assets/NormBadge-BWIt52MC.js","/assets/NormsPage-SFK3lgUk.js","/assets/NotFoundPage-b4MvIS2y.js","/assets/NumberField-Czr58KcX.js","/assets/PracticeQuiz-CUrJ-GgE.js","/assets/PrivacyPage-B3pCH5Ud.js","/assets/RangeScale-CXpKbU4h.js","/assets/ReportDoc-C6UNTkOf.js","/assets/ReportIssue-BMbaHn-Q.js","/assets/ResultCard-BWaNRP_A.js","/assets/SegmentedControl-CixP-FMh.js","/assets/SelectField-C86JGYxI.js","/assets/SkillCadLessonPage-LIO-k2Ng.js","/assets/SkillCadPage-CmNomLhy.js","/assets/SkillFirePage-BSVwnM2B.js","/assets/SkillLispLessonPage-a1VHNmB_.js","/assets/SkillLispPage-D4TUitlv.js","/assets/SkillsPage-BR_WfyiF.js","/assets/Sp10ChangesPage-DpiolFjt.js","/assets/Sp3ChangesPage-DbmpMeFn.js","/assets/Sp484ChangesPage-Ds1ufwSN.js","/assets/Sp485ChangesPage-9sXR8LIm.js","/assets/Sp486ChangesPage-rDsaBIz8.js","/assets/Sp6ChangesPage-D7HxO1sR.js","/assets/Sp7ChangesPage-BSQ9Gkpj.js","/assets/StickyVerdict-CsbtuwN7.js","/assets/TableViewport-agq5n59z.css","/assets/TableViewport-fkKyJAc3.js","/assets/ToolCatalog-BBYUBcFN.js","/assets/VerificationPage-CCCnxWwp.js","/assets/VisualViewport-BduadRzq.js","/assets/VisualViewport-C7JYJikR.css","/assets/_plugin-vue_export-helper-BDNMzG2s.js","/assets/arrow-left-o_ZITDbW.js","/assets/arrow-right-DZHp0qze.js","/assets/arrow-up-B21njkjM.js","/assets/book-open-BbpA33Da.js","/assets/check-jgmqfyZg.js","/assets/chevron-left-BidrVZqy.js","/assets/circle-x-C3Blfixk.js","/assets/clipboard-paste-BrOY6Zn0.js","/assets/clock-B_3svFLC.js","/assets/copy-CP4PnGgA.js","/assets/createLucideIcon-CnNSuD2k.js","/assets/data-BYqb-nwr.js","/assets/details-3iiPOnKE.js","/assets/details-B2gbCsVm.js","/assets/details-B4hvOaAK.js","/assets/details-BhxL2vit2.js","/assets/details-BmzSxLqX.js","/assets/details-C0JEFbZN.js","/assets/details-C82gze12.js","/assets/details-C9ZIxl07.js","/assets/details-CCIf42H1.js","/assets/details-CGeBbmuB.js","/assets/details-COkrjy4h2.js","/assets/details-CYIi8suX.js","/assets/details-CgXGlmnX.js","/assets/details-CiCPIXBK.js","/assets/details-D32sz6Em.js","/assets/details-DBlj_EIh2.js","/assets/details-DWYEghX7.js","/assets/details-DXw8g0eg.js","/assets/details-DbznLcFX.js","/assets/details-DiNMG9t-.js","/assets/details-QGnFnOtR.js","/assets/details-VTnmx31X.js","/assets/details-eJoYn4gq.js","/assets/details-gmn4s2iB2.js","/assets/details-xzVT94Zy.js","/assets/download-B_W6Bwj5.js","/assets/dxf-BusZgmyO.js","/assets/dxf-nJNqzQuP.js","/assets/dxf2000-zajtbE4t.js","/assets/external-link-isZG92H_.js","/assets/eye-BokuRNsZ.js","/assets/file-text-CZ4T8WAY.js","/assets/file-up-lHhWSw2J.js","/assets/format-D1k5F0iu.js","/assets/formula-B8Y-JLdg.js","/assets/formula-BA4hv4zw.js","/assets/formula-BazO1WS4.js","/assets/formula-BkZTVisN.js","/assets/formula-Bp9AhJe_.js","/assets/formula-BpHO7ZD9.js","/assets/formula-C8vd45lc.js","/assets/formula-CPKG7gvi.js","/assets/formula-CfLP9i6R.js","/assets/formula-DOMdfnAL.js","/assets/formula-DOrPyETo.js","/assets/formula-DRKHG1NO.js","/assets/formula-DyWFNqXW.js","/assets/formula-eXT72YUs.js","/assets/html-CKuHtFmo.js","/assets/import-BVlU5Vsq.js","/assets/index-BXYWYXJj.js","/assets/index-CO6bi5ni.css","/assets/inter-cyrillic-wght-normal-DqGufNeO.woff2","/assets/inter-greek-wght-normal-CkhJZR-_.woff2","/assets/inter-latin-ext-wght-normal-DO1Apj_S.woff2","/assets/inter-latin-wght-normal-Dx4kXJAl.woff2","/assets/layers-VmBdVvBw.js","/assets/link-2-XDb4YSTM.js","/assets/minus-CxDYME8D.js","/assets/norms-editions-EpEe8mkF.js","/assets/ocr-CWZMxSts.js","/assets/pdf-B5sI1tIl.js","/assets/pdf.worker.min-CHFwMXne.mjs","/assets/plural-whhAQkHA.js","/assets/plus-CqV428I6.js","/assets/rename-DDiB_LHl.js","/assets/share-DtI-0_Sm.js","/assets/shield-check-IsjNe30f.js","/assets/sp3-2026-xWvMbSdi.js","/assets/sp6-2025-DkABLIUq.js","/assets/sparkles-BDmQ-mvT.js","/assets/storage-DXtyF0na.js","/assets/storage-Dm15I-8t.js","/assets/storage-DwJfvbxU.js","/assets/symbols-BEL__pMj.js","/assets/trash-2-CaztZoSn.js","/assets/triangle-alert-Cv5F8ZKZ.js","/assets/vendor-1jC4L8mB.js","/assets/wand-sparkles-hH4XQqdt.js","/assets/worker-DH9B50eA.js"];

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
