// Fix link depth in scenario-acceptance-E.md (both versions): in Zola URL mode
// the page lives at architecture/scenario-acceptance-E/, so every relative link
// needs one extra "../". ](./X -> ](../X/  and ](../api/X -> ](../../api/X.
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
const targets = [
  'content/v1.3.15/zh/architecture/scenario-acceptance-E.md',
  'content/v1.4.5/zh/architecture/scenario-acceptance-E.md',
];
for (const f of targets) {
  if (!existsSync(f)) { console.log('SKIP missing', f); continue; }
  let t = readFileSync(f, 'utf8');
  const before = (t.match(/\]\((\.\.?\/)[^)]*\)/g) || []).length;
  t = t.replace(/\]\(\.\//g, '](../');      // ./X  -> ../X
  t = t.replace(/\]\(\.\.\/api\//g, '](../../api/'); // ../api/X -> ../../api/X
  const after = (t.match(/\]\((\.\.?\/)[^)]*\)/g) || []).length;
  writeFileSync(f, t, 'utf8');
  console.log(f, 'links before=', before, 'after=', after);
}
