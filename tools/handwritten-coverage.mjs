// Handwritten-coverage gate (H0-D).
// Phase 1: classify existing class pages under content/v1.3.15/zh/api/
// as stub | deep_pass | family_entry_pass | noise.
// Does NOT rewrite any content pages — inventory / gate only.
//
// Usage:
//   node tools/handwritten-coverage.mjs
//   node tools/handwritten-coverage.mjs --root content/v1.3.15/zh/api
//
// Writes tools/data/handwritten-coverage.json

import { readFileSync, writeFileSync, readdirSync, statSync, mkdirSync, existsSync } from 'fs';
import { join, relative, dirname, sep, basename } from 'path';

const ROOT = join(import.meta.dirname, '..');
const args = process.argv.slice(2);
const rootArg = (() => {
  const i = args.indexOf('--root');
  if (i >= 0 && args[i + 1]) return args[i + 1];
  return 'content/v1.3.15/zh/api';
})();
const scanRoot = join(ROOT, rootArg);
const outDir = join(ROOT, 'tools', 'data');
const outJson = join(outDir, 'handwritten-coverage.json');
const reSep = new RegExp(sep === '\\' ? '\\\\' : sep, 'g');

function rel(p) {
  return relative(ROOT, p).replace(reSep, '/');
}

function walk(dir, acc = []) {
  let entries;
  try {
    entries = readdirSync(dir);
  } catch {
    return acc;
  }
  for (const e of entries) {
    if (e.startsWith('.') || e === 'public' || e === 'node_modules') continue;
    const p = join(dir, e);
    let s;
    try {
      s = statSync(p);
    } catch {
      continue;
    }
    if (s.isDirectory()) walk(p, acc);
    else if (e.endsWith('.md')) acc.push(p);
  }
  return acc;
}

function sectionBody(text, headingRe) {
  const m = text.match(headingRe);
  if (!m) return null;
  const start = m.index + m[0].length;
  const rest = text.slice(start);
  const next = rest.search(/^#{1,2}\s+/m);
  return (next < 0 ? rest : rest.slice(0, next)).trim();
}

function stripMdNoise(s) {
  return s
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`[^`]+`/g, ' ')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/[*_>#|-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

const MENTAL_HEADING_RE = /^#{2}\s+(?:心智模型|Mental\s*Model)\s*$/imu;
const DEP_OR_SEE_HEADING_RE =
  /^#{2}\s+(?:依赖|依赖关系|依赖图|依赖关联|Dependencies|Dependency|参见|See\s*Also|Related)\s*$/imu;
const OVERVIEW_HEADING_RE = /^#{2}\s+(?:概述|Overview)\s*$/imu;

// Stub detectors (any hit = stub unless strong deep signals override).
const STUB_PATTERNS = [
  { id: 'mental-boilerplate-zh', re: /阅读时先通过属性了解状态/u },
  { id: 'mental-boilerplate-en', re: /Read properties (?:first )?to understand state|Read properties for state and methods for actions/iu },
  { id: 'overview-public-type-zh', re: /是\s+TaleWorlds\.\S+\s+下的公开类型/u },
  { id: 'overview-public-type-zh-alt', re: /是\s+TaleWorlds\.\S+\s+中的公开类型/u },
  { id: 'overview-public-type-en', re: /is a public type (?:in|under)\s+TaleWorlds\.\S+/iu },
  { id: 'placeholder-null-replace', re: /null;\s*\/\/\s*替换/u },
  { id: 'placeholder-somevalue', re: /\bSomeValue\b/ },
  { id: 'placeholder-service-ellipsis', re: /\bservice\s*=\s*\.\.\./u },
  { id: 'placeholder-service-assign', re: /\bservice\s*=\s*(?:null|Get\.\.\.)/u },
  { id: 'generic-subsystem-acquire', re: /从实际子系统 API[^\n]*获取[^\n]*实例/u },
  { id: 'generic-subsystem-acquire-en', re: /Obtain an instance of this type from the relevant subsystem API/iu },
];

const ZH_FORMULAIC_PURPOSE = [
  /^处理\s*['"`]?[^'"`]{1,80}['"`]?\s*相关[逻邏]辑[。；]?$/u,
  /^获取\s*['"`]?[^'"`]{1,80}['"`]?\s*的当前值[。；]?$/u,
  /^设置\s*['"`]?[^'"`]{1,80}['"`]?\s*(?:的当前值|的值|状态|数据)[。；]?$/u,
  /^重新计算并更新[^\n。]{0,60}的最新表示[。；]?$/u,
  /^为\s+.+\s+赋新值，并同步更新对象内部状态[。；]?$/u,
  /^返回当前对象中[^\n。]{0,60}的(?:结果|值)[。；]?$/u,
];

const BOILERPLATE_MENTAL = [
  /^阅读时先通过属性了解状态/,
  /^Read properties/,
  /^先从命名空间/,
  /^Start from namespace/,
  /入口或数据节点/,
  /entry point or data node/i,
];

function getTypeLine(text) {
  const m = text.match(/\*\*(?:Type|类型)[：:]\*\*\s*(.+)$/m);
  return m ? m[1].trim() : '';
}

function getTitle(text) {
  const fm = text.match(/^---\r?\n[\s\S]*?^title:\s*"([^"]+)"/m);
  if (fm) return fm[1].trim();
  const h1 = text.match(/^#\s+(.+)$/m);
  return h1 ? h1[1].trim() : '';
}

function countMdLinks(section) {
  if (!section) return 0;
  const re = /\[[^\]]+\]\([^)]+\)/g;
  return (section.match(re) || []).length;
}

function extractPurposes(text) {
  const purposes = [];
  const re = /\*\*用途\s*(?:\/\s*Purpose)?[：:]\*\*\s*(.+)$/gimu;
  let m;
  while ((m = re.exec(text))) purposes.push(m[1].trim());
  return purposes;
}

function hasRealCsharpExample(text) {
  const re = /```csharp\r?\n([\s\S]*?)```/gi;
  let m;
  while ((m = re.exec(text))) {
    const body = m[1];
    if (/null;\s*\/\/\s*替换|SomeValue|service\s*=\s*\.\.\.|Get\.\.\.Implementation/u.test(body)) {
      continue;
    }
    // Real-ish: member access or known subsystem path, not only comments.
    const code = body
      .split(/\r?\n/)
      .map((l) => l.replace(/\/\/.*$/, '').trim())
      .filter(Boolean)
      .join('\n');
    if (!code) continue;
    if (
      /\b(?:Campaign|Mission|Game|Hero|SaveManager|MBObjectManager|Agent|MobileParty|ScreenManager|ScreenBase|GauntletLayer|ViewModel|InformationManager)\b/.test(code) &&
      /\.\w+/.test(code)
    ) {
      return true;
    }
    // Non-placeholder multi-statement usage
    if (code.split(/\n/).length >= 3 && !/null;\s*\/\//.test(body) && /\.\w+\s*\(/.test(code)) {
      return true;
    }
  }
  return false;
}

function isNoiseName(pathRel, title) {
  const base = basename(pathRel, '.md');
  // NOTE: do NOT bare-match /Steamworks/ — it false-positives SteamWorkshop (SP workshop tool hub).
  // Align with tools/r1-coverage-report.mjs isNoiseName.
  const s = pathRel + title;
  if (/AutoGenerated|Newtonsoft|Platform\.|GauntletUI\.PrefabSystem\.Generated/i.test(s)) {
    return true;
  }
  if (/Steamworks(\.|\/|$)/i.test(s) && !/SteamWorkshop/i.test(s)) {
    return true;
  }
  if (/^IMB[A-Z]/.test(base) && /\/native\//.test(pathRel)) return false; // keep classifiable
  return false;
}

function isFamilyIndex(pathRel, text) {
  if (basename(pathRel) !== '_index.md') return false;
  // Handwritten family hub: has mental model + multi-row type table or many type links
  const mental = sectionBody(text, MENTAL_HEADING_RE);
  const mentalPlain = mental ? stripMdNoise(mental) : '';
  const hasMental = mentalPlain.length > 80 && !BOILERPLATE_MENTAL.some((re) => re.test(mentalPlain));
  const tableRows = (text.match(/^\|[^|\n]+\|[^|\n]+\|/gm) || []).length;
  const typeLinks = (text.match(/\[[A-Za-z_][\w.]*\]\([^)]+\)/g) || []).length;
  if (hasMental && (tableRows >= 5 || typeLinks >= 8)) return true;
  // Short index with only generated link lists → still family shell, not deep class
  if (tableRows >= 3 || typeLinks >= 5) return true;
  return false;
}

function classify(filePath, text) {
  const pathRel = rel(filePath);
  const title = getTitle(text);
  const typeLine = getTypeLine(text);
  const isIndex = basename(filePath) === '_index.md';

  if (isNoiseName(pathRel, title)) {
    return { status: 'noise', reasons: ['noise-name'] };
  }

  if (isIndex) {
    if (isFamilyIndex(pathRel, text)) {
      return { status: 'family_entry_pass', reasons: ['family-index'] };
    }
    return { status: 'noise', reasons: ['section-index'] };
  }

  // Non-class pages under api/ (guides fragments etc.)
  if (!typeLine) {
    return { status: 'noise', reasons: ['no-type-metadata'] };
  }

  const mental = sectionBody(text, MENTAL_HEADING_RE);
  const mentalPlain = mental ? stripMdNoise(mental) : '';
  const depOrSee = sectionBody(text, DEP_OR_SEE_HEADING_RE);
  const depLinks = countMdLinks(depOrSee);
  const overview = sectionBody(text, OVERVIEW_HEADING_RE);
  const overviewPlain = overview ? stripMdNoise(overview) : '';
  const purposes = extractPurposes(text);
  const formulaicPurposes = purposes.filter((p) => ZH_FORMULAIC_PURPOSE.some((re) => re.test(p)));
  const realExample = hasRealCsharpExample(text);

  const stubHits = [];
  for (const { id, re } of STUB_PATTERNS) {
    if (re.test(text)) stubHits.push(id);
  }

  if (!mental) stubHits.push('missing-mental-model-section');
  else if (mentalPlain.length < 40) stubHits.push('empty-or-tiny-mental-model');
  else if (BOILERPLATE_MENTAL.some((re) => re.test(mentalPlain))) stubHits.push('boilerplate-mental-model');

  if (!depOrSee) stubHits.push('missing-dependency-or-see-section');
  else if (depLinks < 1) stubHits.push('dependency-section-no-links');

  if (formulaicPurposes.length > 0 && formulaicPurposes.length >= Math.max(1, Math.floor(purposes.length * 0.5))) {
    stubHits.push('formulaic-purposes-majority');
  }

  // Overview that is only the public-type one-liner
  if (
    overviewPlain &&
    overviewPlain.length < 120 &&
    /是\s+TaleWorlds\.\S+\s+(?:下|中)的公开类型|is a public type (?:in|under)\s+TaleWorlds/iu.test(overviewPlain)
  ) {
    if (!stubHits.includes('overview-public-type-only')) stubHits.push('overview-public-type-only');
  }

  // Strong deep_pass criteria (overrides weak stub noise when all true)
  const mentalReal =
    mental &&
    mentalPlain.length > 80 &&
    !BOILERPLATE_MENTAL.some((re) => re.test(mentalPlain)) &&
    !/阅读时先通过属性了解状态/.test(mental);
  const depOk = depOrSee && depLinks >= 2;
  const overviewNotOnlyPublicType =
    overviewPlain &&
    overviewPlain.length > 60 &&
    !/^(?:`?[\w.<>]+`?\s+)?是\s+TaleWorlds\.\S+\s+(?:下|中)的公开类型[。.]?$/u.test(overviewPlain) &&
    !/^`?[\w.<>]+`?\s+is a public type (?:in|under)\s+TaleWorlds\.\S+[.]?$/iu.test(overviewPlain);
  // If no dedicated overview, allow rich mental + body length as substitute
  const overviewOk = overviewNotOnlyPublicType || (!overview && mentalReal && text.length > 2000);

  const deep =
    mentalReal &&
    depOk &&
    realExample &&
    overviewOk &&
    !/null;\s*\/\/\s*替换|\bSomeValue\b/.test(text);

  if (deep) {
    return {
      status: 'deep_pass',
      reasons: [
        'mental>80',
        `dep-or-see-links=${depLinks}`,
        'real-csharp-example',
        overviewOk ? 'overview-ok' : 'overview-skipped',
      ],
      stubHitsIfAny: stubHits,
    };
  }

  if (stubHits.length > 0) {
    return { status: 'stub', reasons: stubHits };
  }

  // Class page without strong stub hits but not deep → incomplete / stub-ish
  return {
    status: 'stub',
    reasons: ['incomplete-not-deep', !realExample ? 'no-real-example' : null, !mentalReal ? 'weak-mental' : null, !depOk ? 'weak-deps' : null].filter(Boolean),
  };
}

// ---------- Run ----------

if (!existsSync(scanRoot)) {
  console.error(`Scan root not found: ${scanRoot}`);
  process.exit(2);
}

const files = walk(scanRoot);
const byStatus = {
  stub: [],
  deep_pass: [],
  family_entry_pass: [],
  noise: [],
  missing: [],
};
const details = [];

for (const f of files) {
  const text = readFileSync(f, 'utf8');
  const result = classify(f, text);
  const pathRel = rel(f);
  byStatus[result.status].push(pathRel);
  details.push({
    path: pathRel,
    status: result.status,
    reasons: result.reasons,
    title: getTitle(text),
  });
}

const counts = Object.fromEntries(Object.entries(byStatus).map(([k, v]) => [k, v.length]));
const total = files.length;
const classLike = total - counts.noise - counts.family_entry_pass;

// Sample stubs (first 40) and full deep_pass list (usually small)
const stubSamples = byStatus.stub.slice(0, 40);
const deepPassPaths = byStatus.deep_pass.slice();

const report = {
  generatedAt: new Date().toISOString(),
  scanRoot: rootArg.replace(/\\/g, '/'),
  totalFiles: total,
  counts,
  classLikeApprox: classLike,
  deep_pass_paths: deepPassPaths,
  stub_sample_paths: stubSamples,
  family_entry_sample_paths: byStatus.family_entry_pass.slice(0, 20),
  noise_sample_paths: byStatus.noise.slice(0, 20),
  note:
    'Phase 1 classifies existing markdown only. `missing` reserved for inventory-vs-docs comparison (not run here). deep_pass requires real mental model (>80 chars), 依赖/参见 with ≥2 links, real csharp example, and non-boilerplate overview.',
};

if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });
writeFileSync(outJson, JSON.stringify(report, null, 2), 'utf8');

console.log(`Handwritten coverage scan: ${rootArg}`);
console.log(`Total md files: ${total}`);
console.log('Counts by status:');
for (const [k, n] of Object.entries(counts)) {
  console.log(`  ${k}: ${n}`);
}
console.log(`deep_pass << total: ${counts.deep_pass} / ${total}`);
console.log(`Wrote ${rel(outJson)}`);
console.log(`deep_pass paths (${deepPassPaths.length}):`);
for (const p of deepPassPaths.slice(0, 30)) console.log(`  ${p}`);
if (deepPassPaths.length > 30) console.log(`  ... +${deepPassPaths.length - 30} more`);
console.log(`stub samples (${stubSamples.length} of ${counts.stub}):`);
for (const p of stubSamples.slice(0, 15)) console.log(`  ${p}`);
