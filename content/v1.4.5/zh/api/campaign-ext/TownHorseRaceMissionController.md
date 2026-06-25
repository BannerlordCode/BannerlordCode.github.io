---
title: "TownHorseRaceMissionController"
description: "TownHorseRaceMissionController 的自动生成类参考。"
---
# TownHorseRaceMissionController

**Namespace:** SandBox.Tournaments.MissionLogics
**Module:** SandBox.Tournaments
**Type:** `public class TownHorseRaceMissionController : MissionLogic, ITournamentGameBehavior`
**Base:** `MissionLogic`
**File:** `Modules.SandBox/SandBox/SandBox.Tournaments.MissionLogics/TownHorseRaceMissionController.cs`

## 概述

`TownHorseRaceMissionController` 是一个控制器，重点不在存储数据，而在接收输入后把系统推向下一个状态。

## 心智模型

把 `TownHorseRaceMissionController` 当作一个 Controller 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; }` |
| `CheckPoints` | `public List<CheckPoint> CheckPoints { get; }` |

## 主要方法

### GetBestTargetPosition
`public Vec3 GetBestTargetPosition()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 best target position 的结果。

```csharp
// 先通过子系统 API 拿到 TownHorseRaceMissionController 实例
TownHorseRaceMissionController townHorseRaceMissionController = ...;
var result = townHorseRaceMissionController.GetBestTargetPosition();
```

### AddToCheckList
`public void AddToCheckList(Agent agent)`

**用途 / Purpose:** **用途 / Purpose:** 将 to check list 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 TownHorseRaceMissionController 实例
TownHorseRaceMissionController townHorseRaceMissionController = ...;
townHorseRaceMissionController.AddToCheckList(agent);
```

### RemoveFromCheckList
`public void RemoveFromCheckList(Agent agent)`

**用途 / Purpose:** **用途 / Purpose:** 从当前容器或状态中移除 from check list。

```csharp
// 先通过子系统 API 拿到 TownHorseRaceMissionController 实例
TownHorseRaceMissionController townHorseRaceMissionController = ...;
townHorseRaceMissionController.RemoveFromCheckList(agent);
```

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** **用途 / Purpose:** 调用 AfterStart 对应的操作。

```csharp
// 先通过子系统 API 拿到 TownHorseRaceMissionController 实例
TownHorseRaceMissionController townHorseRaceMissionController = ...;
townHorseRaceMissionController.AfterStart();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** **用途 / Purpose:** 在 mission tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 TownHorseRaceMissionController 实例
TownHorseRaceMissionController townHorseRaceMissionController = ...;
townHorseRaceMissionController.OnMissionTick(0);
```

### StartMatch
`public void StartMatch(TournamentMatch match, bool isLastRound)`

**用途 / Purpose:** **用途 / Purpose:** 启动match流程或状态机。

```csharp
// 先通过子系统 API 拿到 TownHorseRaceMissionController 实例
TownHorseRaceMissionController townHorseRaceMissionController = ...;
townHorseRaceMissionController.StartMatch(match, false);
```

### SkipMatch
`public void SkipMatch(TournamentMatch match)`

**用途 / Purpose:** **用途 / Purpose:** 调用 SkipMatch 对应的操作。

```csharp
// 先通过子系统 API 拿到 TownHorseRaceMissionController 实例
TownHorseRaceMissionController townHorseRaceMissionController = ...;
townHorseRaceMissionController.SkipMatch(match);
```

### IsMatchEnded
`public bool IsMatchEnded()`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 match ended 状态或条件。

```csharp
// 先通过子系统 API 拿到 TownHorseRaceMissionController 实例
TownHorseRaceMissionController townHorseRaceMissionController = ...;
var result = townHorseRaceMissionController.IsMatchEnded();
```

### OnMatchEnded
`public void OnMatchEnded()`

**用途 / Purpose:** **用途 / Purpose:** 在 match ended 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 TownHorseRaceMissionController 实例
TownHorseRaceMissionController townHorseRaceMissionController = ...;
townHorseRaceMissionController.OnMatchEnded();
```

## 使用示例

```csharp
var controller = Mission.Current.GetMissionBehavior<TownHorseRaceMissionController>();
```

## 参见

- [本区域目录](../)