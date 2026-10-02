// Mechanical gate fix for the 8 S-tier EN v1.4.5 pages that only lack a
// `## Dependencies` / `## See Also` section with >=2 links.
// Strategy: read the isomorphic zh source page, extract its 依赖/参见 markdown
// links, resolve each target against the EN tree (isomorphic => same relative
// path), keep links whose EN target exists, and append a `## Dependencies`
// section. Labels use the link target's type name (clean, English-friendly).
import { readFileSync, existsSync, writeFileSync } from 'node:fs';
import { classifyPage } from './lib/handwritten-policy.mjs';

const ROOT = 'content/v1.4.5';
const EN_API = `${ROOT}/en/api`;
const ZH_API = `${ROOT}/zh/api`;

const DEP_OR_SEE_RE =
  /^#{2}\s+(?:依赖|依赖关系|依赖图|依赖关联|Dependencies|Dependency|参见|See\s*Also|Related)\s*$/imu;
const MD_LINK_RE = /\[([^\]]+)\]\(([^)]+)\)/g;

function zhPathFor(enRel) {
  return enRel.replace('/en/api/', '/zh/api/');
}

function sectionBody(text, headingRe) {
  const m = text.match(headingRe);
  if (!m) return null;
  const rest = text.slice(m.index + m[0].length);
  const next = rest.search(/^#{1,2}\s+/m);
  return next < 0 ? rest : rest.slice(0, next);
}

function resolveTarget(enPageAbs, relTarget) {
  // resolve relative link against the en page directory
  const dir = enPageAbs.replace(/[^/]+$/, '');
  const parts = relTarget.split('/');
  const stack = dir.replace(/\/$/, '').split('/');
  for (const part of parts) {
    if (part === '.' || part === '') continue;
    if (part === '..') stack.pop();
    else stack.push(part);
  }
  let resolved = stack.join('/');
  if (!resolved.endsWith('.md') && !existsSync(resolved)) {
    if (existsSync(resolved + '.md')) resolved += '.md';
    else if (existsSync(resolved + '/_index.md')) resolved += '/_index.md';
  }
  return resolved;
}

function labelFor(target) {
  let base = target.split('/').pop();
  if (base === '_index.md' || base === '') {
    const parent = target.split('/').slice(0, -2).pop() || '';
    base = parent;
  } else {
    base = base.replace(/\.md$/, '').replace(/__.*$/, '');
  }
  return base;
}

const TARGETS = [
  'mission/Formation.md',
  'campaign/Hero.md',
  'campaign/Clan.md',
  'campaign/Kingdom.md',
  'campaign/Settlement.md',
  'campaign-ext/KillCharacterAction.md',
  'campaign-ext/ChangeKingdomAction.md',
  'campaign-ext/DeclareWarAction.md',
];

for (const rel of TARGETS) {
  const enAbs = `${EN_API}/${rel}`;
  const zhAbs = zhPathFor(enAbs);
  if (!existsSync(enAbs)) { console.log(`SKIP(no en) ${rel}`); continue; }
  if (!existsSync(zhAbs)) { console.log(`SKIP(no zh) ${rel}`); continue; }
  const enText = readFileSync(enAbs, 'utf8');
  const zhText = readFileSync(zhAbs, 'utf8');

  // already has a dep/see section?
  const existing = sectionBody(enText, DEP_OR_SEE_RE);
  if (existing && (existing.match(/\[[^\]]+\]\([^)]+\)/g) || []).length >= 2) {
    console.log(`SKIP(has deps) ${rel}`);
    continue;
  }

  // extract links from zh 依赖 + 参见 sections
  const depBody = sectionBody(zhText, DEP_OR_SEE_RE) || '';
  const links = [];
  const seen = new Set();
  let m;
  MD_LINK_RE.lastIndex = 0;
  while ((m = MD_LINK_RE.exec(depBody))) {
    const target = m[2].trim();
    if (target.startsWith('http') || target.startsWith('#')) continue;
    const abs = resolveTarget(enAbs, target);
    if (!existsSync(abs)) continue;
    const label = labelFor(target);
    const key = label;
    if (seen.has(key)) continue;
    seen.add(key);
    links.push(`[${label}](${target})`);
    if (links.length >= 6) break;
  }

  if (links.length < 2) {
    console.log(`WARN(insufficient links=${links.length}) ${rel}`);
    continue;
  }

  const block = `\n## Dependencies\n\n${links.join(' · ')}\n`;
  writeFileSync(enAbs, enText.replace(/\s*$/, '') + block, 'utf8');
  const after = classifyPage(enAbs, readFileSync(enAbs, 'utf8'));
  console.log(`FIXED ${rel} links=${links.length} -> ${after.status} [${after.reasons.join('; ')}]`);
}
