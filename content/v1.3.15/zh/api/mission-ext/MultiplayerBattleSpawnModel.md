---
title: "MultiplayerBattleSpawnModel"
description: "MultiplayerBattleSpawnModel 的自动生成类参考。"
---
# MultiplayerBattleSpawnModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerBattleSpawnModel : BattleSpawnModel`
**Base:** `BattleSpawnModel`
**File:** `TaleWorlds.MountAndBlade/MultiplayerBattleSpawnModel.cs`

## 概述

`MultiplayerBattleSpawnModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `MultiplayerBattleSpawnModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetInitialSpawnAssignments
`public override List<ValueTuple<IAgentOriginBase, int>> GetInitialSpawnAssignments(BattleSideEnum battleSide, List<IAgentOriginBase> troopOrigins)`

**用途 / Purpose:** 读取并返回当前对象中 「initial spawn assignments」 的结果。

```csharp
// 先通过子系统 API 拿到 MultiplayerBattleSpawnModel 实例
MultiplayerBattleSpawnModel multiplayerBattleSpawnModel = ...;
var result = multiplayerBattleSpawnModel.GetInitialSpawnAssignments(battleSide, troopOrigins);
```

### GetReinforcementAssignments
`public override List<ValueTuple<IAgentOriginBase, int>> GetReinforcementAssignments(BattleSideEnum battleSide, List<IAgentOriginBase> troopOrigins)`

**用途 / Purpose:** 读取并返回当前对象中 「reinforcement assignments」 的结果。

```csharp
// 先通过子系统 API 拿到 MultiplayerBattleSpawnModel 实例
MultiplayerBattleSpawnModel multiplayerBattleSpawnModel = ...;
var result = multiplayerBattleSpawnModel.GetReinforcementAssignments(battleSide, troopOrigins);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<MultiplayerBattleSpawnModel>(new MyMultiplayerBattleSpawnModel());
```

## 参见

- [本区域目录](../)