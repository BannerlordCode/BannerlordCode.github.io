// Semantic-quality auditor for generated class docs.
// Flags placeholder method purpose prose and fake/invalid usage examples
// so the generator pipeline can be driven to zero blockers.
//
// Usage: node tools/audit-doc-quality.mjs
// Exit code 0 = no blockers, 1 = blocking issues found.

import { readFileSync, existsSync, readdirSync, statSync } from 'fs';
import { join, relative, dirname, sep } from 'path';

const docsRoot = join(import.meta.dirname, '..', 'docs');
const reSep = new RegExp(sep === '\\' ? '\\\\' : sep, 'g');

const blockers = [];
const warnings = [];
let scannedFiles = 0;
let scannedMethods = 0;

function rel(p) {
  return relative(docsRoot, p).replace(reSep, '/');
}

function walk(dir, acc = []) {
  let entries;
  try { entries = readdirSync(dir); } catch { return acc; }
  for (const e of entries) {
    if (e.startsWith('.') || e === 'public' || e === 'node_modules') continue;
    const p = join(dir, e);
    let s;
    try { s = statSync(p); } catch { continue; }
    if (s.isDirectory()) walk(p, acc);
    else if (e.endsWith('.md')) acc.push(p);
  }
  return acc;
}

// ---------- Pattern definitions ----------

const PURPOSE_MARKERS = [
  /\*\*用途\s*\/\s*Purpose:\*\*\s*(.+)$/i,
  /\*\*用途：?\*\*\s*(.+)$/,
  /\*\*Purpose:\*\*\s*(.+)$/i,
];

// Chinese verbs commonly used as scaffold-only placeholders.
const VAGUE_ZH_VERBS =
  '处理|响应|读取|获取|设置|添加|移除|更新|检查|调用|创建|返回|应用|执行|启动|停止|打开|关闭';
const ZH_VAGUE_RE = new RegExp(`^(?:${VAGUE_ZH_VERBS})[\s,，;；]*$`);
const ZH_VERB_QUOTED_RE = new RegExp(
  `^(?:${VAGUE_ZH_VERBS})\\s*['"\`\\u2018\\u201c][^'"\`\\u2019\\u201d]*['"\`\\u2019\\u201d]\\s*\\.?$`
);

// English scaffold patterns like "react to `foo bar`" or just "handle `...`".
const EN_VAGUE_RE =
  /^(?:react(?:s|ed|ing)?\s+to|handle|process(?:es)?|return|get|set|add|remove|update|check|call|create|apply|execute|start|stop|open|close)\s+['"`\u2018\u201c][^'"`\u2019\u201d]*['"`\u2019\u201d]\s*\.?$/i;

const PLACEHOLDER_EXAMPLE_RE = [
  /Get\.\.\.Implementation\s*\(\s*\)/,
  /new\s+(?:Custom|Mission|Save System|v1\.4\.5 Architecture|API Catalog|Version Hub|Class|Example|<title>|<Title>|\.\.\.)\s*\(/i,
];

const INVALID_CONSTRUCTOR_FOR_TYPE_RE =
  /new\s+([A-Za-z0-9_]+)\s*\(/g;

const CONTRADICTION_BLOCKERS = [
  /Source\s+pending/i,
  /源码整理中/,
  /源码待整理/,
];

const CONTRADICTION_WARNINGS = [
  /100%\s+documented/i,
  /所有类均已/,
  /full\s+cross[-]?version\s+comparison/i,
  /完整对比/,
  /selected\s+set/i,
];

const NON_CLASS_ENTRY_PATHS = [
  /\/(index|catalog)\.md$/,
  /\/architecture\/index\.md$/,
  /\/versions\/index\.md$/,
  /\/v\d\.\d\.\d\/(zh|en)\/(index|api\/index)\.md$/,
];

function isNonClassEntry(p) {
  return NON_CLASS_ENTRY_PATHS.some((re) => re.test(p));
}

function extractPurpose(line) {
  for (const re of PURPOSE_MARKERS) {
    const m = line.match(re);
    if (m) return m[1].trim();
  }
  return null;
}

function isGenericPurpose(purpose) {
  const stripped = purpose
    .replace(/[`'"\u2018\u2019\u201c\u201d]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
  const short = stripped.length <= 12;
  return (
    ZH_VAGUE_RE.test(stripped) ||
    ZH_VERB_QUOTED_RE.test(purpose) ||
    EN_VAGUE_RE.test(purpose) ||
    (short && /^[\u4e00-\u9fa5]{1,4}$/.test(stripped))
  );
}

function codeBlocks(text) {
  const blocks = [];
  const re = /```[\w]*\n([\s\S]*?)```/g;
  let m;
  while ((m = re.exec(text))) blocks.push(m[1]);
  return blocks;
}

function getPageTypeLine(text) {
  const m = text.match(/\*\*Type:\*\*\s*(.+)$/m);
  return m ? m[1].trim() : '';
}

function auditFile(filePath) {
  const pathRel = rel(filePath);
  const text = readFileSync(filePath, 'utf8');
  const typeLine = getPageTypeLine(text);
  const isInterfaceOrAbstract =
    /\binterface\b/i.test(typeLine) || /\babstract\b/i.test(typeLine);
  const blocks = codeBlocks(text);

  // 1. Generic method purpose prose.
  const lines = text.split(/\r?\n/);
  for (let i = 0; i < lines.length; i++) {
    const purpose = extractPurpose(lines[i]);
    if (!purpose) continue;
    scannedMethods++;
    if (isGenericPurpose(purpose)) {
      blockers.push({
        file: pathRel,
        line: i + 1,
        category: 'generic-method-purpose',
        snippet: purpose.slice(0, 120),
      });
    }
  }

  // 2. Placeholder / fake example blocks.
  for (const block of blocks) {
    const b = block.replace(/\r?\n/g, ' ');
    for (const re of PLACEHOLDER_EXAMPLE_RE) {
      if (re.test(b)) {
        blockers.push({
          file: pathRel,
          line: 0,
          category: 'placeholder-example',
          snippet: b.slice(0, 120),
        });
      }
    }

    // Constructor on interface / abstract class page.
    if (isInterfaceOrAbstract) {
      let cm;
      const titleMatch = text.match(/^#\s+(.+)$/m);
      const title = titleMatch ? titleMatch[1].trim().split(/\s+/)[0] : '';
      while ((cm = INVALID_CONSTRUCTOR_FOR_TYPE_RE.exec(b))) {
        const ctorName = cm[1];
        if (title && ctorName === title) {
          blockers.push({
            file: pathRel,
            line: 0,
            category: 'invalid-constructor-on-interface/abstract',
            snippet: `new ${ctorName}(...) on ${typeLine}`,
          });
        }
      }
    }

    // Constructor on non-class entry pages (indexes, catalogs, architecture, versions).
    if (isNonClassEntry(pathRel) && /new\s+\S+\s*\(/.test(b)) {
      blockers.push({
        file: pathRel,
        line: 0,
        category: 'fake-example-on-entry-page',
        snippet: b.slice(0, 120),
      });
    }
  }

  // 3. Contradictory / misleading scope wording.
  for (const re of CONTRADICTION_BLOCKERS) {
    if (re.test(text)) {
      blockers.push({
        file: pathRel,
        line: 0,
        category: 'contradictory-scope-wording',
        snippet: `matches ${re.source}`,
      });
    }
  }
  for (const re of CONTRADICTION_WARNINGS) {
    if (re.test(text)) {
      warnings.push({
        file: pathRel,
        line: 0,
        category: 'suspicious-scope-wording',
        snippet: `matches ${re.source}`,
      });
    }
  }
}

// ---------- Run ----------

for (const f of walk(docsRoot)) {
  scannedFiles++;
  auditFile(f);
}

function groupByFile(items) {
  const map = new Map();
  for (const it of items) {
    const list = map.get(it.file) || [];
    list.push(it);
    map.set(it.file, list);
  }
  return map;
}

function printGroup(label, items) {
  if (!items.length) return;
  const byFile = groupByFile(items);
  console.log(`\n## ${label}: ${items.length}`);
  for (const [file, list] of byFile) {
    console.log(`\n${file}`);
    for (const it of list) {
      const where = it.line ? `L${it.line}` : 'code block';
      console.log(`  - [${it.category}] ${where}: ${it.snippet}`);
    }
  }
}

printGroup('Blockers', blockers);
printGroup('Warnings', warnings);

console.log(
  `\nScanned ${scannedFiles} files, ${scannedMethods} method-purpose lines.`
);
console.log(`Blockers: ${blockers.length}, Warnings: ${warnings.length}`);

if (blockers.length > 0) {
  process.exit(1);
}
process.exit(0);
