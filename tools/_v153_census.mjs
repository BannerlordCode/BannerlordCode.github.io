// Report-only census of content/v1.5.3 under the HARD PREMISE.
//
// Classification is PROVENANCE-first: a page is HANDWRITTEN only if it is on the
// known handwritten roster (produced by an agent reading source), otherwise it is
// GENERATED. Pattern signals are computed too and printed as a cross-check, so a
// pattern miss cannot silently promote a generated page to handwritten.
//
// Usage: node tools/_v153_census.mjs
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, posix } from 'node:path';

const SITE = 'content/v1.5.3';
const REPO = process.cwd();

// ---- provenance roster (agent-written; each was read against 1.5.3 source) ----
const HANDWRITTEN_DEEP = [
  'zh/api/campaign/Campaign.md','zh/api/campaign/CampaignData.md','zh/api/campaign/CampaignGameStarter.md',
  'zh/api/campaign/CampaignGameMode.md','zh/api/campaign/CampaignEventDispatcher.md','zh/api/campaign/CampaignEventReceiver.md',
  'zh/api/campaign/CampaignPeriodicEventManager.md','zh/api/campaign/MBCampaignEvent.md','zh/api/campaign/CampaignEvents.md',
  'zh/api/campaign/CampaignBehaviorBase.md','zh/api/campaign/GameModels.md',
  'zh/api/campaign-ext/ICampaignBehavior.md','zh/api/campaign-ext/CampaignBehaviorManager.md',
  'zh/api/campaign-ext/DefaultSettlementProsperityModel.md',
  'zh/api/core-extra/GameModel.md','zh/api/core-extra/MBGameModel.md','zh/api/core-extra/GameModelsManager.md',
  'zh/api/core/MBSubModuleBase.md','zh/api/mission/Mission.md','zh/api/mission/MissionState.md',
  'zh/api/gui/ScreenManager.md','zh/api/gui/ScreenBase.md','zh/api/engine/GauntletLayer.md',
  'zh/api/save-system/SaveManager.md','zh/api/save-system/ISaveDriver.md',
  'zh/api/save-system/SaveableTypeDefiner.md','zh/api/save-system/SaveContext.md',
];
const HANDWRITTEN_STRUCT = [];
for (const lang of ['zh', 'en']) {
  HANDWRITTEN_STRUCT.push(`${lang}/_index.md`);
  for (const a of ['_index', 'sdk-overview', 'module-map', 'migration-from-1.4.5']) {
    HANDWRITTEN_STRUCT.push(`${lang}/architecture/${a}.md`);
  }
}
const ROSTER = new Set([...HANDWRITTEN_DEEP, ...HANDWRITTEN_STRUCT].map((p) => posix.join('content/v1.5.3', p)));

// ---- pattern cross-check ------------------------------------------------------
const P = {
  'skeleton-self-description': [/自动生成的初始占位段落/, /自动生成类参考/, /Auto-generated stub for/,
    /Auto-generated initial placeholder/, /Auto-generated index of/, /Every leaf page is a stub/,
    /后续波次会替换为手写深写/, /后续由深写波次替换/],
  'policy-boilerplate': [/阅读时先通过属性了解状态/, /是\s+TaleWorlds\.\S+\s+(?:下|中)的公开类型/,
    /null;\s*\/\/\s*替换/, /\bSomeValue\b/, /\bservice\s*=\s*\.\.\./u, /从实际子系统 API/],
  'generator-block': [/^## 模块心智模型\s*$/m, /<!-- BEGIN SECTION INDEX -->/, /<!-- BEGIN CARVE-OUT NOTE -->/],
};

function walk(dir, acc = []) {
  for (const name of readdirSync(dir)) {
    if (name.startsWith('.')) continue;
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, acc);
    else if (name.endsWith('.md')) acc.push(p.replace(/\\/g, '/'));
  }
  return acc;
}

const files = walk(join(REPO, SITE)).sort();
const rows = files.map((f) => {
  const rel = posix.join('content/v1.5.3', posix.relative((REPO + '/content/v1.5.3').replace(/\\/g, '/'), f));
  const text = readFileSync(f, 'utf8');
  const hits = Object.entries(P).filter(([, rs]) => rs.some((r) => r.test(text))).map(([k]) => k);
  return { rel, text, hits, handwritten: ROSTER.has(rel) };
});

const hand = rows.filter((r) => r.handwritten);
const gen = rows.filter((r) => !r.handwritten);

console.log(`TREE ${SITE}  total=${rows.length}\n`);
console.log('                    handwritten   generated');
for (const lang of ['zh', 'en']) {
  const h = hand.filter((r) => r.rel.startsWith(`content/v1.5.3/${lang}/`)).length;
  const g = gen.filter((r) => r.rel.startsWith(`content/v1.5.3/${lang}/`)).length;
  console.log(`  ${lang}`.padEnd(20) + String(h).padStart(10) + String(g).padStart(12));
}
console.log(`  ${'TOTAL'}`.padEnd(20) + String(hand.length).padStart(10) + String(gen.length).padStart(12));

// roster integrity
const missingOnDisk = [...ROSTER].filter((r) => !files.some((f) => f.endsWith(r.replace('content/v1.5.3/', ''))));
console.log(`\nroster entries=${ROSTER.size}  missing on disk=${missingOnDisk.length}${missingOnDisk.length ? ' -> ' + missingOnDisk.join(', ') : ''}`);
const flagged = gen.filter((r) => r.hits.length === 0);
console.log(`generated pages with NO pattern signal (detector blind spots): ${flagged.length}`);
for (const f of flagged.slice(0, 10)) console.log(`   ${f.rel}`);
const clean = hand.filter((r) => r.hits.includes('skeleton-self-description') || r.hits.includes('generator-block'));
console.log(`handwritten pages carrying generator signals (possible contamination): ${clean.length}`);
for (const c of clean) console.log(`   ${c.rel}  [${c.hits.join(',')}]`);

// ---- handwritten -> generated links ------------------------------------------
const genSet = new Set(gen.map((r) => r.rel));
const toRoute = (rel) => {
  const r2 = rel.replace('content/v1.5.3/', '');
  const d = posix.dirname(r2);
  return posix.basename(r2) === '_index.md' ? d + '/' : r2.replace(/\.md$/, '/');
};
const routes = new Map(rows.map((r) => [toRoute(r.rel), r.rel]));
const resolve = (route, link) => {
  const segs = route.split('/').filter(Boolean);
  for (const part of link.split('#')[0].split('?')) {
    for (const p of part.split('/')) {
      if (!p || p === '.') continue;
      if (p === '..') segs.pop(); else segs.push(p);
    }
  }
  return segs.join('/');
};
const outbound = [];
for (const r of hand) {
  const route = toRoute(r.rel);
  for (const m of r.text.matchAll(/\[([^\]]*)\]\(([^)\s]+)\)/g)) {
    const href = m[2];
    if (!href || /^[a-z]+:/i.test(href)) continue;
    const hit = routes.get(resolve(route, href)) || routes.get(resolve(route, href) + '/');
    if (hit && genSet.has(hit)) outbound.push({ from: r.rel, href, to: hit });
  }
}
console.log(`\n--- handwritten -> generated links ---`);
console.log(`  occurrences            = ${outbound.length}`);
console.log(`  distinct generated tgt = ${new Set(outbound.map((o) => o.to)).size}`);
const byFile = new Map();
for (const o of outbound) byFile.set(o.from, (byFile.get(o.from) || 0) + 1);
for (const [f, c] of [...byFile].sort((a, b) => b[1] - a[1])) console.log(`  ${String(c).padStart(5)}  ${f}`);
