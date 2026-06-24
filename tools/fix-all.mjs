import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join, extname } from 'path';

const apiDir = 'docs/v1.3.15/zh/api';
let stats = { frontmatter: 0, links: 0, fenceFixed: 0, angle: 0, total: 0 };

const knownLangs = new Set(['csharp', 'cs', 'xml', 'json', 'python', 'py', 'js', 'javascript', 'typescript', 'ts', 'java', 'cpp', 'c', 'sql', 'yaml', 'bash', 'shell', 'html', 'css', 'text', 'ini', 'toml', 'powershell', 'ps1', 'go', 'rust', 'php', 'ruby', 'kotlin', 'scala', 'groovy']);

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
  
  // 3. Convert single-backtick code fences to triple-backtick (conservative)
  // AND escape < > outside code blocks
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
    
    // Check for single-backtick code fence (conservative)
    if (trimmed.startsWith('`') && !trimmed.startsWith('``')) {
      const afterBacktick = trimmed.substring(1);
      const hasClosingBacktick = afterBacktick.indexOf('`') !== -1;
      
      if (!hasClosingBacktick) {
        const lang = afterBacktick.trim().toLowerCase();
        // Only convert if it's a bare backtick or a known language
        if (lang === '' || knownLangs.has(lang)) {
          if (inSingleBlock) {
            newLines.push('```');
            inSingleBlock = false;
          } else {
            newLines.push('```' + lang);
            inSingleBlock = true;
          }
          stats.fenceFixed++;
          continue;
        }
      }
    }
    
    // If inside single-backtick block, leave as-is (it's code)
    if (inSingleBlock) {
      newLines.push(line);
      continue;
    }
    
    // Outside any code block - escape < > and | except HTML comments
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
        // Allow --> (HTML comment end)
        if (newLine.endsWith('--')) {
          newLine += '>';
        } else {
          newLine += '&gt;';
          stats.angle++;
        }
      } else if (line[j] === '|') {
        // Escape | to prevent markdown table parsing
        newLine += '\\|';
      } else {
        newLine += line[j];
      }
    }
    newLines.push(newLine);
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
