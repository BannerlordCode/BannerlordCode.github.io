// Snapshot helper. Records, alongside each output, the sha256 of BOTH
//   - the TOOL file  (so "the ruler changed" is distinguishable from "the data changed")
//   - every INPUT page
// A snapshot recording only the input hash cannot tell those apart, and a changed ruler
// looks exactly like tool non-determinism.
// Usage: node tools/_verify/snapshot.mjs <outfile> <tool> <label> -- <page.md> [...]
import fs from 'node:fs';
import crypto from 'node:crypto';
import { execFileSync } from 'node:child_process';

const sha = (p) => crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const a = process.argv.slice(2);
const [out, tool, label] = a;
const pages = a.slice(a.indexOf('--') + 1);

let stdout = '', status = 0;
try {
  stdout = execFileSync('node', [tool, ...pages], { encoding: 'utf8', maxBuffer: 128 * 1024 * 1024 });
} catch (e) {
  stdout = (e.stdout || '') + (e.stderr || '');
  status = e.status === undefined ? -1 : e.status;
}

fs.writeFileSync(out, [
  `# snapshot   : ${label}`,
  `# taken      : ${new Date().toISOString()}`,
  `# tool       : ${tool}`,
  `# tool sha256: ${sha(tool)}`,
  `# pages      : ${pages.length}`,
  ...pages.map((p) => `# page sha256: ${sha(p)}  ${p}`),
  `# exit       : ${status}`,
  `# ---- tool output below ----`, '',
  stdout,
].join('\n'));
console.log(`wrote ${out}`);
console.log(`  tool sha256 : ${sha(tool)}`);
console.log(`  exit        : ${status}`);
