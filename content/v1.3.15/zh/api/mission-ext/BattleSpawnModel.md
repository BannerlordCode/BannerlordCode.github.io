---
title: "BattleSpawnModel"
description: "BattleSpawnModel 的自动生成类参考。"
---
# BattleSpawnModel

**Namespace:** TaleWorlds.MountAndBlade.ComponentInterfaces
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class BattleSpawnModel : MBGameModel<BattleSpawnModel>`
**Base:** `MBGameModel<BattleSpawnModel>`
**File:** `TaleWorlds.MountAndBlade/ComponentInterfaces/BattleSpawnModel.cs`

## 概述

`BattleSpawnModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `BattleSpawnModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnMissionStart
`public virtual void OnMissionStart()`

**用途 / Purpose:** **用途 / Purpose:** 在 mission start 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 BattleSpawnModel 实例
BattleSpawnModel battleSpawnModel = ...;
battleSpawnModel.OnMissionStart();
```

### OnMissionEnd
`public virtual void OnMissionEnd()`

**用途 / Purpose:** **用途 / Purpose:** 在 mission end 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 BattleSpawnModel 实例
BattleSpawnModel battleSpawnModel = ...;
battleSpawnModel.OnMissionEnd();
```

### GetInitialSpawnAssignments
`public abstract List<ValueTuple<IAgentOriginBase, int>> GetInitialSpawnAssignments(BattleSideEnum battleSide, List<IAgentOriginBase> troopOrigins)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 initial spawn assignments 的结果。

```csharp
// 先通过子系统 API 拿到 BattleSpawnModel 实例
BattleSpawnModel battleSpawnModel = ...;
var result = battleSpawnModel.GetInitialSpawnAssignments(battleSide, troopOrigins);
```

### GetReinforcementAssignments
`public abstract List<ValueTuple<IAgentOriginBase, int>> GetReinforcementAssignments(BattleSideEnum battleSide, List<IAgentOriginBase> troopOrigins)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 reinforcement assignments 的结果。

```csharp
// 先通过子系统 API 拿到 BattleSpawnModel 实例
BattleSpawnModel battleSpawnModel = ...;
var result = battleSpawnModel.GetReinforcementAssignments(battleSide, troopOrigins);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
BattleSpawnModel instance = ...;
```

## 参见

- [本区域目录](../)