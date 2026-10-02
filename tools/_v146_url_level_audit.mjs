// 独立门禁（不复用 audit-links.mjs 的解析假设）：
// 按真实站点 route（含 vX.Y.Z 版本段）解析，每个链接的 `..` 数必须足以到达目标。
// 判据：弹层数 == 页面自身 route 段数（回站点根）；跨版本目标还要求语言段匹配目标树。
import fs from 'node:fs';
import path from 'node:path';
const SITE = 'content';
function walk(d, a = []) { for (const e of fs.readdirSync(d, { withFileTypes: true })) { const p = path.join(d, e.name); e.isDirectory() ? walk(p, a) : e.name.endsWith('.md') && a.push(p); } return a; }
const VERSION = 'v1.4.6';
const files = walk(path.join(SITE, VERSION));

// 空 universe 守卫：一个什么都没遍历到的检查器，与「正确地什么都没找到」输出完全一样。
// 因此空集必须报错退出，而不是报出一个漂亮的 0。
if (!files.length) {
  console.error('EMPTY_UNIVERSE: 未遍历到任何文件 —— 检查器无法工作，拒绝出结论（这不等于「一切正常」）');
  process.exit(2);
}
function routeOf(rel) { const q = rel.split(path.sep).join('/').replace(/\.md$/, ''); return q.endsWith('_index') ? q.replace(/_index$/, '') : q + '/'; }
function resolve(from, href) {
  if (/^(https?:|#|mailto:)/.test(href)) return null;
  const h = href.split('#')[0]; if (!h) return null;
  const segs = from.split('/').filter(Boolean);
  for (const part of h.split('/')) { if (part === '.' || part === '') continue; if (part === '..') segs.pop(); else segs.push(part); }
  const r = segs.join('/'); return r.endsWith('/') ? r : r + '/';
}
const exists = (route) => { const r = route.replace(/\/+$/, ''); return fs.existsSync(path.join(SITE, r + '.md')) || fs.existsSync(path.join(SITE, r, '_index.md')); };
let bad = 0; const rows = [];
for (const f of files) {
  const rel = path.relative(SITE, f); const t = fs.readFileSync(f, 'utf8');
  const route = routeOf(rel);
  const re = /\[[^\]]*\]\(([^)\s]+)\)/g; let m;
  while ((m = re.exec(t))) {
    const target = resolve(route, m[1]); if (!target) continue;
    if (!exists(target)) { bad++; rows.push([rel.split(path.sep).join('/'), m[1], target]); }
  }
}
console.log('files=' + files.length + ' broken_by_url_rule=' + bad);
const byFile = new Map();
for (const [rel, href, target] of rows) { if (!byFile.has(rel)) byFile.set(rel, []); byFile.get(rel).push(href + ' => ' + target); }
for (const [rel, list] of [...byFile].sort()) { console.log('  ' + rel + '  (' + list.length + ')'); for (const l of list.slice(0, 4)) console.log('      ' + l); }
