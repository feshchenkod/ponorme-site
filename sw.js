/* ПоНорме — офлайн-кэш (сгенерировано scripts/sw-build.mjs, версия 03b533107e60) */
const VERSION = "pnrm-v-03b533107e60";
const STATIC = "pnrm-static-v1";
const PRECACHE = ["/","/favicon.svg","/logo.svg","/logo-dark.svg","/site.webmanifest","/assets/AboutPage-DEKg41I5.js","/assets/CalcCard-CJWozEP3.js","/assets/CalcSearch-CQ-AnKn_.js","/assets/Calculator-7gm-ijxF.js","/assets/Calculator-B-4krOq8.js","/assets/Calculator-BB-kggHC.js","/assets/Calculator-BC03j8LM.js","/assets/Calculator-BIK8HBmM.js","/assets/Calculator-BJ769Rs_.js","/assets/Calculator-BJnmECs1.js","/assets/Calculator-C27ZSBzq.js","/assets/Calculator-C5PBHuU0.js","/assets/Calculator-CDjmEZR6.js","/assets/Calculator-CELfaPw_.js","/assets/Calculator-CZAX-m-c.js","/assets/Calculator-CnG6-c21.js","/assets/Calculator-CsQk09ZI.js","/assets/Calculator-D4iQOfRM.js","/assets/Calculator-DJ_Cxhcv.js","/assets/Calculator-DWKFGOgZ.js","/assets/Calculator-Diu8eVPa.js","/assets/Calculator-DjgaKE12.js","/assets/Calculator-Dpd_muRM.js","/assets/Calculator-OlMFMSUx.js","/assets/Calculator-jKY49K88.js","/assets/Calculator-oV96XKN1.js","/assets/Calculator-uF-ul-pf.js","/assets/Calculator-v9ewT9HR.js","/assets/CalculatorPage-Cw99TGYr.js","/assets/CalculatorsPage-LzGwq3Gx.js","/assets/CategoryPage-B0kzaKK4.js","/assets/CodeBlock-6tfF_U6H.js","/assets/Conclusion-DNuzAi2A.js","/assets/HomePage-D5UpKOlJ.js","/assets/NormBadge-DCt11iSJ.js","/assets/NormsPage-NIfdjYcG.js","/assets/NotFoundPage-a5dK4dVm.js","/assets/NumberField-D8qqHgb2.js","/assets/PracticeQuiz-NBkPOLK7.js","/assets/PrivacyPage-DhGiKRHS.js","/assets/RangeScale-jSRY5Eay.js","/assets/ReportDoc-MbdUjkR1.js","/assets/ReportIssue-BvJxYK_u.js","/assets/ResultCard-Cb3Ro7y7.js","/assets/SegmentedControl-CZSsDjjb.js","/assets/SelectField-DLKIPgGz.js","/assets/SkillCadLessonPage-CwzPeIyL.js","/assets/SkillCadPage-N8ajUvZS.js","/assets/SkillFirePage-DU5IVwKy.js","/assets/SkillLispLessonPage-BP6ITfCh.js","/assets/SkillLispPage-CqWLhQCF.js","/assets/SkillsPage-CwzQMYzR.js","/assets/Sp10ChangesPage-CzTaw8iL.js","/assets/Sp3ChangesPage-BocAo0Jq.js","/assets/Sp484ChangesPage-DhOcQQIc.js","/assets/Sp485ChangesPage-C1su4PZD.js","/assets/Sp486ChangesPage-D632P-jC.js","/assets/Sp6ChangesPage-BSbXwEgO.js","/assets/Sp7ChangesPage-CPe_fcNz.js","/assets/StickyVerdict-8IsyYWI0.js","/assets/VerificationPage-DqEg9KRH.js","/assets/arrow-left-CuyyZmC3.js","/assets/arrow-right-CIdcyi1g.js","/assets/arrow-up-NeMARXF1.js","/assets/book-open-2IWCEMKg.js","/assets/check-BNiB_h7n.js","/assets/chevron-left-BloCA6rB.js","/assets/circle-x-CeR4kNts.js","/assets/clipboard-paste-Dun3MoUY.js","/assets/clock-CHy-StZv.js","/assets/copy-C9UBV9Gb.js","/assets/data-BYqb-nwr.js","/assets/download-DmkJe3cB.js","/assets/dxf-B20PbRNK.js","/assets/dxf-BbyLcTji.js","/assets/dxf2000-NXVNwYwS.js","/assets/external-link-BWEFerVJ.js","/assets/eye-Cmad-4vt.js","/assets/file-up-BRvLXxHK.js","/assets/format-D1k5F0iu.js","/assets/formula-B8Y-JLdg.js","/assets/formula-BF2DtwQ1.js","/assets/formula-BLXk3Vqa.js","/assets/formula-BkZTVisN.js","/assets/formula-Bpez8FJ9.js","/assets/formula-CEBBQt1s.js","/assets/formula-CIKA7FcM.js","/assets/formula-CPKG7gvi.js","/assets/formula-CfLP9i6R.js","/assets/formula-CpHLUGGX.js","/assets/formula-D6pyXo0W.js","/assets/formula-DOrPyETo.js","/assets/formula-KThNUEED.js","/assets/formula-zqi7BfEy.js","/assets/html-CKuHtFmo.js","/assets/import-BsQS5gFX.js","/assets/index-DMKLb401.css","/assets/index-rvfkNJFT.js","/assets/inter-cyrillic-ext-wght-normal-BOeWTOD4.woff2","/assets/inter-cyrillic-wght-normal-DqGufNeO.woff2","/assets/inter-greek-ext-wght-normal-DlzME5K_.woff2","/assets/inter-greek-wght-normal-CkhJZR-_.woff2","/assets/inter-latin-ext-wght-normal-DO1Apj_S.woff2","/assets/inter-latin-wght-normal-Dx4kXJAl.woff2","/assets/inter-vietnamese-wght-normal-CBcvBZtf.woff2","/assets/layers-DD7yvgW2.js","/assets/minus-BhGxQHSJ.js","/assets/ocr-DATAwxUc.js","/assets/pdf-0FNnJOUO.js","/assets/pdf.worker.min-CHFwMXne.mjs","/assets/plural-whhAQkHA.js","/assets/plus-qVbjOqoY.js","/assets/rename-DN00ADny.js","/assets/share-CPtF-qsv.js","/assets/shield-check-swDZ55EU.js","/assets/sp3-2026-C9fIacyZ.js","/assets/sp6-2025-DkABLIUq.js","/assets/sparkles-BO-95rZp.js","/assets/storage-DXtyF0na.js","/assets/storage-Db_Zx7tt.js","/assets/storage-Y6DOZorC.js","/assets/symbols-BEL__pMj.js","/assets/trash-2-D7XRVLY1.js","/assets/triangle-alert-xzoEGjrE.js","/assets/vendor-BjZ7n3X7.js","/assets/wand-sparkles-MbtLCQ6L.js","/assets/worker-DH9B50eA.js","/assets/x-DcO9Uu4_.js"];

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
