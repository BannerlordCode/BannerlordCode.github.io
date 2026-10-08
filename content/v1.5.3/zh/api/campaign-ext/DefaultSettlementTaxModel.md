---
title: "DefaultSettlementTaxModel"
description: "官方默认的城镇/村庄税收实现，税率与佣金按治安折算，并把各项修正累加进 ExplainedNumber"
---

# DefaultSettlementTaxModel

**命名空间：** `TaleWorlds.CampaignSystem.GameComponents`
**Type:** `public class DefaultSettlementTaxModel : SettlementTaxModel`
**Source:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementTaxModel.cs`

## 概述

它是官方默认的税收实现，被城镇与村庄的每日结算阶段调用，负责把繁荣度这个税基换算成当天真正进入金库的第纳尔。它并不是一条孤立公式，而是税收联动链的中枢：城镇的治安决定税收是否拿到高治安加成、或被低治安腐败削减；忠诚决定税收是否拿到高忠诚红利、被低忠诚打折，甚至在极低忠诚时直接乘上 -1 的因子把结果压向零；王国的政策与城镇的建筑分别贡献百分比折算与固定值修正。所有修正最终都汇总进同一个 ExplainedNumber，因此打开说明开关后，城镇界面可以逐项列出每一处加减的来源。要记住它同时承担两种角色：既是读模型（对外暴露税率、佣金率与治安阈值），也是算模型（真正产出当日税收数字）。它位于 `TaleWorlds.CampaignSystem.GameComponents`，覆写它就是在替换整套税收规则。

## 心智模型

把 `CalculateTownTax`（92）当作城镇侧唯一入口：它先建一个空的 ExplainedNumber，然后交给 `CalculateDailyTaxInternal`（115）做编排。编排顺序本身就是规则，读 92–238 行时要按顺序记：第一步 `CalculateDailyTax`（100）算出基础税基——繁荣度乘以 0.35，若王国生效 CouncilOfTheCommons 再乘 0.95，并用 `ProsperityText`（233）把这一行记入结果；第二步 `CalculatePolicyGoldCut`（189）扣政策钱，注意它吃的是「加政策之前的原始税收」rawTax，城镇侧的 Magistrates / Bailiffs / TribunesOfThePeople 各扣 5%，任意聚落只要生效 Cantons 就扣 10%，所以这些减免是绝对额，不会被后面的忠诚、治安百分比再缩放；第三步是特长，QuickDraw 与 DesertBorn 走城镇特长判定，总督存在时 Logistician 与 PriceOfLoyalty 才生效；第四步 `town.IsTown` 时套用库赛特文化特性 KhuzaitDecreasedTaxFeat；第五步 `GetSettlementTaxChangeDueToIssues`（217）把任务效果并进来；然后才是 `CalculateSettlementTaxDueToSecurity`（147）与 `CalculateSettlementTaxDueToLoyalty`（162），最后 `CalculateSettlementTaxDueToBuildings`（182），并以 `result.Clamp(0f, float.MaxValue)` 收尾，所以理论上为负的税收会被夹到 0。村庄侧完全是另一条链：`CalculateVillageTaxFromIncome`（223）只做 `(int)(marketIncome * GetVillageTaxRatio(village))`，不经过治安、忠诚、特长与建筑。比例层面还有一处容易漏读：`GetTownTaxRatio`（58）把 0.7 的佣金率再乘上 CrownDuty 的 1.05，而 `GetTownCommissionChangeBasedOnSecurity`（80）在治安低于 75 时用 MBMath.Map 把缺口映射成 10..0 的百分比并从佣金上扣掉。常见误用是以为税率属性是唯一变量——实际上治安阈值、佣金折算、政策系数、忠诚分段都在改同一个结果，只改一个属性得不到你想要的曲线。

## 怎么用

### 怎么拿到它

通过 Campaign 的 GameModels 聚合取到：`Campaign.Current.Models.SettlementTaxModel`。不要在 mod 里自己 new 一个默认实现，那会绕开王国的政策、治安与忠诚修正，得到一份「假的」税收数字。要替换整套规则，就继承契约类型并注册进 GameModels；只想微调时，优先在拿到结果之后对 ExplainedNumber 做增减，而不是复制一遍默认算法。

### 典型用法

- 城镇每日结算：用 `CalculateTownTax(town, false)` 拿当天税收，第二个参数关闭说明以省掉文本查找。
- 村庄结算：用 `CalculateVillageTaxFromIncome(village, marketIncome)`，它只认市场收入与村庄比例。
- 界面展示：用 `CalculateTownTax(town, true)`，说明开启后 ExplainedNumber 的明细行会带上繁荣度、政策名与极低忠诚等标签，可直接渲染。
- 平衡预估：先用 `GetTownTaxRatio(town)` 和 `GetTownCommissionChangeBasedOnSecurity(town, commission)` 做无损推演，不要靠反复真跑结算来试数值。
- 排查负税收：当城镇忠诚低于忠诚模型的腐败阈值时，结果会叠加 `VeryLowLoyalty`（236）标记的 -1 因子，最后被 Clamp 到 0，此时该查忠诚链而不是税收链。

### 最容易踩的坑

- 把 `SettlementCommissionRateTown`（19）当成最终税率；它还要经过 `GetTownTaxRatio`（58）的政策系数与治安折算才是有效佣金。
- 忽略 `CalculatePolicyGoldCut`（189）用的是加政策前的原始税收，因此政策减免是绝对额，后续百分比不会再次放大或缩小它。
- 忽略 `CalculateDailyTaxInternal`（115）里文化特性只在 `town.IsTown` 时应用，村庄入口完全不经过这条链。
- 忽略忠诚侧的三段分支：达到加成阈值就加钱，落在腐败区间就打折，低于更高腐败阈值则直接 -1 因子。
- 忽略 `CalculateVillageTaxFromIncome`（223）返回 int 且市场收入为 0 时提前返回 0，别在调用处再乘一次比例。

## 关键成员

- **DefaultSettlementTaxModel**（`DefaultSettlementTaxModel.cs:15`）— 类型声明本身；继承 `SettlementTaxModel` 后注册进 GameModels 即成为全局税收规则，覆写它就是替换整套税收算法的入口。
- **SettlementCommissionRateTown**（`DefaultSettlementTaxModel.cs:19`）— 城镇基础佣金率 0.7，是所有城镇税收比例的乘数起点，它本身不等于最终税率。
- **SettlementCommissionRateVillage**（`DefaultSettlementTaxModel.cs:29`）— 村庄基础佣金率 1.0，即村庄默认按市场收入全额计税，政策只在比例方法里对它打折。
- **SettlementCommissionDecreaseSecurityThreshold**（`DefaultSettlementTaxModel.cs:39`）— 治安阈值 75；治安低于它才开始按缺口削减佣金，达到或高于它时治安不再惩罚税收。
- **MaximumDecreaseBasedOnSecuritySecurity**（`DefaultSettlementTaxModel.cs:49`）— 治安惩罚上限 10，表示治安掉到 0 时最多削减 10% 的佣金，是 MBMath.Map 的映射上界。
- **GetTownTaxRatio(Town town)**（`DefaultSettlementTaxModel.cs:58`）— 把 0.7 的城镇佣金率乘以政策系数：王国生效 CrownDuty 时再加 5%，无王国或无该政策时保持原值。
- **GetVillageTaxRatio(Village village)**（`DefaultSettlementTaxModel.cs:69`）— 返回村庄佣金率，LandGrantsForVeteran 生效时按 5% 自乘削减，属于相对折扣而非绝对减法。
- **GetTownCommissionChangeBasedOnSecurity(Town town, float commission)**（`DefaultSettlementTaxModel.cs:80`）— 治安低于阈值时把缺口映射成 10..0 的百分比再从传入佣金上扣掉；治安达标则原样返回，调用方通常传入已乘过政策系数的佣金。
- **CalculateTownTax(Town town, bool includeDescriptions = false)**（`DefaultSettlementTaxModel.cs:92`）— 城镇侧唯一公开入口，新建 ExplainedNumber 后交给内部编排填充，includeDescriptions 决定修正说明是否保留。
- **CalculateDailyTax(Town town, ref ExplainedNumber explainedNumber)**（`DefaultSettlementTaxModel.cs:100`）— 算出基础税基：繁荣度乘 0.35，CouncilOfTheCommons 生效时再乘 0.95，并以 ProsperityText 记入结果，返回累加后的数字供政策折算使用。
- **CalculateDailyTaxInternal(Town town, ref ExplainedNumber result)**（`DefaultSettlementTaxModel.cs:115`）— 真正的编排者，按基础税、政策绝对减免、城镇与总督特长、库赛特文化特性、任务效果、治安、忠诚、建筑、Clamp 的顺序逐项累加，顺序本身就是规则。
- **CalculateSettlementTaxDueToSecurity(Town town, ref ExplainedNumber explainedNumber)**（`DefaultSettlementTaxModel.cs:147`）— 从治安模型读阈值：治安达标时索取高治安金币加成，落在腐败区间时索取低治安金币削减。
- **CalculateSettlementTaxDueToLoyalty(Town town, ref ExplainedNumber explainedNumber)**（`DefaultSettlementTaxModel.cs:162`）— 与忠诚模型联动：高忠诚加钱、腐败区间打折，低于更高腐败阈值时直接写入 -1 因子把税收压向零。
- **CalculateSettlementTaxDueToBuildings(Town town, ref ExplainedNumber result)**（`DefaultSettlementTaxModel.cs:182`）— 把城镇建筑的 TaxPerDay 与 DenarByBoundVillageHeartPerDay 两种效果写进结果，建筑收益由此进入税收。
- **CalculatePolicyGoldCut(Town town, float rawTax, ref ExplainedNumber explainedNumber)**（`DefaultSettlementTaxModel.cs:189`）— 按王国政策扣钱：城镇侧的 Magistrates、Bailiffs、TribunesOfThePeople 各扣原始税收的 5%，任意聚落的 Cantons 扣 10%。
- **GetSettlementTaxChangeDueToIssues(Town center, ref ExplainedNumber result)**（`DefaultSettlementTaxModel.cs:217`）— 向任务模型索取 SettlementTax 类别的效果，让事件与任务对税收的加减进入同一份结果。
- **CalculateVillageTaxFromIncome(Village village, int marketIncome)**（`DefaultSettlementTaxModel.cs:223`）— 村庄侧公开入口；市场收入为 0 直接返回 0，否则按市场收入乘村庄比例后取整，因此村庄税收不含治安与忠诚链。
- **ProsperityText**（`DefaultSettlementTaxModel.cs:233`）— 缓存 `str_prosperity` 文本对象，作为基础税收那一行的说明来源，避免每次结算重复查找文本。
- **VeryLowLoyalty**（`DefaultSettlementTaxModel.cs:236`）— 静态文本标签，仅在忠诚低于腐败阈值时作为 -1 因子的说明出现。

## 真实示例

```csharp
// 每日结算：读取当前城镇与附属村庄的税收，并检查修正明细
Campaign campaign = Campaign.Current;
Town town = Settlement.CurrentSettlement.Town;
SettlementTaxModel taxModel = campaign.Models.SettlementTaxModel;

ExplainedNumber explained = taxModel.CalculateTownTax(town, true);
float todayTax = explained.ResultNumber;

float baseRatio = taxModel.GetTownTaxRatio(town);
float effectiveCommission = taxModel.GetTownCommissionChangeBasedOnSecurity(town, baseRatio);

Village village = town.BoundVillages[0].Settlement.Village;
int marketIncome = 500;
int villageTax = taxModel.CalculateVillageTaxFromIncome(village, marketIncome);

int storedToday = (int)todayTax + villageTax;
```

## 参见

- ↔ [SettlementTaxModel](../SettlementTaxModel) — 它实现的契约（本批，先放着）
- ↔ [DefaultSettlementSecurityModel](../DefaultSettlementSecurityModel) — 治安模型：佣金随治安折算
- ↔ [DefaultSettlementLoyaltyModel](../DefaultSettlementLoyaltyModel) — 忠诚度模型：税收阈值与忠诚联动
- ↔ [TownHelpers](../../core-extra/TownHelpers) — 城镇侧工具页

## 导航

- ↑ [API 参考](../../) —— 本版本 API 层入口：按任务找页的路径表
- ↑ [v1.5.3 首页](../../../) —— 19 个桶的完整缺口表与覆盖现状
- ↔ [模块地图](../../../architecture/module-map) —— 确认某个类型属于哪一桶
