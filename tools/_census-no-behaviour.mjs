// 只读普查：content/v1.4.5/zh/api/** 里有多少页属于「行为不在源码树里」这一类。
// 用法: node tools/_census-no-behaviour.mjs [桶名 ...]      不带参数 = 全 9,423 页
//       node tools/_census-no-behaviour.mjs --selftest       先跑阳性对照
//
// 判据（每页）：
//   FILE_UNRESOLVED     该页 **File:** 指向的文件在 1.4.5 源码树里找不到
//   DECLARATION_ONLY    文件里没有任何方法体（接口成员 / 抽象声明 / 实现在 dll）
//   BODIES_EMPTY        有方法体，但空体占比 >= 50%
//   NORMAL              有实质方法体
//
// 为什么这一类最危险：六段可以全齐、DEEP=pass、BARE=0，
// 而页面里没有一个关于「它做什么」的结论能被 file:line 支撑 —— 现有全部检查都看不出来。
//
// ⚠ v1 曾报 80.6%，那是【检测器的错】：旧版要求 `)` 与 `{` 同行，
//   而 C# 多行签名把 `{` 放在下一行，于是该文件里每一个方法都被漏掉。
//   —— 这就是「阳性对照没过就不许报数」那条规矩的由来。
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
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

const cache = new Map();
function linesOf(abs) {
  if (!cache.has(abs)) cache.set(abs, readFileSync(abs, 'utf8').split(/\r?\n/));
  return cache.get(abs);
}

const isCtl = s => /^(?:if|for|foreach|while|switch|try|catch|finally|lock|fixed|do|else)\b/.test(s);

function isSig(s) {
  if (!s || s === '{' || s === '}' || s.startsWith('namespace ') || s.startsWith('using ')) return false;
  if (/^(?:public|private|protected|internal)\s+(?:sealed\s+|abstract\s+|static\s+|partial\s+)*(?:class|struct|interface|enum|record|delegate)\b/.test(s)) return false;
  // 成员签名跨行：以 ) 或 : base(...) 结尾、不以 ; 结尾
  return /\)\s*$/.test(s) || /:\s*(?:base|this)\s*\([^;]*\)\s*$/.test(s);
}

function classifyFile(abs) {
  const L = linesOf(abs);
  let bodies = 0, emptyBodies = 0, exprBodies = 0;
  for (let i = 0; i < L.length; i++) {
    const s = L[i].replace(/\/\/.*$/, '').trim();
    if (/^(?:public|private|protected|internal|static|override|virtual|abstract)/.test(s) && /=>\s*\S/.test(s) && !isCtl(s)) { exprBodies++; continue; }
    if (!isSig(s)) continue;
    let open = -1;
    for (let j = i + 1; j <= Math.min(L.length - 1, i + 3); j++) {
      const t = L[j].replace(/\/\/.*$/, '').trim();
      if (!t || t.startsWith('[')) continue;
      if (t.startsWith('{')) { open = j; break; }
      break;                       // 抽象/接口声明：没有 body
    }
    if (open < 0) continue;
    bodies++;
    let depth = 0, inner = '', closed = false;
    for (let j = open; j < L.length; j++) {
      for (const ch of L[j]) {
        if (ch === '{') depth++;
        else if (ch === '}') { depth--; if (depth === 0) { closed = true; break; } }
      }
      if (closed) break;
      inner += L[j].replace(/\/\/.*$/, '');
    }
    if (!inner.replace(/[{}]/g, '').replace(/\s/g, '')) emptyBodies++;
  }
  return { bodies, emptyBodies, exprBodies, total: bodies + exprBodies, lines: L.length };
}

function verdictOf(r) {
  if (r.total === 0) return 'DECLARATION_ONLY';
  if (r.emptyBodies / r.total >= 0.5) return 'BODIES_EMPTY';
  return 'NORMAL';
}

if (process.argv.includes('--selftest')) {
  console.log('阳性对照 —— 报数前必须全 PASS');
  const cases = [
    ['AcceptCallToWarOfferMapNotification.cs', 'NORMAL', '已知好页: 构造器x2 + IsValid() + 表达式体属性x2'],
    ['IMbEvent.cs', 'DECLARATION_ONLY', '纯接口签名, 实现在 native dll'],
    ['CustomField.cs', 'NORMAL', '纯数据类, 但有属性体'],
    ['Vec3BasicTypeSerializer.cs', 'NORMAL', '显式接口实现, 有方法体'],
  ];
  let fail = 0;
  for (const [name, want, why] of cases) {
    const c = byBase.get(name.toLowerCase());
    if (!c || c.length !== 1) { console.log(`  ??   ${name} 定位失败, 跳过`); fail++; continue; }
    const r = classifyFile(c[0]);
    const got = verdictOf(r);
    const ok = got === want;
    if (!ok) fail++;
    console.log(`  ${ok ? 'PASS' : 'FAIL'}  ${name}  期望=${want} 实得=${got}  bodies=${r.bodies} expr=${r.exprBodies} empty=${r.emptyBodies}   (${why})`);
  }
  console.log(fail === 0 ? '\n对照全过, 可以报数。' : `\n对照失败 ${fail} 项 —— 不许报数。`);
  process.exit(fail === 0 ? 0 : 1);
}

const only = new Set(process.argv.slice(2).filter(a => !a.startsWith('--')));
const files = [];
(function walk(d) {
  for (const e of readdirSync(d)) {
    const p = join(d, e);
    const s = statSync(p);
    if (s.isDirectory()) walk(p); else if (p.endsWith('.md')) files.push(p);
  }
})(API);

const buckets = new Map();
const examples = new Map();
function add(b, k, page) {
  if (!buckets.has(b)) buckets.set(b, { n: 0, FILE_UNRESOLVED: 0, DECLARATION_ONLY: 0, BODIES_EMPTY: 0, NORMAL: 0 });
  const x = buckets.get(b); x.n++; x[k]++;
  if (k !== 'NORMAL') {
    if (!examples.has(k)) examples.set(k, []);
    if (examples.get(k).length < 6) examples.get(k).push(page);
  }
}

for (const pg of files) {
  const b = pg.replace(/\\/g, '/').split('/')[4];
  if (only.size && !only.has(b)) continue;
  const t = readFileSync(pg, 'utf8');
  // ⚠ 源路径字段有 5 种键名，缺一个就会把好路径误判成「没字段」：
  //     **File:** 8846 · **Source:** 108 · **源文件:** 255 · **源文件路径:** 28 · **Source path:** 1
  //   （实测：那 283 页的中文键里【没有一页】同时带 Latin 键，所以漏认 = 整页落进 FILE_UNRESOLVED）
  const fm = /\*\*\s*(?:File|Source|源文件路径|源文件|Source path \(1\.4\.5 authoritative\))\s*:\*\*\s*`?([^`\r\n]+?)`?\s*$/m.exec(t);
  const page = pg.replace(/\\/g, '/');
  if (!fm) { add(b, 'FILE_UNRESOLVED', page); continue; }
  const rel = fm[1].trim().replace(/^bin[\\/]/, '').replace(/^Bannerlord\.Source[\\/]/, '').replace(/^\.?\//, '');
  let abs = ROOT + BS + rel.split('/').join(BS);
  if (!existsSync(abs)) {
    const c = byBase.get(rel.split('/').pop().toLowerCase());
    abs = c && c.length === 1 ? c[0] : null;
  }
  if (!abs) { add(b, 'FILE_UNRESOLVED', page); continue; }
  add(b, verdictOf(classifyFile(abs)), page);
}

console.log('判据：页面 **File:** 指向的源文件里有没有可支撑行为结论的方法体');
console.log('命令：node tools/_census-no-behaviour.mjs --selftest   (先过阳性对照再报数)');
console.log('命令：node tools/_census-no-behaviour.mjs' + (only.size ? ' ' + [...only].join(' ') : ''));
console.log('');
console.log(['bucket', 'total', 'FILE_UNRESOLVED', 'DECLARATION_ONLY', 'BODIES_EMPTY', 'NORMAL', '无行为合计'].join('\t'));
let T = 0, FU = 0, DO = 0, BE = 0, NO = 0;
const rows = [...buckets].sort((a, c) => (c[1].FILE_UNRESOLVED + c[1].DECLARATION_ONLY + c[1].BODIES_EMPTY) - (a[1].FILE_UNRESOLVED + a[1].DECLARATION_ONLY + a[1].BODIES_EMPTY));
for (const [b, x] of rows) {
  const bad = x.FILE_UNRESOLVED + x.DECLARATION_ONLY + x.BODIES_EMPTY;
  T += x.n; FU += x.FILE_UNRESOLVED; DO += x.DECLARATION_ONLY; BE += x.BODIES_EMPTY; NO += x.n - bad;
  console.log([b, x.n, x.FILE_UNRESOLVED, x.DECLARATION_ONLY, x.BODIES_EMPTY, x.NORMAL, bad].join('\t'));
}
console.log(['TOTAL', T, FU, DO, BE, NO, FU + DO + BE].join('\t'));
console.log('');
console.log(`行为不在源码树里 = ${FU + DO + BE} / ${T}  (${((FU + DO + BE) / T * 100).toFixed(1)}%)`);
console.log(`  FILE_UNRESOLVED  = ${FU}  不是「没行为」, 是 File: 指向的文件找不到, 需单独定性`);
console.log(`  DECLARATION_ONLY = ${DO}  文件里一个方法体都没有（接口/抽象/native 实现在 dll）`);
console.log(`  BODIES_EMPTY     = ${BE}  有方法体但过半为空体`);
for (const [k, v] of examples) console.log(`\n[${k}] 样例:\n  ` + v.join('\n  '));
