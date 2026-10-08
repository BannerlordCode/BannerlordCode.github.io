# lead-29 — v1.4.7/zh 手写深页写作线（接手自 lead-26，台账追加式）

仓库 `C:/WorkSpace/Bannerlord/BannerlordCode.github.io` · 分支 `main` · 接手时 HEAD `00104c0f5f`
源码只读根 `C:/WorkSpace/Bannerlord/bannerlord-1.4.7`（无 `Bannerlord.Source` 层）

> 本文件只追加，不删行。所有数字都附「量它的命令」。

---

## 0. 接手时的实测基线（我本人跑的，2026-10-07）

| 项 | 值 | 命令 |
|---|---|---|
| 队列条目 | 5,603 | `wc -l tools/_verify/missing-types-1.4.7-zh.txt` = 5604（含 1 行 `#`） |
| 队列可解析率 | **100%**（unresolved = 0） | `node -e` 用 `tools/_verify/types-1.4.7.json`（13,166 类型）按 `namespace.name` / `name` 匹配全部 5,603 条 |
| ★ 落进「不存在的桶」 | **201**（storymode 180 + localization 21） | 同上；判据 = `types-1.4.7.json` 的 `namespace` 前缀 `StoryMode` / `TaleWorlds.Localization` |
| 有效可写上限 | **5,402** | 5603 − 201 |
| v1.4.7/zh/api 叶子页 | **79**（+18 个 `_index.md`，含 `api/_index.md`） | `find content/v1.4.7/zh/api -name '*.md' ! -name '_index.md' \| wc -l` = 79 |

> **[更正 2026-10-07]** 本表初稿写的「68」是我**未测量就写下**的数（引用 lead-24 台账的 70 再口算），
> 违反本文件自己的「报数必附命令」。实测值 = **79**，命令见上一行。以 79 为准，68 作废。

| 逐桶（叶子页） | campaign-ext 2 · campaign 5 · core-extra 14 · core 2 · custombattle 15 · engine 2 · gui 3 · mission 4 · network 12 · sandbox 5 · save-system 3 · system 12 · 其余 5 桶 0 页 | `for d in content/v1.4.7/zh/api/*/; do find "$d" -name '*.md' ! -name '_index.md' \| wc -l; done` |
| 桶页数 | campaign 6 · core-extra 15 · custombattle 16 · network 13 · system 13 · sandbox 6 · mission 5 · gui 4 · save-system 4 · campaign-ext 3 · core 3 · engine 3 · mission-ext 1 · viewmodel 1 · modulemanager 1 · achievementsystem 1 · activitysystem 1（均含 `_index.md`） | `for d in content/v1.4.7/zh/api/*/; do ls "$d" \| grep -c '\.md$'; done` |

### 0.1 门禁两套数（批前，lead-29 实测）

```
$ node tools/audit-links.mjs        # EXIT=0
  TOTAL_LINKS=150952  BROKEN_LINKS=0  RESOLVE_NEITHER=2  FILES_WITH_BROKEN=0
$ node tools/nav-orphans.mjs        # EXIT=0
  CALIBER=self-link-counts-as-inbound  total_pages=39186  orphans=0  orphan_parents=0
```

### 0.2 树自带门禁 `tools/_v147_verify.mjs` 的**既存**红（先于本线任何写入）

```
FAIL: 5 hrefs leak a repo-root prefix or a same-version version segment
      （5 条全在 content/v1.4.7/en/api/_index.md → ../../../v1.4.7/zh/api/…）
FAIL: 5 self-referential links
      （custombattle 4 页 + mission/_index.md 链到自己）
broken-link cause split → REAL DEFECTS: 0
✗ 脚本在 tools/_v147_verify.mjs:310 崩：TypeError: (nav.routes || []).map is not a function
      （tools/_v147_nav-spec.json 的 routes 不是数组）
```
**我不修**（那是 lead-2 的工具与别线的页）。本线纪律：**不得新增这三类缺陷**。已由 lead-26 上报 boss-3（#20024 一带），此处只登记复核。

### 0.3 ★ 201 条被设计排除的条目（**不自行建桶**，等 boss 裁决）

`tools/_dir-map-canonical.json`（schemaVersion=5）**有** `TaleWorlds.Localization → localization` 规则，
`tools/_v147_treespec.md` 也把 localization 列为正式桶（53 页）；
但 `content/v1.4.7/zh/api/_index.md` 明写「本地化 / 战役剧情 …它们既没有桶目录，也没有任何一篇类页 —— 它们是文档树的盲区」。
**两份权威文件互相矛盾。** 按派单硬约束 ⑧：**跳过这 201 条，不建桶、不改那段散文**，登记在此并回报裁决。

**⇒ 已裁决（boss-4 #20420，2026-10-07）：选 (b) 建桶。** 详见 §0.5；§0.3 的「跳过」状态**已被该裁决取代**，此处保留原文以留存裁决前的推理链。

⇒ 裁决前，本线从队列里剔掉这 201 条后写作，剔除清单可由下列命令复现：
```
node -e "const t=require('./tools/_verify/types-1.4.7.json').types,fs=require('fs');
const q=fs.readFileSync('tools/_verify/missing-types-1.4.7-zh.txt','utf8').split(/\r?\n/).filter(l=>l&&!l.startsWith('#'));
const by=new Map(); for(const x of t){const k=x.name; (by.get(k)||by.set(k,[]).get(k)).push(x);}
let s=0,l=0; for(const n of q){const e=by.get(n)||by.get(n.split('.').pop()); if(!e)continue;
 const ns=e[0].namespace||''; if(/^StoryMode/.test(ns))s++; else if(/^TaleWorlds\.Localization/.test(ns))l++;}
console.log('storymode',s,'localization',l,'sum',s+l);"
# ⇒ storymode 180 localization 21 sum 201
```

### 0.5 ★★ 裁决记录：201 条无桶条目 → 建桶（boss-4 #20420）

**裁决 = (b) 建桶。** boss-4 独立复核的四条依据（我转录，非我的结论）：
① 常设裁定 `tools/_SCOPE-DECISION-20260824.md` = **全量**、六版本、全部 public 类型、不设优先级削减；
  `content/v1.4.7/zh/api/_index.md` 的「盲区、不建目录」散文是在更窄范围假设下写的，与常设裁定冲突。
② `tools/_dir-map-canonical.json` 有 `TaleWorlds.Localization → localization` 与 `StoryMode → storymode` 规则。
③ `tools/_v147_treespec.md` line 97 / 102 / 126 / 133 把两者列为正式桶。
④ boss-4 实测 `ls -d content/*/*/api/{localization,storymode}`：**v1.3.0 / 1.3.15 / 1.4.5 / 1.4.6 / 1.5.3 全都有这两个桶，只有 v1.4.7 没有**
  ⇒ 是 v1.4.7 的**孤例不一致**，不是「刻意设计」。

**⇒ 真实可写上限 = 5,603（不是 5,402）。** 本台账 §0 里 5,402 那个数**作废**，只作为裁决前的中间读数保留。

**授权范围（严格，逐条来自 #20420）**
- ✅ 授权：手写 `content/v1.4.7/zh/api/localization/_index.md` 与 `content/v1.4.7/zh/api/storymode/_index.md`（含手写页面表）；
  改 `content/v1.4.7/zh/api/_index.md`（删掉那段「盲区」散文，改成两个正常桶行 + 计数）。
- ❌ 未授权：跑 `node tools/nav-section-index.mjs --apply` 写机械 SECTION INDEX 块（要机械块必须先问 boss-4）；
  建 en 页面（en 是否手写/镜像待用户请示）；碰别的树。
- 纪律：桶 `_index.md` **必须与该桶第一批页面同批落地**，**不许先建空占位页**
  （「先有页、再建桶」—— 那段散文里「写一个空索引页会让读者以为那里本来就该有页面」这个顾虑是对的）。

**排序**：先把 b1（campaign 9 页）收完并提交，**不中途换批**；之后 b2 = localization（21 条，`TextObject` 是 mod 作者最先撞上的类型），再 b3 = storymode（180 条）。

**另两条确认（#20420）**
1. `tools/_v147_verify.mjs` 的 5+5 既存告警与 `:310` 崩溃：**不修、不属本线**（工具线缺陷），只登记。
   本线权威尺 = `node tools/audit-links.mjs` + `node tools/nav-orphans.mjs` + `node tools/_verify/lead-145zh-judge.mjs`。boss 接受我对「REAL DEFECTS: 0」的定性。
2. 七节 schema：**确认全站统一七节**（概述/心智模型/怎么用/关键成员/真实示例/参见/导航）。
   我实测的反例（`custombattle/CustomBattleHelper.md` 七节 PASS）被认定为有效证据；
   lead-26 台账里「J2 对 v1.4.7 不适用」那条**作废**。

### 0.6 ★ `api/_index.md` 的既存陈旧计数（集成门禁 §1.2 + §1.3 那两类，先于本线写入）

`content/v1.4.7/zh/api/_index.md` 现在写着：
```
description: "…中文树当前 35 篇类页。"
## 有页面的桶（8 个，35 篇）
## 当前 0 页的桶（9 个）
```
而磁盘实测（命令见 §0 表）：**79 篇叶子页，12 个桶有页面，5 个桶为 0**。
差额 = **44 篇**，恰好是表里**整桶漏掉的 4 个桶**：`custombattle` 15 + `network` 12 + `sandbox` 5 + `system` 12 = 44。
（5+4+3+3+2+14+2+2 = 35 = 表里已列的 8 个桶。）

⇒ 两个独立缺陷同时存在：**① 漏列 4 个桶的链接集合**（§1.2「索引页是否完整列出该列的内容」）；
**② 规模声明陈旧**（§1.3「页面声称的规模是否仍然成立」）。两者都是「断链审计全绿、计数检查全绿」也看不出来的那类。
⇒ 这页是我（单写者）在 R2 必须改的文件 ⇒ **一并修**（补 4 个桶行 + 把 35/8/9 改成实测值），不只改 campaign 那一行。

**R2 计数锚点（先 grep 再改，防手写清单漏）**
```
campaign/_index.md :3   description: "…目前 5 页。"
campaign/_index.md :22  ## 本区页面（5）
campaign/_index.md :32  "这 5 页合起来是一条完整的上手路径…"
campaign/_index.md :?   ## 尚未收录（b1 补上 Hero/Clan/Kingdom/Settlement/MapEvents 等，该节必须重写）
api/_index.md      :3   description: "…中文树当前 35 篇类页。"（→ 实测值）
api/_index.md      :11  ## 有页面的桶（8 个，35 篇）  →（12 个，79 篇；b1 后 83 篇）
api/_index.md      :15  campaign 行（5 → 14，页面列表 5 个 → 14 个）
api/_index.md      :24  ## 当前 0 页的桶（9 个）    →（5 个）
api/_index.md      :9   "下面两张表里的页数都是**当前的真实页数**" ← 这句话在 35≠79 时是假的，必须一起修
```
量它的命令：`grep -n '[0-9]\+ 篇\|（[0-9]\+ 个\|目前 [0-9]\+ 页\|本区页面（[0-9]\+）' content/v1.4.7/zh/api/_index.md content/v1.4.7/zh/api/campaign/_index.md`

### 0.7 ★ b1 执行期实测：两个 worker 的「只读不写」停滞（含干预记录）

**现象（我实测，非转述）**：`hero-line` 与 `party-line` 先后报 `settled and is idle`，而
```
$ for f in Hero CharacterObject Clan MobileParty PartyBase TroopRoster Settlement Kingdom MapEvent; do
    ls content/v1.4.7/zh/api/campaign/$f.md; done
  9/9 全 MISSING；$ git status --porcelain -- content/   → 空
```
⇒ **9 页零落盘**。两者的最后进展都是「继续读源码 / grep 关键成员行号」——**把「读源码」当成了交付**。
（`world-line` 同期仍在读，尚未 settle。）

**根因假设（基于 worker 自己的消息）**：① 我给的 brief 强调「打开源码读、逐成员核行号」，
对 3,215 / 5,456 / 2,772 行的大文件形成了**无上限的阅读循环**；
② worker-270 报「换个 grep 模式重试」⇒ **Windows Git-Bash 下的 grep 引用有摩擦**，
而我的 brief 没有给它可直接粘贴的命令，于是它把时间花在试命令上。

**干预（已发，逐条可查）**：
- `#20448` → hero-line：明确指出「读源码不是交付」，给出 6 步顺序（先写 Hero.md → 再写另两页 → 跑 judge → 修 → 回报），
  并允许「卡住就先把另两页落盘」，明确「落盘优先」。
- `#20477` → party-line：降载到**单文件**，把 `MobileParty.md` 的**完整七节骨架逐字写在消息里**，
  并给出「行号不确定就删掉那一行，不要再回去读」的止损规则。
- `#20480` → hero-line：补上**可直接粘贴的 grep 命令**（`grep -n 'public ' …` + `grep -c '' …`），
  把「怎么核行号」这个摩擦点直接消掉。

**可复用教训（待验证后转 wiki）**：给写手的 brief 里，**「读源码」的授权必须配一个上限**
（例：先 `grep -n 'public '` 拿面，再只精读命中区段），否则大文件类会把整个会话吃在阅读上而零落盘。

### 0.8 ★ 台账路径解析：`tools/_verify/…` 是**工作区根**相对路径，不是仓库相对路径（已修）

**现象**：supervisor 连续两次报 `settled without required artifact(s): tools/_verify/lead-v147-zh-PROGRESS.md`，
而我实测文件一直在仓库里（`git status` = `??`）。

**根因（已实测）**：本 run 的 cwd = **工作区根** `C:/WorkSpace/Bannerlord`，而那里**也另有一个 `tools/_verify/`**。
所以相对路径 `tools/_verify/…` 被解析成 `C:/WorkSpace/Bannerlord/tools/_verify/…`（不存在）
而不是 `C:/WorkSpace/Bannerlord/BannerlordCode.github.io/tools/_verify/…`（存在）。
```
$ ls -d C:/WorkSpace/Bannerlord/tools/_verify
C:/WorkSpace/Bannerlord/tools/_verify
$ ls C:/WorkSpace/Bannerlord/tools/_verify/lead-v147-zh-PROGRESS.md
No such file or directory          ← 第一次失败时
```
**旁证（同现象的兄弟线）**：`lead-v146-zh-PROGRESS.md` 在**两个路径下 md5 完全相同**
（`52e1fff11c15e11ee04d10179c72c90e`）—— 说明那条线早就发现并绕过了同一个坑。

**处置**：台账改为**硬链接**，两个路径指向同一 inode，从此不会双份漂移：
```
$ ln BannerlordCode.github.io/tools/_verify/lead-v147-zh-PROGRESS.md tools/_verify/lead-v147-zh-PROGRESS.md
$ stat -c '%i %h %n' <两个路径>
35747322046020883 2 tools/_verify/lead-v147-zh-PROGRESS.md
35747322046020883 2 BannerlordCode.github.io/tools/_verify/lead-v147-zh-PROGRESS.md
```
⇒ **可复用规则**：凡声明 artifact，用**绝对路径**；若派单给的是相对路径，
先 `pwd` 确认 cwd（本 harness 下 cwd = 工作区根，不是仓库根）。

### 0.9 并发线核对：`lead-28` **不**与 b1 撞页（已核实）

`tools/_verify/` 下出现了同一时段（07:35–07:36）的 `lead-28-c1-BRIEF.md` / `lead-28-c1-facts-campaign-core.md` /
`lead-28-c1-facts-models-p1.md` / `lead-28-c1-facts-models-p2.md` / `lead-28-fixture/`，
文件名里的 `campaign-core` 与 b1 的桶同名，**必须排除撞页**。读其 brief 第 1 行：
```
# lead-28 · v1.5.3/zh 批次 c1 共享派单规范
… 3. 源码只读：C:/WorkSpace/Bannerlord/bannerlord-1.5.3 只读
```
⇒ lead-28 是 **v1.5.3/zh** 线，源码树与 content 树都不同 ⇒ **与 v1.4.7/zh b1 无文件级重叠**（READING-RULES ⑥ 排查完毕）。
顺带对齐到一个口径差异（供验收时注意）：lead-28 用英文标签 `**Type:**` / `**Source:**`，
本线 v1.4.7 用中文标签 `**类型：**` / `**源文件：**` —— 两者都被 `classifyPage` 的
`/\*\*(?:Type|类型)[：:]\*\*/` 接受，但**同一棵树内必须一致**；v1.4.7 现有 79 页全用中文标签，所以本线继续中文。

### 0.10 ★ 解阻：行号锚点表（`tools/_verify/sig-b1/*.sig.txt`）

**动机**：0.7 的两个 worker 把时间花在「反复 grep / 通读 3k–5k 行文件」上。
同一时段兄弟线 lead-28（v1.5.3/zh）的做法是给写手一份**预先抽好的行号锚点表**
（`tools/_verify/sig-c1/*.sig.txt`，其 brief 里写明「它只是行号锚点表，不是正文来源」）—— 直接采用同一模式。

**产物**：`node tools/_verify/mk-sig-b1.mjs` ⇒ `tools/_verify/sig-b1/*.sig.txt`（9 份）
```
Hero.sig.txt             lines= 3215  publicLines=178
CharacterObject.sig.txt  lines= 1106  publicLines= 82
Clan.sig.txt             lines= 1987  publicLines=101
MobileParty.sig.txt      lines= 5456  publicLines=236
PartyBase.sig.txt        lines= 1644  publicLines= 88
TroopRoster.sig.txt      lines=  926  publicLines= 52
Settlement.sig.txt       lines= 1842  publicLines=114
Kingdom.sig.txt          lines= 1390  publicLines= 87
MapEvent.sig.txt         lines= 2772  publicLines= 75
```

**为什么它不违反 H0（逐条自证）**
1. 生成器 `mk-sig-b1.mjs` **只读**源码，**只写** `tools/_verify/sig-b1/`；
2. 表里只有「行号 + 源码原文那一行」，**零散文、零用途说明、零示例**——解释性文字仍必须写手读代码后自己写；
3. 与 `tools/_SCOPE-DECISION-20260824.md` §4「抽取器只是清单，不是作者」一致；
4. 自检：生成后 `git status --porcelain -- content/` 仍为**空**（已实测）。

**派单动作**：三条线各发一条消息，把对应的三份 sig.txt 绝对路径给它，
并把工作方式从「通读整个文件」改成「读 sig.txt 拿行号 → 每个成员只 read 前后 ~20 行拿语义 → 立即 write」。

### 0.11 ★★ 三条常设规则（boss-4 #20550，即日生效）+ §0.6 授权照准

**规则 A — 父索引必须列全集**：每次 R2，父索引的桶表/页面表对齐磁盘实测**全集**（gate §1.2），
规模声称对齐实测（§1.3）。**不只补自己新写的行。整表修复作为独立提交。**
⇒ 与 §0.6 已登记的那处缺陷（`api/_index.md` 35 篇/8 桶 vs 磁盘 79 篇/12 桶，漏 custombattle·network·sandbox·system 44 篇）合并执行；
boss **已授权**按「整表对齐磁盘实测」修，约束：**与 b1 内容批分开提交（独立 commit）**；
报**改前/改后两套数 + 量它的命令**；只动 v1.4.7/zh 下我拥有的文件；
**散文写成可核事实陈述，不用「约/大约」**。

**规则 B — brief 不得凭记忆点名成员**：lead-30 实测抓到它自己 brief 里 **6 个 `Kingdom` 成员 + 若干 `MobileParty/PartyBase/TroopRoster/MissionObject/SaveContext` 成员源码里不存在**。
「brief 点名不存在的成员」正是写出伪造文档的机制。⇒ 要么先只读抽取真实 public 面再点名，要么明写「未验证提示，逐个 grep 核实」。
**本线自查**：b1 的三份原始 brief **没有点名任何成员**（只给了类名 + 文件路径 + 行数），
三条降载消息里的成员位置全是 `<成员>` 占位符 —— **不适用本条**；
新做的 `sig-b1/*.sig.txt` 方向被 boss 肯定（「只有行号+原文行、零散文」）。

**规则 C — 写手 brief 必须给读的上界**：boss 直接引用我的 §0.7 实测（「读源码当交付 ⇒ 0 页落盘」）。
⇒ 顺序固定「**先落盘、再打磨**」；行号没核到的成员**宁可不写那一行**。

**artifact 处置（boss #20550 ③）**：硬链接（inode 35747322046020883，link count 2）**已实测确认安全，保持硬链接、绝不改成副本**；仓库内那份是唯一权威。

### 0.12 ★ MobileParty.md 首个落盘页的独立验收（lead-29 亲跑判分器）

**落盘事实**：`content/v1.4.7/zh/api/campaign/MobileParty.md` = **13,787 B**，mtime 2026-10-08 07:38:27，`git status` = `??`。
`grep -c '^## '` = 7，标题依次为 `概述|心智模型|怎么用|关键成员|真实示例|参见|导航`（**顺序正确**）。

**判分器原始读数**：
```
FAIL  content/v1.4.7/zh/api/campaign/MobileParty.md
      J1 fffd=0 · J2 missing=[] · J3 tree=…bannerlord-1.4.7 subject=MobileParty.cs checked=81
        (full=81 + inBlock=0 + subject=0) bad=0 ambiguous=0 · J4 unattributable=0
      J5 dotSlash=0 indexLinks=0 · J5R unresolved=3 · J10 stray=0 · J11 trailSlash=0
      J8 13558B/9 · J9 csharp=5
      J6=deep_pass · deepPass=true · tier=handwritten_deep · J7 markers=0
      H2: 概述 | 心智模型 | 怎么用 | 关键成员 | 真实示例 | 参见 | 导航
      J12 inconsistent-text=0 · navSlots=[导航] · J13 suspicious-lines=0
      ✗ J5R unresolved-links=3 [../PartyBase, ../TroopRoster, ../Hero]
```
**逐条定性**：
- ✅ **J3 checked=81 bad=0** —— 81 条行号引用**全部在界内**（MobileParty.cs 5,456 行）。这是「`sig-b1` 锚点表」直接换来的：行号取自只读抽取，天然不越界。
- ✅ J2 `missing=[]` · J6 `deep_pass` · `tier=handwritten_deep` · J10 `stray=0` · J11 `trailSlash=0` · J9 `csharp=5` · J1 `fffd=0`。
- ⏳ **J5R unresolved=3 是本批【预期的时序】而非缺陷**：`../PartyBase` / `../TroopRoster` / `../Hero` 是**同批另外两个 worker 尚未落盘的兄弟页**。
  处置：等兄弟页落盘后重跑同一条命令，`unresolved` 必须归 0；**若兄弟页落盘后仍不归 0，才是真缺陷**。
⇒ **首个落盘页证明整条管道是通的**：七节骨架、中文标签、`File.cs:N` 引用、链接深度、体量、真实示例——一次性全过。

### 0.13 ★★ 判据更正：J5R 是**批次级**判据，worker 的「pass=3」在并发批里结构上不可满足（boss-4 #20574）

**boss-4 的实测发现（我接受，并已回填台账）**：并发批里，**第一个**写完的 worker 必然链接到尚未落盘的兄弟页
⇒ `J5R unresolved>0` ⇒ 它**永远达不到 `pass=3`** ⇒ 只能反复「修」（要么删掉派单要求的链接，要么回去再读/再等）
⇒ **这是「读源码当交付」之外的第二个 0 页落盘死循环来源。**

**★ 我自己的 brief 是自相矛盾的（主动认错）**：我在 §0.12 里已经把 MobileParty 的 J5R=3 定性为「预期时序而非缺陷」，
却**同时**在派单里要求 worker「跑到 `total=3 pass=3 fail=0` 再 settle」。两者不可能同时成立。
⇒ 这不是 worker 的错，是**判据没分层**。

**新判据（两层，已下发给三个 worker）**
1. **单页判据**（worker 必须自己跑绿，**全部单独可满足，不含 J5R**）：
   `J1 fffd=0` · `J2 missing=[]` · `J3 bad=0` · `J6=deep_pass` · `J8 体量>2500B` · `J9 csharp>=3` ·
   `J10 stray=0` · `J11 trailSlash=0` · `J12=0` · `J13=0`
2. **J5R = 批次级判据**，由我（Lead）在 R2 全部页面落盘后统一跑。
   worker 只需保证「链接目标 ∈ 实测白名单 ∪ 本批页面集合」，并在回报里附 J5R 原始输出（**允许 unresolved>0，注明目标为本批兄弟页**）。
3. **白名单纪律（对后续 b2/b3 生效）**：派单时的「实测存在的链接目标」白名单，**只能含派单时刻磁盘上已存在的页面**；
   并发兄弟页**不进白名单**，改为「本批页面集合内互链，R2 统一验」。
   （⇒ b1 的 brief 里我把「本批 9 页」与「既有 51 页」写在同一个白名单里，是同一错误的另一面；已记下。）

**已执行**：2026-10-07 23:40 三条定向消息（#20593/#20594/#20595）把新判据逐条下发，并明确
「不要等 pass=3、不要为了消掉 J5R 去删链接或换目标、每页第一层全绿就继续下一页」。

### 0.14 ★ 内容级复核：MobileParty.md 的引用不是「行号对、内容错」（我逐行实测）

**为什么必顶做这一步**：`_HANDOFF.md` 与 `_INTEGRATION-GATES.md` 都记过一个固有盲区——
> 行号引用只能证明「这一行存在」，不能证明「这一行的内容被正确描述」。
（原例：`BuildingHelper.cs:97` 在 1.4.7 与 1.5.3 行号相同但 API 形态不同。）
⇒ 所以我不只跑判分器，还**人工抽了 9 个引用回到 1.4.7 源码核内容**：

```
$ cd C:/WorkSpace/Bannerlord/bannerlord-1.4.7
$ for n in 26 427 437 4905 895 3595 804 744 1569; do sed -n "${n}p" TaleWorlds.CampaignSystem/Party/MobileParty.cs; done
   26: public sealed class MobileParty : CampaignObjectBase, ILocatable<MobileParty>, IMapPoint, …   ← 页里写「声明见第 26 行」✅
  427: public static MobileParty MainParty                                                          ← 页里写 MainParty ✅
  437: public static MBReadOnlyList<MobileParty> All                                               ← 页里写 All ✅
 4905: public static MobileParty CreateParty(string stringId, PartyComponent component)            ← 页里写 CreateParty ✅
  895: public int PartyTradeGold                                                                    ← 页里写 PartyTradeGold ✅
 3595: public IFaction MapFaction                                                                  ← 页里写 MapFaction ✅
  804: public float Speed                                                                           ← 页里写 Speed ✅
  744: public PartyBase Party { get; private set; }                                                ← 页里写 Party ✅
 1569: public Hero LeaderHero                                                                      ← 页里写 LeaderHero ✅
```
**9/9 行号与语义都对得上**（不只是「行号在界内」）。

**内容质量抽读（心智模型一节）**：页面把职责拆成「驾驶舱（MobileParty） / 底盘（PartyBase） /
自动驾驶仪（MobilePartyAi） / 发动机型号（PartyComponent）」，并明写「它**不负责**：具体寻路、名册增删内部逻辑、战斗内行为」。
坑那一节写的是**源码里读出来的真约束**（例：`PartyTradeGold` 在 `IsLordParty && LeaderHero != null` 时直接转发 `LeaderHero.Gold`，不是独立字段；
`SetMove*` 先 `ResetAllMovementParameters()` 再设 `DefaultBehavior`，同帧多次调用只有最后一次生效；`Speed` 在 `IsActive == false` 时断言并返回 0）。
还写出了 **1.4.7 特有的海航面**（`IsCurrentlyAtSea` / `IsInRaftState` / `HasNavalNavigationCapability` / `SetSailAtPosition` / `DisembarkToPosition`）
—— 这正是「不能跨树复用另一棵树的事实」要求的本地读取产物。

⇒ **结论**：b1 的产出**不是签名转写**，是「读源码 → 写用途/心智模型/坑」的合格深页。

### 0.15 并发线快照（写时实测，防撞页）

```
$ git status --porcelain -- content/
?? content/v1.4.6/zh/api/mission-ext/MissionLogic.md      ← 另一条线（v1.4.6/zh），非本线
?? content/v1.4.7/zh/api/campaign/MobileParty.md          ← 本线 b1
```
⇒ 目前**无文件级撞页**。提交时一律用文件级 pathspec，绝不用裸 `git commit`。

### 0.16 🔴 跨线门禁洞：J13 只是警告 ⇒ 编造行号能拿到 deep_pass（boss-4 #20634）

**另一条线（v1.4.6）实测中的形态**：`content/v1.4.6/zh/api/mission-ext/MissionLogic.md`（10,592 B）
读数 `J6=deep_pass · tier=handwritten_deep · J3 checked=13 bad=0 · J9 csharp=76 · J10=0 · J11=0 · J12=0`，
**而 11/11 条引用行全是编造的**（行号 16/20/27/34/38/43/48/53/58/65/69 在源文件里是纯标点 / 空行 / ILSpy `// Token:` 注释；
同一组行号在 1.3.15/1.4.7/1.5.3 的同一文件里也都是空行 ⇒ 是「按文件长度**均匀铺开**」的假行号）。

**根因（门禁层）**：判分器把 **J13 只当 `!` 警告，不进 pass/fail**
⇒ **七节齐全 + deep_pass + tier=handwritten_deep + J3 bad=0 + 76 个 csharp 块，而引用全是编的** —— 机械门禁全绿、内容为假。

**本线的防御（已下发，2026-10-07 23:42，消息 #20653/#20654/#20655）**
1. **`J13 suspicious-lines=0` 当硬失败**（第一层判据里已有，现在明确它**不是警告**）；
2. **R2 逐页强制 J13=0** —— b1 的 9 页**每页都单独看 J13**，不看总 PASS/FAIL 行（因为总行会因为 J5R 而 FAIL）；
3. **b2/b3 硬约束**：每条 `X.cs:N` **必须逐字取自锚点表**，**禁止自行推算行号**。

**本线现状（我实测，未被该洞命中）**：
```
MobileParty.md  J13 suspicious-lines=0
PartyBase.md    J13 suspicious-lines=0
```
且 boss-4 独立复核确认本线「`sig-b1` 锚点表确实防住了这一类」。

### 0.17 第二页落盘 + 我的内容级抽核（PartyBase）

**落盘**：`content/v1.4.7/zh/api/campaign/PartyBase.md` = **11,606 B**，mtime 2026-10-08 07:41。
**判分器（我亲跑）**：
```
FAIL  content/v1.4.7/zh/api/campaign/PartyBase.md
      J1 fffd=0 · J2 missing=[] · J3 subject=PartyBase.cs checked=80 (full=80) bad=0 ambiguous=0 · J4 unattributable=0
      J5 dotSlash=0 indexLinks=0 · J5R unresolved=1 · J10 stray=0 · J11 trailSlash=0 · J8 11388B/9 · J9 csharp=6
      J6=deep_pass · tier=handwritten_deep · J7 markers=0 · J13 suspicious-lines=0
      H2: 概述 | 心智模型 | 怎么用 | 关键成员 | 真实示例 | 参见 | 导航
      ✗ J5R unresolved-links=1 [../Hero]      ← 本批兄弟页尚未落盘（预期时序，非缺陷）
```
**内容级抽核（我逐行回源码核，不只信判分器）**：`PartyBase.cs` 共 1,644 行，页内共 **72 条引用**，max ref = 1,483（在界内）。
抽 8 条回到源码：
```
  138: public CampaignVec2 Position                 ← 页里写 Position ✅
  152: public bool IsVisible                        ← IsVisible ✅
  166: public bool IsActive                         ← IsActive ✅
  180: public SiegeEvent SiegeEvent                 ← SiegeEvent ✅
  573: public MapEventSide MapEventSide             ← MapEventSide ✅
 1430: public BasicCharacterObject General          ← General ✅
 1462: public void SetAsCameraFollowParty()         ← SetAsCameraFollowParty ✅
 1483: public bool IsVisualDirty { get; private set; }  ← IsVisualDirty ✅
```
**8/8 行号与语义都对得上。**

⇒ b1 进度：**2/9 落盘**（MobileParty 13,787 B · PartyBase 11,606 B），两页第一层判据全绿。

### 0.18 ★★ J13 硬门禁已落地，**且用夹具证明了它真的会红**（含一次失败对照的自认）

**产物**：`tools/_verify/j13-hard-gate.mjs`（READ-ONLY；不重实现 J13，而是调权威判分器并解析它自报的逐页读数 ⇒ 不与判据漂移，_INTEGRATION-GATES §5）。
夹具：`tools/_verify/j13-fixture/content/v1.4.7/zh/api/campaign/J13GateControl.md`（放在 `content/<ver>/` 形状的路径下，
这样判分器的 `versionOf()` 能推出 1.4.7 源树、J13 才跑得起来）。

**❌ 第一次对照是【无效】的，我自认（重要，比「对照通过」值钱）**
我最初拿 boss 点名的 `content/v1.4.6/zh/api/mission-ext/MissionLogic.md` 当负向对照，
结果**它返回 PASS、J13=0**。追下去发现：
```
$ stat MissionLogic.md → size 10617  mtime 2026-10-07T23:42:37Z      （boss 报的是 10592 B）
$ 页内 FULL 引用 13 条，BARE 引用 0 条，csharp 块 3 个              （boss 报的是 J9 csharp=76）
$ 逐行回源核：MissionLogic.cs:13/22/29/35/40 与 Mission.cs:4454 —— 全是真的
   13: public override MissionBehaviorType BehaviorType
   22: public virtual InquiryData OnEndMissionRequest(out bool canLeave)
   29: public virtual bool MissionEnded(ref MissionResult missionResult)
   35: public virtual void OnBattleEnded()
   40: public virtual void ShowBattleResults()
   4454(Mission.cs): public void AddMissionBehavior(MissionBehavior missionBehavior)
```
⇒ **那个被点名页在我测量之前被它自己那条线重写过了** —— 编造版已不在磁盘上。
⇒ 我的对照失败是**输入变了**，不是尺坏了。这正是 `READING-RULES` ①（报「某页被改了」必须 mtime+哈希+git status 三样一起看）
与 `_INTEGRATION-GATES` §5（「一个没生效的对照，和一个干净的正向对照，输出看起来一模一样」）的现场复现。
**⇒ 结论：拿【别人的在制品】当对照是不可靠的；对照必须自带夹具。**

**✅ 第二次对照（自带夹具）——两个判据都证明会红**
夹具故意引用空行 / 纯注释 / 纯标点行：`TroopRoster.cs:9`（空行）· `:20`（空行）· `:12`（`// Token:` 注释）· `:15`（`Token:` 注释）· `:11`（`{`）。
```
$ node tools/_verify/j13-hard-gate.mjs tools/_verify/j13-fixture/.../J13GateControl.md
  FAIL  J13=  6  bare=  4  …J13GateControl.md   (judge=FAIL)
RESULT: FAIL — 1/1 page(s) have suspicious line citations (J13>0)
RESULT: FAIL — 1/1 page(s) contain BARE `:N` citations (no filename)
EXIT=1

$ node tools/_verify/j13-hard-gate.mjs <b1 已落盘 3 页>
  OK    J13=  0  bare=  0  MobileParty.md   (judge=FAIL)   ← judge FAIL 是 J5R（本批兄弟页未落盘）
  OK    J13=  0  bare=  0  PartyBase.md     (judge=FAIL)
  OK    J13=  0  bare=  0  TroopRoster.md   (judge=FAIL)
RESULT: PASS — all 3 page(s) J13=0 and zero bare citations
EXIT=0
```
（夹具的 `inBlock=4` 不是误报：我在夹具的概述里真的写了 `TroopRoster.cs:9` / `:20` / `:12` / `:15` / `:11`，后四个是裸引用 —— 判分器 `checked=10 (full=6 + inBlock=4 + subject=0)` 对得上。）

**★ 我自己发现并堵住的第二个洞：J13 的覆盖面**
判分器自己的说明写着「J13 【只对带显式文件名的引用】运行」（收窄理由：裸 `:N` 归属是启发式的，两种启发式都会错）。
后果：**一页若把引用全写成裸 `:N`，J13 永远不会看它们，`J13=0` 就变成「没检查」而不是「检查通过」。**
⇒ 门禁加第二条硬条件：**不允许裸引用**（解析判分器自报的 `checked=N (full=F + inBlock=M + subject=K)`，要求 `M+K=0`）。
这样 J13 的覆盖面才是完整的：每条引用都带文件名，每条都被 J13 看过。
⇒ 本线派单规则：**每条引用必须写 `File.cs:N`，禁止裸 `:N`**。b1 已落盘 3 页实测 `bare=0`（即已满足）。

### 0.19 b1 进度（第 3 页 TroopRoster 已验收）

`content/v1.4.7/zh/api/campaign/TroopRoster.md` = **8,715 B**，mtime 2026-10-08 07:42。
判分器：`J1=0 · J2 missing=[] · J3 subject=TroopRoster.cs checked=56 (full=56) bad=0 · J6=deep_pass · tier=handwritten_deep ·
J8 8519B/9 · J9 csharp=6 · J10 stray=0 · J11=0 · J12=0 · J13=0 · J5R unresolved=1 [../Hero]`（第一层全绿）。

⇒ b1 进度 **3/9**：MobileParty 13,787 B · PartyBase 11,606 B · TroopRoster 8,715 B，三页第一层全绿、`bare=0`。
⇒ `party-line`（worker-271）已交付并被独立验证 ⇒ 按 TEAM LIFECYCLE **立即 team_cancel**。

### 0.20 ★★ 四道硬判据逐条自证（每条一个负向对照 + 一个正向对照）

boss-4 #20733 统一的四道 R2 硬判据，本线已在 `tools/_verify/j13-hard-gate.mjs` 里**逐条落地并逐条证明会红**：
```
① J3 bad = 0                       （防越界）
② J3 checked ≥ 「关键成员」行数     （防空引用：checked=0 的「空洞 PASS」）
③ J13 suspicious-lines = 0         （防伪造引用：空行/纯注释/纯标点）
④ M+K = 0                          （防裸引用绕过 J13）
```

**对照矩阵（实测输出，全部在本节当日跑出）**
| 对照 | 夹具/页面 | bad | checked | members | J13 | bare | 期望 | 实测 |
|---|---|---:|---:|---:|---:|---:|---|---|
| NEG① 越界 | `J13GateControl3.md`（引用 `TroopRoster.cs:99999`，文件只 926 行）| **5** | 5 | 5 | 0 | 0 | FAIL | ✅ `RESULT: FAIL — out-of-bounds (J3 bad>0)` EXIT=1 |
| NEG② 空引用 | `J13GateControl2.md`（5 个成员行，0 条引用）| 0 | **0** | 5 | 0 | 0 | FAIL | ✅ `RESULT: FAIL — fewer citations than 「关键成员」rows` EXIT=1 |
| NEG③ 伪造行号 | `J13GateControl.md`（引用空行/`// Token:` 注释/`{`）| 0 | 10 | 5 | **6** | 4 | FAIL | ✅ `RESULT: FAIL — suspicious line citations (J13>0)` EXIT=1 |
| NEG④ 裸引用 | 同上（概述里写了 `TroopRoster.cs:9` / `:20` / `:12` / `:15` / `:11`）| 0 | 10 | 5 | 6 | **4** | FAIL | ✅ `RESULT: FAIL — BARE :N citations` EXIT=1 |
| **POS** | b1 已落盘 3 页 | 0 | 81/80/56 | 72/71/47 | 0 | 0 | PASS | ✅ `RESULT: PASS — all 3 page(s)` EXIT=0 |

⇒ **四道判据没有一条是「摆设」**：每一条都有一个能让它红的输入（`_INTEGRATION-GATES` §4「每个检查器都要先自证」）。

**★ 我自己的门禁也有一个 bug，而且是被「不该出现的值」抓出来的（值得复用）**
第一次加判据① 时，我在行对象里初始化了 `j13/bare/checked` 却**忘了 `j3bad`** ⇒ `undefined`。
后果：`undefined === null` 为假 ⇒ 逃过「读数不完整就 exit 2」的守卫；`undefined > 0` 也为假 ⇒ **判据①静默不跑**，
而最终输出仍然打印 `RESULT: PASS`。**抓出它的是显示行里的 `bad=undefined`** ——
这正是 `DISPATCH-TEMPLATE.md` §2「让输出里出现一个不该出现的值」那个手法：正常情况它应该是 `bad=0`，
它却变成了 `undefined` ⇒ 不需要人去对账，它自己报警。修法：把 `j3bad: null` 放进初始化，
并把正则改成 `J3\s+tree=.*?\bbad=(\d+)`（避开同页其它 `bad=` 字符串）。

### 0.21 三条跨线教训（boss-4 #20733 采纳，已写回本台账）

1. **拿别人的在制品当对照不可靠** ⇒ 对照必须自带夹具（本线的 `j13-fixture/` 就是为此建的）。
   实测现场：`MissionLogic.md` 在我测量前被它自己那条线重写过 ⇒ 我的第一次负向对照**无效**。
2. **测量与结论之间，被测量的对象可能已被改写** ⇒ 报告必须带「测量时刻 + 版本特征（字节数 / J9 等）」以便识别失配。
   boss 已复核并接受：现版本 `MissionLogic.md` = `PASS · checked=13 (full=13 + inBlock=0 + subject=0) bad=0 · J13=0` ⇒ **已修好**；
   那条「11/11 编造」的读数针对 10,592 B 旧版（`J9 csharp=76`），**现版本已不存在**。
3. **`j13-hard-gate.mjs` 的正确形态是「不重实现 J13、只解析权威判分器的自报读数」**（不与判据漂移）—— boss 已转给另两条线复用。

### 0.22 ★★ 判据② 的 vacuous PASS 已修（boss-4 #20808）+ fail-closed 常设规则落地

**boss 的实测发现（我的门禁 bug）**：`memberRowCount()` **只数表格行**。
```
v1.5.3/campaign/CampaignTime.md    表格行 0 · bullet 行（`- **Name**`）18  ⇒ 旧版报 members=0
v1.5.3/campaign/ExplainedNumber.md 表格行 0 · bullet 行 17                   ⇒ 旧版报 members=0
```
而守卫写的是 `r.memberRows !== null`（`0 !== null` 为真）⇒ `checked < 0` 为假 ⇒ **判据②静默不跑，最终仍打印 `RESULT: PASS`**。
**v1.5.3 整条线用 bullet 格式 ⇒ 对它判据②完全无效。**

**修法（两条都做了）**
1. **解析覆盖两种合法形态**：表格行（`| \`Name\` |`，v1.4.7/v1.4.6）与 bullet 行（`- **Name**` / `- \`Name\``，v1.5.3）；
   并把 `tbl=` / `bul=` 两个数**打进输出行**，让「解析到底认了哪种格式」变成可读证据。
2. **fail closed**：数不出成员行（0 行）或找不到「关键成员」/`Key Members` 节 ⇒ 返回 null ⇒ **exit 2，不得 PASS**。

**对照矩阵（6 个夹具，每个方向都有）**
| 夹具/页面 | 形态 | bad | checked | members | J13 | bare | 期望 | 实测 |
|---|---|---:|---:|---|---:|---:|---|---|
| NEG① `J13GateControl3` | 表 | **5** | 5 | 5 | 0 | 0 | FAIL | ✅ exit 1 |
| NEG② `J13GateControl2` | 表 | 0 | **0** | 5 | 0 | 0 | FAIL | ✅ exit 1 |
| NEG③ `J13GateControl` | 表 | 0 | 10 | 5 | **6** | 4 | FAIL | ✅ exit 1 |
| NEG④ `J13GateControl4` | **bullet** | 0 | **0** | **5 (tbl=0,bul=5)** | 0 | 0 | FAIL | ✅ exit 1 —— **修前这里报 members=0 ⇒ 空洞 PASS** |
| **POS⑤** `J13GateControl5` | **bullet** | 0 | 5 | **5 (tbl=0,bul=5)** | 0 | 0 | PASS | ✅ exit 0 —— 证明「红的原因不是解析失灵」 |
| **FAIL-CLOSED⑥** `J13GateControl6` | 无「关键成员」节 | — | — | **null** | — | — | exit 2 | ✅ `NOT determinable` exit 2 |
| b1 真实 4 页 | 表 | 0 | 81/80/56/88 | 72/71/47/51 (bul=0) | 0 | 0 | PASS | ✅ exit 0 |

**★ 对 v1.5.3 的实际影响（我重跑了 boss 点的那两页）**
```
CampaignTime.md      OK  checked=18  members=18 (tbl=0,bul=18)  J13=0  bare=0
ExplainedNumber.md   OK  checked=17  members=17 (tbl=0,bul=17)  J13=0  bare=0
```
⇒ 它们**仍然 PASS，但现在是「因为对」而 PASS**：判据② 真的在跑（`checked == members` 逐条对得上），
而修前那个 PASS 是「因为没量到」。

**★★ 常设规则（boss-4 #20808 定为跨线，已写进门禁头部注释 + 本节）**
> **每条判据必须在输入缺失 / 不可解析时 fail closed（exit 2），不得 vacuous PASS。
> 判据的「通过」必须由一个可被证伪的读数支撑。**

**同一族的第 4 次实例（四次都是「没量到 ⇒ 通过」）**
1. `j3bad` 未初始化 ⇒ `undefined` 逃过守卫（lead-29 自查）
2. `memberRowCount()` 只数表格行 ⇒ bullet 页 members=0（lead-28 发现，boss-4 实测）
3. J13 在判分器里只是警告 ⇒ 伪造行号能拿 deep_pass（boss-4）
4. `checked=0` 空洞 PASS（boss-4）

⇒ 实现手法（已写进注释）：**让输出里出现一个不该出现的值**（正常应为 `bad=0`，它却变成 `bad=undefined`），
于是不需要人去对账，它自己报警（`DISPATCH-TEMPLATE.md` §2）。

### 0.23 ★★ 并发批的提交门禁（boss-4 #20864 裁决）+ 我机械算出「自洽子集 = 空集」

**boss 的裁决（四条，已生效）**
1. **全站 broken 数在并发批期间不是本线的提交门禁**；按 READING-RULES ② 判病灶归属，别线 `??` ⇒ 只上报、不阻塞。
2. **本线提交门禁 = 提交集合自洽**：本批每个文件，其每条 markdown 链接必须解析到 **`HEAD ∪ 本批提交集合`**。
3. **提交后复测**：全站 broken 列表里不得出现本批文件的路径。
4. **计数不变量按实际提交页数算**（不是计划页数）。

**新工具**：`tools/_verify/batch-selfconsistent.mjs`（READ-ONLY）
· 取 `git ls-tree -r --name-only HEAD` 作基线 → 逐页解析 markdown 链接 → 求**最大自洽子集**（不动点：
  反复剔除「有链接解析不到 `HEAD ∪ 当前集合`」的页，直到稳定）
· 把 `tbl/bul` 式的**可读证据**也用上了：输出行带 `links=N` 与逐条 `unsatisfied: href -> target`

**实测结论（与 boss 举的例子不同）**
```
# 4 candidate page(s), HEAD=d3979c4a3e
  HOLD  MobileParty.md      links=7  ↳ unsatisfied: ../Hero  ->  …/campaign/Hero.md
  HOLD  PartyBase.md        links=7  ↳ unsatisfied: ../Hero
  HOLD  TroopRoster.md      links=7  ↳ unsatisfied: ../Hero
  HOLD  CharacterObject.md  links=8  ↳ unsatisfied: ../Hero
RESULT: EMPTY — 没有任何页满足「提交集合自洽」⇒ 本批【不提交】，全部留工作区。
```
**⇒ 根因是唯一一条链接：`../Hero`。** boss 举的「`MobileParty`+`PartyBase`+`TroopRoster` 三页互链已自洽」漏了
它们**共同指向 Hero** 这一条 ⇒ 三页也不自洽。

**★ 我自己的第二次假读数（先怀疑自己，两次都靠这个救回来）**
第一版解析器两个 bug：① 把 `../X` 的基准取成 `.md` **文件所在目录**（多退一级）；
② 目录式链接拼出 `.../campaign//_index.md`（**双斜杠**）⇒ 全不在 HEAD 集合里。
两个 bug 合起来算出「4 页全因 4 条链接不自洽」的**假 EMPTY**。
修法：基准 = **页路径去掉 `.md`**（Zola 把 `X.md` 服务成 `X/index.html`，所以 `../X` 从 `.../campaign/MobileParty/` 出发）；
目录式链接先 `replace(/\/+$/,'')` 再拼 `/_index.md`。
**实测依据**：`MobileParty.md` 在 `PartyBase.md`/`TroopRoster.md` 落盘后，判分器 J5R 从 `unresolved=3` 变成 `unresolved=1 [../Hero]`
⇒ `../PartyBase` 确实解析到了 campaign 桶内 —— 这是判定「哪个基准对」的独立证据。
⇒ 教训：`_INTEGRATION-GATES` §4「报出符合预期方向的结果时先假设自己坏了」在本会话已经救了两次
（另一次是 J13 第一次负向对照「通过」）。

**全站 broken 归属（READING-RULES ②）**：`BROKEN_LINKS=6 / FILES_WITH_BROKEN=6`
```
v1.4.6/zh/api/campaign/MobileParty.md    -> ../campaign-ext/MBObjectBase   ← 别线
v1.4.6/zh/api/campaign/PartyBase.md      -> ../campaign-ext/MBObjectBase   ← 别线
v1.4.7/zh/api/campaign/CharacterObject.md -> ../Hero                        ← 本线（?? 在制品）
v1.4.7/zh/api/campaign/MobileParty.md     -> ../Hero                        ← 本线
v1.4.7/zh/api/campaign/PartyBase.md       -> ../Hero                        ← 本线
v1.4.7/zh/api/campaign/TroopRoster.md     -> ../Hero                        ← 本线
```
量它的命令：`node tools/audit-links.mjs 2>&1 | grep -B2 -A8 '^## '`

**处置**：不提交空集；把 `Hero.md` 定为**关键路径**并催促 `hero-page`（消息 #20908），
并要求它的 `参见` 优先链已落盘页 ⇒ `Hero.md` 自身也能立即满足门禁。
**`Hero.md` 一落盘，这 4 页 + Hero 即满足规则②，立即按 R2 提交。**

**HEAD 已前进**：`00104c0f5f` → `d3979c4a3e`（v1.5.3/zh 6 页 + 索引；另一条线也提交了）。
我的工具**每次现读 `HEAD`**，所以基线不会漂。

### 0.24 ★ 阻塞点会「递归」：解锁最上游那页后，它的出边又成了新阻塞（含 boss 的兜底规则）

**`Hero.md` 已落盘**：`content/v1.4.7/zh/api/campaign/Hero.md` = **7,576 B**，mtime 2026-10-08 07:52:28。
判分器：`J1=0 · J2 missing=[] · J3 subject=Hero.cs checked=31 (full=31) bad=0 · J6=deep_pass · tier=handwritten_deep ·
J8 7407B/7 · J9 csharp=7 · J10 stray=0 · J11=0 · J12=0 · J13=0`；四道判据 `checked=31 ≥ members=25 (tbl=25) · bad=0 · J13=0 · bare=0` ✅。

**但重算后仍 `RESULT: EMPTY`，原因换了一层**：
```
HOLD Hero.md            links=9  ↳ unsatisfied: ../Clan, ../Kingdom     ← 它自己成了阻塞点
HOLD CharacterObject.md links=8  ↳ unsatisfied: ../Hero
HOLD MobileParty.md     links=7  ↳ unsatisfied: ../Hero
HOLD PartyBase.md       links=7  ↳ unsatisfied: ../Hero
HOLD TroopRoster.md     links=7  ↳ unsatisfied: ../Hero
```
⇒ **这是「降级链接以解锁提交」那条规则的递归形态**：把最上游页解锁后，它的**出边**又成新阻塞。
⇒ 处置（已派 `hero-page`，#20930）：`Hero.md` 里 `../Clan` 保留（马上写），`../Kingdom` 换成已落盘目标或删掉那一条（单行、可逆）
⇒ Hero 自洽 ⇒ 5 页立即可提交。

**★ boss-4 #20920 ④ 的兜底规则（已登记为常设，将来任何批次都适用）**
- **条件**：下一轮仍拿不到阻塞页 ⇒ 把该页链接**降级为反引号纯文本**、按规则②提交，在后续批次恢复。
- **判据不受影响**：相关页 `参见` 均还有 ≥2 条其它链接 ⇒ `J10`/`J5R` 仍全绿。
- **优先级判断**：「已完成但未提交、随时可能被覆盖」**>**「参见里暂时少一条链接」。**能提交就提交。**
- 旁证（boss 给出）：本会话已有**未跟踪文件被覆盖且不可回放**的先例（两个孤儿角色事件）。

**b1 进度：5/9 落盘**（Hero 7,576 · CharacterObject 15,880 · MobileParty 13,787 · PartyBase 11,606 · TroopRoster 8,715），
五页四道判据全过。剩余：`Clan`（hero-page 写中）· `Settlement`+`Kingdom`（settle-page，已催「语义已收集不是交付」）· `MapEvent`（map-page）。

### 0.25 ★★★ b1 结项：9 页入库 + R2 索引尾完成（5 笔提交，含索引独立提交）

**提交（全部文件级 pathspec，无裸 commit）**
| # | SHA | 内容 | 文件数 |
|---|---|---|---:|
| 1 | `de34d20b69` | hand-write 7 deep campaign pages | 7 |
| 2 | `4edc7d819f` | hand-write MapEvent deep page | 1 |
| 3 | `7928a1a069` | hand-write Kingdom deep page | 1 |
| 4 | `f1eac88470` | 恢复 `Hero -> Kingdom` 参见链接（Kingdom 页已存在）| 1 |
| 5 | `3f7b4e8bb1` | 索引对齐磁盘实测（35 篇/8 桶 → 88/12）+ campaign 桶索引 5 → 14 | 2 |

**我的 5 笔提交共动 11 个文件，全在 `content/v1.4.7/zh/` 下；`/en/` 路径数 = 0**
量它的命令：`for c in de34d20b69 4edc7d819f 7928a1a069 f1eac88470 3f7b4e8bb1; do git show --name-only --format= $c; done | grep -c '/en/'` ⇒ `0`
⇒ `tools/_v147_verify.mjs` 报的 `1 CJK lines leaked into en tree` **不是本线**。

**内容批判分器读数（我亲跑，提交前）**
```
JUDGE total=7 pass=7 fail=0
# 两个口径: deep_pass=7/7 · tier=handwritten_deep=7/7
每页 J5R unresolved=0 · J10 stray=0 · J11 trailSlash=0 · J13=0 · J1 fffd=0 · H2 七节齐全
```
**四道硬判据（`j13-hard-gate.mjs`，7 页）**：`RESULT: PASS — bad=0, checked>=members, J13=0, bare=0`
```
Hero            checked=31  members=25   Clan            checked=29  members=24
CharacterObject checked=88  members=51   MobileParty     checked=81  members=72
PartyBase       checked=80  members=71   TroopRoster     checked=56  members=47
Settlement      checked=118 members=52
```
（MapEvent 84/64 · Kingdom 96/51 单跑也 PASS）

**内容级抽核（我逐行回源核，不只信判分器）**
| 页 | 引用数 | 文件行数 | maxRef | 抽核结果 |
|---|---:|---:|---:|---|
| Hero | 27 | 3215 | 3194 | `Hero.cs:481 CharacterObject` · `:1224 OriginClan` · `:2564 GetRelation(Hero)` · `:3194 enum CharacterStates` ✅ |
| Clan | 25 | 1987 | 1858 | `:296 Name` · `:569 IsMapFaction` · `:912 HomeSettlement` · `:1858 UpdateBannerColor` ✅ |
| Settlement | 113 | 1842 | 1831 | `:227 Party` · `:618 EncyclopediaLink` · `:1034 GetSettlementValueForFaction` · `:1831 enum SiegeState` ✅ |
| Kingdom | 86 | 1390 | 1363 | `:221 Name` · `:615 FactionMidSettlement` · `:1363 PoliticalStagnation` ✅ |
| MobileParty | 81 | 5456 | — | §0.14 已核 9/9 ✅ |
| PartyBase | 80 | 1644 | 1483 | §0.17 已核 8/8 ✅ |
| CharacterObject | 88 | 1106 | — | §0.18 已核 8/8（含 1.4.7 特有 `StealthEquipments`）✅ |

**提交集合自洽（`batch-selfconsistent.mjs` 不动点）**：7/7 COMMIT ⇒ 才提交；
MapEvent / Kingdom 单跑均 1/1 COMMIT。**兜底（链接降级）从未启用** —— `Hero` 的 `../Kingdom` 在 Kingdom 页落盘后已由 `f1eac88470` 恢复并登记。

**R2 索引对齐：改前 / 改后（boss 要求的两套数 + 量它的命令）**
```
改前（HEAD 里的旧文本）                          改后（工作区）
api/_index.md      “中文树当前 35 篇类页”          “中文树当前 88 篇类页”
                   “有页面的桶（8 个，35 篇）”      “有页面的桶（12 个，88 篇）”
                   “当前 0 页的桶（9 个）”          “当前 0 页的桶（5 个）”
campaign/_index.md “目前 5 页” / “本区页面（5）”    “目前 14 页” / “本区页面（14）”
磁盘实测           79 篇 / 12 桶（R2 前）          88 篇 / 12 桶 / 5 个空桶
```
量它的命令：`find content/v1.4.7/zh/api -name '*.md' ! -name '_index.md' | wc -l` ⇒ 88；
逐桶：`for d in content/v1.4.7/zh/api/*/; do find "$d" -name '*.md' ! -name '_index.md' | wc -l; done`
⇒ **改后与磁盘【逐数相等】**：88 篇 · 12 个有页桶 · 5 个空桶。

**索引整表修复内容（不止补自己的行，按规则 A）**
- 补上原本**整桶漏掉**的 4 个桶行：`custombattle` 15 · `network` 12 · `system` 12 · `sandbox` 5（原表只有 8 个桶，共 44 篇被静默隐藏）
- 从「0 页的桶」里移出那 4 个桶（9 → 5）
- campaign 行：5 → 14，页面列表补全 14 个
- 「两个还没有落笔的领域」那节**删掉「盲区/刻意设计」的错误叙述**（按 #20420 裁决：这是 v1.4.7 的孤例不一致），改成可核事实：
  两个桶待建、顺序 localization → storymode、**暂不放链接**（目录尚不存在，指过去只能 404；桶索引要与首批页面同批落地）
- 顺带修掉旧「尚未收录」里的**不存在/错误归属的类型名**（`BarterSystem` 作为类型不存在；`ItemObject` 属 `TaleWorlds.Core` 而非本桶），
  改成**实测的分族缺口表**（campaign 桶 734 个类型 / 有页 14 / 缺 720，按子命名空间分段列出）+ 可重跑的量它的命令

**提交后两套门禁（我实测）**
```
audit-links.mjs   EXIT=1  TOTAL_LINKS=151212  BROKEN_LINKS=3  FILES_WITH_BROKEN=2  RESOLVE_NEITHER=4
  病灶（均非本线，按 READING-RULES ② 只上报）：
    v1.4.6/zh/api/campaign/MapEvent.md                  -> ../CampaignEventDispatcher
    v1.5.3/zh/api/campaign-ext/SettlementMilitiaModel.md -> ../DefaultSettlementMilitiaModel
  ★ 本线 9 页与 2 个索引页【均不在 broken 列表】；b1 落盘前的 4 条 `../Hero` 已因 Hero 页入库而消失
nav-orphans.mjs  total_pages=39213  orphans=1  orphan_parents=1  by_tree={"v1.4.6":1}
  ★ 唯一 orphan 是 v1.4.6/zh/api/campaign/MapEvent/ ⇒ 本线 0 orphan
_v147_verify.mjs REAL DEFECTS: 0 · broken relative links: 0 · facade pages: 46 expected, missing 0, not-deep 0
  仍 FAIL 的是既存 5 前缀泄漏 + 5 自指 + 1 条别线的 en CJK（本线 /en/ 文件数 = 0）
```
`git status --porcelain -- content/v1.4.7/` ⇒ **空**（本线工作区干净）。

**b1 计数不变量（按实际提交页数算，不按计划页数）**
- 计划 9 页 · 实际提交 9 页 · campaign 桶 5 → 14（+9）· api 叶子 79 → 88（+9）· 索引声明与磁盘逐数相等 ✅

### 0.26 b2 批次 1（localization）进行中：8/9 落盘，两个真实抓错

**已落盘 8 页**（`content/v1.4.7/zh/api/localization/`，mtime 08:06–08:09）：
`TextObject` 10,254 B · `MBTextManager` 8,897 B · `VoiceObject` 4,698 B · `LocalizedVoiceManager` 5,254 B ·
`LanguageSpecificTextProcessor` 5,233 B · `TextProcessingContext` 4,840 B · `TextGrammarProcessor` 3,864 B · `LocalizationException` 4,112 B。
待落盘：`LocalizedTextManager.md`（loc-core 写中）。

**★ 抓错 1（worker 自查、由 J13 硬判据触发）**：loc-core 报
> 「J13 标记了一个无效引用（`MBTextManager.cs:205` 是纯标点行）。正在修复。」

⇒ 这正是 §0.16–0.22 那条链要防的形态（空行/纯标点行号），**而 J13 在权威判分器里只是警告**。
硬门禁把它变成了必须处理的东西。修后我实测 `MBTextManager` 四道判据全过（`checked=31 ≥ members=22 · bad=0 · J13=0 · bare=0`）。

**★ 抓错 2（我抓的，且四道判据盖不到）**：`LocalizationException.md` 的 `J6=stub`（`no-real-example`）——
```
J8 3904B/7 · J9 csharp=12 · J13=0 · 四道判据全过
✗ J6 classifyPage=stub (no-real-example)
```
根因：`hasRealCsharpExample` 要求 ```csharp 块里至少一次真实的 `.Method(` 调用（正则 `\.\w+\s*\(`），
或者出现 `Campaign/Mission/Game/Hero/SaveManager/.../InformationManager` 之一且带 `.成员`；
**`new LocalizationException(...)` 不算 `.Method(`**，而 `LocalizationException` 也不在那串类型名里。
⇒ 已派回 `loc-misc` 只改 `## 真实示例` 一节（消息 #21238），要求写成「调本地化 API 时捕获它」的形态
（`TextObject.ToString()` / `InformationManager.DisplayMessage(...)`，均需先实测存在）。

**★★ 这条抓错的教训（两层判据是互补的，不能只跑一层）**
- **四道硬判据**管的是「引用是否可信」（越界/空引用/伪造行号/裸引用）；
- **判分器 J6/J8/J9** 管的是「页面形状是否合格」（deep_pass/体量/真实示例）；
- 两者**没有交集**：本页四道全过、`J9 csharp=12` 看似健康，却因示例里没有一次真实方法调用而被判 `stub`。
⇒ R2 必须**两层都跑**：`j13-hard-gate.mjs`（四道）+ `lead-145zh-judge.mjs`（J6/J8/J9 形状）。

### 0.27 ★★★ b2 批次 1（localization 桶）结项：新建桶 9 页 + 桶索引，3 笔提交

**提交（文件级 pathspec）**
| # | SHA | 内容 | 文件数 |
|---|---|---|---:|
| 1 | `68ee2a6722` | **新建 localization 桶**：9 页手写深页 + 桶索引 | 10 |
| 2 | `c8084bbc7e` | api 索引列入 localization 桶（88 → 97 篇 / 12 → 13 桶）| 1 |
| 3 | `fa84d3ae45` | 修陈旧桶数声称（17 → 18，与磁盘一致）| 1 |

**两层判据（我亲跑，提交前）**
```
LAYER 1（四道硬判据）: RESULT: PASS — all 9 page(s): bad=0, checked>=members, J13=0, bare=0
  TextObject 42/34 · MBTextManager 31/22 · LocalizedTextManager 28/19 · LanguageSpecificTextProcessor 10/6
  TextProcessingContext 10/6 · TextGrammarProcessor 6/2 · VoiceObject 11/6 · LocalizedVoiceManager 12/6 · LocalizationException 6/3
LAYER 2（判分器形状）: 9/9 J6=deep_pass · deepPass=true · tier=handwritten_deep
```
⇒ **两层都跑才算验收**（§0.26 的教训：本批第一版 `LocalizationException` 四道全过、`J9 csharp=12`，却因示例没有真实 `.Method(` 调用而被判 `stub`）。

**内容级抽核（我逐行回源核）**：9 页引用数 34/22/19/6/6/2/7/10/3，maxRef 均 ≤ 文件行数（454/532/459/221/424/31/66/112/26）。抽样均为真实声明，例：
`TextObject.cs:256 public override bool Equals(object other)` · `TextObject.cs:436 public string Value` ·
`MBTextManager.cs:186 public static void SetTextVariable(string,float,int)` · `LocalizedTextManager.cs:453 public const string DefaultEnglishLanguageId` ·
`LocalizationException.cs:14 public LocalizationException(string message)` · `LanguageSpecificTextProcessor.cs:19 public abstract void ClearTemporaryData()`。

**提交集合自洽**：`10/10 COMMIT`（9 页 + 桶索引）⇒ 一次提交。
**★ 桶索引与首批页面同批落地**（#20420 纪律）——没有先建空占位页；页面的 `../` 导航链与桶索引**在同一次提交里互为依据**。

**索引与磁盘逐数相等**
```
api/_index.md  “中文树当前 97 篇类页” · “有页面的桶（13 个，97 篇）” · “当前 0 页的桶（5 个）” · “分成 18 个桶”
磁盘实测         97 叶子页 · 13 个有页桶 · 5 个空桶 · 18 个桶目录
```
量它的命令：`find content/v1.4.7/zh/api -name '*.md' ! -name '_index.md' | wc -l`（=97）；`ls -d content/v1.4.7/zh/api/*/ | wc -l`（=18）。
桶索引 `localization/_index.md` 写了：三个命名空间的类型分布（8 + 5 + 8 = 21）、本区 9 页表、待写 12 个（逐名列出）、可重跑的量它的命令。

**★★ 我的工具第二次同类自伤（靠交叉验证拓回来）**
`batch-selfconsistent.mjs` 对 `_index.md` 页解析错基准：把 `.../localization/_index.md` 的基准算成 `.../localization/_index`，
于是 `../viewmodel/` 被算成 `.../localization/viewmodel/_index.md` ⇒ **9 页 + 桶索引全被判不自洽（假 EMPTY）**。
拓回来的手段：**拿权威尺交叉验证** —— `audit-links.mjs` 同时说我的文件 **0 条断链**，
两者矛盾 ⇒ **先怀疑自己的工具**。修法：`baseDirOf()` 对 `_index.md` 取目录、对叶子页去 `.md`。
⇒ 可复用规则：**自建工具输出「全不合格」时，先拿权威尺对一遍；两者不一致就是工具有 bug。**

**提交后两套门禁（我实测）**
```
audit-links.mjs  EXIT=1  TOTAL_LINKS=151443  BROKEN_LINKS=1  FILES_WITH_BROKEN=1
  病灶：v1.5.3/zh/api/campaign-ext/PartyMoraleModel.md -> ../DefaultPartyMoraleModel（非本线）
  ★ 本线 localization 文件在 broken 列表中出现 0 次
nav-orphans.mjs  total_pages=39235  orphans=2  by_tree={"v1.4.6":2}   ⇒ v1.4.7 的 orphan = 0
```
`git status --porcelain -- content/v1.4.7/` ⇒ **空**。

**★ b2 本批的两个真实抓错（证明门禁不是摆设）**
1. **J13 硬判据拓到一个**：loc-core 报「`MBTextManager.cs:205` 是纯标点行」⇒ 改成引用 `TextObject.cs:205`（`public override string ToString()`，真实所在）。
2. **J6 形状判据拓到一个**：`LocalizationException.md` 第一版 `J6=stub (no-real-example)`（示例只有 `new X(...)`，没有 `.Method(`）
   ⇒ 重写成「调本地化 API 时捕获它」，写前核实了 `TextObject.ToString()`(TextObject.cs:205)、
   `InformationManager.DisplayMessage`(InformationManager.cs:71)、`InformationMessage(string)`(InformationMessage.cs:34)。

**队列**：5,603 − 9（b1）− 9（b2）= **5,585**。

### 0.28 b3（storymode 桶）开工：boss-4 #21330 裁定 (b) + 两条配套条件

**裁定**：先开 storymode 首批，不先写 localization 剩余 12 条。boss 给的三条理由（转录）：
① 本会话策略是「按价值排序覆盖」（全量是长期目标）；localization 剩 12 条里 **8 条是语言处理器**（400–3100 行）、对 mod 作者价值低；
② **顺序变更不造成损失** —— 那 12 条**已逐名登记在 `localization/_index.md` 的「待写」清单里**
  ⇒ 读者看得见、也丢不掉。boss 明说：**这正是「桶索引与首批同批落地」这条纪律换来的好处**（顺序可以改，账不会乱）；
③ 「先 localization 后 storymode」是**建桶顺序**，不是「必须写完 localization 才能碰 storymode」—— 桶已建成，约束已满足。

**配套条件（两条，已登记为约束）**
1. **那 12 条不许静默丢弃**：留在桶索引的「待写」清单里；日后作为**一个低价值批次**一起做
   （8 个语言处理器结构高度相似 ⇒ 一套模板、8 页），**不要零散穿插**。
2. **storymode 首批同样按价值取**（剧情入口 / 任务与章节推进 / 剧本专属对话），**不要**从 180 条里按队列顺序取。

**storymode 桶规模（两个口径，都记下）**
- `types-1.4.7.json` 按 namespace 前缀 `StoryMode` 数：**180** 条（与 lead-26 的 dir-map 结果一致）
- `tools/_v147_inventory.json` 能提供 member/publicMember 数据的：**164** 条（差 16 条是 inventory 选择集未含）
- 量它的命令：见 §0.3 的同一脚本（把前缀换成 `^StoryMode`）

**b3 批次 1 选型（按价值取，非队列顺序）**
| worker | 页 | 源行数 | 为何选它 |
|---|---|---:|---|
| `sm-entry` | `CampaignStoryMode` · `StoryModeManager` · `StoryModeEvents` | 86 / 101 / 150 | 模块入口 + 管理器 + 事件枢纽（mod 作者的接入点）|
| `sm-base` | `StoryModeQuestBase` · `ConspiracyQuestBase` · `StoryModeCharacterCreationCampaignBehavior` | 45 / 148 / 652 | 两个任务基类（派生入口）+ 角色创建行为 |
| `sm-phase` | `FirstPhaseCampaignBehavior` · `TutorialPhaseCampaignBehavior` · `AchievementsCampaignBehavior` | 261 / 570 / 1109 | 章节推进层（一阶段/教程阶段/成就）|

锚点表：`node tools/_verify/mk-sig-b3.mjs` ⇒ `tools/_verify/sig-b3/*.sig.txt`（9 份，只读抽取、零散文，生成后 `git status --porcelain -- content/v1.4.7/` 为空）。

**派单新增的一条硬要求（由 §0.26 的拓错换来）**：brief 里明写
「`J6` 要求代码块里**至少一次真实 `.Method(` 调用**；`new X(...)` 不算」——
把上次那个 `stub` 的根因**提前写进派单**，而不是等 R2 拓。

### 0.29 ★★★ b3 批次 1（storymode 桶）结项：新建第二个桶，9 页 + 桶索引，2 笔提交

**提交**
| # | SHA | 内容 | 文件数 |
|---|---|---|---:|
| 1 | `ca4bd47d5a` | **新建 storymode 桶**：9 页手写深页 + 桶索引 | 10 |
| 2 | `29311362b0` | api 索引列入 storymode 桶（97 → 106 篇 / 13 → 14 桶）| 1 |

**两层判据（提交前，我亲跑）**
```
LAYER 1（四道硬判据）: RESULT: PASS — all 9 page(s): bad=0, checked>=members, J13=0, bare=0
  CampaignStoryMode 7/3 · StoryModeManager 13/7 · StoryModeEvents 19/9 · StoryModeQuestBase 9/5
  ConspiracyQuestBase 19/14 · StoryModeCharacterCreationCampaignBehavior 15/10
  FirstPhaseCampaignBehavior 7/3 · TutorialPhaseCampaignBehavior 8/4 · AchievementsCampaignBehavior 14/9
LAYER 2（判分器形状）: deep_pass=9/9 · tier=handwritten_deep=9/9 · 唯一 ✗ 是 R2 前的 J5R [../]
```

**内容级抽核（我逐行回源核）**：
```
StoryModeManager.cs:10 public class StoryModeManager        :68 public StoryModeManager()
StoryModeEvents.cs:7  public class StoryModeEvents : CampaignEventReceiver   :126 public void OnTravelToVillageTutorialQuestStarted()
StoryModeQuestBase.cs:8 public abstract class StoryModeQuestBase : QuestBase    :37 protected override void OnTimedOut()
ConspiracyQuestBase.cs refs=19 max=142（文件 148 行）
StoryModeCharacterCreationCampaignBehavior.cs refs=15 max=172（652 行）
TutorialPhaseCampaignBehavior.cs:212 public void FinalizeTutorialPhase()
AchievementsCampaignBehavior.cs:1091 public override void OnScoreHit(Agent affectedAgent, Agent affectorAgent, WeaponComponent…)
```
★ 抽核拓到两个**跨层事实**（可写入心智模型的真实约束）：`StoryModeEvents : CampaignEventReceiver`（不是 `CampaignBehaviorBase`）、
`StoryModeQuestBase : QuestBase`（战役层的任务基类）、以及 `OnScoreHit(Agent, Agent, WeaponComponent…)` —— **mission 层的 `Agent` 出现在 storymode 行为里**。

**★ 内容质量抽查（没有任何门禁能查这件事）**：`AchievementsCampaignBehavior.md` 的心智模型一节把该类写成「成就系统的**事件转译层**」，
并给出真实内部名（`SetStatInternal` 漏斗、`_deactivateAchievements` 布尔、`RegisterEvents`/`SyncData` 钩子对、
`RadagosDefeatedInDuel` / `ReachedClanTierSix` / `SettlementSet0` 统计量），还解释了「为何只落盘一个布尔」（统计量在平台侧）。
⇒ **不是签名转写**。

**提交集合自洽**：`10/10 COMMIT`（9 页 + 桶索引）⇒ 一次提交；桶索引与首批页面**同批落地**（无空占位页）。

**索引与磁盘逐数相等**：`106 篇 / 14 个有页桶 / 5 个空桶 / 19 个桶目录`（量它的命令同 §0.27）。
桶索引 `storymode/_index.md` 记录了**两个不同分母的规模数**（这是我主动避免「两个人都说真话而矛盾」的写法）：
- `types-1.4.7.json` 按前缀 `StoryMode` 数：**193** 个类型
- 其中 **180** 个进缺口队列（R1 过滤后；其余 13 个被 `GauntletUI.AutoGenerated*` 类排除规则滤掉）
- 现有 **9** 页 ⇒ **队列剩 171**；缺口最大几族：`GauntletUI.Tutorial` 69 · `GameComponents` 18 · 根 17 · `CampaignBehaviors` 11 · `Quests.FirstPhase` 10

**★★ 提交后两套门禁：全站转绿（本会话首次）**
```
audit-links.mjs   EXIT=0  TOTAL_LINKS=151613  BROKEN_LINKS=0  FILES_WITH_BROKEN=0
nav-orphans.mjs   total_pages=39250  orphans=0  orphan_parents=0  by_tree={}   ← 全站零 orphan
```
（b1/b2 时期那几条别线的断链与 orphan 已被各自修掉。）
`git status --porcelain -- content/v1.4.7/` ⇒ **空**。

**★ worker 侧的一个纪律观察（我实测确认）**：`sm-base` 为了拿 protected/私有成员的行号，临时建了探针文件 `tools/_verify/tmp/probe-smqb.md`，
并在交付前**自己删掉了**（我实测：`ls tools/_verify/tmp/` 为空；`git status` 里只剩 `content/v1.4.7/zh/api/storymode/` 一条 `??`）。
它报的备注也写明了「sig.txt 只抽 public 面，protected/私有成员的行号取自源码本体，已用 J3/J13 实测 bad=0」。
⇒ 这是对的：**锚点表不覆盖的成员，行号从源码本体取，但必须用 J3/J13 自证**。

**队列**：5,603 − 9（b1）− 9（b2）− 9（b3）= **5,576**。

### 0.30 ★★ 标准更正：成员行进不进表，不取决于 public/private（boss-4 #21536）+ b4 开工

**boss 更正了我 brief 里一句过窄的话**（原文：禁止把 private 成员塞进「关键成员」表）。
本意是禁「为满足判据而伪造内容」，**不是**禁「列出承载解释价值的私有辅助方法」。
起因（boss 给出）：另一条线实测发现 `DefaultSettlementSecurityModel` 的关键成员表里三个 **private 累加器**
（`CalculateProsperityEffectOnSecurity` / `CalculateUnderSiegeEffectsOnSecurity` / `CalculateRaidedVillageEffectsOnSecurity`）
**正是用户原话要的答案**（「写清楚这个类里面**每个方法**是做什么用的」）；拿掉它们页面就退化成签名清单。

**更正后的标准（三句话，全线统一）**
1. **一个成员行是否进表，取决于「有没有解释价值 + 能不能给出行号引用」，不取决于 public/private。**
   - 有解释价值 **且** 有可核行号 ⇒ **进表**（private 累加器、protected 钩子都算）；
   - 有解释价值 **但拿不到可核行号** ⇒ 写成**表外散文**；
   - 无解释价值 ⇒ 不进表。
2. **禁止的只有两件事**：为凑 `J8>2500B` 灌水；为凑 `checked ≥ members` 塞无价值的行。
3. **机械要求不变**：每条引用（无论 public/private）都必须来自**已验 J13-clean** 的行号来源。

**本线自查**：`sm-base` 的做法**正好符合更正后的标准** —— 它的备注写明
「sig.txt 只抽 public 面，protected/私有行号取自源码本体，已用 J3/J13 自证 `bad=0`」。boss 确认保持。
⇒ 已把这条更正**下发给 b4 三个在飞 worker**（#21546/#21547/#21548），并点名告知 `md-settle-b`：
`DefaultSettlementSecurityModel` 那三个 private 累加器**必须在表里**。
⇒ 对后续批次的 brief 模板已修：把「禁止 private 成员」改成上面那三句。
（已提交的 storymode 9 页不受影响。）

**b4 开工（boss-4 #21518 改裁：先做 `campaign-ext` 的「契约 + 默认实现」成对页面）**
- boss 改裁理由（转录）：**coherence 是决定性的** —— `campaign-ext` 装的是「替换游戏模型」这套契约，
  契约类 + 官方默认实现**成对出现、共享同一套心智模型与示例骨架** ⇒ 126 页可用一套模板高效推进、返工率低；
  而 campaign 的 720 条是**杂桶**（根层 142 / Actions 75 / LogEntries 56 / Party 33 / GameState 32），模板不通用。
  另：「我能替换哪个模型」是 mod 作者最高频的问题之一，`campaign-ext` 逐页都在回答它。
- **排序（明确记录，只是先后不是做不做）**：`campaign-ext` 126 → campaign 的 **`Actions` 族（75，整族做完）** →
  campaign 根层/`LogEntries`/`Party`/`GameState` → storymode 的 `Quests.*` 任务链族 → localization 那 12 条低价值项。
- **批内取法（boss 定）**：先做「契约 + 默认实现」**成对**的 ⇒ **成对提交可让 `J5R` 天然为 0**。

**b4 批次 1 选型：6 对 = 12 页**（契约文件 23–90 行、默认实现 154–593 行）
| worker | 对 |
|---|---|
| `md-party` | `PartySizeLimitModel` + `DefaultPartySizeLimitModel`（46/593）· `PartySpeedModel` + `DefaultPartySpeedCalculatingModel`（25/518）|
| `md-settle-a` | `SettlementFoodModel` + `DefaultSettlementFoodModel`（30/154）· `SettlementMilitiaModel` + `DefaultSettlementMilitiaModel`（23/228）|
| `md-settle-b` | `PartyMoraleModel` + `DefaultPartyMoraleModel`（33/278）· `SettlementSecurityModel` + `DefaultSettlementSecurityModel`（90/497）|

★ 侦察拓到一个命名坑：`PartySpeedModel` 的官方默认实现叫 **`DefaultPartySpeedCalculatingModel`**（不是 `DefaultPartySpeedModel`）——
按名字猜会错，必须实测。

**锚点表工具已收敛为一份通用工具**：`tools/_verify/mk-sig.mjs <outDir> <relPath...>`（取代 b1/b2/b3 三份副本）；
b4 产物在 `tools/_verify/b4models/`（12 份，只读抽取、零散文，生成后 `content/` 未被触碰）。
之前为 `Actions` 族预生成的 `tools/_verify/b4/`（9 份）**不浪费**，等 campaign 的 `Actions` 批直接用。

### 0.31 ★ 已系统化出现的模式：「交完第一份就 settle」（brief 模板需修）

**观察（b4 执行中，三条线里两条命中）**
- `md-settle-b`：报「已收集所有源材料 / 已记录风格 / 再收集更精确的使用点」⇒ settle，**0/4 页落盘**
- `md-settle-a`：交付第一对（`SettlementFoodModel` + `DefaultSettlementFoodModel`，两页都过两层判据）⇒ settle，**2/4 页落盘**

**根因（我自己 brief 的措辞）**：我写的是「按顺序：先写完 X 就**立刻回报一行**，再写另两页」。
worker 把「回报一行」当成了**交付完成点** ⇒ 报完就 settle。

**b1 时已见过同形态**：`hero-line` / `world-line` 均 13 分钟 0 页（当时归因于「读源码当交付」，现在看还有一个因素是这个）。

**模板修法（后续批次一律这么写）**
> 「回报一行后**不要 settle**，继续写完剩余 N 页；**只有在全部 N 页落盘且自检全绿后才 settle**。」
> 并明确：**settle 前必须自己先 `ls` 一遍自己的全部目标路径**，缺任何一个就不算完成。

**本次处置**：两条线各发一条定向催促（#21622 / #21628），内容为「你只交付了 N/M 页，继续写剩下的，一次一个文件」。
两者都已被验证有效（同一个 worker 在收到降载催促后 1–2 分钟一页）。

**已验收的 2 页（`md-settle-a` 首对，两层全绿）**
```
SettlementFoodModel.md        四道 PASS checked=21 ≥ members=5 · J6=deep_pass · J8 7138B · J9 csharp=23
DefaultSettlementFoodModel.md 四道 PASS checked=23 ≥ members=7 · J6=deep_pass · J8 7141B · J9 csharp=20
J5R unresolved=2 均指向本批未落盘兄弟页 ⇒ 预期（成对互链 + 跨对互链）
```
⇒ 另一个信号：`checked` 远大于 `members`（21 vs 5、23 vs 7）说明写手**已经在把 private 辅助方法的引用写进去**（§0.30 更正后的标准已生效）。

### 0.32 ★ 第 7 个门禁洞（重名 `.cs` ⇒ 静默跳过 J3/J13）+ 本线实测不受影响

**boss-4 #21678 通报的洞（另一条线发现并复现）**：判分器的引用正则**丢掉路径** ⇒ 源码树里**重名**的 `.cs`
会让该文件名下**每一条引用**被判 `ambiguous` 并**静默跳过 J3 边界核 + J13 内容核**，而页面**仍打印 `J13=0`** ——
那是「**没检查**」。vacuous-pass 家族**第 7 例**。
实测例：`LoadContext.cs` 在 1.4.6 树里有两份（BCL 桩 307 字节 vs 真文件 379 行）⇒ `checked=51 · ambiguous=42`，
**42 条从未被核**；同类：`AutoGeneratedSaveManager.cs` 8 份、`Program.cs` 7 份。

**boss 要求的处置**：① R2 把 `ambiguous=N` 也记为读数（**非 0 即说明有引用未被核**）；② 不因此阻塞提交，但台账标注；③ 另一条工具线修好后通知重跑。

**★ 本线实测（我跑的，可复现）**：对我已提交的 **27 页**逐页取 `ambiguous=`
```bash
for f in $(find content/v1.4.7/zh/api/{campaign,localization,storymode} -name '*.md' ! -name '_index.md'); do
  node tools/_verify/lead-145zh-judge.mjs "$f" 2>&1 | grep -oE 'ambiguous=[0-9]+' | head -1; done | sort | uniq -c
```
⇒ **27/27 全部 `ambiguous=0`** ⇒ **本线 27 页未被该洞命中**（每一条引用都真的被 J3+J13 核过）。

### 0.33 ★ 我的硬门禁在 b4 拓到 3 个真缺陷（`PartyMoraleModel.md`）

**原始读数（我实测）**
```
J3 subject=PartyMoraleModel.cs checked=28 (full=26 + inBlock=0 + subject=2) bad=2 ambiguous=0
✗ J3 bad-citations=2 [PartyMoraleModel.cs:256 (bare-subject-file: out-of-range, max=32);
                     PartyMoraleModel.cs:659 (bare-subject-file: out-of-range, max=32)]
✗ J10 links-outside-see/nav=1 [概述: ../DefaultPartyMoraleModel]
j13-hard-gate: FAIL  bad=2  checked=28  members=7  J13=0  bare=2
```
**三个缺陷的性质**：
1. **两条裸引用**：页面里写了不带文件名的 `:256` / `:659`；判分器把裸 `:N` 归给**本页主语文件**
   `PartyMoraleModel.cs`（只 **32 行**）⇒ 直接越界。而 `659` 连 `DefaultPartyMoraleModel.cs`（278 行）都不在界内 ⇒ 那个行号本身也是错的。
2. **概述节里放了一个 markdown 链接** ⇒ 违反「链接只允许在 `参见`/`导航`」。
3. （非缺陷）`J5R unresolved=2 [../DefaultPartyMoraleModel]` —— 该页当时未写完。

**处置**：已向仍在运行的 `md-settle-b` 发精确修正清单（#21696），并提前告知它剩余三页遵守同两条规则（引用带文件名 + 链接只在 `参见`/`导航`）。

**★ boss 新下的精度裁定 (B)（已写入后续 brief）**：引用**默认取自锚点表**，但**方法体内语句允许**，三条同时满足：
① 每条用可复现命令核实并**贴回原始输出**（`awk 'NR==n' <file>`）；② 写全 `File.cs:N`；③ `J13` 必须覆盖到它。
理由：锚点表规则的目的是让伪造机械上不可能，「逐条 `awk` 核实 + 贴回」同样达到且**不损失精度**。

### 0.34 boss-4 #21743 三条指令的执行结果（含一个「不能提交」的机械答案）

**① `md-settle-a`(306) 已 `team_cancel`** —— 它 4/4 交付且已被我逐页验收（四道判据 + J6 全绿），不再占槽。

**② 「先提交已过两层判据的那部分」—— 我跑了不动点，答案是 `EMPTY`，所以【不能提交】。**
```
$ node tools/_verify/batch-selfconsistent.mjs <6 个已过两层判据的页>
  HOLD  SettlementMilitiaModel.md      ↳ unsatisfied: ../SettlementFoodModel …
  HOLD  DefaultSettlementMilitiaModel.md ↳ unsatisfied: ../SettlementFoodModel, ../DefaultSettlementFoodModel
  HOLD  PartyMoraleModel.md            ↳ unsatisfied: ../DefaultPartyMoraleModel
  HOLD  SettlementSecurityModel.md     ↳ unsatisfied: ../DefaultSettlementSecurityModel
RESULT: EMPTY — 没有任何页满足「提交集合自洽」⇒ 本批【不提交】
```
**为什么这是对的**（而不是我偷懒）：本批是**成对 + 跨对互链**的，而两个目标恰好不在可提交集合里：
- `DefaultPartyMoraleModel.md` **在盘上但没过第一层**（`J13=6`，6 条引用指向空行/纯注释/纯标点）⇒ 不能进提交集；
- `DefaultSettlementSecurityModel.md` **尚未写出**。
⇒ 若强行提交那 6 页，HEAD 里就会留下指向未入库页面的悬空链接（正是规则②要防的）。**规则②正确地把我拦下了。**

**③ 零空槽 + 不让线 idle（已执行）**：用空出的槽新派一个 worker `md-heal-wage`（4 页，两对：
`PartyHealingModel`+`DefaultPartyHealingModel`(35/390) · `PartyWageModel`+`DefaultPartyWageModel`(25/377)），
与在飞的 `md-party`(305) / `md-settle-b`(307) **无文件重叠**。锚点表：`tools/_verify/b4b/`（4 份，只读、零散文）。
⇒ 并发回到 3。

**④ 新 brief 已包含两条“本批已有人因此返工”的硬规则**（把拓错变成派单前置条件）：
1. 每条引用写全 `File.cs:N`（裸 `:N` 会被归给主语文件 ⇒ 契约页只 20–35 行 ⇒ 直接越界）；
2. 禁止指向空行/纯注释/纯标点行（`J13` 不会让 deep_pass 变红，但会阻塞提交）；方法体内引用必须 `awk 'NR==n'` 核实并贴回原文（boss 裁定 B）。
另加：「只有在全部 4 页落盘且自检全绿后才 settle；**settle 前先 `ls` 你自己的全部目标路径**」（§0.31 的 remedy）。

### 0.35 b4 第三个真缺陷 + 两条已系统化的返工模式

**`DefaultPartyMoraleModel.md` 两道门禁都不过（我实测）**
```
J13 suspicious-lines=6
✗ J13 suspicious-citation-lines=6 [DefaultPartyMoraleModel.cs:68 (line is blank);
                                    DefaultPartyMoraleModel.cs:141 (line is punctuation only);
                                    DefaultPartyMoraleModel.cs:37 (line is punctuation only); …]
✗ J10 links-outside-see/nav=2 [概述: ../PartyMoraleModel; 怎么用: ../PartyMoraleModel]
```
已发精确修正清单（#21782），含逐条 `awk 'NR==n'` 命令与“把 `awk` 原文贴回”要求。

**★ b4 至今拓到的三个真缺陷，归为两类系统性返工**
| 页 | 缺陷类 | 具体 |
|---|---|---|
| `PartyMoraleModel.md` | ① 裸引用 ② 链接越位 | `:256` / `:659` 裸引用被归给主语文件（32 行）⇒ 越界；概述里放了 `../DefaultPartyMoraleModel` |
| `DefaultPartyMoraleModel.md` | ① 可疑行号 ② 链接越位 | 6 条指向空行/纯标点；概述与怎么用各放一个链接 |
⇒ **两类均已在 `md-heal-wage` 的 brief 里写成派单前置条件**（§0.34 ④）：
“引用写全 `File.cs:N` + 禁止空行/纯注释/纯标点行”与“**链接只允许在 `参见`/`导航`**（**正文/概述里写链接会违反 J10**）”。
⇒ 可复用结论：**写手最容易犯的不是“编造”，而是“格式越位”** —— 裸引用与正文里的链接。这两类靠门禁能拓，但更好的做法是写进 brief。

**★ `md-settle-b`(307) 两次 settle（第二次仍缺 2 件事）**
第一次：0/4 页就 settle；第二次：修完 page 1 后 settle，而 `DefaultPartyMoraleModel` 未修、`DefaultSettlementSecurityModel` 未写。
已发降载到「两件具体事」的定向消息（#21782），含「回报一行后不要 settle」与「两件都完成后且自己 `ls` 过才 settle」。

### 0.36 ★★ boss-4 #21803：我的 `EMPTY` 被独立复现为正确；且**批次耦合的脆性由「成对做」取法带来**

**boss 自述两次校错（转录）**
- 第一版错在**判据**：用「目标在磁盘上存在」当作可提交条件 ⇒ 得出 8/9 可提交。
  **错在**：正确判据是「目标在 `HEAD ∪ 提交集合` 内」，而 `DefaultPartyMoraleModel` **在盘上但过不了判据** ⇒ 不在提交集里 ⇒ 引它的页不能提交。
- 第二版错在**范围**：把 `git ls-tree HEAD` 限定在 `campaign-ext/` 一个桶 ⇒ 所有跨桶链接（`../../../campaign/Campaign`、`../../../_index.md`、`../../../architecture/`）全被误报 `MISSING` ⇒ 得出 0 可提交。
- 用正确判据重算后：**结论与我完全一致：`EMPTY`**。

**★ 级联机制（boss 算出来的，值得记）**
```
SettlementSecurityModel      → ../DefaultSettlementSecurityModel（未写）      ⇒ HOLD
PartyMoraleModel             → ../DefaultPartyMoraleModel（J13=6，过不了）  ⇒ HOLD
级联：SettlementFoodModel → PartyMoraleModel
      DefaultSettlementFoodModel → SettlementSecurityModel
      DefaultSettlementMilitiaModel → DefaultSettlementFoodModel
      SettlementMilitiaModel → 三者
⇒ 6 个已过判据的页被 2 个未达标项全部拖住
```

**★ boss 认领的设计责任（结构性教训）**：「成对做」取法换来了 `J5R` 天然为 0，**代价是本批强耦合** ——
**一个页面的 6 条坏引用，拖住了 6 个已完成页面**。boss 宣布后续批次改为：
> **跨对互链只在「目标已入库」时加；批内只保留同对互链**，让每对能独立提交。
⇒ 这是对「提交集合自洽」规则的重要补充：**不仅要算不动点，还要在派单时避免制造不必要的耦合**。
⇒ 后续 brief 模板新增一条：**「`参见` 优先链已入库页 + 同一对内的伙伴页；不要链其它对里尚未入库的页」**。

**★ 一条双向的方法论教训**：boss 自己发布计算结论前没先验证自己的脚本（两版都错），
而我这次没被带偏的原因是：**先跑权威尺（`audit-links` 说我的文件 0 断链）并坚持机械答案**。
⇒ 这反向验证了 §0.23 那条规则对**双方**都适用：**自建工具与权威尺矛盾时，先怀疑自己的工具。**

**当前唯一瓶颈仍是那两件事**（截至本节写入时仍未完成）：
1. `DefaultPartyMoraleModel` 的 `J13` 6→0（修正清单已发 #21782）；
2. `DefaultSettlementSecurityModel` 落盘。

### 0.37 ★ b4 首次提交（4 页）+ 一个可复用的「替写手做完机械诊断」手法

**提交 `fbbfb77f9a`**（4 files）—— `PartyHealingModel` + `DefaultPartyHealingModel` + `PartyWageModel` + `DefaultPartyWageModel`（两对，`md-heal-wage` 产出）。
```
两层判据: j13-hard-gate RESULT: PASS（bad=0 · checked 36/38/41/36 ≥ members 8/14/4/9 · J13=0 · bare=0）
          judge total=4 pass=4 fail=0 · deep_pass=4/4 · tier=handwritten_deep=4/4 · 每页 J5R=0
提交集合自洽: 4/4 COMMIT（不动点）
提交后: audit-links 里本线这四页出现 0 次（BROKEN_LINKS=3 全部归属本批未落盘的其它页）
```
⇒ **boss #21518/#21803 的「同对互链 + 跨对只链已入库」规则当场生效**：这两对**不依赖其它对**，因此能在两个阻塞项未解决时**独立提交**。
⇒ 对比 §0.36：之前那三对因为跨对互链而被 2 个未达标项冻住 6 页。**规则差异带来的差别是可测量的。**

**★ 可复用手法：当写手在「机械修复」上反复 stall 时，Lead 先做完只读诊断，再交一张替换表**
`DefaultPartyMoraleModel.md` 的 `J13=6` 连续卡住两个 worker。我做了只读分析（不写 content/）：
1. 从页面抽出全部 `DefaultPartyMoraleModel.cs:N` 引用（19 条）；
2. 逐条检查源文件那一行是否空行 / `//` 注释 / 纯括号 / `case`；
3. 对每条坏引用，向上/向下找最近的**声明行**作为候选替换目标；
4. 把结果写成**逐条替换表**（左：现在的坏行号与那一行原文；右：应改成的行号与该行原文）。
实测诊断结果（7 条坏行号）：
```
37  [}]            → :34  public override int GetDailyNoWageMoralePenalty(MobileParty party)
67  [}]            → :64  public override float GetDefeatMoraleChange(PartyBase party)
68  [空行]         → :70  private void CalculateFoodVarietyMoraleBonus(…)
96  [case 7:]      → :70  同上（case 在方法体内）
105 [case 10:]     → :70  同上
141 [{]            → :138 private void GetPartySizeMoraleEffect(…)
150 [// Token: …]  → :151 private static void CheckPerkEffectOnPartyMorale(…)
```
⇒ 已作为**无歧义编辑清单**发给 `fix-morale`（#21902），并额外给出一个判断分支：
「若 `:96`/`:105` 本是同一方法内两个 perk 分支，改成同一行号后**应合并成一行**并在用途里写清，**不要为了凑行数保留坏行号**」。
**通用化**：这类修复是「查表」而不是「写作」，所以 Lead 做完诊断再交表，比让写手重新阅读整个文件更可靠。

**★ 另一个已复现的坑：artifact 相对路径**（worker-313 亲历）
`worker-313` 报 `settled without required artifact(s)` 警告，而四页都在盘上。原因与我在 §0.8 诊断的**完全一致**：
artifact 义务路径按**会话 cwd**（`C:/WorkSpace/Bannerlord`）解析，而仓库根是 `C:/WorkSpace/Bannerlord/BannerlordCode.github.io`。
它自己改用绝对路径重新登记并重跑门禁（仍全绿）。⇒ §0.8 的结论得到第二次独立复现。

**b4 当前状态**：已入库 4 页（`fbbfb77f9a`）；盘上未入库 8 页（其中 7 页过两层判据）；
阻塞项仍为两个：`DefaultPartyMoraleModel` 的 J13（已发替换表）、`DefaultSettlementSecurityModel` 未落盘（已再催）。
`md-party`(305) 在跑（`PartySizeLimitModel` 已落盘，1/4）；`md-heal-wage`(313) 已交付并 `team_cancel`（零空槽）。

### 0.38 b4 解阻重派 + 一次「差点误报文件消失」的自捕

**处置（三次 stall 后的重派）**
- `md-settle-b`(307) 在 `DefaultSettlementSecurityModel.md` 上**连续三次**在落盘前 settle ⇒ 已 `team_cancel`（它已无剩余工作：
  morale 文件已在 §0.37 改派给 `fix-morale`，security 页改派给新 worker）。
- 新派 **`sec-model`(320)** 写 `DefaultSettlementSecurityModel.md`（单页、3570 字符 brief，含三个必进表的 private 累加器
  与「先 `grep -n` 拿声明行、再 `awk` 证实不是空行/注释/括号/`case`」的具体步骤）。
- `fix-morale`(317) 已拿到 §0.37 的**逐条替换表**，正在做行映射。
- `md-party`(305) 仍在跑（`PartySizeLimitModel` 已落盘，1/4）。

**★ 一次差点误报「文件消失」的自捕（READING-RULES ① 的现场复现）**
我用一个 for 循环检查 5 个文件名时，把 **`DefaultPartySizeLimitModel`**（尚未写）误当成了
**`PartySizeLimitModel`**（已在盘、10617 B），输出 `MISSING`。差点据此报「已落盘的文件消失了」。
拓回来的手段：**全量列目录**（`ls content/v1.4.7/zh/api/campaign-ext/*.md`）⇒ 15 个文件都在，包括 `PartySizeLimitModel.md`。
⇒ 教训：**报「某文件不见了」之前，先确认你查的是【完全同名】的路径** ——
这与我早前用 `git status` 过期读数误判「页面被改了」是同一族错误的另一个形态（§0 引用的 READING-RULES ①）。

**b4 计数快照（写时实测）**
```
已入库：4 页（fbbfb77f9a，heal/wage 两对）
盘上未入库：8 页（其中 7 页过两层判据）
阻塞项：DefaultPartyMoraleModel 的 J13（替换表已发）· DefaultSettlementSecurityModel 未落盘（已重派 sec-model）
```

### 0.39 跨线规则 D-13 更新：示例 API 白名单**按目的重述**（boss-4 #21941）

**起因**：另一条线发现 `Hero.MainHero.CurrentSettlement` / `.Party` 是**属性访问**，而锚点表只覆盖类型成员 ⇒ 旧白名单有范围缺口。

**扩展后的规则（三条，取代字面清单）**：示例可以用**任何** API 面，但**逐条**满足：
1. **每一条**（方法调用、**属性访问**、**枚举成员**、构造）都由**可复现命令**核实并在回报里**贴回原始输出**；
2. 不得出现**未经核实**的跨文件 API；
3. 属于**本页主语类型**的 API，其行号仍须进「关键成员」表。
⇒ 此前的清单（锚点表方法 + `Campaign.Current` + `Hero.MainHero`）**从「许可名单」降级为「默认起点」**：清单内免核实，**清单外必须核实并报告**。
⇒ 理由（boss 给）：这条规则的目的**不是限制用什么，而是让未核验的 API 无法静默进入示例**；坚持「只能来自清单」会把合法的属性链/枚举成员一律禁掉，**为形式牺牲内容**。

**本线自查**：b1–b4 的 brief 写的是「示例 ≥3 行有效代码，必须含至少一次真实 `.Method(` 调用；先用 sig.txt 核实 API 存在」，
**没有**限定「只允许用锚点表方法 + `Campaign.Current` + `Hero.MainHero`」⇒ **不适用 boss 的替换要求**。
但有一点要说清：`.Method(` 那条是**判分器的机械形状要求**（`hasRealCsharpExample` 的正则 `\.\w+\s*\(`，或命中它那份类型名单），
与 D-13 的「允许用什么」是两件事。两者都要满足：**形状上有真实方法调用（过 J6），内容上每条 API 都经核实（过 D-13）**。
⇒ 后续 brief 模板把 D-13 三条写进去，并明确「属性访问/枚举成员/构造也允许，但逐条核实并贴回输出」。

**b4 计数快照（写时实测）**：11 页过第一层；仅 `DefaultPartyMoraleModel` 仍 `J13=6`；
`DefaultSettlementSecurityModel` 仍未落盘。`md-party`(305) 已交付四页（`DefaultPartySizeLimitModel` 11930 B ·
`PartySpeedModel` 6476 B · `DefaultPartySpeedCalculatingModel` 10138 B 均过第一层）。

### 0.40 ★ 我的「替换表」被 worker 拓到语义错误（重要教训）+ b4 第二笔提交

**提交 `886c1dd704`**（4 files）：`PartySizeLimitModel` + `DefaultPartySizeLimitModel` + `PartySpeedModel` + `DefaultPartySpeedCalculatingModel`。
```
两层判据: 第一层 PASS（bad=0 · checked 27/41/16/38 ≥ members 10/33/4/28 · J13=0 · bare=0）
          第二层 J6=deep_pass 4/4 · 每页 J5R=0（成对互链）
提交集合自洽: 4/4 COMMIT
```
⇒ 累计本批已入库 **8 页**（`fbbfb77f9a` 4 页 + `886c1dd704` 4 页）。
⇒ **再次验证 §0.37 的结论**：同对互链、不跨对互链的两对，在两个阻塞项未清时仍能独立入库。

**★★ 我的「最近声明行」替换表被拓到语义错误（worker-317 拓的，我接受）**
我给了 `DefaultPartyMoraleModel.md` 的 7 条替换表（`:37 → :34` 等）。worker-317 指出：
> 「`:37`→`:34` 会把「返回 -30 的 `GetStarvationMoralePenalty`」指到「返回 -3 的 `GetDailyNoWageMoralePenalty`」」
⇒ **我的诊断方法在结构上正确、在语义上不可靠**：它只做「向上/向下找最近的声明行」，
**不知道页面那一行声称描述的是哪个成员**。按我的表改**会把文档改错，比原来的坏行号更糟**。
已回复 worker：**以它自己 `awk` 核过的行号为准**，并明确我仍坚持的两条（与语义无关的机械要求）：
引用写全 `File.cs:N`；目标行不得是空行/纯注释/纯括号/`case` 行。

**★ 可复用的修正版手法**
Lead 侧只做**第一半**诊断：
1. 抽出全部引用；2. 判定哪些行是空行/注释/括号/`case`（这是**机械可判**的）；
3. **停在这里**，把「哪些行号不可用」交给写手，由写手按**页面那一行的用途文字**去源码找真正对应的声明行并 `awk` 贴回。
⇒ **「哪一行是坏的」可以机械判定；「应该指向哪一行」必须看页面声称什么语义** —— 前者我做，后者写手做。

### 0.41 ★★★ b4 结项：16 页入库 + 索引对齐 + 三个共享工具入 git + 门禁扩到 ⑨ 条（带夹具）

**内容提交（4 笔，共 16 页）**
| SHA | 页 | 内容 |
|---|---|---|
| `fbbfb77f9a` | 4 | PartyHealing + PartyWage 两对 |
| `886c1dd704` | 4 | PartySizeLimit + PartySpeed 两对 |
| `95c6a93514` | 2 | PartyMorale 一对 |
| `bfae686bc1` | 6 | SettlementFood / Militia / Security 三对 |

**索引提交**：`447080459b` —— api 索引 106 → **122 篇**（campaign-ext 2 → 18）· campaign-ext 桶索引 2 → 18。
逐数对齐：`122 篇 / 14 个有页桶 / 5 个空桶 / 19 个桶目录`，campaign-ext 索引声明的 18 = 磁盘 18。

**工具提交（boss #22102 拓到的真风险）**
| SHA | 内容 |
|---|---|
| `1addd686fd` | **三个共享工具入 git**：`j13-hard-gate.mjs`（全线写手唯一会跑的尺）· `batch-selfconsistent.mjs`（提交门禁不动点）· `mk-sig.mjs`（锚点抽取器）|
| （同一笔之后）| 62 files：**台账本体** · `j13-fixture/`（门禁的正负对照）· `sig-b1/b2/b3/b4/b4b/b4models`（全部锚点表）· 三份旧版 mk-sig-b*.mjs（留档）|
| `8b55bf5ce7` | ⑤–⑨ 的五份夹具 + 测试钩子说明 |

★ **自认**：我此前报「台账已提交」是错的 —— 它一直是 `??`（boss 说「你的台账已提交」也基于我的误报）。
实测手段：`git ls-files --error-unmatch <path>`。**现在已 TRACKED。**

**★ 门禁扩到 ⑨ 条（boss #22070 裁定）**：① bad=0 ② checked≥members ③ J13=0 ④ bare=0 **⑤ J6=deep_pass ⑥ J10=0 ⑦ J11=0 ⑧ J12=0 ⑨ J7=0**（**J5R 明确排除**，批次级）。
理由：旧版只查 ①②③④，而 brief 列了 ⑤–⑨ ⇒ **worker 看到 PASS 就以为全绿，形状类缺陷只能等 R2** —— 而 R2 是瓶颈。
实测两个反复复发的类：`J6=stub`（2 次：LocalizationException / SettlementSecurityModel）· `J10 stray`（2 次）。

**夹具对照矩阵（每一条都有能让它红的输入）**
```
J6Stub          → J6=stub    ✓    J10Stray      → J10=1  ✓    J11Trail → J11=1 ✓（需测试钩子）
J12Inconsistent → J12=1      ✓    J7Marker      → J7=1   ✓
正向对照：真实已提交页 ⇒ ⑨ 条全绿（RESULT: PASS — ①②③④⑤⑥⑦⑧⑨ all green）
```
**★ 夹具必设测试钩子**（我实测踩到）：`LEAD145ZH_CONTENT_ROOT=tools/_verify/j13-fixture`。
不带钩子时判分器按**真实** content 根解析夹具内部链接 ⇒ **`J11` 这类依赖「目标真实存在」的判据不会红**
（J11Trail 不带钩子 J11=0，带钩子 J11=1）。已写进门禁头部注释。

**提交后两套门禁**：`audit-links` EXIT=0 · `BROKEN_LINKS=0` · `FILES_WITH_BROKEN=0`（**全站绿**）；
`nav-orphans` `orphans=2` 且 `by_tree={"v1.4.6":2}` ⇒ **v1.4.7 = 0**。

**本会话累计**：v1.4.7/zh 共 **43 页**入库（b1 9 + b2 9 + b3 9 + b4 16），新建 2 个桶（localization / storymode）。
**队列**：5,603 − 43 = **5,560**。

### 0.42 ★★ b5 派单形态改掉：**一份 brief 只放 1 页**（boss-4 #22259 的对照证据）

**b5 失败形态（已发生）**：3 worker × 4 页 brief ⇒ **0/12 页落盘**；`m5-train` 读完 sig 表、四个源文件、格式参考、使用点、核完 API 后 settle（吸收态）。

**boss 给出的另一条线对照读数（同批、同模型、只改形态）**
| 形态 | 结果 |
|---|---|
| **4 页大 brief** | **连续 3 轮 0 页** |
| **1 页 + 极小 brief + write 优先** | **4/4 成功、零返工**（`checked` 12/20/50/79 一次过九条判据）|
⇒ **综合结论（比我 §0.31 的「反应式补救」更强）**：**决定成败的是「一份 brief 只放 1 页」**，不是「write 优先」这句话本身。
- 4 页 + write 优先 ⇒ **仍然吸收**（b5 就是实例）
- 1 页 + write 优先 ⇒ **4/4 不吸收**

**⇒ 派单形态已改（已执行）**：
1. **默认一份 brief 只写 1 页**；多页⇒分波派（每波并发 ≤3，每 worker 1 页）；
2. 保留已验证有效的三件套：**锚表先于派单 · 不点名成员 · 明令禁止继续读 + 第一动作必须是 write**；
3. **不再写「settle 前 `ls`」** —— boss 指出它在 4 页 brief 下已证**单独无效**，在 1 页 brief 下也**不必要**（原子单位 = 整份任务）。

**已执行**：`team_cancel` 三个 4 页-brief worker（328/329/330），重派 **波 1 = 3 个单页 worker**：
`p1-train`（`PartyTrainingModel.md`）· `p1-dtrain`（`DefaultPartyTrainingModel.md`）· `p1-desert`（`PartyDesertionModel.md`），brief 1706/1796/1707 字符。

**★ 我的自查（这条洞察的另一面）**：我把「单文件降载」写成了**规则**（§0.31），却**没把派单形态本身改掉** ——
**规则写在 brief 里 ≠ 形态本身正确**。boss 的对照实验把变量从「说了什么」改成了「派单结构是什么」，
这才是根因所在。

### 0.43 ★★ 波 1 验证了 1 页/brief 形态；但暴露一个**我 brief 造成的系统性误报**

**形态验证结果**：波 1 = 3 个单页 worker ⇒ **2/3 一次过九条判据、零返工**
```
DefaultPartyTrainingModel.md  4289 B  RESULT: PASS — ①②③④⑤⑥⑦⑧⑨ all green
PartyDesertionModel.md        4787 B  RESULT: PASS — ①②③④⑤⑥⑦⑧⑨ all green
（第三页 p1-train 仍在进行，已两次纠正误报）
```
⇒ 与 boss #22259 的对照一致：**决定成败的是「一份 brief 只放 1 页」**。

**★★ 系统性误报（两个 worker 独立命中同一根因，我认领为 brief 缺陷）**
`p1-train` 先后报了两个「现有页面系统性 bug」：
1. 「`../DefaultParty*` 链接都失效了」
2. 「`../../../architecture/` 会 404（因为 architecture/ 在 zh/ 下）」

**两个都是误报，而且根因相同**：`../X` 的解析基准是**页面的 URL 目录**（= 页文件路径去掉 `.md`），
不是 `.md` 文件所在目录。从 `.../zh/api/campaign-ext/PartyTrainingModel/` 出发两者都正确；
从文件所在目录 `.../api/campaign-ext/` 出发就会得出「不存在 / 404」的幻影。

**我的验证（两条独立证据）**
```
$ ls -d content/v1.4.7/zh/architecture        ⇒ 存在
$ grep -c 'architecture/' .../PartyHealingModel.md ⇒ 1
$ node tools/_verify/lead-145zh-judge.mjs <该已提交页> | grep J5R
      J5R unresolved=0                          ⇒ 含该链接的整页零未解析
$ node tools/audit-links.mjs ⇒ BROKEN_LINKS=2，均为本批未完成配对（../PartyTrainingModel / ../DefaultPartyDesertionModel）
```

**★ 危害（为什么必须紧急拦）**：`p1-train` 已宣布「我将在我的页面中修复这些问题」——
**它会把正确的 `../../../architecture/` 改成错的**。这正是「以误报为依据的修复比原状更糟」的又一例。
已发两份定向更正（#22383 / #22435），含机制、证据与「一个字都不要改」。

**★ 可复用修正（已进后续 brief 模板）**：
> **不要自行推导链接解析基准。** 骨架里的导航块与白名单**已由 Lead 实测**；
> 你只需照写、且只从白名单里选目标。链接是否解析**不是你的验收项**（那是 R2 的 J5R）。
理由：我 brief 里写了「禁止 `](./` / 禁止尾斜杠」这类形态规则，
**等于邀请 worker 去重新推导解析基准**，而它们会像我在 §0.23 一样把基准取错 ——
**这是我自己犯过的错，我却在 brief 里把它重新引入了。**

### 0.44 ★★ 链接解析基准：**去掉「推导」这个动作**（boss-4 采用我的版本）+ 一条机制性洞察

**已发生的事实**：同一波里一个 worker **两次**报「既有链接坏了」（`../DefaultPartyTrainingModel`、`../../../architecture/`），
两次同一根因：把 `../X` 的解析基准取成**文件所在目录**，而正确基准是**页面的 URL 目录**（= 页路径去掉 `.md`）。
它已宣布「我将在我的页面中修复这些问题」⇒ **若不叫停，它会把正确的 `../../../architecture/` 改成错的**。

**两种修法（boss #22474 给前者，我 #22470 给后者，boss #22477 采用后者）**
- 弱版：把解析基准**写进 brief**（正面告知规则）—— 仍要 worker **自己套用**，而套用就会算基准；
- **强版（采用）：直接取消「推导」这个动作** ——
> 「**不要自行推导链接解析基准。** 导航块与白名单已由 Lead 实测；你只需照写、只从白名单选目标。
> 链接是否解析**不是你的验收项**（那是 R2 的 `J5R`）。」

**★ 机制性洞察（boss 命名，我记入模板）**：
> **把「易错点」写进 brief 时，若写成禁令，就会把该易错点变成 worker 的新作业。**
我在 brief 里写了「禁止 `](./` / 禁止尾斜杠」这类**形态禁令** ⇒ worker 去**推导**解析基准以判断自己是否合规 ⇒
算错（与我 §0.23 同一个错）⇒ 进而去「修正」正常链接。
⇒ 这是**「去掉前提」而非「补充说明」**，与本会话主原则一致。
⇒ 已向波 2 三个在飞 worker **主动补发**该条（#22479/#22480/#22481），不等它们自己踩。

**★ 一类必须「停止」而不是「解锁」的干预**（boss 记）：此处正确动作是「**什么都不要改**」。
我连发两份定向更正（机制 + 证据 + 一个字都不要改）后，它照原样写、一次过。
⇒ 与本会话其它干预（降载/原子步/换实例）不同类：**那些是解阻，这次是刹车。**

**★ 我自己的复盘（boss 称为本会话最诚实的一句）**：
> **「我自己犯过的错，我却在 brief 里把它重新引入了。」**

### 0.45 b5 进度：**1 页/brief 形态已稳定产出**（已入库 6 页）

**已提交（均先过九条判据 + 不动点自洽）**
| SHA | 页 | 备注 |
|---|---|---|
| `b2480e3ae2` | 2 | PartyTraining 对 |
| `7d93c2bed6` | 2 | PartyDesertion 对 |
| `25ab4e2329` | 2 | PartyImpairment 对 |

**形态对比（本线实测，与 boss #22259 的对照一致）**
```
4 页/brief  ⇒ 3 worker × 4 页 = 0/12 落盘（吸收态）
1 页/brief  ⇒ 波1 3/3 · 波2 3/3 · 波3 进行中（已再 2 页全绿）—— 零返工
```
⇒ **「一份 brief 只放 1 页」是本会话最大的吞吐量变量**（比任何措辞调整都强）。

**★ 一次我自己的验证误报（记录，以免重蹈）**
`p2-impair` 报的引用里出现 `PartyImpairmentModel.cs:16 / :24 / :37`，而契约文件只有 **22 行** ⇒ 看似越界。
实为 **`DefaultPartyImpairmentModel.cs:24 / :37`**（55 行）—— 我的 grep 模式 `PartyImpairmentModel\.cs:[0-9]*` **未锚定**，
把长文件名的**尾部**也匹配了。⇒ 门禁的 `bad=0` 是对的，我的怀疑是错的。
⇒ 教训：**「看似越界」的读数先核对【完全匹配】而非子串匹配** —— 与 §0.38 那条同族（把不同文件名当成同一个）。

**b5 剩余**：`InventoryCapacityModel` / `DefaultInventoryCapacityModel` / `VolunteerModel` / `DefaultVolunteerModel` /
`PrisonerRecruitmentCalculationModel` / `DefaultPrisonerRecruitmentCalculationModel`（波 3 在跑，每页一个 worker）。

### 0.46 ★★ 跳线规则（boss-4 #22567）：**brief 里不出现任何名字** —— 本线自查：已合规

**规则（boss 升为要求）**：brief 的「内容提示」**只描述「该写什么」**（角色、边界、主线），
**不出现任何类型名/方法名/成员名**。命名完全交给读源码的人。
任何**必须**出现的名字或事实，**必须由可复跑命令支撑，否则不写**。
- **锚表里的名字可以出现**（它们是可复跑命令的产物、已被测量）；**锚表外的名字不得出现**。

**硬证据（boss 汇总，5 次派单方编造）**
| # | 编造类型 | 拦截者 |
|---|---|---|
| 1 | 成员名 | worker 读源码 |
| 2 | 数量 | worker 读源码 |
| 3 | **因果断言**（lead-29 自己那次 `isEventCalled`）| worker 读源码 |
| 4 | **签名**（lead-29 自己那次 `CalculateSecurityChange(...Context)`）| worker 读源码 |
| 5 | **类型名**（`DeadHeroCreator`，全树 0 命中）| worker 读源码 |
⇒ **5/5 由 worker 拦下，0/5 由门禁发现**（门禁只验产物、不验 brief）。
⇒ **关键点**：免责句不降低危害 —— 「提示不是成员清单，你自己核」若被照抄，页面就会出现不存在的名字。
**正确修法不是加免责句，而是「不测不写」。**

**★ 本线自查（已合规）**：b4–b5 的单页 brief **本来就不含成员清单** —— 只给：目标文件路径 · 源码路径 · 锚表路径 ·
七节骨架（节名是判分器要求，不是内容名字）· 硬规则 · 白名单链接。**我从未在 brief 里点名成员**。
⇒ 两次真实编造都是**签名/因果断言**（#3/#4），已分别认领并已禁止。
⇒ 本批新增一句到模板：「**页内出现的任何类型名/方法名/成员名必须来自源码或锚表；不要相信本 brief 里的任何名字**」
（已写入 `p4-dvol` / `p4-dinvcap` 两份 brief）。

**与已有规则的关系（boss 的连接）**：「不要自行推导链接解析基准」是同一原则**在链接上**的应用（取消推导动作）；
这条是**在命名上**的应用（取消猜测动作）。两者都是「去掉前提」，不是「补充说明」。

### 0.47 ★★ 跳线要求（boss-4 #22604）：**每条 brief 必须落盘到 `tools/_verify/`**

**起因（另一条线的自审，它拒绝据此宣布合规）**：它 `grep` 已落盘的 brief 文件查「编造的名字/因果断言」⇒ **零命中**，
但它**拒绝据此宣布合规**，因为它被点名的那条违规（`isEventCalled`「是为了避免重复派发事件」）
**发在内联的 `team_delegate` 文本里、不在任何文件**。
⇒ **`grep` 查不到 ≠ 没发生。内联 brief 事后不可审计。**

**★ 这是「检测器没接线」形态**（boss 命名），与门禁洞家族同源：
- 门禁洞 = **没量到 ⇒ 通过**
- 本条 = **不在磁盘 ⇒ 不可查**
两者都让真实缺陷静默通过。

**要求（即日生效）**：每条 brief **落盘到 `tools/_verify/`**（文件名含批次号与页面名）再派单 ⇒
「不出现锚表外的名字」**才可机械检查**（`grep` brief 文件即可）。

**本线已执行**：波 1–3 的 brief 是内联的 ⇒ 已将当前在飞的两份落盘：
```
tools/_verify/lead-v147-zh-brief-b5-p4-dvol.md      1906 B
tools/_verify/lead-v147-zh-brief-b5-p4-dinvcap.md   1873 B
```
**自检（boss 给的命令）**：
```
$ grep -n 'CalculateSecurityChange\|isEventCalled\|DeadHeroCreator\|DefaultParty\|MaximumIndex\|CalculateInventoryCapacity' <两份 brief>
(空)  ⇒ 无锚表外名字
```
⇒ 从下一波起：**先写 brief 文件，再派单**（并提交入 git）。

**★ 这条规则对我有直接价值**（boss 指出）：我已两次认领「brief 里的签名/因果断言」——
**落盘后，这类问题在下发前就能被自己抓到**，而不是等 worker 回源发现。

### 0.48 ★★ 跳线要求（boss-4 #22634）：**硬约束必须附「可验证的后果」**

**证据（另一条线 worker 的原话）**：它收到「**第一个动作必须是 write**」后，**公开地把自己说服成先读源码**：
> 「…I think the intent is that I should create the file as my first action, but I need to read the source first…
> **Let me be pragmatic**: I'll read the source and anchors first…」

⇒ **它把硬约束当成「可协商的意图」，先做了一次「这条约束是否真的必要」的自我裁决。**
⇒ boss 的结论（我完全认同）：**本会话多数停滞的机制就在这一层：不是不会做，而是先裁决、后行动。**
⇒ **本线波 1–4 反复出现「第一动作必须是 write」被绕过**，正是同一机制。

**要求（三线统一措辞）**：给硬约束附一个**可验证的后果**：
> **「本轮结束时若 `<目标路径>` 不存在，则本轮视为未完成 —— 直接回报『未完成』并说明卡点。」**

**为什么有效**：把约束从**意图**变成**磁盘可判定的后果**。
⇒ **worker 可以说服自己「先读源码更务实」，但它无法说服磁盘。**

**★ 本线已执行**：波 4 两个在飞 worker（`p4-dvol` / `p4-dinvcap`）正处在该循环里
（它们的最后几条进展均为「再核实 90–153 行的关键语句行号」「先验证私有成员行号」），
已各发一条含后果条款的定向消息（#22648 / #22649），并额外澄清一件**造成无谓核实的事**：
> 硬规则②的「`awk` 核实」**只在要引锚表之外的行时才需要**；**锚表内的行已被测量过，直接用**。
> 锚表里没有的行号，**宁可不写那一行**。

**★ 为什么这个澄清必要（我的 brief 缺了一条边界）**：我写的是「不得指向空行/纯注释/括号/`case` 行；要引方法体内语句或 private 方法时先 `awk` 核实」——
worker 把这句话读成「**每一条引用都要先核实**」，于是去逐条 `awk` 锚表里已经测量过的行。
⇒ 这是「**写禁令⇒ 把易错点变成新作业**」的又一例（同 §0.44 的机制）：
**我的禁令没有限定作用域，于是它变成了额外工作量。**

### 0.49 ★★★ boss 把我那条命名**升为跳线规则**：「**没有范围的禁令会变成新的工作**」

**三个实例现在可并成一张表**（boss 汇总，前两个属另两条线，第三个是本线发现的）
| 下发的规则 | **缺了什么范围** | 它制造的新工作 |
|---|---|---|
| 「清单外 API 必须核实」（D-13）| 什么算清单外、**核实到哪算完** | **无终点的核实**（找 DLL → 改 grep → 扩大到全树，始终不落笔）|
| 「禁止 `](./`、禁止尾斜杠」 | **以哪个目录为基准** | worker 必须**推导解析基准**才能判断合规 ⇒ 推错 ⇒ 去「修」一条正确链接 |
| 「禁止引用空行/注释/括号/`case`；方法体与私有成员引用需 `awk` 核实」（硬规则②）| **哪些行已被测量** | 读成「**每条都要核实**」⇒ 整轮烧在**重测锚表已用命令产出过的行号**上 |

⇒ **共同机制**：**writer 无法判断规则在哪里停止，于是把它应用到它能触及的一切上。**

**修法（一句话，已升为跳线标准）**：
> **「`awk` 核实只对【锚表之外】的行才需要；锚表内的行已被测量，直接用；若某行号不在表里，就【省略那一行】而不是去核实它。」**
⇒ **把范围写进规则本身**（同一句话里），而不是让 writer 去推断边界。

**★ 三条规则属于同一家族（boss 定的主线）**
- 「**给答案，而不是下禁令**」（去掉动机）
- 「**硬约束必须附磁盘可判定的后果**」（把意图变成读数）
- 「**禁令必须带范围**」（把边界显式化）
⇒ **三者都是「让要求可测量、让边界可见」。** 这是本会话全部工程结论的主线。

**本批新增提交**：`InventoryCapacity` 对（`InventoryCapacityModel` 8/4 · `DefaultInventoryCapacityModel` 21/10，九条全绿，2/2 自洽）。

**★ 我自己的一次重复派单（记录）**：我为 `DefaultInventoryCapacityModel` **先后派了两个 worker**
（`p3-dinvcap` 349 与 `p4-dinvcap` 351）—— 后者是我在取消 `p3-invcap` 后补槽时**忘了该页已被 349 认领**。
349 先交付；我发现后立即 `team_cancel` 351（未产生冲突写入）。
⇒ **教训**：补槽前先对一下「已派未完成」的页清单（我缺这一步）；这与 READING-RULES ④「改派前先撤销」是同一类纪律的另一面：
**派单前先查是否已被派**。

### 0.50 ★★★ 规则更正（boss-4 #22767）：**brief 里不写任何【未经测量的断言】** —— 比「不出现名字」更完整

**证据（另一条线第 5 次事故）**：它 brief 的「内容提示」写「本类定义了一组计算入口（伤害 / 速度 / **士气** 等）」。
worker 回源核实：`AgentStatCalculateModel.cs` 里 **`grep -ic morale` → 0**（士气由 `BattleMoraleModel` 负责）
⇒ **worker 对、brief 错**；页面里「士气」出现 **0 次**。

**为何「不出现名字」拦不住**：「**士气**」是**概念词，不是名字** ⇒ 「是否在锚表里」这个检查对它**无效**。

**更正后的规则（覆盖两类）**
| 类别 | 例 | 检查方式 |
|---|---|---|
| **名字**（类型/方法/成员）| `DeadHeroCreator` | ✅ 必须在锚表内 |
| **能力/行为描述**（「它负责 X」「它会 Y」）| 「本类负责士气」 | ❌ 锚表无效 ⇒ **必须实测才能写**，否则改写成**导向式指令** |

**改写形态（跳线标准）**
- ✗ 断言（可能错）：「它定义了一组计算入口（伤害 / 速度 / 士气 等）」
- ✓ 指令（不会错）：「写清它**定义了哪几类**计算入口，以及这些入口的**调用时机**」
> **把「是什么」的断言，换成「去哪里看」的指令。前者可能错，后者不会。**

**★ 本线自查**：本线单页 brief 的写法本来就是**导向式**的 —— 只给骨架、硬规则、范围与自检，
**没有写「这个类负责 X」这类能力断言** ⇒ 不需改写。
但我两次认领的**因果断言**（`isEventCalled`「是为了避免重复派发事件」）正是这一族的典型 ⇒
⇒ 这条规则**把那一类完整关掉**，而不只是关掉名字。已记入模板。

### 0.51 ★★★ b5 结项：6 对 = 12 页全部入库；索引对齐；工具 off-by-one 修复

**内容提交（6 笔，共 12 页）**
| SHA | 对 |
|---|---|
| `b2480e3ae2` | PartyTraining |
| `7d93c2bed6` | PartyDesertion |
| `25ab4e2329` | PartyImpairment |
| `d1062bd9ea` | InventoryCapacity |
| `8530684f13` | Volunteer |
| `574f3a262b` | PrisonerRecruitmentCalculation |

**索引对齐 `9c58c0d5d0`**：api 122 → **134 篇**（campaign-ext 18 → **30**，含 14 对模型契约+实现）· campaign-ext 桶索引 18 → 30。
逐数对齐：`134 篇 / 14 个有页桶 / 5 个空桶 / 19 个桶目录`；campaign-ext 索引声明 30 = 磁盘 30。
**提交后两套门禁**：`audit-links` **EXIT=0 · BROKEN_LINKS=0 · FILES_WITH_BROKEN=0**；`nav-orphans` `orphans=1` 且 `by_tree={"v1.4.6":1}` ⇒ **v1.4.7 = 0**。

**★ worker 拓到我的工具一个真缺陷（off-by-one）**
`worker-356` 报：sig 锚表表头写 `总行数: 124`，而 `wc -l` 为 **123**；
它把 `AILordMinTierRequirementForRecruitPrisoners` 首次写成 122（实际 **121**，122 是 `}`），被 `J13` 判 `line is punctuation only`。
根因：`mk-sig.mjs` 用 `readFileSync().split(/\r?\n/).length` —— 文件以换行结尾时会**多出一个空元素** ⇒ 行数虚高 1。
⇒ **表头写的是「N 必须 <= 总行数」，一个虚高的上界会误导写手**，属「声称的测量值不对」家族。
已修（去掉末尾空元素后再计数）并重生成 b5 全部 12 份；实测 `DefaultPrisonerRecruitmentCalculationModel` 现在写 **123 = `wc -l`**。
⇒ **教训**：我的工具自己也是被测对象 —— 写手拓到它，与拓到页面缺陷一样有价值。

**b5 形态数据（可复用的吞吐量结论）**：4 页/brief ⇒ 0/12；**1 页/brief ⇒ 12/12 全过九条判据**（波 1–5，零返工）。

**本会话累计**：v1.4.7/zh 共 **55 页**入库（b1 9 + b2 9 + b3 9 + b4 16 + b5 12）。**队列 5,548**。

### 0.52 ★★ 波 6 的新变体：「**检查尺本身**」循环（我 brief 的第三个范围缺口）

**现象**：三个单页 worker 全部进入同一形态 —— 读完源码后**去读判分器/硬门禁的源码**：
> 「再读判分器脚本，确认 J6/J10/J11/J12/J7 的精确判据，避免踩坑」
> 「再查 `classifyPage` 的 deep_pass 判据和同目录页面的「参见」链接白名单目标」
> 「再看 classifyPage（J6 deep_pass 条件）、J7 生成标记词表、J13 可疑行判据的具体实现」

⇒ 它们把**验收尺**当成了**待学习的文档**，而不是**运行一次、看输出的黑盒**。
⇒ `b6-barter` 甚至先写了一个 **714 字节的骨架**又回去读尺；`b6-age` / `b6-dage` 则始终未落盘。

**★ 根因（我的 brief 的第三个范围缺口）**：我写的自检指令是
> 「自检：`node tools/_verify/j13-hard-gate.mjs <该页>` 必须 `RESULT: PASS — …`」

⇒ **它没写「不要读这个脚本的源码」**。worker 为了让「一次通过」而**去理解尺的实现**，
结果把整轮烧在阅读上。
⇒ **同一机制第三次出现**：**没有范围的指令会变成新的工作**（§0.49 的三实例表 + 本条 = 第四例）。

**修法（已补入三条定向消息 #22870/#22871/#22872，并写入后续 brief）**：
> **不要读判分器 / 硬门禁脚本的源码 —— 它们是黑盒。你只需运行它并看输出；
> 研究它们的实现不会让页面变好，只会把本轮烧掉。**
> 同时补上第二条：**不要读同目录兄弟页当格式参考**（骨架已在 brief 里逐字给出）。

**★ 可复用结论（补完 §0.49 那张表）**
| 指令 | 缺的范围 | 制造的新工作 |
|---|---|---|
| 「自检：运行这个门禁」 | **不要去读这个工具的实现** | 读 `classifyPage`/`J6-J13` 实现、兄弟页格式 ⇒ 整轮不落盘 |

### 0.53 受控实验的结果：**假设未被证实**（b6 两个臂都未交付）+ boss 的关键提醒

**实验设计（boss 确认为本会话唯一一次 Lead 主动的受控实验）**
- 单变量：同一页 `AgeModel`，brief 从 **2531 B → 1504 B**（只留目标文件/源码/锚表/逐字骨架/四行导航/「现在就写」）
- 内联任务文本：396 字符
- 先撤单再派单（三个卡住的 worker 已 `team_cancel`）

**读数：假设未证实。** 最小 brief 臂在本轮**也未交付**（`AgeModel.md` 仍 MISSING）。
⇒ b6 合计 **0/3**（完整 brief 臂 3 个 worker + 最小 brief 臂 1 个 worker，均未产出完整页；`BarterModel` 停在 714 B 骨架）。
⇒ **「规则累积变成工作量」这个假设不足以解释 b6** —— 去掉一半规则并没有让它落盘。

**★★ boss 的关键提醒（我接受，且它推翻了我的实验判据）**
> **九条判据对「内容类」缺陷完全无感。** 它们查的是 `checked/bare/J13/J6/J10/...` —— **全是格式与覆盖**，
> **查不出编造的名字、未核验的 API、未测量的断言** —— 而那正是本会话最贵的缺陷类（5 次派单编造，**0/5 由门禁发现**）。
> ⇒ **只以「九条全绿」为判据，这个实验会给出假阳性结论**：把「规则砍掉」误判为「变快了」，而真实代价不在读数里。

**boss 给出的正确目标：不是「最小」，而是【按类拆分】**
| 类别 | 例 | 能否机械检出 | 该放哪 |
|---|---|---|---|
| **格式类** | 裸 `:N`、链接写在正文、引用指向空行、正文 <2500B、示例无 `.Method(` | ✅ 九条判据全都能检出 | **可从 brief 移除，交给 R2** |
| **内容类** | 编造的名字、未核验的 API、未测量的断言 | ❌ 门禁抓不到，只能人读源码 | **必须留在 brief 里** |

⇒ 修正后的假设（比我原来的更精确、可检验）：**「格式类规则的累积变成了工作量，而内容类规则不会」**。
⇒ 正确实验是**三臂**：完整 / 最小 / **只留内容类**。

**★ 内容级抽核（第二个维度，我实测）**：对已入库的 b5 页抽 2 页回源：
```
VolunteerModel.cs             refs=6  fileLines=30   :11/:14/:17 均为真实 abstract 声明 ✅
DefaultPartyDesertionModel.cs refs=14 fileLines=135  :13/:19/:25 均为真实 override/private ✅
```
⇒ **已交付的 55 页所属的那条管道，在本次抽样上内容可信**；但 b6 **没有产物可抽**。

**★ 结论（诚实的阻塞回报）**：b6 在**两个臂**下都未交付，而我的预算不足以完成 boss 提议的三臂实验。
本线已交付状态是完整的（55 页入库 · 索引与磁盘逐数相等 · 两套门禁绿 · 工作区干净）。
⇒ 建议：**b6 登记为阻塞并停在这里**，把「三臂实验」交给下一轮（或另一条线）在有预算时做，
而不是在无法诊断的模式下继续烧预算。

### 0.54 ★★★★ 实验最终读数：**速度赢了，可信度输了** —— boss 预言的假阳性**实测坐实**

**先更正我自己的一个假阴性**：我上一轮报「最小臂也未交付」是**测量竞态**（我在文件落盘前查了它）。
最小臂**交付了** `AgeModel.md`（九条全绿）。
⇒ 与 boss 一起确认：**假设成立** —— minimal（1504 B）交付 · full（2531 B）**未交付** ⇒ **规则累积确实变成了工作量**。
⇒ boss 的「brief 落盘导致被迫先读」候选解释**被自己的数据否证并撤回**（最小臂的 brief 也在盘上）。

**★★ 但两个维度的读数不一样（关键）**
| 维度 | full 臂（2531 B）| minimal 臂（1504 B）|
|---|---|---|
| **速度** | 3 worker ⇒ **0 页** | 1 worker ⇒ **1 页（一轮内）** |
| **可信度** | —（无产物）| **发现 1 个编造标识符** |

**★ 内容级抽核抓到的真缺陷（九条判据全绿下的编造）**
`AgeModel.md:38` 写：
> 「读取当前模型：通过 `Campaign.Current.Models` 或 **`CampaignModels`** 获取当前的 `AgeModel` 实例。」

实测：
```
$ grep -rl --include=*.cs 'CampaignModels' bannerlord-1.4.7/
count: 0                      ← 全树 0 命中
$ grep -n 'public GameModels Models' bannerlord-1.4.7/TaleWorlds.CampaignSystem/Campaign.cs
529:  public GameModels Models   ← 真实的访问器（类型是 GameModels，不是 CampaignModels）
```
⇒ **`CampaignModels` 是一个不存在的类型名**，被当作「另一种获取方式」写给读者 —— **而九条判据全绿**。
⇒ **这正是 boss 预言的假阳性：把「规则砍掉」当成「变快了」，而真实代价（内容不可信）不在读数里。**

**★ 结论（两个维度合起来才有意义）**
- **格式类规则**：可以移到 R2（九条判据全部可检出）⇒ **直接减少规则条数**；
- **内容类规则**（名字来源、未测量断言）**必须留在 brief** —— 我那个 minimal brief **把它们一并删了**，
  于是用「更快」换来了「一个编造的名字」。
⇒ **正确形态 = 格式类最小 + 内容类保留**（不是「一路走到最小」）。这与我 §0.53 引 boss 的处方一致，
现在**有实验支持**（两个维度都测了）。

**★ 又一条同族教训（boss 命名）**：这次反转的根因是**测量竞态**（写未落盘 ⇒ 查不到），
与本会话的「过期 `git status`」「未锚定 grep」「两版错误校验脚本」同族：
> **读数与结论之间隔了一次未受控的测量。**
我这次**先核实再下结论**（没把「未交付」直接写成结论），所以它只是一次反转，没变成一轮错误返工。

**★ 待办**：`BarterModel.md` 仍是 714 B 骨架（未完成）⇒ 需补写或撤回；`AgeModel.md` 的 `CampaignModels` 必须修正。

### 0.4 判分器口径确认（避免重蹈 lead-26 的 D-v147-1 结论）

lead-26 记「J2 七节对 v1.4.7 不适用」——**该结论与本次派单冲突，以派单为准**。
实测反例（我本人跑的）：`content/v1.4.7/zh/api/custombattle/CustomBattleHelper.md` 用**七节**
（概述/心智模型/怎么用/关键成员/真实示例/参见/导航）⇒ `JUDGE total=1 pass=1 fail=0`，
`J2 missing=[]` · `J6=deep_pass` · `tier=handwritten_deep` · `J10 stray=0` · `J11 trailSlash=0`。
**⇒ 七节骨架在 v1.4.7 树里可行且已被既有页证明；本批一律用七节。**

```
$ node tools/_verify/lead-145zh-judge.mjs content/v1.4.7/zh/api/custombattle/CustomBattleHelper.md
  PASS … H2: 概述 | 心智模型 | 怎么用 | 关键成员 | 真实示例 | 参见 | 导航
```
对照：既有八节页 `campaign/Campaign.md` 实测 `FAIL · J2 missing=[怎么用,关键成员,真实示例,导航] · J10 stray=4`（链接写进正文节）。
⇒ 老页不合格不是骨架的问题，是**缺节 + 链接越位**；新页按七节写即可过。

---

## 1. 批次台账

| 批次 | 桶 | 页数 | 页 | 判分器（我独立复跑） | 门禁两套数（批后） | commit |
|---|---|---:|---|---|---|---|
| b1 | campaign | 9 | Hero · CharacterObject · Clan · MobileParty · PartyBase · TroopRoster · Settlement · Kingdom · MapEvent | 待收 | 待收 | 待提交 |

（lead-26 之前入库 12 页：`2be343d0e9` core-extra 2→9 · `3c72f2bd84` core-extra 9→14；本台账从 b1 起记。）

### b1 派单（2026-10-07，3 worker，并发 3）

| worker | 名 | 页 | 桶 |
|---|---|---|---|
| lead-29/w1 | hero-line | Hero（Hero.cs 3215 行）· CharacterObject（1106）· Clan（1987） | campaign |
| lead-29/w2 | party-line | MobileParty（5456）· PartyBase（1644）· TroopRoster（926） | campaign |
| lead-29/w3 | world-line | Settlement（1842）· Kingdom（1390）· MapEvent（2772） | campaign |

选型依据：`campaign` 是队列第 4 大桶（537 条），且既有 6 页只覆盖**入口**（`Campaign` / `CampaignGameStarter` /
`CampaignBehaviorBase` / `CampaignEvents` / `IFaction`），其 `_index.md` 的「尚未收录」节**逐字点名**了
`Hero` / `Party` / `Clan` / `Kingdom` / `Settlement` 家族 / `MapEvents` 等 —— 本批就是把这些点名项补上。
桶归属已核：`_dir-map-canonical.json` 规则 `TaleWorlds.CampaignSystem → campaign`（longest-prefix），
`Hero.cs` / `Clan.cs` / `CharacterObject.cs` / `Party/*` / `Roster/*` / `Settlements/*` / `MapEvents/*` 的命名空间
全在该前缀下，**没有更长的规则命中**（更长的只有 `.ComponentInterfaces` / `.CampaignBehaviors` /
`.GameComponents` / `.Conversation` / `.Issues` / `.ViewModelCollection`）。

**派单硬约束（已逐条写入 worker brief）**：leaf-only（不写 `_index.md`、不 commit）· 七节逐字标题 ·
`**类型：**` 行必须存在（否则 classifyPage 判 `noise`）· 链接只许出现在 `参见`/`导航` ·
`参见` ≥2 条可解析链接 · 逐成员写用途（非只列签名）· `File.cs:行号` 必须实测 · 真实可编译 C# 示例 ·
U+FFFD=0 · 禁用串 0 · 每个链接目标实测存在（跨桶 `../../<bucket>/<Type>`）· 导航块逐字给定。
