/* ПоНорме — офлайн-кэш (сгенерировано scripts/sw-build.mjs, версия 8f620d415ba2) */
const VERSION = "pnrm-v-8f620d415ba2";
const STATIC = "pnrm-static-v1";
const PRECACHE = ["/","/favicon.svg","/logo.svg","/logo-dark.svg","/site.webmanifest","/assets/AboutPage-B6cby46x.js","/assets/CalcCard-B_Osz4CX.js","/assets/CalcSearch-D1lNDkqe.js","/assets/Calculator-6WIDb2yl.js","/assets/Calculator-7MJMAaPY.js","/assets/Calculator-BGYY9U1U.js","/assets/Calculator-BZtbLpAs.js","/assets/Calculator-Bcsv8m1t.js","/assets/Calculator-BpdUsR2Z.js","/assets/Calculator-BxOOT7dv.js","/assets/Calculator-C1tmeJzt.js","/assets/Calculator-C2--EPuX.js","/assets/Calculator-CQIZsXbQ.js","/assets/Calculator-CfKzBA1Z.js","/assets/Calculator-CjT7QLET.js","/assets/Calculator-D2OCOKKt.js","/assets/Calculator-D60ZlWeL.js","/assets/Calculator-DLaGbHnS.js","/assets/Calculator-Da_t5AVV.js","/assets/Calculator-DhpWGjvX.js","/assets/Calculator-DkqdHL3O.js","/assets/Calculator-DuKUXQyk.js","/assets/Calculator-G1W7xTCj.js","/assets/Calculator-O9zseBtK.js","/assets/Calculator-WgU-oEK2.js","/assets/Calculator-_yA3InfP.js","/assets/Calculator-b58iqAAV.js","/assets/Calculator-glePtQk5.js","/assets/CalculatorPage-T6tx184g.js","/assets/CalculatorsPage-DoFi1nBm.js","/assets/CategoryPage-DVPdSnfe.js","/assets/CodeBlock-BN4H-OxF.js","/assets/Conclusion-D_7idR7_.js","/assets/DxfPreview-CZ0wmfif.js","/assets/HomePage-BHU-5yFk.js","/assets/NormBadge-C5Fwvhe5.js","/assets/NormsPage-DxwFfocC.js","/assets/NotFoundPage-BBti8E3W.js","/assets/NumberField-BdU_BPjv.js","/assets/PracticeQuiz-CwWG-kmh.js","/assets/PrivacyPage-omFPvcOs.js","/assets/RangeScale-jSRY5Eay.js","/assets/ReportDoc-Br8V6-td.js","/assets/ReportIssue-Ceb93B-v.js","/assets/ResultCard-Bw5SIS8C.js","/assets/SegmentedControl-CZSsDjjb.js","/assets/SelectField-DabNZUip.js","/assets/SkillCadLessonPage-C1trOkTZ.js","/assets/SkillCadPage-C-ChLgif.js","/assets/SkillFirePage-CUwD_wEn.js","/assets/SkillLispLessonPage-Ac5TJpqb.js","/assets/SkillLispPage-C69YSPUx.js","/assets/SkillsPage-CzaSbDv6.js","/assets/Sp10ChangesPage-GtsuS76u.js","/assets/Sp3ChangesPage-jZ6L4Lme.js","/assets/Sp484ChangesPage-DM1iQBnI.js","/assets/Sp485ChangesPage-1KzzncDf.js","/assets/Sp486ChangesPage-lEfjgL4i.js","/assets/Sp6ChangesPage-D6lBSTss.js","/assets/Sp7ChangesPage-CBPAEVtc.js","/assets/StickyVerdict-8IsyYWI0.js","/assets/VerificationPage-K72Z6QcS.js","/assets/arrow-left-DPOEG9oy.js","/assets/arrow-right-CiIPaS72.js","/assets/arrow-up-DPbWb7vu.js","/assets/book-open-Ns-86_ZH.js","/assets/check-ZuUwqI_x.js","/assets/chevron-left-WsQYp6yo.js","/assets/circle-x-CQxmddmE.js","/assets/clipboard-paste-DTIGK1B1.js","/assets/clock-Ct3fRgMi.js","/assets/copy-DsMOQPSv.js","/assets/data-BYqb-nwr.js","/assets/download-BEKOhi_F.js","/assets/dxf-B20PbRNK.js","/assets/dxf-BbyLcTji.js","/assets/dxf2000-CzasGayl.js","/assets/external-link-Ds6sdPYf.js","/assets/eye-DplD_Upi.js","/assets/file-up-DbK-FlyO.js","/assets/format-D1k5F0iu.js","/assets/formula-B8Y-JLdg.js","/assets/formula-BF2DtwQ1.js","/assets/formula-BLXk3Vqa.js","/assets/formula-BkZTVisN.js","/assets/formula-BpHO7ZD9.js","/assets/formula-Bpez8FJ9.js","/assets/formula-CEBBQt1s.js","/assets/formula-CIKA7FcM.js","/assets/formula-CPKG7gvi.js","/assets/formula-CfLP9i6R.js","/assets/formula-CpHLUGGX.js","/assets/formula-D6pyXo0W.js","/assets/formula-DOrPyETo.js","/assets/formula-zqi7BfEy.js","/assets/html-CKuHtFmo.js","/assets/import-BsQS5gFX.js","/assets/index-CMAzYgYN.css","/assets/index-CdndI_3H.js","/assets/inter-cyrillic-ext-wght-normal-BOeWTOD4.woff2","/assets/inter-cyrillic-wght-normal-DqGufNeO.woff2","/assets/inter-greek-ext-wght-normal-DlzME5K_.woff2","/assets/inter-greek-wght-normal-CkhJZR-_.woff2","/assets/inter-latin-ext-wght-normal-DO1Apj_S.woff2","/assets/inter-latin-wght-normal-Dx4kXJAl.woff2","/assets/inter-vietnamese-wght-normal-CBcvBZtf.woff2","/assets/layers-DD7yvgW2.js","/assets/minus-Dqr5qYEN.js","/assets/ocr-DATAwxUc.js","/assets/pdf-BOPbOByZ.js","/assets/pdf.worker.min-CHFwMXne.mjs","/assets/plural-whhAQkHA.js","/assets/plus-C7bTtEAG.js","/assets/rename-DN00ADny.js","/assets/share-hqkXht10.js","/assets/shield-check-D0wjc1sd.js","/assets/sp3-2026-C9fIacyZ.js","/assets/sp6-2025-DkABLIUq.js","/assets/sparkles-C549I18e.js","/assets/storage-DXtyF0na.js","/assets/storage-Db_Zx7tt.js","/assets/storage-Y6DOZorC.js","/assets/symbols-BEL__pMj.js","/assets/trash-2-B86tK9Kl.js","/assets/triangle-alert-DOP4j7zt.js","/assets/vendor-BjZ7n3X7.js","/assets/wand-sparkles-DhHSpoF-.js","/assets/worker-DH9B50eA.js","/assets/x-C3L_M5H2.js"];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(VERSION).then((c) => c.addAll(PRECACHE)).then(() => self.skipWaiting()),
  );
});

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
      .then(() => self.clients.claim()),
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
  } else if (url.pathname.startsWith("/assets/")) {
    e.respondWith(cacheFirst(req));
  } else {
    e.respondWith(staleWhileRevalidate(req));
  }
});
