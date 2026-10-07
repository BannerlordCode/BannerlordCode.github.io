import { readFileSync, existsSync } from 'fs';
import { join, normalize, resolve, sep, posix } from 'path';
import { execSync } from 'child_process';

/**
 * Incremental link auditor — audits ONLY files changed in the working tree
 * (staged + unstaged + untracked). Resolution logic is identical to
 * tools/audit-links.mjs so per-file verdicts agree with the full gate.
 *
 * Env:
 *   AUDIT_CONTENT_ROOT  (default: <repo>/content)
 *   AUDIT_MODE=url|file|either  (default: url)
 *
 * KNOWN FAILURE MODE (do not reintroduce): git returns REPO-RELATIVE paths
 * (e.g. content/v1.3.0/...), but `root` is an ABSOLUTE path. Filtering the
 * git output against `toPosix(root) + '/'` silently matches nothing and the
 * tool reports CHANGED_FILES=0 / BROKEN_LINKS=0 — a false green. The changed
 * set MUST be filtered against the repo-relative prefix of `root` (derived
 * below as `contentPrefix`), never against the absolute root path.
 */

const root = resolve(process.env.AUDIT_CONTENT_ROOT || join(process.cwd(), 'content'));
const REPO_ROOT = resolve(join(root, '..'));
const SLASH = '/';
const MODE = (process.env.AUDIT_MODE || 'url').toLowerCase();

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

function resolveTarget(fromBase, href) {
  let h = href.split('#')[0];
  if (!h) return null;
  let rel;
  if (h.startsWith(SLASH)) {
    rel = h.replace(/^\//, '');
  } else {
    const base = fromBase.endsWith(SLASH) ? fromBase : fromBase + SLASH;
    rel = posix.normalize(posix.join(base, h)).replace(/^\//, '');
  }
  return normalize(join(root, rel)).replace(/[\\/]+$/, '');
}

function existsAsPage(t) {
  if (t === null) return false;
  const cands = [t + '.md', normalize(join(t, '_index.md'))];
  for (const c of cands) if (existsSync(normalize(c))) return true;
  return false;
}

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

function getChangedFiles() {
  const out = new Set();
  const run = (cmd) => {
    try {
      const s = execSync(cmd, { cwd: REPO_ROOT, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] });
      for (const l of s.split('\n')) {
        const t = l.trim();
        if (t) out.add(t);
      }
    } catch {
      /* not a git repo or no changes: treat as empty */
    }
  };
  run('git diff --name-only HEAD');
  run('git ls-files --others --exclude-standard');
  return [...out];
}

const linkRe = /\[([^\]]*)\]\(([^)\s]+)\)/g;

// Git returns repo-relative paths (e.g. content/v1.3.0/...). Derive the
// repo-relative prefix of `root` so the filter matches, then strip it to get
// paths relative to `root` (which fileToRoute/resolveTarget expect).
const repoRootSlash = toPosix(REPO_ROOT) + SLASH;
const contentPrefix = toPosix(root).startsWith(repoRootSlash)
  ? toPosix(root).slice(repoRootSlash.length)
  : '';
const prefixSlash = contentPrefix + SLASH;
const changedFiles = getChangedFiles()
  .map((f) => toPosix(f))
  .filter((f) => f.endsWith('.md') || f.endsWith('.txt'))
  .filter((f) => f.startsWith(prefixSlash))
  .map((f) => f.slice(prefixSlash.length))
  .sort();

const broken = [];
let totalLinks = 0;

for (const rel of changedFiles) {
  const full = join(root, rel);
  let txt;
  try {
    txt = readFileSync(full, 'utf8');
  } catch {
    continue;
  }
  const route = fileToRoute(full);
  linkRe.lastIndex = 0;
  let m;
  while ((m = linkRe.exec(txt))) {
    let href = m[2].split(/\s/)[0];
    if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('#')) continue;
    totalLinks++;
    const hrefPath = href.split('#')[0];
    if (isSelfLink(hrefPath)) continue;

    const fromUrl = route.endsWith(SLASH) ? route : route + SLASH;
    const tUrl = resolveTarget(fromUrl, href);
    const foundUrl = existsAsPage(tUrl);

    let found = foundUrl;
    let t = tUrl;
    if (MODE === 'file') {
      const fromFile = posix.dirname(toPosix(rel)) + SLASH;
      const tFile = resolveTarget(fromFile, href);
      found = existsAsPage(tFile);
      t = tFile;
    } else if (MODE === 'either') {
      const fromFile = posix.dirname(toPosix(rel)) + SLASH;
      const tFile = resolveTarget(fromFile, href);
      const foundFile = existsAsPage(tFile);
      found = foundUrl || foundFile;
      t = foundUrl ? tUrl : tFile;
    }

    let foundStatic = false;
    if (!found) {
      const tStatic = t !== null ? t : tUrl;
      foundStatic = existsAsStatic(tStatic);
      if (foundStatic) found = true;
    }

    if (!found) broken.push({ from: rel, href, target: t });
  }
}

console.log('CHANGED_FILES=' + changedFiles.length);
console.log('CHANGED_LINKS=' + totalLinks);
console.log('BROKEN_LINKS=' + broken.length);
for (const b of broken) console.log('  ' + b.from + '  ->  ' + b.href);

process.exitCode = broken.length > 0 ? 1 : 0;
