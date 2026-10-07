// batch-zh-04 (worker-57) 清单校验器 —— 用 node 读，不用 grep/awk
// 理由：本次会话里 grep/awk 对同一文件给出过与 cat/head 不同的答案（文件被并发重写的窗口内），
//       而 §DISPATCH 要求「过滤器必须显式报数」，所以校验与过滤都放在一个进程里做完。
// 用法: node tools/_verify/lead6-w57-batch04.manifest.mjs check <manifest> <superChunk>
//       node tools/_verify/lead6-w57-batch04.manifest.mjs make <superChunk> <out> <excludeName...>
import fs from 'node:fs';
import crypto from 'node:crypto';

const ROOT = 'C:/WorkSpace/Bannerlord/BannerlordCode.github.io';
const [mode, a, b, ...rest] = process.argv.slice(2);
const abs = (p) => (p.startsWith('/') ? p : ROOT + '/' + p);

const read = (p) => {
  const raw = fs.readFileSync(abs(p));
  return { raw, lines: raw.toString('utf8').split(/\r?\n/).filter((s) => s.trim()) };
};

const report = (label, lines, superLines) => {
  const md5 = crypto.createHash('md5').update(lines.join('\n')).digest('hex').slice(0, 10);
  const names = lines.map((l) => l.split('/').pop());
  const missing = lines.filter((l) => !fs.existsSync(abs(l)));
  const outside = superLines ? lines.filter((l) => !superLines.includes(l)) : [];
  const notBucket = lines.filter((l) => !l.startsWith('content/v1.4.5/zh/api/campaign/'));
  console.log(label + ': lines=' + lines.length + ' md5(of joined)=' + md5);
  console.log('  不可解析=' + missing.length + (missing.length ? ' -> ' + missing.join(',') : ''));
  console.log('  不在派单超集内=' + outside.length + (outside.length ? ' -> ' + outside.join(',') : ''));
  console.log('  非 v1.4.5/zh/api/campaign=' + notBucket.length);
  console.log('  重复行=' + (lines.length - new Set(lines).size));
  console.log('  名字: ' + names.join(' '));
  return { missing, outside, notBucket };
};

if (mode === 'make') {
  const superLines = read(a).lines;
  const kept = superLines.filter((l) => !rest.some((x) => l.endsWith(x)));
  const dropped = superLines.filter((l) => rest.some((x) => l.endsWith(x)));
  fs.writeFileSync(abs(b), kept.join('\n') + '\n');
  // §DISPATCH：过滤器必须显式报数，且删除数必须等于预期
  console.log('SUPER=' + superLines.length + '  DROPPED=' + dropped.length
    + '  EXPECTED_DROP=' + rest.length
    + (dropped.length === rest.length ? '  [OK 报数一致]' : '  [!! 报数不一致 ⇒ 判据无效]'));
  dropped.forEach((d) => console.log('  - ' + d));
  const back = read(b).lines;
  const stillThere = dropped.filter((d) => back.includes(d));
  console.log('  复读校验：应删的行仍留在输出里 = ' + stillThere.length
    + (stillThere.length ? ' -> ' + stillThere.join(',') : ' [OK]'));
  report('OUT', back, superLines);
} else {
  report('MANIFEST', read(a).lines, read(b).lines);
}