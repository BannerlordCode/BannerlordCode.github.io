import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { join, relative } from 'path';

const root = process.cwd();
const contentDir = join(root, 'content');

function walk(dir, out = []) {
  for (const ent of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, ent.name);
    if (ent.isDirectory()) {
      walk(p, out);
    } else if (ent.name.endsWith('.md')) {
      out.push(p);
    }
  }
  return out;
}

const files = walk(contentDir);
let changedFiles = 0;
let convertedBlocks = 0;

const defaultTitle = {
  tip: 'Tip',
  warning: 'Warning',
  info: 'Info',
  details: 'Details',
};

for (const p of files) {
  const original = readFileSync(p, 'utf8');
  const eol = original.includes('\r\n') ? '\r\n' : '\n';
  const lines = original.split(/\r?\n/);
  const out = [];
  let modified = false;
  for (let i = 0; i < lines.length; i++) {
    const raw = lines[i];
    const m = raw.match(/^\s*\{%\s*alert\(\s*type\s*=\s*"([^"]+)"\s*(?:,\s*title\s*=\s*"([^"]*)")?\s*\)\s*%\}\s*$/);
    if (!m) {
      out.push(raw);
      continue;
    }
    const type = m[1];
    const title = (m[2] || '').trim();
    const displayTitle = title || (defaultTitle[type] || type);
    const body = [];
    let foundEnd = false;
    for (let j = i + 1; j < lines.length; j++) {
      const inner = lines[j];
      if (/^\s*\{\%\s*end\s*\%\}\s*$/.test(inner)) {
        foundEnd = true;
        i = j;
        break;
      }
      body.push(inner);
    }
    if (!foundEnd) {
      out.push(raw);
      continue;
    }
    const indent = raw.match(/^(\s*)/)?.[1] ?? '';
    out.push(`${indent}> **${displayTitle}**`);
    for (const b of body) {
      if (/^\s*$/.test(b)) {
        out.push(`${indent}>`);
      } else {
        out.push(`${indent}> ${b.trimStart()}`);
      }
    }
    convertedBlocks++;
    modified = true;
  }
  if (modified) {
    writeFileSync(p, out.join(eol), 'utf8');
    changedFiles++;
    const rel = relative(contentDir, p);
    if (changedFiles <= 5) console.log(`converted: ${rel}`);
  }
}

console.log(`Converted ${convertedBlocks} alert block(s) in ${changedFiles} file(s).`);
