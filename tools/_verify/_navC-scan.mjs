// nav-C 扫描器：类页（content/**/api/**/*.md，排除 _index.md）正文里
// 反引号包裹的路径陈述。判据：路径被反引号包住、不是 markdown 链接。
// 只读 content/，不写任何 content/ 文件。
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const contentDir = path.join(root, 'content');

function walk(dir) {
  let out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out = out.concat(walk(p));
    else if (e.name.endsWith('.md')) out.push(p);
  }
  return out;
}

const allMd = walk(contentDir);
// 类页分母：content/**/api/**/*.md，排除 _index.md
const classPages = allMd.filter((p) => {
  const rel = path.relative(contentDir, p);
  const parts = rel.split(path.sep);
  return parts.includes('api') && parts[parts.length - 1] !== '_index.md';
});

const BT = /`([^`\n]+)`/g;
const PATH_RE = /^\.\.?\//; // 以 ./ 或 ../ 开头

const hits = [];
for (const page of classPages) {
  const rel = path.relative(root, page);
  const lines = fs.readFileSync(page, 'utf8').split('\n');
  lines.forEach((line, i) => {
    BT.lastIndex = 0;
    let m;
    while ((m = BT.exec(line)) !== null) {
      const inner = m[1];
      if (PATH_RE.test(inner)) {
        hits.push({ file: rel, line: i + 1, path: inner, text: line.trim() });
      }
    }
  });
}

// ---- 输出 ----
console.log(`CLASS_PAGES_SCANNED=${classPages.length}`);
console.log(`BACKTICK_PATH_HITS=${hits.length}`);
console.log('---HITS---');
for (const h of hits) {
  console.log(`${h.file}\t${h.line}\t${h.path}\t${h.text}`);
}
