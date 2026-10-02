// 判别力实测台：tools/_v146_prose_name_check.mjs 的多口径版本 + 一次性词表索引。
// 目的不是替代原检查器，而是量它的灵敏度/误报率，并把「提取口径」做成可切换的档位。
//   node tools/_v146_prose_name_ruler.mjs --mode=M0|M1|M2|M3 <file...>
// M0 = 现状（原脚本口径，逐字复制）
// M1 = M0 + 页面侧词边界（只取页面里的极大标识符 token，lowerCamel 不再被切成大写段）
// M2 = M1 + 跳过被否定句 / *.cs 路径否定的 token（关键词档，用来证明「调参」救不回来）
// M3 = M1 + tools/_v146_prose_name_allow.txt 白名单（人工标注档，唯一真正能收敛 FP 的机制）
import fs from 'node:fs';
import path from 'node:path';

const SRC = path.resolve('../bannerlord-1.4.6');
const REPO_DIR = path.resolve('.');

function walkCs(dir, out) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walkCs(p, out);
    else if (e.name.endsWith('.cs')) out.push(p);
  }
  return out;
}
const blob = walkCs(SRC, []).map((f) => fs.readFileSync(f, 'utf8')).join('\n');

// 索引：blob 里所有极大标识符 token。hasWord(hay,w) === TOKENS.has(w)（w 是标识符形态时），
// 因为 hasWord 要求左右都不是 [A-Za-z0-9_]，这正是「极大 token」的定义。
// 必须带前置否定边界，否则 `0x000CC031` 这类十六进制字面量会把 `x000CC031` 收进词表
// （原 hasWord 在这里是 false —— 它看到左边是数字 `0`）。这一步是等价性的关键。
const TOKENS = new Set();
for (const m of blob.matchAll(/(?<![A-Za-z0-9_])[A-Za-z_][A-Za-z0-9_]*/g)) TOKENS.add(m[0]);

// 原脚本的 hasWord 保留在这里，供等价性交叉验证（--selftest）。
function hasWord(hay, word) {
  let i = hay.indexOf(word);
  while (i !== -1) {
    const before = i === 0 ? '' : hay[i - 1];
    const after = i + word.length >= hay.length ? '' : hay[i + word.length];
    if (!/[A-Za-z0-9_]/.test(before) && !/[A-Za-z0-9_]/.test(after)) return true;
    i = hay.indexOf(word, i + 1);
  }
  return false;
}

const ALLOW = new Set(['I','T','Z','OK','TODO','NOTE','API','XML','JSON','HTTP','ID','UI','NPC','AI','CPU','RAM','GPU','PC','SDK','P0','P1','P2']);
const NEGATION = /(不是(类型|类|文件|字段|属性|方法|类名)|并非|而不是|并不是|不见得|没有这类|不含|不叫)/;
const PATHY = /(\.(cs|md|json|xml|dll|props|csproj)\b|\/\s*[A-Za-z_][A-Za-z0-9_]*)/i;

function sentenceAround(text, index) {
  const start = Math.max(0, index - 220);
  const m = text.slice(start, index + 220).match(/[^。；;\n]*$/);
  return m ? m[0] : '';
}

const ALLOWLIST = new Set(
  (fs.existsSync(path.join(REPO_DIR, 'tools', '_v146_prose_name_allow.txt'))
    ? fs.readFileSync(path.join(REPO_DIR, 'tools', '_v146_prose_name_allow.txt'), 'utf8')
    : '').split(/\r?\n/).map((s) => s.trim()).filter((s) => s && !s.startsWith('#'))
);

function check(file, mode) {
  const text = fs.readFileSync(file, 'utf8').replace(/```[\s\S]*?```/g, ' ');
  const missing = [];

  if (mode === 'M0') {
    for (const m of text.matchAll(/`?([A-Z][A-Za-z0-9]{2,})`?/g)) {
      const id = m[1];
      if (!ALLOW.has(id) && !TOKENS.has(id)) missing.push(id);
    }
  } else {
    const seen = new Set();
    for (const m of text.matchAll(/[A-Za-z_][A-Za-z0-9_]*/g)) {
      const id = m[0];
      if (id.length < 3 || ALLOW.has(id) || seen.has(id) || !/^[A-Z]/.test(id)) continue;
      seen.add(id);
      if (TOKENS.has(id)) continue;
      if ((mode === 'M2' || mode === 'M3')) {
        const s = sentenceAround(text, m.index);
        if (NEGATION.test(s) || PATHY.test(s)) continue;
      }
      missing.push(id);
    }
    if (mode === 'M3') {
      // 白名单是「事后剔除」，不是另起一轮 —— 之前写成另起一轮，抑制完全没生效（漏了 6/6 阴性）
      for (let i = missing.length - 1; i >= 0; i--) if (ALLOWLIST.has(missing[i])) missing.splice(i, 1);
    }
  }
  return [...new Set(missing)];
}

const argv = process.argv.slice(2);
if (argv.includes('--selftest')) {
  const all = [...TOKENS];
  const sample = ['Campaign','Hero','SaveManager','KeysPressed','ReloadEnabled','FFFFF','AssemblyInfo','Suffixes','TypoNamespaces','PointDirs','entryPointDirs','ZzzBogus9'];
  for (let k = 0; k < 60; k++) sample.push(all[(k * 2654435761) % all.length]);
  let bad = 0;
  for (const w of sample) if (hasWord(blob, w) !== TOKENS.has(w)) { bad++; console.log('MISMATCH', w, hasWord(blob, w), TOKENS.has(w)); }
  console.log(`selftest: ${sample.length - bad}/${sample.length} agree  tokens=${TOKENS.size}`);
  process.exit(bad ? 1 : 0);
}

const modeIdx = argv.findIndex((a) => a.startsWith('--mode='));
const mode = modeIdx === -1 ? 'M0' : argv[modeIdx].slice(7);
const files = argv.filter((a, i) => i !== modeIdx && !a.startsWith('--'));
let total = 0;
for (const f of files) {
  const miss = check(f, mode);
  total += miss.length;
  console.log(`${f}  missing=${miss.length}${miss.length ? '  -> ' + miss.join(', ') : ''}`);
}
console.log(`MODE=${mode} TOTAL_MISSING=${total} PAGES=${files.length}`);
