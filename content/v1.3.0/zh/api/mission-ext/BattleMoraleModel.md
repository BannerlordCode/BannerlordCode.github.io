---
title: "BattleMoraleModel"
description: "BattleMoraleModel 的自动生成类参考。"
---
# BattleMoraleModel

**Namespace:** TaleWorlds.MountAndBlade.ComponentInterfaces
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class BattleMoraleModel : MBGameModel<BattleMoraleModel>`
**Base:** `MBGameModel<BattleMoraleModel>`
**File:** `TaleWorlds.MountAndBlade/ComponentInterfaces/BattleMoraleModel.cs`

## 概述

`BattleMoraleModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `BattleMoraleModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CalculateMaxMoraleChangeDueToAgentIncapacitated
`public abstract ValueTuple<float, float> CalculateMaxMoraleChangeDueToAgentIncapacitated(Agent affectedAgent, AgentState affectedAgentState, Agent affectorAgent, in KillingBlow killingBlow)`

**用途 / Purpose:** 计算max morale change due to agent incapacitated的当前值或结果。

```csharp
// 先通过子系统 API 拿到 BattleMoraleModel 实例
BattleMoraleModel battleMoraleModel = ...;
var result = battleMoraleModel.CalculateMaxMoraleChangeDueToAgentIncapacitated(affectedAgent, affectedAgentState, affectorAgent, killingBlow);
```

### CalculateMaxMoraleChangeDueToAgentPanicked
`public abstract ValueTuple<float, float> CalculateMaxMoraleChangeDueToAgentPanicked(Agent agent)`

**用途 / Purpose:** 计算max morale change due to agent panicked的当前值或结果。

```csharp
// 先通过子系统 API 拿到 BattleMoraleModel 实例
BattleMoraleModel battleMoraleModel = ...;
var result = battleMoraleModel.CalculateMaxMoraleChangeDueToAgentPanicked(agent);
```

### CalculateMoraleChangeToCharacter
`public abstract float CalculateMoraleChangeToCharacter(Agent agent, float maxMoraleChange)`

**用途 / Purpose:** 计算morale change to character的当前值或结果。

```csharp
// 先通过子系统 API 拿到 BattleMoraleModel 实例
BattleMoraleModel battleMoraleModel = ...;
var result = battleMoraleModel.CalculateMoraleChangeToCharacter(agent, 0);
```

### GetEffectiveInitialMorale
`public abstract float GetEffectiveInitialMorale(Agent agent, float baseMorale)`

**用途 / Purpose:** 读取并返回当前对象中 effective initial morale 的结果。

```csharp
// 先通过子系统 API 拿到 BattleMoraleModel 实例
BattleMoraleModel battleMoraleModel = ...;
var result = battleMoraleModel.GetEffectiveInitialMorale(agent, 0);
```

### CanPanicDueToMorale
`public abstract bool CanPanicDueToMorale(Agent agent)`

**用途 / Purpose:** 检查当前对象是否满足 panic due to morale 的前置条件。

```csharp
// 先通过子系统 API 拿到 BattleMoraleModel 实例
BattleMoraleModel battleMoraleModel = ...;
var result = battleMoraleModel.CanPanicDueToMorale(agent);
```

### CalculateCasualtiesFactor
`public abstract float CalculateCasualtiesFactor(BattleSideEnum battleSide)`

**用途 / Purpose:** 计算casualties factor的当前值或结果。

```csharp
// 先通过子系统 API 拿到 BattleMoraleModel 实例
BattleMoraleModel battleMoraleModel = ...;
var result = battleMoraleModel.CalculateCasualtiesFactor(battleSide);
```

### GetAverageMorale
`public abstract float GetAverageMorale(Formation formation)`

**用途 / Purpose:** 读取并返回当前对象中 average morale 的结果。

```csharp
// 先通过子系统 API 拿到 BattleMoraleModel 实例
BattleMoraleModel battleMoraleModel = ...;
var result = battleMoraleModel.GetAverageMorale(formation);
```

### CalculateMoraleChangeOnShipSunk
`public abstract float CalculateMoraleChangeOnShipSunk(IShipOrigin shipOrigin)`

**用途 / Purpose:** 计算morale change on ship sunk的当前值或结果。

```csharp
// 先通过子系统 API 拿到 BattleMoraleModel 实例
BattleMoraleModel battleMoraleModel = ...;
var result = battleMoraleModel.CalculateMoraleChangeOnShipSunk(shipOrigin);
```

### CalculateMoraleOnRamming
`public abstract float CalculateMoraleOnRamming(Agent agent)`

**用途 / Purpose:** 计算morale on ramming的当前值或结果。

```csharp
// 先通过子系统 API 拿到 BattleMoraleModel 实例
BattleMoraleModel battleMoraleModel = ...;
var result = battleMoraleModel.CalculateMoraleOnRamming(agent);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
BattleMoraleModel instance = ...;
```

## 参见

- [本区域目录](../)