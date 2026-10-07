// 把无证据断言按【归属】拆开。
// ⚠ 口径警告（worker-43 #6524 纠正后）：
//   「git 脏」≠「本会话作者」。一个文件可能因【只改了一行指针】而变脏，
//   而它的正文断言是更早的产线写的。
//   viewmodel 实例：23 页全部脏，但 worker-43 只改过 **File:** 一行，
//   断言在 HEAD 里已逐字存在（ActionOptionDataVM 5 / ArmyManagementItemVM 3 / CampaignOptionsManager 6，HEAD 与现在完全相同）。
// ⇒ 本工具【不能】给出「本会话作者」这一维度；它只能给出「当前脏」。
// ⇒ 要按作者分派，必须另外核 git diff 里【非 File: 的行】有没有正文改动。
// 用法: node tools/_census-claim-evidence-ab.mjs
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { join } from 'node:path';

const API = 'content/v1.4.5/zh/api';
const BS = String.fromCharCode(92);

const CLAIM = [
  /零\s*消费|没有消费|无消费点|0\s*个消费/,
  /零\s*命中|0\s*处命中|零\s*处|0\s*处/,
  /从未|从没|一次都没|一次也没有/,
  /唯一\s*(?:的|入口|一处|路径|入口点)/,
  /不存在|查不到|没有找到|找不到|在\s*1\.4\.5\s*里没有/,
  /无引用|未引用|没有引用|零引用/,
  /没有实现|未实现|空\s*实现|全是空体/,
];
const EV = [
  /`?grep\b/i, /`?findstr\b/i, /`?ripgrep\b|\brg\s+-/i, /`?find\s+\S*\.cs/i,
  /`?sed\s+-n/i, /`?awk\b/i, /`?wc\s+-l/i, /`?dir\s+\/s/i,
  /全树|整个源码树|整个树|整棵树|全\s*1\.4\.5/,
  /命中\s*\d|\d\s*处命中|出现\s*\d\s*次|\d\s*次命中/,
  /搜索|检索|查得|查过|实测\s*\d/,
];

const files = [];
(function walk(d) {
  for (const e of readdirSync(d)) {
    const p = join(d, e);
    const s = statSync(p);
    if (s.isDirectory()) walk(p); else if (p.endsWith('.md')) files.push(p);
  }
})(API);

const dirty = new Set(execSync('git status --porcelain -- ' + API, { encoding: 'utf8', maxBuffer: 1 << 26 })
  .split(/\r?\n/).filter(Boolean).map(l => l.slice(3).trim().split(BS).join('/')));

const per = new Map();
let A_no = 0, A_ev = 0, A_p = 0, B_no = 0, B_ev = 0, B_p = 0;

for (const pg of files) {
  const rel = pg.split(BS).join('/');
  if (/_index\.md$/.test(pg)) continue;
  const t = readFileSync(pg, 'utf8');
  const b = rel.split('/')[4];
  let no = 0, ev = 0;
  for (const para of t.split(/\n\s*\n/)) {
    if (!CLAIM.some(re => re.test(para))) continue;
    if (EV.some(re => re.test(para))) ev++; else no++;
  }
  if (!no && !ev) continue;
  const isD = dirty.has(rel);
  if (isD) { A_no += no; A_ev += ev; A_p++; } else { B_no += no; B_ev += ev; B_p++; }
  if (!per.has(b)) per.set(b, { Ap: 0, Ano: 0, Aev: 0, Bp: 0, Bno: 0, Bev: 0 });
  const x = per.get(b);
  if (isD) { x.Ap++; x.Ano += no; x.Aev += ev; } else { x.Bp++; x.Bno += no; x.Bev += ev; }
}

console.log('⚠ 口径：A 组 = 【当前脏文件】，不是【本会话作者】。两者不等价（见文件头）。');
console.log('A 组 = 本会话改写过的页（风险集中）    B 组 = 本会话之前就存在的页（本轮不动，登记待审存量）');
console.log('命令：node tools/_census-claim-evidence-ab.mjs');
console.log('');
console.log(['桶', 'A组页', 'A无证据', 'A有证据', 'B组页', 'B无证据', 'B有证据'].join('\t'));
for (const [b, x] of [...per].sort((a, c) => c[1].Ano - a[1].Ano))
  console.log([b, x.Ap, x.Ano, x.Aev, x.Bp, x.Bno, x.Bev].join('\t'));
console.log(['TOTAL', A_p, A_no, A_ev, B_p, B_no, B_ev].join('\t'));
console.log('');
const tot = A_no + A_ev + B_no + B_ev;
console.log(`A 组 ${A_p} 页：无证据 ${A_no} / 有证据 ${A_ev}  ⇒ 复查清单 = A_no 条`);
console.log(`B 组 ${B_p} 页：无证据 ${B_no} / 有证据 ${B_ev}  ⇒ 待审存量 = ${B_no} 条（本轮不动）`);
console.log(`全部 ${tot} 条断言，A 组占比 ${(((A_no + A_ev) / tot) * 100).toFixed(1)}%`);
