import { readdirSync, readFileSync, statSync, writeFileSync } from 'fs';
import { join, relative } from 'path';

const docsRoot = join(import.meta.dirname, '..', 'docs');

function walk(dir, acc = []) {
  for (const entry of readdirSync(dir)) {
    if (entry.startsWith('.') || entry === 'node_modules') continue;
    const fullPath = join(dir, entry);
    const stats = statSync(fullPath);
    if (stats.isDirectory()) walk(fullPath, acc);
    else if (entry.endsWith('.md')) acc.push(fullPath);
  }
  return acc;
}

let changed = 0;

for (const filePath of walk(docsRoot)) {
  const rel = relative(docsRoot, filePath).replace(/\\/g, '/');
  let content = readFileSync(filePath, 'utf8');
  let after = content;

  // 1. Replace fake Mission constructor examples with the realistic singleton pattern.
  if (rel.endsWith('api/mission/Mission.md')) {
    const zh = /\/zh\//.test(rel);
    const usageHeadingRe = /^##\s+(?:Usage Example|使用示例)\s*$/m;
    const blockRe = /```csharp\r?\n[\s\S]*?new\s+Mission\s*\(\)[\s\S]*?```/g;
    if (usageHeadingRe.test(after) && blockRe.test(after)) {
      after = after.replace(blockRe, '```csharp\nvar mission = Mission.Current;\nmission.AddActiveMissionObject(missionObject);\n```');
    }
  }

  // 2. Drop fake usage sections from v1.3.0/1.3.15/1.4.5 guide/save-system.md pages.
  if (/\/(?:guide\/save-system|guide\/save-system-guide)\.md$/.test(rel)) {
    const lines = after.split(/\r?\n/);
    const out = [];
    let i = 0;
    while (i < lines.length) {
      const line = lines[i];
      if (/^##\s+(?:Usage Example|使用示例)\s*$/.test(line)) {
        i += 1;
        while (i < lines.length && !/^#{1,6}\s+/.test(lines[i])) i += 1;
        continue;
      }
      out.push(line);
      i++;
    }
    after = out.join('\n');
  }

  // 3. Remove generic placeholder subsections from guide/index.md pages.
  if (/\/guide\/index\.md$/.test(rel)) {
    const subsectionRe = /^###\s+.*(?:Common API Examples|Output Debug Information|用法示例|调试输出|常见 API|API 示例|调试信息|输出调试信息).*$/i;
    const lines = after.split(/\r?\n/);
    const out = [];
    let i = 0;
    while (i < lines.length) {
      const line = lines[i];
      if (subsectionRe.test(line)) {
        i += 1;
        while (i < lines.length && !/^#{1,6}\s+/.test(lines[i])) i += 1;
        continue;
      }
      out.push(line);
      i++;
    }
    after = out.join('\n');
  }

  if (after !== content) {
    writeFileSync(filePath, after, 'utf8');
    changed += 1;
  }
}

console.log(`Fixed placeholder examples in ${changed} files.`);
