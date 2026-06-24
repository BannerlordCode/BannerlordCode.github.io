import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join, extname } from 'path';

const apiDir = 'docs/v1.3.15/zh/api';
let stats = { frontmatter: 0, links: 0, versions: 0, angle: 0, total: 0 };

const htmlTags = /^(br|img|hr|p|div|span|a|b|i|em|strong|ul|ol|li|table|tr|td|th|h[1-6]|blockquote|code|pre|sup|sub|details|summary|mark|small|figure|figcaption|video|source|col|colgroup|thead|tbody|tfoot|dl|dt|dd|abbr|cite|q|kbd|samp|var|wbr|area|map|object|embed|param|track|audio|canvas|svg|use|path|rect|circle|ellipse|line|polyline|polygon|stop|g|defs|symbol|use|text|tspan|linearGradient|radialGradient|filter|feGaussianBlur|feOffset|feMerge|mask|clipPath|pattern|marker|title|desc|metadata|rdf|cc|attribution)\b/i;

function processFile(filePath) {
  let content = readFileSync(filePath, 'utf-8');
  const original = content;
  
  // 1. Fix frontmatter: description line ending with --- (not on its own line)
  content = content.replace(/^(description:.*?)---\s*\n/gm, (match, p1) => {
    stats.frontmatter++;
    return p1 + '\n---\n';
  });
  
  // 2. Fix catalog links
  const beforeLinks = content;
  content = content.replace(/catalog-mission-ext/g, 'catalog-engine');
  content = content.replace(/catalog-campaign-ext/g, 'catalog-campaign');
  content = content.replace(/catalog-mission\b/g, 'catalog-engine');
  if (content !== beforeLinks) stats.links++;
  
  // 3. Escape < outside code blocks to prevent HTML parsing errors
  const lines = content.split('\n');
  const newLines = [];
  let inCodeBlock = false;
  let inFrontmatter = false;
  let frontmatterEnd = false;
  
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    const trimmed = line.trim();
    
    // Track frontmatter (first --- at start, second --- ends it)
    if (i === 0 && trimmed === '---') {
      inFrontmatter = true;
      newLines.push(line);
      continue;
    }
    if (inFrontmatter && !frontmatterEnd) {
      if (trimmed === '---') {
        frontmatterEnd = true;
        inFrontmatter = false;
      }
      newLines.push(line);
      continue;
    }
    
    // Check for triple backtick fence
    if (trimmed.startsWith('```')) {
      inCodeBlock = !inCodeBlock;
      newLines.push(line);
      continue;
    }
    
    if (inCodeBlock) {
      newLines.push(line);
    } else {
      // Outside code block and frontmatter - escape < and > except HTML comments
      let newLine = '';
      for (let j = 0; j < line.length; j++) {
        if (line[j] === '<') {
          const rest = line.substring(j + 1);
          // Allow HTML comments <!--
          if (rest.startsWith('!--')) {
            newLine += '<';
          } else {
            // Escape everything else
            newLine += '&lt;';
            stats.angle++;
          }
        } else if (line[j] === '>') {
          // Allow --> (HTML comment end)
          const before = newLine.endsWith('--');
          if (before) {
            newLine += '>';
          } else {
            newLine += '&gt;';
            stats.angle++;
          }
        } else {
          newLine += line[j];
        }
      }
      newLines.push(newLine);
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
