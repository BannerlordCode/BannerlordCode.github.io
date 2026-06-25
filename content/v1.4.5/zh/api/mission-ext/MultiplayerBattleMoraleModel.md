---
title: "MultiplayerBattleMoraleModel"
description: "MultiplayerBattleMoraleModel 的自动生成类参考。"
---
# MultiplayerBattleMoraleModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerBattleMoraleModel : BattleMoraleModel`
**Base:** `BattleMoraleModel`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MultiplayerBattleMoraleModel.cs`

## 概述

`MultiplayerBattleMoraleModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `MultiplayerBattleMoraleModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CalculateMoraleChangeToCharacter
`public override float CalculateMoraleChangeToCharacter(Agent agent, float maxMoraleChange)`

**用途 / Purpose:** **用途 / Purpose:** 计算morale change to character的当前值或结果。

```csharp
// 先通过子系统 API 拿到 MultiplayerBattleMoraleModel 实例
MultiplayerBattleMoraleModel multiplayerBattleMoraleModel = ...;
var result = multiplayerBattleMoraleModel.CalculateMoraleChangeToCharacter(agent, 0);
```

### GetEffectiveInitialMorale
`public override float GetEffectiveInitialMorale(Agent agent, float baseMorale)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 effective initial morale 的结果。

```csharp
// 先通过子系统 API 拿到 MultiplayerBattleMoraleModel 实例
MultiplayerBattleMoraleModel multiplayerBattleMoraleModel = ...;
var result = multiplayerBattleMoraleModel.GetEffectiveInitialMorale(agent, 0);
```

### CanPanicDueToMorale
`public override bool CanPanicDueToMorale(Agent agent)`

**用途 / Purpose:** **用途 / Purpose:** 检查当前对象是否满足 panic due to morale 的前置条件。

```csharp
// 先通过子系统 API 拿到 MultiplayerBattleMoraleModel 实例
MultiplayerBattleMoraleModel multiplayerBattleMoraleModel = ...;
var result = multiplayerBattleMoraleModel.CanPanicDueToMorale(agent);
```

### CalculateCasualtiesFactor
`public override float CalculateCasualtiesFactor(BattleSideEnum battleSide)`

**用途 / Purpose:** **用途 / Purpose:** 计算casualties factor的当前值或结果。

```csharp
// 先通过子系统 API 拿到 MultiplayerBattleMoraleModel 实例
MultiplayerBattleMoraleModel multiplayerBattleMoraleModel = ...;
var result = multiplayerBattleMoraleModel.CalculateCasualtiesFactor(battleSide);
```

### GetAverageMorale
`public override float GetAverageMorale(Formation formation)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 average morale 的结果。

```csharp
// 先通过子系统 API 拿到 MultiplayerBattleMoraleModel 实例
MultiplayerBattleMoraleModel multiplayerBattleMoraleModel = ...;
var result = multiplayerBattleMoraleModel.GetAverageMorale(formation);
```

### CalculateMoraleChangeOnShipSunk
`public override float CalculateMoraleChangeOnShipSunk(IShipOrigin shipOrigin)`

**用途 / Purpose:** **用途 / Purpose:** 计算morale change on ship sunk的当前值或结果。

```csharp
// 先通过子系统 API 拿到 MultiplayerBattleMoraleModel 实例
MultiplayerBattleMoraleModel multiplayerBattleMoraleModel = ...;
var result = multiplayerBattleMoraleModel.CalculateMoraleChangeOnShipSunk(shipOrigin);
```

### CalculateMoraleOnRamming
`public override float CalculateMoraleOnRamming(Agent agent, IShipOrigin rammingShip, IShipOrigin rammedShip)`

**用途 / Purpose:** **用途 / Purpose:** 计算morale on ramming的当前值或结果。

```csharp
// 先通过子系统 API 拿到 MultiplayerBattleMoraleModel 实例
MultiplayerBattleMoraleModel multiplayerBattleMoraleModel = ...;
var result = multiplayerBattleMoraleModel.CalculateMoraleOnRamming(agent, rammingShip, rammedShip);
```

### CalculateMoraleOnShipsConnected
`public override float CalculateMoraleOnShipsConnected(Agent agent, IShipOrigin ownerShip, IShipOrigin targetShip)`

**用途 / Purpose:** **用途 / Purpose:** 计算morale on ships connected的当前值或结果。

```csharp
// 先通过子系统 API 拿到 MultiplayerBattleMoraleModel 实例
MultiplayerBattleMoraleModel multiplayerBattleMoraleModel = ...;
var result = multiplayerBattleMoraleModel.CalculateMoraleOnShipsConnected(agent, ownerShip, targetShip);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<MultiplayerBattleMoraleModel>(new MyMultiplayerBattleMoraleModel());
```

## 参见

- [本区域目录](../)