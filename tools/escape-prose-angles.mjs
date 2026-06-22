// Escape '<' -> '&lt;' in PROSE only (outside ``` fences and outside inline `code`)
// for subagent-written class docs, so VitePress doesn't parse generics as HTML tags.
import { readFileSync, writeFileSync } from 'fs';

const files = [
  'v1.3.15/zh/api/campaign/Hero.md',
  'v1.3.15/zh/api/campaign-ext/CampaignBehaviorBase.md',
  'v1.3.15/zh/api/campaign-ext/Town.md',
  'v1.3.15/zh/api/campaign-ext/Village.md',
  'v1.3.15/zh/api/campaign-ext/CultureObject.md',
  'v1.3.15/en/api/campaign-ext/CampaignBehaviorBase.md',
  'v1.3.15/en/api/campaign-ext/Village.md',
  'v1.3.15/en/api/campaign-ext/CultureObject.md',
  'v1.3.15/zh/api/core-extra/MatrixFrame.md',
  'v1.3.15/zh/api/core-extra/InformationManager.md',
  'v1.3.15/en/api/core-extra/MatrixFrame.md',
  'v1.3.15/en/api/core-extra/InformationManager.md',
];
const root = 'C:/WorkSpace/Bannerlord/BannerlordCode.github.io/docs/';

function escapeLine(line) {
  // Toggle inline code on '`'. Escape '<' (followed by letter/!/) only outside code spans.
  let out = '';
  let inCode = false;
  for (let i = 0; i < line.length; i++) {
    const c = line[i];
    if (c === '`') { inCode = !inCode; out += c; continue; }
    if (!inCode && c === '<' && /[A-Za-z!\/]/.test(line[i+1] || '')) {
      out += '&lt;';
    } else {
      out += c;
    }
  }
  return out;
}

let totalEscapes = 0;
for (const f of files) {
  const path = root + f;
  let txt;
  try { txt = readFileSync(path, 'utf8'); } catch { console.log('SKIP (missing): ' + f); continue; }
  const lines = txt.split('\n');
  let inFence = false;
  let changed = 0;
  for (let i = 0; i < lines.length; i++) {
    if (/^\s*```/.test(lines[i])) { inFence = !inFence; continue; }
    if (inFence) continue;
    const before = lines[i];
    const after = escapeLine(before);
    if (after !== before) { lines[i] = after; changed++; totalEscapes += (after.match(/&lt;/g)||[]).length - (before.match(/&lt;/g)||[]).length; }
  }
  if (changed) { writeFileSync(path, lines.join('\n')); console.log(`fixed ${f}: ${changed} lines`); }
}
console.log('TOTAL prose < escapes:', totalEscapes);
