// 契约补丁：§4w4（+1 -1 是形状不是归属）· §4w5（台账必须带快照时点）· §6w2（按指纹整桶 grep）
// 三条都来自 worker-36 / worker-43 的实测。
import { readFileSync, writeFileSync } from 'node:fs';

const P = 'C:/WorkSpace/Bannerlord/BannerlordCode.github.io/CONTRACT.md';
let t = readFileSync(P, 'utf8');
if (t.includes('§4w4.')) { console.log('已存在，跳过'); process.exit(0); }

const T = String.fromCharCode(96); // ` —— 避免模板字面量里出现反引号
const fence = T.repeat(3);

const w4 = [
  '## 4w4. ★ +1 -1 是【形状】，不是【归属】（worker-36 实测）',
  '',
  fence + 'text',
  '全树恰好 +1 -1 的页 = 76，其中只有 10 页属于提出它的那条线',
  '  viewmodel 64 · campaign-ext 9 · mission-ext 2 · core-extra 1',
  '⇒ 台账若按 diff 尺寸归类 B，会把 66 页【别人的页】记到任何人名下。',
  '⇒ B 类必须配「谁改的」这一维；尺寸只是辅助信号。',
  fence,
  '',
  '**与 §4w3 同族，但方向相反**：',
  fence + 'text',
  '§4w3  键不唯一   → 尺会安静地查到另一个对象',
  '§4w4  特征不专属 → 尺会安静地把别人的页算进你的账',
  fence,
  '**两者都不报错。而「我做了 76 页」与「我碰了 10 页」只差一句范围声明。**',
  '',
  '**⇒ 判据：凡用 diff 尺寸／行数／改动行数推断「谁做了什么」，必须先问',
  '「这个特征在本仓是否专属」。不是 ⇒ 只能作辅助信号，不能作归属。**',
  '',
  '---',
  '',
  '## 4w5. ★ 台账必须带【快照时点】，否则跨时点对账必然对不上（worker-36 实测）',
  '',
  fence + 'text',
  '台账的每一个数都必须带它测得的时间。',
  '两个时点不同的数【不可直接相减】。',
  fence,
  '',
  '**实例**：worker-36 报 save-system 44 页（全部 >60 行新增），lead 测得 34。',
  '**两数都对** —— 34 是更早快照时的真值，44 是它交付后续批次后的真值。',
  '而 lead 当时算成「44 − 10 = 34」，把两件不同的事混成了一件：',
  '  ① 10 个指针页从未在 save-system 里（算错了）',
  '  ② 34 与 44 之间隔着 11 个后交付的页（时点错了）',
  '**⇒ 两类错误叠在一起，看起来像一个「差 10」的小疏漏。**',
  '',
  '**⇒ 与 §4h 同源**：§4h 说「正数要带口径」，',
  '本节说「正数还要带【时点】」—— 因为同一个集合在不同时刻有不同的真值。',
  '',
  '---',
  '',
].join('\n');

const w6 = [
  '## 6w2. 修「X 这个说法」时，不只改被点名的页 —— 按【指纹】在【整桶】grep（worker-43 提议）',
  '',
  fence + 'text',
  '指纹 = X + 它常配的错误措辞',
  '例：修「FailedAssert 在正式版是空实现」时，不只改点名的 4 页，',
  '    而是在【整桶】跑：grep -rn "FailedAssert" <桶>/*.md | grep "正式版"',
  fence,
  '',
  '**理由（worker-43 自述）**：',
  fence + 'text',
  '它按清单改了 7 处，全桶一跑发现 8 处 —— 多出的 2 处不在任何清单里',
  '若当时没想到跑这条，就只改 7 处、漏 2 处',
  '它说：「如果我当时没想到跑这条，就漏了。这次是运气好。」',
  fence,
  '',
  '**⇒ 这与 §6r（清单也是起点不是全集）同源，但给出了【唯一可复用的形式】：',
  '不是「多改几页」，是【把清单换成一次全桶指纹扫描】。**',
  '',
  '**⇒ 而它同时是 §4v 的正反两面**：',
  fence + 'text',
  '同一个动作 —— grep 某个名字',
  '  按【类名】跨版本捞   → 35 页假阳性（它做自查清单时犯的）',
  '  按【指纹】在桶内捞   → 捞出真的 2 处（它做修复时做的）',
  '范围声明对了就成立，错了就造假数。',
  fence,
  '',
  '---',
  '',
].join('\n');

const a1 = '## 4x. 自查发现量具范围有误';
const b1 = '## 5. 尺被改过之后';
if (!t.includes(a1)) { console.error('缺 §4x 锚点'); process.exit(1); }
if (!t.includes(b1)) { console.error('缺 §5 锚点'); process.exit(1); }
t = t.replace(b1, w6 + b1);
t = t.replace(a1, w4 + a1);
writeFileSync(P, t, 'utf8');
console.log('已插入 §4w4 / §4w5 / §6w2。新行数 = ' + t.split(/\r?\n/).length);
