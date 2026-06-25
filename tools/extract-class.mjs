import { readFileSync, existsSync, writeFileSync } from 'fs';
import { basename } from 'path';

const files = process.argv.slice(2);
const outPath = process.env.OUT || null;

const methodRe = /^(?:\s*)(?:(?:public|protected|internal)\s+)+((?:static\s+)?(?:virtual\s+|override\s+)?(?:unsafe\s+)?)([\w<>,\[\]\?\.\s]+?)\s+([\w_]+)\s*\(([^)]*)\)\s*$/gm;
const propRe = /^(?:\s*)(?:(?:public|protected|internal)\s+)+((?:static\s+)?(?:virtual\s+|override\s+)?)([\w<>,\[\]\?\.]+\s+)?([\w_]+)\s*\{\s*(?:get|set)/gm;
const classRe = /(?:\s*)(?:(?:public|internal|abstract|sealed)\s+)+class\s+([\w_]+)(?:\s*:\s*([\w_,\s<>\.]+))?\s*\{/m;
const nsRe = /^namespace\s+([\w.]+)/m;

const result = [];

for (const file of files) {
  if (!existsSync(file)) {
    result.push({ file, missing: true });
    continue;
  }
  const text = readFileSync(file, 'utf8');
  const clsMatch = classRe.exec(text);
  const className = clsMatch ? clsMatch[1] : basename(file, '.cs');
  const base = clsMatch && clsMatch[2] ? clsMatch[2].split(',')[0].trim() : '';
  const nsMatch = text.match(nsRe);
  const ns = nsMatch ? nsMatch[1] : '';

  const methods = [];
  for (const m of text.matchAll(methodRe)) {
    if (m[0].trim().startsWith('//')) continue;
    methods.push({
      modifiers: m[1].trim(),
      returnType: m[2].trim(),
      name: m[3],
      parameters: m[4].trim(),
    });
  }

  const properties = [];
  for (const p of text.matchAll(propRe)) {
    if (p[0].trim().startsWith('//')) continue;
    properties.push({
      modifiers: p[1].trim(),
      typeName: (p[2] || '').trim(),
      name: p[3],
    });
  }

  result.push({ file, className, namespace: ns, base, methods, properties });
}

if (outPath) {
  writeFileSync(outPath, JSON.stringify(result, null, 2));
  console.log(`Wrote ${result.length} classes to ${outPath}`);
} else {
  console.log(JSON.stringify(result, null, 2));
}
