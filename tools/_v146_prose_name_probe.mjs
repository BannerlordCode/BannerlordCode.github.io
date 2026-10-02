// 给 fixture 生成器用的小探针：从 bannerlord-1.4.6 全树导出词表 / 真实类型名。
//   node tools/_v146_prose_name_probe.mjs          -> JSON：所有极大标识符 token
//   node tools/_v146_prose_name_probe.mjs --real   -> JSON：真实「声明出来的」类型/枚举名
import fs from 'node:fs';
import path from 'node:path';

const SRC = path.resolve('../bannerlord-1.4.6');
const files = [];
(function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p);
    else if (e.name.endsWith('.cs')) files.push(p);
  }
})(SRC);
const blob = files.map((f) => fs.readFileSync(f, 'utf8')).join('\n');
const TOKENS = new Set();
for (const m of blob.matchAll(/(?<![A-Za-z0-9_])[A-Za-z_][A-Za-z0-9_]*/g)) TOKENS.add(m[0]);

if (process.argv.includes('--real')) {
  // 只要真正声明出来的类型名（class/struct/enum/interface/record），不要字符串字面量里的垃圾
  const declared = new Set();
  for (const m of blob.matchAll(/\b(?:class|struct|enum|interface|record)\s+([A-Za-z_][A-Za-z0-9_]*)/g)) declared.add(m[1]);
  const real = [...declared].filter((t) => /^[A-Z][a-z]/.test(t) && t.length >= 7).sort();
  process.stdout.write(JSON.stringify(real));
} else {
  process.stdout.write(JSON.stringify([...TOKENS]));
}
