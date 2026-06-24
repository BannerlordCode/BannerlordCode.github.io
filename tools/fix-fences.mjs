import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join, extname } from 'path';

const apiDir = 'docs/v1.3.15/zh/api';
let stats = { frontmatter: 0, links: 0, versions: 0, fenceFixed: 0, total: 0 };

function processFile(filePath) {
  let content = readFileSync(filePath, 'utf-8');
  const original = content;
  
  // 1. Fix frontmatter: description line ending with ---
  content = content.replace(/^(description:.*?)---\s*\n/gm, (match, p1) => {
    stats.frontmatter++;
    return p1 + '\n---\n';
  });
  
  // 2. Fix catalog links
  content = content.replace(/catalog-mission-ext/g, 'catalog-engine');
  content = content.replace(/catalog-campaign-ext/g, 'catalog-campaign');
  content = content.replace(/catalog-mission\b/g, 'catalog-engine');
  
  // 3. Convert single-backtick code fences to triple-backtick
  // Pattern: line that is exactly ` or `lang (single backtick at start, nothing else meaningful)
  const lines = content.split('\n');
  const newLines = [];
  let inTripleBlock = false;
  let inSingleBlock = false;
  
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    const trimmed = line.trim();
    
    // Track triple-backtick blocks
    if (trimmed.startsWith('```')) {
      inTripleBlock = !inTripleBlock;
      newLines.push(line);
      continue;
    }
    
    // If inside triple-backtick block, leave as-is
    if (inTripleBlock) {
      newLines.push(line);
      continue;
    }
    
    // Check for single-backtick code fence
    // Pattern: `lang or just ` (NOT `text` which is inline code)
    // The key: if the line has a CLOSING backtick, it's inline code, not a fence
    if (trimmed.startsWith('`') && !trimmed.startsWith('``')) {
      // Check if there's a second backtick (which would make it inline code)
      const afterFirstBacktick = trimmed.substring(1);
      const hasClosingBacktick = afterFirstBacktick.indexOf('`') !== -1;
      
      if (!hasClosingBacktick) {
        // No closing backtick → this is a code fence
        const lang = afterFirstBacktick.trim();
        if (inSingleBlock) {
          // Closing fence
          newLines.push('```');
          inSingleBlock = false;
        } else {
          // Opening fence
          newLines.push('```' + lang);
          inSingleBlock = true;
        }
        stats.fenceFixed++;
        continue;
      }
    }
    
    newLines.push(line);
  }
  content = newLines.join('\n');
  
  // 4. Remove /versions/ links
  content = content.replace(/^.*\/versions\/.*\n/gm, '');
  
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
