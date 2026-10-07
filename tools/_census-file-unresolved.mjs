// 把 FILE_UNRESOLVED 拆成三类，供「修 613 页」派单前定性用。只读，不碰 content/。
// 用法: node tools/_census-file-unresolved.mjs
//
//   NO_FIELD      该页 frontmatter 根本没有 **File:** / **Source:** 字段
//   RESOLVABLE    File: 字段有值，basename 在 1.4.5 全树【唯一】命中 ⇒ 可直接修
//   AMBIGUOUS     basename【多处】命中 ⇒ 需人工，不猜
//   NO_SOURCE     basename【零处】命中 ⇒ 该类型在 1.4.5 源码树里确实没有对应文件
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = 'C:/WorkSpace/Bannerlord/bannerlord-1.4.5/Bannerlord.Source';
const BS = String.fromCharCode(92);
const API = 'content/v1.4.5/zh/api';

const byBase = new Map();
(function walk(d) {
  let ents; try { ents = readdirSync(d); } catch { return; }
  for (const e of ents) {
    const p = join(d, e);
    let s; try { s = statSync(p); } catch { continue; }
    if (s.isDirectory()) walk(p);
    else if (p.endsWith('.cs')) {
      const b = e.toLowerCase();
      if (!byBase.has(b)) byBase.set(b, []);
      byBase.get(b).push(p);
    }
  }
})(ROOT);

// 该页声明的路径按几种根拼一遍，看哪一种能打开（用于判断是「根拼错」还是「文件真的不在」）
function tryRoots(rel) {
  const r = rel.replace(/^bin[\\/]/, '').replace(/^Bannerlord\.Source[\\/]/, '').replace(/^\.?\//, '');
  const roots = [ROOT, ROOT + BS + 'bin'];
  for (const base of roots) {
    const p = base + BS + r.split(/[\\/]/).join(BS);
    try { if (statSync(p).isFile()) return { ok: true, path: p, base }; } catch { }
  }
  return { ok: false };
}

const files = [];
(function walk(d) {
  for (const e of readdirSync(d)) {
    const p = join(d, e);
    const s = statSync(p);
    if (s.isDirectory()) walk(p); else if (p.endsWith('.md')) files.push(p);
  }
})(API);

const tally = { NO_FIELD: 0, RESOLVABLE_ROOT_FIX: 0, RESOLVABLE: 0, AMBIGUOUS: 0, NO_SOURCE: 0 };
const lists = { NO_FIELD: [], RESOLVABLE_ROOT_FIX: [], RESOLVABLE: [], AMBIGUOUS: [], NO_SOURCE: [] };
const bucketTally = new Map();

for (const pg of files) {
  const text = readFileSync(pg, 'utf8');
  const fm = /\*\*\s*(?:File|Source|Source path \(1\.4\.5 authoritative\))\s*:\*\*\s*`?([^`\r\n]+?)`?\s*$/m.exec(text);
  const rel = pg.replace(/\\/g, '/');
  const b = rel.split('/')[4];
  let k;
  if (!fm) k = 'NO_FIELD';
  else {
    const r = tryRoots(fm[1].trim());
    if (r.ok) k = 'RESOLVABLE_ROOT_FIX';
    else {
      const c = byBase.get(fm[1].trim().split(/[\\/]/).pop().toLowerCase());
      if (!c) k = 'NO_SOURCE';
      else if (c.length === 1) k = 'RESOLVABLE';
      else k = 'AMBIGUOUS';
    }
  }
  tally[k]++;
  if (lists[k].length < 400) lists[k].push(rel + (k === 'AMBIGUOUS' ? '  → ' + byBase.get(fm[1].trim().split(/[\\/]/).pop().toLowerCase()).map(x => x.replace(/\\/g, '/').split('/Bannerlord.Source/')[1] || x).join(' | ') : ''));
  if (!bucketTally.has(b)) bucketTally.set(b, { n: 0 });
  bucketTally.get(b).n++;
}

console.log('把 FILE_UNRESOLVED 拆开 —— 判据只有「路径打不打得开」，不含任何判断');
console.log('命令：node tools/_census-file-unresolved.mjs');
console.log('');
console.log(['类别', '页数', '含义'].join('\t'));
console.log(['NO_FIELD', tally.NO_FIELD, 'frontmatter 没有 File:/Source: 字段 —— 缺字段，不是坏路径'].join('\t'));
console.log(['RESOLVABLE_ROOT_FIX', tally.RESOLVABLE_ROOT_FIX, '按 Bannerlord.Source 或 Bannerlord.Source/bin 拼根即能打开 —— 纯根路径写错'].join('\t'));
console.log(['RESOLVABLE', tally.RESOLVABLE, 'basename 在 1.4.5 全树唯一命中 —— 可直接补成真实路径'].join('\t'));
console.log(['AMBIGUOUS', tally.AMBIGUOUS, 'basename 多处命中 —— 需人工，不猜'].join('\t'));
console.log(['NO_SOURCE', tally.NO_SOURCE, 'basename 零处命中 —— 该类型在 1.4.5 树里确实没有对应文件'].join('\t'));
const total = Object.values(tally).reduce((a, b2) => a + b2, 0);
console.log(['TOTAL', total, ''].join('\t'));
console.log('');
console.log('可机械修（ROOT_FIX + RESOLVABLE）= ' + (tally.RESOLVABLE_ROOT_FIX + tally.RESOLVABLE) +
            ' / ' + total + '  (' + (((tally.RESOLVABLE_ROOT_FIX + tally.RESOLVABLE) / total) * 100).toFixed(1) + '%)');
console.log('需人工（AMBIGUOUS + NO_FIELD）      = ' + (tally.AMBIGUOUS + tally.NO_FIELD));
console.log('不应修（NO_SOURCE）                  = ' + tally.NO_SOURCE + '  ← 这些不该编路径');
for (const k of ['AMBIGUOUS', 'NO_SOURCE', 'RESOLVABLE_ROOT_FIX']) {
  console.log('\n[' + k + '] 样例:');
  console.log('  ' + lists[k].slice(0, 12).join('\n  '));
}
