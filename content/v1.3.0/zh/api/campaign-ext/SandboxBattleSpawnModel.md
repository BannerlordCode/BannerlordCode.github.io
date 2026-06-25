---
title: "SandboxBattleSpawnModel"
description: "SandboxBattleSpawnModel 的自动生成类参考。"
---
# SandboxBattleSpawnModel

**Namespace:** SandBox.GameComponents
**Module:** SandBox.GameComponents
**Type:** `public class SandboxBattleSpawnModel : BattleSpawnModel`
**Base:** `BattleSpawnModel`
**File:** `SandBox/GameComponents/SandboxBattleSpawnModel.cs`

## 概述

`SandboxBattleSpawnModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `SandboxBattleSpawnModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnMissionStart
`public override void OnMissionStart()`

**用途 / Purpose:** 在 「mission start」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SandboxBattleSpawnModel 实例
SandboxBattleSpawnModel sandboxBattleSpawnModel = ...;
sandboxBattleSpawnModel.OnMissionStart();
```

### OnMissionEnd
`public override void OnMissionEnd()`

**用途 / Purpose:** 在 「mission end」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SandboxBattleSpawnModel 实例
SandboxBattleSpawnModel sandboxBattleSpawnModel = ...;
sandboxBattleSpawnModel.OnMissionEnd();
```

### GetInitialSpawnAssignments
`public override List<ValueTuple<IAgentOriginBase, int>> GetInitialSpawnAssignments(BattleSideEnum battleSide, List<IAgentOriginBase> troopOrigins)`

**用途 / Purpose:** 读取并返回当前对象中 「initial spawn assignments」 的结果。

```csharp
// 先通过子系统 API 拿到 SandboxBattleSpawnModel 实例
SandboxBattleSpawnModel sandboxBattleSpawnModel = ...;
var result = sandboxBattleSpawnModel.GetInitialSpawnAssignments(battleSide, troopOrigins);
```

### GetReinforcementAssignments
`public override List<ValueTuple<IAgentOriginBase, int>> GetReinforcementAssignments(BattleSideEnum battleSide, List<IAgentOriginBase> troopOrigins)`

**用途 / Purpose:** 读取并返回当前对象中 「reinforcement assignments」 的结果。

```csharp
// 先通过子系统 API 拿到 SandboxBattleSpawnModel 实例
SandboxBattleSpawnModel sandboxBattleSpawnModel = ...;
var result = sandboxBattleSpawnModel.GetReinforcementAssignments(battleSide, troopOrigins);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<SandboxBattleSpawnModel>(new MySandboxBattleSpawnModel());
```

## 参见

- [本区域目录](../)