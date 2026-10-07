// 分歧裁决：取三页 **File:** 行的【原始字节】，用该页自己声明的路径做 statSync。
// 不解析、不回落 basename、不补根、不剥 bin —— 只判「原样能否打开」。
// 用法: node tools/_arbitrate-file-field.mjs <页路径> ...
import { readFileSync, statSync } from 'node:fs';

const SRC = 'C:/WorkSpace/Bannerlord/bannerlord-1.4.5/Bannerlord.Source';

for (const pg of process.argv.slice(2)) {
  const raw = readFileSync(pg, 'utf8').split(/\r?\n/);
  const idx = raw.findIndex(l => l.indexOf('**File') === 0 || l.indexOf('**File') >= 0 && l.indexOf('File:') > 0 && l.indexOf('**File') === 0);
  const line = idx >= 0 ? raw[idx] : raw.find(l => l.trimStart().startsWith('**File'));
  console.log('── ' + pg);
  if (line === undefined) { console.log('   (no **File line found)'); continue; }
  console.log('   raw bytes  : ' + Buffer.from(line, 'utf8').toString('hex').slice(0, 60) + '…');
  console.log('   raw text   : ' + JSON.stringify(line));
  // take the path verbatim: everything inside backticks, else after the colon
  const bt = line.indexOf('`');
  const decl = bt >= 0 ? line.slice(bt + 1, line.indexOf('`', bt + 1))
                       : line.slice(line.indexOf(':') + 1).trim();
  console.log('   declared   : ' + JSON.stringify(decl));
  const abs = SRC + '/' + decl;
  let ok = false, real = '';
  try { ok = statSync(abs).isFile(); real = abs; } catch (e) { ok = false; }
  console.log('   statSync   : isFile=' + ok + (ok ? '  ⇒ ORIGINAL ALREADY OPENS' : '  ⇒ original does NOT open'));
  console.log('   tried path : ' + abs);
  console.log('');
}
