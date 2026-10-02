// 打印指定 id 在真实语料里的全部出现行（不限长），供逐条人工标注。
//   node tools/_v146_ruler_show.mjs CoverType Bover Item10
// 路径取自 result.json 的 ctx_*.page（相对 content/），不依赖已被删除的临时快照。
import fs from 'node:fs';
import path from 'node:path';

const res = JSON.parse(fs.readFileSync(path.resolve('tools/_v146_ruler_result.json'), 'utf8'));
const where = new Map();
for (const mode of ['M0', 'M1']) {
  const ctx = res[`ctx_${mode}`] || [];
  for (const row of ctx) {
    if (!where.has(row.id)) where.set(row.id, new Set());
    where.get(row.id).add(path.resolve('content', row.page));
  }
}
for (const id of process.argv.slice(2)) {
  const files = [...(where.get(id) || [])];
  console.log('\n######## ' + id + '  (' + files.length + ' files)');
  const re = new RegExp('(?<![A-Za-z0-9_])' + id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '(?![A-Za-z0-9_])');
  for (const f of files) {
    const lines = fs.readFileSync(f, 'utf8').split('\n');
    for (let i = 0; i < lines.length; i++) if (re.test(lines[i])) {
      console.log('  [' + path.relative(path.resolve('content'), f).split(path.sep).join('/') + ':' + (i + 1) + '] ' + lines[i].trim());
    }
  }
}
