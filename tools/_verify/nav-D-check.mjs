// nav-D-check.mjs —— 导航树完整性 D2 线：类1（有链接无数量）/ 类2（少列）检测器
// 只读。判据来自 tools/_INTEGRATION-GATES.md §1.2 与 tools/_NAV-ARCHITECTURE.md §5 A2。
// marker: <!-- BEGIN SECTION INDEX --> ... <!-- END SECTION INDEX -->
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const CONTENT = path.join(ROOT, 'content');
const BEGIN = '<!-- BEGIN SECTION INDEX -->';
const END = '<!-- END SECTION INDEX -->';

// 收集所有 _index.md
function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (e.name === '_index.md') out.push(p);
  }
  return out;
}

const allIndexes = walk(CONTENT);
const withMarker = allIndexes.filter(p => fs.readFileSync(p, 'utf8').includes(BEGIN));

// 数量措辞正则（类1）：N 个 / N 页 / N pages / N classes / N 篇 / N types
const COUNT_RE = /\d[\d,\s]*\s*(?:个|页|pages|classes|篇|types|类页|类)\b/i;

// 链接正则
const linkRe = /\[[^\]]*\]\(([^)\s]+)\)/g;

const rows = [];
for (const idxPath of withMarker) {
  const rel = path.relative(ROOT, idxPath).replace(/\\/g, '/');
  const dir = path.dirname(idxPath);
  const text = fs.readFileSync(idxPath, 'utf8');

  // 提取 marker 块（第一个 BEGIN → 第一个 END）
  const bi = text.indexOf(BEGIN);
  const ei = text.indexOf(END);
  if (bi < 0 || ei < 0 || ei <= bi) continue;
  const block = text.slice(bi, ei);

  // marker 块内链接
  const links = [];
  let m;
  while ((m = linkRe.exec(block)) !== null) links.push(m[1]);

  // 同目录子页链接：href 指向同目录 .md 或子目录 _index.md
  const dirRel = path.relative(CONTENT, dir).replace(/\\/g, '/');
  const siblingLinks = links.filter(h => {
    if (h.startsWith('#') || h.startsWith('http')) return false;
    // 解析 href 相对于 dir
    const target = path.posix.normalize(path.posix.join(dirRel, h));
    // 同目录：target 在 dirRel 下
    return target === dirRel || target.startsWith(dirRel + '/');
  });

  // 磁盘实际子页数：.md 叶子 + 子目录 _index.md
  let diskLeaves = 0, diskSubIndex = 0;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.isFile() && e.name.endsWith('.md') && e.name !== '_index.md') diskLeaves++;
    else if (e.isDirectory()) {
      const subIdx = path.join(dir, e.name, '_index.md');
      if (fs.existsSync(subIdx)) diskSubIndex++;
    }
  }
  const diskTotal = diskLeaves + diskSubIndex;

  // 数量措辞（整页）
  const hasCount = COUNT_RE.test(text);

  // 类2：列出的链接数 < 磁盘实际子页数
  const listed = new Set(siblingLinks).size;
  const class2 = listed < diskTotal;
  // 类1：有链接但无数量措辞
  const class1 = listed > 0 && !hasCount;

  rows.push({
    page: rel,
    listed,
    diskLeaves,
    diskSubIndex,
    diskTotal,
    hasCount,
    class1,
    class2,
    links: siblingLinks.length,
  });
}

// 输出
const c1 = rows.filter(r => r.class1);
const c2 = rows.filter(r => r.class2);
console.log(`索引页总数（含 marker）: ${withMarker.length}`);
console.log(`类1（有链接无数量）: ${c1.length}`);
console.log(`类2（少列）: ${c2.length}`);
console.log('\n=== 类1 明细 ===');
for (const r of c1) console.log(`${r.page}\t列出=${r.listed}\t磁盘=${r.diskTotal}\t链接数=${r.links}`);
console.log('\n=== 类2 明细 ===');
for (const r of c2) console.log(`${r.page}\t列出=${r.listed}\t磁盘=${r.diskTotal}\t叶子=${r.diskLeaves}\t子索引=${r.diskSubIndex}`);

// TSV
const tsv = ['page\tclass\tlisted\tdisk\thasCount\tnote'];
for (const r of rows) {
  if (r.class1) tsv.push(`${r.page}\t1\t${r.listed}\t${r.diskTotal}\t${r.hasCount}\t有链接无数量措辞`);
  if (r.class2) tsv.push(`${r.page}\t2\t${r.listed}\t${r.diskTotal}\t${r.hasCount}\t少列`);
}
fs.writeFileSync(path.join(ROOT, 'tools', '_verify', 'nav-D-index-counts.tsv'), tsv.join('\n') + '\n');
console.log('\nTSV 已写入 tools/_verify/nav-D-index-counts.tsv');
