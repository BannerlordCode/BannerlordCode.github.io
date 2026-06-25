---
title: "BattleReinforcementsSpawnController"
description: "BattleReinforcementsSpawnController 的自动生成类参考。"
---
# BattleReinforcementsSpawnController

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BattleReinforcementsSpawnController : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/BattleReinforcementsSpawnController.cs`

## 概述

`BattleReinforcementsSpawnController` 是一个控制器，重点不在存储数据，而在接收输入后把系统推向下一个状态。

## 心智模型

把 `BattleReinforcementsSpawnController` 当作一个 Controller 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** **用途 / Purpose:** 在 behavior initialize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 BattleReinforcementsSpawnController 实例
BattleReinforcementsSpawnController battleReinforcementsSpawnController = ...;
battleReinforcementsSpawnController.OnBehaviorInitialize();
```

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** **用途 / Purpose:** 调用 AfterStart 对应的操作。

```csharp
// 先通过子系统 API 拿到 BattleReinforcementsSpawnController 实例
BattleReinforcementsSpawnController battleReinforcementsSpawnController = ...;
battleReinforcementsSpawnController.AfterStart();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** **用途 / Purpose:** 在 mission tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 BattleReinforcementsSpawnController 实例
BattleReinforcementsSpawnController battleReinforcementsSpawnController = ...;
battleReinforcementsSpawnController.OnMissionTick(0);
```

## 使用示例

```csharp
var controller = Mission.Current.GetMissionBehavior<BattleReinforcementsSpawnController>();
```

## 参见

- [本区域目录](../)