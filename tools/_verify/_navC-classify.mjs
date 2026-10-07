// nav-C 分类器：对 _navC-scan.mjs 的命中逐条按 §4.1 推导式判定。
// 判据（叶子页 route = 目录深度 + 1）：
//   同桶兄弟   → ../X        (L1b)
//   跨桶       → ../../<桶>/X (L4b)
//   跨语言     → ../../../<lang>/api/... (L7)
//   回本桶索引 → ../         (L2b)
// 非导航陈述（源码引用 / 域值）不计入不符，但登记。
import fs from 'node:fs';

const raw = fs.readFileSync('tools/_verify/_navC-scan-out.tsv', 'utf8').split('\n').slice(2).filter(Boolean);
const rows = raw.map((l) => {
  const [file, line, path, ...rest] = l.split('\t');
  return { file, line: Number(line), path, text: rest.join('\t') };
});

function classify(h) {
  const p = h.path;
  const t = h.text;
  // 源码引用：../../<bucket>/<File>.cs:行号 —— 指向游戏源码，非站点导航
  if (/^\.\.\/\.\.\/[a-z-]+\/.*\.cs:/.test(p)) {
    return { intent: '源码引用', correct: '（非站点导航）', verdict: '非导航', basis: '指向游戏源码文件，不参与站点路由' };
  }
  // 域值：../../ 作为 BasePath 返回值（ApplicationPlatform 语境）
  if (p === '../../' && /BasePath|基准路径|Base path/.test(t)) {
    return { intent: '域值（BasePath 返回值）', correct: '（非站点导航）', verdict: '非导航', basis: '描述引擎基准路径返回值，非导航陈述' };
  }
  // 叶子页写 ./X —— §4.1.0：叶子页 route 深一层，./X 多一层 → 404
  if (/^\.\//.test(p)) {
    const target = p.replace(/^\.\//, '');
    return { intent: '同桶兄弟', correct: `'../${target}'`, verdict: '不符', basis: '§4.1.0 推导式 + L1b：叶子页指向同目录叶子须 ../X；写 ./X 解析到 /<桶>/<本页类名>/X/ 多一层（静默 404）' };
  }
  // 跨语言：../../../<lang>/api/...
  if (/^\.\.\/\.\.\/\.\.\/[a-z]{2}\/api\//.test(p)) {
    return { intent: '跨语言', correct: `'${p}'`, verdict: '符合', basis: 'L7：叶子页跨语言 ../../../<lang>/api/<桶>/<类>' };
  }
  // 跨桶：../../<bucket>/X
  if (/^\.\.\/\.\.\/[a-z-]+\//.test(p)) {
    return { intent: '跨桶', correct: `'${p}'`, verdict: '符合', basis: 'L4b：叶子页跨桶 ../../<目标桶>/<类>' };
  }
  // 同桶兄弟：../X（大写字母开头的类名）
  if (/^\.\.\/[A-Z]/.test(p)) {
    return { intent: '同桶兄弟', correct: `'${p}'`, verdict: '符合', basis: 'L1b：叶子页同桶兄弟 ../<类名>' };
  }
  // 裸 ../ ：回本桶索引或深度说明
  if (p === '../') {
    if (/同桶|本桶|兄弟|one `\.\.\/`|depth/.test(t)) {
      return { intent: '深度说明（同桶链接）', correct: `'${p}'`, verdict: '符合', basis: 'L1b：叶子页同桶兄弟链接深度为 ../，陈述与推导一致' };
    }
    return { intent: '回本桶索引', correct: `'${p}'`, verdict: '符合', basis: 'L2b：叶子页回本桶 _index.md 为 ../' };
  }
  return { intent: '未分类', correct: '???', verdict: '待人工', basis: '' };
}

const out = [];
for (const h of rows) {
  const c = classify(h);
  out.push({
    ...h,
    pos: '叶子',
    intent: c.intent,
    correct: c.correct,
    verdict: c.verdict,
    basis: c.basis,
  });
}

// 统计
const tally = {};
for (const r of out) tally[r.verdict] = (tally[r.verdict] || 0) + 1;
console.log('TALLY=' + JSON.stringify(tally));
const bad = out.filter((r) => r.verdict === '不符');
console.log(`BAD_COUNT=${bad.length}`);
const badPages = [...new Set(bad.map((r) => r.file))];
console.log(`BAD_PAGES=${badPages.length}`);
console.log('---TSV---');
console.log('file\tline\tpath\tpos\tintent\tcorrect\tverdict\tbasis');
for (const r of out) {
  console.log(`${r.file}\t${r.line}\t${r.path}\t${r.pos}\t${r.intent}\t${r.correct}\t${r.verdict}\t${r.basis}`);
}
