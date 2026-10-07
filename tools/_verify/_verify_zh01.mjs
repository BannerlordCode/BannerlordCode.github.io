// batch-zh-01 (worker-57 分片) 交卷验收器：五节齐全 / 三要素齐全 / 重合句数 / 新句数 / 引用可解析 / U+FFFD / deep_pass 前后
// 用法: node tools/_verify/_verify_zh01.mjs tools/_verify/batch-zh-01.split.worker57.txt
import fs from 'node:fs';
import cp from 'node:child_process';
import { classifyPage } from '../lib/handwritten-policy.mjs';

const ROOT = 'C:/WorkSpace/Bannerlord/BannerlordCode.github.io';
const SRC = 'C:/WorkSpace/Bannerlord';
const VMAP = {
  'v1.3.0': 'bannerlord-1.3.0',
  'v1.3.15': 'bannerlord-1.3.15',
  'v1.4.5': 'bannerlord-1.4.5/Bannerlord.Source/bin',
};

const manifest = process.argv[2];
const pages = fs.readFileSync(ROOT + '/' + manifest, 'utf8').split('\n')
  .map((s) => s.trim()).filter((s) => s && !s.startsWith('#'));

const h2s = (t) => [...t.matchAll(/^##\s+(.+?)\s*$/gm)].map((m) => m[1]);
const sec = (t, name) => {
  const m = new RegExp('^## ' + name + '\\s*$', 'm').exec(t);
  if (!m) return '';
  const rest = t.slice(m.index + m[0].length);
  const n = rest.search(/^## /m);
  return n < 0 ? rest : rest.slice(0, n);
};
const stripCode = (t) => t.replace(/```[\s\S]*?```/g, ' ');
const norm = (s) => s.replace(/[`*_]/g, '').replace(/\s+/g, '');
const sentences = (t) => stripCode(t)
  .split('\n')
  .map((l) => l.replace(/^#{2,6}\s*.*$/, '').trim())   // 排除结构标签
  .filter((l) => l.length >= 12)
  .flatMap((l) => l.split(/(?<=[。；！？])/))
  .map((s) => s.trim())
  .filter((s) => s.length >= 12);

const rows = [];
const hits = new Map();
let fffd = 0, sixOK = 0, triOK = 0, citeBad = 0, citeN = 0;
const diffStat = new Map();
{
  const d = cp.execSync('git diff --numstat -- content', { cwd: ROOT, encoding: 'utf8' });
  for (const l of d.split('\n').filter(Boolean)) {
    const [a, b, p] = l.split('\t');
    diffStat.set(p, [+a, +b]);
  }
}

for (const p of pages) {
  const abs = ROOT + '/' + p;
  const t = fs.readFileSync(abs, 'utf8').replace(/\r\n/g, '\n');
  const heads = h2s(t);
  const how = sec(t, '怎么用');

  // 五节齐全（探针自语料导出：概述/心智模型/关键成员(含成员说明)/真实示例(含典型用法示例)/风险与边界(含风险与崩溃边界)/怎么用）
  const six = ['概述', '心智模型', '怎么用'].every((h) => heads.includes(h))
    && heads.some((h) => /^关键成员$|^成员说明/.test(h))
    && heads.some((h) => /真实示例|典型用法示例|使用示例/.test(h))
    && heads.some((h) => /^风险与边界$|^风险与崩溃边界$/.test(h));

  // 三要素
  const sub = h2s(how);
  const e1 = /###\s*怎么拿到它/.test(how) && /[\w\.]+\.cs:\d+/.test(how);
  const code = [...how.matchAll(/```csharp\n([\s\S]*?)```/g)].map((m) => m[1]);
  const realLines = code.flatMap((b) => b.split('\n'))
    .filter((l) => l.trim() && !l.trim().startsWith('//') && !l.trim().startsWith('*') && !l.trim().startsWith('/*'))
    .filter((l) => !/^\s*using\s/.test(l)).length;
  const e2 = code.length > 0 && realLines >= 3;
  const e3 = /^###\s*最容易踩的坑\s*$/m.test(how)
    && (how.split(/^###\s*最容易踩的坑\s*$/m)[1] || '').trim().length >= 20;
  const tri = e1 && e2 && e3;

  // 重合 / 新句（排除标签与代码块）
  const exName = heads.find((h) => /真实示例|典型用法示例|使用示例/.test(h));
  const riskName = heads.find((h) => /^风险与边界$|^风险与崩溃边界$/.test(h));
  const exPool = new Set(sentences(sec(t, exName || '\\0\\0')).map(norm));
  const riskPool = new Set(sentences(sec(t, riskName || '\\0\\0')).map(norm));
  const mine = sentences(how);
  let overlapEx = 0, overlapRisk = 0;
  const fresh = [];
  for (const s of mine) {
    const n = norm(s);
    if (exPool.has(n)) overlapEx++;
    else if (riskPool.has(n)) overlapRisk++;
    else fresh.push(s);
  }

  // 引用可解析：文件存在 + 行号在范围内
  const ver = p.match(/content\/(v[\d\.]+)\//)[1];
  const srcRoot = SRC + '/' + VMAP[ver];
  const cites = [...new Set([...(how.matchAll(/([\w.]+(?:\/[\w.]+)*\.cs):(\d+)/g))].map((m) => m[1] + ':' + m[2]))];
  const bad = [];
  for (const c of cites) {
    citeN++;
    const i = c.lastIndexOf(':');
    const f = c.slice(0, i), n = +c.slice(i + 1);
    const parts = f.split('/');
    const bn = parts.pop();
    const cands = [srcRoot + '/' + f];
    // v1.4.5 的 rel 多一层同名程序集目录：<Asm>/<Asm>/File.cs
    if (parts.length) cands.push(srcRoot + '/' + parts.concat([parts[parts.length - 1], bn]).join('/'));
    cands.push(srcRoot + '/' + parts.concat([bn]).join('/'));
    let hit = cands.find((c2) => fs.existsSync(c2));
    if (!hit) {
      // 兜底：在该版本树里按文件名找唯一匹配
      const stack = [srcRoot], hits = [];
      while (stack.length && hits.length < 3) {
        const d = stack.pop();
        let ents; try { ents = fs.readdirSync(d, { withFileTypes: true }); } catch { continue; }
        for (const e of ents) {
          const fp = d + '/' + e.name;
          if (e.isDirectory()) { if (!['obj', '.git', 'node_modules'].includes(e.name)) stack.push(fp); }
          else if (e.name === bn) hits.push(fp);
        }
      }
      hit = hits.length === 1 ? hits[0] : null;
    }
    if (!hit) { bad.push(c + '(file-not-found)'); continue; }
    const lines = fs.readFileSync(hit, 'utf8').split('\n').length;
    if (n < 1 || n > lines) bad.push(c + `(out-of-range, file has ${lines})`);
    else hits.set(c, lines);
  }
  citeBad += bad.length;

  const badChar = (fs.readFileSync(abs, 'utf8').match(/\uFFFD/g) || []).length;
  fffd += badChar;

  // deep_pass 前 / 后
  let before = 'n/a';
  try {
    const head = cp.execSync('git show HEAD:' + p, { cwd: ROOT, encoding: 'utf8', maxBuffer: 1 << 28 });
    before = classifyPage(ROOT + '/' + p, head).status;
  } catch { before = 'untracked-in-HEAD'; }
  const after = classifyPage(abs, t).status;

  if (six) sixOK++;
  if (tri) triOK++;
  const st = fs.statSync(abs);
  const ds = diffStat.get(p) || [0, 0];
  rows.push({
    page: p,
    mtime: st.mtime.toISOString().replace('T', ' ').slice(0, 19),
    added: ds[0], removed: ds[1],
    six, tri, e1, e2, e3,
    sents: mine.length, overlapEx, overlapRisk, fresh: fresh.length,
    cites: cites.length, badCites: bad,
    fffd: badChar,
    deep_before: before, deep_after: after,
  });
}

const pad = (s, n) => String(s).padEnd(n);
console.log(pad('page', 74) + pad('5节', 5) + pad('3要素', 7) + pad('句', 5) + pad('重合Ex', 8) + pad('重合Risk', 10)
  + pad('新句', 6) + pad('引用', 6) + pad('FFFD', 6) + 'deep');
for (const r of rows) {
  console.log(pad(r.page.replace(/^content\//, ''), 74)
    + pad(r.six ? 'ok' : 'NO', 5) + pad(r.tri ? 'ok' : 'NO:' + [r.e1 ? '' : '①', r.e2 ? '' : '②', r.e3 ? '' : '③'].filter(Boolean), 7)
    + pad(r.sents, 5) + pad(r.overlapEx, 8) + pad(r.overlapRisk, 10) + pad(r.fresh, 6)
    + pad(r.cites + (r.badCites.length ? '!' + r.badCites.length : ''), 6) + pad(r.fffd, 6)
    + r.deep_before + ' -> ' + r.deep_after);
}
console.log('---');
console.log('pages=' + rows.length
  + '  six=' + sixOK
  + '  tri=' + triOK
  + '  fffd=' + fffd
  + '  citations=' + citeN + ' bad=' + citeBad);
console.log('fresh total=' + rows.reduce((a, r) => a + r.fresh, 0)
  + '  pages with fresh=0: ' + rows.filter((r) => r.fresh === 0).map((r) => r.page).join(',') || '(none)');
console.log('deep_pass changed: ' + rows.filter((r) => r.deep_before !== r.deep_after).length
  + '  (was deep_pass: ' + rows.filter((r) => r.deep_before === 'deep_pass').length
  + ', now deep_pass: ' + rows.filter((r) => r.deep_after === 'deep_pass').length + ')');
console.log('added lines total=' + rows.reduce((a, r) => a + r.added, 0)
  + '  removed=' + rows.reduce((a, r) => a + r.removed, 0));
fs.writeFileSync(ROOT + '/tools/_verify/batch-zh-01.worker57.s4r.jsonl',
  rows.map((r) => JSON.stringify(r)).join('\n') + '\n');