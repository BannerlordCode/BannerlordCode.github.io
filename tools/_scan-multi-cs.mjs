// 多引用句普查（boss #7269 派单 ①②）：一句里出现 ≥2 个不同 *.cs 且带 ≥2 个行号引用。
//
// 输出 tools/_verify/multi-cs-sentences.tsv，每行：
//   完整相对路径 · 页内行号 · 该句全部 .cs 字面量（按出现顺序）· 工具取第几个 · 最近邻归属
//
// 最后一列是「反向核对」的结果（boss ②）：
//   对齐   工具取的第一个 .cs，恰好是该句第一个行号引用【最近的】那个 .cs
//          ⇒ 它没读错，只是没读全 —— 处置是标 out-of-scope
//   错位   第一个行号引用最近邻是另一个 .cs，而工具取了第一个
//          ⇒ 工具读了错的那个 —— 这是内容缺陷候选，modder 会被误导
import { readFileSync, readdirSync, statSync, writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const R = 'C:/WorkSpace/Bannerlord/BannerlordCode.github.io';
const API = 'content/v1.4.5/zh/api';
const OUT = R + '/tools/_verify/multi-cs-sentences.tsv';

const files = [];
(function walk(d) {
  for (const e of readdirSync(d, { withFileTypes: true })) {
    const p = join(d, e.name);
    if (e.isDirectory()) walk(p);
    else if (e.name.endsWith('.md')) files.push(p);
  }
}(R + '/' + API));

// 句切分必须与 _cite-contract.mjs 完全一致，否则测出来的形状与尺看到的不是同一批
const CS = /([A-Za-z0-9_]+\.cs)/g;
const NUM = /[:：]\s*(\d{1,4})/g;

const rows = [];
let totalSent = 0;

for (const abs of files) {
  const rel = abs.slice(R.length + 1).split(String.fromCharCode(92)).join('/');
  const text = readFileSync(abs, 'utf8');
  const lines = text.split(/\r?\n/);
  // 逐句：先按分隔符切，并记录每句起始行号
  let lineNo = 1;
  for (const sent of text.split(/[\n。；！？]+/)) {
    totalSent++;
    CS.lastIndex = 0; NUM.lastIndex = 0;
    const cs = [...sent.matchAll(CS)].map(m => ({ name: m[1], at: m.index }));
    const nums = [...sent.matchAll(NUM)].map(m => ({ n: +m[1], at: m.index }));
    if (new Set(cs.map(c => c.name)).size < 2 || nums.length < 2) { lineNo += (sent.match(/\n/g) || []).length; continue; }

    // 工具只认第一个 .cs（index 0）
    const toolPick = 0;
    // 反向核对（修正版）：只认【显式配对】—— 某个 .cs 后面紧跟着 :NNN。
    //   配对不上 ⇒ 该引用是裸 :NNN，归属在本句内【无法机械判定】 ⇒ 单列「不可判定」，不计入两档。
    //   全部可配对时：工具取第一个 .cs 是否正确 = 它是否就是【第一个 :NNN】所配对的那个。
    const pairs = [];
    for (const c of cs) {
      // 显式配对：.cs 字面量后面紧跟（允许反引号/空格/全角括号）的 :NNN
      const tail = sent.slice(c.at + c.name.length, c.at + c.name.length + 14).replace(/[`（(\s]+/, '');
      const m2 = /^[:：]\s*(\d{1,4})/.exec(tail);
      if (m2) pairs.push({ file: c.name, n: +m2[1], at: c.at });
    }
    let verdict;
    if (pairs.length < 2) verdict = '不可判定';                 // 存在裸 :NNN，机械判不了
    else if (pairs[0].file === cs[0].name) verdict = '对齐';   // 工具取的第一个 = 第一个配对
    else verdict = '错位';                                       // 工具取的不是第一个配对

    rows.push([rel, lineNo, cs.map(c => c.name).join(','), '第' + (toolPick + 1) + '个(' + cs[0].name + ')',
      verdict, '显式配对 ' + pairs.map(p => p.file + ':' + p.n).join(' | ')]);
    lineNo += (sent.match(/\n/g) || []).length;
  }
}

mkdirSync(R + '/tools/_verify', { recursive: true });
const head = '# 多引用句普查 · ' + new Date().toISOString() + '\n' +
  '# 判据：一句内 ≥2 个不同 *.cs 且 ≥2 个行号引用；句切分与 tools/_cite-contract.mjs 一致\n' +
  '# 列：路径 · 行号 · 全部.cs字面量 · 工具取第几个 · 反向核对(对齐/错位) · 首个行号的最近邻\n' +
  '# 范围：仅 content/v1.4.5/zh/api/**（单版本、单语言）—— 见 CONTRACT §4v\n' +
  '# 用「对齐/错位」两数区分：工具的边界（页可能完全正确） vs 内容缺陷（modder 会被误导）\n';
writeFileSync(OUT, head + rows.map(r => r.join('\t')).join('\n') + '\n', 'utf8');

const cnt = v => rows.filter(r => r[4] === v).length;
const dui = cnt('对齐'), cuo = cnt('错位'), unk = cnt('不可判定');
console.log('句总数（与 _cite-contract.mjs 同一切分）= ' + totalSent);
console.log('多引用句 = ' + rows.length + '   →  ' + OUT);
console.log('  对齐     = ' + dui + '   工具取的第一个 = 第一个配对 ⇒ 它没读错，只是没读全（out-of-scope）');
console.log('  错位     = ' + cuo + '   工具取的不是第一个配对 ⇒ 内容缺陷候选，需逐页确认');
console.log('  不可判定 = ' + unk + '   句中存在裸 :NNN，机械判不出归属');
const byV = {};
for (const r of rows) { const b = r[0].split('/').slice(0, 5).join('/'); byV[b + ' ' + r[4]] = (byV[b + ' ' + r[4]] || 0) + 1; }
console.log('\n按桶：');
for (const [k, v] of Object.entries(byV).sort((a, b) => b[1] - a[1]).slice(0, 12)) console.log('  ' + k.padEnd(52) + v);
console.log('\n样例（前 8 行）：');
rows.slice(0, 8).forEach(r => console.log('  ' + r.join('  |  ')));
