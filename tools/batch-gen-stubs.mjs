/* Batch-run gen-class-ref.mjs for all undocumented types.
   Reads names from a file, processes in chunks to avoid CLI length limits.
   Usage: node tools/batch-gen-stubs.mjs <names_file> [batch_size]
   Run from repo root.
*/
import { readFileSync } from 'fs';
import { execSync } from 'child_process';

const namesFile = process.argv[2] || 'undocumented_types.txt';
const batchSize = parseInt(process.argv[3] || '50', 10);

const names = readFileSync(namesFile, 'utf8').split('\n').map(s => s.trim()).filter(Boolean);
console.log('Total names to process: ' + names.length);
console.log('Batch size: ' + batchSize);

let ok = 0;
let skip = 0;
let fail = 0;

for (let i = 0; i < names.length; i += batchSize) {
  const batch = names.slice(i, i + batchSize);
  const cmd = 'node BannerlordCode.github.io/tools/gen-class-ref.mjs ' + batch.map(n => '"' + n + '"').join(' ');
  try {
    const out = execSync(cmd, { cwd: '.', encoding: 'utf8', stdio: ['pipe', 'pipe', 'pipe'] });
    const lines = out.split('\n').filter(Boolean);
    for (const line of lines) {
      if (line.startsWith('wrote ')) ok++;
      else if (line.startsWith('SKIP ')) skip++;
    }
    console.log('Batch ' + Math.floor(i / batchSize + 1) + '/' + Math.ceil(names.length / batchSize) + ': ok=' + ok + ' skip=' + skip + ' fail=' + fail);
  } catch (e) {
    fail += batch.length;
    console.error('Batch ' + Math.floor(i / batchSize + 1) + ' FAILED: ' + (e.message || '').slice(0, 200));
  }
}

console.log('\n=== DONE ===');
console.log('Generated: ' + ok);
console.log('Skipped (not found in 1.3.15): ' + skip);
console.log('Failed: ' + fail);
console.log('Total processed: ' + names.length);
