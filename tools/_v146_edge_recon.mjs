// 只读对账：手写页出链总数 / 其中指向生成页的条数（三种计数口径并列，供与 Boss 的 3826/614 对账）
import fs from 'node:fs';
import path from 'node:path';
const ROOT = 'content/v1.4.6';
function walk(d, acc = []) { for (const e of fs.readdirSync(d, { withFileTypes: true })) { const p = path.join(d, e.name); if (e.isDirectory()) walk(p, acc); else if (e.name.endsWith('.md')) acc.push(p); } return acc; }
const files = walk(ROOT);
const GEN_ZH = /：(?:TaleWorlds|SandBox|StoryMode)\.\S+ 的 public (?:类|结构体|接口|枚举)/;
const GEN_EN = /: a public (?:class|struct|interface|enum) in (?:TaleWorlds|SandBox|StoryMode)\.\S+/;
function genReason(t) {
  if (t.includes('<!-- generated-by:')) return 'marker';
  if (t.includes('Batch first draft')) return 'batch';
  const fm = t.match(/^---\r?\n([\s\S]*?)^---/m); const d = fm ? fm[1] : '';
  if (GEN_ZH.test(d)) return 'zh-desc'; if (GEN_EN.test(d)) return 'en-desc';
  const head = t.slice(0, 4000);
  if (/^\*\*Bucket:\*\*/m.test(head) && /^\|\s*成员\s*\|\s*签名\s*\|\s*种类\s*\|/m.test(t)) return 'member-table';
  return null;
}
const gen = new Map(); // route -> true
const routeOf = (rel) => { const p = rel.split(path.sep).join('/').replace(/\.md$/, ''); return p.endsWith('_index') ? p.replace(/_index$/, '') : p + '/'; };
for (const f of files) { const t = fs.readFileSync(f, 'utf8'); if (genReason(t)) gen.set(routeOf(path.relative(ROOT, f)), true); }
function resolve(fromRoute, href) {
  if (/^(https?:|#|mailto:)/.test(href)) return null;
  const h = href.split('#')[0]; if (!h) return null;
  const segs = fromRoute.split('/').filter(Boolean);
  for (const part of h.split('/')) { if (part === '.' || part === '') continue; if (part === '..') segs.pop(); else segs.push(part); }
  const r = segs.join('/'); return r.endsWith('/') ? r : r + '/';
}
const hand = files.filter((f) => !genReason(fs.readFileSync(f, 'utf8')));
let outTotal = 0, toGenOccurrences = 0, toGenDistinctPairs = 0, toUnknown = 0;
const pairs = new Set(); const unresolved = new Set();
for (const f of hand) {
  const rel = path.relative(ROOT, f); const t = fs.readFileSync(f, 'utf8');
  const re = /\[[^\]]*\]\(([^)\s]+)\)/g; let m;
  while ((m = re.exec(t))) {
    outTotal++;
    const tg = resolve(routeOf(rel), m[1]);
    if (!tg) continue;
    if (gen.has(tg)) { toGenOccurrences++; pairs.add(rel + ' -> ' + tg); }
    else if (!fs.existsSync(path.join('content', tg + '_index.md')) && !fs.existsSync(path.join('content', tg + '.md'))) { toUnknown++; unresolved.add(rel + ' -> ' + tg); }
  }
}
toGenDistinctPairs = pairs.size;
console.log('HAND_FILES=' + hand.length);
console.log('A_outgoing_links_total=' + outTotal);
console.log('B_occurrences_pointing_to_GENERATED=' + toGenOccurrences);
console.log('B_distinct_file_target_pairs_to_generated=' + toGenDistinctPairs);
console.log('C_occurrences_pointing_to_NONEXISTENT=' + toUnknown + ' (distinct ' + unresolved.size + ')');
