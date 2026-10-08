---
title: "DefaultSettlementSecurityModel"
description: "聚落治安模型的默认实现：原版数值（上限 100、漂移目标 50、税收三阈值 0/50/75）与完整的每日治安变化计算逻辑，包含藏身处、围城、繁荣、驻军、政策、perk 等全部修正项。"
---
# DefaultSettlementSecurityModel

**命名空间：** `TaleWorlds.CampaignSystem.GameComponents`
**模块：** `TaleWorlds.CampaignSystem`
**类型：** `public class DefaultSettlementSecurityModel : SettlementSecurityModel`
**基类：** `SettlementSecurityModel`
**源文件：** `bannerlord-1.4.7/TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementSecurityModel.cs`（声明见第 20 行）

## 概述

`DefaultSettlementSecurityModel` 是 `SettlementSecurityModel` 契约的原版实现。它定义了游戏默认的治安经济参数——城镇治安上限 100、漂移回归目标 50、税收三阈值 0/50/75、藏身处清空增益 +6、地图事件半径 50——并通过 `CalculateSecurityChange` 方法将这些参数组合成每日治安变化的完整计算。计算涵盖藏身处侵扰、围城状态、繁荣度、驻军战力、政策修正、perk 加成、issue 效果、建筑效果、巡逻队加成和治安漂移回归。

## 心智模型

**算法结构**：`CalculateSecurityChange` 是契约入口，按固定顺序调用十三个 private 累加器方法，每个方法向同一个 `ExplainedNumber` 添加一项修正。计算顺序为：藏身处侵扰 → 被劫村庄 → 围城 → 繁荣度 → 驻军 → 政策 → 总督 → 项目 → issue → perk → 治安漂移 → 建筑安全加成 → 巡逻队加成。最终返回的 `ExplainedNumber.ResultNumber` 就是城镇的每日治安变化量。

**数值设计**：七个常量属性（`MaximumSecurityInSettlement`=100、`SecurityDriftMedium`=50、`MapEventSecurityEffectRadius`=50、`HideoutClearedSecurityEffectRadius`=100、`HideoutClearedSecurityGain`=6、`ThresholdForTaxCorruption`=50、`ThresholdForTaxBoost`=75）是治安经济的基础参数。它们被 `Town` 类直接读取用于税收计算和 UI 显示，也被 `TownSecurityCampaignBehavior` 用于事件影响半径筛选。

**修正层级**：计算按固定顺序叠加修正——负面项（藏身处、围城、繁荣）先加，正面项（驻军、政策、perk）后加，最后是漂移回归。理解这个顺序对 mod 覆写至关重要：后注册的修正会叠加在先注册的之上。`ExplainedNumber` 的 `Add` 方法接受一个 `TextObject` 描述参数，传 `null` 表示不显示来源；UI 调用时 `includeDescriptions=true` 会填充这些文本。

## 怎么用

**继承与覆写**：
- 只调数值：覆写七个常量属性，保留 `CalculateSecurityChange` 默认实现。
- 改算法：覆写 `CalculateSecurityChange`，可选择调用 `base` 后追加修正，或完全重写。
- 注册：`gameStarter.AddModel<SettlementSecurityModel>(new DefaultSettlementSecurityModel())` 是原版注册方式（`SandBoxManager.cs:297`）。mod 替换时改为注册自己的实例。

**真实坑**：
- **围城状态分支**：`CalculateUnderSiegeEffectsOnSecurity` 在围城时直接添加 -3 修正。覆写时需保留此分支逻辑，否则围城不再影响治安。
- **繁荣度惩罚上限**：`CalculateProsperityEffectOnSecurity` 使用 `MathF.Max(-5f, -0.0005f * town.Prosperity)` 限制最大惩罚为 -5。覆写时若去掉上限，高繁荣城镇会遭受不成比例的治安惩罚。
- **ExplainedNumber 累加器**：`Add` 方法的第二个参数是描述文本 key。传 `null` 表示不显示来源。UI 调用时 `includeDescriptions=true` 会填充这些文本。
- **issue 效果**：`CalculateIssueEffectsOnSecurity` 通过 `IssueModel` 查询聚落相关的 issue 效果。自定义 issue 需正确注册 `DefaultIssueEffects.SettlementSecurity` 才能生效。

**使用点**（真实调用方）：
- `SandBoxManager.cs:297` — 原版注册 `AddModel<SettlementSecurityModel>(new DefaultSettlementSecurityModel())`
- `Town.cs:275` — `SecurityChange` 属性调用 `CalculateSecurityChange(this, false).ResultNumber`
- `Town.cs:285` — `SecurityChangeExplanation` 属性调用 `CalculateSecurityChange(this, true)`
- `Town.cs:798` — `Town.DailyTick` 执行 `this.Security += this.SecurityChange`
- `TownSecurityCampaignBehavior.cs:27` — 藏身处被清空时，对半径内城镇 `Security += HideoutClearedSecurityGain`
- `TownSecurityCampaignBehavior.cs:39` — 野外战斗结束时，用 `MapEventSecurityEffectRadius` 筛选受影响城镇
- `TownSecurityCampaignBehavior.cs:49` — 战斗中有平民方被劫时，`Security += GetLootedNearbyPartySecurityEffect(town, 败方总强度)`
- `TownSecurityCampaignBehavior.cs:62` — 匪帮被击败时，`Security += GetNearbyBanditPartyDefeatedSecurityEffect(town, 败方总强度)`
- `CharacterRelationCampaignBehavior.cs:402` / `CharacterRelationCampaignBehavior.cs:411` — 治安 ≥ `ThresholdForNotableRelationBonus` 时，城镇 notable 每天 `+DailyNotableRelationBonus` 关系
- `CharacterRelationCampaignBehavior.cs:418` / `CharacterRelationCampaignBehavior.cs:426` / `CharacterRelationCampaignBehavior.cs:427` — 治安 ≥ `ThresholdForNotableRelationPenalty` 时，notable 每天 `-DailyNotableRelationPenalty` 关系并 `-DailyNotablePowerPenalty` 战力
- `CharacterRelationCampaignBehavior.cs:437` — 治安达标时 notable 每天 `+DailyNotablePowerBonus` 战力
- `DefaultSettlementTaxModel.cs:153` / `DefaultSettlementTaxModel.cs:156` / `DefaultSettlementTaxModel.cs:159` / `DefaultSettlementTaxModel.cs:161` — 税收模型按 `ThresholdForTaxBoost` / `ThresholdForHigherTaxCorruption` / `ThresholdForTaxCorruption` 分档，调用两个税收修正方法
- `GameModels.cs:309` / `GameModels.cs:692` — `SettlementSecurityModel` 属性与 `GetGameModel<SettlementSecurityModel>()` 注册点

## 关键成员

| 成员 | 用途 |
| --- | --- |
| `int MaximumSecurityInSettlement { get; }` | 返回 100。城镇治安的硬上限。`Town.cs:350` 在 setter 中硬编码钳制，不读本属性。`DefaultSettlementSecurityModel.cs:24` |
| `int SecurityDriftMedium { get; }` | 返回 50。治安漂移回归目标。`CalculateSecurityDrift` 用它把治安往 50 拉。`DefaultSettlementSecurityModel.cs:34` |
| `float MapEventSecurityEffectRadius { get; }` | 返回 50。野外战斗影响半径。`TownSecurityCampaignBehavior.cs:39` 用它筛选受影响城镇。`DefaultSettlementSecurityModel.cs:44` |
| `float HideoutClearedSecurityEffectRadius { get; }` | 返回 100。藏身处清空影响半径。`TownSecurityCampaignBehavior.cs:27` 用它筛选受益城镇。`DefaultSettlementSecurityModel.cs:54` |
| `int HideoutClearedSecurityGain { get; }` | 返回 6。藏身处清空时给半径内城镇的即时治安增量。`DefaultSettlementSecurityModel.cs:64` |
| `int ThresholdForTaxCorruption { get; }` | 返回 50。税收惩罚档上界：治安低于它时走 `CalculateGoldCutDueToLowSecurity`。`DefaultSettlementSecurityModel.cs:74` |
| `int ThresholdForHigherTaxCorruption { get; }` | 返回 0。税收重罚档下界。与上一阈值配合把重罚区间压成空集。`DefaultSettlementSecurityModel.cs:84` |
| `int ThresholdForTaxBoost { get; }` | 返回 75。税收加成档下界：治安 ≥ 它时走 `CalculateGoldGainDueToHighSecurity`。`DefaultSettlementSecurityModel.cs:94` |
| `int SettlementTaxBoostPercentage { get; }` | 返回 5。高治安税收加成的最大百分比。`DefaultSettlementSecurityModel.cs:104` |
| `int SettlementTaxPenaltyPercentage { get; }` | 返回 10。低治安税收惩罚的最大百分比。`DefaultSettlementSecurityModel.cs:114` |
| `int ThresholdForNotableRelationBonus { get; }` | 返回 75。治安 ≥ 它时，城镇 notable 每天获得关系加成。`DefaultSettlementSecurityModel.cs:124` |
| `int ThresholdForNotableRelationPenalty { get; }` | 返回 50。治安 ≥ 它时，城镇 notable 每天受到关系/战力惩罚。`DefaultSettlementSecurityModel.cs:134` |
| `int DailyNotableRelationBonus { get; }` | 返回 1。高治安时 notable 的每日关系增量。`DefaultSettlementSecurityModel.cs:144` |
| `int DailyNotableRelationPenalty { get; }` | 返回 -1。高治安时 notable 的每日关系扣减。`DefaultSettlementSecurityModel.cs:154` |
| `int DailyNotablePowerBonus { get; }` | 返回 1。高治安时 notable 的每日战力增量。`DefaultSettlementSecurityModel.cs:164` |
| `int DailyNotablePowerPenalty { get; }` | 返回 -1。高治安时 notable 的每日战力扣减。`DefaultSettlementSecurityModel.cs:174` |
| `ExplainedNumber CalculateSecurityChange(Town town, bool includeDescriptions = false)` | 契约入口。按固定顺序调用十三个 private 累加器方法，返回城镇的每日治安变化量。`DefaultSettlementSecurityModel.cs:183` |
| `void CalculateProsperityEffectOnSecurity(Town town, ref ExplainedNumber explainedNumber)` | private。繁荣度惩罚：添加 `MathF.Max(-5f, -0.0005f * town.Prosperity)`，即每 2000 繁荣度 -1 治安，最多 -5。`DefaultSettlementSecurityModel.cs:225` |
| `void CalculateUnderSiegeEffectsOnSecurity(Town town, ref ExplainedNumber explainedNumber)` | private。围城惩罚：若 `town.Settlement.IsUnderSiege` 为 true，添加 -3 修正。`DefaultSettlementSecurityModel.cs:231` |
| `void CalculateRaidedVillageEffectsOnSecurity(Town town, ref ExplainedNumber explainedNumber)` | private。被劫村庄惩罚：遍历 `town.Settlement.BoundVillages`，若任一村庄状态为 `Looted`，添加 -2 修正。`DefaultSettlementSecurityModel.cs:240` |
| `void CalculateInfestedHideoutEffectsOnSecurity(Town town, ref ExplainedNumber explainedNumber)` | private。藏身处侵扰惩罚：若城镇附近有 `IsInfested` 的藏身处（距离 < 平均匪帮速度 × 12 小时），添加 -2 修正。`DefaultSettlementSecurityModel.cs:258` |
| `void CalculateSecurityDrift(Town town, ref ExplainedNumber explainedNumber)` | private。治安漂移回归：添加 `-(town.Security - SecurityDriftMedium) / 15`，把治安往 50 拉。`DefaultSettlementSecurityModel.cs:272` |
| `void CalculatePolicyEffectsOnSecurity(Town town, ref ExplainedNumber explainedNumber)` | private。政策修正：检查王国激活的政策，为城镇添加正面修正（Bailiffs/Serfdom/Magistrates 各 +1）或负面修正（TrialByJury -0.2）。`DefaultSettlementSecurityModel.cs:278` |
| `void CalculateGarrisonEffectsOnSecurity(Town town, ref ExplainedNumber result)` | private。驻军战力加成：计算驻军总战力、弓手战力、骑兵战力，按 `StandUnited` perk 系数加成，再按 `Leadership.Authority`、`Riding.ReliefForce`、`Bow.MountedArchery` 等 perk 追加修正。`DefaultSettlementSecurityModel.cs:311` |
| `void CalculatePerkEffectsOnSecurity(Town town, ref ExplainedNumber result)` | private。perk 修正：统计城镇中带有 `Leadership.Presence` perk 的友方队伍数量，按 `PrimaryBonus` 加成；再检查总督的 `Roguery.KnowHow` perk 和城镇的 `ToBeBlunt`/`Focus`/`Skewer`/`Gensdarmes` perk。`DefaultSettlementSecurityModel.cs:385` |
| `void CalculateIssueEffectsOnSecurity(Town town, ref ExplainedNumber explainedNumber)` | private。issue 效果：通过 `IssueModel.GetIssueEffectsOfSettlement` 查询 `DefaultIssueEffects.SettlementSecurity` 效果并累加。`DefaultSettlementSecurityModel.cs:417` |
| `void CalculateSettlementProjectSecurityBonuses(Town town, ref ExplainedNumber result)` | private。建筑安全加成：调用 `town.AddEffectOfBuildings(BuildingEffectEnum.SecurityPerDay, ref result)` 累加所有建筑的安全效果。`DefaultSettlementSecurityModel.cs:219` |
| `void CalculateSettlementPatrolPartiesBonuses(Town town, ref ExplainedNumber result)` | private。巡逻队加成：若城镇有巡逻队且建有哨站（`SettlementGuardHouse`），按哨站等级添加 `level * 0.5 + 0.5` 修正。`DefaultSettlementSecurityModel.cs:203` |
| `float GetLootedNearbyPartySecurityEffect(Town town, float sumOfAttackedPartyStrengths)` | 附近队伍被劫时对城镇治安的**负向**即时影响，返回 `-0.005 × 强度`。`DefaultSettlementSecurityModel.cs:423` |
| `float GetNearbyBanditPartyDefeatedSecurityEffect(Town town, float sumOfAttackedPartyStrengths)` | 附近匪帮被击败时对城镇治安的**正向**即时影响，返回 `+0.005 × 强度`。`DefaultSettlementSecurityModel.cs:429` |
| `void CalculateGoldGainDueToHighSecurity(Town town, ref ExplainedNumber explainedNumber)` | 高治安税收加成：把治安从 `ThresholdForTaxBoost` 到上限映射到 [0, `SettlementTaxBoostPercentage`] 的因子，加进税收 `ExplainedNumber`。`DefaultSettlementSecurityModel.cs:435` |
| `void CalculateGoldCutDueToLowSecurity(Town town, ref ExplainedNumber explainedNumber)` | 低治安税收惩罚：把治安从 `ThresholdForHigherTaxCorruption` 到 `ThresholdForTaxCorruption` 映射到 [`SettlementTaxPenaltyPercentage`, 0] 的负因子。`DefaultSettlementSecurityModel.cs:442` |

## 真实示例

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.GameComponents;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Core;

public class HardcoreSecurityModel : DefaultSettlementSecurityModel
{
    public override int MaximumSecurityInSettlement => 120;
    public override int ThresholdForTaxBoost => 60;
    public override int HideoutClearedSecurityGain => 10;

    public override ExplainedNumber CalculateSecurityChange(
        Town town, bool includeDescriptions = false)
    {
        ExplainedNumber baseResult = base.CalculateSecurityChange(
            town, includeDescriptions);
        // 围城时额外 -5 治安
        if (town.IsUnderSiege)
        {
            baseResult.Add(-5f, null, null);
        }
        return baseResult;
    }

    public override float GetNearbyBanditPartyDefeatedSecurityEffect(
        Town town, float sumOfAttackedPartyStrengths)
        => sumOfAttackedPartyStrengths * 0.01f;
}
```

## 参见

- ↔ 契约：[SettlementSecurityModel](../SettlementSecurityModel)
- ↔ 同桶模型：[SettlementFoodModel](../SettlementFoodModel) · [SettlementMilitiaModel](../SettlementMilitiaModel)
- ↔ 基类机制：[MBObjectBase](../MBObjectBase) · [MBObjectManager](../MBObjectManager)
- ↔ 战役入口：[Campaign](../../campaign/Campaign) · [CampaignGameStarter](../../campaign/CampaignGameStarter)

## 导航
- ↑ [campaign-ext 桶索引](../)
- ↑ [API 参考](../../)
- ↑ [v1.4.7 中文首页](../../../)
- ↔ [架构总览](../../../architecture/)
