// 只算【本轮已交付的页】（= git 脏文件）里，有多少属于「行为不在源码树里」。
// 用法: node tools/_census-delivered.mjs
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { execSync } from 'node:child_process';
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

const isCtl = s => /^(?:if|for|foreach|while|switch|try|catch|finally|lock|fixed|do|else)\b/.test(s);
function isSig(s) {
  if (!s || s === '{' || s === '}' || s.startsWith('namespace ') || s.startsWith('using ')) return false;
  if (/^(?:public|private|protected|internal)\s+(?:sealed\s+|abstract\s+|static\s+|partial\s+)*(?:class|struct|interface|enum|record|delegate)\b/.test(s)) return false;
  return /\)\s*$/.test(s) || /:\s*(?:base|this)\s*\([^;]*\)\s*$/.test(s);
}
function classify(abs) {
  const L = readFileSync(abs, 'utf8').split(/\r?\n/);
  let bodies = 0, empty = 0, expr = 0;
  for (let i = 0; i < L.length; i++) {
    const s = L[i].replace(/\/\/.*$/, '').trim();
    if (/^(?:public|private|protected|internal|static|override|virtual|abstract)/.test(s) && /=>\s*\S/.test(s) && !isCtl(s)) { expr++; continue; }
    if (!isSig(s)) continue;
    let open = -1;
    for (let j = i + 1; j <= Math.min(L.length - 1, i + 3); j++) {
      const t = L[j].replace(/\/\/.*$/, '').trim();
      if (!t || t.startsWith('[')) continue;
      if (t.startsWith('{')) { open = j; break; }
      break;
    }
    if (open < 0) continue;
    bodies++;
    let depth = 0, inner = '', closed = false;
    for (let j = open; j < L.length; j++) {
      for (const ch of L[j]) { if (ch === '{') depth++; else if (ch === '}') { depth--; if (depth === 0) { closed = true; break; } } }
      if (closed) break;
      inner += L[j].replace(/\/\/.*$/, '');
    }
    if (!inner.replace(/[{}]/g, '').replace(/\s/g, '')) empty++;
  }
  return { total: bodies + expr, empty };
}

const out = execSync('git status --porcelain -- content/v1.4.5/zh/api', { encoding: 'utf8', maxBuffer: 1 << 26 });
const pages = out.split(/\r?\n/).filter(Boolean).map(l => l.slice(3).trim()).filter(f => f.endsWith('.md'));

const t = { NORMAL: 0, DECLARATION_ONLY: 0, BODIES_EMPTY: 0, FILE_UNRESOLVED: 0 };
const bad = { DECLARATION_ONLY: [], BODIES_EMPTY: [] };
for (const pg of pages) {
  const text = readFileSync(pg, 'utf8');
  const fm = /\*\*\s*(?:File|Source|Source path \(1\.4\.5 authoritative\))\s*:\*\*\s*`?([^`\r\n]+?)`?\s*$/m.exec(text);
  if (!fm) { t.FILE_UNRESOLVED++; continue; }
  const r = fm[1].trim().replace(/^bin[\\/]/, '').replace(/^Bannerlord\.Source[\\/]/, '').replace(/^\.?\//, '');
  let abs = SRC + BS + r.split('/').join(BS);
  if (!existsSync(abs)) { const c = byBase.get(r.split('/').pop().toLowerCase()); abs = c && c.length === 1 ? c[0] : null; }
  if (!abs) { t.FILE_UNRESOLVED++; continue; }
  const k = classify(abs);
  if (k.total === 0) { t.DECLARATION_ONLY++; bad.DECLARATION_ONLY.push(pg.replace(/\\/g, '/')); }
  else if (k.empty / k.total >= 0.5) { t.BODIES_EMPTY++; bad.BODIES_EMPTY.push(pg.replace(/\\/g, '/')); }
  else t.NORMAL++;
}
console.log('本轮已交付的页（= git 脏文件）里，「行为不在源码树里」的占比');
console.log('命令：node tools/_census-delivered.mjs');
console.log('');
const T = pages.length;
console.log('  脏页总数              = ' + T);
console.log('  NORMAL（有方法体）    = ' + t.NORMAL + '   (' + ((t.NORMAL / T) * 100).toFixed(1) + '%)');
console.log('  DECLARATION_ONLY      = ' + t.DECLARATION_ONLY + '   (' + ((t.DECLARATION_ONLY / T) * 100).toFixed(1) + '%)');
console.log('  BODIES_EMPTY          = ' + t.BODIES_EMPTY + '   (' + ((t.BODIES_EMPTY / T) * 100).toFixed(1) + '%)');
console.log('  FILE_UNRESOLVED       = ' + t.FILE_UNRESOLVED);
const badN = t.DECLARATION_ONLY + t.BODIES_EMPTY;
console.log('');
console.log('  交付页里属「无行为」类 = ' + badN + ' / ' + T + '  (' + ((badN / T) * 100).toFixed(1) + '%)');
console.log('  ⇒ 真货比例             = ' + (T - badN - t.FILE_UNRESOLVED) + ' / ' + T);
if (bad.DECLARATION_ONLY.length) { console.log('\n[DECLARATION_ONLY] 页名:'); console.log('  ' + bad.DECLARATION_ONLY.join('\n  ')); }
if (bad.BODIES_EMPTY.length) { console.log('\n[BODIES_EMPTY] 页名:'); console.log('  ' + bad.BODIES_EMPTY.join('\n  ')); }
