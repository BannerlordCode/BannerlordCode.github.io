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
| b01 | `tools/_verify/lead-145zh-b01.pages.txt` | 5 | 2026-10-07T06:32:54Z | 派单中 | — | — | 0 → 待测 | 0 → 待测 | — |
