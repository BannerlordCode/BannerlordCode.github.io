// Regenerate method-purpose lines in class API stubs to reduce generic/placeholder text.

import { readdirSync, readFileSync, statSync, writeFileSync } from 'fs';
import { join, relative } from 'path';
import * as docFragments from './doc-fragments.mjs';

const contentRoot = join(import.meta.dirname, '..', 'content');

function walk(dir, acc = []) {
  for (const e of readdirSync(dir)) {
    if (e.startsWith('.') || e === 'node_modules' || e === 'public') continue;
    const p = join(dir, e);
    let s;
    try { s = statSync(p); } catch { continue; }
    if (s.isDirectory()) walk(p, acc);
    else if (e.endsWith('.md')) acc.push(p);
  }
  return acc;
}

const PURPOSE_RE = /^(\*\*(?:用途\s*\/\s*)?Purpose:\*\*)\s*(.+)$/iu;
const HEADING_RE = /^###\s+(.+)$/;

function detectLang(p) {
  if (/[\\/]en[\\/]/.test(p)) return 'en';
  if (/[\\/]zh[\\/]/.test(p)) return 'zh';
  return 'en';
}

function isClassDocPage(text) {
  return /\*\*Type:\*\*/.test(text);
}

function cleanupPurpose(raw, methodName) {
  let p = raw.replace(/[「」`]/g, '');
  const zhPlaceholder = '执行此方法所描述的操作。';
  const enPlaceholder = 'Performs the operation described by this method.';
  if (p.includes(zhPlaceholder)) {
    p = p.replace(zhPlaceholder, `调用 ${methodName} 对应的操作。`);
  }
  if (p.includes(enPlaceholder)) {
    p = p.replace(enPlaceholder, `Executes the ${methodName} logic.`);
  }
  return p.replace(/\s{2,}/g, ' ').trim();
}

function improveFile(filePath) {
  const lang = detectLang(filePath);
  const relRoot = relative(contentRoot, filePath).replace(/\\/g, '/');
  if (!/\/api\//.test(relRoot)) return 0;

  let text = readFileSync(filePath, 'utf8');
  if (!isClassDocPage(text)) return 0;

  const lines = text.split(/\r?\n/);
  let changed = 0;

  for (let i = 0; i < lines.length; i++) {
    const headingMatch = lines[i].match(HEADING_RE);
    if (!headingMatch) continue;
    const methodName = headingMatch[1].trim();

    // only process short sections that contain a signature-ish line or purpose
    let hasPurposeInSection = false;
    for (let k = i + 1; k < lines.length && k < i + 8; k++) {
      if (/^#{1,3}\s+/.test(lines[k])) break;
      if (PURPOSE_RE.test(lines[k])) {
        hasPurposeInSection = true;
        break;
      }
    }
    if (!hasPurposeInSection) continue;

    for (let k = i + 1; k < lines.length; k++) {
      if (/^#{1,3}\s+/.test(lines[k])) break;
      const purposeMatch = lines[k].match(PURPOSE_RE);
      if (!purposeMatch) continue;
      const regenerated = docFragments.methodPurpose(methodName, lang);
      const newText = cleanupPurpose(regenerated, methodName);
      if (purposeMatch[2].trim() !== newText) {
        lines[k] = `${purposeMatch[1]} ${newText}`;
        changed++;
      }
      break;
    }
  }

  if (changed) {
    writeFileSync(filePath, lines.join('\n'), 'utf8');
  }
  return changed;
}

const files = walk(contentRoot);
let total = 0;
let filesChanged = 0;
for (const f of files) {
  const n = improveFile(f);
  if (n > 0) {
    total += n;
    filesChanged++;
  }
}
console.log(`Regenerated ${total} method-purpose lines in ${filesChanged} files.`);
