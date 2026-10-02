// 给每个 unique miss 生成「可机器核对的证据」，供人工逐条标注时对照（避免凭感觉贴标签）。
//   node tools/_v146_ruler_evidence.mjs M1
// 证据维度：
//   asType        源码里是否「声明」了同名类型（class/struct/enum/interface/record）
//   asMember      源码里是否作为成员名（方法/属性/字段）出现
//   truncOfType   是否是某个已声明类型名的真前缀或真后缀（→ 提取截断类误报）
//   camelOfMember 是否是某个 lowerCamel 源码标识符的 PascalCase 片段（→ CAMEL_ARTIFACT）
//   acronym       是否全大写词
//   placeholder   是否含 Xxx / My / Your 这类占位词根
import fs from 'node:fs';
import path from 'node:path';

const mode = process.argv[2] || 'M1';
const SRC = path.resolve('../bannerlord-1.4.6');
const files = [];
(function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p); else if (e.name.endsWith('.cs')) files.push(p);
  }
})(SRC);
const blob = files.map((f) => fs.readFileSync(f, 'utf8')).join('\n');

const TOK = new Set();
for (const m of blob.matchAll(/(?<![A-Za-z0-9_])[A-Za-z_][A-Za-z0-9_]*/g)) TOK.add(m[0]);
const TYPES = new Set();
for (const m of blob.matchAll(/\b(?:class|struct|enum|interface|record)\s+([A-Za-z_][A-Za-z0-9_]*)/g)) TYPES.add(m[1]);
const MEMBERS = new Set();
for (const m of blob.matchAll(/(?:public|private|protected|internal)[\s\S]{0,80}?\b([A-Za-z_][A-Za-z0-9_]*)\s*(?:\(|\{|=>)/g)) MEMBERS.add(m[1]);

const res = JSON.parse(fs.readFileSync(path.resolve('tools/_v146_ruler_result.json'), 'utf8'));
const rows = res[`ctx_${mode}`];
const out = rows.map((r) => {
  const id = r.id;
  const truncOfType = [...TYPES].filter((t) => t !== id && t.length > id.length && (t.startsWith(id) || t.endsWith(id))).slice(0, 4);
  const camelOfMember = [...MEMBERS].filter((m) => {
    if (!/^[a-z][a-z0-9]*[A-Z]/.test(m)) return false;
    return [...m.matchAll(/[A-Z][a-z0-9]*/g)].map((s) => s[0]).includes(id);
  }).slice(0, 4);
  return {
    ...r,
    ev: {
      asType: TYPES.has(id),
      asMember: MEMBERS.has(id),
      truncOfType,
      camelOfMember,
      acronym: /^[A-Z]{2,}(?![a-z])/.test(id),
      placeholder: /Xxx|My[A-Z]|Your[A-Z]/.test(id),
    },
  };
});
fs.writeFileSync(path.resolve(`tools/_v146_ruler_evidence_${mode}.json`), JSON.stringify(out, null, 1), 'utf8');
const pad = (s, n) => String(s).padEnd(n);
console.log(pad('ID', 40) + pad('n', 4) + pad('Type', 6) + pad('Memb', 6) + pad('ACR', 5) + pad('PLC', 5) + 'truncOfType / camelOfMember');
for (const o of out) {
  console.log(pad(o.id, 40) + pad(o.n, 4) + pad(o.ev.asType ? 'Y' : '.', 6) + pad(o.ev.asMember ? 'Y' : '.', 6) +
    pad(o.ev.acronym ? 'Y' : '.', 5) + pad(o.ev.placeholder ? 'Y' : '.', 5) +
    o.ev.truncOfType.join(',') + ' | ' + o.ev.camelOfMember.join(','));
}
console.log('rows=' + out.length);
