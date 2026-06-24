<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultMissionDifficultyModel`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultMissionDifficultyModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DefaultMissionDifficultyModel : MissionDifficultyModel`
**Base:** `MissionDifficultyModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/DefaultMissionDifficultyModel.cs`

## 概述

`DefaultMissionDifficultyModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultMissionDifficultyModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetDamageMultiplierOfCombatDifficulty
`public override float GetDamageMultiplierOfCombatDifficulty(Agent victimAgent, Agent attackerAgent = null)`

**用途 / Purpose:** 获取 `damage multiplier of combat difficulty` 的当前值。

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultMissionDifficultyModel>(new MyDefaultMissionDifficultyModel());
```

## 参见

- [完整类目录](../catalog)