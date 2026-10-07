// batch-zh-01 逐页浓缩视图（只读）：给写 ## 怎么用 的人/agent 用的取材面板
// 用法: node tools/_verify/_condense.mjs <pagePath> [<pagePath> ...]
import fs from 'node:fs';

const sec = (t, name) => {
  const re = new RegExp('^## ' + name + '\\s*$', 'm');
  const m = re.exec(t);
  if (!m) return '';
  const start = m.index + m[0].length;
  const rest = t.slice(start);
  const n = rest.search(/^## /m);
  return n < 0 ? rest : rest.slice(0, n);
};

const h2s = (t) => [...t.matchAll(/^##\s+(.+?)\s*$/gm)].map((m) => m[1]);

for (const p of process.argv.slice(2)) {
  const t = fs.readFileSync(p, 'utf8');
  const heads = [...t.matchAll(/^\*\*(File|Type|Base|Namespace|Module|Assembly):\*\*\s*(.+)$/gm)]
    .map((m) => m[1] + '=' + m[2].trim());
  const anchorCount = (t.match(/^## 跨版本提示\s*$/gm) || []).length;
  const anchor = anchorCount === 1 ? '## 跨版本提示' : anchorCount === 0 ? '(APPEND-EOF)' : '(AMBIGUOUS:' + anchorCount + ')';
  const exName = h2s(t).find((h) => /真实示例|典型用法示例|使用示例|^示例$|^Examples?$/.test(h));
  const ex = exName ? sec(t, exName) : '';
  const blocks = [...ex.matchAll(/```csharp\n([\s\S]*?)```/g)].map((m) => m[1]);
  const intros = ex.split('```').filter((_, i) => i % 2 === 0).map((s) => s.trim()).filter(Boolean);
  const mem = sec(t, '关键成员') || sec(t, '成员说明（按主题分组）') || sec(t, '成员说明');
  const memRows = (mem.match(/^\|.*$/gm) || []).slice(0, 18);
  const riskName = h2s(t).find((h) => /^风险与边界$|^风险与崩溃边界$|^风险$/.test(h));
  const risk = riskName ? sec(t, riskName) : '';
  const firstBullet = (risk.match(/^\s*(?:[-*]|\d+\.)\s+(\S[\s\S]{20,600}?)(?=\n)/m) || [])[1] || '';
  // 旧模板页（无 **File:** / 无 关键成员）额外给 概述+心智模型 开头与 依赖图
  const legacy = heads.length && !/\*\*File:\*\*/.test(t);
  console.log('=== PAGE ' + p);
  console.log('ANCHOR: ' + anchor + '   H2: ' + h2s(t).join(' > '));
  console.log('HEAD: ' + heads.join(' | '));
  if (legacy) {
    const body = sec(t, '概述') + sec(t, '心智模型');
    console.log('--LEGACY 概述+心智模型 (前 1500 字)--');
    console.log(body.replace(/\s+/g, ' ').slice(0, 1500));
    console.log('--依赖图--');
    console.log(sec(t, '依赖图').replace(/\s+/g, ' ').slice(0, 700));
  }
  console.log('--MEMBERS--');
  console.log(memRows.join('\n'));
  console.log('--EXAMPLES(' + exName + ') blocks=' + blocks.length + '--');
  console.log('INTRO: ' + intros.slice(0, 2).map((s) => s.replace(/\s+/g, ' ').slice(0, 240)).join(' ||| '));
  blocks.slice(0, 2).forEach((b, i) => console.log('```csharp[' + i + ']\n' + b.trim() + '\n```'));
  console.log('--FIRST-RISK--');
  console.log(firstBullet.trim());
  console.log('');
}