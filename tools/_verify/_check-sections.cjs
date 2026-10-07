const fs = require('fs');
const path = require('path');

const ROOT = 'C:\\WorkSpace\\Bannerlord\\BannerlordCode.github.io';
const API_DIR = path.join(ROOT, 'content', 'v1.3.0', 'zh', 'api');
const OUT_TSV = path.join(ROOT, 'tools', '_verify', 'queue-130-zh-sections.tsv');
const OUT_JSON = path.join(ROOT, 'tools', '_verify', 'queue-130-zh-sections-summary.json');

// Section definitions: [label, regex patterns for ## or ### headings, case-insensitive]
const SECTIONS = [
  {
    label: '概述',
    patterns: [/^#{2,3}\s+概述(?=\s|$)/im, /^#{2,3}\s+Overview(?=\s|$)/im]
  },
  {
    label: '心智模型',
    patterns: [/^#{2,3}\s+心智模型(?=\s|$)/im, /^#{2,3}\s+Mental\s*Model(?=\s|$)/im]
  },
  {
    label: '怎么用',
    patterns: [
      /^#{2,3}\s+怎么用(?=\s|$)/im,
      /^#{2,3}\s+如何使用(?=\s|$)/im,
      /^#{2,3}\s+使用示例(?=\s|$)/im,
      /^#{2,3}\s+How\s+to\s+use(?=\s|$)/im,
      /^#{2,3}\s+Usage(?=\s|$)/im
    ]
  },
  {
    label: '关键成员',
    patterns: [
      /^#{2,3}\s+关键成员(?=\s|$)/im,
      /^#{2,3}\s+主要方法(?=\s|$)/im,
      /^#{2,3}\s+主要属性(?=\s|$)/im,
      /^#{2,3}\s+成员说明(?=\s|$)/im,
      /^#{2,3}\s+Key\s+members(?=\s|$)/im
    ]
  },
  {
    label: '真实示例',
    patterns: [
      /^#{2,3}\s+真实示例(?=\s|$)/im,
      /^#{2,3}\s+Real\s+example(?=\s|$)/im,
      /^#{2,3}\s+Example(?=\s|$)/im,
      /^#{2,3}\s+示例(?=\s|$)/im
    ]
  },
  {
    label: '参见',
    patterns: [
      /^#{2,3}\s+参见(?=\s|$)/im,
      /^#{2,3}\s+依赖关系(?=\s|$)/im,
      /^#{2,3}\s+依赖图(?=\s|$)/im,
      /^#{2,3}\s+See\s+also(?=\s|$)/im,
      /^#{2,3}\s+Dependencies(?=\s|$)/im
    ]
  }
];

function findMdFiles(dir) {
  const results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...findMdFiles(fullPath));
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      results.push(fullPath);
    }
  }
  return results;
}

function checkSections(content) {
  const results = [];
  for (const section of SECTIONS) {
    let found = false;
    for (const pattern of section.patterns) {
      if (pattern.test(content)) {
        found = true;
        break;
      }
    }
    results.push(found ? 1 : 0);
  }
  return results;
}

// Main
console.log('Scanning .md files...');
const files = findMdFiles(API_DIR);
console.log(`Found ${files.length} .md files`);

const rows = [];
const distribution = {}; // n/6 -> count
let fullCount = 0;

for (const file of files) {
  const relPath = path.relative(ROOT, file).replace(/\\/g, '/');
  const content = fs.readFileSync(file, 'utf-8');
  const sectionResults = checkSections(content);
  const presentCount = sectionResults.reduce((a, b) => a + b, 0);
  const completeness = `${presentCount}/6`;
  
  rows.push({
    path: relPath,
    sections: sectionResults,
    completeness
  });
  
  if (presentCount === 6) {
    fullCount++;
  }
  
  if (!distribution[completeness]) {
    distribution[completeness] = 0;
  }
  distribution[completeness]++;
}

// Sort rows by path for consistent output
rows.sort((a, b) => a.path.localeCompare(b.path));

// Write TSV
const now = new Date().toISOString();
const header = `# N = ${rows.length} · sampled_at = ${now} · scope = content/v1.3.0/zh/api/**/*.md`;
const tsvHeader = 'path\t概述\t心智模型\t怎么用\t关键成员\t真实示例\t参见\t齐全度';
const tsvLines = [header, tsvHeader];
for (const row of rows) {
  tsvLines.push(`${row.path}\t${row.sections.join('\t')}\t${row.completeness}`);
}
fs.writeFileSync(OUT_TSV, tsvLines.join('\n') + '\n', 'utf-8');
console.log(`TSV written: ${OUT_TSV}`);

// Write summary JSON
const summary = {
  total_pages: rows.length,
  full_6_of_6: fullCount,
  distribution: distribution,
  incomplete_pages: rows.length - fullCount,
  zero_of_6: distribution['0/6'] || 0,
  sampled_at: now,
  scope: 'content/v1.3.0/zh/api/**/*.md'
};
fs.writeFileSync(OUT_JSON, JSON.stringify(summary, null, 2) + '\n', 'utf-8');
console.log(`JSON written: ${OUT_JSON}`);

console.log('\n--- Summary ---');
console.log(`Total pages: ${summary.total_pages}`);
console.log(`Full (6/6): ${summary.full_6_of_6}`);
console.log(`Incomplete (<6): ${summary.incomplete_pages}`);
console.log(`Zero (0/6): ${summary.zero_of_6}`);
console.log('Distribution:', JSON.stringify(distribution, null, 2));
