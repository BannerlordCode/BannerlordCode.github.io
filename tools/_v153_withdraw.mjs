// One-shot, reversible withdrawal per boss order.
// Moves every page under content/v1.5.3 that is NOT on the human-verified
// 37-page whitelist into _withdrawn/v1.5.3/<lang>/<original path> and writes a
// manifest recording source / target / bytes / basis. Nothing is deleted.
//
// Usage: node tools/_v153_withdraw.mjs            (move)
//        node tools/_v153_withdraw.mjs --dry      (report only)
import { mkdirSync, renameSync, readdirSync, readFileSync, statSync, writeFileSync, existsSync } from 'node:fs';
import { join, posix, relative } from 'node:path';

const REPO = process.cwd();
const SRC_ROOT = 'content/v1.5.3';
const DST_ROOT = '_withdrawn/v1.5.3';
const DRY = process.argv.includes('--dry');

// Human-verified whitelist. Provenance, not pattern matching: each page was
// written by an agent reading 1.5.3 source. Do not regenerate this list by
// pattern - four automatic classifiers disagreed site-wide.
const HANDWRITTEN = [
  // 27 facade deep pages (worker-6)
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
for (const lang of ['zh', 'en']) {
  HANDWRITTEN.push(`${lang}/_index.md`);
  for (const a of ['_index', 'sdk-overview', 'module-map', 'migration-from-1.4.5']) {
    HANDWRITTEN.push(`${lang}/architecture/${a}.md`);
  }
}
const KEEP = new Set(HANDWRITTEN.map((p) => posix.join(SRC_ROOT, p)));

// A whitelist page that is actually a stub would mean the roster drifted.
const GEN_FINGERPRINTS = [
  /自动生成的初始占位段落/, /自动生成类参考/,
  /Auto-generated stub for/, /Auto-generated initial placeholder/, /Auto-generated index of/,
  /Every leaf page is a stub/, /\bSomeValue\b/, /null;\s*\/\/\s*替换/,
];

function walk(dir, acc = []) {
  for (const name of readdirSync(dir)) {
    if (name.startsWith('.')) continue;
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, acc);
    else if (name.endsWith('.md')) acc.push(p.replace(/\\/g, '/'));
  }
  return acc;
}

const all = walk(join(REPO, SRC_ROOT))
  .map((f) => posix.normalize(posix.join(...relative(REPO, f).split(/[\\/]/))))
  .sort();

// --- integrity check on the whitelist before touching anything ----------------
const problems = [];
for (const k of KEEP) {
  const abs = join(REPO, k);
  if (!existsSync(abs)) { problems.push(`MISSING on disk: ${k}`); continue; }
  const text = readFileSync(abs, 'utf8');
  const hit = GEN_FINGERPRINTS.find((r) => r.test(text));
  if (hit) problems.push(`GENERATED FINGERPRINT (${hit}) on whitelist page: ${k}`);
}
if (problems.length) {
  console.error('ABORT: whitelist integrity check failed. Nothing moved.\n  ' + problems.join('\n  '));
  process.exit(1);
}

const move = all.filter((f) => !KEEP.has(f));
const keep = all.filter((f) => KEEP.has(f));
console.log(`total=${all.length}  keep=${keep.length}  withdraw=${move.length}${DRY ? '  (DRY RUN)' : ''}`);

if (!DRY) {
  for (const src of move) {
    const dst = posix.join(DST_ROOT, relative(SRC_ROOT, src).replace(/\\/g, '/'));
    const absDst = join(REPO, dst);
    mkdirSync(join(absDst, '..'), { recursive: true });
    renameSync(join(REPO, src), absDst);
  }
  const manifest = {
    generatedBy: 'tools/_v153_withdraw.mjs',
    date: new Date().toISOString().slice(0, 10),
    rule: 'HARD PREMISE: no script may emit pages under content/. Everything off the human-verified 37-page provenance whitelist is moved, not deleted.',
    sourceRoot: SRC_ROOT,
    targetRoot: DST_ROOT,
    keptCount: keep.length,
    movedCount: move.length,
    kept: keep,
    moved: move.map((s) => ({
      source: s,
      target: posix.join(DST_ROOT, relative(SRC_ROOT, s).replace(/\\/g, '/')),
      bytes: null, // filled below from disk
      basis: 'generated (script-emitted); off provenance whitelist',
    })),
  };
  for (const m of manifest.moved) {
    const abs = join(REPO, m.target);
    if (existsSync(abs)) m.bytes = statSync(abs).size;
  }
  mkdirSync(join(REPO, DST_ROOT), { recursive: true });
  writeFileSync(join(REPO, DST_ROOT, `MANIFEST-${manifest.date}.json`), JSON.stringify(manifest, null, 2));
  console.log(`manifest written: ${DST_ROOT}/MANIFEST-${manifest.date}.json`);
}

const left = walk(join(REPO, SRC_ROOT)).length;
console.log(`remaining under ${SRC_ROOT}: ${left}${DRY ? '' : ` (expected ${keep.length})`}`);
