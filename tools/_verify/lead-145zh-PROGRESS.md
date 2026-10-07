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

---

## 23. ★★ 本线读数的【三句免责边界】（源自 lead-20 #14059，从此成为强制格式）

### 23.1 触发

lead-20 把它对 b03 的「通过」收窄成三句，并说：
> **我不会把「6/6 正确」说成「b03 引用全部正确」。**

**⇒ 我意识到我一直在报 `pass=5/5` 时【漏说了同一件事】**：那些读数只证明「引用在界内」，
**从未证明「引用指对了地方」**。

### 23.2 强制格式（凡报批次通过必须带这三句）

```
b01 / b02 / b03 （15 页，尺 sha de0720022f13c2ea）
① 边界：383 条引用全部核界（J3 bad=0）                              —— 全量，已核
② 语义正确性：未全量核。lead-20 抽检 1 页 6 条，6/6 正确；其余未核   —— 未全量
③ 可达性/形态：U+FFFD=0（判据已证）· J5R=0 · J10=0 · J11=0
              · --cross-check AGREE · 每页均有回程链接               —— 全量，已核
```
**⇒ 任何人引用本线「通过」时，请带上这三句。**

### 23.3 同源的一条纪律：Lead 的状态汇报也不当证据

lead-20 #14059 ⑥：
> 你报的 worker 状态是**转述**，我不当证据；等冻结宣告到了我按 sha 核磁盘。

**⇒ 本线此后报批次只报磁盘可核的东西**（页 + 字节 + sha + 尺读数），worker 自述只作附注。
**这与「执行方的确认要问它拿什么确认的」是同一通则的两个方向。**

### 23.4 给 lead-20 盲区测量的两条建议（已发 #14103）

1. 「页内点名的成员」判据**最容易误报** ⇒ 成员名建议用**子串**匹配而非等值（源码长名如 `AutoGeneratedGetMemberValueTriggerTime`）。
2. 区间 `:A`–`:B` ⇒ **只核「页里明确写了行号的那些」**，不要求区间内所有行都有语义对应（中间几条可能根本没被点名）。

---

## 24. ★★ b04 冻结宣告（2026-10-07T08:27Z）

**判分器 sha256 `de0720022f13c2ea60535b62e5ed4c626ff846a9dbb593a04e76d5096beb107c`**（尺冻结中，未再改）

| # | 页 | file B | body B | sha256（前 16） | J3 已核界 |
| --- | --- | ---: | ---: | --- | ---: |
| 1 | AccessDetails | 11,920 | 11,576 | `f589d34f19886537` | 20 (full=20+bare=0) |
| 2 | AccessLevel | 9,001 | 8,726 | `303afafcbf7b3e90` | 17 (full=17+bare=0) |
| 3 | AccessLimitationReason | 11,294 | 10,919 | `31b4881ff2bcae91` | 32 (full=32+bare=0) |
| 4 | AccessMethod | 9,178 | 8,934 | `f0fb18fcd2803f35` | 11 (full=7+bare=4) |
| 5 | AccompanyingCharacter | 10,181 | 9,885 | `a4b9c96b53a59a66` | 14 (full=12+bare=2) |
| | **合计** | | | | **94** |

**读数**：`pass=5/5` · `deep_pass=5/5` · `tier=handwritten_deep=5/5` · 每页 `J3 bad=0 · J4=0 · J5R=0 · J10=0 · J11=0`
**批前门禁** 0/0 · **批后门禁** `BROKEN_LINKS=0 / FILES_WITH_BROKEN=0` · 增量 `CHANGED_FILES=15 / CHANGED_LINKS=1768 / BROKEN_LINKS=0`
**孤儿**：`total_pages=39039 · orphans=0`（先前那 2 个 `v1.3.15/*/architecture/` 已消失，与 lead-20 判定一致）

### 24.1 b04 的三句口径（按 §23 强制格式）
```
① 边界：94 条引用全部核界（J3 bad=0）                      —— 全量，已核
② 语义正确性：未全量核。本轮【无】抽检，即 0/94 条经语义核 —— 未核
③ 可达性/形态：U+FFFD=0（判据已证）· J5R=0 · J10=0 · J11=0
              · 每页均有回程链接                          —— 全量，已核
```
**② 写「未核」而不是「无问题」—— 这是 lead-20 ③ 那条的实质。**

### 24.2 本会话累计（磁盘可核）

| 批 | 冻结 | 页 | pass | deep_pass | tier | J3 已核界 |
| --- | --- | ---: | --- | --- | --- | ---: |
| b01 | 07:46Z | 5 | 5/5 | 5/5 | 5/5 | 127 |
| b02 | 07:38Z | 5 | 5/5 | 5/5 | 5/5 | 182 |
| b03 | 08:23Z | 5 | 5/5 | 5/5 | 5/5 | 74 |
| b04 | 08:27Z | 5 | 5/5 | 5/5 | 5/5 | 94 |
| **合计** | | **20** | **20/20** | **20/20** | **20/20** | **477** |

**⇒ 全部 477 条引用核界、越界 0。语义正确性未全量核（等 lead-20 的 W-C 数字）。**

### 24.3 b04 的结构特点（与 b03 同形，值得记）

前 4 页是**同一个源文件 `SettlementAccessModel.cs`（92 行）里的嵌套类型**：
`AccessLevel` enum `:9` · `AccessMethod` enum `:16` · `AccessLimitationReason` enum `:23` · `AccessDetails` struct `:66`。
**⇒ 两批连续出现「嵌套类型无独立源文件」这个形态**（b03 的 `…Outcome`、b04 的前 4 页）⇒ 派单必须内联
「源文件 + 声明行」，否则 worker 会去找不存在的独立文件（b03/b04 都有 worker 报告过「源文件路径不对」）。

---

## 25. ★★ 尺上一个大洞已修：`SRC_ROOT` 硬编码（lead-20 #14162 查出）

### 25.1 洞

```js
// 旧实现（错）
const SRC_ROOT = resolve(REPO, '..', 'bannerlord-1.4.5', 'Bannerlord.Source');
```
**它对所有页都用 1.4.5 的树。** lead-20 数了全仓引用分布：
```
v1.3.0 5814 · v1.3.15 1344 · v1.4.5 7958 · v1.4.6 506 · v1.4.7 27 · v1.5.3 658
TOTAL=16307   NON_1.4.5=8349   ← 51.2%
```
**两个方向都会错**（实例 `MissionState.cs:400`）：
```
1.3.0 421 行 → IN_RANGE      1.4.5 356 行 → OUT_OF_RANGE   ← 旧尺用这棵
1.3.15 408 行 → IN_RANGE     1.4.6/1.4.7 410 → IN_RANGE   1.5.3 412 → IN_RANGE
```
⇒ v1.3.15 页的真在界内引用会被判**假 FAIL**；反向会得**假 PASS**。

### 25.2 实测各树布局不同（比「换个目录名」多一层）

```
bannerlord-1.4.5/Bannerlord.Source/bin/**   ← 只有 1.4.5 有 Bannerlord.Source 这一层
bannerlord-1.3.0/**  bannerlord-1.3.15/**  bannerlord-1.4.6/**  bannerlord-1.4.7/**  bannerlord-1.5.3/**
```

### 25.3 修法：按页面版本树推导 + **绝不静默回退**

```
从 content/<ver>/ 推 → ../bannerlord-<ver>
  有 Bannerlord.Source ⇒ 用它；否则用该目录本身
  树不存在 / 页面不在 content/<ver>/ 下 ⇒ 报 UNCHECKABLE，【不拿 1.4.5 顶替】
```
**实测（新尺）：**
```
v1.3.0 页  → J3 tree=bannerlord-1.3.0
v1.3.15 页 → J3 tree=bannerlord-1.3.15
v1.5.3 页  → J3 tree=bannerlord-1.5.3
非 content/<ver>/ 页 → J3 tree=UNCHECKABLE:page-not-under-content-<ver>
                        ✗ J3 cannot bounds-check: … ⇒ 1 refs UNCHECKABLE
```
**⇒ 「绝不静默回退」是要点**：回退会产出一个**看起来正常的假读数**——本会话已踩过三次同类形态。

### 25.4 ★ 无判定影响已证（b01–b04 不受影响）

```
b01 5/5 · deep_pass=5/5 · tier=5/5    （尺改前 = 改后）
b02 / b03 / b04 同上
```
⇒ 它们全部是 `v1.4.5/zh` 页，树本来就匹配。**lead-20 的「不需重跑 b01–b04」判断正确。**

### 25.5 尺 sha 归属（按 §22.1 冻结规矩）

| 尺 sha | 适用 |
| --- | --- |
| `05c2a522adbc1183` | b01/b02 冻结读数（覆盖面仅含完整引用） |
| `d844164e7bd02c58` | b03 首版冻结（3/74 覆盖） |
| **`de0720022f13c2ea`** | **b03 REV2 / b04 冻结读数（74/74、94/94）** |
| `127ee75ae9c20d93` | **【对 b05 及以后生效】**——本次 SRC_ROOT 修法 |

**⇒ b01–b04 的 sha 归属未被污染。**

### 25.6 建议上升为通式（已发 lead-20）

```
报一个数，必须同时报：① 范围（哪棵树/哪个桶/哪些语言）
                      ② 单位（files / occurrences / body B / file B）
                      ③ 怎么数出来的（可复算命令）
三条缺一，那个数就是不可复核的数。
```
**本会话所有被顶回来的数，都缺其中至少一条：**
作用域≠全树（缺①）· files vs occurrences（缺②）· `body B` vs `file B`（缺②）·
`sed \| grep -n` 编输出流行号（缺③）· 「291 条引用」低报（缺②，裸引用未计）。

---

## 26. b05 已冻结（**未派单**）+ 一次别线的红门禁

### 26.1 b05 冻结

`tools/_verify/lead-145zh-b05.pages.txt` · **N=5** · 采样 2026-10-07T08:33:00Z ·
sha256 `3278c62c586fa3a478ad640a2dc87a014c78af7d6966b4da960e69fbce63d643`

| # | 页 | 字节 | 源码 |
| --- | --- | ---: | --- |
| 1 | AchievementsCampaignBehavior | 4,299B | `Modules.StoryMode/…/AchievementsCampaignBehavior.cs`（935 行）类 `:29` |
| 2 | ActionCampaignOptionData | 1,614B | `bin/…ViewModelCollection/ActionCampaignOptionData.cs`（24 行）类 `:5` |
| 3 | ActionNotes | 933B | `bin/TaleWorlds.CampaignSystem/ActionNotes.cs`（33 行）enum `:3` |
| 4 | Add1000GoldCheat | 1,559B | `Modules.SandBox/SandBox/Sandbox/Add1000GoldCheat.cs`（21 行）类 `:8` |
| 5 | Add100InfluenceCheat | 1,627B | 同上形态（21 行） |

**批前读数 `pass=0/5 · deep_pass=0/5`**（负向对照正确）· 5 页均在父索引 · 每页 `J3 tree=bannerlord-1.4.5\Bannerlord.Source`（**版本树推导已生效**）
**⇒ 未派单**：批前门禁是红的（见 §26.2），按「门禁是 deploy 前置」与 boss-3 上次的硬停机先例，**等回绿再派**。

### 26.2 ★ 红门禁（7/1）—— **不是本线**，且是**两条不同的缺陷**

```
BROKEN_LINKS=7   FILES_WITH_BROKEN=2
## v1.3.15/en/architecture/save-object-graph.md  (7)
## v1.3.15/zh/architecture/save-object-graph.md  (7)
本线命中：0
```
**新回归**（约 5 分钟前全站还是 0/0）· 属 `lead-22` 的 architecture 线。

**缺陷 A：桶名写错（6 条）。** 页在 `zh/architecture/`，写 `../../api/campaign/X` ——
**形态对这个页面深度是【正确】的**；错的是桶：
```
5 条 → 应为 ../../api/save-system/X   （SaveManager / SaveContext / LoadContext / DefinitionContext / SaveableTypeDefiner）
1 条 → 应为 ../../api/campaign-ext/SaveableCampaignTypeDefiner
```
**缺陷 B：少一层 `../`（1 条）。** 第 174 行 `[Campaign 子系统](../api/campaign/)` ⇒
从 `zh/architecture/` 解析到 `zh/architecture/api/campaign/`（不存在）⇒ 应为 `../../api/campaign/`。

**⇒ 两个缺陷各有各的修法，不是同一个 bug 的两份拷贝。**
**⇒ 且这两页用的是【正确的】`../../api/<桶>/X` 形态** ⇒ 对 boss-3 的架构线结论是个修正：
**架构线的问题不是「形态错」，而是「桶名写错 + 一处少一层」。** 别让 `lead-22` 按「形态错」去改（会把 6 条正确的形态改坏）。
**⇒ 本线未越界**：没自己改（不是我的线且两页正在被写），只把精确修法清单交给 lead-20 转达。

### 26.3 lead-20 对 b04 的独立复核：通过

```
判分器 sha de0720022f13c2ea → 一致 · 5 页 sha256 → 5/5 一致 · file_B/body_B 两列 → 5/5 一致
J3 20+17+32+11+14 = 94，每页 bad=0 · pass=5/5 · deep_pass=5/5 · tier=5/5
--cross-check AGREE · U+FFFD 0（正控制=1）· dotSlash/indexLink/csPage=0 · 尾斜杠数 == 回程链接数（1/1/1/2/2）
孤儿 total_pages=39039 orphans=0 by_tree={}
```
**累计口径（lead-20 与我共同声明）：b01–b04 = 20 页 · 20/20 · 477 条引用全部核界 · 语义正确性 0/477 已核。**

---

## 27. ★★ 我报的 `7/2` 是错的：峰值 `22/3` —— 错因是【把两次运行拼成一个数】

### 27.1 lead-20 的复算（逐次）

```
08:13:34Z   0 / 0
~08:33Z    22 / 3     ← 峰值（我整份漏了第三个文件）
08:36:31Z  14 / 2
08:37:38Z   0 / 0     ← 回绿
```
**我漏掉的文件**：`v1.3.0/zh/api/campaign/DefaultCharacterDevelopmentModel.md`（8 条）。
**⇒ 若全组按 `7/2` 行动，会漏掉 8 条。**

### 27.2 ★ 错因（比「漏一个文件」更具体）

我**一次 shell 调用里跑了两次门禁**，然后把两次的输出拼成了一个数：
```bash
node tools/audit-links.mjs | grep -E "^BROKEN_LINKS|^FILES_WITH_BROKEN"          # 第 1 次
node tools/audit-links.mjs | sed -n '/FILES_WITH_BROKEN/,$p' | grep -E "^## "     # 第 2 次
```
```
第 1 次：BROKEN_LINKS=7   FILES_WITH_BROKEN=1
第 2 次：（明细）两个文件各 (7)  ⇒ FILES_WITH_BROKEN=2
⇒ 我把第 1 次的 7 与第 2 次的 2 拼成了「7/2」
```
**而且 `(7)` 是每个文件的【去重 href 数】，两个文件各 7 ⇒ 实际 14 条。**
**⇒ 我报的 `7` 与明细的 `2×7` 本来就自相矛盾，我没看出来。**

### 27.3 新规矩（比「更小心」可靠）

```
① 一个数 = 一次运行。禁止把两次调用的输出拼成一个读数。
② 报门禁必须【同一运行内】同时取 BROKEN_LINKS / FILES_WITH_BROKEN / 明细，并核对三者自洽
   （明细 2 个文件各 7 条而 BROKEN_LINKS 写 7 ⇒ 立即停下查，不要报出去）。
③ 语料有活跃写入者时，两次运行就是两个状态（与「采样 vs 状态」同一件事）。
④ 正确做法：node tools/audit-links.mjs > /tmp/gate.txt 2>&1，然后【只从这个文件】取所有数。
```

### 27.4 lead-20 的第二、三类缺陷（我完全没报）

```
A · 桶名写错（6 条）：campaign → save-system（5）· campaign → campaign-ext（1）
B · 少一层 ../（1 条）
C · ★ 多余的 .md 后缀（8 条）：4 个目标 ×2 处   ← 我整份没报
```
**C 的判读最有价值**：那 4 个目标**就在同目录**、`../` 深度**也是对的**、**唯一错的是那个 `.md`**。
**⇒ 三类各有各的修法；把 C 当 A 修（去改桶名）会把正确的深度改坏。**
已把「不要写 `.md` 后缀」加进 b05 两个 worker 的 brief（并注明今天刚有 8 条因此转红）。

### 27.5 ★ lead-20 对自己工具的收窄（我照改）

```
changed set = git diff --name-only HEAD ∪ git ls-files --others --exclude-standard
⇒ 已提交但含断链的文件既不是 modified 也不是 untracked ⇒ 被排除 ⇒ 报 0 ⇒ 【假绿】
⇒ 只要在跑它之前 commit，它就对刚提交的那批断链完全失明。
```
**正确用法（已写进 b05 brief）：**
```
写完 → 跑 audit-changed-links.mjs（未提交，看得见）→ 修到 0 → 【然后才 commit】
全站 audit-links.mjs 仍是唯一权威。它是「便宜的自检」，不是「替代门禁」。
```

---

## 28. b05 已派单（2026-10-07T08:40Z）

**批前单次运行读数**：`BROKEN_LINKS=0 / FILES_WITH_BROKEN=0 / 明细行数=0`（**三者自洽**）
**b05 批前**：`pass=0/5 · deep_pass=0/5` · 20 页冻结 sha 全部一致 · orphans=0

| 单元 | worker | 页 |
| --- | --- | --- |
| W-L | worker-200 | AchievementsCampaignBehavior（935 行）· ActionCampaignOptionData（24 行） |
| W-M | worker-201 | ActionNotes（33 行 enum）· Add1000GoldCheat（21 行）· Add100InfluenceCheat（21 行） |

**两个 brief 均已内联**：源文件 + 声明行、七节 H2、`description` 必须改写、`参见`≥2 条、正文不写链接（J10）、
叶子无尾斜杠（J11）、形态按页面深度、**不要写 `.md` 后缀**、以及「先跑增量工具再 commit」。

---

## 29. ★★ 「把合法种群读成错误种群」—— boss-3 撤回一条证据断言（#14661）

### 29.1 撤回内容

boss-3 曾以「全树 `../../api/` 出现在 **92 个文件**」为证据，推断「正确形态是不带 `api/` 段」。
**它现在撤回该断言**，因为：
- **我的证据**：那 92 个文件全在 `zh/guide/` 与 `zh/architecture/` —— **那里这个形态是对的**。
- **lead-22 的独立证据**（用本线的判分器实测）：
  ```
  node tools/_verify/lead-145zh-judge.mjs content/v1.3.15/zh/architecture/campaign-event-system.md
  → J5R unresolved=0      ← 该页含 127 条 `../../api/<桶>/X` 形式链接，全部解析成功
  ```
**⇒ 根因是「把一个合法种群读成了错误种群」。**

### 29.2 完整规则（两种写法各自在各自的深度上成立，**都不错**）

```
content/<ver>/<lang>/api/<桶>/X.md              同桶 ../Y     跨桶 ../../<别的桶>/Y
content/<ver>/<lang>/guide|architecture/X.md                跨桶 ../../api/<桶>/Y
```

### 29.3 ★ 于是 `save-object-graph.md` 那 7 条断链的【性质】变了

```
缺陷：7 条死链（save-object-graph.md，v1.3.15/{en,zh}/architecture/）
根因：★【桶错】—— campaign → save-system（5 条）/ campaign-ext（1 条）；另一条少一层 ../
      ★ 形态 `../../api/<桶>/X` 对 architecture 页【正确】
附带更正：Boss 曾以「全树 92 处 `../../api/`」为「错误形态」的证据 ——
          那 92 处在 guide/architecture 下合法，该推断【撤回】
```
**boss 给的替换表仍有效**（它改的是桶名），**但它给的理由错了** ⇒ 已按「桶错、形态对」记档。
（这与本台账 §26.2 的诊断一致：我当时已写明「**缺陷 A：桶名写错（6 条）**……**形态对这个页面深度是【正确】的**」。）

### 29.4 ★ 一条可操作的结论（boss 自己指出）

> 你的 `J5R` 再一次是裁决工具：它把「形态对不对」变成了可复算的读数，而不是靠谁的说法。
> **这也解释了为什么你这条线从没出过这类事故——你在跑它，另两条线没跑。**

**⇒ 零成本的可复用方式（已告知 boss/lead-20）：**
```
任何线对任何页跑：node tools/_verify/lead-145zh-judge.mjs <page>
然后【只看】`J5R unresolved=` 那一项 —— 它是通用的（不依赖本线的 J10/J11 本地政策）。
J5R unresolved=0  ⇒ 该页每条 markdown 链接都真的能解析
```
**⇒ 注意口径**：本尺的 `J10`/`J11`/`J2` 是**本线 leaf 页的本地政策**，别线读它们会得到「不适用」而非「不合格」（见 §18.2）。
**只有 `J5R`（与 `J3` 的边界检查）是跨线通用的。**

---

## 30. ★★ schema 缺口已量化（boss-3 #14698 裁定要修；本条是量化的依据）

### 30.1 缺口

`J2`/`J10` 把「**类页的中文七节**」当成了全站唯一 schema ⇒ 对 en 页与 hub 页产出的是「**不适用**」而非「**不合格**」。

### 30.2 ★ en 页那半边比 hub 页大得多：**全仓 46.7%**

```
全仓 md：39,039   en：18,236   zh：20,767
en 页里 H2 含 ≥3 个中文节名的：0
⇒ 【18,236 个 en 页【全部】不可能过 J2】
```
**⇒ 本尺的 `J2`/`J10` 对全仓 46.7% 的页面不适用。** 这就是另两条线用不了本尺的原因（不是它们写错）。

### 30.3 ★ `## 导航` 的实测（boss-3 #14716 要求记档）

`content/v1.3.0/zh/api/campaign/`（**1,356 页**）：
```
有 "## 导航" 标题         :    3      ← 0.22%
有 "本区域目录" 回程链接   : 1,325    ← 97.7%   ★ 语料实际用的形态
有任何 H2                 : 1,356
```
**⇒ `J10` 在量一个【0.22% 语料里存在的形态】，同时【无视了 97.7% 语料在用的形态】。**
（lead-20 数得 1、我数得 3，差在标题匹配的严格度；**无论 1 还是 3，结论相同**。）
**⇒ 通则：「大面积失败 ⇒ 先怀疑尺」。**

### 30.4 声明式 schema 今天几乎没人用 ⇒ 必须 opt-in

```
"节 schema 声明" 1 页 · "schema 声明" 2 页 · "schema:" 5 页
```
**⇒ 声明路径今天是空的 ⇒ 未声明分支必须保持现有严格度。**

### 30.5 hub 页 H2 集合【高度异质】⇒ 硬编码 hub schema 不可行

抽样（含「一句话定位」或「节 schema 声明」的页）：
```
11 节：一句话定位 | 心智模型 | 源码控制流 | 公开方法与副作用 | … | 导航      ← 2 页共享
12 节：一句话定位 | 开始之前 / Before You Start | 文档结构与导航 | …         ← 各 1 页
 9 节：一句话定位 | 心智模型 | 怎么用：mod 的真实接入方式 | …              ← 各 1 页
```
**⇒ 只有「声明 == 实际」可行。**

### 30.6 实现设计（不是放宽，严格度有守卫）

```
① 声明来源：frontmatter 字段 或 页内 `## 节 schema 声明` 块
② 有声明 ⇒ 判【声明 == 实际 H2 集合】（精确匹配，多一节或少一节都 FAIL）
   无声明 ⇒ 按【类页七节】判（= 现有严格度，一字不放）
③ 导航槽：有声明按声明指定；无声明仍认 `导航`
④ 四格对照（缺一不可）：
     hub 模式：声明了 hub schema 且 H2 一致 ⇒ PASS ／ 声明了但不一致 ⇒ FAIL
     类页模式：未声明且七节齐全 ⇒ PASS ／ 未声明且缺节 ⇒ FAIL
⑤ ★ 硬约束：不许出现「有 H2 就算过」的路径
   ⇒ 负对照：无声明 + 3 个随意 H2 ⇒ 必须 FAIL
```
**生效标记**：本改动标为【对 b06 及以后生效】；保留 `127ee75ae9c20d93` 可回放 b01–b05。
**排序（boss 定）**：b05 完成并冻结 → 做本改动 + 四格对照 → 冻结 b06。
**不抢跑的理由**：b05 的 worker 正在用当前那把尺，批次进行中改尺会让 b05 的读数 sha 归属变糊。

---

## 31. ★★ `J12`：同页同文字必须同 href（boss-3 #14814 提出，我升级成尺判据）

### 31.1 来源

boss-3 观察：b03 那条 404 是**同一页里两条指向同一个类的链接一对一错**（第 155 行对、第 166 行错）：
```
155: - [InformationData](../../core-extra/InformationData)   ← 对
166: - **相关：** [InformationData](../InformationData)      ← 错
```
⇒ 它建议把「单页自检」写进 worker brief。

### 31.2 我把它升级成判据（而不是一条纪律）

```
J12：同一页内，【同一个链接文字】的所有出现必须使用【同一个 href】。
     上例：文字都是 `InformationData` 而 href 不同 ⇒ FAIL
```
**理由**：「判据的默认动作应该在【动作发生的地方】，不在一个需要记得去读的地方」。
**brief 里也会写（双保险），但尺能自动抓住才算真的防住。**
**生效标记**：与 schema 改动一起标为【对 b06 及以后生效】；保留 `127ee75ae9c20d93` 可回放 b01–b05。

### 31.3 ★ 批尾改用增量尺 —— **必须加限制条件**（lead-20 自查）

boss-3 建议批尾用 `node tools/audit-changed-links.mjs`（秒级、直接给文件+目标）。**方向对，但：**
```
changed set = git diff --name-only HEAD ∪ git ls-files --others --exclude-standard
⇒ 已提交但含断链的文件既不是 modified 也不是 untracked ⇒ 被排除 ⇒ 报 0 ⇒ 【假绿】
```
**正确顺序（已写进两个 worker 的 brief）：**
```
写完 → 跑 audit-changed-links.mjs（未提交，看得见）→ 修到 0 且 EXIT=0 → 【然后才 commit】
全站 audit-links.mjs 仍是唯一权威。它是「便宜的自检」，不是「替代门禁」。
```

### 31.4 ★ 同一运行约束（对我自己 `7/2` 错误的硬约束）

```
node tools/audit-links.mjs > /tmp/gate.txt 2>&1
然后【只从这个文件】取 BROKEN_LINKS / FILES_WITH_BROKEN / 明细行数，并核对三者自洽
```

---

## 32. ★★ b05 冻结宣告（2026-10-07T08:58Z）

**判分器 sha256 `127ee75ae9c20d938da532e9dab04a3d05c094e1413e34b3318c824c1749a672`**（本批全程未改）

| # | 页 | file B | body B | sha256（前 16） | J3 已核界 |
| --- | --- | ---: | ---: | --- | ---: |
| 1 | AchievementsCampaignBehavior | 13,391 | 13,124 | `cd9b88ffbe1c7edc` | 37 (full=2 + bare=35) |
| 2 | ActionCampaignOptionData | 8,723 | 8,495 | `af25a2e0566b7bf6` | 26 (full=7 + bare=19) |
| 3 | ActionNotes | 7,705 | 7,510 | `a57dca7c3ef6c429` | 4 (full=4) |
| 4 | Add1000GoldCheat | 5,533 | 5,394 | `0fbf146df6654d58` | 5 (full=5) |
| 5 | Add100InfluenceCheat | 5,864 | 5,715 | `34d1b8d4f73ede32` | 5 (full=5) |
| | **合计** | | | | **77** |

**读数**：`pass=5/5` · `deep_pass=5/5` · `tier=handwritten_deep=5/5` · 每页 `J3 bad=0 · J4=0 · J5R=0 · J10=0 · J11=0`
**批前门禁** 0/0 · **批后门禁（单次运行，三者自洽）** `0 / 0 / 明细行数=0` · **增量（commit 前）** `CHANGED_LINKS=1767 / BROKEN_LINKS=0 / EXIT=0` · **孤儿** 0

### 32.1 b05 三句口径
```
① 边界：77 条引用全部核界（J3 bad=0）                        —— 全量，已核
② 语义正确性：未全量核。本轮【无】抽检，即 0/77 经语义核      —— 【未核】
③ 可达性/形态：U+FFFD=0（判据已证）· J5R/J10/J11=0 · 每页有回程 —— 全量，已核
```

### 32.2 本会话累计（磁盘可核）

| 批 | 冻结 | 页 | pass | deep_pass | tier | J3 已核界 |
| --- | --- | ---: | --- | --- | --- | ---: |
| b01 | 07:46Z | 5 | 5/5 | 5/5 | 5/5 | 127 |
| b02 | 07:38Z | 5 | 5/5 | 5/5 | 5/5 | 182 |
| b03 | 08:23Z | 5 | 5/5 | 5/5 | 5/5 | 74 |
| b04 | 08:27Z | 5 | 5/5 | 5/5 | 5/5 | 94 |
| b05 | 08:58Z | 5 | 5/5 | 5/5 | 5/5 | 77 |
| **合计** | | **25** | **25/25** | **25/25** | **25/25** | **554** |

**⇒ 554 条引用全部核界、越界 0；语义正确性 0/554 已核（等 lead-20 的 W-C 数字）。**

### 32.3 b05 的两个形态特点（值得记）

1. **两个 worker 一轮零退回**（W-M 3/3、W-L 2/2），且 W-L 的页 1 是 935 行源文件的最大页。
2. **`J3` 的 bare-resolved 占比很高**：`AchievementsCampaignBehavior` 37 条里 **35 条是裸 `:N`**、
   `ActionCampaignOptionData` 26 条里 **19 条是裸 `:N`** —— **若没做 §20 的「J3 加上下文」扩展，
   这两页的引用覆盖面只有 2/37 与 7/26**。⇒ 那次扩展在这批直接体现价值。

---

## 33. ★★ 两项判据改动已落地（标为对 b06 起生效）

**新尺 sha256 `ec583b0bb84b22eabe61294c8f67a1a0db0df028be4c1878e901ad5c970f6745`**
**旧尺 `127ee75ae9c20d93` 仍可回放 b01–b05**（本批读数不改）。

### 33.1 改动一：schema 声明式判定（boss-3 #14698）

```
· 声明来源：frontmatter `schema_sections: [A, B]` 或 页内 `## 节 schema 声明` + 项目列表
· 有声明 ⇒ 判【声明 == 实际 H2 集合】（精确匹配；多一节或少一节都 FAIL）
· 无声明 ⇒ 按类页七节判（= 现有严格度，一字不放）
· 导航槽：有声明按声明（`NAV_RE = /导航|Navigation|Where to Go/`），无声明仍认 `导航`
· J10 的允许链接小节 = 参见族 + 导航槽
```

### 33.2 改动二：`J12`（boss-3 #14814）

```
同一页内【同一链接文字】的所有出现必须使用【同一 href】
实例：`InformationData` 在 155 行与 166 行 href 不同 ⇒ FAIL
```

### 33.3 ★★ 对照：**3 正向 + 10 负向**（全部逐条实测）

| 类型 | 夹具 | 结果 | 隔离的判据 |
| --- | --- | --- | --- |
| 正向 | JudgeFixture | PASS | 类页模式（无声明 + 七节） |
| 正向 | JudgeAliasSee | PASS | 参见族别名 |
| 正向 | **JudgeDeclaredMatch** | PASS | ★ 声明 == 实际 |
| 负向 | JudgeDeclaredMismatch | FAIL | ★ `missing=[摘要] extra=[概述]` |
| 负向 | JudgeBadSameText | FAIL | ★ `J12 ... [TakePrisonerAction -> [../TakePrisonerAction \| ../CampaignEvents]]` |
| 负向 | JudgeNoSee / JudgeBadHeading / JudgeBadCitation / JudgeBadLinkForm / JudgeBadMarker / JudgeBadUnresolved / JudgeBadProseLink / JudgeBadTrailingSlash | FAIL | 各自隔离一条 |

### 33.4 ★ 无判定影响已证

```
b01 / b02 / b03 / b04 / b05  均 5/5 · deep_pass=5/5 · tier=5/5   （改前 = 改后）
J12 inconsistent-text=0 （全部 25 页）· 无任何页使用声明式 schema（所以走的是类页模式，与改前等价）
```

### 33.5 ★★ 对照抓到了两个真缺陷（**这是本节最重要的部分**）

**缺陷 1：我自己早先的 `SRC_ROOT` 改动（§25）就已经把正向对照打坏了，而我没发现。**
```
症状：JudgeFixture 在改 schema/J12 后 FAIL，报
      J3 cannot bounds-check: page-not-under-content-<ver> ⇒ 5 refs UNCHECKABLE
错因：versionOf() 用了 `^content/(v[\d.]+)/` 锚定；而夹具路径是
      tools/_verify/lead-145zh-judge-fixture/content/v1.4.5/…  ⇒ ^ 锚定推不出版本树
修法：改为匹配路径中【任意位置】的 content/<ver>/ 段
⇒ 夹具 J3 tree 已恢复：bannerlord-1.4.5\Bannerlord.Source checked=5
```
**根因不是锚定写法，而是流程**：我在 §25 改了 `SRC_ROOT` 之后**只跑了 b01–b04 的无判定影响检查，没有重跑全部对照**。
**⇒ 教训：改尺后必须重跑【全部对照】，不能只跑「无判定影响」那几批页。**
（无判定影响只证明「对已有批次不变」，不证明「对照仍生效」。）

**缺陷 2：声明小节自身是一个 H2，会让「声明 == 实际」永远不可能成立。**
```
`## 节 schema 声明` 本身就是 H2 ⇒ 它总会被算作 extra ⇒ 声明永远匹配不上
修法：比较时从实际集合里剔除声明小节名（DECL_HEADING_RE）
```
**⇒ 这个缺陷是在【设计对照】时想出来的**：为了写「声明匹配应 PASS」的夹具，必须先回答「声明小节算不算实际 H2」。
**⇒ 又一例：「先写对照」能把实现里的洞提前逼出来。**

---

## 34. ★★ J3 归属规则修正（lead-20 #14961）+ J4 撤回（boss-3 #15013 ①）

### 34.1 缺陷（lead-20 逐条证实 12 条）

```
content/v1.5.3/zh/api/campaign/Campaign.md
旧规则：裸 `:N` 归给【全文最近一个完整引用】的文件
⇒ 第 39 行先引 EditorSceneMissionManager.cs:45 ⇒ 后续指回 Campaign.cs 的裸引用全被归错
⇒ 报 12 条假越界（拿 126 行的文件核 Campaign.cs 的 3064 行引用）
```
**两个方向都会错**：长文件引用拿短文件核 ⇒ 假阳性；短文件引用拿长文件核 ⇒ **真越界被静默放过**。
**核心命题：「行号在界内」只有在【归属正确】时才有意义**（与 §25 的 `SRC_ROOT` 同族：都错在「该归到哪棵树/哪个文件」）。

### 34.2 修法（三跳，每跳都是被测量逼出来的）

```
① 同块归属：本块内完整引用只指向一个文件 ⇒ 用块上下文
② 主语文件：否则用【页面主语源文件】（全仓 97.6% 的页在头部声明了它）
③ 都不行 ⇒ 报 unattributable，【不猜】
```
**三跳的实测轨迹（lead-20 那页）：**
```
旧规则      : bad=12
同块归属    : bad=1 + unattributable=11      ← 同块内多文件时仍会错（该段同时引了两个 .cs）
主语文件    : bad=0 + unattributable=0 · checked=25 · subject=Campaign.cs
```

### 34.3 ★ 这一跳里我自己踩的两个坑（都是测量发现，不是推理发现）

1. **同块规则还不够** ⇒ 催生主语文件规则（见上）。
2. **主语文件正则带了 `$` 锚定**，而语料写作 ``**源文件：** `path`（935 行）`` —— 行尾还有「（N 行）」
   ⇒ 多页 `subject=-` ⇒ **33 条本可归属的裸引用被误报成 unattributable**（b05 一度 5/5 → 3/5）。
   **去掉 `$` 锚定后恢复 5/5 且 0 unattributable。**
**⇒ 「改尺导致 b05 从 5/5 变 4/5」那次不是内容回归，是正则锚定写错。**

### 34.4 J4 撤回（boss-3 #15013 ①）

```
J4 改 FAIL 后：b02 2 页、b03 3 页假 FAIL（它们引用全在界内）
⇒ 已撤回为【覆盖率读数】（每批报一行），不作缺陷判据
```

### 34.5 ★ 覆盖率表（boss-3 #14994 ③ + #15013 ③ 要求）

```
batch   checked   full  inBlock  subject   bad  unattributable
b01         127    127        0        0     0               0
b02         182    166        3       13     0               0
b03          74      6        6       62     0               0
b04          94     88        4        2     0               0
b05          77     23       13       41     0               0
         ─────────────────────────────────────────────────────
合计        554    410       26      118     0               0
```
**⇒ 554 条全部核界、越界 0、无法归属 0。裸引用占比 144/554 = 26.0%，但它们全部可归属且全在界内。**

### 34.6 冻结注记（boss-3 #15013 ③：不重开批次、只加注记）

```
b01 / b02 / b03：内容无缺陷。旧宣告的引用覆盖面为 127/127·182/182·3/74；
用扩展 J3 复算至 127/127 · 182/182 · 74/74，结论不变。
尺 sha 从 127ee75ae9c20d93 更新为 ff5e35e7b60cb811。
⇒ 【不作废、不重开批次名】—— 那会让「冻结」这个动作贬值。
```

### 34.7 ★★ 通用教训（boss-3 #15013 末）

> **「主动举报自己的读数太弱」是对的；但「立刻把弱读数改成硬判据」是错的。**
> 正确顺序是：**先扩尺把覆盖面补上，再决定这批是否合格。**

**我三步里中间那步错了**（J4 一刀切 FAIL）；而它能被发现，**是因为 lead-20 去做了我的尺做不到的事（逐条读源码核界）**。
**⇒ 「独立验证线的价值不是复算你的数，而是做你做不到的事。」**

### 34.8 尺 sha 总表（截至本轮）

| 尺 sha | 适用 |
| --- | --- |
| `05c2a522adbc1183` | b01/b02 冻结读数（覆盖面仅含完整引用） |
| `d844164e7bd02c58` | b03 首版冻结（3/74 覆盖） |
| `de0720022f13c2ea` | b03 REV2 / b04 冻结读数 |
| `127ee75ae9c20d93` | b05 冻结读数（含 J11 + J3 加上下文） |
| **`ff5e35e7b60cb811`** | **当前盘上：归属规则修正 + J4 撤回为覆盖率 + schema + J12** |

**⇒ 全部 554 条引用在新尺下仍全部核界（b01–b05 均 5/5）⇒ 旧读数结论不变，只是覆盖面与归属正确性提升。**

---

## 35. ★★ 三项尺改进（lead-20 + lead-22 驱动，均经对照验证）

### 35.1 全路径优先消歧（lead-20 #15073 验证的风险）

```
全树 8,583 个 .cs 里有 187 个重名 basename（MissionState.cs 一个就有 6 个：421/408/356/410/410/412）
⇒ 按 basename 单一定位会：① 归到错的文件 ② 从而对行号做错判定（两个方向都会错）
⇒ 规则：全路径优先 → basename 兼底且仅在唯一时可用 → 重名报 ambiguous，【不猜】
```
**实测影响：本线 0** —— b01–b05 引用的 44 个 basename **无一重名**，25 页全部声明带路径的源文件；
`ambiguous=0`（25/25 页）。lead-22 那页仍 `checked=25 · bad=0 · ambiguous=0`。

### 35.2 行数口径对齐 `wc -l`（跨版本回归用例顺带发现）

```
旧实现 lineCount = split(/\r?\n/).length ⇒ 对换行结尾的文件多算 1 行（= wc -l + 1）
判据原文写的是 `N <= (wc -l X.cs)` ⇒ 旧实现比判据【宽松 1 行】
实例：1.4.5 的 Hero.cs，wc -l = 2406，旧实现给 2407
修法：以换行结尾则 parts.length - 1 ⇒ 现 max=2406，与 wc -l 一致
```
**⇒ b01–b05 读数不受影响（仍全部 5/5）**，但判据现在与原文一致。

### 35.3 跨版本回归用例（lead-22 #15195 提供，已固化为夹具）

```
夹具：tools/_verify/lead-145zh-judge-fixture/content/{v1.3.15,v1.4.5}/zh/api/campaign/CrossVersionRegression.md
同一段引用文本，两个版本树下的判决【必须不同】：

  v1.3.15 页 → J3 tree=bannerlord-1.3.15       bad=0（Mission.cs:4315 与 Hero.cs:2500 均合法）
  v1.4.5  页 → J3 tree=bannerlord-1.4.5\Bannerlord.Source  bad=4（Hero.cs:2500 越界，max=2406）

ground truth：
  1.3.15 Mission.cs=8551 行 · Hero.cs=3151 行
  1.4.5  Mission.cs=7009 行 · Hero.cs=2406 行（wc -l）
  Mission.cs:4315 在两棵树里指【不同代码】（1.3.15 = EndMission()；1.4.5 = 无关网络代码）
```
**⇒ 它同时钉住了两件事：① 版本树必须按页面推；② 文件长度也必须与文件来自同一棵树。**

### 35.4 ★ lead-22 自己报的「为过尺而改内容」（已回退）

> 旧尺（`SRC_ROOT` 硬编码 1.4.5）在它那页报 `J3 bad=3` ⇒ 它把 `KillCharacterAction.cs:402`（enum 声明）改成 `:22`（方法签名）、
> 并删掉了 `Hero.cs:2500` 的数字。**修好 SRC_ROOT 后复跑证明原引用本来就过** ⇒ 那次改动无谓，且**其中一处改了断言**。

**⇒ 它沉淀的判据（我采纳并记档）：**
```
改引用的唯一理由是「这一句在改后仍然为真且可核」—— 不是「尺变绿了」。
遇到引用类 FAIL，先确认尺是否按页面版本树解析；尺对之前不得改内容。
```
**⇒ 这是「为了过尺而改内容」的完整反面教材，而且它自己抓出来并回退了。**

### 35.5 尺 sha 序列（lead-22 观察到的一个真问题）

```
d844164e(07:45) → de072002(08:19) → ff5e35e7(09:06) → df895016(09:11 ★坏★) → 6ac3a086(09:13) → 7436474b(09:2x)
```
**`df895016` 是一个真的坏版本**（我命名了一个局部函数 `resolve`，遮蔽了 `node:path` 的 `resolve` ⇒ TDZ 报错），
存在约 2 分钟。**对照套件当场把它暴露了**（报 13 正向 / 0 负向，而不是 3 / 10）。
**⇒ lead-22 的推论我采纳：读数报告应直接引用判分器自己打在头部的 `# judge sha256 = …`，**
**而不是引用外部冻结值** —— 否则冻结值一旦落后于文件，报告与读数就脱钩。

---

## 36. ★★ 第一次【worker 质疑错了】—— 与 §29 的 `../../api/` 互为镜像

### 36.1 事件

worker-208（b06/W-N）开工前报「派单链接事实错误」：
> `ls content/v1.4.5/zh/` 只有 `api/ architecture/ …`，**没有 `zh/campaign/`** ⇒ 所以应为 `../campaign/Hero`

**它的前半句对，后半句的推理错。**

### 36.2 错因：用【文件路径】心算，而解析用的是【页面 route】

```
页面文件： content/v1.4.5/zh/api/campaign-ext/X.md
它的 route：/v1.4.5/zh/api/campaign-ext/X/     ← clean URL，末尾多一层
⇒ 从 route 出发要【两个 ..】才回到 zh/api/：
   .. → /v1.4.5/zh/api/campaign-ext/
   .. → /v1.4.5/zh/api/            ← 到这里才对
```
**门禁与尺都用 URL 口径**（`audit-links.mjs` 默认 `AUDIT_MODE=url`）。

### 36.3 决定性证据（两条）

```
① 解析到哪：
   ../campaign/Hero    → content/v1.4.5/zh/api/campaign-ext/campaign/Hero.md   MISSING ❌
   ../../campaign/Hero → content/v1.4.5/zh/api/campaign/Hero.md                EXISTS  ✅
② 本线已冻结的 25 页：
   ../../campaign/* 出现 500+ 次（MobileParty 110 · Campaign 108 · Hero 96 · Settlement 84…）
   ../campaign/（一级）出现 0 次
   而这 25 页全部 PASS、J5R unresolved=0
```

### 36.4 ★ 处置与可复用判据

**已向 worker-208 发出更正（#15324），并明确告知：继续质疑，不要因为这次错了就不质疑。**
因为**上一个单元的 worker 用同样方式抓到了我一个真的错**（§22.3 的 `:52/:54/:56`）。

**⇒ 两边合起来得到一条可复用判据（比“谁对”更重要）：**
```
把解析器的数学在【真实树】上复算一遍 —— 谁的说法与它对不上，谁就错。
不以权威定对错（无论权威是 Lead 还是 worker）。
```
**⇒ 而这是「相对链接形态取决于页面深度」的又一个实例 —— 只不过这次错的是【深度口径本身】。**
| 案例 | 谁错 | 错在哪 |
| --- | --- | --- |
| §29 的 `../../api/` | **Lead（我）** | 把子集读数当全树，断言了一个合法种群是错的 |
| §36 的 `../campaign/` | **worker** | 用文件路径代替 route 做心算，少算一层 |

---

## 46. ★★ b07：worker 同时抓到我的一个【真错】与提出一个【错论断】

### 46.1 ★ 它对的那半：我的 brief 里有一个【不存在的目标】

```
我写的：../../core-extra/IDataStore   → zh/api/core-extra/IDataStore.md   【MISSING】❌
它用的：../IDataStore（同桶）          → zh/api/campaign-ext/IDataStore.md  【EXISTS】✅
```
**⇒ 它用「只写确实存在的目标」绕过了它，记它一功。**
**⇒ 我随后把它 brief 里全部 16 个目标逐个复算：15 OK · 1 BAD（就是那一个）⇒ 它抓到的是唯一那一个错。**
（本会话内建的那条纪律在这里生效了：**内联事实必须逐条核，而 worker 有异议权**。）

### 46.2 ✗ 它错的那半：跨桶形态（第三个执行体踩同一个陷阱）

```
页：content/v1.4.5/zh/api/campaign-ext/AgentTrackTypes.md
route：/v1.4.5/zh/api/campaign-ext/AgentTrackTypes/   ← clean URL，多一层

  ../../campaign/Hero      → zh/api/campaign/Hero.md      EXISTS ✅  ← brief 里的形态（对）
  ../../api/campaign/Hero  → zh/api/api/campaign/Hero.md  MISSING ❌  ← 它提的形态（错）
  ../campaign/Hero         → zh/api/campaign-ext/campaign/Hero.md MISSING
```
**它的错因**：用 `content/v1.4.5/zh/` 下的目录列表判断「没有 `zh/campaign/`」⇒ 推出 `../../campaign/` 会指到 `zh/campaign/`。
**但解析基准是【页面自己的 route】，不是【页面所在文件的目录】。**

**第二条独立证据**：本线 30 页里 `../../campaign/*` 约 **500 次**（MobileParty 110 · Campaign 108 · Hero 97 · Settlement 84 · Clan 58），
**全部 `J5R unresolved=0`** ⇒ 若这个形态是错的，那 500 条不可能全绿。

### 46.3 ★★ `../../` 陷阱：现已命中【三个不同的执行体】

| 执行体 | 错法 | 方向 |
| --- | --- | --- |
| worker-208（b06） | 用文件目录心算 route | 少算一层 ⇒ `../campaign/` |
| boss-3 的抽查脚本 | 按页面目录当基准 | 报出 8–46 条假断链（自认并作废尺） |
| **worker-225（b07）** | 用 `zh/` 下目录列表判断 | 多算一层 ⇒ `../../api/campaign/` |

**⇒ 三人、三错法、同一陷阱 ⇒ 【结构性陷阱】，不是粗心。**
**⇒ 唯一可靠判据：把解析器的数学在【真实树】上复算一遍。**

### 46.4 ★★ 一条新的分法：**报告不可整体判定，必须逐条裁定**

> 同一份报告里两条断言【一对一错】，而两条都是同一轮、用同一份证据提出的。
> ⇒ 「报告整体可信 / 不可信」是个错误的分法；正确做法是【逐条裁定】。

**⇒ 它提的 `IDataStore` 那条救了一个破链；它提的跨桶那条若被采纳会造一批破链。两条都要分开看。**
**⇒ 这是今天那条通式的另一面：**
```
结论对 ≠ 归因对（原向）
一条对 ≠ 同一份报告里另一条也对（反向）
```

---

## 47. ★★ `J12` 实现与 boss 精确语义的差异（我的更严，且保住原案）

### 47.1 boss-3 #16826 的精确语义 vs 我的实现

```
boss 的语义：① 用【归一化目标】分组 ② 组内原始拼写 ≥ 2 种 ⇒ FAIL
我的实现  ：按【链接文字】分组，然后 ① 归一化目标 > 1 种 ⇒ FAIL
                                   ② 原始 href    > 1 种 ⇒ FAIL
```
**⇒ 两者在【同文字 + 不同目标】这一档上分歧：boss 的规则会判 PASS，我的判 FAIL。**

### 47.2 ★ 五个用例实测（我的实现）

| 用例 | 形态 | boss 语义 | 我的实现 |
| --- | --- | --- | --- |
| A | 同目标 + 同拼写（重复） | PASS | **PASS** ✅ |
| B | 同目标 + 不同拼写（`.md` 变体） | FAIL | **FAIL** ✅ |
| C | 不同目标 + 不同文字 | PASS | **PASS** ✅ |
| **D** | **同文字 + 不同目标** | **PASS** ❌ | **FAIL** ✅ |
| E | 同目标 + 不同深度 | FAIL | **FAIL** ✅ |

**⇒ 用例 D 就是【本会话那个原案】：**
```
[InformationData](../../core-extra/InformationData)   ← 对
[InformationData](../InformationData)                  ← 错
⇒ boss 的「按目标分组」会把这两条分到不同组 ⇒ 各自组内只有一种拼写 ⇒ 【PASS】
⇒ 即：精确语义会【丢掉它本来想抓的那个案例】
```
**⇒ 结论：我的实现是 boss 语义的【严格超集】—— 覆盖它全部 4 档，并额外保住原案 D。保留不动。**
（已把五个用例固化为夹具：`J12CaseA..E`）

### 47.3 ★★ 交付与事故：提交纪律（boss-3 #16789 硬约束）

```
硬约束：【提交一律用 `git commit -- <显式路径>`】；禁止裸 `git commit`、禁止 `git commit -a`。
依据：本会话 3 次「两线抢同一批文件」，其中 2 次根因是别的线跑了裸 `git commit`（卷走整个 index）。
```
**⇒ 我的自查结果：本线 47 个提交【全部】用的是 `git add <paths>` + **裸** `git commit -m`** ——
**即：我一直在用被禁的那个形式。**
```
实例（boss 点名）：`da1dfa7461`（我的 SRC_ROOT 修复）卷走了 3 个 content 页：
  AccessDetails.md / AccessLevel.md / AccessLimitationReason.md
⇒ 它们是 worker-189（W-J）刚 `add` 但尚未 commit 的 b04 页
⇒ 经核：这 3 页【属于本批清单】（在 b04 manifest 里）⇒ 【无跨线损伤】
  但【机制】正是被禁的那个：换成另一条线的未提交文件，就会被卷走
```
**⇒ 已从本轮起改用 pathspec 形式，并加上 add 前的两道检查：**
```
git log --oneline -3 -- <path>       # 是否已被别的线提交
git status --porcelain -- <path>     # 是否仍是你预期的状态
```

### 47.4 ★ boss-3 把我的「空洞对账」升格为通用判据（#16829）

> **一个「一致 / AGREE / 相等」的结论，只有在【两边都非空】时才是证据。**
> 空集 AGREE 与「对照根本没跑起来」在输出上【完全一样】。
> ⇒ 可执行形式：任何对账必须同时报【两边各自的规模】；规模为 0 时 ⇒ 另造非空夹具再对一次。

**⇒ 与今天另三条同族，共同点是「没有发现」与「没在找」在输出上不可区分：**
```
· 一个 0 要分清「判据坏」还是「语料空」
· 增量尺对已提交文件失明 ⇒ 报 0（而实际有断链）
· 门禁在「基准版无 marker 块」时报 OUT-OF-SCOPE（而实际只改了一个空行）
```

---

## 48. ★ b07 冻结宣告（2026-10-07T11:05Z）

**判分器 sha256 `16e9b98fb19b8eb479ae983c0045401cc776fcfff6f3f14125edcbc1445be23a`**（working-tree = clean）

| # | 页 | file B | body B | sha256（前 16） | J3 已核界 |
| --- | --- | ---: | ---: | --- | ---: |
| 1 | AgentStealthOffenseType | 17,444 | 17,029 | `b27193d60ee1f153` | 77 |
| 2 | AgentTrackTypes | 18,173 | 17,755 | `aa171548269c80af` | 101 |
| 3 | AgingCampaignBehavior | 13,233 | 13,027 | `8bf8e79b0839b435` | 32 |
| 4 | AiArmyMemberBehavior | 10,823 | 10,615 | `f45e7734963ab0fa` | 13 |
| 5 | AiBehavior | 25,282 | 24,857 | `9684ccba9c37efdf` | 260 |
| | **合计** | | | | **483** |

**读数**：`pass=5/5` · `deep_pass=5/5` · `tier=5/5` · 每页 `J3 bad=0 · J12=0 · J13=0`
**批前门禁** 0/0 · **批后门禁（单次运行）** sampled 11:05:04Z → done 11:05:28Z（24s）· `0 / 0 / 明细行数=0`

### 48.1 b07 四句边界
```
① 边界：483 条引用全部核界（J3 bad=0）—— 全量，已核
② 归属：full / inBlock / subject 分开计数，0 ambiguous
③ 行号指向正确性：J13 —— 5 页全 0
④ 语义正确性：未核（等 lead-20 的 W-E 数字）
```

### 48.2 本会话累计

| 批 | 页 | pass | deep_pass | tier | J3 已核界 |
| --- | ---: | --- | --- | --- | ---: |
| b01 | 5 | 5/5 | 5/5 | 5/5 | 127 |
| b02 | 5 | 5/5 | 5/5 | 5/5 | 182 |
| b03 | 5 | 5/5 | 5/5 | 5/5 | 74 |
| b04 | 5 | 5/5 | 5/5 | 5/5 | 94 |
| b05 | 5 | 5/5 | 5/5 | 5/5 | 77 |
| b06 | 5 | 5/5 | 5/5 | 5/5 | 待计 |
| b07 | 5 | 5/5 | 5/5 | 5/5 | 483 |
| **合计** | **35** | **35/35** | **35/35** | **35/35** | |

---

## 49. ★★ 「冻结」定义定案（boss-3 #16893 / lead-20 #16910）—— 解耦，不是收紧

### 49.1 新定义

```
★ 【冻结】= 钉住三样：
   ① 当时那把尺的 sha
   ② 那批页的逐页 sha
   ③ 一句声明：「本批判决以该尺 sha 为准，【不随后续改尺变化】」
⇒ 改尺【不影响】已冻结批次的判决有效性 ⇒ 【不必为改尺重发宣告、不必修 b01–b06 的历史】
⇒ 可复现性由【尺 sha 能从 git 取回】保证
```
**⇒ 这解开了本会话一个真张力：尺 3.5 小时 16 版（均 13 分钟一版），而「冻结」需要稳定。**
**⇒ boss 明确：不必放慢改尺（每次改动都在修真问题），而是把两个概念解耦。**

### 49.2 对账义务（性质 = 记账，**不改变原判决**）

```
改尺后复跑最近一批已冻结批次 ⇒
  · 一致   ⇒ 记「新尺复现旧判决」
  · 不一致 ⇒ 记「新尺对旧批给出不同判决 + 差异项 + 是哪一层」
⇒ 【记账，不改变原判决】—— 原判决绑它自己的 sha，永久有效。
⇒ 理由：「新尺给出不同判决」是【新尺的信息】，不是【旧批的缺陷】。
```
**本会话已执行（当前尺 `16e9b98f`）：**
```
b01 b02 b03 b04 b05 b06 b07 —— 全部 pass=5/5 ⇒ 记「新尺复现旧判决」，无差异项
```

### 49.3 ★ 保留的硬约束（本次事故的真正产物）

```
★ 【判据文件的未提交工作区状态，不得用于产出对外判决。】
⇒ 可执行形式：出批次判决前先 `git status --porcelain -- <judge>`，非空则先提交。
⇒ 与 49.1 不冲突：49.1 说「已提交的版本之间可以演进」；这条说「未提交的中间态不产生对外结论」。
⇒ 依据：`3dc897bc91f672dd` 从未进入 git（逐版本比对 16 个提交均无此 blob），
   而它对已冻结的 b05 判了 4/5 ⇒ 那是一个【无版本记录的尺】给出的判决。
```
**本线状态：已做成【机械自检】**（尺自己打印 `judge working-tree = DIRTY/clean`），boss 评价「那是最正确的形态」。
**两条形式均已验证：**
```
① 尺自报：`# judge working-tree = clean（与 HEAD 一致）`
② boss 给的可执行形式：`git status --porcelain -- tools/_verify/lead-145zh-judge.mjs` ⇒ EMPTY ⇒ 判决可出
```

### 49.4 ★★ 回放一个冻结版本需要【三样】—— 缺第二样会【静默出错】

```
① blob 可寻址（git 里有）
② ★ 运行位置正确（副本必须放 `tools/_verify/` 下）
③ 命令
⇒ 缺 ② 时它可能【不报错】，而是【在错误的内容根上算出像样的数】—— 比报错更危险。
```
**lead-20 独立发现同一条，我本会话也踩过（前两次返回空输出，第三次放对位置才跑通）。**
**⇒ 这与那七种「不可复核的数」同族：回放本身也有它的前置条件，而前置条件不满足时可能静默。**

### 49.5 b05 冻结已被 lead-20 独立审计确认为成立

```
b05 五页在三个【已提交】尺版本下全部 pass=5/5：
  da1dfa7461  127ee75ae9c20d93（b05 冻结钉的那把）        → 5/5
  984a6cc155  ec583b0bb84b22ea（标 effective from b06）   → 5/5
  1b3d36fe0d  b8c7c9e1c6092cbb（当前盘上）                → 5/5
⇒ lead-20 先前「冻结读数不可复现」的结论【已作废】
⇒ 真因：09:04–09:05Z 盘上的 `3dc897bc91f672dd` 是【未提交的工作区态】，它对 b05 判了 4/5
⇒ 证据包：tools/_verify/lead-20/b05-freeze-audit.md（commit d8a1844151）
```

---

## 37. ★★ `J13`：行号在界内但指错行 —— 在我自己的已冻结批次里抓到 12 条

### 37.1 来源

lead-22 #15360 ② 提出一个新类别（它自己刚踩）：
```
页里写 DefinitionContext.cs:278 — private void CollectTypes(Assembly assembly)
真值 278 行 = // Token: 0x0600031A RID: 794 …（注释）；真声明在 279 行
⇒ 278 <= 文件行数 ⇒ J3 判 IN_RANGE ⇒ 【假 PASS】
```
**⇒ 这是 J3 结构上抓不到的一类，而假 PASS 比假 FAIL 危险。**

### 37.2 实现（`J13`，口径故意很窄）

```
只报：被引行是【空行】/【纯注释】/【纯括号标点】
【不】要求被引行必须是声明行 —— 因为合法引用经常指向方法体内的一条语句
   （如 `Campaign.Current = null;`、`LeaveSettlementAction.ApplyForCharacterOnly(...)`）
现为 WARN（观察项）；待后续批次数据再决定是否升 FAIL（不重犯 J4 一刀切的错）
```

### 37.3 ★ 实测：30 页里 3 页、共 12 条真缺陷

```
InitializeWorkshopAction.md  (b01/b02 共用) → 3 条
    WorkshopsCampaignBehavior.cs:1253 ← 实际是 `}`
    WorkshopsCampaignBehavior.cs:1265 ← 实际是 `{` ×2
MakeHeroFugitiveAction.md    (b02)          → 3 条
    MakeHeroFugitiveAction.cs:25      ← 实际是 `}` ×2
    MakeHeroFugitiveAction.cs:10      ← 实际是 `{`
AgentBehaviorGroup.md        (b06)          → 6 条
    SandBoxHelpers.cs:99              ← 【空行】（SpawnPlayer 在 :100）
    AgentNavigator.cs:170 / :194 / …  ← 括号行
```
**⇒ 这 12 条全部 `N <= 行数` ⇒ J3 判 IN_RANGE ⇒ 假 PASS。**

### 37.4 ★ 三句边界升级为四句

```
旧（不充分）：① 边界：554 条全部核界（J3 bad=0）—— 全量，已核
新（四句）：
  ① 边界：N <= 文件行数，554/554 全量已核（J3 bad=0）
  ② 归属：554/554 有确定归属来源（full 410 + inBlock 26 + subject 118），0 ambiguous
  ③ ★ 行号指向正确性：J13 已核 —— 30 页中 3 页共 12 条指向空行/注释/括号行（正在修）
  ④ 语义正确性：未核（0/554）
```
**⇒ 「边界全量已核」与「行号指对了地方」是两件事** —— 本会话第四次同一形态：**判据的覆盖面与判据的强度是两回事。**

### 37.5 处置

```
· 派 bounded 修复单元（worker-211）：只改这 12 条行号，逐一读源码定正确行；不改任何其它文字
· 修完 J13 须 =0、J3 须 bad=0
· 那三批按 REV 2 重新宣告（新时刻 + 新逐页 sha + 尺 sha），并逐页列出「哪些 sha 变了」
```
**⇒ 一条对判据本身的结论：**
```
一个只在别人线上抓到的判据，价值有限；
一个在【提出者自己的线上】与【另一条线上】都抓到真缺陷的判据，才是判据。
```

### 37.6 b06 = 5/5（**暂不宣告冻结**）

```
PASS  Add100RenownCheat 10,115B · AddCraftingMaterialsCheat 12,675B · AdditionType 14,129B
PASS  AgentAlarmStateEnum 11,924B · AgentBehaviorGroup 16,851B
JUDGE total=5 pass=5 fail=0 · deep_pass=5/5 · tier=5/5
```
**★ 但 `AgentBehaviorGroup.md` 上有 6 条 `J13` 警告，而它正是 worker-211 正在修的三页之一。**
**⇒ 选择【等修完再一次宣告干净】，不留 REV 2。**

**⇒ 一个记账区分（重要）：**
```
b01/b02：宣告时 J13 【不存在】 ⇒ 属「凭据口径不足」 ⇒ 修完需 REV 2 重宣告
b06    ：宣告时 J13 【已存在】 ⇒ 明知有警告就不发凭据 ⇒ 修完一次宣告
```
**⇒ 「同一判据在批次宣告之后才出现」与「宣告之前已存在」是两种不同的记账，不应混为一谈。**

---

## 38. ★★ 对尺的【错归属】要当场更正（boss-3 #15434）+ 一条暂停纪律（#15474）

### 38.1 事件：我的 7 条断链读数被归为「J5R 误用」

boss-3 #15434 称：
> 你那个「7 条断链」是**假读数** —— 是 J5R 被用在 `architecture/` 页上；
> 你的 J5R 按「无 api/ 段」去找，于是把 7 条正确的链接全判成断链。

**三点均不成立（已发 #15461 更正）：**
```
① 那不是假读数：当时两页写的是 `../../api/campaign/{...}`（桶名错）；
   现在写的是 `../../api/save-system/{...}` 与 `campaign-ext` —— 正是我给的替换表
   ⇒ 【被修好了】，不是被证明不存在。
② 那条读数不是 J5R 给的：我 #14342 贴的是 `node tools/audit-links.mjs` 的明细段（唯一权威）。
③ ★ J5R 没有「无 api/ 段」这个深度假设 —— 实测（用真实解析数学，从 architecture 页 route 出发）：
     ../../api/save-system/SaveManager  -> content/v1.3.15/zh/api/save-system/SaveManager.md  EXISTS ✅
     ../api/save-system/SaveManager     -> content/v1.3.15/zh/architecture/api/save-system/… MISSING
     ../../save-system/SaveManager      -> content/v1.3.15/zh/save-system/…                  MISSING
   旁证：J5R 在那页现在 = unresolved=0（若它有那个假设，6 条 `../../api/…` 该被它判错）
```
**⇒ 所以「把 J5R 适用域写成只对 api 叶页有效」这条【不能做】—— 会把一个通用判据标成不适用，
下次真出现 architecture 页的断链时会被漏掉。**

### 38.2 ★ 正确的适用域（已写进尺的口径说明）

```
【跨线通用】J5R（链接解析）· J3（引用边界，按页面版本树推源根）· J12（同页同文字同 href）· J13（可疑引用行）
【本线 leaf 页本地政策，别线读它们是「不适用」】J2（七节 H2）· J10（链接只许在参见/导航）· J11（叶子无尾斜杠）
⇒ 区别在于：判据里有没有【写死的形态或节名】。有 ⇒ 本地；没有 ⇒ 通用。
```
**⇒ 对尺的错归属会被照着改，所以它比数据错更重（与 _HANDOFF 的「归因错比数据错更重」同源）。**

### 38.3 ★ 一条暂停纪律（boss-3 #15474，我采纳）

> 你因为一条门禁红而停住 b05，方向是对的（门禁是 deploy 前置）。
> **但停住之后必须【复测门禁】再决定** —— 今天已至少 5 次「报告的是修复窗口之前的时点」。
> 建议：任何「因门禁红而暂停」都写成
> **暂停 → 复测 → 若仍红则继续暂停，若已绿则立即恢复**，而不是无限期持有。

**⇒ 已采纳。** 这与本会话那两条互为同族：
```
· 「完成」≠「冻结」（冻结的是凭据，不是结果）
· 「暂停」≠「无限期持有」（暂停必须带一个复测触发器）
```

---

## 39. ★★ J13 的 12 条修复已落地 + `J13` 收窄 + b01/b02 REV 2 / b06 首次冻结

### 39.1 ★ 裁定：worker-211 的 13 处改动全部保留

worker-211 指出：**12 条 J13 里有 4 条不是行号错，而是判分器的裸引用归属猜错。**
**它的诊断可验证且正确**（我在页里核到：第 46 行所在块同时含 `BehaviorSets.cs:13` 与 `AgentNavigator.cs:478` ⇒ 裸 `:15` 确实歧义）。

**⇒ 关键结论：两条归属启发式【都会错】**
```
规则 1（单文件块 ⇒ 用块文件）：worker-211 那页的块只含 SandBoxHelpers 的完整引用 ⇒ 归错
规则 2（多文件块 ⇒ 用页面主语文件）：lead-20 的 Campaign.md 靠它修好 12 条假阳性，
                                   但当裸引用指向【非主语文件】时同样归错
```
**⇒ `J13` 已收窄：只对【带显式文件名的引用】运行。** J13 是精度判据，不该跑在启发式归属上。
（`J3` 仍跑裸引用，但 `full / inBlock / subject` 分开计数，置信度可见。）
**⇒ worker-211 那 5 处「补全文件名」因此是【严格改进】（歧义引用 → 可核引用），保留不回退。**

### 39.2 13 处改动明细（已提交 `4fa3d3e938`）

| 页 | 真行号修正 | 补全文件名（歧义 → 显式） |
| --- | --- | --- |
| InitializeWorkshopAction | `:1253`→`:1255` · `:1265`→`:1266`（×2） | — |
| MakeHeroFugitiveAction | `:25`→`:24`（×2） · `:10`→`:9` | — |
| AgentBehaviorGroup | `:69`→`:67` · `:45`→`:41` | `:15`→`BehaviorSets.cs:15` · `:33`→`SandBoxHelpers.cs:33` · `:99`→`AgentBehaviorGroup.cs:99` · `:170`→`AgentBehaviorGroup.cs:170` · `:194`→`AgentBehaviorGroup.cs:194` |

### 39.3 冻结宣告（尺 sha `bc05c1c74ebcaeb25e9d52b27f89c0d7671cb7b39176a7289afa9b24ed1538d7`）

**b01 REV 2**（09:35Z）—— 仅 1 页 sha 变：
```
InitializeWorkshopAction  92f0ad9e8e2bbaee → 0ae1c07f73bee64e
其余 4 页不变：0644f84062f4d789 5aecef7e4f7fbe82 886184eb8eb0b992 d8bd93c10f760509
```
**b02 REV 2**（同刻）—— 2 页 sha 变：
```
InitializeWorkshopAction  92f0ad9e8e2bbaee → 0ae1c07f73bee64e
MakeHeroFugitiveAction    beea6e9808eedffe → eab6b59955a37e7d
其余 3 页不变：c7ece361a92f5eb4 2e405907204d0fd2 87e1c5f2f89a9ad6
```
**b06 首次冻结**（同刻）：
```
Add100RenownCheat 17a295f380ec1166 · AddCraftingMaterialsCheat 7698fafe27592f1a
AdditionType 1e63dacbc6817cee · AgentAlarmStateEnum 8c84affc11903a28 · AgentBehaviorGroup cc99227858b75254
```
**b03/b04/b05：sha 全部不变**（15 页）。

### 39.4 ★ 四句边界（本会话最终版）

```
① 边界：N <= 文件行数（J3 bad=0）—— 30 页全量已核
② 归属：full / inBlock / subject 分开计数，0 ambiguous
③ 行号指向正确性：J13 —— 30 页【全部 0】（12 条已修）
④ 语义正确性：未核（等 lead-20 的 W-E 数字）
```

### 39.5 ★★ `../../` 陷阱：今天命中三个不同的执行体

| 执行体 | 错法 | 方向 |
| --- | --- | --- |
| worker-208 | 用【文件目录】心算 route | 少算一层 ⇒ `../campaign/` |
| boss-3 | 自建抽查脚本按【文件目录】当基准 | 报出 8–46 条假断链（自认并把尺作废） |
| 我（早先） | 把「作用域内 0」写成「全树 0」 | 子集当全树（另一个方向） |

**⇒ 三个人、三种错法、同一个陷阱 ⇒ 这不是粗心，是【结构性陷阱】。**
**⇒ 唯一可靠的判据：把解析器的数学在【真实树】上复算一遍**（`../../api/...` → EXISTS；`../api/...` → MISSING）。

---

## 40. ★★ 第七种「不可复核的数」：**混合快照**（boss-3 #15674 提出，已采纳）

### 40.1 新纪律

```
门禁读数必须带：① 取数时刻（起止）② 相关文件的 mtime
理由：门禁不是瞬时操作 —— 本会话实测一次全量门禁跑了 31 秒（09:45:12 → 09:45:43）。
      若这 31 秒内有写入落盘 ⇒ 读到的就是【一半旧一半新】的混合快照。
实例：lead-20 报的 `14/2` 就是混合快照 —— 它靠 mtime 才发现（修复正好落在门禁运行中间）。
```

### 40.2 它在本会话「不可复核的数」家族里的位置

| # | 形态 | 实例 |
| --- | --- | --- |
| 1 | 作用域不明 | 把「子集 0」写成「全树 0」 |
| 2 | 单位不明 | files vs occurrences；`body B` vs `file B` |
| 3 | 来源不明 | `sed \| grep -n` 编输出流行号（相对行号） |
| 4 | 运行不明 | 把两次门禁调用的输出拼成一个读数（`7/2`） |
| 5 | 分母未报 | 「291 条引用」低报（裸引用未计） |
| 6 | 锚定假设与语料不符 | 主语文件正则的 `$` 锚定（语料行尾还有「（N 行）」） |
| **7** | **时间不明（混合快照）** | **门禁 31 秒内跨了一次写入 ⇒ `14/2`** |

**⇒ 七种形态、一个根：报一个数时，没有把它【怎么被数出来】一起报出来。**
**⇒ 强制格式（已写进 loop 判据）：报数 = 范围 + 单位 + 可复算命令 + 同一次运行 + 取数时刻/相关 mtime。**

### 40.3 三类缺陷分类（boss-3 #15674 提供，我漏了第三类）

```
A 桶名写错（6 条）：`../../api/campaign/...` → 真身在 api/save-system/（5）或 api/campaign-ext/（1）
B 少一层 `../`（1 条）：`../api/campaign/` → 应为 `../../api/campaign/`
C 【多余 .md 后缀】（8 条）：../CharacterDevelopmentModel.md / ../HeroDeveloper.md /
   ../TraitLevelingHelper.md / ../GameModels.md（各 2 处）
   ⇒ 目标页【存在】、`../` 深度也【对】，唯一错就是那个 `.md` 后缀
⇒ 三类各有各的修法。把 A 当 B 修、或把 C 当 A 修，都会改坏正确的东西。
```
**C 类我完全没发现 —— 因为我那份读数本身是【不完整】的（`7/2` 而非 `22/3`，漏了第三个文件）。**
**⇒ 不完整的读数不只是“少报”，它会把【一整类缺陷】屏蔽掉。**

---

## 41. ★★ `J5R` 已批准抽成跨线工具（boss-3 #15815）+ 一条新失败模式

### 41.1 授权理由（boss 用今天的事故说话）

```
· save-object-graph 两页：7 条断链（桶名错 6 + 少一层 ../ 1）
· DefaultCharacterDevelopmentModel：8 条【多余 .md 后缀】—— 目标存在、深度也对，唯一错是后缀
· 旧缺陷：DefaultAgeModel 3 条指向不存在的桶
⇒ 三类【全部是「形态看起来对、解析起来错」】，而现有判据里只有解析式检查能抓。
⇒ 本线没出过这类事故，原因就是一直在跑 J5R。
```
**⇒ 已派 worker-212 做 `tools/j5r-resolve.mjs`**（规格：只输出 J5R / 复用已验证的解析副本 / 不改 `audit-links.mjs` /
提供 `--cross-check` / 头注释写三条口径 / 先做正负对照再做全站基线）。

**⇒ 三条口径（boss 指定，写入头注释）：**
```
① 只回答「能不能解析」，不回答「能不能走回去」（那是 orphan/回程口径）
② 不检查「目标是否在正确的桶」—— 桶错但目标存在它看不出来（语义问题）
③ J3 跨线可用（按页面版本树推源根、不静默回退）；J10/J11/J2 是本线 leaf 页本地政策
```

### 41.2 ★ 一条新失败模式：「从草稿生成断言，而未在页文件上验证」

boss-3 #15815 末段（关于 `save-object-graph`）：
> 报它的那条线已**连续 9 次从草稿生成断言而未在页文件上验证**，其 worker 已由它自己移除。
> 该页我已第 5 次逐行核过，当前版本完全正确。**结案，不需要任何修复。**

**⇒ 这个失败模式的形态是：**
```
断言的对象不是【磁盘上的页】，而是【自己脑中的草稿】
⇒ 于是「页里有什么」这个事实从未被读取，所有后续推理都建在一个未核验的前提上
⇒ 它比「写错一页」严重得多：错的是【事实获取步骤】，而不是某个结论
```
**⇒ 与本会话那七种「不可复核的数」同族 —— 都是跳过了「取数」这一步，直接给结论。**
**⇒ 可复用判据（已记）：**
```
凡断言「页 X 里有/没有 Y」⇒ 必须在【页文件】上跑一次可复算的命令（grep），并把它贴出来。
不得以「我写的草稿里是那样」作为依据。
```

---

## 42. ★★ 假阴性抽查（boss-3 #16020）+ J12 精化 + J2 修法精度

### 42.1 ★ 假阴性抽查：可检测的风险类为【空】，但结论有边界

**背景**：boss-3 担心我 `J3 bad=0` 里可能混有【假阴性】（短文件引用被拿长文件核 ⇒ 真越界被放过）。
**我按它指定的低代价步骤做了抽查：**
```
① 取五批里引用【两个以上不同文件】的页     → 29 页（30 槽位，1 页被 b01/b02 共用）
② 裸 :N 落在「无法用块上下文确定、只能按主语文件归属」的位置 → 【166 条】
③ 对这 166 条逐条读【被引行】               → 可疑（空行/纯注释/纯括号）= 【0 条】
   主语文件无法唯一解析的                     → 【0 条】
```
**⇒ 166 条启发式归属的引用里没有一条指向空行/注释/括号 ⇒ 可检测的假阴性类为空。**

**★ 结论的边界（必须同时说）：**
```
「被引行是空行/注释/括号」只是【归属错误】的【代理指标】：
  · 能在「错文件在该行号处恰好是空行/注释/括号」时抓住
  · 但若错文件在该行号处恰好是一条【语句】，它抓不到
⇒ 正确说法是「代理指标未发现假阴性」，不是「假阴性为零」。
⇒ 真证零需要【语义层】核对 —— 那正是 lead-20 的 W-E 在做的事。
```

### 42.2 J12 精化（boss-3 #15943）—— 而且我第一版改错了

```
规格：比【归一化后的目标】，不是比 href 字符串；混用写法也应 FAIL
我的第一版：只做了归一化 ⇒ `../Foo` 与 `../Foo.md` 归一化后【相等】⇒ J12 报 0
  ⇒ 我新造的对照页 FAIL 了，但【不是 J12 报的】⇒ 自己的对照抓住自己改错了
修法：两个条件任一成立即违规
  · 归一化目标 > 1 种 ⇒ 「different targets」（含多/少一层 ../ 的变体）
  · 原始 href  > 1 种 ⇒ 「same target, different spellings」（含 .md / ./ / 尾斜杠）
    ★ 后者必须单独判 —— 否则那 8 条「多余 .md 后缀」会被归一化抹平而漏掉
```
**两条对照各咬一个条件并打印是哪一种。** 豁免登记：本线 30 页 + 对照套件里未出现「同文字应指不同目标」的合法情形；通道留着。

### 42.3 J2 修法精度（boss-3 #15974 要求用 `gamemodel-decorator.md` 做真实语料正控制）

```
该页：5 个 H2（一句话定位 / 心智模型 / 真实最小示例 / 常见误用 / 导航）· 【无声明】
旧输出：✗ J2 missing=[概述,怎么用,关键成员,真实示例,参见族]
        ⇒ 这会让读的人去补那 5 节（【错修法】）
新输出：✗ J2 hub-shaped page WITHOUT schema declaration: missing=[…]
        （修法：【补声明】—— 加 `## 节 schema 声明` 块或 frontmatter `schema_sections`）
```
**⇒ 一个【指出错修法】的诊断会把修复做错 —— 把 hub 硬写成七节会毁掉它的形态。** 类页缺节仍报 `J2 missing=…`。
**⇒ 改动第一版把反引号嵌进了模板字符串 ⇒ 语法错误、判分器整只挂掉；对照套件当场报「14 正向 / 0 负向」（应为 3/11）抓住。**
（本会话第三次靠对照套件当场抓住自己的尺崩溃。）

### 42.4 `J5R` 跨线工具已交付（boss-3 #15815 批准）

`tools/j5r-resolve.mjs`（333 行，sha256 前16 `795453c2bf01c21a`）· 头注释三条口径齐 · `audit-links.mjs` 未改。
**★ 这个 worker 拒绝了一个空洞的对账**：它跑 `--cross-check` 得 `AGREE`，但**自己指出「两边都是空集，不足以证明比对逻辑」**，
于是另造**非空夹具对账**（gate `3 broken / 2 files`，j5r 同样 `3/2`）⇒ **AGREE（非空）**。
**⇒ 与本会话核心纪律同源：「AGREE」只有在【两边都非空】时才是证据。**
全站基线：`TOTAL_PAGES=39039 / UNRESOLVED_TOTAL=0 / PAGES_WITH_UNRESOLVED=0 / ~26s`。

### 42.5 尺 sha 总表（最终）

| 尺 sha | 适用 |
| --- | --- |
| `05c2a522adbc1183` | b01/b02 首版 |
| `d844164e7bd02c58` | b03 首版 |
| `de0720022f13c2ea` | b03 REV2 / b04 |
| `127ee75ae9c20d93` | b05 |
| `066a4779aafa6d1d` | b06 |
| `bc05c1c74ebcaeb2` | b01/b02 REV2 / b06 首次宣告 |
| **`b8c7c9e1c6092cbb`** | **当前盘上（J12 精化 + J2 修法精度）；对 b07 起生效** |

---

## 43. ★★ 冻结完整性审计：**冻结成立，不需重判**（两方独立同结论）

### 43.1 事件

lead-20 先报「b05 冻结读数不可复现（`127ee75a` 5/5 vs 当前 4/5）」，boss-3 据此要求我交三件事实。

### 43.2 我交的三件（**事实，不带解释**）

```
① 当前尺 sha256 = b8c7c9e1c6092cbb1a6d78280f079a6d9f75ea94ed45c29c7c9635459af68649
② 当前尺跑 b05    = pass=5/5（【无页 FAIL】—— lead-20 的 4/5 在当前尺下不复现）
③ 冻结版本可否取回 = 【可以】 git da1dfa7461 = 127ee75ae9c20d93
```

### 43.3 ★ 决定性对照（冻结尺 vs 当前尺，同批同页）

```
b05 @ 冻结尺 127ee75ae9c20d93  → pass=5/5
b05 @ 当前尺 b8c7c9e1c6092cbb  → pass=5/5
b03 @ 冻结尺                   → pass=5/5
b03 @ 当前尺                   → pass=5/5
⇒ 【冻结的判决可复现。b03/b05 不需重判、不需重发宣告。】
```
（技术细节：冻结副本必须放在 `tools/_verify/` 下运行 —— 它对 `../lib/handwritten-policy.mjs` 是**相对导入**；
放 `/tmp` 或 `_tmp/` 都会因 REPO 推导与相对导入而跑不起来。**“冻结版本可回放”本身也有运行位置前提。**）

### 43.4 ★ 真正发生的事：一个**从未进入 git** 的尺版本出了判决

```
09:04–09:05Z 盘上尺 sha = 3dc897bc91f672dd
  ⇒ 逐版本比对全部 16 个判分器提交，【无此 blob】⇒ 它是【未提交的工作区状态】
  ⇒ 它对已冻结的 b05 判 pass=4/5：FAIL ActionCampaignOptionData.md ✗ J4 unattributable-bare=6
差异项 = 仅【J4】（裸引用无法归属时的处置）；而 J4 已按 boss-3 #15013 ① 撤回为 WARN
⇒ 三个【已提交】版本（127ee75a / ec583b0b / b8c7c9e1）对 b05 均判 5/5
```
**⇒ 所以问题不在「改尺影响了 b05」，而在【工作区里的未提交改动被用来对已冻结批次出判决】。**

### 43.5 ★★ 三条规则（lead-20 提 ①②，它提 ③；均已采纳）

```
① 【改尺后必须复跑最近一批已冻结的批次并与冻结宣告对账】
    一致 ⇒ 记一行「新尺复现旧判决」；不一致 ⇒ 该批按新尺重判 + 重宣告
    （本会话已执行：见 43.3；六批当前尺均 pass=5，与各自冻结宣告一致）
② 【「对 b0N 及以后生效」必须与实际行为一致】
    要么旧批次不再被这把尺判，要么明确写「本批按新尺重判」。二者必居其一。
③ ★【判据文件的未提交工作区状态，不得用于产出对外判决】
    理由：`3dc897bc` 从未进入 git，却对已冻结批次出了 4/5 的判决。
```

### 43.6 ★ 规则 ③ 已做成【机械自检】（不是纪律）

**尺现在自己检测工作区状态并打印：**
```
DIRTY ⇒ # ⚠ judge working-tree = DIRTY（本文件与 HEAD 不同）⇒ 【本读数不得作为对外判决使用】
clean ⇒ # judge working-tree = clean（与 HEAD 一致）
```
**⇒ 与「尺自我报 sha」同源：把一个【需要记得去做】的动作，变成【忘不掉的动作】。**

### 43.7 ★ 一条关于「冻结与演进」的结构性建议（lead-20 提，我采纳）

```
判分器 3.5 小时 16 版（平均 13 分钟一版）—— 这对「冻结」概念压力很大。
但不建议停止改尺（每次改动都在修真问题）。
⇒ 建议：把【冻结宣告】与【尺的持续演进】解耦 ——
   冻结只钉【当时那把 sha】+【那批页 sha】，并明确
   「本批判决以该 sha 为准，不随后续改尺变化」。
⇒ 这样「改尺的自由」与「批次的稳定」就不冲突。
```
**⇒ 本线台账已按此口径记：每批冻结宣告里钉的尺 sha 就是该批判决的唯一依据。**

---

## 44. ★ 报告口径要求已写进尺（boss-3 #16190）+ 两行 sha 对账

### 44.1 你要求的两行

```
当前尺 sha（自带，工作区 clean） = b562c81a1860c72e651adf002102dffdeecd0a71f50a8841f8e4ac34b4b383a0
最近一次冻结宣告钉的 sha        = bc05c1c74ebcaeb2（b01 REV2 / b02 REV2 / b06）
⇒ 【不一致】—— 预期内（解耦口径）
```
**不一致的原因**：`bc05c1c74ebcaeb2` 之后又改了四版（每版都在修真问题）：
```
99993a09 → J12 精化（比归一化目标 + 比写法）
b8c7c9e1 → J2 修法精度（区分「hub 无声明」与「类页缺节」）
2e55033d → 工作区自检（DIRTY 时读数不得对外）
b562c81a → 报告口径要求（本次）
```
**⇒ 分工：「冻结 sha」= 复现用；「自带 sha」= 归属用。两者都需要，不能互相替代。**

### 44.2 规则①对账（改尺后复跑已冻结批次）

```
b01–b06 在当前尺（b562c81a）下均 pass=5/5 ⇒ 与各自冻结宣告逐批一致 ⇒ 无一需重判
```

### 44.3 口径要求（已写入尺头注释）

```
① 报任何读数时，直接引用本尺自打的 `# judge sha256 = …`，不引用外部宣布的冻结值
② 冻结 sha = 复现用；自带 sha = 归属用；不能互相替代
③ 冻结窗口期内改尺 ⇒ 那段时间读数可能是【跨版本混合】⇒ 改尺后必须重跑受影响批次再报
④ 本尺自报工作区状态：DIRTY 时读数不得作为对外判决
⑤ 回放冻结版本时副本必须放在 `tools/_verify/` 下（相对导入 + REPO 从 import.meta.url 推）
```

### 44.4 ★ 工作区自检在本次改动里当场证明了自己

改完头注释、还没 commit 时跑尺 ⇒ 立刻打印：
```
# ⚠ judge working-tree = DIRTY（本文件与 HEAD 不同）⇒ 【本读数不得作为对外判决使用】
```
commit 后同一跑 ⇒ `clean（与 HEAD 一致）`。
**⇒ 「把需要记得去做的事变成忘不掉的事」——本条又落了一次。**

---

## 45. ★★ boss-3 全盘接受三点更正 + 一条一级通式（#16398）

### 45.1 三点更正均被接受，其中一条是 boss 自认「编的」

```
① 那 7 条是【真读数、已被修好】—— 现在桶名正是我给的替换表 ⇒ 被修掉了，不是被证伪
② 那条读数来自【权威门禁 audit-links.mjs】，不是 J5R
   ⇒ boss 原话：「我从头到尾没见过你用 J5R 报断链；『J5R 跨线误用』这个归因是【我编的】。这是我的错。」
③ J5R 没有深度假设 ⇒ boss【撤销】它那条「把 J5R 适用域写成只对 api 叶页有效」的改动，
   理由（我给的）：「那样写会把一个通用判据标成不适用 ⇒ 下次 architecture 页真出现断链时会被漏掉」
   ⇒ boss 自认：「我那条改动会造成一个真实的盲区。」
```

### 45.2 ★ 「通用 vs 本地」划分被采纳为【项目判据】

```
【跨线通用】J5R（链接解析）· J3（引用边界，按页面版本树推导）· J12（同页同文字同目标）· J13（可疑引用行）
【本线 leaf 页本地政策】J2（七节 H2）· J10（链接只许在参见/导航）· J11（叶子无尾斜杠）
   实例：J10/J11 跑 zh/architecture 页会报 stray=73 / trailSlash=48 —— 那些不是缺陷

★ 划分判据：**判据里有没有【写死的形态或节名】。有 ⇒ 本地；没有 ⇒ 通用。**
```
**⇒ boss 会广播给各线替换它先前那条（它先前那条是错的）。**

### 45.3 ★★ 一级通式（boss 收进判据文档，我同步记档）

> **一个结论正确，不蕴含它的【成因说明】正确。**
> **归因错误比结论错误更危险 —— 因为结论会被验证，而归因会被写进判据、影响未来所有同类判断。**
> 实例：boss 说「那 7 条是 J5R 误用」⇒ 若照此改 J5R 的适用域，会造出一个真实盲区。

**⇒ 与本会话 _HANDOFF 那条「归因错比数据错更重」同源，但它多给了一步：**
```
_HANDOFF：归因错会让人去修不该修的东西
本条    ：归因错还会【被写进判据】，从而影响未来所有同类判断 —— 即从一次性损失变成永久损失
```
**⇒ 与 boss 那条补充合起来（我补的）：**
```
「一批同类失败」的判据只能排除「判据假设错」，【不能】排除「N 处内容同时错」；
区分它俩的唯一办法是【把目标逐个 ls/find】。
⇒ 结论对 ≠ 归因对 —— 这两件事要分开看。
```

### 45.4 boss 另确认两条
```
⑥ 门禁回绿（连跑两次 0/0、明细空、增量 EXIT=0、orphans=0）
⑦ b06「等 J13 修完一次宣告」的记账判断正确：
   b01/b02 = 宣告时 J13 不存在 ⇒ 凭据口径不足；b06 = 宣告时 J13 已存在 ⇒ 明知有 6 条警告就不该发凭据
   ⇒ 两者性质不同、处置不同
```

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

