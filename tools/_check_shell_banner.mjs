// tools/_check_shell_banner.mjs — which machine-generated stub pages still lack the
// "do not trust this" banner, and — before any of that is believed — PROVE the detector
// can still see.
//
// WHY THE CONTROLS COME FIRST. An earlier version of this logic knew only English
// signatures. Measured against content/v1.4.5/zh/api it matched 0 pages and reported
// success. A checker that reports success on something it never examined is worse than a
// checker that reports nothing, so:
//   - every signature runs against a known-stub sample and a known-hand-written sample
//     on EVERY invocation, before any verdict is printed;
//   - the cross-language direction is a control too (en signature on zh text must be 0),
//     because "0" is only meaningful next to "and it was looking the right way";
//   - a failed control prints NO verdict and exits non-zero.
//   - a signature that matches nothing in a tree that DOES contain pages of its language
//     is BLIND: that is an error, never a printed 0.
//
// Usage: node tools/_check_shell_banner.mjs [<root> ...] [--out <file>]
//   <root>   directory to scan, repeatable. Default: content
//   --out    where to write the missing-banner path list.
//            Default: tools/_verify/shell-missing-banner.txt  (relative to this script)
//   --refuse-cited <list>
//            EXECUTION-LAYER GUARD. Read a list of target pages (one repo-relative path
//            per line, # comments and blanks ignored), and REFUSE: if ANY of them carries
//            a backticked `Something.cs:123` citation, name every one of them and exit
//            non-zero WITHOUT writing anything. Zero cited pages -> exit 0, plainly.
//            This is deliberately NOT the same thing as the classification rule below:
//              classification  "should not enter the stub set"  — moves when criteria move
//              refusal         "even if it entered, do not touch it" — never moves
//
// Exit codes:
//   0 = every control fired as specified AND every language present was detected
//   1 = a control failed, or a signature is blind over a tree that contains its language
//   2 = the script could not run: no usable args, an unreadable root, a missing
//       hand-written control page, or a --refuse-cited list with unresolvable paths.
//       A missing file is NEVER a silent pass.
//   3 = --refuse-cited REFUSED: the target list contains citation-bearing pages.
//       The pages are named and NOTHING was written.
//
// SELF-TEST after ANY edit to this file (paste the output):
//   node tools/_check_shell_banner.mjs content/v1.4.5/en ; echo "exit=$?"   # exit=0
//   node tools/_check_shell_banner.mjs content/v1.4.5/zh ; echo "exit=$?"   # exit=0
//   break one signature so a control fails -> exit=1 and NO "VERDICT" line is printed.
//   (That negative control is the whole point; run it.)
//   NOTE: the per-control "PASS" lines are DIAGNOSTICS, not a conclusion. §9d forbids
//   printing a CONCLUSION while failing; the greppable conclusion is the VERDICT marker.
import { readFileSync, readdirSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { isAbsolute, resolve, relative, join, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const REPO = resolve(fileURLToPath(new URL('.', import.meta.url)), '..');
const DEFAULT_OUT = join(REPO, 'tools', '_verify', 'shell-missing-banner.txt');

// The banner, matched as an EXACT line. Not a substring, not a regex with wildcards: a
// loosened match would report pages as covered that a reader would not recognise.
const BANNER = '> ⚠ 本页为自动生成的类参考，示例未经源码核对，勿直接引用其中的 API。';

// ---- signatures ------------------------------------------------------------
// en: frontmatter description + the **Purpose:** member line the generator emits.
// zh: the same generator, translated. Both were measured against the live corpus:
//     en/description 17,156 pages, zh/description 18,700, en/member 9,730, zh/member 10,692,
//     and ZERO pages match a signature of the other language — so the two are cleanly
//     separable and a per-language split loses nothing.
// Descriptions come from the pages themselves, e.g.
//   content/v1.4.5/en/api/mission-ext/ActionCodeType.md -> description: "Auto-generated
//       class reference for ActionCodeType."
//   content/v1.4.5/zh/api/mission-ext/ActionCodeType.md -> description: "ActionCodeType 的自动生成类参考。"
// Member lines come from the same files, 5,351x `**Purpose:**` (en) and 6,346x
// `**用途 / Purpose:**` (zh) across content/v1.4.5/{en,zh}/api/mission-ext/.
const SIGS = {
  'en:description': { lang: 'en', re: /^description:\s*"?Auto-generated class reference/m },
  'en:member': { lang: 'en', re: /^\*\*Purpose:\*\*/m },
  'zh:description': { lang: 'zh', re: /^description:.*的自动生成类参考。/m },
  'zh:member': { lang: 'zh', re: /^\*\*用途 \/ Purpose:\*\*/m },
};

// ---- the citation predicate ------------------------------------------------
// A backticked `Something.cs:123` (ranges `Foo.cs:12-18` included). The generator
// tools/lib/class-ref.mjs emits `.cs:` ZERO times -- verified with a positive control on
// that file, not assumed -- so a page carrying one was NOT produced by the generator and
// must not be filed as a machine stub.
//
// This is a predicate, not a signature: it must never be used as one. If it silently
// stopped matching, --refuse-cited would "refuse nothing" and exit 0, which is the exact
// false pass this file exists to prevent. Hence the 'cite' control rows below.
const CITED = (text) => /`[^`\r\n]*?\.cs:\d+(?:\s*[-–—]\s*\d+)?`/.test(text);

// ---- classification (AUTHORITATIVE) ----------------------------------------
// Inputs are exactly three booleans. Body prose is NOT an input and cannot become one
// without editing this signature: the machine template and hand-written prose share the
// same headings BY CONSTRUCTION (`## Mental Model`, `## 概述`, ...), so a prose heading
// carries no information about which side of the line a page is on. An earlier revision
// of this file carried such a heuristic; it is gone, and the 'prose' control row below is
// what now makes its return a test failure instead of a silent misclassification.
//
//   no signature fired          -> 'nosig'   (hand-written, or not ours to judge)
//   signature fired + citation  -> 'cited'   (deep-written, still carries a signature)
//   signature fired, no citation-> 'stub'
const classify = (descSig, memSig, cited) =>
  !descSig && !memSig ? 'nosig' : cited ? 'cited' : 'stub';

// Predicate table for the control runner. Signature keys delegate to SIGS; 'cite' is the
// citation predicate. One table so a new control cannot accidentally bypass the runner.
const PRED = { cite: CITED };
for (const k of Object.keys(SIGS)) PRED[k] = (t) => SIGS[k].re.test(t);

// ---- control samples -------------------------------------------------------
// Inline literals, not files. A file-based control can be rewritten by a writing line and
// then fail for a reason that has nothing to do with the signature, which trains people to
// ignore a red control. These cannot rot.
const S_EN_DESC_STUB = '---\ntitle: "ActionCodeType"\ndescription: "Auto-generated class reference for ActionCodeType."\n---\n';
const S_EN_MEMBER_STUB = '| Member | Purpose |\n| --- | --- |\n**Purpose:** Plays the cached action channel.\n';
const S_ZH_DESC_STUB = '---\ntitle: "ActionCodeType"\ndescription: "ActionCodeType 的自动生成类参考。"\n---\n';
const S_ZH_MEMBER_STUB = '| 成员 | 用途 |\n| --- | --- |\n**用途 / Purpose:** 播放已缓存的动作通道。\n';
// Hand-written shape: real frontmatter description, no **Purpose:** member line.
const S_HAND_WRITTEN =
  '---\ntitle: "Color"\ndescription: "引擎 UI 与 2D 的 RGBA 浮点颜色 struct：分量在 [0,1]。"\n---\n\n## 概述\n\n`Color` 是引擎 UI 与 2D 绘制的颜色类型。四个 **public 字段** `Red` / `Green` / `Blue` / `Alpha`。\n';
// A deep-written page that still carries the generator's description: line. Same shape as
// the machine stub plus one real citation — the exact thing that used to be misfiled.
const S_CITED =
  '`Campaign.cs:1876` 里的 `OnDailyTickEvent` 才是真正的入口，不是 `Campaign.Tick`。\n';

const CONTROLS = [
  ['en:description  fires on en stub', 'en:description', S_EN_DESC_STUB, 1],
  ['en:member       fires on en stub', 'en:member', S_EN_MEMBER_STUB, 1],
  ['zh:description  fires on zh stub', 'zh:description', S_ZH_DESC_STUB, 1],
  ['zh:member       fires on zh stub', 'zh:member', S_ZH_MEMBER_STUB, 1],
  // The false pass this tool exists for: an English signature scoring 0 on Chinese text is
  // not "no stubs found", it is "the checker never looked at this tree".
  ['en:description  silent on zh stub', 'en:description', S_ZH_DESC_STUB, 0],
  ['en:member       silent on zh stub', 'en:member', S_ZH_MEMBER_STUB, 0],
  ['zh:description  silent on en stub', 'zh:description', S_EN_DESC_STUB, 0],
  ['zh:member       silent on en stub', 'zh:member', S_EN_MEMBER_STUB, 0],
  ['zh:description  silent on handwritten', 'zh:description', S_HAND_WRITTEN, 0],
  ['zh:member       silent on handwritten', 'zh:member', S_HAND_WRITTEN, 0],
  // The citation predicate must be able to SEE, or --refuse-cited refuses nothing and
  // exits 0 — a false pass wearing the costume of a clean run.
  ['cite            fires on cited page', 'cite', S_CITED, 1],
  ['cite            silent on plain stub', 'cite', S_EN_DESC_STUB + S_EN_MEMBER_STUB, 0],
  ['cite            silent on handwritten', 'cite', S_HAND_WRITTEN, 0],
];

// Shape controls: these assert an equality/inequality rather than a hit count.
const S_PROSE_ALT =
  S_EN_DESC_STUB + S_EN_MEMBER_STUB + '\n## Mental Model\n\nProse a machine stub would never carry.\n';
const S_PROSE_ZH_ALT =
  S_EN_DESC_STUB + S_EN_MEMBER_STUB + '\n## 概述\n\n手写页的散文标题，签名完全相同。\n';
const bucketOf = (t) => classify(PRED['en:description'](t), PRED['en:member'](t), CITED(t));
const SHAPE_CONTROLS = [
  // Same signatures, wildly different body prose => same bucket. Prose cannot classify.
  ['prose headings cannot change bucket', () => bucketOf(S_PROSE_ALT) === bucketOf(S_PROSE_ZH_ALT)],
  ['a cited page is NOT a machine stub', () => bucketOf(S_EN_DESC_STUB + S_EN_MEMBER_STUB + S_CITED) === 'cited'],
  ['an uncited stub page IS a machine stub', () => bucketOf(S_EN_DESC_STUB + S_EN_MEMBER_STUB) === 'stub'],
  ['no signature at all is not a stub', () => bucketOf(S_HAND_WRITTEN) === 'nosig'],
];

// Real corpus pages verified as hand-written. These anchor the "must not fire" half to the
// tree rather than to a literal; a control page that goes missing is exit 2, never a pass.
const HAND_WRITTEN_PAGES = [
  'content/v1.4.5/zh/api/mission-ext/AgentBuildData.md',
  'content/v1.3.0/zh/api/core-extra/Color.md',
];

// ---- args ------------------------------------------------------------------
const args = process.argv.slice(2);
const roots = [];
let outPath = DEFAULT_OUT;
let refuseList = null;
for (let i = 0; i < args.length; i++) {
  if (args[i] === '--out') {
    const raw = args[++i];
    if (!raw) { console.error('ERROR: --out needs a value'); process.exit(2); }
    outPath = isAbsolute(raw) ? raw : resolve(process.cwd(), raw);
    continue;
  }
  if (args[i] === '--refuse-cited') {
    const raw = args[++i];
    if (!raw) { console.error('ERROR: --refuse-cited needs a value'); process.exit(2); }
    refuseList = isAbsolute(raw) ? raw : resolve(process.cwd(), raw);
    continue;
  }
  roots.push(args[i]);
}
if (roots.length === 0 && !refuseList) roots.push('content');

const rel = (abs) => relative(REPO, abs).split(sep).join('/');
const hits = (text, re) => re.test(text);

// ---- controls, before anything else ---------------------------------------
console.log('CONTROLS');
let controlFailures = 0;
for (const [name, sigKey, sample, expect] of CONTROLS) {
  const n = PRED[sigKey](sample) ? 1 : 0;
  const ok = n === expect;
  if (!ok) controlFailures++;
  console.log(`  ${ok ? 'PASS' : 'FAIL'}  ${name.padEnd(42)} fired=${n} expected=${expect}`);
}
for (const [name, fn] of SHAPE_CONTROLS) {
  const ok = !!fn();
  if (!ok) controlFailures++;
  console.log(`  ${ok ? 'PASS' : 'FAIL'}  ${name}`);
}
for (const p of HAND_WRITTEN_PAGES) {
  const abs = join(REPO, p);
  if (!existsSync(abs)) {
    console.error(`ERROR: hand-written control page is missing: ${p}`);
    console.error('       Refusing to run: a control that cannot be read proves nothing.');
    process.exit(2);
  }
  const text = readFileSync(abs, 'utf8');
  const fired = Object.keys(SIGS).filter((k) => hits(text, SIGS[k].re));
  const ok = fired.length === 0;
  if (!ok) controlFailures++;
  console.log(`  ${ok ? 'PASS' : 'FAIL'}  ${('handwritten page ' + p).padEnd(42)} fired=${fired.length} expected=0${fired.length ? ' -> ' + fired.join(',') : ''}`);
}

if (controlFailures > 0) {
  console.error(`\n${controlFailures} control(s) FAILED. No verdict is printed: a verdict from a`);
  console.error('detector that has just proven it cannot see is the failure mode, not a finding.');
  process.exit(1);
}

// ---- execution-layer guard: --refuse-cited ---------------------------------
// Runs BEFORE the scan and BEFORE any write, and deliberately does not consult the stub
// set. Its answer must not move when the classification criteria move.
if (refuseList) {
  if (!existsSync(refuseList)) {
    console.error(`ERROR: --refuse-cited list not found: ${rel(refuseList)}`);
    console.error('       Refusing to run: an unreadable list would look exactly like a clean list.');
    process.exit(2);
  }
  const targets = readFileSync(refuseList, 'utf8')
    .split(/\r?\n/).map((s) => s.trim())
    .filter((s) => s && !s.startsWith('#'));
  if (targets.length === 0) {
    console.error('ERROR: --refuse-cited list is empty after comments/blanks. Refusing.');
    console.error('       An empty list cannot distinguish "clean" from "never checked".');
    process.exit(2);
  }
  // Resolve EVERY target before judging any of them, so one bad path cannot silently
  // shrink the set that gets checked (§4r: a criterion that never fires looks identical
  // to one that found nothing).
  const resolved = [];
  const unresolved = [];
  for (const t of targets) {
    const cands = [join(REPO, t), isAbsolute(t) ? t : resolve(process.cwd(), t)];
    const abs = cands.find((c) => existsSync(c) && c.endsWith('.md'));
    if (abs) resolved.push({ given: t, abs });
    else unresolved.push(t);
  }
  if (unresolved.length > 0) {
    console.error(`ERROR: ${unresolved.length}/${targets.length} target(s) in the list do not resolve to a file:`);
    for (const t of unresolved) console.error(`  ${t}`);
    console.error('       Refusing to judge a partial set. Fix the list (repo-relative paths).');
    process.exit(2);
  }
  const citedTargets = resolved.filter(({ abs }) => CITED(readFileSync(abs, 'utf8')));
  console.log(`\nREFUSE-CITED  targets=${targets.length}  list=${rel(refuseList)}`);
  if (citedTargets.length > 0) {
    console.error(`\nREFUSED: ${citedTargets.length} target page(s) carry a \`Something.cs:NNN\` citation.`);
    console.error('These are not machine stubs. Do NOT write the banner onto them.');
    for (const { given } of citedTargets) console.error(`  ${given}`);
    console.error('\nNothing was written. This tool writes no banner; it only refuses.');
    process.exit(3);
  }
  console.log(`  nothing refused: 0 of ${targets.length} target page(s) carry a citation.`);
  console.log('  All targets resolved and all were checked. Proceed.');
  process.exit(0);
}

// ---- scan ------------------------------------------------------------------
function walk(dir, acc = []) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) walk(p, acc);
    else if (e.name.endsWith('.md') && e.name !== '_index.md') acc.push(p);
  }
  return acc;
}

let pages;
try {
  pages = roots.flatMap((r) => walk(isAbsolute(r) ? r : resolve(process.cwd(), r)));
} catch (err) {
  console.error(`ERROR: ${err && err.code ? err.code : 'EUNKNOWN'}: ${err && err.message}`);
  process.exit(2);
}
if (pages.length === 0) {
  console.error(`ERROR: no .md leaves under ${roots.join(', ')} — refusing to report 0 stubs over an empty scan.`);
  process.exit(2);
}

const langOf = (abs) => (rel(abs).match(/^content\/[^/]+\/(zh|en)\//) || [])[1] || null;
const bucketKey = (p) => p.split('/').slice(0, 5).join('/'); // content/<ver>/<lang>/api/<bucket>
const B = { en: { stub: [], cited: [] }, zh: { stub: [], cited: [] } };
const bannerPages = [];
const noSig = [];
const langUnknown = [];
// Signature columns count every page where ANY signature fired — INCLUDING cited pages.
// That is deliberate: the alarm this column raises is about a signature degrading, not
// about a page changing bucket.
const sigCols = {
  en: { union: 0, both: 0, descOnly: 0, memOnly: 0 },
  zh: { union: 0, both: 0, descOnly: 0, memOnly: 0 },
};
const perBucket = new Map();

for (const abs of pages) {
  const text = readFileSync(abs, 'utf8');
  const path = rel(abs);
  const lang = langOf(abs);
  const descSig = SIGS['en:description'].re.test(text) || SIGS['zh:description'].re.test(text);
  const memSig = SIGS['en:member'].re.test(text) || SIGS['zh:member'].re.test(text);
  const cited = CITED(text);
  const bucket = classify(descSig, memSig, cited); // <- the only classification input set

  if (descSig || memSig) {
    const col = sigCols[lang];
    if (col) {
      col.union++;
      if (descSig && memSig) col.both++;
      else if (descSig) col.descOnly++;
      else col.memOnly++;
      const k = bucketKey(path);
      let cell = perBucket.get(k);
      if (!cell) perBucket.set(k, (cell = { union: 0, both: 0, descOnly: 0, memOnly: 0 }));
      cell.union++;
      if (descSig && memSig) cell.both++;
      else if (descSig) cell.descOnly++;
      else cell.memOnly++;
    }
  }

  if (bucket === 'nosig') {
    noSig.push({ path, lang });
    if (!lang) langUnknown.push(path);
    continue;
  }
  // Bucket language follows the SIGNATURE that fired (as before), so old and new totals
  // stay comparable; an unrecognisable page goes to langUnknown rather than a bucket.
  const bucketLang = (SIGS['en:description'].re.test(text) || SIGS['en:member'].re.test(text)) ? 'en' : 'zh';
  const slot = B[bucketLang][bucket];
  if (!slot) { langUnknown.push(path); continue; }
  slot.push(path);
  if (bucket === 'stub' && text.split(/\r?\n/).some((l) => l === BANNER)) bannerPages.push(path);
}

// ---- blindness check -------------------------------------------------------
const langsPresent = new Set(pages.map(langOf).filter(Boolean));
console.log(`\nSCANNED  roots=${roots.join(', ')}  leaves=${pages.length}  languages present=${[...langsPresent].sort().join(',') || '(none)'}`);
let blind = 0;
for (const lang of [...langsPresent].sort()) {
  // Judge blindness on the SIGNATURE UNION, not on the stub count. A language whose only
  // signature-bearing pages are cited ones has a working signature and zero stubs; scoring
  // that as BLIND would be a false alarm, and false alarms train people to ignore red.
  const n = sigCols[lang] ? sigCols[lang].union : 0;
  if (n === 0) {
    blind++;
    console.error(`  BLIND  the ${lang} signature matched 0 pages in a tree that DOES contain ${lang} pages.`);
    console.error(`         This is not "no ${lang} stubs" — it is a signature that cannot see.`);
    console.error(`         (Or the tree genuinely has none. This tool cannot tell those apart and`);
    console.error(`          refuses to guess: pass the whole content/ root, or read the tree by hand.)`);
  }
}
if (blind > 0) {
  console.error('\nA blind signature is an error, not a finding. No verdict, no coverage number.');
  process.exit(1);
}

// ---- verdict ---------------------------------------------------------------
// This line is the marker a negative control greps for. It is emitted ONLY after every
// control has passed and the blindness check is clean, so that "no VERDICT line in stdout"
// is an assertion that can actually fail. Without a marker here that grep passes vacuously
// in BOTH cases (§4r: a criterion that never fires is indistinguishable from one that
// found nothing).
console.log('\nVERDICT — all controls passed, no blind signature. The numbers below are findings.');
const bannerSet = new Set(bannerPages);
const missing = [...B.en.stub, ...B.zh.stub].filter((p) => !bannerSet.has(p)).sort();
const citedAll = [...B.en.cited, ...B.zh.cited].sort();
const handWritten = noSig.length;
const withBanner = bannerPages.length;

console.log('\nSTUBS BY LANGUAGE  (never a combined total)');
for (const lang of ['en', 'zh']) {
  // A 0 next to "no pages of that language in this tree" is not a finding. Say so, so it
  // can never be read as "that language has no stubs".
  const note = langsPresent.has(lang) ? '' : '   <- no ' + lang + ' pages in this tree; NOT a finding';
  console.log(`  ${lang} machine stubs                ${String(B[lang].stub.length).padStart(6)}${note}`);
  console.log(`  ${lang} cited (see CITED BUCKET)     ${String(B[lang].cited.length).padStart(6)}   excluded from the stub count above`);
}
console.log(`  no signature matched (listed)     ${String(noSig.length).padStart(6)}`);
console.log(`    of which path carries no en/zh  ${String(langUnknown.length).padStart(6)}`);

console.log('\nSIGNATURE COLUMNS  (description-only is its OWN column; never folded into the hit count)');
console.log('  Measured over every page where ANY signature fired, cited pages included.');
console.log('  ALARM: if `union` stays flat while `both` falls sharply -> the member-line');
console.log('         signature is degrading. Stop and investigate.');
console.log('  ALARM: if `descOnly` falls below its baseline -> early form of the same thing.');
console.log('  lang   union     both  descOnly   memOnly');
for (const lang of ['en', 'zh']) {
  const c = sigCols[lang];
  console.log(`  ${lang}  ${String(c.union).padStart(7)} ${String(c.both).padStart(7)} ${String(c.descOnly).padStart(9)} ${String(c.memOnly).padStart(9)}`);
}

console.log('\nPER-BUCKET SIGNATURE BASELINE  (content/<ver>/<lang>/api/<bucket>)');
console.log('  bucket                                          union     both  descOnly');
for (const [k, c] of [...perBucket].sort((a, b) => b[1].union - a[1].union)) {
  console.log(`  ${k.padEnd(46)} ${String(c.union).padStart(6)} ${String(c.both).padStart(7)} ${String(c.descOnly).padStart(9)}`);
}

console.log('\nCOVERAGE');
console.log(`  hand-written pages   ${handWritten}   (no signature fired)`);
console.log(`  banner pages         ${withBanner}   (machine stub + banner present)`);
console.log(`  coverage             ${handWritten} / ${handWritten + withBanner}`);
console.log(`  machine stubs still missing the banner: ${missing.length}  <- not done, not a numerator`);

mkdirSync(resolve(outPath, '..'), { recursive: true });
const listBody =
  `# tools/_check_shell_banner.mjs — machine-stub pages missing the banner\n` +
  `# banner (exact line): ${BANNER}\n` +
  `# scanned: ${roots.join(', ')}   leaves: ${pages.length}\n` +
  `# en stubs: ${B.en.stub.length}   zh stubs: ${B.zh.stub.length}   missing: ${missing.length}\n` +
  `# cited (deep-written, carries a generator signature — NOT stubs, NOT hand-written): ${citedAll.length}\n` +
  missing.join('\n') + (missing.length ? '\n' : '');
writeFileSync(outPath, listBody, 'utf8');

const citedBody =
  `# tools/_check_shell_banner.mjs — CITED BUCKET\n` +
  `# a page in this file carries >=1 backticked \`Something.cs:NNN\` citation and therefore is\n` +
  `# NOT a machine stub. It is deep-written and still carries the generator's description:\n` +
  `# line. Calling it hand-written would be a different unverified claim.\n` +
  `# scanned: ${roots.join(', ')}   leaves: ${pages.length}\n` +
  `# en: ${B.en.cited.length}   zh: ${B.zh.cited.length}   total: ${citedAll.length}\n` +
  citedAll.join('\n') + (citedAll.length ? '\n' : '');
writeFileSync(resolve(outPath, '..', 'shell-cited-pages.txt'), citedBody, 'utf8');

// Each list is printed under its own header, immediately after it, and an empty list
// prints an explicit "(none)". Previously the cited list was emitted at the very END of
// the output, so it appeared as if it belonged to the MISSING banner header: that header
// read "(0):" and was then followed by 162 paths. A reader — and one parser — is entitled
// to conclude the tool is broken, when the written files were correct all along.
// Every list here ends before the next header begins. Do not move a list out of its block.
const printList = (title, note, items, fmt = (x) => `  ${x}`) => {
  console.log(`\n${title} (${items.length})${note ? ' — ' + note : ''}`);
  if (items.length === 0) {
    console.log('  (none)');
    return;
  }
  for (const x of items) console.log(fmt(x));
};

printList(
  'CITED BUCKET',
  'deep-written pages that still carry a generator signature. NOT machine stubs, and NOT ' +
    'verifiable as hand-written. Do not banner them:',
  citedAll);
printList('no-signature pages', 'these are NOT counted as stubs:', noSig,
  (p) => `  ${p.lang || 'lang?'}\t${p.path}`);
printList('MACHINE STUB PAGES MISSING THE BANNER', '', missing);

console.log(`\nlists written to ${rel(outPath)} and ${rel(resolve(outPath, '..', 'shell-cited-pages.txt'))}`);
console.log(`sample time (UTC): ${new Date().toISOString().replace(/\.\d+Z/, 'Z')}`);
process.exit(0);