#!/usr/bin/env node
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join, relative } from 'node:path';

const root = process.cwd();
const contentDir = join(root, 'content');
const KNOWN_KEYS = /^(title|description|sidebar|date|updated|draft|weight|order|extra|tags|categories|taxonomies)\s*:/;

async function* walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) {
      yield* walk(p);
    } else if (entry.name.endsWith('.md')) {
      yield p;
    }
  }
}

function splitFrontmatter(lines) {
  if (lines.length < 2 || lines[0] !== '---') return { fmLines: [], bodyStart: 0 };
  const end = lines.indexOf('---', 1);
  if (end === -1) return { fmLines: [], bodyStart: 0 };
  return { fmLines: lines.slice(1, end), bodyStart: end + 1 };
}

function isCodeFence(line, fence) {
  const trimmed = line.trim();
  if (!fence && /^```|~~~/.test(trimmed)) return trimmed;
  if (fence && line.startsWith(fence)) return null;
  return fence;
}

function processFile(text, rel) {
  const eol = text.includes('\r\n') ? '\r\n' : '\n';
  const lines = text.split(/\r?\n/);
  const { fmLines, bodyStart } = splitFrontmatter(lines);
  if (bodyStart === 0) return { text, changed: false };

  const bodyLines = lines.slice(bodyStart);
  const outBody = [];
  let i = 0;
  let changed = false;
  let fence = null;

  while (i < bodyLines.length) {
    const raw = bodyLines[i];
    fence = isCodeFence(raw, fence);

    if (!fence && raw === '---' && i + 1 < bodyLines.length) {
      const end = bodyLines.indexOf('---', i + 1);
      if (end !== -1) {
        const candidate = bodyLines.slice(i + 1, end);
        const hasFmKey = candidate.some((l) => KNOWN_KEYS.test(l));
        if (hasFmKey) {
          for (const l of candidate) {
            const km = l.match(/^([A-Za-z0-9_-]+)\s*:\s*(.+)$/);
            if (km) {
              const key = km[1];
              if (key === 'sidebar') continue; // VitePress-only; drop it
              if (fmLines.some((fl) => fl.startsWith(`${key}:`))) continue; // prefer top value
              fmLines.push(l);
            }
          }
          i = end + 1;
          changed = true;
          continue;
        }
      }
    }

    outBody.push(raw);
    i++;
  }

  if (!changed) return { text, changed: false };

  const fm = fmLines.length ? `---\n${fmLines.join('\n')}\n---` : '';
  const body = outBody.join('\n').replace(/^\n+/, '');
  const out = fm ? `${fm}\n${body}` : body;
  return { text: out.split('\n').join(eol), changed: true };
}

async function run() {
  let scanned = 0;
  let fixed = 0;
  const changedFiles = [];

  for await (const p of walk(contentDir)) {
    scanned++;
    const text = await readFile(p, 'utf8');
    const rel = relative(contentDir, p);
    const { text: newText, changed } = processFile(text, rel);
    if (changed) {
      await writeFile(p, newText, 'utf8');
      fixed++;
      changedFiles.push(rel);
    }
  }

  console.log(`Scanned ${scanned} files; merged secondary frontmatter in ${fixed} file(s).`);
  if (changedFiles.length) {
    for (const rel of changedFiles.slice(0, 20)) console.log(`  - ${rel}`);
    if (changedFiles.length > 20) console.log(`  ... and ${changedFiles.length - 20} more`);
  }
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
