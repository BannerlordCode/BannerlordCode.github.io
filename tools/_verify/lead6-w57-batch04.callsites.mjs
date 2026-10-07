// batch-zh-04 (worker-57) 取材面板：类型声明行 + 真实调用点
// 用法: node tools/_verify/lead6-w57-batch04.callsites.mjs <page> [<page> ...]
import fs from 'node:fs';

const ROOT = 'C:/WorkSpace/Bannerlord/BannerlordCode.github.io';
const SRC = 'C:/WorkSpace/Bannerlord/bannerlord-1.4.5/Bannerlord.Source/bin';

for (const p of process.argv.slice(2)) {
  const t = fs.readFileSync(ROOT + '/' + p, 'utf8').replace(/\r\n/g, '\n');
  const title = ((t.match(/^#\s+(.+?)\s*$/m) || [])[1] || '').replace(/\\/g, '').split('<')[0].trim();
  const ns = ((t.match(/\*\*Namespace:\*\*\s*`([^`]+)/) || [])[1] || '').trim();
  const file = ((t.match(/\*\*File:\*\*\s*`([^`]+)/) || [])[1] || '').replace(/（.*/, '').trim();
  const h2 = [...t.matchAll(/^##\s+(.+?)\s*$/gm)].map((m) => m[1]);

  // 定位声明文件：优先 <Asm>/<Type>.cs，其次页面自己的 File
  const asm = ns.split('.')[0];
  const stack = [SRC], hits = [];
  const want = title + '.cs';
  while (stack.length && hits.length < 4) {
    const d = stack.pop();
    let ents;
    try { ents = fs.readdirSync(d, { withFileTypes: true }); } catch { continue; }
    for (const e of ents) {
      const fp = d + '/' + e.name;
      if (e.isDirectory()) { if (!['obj', '.git', 'node_modules'].includes(e.name)) stack.push(fp); }
      else if (e.name === want) hits.push(fp);
    }
  }
  let decl = hits.find((c) => c.includes('/' + asm + '/')) || hits[0] || null;
  if (!decl && file) { const c = SRC + '/' + file; if (fs.existsSync(c)) decl = c; }
  if (!decl) { console.log('=== ' + p + '\n  NO DECL FILE  ns=' + ns + ' file=' + file); continue; }

  const rel = decl.slice(SRC.length + 1).replace(/\\/g, '/');
  const lines = fs.readFileSync(decl, 'utf8').replace(/\r/g, '').split('\n');
  let dl = -1, dt = '';
  for (let i = 0; i < lines.length; i++) {
    const L = lines[i], at = L.indexOf(title);
    if (at <= 0) continue;
    if (!['class ', 'struct ', 'enum ', 'interface '].some((k) => L.slice(0, at).includes(k))) continue;
    if (/[A-Za-z0-9_]/.test(L[at - 1])) continue;
    dl = i + 1; dt = L.trim(); break;
  }

  // 真实调用点：跨文件出现该类型名（词边界，排除注释行）
  const NAME = new RegExp('\\b' + title + '\\b');
  const st2 = [SRC], sites = [];
  while (st2.length && sites.length < 120) {
    const d = st2.pop();
    let ents;
    try { ents = fs.readdirSync(d, { withFileTypes: true }); } catch { continue; }
    for (const e of ents) {
      const fp = d + '/' + e.name;
      if (e.isDirectory()) { if (!['obj', '.git', 'node_modules'].includes(e.name)) st2.push(fp); continue; }
      if (!e.name.endsWith('.cs') || fp === decl) continue;
      const ls = fs.readFileSync(fp, 'utf8').replace(/\r/g, '').split('\n');
      for (let i = 0; i < ls.length; i++) {
        const L = ls[i];
        if (NAME.test(L) && !L.trim().startsWith('//') && !L.trim().startsWith('*')) {
          sites.push({ f: fp.slice(SRC.length + 1).replace(/\\/g, '/'), n: i + 1, l: L.trim() });
        }
      }
    }
  }
  // 按文件聚类，每个文件取首条，最多 8 个文件
  const byFile = new Map();
  for (const s of sites) {
    if (!byFile.has(s.f)) byFile.set(s.f, []);
    const a = byFile.get(s.f); if (a.length < 2) a.push(s);
  }
  console.log('=== ' + p);
  console.log('  ns=' + ns + '  decl=' + rel + ':' + dl + '  ' + dt);
  console.log('  H2: ' + h2.join(' > '));
  console.log('  CALLSITES files=' + byFile.size + ' (showing up to 8)');
  let k = 0;
  for (const [f, arr] of byFile) {
    if (k++ >= 8) break;
    for (const s of arr) console.log('    ' + f + ':' + s.n + '  ' + s.l.slice(0, 130));
  }
}