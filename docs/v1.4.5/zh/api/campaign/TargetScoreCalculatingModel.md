<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TargetScoreCalculatingModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# TargetScoreCalculatingModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class TargetScoreCalculatingModel : MBGameModel<TargetScoreCalculatingModel>`
**Base:** `MBGameModel<TargetScoreCalculatingModel>`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/TargetScoreCalculatingModel.cs`

## 概述

`TargetScoreCalculatingModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `TargetScoreCalculatingModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `TravelingToAssignmentFactor` | `public abstract float TravelingToAssignmentFactor { get; }` |
| `BesiegingFactor` | `public abstract float BesiegingFactor { get; }` |
| `AssaultingTownFactor` | `public abstract float AssaultingTownFactor { get; }` |
| `RaidingFactor` | `public abstract float RaidingFactor { get; }` |
| `DefendingFactor` | `public abstract float DefendingFactor { get; }` |

## 主要方法

### GetDefensivePatrollingFactor
`public abstract float GetDefensivePatrollingFactor(bool isNavalPatrolling)`

**用途 / Purpose:** 获取 `defensive patrolling factor` 的当前值。

### GetOffensivePatrollingFactor
`public abstract float GetOffensivePatrollingFactor(bool isNavalPatrolling)`

**用途 / Purpose:** 获取 `offensive patrolling factor` 的当前值。

### GetTargetScoreForFaction
`public abstract float GetTargetScoreForFaction(Settlement targetSettlement, Army.ArmyTypes missionType, MobileParty mobileParty, float ourStrength)`

**用途 / Purpose:** 获取 `target score for faction` 的当前值。

### CalculateDefensivePatrollingScoreForSettlement
`public abstract float CalculateDefensivePatrollingScoreForSettlement(Settlement settlement, bool isTargetingPort, MobileParty mobileParty)`

**用途 / Purpose:** 处理 `calculate defensive patrolling score for settlement` 相关逻辑。

### CalculateOffensivePatrollingScoreForSettlement
`public abstract float CalculateOffensivePatrollingScoreForSettlement(Settlement settlement, bool isTargetingPort, MobileParty mobileParty)`

**用途 / Purpose:** 处理 `calculate offensive patrolling score for settlement` 相关逻辑。

### CurrentObjectiveValue
`public abstract float CurrentObjectiveValue(MobileParty mobileParty)`

**用途 / Purpose:** 处理 `current objective value` 相关逻辑。

## 使用示例

```csharp
var implementation = new CustomTargetScoreCalculatingModel();
```

## 参见

- [完整类目录](../catalog)