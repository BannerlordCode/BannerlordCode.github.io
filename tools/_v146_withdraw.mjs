// v1.4.6 生成页移出（move-out，非删除）+ 可逆性 manifest
// 白名单是「逐页人工确认过的手写页」，不靠任何模式匹配判定。
//
// !! WHITELIST 是【冻结快照】，不是活规则 !!
//   本脚本的移出集 = 磁盘上不在白名单里的一切。任何一次新增手写页，
//   都必须同步下面两个表，否则重跑会把新页当成生成页移进 _withdrawn/。
//     1) 本文件内的 WHITELIST（逐页人工确认过的历史来源页）
//     2) tools/_v146_keep_whitelist.txt（当前 content/v1.4.6 的完整冻结清单）
//   「反向完整性检查」就是为这条纪律兜底的：磁盘出现白名单里没有的页时
//   直接 ABORT，一个都不移，而不是默默把它们移走。
//
// 用法：node tools/_v146_withdraw.mjs          # 预演
//       node tools/_v146_withdraw.mjs --apply   # 执行
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const APPLY = process.argv.includes('--apply');
const VERSION = 'v1.4.6';
const SRC_ROOT = path.join('content', VERSION);
const OUT_ROOT = path.join('_withdrawn', VERSION);
const DATE = '20261002';
const MANIFEST = path.join(OUT_ROOT, `MANIFEST-${DATE}.json`);

// —— 白名单：逐页人工核对过内容为手写的页面 ——
const WHITELIST = [
  // 版本根与架构页（worker-10）
  '_index.md',
  'zh/_index.md', 'en/_index.md',
  'zh/api/_index.md', 'en/api/_index.md',
  'zh/architecture/_index.md', 'zh/architecture/module-map.md', 'zh/architecture/sdk-overview.md', 'zh/architecture/version-delta.md',
  'en/architecture/_index.md', 'en/architecture/module-map.md', 'en/architecture/sdk-overview.md', 'en/architecture/version-delta.md',
  // 深写批次 1（worker-12）：基础层 / 存档 / 本地化
  'zh/api/core/MBSubModuleBase.md', 'zh/api/core/Module.md',
  'zh/api/core-extra/Game.md', 'zh/api/core-extra/GameStateManager.md', 'zh/api/core-extra/GameManagerBase.md',
  'zh/api/core-extra/ViewModel.md', 'zh/api/core-extra/InformationManager.md', 'zh/api/core-extra/TextObject.md',
  'zh/api/save-system/SaveManager.md', 'zh/api/save-system/SaveableTypeDefiner.md',
  'zh/api/save-system/SaveableFieldAttribute.md', 'zh/api/save-system/SaveablePropertyAttribute.md',
  'zh/api/localization/TextObject.md',
  // 深写批次 2（worker-12）：core-extra 物品 / 装备 / 锻造 / 模型
  'zh/api/core-extra/ItemObject.md', 'zh/api/core-extra/Equipment.md', 'zh/api/core-extra/WeaponComponent.md',
  'zh/api/core-extra/SkillObject.md', 'zh/api/core-extra/Crafting.md', 'zh/api/core-extra/BodyProperties.md',
  'zh/api/core-extra/Banner.md', 'zh/api/core-extra/GameModel.md', 'zh/api/core-extra/GameModelsManager.md',
  'zh/api/core-extra/ParameterContainer.md', 'zh/api/core-extra/BindingPath.md', 'zh/api/core-extra/EventBase.md',
  // 深写批次 3（worker-20）：战役 / 任务 / 界面 入口层
  'zh/api/campaign/Campaign.md', 'zh/api/campaign/CampaignGameStarter.md', 'zh/api/campaign/CampaignBehaviorBase.md',
  'zh/api/campaign/CampaignEvents.md', 'zh/api/campaign/IDataStore.md', 'zh/api/campaign/Hero.md', 'zh/api/campaign/Settlement.md',
  'zh/api/campaign-ext/MBObjectManager.md', 'zh/api/campaign-ext/MBObjectBase.md',
  'zh/api/mission/Mission.md', 'zh/api/mission/MissionBehavior.md', 'zh/api/mission/Agent.md', 'zh/api/mission/Formation.md',
  'zh/api/gui/ScreenManager.md', 'zh/api/gui/ScreenBase.md',
  'zh/api/engine/GauntletLayer.md',
].filter((p) => p !== 'zh/api/core-extra/TextObject.md'); // 已在 core-extra 一处，去重

const GEN_FINGERPRINTS = ['<!-- generated-by:', 'Batch first draft'];

function walk(dir, acc = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, acc); else if (e.name.endsWith('.md')) acc.push(p);
  }
  return acc;
}

const all = walk(SRC_ROOT).map((f) => path.relative(SRC_ROOT, f).split(path.sep).join('/'));

// 冻结快照：当前树上应保留的全部页面（相对 SRC_ROOT，posix 分隔）。
// 与上面的 WHITELIST 取并集 —— WHITELIST 记录「当初人工确认过的来源页」，
// 快照记录「现在确实存在的全部页」，两者缺一都会让移出集算错。
const KEEP_SNAPSHOT = 'tools/_v146_keep_whitelist.txt';
const snapshot = fs.existsSync(KEEP_SNAPSHOT)
  ? fs.readFileSync(KEEP_SNAPSHOT, 'utf8').split(/\r?\n/).map((s) => s.trim()).filter(Boolean)
  : [];
if (!snapshot.length) {
  console.error(`ABORT: frozen keep-snapshot missing or empty: ${KEEP_SNAPSHOT}\n  Refusing to run — without it every unlisted page would be treated as generator output.`);
  process.exit(1);
}

const wl = new Set([...WHITELIST, ...snapshot]);

// —— 第 1 步：白名单逐页核验 ——
const wlMissing = [];
const wlSuspect = [];
for (const rel of wl) {
  const abs = path.join(SRC_ROOT, rel);
  if (!fs.existsSync(abs)) { wlMissing.push(rel); continue; }
  const t = fs.readFileSync(abs, 'utf8');
  const fp = GEN_FINGERPRINTS.find((f) => t.includes(f));
  if (fp) wlSuspect.push([rel, fp]);
}

// —— 第 2 步：待移出清单（= 非白名单的一切）——
const toMove = all.filter((rel) => !wl.has(rel));

// —— 反向完整性检查：磁盘上不在白名单里的页 = 冻结快照已过期 ——
// 原脚本只做了单向检查（白名单页丢失 → 报告），没有做这一半：
// 新增手写页而没同步白名单时，旧脚本会默默把它们当生成页移走。
if (toMove.length) {
  const isClassPage = (rel) =>
    !rel.endsWith('_index.md') &&
    !rel.includes(`architecture${path.sep}`) &&
    rel !== '_index.md';
  const classes = toMove.filter(isClassPage);
  console.error(
    `ABORT: keep-snapshot is stale. ${toMove.length} page(s) on disk are NOT in WHITELIST ∪ snapshot.\n` +
    `  class pages at risk: ${classes.length}\n  ` +
    toMove.map((r) => `  UNLISTED: ${r}`).join('\n  ') +
    `\n  Fix: add these paths to ${KEEP_SNAPSHOT} (and to WHITELIST above if they are new hand-written pages).\n` +
    `  Nothing moved. Re-run after syncing.`
  );
  process.exit(1);
}

console.log(`MODE=${APPLY ? 'APPLY' : 'DRY-RUN'}`);
console.log(`whitelist=${wl.size}  missing=${wlMissing.length}  suspect=${wlSuspect.length}`);
if (wlMissing.length) console.log('  MISSING: ' + wlMissing.join(', '));
if (wlSuspect.length) console.log('  SUSPECT(has generated fingerprint): ' + wlSuspect.map(([r, f]) => r + '<' + f + '>').join(', '));
console.log(`files_on_disk=${all.length}  to_move_out=${toMove.length}  to_keep=${all.length - toMove.length}`);

if (!APPLY) process.exit(0);

// —— 第 3 步：执行移出 + manifest ——
const records = [];
for (const rel of toMove) {
  const from = path.join(SRC_ROOT, rel);
  const to = path.join(OUT_ROOT, rel);
  const size = fs.statSync(from).size;
  fs.mkdirSync(path.dirname(to), { recursive: true });
  fs.renameSync(from, to);
  records.push({ source: from.replace(/\\/g, '/'), target: to.replace(/\\/g, '/'), bytes: size, reason: 'generator-produced page; handwritten whitelist excluded it' });
}
// 清掉移空后残留的空目录
for (const d of walk(SRC_ROOT, []).length ? [] : []) {}
const dirs = [];
(function prune(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!e.isDirectory()) continue;
    const p = path.join(dir, e.name);
    prune(p);
    if (fs.readdirSync(p).length === 0) fs.rmdirSync(p);
  }
})(SRC_ROOT);

const manifest = {
  version: VERSION,
  date: DATE,
  mode: 'move-out (reversible); no rm / no git rm',
  generatedBy: 'tools/_v146_withdraw.mjs',
  whitelistPolicy: 'hand-verified per-page list; no pattern matching used to decide what is handwritten',
  whitelist: [...wl].sort(),
  whitelistMissing: wlMissing,
  whitelistSuspect: wlSuspect,
  movedCount: records.length,
  moved: records,
};
fs.mkdirSync(OUT_ROOT, { recursive: true });
fs.writeFileSync(MANIFEST, JSON.stringify(manifest, null, 2));
console.log(`moved=${records.length}  manifest=${MANIFEST.replace(/\\/g, '/')}`);

// —— 第 4 步：移出后验证 ——
const after = walk(SRC_ROOT).map((f) => path.relative(SRC_ROOT, f).split(path.sep).join('/'));
const unexpected = after.filter((r) => !wl.has(r));
const lost = [...wl].filter((r) => !after.includes(r) && !wlMissing.includes(r));
console.log(`remaining=${after.length}  whitelist_size=${wl.size}  unexpected_remaining=${unexpected.length}  whitelist_lost=${lost.length}`);
if (unexpected.length) console.log('  UNEXPECTED: ' + unexpected.slice(0, 20).join(', '));
if (lost.length) console.log('  LOST: ' + lost.join(', '));

let deep = 0; const notDeep = [];
for (const rel of after) {
  if (rel.endsWith('_index.md') || rel.includes('/architecture/') || rel === '_index.md') continue;
  try {
    const out = execFileSync(process.execPath, ['tools/_check_deep.mjs', path.join(SRC_ROOT, rel)], { encoding: 'utf8' });
    if (JSON.parse(out).status === 'deep_pass') deep++; else notDeep.push(rel);
  } catch { notDeep.push(rel + ' (gate error)'); }
}
console.log(`deep_pass_after_withdraw=${deep}  not_deep_pass=${notDeep.length}` + (notDeep.length ? ' -> ' + notDeep.join(', ') : ''));