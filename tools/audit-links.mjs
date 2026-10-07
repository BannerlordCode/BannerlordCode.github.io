import { readFileSync, existsSync, readdirSync, statSync } from 'fs';
import { join, normalize, resolve, sep, posix } from 'path';

/**
 * Link auditor for Zola content tree.
 *
 * Authors historically wrote file-directory-relative links from leaf pages
 * (e.g. campaign-ext/Foo.md → ../campaign/Hero). Zola emits clean URLs with
 * a trailing segment (.../Foo/), so browser resolution needs one extra "../"
 * (../../campaign/Hero). Section _index.md pages have matching file/URL dirs.
 *
 * Default mode: URL-route resolve (product truth for the live site).
 * Also reports file-dir-only false comfort metrics so we can migrate.
 *
 * Env:
 *   AUDIT_MODE=url|file|either  (default: url)
 */

const root = resolve(process.env.AUDIT_CONTENT_ROOT || join(process.cwd(), 'content'));
const SLASH = '/';
const MODE = (process.env.AUDIT_MODE || 'url').toLowerCase();

function walk(dir, acc = []) {
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    let s;
    try {
      s = statSync(p);
    } catch {
      continue;
    }
    if (s.isDirectory()) {
      if (!e.startsWith('.') && e !== 'public') walk(p, acc);
    } else if (e.endsWith('.md') || e.endsWith('.txt')) acc.push(p);
  }
  return acc;
}

const reSep = new RegExp(sep === '\\' ? '\\\\' : sep, 'g');
function toPosix(p) {
  return p.replace(reSep, SLASH);
}

function fileToRoute(f) {
  const rel = toPosix(f).replace(toPosix(root) + SLASH, '');
  const dir = posix.dirname(rel);
  const base = posix.basename(rel);
  if (base === '_index.md') return dir + SLASH;
  return rel.replace(/\.md$/, SLASH);
}

const allFiles = walk(root);
const files = allFiles.map((f) => {
  const rel = toPosix(f).replace(toPosix(root) + SLASH, '');
  return { rel, route: fileToRoute(f) };
});

const linkRe = /\[([^\]]*)\]\(([^)\s]+)\)/g;
const allLinks = [];
for (const f of files) {
  const txt = readFileSync(join(root, f.rel), 'utf8');
  let m;
  while ((m = linkRe.exec(txt))) {
    let href = m[2].split(/\s/)[0];
    if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('#')) continue;
    allLinks.push({ from: f.rel, route: f.route, href, text: m[1] });
  }
}

function resolveTarget(fromBase, href) {
  let h = href.split('#')[0];
  if (!h) return null;
  let rel;
  if (h.startsWith(SLASH)) {
    rel = h.replace(/^\//, '');
  } else {
    // Ensure directory semantics: trailing slash so ".." climbs from the page folder.
    const base = fromBase.endsWith(SLASH) ? fromBase : fromBase + SLASH;
    rel = posix.normalize(posix.join(base, h)).replace(/^\//, '');
  }
  return normalize(join(root, rel)).replace(/[\\/]+$/, '');
}

function existsAsPage(t) {
  if (t === null) return false;
  const cands = [t + '.md', normalize(join(t, '_index.md'))];
  for (const c of cands) {
    if (existsSync(normalize(c))) return true;
  }
  return false;
}

// ---------------------------------------------------------------------------
// STATIC TARGET SPACE  (criterion change, independently authorised)
//
// WHY: this gate resolved targets ONLY under `content/`. But the site also
// publishes `static/`, and Zola copies `static/<path>` to `public/<path>`
// verbatim. A href pointing at such a file is therefore REACHABLE in the built
// site while this ruler called it dead. That is a coverage gap in the ruler, not
// a content defect.
//
// EVIDENCE (positive control, not inference from a build artifact): a minimal
// fixture with `static/probe.txt` and `static/sub/dir/nested.txt` produced
// `public/probe.txt` and `public/sub/dir/nested.txt` byte-identical after
// `zola build` (zola 0.22.1), subdirectories preserved. NOTE: the `public/` tree
// in this repo was at one point the residue of a KILLED build and contained no
// `static/` files at all, so it is not admissible evidence either way.
//
// SCOPE OF THE CHANGE: this widens the target space ONLY. No threshold, no
// allowlist, no known-failures channel, no change to what "broken" means. A href
// whose target exists in NEITHER content/ nor static/ is still reported broken --
// that is the negative control, and it must keep failing.
// ---------------------------------------------------------------------------
const REPO_ROOT = resolve(join(root, '..'));
const STATIC_DIR = join(REPO_ROOT, 'static');

function contentRel(t) {
  if (t === null) return null;
  const a = toPosix(normalize(t));
  const b = toPosix(normalize(root));
  if (a === b) return '';
  if (!a.startsWith(b + SLASH)) return null;
  return a.slice(b.length + 1);
}

function existsAsStatic(t) {
  const rel = contentRel(t);
  if (rel === null || rel === '') return false;
  try {
    return existsSync(normalize(join(STATIC_DIR, rel)));
  } catch {
    return false;
  }
}

function isSelfLink(hrefPath) {
  return hrefPath === '' || hrefPath === '.' || hrefPath === './';
}

const broken = [];
let okUrl = 0;
let okFile = 0;
let okEither = 0;
let okBoth = 0;
let okUrlOnly = 0;
let okFileOnly = 0;
let okNeither = 0;
let okStatic = 0;

for (const l of allLinks) {
  const hrefPath = l.href.split('#')[0];
  if (isSelfLink(hrefPath)) continue;

  // URL-style: resolve from clean page route (.../Page/ or .../section/)
  const fromUrl = l.route.endsWith(SLASH) ? l.route : l.route + SLASH;
  // File-style: resolve from markdown file directory
  const fromFile = posix.dirname(l.from) + SLASH;

  const tUrl = resolveTarget(fromUrl, l.href);
  const tFile = resolveTarget(fromFile, l.href);
  const foundUrl = existsAsPage(tUrl);
  const foundFile = existsAsPage(tFile);

  if (foundUrl) okUrl++;
  if (foundFile) okFile++;
  if (foundUrl || foundFile) okEither++;
  if (foundUrl && foundFile) okBoth++;
  else if (foundUrl) okUrlOnly++;
  else if (foundFile) okFileOnly++;
  else okNeither++;

  let found = false;
  let t = tUrl;
  if (MODE === 'file') {
    found = foundFile;
    t = tFile;
  } else if (MODE === 'either') {
    found = foundUrl || foundFile;
    t = foundUrl ? tUrl : tFile;
  } else {
    // default: url (product / browser truth with clean URLs)
    found = foundUrl;
    t = tUrl;
  }

  // Static fallback: only consulted when the content/ resolution FAILED.
  // Recorded in its own counter so the size of this widening stays visible.
  let foundStatic = false;
  if (!found) {
    const tStatic = t !== null ? t : tUrl;
    foundStatic = existsAsStatic(tStatic);
    if (foundStatic) {
      okStatic++;
      found = true;
    }
  }

  if (!found) broken.push({ ...l, target: t, foundUrl, foundFile, foundStatic });
}

console.log('FILES=' + files.length);
console.log('TOTAL_LINKS=' + allLinks.length);
console.log('AUDIT_MODE=' + MODE);
console.log('BROKEN_LINKS=' + broken.length);
console.log('RESOLVE_OK_URL=' + okUrl);
console.log('RESOLVE_OK_FILE=' + okFile);
console.log('RESOLVE_OK_EITHER=' + okEither);
console.log('RESOLVE_OK_BOTH=' + okBoth);
console.log('RESOLVE_URL_ONLY=' + okUrlOnly);
console.log('RESOLVE_FILE_ONLY=' + okFileOnly);
console.log('RESOLVE_NEITHER=' + okNeither);
console.log('RESOLVE_STATIC=' + okStatic);
console.log('# NOTE: RESOLVE_NEITHER is the CONTENT-ONLY caliber (neither content-URL nor\n#       content-file resolution found the target). It is deliberately left unchanged\n#       by the static-target widening, so a link resolved via static/ is still\n#       counted here AND in RESOLVE_STATIC. Broken = (not resolved anywhere);\n#       RESOLVE_STATIC is the size of the newly-admitted target class.');

const byFrom = {};
for (const b of broken) (byFrom[b.from] = byFrom[b.from] || []).push(b.href);
const sortedFrom = Object.keys(byFrom).sort();
console.log('FILES_WITH_BROKEN=' + sortedFrom.length);
for (const f of sortedFrom) {
  const hs = [...new Set(byFrom[f])];
  console.log('\n## ' + f + '  (' + hs.length + ')');
  for (const h of hs) console.log('   -> ' + h);
}

process.exitCode = broken.length > 0 ? 1 : 0;
