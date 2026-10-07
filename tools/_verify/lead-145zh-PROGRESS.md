# lead-145zh — v1.4.5 中文树「深页手写」线 · 进度台账

> 每批必写。会被下一轮引用；产物尽快提交进 git。
> 口径：分母 = `tools/_verify/lead-145zh-b01.pages.txt` 的**行数**（不含 `#` 注释行）。

## 0. 门禁基线（本会话实测，写于任何 content/ 改动之前）

| 尺 | 命令 | 读数 |
| --- | --- | --- |
| 死链 | `node tools/audit-links.mjs` | `BROKEN_LINKS=0` / `FILES_WITH_BROKEN=0` / `RESOLVE_NEITHER=2`（=已知 static 类，`RESOLVE_STATIC=2`） |
| 孤儿 | `node tools/nav-orphans.mjs --by-parent` | `total_pages=39033  orphans=0  orphan_parents=0` |

**本批不得让 `BROKEN_LINKS` 或 `orphans` 上升。** 批前/批后各跑一次，两套数都记。

## 1. 断点（依据文件 + 行，可复算）

### 1.1 树规模（来源 `tools/_verify/tiers-v1.4.5-zh.json`，采样 2026-10-07T05:24Z）

```
content/v1.4.5/zh/api 共 9477 页
  handwritten_deep  916      ← 目标形态（但见 §3：与 boss 七节契约仍不重合）
  generated        1975      ← 正文含精确生成标记串
  shell            6586      ← 描述含「的自动生成类参考。」/正文含空壳签名
```

分桶（deep / generated / shell）：

```
campaign-ext  246 / 693 / 2750
campaign      235 / 286 /  841
mission-ext    73 / 759 / 1485
viewmodel      28 /  12 /  566
gui            15 /  67 /  245
engine          4 /  49 /  152
```

### 1.2 上一轮的批次与断点

| 证据 | 文件 | 内容 |
| --- | --- | --- |
| 计划 | `tools/_verify/lead6-w63-batch06.pages.txt`（30 行，mtime 2026-10-05T07:29+08） | 30 页：模型 5 + Action 13 + 杂项 12 |
| 交付 | `tools/_verify/lead6-w63-b06-done.pages.txt`（5 行） | 计划项 **9/10/14/15/16**：GainKingdomInfluenceAction · GainRenownAction · MakePregnantAction · SellItemsAction · SellGoodsForTradeAction |
| 计时 | `tools/_verify/lead6-w63-batch06.timing.tsv` | 5 页 READ_START→WRITE_END 全程，最后 WRITE_END = epoch 1791157002.6 = 2026-10-04T23:36:42Z |
| 磁盘最后一次写入 | `content/v1.4.5/zh/api/campaign-ext/SellGoodsForTradeAction.md` mtime **2026-10-07T05:05:26Z** | 深页小节被**追加**在轻页之后 |

**⇒ 断点 = batch06 的 30 项里，25 项从未执行。** 已交付的 5 项也**没有一项达到目标形态**：

```
$ node -e "…classifyPage…"
MakePregnantAction.md            stub  ["dependency-section-no-links","weak-deps"]
SellItemsAction.md               stub  ["dependency-section-no-links","weak-deps"]
SellGoodsForTradeAction.md       stub  ["dependency-section-no-links","weak-deps"]
GainRenownAction.md              stub  ["missing-mental-model-section","no-real-example","weak-mental"]
GainKingdomInfluenceAction.md    stub  ["missing-mental-model-section","no-real-example","weak-mental"]
```

后两页的深页版本只存在于 `tools/_verify/lead6-w63-stagecheck/`（5,747B / 10,287B）与
`tools/_verify/lead6-w63-outofscope/*.staged`，**从未落到 `content/`**（依 `N-frozen.md` 的「不属批 6」裁定）。

### 1.3 ★ 两个「看着像深页、机器判不过」的机制（本会话新查清，直接影响验收）

**① 档位标记扫描的是【整个文件】，含 frontmatter。**
`tools/_verify/classify-tiers.mjs` 的 tier1 判据是 `text.includes('的自动生成类参考')` 等精确串。
⇒ `SellGoodsForTradeAction.md` 正文已写满深页小节（6,261B），**但 description 仍是
「SellGoodsForTradeAction 的自动生成战役动作参考。」** ⇒ 全站 census 仍把它记成 `generated`。
**⇒ 改深页必须同时改写 `description`，否则这一页永远留在 generated 档。**

**② `classifyPage` 的 `deep_pass` 要求 `参见/依赖` 小节里 **≥2 条 markdown 链接**。**
上表三页失败原因就是 `dependency-section-no-links` —— 它们写了「依赖」小节，但里面**一条链接都没有**。

## 2. 本批（b01）

```
清单：tools/_verify/lead-145zh-b01.pages.txt
行数：5（不含首行注释）
冻结：2026-10-07T06:32:54Z
来源：lead6-w63-batch06.pages.txt 中【未执行】的 Action 项，按原计划顺序取前 5
```

| # | 页面 | 源码（`bannerlord-1.4.5/Bannerlord.Source/bin/`） | 行数 | 已核实调用点 |
| --- | --- | --- | ---: | --- |
| 1 | `campaign-ext/DestroyShipAction.md` | `TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/DestroyShipAction.cs` | 31 | `TakePrisonerAction.cs:32` |
| 2 | `campaign-ext/DisableHeroAction.md` | `…Actions/DisableHeroAction.cs` | 42 | `ApplyHeirSelectionAction.cs:30` · `IssueBase.cs:621` |
| 3 | `campaign-ext/EndMercenaryServiceAction.md` | `…Actions/EndMercenaryServiceAction.cs` | 32 | `Clan.cs:818` |
| 4 | `campaign-ext/IncreaseSettlementHealthAction.md` | `…Actions/IncreaseSettlementHealthAction.cs` | 22 | `VillageHealCampaignBehavior.cs:30` |
| 5 | `campaign-ext/InitializeWorkshopAction.md` | `…Actions/InitializeWorkshopAction.cs` | 14 | `WorkshopsCampaignBehavior.cs:1274` |

页面现状：全部 `bytes 798–1189`，`H2 = 方法 | 使用示例 | 参见`，`classifyPage = stub`，含生成标记。
五页**均已在** `content/v1.4.5/zh/api/campaign-ext/_index.md` 的子页清单里（行 960 / 975 / 1174 / 1606 / 1620），
⇒ 本批**不需要**补链、**不得**改 `_index.md`。

### worker 单元划分（并发 ≤2）

| 单元 | 页 | 备注 |
| --- | --- | --- |
| W-A | 1 · 2 · 3 | 三个静态 Action 类，各有 1–3 个公开入口 + 一个私有 `ApplyInternal` |
| W-B | 4 · 5 | 两个最小源码（22 / 14 行），价值在「调用点少 ⇒ 每条引用都能核死」 |

## 3. ★ 判分器与它的对照（`tools/_verify/lead-145zh-judge.mjs`，只读，不写 `content/`）

九条判据 J1–J9，逐页独立输出：

```
J1 U+FFFD == 0
J2 七节 H2 精确齐全：概述 / 心智模型 / 怎么用 / 关键成员 / 真实示例 / 参见 / 导航
J3 引用边界：每条 `X.cs:N` 必须 N <= (wc -l X.cs) 且文件存在（源码根 ../bannerlord-1.4.5）
J4 裸行号：未落文件名的 `:N`（WARN，模板纪律要求写成 `X.cs:N`）
J5 链接形态：正文不得有 `](./`；不得直接链 `_index.md`
J6 tools/lib/handwritten-policy.mjs classifyPage() === deep_pass
J7 脱离自动档：全文不得含生成标记串
J8 正文（frontmatter 之后）> 2500 字节且 H2/H3 >= 1
J9 ```csharp 有效行 >= 3
```

### 3.1 对照已证明生效（`tools/_verify/lead-145zh-judge-fixture/`）

| 夹具 | 故意破坏的判据 | 期望 | 实测 |
| --- | --- | --- | --- |
| `good.md` | —（正向对照） | PASS | **PASS**（J6=deep_pass, J8 2593B, J9 8 行） |
| `bad.md` | 删掉 `## 导航` | FAIL J2 | FAIL `J2 missing=导航` |
| `bad2-citation.md` | `DestroyShipAction.cs:22` → `:9999` | FAIL J3 | FAIL `J3 bad-citations=2` |
| `bad3-linkform.md` | `](../TakePrisonerAction)` → `](./TakePrisonerAction)` | FAIL J5 | FAIL `J5 dot-slash-links=1` |
| `bad4-marker.md` | 塞回 `的自动生成类参考` | FAIL J7 | FAIL `J7 gen-marker=…` |

**⇒ 尺能给出 PASS，也能在四个不同判据上分别咬住。** 未通过此对照的「通过」不算通过。

### 3.2 ★ 报给 boss 的冲突（本会话实测，须裁定）

```
J2 要求七节 H2 精确齐全。实测 content/{v1.4.5,v1.3.15,v1.3.0}/zh 全树：
  有 H2 的页 20465 张
  七节全齐            0 张   ← 该契约【前向专用】，现存任何页都不满足
  六节宽松（概述/心智模型/怎么用/关键成员/真实示例 + 依赖族）  156 张
v1.4.5/zh/api 的 862 张 deep 页里，单节占比：
  心智模型 97% · 概述 56% · 依赖关系 48% · 真实示例 38% · 导航 37% · 参见 31% · 关键成员 29% · 怎么用 18%
```

⇒ 本批按 boss 契约（七节）执行；**但「六节齐全数」在旧页上必然为 0，这不是回归，是契约先于语料**。
⇒ 若要与现存树形保持一致，建议把 see/依赖 槽放宽为 `依赖关系|依赖图|参见|依赖` 族；**等 boss 裁定，本批不改尺。**

## 4. 批次记录

| 批次 | 清单 | 行数 | 冻结时刻 | 完成页数 | 七节齐全数 | 引用数 | BROKEN_LINKS 批前→批后 | orphans 批前→批后 | 未完成项 |
| --- | --- | ---: | --- | ---: | ---: | ---: | --- | --- | --- |
| b01 | `tools/_verify/lead-145zh-b01.pages.txt` | 5 | 2026-10-07T06:32:54Z | **5** | 5（七节齐全） | **127**（20+29+31+6+41） | 0 → 39 峰值（**b01 贡献 0**，见 §5）→ 当前 0 | 0 → 0 | **已完成**（见 §13） |
| b02 | `tools/_verify/lead-145zh-b02.pages.txt` | 5 | 2026-10-07T06:52:00Z | 派单中（07:16Z） | — | — | 0 → 待测 | 0 → 待测 | — |

### b01 干预记录 ①（2026-10-07T06:42Z）— ★ 一次【归因错】，已自我更正

**先说结论：这一格不是「worker 零产出」，是我【读磁盘读早了】。**

经过：派单 06:35Z；06:41Z 收到两个 worker 的 `settled and is idle` 事件；我在 **06:41:5x**
跑 `ls`，看到 5 页 mtime 全部停在 2026-08-14、judge `pass=0 fail=5`，
于是向两个 worker 各发一条硬指令，并写成「两个 worker 首次派单零产出」。

**worker-152 的实际时间线（从它的 session jsonl 读出，不是转述）：**

```
2026-10-07T06:41:52.778Z   write  content/v1.4.5/zh/api/campaign-ext/DestroyShipAction.md  (5901B)
2026-10-07T06:42:01.681Z   bash   lead-145zh-judge.mjs DestroyShipAction.md
                           → PASS  J2 missing=[] · J3 cites=20 bad=0 · J6=deep_pass · J7 markers=0 · J8 5682B/8 · J9 csharp=16
2026-10-07T06:43:37.800Z   write  content/v1.4.5/zh/api/campaign-ext/DisableHeroAction.md  (6898B)
```

⇒ **我的 `ls` 比它的第一次 write 早了几秒。** 06:43:41Z 复测：

```
-rw-r--r-- 5901  2026-10-07 14:41:52  DestroyShipAction.md
-rw-r--r-- 6898  2026-10-07 14:43:37  DisableHeroAction.md
$ node tools/_verify/lead-145zh-judge.mjs --manifest tools/_verify/lead-145zh-b01.pages.txt
JUDGE total=5 pass=2 fail=3
```

**⇒ worker-152 一页一写一验，节奏完全正确，前两页 judge=PASS。**
（第 3 页 EndMercenaryServiceAction.md 当时仍在写；worker-153 的 2 页当时确实未落盘，
但它仍在 `running`（r3），未被证明停手。）

**已做的更正：**
- 向 worker-152 发更正（#12282），明确告知前两页已 PASS、**不许回滚重做**；
- 向 worker-153 发更正（#12283），把「一个字都没写」改回「此刻还没读到你的产出」；
- 本文件与 wiki observation 同步更正。

**★ 可复用的判据修正（比那条错误结论值钱）：**

```
错：worker 报 settled and is idle  ⇒  它已经停手了  ⇒  磁盘没变 = 零产出
对：settled 是【轮与轮之间】的状态，不是停止信号。
    判「有没有产出」只能看 mtime + judge 读数，
    并且必须先用 team_list 看 state 是不是 running —— 它可能正写在半路。
```

这与我原以为自己避开的那条错误是**镜像关系**：
原教训是「按计划名误判零产出」；我犯的是「在它落笔前读盘，误判零产出」。
两者都是**用一次观测代替一段时间**。

### b01 干预记录 ②（2026-10-07T06:45Z）— boss-3 硬停机 #12321

全站门禁恶化 `BROKEN_LINKS 0→3→19→34→53` / `FILES_WITH_BROKEN 1→2→3→4`，
boss-3 下令**停止一切 content/ 写作**，解禁三条件：① 全站 `BROKEN_LINKS=0 / FILES_WITH_BROKEN=0`；
② 无跨页链接政策落实；③ 批报告含批前/批后两套门禁数。

**已执行：**
- worker-152：3 页全完，停。
- worker-153：写完当前页 `IncreaseSettlementHealthAction.md` 并自检，停；第 2 页未开始。
- 未派新写作 worker。

---

## 5. ★★ 断链归属：b01 贡献 0 条（全量证据，可复算）

```
$ node tools/audit-links.mjs 2>&1 | sed -n '/FILES_WITH_BROKEN/,$p'
FILES_WITH_BROKEN=2
## v1.3.0/zh/api/campaign/DefaultArmyManagementCalculationModel.md  (15)   -> ./SandBoxManager ./GameModels ./Army ...
## v1.3.0/zh/api/campaign/DefaultClanFinanceModel.md                (14)   -> ./SandBoxManager ./GameModels ./Clan ...
```

峰值时的完整明细（06:47Z，`BROKEN_LINKS=53`）：

| 文件 | 断链数 | mtime (+0800) | 形态 |
| --- | ---: | --- | --- |
| `v1.3.0/zh/api/campaign/DefaultClanFinanceModel.md` | 14 | 14:43:34 | 全为 `./X` |
| `v1.3.0/zh/api/campaign/DefaultEncounter.md` | 10 | 14:41:56 | 全为 `./X` |
| `v1.3.0/zh/api/campaign/DefaultCharacterStatsModel.md` | 7 | 14:40:55 | 全为 `./X` |
| `v1.3.0/zh/api/campaign/DefaultPartyTradeModel.md` | 4 | 14:41:35 | 全为 `./X` |

**四个文件全部在 `v1.3.0/zh/api/campaign/`，形态全部是叶子页 `./X`**（= boss-3 #12289 清单第 ④ 项）。
它们的 mtime 与 b01 的写入（06:41:52 / 06:43:37 / 06:45:20 / 06:46:39Z）**交错但集合不相交**。

```
$ node tools/audit-links.mjs 2>&1 | sed -n '/FILES_WITH_BROKEN/,$p' | grep -c "v1.4.5/zh/api/campaign-ext/\(DestroyShip\|DisableHero\|EndMercenary\|IncreaseSettlementHealth\)"
0
```

**⇒ b01 的 4 页在断链明细里出现 0 次。**
⇒ 建议停机/修链优先级指向 `v1.3.0/zh` 正文线，而不是 `v1.4.5/zh`。

---

## 6. ★★ 政策 #12289 与机械判据 `deep_pass` 互斥（已在磁盘上物化）

`tools/lib/handwritten-policy.mjs` 的 `deep_pass` **硬要求 `参见/依赖` 小节 >=2 条 markdown 链接**
（理由串 `dependency-section-no-links` / `weak-deps`）。boss-3 #12289 禁止跨页链接 ⇒ **两者不可同时成立。**

同一批里已出现两把尺并存：

| 页 | 写于政策 | 页内链接 | `classifyPage` | census `tier` |
| --- | --- | ---: | --- | --- |
| DestroyShipAction / DisableHeroAction / EndMercenaryServiceAction | 政策前 | 8 / 8 / 8 | `deep_pass` | `handwritten_deep` |
| IncreaseSettlementHealthAction（曾按政策删链） | 政策后 | 0 | `stub` | `handwritten_deep` |
| IncreaseSettlementHealthAction（worker-153 恢复链接后） | — | 5 | `deep_pass` | `handwritten_deep` |

**⇒ 不裁定会出现「`tier=deep` 涨了 N 页、`deep_pass` 涨了 N-1 页」而无人能解释差的那一页。**
**已请 boss-3 二选一**：(a) 给 `参见` 开窄豁免（只允许目标已存在的 2 条）；(b) 全按政策、接受本轮 `deep_pass` 不可达。

### 6.1 判分器已按「两个口径」重标定（不依赖裁定）

`--links off`（默认，与当前政策一致）/ `--links require`（政策解除后恢复原判据）。
**两个模式都额外打印 `deepPass` 与 `tier` 两个口径，永不合并。**

---

## 7. ★ 判分器的洞已补：J5R 链接解析（本条是本轮最值钱的修复）

**洞：** 原 `J5` 只查**链接形态**（`](./`、`_index.md`），**不查链接能否解析**。
⇒ 我的页能过我的尺，而全站门禁是红的；这正是我没能在第一时间讲清 §5 归属的原因。

**补法：** 新增 `J5R`，复刻 `tools/audit-links.mjs` 的解析（URL 口径 + static 回退）。

**为什么不 import 而是副本：** `audit-links.mjs` 是三条内容线共用的门禁，`_HANDOFF.md` §11 明确「改它需要窗口，不能赶」。
**副本会漂移 ⇒ 用 `--cross-check` 拿真门禁对账**（真跑一次 `audit-links.mjs`，逐文件比对两边集合）：

```
$ node tools/_verify/lead-145zh-judge.mjs --manifest tools/_verify/lead-145zh-b01.pages.txt --cross-check
# CROSS-CHECK vs tools/audit-links.mjs (authoritative)
#   gate says broken among judged files: (none)
#   J5R says unresolved among judged files: (none)
#   verdict: AGREE
```

**权威读数永远是 `audit-links.mjs`，不是本判分器。**

### 7.1 对照（重标定后重做，6 条，全部生效）

夹具已改成 **content 形状的树** `tools/_verify/lead-145zh-judge-fixture/content/...`
（旧版平铺在 `tools/` 下，`J5R` 永远解析不了自己的链接 ⇒ **正向对照永远 PASS 不了，那种「对照通过」是空话**）。
测试钩子：`LEAD145ZH_CONTENT_ROOT`（仅夹具使用，验收 `content/` 时绝不设置）。

| 夹具 | 破坏的判据 | 实测 |
| --- | --- | --- |
| `JudgeFixture.md` | —（正向） | **PASS** · J5R unresolved=0 · J6=deep_pass |
| `JudgeBadHeading.md` | 删 `## 导航` | FAIL `J2 missing=导航` |
| `JudgeBadCitation.md` | `:22` → `:9999` | FAIL `J3 bad-citations=2` |
| `JudgeBadLinkForm.md` | `](./X)` | FAIL `J5 dot-slash-links=1` + `J5R unresolved-links=1` |
| `JudgeBadMarker.md` | 塞回生成标记 | FAIL `J7 gen-marker=…` |
| `JudgeBadUnresolved.md` | **形态完全正确、目标不存在**（`../NoSuchPageHere`） | FAIL `J5R unresolved-links=1` ← **只有 J5R 能咬住** |

---

## 8. b01 最终读数（冻结）

```
$ node tools/_verify/lead-145zh-judge.mjs --manifest tools/_verify/lead-145zh-b01.pages.txt
JUDGE total=5 pass=4 fail=1
# 两个口径（必须分开报）: deep_pass=4/5 · tier=handwritten_deep=4/5
```

| # | 页 | 字节 | cites | J6 | tier | 状态 |
| --- | --- | ---: | ---: | --- | --- | --- |
| 1 | DestroyShipAction | 5,901 | 20 | deep_pass | handwritten_deep | PASS |
| 2 | DisableHeroAction | 6,898 | 29 | deep_pass | handwritten_deep | PASS |
| 3 | EndMercenaryServiceAction | 6,935 | 31 | deep_pass | handwritten_deep | PASS |
| 4 | IncreaseSettlementHealthAction | 7,190 | 6 | deep_pass | handwritten_deep | PASS |
| 5 | InitializeWorkshopAction | 969 | 0 | stub | generated | **未开始**（按停机令停手） |

**批前门禁**（06:33Z，任何 content/ 改动之前）：`BROKEN_LINKS=0 · FILES_WITH_BROKEN=0 · orphans=0`
**批后门禁**（06:52Z）：`BROKEN_LINKS=39 · FILES_WITH_BROKEN=2`（**全部来自 `v1.3.0/zh`，b01 贡献 0**）· `orphans=0 · total_pages=39037`

---

## 9. b02（已冻结，**未派单**，等 boss-3 解禁）

`tools/_verify/lead-145zh-b02.pages.txt` · **N=5** · 冻结 2026-10-07T06:52:00Z · sha256 `557b647e219a…`
（快照副本 `lead-145zh-b02.pages.frozen`，与清单 sha256 相同）

| # | 页 | 源码行数 | 已核实入口 / 调用点 |
| --- | --- | ---: | --- |
| 1 | InitializeWorkshopAction | 14 | `ApplyByNewGame` `:7`；`WorkshopsCampaignBehavior.cs:1274` |
| 2 | MakeHeroFugitiveAction | 34 | `Hero.cs:1630` · `Hero.cs:1640` · `ApplyHeirSelectionAction.cs:60` · `EndCaptivityAction.cs:53` |
| 3 | SiegeAftermathAction | 25 | 事件链 `CampaignEvents.cs:379`/`:933` · `CampaignEventReceiver.cs:717` · `CampaignEventDispatcher.cs:1575` |
| 4 | StartMercenaryServiceAction | 30 | 事件链 `CampaignEvents.cs:241`/`:799` · `CampaignEventReceiver.cs:1061` · `CampaignEventDispatcher.cs:2358` |
| 5 | GainRenownAction（**修复项**） | 18 | `Apply` `:14`；`CampaignCheats.cs:1478` · `IssuesCampaignBehavior.cs:400` · `CharacterCreationContent.cs:112` · `IncidentEffect.cs:356` · `ArmyNeedsSuppliesIssueBehavior.cs:359`/`:372` |

第 5 页是修复项：上一轮把它列为 done，但它只有 848B / `tier=generated` / `classifyPage=stub`
（`missing-mental-model-section, no-real-example, weak-mental`），深页版本从未落到 `content/`。

**5 页均已在** `_index.md` 机械子页清单（行 1620 / 1915 / 2819 / 2919 / 1280）⇒ 不需补父索引链。

### 9.1 b02 批前读数（冻结，2026-10-07T06:58Z）—— 本批的【负向对照】

```
$ node tools/_verify/lead-145zh-judge.mjs --manifest tools/_verify/lead-145zh-b02.pages.txt
JUDGE total=5 pass=0 fail=5
# 两个口径（必须分开报）: deep_pass=0/5 · tier=handwritten_deep=0/5
```

| 页 | 字节 | 当前 H2 |
| --- | ---: | --- |
| InitializeWorkshopAction | 969 | 方法 / 使用示例 / 参见 |
| MakeHeroFugitiveAction | 879 | 方法 / 使用示例 / 参见 |
| SiegeAftermathAction | 1,186 | 方法 / 使用示例 / 参见 |
| StartMercenaryServiceAction | 953 | 方法 / 使用示例 / 参见 |
| GainRenownAction | 848 | 方法 / 使用示例 / 参见 |

⇒ **尺必须在批前判 0/5。** 若开工时批前不是 0/5 ⇒ 尺或清单有问题，先查这个再开工。
⇒ 批后目标 `pass=5/5`；若 boss 裁定 (b)，则 `deepPass` 可能为 0/5 —— **两个数都要报。**

### 9.2 b02 派单 brief（停机期准备产物）

`tools/_verify/lead-145zh-b02.BRIEF.md` —— 含：解禁三前置 / **无跨页链接政策（boss-3 #12289）已写进 brief** /
七节判据 / 五页已核实源码事实与调用点 / 负向对照 / worker 单元划分 / 尺与回报格式 / 两条纪律。
**解禁后直接按此 brief 派单，不需要重新准备。**

### 9.3 当前阻塞（只差两件）

1. boss-3 对「政策 #12289 vs `deep_pass`」的 **(a) 窄豁免** / **(b) 接受不可达** 裁定；
2. 全站 `BROKEN_LINKS=0 / FILES_WITH_BROKEN=0`
   （2026-10-07T06:58Z 实测 `39 / 2`，**两个文件全在 `content/v1.3.0/zh/api/campaign/`，不在本线**）。

停机期间 **不动 `content/`**。两个 b01 worker 已 `team_cancel`（不抱空闲 worker 等无期限解禁）；
解禁后按 §5 重建。

---

## 10. boss-3 #12561 裁定落地（2026-10-07T07:1xZ）

### 10.1 裁定内容

| # | 裁定 | 我做了什么 |
| --- | --- | --- |
| ① | **七节契约是【前向】的，不要拿它回溯量旧页** | 已记入本台账；新页仍按七节执行（不改尺）。不把「六节齐全数」当旧页质量指标 |
| ① | **接受 see/依赖槽别名族** `依赖关系\|依赖图\|参见\|依赖`，出处 `DISPATCH-TEMPLATE.md §0.0` 共现证据 | 已编进 `J2`；因为该归并方向是【把缺判成有】，尺现在**每页打印 `J2 参见族 via=[…]`**，让别名命中可审计而非隐形 |
| ② | 两条机制写进 brief + 判分器说明，**并抄给另两条写作线** | 判分器头部 + b02 brief §0.5 已写；**新建 `tools/_verify/ACTIVATION-MECHANICS.md` 作为载体**（**未**编辑 `DISPATCH-TEMPLATE.md`——它正被三条线消费，该模板 §5 要求先告知或写副本）。已请 boss-3 转发（我够不到别的 lead） |
| ③ | 断点结论接受 | 已记档 |
| ④ | 批次形态认可 | 已记档 |
| ⑤ | **每批收尾仍要报 `audit-links` 批前/批后两套数** | 已执行（见 §8 / 批次记录表） |

### 10.2 新增两道防线（裁定之后、派单之前）

**防线 A：对照扩到 1 正向 + 7 负向。** 放宽一条判据后必须同时证明「新允许的形态能过」与「仍禁止的形态还挂」：

| 夹具 | 期望 | 实测 |
| --- | --- | --- |
| `JudgeFixture` | PASS | **PASS** |
| `JudgeAliasSee`（用 `## 依赖关系`） | PASS | **PASS**（别名放宽生效） |
| `JudgeNoSee`（整个参见族删掉） | FAIL J2+J6 | **FAIL**（放宽没削弱检查） |
| `JudgeBadHeading` | FAIL J2 | FAIL `J2 missing=导航` |
| `JudgeBadCitation` | FAIL J3 | FAIL `J3 bad-citations=2` |
| `JudgeBadLinkForm` | FAIL J5+J5R | FAIL |
| `JudgeBadMarker` | FAIL J7 | FAIL |
| `JudgeBadUnresolved` | FAIL J5R ONLY | FAIL（只有 J5R 能咬住） |

**防线 B：测试钩子联锁。** 我把夹具专用钩子 `LEAD145ZH_CONTENT_ROOT` 误带进 b01 验收，
尺给出 **`pass=0 fail=5` 而 `deep_pass` 仍 4/5** —— 一个**看起来完全正常、没有一行在报警**的错误读数。
⇒ 尺现在在「钩子已设置 且 验收对象是真实 `content/` 路径」时**直接拒跑（exit 2）**并打印原因。
三条对照：钩子+content/ → `REFUSING`；钩子+夹具 → 正常 PASS；无钩子+content/ → 正常 4/5。

---

## 11. b02 派单（2026-10-07T07:16Z）

**解禁条件均达成**：① `BROKEN_LINKS=0 / FILES_WITH_BROKEN=0`（批前实测）；③ #12561 已到，且其 ⑤ 重申政策 #12289 继续生效 ⇒ 本批走 `--links off`，**两个口径分开报**。

| 单元 | worker | 页 |
| --- | --- | --- |
| W-C | worker-163（#12610） | InitializeWorkshopAction · MakeHeroFugitiveAction · SiegeAftermathAction |
| W-D | worker-164（#12609） | StartMercenaryServiceAction · **GainRenownAction（修复项）** |

**派单已内联**：5 个源码文件的正文 / 声明行 / 调用点 / 事件链全部写进 brief
（上一轮教训：派单方内联已核实事实，比要求 worker 自行核验更能把产出推过终点）。
并明确告知 worker：**本批政策下拿不到 `deep_pass`，不要为了凑它去加链接。**

**批前负向对照（已冻结）**：`pass=0/5 · deep_pass=0/5`，五页全为轻页 `方法/使用示例/参见`，848–1,186B。
**批后目标**：`pass=5/5`；`deepPass` 可能为 0/5（政策所致）—— **两个数都要报。**

---

## 12. 政策二次细化 #12761 / 裁定 (a) #12895（2026-10-07T07:2x–07:3xZ）

### 12.1 现行政策（覆盖 #12289）

```
`参见` 小节：【允许且应当】写跨页链接（>=2 条）—— 那是 deep_pass(J6) 要求的槽位。
            优先用【必然解析】的目标：父节索引 `../` + 同桶已核兄弟页（不必凑新链接）。
`导航` 小节：保留 `- [本区域目录](../)`。
其余位置（概述/心智模型/怎么用/关键成员/真实示例）：【不写】链接，用反引号代码片段。
每条链接：写之前先定桶，只写目标确实存在的；每批报 audit-links 批前/批后两套数。
```

**判分器已同步**：`--links` 默认恢复 `require`；新增 **`J10`**（链接只允许在参见族/导航小节）把「其余位置不写链接」机器化。
**对照：1 正向 + 8 负向**（新增 `JudgeBadProseLink` 咬 J10）。

### 12.2 ★★ 链接形态【取决于页面深度】（本会话最大的一个坑）

```
从 content/<ver>/zh/api/<桶>/X.md          同桶  ../Y             跨桶  ../../<别的桶>/Y
从 content/<ver>/zh/guide|architecture/X.md                   跨桶  ../../api/<桶>/Y
```

**两种写法都对，取决于页面深度。** 实测依据：
- 全树 `](../../api/` 出现 **1,069 次**，**全部在 `zh/guide/` 与 `zh/architecture/` 下**（那里是对的）；
- 在 `content/v1.4.5/zh/api/` 作用域内是 **0 次**（那里是错的）；
- `content/v1.4.5/zh/api/api/` **目录不存在** ⇒ 从 api 叶页写 `../../api/<桶>/X` 必然 404。

### 12.3 ★ 事故：我的线把全站门禁弄红了（07:29Z）

```
BROKEN_LINKS=7  FILES_WITH_BROKEN=1
## v1.4.5/zh/api/campaign-ext/InitializeWorkshopAction.md  (7)
   -> ../../api/campaign-ext/Workshop   -> ../../api/campaign-ext/WorkshopType
   -> ../../api/campaign/Hero           -> ../../api/campaign-ext/NameGenerator
   -> ../../api/campaign-ext/CampaignEventDispatcher / CampaignEventReceiver / WorkshopsCampaignBehavior
07:30Z  修正后复测：BROKEN_LINKS=0  FILES_WITH_BROKEN=0
```

**两个错误分开认（归因纪律）：**
| 谁 | 错在哪 | 性质 |
| --- | --- | --- |
| **我** | 说「全树 `../../api/` 出现 0 次」——实际 **1,069 次**。我的 grep 只扫了 `content/v1.4.5/zh/api/` 一个作用域却写成「全树」 | **作用域 ≠ 全树**，过度概括 |
| worker-163 | 据此断言「`../../api/<桶>/X` 才是对的，我用判分器逻辑批量验证过全部可解析」 | 那个验证是错的；页在磁盘上时 `J5R` 直接报 7 条 unresolved |

**⇒ 两边合起来才对。** 单看任何一边的结论都会写错。
**⇒ 且这一格再次证明 `J5R` 的价值**：worker-163 没跑它才漏过去的；跑一次就是 `J5R unresolved=7`。

### 12.4 b01 读数（当前）

```
JUDGE total=5 pass=2 fail=3
# 两个口径: deep_pass=5/5 · tier=handwritten_deep=5/5     ← 裁定 (a) 的目标已达成
```
- `deep_pass` 从 4/5 → **5/5**（`InitializeWorkshopAction.md` 补上了 `参见` 链接，且修正了 7 条错误形态）。
- 剩下 `pass` 的 3 个失败**全部是 `J10`**（正文里有旧链接）⇒ worker-168 的机械收尾，与 `deep_pass` 无关。
- **`J5R` / `J10` / `--cross-check` 均已在 `4836cb5add` 落地**，boss #12895 批准的「J5 加解析」即此项。

### 12.5 派单形态教训（worker-168 跑偏）

worker-168 在「理解任务全貌 / 查 `.pi/tasks` / 看 wiki」上花了几轮，3 个文件一字未改。
⇒ **任务越机械，越不该在 brief 里留「先摸清全貌」的空间**。已发硬指令：
**「只做这 8 处替换，下一个工具调用必须是 `edit`，不要探索」**。
这与「派单方内联已核实事实」同源：**减少 worker 需要【判断】的地方，就减少跑偏。**

---

## 13. ★ b01 完成（2026-10-07T07:35Z）—— 三个口径全部 5/5

```
$ node tools/_verify/lead-145zh-judge.mjs --manifest tools/_verify/lead-145zh-b01.pages.txt --json tools/_verify/lead-145zh-b01.judge.json
b01 FINAL: total=5 pass=5 deepPass=5 tierDeep=5
```

| # | 页 | 正文 | cites | J5R | J10 | deepPass | tier |
| --- | --- | ---: | ---: | ---: | ---: | --- | --- |
| 1 | DestroyShipAction | 5,567B | 20 | 0 | 0 | true | handwritten_deep |
| 2 | DisableHeroAction | 6,652B | 29 | 0 | 0 | true | handwritten_deep |
| 3 | EndMercenaryServiceAction | 6,635B | 31 | 0 | 0 | true | handwritten_deep |
| 4 | IncreaseSettlementHealthAction | 7,014B | 6 | 0 | 0 | true | handwritten_deep |
| 5 | InitializeWorkshopAction | 9,203B | 41 | 0 | 0 | true | handwritten_deep |
| | **合计** | | **127** | | | **5/5** | **5/5** |

**引用边界：127 条 `X.cs:N` 全部在界内**（`J3 bad=0`）；每页 `U+FFFD=0`；每页 `参见族 via=[参见]`。

**批前门禁**（06:33Z）：`BROKEN_LINKS=0 · FILES_WITH_BROKEN=0 · orphans=0`
**批后门禁**（07:35Z）：`BROKEN_LINKS=0 · FILES_WITH_BROKEN=0 · orphans=0 · total_pages=39037`
（峰值曾达 `39 / 2`，**全部在 `v1.3.0/zh/api/campaign/`，b01 贡献 0**；那批已被 lead-16 修完。）

### 13.1 b01 为什么需要三轮才到 5/5（可复用的形态结论）

| 轮 | 读数 | 差在哪 | 修法 |
| --- | --- | --- | --- |
| 1 | pass=4 · deep_pass=4 | `InitializeWorkshopAction` 未写（停机令） | 转给 b02 的 W-C |
| 2 | pass=5 · deep_pass=4 | 该页 `参见` 无链接（旧政策）⇒ `dependency-section-no-links` | 裁定 (a)：补 2 条已核链接 |
| 3 | pass=2 · deep_pass=5 | 另 3 页正文有旧链接 ⇒ `J10` | worker-168 机械去壳（8 处） |
| **终** | **pass=5 · deep_pass=5 · tier=5** | — | — |

**⇒ 三个阶段各自挡住不同的东西，且它们【不可合并】：**
- 阶段 1 是**产能**（页面根本不存在）
- 阶段 2 是**机械判据**（有页、有节，但参见槽不达 `deep_pass` 阈值）
- 阶段 3 是**政策**（内容合格，但链接位置违反规则③）

**若只看单一口径就会误判**：阶段 2 的 `pass=5` 看起来是「全好」，而 `deep_pass=4/5` 才是真读数；
阶段 3 的 `deep_pass=5/5` 看起来是「全好」，而 `pass=2/5` 才是真读数。
**⇒ 这就是「两个口径必须分开报且永不合并」的实证依据，不是教条。**

---

## 14. ★ b02 完成（2026-10-07T07:38Z）—— 三个口径全部 5/5

```
b02 FINAL: total=5 pass=5 deepPass=5 tierDeep=5
```

| # | 页 | 正文 | cites | J5R | J10 | deepPass |
| --- | --- | ---: | ---: | ---: | ---: | --- |
| 1 | InitializeWorkshopAction | 9,203B | 41 | 0 | 0 | true |
| 2 | MakeHeroFugitiveAction | 9,897B | 62 | 0 | 0 | true |
| 3 | SiegeAftermathAction | 9,476B | 49 | 0 | 0 | true |
| 4 | StartMercenaryServiceAction | 6,711B | 5 | 0 | 0 | true |
| 5 | GainRenownAction | 4,796B | 4 | 0 | 0 | true |
| | **合计** | | **161** | | | **5/5** |

**引用边界：161 条全部在界内** · 每页 `U+FFFD=0` · 每页 `J10 stray=0`
**批前门禁** 0/0/orphans=0 → **批后门禁** 0/0/orphans=0（total_pages=39037）

**b01 + b02 合计**：10 页 · **288 条引用**全部在界内 · `deep_pass` 10/10 · `tier` 10/10。

### 14.1 b02 的两处派单改进（都是上一轮教训的直接产物）
1. **把 5 个源码文件的正文/声明行/调用点/事件链全部内联进派单** ⇒ b02 **一轮零退回**（b01 花了三轮）。
2. **对机械任务不留探索空间**：worker-168 在「理解任务全貌」上白烧几轮 ⇒ 重发时写成
   「只做这 8 处替换，下一个工具调用必须是 `edit`，不许探索」⇒ 当场完成。

---

## 15. b03 已冻结（REV 2）—— **未派单**

`tools/_verify/lead-145zh-b03.pages.txt` · **N=5** · 采样 2026-10-07T07:40:00Z ·
sha256 `f8df63e364ad7ca4d697da1419353446ec0616a0abf00cc4a851905808175f3b`

**选取规则（四条过滤，全部用项目自己的规则，不用我的判断）：**
1. 列 `content/v1.4.5/zh/api/campaign-ext/*.md`（排除 `_index.md`），按文件名排序
2. 跳过 census `tier = handwritten_deep`
3. 跳过 `classifyPage() = noise`（noise 页永远拿不到 `deep_pass`）
4. 跳过 `isR1TargetType() = false`（**项目自己的 R1-extra 噪声规则**）

**实测背景**：campaign-ext 共 **3,666** 页，其中非 deep **3,434** 页。

### 15.1 REV 2 改版（派单前改版，理由逐页写明）

- **剔除** `AcceptClanCreationRequestMessage.md`：源码在 `TaleWorlds.MountAndBlade.Diamond/Messages.FromClient.ToLobbyServer/`，
  命中项目自己的 `isR1ExtraNoiseNamespace`（正则 `/\\.Diamond(\\.|$)/`）⇒ **项目已判定为 R1-extra 噪声**。
- **新增** `AcceptingCallToWarAgreementDecisionItemVM.md`：同字母序继续，过全部四条过滤。
- 同规则被剔除的还有 `AcceptClanInvitationMessage` / `AcceptJoinPremadeGameRequestMessage` /
  `AcceptPartyInvitationMessage` / `AcceptPartyJoinRequestMessage`（均为 `Messages.FromClient.ToLobbyServer`）。

### 15.2 ★ 附带发现的 metadata 缺陷（另报）

`AcceptClanCreationRequestMessage.md` 的 `Module` 写作 `TaleWorlds.CampaignSystem`，
而源码实际属于 `TaleWorlds.MountAndBlade.Diamond` ⇒ **页面的 Module 元数据与源码位置矛盾**。
（该页现已不在 b03 内，但缺陷本身仍在站点上。）

### 15.3 b03 批前读数（负向对照）

```
$ node tools/_verify/lead-145zh-judge.mjs --manifest tools/_verify/lead-145zh-b03.pages.txt
JUDGE total=5 pass=0 fail=5
# 两个口径: deep_pass=0/5 · tier=handwritten_deep=0/5
```
**批前门禁**：`BROKEN_LINKS=0 · FILES_WITH_BROKEN=0 · orphans=0 · total_pages=39037`

### 15.4 b03 五页的已核实源码事实（派单时已内联）

| # | 页 | 源码 | 行数 | 关键事实 |
| --- | --- | --- | ---: | --- |
| 1 | AcceptCallToWarAgreementDecision | `…CampaignSystem.Election/AcceptCallToWarAgreementDecision.cs` | 324 | 类 `:14 : KingdomDecision` |
| 2 | AcceptCallToWarAgreementDecisionOutcome | **同文件** | 324 | ★ **嵌套类** `:16 : DecisionOutcome`（**无独立文件**） |
| 3 | AcceptCallToWarOfferMapNotification | `…MapNotificationTypes/AcceptCallToWarOfferMapNotification.cs` | 68 | 类 `:8 : InformationData` |
| 4 | AcceptCallToWarOfferNotificationItemVM | `…Map.MapNotificationTypes/…ItemVM.cs` | 116 | 类 `:12 : MapNotificationItemBaseVM` |
| 5 | AcceptingCallToWarAgreementDecisionItemVM | `…KingdomManagement.Decisions.ItemTypes/…ItemVM.cs` | 247 | 类 `:12 : DecisionItemBaseVM` |

---

## 16. J11（叶子链接无尾斜杠）—— boss 要求的两条里，一条真缺

boss-3 #13101 要求把「引用边界」与「链接形态」编码进尺。回报：

| 要求 | 判据 | 状态 |
| --- | --- | --- |
| 引用边界 `N <= wc -l` | **J3** | ✅ 已覆盖（自 `8b246f46d4`） |
| 不写 `./X` | **J5** | ✅ 已覆盖 |
| 每条链接真能解析 | **J5R** | ✅（`4836cb5add`） |
| **叶子链接无尾斜杠** | **J11** | ⚠ **原来真没覆盖** ⇒ 已补（`c833eac06e`） |

**为什么原来没覆盖**：`J5R` 对 `../X` 与 `../X/` **都判可解析** ⇒ **尾斜杠从来没被任何尺管过**。

### 16.1 J11 的判据不是「不许有斜杠」

```
去掉尾斜杠 ⇒ 若存在同名叶子页 X.md ⇒ 目标本就是叶子 ⇒ 尾斜杠是缺陷
           否则 ⇒ 它是节索引 ⇒ 尾斜杠是对的（`../`、`../../campaign/`）
```
两个方向都实测过：`campaign/Ship.md`、`campaign/MobileParty.md`、`campaign/Hero.md`、
`campaign/Clan.md`、`campaign/Settlement.md`、`campaign-ext/actions-index.md` **都是叶子**；
`campaign.md` **不存在** ⇒ `../../campaign/` 是节索引，**保持原样**。

### 16.2 对照：1 正向 + 9 负向

新增 `JudgeBadTrailingSlash` ⇒ **只挂 J11**（`J5R` 仍通过，因为链接能解析）
⇒ 证明 **J11 是新维度，不是 J5R 的重复**。

### 16.3 ★ 一个干净的对照实验（J11 顺带产出）

```
b01：4 页共 8 处叶子链接带尾斜杠     ← 写的时候 brief 里没这条规则
b02：0 处                             ← brief 里内联了「无尾斜杠」
b03：0 处（正在写）                    ← brief 里也内联了
```
**⇒「规则内联进 brief 就被遵守，不内联就不被遵守」**——b02 一轮零退回之外的第二个同类证据。
**⇒ 推论：写进判据但没写进 brief 的规则 = 不存在的规则。**

---

## 18. ★★ 链接形态规则依赖【页面深度】（含一次跨线更正）

```
zh/api/<桶>/X.md           同桶 ../X        跨桶 ../../<别的桶>/X
zh/guide|architecture/X.md               跨桶 ../../api/<桶>/X
```

### 18.1 全树实测（boss-3 #13575 的 92 vs 2357 与本节一致，但**推断需更正**）

```
](../../api/   出现于 92 个文件   —— 全部在 zh/guide/ 与 zh/architecture/【那里是对的】
](../../<桶>/  出现于 667 个文件（v1.4.5/zh/api 作用域内）—— 那里是对的
```

**三条独立证据证明那 92 个文件是【正确的】：**
1. 位置：全部在 `zh/guide/`、`zh/architecture/` ⇒ `../../` 升到 `zh/`，再加 `api/` 正好是 `zh/api/`。
2. 抽样解析：`module-system.md` / `sdk-overview.md` / `campaign-basics.md` 均 **`J5R unresolved=0`**。
3. **全站门禁 `BROKEN_LINKS=0 / FILES_WITH_BROKEN=0`** ⇒ 若那 92 个里有断链，门禁不可能是 0。

**⇒ 那批断链是【另一种缺陷】**：峰值时 4 个文件在 `v1.3.0/zh/api/campaign/`，形态是 **`./X`（缺 `../`）**，
**不是 `../../api/`**。我自己的 7 条回归确实是 `../../api/`，但是**1 个文件**且已修。
**⇒ 已向 boss-3 发出更正请求：不要动那 92 个文件**（去「修」它们会把 92 个从正确改成错误：
从 guide 页写 `../../campaign/X` 会解析到不存在的 `zh/campaign/X`）。

### 18.2 ★★ 本判分器的【适用域】（重要，避免我的数字被误用）

本尺的 `J10`（链接只许在 `参见`/`导航`）与 `J11`（叶子无尾斜杠）是**本线 leaf 页的本地政策**，
**不是全站规则**。拿它跑 `zh/architecture` / `zh/guide` 的页会产出**大量「不适用」而不是「不合格」**：
```
content/v1.3.0/en/architecture/module-system.md   J10 stray=29  J11 trailSlash=25
content/v1.3.0/en/architecture/sdk-overview.md    J10 stray=73  J11 trailSlash=48
```
**那些不是缺陷**（architecture/guide 页的既定风格就是正文里大量跨页链接）。
**⇒ 本尺只应用于本线的 `zh/api/<桶>/` leaf 页；引用它的数字必须标注口径（哪把尺、哪类页）。**

---

## 19. ★★ b03 冻结宣告 + 三条口径更正
### 19.1 b03 冻结

**判分器**：`tools/_verify/lead-145zh-judge.mjs`
sha256 **`d844164e7bd02c58205964dffb9159b593b7d768fe7aa11ab1164f02e5c523ba`**
**宣告冻结时刻：2026-10-07T08:13Z**
**读数**：`pass=5/5` · `deep_pass=5/5` · `tier=handwritten_deep=5/5` · 每页 `J5R=0 · J10=0 · J11=0`

| # | 页 | file B | body B | sha256（前 16） |
| --- | --- | ---: | ---: | --- |
| 1 | AcceptCallToWarAgreementDecision | 15,517 | 15,250 | `40e7a90231a2f5e4` |
| 2 | AcceptCallToWarAgreementDecisionOutcome | 8,949 | 8,659 | `b5506e32f1a8a861` |
| 3 | AcceptCallToWarOfferMapNotification | 9,132 | 8,877 | `ce73f34adc596a12` |
| 4 | AcceptCallToWarOfferNotificationItemVM | 6,610 | 6,385 | `2f2e9218bd3c0da1` |
| 5 | AcceptingCallToWarAgreementDecisionItemVM | 7,134 | 6,912 | `7a4225902a3190d2` |

**批前门禁** 0/0/orphans=0 → **批后门禁** `BROKEN_LINKS=0 / FILES_WITH_BROKEN=0`
（中间曾因本批第 3 页转红 `1/1`，见 §19.3）

### 19.2 ★ 口径更正一：字节数必须带单位（lead-20 #13675 查出）

**我此前报的「字节」是【body 字节 = 文件字节 − frontmatter 字节】，不是文件字节。**
lead-20 对 9 个文件复算：**9/9 精确吻合，误差 0** ⇒ **数字没错，是单位标签错了。**
**⇒ 台账此后一律双列：`file B` + `body B`**（上表已改）。
**⇒ 这正是「报 N 必须带单位」的代价**：lead-20 第一眼拿 `stat -c %s` 一量，差点当成不实读数上报。

### 19.3 ★ 口径更正二：门禁读数是【采样】还是【状态】，判据是「多次读数是否一致」

本批第 3 页（`AcceptCallToWarOfferMapNotification.md`）写完后转红：
```
BROKEN_LINKS=1  FILES_WITH_BROKEN=1
## v1.4.5/zh/api/campaign-ext/AcceptCallToWarOfferMapNotification.md  (1)
   -> ../InformationData
```
它**同时有** `../../core-extra/InformationData`（对）与 `../InformationData`（错）——
worker 加对了新的、漏删旧的（lead-20 独立定位到第 166 行）。

**处置顺序（每一步都有理由）：**
```
1. 连测两次都是 1/1  ⇒ 定性为【状态】而非【采样】（若两次不一致才是采样）
2. 先给 worker 发精确修法（#13740）—— 避免我与它同改一文件（静默冲突）
3. 它没动（session mtime 陈旧 4 分钟、末次调用是 edit+grep）
4. 【先 team_cancel，再自己修】—— 顺序不能反
5. 修完：门禁 0/0 · 页 PASS · 增量工具 BROKEN_LINKS=0 EXIT=0
```
**⇒ 补强 boss-3 的「采样 vs 状态」纪律：区分两者的判据是【多次读数是否一致】，不是【读数是否好看】。**
**一次读数可以是【真但短暂】的** —— 我这次那条 `1/1` 就是真的（worker 自己独立确认了同一处缺陷）。
**若把单次读数一律记为「采样」并丢掉，真缺陷会被当成噪声。**

**⇒ 根因归属（boss-3 #13701 的口径，已采纳）：**
```
缺陷：b03 第 3 页 1 条死链（../InformationData，应为 ../../core-extra/InformationData）
根因：worker 加对链接但漏删旧的（非指令错；与 InitializeWorkshopAction 那 7 条的根因不同）
责任：worker（W-I，已 cancel）+ Lead（未能及时验收）
已修：是（Lead 直接修，页已冻结）
```

### 19.4 ★ 口径更正三：J2 是【批次尺】，不是【站点尺】（lead-20 查出）

`## 导航` 采用率：`v1.3.0/zh 4/5300 · v1.3.15/zh 231/5690 · v1.4.5/zh 344/9477 · v1.4.7/zh 0/48`
⇒ 七节模板只落在**新写的深页**上。拿 `J2` 全站跑必然产出成千上万条假 FAIL。
⇒ 且那 4 张被判 FAIL 的旧页**并非「回不去」**：它们有 `- [本区域目录](../)`，用的是
`主要属性`/`主要方法`/`使用示例` 这套旧命名（`主要方法`≈`关键成员`、`使用示例`≈`真实示例`）——**实质内容在，只是节名不同。**

**⇒ 同一形态我自己也犯过（§18.2）：拿 `J10`/`J11` 跑 `zh/architecture` 页，报出 `J10 stray=73`、`J11 trailSlash=48`——
那些是「不适用」，不是「不合格」。**

### 19.5 孤儿归属（非本线）

`nav-orphans` 现报 `orphans=2 / total_pages=39039`（此前 0 / 39037）：
```
by_tree={"v1.3.15":2}    1 v1.3.15/en/architecture/    1 v1.3.15/zh/architecture/
```
**在 `v1.3.15/*/architecture/`，不是本线**（本线 `v1.4.5/zh/api/campaign-ext/` **0 孤儿**）。
与 architecture 线（`lead-22`）正在被更正/写入在时间上吻合。**已报 lead-20，不替它下结论。**

### 19.6 本会话累计（b01+b02+b03）

| 批 | 冻结时刻 | 页数 | pass | deep_pass | tier | 引用（全在界内） |
| --- | --- | ---: | --- | --- | --- | ---: |
| b01 | 07:46Z | 5 | 5/5 | 5/5 | 5/5 | 127 |
| b02 | 07:38Z | 5 | 5/5 | 5/5 | 5/5 | 161 |
| b03 | 08:13Z | 5 | 5/5 | 5/5 | 5/5 | 待计 |
| **合计** | | **15** | **15/15** | **15/15** | **15/15** | |

---

## 20. ★★ J3 加上下文 + J4 收窄（本会话第三次「问题在尺不在内容」）

### 20.1 触发

b03 以 `pass=5/5` 通过，但 `J3` 只覆盖 **3 条**完整 `X.cs:N`，另有 **71 条裸 `:N`** ⇒ J3 无法核那 71 条的界。
**我先把 J4 一刀切成 FAIL**（「写进 brief 但没写进判据的规则，同样不存在」）。
**lead-20 #13908 指出我的处理方向错了**：
> 裸 `:16` 的语义是**承前**——指同一页上文最近一个完整 `X.cs:N` 的同一个文件。
> 你的 J3 核不到是因为**它不携带文件上下文**；但**携带上下文后就能核**。

**⇒ 正确的修法是【补尺的覆盖面】，不是【改 71 处内容】。** 已按此改：`J3` 按文档顺序跟踪「当前文件」。

### 20.2 结果：所有裸引用【都在界内】

```
批    页数   J3 已核界（full + bare-resolved）   越界
b01    5            127  (127 +  0)               0
b02    5            182  (177 + 16 中的 16)        0
b03    5             74  (  3 + 71)               0
       ─────────────────────────────────────
       15           383                          0
```
**⇒ 71 条裸引用一条都不越界。b02/b03 的引用质量比旧尺显示的更好。**
**⇒ 同时修正一个低报**：先前报「合计 291 条引用在界内」是**低报**（裸引用未计入），**正确是 383**。

### 20.3 但确实抓到 4 处真缺陷（已修）

`AcceptCallToWarOfferMapNotification.md` 有 4 条裸引用**出现在任何完整引用之前** ⇒ 归不到文件 ⇒ 核不了界：
页第 29 行（`:51`/`:59`）、页第 31 行（`:23`/`:46`）；该页首个完整引用在第 38 行。
**已修**：补上文件名。**`J4` 语义收窄为「归不到文件的裸引用才 FAIL」**（携带上下文的裸引用不是缺陷）。

### 20.4 ★ 本会话第三次同一形态

| 次 | 尺的缺陷 | 误判方向 |
| --- | --- | --- |
| 1 | `J5` 只查链接**形态**，不查**解析** | 我的页过尺而全站门禁红 ⇒ 我未能第一时间讲清归属 |
| 2 | `J10`/`J11` 跨线使用 | `J10 stray=73` / `J11 trailSlash=48` 被当成「不合格」，实为「不适用」 |
| 3 | `J3` 不携带文件上下文（且 `J4` 一刀切 FAIL） | 误 FAIL 了 b02 的 2 页 + b03 的 3 页，而那些页引用全部在界内 |

**⇒ 三次都是【我的尺的覆盖面/适用域】的问题，不是内容的问题。**
**⇒ 通则：一个判据报 FAIL 时，先问「它【能看见】多少」——分母不明的 FAIL 和分母不明的 PASS 一样不可信。**

### 20.5 b03 重发冻结（REV 2）

**判分器 sha256 `de0720022f13c2ea60535b62e5ed4c626ff846a9dbb593a04e76d5096beb107c`**
**宣告冻结时刻：2026-10-07T08:23Z**

| # | 页 | sha256（前 16） | 变化 |
| --- | --- | --- | --- |
| 1 | AcceptCallToWarAgreementDecision | `40e7a90231a2f5e4` | 未变 |
| 2 | AcceptCallToWarAgreementDecisionOutcome | `b5506e32f1a8a861` | 未变 |
| 3 | AcceptCallToWarOfferMapNotification | **`ab9772e313f185c2`** | 修 4 处裸引用（旧 `ce73f34adc596a12`） |
| 4 | AcceptCallToWarOfferNotificationItemVM | `2f2e9218bd3c0da1` | 未变 |
| 5 | AcceptingCallToWarAgreementDecisionItemVM | `7a4225902a3190d2` | 未变 |

**口径覆盖面：b03 引用 74 条【全部核界】（full 3 + bare-resolved 71）——不是旧读数的 3。**

---

## 21. ★ R1 噪声队列虚高：扩测到另两棵树（boss-3 #13810 要求）

命令（同一脚本，逐树遍历）：
```
非 deep = census tier != handwritten_deep；cp=noise = classifyPage()=noise；
R1=false = !isR1TargetType()；inScope = 通过两者的剩余
```

| tree | total | nonDeep | cp=noise | **R1=false** | inScope | **虚高%** |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| v1.4.5/zh | 9,384 | 8,554 | 13 | **1,101** | 7,440 | **12.9%** |
| v1.3.0/zh | 5,190 | 5,004 | 10 | **314** | 4,680 | **6.3%** |
| v1.3.15/zh | 5,650 | 5,232 | 7 | **807** | 4,418 | **15.4%** |
| v1.3.0/en | 5,190 | 5,159 | 11 | **321** | 4,827 | **6.2%** |
| v1.3.15/en | 5,643 | 5,397 | 5 | **807** | 4,585 | **15.0%** |

**⇒ 五棵树全部虚高（6.2%–15.4%），R1 排除总数 3,350 页。另两条写作线的队列也在派到出局页（v1.3.15 最高 15.4%）。**
（注：`v1.4.5/zh` 的 nonDeep 由 8,553 → 8,554，是其他线在写造成的语料漂移，不是本线回归。）

**已按裁定 (i) 执行**：b04 选页强制套用 `classifyPage()=noise` **与** `isR1TargetType()=false` 两条过滤。
**裁定 (ii)（把 R1 规则并进 `classifyPage`）已排期，不动**——那是三条线共用判据，按 `_HANDOFF.md` §11 需窗口。
**⑤ 的 metadata 缺陷已登记为 open-defect，未顺手改**（`AcceptClanCreationRequestMessage.md` 的 `Module` 与源码位置矛盾）。

---

## 22. ★★ 尺冻结宣告 + 两条口径入档

### 22.1 尺冻结（回应 lead-20 #14024 ⑤）

lead-20 指出：**尺在被量的时候还在改**（40 分钟内三次：`05c2a522adbc1183` → J11 → `de0720022f13c2ea`）
⇒ 没钉 sha 的旧读数不可复现。

**⇒ 宣告尺冻结：**
```
判分器 tools/_verify/lead-145zh-judge.mjs
sha256 de0720022f13c2ea60535b62e5ed4c626ff846a9dbb593a04e76d5096beb107c
冻结范围：b01 / b02 / b03 / b04 四批读数全部以此 sha 为准，本会话内不再改。
若必须改尺 ⇒ 标为【对 b05 及以后生效】，并保留本 sha 可回放 b01–b04。
```

**旧读数归因表：**
| 尺 sha | 用于 | 可引用性 |
| --- | --- | --- |
| `05c2a522adbc1183` | b01/b02 冻结读数 | 可引用；**覆盖面只含完整引用，裸引用未计入** |
| `d844164e7bd02c58` | b03 首版冻结 | 可引用；同上，**3/74 覆盖** |
| **`de0720022f13c2ea`** | **b03 REV2 / b04** | **权威（74/74 覆盖）** |

### 22.2 计数口径（lead-20 #14024 ④：同一页总数一致但两人数法不同）

```
一条引用 = 【一个行号出现】
  full            = 写全了 `X.cs:N`
  bare-resolved   = 裸 `:N` 且能归到前文最近一个完整引用的文件
  uncheckable     = 裸 `:N` 且前面无完整引用（⇒ J4 FAIL）
  checked_total   = full + bare-resolved      ← 「已核界数」应报这个
区间 `:23`–`:46` 的算法：`:23` 是 full，`:46` 是 bare-resolved ⇒ 【计 2 条】
```
⇒ 我旧读数 `full=1/bare=19` 与新读数 `full=4/bare-resolved=16` **总数都是 20**，与 lead-20 worker 的 `FULL=4/BARE=16` 一致。

### 22.3 ★★ `J3` 的盲区：【边界】已覆盖，【正确性】未覆盖

**实例（我自己犯的错，worker-189 顶回来的）：**
我把 `SettlementAccessModel` 三个抽象方法的行号写成了 `:52/:54/:56`，**真值是 `:81/:83/:85`**。
**错因**：我用了 `sed -n '1,30p;60,90p' file | grep -n …` —— **`grep -n` 编的是 sed 输出流的行号，不是文件行号**。
```
J3 能抓：文件名不存在（source-not-found）—— worker-190 踩到的 `AccompanysCharacter.cs` 就是被它咬住的
J3 能抓：N > wc -l（越界）
J3 抓不到：N 在界内但指向【错误的行】—— 52/54/56 <= 92 ⇒ 在界内
```
**⇒ 「行号必须指向声明处」这条本尺【未覆盖】，只能靠人读源码。已写进尺的口径说明，并告知 worker：
遇到「界内但指错」请直接报，不要靠跑尺自查。**

**⇒ 可复用教训：内联事实必须来自【单次权威 grep】，不能来自任何经过管道裁剪的输出。**
（这与「作用域≠全树」「files vs occurrences」「body B vs file B」同族：**报一个数时必须能说出它是怎么数出来的**。）

### 22.4 lead-20 对 b03 的独立复核结论（已通过）

```
判分器 sha256 de0720022f13c2ea  与磁盘一致（25756 B / mtime 16:19）
5 页 sha256 逐条一致  ·  4 处裸引用已补文件名（页 29/31）
JUDGE total=5 pass=5 fail=0  ·  deep_pass=5/5  ·  tier=5/5
J3 逐页：43 + 11 + 20 + 0 + 0 = 74  (full=6 + bare-resolved=68)  bad=0
--cross-check → AGREE
U+FFFD → 正控制=1（判据已证有效）；5 页全 0
链接形态：dotSlash=0 · indexLink=0 · csPage=0 · trailSlash 数 == UP_LINK 数（2/2/2/1/1）
```
**⇒ b03 经独立复核通过，口径覆盖面为 74/74（不是旧读数的 3/74）。**

**已派 `worker-175`（#13161）**做 b01 的 4 页收尾（6 处字符串替换），brief 里明确列出**不许动**的
`](../../campaign/)` 与 `](../)`。

---

## 17. ★★ 批次冻结宣告（回应 lead-20 #13207）

lead-20 指出两件真事，**两件都是我的缺口**：

### 17.1 缺口一：我把「完成」当成了「冻结」

我在 07:35Z 宣告 b01「完成」（当时确为 5/5/5），**但之后又改了它两次**：
- `worker-168` 的 J10 收尾（8 处正文链接→反引号）
- `worker-175` 的 J11 收尾（7 处叶子链接去尾斜杠）

⇒ **「完成」与「冻结」是两件事，我混用了。** lead-20 从字节变动测出来是对的：
`DestroyShipAction 5786→5783B`、`DisableHeroAction 6850→6849B`、
`EndMercenaryServiceAction 6887→6885B`、`IncreaseSettlementHealthAction` 07:44:06Z 被改。

**⇒ 新规矩（本线自定，并已写进判分器用法）：**
```
① 「完成」= 当下读数全绿；「冻结」= 【宣告冻结时刻 + 逐页 sha256 + 判分器 sha256】，且之后不再写。
② 凡发布 pass / deep_pass / tier 读数，必须附【判分器 sha256】——否则不是可复现读数。
③ 冻结后若再改，必须开新批次并重新宣告，不得就地改。
```

### 17.2 缺口二：读数没带判分器 sha

lead-20 实测判分器被改（`c833eac06e` 新增 J11）：`21981B / mtime 15:26` → `23649B / mtime 15:41`。
**⇒ 任何不带判分器 sha 的读数都无法判定它是用哪把尺量的。** 本台账之前的读数就属于这一类。

### 17.3 b01 冻结记录

**判分器**：`tools/_verify/lead-145zh-judge.mjs`
sha256 `05c2a522adbc1183460edfae570875d995df2855d0b5030ef18ebfad99fa4dde`

⚠ **尺在本冻结宣告之后又改了一次**（加上自我 sha 输出）：新 sha256
`d844164e7bd02c58205964dffb9159b593b7d768fe7aa11ab1164f02e5c523ba`。
**改动的「无判定影响」已实测证明**（同批同页、新旧尺读数逐项相同）：
```
b01 5/5 pass · deep_pass=5/5 · tier=5/5   （改前 = 改后）
b02 5/5 pass · deep_pass=5/5 · tier=5/5   （改前 = 改后）
b03 0/5 pass · deep_pass=0/5               （改前 = 改后）
对照 1 正向 + 9 负向全部维持
```
**⇒ 冻结读数应以【取数时那一把尺】的 sha 为准**：上表 b01/b02 读数的尺是 `05c2a522adbc1183`。

### 17.3.1 尺自我识别（结构性修正，不是纪律）

lead-20 的发现一（读数不带尺 sha）的根修法不是「发布时记得附 sha」——那是一个**需要记得**的动作；
而是**把 sha 打进输出**——那是一个**忘不掉**的动作：
```
$ node tools/_verify/lead-145zh-judge.mjs --manifest …
# mode=--links require
# judge sha256 = d844164e7bd02c58205964dffb9159b593b7d768fe7aa11ab1164f02e5c523ba
# judge mtime  = 2026-10-07T07:45:48.808Z
```
且 `--json` 输出里也多了 `judgeSha256` 字段 ⇒ **归档的 JSON 自带尺的身份**。

> 这与 `DISPATCH-TEMPLATE.md` 开篇那句同源：「判据的默认动作应该在【动作发生的地方】，
> 不在一个需要记得去读的地方。」

**宣告冻结时刻**：2026-10-07T07:46Z（`worker-175` 交付并验收后；本时刻之后不再写这 5 页）
**读数**：`JUDGE total=5 pass=5 fail=0` · `deep_pass=5/5` · `tier=handwritten_deep=5/5` · 每页 `J11 trailSlash=0`

| # | 页 | 字节 | sha256（前 16） |
| --- | --- | ---: | --- |
| 1 | DestroyShipAction | 5,564 | `0644f84062f4d789` |
| 2 | DisableHeroAction | 6,651 | `5aecef7e4f7fbe82` |
| 3 | EndMercenaryServiceAction | 6,633 | `886184eb8eb0b992` |
| 4 | IncreaseSettlementHealthAction | 7,012 | `d8bd93c10f760509` |
| 5 | InitializeWorkshopAction | 9,203 | `92f0ad9e8e2bbaee` |

### 17.4 b02 冻结记录

**宣告冻结时刻**：2026-10-07T07:38Z（b02 五页写完后再无任何写入）
**读数**：`pass=5/5` · `deep_pass=5/5` · `tier=5/5`（同一把尺，同一 sha256）

| # | 页 | 字节 | sha256（前 16） |
| --- | --- | ---: | --- |
| 1 | InitializeWorkshopAction | 9,203 | `92f0ad9e8e2bbaee` |
| 2 | MakeHeroFugitiveAction | 9,897 | `beea6e9808eedffe` |
| 3 | SiegeAftermathAction | 9,641 | `c7ece361a92f5eb4` |
| 4 | StartMercenaryServiceAction | 6,711 | `2e405907204d0fd2` |
| 5 | GainRenownAction | 4,796 | `87e1c5f2f89a9ad6` |

（`InitializeWorkshopAction.md` 同时属于 b01 与 b02 两份清单——它是 b01 的未完成项、也是 b02 的第 1 页。
它只有**一份** sha256 `92f0ad9e8e2bbaee`，两份清单共用同一文件，不存在冲突。）

