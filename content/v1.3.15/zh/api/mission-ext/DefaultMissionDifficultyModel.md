---
title: "DefaultMissionDifficultyModel"
description: "DefaultMissionDifficultyModel 的自动生成类参考。"
---
# DefaultMissionDifficultyModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DefaultMissionDifficultyModel : MissionDifficultyModel`
**Base:** `MissionDifficultyModel`
**File:** `TaleWorlds.MountAndBlade/DefaultMissionDifficultyModel.cs`

## 概述

`DefaultMissionDifficultyModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultMissionDifficultyModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetDamageMultiplierOfCombatDifficulty
`public override float GetDamageMultiplierOfCombatDifficulty(Agent victimAgent, Agent attackerAgent = null)`

**用途 / Purpose:** 读取并返回当前对象中 「damage multiplier of combat difficulty」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultMissionDifficultyModel 实例
DefaultMissionDifficultyModel defaultMissionDifficultyModel = ...;
var result = defaultMissionDifficultyModel.GetDamageMultiplierOfCombatDifficulty(victimAgent, null);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultMissionDifficultyModel>(new MyDefaultMissionDifficultyModel());
```

## 参见

- [本区域目录](../)