#!/usr/bin/env node
/**
 * tools/_verify/_coverage-census-20261007.mjs — Coverage census report
 *
 * For each version × lang:
 *   - Load types-<ver>.json (source A: all public types from .cs files)
 *   - Load tiers-v<ver>-<lang>.json (page depth tiers)
 *   - Scan content/v<ver>/<lang>/api/ for existing .md pages
 *   - Cross-reference: for each type, check if a page exists
 *   - Classify: covered / missing / shell
 *
 * Output:
 *   tools/_COVERAGE-CENSUS-20261007.md  (comprehensive report)
 *   tools/_verify/queue-missing-<ver>-<lang>.pages.txt  (missing pages queue)
 *
 * Read-only: never writes to content/.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const REPO_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const VERIFY_DIR = path.join(REPO_ROOT, 'tools', '_verify');
const CONTENT_DIR = path.join(REPO_ROOT, 'content');

const VERSIONS = ['1.3.0', '1.3.15', '1.4.5', '1.4.6', '1.4.7', '1.5.3'];
const LANGS = ['en', 'zh'];

// ── Helpers ──

function loadJson(fp) {
  try { return JSON.parse(fs.readFileSync(fp, 'utf8')); }
  catch { return null; }
}

function loadTiers(ver, lang) {
  const fp = path.join(VERIFY_DIR, `tiers-v${ver}-${lang}.json`);
  const j = loadJson(fp);
  if (!j) return {};
  // Format 1: { pagePath: tier } (v1.3.15, v1.4.5)
  if (!Array.isArray(j) && !Array.isArray(j.pages)) {
    const map = {};
    for (const [p, t] of Object.entries(j)) {
      if (typeof t === 'string') map[p] = t;
    }
    return map;
  }
  // Format 2: { pages: [{path, tier, ...}] } (v1.4.6+)
  if (Array.isArray(j.pages)) {
    const map = {};
    for (const p of j.pages) {
      if (p.path && p.tier) map[p.path] = p.tier;
    }
    return map;
  }
  // Format 3: array of {path, tier}
  if (Array.isArray(j)) {
    const map = {};
    for (const p of j) {
      if (p.path && p.tier) map[p.path] = p.tier;
    }
    return map;
  }
  return {};
}

function scanPages(ver, lang) {
  const apiDir = path.join(CONTENT_DIR, `v${ver}`, lang, 'api');
  const pages = [];
  if (!fs.existsSync(apiDir)) return pages;
  function walk(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const fp = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(fp);
      else if (entry.name.endsWith('.md')) {
        pages.push({
          absPath: fp,
          relPath: path.relative(REPO_ROOT, fp).replace(/\\/g, '/'),
          name: entry.name.replace(/\.md$/, ''),
        });
      }
    }
  }
  walk(apiDir);
  return pages;
}

function determineTier(pageRelPath, tiersMap) {
  // Check tiers file first
  if (tiersMap[pageRelPath]) return tiersMap[pageRelPath];
  // Fallback: check content markers
  try {
    const content = fs.readFileSync(path.join(REPO_ROOT, pageRelPath), 'utf8');
    if (content.includes('的自动生成类参考') || content.includes('Auto-generated class reference')) return 'generated';
    if (content.includes('它有什么状态') || content.includes('它允许你做什么')) return 'shell';
    if (content.length > 2500) return 'handwritten_deep';
    return 'shell';
  } catch {
    return 'unknown';
  }
}

// ── Main ──

const allResults = [];
const queues = {};

for (const ver of VERSIONS) {
  const typesFp = path.join(VERIFY_DIR, `types-${ver}.json`);
  const typesData = loadJson(typesFp);
  if (!typesData) continue;

  const types = typesData.types || [];
  const uniqueTypes = [];
  const seen = new Set();
  for (const t of types) {
    const key = `${t.namespace}::${t.name}`;
    if (!seen.has(key)) {
      seen.add(key);
      uniqueTypes.push(t);
    }
  }

  for (const lang of LANGS) {
    const tiersMap = loadTiers(ver, lang);
    const pages = scanPages(ver, lang);

    // Build name → pages map
    const nameToPages = {};
    for (const p of pages) {
      if (!nameToPages[p.name]) nameToPages[p.name] = [];
      nameToPages[p.name].push(p);
    }

    // Classify each type
    const covered = [];
    const missing = [];
    const shell = [];

    for (const t of uniqueTypes) {
      const pagesForType = nameToPages[t.name];
      if (!pagesForType || pagesForType.length === 0) {
        missing.push(t);
      } else {
        // Check tier of the first matching page
        const tier = determineTier(pagesForType[0].relPath, tiersMap);
        if (tier === 'shell') {
          shell.push({ ...t, tier, pagePath: pagesForType[0].relPath });
        } else {
          covered.push({ ...t, tier, pagePath: pagesForType[0].relPath });
        }
      }
    }

    // Store for queue output
    const queueKey = `queue-missing-${ver}-${lang}`;
    queues[queueKey] = missing.map(t => {
      const ns = t.namespace || '';
      return `${ns}::${t.name}`;
    });

    allResults.push({
      ver, lang,
      totalTypes: uniqueTypes.length,
      pagesOnDisk: pages.length,
      covered, missing, shell,
    });
  }
}

// ── Write queue files ──

for (const [key, lines] of Object.entries(queues)) {
  const fp = path.join(VERIFY_DIR, `${key}.pages.txt`);
  fs.writeFileSync(fp, lines.join('\n') + '\n', 'utf8');
  console.log(`Wrote ${fp} (${lines.length} entries)`);
}

// ── Write report ──

const reportFp = path.join(REPO_ROOT, 'tools', '_COVERAGE-CENSUS-20261007.md');

let md = `# Coverage Census Report — 2026-10-07

Generated by \`tools/_verify/_coverage-census-20261007.mjs\`

## Summary

| Version | Lang | Unique Types | Pages on Disk | Covered | Shell | Missing | Coverage |
|---|---|---:|---:|---:|---:|---:|---:|
`;

for (const r of allResults) {
  const pct = (r.covered.length / r.totalTypes * 100).toFixed(1);
  md += `| v${r.ver} | ${r.lang} | ${r.totalTypes} | ${r.pagesOnDisk} | ${r.covered.length} | ${r.shell.length} | ${r.missing.length} | ${pct}% |\n`;
}

md += `\n---\n\n`;

for (const r of allResults) {
  const pct = (r.covered.length / r.totalTypes * 100).toFixed(1);
  md += `## v${r.ver} — ${r.lang}\n\n`;
  md += `| Metric | Value |\n|---|---:|\n`;
  md += `| Unique types (source A) | ${r.totalTypes} |\n`;
  md += `| Pages on disk | ${r.pagesOnDisk} |\n`;
  md += `| Covered (generated/handwritten_deep) | ${r.covered.length} |\n`;
  md += `| Shell (exists but tier=shell) | ${r.shell.length} |\n`;
  md += `| Missing (no page) | ${r.missing.length} |\n`;
  md += `| Coverage rate | ${pct}% |\n\n`;

  // Kind breakdown for missing
  const missingByKind = {};
  for (const t of r.missing) {
    missingByKind[t.kind] = (missingByKind[t.kind] || 0) + 1;
  }
  md += `### Missing by kind\n\n| Kind | Count |\n|---|---:|\n`;
  for (const [k, v] of Object.entries(missingByKind).sort((a, b) => b[1] - a[1])) {
    md += `| ${k} | ${v} |\n`;
  }
  md += '\n';

  // Namespace breakdown for missing (top 20)
  const missingByNs = {};
  for (const t of r.missing) {
    const ns = t.namespace || '(global)';
    missingByNs[ns] = (missingByNs[ns] || 0) + 1;
  }
  const topNs = Object.entries(missingByNs).sort((a, b) => b[1] - a[1]).slice(0, 20);
  md += `### Missing by namespace (top 20)\n\n| Namespace | Count |\n|---|---:|\n`;
  for (const [ns, c] of topNs) {
    md += `| ${ns} | ${c} |\n`;
  }
  md += '\n';

  // Shell pages (first 20)
  if (r.shell.length > 0) {
    md += `### Shell pages (first 20)\n\n| Type | Namespace | Page |\n|---|---|---|\n`;
    for (const s of r.shell.slice(0, 20)) {
      md += `| ${s.name} | ${s.namespace || '(global)'} | ${s.pagePath} |\n`;
    }
    md += '\n';
  }

  // Missing pages (first 30)
  if (r.missing.length > 0) {
    md += `### Missing pages (first 30)\n\n| Type | Namespace | Kind |\n|---|---|---|\n`;
    for (const t of r.missing.slice(0, 30)) {
      md += `| ${t.name} | ${t.namespace || '(global)'} | ${t.kind} |\n`;
    }
    md += '\n';
  }
}

fs.writeFileSync(reportFp, md, 'utf8');
console.log(`\nWrote ${reportFp}`);
console.log(`Total queue files: ${Object.keys(queues).length}`);
