// 只读：手写页出链中「指向不存在目标」的成因拆分（修正版：存在性检查先去掉尾斜杠）
// A = 目标是 worker-20 批次尚未写完的深写页 -> 等它写完自然收敛
// B = 目标的桶名不是现存桶（旧 slug 残留）-> 需单独一轮修
// C1 = 链接逃出版本根（指向站点根/其它版本）-> AUDIT_CONTENT_ROOT=v1.4.6 时无法判定，非本站内断链
// C2 = 其它真正不存在
import fs from 'node:fs';
import path from 'node:path';
const ROOT = 'content/v1.4.6';
const W20 = ['campaign/Campaign','campaign/CampaignEvents','campaign/Hero','campaign/Settlement','mission/Mission','mission/Agent','mission/Formation','mission/MissionBehavior','campaign-ext/MBObjectManager','campaign-ext/MBObjectBase','campaign/CampaignGameStarter','campaign/CampaignBehaviorBase','campaign/IDataStore','gui/ScreenManager','gui/ScreenBase','engine/GauntletLayer'];
function walk(d, a = []) { for (const e of fs.readdirSync(d, { withFileTypes: true })) { const p = path.join(d, e.name); e.isDirectory() ? walk(p, a) : e.name.endsWith('.md') && a.push(p); } return a; }
const files = walk(ROOT);
const ZH = /：(?:TaleWorlds|SandBox|StoryMode)\.\S+ 的 public (?:类|结构体|接口|枚举)/, EN = /: a public (?:class|struct|interface|enum) in (?:TaleWorlds|SandBox|StoryMode)\.\S+/;
function isGen(t) { if (t.includes('<!-- generated-by:')) return true; if (t.includes('Batch first draft')) return true; const m = t.match(/^---\r?\n([\s\S]*?)^---/m); const d = m ? m[1] : ''; if (ZH.test(d) || EN.test(d)) return true; if (/^\*\*Bucket:\*\*/m.test(t) && /^\|\s*成员\s*\|\s*签名\s*\|\s*种类\s*\|/m.test(t)) return true; return false; }
const routeOf = (rel) => { const q = rel.split(path.sep).join('/').replace(/\.md$/, ''); return q.endsWith('_index') ? q.replace(/_index$/, '') : q + '/'; };
const existsIn = (route) => { const r = route.replace(/\/+$/, ''); return fs.existsSync(path.join(ROOT, r + '.md')) || fs.existsSync(path.join(ROOT, r, '_index.md')); };
const existsSite = (route) => { const r = route.replace(/\/+$/, ''); return fs.existsSync(path.join('content', r + '.md')) || fs.existsSync(path.join('content', r, '_index.md')); };
function resolve(fromRoute, href) { if (/^(https?:|#|mailto:)/.test(href)) return null; const h = href.split('#')[0]; if (!h) return null; const segs = fromRoute.split('/').filter(Boolean); for (const part of h.split('/')) { if (part === '.' || part === '') continue; if (part === '..') segs.pop(); else segs.push(part); } const r = segs.join('/'); return r.endsWith('/') ? r : r + '/'; }
const buckets = new Set(); for (const lang of ['zh','en']) for (const e of fs.readdirSync(path.join(ROOT, lang, 'api'), { withFileTypes: true })) if (e.isDirectory()) buckets.add(e.name);
const bA = new Set(W20.map((w) => w.split('/')[0]));
const hand = files.filter((f) => !isGen(fs.readFileSync(f, 'utf8')));
const cat = { A: 0, B: 0, C1: 0, C2: 0 }; const det = { A: new Set(), B: new Set(), C1: new Set(), C2: new Set() };
let outTotal = 0;
for (const f of hand) {
  const rel = path.relative(ROOT, f); const t = fs.readFileSync(f, 'utf8');
  const re = /\[[^\]]*\]\(([^)\s]+)\)/g; let m;
  while ((m = re.exec(t))) {
    outTotal++;
    const tg = resolve(routeOf(rel), m[1]); if (!tg) continue;
    if (existsIn(tg)) continue;
    const key = rel.split(path.sep).join('/') + ' -> ' + tg;
    const seg = tg.split('/'); const bucket = seg.length > 2 ? seg[2] : null;
    if (bucket && bA.has(bucket) && W20.some((w) => tg.includes('/' + w + '/'))) { cat.A++; det.A.add(key); }
    else if (bucket && !buckets.has(bucket)) { cat.B++; det.B.add(key); }
    else if (!existsSite(tg)) { cat.C1++; det.C1.add(key); }
    else { cat.C2++; det.C2.add(key); }
  }
}
console.log('handwritten_outgoing_total=' + outTotal);
console.log('A_worker20_pending   occurrences=' + cat.A, 'distinct=' + det.A.size);
console.log('B_old_slug_residue   occurrences=' + cat.B, 'distinct=' + det.B.size);
console.log('C1_escapes_version_root (站点内存在，但 v1.4.6 审计根看不到) occurrences=' + cat.C1, 'distinct=' + det.C1.size);
console.log('C2_other_missing     occurrences=' + cat.C2, 'distinct=' + det.C2.size);
console.log('--- C2 明细 ---'); for (const x of [...det.C2].slice(0, 20)) console.log('  ', x);
