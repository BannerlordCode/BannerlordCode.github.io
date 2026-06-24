import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join, extname } from 'path';

const apiDir = 'docs/v1.3.15/zh/api';
let stats = { frontmatter: 0, fence: 0, links: 0, versions: 0, total: 0 };

function processFile(filePath) {
  let content = readFileSync(filePath, 'utf-8');
  const original = content;
  
  // 1. Fix frontmatter: description line ending with --- (not on its own line)
  content = content.replace(/^(description:.*?)---\s*\n/gm, (match, p1) => {
    stats.frontmatter++;
    return p1 + '\n---\n';
  });
  
  // 2. Fix catalog links
  content = content.replace(/catalog-mission-ext/g, 'catalog-engine');
  content = content.replace(/catalog-campaign-ext/g, 'catalog-campaign');
  content = content.replace(/catalog-mission\b/g, 'catalog-engine');
  
  // 3. Fix code fences: single backtick used as code fence → triple backticks
  const lines = content.split('\n');
  const newLines = [];
  let inCodeBlock = false;
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    const trimmed = line.trim();
    
    // Check if this line is a single-backtick code fence (not double or triple)
    if (/^`[a-z]*\s*$/.test(trimmed) && trimmed.startsWith('`') && !trimmed.startsWith('``')) {
      const lang = trimmed.substring(1).trim();
      if (inCodeBlock) {
        newLines.push('```');
        inCodeBlock = false;
      } else {
        newLines.push('```' + lang);
        inCodeBlock = true;
      }
      stats.fence++;
    } else {
      newLines.push(line);
      // Track triple backtick code blocks too
      if (trimmed.startsWith('```')) {
        inCodeBlock = !inCodeBlock;
      }
    }
  }
  content = newLines.join('\n');
  
  // 4. Remove /versions/ links from API docs
  content = content.replace(/^.*\/versions\/.*\n/gm, (match) => {
    stats.versions++;
    return '';
  });
  
  // 5. Clean up excessive blank lines
  content = content.replace(/\n{4,}/g, '\n\n\n');
  
  if (content !== original) {
    writeFileSync(filePath, content, 'utf-8');
    stats.total++;
  }
}

function walkDir(dir) {
  const entries = readdirSync(dir);
  for (const entry of entries) {
    const fullPath = join(dir, entry);
    const stat = statSync(fullPath);
    if (stat.isDirectory()) {
      walkDir(fullPath);
    } else if (extname(fullPath) === '.md') {
      processFile(fullPath);
    }
  }
}

walkDir(apiDir);
console.log('Fix complete:', stats);
