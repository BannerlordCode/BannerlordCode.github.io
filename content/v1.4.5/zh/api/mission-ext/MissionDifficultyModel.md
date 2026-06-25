---
title: "MissionDifficultyModel"
description: "MissionDifficultyModel 的自动生成类参考。"
---
# MissionDifficultyModel

**Namespace:** TaleWorlds.MountAndBlade.ComponentInterfaces
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MissionDifficultyModel : MBGameModel<MissionDifficultyModel>`
**Base:** `MBGameModel<MissionDifficultyModel>`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.ComponentInterfaces/MissionDifficultyModel.cs`

## 概述

`MissionDifficultyModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `MissionDifficultyModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetDamageMultiplierOfCombatDifficulty
`public abstract float GetDamageMultiplierOfCombatDifficulty(Agent victimAgent, Agent attackerAgent = null)`

**用途 / Purpose:** 读取并返回当前对象中 damage multiplier of combat difficulty 的结果。

```csharp
// 先通过子系统 API 拿到 MissionDifficultyModel 实例
MissionDifficultyModel missionDifficultyModel = ...;
var result = missionDifficultyModel.GetDamageMultiplierOfCombatDifficulty(victimAgent, null);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
MissionDifficultyModel instance = ...;
```

## 参见

- [本区域目录](../)