---
title: "SandboxMissionDifficultyModel"
description: "SandboxMissionDifficultyModel 的自动生成类参考。"
---
# SandboxMissionDifficultyModel

**Namespace:** SandBox.GameComponents
**Module:** SandBox.GameComponents
**Type:** `public class SandboxMissionDifficultyModel : MissionDifficultyModel`
**Base:** `MissionDifficultyModel`
**File:** `Modules.SandBox/SandBox/SandBox.GameComponents/SandboxMissionDifficultyModel.cs`

## 概述

`SandboxMissionDifficultyModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `SandboxMissionDifficultyModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetDamageMultiplierOfCombatDifficulty
`public override float GetDamageMultiplierOfCombatDifficulty(Agent victimAgent, Agent attackerAgent = null)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 damage multiplier of combat difficulty 的结果。

```csharp
// 先通过子系统 API 拿到 SandboxMissionDifficultyModel 实例
SandboxMissionDifficultyModel sandboxMissionDifficultyModel = ...;
var result = sandboxMissionDifficultyModel.GetDamageMultiplierOfCombatDifficulty(victimAgent, null);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<SandboxMissionDifficultyModel>(new MySandboxMissionDifficultyModel());
```

## 参见

- [本区域目录](../)