// Fix broken relative links in v1.3.0 guide files.
// From v1.3.0/{zh,en}/guide/*.md:
//   cross-version  ../../v1.3.15/  -> ../../../v1.3.15/   (guide is 3 levels deep)
//   same-version   ../../api/gui/  -> ../api/             (v1.3.0 has no gui api)
//   same-version   ../../api/      -> ../api/
//   same-version   ../../xml-reference/ -> ../xml-reference/
//   same-version   ../../architecture/  -> ../architecture/
import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join } from 'path';

const root = 'C:/WorkSpace/Bannerlord/BannerlordCode.github.io/docs';
const dirs = ['v1.3.0/zh/guide', 'v1.3.0/en/guide'];
let total = 0;
for (const d of dirs) {
  const dir = join(root, d);
  for (const f of readdirSync(dir).filter(x => x.endsWith('.md'))) {
    const p = join(dir, f);
    let t = readFileSync(p, 'utf8');
    const before = t;
    // order matters: gui first, then bare api, then cross-version, then others
    t = t.replace(/\]\(\.\.\/\.\.\/api\/gui\/\)/g, '](../api/)');
    t = t.replace(/\]\(\.\.\/\.\.\/v1\.3\.15\//g, '](../../../v1.3.15/');
    t = t.replace(/\]\(\.\.\/\.\.\/api\//g, '](../api/');
    t = t.replace(/\]\(\.\.\/\.\.\/xml-reference\//g, '](../xml-reference/');
    t = t.replace(/\]\(\.\.\/\.\.\/architecture\//g, '](../architecture/');
    if (t !== before) {
      writeFileSync(p, t);
      const changes = (before.match(/\]\(\.\.\/\.\.\//g) || []).length - (t.match(/\]\(\.\.\/\.\.\//g) || []).length;
      total += changes;
      console.log(`fixed ${d}/${f}  (-${changes} bad ../..)`);
    }
  }
}
console.log('TOTAL bad ../../ removed:', total);
