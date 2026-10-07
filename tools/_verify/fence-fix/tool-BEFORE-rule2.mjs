// tools/_selfcheck-consistency.mjs
// Does a page's own code contradict the page's own header?
//
// WHY THIS EXISTS
// A machine-generated placeholder once produced, on six pages:
//     **Type:** `public interface IFaceGeneratorHandler`
//     ... ```csharp
//     IIFaceGeneratorHandler service = ...;        <- doubled I, contradicts the header
// Every gate passed those pages: FFFD=0, DEEP=pass, section structure intact.
// What caught it was reading. But the SHAPE is mechanical — one page contains two
// identifiers that contradict each other, so a checker can compare them.
//
// This catches: an example that names a type which is not the documented type and is a
// near-miss of it (extra/removed prefix letter, case drift), plus example identifiers
// that exist in NO version tree while a one-character sibling does.
//
// WHAT IT DOES NOT CATCH: whether prose claims are true. A page can invent a whole
// construct and be internally consistent. This is a screen, not a verdict.
//
// Usage: node tools/_selfcheck-consistency.mjs <page.md> [<page.md> ...] [--ver <tree>]
//   --ver  which bannerlord-<ver> tree to search, e.g. bannerlord-1.3.0
//          (inferred from the page path when omitted)
//
// Prints one line per page:
//   <path>  CONSISTENT=<n> SUSPECT=<n>  VERDICT=<pass|review>
//   then each suspect: the identifier, the documented type, and where it came from.
//
// Exit: 0 = no suspects on any page. 1 = at least one page needs review.
//        2 = the tool could not run (no args, unreadable path, unreadable tree).
//
// KNOWN LIMITATION: it only compares identifiers that are ALREADY inside the page. A page
// that consistently invents a type name will pass. The three "confident error" carriers in
// CONTRACT §4b (shell / contradiction / fabrication, plus legitimate cross-file) have no
// gate; the defence there is sampling pages and reading them against source.
import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { join, basename, resolve, isAbsolute } from 'node:path';

const WS = 'C:/WorkSpace/Bannerlord';
const args = process.argv.slice(2);
if (args.length === 0) {
  console.error('usage: node tools/_selfcheck-consistency.mjs <page.md> [...] [--ver <tree>]');
  process.exit(2);
}
let verOverride = null;
const pages = [];
for (let i = 0; i < args.length; i++) {
  if (args[i] === '--ver') { verOverride = args[++i]; continue; }
  pages.push(args[i]);
}
if (pages.length === 0) { console.error('no page arguments'); process.exit(2); }

// The documented type(s) from the page header, e.g. "public interface IFaceGeneratorHandler"
function declaredTypes(text) {
  const out = [];
  for (const m of text.matchAll(/^\*\*Type:?\*\*\s*`?([^`\n]+?)`?\s*$/gm)) {
    for (const d of m[1].matchAll(/\b(?:class|interface|struct|enum|delegate)\s+([A-Za-z_]\w*)/g)) out.push(d[1]);
  }
  return [...new Set(out)];
}

// Identifiers appearing inside csharp fences
// ⚠️ 改这条之前先看这一行。
// 围栏正则曾经是 /```csharp\n/ —— 【只认 LF】。本仓部分页面是 CRLF，于是工具在这些页面上
// 找到 0 个 csharp 块，直接输出 IDENTIFIERS=0 VERDICT=pass：那是【假通过】，整页代码从未被检查。
// 2026-10-04 实测：v1.4.5/en/api 的 52 页总体里有 2 页 CRLF、12 个块、241 个标识符因此漏检。
// 现为 /\r?\n/。这是本会话第三例「一把尺给出漂亮的 0 而其实没量到」
// （前两例：bc-scan 的「区间内每行都空」在起点非空时静默放过 9 处；lead 的 65.9% 符号提取）。
// 自查同类形状：不要在本文件里再用“单字符 == 行尾”的写法（裸 \n、/.$/、用 $ 断行尾）。
function codeIdentifiers(text) {
  const out = [];
  for (const b of text.matchAll(/```csharp\r?\n([\s\S]*?)```/g)) {
    b[1].split(/\r?\n/).forEach((line, i) => {
      for (const m of line.matchAll(/\b([A-Z][A-Za-z0-9_]{3,})\b/g)) out.push({ id: m[1], line: i + 1, text: line.trim() });
    });
  }
  return out;
}

// one-character-off variants: leading extra char, or a doubled leading letter
function nearMiss(candidate, target) {
  if (candidate === target) return null;
  if (candidate.length === target.length + 1 && candidate.slice(1) === target) return 'extra leading letter';
  if (target.length === candidate.length + 1 && target.slice(1) === candidate) return 'missing leading letter';
  if (candidate.length === target.length && candidate.toLowerCase() === target.toLowerCase()) return 'case differs';
  // doubled first letter, e.g. IIFoo vs IFoo
  if (candidate.length === target.length + 1 && candidate[0] === candidate[1] && candidate.slice(1) === target) {
    return `doubled leading '${candidate[0]}'`;
  }
  return null;
}

// ⚠️ 改这条之前先看这一行。【本条曾造成静默假通过】
// inferVer 的返回曾经是 `bannerlord-${m[1]}`，而分组 (v[\d.]+) 【已经含开头的 v】，
// 于是它产出 "bannerlord-v1.4.5" —— 真实目录是 "bannerlord-1.4.5"。
// 后果：existsSync(root) === false ⇒ corpus = null ⇒ 规则 2 整段被 `if (src)` 跳过，
//       而工具仍然输出 IDENTIFIERS=N SUSPECT=0 VERDICT=pass 并 exit 0。
//       即：规则 2 从未运行，页面上却写着 pass。
// 2026-10-04 实测：同一页 UsableMachine.md，带 --ver 时 SUSPECT=3，不带 --ver 时 SUSPECT=0。
// 现在：先剥掉分组里的 v 再拼；且 corpus 取不到时【响亮失败】(exit 2)，绝不允许静默 pass。
// Rule-2 pre-filter. Rule 2 fires when an identifier is absent from the corpus but a
// one-character sibling is present. English prose in ```csharp comments satisfies that
// trivially: `Returns`->`returns`, `VIRTUAL`->`virtual`, `ONLY`->`only`. On the 52-page
// population rule 2 was 41/41 false positives.
//
// The filter must NOT be "skip comment lines" — that would also hide a genuine misspelled
// type inside a comment, trading a loud false positive for a SILENT false pass (same family
// as the CRLF and inferVer defects). So comment lines are still scanned; only tokens that
// cannot be a C# type name are dropped:
//
//   isIdentifierShaped: requires an internal lowercase->uppercase transition
//     (`FaceGeneratorHandler`, `Vec2`, `IMBAgenVisuals` pass;
//      `VIRTUAL`, `NOTHING`, `Returns`, `Note`, `Five`, `Describe` fail)
//   stripStrings: removes "..." / '...' literals, so a sound-event NAME inside a string
//     (`new SoundEventParameter("Volume", 0.4f)`) is not read as an identifier.
//
// Rule 1 (header-vs-example spelling) is deliberately NOT touched — its positive control
// already proves it fires correctly under both LF and CRLF.
function stripStrings(line) {
  return line.replace(/"(?:[^"\\]|\\.)*"/g, '""').replace(/'(?:[^'\\]|\\.)*'/g, "''");
}
function isIdentifierShaped(id) {
  return /^[A-Z][a-z0-9]*(?:[A-Z][a-z0-9]*)+$/.test(id);
}

function inferVer(pagePath) {
  const m = String(pagePath).match(/[/\\](v[\d.]+)[/\\]/i);
  if (!m) return null;
  return `bannerlord-${m[1].replace(/^v/i, '')}`;   // 分组已含 'v'，必须剥掉
}

let treesNeeded = new Set();
for (const p of pages) {
  const abs = isAbsolute(p) ? p : resolve(process.cwd(), p);
  if (verOverride) treesNeeded.add(verOverride);
  else { const v = inferVer(abs); if (v) treesNeeded.add(v); }
}
if (verOverride) treesNeeded = new Set([verOverride]);

// One concatenated corpus per tree, so a near-miss search is a substring test.
const corpus = {};
let exit = 2;
try {
  for (const ver of treesNeeded) {
    const root = `${WS}/${ver}`;
    if (!existsSync(root)) {
      console.error(`ERROR: source tree not found: ${root}`);
      console.error(`       规则 2 需要源码语料；没有它规则 2 不会运行，本工具【不能】给出 SUSPECT 数字。`);
      console.error(`       传 --ver bannerlord-<版本> 指向正确目录（例如 --ver bannerlord-1.4.5）。`);
      process.exit(2);          // 绝不静默：宁可 exit 2，也不要 SUSPECT=0 + pass
    }
    let all = '';
    let nFiles = 0;
    (function walk(dir, depth) {
      let entries;
      try { entries = readdirSync(dir, { withFileTypes: true }); } catch { return; }
      for (const e of entries) {
        if (e.name === '.git') continue;
        const p = join(dir, e.name);
        if (e.isDirectory()) { if (depth < 6) walk(p, depth + 1); }
        else if (e.name.endsWith('.cs')) { all += readFileSync(p, 'utf8') + '\n'; nFiles++; }
      }
    })(root, 0);
    corpus[ver] = all;
    console.log(`corpus=ok  tree=${ver}  files=${nFiles}  chars=${all.length}`);
  }
  if (treesNeeded.size === 0) {
    console.error('corpus=missing  reason=no source tree inferred from the page paths');
    console.error('       规则 2 需要源码语料；没有它规则 2 不会运行，本工具【不能】给出 SUSPECT 数字。');
    console.error('       传 --ver bannerlord-<版本>（例如 --ver bannerlord-1.4.5）。');
    process.exit(2);
  }

  const rows = [];
  for (const given of pages) {
    const abs = isAbsolute(given) ? given : resolve(process.cwd(), given);
    const text = readFileSync(abs, 'utf8'); // throws -> exit 2
    const ver = verOverride || inferVer(abs);
    if (!ver) { console.error(`ERROR: cannot infer version tree from ${given}; pass --ver`); process.exit(2); }
    const src = corpus[ver];
    const types = declaredTypes(text);
    const suspects = [];

    const tokenRe = (id) => new RegExp('\\b' + id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b');
    const tokenExists = (id) => src ? tokenRe(id).test(src) : false;
    // 1. example identifier contradicts the page's own declared type (one char off)
    //    Refined: a one-char-off name that EXISTS IN ITS OWN RIGHT is legitimate.
    //      `QueryData<T>` is a real generic alongside `IQueryData`
    //      `IBattlePowerCalculationLogic` is the interface the documented class implements
    //    Only flag when the near-miss name is absent as a WHOLE TOKEN.
    //      Substring test is WRONG here: `IFaceGeneratorHandler` CONTAINS
    //      `FaceGeneratorHandler`, so `src.includes(...)` would hide the exact defect
    //      this tool exists to find. Word boundaries are load-bearing.
    for (const ci of codeIdentifiers(text)) {
      for (const t of types) {
        const why = nearMiss(ci.id, t);
        if (!why) continue;
        if (tokenExists(ci.id)) continue;
        suspects.push({ id: ci.id, why, against: `declared type ${t}`, line: ci.line, code: ci.text });
      }
    }
    // 2. example identifier exists nowhere in the tree, but a one-char sibling does
    if (src) {
      const seen = new Set();
      for (const ci of codeIdentifiers(text)) {
        if (seen.has(ci.id)) continue;
        seen.add(ci.id);
        if (tokenExists(ci.id)) continue;
        if (types.includes(ci.id)) continue;
        const variants = [ci.id.slice(1), ci.id[0] + ci.id.slice(1), ci.id.toLowerCase(), ci.id.toUpperCase(),
                          ci.id[0] + ci.id[0] + ci.id.slice(1)];
        const hit = variants.find((v) => v !== ci.id && tokenExists(v));
        if (hit) suspects.push({ id: ci.id, why: 'not in tree, but near-variant is', against: hit, line: ci.line, code: ci.text });
      }
    }

    const consistent = codeIdentifiers(text).length;
    rows.push({ given, consistent, suspects });
  }

  exit = 0;
  for (const r of rows) {
    const verdict = r.suspects.length === 0 ? 'pass' : 'review';
    console.log(`${r.given}  IDENTIFIERS=${r.consistent} SUSPECT=${r.suspects.length}  VERDICT=${verdict}`);
    for (const s of r.suspects) {
      console.log(`    ${s.id} — ${s.why}: ${s.against}  (block line ${s.line})`);
      console.log(`      ${s.code.slice(0, 110)}`);
    }
    if (r.suspects.length) exit = 1;
  }
} catch (err) {
  console.error(`ERROR: ${err && err.code ? err.code : 'EUNKNOWN'}: ${err && err.message}`);
  process.exit(2);
}
process.exit(exit);