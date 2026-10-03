// 只读：孤儿页普查 —— 全站范围内没有任何现存页链到它。
// 口径与 zola build 的 orphan 一致：site-wide 入链计数（不是单版本内）。
//
// ---------------------------------------------------------------------------
// 本门禁判定的谓词（改退出码前先读这段）
//
//   不是「orphans === 0」。那个谓词今天不可达：文档树里本来就有几千张
//   「没有任何现存页链到它」的页，需要多轮项目量级才能清完。一个永远红的
//   门禁会训练所有人忽略它 —— 那会连它仍然有检出力、仍然有价值的部分一起毁掉。
//
//   本门禁判定的是「没有变多」：
//     net_new = 当前 orphan 集合 MINUS 已登记的已知失败集合
//   按 route 逐项精确比对（不是比数量）。这个谓词今天就能为真、
//   今天就能被违反、今天就能抓到回归。
//
//   已知失败是**数据**，在 tools/data/known-failures-orphans.json，入库受
//   版本控制、可 diff、可评审 —— 不是代码常量。这里没有 --no-fail / - /
//   || true 开关，也不许加。升基线是一个显式、可单独评审的动作：
//     node tools/_v146_orphan_check.mjs --emit-baseline tools/data/known-failures-orphans.json
//   并且必须**单独一个 commit**，不许「顺手升」。
// ---------------------------------------------------------------------------
import fs from 'node:fs';
import path from 'node:path';

const BASELINE_FILE = path.join('tools', 'data', 'known-failures-orphans.json');
const ARGV = process.argv.slice(2);
const EMIT = (() => { const i = ARGV.indexOf('--emit-baseline'); return i >= 0 && ARGV[i + 1] ? ARGV[i + 1] : null; })();

// ---- ARG GUARD (exit 2 = no verdict；参数不被理解时根本没有测量，不能归 exit 1) ----
//
// 取值型选项的“值”本身是 flag 时，该选项根本没被给出。不挡的话
// `--emit-baseline --dry-run` 会把基线写进一个名叫 "--dry-run" 的文件，
// 然后打印「BASELINE RAISED ... 成功」—— 实测真的发生过，且输出上看不出失败。
const VALUE_OPTS = ['--emit-baseline'];
for (const o of VALUE_OPTS) {
  const i = ARGV.indexOf(o);
  if (i < 0) continue;
  const v = ARGV[i + 1];
  if (v === undefined || v.startsWith('-')) {
    console.error(`BAD_ARGUMENT: ${o} needs a value, but the next token is ${v === undefined ? '(nothing)' : v}.`);
    console.error('  A flag in a value position means the option was not supplied.');
    console.error(`  This script accepts: ${VALUE_OPTS.map((s) => s + ' <value>').join(', ')}`);
    process.exit(2);
  }
}
// 第二层：输出路径必须是「已存在目录下的文件名」。以 '-' 开头的是打错的 flag，不是文件。
if (EMIT !== null) {
  const dir = path.dirname(EMIT);
  const name = path.basename(EMIT);
  let bad = null;
  if (name.startsWith('-')) bad = `it starts with '-', which means a flag was passed where a path was expected`;
  else if (!fs.existsSync(dir) || !fs.statSync(dir).isDirectory()) bad = `${dir} is not an existing directory`;
  if (bad) {
    console.error(`BAD_OUTPUT_PATH: --emit-baseline "${EMIT}" rejected because ${bad}.`);
    console.error('  Refusing to write a file there. No file was created.');
    process.exit(2);
  }
}

const ITEM_NOTE = 'Pre-existing orphan route (no site-wide inbound link) recorded as a KNOWN FAILURE. Revoke = link it from a parent/_index page, then delete THIS entry alone in its own commit (never bundled with unrelated work).';

// 「读不到基线」与「基线为空」必须可区分：
//   BASELINE_UNREADABLE  文件不存在 / 读不了
//   BASELINE_MALFORMED   不是合法 JSON
//   BASELINE_SCHEMA      合法 JSON 但必填字段缺失/类型不对
// 空 known 数组**不是**错误：那是合法的首次登记，而且仍然 fail-safe
// （当前每个 orphan 都会算成净增 -> exit 1）。
function loadBaseline(file) {
  let raw;
  try { raw = fs.readFileSync(file, 'utf8'); }
  catch (e) { return { ok: false, code: 'BASELINE_UNREADABLE', msg: `${file} (${e.code || e.message})` }; }
  let doc;
  try { doc = JSON.parse(raw); }
  catch (e) { return { ok: false, code: 'BASELINE_MALFORMED', msg: `${file} is not valid JSON: ${e.message}` }; }
  if (!doc || typeof doc !== 'object' || Array.isArray(doc)) return { ok: false, code: 'BASELINE_SCHEMA', msg: `${file}: top level must be a JSON object` };
  if (!Array.isArray(doc.known)) return { ok: false, code: 'BASELINE_SCHEMA', msg: `${file}: required field "known" must be an array` };
  for (const [i, r] of doc.known.entries()) {
    const route = (r && typeof r === 'object') ? r.route : undefined;
    if (typeof route !== 'string') {
      return { ok: false, code: 'BASELINE_SCHEMA', msg: `${file}: known[${i}] must be { "route": string, "note": string }, got ${JSON.stringify(r)}` };
    }
  }
  return { ok: true, entries: new Set(doc.known.map((r) => r.route)), recordedAt: doc.recordedAt || null };
}

function emitBaseline(file, orphans) {
  const doc = {
    $schema: 'known-failures/orphans@1',
    $what: 'Routes that are ALREADY orphaned at the recorded commit (no existing page links to them anywhere on the site) and were never fixed. They are NOT forgiven -- they are enumerated so that "net new = 0" is a reachable, violable predicate instead of a permanently red one.',
    $gate: 'node tools/_v146_orphan_check.mjs',
    $predicate: 'net_new = current_orphan_set MINUS this set, compared item-by-item on route. net_new > 0 -> exit 1. net_new = 0 -> exit 0.',
    $how_to_raise: 'node tools/_v146_orphan_check.mjs --emit-baseline tools/data/known-failures-orphans.json -- commit that single file on its own. Raising the baseline is only legitimate when the new route is itself a known/accepted failure; it is NEVER a way to make a red gate green.',
    $how_to_revoke_one_entry: 'Give the route an inbound link from a parent page or _index page, re-run the gate (the entry will then be reported as RESOLVED), and delete that one entry in its own commit. Entries are never auto-deleted by the gate -- deletion is always a human action.',
    $how_to_shrink_the_file: 'Every removed entry is a real fix. An entry that is no longer orphaned is reported as RESOLVED and left in place on purpose, so the diff that shrinks this file is always a human decision.',
    recordedAt: {
      commit: process.env.KNOWN_FAILURES_COMMIT || 'UNRECORDED',
      workingTree: process.env.KNOWN_FAILURES_TREE || 'unknown',
      note: 'Recorded by --emit-baseline. Values here are DATA, reviewed like any other data change.',
    },
    orphanCount: orphans.length,
    known: orphans.slice().sort().map((r) => ({ route: r, note: ITEM_NOTE })),
  };
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, JSON.stringify(doc, null, 2) + '\n');
  return doc;
}

const SITE='content';
function walk(d,a=[]){for(const e of fs.readdirSync(d,{withFileTypes:true})){const p=path.join(d,e.name);e.isDirectory()?walk(p,a):(e.name.endsWith('.md')||e.name.endsWith('.txt'))&&a.push(p);}return a;}
const files=walk(SITE);

// 空 universe 守卫：一个什么都没遍历到的检查器，与「正确地什么都没找到」输出完全一样。
// 因此空集必须报错退出，而不是报出一个漂亮的 0。
if (!files.length) {
  console.error('EMPTY_UNIVERSE: 未遍历到任何文件 —— 检查器无法工作，拒绝出结论（这不等于「一切正常」）');
  process.exit(2);
}
const routeOf=(rel)=>{const q=rel.split(path.sep).join('/').replace(/\.md$/,'');return q.endsWith('_index')?q.replace(/_index$/,''):q+'/';};
function res(from,href){if(/^(https?:|#|mailto:)/.test(href))return null;const h=href.split('#')[0];if(!h)return null;const s=from.split('/').filter(Boolean);for(const x of h.split('/')){if(x==='.'||x==='')continue;if(x==='..')s.pop();else s.push(x);}const r=s.join('/');return r.endsWith('/')?r:r+'/';}
const routes=new Map(); for(const f of files) routes.set(routeOf(path.relative(SITE,f)),f);
const inbound=new Map(); for(const r of routes.keys()) inbound.set(r,0);
const linkRe=/\[[^\]]*\]\(([^)\s]+)\)/g;
for(const f of files){const rel=path.relative(SITE,f);const t=fs.readFileSync(f,'utf8');const from=routeOf(rel);
  let m; const re=new RegExp(linkRe.source,'g');
  while((m=re.exec(t))){const tg=res(from,m[1]); if(tg&&routes.has(tg))inbound.set(tg,inbound.get(tg)+1);}}
const orphans=[...inbound].filter(([,n])=>n===0).map(([r])=>r);
const perTree={};
for(const r of orphans){const seg=r.split('/')[0];perTree[seg]=(perTree[seg]||0)+1;}
console.log('total_pages='+routes.size+'  orphans='+orphans.length);
// 分母已量（routes.size 就是 universe 全量），才允许报率。
console.log('orphan_rate='+(orphans.length/routes.size).toFixed(4)+'  ('+orphans.length+'/'+routes.size+')');
console.log('by_tree='+JSON.stringify(perTree));
const v146=orphans.filter(r=>r.startsWith('v1.4.6/'));
console.log('v1.4.6_orphans='+v146.length);
for(const r of v146.slice(0,25))console.log('   '+r);
// 计数逻辑未动（无 tg!==from 守卫、自链计入引用者），只补退出码。
// 判定谓词不是 orphans === 0（那个今天不可达），而是「没有净增」。
// exit 1 = 出现基线之外的孤儿页（可比较的数字）；exit 2 = 没能判定（含基线读不到）。
if (EMIT) {
  emitBaseline(EMIT, orphans);
  console.log(`BASELINE RAISED: ${orphans.length} known failures written to ${EMIT}`);
  console.log('  这是一个数据变更。请 review，并单独 commit 这一个文件。');
  console.log(`  它没有修好任何东西：orphans 仍然是 ${orphans.length}/${routes.size}。`);
  process.exit(0);
}

const base = loadBaseline(BASELINE_FILE);
if (!base.ok) {
  console.error(`${base.code}: ${base.msg}`);
  if (base.code === 'BASELINE_UNREADABLE') {
    console.error('  基线文件缺失或读不了。这**不等于「基线是空的」**（空基线是一个合法文件），也**不等于「没有问题」**。');
  } else {
    console.error('  基线文件存在但不可信。拒绝拿它做比较。');
  }
  console.error(`  无论哪种情况，这次测量都是不完整的：orphans=${orphans.length}/${routes.size}。`);
  console.error('  重新生成：node tools/_v146_orphan_check.mjs --emit-baseline tools/data/known-failures-orphans.json');
  process.exit(2);
}

const cur = new Set(orphans);
const netNew = orphans.filter((r) => !base.entries.has(r));
const resolved = [...base.entries].filter((r) => !cur.has(r));

console.log(`baseline=${base.entries.size}  current=${orphans.length}  net_new=${netNew.length}` +
            (base.entries.size === 0 ? '  <-- 基线为空（合法；当前每个 orphan 都算净增）' : '') +
            (base.recordedAt?.commit ? `  (recorded at commit ${base.recordedAt.commit})` : ''));
console.log(`resolved_since_baseline=${resolved.length}  (不再孤儿，但门禁不会自动删基线；删除必须是人工的显式动作)`);
console.log('net_new = 当前集合 MINUS 基线集合，按 route 逐项精确比对（不是比数量）');
if (netNew.length) {
  console.log('\nNET NEW ORPHANS (regressions):');
  for (const r of netNew) console.log('   ' + r);
}
if (resolved.length) {
  console.log('\nRESOLVED SINCE THE BASELINE WAS RECORDED (好消息 — 自己删，一次提交一条):');
  for (const r of resolved.slice(0, 50)) console.log('   ' + r);
  if (resolved.length > 50) console.log(`   ... 另有 ${resolved.length - 50} 条`);
}
console.log(`\nRESULT: ${netNew.length ? 'FAIL' : 'PASS'}  (net_new=${netNew.length}; 绝对数仍然是 orphans=${orphans.length}/${routes.size})`);
console.log(`  那 ${orphans.length} 个既有孤儿页**仍然是孤儿**。这个门禁现在是「可达谓词」，不是「问题消失」。`);
console.log('  它只挡新增。缩小基线是人工活。');
process.exit(netNew.length ? 1 : 0);
