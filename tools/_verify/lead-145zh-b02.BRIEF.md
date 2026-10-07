# lead-145zh b02 — 派单 brief（**已冻结，未派单**）

> 状态：**HELD**。boss-3 #12321 硬停机生效中，解禁前不得派单、不得写 `content/`。
> 本文件是停机期间的准备产物，也是解禁后唯一需要的派单依据。
> 清单：`tools/_verify/lead-145zh-b02.pages.txt` · **N=5** · 冻结 2026-10-07T06:52:00Z
> 快照：`tools/_verify/lead-145zh-b02.pages.frozen` · sha256 `557b647e219af143fd03eb8b629cbd7a9de0b3f82a193baac0950dbdcd112b6c`

## 0. 解禁前置（三条全满足才可开工）
1. 全站 `node tools/audit-links.mjs` = `BROKEN_LINKS=0 / FILES_WITH_BROKEN=0`
   （2026-10-07T06:58Z 实测：`39 / 2`，**两个文件全在 `content/v1.3.0/zh/api/campaign/`，不在本线**）
2. boss-3 对「政策 #12289 vs `deep_pass`」作出 **(a) 窄豁免** 或 **(b) 接受不可达** 的裁定
3. 批报告必须含 `audit-links` 批前 / 批后两套数（缺则不算完成）

## 1. ★ 写作政策（boss-3 #12289，立即生效）
**本轮写作【不写跨页 markdown 链接】。** 所有对其它类型 / 页面的引用一律用 `反引号代码片段`。
源码文件本来就是代码片段，不变。

- `## 参见` 这个**标题仍然必须有**（七节齐全不变），但节内**用反引号写相关类型名**，不写链接。
- 父索引补链（`_index.md` 的机械子页清单）**不受此政策影响**——但本批 5 页**均已在该清单里**
  （`_index.md` 行 1620 / 1915 / 2819 / 2919 / 1280），**所以本批既不补链也不得改 `_index.md`**。
- ⚠ **已知后果**：`tools/lib/handwritten-policy.mjs` 的 `deep_pass` 硬要求 `参见/依赖` 小节 ≥2 条链接
  ⇒ 政策生效后新页拿不到 `deep_pass`。**判分器已为此提供 `--links off`（默认）**，
  并且**永远分开打印 `deepPass` 与 `tier` 两个口径**。若 boss 裁定 (a) 窄豁免，两模式等价。

## 2. 每页验收判据（缺一即该页判未通过）
1. **七节 H2 精确齐全，顺序不许动**：
   `## 概述` → `## 心智模型` → `## 怎么用` → `## 关键成员` → `## 真实示例` → `## 参见` → `## 导航`
   - `## 怎么用` 下必须有 `### 怎么拿到`（**源树路径 + `文件:行号` + 入口**）、`### 典型用法`、`### 坑`
   - `## 关键成员`：**每个成员一行说明它做什么用**，不是只抄签名
   - `## 真实示例`：≥3 行真实 csharp，**逐条核源**
2. **引用边界**：页里每条 `X.cs:N` 必须 `N <= (wc -l X.cs)`；越界 = 未核实引用 = 该页判未通过。
   行号指向**声明处**，不是使用点。不许写裸 `:N`，一律 `文件名.cs:N`。
3. **必须改写 `description`**：删掉「的自动生成战役动作参考。」这类串。
   **整页任何位置**出现 `的自动生成类参考` / `的自动生成战役动作参考` / `Auto-generated`
   ⇒ 该页永远留在 generated 档（判据 J7）。
4. **U+FFFD = 0**：每写完一页立刻单扫该文件，不等收尾。
5. **正文 > 2500 字节**且 H2/H3 ≥ 1（判据 J8）。源码只有 14–34 行 ⇒ 靠把
   **副作用顺序 / 前置不变量 / 误用后果**讲透来达成，**不许注水、不许重复同一句**。
6. **避开模板串**（命中任一，J6 直接判 stub）：
   `阅读时先通过属性了解状态` · `是 TaleWorlds.X 下的公开类型` · `从实际子系统 API 获取实例` ·
   `null; // 替换` · `SomeValue` · `service = ...` ·
   以及「用途/Purpose」式空话（「处理 X 相关逻辑」「获取 X 的当前值」「设置 X 的当前值」）。
   原文里的 `**用途 / Purpose:**` 机器行请**整体删掉**，换成真实散文。

## 3. 批的负向 / 正向对照（必须先失败再通过）
**批前（2026-10-07T06:58Z 实测，已冻结）**：
```
$ node tools/_verify/lead-145zh-judge.mjs --manifest tools/_verify/lead-145zh-b02.pages.txt
JUDGE total=5 pass=0 fail=5
# 两个口径: deep_pass=0/5 · tier=handwritten_deep=0/5
```
五页**全部**是轻页 `H2=[方法/使用示例/参见]`，字节 848 / 879 / 953 / 969 / 1186。
⇒ **尺必须在批前判 0/5。若批前不是 0/5，说明尺或清单有问题，先查这个再开工。**
**批后目标**：`pass=5/5`（若 boss 裁定 (b)，则 `pass=5/5` 但 `deepPass` 可能为 0/5 —— **两个数都要报**）。

## 4. 五页与已核实源码事实（**起点不是结论，worker 必须自己核一遍**）

| # | 页 | 源码（`bannerlord-1.4.5/Bannerlord.Source/bin/`） | 行数 |
| --- | --- | --- | ---: |
| 1 | `InitializeWorkshopAction.md` | `TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/InitializeWorkshopAction.cs` | 14 |
| 2 | `MakeHeroFugitiveAction.md` | `…Actions/MakeHeroFugitiveAction.cs` | 34 |
| 3 | `SiegeAftermathAction.md` | `…Actions/SiegeAftermathAction.cs` | 25 |
| 4 | `StartMercenaryServiceAction.md` | `…Actions/StartMercenaryServiceAction.cs` | 30 |
| 5 | `GainRenownAction.md`（**修复项**） | `…Actions/GainRenownAction.cs` | 18 |

**已核实调用点 / 事件链：**
- **InitializeWorkshopAction**：唯一公开入口 `ApplyByNewGame`（`:7`）；调用点 `WorkshopsCampaignBehavior.cs:1274`。
  最易漏的副作用：`:10`-`:11` 给店主**重命名**（`NameGenerator` + `SetName`）。
- **MakeHeroFugitiveAction**：调用点 `Hero.cs:1630`、`Hero.cs:1640`、`ApplyHeirSelectionAction.cs:60`、`EndCaptivityAction.cs:53`。
- **SiegeAftermathAction**：事件链 `CampaignEvents.cs:379`（字段）/`:933`（公开事件）、
  `CampaignEventReceiver.cs:717`（虚方法）、`CampaignEventDispatcher.cs:1575`（派发）。
- **StartMercenaryServiceAction**：事件链 `CampaignEvents.cs:241`/`:799`、
  `CampaignEventReceiver.cs:1061`、`CampaignEventDispatcher.cs:2358`。
- **GainRenownAction**（修复项，现 848B / `tier=generated` / `stub`）：`Apply`（`:14`）；
  调用点 `CampaignCheats.cs:1478`、`IssuesCampaignBehavior.cs:400`、`CharacterCreationContent.cs:112`、
  `IncidentEffect.cs:356`、`ArmyNeedsSuppliesIssueBehavior.cs:359`/`:372`。
  **它是上一轮被列为 done 但从未真正交付的页**（深页版本只存在于
  `tools/_verify/lead6-w63-stagecheck/`，从未落到 `content/`）。

## 5. worker 单元划分（并发 ≤2，每批 ≤5 页，每页单独验收）
| 单元 | 页 | 备注 |
| --- | --- | --- |
| W-C | 1 · 2 · 3 | 三个 Action，各含一个私有实现 + 1–3 个公开入口 |
| W-D | 4 · 5 | 4 是 30 行含枚举；5 是修复项，需从 848B 重写到 >2500B |

## 6. 尺（派单方给定，不许自选）
```
node tools/_verify/lead-145zh-judge.mjs content/v1.4.5/zh/api/campaign-ext/<页>.md
```
**必须看到 `PASS` 才允许开始下一页。** 批收齐后跑批后门禁两套数：
```
node tools/audit-links.mjs 2>&1 | grep -E "BROKEN_LINKS|FILES_WITH_BROKEN"
node tools/nav-orphans.mjs --by-parent 2>&1 | grep -E "total_pages|orphans="
```
可选：`--cross-check` 拿真门禁对账 `J5R` 的解析副本（应报 `AGREE`）。
**链接门禁的正确命令是 `node tools/audit-links.mjs`；`tools/_linkcheck.mjs` 不存在。**

## 7. 回报格式
每页一段：
`页名 | judge=PASS | 引用条数 | 七节齐全=是 | 关键成员条数 | 真实示例行数 | 页内跨页链接数(政策要求=0)`
批尾两行：
```
audit-links: BROKEN_LINKS=? FILES_WITH_BROKEN=?
judge 两个口径: deep_pass=?/5 · tier=handwritten_deep=?/5
```

## 8. 纪律（本会话两次教训，写进 brief 免得重犯）
- **一次只做一页**：写一页 → 跑尺 → PASS → 下一页。**不要一次改五页再统一验。**
- 判「有没有产出」只看 **mtime + 尺的读数**，且**先看 worker 是否仍 `running`**；
  `settled` 是轮间状态，**不是停手信号**。不要因为一次 `ls` 没看到就判零产出。
- 不许写脚本生成 / 拼接 / 覆盖 `content/` 的正文。
