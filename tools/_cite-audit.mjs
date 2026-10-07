// tools/_cite-audit.mjs — verify every `File.cs:NNN` citation in a page really resolves.
//
// Why this exists: in this project a fabricated line number is the worst possible
// defect — it is undetectable by _doc-check.mjs and by classifyPage, and it makes a
// page that reads as authoritative actively lie. A gate pass proves nothing about
// whether the citations are real.
//
// Usage: node tools/_cite-audit.mjs <page.md> [<page.md> ...] [--ver <tree>]
//   --ver  source tree to resolve against. BOTH forms accepted:
//            --ver bannerlord-1.3.0     and     --ver v1.3.0
//          An unknown tree exits 2 LOUDLY. A wrong tree used to yield NOFILE on every
//          citation, which reads as "your citations are broken" instead of "your flag is
//          wrong" — a worker in this project lost time to exactly that.
//   --ver  which bannerlord-<ver> tree to resolve against (default: inferred from the
//          page path, e.g. content/v1.4.6/... -> bannerlord-1.4.6)
//
// KNOWN LIMITATION: this only sees citations written in the full house style
// `File.cs:NNN`. A bare continuation reference like （`:368`） is invisible here, so a
// page with 1 visible citation may contain many more. A low CITES count means
// "not audited", NOT "verified". Write citations in the full form to be covered.
//   <path>  CITES=<n> OK=<n> BLANK=<n> RANGE=<n> NOFILE=<n> AMBIG=<n> BARE=<n>  VERDICT=<pass|fail>
//   exit 0 = every citation resolved to a non-blank source line
//   exit 1 = at least one citation is blank, out of range, or unresolvable
//   exit 2 = the script could not run (no args, unreadable path)
//
// Self-test (a missing path must be LOUD, never a silent pass):
//   node tools/_cite-audit.mjs content/does/not/exist.md ; echo "exit=$?"   # -> exit=2
import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { join, basename, resolve, isAbsolute } from 'node:path';

const WS = 'C:/WorkSpace/Bannerlord';
const BT = String.fromCharCode(96);
const MODULE_PREFIXES = ['StoryMode', 'StoryMode/Quests', 'TaleWorlds.CampaignSystem', 'TaleWorlds.ObjectSystem'];

// Per-version index: "<ver>/Name.cs" -> { first, paths }.
// Deliberately NOT a shared global basename key: that resolved a v1.4.6 citation
// against the v1.3.0 file of the same name and reported a real line as BLANK.
//
// AMBIGUITY IS TRACKED, NOT SILENTLY RESOLVED. bannerlord-1.5.3 contains two
// `Module.cs` files (TaleWorlds.MountAndBlade/Module.cs, 1983 lines, and
// mscorlib/System/Reflection/Module.cs, 549 lines). Keeping only the first meant a
// page citing the real one got false RANGE/BLANK reports and someone nearly "fixed"
// correct citations to satisfy the checker. When a basename has more than one
// candidate we say AMBIGUOUS and print the candidates.
// Accept the short form people actually type. `--ver v1.3.0` used to be silently wrong:
// the index came back empty, every citation reported NOFILE, and the run looked like a
// page problem instead of an invocation problem.
function normaliseVer(flag) {
  if (!flag) return null;
  const v = String(flag).trim();
  return /^bannerlord-/i.test(v) ? v : `bannerlord-${v.replace(/^v/i, "")}`;
}
function treeExists(ver) {
  return existsSync(`${WS}/${ver}`);
}

const index = new Map();
function buildIndex(versions) {
  for (const ver of versions) {
    const root = `${WS}/${ver}`;
    if (!existsSync(root)) continue;
    (function walk(dir) {
      let entries;
      try { entries = readdirSync(dir, { withFileTypes: true }); } catch { return; }
      for (const e of entries) {
        if (e.name === '.git') continue;
        const p = join(dir, e.name);
        if (e.isDirectory()) walk(p);
        else if (e.name.endsWith('.cs')) {
          const keyed = `${ver}/${e.name}`;
          if (!index.has(keyed)) index.set(keyed, { paths: [] });
          index.get(keyed).paths.push(p);
        }
      }
    })(root);
  }
}

// Prefer a candidate whose path shares a directory prefix with the page's own
// Source module; otherwise report ambiguity rather than guessing.
function resolveRef(ref, ver, hint) {
  ref = ref.trim();
  if (ref.startsWith('bannerlord-')) {
    const p = `${WS}/${ref}`;
    return existsSync(p) ? { file: p } : null;
  }
  const pick = (cands) => {
    if (!cands || cands.length === 0) return null;
    if (cands.length === 1) return { file: cands[0] };
    if (hint) {
      // Compare on a normalised path: index entries are Windows BACKSLASH paths while
      // the hint segments come from a forward-slash Source field, so a raw
      // `c.includes('/StoryMode/')` never matched and every hint silently failed.
      // Directory segments only — a hint that still contains the FILENAME (Extensions.cs)
      // matches every candidate via endsWith and disambiguates nothing.
      const norm = (s) => s.replace(/\\/g, '/');
      const scored = cands.filter((c) => {
        const n = norm(c);
        return hint.some((h) => n.includes(`/${h}/`));
      });
      if (scored.length === 1) return { file: scored[0] };
      if (scored.length > 1) return { ambiguous: scored };
    }
    return { ambiguous: cands };
  };
  if (ref.includes('/')) {
    const direct = `${WS}/${ver}/${ref}`;
    if (existsSync(direct)) return { file: direct };
    // Module-relative paths, e.g. `StoryModeObjects/StoryModeHeroes.cs`.
    for (const mod of MODULE_PREFIXES) {
      const p = `${WS}/${ver}/${mod}/${ref}`;
      if (existsSync(p)) return { file: p };
    }
    return pick((index.get(`${ver}/${ref.split('/').pop()}`) || {}).paths);
  }
  return pick((index.get(`${ver}/${ref}`) || {}).paths);
}

function inferVer(pagePath) {
  // The source trees are bannerlord-1.4.6, NOT bannerlord-v1.4.6 — the leading "v"
  // exists only in the content/ path. Keeping it produced "bannerlord-v1.4.6", the
  // index silently missed the tree, and every citation came back NOFILE.
  const seg = String(pagePath).split(/[/\\]+/).find((s) => /^v\d/i.test(s || ''));
  return seg ? `bannerlord-${seg.replace(/^v/i, '')}` : null;
}

const args = process.argv.slice(2);
if (args.length === 0) {
  console.error('usage: node tools/_cite-audit.mjs <page.md> [...] [--ver <versionTree>]');
  process.exit(2);
}
let verOverride = null;
const pages = [];
for (let i = 0; i < args.length; i++) {
  if (args[i] === '--ver') {
    const raw = args[++i];
    if (!raw) { console.error('ERROR: --ver needs a value'); process.exit(2); }
    verOverride = normaliseVer(raw);
    if (!treeExists(verOverride)) {
      console.error(`ERROR: --ver ${raw} normalised to "${verOverride}", but ${WS}/${verOverride} does not exist.`);
      console.error('       Refusing to run: an unknown tree produces NOFILE on every citation,');
      console.error('       which reads as "your citations are broken" rather than "your flag is wrong".');
      process.exit(2);
    }
    continue;
  }
  pages.push(args[i]);
}
if (pages.length === 0) { console.error('no page arguments'); process.exit(2); }

// Index EVERY tree that exists, not just the inferred ones: version inference is
// best-effort, and a basename hit in any tree still proves the line number is not
// invented. The inferred version is only a preference, never a hard filter.
const ALL_TREES = ['bannerlord-1.3.0', 'bannerlord-1.3.15', 'bannerlord-1.4.5', 'bannerlord-1.4.6', 'bannerlord-1.4.7', 'bannerlord-1.5.3'];
buildIndex([...new Set([...ALL_TREES, ...(verOverride ? [verOverride] : [])])]);

const CITE = new RegExp(`${BT}([^${BT}\n]*?\\.cs):(\\d+)${BT}`, 'g');

// BARE-REF AUDIT - the population this tool CANNOT see.
//
// The regex above matches only a citation wrapped in backticks. A citation written bare
// (StoryMode/GameComponents/Foo.cs:12) is invisible here: not counted, not resolved, not
// reported. Measured on one unit: 266 visible vs 10 bare, i.e. 3.6% of that unit references
// were never checked by this tool at all. Reported separately so it cannot read as a pass,
// and separately from AMBIG - those ARE resolvable, just not to this tool.
const BARE_REF = /(?<![`\w])([A-Za-z_][\w./]*\.cs:\d+)(?![`\w])/g;
function countBareRefs(text) {
  // strip the visible form first; any .cs:N still standing was never counted above
  const stripped = text.replace(/`[^`\n]*?\.cs:\d+`/g, "").replace(/`[^`]*`/g, "");
  return (stripped.match(BARE_REF) || []).length;
}
const rows = [];
try {
  for (const given of pages) {
    const abs = isAbsolute(given) ? given : resolve(process.cwd(), given);
    const text = readFileSync(abs, 'utf8'); // throws on missing -> exit 2
    const ver = verOverride || inferVer(abs);
    if (!ver) { console.error(`ERROR: cannot infer version tree from ${given}; pass --ver`); process.exit(2); }
    let ok = 0, blank = 0, range = 0, nofile = 0, ambig = 0;
    const bad = [];
    // Module hint from the page's own Source field, used to disambiguate basenames.
    const srcField = text.match(/^\*\*(?:Source|File|源文件|源码)[：:]?\*\*\s*`?([^`\n]+?)`?\s*(?:（[^）]*）|\([^)]*\))?\s*$/m);
    const hint = srcField
      ? srcField[1].split(/[/\\]+/).filter((s) => /^[A-Z]/.test(s) && !/\.cs$/i.test(s))
      : [];
    for (const m of text.matchAll(CITE)) {
      const [, ref, lineNo] = m;
      const hit = resolveRef(ref, ver, hint);
      if (!hit) { nofile++; bad.push(`${ref}:${lineNo} NOFILE`); continue; }
      if (hit.ambiguous) {
        ambig++;
        bad.push(`${ref}:${lineNo} AMBIGUOUS -> ${hit.ambiguous.join(' | ')}`);
        continue;
      }
      const lines = readFileSync(hit.file, 'utf8').split(/\r?\n/);
      const n = Number(lineNo);
      if (n < 1 || n > lines.length) { range++; bad.push(`${ref}:${lineNo} RANGE(max ${lines.length} in ${hit.file})`); continue; }
      if (!(lines[n - 1] || '').trim()) { blank++; bad.push(`${ref}:${lineNo} BLANK`); continue; }
      ok++;
    }
    const bare = countBareRefs(text);
    const cites = ok + blank + range + nofile + ambig;
    rows.push({ line: `${given}  CITES=${cites} OK=${ok} BLANK=${blank} RANGE=${range} NOFILE=${nofile} AMBIG=${ambig} BARE=${bare}  VERDICT=${cites === ok ? 'pass' : 'fail'}`, bad });
  }
} catch (err) {
  console.error(`ERROR: ${err && err.code ? err.code : 'EUNKNOWN'}: ${err && err.message}`);
  process.exit(2);
}

let exit = 0;
for (const r of rows) {
  console.log(r.line);
  if (r.bad.length) r.bad.slice(0, 10).forEach((b) => console.log(`    ${b}`));
  if (r.bad.length) exit = 1;
}
process.exit(exit);