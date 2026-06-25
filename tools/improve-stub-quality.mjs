// Improve generated method-purpose lines and placeholder examples in API stub pages.
// Walks content/ API docs, regenerates any `**Purpose:**` / `**用途 / Purpose:**`
// line with a cleaned-up sentence, and replaces placeholder `new ClassName()`
// examples with simple invocation snippets derived from the method signature.

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
const SIG_RE = /`?(?:public|protected|internal|private)\s+[\w<>,\[\]\?\.\s\*]*\s+(?:[\w_]+)\s*\([^)]*\)`?/;
const SIG_PARSE_RE = /(?:public|protected|internal|private)\s+((?:static\s+|virtual\s+|override\s+|abstract\s+|unsafe\s+)*)\s*([\w<>,\[\]\?\.\s\*]+?)\s+([\w_]+)\s*\(([^)]*)\)/;

function detectLang(p) {
  if (/[\\/]en[\\/]/.test(p)) return 'en';
  if (/[\\/]zh[\\/]/.test(p)) return 'zh';
  return 'en';
}

function isClassDocPage(text) {
  return /\*\*Type:\*\*/.test(text);
}

function getPageTitle(text) {
  const m = text.match(/^---\n[\s\S]*?\ntitle:\s*"([^"]+)"/m);
  return m ? m[1].trim() : '';
}

function stripQuotes(s) {
  return s.replace(/[「」`]/g, '');
}

function cleanupPurpose(raw, methodName, lang) {
  let p = stripQuotes(raw);
  const zhPlaceholder = '执行此方法所描述的操作。';
  const enPlaceholder = 'Performs the operation described by this method.';
  if (p.includes(zhPlaceholder)) {
    p = p.replace(zhPlaceholder, `调用 ${methodName} 对应的操作。`);
  }
  if (p.includes(enPlaceholder)) {
    p = p.replace(enPlaceholder, `Executes the ${methodName} logic.`);
  }
  // Fix duplicated spacing left by removing quotes
  p = p.replace(/\s{2,}/g, ' ').trim();
  return p;
}

function parseSignature(sig) {
  const m = sig.match(SIG_PARSE_RE);
  if (!m) return null;
  const modifiers = m[1].trim().split(/\s+/).filter(Boolean);
  const returnType = m[2].trim();
  const name = m[3];
  const paramsRaw = m[4].trim();
  const params = paramsRaw
    ? paramsRaw.split(',').map((p) => {
        const parts = p.trim().split(/\s+/).filter(Boolean);
        const paramName = parts[parts.length - 1].replace(/=.*$/, '').trim();
        return paramName;
      })
    : [];
  return { isStatic: modifiers.includes('static'), returnType, name, params };
}

function generateExample(className, sig, lang) {
  const parsed = parseSignature(sig);
  if (!parsed) return null;
  if (parsed.name === className || parsed.name === '.ctor') {
    // Constructor; keep a generic obtain-then-use pattern
    return lang === 'zh'
      ? `// 先通过子系统 API 获取 ${className} 实例，然后调用方法\nvar instance = ...;\ninstance.${className}Logic();`
      : `// Obtain a ${className} instance through the subsystem API, then call methods\nvar instance = ...;\ninstance.${className}Logic();`;
  }
  const args = parsed.params.join(', ');
  const call = parsed.isStatic
    ? `${className}.${parsed.name}(${args});`
    : `instance.${parsed.name}(${args});`;
  const prefix = parsed.isStatic
    ? lang === 'zh' ? `// 通过类型调用 ${parsed.name}` : `// Call ${parsed.name} on the type`
    : lang === 'zh' ? `// 在实例上调用 ${parsed.name}` : `// Call ${parsed.name} on an instance`;
  let body;
  const isAsync = parsed.returnType.includes('Task') || parsed.returnType.includes('async');
  if (parsed.returnType === 'void' || parsed.returnType === 'Task' || parsed.returnType === 'System.Threading.Tasks.Task') {
    body = isAsync ? `await ${call}` : call;
  } else {
    body = `var result = ${isAsync ? 'await ' : ''}${call}`;
  }
  return `${prefix}\n${body}`;
}

function isPlaceholderExample(code, className) {
  const b = code.replace(/\r?\n/g, ' ');
  if (/new\s+(?:Custom|Mission|Save System|v1\.4\.5\s+Architecture|API\s+Catalog|Version\s+Hub|Class|Example|<title>|<Title>|[^\w\s]{3,})\s*\(/iu.test(b)) return true;
  if (className && new RegExp(`\\bnew\\s+${className.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*\\(`, 'iu').test(b)) return true;
  if (/Get\.\.\.Implementation\s*\(\s*\)/.test(b)) return true;
  if (/Obtain an instance of .* from the subsystem API first/.test(b)) return true;
  return false;
}

function improveFile(filePath) {
  const lang = detectLang(filePath);
  const relRoot = relative(contentRoot, filePath);
  if (!/\/api\//.test(relRoot.replace(/\\/g, '/'))) return 0;

  let text = readFileSync(filePath, 'utf8');
  if (!isClassDocPage(text)) return 0;
  const className = getPageTitle(text);
  if (!className) return 0;

  const lines = text.split(/\r?\n/);
  let changed = 0;

  for (let i = 0; i < lines.length; i++) {
    const headingMatch = lines[i].match(HEADING_RE);
    if (!headingMatch) continue;
    const methodName = headingMatch[1].trim();

    // Find next heading or end of method section
    let j = i + 1;
    for (; j < lines.length; j++) {
      if (/^(#{1,3}\s+)/.test(lines[j])) break;
    }

    let signature = '';
    const bodyLines = lines.slice(i + 1, j);
    for (let k = 0; k < bodyLines.length && k < 4; k++) {
      if (SIG_RE.test(bodyLines[k])) {
        signature = bodyLines[k];
        break;
      }
    }

    // Replace generic purpose line
    for (let k = 0; k < bodyLines.length; k++) {
      const purposeMatch = bodyLines[k].match(PURPOSE_RE);
      if (!purposeMatch) continue;
      const oldPurposeText = purposeMatch[2].trim();
      const regenerated = docFragments.methodPurpose(methodName, lang);
      const newPurposeText = cleanupPurpose(regenerated, methodName, lang);
      if (oldPurposeText !== newPurposeText) {
        lines[i + 1 + k] = `${purposeMatch[1]} ${newPurposeText}`;
        changed++;
      }
      break;
    }

    // Replace placeholder example code blocks inside the method
    let inBlock = false;
    let blockStart = -1;
    for (let k = 0; k < bodyLines.length; k++) {
      const line = bodyLines[k];
      if (/^```csharp\s*$/.test(line)) {
        inBlock = true;
        blockStart = k;
        continue;
      }
      if (inBlock && /^```\s*$/.test(line)) {
        const block = bodyLines.slice(blockStart + 1, k).join('\n');
        if (isPlaceholderExample(block, className)) {
          const replacement = generateExample(className, signature, lang);
          if (replacement) {
            const replacementLines = replacement.split('\n');
            lines.splice(i + 1 + blockStart + 1, k - blockStart - 1, ...replacementLines);
            const delta = replacementLines.length - (k - blockStart - 1);
            // Adjust outer loop? Simpler: restart scan after a mutation is risky.
            // We'll just mark that we changed and leave; a second run can refine.
            j += delta;
            changed++;
          }
        }
        inBlock = false;
        blockStart = -1;
      }
    }

    i = j - 1; // continue after section
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
console.log(`Improved ${total} method purposes/examples in ${filesChanged} files.`);
