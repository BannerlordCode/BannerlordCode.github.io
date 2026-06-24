<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `StoryModeTargetScoreCalculatingModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# StoryModeTargetScoreCalculatingModel

**Namespace:** StoryMode.GameComponents
**Module:** StoryMode.GameComponents
**Type:** `public class StoryModeTargetScoreCalculatingModel : TargetScoreCalculatingModel`
**Base:** `TargetScoreCalculatingModel`
**File:** `Bannerlord.Source/Modules.StoryMode/StoryMode/StoryMode.GameComponents/StoryModeTargetScoreCalculatingModel.cs`

## 概述

`StoryModeTargetScoreCalculatingModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `StoryModeTargetScoreCalculatingModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetDefensivePatrollingFactor
`public override float GetDefensivePatrollingFactor(bool isNavalPatrolling)`

**用途 / Purpose:** 获取 `defensive patrolling factor` 的当前值。

### GetOffensivePatrollingFactor
`public override float GetOffensivePatrollingFactor(bool isNavalPatrolling)`

**用途 / Purpose:** 获取 `offensive patrolling factor` 的当前值。

### CalculateDefensivePatrollingScoreForSettlement
`public override float CalculateDefensivePatrollingScoreForSettlement(Settlement settlement, bool isTargetingPort, MobileParty mobileParty)`

**用途 / Purpose:** 处理 `calculate defensive patrolling score for settlement` 相关逻辑。

### CalculateOffensivePatrollingScoreForSettlement
`public override float CalculateOffensivePatrollingScoreForSettlement(Settlement settlement, bool isTargetingPort, MobileParty mobileParty)`

**用途 / Purpose:** 处理 `calculate offensive patrolling score for settlement` 相关逻辑。

### CurrentObjectiveValue
`public override float CurrentObjectiveValue(MobileParty mobileParty)`

**用途 / Purpose:** 处理 `current objective value` 相关逻辑。

### GetTargetScoreForFaction
`public override float GetTargetScoreForFaction(Settlement targetSettlement, ArmyTypes missionType, MobileParty mobileParty, float ourStrength)`

**用途 / Purpose:** 获取 `target score for faction` 的当前值。

## 使用示例

```csharp
Game.Current.ReplaceModel<StoryModeTargetScoreCalculatingModel>(new MyStoryModeTargetScoreCalculatingModel());
```

## 参见

- [完整类目录](../catalog)