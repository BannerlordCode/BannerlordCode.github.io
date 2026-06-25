#!/usr/bin/env node
// Walk the Zola-rendered public/ directory and report broken internal links.
// Exits 0 when no internal 404s are found, 1 otherwise.

import { spawnSync } from 'node:child_process';
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { dirname, join, normalize } from 'node:path';

const cwd = process.cwd();
const publicDir = join(cwd, 'public');

function runZolaBuild() {
  const result = spawnSync('zola', ['build'], {
    cwd,
    encoding: 'utf8',
    maxBuffer: 50 * 1024 * 1024,
  });

  if (result.stdout) {
    console.log(result.stdout.trimEnd());
  }
  if (result.stderr) {
    console.error(result.stderr.trimEnd());
  }

  if (result.status !== 0) {
    console.error(
      `\nZola build failed (exit code ${result.status ?? result.signal ?? 'unknown'}).`
    );
    process.exit(1);
  }
}

function walkHtml(dir) {
  const out = [];
  for (const ent of readdirSync(dir)) {
    if (ent.startsWith('.')) {
      continue;
    }
    const p = join(dir, ent);
    let s;
    try {
      s = statSync(p);
    } catch {
      continue;
    }
    if (s.isDirectory()) {
      out.push(...walkHtml(p));
    } else if (ent.endsWith('.html')) {
      out.push(p);
    }
  }
  return out;
}

function isExternalOrIgnored(url) {
  if (!url || url.trim() === '') {
    return true;
  }
  const u = url.trim();
  if (u.startsWith('#')) {
    return true;
  }
  if (/^(https?:|mailto:|tel:|data:|javascript:)/i.test(u)) {
    return true;
  }
  if (u.startsWith('//')) {
    // protocol-relative URLs are treated as external
    return true;
  }
  return false;
}

function stripQueryAndFragment(url) {
  return url.split('#')[0].split('?')[0];
}

function resolveTarget(pageAbsPath, url, hadTrailingSlash) {
  const pathPart = stripQueryAndFragment(url);
  if (!pathPart) {
    return null;
  }

  if (pathPart.startsWith('/')) {
    const rel = pathPart.replace(/^\/+/, '');
    return join(publicDir, rel);
  }

  return normalize(join(dirname(pageAbsPath), pathPart));
}

function targetExists(absTarget, hadTrailingSlash) {
  const candidates = [];

  if (hadTrailingSlash) {
    candidates.push(join(absTarget.replace(/[\\/]+$/, ''), 'index.html'));
  } else {
    candidates.push(absTarget);
    candidates.push(absTarget + '.html');
    candidates.push(join(absTarget, 'index.html'));
  }

  const seen = new Set();
  for (let c of candidates) {
    c = normalize(c);
    if (seen.has(c)) {
      continue;
    }
    seen.add(c);
    if (existsSync(c)) {
      return true;
    }
  }

  return false;
}

// Matches href / src on <a>, <link>, <img>, and <script> tags.
const tagAttrRe =
  /<(?:a|link|img|script)\b[^>]*?\s(?:href|src)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/gi;

function extractLinks(html) {
  const links = [];
  tagAttrRe.lastIndex = 0;
  let m;
  while ((m = tagAttrRe.exec(html))) {
    links.push(m[1] ?? m[2] ?? m[3]);
  }
  return links;
}

function main() {
  runZolaBuild();

  if (!existsSync(publicDir)) {
    console.error('public/ directory not found after zola build');
    process.exit(1);
  }

  const pages = walkHtml(publicDir);
  let totalInternalLinks = 0;
  const brokenByTarget = new Map();

  for (const page of pages) {
    const html = readFileSync(page, 'utf8');
    const pageRel = page.slice(cwd.length + 1).replace(/\\/g, '/');

    for (const rawUrl of extractLinks(html)) {
      if (isExternalOrIgnored(rawUrl)) {
        continue;
      }

      totalInternalLinks++;
      const hadTrailingSlash = /\/\s*$/.test(stripQueryAndFragment(rawUrl));
      const target = resolveTarget(page, rawUrl, hadTrailingSlash);
      if (target === null) {
        continue;
      }

      if (targetExists(target, hadTrailingSlash)) {
        continue;
      }

      const displayUrl = stripQueryAndFragment(rawUrl) || rawUrl;
      if (!brokenByTarget.has(displayUrl)) {
        brokenByTarget.set(displayUrl, new Set());
      }
      brokenByTarget.get(displayUrl).add(pageRel);
    }
  }

  const entries = [...brokenByTarget.entries()].sort((a, b) =>
    a[0].localeCompare(b[0])
  );
  const brokenCount = entries.reduce((sum, [, refs]) => sum + refs.size, 0);

  console.log(`HTML_PAGES=${pages.length}`);
  console.log(`INTERNAL_LINKS=${totalInternalLinks}`);
  console.log(`BROKEN_RENDERED_LINKS=${brokenCount}`);
  for (const [url, refs] of entries) {
    console.log(`\n${url}`);
    for (const r of [...refs].sort()) {
      console.log(`  <- ${r}`);
    }
  }

  process.exit(brokenCount > 0 ? 1 : 0);
}

main();
