/* ПоНорме — офлайн-кэш (сгенерировано scripts/sw-build.mjs, версия 0181ca098ca5) */
const VERSION = "pnrm-v-0181ca098ca5";
const STATIC = "pnrm-static-v1";
const PRECACHE = ["/","/favicon.svg","/logo.svg","/logo-dark.svg","/site.webmanifest","/assets/AboutPage-BfD7SnBA.js","/assets/CalcCard-sYm8kdAX.js","/assets/CalcSearch-DK1r6wkR.js","/assets/Calculator-8a1Y4FF6.js","/assets/Calculator-B-DEDpxZ.js","/assets/Calculator-B0PoJgHn.js","/assets/Calculator-BKiJQuTT.js","/assets/Calculator-BMsryFRY.js","/assets/Calculator-Bf6SUlCH.js","/assets/Calculator-BiDy3eR4.js","/assets/Calculator-C5270TQl.js","/assets/Calculator-CHhZ15zU.js","/assets/Calculator-CMlL9Cy9.js","/assets/Calculator-CWBl95II.js","/assets/Calculator-CdxSdeHy.js","/assets/Calculator-D2RmlsH0.js","/assets/Calculator-D5QT4J9L.js","/assets/Calculator-DRBMtLEw.js","/assets/Calculator-DTbcAcCT.js","/assets/Calculator-DX2fp2Jq.js","/assets/Calculator-DZfWKhpL.js","/assets/Calculator-Dv6-ycLC.js","/assets/Calculator-fszOgnao.js","/assets/Calculator-jwaL5COA.js","/assets/Calculator-n-1P-P0l.js","/assets/Calculator-ngNUR_O1.js","/assets/Calculator-qJYVctz5.js","/assets/CalculatorPage-CAI3jMnC.js","/assets/CalculatorsPage-FOZD9vhW.js","/assets/CategoryPage-BoGTrrVd.js","/assets/CodeBlock-BPSi0slP.js","/assets/HomePage-CZGfdzx8.js","/assets/NormBadge-Bl6QX69p.js","/assets/NormsPage-DrXfZ4eb.js","/assets/NotFoundPage-xTayXl5g.js","/assets/NumberField-B0c4OZlZ.js","/assets/PracticeQuiz-EuIdzf4L.js","/assets/PrivacyPage-DpQ4QLv3.js","/assets/RangeScale-BMJOkmsa.js","/assets/ReportDoc-Bb0zrrng.js","/assets/SelectField-Dh8J9Sxp.js","/assets/SkillCadLessonPage-DCsAdBT_.js","/assets/SkillCadPage-BnMOQUue.js","/assets/SkillFirePage-DoAQAChT.js","/assets/SkillLispLessonPage-6Nvo3dZl.js","/assets/SkillLispPage-Ute06lM5.js","/assets/SkillsPage-Dnzmy_6y.js","/assets/Sp3ChangesPage-BZ_G8NHR.js","/assets/Sp484ChangesPage-CMk3dMIX.js","/assets/Sp486ChangesPage-o4Ss5lRn.js","/assets/Sp6ChangesPage-BxOym6fn.js","/assets/Sp7ChangesPage-DDkmiF5q.js","/assets/VerificationPage-B2EM2aeA.js","/assets/arrow-left-Bi4toOlX.js","/assets/arrow-right-DG1RBNJk.js","/assets/arrow-up-1h8uG582.js","/assets/book-open-Bd7yekyX.js","/assets/check-C83aD06-.js","/assets/chevron-left-D6fE4grs.js","/assets/circle-x-BPiKf2Il.js","/assets/clipboard-paste-B9ySFlYH.js","/assets/copy-CcyUGZ69.js","/assets/data-CGMAAmZf.js","/assets/download-eTXr_Mlf.js","/assets/dxf-B3HqQZ7n.js","/assets/dxf-BbyLcTji.js","/assets/dxf2000-Do3Za30o.js","/assets/external-link-DCaCQdZ1.js","/assets/eye-DRvQpiNl.js","/assets/file-up-BrwmDgLq.js","/assets/format-DaUMtOpn.js","/assets/formula-57-njbi_.js","/assets/formula-B5Y2thUv.js","/assets/formula-BOGfhHcc.js","/assets/formula-BPGM3N0d.js","/assets/formula-BUz2-O84.js","/assets/formula-BkZTVisN.js","/assets/formula-CM1MGHj3.js","/assets/formula-CNgbR81B.js","/assets/formula-DMQSTkgd.js","/assets/formula-DPRlKpZD.js","/assets/formula-D_EX8lPa.js","/assets/formula-DxTqoP9z.js","/assets/formula-XzrXojpn.js","/assets/html-CKuHtFmo.js","/assets/import-BsQS5gFX.js","/assets/index-CDenYK7y.css","/assets/index-CSSNEEI2.js","/assets/inter-cyrillic-ext-wght-normal-BOeWTOD4.woff2","/assets/inter-cyrillic-wght-normal-DqGufNeO.woff2","/assets/inter-greek-ext-wght-normal-DlzME5K_.woff2","/assets/inter-greek-wght-normal-CkhJZR-_.woff2","/assets/inter-latin-ext-wght-normal-DO1Apj_S.woff2","/assets/inter-latin-wght-normal-Dx4kXJAl.woff2","/assets/inter-vietnamese-wght-normal-CBcvBZtf.woff2","/assets/layers-DD7yvgW2.js","/assets/minus-BC-vnqOh.js","/assets/ocr-DATAwxUc.js","/assets/pdf-DrJdzTYe.js","/assets/pdf.worker.min-CHFwMXne.mjs","/assets/plural-whhAQkHA.js","/assets/plus-1AnVWEXe.js","/assets/rename-DN00ADny.js","/assets/share-BF_tSRGP.js","/assets/shield-check-DXtMOSM9.js","/assets/sp3-2026-C9fIacyZ.js","/assets/sp6-2025-D4QPF8qm.js","/assets/sparkles-j5_2D8Ys.js","/assets/storage-Db_Zx7tt.js","/assets/storage-Swi_07OT.js","/assets/storage-Y6DOZorC.js","/assets/symbols-CLGDnKQg.js","/assets/trash-2-BTrZucWe.js","/assets/triangle-alert-CDIA3gg8.js","/assets/vendor-cy7HkTES.js","/assets/worker-DH9B50eA.js","/assets/x-P0IRx264.js"];

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
