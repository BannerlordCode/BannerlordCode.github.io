---
title: "DefaultSettlementSecurityModel"
description: "官方默认的城镇治安曲线：逐项累加驻军、繁荣、围城、被劫村庄、藏身处、政策、总督与 perk 修正，是城镇每日 tick 的治安结算器。"
---

# DefaultSettlementSecurityModel

**命名空间：** `TaleWorlds.CampaignSystem.GameComponents`
**Type:** `public class DefaultSettlementSecurityModel : SettlementSecurityModel`
**Source:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementSecurityModel.cs`

## 概述

`DefaultSettlementSecurityModel` 是官方默认的城镇治安曲线实现，继承自 `SettlementSecurityModel`，被城镇每日 tick 调用一次，结算出当天治安的净变化量。治安不是孤立数值：它与忠诚度、税收是一条联动链——治安过低会触发税收惩罚（`CalculateGoldCutDueToLowSecurity` 的反向），治安过高则带来金币增益（`CalculateGoldGainDueToHighSecurity`）。整个模型由一串 `private void Calculate*…OnSecurity(Town, ref ExplainedNumber)` 累加器组成，每一项都往同一个 `ExplainedNumber` 里加或减，最终结果被 clamp 到 `[0, MaximumSecurityInSettlement]` 区间。想调治安 mod 的开发者，读这一个类就够：所有可调参数都是 `private const`，想改只能重写整个模型。

## 心智模型

`CalculateSecurityChange`（183）是唯一入口，它按固定顺序调用一串累加器，每一项都通过 `ref ExplainedNumber` 改写同一个结果对象。顺序即优先级，理解顺序就理解了「为什么我的城镇治安莫名在掉」：

1. **驻军**（`CalculateGarrisonEffectsOnSecurity`，311）最先结算：驻军强度高加 `GarrisonHighSecurityGain = 3f`（454），驻军弱则扣 `GarrisonLowSecurityPenalty = -3f`（457）。驻军是治安的压舱石。
2. **巡逻队**（`CalculateSettlementPatrolPartiesBonuses`，203）随后叠加，给正在巡逻的部队额外加分。
3. **繁荣**（`CalculateProsperityEffectOnSecurity`，225）是隐性负项：斜率 `PerProsperityEffect = -0.0005f`（472）极低，但上限 `MaxProsperityEffect = -5f`（469），意味着繁荣度越高治安越被压，最多压 5 点。
4. **围城**（`CalculateUnderSiegeEffectsOnSecurity`，231）直接扣 `UnderSiegeSecurityEffect = -3f`（466），是最大的单项惩罚之一。
5. **被劫村庄**（`CalculateRaidedVillageEffectsOnSecurity`，240）每个被劫村庄扣 `VillageLootedSecurityEffect = -2f`（463），可叠加。
6. **藏身处**（`CalculateInfestedHideoutEffectsOnSecurity`，258）附近每有一个藏身处扣 `NearbyHideoutPenalty = -2f`（460）。
7. **政策**（`CalculatePolicyEffectsOnSecurity`，278）与**总督**（`CalculateGovernorEffectsOnSecurity`，306）随后结算，是 mod 最容易介入的两项。
8. **perk**（`CalculatePerkEffectsOnSecurity`，390）读总督 perk 给修正。
9. **漂移**（`CalculateSecurityDrift`，272）最后把结果往 `SecurityDriftMedium`（34）拉，防止治安长期停在极端值。

每一项都往 `ExplainedNumber` 里写，`includeDescriptions = true` 时同时生成人类可读的修正说明，这是调试治安问题的关键开关。

## 怎么用

### 怎么拿到它

通过 Campaign 的 `GameModels` 聚合取到：`Campaign.Current.GameModels.GetSettlementSecurityModel()` 返回当前激活的模型实例，官方存档里就是本类的实例。不要自己 new，模型由 Campaign 在初始化时注入。

### 典型用法

1. **每日治安结算**：城镇 tick 时框架自动调用 `CalculateSecurityChange`，一般不需要手动调。
2. **调试治安异常**：用 `includeDescriptions = true` 拿到 `ExplainedNumber`，遍历其 `Explanations` 列表，定位是哪一项在扣治安。
3. **事件响应**：调用 `GetLootedNearbyPartySecurityEffect`（428）估算一支部队被劫对治安的冲击，用于自定义事件结算。
4. **藏身处清理奖励**：`HideoutClearedSecurityGain`（64）定义了清理藏身处后给治安的固定加分，可在自定义任务里读取。
5. **税收联动**：`CalculateGoldGainDueToHighSecurity`（440）与 `CalculateGoldCutDueToLowSecurity`（447）把治安转成金币修正，做经济 mod 时成对使用。

### 最容易踩的坑

1. **7 个常量全是 `private const`**（454–472）：`GarrisonHighSecurityGain`、`GarrisonLowSecurityPenalty`、`NearbyHideoutPenalty`、`VillageLootedSecurityEffect`、`UnderSiegeSecurityEffect`、`MaxProsperityEffect`、`PerProsperityEffect` 都无法从外部改，想调平衡只能继承重写。
2. **`PerProsperityEffect = -0.0005f` 斜率极低**（472）：繁荣要涨到 10000 才吃满 `MaxProsperityEffect = -5f` 的上限，平时繁荣对治安的影响几乎可以忽略，别指望靠压繁荣救治安。
3. **`ref ExplainedNumber` 是改写语义**：所有累加器都通过 `ref` 直接改传入对象，不是返回新值。手动调用时若复用同一个 `ExplainedNumber` 实例，前一次的修正会残留。
4. **`MaximumSecurityInSettlement`（24）是硬上限**：所有累加结果最终被 clamp 到该值以内，堆再多修正也突破不了。
5. **`SecurityDriftMedium`（34）是回归目标**：`CalculateSecurityDrift`（272）会把治安往这个中值拉，长期看治安会自然回归，短期猛拉效果有限。

## 关键成员

- **MaximumSecurityInSettlement**（`DefaultSettlementSecurityModel.cs:24`）— 治安硬上限，所有累加结果最终被 clamp 到此值以内。
- **SecurityDriftMedium**（`DefaultSettlementSecurityModel.cs:34`）— 漂移回归目标，`CalculateSecurityDrift` 把治安往此值拉。
- **MapEventSecurityEffectRadius**（`DefaultSettlementSecurityModel.cs:44`）— 地图事件（如藏身处清理）对治安的影响半径。
- **HideoutClearedSecurityGain**（`DefaultSettlementSecurityModel.cs:64`）— 清理藏身处后给治安的固定加分值。
- **ThresholdForTaxCorruption**（`DefaultSettlementSecurityModel.cs:74`）— 触发税收腐败惩罚的治安阈值。
- **SettlementTaxBoostPercentage**（`DefaultSettlementSecurityModel.cs:104`）— 治安达标时税收加成百分比。
- **SettlementTaxPenaltyPercentage**（`DefaultSettlementSecurityModel.cs:114`）— 治安过低时税收惩罚百分比。
- **CalculateSecurityChange**（`DefaultSettlementSecurityModel.cs:183`）— 唯一入口，按固定顺序调用所有累加器结算当日治安净变化。
- **CalculateSettlementPatrolPartiesBonuses**（`DefaultSettlementSecurityModel.cs:203`）— 给正在巡逻的部队叠加治安加分。
- **CalculateProsperityEffectOnSecurity**（`DefaultSettlementSecurityModel.cs:225`）— 按繁荣度压低治安，斜率极低但上限 -5。
- **CalculateUnderSiegeEffectsOnSecurity**（`DefaultSettlementSecurityModel.cs:231`）— 围城状态直接扣 3 点治安。
- **CalculateRaidedVillageEffectsOnSecurity**（`DefaultSettlementSecurityModel.cs:240`）— 每个被劫村庄扣 2 点，可叠加。
- **CalculateInfestedHideoutEffectsOnSecurity**（`DefaultSettlementSecurityModel.cs:258`）— 附近每个藏身处扣 2 点。
- **CalculateSecurityDrift**（`DefaultSettlementSecurityModel.cs:272`）— 把治安往 `SecurityDriftMedium` 拉，防止长期停在极端值。
- **CalculatePolicyEffectsOnSecurity**（`DefaultSettlementSecurityModel.cs:278`）— 结算政策对治安的修正，是 mod 最易介入的项。
- **CalculateGovernorEffectsOnSecurity**（`DefaultSettlementSecurityModel.cs:306`）— 结算总督对治安的修正。
- **CalculateGarrisonEffectsOnSecurity**（`DefaultSettlementSecurityModel.cs:311`）— 驻军强度结算，强加 3 弱扣 3，是治安压舱石。
- **CalculatePerkEffectsOnSecurity**（`DefaultSettlementSecurityModel.cs:390`）— 读总督 perk 给治安修正。
- **GetLootedNearbyPartySecurityEffect**（`DefaultSettlementSecurityModel.cs:428`）— 估算一支部队被劫对治安的冲击，用于自定义事件。
- **CalculateGoldGainDueToHighSecurity**（`DefaultSettlementSecurityModel.cs:440`）— 治安过高时把治安转成金币增益。

## 真实示例

```csharp
// 调试某城镇当日治安变化，定位是哪一项在扣治安
Town town = Settlement.CurrentSettlement?.Town;
if (town == null) return;

SettlementSecurityModel model = Campaign.Current.GameModels.GetSettlementSecurityModel();
ExplainedNumber change = model.CalculateSecurityChange(town, true);

// 遍历修正说明，打印每一项的名称与数值
foreach (ExplainedNumber.Explanation explanation in change.Explanations)
{
    Debug.Print($"[Security] {explanation.Name}: {explanation.Number}");
}

// 估算清理藏身处能拿多少治安加分
int hideoutGain = model.HideoutClearedSecurityGain;
Debug.Print($"清理藏身处预计治安 +{hideoutGain}");
```

## 参见

- ↔ [SettlementSecurityModel](../SettlementSecurityModel) — 它实现的契约
- ↔ [DefaultSettlementLoyaltyModel](../DefaultSettlementLoyaltyModel) — 忠诚度模型：治安与忠诚互相影响，是相邻曲线
- ↔ [DefaultSettlementProsperityModel](../DefaultSettlementProsperityModel) — 繁荣度模型：繁荣会压低治安（见 PerProsperityEffect）
- ↔ [PerkHelper](../../core-extra/PerkHelper) — `CalculatePerkEffectsOnSecurity` 读的就是总督 perk

## 导航

- ↑ [API 参考](../../) —— 本版本 API 层入口：按任务找页的路径表
- ↑ [v1.5.3 首页](../../../) —— 19 个桶的完整缺口表与覆盖现状
- ↔ [模块地图](../../../architecture/module-map) —— 确认某个类型属于哪一桶
