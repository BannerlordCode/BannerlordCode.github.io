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

