// 诊断 2：把 D 类（931 条）再拆开，并给出「正确口径」下 EXTRA 的真实值。
// 判断式不动，只加参照集。
import fs from 'node:fs';
import path from 'node:path';

const REPO = process.cwd();
const ART = JSON.parse(fs.readFileSync(path.join(REPO, 'tools/_dir-map-canonical.json'), 'utf8'));
const INV = JSON.parse(fs.readFileSync(path.join(REPO, 'tools/_v146_inventory.json'), 'utf8'));
const API = path.join(REPO, 'content', 'v1.4.6', 'zh', 'api');

// 参照集 1：全库真实 public 顶层类型名（声明级）
const typeNames = new Set(INV.types.map((t) => t.name));
// 参照集 2：全库成员名（方法/属性/字段/事件），从签名里抽第一个标识符
const memberNames = new Set();
for (const t of INV.types) for (const m of t.members || []) {
  const s = String(m.signature || '');
  const mm = s.match(/(?:^|[\s>])([A-Za-z_][A-Za-z0-9_]*)\s*(?:\(|\{|;|$)/);
  if (mm) memberNames.add(mm[1]);
  // 泛型返回/参数里的类型名
  for (const g of s.matchAll(/[A-Z][A-Za-z0-9_]{2,}/g)) memberNames.add(g[0]);
}
// 参照集 3：全库 namespace 段
const nsSegs = new Set();
for (const t of INV.types) for (const seg of String(t.namespace).split('.')) nsSegs.add(seg);
// 参照集 4：桶名 + artifact 的字段名
const bucketNames = new Set(fs.readdirSync(API, { withFileTypes: true }).filter((d) => d.isDirectory()).map((d) => d.name));
const artifactKeys = new Set([...ART.rules.map((r) => r.dir), ART.defaultDir,
  ...Object.keys(ART.entryPointDirs || {}), ...(ART.excludeNamespaces || []),
  ...(ART.excludeSuffixes || []), ...(ART.sourceTypoNamespaces || []),
  'rules', 'defaultDir', 'entryPointDirs', 'excludeNamespaces', 'excludeSuffixes',
  'sourceTypoNamespaces', 'prefix', 'dir', 'schemaVersion', 'version', 'collisionRule', 'linkRules', 'parityGaps']);

// 重跑仪器口径（逐字照抄 _v146_index_completeness.mjs）
const rules = [...ART.rules].sort((a, b) => b.prefix.length - a.prefix.length);
const excl = ART.excludeNamespaces || [], exSuffix = ART.excludeSuffixes || [], overrides = ART.entryPointDirs || {};
const dirOf = (ns, t) => { if (typeof overrides[t] === 'string') return overrides[t]; for (const r of rules) if (ns.startsWith(r.prefix)) return r.dir; return ART.defaultDir; };
const segHit = (rel, s) => rel.split('/').some((seg) => seg === s || seg.startsWith(s + '.') || seg.split('.').includes(s));
const SRC = path.resolve(REPO, process.argv[2] || '../bannerlord-1.4.6');
const files = (function walk(d, a = []) { for (const e of fs.readdirSync(d, { withFileTypes: true })) { const p = path.join(d, e.name); e.isDirectory() ? walk(p, a) : e.name.endsWith('.cs') && a.push(p); } return a; })(SRC);
const byDir = new Map();
for (const f of files) {
  const nm = fs.readFileSync(f, 'utf8').slice(0, 6000).match(/^\s*namespace\s+([\w.]+)/m);
  const ns = nm ? nm[1] : ''; const rel = f.split(path.sep).join('/');
  if (excl.some((e) => ns === e || ns.startsWith(e + '.'))) continue;
  if (exSuffix.some((s) => segHit(rel, s))) continue;
  const d = dirOf(ns, path.basename(f, '.cs'));
  if (!byDir.has(d)) byDir.set(d, new Set());
  byDir.get(d).add(path.basename(f, '.cs'));
}

const out = {};
let tOld = 0, tNew = 0, tMiss = 0;
const cat = new Map();
const perBucket = [];
for (const bucket of fs.readdirSync(API, { withFileTypes: true }).filter((d) => d.isDirectory()).map((d) => d.name)) {
  const universe = byDir.get(bucket) || new Set();
  const pages = new Set(fs.readdirSync(path.join(API, bucket)).filter((f) => f.endsWith('.md') && f !== '_index.md').map((f) => f.replace(/\.md$/, '').split('__').pop()));
  const idx = path.join(API, bucket, '_index.md');
  const mentioned = new Set();
  if (fs.existsSync(idx)) { const t = fs.readFileSync(idx, 'utf8');
    for (const m of t.matchAll(/`([A-Za-z_][A-Za-z0-9]*)`/g)) if (/^[A-Z]/.test(m[1])) mentioned.add(m[1]);
    for (const m of t.matchAll(/\]\(\.\/([A-Za-z_][A-Za-z0-9]*)\)/g)) mentioned.add(m[1]); }
  const oldExtra = [...mentioned].filter((t) => !universe.has(t) && !pages.has(t));
  const newExtra = oldExtra.filter((t) => !typeNames.has(t));
  const missing = [...universe].filter((t) => !pages.has(t) && !mentioned.has(t));
  tOld += oldExtra.length; tNew += newExtra.length; tMiss += missing.length;
  const c = { realTypeInOtherBucket: 0, memberName: 0, namespaceSegment: 0, bucketOrArtifactKey: 0, unknownPascal: 0 };
  for (const t of newExtra) {
    if (memberNames.has(t)) c.memberName++;
    else if (nsSegs.has(t)) c.namespaceSegment++;
    else if (bucketNames.has(t) || artifactKeys.has(t)) c.bucketOrArtifactKey++;
    else c.unknownPascal++;
    const key = typeNames.has(t) ? 'realType_otherBucket' : memberNames.has(t) ? 'memberName' : nsSegs.has(t) ? 'namespaceSegment' : bucketNames.has(t) || artifactKeys.has(t) ? 'bucketOrArtifactKey' : 'unknownPascal';
    if (!cat.has(key)) cat.set(key, []);
    if (cat.get(key).length < 400) cat.get(key).push(`${bucket}:${t}`);
  }
  if (oldExtra.length) perBucket.push({ bucket, universe: universe.size, pages: pages.size, missing: missing.length, EXTRA_old: oldExtra.length, EXTRA_new: newExtra.length, ...c });
}
console.log('=== EXTRA 逐桶：原口径 vs「豁免全库真实类型名」口径 ===');
console.log('bucket'.padEnd(17) + 'EXTRAold'.padStart(9) + 'EXTRAnew'.padStart(9) + '  |' + 'realType'.padStart(9) + 'member'.padStart(7) + 'nsSeg'.padStart(6) + 'bkt/art'.padStart(8) + 'unknown'.padStart(8));
for (const r of perBucket.sort((a, b) => b.EXTRA_old - a.EXTRA_old)) {
  console.log(r.bucket.padEnd(17) + String(r.EXTRA_old).padStart(9) + String(r.EXTRA_new).padStart(9) + '  |' +
    String(r.EXTRA_new - r.memberName - r.namespaceSegment - r.bucketOrArtifactKey - r.unknownPascal).padStart(9) +
    String(r.memberName).padStart(7) + String(r.namespaceSegment).padStart(6) + String(r.bucketOrArtifactKey).padStart(8) + String(r.unknownPascal).padStart(8));
}
console.log(`\nTOTAL_EXTRA 原口径 = ${tOld}   （其中「全库根本不是类型」= ${tNew}）   TOTAL_MISSING_FROM_INDEX = ${tMiss}`);
console.log('\n=== 剩余 EXTRA_new 分类合计（distinct 桶内计数，跨桶重复） ===');
for (const [k, v] of [...cat].sort((a, b) => b[1].length - a[1].length)) console.log(`  ${k.padEnd(20)} ${v.length}${k.length > 400 ? ' (截断显示)' : ''}`);
console.log('\n样例:');
for (const [k, v] of cat) console.log(`  ${k}: ${v.slice(0, 30).join(', ')}`);
fs.writeFileSync(path.join(REPO, 'tools/_v146_extra_attribution.json'), JSON.stringify({ perBucket, cat: Object.fromEntries(cat) }, null, 1));