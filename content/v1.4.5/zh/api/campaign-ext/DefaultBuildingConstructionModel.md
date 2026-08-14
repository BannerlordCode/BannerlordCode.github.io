---
title: "DefaultBuildingConstructionModel"
description: "Bannerlord 默认据点施工点、加速储备、繁荣、建筑、忠诚与总督 Perk 施工规则。"
---
# DefaultBuildingConstructionModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class DefaultBuildingConstructionModel : BuildingConstructionModel`  
**Base:** [`BuildingConstructionModel`](../BuildingConstructionModel)  
**Source:** `TaleWorlds.CampaignSystem/GameComponents/DefaultBuildingConstructionModel.cs`（1.4.5 权威实现）

## 一句话职责

`DefaultBuildingConstructionModel` 把据点繁荣、加速储备、总督技能与 Perk、市场生产、当前建筑效果、忠诚和文化特性合成为默认每日施工点，并提供城镇/城堡加速成本与收益。

## 心智模型

默认实现的最小基线是 `town.Prosperity * 0.01`。在此之上，它按 `Town.BoostBuildingProcess` 和据点类型加入储备加速，再叠加总督技能效果、Forced Labor、工程学 Perk、市场卖出生产材料、当前项目专属 Perk、建筑效果、忠诚度和 Battanian construction feat，最后把结果限制为不小于零。

这个结果仍然只是“今天应该推进多少”。`Town.Construction` 读取它，`BuildingsCampaignBehavior` 再将结果写入当前建筑并扣除储备；模型不会自行完成建筑，也不会从队列移除项目。

## 依赖

| 类型/流程 | 关系 |
| --- | --- |
| [`BuildingConstructionModel`](../BuildingConstructionModel) / [`GameModels`](../GameModels) | 定义契约并在 Campaign 启动后提供当前实现。 |
| [`Town`](../../campaign/Town) / [`Building`](../Building) | 提供繁荣、忠诚、总督、当前项目和储备输入。 |
| [`BuildingsCampaignBehavior`](../BuildingsCampaignBehavior) | 每日消费 `Town.Construction`，推进建筑并扣除储备。 |
| [`BuildingHelper`](../BuildingHelper) | 使用无加速施工点和成本估算完成天数。 |

## 默认常量与公式

| 成员/阶段 | 1.4.5 默认行为 |
| --- | --- |
| `TownBoostCost` / `TownBoostBonus` | 城镇分别为 `500` 和 `50`。 |
| `CastleBoostCost` / `CastleBoostBonus` | 城堡分别为 `250` 和 `20`。 |
| 基础施工点 | `Prosperity * 0.01`，并以 `str_prosperity` 作为解释因素。 |
| 储备加速 | `BoostBuildingProcess / 对应成本` 截断到 `1`，乘以 `GetBoostAmount`；城镇总督的 `Clockwork` 还可提高加速收益。 |
| 总督与囚犯 | 当前总督必须确实在该据点；Town Project Building Bonus、`ForcedLabor`、工程学 Perk 等通过技能/Perk helper 影响结果，Forced Labor 还会按囚犯数增加因子并封顶。 |
| 市场生产 | `SoldItems` 中 `BonusToProduction` 类别的数量每件贡献 `0.25`。 |
| 当前项目 | 军事项目可受 `Confidence` 影响；市场项目可受 `SelfMadeMan` 影响；建筑本身的 `ConstructionPerDay` 效果也会加入。 |
| 忠诚与文化 | 忠诚 `>=75` 映射为最高 `20%` 加成；`25 < loyalty <= 50` 产生惩罚；`<=25` 将结果上限限制为 `0`；忠诚高于 `25` 且领主文化拥有 Battanian construction feat 时增加文化因子。 |
| 收尾 | `LimitMin(0)`，所以最终施工点不会是负数。 |

## 公共成员与调用时机

| 成员 | 用途与边界 |
| --- | --- |
| `CalculateDailyConstructionPower` | 创建 `ExplainedNumber`，调用内部公式；开启 `includeDescriptions` 时供 `Town.ConstructionExplanation` 和 UI 展示因素。 |
| `CalculateDailyConstructionPowerWithoutBoost` | 用同一套公式但明确省略储备加速，供 `BuildingHelper.GetDaysToComplete` 估算非加速部分。 |
| `GetBoostCost` | 根据 `town.IsCastle` 在 `250` 与 `500` 之间选择成本；不会读取或扣除当前储备。 |
| `GetBoostAmount` | 以城镇 `50` 或城堡 `20` 为基础，并叠加总督 `Relocation` 与 `SpringOfGold` 的次级奖励；它返回一段储备对应的收益。 |

## 真实消费链

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Settlements;

Town town = Settlement.All
    .FirstOrDefault(settlement => settlement.IsFortification && settlement.Town != null)
    ?.Town;

if (Campaign.Current != null && town != null)
{
    float construction = town.Construction;
    ExplainedNumber explanation = town.ConstructionExplanation;
    int days = town.CurrentBuilding == null
        ? -1
        : Helpers.BuildingHelper.GetDaysToComplete(town.CurrentBuilding, town);
}
```

在每日战役流程里，`BuildingsCampaignBehavior` 会把 `town.Construction` 加到当前 `Building.BuildingProgress`，然后按城镇或城堡成本扣减 `BoostBuildingProcess`，最后调用建筑完成检查。读取模型结果与执行这些写回必须保持分离。

## 替换实现

```csharp
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Core;

public sealed class MyBuildingConstructionModel : BuildingConstructionModel
{
    public override int TownBoostCost => 500;
    public override int TownBoostBonus => 50;
    public override int CastleBoostCost => 250;
    public override int CastleBoostBonus => 20;

    public override ExplainedNumber CalculateDailyConstructionPower(
        Town town, bool includeDescriptions = false)
    {
        var result = new ExplainedNumber(town.Prosperity * 0.01f, includeDescriptions);
        return result;
    }

    public override int CalculateDailyConstructionPowerWithoutBoost(Town town)
        => (int)(town.Prosperity * 0.01f);

    public override int GetBoostCost(Town town)
        => town.IsCastle ? CastleBoostCost : TownBoostCost;

    public override int GetBoostAmount(Town town)
        => town.IsCastle ? CastleBoostBonus : TownBoostBonus;
}
```

上面的实现只展示契约形状；实际替换时必须决定是否保留忠诚、建筑效果和 `LimitMin(0)` 等 vanilla 边界，不能把示例当作完整平衡规则。

## 风险与版本边界

- `GetBoostAmount` 是每一段储备的收益，不是当前 `BoostBuildingProcess` 的总收益；把它直接加到进度而不乘储备段数会改变规则单位。
- `CalculateDailyConstructionPowerWithoutBoost` 必须和带加速版本使用相容的单位，否则 `BuildingHelper.GetDaysToComplete` 会显示与实际 tick 不符的天数，甚至发生除零。
- `town.Governor`、`OwnerClan`、`Settlement.Party.PrisonRoster` 和当前建筑都属于已初始化战役状态；不要拿脱离地图生命周期的临时对象调用完整 vanilla 实现。
- 极低忠诚的 `LimitMax(0)` 是防止低忠诚仍持续施工的硬边界；删掉它会改变叛乱前的长期据点状态。
- 模型结果不会替代 `BuildingsCampaignBehavior` 的围城判断和完成检查。不要在模型中自行 `Dequeue` 建筑或修改储备。

## 导航

- [接口契约：BuildingConstructionModel](../BuildingConstructionModel)
- [上级：Campaign-Ext](..)
- [同级：Models 家族](../models/)
- [相关：BuildingHelper](../BuildingHelper) · [BuildingScoreCalculationModel](../BuildingScoreCalculationModel)
- [消费端：Town](../../campaign/Town) · [BuildingsCampaignBehavior](../BuildingsCampaignBehavior)
