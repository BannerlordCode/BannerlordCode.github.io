// 引用契约检查器 —— 只实现 CONTRACT.md，不做推测。
// 用法: node tools/_cite-contract.mjs <page.md> [...]
// 退出码: 0 = 无缺陷; 1 = 有 BARE/DRIFT/FABRICATED; 2 = 参数/读文件失败
//
// §4v 有效范围声明（必读，引用本尺的结论前先看这一段）：
//   本尺只对【一句一文件、一行一处引用】有效。
//   句中出现 ≥2 个不同 *.cs 时，本尺【不判定】，标 UNKNOWN 并写明超出范围。
//   ⇒ 在该句式上给出的 FABRICATED / DRIFT 不可采信（v4 旧行为会误判，实测该句式全树 237 句）。
//   本尺只索引 bannerlord-1.4.5/Bannerlord.Source（含 7 个 Modules.* 兄弟根）；
//   【不校验】指向 1.3.x / 1.4.6+ 的引用（那是多版本页面，见 §6v）。
//
// ── 判据（boss #4442 ③④ 定稿）────────────────────────────────────────
// 文件解析优先级，取第一个【唯一命中】：
//   1. 句中出现的 *.cs 文件名                     → 用它
//   2. 句中反引号标识符，能唯一匹配到一个类型声明  → 用它
//   3. 句中 PascalCase 标识符，能唯一匹配到类型    → 用它
//   4. 都不唯一命中 ⇒ UNKNOWN，不报数
//
// 「唯一」的判据：在【本页 **File:** 指向的文件】里能匹配到恰好 1 个声明
//   匹配 0 个 ⇒ UNKNOWN（不是 FABRICATED —— 匹配不到可能是符号取法不对）
//   匹配 >1 个 ⇒ UNKNOWN
//
// FABRICATED 的唯一触发条件（严格窄口径）：
//   文件由第 1 优先级【确定存在】 + 句中【明确点名】了该符号
//   + 该符号字符串在整个文件里【一次都没出现】
// ⇒ 「我找不到」与「它不存在」必须分开：查找失败在两个方向上都不是结论。
//
// DRIFT = 符号【存在】但行号对不上（±8 行窗口）→ 可修
// ─────────────────────────────────────────────────────────────────────
import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join, basename } from 'node:path';

const ROOT = 'C:/WorkSpace/Bannerlord/bannerlord-1.4.5/Bannerlord.Source';
const BS = String.fromCharCode(92);
const TOL = 8;

// ⚠ 索引整个 Bannerlord.Source/，不是 bin/ —— 1.4.5 有多个源码根
//   bin/ · Modules.SandBox/ · Modules.Native/ · Modules.Multiplayer/
//   只索引 bin/ 会把 Modules.* 的文件判成不存在（已实测反证 SandBoxSaveHelper.cs）
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
function declaredTypes(abs) {
  const key = 'T:' + abs;
  if (cache.has(key)) return cache.get(key);
  const set = new Set();
  for (const l of linesOf(abs)) {
    const m = /\b(?:class|struct|interface|enum|record|delegate)\s+([A-Za-z_]\w*)/.exec(l);
    if (m) set.add(m[1]);
  }
  cache.set(key, set);
  return set;
}
function pageOwnFile(text) {
  // ⚠ 源路径字段有 5 种键名（**File:** / **Source:** / **源文件:** / **源文件路径:** / **Source path:**）。
  //   漏认任何一个，那一页的 **File:** 就解析不出来 ⇒ target 为 null ⇒ 被判 UNKNOWN，
  //   而 UNKNOWN 按契约不报数 ⇒ 表现为「引用无法校验」但看不出是键的问题。
  const fm = /\*\*\s*(?:File|Source|源文件路径|源文件|Source path \(1\.4\.5 authoritative\))\s*:\*\*\s*`?([^`\r\n]+?)`?\s*$/m.exec(text);
  if (!fm) return null;
  let r = fm[1].trim().replace(/^bin[\\/]/, '').replace(/^Bannerlord\.Source[\\/]/, '').replace(/^\.?\//, '');
  const a = ROOT + BS + r.split('/').join(BS);
  if (existsSync(a)) return a;
  const c = byBase.get(r.split('/').pop().toLowerCase());
  return c && c.length === 1 ? c[0] : null;
}

const args = process.argv.slice(2);
if (!args.length) { console.error('usage: node _cite-contract.mjs <page.md> [...]'); process.exit(2); }

let checked = 0, bare = 0, drift = 0, fabricated = 0, unknown = 0, pass = 0;
const rows = [], scanned = [];

for (const pg of args) {
  if (!existsSync(pg)) { console.error('ENOENT ' + pg); process.exit(2); }
  scanned.push(pg);
  const text = readFileSync(pg, 'utf8');
  const own = pageOwnFile(text);
  const ownTypes = own ? declaredTypes(own) : new Set();
  const pageType = basename(pg, '.md');

  for (const sent of text.split(/[\n。；！？]+/)) {
    const re = /[:：]\s*(\d{1,4})/g;
    let m;
    while ((m = re.exec(sent))) {
      const ln = +m[1];
      if (!ln) continue;
      checked++;
      const fileM = /([A-Za-z0-9_]+\.cs)/.exec(sent);

      // §6w3（worker-43 实测）：一句里出现 ≥2 个不同 *.cs 时，本尺超出有效范围。
      //   旧行为：只取【第一个】 .cs 字面量当目标，把后面那些文件的行号也拿去它校验
      //           ⇒ 误判 FABRICATED / DRIFT。全树该句式 237 句（worker-43 指纹 grep）
      //   新行为：标 UNKNOWN 并写明「多文件句式，超出本尺有效范围」—— 把错判改成诚实的不判定。
      //   本尺有效范围（§4v）：一句一文件、一行一处引用。
      const allFiles = [...new Set([...sent.matchAll(/([A-Za-z0-9_]+\.cs)/g)].map(m => m[1]))];
      if (allFiles.length >= 2) {
        unknown++;
        rows.push([pg, 'UNKNOWN', '多文件句式（本句 ' + allFiles.length + ' 个 .cs：' + allFiles.join(', ') + '）· 超出本尺有效范围', sent]);
        continue;
      }

      // ── 优先级 1：句中文件名 ──
      let target = null, how = '';
      if (fileM) {
        const cands = byBase.get(fileM[1].toLowerCase());
        if (cands && cands.length === 1) { target = cands[0]; how = 'P1 ' + fileM[1]; }
        else if (cands && cands.length > 1) {
          if (own && cands.includes(own)) { target = own; how = 'P1 ' + fileM[1] + ' (本页File唯一)'; }
        }
      }
      // ── 优先级 2/3：本页 File: 文件内唯一命中的标识符 ──
      if (!target && own) {
        const ids = [...new Set([
          ...[...sent.matchAll(/`([A-Za-z_]\w*)`/g)].map(x => x[1]),
          ...[...sent.matchAll(/\b([A-Z][A-Za-z0-9_]{2,})\b/g)].map(x => x[1]),
        ])].filter(s => s !== pageType);
        const uniq = ids.filter(s => ownTypes.has(s));
        if (uniq.length === 1) { target = own; how = 'P2 ' + uniq[0]; }
      }

      if (!target) {
        if (!fileM && !own) { bare++; rows.push([pg, 'BARE', '无文件名且本页 **File:** 解析不出', sent]); }
        else if (fileM) {
          unknown++;
          const cands = byBase.get(fileM[1].toLowerCase());
          const why = !cands ? '句中文件名在 1.4.5 树里不存在' :
            (cands.length > 1 ? '句中文件名在树里 ' + cands.length + ' 处命中，且都不等于本页 File:' :
                                '句中文件名未命中，且本页 File: 解析不出');
          rows.push([pg, 'UNKNOWN', why + ' :: ' + fileM[1], sent]);
        }
        else { unknown++; rows.push([pg, 'UNKNOWN', '句中无文件名，且句内标识符未唯一命中本页 File: 的类型', sent]); }
        continue;
      }

      const L = linesOf(target);
      if (ln > L.length) { unknown++; rows.push([pg, 'UNKNOWN', '行号 ' + ln + ' 超出 ' + basename(target) + '(' + L.length + ' 行) ⇒ 可能指另一文件', sent]); continue; }

      // 句中点名的符号（用于 ±8 校验 / FABRICATED 判定）
      const named = [...sent.matchAll(/`([A-Za-z_]\w*)`/g)].map(x => x[1])
        .filter(s => s !== pageType && !/^\d/.test(s));
      // worker-43 实测的盲区：`Foo.cs:21` 这种写法里没有独立标识符，
      // 而 `([A-Za-z_]\w*)` 匹配不到含点与冒号的内容 ⇒ 取不出符号 ⇒ 整条判 UNKNOWN。
      // 修法（治本）：从反引号内的 `Name.cs:NNN` 取 Name 作为候选符号。
      if (!named.length) {
        for (const m of sent.matchAll(/`([A-Za-z_][A-Za-z0-9_]*)\.cs:\d+`/g)) {
          if (m[1] !== pageType) named.push(m[1]);
        }
      }
      const sym = named.find(s => s !== (how.match(/P[12] (.+)$/) || [])[1]) || named[0] || '';

      if (!sym) { pass++; continue; }
      let near = false;
      for (let k = Math.max(0, ln - 1 - TOL); k <= Math.min(L.length - 1, ln - 1 + TOL); k++) {
        if (L[k].includes(sym)) { near = true; break; }
      }
      if (near) { pass++; continue; }
      // 符号在整个文件里一次都没出现 ⇒ 才叫 FABRICATED（严格窄口径）
      const anywhere = L.some(l => l.includes(sym));
      if (!anywhere && how.startsWith('P1 ')) {
        fabricated++;
        rows.push([pg, 'FABRICATED', how + ' · 符号 ' + sym + ' 在 ' + basename(target) + ' 全文件 0 次命中', sent]);
      } else {
        drift++;
        rows.push([pg, 'DRIFT', how + ' · 符号 ' + sym + ' 在文件内存在但不在 :' + ln + ' ±' + TOL + ' 行窗口', sent]);
      }
    }
  }
}

const byPage = new Map();
for (const r of rows) if (r[1] === 'BARE') byPage.set(r[0], (byPage.get(r[0]) || 0) + 1);
const barePages = byPage.size;

console.log('判据 = CONTRACT.md（boss #4442 ③④）· 不做推测');
console.log('命令 = node tools/_cite-contract.mjs <' + scanned.length + ' 页>');
console.log('扫描页数=' + scanned.length + '   引用总数=' + checked);
console.log('  ✅ PASS       = ' + pass);
console.log('  ❌ BARE       = ' + bare + '   (句中无 *.cs 且标识符未唯一命中类型)');
console.log('  ⚠  DRIFT      = ' + drift + '   (符号存在，行号不在 ±' + TOL + ' 窗口)');
console.log('  ✗  FABRICATED = ' + fabricated + '   (P1 文件确定 + 点名符号在全文件 0 次出现)');
console.log('  ?  UNKNOWN    = ' + unknown + '   (判不了，按契约不报数)');
console.log('校验和: ' + (pass + bare + drift + fabricated + unknown) + ' / ' + checked +
            ((pass + bare + drift + fabricated + unknown === checked) ? '  ✓' : '  ✗ 不自洽'));
console.log('');
console.log('含 BARE 的页: ' + barePages + ' / ' + scanned.length);
for (const [k, v] of [...byPage].sort((a, b) => b[1] - a[1])) console.log('  ' + String(v).padStart(3) + '  ' + k.replace(/\\/g, '/'));
console.log('');
console.log('UNKNOWN 成因分布:');
const whyCount = new Map();
for (const r of rows) if (r[1] === 'UNKNOWN') {
  const k = r[2].split(' :: ')[0].replace(/\d+ 处/, 'N 处').replace(/[A-Za-z0-9_]+\.cs/, 'X.cs');
  whyCount.set(k, (whyCount.get(k) || 0) + 1);
}
for (const [k, v] of [...whyCount].sort((a, b) => b[1] - a[1])) console.log('  ' + String(v).padStart(5) + '  ' + k);
console.log('');
console.log('样例（前 10 条缺陷）:');
for (const r of rows.filter(x => x[1] !== 'UNKNOWN').slice(0, 10))
  console.log('  [' + r[1] + '] ' + r[0].replace(/\\/g, '/').split('/').slice(-1)[0] + ' :: ' + r[2]);
process.exit(bare + drift + fabricated > 0 ? 1 : 0);
