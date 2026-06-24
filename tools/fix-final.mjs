import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join, extname } from 'path';

const apiDir = 'docs/v1.3.15/zh/api';
let stats = { frontmatter: 0, links: 0, angle: 0, pipe: 0, total: 0 };

function processFile(filePath) {
  let content = readFileSync(filePath, 'utf-8');
  const original = content;
  
  // 1. Fix frontmatter
  content = content.replace(/^(description:.*?)---\s*\n/gm, (m, p1) => {
    stats.frontmatter++;
    return p1 + '\n---\n';
  });
  
  // 2. Fix catalog links
  content = content.replace(/catalog-mission-ext/g, 'catalog-engine');
  content = content.replace(/catalog-campaign-ext/g, 'catalog-campaign');
  content = content.replace(/catalog-mission\b/g, 'catalog-engine');
  
  // 3. Escape < > | outside triple-backtick code blocks
  const lines = content.split('\n');
  const newLines = [];
  let inCodeBlock = false;
  let inFrontmatter = false;
  
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    const trimmed = line.trim();
    
    // Track frontmatter
    if (i === 0 && trimmed === '---') {
      inFrontmatter = true;
      newLines.push(line);
      continue;
    }
    if (inFrontmatter) {
      if (trimmed === '---') {
        inFrontmatter = false;
      }
      newLines.push(line);
      continue;
    }
    
    // Track triple-backtick code blocks
    if (trimmed.startsWith('```')) {
      inCodeBlock = !inCodeBlock;
      newLines.push(line);
      continue;
    }
    
    if (inCodeBlock) {
      newLines.push(line);
    } else {
      // Outside code block - escape < > and |
      let newLine = '';
      for (let j = 0; j < line.length; j++) {
        if (line[j] === '<') {
          const rest = line.substring(j + 1);
          if (rest.startsWith('!--')) {
            newLine += '<';
          } else {
            newLine += '&lt;';
            stats.angle++;
          }
        } else if (line[j] === '>') {
          if (newLine.endsWith('--')) {
            newLine += '>';
          } else {
            newLine += '&gt;';
            stats.angle++;
          }
        } else if (line[j] === '|') {
          newLine += '\\|';
          stats.pipe++;
        } else {
          newLine += line[j];
        }
      }
      newLines.push(newLine);
    }
  }
  content = newLines.join('\n');
  
  // 4. Clean up excessive blank lines
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
