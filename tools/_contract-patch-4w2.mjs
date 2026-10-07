// 契约补丁：在 §4w 之后加 §4w2 —— 「实测 N 次」必须写清三件事，否则既不可复现也不可反驳。
import { readFileSync, writeFileSync } from 'node:fs';
const P = 'C:/WorkSpace/Bannerlord/BannerlordCode.github.io/CONTRACT.md';
let t = readFileSync(P, 'utf8');
if (t.includes('§4w2')) { console.log('已存在，跳过'); process.exit(0); }

const anchor = '## 4x. 自查发现量具范围有误';
if (!t.includes(anchor)) { console.error('找不到锚点 §4x，未改动'); process.exit(1); }

const block = `## 4w2. 凡断言写「实测 N 次」，必须同时写清三件事（worker-36 实测提出）

\`\`\`
① token 形态   数的是 "OverrideView(typeof" 还是裸 "OverrideView"
② 行数还是出现次数   grep -n | wc -l  与  grep -o | wc -l  可以差 2
③ 扫的树根范围   bin/ 还是整个 Bannerlord.Source（含 7 个 Modules.* 兄弟根）
\`\`\`

**为什么这不是吹毛求疵 —— 同一棵树，同一句话，可以量出四个都「对」的数字：**
\`\`\`
grep -rn "OverrideView(typeof"  全树          → 88 行 / 88 次
grep -rn "OverrideView"         全树          → 94 行 / 96 次
grep -rn "OverrideView"         仅 bin/       →  0
grep -rn "OverrideView.*<目标类>" 全树        →  0
\`\`\`
（worker-36 独立复现，四个数全部相符。）

**⇒ 不写这三件事的「实测 N 次」，既不可复现、也不可被反驳 —— 它只是看起来很确定。**
而它的具体危害已被实测到：
\`\`\`
下一个复查者用裸 grep OverrideView 会量到 94 → 判定断言错 → 而断言没错
\`\`\`

**这是 §4h「正数也要带口径」在【计数】上的具体化**：
§4h 说「报数要带口径」，本节说「计数断言的口径由这三项构成，缺一不可」。

**⇒ 书写格式（建议直接照抄）**：
\`\`\`
实测 88 次 —— 口径：\`OverrideView(typeof\` 形态 · 88 行 · 整个 \`Bannerlord.Source\`（8 个根）
\`\`\`

`;

t = t.replace(anchor, block + anchor);
writeFileSync(P, t, 'utf8');
console.log('已插入 §4w2。新行数 = ' + t.split(/\r?\n/).length);
