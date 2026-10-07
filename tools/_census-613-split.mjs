// 把「613 页 FILE_UNRESOLVED」按成因拆开 —— 实测，不是推算。只读。
// 用法: node tools/_census-613-split.mjs
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const SRC = 'C:/WorkSpace/Bannerlord/bannerlord-1.4.5/Bannerlord.Source';
const BS = String.fromCharCode(92);

const byBase = new Map();
(function walk(d) {
  let es; try { es = readdirSync(d); } catch { return; }
  for (const e of es) {
    const p = join(d, e);
    let s; try { s = statSync(p); } catch { continue; }
    if (s.isDirectory()) walk(p);
    else if (p.endsWith('.cs')) { const b = e.toLowerCase(); if (!byBase.has(b)) byBase.set(b, []); byBase.get(b).push(p); }
  }
})(SRC);

const strip = v => v.replace(/^bin[\\/]/, '').replace(/^Bannerlord\.Source[\\/]/, '').replace(/^\.?\//, '');
function opensAt(base, rel) { try { return statSync(base + BS + rel.split(/[\\/]/).join(BS)).isFile(); } catch { return false; } }

const files = [];
(function walk(d) {
  for (const e of readdirSync(d)) {
    const p = join(d, e);
    const s = statSync(p);
    if (s.isDirectory()) walk(p); else if (p.endsWith('.md')) files.push(p);
  }
})('content/v1.4.5/zh/api');

let NO_FIELD = 0, AMBIG = 0, NO_SRC = 0, ROOTFIX = 0;
const lf = [], la = [], ln = [], lr = [];

for (const pg of files) {
  const t = readFileSync(pg, 'utf8');
  // ⚠ 源路径字段有 5 种键名（**File:** / **Source:** / **源文件:** / **源文件路径:** / **Source path:**）。
  //   键名清单必须从语料实测得出，不许凭经验列 —— 漏一个不会报错，只会让那一类静默变成 0。
  const fm = /\*\*\s*(?:File|Source|源文件路径|源文件|Source path \(1\.4\.5 authoritative\))\s*:\*\*\s*`?([^`\r\n]+?)`?\s*$/m.exec(t);
  const rel = pg.replace(/\\/g, '/');
  if (!fm) { NO_FIELD++; lf.push(rel); continue; }
  const v = fm[1].trim();
  const r = strip(v);
  // ① 先算旧工具到底解不解析得了：单一根拼接 → basename 唯一回落
  const singleRoot = opensAt(SRC, r);
  const c = byBase.get(r.split(/[\\/]/).pop().toLowerCase());
  const uniqueFallback = !!(c && c.length === 1);
  if (singleRoot || uniqueFallback) continue;            // 旧工具能解析 ⇒ 不在这 613 里
  // ② 到这里才是 613 的一员，再分成因
  if (!c) {                                              // basename 零命中
    if (opensAt(SRC, 'bin/' + r)) { ROOTFIX++; lr.push(rel + '   [' + v + ']'); }   // 换根即开
    else { NO_SRC++; ln.push(rel + '   [' + v + ']'); }
    continue;
  }
  AMBIG++; la.push(rel + '   [' + v + ']  → ' + c.length + ' 处命中');
}

console.log('「613 页 FILE_UNRESOLVED」的实测拆分');
console.log('命令：node tools/_census-613-split.mjs');
console.log('');
console.log(['成因', '页数', '占比', '处置'].join('\t'));
const T = NO_FIELD + AMBIG + NO_SRC + ROOTFIX;
const pct = n => ((n / T) * 100).toFixed(1) + '%';
console.log(['NO_FIELD', NO_FIELD, pct(NO_FIELD), 'frontmatter 缺 File:/Source: 字段 —— 要补字段，得先知道正确路径，非纯机械'].join('\t'));
console.log(['AMBIGUOUS', AMBIG, pct(AMBIG), 'basename 多处命中 —— 人工判定，不猜'].join('\t'));
console.log(['NO_SOURCE', NO_SRC, pct(NO_SRC), '1.4.5 树里确实没有对应文件 —— 不应编路径'].join('\t'));
console.log(['ROOT_FIX_ONLY', ROOTFIX, pct(ROOTFIX), '换拼根即开（Modules.* 是 bin 的兄弟目录）—— 纯机械修'].join('\t'));
console.log(['合计', T, '100.0%', ''].join('\t'));
console.log('');
console.log('纯机械可修（ROOT_FIX_ONLY）= ' + ROOTFIX + ' / ' + T);
console.log('需要人的判断或需要补字段      = ' + (NO_FIELD + AMBIG));
console.log('不该动（NO_SOURCE）           = ' + NO_SRC);
for (const [k, v] of [['ROOT_FIX_ONLY', lr], ['AMBIGUOUS', la], ['NO_SOURCE', ln]]) {
  console.log('\n[' + k + '] 样例:');
  console.log('  ' + v.slice(0, 10).join('\n  '));
}
