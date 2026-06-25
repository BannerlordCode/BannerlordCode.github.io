// Semantic-quality auditor for generated class docs.
// Flags placeholder method purpose prose and fake/invalid usage examples
// so the generator pipeline can be driven to zero blockers.
//
// Usage: node tools/audit-doc-quality.mjs [root] [--verbose]
// Default root is `content`; override with first CLI arg or AUDIT_DOCS_ROOT env var.
// Exit code 0 = no blockers, 1 = blocking issues found.

import { readFileSync, existsSync, readdirSync, statSync } from 'fs';
import { join, relative, dirname, sep } from 'path';

const args = process.argv.slice(2);
const verbose = args.includes('--verbose');
const targetArg = args.find((a) => !a.startsWith('--'));
const target = targetArg || process.env.AUDIT_DOCS_ROOT || 'content';
const docsRoot = join(import.meta.dirname, '..', target);
const reSep = new RegExp(sep === '\\' ? '\\\\' : sep, 'g');

const blockers = [];
const warnings = [];
let scannedFiles = 0;
let scannedMethods = 0;
let expandedMethods = 0;

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
  /\*\*用途\s*\/\s*Purpose:\*\*\s*(.+)$/iu,
  /\*\*用途：?\*\*\s*(.+)$/u,
  /\*\*Purpose:\*\*\s*(.+)$/iu,
  /\*\*方法用途\*\*\s*(.+)$/u,
  /\*\*用法\*\*\s*(.+)$/u,
];

const QUOTE_CHARS = "['\"`\u2018\u201c]";
const QUOTE_END = "['\"`\u2019\u201d]";

// Formulaic Chinese placeholder purposes observed in generated stubs.
const ZH_FORMULAIC_RE = [
  new RegExp(`^处理\\s*${QUOTE_CHARS}?[^'"\u2019\u201d]{1,80}${QUOTE_END}?\\s*相关[逻邏]辑[。；]?$`, 'u'),
  new RegExp(`^获取\\s*${QUOTE_CHARS}?[^'"\u2019\u201d]{1,80}${QUOTE_END}?\\s*的当前值[。；]?$`, 'u'),
  new RegExp(`^设置\\s*${QUOTE_CHARS}?[^'"\u2019\u201d]{1,80}${QUOTE_END}?\\s*(?:的当前值|的值|状态|数据)[。；]?$`, 'u'),
  new RegExp(`^更新\\s*${QUOTE_CHARS}?[^'"\u2019\u201d]{1,80}${QUOTE_END}?\\s*(?:的状态或数据|的状态、资源或绑定|状态|数据)[。；]?$`, 'u'),
  new RegExp(`^判断当前对象是否(?:包含/拥有|拥有|包含|具有)\\s*${QUOTE_CHARS}?[^'"\u2019\u201d]{1,80}${QUOTE_END}?[。；]?$`, 'u'),
  new RegExp(`^创建一个\\s*${QUOTE_CHARS}?[^'"\u2019\u201d]{1,80}${QUOTE_END}?\\s*(?:实例或对象|实例)[。；]?$`, 'u'),
  new RegExp(`^初始化\\s*${QUOTE_CHARS}?[^'"\u2019\u201d]{1,80}${QUOTE_END}?\\s*(?:的状态、资源或绑定|状态、资源或绑定|状态|数据|绑定)[。；]?$`, 'u'),
  new RegExp(`^(?:应用|执行|启动|停止|打开|关闭)\\s*${QUOTE_CHARS}?[^'"\u2019\u201d]{1,80}${QUOTE_END}?\\s*(?:操作|流程|逻辑|功能|状态)[。；]?$`, 'u'),
  new RegExp(`^读取\\s*${QUOTE_CHARS}?[^'"\u2019\u201d]{1,80}${QUOTE_END}?\\s*(?:数据|信息|配置|状态)[。；]?$`, 'u'),
  new RegExp(`^返回\\s*${QUOTE_CHARS}?[^'"\u2019\u201d]{1,80}${QUOTE_END}?[。；]?$`, 'u'),
];

// Chinese verbs commonly used as scaffold-only placeholders.
const VAGUE_ZH_VERBS =
  '处理|响应|读取|获取|设置|添加|移除|更新|检查|调用|创建|返回|应用|执行|启动|停止|打开|关闭';
const ZH_VAGUE_RE = new RegExp(`^(?:${VAGUE_ZH_VERBS})[\s,，;；]*$`);
const ZH_VERB_QUOTED_RE = new RegExp(
  `^(?:${VAGUE_ZH_VERBS})\\s*${QUOTE_CHARS}[^'"\u2019\u201d]{1,80}${QUOTE_END}\\s*\\.?$`
);

// English scaffold patterns like "react to `foo bar`" or just "handle `...`".
const EN_VAGUE_RE =
  /^(?:react(?:s|ed|ing)?\s+to|handle|process(?:es)?|return|get|set|add|remove|update|check|call|create|apply|execute|start|stop|open|close)\s+['"`\u2018\u201c][^'"`\u2019\u201d]{1,80}['"`\u2019\u201d]\s*\.?$/iu;

const EN_FORMULAIC_RE =
  /^(?:handle|process|react to|get|set|update|check|call|create|return|apply|execute|remove|add)\s+['"`\u2018\u201c][^'"`\u2019\u201d]{1,80}['"`\u2019\u201d]\s+(?:value|data|state|logic|related logic|instance|object|status|information)\s*\.?$/iu;

// Obvious placeholder token examples.
const PLACEHOLDER_EXAMPLE_RE = [
  /Get\.\.\.Implementation\s*\(\s*\)/,
  // Literal untemplated placeholder tokens.
  /new\s+(?:Custom|Mission|Save System|v1\.4\.5\s+Architecture|API\s+Catalog|Version\s+Hub|Class|Example|<title>|<Title>|[^\w\s]{3,})\s*\(/iu,
];

const INVALID_CONSTRUCTOR_FOR_TYPE_RE = /new\s+([A-Za-z0-9_]+)\s*\(/g;

const CONTRADICTION_BLOCKERS = [
  /Source\s+pending/iu,
  /源码整理中/u,
  /源码待整理/u,
  /Fake\s+Example/u,
  /TODO\s*[:：]/iu,
  /FIXME\s*[:：]/iu,
];

const CONTRADICTION_WARNINGS = [
  /100%\s+documented/iu,
  /所有类均已/,
  /full\s+cross[-]?version\s+comparison/iu,
  /完整对比/,
  /selected\s+set/iu,
];

const EXCLUDED_PATHS = [
  /\/node_modules\//,
  /\/public\//,
];

function isExcluded(p) {
  return EXCLUDED_PATHS.some((re) => re.test(p));
}

function extractPurpose(line) {
  for (const re of PURPOSE_MARKERS) {
    const m = line.match(re);
    if (m) return m[1].trim();
  }
  return null;
}

function normalizeSpacing(s) {
  return s.replace(/[\s_\-]+/g, ' ').trim().toLowerCase();
}

function splitIdentifierToWords(id) {
  // MaxHitPointsUI -> max hit points ui; XMLNode -> xml node; GetXP -> get xp
  return id
    .replace(/([a-z\d])([A-Z])/g, '$1 $2')
    .replace(/([A-Z]+)([A-Z][a-z\d])/g, '$1 $2')
    .toLowerCase();
}

function extractQuotedPhrase(s) {
  const m = s.match(/['"`\u2018\u201c]([^'"`\u2019\u201d]+)['"`\u2019\u201d]/u);
  return m ? m[1].trim() : '';
}

function isFormulaicPurpose(purpose) {
  return ZH_FORMULAIC_RE.some((re) => re.test(purpose));
}

function isGenericPurpose(purpose, methodName = '') {
  const stripped = purpose
    .replace(/['"`\u2018\u2019\u201c\u201d]/gu, '')
    .replace(/\s+/g, ' ')
    .trim();

  if (isFormulaicPurpose(purpose)) return true;
  if (ZH_VAGUE_RE.test(stripped)) return true;
  if (ZH_VERB_QUOTED_RE.test(purpose)) return true;
  if (EN_VAGUE_RE.test(purpose)) return true;
  if (EN_FORMULAIC_RE.test(purpose)) return true;

  // Ultra-short (1-4 hanzi) purposes are almost always placeholders.
  if (stripped.length <= 12 && /^[\u4e00-\u9fa5]{1,4}$/.test(stripped)) return true;

  // The quoted phrase is just the method name split into words ("get body properties min").
  if (methodName) {
    const quoted = extractQuotedPhrase(purpose);
    if (quoted) {
      const methodWords = splitIdentifierToWords(methodName);
      const quotedWords = normalizeSpacing(quoted);
      if (methodWords && quotedWords === methodWords) return true;
    }
  }

  return false;
}

function codeBlocks(text) {
  const blocks = [];
  const re = /```[\w]*\n([\s\S]*?)```/g;
  let m;
  while ((m = re.exec(text))) blocks.push(m[1]);
  return blocks;
}

function inlineCode(text) {
  const spans = [];
  const re = /`([^`]+)`/g;
  let m;
  while ((m = re.exec(text))) spans.push(m[1]);
  return spans;
}

function getPageTitle(text) {
  const fm = text.match(/^---\n[\s\S]*?\ntitle:\s*"([^"]+)"/m);
  if (fm) return fm[1].trim();
  const h1 = text.match(/^#\s+(.+)$/m);
  return h1 ? h1[1].trim() : '';
}

function getPageTypeLine(text) {
  const m = text.match(/\*\*Type:\*\*\s*(.+)$/m);
  return m ? m[1].trim() : '';
}

function parseMethods(text) {
  const methods = [];
  const lines = text.split(/\r?\n/);
  let i = 0;
  while (i < lines.length) {
    const m = lines[i].match(/^###\s+(.+)$/);
    if (m) {
      const methodName = m[1].trim();
      const startLine = i + 1;
      let j = i + 1;
      for (; j < lines.length; j++) {
        if (/^###\s+/.test(lines[j])) break;
        if (/^#{1,2}[^#]/.test(lines[j])) break;
      }
      const body = lines.slice(i + 1, j).join('\n');
      methods.push({ methodName, body, startLine });
      i = j;
    } else {
      i++;
    }
  }
  return methods;
}

function buildTitleRe(title) {
  if (!title) return null;
  const escaped = title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return new RegExp(`\\bnew\\s+${escaped}\\s*\\(`, 'iu');
}

function isClassDocPage(pathRel, typeLine) {
  return /\/api\//.test(pathRel) && typeLine !== '';
}

function auditFile(filePath) {
  const pathRel = rel(filePath);
  if (isExcluded(pathRel)) return;

  const text = readFileSync(filePath, 'utf8');
  const typeLine = getPageTypeLine(text);
  const title = getPageTitle(text);
  const isClassDoc = isClassDocPage(pathRel, typeLine);
  const isInterfaceOrAbstract =
    /\binterface\b/iu.test(typeLine) || /\babstract\b/iu.test(typeLine);
  const titleRe = buildTitleRe(title);
  const blocks = codeBlocks(text);

  // Whole-file contradiction wording.
  for (const re of CONTRADICTION_BLOCKERS) {
    if (re.test(text)) {
      blockers.push({
        file: pathRel,
        line: 0,
        category: 'contradictory-scope-wording',
        snippet: `matches /${re.source}/`,
      });
    }
  }
  for (const re of CONTRADICTION_WARNINGS) {
    if (re.test(text)) {
      warnings.push({
        file: pathRel,
        line: 0,
        category: 'suspicious-scope-wording',
        snippet: `matches /${re.source}/`,
      });
    }
  }

  // Placeholder / fake examples at the file level first.
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

    // Constructor using the page title itself in a code block is always suspect.
    if (titleRe && titleRe.test(b)) {
      blockers.push({
        file: pathRel,
        line: 0,
        category: 'placeholder-example-title',
        snippet: b.slice(0, 120),
      });
    }

    // Non-class doc pages should not contain constructor calls at all.
    if (!isClassDoc) {
      const anyCtor = /\bnew\s+([A-Za-z]\w*)\s*\(/g;
      let cm;
      while ((cm = anyCtor.exec(b))) {
        const ctorName = cm[1];
        // Allow harmless "new string[]" / "new List<T>" in architecture prose if
        // the title is not the same token; still flag for review when it uses the
        // same title token.
        if (title && ctorName.toLowerCase() === title.split(/\s+/)[0].toLowerCase()) {
          blockers.push({
            file: pathRel,
            line: 0,
            category: 'fake-example-on-entry-page',
            snippet: b.slice(0, 120),
          });
        }
      }
    }

    // Constructor on interface / abstract class page using the page title.
    if (isInterfaceOrAbstract) {
      let cm;
      while ((cm = INVALID_CONSTRUCTOR_FOR_TYPE_RE.exec(b))) {
        const ctorName = cm[1];
        const titleToken = title.split(/\s+/)[0];
        if (titleToken && ctorName.toLowerCase() === titleToken.toLowerCase()) {
          blockers.push({
            file: pathRel,
            line: 0,
            category: 'invalid-constructor-on-interface/abstract',
            snippet: `new ${ctorName}(...) on ${typeLine}`,
          });
        }
      }
    }
  }

  // Per-method analysis (only for class doc pages with method sections).
  if (isClassDoc) {
    const methods = parseMethods(text);
    expandedMethods += methods.length;
    for (const method of methods) {
      scannedMethods++;
      const bodyLines = method.body.split(/\r?\n/);
      let purpose = null;
      let purposeLine = 0;
      for (let i = 0; i < bodyLines.length; i++) {
        const maybe = extractPurpose(bodyLines[i]);
        if (maybe) {
          purpose = maybe;
          purposeLine = method.startLine + i + 1;
          break;
        }
      }

      if (purpose && isGenericPurpose(purpose, method.methodName)) {
        blockers.push({
          file: pathRel,
          line: purposeLine,
          category: 'generic-method-purpose',
          snippet: purpose.slice(0, 120),
        });
      }

      const methodBlocks = codeBlocks(method.body);
      if (methodBlocks.length === 0) {
        warnings.push({
          file: pathRel,
          line: method.startLine,
          category: 'method-missing-example',
          snippet: method.methodName.slice(0, 120),
        });
      } else {
        // Method with a code block but the code block only contains a single
        // `new Title(...)` line is a placeholder even on class doc pages.
        for (const block of methodBlocks) {
          const b = block.replace(/\r?\n/g, ' ');
          if (titleRe && titleRe.test(b)) {
            blockers.push({
              file: pathRel,
              line: method.startLine,
              category: 'placeholder-method-example',
              snippet: b.slice(0, 120),
            });
          }
        }
      }
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

function categoryCounts(items) {
  const counts = new Map();
  for (const it of items) {
    counts.set(it.category, (counts.get(it.category) || 0) + 1);
  }
  return counts;
}

function printGroup(label, items) {
  if (!items.length) return;
  const byFile = groupByFile(items);
  const counts = categoryCounts(items);
  console.log(`\n## ${label}: ${items.length}`);
  console.log('By category:');
  for (const [cat, n] of counts) {
    console.log(`  ${cat}: ${n}`);
  }
  if (!verbose) {
    const shown = Math.min(items.length, 200);
    console.log(`\nFirst ${shown} occurrences (use --verbose for full list):`);
    for (let i = 0; i < shown; i++) {
      const it = items[i];
      const where = it.line ? `L${it.line}` : 'code block';
      console.log(`  ${it.file} [${it.category}] ${where}: ${it.snippet}`);
    }
    if (items.length > shown) {
      console.log(`  ... and ${items.length - shown} more`);
    }
    return;
  }
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
  `\nScanned ${scannedFiles} files, ${scannedMethods} method-purpose lines, ${expandedMethods} method sections.`
);
console.log(`Blockers: ${blockers.length}, Warnings: ${warnings.length}`);

if (blockers.length > 0) {
  process.exit(1);
}
process.exit(0);
