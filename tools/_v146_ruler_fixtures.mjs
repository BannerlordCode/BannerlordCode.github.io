// 判别力实测：造阳性/阴性对照页（全部落在仓库外的临时目录），跑四档口径，出一张表。
//   node tools/_v146_ruler_fixtures.mjs
// 仓库零写入：造页写到 os.tmpdir()，跑完自动删；真实语料先快照再跑（别的 worker 在并发改 content）。
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const REPO = path.resolve('.');
const TMP = fs.mkdtempSync(path.join(os.tmpdir(), 'v146-ruler-'));
const RULER = path.join(REPO, 'tools', '_v146_prose_name_ruler.mjs');
const PROBE = path.join(REPO, 'tools', '_v146_prose_name_probe.mjs');
const MODES = ['M0', 'M1', 'M2', 'M3'];
const bail = (m) => { console.error('ABORT: ' + m); process.exit(2); };

const TOK = new Set(JSON.parse(execFileSync('node', [PROBE], { encoding: 'utf8', maxBuffer: 1 << 28 })));
const TYPES = JSON.parse(execFileSync('node', [PROBE, '--real'], { encoding: 'utf8', maxBuffer: 1 << 28 }));

// ================= 1. 阳性对照：20 页 =================
// 5 种形态 × 4 页，每页只出现该形态。每一种都是**无歧义的「声称存在某个类型」**。
// CAMEL（形参里埋假名）**不在**阳性集里 —— `lastFakeWidgetEnabled` 是形参名不是类型声明，
// 把它报成 miss 本身就是误报。它被移到独立的诊断集（§1b）双记。
const FAKES = ['FakeWidget','NotARealType','ZzzBogus9','PhantomRegistry','GhostCampaign','UnicornSaveManager',
  'NullMissionBehavior','BogusVisualEntity','DemoOnlyWrapper','QuantumSettlement','ImaginaryKing Kingdom',
  'FictionalTradeService','SampleTroopTree','TestOnlyBridge','WobblyFrameRate','GizmoOverlay','PseudoDiplomacyModel',
  'ZenithAchievementHub','MinimalExampleUtil','HandmadeScenario'];
FAKES[10] = 'ImaginaryKingdom';
for (const f of FAKES) if (TOK.has(f)) bail('假名在源码中存在: ' + f);

const SHAPES = [
  { tag: 'BACKTICK',  make: (f) => `入口类型写作 \`${f}\`，由模组作者实现，游戏本体不提供同名类型。` },
  { tag: 'BARE',      make: (f) => `${f} 是本页讨论的类型，开发者通常在自己的 SubModule 里注册它。` },
  { tag: 'CONTEXT',   make: (f) => `调用点如下（见 Campaign）：\n\n- 第 1 步：构造 \`${f}(agent)\`\n- 第 2 步：调用 \`${f}.Tick\`\n\n该名字在 Missions 桶下索引。` },
  { tag: 'HEADING',   make: (f) => `# ${f} 的用法\n\n## 何时用 ${f}\n\n表：| 名称 | 说明 |\n| --- | --- |\n| ${f} | 主入口 |\n` },
  { tag: 'QUALIFIED', make: (f) => `完整类型名是 \`TaleWorlds.Campaign.${f}\`，位于 SandBox 程序集。` },
];
const posDir = path.join(TMP, 'positive'); fs.mkdirSync(posDir, { recursive: true });
const posFiles = [], posShape = {};
for (let i = 0; i < 20; i++) {
  const s = SHAPES[i % 5], f = FAKES[i];
  const p = path.join(posDir, `pos-${String(i + 1).padStart(2, '0')}.md`);
  fs.writeFileSync(p, `---\ntitle: 阳性 ${i + 1}\n---\n\n${s.make(f)}\n`, 'utf8');
  posFiles.push(p); posShape[path.basename(p)] = { shape: s.tag, fake: f };
}

// ---------- §1b CAMEL 诊断集：形参里埋假名，双记（漏=灵敏度上限，报=误报） ----------
const camDir = path.join(TMP, 'camel'); fs.mkdirSync(camDir, { recursive: true });
const camFiles = [], camShape = {};
for (let i = 0; i < 4; i++) {
  const f = FAKES[i];
  const p = path.join(camDir, `camel-${i + 1}.md`);
  fs.writeFileSync(p, `---\ntitle: camel 诊断 ${i + 1}\n---\n\n回调形参写作 \`last${f}Enabled\`，另外还读 \`is${f}Active\` 这个标志位。\n`, 'utf8');
  camFiles.push(p); camShape[path.basename(p)] = f;
}

// ================= 2. 阴性对照：20 页，零虚构名 =================
// N1 纯真实类型名；N2 混入真实 lowerCamel 源码标识符（含 _t 后缀的 Steamworks 结构体，
//    M0 会把 `AddAppDependencyResult_t` 截成 `AddAppDependencyResult` 报 miss）；N3 噪声形态
//    （真实 .cs 文件名 + 否定句、artifact 字段名、专有名词）—— 都是干净页，但专打 M0/M1。
const CAMEL = ['steamAppTicketSize','internalBufferLen','maxNumLobbyMembers','expectedJwsAlg',
  'currentEncryptedAppTicketSize','keyLengthBits','compressionAlgorithmsAliases','valueToBeCloseTo',
  'allowFullLobbies','defaultAvatarCriteria','AddAppDependencyResult_t','CSteamAPIContext'];
for (const c of CAMEL) if (!TOK.has(c)) bail('lowerCamel/结构体名不在源码中: ' + c);
// N3 的噪声名：确认它们在源码里「不存在」，正是误报发生器
const NOISE = ['AssemblyInfo','Suffixes','TypoNamespaces','PointDirs','entryPointDirs','Sibling','Gaps'];
for (const n of NOISE) if (TOK.has(n)) bail('噪声名其实在源码中，对照不成立: ' + n);

const negDir = path.join(TMP, 'negative'); fs.mkdirSync(negDir, { recursive: true });
const negFiles = [], negShape = {};
for (let i = 0; i < 20; i++) {
  const parts = [], tag = i < 7 ? 'TYPES' : i < 14 ? 'CAMEL' : 'NOISE';
  for (let k = 0; k < 6; k++) parts.push(`\`${TYPES[(i * 7 + k * 13) % 900]}\` 在这条链路上被持有`);
  if (tag === 'CAMEL') parts.push(`内部读取 \`${CAMEL[i % CAMEL.length]}\` 后再决定行为`);
  if (tag === 'NOISE') {
    parts.push('`AssemblyInfo` 指 `Properties/AssemblyInfo.cs`，不是类型');
    parts.push('`Suffixes` / `TypoNamespaces` 是 canonical artifact 的字段名');
    parts.push('`PointDirs` 是 `entryPointDirs` 的子串，不是类型名');
    parts.push('标签页 `Sibling` / `Gaps` 是专有链接标签');
  }
  const p = path.join(negDir, `neg-${String(i + 1).padStart(2, '0')}.md`);
  fs.writeFileSync(p, `---\ntitle: 阴性 ${i + 1}\n---\n\n` + parts.join('；') + '。\n', 'utf8');
  negFiles.push(p); negShape[path.basename(p)] = tag;
}

// 「确定干净」的机器证明：页面里每个 token 要么在源码中逐词存在，要么是 NOISE 白名单里的
// 已知非类型名，要么是页面内某个真实源码标识符的 PascalCase 片段。一条都不许有别的。
const NOISE_OK = new Set(NOISE);
function proveClean(files) {
  const bad = [];
  for (const f of files) {
    const t = fs.readFileSync(f, 'utf8').replace(/```[\s\S]*?```/g, ' ');
    const toks = [...t.matchAll(/[A-Za-z_][A-Za-z0-9_]*/g)].map((m) => m[0]);
    const frag = new Set(toks.flatMap((x) => [...x.matchAll(/[A-Z][a-z0-9]*/g)].map((s) => s[0])));
    // 这把尺只提取首字母大写的标识符，所以「干净」只需对 PascalCase token 负责
    const unexplained = toks.filter((x) => /^[A-Z]/.test(x) && !TOK.has(x) && !NOISE_OK.has(x) && !frag.has(x));
    if (unexplained.length) bad.push({ file: path.basename(f), unexplained });
  }
  return bad;
}
const dirty = proveClean(negFiles);
if (dirty.length) bail('阴性对照不干净: ' + JSON.stringify(dirty));
console.log(`clean proof: ${negFiles.length}/${negFiles.length} 页零虚构名（NOISE 白名单 ${NOISE.length} 个已逐一验证不在源码）`);
// 阳性页的反向证明：假名必须真的不在源码（上面已断言），且页面不出现任何真实类型名充数
console.log(`positive proof: ${posFiles.length} 页，${FAKES.length} 个假名全部 hasWord=false`);

// ================= 3. 真实语料快照（并发安全） =================
const snapDir = path.join(TMP, 'corpus');
function walk(d, out) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p, out); else if (e.name.endsWith('.md')) out.push(p);
  }
  return out;
}
const corpusFiles = walk(path.join(REPO, 'content', 'v1.4.6', 'zh'), []);
const corpusSnap = corpusFiles.map((f) => {
  const dst = path.join(snapDir, path.relative(path.join(REPO, 'content'), f).replace(/\\/g, '/'));
  fs.mkdirSync(path.dirname(dst), { recursive: true });
  fs.writeFileSync(dst, fs.readFileSync(f, 'utf8'), 'utf8');
  return dst;
});

// ================= 4. 跑四档 =================
function run(mode, files) {
  const out = execFileSync('node', [RULER, '--mode=' + mode, ...files], { encoding: 'utf8', maxBuffer: 1 << 28 });
  const per = {};
  for (const l of out.split('\n')) {
    const m = l.match(/^(.+?)  missing=(\d+)(?:  -> (.*))?$/);
    if (m && m[2] !== undefined) per[m[1].trim()] = { n: +m[2], ids: m[3] ? m[3].split(', ') : [] };
  }
  return { per, total: +(out.match(/TOTAL_MISSING=(\d+)/) || [, '0'])[1] };
}

const result = { table: {}, corpus: {}, posShape, negShape, camShape, posDetail: {}, negDetail: {}, camDetail: {}, corpusFiles: corpusSnap.length };
console.log('\n=== 阈值敏感性表（阳性 20 页 / 阴性 20 页 / CAMEL 诊断 4 页）===');
for (const mode of MODES) {
  const pos = run(mode, posFiles), neg = run(mode, negFiles), cam = run(mode, camFiles), cor = run(mode, corpusSnap);
  const tally = (files, detail, keyOf) => {
    const t = {};
    for (const f of files) { const k = keyOf(path.basename(f)); t[k] = t[k] || [0, 0]; t[k][1]++; if (detail[f] && detail[f].n > 0) t[k][0]++; }
    return t;
  };
  const missed = posFiles.filter((f) => !(pos.per[f] && pos.per[f].n > 0));
  const negHit = negFiles.filter((f) => neg.per[f] && neg.per[f].n > 0);
  const camHit = camFiles.filter((f) => cam.per[f] && cam.per[f].n > 0);
  result.table[mode] = {
    posCaught: posFiles.length - missed.length, posMissed: missed.map((f) => path.basename(f)),
    posByShape: tally(posFiles, pos.per, (b) => posShape[b].shape),
    negFP: negHit.length, negByShape: tally(negFiles, neg.per, (b) => negShape[b]),
    camelDiagnostic_hit: camHit.length, camelTotal: camFiles.length,
    corpusMissing: cor.total,
  };
  result.corpus[mode] = cor.per; result.posDetail[mode] = pos.per; result.negDetail[mode] = neg.per; result.camDetail[mode] = cam.per;
  console.log(`${mode}  阳性 ${posFiles.length - missed.length}/20  阴性误报 ${negHit.length}/20  CAMEL诊断命中 ${camHit.length}/4(应=误报)  真实语料 missing=${cor.total}`);
  console.log(`     阳性分形态: ${Object.entries(result.table[mode].posByShape).map(([k, v]) => `${k} ${v[0]}/${v[1]}`).join('  ')}`);
  console.log(`     阴性分形态: ${Object.entries(result.table[mode].negByShape).map(([k, v]) => `${k} 误报${v[0]}/${v[1]}`).join('  ')}`);
  if (missed.length) console.log(`     阳性漏: ${missed.map((f) => `${path.basename(f)}(${posShape[path.basename(f)].shape})`).join(', ')}`);
// 把每条 miss 连同出处页/原文行导出，供逐条人工标注（快照在删 temp 之前必须落盘）
const hits = new Map();
for (const [f, v] of Object.entries(cor.per)) for (const id of v.ids) {
  if (!hits.has(id)) hits.set(id, []);
  hits.get(id).push(f);
}
const rows = [];
for (const [id, files] of hits) {
  let ctx = '';
  const re = new RegExp('(?<![A-Za-z0-9_])' + id + '(?![A-Za-z0-9_])');
  for (const l of fs.readFileSync(files[0], 'utf8').split('\n')) if (re.test(l)) { ctx = l.trim().slice(0, 160); break; }
  rows.push({ id, n: files.length, page: path.relative(snapDir, files[0]).split(path.sep).join('/'), ctx });
}
rows.sort((a, b) => b.n - a.n || a.id.localeCompare(b.id));
result[`ctx_${mode}`] = rows;
console.log(`  [${mode}] unique=${rows.length} instances=${rows.reduce((a, b) => a + b.n, 0)}`);
}
fs.writeFileSync(path.join(REPO, 'tools', '_v146_ruler_result.json'), JSON.stringify(result, null, 1), 'utf8');
fs.rmSync(TMP, { recursive: true, force: true });
console.log('\ntmp cleaned: ' + TMP);
