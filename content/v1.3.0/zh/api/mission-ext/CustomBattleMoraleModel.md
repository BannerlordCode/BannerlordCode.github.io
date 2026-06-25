---
title: "CustomBattleMoraleModel"
description: "CustomBattleMoraleModel 的自动生成类参考。"
---
# CustomBattleMoraleModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomBattleMoraleModel : BattleMoraleModel`
**Base:** `BattleMoraleModel`
**File:** `TaleWorlds.MountAndBlade/CustomBattleMoraleModel.cs`

## 概述

`CustomBattleMoraleModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `CustomBattleMoraleModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CalculateMaxMoraleChangeDueToAgentIncapacitated
`public override ValueTuple<float, float> CalculateMaxMoraleChangeDueToAgentIncapacitated(Agent affectedAgent, AgentState affectedAgentState, Agent affectorAgent, in KillingBlow killingBlow)`

**用途 / Purpose:** 计算「max morale change due to agent incapacitated」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 CustomBattleMoraleModel 实例
CustomBattleMoraleModel customBattleMoraleModel = ...;
var result = customBattleMoraleModel.CalculateMaxMoraleChangeDueToAgentIncapacitated(affectedAgent, affectedAgentState, affectorAgent, killingBlow);
```

### CalculateMaxMoraleChangeDueToAgentPanicked
`public override ValueTuple<float, float> CalculateMaxMoraleChangeDueToAgentPanicked(Agent agent)`

**用途 / Purpose:** 计算「max morale change due to agent panicked」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 CustomBattleMoraleModel 实例
CustomBattleMoraleModel customBattleMoraleModel = ...;
var result = customBattleMoraleModel.CalculateMaxMoraleChangeDueToAgentPanicked(agent);
```

### CalculateMoraleChangeToCharacter
`public override float CalculateMoraleChangeToCharacter(Agent agent, float maxMoraleChange)`

**用途 / Purpose:** 计算「morale change to character」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 CustomBattleMoraleModel 实例
CustomBattleMoraleModel customBattleMoraleModel = ...;
var result = customBattleMoraleModel.CalculateMoraleChangeToCharacter(agent, 0);
```

### GetEffectiveInitialMorale
`public override float GetEffectiveInitialMorale(Agent agent, float baseMorale)`

**用途 / Purpose:** 读取并返回当前对象中 「effective initial morale」 的结果。

```csharp
// 先通过子系统 API 拿到 CustomBattleMoraleModel 实例
CustomBattleMoraleModel customBattleMoraleModel = ...;
var result = customBattleMoraleModel.GetEffectiveInitialMorale(agent, 0);
```

### CanPanicDueToMorale
`public override bool CanPanicDueToMorale(Agent agent)`

**用途 / Purpose:** 检查当前对象是否满足 「panic due to morale」 的前置条件。

```csharp
// 先通过子系统 API 拿到 CustomBattleMoraleModel 实例
CustomBattleMoraleModel customBattleMoraleModel = ...;
var result = customBattleMoraleModel.CanPanicDueToMorale(agent);
```

### CalculateCasualtiesFactor
`public override float CalculateCasualtiesFactor(BattleSideEnum battleSide)`

**用途 / Purpose:** 计算「casualties factor」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 CustomBattleMoraleModel 实例
CustomBattleMoraleModel customBattleMoraleModel = ...;
var result = customBattleMoraleModel.CalculateCasualtiesFactor(battleSide);
```

### GetAverageMorale
`public override float GetAverageMorale(Formation formation)`

**用途 / Purpose:** 读取并返回当前对象中 「average morale」 的结果。

```csharp
// 先通过子系统 API 拿到 CustomBattleMoraleModel 实例
CustomBattleMoraleModel customBattleMoraleModel = ...;
var result = customBattleMoraleModel.GetAverageMorale(formation);
```

### CalculateMoraleChangeOnShipSunk
`public override float CalculateMoraleChangeOnShipSunk(IShipOrigin shipOrigin)`

**用途 / Purpose:** 计算「morale change on ship sunk」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 CustomBattleMoraleModel 实例
CustomBattleMoraleModel customBattleMoraleModel = ...;
var result = customBattleMoraleModel.CalculateMoraleChangeOnShipSunk(shipOrigin);
```

### CalculateMoraleOnRamming
`public override float CalculateMoraleOnRamming(Agent agent)`

**用途 / Purpose:** 计算「morale on ramming」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 CustomBattleMoraleModel 实例
CustomBattleMoraleModel customBattleMoraleModel = ...;
var result = customBattleMoraleModel.CalculateMoraleOnRamming(agent);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<CustomBattleMoraleModel>(new MyCustomBattleMoraleModel());
```

## 参见

- [本区域目录](../)