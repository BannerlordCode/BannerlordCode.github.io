import { readdirSync, readFileSync, statSync, writeFileSync } from 'fs';
import { join, relative } from 'path';
import { genericUsage } from './doc-fragments.mjs';

const docsRoot = join(import.meta.dirname, '..', 'docs');

function walk(dir, acc = []) {
  for (const entry of readdirSync(dir)) {
    if (entry.startsWith('.') || entry === 'node_modules') continue;
    const fullPath = join(dir, entry);
    const stats = statSync(fullPath);
    if (stats.isDirectory()) {
      walk(fullPath, acc);
    } else if (entry.endsWith('.md')) {
      acc.push(fullPath);
    }
  }
  return acc;
}

function humanTypeName(filePath, content) {
  const h1 = content.match(/^#\s+(.+)$/m)?.[1]?.trim();
  if (h1) return h1.replace(/\s+\/.*/, '').replace(/\s*\(v\d+\.\d+\.\d+\)$/, '').trim();
  return filePath.split(/\\|\//).pop()?.replace(/\.md$/, '') || 'ExampleType';
}

function isZhFile(filePath) {
  return /[\\/]zh[\\/]/.test(filePath);
}

function isEntryPage(rel) {
  const posix = rel.replace(/\\/g, '/');
  if (!posix.endsWith('/index.md')) return false;
  const parts = posix.split('/');
  const parent = parts[parts.length - 2] || '';
  return parent === 'api' ||
    ['architecture', 'guide', 'native', 'xml-reference'].includes(parent) ||
    parts[parts.length - 3] === 'api';
}

function addMissingSections(content, filePath) {
  const name = humanTypeName(filePath, content);
  const zh = isZhFile(filePath);
  let output = content.replace(/\uFFFD/g, '');
  const typeLine = output.split(/\r?\n/).find((line) => line.startsWith('**Type:**') || line.startsWith('**类型:**')) || '';
  const isInterface = /interface/i.test(typeLine) || (/`class`/.test(typeLine) && /^I[A-Z]/.test(name));
  const isAbstract = /abstract class/i.test(typeLine);
  const isEnum = /enum/i.test(typeLine);

  output = output.replace(/\*\*Purpose:\*\*\s*\./g, '**Purpose:** execute this entry point.');
  output = output.replace(/\*\*用途 \/ Purpose:\*\*\s*。/g, '**用途 / Purpose:** 执行此入口。');
  output = output.replace(/new ([A-Za-z0-9_<>.]+) \(v\d+\.\d+\.\d+\)\(\)/g, 'new $1()');
  output = output.replace(/var value = default\(([A-Za-z0-9_<>.]+)\);/g, 'var value = new $1();');
  output = output.replace(/var example = default\(([A-Za-z0-9_<>.]+)\);/g, 'var example = new $1();');
  const firstEnumValue = output.match(/\| \`([^`]+)\` \|/)?.[1] || 'Value';
  if (isInterface || isAbstract || isEnum) {
    const replacement = isInterface
      ? [`${name} implementation = Get${name.replace(/^I/, '')}Implementation();`]
      : isAbstract
        ? [`var implementation = new Custom${name}();`]
        : [`${name} example = ${name}.${firstEnumValue};`];
    const lines = output.split('\n');
    const usageHeader = lines.findIndex((line) => /^##\s+(Usage Example|使用示例)\s*$/.test(line));
    if (usageHeader >= 0) {
      const fenceStart = lines.findIndex((line, index) => index > usageHeader && line.trim() === '```csharp');
      const fenceEnd = fenceStart >= 0 ? lines.findIndex((line, index) => index > fenceStart && line.trim() === '```') : -1;
      if (fenceStart >= 0 && fenceEnd > fenceStart) {
        const replacementBlock = ['```csharp', ...replacement, '```'];
        lines.splice(fenceStart, fenceEnd - fenceStart + 1, ...replacementBlock);
        output = lines.join('\n');
      }
    }
  }
  output = output.replace(/(### .*\n)```csharp\n([\s\S]*?)\n```\n\n(\*\*(?:Purpose|用途 \/ Purpose):)/g, '$1`$2`\n\n$3');

  if (!/## (?:Mental Model|心智模型)/.test(output)) {
    const summary = zh
      ? `先把 \`${name}\` 当作这个子系统的入口或数据节点来理解：先看属性代表什么状态，再看方法允许你做什么。`
      : `Treat \`${name}\` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.`;
    const lines = output.split('\n');
    let insertAt = -1;
    const overviewIndex = lines.findIndex((line) => /^##\s+(Overview|概述)\s*$/.test(line));
    if (overviewIndex >= 0) {
      insertAt = lines.findIndex((line, index) => index > overviewIndex && /^##\s+/.test(line));
      if (insertAt < 0) insertAt = lines.length;
    } else {
      insertAt = lines.findIndex((line) => /^#\s+/.test(line));
      insertAt = insertAt >= 0 ? Math.min(insertAt + 2, lines.length) : 0;
    }
    const mentalSection = [`## ${zh ? '心智模型' : 'Mental Model'}`, '', summary, ''];
    lines.splice(insertAt, 0, ...mentalSection);
    output = lines.join('\n');
  }

  if (!/## (?:Usage Example|使用示例)/.test(output) && !isEntryPage(relative(docsRoot, filePath))) {
    const lang = zh ? 'zh' : 'en';
    const usage = genericUsage(name, [], lang);
    const section = `## ${zh ? '使用示例' : 'Usage Example'}\n\n\`\`\`csharp\n${usage}\n\`\`\`\n`;
    if (/## (?:See Also|参见)/.test(output)) {
      output = output.replace(/\n## (?:See Also|参见)/, `\n${section}\n## ${zh ? '参见' : 'See Also'}`);
    } else {
      output += `\n${section}`;
    }
  }

  return output;
}

let changedFiles = 0;

for (const filePath of walk(docsRoot)) {
  const before = readFileSync(filePath, 'utf8');
  let after = addMissingSections(before, filePath);

  after = after.replace(/\/\/ Typical usage of .*\r?\n/g, '');
  after = after.replace(/\/\/ .* 的典型用法\r?\n/g, '');
  after = after.replace(/\/\/ TODO: add a concrete ([A-Za-z0-9_<>.]+) usage path/g, 'var value = default($1);');
  after = after.replace(/\/\/ TODO: 补充 ([^\s]+) 的实际调用路径/g, 'var value = default($1);');
  after = after.replace(/var value = \/\* obtain ([^*]+) \*\//g, 'var value = default($1)');
  after = after.replace(/\.\/\* static helper method \*\//g, '.Initialize');
  after = after.replace(/new ([A-Za-z0-9_<>.]+) \{ \/\* fill fields \*\/ \}/g, 'new $1()');

  if (after !== before) {
    writeFileSync(filePath, after, 'utf8');
    changedFiles += 1;
  }
}

console.log(`Normalized generated examples in ${changedFiles} files.`);
