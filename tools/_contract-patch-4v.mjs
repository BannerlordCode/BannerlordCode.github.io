// 契约补丁：§4v —— 凡一把尺，必须显式声明它的【有效范围】（boss #7189 定稿，列为本日最根本的一条）
import { readFileSync, writeFileSync } from 'node:fs';
const P = 'C:/WorkSpace/Bannerlord/BannerlordCode.github.io/CONTRACT.md';
let t = readFileSync(P, 'utf8');
if (t.includes('§4v.')) { console.log('已存在，跳过'); process.exit(0); }

const anchor = '## 4w3. ★ 键必须是【唯一标识】';
if (!t.includes(anchor)) { console.error('找不到锚点 §4w3'); process.exit(1); }

const block = `## 4v. ★★ 凡一把尺，必须显式声明它的【有效范围】（boss #7189 定稿）

\`\`\`
凡一把尺（工具 / 判据 / 台账 / 扫描器），它对【什么】有效，必须显式声明。
—— 本会话所有误判的共同点不是「尺错了」，是【尺在它的有效范围内被当成了全范围】。
\`\`\`

**可执行的检验（而不是一句提醒）**：
\`\`\`
把尺所使用的键在全树 grep 一次：命中 >1 ⇒ 这个键在本范围内不合格。
合格范围的写法是「它在 X 范围内合格，在 Y 范围内不合格」，而不是「它合格」。
\`\`\`

**本会话三次同族误判，三次的机制完全一样**：

| 次 | 尺 | 有效范围 | 我犯的错 |
|---|---|---|---|
| ① | 类型名（文件名去 .md） | 单版本单桶 | 跨版本同名时查到另一个版本 |
| ② | 桶 + 页名 | 单版本单语言 | 跨版本/跨语言不唯一 |
| ③ | 「默认它在树里唯一」 | （根本不声明） | 新写的尺也没声明 |

**⇒ 三次都不是「键错了」，是「我没问这把尺在什么范围内是准的」。**
**⇒ 本条比 §4w3（键要唯一）更根本：键唯一是结果，声明范围是方法。**

**⇒ 工具落盘时必须带范围声明，例**：
\`\`\`
工具：tools/_ledger-v4.mjs
有效范围：仅 content/v1.4.5/zh/api/**（单版本、单语言）
超出该范围的结果【未验证】，不得引用
\`\`\`

---

`;

t = t.replace(anchor, block + anchor);
writeFileSync(P, t, 'utf8');
console.log('已插入 §4v。新行数 = ' + t.split(/\r?\n/).length);
