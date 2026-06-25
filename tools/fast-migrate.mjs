#!/usr/bin/env bun
import { readdir, readFile, writeFile, unlink } from 'node:fs/promises';
import { join, dirname, basename, extname } from 'node:path';

const KEEP = new Set(['title', 'description']);
const CONCURRENCY = 200;

async function* walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) {
      yield* walk(path);
    } else if (entry.isFile() && extname(entry.name) === '.md') {
      yield path;
    }
  }
}

function parseTopLevelPairs(block) {
  const out = new Map();
  const lines = block
    .split('\n')
    .map((l) => l.replace(/\r$/, ''))
    .filter((l) => l.trim().length !== 0);

  for (const line of lines) {
    const idx = line.indexOf(':');
    if (idx > 0) {
      const key = line.slice(0, idx).trim();
      // Skip structural "extra:" wrappers from a previous run; their children
      // will be re-parsed as top-level entries.
      if (key === 'extra') continue;
      out.set(key, line);
    }
  }
  return out;
}

function processFrontmatter(text, fallbackTitle) {
  // Normalise Windows line endings so repeated frontmatter blocks and blank
  // lines are parsed consistently regardless of how Git checked the files out.
  let body = text.replace(/\r\n/g, '\n');
  const merged = new Map();

  // Merge all leading YAML/TOML-style `---` frontmatter blocks. Later blocks
  // override earlier ones, so an injected `title: "index"` is replaced by the
  // real title in a second block.
  body = body.replace(/^\n+/, '');
  while (body.startsWith('---\n')) {
    const fmEnd = body.indexOf('\n---', 4);
    if (fmEnd === -1) break;
    const block = body.slice(4, fmEnd);
    body = body.slice(fmEnd + 4);
    const parsed = parseTopLevelPairs(block);
    for (const [k, v] of parsed) {
      merged.set(k, v);
    }
    body = body.replace(/^\n+/, '');
  }

  const titleLine = merged.get('title') ?? `title: "${fallbackTitle}"`;
  const descLine = merged.get('description');
  const extraKeys = [...merged.keys()].filter((k) => !KEEP.has(k));

  let outFm = `${titleLine}\n`;
  if (descLine) outFm += `${descLine}\n`;
  if (extraKeys.length) {
    outFm += 'extra:\n';
    for (const k of extraKeys) {
      outFm += `  ${merged.get(k)}\n`;
    }
  }

  return `---\n${outFm}---\n${body.replace(/^\n*/, '')}`;
}

async function runWithLimit(tasks, limit) {
  const results = [];
  const executing = [];
  for (const task of tasks) {
    const p = Promise.resolve().then(() => task());
    results.push(p);
    if (executing.length >= limit) {
      await Promise.race(executing);
    }
    const e = p.finally(() => {
      const i = executing.indexOf(e);
      if (i !== -1) executing.splice(i, 1);
    });
    executing.push(e);
  }
  return Promise.all(results);
}

async function main() {
  const root = process.argv[2] || 'content';
  const start = performance.now();
  let count = 0;

  const tasks = [];
  for await (const path of walk(root)) {
    tasks.push(async () => {
      const text = await readFile(path, 'utf8');
      const title = basename(path, '.md');
      const newText = processFrontmatter(text, title);
      const needRename = basename(path) === 'index.md';
      const targetPath = needRename ? join(dirname(path), '_index.md') : path;

      await writeFile(targetPath, newText, 'utf8');
      if (needRename && targetPath !== path) {
        await unlink(path);
      }
      count++;
    });
  }

  await runWithLimit(tasks, CONCURRENCY);

  const elapsed = (performance.now() - start) / 1000;
  console.log(`Processed ${count} markdown files in ${elapsed.toFixed(2)}s`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
