# lead-26 — v1.4.7/zh 手写深页写作线（接手自 lead-24）

分支 `main` · 仓库 `C:/WorkSpace/Bannerlord/BannerlordCode.github.io`
源码只读根：`C:/WorkSpace/Bannerlord/bannerlord-1.4.7`（**无** `Bannerlord.Source` 层 —— 那层只在 1.4.5）

## 侦察结论（全部实测，非推断）

| 项 | 值 | 命令 |
|---|---|---|
| 队列条目数 | **5,603** | `wc -l tools/_verify/missing-types-1.4.7-zh.txt` = 5604 行（含 1 行 `#` 头） |
| 队列可解析率 | **100%**（unresolvedInQueue = 0） | dir-map(schemaVersion=5 断言通过) + `types-1.4.7.json`（13,166 类型） |
| 源码树 | 存在 ✅ | `/c/WorkSpace/Bannerlord/bannerlord-1.4.7` |
| 队列桶分布 | mission-ext 1632 · campaign-ext 752 · campaign 644 · sandbox 631 · viewmodel 604 · **core-extra 594** · gui 261 · storymode 180 · engine 135 · save-system 51 · custombattle 40 · network 32 · localization 21 · system 18 · modulemanager 8 | 同上 |
| 现有 zh 桶页数 | campaign 6 · sandbox 6 · mission 5 · gui 4 · save-system 4 · campaign-ext 3 · core 3 · **core-extra 3** · engine 3 · network 13 · system 13 · custombattle 16 · modulemanager 1 · viewmodel 1 · mission-ext 1 · achievementsystem 1 · activitysystem 1 | `ls`（含 `_index.md`） |

## ★★ 三条会决定成败的实测发现

### D-v147-1：**v1.4.7 的页面规范与 v1.5.3 完全不同 —— 绝不能套用 v1.5.3 的七节骨架**
v1.4.7 现有 23 页用的是 **8 节 + 中文标签**：
```
**命名空间：** `Helpers` · **模块：** · **类型：** · **基类：** · **源文件：** `bannerlord-1.4.7/…`（声明见第 N 行）
## 概述 / ## 心智模型 / ## 何时使用 / 何时不要使用 / ## 成员说明 / ## 示例 / ## 风险与边界 / ## 依赖关系 / ## 参见
```
**没有** `## 关键成员` / `## 真实示例` / `## 导航`。

实测：`node tools/_verify/lead-145zh-judge.mjs content/v1.4.7/zh/api/core-extra/Game.md`
⇒ `FAIL · J2 missing=[怎么用,关键成员,真实示例,导航]`，但 **`J6=deep_pass · tier=handwritten_deep`**。
**⇒ 那个 judge 自己的抬头写着**：「J10/J11/J2 是**本线（lead-145zh）leaf 页的本地政策**，别线读到的是『不适用』」。
**⇒ 结论：J2/J10 对 v1.4.7【不适用】；不要照搬 v1.5.3 骨架。**

### D-v147-2：**权威门禁是 `tools/_v147_verify.mjs`（lead-2 所有），不是那个 judge**
判据（我读了全文 338 行）：
```
① classifyPage 每页 → deep_pass / stub / noise / family_entry_pass（产物门禁）
② 8 条禁用串（SomeValue / null; // replace / null; // 替换 / service = ... / read the actual subsystem API
   / Get...Implementation / start by reading the properties / 阅读时先通过属性了解状态）+ zh/en 公开类型套话
③ 【en 树不得漏中文】（代码围栏外）
④ 链接 route-relative 解析（同桶叶子 = `../Y`）
⑤ 反向前缀断言：不得带 `content/` 前缀；同版本链接不得含 `v1.4.7` 段
⑥ 自指链接闸门：页不得链到自己
⑦ 23 个 facade 页必须在 zh+en 都存在且 deep_pass
⑧ zh/en 路径镜像（en-only 非 _index 路径 = FAIL）
⑨ nav-spec 路由必须在磁盘上存在
⑩ 每个 api 子目录必须有 `_index.md`，且 `api/_index.md` 必须存在
```
★ **关键实测**：`classifyPage` 的 `getTypeLine` 正则 = `/\*\*(?:Type|类型)[：:]\*\*/`
⇒ **中文标签 `**类型：**` 是被门禁认的** ⇒ v1.4.7 的中文形态可以拿到 deep_pass（Game.md 就是证据）。
★ `sectionBody` 取**第一个**匹配的标题节 ⇒ `dependenciesReal`（≥2 链接）算的是 **`## 依赖关系`** 那一节（它在 `## 参见` 之前）。
★ 链接闸门只 FAIL **en-only** 路径 ⇒ **只写 zh 是安全的**（zh-only 只记录不失败）。

### D-v147-3：**v1.4.7 树【现在】就跑不过自己的门禁（先于我任何写入）**
```
$ node tools/_v147_verify.mjs
  FAIL: 5 hrefs leak a repo-root prefix or a same-version version segment
        content/v1.4.7/en/api/_index.md -> ../../../v1.4.7/zh/api/engine/   [same-version link carries a version segment]
        content/v1.4.7/en/api/_index.md -> ../../../v1.4.7/zh/api/core/
        （共 5 条）
  FAIL: 5 self-referential links
        content/v1.4.7/zh/api/custombattle/ArmyCompositionGroupVM.md -> ../ArmyCompositionGroupVM
        content/v1.4.7/zh/api/custombattle/ArmyCompositionItemVM.md  -> ../ArmyCompositionItemVM
        content/v1.4.7/zh/api/custombattle/CustomBattleSiegeMachineVM.md -> ../CustomBattleSiegeMachineVM
        content/v1.4.7/zh/api/custombattle/MapSelectionGroupVM.md    -> ../MapSelectionGroupVM
        content/v1.4.7/zh/api/mission/_index.md -> ../../../zh/api/mission/
  ✗ 且脚本【崩了】: TypeError: (nav.routes || []).map is not a function
        at tools/_v147_verify.mjs:310   ← tools/_v147_nav-spec.json 的 routes 不是数组
```
⇒ **10 条既存链接缺陷 + 1 个工具 bug**，均**先于我的写入**。我不修（那是 lead-2 的工具与别线的页），
但**要求每个 worker 不得增加这三类缺陷**，并把这条 grep 写进回报要求：
```
node tools/_v147_verify.mjs 2>&1 | grep -E 'REAL DEFECTS|self-ref|prefix leak|banned|CJK'
```
**★ 上报 boss-3 的处置建议**：① 修 `_v147_nav-spec.json` 的 `routes` 类型；② 那 10 条既存缺陷要么修、要么在验收时显式豁免，否则 v1.4.7 永远到不了 `RESULT: PASS`。

### D-v147-4：索引形态也不同于 v1.5.3
```
v1.4.7: 【每个桶有自己的 `_index.md`】（17 个桶全有）+ api/_index.md
        · 桶索引里的页面表是【手写 prose 表】：`## 本区页面（N）` + `| 页面 | 讲的是什么 |` + `[Game](./Game)`
        · 没有 marker 块（不是 nav-section-index 生成的）
        · 计数散在多处：桶索引 frontmatter description 的「目前 N 页」+ 标题「（N）」+ 正文「现在是 N 个」
                        + api/_index.md 的「中文树当前 N 篇类页」+「## 有页面的桶（8 个，N 篇）」+ 该桶行的页数与页面列表
v1.5.3: 只有 api/_index.md（+ localization/storymode 两个桶索引）
```
⇒ **尾活要同时改 `core-extra/_index.md` 与 `api/_index.md` 两处**，且计数锚点必须先 `grep` 再生成（手写清单必漏 —— v1.5.3 上已被 worker 抓到过一次）。

## 批次台账

| 批次 | 页数 | 页 | 判分器（我实测） | 提交 |
|---|---:|---|---|---|
| b1 | 5 | BoardGameHelper · AIDifficulty · BoardGameState · CaravanHelper · AlleyHelper | **deep_pass 5/5**（`mental>80 · dep-or-see-links=2 · real-csharp-example · overview-ok`）· j5r `unresolved=0` ×5 | 待提交（合并在 b1+b2 一次提交） |
| b2 | 2 | BarterHelper · BuildingHelper | **deep_pass 2/2** · j5r `unresolved=0` ×2 | ✅ 与 b1 合并 |
| b3+b4 | **5** | DialogHelper · EquipmentHelper · CraftingHelper · ItemHelper · SkillHelper | **deep_pass 5/5** · j5r `unresolved=0` ×5 | ✅ `3c72f2bd84`（7 files, 379+/6-） |

**v1.4.7 已入库 12 页 · 2 次提交**：
```
2be343d0e9  7 页（b1+b2）  core-extra 2 → 9 · api 23 → 30
3c72f2bd84  5 页（b3+b4）  core-extra 9 → 14 · api 30 → 35
```
**我独立复核 `3c72f2bd84`**：7 files · 全站 `audit-links ⇒ BROKEN_LINKS=0 / FILES_WITH_BROKEN=0` · `nav-orphans ⇒ orphans=0`（全站零 orphan）
`git status --porcelain -- content/v1.4.7/` ⇒ 【空】
★ 扩批手法已用两次且都安全：**先验前置（页全存在）+ 确认 `git diff --cached` 为空（索引未被触碰）⇒ 才能把批合并**。
★ 收尾教训：索引写者 worker-248 **连续三次在「最后一步」之前 settle**（门禁跑完但不 add/commit）。
  第四次降载催促（只给门禁+add+commit、明确「不要再改任何内容」）才落盘。
  我还并行派了一个**专职提交 worker（只做门禁+add+commit）**作为傅保险 —— 结果 248 先成功，我立即 `team_cancel` 掉了傅保险以免重复提交。
  ⇒ **可复用做法：当同一个 worker 反复在「最后一步」停下时，另派一个「只做最后一步」的极短任务，比反复催促更可靠；
     但必须准备好在两个都成功时取消其中一个（否则会重复提交）。**

### ★ 每批都发现的「1.4.7 与 1.5.3 不同」清单（累积证据：不能跨树复用事实）
```
b2  BuildingHelper.cs:97  1.4.7 = (town.IsCastle ? CastleBoostCost : TownBoostCost)   1.5.3 = GetBoostCost(town)
b4  SkillHelper.cs        1.4.7 只有 7 个成员（无 GetHeroRelevantSkillValueForPartyRole，
                          也不引用 Campaign.Current.Models.ClanMemberPartyRoleModel）；1.5.3 有 8 个
—— 文件行数完全相同（146 / 119），只有 `diff` 或重读才能发现。
```

### ★ b3/b4 的链接目标坑（已实际避开）
`DialogHelper` 原本打算链 `../../localization/LocalizedTextManager`（参照 v1.5.3），
**实测 v1.4.7 根本没有 localization 桶** ⇒ 换成已实测存在的目标（Campaign / CampaignGameStarter / Mission / Game / ViewModel / ScreenManager）。
**教训：跨树写页时，链接目标必须【在该树里实测存在】。**

### b1/b2 结构
```
worker-247 → b1 的 3 页（BoardGameHelper / AIDifficulty / BoardGameState，同一个 34 行文件）
worker-249 → b1 的 2 页（CaravanHelper / AlleyHelper）
worker-247 → b2 的 2 页（BarterHelper / BuildingHelper）
worker-248 → 索引尾（独占写 `core-extra/_index.md` + `api/_index.md`）
```
★ **尾活的关键技巧（可复用）**：我派出尾任务时先加了「第 0 步：`ls` 7 个页全部存在，缺一个就停下报我」的前置门。
  `AlleyHelper` 后落盘 ⇒ 我**实测两个索引文件 `git status` 为空**（尚未开始编辑）⇒ 才能**安全地把批从 5 页扩到 7 页**，
  用一个提交代替两个、少一轮计数刷新。**“先验前置 + 确认索引未被触碰”是扩批不丢更新的前提。**

### ★ b2 抓到的 1.4.7-vs-1.5.3 真实 API 分叉（证明「不能复用另一棵树的源码事实」）
```
BuildingHelper.GetDaysToComplete 的 boost 成本：
  1.4.7: int num4 = (town.IsCastle ? buildingConstructionModel.CastleBoostCost : buildingConstructionModel.TownBoostCost);   （第 97 行）
  1.5.3: int boostCost = buildingConstructionModel.GetBoostCost(town);                                                        （第 97 行）
⇒ 同一文件、同一行号、**不同的 API 形态**。行数完全相同（146），`diff -q` 才看得出差异。
  若我照搬 v1.5.3 的事实，这一行会写错，而 J3 的行号引用仍然是“对的”（因为行号确实是 97）。
  ⇒ **行号引用只能证明“这一行存在”，不能证明“这一行的内容被正确描述了”。** 这是 J3 这类门禁的固有盲区。
```

## ★★ 结构性发现：队列里 **201 条（3.6%）** 落进 v1.4.7 **根本不存在**的桶

```
用 dir-map 解析全部 5,603 条，再看 content/v1.4.7/zh/api/ 下真实存在的 17 个目录：
   storymode      180 条   ← 目录不存在
   localization    21 条   ← 目录不存在
   ⇒ 合计 201 / 5,603 = 3.6% 的队列条目【无处可写】
```
**但这不是 bug，是 v1.4.7 树的一个【刻意设计】** —— `api/_index.md` 有一节明写：
```
## 两个还没有落笔的领域
- 本地化（TaleWorlds.Localization）—— 55 个 .cs、21 个公开类型、约 518 KB
- 战役剧情（StoryMode）—— 89 个 .cs、101 个公开类型、约 978 KB
…它们既没有桶目录，也没有任何一篇类页 —— 它们是文档树的盲区，不是被跳过的几个类。
这两处不放链接：目录并不存在，指过去只能落到 404；写一个空索引页则会让读者以为那里本来就该有页面。
```
**而 `tools/_v147_treespec.md`（权威桶表）里【有】 localization**：
```
line 97 : | `campaign` | 589 | `localization` | 53 |
line 126: | `localization` | `TaleWorlds.Localization` | `TaleWorlds.Localization` (55) |
```
⇒ **两份权威文件互相矛盾**：treespec 把 localization 列为正式桶，`api/_index.md` 却把它当「盲区、不建目录」。
**已上报 boss-3 裁决（#20024）**，三个选项：(a) 保持现状 + 显式登记「这 201 条被设计排除」（则真实可写上限是 5,402）
(b) 建桶（需树的所有者决定 + 改 `api/_index.md`）(c) 只做其一。**我不自行决定 —— 这是结构决策。**

**★ 实操后果（已实际踩到一次）**：b3 原本打算给 `DialogHelper` 的 `依赖关系` 链 `../../localization/LocalizedTextManager`，
我实测后发现 **v1.4.7 根本没有 localization 桶**，若照发就是断链 ⇒ 换成已实测存在的目标。
**教训：跨树写页时，链接目标必须【在该树里实测存在】，不能凭另一棵树的印象。**

## 未完成项 / 已知风险

- [ ] **索引尾未派**（等页面落盘）：`core-extra/_index.md`（页面表 + 3 处计数）+ `api/_index.md`（3 处计数 + 桶行页面列表）
- [ ] **D-v147-3 的 10 条既存缺陷 + 1 个工具 bug** —— 已上报，待 boss-3 / lead-2 处置；我不碰
- [ ] **en 树镜像**：v1.4.7 门禁要求 zh/en 路径镜像（en-only 非 index = FAIL），但 zh-only 只记录不失败 ⇒ 我按「只写 zh」推进；en 由镜像流程处理
- [ ] 队列 5,603 条只做了 5 条 ⇒ 这是多会话工程量，不是本会话能收完的
