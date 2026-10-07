// 独立复核 viewmodel 的 File: 路径：严格按路径判定，【不回落到 basename】。
// 用法: node tools/_check-exact-paths.mjs <桶名>
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const SRC = 'C:/WorkSpace/Bannerlord/bannerlord-1.4.5/Bannerlord.Source';
const BS = String.fromCharCode(92);
const bucket = process.argv[2] || 'viewmodel';
const dir = 'content/v1.4.5/zh/api/' + bucket;

const openAt = p => { try { return statSync(p).isFile(); } catch { return false; } };

let asIs = 0, needsBin = 0, stillBroken = 0, noKey = 0, index = 0;
const broken = [];
const files = readdirSync(dir).filter(f => f.endsWith('.md'));
for (const f of files) {
  if (f === '_index.md') { index++; continue; }
  const t = readFileSync(join(dir, f), 'utf8');
  const m = /\*\*\s*(?:File|Source|源文件路径|源文件)\s*[：:]\s*`?([^`\r\n]+?)`?\s*$/m.exec(t);
  if (!m) { noKey++; continue; }
  const seg = m[1].trim().split(BS).join('/').split('/');
  if (openAt(SRC + BS + seg.join(BS))) { asIs++; continue; }
  if (openAt(SRC + BS + 'bin' + BS + seg.join(BS))) { needsBin++; continue; }
  stillBroken++;
  if (broken.length < 8) broken.push(f + '  [' + m[1].trim() + ']');
}
console.log('严格路径判定（无 basename 回落）· ' + bucket);
console.log('  原样可打开        = ' + asIs);
console.log('  只差 bin/ 根       = ' + needsBin + '   ← 根修法可修');
console.log('  仍打不开          = ' + stillBroken + '   ← 需换完整路径或人工');
console.log('  无源路径字段      = ' + noKey);
console.log('  _index.md（不参与）= ' + index);
const tot = asIs + needsBin + stillBroken + noKey + index;
console.log('  相加 = ' + tot + ' / 桶内页数 ' + files.length + (tot === files.length ? '  ✓ 对齐' : '  ✗ 差 ' + (files.length - tot)));
if (broken.length) { console.log('\n仍打不开的样例:'); broken.forEach(x => console.log('   ' + x)); }
