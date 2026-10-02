// 散文型页面的裸类型名反查（anti-fabrication 只扫 csharp 代码块，这里补它不覆盖的那一类）
// 方法：抽取页面里 PascalCase 标识符（去掉反引号包裹的族名简写），逐个在 bannerlord-1.4.6 全树 grep -w
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
const SRC = path.resolve('../bannerlord-1.4.6');
const files = process.argv.slice(2);
const csFiles = [];
(function walk(d) { for (const e of fs.readdirSync(d, { withFileTypes: true })) { const p = path.join(d, e.name); if (e.isDirectory()) walk(p); else if (e.name.endsWith('.cs')) csFiles.push(p); } })(SRC);
const blob = csFiles.map((f) => fs.readFileSync(f, 'utf8')).join('\n');
// 注意：不要用 new RegExp('\b'+id+'\b') —— heredoc/转义链会把 \\b 变成 \b（退格符），
// 检测器就会把一切报成未命中。此处改用显式词边界判断，无转义依赖。
function hasWord(hay, word) {
  let i = hay.indexOf(word);
  while (i !== -1) {
    const before = i === 0 ? '' : hay[i - 1];
    const after = i + word.length >= hay.length ? '' : hay[i + word.length];
    if (!/[A-Za-z0-9_]/.test(before) && !/[A-Za-z0-9_]/.test(after)) return true;
    i = hay.indexOf(word, i + 1);
  }
  return false;
}

// 阳性对照：这些名字必然存在于 bannerlord-1.4.6 源码中。找不到它们 = 检查器坏了，
// 必须拒绝出结论（而不是报告「全部虚构」）。
const POSITIVE_CONTROL = ['Campaign', 'Hero', 'SaveManager', 'Mission', 'TextObject', 'Agent'];
const ctrlMiss = POSITIVE_CONTROL.filter((id) => !hasWord(blob, id));
if (ctrlMiss.length) {
  console.error('POSITIVE_CONTROL_FAILED: 检查器无法在源码中找到 ' + ctrlMiss.join(', ') + ' —— 拒绝出结论（这不等于页面有错，是检查器坏了）');
  process.exit(2);
}
console.log('positive control: ' + POSITIVE_CONTROL.length + '/' + POSITIVE_CONTROL.length + ' found');
const ALLOW = new Set(['I', 'T', 'Z', 'OK', 'TODO', 'NOTE', 'API', 'XML', 'JSON', 'HTTP', 'ID', 'UI', 'NPC', 'AI', 'CPU', 'RAM', 'GPU', 'PC', 'SDK', 'P0', 'P1', 'P2']);
const report = [];
for (const rel of files) {
  const t = fs.readFileSync(rel, 'utf8').replace(/```[\s\S]*?```/g, ' '); // 去代码块（门禁已覆盖）
  const ids = new Set();
  for (const m of t.matchAll(/`?([A-Z][A-Za-z0-9]{2,})`?/g)) { const id = m[1]; if (!ALLOW.has(id)) ids.add(id); }
  const miss = [];
  for (const id of ids) if (!hasWord(blob, id)) miss.push(id);
  report.push({ page: rel, checked: ids.size, missing: miss });
}
let totalMissing = 0;
for (const r of report) { totalMissing += r.missing.length; console.log(`${r.page}  checked=${r.checked}  missing=${r.missing.length}${r.missing.length ? '  -> ' + r.missing.join(', ') : ''}`); }
console.log('TOTAL_MISSING=' + totalMissing + '  (anti-fabrication 门禁不覆盖这一类，请与门禁 PASS 分开记录)');
