// r1-coverage-report.mjs
//
// Machine-readable R1 coverage gate (H0 / H10):
//   public business types − (deep_pass page OR handwritten family purpose entry)
//   = remaining gap
//
// Inventory-only tool. Does NOT rewrite any content/** markdown.
//
// Usage (from repo root):
//   node tools/r1-coverage-report.mjs
//   node tools/r1-coverage-report.mjs --version 1.3.15 --lang zh
//   node tools/r1-coverage-report.mjs --api-root content/v1.3.15/zh/api
//
// Inputs:
//   tools/data/type-inventory.json
//   tools/data/s-tier.json
//   content pages under api root (classified inline; same rules as handwritten-coverage.mjs)
//
// Output:
//   tools/data/r1-coverage-report.json
//   stdout summary counts + top gap namespace prefixes

import { readFileSync, writeFileSync, readdirSync, statSync, mkdirSync, existsSync } from 'node:fs';
import { join, relative, dirname, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  classifyPage as classifySharedPage,
  extractFamilyEntries,
  extractPageIdentity,
  isBaseNoiseNamespace as isSharedBaseNoiseNamespace,
  isR1ExtraNoiseNamespace as isSharedR1ExtraNoiseNamespace,
  isBaseNoiseTypeName as isSharedBaseNoiseTypeName,
  isR1ExtraNoiseTypeName as isSharedR1ExtraNoiseTypeName,
  makeTypeIdentity,
  resolveExplicitAlias,
} from './lib/handwritten-policy.mjs';
import {
  checkReport,
  reportMetadata,
  resolveOutputPath,
} from './lib/report-meta.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const DATA_DIR = join(ROOT, 'tools', 'data');
const args = process.argv.slice(2);
const hasFlag = (flag) => args.includes(flag);
function argValue(flag, fallback) {
  const i = args.indexOf(flag);
  if (i >= 0 && args[i + 1]) return args[i + 1];
  return fallback;
}

const VERSION = argValue('--version', '1.3.15');
const LANG = argValue('--lang', 'zh');
const API_ROOT_REL = argValue('--api-root', `content/v${VERSION}/${LANG}/api`);
const GAP_SAMPLE_SIZE = Number(argValue('--gap-sample', '50')) || 50;
const outArg = argValue('--out', null);
const gapOutArg = argValue('--gap-out', null);
const check = hasFlag('--check');
const requireComplete = hasFlag('--require-complete');
const defaultOut = join(DATA_DIR, 'r1-coverage-report.json');
const defaultGapOut = join(DATA_DIR, 'r1-gap-full.json');
const outJson = resolveOutputPath(ROOT, outArg, defaultOut);
const gapOut = resolveOutputPath(ROOT, gapOutArg, defaultGapOut);
const scoped = args.includes('--version') || args.includes('--lang') || args.includes('--api-root');

if ((scoped || outArg || gapOutArg) && (!outArg || !gapOutArg)) {
  console.error('Scoped R1 coverage requires explicit --out and --gap-out paths.');
  process.exit(2);
}

const apiRoot = join(ROOT, API_ROOT_REL);
const reSep = new RegExp(sep === '\\' ? '\\\\' : sep, 'g');

function rel(p) {
  return relative(ROOT, p).replace(reSep, '/');
}

// ---------------------------------------------------------------------------
// Noise filter (align with generate-inventory.mjs + doc-contract platform noise)
// Inventory already strips most of this; re-apply so report stays correct if
// inventory ever includes residual third-party / platform glue.
//
// Two layers for R1 (SP mod deep-body target):
//   1) Base platform noise — never in business inventory counts
//   2) R1-extra noise — still listable as inventory business meta, but OUT of
//      r1Target denominator (multiplayer message spam, music engine, pure IMB*)
// Never treat CampaignSystem / MountAndBlade core gameplay namespaces as noise.
// Page walk + handwritten classification (subset of handwritten-coverage.mjs)
// ---------------------------------------------------------------------------
function walkMd(dir, acc = []) {
  let entries;
  try {
    entries = readdirSync(dir);
  } catch {
    return acc;
  }
  for (const e of entries) {
    if (e.startsWith('.') || e === 'node_modules' || e === 'public') continue;
    const p = join(dir, e);
    let s;
    try {
      s = statSync(p);
    } catch {
      continue;
    }
    if (s.isDirectory()) walkMd(p, acc);
    else if (e.endsWith('.md')) acc.push(p);
  }
  return acc;
}

// Inventory load
// ---------------------------------------------------------------------------
function loadBusinessTypes(version, lang) {
  const invPath = join(DATA_DIR, 'type-inventory.json');
  if (!existsSync(invPath)) {
    console.error(`Missing ${rel(invPath)}. Run: node tools/generate-inventory.mjs`);
    process.exit(2);
  }
  const inv = JSON.parse(readFileSync(invPath, 'utf8'));
  const ver = inv[version];
  if (!ver) {
    console.error(`Version ${version} not in inventory. Keys: ${Object.keys(inv).join(', ')}`);
    process.exit(2);
  }
  const langObj = ver[lang];
  if (!langObj) {
    console.error(`Lang ${lang} not in inventory for ${version}. Keys: ${Object.keys(ver).join(', ')}`);
    process.exit(2);
  }

  /** @type {Map<string, { namespace: string, typeName: string, kind: string, pagePath: string, hasDoc: boolean }>} */
  // byKey = R1 deep-body target only (base noise + R1-extra noise excluded)
  const byKey = new Map(); // `${ns}\0${name}`
  const bySimpleName = new Map(); // typeName -> Set of keys
  let skippedBaseNoise = 0;
  let noiseExcludedExtra = 0;
  let totalInventoryBusiness = 0;

  for (const [ns, types] of Object.entries(langObj)) {
    const baseNs = isSharedBaseNoiseNamespace(ns);
    const extraNs = !baseNs && isSharedR1ExtraNoiseNamespace(ns);

    for (const [typeName, info] of Object.entries(types)) {
      if (baseNs || isSharedBaseNoiseTypeName(typeName)) {
        skippedBaseNoise++;
        continue;
      }

      // Inventory-listable business surface (after base platform noise only)
      totalInventoryBusiness++;

      const extraType = isSharedR1ExtraNoiseTypeName(typeName);
      if (extraNs || extraType) {
        noiseExcludedExtra++;
        continue; // out of R1 deep body target; still counted above as inventory business
      }

      const key = `${ns}\0${typeName}`;
      byKey.set(key, {
        namespace: ns,
        typeName,
        kind: info.kind,
        pagePath: info.pagePath,
        hasDoc: !!info.hasDoc,
      });
      if (!bySimpleName.has(typeName)) bySimpleName.set(typeName, new Set());
      bySimpleName.get(typeName).add(key);
    }
  }

  const r1Target = byKey.size;
  // Backward-compat alias used by older call sites / mental model
  const skippedNoise = skippedBaseNoise;

  return {
    byKey,
    bySimpleName,
    skippedNoise,
    skippedBaseNoise,
    noiseExcludedExtra,
    totalInventoryBusiness,
    r1Target,
  };
}

function loadSTierConfig() {
  const p = join(DATA_DIR, 's-tier.json');
  if (!existsSync(p)) return { names: [], aliases: {} };
  const j = JSON.parse(readFileSync(p, 'utf8'));
  if (Array.isArray(j.names)) return { names: j.names, aliases: j.aliases || {} };
  const out = [];
  if (j.tiers && typeof j.tiers === 'object') {
    for (const arr of Object.values(j.tiers)) {
      if (Array.isArray(arr)) out.push(...arr);
    }
  }
  return { names: [...new Set(out)], aliases: j.aliases || {} };
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
function main() {
  if (!existsSync(apiRoot)) {
    console.error(`API root not found: ${API_ROOT_REL}`);
    process.exit(2);
  }

  const {
    byKey,
    bySimpleName,
    skippedNoise,
    skippedBaseNoise,
    noiseExcludedExtra,
    totalInventoryBusiness,
    r1Target,
  } = loadBusinessTypes(VERSION, LANG);
  const { names: sTier, aliases: sTierAliases } = loadSTierConfig();

  const files = walkMd(apiRoot).sort();
  const deepPassPaths = [];
  const deepPassIdentitySet = new Set();
  const familyPaths = [];
  const qualifiedFamilyEntries = new Map();
  const unqualifiedFamilyEntries = new Map();

  let classCounts = { stub: 0, deep_pass: 0, family_entry_pass: 0, noise: 0 };

  for (const f of files) {
    const text = readFileSync(f, 'utf8');
    const { status } = classifySharedPage(f, text);
    classCounts[status] = (classCounts[status] || 0) + 1;
    const pathRel = rel(f);

    if (status === 'deep_pass') {
      deepPassPaths.push(pathRel);
      const pageIdentity = extractPageIdentity(f, text, { version: VERSION, language: LANG });
      if (pageIdentity) deepPassIdentitySet.add(makeTypeIdentity(pageIdentity));
    } else if (status === 'family_entry_pass') {
      familyPaths.push(pathRel);
      for (const entry of extractFamilyEntries(pathRel, text)) {
        if (entry.namespace) {
          const identity = makeTypeIdentity({
            version: VERSION,
            language: LANG,
            namespace: entry.namespace,
            typeName: entry.typeName,
          });
          if (!qualifiedFamilyEntries.has(identity)) qualifiedFamilyEntries.set(identity, entry);
        } else if (!unqualifiedFamilyEntries.has(entry.typeName)) {
          unqualifiedFamilyEntries.set(entry.typeName, entry);
        }
      }
    }
  }

  // Mark inventory types (R1 target set only)
  const coveredDeepKeys = new Set();
  const coveredFamilyKeys = new Set();
  const gapEntries = [];

  for (const [key, info] of byKey) {
    const { typeName, namespace } = info;
    let via = null;
    const identity = makeTypeIdentity({
      version: VERSION,
      language: LANG,
      namespace,
      typeName,
    });
    if (deepPassIdentitySet.has(identity)) {
      via = 'deep';
      coveredDeepKeys.add(key);
    } else if (
      qualifiedFamilyEntries.has(identity) ||
      ((bySimpleName.get(typeName)?.size || 0) === 1 && unqualifiedFamilyEntries.has(typeName))
    ) {
      via = 'family';
      coveredFamilyKeys.add(key);
    }
    if (!via) {
      gapEntries.push({
        typeName,
        namespace,
        kind: info.kind,
        pagePath: info.pagePath,
        hasDoc: info.hasDoc,
      });
    }
  }

  // Prefer stable sort: namespace then typeName
  gapEntries.sort((a, b) => {
    const c = a.namespace.localeCompare(b.namespace);
    return c !== 0 ? c : a.typeName.localeCompare(b.typeName);
  });

  // totalBusiness / coverage denominator = r1Target (SP mod deep-body set)
  const totalBusiness = r1Target;
  const coveredDeep = coveredDeepKeys.size;
  const coveredFamily = coveredFamilyKeys.size;
  // Keys covered by both counted once in coveredDeep only (deep wins)
  const covered = coveredDeep + coveredFamily;
  const gap = gapEntries.length;

  // S-tier requires standalone deep pages; family entries never satisfy it.
  const deepCoveredSimple = new Set(
    [...coveredDeepKeys].map((key) => byKey.get(key)?.typeName).filter(Boolean)
  );
  const sTierInScope = sTier.filter((name) =>
    bySimpleName.has(resolveExplicitAlias(name, sTierAliases))
  );
  const sTierMiss = sTierInScope.filter(
    (name) => !deepCoveredSimple.has(resolveExplicitAlias(name, sTierAliases))
  );

  // Gap categories by top-level / second-level namespace prefix
  const gapByPrefix = new Map();
  for (const g of gapEntries) {
    const segs = g.namespace.split('.');
    const prefix =
      segs.length >= 2 ? `${segs[0]}.${segs[1]}` : segs[0] || '(empty)';
    gapByPrefix.set(prefix, (gapByPrefix.get(prefix) || 0) + 1);
  }
  const gapCategories = [...gapByPrefix.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .map(([prefix, count]) => ({ prefix, count }));

  const gapSample = gapEntries.slice(0, GAP_SAMPLE_SIZE).map((g) => ({
    typeName: g.typeName,
    namespace: g.namespace,
    kind: g.kind,
  }));

  const report = {
    generatedAt: new Date().toISOString(),
    version: VERSION,
    lang: LANG,
    apiRoot: API_ROOT_REL.replace(/\\/g, '/'),
    formula:
      'r1Target (inventory business − R1-extra noise) − (deep_pass page OR handwritten family purpose entry) = remaining gap',
    totalInventoryBusiness,
    r1Target,
    noiseExcludedExtra,
    totalBusiness,
    coveredDeep,
    coveredFamily,
    covered,
    gap,
    coverageRate: totalBusiness ? Number((covered / totalBusiness).toFixed(6)) : 0,
    gapSample,
    sTierMiss,
    sTierInScope: sTierInScope.length,
    sTierCovered: sTierInScope.length - sTierMiss.length,
    gapCategoriesTop: gapCategories.slice(0, 40),
    meta: {
      ...reportMetadata({
        root: ROOT,
        scope: API_ROOT_REL.replace(/\\/g, '/'),
        version: VERSION,
        language: LANG,
        files: [...files, join(DATA_DIR, 'type-inventory.json')],
      }),
      inventorySkippedNoise: skippedNoise,
      inventorySkippedBaseNoise: skippedBaseNoise,
      noiseExcludedExtra,
      totalInventoryBusiness,
      r1Target,
      // Pre-extra-noise comparison anchors (previous report used inventory as denominator)
      previousTotalBusiness: totalInventoryBusiness,
      pageClassCounts: classCounts,
      deepPassPages: deepPassPaths.length,
      familyEntryPages: familyPaths.length,
      familyPurposeTypeNames: qualifiedFamilyEntries.size + unqualifiedFamilyEntries.size,
      deepPassTypeNames: deepCoveredSimple.size,
      r1ExtraNoise:
        'NetworkMessages.*; Messages.From*/To*/BattleServer*/CustomBattleServer*/Lobby* (+ remaining Messages.*); top-level BattleServer*/CustomBattleServer*/Lobby*; psai.*; type IMB*/BattleServer*/CustomBattleServer*/Lobby*',
      note:
        'COVERED if an R1-target inventory identity has a deep_pass page declaring the same qualified (version, language, namespace, typeName) identity OR a qualified handwritten family entry. Unqualified family entries count only when the simple name is unique in inventory. Formulaic purposes do not count. S-tier requires standalone deep pages. R1-extra noise stays inventory-listable but is out of the denominator.',
    },
  };

  // Full gap export for H9 waves (second-level namespace buckets)
  const gapByNs2 = new Map();
  for (const g of gapEntries) {
    const segs = g.namespace.split('.');
    const ns2 =
      segs.length >= 3
        ? `${segs[0]}.${segs[1]}.${segs[2]}`
        : segs.length >= 2
          ? `${segs[0]}.${segs[1]}`
          : segs[0] || '(empty)';
    if (!gapByNs2.has(ns2)) gapByNs2.set(ns2, []);
    gapByNs2.get(ns2).push(`${g.namespace}.${g.typeName}`);
  }
  const gapFull = {
    generatedAt: report.generatedAt,
    meta: report.meta,
    r1Target,
    covered,
    gap,
    byNamespaceL2: [...gapByNs2.entries()]
      .sort((a, b) => b[1].length - a[1].length || a[0].localeCompare(b[0]))
      .map(([ns, types]) => ({ namespace: ns, count: types.length, types })),
    allGaps: gapEntries.map((g) => ({
      typeName: g.typeName,
      namespace: g.namespace,
      kind: g.kind,
      pagePath: g.pagePath,
    })),
  };
  const gapFullPath = join(DATA_DIR, 'r1-gap-full.json');
  if (check) {
    if (!checkReport(outJson, report) || !checkReport(gapOut, gapFull)) process.exitCode = 1;
  } else {
    const parent = outJson.slice(0, Math.max(outJson.lastIndexOf('/'), outJson.lastIndexOf('\\')));
    const gapParent = gapOut.slice(0, Math.max(gapOut.lastIndexOf('/'), gapOut.lastIndexOf('\\')));
    if (!existsSync(parent)) mkdirSync(parent, { recursive: true });
    if (!existsSync(gapParent)) mkdirSync(gapParent, { recursive: true });
    writeFileSync(outJson, JSON.stringify(report, null, 2), 'utf8');
    writeFileSync(gapOut, JSON.stringify(gapFull, null, 2), 'utf8');
    console.log(`Wrote ${rel(gapOut)} (${gap} gaps, ${gapByNs2.size} L2 buckets)`);
  }

  if (requireComplete && gap > 0) {
    console.error(`R1 coverage incomplete: ${gap} gaps remain.`);
    process.exitCode = 1;
  }

  // Stdout summary
  console.log('R1 coverage report');
  console.log('==================');
  console.log(`version/lang: ${VERSION}/${LANG}`);
  console.log(`api root:     ${API_ROOT_REL}`);
  console.log(`totalInventoryBusiness: ${totalInventoryBusiness}`);
  console.log(`noiseExcludedExtra:     ${noiseExcludedExtra}`);
  console.log(`r1Target:               ${r1Target}`);
  console.log(`totalBusiness(=r1):     ${totalBusiness}`);
  console.log(`coveredDeep:   ${coveredDeep}`);
  console.log(`coveredFamily: ${coveredFamily}`);
  console.log(`covered:       ${covered}`);
  console.log(`gap:           ${gap}`);
  console.log(
    `coverageRate:  ${totalBusiness ? ((100 * covered) / totalBusiness).toFixed(2) : 0}%`
  );
  console.log(
    `sTier:         ${report.sTierCovered}/${report.sTierInScope} covered, miss=${sTierMiss.length}`
  );
  if (sTierMiss.length) {
    console.log(`sTierMiss:     ${sTierMiss.join(', ')}`);
  }
  console.log('');
  console.log('Top gap categories (namespace prefix):');
  for (const { prefix, count } of gapCategories.slice(0, 15)) {
    console.log(`  ${String(count).padStart(5)}  ${prefix}`);
  }
  console.log('');
  console.log(`gapSample (${gapSample.length}):`);
  for (const g of gapSample.slice(0, 20)) {
    console.log(`  ${g.namespace}.${g.typeName} (${g.kind})`);
  }
  if (gapSample.length > 20) console.log(`  ... +${gapSample.length - 20} more in JSON`);
  console.log('');
  if (!check) console.log(`Wrote ${rel(outJson)}`);
}

main();
