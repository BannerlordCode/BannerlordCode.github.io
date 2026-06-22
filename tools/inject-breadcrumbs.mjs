// Inject bidirectional navigation (breadcrumbs + footer back-links) into all class docs.
// Fixes the "跳过去回不来" (jump-there-can't-come-back) problem by making every class doc
// a tree node: parent area index ← class → cross-version compare (when available).
//
// Idempotent: skips files already containing the breadcrumb sentinel.
// Bilingual: zh and en variants with appropriate labels.
//
// Usage:  node tools/inject-breadcrumbs.mjs          # all versions/languages
//          node tools/inject-breadcrumbs.mjs v1.3.15  # one version, both langs

import { readFileSync, writeFileSync, readdirSync, statSync, existsSync } from 'fs';
import { join, dirname, basename, sep, relative } from 'path';

const docsRoot = join(import.meta.dirname, '..', 'docs');
const versionsRoot = join(docsRoot, 'versions');

// ── Discover which classes have cross-version pages ──
const crossVersionClasses = new Set();
if (existsSync(versionsRoot)) {
  for (const f of readdirSync(versionsRoot)) {
    if (f.endsWith('.md') && f !== 'index.md') {
      crossVersionClasses.add(f.slice(0, -3));
    }
  }
}

const onlyVersion = process.argv[2]; // optional: 'v1.3.15'

// ── Per-language labels ──
const LABELS = {
  zh: {
    home: '首页',
    area: '本领域',
    apiRoot: 'API 目录',
    sdkOverview: 'SDK 总览',
    crossVersion: '跨版本对比',
    back: '返回',
    breadcrumb: '面包屑导航',
    footer: '导航 / Navigation',
    seeAlso: '参见',
  },
  en: {
    home: 'Home',
    area: 'Area',
    apiRoot: 'API Index',
    sdkOverview: 'SDK Overview',
    crossVersion: 'Cross-Version Compare',
    back: 'Back to',
    breadcrumb: 'Breadcrumb',
    footer: 'Navigation',
    seeAlso: 'See also',
  },
};

const SENTINEL = '<!-- BEGIN BREADCRUMB -->';

let stats = { scanned: 0, modified: 0, updated: 0, skipped: 0, crossVersionLinks: 0 };

function walk(dir, acc = []) {
  for (const e of readdirSync(dir)) {
    if (e.startsWith('.') || e === 'public' || e === 'node_modules') continue;
    const p = join(dir, e);
    let s; try { s = statSync(p); } catch { continue; }
    if (s.isDirectory()) walk(p, acc);
    else if (e.endsWith('.md')) acc.push(p);
  }
  return acc;
}

function buildBlocks(version, lang, area, className, relBase) {
  // relBase = relative path from the class .md to docs/v1.3.15/zh/  (so ../.. from api/core/X.md → v1.3.15/zh/)
  // Links are computed relative to the class doc location.
  const L = LABELS[lang] || LABELS.en;
  // From docs/<version>/<lang>/api/<area>/Class.md:
  //   ./        → docs/<version>/<lang>/api/<area>/        (area index)
  //   ../       → docs/<version>/<lang>/api/               (api root)
  // For the canonical version (v1.3.15): SDK overview is local.
  // For other versions (v1.3.0/v1.4.5): link to the canonical v1.3.15 SDK overview
  //   (those versions don't ship their own sdk-overview.md).
  //   From docs/v1.3.0/zh/api/core/X.md → ../../../v1.3.15/zh/architecture/sdk-overview
  const areaLink = './';
  const apiRootLink = '../';
  const isCanonical = version === 'v1.3.15';
  // From docs/<version>/<lang>/api/<area>/Class.md:
  //   ../              → docs/<version>/<lang>/api/
  //   ../../           → docs/<version>/<lang>/
  //   ../../../        → docs/<version>/
  //   ../../../../     → docs/           ← need this depth to reach a sibling version
  // Canonical version: SDK overview is local at ../../architecture/sdk-overview
  // Other versions:    link to canonical at ../../../../v1.3.15/<lang>/architecture/sdk-overview
  const sdkLink = isCanonical
    ? '../../architecture/sdk-overview'
    : '../../../../v1.3.15/' + lang + '/architecture/sdk-overview';
  const sdkLabelSuffix = isCanonical ? '' : (lang === 'zh' ? '（规范版）' : ' (canonical)');

  const breadcrumb = [
    `<!-- BEGIN BREADCRUMB -->`,
    ``,
    `**${L.home}** → **${L.apiRoot}** → **${L.area}** → \`${className}\``,
    ``,
    `- [← ${L.area} / ${L.back} ${area}](./)`,
    `- [↑ ${L.apiRoot}](../)`,
    `- [⭐ ${L.sdkOverview}${sdkLabelSuffix}](${sdkLink})`,
    crossVersionClasses.has(className) ? `- [🔀 ${L.crossVersion} /versions/${className}](/versions/${className})` : null,
    `<!-- END BREADCRUMB -->`,
    ``,
  ].filter(Boolean).join('\n');

  return { breadcrumb };
}

function injectIntoFile(filePath) {
  const raw = readFileSync(filePath, 'utf8');

  // Parse path: docs/<version>/<lang>/api/<area>/<Class>.md
  // Or:        docs/<version>/<lang>/api/<area>/index.md  (skip index)
  const rel = relative(join(docsRoot), filePath).replace(/\\/g, '/');
  const m = rel.match(/^(v\d+\.\d+\.\d+)\/(zh|en)\/api\/([^/]+)\/([^/]+)\.md$/);
  if (!m) return false;
  const [, version, lang, area, fileName] = m;
  if (fileName === 'index') return false;
  if (onlyVersion && version !== onlyVersion) return false;

  const className = fileName;
  const { breadcrumb } = buildBlocks(version, lang, area, className, rel);

  // Strip any existing breadcrumb block (sentinel-bounded) so we can re-inject cleanly.
  // This makes the tool idempotent: re-running updates stale breadcrumbs.
  let body = raw;
  const startIdx = body.indexOf(SENTINEL);
  let hadStale = false;
  if (startIdx !== -1) {
    const endMarker = '<!-- END BREADCRUMB -->';
    const endIdx = body.indexOf(endMarker, startIdx);
    if (endIdx !== -1) {
      // Remove the breadcrumb block + any trailing blank line that follows.
      let removeEnd = endIdx + endMarker.length;
      // Eat one trailing newline if present
      if (body[removeEnd] === '\n') removeEnd++;
      if (body[removeEnd] === '\n') removeEnd++;
      body = body.slice(0, startIdx) + body.slice(removeEnd);
      hadStale = true;
    }
  }

  // Insert breadcrumb AFTER frontmatter and BEFORE the first H1.
  // Frontmatter = leading `---\n...\n---\n`.
  let fmEnd = 0;
  if (body.startsWith('---\n')) {
    const close = body.indexOf('\n---\n', 4);
    if (close !== -1) fmEnd = close + 5; // past the closing ---\n
  }
  const head = body.slice(0, fmEnd);
  const rest = body.slice(fmEnd);

  // Skip any leading blank lines in `rest`, then insert breadcrumb before H1.
  const nl = rest.search(/\S/);
  const leading = nl === -1 ? '' : rest.slice(0, nl);
  const after = rest.slice(nl === -1 ? 0 : nl);

  const injected = head + leading + breadcrumb + '\n' + after;
  if (injected !== raw) {
    writeFileSync(filePath, injected, 'utf8');
    if (hadStale) stats.updated++; else stats.modified++;
    if (crossVersionClasses.has(className)) stats.crossVersionLinks++;
    return true;
  }
  if (hadStale) stats.skipped++;
  return false;
}

// ── Main ──
const versions = onlyVersion ? [onlyVersion] : ['v1.3.15', 'v1.3.0', 'v1.4.5'];
for (const v of versions) {
  for (const lang of ['zh', 'en']) {
    const apiDir = join(docsRoot, v, lang, 'api');
    if (!existsSync(apiDir)) continue;
    const files = walk(apiDir);
    for (const f of files) {
      stats.scanned++;
      injectIntoFile(f);
    }
  }
}

console.log('=== inject-breadcrumbs.mjs ===');
console.log('Cross-version classes known:', crossVersionClasses.size);
console.log('Scanned:', stats.scanned);
console.log('Modified (new breadcrumb):', stats.modified);
console.log('Updated (replaced stale breadcrumb):', stats.updated);
console.log('Skipped (no change):', stats.skipped);
console.log('Cross-version links added:', stats.crossVersionLinks);
