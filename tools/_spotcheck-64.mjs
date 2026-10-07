// 独立抽核 64 页修改：按 boss 的选法抽「最容易出错的输入形状」，不抽改得最干净的。
// 每页报两列（§6x）：改前/改后 × {能否打开, 该文件是否声明本页类型}
import { execSync } from 'node:child_process';
import { readFileSync, statSync, readdirSync } from 'node:fs';

const SRC = 'C:/WorkSpace/Bannerlord/bannerlord-1.4.5/Bannerlord.Source';
const REPO = 'C:/WorkSpace/Bannerlord/BannerlordCode.github.io';
const dir = REPO + '/content/v1.4.5/zh/api/viewmodel';

const KEY = /\*\*\s*File\s*[：:]\s*\**\s*`?([^`\r\n]+?)`?\s*$/m;
const fieldOf = t => { const m = t.match(KEY); return m ? m[1].trim() : null; };
const opens = d => { try { return statSync(SRC + '/' + d).isFile(); } catch { return false; } };
const declares = (d, type) => {
  try { return readFileSync(SRC + '/' + d, 'utf8').split(/\r?\n/).some(l => l.includes(type)); }
  catch { return false; }
};

// git diff gives before/after per page
const diff = execSync('git diff --unified=0 -- content/v1.4.5/zh/api/viewmodel', { cwd: REPO, encoding: 'utf8', maxBuffer: 1 << 26 });
const pages = [...new Set(diff.split(/\r?\n/).filter(l => l.startsWith('+++ b/')).map(l => l.slice(6).trim()))];
const before = new Map();
for (const l of diff.split(/\r?\n/)) {
  const m = /^\-\-\- a\/(.+)$/.exec(l); if (m) before.set(m[1], null);
  const h = /^-(?!\-\-)\s*\*\*File/.exec(l);
  if (h && before.has(diff.split(/\r?\n/).find(x => x.startsWith('+++ b/') && false))) { }
}
// simpler: reconstruct before by reverse-substituting the after-value
const rows = [];
for (const rel of pages) {
  const abs = REPO + '/' + rel;
  const after = fieldOf(readFileSync(abs, 'utf8'));
  if (!after) continue;
  // get the removed line for this file from diff
  const seg = diff.split(/^diff --git /m).find(s => s.includes(' b/' + rel.split('/').pop()));
  let prev = null;
  if (seg) { const m = seg.match(/^-\s*\*\*File[^\n]*$/m); if (m) prev = m[0]; }
  rows.push({ page: rel.split('/').pop(), type: rel.split('/').pop().replace(/\.md$/, ''), after, prevLine: prev });
}
// rank by "most error-prone input shape": longer path, shared after-value, prev line present
const byVal = new Map();
for (const r of rows) byVal.set(r.after, (byVal.get(r.after) || 0) + 1);
rows.sort((a, b) => (b.after.length - a.after.length) || ((byVal.get(b.after) > 1) - (byVal.get(a.after) > 1)) || (b.prevLine ? 1 : 0) - (a.prevLine ? 1 : 0));
const picked = rows.slice(0, 5);

console.log('viewmodel 修改页数 = ' + rows.length + '（git diff）');
console.log('抽核 5 页：按路径最长 / 共享 File: 值 / 有改前行 排序，不抽最干净的\n');
for (const r of picked) {
  const prevPath = r.prevLine ? (r.prevLine.match(/`([^`]+)`/) || [])[1] : null;
  console.log('── ' + r.page);
  console.log('   改前 : ' + (prevPath ? prevPath.slice(0, 70) : '(未取到改前值)'));
  if (prevPath) console.log('          能打开=' + opens(prevPath) + '  声明本页类型=' + declares(prevPath, r.type));
  console.log('   改后 : ' + r.after.slice(0, 70));
  console.log('          能打开=' + opens(r.after) + '  声明本页类型=' + declares(r.after, r.type));
  console.log('');
}
