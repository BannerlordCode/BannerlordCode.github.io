import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const dir = 'content/v1.3.15/zh/api/save-system';
// Leaf pages only: their clean-URL route is section/leaf/, so:
//   sibling/parent need ../   (NOT ./)
//   architecture (at zh/architecture) needs ../../../  (NOT ../../, which only works for _index)
// _index.md is excluded because its route IS the section dir, where ./ and ../../ are correct.
const files = readdirSync(dir).filter((f) => f.endsWith('.md') && f !== '_index.md');
let changed = 0;
for (const f of files) {
  const p = join(dir, f);
  let t = readFileSync(p, 'utf8');
  const orig = t;
  // 1) missing-page target -> repoint to a real related page
  t = t.split('](./SaveableStructAttribute)').join('](../SaveableBasicTypeDefiner)');
  // 2) architecture depth for leaf routes: ../../ -> ../../../ (literal, no regex escaping pitfalls)
  t = t.split('](../../architecture/').join('](../../../architecture/');
  // 3) leaf sibling/parent: ](./ -> ](../
  t = t.split('](./').join('](../');
  if (t !== orig) {
    writeFileSync(p, t);
    changed++;
    console.log('FIXED', f);
  }
}
console.log('changed=' + changed + ' of ' + files.length);
