import { readFileSync } from 'fs';
const content = readFileSync('docs/v1.3.15/zh/api/campaign-ext/EventManager.md', 'utf-8');
const lines = content.split('\n');
let inCode = false;
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (line.trim().startsWith('```')) inCode = !inCode;
  if (!inCode) {
    // Check for unescaped < (not &lt; not <!--)
    for (let j = 0; j < line.length; j++) {
      if (line[j] === '<' && line.substring(j+1, j+4) !== 'lt;' && line.substring(j+1, j+4) !== '!--') {
        console.log(`Line ${i+1} col ${j+1} unescaped <: ${line.substring(0, Math.min(120, line.length))}`);
      }
      if (line[j] === '>' && line.substring(j-2, j) !== '--' && line.substring(j-3, j) !== 'gt;') {
        console.log(`Line ${i+1} col ${j+1} unescaped >: ${line.substring(0, Math.min(120, line.length))}`);
      }
    }
  }
}
console.log('Done checking');
