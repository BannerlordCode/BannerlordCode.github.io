---
title: "DefaultSettlementLoyaltyModel"
description: "忠诚度曲线的官方默认实现：21 个参数取值加 9 个私有累加器按固定顺序合成每日忠诚度变化，含税收增减与叛乱阈值。"
---

# DefaultSettlementLoyaltyModel

**命名空间：** `TaleWorlds.CampaignSystem.GameComponents`
**Type:** `public class DefaultSettlementLoyaltyModel : SettlementLoyaltyModel`
**Source:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementLoyaltyModel.cs`

## 概述

`DefaultSettlementLoyaltyModel` 是 `SettlementLoyaltyModel` 的官方默认实现，位于 `GameComponents` 命名空间。它把契约的 21 个抽象属性全部实现为常量返回值（例如 `MaximumLoyaltyInSettlement` 返回 100、`LoyaltyDriftMedium` 返回 50、`MilitiaBoostPercentage` 返回 200），并把 3 个抽象方法实现为具体算法。核心是 `CalculateLoyaltyChangeInternal`：它新建一个 `ExplainedNumber`，按固定顺序调用 9 个私有累加器往同一个数值上加项（食物、文化、政策、建筑、议题、安全、名人关系、总督 perk、漂移），最后若总督的当前聚落就是本城镇且结果为正，再叠加总督的 Honor 特性效果。两个 gold 方法用 `MBMath.Map` 把忠诚度线性映射为金币因子。4 个私有常量与 9 个 `TextObject` 字段为解释行提供文本，其中 4 个常量与 `GovernorText` 在文件内未被引用。

## 心智模型

这页最值钱的是**累加顺序**。`CalculateLoyaltyChangeInternal` 里 9 个私有累加器按固定顺序执行：食物断粮 → 所有者文化 → 王国政策 → 建筑项目 → 议题 → 安全 → 名人关系 → 总督 perk → 忠诚度漂移。每个累加器都往同一个 `ref ExplainedNumber` 上加项，顺序决定了城镇管理界面解释列表的排列。漂移项 `-0.1 × (忠诚度 − 50)` 是一条橡皮筋：忠诚度高于 50 时每日衰减、低于 50 时每日回升，所以「什么都不做」的城镇会缓慢滑向 50。9 项之后还有一步：总督的 Honor 特性只在结果为正且总督驻在本镇时叠加。典型调用顺序：战役每日结算 → `Town.LoyaltyChange` → `CalculateLoyaltyChange` → `CalculateLoyaltyChangeInternal` → 9 个累加器 → 返回。常见误用与坑：以为改了政策属性就能立刻看到变化（政策累加器读的是王国已激活政策列表，不是属性）；以为 4 个私有常量（452–461 行）参与了计算（累加器用的是字面量 `-1f`/`14f`/`0.5f`/`-0.5f`，常量是死代码）；忽略叛乱阈值随「高叛乱」选项在 15/50 与 25/60 之间切换；忘记漂移项永远生效，会把「忠诚度停在 50 附近」误当成 bug。

## 怎么用

### 怎么拿到它

和契约页一样走模型容器，不要直接 new：

```csharp
SettlementLoyaltyModel model = Campaign.Current.Models.SettlementLoyaltyModel;
// 运行时实际类型就是 DefaultSettlementLoyaltyModel（除非 Mod 替换了注册）
```

### 典型用法

1. **读每日变化**：`Campaign.Current.Models.SettlementLoyaltyModel.CalculateLoyaltyChange(town, false).ResultNumber`。
2. **读解释明细**：`CalculateLoyaltyChange(town, true)`，解释行文本来自 9 个 `TextObject` 字段与 perk/政策名。
3. **税收因子**：`DefaultSettlementTaxModel` 调用 `CalculateGoldGainDueToHighLoyalty`（忠诚度 75→100 映射为 0→+0.2）与 `CalculateGoldCutDueToLowLoyalty`（忠诚度 25→50 映射为 −0.5→0）。
4. **繁荣度联动**：`DefaultSettlementProsperityModel` 读 `ThresholdForProsperityBoost`(75)、`ThresholdForProsperityPenalty`(25) 与两个效果属性（+0.5 / −1）。
5. **民兵扩编**：`DefaultSettlementMilitiaModel` 把忠诚度 0→`RebelliousStateStartLoyaltyThreshold` 映射为 0→`MilitiaBoostPercentage`(200)。
6. **叛乱判定**：`RebellionsCampaignBehavior` 读三个叛乱阈值；城镇管理界面与聚落菜单用它们显示叛乱警告。

### 最容易踩的坑

1. **不要直接 new**：`GameModels` 用 `GetGameModel<SettlementLoyaltyModel>()` 注册默认实现，绕过注册会拿不到战役级单例。
2. **`ref ExplainedNumber` 是出参**：两个 gold 方法返回 `void`，结果写进调用方传入的实例。
3. **叛乱阈值是选项相关的**：`RebellionStartLoyaltyThreshold` 返回 15 或 50、`RebelliousStateStartLoyaltyThreshold` 返回 25 或 60，取决于 `Campaign.Current.Options.IsHighRebellionEnabled`。
4. **4 个私有常量是死代码**：`StarvationLoyaltyEffect`、`AdditionalStarvationLoyaltyEffectAfterDays`、`NotableSupportsOwnerLoyaltyEffect`、`NotableSupportsEnemyLoyaltyEffect` 声明后未被引用，累加器用的是字面量；读源码时别以为改常量能调平衡。
5. **`GovernorText` 未被引用**：485 行声明的总督解释文本在本文件里没有使用点。
6. **Honor 特性有前置条件**：只有总督的 `CurrentSettlement.Town` 就是本城镇且 `ResultNumber > 0` 时才叠加。
7. **漂移项永远生效**：`-0.1 × (忠诚度 − 50)` 没有任何开关，忠诚度 100 的城镇每天也会被拉低。

## 关键成员

- **HighLoyaltyProsperityEffect**（`DefaultSettlementLoyaltyModel.cs:20`）— 返回 0.5f；繁荣度模型在忠诚度超过 `ThresholdForProsperityBoost` 且食物变化为正时把它加进繁荣度变化。
- **LowLoyaltyProsperityEffect**（`DefaultSettlementLoyaltyModel.cs:30`）— 返回 -1；繁荣度模型在忠诚度低于等于 `ThresholdForProsperityPenalty` 时把它加进繁荣度变化。
- **ThresholdForTaxBoost**（`DefaultSettlementLoyaltyModel.cs:40`）— 返回 75；`CalculateGoldGainDueToHighLoyalty` 把忠诚度从它到 100 线性映射为 0 到 +0.2 的金币因子。
- **ThresholdForTaxCorruption**（`DefaultSettlementLoyaltyModel.cs:50`）— 返回 50；`CalculateGoldCutDueToLowLoyalty` 的映射上限，忠诚度高于它时腐败扣减为 0。
- **ThresholdForHigherTaxCorruption**（`DefaultSettlementLoyaltyModel.cs:60`）— 返回 25；腐败映射的下限，忠诚度低于它时扣减达到 −0.5 上限。
- **ThresholdForProsperityBoost**（`DefaultSettlementLoyaltyModel.cs:70`）— 返回 75；繁荣度加成的触发线。
- **ThresholdForProsperityPenalty**（`DefaultSettlementLoyaltyModel.cs:80`）— 返回 25；繁荣度惩罚的触发线。
- **AdditionalStarvationPenaltyStartDay**（`DefaultSettlementLoyaltyModel.cs:90`）— 返回 14；食物累加器用字面量 14f 与断粮天数比较，超过后惩罚从 −1 加重到 −2。
- **AdditionalStarvationLoyaltyEffect**（`DefaultSettlementLoyaltyModel.cs:100`）— 返回 -1；饥荒追加惩罚的值，与食物累加器里的字面量 `num += -1f` 对应。
- **RebellionStartLoyaltyThreshold**（`DefaultSettlementLoyaltyModel.cs:110`）— 高叛乱选项关闭时返回 15、开启时返回 50；叛乱行为与 UI 警告读它判断叛乱是否开始。
- **RebelliousStateStartLoyaltyThreshold**（`DefaultSettlementLoyaltyModel.cs:124`）— 关闭时返回 25、开启时返回 60；叛乱行为、民兵模型与多个界面 VM 读它判断城镇是否进入叛乱状态。
- **LoyaltyBoostAfterRebellionStartValue**（`DefaultSettlementLoyaltyModel.cs:138`）— 返回 5；叛乱行为把叛乱天数映射为忠诚度回升时用它作上限。
- **MilitiaBoostPercentage**（`DefaultSettlementLoyaltyModel.cs:148`）— 返回 200；民兵模型把忠诚度 0 到叛乱阈值映射为 0 到该值的扩编百分比。
- **ThresholdForNotableRelationBonus**（`DefaultSettlementLoyaltyModel.cs:158`）— 返回 75f；关系行为在聚落忠诚度高于它时触发名人关系每日加成。
- **DailyNotableRelationBonus**（`DefaultSettlementLoyaltyModel.cs:168`）— 返回 1；名人关系加成每天提供的关系点数。
- **SettlementLoyaltyChangeDueToSecurityThreshold**（`DefaultSettlementLoyaltyModel.cs:178`）— 返回 50；安全累加器的映射拐点。
- **MaximumLoyaltyInSettlement**（`DefaultSettlementLoyaltyModel.cs:188`）— 返回 100；高安全映射的终点坐标。
- **LoyaltyDriftMedium**（`DefaultSettlementLoyaltyModel.cs:198`）— 返回 50；漂移项把忠诚度往它拉。
- **HighSecurityLoyaltyEffect**（`DefaultSettlementLoyaltyModel.cs:208`）— 返回 1f；安全值从 50 到 100 时映射到的最大日增益。
- **LowSecurityLoyaltyEffect**（`DefaultSettlementLoyaltyModel.cs:218`）— 返回 -2f；安全值从 0 到 50 时映射到的最大日惩罚。
- **SettlementOwnerDifferentCultureLoyaltyEffect**（`DefaultSettlementLoyaltyModel.cs:228`）— 返回 -3f；所有者氏族文化与聚落文化不同时每日扣 3 点忠诚度。
- **CalculateLoyaltyChange**（`DefaultSettlementLoyaltyModel.cs:237`）— 公开入口，直接委托给 `CalculateLoyaltyChangeInternal` 并返回其结果。
- **CalculateGoldGainDueToHighLoyalty**（`DefaultSettlementLoyaltyModel.cs:243`）— 用 `MBMath.Map` 把忠诚度 75→100 映射为 0→0.2 的因子，`AddFactor` 进调用方的 `ExplainedNumber`，解释文本用 `LoyaltyText`。
- **CalculateGoldCutDueToLowLoyalty**（`DefaultSettlementLoyaltyModel.cs:250`）— 用 `MBMath.Map` 把忠诚度 25→50 映射为 −0.5→0 的因子，解释文本用 `CorruptionText`。
- **CalculateLoyaltyChangeInternal**（`DefaultSettlementLoyaltyModel.cs:257`）— 总装：新建 `ExplainedNumber(0f, includeDescriptions, null)`，按固定顺序调 9 个累加器，最后在本镇总督且结果为正时叠加 Honor 特性效果。
- **GetSettlementLoyaltyChangeDueToGovernorPerks**（`DefaultSettlementLoyaltyModel.cs:281`）— 通过 `PerkHelper.AddPerkBonusForTown` 加 5 个总督 perk（HeroicLeader、PhysicianOfPeople、Durable、Discipline、WellStraped），再扫描聚落内本方队伍与无队伍英雄的 Charm.Parade perk 累加。
- **GetSettlementLoyaltyChangeDueToNotableRelations**（`DefaultSettlementLoyaltyModel.cs:325`）— 遍历聚落名人：支持所有者氏族的每人 +0.5、支持交战氏族的每人 −0.5，总和约等于 0 时跳过不加项。
- **GetSettlementLoyaltyChangeDueToOwnerCulture**（`DefaultSettlementLoyaltyModel.cs:349`）— 所有者氏族文化与聚落文化不同时加 −3f，解释文本用 `CultureText`。
- **GetSettlementLoyaltyChangeDueToPolicies**（`DefaultSettlementLoyaltyModel.cs:358`）— 读王国已激活政策列表：Citizenship 按文化匹配加 ±0.5、HuntingRights −0.2、GrazingRights +0.5、TrialByJury +0.5、ImperialTowns 按是否统治氏族加 +1/−0.3（仅城镇）、ForgivenessOfDebts +2、TribunesOfThePeople +1（仅城镇）、DebasementOfTheCurrency −1。
- **GetSettlementLoyaltyChangeDueToFoodStocks**（`DefaultSettlementLoyaltyModel.cs:413`）— 聚落断粮时加 −1f，断粮天数超过 14 天再加 −1f，解释文本用 `StarvingText`。
- **GetSettlementLoyaltyChangeDueToSecurity**（`DefaultSettlementLoyaltyModel.cs:427`）— 安全值高于 50 时从 0 映射到 +1f、低于 50 时从 −2f 映射到 0，解释文本用 `SecurityText`。
- **GetSettlementLoyaltyChangeDueToProjects**（`DefaultSettlementLoyaltyModel.cs:434`）— 委托 `town.AddEffectOfBuildings(BuildingEffectEnum.Loyalty, ...)` 把建筑忠诚度效果加进同一数值。
- **GetSettlementLoyaltyChangeDueToIssues**（`DefaultSettlementLoyaltyModel.cs:440`）— 委托 `IssueModel.GetIssueEffectsOfSettlement(DefaultIssueEffects.SettlementLoyalty, ...)` 把议题效果加进同一数值。
- **GetSettlementLoyaltyChangeDueToLoyaltyDrift**（`DefaultSettlementLoyaltyModel.cs:446`）— 加 `-0.1f × (忠诚度 − 50)`，把忠诚度往 50 拉，解释文本用 `LoyaltyDriftText`。
- **StarvationLoyaltyEffect**（`DefaultSettlementLoyaltyModel.cs:452`）— 私有常量 −1f；声明后未被引用，食物累加器用的是字面量。
- **AdditionalStarvationLoyaltyEffectAfterDays**（`DefaultSettlementLoyaltyModel.cs:455`）— 私有常量 14；同样未被引用，累加器用字面量 14f。
- **NotableSupportsOwnerLoyaltyEffect**（`DefaultSettlementLoyaltyModel.cs:458`）— 私有常量 0.5f；名人累加器用字面量 0.5f 而非本常量。
- **NotableSupportsEnemyLoyaltyEffect**（`DefaultSettlementLoyaltyModel.cs:461`）— 私有常量 −0.5f；同上，累加器用字面量。
- **StarvingText**（`DefaultSettlementLoyaltyModel.cs:464`）— 饥荒加项的解释行文本，`GameTexts.FindText("str_starving", null)`。
- **CultureText**（`DefaultSettlementLoyaltyModel.cs:467`）— 文化差异加项的解释行文本。
- **NotableText**（`DefaultSettlementLoyaltyModel.cs:470`）— 名人关系加项的解释行文本。
- **SecurityText**（`DefaultSettlementLoyaltyModel.cs:473`）— 安全加项的解释行文本。
- **LoyaltyText**（`DefaultSettlementLoyaltyModel.cs:476`）— 高忠诚度税收加成的解释行文本。
- **LoyaltyDriftText**（`DefaultSettlementLoyaltyModel.cs:479`）— 漂移加项的解释行文本。
- **CorruptionText**（`DefaultSettlementLoyaltyModel.cs:482`）— 低忠诚度腐败扣减的解释行文本。
- **GovernorText**（`DefaultSettlementLoyaltyModel.cs:485`）— 总督解释文本；声明后在本文件内没有被引用。

## 真实示例

```csharp
// 每日忠诚度变化（Town.LoyaltyChange 的实际实现路径）
Town town = Settlement.CurrentSettlement.Town;
float change = Campaign.Current.Models.SettlementLoyaltyModel
    .CalculateLoyaltyChange(town, false).ResultNumber;

// 带解释行：城镇管理界面忠诚度明细的数据源
ExplainedNumber explanation = Campaign.Current.Models.SettlementLoyaltyModel
    .CalculateLoyaltyChange(town, true);

// 高忠诚度税收加成：DefaultSettlementTaxModel 的调用方式
ExplainedNumber gold = new ExplainedNumber(0f, false, null);
Campaign.Current.Models.SettlementLoyaltyModel
    .CalculateGoldGainDueToHighLoyalty(town, ref gold);

// 叛乱状态判定：忠诚度低于阈值即进入叛乱状态
bool inRebelliousState = town.Loyalty <= Campaign.Current.Models.SettlementLoyaltyModel
    .RebelliousStateStartLoyaltyThreshold;
```

## 参见

- ↔ [SettlementLoyaltyModel](../SettlementLoyaltyModel) — 它实现的抽象契约：21 个参数属性与 3 个方法签名
- ↔ [DefaultSettlementProsperityModel](../DefaultSettlementProsperityModel) — 相邻曲线：本页的繁荣度阈值与效果属性由它读取
- ↔ [PerkHelper](../../core-extra/PerkHelper) — 总督 perk 累加器通过 `PerkHelper.AddPerkBonusForTown` 读取 perk 效果
- ↔ [FeatHelper](../../core-extra/FeatHelper) — 文化特性语境：`SettlementOwnerDifferentCultureLoyaltyEffect` 相邻的文化差异判定

## 导航

- ↑ [API 参考](../../) —— 本版本 API 层入口：按任务找页的路径表
- ↑ [v1.5.3 首页](../../../) —— 19 个桶的完整缺口表与覆盖现状
- ↔ [模块地图](../../../architecture/module-map) —— 确认某个类型属于哪一桶
